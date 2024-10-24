/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(()=>{
    var XE = Object.create;
    var xn = Object.defineProperty;
    var UE = Object.getOwnPropertyDescriptor;
    var VE = Object.getOwnPropertyNames;
    var kE = Object.getPrototypeOf
      , BE = Object.prototype.hasOwnProperty;
    var de = (e,t)=>()=>(e && (t = e(e = 0)),
    t);
    var f = (e,t)=>()=>(t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , Oe = (e,t)=>{
        for (var n in t)
            xn(e, n, {
                get: t[n],
                enumerable: !0
            })
    }
      , ca = (e,t,n,r)=>{
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of VE(t))
                !BE.call(e, i) && i !== n && xn(e, i, {
                    get: ()=>t[i],
                    enumerable: !(r = UE(t, i)) || r.enumerable
                });
        return e
    }
    ;
    var ae = (e,t,n)=>(n = e != null ? XE(kE(e)) : {},
    ca(t || !e || !e.__esModule ? xn(n, "default", {
        value: e,
        enumerable: !0
    }) : n, e))
      , We = e=>ca(xn({}, "__esModule", {
        value: !0
    }), e);
    var Hr = f(()=>{
        "use strict";
        window.tram = function(e) {
            function t(c, y) {
                var T = new q.Bare;
                return T.init(c, y)
            }
            function n(c) {
                return c.replace(/[A-Z]/g, function(y) {
                    return "-" + y.toLowerCase()
                })
            }
            function r(c) {
                var y = parseInt(c.slice(1), 16)
                  , T = y >> 16 & 255
                  , S = y >> 8 & 255
                  , I = 255 & y;
                return [T, S, I]
            }
            function i(c, y, T) {
                return "#" + (1 << 24 | c << 16 | y << 8 | T).toString(16).slice(1)
            }
            function o() {}
            function a(c, y) {
                l("Type warning: Expected: [" + c + "] Got: [" + typeof y + "] " + y)
            }
            function s(c, y, T) {
                l("Units do not match [" + c + "]: " + y + ", " + T)
            }
            function u(c, y, T) {
                if (y !== void 0 && (T = y),
                c === void 0)
                    return T;
                var S = T;
                return Br.test(c) || !On.test(c) ? S = parseInt(c, 10) : On.test(c) && (S = 1e3 * parseFloat(c)),
                0 > S && (S = 0),
                S === S ? S : T
            }
            function l(c) {
                oe.debug && window && window.console.warn(c)
            }
            function h(c) {
                for (var y = -1, T = c ? c.length : 0, S = []; ++y < T; ) {
                    var I = c[y];
                    I && S.push(I)
                }
                return S
            }
            var p = function(c, y, T) {
                function S(ee) {
                    return typeof ee == "object"
                }
                function I(ee) {
                    return typeof ee == "function"
                }
                function O() {}
                function j(ee, le) {
                    function G() {
                        var _e = new ne;
                        return I(_e.init) && _e.init.apply(_e, arguments),
                        _e
                    }
                    function ne() {}
                    le === T && (le = ee,
                    ee = Object),
                    G.Bare = ne;
                    var re, he = O[c] = ee[c], He = ne[c] = G[c] = new O;
                    return He.constructor = G,
                    G.mixin = function(_e) {
                        return ne[c] = G[c] = j(G, _e)[c],
                        G
                    }
                    ,
                    G.open = function(_e) {
                        if (re = {},
                        I(_e) ? re = _e.call(G, He, he, G, ee) : S(_e) && (re = _e),
                        S(re))
                            for (var $t in re)
                                y.call(re, $t) && (He[$t] = re[$t]);
                        return I(He.init) || (He.init = ee),
                        G
                    }
                    ,
                    G.open(le)
                }
                return j
            }("prototype", {}.hasOwnProperty)
              , d = {
                ease: ["ease", function(c, y, T, S) {
                    var I = (c /= S) * c
                      , O = I * c;
                    return y + T * (-2.75 * O * I + 11 * I * I + -15.5 * O + 8 * I + .25 * c)
                }
                ],
                "ease-in": ["ease-in", function(c, y, T, S) {
                    var I = (c /= S) * c
                      , O = I * c;
                    return y + T * (-1 * O * I + 3 * I * I + -3 * O + 2 * I)
                }
                ],
                "ease-out": ["ease-out", function(c, y, T, S) {
                    var I = (c /= S) * c
                      , O = I * c;
                    return y + T * (.3 * O * I + -1.6 * I * I + 2.2 * O + -1.8 * I + 1.9 * c)
                }
                ],
                "ease-in-out": ["ease-in-out", function(c, y, T, S) {
                    var I = (c /= S) * c
                      , O = I * c;
                    return y + T * (2 * O * I + -5 * I * I + 2 * O + 2 * I)
                }
                ],
                linear: ["linear", function(c, y, T, S) {
                    return T * c / S + y
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(c, y, T, S) {
                    return T * (c /= S) * c + y
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(c, y, T, S) {
                    return -T * (c /= S) * (c - 2) + y
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(c, y, T, S) {
                    return (c /= S / 2) < 1 ? T / 2 * c * c + y : -T / 2 * (--c * (c - 2) - 1) + y
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(c, y, T, S) {
                    return T * (c /= S) * c * c + y
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(c, y, T, S) {
                    return T * ((c = c / S - 1) * c * c + 1) + y
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(c, y, T, S) {
                    return (c /= S / 2) < 1 ? T / 2 * c * c * c + y : T / 2 * ((c -= 2) * c * c + 2) + y
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(c, y, T, S) {
                    return T * (c /= S) * c * c * c + y
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(c, y, T, S) {
                    return -T * ((c = c / S - 1) * c * c * c - 1) + y
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(c, y, T, S) {
                    return (c /= S / 2) < 1 ? T / 2 * c * c * c * c + y : -T / 2 * ((c -= 2) * c * c * c - 2) + y
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(c, y, T, S) {
                    return T * (c /= S) * c * c * c * c + y
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(c, y, T, S) {
                    return T * ((c = c / S - 1) * c * c * c * c + 1) + y
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(c, y, T, S) {
                    return (c /= S / 2) < 1 ? T / 2 * c * c * c * c * c + y : T / 2 * ((c -= 2) * c * c * c * c + 2) + y
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(c, y, T, S) {
                    return -T * Math.cos(c / S * (Math.PI / 2)) + T + y
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(c, y, T, S) {
                    return T * Math.sin(c / S * (Math.PI / 2)) + y
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(c, y, T, S) {
                    return -T / 2 * (Math.cos(Math.PI * c / S) - 1) + y
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(c, y, T, S) {
                    return c === 0 ? y : T * Math.pow(2, 10 * (c / S - 1)) + y
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(c, y, T, S) {
                    return c === S ? y + T : T * (-Math.pow(2, -10 * c / S) + 1) + y
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(c, y, T, S) {
                    return c === 0 ? y : c === S ? y + T : (c /= S / 2) < 1 ? T / 2 * Math.pow(2, 10 * (c - 1)) + y : T / 2 * (-Math.pow(2, -10 * --c) + 2) + y
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(c, y, T, S) {
                    return -T * (Math.sqrt(1 - (c /= S) * c) - 1) + y
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(c, y, T, S) {
                    return T * Math.sqrt(1 - (c = c / S - 1) * c) + y
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(c, y, T, S) {
                    return (c /= S / 2) < 1 ? -T / 2 * (Math.sqrt(1 - c * c) - 1) + y : T / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + y
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(c, y, T, S, I) {
                    return I === void 0 && (I = 1.70158),
                    T * (c /= S) * c * ((I + 1) * c - I) + y
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(c, y, T, S, I) {
                    return I === void 0 && (I = 1.70158),
                    T * ((c = c / S - 1) * c * ((I + 1) * c + I) + 1) + y
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(c, y, T, S, I) {
                    return I === void 0 && (I = 1.70158),
                    (c /= S / 2) < 1 ? T / 2 * c * c * (((I *= 1.525) + 1) * c - I) + y : T / 2 * ((c -= 2) * c * (((I *= 1.525) + 1) * c + I) + 2) + y
                }
                ]
            }
              , E = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , v = document
              , _ = window
              , A = "bkwld-tram"
              , m = /[\-\.0-9]/g
              , x = /[A-Z]/
              , w = "number"
              , P = /^(rgb|#)/
              , L = /(em|cm|mm|in|pt|pc|px)$/
              , C = /(em|cm|mm|in|pt|pc|px|%)$/
              , U = /(deg|rad|turn)$/
              , B = "unitless"
              , K = /(all|none) 0s ease 0s/
              , Y = /^(width|height)$/
              , Q = " "
              , D = v.createElement("a")
              , b = ["Webkit", "Moz", "O", "ms"]
              , N = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , H = function(c) {
                if (c in D.style)
                    return {
                        dom: c,
                        css: c
                    };
                var y, T, S = "", I = c.split("-");
                for (y = 0; y < I.length; y++)
                    S += I[y].charAt(0).toUpperCase() + I[y].slice(1);
                for (y = 0; y < b.length; y++)
                    if (T = b[y] + S,
                    T in D.style)
                        return {
                            dom: T,
                            css: N[y] + c
                        }
            }
              , V = t.support = {
                bind: Function.prototype.bind,
                transform: H("transform"),
                transition: H("transition"),
                backface: H("backface-visibility"),
                timing: H("transition-timing-function")
            };
            if (V.transition) {
                var te = V.timing.dom;
                if (D.style[te] = d["ease-in-back"][0],
                !D.style[te])
                    for (var J in E)
                        d[J][0] = E[J]
            }
            var M = t.frame = function() {
                var c = _.requestAnimationFrame || _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || _.oRequestAnimationFrame || _.msRequestAnimationFrame;
                return c && V.bind ? c.bind(_) : function(y) {
                    _.setTimeout(y, 16)
                }
            }()
              , k = t.now = function() {
                var c = _.performance
                  , y = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
                return y && V.bind ? y.bind(c) : Date.now || function() {
                    return +new Date
                }
            }()
              , W = p(function(c) {
                function y($, ie) {
                    var pe = h(("" + $).split(Q))
                      , ue = pe[0];
                    ie = ie || {};
                    var Ie = Yt[ue];
                    if (!Ie)
                        return l("Unsupported property: " + ue);
                    if (!ie.weak || !this.props[ue]) {
                        var Ne = Ie[0]
                          , Se = this.props[ue];
                        return Se || (Se = this.props[ue] = new Ne.Bare),
                        Se.init(this.$el, pe, Ie, ie),
                        Se
                    }
                }
                function T($, ie, pe) {
                    if ($) {
                        var ue = typeof $;
                        if (ie || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        ue == "number" && ie)
                            return this.timer = new Z({
                                duration: $,
                                context: this,
                                complete: O
                            }),
                            void (this.active = !0);
                        if (ue == "string" && ie) {
                            switch ($) {
                            case "hide":
                                G.call(this);
                                break;
                            case "stop":
                                j.call(this);
                                break;
                            case "redraw":
                                ne.call(this);
                                break;
                            default:
                                y.call(this, $, pe && pe[1])
                            }
                            return O.call(this)
                        }
                        if (ue == "function")
                            return void $.call(this, this);
                        if (ue == "object") {
                            var Ie = 0;
                            He.call(this, $, function(Ee, GE) {
                                Ee.span > Ie && (Ie = Ee.span),
                                Ee.stop(),
                                Ee.animate(GE)
                            }, function(Ee) {
                                "wait"in Ee && (Ie = u(Ee.wait, 0))
                            }),
                            he.call(this),
                            Ie > 0 && (this.timer = new Z({
                                duration: Ie,
                                context: this
                            }),
                            this.active = !0,
                            ie && (this.timer.complete = O));
                            var Ne = this
                              , Se = !1
                              , wn = {};
                            M(function() {
                                He.call(Ne, $, function(Ee) {
                                    Ee.active && (Se = !0,
                                    wn[Ee.name] = Ee.nextStyle)
                                }),
                                Se && Ne.$el.css(wn)
                            })
                        }
                    }
                }
                function S($) {
                    $ = u($, 0),
                    this.active ? this.queue.push({
                        options: $
                    }) : (this.timer = new Z({
                        duration: $,
                        context: this,
                        complete: O
                    }),
                    this.active = !0)
                }
                function I($) {
                    return this.active ? (this.queue.push({
                        options: $,
                        args: arguments
                    }),
                    void (this.timer.complete = O)) : l("No active transition timer. Use start() or wait() before then().")
                }
                function O() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var $ = this.queue.shift();
                        T.call(this, $.options, !0, $.args)
                    }
                }
                function j($) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var ie;
                    typeof $ == "string" ? (ie = {},
                    ie[$] = 1) : ie = typeof $ == "object" && $ != null ? $ : this.props,
                    He.call(this, ie, _e),
                    he.call(this)
                }
                function ee($) {
                    j.call(this, $),
                    He.call(this, $, $t, FE)
                }
                function le($) {
                    typeof $ != "string" && ($ = "block"),
                    this.el.style.display = $
                }
                function G() {
                    j.call(this),
                    this.el.style.display = "none"
                }
                function ne() {
                    this.el.offsetHeight
                }
                function re() {
                    j.call(this),
                    e.removeData(this.el, A),
                    this.$el = this.el = null
                }
                function he() {
                    var $, ie, pe = [];
                    this.upstream && pe.push(this.upstream);
                    for ($ in this.props)
                        ie = this.props[$],
                        ie.active && pe.push(ie.string);
                    pe = pe.join(","),
                    this.style !== pe && (this.style = pe,
                    this.el.style[V.transition.dom] = pe)
                }
                function He($, ie, pe) {
                    var ue, Ie, Ne, Se, wn = ie !== _e, Ee = {};
                    for (ue in $)
                        Ne = $[ue],
                        ue in Be ? (Ee.transform || (Ee.transform = {}),
                        Ee.transform[ue] = Ne) : (x.test(ue) && (ue = n(ue)),
                        ue in Yt ? Ee[ue] = Ne : (Se || (Se = {}),
                        Se[ue] = Ne));
                    for (ue in Ee) {
                        if (Ne = Ee[ue],
                        Ie = this.props[ue],
                        !Ie) {
                            if (!wn)
                                continue;
                            Ie = y.call(this, ue)
                        }
                        ie.call(this, Ie, Ne)
                    }
                    pe && Se && pe.call(this, Se)
                }
                function _e($) {
                    $.stop()
                }
                function $t($, ie) {
                    $.set(ie)
                }
                function FE($) {
                    this.$el.css($)
                }
                function Le($, ie) {
                    c[$] = function() {
                        return this.children ? qE.call(this, ie, arguments) : (this.el && ie.apply(this, arguments),
                        this)
                    }
                }
                function qE($, ie) {
                    var pe, ue = this.children.length;
                    for (pe = 0; ue > pe; pe++)
                        $.apply(this.children[pe], ie);
                    return this
                }
                c.init = function($) {
                    if (this.$el = e($),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    oe.keepInherited && !oe.fallback) {
                        var ie = ke(this.el, "transition");
                        ie && !K.test(ie) && (this.upstream = ie)
                    }
                    V.backface && oe.hideBackface && Pe(this.el, V.backface.css, "hidden")
                }
                ,
                Le("add", y),
                Le("start", T),
                Le("wait", S),
                Le("then", I),
                Le("next", O),
                Le("stop", j),
                Le("set", ee),
                Le("show", le),
                Le("hide", G),
                Le("redraw", ne),
                Le("destroy", re)
            })
              , q = p(W, function(c) {
                function y(T, S) {
                    var I = e.data(T, A) || e.data(T, A, new W.Bare);
                    return I.el || I.init(T),
                    S ? I.start(S) : I
                }
                c.init = function(T, S) {
                    var I = e(T);
                    if (!I.length)
                        return this;
                    if (I.length === 1)
                        return y(I[0], S);
                    var O = [];
                    return I.each(function(j, ee) {
                        O.push(y(ee, S))
                    }),
                    this.children = O,
                    this
                }
            })
              , F = p(function(c) {
                function y() {
                    var O = this.get();
                    this.update("auto");
                    var j = this.get();
                    return this.update(O),
                    j
                }
                function T(O, j, ee) {
                    return j !== void 0 && (ee = j),
                    O in d ? O : ee
                }
                function S(O) {
                    var j = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(O);
                    return (j ? i(j[1], j[2], j[3]) : O).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var I = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                c.init = function(O, j, ee, le) {
                    this.$el = O,
                    this.el = O[0];
                    var G = j[0];
                    ee[2] && (G = ee[2]),
                    jt[G] && (G = jt[G]),
                    this.name = G,
                    this.type = ee[1],
                    this.duration = u(j[1], this.duration, I.duration),
                    this.ease = T(j[2], this.ease, I.ease),
                    this.delay = u(j[3], this.delay, I.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = Y.test(this.name),
                    this.unit = le.unit || this.unit || oe.defaultUnit,
                    this.angle = le.angle || this.angle || oe.defaultAngle,
                    oe.fallback || le.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + Q + this.duration + "ms" + (this.ease != "ease" ? Q + d[this.ease][0] : "") + (this.delay ? Q + this.delay + "ms" : ""))
                }
                ,
                c.set = function(O) {
                    O = this.convert(O, this.type),
                    this.update(O),
                    this.redraw()
                }
                ,
                c.transition = function(O) {
                    this.active = !0,
                    O = this.convert(O, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    O == "auto" && (O = y.call(this))),
                    this.nextStyle = O
                }
                ,
                c.fallback = function(O) {
                    var j = this.el.style[this.name] || this.convert(this.get(), this.type);
                    O = this.convert(O, this.type),
                    this.auto && (j == "auto" && (j = this.convert(this.get(), this.type)),
                    O == "auto" && (O = y.call(this))),
                    this.tween = new R({
                        from: j,
                        to: O,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                c.get = function() {
                    return ke(this.el, this.name)
                }
                ,
                c.update = function(O) {
                    Pe(this.el, this.name, O)
                }
                ,
                c.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    Pe(this.el, this.name, this.get()));
                    var O = this.tween;
                    O && O.context && O.destroy()
                }
                ,
                c.convert = function(O, j) {
                    if (O == "auto" && this.auto)
                        return O;
                    var ee, le = typeof O == "number", G = typeof O == "string";
                    switch (j) {
                    case w:
                        if (le)
                            return O;
                        if (G && O.replace(m, "") === "")
                            return +O;
                        ee = "number(unitless)";
                        break;
                    case P:
                        if (G) {
                            if (O === "" && this.original)
                                return this.original;
                            if (j.test(O))
                                return O.charAt(0) == "#" && O.length == 7 ? O : S(O)
                        }
                        ee = "hex or rgb string";
                        break;
                    case L:
                        if (le)
                            return O + this.unit;
                        if (G && j.test(O))
                            return O;
                        ee = "number(px) or string(unit)";
                        break;
                    case C:
                        if (le)
                            return O + this.unit;
                        if (G && j.test(O))
                            return O;
                        ee = "number(px) or string(unit or %)";
                        break;
                    case U:
                        if (le)
                            return O + this.angle;
                        if (G && j.test(O))
                            return O;
                        ee = "number(deg) or string(angle)";
                        break;
                    case B:
                        if (le || G && C.test(O))
                            return O;
                        ee = "number(unitless) or string(unit or %)"
                    }
                    return a(ee, O),
                    O
                }
                ,
                c.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , g = p(F, function(c, y) {
                c.init = function() {
                    y.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), P))
                }
            })
              , X = p(F, function(c, y) {
                c.init = function() {
                    y.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                c.get = function() {
                    return this.$el[this.name]()
                }
                ,
                c.update = function(T) {
                    this.$el[this.name](T)
                }
            })
              , z = p(F, function(c, y) {
                function T(S, I) {
                    var O, j, ee, le, G;
                    for (O in S)
                        le = Be[O],
                        ee = le[0],
                        j = le[1] || O,
                        G = this.convert(S[O], ee),
                        I.call(this, j, G, ee)
                }
                c.init = function() {
                    y.init.apply(this, arguments),
                    this.current || (this.current = {},
                    Be.perspective && oe.perspective && (this.current.perspective = oe.perspective,
                    Pe(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                c.set = function(S) {
                    T.call(this, S, function(I, O) {
                        this.current[I] = O
                    }),
                    Pe(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                c.transition = function(S) {
                    var I = this.values(S);
                    this.tween = new se({
                        current: this.current,
                        values: I,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var O, j = {};
                    for (O in this.current)
                        j[O] = O in I ? I[O] : this.current[O];
                    this.active = !0,
                    this.nextStyle = this.style(j)
                }
                ,
                c.fallback = function(S) {
                    var I = this.values(S);
                    this.tween = new se({
                        current: this.current,
                        values: I,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                c.update = function() {
                    Pe(this.el, this.name, this.style(this.current))
                }
                ,
                c.style = function(S) {
                    var I, O = "";
                    for (I in S)
                        O += I + "(" + S[I] + ") ";
                    return O
                }
                ,
                c.values = function(S) {
                    var I, O = {};
                    return T.call(this, S, function(j, ee, le) {
                        O[j] = ee,
                        this.current[j] === void 0 && (I = 0,
                        ~j.indexOf("scale") && (I = 1),
                        this.current[j] = this.convert(I, le))
                    }),
                    O
                }
            })
              , R = p(function(c) {
                function y(G) {
                    ee.push(G) === 1 && M(T)
                }
                function T() {
                    var G, ne, re, he = ee.length;
                    if (he)
                        for (M(T),
                        ne = k(),
                        G = he; G--; )
                            re = ee[G],
                            re && re.render(ne)
                }
                function S(G) {
                    var ne, re = e.inArray(G, ee);
                    re >= 0 && (ne = ee.slice(re + 1),
                    ee.length = re,
                    ne.length && (ee = ee.concat(ne)))
                }
                function I(G) {
                    return Math.round(G * le) / le
                }
                function O(G, ne, re) {
                    return i(G[0] + re * (ne[0] - G[0]), G[1] + re * (ne[1] - G[1]), G[2] + re * (ne[2] - G[2]))
                }
                var j = {
                    ease: d.ease[1],
                    from: 0,
                    to: 1
                };
                c.init = function(G) {
                    this.duration = G.duration || 0,
                    this.delay = G.delay || 0;
                    var ne = G.ease || j.ease;
                    d[ne] && (ne = d[ne][1]),
                    typeof ne != "function" && (ne = j.ease),
                    this.ease = ne,
                    this.update = G.update || o,
                    this.complete = G.complete || o,
                    this.context = G.context || this,
                    this.name = G.name;
                    var re = G.from
                      , he = G.to;
                    re === void 0 && (re = j.from),
                    he === void 0 && (he = j.to),
                    this.unit = G.unit || "",
                    typeof re == "number" && typeof he == "number" ? (this.begin = re,
                    this.change = he - re) : this.format(he, re),
                    this.value = this.begin + this.unit,
                    this.start = k(),
                    G.autoplay !== !1 && this.play()
                }
                ,
                c.play = function() {
                    this.active || (this.start || (this.start = k()),
                    this.active = !0,
                    y(this))
                }
                ,
                c.stop = function() {
                    this.active && (this.active = !1,
                    S(this))
                }
                ,
                c.render = function(G) {
                    var ne, re = G - this.start;
                    if (this.delay) {
                        if (re <= this.delay)
                            return;
                        re -= this.delay
                    }
                    if (re < this.duration) {
                        var he = this.ease(re, 0, 1, this.duration);
                        return ne = this.startRGB ? O(this.startRGB, this.endRGB, he) : I(this.begin + he * this.change),
                        this.value = ne + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    ne = this.endHex || this.begin + this.change,
                    this.value = ne + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                c.format = function(G, ne) {
                    if (ne += "",
                    G += "",
                    G.charAt(0) == "#")
                        return this.startRGB = r(ne),
                        this.endRGB = r(G),
                        this.endHex = G,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var re = ne.replace(m, "")
                          , he = G.replace(m, "");
                        re !== he && s("tween", ne, G),
                        this.unit = re
                    }
                    ne = parseFloat(ne),
                    G = parseFloat(G),
                    this.begin = this.value = ne,
                    this.change = G - ne
                }
                ,
                c.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = o
                }
                ;
                var ee = []
                  , le = 1e3
            })
              , Z = p(R, function(c) {
                c.init = function(y) {
                    this.duration = y.duration || 0,
                    this.complete = y.complete || o,
                    this.context = y.context,
                    this.play()
                }
                ,
                c.render = function(y) {
                    var T = y - this.start;
                    T < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , se = p(R, function(c, y) {
                c.init = function(T) {
                    this.context = T.context,
                    this.update = T.update,
                    this.tweens = [],
                    this.current = T.current;
                    var S, I;
                    for (S in T.values)
                        I = T.values[S],
                        this.current[S] !== I && this.tweens.push(new R({
                            name: S,
                            from: this.current[S],
                            to: I,
                            duration: T.duration,
                            delay: T.delay,
                            ease: T.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                c.render = function(T) {
                    var S, I, O = this.tweens.length, j = !1;
                    for (S = O; S--; )
                        I = this.tweens[S],
                        I.context && (I.render(T),
                        this.current[I.name] = I.value,
                        j = !0);
                    return j ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                c.destroy = function() {
                    if (y.destroy.call(this),
                    this.tweens) {
                        var T, S = this.tweens.length;
                        for (T = S; T--; )
                            this.tweens[T].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , oe = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !V.transition,
                agentTests: []
            };
            t.fallback = function(c) {
                if (!V.transition)
                    return oe.fallback = !0;
                oe.agentTests.push("(" + c + ")");
                var y = new RegExp(oe.agentTests.join("|"),"i");
                oe.fallback = y.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(c) {
                return new R(c)
            }
            ,
            t.delay = function(c, y, T) {
                return new Z({
                    complete: y,
                    duration: c,
                    context: T
                })
            }
            ,
            e.fn.tram = function(c) {
                return t.call(null, this, c)
            }
            ;
            var Pe = e.style
              , ke = e.css
              , jt = {
                transform: V.transform && V.transform.css
            }
              , Yt = {
                color: [g, P],
                background: [g, P, "background-color"],
                "outline-color": [g, P],
                "border-color": [g, P],
                "border-top-color": [g, P],
                "border-right-color": [g, P],
                "border-bottom-color": [g, P],
                "border-left-color": [g, P],
                "border-width": [F, L],
                "border-top-width": [F, L],
                "border-right-width": [F, L],
                "border-bottom-width": [F, L],
                "border-left-width": [F, L],
                "border-spacing": [F, L],
                "letter-spacing": [F, L],
                margin: [F, L],
                "margin-top": [F, L],
                "margin-right": [F, L],
                "margin-bottom": [F, L],
                "margin-left": [F, L],
                padding: [F, L],
                "padding-top": [F, L],
                "padding-right": [F, L],
                "padding-bottom": [F, L],
                "padding-left": [F, L],
                "outline-width": [F, L],
                opacity: [F, w],
                top: [F, C],
                right: [F, C],
                bottom: [F, C],
                left: [F, C],
                "font-size": [F, C],
                "text-indent": [F, C],
                "word-spacing": [F, C],
                width: [F, C],
                "min-width": [F, C],
                "max-width": [F, C],
                height: [F, C],
                "min-height": [F, C],
                "max-height": [F, C],
                "line-height": [F, B],
                "scroll-top": [X, w, "scrollTop"],
                "scroll-left": [X, w, "scrollLeft"]
            }
              , Be = {};
            V.transform && (Yt.transform = [z],
            Be = {
                x: [C, "translateX"],
                y: [C, "translateY"],
                rotate: [U],
                rotateX: [U],
                rotateY: [U],
                scale: [w],
                scaleX: [w],
                scaleY: [w],
                skew: [U],
                skewX: [U],
                skewY: [U]
            }),
            V.transform && V.backface && (Be.z = [C, "translateZ"],
            Be.rotateZ = [U],
            Be.scaleZ = [w],
            Be.perspective = [L]);
            var Br = /ms/
              , On = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var fa = f((AF,la)=>{
        "use strict";
        var HE = window.$
          , WE = Hr() && HE.tram;
        la.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , n = Array.prototype
              , r = Object.prototype
              , i = Function.prototype
              , o = n.push
              , a = n.slice
              , s = n.concat
              , u = r.toString
              , l = r.hasOwnProperty
              , h = n.forEach
              , p = n.map
              , d = n.reduce
              , E = n.reduceRight
              , v = n.filter
              , _ = n.every
              , A = n.some
              , m = n.indexOf
              , x = n.lastIndexOf
              , w = Array.isArray
              , P = Object.keys
              , L = i.bind
              , C = e.each = e.forEach = function(b, N, H) {
                if (b == null)
                    return b;
                if (h && b.forEach === h)
                    b.forEach(N, H);
                else if (b.length === +b.length) {
                    for (var V = 0, te = b.length; V < te; V++)
                        if (N.call(H, b[V], V, b) === t)
                            return
                } else
                    for (var J = e.keys(b), V = 0, te = J.length; V < te; V++)
                        if (N.call(H, b[J[V]], J[V], b) === t)
                            return;
                return b
            }
            ;
            e.map = e.collect = function(b, N, H) {
                var V = [];
                return b == null ? V : p && b.map === p ? b.map(N, H) : (C(b, function(te, J, M) {
                    V.push(N.call(H, te, J, M))
                }),
                V)
            }
            ,
            e.find = e.detect = function(b, N, H) {
                var V;
                return U(b, function(te, J, M) {
                    if (N.call(H, te, J, M))
                        return V = te,
                        !0
                }),
                V
            }
            ,
            e.filter = e.select = function(b, N, H) {
                var V = [];
                return b == null ? V : v && b.filter === v ? b.filter(N, H) : (C(b, function(te, J, M) {
                    N.call(H, te, J, M) && V.push(te)
                }),
                V)
            }
            ;
            var U = e.some = e.any = function(b, N, H) {
                N || (N = e.identity);
                var V = !1;
                return b == null ? V : A && b.some === A ? b.some(N, H) : (C(b, function(te, J, M) {
                    if (V || (V = N.call(H, te, J, M)))
                        return t
                }),
                !!V)
            }
            ;
            e.contains = e.include = function(b, N) {
                return b == null ? !1 : m && b.indexOf === m ? b.indexOf(N) != -1 : U(b, function(H) {
                    return H === N
                })
            }
            ,
            e.delay = function(b, N) {
                var H = a.call(arguments, 2);
                return setTimeout(function() {
                    return b.apply(null, H)
                }, N)
            }
            ,
            e.defer = function(b) {
                return e.delay.apply(e, [b, 1].concat(a.call(arguments, 1)))
            }
            ,
            e.throttle = function(b) {
                var N, H, V;
                return function() {
                    N || (N = !0,
                    H = arguments,
                    V = this,
                    WE.frame(function() {
                        N = !1,
                        b.apply(V, H)
                    }))
                }
            }
            ,
            e.debounce = function(b, N, H) {
                var V, te, J, M, k, W = function() {
                    var q = e.now() - M;
                    q < N ? V = setTimeout(W, N - q) : (V = null,
                    H || (k = b.apply(J, te),
                    J = te = null))
                };
                return function() {
                    J = this,
                    te = arguments,
                    M = e.now();
                    var q = H && !V;
                    return V || (V = setTimeout(W, N)),
                    q && (k = b.apply(J, te),
                    J = te = null),
                    k
                }
            }
            ,
            e.defaults = function(b) {
                if (!e.isObject(b))
                    return b;
                for (var N = 1, H = arguments.length; N < H; N++) {
                    var V = arguments[N];
                    for (var te in V)
                        b[te] === void 0 && (b[te] = V[te])
                }
                return b
            }
            ,
            e.keys = function(b) {
                if (!e.isObject(b))
                    return [];
                if (P)
                    return P(b);
                var N = [];
                for (var H in b)
                    e.has(b, H) && N.push(H);
                return N
            }
            ,
            e.has = function(b, N) {
                return l.call(b, N)
            }
            ,
            e.isObject = function(b) {
                return b === Object(b)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var B = /(.)^/
              , K = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , Y = /\\|'|\r|\n|\u2028|\u2029/g
              , Q = function(b) {
                return "\\" + K[b]
            }
              , D = /^\s*(\w|\$)+\s*$/;
            return e.template = function(b, N, H) {
                !N && H && (N = H),
                N = e.defaults({}, N, e.templateSettings);
                var V = RegExp([(N.escape || B).source, (N.interpolate || B).source, (N.evaluate || B).source].join("|") + "|$", "g")
                  , te = 0
                  , J = "__p+='";
                b.replace(V, function(q, F, g, X, z) {
                    return J += b.slice(te, z).replace(Y, Q),
                    te = z + q.length,
                    F ? J += `'+
((__t=(` + F + `))==null?'':_.escape(__t))+
'` : g ? J += `'+
((__t=(` + g + `))==null?'':__t)+
'` : X && (J += `';
` + X + `
__p+='`),
                    q
                }),
                J += `';
`;
                var M = N.variable;
                if (M) {
                    if (!D.test(M))
                        throw new Error("variable is not a bare identifier: " + M)
                } else
                    J = `with(obj||{}){
` + J + `}
`,
                    M = "obj";
                J = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + J + `return __p;
`;
                var k;
                try {
                    k = new Function(N.variable || "obj","_",J)
                } catch (q) {
                    throw q.source = J,
                    q
                }
                var W = function(q) {
                    return k.call(this, q, e)
                };
                return W.source = "function(" + M + `){
` + J + "}",
                W
            }
            ,
            e
        }()
    }
    );
    var Fe = f((SF,ma)=>{
        "use strict";
        var ce = {}
          , mt = {}
          , _t = []
          , zr = window.Webflow || []
          , it = window.jQuery
          , Me = it(window)
          , zE = it(document)
          , ze = it.isFunction
          , De = ce._ = fa()
          , pa = ce.tram = Hr() && it.tram
          , Cn = !1
          , Kr = !1;
        pa.config.hideBackface = !1;
        pa.config.keepInherited = !0;
        ce.define = function(e, t, n) {
            mt[e] && ha(mt[e]);
            var r = mt[e] = t(it, De, n) || {};
            return ga(r),
            r
        }
        ;
        ce.require = function(e) {
            return mt[e]
        }
        ;
        function ga(e) {
            ce.env() && (ze(e.design) && Me.on("__wf_design", e.design),
            ze(e.preview) && Me.on("__wf_preview", e.preview)),
            ze(e.destroy) && Me.on("__wf_destroy", e.destroy),
            e.ready && ze(e.ready) && KE(e)
        }
        function KE(e) {
            if (Cn) {
                e.ready();
                return
            }
            De.contains(_t, e.ready) || _t.push(e.ready)
        }
        function ha(e) {
            ze(e.design) && Me.off("__wf_design", e.design),
            ze(e.preview) && Me.off("__wf_preview", e.preview),
            ze(e.destroy) && Me.off("__wf_destroy", e.destroy),
            e.ready && ze(e.ready) && jE(e)
        }
        function jE(e) {
            _t = De.filter(_t, function(t) {
                return t !== e.ready
            })
        }
        ce.push = function(e) {
            if (Cn) {
                ze(e) && e();
                return
            }
            zr.push(e)
        }
        ;
        ce.env = function(e) {
            var t = window.__wf_design
              , n = typeof t < "u";
            if (!e)
                return n;
            if (e === "design")
                return n && t;
            if (e === "preview")
                return n && !t;
            if (e === "slug")
                return n && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var Rn = navigator.userAgent.toLowerCase()
          , Ea = ce.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , YE = ce.env.chrome = /chrome/.test(Rn) && /Google/.test(navigator.vendor) && parseInt(Rn.match(/chrome\/(\d+)\./)[1], 10)
          , $E = ce.env.ios = /(ipod|iphone|ipad)/.test(Rn);
        ce.env.safari = /safari/.test(Rn) && !YE && !$E;
        var Wr;
        Ea && zE.on("touchstart mousedown", function(e) {
            Wr = e.target
        });
        ce.validClick = Ea ? function(e) {
            return e === Wr || it.contains(e, Wr)
        }
        : function() {
            return !0
        }
        ;
        var ya = "resize.webflow orientationchange.webflow load.webflow"
          , QE = "scroll.webflow " + ya;
        ce.resize = jr(Me, ya);
        ce.scroll = jr(Me, QE);
        ce.redraw = jr();
        function jr(e, t) {
            var n = []
              , r = {};
            return r.up = De.throttle(function(i) {
                De.each(n, function(o) {
                    o(i)
                })
            }),
            e && t && e.on(t, r.up),
            r.on = function(i) {
                typeof i == "function" && (De.contains(n, i) || n.push(i))
            }
            ,
            r.off = function(i) {
                if (!arguments.length) {
                    n = [];
                    return
                }
                n = De.filter(n, function(o) {
                    return o !== i
                })
            }
            ,
            r
        }
        ce.location = function(e) {
            window.location = e
        }
        ;
        ce.env() && (ce.location = function() {}
        );
        ce.ready = function() {
            Cn = !0,
            Kr ? ZE() : De.each(_t, da),
            De.each(zr, da),
            ce.resize.up()
        }
        ;
        function da(e) {
            ze(e) && e()
        }
        function ZE() {
            Kr = !1,
            De.each(mt, ga)
        }
        var lt;
        ce.load = function(e) {
            lt.then(e)
        }
        ;
        function va() {
            lt && (lt.reject(),
            Me.off("load", lt.resolve)),
            lt = new it.Deferred,
            Me.on("load", lt.resolve)
        }
        ce.destroy = function(e) {
            e = e || {},
            Kr = !0,
            Me.triggerHandler("__wf_destroy"),
            e.domready != null && (Cn = e.domready),
            De.each(mt, ha),
            ce.resize.off(),
            ce.scroll.off(),
            ce.redraw.off(),
            _t = [],
            zr = [],
            lt.state() === "pending" && va()
        }
        ;
        it(ce.ready);
        va();
        ma.exports = window.Webflow = ce
    }
    );
    var Ta = f((OF,Ia)=>{
        "use strict";
        var _a = Fe();
        _a.define("brand", Ia.exports = function(e) {
            var t = {}, n = document, r = e("html"), i = e("body"), o = ".w-webflow-badge", a = window.location, s = /PhantomJS/i.test(navigator.userAgent), u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", l;
            t.ready = function() {
                var E = r.attr("data-wf-status")
                  , v = r.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(v) && a.hostname !== v && (E = !0),
                E && !s && (l = l || p(),
                d(),
                setTimeout(d, 500),
                e(n).off(u, h).on(u, h))
            }
            ;
            function h() {
                var E = n.fullScreen || n.mozFullScreen || n.webkitIsFullScreen || n.msFullscreenElement || !!n.webkitFullscreenElement;
                e(l).attr("style", E ? "display: none !important;" : "")
            }
            function p() {
                var E = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , v = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                    marginRight: "4px",
                    width: "26px"
                })
                  , _ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return E.append(v, _),
                E[0]
            }
            function d() {
                var E = i.children(o)
                  , v = E.length && E.get(0) === l
                  , _ = _a.env("editor");
                if (v) {
                    _ && E.remove();
                    return
                }
                E.length && E.remove(),
                _ || i.append(l)
            }
            return t
        }
        )
    }
    );
    var Aa = f((wF,ba)=>{
        "use strict";
        var Yr = Fe();
        Yr.define("edit", ba.exports = function(e, t, n) {
            if (n = n || {},
            (Yr.env("test") || Yr.env("frame")) && !n.fixture && !JE())
                return {
                    exit: 1
                };
            var r = {}, i = e(window), o = e(document.documentElement), a = document.location, s = "hashchange", u, l = n.load || d, h = !1;
            try {
                h = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            h ? l() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && l() : i.on(s, p).triggerHandler(s);
            function p() {
                u || /\?edit/.test(a.hash) && l()
            }
            function d() {
                u = !0,
                window.WebflowEditor = !0,
                i.off(s, p),
                x(function(P) {
                    e.ajax({
                        url: m("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: E(P)
                    })
                })
            }
            function E(P) {
                return function(L) {
                    if (!L) {
                        console.error("Could not load editor data");
                        return
                    }
                    L.thirdPartyCookiesSupported = P,
                    v(A(L.scriptPath), function() {
                        window.WebflowEditor(L)
                    })
                }
            }
            function v(P, L) {
                e.ajax({
                    type: "GET",
                    url: P,
                    dataType: "script",
                    cache: !0
                }).then(L, _)
            }
            function _(P, L, C) {
                throw console.error("Could not load editor script: " + L),
                C
            }
            function A(P) {
                return P.indexOf("//") >= 0 ? P : m("https://editor-api.webflow.com" + P)
            }
            function m(P) {
                return P.replace(/([^:])\/\//g, "$1/")
            }
            function x(P) {
                var L = window.document.createElement("iframe");
                L.src = "https://webflow.com/site/third-party-cookie-check.html",
                L.style.display = "none",
                L.sandbox = "allow-scripts allow-same-origin";
                var C = function(U) {
                    U.data === "WF_third_party_cookies_unsupported" ? (w(L, C),
                    P(!1)) : U.data === "WF_third_party_cookies_supported" && (w(L, C),
                    P(!0))
                };
                L.onerror = function() {
                    w(L, C),
                    P(!1)
                }
                ,
                window.addEventListener("message", C, !1),
                window.document.body.appendChild(L)
            }
            function w(P, L) {
                window.removeEventListener("message", L, !1),
                P.remove()
            }
            return r
        }
        );
        function JE() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    }
    );
    var Oa = f((xF,Sa)=>{
        "use strict";
        var ey = Fe();
        ey.define("focus-visible", Sa.exports = function() {
            function e(n) {
                var r = !0
                  , i = !1
                  , o = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function s(w) {
                    return !!(w && w !== document && w.nodeName !== "HTML" && w.nodeName !== "BODY" && "classList"in w && "contains"in w.classList)
                }
                function u(w) {
                    var P = w.type
                      , L = w.tagName;
                    return !!(L === "INPUT" && a[P] && !w.readOnly || L === "TEXTAREA" && !w.readOnly || w.isContentEditable)
                }
                function l(w) {
                    w.getAttribute("data-wf-focus-visible") || w.setAttribute("data-wf-focus-visible", "true")
                }
                function h(w) {
                    w.getAttribute("data-wf-focus-visible") && w.removeAttribute("data-wf-focus-visible")
                }
                function p(w) {
                    w.metaKey || w.altKey || w.ctrlKey || (s(n.activeElement) && l(n.activeElement),
                    r = !0)
                }
                function d() {
                    r = !1
                }
                function E(w) {
                    s(w.target) && (r || u(w.target)) && l(w.target)
                }
                function v(w) {
                    s(w.target) && w.target.hasAttribute("data-wf-focus-visible") && (i = !0,
                    window.clearTimeout(o),
                    o = window.setTimeout(function() {
                        i = !1
                    }, 100),
                    h(w.target))
                }
                function _() {
                    document.visibilityState === "hidden" && (i && (r = !0),
                    A())
                }
                function A() {
                    document.addEventListener("mousemove", x),
                    document.addEventListener("mousedown", x),
                    document.addEventListener("mouseup", x),
                    document.addEventListener("pointermove", x),
                    document.addEventListener("pointerdown", x),
                    document.addEventListener("pointerup", x),
                    document.addEventListener("touchmove", x),
                    document.addEventListener("touchstart", x),
                    document.addEventListener("touchend", x)
                }
                function m() {
                    document.removeEventListener("mousemove", x),
                    document.removeEventListener("mousedown", x),
                    document.removeEventListener("mouseup", x),
                    document.removeEventListener("pointermove", x),
                    document.removeEventListener("pointerdown", x),
                    document.removeEventListener("pointerup", x),
                    document.removeEventListener("touchmove", x),
                    document.removeEventListener("touchstart", x),
                    document.removeEventListener("touchend", x)
                }
                function x(w) {
                    w.target.nodeName && w.target.nodeName.toLowerCase() === "html" || (r = !1,
                    m())
                }
                document.addEventListener("keydown", p, !0),
                document.addEventListener("mousedown", d, !0),
                document.addEventListener("pointerdown", d, !0),
                document.addEventListener("touchstart", d, !0),
                document.addEventListener("visibilitychange", _, !0),
                A(),
                n.addEventListener("focus", E, !0),
                n.addEventListener("blur", v, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var Ra = f((RF,xa)=>{
        "use strict";
        var wa = Fe();
        wa.define("focus", xa.exports = function() {
            var e = []
              , t = !1;
            function n(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function r(a) {
                var s = a.target
                  , u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }
            function i(a) {
                r(a) && (t = !0,
                setTimeout(()=>{
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type,s))
                    }
                }
                , 0))
            }
            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && wa.env.safari && (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0))
            }
            return {
                ready: o
            }
        }
        )
    }
    );
    var La = f((CF,Pa)=>{
        "use strict";
        var $r = window.jQuery
          , Ke = {}
          , Pn = []
          , Ca = ".w-ix"
          , Ln = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                $r(t).triggerHandler(Ke.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                $r(t).triggerHandler(Ke.types.OUTRO))
            }
        };
        Ke.triggers = {};
        Ke.types = {
            INTRO: "w-ix-intro" + Ca,
            OUTRO: "w-ix-outro" + Ca
        };
        Ke.init = function() {
            for (var e = Pn.length, t = 0; t < e; t++) {
                var n = Pn[t];
                n[0](0, n[1])
            }
            Pn = [],
            $r.extend(Ke.triggers, Ln)
        }
        ;
        Ke.async = function() {
            for (var e in Ln) {
                var t = Ln[e];
                Ln.hasOwnProperty(e) && (Ke.triggers[e] = function(n, r) {
                    Pn.push([t, r])
                }
                )
            }
        }
        ;
        Ke.async();
        Pa.exports = Ke
    }
    );
    var Zr = f((PF,Ma)=>{
        "use strict";
        var Qr = La();
        function Na(e, t) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(n)
        }
        var ty = window.jQuery
          , Nn = {}
          , Da = ".w-ix"
          , ny = {
            reset: function(e, t) {
                Qr.triggers.reset(e, t)
            },
            intro: function(e, t) {
                Qr.triggers.intro(e, t),
                Na(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                Qr.triggers.outro(e, t),
                Na(t, "COMPONENT_INACTIVE")
            }
        };
        Nn.triggers = {};
        Nn.types = {
            INTRO: "w-ix-intro" + Da,
            OUTRO: "w-ix-outro" + Da
        };
        ty.extend(Nn.triggers, ny);
        Ma.exports = Nn
    }
    );
    var Jr = f((LF,Fa)=>{
        var ry = typeof global == "object" && global && global.Object === Object && global;
        Fa.exports = ry
    }
    );
    var qe = f((NF,qa)=>{
        var iy = Jr()
          , oy = typeof self == "object" && self && self.Object === Object && self
          , ay = iy || oy || Function("return this")();
        qa.exports = ay
    }
    );
    var It = f((DF,Ga)=>{
        var sy = qe()
          , uy = sy.Symbol;
        Ga.exports = uy
    }
    );
    var ka = f((MF,Va)=>{
        var Xa = It()
          , Ua = Object.prototype
          , cy = Ua.hasOwnProperty
          , ly = Ua.toString
          , Qt = Xa ? Xa.toStringTag : void 0;
        function fy(e) {
            var t = cy.call(e, Qt)
              , n = e[Qt];
            try {
                e[Qt] = void 0;
                var r = !0
            } catch {}
            var i = ly.call(e);
            return r && (t ? e[Qt] = n : delete e[Qt]),
            i
        }
        Va.exports = fy
    }
    );
    var Ha = f((FF,Ba)=>{
        var dy = Object.prototype
          , py = dy.toString;
        function gy(e) {
            return py.call(e)
        }
        Ba.exports = gy
    }
    );
    var ot = f((qF,Ka)=>{
        var Wa = It()
          , hy = ka()
          , Ey = Ha()
          , yy = "[object Null]"
          , vy = "[object Undefined]"
          , za = Wa ? Wa.toStringTag : void 0;
        function my(e) {
            return e == null ? e === void 0 ? vy : yy : za && za in Object(e) ? hy(e) : Ey(e)
        }
        Ka.exports = my
    }
    );
    var ei = f((GF,ja)=>{
        function _y(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
        ja.exports = _y
    }
    );
    var ti = f((XF,Ya)=>{
        var Iy = ei()
          , Ty = Iy(Object.getPrototypeOf, Object);
        Ya.exports = Ty
    }
    );
    var Je = f((UF,$a)=>{
        function by(e) {
            return e != null && typeof e == "object"
        }
        $a.exports = by
    }
    );
    var ni = f((VF,Za)=>{
        var Ay = ot()
          , Sy = ti()
          , Oy = Je()
          , wy = "[object Object]"
          , xy = Function.prototype
          , Ry = Object.prototype
          , Qa = xy.toString
          , Cy = Ry.hasOwnProperty
          , Py = Qa.call(Object);
        function Ly(e) {
            if (!Oy(e) || Ay(e) != wy)
                return !1;
            var t = Sy(e);
            if (t === null)
                return !0;
            var n = Cy.call(t, "constructor") && t.constructor;
            return typeof n == "function" && n instanceof n && Qa.call(n) == Py
        }
        Za.exports = Ly
    }
    );
    var Ja = f(ri=>{
        "use strict";
        Object.defineProperty(ri, "__esModule", {
            value: !0
        });
        ri.default = Ny;
        function Ny(e) {
            var t, n = e.Symbol;
            return typeof n == "function" ? n.observable ? t = n.observable : (t = n("observable"),
            n.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var es = f((oi,ii)=>{
        "use strict";
        Object.defineProperty(oi, "__esModule", {
            value: !0
        });
        var Dy = Ja()
          , My = Fy(Dy);
        function Fy(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Tt;
        typeof self < "u" ? Tt = self : typeof window < "u" ? Tt = window : typeof global < "u" ? Tt = global : typeof ii < "u" ? Tt = ii : Tt = Function("return this")();
        var qy = (0,
        My.default)(Tt);
        oi.default = qy
    }
    );
    var ai = f(Zt=>{
        "use strict";
        Zt.__esModule = !0;
        Zt.ActionTypes = void 0;
        Zt.default = is;
        var Gy = ni()
          , Xy = rs(Gy)
          , Uy = es()
          , ts = rs(Uy);
        function rs(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var ns = Zt.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function is(e, t, n) {
            var r;
            if (typeof t == "function" && typeof n > "u" && (n = t,
            t = void 0),
            typeof n < "u") {
                if (typeof n != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return n(is)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var i = e
              , o = t
              , a = []
              , s = a
              , u = !1;
            function l() {
                s === a && (s = a.slice())
            }
            function h() {
                return o
            }
            function p(_) {
                if (typeof _ != "function")
                    throw new Error("Expected listener to be a function.");
                var A = !0;
                return l(),
                s.push(_),
                function() {
                    if (A) {
                        A = !1,
                        l();
                        var x = s.indexOf(_);
                        s.splice(x, 1)
                    }
                }
            }
            function d(_) {
                if (!(0,
                Xy.default)(_))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof _.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0,
                    o = i(o, _)
                } finally {
                    u = !1
                }
                for (var A = a = s, m = 0; m < A.length; m++)
                    A[m]();
                return _
            }
            function E(_) {
                if (typeof _ != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                i = _,
                d({
                    type: ns.INIT
                })
            }
            function v() {
                var _, A = p;
                return _ = {
                    subscribe: function(x) {
                        if (typeof x != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function w() {
                            x.next && x.next(h())
                        }
                        w();
                        var P = A(w);
                        return {
                            unsubscribe: P
                        }
                    }
                },
                _[ts.default] = function() {
                    return this
                }
                ,
                _
            }
            return d({
                type: ns.INIT
            }),
            r = {
                dispatch: d,
                subscribe: p,
                getState: h,
                replaceReducer: E
            },
            r[ts.default] = v,
            r
        }
    }
    );
    var ui = f(si=>{
        "use strict";
        si.__esModule = !0;
        si.default = Vy;
        function Vy(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var ss = f(ci=>{
        "use strict";
        ci.__esModule = !0;
        ci.default = zy;
        var os = ai()
          , ky = ni()
          , WF = as(ky)
          , By = ui()
          , zF = as(By);
        function as(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function Hy(e, t) {
            var n = t && t.type
              , r = n && '"' + n.toString() + '"' || "an action";
            return "Given action " + r + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function Wy(e) {
            Object.keys(e).forEach(function(t) {
                var n = e[t]
                  , r = n(void 0, {
                    type: os.ActionTypes.INIT
                });
                if (typeof r > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof n(void 0, {
                    type: i
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + os.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function zy(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var i = t[r];
                typeof e[i] == "function" && (n[i] = e[i])
            }
            var o = Object.keys(n);
            if (!1)
                var a;
            var s;
            try {
                Wy(n)
            } catch (u) {
                s = u
            }
            return function() {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , h = arguments[1];
                if (s)
                    throw s;
                if (!1)
                    var p;
                for (var d = !1, E = {}, v = 0; v < o.length; v++) {
                    var _ = o[v]
                      , A = n[_]
                      , m = l[_]
                      , x = A(m, h);
                    if (typeof x > "u") {
                        var w = Hy(_, h);
                        throw new Error(w)
                    }
                    E[_] = x,
                    d = d || x !== m
                }
                return d ? E : l
            }
        }
    }
    );
    var cs = f(li=>{
        "use strict";
        li.__esModule = !0;
        li.default = Ky;
        function us(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function Ky(e, t) {
            if (typeof e == "function")
                return us(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var n = Object.keys(e), r = {}, i = 0; i < n.length; i++) {
                var o = n[i]
                  , a = e[o];
                typeof a == "function" && (r[o] = us(a, t))
            }
            return r
        }
    }
    );
    var di = f(fi=>{
        "use strict";
        fi.__esModule = !0;
        fi.default = jy;
        function jy() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            if (t.length === 0)
                return function(o) {
                    return o
                }
                ;
            if (t.length === 1)
                return t[0];
            var r = t[t.length - 1]
              , i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, r.apply(void 0, arguments))
            }
        }
    }
    );
    var ls = f(pi=>{
        "use strict";
        pi.__esModule = !0;
        var Yy = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ;
        pi.default = Jy;
        var $y = di()
          , Qy = Zy($y);
        function Zy(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function Jy() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function(r) {
                return function(i, o, a) {
                    var s = r(i, o, a)
                      , u = s.dispatch
                      , l = []
                      , h = {
                        getState: s.getState,
                        dispatch: function(d) {
                            return u(d)
                        }
                    };
                    return l = t.map(function(p) {
                        return p(h)
                    }),
                    u = Qy.default.apply(void 0, l)(s.dispatch),
                    Yy({}, s, {
                        dispatch: u
                    })
                }
            }
        }
    }
    );
    var gi = f(Ce=>{
        "use strict";
        Ce.__esModule = !0;
        Ce.compose = Ce.applyMiddleware = Ce.bindActionCreators = Ce.combineReducers = Ce.createStore = void 0;
        var ev = ai()
          , tv = bt(ev)
          , nv = ss()
          , rv = bt(nv)
          , iv = cs()
          , ov = bt(iv)
          , av = ls()
          , sv = bt(av)
          , uv = di()
          , cv = bt(uv)
          , lv = ui()
          , QF = bt(lv);
        function bt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ce.createStore = tv.default;
        Ce.combineReducers = rv.default;
        Ce.bindActionCreators = ov.default;
        Ce.applyMiddleware = sv.default;
        Ce.compose = cv.default
    }
    );
    var Ge, hi, je, fv, dv, Dn, pv, Ei = de(()=>{
        "use strict";
        Ge = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        },
        hi = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        },
        je = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        },
        fv = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        },
        dv = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        },
        Dn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        },
        pv = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    }
    );
    var Te, gv, Mn = de(()=>{
        "use strict";
        Te = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        },
        gv = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    }
    );
    var hv, fs = de(()=>{
        "use strict";
        hv = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    }
    );
    var Ev, yv, vv, mv, _v, Iv, Tv, yi, ds = de(()=>{
        "use strict";
        Mn();
        ({TRANSFORM_MOVE: Ev, TRANSFORM_SCALE: yv, TRANSFORM_ROTATE: vv, TRANSFORM_SKEW: mv, STYLE_SIZE: _v, STYLE_FILTER: Iv, STYLE_FONT_VARIATION: Tv} = Te),
        yi = {
            [Ev]: !0,
            [yv]: !0,
            [vv]: !0,
            [mv]: !0,
            [_v]: !0,
            [Iv]: !0,
            [Tv]: !0
        }
    }
    );
    var ye = {};
    Oe(ye, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: ()=>Xv,
        IX2_ANIMATION_FRAME_CHANGED: ()=>Nv,
        IX2_CLEAR_REQUESTED: ()=>Cv,
        IX2_ELEMENT_STATE_CHANGED: ()=>Gv,
        IX2_EVENT_LISTENER_ADDED: ()=>Pv,
        IX2_EVENT_STATE_CHANGED: ()=>Lv,
        IX2_INSTANCE_ADDED: ()=>Mv,
        IX2_INSTANCE_REMOVED: ()=>qv,
        IX2_INSTANCE_STARTED: ()=>Fv,
        IX2_MEDIA_QUERIES_DEFINED: ()=>Vv,
        IX2_PARAMETER_CHANGED: ()=>Dv,
        IX2_PLAYBACK_REQUESTED: ()=>xv,
        IX2_PREVIEW_REQUESTED: ()=>wv,
        IX2_RAW_DATA_IMPORTED: ()=>bv,
        IX2_SESSION_INITIALIZED: ()=>Av,
        IX2_SESSION_STARTED: ()=>Sv,
        IX2_SESSION_STOPPED: ()=>Ov,
        IX2_STOP_REQUESTED: ()=>Rv,
        IX2_TEST_FRAME_RENDERED: ()=>kv,
        IX2_VIEWPORT_WIDTH_CHANGED: ()=>Uv
    });
    var bv, Av, Sv, Ov, wv, xv, Rv, Cv, Pv, Lv, Nv, Dv, Mv, Fv, qv, Gv, Xv, Uv, Vv, kv, ps = de(()=>{
        "use strict";
        bv = "IX2_RAW_DATA_IMPORTED",
        Av = "IX2_SESSION_INITIALIZED",
        Sv = "IX2_SESSION_STARTED",
        Ov = "IX2_SESSION_STOPPED",
        wv = "IX2_PREVIEW_REQUESTED",
        xv = "IX2_PLAYBACK_REQUESTED",
        Rv = "IX2_STOP_REQUESTED",
        Cv = "IX2_CLEAR_REQUESTED",
        Pv = "IX2_EVENT_LISTENER_ADDED",
        Lv = "IX2_EVENT_STATE_CHANGED",
        Nv = "IX2_ANIMATION_FRAME_CHANGED",
        Dv = "IX2_PARAMETER_CHANGED",
        Mv = "IX2_INSTANCE_ADDED",
        Fv = "IX2_INSTANCE_STARTED",
        qv = "IX2_INSTANCE_REMOVED",
        Gv = "IX2_ELEMENT_STATE_CHANGED",
        Xv = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        Uv = "IX2_VIEWPORT_WIDTH_CHANGED",
        Vv = "IX2_MEDIA_QUERIES_DEFINED",
        kv = "IX2_TEST_FRAME_RENDERED"
    }
    );
    var me = {};
    Oe(me, {
        ABSTRACT_NODE: ()=>Um,
        AUTO: ()=>Rm,
        BACKGROUND: ()=>bm,
        BACKGROUND_COLOR: ()=>Tm,
        BAR_DELIMITER: ()=>Lm,
        BORDER_COLOR: ()=>Am,
        BOUNDARY_SELECTOR: ()=>Kv,
        CHILDREN: ()=>Nm,
        COLON_DELIMITER: ()=>Pm,
        COLOR: ()=>Sm,
        COMMA_DELIMITER: ()=>Cm,
        CONFIG_UNIT: ()=>tm,
        CONFIG_VALUE: ()=>Qv,
        CONFIG_X_UNIT: ()=>Zv,
        CONFIG_X_VALUE: ()=>jv,
        CONFIG_Y_UNIT: ()=>Jv,
        CONFIG_Y_VALUE: ()=>Yv,
        CONFIG_Z_UNIT: ()=>em,
        CONFIG_Z_VALUE: ()=>$v,
        DISPLAY: ()=>Om,
        FILTER: ()=>vm,
        FLEX: ()=>wm,
        FONT_VARIATION_SETTINGS: ()=>mm,
        HEIGHT: ()=>Im,
        HTML_ELEMENT: ()=>Gm,
        IMMEDIATE_CHILDREN: ()=>Dm,
        IX2_ID_DELIMITER: ()=>Bv,
        OPACITY: ()=>ym,
        PARENT: ()=>Fm,
        PLAIN_OBJECT: ()=>Xm,
        PRESERVE_3D: ()=>qm,
        RENDER_GENERAL: ()=>km,
        RENDER_PLUGIN: ()=>Hm,
        RENDER_STYLE: ()=>Bm,
        RENDER_TRANSFORM: ()=>Vm,
        ROTATE_X: ()=>fm,
        ROTATE_Y: ()=>dm,
        ROTATE_Z: ()=>pm,
        SCALE_3D: ()=>lm,
        SCALE_X: ()=>sm,
        SCALE_Y: ()=>um,
        SCALE_Z: ()=>cm,
        SIBLINGS: ()=>Mm,
        SKEW: ()=>gm,
        SKEW_X: ()=>hm,
        SKEW_Y: ()=>Em,
        TRANSFORM: ()=>nm,
        TRANSLATE_3D: ()=>am,
        TRANSLATE_X: ()=>rm,
        TRANSLATE_Y: ()=>im,
        TRANSLATE_Z: ()=>om,
        WF_PAGE: ()=>Hv,
        WIDTH: ()=>_m,
        WILL_CHANGE: ()=>xm,
        W_MOD_IX: ()=>zv,
        W_MOD_JS: ()=>Wv
    });
    var Bv, Hv, Wv, zv, Kv, jv, Yv, $v, Qv, Zv, Jv, em, tm, nm, rm, im, om, am, sm, um, cm, lm, fm, dm, pm, gm, hm, Em, ym, vm, mm, _m, Im, Tm, bm, Am, Sm, Om, wm, xm, Rm, Cm, Pm, Lm, Nm, Dm, Mm, Fm, qm, Gm, Xm, Um, Vm, km, Bm, Hm, gs = de(()=>{
        "use strict";
        Bv = "|",
        Hv = "data-wf-page",
        Wv = "w-mod-js",
        zv = "w-mod-ix",
        Kv = ".w-dyn-item",
        jv = "xValue",
        Yv = "yValue",
        $v = "zValue",
        Qv = "value",
        Zv = "xUnit",
        Jv = "yUnit",
        em = "zUnit",
        tm = "unit",
        nm = "transform",
        rm = "translateX",
        im = "translateY",
        om = "translateZ",
        am = "translate3d",
        sm = "scaleX",
        um = "scaleY",
        cm = "scaleZ",
        lm = "scale3d",
        fm = "rotateX",
        dm = "rotateY",
        pm = "rotateZ",
        gm = "skew",
        hm = "skewX",
        Em = "skewY",
        ym = "opacity",
        vm = "filter",
        mm = "font-variation-settings",
        _m = "width",
        Im = "height",
        Tm = "backgroundColor",
        bm = "background",
        Am = "borderColor",
        Sm = "color",
        Om = "display",
        wm = "flex",
        xm = "willChange",
        Rm = "AUTO",
        Cm = ",",
        Pm = ":",
        Lm = "|",
        Nm = "CHILDREN",
        Dm = "IMMEDIATE_CHILDREN",
        Mm = "SIBLINGS",
        Fm = "PARENT",
        qm = "preserve-3d",
        Gm = "HTML_ELEMENT",
        Xm = "PLAIN_OBJECT",
        Um = "ABSTRACT_NODE",
        Vm = "RENDER_TRANSFORM",
        km = "RENDER_GENERAL",
        Bm = "RENDER_STYLE",
        Hm = "RENDER_PLUGIN"
    }
    );
    var hs = {};
    Oe(hs, {
        ActionAppliesTo: ()=>gv,
        ActionTypeConsts: ()=>Te,
        EventAppliesTo: ()=>hi,
        EventBasedOn: ()=>je,
        EventContinuousMouseAxes: ()=>fv,
        EventLimitAffectedElements: ()=>dv,
        EventTypeConsts: ()=>Ge,
        IX2EngineActionTypes: ()=>ye,
        IX2EngineConstants: ()=>me,
        InteractionTypeConsts: ()=>hv,
        QuickEffectDirectionConsts: ()=>pv,
        QuickEffectIds: ()=>Dn,
        ReducedMotionTypes: ()=>yi
    });
    var we = de(()=>{
        "use strict";
        Ei();
        Mn();
        fs();
        ds();
        ps();
        gs();
        Mn();
        Ei()
    }
    );
    var Wm, Es, ys = de(()=>{
        "use strict";
        we();
        ({IX2_RAW_DATA_IMPORTED: Wm} = ye),
        Es = (e=Object.freeze({}),t)=>{
            switch (t.type) {
            case Wm:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
    }
    );
    var At = f(ge=>{
        "use strict";
        Object.defineProperty(ge, "__esModule", {
            value: !0
        });
        var zm = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        ge.clone = qn;
        ge.addLast = _s;
        ge.addFirst = Is;
        ge.removeLast = Ts;
        ge.removeFirst = bs;
        ge.insert = As;
        ge.removeAt = Ss;
        ge.replaceAt = Os;
        ge.getIn = Gn;
        ge.set = Xn;
        ge.setIn = Un;
        ge.update = xs;
        ge.updateIn = Rs;
        ge.merge = Cs;
        ge.mergeDeep = Ps;
        ge.mergeIn = Ls;
        ge.omit = Ns;
        ge.addDefaults = Ds;
        var vs = "INVALID_ARGS";
        function ms(e) {
            throw new Error(e)
        }
        function vi(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var Km = {}.hasOwnProperty;
        function qn(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = vi(e), n = {}, r = 0; r < t.length; r++) {
                var i = t[r];
                n[i] = e[i]
            }
            return n
        }
        function xe(e, t, n) {
            var r = n;
            r == null && ms(vs);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++)
                a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var l = a[u];
                if (l != null) {
                    var h = vi(l);
                    if (h.length)
                        for (var p = 0; p <= h.length; p++) {
                            var d = h[p];
                            if (!(e && r[d] !== void 0)) {
                                var E = l[d];
                                t && Fn(r[d]) && Fn(E) && (E = xe(e, t, r[d], E)),
                                !(E === void 0 || E === r[d]) && (i || (i = !0,
                                r = qn(r)),
                                r[d] = E)
                            }
                        }
                }
            }
            return r
        }
        function Fn(e) {
            var t = typeof e > "u" ? "undefined" : zm(e);
            return e != null && (t === "object" || t === "function")
        }
        function _s(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function Is(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function Ts(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function bs(e) {
            return e.length ? e.slice(1) : e
        }
        function As(e, t, n) {
            return e.slice(0, t).concat(Array.isArray(n) ? n : [n]).concat(e.slice(t))
        }
        function Ss(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function Os(e, t, n) {
            if (e[t] === n)
                return e;
            for (var r = e.length, i = Array(r), o = 0; o < r; o++)
                i[o] = e[o];
            return i[t] = n,
            i
        }
        function Gn(e, t) {
            if (!Array.isArray(t) && ms(vs),
            e != null) {
                for (var n = e, r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (n = n?.[i],
                    n === void 0)
                        return n
                }
                return n
            }
        }
        function Xn(e, t, n) {
            var r = typeof t == "number" ? [] : {}
              , i = e ?? r;
            if (i[t] === n)
                return i;
            var o = qn(i);
            return o[t] = n,
            o
        }
        function ws(e, t, n, r) {
            var i = void 0
              , o = t[r];
            if (r === t.length - 1)
                i = n;
            else {
                var a = Fn(e) && Fn(e[o]) ? e[o] : typeof t[r + 1] == "number" ? [] : {};
                i = ws(a, t, n, r + 1)
            }
            return Xn(e, o, i)
        }
        function Un(e, t, n) {
            return t.length ? ws(e, t, n, 0) : n
        }
        function xs(e, t, n) {
            var r = e?.[t]
              , i = n(r);
            return Xn(e, t, i)
        }
        function Rs(e, t, n) {
            var r = Gn(e, t)
              , i = n(r);
            return Un(e, t, i)
        }
        function Cs(e, t, n, r, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? xe.call.apply(xe, [null, !1, !1, e, t, n, r, i, o].concat(s)) : xe(!1, !1, e, t, n, r, i, o)
        }
        function Ps(e, t, n, r, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? xe.call.apply(xe, [null, !1, !0, e, t, n, r, i, o].concat(s)) : xe(!1, !0, e, t, n, r, i, o)
        }
        function Ls(e, t, n, r, i, o, a) {
            var s = Gn(e, t);
            s == null && (s = {});
            for (var u = void 0, l = arguments.length, h = Array(l > 7 ? l - 7 : 0), p = 7; p < l; p++)
                h[p - 7] = arguments[p];
            return h.length ? u = xe.call.apply(xe, [null, !1, !1, s, n, r, i, o, a].concat(h)) : u = xe(!1, !1, s, n, r, i, o, a),
            Un(e, t, u)
        }
        function Ns(e, t) {
            for (var n = Array.isArray(t) ? t : [t], r = !1, i = 0; i < n.length; i++)
                if (Km.call(e, n[i])) {
                    r = !0;
                    break
                }
            if (!r)
                return e;
            for (var o = {}, a = vi(e), s = 0; s < a.length; s++) {
                var u = a[s];
                n.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }
        function Ds(e, t, n, r, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? xe.call.apply(xe, [null, !0, !1, e, t, n, r, i, o].concat(s)) : xe(!0, !1, e, t, n, r, i, o)
        }
        var jm = {
            clone: qn,
            addLast: _s,
            addFirst: Is,
            removeLast: Ts,
            removeFirst: bs,
            insert: As,
            removeAt: Ss,
            replaceAt: Os,
            getIn: Gn,
            set: Xn,
            setIn: Un,
            update: xs,
            updateIn: Rs,
            merge: Cs,
            mergeDeep: Ps,
            mergeIn: Ls,
            omit: Ns,
            addDefaults: Ds
        };
        ge.default = jm
    }
    );
    var Fs, Ym, $m, Qm, Zm, Jm, Ms, qs, Gs = de(()=>{
        "use strict";
        we();
        Fs = ae(At()),
        {IX2_PREVIEW_REQUESTED: Ym, IX2_PLAYBACK_REQUESTED: $m, IX2_STOP_REQUESTED: Qm, IX2_CLEAR_REQUESTED: Zm} = ye,
        Jm = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        Ms = Object.create(null, {
            [Ym]: {
                value: "preview"
            },
            [$m]: {
                value: "playback"
            },
            [Qm]: {
                value: "stop"
            },
            [Zm]: {
                value: "clear"
            }
        }),
        qs = (e=Jm,t)=>{
            if (t.type in Ms) {
                let n = [Ms[t.type]];
                return (0,
                Fs.setIn)(e, [n], {
                    ...t.payload
                })
            }
            return e
        }
    }
    );
    var be, e_, t_, n_, r_, i_, o_, a_, s_, u_, c_, Xs, l_, Us, Vs = de(()=>{
        "use strict";
        we();
        be = ae(At()),
        {IX2_SESSION_INITIALIZED: e_, IX2_SESSION_STARTED: t_, IX2_TEST_FRAME_RENDERED: n_, IX2_SESSION_STOPPED: r_, IX2_EVENT_LISTENER_ADDED: i_, IX2_EVENT_STATE_CHANGED: o_, IX2_ANIMATION_FRAME_CHANGED: a_, IX2_ACTION_LIST_PLAYBACK_CHANGED: s_, IX2_VIEWPORT_WIDTH_CHANGED: u_, IX2_MEDIA_QUERIES_DEFINED: c_} = ye,
        Xs = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        },
        l_ = 20,
        Us = (e=Xs,t)=>{
            switch (t.type) {
            case e_:
                {
                    let {hasBoundaryNodes: n, reducedMotion: r} = t.payload;
                    return (0,
                    be.merge)(e, {
                        hasBoundaryNodes: n,
                        reducedMotion: r
                    })
                }
            case t_:
                return (0,
                be.set)(e, "active", !0);
            case n_:
                {
                    let {payload: {step: n=l_}} = t;
                    return (0,
                    be.set)(e, "tick", e.tick + n)
                }
            case r_:
                return Xs;
            case a_:
                {
                    let {payload: {now: n}} = t;
                    return (0,
                    be.set)(e, "tick", n)
                }
            case i_:
                {
                    let n = (0,
                    be.addLast)(e.eventListeners, t.payload);
                    return (0,
                    be.set)(e, "eventListeners", n)
                }
            case o_:
                {
                    let {stateKey: n, newState: r} = t.payload;
                    return (0,
                    be.setIn)(e, ["eventState", n], r)
                }
            case s_:
                {
                    let {actionListId: n, isPlaying: r} = t.payload;
                    return (0,
                    be.setIn)(e, ["playbackState", n], r)
                }
            case u_:
                {
                    let {width: n, mediaQueries: r} = t.payload
                      , i = r.length
                      , o = null;
                    for (let a = 0; a < i; a++) {
                        let {key: s, min: u, max: l} = r[a];
                        if (n >= u && n <= l) {
                            o = s;
                            break
                        }
                    }
                    return (0,
                    be.merge)(e, {
                        viewportWidth: n,
                        mediaQueryKey: o
                    })
                }
            case c_:
                return (0,
                be.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
    }
    );
    var Bs = f((y2,ks)=>{
        function f_() {
            this.__data__ = [],
            this.size = 0
        }
        ks.exports = f_
    }
    );
    var Vn = f((v2,Hs)=>{
        function d_(e, t) {
            return e === t || e !== e && t !== t
        }
        Hs.exports = d_
    }
    );
    var Jt = f((m2,Ws)=>{
        var p_ = Vn();
        function g_(e, t) {
            for (var n = e.length; n--; )
                if (p_(e[n][0], t))
                    return n;
            return -1
        }
        Ws.exports = g_
    }
    );
    var Ks = f((_2,zs)=>{
        var h_ = Jt()
          , E_ = Array.prototype
          , y_ = E_.splice;
        function v_(e) {
            var t = this.__data__
              , n = h_(t, e);
            if (n < 0)
                return !1;
            var r = t.length - 1;
            return n == r ? t.pop() : y_.call(t, n, 1),
            --this.size,
            !0
        }
        zs.exports = v_
    }
    );
    var Ys = f((I2,js)=>{
        var m_ = Jt();
        function __(e) {
            var t = this.__data__
              , n = m_(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
        js.exports = __
    }
    );
    var Qs = f((T2,$s)=>{
        var I_ = Jt();
        function T_(e) {
            return I_(this.__data__, e) > -1
        }
        $s.exports = T_
    }
    );
    var Js = f((b2,Zs)=>{
        var b_ = Jt();
        function A_(e, t) {
            var n = this.__data__
              , r = b_(n, e);
            return r < 0 ? (++this.size,
            n.push([e, t])) : n[r][1] = t,
            this
        }
        Zs.exports = A_
    }
    );
    var en = f((A2,eu)=>{
        var S_ = Bs()
          , O_ = Ks()
          , w_ = Ys()
          , x_ = Qs()
          , R_ = Js();
        function St(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        St.prototype.clear = S_;
        St.prototype.delete = O_;
        St.prototype.get = w_;
        St.prototype.has = x_;
        St.prototype.set = R_;
        eu.exports = St
    }
    );
    var nu = f((S2,tu)=>{
        var C_ = en();
        function P_() {
            this.__data__ = new C_,
            this.size = 0
        }
        tu.exports = P_
    }
    );
    var iu = f((O2,ru)=>{
        function L_(e) {
            var t = this.__data__
              , n = t.delete(e);
            return this.size = t.size,
            n
        }
        ru.exports = L_
    }
    );
    var au = f((w2,ou)=>{
        function N_(e) {
            return this.__data__.get(e)
        }
        ou.exports = N_
    }
    );
    var uu = f((x2,su)=>{
        function D_(e) {
            return this.__data__.has(e)
        }
        su.exports = D_
    }
    );
    var Ye = f((R2,cu)=>{
        function M_(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        cu.exports = M_
    }
    );
    var mi = f((C2,lu)=>{
        var F_ = ot()
          , q_ = Ye()
          , G_ = "[object AsyncFunction]"
          , X_ = "[object Function]"
          , U_ = "[object GeneratorFunction]"
          , V_ = "[object Proxy]";
        function k_(e) {
            if (!q_(e))
                return !1;
            var t = F_(e);
            return t == X_ || t == U_ || t == G_ || t == V_
        }
        lu.exports = k_
    }
    );
    var du = f((P2,fu)=>{
        var B_ = qe()
          , H_ = B_["__core-js_shared__"];
        fu.exports = H_
    }
    );
    var hu = f((L2,gu)=>{
        var _i = du()
          , pu = function() {
            var e = /[^.]+$/.exec(_i && _i.keys && _i.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function W_(e) {
            return !!pu && pu in e
        }
        gu.exports = W_
    }
    );
    var Ii = f((N2,Eu)=>{
        var z_ = Function.prototype
          , K_ = z_.toString;
        function j_(e) {
            if (e != null) {
                try {
                    return K_.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Eu.exports = j_
    }
    );
    var vu = f((D2,yu)=>{
        var Y_ = mi()
          , $_ = hu()
          , Q_ = Ye()
          , Z_ = Ii()
          , J_ = /[\\^$.*+?()[\]{}|]/g
          , eI = /^\[object .+?Constructor\]$/
          , tI = Function.prototype
          , nI = Object.prototype
          , rI = tI.toString
          , iI = nI.hasOwnProperty
          , oI = RegExp("^" + rI.call(iI).replace(J_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function aI(e) {
            if (!Q_(e) || $_(e))
                return !1;
            var t = Y_(e) ? oI : eI;
            return t.test(Z_(e))
        }
        yu.exports = aI
    }
    );
    var _u = f((M2,mu)=>{
        function sI(e, t) {
            return e?.[t]
        }
        mu.exports = sI
    }
    );
    var at = f((F2,Iu)=>{
        var uI = vu()
          , cI = _u();
        function lI(e, t) {
            var n = cI(e, t);
            return uI(n) ? n : void 0
        }
        Iu.exports = lI
    }
    );
    var kn = f((q2,Tu)=>{
        var fI = at()
          , dI = qe()
          , pI = fI(dI, "Map");
        Tu.exports = pI
    }
    );
    var tn = f((G2,bu)=>{
        var gI = at()
          , hI = gI(Object, "create");
        bu.exports = hI
    }
    );
    var Ou = f((X2,Su)=>{
        var Au = tn();
        function EI() {
            this.__data__ = Au ? Au(null) : {},
            this.size = 0
        }
        Su.exports = EI
    }
    );
    var xu = f((U2,wu)=>{
        function yI(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        wu.exports = yI
    }
    );
    var Cu = f((V2,Ru)=>{
        var vI = tn()
          , mI = "__lodash_hash_undefined__"
          , _I = Object.prototype
          , II = _I.hasOwnProperty;
        function TI(e) {
            var t = this.__data__;
            if (vI) {
                var n = t[e];
                return n === mI ? void 0 : n
            }
            return II.call(t, e) ? t[e] : void 0
        }
        Ru.exports = TI
    }
    );
    var Lu = f((k2,Pu)=>{
        var bI = tn()
          , AI = Object.prototype
          , SI = AI.hasOwnProperty;
        function OI(e) {
            var t = this.__data__;
            return bI ? t[e] !== void 0 : SI.call(t, e)
        }
        Pu.exports = OI
    }
    );
    var Du = f((B2,Nu)=>{
        var wI = tn()
          , xI = "__lodash_hash_undefined__";
        function RI(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            n[e] = wI && t === void 0 ? xI : t,
            this
        }
        Nu.exports = RI
    }
    );
    var Fu = f((H2,Mu)=>{
        var CI = Ou()
          , PI = xu()
          , LI = Cu()
          , NI = Lu()
          , DI = Du();
        function Ot(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Ot.prototype.clear = CI;
        Ot.prototype.delete = PI;
        Ot.prototype.get = LI;
        Ot.prototype.has = NI;
        Ot.prototype.set = DI;
        Mu.exports = Ot
    }
    );
    var Xu = f((W2,Gu)=>{
        var qu = Fu()
          , MI = en()
          , FI = kn();
        function qI() {
            this.size = 0,
            this.__data__ = {
                hash: new qu,
                map: new (FI || MI),
                string: new qu
            }
        }
        Gu.exports = qI
    }
    );
    var Vu = f((z2,Uu)=>{
        function GI(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Uu.exports = GI
    }
    );
    var nn = f((K2,ku)=>{
        var XI = Vu();
        function UI(e, t) {
            var n = e.__data__;
            return XI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
        }
        ku.exports = UI
    }
    );
    var Hu = f((j2,Bu)=>{
        var VI = nn();
        function kI(e) {
            var t = VI(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        Bu.exports = kI
    }
    );
    var zu = f((Y2,Wu)=>{
        var BI = nn();
        function HI(e) {
            return BI(this, e).get(e)
        }
        Wu.exports = HI
    }
    );
    var ju = f(($2,Ku)=>{
        var WI = nn();
        function zI(e) {
            return WI(this, e).has(e)
        }
        Ku.exports = zI
    }
    );
    var $u = f((Q2,Yu)=>{
        var KI = nn();
        function jI(e, t) {
            var n = KI(this, e)
              , r = n.size;
            return n.set(e, t),
            this.size += n.size == r ? 0 : 1,
            this
        }
        Yu.exports = jI
    }
    );
    var Bn = f((Z2,Qu)=>{
        var YI = Xu()
          , $I = Hu()
          , QI = zu()
          , ZI = ju()
          , JI = $u();
        function wt(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        wt.prototype.clear = YI;
        wt.prototype.delete = $I;
        wt.prototype.get = QI;
        wt.prototype.has = ZI;
        wt.prototype.set = JI;
        Qu.exports = wt
    }
    );
    var Ju = f((J2,Zu)=>{
        var eT = en()
          , tT = kn()
          , nT = Bn()
          , rT = 200;
        function iT(e, t) {
            var n = this.__data__;
            if (n instanceof eT) {
                var r = n.__data__;
                if (!tT || r.length < rT - 1)
                    return r.push([e, t]),
                    this.size = ++n.size,
                    this;
                n = this.__data__ = new nT(r)
            }
            return n.set(e, t),
            this.size = n.size,
            this
        }
        Zu.exports = iT
    }
    );
    var Ti = f((eq,ec)=>{
        var oT = en()
          , aT = nu()
          , sT = iu()
          , uT = au()
          , cT = uu()
          , lT = Ju();
        function xt(e) {
            var t = this.__data__ = new oT(e);
            this.size = t.size
        }
        xt.prototype.clear = aT;
        xt.prototype.delete = sT;
        xt.prototype.get = uT;
        xt.prototype.has = cT;
        xt.prototype.set = lT;
        ec.exports = xt
    }
    );
    var nc = f((tq,tc)=>{
        var fT = "__lodash_hash_undefined__";
        function dT(e) {
            return this.__data__.set(e, fT),
            this
        }
        tc.exports = dT
    }
    );
    var ic = f((nq,rc)=>{
        function pT(e) {
            return this.__data__.has(e)
        }
        rc.exports = pT
    }
    );
    var ac = f((rq,oc)=>{
        var gT = Bn()
          , hT = nc()
          , ET = ic();
        function Hn(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.__data__ = new gT; ++t < n; )
                this.add(e[t])
        }
        Hn.prototype.add = Hn.prototype.push = hT;
        Hn.prototype.has = ET;
        oc.exports = Hn
    }
    );
    var uc = f((iq,sc)=>{
        function yT(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
                if (t(e[n], n, e))
                    return !0;
            return !1
        }
        sc.exports = yT
    }
    );
    var lc = f((oq,cc)=>{
        function vT(e, t) {
            return e.has(t)
        }
        cc.exports = vT
    }
    );
    var bi = f((aq,fc)=>{
        var mT = ac()
          , _T = uc()
          , IT = lc()
          , TT = 1
          , bT = 2;
        function AT(e, t, n, r, i, o) {
            var a = n & TT
              , s = e.length
              , u = t.length;
            if (s != u && !(a && u > s))
                return !1;
            var l = o.get(e)
              , h = o.get(t);
            if (l && h)
                return l == t && h == e;
            var p = -1
              , d = !0
              , E = n & bT ? new mT : void 0;
            for (o.set(e, t),
            o.set(t, e); ++p < s; ) {
                var v = e[p]
                  , _ = t[p];
                if (r)
                    var A = a ? r(_, v, p, t, e, o) : r(v, _, p, e, t, o);
                if (A !== void 0) {
                    if (A)
                        continue;
                    d = !1;
                    break
                }
                if (E) {
                    if (!_T(t, function(m, x) {
                        if (!IT(E, x) && (v === m || i(v, m, n, r, o)))
                            return E.push(x)
                    })) {
                        d = !1;
                        break
                    }
                } else if (!(v === _ || i(v, _, n, r, o))) {
                    d = !1;
                    break
                }
            }
            return o.delete(e),
            o.delete(t),
            d
        }
        fc.exports = AT
    }
    );
    var pc = f((sq,dc)=>{
        var ST = qe()
          , OT = ST.Uint8Array;
        dc.exports = OT
    }
    );
    var hc = f((uq,gc)=>{
        function wT(e) {
            var t = -1
              , n = Array(e.size);
            return e.forEach(function(r, i) {
                n[++t] = [i, r]
            }),
            n
        }
        gc.exports = wT
    }
    );
    var yc = f((cq,Ec)=>{
        function xT(e) {
            var t = -1
              , n = Array(e.size);
            return e.forEach(function(r) {
                n[++t] = r
            }),
            n
        }
        Ec.exports = xT
    }
    );
    var Tc = f((lq,Ic)=>{
        var vc = It()
          , mc = pc()
          , RT = Vn()
          , CT = bi()
          , PT = hc()
          , LT = yc()
          , NT = 1
          , DT = 2
          , MT = "[object Boolean]"
          , FT = "[object Date]"
          , qT = "[object Error]"
          , GT = "[object Map]"
          , XT = "[object Number]"
          , UT = "[object RegExp]"
          , VT = "[object Set]"
          , kT = "[object String]"
          , BT = "[object Symbol]"
          , HT = "[object ArrayBuffer]"
          , WT = "[object DataView]"
          , _c = vc ? vc.prototype : void 0
          , Ai = _c ? _c.valueOf : void 0;
        function zT(e, t, n, r, i, o, a) {
            switch (n) {
            case WT:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case HT:
                return !(e.byteLength != t.byteLength || !o(new mc(e), new mc(t)));
            case MT:
            case FT:
            case XT:
                return RT(+e, +t);
            case qT:
                return e.name == t.name && e.message == t.message;
            case UT:
            case kT:
                return e == t + "";
            case GT:
                var s = PT;
            case VT:
                var u = r & NT;
                if (s || (s = LT),
                e.size != t.size && !u)
                    return !1;
                var l = a.get(e);
                if (l)
                    return l == t;
                r |= DT,
                a.set(e, t);
                var h = CT(s(e), s(t), r, i, o, a);
                return a.delete(e),
                h;
            case BT:
                if (Ai)
                    return Ai.call(e) == Ai.call(t)
            }
            return !1
        }
        Ic.exports = zT
    }
    );
    var Wn = f((fq,bc)=>{
        function KT(e, t) {
            for (var n = -1, r = t.length, i = e.length; ++n < r; )
                e[i + n] = t[n];
            return e
        }
        bc.exports = KT
    }
    );
    var ve = f((dq,Ac)=>{
        var jT = Array.isArray;
        Ac.exports = jT
    }
    );
    var Si = f((pq,Sc)=>{
        var YT = Wn()
          , $T = ve();
        function QT(e, t, n) {
            var r = t(e);
            return $T(e) ? r : YT(r, n(e))
        }
        Sc.exports = QT
    }
    );
    var wc = f((gq,Oc)=>{
        function ZT(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
                var a = e[n];
                t(a, n, e) && (o[i++] = a)
            }
            return o
        }
        Oc.exports = ZT
    }
    );
    var Oi = f((hq,xc)=>{
        function JT() {
            return []
        }
        xc.exports = JT
    }
    );
    var wi = f((Eq,Cc)=>{
        var eb = wc()
          , tb = Oi()
          , nb = Object.prototype
          , rb = nb.propertyIsEnumerable
          , Rc = Object.getOwnPropertySymbols
          , ib = Rc ? function(e) {
            return e == null ? [] : (e = Object(e),
            eb(Rc(e), function(t) {
                return rb.call(e, t)
            }))
        }
        : tb;
        Cc.exports = ib
    }
    );
    var Lc = f((yq,Pc)=>{
        function ob(e, t) {
            for (var n = -1, r = Array(e); ++n < e; )
                r[n] = t(n);
            return r
        }
        Pc.exports = ob
    }
    );
    var Dc = f((vq,Nc)=>{
        var ab = ot()
          , sb = Je()
          , ub = "[object Arguments]";
        function cb(e) {
            return sb(e) && ab(e) == ub
        }
        Nc.exports = cb
    }
    );
    var rn = f((mq,qc)=>{
        var Mc = Dc()
          , lb = Je()
          , Fc = Object.prototype
          , fb = Fc.hasOwnProperty
          , db = Fc.propertyIsEnumerable
          , pb = Mc(function() {
            return arguments
        }()) ? Mc : function(e) {
            return lb(e) && fb.call(e, "callee") && !db.call(e, "callee")
        }
        ;
        qc.exports = pb
    }
    );
    var Xc = f((_q,Gc)=>{
        function gb() {
            return !1
        }
        Gc.exports = gb
    }
    );
    var zn = f((on,Rt)=>{
        var hb = qe()
          , Eb = Xc()
          , kc = typeof on == "object" && on && !on.nodeType && on
          , Uc = kc && typeof Rt == "object" && Rt && !Rt.nodeType && Rt
          , yb = Uc && Uc.exports === kc
          , Vc = yb ? hb.Buffer : void 0
          , vb = Vc ? Vc.isBuffer : void 0
          , mb = vb || Eb;
        Rt.exports = mb
    }
    );
    var Kn = f((Iq,Bc)=>{
        var _b = 9007199254740991
          , Ib = /^(?:0|[1-9]\d*)$/;
        function Tb(e, t) {
            var n = typeof e;
            return t = t ?? _b,
            !!t && (n == "number" || n != "symbol" && Ib.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Bc.exports = Tb
    }
    );
    var jn = f((Tq,Hc)=>{
        var bb = 9007199254740991;
        function Ab(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= bb
        }
        Hc.exports = Ab
    }
    );
    var zc = f((bq,Wc)=>{
        var Sb = ot()
          , Ob = jn()
          , wb = Je()
          , xb = "[object Arguments]"
          , Rb = "[object Array]"
          , Cb = "[object Boolean]"
          , Pb = "[object Date]"
          , Lb = "[object Error]"
          , Nb = "[object Function]"
          , Db = "[object Map]"
          , Mb = "[object Number]"
          , Fb = "[object Object]"
          , qb = "[object RegExp]"
          , Gb = "[object Set]"
          , Xb = "[object String]"
          , Ub = "[object WeakMap]"
          , Vb = "[object ArrayBuffer]"
          , kb = "[object DataView]"
          , Bb = "[object Float32Array]"
          , Hb = "[object Float64Array]"
          , Wb = "[object Int8Array]"
          , zb = "[object Int16Array]"
          , Kb = "[object Int32Array]"
          , jb = "[object Uint8Array]"
          , Yb = "[object Uint8ClampedArray]"
          , $b = "[object Uint16Array]"
          , Qb = "[object Uint32Array]"
          , fe = {};
        fe[Bb] = fe[Hb] = fe[Wb] = fe[zb] = fe[Kb] = fe[jb] = fe[Yb] = fe[$b] = fe[Qb] = !0;
        fe[xb] = fe[Rb] = fe[Vb] = fe[Cb] = fe[kb] = fe[Pb] = fe[Lb] = fe[Nb] = fe[Db] = fe[Mb] = fe[Fb] = fe[qb] = fe[Gb] = fe[Xb] = fe[Ub] = !1;
        function Zb(e) {
            return wb(e) && Ob(e.length) && !!fe[Sb(e)]
        }
        Wc.exports = Zb
    }
    );
    var jc = f((Aq,Kc)=>{
        function Jb(e) {
            return function(t) {
                return e(t)
            }
        }
        Kc.exports = Jb
    }
    );
    var $c = f((an,Ct)=>{
        var eA = Jr()
          , Yc = typeof an == "object" && an && !an.nodeType && an
          , sn = Yc && typeof Ct == "object" && Ct && !Ct.nodeType && Ct
          , tA = sn && sn.exports === Yc
          , xi = tA && eA.process
          , nA = function() {
            try {
                var e = sn && sn.require && sn.require("util").types;
                return e || xi && xi.binding && xi.binding("util")
            } catch {}
        }();
        Ct.exports = nA
    }
    );
    var Yn = f((Sq,Jc)=>{
        var rA = zc()
          , iA = jc()
          , Qc = $c()
          , Zc = Qc && Qc.isTypedArray
          , oA = Zc ? iA(Zc) : rA;
        Jc.exports = oA
    }
    );
    var Ri = f((Oq,el)=>{
        var aA = Lc()
          , sA = rn()
          , uA = ve()
          , cA = zn()
          , lA = Kn()
          , fA = Yn()
          , dA = Object.prototype
          , pA = dA.hasOwnProperty;
        function gA(e, t) {
            var n = uA(e)
              , r = !n && sA(e)
              , i = !n && !r && cA(e)
              , o = !n && !r && !i && fA(e)
              , a = n || r || i || o
              , s = a ? aA(e.length, String) : []
              , u = s.length;
            for (var l in e)
                (t || pA.call(e, l)) && !(a && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || lA(l, u))) && s.push(l);
            return s
        }
        el.exports = gA
    }
    );
    var $n = f((wq,tl)=>{
        var hA = Object.prototype;
        function EA(e) {
            var t = e && e.constructor
              , n = typeof t == "function" && t.prototype || hA;
            return e === n
        }
        tl.exports = EA
    }
    );
    var rl = f((xq,nl)=>{
        var yA = ei()
          , vA = yA(Object.keys, Object);
        nl.exports = vA
    }
    );
    var Qn = f((Rq,il)=>{
        var mA = $n()
          , _A = rl()
          , IA = Object.prototype
          , TA = IA.hasOwnProperty;
        function bA(e) {
            if (!mA(e))
                return _A(e);
            var t = [];
            for (var n in Object(e))
                TA.call(e, n) && n != "constructor" && t.push(n);
            return t
        }
        il.exports = bA
    }
    );
    var ft = f((Cq,ol)=>{
        var AA = mi()
          , SA = jn();
        function OA(e) {
            return e != null && SA(e.length) && !AA(e)
        }
        ol.exports = OA
    }
    );
    var un = f((Pq,al)=>{
        var wA = Ri()
          , xA = Qn()
          , RA = ft();
        function CA(e) {
            return RA(e) ? wA(e) : xA(e)
        }
        al.exports = CA
    }
    );
    var ul = f((Lq,sl)=>{
        var PA = Si()
          , LA = wi()
          , NA = un();
        function DA(e) {
            return PA(e, NA, LA)
        }
        sl.exports = DA
    }
    );
    var fl = f((Nq,ll)=>{
        var cl = ul()
          , MA = 1
          , FA = Object.prototype
          , qA = FA.hasOwnProperty;
        function GA(e, t, n, r, i, o) {
            var a = n & MA
              , s = cl(e)
              , u = s.length
              , l = cl(t)
              , h = l.length;
            if (u != h && !a)
                return !1;
            for (var p = u; p--; ) {
                var d = s[p];
                if (!(a ? d in t : qA.call(t, d)))
                    return !1
            }
            var E = o.get(e)
              , v = o.get(t);
            if (E && v)
                return E == t && v == e;
            var _ = !0;
            o.set(e, t),
            o.set(t, e);
            for (var A = a; ++p < u; ) {
                d = s[p];
                var m = e[d]
                  , x = t[d];
                if (r)
                    var w = a ? r(x, m, d, t, e, o) : r(m, x, d, e, t, o);
                if (!(w === void 0 ? m === x || i(m, x, n, r, o) : w)) {
                    _ = !1;
                    break
                }
                A || (A = d == "constructor")
            }
            if (_ && !A) {
                var P = e.constructor
                  , L = t.constructor;
                P != L && "constructor"in e && "constructor"in t && !(typeof P == "function" && P instanceof P && typeof L == "function" && L instanceof L) && (_ = !1)
            }
            return o.delete(e),
            o.delete(t),
            _
        }
        ll.exports = GA
    }
    );
    var pl = f((Dq,dl)=>{
        var XA = at()
          , UA = qe()
          , VA = XA(UA, "DataView");
        dl.exports = VA
    }
    );
    var hl = f((Mq,gl)=>{
        var kA = at()
          , BA = qe()
          , HA = kA(BA, "Promise");
        gl.exports = HA
    }
    );
    var yl = f((Fq,El)=>{
        var WA = at()
          , zA = qe()
          , KA = WA(zA, "Set");
        El.exports = KA
    }
    );
    var Ci = f((qq,vl)=>{
        var jA = at()
          , YA = qe()
          , $A = jA(YA, "WeakMap");
        vl.exports = $A
    }
    );
    var Zn = f((Gq,Sl)=>{
        var Pi = pl()
          , Li = kn()
          , Ni = hl()
          , Di = yl()
          , Mi = Ci()
          , Al = ot()
          , Pt = Ii()
          , ml = "[object Map]"
          , QA = "[object Object]"
          , _l = "[object Promise]"
          , Il = "[object Set]"
          , Tl = "[object WeakMap]"
          , bl = "[object DataView]"
          , ZA = Pt(Pi)
          , JA = Pt(Li)
          , e0 = Pt(Ni)
          , t0 = Pt(Di)
          , n0 = Pt(Mi)
          , dt = Al;
        (Pi && dt(new Pi(new ArrayBuffer(1))) != bl || Li && dt(new Li) != ml || Ni && dt(Ni.resolve()) != _l || Di && dt(new Di) != Il || Mi && dt(new Mi) != Tl) && (dt = function(e) {
            var t = Al(e)
              , n = t == QA ? e.constructor : void 0
              , r = n ? Pt(n) : "";
            if (r)
                switch (r) {
                case ZA:
                    return bl;
                case JA:
                    return ml;
                case e0:
                    return _l;
                case t0:
                    return Il;
                case n0:
                    return Tl
                }
            return t
        }
        );
        Sl.exports = dt
    }
    );
    var Nl = f((Xq,Ll)=>{
        var Fi = Ti()
          , r0 = bi()
          , i0 = Tc()
          , o0 = fl()
          , Ol = Zn()
          , wl = ve()
          , xl = zn()
          , a0 = Yn()
          , s0 = 1
          , Rl = "[object Arguments]"
          , Cl = "[object Array]"
          , Jn = "[object Object]"
          , u0 = Object.prototype
          , Pl = u0.hasOwnProperty;
        function c0(e, t, n, r, i, o) {
            var a = wl(e)
              , s = wl(t)
              , u = a ? Cl : Ol(e)
              , l = s ? Cl : Ol(t);
            u = u == Rl ? Jn : u,
            l = l == Rl ? Jn : l;
            var h = u == Jn
              , p = l == Jn
              , d = u == l;
            if (d && xl(e)) {
                if (!xl(t))
                    return !1;
                a = !0,
                h = !1
            }
            if (d && !h)
                return o || (o = new Fi),
                a || a0(e) ? r0(e, t, n, r, i, o) : i0(e, t, u, n, r, i, o);
            if (!(n & s0)) {
                var E = h && Pl.call(e, "__wrapped__")
                  , v = p && Pl.call(t, "__wrapped__");
                if (E || v) {
                    var _ = E ? e.value() : e
                      , A = v ? t.value() : t;
                    return o || (o = new Fi),
                    i(_, A, n, r, o)
                }
            }
            return d ? (o || (o = new Fi),
            o0(e, t, n, r, i, o)) : !1
        }
        Ll.exports = c0
    }
    );
    var qi = f((Uq,Fl)=>{
        var l0 = Nl()
          , Dl = Je();
        function Ml(e, t, n, r, i) {
            return e === t ? !0 : e == null || t == null || !Dl(e) && !Dl(t) ? e !== e && t !== t : l0(e, t, n, r, Ml, i)
        }
        Fl.exports = Ml
    }
    );
    var Gl = f((Vq,ql)=>{
        var f0 = Ti()
          , d0 = qi()
          , p0 = 1
          , g0 = 2;
        function h0(e, t, n, r) {
            var i = n.length
              , o = i
              , a = !r;
            if (e == null)
                return !o;
            for (e = Object(e); i--; ) {
                var s = n[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                    return !1
            }
            for (; ++i < o; ) {
                s = n[i];
                var u = s[0]
                  , l = e[u]
                  , h = s[1];
                if (a && s[2]) {
                    if (l === void 0 && !(u in e))
                        return !1
                } else {
                    var p = new f0;
                    if (r)
                        var d = r(l, h, u, e, t, p);
                    if (!(d === void 0 ? d0(h, l, p0 | g0, r, p) : d))
                        return !1
                }
            }
            return !0
        }
        ql.exports = h0
    }
    );
    var Gi = f((kq,Xl)=>{
        var E0 = Ye();
        function y0(e) {
            return e === e && !E0(e)
        }
        Xl.exports = y0
    }
    );
    var Vl = f((Bq,Ul)=>{
        var v0 = Gi()
          , m0 = un();
        function _0(e) {
            for (var t = m0(e), n = t.length; n--; ) {
                var r = t[n]
                  , i = e[r];
                t[n] = [r, i, v0(i)]
            }
            return t
        }
        Ul.exports = _0
    }
    );
    var Xi = f((Hq,kl)=>{
        function I0(e, t) {
            return function(n) {
                return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n))
            }
        }
        kl.exports = I0
    }
    );
    var Hl = f((Wq,Bl)=>{
        var T0 = Gl()
          , b0 = Vl()
          , A0 = Xi();
        function S0(e) {
            var t = b0(e);
            return t.length == 1 && t[0][2] ? A0(t[0][0], t[0][1]) : function(n) {
                return n === e || T0(n, e, t)
            }
        }
        Bl.exports = S0
    }
    );
    var cn = f((zq,Wl)=>{
        var O0 = ot()
          , w0 = Je()
          , x0 = "[object Symbol]";
        function R0(e) {
            return typeof e == "symbol" || w0(e) && O0(e) == x0
        }
        Wl.exports = R0
    }
    );
    var er = f((Kq,zl)=>{
        var C0 = ve()
          , P0 = cn()
          , L0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , N0 = /^\w*$/;
        function D0(e, t) {
            if (C0(e))
                return !1;
            var n = typeof e;
            return n == "number" || n == "symbol" || n == "boolean" || e == null || P0(e) ? !0 : N0.test(e) || !L0.test(e) || t != null && e in Object(t)
        }
        zl.exports = D0
    }
    );
    var Yl = f((jq,jl)=>{
        var Kl = Bn()
          , M0 = "Expected a function";
        function Ui(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError(M0);
            var n = function() {
                var r = arguments
                  , i = t ? t.apply(this, r) : r[0]
                  , o = n.cache;
                if (o.has(i))
                    return o.get(i);
                var a = e.apply(this, r);
                return n.cache = o.set(i, a) || o,
                a
            };
            return n.cache = new (Ui.Cache || Kl),
            n
        }
        Ui.Cache = Kl;
        jl.exports = Ui
    }
    );
    var Ql = f((Yq,$l)=>{
        var F0 = Yl()
          , q0 = 500;
        function G0(e) {
            var t = F0(e, function(r) {
                return n.size === q0 && n.clear(),
                r
            })
              , n = t.cache;
            return t
        }
        $l.exports = G0
    }
    );
    var Jl = f(($q,Zl)=>{
        var X0 = Ql()
          , U0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , V0 = /\\(\\)?/g
          , k0 = X0(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(U0, function(n, r, i, o) {
                t.push(i ? o.replace(V0, "$1") : r || n)
            }),
            t
        });
        Zl.exports = k0
    }
    );
    var Vi = f((Qq,ef)=>{
        function B0(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
                i[n] = t(e[n], n, e);
            return i
        }
        ef.exports = B0
    }
    );
    var sf = f((Zq,af)=>{
        var tf = It()
          , H0 = Vi()
          , W0 = ve()
          , z0 = cn()
          , K0 = 1 / 0
          , nf = tf ? tf.prototype : void 0
          , rf = nf ? nf.toString : void 0;
        function of(e) {
            if (typeof e == "string")
                return e;
            if (W0(e))
                return H0(e, of) + "";
            if (z0(e))
                return rf ? rf.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -K0 ? "-0" : t
        }
        af.exports = of
    }
    );
    var cf = f((Jq,uf)=>{
        var j0 = sf();
        function Y0(e) {
            return e == null ? "" : j0(e)
        }
        uf.exports = Y0
    }
    );
    var ln = f((e1,lf)=>{
        var $0 = ve()
          , Q0 = er()
          , Z0 = Jl()
          , J0 = cf();
        function eS(e, t) {
            return $0(e) ? e : Q0(e, t) ? [e] : Z0(J0(e))
        }
        lf.exports = eS
    }
    );
    var Lt = f((t1,ff)=>{
        var tS = cn()
          , nS = 1 / 0;
        function rS(e) {
            if (typeof e == "string" || tS(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -nS ? "-0" : t
        }
        ff.exports = rS
    }
    );
    var tr = f((n1,df)=>{
        var iS = ln()
          , oS = Lt();
        function aS(e, t) {
            t = iS(t, e);
            for (var n = 0, r = t.length; e != null && n < r; )
                e = e[oS(t[n++])];
            return n && n == r ? e : void 0
        }
        df.exports = aS
    }
    );
    var nr = f((r1,pf)=>{
        var sS = tr();
        function uS(e, t, n) {
            var r = e == null ? void 0 : sS(e, t);
            return r === void 0 ? n : r
        }
        pf.exports = uS
    }
    );
    var hf = f((i1,gf)=>{
        function cS(e, t) {
            return e != null && t in Object(e)
        }
        gf.exports = cS
    }
    );
    var yf = f((o1,Ef)=>{
        var lS = ln()
          , fS = rn()
          , dS = ve()
          , pS = Kn()
          , gS = jn()
          , hS = Lt();
        function ES(e, t, n) {
            t = lS(t, e);
            for (var r = -1, i = t.length, o = !1; ++r < i; ) {
                var a = hS(t[r]);
                if (!(o = e != null && n(e, a)))
                    break;
                e = e[a]
            }
            return o || ++r != i ? o : (i = e == null ? 0 : e.length,
            !!i && gS(i) && pS(a, i) && (dS(e) || fS(e)))
        }
        Ef.exports = ES
    }
    );
    var mf = f((a1,vf)=>{
        var yS = hf()
          , vS = yf();
        function mS(e, t) {
            return e != null && vS(e, t, yS)
        }
        vf.exports = mS
    }
    );
    var If = f((s1,_f)=>{
        var _S = qi()
          , IS = nr()
          , TS = mf()
          , bS = er()
          , AS = Gi()
          , SS = Xi()
          , OS = Lt()
          , wS = 1
          , xS = 2;
        function RS(e, t) {
            return bS(e) && AS(t) ? SS(OS(e), t) : function(n) {
                var r = IS(n, e);
                return r === void 0 && r === t ? TS(n, e) : _S(t, r, wS | xS)
            }
        }
        _f.exports = RS
    }
    );
    var rr = f((u1,Tf)=>{
        function CS(e) {
            return e
        }
        Tf.exports = CS
    }
    );
    var ki = f((c1,bf)=>{
        function PS(e) {
            return function(t) {
                return t?.[e]
            }
        }
        bf.exports = PS
    }
    );
    var Sf = f((l1,Af)=>{
        var LS = tr();
        function NS(e) {
            return function(t) {
                return LS(t, e)
            }
        }
        Af.exports = NS
    }
    );
    var wf = f((f1,Of)=>{
        var DS = ki()
          , MS = Sf()
          , FS = er()
          , qS = Lt();
        function GS(e) {
            return FS(e) ? DS(qS(e)) : MS(e)
        }
        Of.exports = GS
    }
    );
    var st = f((d1,xf)=>{
        var XS = Hl()
          , US = If()
          , VS = rr()
          , kS = ve()
          , BS = wf();
        function HS(e) {
            return typeof e == "function" ? e : e == null ? VS : typeof e == "object" ? kS(e) ? US(e[0], e[1]) : XS(e) : BS(e)
        }
        xf.exports = HS
    }
    );
    var Bi = f((p1,Rf)=>{
        var WS = st()
          , zS = ft()
          , KS = un();
        function jS(e) {
            return function(t, n, r) {
                var i = Object(t);
                if (!zS(t)) {
                    var o = WS(n, 3);
                    t = KS(t),
                    n = function(s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, n, r);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Rf.exports = jS
    }
    );
    var Hi = f((g1,Cf)=>{
        function YS(e, t, n, r) {
            for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
                if (t(e[o], o, e))
                    return o;
            return -1
        }
        Cf.exports = YS
    }
    );
    var Lf = f((h1,Pf)=>{
        var $S = /\s/;
        function QS(e) {
            for (var t = e.length; t-- && $S.test(e.charAt(t)); )
                ;
            return t
        }
        Pf.exports = QS
    }
    );
    var Df = f((E1,Nf)=>{
        var ZS = Lf()
          , JS = /^\s+/;
        function eO(e) {
            return e && e.slice(0, ZS(e) + 1).replace(JS, "")
        }
        Nf.exports = eO
    }
    );
    var ir = f((y1,qf)=>{
        var tO = Df()
          , Mf = Ye()
          , nO = cn()
          , Ff = 0 / 0
          , rO = /^[-+]0x[0-9a-f]+$/i
          , iO = /^0b[01]+$/i
          , oO = /^0o[0-7]+$/i
          , aO = parseInt;
        function sO(e) {
            if (typeof e == "number")
                return e;
            if (nO(e))
                return Ff;
            if (Mf(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Mf(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = tO(e);
            var n = iO.test(e);
            return n || oO.test(e) ? aO(e.slice(2), n ? 2 : 8) : rO.test(e) ? Ff : +e
        }
        qf.exports = sO
    }
    );
    var Uf = f((v1,Xf)=>{
        var uO = ir()
          , Gf = 1 / 0
          , cO = 17976931348623157e292;
        function lO(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = uO(e),
            e === Gf || e === -Gf) {
                var t = e < 0 ? -1 : 1;
                return t * cO
            }
            return e === e ? e : 0
        }
        Xf.exports = lO
    }
    );
    var Wi = f((m1,Vf)=>{
        var fO = Uf();
        function dO(e) {
            var t = fO(e)
              , n = t % 1;
            return t === t ? n ? t - n : t : 0
        }
        Vf.exports = dO
    }
    );
    var Bf = f((_1,kf)=>{
        var pO = Hi()
          , gO = st()
          , hO = Wi()
          , EO = Math.max;
        function yO(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r)
                return -1;
            var i = n == null ? 0 : hO(n);
            return i < 0 && (i = EO(r + i, 0)),
            pO(e, gO(t, 3), i)
        }
        kf.exports = yO
    }
    );
    var zi = f((I1,Hf)=>{
        var vO = Bi()
          , mO = Bf()
          , _O = vO(mO);
        Hf.exports = _O
    }
    );
    var Kf = {};
    Oe(Kf, {
        ELEMENT_MATCHES: ()=>IO,
        FLEX_PREFIXED: ()=>Ki,
        IS_BROWSER_ENV: ()=>Xe,
        TRANSFORM_PREFIXED: ()=>ut,
        TRANSFORM_STYLE_PREFIXED: ()=>ar,
        withBrowser: ()=>or
    });
    var zf, Xe, or, IO, Ki, ut, Wf, ar, sr = de(()=>{
        "use strict";
        zf = ae(zi()),
        Xe = typeof window < "u",
        or = (e,t)=>Xe ? e() : t,
        IO = or(()=>(0,
        zf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e=>e in Element.prototype)),
        Ki = or(()=>{
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , n = "";
            try {
                let {length: r} = t;
                for (let i = 0; i < r; i++) {
                    let o = t[i];
                    if (e.style.display = o,
                    e.style.display === o)
                        return o
                }
                return n
            } catch {
                return n
            }
        }
        , "flex"),
        ut = or(()=>{
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , n = "Transform"
                  , {length: r} = t;
                for (let i = 0; i < r; i++) {
                    let o = t[i] + n;
                    if (e.style[o] !== void 0)
                        return o
                }
            }
            return "transform"
        }
        , "transform"),
        Wf = ut.split("transform")[0],
        ar = Wf ? Wf + "TransformStyle" : "transformStyle"
    }
    );
    var ji = f((T1,Zf)=>{
        var TO = 4
          , bO = .001
          , AO = 1e-7
          , SO = 10
          , fn = 11
          , ur = 1 / (fn - 1)
          , OO = typeof Float32Array == "function";
        function jf(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function Yf(e, t) {
            return 3 * t - 6 * e
        }
        function $f(e) {
            return 3 * e
        }
        function cr(e, t, n) {
            return ((jf(t, n) * e + Yf(t, n)) * e + $f(t)) * e
        }
        function Qf(e, t, n) {
            return 3 * jf(t, n) * e * e + 2 * Yf(t, n) * e + $f(t)
        }
        function wO(e, t, n, r, i) {
            var o, a, s = 0;
            do
                a = t + (n - t) / 2,
                o = cr(a, r, i) - e,
                o > 0 ? n = a : t = a;
            while (Math.abs(o) > AO && ++s < SO);
            return a
        }
        function xO(e, t, n, r) {
            for (var i = 0; i < TO; ++i) {
                var o = Qf(t, n, r);
                if (o === 0)
                    return t;
                var a = cr(t, n, r) - e;
                t -= a / o
            }
            return t
        }
        Zf.exports = function(t, n, r, i) {
            if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var o = OO ? new Float32Array(fn) : new Array(fn);
            if (t !== n || r !== i)
                for (var a = 0; a < fn; ++a)
                    o[a] = cr(a * ur, t, r);
            function s(u) {
                for (var l = 0, h = 1, p = fn - 1; h !== p && o[h] <= u; ++h)
                    l += ur;
                --h;
                var d = (u - o[h]) / (o[h + 1] - o[h])
                  , E = l + d * ur
                  , v = Qf(E, t, r);
                return v >= bO ? xO(u, E, t, r) : v === 0 ? E : wO(u, l, l + ur, t, r)
            }
            return function(l) {
                return t === n && r === i ? l : l === 0 ? 0 : l === 1 ? 1 : cr(s(l), n, i)
            }
        }
    }
    );
    var pn = {};
    Oe(pn, {
        bounce: ()=>lw,
        bouncePast: ()=>fw,
        ease: ()=>RO,
        easeIn: ()=>CO,
        easeInOut: ()=>LO,
        easeOut: ()=>PO,
        inBack: ()=>tw,
        inCirc: ()=>QO,
        inCubic: ()=>FO,
        inElastic: ()=>iw,
        inExpo: ()=>jO,
        inOutBack: ()=>rw,
        inOutCirc: ()=>JO,
        inOutCubic: ()=>GO,
        inOutElastic: ()=>aw,
        inOutExpo: ()=>$O,
        inOutQuad: ()=>MO,
        inOutQuart: ()=>VO,
        inOutQuint: ()=>HO,
        inOutSine: ()=>KO,
        inQuad: ()=>NO,
        inQuart: ()=>XO,
        inQuint: ()=>kO,
        inSine: ()=>WO,
        outBack: ()=>nw,
        outBounce: ()=>ew,
        outCirc: ()=>ZO,
        outCubic: ()=>qO,
        outElastic: ()=>ow,
        outExpo: ()=>YO,
        outQuad: ()=>DO,
        outQuart: ()=>UO,
        outQuint: ()=>BO,
        outSine: ()=>zO,
        swingFrom: ()=>uw,
        swingFromTo: ()=>sw,
        swingTo: ()=>cw
    });
    function NO(e) {
        return Math.pow(e, 2)
    }
    function DO(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }
    function MO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }
    function FO(e) {
        return Math.pow(e, 3)
    }
    function qO(e) {
        return Math.pow(e - 1, 3) + 1
    }
    function GO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }
    function XO(e) {
        return Math.pow(e, 4)
    }
    function UO(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }
    function VO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }
    function kO(e) {
        return Math.pow(e, 5)
    }
    function BO(e) {
        return Math.pow(e - 1, 5) + 1
    }
    function HO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }
    function WO(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }
    function zO(e) {
        return Math.sin(e * (Math.PI / 2))
    }
    function KO(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }
    function jO(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }
    function YO(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }
    function $O(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }
    function QO(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }
    function ZO(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }
    function JO(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }
    function ew(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function tw(e) {
        let t = et;
        return e * e * ((t + 1) * e - t)
    }
    function nw(e) {
        let t = et;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function rw(e) {
        let t = et;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function iw(e) {
        let t = et
          , n = 0
          , r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3),
        r < 1 ? (r = 1,
        t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)))
    }
    function ow(e) {
        let t = et
          , n = 0
          , r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3),
        r < 1 ? (r = 1,
        t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
    }
    function aw(e) {
        let t = et
          , n = 0
          , r = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (n || (n = .3 * 1.5),
        r < 1 ? (r = 1,
        t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        e < 1 ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
    }
    function sw(e) {
        let t = et;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function uw(e) {
        let t = et;
        return e * e * ((t + 1) * e - t)
    }
    function cw(e) {
        let t = et;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function lw(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function fw(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var dn, et, RO, CO, PO, LO, Yi = de(()=>{
        "use strict";
        dn = ae(ji()),
        et = 1.70158,
        RO = (0,
        dn.default)(.25, .1, .25, 1),
        CO = (0,
        dn.default)(.42, 0, 1, 1),
        PO = (0,
        dn.default)(0, 0, .58, 1),
        LO = (0,
        dn.default)(.42, 0, .58, 1)
    }
    );
    var ed = {};
    Oe(ed, {
        applyEasing: ()=>pw,
        createBezierEasing: ()=>dw,
        optimizeFloat: ()=>gn
    });
    function gn(e, t=5, n=10) {
        let r = Math.pow(n, t)
          , i = Number(Math.round(e * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }
    function dw(e) {
        return (0,
        Jf.default)(...e)
    }
    function pw(e, t, n) {
        return t === 0 ? 0 : t === 1 ? 1 : gn(n ? t > 0 ? n(t) : t : t > 0 && e && pn[e] ? pn[e](t) : t)
    }
    var Jf, $i = de(()=>{
        "use strict";
        Yi();
        Jf = ae(ji())
    }
    );
    var rd = {};
    Oe(rd, {
        createElementState: ()=>nd,
        ixElements: ()=>ww,
        mergeActionState: ()=>Qi
    });
    function nd(e, t, n, r, i) {
        let o = n === gw ? (0,
        Nt.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0,
        Nt.mergeIn)(e, [r], {
            id: r,
            ref: t,
            refId: o,
            refType: n
        })
    }
    function Qi(e, t, n, r, i) {
        let o = Rw(i);
        return (0,
        Nt.mergeIn)(e, [t, Ow, n], r, o)
    }
    function Rw(e) {
        let {config: t} = e;
        return xw.reduce((n,r)=>{
            let i = r[0]
              , o = r[1]
              , a = t[i]
              , s = t[o];
            return a != null && s != null && (n[o] = s),
            n
        }
        , {})
    }
    var Nt, A1, gw, S1, hw, Ew, yw, vw, mw, _w, Iw, Tw, bw, Aw, Sw, td, Ow, ww, xw, id = de(()=>{
        "use strict";
        Nt = ae(At());
        we();
        ({HTML_ELEMENT: A1, PLAIN_OBJECT: gw, ABSTRACT_NODE: S1, CONFIG_X_VALUE: hw, CONFIG_Y_VALUE: Ew, CONFIG_Z_VALUE: yw, CONFIG_VALUE: vw, CONFIG_X_UNIT: mw, CONFIG_Y_UNIT: _w, CONFIG_Z_UNIT: Iw, CONFIG_UNIT: Tw} = me),
        {IX2_SESSION_STOPPED: bw, IX2_INSTANCE_ADDED: Aw, IX2_ELEMENT_STATE_CHANGED: Sw} = ye,
        td = {},
        Ow = "refState",
        ww = (e=td,t={})=>{
            switch (t.type) {
            case bw:
                return td;
            case Aw:
                {
                    let {elementId: n, element: r, origin: i, actionItem: o, refType: a} = t.payload
                      , {actionTypeId: s} = o
                      , u = e;
                    return (0,
                    Nt.getIn)(u, [n, r]) !== r && (u = nd(u, r, a, n, o)),
                    Qi(u, n, s, i, o)
                }
            case Sw:
                {
                    let {elementId: n, actionTypeId: r, current: i, actionItem: o} = t.payload;
                    return Qi(e, n, r, i, o)
                }
            default:
                return e
            }
        }
        ;
        xw = [[hw, mw], [Ew, _w], [yw, Iw], [vw, Tw]]
    }
    );
    var od = f(Zi=>{
        "use strict";
        Object.defineProperty(Zi, "__esModule", {
            value: !0
        });
        function Cw(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        Cw(Zi, {
            clearPlugin: function() {
                return qw
            },
            createPluginInstance: function() {
                return Mw
            },
            getPluginConfig: function() {
                return Pw
            },
            getPluginDestination: function() {
                return Dw
            },
            getPluginDuration: function() {
                return Lw
            },
            getPluginOrigin: function() {
                return Nw
            },
            renderPlugin: function() {
                return Fw
            }
        });
        var Pw = e=>e.value
          , Lw = (e,t)=>{
            if (t.config.duration !== "auto")
                return null;
            let n = parseFloat(e.getAttribute("data-duration"));
            return n > 0 ? n * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
          , Nw = e=>e || {
            value: 0
        }
          , Dw = e=>({
            value: e.value
        })
          , Mw = e=>{
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
          , Fw = (e,t,n)=>{
            if (!e)
                return;
            let r = t[n.actionTypeId].value / 100;
            e.goToFrame(e.frames * r)
        }
          , qw = e=>{
            window.Webflow.require("lottie").createInstance(e).stop()
        }
    }
    );
    var sd = f(Ji=>{
        "use strict";
        Object.defineProperty(Ji, "__esModule", {
            value: !0
        });
        function Gw(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        Gw(Ji, {
            clearPlugin: function() {
                return jw
            },
            createPluginInstance: function() {
                return zw
            },
            getPluginConfig: function() {
                return kw
            },
            getPluginDestination: function() {
                return Ww
            },
            getPluginDuration: function() {
                return Bw
            },
            getPluginOrigin: function() {
                return Hw
            },
            renderPlugin: function() {
                return Kw
            }
        });
        var Xw = e=>document.querySelector(`[data-w-id="${e}"]`)
          , Uw = ()=>window.Webflow.require("spline")
          , Vw = (e,t)=>e.filter(n=>!t.includes(n))
          , kw = (e,t)=>e.value[t]
          , Bw = ()=>null
          , ad = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , Hw = (e,t)=>{
            let n = t.config.value
              , r = Object.keys(n);
            if (e) {
                let o = Object.keys(e)
                  , a = Vw(r, o);
                return a.length ? a.reduce((u,l)=>(u[l] = ad[l],
                u), e) : e
            }
            return r.reduce((o,a)=>(o[a] = ad[a],
            o), {})
        }
          , Ww = e=>e.value
          , zw = (e,t)=>{
            let n = t?.config?.target?.pluginElement;
            return n ? Xw(n) : null
        }
          , Kw = (e,t,n)=>{
            let r = Uw()
              , i = r.getInstance(e)
              , o = n.config.target.objectId
              , a = s=>{
                if (!s)
                    throw new Error("Invalid spline app passed to renderSpline");
                let u = o && s.findObjectById(o);
                if (!u)
                    return;
                let {PLUGIN_SPLINE: l} = t;
                l.positionX != null && (u.position.x = l.positionX),
                l.positionY != null && (u.position.y = l.positionY),
                l.positionZ != null && (u.position.z = l.positionZ),
                l.rotationX != null && (u.rotation.x = l.rotationX),
                l.rotationY != null && (u.rotation.y = l.rotationY),
                l.rotationZ != null && (u.rotation.z = l.rotationZ),
                l.scaleX != null && (u.scale.x = l.scaleX),
                l.scaleY != null && (u.scale.y = l.scaleY),
                l.scaleZ != null && (u.scale.z = l.scaleZ)
            }
            ;
            i ? a(i.spline) : r.setLoadHandler(e, a)
        }
          , jw = ()=>null
    }
    );
    var ud = f(no=>{
        "use strict";
        Object.defineProperty(no, "__esModule", {
            value: !0
        });
        function Yw(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        Yw(no, {
            clearPlugin: function() {
                return ix
            },
            createPluginInstance: function() {
                return nx
            },
            getPluginConfig: function() {
                return Zw
            },
            getPluginDestination: function() {
                return tx
            },
            getPluginDuration: function() {
                return Jw
            },
            getPluginOrigin: function() {
                return ex
            },
            renderPlugin: function() {
                return rx
            }
        });
        var eo = "--wf-rive-fit"
          , to = "--wf-rive-alignment"
          , $w = e=>document.querySelector(`[data-w-id="${e}"]`)
          , Qw = ()=>window.Webflow.require("rive")
          , Zw = (e,t)=>e.value.inputs[t]
          , Jw = ()=>null
          , ex = (e,t)=>{
            if (e)
                return e;
            let n = {}
              , {inputs: r={}} = t.config.value;
            for (let i in r)
                r[i] == null && (n[i] = 0);
            return n
        }
          , tx = e=>e.value.inputs ?? {}
          , nx = (e,t)=>{
            if ((t.config?.target?.selectorGuids || []).length > 0)
                return e;
            let r = t?.config?.target?.pluginElement;
            return r ? $w(r) : null
        }
          , rx = (e,{PLUGIN_RIVE: t},n)=>{
            let r = Qw()
              , i = r.getInstance(e)
              , o = r.rive.StateMachineInputType
              , {name: a, inputs: s={}} = n.config.value || {};
            function u(l) {
                if (l.loaded)
                    h();
                else {
                    let p = ()=>{
                        h(),
                        l?.off("load", p)
                    }
                    ;
                    l?.on("load", p)
                }
                function h() {
                    let p = l.stateMachineInputs(a);
                    if (p != null) {
                        if (l.isPlaying || l.play(a, !1),
                        eo in s || to in s) {
                            let d = l.layout
                              , E = s[eo] ?? d.fit
                              , v = s[to] ?? d.alignment;
                            (E !== d.fit || v !== d.alignment) && (l.layout = d.copyWith({
                                fit: E,
                                alignment: v
                            }))
                        }
                        for (let d in s) {
                            if (d === eo || d === to)
                                continue;
                            let E = p.find(v=>v.name === d);
                            if (E != null)
                                switch (E.type) {
                                case o.Boolean:
                                    {
                                        if (s[d] != null) {
                                            let v = !!s[d];
                                            E.value = v
                                        }
                                        break
                                    }
                                case o.Number:
                                    {
                                        let v = t[d];
                                        v != null && (E.value = v);
                                        break
                                    }
                                case o.Trigger:
                                    {
                                        s[d] && E.fire();
                                        break
                                    }
                                }
                        }
                    }
                }
            }
            i?.rive ? u(i.rive) : r.setLoadHandler(e, u)
        }
          , ix = (e,t)=>null
    }
    );
    var io = f(ro=>{
        "use strict";
        Object.defineProperty(ro, "__esModule", {
            value: !0
        });
        Object.defineProperty(ro, "normalizeColor", {
            enumerable: !0,
            get: function() {
                return ox
            }
        });
        var cd = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };
        function ox(e) {
            let t, n, r, i = 1, o = e.replace(/\s/g, "").toLowerCase(), s = (typeof cd[o] == "string" ? cd[o].toLowerCase() : null) || o;
            if (s.startsWith("#")) {
                let u = s.substring(1);
                u.length === 3 || u.length === 4 ? (t = parseInt(u[0] + u[0], 16),
                n = parseInt(u[1] + u[1], 16),
                r = parseInt(u[2] + u[2], 16),
                u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255)) : (u.length === 6 || u.length === 8) && (t = parseInt(u.substring(0, 2), 16),
                n = parseInt(u.substring(2, 4), 16),
                r = parseInt(u.substring(4, 6), 16),
                u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255))
            } else if (s.startsWith("rgba")) {
                let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10),
                n = parseInt(u[1], 10),
                r = parseInt(u[2], 10),
                i = parseFloat(u[3])
            } else if (s.startsWith("rgb")) {
                let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10),
                n = parseInt(u[1], 10),
                r = parseInt(u[2], 10)
            } else if (s.startsWith("hsla")) {
                let u = s.match(/hsla\(([^)]+)\)/)[1].split(",")
                  , l = parseFloat(u[0])
                  , h = parseFloat(u[1].replace("%", "")) / 100
                  , p = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let d = (1 - Math.abs(2 * p - 1)) * h, E = d * (1 - Math.abs(l / 60 % 2 - 1)), v = p - d / 2, _, A, m;
                l >= 0 && l < 60 ? (_ = d,
                A = E,
                m = 0) : l >= 60 && l < 120 ? (_ = E,
                A = d,
                m = 0) : l >= 120 && l < 180 ? (_ = 0,
                A = d,
                m = E) : l >= 180 && l < 240 ? (_ = 0,
                A = E,
                m = d) : l >= 240 && l < 300 ? (_ = E,
                A = 0,
                m = d) : (_ = d,
                A = 0,
                m = E),
                t = Math.round((_ + v) * 255),
                n = Math.round((A + v) * 255),
                r = Math.round((m + v) * 255)
            } else if (s.startsWith("hsl")) {
                let u = s.match(/hsl\(([^)]+)\)/)[1].split(","), l = parseFloat(u[0]), h = parseFloat(u[1].replace("%", "")) / 100, p = parseFloat(u[2].replace("%", "")) / 100, d = (1 - Math.abs(2 * p - 1)) * h, E = d * (1 - Math.abs(l / 60 % 2 - 1)), v = p - d / 2, _, A, m;
                l >= 0 && l < 60 ? (_ = d,
                A = E,
                m = 0) : l >= 60 && l < 120 ? (_ = E,
                A = d,
                m = 0) : l >= 120 && l < 180 ? (_ = 0,
                A = d,
                m = E) : l >= 180 && l < 240 ? (_ = 0,
                A = E,
                m = d) : l >= 240 && l < 300 ? (_ = E,
                A = 0,
                m = d) : (_ = d,
                A = 0,
                m = E),
                t = Math.round((_ + v) * 255),
                n = Math.round((A + v) * 255),
                r = Math.round((m + v) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
                throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: n,
                blue: r,
                alpha: i
            }
        }
    }
    );
    var ld = f(oo=>{
        "use strict";
        Object.defineProperty(oo, "__esModule", {
            value: !0
        });
        function ax(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        ax(oo, {
            clearPlugin: function() {
                return gx
            },
            createPluginInstance: function() {
                return dx
            },
            getPluginConfig: function() {
                return ux
            },
            getPluginDestination: function() {
                return fx
            },
            getPluginDuration: function() {
                return cx
            },
            getPluginOrigin: function() {
                return lx
            },
            renderPlugin: function() {
                return px
            }
        });
        var sx = io()
          , ux = (e,t)=>e.value[t]
          , cx = ()=>null
          , lx = (e,t)=>{
            if (e)
                return e;
            let n = t.config.value
              , r = t.config.target.objectId
              , i = getComputedStyle(document.documentElement).getPropertyValue(r);
            if (n.size != null)
                return {
                    size: parseInt(i, 10)
                };
            if (n.red != null && n.green != null && n.blue != null)
                return (0,
                sx.normalizeColor)(i)
        }
          , fx = e=>e.value
          , dx = ()=>null
          , px = (e,t,n)=>{
            let r = n.config.target.objectId, i = n.config.value.unit, {PLUGIN_VARIABLE: o} = t, {size: a, red: s, green: u, blue: l, alpha: h} = o, p;
            a != null && (p = a + i),
            s != null && l != null && u != null && h != null && (p = `rgba(${s}, ${u}, ${l}, ${h})`),
            p != null && document.documentElement.style.setProperty(r, p)
        }
          , gx = (e,t)=>{
            let n = t.config.target.objectId;
            document.documentElement.style.removeProperty(n)
        }
    }
    );
    var dd = f(ao=>{
        "use strict";
        Object.defineProperty(ao, "__esModule", {
            value: !0
        });
        Object.defineProperty(ao, "pluginMethodMap", {
            enumerable: !0,
            get: function() {
                return mx
            }
        });
        var lr = (we(),
        We(hs))
          , hx = fr(od())
          , Ex = fr(sd())
          , yx = fr(ud())
          , vx = fr(ld());
        function fd(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (fd = function(r) {
                return r ? n : t
            }
            )(e)
        }
        function fr(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var n = fd(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            return r.default = e,
            n && n.set(e, r),
            r
        }
        var mx = new Map([[lr.ActionTypeConsts.PLUGIN_LOTTIE, {
            ...hx
        }], [lr.ActionTypeConsts.PLUGIN_SPLINE, {
            ...Ex
        }], [lr.ActionTypeConsts.PLUGIN_RIVE, {
            ...yx
        }], [lr.ActionTypeConsts.PLUGIN_VARIABLE, {
            ...vx
        }]])
    }
    );
    var pd = {};
    Oe(pd, {
        clearPlugin: ()=>po,
        createPluginInstance: ()=>Ix,
        getPluginConfig: ()=>uo,
        getPluginDestination: ()=>lo,
        getPluginDuration: ()=>_x,
        getPluginOrigin: ()=>co,
        isPluginType: ()=>pt,
        renderPlugin: ()=>fo
    });
    function pt(e) {
        return so.pluginMethodMap.has(e)
    }
    var so, gt, uo, co, _x, lo, Ix, fo, po, go = de(()=>{
        "use strict";
        sr();
        so = ae(dd());
        gt = e=>t=>{
            if (!Xe)
                return ()=>null;
            let n = so.pluginMethodMap.get(t);
            if (!n)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let r = n[e];
            if (!r)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return r
        }
        ,
        uo = gt("getPluginConfig"),
        co = gt("getPluginOrigin"),
        _x = gt("getPluginDuration"),
        lo = gt("getPluginDestination"),
        Ix = gt("createPluginInstance"),
        fo = gt("renderPlugin"),
        po = gt("clearPlugin")
    }
    );
    var hd = f((N1,gd)=>{
        function Tx(e, t) {
            return e == null || e !== e ? t : e
        }
        gd.exports = Tx
    }
    );
    var yd = f((D1,Ed)=>{
        function bx(e, t, n, r) {
            var i = -1
              , o = e == null ? 0 : e.length;
            for (r && o && (n = e[++i]); ++i < o; )
                n = t(n, e[i], i, e);
            return n
        }
        Ed.exports = bx
    }
    );
    var md = f((M1,vd)=>{
        function Ax(e) {
            return function(t, n, r) {
                for (var i = -1, o = Object(t), a = r(t), s = a.length; s--; ) {
                    var u = a[e ? s : ++i];
                    if (n(o[u], u, o) === !1)
                        break
                }
                return t
            }
        }
        vd.exports = Ax
    }
    );
    var Id = f((F1,_d)=>{
        var Sx = md()
          , Ox = Sx();
        _d.exports = Ox
    }
    );
    var ho = f((q1,Td)=>{
        var wx = Id()
          , xx = un();
        function Rx(e, t) {
            return e && wx(e, t, xx)
        }
        Td.exports = Rx
    }
    );
    var Ad = f((G1,bd)=>{
        var Cx = ft();
        function Px(e, t) {
            return function(n, r) {
                if (n == null)
                    return n;
                if (!Cx(n))
                    return e(n, r);
                for (var i = n.length, o = t ? i : -1, a = Object(n); (t ? o-- : ++o < i) && r(a[o], o, a) !== !1; )
                    ;
                return n
            }
        }
        bd.exports = Px
    }
    );
    var Eo = f((X1,Sd)=>{
        var Lx = ho()
          , Nx = Ad()
          , Dx = Nx(Lx);
        Sd.exports = Dx
    }
    );
    var wd = f((U1,Od)=>{
        function Mx(e, t, n, r, i) {
            return i(e, function(o, a, s) {
                n = r ? (r = !1,
                o) : t(n, o, a, s)
            }),
            n
        }
        Od.exports = Mx
    }
    );
    var Rd = f((V1,xd)=>{
        var Fx = yd()
          , qx = Eo()
          , Gx = st()
          , Xx = wd()
          , Ux = ve();
        function Vx(e, t, n) {
            var r = Ux(e) ? Fx : Xx
              , i = arguments.length < 3;
            return r(e, Gx(t, 4), n, i, qx)
        }
        xd.exports = Vx
    }
    );
    var Pd = f((k1,Cd)=>{
        var kx = Hi()
          , Bx = st()
          , Hx = Wi()
          , Wx = Math.max
          , zx = Math.min;
        function Kx(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r)
                return -1;
            var i = r - 1;
            return n !== void 0 && (i = Hx(n),
            i = n < 0 ? Wx(r + i, 0) : zx(i, r - 1)),
            kx(e, Bx(t, 3), i, !0)
        }
        Cd.exports = Kx
    }
    );
    var Nd = f((B1,Ld)=>{
        var jx = Bi()
          , Yx = Pd()
          , $x = jx(Yx);
        Ld.exports = $x
    }
    );
    function Dd(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }
    function Qx(e, t) {
        if (Dd(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        let n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (let i = 0; i < n.length; i++)
            if (!Object.hasOwn(t, n[i]) || !Dd(e[n[i]], t[n[i]]))
                return !1;
        return !0
    }
    var yo, Md = de(()=>{
        "use strict";
        yo = Qx
    }
    );
    var Jd = {};
    Oe(Jd, {
        cleanupHTMLElement: ()=>jR,
        clearAllStyles: ()=>KR,
        clearObjectCache: ()=>gR,
        getActionListProgress: ()=>$R,
        getAffectedElements: ()=>To,
        getComputedStyle: ()=>TR,
        getDestinationValues: ()=>RR,
        getElementId: ()=>vR,
        getInstanceId: ()=>ER,
        getInstanceOrigin: ()=>SR,
        getItemConfigByKey: ()=>xR,
        getMaxDurationItemIndex: ()=>Zd,
        getNamespacedParameterId: ()=>JR,
        getRenderType: ()=>Yd,
        getStyleProp: ()=>CR,
        mediaQueriesEqual: ()=>tC,
        observeStore: ()=>IR,
        reduceListToGroup: ()=>QR,
        reifyState: ()=>mR,
        renderHTMLElement: ()=>PR,
        shallowEqual: ()=>yo,
        shouldAllowMediaQuery: ()=>eC,
        shouldNamespaceEventParameter: ()=>ZR,
        stringifyTarget: ()=>nC
    });
    function gR() {
        dr.clear()
    }
    function ER() {
        return "i" + hR++
    }
    function vR(e, t) {
        for (let n in e) {
            let r = e[n];
            if (r && r.ref === t)
                return r.id
        }
        return "e" + yR++
    }
    function mR({events: e, actionLists: t, site: n}={}) {
        let r = (0,
        Er.default)(e, (a,s)=>{
            let {eventTypeId: u} = s;
            return a[u] || (a[u] = {}),
            a[u][s.id] = s,
            a
        }
        , {})
          , i = n && n.mediaQueries
          , o = [];
        return i ? o = i.map(a=>a.key) : (i = [],
        console.warn("IX2 missing mediaQueries in site data")),
        {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: r,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }
    function IR({store: e, select: t, onChange: n, comparator: r=_R}) {
        let {getState: i, subscribe: o} = e
          , a = o(u)
          , s = t(i());
        function u() {
            let l = t(i());
            if (l == null) {
                a();
                return
            }
            r(l, s) || (s = l,
            n(s, e))
        }
        return a
    }
    function Gd(e) {
        let t = typeof e;
        if (t === "string")
            return {
                id: e
            };
        if (e != null && t === "object") {
            let {id: n, objectId: r, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s} = e;
            return {
                id: n,
                objectId: r,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }
    function To({config: e, event: t, eventTarget: n, elementRoot: r, elementApi: i}) {
        if (!i)
            throw new Error("IX2 missing elementApi");
        let {targets: o} = e;
        if (Array.isArray(o) && o.length > 0)
            return o.reduce((D,b)=>D.concat(To({
                config: {
                    target: b
                },
                event: t,
                eventTarget: n,
                elementRoot: r,
                elementApi: i
            })), []);
        let {getValidDocument: a, getQuerySelector: s, queryDocument: u, getChildElements: l, getSiblingElements: h, matchSelector: p, elementContains: d, isSiblingNode: E} = i
          , {target: v} = e;
        if (!v)
            return [];
        let {id: _, objectId: A, selector: m, selectorGuids: x, appliesTo: w, useEventTarget: P} = Gd(v);
        if (A)
            return [dr.has(A) ? dr.get(A) : dr.set(A, {}).get(A)];
        if (w === hi.PAGE) {
            let D = a(_);
            return D ? [D] : []
        }
        let C = (t?.action?.config?.affectedElements ?? {})[_ || m] || {}, U = !!(C.id || C.selector), B, K, Y, Q = t && s(Gd(t.target));
        if (U ? (B = C.limitAffectedElements,
        K = Q,
        Y = s(C)) : K = Y = s({
            id: _,
            selector: m,
            selectorGuids: x
        }),
        t && P) {
            let D = n && (Y || P === !0) ? [n] : u(Q);
            if (Y) {
                if (P === fR)
                    return u(Y).filter(b=>D.some(N=>d(b, N)));
                if (P === Fd)
                    return u(Y).filter(b=>D.some(N=>d(N, b)));
                if (P === qd)
                    return u(Y).filter(b=>D.some(N=>E(N, b)))
            }
            return D
        }
        return K == null || Y == null ? [] : Xe && r ? u(Y).filter(D=>r.contains(D)) : B === Fd ? u(K, Y) : B === lR ? l(u(K)).filter(p(Y)) : B === qd ? h(u(K)).filter(p(Y)) : u(Y)
    }
    function TR({element: e, actionItem: t}) {
        if (!Xe)
            return {};
        let {actionTypeId: n} = t;
        switch (n) {
        case Gt:
        case Xt:
        case Ut:
        case Vt:
        case vr:
            return window.getComputedStyle(e);
        default:
            return {}
        }
    }
    function SR(e, t={}, n={}, r, i) {
        let {getStyle: o} = i
          , {actionTypeId: a} = r;
        if (pt(a))
            return co(a)(t[a], r);
        switch (r.actionTypeId) {
        case Mt:
        case Ft:
        case qt:
        case vn:
            return t[r.actionTypeId] || bo[r.actionTypeId];
        case mn:
            return bR(t[r.actionTypeId], r.config.filters);
        case _n:
            return AR(t[r.actionTypeId], r.config.fontVariations);
        case zd:
            return {
                value: (0,
                tt.default)(parseFloat(o(e, gr)), 1)
            };
        case Gt:
            {
                let s = o(e, $e), u = o(e, Qe), l, h;
                return r.config.widthUnit === ct ? l = Xd.test(s) ? parseFloat(s) : parseFloat(n.width) : l = (0,
                tt.default)(parseFloat(s), parseFloat(n.width)),
                r.config.heightUnit === ct ? h = Xd.test(u) ? parseFloat(u) : parseFloat(n.height) : h = (0,
                tt.default)(parseFloat(u), parseFloat(n.height)),
                {
                    widthValue: l,
                    heightValue: h
                }
            }
        case Xt:
        case Ut:
        case Vt:
            return HR({
                element: e,
                actionTypeId: r.actionTypeId,
                computedStyle: n,
                getStyle: o
            });
        case vr:
            return {
                value: (0,
                tt.default)(o(e, hr), n.display)
            };
        case pR:
            return t[r.actionTypeId] || {
                value: 0
            };
        default:
            return
        }
    }
    function RR({element: e, actionItem: t, elementApi: n}) {
        if (pt(t.actionTypeId))
            return lo(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
        case Mt:
        case Ft:
        case qt:
        case vn:
            {
                let {xValue: r, yValue: i, zValue: o} = t.config;
                return {
                    xValue: r,
                    yValue: i,
                    zValue: o
                }
            }
        case Gt:
            {
                let {getStyle: r, setStyle: i, getProperty: o} = n
                  , {widthUnit: a, heightUnit: s} = t.config
                  , {widthValue: u, heightValue: l} = t.config;
                if (!Xe)
                    return {
                        widthValue: u,
                        heightValue: l
                    };
                if (a === ct) {
                    let h = r(e, $e);
                    i(e, $e, ""),
                    u = o(e, "offsetWidth"),
                    i(e, $e, h)
                }
                if (s === ct) {
                    let h = r(e, Qe);
                    i(e, Qe, ""),
                    l = o(e, "offsetHeight"),
                    i(e, Qe, h)
                }
                return {
                    widthValue: u,
                    heightValue: l
                }
            }
        case Xt:
        case Ut:
        case Vt:
            {
                let {rValue: r, gValue: i, bValue: o, aValue: a, globalSwatchId: s} = t.config;
                if (s && s.startsWith("--")) {
                    let {getStyle: u} = n
                      , l = u(e, s)
                      , h = (0,
                    kd.normalizeColor)(l);
                    return {
                        rValue: h.red,
                        gValue: h.green,
                        bValue: h.blue,
                        aValue: h.alpha
                    }
                }
                return {
                    rValue: r,
                    gValue: i,
                    bValue: o,
                    aValue: a
                }
            }
        case mn:
            return t.config.filters.reduce(OR, {});
        case _n:
            return t.config.fontVariations.reduce(wR, {});
        default:
            {
                let {value: r} = t.config;
                return {
                    value: r
                }
            }
        }
    }
    function Yd(e) {
        if (/^TRANSFORM_/.test(e))
            return Hd;
        if (/^STYLE_/.test(e))
            return _o;
        if (/^GENERAL_/.test(e))
            return mo;
        if (/^PLUGIN_/.test(e))
            return Wd
    }
    function CR(e, t) {
        return e === _o ? t.replace("STYLE_", "").toLowerCase() : null
    }
    function PR(e, t, n, r, i, o, a, s, u) {
        switch (s) {
        case Hd:
            return FR(e, t, n, i, a);
        case _o:
            return WR(e, t, n, i, o, a);
        case mo:
            return zR(e, i, a);
        case Wd:
            {
                let {actionTypeId: l} = i;
                if (pt(l))
                    return fo(l)(u, t, i)
            }
        }
    }
    function FR(e, t, n, r, i) {
        let o = MR.map(s=>{
            let u = bo[s]
              , {xValue: l=u.xValue, yValue: h=u.yValue, zValue: p=u.zValue, xUnit: d="", yUnit: E="", zUnit: v=""} = t[s] || {};
            switch (s) {
            case Mt:
                return `${eR}(${l}${d}, ${h}${E}, ${p}${v})`;
            case Ft:
                return `${tR}(${l}${d}, ${h}${E}, ${p}${v})`;
            case qt:
                return `${nR}(${l}${d}) ${rR}(${h}${E}) ${iR}(${p}${v})`;
            case vn:
                return `${oR}(${l}${d}, ${h}${E})`;
            default:
                return ""
            }
        }
        ).join(" ")
          , {setStyle: a} = i;
        ht(e, ut, i),
        a(e, ut, o),
        XR(r, n) && a(e, ar, aR)
    }
    function qR(e, t, n, r) {
        let i = (0,
        Er.default)(t, (a,s,u)=>`${a} ${u}(${s}${DR(u, n)})`, "")
          , {setStyle: o} = r;
        ht(e, hn, r),
        o(e, hn, i)
    }
    function GR(e, t, n, r) {
        let i = (0,
        Er.default)(t, (a,s,u)=>(a.push(`"${u}" ${s}`),
        a), []).join(", ")
          , {setStyle: o} = r;
        ht(e, En, r),
        o(e, En, i)
    }
    function XR({actionTypeId: e}, {xValue: t, yValue: n, zValue: r}) {
        return e === Mt && r !== void 0 || e === Ft && r !== void 0 || e === qt && (t !== void 0 || n !== void 0)
    }
    function BR(e, t) {
        let n = e.exec(t);
        return n ? n[1] : ""
    }
    function HR({element: e, actionTypeId: t, computedStyle: n, getStyle: r}) {
        let i = Io[t]
          , o = r(e, i)
          , a = VR.test(o) ? o : n[i]
          , s = BR(kR, a).split(yn);
        return {
            rValue: (0,
            tt.default)(parseInt(s[0], 10), 255),
            gValue: (0,
            tt.default)(parseInt(s[1], 10), 255),
            bValue: (0,
            tt.default)(parseInt(s[2], 10), 255),
            aValue: (0,
            tt.default)(parseFloat(s[3]), 1)
        }
    }
    function WR(e, t, n, r, i, o) {
        let {setStyle: a} = o;
        switch (r.actionTypeId) {
        case Gt:
            {
                let {widthUnit: s="", heightUnit: u=""} = r.config
                  , {widthValue: l, heightValue: h} = n;
                l !== void 0 && (s === ct && (s = "px"),
                ht(e, $e, o),
                a(e, $e, l + s)),
                h !== void 0 && (u === ct && (u = "px"),
                ht(e, Qe, o),
                a(e, Qe, h + u));
                break
            }
        case mn:
            {
                qR(e, n, r.config, o);
                break
            }
        case _n:
            {
                GR(e, n, r.config, o);
                break
            }
        case Xt:
        case Ut:
        case Vt:
            {
                let s = Io[r.actionTypeId]
                  , u = Math.round(n.rValue)
                  , l = Math.round(n.gValue)
                  , h = Math.round(n.bValue)
                  , p = n.aValue;
                ht(e, s, o),
                a(e, s, p >= 1 ? `rgb(${u},${l},${h})` : `rgba(${u},${l},${h},${p})`);
                break
            }
        default:
            {
                let {unit: s=""} = r.config;
                ht(e, i, o),
                a(e, i, n.value + s);
                break
            }
        }
    }
    function zR(e, t, n) {
        let {setStyle: r} = n;
        switch (t.actionTypeId) {
        case vr:
            {
                let {value: i} = t.config;
                i === sR && Xe ? r(e, hr, Ki) : r(e, hr, i);
                return
            }
        }
    }
    function ht(e, t, n) {
        if (!Xe)
            return;
        let r = jd[t];
        if (!r)
            return;
        let {getStyle: i, setStyle: o} = n
          , a = i(e, Dt);
        if (!a) {
            o(e, Dt, r);
            return
        }
        let s = a.split(yn).map(Kd);
        s.indexOf(r) === -1 && o(e, Dt, s.concat(r).join(yn))
    }
    function $d(e, t, n) {
        if (!Xe)
            return;
        let r = jd[t];
        if (!r)
            return;
        let {getStyle: i, setStyle: o} = n
          , a = i(e, Dt);
        !a || a.indexOf(r) === -1 || o(e, Dt, a.split(yn).map(Kd).filter(s=>s !== r).join(yn))
    }
    function KR({store: e, elementApi: t}) {
        let {ixData: n} = e.getState()
          , {events: r={}, actionLists: i={}} = n;
        Object.keys(r).forEach(o=>{
            let a = r[o]
              , {config: s} = a.action
              , {actionListId: u} = s
              , l = i[u];
            l && Ud({
                actionList: l,
                event: a,
                elementApi: t
            })
        }
        ),
        Object.keys(i).forEach(o=>{
            Ud({
                actionList: i[o],
                elementApi: t
            })
        }
        )
    }
    function Ud({actionList: e={}, event: t, elementApi: n}) {
        let {actionItemGroups: r, continuousParameterGroups: i} = e;
        r && r.forEach(o=>{
            Vd({
                actionGroup: o,
                event: t,
                elementApi: n
            })
        }
        ),
        i && i.forEach(o=>{
            let {continuousActionGroups: a} = o;
            a.forEach(s=>{
                Vd({
                    actionGroup: s,
                    event: t,
                    elementApi: n
                })
            }
            )
        }
        )
    }
    function Vd({actionGroup: e, event: t, elementApi: n}) {
        let {actionItems: r} = e;
        r.forEach(i=>{
            let {actionTypeId: o, config: a} = i, s;
            pt(o) ? s = u=>po(o)(u, i) : s = Qd({
                effect: YR,
                actionTypeId: o,
                elementApi: n
            }),
            To({
                config: a,
                event: t,
                elementApi: n
            }).forEach(s)
        }
        )
    }
    function jR(e, t, n) {
        let {setStyle: r, getStyle: i} = n
          , {actionTypeId: o} = t;
        if (o === Gt) {
            let {config: a} = t;
            a.widthUnit === ct && r(e, $e, ""),
            a.heightUnit === ct && r(e, Qe, "")
        }
        i(e, Dt) && Qd({
            effect: $d,
            actionTypeId: o,
            elementApi: n
        })(e)
    }
    function YR(e, t, n) {
        let {setStyle: r} = n;
        $d(e, t, n),
        r(e, t, ""),
        t === ut && r(e, ar, "")
    }
    function Zd(e) {
        let t = 0
          , n = 0;
        return e.forEach((r,i)=>{
            let {config: o} = r
              , a = o.delay + o.duration;
            a >= t && (t = a,
            n = i)
        }
        ),
        n
    }
    function $R(e, t) {
        let {actionItemGroups: n, useFirstGroupAsInitialState: r} = e
          , {actionItem: i, verboseTimeElapsed: o=0} = t
          , a = 0
          , s = 0;
        return n.forEach((u,l)=>{
            if (r && l === 0)
                return;
            let {actionItems: h} = u
              , p = h[Zd(h)]
              , {config: d, actionTypeId: E} = p;
            i.id === p.id && (s = a + o);
            let v = Yd(E) === mo ? 0 : d.duration;
            a += d.delay + v
        }
        ),
        a > 0 ? gn(s / a) : 0
    }
    function QR({actionList: e, actionItemId: t, rawData: n}) {
        let {actionItemGroups: r, continuousParameterGroups: i} = e
          , o = []
          , a = s=>(o.push((0,
        yr.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })),
        s.id === t);
        return r && r.some(({actionItems: s})=>s.some(a)),
        i && i.some(s=>{
            let {continuousActionGroups: u} = s;
            return u.some(({actionItems: l})=>l.some(a))
        }
        ),
        (0,
        yr.setIn)(n, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }
    function ZR(e, {basedOn: t}) {
        return e === Ge.SCROLLING_IN_VIEW && (t === je.ELEMENT || t == null) || e === Ge.MOUSE_MOVE && t === je.ELEMENT
    }
    function JR(e, t) {
        return e + dR + t
    }
    function eC(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }
    function tC(e, t) {
        return yo(e && e.sort(), t && t.sort())
    }
    function nC(e) {
        if (typeof e == "string")
            return e;
        if (e.pluginElement && e.objectId)
            return e.pluginElement + vo + e.objectId;
        if (e.objectId)
            return e.objectId;
        let {id: t="", selector: n="", useEventTarget: r=""} = e;
        return t + vo + n + vo + r
    }
    var tt, Er, pr, yr, kd, Zx, Jx, eR, tR, nR, rR, iR, oR, aR, sR, gr, hn, En, $e, Qe, Bd, uR, cR, Fd, lR, qd, fR, hr, Dt, ct, yn, dR, vo, Hd, mo, _o, Wd, Mt, Ft, qt, vn, zd, mn, _n, Gt, Xt, Ut, Vt, vr, pR, Kd, Io, jd, dr, hR, yR, _R, Xd, bR, AR, OR, wR, xR, bo, LR, NR, DR, MR, UR, VR, kR, Qd, ep = de(()=>{
        "use strict";
        tt = ae(hd()),
        Er = ae(Rd()),
        pr = ae(Nd()),
        yr = ae(At());
        we();
        Md();
        $i();
        kd = ae(io());
        go();
        sr();
        ({BACKGROUND: Zx, TRANSFORM: Jx, TRANSLATE_3D: eR, SCALE_3D: tR, ROTATE_X: nR, ROTATE_Y: rR, ROTATE_Z: iR, SKEW: oR, PRESERVE_3D: aR, FLEX: sR, OPACITY: gr, FILTER: hn, FONT_VARIATION_SETTINGS: En, WIDTH: $e, HEIGHT: Qe, BACKGROUND_COLOR: Bd, BORDER_COLOR: uR, COLOR: cR, CHILDREN: Fd, IMMEDIATE_CHILDREN: lR, SIBLINGS: qd, PARENT: fR, DISPLAY: hr, WILL_CHANGE: Dt, AUTO: ct, COMMA_DELIMITER: yn, COLON_DELIMITER: dR, BAR_DELIMITER: vo, RENDER_TRANSFORM: Hd, RENDER_GENERAL: mo, RENDER_STYLE: _o, RENDER_PLUGIN: Wd} = me),
        {TRANSFORM_MOVE: Mt, TRANSFORM_SCALE: Ft, TRANSFORM_ROTATE: qt, TRANSFORM_SKEW: vn, STYLE_OPACITY: zd, STYLE_FILTER: mn, STYLE_FONT_VARIATION: _n, STYLE_SIZE: Gt, STYLE_BACKGROUND_COLOR: Xt, STYLE_BORDER: Ut, STYLE_TEXT_COLOR: Vt, GENERAL_DISPLAY: vr, OBJECT_VALUE: pR} = Te,
        Kd = e=>e.trim(),
        Io = Object.freeze({
            [Xt]: Bd,
            [Ut]: uR,
            [Vt]: cR
        }),
        jd = Object.freeze({
            [ut]: Jx,
            [Bd]: Zx,
            [gr]: gr,
            [hn]: hn,
            [$e]: $e,
            [Qe]: Qe,
            [En]: En
        }),
        dr = new Map;
        hR = 1;
        yR = 1;
        _R = (e,t)=>e === t;
        Xd = /px/,
        bR = (e,t)=>t.reduce((n,r)=>(n[r.type] == null && (n[r.type] = LR[r.type]),
        n), e || {}),
        AR = (e,t)=>t.reduce((n,r)=>(n[r.type] == null && (n[r.type] = NR[r.type] || r.defaultValue || 0),
        n), e || {});
        OR = (e,t)=>(t && (e[t.type] = t.value || 0),
        e),
        wR = (e,t)=>(t && (e[t.type] = t.value || 0),
        e),
        xR = (e,t,n)=>{
            if (pt(e))
                return uo(e)(n, t);
            switch (e) {
            case mn:
                {
                    let r = (0,
                    pr.default)(n.filters, ({type: i})=>i === t);
                    return r ? r.value : 0
                }
            case _n:
                {
                    let r = (0,
                    pr.default)(n.fontVariations, ({type: i})=>i === t);
                    return r ? r.value : 0
                }
            default:
                return n[t]
            }
        }
        ;
        bo = {
            [Mt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Ft]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [qt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [vn]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        },
        LR = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        NR = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }),
        DR = (e,t)=>{
            let n = (0,
            pr.default)(t.filters, ({type: r})=>r === e);
            if (n && n.unit)
                return n.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
        ,
        MR = Object.keys(bo);
        UR = "\\(([^)]+)\\)",
        VR = /^rgb/,
        kR = RegExp(`rgba?${UR}`);
        Qd = ({effect: e, actionTypeId: t, elementApi: n})=>r=>{
            switch (t) {
            case Mt:
            case Ft:
            case qt:
            case vn:
                e(r, ut, n);
                break;
            case mn:
                e(r, hn, n);
                break;
            case _n:
                e(r, En, n);
                break;
            case zd:
                e(r, gr, n);
                break;
            case Gt:
                e(r, $e, n),
                e(r, Qe, n);
                break;
            case Xt:
            case Ut:
            case Vt:
                e(r, Io[t], n);
                break;
            case vr:
                e(r, hr, n);
                break
            }
        }
    }
    );
    var Et = f(Ao=>{
        "use strict";
        Object.defineProperty(Ao, "__esModule", {
            value: !0
        });
        function rC(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        rC(Ao, {
            IX2BrowserSupport: function() {
                return iC
            },
            IX2EasingUtils: function() {
                return aC
            },
            IX2Easings: function() {
                return oC
            },
            IX2ElementsReducer: function() {
                return sC
            },
            IX2VanillaPlugins: function() {
                return uC
            },
            IX2VanillaUtils: function() {
                return cC
            }
        });
        var iC = kt((sr(),
        We(Kf)))
          , oC = kt((Yi(),
        We(pn)))
          , aC = kt(($i(),
        We(ed)))
          , sC = kt((id(),
        We(rd)))
          , uC = kt((go(),
        We(pd)))
          , cC = kt((ep(),
        We(Jd)));
        function tp(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (tp = function(r) {
                return r ? n : t
            }
            )(e)
        }
        function kt(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var n = tp(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            return r.default = e,
            n && n.set(e, r),
            r
        }
    }
    );
    var _r, nt, lC, fC, dC, pC, gC, hC, mr, np, EC, yC, So, vC, mC, _C, IC, rp, ip = de(()=>{
        "use strict";
        we();
        _r = ae(Et()),
        nt = ae(At()),
        {IX2_RAW_DATA_IMPORTED: lC, IX2_SESSION_STOPPED: fC, IX2_INSTANCE_ADDED: dC, IX2_INSTANCE_STARTED: pC, IX2_INSTANCE_REMOVED: gC, IX2_ANIMATION_FRAME_CHANGED: hC} = ye,
        {optimizeFloat: mr, applyEasing: np, createBezierEasing: EC} = _r.IX2EasingUtils,
        {RENDER_GENERAL: yC} = me,
        {getItemConfigByKey: So, getRenderType: vC, getStyleProp: mC} = _r.IX2VanillaUtils,
        _C = (e,t)=>{
            let {position: n, parameterId: r, actionGroups: i, destinationKeys: o, smoothing: a, restingValue: s, actionTypeId: u, customEasingFn: l, skipMotion: h, skipToValue: p} = e
              , {parameters: d} = t.payload
              , E = Math.max(1 - a, .01)
              , v = d[r];
            v == null && (E = 1,
            v = s);
            let _ = Math.max(v, 0) || 0
              , A = mr(_ - n)
              , m = h ? p : mr(n + A * E)
              , x = m * 100;
            if (m === n && e.current)
                return e;
            let w, P, L, C;
            for (let B = 0, {length: K} = i; B < K; B++) {
                let {keyframe: Y, actionItems: Q} = i[B];
                if (B === 0 && (w = Q[0]),
                x >= Y) {
                    w = Q[0];
                    let D = i[B + 1]
                      , b = D && x !== Y;
                    P = b ? D.actionItems[0] : null,
                    b && (L = Y / 100,
                    C = (D.keyframe - Y) / 100)
                }
            }
            let U = {};
            if (w && !P)
                for (let B = 0, {length: K} = o; B < K; B++) {
                    let Y = o[B];
                    U[Y] = So(u, Y, w.config)
                }
            else if (w && P && L !== void 0 && C !== void 0) {
                let B = (m - L) / C
                  , K = w.config.easing
                  , Y = np(K, B, l);
                for (let Q = 0, {length: D} = o; Q < D; Q++) {
                    let b = o[Q]
                      , N = So(u, b, w.config)
                      , te = (So(u, b, P.config) - N) * Y + N;
                    U[b] = te
                }
            }
            return (0,
            nt.merge)(e, {
                position: m,
                current: U
            })
        }
        ,
        IC = (e,t)=>{
            let {active: n, origin: r, start: i, immediate: o, renderType: a, verbose: s, actionItem: u, destination: l, destinationKeys: h, pluginDuration: p, instanceDelay: d, customEasingFn: E, skipMotion: v} = e
              , _ = u.config.easing
              , {duration: A, delay: m} = u.config;
            p != null && (A = p),
            m = d ?? m,
            a === yC ? A = 0 : (o || v) && (A = m = 0);
            let {now: x} = t.payload;
            if (n && r) {
                let w = x - (i + m);
                if (s) {
                    let B = x - i
                      , K = A + m
                      , Y = mr(Math.min(Math.max(0, B / K), 1));
                    e = (0,
                    nt.set)(e, "verboseTimeElapsed", K * Y)
                }
                if (w < 0)
                    return e;
                let P = mr(Math.min(Math.max(0, w / A), 1))
                  , L = np(_, P, E)
                  , C = {}
                  , U = null;
                return h.length && (U = h.reduce((B,K)=>{
                    let Y = l[K]
                      , Q = parseFloat(r[K]) || 0
                      , b = (parseFloat(Y) - Q) * L + Q;
                    return B[K] = b,
                    B
                }
                , {})),
                C.current = U,
                C.position = P,
                P === 1 && (C.active = !1,
                C.complete = !0),
                (0,
                nt.merge)(e, C)
            }
            return e
        }
        ,
        rp = (e=Object.freeze({}),t)=>{
            switch (t.type) {
            case lC:
                return t.payload.ixInstances || Object.freeze({});
            case fC:
                return Object.freeze({});
            case dC:
                {
                    let {instanceId: n, elementId: r, actionItem: i, eventId: o, eventTarget: a, eventStateKey: s, actionListId: u, groupIndex: l, isCarrier: h, origin: p, destination: d, immediate: E, verbose: v, continuous: _, parameterId: A, actionGroups: m, smoothing: x, restingValue: w, pluginInstance: P, pluginDuration: L, instanceDelay: C, skipMotion: U, skipToValue: B} = t.payload
                      , {actionTypeId: K} = i
                      , Y = vC(K)
                      , Q = mC(Y, K)
                      , D = Object.keys(d).filter(N=>d[N] != null && typeof d[N] != "string")
                      , {easing: b} = i.config;
                    return (0,
                    nt.set)(e, n, {
                        id: n,
                        elementId: r,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: p,
                        destination: d,
                        destinationKeys: D,
                        immediate: E,
                        verbose: v,
                        current: null,
                        actionItem: i,
                        actionTypeId: K,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: u,
                        groupIndex: l,
                        renderType: Y,
                        isCarrier: h,
                        styleProp: Q,
                        continuous: _,
                        parameterId: A,
                        actionGroups: m,
                        smoothing: x,
                        restingValue: w,
                        pluginInstance: P,
                        pluginDuration: L,
                        instanceDelay: C,
                        skipMotion: U,
                        skipToValue: B,
                        customEasingFn: Array.isArray(b) && b.length === 4 ? EC(b) : void 0
                    })
                }
            case pC:
                {
                    let {instanceId: n, time: r} = t.payload;
                    return (0,
                    nt.mergeIn)(e, [n], {
                        active: !0,
                        complete: !1,
                        start: r
                    })
                }
            case gC:
                {
                    let {instanceId: n} = t.payload;
                    if (!e[n])
                        return e;
                    let r = {}
                      , i = Object.keys(e)
                      , {length: o} = i;
                    for (let a = 0; a < o; a++) {
                        let s = i[a];
                        s !== n && (r[s] = e[s])
                    }
                    return r
                }
            case hC:
                {
                    let n = e
                      , r = Object.keys(e)
                      , {length: i} = r;
                    for (let o = 0; o < i; o++) {
                        let a = r[o]
                          , s = e[a]
                          , u = s.continuous ? _C : IC;
                        n = (0,
                        nt.set)(n, a, u(s, t))
                    }
                    return n
                }
            default:
                return e
            }
        }
    }
    );
    var TC, bC, AC, op, ap = de(()=>{
        "use strict";
        we();
        ({IX2_RAW_DATA_IMPORTED: TC, IX2_SESSION_STOPPED: bC, IX2_PARAMETER_CHANGED: AC} = ye),
        op = (e={},t)=>{
            switch (t.type) {
            case TC:
                return t.payload.ixParameters || {};
            case bC:
                return {};
            case AC:
                {
                    let {key: n, value: r} = t.payload;
                    return e[n] = r,
                    e
                }
            default:
                return e
            }
        }
    }
    );
    var cp = {};
    Oe(cp, {
        default: ()=>OC
    });
    var sp, up, SC, OC, lp = de(()=>{
        "use strict";
        sp = ae(gi());
        ys();
        Gs();
        Vs();
        up = ae(Et());
        ip();
        ap();
        ({ixElements: SC} = up.IX2ElementsReducer),
        OC = (0,
        sp.combineReducers)({
            ixData: Es,
            ixRequest: qs,
            ixSession: Us,
            ixElements: SC,
            ixInstances: rp,
            ixParameters: op
        })
    }
    );
    var dp = f((sG,fp)=>{
        var wC = ot()
          , xC = ve()
          , RC = Je()
          , CC = "[object String]";
        function PC(e) {
            return typeof e == "string" || !xC(e) && RC(e) && wC(e) == CC
        }
        fp.exports = PC
    }
    );
    var gp = f((uG,pp)=>{
        var LC = ki()
          , NC = LC("length");
        pp.exports = NC
    }
    );
    var Ep = f((cG,hp)=>{
        var DC = "\\ud800-\\udfff"
          , MC = "\\u0300-\\u036f"
          , FC = "\\ufe20-\\ufe2f"
          , qC = "\\u20d0-\\u20ff"
          , GC = MC + FC + qC
          , XC = "\\ufe0e\\ufe0f"
          , UC = "\\u200d"
          , VC = RegExp("[" + UC + DC + GC + XC + "]");
        function kC(e) {
            return VC.test(e)
        }
        hp.exports = kC
    }
    );
    var Sp = f((lG,Ap)=>{
        var vp = "\\ud800-\\udfff"
          , BC = "\\u0300-\\u036f"
          , HC = "\\ufe20-\\ufe2f"
          , WC = "\\u20d0-\\u20ff"
          , zC = BC + HC + WC
          , KC = "\\ufe0e\\ufe0f"
          , jC = "[" + vp + "]"
          , Oo = "[" + zC + "]"
          , wo = "\\ud83c[\\udffb-\\udfff]"
          , YC = "(?:" + Oo + "|" + wo + ")"
          , mp = "[^" + vp + "]"
          , _p = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , Ip = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , $C = "\\u200d"
          , Tp = YC + "?"
          , bp = "[" + KC + "]?"
          , QC = "(?:" + $C + "(?:" + [mp, _p, Ip].join("|") + ")" + bp + Tp + ")*"
          , ZC = bp + Tp + QC
          , JC = "(?:" + [mp + Oo + "?", Oo, _p, Ip, jC].join("|") + ")"
          , yp = RegExp(wo + "(?=" + wo + ")|" + JC + ZC, "g");
        function eP(e) {
            for (var t = yp.lastIndex = 0; yp.test(e); )
                ++t;
            return t
        }
        Ap.exports = eP
    }
    );
    var wp = f((fG,Op)=>{
        var tP = gp()
          , nP = Ep()
          , rP = Sp();
        function iP(e) {
            return nP(e) ? rP(e) : tP(e)
        }
        Op.exports = iP
    }
    );
    var Rp = f((dG,xp)=>{
        var oP = Qn()
          , aP = Zn()
          , sP = ft()
          , uP = dp()
          , cP = wp()
          , lP = "[object Map]"
          , fP = "[object Set]";
        function dP(e) {
            if (e == null)
                return 0;
            if (sP(e))
                return uP(e) ? cP(e) : e.length;
            var t = aP(e);
            return t == lP || t == fP ? e.size : oP(e).length
        }
        xp.exports = dP
    }
    );
    var Pp = f((pG,Cp)=>{
        var pP = "Expected a function";
        function gP(e) {
            if (typeof e != "function")
                throw new TypeError(pP);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Cp.exports = gP
    }
    );
    var xo = f((gG,Lp)=>{
        var hP = at()
          , EP = function() {
            try {
                var e = hP(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        Lp.exports = EP
    }
    );
    var Ro = f((hG,Dp)=>{
        var Np = xo();
        function yP(e, t, n) {
            t == "__proto__" && Np ? Np(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        }
        Dp.exports = yP
    }
    );
    var Fp = f((EG,Mp)=>{
        var vP = Ro()
          , mP = Vn()
          , _P = Object.prototype
          , IP = _P.hasOwnProperty;
        function TP(e, t, n) {
            var r = e[t];
            (!(IP.call(e, t) && mP(r, n)) || n === void 0 && !(t in e)) && vP(e, t, n)
        }
        Mp.exports = TP
    }
    );
    var Xp = f((yG,Gp)=>{
        var bP = Fp()
          , AP = ln()
          , SP = Kn()
          , qp = Ye()
          , OP = Lt();
        function wP(e, t, n, r) {
            if (!qp(e))
                return e;
            t = AP(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
                var u = OP(t[i])
                  , l = n;
                if (u === "__proto__" || u === "constructor" || u === "prototype")
                    return e;
                if (i != a) {
                    var h = s[u];
                    l = r ? r(h, u, s) : void 0,
                    l === void 0 && (l = qp(h) ? h : SP(t[i + 1]) ? [] : {})
                }
                bP(s, u, l),
                s = s[u]
            }
            return e
        }
        Gp.exports = wP
    }
    );
    var Vp = f((vG,Up)=>{
        var xP = tr()
          , RP = Xp()
          , CP = ln();
        function PP(e, t, n) {
            for (var r = -1, i = t.length, o = {}; ++r < i; ) {
                var a = t[r]
                  , s = xP(e, a);
                n(s, a) && RP(o, CP(a, e), s)
            }
            return o
        }
        Up.exports = PP
    }
    );
    var Bp = f((mG,kp)=>{
        var LP = Wn()
          , NP = ti()
          , DP = wi()
          , MP = Oi()
          , FP = Object.getOwnPropertySymbols
          , qP = FP ? function(e) {
            for (var t = []; e; )
                LP(t, DP(e)),
                e = NP(e);
            return t
        }
        : MP;
        kp.exports = qP
    }
    );
    var Wp = f((_G,Hp)=>{
        function GP(e) {
            var t = [];
            if (e != null)
                for (var n in Object(e))
                    t.push(n);
            return t
        }
        Hp.exports = GP
    }
    );
    var Kp = f((IG,zp)=>{
        var XP = Ye()
          , UP = $n()
          , VP = Wp()
          , kP = Object.prototype
          , BP = kP.hasOwnProperty;
        function HP(e) {
            if (!XP(e))
                return VP(e);
            var t = UP(e)
              , n = [];
            for (var r in e)
                r == "constructor" && (t || !BP.call(e, r)) || n.push(r);
            return n
        }
        zp.exports = HP
    }
    );
    var Yp = f((TG,jp)=>{
        var WP = Ri()
          , zP = Kp()
          , KP = ft();
        function jP(e) {
            return KP(e) ? WP(e, !0) : zP(e)
        }
        jp.exports = jP
    }
    );
    var Qp = f((bG,$p)=>{
        var YP = Si()
          , $P = Bp()
          , QP = Yp();
        function ZP(e) {
            return YP(e, QP, $P)
        }
        $p.exports = ZP
    }
    );
    var Jp = f((AG,Zp)=>{
        var JP = Vi()
          , eL = st()
          , tL = Vp()
          , nL = Qp();
        function rL(e, t) {
            if (e == null)
                return {};
            var n = JP(nL(e), function(r) {
                return [r]
            });
            return t = eL(t),
            tL(e, n, function(r, i) {
                return t(r, i[0])
            })
        }
        Zp.exports = rL
    }
    );
    var tg = f((SG,eg)=>{
        var iL = st()
          , oL = Pp()
          , aL = Jp();
        function sL(e, t) {
            return aL(e, oL(iL(t)))
        }
        eg.exports = sL
    }
    );
    var rg = f((OG,ng)=>{
        var uL = Qn()
          , cL = Zn()
          , lL = rn()
          , fL = ve()
          , dL = ft()
          , pL = zn()
          , gL = $n()
          , hL = Yn()
          , EL = "[object Map]"
          , yL = "[object Set]"
          , vL = Object.prototype
          , mL = vL.hasOwnProperty;
        function _L(e) {
            if (e == null)
                return !0;
            if (dL(e) && (fL(e) || typeof e == "string" || typeof e.splice == "function" || pL(e) || hL(e) || lL(e)))
                return !e.length;
            var t = cL(e);
            if (t == EL || t == yL)
                return !e.size;
            if (gL(e))
                return !uL(e).length;
            for (var n in e)
                if (mL.call(e, n))
                    return !1;
            return !0
        }
        ng.exports = _L
    }
    );
    var og = f((wG,ig)=>{
        var IL = Ro()
          , TL = ho()
          , bL = st();
        function AL(e, t) {
            var n = {};
            return t = bL(t, 3),
            TL(e, function(r, i, o) {
                IL(n, i, t(r, i, o))
            }),
            n
        }
        ig.exports = AL
    }
    );
    var sg = f((xG,ag)=>{
        function SL(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
                ;
            return e
        }
        ag.exports = SL
    }
    );
    var cg = f((RG,ug)=>{
        var OL = rr();
        function wL(e) {
            return typeof e == "function" ? e : OL
        }
        ug.exports = wL
    }
    );
    var fg = f((CG,lg)=>{
        var xL = sg()
          , RL = Eo()
          , CL = cg()
          , PL = ve();
        function LL(e, t) {
            var n = PL(e) ? xL : RL;
            return n(e, CL(t))
        }
        lg.exports = LL
    }
    );
    var pg = f((PG,dg)=>{
        var NL = qe()
          , DL = function() {
            return NL.Date.now()
        };
        dg.exports = DL
    }
    );
    var Eg = f((LG,hg)=>{
        var ML = Ye()
          , Co = pg()
          , gg = ir()
          , FL = "Expected a function"
          , qL = Math.max
          , GL = Math.min;
        function XL(e, t, n) {
            var r, i, o, a, s, u, l = 0, h = !1, p = !1, d = !0;
            if (typeof e != "function")
                throw new TypeError(FL);
            t = gg(t) || 0,
            ML(n) && (h = !!n.leading,
            p = "maxWait"in n,
            o = p ? qL(gg(n.maxWait) || 0, t) : o,
            d = "trailing"in n ? !!n.trailing : d);
            function E(C) {
                var U = r
                  , B = i;
                return r = i = void 0,
                l = C,
                a = e.apply(B, U),
                a
            }
            function v(C) {
                return l = C,
                s = setTimeout(m, t),
                h ? E(C) : a
            }
            function _(C) {
                var U = C - u
                  , B = C - l
                  , K = t - U;
                return p ? GL(K, o - B) : K
            }
            function A(C) {
                var U = C - u
                  , B = C - l;
                return u === void 0 || U >= t || U < 0 || p && B >= o
            }
            function m() {
                var C = Co();
                if (A(C))
                    return x(C);
                s = setTimeout(m, _(C))
            }
            function x(C) {
                return s = void 0,
                d && r ? E(C) : (r = i = void 0,
                a)
            }
            function w() {
                s !== void 0 && clearTimeout(s),
                l = 0,
                r = u = i = s = void 0
            }
            function P() {
                return s === void 0 ? a : x(Co())
            }
            function L() {
                var C = Co()
                  , U = A(C);
                if (r = arguments,
                i = this,
                u = C,
                U) {
                    if (s === void 0)
                        return v(u);
                    if (p)
                        return clearTimeout(s),
                        s = setTimeout(m, t),
                        E(u)
                }
                return s === void 0 && (s = setTimeout(m, t)),
                a
            }
            return L.cancel = w,
            L.flush = P,
            L
        }
        hg.exports = XL
    }
    );
    var vg = f((NG,yg)=>{
        var UL = Eg()
          , VL = Ye()
          , kL = "Expected a function";
        function BL(e, t, n) {
            var r = !0
              , i = !0;
            if (typeof e != "function")
                throw new TypeError(kL);
            return VL(n) && (r = "leading"in n ? !!n.leading : r,
            i = "trailing"in n ? !!n.trailing : i),
            UL(e, t, {
                leading: r,
                maxWait: t,
                trailing: i
            })
        }
        yg.exports = BL
    }
    );
    var _g = {};
    Oe(_g, {
        actionListPlaybackChanged: ()=>Ht,
        animationFrameChanged: ()=>Tr,
        clearRequested: ()=>gN,
        elementStateChanged: ()=>Go,
        eventListenerAdded: ()=>Ir,
        eventStateChanged: ()=>Mo,
        instanceAdded: ()=>Fo,
        instanceRemoved: ()=>qo,
        instanceStarted: ()=>br,
        mediaQueriesDefined: ()=>Uo,
        parameterChanged: ()=>Bt,
        playbackRequested: ()=>dN,
        previewRequested: ()=>fN,
        rawDataImported: ()=>Po,
        sessionInitialized: ()=>Lo,
        sessionStarted: ()=>No,
        sessionStopped: ()=>Do,
        stopRequested: ()=>pN,
        testFrameRendered: ()=>hN,
        viewportWidthChanged: ()=>Xo
    });
    var mg, HL, WL, zL, KL, jL, YL, $L, QL, ZL, JL, eN, tN, nN, rN, iN, oN, aN, sN, uN, cN, lN, Po, Lo, No, Do, fN, dN, pN, gN, Ir, hN, Mo, Tr, Bt, Fo, br, qo, Go, Ht, Xo, Uo, Ar = de(()=>{
        "use strict";
        we();
        mg = ae(Et()),
        {IX2_RAW_DATA_IMPORTED: HL, IX2_SESSION_INITIALIZED: WL, IX2_SESSION_STARTED: zL, IX2_SESSION_STOPPED: KL, IX2_PREVIEW_REQUESTED: jL, IX2_PLAYBACK_REQUESTED: YL, IX2_STOP_REQUESTED: $L, IX2_CLEAR_REQUESTED: QL, IX2_EVENT_LISTENER_ADDED: ZL, IX2_TEST_FRAME_RENDERED: JL, IX2_EVENT_STATE_CHANGED: eN, IX2_ANIMATION_FRAME_CHANGED: tN, IX2_PARAMETER_CHANGED: nN, IX2_INSTANCE_ADDED: rN, IX2_INSTANCE_STARTED: iN, IX2_INSTANCE_REMOVED: oN, IX2_ELEMENT_STATE_CHANGED: aN, IX2_ACTION_LIST_PLAYBACK_CHANGED: sN, IX2_VIEWPORT_WIDTH_CHANGED: uN, IX2_MEDIA_QUERIES_DEFINED: cN} = ye,
        {reifyState: lN} = mg.IX2VanillaUtils,
        Po = e=>({
            type: HL,
            payload: {
                ...lN(e)
            }
        }),
        Lo = ({hasBoundaryNodes: e, reducedMotion: t})=>({
            type: WL,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }),
        No = ()=>({
            type: zL
        }),
        Do = ()=>({
            type: KL
        }),
        fN = ({rawData: e, defer: t})=>({
            type: jL,
            payload: {
                defer: t,
                rawData: e
            }
        }),
        dN = ({actionTypeId: e=Te.GENERAL_START_ACTION, actionListId: t, actionItemId: n, eventId: r, allowEvents: i, immediate: o, testManual: a, verbose: s, rawData: u})=>({
            type: YL,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: n,
                testManual: a,
                eventId: r,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: u
            }
        }),
        pN = e=>({
            type: $L,
            payload: {
                actionListId: e
            }
        }),
        gN = ()=>({
            type: QL
        }),
        Ir = (e,t)=>({
            type: ZL,
            payload: {
                target: e,
                listenerParams: t
            }
        }),
        hN = (e=1)=>({
            type: JL,
            payload: {
                step: e
            }
        }),
        Mo = (e,t)=>({
            type: eN,
            payload: {
                stateKey: e,
                newState: t
            }
        }),
        Tr = (e,t)=>({
            type: tN,
            payload: {
                now: e,
                parameters: t
            }
        }),
        Bt = (e,t)=>({
            type: nN,
            payload: {
                key: e,
                value: t
            }
        }),
        Fo = e=>({
            type: rN,
            payload: {
                ...e
            }
        }),
        br = (e,t)=>({
            type: iN,
            payload: {
                instanceId: e,
                time: t
            }
        }),
        qo = e=>({
            type: oN,
            payload: {
                instanceId: e
            }
        }),
        Go = (e,t,n,r)=>({
            type: aN,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: n,
                actionItem: r
            }
        }),
        Ht = ({actionListId: e, isPlaying: t})=>({
            type: sN,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }),
        Xo = ({width: e, mediaQueries: t})=>({
            type: uN,
            payload: {
                width: e,
                mediaQueries: t
            }
        }),
        Uo = ()=>({
            type: cN
        })
    }
    );
    var Ae = {};
    Oe(Ae, {
        elementContains: ()=>Bo,
        getChildElements: ()=>SN,
        getClosestElement: ()=>In,
        getProperty: ()=>_N,
        getQuerySelector: ()=>ko,
        getRefType: ()=>Ho,
        getSiblingElements: ()=>ON,
        getStyle: ()=>mN,
        getValidDocument: ()=>TN,
        isSiblingNode: ()=>AN,
        matchSelector: ()=>IN,
        queryDocument: ()=>bN,
        setStyle: ()=>vN
    });
    function vN(e, t, n) {
        e.style[t] = n
    }
    function mN(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }
    function _N(e, t) {
        return e[t]
    }
    function IN(e) {
        return t=>t[Vo](e)
    }
    function ko({id: e, selector: t}) {
        if (e) {
            let n = e;
            if (e.indexOf(Ig) !== -1) {
                let r = e.split(Ig)
                  , i = r[0];
                if (n = r[1],
                i !== document.documentElement.getAttribute(bg))
                    return null
            }
            return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`
        }
        return t
    }
    function TN(e) {
        return e == null || e === document.documentElement.getAttribute(bg) ? document : null
    }
    function bN(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }
    function Bo(e, t) {
        return e.contains(t)
    }
    function AN(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }
    function SN(e) {
        let t = [];
        for (let n = 0, {length: r} = e || []; n < r; n++) {
            let {children: i} = e[n]
              , {length: o} = i;
            if (o)
                for (let a = 0; a < o; a++)
                    t.push(i[a])
        }
        return t
    }
    function ON(e=[]) {
        let t = []
          , n = [];
        for (let r = 0, {length: i} = e; r < i; r++) {
            let {parentNode: o} = e[r];
            if (!o || !o.children || !o.children.length || n.indexOf(o) !== -1)
                continue;
            n.push(o);
            let a = o.firstElementChild;
            for (; a != null; )
                e.indexOf(a) === -1 && t.push(a),
                a = a.nextElementSibling
        }
        return t
    }
    function Ho(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? EN : yN : null
    }
    var Tg, Vo, Ig, EN, yN, bg, In, Ag = de(()=>{
        "use strict";
        Tg = ae(Et());
        we();
        ({ELEMENT_MATCHES: Vo} = Tg.IX2BrowserSupport),
        {IX2_ID_DELIMITER: Ig, HTML_ELEMENT: EN, PLAIN_OBJECT: yN, WF_PAGE: bg} = me;
        In = Element.prototype.closest ? (e,t)=>document.documentElement.contains(e) ? e.closest(t) : null : (e,t)=>{
            if (!document.documentElement.contains(e))
                return null;
            let n = e;
            do {
                if (n[Vo] && n[Vo](t))
                    return n;
                n = n.parentNode
            } while (n != null);
            return null
        }
    }
    );
    var Wo = f((FG,Og)=>{
        var wN = Ye()
          , Sg = Object.create
          , xN = function() {
            function e() {}
            return function(t) {
                if (!wN(t))
                    return {};
                if (Sg)
                    return Sg(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0,
                n
            }
        }();
        Og.exports = xN
    }
    );
    var Sr = f((qG,wg)=>{
        function RN() {}
        wg.exports = RN
    }
    );
    var wr = f((GG,xg)=>{
        var CN = Wo()
          , PN = Sr();
        function Or(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        Or.prototype = CN(PN.prototype);
        Or.prototype.constructor = Or;
        xg.exports = Or
    }
    );
    var Lg = f((XG,Pg)=>{
        var Rg = It()
          , LN = rn()
          , NN = ve()
          , Cg = Rg ? Rg.isConcatSpreadable : void 0;
        function DN(e) {
            return NN(e) || LN(e) || !!(Cg && e && e[Cg])
        }
        Pg.exports = DN
    }
    );
    var Mg = f((UG,Dg)=>{
        var MN = Wn()
          , FN = Lg();
        function Ng(e, t, n, r, i) {
            var o = -1
              , a = e.length;
            for (n || (n = FN),
            i || (i = []); ++o < a; ) {
                var s = e[o];
                t > 0 && n(s) ? t > 1 ? Ng(s, t - 1, n, r, i) : MN(i, s) : r || (i[i.length] = s)
            }
            return i
        }
        Dg.exports = Ng
    }
    );
    var qg = f((VG,Fg)=>{
        var qN = Mg();
        function GN(e) {
            var t = e == null ? 0 : e.length;
            return t ? qN(e, 1) : []
        }
        Fg.exports = GN
    }
    );
    var Xg = f((kG,Gg)=>{
        function XN(e, t, n) {
            switch (n.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }
        Gg.exports = XN
    }
    );
    var kg = f((BG,Vg)=>{
        var UN = Xg()
          , Ug = Math.max;
        function VN(e, t, n) {
            return t = Ug(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var r = arguments, i = -1, o = Ug(r.length - t, 0), a = Array(o); ++i < o; )
                    a[i] = r[t + i];
                i = -1;
                for (var s = Array(t + 1); ++i < t; )
                    s[i] = r[i];
                return s[t] = n(a),
                UN(e, this, s)
            }
        }
        Vg.exports = VN
    }
    );
    var Hg = f((HG,Bg)=>{
        function kN(e) {
            return function() {
                return e
            }
        }
        Bg.exports = kN
    }
    );
    var Kg = f((WG,zg)=>{
        var BN = Hg()
          , Wg = xo()
          , HN = rr()
          , WN = Wg ? function(e, t) {
            return Wg(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: BN(t),
                writable: !0
            })
        }
        : HN;
        zg.exports = WN
    }
    );
    var Yg = f((zG,jg)=>{
        var zN = 800
          , KN = 16
          , jN = Date.now;
        function YN(e) {
            var t = 0
              , n = 0;
            return function() {
                var r = jN()
                  , i = KN - (r - n);
                if (n = r,
                i > 0) {
                    if (++t >= zN)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        jg.exports = YN
    }
    );
    var Qg = f((KG,$g)=>{
        var $N = Kg()
          , QN = Yg()
          , ZN = QN($N);
        $g.exports = ZN
    }
    );
    var Jg = f((jG,Zg)=>{
        var JN = qg()
          , eD = kg()
          , tD = Qg();
        function nD(e) {
            return tD(eD(e, void 0, JN), e + "")
        }
        Zg.exports = nD
    }
    );
    var nh = f((YG,th)=>{
        var eh = Ci()
          , rD = eh && new eh;
        th.exports = rD
    }
    );
    var ih = f(($G,rh)=>{
        function iD() {}
        rh.exports = iD
    }
    );
    var zo = f((QG,ah)=>{
        var oh = nh()
          , oD = ih()
          , aD = oh ? function(e) {
            return oh.get(e)
        }
        : oD;
        ah.exports = aD
    }
    );
    var uh = f((ZG,sh)=>{
        var sD = {};
        sh.exports = sD
    }
    );
    var Ko = f((JG,lh)=>{
        var ch = uh()
          , uD = Object.prototype
          , cD = uD.hasOwnProperty;
        function lD(e) {
            for (var t = e.name + "", n = ch[t], r = cD.call(ch, t) ? n.length : 0; r--; ) {
                var i = n[r]
                  , o = i.func;
                if (o == null || o == e)
                    return i.name
            }
            return t
        }
        lh.exports = lD
    }
    );
    var Rr = f((eX,fh)=>{
        var fD = Wo()
          , dD = Sr()
          , pD = 4294967295;
        function xr(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = pD,
            this.__views__ = []
        }
        xr.prototype = fD(dD.prototype);
        xr.prototype.constructor = xr;
        fh.exports = xr
    }
    );
    var ph = f((tX,dh)=>{
        function gD(e, t) {
            var n = -1
              , r = e.length;
            for (t || (t = Array(r)); ++n < r; )
                t[n] = e[n];
            return t
        }
        dh.exports = gD
    }
    );
    var hh = f((nX,gh)=>{
        var hD = Rr()
          , ED = wr()
          , yD = ph();
        function vD(e) {
            if (e instanceof hD)
                return e.clone();
            var t = new ED(e.__wrapped__,e.__chain__);
            return t.__actions__ = yD(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        gh.exports = vD
    }
    );
    var vh = f((rX,yh)=>{
        var mD = Rr()
          , Eh = wr()
          , _D = Sr()
          , ID = ve()
          , TD = Je()
          , bD = hh()
          , AD = Object.prototype
          , SD = AD.hasOwnProperty;
        function Cr(e) {
            if (TD(e) && !ID(e) && !(e instanceof mD)) {
                if (e instanceof Eh)
                    return e;
                if (SD.call(e, "__wrapped__"))
                    return bD(e)
            }
            return new Eh(e)
        }
        Cr.prototype = _D.prototype;
        Cr.prototype.constructor = Cr;
        yh.exports = Cr
    }
    );
    var _h = f((iX,mh)=>{
        var OD = Rr()
          , wD = zo()
          , xD = Ko()
          , RD = vh();
        function CD(e) {
            var t = xD(e)
              , n = RD[t];
            if (typeof n != "function" || !(t in OD.prototype))
                return !1;
            if (e === n)
                return !0;
            var r = wD(n);
            return !!r && e === r[0]
        }
        mh.exports = CD
    }
    );
    var Ah = f((oX,bh)=>{
        var Ih = wr()
          , PD = Jg()
          , LD = zo()
          , jo = Ko()
          , ND = ve()
          , Th = _h()
          , DD = "Expected a function"
          , MD = 8
          , FD = 32
          , qD = 128
          , GD = 256;
        function XD(e) {
            return PD(function(t) {
                var n = t.length
                  , r = n
                  , i = Ih.prototype.thru;
                for (e && t.reverse(); r--; ) {
                    var o = t[r];
                    if (typeof o != "function")
                        throw new TypeError(DD);
                    if (i && !a && jo(o) == "wrapper")
                        var a = new Ih([],!0)
                }
                for (r = a ? r : n; ++r < n; ) {
                    o = t[r];
                    var s = jo(o)
                      , u = s == "wrapper" ? LD(o) : void 0;
                    u && Th(u[0]) && u[1] == (qD | MD | FD | GD) && !u[4].length && u[9] == 1 ? a = a[jo(u[0])].apply(a, u[3]) : a = o.length == 1 && Th(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var l = arguments
                      , h = l[0];
                    if (a && l.length == 1 && ND(h))
                        return a.plant(h).value();
                    for (var p = 0, d = n ? t[p].apply(this, l) : h; ++p < n; )
                        d = t[p].call(this, d);
                    return d
                }
            })
        }
        bh.exports = XD
    }
    );
    var Oh = f((aX,Sh)=>{
        var UD = Ah()
          , VD = UD();
        Sh.exports = VD
    }
    );
    var xh = f((sX,wh)=>{
        function kD(e, t, n) {
            return e === e && (n !== void 0 && (e = e <= n ? e : n),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        wh.exports = kD
    }
    );
    var Ch = f((uX,Rh)=>{
        var BD = xh()
          , Yo = ir();
        function HD(e, t, n) {
            return n === void 0 && (n = t,
            t = void 0),
            n !== void 0 && (n = Yo(n),
            n = n === n ? n : 0),
            t !== void 0 && (t = Yo(t),
            t = t === t ? t : 0),
            BD(Yo(e), t, n)
        }
        Rh.exports = HD
    }
    );
    var Xh, Uh, Vh, kh, WD, zD, KD, jD, YD, $D, QD, ZD, JD, eM, tM, nM, rM, iM, oM, Bh, Hh, aM, sM, uM, Wh, cM, lM, zh, fM, $o, Kh, Ph, Lh, jh, bn, dM, Ze, Yh, pM, Re, Ue, An, $h, Qo, Nh, Zo, gM, Tn, hM, EM, yM, Qh, Dh, vM, Mh, mM, _M, IM, Fh, Pr, Lr, qh, Gh, Zh, Jh = de(()=>{
        "use strict";
        Xh = ae(Oh()),
        Uh = ae(nr()),
        Vh = ae(Ch());
        we();
        Jo();
        Ar();
        kh = ae(Et()),
        {MOUSE_CLICK: WD, MOUSE_SECOND_CLICK: zD, MOUSE_DOWN: KD, MOUSE_UP: jD, MOUSE_OVER: YD, MOUSE_OUT: $D, DROPDOWN_CLOSE: QD, DROPDOWN_OPEN: ZD, SLIDER_ACTIVE: JD, SLIDER_INACTIVE: eM, TAB_ACTIVE: tM, TAB_INACTIVE: nM, NAVBAR_CLOSE: rM, NAVBAR_OPEN: iM, MOUSE_MOVE: oM, PAGE_SCROLL_DOWN: Bh, SCROLL_INTO_VIEW: Hh, SCROLL_OUT_OF_VIEW: aM, PAGE_SCROLL_UP: sM, SCROLLING_IN_VIEW: uM, PAGE_FINISH: Wh, ECOMMERCE_CART_CLOSE: cM, ECOMMERCE_CART_OPEN: lM, PAGE_START: zh, PAGE_SCROLL: fM} = Ge,
        $o = "COMPONENT_ACTIVE",
        Kh = "COMPONENT_INACTIVE",
        {COLON_DELIMITER: Ph} = me,
        {getNamespacedParameterId: Lh} = kh.IX2VanillaUtils,
        jh = e=>t=>typeof t == "object" && e(t) ? !0 : t,
        bn = jh(({element: e, nativeEvent: t})=>e === t.target),
        dM = jh(({element: e, nativeEvent: t})=>e.contains(t.target)),
        Ze = (0,
        Xh.default)([bn, dM]),
        Yh = (e,t)=>{
            if (t) {
                let {ixData: n} = e.getState()
                  , {events: r} = n
                  , i = r[t];
                if (i && !gM[i.eventTypeId])
                    return i
            }
            return null
        }
        ,
        pM = ({store: e, event: t})=>{
            let {action: n} = t
              , {autoStopEventId: r} = n.config;
            return !!Yh(e, r)
        }
        ,
        Re = ({store: e, event: t, element: n, eventStateKey: r},i)=>{
            let {action: o, id: a} = t
              , {actionListId: s, autoStopEventId: u} = o.config
              , l = Yh(e, u);
            return l && Wt({
                store: e,
                eventId: u,
                eventTarget: n,
                eventStateKey: u + Ph + r.split(Ph)[1],
                actionListId: (0,
                Uh.default)(l, "action.config.actionListId")
            }),
            Wt({
                store: e,
                eventId: a,
                eventTarget: n,
                eventStateKey: r,
                actionListId: s
            }),
            Sn({
                store: e,
                eventId: a,
                eventTarget: n,
                eventStateKey: r,
                actionListId: s
            }),
            i
        }
        ,
        Ue = (e,t)=>(n,r)=>e(n, r) === !0 ? t(n, r) : r,
        An = {
            handler: Ue(Ze, Re)
        },
        $h = {
            ...An,
            types: [$o, Kh].join(" ")
        },
        Qo = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        Nh = "mouseover mouseout",
        Zo = {
            types: Qo
        },
        gM = {
            PAGE_START: zh,
            PAGE_FINISH: Wh
        },
        Tn = (()=>{
            let e = window.pageXOffset !== void 0
              , n = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return ()=>({
                scrollLeft: e ? window.pageXOffset : n.scrollLeft,
                scrollTop: e ? window.pageYOffset : n.scrollTop,
                stiffScrollTop: (0,
                Vh.default)(e ? window.pageYOffset : n.scrollTop, 0, n.scrollHeight - window.innerHeight),
                scrollWidth: n.scrollWidth,
                scrollHeight: n.scrollHeight,
                clientWidth: n.clientWidth,
                clientHeight: n.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )(),
        hM = (e,t)=>!(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
        EM = ({element: e, nativeEvent: t})=>{
            let {type: n, target: r, relatedTarget: i} = t
              , o = e.contains(r);
            if (n === "mouseover" && o)
                return !0;
            let a = e.contains(i);
            return !!(n === "mouseout" && o && a)
        }
        ,
        yM = e=>{
            let {element: t, event: {config: n}} = e
              , {clientWidth: r, clientHeight: i} = Tn()
              , o = n.scrollOffsetValue
              , u = n.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return hM(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: r,
                bottom: i - u
            })
        }
        ,
        Qh = e=>(t,n)=>{
            let {type: r} = t.nativeEvent
              , i = [$o, Kh].indexOf(r) !== -1 ? r === $o : n.isActive
              , o = {
                ...n,
                isActive: i
            };
            return (!n || o.isActive !== n.isActive) && e(t, o) || o
        }
        ,
        Dh = e=>(t,n)=>{
            let r = {
                elementHovered: EM(t)
            };
            return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && e(t, r) || r
        }
        ,
        vM = e=>(t,n)=>{
            let r = {
                ...n,
                elementVisible: yM(t)
            };
            return (n ? r.elementVisible !== n.elementVisible : r.elementVisible) && e(t, r) || r
        }
        ,
        Mh = e=>(t,n={})=>{
            let {stiffScrollTop: r, scrollHeight: i, innerHeight: o} = Tn()
              , {event: {config: a, eventTypeId: s}} = t
              , {scrollOffsetValue: u, scrollOffsetUnit: l} = a
              , h = l === "PX"
              , p = i - o
              , d = Number((r / p).toFixed(2));
            if (n && n.percentTop === d)
                return n;
            let E = (h ? u : o * (u || 0) / 100) / p, v, _, A = 0;
            n && (v = d > n.percentTop,
            _ = n.scrollingDown !== v,
            A = _ ? d : n.anchorTop);
            let m = s === Bh ? d >= A + E : d <= A - E
              , x = {
                ...n,
                percentTop: d,
                inBounds: m,
                anchorTop: A,
                scrollingDown: v
            };
            return n && m && (_ || x.inBounds !== n.inBounds) && e(t, x) || x
        }
        ,
        mM = (e,t)=>e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
        _M = e=>(t,n)=>{
            let r = {
                finished: document.readyState === "complete"
            };
            return r.finished && !(n && n.finshed) && e(t),
            r
        }
        ,
        IM = e=>(t,n)=>{
            let r = {
                started: !0
            };
            return n || e(t),
            r
        }
        ,
        Fh = e=>(t,n={
            clickCount: 0
        })=>{
            let r = {
                clickCount: n.clickCount % 2 + 1
            };
            return r.clickCount !== n.clickCount && e(t, r) || r
        }
        ,
        Pr = (e=!0)=>({
            ...$h,
            handler: Ue(e ? Ze : bn, Qh((t,n)=>n.isActive ? An.handler(t, n) : n))
        }),
        Lr = (e=!0)=>({
            ...$h,
            handler: Ue(e ? Ze : bn, Qh((t,n)=>n.isActive ? n : An.handler(t, n)))
        }),
        qh = {
            ...Zo,
            handler: vM((e,t)=>{
                let {elementVisible: n} = t
                  , {event: r, store: i} = e
                  , {ixData: o} = i.getState()
                  , {events: a} = o;
                return !a[r.action.config.autoStopEventId] && t.triggered ? t : r.eventTypeId === Hh === n ? (Re(e),
                {
                    ...t,
                    triggered: !0
                }) : t
            }
            )
        },
        Gh = .05,
        Zh = {
            [JD]: Pr(),
            [eM]: Lr(),
            [ZD]: Pr(),
            [QD]: Lr(),
            [iM]: Pr(!1),
            [rM]: Lr(!1),
            [tM]: Pr(),
            [nM]: Lr(),
            [lM]: {
                types: "ecommerce-cart-open",
                handler: Ue(Ze, Re)
            },
            [cM]: {
                types: "ecommerce-cart-close",
                handler: Ue(Ze, Re)
            },
            [WD]: {
                types: "click",
                handler: Ue(Ze, Fh((e,{clickCount: t})=>{
                    pM(e) ? t === 1 && Re(e) : Re(e)
                }
                ))
            },
            [zD]: {
                types: "click",
                handler: Ue(Ze, Fh((e,{clickCount: t})=>{
                    t === 2 && Re(e)
                }
                ))
            },
            [KD]: {
                ...An,
                types: "mousedown"
            },
            [jD]: {
                ...An,
                types: "mouseup"
            },
            [YD]: {
                types: Nh,
                handler: Ue(Ze, Dh((e,t)=>{
                    t.elementHovered && Re(e)
                }
                ))
            },
            [$D]: {
                types: Nh,
                handler: Ue(Ze, Dh((e,t)=>{
                    t.elementHovered || Re(e)
                }
                ))
            },
            [oM]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: n, nativeEvent: r, eventStateKey: i},o={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                })=>{
                    let {basedOn: a, selectedAxis: s, continuousParameterGroupId: u, reverse: l, restingState: h=0} = n
                      , {clientX: p=o.clientX, clientY: d=o.clientY, pageX: E=o.pageX, pageY: v=o.pageY} = r
                      , _ = s === "X_AXIS"
                      , A = r.type === "mouseout"
                      , m = h / 100
                      , x = u
                      , w = !1;
                    switch (a) {
                    case je.VIEWPORT:
                        {
                            m = _ ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(d, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case je.PAGE:
                        {
                            let {scrollLeft: P, scrollTop: L, scrollWidth: C, scrollHeight: U} = Tn();
                            m = _ ? Math.min(P + E, C) / C : Math.min(L + v, U) / U;
                            break
                        }
                    case je.ELEMENT:
                    default:
                        {
                            x = Lh(i, u);
                            let P = r.type.indexOf("mouse") === 0;
                            if (P && Ze({
                                element: t,
                                nativeEvent: r
                            }) !== !0)
                                break;
                            let L = t.getBoundingClientRect()
                              , {left: C, top: U, width: B, height: K} = L;
                            if (!P && !mM({
                                left: p,
                                top: d
                            }, L))
                                break;
                            w = !0,
                            m = _ ? (p - C) / B : (d - U) / K;
                            break
                        }
                    }
                    return A && (m > 1 - Gh || m < Gh) && (m = Math.round(m)),
                    (a !== je.ELEMENT || w || w !== o.elementHovered) && (m = l ? 1 - m : m,
                    e.dispatch(Bt(x, m))),
                    {
                        elementHovered: w,
                        clientX: p,
                        clientY: d,
                        pageX: E,
                        pageY: v
                    }
                }
            },
            [fM]: {
                types: Qo,
                handler: ({store: e, eventConfig: t})=>{
                    let {continuousParameterGroupId: n, reverse: r} = t
                      , {scrollTop: i, scrollHeight: o, clientHeight: a} = Tn()
                      , s = i / (o - a);
                    s = r ? 1 - s : s,
                    e.dispatch(Bt(n, s))
                }
            },
            [uM]: {
                types: Qo,
                handler: ({element: e, store: t, eventConfig: n, eventStateKey: r},i={
                    scrollPercent: 0
                })=>{
                    let {scrollLeft: o, scrollTop: a, scrollWidth: s, scrollHeight: u, clientHeight: l} = Tn()
                      , {basedOn: h, selectedAxis: p, continuousParameterGroupId: d, startsEntering: E, startsExiting: v, addEndOffset: _, addStartOffset: A, addOffsetValue: m=0, endOffsetValue: x=0} = n
                      , w = p === "X_AXIS";
                    if (h === je.VIEWPORT) {
                        let P = w ? o / s : a / u;
                        return P !== i.scrollPercent && t.dispatch(Bt(d, P)),
                        {
                            scrollPercent: P
                        }
                    } else {
                        let P = Lh(r, d)
                          , L = e.getBoundingClientRect()
                          , C = (A ? m : 0) / 100
                          , U = (_ ? x : 0) / 100;
                        C = E ? C : 1 - C,
                        U = v ? U : 1 - U;
                        let B = L.top + Math.min(L.height * C, l)
                          , Y = L.top + L.height * U - B
                          , Q = Math.min(l + Y, u)
                          , b = Math.min(Math.max(0, l - B), Q) / Q;
                        return b !== i.scrollPercent && t.dispatch(Bt(P, b)),
                        {
                            scrollPercent: b
                        }
                    }
                }
            },
            [Hh]: qh,
            [aM]: qh,
            [Bh]: {
                ...Zo,
                handler: Mh((e,t)=>{
                    t.scrollingDown && Re(e)
                }
                )
            },
            [sM]: {
                ...Zo,
                handler: Mh((e,t)=>{
                    t.scrollingDown || Re(e)
                }
                )
            },
            [Wh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ue(bn, _M(Re))
            },
            [zh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ue(bn, IM(Re))
            }
        }
    }
    );
    var EE = {};
    Oe(EE, {
        observeRequests: ()=>VM,
        startActionGroup: ()=>Sn,
        startEngine: ()=>Gr,
        stopActionGroup: ()=>Wt,
        stopAllActionGroups: ()=>pE,
        stopEngine: ()=>Xr
    });
    function VM(e) {
        yt({
            store: e,
            select: ({ixRequest: t})=>t.preview,
            onChange: HM
        }),
        yt({
            store: e,
            select: ({ixRequest: t})=>t.playback,
            onChange: WM
        }),
        yt({
            store: e,
            select: ({ixRequest: t})=>t.stop,
            onChange: zM
        }),
        yt({
            store: e,
            select: ({ixRequest: t})=>t.clear,
            onChange: KM
        })
    }
    function kM(e) {
        yt({
            store: e,
            select: ({ixSession: t})=>t.mediaQueryKey,
            onChange: ()=>{
                Xr(e),
                cE({
                    store: e,
                    elementApi: Ae
                }),
                Gr({
                    store: e,
                    allowEvents: !0
                }),
                lE()
            }
        })
    }
    function BM(e, t) {
        let n = yt({
            store: e,
            select: ({ixSession: r})=>r.tick,
            onChange: r=>{
                t(r),
                n()
            }
        })
    }
    function HM({rawData: e, defer: t}, n) {
        let r = ()=>{
            Gr({
                store: n,
                rawData: e,
                allowEvents: !0
            }),
            lE()
        }
        ;
        t ? setTimeout(r, 0) : r()
    }
    function lE() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }
    function WM(e, t) {
        let {actionTypeId: n, actionListId: r, actionItemId: i, eventId: o, allowEvents: a, immediate: s, testManual: u, verbose: l=!0} = e
          , {rawData: h} = e;
        if (r && i && h && s) {
            let p = h.actionLists[r];
            p && (h = CM({
                actionList: p,
                actionItemId: i,
                rawData: h
            }))
        }
        if (Gr({
            store: t,
            rawData: h,
            allowEvents: a,
            testManual: u
        }),
        r && n === Te.GENERAL_START_ACTION || ea(n)) {
            Wt({
                store: t,
                actionListId: r
            }),
            dE({
                store: t,
                actionListId: r,
                eventId: o
            });
            let p = Sn({
                store: t,
                eventId: o,
                actionListId: r,
                immediate: s,
                verbose: l
            });
            l && p && t.dispatch(Ht({
                actionListId: r,
                isPlaying: !s
            }))
        }
    }
    function zM({actionListId: e}, t) {
        e ? Wt({
            store: t,
            actionListId: e
        }) : pE({
            store: t
        }),
        Xr(t)
    }
    function KM(e, t) {
        Xr(t),
        cE({
            store: t,
            elementApi: Ae
        })
    }
    function Gr({store: e, rawData: t, allowEvents: n, testManual: r}) {
        let {ixSession: i} = e.getState();
        t && e.dispatch(Po(t)),
        i.active || (e.dispatch(Lo({
            hasBoundaryNodes: !!document.querySelector(Dr),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })),
        n && (JM(e),
        jM(),
        e.getState().ixSession.hasDefinedMediaQueries && kM(e)),
        e.dispatch(No()),
        YM(e, r))
    }
    function jM() {
        let {documentElement: e} = document;
        e.className.indexOf(eE) === -1 && (e.className += ` ${eE}`)
    }
    function YM(e, t) {
        let n = r=>{
            let {ixSession: i, ixParameters: o} = e.getState();
            i.active && (e.dispatch(Tr(r, o)),
            t ? BM(e, n) : requestAnimationFrame(n))
        }
        ;
        n(window.performance.now())
    }
    function Xr(e) {
        let {ixSession: t} = e.getState();
        if (t.active) {
            let {eventListeners: n} = t;
            n.forEach($M),
            DM(),
            e.dispatch(Do())
        }
    }
    function $M({target: e, listenerParams: t}) {
        e.removeEventListener.apply(e, t)
    }
    function QM({store: e, eventStateKey: t, eventTarget: n, eventId: r, eventConfig: i, actionListId: o, parameterGroup: a, smoothing: s, restingValue: u}) {
        let {ixData: l, ixSession: h} = e.getState()
          , {events: p} = l
          , d = p[r]
          , {eventTypeId: E} = d
          , v = {}
          , _ = {}
          , A = []
          , {continuousActionGroups: m} = a
          , {id: x} = a;
        PM(E, i) && (x = LM(t, x));
        let w = h.hasBoundaryNodes && n ? In(n, Dr) : null;
        m.forEach(P=>{
            let {keyframe: L, actionItems: C} = P;
            C.forEach(U=>{
                let {actionTypeId: B} = U
                  , {target: K} = U.config;
                if (!K)
                    return;
                let Y = K.boundaryMode ? w : null
                  , Q = MM(K) + ta + B;
                if (_[Q] = ZM(_[Q], L, U),
                !v[Q]) {
                    v[Q] = !0;
                    let {config: D} = U;
                    Mr({
                        config: D,
                        event: d,
                        eventTarget: n,
                        elementRoot: Y,
                        elementApi: Ae
                    }).forEach(b=>{
                        A.push({
                            element: b,
                            key: Q
                        })
                    }
                    )
                }
            }
            )
        }
        ),
        A.forEach(({element: P, key: L})=>{
            let C = _[L]
              , U = (0,
            rt.default)(C, "[0].actionItems[0]", {})
              , {actionTypeId: B} = U
              , Y = (B === Te.PLUGIN_RIVE ? (U.config?.target?.selectorGuids || []).length === 0 : qr(B)) ? ra(B)(P, U) : null
              , Q = na({
                element: P,
                actionItem: U,
                elementApi: Ae
            }, Y);
            ia({
                store: e,
                element: P,
                eventId: r,
                actionListId: o,
                actionItem: U,
                destination: Q,
                continuous: !0,
                parameterId: x,
                actionGroups: C,
                smoothing: s,
                restingValue: u,
                pluginInstance: Y
            })
        }
        )
    }
    function ZM(e=[], t, n) {
        let r = [...e], i;
        return r.some((o,a)=>o.keyframe === t ? (i = a,
        !0) : !1),
        i == null && (i = r.length,
        r.push({
            keyframe: t,
            actionItems: []
        })),
        r[i].actionItems.push(n),
        r
    }
    function JM(e) {
        let {ixData: t} = e.getState()
          , {eventTypeMap: n} = t;
        fE(e),
        (0,
        zt.default)(n, (i,o)=>{
            let a = Zh[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            oF({
                logic: a,
                store: e,
                events: i
            })
        }
        );
        let {ixSession: r} = e.getState();
        r.eventListeners.length && tF(e)
    }
    function tF(e) {
        let t = ()=>{
            fE(e)
        }
        ;
        eF.forEach(n=>{
            window.addEventListener(n, t),
            e.dispatch(Ir(window, [n, t]))
        }
        ),
        t()
    }
    function fE(e) {
        let {ixSession: t, ixData: n} = e.getState()
          , r = window.innerWidth;
        if (r !== t.viewportWidth) {
            let {mediaQueries: i} = n;
            e.dispatch(Xo({
                width: r,
                mediaQueries: i
            }))
        }
    }
    function oF({logic: e, store: t, events: n}) {
        aF(n);
        let {types: r, handler: i} = e
          , {ixData: o} = t.getState()
          , {actionLists: a} = o
          , s = nF(n, iF);
        if (!(0,
        rE.default)(s))
            return;
        (0,
        zt.default)(s, (p,d)=>{
            let E = n[d]
              , {action: v, id: _, mediaQueries: A=o.mediaQueryKeys} = E
              , {actionListId: m} = v.config;
            FM(A, o.mediaQueryKeys) || t.dispatch(Uo()),
            v.actionTypeId === Te.GENERAL_CONTINUOUS_ACTION && (Array.isArray(E.config) ? E.config : [E.config]).forEach(w=>{
                let {continuousParameterGroupId: P} = w
                  , L = (0,
                rt.default)(a, `${m}.continuousParameterGroups`, [])
                  , C = (0,
                nE.default)(L, ({id: K})=>K === P)
                  , U = (w.smoothing || 0) / 100
                  , B = (w.restingState || 0) / 100;
                C && p.forEach((K,Y)=>{
                    let Q = _ + ta + Y;
                    QM({
                        store: t,
                        eventStateKey: Q,
                        eventTarget: K,
                        eventId: _,
                        eventConfig: w,
                        actionListId: m,
                        parameterGroup: C,
                        smoothing: U,
                        restingValue: B
                    })
                }
                )
            }
            ),
            (v.actionTypeId === Te.GENERAL_START_ACTION || ea(v.actionTypeId)) && dE({
                store: t,
                actionListId: m,
                eventId: _
            })
        }
        );
        let u = p=>{
            let {ixSession: d} = t.getState();
            rF(s, (E,v,_)=>{
                let A = n[v]
                  , m = d.eventState[_]
                  , {action: x, mediaQueries: w=o.mediaQueryKeys} = A;
                if (!Fr(w, d.mediaQueryKey))
                    return;
                let P = (L={})=>{
                    let C = i({
                        store: t,
                        element: E,
                        event: A,
                        eventConfig: L,
                        nativeEvent: p,
                        eventStateKey: _
                    }, m);
                    qM(C, m) || t.dispatch(Mo(_, C))
                }
                ;
                x.actionTypeId === Te.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(A.config) ? A.config : [A.config]).forEach(P) : P()
            }
            )
        }
          , l = (0,
        sE.default)(u, UM)
          , h = ({target: p=document, types: d, throttle: E})=>{
            d.split(" ").filter(Boolean).forEach(v=>{
                let _ = E ? l : u;
                p.addEventListener(v, _),
                t.dispatch(Ir(p, [v, _]))
            }
            )
        }
        ;
        Array.isArray(r) ? r.forEach(h) : typeof r == "string" && h(e)
    }
    function aF(e) {
        if (!XM)
            return;
        let t = {}
          , n = "";
        for (let r in e) {
            let {eventTypeId: i, target: o} = e[r]
              , a = ko(o);
            t[a] || (i === Ge.MOUSE_CLICK || i === Ge.MOUSE_SECOND_CLICK) && (t[a] = !0,
            n += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (n) {
            let r = document.createElement("style");
            r.textContent = n,
            document.body.appendChild(r)
        }
    }
    function dE({store: e, actionListId: t, eventId: n}) {
        let {ixData: r, ixSession: i} = e.getState()
          , {actionLists: o, events: a} = r
          , s = a[n]
          , u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let l = (0,
            rt.default)(u, "actionItemGroups[0].actionItems", [])
              , h = (0,
            rt.default)(s, "mediaQueries", r.mediaQueryKeys);
            if (!Fr(h, i.mediaQueryKey))
                return;
            l.forEach(p=>{
                let {config: d, actionTypeId: E} = p
                  , v = d?.target?.useEventTarget === !0 && d?.target?.objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : d
                  , _ = Mr({
                    config: v,
                    event: s,
                    elementApi: Ae
                })
                  , A = qr(E);
                _.forEach(m=>{
                    let x = A ? ra(E)(m, p) : null;
                    ia({
                        destination: na({
                            element: m,
                            actionItem: p,
                            elementApi: Ae
                        }, x),
                        immediate: !0,
                        store: e,
                        element: m,
                        eventId: n,
                        actionItem: p,
                        actionListId: t,
                        pluginInstance: x
                    })
                }
                )
            }
            )
        }
    }
    function pE({store: e}) {
        let {ixInstances: t} = e.getState();
        (0,
        zt.default)(t, n=>{
            if (!n.continuous) {
                let {actionListId: r, verbose: i} = n;
                oa(n, e),
                i && e.dispatch(Ht({
                    actionListId: r,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function Wt({store: e, eventId: t, eventTarget: n, eventStateKey: r, actionListId: i}) {
        let {ixInstances: o, ixSession: a} = e.getState()
          , s = a.hasBoundaryNodes && n ? In(n, Dr) : null;
        (0,
        zt.default)(o, u=>{
            let l = (0,
            rt.default)(u, "actionItem.config.target.boundaryMode")
              , h = r ? u.eventStateKey === r : !0;
            if (u.actionListId === i && u.eventId === t && h) {
                if (s && l && !Bo(s, u.element))
                    return;
                oa(u, e),
                u.verbose && e.dispatch(Ht({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function Sn({store: e, eventId: t, eventTarget: n, eventStateKey: r, actionListId: i, groupIndex: o=0, immediate: a, verbose: s}) {
        let {ixData: u, ixSession: l} = e.getState()
          , {events: h} = u
          , p = h[t] || {}
          , {mediaQueries: d=u.mediaQueryKeys} = p
          , E = (0,
        rt.default)(u, `actionLists.${i}`, {})
          , {actionItemGroups: v, useFirstGroupAsInitialState: _} = E;
        if (!v || !v.length)
            return !1;
        o >= v.length && (0,
        rt.default)(p, "config.loop") && (o = 0),
        o === 0 && _ && o++;
        let m = (o === 0 || o === 1 && _) && ea(p.action?.actionTypeId) ? p.config.delay : void 0
          , x = (0,
        rt.default)(v, [o, "actionItems"], []);
        if (!x.length || !Fr(d, l.mediaQueryKey))
            return !1;
        let w = l.hasBoundaryNodes && n ? In(n, Dr) : null
          , P = wM(x)
          , L = !1;
        return x.forEach((C,U)=>{
            let {config: B, actionTypeId: K} = C
              , Y = qr(K)
              , {target: Q} = B;
            if (!Q)
                return;
            let D = Q.boundaryMode ? w : null;
            Mr({
                config: B,
                event: p,
                eventTarget: n,
                elementRoot: D,
                elementApi: Ae
            }).forEach((N,H)=>{
                let V = Y ? ra(K)(N, C) : null
                  , te = Y ? GM(K)(N, C) : null;
                L = !0;
                let J = P === U && H === 0
                  , M = xM({
                    element: N,
                    actionItem: C
                })
                  , k = na({
                    element: N,
                    actionItem: C,
                    elementApi: Ae
                }, V);
                ia({
                    store: e,
                    element: N,
                    actionItem: C,
                    eventId: t,
                    eventTarget: n,
                    eventStateKey: r,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: J,
                    computedStyle: M,
                    destination: k,
                    immediate: a,
                    verbose: s,
                    pluginInstance: V,
                    pluginDuration: te,
                    instanceDelay: m
                })
            }
            )
        }
        ),
        L
    }
    function ia(e) {
        let {store: t, computedStyle: n, ...r} = e, {element: i, actionItem: o, immediate: a, pluginInstance: s, continuous: u, restingValue: l, eventId: h} = r, p = !u, d = SM(), {ixElements: E, ixSession: v, ixData: _} = t.getState(), A = AM(E, i), {refState: m} = E[A] || {}, x = Ho(i), w = v.reducedMotion && yi[o.actionTypeId], P;
        if (w && u)
            switch (_.events[h]?.eventTypeId) {
            case Ge.MOUSE_MOVE:
            case Ge.MOUSE_MOVE_IN_VIEWPORT:
                P = l;
                break;
            default:
                P = .5;
                break
            }
        let L = RM(i, m, n, o, Ae, s);
        if (t.dispatch(Fo({
            instanceId: d,
            elementId: A,
            origin: L,
            refType: x,
            skipMotion: w,
            skipToValue: P,
            ...r
        })),
        gE(document.body, "ix2-animation-started", d),
        a) {
            sF(t, d);
            return
        }
        yt({
            store: t,
            select: ({ixInstances: C})=>C[d],
            onChange: hE
        }),
        p && t.dispatch(br(d, v.tick))
    }
    function oa(e, t) {
        gE(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {elementId: n, actionItem: r} = e
          , {ixElements: i} = t.getState()
          , {ref: o, refType: a} = i[n] || {};
        a === uE && NM(o, r, Ae),
        t.dispatch(qo(e.id))
    }
    function gE(e, t, n) {
        let r = document.createEvent("CustomEvent");
        r.initCustomEvent(t, !0, !0, n),
        e.dispatchEvent(r)
    }
    function sF(e, t) {
        let {ixParameters: n} = e.getState();
        e.dispatch(br(t, 0)),
        e.dispatch(Tr(performance.now(), n));
        let {ixInstances: r} = e.getState();
        hE(r[t], e)
    }
    function hE(e, t) {
        let {active: n, continuous: r, complete: i, elementId: o, actionItem: a, actionTypeId: s, renderType: u, current: l, groupIndex: h, eventId: p, eventTarget: d, eventStateKey: E, actionListId: v, isCarrier: _, styleProp: A, verbose: m, pluginInstance: x} = e
          , {ixData: w, ixSession: P} = t.getState()
          , {events: L} = w
          , C = L && L[p] ? L[p] : {}
          , {mediaQueries: U=w.mediaQueryKeys} = C;
        if (Fr(U, P.mediaQueryKey) && (r || n || i)) {
            if (l || u === bM && i) {
                t.dispatch(Go(o, s, l, a));
                let {ixElements: B} = t.getState()
                  , {ref: K, refType: Y, refState: Q} = B[o] || {}
                  , D = Q && Q[s];
                (Y === uE || qr(s)) && OM(K, Q, D, p, a, A, Ae, u, x)
            }
            if (i) {
                if (_) {
                    let B = Sn({
                        store: t,
                        eventId: p,
                        eventTarget: d,
                        eventStateKey: E,
                        actionListId: v,
                        groupIndex: h + 1,
                        verbose: m
                    });
                    m && !B && t.dispatch(Ht({
                        actionListId: v,
                        isPlaying: !1
                    }))
                }
                oa(e, t)
            }
        }
    }
    var nE, rt, rE, iE, oE, aE, zt, sE, Nr, TM, ea, ta, Dr, uE, bM, eE, Mr, AM, na, yt, SM, OM, cE, wM, xM, RM, CM, PM, LM, Fr, NM, DM, MM, FM, qM, qr, ra, GM, tE, XM, UM, eF, nF, rF, iF, Jo = de(()=>{
        "use strict";
        nE = ae(zi()),
        rt = ae(nr()),
        rE = ae(Rp()),
        iE = ae(tg()),
        oE = ae(rg()),
        aE = ae(og()),
        zt = ae(fg()),
        sE = ae(vg());
        we();
        Nr = ae(Et());
        Ar();
        Ag();
        Jh();
        TM = Object.keys(Dn),
        ea = e=>TM.includes(e),
        {COLON_DELIMITER: ta, BOUNDARY_SELECTOR: Dr, HTML_ELEMENT: uE, RENDER_GENERAL: bM, W_MOD_IX: eE} = me,
        {getAffectedElements: Mr, getElementId: AM, getDestinationValues: na, observeStore: yt, getInstanceId: SM, renderHTMLElement: OM, clearAllStyles: cE, getMaxDurationItemIndex: wM, getComputedStyle: xM, getInstanceOrigin: RM, reduceListToGroup: CM, shouldNamespaceEventParameter: PM, getNamespacedParameterId: LM, shouldAllowMediaQuery: Fr, cleanupHTMLElement: NM, clearObjectCache: DM, stringifyTarget: MM, mediaQueriesEqual: FM, shallowEqual: qM} = Nr.IX2VanillaUtils,
        {isPluginType: qr, createPluginInstance: ra, getPluginDuration: GM} = Nr.IX2VanillaPlugins,
        tE = navigator.userAgent,
        XM = tE.match(/iPad/i) || tE.match(/iPhone/),
        UM = 12;
        eF = ["resize", "orientationchange"];
        nF = (e,t)=>(0,
        iE.default)((0,
        aE.default)(e, t), oE.default),
        rF = (e,t)=>{
            (0,
            zt.default)(e, (n,r)=>{
                n.forEach((i,o)=>{
                    let a = r + ta + o;
                    t(i, r, a)
                }
                )
            }
            )
        }
        ,
        iF = e=>{
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Mr({
                config: t,
                elementApi: Ae
            })
        }
    }
    );
    var mE = f(sa=>{
        "use strict";
        Object.defineProperty(sa, "__esModule", {
            value: !0
        });
        function uF(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        uF(sa, {
            actions: function() {
                return fF
            },
            destroy: function() {
                return vE
            },
            init: function() {
                return hF
            },
            setEnv: function() {
                return gF
            },
            store: function() {
                return Ur
            }
        });
        var cF = gi()
          , lF = dF((lp(),
        We(cp)))
          , aa = (Jo(),
        We(EE))
          , fF = pF((Ar(),
        We(_g)));
        function dF(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function yE(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (yE = function(r) {
                return r ? n : t
            }
            )(e)
        }
        function pF(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var n = yE(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            return r.default = e,
            n && n.set(e, r),
            r
        }
        var Ur = (0,
        cF.createStore)(lF.default);
        function gF(e) {
            e() && (0,
            aa.observeRequests)(Ur)
        }
        function hF(e) {
            vE(),
            (0,
            aa.startEngine)({
                store: Ur,
                rawData: e,
                allowEvents: !0
            })
        }
        function vE() {
            (0,
            aa.stopEngine)(Ur)
        }
    }
    );
    var bE = f((vX,TE)=>{
        "use strict";
        var _E = Fe()
          , IE = mE();
        IE.setEnv(_E.env);
        _E.define("ix2", TE.exports = function() {
            return IE
        }
        )
    }
    );
    var SE = f((mX,AE)=>{
        "use strict";
        var Kt = Fe();
        Kt.define("links", AE.exports = function(e, t) {
            var n = {}, r = e(window), i, o = Kt.env(), a = window.location, s = document.createElement("a"), u = "w--current", l = /index\.(html|php)$/, h = /\/$/, p, d;
            n.ready = n.design = n.preview = E;
            function E() {
                i = o && Kt.env("design"),
                d = Kt.env("slug") || a.pathname || "",
                Kt.scroll.off(_),
                p = [];
                for (var m = document.links, x = 0; x < m.length; ++x)
                    v(m[x]);
                p.length && (Kt.scroll.on(_),
                _())
            }
            function v(m) {
                if (!m.getAttribute("hreflang")) {
                    var x = i && m.getAttribute("href-disabled") || m.getAttribute("href");
                    if (s.href = x,
                    !(x.indexOf(":") >= 0)) {
                        var w = e(m);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                                return;
                            var P = e(s.hash);
                            P.length && p.push({
                                link: w,
                                sec: P,
                                active: !1
                            });
                            return
                        }
                        if (!(x === "#" || x === "")) {
                            var L = s.href === a.href || x === d || l.test(x) && h.test(d);
                            A(w, u, L)
                        }
                    }
                }
            }
            function _() {
                var m = r.scrollTop()
                  , x = r.height();
                t.each(p, function(w) {
                    if (!w.link.attr("hreflang")) {
                        var P = w.link
                          , L = w.sec
                          , C = L.offset().top
                          , U = L.outerHeight()
                          , B = x * .5
                          , K = L.is(":visible") && C + U - B >= m && C + B <= m + x;
                        w.active !== K && (w.active = K,
                        A(P, u, K))
                    }
                })
            }
            function A(m, x, w) {
                var P = m.hasClass(x);
                w && P || !w && !P || (w ? m.addClass(x) : m.removeClass(x))
            }
            return n
        }
        )
    }
    );
    var wE = f((_X,OE)=>{
        "use strict";
        var Vr = Fe();
        Vr.define("scroll", OE.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , n = window.location
              , r = v() ? null : window.history
              , i = e(window)
              , o = e(document)
              , a = e(document.body)
              , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(D) {
                window.setTimeout(D, 15)
            }
              , u = Vr.env("editor") ? ".w-editor-body" : "body"
              , l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])"
              , h = 'a[href="#"]'
              , p = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")"
              , d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , E = document.createElement("style");
            E.appendChild(document.createTextNode(d));
            function v() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var _ = /^#[a-zA-Z0-9][\w:.-]*$/;
            function A(D) {
                return _.test(D.hash) && D.host + D.pathname === n.host + n.pathname
            }
            let m = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function x() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || m.matches
            }
            function w(D, b) {
                var N;
                switch (b) {
                case "add":
                    N = D.attr("tabindex"),
                    N ? D.attr("data-wf-tabindex-swap", N) : D.attr("tabindex", "-1");
                    break;
                case "remove":
                    N = D.attr("data-wf-tabindex-swap"),
                    N ? (D.attr("tabindex", N),
                    D.removeAttr("data-wf-tabindex-swap")) : D.removeAttr("tabindex");
                    break
                }
                D.toggleClass("wf-force-outline-none", b === "add")
            }
            function P(D) {
                var b = D.currentTarget;
                if (!(Vr.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(b.className))) {
                    var N = A(b) ? b.hash : "";
                    if (N !== "") {
                        var H = e(N);
                        H.length && (D && (D.preventDefault(),
                        D.stopPropagation()),
                        L(N, D),
                        window.setTimeout(function() {
                            C(H, function() {
                                w(H, "add"),
                                H.get(0).focus({
                                    preventScroll: !0
                                }),
                                w(H, "remove")
                            })
                        }, D ? 0 : 300))
                    }
                }
            }
            function L(D) {
                if (n.hash !== D && r && r.pushState && !(Vr.env.chrome && n.protocol === "file:")) {
                    var b = r.state && r.state.hash;
                    b !== D && r.pushState({
                        hash: D
                    }, "", D)
                }
            }
            function C(D, b) {
                var N = i.scrollTop()
                  , H = U(D);
                if (N !== H) {
                    var V = B(D, N, H)
                      , te = Date.now()
                      , J = function() {
                        var M = Date.now() - te;
                        window.scroll(0, K(N, H, M, V)),
                        M <= V ? s(J) : typeof b == "function" && b()
                    };
                    s(J)
                }
            }
            function U(D) {
                var b = e(l)
                  , N = b.css("position") === "fixed" ? b.outerHeight() : 0
                  , H = D.offset().top - N;
                if (D.data("scroll") === "mid") {
                    var V = i.height() - N
                      , te = D.outerHeight();
                    te < V && (H -= Math.round((V - te) / 2))
                }
                return H
            }
            function B(D, b, N) {
                if (x())
                    return 0;
                var H = 1;
                return a.add(D).each(function(V, te) {
                    var J = parseFloat(te.getAttribute("data-scroll-time"));
                    !isNaN(J) && J >= 0 && (H = J)
                }),
                (472.143 * Math.log(Math.abs(b - N) + 125) - 2e3) * H
            }
            function K(D, b, N, H) {
                return N > H ? b : D + (b - D) * Y(N / H)
            }
            function Y(D) {
                return D < .5 ? 4 * D * D * D : (D - 1) * (2 * D - 2) * (2 * D - 2) + 1
            }
            function Q() {
                var {WF_CLICK_EMPTY: D, WF_CLICK_SCROLL: b} = t;
                o.on(b, p, P),
                o.on(D, h, function(N) {
                    N.preventDefault()
                }),
                document.head.insertBefore(E, document.head.firstChild)
            }
            return {
                ready: Q
            }
        }
        )
    }
    );
    var RE = f((IX,xE)=>{
        "use strict";
        var EF = Fe();
        EF.define("touch", xE.exports = function(e) {
            var t = {}
              , n = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o,
                o ? new r(o) : null
            }
            ;
            function r(o) {
                var a = !1, s = !1, u = Math.min(Math.round(window.innerWidth * .04), 40), l, h;
                o.addEventListener("touchstart", p, !1),
                o.addEventListener("touchmove", d, !1),
                o.addEventListener("touchend", E, !1),
                o.addEventListener("touchcancel", v, !1),
                o.addEventListener("mousedown", p, !1),
                o.addEventListener("mousemove", d, !1),
                o.addEventListener("mouseup", E, !1),
                o.addEventListener("mouseout", v, !1);
                function p(A) {
                    var m = A.touches;
                    m && m.length > 1 || (a = !0,
                    m ? (s = !0,
                    l = m[0].clientX) : l = A.clientX,
                    h = l)
                }
                function d(A) {
                    if (a) {
                        if (s && A.type === "mousemove") {
                            A.preventDefault(),
                            A.stopPropagation();
                            return
                        }
                        var m = A.touches
                          , x = m ? m[0].clientX : A.clientX
                          , w = x - h;
                        h = x,
                        Math.abs(w) > u && n && String(n()) === "" && (i("swipe", A, {
                            direction: w > 0 ? "right" : "left"
                        }),
                        v())
                    }
                }
                function E(A) {
                    if (a && (a = !1,
                    s && A.type === "mouseup")) {
                        A.preventDefault(),
                        A.stopPropagation(),
                        s = !1;
                        return
                    }
                }
                function v() {
                    a = !1
                }
                function _() {
                    o.removeEventListener("touchstart", p, !1),
                    o.removeEventListener("touchmove", d, !1),
                    o.removeEventListener("touchend", E, !1),
                    o.removeEventListener("touchcancel", v, !1),
                    o.removeEventListener("mousedown", p, !1),
                    o.removeEventListener("mousemove", d, !1),
                    o.removeEventListener("mouseup", E, !1),
                    o.removeEventListener("mouseout", v, !1),
                    o = null
                }
                this.destroy = _
            }
            function i(o, a, s) {
                var u = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(u, s)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var LE = f((TX,PE)=>{
        "use strict";
        var vt = Fe()
          , yF = Zr()
          , Ve = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , CE = !0
          , vF = /^#[a-zA-Z0-9\-_]+$/;
        vt.define("dropdown", PE.exports = function(e, t) {
            var n = t.debounce, r = {}, i = vt.env(), o = !1, a, s = vt.env.touch, u = ".w-dropdown", l = "w--open", h = yF.triggers, p = 900, d = "focusout" + u, E = "keydown" + u, v = "mouseenter" + u, _ = "mousemove" + u, A = "mouseleave" + u, m = (s ? "click" : "mouseup") + u, x = "w-close" + u, w = "setting" + u, P = e(document), L;
            r.ready = C,
            r.design = function() {
                o && b(),
                o = !1,
                C()
            }
            ,
            r.preview = function() {
                o = !0,
                C()
            }
            ;
            function C() {
                a = i && vt.env("design"),
                L = P.find(u),
                L.each(U)
            }
            function U(g, X) {
                var z = e(X)
                  , R = e.data(X, u);
                R || (R = e.data(X, u, {
                    open: !1,
                    el: z,
                    config: {},
                    selectedIdx: -1
                })),
                R.toggle = R.el.children(".w-dropdown-toggle"),
                R.list = R.el.children(".w-dropdown-list"),
                R.links = R.list.find("a:not(.w-dropdown .w-dropdown a)"),
                R.complete = V(R),
                R.mouseLeave = J(R),
                R.mouseUpOutside = H(R),
                R.mouseMoveOutside = M(R),
                B(R);
                var Z = R.toggle.attr("id")
                  , se = R.list.attr("id");
                Z || (Z = "w-dropdown-toggle-" + g),
                se || (se = "w-dropdown-list-" + g),
                R.toggle.attr("id", Z),
                R.toggle.attr("aria-controls", se),
                R.toggle.attr("aria-haspopup", "menu"),
                R.toggle.attr("aria-expanded", "false"),
                R.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"),
                R.toggle.prop("tagName") !== "BUTTON" && (R.toggle.attr("role", "button"),
                R.toggle.attr("tabindex") || R.toggle.attr("tabindex", "0")),
                R.list.attr("id", se),
                R.list.attr("aria-labelledby", Z),
                R.links.each(function(Pe, ke) {
                    ke.hasAttribute("tabindex") || ke.setAttribute("tabindex", "0"),
                    vF.test(ke.hash) && ke.addEventListener("click", D.bind(null, R))
                }),
                R.el.off(u),
                R.toggle.off(u),
                R.nav && R.nav.off(u);
                var oe = Y(R, CE);
                a && R.el.on(w, K(R)),
                a || (i && (R.hovering = !1,
                D(R)),
                R.config.hover && R.toggle.on(v, te(R)),
                R.el.on(x, oe),
                R.el.on(E, k(R)),
                R.el.on(d, F(R)),
                R.toggle.on(m, oe),
                R.toggle.on(E, q(R)),
                R.nav = R.el.closest(".w-nav"),
                R.nav.on(x, oe))
            }
            function B(g) {
                var X = Number(g.el.css("z-index"));
                g.manageZ = X === p || X === p + 1,
                g.config = {
                    hover: g.el.attr("data-hover") === "true" && !s,
                    delay: g.el.attr("data-delay")
                }
            }
            function K(g) {
                return function(X, z) {
                    z = z || {},
                    B(g),
                    z.open === !0 && Q(g, !0),
                    z.open === !1 && D(g, {
                        immediate: !0
                    })
                }
            }
            function Y(g, X) {
                return n(function(z) {
                    if (g.open || z && z.type === "w-close")
                        return D(g, {
                            forceClose: X
                        });
                    Q(g)
                })
            }
            function Q(g) {
                if (!g.open) {
                    N(g),
                    g.open = !0,
                    g.list.addClass(l),
                    g.toggle.addClass(l),
                    g.toggle.attr("aria-expanded", "true"),
                    h.intro(0, g.el[0]),
                    vt.redraw.up(),
                    g.manageZ && g.el.css("z-index", p + 1);
                    var X = vt.env("editor");
                    a || P.on(m, g.mouseUpOutside),
                    g.hovering && !X && g.el.on(A, g.mouseLeave),
                    g.hovering && X && P.on(_, g.mouseMoveOutside),
                    window.clearTimeout(g.delayId)
                }
            }
            function D(g, {immediate: X, forceClose: z}={}) {
                if (g.open && !(g.config.hover && g.hovering && !z)) {
                    g.toggle.attr("aria-expanded", "false"),
                    g.open = !1;
                    var R = g.config;
                    if (h.outro(0, g.el[0]),
                    P.off(m, g.mouseUpOutside),
                    P.off(_, g.mouseMoveOutside),
                    g.el.off(A, g.mouseLeave),
                    window.clearTimeout(g.delayId),
                    !R.delay || X)
                        return g.complete();
                    g.delayId = window.setTimeout(g.complete, R.delay)
                }
            }
            function b() {
                P.find(u).each(function(g, X) {
                    e(X).triggerHandler(x)
                })
            }
            function N(g) {
                var X = g.el[0];
                L.each(function(z, R) {
                    var Z = e(R);
                    Z.is(X) || Z.has(X).length || Z.triggerHandler(x)
                })
            }
            function H(g) {
                return g.mouseUpOutside && P.off(m, g.mouseUpOutside),
                n(function(X) {
                    if (g.open) {
                        var z = e(X.target);
                        if (!z.closest(".w-dropdown-toggle").length) {
                            var R = e.inArray(g.el[0], z.parents(u)) === -1
                              , Z = vt.env("editor");
                            if (R) {
                                if (Z) {
                                    var se = z.parents().length === 1 && z.parents("svg").length === 1
                                      , oe = z.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (se || oe)
                                        return
                                }
                                D(g)
                            }
                        }
                    }
                })
            }
            function V(g) {
                return function() {
                    g.list.removeClass(l),
                    g.toggle.removeClass(l),
                    g.manageZ && g.el.css("z-index", "")
                }
            }
            function te(g) {
                return function() {
                    g.hovering = !0,
                    Q(g)
                }
            }
            function J(g) {
                return function() {
                    g.hovering = !1,
                    g.links.is(":focus") || D(g)
                }
            }
            function M(g) {
                return n(function(X) {
                    if (g.open) {
                        var z = e(X.target)
                          , R = e.inArray(g.el[0], z.parents(u)) === -1;
                        if (R) {
                            var Z = z.parents(".w-editor-bem-EditorHoverControls").length
                              , se = z.parents(".w-editor-bem-RTToolbar").length
                              , oe = e(".w-editor-bem-EditorOverlay")
                              , Pe = oe.find(".w-editor-edit-outline").length || oe.find(".w-editor-bem-RTToolbar").length;
                            if (Z || se || Pe)
                                return;
                            g.hovering = !1,
                            D(g)
                        }
                    }
                })
            }
            function k(g) {
                return function(X) {
                    if (!(a || !g.open))
                        switch (g.selectedIdx = g.links.index(document.activeElement),
                        X.keyCode) {
                        case Ve.HOME:
                            return g.open ? (g.selectedIdx = 0,
                            W(g),
                            X.preventDefault()) : void 0;
                        case Ve.END:
                            return g.open ? (g.selectedIdx = g.links.length - 1,
                            W(g),
                            X.preventDefault()) : void 0;
                        case Ve.ESCAPE:
                            return D(g),
                            g.toggle.focus(),
                            X.stopPropagation();
                        case Ve.ARROW_RIGHT:
                        case Ve.ARROW_DOWN:
                            return g.selectedIdx = Math.min(g.links.length - 1, g.selectedIdx + 1),
                            W(g),
                            X.preventDefault();
                        case Ve.ARROW_LEFT:
                        case Ve.ARROW_UP:
                            return g.selectedIdx = Math.max(-1, g.selectedIdx - 1),
                            W(g),
                            X.preventDefault()
                        }
                }
            }
            function W(g) {
                g.links[g.selectedIdx] && g.links[g.selectedIdx].focus()
            }
            function q(g) {
                var X = Y(g, CE);
                return function(z) {
                    if (!a) {
                        if (!g.open)
                            switch (z.keyCode) {
                            case Ve.ARROW_UP:
                            case Ve.ARROW_DOWN:
                                return z.stopPropagation()
                            }
                        switch (z.keyCode) {
                        case Ve.SPACE:
                        case Ve.ENTER:
                            return X(),
                            z.stopPropagation(),
                            z.preventDefault()
                        }
                    }
                }
            }
            function F(g) {
                return n(function(X) {
                    var {relatedTarget: z, target: R} = X
                      , Z = g.el[0]
                      , se = Z.contains(z) || Z.contains(R);
                    return se || D(g),
                    X.stopPropagation()
                })
            }
            return r
        }
        )
    }
    );
    var NE = f(ua=>{
        "use strict";
        Object.defineProperty(ua, "__esModule", {
            value: !0
        });
        Object.defineProperty(ua, "default", {
            enumerable: !0,
            get: function() {
                return mF
            }
        });
        function mF(e, t, n, r, i, o, a, s, u, l, h, p, d) {
            return function(E) {
                e(E);
                var v = E.form
                  , _ = {
                    name: v.attr("data-name") || v.attr("name") || "Untitled Form",
                    pageId: v.attr("data-wf-page-id") || "",
                    elementId: v.attr("data-wf-element-id") || "",
                    source: t.href,
                    test: n.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(v.html()),
                    trackingCookies: r()
                };
                let A = v.attr("data-wf-flow");
                A && (_.wfFlow = A),
                i(E);
                var m = o(v, _.fields);
                if (m)
                    return a(m);
                if (_.fileUploads = s(v),
                u(E),
                !l) {
                    h(E);
                    return
                }
                p.ajax({
                    url: d,
                    type: "POST",
                    data: _,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(x) {
                    x && x.code === 200 && (E.success = !0),
                    h(E)
                }).fail(function() {
                    h(E)
                })
            }
        }
    }
    );
    var ME = f((AX,DE)=>{
        "use strict";
        var kr = Fe()
          , _F = (e,t,n,r)=>{
            let i = document.createElement("div");
            t.appendChild(i),
            turnstile.render(i, {
                sitekey: e,
                callback: function(o) {
                    return n(o)
                },
                "error-callback": function() {
                    r()
                }
            })
        }
        ;
        kr.define("forms", DE.exports = function(e, t) {
            var n = {}, r = e(document), i, o = window.location, a = window.XDomainRequest && !window.atob, s = ".w-form", u, l = /e(-)?mail/i, h = /^\S+@\S+$/, p = window.alert, d = kr.env(), E, v, _, A = /list-manage[1-9]?.com/i, m = t.debounce(function() {
                p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            n.ready = n.design = n.preview = function() {
                x(),
                !d && !E && P()
            }
            ;
            function x() {
                u = e("html").attr("data-wf-site"),
                v = "https://webflow.com/api/v1/form/" + u,
                a && v.indexOf("https://webflow.com") >= 0 && (v = v.replace("https://webflow.com", "https://formdata.webflow.com")),
                _ = `${v}/signFile`,
                i = e(s + " form"),
                i.length && i.each(w)
            }
            function w(M, k) {
                var W = e(k)
                  , q = e.data(k, s);
                q || (q = e.data(k, s, {
                    form: W
                })),
                L(q);
                var F = W.closest("div.w-form");
                q.done = F.find("> .w-form-done"),
                q.fail = F.find("> .w-form-fail"),
                q.fileUploads = F.find(".w-file-upload"),
                q.fileUploads.each(function(z) {
                    V(z, q)
                });
                var g = q.form.attr("aria-label") || q.form.attr("data-name") || "Form";
                q.done.attr("aria-label") || q.form.attr("aria-label", g),
                q.done.attr("tabindex", "-1"),
                q.done.attr("role", "region"),
                q.done.attr("aria-label") || q.done.attr("aria-label", g + " success"),
                q.fail.attr("tabindex", "-1"),
                q.fail.attr("role", "region"),
                q.fail.attr("aria-label") || q.fail.attr("aria-label", g + " failure");
                var X = q.action = W.attr("action");
                if (q.handler = null,
                q.redirect = W.attr("data-redirect"),
                A.test(X)) {
                    q.handler = b;
                    return
                }
                if (!X) {
                    if (u) {
                        q.handler = (()=>{
                            let z = NE().default;
                            return z(L, o, kr, Y, H, U, p, B, C, u, N, e, v)
                        }
                        )();
                        return
                    }
                    m()
                }
            }
            function P() {
                E = !0;
                let M = r.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
                if (M) {
                    let R = document.createElement("script");
                    R.src = "https://challenges.cloudflare.com/turnstile/v0/api.js",
                    document.head.appendChild(R),
                    R.onload = ()=>{
                        r.on("submit", s + " form", function(Z) {
                            var se = e.data(this, s);
                            C(se),
                            se.handler && (se.evt = Z,
                            Z.preventDefault(),
                            _F(M, this, oe=>se.handler({
                                ...se,
                                turnstileToken: oe
                            }), ()=>{
                                se.fail.toggle(!0),
                                se.fail.focus(),
                                L(se)
                            }
                            ))
                        })
                    }
                } else
                    r.on("submit", s + " form", function(R) {
                        var Z = e.data(this, s);
                        Z.handler && (Z.evt = R,
                        Z.handler(Z))
                    });
                let k = ".w-checkbox-input"
                  , W = ".w-radio-input"
                  , q = "w--redirected-checked"
                  , F = "w--redirected-focus"
                  , g = "w--redirected-focus-visible"
                  , X = ":focus-visible, [data-wf-focus-visible]"
                  , z = [["checkbox", k], ["radio", W]];
                r.on("change", s + ' form input[type="checkbox"]:not(' + k + ")", R=>{
                    e(R.target).siblings(k).toggleClass(q)
                }
                ),
                r.on("change", s + ' form input[type="radio"]', R=>{
                    e(`input[name="${R.target.name}"]:not(${k})`).map((se,oe)=>e(oe).siblings(W).removeClass(q));
                    let Z = e(R.target);
                    Z.hasClass("w-radio-input") || Z.siblings(W).addClass(q)
                }
                ),
                z.forEach(([R,Z])=>{
                    r.on("focus", s + ` form input[type="${R}"]:not(` + Z + ")", se=>{
                        e(se.target).siblings(Z).addClass(F),
                        e(se.target).filter(X).siblings(Z).addClass(g)
                    }
                    ),
                    r.on("blur", s + ` form input[type="${R}"]:not(` + Z + ")", se=>{
                        e(se.target).siblings(Z).removeClass(`${F} ${g}`)
                    }
                    )
                }
                )
            }
            function L(M) {
                var k = M.btn = M.form.find(':input[type="submit"]');
                M.wait = M.btn.attr("data-wait") || null,
                M.success = !1,
                k.prop("disabled", !1),
                M.label && k.val(M.label)
            }
            function C(M) {
                var k = M.btn
                  , W = M.wait;
                k.prop("disabled", !0),
                W && (M.label = k.val(),
                k.val(W))
            }
            function U(M, k) {
                var W = null;
                return k = k || {},
                M.find(':input:not([type="submit"]):not([type="file"])').each(function(q, F) {
                    var g = e(F)
                      , X = g.attr("type")
                      , z = g.attr("data-name") || g.attr("name") || "Field " + (q + 1);
                    z = encodeURIComponent(z);
                    var R = g.val();
                    if (X === "checkbox")
                        R = g.is(":checked");
                    else if (X === "radio") {
                        if (k[z] === null || typeof k[z] == "string")
                            return;
                        R = M.find('input[name="' + g.attr("name") + '"]:checked').val() || null
                    }
                    typeof R == "string" && (R = e.trim(R)),
                    k[z] = R,
                    W = W || Q(g, X, z, R)
                }),
                W
            }
            function B(M) {
                var k = {};
                return M.find(':input[type="file"]').each(function(W, q) {
                    var F = e(q)
                      , g = F.attr("data-name") || F.attr("name") || "File " + (W + 1)
                      , X = F.attr("data-value");
                    typeof X == "string" && (X = e.trim(X)),
                    k[g] = X
                }),
                k
            }
            let K = {
                _mkto_trk: "marketo"
            };
            function Y() {
                return document.cookie.split("; ").reduce(function(k, W) {
                    let q = W.split("=")
                      , F = q[0];
                    if (F in K) {
                        let g = K[F]
                          , X = q.slice(1).join("=");
                        k[g] = X
                    }
                    return k
                }, {})
            }
            function Q(M, k, W, q) {
                var F = null;
                return k === "password" ? F = "Passwords cannot be submitted." : M.attr("required") ? q ? l.test(M.attr("type")) && (h.test(q) || (F = "Please enter a valid email address for: " + W)) : F = "Please fill out the required field: " + W : W === "g-recaptcha-response" && !q && (F = "Please confirm you\u2019re not a robot."),
                F
            }
            function D(M) {
                H(M),
                N(M)
            }
            function b(M) {
                L(M);
                var k = M.form
                  , W = {};
                if (/^https/.test(o.href) && !/^https/.test(M.action)) {
                    k.attr("method", "post");
                    return
                }
                H(M);
                var q = U(k, W);
                if (q)
                    return p(q);
                C(M);
                var F;
                t.each(W, function(R, Z) {
                    l.test(Z) && (W.EMAIL = R),
                    /^((full[ _-]?)?name)$/i.test(Z) && (F = R),
                    /^(first[ _-]?name)$/i.test(Z) && (W.FNAME = R),
                    /^(last[ _-]?name)$/i.test(Z) && (W.LNAME = R)
                }),
                F && !W.FNAME && (F = F.split(" "),
                W.FNAME = F[0],
                W.LNAME = W.LNAME || F[1]);
                var g = M.action.replace("/post?", "/post-json?") + "&c=?"
                  , X = g.indexOf("u=") + 2;
                X = g.substring(X, g.indexOf("&", X));
                var z = g.indexOf("id=") + 3;
                z = g.substring(z, g.indexOf("&", z)),
                W["b_" + X + "_" + z] = "",
                e.ajax({
                    url: g,
                    data: W,
                    dataType: "jsonp"
                }).done(function(R) {
                    M.success = R.result === "success" || /already/.test(R.msg),
                    M.success || console.info("MailChimp error: " + R.msg),
                    N(M)
                }).fail(function() {
                    N(M)
                })
            }
            function N(M) {
                var k = M.form
                  , W = M.redirect
                  , q = M.success;
                if (q && W) {
                    kr.location(W);
                    return
                }
                M.done.toggle(q),
                M.fail.toggle(!q),
                q ? M.done.focus() : M.fail.focus(),
                k.toggle(!q),
                L(M)
            }
            function H(M) {
                M.evt && M.evt.preventDefault(),
                M.evt = null
            }
            function V(M, k) {
                if (!k.fileUploads || !k.fileUploads[M])
                    return;
                var W, q = e(k.fileUploads[M]), F = q.find("> .w-file-upload-default"), g = q.find("> .w-file-upload-uploading"), X = q.find("> .w-file-upload-success"), z = q.find("> .w-file-upload-error"), R = F.find(".w-file-upload-input"), Z = F.find(".w-file-upload-label"), se = Z.children(), oe = z.find(".w-file-upload-error-msg"), Pe = X.find(".w-file-upload-file"), ke = X.find(".w-file-remove-link"), jt = Pe.find(".w-file-upload-file-name"), Yt = oe.attr("data-w-size-error"), Be = oe.attr("data-w-type-error"), Br = oe.attr("data-w-generic-error");
                if (d || Z.on("click keydown", function(I) {
                    I.type === "keydown" && I.which !== 13 && I.which !== 32 || (I.preventDefault(),
                    R.click())
                }),
                Z.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                ke.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                d)
                    R.on("click", function(I) {
                        I.preventDefault()
                    }),
                    Z.on("click", function(I) {
                        I.preventDefault()
                    }),
                    se.on("click", function(I) {
                        I.preventDefault()
                    });
                else {
                    ke.on("click keydown", function(I) {
                        if (I.type === "keydown") {
                            if (I.which !== 13 && I.which !== 32)
                                return;
                            I.preventDefault()
                        }
                        R.removeAttr("data-value"),
                        R.val(""),
                        jt.html(""),
                        F.toggle(!0),
                        X.toggle(!1),
                        Z.focus()
                    }),
                    R.on("change", function(I) {
                        W = I.target && I.target.files && I.target.files[0],
                        W && (F.toggle(!1),
                        z.toggle(!1),
                        g.toggle(!0),
                        g.focus(),
                        jt.text(W.name),
                        S() || C(k),
                        k.fileUploads[M].uploading = !0,
                        te(W, y))
                    });
                    var On = Z.outerHeight();
                    R.height(On),
                    R.width(1)
                }
                function c(I) {
                    var O = I.responseJSON && I.responseJSON.msg
                      , j = Br;
                    typeof O == "string" && O.indexOf("InvalidFileTypeError") === 0 ? j = Be : typeof O == "string" && O.indexOf("MaxFileSizeError") === 0 && (j = Yt),
                    oe.text(j),
                    R.removeAttr("data-value"),
                    R.val(""),
                    g.toggle(!1),
                    F.toggle(!0),
                    z.toggle(!0),
                    z.focus(),
                    k.fileUploads[M].uploading = !1,
                    S() || L(k)
                }
                function y(I, O) {
                    if (I)
                        return c(I);
                    var j = O.fileName
                      , ee = O.postData
                      , le = O.fileId
                      , G = O.s3Url;
                    R.attr("data-value", le),
                    J(G, ee, W, j, T)
                }
                function T(I) {
                    if (I)
                        return c(I);
                    g.toggle(!1),
                    X.css("display", "inline-block"),
                    X.focus(),
                    k.fileUploads[M].uploading = !1,
                    S() || L(k)
                }
                function S() {
                    var I = k.fileUploads && k.fileUploads.toArray() || [];
                    return I.some(function(O) {
                        return O.uploading
                    })
                }
            }
            function te(M, k) {
                var W = new URLSearchParams({
                    name: M.name,
                    size: M.size
                });
                e.ajax({
                    type: "GET",
                    url: `${_}?${W}`,
                    crossDomain: !0
                }).done(function(q) {
                    k(null, q)
                }).fail(function(q) {
                    k(q)
                })
            }
            function J(M, k, W, q, F) {
                var g = new FormData;
                for (var X in k)
                    g.append(X, k[X]);
                g.append("file", W, q),
                e.ajax({
                    type: "POST",
                    url: M,
                    data: g,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    F(null)
                }).fail(function(z) {
                    F(z)
                })
            }
            return n
        }
        )
    }
    );
    Ta();
    Aa();
    Oa();
    Ra();
    Zr();
    bE();
    SE();
    wE();
    RE();
    LE();
    ME();
}
)();
/*!
* tram.js v0.8.2-global
* Cross-browser CSS3 transitions in JavaScript
* https://github.com/bkwld/tram
* MIT License
*/
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-12"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".arrow-right",
                "originalId": "53feb778-a7a7-f33a-ad87-c0cc42e626b9",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".arrow-right",
                "originalId": "53feb778-a7a7-f33a-ad87-c0cc42e626b9",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599409461614
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".heading.page-number",
                "originalId": "65fae77aa78e53e6aa105718|6607a2a6-e2c6-36ac-c9ec-b4ac25b58b8b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading.page-number",
                "originalId": "65fae77aa78e53e6aa105718|6607a2a6-e2c6-36ac-c9ec-b4ac25b58b8b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1599420309334
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".heading.h1",
                "originalId": "65fae77aa78e53e6aa105718|98a70a4b-6c40-d274-a386-82bec34f5541",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading.h1",
                "originalId": "65fae77aa78e53e6aa105718|98a70a4b-6c40-d274-a386-82bec34f5541",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1599420437394
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".heading.h2",
                "originalId": "65fae77aa78e53e6aa105718|6ea0eac1-59d0-6c8f-7c7d-57e972430400",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading.h2",
                "originalId": "65fae77aa78e53e6aa105718|6ea0eac1-59d0-6c8f-7c7d-57e972430400",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1599420530534
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".heading.h4",
                "originalId": "65fae77aa78e53e6aa105718|c43e54a3-ed66-28e1-0a7b-439d27df21c7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading.h4",
                "originalId": "65fae77aa78e53e6aa105718|c43e54a3-ed66-28e1-0a7b-439d27df21c7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1599420767110
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SPIN_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "spinInCounterClockwise",
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".quote-mark",
                "originalId": "65fae77aa78e53e6aa105718|2e97c1f8-aa50-72a5-1f8b-1ef2da1d9d04",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".quote-mark",
                "originalId": "65fae77aa78e53e6aa105718|2e97c1f8-aa50-72a5-1f8b-1ef2da1d9d04",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "COUNTER_CLOCKWISE",
                "effectIn": true
            },
            "createdOn": 1599420792188
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".heading.quote-name",
                "originalId": "65fae77aa78e53e6aa105718|65749fe5-9e70-cd42-3998-89d237c26e37",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading.quote-name",
                "originalId": "65fae77aa78e53e6aa105718|65749fe5-9e70-cd42-3998-89d237c26e37",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1599420862471
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".heading.quote-title",
                "originalId": "65fae77aa78e53e6aa105718|2fe157e5-98d9-cb8d-789e-2f7dd15a18b3",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading.quote-title",
                "originalId": "65fae77aa78e53e6aa105718|2fe157e5-98d9-cb8d-789e-2f7dd15a18b3",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1599420873619
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-371"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".arrow-right",
                "originalId": "53feb778-a7a7-f33a-ad87-c0cc42e626b9",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".arrow-right",
                "originalId": "53feb778-a7a7-f33a-ad87-c0cc42e626b9",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1599421489378
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-362"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".image-9.portfolio-preview",
                "originalId": "65fae77aa78e53e6aa10570f|66177ce7-2577-b776-89b8-73500bbf5663",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".image-9.portfolio-preview",
                "originalId": "65fae77aa78e53e6aa10570f|66177ce7-2577-b776-89b8-73500bbf5663",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599489256964
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-366"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".image-10.portfolio-preview",
                "originalId": "65fae77aa78e53e6aa10570f|e709f41e-3331-d98c-4652-895e6bab7e66",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".image-10.portfolio-preview",
                "originalId": "65fae77aa78e53e6aa10570f|e709f41e-3331-d98c-4652-895e6bab7e66",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599492310617
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "JIGGLE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "jiggle",
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".submit-button",
                "originalId": "65fae77aa78e53e6aa105710|f06ed00c-aa40-de5c-3b11-f434b303f609",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".submit-button",
                "originalId": "65fae77aa78e53e6aa105710|f06ed00c-aa40-de5c-3b11-f434b303f609",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599834868464
        },
        "e-81": {
            "id": "e-81",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "JELLO_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "jello",
                    "autoStopEventId": "e-82"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-2",
                "originalId": "65fae77aa78e53e6aa105701|f23f88d2-9dda-1667-b33a-81b4f3362c29",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-2",
                "originalId": "65fae77aa78e53e6aa105701|f23f88d2-9dda-1667-b33a-81b4f3362c29",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599849655183
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInTop",
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".div-block-1.arrow-down",
                "originalId": "65fae77aa78e53e6aa105710|6f9e5355-a2d2-97d9-5851-d87599b8f2b2",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".div-block-1.arrow-down",
                "originalId": "65fae77aa78e53e6aa105710|6f9e5355-a2d2-97d9-5851-d87599b8f2b2",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "TOP",
                "effectIn": true
            },
            "createdOn": 1600174947963
        },
        "e-185": {
            "id": "e-185",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-186"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".heading.h2",
                "originalId": "65fae77aa78e53e6aa105710|756e035d-4f59-cb70-ffc4-92bde44be9d1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading.h2",
                "originalId": "65fae77aa78e53e6aa105710|756e035d-4f59-cb70-ffc4-92bde44be9d1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 3,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1600861956029
        },
        "e-214": {
            "id": "e-214",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "JIGGLE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "jiggle",
                    "autoStopEventId": "e-215"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".social-media-icon",
                "originalId": "65fae77aa78e53e6aa105710|b856e126-b042-6e15-7a77-053407cd1ae8",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".social-media-icon",
                "originalId": "65fae77aa78e53e6aa105710|b856e126-b042-6e15-7a77-053407cd1ae8",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1602256914341
        },
        "e-216": {
            "id": "e-216",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FLIP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "flipInBottom",
                    "autoStopEventId": "e-217"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".social-media-icon",
                "originalId": "65fae77aa78e53e6aa105710|b856e126-b042-6e15-7a77-053407cd1aea",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".social-media-icon",
                "originalId": "65fae77aa78e53e6aa105710|b856e126-b042-6e15-7a77-053407cd1aea",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1602256990579
        },
        "e-333": {
            "id": "e-333",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "JIGGLE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "jiggle",
                    "autoStopEventId": "e-334"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".scroll-to-top",
                "originalId": "65fae77aa78e53e6aa105712|279e4ec2-7ae5-7af6-f7d0-23241164e15f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".scroll-to-top",
                "originalId": "65fae77aa78e53e6aa105712|279e4ec2-7ae5-7af6-f7d0-23241164e15f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1608690763090
        },
        "e-343": {
            "id": "e-343",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-344"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".social-media-header",
                "originalId": "78e0111b-2a3c-2339-0750-fa822f9eb39f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".social-media-header",
                "originalId": "78e0111b-2a3c-2339-0750-fa822f9eb39f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1614896759642
        },
        "e-345": {
            "id": "e-345",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-346"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button.left.let-s-talk._2",
                "originalId": "db89cc03-a97d-909b-a2db-11af221f5370",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button.left.let-s-talk._2",
                "originalId": "db89cc03-a97d-909b-a2db-11af221f5370",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1614896781270
        },
        "e-347": {
            "id": "e-347",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-348"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".green-button.button-3",
                "originalId": "eba8cb51-88e4-e9e9-8752-54b402df6bfb",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".green-button.button-3",
                "originalId": "eba8cb51-88e4-e9e9-8752-54b402df6bfb",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1614896794576
        },
        "e-349": {
            "id": "e-349",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-350"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".green-button",
                "originalId": "65fae77aa78e53e6aa105712|627ca072-a944-7a05-52ba-cdcdb0b7284f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".green-button",
                "originalId": "65fae77aa78e53e6aa105712|627ca072-a944-7a05-52ba-cdcdb0b7284f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1614896898540
        },
        "e-351": {
            "id": "e-351",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-352"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button.left",
                "originalId": "65fae77aa78e53e6aa105712|dab2dcaf-3a4a-92f4-11a5-3a4aa23ba9ad",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button.left",
                "originalId": "65fae77aa78e53e6aa105712|dab2dcaf-3a4a-92f4-11a5-3a4aa23ba9ad",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1614896908529
        },
        "e-364": {
            "id": "e-364",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-355"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".link-block.bio",
                "originalId": "5fbe72f0b68414c3f1e5b83d|c4f6ade4-2652-c4e4-fbdd-a6e4f60f97c7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link-block.bio",
                "originalId": "5fbe72f0b68414c3f1e5b83d|c4f6ade4-2652-c4e4-fbdd-a6e4f60f97c7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1607178164154
        },
        "e-367": {
            "id": "e-367",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-371"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".bio",
                "originalId": "5fbe72f0b68414c3f1e5b83d|7ad7f734-7609-919d-bdd1-a7bb87e9d0ec",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".bio",
                "originalId": "5fbe72f0b68414c3f1e5b83d|7ad7f734-7609-919d-bdd1-a7bb87e9d0ec",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1607178154768
        },
        "e-442": {
            "id": "e-442",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-443"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".website-preview",
                "originalId": "63f0a942ad117e5262c1dff6|c0c34a0f-35a4-62fb-96d8-e52bb968001c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".website-preview",
                "originalId": "63f0a942ad117e5262c1dff6|c0c34a0f-35a4-62fb-96d8-e52bb968001c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1640851834316
        },
        "e-462": {
            "id": "e-462",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-463"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button.left.let-s-talk._2",
                "originalId": "63f0a942ad117e5262c1dff6|bf5885d2-89f2-a48a-2a3c-5ea4368fae5d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button.left.let-s-talk._2",
                "originalId": "63f0a942ad117e5262c1dff6|bf5885d2-89f2-a48a-2a3c-5ea4368fae5d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1649932551388
        },
        "e-464": {
            "id": "e-464",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 20,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1685604128260
        },
        "e-482": {
            "id": "e-482",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-483"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|7922d436-feb3-a559-ee42-b185fa629fc9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|7922d436-feb3-a559-ee42-b185fa629fc9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713023989451
        },
        "e-484": {
            "id": "e-484",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-485"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|7922d436-feb3-a559-ee42-b185fa629fcc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|7922d436-feb3-a559-ee42-b185fa629fcc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713023989451
        },
        "e-486": {
            "id": "e-486",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-487"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|7922d436-feb3-a559-ee42-b185fa629fcf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|7922d436-feb3-a559-ee42-b185fa629fcf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713023989451
        },
        "e-488": {
            "id": "e-488",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-489"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|7922d436-feb3-a559-ee42-b185fa629fd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|7922d436-feb3-a559-ee42-b185fa629fd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713023989451
        },
        "e-490": {
            "id": "e-490",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-491"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|7922d436-feb3-a559-ee42-b185fa629fd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|7922d436-feb3-a559-ee42-b185fa629fd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713023989451
        },
        "e-492": {
            "id": "e-492",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-493"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|ebfd9776-1fe3-bf9e-08ba-aef21002b399",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|ebfd9776-1fe3-bf9e-08ba-aef21002b399",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713024178344
        },
        "e-494": {
            "id": "e-494",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-495"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|038c4496-6f71-3131-bf16-cff36da6a587",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|038c4496-6f71-3131-bf16-cff36da6a587",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713024180519
        },
        "e-496": {
            "id": "e-496",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-497"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|9ca81c27-4f6a-3529-b8ce-13b49bc971cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|9ca81c27-4f6a-3529-b8ce-13b49bc971cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713024181287
        },
        "e-498": {
            "id": "e-498",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-499"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|0922145d-eb35-1dea-5663-51188971a415",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|0922145d-eb35-1dea-5663-51188971a415",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713024181900
        },
        "e-500": {
            "id": "e-500",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-501"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|debd743c-efd2-cc3a-63c1-886e31148e11",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|debd743c-efd2-cc3a-63c1-886e31148e11",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713024182528
        },
        "e-502": {
            "id": "e-502",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-503"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|c7146684-e284-be8f-a2ff-b0f780f42b39",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|c7146684-e284-be8f-a2ff-b0f780f42b39",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713024200049
        },
        "e-504": {
            "id": "e-504",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-505"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|7721a4d7-3c5d-57fc-5445-58609d33e858",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|7721a4d7-3c5d-57fc-5445-58609d33e858",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713024213575
        },
        "e-506": {
            "id": "e-506",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-507"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|ca7abbbb-df09-15b8-5025-f98d00d73297",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|ca7abbbb-df09-15b8-5025-f98d00d73297",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713024224750
        },
        "e-508": {
            "id": "e-508",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-509"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|0fef8482-c65b-b1d7-94be-e81d880344af",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|0fef8482-c65b-b1d7-94be-e81d880344af",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713024237835
        },
        "e-514": {
            "id": "e-514",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-515"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|896180ed-6d67-120d-c164-688dbc6db920",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|896180ed-6d67-120d-c164-688dbc6db920",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713031508047
        },
        "e-516": {
            "id": "e-516",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-517"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|34615748-636a-4f51-185d-410ed639e2f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|34615748-636a-4f51-185d-410ed639e2f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713031524916
        },
        "e-522": {
            "id": "e-522",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-523"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa1056c8|ca277c65-b7cb-e863-65cf-e4f77f8443c3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa1056c8|ca277c65-b7cb-e863-65cf-e4f77f8443c3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713085294887
        },
        "e-523": {
            "id": "e-523",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-522"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa1056c8|ca277c65-b7cb-e863-65cf-e4f77f8443c3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa1056c8|ca277c65-b7cb-e863-65cf-e4f77f8443c3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713085294889
        },
        "e-524": {
            "id": "e-524",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-525"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa1056c8|ca277c65-b7cb-e863-65cf-e4f77f8443c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa1056c8|ca277c65-b7cb-e863-65cf-e4f77f8443c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713085417095
        },
        "e-525": {
            "id": "e-525",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-524"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa1056c8|ca277c65-b7cb-e863-65cf-e4f77f8443c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa1056c8|ca277c65-b7cb-e863-65cf-e4f77f8443c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713085417096
        },
        "e-526": {
            "id": "e-526",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "JELLO_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "jello",
                    "autoStopEventId": "e-527"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa1056a9|88ebb674-e626-3cb7-430a-93b8515768d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa1056a9|88ebb674-e626-3cb7-430a-93b8515768d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0.1,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713091257086
        },
        "e-548": {
            "id": "e-548",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-549"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa1056a9|5115f317-57e2-1850-63c9-577b94414f3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa1056a9|5115f317-57e2-1850-63c9-577b94414f3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1714309308804
        },
        "e-549": {
            "id": "e-549",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-548"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa1056a9|5115f317-57e2-1850-63c9-577b94414f3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa1056a9|5115f317-57e2-1850-63c9-577b94414f3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1714309308805
        },
        "e-550": {
            "id": "e-550",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-551"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "cfa73e63-bc77-aae7-51f3-442e5b241114",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "cfa73e63-bc77-aae7-51f3-442e5b241114",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1714498841620
        },
        "e-551": {
            "id": "e-551",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-550"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "cfa73e63-bc77-aae7-51f3-442e5b241114",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "cfa73e63-bc77-aae7-51f3-442e5b241114",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1714498841622
        },
        "e-566": {
            "id": "e-566",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-567"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "0f6d5fb2-d8bf-71ef-9b2c-72e979dffc5c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "0f6d5fb2-d8bf-71ef-9b2c-72e979dffc5c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717156394407
        },
        "e-567": {
            "id": "e-567",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-566"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "0f6d5fb2-d8bf-71ef-9b2c-72e979dffc5c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "0f6d5fb2-d8bf-71ef-9b2c-72e979dffc5c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717156394408
        },
        "e-570": {
            "id": "e-570",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-571"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62980f88-aa04-dfc4-a28b-376678f695b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62980f88-aa04-dfc4-a28b-376678f695b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717156475497
        },
        "e-571": {
            "id": "e-571",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-570"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62980f88-aa04-dfc4-a28b-376678f695b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62980f88-aa04-dfc4-a28b-376678f695b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717156475498
        },
        "e-572": {
            "id": "e-572",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-573"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6831f105-81ab-2a1d-3ec2-833d91cad9aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6831f105-81ab-2a1d-3ec2-833d91cad9aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717156492562
        },
        "e-573": {
            "id": "e-573",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-572"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6831f105-81ab-2a1d-3ec2-833d91cad9aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6831f105-81ab-2a1d-3ec2-833d91cad9aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717156492563
        },
        "e-574": {
            "id": "e-574",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-575"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "3706930e-375f-dbca-ed5f-91e3c969dc75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3706930e-375f-dbca-ed5f-91e3c969dc75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717156504722
        },
        "e-575": {
            "id": "e-575",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-574"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "3706930e-375f-dbca-ed5f-91e3c969dc75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3706930e-375f-dbca-ed5f-91e3c969dc75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717156504723
        },
        "e-584": {
            "id": "e-584",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-585"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "c92bb669-c08f-9ec6-4626-91deeb24851e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "c92bb669-c08f-9ec6-4626-91deeb24851e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717280063561
        },
        "e-585": {
            "id": "e-585",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-584"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "c92bb669-c08f-9ec6-4626-91deeb24851e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "c92bb669-c08f-9ec6-4626-91deeb24851e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717280063562
        },
        "e-586": {
            "id": "e-586",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-587"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|0b0703d2-28aa-f258-15bd-0506e330bd34",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|0b0703d2-28aa-f258-15bd-0506e330bd34",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717281501225
        },
        "e-587": {
            "id": "e-587",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-586"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|0b0703d2-28aa-f258-15bd-0506e330bd34",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|0b0703d2-28aa-f258-15bd-0506e330bd34",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717281501226
        },
        "e-590": {
            "id": "e-590",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-591"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|0b0703d2-28aa-f258-15bd-0506e330bd46",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|0b0703d2-28aa-f258-15bd-0506e330bd46",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717281562628
        },
        "e-591": {
            "id": "e-591",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-590"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|0b0703d2-28aa-f258-15bd-0506e330bd46",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|0b0703d2-28aa-f258-15bd-0506e330bd46",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717281562629
        },
        "e-598": {
            "id": "e-598",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-599"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa1056e6|6a62f133-8062-b7b6-9ec0-79f4a3b0caf5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa1056e6|6a62f133-8062-b7b6-9ec0-79f4a3b0caf5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718743625906
        },
        "e-599": {
            "id": "e-599",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-598"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa1056e6|6a62f133-8062-b7b6-9ec0-79f4a3b0caf5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa1056e6|6a62f133-8062-b7b6-9ec0-79f4a3b0caf5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718743625907
        },
        "e-608": {
            "id": "e-608",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-609"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa1056c8|47cfda43-edee-09be-953c-544ebbdcd4a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa1056c8|47cfda43-edee-09be-953c-544ebbdcd4a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1719001098747
        },
        "e-609": {
            "id": "e-609",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-608"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa1056c8|47cfda43-edee-09be-953c-544ebbdcd4a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa1056c8|47cfda43-edee-09be-953c-544ebbdcd4a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1719001098747
        },
        "e-612": {
            "id": "e-612",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-613"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa1056c8|47cfda43-edee-09be-953c-544ebbdcd4b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa1056c8|47cfda43-edee-09be-953c-544ebbdcd4b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1719004172263
        },
        "e-613": {
            "id": "e-613",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-612"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa1056c8|47cfda43-edee-09be-953c-544ebbdcd4b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa1056c8|47cfda43-edee-09be-953c-544ebbdcd4b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1719004172265
        },
        "e-614": {
            "id": "e-614",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-615"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|8c354a22-ccbb-1b6e-9904-6067145d6d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|8c354a22-ccbb-1b6e-9904-6067145d6d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1719237490896
        },
        "e-615": {
            "id": "e-615",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-614"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|8c354a22-ccbb-1b6e-9904-6067145d6d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|8c354a22-ccbb-1b6e-9904-6067145d6d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1719237490896
        },
        "e-616": {
            "id": "e-616",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-617"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|ed41a89f-1604-44bd-2b00-943483261de0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|ed41a89f-1604-44bd-2b00-943483261de0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721320253102
        },
        "e-617": {
            "id": "e-617",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-616"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|ed41a89f-1604-44bd-2b00-943483261de0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|ed41a89f-1604-44bd-2b00-943483261de0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721320253102
        },
        "e-618": {
            "id": "e-618",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-619"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|212ca9b3-0a0f-c3d2-88a0-ca3ed0da6fa6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|212ca9b3-0a0f-c3d2-88a0-ca3ed0da6fa6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722766290691
        },
        "e-619": {
            "id": "e-619",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-618"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|212ca9b3-0a0f-c3d2-88a0-ca3ed0da6fa6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|212ca9b3-0a0f-c3d2-88a0-ca3ed0da6fa6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722766290691
        },
        "e-620": {
            "id": "e-620",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-621"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|6d9632d9-2026-fd12-0492-dce2d426ca13",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|6d9632d9-2026-fd12-0492-dce2d426ca13",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722766343674
        },
        "e-621": {
            "id": "e-621",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-620"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fae77aa78e53e6aa10565a|6d9632d9-2026-fd12-0492-dce2d426ca13",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fae77aa78e53e6aa10565a|6d9632d9-2026-fd12-0492-dce2d426ca13",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722766343675
        },
        "e-622": {
            "id": "e-622",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 20,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1724837893246
        },
        "e-623": {
            "id": "e-623",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-624"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|7922d436-feb3-a559-ee42-b185fa629fc9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|7922d436-feb3-a559-ee42-b185fa629fc9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-625": {
            "id": "e-625",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-626"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|7922d436-feb3-a559-ee42-b185fa629fcc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|7922d436-feb3-a559-ee42-b185fa629fcc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-627": {
            "id": "e-627",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-628"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|7922d436-feb3-a559-ee42-b185fa629fcf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|7922d436-feb3-a559-ee42-b185fa629fcf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-629": {
            "id": "e-629",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-630"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|7922d436-feb3-a559-ee42-b185fa629fd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|7922d436-feb3-a559-ee42-b185fa629fd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-631": {
            "id": "e-631",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-632"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|7922d436-feb3-a559-ee42-b185fa629fd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|7922d436-feb3-a559-ee42-b185fa629fd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-633": {
            "id": "e-633",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-634"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|ebfd9776-1fe3-bf9e-08ba-aef21002b399",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|ebfd9776-1fe3-bf9e-08ba-aef21002b399",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-635": {
            "id": "e-635",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-636"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|038c4496-6f71-3131-bf16-cff36da6a587",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|038c4496-6f71-3131-bf16-cff36da6a587",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-637": {
            "id": "e-637",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-638"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|9ca81c27-4f6a-3529-b8ce-13b49bc971cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|9ca81c27-4f6a-3529-b8ce-13b49bc971cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-639": {
            "id": "e-639",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-640"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|0922145d-eb35-1dea-5663-51188971a415",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|0922145d-eb35-1dea-5663-51188971a415",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-641": {
            "id": "e-641",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-642"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|debd743c-efd2-cc3a-63c1-886e31148e11",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|debd743c-efd2-cc3a-63c1-886e31148e11",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-643": {
            "id": "e-643",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-644"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|c7146684-e284-be8f-a2ff-b0f780f42b39",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|c7146684-e284-be8f-a2ff-b0f780f42b39",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-645": {
            "id": "e-645",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-646"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|7721a4d7-3c5d-57fc-5445-58609d33e858",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|7721a4d7-3c5d-57fc-5445-58609d33e858",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-647": {
            "id": "e-647",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-648"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|ca7abbbb-df09-15b8-5025-f98d00d73297",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|ca7abbbb-df09-15b8-5025-f98d00d73297",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-649": {
            "id": "e-649",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-650"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|0fef8482-c65b-b1d7-94be-e81d880344af",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|0fef8482-c65b-b1d7-94be-e81d880344af",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-651": {
            "id": "e-651",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-652"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|896180ed-6d67-120d-c164-688dbc6db920",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|896180ed-6d67-120d-c164-688dbc6db920",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-653": {
            "id": "e-653",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-654"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|34615748-636a-4f51-185d-410ed639e2f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|34615748-636a-4f51-185d-410ed639e2f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-661": {
            "id": "e-661",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-662"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|8c354a22-ccbb-1b6e-9904-6067145d6d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|8c354a22-ccbb-1b6e-9904-6067145d6d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-662": {
            "id": "e-662",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-661"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|8c354a22-ccbb-1b6e-9904-6067145d6d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|8c354a22-ccbb-1b6e-9904-6067145d6d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-663": {
            "id": "e-663",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-664"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|ed41a89f-1604-44bd-2b00-943483261de0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|ed41a89f-1604-44bd-2b00-943483261de0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-664": {
            "id": "e-664",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-663"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|ed41a89f-1604-44bd-2b00-943483261de0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|ed41a89f-1604-44bd-2b00-943483261de0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724837893246
        },
        "e-671": {
            "id": "e-671",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-672"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|863a6c8a-5c19-f50b-a8c7-cb691d6a5d7c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|863a6c8a-5c19-f50b-a8c7-cb691d6a5d7c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724865362640
        },
        "e-672": {
            "id": "e-672",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-671"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66cef0047dd2f2d70b2b03a1|863a6c8a-5c19-f50b-a8c7-cb691d6a5d7c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66cef0047dd2f2d70b2b03a1|863a6c8a-5c19-f50b-a8c7-cb691d6a5d7c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1724865362640
        },
        "e-687": {
            "id": "e-687",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-38-p",
                "smoothing": 20,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1725201234960
        },
        "e-688": {
            "id": "e-688",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-689"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|7922d436-feb3-a559-ee42-b185fa629fc9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|7922d436-feb3-a559-ee42-b185fa629fc9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-690": {
            "id": "e-690",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-691"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|7922d436-feb3-a559-ee42-b185fa629fcc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|7922d436-feb3-a559-ee42-b185fa629fcc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-692": {
            "id": "e-692",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-693"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|7922d436-feb3-a559-ee42-b185fa629fcf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|7922d436-feb3-a559-ee42-b185fa629fcf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-694": {
            "id": "e-694",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-695"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|7922d436-feb3-a559-ee42-b185fa629fd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|7922d436-feb3-a559-ee42-b185fa629fd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-696": {
            "id": "e-696",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-697"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|7922d436-feb3-a559-ee42-b185fa629fd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|7922d436-feb3-a559-ee42-b185fa629fd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-698": {
            "id": "e-698",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-699"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|ebfd9776-1fe3-bf9e-08ba-aef21002b399",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|ebfd9776-1fe3-bf9e-08ba-aef21002b399",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-700": {
            "id": "e-700",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-701"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|038c4496-6f71-3131-bf16-cff36da6a587",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|038c4496-6f71-3131-bf16-cff36da6a587",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-702": {
            "id": "e-702",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-703"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|9ca81c27-4f6a-3529-b8ce-13b49bc971cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|9ca81c27-4f6a-3529-b8ce-13b49bc971cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-704": {
            "id": "e-704",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-705"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|0922145d-eb35-1dea-5663-51188971a415",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|0922145d-eb35-1dea-5663-51188971a415",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-706": {
            "id": "e-706",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-707"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|debd743c-efd2-cc3a-63c1-886e31148e11",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|debd743c-efd2-cc3a-63c1-886e31148e11",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-708": {
            "id": "e-708",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-709"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|c7146684-e284-be8f-a2ff-b0f780f42b39",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|c7146684-e284-be8f-a2ff-b0f780f42b39",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-710": {
            "id": "e-710",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-711"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|7721a4d7-3c5d-57fc-5445-58609d33e858",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|7721a4d7-3c5d-57fc-5445-58609d33e858",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-712": {
            "id": "e-712",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-713"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|ca7abbbb-df09-15b8-5025-f98d00d73297",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|ca7abbbb-df09-15b8-5025-f98d00d73297",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-714": {
            "id": "e-714",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-715"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|0fef8482-c65b-b1d7-94be-e81d880344af",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|0fef8482-c65b-b1d7-94be-e81d880344af",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-716": {
            "id": "e-716",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-717"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|896180ed-6d67-120d-c164-688dbc6db920",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|896180ed-6d67-120d-c164-688dbc6db920",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-718": {
            "id": "e-718",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "POP_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "pop",
                    "autoStopEventId": "e-719"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|34615748-636a-4f51-185d-410ed639e2f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|34615748-636a-4f51-185d-410ed639e2f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-720": {
            "id": "e-720",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-721"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|8c354a22-ccbb-1b6e-9904-6067145d6d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|8c354a22-ccbb-1b6e-9904-6067145d6d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-721": {
            "id": "e-721",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-720"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|8c354a22-ccbb-1b6e-9904-6067145d6d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|8c354a22-ccbb-1b6e-9904-6067145d6d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-722": {
            "id": "e-722",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-723"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|ed41a89f-1604-44bd-2b00-943483261de0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|ed41a89f-1604-44bd-2b00-943483261de0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-723": {
            "id": "e-723",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-722"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|ed41a89f-1604-44bd-2b00-943483261de0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|ed41a89f-1604-44bd-2b00-943483261de0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-726": {
            "id": "e-726",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-727"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|863a6c8a-5c19-f50b-a8c7-cb691d6a5d7c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|863a6c8a-5c19-f50b-a8c7-cb691d6a5d7c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        },
        "e-727": {
            "id": "e-727",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-726"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66d47b51e86cdc5ea8deb3ef|863a6c8a-5c19-f50b-a8c7-cb691d6a5d7c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66d47b51e86cdc5ea8deb3ef|863a6c8a-5c19-f50b-a8c7-cb691d6a5d7c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725201234960
        }
    },
    "actionLists": {
        "a-38": {
            "id": "a-38",
            "title": "New Scroll Animation",
            "continuousParameterGroups": [{
                "id": "a-38-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-38-n",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image-46",
                                "selectorGuids": ["03ac635e-b7e6-7ee4-734f-044c8b3a870a"]
                            },
                            "filters": [{
                                "type": "saturate",
                                "filterId": "959b",
                                "value": 100,
                                "unit": "%"
                            }]
                        }
                    }, {
                        "id": "a-38-n-4",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image-46",
                                "selectorGuids": ["03ac635e-b7e6-7ee4-734f-044c8b3a870a"]
                            },
                            "yValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 1,
                    "actionItems": [{
                        "id": "a-38-n-5",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image-46",
                                "selectorGuids": ["03ac635e-b7e6-7ee4-734f-044c8b3a870a"]
                            },
                            "yValue": -180,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-38-n-3",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image-46",
                                "selectorGuids": ["03ac635e-b7e6-7ee4-734f-044c8b3a870a"]
                            },
                            "filters": [{
                                "type": "saturate",
                                "filterId": "1628",
                                "value": 0,
                                "unit": "%"
                            }]
                        }
                    }]
                }]
            }],
            "createdOn": 1685603813259
        },
        "a-43": {
            "id": "a-43",
            "title": "Button pagination 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-43-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65fae77aa78e53e6aa1056c8|ca277c65-b7cb-e863-65cf-e4f77f8443c3"
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-43-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-43-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": true,
                            "id": "65fae77aa78e53e6aa1056c8|ca277c65-b7cb-e863-65cf-e4f77f8443c3"
                        },
                        "globalSwatchId": "--tea-green",
                        "rValue": 216,
                        "bValue": 182,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-43-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {},
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1713085421092
        },
        "a-44": {
            "id": "a-44",
            "title": "Button pagination 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-44-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": true,
                            "id": "65fae77aa78e53e6aa1056c8|ca277c65-b7cb-e863-65cf-e4f77f8443c3"
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-44-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {},
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1713085421092
        },
        "a-41": {
            "id": "a-41",
            "title": "Button pagination",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-41-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65fae77aa78e53e6aa1056c8|ca277c65-b7cb-e863-65cf-e4f77f8443c3"
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-41-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "65fae77aa78e53e6aa1056c8|ca277c65-b7cb-e863-65cf-e4f77f8443c8"
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-41-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": true,
                            "id": "65fae77aa78e53e6aa1056c8|ca277c65-b7cb-e863-65cf-e4f77f8443c3"
                        },
                        "globalSwatchId": "--tea-green",
                        "rValue": 216,
                        "bValue": 182,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-41-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "id": "65fae77aa78e53e6aa1056c8|ca277c65-b7cb-e863-65cf-e4f77f8443c8"
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1713085421092
        },
        "a-42": {
            "id": "a-42",
            "title": "Button pagination 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": true,
                            "id": "65fae77aa78e53e6aa1056c8|ca277c65-b7cb-e863-65cf-e4f77f8443c7"
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-42-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "id": "65fae77aa78e53e6aa1056c8|ca277c65-b7cb-e863-65cf-e4f77f8443c8"
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1713085421092
        },
        "a-47": {
            "id": "a-47",
            "title": "Husky hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-47-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".white",
                            "selectorGuids": ["b670f2ec-b920-1d2c-fdf5-7c71640f1311"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-47-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "selector": ".white",
                            "selectorGuids": ["b670f2ec-b920-1d2c-fdf5-7c71640f1311"]
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1714309321911
        },
        "a-48": {
            "id": "a-48",
            "title": "Husky hover 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-48-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "selector": ".white",
                            "selectorGuids": ["b670f2ec-b920-1d2c-fdf5-7c71640f1311"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1714309321911
        },
        "a-49": {
            "id": "a-49",
            "title": "Featured article hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-49-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".image-55",
                            "selectorGuids": ["9c1809ba-fd2b-cc23-d139-6a1be6cebfb8"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-49-n-9",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-4.featured",
                            "selectorGuids": ["8de61574-8f9c-df13-f8cb-2e30ae706379", "217d4817-6dcb-8eab-de3e-e2913f051079"]
                        },
                        "globalSwatchId": "--pig-pink",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 211,
                        "aValue": 1
                    }
                }, {
                    "id": "a-49-n-7",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured-article-2",
                            "selectorGuids": ["1b719065-5ef6-3207-a879-4ae6ad37ec69"]
                        },
                        "globalSwatchId": "--pig-pink",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 211,
                        "aValue": 1
                    }
                }, {
                    "id": "a-49-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".div-block-111",
                            "selectorGuids": ["abd9a96d-8445-a4b4-a1c4-7cadbb0c2b9c"]
                        },
                        "widthValue": 80,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-49-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "selector": ".image-55",
                            "selectorGuids": ["9c1809ba-fd2b-cc23-d139-6a1be6cebfb8"]
                        },
                        "xValue": -10,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-49-n-10",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-4.featured",
                            "selectorGuids": ["8de61574-8f9c-df13-f8cb-2e30ae706379", "217d4817-6dcb-8eab-de3e-e2913f051079"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-49-n-8",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured-article-2",
                            "selectorGuids": ["1b719065-5ef6-3207-a879-4ae6ad37ec69"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-49-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".div-block-111",
                            "selectorGuids": ["abd9a96d-8445-a4b4-a1c4-7cadbb0c2b9c"]
                        },
                        "widthValue": 90,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1714316934261
        },
        "a-50": {
            "id": "a-50",
            "title": "Featured article hover 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-50-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "selector": ".image-55",
                            "selectorGuids": ["9c1809ba-fd2b-cc23-d139-6a1be6cebfb8"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-50-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".div-block-111",
                            "selectorGuids": ["abd9a96d-8445-a4b4-a1c4-7cadbb0c2b9c"]
                        },
                        "widthValue": 80,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-50-n-3",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-4.featured",
                            "selectorGuids": ["8de61574-8f9c-df13-f8cb-2e30ae706379", "217d4817-6dcb-8eab-de3e-e2913f051079"]
                        },
                        "globalSwatchId": "--pig-pink",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 211,
                        "aValue": 1
                    }
                }, {
                    "id": "a-50-n-2",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured-article-2",
                            "selectorGuids": ["1b719065-5ef6-3207-a879-4ae6ad37ec69"]
                        },
                        "globalSwatchId": "--pig-pink",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 211,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1714316934261
        },
        "a-53": {
            "id": "a-53",
            "title": "Social pop",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-53-n",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-link.social.icon",
                            "selectorGuids": ["5eb4aa78-87c8-a1c1-331e-e2bcab4ab309", "10a51ecb-9e0a-236a-1197-16b5bc2648cc", "5d964ca2-1a3f-de82-5734-0928719d255e"]
                        },
                        "globalSwatchId": "--pig-pink",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 211,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-53-n-2",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-link.social.icon",
                            "selectorGuids": ["5eb4aa78-87c8-a1c1-331e-e2bcab4ab309", "10a51ecb-9e0a-236a-1197-16b5bc2648cc", "5d964ca2-1a3f-de82-5734-0928719d255e"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1717156312568
        },
        "a-54": {
            "id": "a-54",
            "title": "Social pop 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-54-n",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-link.social.icon",
                            "selectorGuids": ["5eb4aa78-87c8-a1c1-331e-e2bcab4ab309", "10a51ecb-9e0a-236a-1197-16b5bc2648cc", "5d964ca2-1a3f-de82-5734-0928719d255e"]
                        },
                        "globalSwatchId": "--pig-pink",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 211,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1717156312568
        },
        "a-45": {
            "id": "a-45",
            "title": "Hover speaking 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-45-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".speaking-text",
                            "selectorGuids": ["8d3f1717-798c-fd79-855d-3cad5e23c5fb"]
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }, {
                    "id": "a-45-n-9",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h7",
                            "selectorGuids": ["42c4d99a-8f3f-a147-12b7-c3b68a54a367"]
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }, {
                    "id": "a-45-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".div-block-109-copy",
                            "selectorGuids": ["3583a7c7-200b-ed3f-0148-21f044c4f915"]
                        },
                        "widthValue": 70,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-45-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".speaking-text",
                            "selectorGuids": ["8d3f1717-798c-fd79-855d-3cad5e23c5fb"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-45-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".speaking-text",
                            "selectorGuids": ["8d3f1717-798c-fd79-855d-3cad5e23c5fb"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-45-n-10",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h7",
                            "selectorGuids": ["42c4d99a-8f3f-a147-12b7-c3b68a54a367"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-45-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".div-block-109-copy",
                            "selectorGuids": ["3583a7c7-200b-ed3f-0148-21f044c4f915"]
                        },
                        "widthValue": 80,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-45-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".speaking-text",
                            "selectorGuids": ["8d3f1717-798c-fd79-855d-3cad5e23c5fb"]
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1713425039016
        },
        "a-46": {
            "id": "a-46",
            "title": "Hover speaking 6",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-46-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".speaking-text",
                            "selectorGuids": ["8d3f1717-798c-fd79-855d-3cad5e23c5fb"]
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }, {
                    "id": "a-46-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h7",
                            "selectorGuids": ["42c4d99a-8f3f-a147-12b7-c3b68a54a367"]
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }, {
                    "id": "a-46-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".div-block-109-copy",
                            "selectorGuids": ["3583a7c7-200b-ed3f-0148-21f044c4f915"]
                        },
                        "widthValue": 60,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-46-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".speaking-text",
                            "selectorGuids": ["8d3f1717-798c-fd79-855d-3cad5e23c5fb"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1713425039016
        },
        "a-51": {
            "id": "a-51",
            "title": "Blog hover 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-51-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".short-summary-article",
                            "selectorGuids": ["5f03c624-dcfd-cde9-3e13-4c3c0921ddaa"]
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }, {
                    "id": "a-51-n-13",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "boundaryMode": true,
                            "id": "65fae77aa78e53e6aa1056e6|2ab6d575-3228-1d27-3cbe-ea02910bc626"
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-51-n-11",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".estimated-reading-time",
                            "selectorGuids": ["bd287c93-f099-2a5b-2954-977b72e6f476"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-51-n-9",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".estimated-reading-time",
                            "selectorGuids": ["bd287c93-f099-2a5b-2954-977b72e6f476"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-51-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h5---blog",
                            "selectorGuids": ["2866efd6-f122-e3fd-3887-65fbab965b38"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-51-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".short-summary-article",
                            "selectorGuids": ["5f03c624-dcfd-cde9-3e13-4c3c0921ddaa"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-51-n-14",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "boundaryMode": true,
                            "id": "65fae77aa78e53e6aa1056e6|2ab6d575-3228-1d27-3cbe-ea02910bc626"
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }, {
                    "id": "a-51-n-12",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".estimated-reading-time",
                            "selectorGuids": ["bd287c93-f099-2a5b-2954-977b72e6f476"]
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }, {
                    "id": "a-51-n-10",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".estimated-reading-time",
                            "selectorGuids": ["bd287c93-f099-2a5b-2954-977b72e6f476"]
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }, {
                    "id": "a-51-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h5---blog",
                            "selectorGuids": ["2866efd6-f122-e3fd-3887-65fbab965b38"]
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1710678727267
        },
        "a-52": {
            "id": "a-52",
            "title": "Blog hover 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-52-n-5",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".estimated-reading-time",
                            "selectorGuids": ["bd287c93-f099-2a5b-2954-977b72e6f476"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-52-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "boundaryMode": true,
                            "id": "65fae77aa78e53e6aa1056e6|2ab6d575-3228-1d27-3cbe-ea02910bc626"
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-52-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".estimated-reading-time",
                            "selectorGuids": ["bd287c93-f099-2a5b-2954-977b72e6f476"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-52-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h5---blog",
                            "selectorGuids": ["2866efd6-f122-e3fd-3887-65fbab965b38"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-52-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".short-summary-article",
                            "selectorGuids": ["5f03c624-dcfd-cde9-3e13-4c3c0921ddaa"]
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710678727267
        },
        "a-55": {
            "id": "a-55",
            "title": "Featured article hover 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-55-n-2",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-4.featured",
                            "selectorGuids": ["8de61574-8f9c-df13-f8cb-2e30ae706379", "217d4817-6dcb-8eab-de3e-e2913f051079"]
                        },
                        "globalSwatchId": "--pig-pink",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 211,
                        "aValue": 1
                    }
                }, {
                    "id": "a-55-n-3",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured-article-2",
                            "selectorGuids": ["1b719065-5ef6-3207-a879-4ae6ad37ec69"]
                        },
                        "globalSwatchId": "--pig-pink",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 211,
                        "aValue": 1
                    }
                }, {
                    "id": "a-55-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".div-block-111",
                            "selectorGuids": ["abd9a96d-8445-a4b4-a1c4-7cadbb0c2b9c"]
                        },
                        "widthValue": 80,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-55-n-6",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-4.featured",
                            "selectorGuids": ["8de61574-8f9c-df13-f8cb-2e30ae706379", "217d4817-6dcb-8eab-de3e-e2913f051079"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-55-n-7",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured-article-2",
                            "selectorGuids": ["1b719065-5ef6-3207-a879-4ae6ad37ec69"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-55-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".div-block-111",
                            "selectorGuids": ["abd9a96d-8445-a4b4-a1c4-7cadbb0c2b9c"]
                        },
                        "widthValue": 90,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1714316934261
        },
        "a-56": {
            "id": "a-56",
            "title": "Featured article hover 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-56-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".div-block-111",
                            "selectorGuids": ["abd9a96d-8445-a4b4-a1c4-7cadbb0c2b9c"]
                        },
                        "widthValue": 80,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-56-n-3",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-4.featured",
                            "selectorGuids": ["8de61574-8f9c-df13-f8cb-2e30ae706379", "217d4817-6dcb-8eab-de3e-e2913f051079"]
                        },
                        "globalSwatchId": "--pig-pink",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 211,
                        "aValue": 1
                    }
                }, {
                    "id": "a-56-n-4",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured-article-2",
                            "selectorGuids": ["1b719065-5ef6-3207-a879-4ae6ad37ec69"]
                        },
                        "globalSwatchId": "--pig-pink",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 211,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1714316934261
        },
        "a-39": {
            "id": "a-39",
            "title": "Blog articles hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-39-n-18",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".short-summary-article",
                            "selectorGuids": ["5f03c624-dcfd-cde9-3e13-4c3c0921ddaa"]
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }, {
                    "id": "a-39-n-30",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h5---blog",
                            "selectorGuids": ["2866efd6-f122-e3fd-3887-65fbab965b38"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-39-n-28",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".estimated-reading-time",
                            "selectorGuids": ["bd287c93-f099-2a5b-2954-977b72e6f476"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-39-n-24",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "boundaryMode": true,
                            "id": "65fae77aa78e53e6aa1056c8|47cfda43-edee-09be-953c-544ebbdcd4bd"
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-39-n-20",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".estimated-reading-time",
                            "selectorGuids": ["bd287c93-f099-2a5b-2954-977b72e6f476"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-39-n-23",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".short-summary-article",
                            "selectorGuids": ["5f03c624-dcfd-cde9-3e13-4c3c0921ddaa"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-39-n-31",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h5---blog",
                            "selectorGuids": ["2866efd6-f122-e3fd-3887-65fbab965b38"]
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }, {
                    "id": "a-39-n-29",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".estimated-reading-time",
                            "selectorGuids": ["bd287c93-f099-2a5b-2954-977b72e6f476"]
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }, {
                    "id": "a-39-n-21",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".estimated-reading-time",
                            "selectorGuids": ["bd287c93-f099-2a5b-2954-977b72e6f476"]
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }, {
                    "id": "a-39-n-25",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "boundaryMode": true,
                            "id": "65fae77aa78e53e6aa1056c8|47cfda43-edee-09be-953c-544ebbdcd4bd"
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1710678727267
        },
        "a-59": {
            "id": "a-59",
            "title": "Blog articles hover out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-59-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".short-summary-article",
                            "selectorGuids": ["5f03c624-dcfd-cde9-3e13-4c3c0921ddaa"]
                        },
                        "globalSwatchId": "--seashell",
                        "rValue": 255,
                        "bValue": 243,
                        "gValue": 247,
                        "aValue": 1
                    }
                }, {
                    "id": "a-59-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h5---blog",
                            "selectorGuids": ["2866efd6-f122-e3fd-3887-65fbab965b38"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-59-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".estimated-reading-time",
                            "selectorGuids": ["bd287c93-f099-2a5b-2954-977b72e6f476"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-59-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "boundaryMode": true,
                            "id": "65fae77aa78e53e6aa1056c8|47cfda43-edee-09be-953c-544ebbdcd4bd"
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-59-n-5",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".estimated-reading-time",
                            "selectorGuids": ["bd287c93-f099-2a5b-2954-977b72e6f476"]
                        },
                        "globalSwatchId": "--night-rider",
                        "rValue": 51,
                        "bValue": 46,
                        "gValue": 46,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710678727267
        },
        "pop": {
            "id": "pop",
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 250,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0.7500000000000001,
                        "yValue": 0.7500000000000001
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outElastic",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 1,
                        "yValue": 1
                    }
                }]
            }]
        },
        "growIn": {
            "id": "growIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0.7500000000000001,
                        "yValue": 0.7500000000000001
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 1,
                        "yValue": 1
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "slideInBottom": {
            "id": "slideInBottom",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "spinInCounterClockwise": {
            "id": "spinInCounterClockwise",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "zValue": 900,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "slideInLeft": {
            "id": "slideInLeft",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": -100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "jiggle": {
            "id": "jiggle",
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": -5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": 5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": -5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": 5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": -5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": 5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": -5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": 5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": -5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": 5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }]
        },
        "jello": {
            "id": "jello",
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 100,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": -12,
                        "yValue": -12,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "outElastic",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }]
        },
        "slideInTop": {
            "id": "slideInTop",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "flipInBottom": {
            "id": "flipInBottom",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": -90,
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "fadeIn": {
            "id": "fadeIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
