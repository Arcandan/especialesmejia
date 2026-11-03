
var _a = document.getElementById('anio'); if (_a) { _a.textContent = new Date().getFullYear(); }

/* PROPUESTA V2 — barra de progreso, cabecera dinámica, botón "arriba" */
(function () {
  var barra = document.getElementById('progreso');
  var cab = document.querySelector('.cabecera');
  var arriba = document.getElementById('btnArriba');
  function onScroll() {
    var alto = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var pos = window.scrollY || document.documentElement.scrollTop;
    barra.style.width = (alto > 0 ? (pos / alto) * 100 : 0) + '%';
    cab.classList.toggle('contraida', pos > 12);
    arriba.classList.toggle('visible', pos > 480);
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  arriba.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: document.documentElement.style.scrollBehavior === 'auto' ? 'auto' : 'smooth' });
  });
})();

/* PROPUESTA V2 — revelado progresivo de secciones al hacer scroll */
(function () {
  var objetivos = document.querySelectorAll('.seccion .contenedor > *, .heroe__flotante');
  if (!('IntersectionObserver' in window)) { return; }
  objetivos.forEach(function (el) { el.classList.add('aparece'); });
  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  objetivos.forEach(function (el) { obs.observe(el); });
})();

/* PROPUESTA V2 — contador animado en la tarjeta de cifras del héroe */
(function () {
  var cifras = document.querySelectorAll('[data-cuenta]');
  if (!cifras.length) { return; }
  var reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function anima(el) {
    var meta = parseInt(el.getAttribute('data-cuenta'), 10);
    var sufijo = el.getAttribute('data-sufijo') || '';
    if (reducido) { el.textContent = meta + sufijo; return; }
    var inicio = null, dur = 1100;
    function paso(t) {
      if (!inicio) inicio = t;
      var p = Math.min(1, (t - inicio) / dur);
      var f = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(f * meta) + sufijo;
      if (p < 1) requestAnimationFrame(paso);
    }
    requestAnimationFrame(paso);
  }
  if ('IntersectionObserver' in window) {
    var obs2 = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { anima(en.target); obs2.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    cifras.forEach(function (el) { if (!reducido) { el.textContent = '0' + (el.getAttribute('data-sufijo') || ''); } obs2.observe(el); });
  } else {
    cifras.forEach(anima);
  }
})();
var btn = document.getElementById('menuBtn'), nav = document.getElementById('navMovil');
btn.addEventListener('click', function () {
  var abierto = nav.classList.toggle('abierto');
  btn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
});
nav.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') { nav.classList.remove('abierto'); btn.setAttribute('aria-expanded', 'false'); }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && nav.classList.contains('abierto')) { nav.classList.remove('abierto'); btn.setAttribute('aria-expanded','false'); btn.focus(); }
});
/* Formulario de postulación — envío simulado.
   Esta maqueta valida, muestra el estado de envío y confirma con un
   radicado, para que el cliente recorra el flujo completo. Al conectar
   el canal de recepción real, lo único que cambia es el contenido de
   transmitir(): el resto del flujo ya es el definitivo. */
(function () {
  var form = document.getElementById('formHV');
  var boton = document.getElementById('hvBoton');
  var exito = document.getElementById('hvExito');
  if (!form) { return; }
  var val = function (id) { return (document.getElementById(id).value || '').trim(); };

  var reglas = [
    ['hvNombre', 'errNombre', function (v) { return v.length >= 5 && v.indexOf(' ') > 0; }],
    ['hvCel', 'errCel', function (v) { return v.replace(/\D/g, '').length >= 10; }],
    ['hvMail', 'errMail', function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }],
    ['hvArchivo', 'errArchivo', function (v, el) { return el.files && el.files.length > 0; }]
  ];

  function validar(mostrar) {
    var primero = null;
    reglas.forEach(function (r) {
      var el = document.getElementById(r[0]);
      var err = document.getElementById(r[1]);
      var ok = r[2](val(r[0]), el);
      if (mostrar) { err.hidden = ok; }
      el.setAttribute('aria-invalid', ok ? 'false' : 'true');
      if (!ok && !primero) { primero = el; }
    });
    return primero;
  }

  // Al corregir un campo, su mensaje desaparece sin esperar el reenvío.
  reglas.forEach(function (r) {
    var el = document.getElementById(r[0]);
    el.addEventListener('input', function () {
      if (r[2](val(r[0]), el)) { document.getElementById(r[1]).hidden = true; }
    });
    el.addEventListener('change', function () {
      if (r[2](val(r[0]), el)) { document.getElementById(r[1]).hidden = true; }
    });
  });

  function radicado() {
    var d = new Date();
    var n = Math.floor(1000 + Math.random() * 9000);
    return 'TEM-' + d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0')
         + String(d.getDate()).padStart(2, '0') + '-' + n;
  }

  function transmitir() {
    // Punto único de sustitución cuando exista el canal real.
    return new Promise(function (r) { setTimeout(r, 1100); });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var malo = validar(true);
    if (malo) { malo.focus(); return; }

    var arch = document.getElementById('hvArchivo');
    boton.disabled = true;
    boton.innerHTML = '<span class="spin" aria-hidden="true"></span>Enviando…';
    form.classList.add('form__enviando');

    transmitir().then(function () {
      document.getElementById('exRad').textContent = radicado();
      document.getElementById('exNombre').textContent = val('hvNombre');
      document.getElementById('exCel').textContent = val('hvCel');
      document.getElementById('exMail').textContent = val('hvMail');
      document.getElementById('exArch').textContent = arch.files[0] ? arch.files[0].name : '—';
      document.getElementById('exFecha').textContent = new Date().toLocaleDateString('es-CO',
        { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
      form.hidden = true;
      form.classList.remove('form__enviando');
      exito.hidden = false;
      exito.focus();
    });
  });

  document.getElementById('hvOtra').addEventListener('click', function () {
    form.reset();
    reglas.forEach(function (r) {
      document.getElementById(r[1]).hidden = true;
      document.getElementById(r[0]).setAttribute('aria-invalid', 'false');
    });
    boton.disabled = false;
    boton.textContent = 'Enviar postulación';
    exito.hidden = true;
    form.hidden = false;
    document.getElementById('hvNombre').focus();
  });
})();

