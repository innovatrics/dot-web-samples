var Cg = Object.defineProperty;
var dg = (t, o, e) => o in t ? Cg(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var D = (t, o, e) => (dg(t, typeof o != "symbol" ? o + "" : o, e), e), sa = (t, o, e) => {
  if (!o.has(t))
    throw TypeError("Cannot " + e);
};
var xo = (t, o, e) => (sa(t, o, "read from private field"), e ? e.call(t) : o.get(t)), ga = (t, o, e) => {
  if (o.has(t))
    throw TypeError("Cannot add the same private member more than once");
  o instanceof WeakSet ? o.add(t) : o.set(t, e);
}, ca = (t, o, e, n) => (sa(t, o, "write to private field"), n ? n.call(t, e) : o.set(t, e), e);
var Vn, k, A0, p0, Zt, xa, h0, So, m0, Wn = {}, b0 = [], fg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Li = Array.isArray;
function It(t, o) {
  for (var e in o)
    t[e] = o[e];
  return t;
}
function y0(t) {
  var o = t.parentNode;
  o && o.removeChild(t);
}
function be(t, o, e) {
  var n, i, r, a = {};
  for (r in o)
    r == "key" ? n = o[r] : r == "ref" ? i = o[r] : a[r] = o[r];
  if (arguments.length > 2 && (a.children = arguments.length > 10933 + 2186 * -5 ? Vn.call(arguments, 3374 + 2 * -2048 + -1 * -724) : e), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      void (3546 * -1 + 2551 * 1 + 995) === a[r] && (a[r] = t.defaultProps[r]);
  return Gn(t, a, n, i, null);
}
function Gn(t, o, e, n, i) {
  var r = {};
  r.type = t, r.props = o, r.key = e, r.ref = n, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (754 + 4037 * -1 + 3283), r.__c = null, r.constructor = void (-1860 + 5 * -662 + -470 * -11), r.__v = i ?? ++A0, r.__i = -(-800 * -2 + -5 * -1207 + -7634), r.__u = 0;
  var a = r;
  return i == null && k.vnode != null && k.vnode(a), a;
}
function Ag() {
  var t = {};
  return t.current = null, t;
}
function Xe(t) {
  return t.children;
}
function Pe(t, o) {
  this.props = t, this.context = o;
}
function qt(t, o) {
  if (o == null)
    return t.__ ? qt(t.__, t.__i + 1) : null;
  for (var e; o < t.__k.length; o++)
    if ((e = t.__k[o]) != null && e.__e != null)
      return e.__e;
  return typeof t.type == "function" ? qt(t) : null;
}
function v0(t) {
  var o, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, o = -8307 + 678 * 7 + 1187 * 3; o < t.__k.length; o++)
      if ((e = t.__k[o]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return v0(t);
  }
}
function Go(t) {
  (!t.__d && (t.__d = !(154 * -63 + -5121 + 1 * 14823)) && Zt.push(t) && !vi.__r++ || xa !== k.debounceRendering) && ((xa = k.debounceRendering) || h0)(vi);
}
function vi() {
  var t, o, e, n, i, r, a, s, g;
  for (Zt.sort(So); t = Zt.shift(); )
    t.__d && (o = Zt.length, n = void (-1 * -973 + -2207 * -3 + -7594), r = (i = (e = t).__v).__e, s = [], g = [], (a = e.__P) && ((n = It({}, i)).__v = i.__v + (-5297 + 883 * 6), k.vnode && k.vnode(n), gr(a, n, i, e.__n, void (-8301 + -5 * -821 + 4 * 1049) !== a.ownerSVGElement, -369 * 6 + 3881 + -1635 & i.__u ? [r] : null, s, r ?? qt(i), !!(32 & i.__u), g), n.__.__k[n.__i] = n, S0(s, n, g), n.__e != r && v0(n)), Zt.length > o && Zt.sort(So));
  vi.__r = 0;
}
function w0(t, o, e, n, i, r, a, s, g, I, C) {
  var u, p, A, v, B, K = n && n.__k || b0, G = o.length;
  for (e.__d = g, pg(e, o, K), g = e.__d, u = 0; u < G; u++)
    (A = e.__k[u]) != null && typeof A != "boolean" && typeof A != "function" && (p = -(3946 + 2 * -4166 + 1 * 4387) === A.__i ? Wn : K[A.__i] || Wn, A.__i = u, gr(t, A, p, i, r, a, s, g, I, C), v = A.__e, A.ref && p.ref != A.ref && (p.ref && cr(p.ref, null, A), C.push(A.ref, A.__c || v, A)), B == null && v != null && (B = v), -62690 + 17 * 1857 + 96657 & A.__u || p.__k === A.__k ? g = B0(A, g, t) : typeof A.type == "function" && void (9524 + 1 * -1138 + -8386) !== A.__d ? g = A.__d : v && (g = v.nextSibling), A.__d = void (8509 * -1 + 291 + 8218), A.__u &= -(2039 * 118 + -946 * -281 + -5079 * 61));
  e.__d = g, e.__e = B;
}
function pg(t, o, e) {
  var n, i, r, a, s, g = o.length, I = e.length, C = I, u = 219 + -6263 * 1 + 6044;
  for (t.__k = [], n = 10691 + -10691 * 1; n < g; n++)
    (i = t.__k[n] = (i = o[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? Gn(null, i, null, null, i) : Li(i) ? Gn(Xe, { children: i }, null, null, null) : void (-2043 * -3 + -4088 + -1 * 2041) === i.constructor && i.__b > -18169 + -18169 * -1 ? Gn(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = t, i.__b = t.__b + (-1 * 2545 + 2031 * -2 + 6608), s = hg(i, e, a = n + u, C), i.__i = s, r = null, s !== -1 && (C--, (r = e[s]) && (r.__u |= 89035 * -1 + 527 * -185 + 317602)), r == null || r.__v === null ? (-(1697 + -1 * 9883 + 8187) == s && u--, typeof i.type != "function" && (i.__u |= -49573 * -2 + 127220 + -160830)) : s !== a && (s === a + (-4789 + 4 * -657 + 7418) ? u++ : s > a ? C > g - a ? u += s - a : u-- : u = s < a && s == a - (12503 + -1786 * 7) ? s - a : 87 * -44 + -3 * 1336 + -3918 * -2, s !== n + u && (i.__u |= -104773 + -2333 * -73))) : (r = e[n]) && r.key == null && r.__e && (r.__e == t.__d && (t.__d = qt(r)), Zo(r, r, !(1 * 7439 + -1671 + 79 * -73)), e[n] = null, C--);
  if (C)
    for (n = -9204 + -329 * 13 + 13481; n < I; n++)
      (r = e[n]) != null && -1489 * -2 + 8397 + -11375 == (2447 * 7 + -221679 + 335622 & r.__u) && (r.__e == t.__d && (t.__d = qt(r)), Zo(r, r));
}
function B0(t, o, e) {
  var n, i;
  if (typeof t.type == "function") {
    for (n = t.__k, i = 6181 + -1 * 6181; n && i < n.length; i++)
      n[i] && (n[i].__ = t, o = B0(n[i], o, e));
    return o;
  }
  return t.__e != o && (e.insertBefore(t.__e, o || null), o = t.__e), o && o.nextSibling;
}
function lt(t, o) {
  return o = o || [], t == null || typeof t == "boolean" || (Li(t) ? t.some(function(e) {
    lt(e, o);
  }) : o.push(t)), o;
}
function hg(t, o, e, n) {
  var i = t.key, r = t.type, a = e - (-9449 + -1301 * 1 + 10751), s = e + (-1 * 6953 + -8672 + -1202 * -13), g = o[e];
  if (g === null || g && i == g.key && r === g.type)
    return e;
  if (n > (g != null && 4996 + -25 * 374 + 4354 == (24419 * -10 + 8803 * -13 + 489701 & g.__u) ? 344 * -20 + 1 * 1826 + 5055 : -1 * 122 + -11 * -377 + -4025))
    for (; a >= 6949 + -279 * -14 + 5 * -2171 || s < o.length; ) {
      if (a >= -2762 + -564 * -8 + -1750) {
        if ((g = o[a]) && 1 * -7944 + -6794 + 14738 == (313741 + -37 * 4937 & g.__u) && i == g.key && r === g.type)
          return a;
        a--;
      }
      if (s < o.length) {
        if ((g = o[s]) && !(22664 + 1 * 108408 & g.__u) && i == g.key && r === g.type)
          return s;
        s++;
      }
    }
  return -(65 * 22 + 5 * 1340 + 8129 * -1);
}
function Ia(t, o, e) {
  o[1123 * -1 + -9315 + 2 * 5219] === "-" ? t.setProperty(o, e ?? "") : t[o] = e == null ? "" : typeof e != "number" || fg.test(o) ? e : e + "px";
}
function $n(t, o, e, n, i) {
  var r;
  e:
    if (o === "style")
      if (typeof e == "string")
        t.style.cssText = e;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (o in n)
            e && o in e || Ia(t.style, o, "");
        if (e)
          for (o in e)
            n && e[o] === n[o] || Ia(t.style, o, e[o]);
      }
    else if (o[4 * 238 + -4 * -1156 + -136 * 41] === "o" && o[-4796 + -67 * 54 + 2805 * 3] === "n")
      r = o !== (o = o.replace(/(PointerCapture)$|Capture$/, "$1")), o = o.toLowerCase() in t ? o.toLowerCase().slice(-11 * 738 + 4 * 1423 + 2428) : o.slice(8015 + 11 * 562 + -14195), t.l || (t.l = {}), t.l[o + r] = e, e ? n ? e.u = n.u : (e.u = Date.now(), t.addEventListener(o, r ? ua : la, r)) : t.removeEventListener(o, r ? ua : la, r);
    else {
      if (i)
        o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (o !== "width" && o !== "height" && o !== "href" && o !== "list" && o !== "form" && o !== "tabIndex" && o !== "download" && o !== "rowSpan" && o !== "colSpan" && o !== "role" && o in t)
        try {
          t[o] = e ?? "";
          break e;
        } catch {
        }
      typeof e == "function" || (e == null || !(16151 + 85 * -190) === e && o[-1 * 1567 + 7831 + -5 * 1252] !== "-" ? t.removeAttribute(o) : t.setAttribute(o, e));
    }
}
function la(t) {
  var o = this.l[t.type + !1];
  if (t.t) {
    if (t.t <= o.u)
      return;
  } else
    t.t = Date.now();
  return o(k.event ? k.event(t) : t);
}
function ua(t) {
  return this.l[t.type + !(-683 + -1 * -683)](k.event ? k.event(t) : t);
}
function gr(t, o, e, n, i, r, a, s, g, I) {
  var C, u, p, A, v, B, K, G, w, E, $, X, U, W, ne, _ = o.type;
  if (void (-5717 + 4944 * 1 + -773 * -1) !== o.constructor)
    return null;
  39 * 27 + -1 * -3635 + -60 * 76 & e.__u && (g = !!(-7 * 596 + 9902 + -5698 & e.__u), r = [s = o.__e = e.__e]), (C = k.__b) && C(o);
  e:
    if (typeof _ == "function")
      try {
        if (G = o.props, w = (C = _.contextType) && n[C.__c], E = C ? w ? w.props.value : C.__ : n, e.__c ? K = (u = o.__c = e.__c).__ = u.__E : ("prototype" in _ && _.prototype.render ? o.__c = u = new _(G, E) : (o.__c = u = new Pe(G, E), u.constructor = _, u.render = bg), w && w.sub(u), u.props = G, u.state || (u.state = {}), u.context = E, u.__n = n, p = u.__d = !(47 * 211 + -122 * 79 + -279), u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), _.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = It({}, u.__s)), It(u.__s, _.getDerivedStateFromProps(G, u.__s))), A = u.props, v = u.state, u.__v = o, p)
          _.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (_.getDerivedStateFromProps == null && G !== A && u.componentWillReceiveProps != null && u.componentWillReceiveProps(G, E), !u.__e && (u.shouldComponentUpdate != null && !(-1994 + 133 * 15) === u.shouldComponentUpdate(G, u.__s, E) || o.__v === e.__v)) {
            for (o.__v !== e.__v && (u.props = G, u.state = u.__s, u.__d = !(-4938 + 1141 * -3 + 8362)), o.__e = e.__e, o.__k = e.__k, o.__k.forEach(function(re) {
              re && (re.__ = o);
            }), $ = -909 * 6 + 3359 + 2095; $ < u._sb.length; $++)
              u.__h.push(u._sb[$]);
            u._sb = [], u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(G, u.__s, E), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(A, v, B);
          });
        }
        if (u.context = E, u.props = G, u.__P = t, u.__e = !(-1915 * -1 + 7510 + 496 * -19), X = k.__r, U = 2535 + 20 * -419 + 5845, "prototype" in _ && _.prototype.render) {
          for (u.state = u.__s, u.__d = !(-25 * -326 + -8667 + 37 * 14), X && X(o), C = u.render(u.props, u.state, u.context), W = -9276 + 7585 * 1 + 1691; W < u._sb.length; W++)
            u.__h.push(u._sb[W]);
          u._sb = [];
        } else
          do
            u.__d = !(2 * -2846 + 68 * -127 + 14329), X && X(o), C = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++U < -1987 + -1 * 287 + 2299);
        u.state = u.__s, u.getChildContext != null && (n = It(It({}, n), u.getChildContext())), p || u.getSnapshotBeforeUpdate == null || (B = u.getSnapshotBeforeUpdate(A, v)), w0(t, Li(ne = C != null && C.type === Xe && C.key == null ? C.props.children : C) ? ne : [ne], o, e, n, i, r, a, s, g, I), u.base = o.__e, o.__u &= -(2140 + -1 * 4103 + 2124), u.__h.length && a.push(u), K && (u.__E = u.__ = null);
      } catch (re) {
        o.__v = null, g || r != null ? (o.__e = s, o.__u |= g ? 1 * -6763 + 23 * -134 + 435 * 23 : 338 + 153 * -2, r[r.indexOf(s)] = null) : (o.__e = e.__e, o.__k = e.__k), k.__e(re, o, e);
      }
    else
      r == null && o.__v === e.__v ? (o.__k = e.__k, o.__e = e.__e) : o.__e = mg(e.__e, o, e, n, i, r, a, g, I);
  (C = k.diffed) && C(o);
}
function S0(t, o, e) {
  o.__d = void (-713 * 12 + 2099 + 6457);
  for (var n = -509 * -1 + -8 * 624 + 1 * 4483; n < e.length; n++)
    cr(e[n], e[++n], e[++n]);
  k.__c && k.__c(o, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      k.__e(r, i.__v);
    }
  });
}
function mg(t, o, e, n, i, r, a, s, g) {
  var I, C, u, p, A, v, B, K = e.props, G = o.props, w = o.type;
  if (w === "svg" && (i = !(-8699 * 1 + 6170 + -9 * -281)), r != null) {
    for (I = 0; I < r.length; I++)
      if ((A = r[I]) && "setAttribute" in A == !!w && (w ? A.localName === w : -7800 + -3 * -2601 === A.nodeType)) {
        t = A, r[I] = null;
        break;
      }
  }
  if (t == null) {
    if (w === null)
      return document.createTextNode(G);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", w) : document.createElement(w, G.is && G), r = null, s = !(-2335 * 4 + -5161 + -6 * -2417);
  }
  if (w === null)
    K === G || s && t.data === G || (t.data = G);
  else {
    if (r = r && Vn.call(t.childNodes), K = e.props || Wn, !s && r != null)
      for (K = {}, I = 0; I < t.attributes.length; I++)
        K[(A = t.attributes[I]).name] = A.value;
    for (I in K)
      A = K[I], I == "children" || (I == "dangerouslySetInnerHTML" ? u = A : I === "key" || I in G || $n(t, I, null, A, i));
    for (I in G)
      A = G[I], I == "children" ? p = A : I == "dangerouslySetInnerHTML" ? C = A : I == "value" ? v = A : I == "checked" ? B = A : I === "key" || s && typeof A != "function" || K[I] === A || $n(t, I, A, K[I], i);
    if (C)
      s || u && (C.__html === u.__html || C.__html === t.innerHTML) || (t.innerHTML = C.__html), o.__k = [];
    else if (u && (t.innerHTML = ""), w0(t, Li(p) ? p : [p], o, e, n, i && w !== "foreignObject", r, a, r ? r[8182 * 1 + 2206 * -1 + -5976] : e.__k && qt(e, -6 * 827 + -3 * -948 + 2118), s, g), r != null)
      for (I = r.length; I--; )
        r[I] != null && y0(r[I]);
    s || (I = "value", void (-1287 + 39 * 33) !== v && (v !== t[I] || w === "progress" && !v || w === "option" && v !== K[I]) && $n(t, I, v, K[I], !(-6229 + 1684 * -4 + 12966)), I = "checked", void (-6389 + 22 * -71 + 7951) !== B && B !== t[I] && $n(t, I, B, K[I], !(2063 * 1 + -2 * 818 + -71 * 6)));
  }
  return t;
}
function cr(t, o, e) {
  try {
    typeof t == "function" ? t(o) : t.current = o;
  } catch (n) {
    k.__e(n, e);
  }
}
function Zo(t, o, e) {
  var n, i;
  if (k.unmount && k.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || cr(n, null, o)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        k.__e(r, o);
      }
    n.base = n.__P = null, t.__c = void (-8 * 1096 + 1 * -9370 + 3023 * 6);
  }
  if (n = t.__k)
    for (i = -4681 + 374 * -8 + -1 * -7673; i < n.length; i++)
      n[i] && Zo(n[i], o, e || typeof t.type != "function");
  e || t.__e == null || y0(t.__e), t.__ = t.__e = t.__d = void 0;
}
function bg(t, o, e) {
  return this.constructor(t, e);
}
function yt(t, o, e) {
  var n, i, r, a;
  k.__ && k.__(t, o), i = (n = typeof e == "function") ? null : e && e.__k || o.__k, r = [], a = [], gr(o, t = (!n && e || o).__k = be(Xe, null, [t]), i || Wn, Wn, void (4827 + 597 * -14 + -107 * -33) !== o.ownerSVGElement, !n && e ? [e] : i ? null : o.firstChild ? Vn.call(o.childNodes) : null, r, !n && e ? e : i ? i.__e : o.firstChild, n, a), S0(r, t, a);
}
function xr(t, o) {
  yt(t, o, xr);
}
function Ir(t, o, e) {
  var n, i, r, a, s = It({}, t.props);
  for (r in t.type && t.type.defaultProps && (a = t.type.defaultProps), o)
    r == "key" ? n = o[r] : r == "ref" ? i = o[r] : s[r] = void (1 * 5666 + -4140 + -1526) === o[r] && void (-8110 + -1 * -8110) !== a ? a[r] : o[r];
  return arguments.length > -2104 + -18 * -117 && (s.children = arguments.length > 2339 * 4 + 679 * 8 + -14785 ? Vn.call(arguments, 4337 * 2 + 7373 + 1 * -16045) : e), Gn(t.type, s, n || t.key, i || t.ref, null);
}
function lr(t, o) {
  var e = { __c: o = "__cC" + m0++, __: t, Consumer: function(n, i) {
    return n.children(i);
  }, Provider: function(n) {
    var i, r;
    return this.getChildContext || (i = [], (r = {})[o] = this, this.getChildContext = function() {
      return r;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && i.some(function(s) {
        s.__e = !0, Go(s);
      });
    }, this.sub = function(a) {
      i.push(a);
      var s = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        i.splice(i.indexOf(a), 1), s && s.call(a);
      };
    }), n.children;
  } };
  return e.Provider.__ = e.Consumer.contextType = e;
}
Vn = b0.slice, k = { __e: function(t, o, e, n) {
  for (var i, r, a; o = o.__; )
    if ((i = o.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, n || {}), a = i.__d), a)
          return i.__E = i;
      } catch (s) {
        t = s;
      }
  throw t;
} }, A0 = 1119 * -1 + -719 * -3 + -1038, p0 = function(t) {
  return t != null && t.constructor == null;
}, Pe.prototype.setState = function(t, o) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = It({}, this.state), typeof t == "function" && (t = t(It({}, e), this.props)), t && It(e, t), t != null && this.__v && (o && this._sb.push(o), Go(this));
}, Pe.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !(1087 * 7 + -1171 * -1 + 2 * -4390), t && this.__h.push(t), Go(this));
}, Pe.prototype.render = Xe, Zt = [], h0 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, So = function(t, o) {
  return t.__v.__b - o.__v.__b;
}, vi.__r = -10489 + 17 * 617, m0 = -1 * -3716 + -4427 + -9 * -79;
function ur() {
  return (ur = Object.assign ? Object.assign.bind() : function(t) {
    for (var o = 6062 + 1 * 534 + -5 * 1319; o < arguments.length; o++) {
      var e = arguments[o];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }).apply(this, arguments);
}
var yg = ["context", "children"];
function vg(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var o = t.children, e = function(n, i) {
    if (n == null)
      return {};
    var r, a, s = {}, g = Object.keys(n);
    for (a = 2 * -1597 + -4 * -530 + -537 * -2; a < g.length; a++)
      i.indexOf(r = g[a]) >= -9866 + -131 * -73 + -101 * -3 || (s[r] = n[r]);
    return s;
  }(t, yg);
  return Ir(o, e);
}
function wg() {
  var t = {};
  t.detail = {}, t.bubbles = !(-23 * 289 + -2246 * 2 + 11139), t.cancelable = !(1447 * -3 + -4009 + -5 * -1670);
  var o = new CustomEvent("_preact", t);
  this.dispatchEvent(o), this._vdom = be(vg, ur({}, this._props, { context: o.detail.context }), function e(n, i) {
    if (432 * 17 + -8934 + 1593 === n.nodeType)
      return n.data;
    if (1 * -4970 + -9781 * -1 + 10 * -481 !== n.nodeType)
      return null;
    var r = [], a = {}, s = 1845 * -5 + -6 * 821 + -53 * -267, g = n.attributes, I = n.childNodes;
    for (s = g.length; s--; )
      g[s].name !== "slot" && (a[g[s].name] = g[s].value, a[G0(g[s].name)] = g[s].value);
    for (s = I.length; s--; ) {
      var C = e(I[s], null), u = I[s].slot;
      u ? a[u] = be(Ca, { name: u }, C) : r[s] = C;
    }
    var p = i ? be(Ca, null, r) : r;
    return be(i || n.nodeName.toLowerCase(), a, p);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? xr : yt)(this._vdom, this._root);
}
function G0(t) {
  return t.replace(/-(\w)/g, function(o, e) {
    return e ? e.toUpperCase() : "";
  });
}
function Bg(t, o, e) {
  if (this._vdom) {
    var n = {};
    n[t] = e = e ?? void 0, n[G0(t)] = e, this._vdom = Ir(this._vdom, n), yt(this._vdom, this._root);
  }
}
function Sg() {
  yt(this._vdom = null, this._root);
}
function Ca(t, o) {
  var e = this;
  return be("slot", ur({}, t, { ref: function(n) {
    n ? (e.ref = n, e._listener || (e._listener = function(i) {
      i.stopPropagation(), i.detail.context = o;
    }, n.addEventListener("_preact", e._listener))) : e.ref.removeEventListener("_preact", e._listener);
  } }));
}
function Gg(t, o, e, n) {
  function i() {
    var r = Reflect.construct(HTMLElement, [], i);
    return r._vdomComponent = t, r._root = n && n.shadow ? r.attachShadow({ mode: n.mode || "open" }) : r, r;
  }
  return (i.prototype = Object.create(HTMLElement.prototype)).constructor = i, i.prototype.connectedCallback = wg, i.prototype.attributeChangedCallback = Bg, i.prototype.disconnectedCallback = Sg, e = e || t.observedAttributes || Object.keys(t.propTypes || {}), i.observedAttributes = e, e.forEach(function(r) {
    Object.defineProperty(i.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(r, null, a) : (this._props || (this._props = {}), this._props[r] = a, this.connectedCallback());
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(r, a);
    } });
  }), customElements.define(o || t.tagName || t.displayName || t.name, i);
}
var Be = function() {
  return Be = Object.assign || function(o) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (o[r] = e[r]);
    }
    return o;
  }, Be.apply(this, arguments);
};
function en(t, o, e) {
  if (e || arguments.length === 2)
    for (var n = 0, i = o.length, r; n < i; n++)
      (r || !(n in o)) && (r || (r = Array.prototype.slice.call(o, 0, n)), r[n] = o[n]);
  return t.concat(r || Array.prototype.slice.call(o));
}
function Zg(t) {
  var o = Object.create(null);
  return function(e) {
    return o[e] === void 0 && (o[e] = t(e)), o[e];
  };
}
var kg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Hg = Zg(function(t) {
  return kg.test(t) || t.charCodeAt(6969 * -1 + -9963 + 16932) === -1 * -5209 + 1 * -4093 + -3 * 335 && t.charCodeAt(-56 * -58 + -9678 * -1 + -12925 * 1) === -2 * 3682 + 7046 + -1 * -428 && t.charCodeAt(2) < 1 * 5077 + -3067 + -1919;
}), vt, ee, Io, da, tn = 6926 + 1 * -2381 + -4545, Z0 = [], si = [], fa = k.__b, Aa = k.__r, pa = k.diffed, ha = k.__c, ma = k.unmount;
function cn(t, o) {
  k.__h && k.__h(ee, t, tn || o), tn = 5917 * 1 + -358 * -8 + -8781;
  var e = {};
  e.__ = [], e.__h = [];
  var n = ee.__H || (ee.__H = e), i = {};
  return i.__V = si, t >= n.__.length && n.__.push(i), n.__[t];
}
function Le(t) {
  return tn = -2319 * 3 + 3885 + 439 * 7, k0(H0, t);
}
function k0(t, o, e) {
  var n = cn(vt++, 2);
  if (n.t = t, !n.__c && (n.__ = [e ? e(o) : H0(void (-19 * -25 + 43 + -518), o), function(s) {
    var g = n.__N ? n.__N[0] : n.__[0], I = n.t(g, s);
    g !== I && (n.__N = [I, n.__[8401 + -560 * 15]], n.__c.setState({}));
  }], n.__c = ee, !ee.u)) {
    var i = function(s, g, I) {
      if (!n.__c.__H)
        return !0;
      var C = n.__c.__H.__.filter(function(p) {
        return p.__c;
      });
      if (C.every(function(p) {
        return !p.__N;
      }))
        return !r || r.call(this, s, g, I);
      var u = !(692 * -3 + -45 * -159 + -5078);
      return C.forEach(function(p) {
        if (p.__N) {
          var A = p.__[0];
          p.__ = p.__N, p.__N = void 0, A !== p.__[0] && (u = !0);
        }
      }), !(!u && n.__c.props === s) && (!r || r.call(this, s, g, I));
    };
    ee.u = !(4905 + -15 * 327);
    var r = ee.shouldComponentUpdate, a = ee.componentWillUpdate;
    ee.componentWillUpdate = function(s, g, I) {
      if (this.__e) {
        var C = r;
        r = void (-7099 + -229 * -31), i(s, g, I), r = C;
      }
      a && a.call(this, s, g, I);
    }, ee.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function Ae(t, o) {
  var e = cn(vt++, 3);
  !k.__s && Cr(e.__H, o) && (e.__ = t, e.i = o, ee.__H.__h.push(e));
}
function En(t, o) {
  var e = cn(vt++, 4);
  !k.__s && Cr(e.__H, o) && (e.__ = t, e.i = o, ee.__h.push(e));
}
function Pt(t) {
  return tn = -5227 * 1 + 4022 + -242 * -5, ze(function() {
    var o = {};
    return o.current = t, o;
  }, []);
}
function Kg(t, o, e) {
  tn = 1361 * 7 + -3558 + -5963, En(function() {
    return typeof t == "function" ? (t(o()), function() {
      return t(null);
    }) : t ? (t.current = o(), function() {
      return t.current = null;
    }) : void (-3368 * 2 + 1568 + 323 * 16);
  }, e == null ? e : e.concat(t));
}
function ze(t, o) {
  var e = cn(vt++, 7);
  return Cr(e.__H, o) ? (e.__V = t(), e.i = o, e.__h = t, e.__V) : e.__;
}
function wi(t, o) {
  return tn = -1397 * 2 + -8959 + 11761, ze(function() {
    return t;
  }, o);
}
function Yi(t) {
  var o = ee.context[t.__c], e = cn(vt++, 1 * -9049 + 1940 + 7118);
  return e.c = t, o ? (e.__ == null && (e.__ = !(2 * -1208 + 12 * -619 + -4922 * -2), o.sub(ee)), o.props.value) : t.__;
}
function ko(t, o) {
  k.useDebugValue && k.useDebugValue(o ? o(t) : t);
}
function Wg() {
  var t = cn(vt++, 11);
  if (!t.__) {
    for (var o = ee.__v; o !== null && !o.__m && o.__ !== null; )
      o = o.__;
    var e = o.__m || (o.__m = [-1 * -5787 + -6887 + 1100, -226 + -336 * -8 + -2462 * 1]);
    t.__ = "P" + e[-2 * -143 + 2172 + 2458 * -1] + "-" + e[1 * 3077 + 3354 + -2 * 3215]++;
  }
  return t.__;
}
function Og() {
  for (var t; t = Z0.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(gi), t.__H.__h.forEach(Ho), t.__H.__h = [];
      } catch (o) {
        t.__H.__h = [], k.__e(o, t.__v);
      }
}
k.__b = function(t) {
  ee = null, fa && fa(t);
}, k.__r = function(t) {
  Aa && Aa(t), vt = 11919 + 87 * -137;
  var o = (ee = t.__c).__H;
  o && (Io === ee ? (o.__h = [], ee.__h = [], o.__.forEach(function(e) {
    e.__N && (e.__ = e.__N), e.__V = si, e.__N = e.i = void (9391 * -1 + -8715 + 18106);
  })) : (o.__h.forEach(gi), o.__h.forEach(Ho), o.__h = [], vt = 43 * -70 + 2 * 3787 + -4564)), Io = ee;
}, k.diffed = function(t) {
  pa && pa(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (-91 * -34 + 1 * -8114 + 5021 * 1 !== Z0.push(o) && da === k.requestAnimationFrame || ((da = k.requestAnimationFrame) || Rg)(Og)), o.__H.__.forEach(function(e) {
    e.i && (e.__H = e.i), e.__V !== si && (e.__ = e.__V), e.i = void (-9885 + 15 * 659), e.__V = si;
  })), Io = ee = null;
}, k.__c = function(t, o) {
  o.some(function(e) {
    try {
      e.__h.forEach(gi), e.__h = e.__h.filter(function(n) {
        return !n.__ || Ho(n);
      });
    } catch (n) {
      o.some(function(i) {
        i.__h && (i.__h = []);
      }), o = [], k.__e(n, e.__v);
    }
  }), ha && ha(t, o);
}, k.unmount = function(t) {
  ma && ma(t);
  var o, e = t.__c;
  e && e.__H && (e.__H.__.forEach(function(n) {
    try {
      gi(n);
    } catch (i) {
      o = i;
    }
  }), e.__H = void (-1 * 7367 + 2 * -3571 + -11 * -1319), o && k.__e(o, e.__v));
};
var ba = typeof requestAnimationFrame == "function";
function Rg(t) {
  var o, e = function() {
    clearTimeout(n), ba && cancelAnimationFrame(o), setTimeout(t);
  }, n = setTimeout(e, 100);
  ba && (o = requestAnimationFrame(e));
}
function gi(t) {
  var o = ee, e = t.__c;
  typeof e == "function" && (t.__c = void (-3 * -3197 + 1343 * -5 + 2876 * -1), e()), ee = o;
}
function Ho(t) {
  var o = ee;
  t.__c = t.__(), ee = o;
}
function Cr(t, o) {
  return !t || t.length !== o.length || o.some(function(e, n) {
    return e !== t[n];
  });
}
function H0(t, o) {
  return typeof o == "function" ? o(t) : o;
}
function K0(t, o) {
  for (var e in o)
    t[e] = o[e];
  return t;
}
function Ko(t, o) {
  for (var e in t)
    if (e !== "__source" && !(e in o))
      return !(-13007 + -13007 * -1);
  for (var n in o)
    if (n !== "__source" && t[n] !== o[n])
      return !(-9731 + -1807 * -3 + -2155 * -2);
  return !(6570 + 6569 * -1);
}
function Wo(t) {
  this.props = t;
}
function Vg(t, o) {
  function e(i) {
    var r = this.props.ref, a = r == i.ref;
    return !a && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, i) || !a : Ko(this.props, i);
  }
  function n(i) {
    return this.shouldComponentUpdate = e, be(t, i);
  }
  return n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.prototype.isReactComponent = !(-7049 + 232 * -5 + -1 * -8209), n.__f = !(7021 + 1 * 17 + -7038), n;
}
(Wo.prototype = new Pe()).isPureReactComponent = !(7753 * -1 + -8806 + 29 * 571), Wo.prototype.shouldComponentUpdate = function(t, o) {
  return Ko(this.props, t) || Ko(this.state, o);
};
var ya = k.__b;
k.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), ya && ya(t);
};
var Eg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 6587 * -1 + 8712 + 1786;
function W0(t) {
  function o(e) {
    var n = K0({}, e);
    return delete n.ref, t(n, e.ref || null);
  }
  return o.$$typeof = Eg, o.render = o, o.prototype.isReactComponent = o.__f = !(8686 + 2 * -1514 + -5658), o.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", o;
}
var va = function(t, o) {
  return t == null ? null : lt(lt(t).map(o));
}, Pg = { map: va, forEach: va, count: function(t) {
  return t ? lt(t).length : -8747 + 6988 * -1 + 15735;
}, only: function(t) {
  var o = lt(t);
  if (o.length !== 1)
    throw "Children.only";
  return o[-938 * 1 + 1 * -5171 + 6109];
}, toArray: lt }, Lg = k.__e;
k.__e = function(t, o, e, n) {
  if (t.then) {
    for (var i, r = o; r = r.__; )
      if ((i = r.__c) && i.__c)
        return o.__e == null && (o.__e = e.__e, o.__k = e.__k), i.__c(t, o);
  }
  Lg(t, o, e, n);
};
var wa = k.unmount;
function O0(t, o, e) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = K0({}, t)).__c != null && (t.__c.__P === e && (t.__c.__P = o), t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return O0(n, o, e);
  })), t;
}
function R0(t, o, e) {
  return t && e && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return R0(n, o, e);
  }), t.__c && t.__c.__P === o && (t.__e && e.appendChild(t.__e), t.__c.__e = !(5175 + 6194 * 1 + -1 * 11369), t.__c.__P = e)), t;
}
function ci() {
  this.__u = -9259 * 1 + 1077 * 5 + -2 * -1937, this.t = null, this.__b = null;
}
function V0(t) {
  var o = t.__.__c;
  return o && o.__a && o.__a(t);
}
function Yg(t) {
  var o, e, n;
  function i(r) {
    if (o || (o = t()).then(function(a) {
      e = a.default || a;
    }, function(a) {
      n = a;
    }), n)
      throw n;
    if (!e)
      throw o;
    return be(e, r);
  }
  return i.displayName = "Lazy", i.__f = !(10 * -262 + -8819 + 11439), i;
}
function mn() {
  this.u = null, this.o = null;
}
k.unmount = function(t) {
  var o = t.__c;
  o && o.__R && o.__R(), o && 2 * 1922 + -12 * 762 + 5332 & t.__u && (t.type = null), wa && wa(t);
}, (ci.prototype = new Pe()).__c = function(t, o) {
  var e = o.__c, n = this;
  n.t == null && (n.t = []), n.t.push(e);
  var i = V0(n.__v), r = !(647 * -11 + -4904 + 12022), a = function() {
    r || (r = !(1 * -4634 + 5 * -814 + -1088 * -8), e.__R = null, i ? i(s) : s());
  };
  e.__R = a;
  var s = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var g = n.state.__a;
        n.__v.__k[11070 + 738 * -15] = R0(g, g.__c.__P, g.__c.__O);
      }
      var I;
      for (n.setState({ __a: n.__b = null }); I = n.t.pop(); )
        I.forceUpdate();
    }
  };
  n.__u++ || 5656 + 296 * -19 & o.__u || n.setState({ __a: n.__b = n.__v.__k[-4037 + -1 * -6037 + -100 * 20] }), t.then(a, a);
}, ci.prototype.componentWillUnmount = function() {
  this.t = [];
}, ci.prototype.render = function(t, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var e = document.createElement("div"), n = this.__v.__k[-101 * -29 + -3 * -365 + -4024].__c;
      this.__v.__k[13567 + 1 * -13567] = O0(this.__b, e, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = o.__a && be(Xe, null, t.fallback);
  return i && (i.__u &= -(-1 * 9054 + -7628 + -3343 * -5)), [be(Xe, null, o.__a ? null : t.children), i];
};
var Ba = function(t, o, e) {
  if (++e[-757 + 92 * -26 + 42 * 75] === e[-77 * -86 + -1 * -4834 + -11456] && t.o.delete(o), t.props.revealOrder && (t.props.revealOrder[5 * -875 + -55 * 145 + 12350] !== "t" || !t.o.size))
    for (e = t.u; e; ) {
      for (; e.length > -5504 + 77 * 3 + 5276; )
        e.pop()();
      if (e[23 + 22 * -1] < e[118 + 6857 * 1 + -6975])
        break;
      t.u = e = e[-9026 + 72 * 82 + 3124];
    }
};
function Tg(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function Ng(t) {
  var o = this, e = t.i;
  o.componentWillUnmount = function() {
    yt(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== e && o.componentWillUnmount(), o.l || (o.i = e, o.l = { nodeType: 1, parentNode: e, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), o.i.appendChild(n);
  }, insertBefore: function(n, i) {
    this.childNodes.push(n), o.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> -5766 + -2543 * 2 + 10853, 1 * -8614 + -5 * -1601 + 610), o.i.removeChild(n);
  } }), yt(be(Tg, { context: o.context }, t.__v), o.l);
}
function Dg(t, o) {
  var e = {};
  e.__v = t, e.i = o;
  var n = be(Ng, e);
  return n.containerInfo = o, n;
}
(mn.prototype = new Pe()).__a = function(t) {
  var o = this, e = V0(o.__v), n = o.o.get(t);
  return n[-9373 + -103 * -91]++, function(i) {
    var r = function() {
      o.props.revealOrder ? (n.push(i), Ba(o, t, n)) : i();
    };
    e ? e(r) : r();
  };
}, mn.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = lt(t.children);
  t.revealOrder && t.revealOrder[-8396 + 122 * 3 + 8030] === "b" && o.reverse();
  for (var e = o.length; e--; )
    this.o.set(o[e], this.u = [-491 * 1 + 3874 + -1691 * 2, 23 * 106 + -91 * 90 + -8 * -719, this.u]);
  return t.children;
}, mn.prototype.componentDidUpdate = mn.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(o, e) {
    Ba(t, e, o);
  });
};
var E0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -39322 + 99425 * 1, Fg = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Xg = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, jg = /[A-Z0-9]/g, Mg = typeof document < "u", Ug = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function Jg(t, o, e) {
  return o.__k == null && (o.textContent = ""), yt(t, o), typeof e == "function" && e(), t ? t.__c : null;
}
function Qg(t, o, e) {
  return xr(t, o), typeof e == "function" && e(), t ? t.__c : null;
}
Pe.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(Pe.prototype, t, { configurable: !(-6143 + 44 * 29 + 1 * 4867), get: function() {
    return this["UNSAFE_" + t];
  }, set: function(o) {
    var e = {};
    e.configurable = !(-5149 + 72 * 25 + -197 * -17), e.writable = !(-467 * -7 + 1 * 9059 + -92 * 134), e.value = o, Object.defineProperty(this, t, e);
  } });
});
var Sa = k.event;
function zg() {
}
function $g() {
  return this.cancelBubble;
}
function _g() {
  return this.defaultPrevented;
}
k.event = function(t) {
  return Sa && (t = Sa(t)), t.persist = zg, t.isPropagationStopped = $g, t.isDefaultPrevented = _g, t.nativeEvent = t;
};
var xi = {};
xi.enumerable = !(103 * -33 + -7481 + -3 * -3627), xi.configurable = !(-1 * -7517 + -1255 * -1 + -2924 * 3), xi.get = function() {
  return this.class;
};
var dr, qg = xi, Ga = k.vnode;
k.vnode = function(t) {
  typeof t.type == "string" && function(o) {
    var e = o.props, n = o.type, i = {};
    for (var r in e) {
      var a = e[r];
      if (!(r === "value" && "defaultValue" in e && a == null || Mg && r === "children" && n === "noscript" || r === "class" || r === "className")) {
        var s = r.toLowerCase();
        r === "defaultValue" && "value" in e && e.value == null ? r = "value" : r === "download" && !(32 * 11 + 103 * 69 + -7459) === a ? a = "" : s === "ondoubleclick" ? r = "ondblclick" : s !== "onchange" || n !== "input" && n !== "textarea" || Ug(e.type) ? s === "onfocus" ? r = "onfocusin" : s === "onblur" ? r = "onfocusout" : Xg.test(r) ? r = s : -(1 * -9277 + 1 * -2785 + 12063 * 1) === n.indexOf("-") && Fg.test(r) ? r = r.replace(jg, "-$&").toLowerCase() : a === null && (a = void (-23 * -10 + -133 * 63 + 8149 * 1)) : s = r = "oninput", s === "oninput" && i[r = s] && (r = "oninputCapture"), i[r] = a;
      }
    }
    n == "select" && i.multiple && Array.isArray(i.value) && (i.value = lt(e.children).forEach(function(g) {
      g.props.selected = -(3899 + 1 * 9739 + -13637 * 1) != i.value.indexOf(g.props.value);
    })), n == "select" && i.defaultValue != null && (i.value = lt(e.children).forEach(function(g) {
      g.props.selected = i.multiple ? -(3088 + -21 * 147) != i.defaultValue.indexOf(g.props.value) : i.defaultValue == g.props.value;
    })), e.class && !e.className ? (i.class = e.class, Object.defineProperty(i, "className", qg)) : (e.className && !e.class || e.class && e.className) && (i.class = i.className = e.className), o.props = i;
  }(t), t.$$typeof = E0, Ga && Ga(t);
};
var Za = k.__r;
k.__r = function(t) {
  Za && Za(t), dr = t.__c;
};
var ka = k.diffed;
k.diffed = function(t) {
  ka && ka(t);
  var o = t.props, e = t.__e;
  e != null && t.type === "textarea" && "value" in o && o.value !== e.value && (e.value = o.value == null ? "" : o.value), dr = null;
};
var P0 = {};
P0.readContext = function(t) {
  return dr.__n[t.__c].props.value;
};
var L0 = {};
L0.current = P0;
var Y0 = {};
Y0.ReactCurrentDispatcher = L0;
var ec = Y0;
function tc(t) {
  return be.bind(null, t);
}
function Ti(t) {
  return !!t && t.$$typeof === E0;
}
function nc(t) {
  return Ti(t) && t.type === Xe;
}
function ic(t) {
  return Ti(t) ? Ir.apply(null, arguments) : t;
}
function oc(t) {
  return !!t.__k && (yt(null, t), !(8267 + -14 * -241 + -11641));
}
function rc(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var ac = function(t, o) {
  return t(o);
}, sc = function(t, o) {
  return t(o);
}, gc = Xe;
function T0(t) {
  t();
}
function cc(t) {
  return t;
}
function xc() {
  return [!(1 * 8391 + -1410 + -6980), T0];
}
var Ic = En, lc = Ti;
function uc(t, o) {
  var e = o(), n = Le({ h: { __: e, v: o } }), i = n[8948 + 337 * 6 + -10970].h, r = n[1];
  return En(function() {
    i.__ = e, i.v = o, lo(i) && r({ h: i });
  }, [t, e, o]), Ae(function() {
    return lo(i) && r({ h: i }), t(function() {
      lo(i) && r({ h: i });
    });
  }, [t]), e;
}
function lo(t) {
  var o, e, n = t.v, i = t.__;
  try {
    var r = n();
    return !((o = i) === (e = r) && (4 * 2157 + -872 + 277 * -28 !== o || (-6203 * -1 + 95 * -56 + -7 * 126) / o == (-4183 * 1 + -8763 + 12947) / e) || o != o && e != e);
  } catch {
    return !(-5997 + 33 * -112 + 9693);
  }
}
var T = {};
T.useState = Le, T.useId = Wg, T.useReducer = k0, T.useEffect = Ae, T.useLayoutEffect = En, T.useInsertionEffect = Ic, T.useTransition = xc, T.useDeferredValue = cc, T.useSyncExternalStore = uc, T.startTransition = T0, T.useRef = Pt, T.useImperativeHandle = Kg, T.useMemo = ze, T.useCallback = wi, T.useContext = Yi, T.useDebugValue = ko, T.version = "17.0.2", T.Children = Pg, T.render = Jg, T.hydrate = Qg, T.unmountComponentAtNode = oc, T.createPortal = Dg, T.createElement = be, T.createContext = lr, T.createFactory = tc, T.cloneElement = ic, T.createRef = Ag, T.Fragment = Xe, T.isValidElement = Ti, T.isElement = lc, T.isFragment = nc, T.findDOMNode = rc, T.Component = Pe, T.PureComponent = Wo, T.memo = Vg, T.forwardRef = W0, T.flushSync = sc, T.unstable_batchedUpdates = ac, T.StrictMode = gc, T.Suspense = ci, T.SuspenseList = mn, T.lazy = Yg, T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec;
var Rt = T, Cc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function dc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function fc(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Ac(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") && Object.keys(t).length === 1 ? t.default : t;
}
function pc(t) {
  if (t.__esModule)
    return t;
  var o = t.default;
  if (typeof o == "function") {
    var e = function n() {
      return this instanceof n ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
    };
    e.prototype = o.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(e, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), e;
}
const hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Cc,
  getAugmentedNamespace: pc,
  getDefaultExportFromCjs: dc,
  getDefaultExportFromNamespaceIfNotNamed: Ac,
  getDefaultExportFromNamespaceIfPresent: fc
}, Symbol.toStringTag, { value: "Module" }));
var mc = function(o, e, n, i) {
  var r = n ? n.call(i, o, e) : void 0;
  if (r !== void (8081 * -1 + 5414 * 1 + -7 * -381))
    return !!r;
  if (o === e)
    return !0;
  if (typeof o != "object" || !o || typeof e != "object" || !e)
    return !1;
  var a = Object.keys(o), s = Object.keys(e);
  if (a.length !== s.length)
    return !1;
  for (var g = Object.prototype.hasOwnProperty.bind(e), I = 0; I < a.length; I++) {
    var C = a[I];
    if (!g(C))
      return !1;
    var u = o[C], p = e[C];
    if (r = n ? n.call(i, u, p, C) : void (-2809 * -1 + -5 * 478 + -419), r === !1 || r === void (-4 * -145 + 2814 * -3 + 7862) && u !== p)
      return !1;
  }
  return !0;
};
const bc = hc.getDefaultExportFromCjs(mc);
var q = "-ms-", Zn = "-moz-", z = "-webkit-", N0 = "comm", Ni = "rule", fr = "decl", yc = "@import", D0 = "@keyframes", vc = "@layer", wc = Math.abs, Ar = String.fromCharCode, Oo = Object.assign;
function Bc(t, o) {
  return le(t, 7656 + -17 * 152 + -5072) ^ -12664 + -71 * -179 ? (((o << 2 ^ le(t, -5778 + -107 * -54)) << -1 * 9539 + 1543 + 129 * 62 ^ le(t, -10616 + -1 * -10617)) << 1 * -2147 + -211 * -6 + 1 * 883 ^ le(t, 2)) << 2143 + -292 * -18 + -1 * 7397 ^ le(t, -5 * -673 + -9663 + -6301 * -1) : -331 * 19 + 47 * -142 + 12963;
}
function F0(t) {
  return t.trim();
}
function ct(t, o) {
  return (t = o.exec(t)) ? t[35 + 7 * -5] : t;
}
function N(t, o, e) {
  return t.replace(o, e);
}
function Ii(t, o) {
  return t.indexOf(o);
}
function le(t, o) {
  return t.charCodeAt(o) | -5323 * 1 + 4049 * -1 + 9372;
}
function nn(t, o, e) {
  return t.slice(o, e);
}
function Qe(t) {
  return t.length;
}
function X0(t) {
  return t.length;
}
function bn(t, o) {
  return o.push(t), t;
}
function Sc(t, o) {
  return t.map(o).join("");
}
function Ha(t, o) {
  return t.filter(function(e) {
    return !ct(e, o);
  });
}
var Di = -1 * 2947 + -156 * 47 + 10280, on = 16 * -485 + -68 * -15 + 6741, j0 = 8783 * -1 + -4067 + 12850, Te = 7 * -807 + -13 * -326 + -1411 * -1, ge = 9502 * -1 + 9 * -146 + 2 * 5408, xn = "";
function Fi(t, o, e, n, i, r, a, s) {
  var g = {};
  return g.value = t, g.root = o, g.parent = e, g.type = n, g.props = i, g.children = r, g.line = Di, g.column = on, g.length = a, g.return = "", g.siblings = s, g;
}
function ft(t, o) {
  return Oo(Fi("", null, null, "", null, null, 6882 + -3 * -746 + -9120, t.siblings), t, { length: -t.length }, o);
}
function Ut(t) {
  for (; t.root; )
    t = ft(t.root, { children: [t] });
  bn(t, t.siblings);
}
function Gc() {
  return ge;
}
function Zc() {
  return ge = Te > -3 * 3191 + 2130 + 7443 ? le(xn, --Te) : -1 * 1717 + -7281 + 2 * 4499, on--, ge === -7215 + -667 * 8 + -3 * -4187 && (on = 6446 * -1 + 7901 * 1 + -1454, Di--), ge;
}
function Fe() {
  return ge = Te < j0 ? le(xn, Te++) : -7898 + 11 * 718, on++, ge === 7053 + -1 * -9142 + -16185 && (on = -12025 + 6013 * 2, Di++), ge;
}
function Wt() {
  return le(xn, Te);
}
function li() {
  return Te;
}
function Xi(t, o) {
  return nn(xn, t, o);
}
function Ro(t) {
  switch (t) {
    case 5584 * -1 + 673 * 12 + -14 * 178:
    case -1 * 5414 + -7237 + 12660:
    case -1 * -2420 + 1 * -3394 + 984:
    case 7647 * 1 + 6941 + -14575:
    case 3 * 761 + -142 + -2109:
      return 3613 + 110 * -6 + -1 * 2948;
    case 33 * -255 + 7417 + 1031:
    case -3094 * 3 + -36 * -239 + 721:
    case -7462 + 1 * -8603 + 16109:
    case -1 * -6871 + -10 * -877 + -15594:
    case -4073 + 827 * 5:
    case -8319 * -1 + -538 * -11 + -1 * 14173:
    case -2 * -3325 + -1261 + -277 * 19:
    case -18 * -449 + -3994 + 3 * -1343:
    case 123:
    case 364 * -6 + -275 + 2584 * 1:
      return 3 * 2029 + 2 * -1362 + 3359 * -1;
    case 58:
      return 1 * -5568 + 2 * -4337 + 1 * 14245;
    case 8 * -26 + -8584 + -2 * -4413:
    case 15572 + 2219 * -7:
    case 40:
    case 91:
      return 8180 + 1 * -4916 + 1631 * -2;
    case 41:
    case -477 * -3 + 1277 * -5 + 5047:
      return 145 * -59 + 5234 + 3322;
  }
  return -5613 + -1871 * -3;
}
function kc(t) {
  return Di = on = 13 * -55 + -7457 + 8173, j0 = Qe(xn = t), Te = -2428 * -2 + -842 * -1 + -5698, [];
}
function Hc(t) {
  return xn = "", t;
}
function uo(t) {
  return F0(Xi(Te - (-2066 + 6 * -951 + -2591 * -3), Vo(t === 7 * -1203 + 67 * -19 + 9785 ? t + (-9843 + -8084 * -1 + 1761) : t === -4705 * 1 + -2903 * -2 + -1061 ? t + (-147 + -148 * -1) : t)));
}
function Kc(t) {
  for (; (ge = Wt()) && ge < 1 * 8015 + 626 + -32 * 269; )
    Fe();
  return Ro(t) > -7907 + -1547 * -2 + 4815 * 1 || Ro(ge) > -131 * -4 + -9904 + 853 * 11 ? "" : " ";
}
function Wc(t, o) {
  for (; --o && Fe() && !(ge < -11 * 683 + -1531 + 4 * 2273 || ge > 4379 * 2 + 6130 + -14786 || ge > 1 * -5449 + 1755 * 3 + 241 && ge < -5166 + 2 * -907 + -5 * -1409 || ge > 3537 + 3467 * -1 && ge < -43 * -219 + -564 * 12 + -2552); )
    ;
  return Xi(t, li() + (o < -4171 * 1 + -1 * 359 + -56 * -81 && Wt() == -1890 * 3 + -750 * 11 + 13952 && Fe() == -8598 + -55 * -4 + 8410));
}
function Vo(t) {
  for (; Fe(); )
    switch (ge) {
      case t:
        return Te;
      case 34:
      case -101 * 37 + -9587 * 1 + -1 * -13363:
        t !== -9218 + 1 * 2225 + 7027 && t !== 9865 + 161 * 47 + -17393 && Vo(ge);
        break;
      case -9062 + 1 * 2553 + 6549:
        t === 14 * -580 + 1 * -4274 + 12435 && Vo(t);
        break;
      case 4584 + 135 * 6 + 2651 * -2:
        Fe();
        break;
    }
  return Te;
}
function Oc(t, o) {
  for (; Fe() && t + ge !== 1 * 3683 + -1333 * 2 + 1 * -970 + (-2976 + -1 * -4022 + -1036); )
    if (t + ge === 142 * -67 + -5818 + 15374 + 42 && Wt() === 8171 + 2 * 1964 + 6026 * -2)
      break;
  return "/*" + Xi(o, Te - (-8592 + -439 * -10 + 3 * 1401)) + "*" + Ar(t === 10 * 691 + 1 * 2657 + -20 * 476 ? t : Fe());
}
function Rc(t) {
  for (; !Ro(Wt()); )
    Fe();
  return Xi(t, Te);
}
function Vc(t) {
  return Hc(ui("", null, null, null, [""], t = kc(t), 4891 * -1 + 6705 + -1814, [-194 * -41 + 307 * -16 + -3042], t));
}
function ui(t, o, e, n, i, r, a, s, g) {
  for (var I = 0, C = 0, u = a, p = -9633 + -1 * -3693 + -220 * -27, A = -1 * -7607 + -5923 + -1684, v = -11 * -662 + -9 * 623 + -5 * 335, B = 1 * 15 + -2 * -3931 + -716 * 11, K = -1 * 2611 + 8625 * 1 + 859 * -7, G = 7271 + 7 * -1207 + 1179 * 1, w = 276 + 1 * -3520 + -1 * -3244, E = "", $ = i, X = r, U = n, W = E; K; )
    switch (v = w, w = Fe()) {
      case 40:
        if (v != -3254 + -41 * -82 && le(W, u - (307 + -512 * 18 + 8910)) == 4059 + -4001 * 1) {
          Ii(W += N(uo(w), "&", "&\f"), "&\f") != -(-7349 + 1470 * 5) && (G = -(8499 * 1 + 261 + -8759));
          break;
        }
      case 1929 + 1895 * -1:
      case 39:
      case 7694 + 1 * -3323 + -4280:
        W += uo(w);
        break;
      case -2971 * 2 + -6890 + -1 * -12841:
      case -4195 + -5813 * 1 + 10018:
      case -16 * 241 + -1 * 5708 + 157 * 61:
      case 4633 + -8572 * 1 + 11 * 361:
        W += Kc(v);
        break;
      case 5278 + -127 * 57 + 2053 * 1:
        W += Wc(li() - (35 * -76 + -1 * 8962 + 11623), -784 + -52 * -151 + 7061 * -1);
        continue;
      case -9027 + 7 * 268 + 122 * 59:
        switch (Wt()) {
          case -2 * -109 + -84 * -110 + -9416:
          case 4726 + -9 * -467 + -8882:
            bn(Ec(Oc(Fe(), li()), o, e, g), g);
            break;
          default:
            W += "/";
        }
        break;
      case (1 * -236 + -7061 + 7420) * B:
        s[I++] = Qe(W) * G;
      case (6833 * -1 + 2754 * -2 + 12466) * B:
      case 1 * 2263 + 9954 + -1 * 12158:
      case -2333 * -4 + -49 * 74 + -5706:
        switch (w) {
          case -10887 + 10887 * 1:
          case 4036 + 2 * 2311 + -8533:
            K = -8413 * -1 + 4446 + 1837 * -7;
          case 4389 + -2165 * 2 + C:
            G == -(-389 * -14 + 7130 + -5 * 2515) && (W = N(W, /\f/g, "")), A > -1 * 8834 + -5541 + 14375 && Qe(W) - u && bn(A > -6177 + -2 * -1049 + 4111 ? Wa(W + ";", n, e, u - (5655 + -103 * 11 + -4521), g) : Wa(N(W, " ", "") + ";", n, e, u - (-4 * -1817 + -4131 * -1 + -11397), g), g);
            break;
          case 59:
            W += ";";
          default:
            if (bn(U = Ka(W, o, e, I, C, i, s, E, $ = [], X = [], u, r), r), w === -10227 + -90 * -115)
              if (C === -3360 + 141 * 57 + -4677)
                ui(W, o, U, U, $, r, u, s, X);
              else
                switch (p === -14 * 35 + 3640 + -3051 && le(W, 1 * 6438 + 3118 * -2 + -1 * 199) === 1160 + -1 * -439 + -1489 ? -7729 + 7 * -773 + -40 * -331 : p) {
                  case -7793 + 639 * 7 + 3420:
                  case -3217 * -1 + -2082 + -1027:
                  case 109:
                  case 1 * 1923 + -5978 + -10 * -417:
                    ui(t, U, U, n && bn(Ka(t, U, U, 17506 + 8753 * -2, -1 * 6811 + -2044 + 8855, i, s, E, i, $ = [], u, X), X), i, X, u, s, n ? $ : X);
                    break;
                  default:
                    ui(W, U, U, U, [""], X, 5410 + 1 * -1744 + -94 * 39, s, X);
                }
        }
        I = C = A = 3 * 1835 + -1481 + 1006 * -4, B = G = -3323 * 2 + -418 * 10 + 27 * 401, E = W = "", u = a;
        break;
      case 3 * 2755 + 8709 + 4229 * -4:
        u = 1 + Qe(W), A = v;
      default:
        if (B < 4052 + -600 * -12 + 1 * -11251) {
          if (w == 383 * 12 + -4478 + 5)
            --B;
          else if (w == 1598 * 6 + -6400 + -1021 * 3 && B++ == 0 && Zc() == 38 * -252 + -2440 + 1349 * 9)
            continue;
        }
        switch (W += Ar(w), w * B) {
          case -3232 + -143 * -23 + 19 * -1:
            G = C > 1415 + 1 * 6309 + -7724 ? -6243 + -3 * 1377 + 5 * 2075 : (W += "\f", -(9471 + -6 * 171 + 2111 * -4));
            break;
          case 44:
            s[I++] = (Qe(W) - (1 * 6457 + -1228 + -5228)) * G, G = 11 * -341 + 262 * -2 + 4276;
            break;
          case -11364 + 11428 * 1:
            Wt() === 45 && (W += uo(Fe())), p = Wt(), C = u = Qe(E = W += Rc(li())), w++;
            break;
          case -449 * 20 + -409 * -3 + 7798:
            v === -8329 + -1 * -8374 && Qe(W) == 11 * -342 + -8476 * -1 + -4712 && (B = 0);
        }
    }
  return r;
}
function Ka(t, o, e, n, i, r, a, s, g, I, C, u) {
  for (var p = i - 1, A = i === -8511 + -38 * 149 + 14173 ? r : [""], v = X0(A), B = -5608 + 659 * -11 + -559 * -23, K = -5543 + 74 * -79 + 11389, G = 0; B < n; ++B)
    for (var w = 6832 + -1 * 6832, E = nn(t, p + (-11 * 319 + 599 * -13 + 11297), p = wc(K = a[B])), $ = t; w < v; ++w)
      ($ = F0(K > 2 * 1060 + -310 * -20 + 128 * -65 ? A[w] + " " + E : N(E, /&\f/g, A[w]))) && (g[G++] = $);
  return Fi(t, o, e, i === -7691 + -1 * -7267 + -53 * -8 ? Ni : s, g, I, C, u);
}
function Ec(t, o, e, n) {
  return Fi(t, o, e, N0, Ar(Gc()), nn(t, -31 * 294 + 5626 + 3490, -(-5451 + -129 * -71 + -3706)), 0, n);
}
function Wa(t, o, e, n, i) {
  return Fi(t, o, e, fr, nn(t, 10111 + 1 * -10111, n), nn(t, n + (-9199 + -7629 * -1 + 1571), -(18310 + -3 * 6103)), n, i);
}
function M0(t, o, e) {
  switch (Bc(t, o)) {
    case 10 * 317 + -5939 * 1 + 7872:
      return z + "print-" + t + t;
    case 1 * -5735 + 8913 + 853 * 3:
    case 5618 + 43 * -92 + -2539 * -1:
    case -73 * 31 + 9567 + -4127:
    case -2 * -3203 + 8232 + -11205:
    case -7 * -1253 + -61 * 61 + 487 * -7:
    case 1 * -7015 + 3498 + 886 * 9:
    case 1 * 3001 + -2870 * -1 + -2950:
    case -8060 + -6 * -214 + 12348:
    case -7891 * -1 + 565 * -15 + 1388 * 5:
    case -1584 + -3659 * -1 + 3769:
    case 1480 + -5 * 391 + -1 * -3666:
    case 4107 * -1 + 1853 + 11 * 809:
    case -3744 + -79 * -53 + 2562:
    case 6391:
    case 2587 + 3855 * 3 + -8273:
    case 14338 + 21 * -415:
    case -9791 * 1 + -5887 + 21813 * 1:
    case 6736 + 2767 * 3 + -10438:
    case 93 * 62 + -6317 + 159 * 34:
    case 31 * 172 + 3919 * 1 + -5036:
    case 533 * -2 + 2 * 1528 + 1 * 4399:
    case 6721 + -2 * 806:
    case -1 * -2794 + 10024 + -7453:
    case 10461 * 1 + 1 * 1067 + -5907:
    case 1 * 8687 + 7370 + -12228:
      return z + t + t;
    case 4789:
      return Zn + t + t;
    case -7643 + 12992 * 1:
    case -77 * -67 + -2 * 3698 + 6483:
    case -421 * -7 + -9 * 349 + 5004:
    case -119 * -113 + 116 * 43 + -11467:
    case 2756:
      return z + t + Zn + t + q + t + t;
    case 890 + -1 * -3893 + 1153:
      switch (le(t, o + (-7355 + 134 * 50 + 666))) {
        case -8357 * 1 + 2639 * 1 + 5832:
          return z + t + q + N(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return z + t + q + N(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 65 * 32 + -1 * 8692 + 6657:
          return z + t + q + N(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 12832 + -3 * 1114 + -2662:
    case 2074 + -203 * -31 + -4099:
    case -953 + 964 * 4:
      return z + t + q + t + t;
    case 11827 * 1 + -11171 * -1 + -16833 * 1:
      return z + t + q + "flex-" + t + t;
    case 21 * 493 + -775 + -4391:
      return z + t + N(t, /(\w+).+(:[^]+)/, z + "box-$1$2" + q + "flex-$1$2") + t;
    case -2791 + -2258 * 3 + 15008:
      return z + t + q + "flex-item-" + N(t, /flex-|-self/g, "") + (ct(t, /flex-|baseline/) ? "" : q + "grid-row-" + N(t, /flex-|-self/g, "")) + t;
    case 6860 + 4 * -2270 + 7 * 985:
      return z + t + q + "flex-line-pack" + N(t, /align-content|flex-|-self/g, "") + t;
    case -2263 * 1 + -1903 + 9714:
      return z + t + q + N(t, "shrink", "negative") + t;
    case 2330 + 2 * 1481:
      return z + t + q + N(t, "basis", "preferred-size") + t;
    case -16721 + 19 * 1199:
      return z + "box-" + N(t, "-grow", "") + z + t + q + N(t, "grow", "positive") + t;
    case -2 * 796 + -43 * 173 + 13585:
      return z + N(t, /([^-])(transform)/g, "$1" + z + "$2") + t;
    case 2311 * 1 + -109 * -7 + 3113:
      return N(N(N(t, /(zoom-|grab)/, z + "$1"), /(image-set)/, z + "$1"), t, "") + t;
    case 3575 + 38 * 197 + -5566:
    case -263 * -9 + -1 * 5437 + 71 * 99:
      return N(t, /(image-set\([^]*)/, z + "$1$`$1");
    case -4 * 1247 + 7006 + 2950:
      return N(N(t, /(.+:)(flex-)?(.*)/, z + "box-pack:$3" + q + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + z + t + t;
    case 345 + 771 * 5:
      if (!ct(t, /flex-|baseline/))
        return q + "grid-column-align" + nn(t, o) + t;
      break;
    case 480 + 958 * -2 + -76 * -53:
    case 9030 + -1 * 8737 + -1 * -3067:
      return q + N(t, "template-", "") + t;
    case 1803 + -2 * 1759 + -6099 * -1:
    case 189 * 46 + 5620 * 1 + -1 * 10698:
      return e && e.some(function(n, i) {
        return o = i, ct(n.props, /grid-\w+-end/);
      }) ? ~Ii(t + (e = e[o].value), "span") ? t : q + N(t, "-start", "") + t + q + "grid-row-span:" + (~Ii(e, "span") ? ct(e, /\d+/) : +ct(e, /\d+/) - +ct(t, /\d+/)) + ";" : q + N(t, "-start", "") + t;
    case -1 * -5297 + 1 * 3634 + -4035:
    case 3613 + -367 * -1 + -1 * -148:
      return e && e.some(function(n) {
        return ct(n.props, /grid-\w+-start/);
      }) ? t : q + N(N(t, "-end", "-span"), "span ", "") + t;
    case -5251 + 4492 * 1 + -2427 * -2:
    case -131 * -45 + 2287 + 73 * -63:
    case 4068:
    case -4992 + 836 * 9:
      return N(t, /(.+)-inline(.+)/, z + "$1$2") + t;
    case 2281 * 6 + -49 * -319 + 191 * -111:
    case 9479 * -1 + -11877 + -5 * -5683:
    case -6602 + -2471 * -5:
    case 1359 * -1 + -4436 + 11330:
    case 5202 + 2677 * -3 + 8274:
    case -36 * -108 + -2 * 1996 + 5805:
    case 4933:
    case -6099 + -9 * 714 + 17202:
    case -1206 + 49 * 44 + 1 * 4583:
    case -9447 + -1987 * -5 + 5301:
    case -397 + 301 * 18:
    case -5085 * 1 + -1 * 6281 + 16131:
      if (Qe(t) - (1 * 7001 + 6 * 1665 + -8495 * 2) - o > -5 * 190 + 7962 + -7006)
        switch (le(t, o + (-191 * -43 + -409 + 867 * -9))) {
          case -7866 + 167 * 13 + 1451 * 4:
            if (le(t, o + 4) !== -3535 + 25 * 121 + 555)
              break;
          case -1 * -3137 + 5215 + -8250:
            return N(t, /(.+:)(.+)-([^]+)/, "$1" + z + "$2-$3$1" + Zn + (le(t, o + (-10002 + 3 * 3335)) == 1 * -8997 + -5162 + 14267 ? "$3" : "$2-$3")) + t;
          case 19600 + -3897 * 5:
            return ~Ii(t, "stretch") ? M0(N(t, "stretch", "fill-available"), o, e) + t : t;
        }
      break;
    case 8 * -93 + 4116 + 1780:
    case 142 * 82 + 6624 + -12348:
      return N(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, i, r, a, s, g, I) {
        return q + i + ":" + r + I + (a ? q + i + "-span:" + (s ? g : +g - +r) + I : "") + t;
      });
    case -8619 + 256 * 53:
      if (le(t, o + (23 * 151 + 229 * -41 + -1974 * -3)) === -4704 + -193 * -25)
        return N(t, ":", ":" + z) + t;
      break;
    case -12176 + 35 * 532:
      switch (le(t, le(t, -74 * -63 + 72 * -61 + -256) === -879 * 9 + -2163 * -4 + -696 ? 4993 * 1 + -3 * 168 + -4471 : 3201 * 1 + 17 * -579 + 6653)) {
        case -1 * -7144 + 141 * 36 + -100 * 121:
          return N(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + z + (le(t, 2 * 2147 + 20 * -246 + -40 * -16) === 45 ? "inline-" : "") + "box$3$1" + z + "$2$3$1" + q + "$2box$3") + t;
        case 1 * 4972 + 9648 + -14520:
          return N(t, ":", ":" + q) + t;
      }
      break;
    case -547 + -11 * 61 + 6937:
    case 560 * 8 + -22 * -419 + 11051 * -1:
    case -1 * 9387 + -3909 + 15431:
    case -7755 + 789 * 3 + 9315:
    case -2 * -979 + 8246 + 601 * -13:
      return N(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function Bi(t, o) {
  for (var e = "", n = 1 * -97 + -8443 + 8540; n < t.length; n++)
    e += o(t[n], n, t, o) || "";
  return e;
}
function Pc(t, o, e, n) {
  switch (t.type) {
    case vc:
      if (t.children.length)
        break;
    case yc:
    case fr:
      return t.return = t.return || t.value;
    case N0:
      return "";
    case D0:
      return t.return = t.value + "{" + Bi(t.children, n) + "}";
    case Ni:
      if (!Qe(t.value = t.props.join(",")))
        return "";
  }
  return Qe(e = Bi(t.children, n)) ? t.return = t.value + "{" + e + "}" : "";
}
function Lc(t) {
  var o = X0(t);
  return function(e, n, i, r) {
    for (var a = "", s = -13155 + 877 * 15; s < o; s++)
      a += t[s](e, n, i, r) || "";
    return a;
  };
}
function Yc(t) {
  return function(o) {
    o.root || (o = o.return) && t(o);
  };
}
function Tc(t, o, e, n) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case fr:
        t.return = M0(t.value, t.length, e);
        return;
      case D0:
        return Bi([ft(t, { value: N(t.value, "@", "@" + z) })], n);
      case Ni:
        if (t.length)
          return Sc(e = t.props, function(i) {
            switch (ct(i, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Ut(ft(t, { props: [N(i, /:(read-\w+)/, ":" + Zn + "$1")] }));
                var r = {};
                r.props = [i], Ut(ft(t, r)), Oo(t, { props: Ha(e, n) });
                break;
              case "::placeholder":
                Ut(ft(t, { props: [N(i, /:(plac\w+)/, ":" + z + "input-$1")] })), Ut(ft(t, { props: [N(i, /:(plac\w+)/, ":" + Zn + "$1")] })), Ut(ft(t, { props: [N(i, /:(plac\w+)/, q + "input-$1")] }));
                var a = {};
                a.props = [i], Ut(ft(t, a)), Oo(t, { props: Ha(e, n) });
                break;
            }
            return "";
          });
    }
}
var Y = {};
Y.animationIterationCount = 1, Y.aspectRatio = 1, Y.borderImageOutset = 1, Y.borderImageSlice = 1, Y.borderImageWidth = 1, Y.boxFlex = 1, Y.boxFlexGroup = 1, Y.boxOrdinalGroup = 1, Y.columnCount = 1, Y.columns = 1, Y.flex = 1, Y.flexGrow = 1, Y.flexPositive = 1, Y.flexShrink = 1, Y.flexNegative = 1, Y.flexOrder = 1, Y.gridRow = 1, Y.gridRowEnd = 1, Y.gridRowSpan = 1, Y.gridRowStart = 1, Y.gridColumn = 1, Y.gridColumnEnd = 1, Y.gridColumnSpan = 1, Y.gridColumnStart = 1, Y.msGridRow = 1, Y.msGridRowSpan = 1, Y.msGridColumn = 1, Y.msGridColumnSpan = 1, Y.fontWeight = 1, Y.lineHeight = 1, Y.opacity = 1, Y.order = 1, Y.orphans = 1, Y.tabSize = 1, Y.widows = 1, Y.zIndex = 1, Y.zoom = 1, Y.WebkitLineClamp = 1, Y.fillOpacity = 1, Y.floodOpacity = 1, Y.stopOpacity = 1, Y.strokeDasharray = 1, Y.strokeDashoffset = 1, Y.strokeMiterlimit = 1, Y.strokeOpacity = 1, Y.strokeWidth = 1;
var Nc = Y, J = {}, Vt = typeof process < "u" && J !== void 0 && (J.REACT_APP_SC_ATTR || J.SC_ATTR) || "data-styled", pr = typeof window < "u" && "HTMLElement" in window, Dc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-5035 + -1 * -3191 + -4 * -461) !== J && void (790 + -4737 * -2 + 1 * -10264) !== J.REACT_APP_SC_DISABLE_SPEEDY && J.REACT_APP_SC_DISABLE_SPEEDY !== "" ? J.REACT_APP_SC_DISABLE_SPEEDY !== "false" && J.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-1 * 7087 + -493 * 16 + 14975) !== J && void (8905 + 21 * -197 + -8 * 596) !== J.SC_DISABLE_SPEEDY && J.SC_DISABLE_SPEEDY !== "" ? J.SC_DISABLE_SPEEDY !== "false" && J.SC_DISABLE_SPEEDY : J.NODE_ENV !== "production"), Oa = /invalid hook call/i, _n = /* @__PURE__ */ new Set(), Fc = function(t, o) {
  if (J.NODE_ENV !== "production") {
    var e = o ? ' with the id of "'.concat(o, '"') : "", n = "The component ".concat(t).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var r = !0;
      console.error = function(a) {
        for (var s = [], g = 7 * 1420 + 5735 + -461 * 34; g < arguments.length; g++)
          s[g - (-8798 + -5 * -410 + 6749)] = arguments[g];
        Oa.test(a) ? (r = !1, _n.delete(n)) : i.apply(void 0, en([a], s, !1));
      }, Pt(), r && !_n.has(n) && (console.warn(n), _n.add(n));
    } catch (a) {
      Oa.test(a.message) && _n.delete(n);
    } finally {
      console.error = i;
    }
  }
}, ji = Object.freeze([]), rn = Object.freeze({});
function Xc(t, o, e) {
  return e === void 0 && (e = rn), t.theme !== e.theme && t.theme || o || e.theme;
}
var Eo = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), jc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Mc = /(^-|-$)/g;
function Ra(t) {
  return t.replace(jc, "-").replace(Mc, "");
}
var Uc = /(a)(d)/gi, Va = function(t) {
  return String.fromCharCode(t + (t > -2389 + -1 * 2719 + 5133 ? 7681 + -2 * 3821 : -5464 + 107 * -85 + 14656));
};
function Po(t) {
  var o, e = "";
  for (o = Math.abs(t); o > -2021 * -4 + 6421 * -1 + 9 * -179; o = o / (4694 + 1 * -4887 + 245) | 0)
    e = Va(o % (2 * -562 + 1541 * 4 + -1247 * 4)) + e;
  return (Va(o % (-2430 + 3 * 15 + 2437)) + e).replace(Uc, "$1-$2");
}
var Co, kt = function(t, o) {
  for (var e = o.length; e; )
    t = (-5668 + 7 * -389 + 8424) * t ^ o.charCodeAt(--e);
  return t;
}, U0 = function(t) {
  return kt(-1 * -3187 + -6865 + 9059, t);
};
function Jc(t) {
  return Po(U0(t) >>> -3886 * 2 + -619 * -11 + 963);
}
function J0(t) {
  return J.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function fo(t) {
  return typeof t == "string" && (J.NODE_ENV === "production" || t.charAt(-1 * -2347 + 3183 * 1 + -5530) === t.charAt(-1 * -9958 + 176 * 24 + -2 * 7091).toLowerCase());
}
var Ee = {};
Ee.childContextTypes = !0, Ee.contextType = !0, Ee.contextTypes = !0, Ee.defaultProps = !0, Ee.displayName = !0, Ee.getDefaultProps = !0, Ee.getDerivedStateFromError = !0, Ee.getDerivedStateFromProps = !0, Ee.mixins = !0, Ee.propTypes = !0, Ee.type = !0;
var At = {};
At.name = !0, At.length = !0, At.prototype = !0, At.caller = !0, At.callee = !0, At.arguments = !0, At.arity = !0;
var Gt = {};
Gt.$$typeof = !0, Gt.compare = !0, Gt.defaultProps = !0, Gt.displayName = !0, Gt.propTypes = !0, Gt.type = !0;
var Jt = {};
Jt.$$typeof = !0, Jt.render = !0, Jt.defaultProps = !0, Jt.displayName = !0, Jt.propTypes = !0;
var Q0 = typeof Symbol == "function" && Symbol.for, z0 = Q0 ? Symbol.for("react.memo") : -116051 + -1693 * 46 + 254044, Qc = Q0 ? Symbol.for("react.forward_ref") : 35887 + -1 * 6983 + -166 * -188, zc = Ee, $c = At, $0 = Gt, _c = ((Co = {})[Qc] = Jt, Co[z0] = $0, Co);
function Ea(t) {
  return ("type" in (o = t) && o.type.$$typeof) === z0 ? $0 : "$$typeof" in t ? _c[t.$$typeof] : zc;
  var o;
}
var qc = Object.defineProperty, ex = Object.getOwnPropertyNames, Pa = Object.getOwnPropertySymbols, tx = Object.getOwnPropertyDescriptor, nx = Object.getPrototypeOf, La = Object.prototype;
function _0(t, o, e) {
  if (typeof o != "string") {
    if (La) {
      var n = nx(o);
      n && n !== La && _0(t, n, e);
    }
    var i = ex(o);
    Pa && (i = i.concat(Pa(o)));
    for (var r = Ea(t), a = Ea(o), s = -7849 + -1 * 3851 + 650 * 18; s < i.length; ++s) {
      var g = i[s];
      if (!(g in $c || e && e[g] || a && g in a || r && g in r)) {
        var I = tx(o, g);
        try {
          qc(t, g, I);
        } catch {
        }
      }
    }
  }
  return t;
}
function an(t) {
  return typeof t == "function";
}
function hr(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function Kt(t, o) {
  return t && o ? "".concat(t, " ").concat(o) : t || o || "";
}
function Ya(t, o) {
  if (-12952 + 3238 * 4 === t.length)
    return "";
  for (var e = t[-1247 * 5 + 3771 + 2464], n = 13598 + 1 * -13597; n < t.length; n++)
    e += o ? o + t[n] : t[n];
  return e;
}
function sn(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Lo(t, o, e) {
  if (e === void 0 && (e = !1), !e && !sn(t) && !Array.isArray(t))
    return o;
  if (Array.isArray(o))
    for (var n = 8031 + -256 * -32 + -1 * 16223; n < o.length; n++)
      t[n] = Lo(t[n], o[n]);
  else if (sn(o))
    for (var n in o)
      t[n] = Lo(t[n], o[n]);
  return t;
}
function mr(t, o) {
  var e = {};
  e.value = o, Object.defineProperty(t, "toString", e);
}
var Ie = {};
Ie[1] = `Cannot create styled-component for component: %s.

`, Ie[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, Ie[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, Ie[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, Ie[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, Ie[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, Ie[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', Ie[8] = `ThemeProvider: Please make your "theme" prop an object.

`, Ie[9] = "Missing document `<head>`\n\n", Ie[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, Ie[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, Ie[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", Ie[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, Ie[14] = `ThemeProvider: "theme" prop is required.

`, Ie[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", Ie[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, Ie[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, Ie[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var ix = J.NODE_ENV !== "production" ? Ie : {};
function ox() {
  for (var t = [], o = 161 * 57 + 9 * -547 + -4254; o < arguments.length; o++)
    t[o] = arguments[o];
  for (var e = t[-6832 + -488 * -14], n = [], i = 5686 + 163 * -58 + 3769, r = t.length; i < r; i += -22 * 218 + 3790 + 19 * 53)
    n.push(t[i]);
  return n.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function In(t) {
  for (var o = [], e = 1 * 1714 + -1 * -9723 + -11436; e < arguments.length; e++)
    o[e - (-7671 + -815 * -5 + 3597)] = arguments[e];
  return J.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(o.length > -4101 * -2 + -55 * -4 + -8422 ? " Args: ".concat(o.join(", ")) : "")) : new Error(ox.apply(void (-3935 * -1 + -4201 * 2 + -1489 * -3), en([ix[t]], o, !1)).trim());
}
var rx = function() {
  function t(o) {
    this.groupSizes = new Uint32Array(8573 + -8061 * 1), this.length = -8427 + -1 * -8939, this.tag = o;
  }
  return t.prototype.indexOfGroup = function(o) {
    for (var e = 4266 * 1 + 1 * 3313 + -7579, n = -5059 * 1 + -7403 + 12462; n < o; n++)
      e += this.groupSizes[n];
    return e;
  }, t.prototype.insertRules = function(o, e) {
    if (o >= this.groupSizes.length) {
      for (var n = this.groupSizes, i = n.length, r = i; o >= r; )
        if ((r <<= 3500 + -2 * 3160 + 2821) < 9713 + 5 * 1205 + -15738)
          throw In(2018 * -2 + 1680 + -593 * -4, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
      for (var a = i; a < r; a++)
        this.groupSizes[a] = -4131 + 779 * 1 + -2 * -1676;
    }
    for (var s = this.indexOfGroup(o + (1211 + -654 * 11 + 5984)), g = (a = -1 * 2083 + 2 * 4476 + -1 * 6869, e.length); a < g; a++)
      this.tag.insertRule(s, e[a]) && (this.groupSizes[o]++, s++);
  }, t.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var e = this.groupSizes[o], n = this.indexOfGroup(o), i = n + e;
      this.groupSizes[o] = 1102 + 3 * -929 + 1685;
      for (var r = n; r < i; r++)
        this.tag.deleteRule(n);
    }
  }, t.prototype.getGroup = function(o) {
    var e = "";
    if (o >= this.length || 1 * 6589 + -3015 + -3574 === this.groupSizes[o])
      return e;
    for (var n = this.groupSizes[o], i = this.indexOfGroup(o), r = i + n, a = i; a < r; a++)
      e += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
    return e;
  }, t;
}(), Ci = /* @__PURE__ */ new Map(), Si = /* @__PURE__ */ new Map(), di = 1, qn = function(t) {
  if (Ci.has(t))
    return Ci.get(t);
  for (; Si.has(di); )
    di++;
  var o = di++;
  if (J.NODE_ENV !== "production" && ((25 * 146 + 2 * -3661 + 3672 | o) < -1229 * -1 + -9004 + 1555 * 5 || o > -1986008559 + -1 * -3059750383))
    throw In(204 * -6 + 4 * -1441 + 7004, "".concat(o));
  return Ci.set(t, o), Si.set(o, t), o;
}, ax = function(t, o) {
  di = o + 1, Ci.set(t, o), Si.set(o, t);
}, sx = "style[".concat(Vt, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), gx = new RegExp("^".concat(Vt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), cx = function(t, o, e) {
  for (var n, i = e.split(","), r = -8559 + -8559 * -1, a = i.length; r < a; r++)
    (n = i[r]) && t.registerName(o, n);
}, xx = function(t, o) {
  for (var e, n = ((e = o.textContent) !== null && void (-6799 * 1 + 8353 * -1 + 15152) !== e ? e : "").split(`/*!sc*/
`), i = [], r = 0, a = n.length; r < a; r++) {
    var s = n[r].trim();
    if (s) {
      var g = s.match(gx);
      if (g) {
        var I = 0 | parseInt(g[1], 10), C = g[-3 * -2936 + 65 * -61 + -4841];
        -2 * 1382 + 1 * -6353 + -1 * -9117 !== I && (ax(C, I), cx(t, C, g[6338 + -985 * -7 + 6615 * -2]), t.getTag().insertRules(I, i)), i.length = -566 * 5 + -8511 + 1031 * 11;
      } else
        i.push(s);
    }
  }
};
function Ix() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var q0 = function(t) {
  var o = document.head, e = t || o, n = document.createElement("style"), i = function(s) {
    var g = Array.from(s.querySelectorAll("style[".concat(Vt, "]")));
    return g[g.length - (1401 + -1 * 2751 + -1 * -1351)];
  }(e), r = void (-862 * -10 + 607 * -10 + -2550) !== i ? i.nextSibling : null;
  n.setAttribute(Vt, "active"), n.setAttribute("data-styled-version", "6.1.1");
  var a = Ix();
  return a && n.setAttribute("nonce", a), e.insertBefore(n, r), n;
}, lx = function() {
  function t(o) {
    this.element = q0(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet)
        return e.sheet;
      for (var n = document.styleSheets, i = 3 * -111 + -5333 + 5666, r = n.length; i < r; i++) {
        var a = n[i];
        if (a.ownerNode === e)
          return a;
      }
      throw In(17);
    }(this.element), this.length = 79 * -71 + 1 * 7071 + -43 * 34;
  }
  return t.prototype.insertRule = function(o, e) {
    try {
      return this.sheet.insertRule(e, o), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.prototype.deleteRule = function(o) {
    this.sheet.deleteRule(o), this.length--;
  }, t.prototype.getRule = function(o) {
    var e = this.sheet.cssRules[o];
    return e && e.cssText ? e.cssText : "";
  }, t;
}(), ux = function() {
  function t(o) {
    this.element = q0(o), this.nodes = this.element.childNodes, this.length = -7046 + -501 * -7 + -1 * -3539;
  }
  return t.prototype.insertRule = function(o, e) {
    if (o <= this.length && o >= 0) {
      var n = document.createTextNode(e);
      return this.element.insertBefore(n, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, t.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, t;
}(), Cx = function() {
  function t(o) {
    this.rules = [], this.length = 289 * -26 + 5270 + 2244;
  }
  return t.prototype.insertRule = function(o, e) {
    return o <= this.length && (this.rules.splice(o, 9839 * -1 + 8307 * -1 + 18146 * 1, e), this.length++, !0);
  }, t.prototype.deleteRule = function(o) {
    this.rules.splice(o, -323 * 27 + -5943 + -35 * -419), this.length--;
  }, t.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, t;
}(), Ta = pr, dx = { isServer: !pr, useCSSOMInjection: !Dc }, es = function() {
  function t(o, e, n) {
    void (-568 * 9 + -36 * 141 + 10188) === o && (o = rn), e === void 0 && (e = {});
    var i = this;
    this.options = Be(Be({}, dx), o), this.gs = e, this.names = new Map(n), this.server = !!o.isServer, !this.server && pr && Ta && (Ta = !1, function(r) {
      for (var a = document.querySelectorAll(sx), s = 7 * -566 + -87 * 58 + -1126 * -8, g = a.length; s < g; s++) {
        var I = a[s];
        I && I.getAttribute(Vt) !== "active" && (xx(r, I), I.parentNode && I.parentNode.removeChild(I));
      }
    }(this)), mr(this, function() {
      return function(r) {
        for (var a = r.getTag(), s = a.length, g = "", I = function(u) {
          var p = function(G) {
            return Si.get(G);
          }(u);
          if (void (3 * -1367 + 6557 + -2456) === p)
            return "continue";
          var A = r.names.get(p), v = a.getGroup(u);
          if (void (34 * -159 + 5998 + -37 * 16) === A || v.length === 0)
            return "continue";
          var B = "".concat(Vt, ".g").concat(u, '[id="').concat(p, '"]'), K = "";
          void (15145 + 233 * -65) !== A && A.forEach(function(G) {
            G.length > -8 * -71 + 670 + -1238 && (K += "".concat(G, ","));
          }), g += "".concat(v).concat(B, '{content:"').concat(K, '"}').concat(`/*!sc*/
`);
        }, C = -4697 * 2 + -263 + 9657 * 1; C < s; C++)
          I(C);
        return g;
      }(i);
    });
  }
  return t.registerId = function(o) {
    return qn(o);
  }, t.prototype.reconstructWithOptions = function(o, e) {
    return void (31 * -97 + -317 * -10 + -163) === e && (e = !0), new t(Be(Be({}, this.options), o), this.gs, e && this.names || void (-1 * -2661 + -502 + -127 * 17));
  }, t.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || 8 * 1199 + 7593 + -17185) + 1;
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(e) {
      var n = e.useCSSOMInjection, i = e.target;
      return e.isServer ? new Cx(i) : n ? new lx(i) : new ux(i);
    }(this.options), new rx(o)));
    var o;
  }, t.prototype.hasNameForId = function(o, e) {
    return this.names.has(o) && this.names.get(o).has(e);
  }, t.prototype.registerName = function(o, e) {
    if (qn(o), this.names.has(o))
      this.names.get(o).add(e);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(e), this.names.set(o, n);
    }
  }, t.prototype.insertRules = function(o, e, n) {
    this.registerName(o, e), this.getTag().insertRules(qn(o), n);
  }, t.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, t.prototype.clearRules = function(o) {
    this.getTag().clearGroup(qn(o)), this.clearNames(o);
  }, t.prototype.clearTag = function() {
    this.tag = void (-3 * -1331 + 2369 * -1 + 812 * -2);
  }, t;
}(), fx = /&/g, Ax = /^\s*\/\/.*$/gm;
function ts(t, o) {
  return t.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(o, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(o, " ")), e.props = e.props.map(function(n) {
      return "".concat(o, " ").concat(n);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = ts(e.children, o)), e;
  });
}
function ns(t) {
  var o, e, n, i = t === void 0 ? rn : t, r = i.options, a = void (-3625 + -1 * -5263 + -1638) === r ? rn : r, s = i.plugins, g = void (-37 * -154 + -404 * -2 + 1 * -6506) === s ? ji : s, I = function(p, A, v) {
    return v === e || v.startsWith(e) && v.endsWith(e) && v.replaceAll(e, "").length > 369 * 2 + -1 * 2719 + 1981 ? ".".concat(o) : p;
  }, C = g.slice();
  C.push(function(p) {
    p.type === Ni && p.value.includes("&") && (p.props[-1009 * -7 + -21 * -185 + -10948] = p.props[-9986 * -1 + 6282 + -8134 * 2].replace(fx, e).replace(n, I));
  }), a.prefix && C.push(Tc), C.push(Pc);
  var u = function(p, A, v, B) {
    void (1849 * -1 + -9364 + 11213) === A && (A = ""), void (3374 + -9516 * -1 + 10 * -1289) === v && (v = ""), void (-4109 + -1613 * 5 + 12174) === B && (B = "&"), o = B, e = A, n = new RegExp("\\".concat(e, "\\b"), "g");
    var K = p.replace(Ax, ""), G = Vc(v || A ? "".concat(v, " ").concat(A, " { ").concat(K, " }") : K);
    a.namespace && (G = ts(G, a.namespace));
    var w = [];
    return Bi(G, Lc(C.concat(Yc(function(E) {
      return w.push(E);
    })))), w;
  };
  return u.hash = g.length ? g.reduce(function(p, A) {
    return A.name || In(-5915 * 1 + -9 * 477 + 10223), kt(p, A.name);
  }, 5381).toString() : "", u;
}
var px = new es(), Yo = ns(), br = Rt.createContext({ shouldForwardProp: void (8121 + 3 * -2707), styleSheet: px, stylis: Yo });
br.Consumer;
var hx = Rt.createContext(void (-2920 + -14 * 7 + 3018));
function To() {
  return Yi(br);
}
function mx(t) {
  var o = Le(t.stylisPlugins), e = o[1 * -1951 + -3148 + 5099], n = o[1173 * 5 + -241 * -21 + -10925], i = To().styleSheet, r = ze(function() {
    var C = i, u = {};
    return u.useCSSOMInjection = !1, t.sheet ? C = t.sheet : t.target && (C = C.reconstructWithOptions({ target: t.target }, !1)), t.disableCSSOMInjection && (C = C.reconstructWithOptions(u)), C;
  }, [t.disableCSSOMInjection, t.sheet, t.target, i]), a = ze(function() {
    var C = {};
    C.namespace = t.namespace, C.prefix = t.enableVendorPrefixes;
    var u = {};
    return u.options = C, u.plugins = e, ns(u);
  }, [t.enableVendorPrefixes, t.namespace, e]);
  Ae(function() {
    bc(e, t.stylisPlugins) || n(t.stylisPlugins);
  }, [t.stylisPlugins]);
  var s = ze(function() {
    var C = {};
    return C.shouldForwardProp = t.shouldForwardProp, C.styleSheet = r, C.stylis = a, C;
  }, [t.shouldForwardProp, r, a]), g = {};
  g.value = s;
  var I = {};
  return I.value = a, Rt.createElement(br.Provider, g, Rt.createElement(hx.Provider, I, t.children));
}
var Na = function() {
  function t(o, e) {
    var n = this;
    this.inject = function(i, r) {
      void (4125 + -165 * 25) === r && (r = Yo);
      var a = n.name + r.hash;
      i.hasNameForId(n.id, a) || i.insertRules(n.id, a, r(n.rules, a, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = e, mr(this, function() {
      throw In(5774 * -1 + 179 * 8 + 4354, String(n.name));
    });
  }
  return t.prototype.getName = function(o) {
    return o === void 0 && (o = Yo), this.name + o.hash;
  }, t;
}(), bx = function(t) {
  return t >= "A" && t <= "Z";
};
function Da(t) {
  for (var o = "", e = 0; e < t.length; e++) {
    var n = t[e];
    if (-8130 * 1 + -1180 + -1 * -9311 === e && n === "-" && t[0] === "-")
      return t;
    bx(n) ? o += "-" + n.toLowerCase() : o += n;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var is = function(t) {
  return t == null || t === !1 || t === "";
}, os = function(t) {
  var o, e, n = [];
  for (var i in t) {
    var r = t[i];
    t.hasOwnProperty(i) && !is(r) && (Array.isArray(r) && r.isCss || an(r) ? n.push("".concat(Da(i), ":"), r, ";") : sn(r) ? n.push.apply(n, en(en(["".concat(i, " {")], os(r), !1), ["}"], !1)) : n.push("".concat(Da(i), ": ").concat((o = i, (e = r) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || -1 * 827 + 5396 + -4569 * 1 === e || o in Nc || o.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return n;
};
function Ot(t, o, e, n) {
  if (is(t))
    return [];
  if (hr(t))
    return [".".concat(t.styledComponentId)];
  if (an(t)) {
    if (!an(r = t) || r.prototype && r.prototype.isReactComponent || !o)
      return [t];
    var i = t(o);
    return J.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof Na || sn(i) || i === null || console.error("".concat(J0(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ot(i, o, e, n);
  }
  var r;
  return t instanceof Na ? e ? (t.inject(e, n), [t.getName(n)]) : [t] : sn(t) ? os(t) : Array.isArray(t) ? Array.prototype.concat.apply(ji, t.map(function(a) {
    return Ot(a, o, e, n);
  })) : [t.toString()];
}
function yx(t) {
  for (var o = -4859 * 1 + -433 * 9 + 8756; o < t.length; o += -1 * 566 + 3773 + -3206) {
    var e = t[o];
    if (an(e) && !hr(e))
      return !1;
  }
  return !0;
}
var vx = U0("6.1.1"), wx = function() {
  function t(o, e, n) {
    this.rules = o, this.staticRulesId = "", this.isStatic = J.NODE_ENV === "production" && (void (-4273 * -1 + -7779 * 1 + 3506) === n || n.isStatic) && yx(o), this.componentId = e, this.baseHash = kt(vx, e), this.baseStyle = n, es.registerId(e);
  }
  return t.prototype.generateAndInjectStyles = function(o, e, n) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, e, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId))
        i = Kt(i, this.staticRulesId);
      else {
        var r = Ya(Ot(this.rules, o, e, n)), a = Po(kt(this.baseHash, r) >>> 0);
        if (!e.hasNameForId(this.componentId, a)) {
          var s = n(r, ".".concat(a), void 0, this.componentId);
          e.insertRules(this.componentId, a, s);
        }
        i = Kt(i, a), this.staticRulesId = a;
      }
    else {
      for (var g = kt(this.baseHash, n.hash), I = "", C = 4656 + 15 * 652 + -14436; C < this.rules.length; C++) {
        var u = this.rules[C];
        if (typeof u == "string")
          I += u, J.NODE_ENV !== "production" && (g = kt(g, u));
        else if (u) {
          var p = Ya(Ot(u, o, e, n));
          g = kt(g, p + C), I += p;
        }
      }
      if (I) {
        var A = Po(g >>> 0);
        e.hasNameForId(this.componentId, A) || e.insertRules(this.componentId, A, n(I, ".".concat(A), void (4372 + 9170 * 1 + 13542 * -1), this.componentId)), i = Kt(i, A);
      }
    }
    return i;
  }, t;
}(), rs = Rt.createContext(void (431 * 15 + 1 * -5979 + -18 * 27));
rs.Consumer;
var Ao = {}, Fa = /* @__PURE__ */ new Set();
function Bx(t, o, e) {
  var n = hr(t), i = t, r = !fo(t), a = o.attrs, s = void (1 * 9022 + -5453 + -3569) === a ? ji : a, g = o.componentId, I = void (12502 + -94 * 133) === g ? function(X, U) {
    var W = typeof X != "string" ? "sc" : Ra(X);
    Ao[W] = (Ao[W] || -197 * -13 + 2563 + -5124) + (-4578 + -8572 * -1 + -3993);
    var ne = "".concat(W, "-").concat(Jc("6.1.1" + W + Ao[W]));
    return U ? "".concat(U, "-").concat(ne) : ne;
  }(o.displayName, o.parentComponentId) : g, C = o.displayName, u = void (-3 * -376 + 4583 + -5711) === C ? function(X) {
    return fo(X) ? "styled.".concat(X) : "Styled(".concat(J0(X), ")");
  }(t) : C, p = o.displayName && o.componentId ? "".concat(Ra(o.displayName), "-").concat(o.componentId) : o.componentId || I, A = n && i.attrs ? i.attrs.concat(s).filter(Boolean) : s, v = o.shouldForwardProp;
  if (n && i.shouldForwardProp) {
    var B = i.shouldForwardProp;
    if (o.shouldForwardProp) {
      var K = o.shouldForwardProp;
      v = function(X, U) {
        return B(X, U) && K(X, U);
      };
    } else
      v = B;
  }
  var G = new wx(e, p, n ? i.componentStyle : void (-9567 * -1 + -17 * -569 + -19240));
  function w(X, U) {
    return function(W, ne, _) {
      var re = W.attrs, We = W.componentStyle, ue = W.defaultProps, et = W.foldedComponentIds, Se = W.styledComponentId, se = W.target, Ce = Rt.useContext(rs), tt = To(), pe = W.shouldForwardProp || tt.shouldForwardProp;
      J.NODE_ENV !== "production" && ko(Se);
      var Ge = function(nt, it, ve) {
        var Oe = {};
        Oe.className = void (-1276 + 4 * 319), Oe.theme = ve;
        for (var ot, Ne = Be(Be({}, it), Oe), Yt = 6 + -1 * -2904 + 970 * -3; Yt < nt.length; Yt += -2413 * 3 + -376 * 19 + 14384) {
          var Re = an(ot = nt[Yt]) ? ot(Ne) : ot;
          for (var De in Re)
            Ne[De] = De === "className" ? Kt(Ne[De], Re[De]) : De === "style" ? Be(Be({}, Ne[De]), Re[De]) : Re[De];
        }
        return it.className && (Ne.className = Kt(Ne.className, it.className)), Ne;
      }(re, ne, Xc(ne, Ce, ue) || rn), ye = Ge.as || se, Ze = {};
      for (var ce in Ge)
        void (14551 + -1 * 14551) === Ge[ce] || ce[-9652 + 4826 * 2] === "$" || ce === "as" || ce === "theme" || (ce === "forwardedAs" ? Ze.as = Ge.forwardedAs : pe && !pe(ce, ye) || (Ze[ce] = Ge[ce], pe || J.NODE_ENV !== "development" || Hg(ce) || Fa.has(ce) || !Eo.has(ye) || (Fa.add(ce), console.warn('styled-components: it looks like an unknown prop "'.concat(ce, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var he = function(nt, it) {
        var ve = To(), Oe = nt.generateAndInjectStyles(it, ve.styleSheet, ve.stylis);
        return J.NODE_ENV !== "production" && ko(Oe), Oe;
      }(We, Ge);
      J.NODE_ENV !== "production" && W.warnTooManyClasses && W.warnTooManyClasses(he);
      var Me = Kt(et, Se);
      return he && (Me += " " + he), Ge.className && (Me += " " + Ge.className), Ze[fo(ye) && !Eo.has(ye) ? "class" : "className"] = Me, Ze.ref = _, be(ye, Ze);
    }(E, X, U);
  }
  w.displayName = u;
  var E = Rt.forwardRef(w), $ = {};
  return $.attrs = !0, $.componentStyle = !0, $.displayName = !0, $.foldedComponentIds = !0, $.shouldForwardProp = !0, $.styledComponentId = !0, $.target = !0, E.attrs = A, E.componentStyle = G, E.displayName = u, E.shouldForwardProp = v, E.foldedComponentIds = n ? Kt(i.foldedComponentIds, i.styledComponentId) : "", E.styledComponentId = p, E.target = n ? i.target : t, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(X) {
    this._foldedDefaultProps = n ? function(U) {
      for (var W = [], ne = 13 * -633 + 89 * -93 + 16507; ne < arguments.length; ne++)
        W[ne - (-1 * 7583 + -3 * -2885 + -119 * 9)] = arguments[ne];
      for (var _ = -1 * -9201 + -9590 + 389, re = W; _ < re.length; _++)
        Lo(U, re[_], !0);
      return U;
    }({}, i.defaultProps, X) : X;
  } }), J.NODE_ENV !== "production" && (Fc(u, p), E.warnTooManyClasses = /* @__PURE__ */ function(X, U) {
    var W = {}, ne = !1;
    return function(_) {
      if (!ne && (W[_] = !0, Object.keys(W).length >= -1339 + -3 * -513)) {
        var re = U ? ' with the id of "'.concat(U, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(X).concat(re, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), ne = !0, W = {};
      }
    };
  }(u, p)), mr(E, function() {
    return ".".concat(E.styledComponentId);
  }), r && _0(E, t, $), E;
}
function Xa(t, o) {
  for (var e = [t[-10 * 131 + 1372 + -62]], n = 115 + -893 * 6 + -1 * -5243, i = o.length; n < i; n += 4596 + 4 * -889 + -1 * 1039)
    e.push(o[n], t[n + (-57 * -37 + -13 * 748 + 7616)]);
  return e;
}
var ja = function(t) {
  var o = {};
  return o.isCss = !0, Object.assign(t, o);
};
function Sx(t) {
  for (var o = [], e = -611 + 2 * -2663 + -2969 * -2; e < arguments.length; e++)
    o[e - (4 * 2105 + -6373 + -2046)] = arguments[e];
  if (an(t) || sn(t)) {
    var n = t;
    return ja(Ot(Xa(ji, en([n], o, !0))));
  }
  var i = t;
  return -9183 + -31 * -193 + 3200 === o.length && i.length === 1 && typeof i[8 + 5 * -821 + 4097] == "string" ? Ot(i) : ja(Ot(Xa(i, o)));
}
function No(t, o, e) {
  if (e === void 0 && (e = rn), !o)
    throw In(435 + -4799 * -2 + -10032, o);
  var n = function(i) {
    for (var r = [], a = -5614 + -12 * 153 + 7451 * 1; a < arguments.length; a++)
      r[a - (9990 + -223 * 2 + -3 * 3181)] = arguments[a];
    return t(o, e, Sx.apply(void 0, en([i], r, !1)));
  };
  return n.attrs = function(i) {
    return No(t, o, Be(Be({}, e), { attrs: Array.prototype.concat(e.attrs, i).filter(Boolean) }));
  }, n.withConfig = function(i) {
    return No(t, o, Be(Be({}, e), i));
  }, n;
}
var as = function(t) {
  return No(Bx, t);
}, Pn = as;
Eo.forEach(function(t) {
  Pn[t] = as(t);
});
J.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ei = "__sc-".concat(Vt, "__");
J.NODE_ENV !== "production" && J.NODE_ENV !== "test" && typeof window < "u" && (window[ei] || (window[ei] = 7096 + -2 * 4412 + 9 * 192), -4649 * 2 + -4027 + -2221 * -6 === window[ei] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ei] += 1905 + 17 * -153 + -1 * -697);
const Gx = Pn.div`
  position: relative;
`, Zx = Pn.video`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(t) => t.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class te extends Error {
  constructor(e, n) {
    super(e);
    D(this, "cause");
    this.name = "AutoCaptureError", this.cause = n;
  }
  static logError(e) {
  }
  static fromCameraError(e) {
    if (this.logError(e), e instanceof te)
      return e;
    let n;
    switch (e.name) {
      case "OverconstrainedError":
        n = "Minimum quality requirements are not met by your camera";
        break;
      case "NotReadableError":
      case "AbortError":
        n = "The webcam is already in use by another application";
        break;
      case "NotAllowedError":
        n = "To use your camera, you must allow permissions";
        break;
      case "NotFoundError":
        n = "There is no camera available to you";
        break;
      default:
        n = "An unknown camera error has occurred";
        break;
    }
    return new te(n, e);
  }
  static fromError(e) {
    if (this.logError(e), e instanceof te)
      return e;
    const n = "An unexpected error has occurred";
    return new te(n);
  }
}
var fi = ((t) => (t.CONTINUE_DETECTION = "continue-detection", t.SWITCH_CAMERA = "switch-camera", t.TOGGLE_MIRROR = "toggle-mirror", t))(fi || {}), $e = ((t) => (t.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", t.CONTROL = "document-auto-capture:control", t.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", t.DOCUMENT_DETECTION = "document-auto-capture:document-detection", t.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", t.STATE_CHANGED = "document-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", t))($e || {}), kx = ((t) => (t.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", t.CONTROL = "face-auto-capture:control", t.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", t.FACE_DETECTION = "face-auto-capture:face-detection", t.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", t.STATE_CHANGED = "face-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", t))(kx || {}), Hx = ((t) => (t.ANIMATION_END = "magnifeye-auto-capture:animation-end", t.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", t))(Hx || {}), Kx = ((t) => (t.STATUS_CHANGED = "smile-auto-capture:status-changed", t))(Kx || {});
const gt = {};
gt.CANDIDATE_SELECTION = "candidate_selection", gt.DOCUMENT_CENTERING = "document_centering", gt.DOCUMENT_NOT_PRESENT = "document_not_present", gt.DOCUMENT_TOO_FAR = "document_too_far", gt.SHARPNESS_TOO_LOW = "sharpness_too_low", gt.BRIGHTNESS_TOO_LOW = "brightness_too_low", gt.BRIGHTNESS_TOO_HIGH = "brightness_too_high", gt.HOTSPOTS_PRESENT = "hotspots_present";
const Je = gt, pt = {};
pt.isPresent = Je.DOCUMENT_NOT_PRESENT, pt.isNotSmall = Je.DOCUMENT_TOO_FAR, pt.isNotOutOfBounds = Je.DOCUMENT_CENTERING, pt.isSharp = Je.SHARPNESS_TOO_LOW, pt.isNotDim = Je.BRIGHTNESS_TOO_LOW, pt.isNotBright = Je.BRIGHTNESS_TOO_HIGH, pt.noHotspots = Je.HOTSPOTS_PRESENT;
const Wx = pt, yn = {};
yn.LOADING = "LOADING", yn.ERROR = "ERROR", yn.WAITING = "WAITING", yn.RUNNING = "RUNNING";
const Ke = yn;
var Ox = ((t) => (t.CLOSEUP = "CLOSEUP", t.DISTANT = "DISTANT", t.MIDDLE = "MIDDLE", t))(Ox || {});
const Mi = lr(void 0);
Mi.displayName = "AppStateContext";
function Rx() {
  const t = Yi(Mi);
  if (t === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return t;
}
const Vx = Mi.Provider, Ui = Rx;
class ss extends Pe {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var e;
    const o = new te("An unknown error has occurred");
    (e = this.context) == null || e.handleError(o);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var o;
    return ((o = this.context) == null ? void 0 : o.appState) === Ke.ERROR ? null : this.props.children;
  }
}
D(ss, "contextType", Mi);
const Ex = Pn.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
var Px = 6 * 1035 + -9905 + 3695;
function H(t, o, e, n, i, r) {
  var a, s, g = {};
  for (s in o)
    s == "ref" ? a = o[s] : g[s] = o[s];
  var I = {};
  I.type = t, I.props = g, I.key = e, I.ref = a, I.__k = null, I.__ = null, I.__b = 0, I.__e = null, I.__d = void (-2 * -3319 + -8343 + -31 * -55), I.__c = null, I.constructor = void (5 * 213 + -2045 + -10 * -98), I.__v = --Px, I.__i = -(-2320 + 2321 * 1), I.__u = 0, I.__source = i, I.__self = r;
  var C = I;
  if (typeof t == "function" && (a = t.defaultProps))
    for (s in a)
      g[s] === void 0 && (g[s] = a[s]);
  return k.vnode && k.vnode(C), C;
}
const Lx = Pn.div`
  background-color: #00000060;
  color: #fff;
  font-size: 13px;
  width: 300px;
  padding: 10px;
  z-index: 1;
  word-break: break-word;
  position: absolute;
  top: 0;
`;
function Yx() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Tx = W0(({
  detectionDetails: t,
  isImageMirror: o
}, e) => Yx() ? (console.log(t), H(Xe, {
  children: [H(Ex, {
    ref: e,
    $isImageMirror: o
  }), H(Lx, {
    children: Object.entries(t).map(([n, i]) => H("div", {
      children: [n, ": ", H("strong", {
        children: i
      })]
    }, n))
  })]
})) : null), Nx = -3239 + -8042 * 1 + 29 * 389 + 0.8, Dx = 8 * -821 + -7179 + -59 * -233 + 0.43, Fx = -249 * -23 + 9138 + -1 * 14865 + 0.03, Xx = -236 * -7 + 1889 * 5 + -1 * 11097 + 0.5, jx = -1 * -8365 + -105 * -9 + -9310 + 0.25, Mx = 2846 * 3 + 9 * 1051 + 7 * -2571 + 0.9, Ux = 0 + 0.1, Ai = {};
Ai.minDuration = 1e3, Ai.maxDuration = 2500, Ai.minFrames = 10;
const po = Ai, Do = {};
Do.max = 100, Do.min = 10;
const Ma = Do, Jx = -322 * -23 + 1613 * 6 + -16364, Qx = -191 * 19 + 1 * 8916 + -5087, zx = -9546 + -1773 * -1 + 6 * 1296, gs = "AES-CBC", cs = "RSA-OAEP", $x = "SHA-256", _x = "image/jpeg", qx = -4802 + -2 * -122 + 4566, eI = "SAM v1.39.3 for idcards", tI = "dot_embedded_bg.wasm";
class nI {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((e) => e.kind === "videoinput");
  }
}
function Ua(t) {
  t.getTracks().forEach((e) => {
    e.stop();
  });
}
const iI = (t, o, e = _x) => new Promise((n) => {
  t.toBlob((i) => {
    if (!i)
      throw new Error("Canvas to Blob failed");
    n(i);
  }, e, o);
}), oI = async (t) => iI(t, 90), rI = (t, o) => {
  const e = document.createElement("canvas");
  e.width = o.width, e.height = o.height;
  const n = e.getContext("2d");
  if (!n)
    throw new Error("cropImage ctx error");
  return n.drawImage(t, o.shiftX, o.shiftY, o.width, o.height, 1531 * 5 + -2383 * -4 + -17187, 0, e.width, e.height), e;
}, aI = (t) => {
  const o = t.getContext("2d");
  if (!o)
    throw new Error("getImageDataForSam ctx error");
  const { data: e } = o.getImageData(-8632 + -1 * 7481 + 393 * 41, -1 * 8161 + 8359 + -99 * 2, t.width, t.height);
  return e;
}, sI = (t, o, e, n) => {
  const i = t.getContext("2d");
  i && (i.beginPath(), n ? (i.fillStyle = e, i.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (i.strokeStyle = e, i.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), i.stroke());
}, ho = (t, o, e) => {
  const { height: n, shiftX: i, shiftY: r, width: a } = o, s = {};
  s.x = i, s.y = r;
  const g = {};
  g.topLeft = s, g.width = a, g.height = n, g.color = e, sI(t, g, e);
};
function gI({ canvas: t, color: o, fill: e, offset: n = 1739 + 277 * 1 + 336 * -6, polygon: i }) {
  const r = t.getContext("2d");
  if (!r)
    return;
  const { bottomLeft: a, bottomRight: s, topLeft: g, topRight: I } = i;
  e ? r.fillStyle = o : r.strokeStyle = o, r.beginPath(), r.moveTo(g.x + n, g.y + n), r.lineTo(I.x + n, I.y + n), r.lineTo(s.x + n, s.y + n), r.lineTo(a.x + n, a.y + n), r.closePath(), e ? r.fill() : r.stroke();
}
const cI = (t, o) => {
  const e = t.getContext("2d");
  e && e.drawImage(o, -3301 * -3 + -3207 + -9 * 744, 2360 * -1 + -4745 + 7105);
};
class xI {
  constructor() {
    D(this, "canvasElement");
    D(this, "context");
    this.canvasElement = document.createElement("canvas"), this.context = this.canvasElement.getContext("2d");
  }
  cloneMutable(o) {
    this.canvasElement.width = o.width, this.canvasElement.height = o.height, cI(this.canvasElement, o);
  }
}
const ti = (t, o) => Math.hypot(o.x - t.x, o.y - t.y), II = (t) => t.length < -1440 + -97 * -79 + 51 * -122 ? -1 * -9057 + -9497 * -1 + -18554 : t.reduce((e, n) => e + n, 51 * 121 + -9835 + 229 * 16) / t.length, xs = (t) => Number.parseFloat(t.toFixed(6792 + -1 * 1046 + 1 * -5743)), lI = (t) => {
  const o = t.getContext("2d");
  o && o.clearRect(-10 * 971 + 1 * 9314 + 396, -145 * 12 + -1237 + 2977, o.canvas.width, o.canvas.height);
}, uI = -2451 * -3 + -6598 + -754 + 0.5, CI = -1769 * -1 + -1564 * 4 + 4487 + 0.85, mo = -181 * 51 + -7213 + 17444, dI = 600, fI = 23 * -332 + -1 * 7657 + 15293, AI = (t, o) => t < mo && o >= mo ? mo : t, pI = (t, o) => t < o ? t : o, yr = ({ height: t, width: o }) => {
  let e;
  return o > t ? e = AI(t, o) : e = o, { width: e, height: pI(t, e) };
}, Is = (t) => {
  const o = yr(t).width, e = o * CI, n = (t.width - e) / (-2949 + 13 * 227), i = e / uI, r = (t.height - i) / (-17 * 1 + 33 + -14), a = {};
  return a.shiftX = n, a.shiftY = r, a.width = e, a.height = i, a;
}, hI = (t) => {
  const { height: o, shiftX: e, shiftY: n, width: i } = Is(t), r = {};
  return r.shiftX = e / t.width, r.shiftY = n / t.height, r.width = i / t.width, r.height = o / t.height, r;
}, mI = (t) => {
  const { bottomLeft: o, bottomRight: e, topLeft: n, topRight: i } = t, r = ti(n, i), a = ti(i, e), s = ti(o, e), g = ti(n, o);
  return Math.min(r, a, s, g);
}, bI = "@innovatrics/dot-common-auto-capture", yI = "6.1.0", vI = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, wI = {
  "@dot/proto-files": "1.0.3",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.2.2",
  comlink: "^4.4.1",
  preact: "^10.19.3",
  "styled-components": "^6.1.1",
  "wasm-feature-detect": "^1.6.1"
}, BI = {
  "@preact/preset-vite": "^2.7.0",
  "@testing-library/preact": "^3.2.3",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.3.3",
  vite: "^5.0.10",
  vitest: "^1.0.4"
}, SI = {
  name: bI,
  private: !0,
  version: yI,
  scripts: vI,
  dependencies: wI,
  devDependencies: BI
}, vr = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Ja = () => {
  const t = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return t && o;
}, GI = () => {
  const t = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return t && o ? !1 : o;
}, Fo = (t) => new Promise((o) => {
  setTimeout(o, t);
}), An = (t) => JSON.parse(JSON.stringify(t, (o, e) => typeof e == "number" ? xs(e) : e)), ls = () => SI.version, us = (t) => new URL(t).hostname.replace("www.", ""), ZI = () => us(window.location.href) === "localhost", ni = (t) => Object.entries(t).map(([o, e]) => encodeURIComponent(o) + "=" + encodeURIComponent(e)).join("&"), kI = (t, o) => {
  const e = t && performance.now() - t;
  return o >= po.minFrames ? e > po.minDuration : e > po.maxDuration;
}, HI = (t, o) => JSON.stringify(t) === JSON.stringify(o) ? o : t, pi = {};
pi.width = 1920, pi.height = 1080, pi.facingMode = "user";
const KI = pi;
class kn extends nI {
  constructor(e) {
    super();
    D(this, "videoRef");
    D(this, "mediaStream", null);
    D(this, "videoTrack", null);
    D(this, "availableCameraProperties", []);
    D(this, "canvas");
    this.videoRef = e, this.canvas = new xI();
  }
  async initWebcam(e = {}) {
    const n = await this.getBestCamera(e.facingMode);
    await this.getAvailableCamerasInfo();
    const i = this.getConstraints(e, n);
    await this.startWebcam(i), GI() && await this.startWebcam(i);
  }
  async startWebcam(e = {}) {
    var n;
    return this.stopCamera(), Ja() && await Fo(9252 + -1 * -9079 + -1 * 17881), this.mediaStream = await navigator.mediaDevices.getUserMedia(e), this.videoRef.srcObject = this.mediaStream, await this.videoRef.play(), this.videoTrack = (n = this.mediaStream) == null ? void 0 : n.getVideoTracks()[-35 * -175 + -5 * -1723 + -14740], this.checkVideoTrackSettings(), this.videoTrack;
  }
  checkVideoTrackSettings() {
    var i;
    const e = (i = this.videoTrack) == null ? void 0 : i.getSettings();
    if (!(e != null && e.height) || !(e != null && e.width))
      throw new te("Could not init camera settings");
    if (Math.min(e == null ? void 0 : e.width, e == null ? void 0 : e.height) < Jx)
      throw this.stopCamera(), new te("Could not init video because of low camera resolution: " + e.width + "x" + e.height + ".");
  }
  async getBestCamera(e) {
    const n = {};
    return n.video = !0, this.mediaStream = await navigator.mediaDevices.getUserMedia(n), this.stopCamera(), vr() && e === "environment" ? (await kn.getVideoInputDeviceList()).find((a) => a.label.includes("back") && a.label.includes("0")) : void (89 * -82 + -3631 * 2 + 14560);
  }
  async getAvailableCamerasInfo() {
    const e = await kn.getVideoInputDeviceList();
    for (const n of e) {
      Ja() && await Fo(-3277 + -1906 * 1 + 131 * 43);
      try {
        const i = {};
        i.deviceId = n.deviceId, i.width = 480;
        const r = {};
        r.video = i;
        const a = await navigator.mediaDevices.getUserMedia(r), [s] = a.getVideoTracks(), g = s.getSettings(), I = { ...g };
        I.deviceName = s.label;
        const C = {};
        C.cameraProperties = I;
        const u = C;
        this.availableCameraProperties.push(u), Ua(a);
      } catch (i) {
        i instanceof Error && te.logError(i);
      }
    }
  }
  getConstraints(e, n) {
    const i = { ...KI, ...e };
    i.deviceId = n ? { exact: n.deviceId } : void (-59 * -2 + -3607 + -3 * -1163);
    const r = {};
    return r.video = i, r.audio = !1, r;
  }
  takePhoto() {
    var n;
    const e = (n = this.videoTrack) == null ? void 0 : n.getSettings();
    if (!(e != null && e.width))
      throw new te("Cant take photo - video width is undefined");
    if (!(e != null && e.height))
      throw new te("Cant take photo - video height is undefined");
    if (!this.canvas.context)
      throw new te("Cant take photo - cant create context");
    return this.canvas.canvasElement.width = e.width, this.canvas.canvasElement.height = e.height, this.canvas.context.drawImage(this.videoRef, 0, 9121 + -2 * 4008 + -1 * 1105), this.canvas.canvasElement;
  }
  getCameraResolution() {
    var i;
    const e = (i = this.videoTrack) == null ? void 0 : i.getSettings();
    if (!(e != null && e.width))
      throw new te("Video width is undefined");
    if (!(e != null && e.height))
      throw new te("Video height is undefined");
    const n = {};
    return n.width = e.width, n.height = e.height, n;
  }
  getCameraSettings() {
    if (!this.videoTrack)
      throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  async getDeviceName() {
    if (!this.videoTrack)
      throw Error("Video track must be initialized to get device name");
    const e = this.videoTrack.getSettings(), n = await navigator.mediaDevices.enumerateDevices(), i = n.find((r) => r.deviceId === e.deviceId);
    return i == null ? void 0 : i.label;
  }
  async applyNewConstraints(e) {
    if (!this.videoTrack)
      throw Error("Video track must be initialized to set new constraints");
    await this.videoTrack.applyConstraints(e);
  }
  async switchCamera() {
    if (!this.videoTrack)
      throw Error("Video track must be initialized to set new constraints");
    const e = this.videoTrack.getConstraints(), n = this.videoTrack.getSettings(), i = await kn.getVideoInputDeviceList();
    if (i.length <= -9002 + 376 * 22 + 731 * 1)
      return;
    const r = i.findIndex((g) => g.deviceId === n.deviceId), a = i[r + (1 * -8363 + -996 + 9360)] ?? i[0], s = this.getConstraints(e, a);
    await this.startWebcam(s);
  }
  stopCamera() {
    this.mediaStream && (Ua(this.mediaStream), this.videoRef.srcObject = null);
  }
  checkIfStreamIsRunning() {
    return !!this.videoRef.srcObject;
  }
  async getCameraProperties() {
    const e = await this.getDeviceName(), n = this.getCameraSettings(), i = { ...n };
    i.deviceName = e;
    const r = {};
    return r.currentCameraProperties = i, r.availableCameraProperties = this.availableCameraProperties, r;
  }
}
var He = {};
He.VITE_FACE_COUNTLY_APP_KEY = "5f83e83ee4cee1ab6e5bbf86e215644473299675", He.VITE_MAGNIFEYE_COUNTLY_APP_KEY = "d5ca54dabfb1a2c72d7090c9c8980252a879da44", He.VITE_DOCUMENT_COUNTLY_APP_KEY = "065cf6e242fc5e785cd17eebfbfbbd212a33133b", He.VITE_COUNTLY_URL = "https://innovatrics.count.ly", He.VITE_SMILE_COUNTLY_APP_KEY = "d64319129bb0ee02eccfab418edba9629a97d6b6", He.VITE_RSA_PUBLIC_KEY = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", He.BASE_URL = "/", He.MODE = "production", He.DEV = !1, He.PROD = !0, He.SSR = !1, He.VITE_PACKAGE_VERSION = "6.1.0";
var WI = He;
const OI = () => {
  var t;
  return ((t = WI.VITE_APP_ENV) == null ? void 0 : t.toLowerCase()) === "dev";
};
class Cs extends Array {
  constructor(e) {
    super();
    D(this, "size");
    this.size = e;
  }
  pushFixed(...e) {
    if (e.length > this.size) {
      const n = e.slice(-this.size);
      this.push(...n);
      return;
    }
    this.length === this.size && this.splice(-3775 * 1 + -2180 + 1191 * 5, e.length), this.push(...e);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-4741 + 5 * -281 + 6146);
  }
}
const RI = (t, o) => {
  const { height: e, shiftX: n, shiftY: i, width: r } = o;
  return !(t.x < n || t.x > n + r || t.y < i || t.y > i + e);
}, VI = (t, o) => Object.values(t).every((e) => RI(e, o)), ds = lr(null), fs = () => {
  const t = Yi(ds);
  if (!t)
    throw new Error("Missing provider for CameraOptionsContext");
  return t;
}, EI = (t) => {
  const {
    cameraFacing: o,
    licensePath: e,
    onError: n,
    onPhotoTaken: i,
    sessionToken: r,
    thresholds: a,
    wasmDirectoryPath: s
  } = t, g = vr() ? "environment" : "user";
  return {
    onPhotoTaken: i,
    onError: n,
    cameraFacing: o ?? g,
    wasmDirectoryPath: s,
    licensePath: e,
    sessionToken: r,
    thresholds: {
      confidenceThreshold: (a == null ? void 0 : a.confidenceThreshold) ?? Nx,
      sharpnessThreshold: (a == null ? void 0 : a.sharpnessThreshold) ?? Xx,
      brightnessLowThreshold: (a == null ? void 0 : a.brightnessLowThreshold) ?? jx,
      brightnessHighThreshold: (a == null ? void 0 : a.brightnessHighThreshold) ?? Mx,
      hotspotsScoreThreshold: (a == null ? void 0 : a.hotspotsScoreThreshold) ?? Ux,
      sizeSmallThreshold: (a == null ? void 0 : a.sizeSmallThreshold) ?? Dx,
      outOfBoundsThreshold: (a == null ? void 0 : a.outOfBoundsThreshold) ?? Fx
    }
  };
}, As = ({
  cameraOptions: t,
  children: o
}) => {
  const e = ze(() => ({
    documentCameraOptions: EI(t)
  }), [t]);
  return H(ds.Provider, {
    value: e,
    children: o
  });
}, PI = (t, o) => {
  const e = {};
  e.detail = o, document.dispatchEvent(new CustomEvent(t, e));
}, Vi = class Vi {
  constructor() {
    D(this, "lastDetails", {});
    D(this, "delayedTime", 1 * -8215 + -27 * 14 + 8593);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Vi()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 6861 + -2803 * 2 + -251 * 5;
  }
  isDetailChanged(o, e) {
    return JSON.stringify(e) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = e, !0) : !1;
  }
  dispatchCustomEventOnChange(o, e) {
    this.isDetailChanged(o, e) && PI(o, e);
  }
  dispatchDelayedCustomEventOnChange(o, e, n) {
    const i = performance.now();
    i - this.delayedTime > n && (this.dispatchCustomEventOnChange(o, e), this.delayedTime = i);
  }
};
D(Vi, "_instance");
let On = Vi;
const Ln = On.getInstance(), Qa = (t, o, e = dI) => {
  const n = {};
  n.instructionCode = o;
  const i = n;
  Ln.dispatchDelayedCustomEventOnChange(t, i, e);
}, za = (t, o) => {
  Ln.dispatchCustomEventOnChange(t, o);
}, LI = (t, o) => {
  Ln.dispatchCustomEventOnChange(t, o);
}, YI = (t, o) => {
  const e = {};
  e.size = o;
  const n = e;
  Ln.dispatchCustomEventOnChange(t, n);
}, TI = (t, o, e) => {
  const n = o.confidence < e ? void 0 : o, i = {};
  i.detectedObject = n;
  const r = i;
  Ln.dispatchCustomEventOnChange(t, r);
}, NI = (t, o) => {
  if (OI()) {
    const e = {};
    e.candidateSelectionImages = o;
    const n = e;
    On.getInstance().dispatchCustomEventOnChange(t, n);
  }
}, DI = (t, o) => {
  const { cameraResolution: e, shouldMirror: n } = o;
  Ae(() => {
    if (!e)
      return;
    const i = {};
    i.cameraResolution = e, i.isMirroring = n, LI(t, i);
  }, [e, n, t]);
};
var ps = ((t) => (t.DOCUMENT = "document-auto-capture:dev", t.FACE = "face-auto-capture:dev", t))(ps || {});
const Xo = {};
Xo.SIMD = "simd", Xo.NO_SIMD = "no-simd";
const $a = Xo, jo = {};
jo.FREEMIUM = "Freemium", jo.PREMIUM = "Premium";
const Mo = jo, hi = {};
hi.VISIBLE = "VISIBLE", hi.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", hi.HIDDEN = "HIDDEN";
const Gi = hi, FI = (t) => t === $e.CONTROL ? !vr() : !0, XI = (t, o) => {
  const { appState: e, handleAppStateChange: n, handleError: i } = Ui(), [r, a] = Le(), s = ze(() => {
    const I = o == null ? void 0 : o.getCameraSettings().facingMode;
    return I ? r ?? I === "user" : r ?? FI(t);
  }, [o, r, t]);
  Ae(() => {
    const I = () => {
      e !== Ke.LOADING && n(Ke.RUNNING);
    }, C = () => {
      a(r === void 0 ? !s : !r);
    }, u = async () => {
      if (o) {
        n(Ke.LOADING);
        try {
          await o.switchCamera(), n(Ke.RUNNING);
        } catch (A) {
          if (A instanceof Error) {
            i(te.fromCameraError(A));
            return;
          }
        }
        a(void 0);
      }
    }, p = (A) => {
      var v;
      switch ((v = A.detail) == null ? void 0 : v["instruction"]) {
        case fi.CONTINUE_DETECTION:
          I();
          break;
        case fi.TOGGLE_MIRROR:
          C();
          break;
        case fi.SWITCH_CAMERA:
          u();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(t, p), () => {
      document.removeEventListener(t, p);
    };
  }, [e, o, i, r, n, s, t]);
  const g = {};
  return g.shouldMirror = s, g;
}, jI = (t, o) => {
  var g;
  const e = Pt(), { handleError: n, setIsCameraReady: i } = Ui(), [r, a] = Le(), s = wi((I) => {
    a((C) => HI(I, C));
  }, []);
  return Ae(() => ((async () => {
    if (!(t != null && t.current)) {
      n(new te("Something went wrong during video initialization"));
      return;
    }
    const C = new kn(t.current);
    try {
      const u = {};
      u.facingMode = o, await C.initWebcam(u);
    } catch (u) {
      if (u instanceof Error) {
        n(te.fromCameraError(u));
        return;
      }
    }
    i(!0), s(C.getCameraResolution()), e.current = C;
  })(), function() {
    e.current && e.current.stopCamera();
  }), [o, n, i, t, s]), { cameraHandler: e.current, cameraSettings: (g = e.current) == null ? void 0 : g.getCameraSettings(), cameraResolution: r, onCameraResolutionChange: s };
}, MI = (t, o) => {
  const [e, n] = Le();
  Ae(() => {
    const i = () => {
      !t.current || e === window.innerWidth || (n(window.innerWidth), YI(o, t.current.getBoundingClientRect()));
    };
    return i(), window.addEventListener("resize", i), () => {
      window.removeEventListener("resize", i);
    };
  }, [t, o, e]);
};
function Zi() {
  throw new Error("Cycle detected");
}
var UI = Symbol.for("preact-signals");
function wr() {
  if ($t > -1 * -6085 + -1333 + -1 * 4751)
    $t--;
  else {
    for (var t, o = !1; void (103 * 11 + 64 * 38 + -3565) !== Hn; ) {
      var e = Hn;
      for (Hn = void (8206 * 1 + -1 * -5186 + -216 * 62), Uo++; void (1050 + -2491 * 1 + 11 * 131) !== e; ) {
        var n = e.o;
        if (e.o = void (-4 * -131 + 8103 + -8627), e.f &= -(4781 + 1 * 313 + 3 * -1697), !(9235 + -8126 * -1 + -17353 & e.f) && bs(e))
          try {
            e.c();
          } catch (i) {
            !o && (t = i, o = !(-87 * 64 + -5760 + -4 * -2832));
          }
        e = n;
      }
    }
    if (Uo = -987 * 1 + 4995 + 4 * -1002, $t--, o)
      throw t;
  }
}
var oe = void (7576 + 2 * 3305 + 1 * -14186), Hn = void (-2069 * -1 + -5465 + 3396), $t = 3 * 265 + 1 * 3746 + -4541, Uo = -5 * 838 + -3 * -1891 + 1483 * -1, ki = -4485 + -13 * -410 + 65 * -13;
function hs(t) {
  if (void (6209 + 4 * 674 + -65 * 137) !== oe) {
    var o = t.n;
    if (void (82 * -49 + 8116 + -3 * 1366) === o || o.t !== oe)
      return o = { i: 0, S: t, p: oe.s, n: void (7092 + -1822 * -2 + -10736), t: oe, e: void (-1 * -8012 + 1667 * 1 + 1 * -9679), x: void (4 * -662 + -9876 + 12524), r: o }, void (-5560 + 5 * 1112) !== oe.s && (oe.s.n = o), oe.s = o, t.n = o, 32 & oe.f && t.S(o), o;
    if (-(16 * 506 + -31 * -167 + -6 * 2212) === o.i)
      return o.i = -8171 * -1 + 7243 * -1 + -58 * 16, void (9562 + 2 * -4781) !== o.n && (o.n.p = o.p, void (2614 + -124 * 61 + -825 * -6) !== o.p && (o.p.n = o.n), o.p = oe.s, o.n = void (-14208 + 64 * 222), oe.s.n = o, oe.s = o), o;
  }
}
function fe(t) {
  this.v = t, this.i = -9909 + -7333 * 1 + 17242, this.n = void (1 * 8994 + 2 * 1321 + -11636), this.t = void (-1 * -7766 + -9033 * 1 + -181 * -7);
}
fe.prototype.brand = UI, fe.prototype.h = function() {
  return !(2 * -1127 + 1 * -8543 + -59 * -183);
}, fe.prototype.S = function(t) {
  this.t !== t && void (-1 * -347 + 2 * 4647 + -311 * 31) === t.e && (t.x = this.t, void (-230 * -2 + 452 * -6 + -1126 * -2) !== this.t && (this.t.e = t), this.t = t);
}, fe.prototype.U = function(t) {
  if (void (-7402 + -175 * 38 + -14052 * -1) !== this.t) {
    var o = t.e, e = t.x;
    void (8 * 71 + 9060 + 4 * -2407) !== o && (o.x = e, t.e = void (3 * 127 + 2736 + -1039 * 3)), void (-279 * 8 + -1 * 4421 + 6653) !== e && (e.e = o, t.x = void (-1445 * 3 + -533 + 4868)), t === this.t && (this.t = e);
  }
}, fe.prototype.subscribe = function(t) {
  var o = this;
  return Sr(function() {
    var e = o.value, n = 2 * -4464 + 9475 * -1 + 18435 & this.f;
    this.f &= -(-1 * 5686 + 2699 + 4 * 755);
    try {
      t(e);
    } finally {
      this.f |= n;
    }
  });
}, fe.prototype.valueOf = function() {
  return this.value;
}, fe.prototype.toString = function() {
  return this.value + "";
}, fe.prototype.toJSON = function() {
  return this.value;
}, fe.prototype.peek = function() {
  return this.v;
}, Object.defineProperty(fe.prototype, "value", { get: function() {
  var t = hs(this);
  return void (-3799 + 1 * 1909 + -18 * -105) !== t && (t.i = this.i), this.v;
}, set: function(t) {
  if (oe instanceof ht && function() {
    throw new Error("Computed cannot have side-effects");
  }(), t !== this.v) {
    Uo > 4298 + -444 * 10 + -121 * -2 && Zi(), this.v = t, this.i++, ki++, $t++;
    try {
      for (var o = this.t; void (-12 * -774 + -265 * 1 + -1289 * 7) !== o; o = o.x)
        o.t.N();
    } finally {
      wr();
    }
  }
} });
function ms(t) {
  return new fe(t);
}
function bs(t) {
  for (var o = t.s; void (10 * -914 + 6374 + 6 * 461) !== o; o = o.n)
    if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i)
      return !0;
  return !1;
}
function ys(t) {
  for (var o = t.s; void (247 * 25 + 934 * 5 + -15 * 723) !== o; o = o.n) {
    var e = o.S.n;
    if (void (-2530 + 25 * 238 + 76 * -45) !== e && (o.r = e), o.S.n = o, o.i = -(23 * 101 + 1 * 855 + -1059 * 3), void (-4402 + 3 * -33 + 4501) === o.n) {
      t.s = o;
      break;
    }
  }
}
function vs(t) {
  for (var o = t.s, e = void (2343 * -1 + -605 + -4 * -737); void (-16 * 10 + 9 * 943 + -8327) !== o; ) {
    var n = o.p;
    -(6088 + -1 * 6087) === o.i ? (o.S.U(o), void (-193 * 13 + 5463 + -2954) !== n && (n.n = o.n), void (1 * -5923 + 5604 + 319) !== o.n && (o.n.p = n)) : e = o, o.S.n = o.r, void (-1 * -9574 + 6609 + -16183) !== o.r && (o.r = void (-7 * 1169 + -6 * -160 + -31 * -233)), o = n;
  }
  t.s = e;
}
function ht(t) {
  fe.call(this, void (-71 * -131 + 9215 + -18516)), this.x = t, this.s = void (2 * -600 + -14 * 116 + -1 * -2824), this.g = ki - 1, this.f = 6657 + -1345 * -1 + -7998;
}
(ht.prototype = new fe()).h = function() {
  if (this.f &= -(1553 + 1 * -1550), 7352 * -1 + 1028 + 6325 & this.f)
    return !1;
  if (2271 * -4 + 1720 + 7396 == (-2962 * 3 + -4279 + -13201 * -1 & this.f))
    return !(2262 + 127 * -9 + -1119);
  if (this.f &= -(1621 + 24 * -239 + 4120), this.g === ki)
    return !(1 * -7662 + 10 * 73 + 3466 * 2);
  if (this.g = ki, this.f |= -7780 + -31 * -251, this.i > 5 * 84 + -3347 + 2927 && !bs(this))
    return this.f &= -2, !(-916 * 10 + -21 * 419 + -17959 * -1);
  var t = oe;
  try {
    ys(this), oe = this;
    var o = this.x();
    (-29 * 89 + -6425 * -1 + 116 * -33 & this.f || this.v !== o || -9173 + -1 * 3082 + 12255 === this.i) && (this.v = o, this.f &= -17, this.i++);
  } catch (e) {
    this.v = e, this.f |= 7673 + 1 * 5155 + 6406 * -2, this.i++;
  }
  return oe = t, vs(this), this.f &= -(-2571 + -2573 * -1), !(3875 + 2 * 3967 + -11809);
}, ht.prototype.S = function(t) {
  if (void (-2325 + 4481 * -1 + 6806) === this.t) {
    this.f |= 8686 + -4325 * 2;
    for (var o = this.s; void (46 * -141 + 8599 * -1 + 15085) !== o; o = o.n)
      o.S.S(o);
  }
  fe.prototype.S.call(this, t);
}, ht.prototype.U = function(t) {
  if (this.t !== void 0 && (fe.prototype.U.call(this, t), void (-3101 + 2 * -3693 + 10487 * 1) === this.t)) {
    this.f &= -(-14 * -501 + 619 * 2 + -8219);
    for (var o = this.s; void (95 * 41 + 4569 * 1 + -8464) !== o; o = o.n)
      o.S.U(o);
  }
}, ht.prototype.N = function() {
  if (!(6e3 + 5998 * -1 & this.f)) {
    this.f |= 89 * 23 + 87 * 92 + -10045;
    for (var t = this.t; void (-5 * -1009 + -5396 + 351) !== t; t = t.x)
      t.t.N();
  }
}, ht.prototype.peek = function() {
  if (this.h() || Zi(), -7468 + 1699 * 1 + 5785 & this.f)
    throw this.v;
  return this.v;
}, Object.defineProperty(ht.prototype, "value", { get: function() {
  11 * 609 + -4384 + 2314 * -1 & this.f && Zi();
  var t = hs(this);
  if (this.h(), t !== void 0 && (t.i = this.i), 16 & this.f)
    throw this.v;
  return this.v;
} });
function JI(t) {
  return new ht(t);
}
function ws(t) {
  var o = t.u;
  if (t.u = void (-13 * 161 + -3235 + 4 * 1332), typeof o == "function") {
    $t++;
    var e = oe;
    oe = void (1 * 878 + 2567 * 1 + -3445);
    try {
      o();
    } catch (n) {
      throw t.f &= -(6602 * -1 + -1 * -7826 + 47 * -26), t.f |= 946 + -1 * -9213 + 1 * -10151, Br(t), n;
    } finally {
      oe = e, wr();
    }
  }
}
function Br(t) {
  for (var o = t.s; void (-48 * -133 + -2 * 331 + -5722) !== o; o = o.n)
    o.S.U(o);
  t.x = void (7124 * -1 + -3721 * 1 + 10845), t.s = void (-9383 + -3 * 2440 + 16703), ws(t);
}
function QI(t) {
  if (oe !== this)
    throw new Error("Out-of-order effect");
  vs(this), oe = t, this.f &= -(-3956 + 1 * 8601 + -4643), -8623 * 1 + 4410 + 4221 & this.f && Br(this), wr();
}
function vn(t) {
  this.x = t, this.u = void (-9794 * -1 + 8140 + 21 * -854), this.s = void 0, this.o = void (-9721 + 9620 * 1 + 101), this.f = -13 * 56 + 43 * -223 + 10349;
}
vn.prototype.c = function() {
  var t = this.S();
  try {
    if (4951 * 1 + -6435 + 1492 & this.f || void (-2 * -4730 + 3899 + -73 * 183) === this.x)
      return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    t();
  }
}, vn.prototype.S = function() {
  -1 * -283 + 4804 + -5086 & this.f && Zi(), this.f |= -3740 + 15 * -606 + 39 * 329, this.f &= -(-228 + 79 * 3), ws(this), ys(this), $t++;
  var t = oe;
  return oe = this, QI.bind(this, t);
}, vn.prototype.N = function() {
  !(3030 + -147 * -43 + -9349 & this.f) && (this.f |= 83 * 79 + -521 * 11 + -824, this.o = Hn, Hn = this);
}, vn.prototype.d = function() {
  this.f |= -221 * -43 + 31 * -71 + -7294, -1 * 5471 + -4984 + 1 * 10456 & this.f || Br(this);
};
function Sr(t) {
  var o = new vn(t);
  try {
    o.c();
  } catch (e) {
    throw o.d(), e;
  }
  return o.d.bind(o);
}
var bo;
function zt(t, o) {
  k[t] = o.bind(null, k[t] || function() {
  });
}
function ii(t) {
  bo && bo(), bo = t && t.S();
}
function Bs(t) {
  var o = this, e = t.data, n = Ss(e);
  n.value = e;
  var i = ze(function() {
    for (var r = o.__v; r = r.__; )
      if (r.__c) {
        r.__c.__$f |= -3325 + -1 * -3329;
        break;
      }
    return o.__$u.c = function() {
      var a;
      !p0(i.peek()) && -1726 * 4 + 5 * 1234 + 737 === ((a = o.base) == null ? void (-537 * -5 + -140 * 40 + 583 * 5) : a.nodeType) ? o.base.data = i.peek() : (o.__$f |= -4734 * 1 + 4374 + 361, o.setState({}));
    }, JI(function() {
      var a = n.value.value;
      return 2104 * 1 + -9417 + 7313 === a ? 1 * 7767 + -1255 * 2 + -5257 : a === !0 ? "" : a || "";
    });
  }, []);
  return i.value;
}
Bs.displayName = "_st";
var Jo = {};
Jo.configurable = !(-1081 * 2 + -1818 + 1 * 3980), Jo.value = void (5367 + -2 * -3741 + 4283 * -3);
var Qo = {};
Qo.configurable = !(966 + 2171 * -2 + 1688 * 2), Qo.value = Bs;
var zo = {};
zo.configurable = !(-8738 + -2 * -934 + 6870), zo.get = function() {
  var t = {};
  return t.data = this, t;
};
var $o = {};
$o.configurable = !(-1 * 4984 + 36 * 75 + 2284), $o.value = 1;
var pn = {};
pn.constructor = Jo, pn.type = Qo, pn.props = zo, pn.__b = $o, Object.defineProperties(fe.prototype, pn), zt("__b", function(t, o) {
  if (typeof o.type == "string") {
    var e, n = o.props;
    for (var i in n)
      if (i !== "children") {
        var r = n[i];
        r instanceof fe && (e || (o.__np = e = {}), e[i] = r, n[i] = r.peek());
      }
  }
  t(o);
}), zt("__r", function(t, o) {
  ii();
  var e, n = o.__c;
  n && (n.__$f &= -(-95 * 41 + 32 * 298 + -5639 * 1), void (7145 * 1 + -5958 + -1187) === (e = n.__$u) && (n.__$u = e = function(i) {
    var r;
    return Sr(function() {
      r = this;
    }), r.c = function() {
      n.__$f |= -1 * 8975 + -1169 * -8 + -376 * 1, n.setState({});
    }, r;
  }())), ii(e), t(o);
}), zt("__e", function(t, o, e, n) {
  ii(), t(o, e, n);
}), zt("diffed", function(t, o) {
  ii();
  var e;
  if (typeof o.type == "string" && (e = o.__e)) {
    var n = o.__np, i = o.props;
    if (n) {
      var r = e.U;
      if (r)
        for (var a in r) {
          var s = r[a];
          void (509 * -2 + 1879 + -287 * 3) !== s && !(a in n) && (s.d(), r[a] = void (3899 * -1 + 3261 + 638));
        }
      else
        e.U = r = {};
      for (var g in n) {
        var I = r[g], C = n[g];
        void (5678 * 1 + -1840 + -3838) === I ? (I = zI(e, g, C, i), r[g] = I) : I.o(C, i);
      }
    }
  }
  t(o);
});
function zI(t, o, e, n) {
  var i = o in t && t.ownerSVGElement === void 0, r = ms(e);
  return { o: function(a, s) {
    r.value = a, n = s;
  }, d: Sr(function() {
    var a = r.value.value;
    n[o] !== a && (n[o] = a, i ? t[o] = a : a ? t.setAttribute(o, a) : t.removeAttribute(o));
  }) };
}
zt("unmount", function(t, o) {
  if (typeof o.type == "string") {
    var e = o.__e;
    if (e) {
      var n = e.U;
      if (n) {
        e.U = void (5831 + 7 * -302 + -3717);
        for (var i in n) {
          var r = n[i];
          r && r.d();
        }
      }
    }
  } else {
    var a = o.__c;
    if (a) {
      var s = a.__$u;
      s && (a.__$u = void (-3116 + -1 * 7811 + 10927), s.d());
    }
  }
  t(o);
}), zt("__h", function(t, o, e, n) {
  (n < 12971 + 2 * -6484 || -1 * 3863 + 3 * -3274 + 167 * 82 === n) && (o.__$f |= 3132 + 4192 * -2 + 5254), t(o, e, n);
}), Pe.prototype.shouldComponentUpdate = function(t, o) {
  var e = this.__$u;
  if (!(e && void (-17 * 452 + -8795 + 1831 * 9) !== e.s || 5 * 1822 + -3 * 31 + -1 * 9013 & this.__$f))
    return !(3 * -229 + -1 * -599 + 88);
  if (-3797 * 2 + 9115 + 33 * -46 & this.__$f)
    return !(6 * 753 + 137 * -36 + 414);
  for (var n in o)
    return !0;
  for (var i in t)
    if (i !== "__source" && t[i] !== this.props[i])
      return !(4 * -1966 + -9559 + -131 * -133);
  for (var r in this.props)
    if (!(r in t))
      return !(544 * -4 + -3 * 2643 + -215 * -47);
  return !(-1 * 45 + -4455 + 4501 * 1);
};
function Ss(t) {
  return ze(function() {
    return ms(t);
  }, []);
}
const Gr = (t) => {
  const { height: o, width: e } = yr(t), n = (t.width - e) / (2542 + -48 * -13 + -3164), i = (t.height - o) / (9033 * 1 + 4057 + -13088), r = {};
  return r.shiftX = n, r.shiftY = i, r.width = e, r.height = o, r;
}, Gs = (t, o) => {
  const e = yr(t), n = e.width - e.width * (-4 * -1207 + -1 * -560 + -5386) * o, i = e.height - e.height * (-1 * -3376 + -9208 + 2 * 2917) * o, r = (t.width - n) / (7809 * 1 + 6062 + -23 * 603), a = (t.height - i) / (-2617 + -9 * -291), s = {};
  return s.width = n, s.height = i, s.shiftX = r, s.shiftY = a, s;
}, oi = (t, o) => {
  const { shiftX: e, shiftY: n } = Gr(t), i = {};
  return i.x = o.x + e, i.y = o.y + n, i;
}, $I = (t, o) => ({ ...o, topLeft: oi(t, o.topLeft), topRight: oi(t, o.topRight), bottomRight: oi(t, o.bottomRight), bottomLeft: oi(t, o.bottomLeft) }), _I = ({
  appTier: t,
  cameraResolution: o,
  detectionDetails: e,
  isImageMirror: n
}) => {
  const {
    documentCameraOptions: {
      thresholds: i
    }
  } = fs(), r = Pt(null);
  if (Ae(() => {
    if (!(r != null && r.current))
      return;
    r.current.width = o.width, r.current.height = o.height, lI(r.current);
    const v = Gr(o), B = Gs(o, i.outOfBoundsThreshold), K = Is(o);
    e.value && (gI({
      canvas: r.current,
      polygon: e.value.document,
      color: "red"
    }), ho(r.current, v, "lime"), ho(r.current, B, "yellow"), ho(r.current, K, "blue"));
  }, [o, e.value, i.outOfBoundsThreshold]), !e.value)
    return null;
  const {
    detectionTime: a,
    document: s,
    fps: g,
    instructionCode: I,
    invalidValidators: C,
    resolution: u,
    samVersion: p
  } = e.value, A = {
    Confidence: s.confidence,
    "Smallest edge": s.smallestEdge,
    Brightness: s.brightness,
    Hotspots: s.hotspots,
    Sharpness: s.sharpness,
    "Detection time": a,
    FPS: g,
    Tier: t,
    Instruction: I,
    Resolution: JSON.stringify(u),
    "Component version": "6.1.0"
  };
  return p && (A["SAM version"] = p), C.length > 0 && (A["Invalid validators"] = C.join(", ")), H(Tx, {
    ref: r,
    cameraResolution: o,
    detectionDetails: A,
    isImageMirror: n
  });
};
function qI(t) {
  return H("rect", {
    fill: "#000",
    ...t,
    rx: "2%"
  });
}
function el(t) {
  const [o, e] = Le(!1), n = () => e((a) => !a), i = "" + o;
  En(() => {
    function a() {
      if (!t.current)
        return;
      const C = new MutationObserver(() => {
        n();
      }), u = {};
      return u.childList = !0, u.subtree = !0, u.attributes = !0, C.observe(t.current, u), C;
    }
    function s() {
      var p;
      if (!((p = t.current) != null && p["parentElement"]))
        return;
      const C = new MutationObserver((A) => {
        A.find((B) => {
          for (const K of B.removedNodes)
            if (K === t.current)
              return !0;
        }) && n(), A.forEach((B) => {
          B.addedNodes.forEach((K) => {
            var G;
            (G = K.parentElement) == null || G.removeChild(K);
          });
        });
      }), u = {};
      return u.childList = !0, C.observe(t.current.parentElement, u), C;
    }
    const g = a(), I = s();
    return () => {
      I == null || I.disconnect(), g == null || g.disconnect();
    };
  });
  const r = {};
  return r.key = i, r;
}
const tl = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function nl({
  cutOut: t,
  height: o,
  width: e
}) {
  const n = Pt(null), {
    key: i
  } = el(n);
  return H("div", {
    ref: n,
    style: tl,
    children: H("svg", {
      viewBox: `0 0 ${e} ${o}`,
      children: [H("defs", {
        children: [H("mask", {
          id: "placeholder",
          children: [H("rect", {
            fill: "#fff",
            height: "100%",
            width: "100%"
          }), t]
        }), H("pattern", {
          height: window.innerWidth > 480 ? "400" : "900",
          id: "innooverlay",
          patternUnits: "userSpaceOnUse",
          viewBox: "0 40 300 200",
          width: window.innerWidth > 480 ? "350" : "700",
          x: "0",
          y: "0",
          children: [H("g", {
            transform: "translate(100, 170)",
            children: [H("path", {
              d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
              fill: "white",
              opacity: "0.3"
            })]
          }), H("g", {
            transform: "translate(10, 0)",
            children: [H("path", {
              d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
              fill: "white",
              opacity: "0.3"
            }), H("path", {
              d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
              fill: "white",
              opacity: "0.3"
            })]
          })]
        })]
      }), H("rect", {
        fill: "url(#innooverlay)",
        height: "100%",
        mask: "url(#placeholder)",
        width: "100%"
      })]
    })
  }, i);
}
function il({
  fullOverlay: t,
  resolution: o
}) {
  const e = hI(o), n = `${e.height * 100}%`, i = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, a = `${e.shiftY * 100}%`;
  return H(nl, {
    cutOut: t || H(qI, {
      height: n,
      width: i,
      x: r,
      y: a
    }),
    height: o.height,
    width: o.width
  });
}
const ol = async () => WebAssembly.validate(new Uint8Array([-1 * 967 + 8203 + -134 * 54, 5049 + 9613 * 1 + -14565, -14096 + -3 * -4737, 7410 + 31 * -314 + -1 * -2433, -4 * 1235 + 6239 + 2 * -649, -733 * -1 + 213 + 22 * -43, 2 * -4901 + 9493 * -1 + 19295, -9273 + 1 * 3435 + 2919 * 2, 1, 7498 * 1 + 71 * -44 + -4369, -10178 + 261 * 39, -5434 + -571 * -5 + 107 * 25, 0, 1, 4139 + -1004 * 4, 4 * -667 + -6599 + 9270, -5816 + -66 * -128 + -1315 * 2, 1, 46 * 53 + -5018 + 15 * 172, -351 * -23 + 2 * -3171 + 1721 * -1, -3104 + -1 * -7858 + -4744, 1 * 5101 + 413 * -5 + -3035, -161 + 1 * 169, 2715 + 1130 * -1 + 317 * -5, 8410 + -5129 * 1 + -3216, 0, -7788 + 731 * 11, 5 * -1974 + 7395 + 1245 * 2, 78 * 56 + 1961 + -6076, 98, -9825 + 4 * 2459]));
async function rl() {
  const t = {};
  t.name = gs, t.length = 256;
  const o = await window.crypto.subtle.generateKey(t, !0, ["encrypt", "decrypt"]), e = Uint8Array.from(Array(3689 * 1 + -1613 * -1 + -5286).fill(1024 * -8 + -2 * 604 + 9400)), n = window.crypto.getRandomValues(e), i = {};
  return i.key = o, i.iv = n, i;
}
async function al(t) {
  const { iv: o, key: e } = await rl(), n = {};
  n.name = gs, n.iv = o;
  const i = await window.crypto.subtle.encrypt(n, e, t), r = await window.crypto.subtle.exportKey("raw", e), a = {};
  return a.message = i, a.key = r, a.iv = o, a;
}
function sl(t) {
  const o = new ArrayBuffer(t.length), e = new Uint8Array(o);
  for (let n = 9110 + -1 * 5394 + -3716, i = t.length; n < i; n++)
    e[n] = t.charCodeAt(n);
  return o;
}
function gl() {
  const t = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", o = window.atob(t), e = window.atob(o), n = sl(e), i = {};
  return i.name = cs, i.hash = $x, window.crypto.subtle.importKey("spki", n, i, !0, ["encrypt"]);
}
async function cl(t) {
  const o = await gl(), e = {};
  return e.name = cs, window.crypto.subtle.encrypt(e, o, t);
}
async function xl(t) {
  const { iv: o, key: e, message: n } = await al(t), i = await cl(e), r = {};
  return r.key = i, r.iv = o, r.message = n, r;
}
async function Il(t) {
  const o = await window.crypto.subtle.digest("SHA-1", t);
  return Array.from(new Uint8Array(o)).map((e) => e.toString(3603 + -3329 * -2 + -10245).padStart(2898 + 5393 * 1 + -8289, "0")).join("");
}
class ll {
  constructor() {
    D(this, "samVersion", null);
    D(this, "isDetectorInitialized", !1);
    D(this, "isInCandidateSelection", !1);
    D(this, "lastImage", null);
    D(this, "bestImage", null);
    D(this, "detectionRecord", []);
    D(this, "candidateSelectionImages", []);
    D(this, "thresholds", null);
    D(this, "acceleration", null);
    D(this, "imagesForDuplicateDetection", new Cs(Qx));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const e = await this.detector.getSamVersion();
    this.setSamVersion(e), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await ol() ? $a.SIMD : $a.NO_SIMD;
  }
  async init({ thresholds: o, wasmDirectoryPath: e }) {
    this.setThresholds(o), await this.initDetector(e);
  }
  setSamVersion(o) {
    if (!o || !this.areVersionsCompatible(o))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new te("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = o;
  }
  areVersionsCompatible(o) {
    return o === eI;
  }
  getCandidateSelectionImages() {
    return this.candidateSelectionImages;
  }
  getBestImage() {
    return this.bestImage;
  }
  getDetectionRecord() {
    return this.detectionRecord;
  }
  getThresholds() {
    if (!this.thresholds)
      throw new te("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
  setThresholds(o) {
    this.thresholds = o;
  }
  setAcceleration(o) {
    this.acceleration = o;
  }
  restart() {
    this.isInCandidateSelection = !1, this.lastImage = null, this.bestImage = null, this.candidateSelectionImages = [], this.detectionRecord = [], this.clearImagesForDuplicateDetection();
  }
  isDetectionValid(o) {
    return Object.values(o).every((n) => n === !0);
  }
  isNewImageBetter(o, e) {
    return e.sharpness > o.sharpness;
  }
  async collectImagesForDuplicateDetection(o) {
    const e = o.length / qx, n = e / (178 * 32 + 463 * -14 + -197 * -4), i = o.length / (3249 + 21 * -467 + 1 * 6560), r = await Il(o.slice(i - n, i + n));
    this.imagesForDuplicateDetection.pushFixed(r);
  }
  clearImagesForDuplicateDetection() {
    this.imagesForDuplicateDetection.clear();
  }
  getImagesForDuplicateDetection() {
    return this.imagesForDuplicateDetection.getAsArray();
  }
}
(function() {
  var t = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return function(o) {
    o = o || {};
    var e;
    e || (e = typeof o < "u" ? o : {});
    var n, i;
    e.ready = new Promise(function(c, x) {
      n = c, i = x;
    });
    var r = {}, a;
    for (a in e)
      e.hasOwnProperty(a) && (r[a] = e[a]);
    var s = "./this.program", g = !1, I = !(21 * -374 + 677 * -2 + 9209);
    g = typeof window == "object", I = typeof importScripts == "function";
    var C = "", u;
    (g || I) && (I ? C = self.location.href : document.currentScript && (C = document.currentScript.src), t && (C = t), 29 * -55 + 4 * 776 + -1509 !== C.indexOf("blob:") ? C = C.substr(11 * -241 + 3787 + -2 * 568, C.lastIndexOf("/") + 1) : C = "", I && (u = function(c) {
      var x = new XMLHttpRequest();
      return x.open("GET", c, !(3890 + 1 * -9289 + 5400)), x.responseType = "arraybuffer", x.send(null), new Uint8Array(x.response);
    }));
    var p = e.printErr || console.warn.bind(console);
    for (a in r)
      r.hasOwnProperty(a) && (e[a] = r[a]);
    r = null, e.thisProgram && (s = e.thisProgram);
    var A;
    e.wasmBinary && (A = e.wasmBinary), e.noExitRuntime && e.noExitRuntime, typeof WebAssembly != "object" && ot("no native wasm support detected");
    var v, B = !(8567 + 2 * 1693 + -11952);
    function K(c) {
      c || ot("Assertion failed: undefined");
    }
    var G = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function w(c, x, l) {
      var f = ue;
      if (-3 * 1310 + 2680 + -2 * -625 < l) {
        l = x + l - (4326 + 1 * -4325);
        for (var m = -8 * -683 + -607 * -7 + -9713; m < c.length; ++m) {
          var b = c.charCodeAt(m);
          if (-2 * -13709 + -58692 + 86570 <= b && -22508 * -3 + 74397 + 3253 * -26 >= b) {
            var Z = c.charCodeAt(++m);
            b = 73110 + -2889 * -20 + 82 * -797 + ((b & -7894 + -2 * -101 + 8715) << 2818 * 2 + -215 * -41 + -14441 * 1) | Z & 8511 + 322 * 31 + -17470;
          }
          if (-3884 * 2 + -2462 * -4 + -1953 >= b) {
            if (x >= l)
              break;
            f[x++] = b;
          } else {
            if (2422 * -4 + -492 + -1 * -12227 >= b) {
              if (x + (-1157 * 4 + 4669 + 1 * -40) >= l)
                break;
              f[x++] = -13 * 191 + 3029 * -3 + 11762 | b >> 1 * 7048 + 583 * 1 + 7625 * -1;
            } else {
              if (12 * 9017 + -53836 * 2 + 65003 >= b) {
                if (x + (1 * -3851 + -7703 + 11556) >= l)
                  break;
                f[x++] = -7 * -1022 + 83 * 112 + -16226 | b >> 68 * -31 + -6634 + -1 * -8754;
              } else {
                if (x + (1 * 4349 + 9866 + 2 * -7106) >= l)
                  break;
                f[x++] = 122 * -12 + -3495 * -2 + 3 * -1762 | b >> 21 * 74 + 1 * 8408 + -9944, f[x++] = -1 * 7232 + 1291 * 6 + -386 * 1 | b >> -5361 + -3 * -2731 + -2820 & 3746 + 125 * -1 + -3558;
              }
              f[x++] = 1 * 9313 + 4 * 1831 + -16509 | b >> 342 + -336 * 1 & -1597 * -5 + 2 * 1172 + -10266;
            }
            f[x++] = 8864 + 2803 * -2 + -3130 | b & -2049 * -4 + -59 * 151 + -8 * -97;
          }
        }
        f[x] = -29 * 319 + -7818 + -1 * -17069;
      }
    }
    var E = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-1 * -1199 + 73 * 121 + -10032);
    function $(c, x) {
      for (var l = c >> 1, f = l + x / (20 + -633 * 9 + 5679); !(l >= f) && Se[l]; )
        ++l;
      if (l <<= 3761 * 1 + -149 * 1 + -157 * 23, 32 < l - c && E)
        return E.decode(ue.subarray(c, l));
      for (l = -10 * -262 + -6060 + 172 * 20, f = ""; ; ) {
        var m = et[c + 2 * l >> 1];
        if (m == 0 || l == x / (7563 + -31 * -151 + -12242))
          return f;
        ++l, f += String.fromCharCode(m);
      }
    }
    function X(c, x, l) {
      if (void (1 * 4933 + 17 * -73 + 4 * -923) === l && (l = -1 * -3304938373 + -722099832 + -435354894), 89 * 23 + -8091 * 1 + -2 * -3023 > l)
        return 29 * 167 + 35 * -103 + 619 * -2;
      l -= -39 * -3 + 6074 + -2063 * 3;
      var f = x;
      l = l < (3410 + 111 * 9 + -4407) * c.length ? l / (8811 + 1 * 9079 + 4 * -4472) : c.length;
      for (var m = 1 * 3974 + -5593 + 1619; m < l; ++m)
        et[x >> 9 * 1083 + -5242 + 4504 * -1] = c.charCodeAt(m), x += 2765 + -307 * 9;
      return et[x >> 321 * -1 + -2939 + 3261] = 0, x - f;
    }
    function U(c) {
      return (-152 * -53 + 1420 * -5 + 3 * -318) * c.length;
    }
    function W(c, x) {
      for (var l = 147 * -35 + 144 + 3 * 1667, f = ""; !(l >= x / (8730 + 8726 * -1)); ) {
        var m = se[c + 4 * l >> 2];
        if (-846 + 9 * 94 == m)
          break;
        ++l, 181 * 37 + 116571 + -57732 <= m ? (m -= 65536, f += String.fromCharCode(47791 + -19 * -395 | m >> 3304 + -3 * -1979 + -9231, 2 * -41601 + 50969 + 88553 | m & -8243 * 1 + -107 * 65 + 16221)) : f += String.fromCharCode(m);
      }
      return f;
    }
    function ne(c, x, l) {
      if (void (1 * -9689 + 2862 + 1 * 6827) === l && (l = -16 * -46193293 + -197 * 999126 + 1 * 1605218781), 4 > l)
        return 6867 * 1 + 886 * 2 + -8639;
      var f = x;
      l = f + l - (881 * -9 + -4359 + -6146 * -2);
      for (var m = 788 + -394 * 2; m < c.length; ++m) {
        var b = c.charCodeAt(m);
        if (55296 <= b && -5813 + 1 * -57944 + 121100 >= b) {
          var Z = c.charCodeAt(++m);
          b = 27998 + 32402 * -2 + 102342 + ((b & -241 * 5 + -9839 * 1 + 12067) << 6138 + 4007 * 1 + 1 * -10135) | Z & -2984 + 1 * 4007;
        }
        if (se[x >> 2] = b, x += -1 * 7457 + -1 * -8321 + 215 * -4, x + (-23 * 157 + 193 * 16 + 527 * 1) > l)
          break;
      }
      return se[x >> -4741 + -1 * -2648 + 419 * 5] = -6709 + 23 * 346 + 1249 * -1, x - f;
    }
    function _(c) {
      for (var x = -889 * 1 + -2 * 628 + 5 * 429, l = 558 * -7 + -1 * 4007 + 7913; l < c.length; ++l) {
        var f = c.charCodeAt(l);
        -2 * 40679 + -138 * 437 + 6155 * 32 <= f && -93165 + -16 * -3981 + 86812 >= f && ++l, x += 2426 + 2422 * -1;
      }
      return x;
    }
    var re, We, ue, et, Se, se, Ce, tt, pe;
    function Ge(c) {
      re = c, e.HEAP8 = We = new Int8Array(c), e.HEAP16 = et = new Int16Array(c), e.HEAP32 = se = new Int32Array(c), e.HEAPU8 = ue = new Uint8Array(c), e.HEAPU16 = Se = new Uint16Array(c), e.HEAPU32 = Ce = new Uint32Array(c), e.HEAPF32 = tt = new Float32Array(c), e.HEAPF64 = pe = new Float64Array(c);
    }
    var ye = e.INITIAL_MEMORY || -17 * 685242 + -15376447 + 13831 * 3167, Ze = {};
    Ze.initial = ye / (-23393 * -2 + 76272 + -57522), Ze.maximum = 32768, e.wasmMemory ? v = e.wasmMemory : v = new WebAssembly.Memory(Ze), v && (re = v.buffer), ye = re.byteLength, Ge(re);
    var ce = [], he = [], Me = [], nt = [];
    function it() {
      var c = e.preRun.shift();
      ce.unshift(c);
    }
    var ve = -35 * 190 + -14 * 429 + 12656, Oe = null;
    e.preloadedImages = {}, e.preloadedAudios = {};
    function ot(c) {
      throw e.onAbort && e.onAbort(c), p(c), B = !(1183 + -1319 * 5 + 5412), c = new WebAssembly.RuntimeError("abort(" + c + "). Build with -s ASSERTIONS=1 for more info."), i(c), c;
    }
    function Ne(c) {
      var x = Re;
      return String.prototype.startsWith ? x.startsWith(c) : 25 * -82 + 1140 * -5 + 125 * 62 === x.indexOf(c);
    }
    function Yt() {
      return Ne("data:application/octet-stream;base64,");
    }
    var Re = "sam.wasm";
    if (!Yt()) {
      var De = Re;
      Re = e.locateFile ? e.locateFile(De, C) : C + De;
    }
    function Rr() {
      try {
        if (A)
          return new Uint8Array(A);
        if (u)
          return u(Re);
        throw "both async and sync fetching of the wasm failed";
      } catch (c) {
        ot(c);
      }
    }
    function eg() {
      var c = {};
      return c.credentials = "same-origin", A || !g && !I || typeof fetch != "function" || Ne("file://") ? Promise.resolve().then(Rr) : fetch(Re, c).then(function(x) {
        if (!x.ok)
          throw "failed to load wasm binary file at '" + Re + "'";
        return x.arrayBuffer();
      }).catch(function() {
        return Rr();
      });
    }
    function Tn(c) {
      for (; 61 * -122 + -6911 + 14353 < c.length; ) {
        var x = c.shift();
        if (typeof x == "function")
          x(e);
        else {
          var l = x.Ba;
          typeof l == "number" ? void (-117 * 57 + -5173 + 11842) === x.ta ? zi("v", l)() : zi("vi", l)(x.ta) : l(x.ta === void 0 ? null : x.ta);
        }
      }
    }
    function zi(c, x) {
      var l = [];
      return function() {
        l.length = arguments.length;
        for (var f = 14 * 337 + -413 * 13 + 7 * 93; f < arguments.length; f++)
          l[f] = arguments[f];
        return l && l.length ? e["dynCall_" + c].apply(null, [x].concat(l)) : e["dynCall_" + c].call(null, x);
      };
    }
    function tg(c) {
      this.da = c - (-8898 + -1510 * 2 + 11934), this.Oa = function(x) {
        se[this.da + (5 * -1191 + 7 * -249 + 2 * 3853) >> -1 * -9859 + -8355 + -1 * 1502] = x;
      }, this.La = function(x) {
        se[this.da + (-6734 + 74 * 91) >> 1 * 5094 + -1 * -3459 + -8551] = x;
      }, this.Ma = function() {
        se[this.da + (-4 * 2218 + 3519 + 1 * 5357) >> 5455 + -1 * -8717 + -1090 * 13] = -6694 * 1 + 3562 * 2 + -430;
      }, this.Ka = function() {
        We[this.da + (-8194 + -2 * -4103) >> -8147 + 5 * 53 + 7882] = 0;
      }, this.Na = function() {
        We[this.da + (9420 + -79 * -26 + -1 * 11461) >> -1048 + -2 * -262 + 524] = 2718 + -9 * 302;
      }, this.Fa = function(x, l) {
        this.Oa(x), this.La(l), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Nn() {
      return -58 * -146 + 739 + -9207 < Nn.xa;
    }
    function $i(c) {
      switch (c) {
        case 7675 + -123 * -9 + 8781 * -1:
          return 1 * 1691 + -278 * 11 + 1367 * 1;
        case 8527 + -1 * -5546 + -14071:
          return 2 * -4349 + -1255 + -1422 * -7;
        case 4:
          return -1972 + -21 * -94;
        case -5508 + 2 * 2758:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + c);
      }
    }
    var Vr = void (1764 + -1 * 4831 + -3067 * -1);
    function we(c) {
      for (var x = ""; ue[c]; )
        x += Vr[ue[c++]];
      return x;
    }
    var Tt = {}, wt = {}, Dn = {};
    function _i(c) {
      if (c === void 0)
        return "_unknown";
      c = c.replace(/[^a-zA-Z0-9_]/g, "$");
      var x = c.charCodeAt(443 * -2 + 509 * 13 + -5731);
      return 30 * -206 + 2789 + 181 * 19 <= x && -5502 + 51 * 109 >= x ? "_" + c : c;
    }
    function qi(c, x) {
      return c = _i(c), new Function("body", "return function " + c + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(x);
    }
    function eo(c) {
      var x = Error, l = qi(c, function(f) {
        this.name = c, this.message = f, f = Error(f).stack, void (7003 + 1 * -7003) !== f && (this.stack = this.toString() + `
` + f.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return l.prototype = Object.create(x.prototype), l.prototype.constructor = l, l.prototype.toString = function() {
        return void (-1 * 9341 + -4102 * -2 + 1 * 1137) === this.message ? this.name : this.name + ": " + this.message;
      }, l;
    }
    var Nt = void (159 * -46 + -1 * -3518 + -1898 * -2);
    function F(c) {
      throw new Nt(c);
    }
    var Er = void (-7531 * -1 + -9 * -381 + 548 * -20);
    function Fn(c) {
      throw new Er(c);
    }
    function Dt(c, x, l) {
      function f(y) {
        y = l(y), y.length !== c.length && Fn("Mismatched type converter count");
        for (var O = 0; O < c.length; ++O)
          rt(c[O], y[O]);
      }
      c.forEach(function(y) {
        Dn[y] = x;
      });
      var m = Array(x.length), b = [], Z = -2 * -3012 + 3502 + 11 * -866;
      x.forEach(function(y, O) {
        wt.hasOwnProperty(y) ? m[O] = wt[y] : (b.push(y), Tt.hasOwnProperty(y) || (Tt[y] = []), Tt[y].push(function() {
          m[O] = wt[y], ++Z, Z === b.length && f(m);
        }));
      }), b.length === 0 && f(m);
    }
    function rt(c, x, l) {
      if (l = l || {}, !("argPackAdvance" in x))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var f = x.name;
      if (c || F('type "' + f + '" must have a positive integer typeid pointer'), wt.hasOwnProperty(c)) {
        if (l.Ea)
          return;
        F("Cannot register type '" + f + "' twice");
      }
      wt[c] = x, delete Dn[c], Tt.hasOwnProperty(c) && (x = Tt[c], delete Tt[c], x.forEach(function(m) {
        m();
      }));
    }
    function ng(c) {
      var x = {};
      return x.count = c.count, x.oa = c.oa, x.pa = c.pa, x.da = c.da, x.fa = c.fa, x.ga = c.ga, x.ha = c.ha, x;
    }
    function to(c) {
      F(c.A.fa.ea.name + " instance already deleted");
    }
    var no = !(9869 + -911 * 7 + -3491 * 1);
    function Pr() {
    }
    function Lr(c) {
      --c.count.value, -61 * -103 + -43 * 193 + -72 * -28 === c.count.value && (c.ga ? c.ha.na(c.ga) : c.fa.ea.na(c.da));
    }
    function ln(c) {
      return typeof FinalizationGroup > "u" ? (ln = function(x) {
        return x;
      }, c) : (no = new FinalizationGroup(function(x) {
        for (var l = x.next(); !l.done; l = x.next())
          l = l.value, l.da ? Lr(l) : console.warn("object already deleted: " + l.da);
      }), ln = function(x) {
        return no.register(x, x.A, x.A), x;
      }, Pr = function(x) {
        no.unregister(x.A);
      }, ln(c));
    }
    var un = void (-1 * -622 + 4 * 773 + -3714), Cn = [];
    function io() {
      for (; Cn.length; ) {
        var c = Cn.pop();
        c.A.oa = !(-6661 * -1 + -8350 + -1690 * -1), c.delete();
      }
    }
    function Ct() {
    }
    var Yr = {};
    function ig(c, x) {
      var l = e;
      if (void (-1 * -1347 + 7884 + -9231) === l[c].ja) {
        var f = l[c];
        l[c] = function() {
          return l[c].ja.hasOwnProperty(arguments.length) || F("Function '" + x + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + l[c].ja + ")!"), l[c].ja[arguments.length].apply(this, arguments);
        }, l[c].ja = [], l[c].ja[f.ya] = f;
      }
    }
    function Tr(c, x, l) {
      e.hasOwnProperty(c) ? ((l === void 0 || void (-5941 + 4693 * 1 + 1248) !== e[c].ja && void (6079 * -1 + 11 * -625 + -17 * -762) !== e[c].ja[l]) && F("Cannot register public name '" + c + "' twice"), ig(c, c), e.hasOwnProperty(l) && F("Cannot register multiple overloads of a function with the same number of arguments (" + l + ")!"), e[c].ja[l] = x) : (e[c] = x, void (4980 + -249 * 20) !== l && (e[c].Ra = l));
    }
    function og(c, x, l, f, m, b, Z, y) {
      this.name = c, this.constructor = x, this.ma = l, this.na = f, this.ia = m, this.Ca = b, this.qa = Z, this.Aa = y;
    }
    function Xn(c, x, l) {
      for (; x !== l; )
        x.qa || F("Expected null or instance of " + l.name + ", got an instance of " + x.name), c = x.qa(c), x = x.ia;
      return c;
    }
    function rg(c, x) {
      return x === null ? (this.ua && F("null is not a valid " + this.name), -3746 * 1 + -355 * -4 + 2326) : (x.A || F('Cannot pass "' + Xt(x) + '" as a ' + this.name), x.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), Xn(x.A.da, x.A.fa.ea, this.ea));
    }
    function ag(c, x) {
      if (x === null) {
        if (this.ua && F("null is not a valid " + this.name), this.sa) {
          var l = this.Ha();
          return c !== null && c.push(this.na, l), l;
        }
        return -17824 + 32 * 557;
      }
      if (x.A || F('Cannot pass "' + Xt(x) + '" as a ' + this.name), x.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && x.A.fa.ra && F("Cannot convert argument of type " + (x.A.ha ? x.A.ha.name : x.A.fa.name) + " to parameter type " + this.name), l = Xn(x.A.da, x.A.fa.ea, this.ea), this.sa)
        switch (void (2963 * 1 + 545 + -3508) === x.A.ga && F("Passing raw pointer to smart pointer is illegal"), this.Pa) {
          case 1 * -1081 + 4086 + -3005:
            x.A.ha === this ? l = x.A.ga : F("Cannot convert argument of type " + (x.A.ha ? x.A.ha.name : x.A.fa.name) + " to parameter type " + this.name);
            break;
          case 56 * -60 + -8547 + 11908:
            l = x.A.ga;
            break;
          case 1034 + -1 * 2867 + -1835 * -1:
            if (x.A.ha === this)
              l = x.A.ga;
            else {
              var f = x.clone();
              l = this.Ia(l, Ft(function() {
                f.delete();
              })), c !== null && c.push(this.na, l);
            }
            break;
          default:
            F("Unsupporting sharing policy");
        }
      return l;
    }
    function sg(c, x) {
      return x === null ? (this.ua && F("null is not a valid " + this.name), -1 * -2401 + -389 * -1 + -930 * 3) : (x.A || F('Cannot pass "' + Xt(x) + '" as a ' + this.name), x.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), x.A.fa.ra && F("Cannot convert argument of type " + x.A.fa.name + " to parameter type " + this.name), Xn(x.A.da, x.A.fa.ea, this.ea));
    }
    function jn(c) {
      return this.fromWireType(Ce[c >> 1677 + -3779 * -2 + -9233]);
    }
    function Nr(c, x, l) {
      return x === l ? c : void (-7867 + 1 * 7867) === l.ia ? null : (c = Nr(c, x, l.ia), c === null ? null : l.Aa(c));
    }
    var dn = {};
    function gg(c, x) {
      for (void (-9809 * 1 + -1 * 453 + 10262) === x && F("ptr should not be undefined"); c.ia; )
        x = c.qa(x), c = c.ia;
      return dn[x];
    }
    function Mn(c, x) {
      x.fa && x.da || Fn("makeClassHandle requires ptr and ptrType"), !!x.ha != !!x.ga && Fn("Both smartPtrType and smartPtr must be specified");
      var l = {};
      l.value = 1, x.count = l;
      var f = {};
      f.value = x;
      var m = {};
      return m.A = f, ln(Object.create(c, m));
    }
    function at(c, x, l, f) {
      this.name = c, this.ea = x, this.ua = l, this.ra = f, this.sa = !(2123 + 5 * 735 + 31 * -187), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-7073 + 643 * 11), void (2423 * 1 + 2523 * 2 + -77 * 97) !== x.ia ? this.toWireType = ag : (this.toWireType = f ? rg : sg, this.ka = null);
    }
    function Dr(c, x, l) {
      e.hasOwnProperty(c) || Fn("Replacing nonexistant public symbol"), void (2215 + -43 * 171 + 5138) !== e[c].ja && void (-1 * -5605 + 4523 * -1 + -2 * 541) !== l ? e[c].ja[l] = x : (e[c] = x, e[c].ya = l);
    }
    function dt(c, x) {
      c = we(c);
      var l = zi(c, x);
      return typeof l != "function" && F("unknown function pointer with signature " + c + ": " + x), l;
    }
    var Fr = void (-85 * 27 + -891 + 3186);
    function Xr(c) {
      c = oa(c);
      var x = we(c);
      return st(c), x;
    }
    function fn(c, x) {
      function l(b) {
        m[b] || wt[b] || (Dn[b] ? Dn[b].forEach(l) : (f.push(b), m[b] = !(3046 * -1 + 403 * 1 + 2643)));
      }
      var f = [], m = {};
      throw x.forEach(l), new Fr(c + ": " + f.map(Xr).join([", "]));
    }
    function jr(c, x) {
      for (var l = [], f = 581 + 3590 * 2 + -7761; f < c; f++)
        l.push(se[(x >> -4 * 1709 + -69 * -113 + -959) + f]);
      return l;
    }
    function Un(c) {
      for (; c.length; ) {
        var x = c.pop();
        c.pop()(x);
      }
    }
    function Mr(c, x, l) {
      return c instanceof Object || F(l + ' with invalid "this": ' + c), c instanceof x.ea.constructor || F(l + ' incompatible with "this" of type ' + c.constructor.name), c.A.da || F("cannot call emscripten binding method " + l + " on deleted object"), Xn(c.A.da, c.A.fa.ea, x.ea);
    }
    var Ur = {};
    Ur.value = void (-1825 + -2 * -3928 + 6031 * -1);
    var Jr = {};
    Jr.value = null;
    var Qr = {};
    Qr.value = !(-71 * 122 + -1876 + 2 * 5269);
    var zr = {};
    zr.value = !(13 * 28 + -9725 + 1 * 9362);
    var oo = [], Ve = [{}, Ur, Jr, Qr, zr];
    function ro(c) {
      -9223 * -1 + 4016 + 13235 * -1 < c && -4585 * -1 + -2332 + 1 * -2253 === --Ve[c].Ja && (Ve[c] = void (1701 + 304 * -13 + 2251), oo.push(c));
    }
    function Ft(c) {
      switch (c) {
        case void (23 * 151 + -9893 * -1 + 41 * -326):
          return -1 * 930 + 4240 + -3309;
        case null:
          return 6932 + 693 * -10;
        case !(-1 * -5619 + -1923 + -3696):
          return 1242 + -20 * 126 + 1281;
        case !1:
          return -4797 + -4451 * -1 + -2 * -175;
        default:
          var x = oo.length ? oo.pop() : Ve.length, l = {};
          return l.Ja = 1, l.value = c, Ve[x] = l, x;
      }
    }
    function Xt(c) {
      if (c === null)
        return "null";
      var x = typeof c;
      return x === "object" || x === "array" || x === "function" ? c.toString() : "" + c;
    }
    function cg(c, x) {
      switch (x) {
        case -2073 * 3 + 2 * 2053 + 2115:
          return function(l) {
            return this.fromWireType(tt[l >> 2]);
          };
        case 113 * -64 + -4394 + -401 * -29:
          return function(l) {
            return this.fromWireType(pe[l >> 1 * -9296 + -191 * -5 + -56 * -149]);
          };
        default:
          throw new TypeError("Unknown float type: " + c);
      }
    }
    function xg(c) {
      var x = Function;
      if (!(x instanceof Function))
        throw new TypeError("new_ called with constructor type " + typeof x + " which is not a function");
      var l = qi(x.name || "unknownFunctionName", function() {
      });
      return l.prototype = x.prototype, l = new l(), c = x.apply(l, c), c instanceof Object ? c : l;
    }
    function Ig(c, x, l) {
      switch (x) {
        case 1 * 1838 + 1 * -4741 + 1 * 2903:
          return l ? function(f) {
            return We[f];
          } : function(f) {
            return ue[f];
          };
        case 123 * 31 + -7487 + 1225 * 3:
          return l ? function(f) {
            return et[f >> -3277 + -1 * -3278];
          } : function(f) {
            return Se[f >> -2918 * 2 + -1968 + 7805];
          };
        case -323 * 19 + 2026 * 2 + 2087:
          return l ? function(f) {
            return se[f >> 9446 + -5045 * -1 + -14489];
          } : function(f) {
            return Ce[f >> 3746 + 4395 * -1 + 651];
          };
        default:
          throw new TypeError("Unknown integer type: " + c);
      }
    }
    function ao(c) {
      return c || F("Cannot use deleted val. handle = " + c), Ve[c].value;
    }
    function $r(c, x) {
      var l = wt[c];
      return void (-2 * -4243 + 1748 + -17 * 602) === l && F(x + " has unknown type " + Xr(c)), l;
    }
    var lg = {}, _r = {};
    function qr() {
      if (!so) {
        var c = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: s || "./this.program" }, x;
        for (x in _r)
          c[x] = _r[x];
        var l = [];
        for (x in c)
          l.push(x + "=" + c[x]);
        so = l;
      }
      return so;
    }
    var so, ea = [];
    function ta(c) {
      var x = {}, l;
      for (l in c)
        (function(f) {
          var m = c[f];
          x[f] = typeof m == "function" ? function() {
            ea.push(f);
            try {
              return m.apply(null, arguments);
            } finally {
              if (B)
                return;
              var b = ea.pop();
              K(b === f);
            }
          } : m;
        })(l);
      return x;
    }
    for (var na = Array(20 * -179 + 9978 * 1 + 1 * -6142), Jn = -1 * -5721 + -21 * 293 + 432; -4229 * 1 + -2823 + 1827 * 4 > Jn; ++Jn)
      na[Jn] = String.fromCharCode(Jn);
    Vr = na, Nt = e.BindingError = eo("BindingError"), Er = e.InternalError = eo("InternalError"), Ct.prototype.isAliasOf = function(c) {
      if (!(this instanceof Ct && c instanceof Ct))
        return !(1 * -307 + -9829 * 1 + 10137);
      var x = this.A.fa.ea, l = this.A.da, f = c.A.fa.ea;
      for (c = c.A.da; x.ia; )
        l = x.qa(l), x = x.ia;
      for (; f.ia; )
        c = f.qa(c), f = f.ia;
      return x === f && l === c;
    }, Ct.prototype.clone = function() {
      if (this.A.da || to(this), this.A.pa)
        return this.A.count.value += -1678 * 4 + 9074 + 1 * -2361, this;
      var c = ln(Object.create(Object.getPrototypeOf(this), { A: { value: ng(this.A) } }));
      return c.A.count.value += 65 * -101 + -5457 + -1 * -12023, c.A.oa = !(8495 + -2 * -3736 + -15966), c;
    }, Ct.prototype.delete = function() {
      this.A.da || to(this), this.A.oa && !this.A.pa && F("Object already scheduled for deletion"), Pr(this), Lr(this.A), this.A.pa || (this.A.ga = void 0, this.A.da = void (-6 * 70 + 9788 + 9368 * -1));
    }, Ct.prototype.isDeleted = function() {
      return !this.A.da;
    }, Ct.prototype.deleteLater = function() {
      return this.A.da || to(this), this.A.oa && !this.A.pa && F("Object already scheduled for deletion"), Cn.push(this), -4870 * 1 + -9629 * 1 + -1 * -14500 === Cn.length && un && un(io), this.A.oa = !(4135 + 827 * -5), this;
    }, at.prototype.Da = function(c) {
      return this.wa && (c = this.wa(c)), c;
    }, at.prototype.va = function(c) {
      this.na && this.na(c);
    }, at.prototype.argPackAdvance = 7199 * -1 + 97 * 53 + 2066, at.prototype.readValueFromPointer = jn, at.prototype.deleteObject = function(c) {
      c !== null && c.delete();
    }, at.prototype.fromWireType = function(c) {
      function x() {
        return this.sa ? Mn(this.ea.ma, { fa: this.Ga, da: l, ha: this, ga: c }) : Mn(this.ea.ma, { fa: this, da: c });
      }
      var l = this.Da(c);
      if (!l)
        return this.va(c), null;
      var f = gg(this.ea, l);
      if (void (7719 + 1051 * -4 + 1 * -3515) !== f)
        return 4306 * 1 + -710 + -3596 === f.A.count.value ? (f.A.da = l, f.A.ga = c, f.clone()) : (f = f.clone(), this.va(c), f);
      if (f = this.ea.Ca(l), f = Yr[f], !f)
        return x.call(this);
      f = this.ra ? f.za : f.pointerType;
      var m = Nr(l, this.ea, f.ea);
      return m === null ? x.call(this) : this.sa ? Mn(f.ea.ma, { fa: f, da: m, ha: this, ga: c }) : Mn(f.ea.ma, { fa: f, da: m });
    }, e.getInheritedInstanceCount = function() {
      return Object.keys(dn).length;
    }, e.getLiveInheritedInstances = function() {
      var c = [], x;
      for (x in dn)
        dn.hasOwnProperty(x) && c.push(dn[x]);
      return c;
    }, e.flushPendingDeletes = io, e.setDelayFunction = function(c) {
      un = c, Cn.length && un && un(io);
    }, Fr = e.UnboundTypeError = eo("UnboundTypeError"), e.count_emval_handles = function() {
      for (var c = 0, x = -8749 + 577 * 6 + 84 * 63; x < Ve.length; ++x)
        void (-185 * -1 + -7144 * 1 + 6959) !== Ve[x] && ++c;
      return c;
    }, e.get_first_emval = function() {
      for (var c = 41 * -51 + -9030 + -5563 * -2; c < Ve.length; ++c)
        if (void (21 * -185 + -7176 + 11061 * 1) !== Ve[c])
          return Ve[c];
      return null;
    }, he.push({ Ba: function() {
      ia();
    } });
    var ug = { z: function(c) {
      return Qn(c + (132 * -41 + 2 * -3925 + 13278)) + (13646 + 13630 * -1);
    }, u: function(c, x, l) {
      throw new tg(c).Fa(x, l), "uncaught_exception" in Nn ? Nn.xa++ : Nn.xa = 79 * 8 + -3707 + 769 * 4, c;
    }, w: function(c, x, l, f, m) {
      var b = $i(l);
      x = we(x), rt(c, { name: x, fromWireType: function(Z) {
        return !!Z;
      }, toWireType: function(Z, y) {
        return y ? f : m;
      }, argPackAdvance: 8, readValueFromPointer: function(Z) {
        if (-93 * -47 + -6576 + 2206 === l)
          var y = We;
        else if (7558 + 7556 * -1 === l)
          y = et;
        else if (8513 * 1 + -9055 + -3 * -182 === l)
          y = se;
        else
          throw new TypeError("Unknown boolean type size: " + x);
        return this.fromWireType(y[Z >> b]);
      }, ka: null });
    }, h: function(c, x, l, f, m, b, Z, y, O, R, V, P, Q) {
      V = we(V), b = dt(m, b), y && (y = dt(Z, y)), R && (R = dt(O, R)), Q = dt(P, Q);
      var xe = _i(V);
      Tr(xe, function() {
        fn("Cannot construct " + V + " due to unbound types", [f]);
      }), Dt([c, x, l], f ? [f] : [], function(L) {
        if (L = L[3088 * 3 + 298 * 25 + 122 * -137], f)
          var Ue = L.ea, me = Ue.ma;
        else
          me = Ct.prototype;
        L = qi(xe, function() {
          if (Object.getPrototypeOf(this) !== jt)
            throw new Nt("Use 'new' to construct " + V);
          if (void (15657 + -15657 * 1) === Mt.la)
            throw new Nt(V + " has no accessible constructor");
          var aa = Mt.la[arguments.length];
          if (void (3952 + 1 * 2527 + -6479) === aa)
            throw new Nt("Tried to invoke ctor of " + V + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(Mt.la).toString() + ") parameters instead!");
          return aa.apply(this, arguments);
        });
        var ke = {};
        ke.value = L;
        var Bt = {};
        Bt.constructor = ke;
        var jt = Object.create(me, Bt);
        L.prototype = jt;
        var Mt = new og(V, L, jt, Q, Ue, b, y, R);
        Ue = new at(V, Mt, !(1601 * -5 + 5375 + 2630), !(1097 + -2 * -1497 + -4090)), me = new at(V + "*", Mt, !(275 * -22 + 8056 + -1 * 2005), !(-1667 * -5 + -2 * -4327 + -16988));
        var ra = new at(V + " const*", Mt, !1, !0), co = {};
        return co.pointerType = me, co.za = ra, Yr[c] = co, Dr(xe, L), [Ue, me, ra];
      });
    }, g: function(c, x, l, f, m, b) {
      K(-9 * 863 + 6024 + 1743 < x);
      var Z = jr(x, l);
      m = dt(f, m);
      var y = [b], O = [];
      Dt([], [c], function(R) {
        R = R[-6154 + 13 * -598 + -3482 * -4];
        var V = "constructor " + R.name;
        if (R.ea.la === void 0 && (R.ea.la = []), R.ea.la[x - (-502 + 16 * 249 + -59 * 59)] !== void 0)
          throw new Nt("Cannot register multiple constructors with identical number of parameters (" + (x - (-3352 + 1 * 1251 + 2 * 1051)) + ") for class '" + R.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return R.ea.la[x - (3 * -1902 + -2237 * -3 + -1004)] = function() {
          fn("Cannot construct " + R.name + " due to unbound types", Z);
        }, Dt([], Z, function(P) {
          return R.ea.la[x - (-6 * -567 + 1772 + -5173)] = function() {
            arguments.length !== x - (241 * 37 + 9359 * 1 + 1 * -18275) && F(V + " called with " + arguments.length + " arguments, expected " + (x - (-188 + 27 * 7))), O.length = -290 + -1 * 2702 + -136 * -22, y.length = x;
            for (var Q = 772 * 3 + 17 * 94 + -7 * 559; Q < x; ++Q)
              y[Q] = P[Q].toWireType(O, arguments[Q - (-6270 * -1 + 18 * 162 + 167 * -55)]);
            return Q = m.apply(null, y), Un(O), P[10 * -99 + 41 * 202 + -7292].fromWireType(Q);
          }, [];
        }), [];
      });
    }, b: function(c, x, l, f, m, b, Z, y, O, R) {
      x = we(x), m = dt(f, m), Dt([], [c], function(V) {
        V = V[-1 * 8111 + -9340 * -1 + -1229];
        var P = V.name + "." + x, Q = { get: function() {
          fn("Cannot access " + P + " due to unbound types", [l, Z]);
        }, enumerable: !(-5866 + -1 * -2191 + 3675), configurable: !(14 * -65 + 3 * 2311 + 19 * -317) };
        return O ? Q.set = function() {
          fn("Cannot access " + P + " due to unbound types", [l, Z]);
        } : Q.set = function() {
          F(P + " is a read-only property");
        }, Object.defineProperty(V.ea.ma, x, Q), Dt([], O ? [l, Z] : [l], function(xe) {
          var L = xe[0], Ue = { get: function() {
            var ke = Mr(this, V, P + " getter");
            return L.fromWireType(m(b, ke));
          }, enumerable: !(5 * -578 + 2514 + -2 * -188) };
          if (O) {
            O = dt(y, O);
            var me = xe[-3 * 1235 + -5106 + 8812];
            Ue.set = function(ke) {
              var Bt = Mr(this, V, P + " setter"), jt = [];
              O(R, Bt, me.toWireType(jt, ke)), Un(jt);
            };
          }
          return Object.defineProperty(V.ea.ma, x, Ue), [];
        }), [];
      });
    }, v: function(c, x) {
      x = we(x), rt(c, { name: x, fromWireType: function(l) {
        var f = Ve[l].value;
        return ro(l), f;
      }, toWireType: function(l, f) {
        return Ft(f);
      }, argPackAdvance: 8, readValueFromPointer: jn, ka: null });
    }, m: function(c, x, l) {
      l = $i(l), x = we(x), rt(c, { name: x, fromWireType: function(f) {
        return f;
      }, toWireType: function(f, m) {
        if (typeof m != "number" && typeof m != "boolean")
          throw new TypeError('Cannot convert "' + Xt(m) + '" to ' + this.name);
        return m;
      }, argPackAdvance: 8, readValueFromPointer: cg(x, l), ka: null });
    }, c: function(c, x, l, f, m, b) {
      var Z = jr(x, l);
      c = we(c), m = dt(f, m), Tr(c, function() {
        fn("Cannot call " + c + " due to unbound types", Z);
      }, x - (-1 * -7475 + -878 * 6 + -2206)), Dt([], Z, function(y) {
        var O = c, R = c;
        y = [y[-1006 + 6481 * -1 + 1 * 7487], null].concat(y.slice(4996 + 19 * 257 + 9878 * -1));
        var V = m, P = y.length;
        9840 + -1 * 4342 + 2748 * -2 > P && F("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var Q = y[-1 * 8269 + 3689 * 1 + -9 * -509] !== null && !(-1087 * -5 + -4349 + -1 * 1085), xe = !(-323 + 841 * 10 + -26 * 311), L = 2508 + 4373 * -1 + 1866; L < y.length; ++L)
          if (y[L] !== null && void (-14194 + 151 * 94) === y[L].ka) {
            xe = !0;
            break;
          }
        var Ue = y[5876 + 113 * -52].name !== "void", me = "", ke = "";
        for (L = -8806 + -1365 * -5 + 1981 * 1; L < P - (6993 + -316 * 2 + -1 * 6359); ++L)
          me += (-1 * -7292 + -3081 * -3 + -3307 * 5 !== L ? ", " : "") + "arg" + L, ke += (-10 * -886 + -849 + -8011 !== L ? ", " : "") + "arg" + L + "Wired";
        R = "return function " + _i(R) + "(" + me + `) {
if (arguments.length !== ` + (P - (1 * 807 + 7263 + -8068)) + `) {
throwBindingError('function ` + R + " called with ' + arguments.length + ' arguments, expected " + (P - (1 * 7765 + 6347 + -5 * 2822)) + ` args!');
}
`, xe && (R += `var destructors = [];
`);
        var Bt = xe ? "destructors" : "null";
        for (me = "throwBindingError invoker fn runDestructors retType classParam".split(" "), V = [F, V, b, Un, y[0], y[2068 + -5501 * -1 + -7568]], Q && (R += "var thisWired = classParam.toWireType(" + Bt + `, this);
`), L = 8229 + -59 * -82 + -179 * 73; L < P - (2091 + -1 * 2089); ++L)
          R += "var arg" + L + "Wired = argType" + L + ".toWireType(" + Bt + ", arg" + L + "); // " + y[L + (-1093 * 5 + 8395 + -2928)].name + `
`, me.push("argType" + L), V.push(y[L + (1094 + 2 * -4055 + 242 * 29)]);
        if (Q && (ke = "thisWired" + (-4533 + -1 * -6693 + -2160 < ke.length ? ", " : "") + ke), R += (Ue ? "var rv = " : "") + "invoker(fn" + (1 * -6607 + -4992 + 1657 * 7 < ke.length ? ", " : "") + ke + `);
`, xe)
          R += `runDestructors(destructors);
`;
        else
          for (L = Q ? 2216 + -7 * 1238 + 6451 * 1 : 4 * 631 + 15 * 587 + -11327; L < y.length; ++L)
            P = -9397 + 15 * -73 + 10493 === L ? "thisWired" : "arg" + (L - (-31 * 191 + -9167 + 1 * 15090)) + "Wired", y[L].ka !== null && (R += P + "_dtor(" + P + "); // " + y[L].name + `
`, me.push(P + "_dtor"), V.push(y[L].ka));
        return Ue && (R += `var ret = retType.fromWireType(rv);
return ret;
`), me.push(R + `}
`), y = xg(me).apply(null, V), Dr(O, y, x - (-9396 + 26 * 113 + 6459)), [];
      });
    }, e: function(c, x, l, f, m) {
      function b(R) {
        return R;
      }
      x = we(x), -(-1 * 9371 + -473 * 16 + 22 * 770) === m && (m = -4490 * -479942 + 6852671155 + -4712643440);
      var Z = $i(l);
      if (-4537 * -1 + 5249 + 1631 * -6 === f) {
        var y = 32 - 8 * l;
        b = function(R) {
          return R << y >>> y;
        };
      }
      var O = -(-4750 + 23 * -43 + 28 * 205) != x.indexOf("unsigned");
      rt(c, { name: x, fromWireType: b, toWireType: function(R, V) {
        if (typeof V != "number" && typeof V != "boolean")
          throw new TypeError('Cannot convert "' + Xt(V) + '" to ' + this.name);
        if (V < f || V > m)
          throw new TypeError('Passing a number "' + Xt(V) + '" from JS side to C/C++ side to an argument of type "' + x + '", which is outside the valid range [' + f + ", " + m + "]!");
        return O ? V >>> 53 * 180 + 11 * -8 + -9452 : V | 5554 + 7 * 1376 + -15186;
      }, argPackAdvance: 8, readValueFromPointer: Ig(x, Z, f !== 0), ka: null });
    }, d: function(c, x, l) {
      function f(y) {
        y >>= -1396 * 6 + -8796 + 17174;
        var O = Ce;
        return new m(re, O[y + 1], O[y]);
      }
      var m = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][x];
      l = we(l);
      var b = {};
      b.name = l, b.fromWireType = f, b.argPackAdvance = 8, b.readValueFromPointer = f;
      var Z = {};
      Z.Ea = !0, rt(c, b, Z);
    }, n: function(c, x) {
      x = we(x);
      var l = x === "std::string";
      rt(c, { name: x, fromWireType: function(f) {
        var m = Ce[f >> 2];
        if (l)
          for (var b = f + (7166 * -1 + -16 * 346 + 12706 * 1), Z = 750 + -17 * -213 + 93 * -47; Z <= m; ++Z) {
            var y = f + 4 + Z;
            if (Z == m || 1361 * 5 + -3084 + -3721 == ue[y]) {
              if (b) {
                var O = b, R = ue, V = O + (y - b);
                for (b = O; R[b] && !(b >= V); )
                  ++b;
                if (970 + 1 * -4397 + 3443 * 1 < b - O && R.subarray && G)
                  O = G.decode(R.subarray(O, b));
                else {
                  for (V = ""; O < b; ) {
                    var P = R[O++];
                    if (P & 5012 + 9511 * -1 + 7 * 661) {
                      var Q = R[O++] & 63;
                      if ((P & -28 * 283 + 5 * -1979 + -18043 * -1) == 192)
                        V += String.fromCharCode((P & 31) << -1 * -5363 + 2 * 4252 + 167 * -83 | Q);
                      else {
                        var xe = R[O++] & 63;
                        P = -6711 * 1 + -5378 + 1 * 12313 == (P & -122 * -61 + 4080 + -1 * 11282) ? (P & 15) << -2067 + -293 * 28 + 10283 | Q << -360 * -21 + -47 * 89 + -3371 | xe : (P & 6168 + -101 * 61) << 18 | Q << 1393 + -19 * -424 + -1 * 9437 | xe << -5070 + -169 * 55 + 14371 | R[O++] & 63, 108312 + -88887 * -1 + 2687 * -49 > P ? V += String.fromCharCode(P) : (P -= 70366 + -12778 * -8 + -107054, V += String.fromCharCode(-11986 + 97 * 248 + 43226 | P >> -2275 + 8 * 519 + -1867, 62905 + 3 * -1356 + -2517 | P & -996 * 3 + -6154 + 10165));
                      }
                    } else
                      V += String.fromCharCode(P);
                  }
                  O = V;
                }
              } else
                O = "";
              if (L === void 0)
                var L = O;
              else
                L += String.fromCharCode(53 * 72 + 5043 + 1 * -8859), L += O;
              b = y + (7031 + -7573 * -1 + 14603 * -1);
            }
          }
        else {
          for (L = Array(m), Z = 1 * -1504 + 1 * -854 + 2358; Z < m; ++Z)
            L[Z] = String.fromCharCode(ue[f + (6616 + 4515 * -1 + -2097) + Z]);
          L = L.join("");
        }
        return st(f), L;
      }, toWireType: function(f, m) {
        m instanceof ArrayBuffer && (m = new Uint8Array(m));
        var b = typeof m == "string";
        b || m instanceof Uint8Array || m instanceof Uint8ClampedArray || m instanceof Int8Array || F("Cannot pass non-string to std::string");
        var Z = (l && b ? function() {
          for (var R = -137 * 10 + 89 * 33 + -1567 * 1, V = 0; V < m.length; ++V) {
            var P = m.charCodeAt(V);
            55296 <= P && -6697 * 12 + 40261 + 97446 >= P && (P = 26461 + 2605 * 15 + ((P & 11860 + 10837 * -1) << -1441 + -1 * -439 + 1012) | m.charCodeAt(++V) & 1023), 714 + -587 * 1 >= P ? ++R : R = 2 * -3056 + 2157 + 6002 >= P ? R + (-1 * -6451 + -3 * -1031 + 4771 * -2) : -175 * 413 + 7 * -6253 + 181581 >= P ? R + 3 : R + (4623 + -13 * 744 + 5053);
          }
          return R;
        } : function() {
          return m.length;
        })(), y = Qn(1247 + -125 * -3 + -1618 + Z + (4 * 908 + -6368 + 17 * 161));
        if (Ce[y >> -3 * 2430 + -22 * -13 + 7006] = Z, l && b)
          w(m, y + (-79 * -35 + 3 * 1229 + -6448), Z + (8855 + -1 * -750 + 1372 * -7));
        else if (b)
          for (b = 1058 * 6 + -5998 + -350; b < Z; ++b) {
            var O = m.charCodeAt(b);
            -9813 + -337 * -29 + 295 < O && (st(y), F("String has UTF-16 code units that do not fit in 8 bits")), ue[y + (1 * -5464 + 849 + -4619 * -1) + b] = O;
          }
        else
          for (b = -3167 + -3167 * -1; b < Z; ++b)
            ue[y + (7726 + -66 * 117) + b] = m[b];
        return f !== null && f.push(st, y), y;
      }, argPackAdvance: 8, readValueFromPointer: jn, ka: function(f) {
        st(f);
      } });
    }, j: function(c, x, l) {
      if (l = we(l), x === 2)
        var f = $, m = X, b = U, Z = function() {
          return Se;
        }, y = 1134 + 103 * -11;
      else
        -2317 * -2 + 17 * 283 + 3 * -3147 === x && (f = W, m = ne, b = _, Z = function() {
          return Ce;
        }, y = -655 * 2 + 1985 + -673);
      rt(c, { name: l, fromWireType: function(O) {
        for (var R = Ce[O >> -2009 + 7081 * 1 + -5070], V = Z(), P, Q = O + (53 * -87 + -1982 + 6597), xe = 4941 + 116 * 12 + 2111 * -3; xe <= R; ++xe) {
          var L = O + 4 + xe * x;
          (xe == R || -14217 + -21 * -677 == V[L >> y]) && (Q = f(Q, L - Q), void (-9606 + 81 * -22 + 11388) === P ? P = Q : (P += String.fromCharCode(2 * -594 + -3517 * -2 + -2923 * 2), P += Q), Q = L + x);
        }
        return st(O), P;
      }, toWireType: function(O, R) {
        typeof R != "string" && F("Cannot pass non-string to C++ string type " + l);
        var V = b(R), P = Qn(-6894 + 2098 * 1 + -1600 * -3 + V + x);
        return Ce[P >> 1 * 4709 + -1567 * 3 + -6] = V >> y, m(R, P + (12 * 350 + -5595 + 1399 * 1), V + x), O !== null && O.push(st, P), P;
      }, argPackAdvance: 8, readValueFromPointer: jn, ka: function(O) {
        st(O);
      } });
    }, x: function(c, x) {
      x = we(x);
      var l = {};
      l.Qa = !(1 * 3946 + 4086 + 2 * -4016), l.name = x, l.argPackAdvance = 0, l.fromWireType = function() {
      }, l.toWireType = function() {
      }, rt(c, l);
    }, k: function(c, x, l) {
      c = ao(c), x = $r(x, "emval::as");
      var f = [], m = Ft(f);
      return se[l >> 15 * -181 + 5650 + 1 * -2933] = m, x.toWireType(f, c);
    }, i: ro, l: function(c, x) {
      return c = ao(c), x = ao(x), Ft(c[x]);
    }, p: function(c) {
      var x = lg[c];
      return Ft(void (-3 * -1171 + 1201 * 7 + 1490 * -8) === x ? we(c) : x);
    }, o: function(c) {
      Un(Ve[c].value), ro(c);
    }, y: function(c, x) {
      return c = $r(c, "_emval_take_value"), c = c.readValueFromPointer(x), Ft(c);
    }, f: function() {
      ot();
    }, q: function(c, x, l) {
      ue.copyWithin(c, x, x + l);
    }, r: function(c) {
      c >>>= -323 * 1 + 899 * -8 + 1 * 7515;
      var x = ue.length;
      if (135583243 * 10 + -1297051886 + -1 * -2088703104 < c)
        return !(4 * 2327 + 2620 + -11927);
      for (var l = 8059 * 1 + 9861 + -17919; 3791 + 5207 * -1 + 71 * 20 >= l; l *= 7 * -1049 + -2547 + 9892) {
        var f = x * (1 + 0.2 / l);
        f = Math.min(f, c + (3701 * -11287 + 23749729 + 118686754)), f = Math.max(1149 * 27366 + -16247048 + 526910 * 3, c, f), -9840 + -240 * -41 < f % (113062 * 1 + 83610 + 96 * -1366) && (f += 1 * -52296 + 1320 + -8 * -14564 - f % (-6116 + -18167 * -1 + -10697 * -5));
        e: {
          try {
            v.grow(Math.min(-3375023370 + -383724914 * 1 + 5906231932, f) - re.byteLength + (-119532 + 19 * 484 + 175871) >>> 16), Ge(v.buffer);
            var m = 1;
            break e;
          } catch {
          }
          m = void (4992 * -2 + 4 * -1787 + -4 * -4283);
        }
        if (m)
          return !0;
      }
      return !1;
    }, s: function(c, x) {
      var l = 0;
      return qr().forEach(function(f, m) {
        var b = x + l;
        for (m = se[c + (-8821 + 9 * -1004 + 17861) * m >> 1 * -8542 + -7647 * 1 + 16191] = b, b = -3342 + -29 * -203 + -5 * 509; b < f.length; ++b)
          We[m++ >> 0] = f.charCodeAt(b);
        We[m >> -7463 + -1707 * -1 + 5756] = -30 * -92 + 79 * 84 + -522 * 18, l += f.length + (1037 + -1 * -2977 + 1 * -4013);
      }), 1 * -391 + 5 * -1339 + 7086;
    }, t: function(c, x) {
      var l = qr();
      se[c >> 1636 * 2 + 2468 * 2 + -8206 * 1] = l.length;
      var f = -9252 + 1028 * 9;
      return l.forEach(function(m) {
        f += m.length + 1;
      }), se[x >> -2 * 1018 + -5008 + 7046] = f, 0;
    }, a: v };
    (function() {
      function c(Z) {
        Z = Z.exports, Z = ta(Z), e.asm = Z, ve--, e.monitorRunDependencies && e.monitorRunDependencies(ve), 1140 + -380 * 3 == ve && Oe && (Z = Oe, Oe = null, Z());
      }
      function x(Z) {
        c(Z.instance);
      }
      function l(Z) {
        return eg().then(function(y) {
          return WebAssembly.instantiate(y, m);
        }).then(Z, function(y) {
          p("failed to asynchronously prepare wasm: " + y), ot(y);
        });
      }
      var f = {};
      f.a = ug;
      var m = f;
      if (ve++, e.monitorRunDependencies && e.monitorRunDependencies(ve), e.instantiateWasm)
        try {
          var b = e.instantiateWasm(m, c);
          return b = ta(b);
        } catch (Z) {
          return p("Module.instantiateWasm callback failed with error: " + Z), !(-34 * 28 + 5871 + -4918);
        }
      return function() {
        if (A || typeof WebAssembly.instantiateStreaming != "function" || Yt() || Ne("file://") || typeof fetch != "function")
          return l(x);
        var Z = {};
        Z.credentials = "same-origin", fetch(Re, Z).then(function(y) {
          return WebAssembly.instantiateStreaming(y, m).then(x, function(O) {
            return p("wasm streaming compile failed: " + O), p("falling back to ArrayBuffer instantiation"), l(x);
          });
        });
      }(), {};
    })();
    var ia = e.___wasm_call_ctors = function() {
      return (ia = e.___wasm_call_ctors = e.asm.B).apply(null, arguments);
    }, Qn = e._malloc = function() {
      return (Qn = e._malloc = e.asm.C).apply(null, arguments);
    }, st = e._free = function() {
      return (st = e._free = e.asm.D).apply(null, arguments);
    }, oa = e.___getTypeName = function() {
      return (oa = e.___getTypeName = e.asm.E).apply(null, arguments);
    };
    e.___embind_register_native_and_builtin_types = function() {
      return (e.___embind_register_native_and_builtin_types = e.asm.F).apply(null, arguments);
    }, e.dynCall_ii = function() {
      return (e.dynCall_ii = e.asm.G).apply(null, arguments);
    }, e.dynCall_vi = function() {
      return (e.dynCall_vi = e.asm.H).apply(null, arguments);
    }, e.dynCall_i = function() {
      return (e.dynCall_i = e.asm.I).apply(null, arguments);
    }, e.dynCall_iii = function() {
      return (e.dynCall_iii = e.asm.J).apply(null, arguments);
    }, e.dynCall_viii = function() {
      return (e.dynCall_viii = e.asm.K).apply(null, arguments);
    }, e.dynCall_fii = function() {
      return (e.dynCall_fii = e.asm.L).apply(null, arguments);
    }, e.dynCall_viif = function() {
      return (e.dynCall_viif = e.asm.M).apply(null, arguments);
    }, e.dynCall_viiii = function() {
      return (e.dynCall_viiii = e.asm.N).apply(null, arguments);
    }, e.dynCall_viiiiii = function() {
      return (e.dynCall_viiiiii = e.asm.O).apply(null, arguments);
    }, e.dynCall_iiiiii = function() {
      return (e.dynCall_iiiiii = e.asm.P).apply(null, arguments);
    }, e.dynCall_viiiii = function() {
      return (e.dynCall_viiiii = e.asm.Q).apply(null, arguments);
    }, e.dynCall_iiiiiiii = function() {
      return (e.dynCall_iiiiiiii = e.asm.R).apply(null, arguments);
    }, e.dynCall_viiiiiii = function() {
      return (e.dynCall_viiiiiii = e.asm.S).apply(null, arguments);
    }, e.dynCall_viiiiiiiiidi = function() {
      return (e.dynCall_viiiiiiiiidi = e.asm.T).apply(null, arguments);
    }, e.dynCall_viiiiiiiidi = function() {
      return (e.dynCall_viiiiiiiidi = e.asm.U).apply(null, arguments);
    }, e.dynCall_viiiiiiiiii = function() {
      return (e.dynCall_viiiiiiiiii = e.asm.V).apply(null, arguments);
    }, e.dynCall_viiiiiiiii = function() {
      return (e.dynCall_viiiiiiiii = e.asm.W).apply(null, arguments);
    }, e.dynCall_viiiiiiii = function() {
      return (e.dynCall_viiiiiiii = e.asm.X).apply(null, arguments);
    }, e.dynCall_iiiiiii = function() {
      return (e.dynCall_iiiiiii = e.asm.Y).apply(null, arguments);
    }, e.dynCall_iiiii = function() {
      return (e.dynCall_iiiii = e.asm.Z).apply(null, arguments);
    }, e.dynCall_iiii = function() {
      return (e.dynCall_iiii = e.asm._).apply(null, arguments);
    }, e._asyncify_start_unwind = function() {
      return (e._asyncify_start_unwind = e.asm.$).apply(null, arguments);
    }, e._asyncify_stop_unwind = function() {
      return (e._asyncify_stop_unwind = e.asm.aa).apply(null, arguments);
    }, e._asyncify_start_rewind = function() {
      return (e._asyncify_start_rewind = e.asm.ba).apply(null, arguments);
    }, e._asyncify_stop_rewind = function() {
      return (e._asyncify_stop_rewind = e.asm.ca).apply(null, arguments);
    };
    var zn;
    Oe = function c() {
      zn || go(), zn || (Oe = c);
    };
    function go() {
      function c() {
        if (!zn && (zn = !(9614 + -2 * 4807), e.calledRun = !(14 * 509 + 4 * 249 + -1 * 8122), !B)) {
          if (Tn(he), Tn(Me), n(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), e.postRun)
            for (typeof e.postRun == "function" && (e.postRun = [e.postRun]); e.postRun.length; ) {
              var x = e.postRun.shift();
              nt.unshift(x);
            }
          Tn(nt);
        }
      }
      if (!(1 * -4366 + -9965 * 1 + 4777 * 3 < ve)) {
        if (e.preRun)
          for (typeof e.preRun == "function" && (e.preRun = [e.preRun]); e.preRun.length; )
            it();
        Tn(ce), 6256 + 1601 * -1 + 133 * -35 < ve || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            e.setStatus("");
          }, -1 * -5761 + -4 * -1569 + 236 * -51), c();
        }, -2 * -1697 + 5060 + -8453)) : c());
      }
    }
    if (e.run = go, e.preInit)
      for (typeof e.preInit == "function" && (e.preInit = [e.preInit]); -6 * -523 + 5605 * 1 + 7 * -1249 < e.preInit.length; )
        e.preInit.pop()();
    return go(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Zs = Symbol("Comlink.proxy"), ul = Symbol("Comlink.endpoint"), Cl = Symbol("Comlink.releaseProxy"), yo = Symbol("Comlink.finalizer"), mi = Symbol("Comlink.thrown"), ks = (t) => typeof t == "object" && t !== null || typeof t == "function", dl = {
  canHandle: (t) => ks(t) && t[Zs],
  serialize(t) {
    const { port1: o, port2: e } = new MessageChannel();
    return Ks(t, o), [e, [e]];
  },
  deserialize(t) {
    return t.start(), Os(t);
  }
}, fl = {
  canHandle: (t) => ks(t) && mi in t,
  serialize({ value: t }) {
    let o;
    return t instanceof Error ? o = {
      isError: !0,
      value: {
        message: t.message,
        name: t.name,
        stack: t.stack
      }
    } : o = { isError: !1, value: t }, [o, []];
  },
  deserialize(t) {
    throw t.isError ? Object.assign(new Error(t.value.message), t.value) : t.value;
  }
}, Hs = /* @__PURE__ */ new Map([
  ["proxy", dl],
  ["throw", fl]
]);
function Al(t, o) {
  for (const e of t)
    if (o === e || e === "*" || e instanceof RegExp && e.test(o))
      return !0;
  return !1;
}
function Ks(t, o = globalThis, e = ["*"]) {
  o.addEventListener("message", function n(i) {
    if (!i || !i.data)
      return;
    if (!Al(e, i.origin)) {
      console.warn(`Invalid origin '${i.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: a, path: s } = Object.assign({ path: [] }, i.data), g = (i.data.argumentList || []).map(Ht);
    let I;
    try {
      const C = s.slice(0, -1).reduce((p, A) => p[A], t), u = s.reduce((p, A) => p[A], t);
      switch (a) {
        case "GET":
          I = u;
          break;
        case "SET":
          C[s.slice(-1)[0]] = Ht(i.data.value), I = !0;
          break;
        case "APPLY":
          I = u.apply(C, g);
          break;
        case "CONSTRUCT":
          {
            const p = new u(...g);
            I = vl(p);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: p, port2: A } = new MessageChannel();
            Ks(t, A), I = yl(p, [p]);
          }
          break;
        case "RELEASE":
          I = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      I = { value: C, [mi]: 0 };
    }
    Promise.resolve(I).catch((C) => ({ value: C, [mi]: 0 })).then((C) => {
      const [u, p] = Wi(C);
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), p), a === "RELEASE" && (o.removeEventListener("message", n), Ws(o), yo in t && typeof t[yo] == "function" && t[yo]());
    }).catch((C) => {
      const [u, p] = Wi({
        value: new TypeError("Unserializable return value"),
        [mi]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), p);
    });
  }), o.start && o.start();
}
function pl(t) {
  return t.constructor.name === "MessagePort";
}
function Ws(t) {
  pl(t) && t.close();
}
function Os(t, o) {
  return _o(t, [], o);
}
function ri(t) {
  if (t)
    throw new Error("Proxy has been released and is not useable");
}
function Rs(t) {
  return Qt(t, {
    type: "RELEASE"
  }).then(() => {
    Ws(t);
  });
}
const Hi = /* @__PURE__ */ new WeakMap(), Ki = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
  const o = (Hi.get(t) || 0) - 1;
  Hi.set(t, o), o === 0 && Rs(t);
});
function hl(t, o) {
  const e = (Hi.get(o) || 0) + 1;
  Hi.set(o, e), Ki && Ki.register(t, o, t);
}
function ml(t) {
  Ki && Ki.unregister(t);
}
function _o(t, o = [], e = function() {
}) {
  let n = !1;
  const i = new Proxy(e, {
    get(r, a) {
      if (ri(n), a === Cl)
        return () => {
          ml(i), Rs(t), n = !0;
        };
      if (a === "then") {
        if (o.length === 0)
          return { then: () => i };
        const s = Qt(t, {
          type: "GET",
          path: o.map((g) => g.toString())
        }).then(Ht);
        return s.then.bind(s);
      }
      return _o(t, [...o, a]);
    },
    set(r, a, s) {
      ri(n);
      const [g, I] = Wi(s);
      return Qt(t, {
        type: "SET",
        path: [...o, a].map((C) => C.toString()),
        value: g
      }, I).then(Ht);
    },
    apply(r, a, s) {
      ri(n);
      const g = o[o.length - 1];
      if (g === ul)
        return Qt(t, {
          type: "ENDPOINT"
        }).then(Ht);
      if (g === "bind")
        return _o(t, o.slice(0, -1));
      const [I, C] = _a(s);
      return Qt(t, {
        type: "APPLY",
        path: o.map((u) => u.toString()),
        argumentList: I
      }, C).then(Ht);
    },
    construct(r, a) {
      ri(n);
      const [s, g] = _a(a);
      return Qt(t, {
        type: "CONSTRUCT",
        path: o.map((I) => I.toString()),
        argumentList: s
      }, g).then(Ht);
    }
  });
  return hl(i, t), i;
}
function bl(t) {
  return Array.prototype.concat.apply([], t);
}
function _a(t) {
  const o = t.map(Wi);
  return [o.map((e) => e[0]), bl(o.map((e) => e[1]))];
}
const Vs = /* @__PURE__ */ new WeakMap();
function yl(t, o) {
  return Vs.set(t, o), t;
}
function vl(t) {
  return Object.assign(t, { [Zs]: !0 });
}
function Wi(t) {
  for (const [o, e] of Hs)
    if (e.canHandle(t)) {
      const [n, i] = e.serialize(t);
      return [
        {
          type: "HANDLER",
          name: o,
          value: n
        },
        i
      ];
    }
  return [
    {
      type: "RAW",
      value: t
    },
    Vs.get(t) || []
  ];
}
function Ht(t) {
  switch (t.type) {
    case "HANDLER":
      return Hs.get(t.name).deserialize(t.value);
    case "RAW":
      return t.value;
  }
}
function Qt(t, o, e) {
  return new Promise((n) => {
    const i = wl();
    t.addEventListener("message", function r(a) {
      !a.data || !a.data.id || a.data.id !== i || (t.removeEventListener("message", r), n(a.data));
    }), t.start && t.start(), t.postMessage(Object.assign({ id: i }, o), e);
  });
}
function wl() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const Bl = (t, o, e) => {
  const n = Gs(e, t), { bottomLeft: i, bottomRight: r, topLeft: a, topRight: s } = o, g = {};
  return g.topLeft = a, g.topRight = s, g.bottomLeft = i, g.bottomRight = r, VI(g, n);
}, Es = "dmFyIHVlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgbGUgPSAocywgdSwgZSkgPT4gdSBpbiBzID8gdWUocywgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IHNbdV0gPSBlOwp2YXIgWW4gPSAocywgdSwgZSkgPT4gKGxlKHMsIHR5cGVvZiB1ICE9ICJzeW1ib2wiID8gdSArICIiIDogdSwgZSksIGUpOwpjb25zdCBrdCA9IHsKICBzaW1kOiAic2FtX3NpbWQud2FzbSIsCiAgc2FtOiAic2FtLndhc20iCn0sIGNlID0gYXN5bmMgKCkgPT4gV2ViQXNzZW1ibHkudmFsaWRhdGUobmV3IFVpbnQ4QXJyYXkoWzAsIDk3LCAxMTUsIDEwOSwgMSwgMCwgMCwgMCwgMSwgNSwgMSwgOTYsIDAsIDEsIDEyMywgMywgMiwgMSwgMCwgMTAsIDEwLCAxLCA4LCAwLCA2NSwgMCwgMjUzLCAxNSwgMjUzLCA5OCwgMTFdKSk7CmNsYXNzIEYgZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgbSkgewogICAgc3VwZXIoZSk7CiAgICBZbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IG07CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiBGKQogICAgICByZXR1cm4gZTsKICAgIGxldCBtOwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIG0gPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICBtID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgbSA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgbSA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgbSA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyBGKG0sIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgRikKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCBtID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgRihtKTsKICB9Cn0KY29uc3QgZmUgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfSwgTW4gPSAocywgdSkgPT4gTWF0aC5oeXBvdCh1LnggLSBzLngsIHUueSAtIHMueSksIGRlID0gKHMpID0+IHsKICBjb25zdCB7IGJvdHRvbUxlZnQ6IHUsIGJvdHRvbVJpZ2h0OiBlLCB0b3BMZWZ0OiBtLCB0b3BSaWdodDogZyB9ID0gcywgQyA9IE1uKG0sIGcpLCBBID0gTW4oZywgZSksIE0gPSBNbih1LCBlKSwgVyA9IE1uKG0sIHUpOwogIHJldHVybiBNYXRoLm1pbihDLCBBLCBNLCBXKTsKfTsKdmFyIGhlID0gZnVuY3Rpb24oKSB7CiAgdmFyIHMgPSB0eXBlb2YgZG9jdW1lbnQgPCAidSIgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdCA/IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjIDogdm9pZCAwOwogIHJldHVybiBmdW5jdGlvbih1KSB7CiAgICB1ID0gdSB8fCB7fTsKICAgIHZhciBlOwogICAgZSB8fCAoZSA9IHR5cGVvZiB1IDwgInUiID8gdSA6IHt9KTsKICAgIHZhciBtLCBnOwogICAgZS5yZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgbSA9IG4sIGcgPSB0OwogICAgfSk7CiAgICB2YXIgQyA9IHt9LCBBOwogICAgZm9yIChBIGluIGUpCiAgICAgIGUuaGFzT3duUHJvcGVydHkoQSkgJiYgKENbQV0gPSBlW0FdKTsKICAgIHZhciBNID0gIi4vdGhpcy5wcm9ncmFtIiwgVyA9ICExLCBFID0gITE7CiAgICBXID0gdHlwZW9mIHdpbmRvdyA9PSAib2JqZWN0IiwgRSA9IHR5cGVvZiBpbXBvcnRTY3JpcHRzID09ICJmdW5jdGlvbiI7CiAgICB2YXIgXyA9ICIiLCBSOwogICAgKFcgfHwgRSkgJiYgKEUgPyBfID0gc2VsZi5sb2NhdGlvbi5ocmVmIDogZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiAoXyA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjKSwgcyAmJiAoXyA9IHMpLCBfLmluZGV4T2YoImJsb2I6IikgIT09IDAgPyBfID0gXy5zdWJzdHIoMCwgXy5sYXN0SW5kZXhPZigiLyIpICsgMSkgOiBfID0gIiIsIEUgJiYgKFIgPSBmdW5jdGlvbihuKSB7CiAgICAgIHZhciB0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7CiAgICAgIHJldHVybiB0Lm9wZW4oIkdFVCIsIG4sICExKSwgdC5yZXNwb25zZVR5cGUgPSAiYXJyYXlidWZmZXIiLCB0LnNlbmQobnVsbCksIG5ldyBVaW50OEFycmF5KHQucmVzcG9uc2UpOwogICAgfSkpOwogICAgdmFyIFAgPSBlLnByaW50RXJyIHx8IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpOwogICAgZm9yIChBIGluIEMpCiAgICAgIEMuaGFzT3duUHJvcGVydHkoQSkgJiYgKGVbQV0gPSBDW0FdKTsKICAgIEMgPSBudWxsLCBlLnRoaXNQcm9ncmFtICYmIChNID0gZS50aGlzUHJvZ3JhbSk7CiAgICB2YXIgTDsKICAgIGUud2FzbUJpbmFyeSAmJiAoTCA9IGUud2FzbUJpbmFyeSksIGUubm9FeGl0UnVudGltZSAmJiBlLm5vRXhpdFJ1bnRpbWUsIHR5cGVvZiBXZWJBc3NlbWJseSAhPSAib2JqZWN0IiAmJiBzbigibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZCIpOwogICAgdmFyIEcsIFJuID0gITE7CiAgICBmdW5jdGlvbiBRbihuKSB7CiAgICAgIG4gfHwgc24oIkFzc2VydGlvbiBmYWlsZWQ6IHVuZGVmaW5lZCIpOwogICAgfQogICAgdmFyIFhuID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGY4IikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiBIdChuLCB0LCByKSB7CiAgICAgIHZhciBpID0geDsKICAgICAgaWYgKDAgPCByKSB7CiAgICAgICAgciA9IHQgKyByIC0gMTsKICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IG4ubGVuZ3RoOyArK2EpIHsKICAgICAgICAgIHZhciBvID0gbi5jaGFyQ29kZUF0KGEpOwogICAgICAgICAgaWYgKDU1Mjk2IDw9IG8gJiYgNTczNDMgPj0gbykgewogICAgICAgICAgICB2YXIgYyA9IG4uY2hhckNvZGVBdCgrK2EpOwogICAgICAgICAgICBvID0gNjU1MzYgKyAoKG8gJiAxMDIzKSA8PCAxMCkgfCBjICYgMTAyMzsKICAgICAgICAgIH0KICAgICAgICAgIGlmICgxMjcgPj0gbykgewogICAgICAgICAgICBpZiAodCA+PSByKQogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICBpW3QrK10gPSBvOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgaWYgKDIwNDcgPj0gbykgewogICAgICAgICAgICAgIGlmICh0ICsgMSA+PSByKQogICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgaVt0KytdID0gMTkyIHwgbyA+PiA2OwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgIGlmICg2NTUzNSA+PSBvKSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDIgPj0gcikKICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyMjQgfCBvID4+IDEyOwogICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDMgPj0gcikKICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyNDAgfCBvID4+IDE4LCBpW3QrK10gPSAxMjggfCBvID4+IDEyICYgNjM7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IG8gPj4gNiAmIDYzOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IG8gJiA2MzsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgaVt0XSA9IDA7CiAgICAgIH0KICAgIH0KICAgIHZhciBxbiA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmLTE2bGUiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFV0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IG4gPj4gMSwgaSA9IHIgKyB0IC8gMjsgIShyID49IGkpICYmIHBuW3JdOyApCiAgICAgICAgKytyOwogICAgICBpZiAociA8PD0gMSwgMzIgPCByIC0gbiAmJiBxbikKICAgICAgICByZXR1cm4gcW4uZGVjb2RlKHguc3ViYXJyYXkobiwgcikpOwogICAgICBmb3IgKHIgPSAwLCBpID0gIiI7IDsgKSB7CiAgICAgICAgdmFyIGEgPSBYW24gKyAyICogciA+PiAxXTsKICAgICAgICBpZiAoYSA9PSAwIHx8IHIgPT0gdCAvIDIpCiAgICAgICAgICByZXR1cm4gaTsKICAgICAgICArK3IsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShhKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24genQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDIgPiByKQogICAgICAgIHJldHVybiAwOwogICAgICByIC09IDI7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IHIgPCAyICogbi5sZW5ndGggPyByIC8gMiA6IG4ubGVuZ3RoOwogICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHI7ICsrYSkKICAgICAgICBYW3QgPj4gMV0gPSBuLmNoYXJDb2RlQXQoYSksIHQgKz0gMjsKICAgICAgcmV0dXJuIFhbdCA+PiAxXSA9IDAsIHQgLSBpOwogICAgfQogICAgZnVuY3Rpb24gQnQobikgewogICAgICByZXR1cm4gMiAqIG4ubGVuZ3RoOwogICAgfQogICAgZnVuY3Rpb24gRHQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gMCwgaSA9ICIiOyAhKHIgPj0gdCAvIDQpOyApIHsKICAgICAgICB2YXIgYSA9IGJbbiArIDQgKiByID4+IDJdOwogICAgICAgIGlmIChhID09IDApCiAgICAgICAgICBicmVhazsKICAgICAgICArK3IsIDY1NTM2IDw9IGEgPyAoYSAtPSA2NTUzNiwgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2IHwgYSA+PiAxMCwgNTYzMjAgfCBhICYgMTAyMykpIDogaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGEpOwogICAgICB9CiAgICAgIHJldHVybiBpOwogICAgfQogICAgZnVuY3Rpb24gVnQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDQgPiByKQogICAgICAgIHJldHVybiAwOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSBpICsgciAtIDQ7CiAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgbi5sZW5ndGg7ICsrYSkgewogICAgICAgIHZhciBvID0gbi5jaGFyQ29kZUF0KGEpOwogICAgICAgIGlmICg1NTI5NiA8PSBvICYmIDU3MzQzID49IG8pIHsKICAgICAgICAgIHZhciBjID0gbi5jaGFyQ29kZUF0KCsrYSk7CiAgICAgICAgICBvID0gNjU1MzYgKyAoKG8gJiAxMDIzKSA8PCAxMCkgfCBjICYgMTAyMzsKICAgICAgICB9CiAgICAgICAgaWYgKGJbdCA+PiAyXSA9IG8sIHQgKz0gNCwgdCArIDQgPiByKQogICAgICAgICAgYnJlYWs7CiAgICAgIH0KICAgICAgcmV0dXJuIGJbdCA+PiAyXSA9IDAsIHQgLSBpOwogICAgfQogICAgZnVuY3Rpb24gR3QobikgewogICAgICBmb3IgKHZhciB0ID0gMCwgciA9IDA7IHIgPCBuLmxlbmd0aDsgKytyKSB7CiAgICAgICAgdmFyIGkgPSBuLmNoYXJDb2RlQXQocik7CiAgICAgICAgNTUyOTYgPD0gaSAmJiA1NzM0MyA+PSBpICYmICsrciwgdCArPSA0OwogICAgICB9CiAgICAgIHJldHVybiB0OwogICAgfQogICAgdmFyIFEsICQsIHgsIFgsIHBuLCBiLCBILCBudCwgdHQ7CiAgICBmdW5jdGlvbiBldChuKSB7CiAgICAgIFEgPSBuLCBlLkhFQVA4ID0gJCA9IG5ldyBJbnQ4QXJyYXkobiksIGUuSEVBUDE2ID0gWCA9IG5ldyBJbnQxNkFycmF5KG4pLCBlLkhFQVAzMiA9IGIgPSBuZXcgSW50MzJBcnJheShuKSwgZS5IRUFQVTggPSB4ID0gbmV3IFVpbnQ4QXJyYXkobiksIGUuSEVBUFUxNiA9IHBuID0gbmV3IFVpbnQxNkFycmF5KG4pLCBlLkhFQVBVMzIgPSBIID0gbmV3IFVpbnQzMkFycmF5KG4pLCBlLkhFQVBGMzIgPSBudCA9IG5ldyBGbG9hdDMyQXJyYXkobiksIGUuSEVBUEY2NCA9IHR0ID0gbmV3IEZsb2F0NjRBcnJheShuKTsKICAgIH0KICAgIHZhciBydCA9IGUuSU5JVElBTF9NRU1PUlkgfHwgMTY3NzcyMTY7CiAgICBlLndhc21NZW1vcnkgPyBHID0gZS53YXNtTWVtb3J5IDogRyA9IG5ldyBXZWJBc3NlbWJseS5NZW1vcnkoeyBpbml0aWFsOiBydCAvIDY1NTM2LCBtYXhpbXVtOiAzMjc2OCB9KSwgRyAmJiAoUSA9IEcuYnVmZmVyKSwgcnQgPSBRLmJ5dGVMZW5ndGgsIGV0KFEpOwogICAgdmFyIGl0ID0gW10sIGF0ID0gW10sICR0ID0gW10sIG90ID0gW107CiAgICBmdW5jdGlvbiBZdCgpIHsKICAgICAgdmFyIG4gPSBlLnByZVJ1bi5zaGlmdCgpOwogICAgICBpdC51bnNoaWZ0KG4pOwogICAgfQogICAgdmFyIFkgPSAwLCBvbiA9IG51bGw7CiAgICBlLnByZWxvYWRlZEltYWdlcyA9IHt9LCBlLnByZWxvYWRlZEF1ZGlvcyA9IHt9OwogICAgZnVuY3Rpb24gc24obikgewogICAgICB0aHJvdyBlLm9uQWJvcnQgJiYgZS5vbkFib3J0KG4pLCBQKG4pLCBSbiA9ICEwLCBuID0gbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcigiYWJvcnQoIiArIG4gKyAiKS4gQnVpbGQgd2l0aCAtcyBBU1NFUlRJT05TPTEgZm9yIG1vcmUgaW5mby4iKSwgZyhuKSwgbjsKICAgIH0KICAgIGZ1bmN0aW9uIHhuKG4pIHsKICAgICAgdmFyIHQgPSBaOwogICAgICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID8gdC5zdGFydHNXaXRoKG4pIDogdC5pbmRleE9mKG4pID09PSAwOwogICAgfQogICAgZnVuY3Rpb24gc3QoKSB7CiAgICAgIHJldHVybiB4bigiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LCIpOwogICAgfQogICAgdmFyIFogPSAic2FtLndhc20iOwogICAgaWYgKCFzdCgpKSB7CiAgICAgIHZhciB1dCA9IFo7CiAgICAgIFogPSBlLmxvY2F0ZUZpbGUgPyBlLmxvY2F0ZUZpbGUodXQsIF8pIDogXyArIHV0OwogICAgfQogICAgZnVuY3Rpb24gbHQoKSB7CiAgICAgIHRyeSB7CiAgICAgICAgaWYgKEwpCiAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoTCk7CiAgICAgICAgaWYgKFIpCiAgICAgICAgICByZXR1cm4gUihaKTsKICAgICAgICB0aHJvdyAiYm90aCBhc3luYyBhbmQgc3luYyBmZXRjaGluZyBvZiB0aGUgd2FzbSBmYWlsZWQiOwogICAgICB9IGNhdGNoIChuKSB7CiAgICAgICAgc24obik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIFp0KCkgewogICAgICByZXR1cm4gTCB8fCAhVyAmJiAhRSB8fCB0eXBlb2YgZmV0Y2ggIT0gImZ1bmN0aW9uIiB8fCB4bigiZmlsZTovLyIpID8gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihsdCkgOiBmZXRjaChaLCB7IGNyZWRlbnRpYWxzOiAic2FtZS1vcmlnaW4iIH0pLnRoZW4oZnVuY3Rpb24obikgewogICAgICAgIGlmICghbi5vaykKICAgICAgICAgIHRocm93ICJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICciICsgWiArICInIjsKICAgICAgICByZXR1cm4gbi5hcnJheUJ1ZmZlcigpOwogICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gbHQoKTsKICAgICAgfSk7CiAgICB9CiAgICBmdW5jdGlvbiB5bihuKSB7CiAgICAgIGZvciAoOyAwIDwgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5zaGlmdCgpOwogICAgICAgIGlmICh0eXBlb2YgdCA9PSAiZnVuY3Rpb24iKQogICAgICAgICAgdChlKTsKICAgICAgICBlbHNlIHsKICAgICAgICAgIHZhciByID0gdC5CYTsKICAgICAgICAgIHR5cGVvZiByID09ICJudW1iZXIiID8gdC50YSA9PT0gdm9pZCAwID8gRm4oInYiLCByKSgpIDogRm4oInZpIiwgcikodC50YSkgOiByKHQudGEgPT09IHZvaWQgMCA/IG51bGwgOiB0LnRhKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIEZuKG4sIHQpIHsKICAgICAgdmFyIHIgPSBbXTsKICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgewogICAgICAgIHIubGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsKICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykKICAgICAgICAgIHJbaV0gPSBhcmd1bWVudHNbaV07CiAgICAgICAgcmV0dXJuIHIgJiYgci5sZW5ndGggPyBlWyJkeW5DYWxsXyIgKyBuXS5hcHBseShudWxsLCBbdF0uY29uY2F0KHIpKSA6IGVbImR5bkNhbGxfIiArIG5dLmNhbGwobnVsbCwgdCk7CiAgICAgIH07CiAgICB9CiAgICBmdW5jdGlvbiBKdChuKSB7CiAgICAgIHRoaXMuZGEgPSBuIC0gMTYsIHRoaXMuT2EgPSBmdW5jdGlvbih0KSB7CiAgICAgICAgYlt0aGlzLmRhICsgOCA+PiAyXSA9IHQ7CiAgICAgIH0sIHRoaXMuTGEgPSBmdW5jdGlvbih0KSB7CiAgICAgICAgYlt0aGlzLmRhICsgMCA+PiAyXSA9IHQ7CiAgICAgIH0sIHRoaXMuTWEgPSBmdW5jdGlvbigpIHsKICAgICAgICBiW3RoaXMuZGEgKyA0ID4+IDJdID0gMDsKICAgICAgfSwgdGhpcy5LYSA9IGZ1bmN0aW9uKCkgewogICAgICAgICRbdGhpcy5kYSArIDEyID4+IDBdID0gMDsKICAgICAgfSwgdGhpcy5OYSA9IGZ1bmN0aW9uKCkgewogICAgICAgICRbdGhpcy5kYSArIDEzID4+IDBdID0gMDsKICAgICAgfSwgdGhpcy5GYSA9IGZ1bmN0aW9uKHQsIHIpIHsKICAgICAgICB0aGlzLk9hKHQpLCB0aGlzLkxhKHIpLCB0aGlzLk1hKCksIHRoaXMuS2EoKSwgdGhpcy5OYSgpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gbW4oKSB7CiAgICAgIHJldHVybiAwIDwgbW4ueGE7CiAgICB9CiAgICBmdW5jdGlvbiBJbihuKSB7CiAgICAgIHN3aXRjaCAobikgewogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiAwOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiAxOwogICAgICAgIGNhc2UgNDoKICAgICAgICAgIHJldHVybiAyOwogICAgICAgIGNhc2UgODoKICAgICAgICAgIHJldHVybiAzOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIHR5cGUgc2l6ZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICB2YXIgY3QgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiBTKG4pIHsKICAgICAgZm9yICh2YXIgdCA9ICIiOyB4W25dOyApCiAgICAgICAgdCArPSBjdFt4W24rK11dOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBxID0ge30sIEogPSB7fSwgdm4gPSB7fTsKICAgIGZ1bmN0aW9uIExuKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkKICAgICAgICByZXR1cm4gIl91bmtub3duIjsKICAgICAgbiA9IG4ucmVwbGFjZSgvW15hLXpBLVowLTlfXS9nLCAiJCIpOwogICAgICB2YXIgdCA9IG4uY2hhckNvZGVBdCgwKTsKICAgICAgcmV0dXJuIDQ4IDw9IHQgJiYgNTcgPj0gdCA/ICJfIiArIG4gOiBuOwogICAgfQogICAgZnVuY3Rpb24gam4obiwgdCkgewogICAgICByZXR1cm4gbiA9IExuKG4pLCBuZXcgRnVuY3Rpb24oImJvZHkiLCAicmV0dXJuIGZ1bmN0aW9uICIgKyBuICsgYCgpIHsKICAgICJ1c2Ugc3RyaWN0IjsgICAgcmV0dXJuIGJvZHkuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKfTsKYCkodCk7CiAgICB9CiAgICBmdW5jdGlvbiBObihuKSB7CiAgICAgIHZhciB0ID0gRXJyb3IsIHIgPSBqbihuLCBmdW5jdGlvbihpKSB7CiAgICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5tZXNzYWdlID0gaSwgaSA9IEVycm9yKGkpLnN0YWNrLCBpICE9PSB2b2lkIDAgJiYgKHRoaXMuc3RhY2sgPSB0aGlzLnRvU3RyaW5nKCkgKyBgCmAgKyBpLnJlcGxhY2UoL15FcnJvcig6W15cbl0qKT9cbi8sICIiKSk7CiAgICAgIH0pOwogICAgICByZXR1cm4gci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHQucHJvdG90eXBlKSwgci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSByLCByLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkgewogICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UgPT09IHZvaWQgMCA/IHRoaXMubmFtZSA6IHRoaXMubmFtZSArICI6ICIgKyB0aGlzLm1lc3NhZ2U7CiAgICAgIH0sIHI7CiAgICB9CiAgICB2YXIgbm4gPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB2KG4pIHsKICAgICAgdGhyb3cgbmV3IG5uKG4pOwogICAgfQogICAgdmFyIGZ0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gZ24obikgewogICAgICB0aHJvdyBuZXcgZnQobik7CiAgICB9CiAgICBmdW5jdGlvbiB0bihuLCB0LCByKSB7CiAgICAgIGZ1bmN0aW9uIGkobCkgewogICAgICAgIGwgPSByKGwpLCBsLmxlbmd0aCAhPT0gbi5sZW5ndGggJiYgZ24oIk1pc21hdGNoZWQgdHlwZSBjb252ZXJ0ZXIgY291bnQiKTsKICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IG4ubGVuZ3RoOyArK3ApCiAgICAgICAgICBVKG5bcF0sIGxbcF0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihsKSB7CiAgICAgICAgdm5bbF0gPSB0OwogICAgICB9KTsKICAgICAgdmFyIGEgPSBBcnJheSh0Lmxlbmd0aCksIG8gPSBbXSwgYyA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihsLCBwKSB7CiAgICAgICAgSi5oYXNPd25Qcm9wZXJ0eShsKSA/IGFbcF0gPSBKW2xdIDogKG8ucHVzaChsKSwgcS5oYXNPd25Qcm9wZXJ0eShsKSB8fCAocVtsXSA9IFtdKSwgcVtsXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgYVtwXSA9IEpbbF0sICsrYywgYyA9PT0gby5sZW5ndGggJiYgaShhKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCBvLmxlbmd0aCA9PT0gMCAmJiBpKGEpOwogICAgfQogICAgZnVuY3Rpb24gVShuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKQogICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoInJlZ2lzdGVyVHlwZSByZWdpc3RlcmVkSW5zdGFuY2UgcmVxdWlyZXMgYXJnUGFja0FkdmFuY2UiKTsKICAgICAgdmFyIGkgPSB0Lm5hbWU7CiAgICAgIGlmIChuIHx8IHYoJ3R5cGUgIicgKyBpICsgJyIgbXVzdCBoYXZlIGEgcG9zaXRpdmUgaW50ZWdlciB0eXBlaWQgcG9pbnRlcicpLCBKLmhhc093blByb3BlcnR5KG4pKSB7CiAgICAgICAgaWYgKHIuRWEpCiAgICAgICAgICByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBKW25dID0gdCwgZGVsZXRlIHZuW25dLCBxLmhhc093blByb3BlcnR5KG4pICYmICh0ID0gcVtuXSwgZGVsZXRlIHFbbl0sIHQuZm9yRWFjaChmdW5jdGlvbihhKSB7CiAgICAgICAgYSgpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBIbihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIFVuID0gITE7CiAgICBmdW5jdGlvbiBkdCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIGh0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gdW4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChVbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpCiAgICAgICAgICByID0gci52YWx1ZSwgci5kYSA/IGh0KHIpIDogY29uc29sZS53YXJuKCJvYmplY3QgYWxyZWFkeSBkZWxldGVkOiAiICsgci5kYSk7CiAgICAgIH0pLCB1biA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICByZXR1cm4gVW4ucmVnaXN0ZXIodCwgdC5BLCB0LkEpLCB0OwogICAgICB9LCBkdCA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBVbi51bnJlZ2lzdGVyKHQuQSk7CiAgICAgIH0sIHVuKG4pKTsKICAgIH0KICAgIHZhciBsbiA9IHZvaWQgMCwgY24gPSBbXTsKICAgIGZ1bmN0aW9uIHpuKCkgewogICAgICBmb3IgKDsgY24ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgbiA9IGNuLnBvcCgpOwogICAgICAgIG4uQS5vYSA9ICExLCBuLmRlbGV0ZSgpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBEKCkgewogICAgfQogICAgdmFyIHB0ID0ge307CiAgICBmdW5jdGlvbiBRdChuLCB0KSB7CiAgICAgIHZhciByID0gZTsKICAgICAgaWYgKHJbbl0uamEgPT09IHZvaWQgMCkgewogICAgICAgIHZhciBpID0gcltuXTsKICAgICAgICByW25dID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICByZXR1cm4gcltuXS5qYS5oYXNPd25Qcm9wZXJ0eShhcmd1bWVudHMubGVuZ3RoKSB8fCB2KCJGdW5jdGlvbiAnIiArIHQgKyAiJyBjYWxsZWQgd2l0aCBhbiBpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyBhcmd1bWVudHMubGVuZ3RoICsgIikgLSBleHBlY3RzIG9uZSBvZiAoIiArIHJbbl0uamEgKyAiKSEiKSwgcltuXS5qYVthcmd1bWVudHMubGVuZ3RoXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgIH0sIHJbbl0uamEgPSBbXSwgcltuXS5qYVtpLnlhXSA9IGk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHl0KG4sIHQsIHIpIHsKICAgICAgZS5oYXNPd25Qcm9wZXJ0eShuKSA/ICgociA9PT0gdm9pZCAwIHx8IGVbbl0uamEgIT09IHZvaWQgMCAmJiBlW25dLmphW3JdICE9PSB2b2lkIDApICYmIHYoIkNhbm5vdCByZWdpc3RlciBwdWJsaWMgbmFtZSAnIiArIG4gKyAiJyB0d2ljZSIpLCBRdChuLCBuKSwgZS5oYXNPd25Qcm9wZXJ0eShyKSAmJiB2KCJDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgb3ZlcmxvYWRzIG9mIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBudW1iZXIgb2YgYXJndW1lbnRzICgiICsgciArICIpISIpLCBlW25dLmphW3JdID0gdCkgOiAoZVtuXSA9IHQsIHIgIT09IHZvaWQgMCAmJiAoZVtuXS5SYSA9IHIpKTsKICAgIH0KICAgIGZ1bmN0aW9uIFh0KG4sIHQsIHIsIGksIGEsIG8sIGMsIGwpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5jb25zdHJ1Y3RvciA9IHQsIHRoaXMubWEgPSByLCB0aGlzLm5hID0gaSwgdGhpcy5pYSA9IGEsIHRoaXMuQ2EgPSBvLCB0aGlzLnFhID0gYywgdGhpcy5BYSA9IGw7CiAgICB9CiAgICBmdW5jdGlvbiB3bihuLCB0LCByKSB7CiAgICAgIGZvciAoOyB0ICE9PSByOyApCiAgICAgICAgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiBxdChuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBuZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpCiAgICAgICAgc3dpdGNoICh0LkEuZ2EgPT09IHZvaWQgMCAmJiB2KCJQYXNzaW5nIHJhdyBwb2ludGVyIHRvIHNtYXJ0IHBvaW50ZXIgaXMgaWxsZWdhbCIpLCB0aGlzLlBhKSB7CiAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgMToKICAgICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlIDI6CiAgICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpCiAgICAgICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgICAgciA9IHRoaXMuSWEociwgZW4oZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgICBpLmRlbGV0ZSgpOwogICAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBkZWZhdWx0OgogICAgICAgICAgICB2KCJVbnN1cHBvcnRpbmcgc2hhcmluZyBwb2xpY3kiKTsKICAgICAgICB9CiAgICAgIHJldHVybiByOwogICAgfQogICAgZnVuY3Rpb24gdGUobiwgdCkgewogICAgICByZXR1cm4gdCA9PT0gbnVsbCA/ICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIDApIDogKHQuQSB8fCB2KCdDYW5ub3QgcGFzcyAiJyArIHJuKHQpICsgJyIgYXMgYSAnICsgdGhpcy5uYW1lKSwgdC5BLmRhIHx8IHYoIkNhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICIgKyB0aGlzLm5hbWUpLCB0LkEuZmEucmEgJiYgdigiQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAiICsgdC5BLmZhLm5hbWUgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpLCB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSkpOwogICAgfQogICAgZnVuY3Rpb24gQW4obikgewogICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUoSFtuID4+IDJdKTsKICAgIH0KICAgIGZ1bmN0aW9uIG10KG4sIHQsIHIpIHsKICAgICAgcmV0dXJuIHQgPT09IHIgPyBuIDogci5pYSA9PT0gdm9pZCAwID8gbnVsbCA6IChuID0gbXQobiwgdCwgci5pYSksIG4gPT09IG51bGwgPyBudWxsIDogci5BYShuKSk7CiAgICB9CiAgICB2YXIgZm4gPSB7fTsKICAgIGZ1bmN0aW9uIGVlKG4sIHQpIHsKICAgICAgZm9yICh0ID09PSB2b2lkIDAgJiYgdigicHRyIHNob3VsZCBub3QgYmUgdW5kZWZpbmVkIik7IG4uaWE7ICkKICAgICAgICB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiBmblt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIF9uKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBnbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIGduKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgdW4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiB6KG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IG5lIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyBxdCA6IHRlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiB2dChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgZ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gVihuLCB0KSB7CiAgICAgIG4gPSBTKG4pOwogICAgICB2YXIgciA9IEZuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgZ3QgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB3dChuKSB7CiAgICAgIG4gPSBidChuKTsKICAgICAgdmFyIHQgPSBTKG4pOwogICAgICByZXR1cm4gQihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIGRuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcihvKSB7CiAgICAgICAgYVtvXSB8fCBKW29dIHx8ICh2bltvXSA/IHZuW29dLmZvckVhY2gocikgOiAoaS5wdXNoKG8pLCBhW29dID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBhID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IGd0KG4gKyAiOiAiICsgaS5tYXAod3QpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspCiAgICAgICAgci5wdXNoKGJbKHQgPj4gMikgKyBpXSk7CiAgICAgIHJldHVybiByOwogICAgfQogICAgZnVuY3Rpb24gQ24obikgewogICAgICBmb3IgKDsgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5wb3AoKTsKICAgICAgICBuLnBvcCgpKHQpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBfdChuLCB0LCByKSB7CiAgICAgIHJldHVybiBuIGluc3RhbmNlb2YgT2JqZWN0IHx8IHYociArICcgd2l0aCBpbnZhbGlkICJ0aGlzIjogJyArIG4pLCBuIGluc3RhbmNlb2YgdC5lYS5jb25zdHJ1Y3RvciB8fCB2KHIgKyAnIGluY29tcGF0aWJsZSB3aXRoICJ0aGlzIiBvZiB0eXBlICcgKyBuLmNvbnN0cnVjdG9yLm5hbWUpLCBuLkEuZGEgfHwgdigiY2Fubm90IGNhbGwgZW1zY3JpcHRlbiBiaW5kaW5nIG1ldGhvZCAiICsgciArICIgb24gZGVsZXRlZCBvYmplY3QiKSwgd24obi5BLmRhLCBuLkEuZmEuZWEsIHQuZWEpOwogICAgfQogICAgdmFyIEJuID0gW10sIEkgPSBbe30sIHsgdmFsdWU6IHZvaWQgMCB9LCB7IHZhbHVlOiBudWxsIH0sIHsgdmFsdWU6ICEwIH0sIHsgdmFsdWU6ICExIH1dOwogICAgZnVuY3Rpb24gRG4obikgewogICAgICA0IDwgbiAmJiAtLUlbbl0uSmEgPT09IDAgJiYgKElbbl0gPSB2b2lkIDAsIEJuLnB1c2gobikpOwogICAgfQogICAgZnVuY3Rpb24gZW4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIHZvaWQgMDoKICAgICAgICAgIHJldHVybiAxOwogICAgICAgIGNhc2UgbnVsbDoKICAgICAgICAgIHJldHVybiAyOwogICAgICAgIGNhc2UgITA6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBjYXNlICExOgogICAgICAgICAgcmV0dXJuIDQ7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHZhciB0ID0gQm4ubGVuZ3RoID8gQm4ucG9wKCkgOiBJLmxlbmd0aDsKICAgICAgICAgIHJldHVybiBJW3RdID0geyBKYTogMSwgdmFsdWU6IG4gfSwgdDsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcm4obikgewogICAgICBpZiAobiA9PT0gbnVsbCkKICAgICAgICByZXR1cm4gIm51bGwiOwogICAgICB2YXIgdCA9IHR5cGVvZiBuOwogICAgICByZXR1cm4gdCA9PT0gIm9iamVjdCIgfHwgdCA9PT0gImFycmF5IiB8fCB0ID09PSAiZnVuY3Rpb24iID8gbi50b1N0cmluZygpIDogIiIgKyBuOwogICAgfQogICAgZnVuY3Rpb24gcmUobiwgdCkgewogICAgICBzd2l0Y2ggKHQpIHsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocikgewogICAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUobnRbciA+PiAyXSk7CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMzoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZSh0dFtyID4+IDNdKTsKICAgICAgICAgIH07CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gZmxvYXQgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBpZShuKSB7CiAgICAgIHZhciB0ID0gRnVuY3Rpb247CiAgICAgIGlmICghKHQgaW5zdGFuY2VvZiBGdW5jdGlvbikpCiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBqbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIGFlKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiAkW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHhbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gWFtpID4+IDFdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHBuW2kgPj4gMV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gYltpID4+IDJdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIEhbaSA+PiAyXTsKICAgICAgICAgIH07CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gaW50ZWdlciB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIFZuKG4pIHsKICAgICAgcmV0dXJuIG4gfHwgdigiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gIiArIG4pLCBJW25dLnZhbHVlOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCkgewogICAgICB2YXIgciA9IEpbbl07CiAgICAgIHJldHVybiByID09PSB2b2lkIDAgJiYgdih0ICsgIiBoYXMgdW5rbm93biB0eXBlICIgKyB3dChuKSksIHI7CiAgICB9CiAgICB2YXIgb2UgPSB7fSwgRXQgPSB7fTsKICAgIGZ1bmN0aW9uIFR0KCkgewogICAgICBpZiAoIUduKSB7CiAgICAgICAgdmFyIG4gPSB7IFVTRVI6ICJ3ZWJfdXNlciIsIExPR05BTUU6ICJ3ZWJfdXNlciIsIFBBVEg6ICIvIiwgUFdEOiAiLyIsIEhPTUU6ICIvaG9tZS93ZWJfdXNlciIsIExBTkc6ICh0eXBlb2YgbmF2aWdhdG9yID09ICJvYmplY3QiICYmIG5hdmlnYXRvci5sYW5ndWFnZXMgJiYgbmF2aWdhdG9yLmxhbmd1YWdlc1swXSB8fCAiQyIpLnJlcGxhY2UoIi0iLCAiXyIpICsgIi5VVEYtOCIsIF86IE0gfHwgIi4vdGhpcy5wcm9ncmFtIiB9LCB0OwogICAgICAgIGZvciAodCBpbiBFdCkKICAgICAgICAgIG5bdF0gPSBFdFt0XTsKICAgICAgICB2YXIgciA9IFtdOwogICAgICAgIGZvciAodCBpbiBuKQogICAgICAgICAgci5wdXNoKHQgKyAiPSIgKyBuW3RdKTsKICAgICAgICBHbiA9IHI7CiAgICAgIH0KICAgICAgcmV0dXJuIEduOwogICAgfQogICAgdmFyIEduLCBQdCA9IFtdOwogICAgZnVuY3Rpb24gTXQobikgewogICAgICB2YXIgdCA9IHt9LCByOwogICAgICBmb3IgKHIgaW4gbikKICAgICAgICAoZnVuY3Rpb24oaSkgewogICAgICAgICAgdmFyIGEgPSBuW2ldOwogICAgICAgICAgdFtpXSA9IHR5cGVvZiBhID09ICJmdW5jdGlvbiIgPyBmdW5jdGlvbigpIHsKICAgICAgICAgICAgUHQucHVzaChpKTsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICByZXR1cm4gYS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgICAgICAgICB9IGZpbmFsbHkgewogICAgICAgICAgICAgIGlmIChSbikKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgICB2YXIgbyA9IFB0LnBvcCgpOwogICAgICAgICAgICAgIFFuKG8gPT09IGkpOwogICAgICAgICAgICB9CiAgICAgICAgICB9IDogYTsKICAgICAgICB9KShyKTsKICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICBmb3IgKHZhciBXdCA9IEFycmF5KDI1NiksIEVuID0gMDsgMjU2ID4gRW47ICsrRW4pCiAgICAgIFd0W0VuXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoRW4pOwogICAgY3QgPSBXdCwgbm4gPSBlLkJpbmRpbmdFcnJvciA9IE5uKCJCaW5kaW5nRXJyb3IiKSwgZnQgPSBlLkludGVybmFsRXJyb3IgPSBObigiSW50ZXJuYWxFcnJvciIpLCBELnByb3RvdHlwZS5pc0FsaWFzT2YgPSBmdW5jdGlvbihuKSB7CiAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBEICYmIG4gaW5zdGFuY2VvZiBEKSkKICAgICAgICByZXR1cm4gITE7CiAgICAgIHZhciB0ID0gdGhpcy5BLmZhLmVhLCByID0gdGhpcy5BLmRhLCBpID0gbi5BLmZhLmVhOwogICAgICBmb3IgKG4gPSBuLkEuZGE7IHQuaWE7ICkKICAgICAgICByID0gdC5xYShyKSwgdCA9IHQuaWE7CiAgICAgIGZvciAoOyBpLmlhOyApCiAgICAgICAgbiA9IGkucWEobiksIGkgPSBpLmlhOwogICAgICByZXR1cm4gdCA9PT0gaSAmJiByID09PSBuOwogICAgfSwgRC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHsKICAgICAgaWYgKHRoaXMuQS5kYSB8fCBIbih0aGlzKSwgdGhpcy5BLnBhKQogICAgICAgIHJldHVybiB0aGlzLkEuY291bnQudmFsdWUgKz0gMSwgdGhpczsKICAgICAgdmFyIG4gPSB1bihPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSwgeyBBOiB7IHZhbHVlOiBLdCh0aGlzLkEpIH0gfSkpOwogICAgICByZXR1cm4gbi5BLmNvdW50LnZhbHVlICs9IDEsIG4uQS5vYSA9ICExLCBuOwogICAgfSwgRC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24oKSB7CiAgICAgIHRoaXMuQS5kYSB8fCBIbih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBkdCh0aGlzKSwgaHQodGhpcy5BKSwgdGhpcy5BLnBhIHx8ICh0aGlzLkEuZ2EgPSB2b2lkIDAsIHRoaXMuQS5kYSA9IHZvaWQgMCk7CiAgICB9LCBELnByb3RvdHlwZS5pc0RlbGV0ZWQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICF0aGlzLkEuZGE7CiAgICB9LCBELnByb3RvdHlwZS5kZWxldGVMYXRlciA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gdGhpcy5BLmRhIHx8IEhuKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIGNuLnB1c2godGhpcyksIGNuLmxlbmd0aCA9PT0gMSAmJiBsbiAmJiBsbih6biksIHRoaXMuQS5vYSA9ICEwLCB0aGlzOwogICAgfSwgei5wcm90b3R5cGUuRGEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHJldHVybiB0aGlzLndhICYmIChuID0gdGhpcy53YShuKSksIG47CiAgICB9LCB6LnByb3RvdHlwZS52YSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdGhpcy5uYSAmJiB0aGlzLm5hKG4pOwogICAgfSwgei5wcm90b3R5cGUuYXJnUGFja0FkdmFuY2UgPSA4LCB6LnByb3RvdHlwZS5yZWFkVmFsdWVGcm9tUG9pbnRlciA9IEFuLCB6LnByb3RvdHlwZS5kZWxldGVPYmplY3QgPSBmdW5jdGlvbihuKSB7CiAgICAgIG4gIT09IG51bGwgJiYgbi5kZWxldGUoKTsKICAgIH0sIHoucHJvdG90eXBlLmZyb21XaXJlVHlwZSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgZnVuY3Rpb24gdCgpIHsKICAgICAgICByZXR1cm4gdGhpcy5zYSA/IF9uKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMuR2EsIGRhOiByLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBfbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLCBkYTogbiB9KTsKICAgICAgfQogICAgICB2YXIgciA9IHRoaXMuRGEobik7CiAgICAgIGlmICghcikKICAgICAgICByZXR1cm4gdGhpcy52YShuKSwgbnVsbDsKICAgICAgdmFyIGkgPSBlZSh0aGlzLmVhLCByKTsKICAgICAgaWYgKGkgIT09IHZvaWQgMCkKICAgICAgICByZXR1cm4gaS5BLmNvdW50LnZhbHVlID09PSAwID8gKGkuQS5kYSA9IHIsIGkuQS5nYSA9IG4sIGkuY2xvbmUoKSkgOiAoaSA9IGkuY2xvbmUoKSwgdGhpcy52YShuKSwgaSk7CiAgICAgIGlmIChpID0gdGhpcy5lYS5DYShyKSwgaSA9IHB0W2ldLCAhaSkKICAgICAgICByZXR1cm4gdC5jYWxsKHRoaXMpOwogICAgICBpID0gdGhpcy5yYSA/IGkuemEgOiBpLnBvaW50ZXJUeXBlOwogICAgICB2YXIgYSA9IG10KHIsIHRoaXMuZWEsIGkuZWEpOwogICAgICByZXR1cm4gYSA9PT0gbnVsbCA/IHQuY2FsbCh0aGlzKSA6IHRoaXMuc2EgPyBfbihpLmVhLm1hLCB7IGZhOiBpLCBkYTogYSwgaGE6IHRoaXMsIGdhOiBuIH0pIDogX24oCiAgICAgICAgaS5lYS5tYSwKICAgICAgICB7IGZhOiBpLCBkYTogYSB9CiAgICAgICk7CiAgICB9LCBlLmdldEluaGVyaXRlZEluc3RhbmNlQ291bnQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGZuKS5sZW5ndGg7CiAgICB9LCBlLmdldExpdmVJbmhlcml0ZWRJbnN0YW5jZXMgPSBmdW5jdGlvbigpIHsKICAgICAgdmFyIG4gPSBbXSwgdDsKICAgICAgZm9yICh0IGluIGZuKQogICAgICAgIGZuLmhhc093blByb3BlcnR5KHQpICYmIG4ucHVzaChmblt0XSk7CiAgICAgIHJldHVybiBuOwogICAgfSwgZS5mbHVzaFBlbmRpbmdEZWxldGVzID0gem4sIGUuc2V0RGVsYXlGdW5jdGlvbiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgbG4gPSBuLCBjbi5sZW5ndGggJiYgbG4gJiYgbG4oem4pOwogICAgfSwgZ3QgPSBlLlVuYm91bmRUeXBlRXJyb3IgPSBObigiVW5ib3VuZFR5cGVFcnJvciIpLCBlLmNvdW50X2VtdmFsX2hhbmRsZXMgPSBmdW5jdGlvbigpIHsKICAgICAgZm9yICh2YXIgbiA9IDAsIHQgPSA1OyB0IDwgSS5sZW5ndGg7ICsrdCkKICAgICAgICBJW3RdICE9PSB2b2lkIDAgJiYgKytuOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZ2V0X2ZpcnN0X2VtdmFsID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSA1OyBuIDwgSS5sZW5ndGg7ICsrbikKICAgICAgICBpZiAoSVtuXSAhPT0gdm9pZCAwKQogICAgICAgICAgcmV0dXJuIElbbl07CiAgICAgIHJldHVybiBudWxsOwogICAgfSwgYXQucHVzaCh7IEJhOiBmdW5jdGlvbigpIHsKICAgICAgT3QoKTsKICAgIH0gfSk7CiAgICB2YXIgc2UgPSB7CiAgICAgIHo6IGZ1bmN0aW9uKG4pIHsKICAgICAgICByZXR1cm4gVG4obiArIDE2KSArIDE2OwogICAgICB9LAogICAgICB1OiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgdGhyb3cgbmV3IEp0KG4pLkZhKHQsIHIpLCAidW5jYXVnaHRfZXhjZXB0aW9uIiBpbiBtbiA/IG1uLnhhKysgOiBtbi54YSA9IDEsIG47CiAgICAgIH0sCiAgICAgIHc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEpIHsKICAgICAgICB2YXIgbyA9IEluKHIpOwogICAgICAgIHQgPSBTKHQpLCBVKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihjKSB7CiAgICAgICAgICByZXR1cm4gISFjOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGMsIGwpIHsKICAgICAgICAgIHJldHVybiBsID8gaSA6IGE7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBmdW5jdGlvbihjKSB7CiAgICAgICAgICBpZiAociA9PT0gMSkKICAgICAgICAgICAgdmFyIGwgPSAkOwogICAgICAgICAgZWxzZSBpZiAociA9PT0gMikKICAgICAgICAgICAgbCA9IFg7CiAgICAgICAgICBlbHNlIGlmIChyID09PSA0KQogICAgICAgICAgICBsID0gYjsKICAgICAgICAgIGVsc2UKICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBib29sZWFuIHR5cGUgc2l6ZTogIiArIHQpOwogICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKGxbYyA+PiBvXSk7CiAgICAgICAgfSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGg6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEsIG8sIGMsIGwsIHAsIGYsIGQsIGgsIHcpIHsKICAgICAgICBkID0gUyhkKSwgbyA9IFYoYSwgbyksIGwgJiYgKGwgPSBWKGMsIGwpKSwgZiAmJiAoZiA9IFYocCwgZikpLCB3ID0gVihoLCB3KTsKICAgICAgICB2YXIgVCA9IExuKGQpOwogICAgICAgIHl0KFQsIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGQgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW2ldKTsKICAgICAgICB9KSwgdG4oW24sIHQsIHJdLCBpID8gW2ldIDogW10sIGZ1bmN0aW9uKHkpIHsKICAgICAgICAgIGlmICh5ID0geVswXSwgaSkKICAgICAgICAgICAgdmFyIE4gPSB5LmVhLCBPID0gTi5tYTsKICAgICAgICAgIGVsc2UKICAgICAgICAgICAgTyA9IEQucHJvdG90eXBlOwogICAgICAgICAgeSA9IGpuKFQsIGZ1bmN0aW9uKCkgewogICAgICAgICAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSBrKQogICAgICAgICAgICAgIHRocm93IG5ldyBubigiVXNlICduZXcnIHRvIGNvbnN0cnVjdCAiICsgZCk7CiAgICAgICAgICAgIGlmIChqLmxhID09PSB2b2lkIDApCiAgICAgICAgICAgICAgdGhyb3cgbmV3IG5uKGQgKyAiIGhhcyBubyBhY2Nlc3NpYmxlIGNvbnN0cnVjdG9yIik7CiAgICAgICAgICAgIHZhciBTdCA9IGoubGFbYXJndW1lbnRzLmxlbmd0aF07CiAgICAgICAgICAgIGlmIChTdCA9PT0gdm9pZCAwKQogICAgICAgICAgICAgIHRocm93IG5ldyBubigiVHJpZWQgdG8gaW52b2tlIGN0b3Igb2YgIiArIGQgKyAiIHdpdGggaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdGVkICgiICsgT2JqZWN0LmtleXMoai5sYSkudG9TdHJpbmcoKSArICIpIHBhcmFtZXRlcnMgaW5zdGVhZCEiKTsKICAgICAgICAgICAgcmV0dXJuIFN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9KTsKICAgICAgICAgIHZhciBrID0gT2JqZWN0LmNyZWF0ZShPLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiB5IH0gfSk7CiAgICAgICAgICB5LnByb3RvdHlwZSA9IGs7CiAgICAgICAgICB2YXIgaiA9IG5ldyBYdChkLCB5LCBrLCB3LCBOLCBvLCBsLCBmKTsKICAgICAgICAgIE4gPSBuZXcgeihkLCBqLCAhMCwgITEpLCBPID0gbmV3IHooZCArICIqIiwgaiwgITEsICExKTsKICAgICAgICAgIHZhciBobiA9IG5ldyB6KGQgKyAiIGNvbnN0KiIsIGosICExLCAhMCk7CiAgICAgICAgICByZXR1cm4gcHRbbl0gPSB7IHBvaW50ZXJUeXBlOiBPLCB6YTogaG4gfSwgdnQoVCwgeSksIFtOLCBPLCBobl07CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEsIG8pIHsKICAgICAgICBRbigwIDwgdCk7CiAgICAgICAgdmFyIGMgPSBBdCh0LCByKTsKICAgICAgICBhID0gVihpLCBhKTsKICAgICAgICB2YXIgbCA9IFtvXSwgcCA9IFtdOwogICAgICAgIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGYpIHsKICAgICAgICAgIGYgPSBmWzBdOwogICAgICAgICAgdmFyIGQgPSAiY29uc3RydWN0b3IgIiArIGYubmFtZTsKICAgICAgICAgIGlmIChmLmVhLmxhID09PSB2b2lkIDAgJiYgKGYuZWEubGEgPSBbXSksIGYuZWEubGFbdCAtIDFdICE9PSB2b2lkIDApCiAgICAgICAgICAgIHRocm93IG5ldyBubigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIGNvbnN0cnVjdG9ycyB3aXRoIGlkZW50aWNhbCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArICh0IC0gMSkgKyAiKSBmb3IgY2xhc3MgJyIgKyBmLm5hbWUgKyAiJyEgT3ZlcmxvYWQgcmVzb2x1dGlvbiBpcyBjdXJyZW50bHkgb25seSBwZXJmb3JtZWQgdXNpbmcgdGhlIHBhcmFtZXRlciBjb3VudCwgbm90IGFjdHVhbCB0eXBlIGluZm8hIik7CiAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGYubmFtZSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBjKTsKICAgICAgICAgIH0sIHRuKFtdLCBjLCBmdW5jdGlvbihoKSB7CiAgICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggIT09IHQgLSAxICYmIHYoZCArICIgY2FsbGVkIHdpdGggIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArICh0IC0gMSkpLCBwLmxlbmd0aCA9IDAsIGwubGVuZ3RoID0gdDsKICAgICAgICAgICAgICBmb3IgKHZhciB3ID0gMTsgdyA8IHQ7ICsrdykKICAgICAgICAgICAgICAgIGxbd10gPSBoW3ddLnRvV2lyZVR5cGUoCiAgICAgICAgICAgICAgICAgIHAsCiAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1t3IC0gMV0KICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgcmV0dXJuIHcgPSBhLmFwcGx5KG51bGwsIGwpLCBDbihwKSwgaFswXS5mcm9tV2lyZVR5cGUodyk7CiAgICAgICAgICAgIH0sIFtdOwogICAgICAgICAgfSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBiOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBvLCBjLCBsLCBwLCBmKSB7CiAgICAgICAgdCA9IFModCksIGEgPSBWKGksIGEpLCB0bihbXSwgW25dLCBmdW5jdGlvbihkKSB7CiAgICAgICAgICBkID0gZFswXTsKICAgICAgICAgIHZhciBoID0gZC5uYW1lICsgIi4iICsgdCwgdyA9IHsgZ2V0OiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBhY2Nlc3MgIiArIGggKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW3IsIGNdKTsKICAgICAgICAgIH0sIGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwIH07CiAgICAgICAgICByZXR1cm4gcCA/IHcuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgYWNjZXNzICIgKyBoICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBjXSk7CiAgICAgICAgICB9IDogdy5zZXQgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgdihoICsgIiBpcyBhIHJlYWQtb25seSBwcm9wZXJ0eSIpOwogICAgICAgICAgfSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIHcpLCB0bihbXSwgcCA/IFtyLCBjXSA6IFtyXSwgZnVuY3Rpb24oVCkgewogICAgICAgICAgICB2YXIgeSA9IFRbMF0sIE4gPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgdmFyIGsgPSBfdCh0aGlzLCBkLCBoICsgIiBnZXR0ZXIiKTsKICAgICAgICAgICAgICByZXR1cm4geS5mcm9tV2lyZVR5cGUoYShvLCBrKSk7CiAgICAgICAgICAgIH0sIGVudW1lcmFibGU6ICEwIH07CiAgICAgICAgICAgIGlmIChwKSB7CiAgICAgICAgICAgICAgcCA9IFYobCwgcCk7CiAgICAgICAgICAgICAgdmFyIE8gPSBUWzFdOwogICAgICAgICAgICAgIE4uc2V0ID0gZnVuY3Rpb24oaykgewogICAgICAgICAgICAgICAgdmFyIGogPSBfdCh0aGlzLCBkLCBoICsgIiBzZXR0ZXIiKSwgaG4gPSBbXTsKICAgICAgICAgICAgICAgIHAoZiwgaiwgTy50b1dpcmVUeXBlKGhuLCBrKSksIENuKGhuKTsKICAgICAgICAgICAgICB9OwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZC5lYS5tYSwgdCwgTiksIFtdOwogICAgICAgICAgfSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICB2OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFModCksIFUobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uKHIpIHsKICAgICAgICAgIHZhciBpID0gSVtyXS52YWx1ZTsKICAgICAgICAgIHJldHVybiBEbihyKSwgaTsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihyLCBpKSB7CiAgICAgICAgICByZXR1cm4gZW4oaSk7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIG06IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICByID0gSW4ociksIHQgPSBTKHQpLCBVKG4sIHsKICAgICAgICAgIG5hbWU6IHQsCiAgICAgICAgICBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIGk7CiAgICAgICAgICB9LAogICAgICAgICAgdG9XaXJlVHlwZTogZnVuY3Rpb24oaSwgYSkgewogICAgICAgICAgICBpZiAodHlwZW9mIGEgIT0gIm51bWJlciIgJiYgdHlwZW9mIGEgIT0gImJvb2xlYW4iKQogICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oYSkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgcmV0dXJuIGE7CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogcmUodCwgciksCiAgICAgICAgICBrYTogbnVsbAogICAgICAgIH0pOwogICAgICB9LAogICAgICBjOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBvKSB7CiAgICAgICAgdmFyIGMgPSBBdCh0LCByKTsKICAgICAgICBuID0gUyhuKSwgYSA9IFYoaSwgYSksIHl0KG4sIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjYWxsICIgKyBuICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGMpOwogICAgICAgIH0sIHQgLSAxKSwgdG4oW10sIGMsIGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIHZhciBwID0gbiwgZiA9IG47CiAgICAgICAgICBsID0gW2xbMF0sIG51bGxdLmNvbmNhdChsLnNsaWNlKDEpKTsKICAgICAgICAgIHZhciBkID0gYSwgaCA9IGwubGVuZ3RoOwogICAgICAgICAgMiA+IGggJiYgdigiYXJnVHlwZXMgYXJyYXkgc2l6ZSBtaXNtYXRjaCEgTXVzdCBhdCBsZWFzdCBnZXQgcmV0dXJuIHZhbHVlIGFuZCAndGhpcycgdHlwZXMhIik7CiAgICAgICAgICBmb3IgKHZhciB3ID0gbFsxXSAhPT0gbnVsbCAmJiAhMSwgVCA9ICExLCB5ID0gMTsgeSA8IGwubGVuZ3RoOyArK3kpCiAgICAgICAgICAgIGlmIChsW3ldICE9PSBudWxsICYmIGxbeV0ua2EgPT09IHZvaWQgMCkgewogICAgICAgICAgICAgIFQgPSAhMDsKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgdmFyIE4gPSBsWzBdLm5hbWUgIT09ICJ2b2lkIiwgTyA9ICIiLCBrID0gIiI7CiAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaCAtIDI7ICsreSkKICAgICAgICAgICAgTyArPSAoeSAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHksIGsgKz0gKHkgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyB5ICsgIldpcmVkIjsKICAgICAgICAgIGYgPSAicmV0dXJuIGZ1bmN0aW9uICIgKyBMbihmKSArICIoIiArIE8gKyBgKSB7CmlmIChhcmd1bWVudHMubGVuZ3RoICE9PSBgICsgKGggLSAyKSArIGApIHsKdGhyb3dCaW5kaW5nRXJyb3IoJ2Z1bmN0aW9uIGAgKyBmICsgIiBjYWxsZWQgd2l0aCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKGggLSAyKSArIGAgYXJncyEnKTsKfQpgLCBUICYmIChmICs9IGB2YXIgZGVzdHJ1Y3RvcnMgPSBbXTsKYCk7CiAgICAgICAgICB2YXIgaiA9IFQgPyAiZGVzdHJ1Y3RvcnMiIDogIm51bGwiOwogICAgICAgICAgZm9yIChPID0gInRocm93QmluZGluZ0Vycm9yIGludm9rZXIgZm4gcnVuRGVzdHJ1Y3RvcnMgcmV0VHlwZSBjbGFzc1BhcmFtIi5zcGxpdCgiICIpLCBkID0gW3YsIGQsIG8sIENuLCBsWzBdLCBsWzFdXSwgdyAmJiAoZiArPSAidmFyIHRoaXNXaXJlZCA9IGNsYXNzUGFyYW0udG9XaXJlVHlwZSgiICsgaiArIGAsIHRoaXMpOwpgKSwgeSA9IDA7IHkgPCBoIC0gMjsgKyt5KQogICAgICAgICAgICBmICs9ICJ2YXIgYXJnIiArIHkgKyAiV2lyZWQgPSBhcmdUeXBlIiArIHkgKyAiLnRvV2lyZVR5cGUoIiArIGogKyAiLCBhcmciICsgeSArICIpOyAvLyAiICsgbFt5ICsgMl0ubmFtZSArIGAKYCwgTy5wdXNoKCJhcmdUeXBlIiArIHkpLCBkLnB1c2gobFt5ICsgMl0pOwogICAgICAgICAgaWYgKHcgJiYgKGsgPSAidGhpc1dpcmVkIiArICgwIDwgay5sZW5ndGggPyAiLCAiIDogIiIpICsgayksIGYgKz0gKE4gPyAidmFyIHJ2ID0gIiA6ICIiKSArICJpbnZva2VyKGZuIiArICgwIDwgay5sZW5ndGggPyAiLCAiIDogIiIpICsgayArIGApOwpgLCBUKQogICAgICAgICAgICBmICs9IGBydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyk7CmA7CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIGZvciAoeSA9IHcgPyAxIDogMjsgeSA8IGwubGVuZ3RoOyArK3kpCiAgICAgICAgICAgICAgaCA9IHkgPT09IDEgPyAidGhpc1dpcmVkIiA6ICJhcmciICsgKHkgLSAyKSArICJXaXJlZCIsIGxbeV0ua2EgIT09IG51bGwgJiYgKGYgKz0gaCArICJfZHRvcigiICsgaCArICIpOyAvLyAiICsgbFt5XS5uYW1lICsgYApgLCBPLnB1c2goaCArICJfZHRvciIpLCBkLnB1c2gobFt5XS5rYSkpOwogICAgICAgICAgcmV0dXJuIE4gJiYgKGYgKz0gYHZhciByZXQgPSByZXRUeXBlLmZyb21XaXJlVHlwZShydik7CnJldHVybiByZXQ7CmApLCBPLnB1c2goZiArIGB9CmApLCBsID0gaWUoTykuYXBwbHkobnVsbCwgZCksIHZ0KHAsIGwsIHQgLSAxKSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGU6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEpIHsKICAgICAgICBmdW5jdGlvbiBvKGYpIHsKICAgICAgICAgIHJldHVybiBmOwogICAgICAgIH0KICAgICAgICB0ID0gUyh0KSwgYSA9PT0gLTEgJiYgKGEgPSA0Mjk0OTY3Mjk1KTsKICAgICAgICB2YXIgYyA9IEluKHIpOwogICAgICAgIGlmIChpID09PSAwKSB7CiAgICAgICAgICB2YXIgbCA9IDMyIC0gOCAqIHI7CiAgICAgICAgICBvID0gZnVuY3Rpb24oZikgewogICAgICAgICAgICByZXR1cm4gZiA8PCBsID4+PiBsOwogICAgICAgICAgfTsKICAgICAgICB9CiAgICAgICAgdmFyIHAgPSB0LmluZGV4T2YoInVuc2lnbmVkIikgIT0gLTE7CiAgICAgICAgVShuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogbywgdG9XaXJlVHlwZTogZnVuY3Rpb24oZiwgZCkgewogICAgICAgICAgaWYgKHR5cGVvZiBkICE9ICJudW1iZXIiICYmIHR5cGVvZiBkICE9ICJib29sZWFuIikKICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBybihkKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgaWYgKGQgPCBpIHx8IGQgPiBhKQogICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXNzaW5nIGEgbnVtYmVyICInICsgcm4oZCkgKyAnIiBmcm9tIEpTIHNpZGUgdG8gQy9DKysgc2lkZSB0byBhbiBhcmd1bWVudCBvZiB0eXBlICInICsgdCArICciLCB3aGljaCBpcyBvdXRzaWRlIHRoZSB2YWxpZCByYW5nZSBbJyArIGkgKyAiLCAiICsgYSArICJdISIpOwogICAgICAgICAgcmV0dXJuIHAgPyBkID4+PiAwIDogZCB8IDA7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBhZSh0LCBjLCBpICE9PSAwKSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGQ6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBmdW5jdGlvbiBpKG8pIHsKICAgICAgICAgIG8gPj49IDI7CiAgICAgICAgICB2YXIgYyA9IEg7CiAgICAgICAgICByZXR1cm4gbmV3IGEoUSwgY1tvICsgMV0sIGNbb10pOwogICAgICAgIH0KICAgICAgICB2YXIgYSA9IFtJbnQ4QXJyYXksIFVpbnQ4QXJyYXksIEludDE2QXJyYXksIFVpbnQxNkFycmF5LCBJbnQzMkFycmF5LCBVaW50MzJBcnJheSwgRmxvYXQzMkFycmF5LCBGbG9hdDY0QXJyYXldW3RdOwogICAgICAgIHIgPSBTKHIpLCBVKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBpLCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGkgfSwgeyBFYTogITAgfSk7CiAgICAgIH0sCiAgICAgIG46IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUyh0KTsKICAgICAgICB2YXIgciA9IHQgPT09ICJzdGQ6OnN0cmluZyI7CiAgICAgICAgVShuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHZhciBhID0gSFtpID4+IDJdOwogICAgICAgICAgICBpZiAocikKICAgICAgICAgICAgICBmb3IgKHZhciBvID0gaSArIDQsIGMgPSAwOyBjIDw9IGE7ICsrYykgewogICAgICAgICAgICAgICAgdmFyIGwgPSBpICsgNCArIGM7CiAgICAgICAgICAgICAgICBpZiAoYyA9PSBhIHx8IHhbbF0gPT0gMCkgewogICAgICAgICAgICAgICAgICBpZiAobykgewogICAgICAgICAgICAgICAgICAgIHZhciBwID0gbywgZiA9IHgsIGQgPSBwICsgKGwgLSBvKTsKICAgICAgICAgICAgICAgICAgICBmb3IgKG8gPSBwOyBmW29dICYmICEobyA+PSBkKTsgKQogICAgICAgICAgICAgICAgICAgICAgKytvOwogICAgICAgICAgICAgICAgICAgIGlmICgxNiA8IG8gLSBwICYmIGYuc3ViYXJyYXkgJiYgWG4pCiAgICAgICAgICAgICAgICAgICAgICBwID0gWG4uZGVjb2RlKGYuc3ViYXJyYXkocCwgbykpOwogICAgICAgICAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgICAgICAgZm9yIChkID0gIiI7IHAgPCBvOyApIHsKICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBmW3ArK107CiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoICYgMTI4KSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSBmW3ArK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGggJiAyMjQpID09IDE5MikKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoaCAmIDMxKSA8PCA2IHwgdyk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgVCA9IGZbcCsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA9IChoICYgMjQwKSA9PSAyMjQgPyAoaCAmIDE1KSA8PCAxMiB8IHcgPDwgNiB8IFQgOiAoaCAmIDcpIDw8IDE4IHwgdyA8PCAxMiB8IFQgPDwgNiB8IGZbcCsrXSAmIDYzLCA2NTUzNiA+IGggPyBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoaCkgOiAoaCAtPSA2NTUzNiwgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2IHwgaCA+PiAxMCwgNTYzMjAgfCBoICYgMTAyMykpOwogICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlCiAgICAgICAgICAgICAgICAgICAgICAgICAgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGgpOwogICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgcCA9IGQ7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9IGVsc2UKICAgICAgICAgICAgICAgICAgICBwID0gIiI7CiAgICAgICAgICAgICAgICAgIGlmICh5ID09PSB2b2lkIDApCiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBwOwogICAgICAgICAgICAgICAgICBlbHNlCiAgICAgICAgICAgICAgICAgICAgeSArPSAiXDAiLCB5ICs9IHA7CiAgICAgICAgICAgICAgICAgIG8gPSBsICsgMTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgIGZvciAoeSA9IEFycmF5KGEpLCBjID0gMDsgYyA8IGE7ICsrYykKICAgICAgICAgICAgICAgIHlbY10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHhbaSArIDQgKyBjXSk7CiAgICAgICAgICAgICAgeSA9IHkuam9pbigiIik7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIEIoaSksIHk7CiAgICAgICAgICB9LAogICAgICAgICAgdG9XaXJlVHlwZTogZnVuY3Rpb24oaSwgYSkgewogICAgICAgICAgICBhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgJiYgKGEgPSBuZXcgVWludDhBcnJheShhKSk7CiAgICAgICAgICAgIHZhciBvID0gdHlwZW9mIGEgPT0gInN0cmluZyI7CiAgICAgICAgICAgIG8gfHwgYSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgfHwgYSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5IHx8IGEgaW5zdGFuY2VvZiBJbnQ4QXJyYXkgfHwgdigiQ2Fubm90IHBhc3Mgbm9uLXN0cmluZyB0byBzdGQ6OnN0cmluZyIpOwogICAgICAgICAgICB2YXIgYyA9IChyICYmIG8gPyBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICBmb3IgKHZhciBmID0gMCwgZCA9IDA7IGQgPCBhLmxlbmd0aDsgKytkKSB7CiAgICAgICAgICAgICAgICB2YXIgaCA9IGEuY2hhckNvZGVBdChkKTsKICAgICAgICAgICAgICAgIDU1Mjk2IDw9IGggJiYgNTczNDMgPj0gaCAmJiAoaCA9IDY1NTM2ICsgKChoICYgMTAyMykgPDwgMTApIHwgYS5jaGFyQ29kZUF0KCsrZCkgJiAxMDIzKSwgMTI3ID49IGggPyArK2YgOiBmID0gMjA0NyA+PSBoID8gZiArIDIgOiA2NTUzNSA+PSBoID8gZiArIDMgOiBmICsgNDsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgcmV0dXJuIGY7CiAgICAgICAgICAgIH0gOiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICByZXR1cm4gYS5sZW5ndGg7CiAgICAgICAgICAgIH0pKCksIGwgPSBUbig0ICsgYyArIDEpOwogICAgICAgICAgICBpZiAoSFtsID4+IDJdID0gYywgciAmJiBvKQogICAgICAgICAgICAgIEh0KGEsIGwgKyA0LCBjICsgMSk7CiAgICAgICAgICAgIGVsc2UgaWYgKG8pCiAgICAgICAgICAgICAgZm9yIChvID0gMDsgbyA8IGM7ICsrbykgewogICAgICAgICAgICAgICAgdmFyIHAgPSBhLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICAgICAgICAyNTUgPCBwICYmIChCKGwpLCB2KCJTdHJpbmcgaGFzIFVURi0xNiBjb2RlIHVuaXRzIHRoYXQgZG8gbm90IGZpdCBpbiA4IGJpdHMiKSksIHhbbCArIDQgKyBvXSA9IHA7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlCiAgICAgICAgICAgICAgZm9yIChvID0gMDsgbyA8IGM7ICsrbykKICAgICAgICAgICAgICAgIHhbbCArIDQgKyBvXSA9IGFbb107CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaChCLCBsKSwgbDsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIEIoaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFMociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IFV0LCBhID0genQsIG8gPSBCdCwgYyA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gcG47CiAgICAgICAgICB9LCBsID0gMTsKICAgICAgICBlbHNlCiAgICAgICAgICB0ID09PSA0ICYmIChpID0gRHQsIGEgPSBWdCwgbyA9IEd0LCBjID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHJldHVybiBIOwogICAgICAgICAgfSwgbCA9IDIpOwogICAgICAgIFUobiwgeyBuYW1lOiByLCBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uKHApIHsKICAgICAgICAgIGZvciAodmFyIGYgPSBIW3AgPj4gMl0sIGQgPSBjKCksIGgsIHcgPSBwICsgNCwgVCA9IDA7IFQgPD0gZjsgKytUKSB7CiAgICAgICAgICAgIHZhciB5ID0gcCArIDQgKyBUICogdDsKICAgICAgICAgICAgKFQgPT0gZiB8fCBkW3kgPj4gbF0gPT0gMCkgJiYgKHcgPSBpKHcsIHkgLSB3KSwgaCA9PT0gdm9pZCAwID8gaCA9IHcgOiAoaCArPSAiXDAiLCBoICs9IHcpLCB3ID0geSArIHQpOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuIEIocCksIGg7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ocCwgZikgewogICAgICAgICAgdHlwZW9mIGYgIT0gInN0cmluZyIgJiYgdigiQ2Fubm90IHBhc3Mgbm9uLXN0cmluZyB0byBDKysgc3RyaW5nIHR5cGUgIiArIHIpOwogICAgICAgICAgdmFyIGQgPSBvKGYpLCBoID0gVG4oNCArIGQgKyB0KTsKICAgICAgICAgIHJldHVybiBIW2ggPj4gMl0gPSBkID4+IGwsIGEoZiwgaCArIDQsIGQgKyB0KSwgcCAhPT0gbnVsbCAmJiBwLnB1c2goQiwgaCksIGg7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwga2E6IGZ1bmN0aW9uKHApIHsKICAgICAgICAgIEIocCk7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgeDogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBTKHQpLCBVKG4sIHsgUWE6ICEwLCBuYW1lOiB0LCBhcmdQYWNrQWR2YW5jZTogMCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbigpIHsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbigpIHsKICAgICAgICB9IH0pOwogICAgICB9LAogICAgICBrOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgbiA9IFZuKG4pLCB0ID0gQ3QodCwgImVtdmFsOjphcyIpOwogICAgICAgIHZhciBpID0gW10sIGEgPSBlbihpKTsKICAgICAgICByZXR1cm4gYltyID4+IDJdID0gYSwgdC50b1dpcmVUeXBlKGksIG4pOwogICAgICB9LAogICAgICBpOiBEbiwKICAgICAgbDogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHJldHVybiBuID0gVm4obiksIHQgPSBWbih0KSwgZW4oblt0XSk7CiAgICAgIH0sCiAgICAgIHA6IGZ1bmN0aW9uKG4pIHsKICAgICAgICB2YXIgdCA9IG9lW25dOwogICAgICAgIHJldHVybiBlbih0ID09PSB2b2lkIDAgPyBTKG4pIDogdCk7CiAgICAgIH0sCiAgICAgIG86IGZ1bmN0aW9uKG4pIHsKICAgICAgICBDbihJW25dLnZhbHVlKSwgRG4obik7CiAgICAgIH0sCiAgICAgIHk6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IEN0KG4sICJfZW12YWxfdGFrZV92YWx1ZSIpLCBuID0gbi5yZWFkVmFsdWVGcm9tUG9pbnRlcih0KSwgZW4obik7CiAgICAgIH0sCiAgICAgIGY6IGZ1bmN0aW9uKCkgewogICAgICAgIHNuKCk7CiAgICAgIH0sCiAgICAgIHE6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICB4LmNvcHlXaXRoaW4obiwgdCwgdCArIHIpOwogICAgICB9LAogICAgICByOiBmdW5jdGlvbihuKSB7CiAgICAgICAgbiA+Pj49IDA7CiAgICAgICAgdmFyIHQgPSB4Lmxlbmd0aDsKICAgICAgICBpZiAoMjE0NzQ4MzY0OCA8IG4pCiAgICAgICAgICByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBHLmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBRLmJ5dGVMZW5ndGggKyA2NTUzNSA+Pj4gMTYpLCBldChHLmJ1ZmZlcik7CiAgICAgICAgICAgICAgdmFyIGEgPSAxOwogICAgICAgICAgICAgIGJyZWFrIG47CiAgICAgICAgICAgIH0gY2F0Y2ggewogICAgICAgICAgICB9CiAgICAgICAgICAgIGEgPSB2b2lkIDA7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAoYSkKICAgICAgICAgICAgcmV0dXJuICEwOwogICAgICAgIH0KICAgICAgICByZXR1cm4gITE7CiAgICAgIH0sCiAgICAgIHM6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IDA7CiAgICAgICAgcmV0dXJuIFR0KCkuZm9yRWFjaChmdW5jdGlvbihpLCBhKSB7CiAgICAgICAgICB2YXIgbyA9IHQgKyByOwogICAgICAgICAgZm9yIChhID0gYltuICsgNCAqIGEgPj4gMl0gPSBvLCBvID0gMDsgbyA8IGkubGVuZ3RoOyArK28pCiAgICAgICAgICAgICRbYSsrID4+IDBdID0gaS5jaGFyQ29kZUF0KG8pOwogICAgICAgICAgJFthID4+IDBdID0gMCwgciArPSBpLmxlbmd0aCArIDE7CiAgICAgICAgfSksIDA7CiAgICAgIH0sCiAgICAgIHQ6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IFR0KCk7CiAgICAgICAgYltuID4+IDJdID0gci5sZW5ndGg7CiAgICAgICAgdmFyIGkgPSAwOwogICAgICAgIHJldHVybiByLmZvckVhY2goZnVuY3Rpb24oYSkgewogICAgICAgICAgaSArPSBhLmxlbmd0aCArIDE7CiAgICAgICAgfSksIGJbdCA+PiAyXSA9IGksIDA7CiAgICAgIH0sCiAgICAgIGE6IEcKICAgIH07CiAgICAoZnVuY3Rpb24oKSB7CiAgICAgIGZ1bmN0aW9uIG4obykgewogICAgICAgIG8gPSBvLmV4cG9ydHMsIG8gPSBNdChvKSwgZS5hc20gPSBvLCBZLS0sIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWSksIFkgPT0gMCAmJiBvbiAmJiAobyA9IG9uLCBvbiA9IG51bGwsIG8oKSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gdChvKSB7CiAgICAgICAgbihvLmluc3RhbmNlKTsKICAgICAgfQogICAgICBmdW5jdGlvbiByKG8pIHsKICAgICAgICByZXR1cm4gWnQoKS50aGVuKGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShjLCBpKTsKICAgICAgICB9KS50aGVuKG8sIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIFAoImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206ICIgKyBjKSwgc24oYyk7CiAgICAgICAgfSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSB7IGE6IHNlIH07CiAgICAgIGlmIChZKyssIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWSksIGUuaW5zdGFudGlhdGVXYXNtKQogICAgICAgIHRyeSB7CiAgICAgICAgICB2YXIgYSA9IGUuaW5zdGFudGlhdGVXYXNtKGksIG4pOwogICAgICAgICAgcmV0dXJuIGEgPSBNdChhKTsKICAgICAgICB9IGNhdGNoIChvKSB7CiAgICAgICAgICByZXR1cm4gUCgiTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogIiArIG8pLCAhMTsKICAgICAgICB9CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICBpZiAoTCB8fCB0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgIT0gImZ1bmN0aW9uIiB8fCBzdCgpIHx8IHhuKCJmaWxlOi8vIikgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIpCiAgICAgICAgICByZXR1cm4gcih0KTsKICAgICAgICBmZXRjaChaLCB7IGNyZWRlbnRpYWxzOiAic2FtZS1vcmlnaW4iIH0pLnRoZW4oZnVuY3Rpb24obykgewogICAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKG8sIGkpLnRoZW4odCwgZnVuY3Rpb24oYykgewogICAgICAgICAgICByZXR1cm4gUCgid2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6ICIgKyBjKSwgUCgiZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb24iKSwgcih0KTsKICAgICAgICAgIH0pOwogICAgICAgIH0pOwogICAgICB9KCksIHt9OwogICAgfSkoKTsKICAgIHZhciBPdCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoT3QgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGUuYXNtLkIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBUbiA9IGUuX21hbGxvYyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFRuID0gZS5fbWFsbG9jID0gZS5hc20uQykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIEIgPSBlLl9mcmVlID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoQiA9IGUuX2ZyZWUgPSBlLmFzbS5EKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgYnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoYnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZS5hc20uRSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICBlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBlLmFzbS5GKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpID0gZS5hc20uRykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aSA9IGUuYXNtLkgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9pID0gZS5hc20uSSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpID0gZS5hc20uSikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWkgPSBlLmFzbS5LKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2ZpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9maWkgPSBlLmFzbS5MKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWYgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpZiA9IGUuYXNtLk0pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWkgPSBlLmFzbS5OKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaSA9IGUuYXNtLk8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaSA9IGUuYXNtLlApLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaSA9IGUuYXNtLlEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaWkgPSBlLmFzbS5SKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpID0gZS5hc20uUykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZS5hc20uVCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGUuYXNtLlUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBlLmFzbS5WKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGUuYXNtLlcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGUuYXNtLlgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpID0gZS5hc20uWSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaSA9IGUuYXNtLlopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpID0gZS5hc20uXykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGUuYXNtLiQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZS5hc20uYWEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBlLmFzbS5iYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBlLmFzbS5jYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICB2YXIgUG47CiAgICBvbiA9IGZ1bmN0aW9uIG4oKSB7CiAgICAgIFBuIHx8ICRuKCksIFBuIHx8IChvbiA9IG4pOwogICAgfTsKICAgIGZ1bmN0aW9uICRuKCkgewogICAgICBmdW5jdGlvbiBuKCkgewogICAgICAgIGlmICghUG4gJiYgKFBuID0gITAsIGUuY2FsbGVkUnVuID0gITAsICFSbikpIHsKICAgICAgICAgIGlmICh5bihhdCksIHluKCR0KSwgbShlKSwgZS5vblJ1bnRpbWVJbml0aWFsaXplZCAmJiBlLm9uUnVudGltZUluaXRpYWxpemVkKCksIGUucG9zdFJ1bikKICAgICAgICAgICAgZm9yICh0eXBlb2YgZS5wb3N0UnVuID09ICJmdW5jdGlvbiIgJiYgKGUucG9zdFJ1biA9IFtlLnBvc3RSdW5dKTsgZS5wb3N0UnVuLmxlbmd0aDsgKSB7CiAgICAgICAgICAgICAgdmFyIHQgPSBlLnBvc3RSdW4uc2hpZnQoKTsKICAgICAgICAgICAgICBvdC51bnNoaWZ0KHQpOwogICAgICAgICAgICB9CiAgICAgICAgICB5bihvdCk7CiAgICAgICAgfQogICAgICB9CiAgICAgIGlmICghKDAgPCBZKSkgewogICAgICAgIGlmIChlLnByZVJ1bikKICAgICAgICAgIGZvciAodHlwZW9mIGUucHJlUnVuID09ICJmdW5jdGlvbiIgJiYgKGUucHJlUnVuID0gW2UucHJlUnVuXSk7IGUucHJlUnVuLmxlbmd0aDsgKQogICAgICAgICAgICBZdCgpOwogICAgICAgIHluKGl0KSwgMCA8IFkgfHwgKGUuc2V0U3RhdHVzID8gKGUuc2V0U3RhdHVzKCJSdW5uaW5nLi4uIiksIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgICBlLnNldFN0YXR1cygiIik7CiAgICAgICAgICB9LCAxKSwgbigpOwogICAgICAgIH0sIDEpKSA6IG4oKSk7CiAgICAgIH0KICAgIH0KICAgIGlmIChlLnJ1biA9ICRuLCBlLnByZUluaXQpCiAgICAgIGZvciAodHlwZW9mIGUucHJlSW5pdCA9PSAiZnVuY3Rpb24iICYmIChlLnByZUluaXQgPSBbZS5wcmVJbml0XSk7IDAgPCBlLnByZUluaXQubGVuZ3RoOyApCiAgICAgICAgZS5wcmVJbml0LnBvcCgpKCk7CiAgICByZXR1cm4gJG4oKSwgdS5yZWFkeTsKICB9Owp9KCk7CmNsYXNzIHBlIHsKICBjb25zdHJ1Y3RvcigpIHsKICAgIFluKHRoaXMsICJzYW1XYXNtTW9kdWxlIik7CiAgfQogIGdldE92ZXJyaWRkZW5Nb2R1bGVzKHUsIGUpIHsKICAgIHJldHVybiB7CiAgICAgIGxvY2F0ZUZpbGU6IChtKSA9PiBuZXcgVVJMKGUgfHwgbSwgdSkuaHJlZgogICAgfTsKICB9CiAgYXN5bmMgaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZSh1LCBlKSB7CiAgICB0cnkgewogICAgICBjb25zdCBtID0gYXdhaXQgZmV0Y2godSk7CiAgICAgIGlmICghbS5vaykKICAgICAgICB0aHJvdyBuZXcgRigKICAgICAgICAgIGBUaGUgcGF0aCB0byAke2V9IGlzIGluY29ycmVjdCBvciB0aGUgbW9kdWxlIGlzIG1pc3NpbmcuIFBsZWFzZSBjaGVjayBwcm92aWRlZCBwYXRoIHRvIHdhc20gZmlsZXMuIEN1cnJlbnQgcGF0aCBpcyAke3V9YAogICAgICAgICk7CiAgICAgIGNvbnN0IGcgPSBhd2FpdCBtLmFycmF5QnVmZmVyKCk7CiAgICAgIGlmICghV2ViQXNzZW1ibHkudmFsaWRhdGUoZykpCiAgICAgICAgdGhyb3cgbmV3IEYoCiAgICAgICAgICBgVGhlIHByb3ZpZGVkICR7ZX0gaXMgbm90IGEgdmFsaWQgV0FTTSBtb2R1bGUuIFBsZWFzZSBjaGVjayBwcm92aWRlZCBwYXRoIHRvIHdhc20gZmlsZXMuIEN1cnJlbnQgcGF0aCBpcyAke3V9YAogICAgICAgICk7CiAgICB9IGNhdGNoIChtKSB7CiAgICAgIGlmIChtIGluc3RhbmNlb2YgRikKICAgICAgICB0aHJvdyBjb25zb2xlLmVycm9yKAogICAgICAgICAgIllvdSBjYW4gZmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0byBob3N0IHdhc20gZmlsZXMgaGVyZTogaHR0cHM6Ly9kZXZlbG9wZXJzLmlubm92YXRyaWNzLmNvbS9kaWdpdGFsLW9uYm9hcmRpbmcvdGVjaG5pY2FsL3JlbW90ZS9kb3Qtd2ViLWRvY3VtZW50L2xhdGVzdC9kb2N1bWVudGF0aW9uLyNfaG9zdGluZ19zYW1fd2FzbSIKICAgICAgICApLCBtOwogICAgfQogIH0KICBhc3luYyBnZXRXYXNtRmlsZU5hbWUoKSB7CiAgICByZXR1cm4gYXdhaXQgY2UoKSA/IGt0LnNpbWQgOiBrdC5zYW07CiAgfQogIGFzeW5jIGluaXRTYW1Nb2R1bGUodSwgZSA9ICIvd2FzbSIpIHsKICAgIGlmICh0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHJldHVybjsKICAgIGNvbnN0IG0gPSBhd2FpdCB0aGlzLmdldFdhc21GaWxlTmFtZSgpLCBnID0gYCR7ZX0vJHttfWA7CiAgICB0cnkgewogICAgICB0aGlzLnNhbVdhc21Nb2R1bGUgPSBhd2FpdCBoZSh0aGlzLmdldE92ZXJyaWRkZW5Nb2R1bGVzKHUsIGcpKTsKICAgIH0gY2F0Y2ggewogICAgICB0aHJvdyBhd2FpdCB0aGlzLmhhbmRsZU1pc3NpbmdPckludmFsaWRTYW1Nb2R1bGUoZywgbSksIG5ldyBGKCJDb3VsZCBub3QgaW5pdCBkZXRlY3Rvci4iKTsKICAgIH0KICB9CiAgYXN5bmMgZ2V0U2FtVmVyc2lvbigpIHsKICAgIHZhciBlOwogICAgY29uc3QgdSA9IGF3YWl0ICgoZSA9IHRoaXMuc2FtV2FzbU1vZHVsZSkgPT0gbnVsbCA/IHZvaWQgMCA6IGUuZ2V0SW5mb1N0cmluZygpKTsKICAgIHJldHVybiB1ID09IG51bGwgPyB2b2lkIDAgOiB1LnRyaW0oKTsKICB9CiAgLyoKICAgKiBJbiBUUyA1LjIuMCB3YXMgYWRkZWQgc3BlY2lhbCBrZXl3b3JkICJ1c2luZyIgd2hpY2ggY291bGQgYmUgcGVyZmVjdCBmb3IgdGhpcyBjYXNlLgogICAqIFVuZm9ydHVuYXRlbHksIHZpdGUgcHJlYWN0IHBsdWdpbiBkb2VzIG5vdCBzdXBwb3J0IHRoaXMgdmVyc2lvbiBvZiBUUyB5ZXQuCiAgICogQ2hlY2sgcG9zc2liaWxpdHkgb2YgdXNpbmcgInVzaW5nIiBrZXl3b3JkIHdoZW4gdml0ZSBwcmVhY3QgcGx1Z2luIHVwZGF0ZXMKICAgKi8KICBhbGxvY2F0ZU1lbW9yeSh1KSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEYoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIHJldHVybiB0aGlzLnNhbVdhc21Nb2R1bGUuX21hbGxvYyh1KTsKICB9CiAgcmVsZWFzZU1lbW9yeSh1KSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEYoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIHRoaXMuc2FtV2FzbU1vZHVsZS5fZnJlZSh1KTsKICB9CiAgd3JpdGVEYXRhVG9NZW1vcnkodSwgZSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBGKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICB0aGlzLnNhbVdhc21Nb2R1bGUuSEVBUFU4LnNldCh1LCBlKTsKICB9Cn0KLyoqCiAqIEBsaWNlbnNlCiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTEMKICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAKICovCmNvbnN0IHh0ID0gU3ltYm9sKCJDb21saW5rLnByb3h5IiksIHllID0gU3ltYm9sKCJDb21saW5rLmVuZHBvaW50IiksIG1lID0gU3ltYm9sKCJDb21saW5rLnJlbGVhc2VQcm94eSIpLCBabiA9IFN5bWJvbCgiQ29tbGluay5maW5hbGl6ZXIiKSwgT24gPSBTeW1ib2woIkNvbWxpbmsudGhyb3duIiksIEZ0ID0gKHMpID0+IHR5cGVvZiBzID09ICJvYmplY3QiICYmIHMgIT09IG51bGwgfHwgdHlwZW9mIHMgPT0gImZ1bmN0aW9uIiwgdmUgPSB7CiAgY2FuSGFuZGxlOiAocykgPT4gRnQocykgJiYgc1t4dF0sCiAgc2VyaWFsaXplKHMpIHsKICAgIGNvbnN0IHsgcG9ydDE6IHUsIHBvcnQyOiBlIH0gPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTsKICAgIHJldHVybiBLbihzLCB1KSwgW2UsIFtlXV07CiAgfSwKICBkZXNlcmlhbGl6ZShzKSB7CiAgICByZXR1cm4gcy5zdGFydCgpLCBfZShzKTsKICB9Cn0sIGdlID0gewogIGNhbkhhbmRsZTogKHMpID0+IEZ0KHMpICYmIE9uIGluIHMsCiAgc2VyaWFsaXplKHsgdmFsdWU6IHMgfSkgewogICAgbGV0IHU7CiAgICByZXR1cm4gcyBpbnN0YW5jZW9mIEVycm9yID8gdSA9IHsKICAgICAgaXNFcnJvcjogITAsCiAgICAgIHZhbHVlOiB7CiAgICAgICAgbWVzc2FnZTogcy5tZXNzYWdlLAogICAgICAgIG5hbWU6IHMubmFtZSwKICAgICAgICBzdGFjazogcy5zdGFjawogICAgICB9CiAgICB9IDogdSA9IHsgaXNFcnJvcjogITEsIHZhbHVlOiBzIH0sIFt1LCBbXV07CiAgfSwKICBkZXNlcmlhbGl6ZShzKSB7CiAgICB0aHJvdyBzLmlzRXJyb3IgPyBPYmplY3QuYXNzaWduKG5ldyBFcnJvcihzLnZhbHVlLm1lc3NhZ2UpLCBzLnZhbHVlKSA6IHMudmFsdWU7CiAgfQp9LCBJdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKFsKICBbInByb3h5IiwgdmVdLAogIFsidGhyb3ciLCBnZV0KXSk7CmZ1bmN0aW9uIHdlKHMsIHUpIHsKICBmb3IgKGNvbnN0IGUgb2YgcykKICAgIGlmICh1ID09PSBlIHx8IGUgPT09ICIqIiB8fCBlIGluc3RhbmNlb2YgUmVnRXhwICYmIGUudGVzdCh1KSkKICAgICAgcmV0dXJuICEwOwogIHJldHVybiAhMTsKfQpmdW5jdGlvbiBLbihzLCB1ID0gZ2xvYmFsVGhpcywgZSA9IFsiKiJdKSB7CiAgdS5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgZnVuY3Rpb24gbShnKSB7CiAgICBpZiAoIWcgfHwgIWcuZGF0YSkKICAgICAgcmV0dXJuOwogICAgaWYgKCF3ZShlLCBnLm9yaWdpbikpIHsKICAgICAgY29uc29sZS53YXJuKGBJbnZhbGlkIG9yaWdpbiAnJHtnLm9yaWdpbn0nIGZvciBjb21saW5rIHByb3h5YCk7CiAgICAgIHJldHVybjsKICAgIH0KICAgIGNvbnN0IHsgaWQ6IEMsIHR5cGU6IEEsIHBhdGg6IE0gfSA9IE9iamVjdC5hc3NpZ24oeyBwYXRoOiBbXSB9LCBnLmRhdGEpLCBXID0gKGcuZGF0YS5hcmd1bWVudExpc3QgfHwgW10pLm1hcChLKTsKICAgIGxldCBFOwogICAgdHJ5IHsKICAgICAgY29uc3QgXyA9IE0uc2xpY2UoMCwgLTEpLnJlZHVjZSgoUCwgTCkgPT4gUFtMXSwgcyksIFIgPSBNLnJlZHVjZSgoUCwgTCkgPT4gUFtMXSwgcyk7CiAgICAgIHN3aXRjaCAoQSkgewogICAgICAgIGNhc2UgIkdFVCI6CiAgICAgICAgICBFID0gUjsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlNFVCI6CiAgICAgICAgICBfW00uc2xpY2UoLTEpWzBdXSA9IEsoZy5kYXRhLnZhbHVlKSwgRSA9ICEwOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiQVBQTFkiOgogICAgICAgICAgRSA9IFIuYXBwbHkoXywgVyk7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJDT05TVFJVQ1QiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCBQID0gbmV3IFIoLi4uVyk7CiAgICAgICAgICAgIEUgPSBNZShQKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkVORFBPSU5UIjoKICAgICAgICAgIHsKICAgICAgICAgICAgY29uc3QgeyBwb3J0MTogUCwgcG9ydDI6IEwgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgICAgICAgICBLbihzLCBMKSwgRSA9IFBlKFAsIFtQXSk7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJSRUxFQVNFIjoKICAgICAgICAgIEUgPSB2b2lkIDA7CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgcmV0dXJuOwogICAgICB9CiAgICB9IGNhdGNoIChfKSB7CiAgICAgIEUgPSB7IHZhbHVlOiBfLCBbT25dOiAwIH07CiAgICB9CiAgICBQcm9taXNlLnJlc29sdmUoRSkuY2F0Y2goKF8pID0+ICh7IHZhbHVlOiBfLCBbT25dOiAwIH0pKS50aGVuKChfKSA9PiB7CiAgICAgIGNvbnN0IFtSLCBQXSA9IGtuKF8pOwogICAgICB1LnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUiksIHsgaWQ6IEMgfSksIFApLCBBID09PSAiUkVMRUFTRSIgJiYgKHUucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIG0pLCBMdCh1KSwgWm4gaW4gcyAmJiB0eXBlb2Ygc1tabl0gPT0gImZ1bmN0aW9uIiAmJiBzW1puXSgpKTsKICAgIH0pLmNhdGNoKChfKSA9PiB7CiAgICAgIGNvbnN0IFtSLCBQXSA9IGtuKHsKICAgICAgICB2YWx1ZTogbmV3IFR5cGVFcnJvcigiVW5zZXJpYWxpemFibGUgcmV0dXJuIHZhbHVlIiksCiAgICAgICAgW09uXTogMAogICAgICB9KTsKICAgICAgdS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFIpLCB7IGlkOiBDIH0pLCBQKTsKICAgIH0pOwogIH0pLCB1LnN0YXJ0ICYmIHUuc3RhcnQoKTsKfQpmdW5jdGlvbiBBZShzKSB7CiAgcmV0dXJuIHMuY29uc3RydWN0b3IubmFtZSA9PT0gIk1lc3NhZ2VQb3J0IjsKfQpmdW5jdGlvbiBMdChzKSB7CiAgQWUocykgJiYgcy5jbG9zZSgpOwp9CmZ1bmN0aW9uIF9lKHMsIHUpIHsKICByZXR1cm4gSm4ocywgW10sIHUpOwp9CmZ1bmN0aW9uIFduKHMpIHsKICBpZiAocykKICAgIHRocm93IG5ldyBFcnJvcigiUHJveHkgaGFzIGJlZW4gcmVsZWFzZWQgYW5kIGlzIG5vdCB1c2VhYmxlIik7Cn0KZnVuY3Rpb24ganQocykgewogIHJldHVybiBhbihzLCB7CiAgICB0eXBlOiAiUkVMRUFTRSIKICB9KS50aGVuKCgpID0+IHsKICAgIEx0KHMpOwogIH0pOwp9CmNvbnN0IGJuID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCksIFNuID0gIkZpbmFsaXphdGlvblJlZ2lzdHJ5IiBpbiBnbG9iYWxUaGlzICYmIG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgocykgPT4gewogIGNvbnN0IHUgPSAoYm4uZ2V0KHMpIHx8IDApIC0gMTsKICBibi5zZXQocywgdSksIHUgPT09IDAgJiYganQocyk7Cn0pOwpmdW5jdGlvbiBDZShzLCB1KSB7CiAgY29uc3QgZSA9IChibi5nZXQodSkgfHwgMCkgKyAxOwogIGJuLnNldCh1LCBlKSwgU24gJiYgU24ucmVnaXN0ZXIocywgdSwgcyk7Cn0KZnVuY3Rpb24gRWUocykgewogIFNuICYmIFNuLnVucmVnaXN0ZXIocyk7Cn0KZnVuY3Rpb24gSm4ocywgdSA9IFtdLCBlID0gZnVuY3Rpb24oKSB7Cn0pIHsKICBsZXQgbSA9ICExOwogIGNvbnN0IGcgPSBuZXcgUHJveHkoZSwgewogICAgZ2V0KEMsIEEpIHsKICAgICAgaWYgKFduKG0pLCBBID09PSBtZSkKICAgICAgICByZXR1cm4gKCkgPT4gewogICAgICAgICAgRWUoZyksIGp0KHMpLCBtID0gITA7CiAgICAgICAgfTsKICAgICAgaWYgKEEgPT09ICJ0aGVuIikgewogICAgICAgIGlmICh1Lmxlbmd0aCA9PT0gMCkKICAgICAgICAgIHJldHVybiB7IHRoZW46ICgpID0+IGcgfTsKICAgICAgICBjb25zdCBNID0gYW4ocywgewogICAgICAgICAgdHlwZTogIkdFVCIsCiAgICAgICAgICBwYXRoOiB1Lm1hcCgoVykgPT4gVy50b1N0cmluZygpKQogICAgICAgIH0pLnRoZW4oSyk7CiAgICAgICAgcmV0dXJuIE0udGhlbi5iaW5kKE0pOwogICAgICB9CiAgICAgIHJldHVybiBKbihzLCBbLi4udSwgQV0pOwogICAgfSwKICAgIHNldChDLCBBLCBNKSB7CiAgICAgIFduKG0pOwogICAgICBjb25zdCBbVywgRV0gPSBrbihNKTsKICAgICAgcmV0dXJuIGFuKHMsIHsKICAgICAgICB0eXBlOiAiU0VUIiwKICAgICAgICBwYXRoOiBbLi4udSwgQV0ubWFwKChfKSA9PiBfLnRvU3RyaW5nKCkpLAogICAgICAgIHZhbHVlOiBXCiAgICAgIH0sIEUpLnRoZW4oSyk7CiAgICB9LAogICAgYXBwbHkoQywgQSwgTSkgewogICAgICBXbihtKTsKICAgICAgY29uc3QgVyA9IHVbdS5sZW5ndGggLSAxXTsKICAgICAgaWYgKFcgPT09IHllKQogICAgICAgIHJldHVybiBhbihzLCB7CiAgICAgICAgICB0eXBlOiAiRU5EUE9JTlQiCiAgICAgICAgfSkudGhlbihLKTsKICAgICAgaWYgKFcgPT09ICJiaW5kIikKICAgICAgICByZXR1cm4gSm4ocywgdS5zbGljZSgwLCAtMSkpOwogICAgICBjb25zdCBbRSwgX10gPSBSdChNKTsKICAgICAgcmV0dXJuIGFuKHMsIHsKICAgICAgICB0eXBlOiAiQVBQTFkiLAogICAgICAgIHBhdGg6IHUubWFwKChSKSA9PiBSLnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogRQogICAgICB9LCBfKS50aGVuKEspOwogICAgfSwKICAgIGNvbnN0cnVjdChDLCBBKSB7CiAgICAgIFduKG0pOwogICAgICBjb25zdCBbTSwgV10gPSBSdChBKTsKICAgICAgcmV0dXJuIGFuKHMsIHsKICAgICAgICB0eXBlOiAiQ09OU1RSVUNUIiwKICAgICAgICBwYXRoOiB1Lm1hcCgoRSkgPT4gRS50b1N0cmluZygpKSwKICAgICAgICBhcmd1bWVudExpc3Q6IE0KICAgICAgfSwgVykudGhlbihLKTsKICAgIH0KICB9KTsKICByZXR1cm4gQ2UoZywgcyksIGc7Cn0KZnVuY3Rpb24gVGUocykgewogIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBzKTsKfQpmdW5jdGlvbiBSdChzKSB7CiAgY29uc3QgdSA9IHMubWFwKGtuKTsKICByZXR1cm4gW3UubWFwKChlKSA9PiBlWzBdKSwgVGUodS5tYXAoKGUpID0+IGVbMV0pKV07Cn0KY29uc3QgTnQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTsKZnVuY3Rpb24gUGUocywgdSkgewogIHJldHVybiBOdC5zZXQocywgdSksIHM7Cn0KZnVuY3Rpb24gTWUocykgewogIHJldHVybiBPYmplY3QuYXNzaWduKHMsIHsgW3h0XTogITAgfSk7Cn0KZnVuY3Rpb24ga24ocykgewogIGZvciAoY29uc3QgW3UsIGVdIG9mIEl0KQogICAgaWYgKGUuY2FuSGFuZGxlKHMpKSB7CiAgICAgIGNvbnN0IFttLCBnXSA9IGUuc2VyaWFsaXplKHMpOwogICAgICByZXR1cm4gWwogICAgICAgIHsKICAgICAgICAgIHR5cGU6ICJIQU5ETEVSIiwKICAgICAgICAgIG5hbWU6IHUsCiAgICAgICAgICB2YWx1ZTogbQogICAgICAgIH0sCiAgICAgICAgZwogICAgICBdOwogICAgfQogIHJldHVybiBbCiAgICB7CiAgICAgIHR5cGU6ICJSQVciLAogICAgICB2YWx1ZTogcwogICAgfSwKICAgIE50LmdldChzKSB8fCBbXQogIF07Cn0KZnVuY3Rpb24gSyhzKSB7CiAgc3dpdGNoIChzLnR5cGUpIHsKICAgIGNhc2UgIkhBTkRMRVIiOgogICAgICByZXR1cm4gSXQuZ2V0KHMubmFtZSkuZGVzZXJpYWxpemUocy52YWx1ZSk7CiAgICBjYXNlICJSQVciOgogICAgICByZXR1cm4gcy52YWx1ZTsKICB9Cn0KZnVuY3Rpb24gYW4ocywgdSwgZSkgewogIHJldHVybiBuZXcgUHJvbWlzZSgobSkgPT4gewogICAgY29uc3QgZyA9IFdlKCk7CiAgICBzLmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBDKEEpIHsKICAgICAgIUEuZGF0YSB8fCAhQS5kYXRhLmlkIHx8IEEuZGF0YS5pZCAhPT0gZyB8fCAocy5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgQyksIG0oQS5kYXRhKSk7CiAgICB9KSwgcy5zdGFydCAmJiBzLnN0YXJ0KCksIHMucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbih7IGlkOiBnIH0sIHUpLCBlKTsKICB9KTsKfQpmdW5jdGlvbiBXZSgpIHsKICByZXR1cm4gbmV3IEFycmF5KDQpLmZpbGwoMCkubWFwKCgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKS50b1N0cmluZygxNikpLmpvaW4oIi0iKTsKfQpjbGFzcyBPZSBleHRlbmRzIHBlIHsKICBwYXJzZVJhd0RhdGEodSkgewogICAgY29uc3QgeyBicmlnaHRuZXNzOiBlLCBob3RzcG90czogbSwgc2hhcnBuZXNzOiBnIH0gPSB1LnBhcmFtcywgQyA9IHsKICAgICAgY29uZmlkZW5jZTogdS5jb25maWRlbmNlIC8gMWUzLAogICAgICB0b3BMZWZ0OiB7CiAgICAgICAgeDogdS54MCwKICAgICAgICB5OiB1LnkwCiAgICAgIH0sCiAgICAgIHRvcFJpZ2h0OiB7CiAgICAgICAgeDogdS54MSwKICAgICAgICB5OiB1LnkxCiAgICAgIH0sCiAgICAgIGJvdHRvbVJpZ2h0OiB7CiAgICAgICAgeDogdS54MiwKICAgICAgICB5OiB1LnkyCiAgICAgIH0sCiAgICAgIGJvdHRvbUxlZnQ6IHsKICAgICAgICB4OiB1LngzLAogICAgICAgIHk6IHUueTMKICAgICAgfSwKICAgICAgYnJpZ2h0bmVzczogZSAvIDFlMywKICAgICAgaG90c3BvdHM6IG0gLyAxZTMsCiAgICAgIHNoYXJwbmVzczogZyAvIDFlMwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIC4uLkMsCiAgICAgIHNtYWxsZXN0RWRnZTogZGUoQykKICAgIH07CiAgfQogIGFzeW5jIGRldGVjdCh1LCBlKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEYoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIGNvbnN0IG0gPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCksIGcgPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICB0aGlzLndyaXRlRGF0YVRvTWVtb3J5KHUsIG0pLCB0aGlzLnNhbVdhc21Nb2R1bGUuY29udmVydFRvU2FtQ29sb3JJbWFnZSgKICAgICAgZS53aWR0aCwKICAgICAgZS5oZWlnaHQsCiAgICAgIG0sCiAgICAgIGZlLlJHQkEsCiAgICAgIGcKICAgICk7CiAgICBjb25zdCBDID0gdGhpcy5zYW1XYXNtTW9kdWxlLmRldGVjdERvY3VtZW50V2l0aEltYWdlUGFyYW1ldGVycygKICAgICAgZS53aWR0aCwKICAgICAgZS5oZWlnaHQsCiAgICAgIGcsCiAgICAgIDAsCiAgICAgIC8vIHBhcmFtV2lkdGggc2hvdWxkIGJlIDAgKGRlZmF1bHQgdmFsdWUpCiAgICAgIDAsCiAgICAgIC8vIHBhcmFtSGVpZ2h0IHNob3VsZCBiZSAwIChkZWZhdWx0IHZhbHVlKQogICAgICAwCiAgICAgIC8vIGRvY3VtZW50RGV0ZWN0aW9uT3B0aW9ucyAtIHNwZWVkIG9wdGlvbiAtIHNldCBhcyAic3RhbmRhcmQgZnVsbCBtZXRob2QiCiAgICApOwogICAgcmV0dXJuIHRoaXMucmVsZWFzZU1lbW9yeShtKSwgdGhpcy5yZWxlYXNlTWVtb3J5KGcpLCB0aGlzLnBhcnNlUmF3RGF0YShDKTsKICB9Cn0KS24oT2UpOwo=", qa = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);" + atob(Es)], { type: "text/javascript;charset=utf-8" });
function Sl(t) {
  let o;
  try {
    if (o = qa && (window.URL || window.webkitURL).createObjectURL(qa), !o)
      throw "";
    const e = new Worker(o, {
      type: "module",
      name: t == null ? void 0 : t.name
    });
    return e.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(o);
    }), e;
  } catch {
    return new Worker(
      "data:application/javascript;base64," + Es,
      {
        type: "module",
        name: t == null ? void 0 : t.name
      }
    );
  }
}
const Ei = class Ei extends ll {
  constructor() {
    super(...arguments);
    D(this, "detector");
    D(this, "className", "DocumentController");
    D(this, "fallbackInstruction", Je.DOCUMENT_NOT_PRESENT);
    D(this, "getInstructionCode", (e, n) => {
      var r;
      if (this.isInCandidateSelection)
        return Je.CANDIDATE_SELECTION;
      if ((r = this.lastImage) != null && r.isValid && n)
        return Je.CANDIDATE_SELECTION;
      if (this.lastImage && n)
        return this.lastImage.instructionCode;
      const [i] = this.getInstructionCodesForValidators(e);
      return i ?? this.fallbackInstruction;
    });
    D(this, "getInstructionCodesForValidators", (e) => {
      const n = [];
      return Object.entries(e).forEach(([i, r]) => {
        !r && n.push(Wx[i]);
      }), n;
    });
    D(this, "transformSmallestEdgeRelativeToDetectionFrameWidth", (e, n) => {
      const i = mI(e), r = i / n.width, a = { ...e };
      return a.smallestEdge = r, a;
    });
  }
  static async init() {
    const e = new Sl(), n = Os(e), i = new Ei(), r = await new n();
    this._instance = i, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  restart() {
    super.restart(), Qa($e.INSTRUCTION_CHANGED, this.fallbackInstruction, fI);
  }
  validateDetectedObject(e, n) {
    const { brightnessHighThreshold: i, brightnessLowThreshold: r, confidenceThreshold: a, hotspotsScoreThreshold: s, outOfBoundsThreshold: g, sharpnessThreshold: I, sizeSmallThreshold: C } = this.getThresholds(), u = e.confidence > a, p = e.sharpness > I, A = e.brightness > r, v = e.brightness < i, B = e.hotspots < s, K = Bl(g, e, n), G = e.smallestEdge > C, w = {};
    return w.isPresent = u, w.isSharp = p, w.isNotDim = A, w.isNotBright = v, w.noHotspots = B, w.isNotOutOfBounds = K, w.isNotSmall = G, w;
  }
  async processImage(e) {
    var B;
    const n = {};
    n.width = e.width, n.height = e.height;
    const i = n, r = Gr(i), a = rI(e, r), s = aI(a), g = {};
    g.width = a.width, g.height = a.height;
    const I = g;
    let C = await this.detector.detect(s, I);
    C = $I(i, C), C = this.transformSmallestEdgeRelativeToDetectionFrameWidth(C, I);
    const u = this.validateDetectedObject(C, i), p = this.isDetectionValid(u), A = this.getInstructionCode(u, p);
    if (u.isPresent && this.collectImagesForDuplicateDetection(s), this.isInCandidateSelection) {
      if (this.bestImage && p && this.isNewImageBetter(this.bestImage.detection, C)) {
        const K = { image: e, detection: An(C) };
        this.bestImage = K, this.candidateSelectionImages.push(K);
      }
    } else if ((B = this.lastImage) != null && B.isValid && p) {
      const K = { image: e, detection: An(C) }, G = {};
      G.image = this.lastImage.image, G.detection = this.lastImage.detection;
      const w = G;
      this.isNewImageBetter(w.detection, K.detection) ? this.bestImage = K : this.bestImage = w, this.candidateSelectionImages.push(w, K), this.isInCandidateSelection = !0;
    } else
      p ? this.lastImage = { instructionCode: A, isValid: !0, image: e, detection: An(C) } : this.lastImage = { instructionCode: A, isValid: !1, image: e, detection: An(C) };
    const v = { detectedDocument: An(C), instructionCode: A, isInCandidateSelection: this.isInCandidateSelection, invalidValidators: this.getInstructionCodesForValidators(u) };
    return this.detectionRecord.push(v.detectedDocument), Qa($e.INSTRUCTION_CHANGED, A), TI($e.DETECTED_DOCUMENT_CHANGED, v.detectedDocument, this.getThresholds().confidenceThreshold), v;
  }
};
D(Ei, "_instance");
let qo = Ei;
const Gl = (t, o) => {
  const { handleError: e } = Ui(), [n, i] = Le();
  Ae(() => {
    (async () => {
      const s = await qo.getInstance();
      try {
        const g = {};
        g.wasmDirectoryPath = o, g.thresholds = t, await s.init(g);
      } catch (g) {
        if (g instanceof Error) {
          e(te.fromError(g));
          return;
        }
      }
      i(s);
    })();
  }, [e, t, o]);
  const r = {};
  return r.controller = n, r;
};
var St = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ps = {}, e0 = {}, Zl = kl;
function kl(t, o) {
  for (var e = new Array(arguments.length - 1), n = 0, i = 2, r = !0; i < arguments.length; )
    e[n++] = arguments[i++];
  return new Promise(function(a, s) {
    e[n] = function(g) {
      if (r)
        if (r = !1, g)
          s(g);
        else {
          for (var I = new Array(arguments.length - 1), C = 0; C < I.length; )
            I[C++] = arguments[C];
          a.apply(null, I);
        }
    };
    try {
      t.apply(o || null, e);
    } catch (g) {
      r && (r = !1, s(g));
    }
  });
}
var Ls = {};
(function(t) {
  var o = t;
  o.length = function(a) {
    var s = a.length;
    if (!s)
      return 0;
    for (var g = 0; --s % 4 > 1 && a.charAt(s) === "="; )
      ++g;
    return Math.ceil(a.length * 3) / 4 - g;
  };
  for (var e = new Array(64), n = new Array(123), i = 0; i < 64; )
    n[e[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
  o.encode = function(a, s, g) {
    for (var I = null, C = [], u = 0, p = 0, A; s < g; ) {
      var v = a[s++];
      switch (p) {
        case 0:
          C[u++] = e[v >> 2], A = (v & 3) << 4, p = 1;
          break;
        case 1:
          C[u++] = e[A | v >> 4], A = (v & 15) << 2, p = 2;
          break;
        case 2:
          C[u++] = e[A | v >> 6], C[u++] = e[v & 63], p = 0;
          break;
      }
      u > 8191 && ((I || (I = [])).push(String.fromCharCode.apply(String, C)), u = 0);
    }
    return p && (C[u++] = e[A], C[u++] = 61, p === 1 && (C[u++] = 61)), I ? (u && I.push(String.fromCharCode.apply(String, C.slice(0, u))), I.join("")) : String.fromCharCode.apply(String, C.slice(0, u));
  };
  var r = "invalid encoding";
  o.decode = function(a, s, g) {
    for (var I = g, C = 0, u, p = 0; p < a.length; ) {
      var A = a.charCodeAt(p++);
      if (A === 61 && C > 1)
        break;
      if ((A = n[A]) === void 0)
        throw Error(r);
      switch (C) {
        case 0:
          u = A, C = 1;
          break;
        case 1:
          s[g++] = u << 2 | (A & 48) >> 4, u = A, C = 2;
          break;
        case 2:
          s[g++] = (u & 15) << 4 | (A & 60) >> 2, u = A, C = 3;
          break;
        case 3:
          s[g++] = (u & 3) << 6 | A, C = 0;
          break;
      }
    }
    if (C === 1)
      throw Error(r);
    return g - I;
  }, o.test = function(a) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a);
  };
})(Ls);
var Hl = Ji;
function Ji() {
  this._listeners = {};
}
Ji.prototype.on = function(t, o, e) {
  return (this._listeners[t] || (this._listeners[t] = [])).push({
    fn: o,
    ctx: e || this
  }), this;
};
Ji.prototype.off = function(t, o) {
  if (t === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[t] = [];
  else
    for (var e = this._listeners[t], n = 0; n < e.length; )
      e[n].fn === o ? e.splice(n, 1) : ++n;
  return this;
};
Ji.prototype.emit = function(t) {
  var o = this._listeners[t];
  if (o) {
    for (var e = [], n = 1; n < arguments.length; )
      e.push(arguments[n++]);
    for (n = 0; n < o.length; )
      o[n].fn.apply(o[n++].ctx, e);
  }
  return this;
};
var Kl = t0(t0);
function t0(t) {
  return typeof Float32Array < "u" ? function() {
    var o = new Float32Array([-0]), e = new Uint8Array(o.buffer), n = e[3] === 128;
    function i(g, I, C) {
      o[0] = g, I[C] = e[0], I[C + 1] = e[1], I[C + 2] = e[2], I[C + 3] = e[3];
    }
    function r(g, I, C) {
      o[0] = g, I[C] = e[3], I[C + 1] = e[2], I[C + 2] = e[1], I[C + 3] = e[0];
    }
    t.writeFloatLE = n ? i : r, t.writeFloatBE = n ? r : i;
    function a(g, I) {
      return e[0] = g[I], e[1] = g[I + 1], e[2] = g[I + 2], e[3] = g[I + 3], o[0];
    }
    function s(g, I) {
      return e[3] = g[I], e[2] = g[I + 1], e[1] = g[I + 2], e[0] = g[I + 3], o[0];
    }
    t.readFloatLE = n ? a : s, t.readFloatBE = n ? s : a;
  }() : function() {
    function o(n, i, r, a) {
      var s = i < 0 ? 1 : 0;
      if (s && (i = -i), i === 0)
        n(1 / i > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), r, a);
      else if (isNaN(i))
        n(2143289344, r, a);
      else if (i > 34028234663852886e22)
        n((s << 31 | 2139095040) >>> 0, r, a);
      else if (i < 11754943508222875e-54)
        n((s << 31 | Math.round(i / 1401298464324817e-60)) >>> 0, r, a);
      else {
        var g = Math.floor(Math.log(i) / Math.LN2), I = Math.round(i * Math.pow(2, -g) * 8388608) & 8388607;
        n((s << 31 | g + 127 << 23 | I) >>> 0, r, a);
      }
    }
    t.writeFloatLE = o.bind(null, n0), t.writeFloatBE = o.bind(null, i0);
    function e(n, i, r) {
      var a = n(i, r), s = (a >> 31) * 2 + 1, g = a >>> 23 & 255, I = a & 8388607;
      return g === 255 ? I ? NaN : s * (1 / 0) : g === 0 ? s * 1401298464324817e-60 * I : s * Math.pow(2, g - 150) * (I + 8388608);
    }
    t.readFloatLE = e.bind(null, o0), t.readFloatBE = e.bind(null, r0);
  }(), typeof Float64Array < "u" ? function() {
    var o = new Float64Array([-0]), e = new Uint8Array(o.buffer), n = e[7] === 128;
    function i(g, I, C) {
      o[0] = g, I[C] = e[0], I[C + 1] = e[1], I[C + 2] = e[2], I[C + 3] = e[3], I[C + 4] = e[4], I[C + 5] = e[5], I[C + 6] = e[6], I[C + 7] = e[7];
    }
    function r(g, I, C) {
      o[0] = g, I[C] = e[7], I[C + 1] = e[6], I[C + 2] = e[5], I[C + 3] = e[4], I[C + 4] = e[3], I[C + 5] = e[2], I[C + 6] = e[1], I[C + 7] = e[0];
    }
    t.writeDoubleLE = n ? i : r, t.writeDoubleBE = n ? r : i;
    function a(g, I) {
      return e[0] = g[I], e[1] = g[I + 1], e[2] = g[I + 2], e[3] = g[I + 3], e[4] = g[I + 4], e[5] = g[I + 5], e[6] = g[I + 6], e[7] = g[I + 7], o[0];
    }
    function s(g, I) {
      return e[7] = g[I], e[6] = g[I + 1], e[5] = g[I + 2], e[4] = g[I + 3], e[3] = g[I + 4], e[2] = g[I + 5], e[1] = g[I + 6], e[0] = g[I + 7], o[0];
    }
    t.readDoubleLE = n ? a : s, t.readDoubleBE = n ? s : a;
  }() : function() {
    function o(n, i, r, a, s, g) {
      var I = a < 0 ? 1 : 0;
      if (I && (a = -a), a === 0)
        n(0, s, g + i), n(1 / a > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), s, g + r);
      else if (isNaN(a))
        n(0, s, g + i), n(2146959360, s, g + r);
      else if (a > 17976931348623157e292)
        n(0, s, g + i), n((I << 31 | 2146435072) >>> 0, s, g + r);
      else {
        var C;
        if (a < 22250738585072014e-324)
          C = a / 5e-324, n(C >>> 0, s, g + i), n((I << 31 | C / 4294967296) >>> 0, s, g + r);
        else {
          var u = Math.floor(Math.log(a) / Math.LN2);
          u === 1024 && (u = 1023), C = a * Math.pow(2, -u), n(C * 4503599627370496 >>> 0, s, g + i), n((I << 31 | u + 1023 << 20 | C * 1048576 & 1048575) >>> 0, s, g + r);
        }
      }
    }
    t.writeDoubleLE = o.bind(null, n0, 0, 4), t.writeDoubleBE = o.bind(null, i0, 4, 0);
    function e(n, i, r, a, s) {
      var g = n(a, s + i), I = n(a, s + r), C = (I >> 31) * 2 + 1, u = I >>> 20 & 2047, p = 4294967296 * (I & 1048575) + g;
      return u === 2047 ? p ? NaN : C * (1 / 0) : u === 0 ? C * 5e-324 * p : C * Math.pow(2, u - 1075) * (p + 4503599627370496);
    }
    t.readDoubleLE = e.bind(null, o0, 0, 4), t.readDoubleBE = e.bind(null, r0, 4, 0);
  }(), t;
}
function n0(t, o, e) {
  o[e] = t & 255, o[e + 1] = t >>> 8 & 255, o[e + 2] = t >>> 16 & 255, o[e + 3] = t >>> 24;
}
function i0(t, o, e) {
  o[e] = t >>> 24, o[e + 1] = t >>> 16 & 255, o[e + 2] = t >>> 8 & 255, o[e + 3] = t & 255;
}
function o0(t, o) {
  return (t[o] | t[o + 1] << 8 | t[o + 2] << 16 | t[o + 3] << 24) >>> 0;
}
function r0(t, o) {
  return (t[o] << 24 | t[o + 1] << 16 | t[o + 2] << 8 | t[o + 3]) >>> 0;
}
function a0(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Wl = Ol;
function Ol(t) {
  try {
    if (typeof a0 != "function")
      return null;
    var o = a0(t);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var Ys = {};
(function(t) {
  var o = t;
  o.length = function(e) {
    for (var n = 0, i = 0, r = 0; r < e.length; ++r)
      i = e.charCodeAt(r), i < 128 ? n += 1 : i < 2048 ? n += 2 : (i & 64512) === 55296 && (e.charCodeAt(r + 1) & 64512) === 56320 ? (++r, n += 4) : n += 3;
    return n;
  }, o.read = function(e, n, i) {
    var r = i - n;
    if (r < 1)
      return "";
    for (var a = null, s = [], g = 0, I; n < i; )
      I = e[n++], I < 128 ? s[g++] = I : I > 191 && I < 224 ? s[g++] = (I & 31) << 6 | e[n++] & 63 : I > 239 && I < 365 ? (I = ((I & 7) << 18 | (e[n++] & 63) << 12 | (e[n++] & 63) << 6 | e[n++] & 63) - 65536, s[g++] = 55296 + (I >> 10), s[g++] = 56320 + (I & 1023)) : s[g++] = (I & 15) << 12 | (e[n++] & 63) << 6 | e[n++] & 63, g > 8191 && ((a || (a = [])).push(String.fromCharCode.apply(String, s)), g = 0);
    return a ? (g && a.push(String.fromCharCode.apply(String, s.slice(0, g))), a.join("")) : String.fromCharCode.apply(String, s.slice(0, g));
  }, o.write = function(e, n, i) {
    for (var r = i, a, s, g = 0; g < e.length; ++g)
      a = e.charCodeAt(g), a < 128 ? n[i++] = a : a < 2048 ? (n[i++] = a >> 6 | 192, n[i++] = a & 63 | 128) : (a & 64512) === 55296 && ((s = e.charCodeAt(g + 1)) & 64512) === 56320 ? (a = 65536 + ((a & 1023) << 10) + (s & 1023), ++g, n[i++] = a >> 18 | 240, n[i++] = a >> 12 & 63 | 128, n[i++] = a >> 6 & 63 | 128, n[i++] = a & 63 | 128) : (n[i++] = a >> 12 | 224, n[i++] = a >> 6 & 63 | 128, n[i++] = a & 63 | 128);
    return i - r;
  };
})(Ys);
var Rl = Vl;
function Vl(t, o, e) {
  var n = e || 8192, i = n >>> 1, r = null, a = n;
  return function(s) {
    if (s < 1 || s > i)
      return t(s);
    a + s > n && (r = t(n), a = 0);
    var g = o.call(r, a, a += s);
    return a & 7 && (a = (a | 7) + 1), g;
  };
}
var vo, s0;
function El() {
  if (s0)
    return vo;
  s0 = 1, vo = o;
  var t = Lt();
  function o(r, a) {
    this.lo = r >>> 0, this.hi = a >>> 0;
  }
  var e = o.zero = new o(0, 0);
  e.toNumber = function() {
    return 0;
  }, e.zzEncode = e.zzDecode = function() {
    return this;
  }, e.length = function() {
    return 1;
  };
  var n = o.zeroHash = "\0\0\0\0\0\0\0\0";
  o.fromNumber = function(r) {
    if (r === 0)
      return e;
    var a = r < 0;
    a && (r = -r);
    var s = r >>> 0, g = (r - s) / 4294967296 >>> 0;
    return a && (g = ~g >>> 0, s = ~s >>> 0, ++s > 4294967295 && (s = 0, ++g > 4294967295 && (g = 0))), new o(s, g);
  }, o.from = function(r) {
    if (typeof r == "number")
      return o.fromNumber(r);
    if (t.isString(r))
      if (t.Long)
        r = t.Long.fromString(r);
      else
        return o.fromNumber(parseInt(r, 10));
    return r.low || r.high ? new o(r.low >>> 0, r.high >>> 0) : e;
  }, o.prototype.toNumber = function(r) {
    if (!r && this.hi >>> 31) {
      var a = ~this.lo + 1 >>> 0, s = ~this.hi >>> 0;
      return a || (s = s + 1 >>> 0), -(a + s * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, o.prototype.toLong = function(r) {
    return t.Long ? new t.Long(this.lo | 0, this.hi | 0, !!r) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!r };
  };
  var i = String.prototype.charCodeAt;
  return o.fromHash = function(r) {
    return r === n ? e : new o(
      (i.call(r, 0) | i.call(r, 1) << 8 | i.call(r, 2) << 16 | i.call(r, 3) << 24) >>> 0,
      (i.call(r, 4) | i.call(r, 5) << 8 | i.call(r, 6) << 16 | i.call(r, 7) << 24) >>> 0
    );
  }, o.prototype.toHash = function() {
    return String.fromCharCode(
      this.lo & 255,
      this.lo >>> 8 & 255,
      this.lo >>> 16 & 255,
      this.lo >>> 24,
      this.hi & 255,
      this.hi >>> 8 & 255,
      this.hi >>> 16 & 255,
      this.hi >>> 24
    );
  }, o.prototype.zzEncode = function() {
    var r = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ r) >>> 0, this.lo = (this.lo << 1 ^ r) >>> 0, this;
  }, o.prototype.zzDecode = function() {
    var r = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ r) >>> 0, this.hi = (this.hi >>> 1 ^ r) >>> 0, this;
  }, o.prototype.length = function() {
    var r = this.lo, a = (this.lo >>> 28 | this.hi << 4) >>> 0, s = this.hi >>> 24;
    return s === 0 ? a === 0 ? r < 16384 ? r < 128 ? 1 : 2 : r < 2097152 ? 3 : 4 : a < 16384 ? a < 128 ? 5 : 6 : a < 2097152 ? 7 : 8 : s < 128 ? 9 : 10;
  }, vo;
}
var g0;
function Lt() {
  return g0 || (g0 = 1, function(t) {
    var o = t;
    o.asPromise = Zl, o.base64 = Ls, o.EventEmitter = Hl, o.float = Kl, o.inquire = Wl, o.utf8 = Ys, o.pool = Rl, o.LongBits = El(), o.isNode = !!(typeof St < "u" && St && St.process && St.process.versions && St.process.versions.node), o.global = o.isNode && St || typeof window < "u" && window || typeof self < "u" && self || St, o.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), o.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), o.isInteger = Number.isInteger || /* istanbul ignore next */
    function(i) {
      return typeof i == "number" && isFinite(i) && Math.floor(i) === i;
    }, o.isString = function(i) {
      return typeof i == "string" || i instanceof String;
    }, o.isObject = function(i) {
      return i && typeof i == "object";
    }, o.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    o.isSet = function(i, r) {
      var a = i[r];
      return a != null && i.hasOwnProperty(r) ? typeof a != "object" || (Array.isArray(a) ? a.length : Object.keys(a).length) > 0 : !1;
    }, o.Buffer = function() {
      try {
        var i = o.inquire("buffer").Buffer;
        return i.prototype.utf8Write ? i : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), o._Buffer_from = null, o._Buffer_allocUnsafe = null, o.newBuffer = function(i) {
      return typeof i == "number" ? o.Buffer ? o._Buffer_allocUnsafe(i) : new o.Array(i) : o.Buffer ? o._Buffer_from(i) : typeof Uint8Array > "u" ? i : new Uint8Array(i);
    }, o.Array = typeof Uint8Array < "u" ? Uint8Array : Array, o.Long = /* istanbul ignore next */
    o.global.dcodeIO && /* istanbul ignore next */
    o.global.dcodeIO.Long || /* istanbul ignore next */
    o.global.Long || o.inquire("long"), o.key2Re = /^true|false|0|1$/, o.key32Re = /^-?(?:0|[1-9][0-9]*)$/, o.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, o.longToHash = function(i) {
      return i ? o.LongBits.from(i).toHash() : o.LongBits.zeroHash;
    }, o.longFromHash = function(i, r) {
      var a = o.LongBits.fromHash(i);
      return o.Long ? o.Long.fromBits(a.lo, a.hi, r) : a.toNumber(!!r);
    };
    function e(i, r, a) {
      for (var s = Object.keys(r), g = 0; g < s.length; ++g)
        (i[s[g]] === void 0 || !a) && (i[s[g]] = r[s[g]]);
      return i;
    }
    o.merge = e, o.lcFirst = function(i) {
      return i.charAt(0).toLowerCase() + i.substring(1);
    };
    function n(i) {
      function r(a, s) {
        if (!(this instanceof r))
          return new r(a, s);
        Object.defineProperty(this, "message", { get: function() {
          return a;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, r) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), s && e(this, s);
      }
      return r.prototype = Object.create(Error.prototype, {
        constructor: {
          value: r,
          writable: !0,
          enumerable: !1,
          configurable: !0
        },
        name: {
          get: function() {
            return i;
          },
          set: void 0,
          enumerable: !1,
          // configurable: false would accurately preserve the behavior of
          // the original, but I'm guessing that was not intentional.
          // For an actual error subclass, this property would
          // be configurable.
          configurable: !0
        },
        toString: {
          value: function() {
            return this.name + ": " + this.message;
          },
          writable: !0,
          enumerable: !1,
          configurable: !0
        }
      }), r;
    }
    o.newError = n, o.ProtocolError = n("ProtocolError"), o.oneOfGetter = function(i) {
      for (var r = {}, a = 0; a < i.length; ++a)
        r[i[a]] = 1;
      return function() {
        for (var s = Object.keys(this), g = s.length - 1; g > -1; --g)
          if (r[s[g]] === 1 && this[s[g]] !== void 0 && this[s[g]] !== null)
            return s[g];
      };
    }, o.oneOfSetter = function(i) {
      return function(r) {
        for (var a = 0; a < i.length; ++a)
          i[a] !== r && delete this[i[a]];
      };
    }, o.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, o._configure = function() {
      var i = o.Buffer;
      if (!i) {
        o._Buffer_from = o._Buffer_allocUnsafe = null;
        return;
      }
      o._Buffer_from = i.from !== Uint8Array.from && i.from || /* istanbul ignore next */
      function(r, a) {
        return new i(r, a);
      }, o._Buffer_allocUnsafe = i.allocUnsafe || /* istanbul ignore next */
      function(r) {
        return new i(r);
      };
    };
  }(e0)), e0;
}
var Ts = M, Ye = Lt(), er, Qi = Ye.LongBits, c0 = Ye.base64, x0 = Ye.utf8;
function Yn(t, o, e) {
  this.fn = t, this.len = o, this.next = void 0, this.val = e;
}
function Zr() {
}
function Pl(t) {
  this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states;
}
function M() {
  this.len = 0, this.head = new Yn(Zr, 0, 0), this.tail = this.head, this.states = null;
}
var Ns = function() {
  return Ye.Buffer ? function() {
    return (M.create = function() {
      return new er();
    })();
  } : function() {
    return new M();
  };
};
M.create = Ns();
M.alloc = function(t) {
  return new Ye.Array(t);
};
Ye.Array !== Array && (M.alloc = Ye.pool(M.alloc, Ye.Array.prototype.subarray));
M.prototype._push = function(t, o, e) {
  return this.tail = this.tail.next = new Yn(t, o, e), this.len += o, this;
};
function kr(t, o, e) {
  o[e] = t & 255;
}
function Ll(t, o, e) {
  for (; t > 127; )
    o[e++] = t & 127 | 128, t >>>= 7;
  o[e] = t;
}
function Hr(t, o) {
  this.len = t, this.next = void 0, this.val = o;
}
Hr.prototype = Object.create(Yn.prototype);
Hr.prototype.fn = Ll;
M.prototype.uint32 = function(t) {
  return this.len += (this.tail = this.tail.next = new Hr(
    (t = t >>> 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5,
    t
  )).len, this;
};
M.prototype.int32 = function(t) {
  return t < 0 ? this._push(Kr, 10, Qi.fromNumber(t)) : this.uint32(t);
};
M.prototype.sint32 = function(t) {
  return this.uint32((t << 1 ^ t >> 31) >>> 0);
};
function Kr(t, o, e) {
  for (; t.hi; )
    o[e++] = t.lo & 127 | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
  for (; t.lo > 127; )
    o[e++] = t.lo & 127 | 128, t.lo = t.lo >>> 7;
  o[e++] = t.lo;
}
M.prototype.uint64 = function(t) {
  var o = Qi.from(t);
  return this._push(Kr, o.length(), o);
};
M.prototype.int64 = M.prototype.uint64;
M.prototype.sint64 = function(t) {
  var o = Qi.from(t).zzEncode();
  return this._push(Kr, o.length(), o);
};
M.prototype.bool = function(t) {
  return this._push(kr, 1, t ? 1 : 0);
};
function tr(t, o, e) {
  o[e] = t & 255, o[e + 1] = t >>> 8 & 255, o[e + 2] = t >>> 16 & 255, o[e + 3] = t >>> 24;
}
M.prototype.fixed32 = function(t) {
  return this._push(tr, 4, t >>> 0);
};
M.prototype.sfixed32 = M.prototype.fixed32;
M.prototype.fixed64 = function(t) {
  var o = Qi.from(t);
  return this._push(tr, 4, o.lo)._push(tr, 4, o.hi);
};
M.prototype.sfixed64 = M.prototype.fixed64;
M.prototype.float = function(t) {
  return this._push(Ye.float.writeFloatLE, 4, t);
};
M.prototype.double = function(t) {
  return this._push(Ye.float.writeDoubleLE, 8, t);
};
var Yl = Ye.Array.prototype.set ? function(t, o, e) {
  o.set(t, e);
} : function(t, o, e) {
  for (var n = 0; n < t.length; ++n)
    o[e + n] = t[n];
};
M.prototype.bytes = function(t) {
  var o = t.length >>> 0;
  if (!o)
    return this._push(kr, 1, 0);
  if (Ye.isString(t)) {
    var e = M.alloc(o = c0.length(t));
    c0.decode(t, e, 0), t = e;
  }
  return this.uint32(o)._push(Yl, o, t);
};
M.prototype.string = function(t) {
  var o = x0.length(t);
  return o ? this.uint32(o)._push(x0.write, o, t) : this._push(kr, 1, 0);
};
M.prototype.fork = function() {
  return this.states = new Pl(this), this.head = this.tail = new Yn(Zr, 0, 0), this.len = 0, this;
};
M.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Yn(Zr, 0, 0), this.len = 0), this;
};
M.prototype.ldelim = function() {
  var t = this.head, o = this.tail, e = this.len;
  return this.reset().uint32(e), e && (this.tail.next = t.next, this.tail = o, this.len += e), this;
};
M.prototype.finish = function() {
  for (var t = this.head.next, o = this.constructor.alloc(this.len), e = 0; t; )
    t.fn(t.val, o, e), e += t.len, t = t.next;
  return o;
};
M._configure = function(t) {
  er = t, M.create = Ns(), er._configure();
};
var Tl = _e, Ds = Ts;
(_e.prototype = Object.create(Ds.prototype)).constructor = _e;
var bt = Lt();
function _e() {
  Ds.call(this);
}
_e._configure = function() {
  _e.alloc = bt._Buffer_allocUnsafe, _e.writeBytesBuffer = bt.Buffer && bt.Buffer.prototype instanceof Uint8Array && bt.Buffer.prototype.set.name === "set" ? function(t, o, e) {
    o.set(t, e);
  } : function(t, o, e) {
    if (t.copy)
      t.copy(o, e, 0, t.length);
    else
      for (var n = 0; n < t.length; )
        o[e++] = t[n++];
  };
};
_e.prototype.bytes = function(t) {
  bt.isString(t) && (t = bt._Buffer_from(t, "base64"));
  var o = t.length >>> 0;
  return this.uint32(o), o && this._push(_e.writeBytesBuffer, o, t), this;
};
function Nl(t, o, e) {
  t.length < 40 ? bt.utf8.write(t, o, e) : o.utf8Write ? o.utf8Write(t, e) : o.write(t, e);
}
_e.prototype.string = function(t) {
  var o = bt.Buffer.byteLength(t);
  return this.uint32(o), o && this._push(Nl, o, t), this;
};
_e._configure();
var Fs = ae, qe = Lt(), nr, Xs = qe.LongBits, Dl = qe.utf8;
function je(t, o) {
  return RangeError("index out of range: " + t.pos + " + " + (o || 1) + " > " + t.len);
}
function ae(t) {
  this.buf = t, this.pos = 0, this.len = t.length;
}
var I0 = typeof Uint8Array < "u" ? function(t) {
  if (t instanceof Uint8Array || Array.isArray(t))
    return new ae(t);
  throw Error("illegal buffer");
} : function(t) {
  if (Array.isArray(t))
    return new ae(t);
  throw Error("illegal buffer");
}, js = function() {
  return qe.Buffer ? function(t) {
    return (ae.create = function(o) {
      return qe.Buffer.isBuffer(o) ? new nr(o) : I0(o);
    })(t);
  } : I0;
};
ae.create = js();
ae.prototype._slice = qe.Array.prototype.subarray || /* istanbul ignore next */
qe.Array.prototype.slice;
ae.prototype.uint32 = /* @__PURE__ */ function() {
  var t = 4294967295;
  return function() {
    if (t = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (t = (t | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return t;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, je(this, 10);
    return t;
  };
}();
ae.prototype.int32 = function() {
  return this.uint32() | 0;
};
ae.prototype.sint32 = function() {
  var t = this.uint32();
  return t >>> 1 ^ -(t & 1) | 0;
};
function wo() {
  var t = new Xs(0, 0), o = 0;
  if (this.len - this.pos > 4) {
    for (; o < 4; ++o)
      if (t.lo = (t.lo | (this.buf[this.pos] & 127) << o * 7) >>> 0, this.buf[this.pos++] < 128)
        return t;
    if (t.lo = (t.lo | (this.buf[this.pos] & 127) << 28) >>> 0, t.hi = (t.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return t;
    o = 0;
  } else {
    for (; o < 3; ++o) {
      if (this.pos >= this.len)
        throw je(this);
      if (t.lo = (t.lo | (this.buf[this.pos] & 127) << o * 7) >>> 0, this.buf[this.pos++] < 128)
        return t;
    }
    return t.lo = (t.lo | (this.buf[this.pos++] & 127) << o * 7) >>> 0, t;
  }
  if (this.len - this.pos > 4) {
    for (; o < 5; ++o)
      if (t.hi = (t.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return t;
  } else
    for (; o < 5; ++o) {
      if (this.pos >= this.len)
        throw je(this);
      if (t.hi = (t.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return t;
    }
  throw Error("invalid varint encoding");
}
ae.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Oi(t, o) {
  return (t[o - 4] | t[o - 3] << 8 | t[o - 2] << 16 | t[o - 1] << 24) >>> 0;
}
ae.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw je(this, 4);
  return Oi(this.buf, this.pos += 4);
};
ae.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw je(this, 4);
  return Oi(this.buf, this.pos += 4) | 0;
};
function l0() {
  if (this.pos + 8 > this.len)
    throw je(this, 8);
  return new Xs(Oi(this.buf, this.pos += 4), Oi(this.buf, this.pos += 4));
}
ae.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw je(this, 4);
  var t = qe.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, t;
};
ae.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw je(this, 4);
  var t = qe.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, t;
};
ae.prototype.bytes = function() {
  var t = this.uint32(), o = this.pos, e = this.pos + t;
  if (e > this.len)
    throw je(this, t);
  return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(o, e) : o === e ? new this.buf.constructor(0) : this._slice.call(this.buf, o, e);
};
ae.prototype.string = function() {
  var t = this.bytes();
  return Dl.read(t, 0, t.length);
};
ae.prototype.skip = function(t) {
  if (typeof t == "number") {
    if (this.pos + t > this.len)
      throw je(this, t);
    this.pos += t;
  } else
    do
      if (this.pos >= this.len)
        throw je(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
ae.prototype.skipType = function(t) {
  switch (t) {
    case 0:
      this.skip();
      break;
    case 1:
      this.skip(8);
      break;
    case 2:
      this.skip(this.uint32());
      break;
    case 3:
      for (; (t = this.uint32() & 7) !== 4; )
        this.skipType(t);
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + t + " at offset " + this.pos);
  }
  return this;
};
ae._configure = function(t) {
  nr = t, ae.create = js(), nr._configure();
  var o = qe.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  qe.merge(ae.prototype, {
    int64: function() {
      return wo.call(this)[o](!1);
    },
    uint64: function() {
      return wo.call(this)[o](!0);
    },
    sint64: function() {
      return wo.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return l0.call(this)[o](!0);
    },
    sfixed64: function() {
      return l0.call(this)[o](!1);
    }
  });
};
var Fl = Et, Ms = Fs;
(Et.prototype = Object.create(Ms.prototype)).constructor = Et;
var u0 = Lt();
function Et(t) {
  Ms.call(this, t);
}
Et._configure = function() {
  u0.Buffer && (Et.prototype._slice = u0.Buffer.prototype.slice);
};
Et.prototype.string = function() {
  var t = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len));
};
Et._configure();
var Us = {}, Xl = Rn, Wr = Lt();
(Rn.prototype = Object.create(Wr.EventEmitter.prototype)).constructor = Rn;
function Rn(t, o, e) {
  if (typeof t != "function")
    throw TypeError("rpcImpl must be a function");
  Wr.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!o, this.responseDelimited = !!e;
}
Rn.prototype.rpcCall = function t(o, e, n, i, r) {
  if (!i)
    throw TypeError("request must be specified");
  var a = this;
  if (!r)
    return Wr.asPromise(t, a, o, e, n, i);
  if (!a.rpcImpl) {
    setTimeout(function() {
      r(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return a.rpcImpl(
      o,
      e[a.requestDelimited ? "encodeDelimited" : "encode"](i).finish(),
      function(s, g) {
        if (s)
          return a.emit("error", s, o), r(s);
        if (g === null) {
          a.end(
            /* endedByRPC */
            !0
          );
          return;
        }
        if (!(g instanceof n))
          try {
            g = n[a.responseDelimited ? "decodeDelimited" : "decode"](g);
          } catch (I) {
            return a.emit("error", I, o), r(I);
          }
        return a.emit("data", g, o), r(null, g);
      }
    );
  } catch (s) {
    a.emit("error", s, o), setTimeout(function() {
      r(s);
    }, 0);
    return;
  }
};
Rn.prototype.end = function(t) {
  return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(t) {
  var o = t;
  o.Service = Xl;
})(Us);
var jl = {};
(function(t) {
  var o = t;
  o.build = "minimal", o.Writer = Ts, o.BufferWriter = Tl, o.Reader = Fs, o.BufferReader = Fl, o.util = Lt(), o.rpc = Us, o.roots = jl, o.configure = e;
  function e() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  e();
})(Ps);
var ie = Ps;
const S = ie.Reader, de = ie.Writer, h = ie.util, d = ie.roots.default || (ie.roots.default = {}), gn = d.dot = (() => {
  const t = {};
  return t.Content = function() {
    function o(e) {
      if (e)
        for (let n = Object.keys(e), i = 0; i < n.length; ++i)
          e[n[i]] != null && (this[n[i]] = e[n[i]]);
    }
    return o.prototype.token = h.newBuffer([]), o.prototype.iv = h.newBuffer([]), o.prototype.schemaVersion = 0, o.prototype.bytes = h.newBuffer([]), o.create = function(e) {
      return new o(e);
    }, o.encode = function(e, n) {
      return n || (n = de.create()), e.token != null && Object.hasOwnProperty.call(e, "token") && n.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(e.token), e.iv != null && Object.hasOwnProperty.call(e, "iv") && n.uint32(
        /* id 2, wireType 2 =*/
        18
      ).bytes(e.iv), e.schemaVersion != null && Object.hasOwnProperty.call(e, "schemaVersion") && n.uint32(
        /* id 3, wireType 0 =*/
        24
      ).int32(e.schemaVersion), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && n.uint32(
        /* id 4, wireType 2 =*/
        34
      ).bytes(e.bytes), n;
    }, o.encodeDelimited = function(e, n) {
      return this.encode(e, n).ldelim();
    }, o.decode = function(e, n) {
      e instanceof S || (e = S.create(e));
      let i = n === void 0 ? e.len : e.pos + n, r = new d.dot.Content();
      for (; e.pos < i; ) {
        let a = e.uint32();
        switch (a >>> 3) {
          case 1: {
            r.token = e.bytes();
            break;
          }
          case 2: {
            r.iv = e.bytes();
            break;
          }
          case 3: {
            r.schemaVersion = e.int32();
            break;
          }
          case 4: {
            r.bytes = e.bytes();
            break;
          }
          default:
            e.skipType(a & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(e) {
      return e instanceof S || (e = new S(e)), this.decode(e, e.uint32());
    }, o.verify = function(e) {
      return typeof e != "object" || e === null ? "object expected" : e.token != null && e.hasOwnProperty("token") && !(e.token && typeof e.token.length == "number" || h.isString(e.token)) ? "token: buffer expected" : e.iv != null && e.hasOwnProperty("iv") && !(e.iv && typeof e.iv.length == "number" || h.isString(e.iv)) ? "iv: buffer expected" : e.schemaVersion != null && e.hasOwnProperty("schemaVersion") && !h.isInteger(e.schemaVersion) ? "schemaVersion: integer expected" : e.bytes != null && e.hasOwnProperty("bytes") && !(e.bytes && typeof e.bytes.length == "number" || h.isString(e.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(e) {
      if (e instanceof d.dot.Content)
        return e;
      let n = new d.dot.Content();
      return e.token != null && (typeof e.token == "string" ? h.base64.decode(e.token, n.token = h.newBuffer(h.base64.length(e.token)), 0) : e.token.length >= 0 && (n.token = e.token)), e.iv != null && (typeof e.iv == "string" ? h.base64.decode(e.iv, n.iv = h.newBuffer(h.base64.length(e.iv)), 0) : e.iv.length >= 0 && (n.iv = e.iv)), e.schemaVersion != null && (n.schemaVersion = e.schemaVersion | 0), e.bytes != null && (typeof e.bytes == "string" ? h.base64.decode(e.bytes, n.bytes = h.newBuffer(h.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (n.bytes = e.bytes)), n;
    }, o.toObject = function(e, n) {
      n || (n = {});
      let i = {};
      return n.defaults && (n.bytes === String ? i.token = "" : (i.token = [], n.bytes !== Array && (i.token = h.newBuffer(i.token))), n.bytes === String ? i.iv = "" : (i.iv = [], n.bytes !== Array && (i.iv = h.newBuffer(i.iv))), i.schemaVersion = 0, n.bytes === String ? i.bytes = "" : (i.bytes = [], n.bytes !== Array && (i.bytes = h.newBuffer(i.bytes)))), e.token != null && e.hasOwnProperty("token") && (i.token = n.bytes === String ? h.base64.encode(e.token, 0, e.token.length) : n.bytes === Array ? Array.prototype.slice.call(e.token) : e.token), e.iv != null && e.hasOwnProperty("iv") && (i.iv = n.bytes === String ? h.base64.encode(e.iv, 0, e.iv.length) : n.bytes === Array ? Array.prototype.slice.call(e.iv) : e.iv), e.schemaVersion != null && e.hasOwnProperty("schemaVersion") && (i.schemaVersion = e.schemaVersion), e.bytes != null && e.hasOwnProperty("bytes") && (i.bytes = n.bytes === String ? h.base64.encode(e.bytes, 0, e.bytes.length) : n.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes), i;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ie.util.toJSONOptions);
    }, o.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Content";
    }, o;
  }(), t.v3 = function() {
    const o = {};
    return o.MagnifEyeLivenessContent = function() {
      function e(n) {
        if (this.images = [], n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.images = h.emptyArray, e.prototype.metadata = null, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        if (i || (i = de.create()), n.images != null && n.images.length)
          for (let r = 0; r < n.images.length; ++r)
            d.dot.Image.encode(n.images[r], i.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return n.metadata != null && Object.hasOwnProperty.call(n, "metadata") && d.dot.v3.Metadata.encode(n.metadata, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof S || (n = S.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.MagnifEyeLivenessContent();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.images && a.images.length || (a.images = []), a.images.push(d.dot.Image.decode(n, n.uint32()));
              break;
            }
            case 2: {
              a.metadata = d.dot.v3.Metadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof S || (n = new S(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.images != null && n.hasOwnProperty("images")) {
          if (!Array.isArray(n.images))
            return "images: array expected";
          for (let i = 0; i < n.images.length; ++i) {
            let r = d.dot.Image.verify(n.images[i]);
            if (r)
              return "images." + r;
          }
        }
        if (n.metadata != null && n.hasOwnProperty("metadata")) {
          let i = d.dot.v3.Metadata.verify(n.metadata);
          if (i)
            return "metadata." + i;
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.MagnifEyeLivenessContent)
          return n;
        let i = new d.dot.v3.MagnifEyeLivenessContent();
        if (n.images) {
          if (!Array.isArray(n.images))
            throw TypeError(".dot.v3.MagnifEyeLivenessContent.images: array expected");
          i.images = [];
          for (let r = 0; r < n.images.length; ++r) {
            if (typeof n.images[r] != "object")
              throw TypeError(".dot.v3.MagnifEyeLivenessContent.images: object expected");
            i.images[r] = d.dot.Image.fromObject(n.images[r]);
          }
        }
        if (n.metadata != null) {
          if (typeof n.metadata != "object")
            throw TypeError(".dot.v3.MagnifEyeLivenessContent.metadata: object expected");
          i.metadata = d.dot.v3.Metadata.fromObject(n.metadata);
        }
        return i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        if ((i.arrays || i.defaults) && (r.images = []), i.defaults && (r.metadata = null), n.images && n.images.length) {
          r.images = [];
          for (let a = 0; a < n.images.length; ++a)
            r.images[a] = d.dot.Image.toObject(n.images[a], i);
        }
        return n.metadata != null && n.hasOwnProperty("metadata") && (r.metadata = d.dot.v3.Metadata.toObject(n.metadata, i)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.MagnifEyeLivenessContent";
      }, e;
    }(), o.Metadata = function() {
      function e(i) {
        if (i)
          for (let r = Object.keys(i), a = 0; a < r.length; ++a)
            i[r[a]] != null && (this[r[a]] = i[r[a]]);
      }
      e.prototype.platform = 0, e.prototype.sessionToken = null, e.prototype.web = null, e.prototype.android = null, e.prototype.ios = null;
      let n;
      return Object.defineProperty(e.prototype, "_sessionToken", {
        get: h.oneOfGetter(n = ["sessionToken"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "metadata", {
        get: h.oneOfGetter(n = ["web", "android", "ios"]),
        set: h.oneOfSetter(n)
      }), e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, r) {
        return r || (r = de.create()), i.platform != null && Object.hasOwnProperty.call(i, "platform") && r.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(i.platform), i.web != null && Object.hasOwnProperty.call(i, "web") && d.dot.v3.WebMetadata.encode(i.web, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i.android != null && Object.hasOwnProperty.call(i, "android") && d.dot.v3.AndroidMetadata.encode(i.android, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), i.ios != null && Object.hasOwnProperty.call(i, "ios") && d.dot.v3.IosMetadata.encode(i.ios, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), i.sessionToken != null && Object.hasOwnProperty.call(i, "sessionToken") && r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(i.sessionToken), r;
      }, e.encodeDelimited = function(i, r) {
        return this.encode(i, r).ldelim();
      }, e.decode = function(i, r) {
        i instanceof S || (i = S.create(i));
        let a = r === void 0 ? i.len : i.pos + r, s = new d.dot.v3.Metadata();
        for (; i.pos < a; ) {
          let g = i.uint32();
          switch (g >>> 3) {
            case 1: {
              s.platform = i.int32();
              break;
            }
            case 5: {
              s.sessionToken = i.string();
              break;
            }
            case 2: {
              s.web = d.dot.v3.WebMetadata.decode(i, i.uint32());
              break;
            }
            case 3: {
              s.android = d.dot.v3.AndroidMetadata.decode(i, i.uint32());
              break;
            }
            case 4: {
              s.ios = d.dot.v3.IosMetadata.decode(i, i.uint32());
              break;
            }
            default:
              i.skipType(g & 7);
              break;
          }
        }
        return s;
      }, e.decodeDelimited = function(i) {
        return i instanceof S || (i = new S(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        if (typeof i != "object" || i === null)
          return "object expected";
        let r = {};
        if (i.platform != null && i.hasOwnProperty("platform"))
          switch (i.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (i.sessionToken != null && i.hasOwnProperty("sessionToken") && (r._sessionToken = 1, !h.isString(i.sessionToken)))
          return "sessionToken: string expected";
        if (i.web != null && i.hasOwnProperty("web")) {
          r.metadata = 1;
          {
            let a = d.dot.v3.WebMetadata.verify(i.web);
            if (a)
              return "web." + a;
          }
        }
        if (i.android != null && i.hasOwnProperty("android")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let a = d.dot.v3.AndroidMetadata.verify(i.android);
            if (a)
              return "android." + a;
          }
        }
        if (i.ios != null && i.hasOwnProperty("ios")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let a = d.dot.v3.IosMetadata.verify(i.ios);
            if (a)
              return "ios." + a;
          }
        }
        return null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.Metadata)
          return i;
        let r = new d.dot.v3.Metadata();
        switch (i.platform) {
          default:
            if (typeof i.platform == "number") {
              r.platform = i.platform;
              break;
            }
            break;
          case "WEB":
          case 0:
            r.platform = 0;
            break;
          case "ANDROID":
          case 1:
            r.platform = 1;
            break;
          case "IOS":
          case 2:
            r.platform = 2;
            break;
        }
        if (i.sessionToken != null && (r.sessionToken = String(i.sessionToken)), i.web != null) {
          if (typeof i.web != "object")
            throw TypeError(".dot.v3.Metadata.web: object expected");
          r.web = d.dot.v3.WebMetadata.fromObject(i.web);
        }
        if (i.android != null) {
          if (typeof i.android != "object")
            throw TypeError(".dot.v3.Metadata.android: object expected");
          r.android = d.dot.v3.AndroidMetadata.fromObject(i.android);
        }
        if (i.ios != null) {
          if (typeof i.ios != "object")
            throw TypeError(".dot.v3.Metadata.ios: object expected");
          r.ios = d.dot.v3.IosMetadata.fromObject(i.ios);
        }
        return r;
      }, e.toObject = function(i, r) {
        r || (r = {});
        let a = {};
        return r.defaults && (a.platform = r.enums === String ? "WEB" : 0), i.platform != null && i.hasOwnProperty("platform") && (a.platform = r.enums === String ? d.dot.Platform[i.platform] === void 0 ? i.platform : d.dot.Platform[i.platform] : i.platform), i.web != null && i.hasOwnProperty("web") && (a.web = d.dot.v3.WebMetadata.toObject(i.web, r), r.oneofs && (a.metadata = "web")), i.android != null && i.hasOwnProperty("android") && (a.android = d.dot.v3.AndroidMetadata.toObject(i.android, r), r.oneofs && (a.metadata = "android")), i.ios != null && i.hasOwnProperty("ios") && (a.ios = d.dot.v3.IosMetadata.toObject(i.ios, r), r.oneofs && (a.metadata = "ios")), i.sessionToken != null && i.hasOwnProperty("sessionToken") && (a.sessionToken = i.sessionToken, r.oneofs && (a._sessionToken = "sessionToken")), a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.Metadata";
      }, e;
    }(), o.AndroidMetadata = function() {
      function e(i) {
        if (this.supportedAbis = [], this.digests = [], this.dynamicCameraFrameProperties = {}, i)
          for (let r = Object.keys(i), a = 0; a < r.length; ++a)
            i[r[a]] != null && (this[r[a]] = i[r[a]]);
      }
      e.prototype.supportedAbis = h.emptyArray, e.prototype.device = null, e.prototype.digests = h.emptyArray, e.prototype.dynamicCameraFrameProperties = h.emptyObject;
      let n;
      return Object.defineProperty(e.prototype, "_device", {
        get: h.oneOfGetter(n = ["device"]),
        set: h.oneOfSetter(n)
      }), e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, r) {
        if (r || (r = de.create()), i.supportedAbis != null && i.supportedAbis.length)
          for (let a = 0; a < i.supportedAbis.length; ++a)
            r.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(i.supportedAbis[a]);
        if (i.device != null && Object.hasOwnProperty.call(i, "device") && r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(i.device), i.digests != null && i.digests.length)
          for (let a = 0; a < i.digests.length; ++a)
            r.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(i.digests[a]);
        if (i.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(i, "dynamicCameraFrameProperties"))
          for (let a = Object.keys(i.dynamicCameraFrameProperties), s = 0; s < a.length; ++s)
            r.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(a[s]), d.dot.Int32List.encode(i.dynamicCameraFrameProperties[a[s]], r.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        return r;
      }, e.encodeDelimited = function(i, r) {
        return this.encode(i, r).ldelim();
      }, e.decode = function(i, r) {
        i instanceof S || (i = S.create(i));
        let a = r === void 0 ? i.len : i.pos + r, s = new d.dot.v3.AndroidMetadata(), g, I;
        for (; i.pos < a; ) {
          let C = i.uint32();
          switch (C >>> 3) {
            case 1: {
              s.supportedAbis && s.supportedAbis.length || (s.supportedAbis = []), s.supportedAbis.push(i.string());
              break;
            }
            case 2: {
              s.device = i.string();
              break;
            }
            case 3: {
              s.digests && s.digests.length || (s.digests = []), s.digests.push(i.bytes());
              break;
            }
            case 4: {
              s.dynamicCameraFrameProperties === h.emptyObject && (s.dynamicCameraFrameProperties = {});
              let u = i.uint32() + i.pos;
              for (g = "", I = null; i.pos < u; ) {
                let p = i.uint32();
                switch (p >>> 3) {
                  case 1:
                    g = i.string();
                    break;
                  case 2:
                    I = d.dot.Int32List.decode(i, i.uint32());
                    break;
                  default:
                    i.skipType(p & 7);
                    break;
                }
              }
              s.dynamicCameraFrameProperties[g] = I;
              break;
            }
            default:
              i.skipType(C & 7);
              break;
          }
        }
        return s;
      }, e.decodeDelimited = function(i) {
        return i instanceof S || (i = new S(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        if (typeof i != "object" || i === null)
          return "object expected";
        if (i.supportedAbis != null && i.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(i.supportedAbis))
            return "supportedAbis: array expected";
          for (let r = 0; r < i.supportedAbis.length; ++r)
            if (!h.isString(i.supportedAbis[r]))
              return "supportedAbis: string[] expected";
        }
        if (i.device != null && i.hasOwnProperty("device") && !h.isString(i.device))
          return "device: string expected";
        if (i.digests != null && i.hasOwnProperty("digests")) {
          if (!Array.isArray(i.digests))
            return "digests: array expected";
          for (let r = 0; r < i.digests.length; ++r)
            if (!(i.digests[r] && typeof i.digests[r].length == "number" || h.isString(i.digests[r])))
              return "digests: buffer[] expected";
        }
        if (i.dynamicCameraFrameProperties != null && i.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!h.isObject(i.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let r = Object.keys(i.dynamicCameraFrameProperties);
          for (let a = 0; a < r.length; ++a) {
            let s = d.dot.Int32List.verify(i.dynamicCameraFrameProperties[r[a]]);
            if (s)
              return "dynamicCameraFrameProperties." + s;
          }
        }
        return null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.AndroidMetadata)
          return i;
        let r = new d.dot.v3.AndroidMetadata();
        if (i.supportedAbis) {
          if (!Array.isArray(i.supportedAbis))
            throw TypeError(".dot.v3.AndroidMetadata.supportedAbis: array expected");
          r.supportedAbis = [];
          for (let a = 0; a < i.supportedAbis.length; ++a)
            r.supportedAbis[a] = String(i.supportedAbis[a]);
        }
        if (i.device != null && (r.device = String(i.device)), i.digests) {
          if (!Array.isArray(i.digests))
            throw TypeError(".dot.v3.AndroidMetadata.digests: array expected");
          r.digests = [];
          for (let a = 0; a < i.digests.length; ++a)
            typeof i.digests[a] == "string" ? h.base64.decode(i.digests[a], r.digests[a] = h.newBuffer(h.base64.length(i.digests[a])), 0) : i.digests[a].length >= 0 && (r.digests[a] = i.digests[a]);
        }
        if (i.dynamicCameraFrameProperties) {
          if (typeof i.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v3.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          r.dynamicCameraFrameProperties = {};
          for (let a = Object.keys(i.dynamicCameraFrameProperties), s = 0; s < a.length; ++s) {
            if (typeof i.dynamicCameraFrameProperties[a[s]] != "object")
              throw TypeError(".dot.v3.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            r.dynamicCameraFrameProperties[a[s]] = d.dot.Int32List.fromObject(i.dynamicCameraFrameProperties[a[s]]);
          }
        }
        return r;
      }, e.toObject = function(i, r) {
        r || (r = {});
        let a = {};
        if ((r.arrays || r.defaults) && (a.supportedAbis = [], a.digests = []), (r.objects || r.defaults) && (a.dynamicCameraFrameProperties = {}), i.supportedAbis && i.supportedAbis.length) {
          a.supportedAbis = [];
          for (let g = 0; g < i.supportedAbis.length; ++g)
            a.supportedAbis[g] = i.supportedAbis[g];
        }
        if (i.device != null && i.hasOwnProperty("device") && (a.device = i.device, r.oneofs && (a._device = "device")), i.digests && i.digests.length) {
          a.digests = [];
          for (let g = 0; g < i.digests.length; ++g)
            a.digests[g] = r.bytes === String ? h.base64.encode(i.digests[g], 0, i.digests[g].length) : r.bytes === Array ? Array.prototype.slice.call(i.digests[g]) : i.digests[g];
        }
        let s;
        if (i.dynamicCameraFrameProperties && (s = Object.keys(i.dynamicCameraFrameProperties)).length) {
          a.dynamicCameraFrameProperties = {};
          for (let g = 0; g < s.length; ++g)
            a.dynamicCameraFrameProperties[s[g]] = d.dot.Int32List.toObject(i.dynamicCameraFrameProperties[s[g]], r);
        }
        return a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.AndroidMetadata";
      }, e;
    }(), o.IosMetadata = function() {
      function e(n) {
        if (this.digests = [], this.isoValues = [], n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.device = h.newBuffer([]), e.prototype.architecture = !1, e.prototype.digests = h.emptyArray, e.prototype.isoValues = h.emptyArray, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        if (i || (i = de.create()), n.device != null && Object.hasOwnProperty.call(n, "device") && i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).bytes(n.device), n.architecture != null && Object.hasOwnProperty.call(n, "architecture") && i.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(n.architecture), n.digests != null && n.digests.length)
          for (let r = 0; r < n.digests.length; ++r)
            i.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(n.digests[r]);
        if (n.isoValues != null && n.isoValues.length) {
          i.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let r = 0; r < n.isoValues.length; ++r)
            i.int32(n.isoValues[r]);
          i.ldelim();
        }
        return i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof S || (n = S.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.IosMetadata();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.device = n.bytes();
              break;
            }
            case 2: {
              a.architecture = n.bool();
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(n.bytes());
              break;
            }
            case 4: {
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (s & 7) === 2) {
                let g = n.uint32() + n.pos;
                for (; n.pos < g; )
                  a.isoValues.push(n.int32());
              } else
                a.isoValues.push(n.int32());
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof S || (n = new S(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.device != null && n.hasOwnProperty("device") && !(n.device && typeof n.device.length == "number" || h.isString(n.device)))
          return "device: buffer expected";
        if (n.architecture != null && n.hasOwnProperty("architecture") && typeof n.architecture != "boolean")
          return "architecture: boolean expected";
        if (n.digests != null && n.hasOwnProperty("digests")) {
          if (!Array.isArray(n.digests))
            return "digests: array expected";
          for (let i = 0; i < n.digests.length; ++i)
            if (!(n.digests[i] && typeof n.digests[i].length == "number" || h.isString(n.digests[i])))
              return "digests: buffer[] expected";
        }
        if (n.isoValues != null && n.hasOwnProperty("isoValues")) {
          if (!Array.isArray(n.isoValues))
            return "isoValues: array expected";
          for (let i = 0; i < n.isoValues.length; ++i)
            if (!h.isInteger(n.isoValues[i]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.IosMetadata)
          return n;
        let i = new d.dot.v3.IosMetadata();
        if (n.device != null && (typeof n.device == "string" ? h.base64.decode(n.device, i.device = h.newBuffer(h.base64.length(n.device)), 0) : n.device.length >= 0 && (i.device = n.device)), n.architecture != null && (i.architecture = !!n.architecture), n.digests) {
          if (!Array.isArray(n.digests))
            throw TypeError(".dot.v3.IosMetadata.digests: array expected");
          i.digests = [];
          for (let r = 0; r < n.digests.length; ++r)
            typeof n.digests[r] == "string" ? h.base64.decode(n.digests[r], i.digests[r] = h.newBuffer(h.base64.length(n.digests[r])), 0) : n.digests[r].length >= 0 && (i.digests[r] = n.digests[r]);
        }
        if (n.isoValues) {
          if (!Array.isArray(n.isoValues))
            throw TypeError(".dot.v3.IosMetadata.isoValues: array expected");
          i.isoValues = [];
          for (let r = 0; r < n.isoValues.length; ++r)
            i.isoValues[r] = n.isoValues[r] | 0;
        }
        return i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        if ((i.arrays || i.defaults) && (r.digests = [], r.isoValues = []), i.defaults && (i.bytes === String ? r.device = "" : (r.device = [], i.bytes !== Array && (r.device = h.newBuffer(r.device))), r.architecture = !1), n.device != null && n.hasOwnProperty("device") && (r.device = i.bytes === String ? h.base64.encode(n.device, 0, n.device.length) : i.bytes === Array ? Array.prototype.slice.call(n.device) : n.device), n.architecture != null && n.hasOwnProperty("architecture") && (r.architecture = n.architecture), n.digests && n.digests.length) {
          r.digests = [];
          for (let a = 0; a < n.digests.length; ++a)
            r.digests[a] = i.bytes === String ? h.base64.encode(n.digests[a], 0, n.digests[a].length) : i.bytes === Array ? Array.prototype.slice.call(n.digests[a]) : n.digests[a];
        }
        if (n.isoValues && n.isoValues.length) {
          r.isoValues = [];
          for (let a = 0; a < n.isoValues.length; ++a)
            r.isoValues[a] = n.isoValues[a];
        }
        return r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.IosMetadata";
      }, e;
    }(), o.WebMetadata = function() {
      function e(n) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.detectionRecord = [], n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.currentCameraProperties = null, e.prototype.availableCameraProperties = h.emptyArray, e.prototype.hashedDetectedImages = h.emptyArray, e.prototype.detectionRecord = h.emptyArray, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        if (i || (i = de.create()), n.currentCameraProperties != null && Object.hasOwnProperty.call(n, "currentCameraProperties") && d.dot.v3.MediaTrackSettings.encode(n.currentCameraProperties, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.availableCameraProperties != null && n.availableCameraProperties.length)
          for (let r = 0; r < n.availableCameraProperties.length; ++r)
            d.dot.v3.CameraProperties.encode(n.availableCameraProperties[r], i.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (n.hashedDetectedImages != null && n.hashedDetectedImages.length)
          for (let r = 0; r < n.hashedDetectedImages.length; ++r)
            i.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(n.hashedDetectedImages[r]);
        if (n.detectionRecord != null && n.detectionRecord.length)
          for (let r = 0; r < n.detectionRecord.length; ++r)
            d.dot.v3.DetectedObject.encode(n.detectionRecord[r], i.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        return i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof S || (n = S.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.WebMetadata();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.currentCameraProperties = d.dot.v3.MediaTrackSettings.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.availableCameraProperties && a.availableCameraProperties.length || (a.availableCameraProperties = []), a.availableCameraProperties.push(d.dot.v3.CameraProperties.decode(n, n.uint32()));
              break;
            }
            case 3: {
              a.hashedDetectedImages && a.hashedDetectedImages.length || (a.hashedDetectedImages = []), a.hashedDetectedImages.push(n.string());
              break;
            }
            case 4: {
              a.detectionRecord && a.detectionRecord.length || (a.detectionRecord = []), a.detectionRecord.push(d.dot.v3.DetectedObject.decode(n, n.uint32()));
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof S || (n = new S(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.currentCameraProperties != null && n.hasOwnProperty("currentCameraProperties")) {
          let i = d.dot.v3.MediaTrackSettings.verify(n.currentCameraProperties);
          if (i)
            return "currentCameraProperties." + i;
        }
        if (n.availableCameraProperties != null && n.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(n.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let i = 0; i < n.availableCameraProperties.length; ++i) {
            let r = d.dot.v3.CameraProperties.verify(n.availableCameraProperties[i]);
            if (r)
              return "availableCameraProperties." + r;
          }
        }
        if (n.hashedDetectedImages != null && n.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(n.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let i = 0; i < n.hashedDetectedImages.length; ++i)
            if (!h.isString(n.hashedDetectedImages[i]))
              return "hashedDetectedImages: string[] expected";
        }
        if (n.detectionRecord != null && n.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(n.detectionRecord))
            return "detectionRecord: array expected";
          for (let i = 0; i < n.detectionRecord.length; ++i) {
            let r = d.dot.v3.DetectedObject.verify(n.detectionRecord[i]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.WebMetadata)
          return n;
        let i = new d.dot.v3.WebMetadata();
        if (n.currentCameraProperties != null) {
          if (typeof n.currentCameraProperties != "object")
            throw TypeError(".dot.v3.WebMetadata.currentCameraProperties: object expected");
          i.currentCameraProperties = d.dot.v3.MediaTrackSettings.fromObject(n.currentCameraProperties);
        }
        if (n.availableCameraProperties) {
          if (!Array.isArray(n.availableCameraProperties))
            throw TypeError(".dot.v3.WebMetadata.availableCameraProperties: array expected");
          i.availableCameraProperties = [];
          for (let r = 0; r < n.availableCameraProperties.length; ++r) {
            if (typeof n.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v3.WebMetadata.availableCameraProperties: object expected");
            i.availableCameraProperties[r] = d.dot.v3.CameraProperties.fromObject(n.availableCameraProperties[r]);
          }
        }
        if (n.hashedDetectedImages) {
          if (!Array.isArray(n.hashedDetectedImages))
            throw TypeError(".dot.v3.WebMetadata.hashedDetectedImages: array expected");
          i.hashedDetectedImages = [];
          for (let r = 0; r < n.hashedDetectedImages.length; ++r)
            i.hashedDetectedImages[r] = String(n.hashedDetectedImages[r]);
        }
        if (n.detectionRecord) {
          if (!Array.isArray(n.detectionRecord))
            throw TypeError(".dot.v3.WebMetadata.detectionRecord: array expected");
          i.detectionRecord = [];
          for (let r = 0; r < n.detectionRecord.length; ++r) {
            if (typeof n.detectionRecord[r] != "object")
              throw TypeError(".dot.v3.WebMetadata.detectionRecord: object expected");
            i.detectionRecord[r] = d.dot.v3.DetectedObject.fromObject(n.detectionRecord[r]);
          }
        }
        return i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        if ((i.arrays || i.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = []), i.defaults && (r.currentCameraProperties = null), n.currentCameraProperties != null && n.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = d.dot.v3.MediaTrackSettings.toObject(n.currentCameraProperties, i)), n.availableCameraProperties && n.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let a = 0; a < n.availableCameraProperties.length; ++a)
            r.availableCameraProperties[a] = d.dot.v3.CameraProperties.toObject(n.availableCameraProperties[a], i);
        }
        if (n.hashedDetectedImages && n.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let a = 0; a < n.hashedDetectedImages.length; ++a)
            r.hashedDetectedImages[a] = n.hashedDetectedImages[a];
        }
        if (n.detectionRecord && n.detectionRecord.length) {
          r.detectionRecord = [];
          for (let a = 0; a < n.detectionRecord.length; ++a)
            r.detectionRecord[a] = d.dot.v3.DetectedObject.toObject(n.detectionRecord[a], i);
        }
        return r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.WebMetadata";
      }, e;
    }(), o.MediaTrackSettings = function() {
      function e(i) {
        if (i)
          for (let r = Object.keys(i), a = 0; a < r.length; ++a)
            i[r[a]] != null && (this[r[a]] = i[r[a]]);
      }
      e.prototype.aspectRatio = null, e.prototype.autoGainControl = null, e.prototype.channelCount = null, e.prototype.deviceId = null, e.prototype.displaySurface = null, e.prototype.echoCancellation = null, e.prototype.facingMode = null, e.prototype.frameRate = null, e.prototype.groupId = null, e.prototype.height = null, e.prototype.noiseSuppression = null, e.prototype.sampleRate = null, e.prototype.sampleSize = null, e.prototype.width = null, e.prototype.deviceName = null;
      let n;
      return Object.defineProperty(e.prototype, "_aspectRatio", {
        get: h.oneOfGetter(n = ["aspectRatio"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_autoGainControl", {
        get: h.oneOfGetter(n = ["autoGainControl"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_channelCount", {
        get: h.oneOfGetter(n = ["channelCount"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_deviceId", {
        get: h.oneOfGetter(n = ["deviceId"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_displaySurface", {
        get: h.oneOfGetter(n = ["displaySurface"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_echoCancellation", {
        get: h.oneOfGetter(n = ["echoCancellation"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_facingMode", {
        get: h.oneOfGetter(n = ["facingMode"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_frameRate", {
        get: h.oneOfGetter(n = ["frameRate"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_groupId", {
        get: h.oneOfGetter(n = ["groupId"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_height", {
        get: h.oneOfGetter(n = ["height"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_noiseSuppression", {
        get: h.oneOfGetter(n = ["noiseSuppression"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_sampleRate", {
        get: h.oneOfGetter(n = ["sampleRate"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_sampleSize", {
        get: h.oneOfGetter(n = ["sampleSize"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_width", {
        get: h.oneOfGetter(n = ["width"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_deviceName", {
        get: h.oneOfGetter(n = ["deviceName"]),
        set: h.oneOfSetter(n)
      }), e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, r) {
        return r || (r = de.create()), i.aspectRatio != null && Object.hasOwnProperty.call(i, "aspectRatio") && r.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(i.aspectRatio), i.autoGainControl != null && Object.hasOwnProperty.call(i, "autoGainControl") && r.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(i.autoGainControl), i.channelCount != null && Object.hasOwnProperty.call(i, "channelCount") && r.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(i.channelCount), i.deviceId != null && Object.hasOwnProperty.call(i, "deviceId") && r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(i.deviceId), i.displaySurface != null && Object.hasOwnProperty.call(i, "displaySurface") && r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(i.displaySurface), i.echoCancellation != null && Object.hasOwnProperty.call(i, "echoCancellation") && r.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(i.echoCancellation), i.facingMode != null && Object.hasOwnProperty.call(i, "facingMode") && r.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(i.facingMode), i.frameRate != null && Object.hasOwnProperty.call(i, "frameRate") && r.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(i.frameRate), i.groupId != null && Object.hasOwnProperty.call(i, "groupId") && r.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(i.groupId), i.height != null && Object.hasOwnProperty.call(i, "height") && r.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(i.height), i.noiseSuppression != null && Object.hasOwnProperty.call(i, "noiseSuppression") && r.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(i.noiseSuppression), i.sampleRate != null && Object.hasOwnProperty.call(i, "sampleRate") && r.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(i.sampleRate), i.sampleSize != null && Object.hasOwnProperty.call(i, "sampleSize") && r.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(i.sampleSize), i.width != null && Object.hasOwnProperty.call(i, "width") && r.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(i.width), i.deviceName != null && Object.hasOwnProperty.call(i, "deviceName") && r.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(i.deviceName), r;
      }, e.encodeDelimited = function(i, r) {
        return this.encode(i, r).ldelim();
      }, e.decode = function(i, r) {
        i instanceof S || (i = S.create(i));
        let a = r === void 0 ? i.len : i.pos + r, s = new d.dot.v3.MediaTrackSettings();
        for (; i.pos < a; ) {
          let g = i.uint32();
          switch (g >>> 3) {
            case 1: {
              s.aspectRatio = i.double();
              break;
            }
            case 2: {
              s.autoGainControl = i.bool();
              break;
            }
            case 3: {
              s.channelCount = i.int32();
              break;
            }
            case 4: {
              s.deviceId = i.string();
              break;
            }
            case 5: {
              s.displaySurface = i.string();
              break;
            }
            case 6: {
              s.echoCancellation = i.bool();
              break;
            }
            case 7: {
              s.facingMode = i.string();
              break;
            }
            case 8: {
              s.frameRate = i.double();
              break;
            }
            case 9: {
              s.groupId = i.string();
              break;
            }
            case 10: {
              s.height = i.int32();
              break;
            }
            case 11: {
              s.noiseSuppression = i.bool();
              break;
            }
            case 12: {
              s.sampleRate = i.int32();
              break;
            }
            case 13: {
              s.sampleSize = i.int32();
              break;
            }
            case 14: {
              s.width = i.int32();
              break;
            }
            case 15: {
              s.deviceName = i.string();
              break;
            }
            default:
              i.skipType(g & 7);
              break;
          }
        }
        return s;
      }, e.decodeDelimited = function(i) {
        return i instanceof S || (i = new S(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        return typeof i != "object" || i === null ? "object expected" : i.aspectRatio != null && i.hasOwnProperty("aspectRatio") && typeof i.aspectRatio != "number" ? "aspectRatio: number expected" : i.autoGainControl != null && i.hasOwnProperty("autoGainControl") && typeof i.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : i.channelCount != null && i.hasOwnProperty("channelCount") && !h.isInteger(i.channelCount) ? "channelCount: integer expected" : i.deviceId != null && i.hasOwnProperty("deviceId") && !h.isString(i.deviceId) ? "deviceId: string expected" : i.displaySurface != null && i.hasOwnProperty("displaySurface") && !h.isString(i.displaySurface) ? "displaySurface: string expected" : i.echoCancellation != null && i.hasOwnProperty("echoCancellation") && typeof i.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : i.facingMode != null && i.hasOwnProperty("facingMode") && !h.isString(i.facingMode) ? "facingMode: string expected" : i.frameRate != null && i.hasOwnProperty("frameRate") && typeof i.frameRate != "number" ? "frameRate: number expected" : i.groupId != null && i.hasOwnProperty("groupId") && !h.isString(i.groupId) ? "groupId: string expected" : i.height != null && i.hasOwnProperty("height") && !h.isInteger(i.height) ? "height: integer expected" : i.noiseSuppression != null && i.hasOwnProperty("noiseSuppression") && typeof i.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : i.sampleRate != null && i.hasOwnProperty("sampleRate") && !h.isInteger(i.sampleRate) ? "sampleRate: integer expected" : i.sampleSize != null && i.hasOwnProperty("sampleSize") && !h.isInteger(i.sampleSize) ? "sampleSize: integer expected" : i.width != null && i.hasOwnProperty("width") && !h.isInteger(i.width) ? "width: integer expected" : i.deviceName != null && i.hasOwnProperty("deviceName") && !h.isString(i.deviceName) ? "deviceName: string expected" : null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.MediaTrackSettings)
          return i;
        let r = new d.dot.v3.MediaTrackSettings();
        return i.aspectRatio != null && (r.aspectRatio = Number(i.aspectRatio)), i.autoGainControl != null && (r.autoGainControl = !!i.autoGainControl), i.channelCount != null && (r.channelCount = i.channelCount | 0), i.deviceId != null && (r.deviceId = String(i.deviceId)), i.displaySurface != null && (r.displaySurface = String(i.displaySurface)), i.echoCancellation != null && (r.echoCancellation = !!i.echoCancellation), i.facingMode != null && (r.facingMode = String(i.facingMode)), i.frameRate != null && (r.frameRate = Number(i.frameRate)), i.groupId != null && (r.groupId = String(i.groupId)), i.height != null && (r.height = i.height | 0), i.noiseSuppression != null && (r.noiseSuppression = !!i.noiseSuppression), i.sampleRate != null && (r.sampleRate = i.sampleRate | 0), i.sampleSize != null && (r.sampleSize = i.sampleSize | 0), i.width != null && (r.width = i.width | 0), i.deviceName != null && (r.deviceName = String(i.deviceName)), r;
      }, e.toObject = function(i, r) {
        r || (r = {});
        let a = {};
        return i.aspectRatio != null && i.hasOwnProperty("aspectRatio") && (a.aspectRatio = r.json && !isFinite(i.aspectRatio) ? String(i.aspectRatio) : i.aspectRatio, r.oneofs && (a._aspectRatio = "aspectRatio")), i.autoGainControl != null && i.hasOwnProperty("autoGainControl") && (a.autoGainControl = i.autoGainControl, r.oneofs && (a._autoGainControl = "autoGainControl")), i.channelCount != null && i.hasOwnProperty("channelCount") && (a.channelCount = i.channelCount, r.oneofs && (a._channelCount = "channelCount")), i.deviceId != null && i.hasOwnProperty("deviceId") && (a.deviceId = i.deviceId, r.oneofs && (a._deviceId = "deviceId")), i.displaySurface != null && i.hasOwnProperty("displaySurface") && (a.displaySurface = i.displaySurface, r.oneofs && (a._displaySurface = "displaySurface")), i.echoCancellation != null && i.hasOwnProperty("echoCancellation") && (a.echoCancellation = i.echoCancellation, r.oneofs && (a._echoCancellation = "echoCancellation")), i.facingMode != null && i.hasOwnProperty("facingMode") && (a.facingMode = i.facingMode, r.oneofs && (a._facingMode = "facingMode")), i.frameRate != null && i.hasOwnProperty("frameRate") && (a.frameRate = r.json && !isFinite(i.frameRate) ? String(i.frameRate) : i.frameRate, r.oneofs && (a._frameRate = "frameRate")), i.groupId != null && i.hasOwnProperty("groupId") && (a.groupId = i.groupId, r.oneofs && (a._groupId = "groupId")), i.height != null && i.hasOwnProperty("height") && (a.height = i.height, r.oneofs && (a._height = "height")), i.noiseSuppression != null && i.hasOwnProperty("noiseSuppression") && (a.noiseSuppression = i.noiseSuppression, r.oneofs && (a._noiseSuppression = "noiseSuppression")), i.sampleRate != null && i.hasOwnProperty("sampleRate") && (a.sampleRate = i.sampleRate, r.oneofs && (a._sampleRate = "sampleRate")), i.sampleSize != null && i.hasOwnProperty("sampleSize") && (a.sampleSize = i.sampleSize, r.oneofs && (a._sampleSize = "sampleSize")), i.width != null && i.hasOwnProperty("width") && (a.width = i.width, r.oneofs && (a._width = "width")), i.deviceName != null && i.hasOwnProperty("deviceName") && (a.deviceName = i.deviceName, r.oneofs && (a._deviceName = "deviceName")), a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.MediaTrackSettings";
      }, e;
    }(), o.ImageBitmap = function() {
      function e(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.width = 0, e.prototype.height = 0, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        return i || (i = de.create()), n.width != null && Object.hasOwnProperty.call(n, "width") && i.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.width), n.height != null && Object.hasOwnProperty.call(n, "height") && i.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(n.height), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof S || (n = S.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.ImageBitmap();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.width = n.int32();
              break;
            }
            case 2: {
              a.height = n.int32();
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof S || (n = new S(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        return typeof n != "object" || n === null ? "object expected" : n.width != null && n.hasOwnProperty("width") && !h.isInteger(n.width) ? "width: integer expected" : n.height != null && n.hasOwnProperty("height") && !h.isInteger(n.height) ? "height: integer expected" : null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.ImageBitmap)
          return n;
        let i = new d.dot.v3.ImageBitmap();
        return n.width != null && (i.width = n.width | 0), n.height != null && (i.height = n.height | 0), i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return i.defaults && (r.width = 0, r.height = 0), n.width != null && n.hasOwnProperty("width") && (r.width = n.width), n.height != null && n.hasOwnProperty("height") && (r.height = n.height), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.ImageBitmap";
      }, e;
    }(), o.CameraProperties = function() {
      function e(i) {
        if (i)
          for (let r = Object.keys(i), a = 0; a < r.length; ++a)
            i[r[a]] != null && (this[r[a]] = i[r[a]]);
      }
      e.prototype.cameraInitFrameResolution = null, e.prototype.cameraProperties = null;
      let n;
      return Object.defineProperty(e.prototype, "_cameraInitFrameResolution", {
        get: h.oneOfGetter(n = ["cameraInitFrameResolution"]),
        set: h.oneOfSetter(n)
      }), e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, r) {
        return r || (r = de.create()), i.cameraInitFrameResolution != null && Object.hasOwnProperty.call(i, "cameraInitFrameResolution") && d.dot.v3.ImageBitmap.encode(i.cameraInitFrameResolution, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), i.cameraProperties != null && Object.hasOwnProperty.call(i, "cameraProperties") && d.dot.v3.MediaTrackSettings.encode(i.cameraProperties, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), r;
      }, e.encodeDelimited = function(i, r) {
        return this.encode(i, r).ldelim();
      }, e.decode = function(i, r) {
        i instanceof S || (i = S.create(i));
        let a = r === void 0 ? i.len : i.pos + r, s = new d.dot.v3.CameraProperties();
        for (; i.pos < a; ) {
          let g = i.uint32();
          switch (g >>> 3) {
            case 1: {
              s.cameraInitFrameResolution = d.dot.v3.ImageBitmap.decode(i, i.uint32());
              break;
            }
            case 2: {
              s.cameraProperties = d.dot.v3.MediaTrackSettings.decode(i, i.uint32());
              break;
            }
            default:
              i.skipType(g & 7);
              break;
          }
        }
        return s;
      }, e.decodeDelimited = function(i) {
        return i instanceof S || (i = new S(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        if (typeof i != "object" || i === null)
          return "object expected";
        if (i.cameraInitFrameResolution != null && i.hasOwnProperty("cameraInitFrameResolution")) {
          let r = d.dot.v3.ImageBitmap.verify(i.cameraInitFrameResolution);
          if (r)
            return "cameraInitFrameResolution." + r;
        }
        if (i.cameraProperties != null && i.hasOwnProperty("cameraProperties")) {
          let r = d.dot.v3.MediaTrackSettings.verify(i.cameraProperties);
          if (r)
            return "cameraProperties." + r;
        }
        return null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.CameraProperties)
          return i;
        let r = new d.dot.v3.CameraProperties();
        if (i.cameraInitFrameResolution != null) {
          if (typeof i.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v3.CameraProperties.cameraInitFrameResolution: object expected");
          r.cameraInitFrameResolution = d.dot.v3.ImageBitmap.fromObject(i.cameraInitFrameResolution);
        }
        if (i.cameraProperties != null) {
          if (typeof i.cameraProperties != "object")
            throw TypeError(".dot.v3.CameraProperties.cameraProperties: object expected");
          r.cameraProperties = d.dot.v3.MediaTrackSettings.fromObject(i.cameraProperties);
        }
        return r;
      }, e.toObject = function(i, r) {
        r || (r = {});
        let a = {};
        return r.defaults && (a.cameraProperties = null), i.cameraInitFrameResolution != null && i.hasOwnProperty("cameraInitFrameResolution") && (a.cameraInitFrameResolution = d.dot.v3.ImageBitmap.toObject(i.cameraInitFrameResolution, r), r.oneofs && (a._cameraInitFrameResolution = "cameraInitFrameResolution")), i.cameraProperties != null && i.hasOwnProperty("cameraProperties") && (a.cameraProperties = d.dot.v3.MediaTrackSettings.toObject(i.cameraProperties, r)), a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.CameraProperties";
      }, e;
    }(), o.DetectedObject = function() {
      function e(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.brightness = 0, e.prototype.sharpness = 0, e.prototype.hotspots = 0, e.prototype.confidence = 0, e.prototype.faceSize = 0, e.prototype.faceCenter = null, e.prototype.smallestEdge = 0, e.prototype.bottomLeft = null, e.prototype.bottomRight = null, e.prototype.topLeft = null, e.prototype.topRight = null, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        return i || (i = de.create()), n.brightness != null && Object.hasOwnProperty.call(n, "brightness") && i.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(n.brightness), n.sharpness != null && Object.hasOwnProperty.call(n, "sharpness") && i.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(n.sharpness), n.hotspots != null && Object.hasOwnProperty.call(n, "hotspots") && i.uint32(
          /* id 3, wireType 5 =*/
          29
        ).float(n.hotspots), n.confidence != null && Object.hasOwnProperty.call(n, "confidence") && i.uint32(
          /* id 4, wireType 5 =*/
          37
        ).float(n.confidence), n.faceSize != null && Object.hasOwnProperty.call(n, "faceSize") && i.uint32(
          /* id 5, wireType 5 =*/
          45
        ).float(n.faceSize), n.faceCenter != null && Object.hasOwnProperty.call(n, "faceCenter") && d.dot.v3.Point.encode(n.faceCenter, i.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), n.smallestEdge != null && Object.hasOwnProperty.call(n, "smallestEdge") && i.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(n.smallestEdge), n.bottomLeft != null && Object.hasOwnProperty.call(n, "bottomLeft") && d.dot.v3.Point.encode(n.bottomLeft, i.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), n.bottomRight != null && Object.hasOwnProperty.call(n, "bottomRight") && d.dot.v3.Point.encode(n.bottomRight, i.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), n.topLeft != null && Object.hasOwnProperty.call(n, "topLeft") && d.dot.v3.Point.encode(n.topLeft, i.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), n.topRight != null && Object.hasOwnProperty.call(n, "topRight") && d.dot.v3.Point.encode(n.topRight, i.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof S || (n = S.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.DetectedObject();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.brightness = n.float();
              break;
            }
            case 2: {
              a.sharpness = n.float();
              break;
            }
            case 3: {
              a.hotspots = n.float();
              break;
            }
            case 4: {
              a.confidence = n.float();
              break;
            }
            case 5: {
              a.faceSize = n.float();
              break;
            }
            case 6: {
              a.faceCenter = d.dot.v3.Point.decode(n, n.uint32());
              break;
            }
            case 7: {
              a.smallestEdge = n.float();
              break;
            }
            case 8: {
              a.bottomLeft = d.dot.v3.Point.decode(n, n.uint32());
              break;
            }
            case 9: {
              a.bottomRight = d.dot.v3.Point.decode(n, n.uint32());
              break;
            }
            case 10: {
              a.topLeft = d.dot.v3.Point.decode(n, n.uint32());
              break;
            }
            case 11: {
              a.topRight = d.dot.v3.Point.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof S || (n = new S(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.brightness != null && n.hasOwnProperty("brightness") && typeof n.brightness != "number")
          return "brightness: number expected";
        if (n.sharpness != null && n.hasOwnProperty("sharpness") && typeof n.sharpness != "number")
          return "sharpness: number expected";
        if (n.hotspots != null && n.hasOwnProperty("hotspots") && typeof n.hotspots != "number")
          return "hotspots: number expected";
        if (n.confidence != null && n.hasOwnProperty("confidence") && typeof n.confidence != "number")
          return "confidence: number expected";
        if (n.faceSize != null && n.hasOwnProperty("faceSize") && typeof n.faceSize != "number")
          return "faceSize: number expected";
        if (n.faceCenter != null && n.hasOwnProperty("faceCenter")) {
          let i = d.dot.v3.Point.verify(n.faceCenter);
          if (i)
            return "faceCenter." + i;
        }
        if (n.smallestEdge != null && n.hasOwnProperty("smallestEdge") && typeof n.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (n.bottomLeft != null && n.hasOwnProperty("bottomLeft")) {
          let i = d.dot.v3.Point.verify(n.bottomLeft);
          if (i)
            return "bottomLeft." + i;
        }
        if (n.bottomRight != null && n.hasOwnProperty("bottomRight")) {
          let i = d.dot.v3.Point.verify(n.bottomRight);
          if (i)
            return "bottomRight." + i;
        }
        if (n.topLeft != null && n.hasOwnProperty("topLeft")) {
          let i = d.dot.v3.Point.verify(n.topLeft);
          if (i)
            return "topLeft." + i;
        }
        if (n.topRight != null && n.hasOwnProperty("topRight")) {
          let i = d.dot.v3.Point.verify(n.topRight);
          if (i)
            return "topRight." + i;
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.DetectedObject)
          return n;
        let i = new d.dot.v3.DetectedObject();
        if (n.brightness != null && (i.brightness = Number(n.brightness)), n.sharpness != null && (i.sharpness = Number(n.sharpness)), n.hotspots != null && (i.hotspots = Number(n.hotspots)), n.confidence != null && (i.confidence = Number(n.confidence)), n.faceSize != null && (i.faceSize = Number(n.faceSize)), n.faceCenter != null) {
          if (typeof n.faceCenter != "object")
            throw TypeError(".dot.v3.DetectedObject.faceCenter: object expected");
          i.faceCenter = d.dot.v3.Point.fromObject(n.faceCenter);
        }
        if (n.smallestEdge != null && (i.smallestEdge = Number(n.smallestEdge)), n.bottomLeft != null) {
          if (typeof n.bottomLeft != "object")
            throw TypeError(".dot.v3.DetectedObject.bottomLeft: object expected");
          i.bottomLeft = d.dot.v3.Point.fromObject(n.bottomLeft);
        }
        if (n.bottomRight != null) {
          if (typeof n.bottomRight != "object")
            throw TypeError(".dot.v3.DetectedObject.bottomRight: object expected");
          i.bottomRight = d.dot.v3.Point.fromObject(n.bottomRight);
        }
        if (n.topLeft != null) {
          if (typeof n.topLeft != "object")
            throw TypeError(".dot.v3.DetectedObject.topLeft: object expected");
          i.topLeft = d.dot.v3.Point.fromObject(n.topLeft);
        }
        if (n.topRight != null) {
          if (typeof n.topRight != "object")
            throw TypeError(".dot.v3.DetectedObject.topRight: object expected");
          i.topRight = d.dot.v3.Point.fromObject(n.topRight);
        }
        return i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return i.defaults && (r.brightness = 0, r.sharpness = 0, r.hotspots = 0, r.confidence = 0, r.faceSize = 0, r.faceCenter = null, r.smallestEdge = 0, r.bottomLeft = null, r.bottomRight = null, r.topLeft = null, r.topRight = null), n.brightness != null && n.hasOwnProperty("brightness") && (r.brightness = i.json && !isFinite(n.brightness) ? String(n.brightness) : n.brightness), n.sharpness != null && n.hasOwnProperty("sharpness") && (r.sharpness = i.json && !isFinite(n.sharpness) ? String(n.sharpness) : n.sharpness), n.hotspots != null && n.hasOwnProperty("hotspots") && (r.hotspots = i.json && !isFinite(n.hotspots) ? String(n.hotspots) : n.hotspots), n.confidence != null && n.hasOwnProperty("confidence") && (r.confidence = i.json && !isFinite(n.confidence) ? String(n.confidence) : n.confidence), n.faceSize != null && n.hasOwnProperty("faceSize") && (r.faceSize = i.json && !isFinite(n.faceSize) ? String(n.faceSize) : n.faceSize), n.faceCenter != null && n.hasOwnProperty("faceCenter") && (r.faceCenter = d.dot.v3.Point.toObject(n.faceCenter, i)), n.smallestEdge != null && n.hasOwnProperty("smallestEdge") && (r.smallestEdge = i.json && !isFinite(n.smallestEdge) ? String(n.smallestEdge) : n.smallestEdge), n.bottomLeft != null && n.hasOwnProperty("bottomLeft") && (r.bottomLeft = d.dot.v3.Point.toObject(n.bottomLeft, i)), n.bottomRight != null && n.hasOwnProperty("bottomRight") && (r.bottomRight = d.dot.v3.Point.toObject(n.bottomRight, i)), n.topLeft != null && n.hasOwnProperty("topLeft") && (r.topLeft = d.dot.v3.Point.toObject(n.topLeft, i)), n.topRight != null && n.hasOwnProperty("topRight") && (r.topRight = d.dot.v3.Point.toObject(n.topRight, i)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.DetectedObject";
      }, e;
    }(), o.Point = function() {
      function e(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.x = 0, e.prototype.y = 0, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        return i || (i = de.create()), n.x != null && Object.hasOwnProperty.call(n, "x") && i.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(n.x), n.y != null && Object.hasOwnProperty.call(n, "y") && i.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(n.y), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof S || (n = S.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.Point();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.x = n.float();
              break;
            }
            case 2: {
              a.y = n.float();
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof S || (n = new S(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        return typeof n != "object" || n === null ? "object expected" : n.x != null && n.hasOwnProperty("x") && typeof n.x != "number" ? "x: number expected" : n.y != null && n.hasOwnProperty("y") && typeof n.y != "number" ? "y: number expected" : null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.Point)
          return n;
        let i = new d.dot.v3.Point();
        return n.x != null && (i.x = Number(n.x)), n.y != null && (i.y = Number(n.y)), i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return i.defaults && (r.x = 0, r.y = 0), n.x != null && n.hasOwnProperty("x") && (r.x = i.json && !isFinite(n.x) ? String(n.x) : n.x), n.y != null && n.hasOwnProperty("y") && (r.y = i.json && !isFinite(n.y) ? String(n.y) : n.y), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.Point";
      }, e;
    }(), o.FaceContent = function() {
      function e(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.image = null, e.prototype.metadata = null, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        return i || (i = de.create()), n.image != null && Object.hasOwnProperty.call(n, "image") && d.dot.Image.encode(n.image, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.metadata != null && Object.hasOwnProperty.call(n, "metadata") && d.dot.v3.Metadata.encode(n.metadata, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof S || (n = S.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.FaceContent();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.image = d.dot.Image.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.metadata = d.dot.v3.Metadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof S || (n = new S(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.image != null && n.hasOwnProperty("image")) {
          let i = d.dot.Image.verify(n.image);
          if (i)
            return "image." + i;
        }
        if (n.metadata != null && n.hasOwnProperty("metadata")) {
          let i = d.dot.v3.Metadata.verify(n.metadata);
          if (i)
            return "metadata." + i;
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.FaceContent)
          return n;
        let i = new d.dot.v3.FaceContent();
        if (n.image != null) {
          if (typeof n.image != "object")
            throw TypeError(".dot.v3.FaceContent.image: object expected");
          i.image = d.dot.Image.fromObject(n.image);
        }
        if (n.metadata != null) {
          if (typeof n.metadata != "object")
            throw TypeError(".dot.v3.FaceContent.metadata: object expected");
          i.metadata = d.dot.v3.Metadata.fromObject(n.metadata);
        }
        return i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return i.defaults && (r.image = null, r.metadata = null), n.image != null && n.hasOwnProperty("image") && (r.image = d.dot.Image.toObject(n.image, i)), n.metadata != null && n.hasOwnProperty("metadata") && (r.metadata = d.dot.v3.Metadata.toObject(n.metadata, i)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.FaceContent";
      }, e;
    }(), o.DocumentContent = function() {
      function e(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.image = null, e.prototype.metadata = null, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        return i || (i = de.create()), n.image != null && Object.hasOwnProperty.call(n, "image") && d.dot.Image.encode(n.image, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.metadata != null && Object.hasOwnProperty.call(n, "metadata") && d.dot.v3.Metadata.encode(n.metadata, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof S || (n = S.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.DocumentContent();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.image = d.dot.Image.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.metadata = d.dot.v3.Metadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof S || (n = new S(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.image != null && n.hasOwnProperty("image")) {
          let i = d.dot.Image.verify(n.image);
          if (i)
            return "image." + i;
        }
        if (n.metadata != null && n.hasOwnProperty("metadata")) {
          let i = d.dot.v3.Metadata.verify(n.metadata);
          if (i)
            return "metadata." + i;
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.DocumentContent)
          return n;
        let i = new d.dot.v3.DocumentContent();
        if (n.image != null) {
          if (typeof n.image != "object")
            throw TypeError(".dot.v3.DocumentContent.image: object expected");
          i.image = d.dot.Image.fromObject(n.image);
        }
        if (n.metadata != null) {
          if (typeof n.metadata != "object")
            throw TypeError(".dot.v3.DocumentContent.metadata: object expected");
          i.metadata = d.dot.v3.Metadata.fromObject(n.metadata);
        }
        return i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return i.defaults && (r.image = null, r.metadata = null), n.image != null && n.hasOwnProperty("image") && (r.image = d.dot.Image.toObject(n.image, i)), n.metadata != null && n.hasOwnProperty("metadata") && (r.metadata = d.dot.v3.Metadata.toObject(n.metadata, i)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.DocumentContent";
      }, e;
    }(), o.Blob = function() {
      function e(i) {
        if (i)
          for (let r = Object.keys(i), a = 0; a < r.length; ++a)
            i[r[a]] != null && (this[r[a]] = i[r[a]]);
      }
      e.prototype.documentContent = null, e.prototype.faceContent = null, e.prototype.magnifeyeLivenessContent = null, e.prototype.smileLivenessContent = null;
      let n;
      return Object.defineProperty(e.prototype, "blob", {
        get: h.oneOfGetter(n = ["documentContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent"]),
        set: h.oneOfSetter(n)
      }), e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, r) {
        return r || (r = de.create()), i.documentContent != null && Object.hasOwnProperty.call(i, "documentContent") && d.dot.v3.DocumentContent.encode(i.documentContent, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), i.faceContent != null && Object.hasOwnProperty.call(i, "faceContent") && d.dot.v3.FaceContent.encode(i.faceContent, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(i, "magnifeyeLivenessContent") && d.dot.v3.MagnifEyeLivenessContent.encode(i.magnifeyeLivenessContent, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), i.smileLivenessContent != null && Object.hasOwnProperty.call(i, "smileLivenessContent") && d.dot.v3.SmileLivenessContent.encode(i.smileLivenessContent, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), r;
      }, e.encodeDelimited = function(i, r) {
        return this.encode(i, r).ldelim();
      }, e.decode = function(i, r) {
        i instanceof S || (i = S.create(i));
        let a = r === void 0 ? i.len : i.pos + r, s = new d.dot.v3.Blob();
        for (; i.pos < a; ) {
          let g = i.uint32();
          switch (g >>> 3) {
            case 1: {
              s.documentContent = d.dot.v3.DocumentContent.decode(i, i.uint32());
              break;
            }
            case 2: {
              s.faceContent = d.dot.v3.FaceContent.decode(i, i.uint32());
              break;
            }
            case 3: {
              s.magnifeyeLivenessContent = d.dot.v3.MagnifEyeLivenessContent.decode(i, i.uint32());
              break;
            }
            case 4: {
              s.smileLivenessContent = d.dot.v3.SmileLivenessContent.decode(i, i.uint32());
              break;
            }
            default:
              i.skipType(g & 7);
              break;
          }
        }
        return s;
      }, e.decodeDelimited = function(i) {
        return i instanceof S || (i = new S(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        if (typeof i != "object" || i === null)
          return "object expected";
        let r = {};
        if (i.documentContent != null && i.hasOwnProperty("documentContent")) {
          r.blob = 1;
          {
            let a = d.dot.v3.DocumentContent.verify(i.documentContent);
            if (a)
              return "documentContent." + a;
          }
        }
        if (i.faceContent != null && i.hasOwnProperty("faceContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = d.dot.v3.FaceContent.verify(i.faceContent);
            if (a)
              return "faceContent." + a;
          }
        }
        if (i.magnifeyeLivenessContent != null && i.hasOwnProperty("magnifeyeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = d.dot.v3.MagnifEyeLivenessContent.verify(i.magnifeyeLivenessContent);
            if (a)
              return "magnifeyeLivenessContent." + a;
          }
        }
        if (i.smileLivenessContent != null && i.hasOwnProperty("smileLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = d.dot.v3.SmileLivenessContent.verify(i.smileLivenessContent);
            if (a)
              return "smileLivenessContent." + a;
          }
        }
        return null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.Blob)
          return i;
        let r = new d.dot.v3.Blob();
        if (i.documentContent != null) {
          if (typeof i.documentContent != "object")
            throw TypeError(".dot.v3.Blob.documentContent: object expected");
          r.documentContent = d.dot.v3.DocumentContent.fromObject(i.documentContent);
        }
        if (i.faceContent != null) {
          if (typeof i.faceContent != "object")
            throw TypeError(".dot.v3.Blob.faceContent: object expected");
          r.faceContent = d.dot.v3.FaceContent.fromObject(i.faceContent);
        }
        if (i.magnifeyeLivenessContent != null) {
          if (typeof i.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v3.Blob.magnifeyeLivenessContent: object expected");
          r.magnifeyeLivenessContent = d.dot.v3.MagnifEyeLivenessContent.fromObject(i.magnifeyeLivenessContent);
        }
        if (i.smileLivenessContent != null) {
          if (typeof i.smileLivenessContent != "object")
            throw TypeError(".dot.v3.Blob.smileLivenessContent: object expected");
          r.smileLivenessContent = d.dot.v3.SmileLivenessContent.fromObject(i.smileLivenessContent);
        }
        return r;
      }, e.toObject = function(i, r) {
        r || (r = {});
        let a = {};
        return i.documentContent != null && i.hasOwnProperty("documentContent") && (a.documentContent = d.dot.v3.DocumentContent.toObject(i.documentContent, r), r.oneofs && (a.blob = "documentContent")), i.faceContent != null && i.hasOwnProperty("faceContent") && (a.faceContent = d.dot.v3.FaceContent.toObject(i.faceContent, r), r.oneofs && (a.blob = "faceContent")), i.magnifeyeLivenessContent != null && i.hasOwnProperty("magnifeyeLivenessContent") && (a.magnifeyeLivenessContent = d.dot.v3.MagnifEyeLivenessContent.toObject(i.magnifeyeLivenessContent, r), r.oneofs && (a.blob = "magnifeyeLivenessContent")), i.smileLivenessContent != null && i.hasOwnProperty("smileLivenessContent") && (a.smileLivenessContent = d.dot.v3.SmileLivenessContent.toObject(i.smileLivenessContent, r), r.oneofs && (a.blob = "smileLivenessContent")), a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.Blob";
      }, e;
    }(), o.SmileLivenessContent = function() {
      function e(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.neutralExpressionFaceImage = null, e.prototype.smileExpressionFaceImage = null, e.prototype.metadata = null, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        return i || (i = de.create()), n.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(n, "neutralExpressionFaceImage") && d.dot.Image.encode(n.neutralExpressionFaceImage, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.smileExpressionFaceImage != null && Object.hasOwnProperty.call(n, "smileExpressionFaceImage") && d.dot.Image.encode(n.smileExpressionFaceImage, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.metadata != null && Object.hasOwnProperty.call(n, "metadata") && d.dot.v3.Metadata.encode(n.metadata, i.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof S || (n = S.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.SmileLivenessContent();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.neutralExpressionFaceImage = d.dot.Image.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.smileExpressionFaceImage = d.dot.Image.decode(n, n.uint32());
              break;
            }
            case 3: {
              a.metadata = d.dot.v3.Metadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof S || (n = new S(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.neutralExpressionFaceImage != null && n.hasOwnProperty("neutralExpressionFaceImage")) {
          let i = d.dot.Image.verify(n.neutralExpressionFaceImage);
          if (i)
            return "neutralExpressionFaceImage." + i;
        }
        if (n.smileExpressionFaceImage != null && n.hasOwnProperty("smileExpressionFaceImage")) {
          let i = d.dot.Image.verify(n.smileExpressionFaceImage);
          if (i)
            return "smileExpressionFaceImage." + i;
        }
        if (n.metadata != null && n.hasOwnProperty("metadata")) {
          let i = d.dot.v3.Metadata.verify(n.metadata);
          if (i)
            return "metadata." + i;
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.SmileLivenessContent)
          return n;
        let i = new d.dot.v3.SmileLivenessContent();
        if (n.neutralExpressionFaceImage != null) {
          if (typeof n.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v3.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          i.neutralExpressionFaceImage = d.dot.Image.fromObject(n.neutralExpressionFaceImage);
        }
        if (n.smileExpressionFaceImage != null) {
          if (typeof n.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v3.SmileLivenessContent.smileExpressionFaceImage: object expected");
          i.smileExpressionFaceImage = d.dot.Image.fromObject(n.smileExpressionFaceImage);
        }
        if (n.metadata != null) {
          if (typeof n.metadata != "object")
            throw TypeError(".dot.v3.SmileLivenessContent.metadata: object expected");
          i.metadata = d.dot.v3.Metadata.fromObject(n.metadata);
        }
        return i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return i.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), n.neutralExpressionFaceImage != null && n.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = d.dot.Image.toObject(n.neutralExpressionFaceImage, i)), n.smileExpressionFaceImage != null && n.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = d.dot.Image.toObject(n.smileExpressionFaceImage, i)), n.metadata != null && n.hasOwnProperty("metadata") && (r.metadata = d.dot.v3.Metadata.toObject(n.metadata, i)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.SmileLivenessContent";
      }, e;
    }(), o;
  }(), t.Image = function() {
    function o(e) {
      if (e)
        for (let n = Object.keys(e), i = 0; i < n.length; ++i)
          e[n[i]] != null && (this[n[i]] = e[n[i]]);
    }
    return o.prototype.bytes = h.newBuffer([]), o.create = function(e) {
      return new o(e);
    }, o.encode = function(e, n) {
      return n || (n = de.create()), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && n.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(e.bytes), n;
    }, o.encodeDelimited = function(e, n) {
      return this.encode(e, n).ldelim();
    }, o.decode = function(e, n) {
      e instanceof S || (e = S.create(e));
      let i = n === void 0 ? e.len : e.pos + n, r = new d.dot.Image();
      for (; e.pos < i; ) {
        let a = e.uint32();
        switch (a >>> 3) {
          case 1: {
            r.bytes = e.bytes();
            break;
          }
          default:
            e.skipType(a & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(e) {
      return e instanceof S || (e = new S(e)), this.decode(e, e.uint32());
    }, o.verify = function(e) {
      return typeof e != "object" || e === null ? "object expected" : e.bytes != null && e.hasOwnProperty("bytes") && !(e.bytes && typeof e.bytes.length == "number" || h.isString(e.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(e) {
      if (e instanceof d.dot.Image)
        return e;
      let n = new d.dot.Image();
      return e.bytes != null && (typeof e.bytes == "string" ? h.base64.decode(e.bytes, n.bytes = h.newBuffer(h.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (n.bytes = e.bytes)), n;
    }, o.toObject = function(e, n) {
      n || (n = {});
      let i = {};
      return n.defaults && (n.bytes === String ? i.bytes = "" : (i.bytes = [], n.bytes !== Array && (i.bytes = h.newBuffer(i.bytes)))), e.bytes != null && e.hasOwnProperty("bytes") && (i.bytes = n.bytes === String ? h.base64.encode(e.bytes, 0, e.bytes.length) : n.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes), i;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ie.util.toJSONOptions);
    }, o.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Image";
    }, o;
  }(), t.Int32List = function() {
    function o(e) {
      if (this.items = [], e)
        for (let n = Object.keys(e), i = 0; i < n.length; ++i)
          e[n[i]] != null && (this[n[i]] = e[n[i]]);
    }
    return o.prototype.items = h.emptyArray, o.create = function(e) {
      return new o(e);
    }, o.encode = function(e, n) {
      if (n || (n = de.create()), e.items != null && e.items.length) {
        n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let i = 0; i < e.items.length; ++i)
          n.int32(e.items[i]);
        n.ldelim();
      }
      return n;
    }, o.encodeDelimited = function(e, n) {
      return this.encode(e, n).ldelim();
    }, o.decode = function(e, n) {
      e instanceof S || (e = S.create(e));
      let i = n === void 0 ? e.len : e.pos + n, r = new d.dot.Int32List();
      for (; e.pos < i; ) {
        let a = e.uint32();
        switch (a >>> 3) {
          case 1: {
            if (r.items && r.items.length || (r.items = []), (a & 7) === 2) {
              let s = e.uint32() + e.pos;
              for (; e.pos < s; )
                r.items.push(e.int32());
            } else
              r.items.push(e.int32());
            break;
          }
          default:
            e.skipType(a & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(e) {
      return e instanceof S || (e = new S(e)), this.decode(e, e.uint32());
    }, o.verify = function(e) {
      if (typeof e != "object" || e === null)
        return "object expected";
      if (e.items != null && e.hasOwnProperty("items")) {
        if (!Array.isArray(e.items))
          return "items: array expected";
        for (let n = 0; n < e.items.length; ++n)
          if (!h.isInteger(e.items[n]))
            return "items: integer[] expected";
      }
      return null;
    }, o.fromObject = function(e) {
      if (e instanceof d.dot.Int32List)
        return e;
      let n = new d.dot.Int32List();
      if (e.items) {
        if (!Array.isArray(e.items))
          throw TypeError(".dot.Int32List.items: array expected");
        n.items = [];
        for (let i = 0; i < e.items.length; ++i)
          n.items[i] = e.items[i] | 0;
      }
      return n;
    }, o.toObject = function(e, n) {
      n || (n = {});
      let i = {};
      if ((n.arrays || n.defaults) && (i.items = []), e.items && e.items.length) {
        i.items = [];
        for (let r = 0; r < e.items.length; ++r)
          i.items[r] = e.items[r];
      }
      return i;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ie.util.toJSONOptions);
    }, o.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Int32List";
    }, o;
  }(), t.Platform = function() {
    const o = {}, e = Object.create(o);
    return e[o[0] = "WEB"] = 0, e[o[1] = "ANDROID"] = 1, e[o[2] = "IOS"] = 2, e;
  }(), t;
})();
async function Ml(t) {
  const { Image: o } = gn, e = await t.arrayBuffer(), n = new Uint8Array(e), i = {};
  i.bytes = n;
  const r = o.verify(i);
  if (r)
    throw Error(r);
  const a = {};
  return a.bytes = n, o.create(a);
}
async function Ul(t) {
  const { v3: { Metadata: o } } = gn, e = { ...t };
  e.platform = gn.Platform.WEB;
  const n = e, i = o.verify(n);
  if (i)
    throw Error(i);
  return o.create(n);
}
async function Jl(t) {
  const { Content: o } = gn, { iv: e, key: n, message: i } = await xl(t), r = { token: new Uint8Array(n), iv: e, schemaVersion: zx, bytes: new Uint8Array(i) }, a = o.verify(r);
  if (a)
    throw Error(a);
  const s = o.create(r);
  return o.encode(s).finish();
}
function Ql({ documentContent: t, faceContent: o, magnifeyeLivenessContent: e, smileLivenessContent: n }) {
  const { Blob: i } = gn.v3, r = {};
  r.documentContent = t, r.faceContent = o, r.magnifeyeLivenessContent = e, r.smileLivenessContent = n;
  const a = r, s = i.verify(a);
  if (s)
    throw Error(s);
  const g = i.create(a);
  return i.encode(g).finish();
}
async function zl(t, o) {
  const { DocumentContent: e } = gn.v3, n = await Ml(t), i = await Ul(o), r = {};
  r.image = n, r.metadata = i;
  const a = r, s = e.verify(a);
  if (s)
    throw Error(s);
  const g = e.create(a), I = {};
  return I.documentContent = g, Ql(I);
}
async function $l(t, o) {
  const e = await zl(t, o);
  return Jl(e);
}
const _l = () => {
  const {
    analytics: t,
    appState: o,
    appTier: e,
    freemiumOverlayState: n,
    handleAppStateChange: i,
    handleError: r,
    isLicenseValidated: a
  } = Ui(), {
    documentCameraOptions: s
  } = fs(), {
    cameraFacing: g,
    onPhotoTaken: I,
    sessionToken: C,
    thresholds: u,
    wasmDirectoryPath: p
  } = s, A = Pt(), v = Ss(void 0), {
    cameraHandler: B,
    cameraResolution: K,
    onCameraResolutionChange: G
  } = jI(A, g), {
    controller: w
  } = Gl(u, p), {
    shouldMirror: E
  } = XI($e.CONTROL, B);
  DI($e.CAMERA_PROPS_CHANGED, {
    cameraResolution: K,
    shouldMirror: E
  }), Ae(() => () => {
    On.getInstance().restart();
  }, []), Ae(() => {
    B != null && B.videoTrack && (w != null && w.isDetectorInitialized) && a && i(Ke.RUNNING);
  }, [B == null ? void 0 : B.videoTrack, w == null ? void 0 : w.isDetectorInitialized, i, a]), Ae(() => {
    if (o !== Ke.RUNNING)
      return;
    if (!B || !w)
      throw new te("Cannot start detection");
    let ne = 0, _ = !1, re = 0;
    const We = new Cs(30);
    w.clearImagesForDuplicateDetection();
    const ue = async (Se, se, Ce) => {
      const tt = {
        width: Se.width,
        height: Se.height
      }, pe = await oI(Se), ye = {
        ...await B.getCameraProperties(),
        detectionRecord: Ce,
        hashedDetectedImages: w.getImagesForDuplicateDetection()
      }, ce = await $l(pe, {
        sessionToken: C,
        web: ye
      }), he = {
        detection: se,
        imageResolution: tt
      };
      NI(ps.DOCUMENT, w.getCandidateSelectionImages()), I({
        image: pe,
        data: he
      }, ce);
    };
    return (async () => {
      const Se = Date.now();
      for (; B.checkIfStreamIsRunning() && !_; ) {
        if (kI(ne, re)) {
          const {
            detection: he,
            image: Me
          } = w.getBestImage() || {}, nt = w.getDetectionRecord();
          if (Me && he) {
            const it = Date.now(), ve = II(We);
            t == null || t.trackCaptureProcess({
              documentDetection: he,
              imageResolution: {
                width: Me.width,
                height: Me.height
              },
              deviceName: await B.getDeviceName(),
              averageFps: ve,
              captureProcessDurationInMs: it - Se,
              facingMode: B.getCameraSettings().facingMode,
              instructionSet: await w.getInstructionSet()
            }), await ue(Me, he, nt), i(Ke.WAITING), w.restart();
          } else
            r(new te("Something went wrong during capturing an image"));
          return;
        }
        const se = Date.now(), Ce = B.takePhoto(), tt = {
          width: Ce.width,
          height: Ce.height
        };
        let pe;
        try {
          pe = await w.processImage(Ce);
        } catch (he) {
          he instanceof Error && r(te.fromCameraError(he));
          return;
        }
        const ye = Date.now() - se, Ze = xs(1e3 / ye);
        We.pushFixed(Ze);
        const ce = {
          document: pe.detectedDocument,
          detectionTime: ye,
          fps: Ze,
          resolution: tt,
          instructionCode: pe.instructionCode,
          samVersion: w.samVersion,
          invalidValidators: pe.invalidValidators
        };
        v.value = ce, pe.isInCandidateSelection && (ne === 0 && (ne = performance.now()), re++), G(tt), await Fo(Math.max(Ma.max - ye, Ma.min));
      }
    })(), () => {
      _ = !0;
    };
  }, [o, B, w, s, i, r, I, u.confidenceThreshold, G, C, v, t]);
  const $ = n !== Gi.HIDDEN && e !== Mo.PREMIUM && K, X = n === Gi.VISIBLE, U = K && a && o === Ke.RUNNING, W = a;
  return H(Xe, {
    children: [$ && H(il, {
      fullOverlay: X,
      resolution: K
    }), H(Zx, {
      ref: A,
      $isImageMirror: E,
      $isVisible: W,
      autoPlay: !0,
      muted: !0,
      playsInline: !0
    }), U && H(_I, {
      appTier: e,
      cameraResolution: K,
      detectionDetails: v,
      isImageMirror: E
    })]
  });
}, ql = ({
  ...t
}) => H(As, {
  cameraOptions: t,
  children: H(_l, {})
});
function eu({ licenseResult: t }) {
  return t != null && t.isValid ? Mo.PREMIUM : Mo.FREEMIUM;
}
function tu({ analytics: t, licenseResult: o }) {
  return o !== void 0 && !o.isAnalyticsDisabled ? t : void (9938 + -9938 * 1);
}
function nu({ analytics: t, appKey: o, appTier: e, licenseResult: n, licenseValidator: i }) {
  const r = {};
  r.analytics = t, r.licenseResult = n;
  const a = tu(r);
  return Ae(() => {
    a && a.init(o);
  }, [a, o]), Ae(() => {
    n && (console.info("Analytics is " + (n.isAnalyticsDisabled ? "disabled" : "enabled")), a && a.sendLicenseResultData(e, i.getCustomerName()));
  }, [a, i, n, e]), Ae(() => {
    if (a)
      return window.addEventListener("beforeunload", a.endSession), () => {
        a.endSession(), window.removeEventListener("beforeunload", a.endSession);
      };
  }, [a]), a;
}
function iu({ licensePath: t, licenseValidator: o, wasmDirectoryPath: e }) {
  const [n, i] = Le(), r = n !== void (1 * 2239 + 2340 + 4579 * -1);
  Ae(() => {
    async function s() {
      await o.init(e, t), i(o.getLicenseResult());
    }
    s();
  }, [o, e, t, i]);
  const a = {};
  return a.licenseResult = n, a.isLicenseValidated = r, a;
}
function ou({ analytics: t, analyticsAppKey: o, initAppState: e, licensePath: n, licenseValidator: i, wasmDirectoryPath: r }) {
  const [a, s] = Le(e), [g, I] = Le(), [C, u] = Le(!1), p = {};
  p.licenseValidator = i, p.wasmDirectoryPath = r, p.licensePath = n;
  const { isLicenseValidated: A, licenseResult: v } = iu(p), B = {};
  B.licenseResult = v;
  const K = eu(B), G = {};
  G.analytics = t, G.appKey = o, G.appTier = K, G.licenseResult = v, G.licenseValidator = i;
  const w = nu(G), E = {};
  return E.appTier = K, E.appState = a, E.setAppState = s, E.error = g, E.setError = I, E.isCameraReady = C, E.setIsCameraReady = u, E.licenseResult = v, E.isLicenseValidated = A, E.analytics = w, E;
}
function ru() {
  const [t] = window.crypto.getRandomValues(new Uint32Array(1));
  return t.toString(-6217 + -1913 * -2 + 2407);
}
function au() {
  const t = sessionStorage.getItem("dot-user-id");
  if (t)
    return t;
  const o = ru();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function su(t, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : t;
}
function gu(t) {
  return t > -75 * -2 + -68 * -141 + 1 * -9678 ? ">1m" : t > -5856 + -843 * -7 ? ">45" : t > -196 * 19 + 1 * 313 + 1147 * 3 ? ">30" : "" + t;
}
const cu = (t) => Math.round(t / 500) * 500 / (615 * 5 + -3413 + 1338), hn = (t) => t ? t <= 1 ? Math.round(t * (-8345 * -1 + 1046 * 9 + -17739)) / (1 * -7217 + 49 * -84 + 11353) : Math.round(t / (11196 + -5573 * 2)) * (2945 + -2895 * 1) : 4777 * -1 + -6800 + 11577, xu = (t) => Math.round(t * (-12021 + -12023 * -1)) / (8 * -259 + 7317 + -5243);
function Iu(t) {
  return t !== Ke.RUNNING ? Gi.VISIBLE : Gi.VISIBLE_WITH_MASK;
}
var Js = ((t) => (t.AUTO_CAPTURE = "auto-capture", t))(Js || {});
class lu {
  constructor() {
    D(this, "appKey", "");
    D(this, "deviceId", "");
  }
  async countlyFetch(o) {
    if (!this.appKey || !this.deviceId)
      return;
    const e = {};
    e.Accept = "application/json";
    const n = {};
    n.method = "GET", n.headers = e;
    const i = n, r = "https://innovatrics.count.ly/i?", a = {};
    a.app_key = this.appKey, a.device_id = this.deviceId;
    const s = ni(a);
    await fetch("" + r + s + "&" + o, i);
  }
  async init(o, e) {
    if (!e)
      return;
    this.appKey = e, this.deviceId = o;
    const n = { _app_version: ls() }, i = { organization: us(window.location.href) }, r = ni({ begin_session: "1", metrics: JSON.stringify(n), user_details: JSON.stringify(i) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const e = ni(o);
    await this.countlyFetch(e);
  }
  async sendAutoCaptureEvent(o, e) {
    const n = {};
    n.key = Js.AUTO_CAPTURE, n.count = 1, n.dur = e, n.segmentation = o;
    const i = [n], r = ni({ events: JSON.stringify(i) });
    await this.countlyFetch(r);
  }
}
const ai = new lu();
class uu {
  constructor() {
    D(this, "countly", ai);
  }
  createSegmentation(o) {
    return { appVersion: ls(), ...o };
  }
  init(o) {
    if (ZI())
      return;
    const e = au();
    ai.init(e, o);
  }
  endSession() {
    ai.endSession();
  }
  sendLicenseResultData(o, e) {
    const n = {};
    n.licenseTier = o, n.customer = e;
    const i = this.createSegmentation(n);
    ai.sendAutoCaptureEvent(i);
  }
}
class Cu extends uu {
  trackCaptureProcess({ averageFps: o, captureProcessDurationInMs: e, deviceName: n, documentDetection: i, facingMode: r, imageResolution: a, instructionSet: s }) {
    if (!i)
      return;
    const g = cu(e), I = this.createSegmentation({ hotspots: hn(i.hotspots), brightness: hn(i.brightness), confidence: hn(i.confidence), sharpness: hn(i.sharpness), smallestEdge: hn(i.smallestEdge), camera: su(n, r), imageResolution: a.width + "x" + a.height, averageFps: xu(o), captureTime: gu(g), instructionSet: s });
    this.countly.sendAutoCaptureEvent(I, g);
  }
}
const du = new Cu();
let j;
const xt = new Array(-8390 + -2739 * -2 + 3040).fill(void 0);
xt.push(void 0, null, !0, !1);
function ir(t) {
  return xt[t];
}
let ut = -169 + -169 * -1, wn = null;
function bi() {
  return (wn === null || wn.byteLength === 1737 * 1 + 2831 * -1 + 1094) && (wn = new Uint8Array(j.memory.buffer)), wn;
}
const yi = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, fu = typeof yi.encodeInto == "function" ? function(t, o) {
  return yi.encodeInto(t, o);
} : function(t, o) {
  const e = yi.encode(t);
  o.set(e);
  const n = {};
  return n.read = t.length, n.written = e.length, n;
};
function Ri(t, o, e) {
  if (e === void 0) {
    const s = yi.encode(t), g = o(s.length, -1 * -904 + 3 * -1517 + 3648) >>> -1115 + 5281 * -1 + 6396;
    return bi().subarray(g, g + s.length).set(s), ut = s.length, g;
  }
  let n = t.length, i = o(n, -6719 * 1 + 26 * -345 + 15690) >>> -9051 + -5 * 793 + 13016;
  const r = bi();
  let a = -1 * 8657 + -5022 + 13679;
  for (; a < n; a++) {
    const s = t.charCodeAt(a);
    if (s > 5918 + 3145 * 1 + -8936)
      break;
    r[i + a] = s;
  }
  if (a !== n) {
    a !== -1 * 2086 + -5912 * 1 + 7998 && (t = t.slice(a)), i = e(i, n, n = a + t.length * (-187 * -5 + -1067 * -3 + -1 * 4133), -9681 + -1 * -5569 + 4113) >>> -3 * -963 + -193 * 29 + 2708;
    const s = bi().subarray(i + a, i + n), g = fu(t, s);
    a += g.written;
  }
  return ut = a, i;
}
function Qs(t) {
  return t == null;
}
let Bn = null;
function mt() {
  return (Bn === null || Bn.byteLength === 0) && (Bn = new Int32Array(j.memory.buffer)), Bn;
}
let Kn = xt.length;
function Au(t) {
  t < 9 * -199 + -2914 * -3 + -6819 || (xt[t] = Kn, Kn = t);
}
function zs(t) {
  const o = ir(t);
  return Au(t), o;
}
const or = {};
or.ignoreBOM = !0, or.fatal = !0;
const $s = typeof TextDecoder < "u" ? new TextDecoder("utf-8", or) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && $s.decode();
function rr(t, o) {
  return t = t >>> 2 * -4931 + -3231 + 13093, $s.decode(bi().subarray(t, t + o));
}
function ar(t) {
  Kn === xt.length && xt.push(xt.length + (-62 * -59 + 2 * -4957 + -6257 * -1));
  const o = Kn;
  return Kn = xt[o], xt[o] = t, o;
}
let Sn = null;
function _s() {
  return (Sn === null || Sn.byteLength === 29 * 310 + 1051 * -3 + 449 * -13) && (Sn = new Uint32Array(j.memory.buffer)), Sn;
}
function C0(t, o) {
  const e = o(t.length * 4, 4) >>> 0, n = _s();
  for (let i = -1043 * 1 + 1 * -1291 + 2334; i < t.length; i++)
    n[e / (5880 + 2 * 2426 + -10728) + i] = ar(t[i]);
  return ut = t.length, e;
}
function d0(t, o) {
  t = t >>> 2 * -1681 + 311 * -15 + 8027;
  const e = _s(), n = e.subarray(t / (17 * -419 + -1 * -258 + 6869), t / (29 * 344 + -5494 + -4478) + o), i = [];
  for (let r = 0; r < n.length; r++)
    i.push(zs(n[r]));
  return i;
}
function pu(t, o) {
  const e = Ri(t, j.__wbindgen_malloc, j.__wbindgen_realloc), n = ut, i = Ri(o, j.__wbindgen_malloc, j.__wbindgen_realloc), r = ut, a = j.validate_license(e, n, i, r);
  return Or.__wrap(a);
}
class Or {
  static __wrap(o) {
    o = o >>> 2358 + -225 * 39 + 6417 * 1;
    const e = Object.create(Or.prototype);
    return e.__wbg_ptr = o, e;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = 4275 + 57 * -75, o;
  }
  free() {
    const o = this.__destroy_into_raw();
    j.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, e, n, i) {
    var r = Qs(e) ? 0 : Ri(e, j.__wbindgen_malloc, j.__wbindgen_realloc), a = ut;
    const s = C0(n, j.__wbindgen_malloc), g = ut, I = C0(i, j.__wbindgen_malloc), C = ut, u = j.licensevalidationresult_new(o, r, a, s, g, I, C);
    return this.__wbg_ptr = u >>> 3429 + -1 * 3429, this;
  }
  get is_valid() {
    return j.licensevalidationresult_is_valid(this.__wbg_ptr) !== -3479 * -2 + -325 * 12 + -11 * 278;
  }
  get features_json() {
    try {
      const n = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_features_json(n, this.__wbg_ptr);
      var o = mt()[n / (-13201 + 695 * 19) + (4836 + 124 * -39)], e = mt()[n / (5841 + -13 * 449) + (-407 * 1 + -3415 + 3823)];
      let i;
      return o !== 0 && (i = rr(o, e).slice(), j.__wbindgen_free(o, e * (-3 * -3049 + -6840 + -2306), 1)), i;
    } finally {
      j.__wbindgen_add_to_stack_pointer(1 * 1694 + 9314 * 1 + -10992);
    }
  }
  get errors() {
    try {
      const i = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_errors(i, this.__wbg_ptr);
      var o = mt()[i / (34 * 140 + 6885 + -7 * 1663) + (1020 + 30 * 265 + 69 * -130)], e = mt()[i / (9418 + 3138 * -3) + (55 * 103 + 9770 + 1 * -15434)], n = d0(o, e).slice();
      return j.__wbindgen_free(o, e * (-4241 * 2 + 4110 + 4376), 79 * -93 + 3692 + 3659), n;
    } finally {
      j.__wbindgen_add_to_stack_pointer(-5812 + 4754 * 1 + 1074);
    }
  }
  get warnings() {
    try {
      const i = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_warnings(i, this.__wbg_ptr);
      var o = mt()[i / (-290 * -13 + 7 * -406 + -924) + (-1 * 9859 + 7196 + 1 * 2663)], e = mt()[i / (1857 * 1 + 29 * 266 + -9567) + (921 * 10 + 3181 + -12390)], n = d0(o, e).slice();
      return j.__wbindgen_free(o, e * (-5698 + 9 * -667 + 11705), 9721 + -1 * -5105 + 1 * -14822), n;
    } finally {
      j.__wbindgen_add_to_stack_pointer(-1246 * 1 + -1 * -7318 + -6056);
    }
  }
}
async function hu(t, o) {
  if (typeof Response == "function" && t instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function")
      try {
        return await WebAssembly.instantiateStreaming(t, o);
      } catch (n) {
        if (t.headers.get("Content-Type") != "application/wasm")
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n);
        else
          throw n;
      }
    const e = await t.arrayBuffer();
    return await WebAssembly.instantiate(e, o);
  } else {
    const e = await WebAssembly.instantiate(t, o);
    if (e instanceof WebAssembly.Instance) {
      const n = {};
      return n.instance = e, n.module = t, n;
    } else
      return e;
  }
}
function mu() {
  const t = {};
  return t.wbg = {}, t.wbg.__wbindgen_string_get = function(o, e) {
    const n = ir(e), i = typeof n == "string" ? n : void 0;
    var r = Qs(i) ? 2760 + 5 * -41 + -2555 : Ri(i, j.__wbindgen_malloc, j.__wbindgen_realloc), a = ut;
    mt()[o / (-5407 + 7 * 773) + (-6887 * -1 + 2309 * 2 + -11504)] = a, mt()[o / (1 * -1829 + -7435 + -1324 * -7) + (-4257 + -1419 * -3)] = r;
  }, t.wbg.__wbindgen_object_drop_ref = function(o) {
    zs(o);
  }, t.wbg.__wbindgen_string_new = function(o, e) {
    const n = rr(o, e);
    return ar(n);
  }, t.wbg.__wbg_new0_c0e40662db0749ee = function() {
    return ar(/* @__PURE__ */ new Date());
  }, t.wbg.__wbg_getTime_af7ca51c0bcefa08 = function(o) {
    return ir(o).getTime();
  }, t.wbg.__wbindgen_throw = function(o, e) {
    throw new Error(rr(o, e));
  }, t;
}
function bu(t, o) {
  return j = t.exports, qs.__wbindgen_wasm_module = o, Bn = null, Sn = null, wn = null, j;
}
async function qs(t) {
  if (j !== void 0)
    return j;
  typeof t > "u" && (t = new URL("dot_embedded_bg.wasm", import.meta.url));
  const o = mu();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
  const { instance: e, module: n } = await hu(await t, o);
  return bu(e, n);
}
class yu {
  constructor() {
    D(this, "wasmInitialized", !1);
  }
  async init(o = "/wasm") {
    try {
      const e = o + "/" + tI;
      await qs(e), this.wasmInitialized = !0;
    } catch {
      this.wasmInitialized = !1, console.warn("dot_embedded_bg.wasm initialization failed! Please check documentation for more information.");
    }
  }
  isWasmInitialized() {
    return this.wasmInitialized;
  }
}
class Bo extends Error {
  constructor() {
    super(...arguments);
    D(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
var _t;
class f0 {
  constructor(o) {
    ga(this, _t, void 0);
    this.licenseResult = o;
    try {
      ca(this, _t, o.features_json && JSON.parse(o.features_json));
    } catch (e) {
      console.info(e);
    }
  }
  get isValid() {
    return this.licenseResult.is_valid;
  }
  get errors() {
    return this.licenseResult.errors;
  }
  get warnings() {
    return this.licenseResult.warnings;
  }
  get dotWeb() {
    return xo(this, _t);
  }
  get isAnalyticsDisabled() {
    var o, e;
    return !!((e = (o = xo(this, _t)) == null ? void 0 : o.features) != null && e["realTimeTransactionReportingDisabled"]);
  }
}
_t = new WeakMap();
class vu {
  constructor(o) {
    D(this, "license");
    D(this, "licenseResult");
    this.dotEmbedded = o;
  }
  async init(o = "/wasm", e = "/license.lic") {
    await Promise.allSettled([this.dotEmbedded.init(o), this.loadLicense(e)]), this.validateLicense();
  }
  async fetchLicense(o) {
    try {
      const e = await fetch(o);
      if (!e.ok)
        throw new Error("DOT License not found.");
      this.license = await e.text();
    } catch (e) {
      this.license = void (-1 * -1061 + 274 * 25 + -7911), console.error(e);
    }
  }
  async loadLicense(o) {
    if (this.licenseResult = void (-2 * -2827 + 4709 + -10363), !o) {
      console.info("No DOT license provided."), this.license = void (3538 + 4947 * -1 + 1 * 1409);
      return;
    }
    await this.fetchLicense(o);
  }
  printErrors(o) {
    o.forEach((e) => console.warn(e));
  }
  printWarnings(o) {
    o.forEach((e) => console.info(e));
  }
  getDomain() {
    return window.location.hostname;
  }
  validateLicense() {
    try {
      if (!this.license)
        throw new Bo("No DOT license found.");
      if (!this.dotEmbedded.isWasmInitialized())
        throw new Bo("Wasm not initialized.");
      this.licenseResult = new f0(pu(this.license, this.getDomain())), this.printErrors(this.licenseResult.errors), this.printWarnings(this.licenseResult.warnings);
    } catch (o) {
      o instanceof Bo ? o.log() : o instanceof Error && console.error(o);
      const e = {};
      e.is_valid = !1, e.errors = [], e.warnings = [], e.features_json = void (2864 + 8754 * -1 + 5890), e.free = function() {
      }, this.licenseResult = new f0(e);
    }
  }
  getLicenseResult() {
    return this.licenseResult;
  }
  getCustomerName() {
    var o;
    if (this.license)
      try {
        const e = JSON.parse(this.license);
        return (o = e == null ? void 0 : e.contract) == null ? void 0 : o.customer;
      } catch (e) {
        e instanceof Error && te.logError(e);
        return;
      }
  }
}
const Pi = class Pi extends vu {
  static getInstance() {
    if (!this._instance) {
      const o = new yu();
      this._instance = new Pi(o);
    }
    return this._instance;
  }
};
D(Pi, "_instance");
let sr = Pi;
function wu({
  licensePath: t,
  onError: o,
  wasmDirectoryPath: e
}) {
  const {
    analytics: n,
    appState: i,
    appTier: r,
    error: a,
    isCameraReady: s,
    isLicenseValidated: g,
    setAppState: I,
    setError: C,
    setIsCameraReady: u
  } = ou({
    initAppState: Ke.LOADING,
    analytics: du,
    analyticsAppKey: "065cf6e242fc5e785cd17eebfbfbbd212a33133b",
    wasmDirectoryPath: e,
    licenseValidator: sr.getInstance(),
    licensePath: t
  }), p = Iu(i), A = wi((B) => {
    za($e.STATE_CHANGED, {
      appState: Ke.ERROR,
      error: B
    }), u(!1), o(B), C(B), I(Ke.ERROR);
  }, [o, C, I, u]), v = wi((B) => {
    za($e.STATE_CHANGED, {
      appState: B
    }), I(B);
  }, [I]);
  return {
    appState: i,
    appTier: r,
    isLicenseValidated: g,
    freemiumOverlayState: p,
    isCameraReady: s,
    setIsCameraReady: u,
    handleAppStateChange: v,
    handleError: A,
    error: a,
    analytics: n
  };
}
const Bu = ({
  children: t
}) => {
  const o = Pt(null);
  return MI(o, $e.VIDEO_ELEMENT_SIZE), H(Gx, {
    ref: o,
    children: t
  });
}, Su = ({
  cameraOptions: t
}) => {
  if (!t)
    return null;
  const o = wu({
    onError: t.onError,
    wasmDirectoryPath: t.wasmDirectoryPath,
    licensePath: t.licensePath
  });
  return H(mx, {
    target: t.styleTarget,
    children: H(As, {
      cameraOptions: t,
      children: H(Vx, {
        value: o,
        children: H(ss, {
          children: H(Bu, {
            children: H(ql, {
              ...t
            })
          })
        })
      })
    })
  });
};
Gg(Su, "x-dot-document-auto-capture", ["cameraOptions"]);
