/* Galería: filtros con enlace directo (#flota, #conductores…) y visor accesible */
(function () {
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip'));
  var items = Array.prototype.slice.call(document.querySelectorAll('.galeria__item'));
  var estado = document.getElementById('galEstado');
  var validos = chips.map(function (c) { return c.getAttribute('data-filtro'); });
  var filtro = 'todas';

  function aplicar(f, actualizaHash) {
    if (validos.indexOf(f) < 0) { f = 'todas'; }
    filtro = f;
    var n = 0;
    items.forEach(function (li) {
      var ok = f === 'todas' || li.getAttribute('data-cat') === f;
      li.hidden = !ok;
      if (ok) { n++; }
    });
    chips.forEach(function (c) { c.setAttribute('aria-pressed', c.getAttribute('data-filtro') === f ? 'true' : 'false'); });
    estado.textContent = 'Mostrando ' + n + (n === 1 ? ' fotografía' : ' fotografías') + (f === 'todas' ? '' : ' · ' + document.querySelector('.chip[data-filtro="' + f + '"]').firstChild.textContent.trim());
    if (actualizaHash) {
      try { history.replaceState(null, '', f === 'todas' ? location.pathname : '#' + f); } catch (e) {}
    }
  }
  chips.forEach(function (c) {
    c.addEventListener('click', function () { aplicar(c.getAttribute('data-filtro'), true); });
  });
  window.addEventListener('hashchange', function () { aplicar(location.hash.replace('#', ''), false); });
  aplicar(location.hash.replace('#', ''), false);

  /* ---- visor ---- */
  var dlg = document.getElementById('lb');
  var img = document.getElementById('lbImg');
  var txt = document.getElementById('lbTxt');
  var cnt = document.getElementById('lbCnt');
  var btnAnt = document.getElementById('lbAnt');
  var btnSig = document.getElementById('lbSig');
  var lista = [], pos = 0, origen = null;

  function visibles() {
    return items.filter(function (li) { return !li.hidden; }).map(function (li) { return li.querySelector('.galeria__btn'); });
  }
  function precarga(i) {
    if (i < 0 || i >= lista.length) { return; }
    var p = new Image(); p.src = lista[i].getAttribute('data-full');
  }
  function mostrar(i) {
    pos = (i + lista.length) % lista.length;
    var b = lista[pos];
    img.src = b.getAttribute('data-full');
    img.alt = b.querySelector('img').alt;
    txt.textContent = img.alt;
    cnt.textContent = (pos + 1) + ' / ' + lista.length;
    precarga(pos + 1); precarga(pos - 1);
  }
  function abrir(btn) {
    lista = visibles(); origen = btn;
    pos = lista.indexOf(btn);
    if (typeof dlg.showModal === 'function') { dlg.showModal(); } else { dlg.setAttribute('open', ''); }
    document.body.classList.add('lb-abierto');
    mostrar(pos);
    document.getElementById('lbCerrar').focus();
  }
  function cerrar() {
    if (dlg.open) { dlg.close(); }
  }
  dlg.addEventListener('close', function () {
    document.body.classList.remove('lb-abierto');
    img.removeAttribute('src');
    if (origen) { origen.focus(); }
  });
  items.forEach(function (li) {
    li.querySelector('.galeria__btn').addEventListener('click', function (e) { abrir(e.currentTarget); });
  });
  btnAnt.addEventListener('click', function () { mostrar(pos - 1); });
  btnSig.addEventListener('click', function () { mostrar(pos + 1); });
  document.getElementById('lbCerrar').addEventListener('click', cerrar);
  dlg.addEventListener('click', function (e) {
    if (e.target === dlg || e.target.classList.contains('lb__marco')) { cerrar(); }
  });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { mostrar(pos - 1); }
    else if (e.key === 'ArrowRight') { mostrar(pos + 1); }
  });
  /* deslizar en pantallas táctiles */
  var x0 = null;
  dlg.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  dlg.addEventListener('touchend', function (e) {
    if (x0 === null) { return; }
    var dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) { mostrar(pos + (dx < 0 ? 1 : -1)); }
  }, { passive: true });
})();