/* Horario en vivo — hora de Colombia, independiente de la zona del visitante. */
(function () {
  if (!document.getElementById('horEstado')) { return; }
  var H = {1: [[450, 720], [840, 1020]], 3: [[450, 720], [840, 1020]],
           2: [[420, 720], [840, 990]], 4: [[420, 720], [840, 990]], 5: [[420, 720], [840, 990]],
           6: [[480, 720]]};
  var DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  function hora(m) {
    var h = Math.floor(m / 60), mi = m % 60;
    if (m === 720) return '12:00 m.';
    var s = h < 12 ? 'a. m.' : 'p. m.'; var h12 = h > 12 ? h - 12 : h;
    return h12 + ':' + String(mi).padStart(2, '0') + ' ' + s;
  }
  function ahora() {
    var p = new Intl.DateTimeFormat('en-US', {timeZone: 'America/Bogota', weekday: 'short', hour: 'numeric',
      minute: 'numeric', hour12: false}).formatToParts(new Date());
    var o = {}; p.forEach(function (x) { o[x.type] = x.value; });
    var d = {Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6}[o.weekday];
    return {d: d, m: (parseInt(o.hour, 10) % 24) * 60 + parseInt(o.minute, 10)};
  }
  function actualizar() {
    var t = ahora(), caja = document.getElementById('horEstado'), txt = caja.querySelector('span');
    var hoy = H[t.d] || [], abierto = null, prox = null;
    hoy.forEach(function (f) { if (t.m >= f[0] && t.m < f[1]) abierto = f; });
    if (abierto) {
      txt.textContent = 'Abierto ahora · atendemos hasta las ' + hora(abierto[1]);
      caja.classList.remove('cerrado');
    } else {
      for (var k = 0; k < 8 && !prox; k++) {
        var dd = (t.d + k) % 7, fr = H[dd] || [];
        for (var j = 0; j < fr.length; j++) { if (k > 0 || fr[j][0] > t.m) { prox = [k, dd, fr[j][0]]; break; } }
      }
      var cuando = prox[0] === 0 ? 'hoy' : prox[0] === 1 ? 'mañana' : 'el ' + DIAS[prox[1]];
      txt.textContent = 'Cerrado en este momento · abrimos ' + cuando + ' a las ' + hora(prox[2]);
      caja.classList.add('cerrado');
    }
    caja.hidden = false;
    document.querySelectorAll('.hor').forEach(function (c) {
      var es = c.getAttribute('data-dias').split(',').indexOf(String(t.d)) > -1;
      c.classList.toggle('hoy', es);
      var et = c.querySelector('.hor__hoy');
      if (es && !et) { et = document.createElement('span'); et.className = 'hor__hoy'; et.textContent = 'Hoy'; c.appendChild(et); }
      if (!es && et) { et.remove(); }
    });
  }
  actualizar(); setInterval(actualizar, 60000);
})();

/* Obs.3 #17 — política integral desplegable */
document.querySelectorAll('.pol__toggle').forEach(function (b) {
  b.addEventListener('click', function () {
    var r = document.getElementById(b.getAttribute('aria-controls'));
    var abre = b.getAttribute('aria-expanded') !== 'true';
    b.setAttribute('aria-expanded', abre ? 'true' : 'false');
    r.hidden = !abre;
    b.querySelector('span').textContent = abre ? 'Ocultar la política integral' : 'Leer la política integral';
  });
});
