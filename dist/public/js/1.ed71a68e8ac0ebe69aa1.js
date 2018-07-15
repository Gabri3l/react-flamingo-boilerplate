(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    27: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(0),
        o = n.n(r),
        a = n(28);
      function i(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      var c = (function(e) {
        function t(t) {
          var n;
          return (
            (function(e, t, n) {
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n);
            })(
              i(i((n = e.call(this, t) || this))),
              'onButtonClick',
              function() {
                n.setState({
                  test: "And it's not styled withe styled components",
                });
              },
            ),
            (n.state = { test: 'This component has its own state.' }),
            n
          );
        }
        return (
          (function(e, t) {
            (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e),
              (e.__proto__ = t);
          })(t, e),
          (t.prototype.render = function() {
            return o.a.createElement(
              'div',
              null,
              o.a.createElement('h1', null, 'About'),
              o.a.createElement('p', null, this.state.test),
              o.a.createElement(a.a, { to: '/' }, 'Home'),
              o.a.createElement('br', null),
              o.a.createElement('br', null),
              o.a.createElement(
                'button',
                { onClick: this.onButtonClick, type: 'button' },
                'Change Text',
              ),
            );
          }),
          t
        );
      })(r.Component);
      t.default = c;
    },
    28: function(e, t, n) {
      'use strict';
      var r = n(0),
        o = n.n(r),
        a = n(1),
        i = n.n(a),
        c = n(3),
        u = n.n(c),
        s = n(12),
        l =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
      function p(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      var f = function(e) {
          return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
        },
        h = (function(e) {
          function t() {
            var n, r;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r = p(this, e.call.apply(e, [this].concat(a)))),
              (r.handleClick = function(e) {
                if (
                  (r.props.onClick && r.props.onClick(e),
                  !e.defaultPrevented &&
                    0 === e.button &&
                    !r.props.target &&
                    !f(e))
                ) {
                  e.preventDefault();
                  var t = r.context.router.history,
                    n = r.props,
                    o = n.replace,
                    a = n.to;
                  o ? t.replace(a) : t.push(a);
                }
              }),
              p(r, n)
            );
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = (e.replace, e.to),
                n = e.innerRef,
                r = (function(e, t) {
                  var n = {};
                  for (var r in e)
                    t.indexOf(r) >= 0 ||
                      (Object.prototype.hasOwnProperty.call(e, r) &&
                        (n[r] = e[r]));
                  return n;
                })(e, ['replace', 'to', 'innerRef']);
              u()(
                this.context.router,
                'You should not use <Link> outside a <Router>',
              ),
                u()(void 0 !== t, 'You must specify the "to" property');
              var a = this.context.router.history,
                i =
                  'string' == typeof t
                    ? Object(s.b)(t, null, null, a.location)
                    : t,
                c = a.createHref(i);
              return o.a.createElement(
                'a',
                l({}, r, { onClick: this.handleClick, href: c, ref: n }),
              );
            }),
            t
          );
        })(o.a.Component);
      (h.propTypes = {
        onClick: i.a.func,
        target: i.a.string,
        replace: i.a.bool,
        to: i.a.oneOfType([i.a.string, i.a.object]).isRequired,
        innerRef: i.a.oneOfType([i.a.string, i.a.func]),
      }),
        (h.defaultProps = { replace: !1 }),
        (h.contextTypes = {
          router: i.a.shape({
            history: i.a.shape({
              push: i.a.func.isRequired,
              replace: i.a.func.isRequired,
              createHref: i.a.func.isRequired,
            }).isRequired,
          }).isRequired,
        }),
        (t.a = h);
    },
  },
]);
