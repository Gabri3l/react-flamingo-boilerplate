!(function(e) {
  var t = {};
  function i(n) {
    if (t[n]) return t[n].exports;
    var s = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
  }
  (i.m = e),
    (i.c = t),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var s in e)
          i.d(
            n,
            s,
            function(t) {
              return e[t];
            }.bind(null, s),
          );
      return n;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(t, 'a', t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ''),
    (i.oe = function(e) {
      process.nextTick(function() {
        throw e;
      });
    }),
    i((i.s = 32));
})([
  function(e, t) {
    e.exports = require('react');
  },
  function(e, t) {
    e.exports = require('prop-types');
  },
  function(e, t, i) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.fetchCoinPrice = t.setElse = t.setTest = void 0);
    var n = i(11);
    (t.setTest = (e) => ({ type: n.SET_TEST, payload: e })),
      (t.setElse = (e) => ({ type: n.SET_ELSE, payload: e })),
      (t.fetchCoinPrice = () => ({
        types: [
          n.FETCH_COIN_PRICE_PENDING,
          n.FETCH_COIN_PRICE_SUCCESS,
          n.FETCH_COIN_PRICE_ERROR,
        ],
        callAPI: () =>
          fetch('https://api.coinmarketcap.com/v1/ticker/litecoin/').then((e) =>
            e.json(),
          ),
        formatData: (e) => ({ coinPrice: e[0].price_usd }),
      }));
  },
  function(e, t) {
    e.exports = require('react-redux');
  },
  function(e, t) {
    e.exports = require('redux');
  },
  function(e, t) {
    e.exports = require('react-router-dom');
  },
  function(e, t, i) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = i(0),
      s = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n),
      a = i(4),
      o = i(3),
      l = i(1),
      r = i(2);
    function u(e, t, i) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = i),
        e
      );
    }
    class d extends n.Component {
      componentDidMount() {
        this.props.coinPrice || this.props.actions.fetchCoinPrice();
      }
      render() {
        const { coinPrice: e, fetchError: t, isFetching: i } = this.props;
        return i
          ? s.default.createElement('div', null, 'Fetching data...')
          : t
            ? s.default.createElement('div', null, 'Something went wrong')
            : s.default.createElement(
                'div',
                null,
                'Right now the price of LTC is $',
                e,
              );
      }
    }
    u(d, 'propTypes', {
      actions: (0, l.shape)({ fetchCoinPrice: l.func.isRequired }).isRequired,
      coinPrice: l.string,
      fetchError: l.string,
      isFetching: l.bool,
    }),
      u(d, 'defaultProps', { coinPrice: '', fetchError: '', isFetching: !1 });
    t.default = (0, o.connect)(
      (e) => ({
        coinPrice: e.coinPrice,
        fetchError: e.fetchCoinPriceError,
        isFetching: e.isFetchingCoinPrice,
      }),
      (e) => ({
        actions: (0, a.bindActionCreators)(
          { fetchCoinPrice: r.fetchCoinPrice },
          e,
        ),
      }),
    )(d);
  },
  function(e, t, i) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = i(0),
      s = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n),
      a = i(5);
    t.default = class extends n.Component {
      constructor(e) {
        super(e),
          (function(e, t, i) {
            t in e
              ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = i);
          })(this, 'onButtonClick', () => {
            this.setState({
              test: "And it's not styled withe styled components",
            });
          }),
          (this.state = { test: 'This component has its own state.' });
      }
      render() {
        return s.default.createElement(
          'div',
          null,
          s.default.createElement('h1', null, 'About'),
          s.default.createElement('p', null, this.state.test),
          s.default.createElement(a.Link, { to: '/' }, 'Home'),
          s.default.createElement('br', null),
          s.default.createElement('br', null),
          s.default.createElement(
            'button',
            { onClick: this.onButtonClick, type: 'button' },
            'Change Text',
          ),
        );
      }
    };
  },
  function(e, t) {
    e.exports = require('react-emotion');
  },
  function(e, t, i) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = m(i(0)),
      s = i(4),
      a = i(3),
      o = i(1),
      l = i(5),
      r = m(i(17)),
      u = i(2),
      d = m(i(16)),
      c = i(14);
    function m(e) {
      return e && e.__esModule ? e : { default: e };
    }
    const j = ({ actions: e, test: t }) =>
      n.default.createElement(
        'div',
        null,
        n.default.createElement(c.Title, null, 'This is the Duomo of Firenze!'),
        n.default.createElement('img', {
          alt: 'florence duomo',
          src: r.default,
          width: '100',
        }),
        n.default.createElement(c.Text, null, 'This p is styled with emotion.'),
        n.default.createElement(
          c.Text,
          null,
          'This boilerplate supports env vars => ENV_VAR',
        ),
        n.default.createElement(c.Text, null, t),
        n.default.createElement(
          l.Link,
          { style: { marginRight: '10px' }, to: '/about' },
          'About',
        ),
        n.default.createElement(l.Link, { to: '/coin' }, 'Coin'),
        n.default.createElement('br', null),
        n.default.createElement('br', null),
        n.default.createElement(
          d.default,
          { onClick: () => e.setTest('State has been updated!') },
          'Click me',
        ),
      );
    j.propTypes = {
      actions: (0, o.shape)({ setTest: o.func.isRequired }).isRequired,
      test: o.string.isRequired,
    };
    t.default = (0, a.connect)(
      (e) => ({ test: e.test }),
      (e) => ({
        actions: (0, s.bindActionCreators)({ setTest: u.setTest }, e),
      }),
    )(j);
  },
  function(e, t, i) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(i(0)),
      s = i(13),
      a = i(1);
    const o = ({ route: e }) =>
      n.default.createElement(
        'div',
        null,
        n.default.createElement('p', null, 'App'),
        n.default.createElement('div', null, (0, s.renderRoutes)(e.routes)),
      );
    (o.propTypes = { route: (0, a.shape)({ routes: a.array }).isRequired }),
      (t.default = o);
  },
  function(e, t, i) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    (t.FETCH_COIN_PRICE_ERROR = 'FETCH_COIN_PRICE_ERROR'),
      (t.FETCH_COIN_PRICE_PENDING = 'FETCH_COIN_PRICE_PENDING'),
      (t.FETCH_COIN_PRICE_SUCCESS = 'FETCH_COIN_PRICE_SUCCESS'),
      (t.SET_TEST = 'SET_TEST'),
      (t.SET_ELSE = 'SET_ELSE');
  },
  function(e, t) {
    e.exports = require('@react-firenze/react-loadable');
  },
  function(e, t) {
    e.exports = require('react-router-config');
  },
  function(e, t, i) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.Text = t.Title = void 0);
    var n = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(i(8));
    (t.Title = (0, n.default)('h1')({ fontFamily: 'monospace', fontSize: 30 })),
      (t.Text = (0, n.default)('p')({ fontFamily: 'monospace', fontSize: 15 }));
  },
  function(e, t, i) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(i(8));
    t.default = (0, n.default)('button')({
      width: 100,
      height: 25,
      border: 'solid 1px black',
      background: 'white',
      fontFamily: 'monospace',
      fontSize: 12,
      cursor: 'pointer',
      margin: '5px 0',
      ':focus': { outline: 'none' },
      ':hover': { background: 'black', color: 'white' },
    });
  },
  function(e, t, i) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = o(i(0)),
      s = i(1),
      a = o(i(15));
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    const l = ({ children: e, onClick: t }) =>
      n.default.createElement(a.default, { onClick: t, type: 'button' }, e);
    (l.propTypes = {
      children: s.string.isRequired,
      onClick: s.func.isRequired,
    }),
      (t.default = l);
  },
  function(e, t) {
    e.exports = '/images/santa-maria-del-fiore.210c02d6.svg';
  },
  function(e, t, i) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.createReducer = function(e, t) {
        return function(i = e, n) {
          return t.hasOwnProperty(n.type) ? t[n.type](i, n) : i;
        };
      });
  },
  function(e, t, i) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = i(11);
    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(i);
        'function' == typeof Object.getOwnPropertySymbols &&
          (n = n.concat(
            Object.getOwnPropertySymbols(i).filter(function(e) {
              return Object.getOwnPropertyDescriptor(i, e).enumerable;
            }),
          )),
          n.forEach(function(t) {
            a(e, t, i[t]);
          });
      }
      return e;
    }
    function a(e, t, i) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = i),
        e
      );
    }
    const o = (0, i(18).createReducer)(
      {
        coinPrice: null,
        fetchCoinPriceError: null,
        test: 'If you click the button this text will update through Redux!',
        else: 'Just another field!',
      },
      {
        [n.FETCH_COIN_PRICE_ERROR]: (e, t) =>
          s({}, e, {
            fetchCoinPriceError: t.error.message,
            isFetchingCoinPrice: !1,
          }),
        [n.FETCH_COIN_PRICE_PENDING]: (e) =>
          s({}, e, { fetchCoinPriceError: null, isFetchingCoinPrice: !0 }),
        [n.FETCH_COIN_PRICE_SUCCESS]: (e, t) =>
          s({}, e, {
            fetchCoinPriceError: null,
            isFetchingCoinPrice: !1,
            coinPrice: t.payload.coinPrice,
          }),
        [n.SET_TEST]: (e, t) => s({}, e, { test: t.payload }),
        [n.SET_ELSE]: (e, t) => s({}, e, { else: t.payload }),
      },
    );
    t.default = o;
  },
  function(e, t, i) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = o(i(0)),
      s = o(i(12)),
      a = i(2);
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    const l = [
      {
        component: (0, s.default)({
          loader: () => Promise.resolve().then(i.t.bind(null, 10, 7)),
          modules: ['./App'],
          webpack: () => [10],
          loading: () => n.default.createElement('div', null, 'Loading...'),
        }),
        routes: [
          {
            path: '/',
            exact: !0,
            component: (0, s.default)({
              loader: () => Promise.resolve().then(i.t.bind(null, 9, 7)),
              modules: ['components/Landing'],
              webpack: () => [9],
              loading: () => n.default.createElement('div', null, 'Loading...'),
            }),
          },
          {
            path: '/about',
            exact: !0,
            component: (0, s.default)({
              loader: () => Promise.resolve().then(i.t.bind(null, 7, 7)),
              modules: ['components/About'],
              webpack: () => [7],
              loading: () => n.default.createElement('div', null, 'Loading...'),
            }),
          },
          {
            path: '/coin',
            exact: !0,
            component: (0, s.default)({
              loader: () => Promise.resolve().then(i.t.bind(null, 6, 7)),
              modules: ['containers/MainContainer'],
              webpack: () => [6],
              loading: () => n.default.createElement('div', null, 'Loading...'),
            }),
            fetchData: (e) => e.dispatch((0, a.fetchCoinPrice)()),
          },
        ],
      },
    ];
    t.default = l;
  },
  function(e) {
    e.exports = {
      'containers/MainContainer': [
        {
          id: 26,
          name: '../src/containers/MainContainer.js',
          file: '0.bda9d4aa493ad9d07449.js',
          publicPath: '/js/0.bda9d4aa493ad9d07449.js',
        },
      ],
      'components/About': [
        {
          id: 27,
          name: '../src/components/About/index.js',
          file: '1.ed71a68e8ac0ebe69aa1.js',
          publicPath: '/js/1.ed71a68e8ac0ebe69aa1.js',
        },
      ],
      './Link': [
        {
          id: 28,
          name: '../node_modules/react-router-dom/es/Link.js',
          file: '1.ed71a68e8ac0ebe69aa1.js',
          publicPath: '/js/1.ed71a68e8ac0ebe69aa1.js',
        },
        {
          id: 28,
          name: '../node_modules/react-router-dom/es/Link.js',
          file: '2.626307da8daa4ad8875d.js',
          publicPath: '/js/2.626307da8daa4ad8875d.js',
        },
      ],
      'components/Landing': [
        {
          id: 25,
          name: '../src/components/Landing/index.js',
          file: '2.626307da8daa4ad8875d.js',
          publicPath: '/js/2.626307da8daa4ad8875d.js',
        },
      ],
      'images/santa-maria-del-fiore.svg': [
        {
          id: 65,
          name: '../assets/images/santa-maria-del-fiore.svg',
          file: '2.626307da8daa4ad8875d.js',
          publicPath: '/js/2.626307da8daa4ad8875d.js',
        },
      ],
      './App': [
        {
          id: 29,
          name: '../src/App.js',
          file: '3.c33d293955530b4162bc.js',
          publicPath: '/js/3.c33d293955530b4162bc.js',
        },
      ],
      react: [
        {
          id: 0,
          name: '../node_modules/react/index.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'prop-types': [
        {
          id: 1,
          name: '../node_modules/prop-types/index.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      warning: [
        {
          id: 2,
          name: '../node_modules/history/node_modules/warning/browser.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
        {
          id: 5,
          name: '../node_modules/warning/warning.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      invariant: [
        {
          id: 3,
          name: '../node_modules/invariant/browser.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'constants/actions': [
        {
          id: 4,
          name: '../src/constants/actions.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      '@react-firenze/react-loadable': [
        {
          id: 6,
          name: '../node_modules/@react-firenze/react-loadable/lib/index.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      redux: [
        {
          id: 7,
          name: '../node_modules/redux/es/redux.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './../../webpack/buildin/global.js': [
        {
          id: 8,
          name: '../node_modules/webpack/buildin/global.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'react-router/matchPath': [
        {
          id: 9,
          name: '../node_modules/react-router/matchPath.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'symbol-observable': [
        {
          id: 10,
          name: '../node_modules/symbol-observable/es/index.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      emotion: [
        {
          id: 11,
          name: '../node_modules/emotion/dist/index.esm.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      history: [
        {
          id: 12,
          name: '../node_modules/history/es/index.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'react-redux': [
        {
          id: 13,
          name: '../node_modules/react-redux/es/index.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'actions/actionCreators': [
        {
          id: 14,
          name: '../src/actions/actionCreators.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'react-router-config': [
        {
          id: 15,
          name: '../node_modules/react-router-config/es/index.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './isObjectLike': [
        {
          id: 16,
          name: '../node_modules/lodash/isObjectLike.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './_Symbol': [
        {
          id: 17,
          name: '../node_modules/lodash/_Symbol.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './_baseGetTag': [
        {
          id: 18,
          name: '../node_modules/lodash/_baseGetTag.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      '@emotion/memoize': [
        {
          id: 19,
          name: '../node_modules/@emotion/memoize/dist/memoize.esm.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'fbjs/lib/emptyFunction': [
        {
          id: 20,
          name: '../node_modules/fbjs/lib/emptyFunction.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'fbjs/lib/emptyObject': [
        {
          id: 21,
          name: '../node_modules/fbjs/lib/emptyObject.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'fbjs/lib/invariant': [
        {
          id: 22,
          name: '../node_modules/fbjs/lib/invariant.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'object-assign': [
        {
          id: 23,
          name: '../node_modules/object-assign/index.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'create-emotion': [
        {
          id: 24,
          name: '../node_modules/create-emotion/dist/index.esm.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'redux-slim-async': [
        {
          id: 30,
          name: '../node_modules/redux-slim-async/lib/index.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'stylis-rule-sheet': [
        {
          id: 31,
          name: '../node_modules/stylis-rule-sheet/index.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'react-dom': [
        {
          id: 32,
          name: '../node_modules/react-dom/index.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './ponyfill.js': [
        {
          id: 33,
          name: '../node_modules/symbol-observable/es/ponyfill.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './_freeGlobal.js': [
        {
          id: 34,
          name: '../node_modules/lodash-es/_freeGlobal.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'hoist-non-react-statics': [
        {
          id: 35,
          name:
            '../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'react-router/Route': [
        {
          id: 36,
          name: '../node_modules/react-router/Route.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'react-router/Switch': [
        {
          id: 37,
          name: '../node_modules/react-router/Switch.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'react-router/Router': [
        {
          id: 38,
          name: '../node_modules/react-router/Router.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      '/mnt/c/Users/Gabry/Projects/react-flamingo-boilerplate/src/ClientApp.js': [
        {
          id: 39,
          name: '../src/ClientApp.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './errors': [
        {
          id: 40,
          name: '../node_modules/redux-slim-async/lib/errors.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './_overArg': [
        {
          id: 41,
          name: '../node_modules/lodash/_overArg.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './_getPrototype': [
        {
          id: 42,
          name: '../node_modules/lodash/_getPrototype.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'lodash/isPlainObject': [
        {
          id: 43,
          name: '../node_modules/lodash/isPlainObject.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './isArray': [
        {
          id: 44,
          name: '../node_modules/lodash/isArray.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './_objectToString': [
        {
          id: 45,
          name: '../node_modules/lodash/_objectToString.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './_getRawTag': [
        {
          id: 46,
          name: '../node_modules/lodash/_getRawTag.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './_freeGlobal': [
        {
          id: 47,
          name: '../node_modules/lodash/_freeGlobal.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './_root': [
        {
          id: 48,
          name: '../node_modules/lodash/_root.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'lodash/isString': [
        {
          id: 49,
          name: '../node_modules/lodash/isString.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'flux-standard-action': [
        {
          id: 50,
          name: '../node_modules/flux-standard-action/lib/index.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './isNode': [
        {
          id: 51,
          name: '../node_modules/fbjs/lib/isNode.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './isTextNode': [
        {
          id: 52,
          name: '../node_modules/fbjs/lib/isTextNode.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'fbjs/lib/containsNode': [
        {
          id: 53,
          name: '../node_modules/fbjs/lib/containsNode.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'fbjs/lib/shallowEqual': [
        {
          id: 54,
          name: '../node_modules/fbjs/lib/shallowEqual.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'fbjs/lib/getActiveElement': [
        {
          id: 55,
          name: '../node_modules/fbjs/lib/getActiveElement.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'fbjs/lib/ExecutionEnvironment': [
        {
          id: 56,
          name: '../node_modules/fbjs/lib/ExecutionEnvironment.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './cjs/react-dom.production.min.js': [
        {
          id: 57,
          name: '../node_modules/react-dom/cjs/react-dom.production.min.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './../../webpack/buildin/harmony-module.js': [
        {
          id: 58,
          name: '../node_modules/webpack/buildin/harmony-module.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      isarray: [
        {
          id: 59,
          name: '../node_modules/react-router/node_modules/isarray/index.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      'path-to-regexp': [
        {
          id: 60,
          name:
            '../node_modules/react-router/node_modules/path-to-regexp/index.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './lib/ReactPropTypesSecret': [
        {
          id: 61,
          name: '../node_modules/prop-types/lib/ReactPropTypesSecret.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './factoryWithThrowingShims': [
        {
          id: 62,
          name: '../node_modules/prop-types/factoryWithThrowingShims.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
      './cjs/react.production.min.js': [
        {
          id: 63,
          name: '../node_modules/react/cjs/react.production.min.js',
          file: 'main.js',
          publicPath: '/js/main.js',
        },
      ],
    };
  },
  function(e, t) {
    e.exports = require('@react-firenze/react-loadable/webpack');
  },
  function(e, t) {
    e.exports = require('emotion-server');
  },
  function(e, t) {
    e.exports = require('redux-slim-async');
  },
  function(e, t) {
    e.exports = require('react-dom/server');
  },
  function(e, t) {
    e.exports = require('fs');
  },
  function(e, t) {
    e.exports = require('express');
  },
  function(e, t) {
    e.exports = require('compression');
  },
  function(e, t) {
    e.exports = require('lodash');
  },
  function(e, t) {
    e.exports = require('dotenv');
  },
  function(e, t) {
    e.exports = require('isomorphic-fetch');
  },
  function(e, t, i) {
    'use strict';
    i(31);
    var n = y(i(30)),
      s = y(i(29)),
      a = y(i(28)),
      o = y(i(27)),
      l = y(i(26)),
      r = y(i(0)),
      u = y(i(25)),
      d = i(5),
      c = i(13),
      m = i(4),
      j = i(3),
      f = y(i(24)),
      p = i(23),
      b = y(i(12)),
      h = i(22),
      _ = y(i(21)),
      P = y(i(20)),
      E = y(i(19));
    function y(e) {
      return e && e.__esModule ? e : { default: e };
    }
    n.default.config();
    const g = l.default.readFileSync('./dist/public/index.html'),
      C = s.default.template(g),
      x = (0, o.default)(),
      v = (0, m.createStore)(E.default, (0, m.applyMiddleware)(f.default));
    x.use((0, a.default)()),
      x.use('/public', o.default.static('../public')),
      x.use('/js', o.default.static('../public/js')),
      x.use('/images', o.default.static('../public/images')),
      x.use((e, t) => {
        const i = [],
          n = {},
          s = (0, c.matchRoutes)(P.default, e.url).map(
            ({ route: e, match: t }) => {
              const i = e.fetchData;
              return i instanceof Function ? i(v, t) : Promise.resolve(null);
            },
          );
        n.url && t.redirect(n.url),
          Promise.all(s).then(() => {
            const { html: s, css: a, ids: o } = (0, p.extractCritical)(
                u.default.renderToString(
                  r.default.createElement(
                    b.default.Capture,
                    { report: (e) => i.push(e) },
                    r.default.createElement(
                      j.Provider,
                      { store: v },
                      r.default.createElement(
                        d.StaticRouter,
                        { context: n, location: e.url },
                        (0, c.renderRoutes)(P.default),
                      ),
                    ),
                  ),
                ),
              ),
              l = (0, h.getBundles)(_.default, i);
            t.write(
              C({
                body: s,
                css: a,
                ids: JSON.stringify(o),
                initialState: JSON.stringify(v.getState()).replace(
                  /</g,
                  '\\u003c',
                ),
                bundles: l
                  .map((e) => `<script src="/js/${e.file}"><\/script>`)
                  .join('\n'),
              }),
            ),
              t.end();
          });
      }),
      b.default.preloadAll().then(() => {
        console.log('listening on 3000'), x.listen(3e3);
      });
  },
]);
