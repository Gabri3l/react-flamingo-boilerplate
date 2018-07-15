(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    29: function(e, t, r) {
      'use strict';
      r.r(t);
      var n = r(0),
        a = r.n(n),
        u = r(15),
        p = r(1),
        o = function(e) {
          var t = e.route;
          return a.a.createElement(
            'div',
            null,
            a.a.createElement('p', null, 'App'),
            a.a.createElement('div', null, Object(u.a)(t.routes)),
          );
        };
      (o.propTypes = {
        route: Object(p.shape)({ routes: p.array }).isRequired,
      }),
        (t.default = o);
    },
  },
]);
