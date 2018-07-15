(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    26: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(0),
        i = n.n(r),
        o = n(7),
        c = n(13),
        p = n(1),
        s = n(14);
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var a = (function(e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        !(function(e, t) {
          (e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = t);
        })(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function() {
            this.props.coinPrice || this.props.actions.fetchCoinPrice();
          }),
          (n.render = function() {
            var e = this.props,
              t = e.coinPrice,
              n = e.fetchError;
            return e.isFetching
              ? i.a.createElement('div', null, 'Fetching data...')
              : n
                ? i.a.createElement('div', null, 'Something went wrong')
                : i.a.createElement(
                    'div',
                    null,
                    'Right now the price of LTC is $',
                    t,
                  );
          }),
          t
        );
      })(r.Component);
      u(a, 'propTypes', {
        actions: Object(p.shape)({ fetchCoinPrice: p.func.isRequired })
          .isRequired,
        coinPrice: p.string,
        fetchError: p.string,
        isFetching: p.bool,
      }),
        u(a, 'defaultProps', { coinPrice: '', fetchError: '', isFetching: !1 });
      t.default = Object(c.b)(
        function(e) {
          return {
            coinPrice: e.coinPrice,
            fetchError: e.fetchCoinPriceError,
            isFetching: e.isFetchingCoinPrice,
          };
        },
        function(e) {
          return { actions: Object(o.b)({ fetchCoinPrice: s.a }, e) };
        },
      )(a);
    },
  },
]);
