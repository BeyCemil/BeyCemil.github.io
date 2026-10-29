/* Round 5 shell: menubar, toolbar, tabs, status bar, game inspector window, career and contact views. */
(function () {
  var S = window.SITE, C = S.cats, P = S.person, G = S.games;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function $(id) { return document.getElementById(id); }

  var Shell = window.Shell = { state: { play: true, paused: false, step: 0 } };
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) Shell.state.play = false;
  Shell.advance = function () { if (Shell.state.step > 0) { Shell.state.step--; return true; } return Shell.state.play && !Shell.state.paused; };
  Shell.say = function (t) { var e = $('statusText'); if (e) e.textContent = t; };
  Shell.esc = esc;
  // copies text to the clipboard, with a fallback for browsers that block the async API on local files
  Shell.copy = function (text) {
    return new Promise(function (res) {
      function fallback() { var t = document.createElement('textarea'); t.value = text; t.setAttribute('readonly', ''); t.style.cssText = 'position:fixed;left:-9999px;top:0'; document.body.appendChild(t); t.select(); var ok = false; try { ok = document.execCommand('copy'); } catch (e) {} t.remove(); res(ok); }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { res(true); }, fallback); else fallback();
    });
  };
  // 329858 becomes 330K, 72294 becomes 72.3K
  Shell.k = function (n) { if (n < 1000) return String(n); var v = n / 1000; return (v >= 100 ? Math.round(v) : Math.round(v * 10) / 10) + 'K'; };
  Shell.n = function (n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); };

  /* ---------- chrome ---------- */
  var MENUS = {
    File: [['Send Email...', function () { location.href = 'mailto:' + P.email; }]],
    Edit: [['Copy Email Address', function () { Shell.copy(P.email).then(function (ok) { Shell.say(ok ? 'Copied ' + P.email : P.email); }); }]],
    Assets: G.map(function (g) { return [g.title, function () { Shell.openGame(g.id); }]; }),
    GameObject: [['Close all windows', function () { Shell.closeWins(); }], ['Career', function () { Shell.win('career'); }], ['Contact', function () { Shell.win('contact'); }]],
    Component: [['GitHub', function () { window.open(P.links.github, '_blank'); }], ['LinkedIn', function () { window.open(P.links.linkedin, '_blank'); }], ['ArtStation', function () { window.open(P.links.artstation, '_blank'); }]],
    Window: [['Pause or resume the background', function () { $('pause').click(); }]],
    Help: [['About this portfolio', function () { Shell.say('A portfolio in a Unity Editor frame. Click a game to open its inspector.'); }]]
  };
  function build() {
    var bar = $('menubar'); bar.innerHTML = '';
    Object.keys(MENUS).forEach(function (k) {
      var d = document.createElement('div'); d.innerHTML = '<button aria-haspopup="true">' + k + '</button><div class="dd"></div>';
      MENUS[k].forEach(function (it) { var b = document.createElement('button'); b.textContent = it[0]; b.addEventListener('click', function () { close(); it[1](); }); d.querySelector('.dd').appendChild(b); });
      d.querySelector('button').addEventListener('click', function (e) { var o = d.classList.contains('open'); close(); if (!o) d.classList.add('open'); e.stopPropagation(); });
      d.addEventListener('mouseenter', function () { if (bar.querySelector('.open')) { close(); d.classList.add('open'); } });
      bar.appendChild(d);
    });
    function close() { bar.querySelectorAll('.open').forEach(function (e) { e.classList.remove('open'); }); }
    document.addEventListener('click', close);

    $('toolbar').innerHTML =
      '<div class="l"><a class="acct" href="#" id="home"><img src="' + P.logo + '" alt=""><span>' + P.name + ' <small>BeyCemil</small></span></a></div>' +
      '<div class="tb-c"><button class="tb on" id="play" title="Play" aria-label="Play" aria-pressed="true"><svg viewBox="0 0 16 16"><path d="M4 2.5v11l9-5.5z"/></svg></button>' +
      '<button class="tb" id="pause" title="Pause" aria-label="Pause" aria-pressed="false"><svg viewBox="0 0 16 16"><path d="M4 2h3v12H4zM9 2h3v12H9z"/></svg></button>' +
      '<button class="tb" id="step" title="Step" aria-label="Step one frame"><svg viewBox="0 0 16 16"><path d="M3 2.5v11l7-5.5zM11 2h2.5v12H11z"/></svg></button></div>' +
      '<div class="r"><button class="tb" id="goContact">Contact</button></div>';
    $('tabs').innerHTML = '<button data-tab="games" class="act">Games</button><button data-tab="career">Career</button><button data-tab="contact">Contact</button><span class="sp"></span><span class="hint">Click a game to open its inspector</span>';
    $('status').innerHTML = '<span><span class="dot"></span><span id="statusText">Ready.</span></span><span class="r">IKnowAGuy 1.0: 100,000+ copies sold</span>';

    $('play').addEventListener('click', function () { Shell.state.play = !Shell.state.play; Shell.state.paused = false; sync(); });
    $('pause').addEventListener('click', function () { Shell.state.paused = !Shell.state.paused; if (!Shell.state.play) Shell.state.play = true; sync(); });
    $('step').addEventListener('click', function () { Shell.state.step = 1; Shell.state.paused = true; sync(); });
    $('home').addEventListener('click', function (e) { e.preventDefault(); Shell.closeWins(); });
    $('goContact').addEventListener('click', function () { Shell.win('contact'); });
    $('tabs').addEventListener('click', function (e) { var b = e.target.closest('[data-tab]'); if (b) Shell.toggleWin(b.dataset.tab); });
    sync();
  }
  function sync() {
    $('play').classList.toggle('on', Shell.state.play && !Shell.state.paused); $('play').setAttribute('aria-pressed', Shell.state.play && !Shell.state.paused);
    $('pause').classList.toggle('on', Shell.state.paused); $('pause').setAttribute('aria-pressed', Shell.state.paused);
    Shell.say(!Shell.state.play ? 'Stopped.' : Shell.state.paused ? 'Paused.' : 'Ready.');
    window.dispatchEvent(new Event('shell'));
  }

  /* ---------- floating windows: Career and Contact ---------- */
  // Real editor style windows: drag the title bar, resize from the corner, click one to bring it to the front.
  var WINS = {}, ORDER = [], SAVED = {}, cur = null, idx = 0, clip = false, lastFocus = null;
  function careerHtml() {
    var jobs = S.career.map(function (c, i) {
      return '<details class="job"' + (i === 0 ? ' open' : '') + '><summary><b>' + esc(c.title) + '</b><span>' + esc(c.period) + '</span></summary><div class="co">' + esc(c.company) + '</div><p>' + esc(c.summary) + '</p><ul>' + c.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul></details>';
    }).join('');
    var certs = S.certs.map(function (c) { return '<div class="row"><a href="' + c.link + '" target="_blank" rel="noopener">' + esc(c.title) + '</a><span>' + esc(c.issuer) + '</span></div>'; }).join('');
    return '<div class="fsec">EXPERIENCE</div>' + jobs + '<div class="fsec" style="margin-top:20px">CERTIFICATES</div>' + certs;
  }
  function contactHtml() {
    var l = P.links;
    return '<p class="sub" style="margin-bottom:4px">' + esc(P.tagline) + '</p><a class="bigmail" href="mailto:' + P.email + '">' + P.email + '</a><div class="links"><a class="btn pri" href="mailto:' + P.email + '">Email me</a><a class="btn" href="' + l.github + '" target="_blank" rel="noopener">GitHub</a><a class="btn" href="' + l.linkedin + '" target="_blank" rel="noopener">LinkedIn</a><a class="btn" href="' + l.artstation + '" target="_blank" rel="noopener">ArtStation</a></div>';
  }
  var DEFS = { career: { title: 'Career', w: 720, h: 640, html: careerHtml }, contact: { title: 'Contact', w: 520, h: 268, html: contactHtml } };
  function isPhone() { return matchMedia('(max-width: 760px)').matches; }
  function stack() { ORDER.forEach(function (n, i) { var el = WINS[n]; if (el) { el.style.zIndex = 40 + i; el.classList.toggle('focus', i === ORDER.length - 1); } }); }
  function raise(name) { ORDER = ORDER.filter(function (n) { return n !== name; }); ORDER.push(name); stack(); }
  function marks() { document.querySelectorAll('#tabs [data-tab]').forEach(function (b) { var n = b.dataset.tab; if (n === 'games') return; var open = !!WINS[n]; b.classList.toggle('open', open); b.setAttribute('aria-pressed', open); }); }
  Shell.win = function (name) {
    var d = DEFS[name]; if (!d) return;
    if (WINS[name]) { raise(name); WINS[name].focus({ preventScroll: true }); return; }
    var el = document.createElement('section'); el.className = 'fwin'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', d.title); el.tabIndex = -1; el.dataset.win = name;
    el.innerHTML = '<div class="fbar"><span class="ft">' + d.title + '</span><span class="sp"></span><button class="fclose" aria-label="Close ' + d.title + '">&times;</button></div><div class="fbody">' + d.html() + '</div>';
    var s = SAVED[name], w = s ? s.w : Math.min(d.w, innerWidth - 16), h = s ? s.h : Math.min(d.h, innerHeight - 110);
    var x = s ? s.x : (name === 'career' ? Math.max(12, innerWidth * .07) : Math.max(12, innerWidth - w - innerWidth * .07)), y = s ? s.y : (name === 'career' ? 96 : 150);
    el.style.width = w + 'px'; el.style.height = h + 'px'; el.style.left = x + 'px'; el.style.top = y + 'px';
    document.body.appendChild(el); WINS[name] = el; raise(name); marks(); Shell.say(d.title + ' opened');
    el.addEventListener('pointerdown', function () { if (ORDER[ORDER.length - 1] !== name) raise(name); });
    el.querySelector('.fclose').addEventListener('click', function () { Shell.closeWin(name); });
    var bar = el.querySelector('.fbar'), sx, sy, ox, oy, dragging = false;
    bar.addEventListener('pointerdown', function (e) {
      if (e.target.closest('button') || isPhone()) return;
      dragging = true; sx = e.clientX; sy = e.clientY; ox = el.offsetLeft; oy = el.offsetTop; try { bar.setPointerCapture(e.pointerId); } catch (x) {} bar.classList.add('drag'); e.preventDefault();
    });
    bar.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var nx = ox + e.clientX - sx, ny = oy + e.clientY - sy;
      nx = Math.max(-el.offsetWidth + 90, Math.min(innerWidth - 90, nx)); ny = Math.max(58, Math.min(innerHeight - 40, ny));    // the title bar always stays reachable
      el.style.left = nx + 'px'; el.style.top = ny + 'px';
    });
    function end(e) { if (!dragging) return; dragging = false; bar.classList.remove('drag'); try { bar.releasePointerCapture(e.pointerId); } catch (x) {} }
    bar.addEventListener('pointerup', end); bar.addEventListener('pointercancel', end);
    bar.addEventListener('dblclick', function () { Shell.closeWin(name); });
    el.focus({ preventScroll: true });
  };
  Shell.closeWin = function (name) {
    var el = WINS[name]; if (!el) return;
    SAVED[name] = { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight };
    el.remove(); delete WINS[name]; ORDER = ORDER.filter(function (n) { return n !== name; }); stack(); marks(); Shell.say('Ready.');
  };
  Shell.closeWins = function () { Object.keys(WINS).forEach(Shell.closeWin); };
  Shell.toggleWin = function (name) {
    if (name === 'games') { Shell.closeWins(); return; }
    if (WINS[name] && ORDER[ORDER.length - 1] === name) Shell.closeWin(name); else Shell.win(name);
  };
  Shell.tab = Shell.toggleWin;
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !cur && ORDER.length) Shell.closeWin(ORDER[ORDER.length - 1]); });

  /* ---------- game inspector, a window in the middle of the screen ---------- */
  cur = null; idx = 0; clip = false; lastFocus = null;
  Shell.openGame = function (id) {
    cur = S.game(id); idx = 0; clip = false; lastFocus = document.activeElement; renderModal();
    var m = $('modal'); m.classList.add('on'); m.setAttribute('aria-hidden', 'false'); Shell.say('Inspecting ' + cur.object);
    var c = $('mClose'); if (c) c.focus();
  };
  Shell.closeGame = function () {
    var m = $('modal'); if (!m || !cur) return;
    m.classList.remove('on'); m.setAttribute('aria-hidden', 'true'); cur = null; var v = $('mVid'); if (v) v.pause();
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) {} } Shell.say('Ready.');
  };
  function renderModal() {
    var g = cur, canc = g.status === 'Cancelled', n = g.shots.length, i = ((idx % n) + n) % n, code = g.code;
    var media = clip && g.clip ? '<video id="mVid" src="' + g.clip + '" poster="' + g.poster + '" autoplay muted loop playsinline></video>' : '<img src="' + g.shots[i] + '" alt="' + esc(g.title) + ' screenshot ' + (i + 1) + '">';
    var hl = S.systems.filter(function (s) { return s.game === g.id; });
    var max = Math.max.apply(null, code.areas.map(function (a) { return a.lines; }));
    var bars = code.areas.slice(0, 7).map(function (a) { return '<div class="cb"><span>' + esc(a.name) + '</span><span class="cv" title="' + Shell.n(a.lines) + ' lines">' + Shell.k(a.lines) + '</span><span class="ct"><i style="width:' + Math.max(2, a.lines / max * 100) + '%"></i></span></div>'; }).join('');
    $('mwin').innerHTML =
      '<div class="mbar"><span class="mtab" id="mTitle">Inspector</span><span class="mname">' + esc(g.object) + '</span><span class="sp"></span><button class="mclose" id="mClose" aria-label="Close inspector">&times;</button></div>' +
      '<div class="mbody"><div class="mleft"><div class="shot">' + media + '<button class="n l" data-n="-1" aria-label="Previous screenshot">&#8249;</button><button class="n r" data-n="1" aria-label="Next screenshot">&#8250;</button><span class="c">' + (clip ? 'clip' : (i + 1) + ' / ' + n) + '</span></div>' +
      '<div class="ths">' + g.shots.map(function (s, k) { return '<button data-t="' + k + '" class="' + (k === i && !clip ? 'on' : '') + '" aria-label="Screenshot ' + (k + 1) + '"><img src="' + s + '" alt=""></button>'; }).join('') + '</div>' +
      '<div class="acts">' + (g.steam ? '<a class="btn pri" href="' + g.steam + '" target="_blank" rel="noopener">View on Steam</a>' : '') + (g.clip ? '<button class="btn" data-clip="1">' + (clip ? 'Show screenshots' : 'Play clip') + '</button>' : '') + '</div></div>' +
      '<div class="mright" style="--gc:' + g.color + '"><h2>' + esc(g.title) + '</h2><div class="tagrow"><span class="pill ' + (canc ? 'bad' : 'ok') + '">' + g.status + '</span>' + (g.version ? '<span class="pill acc">Version ' + g.version + '</span>' : '') + (g.milestone ? '<span class="pill acc">' + esc(g.milestone) + '</span>' : '') + '</div>' +
      '<p style="color:var(--text)">' + esc(g.role) + ', ' + esc(g.studio) + '</p><p>' + esc(g.desc) + '</p>' + (canc ? '<p style="color:#f0a0ae">' + esc(g.note) + '</p>' : '') +
      (g.devNote ? '<p class="dnote">Note: ' + esc(g.devNote) + '</p>' : '') +
      '<div class="sec">INSIDE THE CODE</div><div class="stats3"><div><b title="' + Shell.n(code.lines) + ' lines">' + Shell.k(code.lines) + '</b><span>lines of C#</span></div><div><b>' + Shell.n(code.files) + '</b><span>script files</span></div><div><b>' + Shell.n(code.types) + '</b><span>classes and types</span></div></div>' +
      '<div class="cbs">' + bars + '</div><div class="note">Counted from the game\'s own C# in its git repository. Third party plugins are not included.</div>' +
      '<div class="sec">HIGHLIGHTS</div><div class="hl">' + hl.map(function (s) { return '<i style="--c:' + C[s.cat].color + '">' + esc(s.name) + '</i>'; }).join('') + '</div></div></div>';
  }
  var modal = null;
  document.addEventListener('click', function (e) {
    var gc = e.target.closest('[data-game]'); if (gc) { Shell.openGame(gc.dataset.game); return; }
    if (!cur) return;
    if (e.target.closest('#mClose') || e.target.id === 'modal') { Shell.closeGame(); return; }
    var nv = e.target.closest('[data-n]'); if (nv) { idx += +nv.dataset.n; clip = false; renderModal(); return; }
    var th = e.target.closest('[data-t]'); if (th) { idx = +th.dataset.t; clip = false; renderModal(); return; }
    if (e.target.closest('[data-clip]')) { clip = !clip; renderModal(); }
  });
  document.addEventListener('keydown', function (e) {
    if (!cur) return;
    if (e.key === 'Escape') { Shell.closeGame(); return; }
    if (e.key === 'ArrowRight') { idx++; clip = false; renderModal(); }
    if (e.key === 'ArrowLeft') { idx--; clip = false; renderModal(); }
    if (e.key === 'Tab') {            // keep focus inside the window
      var f = [].slice.call($('mwin').querySelectorAll('button,a[href]')).filter(function (x) { return x.offsetParent !== null; });
      if (!f.length) return; var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  Shell.mount = function () { build(); };
  Shell.noise = (function () {
    function hash(x, y) { var h = x * 374761393 + y * 668265263; h = (h ^ (h >> 13)) * 1274126177; return ((h ^ (h >> 16)) >>> 0) / 4294967295; }
    function sm(t) { return t * t * (3 - 2 * t); }
    return function (x, y) { var xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi; var a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1); var u = sm(xf), v = sm(yf); return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v; };
  })();
})();
