/* Money Move$ lightweight analytics — privacy-first, local-first.
   Stores events in localStorage; optional POST to window.MM_ANALYTICS_ENDPOINT. */
(function (global) {
  'use strict';
  var KEY = 'mm_events_v1';
  var SID_KEY = 'mm_sid';
  var MAX = 500;

  function sid() {
    try {
      var s = localStorage.getItem(SID_KEY);
      if (s) return s;
      s = 's_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
      localStorage.setItem(SID_KEY, s);
      return s;
    } catch (e) {
      return 'anon';
    }
  }

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || '[]');
    } catch (e) {
      return [];
    }
  }

  function save(list) {
    try {
      localStorage.setItem(KEY, JSON.stringify(list.slice(-MAX)));
    } catch (e) {}
  }

  function track(name, props) {
    if (!name) return;
    var ev = {
      name: String(name),
      props: props || {},
      t: Date.now(),
      path: (typeof location !== 'undefined' && location.pathname) || '',
      sid: sid(),
    };
    var list = load();
    list.push(ev);
    save(list);
    try {
      if (global.MM_ANALYTICS_ENDPOINT) {
        fetch(global.MM_ANALYTICS_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(ev),
          keepalive: true,
          mode: 'cors',
        }).catch(function () {});
      }
    } catch (e) {}
    try {
      if (global.MM_DEBUG) console.log('[mm]', ev.name, ev.props);
    } catch (e) {}
  }

  function summary() {
    var list = load();
    var by = {};
    list.forEach(function (e) {
      by[e.name] = (by[e.name] || 0) + 1;
    });
    return { total: list.length, by: by, sid: sid() };
  }

  function exportCSV() {
    var list = load();
    var rows = ['name,t,path,sid,props'];
    list.forEach(function (e) {
      rows.push(
        [
          JSON.stringify(e.name),
          e.t,
          JSON.stringify(e.path || ''),
          JSON.stringify(e.sid || ''),
          JSON.stringify(e.props || {}),
        ].join(',')
      );
    });
    return rows.join('\n');
  }

  global.MM = global.MM || {};
  global.MM.track = track;
  global.MM.analytics = { track: track, summary: summary, exportCSV: exportCSV, load: load };

  // Auto page view
  try {
    track('page_view', {
      title: document.title || '',
      ref: (document.referrer || '').slice(0, 200),
      q: (typeof location !== 'undefined' && location.search) || '',
    });
  } catch (e) {}
})(typeof window !== 'undefined' ? window : globalThis);
