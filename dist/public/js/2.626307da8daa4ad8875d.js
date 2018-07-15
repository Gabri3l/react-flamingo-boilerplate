(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    25: function(e, t, r) {
      'use strict';
      r.r(t);
      var n = r(0),
        o = r.n(n),
        i = r(7),
        a = r(13),
        s = r(1),
        l = r.n(s),
        c = r(28),
        p = r(65),
        u = r.n(p),
        d = r(14),
        f = r(11),
        h = r(19),
        m = Object(h.a)(
          RegExp.prototype.test.bind(
            /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|accept|acceptCharset|accessKey|action|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria)-.*))$/i,
          ),
        );
      var y,
        g = '__EMOTION_THEMING__',
        v = (((y = {})[g] = l.a.object), y);
      var b = m,
        k = function(e) {
          return 'theme' !== e && 'innerRef' !== e;
        },
        x = function() {
          return !0;
        },
        w = function(e, t) {
          for (var r = 2, n = arguments.length; r < n; r++) {
            var o = arguments[r],
              i = void 0;
            for (i in o) e(i) && (t[i] = o[i]);
          }
          return t;
        };
      var _ = (function(e, t) {
          var r = function(n, o) {
            var i, a, s, l;
            void 0 !== o &&
              ((i = o.e),
              (a = o.label),
              (s = o.target),
              (l =
                n.__emotion_forwardProp && o.shouldForwardProp
                  ? function(e) {
                      return (
                        n.__emotion_forwardProp(e) && o.shouldForwardProp(e)
                      );
                    }
                  : o.shouldForwardProp));
            var c = n.__emotion_real === n,
              p = (void 0 === i && c && n.__emotion_base) || n;
            return (
              'function' != typeof l &&
                (l =
                  'string' == typeof p &&
                  p.charAt(0) === p.charAt(0).toLowerCase()
                    ? b
                    : k),
              function() {
                var u = arguments,
                  d =
                    c && void 0 !== n.__emotion_styles
                      ? n.__emotion_styles.slice(0)
                      : [];
                if ((void 0 !== a && d.push('label:' + a + ';'), void 0 === i))
                  if (null == u[0] || void 0 === u[0].raw) d.push.apply(d, u);
                  else {
                    d.push(u[0][0]);
                    for (var f = u.length, h = 1; h < f; h++)
                      d.push(u[h], u[0][h]);
                  }
                var m = (function(r) {
                  function n() {
                    return r.apply(this, arguments) || this;
                  }
                  !(function(e, t) {
                    (e.prototype = Object.create(t.prototype)),
                      (e.prototype.constructor = e),
                      (e.__proto__ = t);
                  })(n, r);
                  var o = n.prototype;
                  return (
                    (o.componentWillMount = function() {
                      void 0 !== this.context[g] &&
                        (this.unsubscribe = this.context[g].subscribe(
                          function(e) {
                            this.setState({ theme: e });
                          }.bind(this),
                        ));
                    }),
                    (o.componentWillUnmount = function() {
                      void 0 !== this.unsubscribe &&
                        this.context[g].unsubscribe(this.unsubscribe);
                    }),
                    (o.render = function() {
                      var r = this.props,
                        n = this.state;
                      this.mergedProps = w(x, {}, r, {
                        theme: (null !== n && n.theme) || r.theme || {},
                      });
                      var o = '',
                        a = [];
                      return (
                        r.className &&
                          (o +=
                            void 0 === i
                              ? e.getRegisteredStyles(a, r.className)
                              : r.className + ' '),
                        (o +=
                          void 0 === i ? e.css.apply(this, d.concat(a)) : i),
                        void 0 !== s && (o += ' ' + s),
                        t.createElement(
                          p,
                          w(l, {}, r, { className: o, ref: r.innerRef }),
                        )
                      );
                    }),
                    n
                  );
                })(t.Component);
                return (
                  (m.displayName =
                    void 0 !== a
                      ? a
                      : 'Styled(' +
                        ('string' == typeof p
                          ? p
                          : p.displayName || p.name || 'Component') +
                        ')'),
                  void 0 !== n.defaultProps &&
                    (m.defaultProps = n.defaultProps),
                  (m.contextTypes = v),
                  (m.__emotion_styles = d),
                  (m.__emotion_base = p),
                  (m.__emotion_real = m),
                  (m.__emotion_forwardProp = l),
                  Object.defineProperty(m, 'toString', {
                    enumerable: !1,
                    value: function() {
                      return '.' + s;
                    },
                  }),
                  (m.withComponent = function(e, t) {
                    return r(e, void 0 !== t ? w(x, {}, o, t) : o).apply(
                      void 0,
                      d,
                    );
                  }),
                  m
                );
              }
            );
          };
          return r;
        })(f, o.a),
        T = _('button')({
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
        }),
        R = function(e) {
          var t = e.children,
            r = e.onClick;
          return o.a.createElement(T, { onClick: r, type: 'button' }, t);
        };
      R.propTypes = {
        children: s.string.isRequired,
        onClick: s.func.isRequired,
      };
      var C = R,
        O = _('h1')({ fontFamily: 'monospace', fontSize: 30 }),
        S = _('p')({ fontFamily: 'monospace', fontSize: 15 }),
        P = function(e) {
          var t = e.actions,
            r = e.test;
          return o.a.createElement(
            'div',
            null,
            o.a.createElement(O, null, 'This is the Duomo of Firenze!'),
            o.a.createElement('img', {
              alt: 'florence duomo',
              src: u.a,
              width: '100',
            }),
            o.a.createElement(S, null, 'This p is styled with emotion.'),
            o.a.createElement(
              S,
              null,
              'This boilerplate supports env vars => ENV_VAR',
            ),
            o.a.createElement(S, null, r),
            o.a.createElement(
              c.a,
              { style: { marginRight: '10px' }, to: '/about' },
              'About',
            ),
            o.a.createElement(c.a, { to: '/coin' }, 'Coin'),
            o.a.createElement('br', null),
            o.a.createElement('br', null),
            o.a.createElement(
              C,
              {
                onClick: function() {
                  return t.setTest('State has been updated!');
                },
              },
              'Click me',
            ),
          );
        };
      P.propTypes = {
        actions: Object(s.shape)({ setTest: s.func.isRequired }).isRequired,
        test: s.string.isRequired,
      };
      t.default = Object(a.b)(
        function(e) {
          return { test: e.test };
        },
        function(e) {
          return { actions: Object(i.b)({ setTest: d.b }, e) };
        },
      )(P);
    },
    28: function(e, t, r) {
      'use strict';
      var n = r(0),
        o = r.n(n),
        i = r(1),
        a = r.n(i),
        s = r(3),
        l = r.n(s),
        c = r(12),
        p =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
      function u(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      var d = function(e) {
          return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
        },
        f = (function(e) {
          function t() {
            var r, n;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t);
            for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
              i[a] = arguments[a];
            return (
              (r = n = u(this, e.call.apply(e, [this].concat(i)))),
              (n.handleClick = function(e) {
                if (
                  (n.props.onClick && n.props.onClick(e),
                  !e.defaultPrevented &&
                    0 === e.button &&
                    !n.props.target &&
                    !d(e))
                ) {
                  e.preventDefault();
                  var t = n.context.router.history,
                    r = n.props,
                    o = r.replace,
                    i = r.to;
                  o ? t.replace(i) : t.push(i);
                }
              }),
              u(n, r)
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
                r = e.innerRef,
                n = (function(e, t) {
                  var r = {};
                  for (var n in e)
                    t.indexOf(n) >= 0 ||
                      (Object.prototype.hasOwnProperty.call(e, n) &&
                        (r[n] = e[n]));
                  return r;
                })(e, ['replace', 'to', 'innerRef']);
              l()(
                this.context.router,
                'You should not use <Link> outside a <Router>',
              ),
                l()(void 0 !== t, 'You must specify the "to" property');
              var i = this.context.router.history,
                a =
                  'string' == typeof t
                    ? Object(c.b)(t, null, null, i.location)
                    : t,
                s = i.createHref(a);
              return o.a.createElement(
                'a',
                p({}, n, { onClick: this.handleClick, href: s, ref: r }),
              );
            }),
            t
          );
        })(o.a.Component);
      (f.propTypes = {
        onClick: a.a.func,
        target: a.a.string,
        replace: a.a.bool,
        to: a.a.oneOfType([a.a.string, a.a.object]).isRequired,
        innerRef: a.a.oneOfType([a.a.string, a.a.func]),
      }),
        (f.defaultProps = { replace: !1 }),
        (f.contextTypes = {
          router: a.a.shape({
            history: a.a.shape({
              push: a.a.func.isRequired,
              replace: a.a.func.isRequired,
              createHref: a.a.func.isRequired,
            }).isRequired,
          }).isRequired,
        }),
        (t.a = f);
    },
    65: function(e, t) {
      e.exports = '/images/santa-maria-del-fiore.210c02d6.svg';
    },
  },
]);
