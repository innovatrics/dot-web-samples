var yg = Object.defineProperty;
var wg = (t, o, e) => o in t ? yg(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var Y = (t, o, e) => (wg(t, typeof o != "symbol" ? o + "" : o, e), e), sa = (t, o, e) => {
  if (!o.has(t))
    throw TypeError("Cannot " + e);
};
var Io = (t, o, e) => (sa(t, o, "read from private field"), e ? e.call(t) : o.get(t)), ga = (t, o, e) => {
  if (o.has(t))
    throw TypeError("Cannot add the same private member more than once");
  o instanceof WeakSet ? o.add(t) : o.set(t, e);
}, ca = (t, o, e, n) => (sa(t, o, "write to private field"), n ? n.call(t, e) : o.set(t, e), e);
var Pn, k, b0, y0, kt, xa, w0, So, v0, Rn = {}, B0 = [], vg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ni = Array.isArray;
function It(t, o) {
  for (var e in o)
    t[e] = o[e];
  return t;
}
function S0(t) {
  var o = t.parentNode;
  o && o.removeChild(t);
}
function ve(t, o, e) {
  var n, i, r, a = {};
  for (r in o)
    r == "key" ? n = o[r] : r == "ref" ? i = o[r] : a[r] = o[r];
  if (arguments.length > -149 * -5 + 9268 + -141 * 71 && (a.children = arguments.length > 75 * 47 + 7501 * -1 + 3979 ? Pn.call(arguments, -82 * 89 + -1 * -1493 + 5807) : e), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      a[r] === void 0 && (a[r] = t.defaultProps[r]);
  return Zn(t, a, n, i, null);
}
function Zn(t, o, e, n, i) {
  var r = {};
  r.type = t, r.props = o, r.key = e, r.ref = n, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (-291 * 11 + -4308 + 7509 * 1), r.__c = null, r.constructor = void (29 * -219 + -1 * -6967 + 1 * -616), r.__v = i ?? ++b0, r.__i = -(864 + -1 * -4798 + -5661), r.__u = 0;
  var a = r;
  return i == null && k.vnode != null && k.vnode(a), a;
}
function Bg() {
  var t = {};
  return t.current = null, t;
}
function Me(t) {
  return t.children;
}
function Le(t, o) {
  this.props = t, this.context = o;
}
function tn(t, o) {
  if (o == null)
    return t.__ ? tn(t.__, t.__i + (7 * -443 + -5205 * 1 + 3 * 2769)) : null;
  for (var e; o < t.__k.length; o++)
    if ((e = t.__k[o]) != null && e.__e != null)
      return e.__e;
  return typeof t.type == "function" ? tn(t) : null;
}
function G0(t) {
  var o, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, o = 149 * 39 + 136 * -29 + 1 * -1867; o < t.__k.length; o++)
      if ((e = t.__k[o]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return G0(t);
  }
}
function Go(t) {
  (!t.__d && (t.__d = !(-3 * -2131 + -7802 + 1 * 1409)) && kt.push(t) && !wi.__r++ || xa !== k.debounceRendering) && ((xa = k.debounceRendering) || w0)(wi);
}
function wi() {
  var t, o, e, n, i, r, a, s, g;
  for (kt.sort(So); t = kt.shift(); )
    t.__d && (o = kt.length, n = void (-6719 * -1 + -9203 + 2484), r = (i = (e = t).__v).__e, s = [], g = [], (a = e.__P) && ((n = It({}, i)).__v = i.__v + (55 * 167 + -9286 + 102), k.vnode && k.vnode(n), cr(a, n, i, e.__n, void (8496 + -144 * 59) !== a.ownerSVGElement, 7256 * 1 + -3223 + -4001 & i.__u ? [r] : null, s, r ?? tn(i), !!(-5483 + 7502 * 1 + -1987 & i.__u), g), n.__.__k[n.__i] = n, K0(s, n, g), n.__e != r && G0(n)), kt.length > o && kt.sort(So));
  wi.__r = -1531 * 4 + 1 * 5201 + 923;
}
function Z0(t, o, e, n, i, r, a, s, g, I, C) {
  var u, p, A, w, K, S = n && n.__k || B0, v = o.length;
  for (e.__d = g, Sg(e, o, S), g = e.__d, u = 14 * -651 + -47 * -31 + 589 * 13; u < v; u++)
    (A = e.__k[u]) != null && typeof A != "boolean" && typeof A != "function" && (p = -(-6719 + -715 * -11 + 1145 * -1) === A.__i ? Rn : S[A.__i] || Rn, A.__i = u, cr(t, A, p, i, r, a, s, g, I, C), w = A.__e, A.ref && p.ref != A.ref && (p.ref && xr(p.ref, null, A), C.push(A.ref, A.__c || w, A)), K == null && w != null && (K = w), 82469 + 7 * 6024 + -59101 & A.__u || p.__k === A.__k ? g = k0(A, g, t) : typeof A.type == "function" && A.__d !== void 0 ? g = A.__d : w && (g = w.nextSibling), A.__d = void (3464 * 1 + -7538 + 4074), A.__u &= -(43857 * -8 + -88 * -609 + -1 * -493873));
  e.__d = g, e.__e = K;
}
function Sg(t, o, e) {
  var n, i, r, a, s, g = o.length, I = e.length, C = I, u = -3710 + -13 * 570 + 11120;
  for (t.__k = [], n = -4483 + 385 * -11 + 8718; n < g; n++)
    (i = t.__k[n] = (i = o[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? Zn(null, i, null, null, i) : Ni(i) ? Zn(Me, { children: i }, null, null, null) : void (-1 * -5579 + -9500 + 3921) === i.constructor && i.__b > -6980 + -7 * 571 + 3659 * 3 ? Zn(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = t, i.__b = t.__b + (1 * -6143 + 5249 + 895 * 1), s = Gg(i, e, a = n + u, C), i.__i = s, r = null, -(4819 + -3 * -1 + -4821) !== s && (C--, (r = e[s]) && (r.__u |= 131072)), r == null || r.__v === null ? (-(3745 + -52 * 72) == s && u--, typeof i.type != "function" && (i.__u |= 45641 * -2 + -3 * -22506 + 47 * 1900)) : s !== a && (s === a + 1 ? u++ : s > a ? C > g - a ? u += s - a : u-- : u = s < a && s == a - (-1425 + -2927 * -1 + 19 * -79) ? s - a : -7928 + 17 * 340 + -1 * -2148, s !== n + u && (i.__u |= -31462 * 2 + 94551 + -127 * -267))) : (r = e[n]) && r.key == null && r.__e && (r.__e == t.__d && (t.__d = tn(r)), Zo(r, r, !(299 * -1 + 1593 * -3 + 5079)), e[n] = null, C--);
  if (C)
    for (n = -352 + -4 * -88; n < I; n++)
      (r = e[n]) != null && -46 * -184 + -12 * -562 + -15208 == (1 * 81218 + 10 * -13718 + 187034 & r.__u) && (r.__e == t.__d && (t.__d = tn(r)), Zo(r, r));
}
function k0(t, o, e) {
  var n, i;
  if (typeof t.type == "function") {
    for (n = t.__k, i = -1 * 9629 + -3716 * -2 + -169 * -13; n && i < n.length; i++)
      n[i] && (n[i].__ = t, o = k0(n[i], o, e));
    return o;
  }
  return t.__e != o && (e.insertBefore(t.__e, o || null), o = t.__e), o && o.nextSibling;
}
function lt(t, o) {
  return o = o || [], t == null || typeof t == "boolean" || (Ni(t) ? t.some(function(e) {
    lt(e, o);
  }) : o.push(t)), o;
}
function Gg(t, o, e, n) {
  var i = t.key, r = t.type, a = e - (18 * -289 + 1302 + 1 * 3901), s = e + (-884 + 1 * 885), g = o[e];
  if (g === null || g && i == g.key && r === g.type)
    return e;
  if (n > (g != null && -142 * 39 + -11 * 638 + 12556 * 1 == (-77 * -3130 + 1847 * 109 + -311261 & g.__u) ? -6263 * 1 + -7194 + 13458 * 1 : -8826 * 1 + 1339 + 7487))
    for (; a >= 8719 + -4219 * -1 + 2 * -6469 || s < o.length; ) {
      if (a >= -7873 * 1 + 5 * -69 + -8218 * -1) {
        if ((g = o[a]) && -375 * 23 + 1 * 8431 + 194 == (-80995 + 84397 * 3 + 447 * -92 & g.__u) && i == g.key && r === g.type)
          return a;
        a--;
      }
      if (s < o.length) {
        if ((g = o[s]) && -151 * -44 + 1 * 1422 + -8066 == (13 * -13993 + -1 * -19100 + 1 * 293881 & g.__u) && i == g.key && r === g.type)
          return s;
        s++;
      }
    }
  return -(1 * -7898 + -690 * 5 + 11349);
}
function Ia(t, o, e) {
  o[6212 + 4621 * 1 + -3 * 3611] === "-" ? t.setProperty(o, e ?? "") : t[o] = e == null ? "" : typeof e != "number" || vg.test(o) ? e : e + "px";
}
function qn(t, o, e, n, i) {
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
    else if (o[-591 * -1 + 8201 * -1 + 7610] === "o" && o[2836 * 1 + -8762 + -5927 * -1] === "n")
      r = o !== (o = o.replace(/(PointerCapture)$|Capture$/, "$1")), o = o.toLowerCase() in t ? o.toLowerCase().slice(1269 + 88 * 9 + -2059) : o.slice(1 * 3532 + -7513 * 1 + 3983 * 1), t.l || (t.l = {}), t.l[o + r] = e, e ? n ? e.u = n.u : (e.u = Date.now(), t.addEventListener(o, r ? ua : la, r)) : t.removeEventListener(o, r ? ua : la, r);
    else {
      if (i)
        o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (o !== "width" && o !== "height" && o !== "href" && o !== "list" && o !== "form" && o !== "tabIndex" && o !== "download" && o !== "rowSpan" && o !== "colSpan" && o !== "role" && o in t)
        try {
          t[o] = e ?? "";
          break e;
        } catch {
        }
      typeof e == "function" || (e == null || !(-3377 * 2 + -9441 + 16196) === e && o[4] !== "-" ? t.removeAttribute(o) : t.setAttribute(o, e));
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
  return this.l[t.type + !0](k.event ? k.event(t) : t);
}
function cr(t, o, e, n, i, r, a, s, g, I) {
  var C, u, p, A, w, K, S, v, E, B, $, D, j, H, ie, _ = o.type;
  if (void (5 * -28 + -1607 * 2 + 3354) !== o.constructor)
    return null;
  -21 * -101 + 9903 + 2 * -5948 & e.__u && (g = !!(1 * 6247 + 991 * -9 + 208 * 13 & e.__u), r = [s = o.__e = e.__e]), (C = k.__b) && C(o);
  e:
    if (typeof _ == "function")
      try {
        if (v = o.props, E = (C = _.contextType) && n[C.__c], B = C ? E ? E.props.value : C.__ : n, e.__c ? S = (u = o.__c = e.__c).__ = u.__E : ("prototype" in _ && _.prototype.render ? o.__c = u = new _(v, B) : (o.__c = u = new Le(v, B), u.constructor = _, u.render = kg), E && E.sub(u), u.props = v, u.state || (u.state = {}), u.context = B, u.__n = n, p = u.__d = !(2195 * -1 + -7163 + -4679 * -2), u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), _.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = It({}, u.__s)), It(u.__s, _.getDerivedStateFromProps(v, u.__s))), A = u.props, w = u.state, u.__v = o, p)
          _.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (_.getDerivedStateFromProps == null && v !== A && u.componentWillReceiveProps != null && u.componentWillReceiveProps(v, B), !u.__e && (u.shouldComponentUpdate != null && !(-13258 + 13259 * 1) === u.shouldComponentUpdate(v, u.__s, B) || o.__v === e.__v)) {
            for (o.__v !== e.__v && (u.props = v, u.state = u.__s, u.__d = !(6617 * -1 + 3970 + 2648)), o.__e = e.__e, o.__k = e.__k, o.__k.forEach(function(oe) {
              oe && (oe.__ = o);
            }), $ = 3 * 1098 + 71 * -129 + -1173 * -5; $ < u._sb.length; $++)
              u.__h.push(u._sb[$]);
            u._sb = [], u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(v, u.__s, B), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(A, w, K);
          });
        }
        if (u.context = B, u.props = v, u.__P = t, u.__e = !(-5979 + -7309 * 1 + 13289), D = k.__r, j = 0, "prototype" in _ && _.prototype.render) {
          for (u.state = u.__s, u.__d = !(-9214 * -1 + 4179 + -13392), D && D(o), C = u.render(u.props, u.state, u.context), H = 398 * -9 + -1448 * 2 + 6478; H < u._sb.length; H++)
            u.__h.push(u._sb[H]);
          u._sb = [];
        } else
          do
            u.__d = !(-4689 + -335 * -14), D && D(o), C = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++j < -5474 + 141 * 39);
        u.state = u.__s, u.getChildContext != null && (n = It(It({}, n), u.getChildContext())), p || u.getSnapshotBeforeUpdate == null || (K = u.getSnapshotBeforeUpdate(A, w)), Z0(t, Ni(ie = C != null && C.type === Me && C.key == null ? C.props.children : C) ? ie : [ie], o, e, n, i, r, a, s, g, I), u.base = o.__e, o.__u &= -161, u.__h.length && a.push(u), S && (u.__E = u.__ = null);
      } catch (oe) {
        o.__v = null, g || r != null ? (o.__e = s, o.__u |= g ? -115 * 83 + -302 * -17 + -1 * -4571 : -4331 + -1 * 5305 + -4 * -2417, r[r.indexOf(s)] = null) : (o.__e = e.__e, o.__k = e.__k), k.__e(oe, o, e);
      }
    else
      r == null && o.__v === e.__v ? (o.__k = e.__k, o.__e = e.__e) : o.__e = Zg(e.__e, o, e, n, i, r, a, g, I);
  (C = k.diffed) && C(o);
}
function K0(t, o, e) {
  o.__d = void (-8770 + -10 * -877);
  for (var n = -898 * 5 + -780 + -5270 * -1; n < e.length; n++)
    xr(e[n], e[++n], e[++n]);
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
function Zg(t, o, e, n, i, r, a, s, g) {
  var I, C, u, p, A, w, K, S = e.props, v = o.props, E = o.type;
  if (E === "svg" && (i = !(-165 * 25 + -1579 * 5 + -1202 * -10)), r != null) {
    for (I = -5123 + -47 * -109; I < r.length; I++)
      if ((A = r[I]) && "setAttribute" in A == !!E && (E ? A.localName === E : 3 * 927 + -7830 + 5052 === A.nodeType)) {
        t = A, r[I] = null;
        break;
      }
  }
  if (t == null) {
    if (E === null)
      return document.createTextNode(v);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", E) : document.createElement(E, v.is && v), r = null, s = !(939 * -3 + -3668 + -1081 * -6);
  }
  if (E === null)
    S === v || s && t.data === v || (t.data = v);
  else {
    if (r = r && Pn.call(t.childNodes), S = e.props || Rn, !s && r != null)
      for (S = {}, I = 838 * 11 + -3319 + 5899 * -1; I < t.attributes.length; I++)
        S[(A = t.attributes[I]).name] = A.value;
    for (I in S)
      A = S[I], I == "children" || (I == "dangerouslySetInnerHTML" ? u = A : I === "key" || I in v || qn(t, I, null, A, i));
    for (I in v)
      A = v[I], I == "children" ? p = A : I == "dangerouslySetInnerHTML" ? C = A : I == "value" ? w = A : I == "checked" ? K = A : I === "key" || s && typeof A != "function" || S[I] === A || qn(t, I, A, S[I], i);
    if (C)
      s || u && (C.__html === u.__html || C.__html === t.innerHTML) || (t.innerHTML = C.__html), o.__k = [];
    else if (u && (t.innerHTML = ""), Z0(t, Ni(p) ? p : [p], o, e, n, i && E !== "foreignObject", r, a, r ? r[-1490 + -5447 * -1 + -3957] : e.__k && tn(e, 3 * -2087 + 106 * -18 + 8169), s, g), r != null)
      for (I = r.length; I--; )
        r[I] != null && S0(r[I]);
    s || (I = "value", void (5526 + -2 * -2934 + 6 * -1899) !== w && (w !== t[I] || E === "progress" && !w || E === "option" && w !== S[I]) && qn(t, I, w, S[I], !(-15 * 1 + 6639 + -6623)), I = "checked", void (9199 + 3269 * -3 + 38 * 16) !== K && K !== t[I] && qn(t, I, K, S[I], !(8954 * 1 + -7328 + -1625)));
  }
  return t;
}
function xr(t, o, e) {
  try {
    typeof t == "function" ? t(o) : t.current = o;
  } catch (n) {
    k.__e(n, e);
  }
}
function Zo(t, o, e) {
  var n, i;
  if (k.unmount && k.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || xr(n, null, o)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        k.__e(r, o);
      }
    n.base = n.__P = null, t.__c = void (10449 + 1 * -10449);
  }
  if (n = t.__k)
    for (i = 12714 + 326 * -39; i < n.length; i++)
      n[i] && Zo(n[i], o, e || typeof t.type != "function");
  e || t.__e == null || S0(t.__e), t.__ = t.__e = t.__d = void (-8332 + -4 * -1692 + -17 * -92);
}
function kg(t, o, e) {
  return this.constructor(t, e);
}
function yt(t, o, e) {
  var n, i, r, a;
  k.__ && k.__(t, o), i = (n = typeof e == "function") ? null : e && e.__k || o.__k, r = [], a = [], cr(o, t = (!n && e || o).__k = ve(Me, null, [t]), i || Rn, Rn, void (-2303 + -566 * -3 + 605) !== o.ownerSVGElement, !n && e ? [e] : i ? null : o.firstChild ? Pn.call(o.childNodes) : null, r, !n && e ? e : i ? i.__e : o.firstChild, n, a), K0(r, t, a);
}
function Ir(t, o) {
  yt(t, o, Ir);
}
function lr(t, o, e) {
  var n, i, r, a, s = It({}, t.props);
  for (r in t.type && t.type.defaultProps && (a = t.type.defaultProps), o)
    r == "key" ? n = o[r] : r == "ref" ? i = o[r] : s[r] = o[r] === void 0 && void (-431 * 7 + 9035 + -6018) !== a ? a[r] : o[r];
  return arguments.length > -1 * -1433 + 2588 + -4019 && (s.children = arguments.length > 9165 + 7 * -985 + -2267 * 1 ? Pn.call(arguments, -9 * 159 + 3617 + -2184) : e), Zn(t.type, s, n || t.key, i || t.ref, null);
}
function ur(t, o) {
  var e = { __c: o = "__cC" + v0++, __: t, Consumer: function(n, i) {
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
Pn = B0.slice, k = { __e: function(t, o, e, n) {
  for (var i, r, a; o = o.__; )
    if ((i = o.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, n || {}), a = i.__d), a)
          return i.__E = i;
      } catch (s) {
        t = s;
      }
  throw t;
} }, b0 = -4587 + 4587 * 1, y0 = function(t) {
  return t != null && t.constructor == null;
}, Le.prototype.setState = function(t, o) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = It({}, this.state), typeof t == "function" && (t = t(It({}, e), this.props)), t && It(e, t), t != null && this.__v && (o && this._sb.push(o), Go(this));
}, Le.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !(-7013 + 807 * -8 + 13469), t && this.__h.push(t), Go(this));
}, Le.prototype.render = Me, kt = [], w0 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, So = function(t, o) {
  return t.__v.__b - o.__v.__b;
}, wi.__r = 1441 * -3 + 1 * 3326 + 997, v0 = -159 * 15 + 1 * 3854 + 1469 * -1;
function Cr() {
  return (Cr = Object.assign ? Object.assign.bind() : function(t) {
    for (var o = 3 * -2333 + -47 * -141 + 1 * 373; o < arguments.length; o++) {
      var e = arguments[o];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }).apply(this, arguments);
}
var Kg = ["context", "children"];
function Hg(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var o = t.children, e = function(n, i) {
    if (n == null)
      return {};
    var r, a, s = {}, g = Object.keys(n);
    for (a = -4 + -2 * -1721 + -3438 * 1; a < g.length; a++)
      i.indexOf(r = g[a]) >= -1 * 5953 + -3424 + 9377 || (s[r] = n[r]);
    return s;
  }(t, Kg);
  return lr(o, e);
}
function Og() {
  var t = {};
  t.detail = {}, t.bubbles = !(-10339 + 7 * 1477), t.cancelable = !(-802 * -11 + -1898 + -3 * 2308);
  var o = new CustomEvent("_preact", t);
  this.dispatchEvent(o), this._vdom = ve(Hg, Cr({}, this._props, { context: o.detail.context }), function e(n, i) {
    if (7849 + 31 * 74 + -10140 === n.nodeType)
      return n.data;
    if (-3115 + 303 * -29 + 11903 !== n.nodeType)
      return null;
    var r = [], a = {}, s = -3728 + -3728 * -1, g = n.attributes, I = n.childNodes;
    for (s = g.length; s--; )
      g[s].name !== "slot" && (a[g[s].name] = g[s].value, a[H0(g[s].name)] = g[s].value);
    for (s = I.length; s--; ) {
      var C = e(I[s], null), u = I[s].slot;
      u ? a[u] = ve(Ca, { name: u }, C) : r[s] = C;
    }
    var p = i ? ve(Ca, null, r) : r;
    return ve(i || n.nodeName.toLowerCase(), a, p);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Ir : yt)(this._vdom, this._root);
}
function H0(t) {
  return t.replace(/-(\w)/g, function(o, e) {
    return e ? e.toUpperCase() : "";
  });
}
function Wg(t, o, e) {
  if (this._vdom) {
    var n = {};
    n[t] = e = e ?? void (5953 + -5953 * 1), n[H0(t)] = e, this._vdom = lr(this._vdom, n), yt(this._vdom, this._root);
  }
}
function Rg() {
  yt(this._vdom = null, this._root);
}
function Ca(t, o) {
  var e = this;
  return ve("slot", Cr({}, t, { ref: function(n) {
    n ? (e.ref = n, e._listener || (e._listener = function(i) {
      i.stopPropagation(), i.detail.context = o;
    }, n.addEventListener("_preact", e._listener))) : e.ref.removeEventListener("_preact", e._listener);
  } }));
}
function Vg(t, o, e, n) {
  function i() {
    var r = Reflect.construct(HTMLElement, [], i);
    return r._vdomComponent = t, r._root = n && n.shadow ? r.attachShadow({ mode: n.mode || "open" }) : r, r;
  }
  return (i.prototype = Object.create(HTMLElement.prototype)).constructor = i, i.prototype.connectedCallback = Og, i.prototype.attributeChangedCallback = Wg, i.prototype.disconnectedCallback = Rg, e = e || t.observedAttributes || Object.keys(t.propTypes || {}), i.observedAttributes = e, e.forEach(function(r) {
    Object.defineProperty(i.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(r, null, a) : (this._props || (this._props = {}), this._props[r] = a, this.connectedCallback());
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(r, a);
    } });
  }), customElements.define(o || t.tagName || t.displayName || t.name, i);
}
var Ke = function() {
  return Ke = Object.assign || function(o) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (o[r] = e[r]);
    }
    return o;
  }, Ke.apply(this, arguments);
};
function nn(t, o, e) {
  if (e || arguments.length === 2)
    for (var n = 0, i = o.length, r; n < i; n++)
      (r || !(n in o)) && (r || (r = Array.prototype.slice.call(o, 0, n)), r[n] = o[n]);
  return t.concat(r || Array.prototype.slice.call(o));
}
function Eg(t) {
  var o = Object.create(null);
  return function(e) {
    return o[e] === void 0 && (o[e] = t(e)), o[e];
  };
}
var Pg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ng = Eg(function(t) {
  return Pg.test(t) || t.charCodeAt(377 * -1 + 2247 * -2 + -1 * -4871) === -2521 * 2 + -9845 + -7499 * -2 && t.charCodeAt(-1 * -7559 + 1 * 4273 + -11831) === -101 * -19 + 1 * 627 + -2436 && t.charCodeAt(8941 * -1 + 1782 + 7161) < 6613 + -4273 * -1 + 5 * -2159;
}), wt, te, lo, da, on = -6618 + -4563 * 1 + 11181 * 1, O0 = [], si = [], fa = k.__b, Aa = k.__r, pa = k.diffed, ha = k.__c, ma = k.unmount;
function In(t, o) {
  k.__h && k.__h(te, t, on || o), on = -7809 + -4723 * -1 + 3086;
  var e = {};
  e.__ = [], e.__h = [];
  var n = te.__H || (te.__H = e), i = {};
  return i.__V = si, t >= n.__.length && n.__.push(i), n.__[t];
}
function Re(t) {
  return on = 1913 * -5 + -4 * 2138 + -18118 * -1, W0(R0, t);
}
function W0(t, o, e) {
  var n = In(wt++, 2);
  if (n.t = t, !n.__c && (n.__ = [e ? e(o) : R0(void (2005 * 3 + 6746 * -1 + 731 * 1), o), function(s) {
    var g = n.__N ? n.__N[0] : n.__[0], I = n.t(g, s);
    g !== I && (n.__N = [I, n.__[-937 + 134 * 7]], n.__c.setState({}));
  }], n.__c = te, !te.u)) {
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
      var u = !(1 * -9746 + -7432 + 17179);
      return C.forEach(function(p) {
        if (p.__N) {
          var A = p.__[0];
          p.__ = p.__N, p.__N = void 0, A !== p.__[0] && (u = !0);
        }
      }), !(!u && n.__c.props === s) && (!r || r.call(this, s, g, I));
    };
    te.u = !(-1509 * 3 + -1 * -9221 + 2 * -2347);
    var r = te.shouldComponentUpdate, a = te.componentWillUpdate;
    te.componentWillUpdate = function(s, g, I) {
      if (this.__e) {
        var C = r;
        r = void (-3 * 1419 + 1637 + -20 * -131), i(s, g, I), r = C;
      }
      a && a.call(this, s, g, I);
    }, te.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function pe(t, o) {
  var e = In(wt++, 3);
  !k.__s && dr(e.__H, o) && (e.__ = t, e.i = o, te.__H.__h.push(e));
}
function Nn(t, o) {
  var e = In(wt++, 4);
  !k.__s && dr(e.__H, o) && (e.__ = t, e.i = o, te.__h.push(e));
}
function vt(t) {
  return on = -1917 * -5 + -685 * -13 + -18485, tt(function() {
    var o = {};
    return o.current = t, o;
  }, []);
}
function Lg(t, o, e) {
  on = 545 * 14 + 1421 + -9045, Nn(function() {
    return typeof t == "function" ? (t(o()), function() {
      return t(null);
    }) : t ? (t.current = o(), function() {
      return t.current = null;
    }) : void (-8509 * -1 + 371 + -296 * 30);
  }, e == null ? e : e.concat(t));
}
function tt(t, o) {
  var e = In(wt++, 7);
  return dr(e.__H, o) ? (e.__V = t(), e.i = o, e.__h = t, e.__V) : e.__;
}
function vi(t, o) {
  return on = 1581 * -3 + -1229 * 8 + 14583, tt(function() {
    return t;
  }, o);
}
function Li(t) {
  var o = te.context[t.__c], e = In(wt++, 1597 + -4 * 397);
  return e.c = t, o ? (e.__ == null && (e.__ = !(-118 * -9 + 4 * 330 + -2382), o.sub(te)), o.props.value) : t.__;
}
function ko(t, o) {
  k.useDebugValue && k.useDebugValue(o ? o(t) : t);
}
function Tg() {
  var t = In(wt++, 11);
  if (!t.__) {
    for (var o = te.__v; o !== null && !o.__m && o.__ !== null; )
      o = o.__;
    var e = o.__m || (o.__m = [-1 * 9957 + 7881 * 1 + 2076, -3905 * 2 + 28 * 151 + 3582]);
    t.__ = "P" + e[0] + "-" + e[-2 * -3947 + -1985 + 2954 * -2]++;
  }
  return t.__;
}
function Yg() {
  for (var t; t = O0.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(gi), t.__H.__h.forEach(Ko), t.__H.__h = [];
      } catch (o) {
        t.__H.__h = [], k.__e(o, t.__v);
      }
}
k.__b = function(t) {
  te = null, fa && fa(t);
}, k.__r = function(t) {
  Aa && Aa(t), wt = 6593 + 1 * -6593;
  var o = (te = t.__c).__H;
  o && (lo === te ? (o.__h = [], te.__h = [], o.__.forEach(function(e) {
    e.__N && (e.__ = e.__N), e.__V = si, e.__N = e.i = void (3 * -349 + -4780 * 2 + -1 * -10607);
  })) : (o.__h.forEach(gi), o.__h.forEach(Ko), o.__h = [], wt = 3373 + 14 * 577 + -11451)), lo = te;
}, k.diffed = function(t) {
  pa && pa(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (4526 * -1 + -1 * 4229 + 8756 !== O0.push(o) && da === k.requestAnimationFrame || ((da = k.requestAnimationFrame) || Fg)(Yg)), o.__H.__.forEach(function(e) {
    e.i && (e.__H = e.i), e.__V !== si && (e.__ = e.__V), e.i = void (73 * 61 + -7363 * 1 + -582 * -5), e.__V = si;
  })), lo = te = null;
}, k.__c = function(t, o) {
  o.some(function(e) {
    try {
      e.__h.forEach(gi), e.__h = e.__h.filter(function(n) {
        return !n.__ || Ko(n);
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
  }), e.__H = void (-3 * -1851 + -6044 * 1 + 1 * 491), o && k.__e(o, e.__v));
};
var ba = typeof requestAnimationFrame == "function";
function Fg(t) {
  var o, e = function() {
    clearTimeout(n), ba && cancelAnimationFrame(o), setTimeout(t);
  }, n = setTimeout(e, 100);
  ba && (o = requestAnimationFrame(e));
}
function gi(t) {
  var o = te, e = t.__c;
  typeof e == "function" && (t.__c = void (81 * 2 + 9176 + -9338), e()), te = o;
}
function Ko(t) {
  var o = te;
  t.__c = t.__(), te = o;
}
function dr(t, o) {
  return !t || t.length !== o.length || o.some(function(e, n) {
    return e !== t[n];
  });
}
function R0(t, o) {
  return typeof o == "function" ? o(t) : o;
}
function V0(t, o) {
  for (var e in o)
    t[e] = o[e];
  return t;
}
function Ho(t, o) {
  for (var e in t)
    if (e !== "__source" && !(e in o))
      return !(699 * 3 + 6845 + 526 * -17);
  for (var n in o)
    if (n !== "__source" && t[n] !== o[n])
      return !(-4 * -140 + -8539 * -1 + -9099);
  return !(-51 * -81 + 856 * 9 + 194 * -61);
}
function Oo(t) {
  this.props = t;
}
function Dg(t, o) {
  function e(i) {
    var r = this.props.ref, a = r == i.ref;
    return !a && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, i) || !a : Ho(this.props, i);
  }
  function n(i) {
    return this.shouldComponentUpdate = e, ve(t, i);
  }
  return n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.prototype.isReactComponent = !0, n.__f = !(4 * 2410 + -4683 + -4957), n;
}
(Oo.prototype = new Le()).isPureReactComponent = !(753 + 313 * -17 + 4568), Oo.prototype.shouldComponentUpdate = function(t, o) {
  return Ho(this.props, t) || Ho(this.state, o);
};
var ya = k.__b;
k.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), ya && ya(t);
};
var Xg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -13 * -691 + 5853 + -10925;
function E0(t) {
  function o(e) {
    var n = V0({}, e);
    return delete n.ref, t(n, e.ref || null);
  }
  return o.$$typeof = Xg, o.render = o, o.prototype.isReactComponent = o.__f = !(178 * 41 + 1995 + 9293 * -1), o.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", o;
}
var wa = function(t, o) {
  return t == null ? null : lt(lt(t).map(o));
}, jg = { map: wa, forEach: wa, count: function(t) {
  return t ? lt(t).length : -1 * 8469 + 1 * 4561 + 3908;
}, only: function(t) {
  var o = lt(t);
  if (-790 * -3 + 9016 + 1035 * -11 !== o.length)
    throw "Children.only";
  return o[-8689 * -1 + 129 * -26 + 97 * -55];
}, toArray: lt }, Mg = k.__e;
k.__e = function(t, o, e, n) {
  if (t.then) {
    for (var i, r = o; r = r.__; )
      if ((i = r.__c) && i.__c)
        return o.__e == null && (o.__e = e.__e, o.__k = e.__k), i.__c(t, o);
  }
  Mg(t, o, e, n);
};
var va = k.unmount;
function P0(t, o, e) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = V0({}, t)).__c != null && (t.__c.__P === e && (t.__c.__P = o), t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return P0(n, o, e);
  })), t;
}
function N0(t, o, e) {
  return t && e && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return N0(n, o, e);
  }), t.__c && t.__c.__P === o && (t.__e && e.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = e)), t;
}
function ci() {
  this.__u = 48 * -19 + -332 + 1244, this.t = null, this.__b = null;
}
function L0(t) {
  var o = t.__.__c;
  return o && o.__a && o.__a(t);
}
function Ug(t) {
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
    return ve(e, r);
  }
  return i.displayName = "Lazy", i.__f = !(15 * 454 + 1 * 1009 + -1 * 7819), i;
}
function bn() {
  this.u = null, this.o = null;
}
k.unmount = function(t) {
  var o = t.__c;
  o && o.__R && o.__R(), o && 32 & t.__u && (t.type = null), va && va(t);
}, (ci.prototype = new Le()).__c = function(t, o) {
  var e = o.__c, n = this;
  n.t == null && (n.t = []), n.t.push(e);
  var i = L0(n.__v), r = !(1215 + -16 * 591 + 8242), a = function() {
    r || (r = !(6 * 432 + -184 * -22 + -332 * 20), e.__R = null, i ? i(s) : s());
  };
  e.__R = a;
  var s = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var g = n.state.__a;
        n.__v.__k[0] = N0(g, g.__c.__P, g.__c.__O);
      }
      var I;
      for (n.setState({ __a: n.__b = null }); I = n.t.pop(); )
        I.forceUpdate();
    }
  };
  n.__u++ || 1753 * -3 + 8279 + -2988 & o.__u || n.setState({ __a: n.__b = n.__v.__k[218 + -4182 * 1 + 3964] }), t.then(a, a);
}, ci.prototype.componentWillUnmount = function() {
  this.t = [];
}, ci.prototype.render = function(t, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var e = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[-7080 + 287 * 17 + -31 * -71] = P0(this.__b, e, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = o.__a && ve(Me, null, t.fallback);
  return i && (i.__u &= -(3112 + 249 * 40 + -13039)), [ve(Me, null, o.__a ? null : t.children), i];
};
var Ba = function(t, o, e) {
  if (++e[-412 + 7 * -727 + 5502] === e[394 * 14 + -3425 + -2091] && t.o.delete(o), t.props.revealOrder && (t.props.revealOrder[2321 * 3 + 5946 + 1 * -12909] !== "t" || !t.o.size))
    for (e = t.u; e; ) {
      for (; e.length > 8073 + -3533 * -1 + -11603; )
        e.pop()();
      if (e[2645 + -1 * 2644] < e[-5030 + -2554 * 2 + 5069 * 2])
        break;
      t.u = e = e[757 * 3 + 17 * 12 + -1 * 2473];
    }
};
function Jg(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function Qg(t) {
  var o = this, e = t.i;
  o.componentWillUnmount = function() {
    yt(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== e && o.componentWillUnmount(), o.l || (o.i = e, o.l = { nodeType: 1, parentNode: e, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), o.i.appendChild(n);
  }, insertBefore: function(n, i) {
    this.childNodes.push(n), o.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> -7370 + 27 * 273, 2141 + -15 * 436 + 4400), o.i.removeChild(n);
  } }), yt(ve(Jg, { context: o.context }, t.__v), o.l);
}
function zg(t, o) {
  var e = {};
  e.__v = t, e.i = o;
  var n = ve(Qg, e);
  return n.containerInfo = o, n;
}
(bn.prototype = new Le()).__a = function(t) {
  var o = this, e = L0(o.__v), n = o.o.get(t);
  return n[943 * 6 + 1 * -4821 + -837]++, function(i) {
    var r = function() {
      o.props.revealOrder ? (n.push(i), Ba(o, t, n)) : i();
    };
    e ? e(r) : r();
  };
}, bn.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = lt(t.children);
  t.revealOrder && t.revealOrder[-2291 + -41 * 56 + -1529 * -3] === "b" && o.reverse();
  for (var e = o.length; e--; )
    this.o.set(o[e], this.u = [2553 + -29 * 88, -3958 + 595 * -6 + 7528, this.u]);
  return t.children;
}, bn.prototype.componentDidUpdate = bn.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(o, e) {
    Ba(t, e, o);
  });
};
var T0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 38727 + 14 * -6224 + 6782 * 16, $g = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, _g = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, qg = /[A-Z0-9]/g, ec = typeof document < "u", tc = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function nc(t, o, e) {
  return o.__k == null && (o.textContent = ""), yt(t, o), typeof e == "function" && e(), t ? t.__c : null;
}
function ic(t, o, e) {
  return Ir(t, o), typeof e == "function" && e(), t ? t.__c : null;
}
Le.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(Le.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(o) {
    var e = {};
    e.configurable = !(-14085 + -9 * -1565), e.writable = !(3687 + -2650 * 2 + 1613 * 1), e.value = o, Object.defineProperty(this, t, e);
  } });
});
var Sa = k.event;
function oc() {
}
function rc() {
  return this.cancelBubble;
}
function ac() {
  return this.defaultPrevented;
}
k.event = function(t) {
  return Sa && (t = Sa(t)), t.persist = oc, t.isPropagationStopped = rc, t.isDefaultPrevented = ac, t.nativeEvent = t;
};
var xi = {};
xi.enumerable = !(8581 + -2 * -650 + -9880), xi.configurable = !(-29 * 101 + -649 + 2 * 1789), xi.get = function() {
  return this.class;
};
var fr, sc = xi, Ga = k.vnode;
k.vnode = function(t) {
  typeof t.type == "string" && function(o) {
    var e = o.props, n = o.type, i = {};
    for (var r in e) {
      var a = e[r];
      if (!(r === "value" && "defaultValue" in e && a == null || ec && r === "children" && n === "noscript" || r === "class" || r === "className")) {
        var s = r.toLowerCase();
        r === "defaultValue" && "value" in e && e.value == null ? r = "value" : r === "download" && !(2 * -4372 + 1 * 9299 + -111 * 5) === a ? a = "" : s === "ondoubleclick" ? r = "ondblclick" : s !== "onchange" || n !== "input" && n !== "textarea" || tc(e.type) ? s === "onfocus" ? r = "onfocusin" : s === "onblur" ? r = "onfocusout" : _g.test(r) ? r = s : n.indexOf("-") === -1 && $g.test(r) ? r = r.replace(qg, "-$&").toLowerCase() : a === null && (a = void (-3900 + -1201 * 3 + 61 * 123)) : s = r = "oninput", s === "oninput" && i[r = s] && (r = "oninputCapture"), i[r] = a;
      }
    }
    n == "select" && i.multiple && Array.isArray(i.value) && (i.value = lt(e.children).forEach(function(g) {
      g.props.selected = -(-570 * -2 + -1 * -2953 + 132 * -31) != i.value.indexOf(g.props.value);
    })), n == "select" && i.defaultValue != null && (i.value = lt(e.children).forEach(function(g) {
      g.props.selected = i.multiple ? -(-4 * 1107 + -658 * 2 + 5745) != i.defaultValue.indexOf(g.props.value) : i.defaultValue == g.props.value;
    })), e.class && !e.className ? (i.class = e.class, Object.defineProperty(i, "className", sc)) : (e.className && !e.class || e.class && e.className) && (i.class = i.className = e.className), o.props = i;
  }(t), t.$$typeof = T0, Ga && Ga(t);
};
var Za = k.__r;
k.__r = function(t) {
  Za && Za(t), fr = t.__c;
};
var ka = k.diffed;
k.diffed = function(t) {
  ka && ka(t);
  var o = t.props, e = t.__e;
  e != null && t.type === "textarea" && "value" in o && o.value !== e.value && (e.value = o.value == null ? "" : o.value), fr = null;
};
var Y0 = {};
Y0.readContext = function(t) {
  return fr.__n[t.__c].props.value;
};
var F0 = {};
F0.current = Y0;
var D0 = {};
D0.ReactCurrentDispatcher = F0;
var gc = D0;
function cc(t) {
  return ve.bind(null, t);
}
function Ti(t) {
  return !!t && t.$$typeof === T0;
}
function xc(t) {
  return Ti(t) && t.type === Me;
}
function Ic(t) {
  return Ti(t) ? lr.apply(null, arguments) : t;
}
function lc(t) {
  return !!t.__k && (yt(null, t), !(-1222 * 2 + -3007 * -1 + -563 * 1));
}
function uc(t) {
  return t && (t.base || 816 * 1 + -7463 + -24 * -277 === t.nodeType && t) || null;
}
var Cc = function(t, o) {
  return t(o);
}, dc = function(t, o) {
  return t(o);
}, fc = Me;
function X0(t) {
  t();
}
function Ac(t) {
  return t;
}
function pc() {
  return [!(5328 + 5 * 927 + -17 * 586), X0];
}
var hc = Nn, mc = Ti;
function bc(t, o) {
  var e = o(), n = Re({ h: { __: e, v: o } }), i = n[4450 + 2 * 2957 + 1 * -10364].h, r = n[-1307 * -3 + -5369 + -3 * -483];
  return Nn(function() {
    i.__ = e, i.v = o, uo(i) && r({ h: i });
  }, [t, e, o]), pe(function() {
    return uo(i) && r({ h: i }), t(function() {
      uo(i) && r({ h: i });
    });
  }, [t]), e;
}
function uo(t) {
  var o, e, n = t.v, i = t.__;
  try {
    var r = n();
    return !((o = i) === (e = r) && (o !== 0 || (3023 * -2 + 1 * 1559 + 6 * 748) / o == (-7743 * 1 + -2878 + 47 * 226) / e) || o != o && e != e);
  } catch {
    return !0;
  }
}
var T = {};
T.useState = Re, T.useId = Tg, T.useReducer = W0, T.useEffect = pe, T.useLayoutEffect = Nn, T.useInsertionEffect = hc, T.useTransition = pc, T.useDeferredValue = Ac, T.useSyncExternalStore = bc, T.startTransition = X0, T.useRef = vt, T.useImperativeHandle = Lg, T.useMemo = tt, T.useCallback = vi, T.useContext = Li, T.useDebugValue = ko, T.version = "17.0.2", T.Children = jg, T.render = nc, T.hydrate = ic, T.unmountComponentAtNode = lc, T.createPortal = zg, T.createElement = ve, T.createContext = ur, T.createFactory = cc, T.cloneElement = Ic, T.createRef = Bg, T.Fragment = Me, T.isValidElement = Ti, T.isElement = mc, T.isFragment = xc, T.findDOMNode = uc, T.Component = Le, T.PureComponent = Oo, T.memo = Dg, T.forwardRef = E0, T.flushSync = dc, T.unstable_batchedUpdates = Cc, T.StrictMode = fc, T.Suspense = ci, T.SuspenseList = bn, T.lazy = Ug, T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gc;
var Vt = T, yc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function vc(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Bc(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") && Object.keys(t).length === 1 ? t.default : t;
}
function Sc(t) {
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
const Gc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: yc,
  getAugmentedNamespace: Sc,
  getDefaultExportFromCjs: wc,
  getDefaultExportFromNamespaceIfNotNamed: Bc,
  getDefaultExportFromNamespaceIfPresent: vc
}, Symbol.toStringTag, { value: "Module" }));
var Zc = function(o, e, n, i) {
  var r = n ? n.call(i, o, e) : void 0;
  if (r !== void (-23 * 95 + 1313 * -7 + 11376))
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
    if (r = n ? n.call(i, u, p, C) : void (-8196 + -25 * 120 + 11196), r === !1 || r === void (3128 + 19 * -244 + 116 * 13) && u !== p)
      return !1;
  }
  return !0;
};
const kc = Gc.getDefaultExportFromCjs(Zc);
var ee = "-ms-", kn = "-moz-", z = "-webkit-", j0 = "comm", Yi = "rule", Ar = "decl", Kc = "@import", M0 = "@keyframes", Hc = "@layer", Oc = Math.abs, pr = String.fromCharCode, Wo = Object.assign;
function Wc(t, o) {
  return de(t, 0) ^ 5314 * -1 + 4673 * 1 + 686 ? (((o << 7904 + 1447 * -4 + -1057 * 2 ^ de(t, 673 + 1 * 5349 + 3011 * -2)) << -3977 * 1 + -1 * -2917 + 1062 ^ de(t, -3207 + -7745 * -1 + 349 * -13)) << 12 * -629 + 589 + 6961 ^ de(t, -1282 + -25 * -167 + -2891)) << 5 * 1769 + -1 * 1326 + -7517 * 1 ^ de(t, 3) : 107 * -62 + -2231 + -9 * -985;
}
function U0(t) {
  return t.trim();
}
function ct(t, o) {
  return (t = o.exec(t)) ? t[0] : t;
}
function F(t, o, e) {
  return t.replace(o, e);
}
function Ii(t, o) {
  return t.indexOf(o);
}
function de(t, o) {
  return t.charCodeAt(o) | -73 * -18 + -9 * -686 + -52 * 144;
}
function rn(t, o, e) {
  return t.slice(o, e);
}
function qe(t) {
  return t.length;
}
function J0(t) {
  return t.length;
}
function yn(t, o) {
  return o.push(t), t;
}
function Rc(t, o) {
  return t.map(o).join("");
}
function Ka(t, o) {
  return t.filter(function(e) {
    return !ct(e, o);
  });
}
var Fi = 3 * -236 + -4259 * 1 + -92 * -54, an = -1938 * -1 + 3837 + -5774 * 1, Q0 = -2187 * -2 + -11 * -507 + -9951, Ye = 318 * -20 + -8769 + -123 * -123, xe = 1 * -4801 + 11 * 230 + -1 * -2271, ln = "";
function Di(t, o, e, n, i, r, a, s) {
  var g = {};
  return g.value = t, g.root = o, g.parent = e, g.type = n, g.props = i, g.children = r, g.line = Fi, g.column = an, g.length = a, g.return = "", g.siblings = s, g;
}
function At(t, o) {
  return Wo(Di("", null, null, "", null, null, -3850 + -3850 * -1, t.siblings), t, { length: -t.length }, o);
}
function Ut(t) {
  for (; t.root; )
    t = At(t.root, { children: [t] });
  yn(t, t.siblings);
}
function Vc() {
  return xe;
}
function Ec() {
  return xe = Ye > -4115 + -342 * -15 + -1015 ? de(ln, --Ye) : 2094 + -3 * 1866 + 3504, an--, xe === -999 * -9 + -4865 + -7 * 588 && (an = -1263 * -1 + -3928 + -2 * -1333, Fi--), xe;
}
function je() {
  return xe = Ye < Q0 ? de(ln, Ye++) : 2 * -1891 + 3613 * 1 + 169 * 1, an++, xe === 4 * -2227 + 3651 + 23 * 229 && (an = -1 * 3839 + 335 * -1 + 4175, Fi++), xe;
}
function Wt() {
  return de(ln, Ye);
}
function li() {
  return Ye;
}
function Xi(t, o) {
  return rn(ln, t, o);
}
function Ro(t) {
  switch (t) {
    case 2013 + -2013 * 1:
    case 408 * 22 + 6603 + -15570:
    case 10:
    case 47 * -178 + -870 + 9249:
    case -1 * 547 + 2439 + -30 * 62:
      return -723 * -11 + 29 * 194 + -617 * 22;
    case 4 * -1577 + 3 * -629 + 11 * 748:
    case 43:
    case 2620 + 1 * -4973 + 799 * 3:
    case 1 * -199 + 9007 * -1 + 1 * 9253:
    case -1 * -6918 + -289 * 13 + -3099:
    case 2091 + 1 * -2027:
    case 8303 + -974 * 4 + 1 * -4281:
    case 59:
    case 10262 + -10139 * 1:
    case -4941 + -699 * 10 + -6028 * -2:
      return 4;
    case -7630 + 1 * 1599 + 1 * 6089:
      return 1 * 2543 + 5 * -1826 + 6590;
    case -2 * 141 + 63 * -143 + 25 * 373:
    case -3432 + 3471 * 1:
    case 3475 + 3694 * 1 + 1 * -7129:
    case -731 * -9 + 2077 + -8565:
      return -1669 * 2 + -6294 + 9634;
    case 1 * -8965 + 2098 * -3 + -17 * -900:
    case -7207 * 1 + 637 * -8 + 12396:
      return 1;
  }
  return -5245 + -7988 * -1 + 211 * -13;
}
function Pc(t) {
  return Fi = an = -1 * 1457 + -8007 + -1893 * -5, Q0 = qe(ln = t), Ye = -3371 * 1 + 7171 + -200 * 19, [];
}
function Nc(t) {
  return ln = "", t;
}
function Co(t) {
  return U0(Xi(Ye - 1, Vo(t === -545 * -4 + 408 * -22 + -71 * -97 ? t + 2 : t === -31 * 293 + -520 + -9643 * -1 ? t + (-978 * 1 + -4902 + 1 * 5881) : t)));
}
function Lc(t) {
  for (; (xe = Wt()) && xe < 976 * -4 + -4288 + -35 * -235; )
    je();
  return Ro(t) > -8373 + 86 * 26 + -877 * -7 || Ro(xe) > 372 * 18 + -6712 + 19 ? "" : " ";
}
function Tc(t, o) {
  for (; --o && je() && !(xe < 15 * -390 + -189 * -12 + 3630 || xe > 3 * -3211 + -8207 + -2 * -8971 || xe > 57 && xe < -2 * 273 + 1049 * -1 + 1660 || xe > 6529 + 10 * -652 + 61 * 1 && xe < 16 * 511 + -3153 + 1 * -4926); )
    ;
  return Xi(t, li() + (o < -1 * 2295 + -4217 * 2 + 565 * 19 && Wt() == 7663 + -2 * -2699 + 3 * -4343 && je() == -1055 + 4 * 2488 + -8865));
}
function Vo(t) {
  for (; je(); )
    switch (xe) {
      case t:
        return Ye;
      case 83 * 59 + -10 * -959 + -14453:
      case -2720 + 3743 * -2 + 10245:
        t !== -3542 * 2 + -1322 * -5 + 508 * 1 && t !== -1 * 5450 + 2 * 184 + -9 * -569 && Vo(xe);
        break;
      case -4883 + 101 * -1 + 157 * 32:
        t === -12 * 799 + 9395 + -26 * -9 && Vo(t);
        break;
      case 1 * -9253 + -7416 + 16761:
        je();
        break;
    }
  return Ye;
}
function Yc(t, o) {
  for (; je() && t + xe !== 4 * 2107 + -223 * 15 + 5036 * -1 + (-218 * 39 + -8819 * 1 + 17331); )
    if (t + xe === 42 + (-8195 + -9 * 657 + -7075 * -2) && Wt() === 5698 + 1 * -5241 + -410)
      break;
  return "/*" + Xi(o, Ye - (5784 + 1 * 6983 + -13 * 982)) + "*" + pr(t === 6080 + -73 * -18 + -93 * 79 ? t : je());
}
function Fc(t) {
  for (; !Ro(Wt()); )
    je();
  return Xi(t, Ye);
}
function Dc(t) {
  return Nc(ui("", null, null, null, [""], t = Pc(t), 0, [8533 + -13 * -265 + -11978], t));
}
function ui(t, o, e, n, i, r, a, s, g) {
  for (var I = 0, C = 64 * 124 + -3992 + -3944, u = a, p = 3241 * 2 + -9643 * -1 + -16125, A = 0, w = 2 * 2148 + -5053 * -1 + 1 * -9349, K = 8088 + -605 * -13 + 7976 * -2, S = -14 * -245 + 5848 + -9277, v = -941 + -6 * -157, E = 0, B = "", $ = i, D = r, j = n, H = B; S; )
    switch (w = E, E = je()) {
      case -5 * 1308 + -241 * -13 + 3447:
        if (w != -6359 * -1 + 6034 + -12285 && de(H, u - (731 * 4 + 1 * 995 + -3918)) == -2 * -3227 + -8941 + -5 * -509) {
          Ii(H += F(Co(E), "&", "&\f"), "&\f") != -(7554 + 5029 * -1 + -631 * 4) && (v = -(-7544 + 1 * 7545));
          break;
        }
      case -623 * -11 + -126 * -48 + 12867 * -1:
      case 4850 + 1 * -7454 + -2643 * -1:
      case 47 * -23 + -13 * -523 + 17 * -331:
        H += Co(E);
        break;
      case -1351 + 4670 * 2 + -7980:
      case -1686 * 3 + 3 * -2102 + 11374:
      case 9599 + 3 * -2308 + -2662:
      case -4938 + 1 * -3155 + 8125:
        H += Lc(w);
        break;
      case 92:
        H += Tc(li() - (1115 + -1 * -646 + -1760), -7350 + -1 * 6001 + 13358);
        continue;
      case 1167 + -232 * -31 + -8312:
        switch (Wt()) {
          case 1597 * -5 + -2 * 3046 + 14119:
          case 9099 + -1 * 3501 + -7 * 793:
            yn(Xc(Yc(je(), li()), o, e, g), g);
            break;
          default:
            H += "/";
        }
        break;
      case (1723 + 3 * -2311 + -1 * -5333) * K:
        s[I++] = qe(H) * v;
      case (-2 * -1497 + 3736 + -6605) * K:
      case 6138 + 13 * -197 + -3518:
      case 2111 * -1 + 8182 + -6071:
        switch (E) {
          case -1074 + -9 * -769 + -5847:
          case -9782 + -9907 * -1:
            S = -2183 * 1 + 1 * -7253 + 7 * 1348;
          case -1073 * -1 + -5567 + 4553 + C:
            v == -1 && (H = F(H, /\f/g, "")), A > -8986 * 1 + -7846 + -1052 * -16 && qe(H) - u && yn(A > 3638 * -2 + -4417 + 335 * 35 ? Oa(H + ";", n, e, u - (5978 + -1 * 5977), g) : Oa(F(H, " ", "") + ";", n, e, u - (109 * 13 + -1 * -6487 + 1 * -7902), g), g);
            break;
          case 6905 + -73 * -43 + -1 * 9985:
            H += ";";
          default:
            if (yn(j = Ha(H, o, e, I, C, i, s, B, $ = [], D = [], u, r), r), E === 5286 + 11 * -201 + -2952)
              if (C === -157 * 47 + 4986 + 2393)
                ui(H, o, j, j, $, r, u, s, D);
              else
                switch (p === 99 && de(H, -3897 + -39 * -100) === 1553 * 5 + 5001 + -12656 ? 6848 + 1831 * -3 + -1255 : p) {
                  case -121 * 41 + 1 * -9773 + 14834:
                  case 6173 + -1 * 1109 + 7 * -708:
                  case 2464 * 4 + -25 * 331 + 46 * -32:
                  case -8457 + -8572 * -1:
                    ui(t, j, j, n && yn(Ha(t, j, j, -9933 + -3 * 2409 + -10 * -1716, -2398 + 7555 * -1 + 37 * 269, i, s, B, i, $ = [], u, D), D), i, D, u, s, n ? $ : D);
                    break;
                  default:
                    ui(H, j, j, j, [""], D, 0, s, D);
                }
        }
        I = C = A = 0, K = v = -6385 + -1 * -1163 + -1741 * -3, B = H = "", u = a;
        break;
      case -203 * -46 + 6037 + 901 * -17:
        u = 4494 + 1 * 6544 + -39 * 283 + qe(H), A = w;
      default:
        if (K < 1) {
          if (E == -4087 + -1 * -4210)
            --K;
          else if (E == 6527 + -1 * 2511 + 1297 * -3 && K++ == 0 && Ec() == -4933 * -2 + -2 * 4214 + -1313)
            continue;
        }
        switch (H += pr(E), E * K) {
          case -1 * 8428 + -1008 + 6 * 1579:
            v = C > 1 * -2497 + 4938 + -2441 ? 1 : (H += "\f", -1);
            break;
          case 12320 + 36 * -341:
            s[I++] = (qe(H) - (7521 + -47 * 160)) * v, v = 7054 + 1 * -7101 + 1 * 48;
            break;
          case -1976 * 2 + -8584 * -1 + -4568:
            Wt() === 45 && (H += Co(je())), p = Wt(), C = u = qe(B = H += Fc(li())), E++;
            break;
          case 2883 * 1 + -2279 * 1 + -559:
            w === 5271 * 1 + 9255 + -14481 && qe(H) == 4078 * -1 + -19 * 218 + 8222 && (K = -2 * -1987 + 8297 * 1 + 7 * -1753);
        }
    }
  return r;
}
function Ha(t, o, e, n, i, r, a, s, g, I, C, u) {
  for (var p = i - 1, A = i === 4045 + 1 * -7057 + 502 * 6 ? r : [""], w = J0(A), K = 4084 + -119 * 37 + -1 * -319, S = 9934 * -1 + -5449 + 1 * 15383, v = 0; K < n; ++K)
    for (var E = 4847 + 24 * 199 + -9623, B = rn(t, p + (2135 * 1 + -6962 + -1207 * -4), p = Oc(S = a[K])), $ = t; E < w; ++E)
      ($ = U0(S > 109 * 1 + 26 * 71 + -391 * 5 ? A[E] + " " + B : F(B, /&\f/g, A[E]))) && (g[v++] = $);
  return Di(t, o, e, i === 2490 + -862 * -3 + -423 * 12 ? Yi : s, g, I, C, u);
}
function Xc(t, o, e, n) {
  return Di(t, o, e, j0, pr(Vc()), rn(t, 136 * 59 + -4721 * 1 + -3301, -(-1 * -9463 + 7872 + -17333)), 0, n);
}
function Oa(t, o, e, n, i) {
  return Di(t, o, e, Ar, rn(t, -1185 + -15 * -79, n), rn(t, n + (2337 + 21 * 1 + -2357 * 1), -(-75 * 64 + -3 * 927 + -17 * -446)), n, i);
}
function z0(t, o, e) {
  switch (Wc(t, o)) {
    case -1363 + -3233 * -2:
      return z + "print-" + t + t;
    case 5737:
    case 614 + 3587 * 1:
    case -3 * 131 + -8299 * 1 + -913 * -13:
    case -7 * 17 + -271 + 3823:
    case 229 + -709 * 14 + -2 * -5669:
    case -3968 + 15 * -267 + 113 * 110:
    case -1117 * -8 + -167 * -38 + -12361:
    case 6993 + 29 * -49:
    case 4 * -223 + -271 * -31 + 1153 * -1:
    case -4800 + 6 * 1774:
    case 3191:
    case -485 * -17 + 486 + -2086:
    case -3013 * 2 + 2 * 1492 + 6047:
    case -62 * -13 + -3375 + 8960:
    case -8289 + 14168 * 1:
    case 254 * 16 + -7688 + -9247 * -1:
    case 607 * -11 + 5 * -753 + 16577:
    case 16221 + 6 * -1937:
    case 4855:
    case -576 * -17 + -7 * 232 + -3953:
    case 6389:
    case 1 * 1641 + -1 * -3889 + -421:
    case -914 + 1073 * 8 + -2305:
    case -789 + 39 * 49 + 4499:
    case -1481 * 4 + -1234 * -7 + 1 * 1115:
      return z + t + t;
    case 8888 + -4099 * 1:
      return kn + t + t;
    case 157 * 42 + -355 * 28 + 8695:
    case 3148 * 3 + -1049 * -1 + 1 * -6247:
    case -6617 + -1 * -7151 + -4 * -1069:
    case -970 + 13147 * 1 + -5209:
    case 3152 + -265 * -31 + -1 * 8611:
      return z + t + kn + t + ee + t + t;
    case -9910 + 1 * 10465 + 5381 * 1:
      switch (de(t, o + (51 * 73 + -5442 + 1 * 1730))) {
        case 114:
          return z + t + ee + F(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 9985 + -1 * -4714 + -14591:
          return z + t + ee + F(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 3592 + -1 * 8139 + -41 * -112:
          return z + t + ee + F(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 3797 * -1 + 1823 + 8802:
    case -235 + -79 * -57:
    case 2903:
      return z + t + ee + t + t;
    case 6165:
      return z + t + ee + "flex-" + t + t;
    case 1135 * -5 + 7572 + 329 * 10:
      return z + t + F(t, /(\w+).+(:[^]+)/, z + "box-$1$2" + ee + "flex-$1$2") + t;
    case 3464 + -1979 * -1:
      return z + t + ee + "flex-item-" + F(t, /flex-|-self/g, "") + (ct(t, /flex-|baseline/) ? "" : ee + "grid-row-" + F(t, /flex-|-self/g, "")) + t;
    case -15 * 254 + 8499 + 14 * -1:
      return z + t + ee + "flex-line-pack" + F(t, /align-content|flex-|-self/g, "") + t;
    case 93 * 52 + 1 * -7487 + 8199:
      return z + t + ee + F(t, "shrink", "negative") + t;
    case -11275 + -1 * -16567:
      return z + t + ee + F(t, "basis", "preferred-size") + t;
    case 1353 * -1 + -10085 + 673 * 26:
      return z + "box-" + F(t, "-grow", "") + z + t + ee + F(t, "grow", "positive") + t;
    case 7217 + -1 * -3511 + -6174:
      return z + F(t, /([^-])(transform)/g, "$1" + z + "$2") + t;
    case 7688 + -1 * -5413 + 1 * -6914:
      return F(F(F(t, /(zoom-|grab)/, z + "$1"), /(image-set)/, z + "$1"), t, "") + t;
    case 120 * -73 + -833 + 1886 * 8:
    case 137 * 37 + -992 * -8 + -9046:
      return F(t, /(image-set\([^]*)/, z + "$1$`$1");
    case 1 * 2161 + -9 + 2816:
      return F(F(t, /(.+:)(flex-)?(.*)/, z + "box-pack:$3" + ee + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + z + t + t;
    case -18 * 419 + 8636 + -1 * -3106:
      if (!ct(t, /flex-|baseline/))
        return ee + "grid-column-align" + rn(t, o) + t;
      break;
    case -6 * -1652 + -2950 + 4370 * -1:
    case 3316 + -22 * -2:
      return ee + F(t, "template-", "") + t;
    case -1 * 7644 + 4887 + -7141 * -1:
    case 2189 + -1427 * -1:
      return e && e.some(function(n, i) {
        return o = i, ct(n.props, /grid-\w+-end/);
      }) ? ~Ii(t + (e = e[o].value), "span") ? t : ee + F(t, "-start", "") + t + ee + "grid-row-span:" + (~Ii(e, "span") ? ct(e, /\d+/) : +ct(e, /\d+/) - +ct(t, /\d+/)) + ";" : ee + F(t, "-start", "") + t;
    case 398 + 2 * 2249:
    case -707 * -7 + -101 * -51 + -2986 * 2:
      return e && e.some(function(n) {
        return ct(n.props, /grid-\w+-start/);
      }) ? t : ee + F(F(t, "-end", "-span"), "span ", "") + t;
    case 3635 * 1 + -5381 + -177 * -33:
    case -2 * -92 + -5 * 19 + 3494:
    case 4068:
    case -129 * -61 + 99 * 66 + -9 * 1319:
      return F(t, /(.+)-inline(.+)/, z + "$1$2") + t;
    case -3228 * -2 + 265 * -25 + 8285 * 1:
    case -3 * 1329 + 4157 + 6889:
    case -7826 + 6311 * -1 + -15 * -1326:
    case 5535:
    case -7401 + 2 * 6423:
    case 12 * -747 + 6464 + 139 * 59:
    case -1 * 9160 + 7083 * 1 + -5 * -1402:
    case 5577 + 25 * -36:
    case 1 * -8969 + -543 * -9 + 9615:
    case 3859 * 1 + -1 * 4609 + 6539 * 1:
    case -38 * 111 + 146 * -2 + -27 * -353:
    case 5902 + 1137 * -1:
      if (qe(t) - (4265 + -2126 * 3 + -1057 * -2) - o > 6)
        switch (de(t, o + (-2 * -3095 + 3537 + -3 * 3242))) {
          case -241 * 7 + -8853 + 463 * 23:
            if (de(t, o + (16 * -494 + 904 * -3 + 10620)) !== 203 * 5 + 5 * 205 + -15 * 133)
              break;
          case 2517 * 1 + -8064 + 5649:
            return F(t, /(.+:)(.+)-([^]+)/, "$1" + z + "$2-$3$1" + kn + (de(t, o + 3) == -7087 + 5 * 1439 ? "$3" : "$2-$3")) + t;
          case 1845 * -3 + -7819 * -1 + -2169:
            return ~Ii(t, "stretch") ? z0(F(t, "stretch", "fill-available"), o, e) + t : t;
        }
      break;
    case -2705 * -3 + 9781 + 708 * -18:
    case 10 * -85 + -3750 + 10520:
      return F(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, i, r, a, s, g, I) {
        return ee + i + ":" + r + I + (a ? ee + i + "-span:" + (s ? g : +g - +r) + I : "") + t;
      });
    case 4949:
      if (de(t, o + (7447 + -3 * 1257 + 734 * -5)) === -4910 + -2 * 3857 + 12745)
        return F(t, ":", ":" + z) + t;
      break;
    case -9756 + -2025 * -8:
      switch (de(t, de(t, -661 * 5 + -1615 * -5 + 29 * -164) === -141 * 37 + 83 * 98 + -2872 ? -607 * -4 + -409 + -1 * 2001 : -5696 + 4352 * 1 + 1 * 1355)) {
        case 120:
          return F(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + z + (de(t, 190 * -15 + -657 * -1 + 2207) === 7 * -39 + -8654 + 2 * 4486 ? "inline-" : "") + "box$3$1" + z + "$2$3$1" + ee + "$2box$3") + t;
        case 100:
          return F(t, ":", ":" + ee) + t;
      }
      break;
    case 5719:
    case 5576 + 1 * -2929:
    case 4 * 2190 + -83 * 118 + 3169:
    case 2684 + 1243 * 1:
    case 1 * 7744 + 9960 + 1 * -15313:
      return F(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function Bi(t, o) {
  for (var e = "", n = -139 * 23 + 27 * 27 + -617 * -4; n < t.length; n++)
    e += o(t[n], n, t, o) || "";
  return e;
}
function jc(t, o, e, n) {
  switch (t.type) {
    case Hc:
      if (t.children.length)
        break;
    case Kc:
    case Ar:
      return t.return = t.return || t.value;
    case j0:
      return "";
    case M0:
      return t.return = t.value + "{" + Bi(t.children, n) + "}";
    case Yi:
      if (!qe(t.value = t.props.join(",")))
        return "";
  }
  return qe(e = Bi(t.children, n)) ? t.return = t.value + "{" + e + "}" : "";
}
function Mc(t) {
  var o = J0(t);
  return function(e, n, i, r) {
    for (var a = "", s = 16944 + -353 * 48; s < o; s++)
      a += t[s](e, n, i, r) || "";
    return a;
  };
}
function Uc(t) {
  return function(o) {
    o.root || (o = o.return) && t(o);
  };
}
function Jc(t, o, e, n) {
  if (t.length > -(-6 * -367 + -6 * -173 + -1 * 3239) && !t.return)
    switch (t.type) {
      case Ar:
        t.return = z0(t.value, t.length, e);
        return;
      case M0:
        return Bi([At(t, { value: F(t.value, "@", "@" + z) })], n);
      case Yi:
        if (t.length)
          return Rc(e = t.props, function(i) {
            switch (ct(i, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Ut(At(t, { props: [F(i, /:(read-\w+)/, ":" + kn + "$1")] }));
                var r = {};
                r.props = [i], Ut(At(t, r)), Wo(t, { props: Ka(e, n) });
                break;
              case "::placeholder":
                Ut(At(t, { props: [F(i, /:(plac\w+)/, ":" + z + "input-$1")] })), Ut(At(t, { props: [F(i, /:(plac\w+)/, ":" + kn + "$1")] })), Ut(At(t, { props: [F(i, /:(plac\w+)/, ee + "input-$1")] }));
                var a = {};
                a.props = [i], Ut(At(t, a)), Wo(t, { props: Ka(e, n) });
                break;
            }
            return "";
          });
    }
}
var L = {};
L.animationIterationCount = 1, L.aspectRatio = 1, L.borderImageOutset = 1, L.borderImageSlice = 1, L.borderImageWidth = 1, L.boxFlex = 1, L.boxFlexGroup = 1, L.boxOrdinalGroup = 1, L.columnCount = 1, L.columns = 1, L.flex = 1, L.flexGrow = 1, L.flexPositive = 1, L.flexShrink = 1, L.flexNegative = 1, L.flexOrder = 1, L.gridRow = 1, L.gridRowEnd = 1, L.gridRowSpan = 1, L.gridRowStart = 1, L.gridColumn = 1, L.gridColumnEnd = 1, L.gridColumnSpan = 1, L.gridColumnStart = 1, L.msGridRow = 1, L.msGridRowSpan = 1, L.msGridColumn = 1, L.msGridColumnSpan = 1, L.fontWeight = 1, L.lineHeight = 1, L.opacity = 1, L.order = 1, L.orphans = 1, L.tabSize = 1, L.widows = 1, L.zIndex = 1, L.zoom = 1, L.WebkitLineClamp = 1, L.fillOpacity = 1, L.floodOpacity = 1, L.stopOpacity = 1, L.strokeDasharray = 1, L.strokeDashoffset = 1, L.strokeMiterlimit = 1, L.strokeOpacity = 1, L.strokeWidth = 1;
var Qc = L, J = {}, Et = typeof process < "u" && void (-2058 + 675 * -11 + -3161 * -3) !== J && (J.REACT_APP_SC_ATTR || J.SC_ATTR) || "data-styled", hr = typeof window < "u" && "HTMLElement" in window, zc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (11699 + 11699 * -1) !== J && void (9423 + 50 * -1 + 1339 * -7) !== J.REACT_APP_SC_DISABLE_SPEEDY && J.REACT_APP_SC_DISABLE_SPEEDY !== "" ? J.REACT_APP_SC_DISABLE_SPEEDY !== "false" && J.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && J !== void 0 && void (-67 * -149 + 2255 + 12238 * -1) !== J.SC_DISABLE_SPEEDY && J.SC_DISABLE_SPEEDY !== "" ? J.SC_DISABLE_SPEEDY !== "false" && J.SC_DISABLE_SPEEDY : J.NODE_ENV !== "production"), Wa = /invalid hook call/i, ei = /* @__PURE__ */ new Set(), $c = function(t, o) {
  if (J.NODE_ENV !== "production") {
    var e = o ? ' with the id of "'.concat(o, '"') : "", n = "The component ".concat(t).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var r = !0;
      console.error = function(a) {
        for (var s = [], g = 159 * -23 + -1805 + 5463; g < arguments.length; g++)
          s[g - (4002 + -274 * 31 + -4493 * -1)] = arguments[g];
        Wa.test(a) ? (r = !1, ei.delete(n)) : i.apply(void (-1 * 7355 + -5 * 831 + -2 * -5755), nn([a], s, !1));
      }, vt(), r && !ei.has(n) && (console.warn(n), ei.add(n));
    } catch (a) {
      Wa.test(a.message) && ei.delete(n);
    } finally {
      console.error = i;
    }
  }
}, ji = Object.freeze([]), sn = Object.freeze({});
function _c(t, o, e) {
  return void (-1 * -4519 + -3118 + -467 * 3) === e && (e = sn), t.theme !== e.theme && t.theme || o || e.theme;
}
var Eo = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), qc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ex = /(^-|-$)/g;
function Ra(t) {
  return t.replace(qc, "-").replace(ex, "");
}
var tx = /(a)(d)/gi, Va = function(t) {
  return String.fromCharCode(t + (t > 25 ? -9355 * 1 + 281 * -23 + 15857 : 1982 * 5 + -9767 + -46));
};
function Po(t) {
  var o, e = "";
  for (o = Math.abs(t); o > 4 * -1649 + -5385 + 12033 * 1; o = o / (2399 + 28 * 346 + -1 * 12035) | 1383 + 461 * -3)
    e = Va(o % (-13529 + -1509 * -9)) + e;
  return (Va(o % (-3567 + -3 * 1207 + 40 * 181)) + e).replace(tx, "$1-$2");
}
var fo, Kt = function(t, o) {
  for (var e = o.length; e; )
    t = (-13794 + -1257 * -11) * t ^ o.charCodeAt(--e);
  return t;
}, $0 = function(t) {
  return Kt(-6180 + -1 * -400 + 11161 * 1, t);
};
function nx(t) {
  return Po($0(t) >>> -405 * -7 + -5308 + 1 * 2473);
}
function _0(t) {
  return J.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function Ao(t) {
  return typeof t == "string" && (J.NODE_ENV === "production" || t.charAt(-1 * -6677 + 22 * 343 + -14223) === t.charAt(0).toLowerCase());
}
var Ne = {};
Ne.childContextTypes = !0, Ne.contextType = !0, Ne.contextTypes = !0, Ne.defaultProps = !0, Ne.displayName = !0, Ne.getDefaultProps = !0, Ne.getDerivedStateFromError = !0, Ne.getDerivedStateFromProps = !0, Ne.mixins = !0, Ne.propTypes = !0, Ne.type = !0;
var pt = {};
pt.name = !0, pt.length = !0, pt.prototype = !0, pt.caller = !0, pt.callee = !0, pt.arguments = !0, pt.arity = !0;
var Zt = {};
Zt.$$typeof = !0, Zt.compare = !0, Zt.defaultProps = !0, Zt.displayName = !0, Zt.propTypes = !0, Zt.type = !0;
var Qt = {};
Qt.$$typeof = !0, Qt.render = !0, Qt.defaultProps = !0, Qt.displayName = !0, Qt.propTypes = !0;
var q0 = typeof Symbol == "function" && Symbol.for, es = q0 ? Symbol.for("react.memo") : -29107 + -1 * -33559 + 55663, ix = q0 ? Symbol.for("react.forward_ref") : 41 * 1418 + 4 * -30011 + -722 * -169, ox = Ne, rx = pt, ts = Zt, ax = ((fo = {})[ix] = Qt, fo[es] = ts, fo);
function Ea(t) {
  return ("type" in (o = t) && o.type.$$typeof) === es ? ts : "$$typeof" in t ? ax[t.$$typeof] : ox;
  var o;
}
var sx = Object.defineProperty, gx = Object.getOwnPropertyNames, Pa = Object.getOwnPropertySymbols, cx = Object.getOwnPropertyDescriptor, xx = Object.getPrototypeOf, Na = Object.prototype;
function ns(t, o, e) {
  if (typeof o != "string") {
    if (Na) {
      var n = xx(o);
      n && n !== Na && ns(t, n, e);
    }
    var i = gx(o);
    Pa && (i = i.concat(Pa(o)));
    for (var r = Ea(t), a = Ea(o), s = 4 * -1033 + -1979 * -4 + -3784; s < i.length; ++s) {
      var g = i[s];
      if (!(g in rx || e && e[g] || a && g in a || r && g in r)) {
        var I = cx(o, g);
        try {
          sx(t, g, I);
        } catch {
        }
      }
    }
  }
  return t;
}
function gn(t) {
  return typeof t == "function";
}
function mr(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function Ot(t, o) {
  return t && o ? "".concat(t, " ").concat(o) : t || o || "";
}
function La(t, o) {
  if (-7414 + -2 * -3707 === t.length)
    return "";
  for (var e = t[2793 + 57 * -49], n = -1389 + -2 * -695; n < t.length; n++)
    e += o ? o + t[n] : t[n];
  return e;
}
function cn(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function No(t, o, e) {
  if (void (2238 + -373 * 6) === e && (e = !1), !e && !cn(t) && !Array.isArray(t))
    return o;
  if (Array.isArray(o))
    for (var n = -6079 * -1 + 106 * 77 + -1 * 14241; n < o.length; n++)
      t[n] = No(t[n], o[n]);
  else if (cn(o))
    for (var n in o)
      t[n] = No(t[n], o[n]);
  return t;
}
function br(t, o) {
  var e = {};
  e.value = o, Object.defineProperty(t, "toString", e);
}
var ue = {};
ue[1] = `Cannot create styled-component for component: %s.

`, ue[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, ue[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, ue[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, ue[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, ue[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, ue[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', ue[8] = `ThemeProvider: Please make your "theme" prop an object.

`, ue[9] = "Missing document `<head>`\n\n", ue[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, ue[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, ue[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", ue[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, ue[14] = `ThemeProvider: "theme" prop is required.

`, ue[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", ue[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, ue[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, ue[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var Ix = J.NODE_ENV !== "production" ? ue : {};
function lx() {
  for (var t = [], o = 42 * -86 + -5007 + 39 * 221; o < arguments.length; o++)
    t[o] = arguments[o];
  for (var e = t[-15547 + -7 * -2221], n = [], i = 1013 * -9 + -17 * -11 + -229 * -39, r = t.length; i < r; i += -10789 + 13 * 830)
    n.push(t[i]);
  return n.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function un(t) {
  for (var o = [], e = 1; e < arguments.length; e++)
    o[e - (-1 * -5017 + -1477 * -1 + -6493)] = arguments[e];
  return J.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(o.length > -14436 + -3609 * -4 ? " Args: ".concat(o.join(", ")) : "")) : new Error(lx.apply(void (-83 * 10 + 1 * 4937 + -1369 * 3), nn([Ix[t]], o, !1)).trim());
}
var ux = function() {
  function t(o) {
    this.groupSizes = new Uint32Array(283 * -10 + 3 * -1559 + 8019), this.length = 512, this.tag = o;
  }
  return t.prototype.indexOfGroup = function(o) {
    for (var e = 3139 + -1955 * -3 + 4502 * -2, n = 0; n < o; n++)
      e += this.groupSizes[n];
    return e;
  }, t.prototype.insertRules = function(o, e) {
    if (o >= this.groupSizes.length) {
      for (var n = this.groupSizes, i = n.length, r = i; o >= r; )
        if ((r <<= 1199 * -1 + 918 + -2 * -141) < 3427 + -100 * 19 + 3 * -509)
          throw un(8767 + 263 * 5 + -10066, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
      for (var a = i; a < r; a++)
        this.groupSizes[a] = -8952 + 1 * 9442 + -490;
    }
    for (var s = this.indexOfGroup(o + (26 * -367 + -6 * -461 + 6777)), g = (a = 8 * 10 + 2641 + -2721, e.length); a < g; a++)
      this.tag.insertRule(s, e[a]) && (this.groupSizes[o]++, s++);
  }, t.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var e = this.groupSizes[o], n = this.indexOfGroup(o), i = n + e;
      this.groupSizes[o] = 4283 + -8 * -1223 + 1563 * -9;
      for (var r = n; r < i; r++)
        this.tag.deleteRule(n);
    }
  }, t.prototype.getGroup = function(o) {
    var e = "";
    if (o >= this.length || 51 * 164 + -911 + -7453 === this.groupSizes[o])
      return e;
    for (var n = this.groupSizes[o], i = this.indexOfGroup(o), r = i + n, a = i; a < r; a++)
      e += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
    return e;
  }, t;
}(), Ci = /* @__PURE__ */ new Map(), Si = /* @__PURE__ */ new Map(), di = -1 * -3947 + 19 * 2 + -3984, ti = function(t) {
  if (Ci.has(t))
    return Ci.get(t);
  for (; Si.has(di); )
    di++;
  var o = di++;
  if (J.NODE_ENV !== "production" && ((0 | o) < 5 * -1957 + -587 * -13 + -2154 * -1 || o > 1073741824))
    throw un(-9563 + -3 * -1769 + 356 * 12, "".concat(o));
  return Ci.set(t, o), Si.set(o, t), o;
}, Cx = function(t, o) {
  di = o + (4599 * 2 + 3763 + -12960), Ci.set(t, o), Si.set(o, t);
}, dx = "style[".concat(Et, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), fx = new RegExp("^".concat(Et, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ax = function(t, o, e) {
  for (var n, i = e.split(","), r = 527 * 9 + 4128 * -1 + -615, a = i.length; r < a; r++)
    (n = i[r]) && t.registerName(o, n);
}, px = function(t, o) {
  for (var e, n = ((e = o.textContent) !== null && void (-7608 + -3804 * -2) !== e ? e : "").split(`/*!sc*/
`), i = [], r = -1495 + 65 * 23, a = n.length; r < a; r++) {
    var s = n[r].trim();
    if (s) {
      var g = s.match(fx);
      if (g) {
        var I = 0 | parseInt(g[1], 10), C = g[14 * -94 + 2317 + -999];
        -7597 * -1 + -3943 * -1 + -11540 !== I && (Cx(C, I), Ax(t, C, g[1 * -8443 + -1 * 6121 + 14567]), t.getTag().insertRules(I, i)), i.length = 10258 + 223 * -46;
      } else
        i.push(s);
    }
  }
};
function hx() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var is = function(t) {
  var o = document.head, e = t || o, n = document.createElement("style"), i = function(s) {
    var g = Array.from(s.querySelectorAll("style[".concat(Et, "]")));
    return g[g.length - (86 * 45 + -7403 + 3534)];
  }(e), r = void (-7 * 378 + -1 * 5575 + -1 * -8221) !== i ? i.nextSibling : null;
  n.setAttribute(Et, "active"), n.setAttribute("data-styled-version", "6.1.1");
  var a = hx();
  return a && n.setAttribute("nonce", a), e.insertBefore(n, r), n;
}, mx = function() {
  function t(o) {
    this.element = is(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet)
        return e.sheet;
      for (var n = document.styleSheets, i = 5 * -4 + 4515 + -4495, r = n.length; i < r; i++) {
        var a = n[i];
        if (a.ownerNode === e)
          return a;
      }
      throw un(1 * -9467 + 1 * 7918 + 1566);
    }(this.element), this.length = -2560 + 20 * 128;
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
}(), bx = function() {
  function t(o) {
    this.element = is(o), this.nodes = this.element.childNodes, this.length = 6487 + -4211 * -2 + -17 * 877;
  }
  return t.prototype.insertRule = function(o, e) {
    if (o <= this.length && o >= 8236 + -8 * -1059 + -16708 * 1) {
      var n = document.createTextNode(e);
      return this.element.insertBefore(n, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, t.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, t;
}(), yx = function() {
  function t(o) {
    this.rules = [], this.length = -17 * 395 + 9094 + -2379;
  }
  return t.prototype.insertRule = function(o, e) {
    return o <= this.length && (this.rules.splice(o, 0, e), this.length++, !0);
  }, t.prototype.deleteRule = function(o) {
    this.rules.splice(o, 1), this.length--;
  }, t.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, t;
}(), Ta = hr, wx = { isServer: !hr, useCSSOMInjection: !zc }, os = function() {
  function t(o, e, n) {
    void (754 * -3 + 4387 + 17 * -125) === o && (o = sn), void (-169 * -37 + -8676 + 2423) === e && (e = {});
    var i = this;
    this.options = Ke(Ke({}, wx), o), this.gs = e, this.names = new Map(n), this.server = !!o.isServer, !this.server && hr && Ta && (Ta = !1, function(r) {
      for (var a = document.querySelectorAll(dx), s = 1632 + 1 * 2729 + -4361, g = a.length; s < g; s++) {
        var I = a[s];
        I && I.getAttribute(Et) !== "active" && (px(r, I), I.parentNode && I.parentNode.removeChild(I));
      }
    }(this)), br(this, function() {
      return function(r) {
        for (var a = r.getTag(), s = a.length, g = "", I = function(u) {
          var p = function(v) {
            return Si.get(v);
          }(u);
          if (void (-4978 + -3 * -163 + 4489 * 1) === p)
            return "continue";
          var A = r.names.get(p), w = a.getGroup(u);
          if (A === void 0 || -4 * -851 + -1 * -6873 + -10277 === w.length)
            return "continue";
          var K = "".concat(Et, ".g").concat(u, '[id="').concat(p, '"]'), S = "";
          void (-1 * -9036 + -9023 + -13) !== A && A.forEach(function(v) {
            v.length > 5004 + -12 * 417 && (S += "".concat(v, ","));
          }), g += "".concat(w).concat(K, '{content:"').concat(S, '"}').concat(`/*!sc*/
`);
        }, C = 0; C < s; C++)
          I(C);
        return g;
      }(i);
    });
  }
  return t.registerId = function(o) {
    return ti(o);
  }, t.prototype.reconstructWithOptions = function(o, e) {
    return void (-2809 + -2064 * -1 + 745) === e && (e = !0), new t(Ke(Ke({}, this.options), o), this.gs, e && this.names || void 0);
  }, t.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || -1 * 3671 + 5070 + -1399) + (509 * -19 + 391 * 14 + 4198);
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(e) {
      var n = e.useCSSOMInjection, i = e.target;
      return e.isServer ? new yx(i) : n ? new mx(i) : new bx(i);
    }(this.options), new ux(o)));
    var o;
  }, t.prototype.hasNameForId = function(o, e) {
    return this.names.has(o) && this.names.get(o).has(e);
  }, t.prototype.registerName = function(o, e) {
    if (ti(o), this.names.has(o))
      this.names.get(o).add(e);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(e), this.names.set(o, n);
    }
  }, t.prototype.insertRules = function(o, e, n) {
    this.registerName(o, e), this.getTag().insertRules(ti(o), n);
  }, t.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, t.prototype.clearRules = function(o) {
    this.getTag().clearGroup(ti(o)), this.clearNames(o);
  }, t.prototype.clearTag = function() {
    this.tag = void (-446 * -8 + 9035 + -12603);
  }, t;
}(), vx = /&/g, Bx = /^\s*\/\/.*$/gm;
function rs(t, o) {
  return t.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(o, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(o, " ")), e.props = e.props.map(function(n) {
      return "".concat(o, " ").concat(n);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = rs(e.children, o)), e;
  });
}
function as(t) {
  var o, e, n, i = t === void 0 ? sn : t, r = i.options, a = void (4 * 268 + 6986 + -8058) === r ? sn : r, s = i.plugins, g = void (-1 * 5645 + -1454 + 7099) === s ? ji : s, I = function(p, A, w) {
    return w === e || w.startsWith(e) && w.endsWith(e) && w.replaceAll(e, "").length > -22 * -163 + 4516 + -8102 ? ".".concat(o) : p;
  }, C = g.slice();
  C.push(function(p) {
    p.type === Yi && p.value.includes("&") && (p.props[16 * 622 + -1 * -1767 + -11719] = p.props[667 * 9 + -5734 + -269].replace(vx, e).replace(n, I));
  }), a.prefix && C.push(Jc), C.push(jc);
  var u = function(p, A, w, K) {
    A === void 0 && (A = ""), void (1 * -1424 + 5589 + -4165) === w && (w = ""), void (-4163 + -5 * 386 + 6093) === K && (K = "&"), o = K, e = A, n = new RegExp("\\".concat(e, "\\b"), "g");
    var S = p.replace(Bx, ""), v = Dc(w || A ? "".concat(w, " ").concat(A, " { ").concat(S, " }") : S);
    a.namespace && (v = rs(v, a.namespace));
    var E = [];
    return Bi(v, Mc(C.concat(Uc(function(B) {
      return E.push(B);
    })))), E;
  };
  return u.hash = g.length ? g.reduce(function(p, A) {
    return A.name || un(-7 * 1193 + 5765 + 867 * 3), Kt(p, A.name);
  }, 8266 + -1 * -7206 + -10091).toString() : "", u;
}
var Sx = new os(), Lo = as(), yr = Vt.createContext({ shouldForwardProp: void (-2982 + -1 * 9103 + 12085), styleSheet: Sx, stylis: Lo });
yr.Consumer;
var Gx = Vt.createContext(void (9511 + -9511 * 1));
function To() {
  return Li(yr);
}
function Zx(t) {
  var o = Re(t.stylisPlugins), e = o[0], n = o[-3 * -1537 + -7158 + 98 * 26], i = To().styleSheet, r = tt(function() {
    var C = i, u = {};
    return u.useCSSOMInjection = !1, t.sheet ? C = t.sheet : t.target && (C = C.reconstructWithOptions({ target: t.target }, !1)), t.disableCSSOMInjection && (C = C.reconstructWithOptions(u)), C;
  }, [t.disableCSSOMInjection, t.sheet, t.target, i]), a = tt(function() {
    var C = {};
    C.namespace = t.namespace, C.prefix = t.enableVendorPrefixes;
    var u = {};
    return u.options = C, u.plugins = e, as(u);
  }, [t.enableVendorPrefixes, t.namespace, e]);
  pe(function() {
    kc(e, t.stylisPlugins) || n(t.stylisPlugins);
  }, [t.stylisPlugins]);
  var s = tt(function() {
    var C = {};
    return C.shouldForwardProp = t.shouldForwardProp, C.styleSheet = r, C.stylis = a, C;
  }, [t.shouldForwardProp, r, a]), g = {};
  g.value = s;
  var I = {};
  return I.value = a, Vt.createElement(yr.Provider, g, Vt.createElement(Gx.Provider, I, t.children));
}
var Ya = function() {
  function t(o, e) {
    var n = this;
    this.inject = function(i, r) {
      void (439 * -11 + -4921 + -15 * -650) === r && (r = Lo);
      var a = n.name + r.hash;
      i.hasNameForId(n.id, a) || i.insertRules(n.id, a, r(n.rules, a, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = e, br(this, function() {
      throw un(-2724 + 571 * -4 + 5020, String(n.name));
    });
  }
  return t.prototype.getName = function(o) {
    return void (9978 * -1 + 5128 + -4850 * -1) === o && (o = Lo), this.name + o.hash;
  }, t;
}(), kx = function(t) {
  return t >= "A" && t <= "Z";
};
function Fa(t) {
  for (var o = "", e = 2370 + -6 * 395; e < t.length; e++) {
    var n = t[e];
    if (-6571 + 1 * 1662 + 1 * 4910 === e && n === "-" && t[3326 * 2 + 5557 + -12209 * 1] === "-")
      return t;
    kx(n) ? o += "-" + n.toLowerCase() : o += n;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var ss = function(t) {
  return t == null || t === !1 || t === "";
}, gs = function(t) {
  var o, e, n = [];
  for (var i in t) {
    var r = t[i];
    t.hasOwnProperty(i) && !ss(r) && (Array.isArray(r) && r.isCss || gn(r) ? n.push("".concat(Fa(i), ":"), r, ";") : cn(r) ? n.push.apply(n, nn(nn(["".concat(i, " {")], gs(r), !1), ["}"], !1)) : n.push("".concat(Fa(i), ": ").concat((o = i, (e = r) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || -1367 * -2 + 4155 + -6889 === e || o in Qc || o.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return n;
};
function Rt(t, o, e, n) {
  if (ss(t))
    return [];
  if (mr(t))
    return [".".concat(t.styledComponentId)];
  if (gn(t)) {
    if (!gn(r = t) || r.prototype && r.prototype.isReactComponent || !o)
      return [t];
    var i = t(o);
    return J.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof Ya || cn(i) || i === null || console.error("".concat(_0(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Rt(i, o, e, n);
  }
  var r;
  return t instanceof Ya ? e ? (t.inject(e, n), [t.getName(n)]) : [t] : cn(t) ? gs(t) : Array.isArray(t) ? Array.prototype.concat.apply(ji, t.map(function(a) {
    return Rt(a, o, e, n);
  })) : [t.toString()];
}
function Kx(t) {
  for (var o = -3761 + 813 * -1 + 4574; o < t.length; o += 1) {
    var e = t[o];
    if (gn(e) && !mr(e))
      return !1;
  }
  return !0;
}
var Hx = $0("6.1.1"), Ox = function() {
  function t(o, e, n) {
    this.rules = o, this.staticRulesId = "", this.isStatic = J.NODE_ENV === "production" && (void (1362 + -557 * -9 + -125 * 51) === n || n.isStatic) && Kx(o), this.componentId = e, this.baseHash = Kt(Hx, e), this.baseStyle = n, os.registerId(e);
  }
  return t.prototype.generateAndInjectStyles = function(o, e, n) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, e, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId))
        i = Ot(i, this.staticRulesId);
      else {
        var r = La(Rt(this.rules, o, e, n)), a = Po(Kt(this.baseHash, r) >>> -4525 + 5 * 47 + 4290 * 1);
        if (!e.hasNameForId(this.componentId, a)) {
          var s = n(r, ".".concat(a), void 0, this.componentId);
          e.insertRules(this.componentId, a, s);
        }
        i = Ot(i, a), this.staticRulesId = a;
      }
    else {
      for (var g = Kt(this.baseHash, n.hash), I = "", C = -4349 * 1 + -8201 + 12550; C < this.rules.length; C++) {
        var u = this.rules[C];
        if (typeof u == "string")
          I += u, J.NODE_ENV !== "production" && (g = Kt(g, u));
        else if (u) {
          var p = La(Rt(u, o, e, n));
          g = Kt(g, p + C), I += p;
        }
      }
      if (I) {
        var A = Po(g >>> 0);
        e.hasNameForId(this.componentId, A) || e.insertRules(this.componentId, A, n(I, ".".concat(A), void (-1 * -7919 + 27 * 158 + -12185), this.componentId)), i = Ot(i, A);
      }
    }
    return i;
  }, t;
}(), cs = Vt.createContext(void (2099 * -1 + -1e4 + -327 * -37));
cs.Consumer;
var po = {}, Da = /* @__PURE__ */ new Set();
function Wx(t, o, e) {
  var n = mr(t), i = t, r = !Ao(t), a = o.attrs, s = void (-9570 + 1 * -421 + -9991 * -1) === a ? ji : a, g = o.componentId, I = void (-5342 + 2 * 2671) === g ? function(D, j) {
    var H = typeof D != "string" ? "sc" : Ra(D);
    po[H] = (po[H] || -6317 + -43 * 49 + 8 * 1053) + (5 * -661 + -8649 + -2391 * -5);
    var ie = "".concat(H, "-").concat(nx("6.1.1" + H + po[H]));
    return j ? "".concat(j, "-").concat(ie) : ie;
  }(o.displayName, o.parentComponentId) : g, C = o.displayName, u = void (-273 * 19 + 1569 + -1 * -3618) === C ? function(D) {
    return Ao(D) ? "styled.".concat(D) : "Styled(".concat(_0(D), ")");
  }(t) : C, p = o.displayName && o.componentId ? "".concat(Ra(o.displayName), "-").concat(o.componentId) : o.componentId || I, A = n && i.attrs ? i.attrs.concat(s).filter(Boolean) : s, w = o.shouldForwardProp;
  if (n && i.shouldForwardProp) {
    var K = i.shouldForwardProp;
    if (o.shouldForwardProp) {
      var S = o.shouldForwardProp;
      w = function(D, j) {
        return K(D, j) && S(D, j);
      };
    } else
      w = K;
  }
  var v = new Ox(e, p, n ? i.componentStyle : void (-1 * -1817 + 4898 + -6715 * 1));
  function E(D, j) {
    return function(H, ie, _) {
      var oe = H.attrs, q = H.componentStyle, Ce = H.defaultProps, Je = H.foldedComponentIds, Ct = H.styledComponentId, re = H.target, be = Vt.useContext(cs), Qe = To(), Fe = H.shouldForwardProp || Qe.shouldForwardProp;
      J.NODE_ENV !== "production" && ko(Ct);
      var ce = function(Ve, ot, Se) {
        var Ge = {};
        Ge.className = void (5948 + -1 * 71 + -5877), Ge.theme = Se;
        for (var rt, De = Ke(Ke({}, ot), Ge), Lt = -1 * 5634 + -1 * -1907 + 3727; Lt < Ve.length; Lt += -37 * -74 + 25 * -159 + -1238 * -1) {
          var Ee = gn(rt = Ve[Lt]) ? rt(De) : rt;
          for (var Xe in Ee)
            De[Xe] = Xe === "className" ? Ot(De[Xe], Ee[Xe]) : Xe === "style" ? Ke(Ke({}, De[Xe]), Ee[Xe]) : Ee[Xe];
        }
        return ot.className && (De.className = Ot(De.className, ot.className)), De;
      }(oe, ie, _c(ie, be, Ce) || sn), ze = ce.as || re, he = {};
      for (var Ie in ce)
        void (-6863 * -1 + -5062 + -1801) === ce[Ie] || Ie[-4319 + 17 * -224 + -387 * -21] === "$" || Ie === "as" || Ie === "theme" || (Ie === "forwardedAs" ? he.as = ce.forwardedAs : Fe && !Fe(Ie, ze) || (he[Ie] = ce[Ie], Fe || J.NODE_ENV !== "development" || Ng(Ie) || Da.has(Ie) || !Eo.has(ze) || (Da.add(Ie), console.warn('styled-components: it looks like an unknown prop "'.concat(Ie, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var $e = function(Ve, ot) {
        var Se = To(), Ge = Ve.generateAndInjectStyles(ot, Se.styleSheet, Se.stylis);
        return J.NODE_ENV !== "production" && ko(Ge), Ge;
      }(q, ce);
      J.NODE_ENV !== "production" && H.warnTooManyClasses && H.warnTooManyClasses($e);
      var Be = Ot(Je, Ct);
      return $e && (Be += " " + $e), ce.className && (Be += " " + ce.className), he[Ao(ze) && !Eo.has(ze) ? "class" : "className"] = Be, he.ref = _, ve(ze, he);
    }(B, D, j);
  }
  E.displayName = u;
  var B = Vt.forwardRef(E), $ = {};
  return $.attrs = !0, $.componentStyle = !0, $.displayName = !0, $.foldedComponentIds = !0, $.shouldForwardProp = !0, $.styledComponentId = !0, $.target = !0, B.attrs = A, B.componentStyle = v, B.displayName = u, B.shouldForwardProp = w, B.foldedComponentIds = n ? Ot(i.foldedComponentIds, i.styledComponentId) : "", B.styledComponentId = p, B.target = n ? i.target : t, Object.defineProperty(B, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(D) {
    this._foldedDefaultProps = n ? function(j) {
      for (var H = [], ie = -555 + -278 * -2; ie < arguments.length; ie++)
        H[ie - (59 * 107 + 1061 + -7373)] = arguments[ie];
      for (var _ = -3176 + 1588 * 2, oe = H; _ < oe.length; _++)
        No(j, oe[_], !0);
      return j;
    }({}, i.defaultProps, D) : D;
  } }), J.NODE_ENV !== "production" && ($c(u, p), B.warnTooManyClasses = /* @__PURE__ */ function(D, j) {
    var H = {}, ie = !1;
    return function(_) {
      if (!ie && (H[_] = !0, Object.keys(H).length >= -2468 * -2 + -262 + -4474 * 1)) {
        var oe = j ? ' with the id of "'.concat(j, '"') : "";
        console.warn("Over ".concat(-5368 + -928 * -6, " classes were generated for component ").concat(D).concat(oe, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), ie = !0, H = {};
      }
    };
  }(u, p)), br(B, function() {
    return ".".concat(B.styledComponentId);
  }), r && ns(B, t, $), B;
}
function Xa(t, o) {
  for (var e = [t[0]], n = 8066 + 50 * -10 + -7566, i = o.length; n < i; n += -1 * 4151 + 7941 + -3789)
    e.push(o[n], t[n + 1]);
  return e;
}
var ja = function(t) {
  var o = {};
  return o.isCss = !0, Object.assign(t, o);
};
function Rx(t) {
  for (var o = [], e = 49 * 2 + 2097 + -2194 * 1; e < arguments.length; e++)
    o[e - (-3 * 1011 + 433 + 1 * 2601)] = arguments[e];
  if (gn(t) || cn(t)) {
    var n = t;
    return ja(Rt(Xa(ji, nn([n], o, !0))));
  }
  var i = t;
  return -1630 + 1630 * 1 === o.length && 3775 + 1 * 2812 + 89 * -74 === i.length && typeof i[5563 + 5563 * -1] == "string" ? Rt(i) : ja(Rt(Xa(i, o)));
}
function Yo(t, o, e) {
  if (e === void 0 && (e = sn), !o)
    throw un(1, o);
  var n = function(i) {
    for (var r = [], a = -709 * 4 + -1 * -8273 + -5436; a < arguments.length; a++)
      r[a - (-103 * -26 + -7375 + 4698)] = arguments[a];
    return t(o, e, Rx.apply(void (5 * -1399 + 91 * 13 + 4 * 1453), nn([i], r, !1)));
  };
  return n.attrs = function(i) {
    return Yo(t, o, Ke(Ke({}, e), { attrs: Array.prototype.concat(e.attrs, i).filter(Boolean) }));
  }, n.withConfig = function(i) {
    return Yo(t, o, Ke(Ke({}, e), i));
  }, n;
}
var xs = function(t) {
  return Yo(Wx, t);
}, Ln = xs;
Eo.forEach(function(t) {
  Ln[t] = xs(t);
});
J.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ni = "__sc-".concat(Et, "__");
J.NODE_ENV !== "production" && J.NODE_ENV !== "test" && typeof window < "u" && (window[ni] || (window[ni] = 6716 + 559 * 6 + 38 * -265), -6923 + 3432 * 2 + 60 === window[ni] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ni] += 1 * 6049 + -9900 + 3852 * 1);
const Vx = Ln.div`
  position: relative;
`, Ex = Ln.video`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(t) => t.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class ne extends Error {
  constructor(e, n) {
    super(e);
    Y(this, "cause");
    this.name = "AutoCaptureError", this.cause = n;
  }
  static logError(e) {
  }
  static fromCameraError(e) {
    if (this.logError(e), e instanceof ne)
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
    return new ne(n, e);
  }
  static fromError(e) {
    if (this.logError(e), e instanceof ne)
      return e;
    const n = "An unexpected error has occurred";
    return new ne(n);
  }
}
var fi = ((t) => (t.CONTINUE_DETECTION = "continue-detection", t.SWITCH_CAMERA = "switch-camera", t.TOGGLE_MIRROR = "toggle-mirror", t))(fi || {}), Is = ((t) => (t.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", t.CONTROL = "document-auto-capture:control", t.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", t.DOCUMENT_DETECTION = "document-auto-capture:document-detection", t.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", t.STATE_CHANGED = "document-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", t))(Is || {}), et = ((t) => (t.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", t.CONTROL = "face-auto-capture:control", t.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", t.FACE_DETECTION = "face-auto-capture:face-detection", t.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", t.STATE_CHANGED = "face-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", t))(et || {}), Px = ((t) => (t.ANIMATION_END = "magnifeye-auto-capture:animation-end", t.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", t))(Px || {}), Nx = ((t) => (t.STATUS_CHANGED = "smile-auto-capture:status-changed", t))(Nx || {});
const ls = {};
ls.EYE_NOT_PRESENT = "eye_not_present";
const Ma = ls, we = {};
we.CANDIDATE_SELECTION = "candidate_selection", we.FACE_TOO_CLOSE = "face_too_close", we.FACE_TOO_FAR = "face_too_far", we.FACE_CENTERING = "face_centering", we.FACE_NOT_PRESENT = "face_not_present", we.SHARPNESS_TOO_LOW = "sharpness_too_low", we.BRIGHTNESS_TOO_LOW = "brightness_too_low", we.BRIGHTNESS_TOO_HIGH = "brightness_too_high", we.DEVICE_PITCHED = "device_pitched", we.LEFT_EYE_NOT_PRESENT = "left_" + Ma.EYE_NOT_PRESENT, we.RIGHT_EYE_NOT_PRESENT = "right_" + Ma.EYE_NOT_PRESENT, we.MOUTH_NOT_PRESENT = "mouth_not_present", we.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", we.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const me = we, ke = {};
ke.isPresent = me.FACE_NOT_PRESENT, ke.isNotPitched = me.DEVICE_PITCHED, ke.isNotSmall = me.FACE_TOO_FAR, ke.isNotLarge = me.FACE_TOO_CLOSE, ke.isNotOutOfBounds = me.FACE_CENTERING, ke.isNotDim = me.BRIGHTNESS_TOO_LOW, ke.isNotBright = me.BRIGHTNESS_TOO_HIGH, ke.isSharp = me.SHARPNESS_TOO_LOW, ke.isLeftEyePresent = me.LEFT_EYE_NOT_PRESENT, ke.isRightEyePresent = me.RIGHT_EYE_NOT_PRESENT, ke.isMouthPresent = me.MOUTH_NOT_PRESENT, ke.isMouthScoreNotTooHigh = me.MOUTH_SCORE_TOO_HIGH, ke.isMouthScoreNotTooLow = me.MOUTH_SCORE_TOO_LOW;
const Lx = ke, wn = {};
wn.LOADING = "LOADING", wn.ERROR = "ERROR", wn.WAITING = "WAITING", wn.RUNNING = "RUNNING";
const We = wn;
var Tx = ((t) => (t.CLOSEUP = "CLOSEUP", t.DISTANT = "DISTANT", t.MIDDLE = "MIDDLE", t))(Tx || {});
const Mi = ur(void 0);
Mi.displayName = "AppStateContext";
function Yx() {
  const t = Li(Mi);
  if (t === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return t;
}
const Fx = Mi.Provider, Ui = Yx;
class us extends Le {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var e;
    const o = new ne("An unknown error has occurred");
    (e = this.context) == null || e.handleError(o);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var o;
    return ((o = this.context) == null ? void 0 : o.appState) === We.ERROR ? null : this.props.children;
  }
}
Y(us, "contextType", Mi);
const Dx = Ln.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
var Xx = 158 * 35 + 2115 + 7645 * -1;
function O(t, o, e, n, i, r) {
  var a, s, g = {};
  for (s in o)
    s == "ref" ? a = o[s] : g[s] = o[s];
  var I = {};
  I.type = t, I.props = g, I.key = e, I.ref = a, I.__k = null, I.__ = null, I.__b = 0, I.__e = null, I.__d = void (-946 + 19 * 16 + 642), I.__c = null, I.constructor = void (22 * -309 + 6970 + -172), I.__v = --Xx, I.__i = -(-618 + -1 * -619), I.__u = 0, I.__source = i, I.__self = r;
  var C = I;
  if (typeof t == "function" && (a = t.defaultProps))
    for (s in a)
      void (-7546 + 343 * 22) === g[s] && (g[s] = a[s]);
  return k.vnode && k.vnode(C), C;
}
const jx = Ln.div`
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
function Mx() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Ux = E0(({
  detectionDetails: t,
  isImageMirror: o
}, e) => Mx() ? (console.log(t), O(Me, {
  children: [O(Dx, {
    ref: e,
    $isImageMirror: o
  }), O(jx, {
    children: Object.entries(t).map(([n, i]) => O("div", {
      children: [n, ": ", O("strong", {
        children: i
      })]
    }, n))
  })]
})) : null), Jx = 3720 + 2 * 77 + -3874 + 0.4, Qx = 0 + 0.16, zx = -562 * 16 + -1333 + 59 * 175 + 0.2, $x = -4249 + -128 * 70 + -4403 * -3 + 0.05, _x = -1 * -2957 + -5 * 1743 + 5758, Fo = {};
Fo.min = -(-334 * 12 + -3158 + 7167), Fo.max = 1;
const Ua = Fo, Ja = 7578 + -9 * -849 + -15219, qx = 0 + 0.3, eI = -1 * 8709 + 6089 + 2620 + 0.2, tI = -7155 + -7 * 463 + -452 * -23 + 0.85, nI = -3931 * 2 + -11 * 726 + 7939 * 2, iI = -5493 + -953 * 8 + 13126 + 0.8100000000000005, Ai = {};
Ai.minDuration = 1e3, Ai.maxDuration = 2500, Ai.minFrames = 10;
const ho = Ai, Do = {};
Do.max = 100, Do.min = 10;
const Qa = Do, oI = 720, rI = 200, aI = 593 * 4 + 8557 + 1 * -10926, Cs = "AES-CBC", ds = "RSA-OAEP", sI = "SHA-256", gI = "image/jpeg", cI = -5467 + 371 * 22 + -2687, xI = 7129 * 1 + -5526 + 1 * -1563, II = "SAM v1.39.3 for idcards", lI = "dot_embedded_bg.wasm", fs = ur(null), As = () => {
  const t = Li(fs);
  if (!t)
    throw new Error("Missing provider for CameraOptionsContext");
  return t;
}, uI = (t) => {
  var g, I, C;
  const {
    cameraFacing: o,
    licensePath: e,
    onError: n,
    onPhotoTaken: i,
    sessionToken: r,
    thresholds: a,
    wasmDirectoryPath: s
  } = t;
  return {
    onPhotoTaken: i,
    onError: n,
    cameraFacing: o ?? "user",
    wasmDirectoryPath: s,
    licensePath: e,
    sessionToken: r,
    thresholds: {
      faceConfidence: (a == null ? void 0 : a.faceConfidence) ?? Jx,
      minFaceSizeRatio: (a == null ? void 0 : a.minFaceSizeRatio) ?? Qx,
      maxFaceSizeRatio: (a == null ? void 0 : a.maxFaceSizeRatio) ?? zx,
      sharpnessThreshold: (a == null ? void 0 : a.sharpnessThreshold) ?? qx,
      brightnessLowThreshold: (a == null ? void 0 : a.brightnessLowThreshold) ?? eI,
      brightnessHighThreshold: (a == null ? void 0 : a.brightnessHighThreshold) ?? tI,
      outOfBoundsThreshold: (a == null ? void 0 : a.outOfBoundsThreshold) ?? $x,
      devicePitchAngleThreshold: (a == null ? void 0 : a.devicePitchAngleThreshold) ?? nI,
      mouth: {
        confidence: ((g = a == null ? void 0 : a.mouth) == null ? void 0 : g.confidence) ?? _x,
        status: {
          min: ((I = a == null ? void 0 : a.mouth) == null ? void 0 : I.status.min) ?? Ua.min,
          max: ((C = a == null ? void 0 : a.mouth) == null ? void 0 : C.status.max) ?? Ua.max
        }
      },
      leftEye: (a == null ? void 0 : a.leftEye) ?? {
        confidence: Ja
      },
      rightEye: (a == null ? void 0 : a.rightEye) ?? {
        confidence: Ja
      }
    }
  };
}, CI = ({
  cameraOptions: t,
  children: o
}) => {
  const e = tt(() => ({
    faceCameraOptions: uI(t)
  }), [t]);
  return O(fs.Provider, {
    value: e,
    children: o
  });
}, dI = -33 * 143 + 2005 * 1 + -1 * -2714 + 0.75, fI = 465 * 2 + 1 * 997 + -1925, AI = 4841 * -1 + -8841 + 193 * 74, pI = -4916 + -9 * -207 + 3053, hI = (t, o) => {
  const e = {};
  e.detail = o, document.dispatchEvent(new CustomEvent(t, e));
}, Vi = class Vi {
  constructor() {
    Y(this, "lastDetails", {});
    Y(this, "delayedTime", 1 * -4527 + -7330 + 11857);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Vi()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -9883 * 1 + 241 * 7 + 8196;
  }
  isDetailChanged(o, e) {
    return JSON.stringify(e) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = e, !0) : !1;
  }
  dispatchCustomEventOnChange(o, e) {
    this.isDetailChanged(o, e) && hI(o, e);
  }
  dispatchDelayedCustomEventOnChange(o, e, n) {
    const i = performance.now();
    i - this.delayedTime > n && (this.dispatchCustomEventOnChange(o, e), this.delayedTime = i);
  }
};
Y(Vi, "_instance");
let Vn = Vi;
const Cn = Vn.getInstance(), za = (t, o, e = AI) => {
  const n = {};
  n.instructionCode = o;
  const i = n;
  Cn.dispatchDelayedCustomEventOnChange(t, i, e);
}, $a = (t, o) => {
  Cn.dispatchCustomEventOnChange(t, o);
}, mI = (t, o) => {
  Cn.dispatchCustomEventOnChange(t, o);
}, bI = (t, o) => {
  const e = {};
  e.size = o;
  const n = e;
  Cn.dispatchCustomEventOnChange(t, n);
}, yI = (t, o, e) => {
  const n = o.confidence < e ? void 0 : o, i = {};
  i.detectedObject = n;
  const r = i;
  Cn.dispatchCustomEventOnChange(t, r);
}, wI = (t, o, e) => {
  const n = {};
  n.image = e, n.data = {}, n.data.detection = o, n.data.imageResolution = {}, n.data.imageResolution.width = e.width, n.data.imageResolution.height = e.height;
  const i = n;
  Cn.dispatchCustomEventOnChange(t, i);
};
var Oe = {};
Oe.VITE_FACE_COUNTLY_APP_KEY = "5f83e83ee4cee1ab6e5bbf86e215644473299675", Oe.VITE_MAGNIFEYE_COUNTLY_APP_KEY = "d5ca54dabfb1a2c72d7090c9c8980252a879da44", Oe.VITE_DOCUMENT_COUNTLY_APP_KEY = "065cf6e242fc5e785cd17eebfbfbbd212a33133b", Oe.VITE_COUNTLY_URL = "https://innovatrics.count.ly", Oe.VITE_SMILE_COUNTLY_APP_KEY = "d64319129bb0ee02eccfab418edba9629a97d6b6", Oe.VITE_RSA_PUBLIC_KEY = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", Oe.BASE_URL = "/", Oe.MODE = "production", Oe.DEV = !1, Oe.PROD = !0, Oe.SSR = !1, Oe.VITE_PACKAGE_VERSION = "6.1.0";
var vI = Oe;
const BI = () => {
  var t;
  return ((t = vI.VITE_APP_ENV) == null ? void 0 : t.toLowerCase()) === "dev";
}, SI = (t, o, e = gI) => new Promise((n) => {
  t.toBlob((i) => {
    if (!i)
      throw new Error("Canvas to Blob failed");
    n(i);
  }, e, o);
}), GI = async (t) => SI(t, -7273 + -7 * 1307 + 16512), ZI = (t, o) => {
  const e = document.createElement("canvas");
  e.width = o.width, e.height = o.height;
  const n = e.getContext("2d");
  if (!n)
    throw new Error("cropImage ctx error");
  return n.drawImage(t, o.shiftX, o.shiftY, o.width, o.height, 0, 719 + -1 * 719, e.width, e.height), e;
}, kI = (t) => {
  const o = t.getContext("2d");
  if (!o)
    throw new Error("getImageDataForSam ctx error");
  const { data: e } = o.getImageData(-3258 + -1629 * -2, -6 * -265 + 3981 + -9 * 619, t.width, t.height);
  return e;
}, ps = (t, o, e, n) => {
  const i = t.getContext("2d");
  i && (i.beginPath(), n ? (i.fillStyle = e, i.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (i.strokeStyle = e, i.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), i.stroke());
}, mo = (t, o, e) => {
  const { height: n, shiftX: i, shiftY: r, width: a } = o, s = {};
  s.x = i, s.y = r;
  const g = {};
  g.topLeft = s, g.width = a, g.height = n, g.color = e, ps(t, g, e);
}, Kn = (t, o, e, n = -1 * 7747 + 6495 + -2 * -626) => {
  const i = t.getContext("2d");
  i && (i.fillStyle = e, i.fillRect(o.x + n, o.y + n, 1 * -1379 + -8237 * 1 + 9623, 7), i.beginPath());
}, KI = (t, o) => {
  const e = t.getContext("2d");
  e && e.drawImage(o, 6101 * -1 + -9700 + 15801, 172 * 6 + 1 * 1401 + -2433);
}, HI = (t, o) => {
  if (BI()) {
    const e = {};
    e.candidateSelectionImages = o;
    const n = e;
    Vn.getInstance().dispatchCustomEventOnChange(t, n);
  }
}, OI = (t, o) => {
  const { cameraResolution: e, shouldMirror: n } = o;
  pe(() => {
    if (!e)
      return;
    const i = {};
    i.cameraResolution = e, i.isMirroring = n, mI(t, i);
  }, [e, n, t]);
};
var hs = ((t) => (t.DOCUMENT = "document-auto-capture:dev", t.FACE = "face-auto-capture:dev", t))(hs || {});
const Xo = {};
Xo.SIMD = "simd", Xo.NO_SIMD = "no-simd";
const _a = Xo, jo = {};
jo.FREEMIUM = "Freemium", jo.PREMIUM = "Premium";
const Mo = jo, pi = {};
pi.VISIBLE = "VISIBLE", pi.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", pi.HIDDEN = "HIDDEN";
const Gi = pi, ms = (t) => t.length < -9645 + 19 * -311 + 15 * 1037 ? -34 * -233 + 22 * -212 + -3258 : t.reduce((e, n) => e + n, 1899 + -7589 * 1 + 2 * 2845) / t.length, Tn = (t) => Number.parseFloat(t.toFixed(747 + 3002 * -1 + -1129 * -2)), WI = (t) => {
  const o = t.getContext("2d");
  o && o.clearRect(-2882 + 2615 * -1 + 5497, 0, o.canvas.width, o.canvas.height);
};
class RI {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((e) => e.kind === "videoinput");
  }
}
const Ji = (t, o) => Math.min(t, o), VI = (t, o) => {
  const e = Ji(o.width, o.height);
  return Tn(t * e);
}, bs = ({ height: t, width: o }) => {
  const e = Ji(o, t), n = e / (8987 + -804 * 7 + -839 * 4) * (872 + 6221 * 1 + -7089);
  if (o > t) {
    const r = {};
    return r.width = n, r.height = e, r;
  }
  const i = {};
  return i.width = e, i.height = n, i;
}, ys = ({ height: t, width: o }) => {
  const e = Ji(o, t) * dI, n = (o - e) / (3461 * -1 + 7293 + -3830), i = (t - e) / (-593 * 4 + 6327 * 1 + -3953), r = {};
  return r.shiftX = n, r.shiftY = i, r.width = e, r.height = e, r;
}, EI = (t) => {
  const { height: o, shiftX: e, shiftY: n, width: i } = ys(t), r = {};
  return r.shiftX = e / t.width, r.shiftY = n / t.height, r.width = i / t.width, r.height = o / t.height, r;
}, PI = (t, o) => VI(t, o) * fI, NI = "@innovatrics/dot-common-auto-capture", LI = "6.1.0", TI = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, YI = {
  "@dot/proto-files": "1.0.3",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.2.2",
  comlink: "^4.4.1",
  preact: "^10.19.3",
  "styled-components": "^6.1.1",
  "wasm-feature-detect": "^1.6.1"
}, FI = {
  "@preact/preset-vite": "^2.7.0",
  "@testing-library/preact": "^3.2.3",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.3.3",
  vite: "^5.0.10",
  vitest: "^1.0.4"
}, DI = {
  name: NI,
  private: !0,
  version: LI,
  scripts: TI,
  dependencies: YI,
  devDependencies: FI
}, ws = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), qa = () => {
  const t = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return t && o;
}, XI = () => {
  const t = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return t && o ? !1 : o;
}, Uo = (t) => new Promise((o) => {
  setTimeout(o, t);
}), zt = (t) => JSON.parse(JSON.stringify(t, (o, e) => typeof e == "number" ? Tn(e) : e)), vs = () => DI.version, Bs = (t) => new URL(t).hostname.replace("www.", ""), jI = () => Bs(window.location.href) === "localhost", ii = (t) => Object.entries(t).map(([o, e]) => encodeURIComponent(o) + "=" + encodeURIComponent(e)).join("&"), MI = (t, o) => {
  const e = t && performance.now() - t;
  return o >= ho.minFrames ? e > ho.minDuration : e > ho.maxDuration;
}, UI = (t, o) => JSON.stringify(t) === JSON.stringify(o) ? o : t;
function JI(t, o) {
  let e;
  return (...n) => {
    const i = () => {
      clearTimeout(e), e = void 0, t(...n);
    };
    e === void (1 * -1892 + 1 * -3159 + 5051) && (e = setTimeout(i, o));
  };
}
const QI = (t) => t === Is.CONTROL ? !ws() : !0, zI = (t, o) => {
  const { appState: e, handleAppStateChange: n, handleError: i } = Ui(), [r, a] = Re(), s = tt(() => {
    const I = o == null ? void 0 : o.getCameraSettings().facingMode;
    return I ? r ?? I === "user" : r ?? QI(t);
  }, [o, r, t]);
  pe(() => {
    const I = () => {
      e !== We.LOADING && n(We.RUNNING);
    }, C = () => {
      a(r === void 0 ? !s : !r);
    }, u = async () => {
      if (o) {
        n(We.LOADING);
        try {
          await o.switchCamera(), n(We.RUNNING);
        } catch (A) {
          if (A instanceof Error) {
            i(ne.fromCameraError(A));
            return;
          }
        }
        a(void 0);
      }
    }, p = (A) => {
      var w;
      switch ((w = A.detail) == null ? void 0 : w["instruction"]) {
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
};
function e0(t) {
  t.getTracks().forEach((e) => {
    e.stop();
  });
}
class $I {
  constructor() {
    Y(this, "canvasElement");
    Y(this, "context");
    this.canvasElement = document.createElement("canvas"), this.context = this.canvasElement.getContext("2d");
  }
  cloneMutable(o) {
    this.canvasElement.width = o.width, this.canvasElement.height = o.height, KI(this.canvasElement, o);
  }
}
const hi = {};
hi.width = 1920, hi.height = 1080, hi.facingMode = "user";
const _I = hi;
class Hn extends RI {
  constructor(e) {
    super();
    Y(this, "videoRef");
    Y(this, "mediaStream", null);
    Y(this, "videoTrack", null);
    Y(this, "availableCameraProperties", []);
    Y(this, "canvas");
    this.videoRef = e, this.canvas = new $I();
  }
  async initWebcam(e = {}) {
    const n = await this.getBestCamera(e.facingMode);
    await this.getAvailableCamerasInfo();
    const i = this.getConstraints(e, n);
    await this.startWebcam(i), XI() && await this.startWebcam(i);
  }
  async startWebcam(e = {}) {
    var n;
    return this.stopCamera(), qa() && await Uo(-7 * -1155 + 648 + -8283), this.mediaStream = await navigator.mediaDevices.getUserMedia(e), this.videoRef.srcObject = this.mediaStream, await this.videoRef.play(), this.videoTrack = (n = this.mediaStream) == null ? void 0 : n.getVideoTracks()[0], this.checkVideoTrackSettings(), this.videoTrack;
  }
  checkVideoTrackSettings() {
    var i;
    const e = (i = this.videoTrack) == null ? void 0 : i.getSettings();
    if (!(e != null && e.height) || !(e != null && e.width))
      throw new ne("Could not init camera settings");
    if (Math.min(e == null ? void 0 : e.width, e == null ? void 0 : e.height) < oI)
      throw this.stopCamera(), new ne("Could not init video because of low camera resolution: " + e.width + "x" + e.height + ".");
  }
  async getBestCamera(e) {
    const n = {};
    return n.video = !0, this.mediaStream = await navigator.mediaDevices.getUserMedia(n), this.stopCamera(), ws() && e === "environment" ? (await Hn.getVideoInputDeviceList()).find((a) => a.label.includes("back") && a.label.includes("0")) : void (5807 + 1 * -9949 + -109 * -38);
  }
  async getAvailableCamerasInfo() {
    const e = await Hn.getVideoInputDeviceList();
    for (const n of e) {
      qa() && await Uo(4 * -767 + -3519 * -1 + 1 * -1);
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
        this.availableCameraProperties.push(u), e0(a);
      } catch (i) {
        i instanceof Error && ne.logError(i);
      }
    }
  }
  getConstraints(e, n) {
    const i = { ..._I, ...e };
    i.deviceId = n ? { exact: n.deviceId } : void (4373 * -1 + 3420 + -1 * -953);
    const r = {};
    return r.video = i, r.audio = !1, r;
  }
  takePhoto() {
    var n;
    const e = (n = this.videoTrack) == null ? void 0 : n.getSettings();
    if (!(e != null && e.width))
      throw new ne("Cant take photo - video width is undefined");
    if (!(e != null && e.height))
      throw new ne("Cant take photo - video height is undefined");
    if (!this.canvas.context)
      throw new ne("Cant take photo - cant create context");
    return this.canvas.canvasElement.width = e.width, this.canvas.canvasElement.height = e.height, this.canvas.context.drawImage(this.videoRef, -2383 * -1 + -9211 + 6828, 20 * -411 + -6245 + 14465 * 1), this.canvas.canvasElement;
  }
  getCameraResolution() {
    var i;
    const e = (i = this.videoTrack) == null ? void 0 : i.getSettings();
    if (!(e != null && e.width))
      throw new ne("Video width is undefined");
    if (!(e != null && e.height))
      throw new ne("Video height is undefined");
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
    const e = this.videoTrack.getConstraints(), n = this.videoTrack.getSettings(), i = await Hn.getVideoInputDeviceList();
    if (i.length <= 1 * -5177 + 4591 * 1 + 587 * 1)
      return;
    const r = i.findIndex((g) => g.deviceId === n.deviceId), a = i[r + (1 * 9823 + 6883 + 16705 * -1)] ?? i[908 + -1262 * -7 + -9742], s = this.getConstraints(e, a);
    await this.startWebcam(s);
  }
  stopCamera() {
    this.mediaStream && (e0(this.mediaStream), this.videoRef.srcObject = null);
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
const qI = (t, o) => {
  var g;
  const e = vt(), { handleError: n, setIsCameraReady: i } = Ui(), [r, a] = Re(), s = vi((I) => {
    a((C) => UI(I, C));
  }, []);
  return pe(() => ((async () => {
    if (!(t != null && t.current)) {
      n(new ne("Something went wrong during video initialization"));
      return;
    }
    const C = new Hn(t.current);
    try {
      const u = {};
      u.facingMode = o, await C.initWebcam(u);
    } catch (u) {
      if (u instanceof Error) {
        n(ne.fromCameraError(u));
        return;
      }
    }
    i(!0), s(C.getCameraResolution()), e.current = C;
  })(), function() {
    e.current && e.current.stopCamera();
  }), [o, n, i, t, s]), { cameraHandler: e.current, cameraSettings: (g = e.current) == null ? void 0 : g.getCameraSettings(), cameraResolution: r, onCameraResolutionChange: s };
}, el = (t, o) => {
  const [e, n] = Re();
  pe(() => {
    const i = () => {
      !t.current || e === window.innerWidth || (n(window.innerWidth), bI(o, t.current.getBoundingClientRect()));
    };
    return i(), window.addEventListener("resize", i), () => {
      window.removeEventListener("resize", i);
    };
  }, [t, o, e]);
};
class wr extends Array {
  constructor(e) {
    super();
    Y(this, "size");
    this.size = e;
  }
  pushFixed(...e) {
    if (e.length > this.size) {
      const n = e.slice(-this.size);
      this.push(...n);
      return;
    }
    this.length === this.size && this.splice(0, e.length), this.push(...e);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-3169 + 640 * 12 + 13 * -347);
  }
}
const tl = (t, o) => {
  const { height: e, shiftX: n, shiftY: i, width: r } = o;
  return !(t.x < n || t.x > n + r || t.y < i || t.y > i + e);
}, nl = (t, o) => Object.values(t).every((e) => tl(e, o));
function il(t) {
  return Tn(Math.abs(t));
}
const ol = () => {
  const [t, o] = Re(null), e = vt(new wr(2 * 3145 + -7 * -887 + -12494));
  function n(r) {
    const { z: a } = r.accelerationIncludingGravity || {};
    if (!a)
      return;
    e.current.pushFixed(il(a));
    const s = Tn(ms(e.current)), g = {};
    g.z = s, o(g);
  }
  pe(() => (window.addEventListener("devicemotion", JI(n, xI), !0), () => {
    window.removeEventListener("devicemotion", n, !0);
  }), []);
  const i = {};
  return i.acceleration = t, i;
};
function Zi() {
  throw new Error("Cycle detected");
}
var rl = Symbol.for("preact-signals");
function vr() {
  if (qt > 1)
    qt--;
  else {
    for (var t, o = !1; On !== void 0; ) {
      var e = On;
      for (On = void (9309 + 9309 * -1), Jo++; void (-1 * 8358 + -25 * -67 + 6683) !== e; ) {
        var n = e.o;
        if (e.o = void (9654 + 1 * -9571 + -83), e.f &= -(4188 + 4185 * -1), !(1 * 8459 + -1345 + 323 * -22 & e.f) && Zs(e))
          try {
            e.c();
          } catch (i) {
            !o && (t = i, o = !(8926 + -1 * 8926));
          }
        e = n;
      }
    }
    if (Jo = 0, qt--, o)
      throw t;
  }
}
var se = void (1378 + -1448 * 2 + -6 * -253), On = void 0, qt = -449 * 9 + 7069 + -2 * 1514, Jo = 8217 + 5 * 345 + -2 * 4971, ki = 7189 + -1 * 7189;
function Ss(t) {
  if (void (3706 + -3523 * 2 + 3340) !== se) {
    var o = t.n;
    if (void (-22 * -211 + -5188 * -1 + -9830) === o || o.t !== se)
      return o = { i: 0, S: t, p: se.s, n: void (14 * 602 + -85 * 109 + 837), t: se, e: void (4790 + 28 * -310 + -2 * -1945), x: void (13181 + -1883 * 7), r: o }, void (631 * -11 + -9293 + 8117 * 2) !== se.s && (se.s.n = o), se.s = o, t.n = o, 6844 + -1 * 7053 + 241 & se.f && t.S(o), o;
    if (-(-4546 + -791 * -3 + 2 * 1087) === o.i)
      return o.i = 497 * -2 + 8759 * 1 + -1553 * 5, void (1 * -4349 + 1 * -271 + 4620) !== o.n && (o.n.p = o.p, o.p !== void 0 && (o.p.n = o.n), o.p = se.s, o.n = void (306 * 5 + 107 * -11 + -353), se.s.n = o, se.s = o), o;
  }
}
function Ae(t) {
  this.v = t, this.i = 6 * -1264 + -7456 + 15040, this.n = void (-1912 + 1283 * 6 + -263 * 22), this.t = void (7849 + 179 * 55 + -17694);
}
Ae.prototype.brand = rl, Ae.prototype.h = function() {
  return !(8190 + -1 * 94 + 506 * -16);
}, Ae.prototype.S = function(t) {
  this.t !== t && t.e === void 0 && (t.x = this.t, void (4262 + -2131 * 2) !== this.t && (this.t.e = t), this.t = t);
}, Ae.prototype.U = function(t) {
  if (void (-3579 + -4535 * 2 + 12649) !== this.t) {
    var o = t.e, e = t.x;
    void (-2075 * -3 + 1465 * 6 + 1 * -15015) !== o && (o.x = e, t.e = void (3065 * 3 + -5509 * -1 + -14704)), void (1977 * -2 + -6446 + 10400) !== e && (e.e = o, t.x = void 0), t === this.t && (this.t = e);
  }
}, Ae.prototype.subscribe = function(t) {
  var o = this;
  return Sr(function() {
    var e = o.value, n = 32 & this.f;
    this.f &= -33;
    try {
      t(e);
    } finally {
      this.f |= n;
    }
  });
}, Ae.prototype.valueOf = function() {
  return this.value;
}, Ae.prototype.toString = function() {
  return this.value + "";
}, Ae.prototype.toJSON = function() {
  return this.value;
}, Ae.prototype.peek = function() {
  return this.v;
}, Object.defineProperty(Ae.prototype, "value", { get: function() {
  var t = Ss(this);
  return void (4849 + -13 * 373) !== t && (t.i = this.i), this.v;
}, set: function(t) {
  if (se instanceof ht && function() {
    throw new Error("Computed cannot have side-effects");
  }(), t !== this.v) {
    Jo > 2 * 88 + -7 * 172 + 1128 && Zi(), this.v = t, this.i++, ki++, qt++;
    try {
      for (var o = this.t; o !== void 0; o = o.x)
        o.t.N();
    } finally {
      vr();
    }
  }
} });
function Gs(t) {
  return new Ae(t);
}
function Zs(t) {
  for (var o = t.s; void (3 * 945 + 219 * -11 + 1 * -426) !== o; o = o.n)
    if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i)
      return !0;
  return !(-15 * -86 + 389 * -16 + 987 * 5);
}
function ks(t) {
  for (var o = t.s; o !== void 0; o = o.n) {
    var e = o.S.n;
    if (void (2 * -951 + 809 * -1 + 2711) !== e && (o.r = e), o.S.n = o, o.i = -(-68 * -28 + -4553 * 2 + 7203), void (-28 * 308 + 22 * 4 + -2 * -4268) === o.n) {
      t.s = o;
      break;
    }
  }
}
function Ks(t) {
  for (var o = t.s, e = void (9 * 428 + 1 * -1514 + 14 * -167); void (-1 * -4286 + -4574 + 288) !== o; ) {
    var n = o.p;
    -(1 * 7311 + 6375 + -13685) === o.i ? (o.S.U(o), void (3 * -762 + 2 * 3259 + -4232) !== n && (n.n = o.n), void (-1567 * -3 + -4218 + 69 * -7) !== o.n && (o.n.p = n)) : e = o, o.S.n = o.r, void (6 * -274 + 3217 * 2 + -4790) !== o.r && (o.r = void (-3358 + -73 * -46)), o = n;
  }
  t.s = e;
}
function ht(t) {
  Ae.call(this, void (7541 + 1 * -7541)), this.x = t, this.s = void (-18525 + 475 * 39), this.g = ki - (-3663 + 1 * 3664), this.f = 2028 + -499 * 7 + -1469 * -1;
}
(ht.prototype = new Ae()).h = function() {
  if (this.f &= -(1255 * 6 + 581 * 11 + -1 * 13918), -1 * 7405 + -1441 * -3 + -1 * -3083 & this.f)
    return !(519 * -19 + 9653 + -11 * -19);
  if (-2051 + 128 * -13 + -3747 * -1 == (-1877 * 3 + 9916 + -7 * 607 & this.f))
    return !(1477 * 6 + 1182 * -8 + 594);
  if (this.f &= -(-1 * -7853 + -7049 + -799), this.g === ki)
    return !(-10985 + -169 * -65);
  if (this.g = ki, this.f |= 1, this.i > 0 && !Zs(this))
    return this.f &= -(2 * -8 + -6215 + 6233), !(-338 + 7 * -239 + -1 * -2011);
  var t = se;
  try {
    ks(this), se = this;
    var o = this.x();
    (-4 * -739 + 6295 + 1 * -9235 & this.f || this.v !== o || -591 * 7 + -6149 + -2 * -5143 === this.i) && (this.v = o, this.f &= -(92 * -1 + -1 * -31 + -2 * -39), this.i++);
  } catch (e) {
    this.v = e, this.f |= 3229 * 1 + -5 * 373 + -674 * 2, this.i++;
  }
  return se = t, Ks(this), this.f &= -(-7578 + -3 * -1108 + -28 * -152), !(20 * 2 + 4814 + 6 * -809);
}, ht.prototype.S = function(t) {
  if (void (4073 * -1 + -1 * 9631 + 13704) === this.t) {
    this.f |= -1 * 1986 + 9823 + -7801;
    for (var o = this.s; o !== void 0; o = o.n)
      o.S.S(o);
  }
  Ae.prototype.S.call(this, t);
}, ht.prototype.U = function(t) {
  if (void (3281 * 2 + 9616 + -16178) !== this.t && (Ae.prototype.U.call(this, t), void (77 * 7 + -3562 * -2 + -7663) === this.t)) {
    this.f &= -(-23 * -67 + 5651 + 1 * -7159);
    for (var o = this.s; o !== void 0; o = o.n)
      o.S.U(o);
  }
}, ht.prototype.N = function() {
  if (!(-164 * -41 + -938 * -4 + 5237 * -2 & this.f)) {
    this.f |= 5752 + -431 * -4 + -7470 * 1;
    for (var t = this.t; void (-29 * 29 + 10 * 689 + -23 * 263) !== t; t = t.x)
      t.t.N();
  }
}, ht.prototype.peek = function() {
  if (this.h() || Zi(), -31 * 321 + 215 * 34 + 2657 & this.f)
    throw this.v;
  return this.v;
}, Object.defineProperty(ht.prototype, "value", { get: function() {
  3 * -27 + -5079 + 397 * 13 & this.f && Zi();
  var t = Ss(this);
  if (this.h(), void (1769 * -1 + 511 * -1 + -20 * -114) !== t && (t.i = this.i), 16 & this.f)
    throw this.v;
  return this.v;
} });
function al(t) {
  return new ht(t);
}
function Hs(t) {
  var o = t.u;
  if (t.u = void (5088 + 118 * -71 + -2 * -1645), typeof o == "function") {
    qt++;
    var e = se;
    se = void (237 * 29 + -3082 + -3791);
    try {
      o();
    } catch (n) {
      throw t.f &= -(4345 * -1 + -3330 + -853 * -9), t.f |= 935 * -7 + -98 * 38 + 10277, Br(t), n;
    } finally {
      se = e, vr();
    }
  }
}
function Br(t) {
  for (var o = t.s; void (198 + 4 * -1879 + 7318) !== o; o = o.n)
    o.S.U(o);
  t.x = void (-1 * -2179 + -13 * -89 + -3336), t.s = void (-27 * 54 + -4 * 2362 + 10906), Hs(t);
}
function sl(t) {
  if (se !== this)
    throw new Error("Out-of-order effect");
  Ks(this), se = t, this.f &= -(-787 * 7 + -68 * -125 + 427 * -7), 8 & this.f && Br(this), vr();
}
function vn(t) {
  this.x = t, this.u = void (97 * -1 + -6965 + 642 * 11), this.s = void (-9169 + 2 * -2234 + 13637), this.o = void (-4065 + -2 * 2137 + -31 * -269), this.f = 32;
}
vn.prototype.c = function() {
  var t = this.S();
  try {
    if (1352 + -28 * 48 & this.f || void (22 * 146 + 129 * 39 + -8243 * 1) === this.x)
      return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    t();
  }
}, vn.prototype.S = function() {
  -3701 + -1234 * -3 & this.f && Zi(), this.f |= 10213 + -5106 * 2, this.f &= -(-1585 + -1 * -1594), Hs(this), ks(this), qt++;
  var t = se;
  return se = this, sl.bind(this, t);
}, vn.prototype.N = function() {
  !(-1 * -6891 + 3215 * -1 + -3674 & this.f) && (this.f |= -13 * -577 + 2424 * -2 + -2651, this.o = On, On = this);
}, vn.prototype.d = function() {
  this.f |= -5463 + 9 * -188 + 7163, -76 * 117 + -1 * -481 + -6 * -1402 & this.f || Br(this);
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
function _t(t, o) {
  k[t] = o.bind(null, k[t] || function() {
  });
}
function oi(t) {
  bo && bo(), bo = t && t.S();
}
function Os(t) {
  var o = this, e = t.data, n = Ws(e);
  n.value = e;
  var i = tt(function() {
    for (var r = o.__v; r = r.__; )
      if (r.__c) {
        r.__c.__$f |= 4;
        break;
      }
    return o.__$u.c = function() {
      var a;
      !y0(i.peek()) && -98 * -25 + 5087 * 1 + 7534 * -1 === ((a = o.base) == null ? void (5821 * -1 + 5 * -401 + 7826) : a.nodeType) ? o.base.data = i.peek() : (o.__$f |= -9676 + 9677 * 1, o.setState({}));
    }, al(function() {
      var a = n.value.value;
      return 1 * 606 + -3620 + 3014 === a ? -5427 + -1 * 9619 + 15046 : !(8593 + -1168 * 8 + -751 * -1) === a ? "" : a || "";
    });
  }, []);
  return i.value;
}
Os.displayName = "_st";
var Qo = {};
Qo.configurable = !(-1207 * -5 + 1 * 4478 + -10513), Qo.value = void (-2167 + 4957 * 1 + -2790);
var zo = {};
zo.configurable = !(-235 * 13 + -3991 + 7046), zo.value = Os;
var $o = {};
$o.configurable = !(-1 * 935 + 1 * 8683 + -26 * 298), $o.get = function() {
  var t = {};
  return t.data = this, t;
};
var _o = {};
_o.configurable = !(-159 * -11 + 5261 + -10 * 701), _o.value = 1;
var mn = {};
mn.constructor = Qo, mn.type = zo, mn.props = $o, mn.__b = _o, Object.defineProperties(Ae.prototype, mn), _t("__b", function(t, o) {
  if (typeof o.type == "string") {
    var e, n = o.props;
    for (var i in n)
      if (i !== "children") {
        var r = n[i];
        r instanceof Ae && (e || (o.__np = e = {}), e[i] = r, n[i] = r.peek());
      }
  }
  t(o);
}), _t("__r", function(t, o) {
  oi();
  var e, n = o.__c;
  n && (n.__$f &= -(-149 * 43 + 675 + 2 * 2867), (e = n.__$u) === void 0 && (n.__$u = e = function(i) {
    var r;
    return Sr(function() {
      r = this;
    }), r.c = function() {
      n.__$f |= -3673 + -520 * -12 + 2566 * -1, n.setState({});
    }, r;
  }())), oi(e), t(o);
}), _t("__e", function(t, o, e, n) {
  oi(), t(o, e, n);
}), _t("diffed", function(t, o) {
  oi();
  var e;
  if (typeof o.type == "string" && (e = o.__e)) {
    var n = o.__np, i = o.props;
    if (n) {
      var r = e.U;
      if (r)
        for (var a in r) {
          var s = r[a];
          void (2272 + -5717 * 1 + -265 * -13) !== s && !(a in n) && (s.d(), r[a] = void (2 * -1542 + 311 * 23 + 4069 * -1));
        }
      else
        e.U = r = {};
      for (var g in n) {
        var I = r[g], C = n[g];
        void (-702 + -1 * 9359 + 10061 * 1) === I ? (I = gl(e, g, C, i), r[g] = I) : I.o(C, i);
      }
    }
  }
  t(o);
});
function gl(t, o, e, n) {
  var i = o in t && t.ownerSVGElement === void 0, r = Gs(e);
  return { o: function(a, s) {
    r.value = a, n = s;
  }, d: Sr(function() {
    var a = r.value.value;
    n[o] !== a && (n[o] = a, i ? t[o] = a : a ? t.setAttribute(o, a) : t.removeAttribute(o));
  }) };
}
_t("unmount", function(t, o) {
  if (typeof o.type == "string") {
    var e = o.__e;
    if (e) {
      var n = e.U;
      if (n) {
        e.U = void (107 * 23 + -6211 * 1 + 3750);
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
      s && (a.__$u = void (-8548 + -62 * -55 + 5138), s.d());
    }
  }
  t(o);
}), _t("__h", function(t, o, e, n) {
  (n < 3 || -6213 + 1 * 6222 === n) && (o.__$f |= -2 * -304 + -2134 + -4 * -382), t(o, e, n);
}), Le.prototype.shouldComponentUpdate = function(t, o) {
  var e = this.__$u;
  if (!(e && void (2089 + 2 * 3886 + -173 * 57) !== e.s || -7210 + -1 * -4713 + 2501 & this.__$f))
    return !(421 * -3 + -6556 + -7 * -1117);
  if (1 * 2231 + -5833 + 3605 & this.__$f)
    return !0;
  for (var n in o)
    return !0;
  for (var i in t)
    if (i !== "__source" && t[i] !== this.props[i])
      return !(-47 * -20 + -8177 + 1 * 7237);
  for (var r in this.props)
    if (!(r in t))
      return !(265 * 19 + -3107 * -1 + -69 * 118);
  return !(199 * 24 + 44 * -12 + -137 * 31);
};
function Ws(t) {
  return tt(function() {
    return Gs(t);
  }, []);
}
const Gr = (t) => {
  const { height: o, width: e } = bs(t), n = (t.width - e) / (8703 + -1511 * 5 + 191 * -6), i = (t.height - o) / 2, r = {};
  return r.shiftX = n, r.shiftY = i, r.width = e, r.height = o, r;
}, Rs = (t, o) => {
  const { height: e, width: n } = bs(t), i = Ji(t.width, t.height), r = n - i * o * 2, a = e - i * o * 2, s = (t.width - r) / 2, g = (t.height - a) / (-283 * 29 + -4832 + -4347 * -3), I = {};
  return I.shiftX = s, I.shiftY = g, I.width = r, I.height = a, I;
}, Jt = (t, o) => {
  const { shiftX: e, shiftY: n } = Gr(t), i = {};
  return i.x = o.x + e, i.y = o.y + n, i;
}, cl = (t, o) => ({ ...o, leftEye: { ...o.leftEye, center: Jt(t, o.leftEye.center) }, rightEye: { ...o.rightEye, center: Jt(t, o.rightEye.center) }, mouth: { ...o.mouth, center: Jt(t, o.mouth.center) }, topLeft: Jt(t, o.topLeft), bottomRight: Jt(t, o.bottomRight), faceCenter: Jt(t, o.faceCenter) }), Vs = (t, o) => {
  const { faceCenter: e, faceSize: n } = t, i = PI(n, o), r = {};
  r.x = e.x, r.y = e.y - i;
  const a = {};
  a.x = e.x + i, a.y = e.y;
  const s = {};
  s.x = e.x, s.y = e.y + i;
  const g = {};
  g.x = e.x - i, g.y = e.y;
  const I = {};
  return I.top = r, I.right = a, I.bottom = s, I.left = g, zt(I);
}, xl = (t, o) => {
  const {
    bottomRight: e,
    faceCenter: n,
    topLeft: i
  } = o, r = {
    topLeft: i,
    width: e.x - i.x,
    height: e.y - i.y
  };
  ps(t, r, "rgba(255, 0, 0, 0.3)", !0), Kn(t, n, "lime");
}, Il = (t, o, e) => {
  const n = Vs(o, e);
  Object.values(n).map((i) => Kn(t, i, "orange"));
}, ll = ({
  appTier: t,
  cameraResolution: o,
  detectionDetails: e,
  isImageMirror: n
}) => {
  const {
    faceCameraOptions: {
      thresholds: i
    }
  } = As(), r = vt(null);
  if (pe(() => {
    if (!r.current)
      return;
    r.current.width = o.width, r.current.height = o.height, WI(r.current);
    const w = Gr(o), K = Rs(o, i.outOfBoundsThreshold), S = ys(o);
    e.value && (xl(r.current, e.value.face), Il(r.current, e.value.face, o), mo(r.current, w, "lime"), mo(r.current, K, "yellow"), mo(r.current, S, "blue"), Kn(r.current, e.value.face.leftEye.center, "cyan"), Kn(r.current, e.value.face.rightEye.center, "cyan"), Kn(r.current, e.value.face.mouth.center, "cyan"));
  }, [o, i, e.value]), !e.value)
    return null;
  const {
    detectionTime: a,
    face: s,
    fps: g,
    instructionCode: I,
    invalidValidators: C,
    resolution: u,
    samVersion: p
  } = e.value, A = {
    Confidence: s.confidence,
    Brightness: s.brightness,
    Sharpness: s.sharpness,
    "Face size": s.faceSize,
    "Left eye confidence": s.leftEye.confidence,
    "Left eye status": s.leftEye.status,
    "Right eye confidence": s.rightEye.confidence,
    "Right eye status": s.rightEye.status,
    "Mouth confidence": s.mouth.confidence,
    "Mouth status": s.mouth.status,
    "Detection time": a,
    FPS: g,
    Tier: t,
    Instruction: I,
    Resolution: JSON.stringify(u),
    "Component version": "6.1.0"
  };
  return p && (A["SAM version"] = p), C.length > 0 && (A["Invalid validators"] = C.join(", ")), O(Ux, {
    ref: r,
    cameraResolution: o,
    detectionDetails: A,
    isImageMirror: n
  });
};
function ul(t) {
  return O("rect", {
    fill: "#000",
    ...t,
    rx: "50%"
  });
}
function Cl(t) {
  const [o, e] = Re(!1), n = () => e((a) => !a), i = "" + o;
  Nn(() => {
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
        A.find((K) => {
          for (const S of K.removedNodes)
            if (S === t.current)
              return !0;
        }) && n(), A.forEach((K) => {
          K.addedNodes.forEach((S) => {
            var v;
            (v = S.parentElement) == null || v.removeChild(S);
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
const dl = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function fl({
  cutOut: t,
  height: o,
  width: e
}) {
  const n = vt(null), {
    key: i
  } = Cl(n);
  return O("div", {
    ref: n,
    style: dl,
    children: O("svg", {
      viewBox: `0 0 ${e} ${o}`,
      children: [O("defs", {
        children: [O("mask", {
          id: "placeholder",
          children: [O("rect", {
            fill: "#fff",
            height: "100%",
            width: "100%"
          }), t]
        }), O("pattern", {
          height: window.innerWidth > 480 ? "400" : "900",
          id: "innooverlay",
          patternUnits: "userSpaceOnUse",
          viewBox: "0 40 300 200",
          width: window.innerWidth > 480 ? "350" : "700",
          x: "0",
          y: "0",
          children: [O("g", {
            transform: "translate(100, 170)",
            children: [O("path", {
              d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
              fill: "white",
              opacity: "0.3"
            })]
          }), O("g", {
            transform: "translate(10, 0)",
            children: [O("path", {
              d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
              fill: "white",
              opacity: "0.3"
            })]
          })]
        })]
      }), O("rect", {
        fill: "url(#innooverlay)",
        height: "100%",
        mask: "url(#placeholder)",
        width: "100%"
      })]
    })
  }, i);
}
function Al({
  fullOverlay: t,
  resolution: o
}) {
  const e = EI(o), n = `${e.height * 100}%`, i = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, a = `${e.shiftY * 100}%`;
  return O(fl, {
    cutOut: t || O(ul, {
      height: n,
      width: i,
      x: r,
      y: a
    }),
    height: o.height,
    width: o.width
  });
}
const pl = async () => WebAssembly.validate(new Uint8Array([-11330 + 110 * 103, -2 * -533 + 5681 + 35 * -190, -655 + 1 * 2049 + 1 * -1279, -111 + 22 * 10, -1616 + 2 * 3427 + -5237, 7519 + -178 * 39 + 1 * -577, 0, 9610 + 961 * 2 + -11532, 2174 * 1 + -2950 + 777, 6031 + 897 * -7 + 253, -10186 + 167 * 61, -1 * 2175 + -3788 + 6059 * 1, 3888 + -2 * 3578 + 3268, 5403 * -1 + -2403 + -1 * -7807, 5554 + 760 * 4 + -8471, 50 * -26 + -6782 * 1 + -33 * -245, -317 * 19 + -266 * -22 + -173 * -1, -26 * 312 + 1109 * -3 + 11440, 214 + -2986 * 2 + -2 * -2879, 20 * -188 + -1 * -4113 + -343, -9877 + 54 * -179 + 19553 * 1, -3140 + -265 * 29 + -2 * -5413, -1 * 3375 + -1 * -2651 + 732, -868 + -15 * -614 + -8342, 2329 * -3 + 7300 + -248, 3615 * -2 + -7 * -849 + 1287, 149 * 13 + -5989 + 4305 * 1, -16930 + 16945 * 1, 5813 + -5 * 1112, -184 * -53 + 4604 + -14258 * 1, -2319 * 1 + 11 * 29 + 1 * 2011]));
async function hl() {
  const t = {};
  t.name = Cs, t.length = 256;
  const o = await window.crypto.subtle.generateKey(t, !0, ["encrypt", "decrypt"]), e = Uint8Array.from(Array(-8155 + 470 * 1 + 2567 * 3).fill(-129 * 43 + 404 * 22 + -3341)), n = window.crypto.getRandomValues(e), i = {};
  return i.key = o, i.iv = n, i;
}
async function ml(t) {
  const { iv: o, key: e } = await hl(), n = {};
  n.name = Cs, n.iv = o;
  const i = await window.crypto.subtle.encrypt(n, e, t), r = await window.crypto.subtle.exportKey("raw", e), a = {};
  return a.message = i, a.key = r, a.iv = o, a;
}
function bl(t) {
  const o = new ArrayBuffer(t.length), e = new Uint8Array(o);
  for (let n = 1 * 511 + 755 * -9 + 6284, i = t.length; n < i; n++)
    e[n] = t.charCodeAt(n);
  return o;
}
function yl() {
  const t = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", o = window.atob(t), e = window.atob(o), n = bl(e), i = {};
  return i.name = ds, i.hash = sI, window.crypto.subtle.importKey("spki", n, i, !0, ["encrypt"]);
}
async function wl(t) {
  const o = await yl(), e = {};
  return e.name = ds, window.crypto.subtle.encrypt(e, o, t);
}
async function vl(t) {
  const { iv: o, key: e, message: n } = await ml(t), i = await wl(e), r = {};
  return r.key = i, r.iv = o, r.message = n, r;
}
async function Bl(t) {
  const o = await window.crypto.subtle.digest("SHA-1", t);
  return Array.from(new Uint8Array(o)).map((e) => e.toString(688 * 6 + 163 * 55 + 9 * -1453).padStart(8559 + 1 * 2146 + -10703 * 1, "0")).join("");
}
class Sl {
  constructor() {
    Y(this, "samVersion", null);
    Y(this, "isDetectorInitialized", !1);
    Y(this, "isInCandidateSelection", !1);
    Y(this, "lastImage", null);
    Y(this, "bestImage", null);
    Y(this, "detectionRecord", []);
    Y(this, "candidateSelectionImages", []);
    Y(this, "thresholds", null);
    Y(this, "acceleration", null);
    Y(this, "imagesForDuplicateDetection", new wr(rI));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const e = await this.detector.getSamVersion();
    this.setSamVersion(e), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await pl() ? _a.SIMD : _a.NO_SIMD;
  }
  async init({ thresholds: o, wasmDirectoryPath: e }) {
    this.setThresholds(o), await this.initDetector(e);
  }
  setSamVersion(o) {
    if (!o || !this.areVersionsCompatible(o))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new ne("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = o;
  }
  areVersionsCompatible(o) {
    return o === II;
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
      throw new ne("Thresholds for " + this.className + " are not provided");
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
    const e = o.length / cI, n = e / (-2158 * 2 + -1 * -127 + 4191), i = o.length / (6881 + -1 * -4868 + 1 * -11747), r = await Bl(o.slice(i - n, i + n));
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
    var s = "./this.program", g = !1, I = !(-4941 + -850 * -1 + 4092);
    g = typeof window == "object", I = typeof importScripts == "function";
    var C = "", u;
    (g || I) && (I ? C = self.location.href : document.currentScript && (C = document.currentScript.src), t && (C = t), C.indexOf("blob:") !== 0 ? C = C.substr(4 * 877 + -3844 * -1 + -7352, C.lastIndexOf("/") + (-2 * 4583 + -8641 + 17808)) : C = "", I && (u = function(c) {
      var x = new XMLHttpRequest();
      return x.open("GET", c, !(-29 * 21 + 511 * 13 + 6033 * -1)), x.responseType = "arraybuffer", x.send(null), new Uint8Array(x.response);
    }));
    var p = e.printErr || console.warn.bind(console);
    for (a in r)
      r.hasOwnProperty(a) && (e[a] = r[a]);
    r = null, e.thisProgram && (s = e.thisProgram);
    var A;
    e.wasmBinary && (A = e.wasmBinary), e.noExitRuntime && e.noExitRuntime, typeof WebAssembly != "object" && rt("no native wasm support detected");
    var w, K = !1;
    function S(c) {
      c || rt("Assertion failed: undefined");
    }
    var v = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (1 * -458 + -7498 + 7956);
    function E(c, x, l) {
      var f = Ce;
      if (-3863 + -3 * 125 + 4238 < l) {
        l = x + l - (107 * -34 + -2278 + 5917);
        for (var m = 0; m < c.length; ++m) {
          var b = c.charCodeAt(m);
          if (71353 * -1 + 49845 * 1 + 76804 <= b && 83586 * 1 + 107145 + -133388 >= b) {
            var Z = c.charCodeAt(++m);
            b = -1543 * -61 + 40617 + -69204 + ((b & -1991 + -1 * -1043 + 1971) << -386 + -1 * 3669 + 4065 * 1) | Z & 9189 + 1 * 4487 + -1 * 12653;
          }
          if (-89 * -63 + -1842 + -3638 >= b) {
            if (x >= l)
              break;
            f[x++] = b;
          } else {
            if (-3511 + 77 * -31 + -5 * -1589 >= b) {
              if (x + (-1 * -3923 + 4259 + -8181) >= l)
                break;
              f[x++] = 4 * -1831 + 1 * 8707 + -1 * 1191 | b >> -46 * -6 + -2564 * 2 + 4858;
            } else {
              if (4099 * 2 + -1 * -75678 + -18341 >= b) {
                if (x + (2753 * -1 + -1 * -979 + -74 * -24) >= l)
                  break;
                f[x++] = 486 + 5 * 757 + 19 * -213 | b >> 5 * -1721 + 19 * -53 + 9624;
              } else {
                if (x + 3 >= l)
                  break;
                f[x++] = 1489 * 1 + 1 * 6219 + 7468 * -1 | b >> 4 * -10 + 2552 + -2 * 1247, f[x++] = 337 * 17 + -997 + 4604 * -1 | b >> -2597 * -2 + 3462 + -8644 & 63;
              }
              f[x++] = 23 * -101 + 9486 + 201 * -35 | b >> 6 & 809 * -10 + 6488 + -185 * -9;
            }
            f[x++] = -1 * -3821 + 1306 * -1 + 31 * -77 | b & -5664 + -7 * -355 + 1621 * 2;
          }
        }
        f[x] = -5420 + -1 * -4599 + -1 * -821;
      }
    }
    var B = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-3 * -2411 + 4 * -834 + -433 * 9);
    function $(c, x) {
      for (var l = c >> 1, f = l + x / (-227 * -38 + 2700 + -11324 * 1); !(l >= f) && Ct[l]; )
        ++l;
      if (l <<= -23 * 271 + -1 * -4999 + 1235, 6 * 41 + -55 * 13 + 501 < l - c && B)
        return B.decode(Ce.subarray(c, l));
      for (l = -7042 + 3521 * 2, f = ""; ; ) {
        var m = Je[c + 2 * l >> 1];
        if (-27 * -196 + -6 * -244 + -6756 == m || l == x / (2 * -3580 + 4401 + 2761))
          return f;
        ++l, f += String.fromCharCode(m);
      }
    }
    function D(c, x, l) {
      if (void (14 * -634 + -5 * -1113 + -7 * -473) === l && (l = -3754658117 + 662 * 8915622), 8510 + 2022 * -2 + -4464 > l)
        return -2731 + -4190 * -1 + -1 * 1459;
      l -= 261 + 13 * 698 + -9333;
      var f = x;
      l = l < (-9728 + -6527 * 1 + -1 * -16257) * c.length ? l / (-4 * -592 + 2351 * -1 + -15) : c.length;
      for (var m = -1756 * -4 + -1672 + 2676 * -2; m < l; ++m)
        Je[x >> -7352 + 4 * -2182 + 1237 * 13] = c.charCodeAt(m), x += 2;
      return Je[x >> 1277 * 6 + -5036 + 375 * -7] = 13536 + -96 * 141, x - f;
    }
    function j(c) {
      return (-1 * 771 + 1631 + 22 * -39) * c.length;
    }
    function H(c, x) {
      for (var l = -4919 * 2 + -1231 + 11069, f = ""; !(l >= x / (401 * 7 + 787 + -3590)); ) {
        var m = re[c + 4 * l >> 2];
        if (7396 + -8221 * -1 + -1 * 15617 == m)
          break;
        ++l, 55885 + -163 * -743 + -111458 <= m ? (m -= 65536, f += String.fromCharCode(1745 * 2 + -72348 + -5398 * -23 | m >> 375 * -15 + 6284 + 11 * -59, 2293 * 2 + 1363 * 29 + 12207 | m & -1 * 7142 + -6084 + 14249 * 1)) : f += String.fromCharCode(m);
      }
      return f;
    }
    function ie(c, x, l) {
      if (void (6 * -1534 + -1315 * -2 + 6574) === l && (l = 4477110036 + -2329626389), -7650 + -1 * -7654 > l)
        return 5514 * 1 + 6635 * 1 + -12149;
      var f = x;
      l = f + l - 4;
      for (var m = -3145 + -46 * -43 + 1167; m < c.length; ++m) {
        var b = c.charCodeAt(m);
        if (-57720 + -55059 * 1 + 168075 <= b && 57343 >= b) {
          var Z = c.charCodeAt(++m);
          b = 587 * -86 + -97983 + -1 * -214001 + ((b & 1586 * 2 + -7143 + 4994) << 1 * 934 + 1829 + 1 * -2753) | Z & 78 * -37 + -2711 + -5 * -1324;
        }
        if (re[x >> -2009 + -2011 * -1] = b, x += -1 * -2271 + -2386 * -1 + -4653, x + 4 > l)
          break;
      }
      return re[x >> -1987 * 1 + 4195 + -2 * 1103] = -445 * -7 + -5404 + 109 * 21, x - f;
    }
    function _(c) {
      for (var x = 41 * 1 + -431 * 8 + -3407 * -1, l = -302 * 28 + -5479 + 15 * 929; l < c.length; ++l) {
        var f = c.charCodeAt(l);
        -61 * -403 + 104881 + -74168 <= f && 61871 * -1 + -1 * 105632 + 194 * 1159 >= f && ++l, x += -463 * 19 + 3574 + 5227 * 1;
      }
      return x;
    }
    var oe, q, Ce, Je, Ct, re, be, Qe, Fe;
    function ce(c) {
      oe = c, e.HEAP8 = q = new Int8Array(c), e.HEAP16 = Je = new Int16Array(c), e.HEAP32 = re = new Int32Array(c), e.HEAPU8 = Ce = new Uint8Array(c), e.HEAPU16 = Ct = new Uint16Array(c), e.HEAPU32 = be = new Uint32Array(c), e.HEAPF32 = Qe = new Float32Array(c), e.HEAPF64 = Fe = new Float64Array(c);
    }
    var ze = e.INITIAL_MEMORY || -7846396 * -3 + -2675200 * -7 + -3094 * 8238, he = {};
    he.initial = ze / (-33398 + -98934 * -1), he.maximum = 32768, e.wasmMemory ? w = e.wasmMemory : w = new WebAssembly.Memory(he), w && (oe = w.buffer), ze = oe.byteLength, ce(oe);
    var Ie = [], $e = [], Be = [], Ve = [];
    function ot() {
      var c = e.preRun.shift();
      Ie.unshift(c);
    }
    var Se = -8526 + 29 * -251 + -109 * -145, Ge = null;
    e.preloadedImages = {}, e.preloadedAudios = {};
    function rt(c) {
      throw e.onAbort && e.onAbort(c), p(c), K = !(-3 * 1074 + -7756 + 10978), c = new WebAssembly.RuntimeError("abort(" + c + "). Build with -s ASSERTIONS=1 for more info."), i(c), c;
    }
    function De(c) {
      var x = Ee;
      return String.prototype.startsWith ? x.startsWith(c) : -2 * 3118 + 7359 * -1 + 13595 === x.indexOf(c);
    }
    function Lt() {
      return De("data:application/octet-stream;base64,");
    }
    var Ee = "sam.wasm";
    if (!Lt()) {
      var Xe = Ee;
      Ee = e.locateFile ? e.locateFile(Xe, C) : C + Xe;
    }
    function Rr() {
      try {
        if (A)
          return new Uint8Array(A);
        if (u)
          return u(Ee);
        throw "both async and sync fetching of the wasm failed";
      } catch (c) {
        rt(c);
      }
    }
    function gg() {
      var c = {};
      return c.credentials = "same-origin", A || !g && !I || typeof fetch != "function" || De("file://") ? Promise.resolve().then(Rr) : fetch(Ee, c).then(function(x) {
        if (!x.ok)
          throw "failed to load wasm binary file at '" + Ee + "'";
        return x.arrayBuffer();
      }).catch(function() {
        return Rr();
      });
    }
    function Fn(c) {
      for (; -3297 * 1 + -6 * 1201 + 10503 < c.length; ) {
        var x = c.shift();
        if (typeof x == "function")
          x(e);
        else {
          var l = x.Ba;
          typeof l == "number" ? x.ta === void 0 ? $i("v", l)() : $i("vi", l)(x.ta) : l(void (560 * 3 + -318 * 2 + -4 * 261) === x.ta ? null : x.ta);
        }
      }
    }
    function $i(c, x) {
      var l = [];
      return function() {
        l.length = arguments.length;
        for (var f = 1954 * 3 + 2696 + -8558; f < arguments.length; f++)
          l[f] = arguments[f];
        return l && l.length ? e["dynCall_" + c].apply(null, [x].concat(l)) : e["dynCall_" + c].call(null, x);
      };
    }
    function cg(c) {
      this.da = c - (-1 * 544 + 2 * 4781 + 1 * -9002), this.Oa = function(x) {
        re[this.da + (1 * 712 + 1 * -2399 + -113 * -15) >> -1834 * -3 + -571 * -2 + -6642] = x;
      }, this.La = function(x) {
        re[this.da + (433 * 6 + -3359 * 1 + 761 * 1) >> 737 + -5 * 147] = x;
      }, this.Ma = function() {
        re[this.da + 4 >> -4498 + -227 * 10 + -1 * -6770] = 1020 * -5 + 457 * -17 + -757 * -17;
      }, this.Ka = function() {
        q[this.da + (-10727 + 10739 * 1) >> -142 * -2 + -1121 * -3 + -1 * 3647] = -1 * 4099 + -2703 + 6802;
      }, this.Na = function() {
        q[this.da + (3867 * 1 + -5435 * 1 + -1581 * -1) >> -5 * -1094 + 1 * 5006 + -3492 * 3] = 49 * 44 + 1800 + -3956;
      }, this.Fa = function(x, l) {
        this.Oa(x), this.La(l), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Dn() {
      return -998 * 8 + 6251 + 1733 < Dn.xa;
    }
    function _i(c) {
      switch (c) {
        case 7 * 1173 + 25 * 79 + 105 * -97:
          return 6929 + 74 * -73 + -1527 * 1;
        case -2994 * -1 + 496 + -8 * 436:
          return 2800 * 1 + -3 * -3118 + -12153;
        case 24 + -5 * 4:
          return -2630 + 56 * 47;
        case 6 * 1262 + 4429 + -67 * 179:
          return 1999 + -49 * 98 + 2806;
        default:
          throw new TypeError("Unknown type size: " + c);
      }
    }
    var Vr = void (285 * 4 + -3926 + 2786 * 1);
    function Ze(c) {
      for (var x = ""; Ce[c]; )
        x += Vr[Ce[c++]];
      return x;
    }
    var Tt = {}, Bt = {}, Xn = {};
    function qi(c) {
      if (void (-4149 * -2 + 5967 + -1585 * 9) === c)
        return "_unknown";
      c = c.replace(/[^a-zA-Z0-9_]/g, "$");
      var x = c.charCodeAt(-9643 + -1 * -803 + -260 * -34);
      return 4562 + 292 * -31 + 4538 <= x && -574 * -5 + -2924 + 37 * 3 >= x ? "_" + c : c;
    }
    function eo(c, x) {
      return c = qi(c), new Function("body", "return function " + c + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(x);
    }
    function to(c) {
      var x = Error, l = eo(c, function(f) {
        this.name = c, this.message = f, f = Error(f).stack, f !== void 0 && (this.stack = this.toString() + `
` + f.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return l.prototype = Object.create(x.prototype), l.prototype.constructor = l, l.prototype.toString = function() {
        return this.message === void 0 ? this.name : this.name + ": " + this.message;
      }, l;
    }
    var Yt = void (8169 * -1 + 1 * -6949 + 2 * 7559);
    function X(c) {
      throw new Yt(c);
    }
    var Er = void (-6 * 1363 + 5 * 1289 + 1733);
    function jn(c) {
      throw new Er(c);
    }
    function Ft(c, x, l) {
      function f(y) {
        y = l(y), y.length !== c.length && jn("Mismatched type converter count");
        for (var W = -3 * 1934 + 1399 + 259 * 17; W < c.length; ++W)
          at(c[W], y[W]);
      }
      c.forEach(function(y) {
        Xn[y] = x;
      });
      var m = Array(x.length), b = [], Z = -1 * 9251 + -29 + 9280;
      x.forEach(function(y, W) {
        Bt.hasOwnProperty(y) ? m[W] = Bt[y] : (b.push(y), Tt.hasOwnProperty(y) || (Tt[y] = []), Tt[y].push(function() {
          m[W] = Bt[y], ++Z, Z === b.length && f(m);
        }));
      }), 5908 + 4 * 834 + -9244 === b.length && f(m);
    }
    function at(c, x, l) {
      if (l = l || {}, !("argPackAdvance" in x))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var f = x.name;
      if (c || X('type "' + f + '" must have a positive integer typeid pointer'), Bt.hasOwnProperty(c)) {
        if (l.Ea)
          return;
        X("Cannot register type '" + f + "' twice");
      }
      Bt[c] = x, delete Xn[c], Tt.hasOwnProperty(c) && (x = Tt[c], delete Tt[c], x.forEach(function(m) {
        m();
      }));
    }
    function xg(c) {
      var x = {};
      return x.count = c.count, x.oa = c.oa, x.pa = c.pa, x.da = c.da, x.fa = c.fa, x.ga = c.ga, x.ha = c.ha, x;
    }
    function no(c) {
      X(c.A.fa.ea.name + " instance already deleted");
    }
    var io = !(1 * -8285 + 1423 + 6863);
    function Pr() {
    }
    function Nr(c) {
      --c.count.value, -8912 + -2 * 499 + -10 * -991 === c.count.value && (c.ga ? c.ha.na(c.ga) : c.fa.ea.na(c.da));
    }
    function dn(c) {
      return typeof FinalizationGroup > "u" ? (dn = function(x) {
        return x;
      }, c) : (io = new FinalizationGroup(function(x) {
        for (var l = x.next(); !l.done; l = x.next())
          l = l.value, l.da ? Nr(l) : console.warn("object already deleted: " + l.da);
      }), dn = function(x) {
        return io.register(x, x.A, x.A), x;
      }, Pr = function(x) {
        io.unregister(x.A);
      }, dn(c));
    }
    var fn = void (12424 + -1 * 12424), An = [];
    function oo() {
      for (; An.length; ) {
        var c = An.pop();
        c.A.oa = !(1 * -563 + -18 * -23 + -30 * -5), c.delete();
      }
    }
    function dt() {
    }
    var Lr = {};
    function Ig(c, x) {
      var l = e;
      if (l[c].ja === void 0) {
        var f = l[c];
        l[c] = function() {
          return l[c].ja.hasOwnProperty(arguments.length) || X("Function '" + x + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + l[c].ja + ")!"), l[c].ja[arguments.length].apply(this, arguments);
        }, l[c].ja = [], l[c].ja[f.ya] = f;
      }
    }
    function Tr(c, x, l) {
      e.hasOwnProperty(c) ? ((void (-2273 * 1 + 7855 + 5582 * -1) === l || void (3483 * 1 + 9788 * -1 + 1261 * 5) !== e[c].ja && e[c].ja[l] !== void 0) && X("Cannot register public name '" + c + "' twice"), Ig(c, c), e.hasOwnProperty(l) && X("Cannot register multiple overloads of a function with the same number of arguments (" + l + ")!"), e[c].ja[l] = x) : (e[c] = x, void (-5411 + -123 * 49 + 11438) !== l && (e[c].Ra = l));
    }
    function lg(c, x, l, f, m, b, Z, y) {
      this.name = c, this.constructor = x, this.ma = l, this.na = f, this.ia = m, this.Ca = b, this.qa = Z, this.Aa = y;
    }
    function Mn(c, x, l) {
      for (; x !== l; )
        x.qa || X("Expected null or instance of " + l.name + ", got an instance of " + x.name), c = x.qa(c), x = x.ia;
      return c;
    }
    function ug(c, x) {
      return x === null ? (this.ua && X("null is not a valid " + this.name), 118 * 31 + 362 * 1 + -4020) : (x.A || X('Cannot pass "' + Xt(x) + '" as a ' + this.name), x.A.da || X("Cannot pass deleted object as a pointer of type " + this.name), Mn(x.A.da, x.A.fa.ea, this.ea));
    }
    function Cg(c, x) {
      if (x === null) {
        if (this.ua && X("null is not a valid " + this.name), this.sa) {
          var l = this.Ha();
          return c !== null && c.push(this.na, l), l;
        }
        return 3631 * 1 + 1014 + -4645;
      }
      if (x.A || X('Cannot pass "' + Xt(x) + '" as a ' + this.name), x.A.da || X("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && x.A.fa.ra && X("Cannot convert argument of type " + (x.A.ha ? x.A.ha.name : x.A.fa.name) + " to parameter type " + this.name), l = Mn(x.A.da, x.A.fa.ea, this.ea), this.sa)
        switch (void (615 + 3 * -205) === x.A.ga && X("Passing raw pointer to smart pointer is illegal"), this.Pa) {
          case 4981 * -2 + 7429 + -149 * -17:
            x.A.ha === this ? l = x.A.ga : X("Cannot convert argument of type " + (x.A.ha ? x.A.ha.name : x.A.fa.name) + " to parameter type " + this.name);
            break;
          case 1:
            l = x.A.ga;
            break;
          case -1 * -7219 + -1 * -9869 + -17086:
            if (x.A.ha === this)
              l = x.A.ga;
            else {
              var f = x.clone();
              l = this.Ia(l, Dt(function() {
                f.delete();
              })), c !== null && c.push(this.na, l);
            }
            break;
          default:
            X("Unsupporting sharing policy");
        }
      return l;
    }
    function dg(c, x) {
      return x === null ? (this.ua && X("null is not a valid " + this.name), 2949 * 2 + 6608 + -74 * 169) : (x.A || X('Cannot pass "' + Xt(x) + '" as a ' + this.name), x.A.da || X("Cannot pass deleted object as a pointer of type " + this.name), x.A.fa.ra && X("Cannot convert argument of type " + x.A.fa.name + " to parameter type " + this.name), Mn(x.A.da, x.A.fa.ea, this.ea));
    }
    function Un(c) {
      return this.fromWireType(be[c >> 4132 * -2 + -9162 + 4357 * 4]);
    }
    function Yr(c, x, l) {
      return x === l ? c : void (-5 * -722 + -857 * -9 + -11323) === l.ia ? null : (c = Yr(c, x, l.ia), c === null ? null : l.Aa(c));
    }
    var pn = {};
    function fg(c, x) {
      for (void (7552 + -1888 * 4) === x && X("ptr should not be undefined"); c.ia; )
        x = c.qa(x), c = c.ia;
      return pn[x];
    }
    function Jn(c, x) {
      x.fa && x.da || jn("makeClassHandle requires ptr and ptrType"), !!x.ha != !!x.ga && jn("Both smartPtrType and smartPtr must be specified");
      var l = {};
      l.value = 1, x.count = l;
      var f = {};
      f.value = x;
      var m = {};
      return m.A = f, dn(Object.create(c, m));
    }
    function st(c, x, l, f) {
      this.name = c, this.ea = x, this.ua = l, this.ra = f, this.sa = !(-8258 + 244 * -2 + 8747), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void 0, void (-404 * 6 + -1 * 4107 + 311 * 21) !== x.ia ? this.toWireType = Cg : (this.toWireType = f ? ug : dg, this.ka = null);
    }
    function Fr(c, x, l) {
      e.hasOwnProperty(c) || jn("Replacing nonexistant public symbol"), void (2 * 4139 + -3 * 1633 + 109 * -31) !== e[c].ja && void (-7892 + 1 * -3094 + 10986) !== l ? e[c].ja[l] = x : (e[c] = x, e[c].ya = l);
    }
    function ft(c, x) {
      c = Ze(c);
      var l = $i(c, x);
      return typeof l != "function" && X("unknown function pointer with signature " + c + ": " + x), l;
    }
    var Dr = void 0;
    function Xr(c) {
      c = oa(c);
      var x = Ze(c);
      return gt(c), x;
    }
    function hn(c, x) {
      function l(b) {
        m[b] || Bt[b] || (Xn[b] ? Xn[b].forEach(l) : (f.push(b), m[b] = !(622 * 12 + 8407 + -15871 * 1)));
      }
      var f = [], m = {};
      throw x.forEach(l), new Dr(c + ": " + f.map(Xr).join([", "]));
    }
    function jr(c, x) {
      for (var l = [], f = 7820 + 9 * 50 + -8270; f < c; f++)
        l.push(re[(x >> 2) + f]);
      return l;
    }
    function Qn(c) {
      for (; c.length; ) {
        var x = c.pop();
        c.pop()(x);
      }
    }
    function Mr(c, x, l) {
      return c instanceof Object || X(l + ' with invalid "this": ' + c), c instanceof x.ea.constructor || X(l + ' incompatible with "this" of type ' + c.constructor.name), c.A.da || X("cannot call emscripten binding method " + l + " on deleted object"), Mn(c.A.da, c.A.fa.ea, x.ea);
    }
    var Ur = {};
    Ur.value = void (6781 + -6781 * 1);
    var Jr = {};
    Jr.value = null;
    var Qr = {};
    Qr.value = !0;
    var zr = {};
    zr.value = !(-4315 * -2 + 34 * -107 + -4991);
    var ro = [], Pe = [{}, Ur, Jr, Qr, zr];
    function ao(c) {
      -4955 * 1 + 9327 + -4368 < c && 1595 + 103 * -63 + 4894 === --Pe[c].Ja && (Pe[c] = void (7855 + 7855 * -1), ro.push(c));
    }
    function Dt(c) {
      switch (c) {
        case void (17 * -145 + 7654 + -5189 * 1):
          return -9931 * 1 + 8719 + 1213;
        case null:
          return 55 * -147 + 7935 + -1 * -152;
        case !(-241 * 23 + 7214 + -1671):
          return 1747 * -1 + 2474 + -724;
        case !(5787 + -86 * -63 + -11204):
          return 8103 + -69 * -107 + -15482;
        default:
          var x = ro.length ? ro.pop() : Pe.length, l = {};
          return l.Ja = 1, l.value = c, Pe[x] = l, x;
      }
    }
    function Xt(c) {
      if (c === null)
        return "null";
      var x = typeof c;
      return x === "object" || x === "array" || x === "function" ? c.toString() : "" + c;
    }
    function Ag(c, x) {
      switch (x) {
        case -29 * -171 + 19 * -31 + -4368:
          return function(l) {
            return this.fromWireType(Qe[l >> 9928 + 1 * 3257 + -13183]);
          };
        case 8505 * -1 + -11 * 404 + 12952:
          return function(l) {
            return this.fromWireType(Fe[l >> -9783 + -21 * -466]);
          };
        default:
          throw new TypeError("Unknown float type: " + c);
      }
    }
    function pg(c) {
      var x = Function;
      if (!(x instanceof Function))
        throw new TypeError("new_ called with constructor type " + typeof x + " which is not a function");
      var l = eo(x.name || "unknownFunctionName", function() {
      });
      return l.prototype = x.prototype, l = new l(), c = x.apply(l, c), c instanceof Object ? c : l;
    }
    function hg(c, x, l) {
      switch (x) {
        case -6093 + 1 * 6093:
          return l ? function(f) {
            return q[f];
          } : function(f) {
            return Ce[f];
          };
        case 1:
          return l ? function(f) {
            return Je[f >> -1283 + 137 * -43 + 7175];
          } : function(f) {
            return Ct[f >> 1];
          };
        case 2:
          return l ? function(f) {
            return re[f >> -1 * -5057 + -622 * 7 + -701 * 1];
          } : function(f) {
            return be[f >> 8982 + -11 * -23 + -9233];
          };
        default:
          throw new TypeError("Unknown integer type: " + c);
      }
    }
    function so(c) {
      return c || X("Cannot use deleted val. handle = " + c), Pe[c].value;
    }
    function $r(c, x) {
      var l = Bt[c];
      return void (-5769 + 5769 * 1) === l && X(x + " has unknown type " + Xr(c)), l;
    }
    var mg = {}, _r = {};
    function qr() {
      if (!go) {
        var c = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: s || "./this.program" }, x;
        for (x in _r)
          c[x] = _r[x];
        var l = [];
        for (x in c)
          l.push(x + "=" + c[x]);
        go = l;
      }
      return go;
    }
    var go, ea = [];
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
              if (K)
                return;
              var b = ea.pop();
              S(b === f);
            }
          } : m;
        })(l);
      return x;
    }
    for (var na = Array(27 * 35 + -755 + 22 * 3), zn = 10 * -338 + 1171 + 2209; 256 > zn; ++zn)
      na[zn] = String.fromCharCode(zn);
    Vr = na, Yt = e.BindingError = to("BindingError"), Er = e.InternalError = to("InternalError"), dt.prototype.isAliasOf = function(c) {
      if (!(this instanceof dt && c instanceof dt))
        return !(-4 * -1127 + 4 * -803 + -1295);
      var x = this.A.fa.ea, l = this.A.da, f = c.A.fa.ea;
      for (c = c.A.da; x.ia; )
        l = x.qa(l), x = x.ia;
      for (; f.ia; )
        c = f.qa(c), f = f.ia;
      return x === f && l === c;
    }, dt.prototype.clone = function() {
      if (this.A.da || no(this), this.A.pa)
        return this.A.count.value += 539 * 18 + -113 * -31 + -13204 * 1, this;
      var c = dn(Object.create(Object.getPrototypeOf(this), { A: { value: xg(this.A) } }));
      return c.A.count.value += -934 * -1 + 2616 + -3549, c.A.oa = !(-53 * 3 + -1226 * -4 + 4 * -1186), c;
    }, dt.prototype.delete = function() {
      this.A.da || no(this), this.A.oa && !this.A.pa && X("Object already scheduled for deletion"), Pr(this), Nr(this.A), this.A.pa || (this.A.ga = void (1263 + 2 * -2473 + -3683 * -1), this.A.da = void (2371 + 18 * 29 + 11 * -263));
    }, dt.prototype.isDeleted = function() {
      return !this.A.da;
    }, dt.prototype.deleteLater = function() {
      return this.A.da || no(this), this.A.oa && !this.A.pa && X("Object already scheduled for deletion"), An.push(this), An.length === 1 && fn && fn(oo), this.A.oa = !(3878 + 1 * 1433 + -5311), this;
    }, st.prototype.Da = function(c) {
      return this.wa && (c = this.wa(c)), c;
    }, st.prototype.va = function(c) {
      this.na && this.na(c);
    }, st.prototype.argPackAdvance = -74 * 27 + -3 * -2306 + -4912, st.prototype.readValueFromPointer = Un, st.prototype.deleteObject = function(c) {
      c !== null && c.delete();
    }, st.prototype.fromWireType = function(c) {
      function x() {
        return this.sa ? Jn(this.ea.ma, { fa: this.Ga, da: l, ha: this, ga: c }) : Jn(this.ea.ma, { fa: this, da: c });
      }
      var l = this.Da(c);
      if (!l)
        return this.va(c), null;
      var f = fg(this.ea, l);
      if (void (-85 * -64 + 445 * -5 + -643 * 5) !== f)
        return 1 * 2459 + -29 * -331 + 6029 * -2 === f.A.count.value ? (f.A.da = l, f.A.ga = c, f.clone()) : (f = f.clone(), this.va(c), f);
      if (f = this.ea.Ca(l), f = Lr[f], !f)
        return x.call(this);
      f = this.ra ? f.za : f.pointerType;
      var m = Yr(l, this.ea, f.ea);
      return m === null ? x.call(this) : this.sa ? Jn(f.ea.ma, { fa: f, da: m, ha: this, ga: c }) : Jn(f.ea.ma, { fa: f, da: m });
    }, e.getInheritedInstanceCount = function() {
      return Object.keys(pn).length;
    }, e.getLiveInheritedInstances = function() {
      var c = [], x;
      for (x in pn)
        pn.hasOwnProperty(x) && c.push(pn[x]);
      return c;
    }, e.flushPendingDeletes = oo, e.setDelayFunction = function(c) {
      fn = c, An.length && fn && fn(oo);
    }, Dr = e.UnboundTypeError = to("UnboundTypeError"), e.count_emval_handles = function() {
      for (var c = 1898 + -1 * 9521 + -1089 * -7, x = 5; x < Pe.length; ++x)
        void (-313 * 29 + 4625 + 42 * 106) !== Pe[x] && ++c;
      return c;
    }, e.get_first_emval = function() {
      for (var c = 4949 * 1 + 7472 + -12416; c < Pe.length; ++c)
        if (Pe[c] !== void 0)
          return Pe[c];
      return null;
    }, $e.push({ Ba: function() {
      ia();
    } });
    var bg = { z: function(c) {
      return $n(c + (-6565 * 1 + 276 * 11 + 5 * 709)) + (6011 + 3283 * -2 + 571);
    }, u: function(c, x, l) {
      throw new cg(c).Fa(x, l), "uncaught_exception" in Dn ? Dn.xa++ : Dn.xa = 975 + -1 * 974, c;
    }, w: function(c, x, l, f, m) {
      var b = _i(l);
      x = Ze(x), at(c, { name: x, fromWireType: function(Z) {
        return !!Z;
      }, toWireType: function(Z, y) {
        return y ? f : m;
      }, argPackAdvance: 8, readValueFromPointer: function(Z) {
        if (2657 * 1 + -5347 + 2691 === l)
          var y = q;
        else if (l === 2)
          y = Je;
        else if (-125 * 6 + 5597 + -1 * 4843 === l)
          y = re;
        else
          throw new TypeError("Unknown boolean type size: " + x);
        return this.fromWireType(y[Z >> b]);
      }, ka: null });
    }, h: function(c, x, l, f, m, b, Z, y, W, R, V, P, Q) {
      V = Ze(V), b = ft(m, b), y && (y = ft(Z, y)), R && (R = ft(W, R)), Q = ft(P, Q);
      var le = qi(V);
      Tr(le, function() {
        hn("Cannot construct " + V + " due to unbound types", [f]);
      }), Ft([c, x, l], f ? [f] : [], function(N) {
        if (N = N[7246 + -1 * 7246], f)
          var _e = N.ea, ye = _e.ma;
        else
          ye = dt.prototype;
        N = eo(le, function() {
          if (Object.getPrototypeOf(this) !== jt)
            throw new Yt("Use 'new' to construct " + V);
          if (void (-5536 + -173 * -32) === Mt.la)
            throw new Yt(V + " has no accessible constructor");
          var aa = Mt.la[arguments.length];
          if (void (-590 + 331 * -19 + 6879) === aa)
            throw new Yt("Tried to invoke ctor of " + V + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(Mt.la).toString() + ") parameters instead!");
          return aa.apply(this, arguments);
        });
        var He = {};
        He.value = N;
        var St = {};
        St.constructor = He;
        var jt = Object.create(ye, St);
        N.prototype = jt;
        var Mt = new lg(V, N, jt, Q, _e, b, y, R);
        _e = new st(V, Mt, !(6124 + 1 * -6124), !(341 * -18 + -1099 + 11 * 658)), ye = new st(V + "*", Mt, !(3643 * -2 + 4374 * 1 + -3 * -971), !(-1 * 1111 + -1 * -6236 + 14 * -366));
        var ra = new st(V + " const*", Mt, !(5395 + -4691 * 2 + 3988), !(-17131 + -463 * -37)), xo = {};
        return xo.pointerType = ye, xo.za = ra, Lr[c] = xo, Fr(le, N), [_e, ye, ra];
      });
    }, g: function(c, x, l, f, m, b) {
      S(3581 * -1 + 3 * 1839 + -1936 < x);
      var Z = jr(x, l);
      m = ft(f, m);
      var y = [b], W = [];
      Ft([], [c], function(R) {
        R = R[74 * -74 + 2 * 306 + 4864];
        var V = "constructor " + R.name;
        if (void (-8905 * -1 + 8739 + -17644) === R.ea.la && (R.ea.la = []), void (1 * -6501 + -5 * -1516 + 1079 * -1) !== R.ea.la[x - (9856 + -499 * -11 + 16 * -959)])
          throw new Yt("Cannot register multiple constructors with identical number of parameters (" + (x - (6236 * 1 + -2963 + -3272)) + ") for class '" + R.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return R.ea.la[x - (-152 * 54 + -8316 + 16525)] = function() {
          hn("Cannot construct " + R.name + " due to unbound types", Z);
        }, Ft([], Z, function(P) {
          return R.ea.la[x - (2770 + 374 * 21 + -10623)] = function() {
            arguments.length !== x - (1 * 5795 + -5144 + -650) && X(V + " called with " + arguments.length + " arguments, expected " + (x - (-7139 + -650 * 5 + 10 * 1039))), W.length = -3602 + -65 * -75 + -1273, y.length = x;
            for (var Q = -694 * -10 + -9751 * 1 + 2812; Q < x; ++Q)
              y[Q] = P[Q].toWireType(W, arguments[Q - (-74 * 31 + 9247 * -1 + 11542)]);
            return Q = m.apply(null, y), Qn(W), P[3722 * 1 + -1617 * 2 + -4 * 122].fromWireType(Q);
          }, [];
        }), [];
      });
    }, b: function(c, x, l, f, m, b, Z, y, W, R) {
      x = Ze(x), m = ft(f, m), Ft([], [c], function(V) {
        V = V[1 * -5466 + 7065 + -1599];
        var P = V.name + "." + x, Q = { get: function() {
          hn("Cannot access " + P + " due to unbound types", [l, Z]);
        }, enumerable: !(2017 + 4321 * -1 + -3 * -768), configurable: !(-2 * 2534 + 8662 + -3594) };
        return W ? Q.set = function() {
          hn("Cannot access " + P + " due to unbound types", [l, Z]);
        } : Q.set = function() {
          X(P + " is a read-only property");
        }, Object.defineProperty(V.ea.ma, x, Q), Ft([], W ? [l, Z] : [l], function(le) {
          var N = le[0], _e = { get: function() {
            var He = Mr(this, V, P + " getter");
            return N.fromWireType(m(b, He));
          }, enumerable: !(6 * 1548 + 3143 + -401 * 31) };
          if (W) {
            W = ft(y, W);
            var ye = le[-6277 * 1 + -6688 + 12966];
            _e.set = function(He) {
              var St = Mr(this, V, P + " setter"), jt = [];
              W(R, St, ye.toWireType(jt, He)), Qn(jt);
            };
          }
          return Object.defineProperty(V.ea.ma, x, _e), [];
        }), [];
      });
    }, v: function(c, x) {
      x = Ze(x), at(c, { name: x, fromWireType: function(l) {
        var f = Pe[l].value;
        return ao(l), f;
      }, toWireType: function(l, f) {
        return Dt(f);
      }, argPackAdvance: 8, readValueFromPointer: Un, ka: null });
    }, m: function(c, x, l) {
      l = _i(l), x = Ze(x), at(c, { name: x, fromWireType: function(f) {
        return f;
      }, toWireType: function(f, m) {
        if (typeof m != "number" && typeof m != "boolean")
          throw new TypeError('Cannot convert "' + Xt(m) + '" to ' + this.name);
        return m;
      }, argPackAdvance: 8, readValueFromPointer: Ag(x, l), ka: null });
    }, c: function(c, x, l, f, m, b) {
      var Z = jr(x, l);
      c = Ze(c), m = ft(f, m), Tr(c, function() {
        hn("Cannot call " + c + " due to unbound types", Z);
      }, x - (290 * 28 + 9497 * 1 + -17616)), Ft([], Z, function(y) {
        var W = c, R = c;
        y = [y[12509 + 1 * -12509], null].concat(y.slice(6416 + -57 * 57 + -3166));
        var V = m, P = y.length;
        -1 * 5992 + 5429 + 565 > P && X("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var Q = y[-285 * -19 + 397 * 2 + -6208] !== null && !1, le = !(-1621 + 29 * 3 + 307 * 5), N = 1; N < y.length; ++N)
          if (y[N] !== null && void (-4637 * -1 + 5821 + -10458) === y[N].ka) {
            le = !(41 * -73 + 5562 + 367 * -7);
            break;
          }
        var _e = y[2131 * -3 + 8169 + -24 * 74].name !== "void", ye = "", He = "";
        for (N = -4933 + -1 * 4813 + 9746; N < P - (1 * -4317 + 265 * -2 + 4849); ++N)
          ye += (7729 + 1 * -7729 !== N ? ", " : "") + "arg" + N, He += (7731 * -1 + -1517 * 6 + 16833 !== N ? ", " : "") + "arg" + N + "Wired";
        R = "return function " + qi(R) + "(" + ye + `) {
if (arguments.length !== ` + (P - (1129 + 49 * -23)) + `) {
throwBindingError('function ` + R + " called with ' + arguments.length + ' arguments, expected " + (P - (3 * -2741 + -103 * 37 + 12036)) + ` args!');
}
`, le && (R += `var destructors = [];
`);
        var St = le ? "destructors" : "null";
        for (ye = "throwBindingError invoker fn runDestructors retType classParam".split(" "), V = [X, V, b, Qn, y[0], y[-1037 * -1 + 4665 + 5701 * -1]], Q && (R += "var thisWired = classParam.toWireType(" + St + `, this);
`), N = 1855 * -4 + -274 + -2 * -3847; N < P - (49 * 49 + -1 * 711 + 1 * -1688); ++N)
          R += "var arg" + N + "Wired = argType" + N + ".toWireType(" + St + ", arg" + N + "); // " + y[N + (-25 * -90 + -5357 + 3109 * 1)].name + `
`, ye.push("argType" + N), V.push(y[N + (9916 + 2 * -4957)]);
        if (Q && (He = "thisWired" + (2985 * 1 + -3197 * 3 + 6606 < He.length ? ", " : "") + He), R += (_e ? "var rv = " : "") + "invoker(fn" + (-7122 * -1 + -14 * -548 + 2 * -7397 < He.length ? ", " : "") + He + `);
`, le)
          R += `runDestructors(destructors);
`;
        else
          for (N = Q ? -3 * -1011 + 3871 + -13 * 531 : -3082 * 1 + -9061 + 12145 * 1; N < y.length; ++N)
            P = -321 * 23 + 6 * 1373 + 854 * -1 === N ? "thisWired" : "arg" + (N - 2) + "Wired", y[N].ka !== null && (R += P + "_dtor(" + P + "); // " + y[N].name + `
`, ye.push(P + "_dtor"), V.push(y[N].ka));
        return _e && (R += `var ret = retType.fromWireType(rv);
return ret;
`), ye.push(R + `}
`), y = pg(ye).apply(null, V), Fr(W, y, x - (-11 * -811 + 175 * 46 + -16970)), [];
      });
    }, e: function(c, x, l, f, m) {
      function b(R) {
        return R;
      }
      x = Ze(x), -(7126 + 1 * 5513 + 142 * -89) === m && (m = 77698441 * 83 + -8459426655 + 6305423347);
      var Z = _i(l);
      if (9 * 1013 + -8143 + -974 === f) {
        var y = 32 - 8 * l;
        b = function(R) {
          return R << y >>> y;
        };
      }
      var W = -(5 * 1142 + -7 * -326 + -1 * 7991) != x.indexOf("unsigned");
      at(c, { name: x, fromWireType: b, toWireType: function(R, V) {
        if (typeof V != "number" && typeof V != "boolean")
          throw new TypeError('Cannot convert "' + Xt(V) + '" to ' + this.name);
        if (V < f || V > m)
          throw new TypeError('Passing a number "' + Xt(V) + '" from JS side to C/C++ side to an argument of type "' + x + '", which is outside the valid range [' + f + ", " + m + "]!");
        return W ? V >>> 0 : V | -4 * -2269 + -7258 + -1818;
      }, argPackAdvance: 8, readValueFromPointer: hg(x, Z, 69 * 107 + -2339 * -2 + -12061 * 1 !== f), ka: null });
    }, d: function(c, x, l) {
      function f(y) {
        y >>= 2;
        var W = be;
        return new m(oe, W[y + 1], W[y]);
      }
      var m = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][x];
      l = Ze(l);
      var b = {};
      b.name = l, b.fromWireType = f, b.argPackAdvance = 8, b.readValueFromPointer = f;
      var Z = {};
      Z.Ea = !(3 * 368 + 3 * 53 + 1 * -1263), at(c, b, Z);
    }, n: function(c, x) {
      x = Ze(x);
      var l = x === "std::string";
      at(c, { name: x, fromWireType: function(f) {
        var m = be[f >> 2];
        if (l)
          for (var b = f + (6295 + 7 * -551 + 2 * -1217), Z = 10 * 142 + 1129 + -1 * 2549; Z <= m; ++Z) {
            var y = f + 4 + Z;
            if (Z == m || 8041 * -1 + 1 * -4493 + -6 * -2089 == Ce[y]) {
              if (b) {
                var W = b, R = Ce, V = W + (y - b);
                for (b = W; R[b] && !(b >= V); )
                  ++b;
                if (16 < b - W && R.subarray && v)
                  W = v.decode(R.subarray(W, b));
                else {
                  for (V = ""; W < b; ) {
                    var P = R[W++];
                    if (P & 2268 + -7 * -939 + -8713) {
                      var Q = R[W++] & 63;
                      if ((P & -820 * 12 + 1545 + 8519) == 192)
                        V += String.fromCharCode((P & 28 + 1 * -3830 + 3833 * 1) << 5513 + 1 * -5507 | Q);
                      else {
                        var le = R[W++] & 63;
                        P = 3502 + 1 * -3278 == (P & 2 * -4985 + -2494 + 12704) ? (P & -7823 + -1 * 4579 + 12417 * 1) << -11 * -571 + 3748 * 2 + -13765 | Q << -1744 * -1 + 6715 + -8453 | le : (P & 1759 + 2 * -876) << -3286 + 826 * 4 | Q << -452 * -20 + 5 * -292 + 11 * -688 | le << -600 + 31 * 109 + -47 * 59 | R[W++] & -2297 * 2 + -4 * -1160 + 17, -915 + -6041 * -11 > P ? V += String.fromCharCode(P) : (P -= -29506 * -2 + -65636 + 72160, V += String.fromCharCode(70877 * 1 + -3092 + -12489 | P >> 4397 * 1 + -9344 + -4957 * -1, -14482 * -1 + 2 * 11191 + 19 * 1024 | P & -2882 + 337 * 20 + -2835));
                      }
                    } else
                      V += String.fromCharCode(P);
                  }
                  W = V;
                }
              } else
                W = "";
              if (void (-14253 + 1 * 14253) === N)
                var N = W;
              else
                N += String.fromCharCode(57 * 83 + 667 * -5 + -1396), N += W;
              b = y + 1;
            }
          }
        else {
          for (N = Array(m), Z = -3344 + 209 * 16; Z < m; ++Z)
            N[Z] = String.fromCharCode(Ce[f + (-9439 * -1 + 1 * 1720 + -11155) + Z]);
          N = N.join("");
        }
        return gt(f), N;
      }, toWireType: function(f, m) {
        m instanceof ArrayBuffer && (m = new Uint8Array(m));
        var b = typeof m == "string";
        b || m instanceof Uint8Array || m instanceof Uint8ClampedArray || m instanceof Int8Array || X("Cannot pass non-string to std::string");
        var Z = (l && b ? function() {
          for (var R = -7735 + -5 * -1547, V = -9918 + 146 * -6 + 42 * 257; V < m.length; ++V) {
            var P = m.charCodeAt(V);
            -124780 + 1 * 180076 <= P && -44339 * -1 + 19358 + -6354 >= P && (P = -53240 + -1163 * -61 + 47833 + ((P & 53 * -157 + -5 * 31 + 9499 * 1) << 5235 + 1 * 4029 + -9254) | m.charCodeAt(++V) & 210 * 37 + -1 * 8459 + 2 * 856), -13 * -601 + 9084 + -16770 >= P ? ++R : R = 5 * 1831 + 559 + -7667 * 1 >= P ? R + (66 * -80 + 541 + 4741) : 89921 + -3 * 27452 + 57970 >= P ? R + (-2 * 2919 + 7424 + -1583) : R + (1 * 13 + 139 + -1 * 148);
          }
          return R;
        } : function() {
          return m.length;
        })(), y = $n(-7502 + -78 * -54 + 18 * 183 + Z + (3989 + -619 * 3 + 2131 * -1));
        if (be[y >> -8549 + -1 * 2007 + 10558] = Z, l && b)
          E(m, y + (-2958 + -284 * -2 + -3 * -798), Z + (3721 * -1 + -1997 * 5 + 13707));
        else if (b)
          for (b = -8875 + 355 * 25; b < Z; ++b) {
            var W = m.charCodeAt(b);
            7030 + -3 * 2809 + 1652 < W && (gt(y), X("String has UTF-16 code units that do not fit in 8 bits")), Ce[y + (5280 + -7654 * 1 + 2378) + b] = W;
          }
        else
          for (b = -133 * 26 + 1 * 5551 + -2093; b < Z; ++b)
            Ce[y + (-5912 + 1 * 5916) + b] = m[b];
        return f !== null && f.push(gt, y), y;
      }, argPackAdvance: 8, readValueFromPointer: Un, ka: function(f) {
        gt(f);
      } });
    }, j: function(c, x, l) {
      if (l = Ze(l), -1 * -6056 + 7 * 84 + -6642 === x)
        var f = $, m = D, b = j, Z = function() {
          return Ct;
        }, y = 8 * -292 + 883 + 1 * 1454;
      else
        8165 + -1539 * 6 + 1073 === x && (f = H, m = ie, b = _, Z = function() {
          return be;
        }, y = -805 * -2 + 6030 + -7638);
      at(c, { name: l, fromWireType: function(W) {
        for (var R = be[W >> -3013 * -1 + 8659 + -10 * 1167], V = Z(), P, Q = W + (-7654 + -1 * -4968 + -269 * -10), le = -12 * -578 + -5973 + -107 * 9; le <= R; ++le) {
          var N = W + 4 + le * x;
          (le == R || V[N >> y] == 0) && (Q = f(Q, N - Q), void (-3670 + 3670 * 1) === P ? P = Q : (P += String.fromCharCode(1231 * -3 + -3408 + 7101), P += Q), Q = N + x);
        }
        return gt(W), P;
      }, toWireType: function(W, R) {
        typeof R != "string" && X("Cannot pass non-string to C++ string type " + l);
        var V = b(R), P = $n(13276 + 316 * -42 + V + x);
        return be[P >> 5370 * 1 + -4038 + -1330] = V >> y, m(R, P + (-4703 + -929 * -8 + -25 * 109), V + x), W !== null && W.push(gt, P), P;
      }, argPackAdvance: 8, readValueFromPointer: Un, ka: function(W) {
        gt(W);
      } });
    }, x: function(c, x) {
      x = Ze(x);
      var l = {};
      l.Qa = !(3 * -2780 + 1 * 866 + -202 * -37), l.name = x, l.argPackAdvance = 0, l.fromWireType = function() {
      }, l.toWireType = function() {
      }, at(c, l);
    }, k: function(c, x, l) {
      c = so(c), x = $r(x, "emval::as");
      var f = [], m = Dt(f);
      return re[l >> 5830 + 366 * -23 + 7 * 370] = m, x.toWireType(f, c);
    }, i: ao, l: function(c, x) {
      return c = so(c), x = so(x), Dt(c[x]);
    }, p: function(c) {
      var x = mg[c];
      return Dt(void (1 * 8186 + -1595 + 39 * -169) === x ? Ze(c) : x);
    }, o: function(c) {
      Qn(Pe[c].value), ao(c);
    }, y: function(c, x) {
      return c = $r(c, "_emval_take_value"), c = c.readValueFromPointer(x), Dt(c);
    }, f: function() {
      rt();
    }, q: function(c, x, l) {
      Ce.copyWithin(c, x, x + l);
    }, r: function(c) {
      c >>>= 0;
      var x = Ce.length;
      if (562609 * 7532 + -30796293 * 18 + -6 * 255959011 < c)
        return !(-6 * 288 + 1 * -6827 + 8556);
      for (var l = -8495 + 5061 * -1 + -3 * -4519; 1506 * -3 + 4238 + -142 * -2 >= l; l *= 3573 + -145 * -3 + -2003 * 2) {
        var f = x * (1 + 0.2 / l);
        f = Math.min(f, c + (581 * -130387 + 8 * -17138494 + 1 * 313526095)), f = Math.max(-24159940 + -883 * 10116 + -12467396 * -4, c, f), -1 * -4507 + -1 * 4786 + 93 * 3 < f % (-13006 * 1 + 22841 + 55701) && (f += 25748 + -58318 * 2 + -2 * -78212 - f % 65536);
        e: {
          try {
            w.grow(Math.min(-2 * 62900933 + -2846687180 + 5119972694, f) - oe.byteLength + 65535 >>> 9024 + 1 * -3671 + -5337), ce(w.buffer);
            var m = 397 * 23 + -8574 + 1 * -556;
            break e;
          } catch {
          }
          m = void 0;
        }
        if (m)
          return !(15 * -395 + 74 * -35 + -655 * -13);
      }
      return !(3 * -806 + 8087 + 218 * -26);
    }, s: function(c, x) {
      var l = 0;
      return qr().forEach(function(f, m) {
        var b = x + l;
        for (m = re[c + (1 * -1066 + -1543 * -5 + -1329 * 5) * m >> 1055 * 1 + 6 * 1246 + -8529 * 1] = b, b = -19 * -327 + -1877 * -2 + 1 * -9967; b < f.length; ++b)
          q[m++ >> -9918 + -4133 * -1 + 13 * 445] = f.charCodeAt(b);
        q[m >> 0] = -7283 + -6 * 521 + -1487 * -7, l += f.length + (2 * 3217 + 3096 + -1 * 9529);
      }), 4483 + -1348 * -3 + 1 * -8527;
    }, t: function(c, x) {
      var l = qr();
      re[c >> -1 * 1067 + 5495 + -4426] = l.length;
      var f = 6393 + -2131 * 3;
      return l.forEach(function(m) {
        f += m.length + (-7380 + 577 * -15 + -38 * -422);
      }), re[x >> -28 * 43 + -2111 * 2 + 5428] = f, -7732 + 1 * 4273 + 3459;
    }, a: w };
    (function() {
      function c(Z) {
        Z = Z.exports, Z = ta(Z), e.asm = Z, Se--, e.monitorRunDependencies && e.monitorRunDependencies(Se), -8702 + -615 * -14 + 46 * 2 == Se && Ge && (Z = Ge, Ge = null, Z());
      }
      function x(Z) {
        c(Z.instance);
      }
      function l(Z) {
        return gg().then(function(y) {
          return WebAssembly.instantiate(y, m);
        }).then(Z, function(y) {
          p("failed to asynchronously prepare wasm: " + y), rt(y);
        });
      }
      var f = {};
      f.a = bg;
      var m = f;
      if (Se++, e.monitorRunDependencies && e.monitorRunDependencies(Se), e.instantiateWasm)
        try {
          var b = e.instantiateWasm(m, c);
          return b = ta(b);
        } catch (Z) {
          return p("Module.instantiateWasm callback failed with error: " + Z), !(889 * 1 + -9 * -125 + 33 * -61);
        }
      return function() {
        if (A || typeof WebAssembly.instantiateStreaming != "function" || Lt() || De("file://") || typeof fetch != "function")
          return l(x);
        var Z = {};
        Z.credentials = "same-origin", fetch(Ee, Z).then(function(y) {
          return WebAssembly.instantiateStreaming(y, m).then(x, function(W) {
            return p("wasm streaming compile failed: " + W), p("falling back to ArrayBuffer instantiation"), l(x);
          });
        });
      }(), {};
    })();
    var ia = e.___wasm_call_ctors = function() {
      return (ia = e.___wasm_call_ctors = e.asm.B).apply(null, arguments);
    }, $n = e._malloc = function() {
      return ($n = e._malloc = e.asm.C).apply(null, arguments);
    }, gt = e._free = function() {
      return (gt = e._free = e.asm.D).apply(null, arguments);
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
    var _n;
    Ge = function c() {
      _n || co(), _n || (Ge = c);
    };
    function co() {
      function c() {
        if (!_n && (_n = !0, e.calledRun = !(343 * 21 + 9 * 822 + -14601), !K)) {
          if (Fn($e), Fn(Be), n(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), e.postRun)
            for (typeof e.postRun == "function" && (e.postRun = [e.postRun]); e.postRun.length; ) {
              var x = e.postRun.shift();
              Ve.unshift(x);
            }
          Fn(Ve);
        }
      }
      if (!(-2461 + 373 * 10 + 47 * -27 < Se)) {
        if (e.preRun)
          for (typeof e.preRun == "function" && (e.preRun = [e.preRun]); e.preRun.length; )
            ot();
        Fn(Ie), 5077 * -1 + -1 * 4099 + 9176 < Se || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            e.setStatus("");
          }, 1), c();
        }, 1)) : c());
      }
    }
    if (e.run = co, e.preInit)
      for (typeof e.preInit == "function" && (e.preInit = [e.preInit]); 1933 * 2 + -5 * -1355 + 3 * -3547 < e.preInit.length; )
        e.preInit.pop()();
    return co(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Es = Symbol("Comlink.proxy"), Gl = Symbol("Comlink.endpoint"), Zl = Symbol("Comlink.releaseProxy"), yo = Symbol("Comlink.finalizer"), mi = Symbol("Comlink.thrown"), Ps = (t) => typeof t == "object" && t !== null || typeof t == "function", kl = {
  canHandle: (t) => Ps(t) && t[Es],
  serialize(t) {
    const { port1: o, port2: e } = new MessageChannel();
    return Ls(t, o), [e, [e]];
  },
  deserialize(t) {
    return t.start(), Ys(t);
  }
}, Kl = {
  canHandle: (t) => Ps(t) && mi in t,
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
}, Ns = /* @__PURE__ */ new Map([
  ["proxy", kl],
  ["throw", Kl]
]);
function Hl(t, o) {
  for (const e of t)
    if (o === e || e === "*" || e instanceof RegExp && e.test(o))
      return !0;
  return !1;
}
function Ls(t, o = globalThis, e = ["*"]) {
  o.addEventListener("message", function n(i) {
    if (!i || !i.data)
      return;
    if (!Hl(e, i.origin)) {
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
            I = Pl(p);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: p, port2: A } = new MessageChannel();
            Ls(t, A), I = El(p, [p]);
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
      const [u, p] = Oi(C);
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), p), a === "RELEASE" && (o.removeEventListener("message", n), Ts(o), yo in t && typeof t[yo] == "function" && t[yo]());
    }).catch((C) => {
      const [u, p] = Oi({
        value: new TypeError("Unserializable return value"),
        [mi]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), p);
    });
  }), o.start && o.start();
}
function Ol(t) {
  return t.constructor.name === "MessagePort";
}
function Ts(t) {
  Ol(t) && t.close();
}
function Ys(t, o) {
  return qo(t, [], o);
}
function ri(t) {
  if (t)
    throw new Error("Proxy has been released and is not useable");
}
function Fs(t) {
  return $t(t, {
    type: "RELEASE"
  }).then(() => {
    Ts(t);
  });
}
const Ki = /* @__PURE__ */ new WeakMap(), Hi = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
  const o = (Ki.get(t) || 0) - 1;
  Ki.set(t, o), o === 0 && Fs(t);
});
function Wl(t, o) {
  const e = (Ki.get(o) || 0) + 1;
  Ki.set(o, e), Hi && Hi.register(t, o, t);
}
function Rl(t) {
  Hi && Hi.unregister(t);
}
function qo(t, o = [], e = function() {
}) {
  let n = !1;
  const i = new Proxy(e, {
    get(r, a) {
      if (ri(n), a === Zl)
        return () => {
          Rl(i), Fs(t), n = !0;
        };
      if (a === "then") {
        if (o.length === 0)
          return { then: () => i };
        const s = $t(t, {
          type: "GET",
          path: o.map((g) => g.toString())
        }).then(Ht);
        return s.then.bind(s);
      }
      return qo(t, [...o, a]);
    },
    set(r, a, s) {
      ri(n);
      const [g, I] = Oi(s);
      return $t(t, {
        type: "SET",
        path: [...o, a].map((C) => C.toString()),
        value: g
      }, I).then(Ht);
    },
    apply(r, a, s) {
      ri(n);
      const g = o[o.length - 1];
      if (g === Gl)
        return $t(t, {
          type: "ENDPOINT"
        }).then(Ht);
      if (g === "bind")
        return qo(t, o.slice(0, -1));
      const [I, C] = t0(s);
      return $t(t, {
        type: "APPLY",
        path: o.map((u) => u.toString()),
        argumentList: I
      }, C).then(Ht);
    },
    construct(r, a) {
      ri(n);
      const [s, g] = t0(a);
      return $t(t, {
        type: "CONSTRUCT",
        path: o.map((I) => I.toString()),
        argumentList: s
      }, g).then(Ht);
    }
  });
  return Wl(i, t), i;
}
function Vl(t) {
  return Array.prototype.concat.apply([], t);
}
function t0(t) {
  const o = t.map(Oi);
  return [o.map((e) => e[0]), Vl(o.map((e) => e[1]))];
}
const Ds = /* @__PURE__ */ new WeakMap();
function El(t, o) {
  return Ds.set(t, o), t;
}
function Pl(t) {
  return Object.assign(t, { [Es]: !0 });
}
function Oi(t) {
  for (const [o, e] of Ns)
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
    Ds.get(t) || []
  ];
}
function Ht(t) {
  switch (t.type) {
    case "HANDLER":
      return Ns.get(t.name).deserialize(t.value);
    case "RAW":
      return t.value;
  }
}
function $t(t, o, e) {
  return new Promise((n) => {
    const i = Nl();
    t.addEventListener("message", function r(a) {
      !a.data || !a.data.id || a.data.id !== i || (t.removeEventListener("message", r), n(a.data));
    }), t.start && t.start(), t.postMessage(Object.assign({ id: i }, o), e);
  });
}
function Nl() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function Ll(t, o) {
  const { z: e } = o || {};
  return !e || !t ? !0 : Math.abs(e) < t;
}
function Tl(t, o, e) {
  const n = Rs(e, t), i = Vs(o, e);
  return nl(i, n);
}
const Xs = "dmFyIGNlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgbGUgPSAoYSwgdSwgZSkgPT4gdSBpbiBhID8gY2UoYSwgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IGFbdV0gPSBlOwp2YXIgWW4gPSAoYSwgdSwgZSkgPT4gKGxlKGEsIHR5cGVvZiB1ICE9ICJzeW1ib2wiID8gdSArICIiIDogdSwgZSksIGUpOwpjb25zdCBrdCA9IHsKICBzaW1kOiAic2FtX3NpbWQud2FzbSIsCiAgc2FtOiAic2FtLndhc20iCn0sIGZlID0gYXN5bmMgKCkgPT4gV2ViQXNzZW1ibHkudmFsaWRhdGUobmV3IFVpbnQ4QXJyYXkoWzAsIDk3LCAxMTUsIDEwOSwgMSwgMCwgMCwgMCwgMSwgNSwgMSwgOTYsIDAsIDEsIDEyMywgMywgMiwgMSwgMCwgMTAsIDEwLCAxLCA4LCAwLCA2NSwgMCwgMjUzLCAxNSwgMjUzLCA5OCwgMTFdKSk7CmNsYXNzIEkgZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgbSkgewogICAgc3VwZXIoZSk7CiAgICBZbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IG07CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiBJKQogICAgICByZXR1cm4gZTsKICAgIGxldCBtOwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIG0gPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICBtID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgbSA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgbSA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgbSA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyBJKG0sIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgSSkKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCBtID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgSShtKTsKICB9Cn0KY29uc3QgZGUgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfSwgaGUgPSAoYSkgPT4gTnVtYmVyLnBhcnNlRmxvYXQoYS50b0ZpeGVkKDMpKSwgeWUgPSAoYSwgdSkgPT4gTWF0aC5taW4oYSwgdSk7CnZhciBwZSA9IGZ1bmN0aW9uKCkgewogIHZhciBhID0gdHlwZW9mIGRvY3VtZW50IDwgInUiICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgPyBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyA6IHZvaWQgMDsKICByZXR1cm4gZnVuY3Rpb24odSkgewogICAgdSA9IHUgfHwge307CiAgICB2YXIgZTsKICAgIGUgfHwgKGUgPSB0eXBlb2YgdSA8ICJ1IiA/IHUgOiB7fSk7CiAgICB2YXIgbSwgZzsKICAgIGUucmVhZHkgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihuLCB0KSB7CiAgICAgIG0gPSBuLCBnID0gdDsKICAgIH0pOwogICAgdmFyIEMgPSB7fSwgQTsKICAgIGZvciAoQSBpbiBlKQogICAgICBlLmhhc093blByb3BlcnR5KEEpICYmIChDW0FdID0gZVtBXSk7CiAgICB2YXIgTSA9ICIuL3RoaXMucHJvZ3JhbSIsIE8gPSAhMSwgVCA9ICExOwogICAgTyA9IHR5cGVvZiB3aW5kb3cgPT0gIm9iamVjdCIsIFQgPSB0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PSAiZnVuY3Rpb24iOwogICAgdmFyIF8gPSAiIiwgUzsKICAgIChPIHx8IFQpICYmIChUID8gXyA9IHNlbGYubG9jYXRpb24uaHJlZiA6IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgKF8gPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyksIGEgJiYgKF8gPSBhKSwgXy5pbmRleE9mKCJibG9iOiIpICE9PSAwID8gXyA9IF8uc3Vic3RyKDAsIF8ubGFzdEluZGV4T2YoIi8iKSArIDEpIDogXyA9ICIiLCBUICYmIChTID0gZnVuY3Rpb24obikgewogICAgICB2YXIgdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOwogICAgICByZXR1cm4gdC5vcGVuKCJHRVQiLCBuLCAhMSksIHQucmVzcG9uc2VUeXBlID0gImFycmF5YnVmZmVyIiwgdC5zZW5kKG51bGwpLCBuZXcgVWludDhBcnJheSh0LnJlc3BvbnNlKTsKICAgIH0pKTsKICAgIHZhciBFID0gZS5wcmludEVyciB8fCBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKTsKICAgIGZvciAoQSBpbiBDKQogICAgICBDLmhhc093blByb3BlcnR5KEEpICYmIChlW0FdID0gQ1tBXSk7CiAgICBDID0gbnVsbCwgZS50aGlzUHJvZ3JhbSAmJiAoTSA9IGUudGhpc1Byb2dyYW0pOwogICAgdmFyIFc7CiAgICBlLndhc21CaW5hcnkgJiYgKFcgPSBlLndhc21CaW5hcnkpLCBlLm5vRXhpdFJ1bnRpbWUgJiYgZS5ub0V4aXRSdW50aW1lLCB0eXBlb2YgV2ViQXNzZW1ibHkgIT0gIm9iamVjdCIgJiYgc24oIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWQiKTsKICAgIHZhciBILCBrbiA9ICExOwogICAgZnVuY3Rpb24gS24obikgewogICAgICBuIHx8IHNuKCJBc3NlcnRpb24gZmFpbGVkOiB1bmRlZmluZWQiKTsKICAgIH0KICAgIHZhciBRbiA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmOCIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gVXQobiwgdCwgcikgewogICAgICB2YXIgaSA9IEY7CiAgICAgIGlmICgwIDwgcikgewogICAgICAgIHIgPSB0ICsgciAtIDE7CiAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBuLmxlbmd0aDsgKytvKSB7CiAgICAgICAgICB2YXIgcyA9IG4uY2hhckNvZGVBdChvKTsKICAgICAgICAgIGlmICg1NTI5NiA8PSBzICYmIDU3MzQzID49IHMpIHsKICAgICAgICAgICAgdmFyIGwgPSBuLmNoYXJDb2RlQXQoKytvKTsKICAgICAgICAgICAgcyA9IDY1NTM2ICsgKChzICYgMTAyMykgPDwgMTApIHwgbCAmIDEwMjM7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAoMTI3ID49IHMpIHsKICAgICAgICAgICAgaWYgKHQgPj0gcikKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgaVt0KytdID0gczsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGlmICgyMDQ3ID49IHMpIHsKICAgICAgICAgICAgICBpZiAodCArIDEgPj0gcikKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgIGlbdCsrXSA9IDE5MiB8IHMgPj4gNjsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICBpZiAoNjU1MzUgPj0gcykgewogICAgICAgICAgICAgICAgaWYgKHQgKyAyID49IHIpCiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjI0IHwgcyA+PiAxMjsKICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgaWYgKHQgKyAzID49IHIpCiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjQwIHwgcyA+PiAxOCwgaVt0KytdID0gMTI4IHwgcyA+PiAxMiAmIDYzOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgICBpW3QrK10gPSAxMjggfCBzID4+IDYgJiA2MzsKICAgICAgICAgICAgfQogICAgICAgICAgICBpW3QrK10gPSAxMjggfCBzICYgNjM7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGlbdF0gPSAwOwogICAgICB9CiAgICB9CiAgICB2YXIgcW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0Zi0xNmxlIikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiBEdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBuID4+IDEsIGkgPSByICsgdCAvIDI7ICEociA+PSBpKSAmJiB5bltyXTsgKQogICAgICAgICsrcjsKICAgICAgaWYgKHIgPDw9IDEsIDMyIDwgciAtIG4gJiYgcW4pCiAgICAgICAgcmV0dXJuIHFuLmRlY29kZShGLnN1YmFycmF5KG4sIHIpKTsKICAgICAgZm9yIChyID0gMCwgaSA9ICIiOyA7ICkgewogICAgICAgIHZhciBvID0gUVtuICsgMiAqIHIgPj4gMV07CiAgICAgICAgaWYgKG8gPT0gMCB8fCByID09IHQgLyAyKQogICAgICAgICAgcmV0dXJuIGk7CiAgICAgICAgKytyLCBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobyk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIEJ0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCAyID4gcikKICAgICAgICByZXR1cm4gMDsKICAgICAgciAtPSAyOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSByIDwgMiAqIG4ubGVuZ3RoID8gciAvIDIgOiBuLmxlbmd0aDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCByOyArK28pCiAgICAgICAgUVt0ID4+IDFdID0gbi5jaGFyQ29kZUF0KG8pLCB0ICs9IDI7CiAgICAgIHJldHVybiBRW3QgPj4gMV0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIHp0KG4pIHsKICAgICAgcmV0dXJuIDIgKiBuLmxlbmd0aDsKICAgIH0KICAgIGZ1bmN0aW9uIFZ0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IDAsIGkgPSAiIjsgIShyID49IHQgLyA0KTsgKSB7CiAgICAgICAgdmFyIG8gPSBrW24gKyA0ICogciA+PiAyXTsKICAgICAgICBpZiAobyA9PSAwKQogICAgICAgICAgYnJlYWs7CiAgICAgICAgKytyLCA2NTUzNiA8PSBvID8gKG8gLT0gNjU1MzYsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IG8gPj4gMTAsIDU2MzIwIHwgbyAmIDEwMjMpKSA6IGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgICByZXR1cm4gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEd0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCA0ID4gcikKICAgICAgICByZXR1cm4gMDsKICAgICAgdmFyIGkgPSB0OwogICAgICByID0gaSArIHIgLSA0OwogICAgICBmb3IgKHZhciBvID0gMDsgbyA8IG4ubGVuZ3RoOyArK28pIHsKICAgICAgICB2YXIgcyA9IG4uY2hhckNvZGVBdChvKTsKICAgICAgICBpZiAoNTUyOTYgPD0gcyAmJiA1NzM0MyA+PSBzKSB7CiAgICAgICAgICB2YXIgbCA9IG4uY2hhckNvZGVBdCgrK28pOwogICAgICAgICAgcyA9IDY1NTM2ICsgKChzICYgMTAyMykgPDwgMTApIHwgbCAmIDEwMjM7CiAgICAgICAgfQogICAgICAgIGlmIChrW3QgPj4gMl0gPSBzLCB0ICs9IDQsIHQgKyA0ID4gcikKICAgICAgICAgIGJyZWFrOwogICAgICB9CiAgICAgIHJldHVybiBrW3QgPj4gMl0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIFl0KG4pIHsKICAgICAgZm9yICh2YXIgdCA9IDAsIHIgPSAwOyByIDwgbi5sZW5ndGg7ICsrcikgewogICAgICAgIHZhciBpID0gbi5jaGFyQ29kZUF0KHIpOwogICAgICAgIDU1Mjk2IDw9IGkgJiYgNTczNDMgPj0gaSAmJiArK3IsIHQgKz0gNDsKICAgICAgfQogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBLLCBZLCBGLCBRLCB5biwgaywgVSwgbnQsIHR0OwogICAgZnVuY3Rpb24gZXQobikgewogICAgICBLID0gbiwgZS5IRUFQOCA9IFkgPSBuZXcgSW50OEFycmF5KG4pLCBlLkhFQVAxNiA9IFEgPSBuZXcgSW50MTZBcnJheShuKSwgZS5IRUFQMzIgPSBrID0gbmV3IEludDMyQXJyYXkobiksIGUuSEVBUFU4ID0gRiA9IG5ldyBVaW50OEFycmF5KG4pLCBlLkhFQVBVMTYgPSB5biA9IG5ldyBVaW50MTZBcnJheShuKSwgZS5IRUFQVTMyID0gVSA9IG5ldyBVaW50MzJBcnJheShuKSwgZS5IRUFQRjMyID0gbnQgPSBuZXcgRmxvYXQzMkFycmF5KG4pLCBlLkhFQVBGNjQgPSB0dCA9IG5ldyBGbG9hdDY0QXJyYXkobik7CiAgICB9CiAgICB2YXIgcnQgPSBlLklOSVRJQUxfTUVNT1JZIHx8IDE2Nzc3MjE2OwogICAgZS53YXNtTWVtb3J5ID8gSCA9IGUud2FzbU1lbW9yeSA6IEggPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogcnQgLyA2NTUzNiwgbWF4aW11bTogMzI3NjggfSksIEggJiYgKEsgPSBILmJ1ZmZlciksIHJ0ID0gSy5ieXRlTGVuZ3RoLCBldChLKTsKICAgIHZhciBpdCA9IFtdLCBhdCA9IFtdLCBadCA9IFtdLCBvdCA9IFtdOwogICAgZnVuY3Rpb24gJHQoKSB7CiAgICAgIHZhciBuID0gZS5wcmVSdW4uc2hpZnQoKTsKICAgICAgaXQudW5zaGlmdChuKTsKICAgIH0KICAgIHZhciBaID0gMCwgb24gPSBudWxsOwogICAgZS5wcmVsb2FkZWRJbWFnZXMgPSB7fSwgZS5wcmVsb2FkZWRBdWRpb3MgPSB7fTsKICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgdGhyb3cgZS5vbkFib3J0ICYmIGUub25BYm9ydChuKSwgRShuKSwga24gPSAhMCwgbiA9IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoImFib3J0KCIgKyBuICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIiksIGcobiksIG47CiAgICB9CiAgICBmdW5jdGlvbiBSbihuKSB7CiAgICAgIHZhciB0ID0gJDsKICAgICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/IHQuc3RhcnRzV2l0aChuKSA6IHQuaW5kZXhPZihuKSA9PT0gMDsKICAgIH0KICAgIGZ1bmN0aW9uIHN0KCkgewogICAgICByZXR1cm4gUm4oImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKTsKICAgIH0KICAgIHZhciAkID0gInNhbS53YXNtIjsKICAgIGlmICghc3QoKSkgewogICAgICB2YXIgdXQgPSAkOwogICAgICAkID0gZS5sb2NhdGVGaWxlID8gZS5sb2NhdGVGaWxlKHV0LCBfKSA6IF8gKyB1dDsKICAgIH0KICAgIGZ1bmN0aW9uIGN0KCkgewogICAgICB0cnkgewogICAgICAgIGlmIChXKQogICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFcpOwogICAgICAgIGlmIChTKQogICAgICAgICAgcmV0dXJuIFMoJCk7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIHNuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBYdCgpIHsKICAgICAgcmV0dXJuIFcgfHwgIU8gJiYgIVQgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgUm4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oY3QpIDogZmV0Y2goJCwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spCiAgICAgICAgICB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArICQgKyAiJyI7CiAgICAgICAgcmV0dXJuIG4uYXJyYXlCdWZmZXIoKTsKICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7CiAgICAgICAgcmV0dXJuIGN0KCk7CiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24gcG4obikgewogICAgICBmb3IgKDsgMCA8IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4uc2hpZnQoKTsKICAgICAgICBpZiAodHlwZW9mIHQgPT0gImZ1bmN0aW9uIikKICAgICAgICAgIHQoZSk7CiAgICAgICAgZWxzZSB7CiAgICAgICAgICB2YXIgciA9IHQuQmE7CiAgICAgICAgICB0eXBlb2YgciA9PSAibnVtYmVyIiA/IHQudGEgPT09IHZvaWQgMCA/IHhuKCJ2IiwgcikoKSA6IHhuKCJ2aSIsIHIpKHQudGEpIDogcih0LnRhID09PSB2b2lkIDAgPyBudWxsIDogdC50YSk7CiAgICAgICAgfQogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiB4bihuLCB0KSB7CiAgICAgIHZhciByID0gW107CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICByLmxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7CiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspCiAgICAgICAgICByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gSnQobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIGtbdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIGtbdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAga1t0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICBZW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICBZW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIG1uKCkgewogICAgICByZXR1cm4gMCA8IG1uLnhhOwogICAgfQogICAgZnVuY3Rpb24gRm4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIGx0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gUihuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgRltuXTsgKQogICAgICAgIHQgKz0gbHRbRltuKytdXTsKICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICB2YXIgcSA9IHt9LCBYID0ge30sIHZuID0ge307CiAgICBmdW5jdGlvbiBJbihuKSB7CiAgICAgIGlmIChuID09PSB2b2lkIDApCiAgICAgICAgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIGpuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBJbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gTG4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gam4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIG5uID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBubihuKTsKICAgIH0KICAgIHZhciBmdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIGduKG4pIHsKICAgICAgdGhyb3cgbmV3IGZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gdG4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGMpIHsKICAgICAgICBjID0gcihjKSwgYy5sZW5ndGggIT09IG4ubGVuZ3RoICYmIGduKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBuLmxlbmd0aDsgKyt5KQogICAgICAgICAgRChuW3ldLCBjW3ldKTsKICAgICAgfQogICAgICBuLmZvckVhY2goZnVuY3Rpb24oYykgewogICAgICAgIHZuW2NdID0gdDsKICAgICAgfSk7CiAgICAgIHZhciBvID0gQXJyYXkodC5sZW5ndGgpLCBzID0gW10sIGwgPSAwOwogICAgICB0LmZvckVhY2goZnVuY3Rpb24oYywgeSkgewogICAgICAgIFguaGFzT3duUHJvcGVydHkoYykgPyBvW3ldID0gWFtjXSA6IChzLnB1c2goYyksIHEuaGFzT3duUHJvcGVydHkoYykgfHwgKHFbY10gPSBbXSksIHFbY10ucHVzaChmdW5jdGlvbigpIHsKICAgICAgICAgIG9beV0gPSBYW2NdLCArK2wsIGwgPT09IHMubGVuZ3RoICYmIGkobyk7CiAgICAgICAgfSkpOwogICAgICB9KSwgcy5sZW5ndGggPT09IDAgJiYgaShvKTsKICAgIH0KICAgIGZ1bmN0aW9uIEQobiwgdCwgcikgewogICAgICBpZiAociA9IHIgfHwge30sICEoImFyZ1BhY2tBZHZhbmNlIiBpbiB0KSkKICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgWC5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKQogICAgICAgICAgcmV0dXJuOwogICAgICAgIHYoIkNhbm5vdCByZWdpc3RlciB0eXBlICciICsgaSArICInIHR3aWNlIik7CiAgICAgIH0KICAgICAgWFtuXSA9IHQsIGRlbGV0ZSB2bltuXSwgcS5oYXNPd25Qcm9wZXJ0eShuKSAmJiAodCA9IHFbbl0sIGRlbGV0ZSBxW25dLCB0LmZvckVhY2goZnVuY3Rpb24obykgewogICAgICAgIG8oKTsKICAgICAgfSkpOwogICAgfQogICAgZnVuY3Rpb24gS3QobikgewogICAgICByZXR1cm4geyBjb3VudDogbi5jb3VudCwgb2E6IG4ub2EsIHBhOiBuLnBhLCBkYTogbi5kYSwgZmE6IG4uZmEsIGdhOiBuLmdhLCBoYTogbi5oYSB9OwogICAgfQogICAgZnVuY3Rpb24gTm4obikgewogICAgICB2KG4uQS5mYS5lYS5uYW1lICsgIiBpbnN0YW5jZSBhbHJlYWR5IGRlbGV0ZWQiKTsKICAgIH0KICAgIHZhciBIbiA9ICExOwogICAgZnVuY3Rpb24gZHQoKSB7CiAgICB9CiAgICBmdW5jdGlvbiBodChuKSB7CiAgICAgIC0tbi5jb3VudC52YWx1ZSwgbi5jb3VudC52YWx1ZSA9PT0gMCAmJiAobi5nYSA/IG4uaGEubmEobi5nYSkgOiBuLmZhLmVhLm5hKG4uZGEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIHVuKG4pIHsKICAgICAgcmV0dXJuIHR5cGVvZiBGaW5hbGl6YXRpb25Hcm91cCA+ICJ1IiA/ICh1biA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICByZXR1cm4gdDsKICAgICAgfSwgbikgOiAoSG4gPSBuZXcgRmluYWxpemF0aW9uR3JvdXAoZnVuY3Rpb24odCkgewogICAgICAgIGZvciAodmFyIHIgPSB0Lm5leHQoKTsgIXIuZG9uZTsgciA9IHQubmV4dCgpKQogICAgICAgICAgciA9IHIudmFsdWUsIHIuZGEgPyBodChyKSA6IGNvbnNvbGUud2Fybigib2JqZWN0IGFscmVhZHkgZGVsZXRlZDogIiArIHIuZGEpOwogICAgICB9KSwgdW4gPSBmdW5jdGlvbih0KSB7CiAgICAgICAgcmV0dXJuIEhuLnJlZ2lzdGVyKHQsIHQuQSwgdC5BKSwgdDsKICAgICAgfSwgZHQgPSBmdW5jdGlvbih0KSB7CiAgICAgICAgSG4udW5yZWdpc3Rlcih0LkEpOwogICAgICB9LCB1bihuKSk7CiAgICB9CiAgICB2YXIgY24gPSB2b2lkIDAsIGxuID0gW107CiAgICBmdW5jdGlvbiBVbigpIHsKICAgICAgZm9yICg7IGxuLmxlbmd0aDsgKSB7CiAgICAgICAgdmFyIG4gPSBsbi5wb3AoKTsKICAgICAgICBuLkEub2EgPSAhMSwgbi5kZWxldGUoKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gVigpIHsKICAgIH0KICAgIHZhciB5dCA9IHt9OwogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICB2YXIgciA9IGU7CiAgICAgIGlmIChyW25dLmphID09PSB2b2lkIDApIHsKICAgICAgICB2YXIgaSA9IHJbbl07CiAgICAgICAgcltuXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgcmV0dXJuIHJbbl0uamEuaGFzT3duUHJvcGVydHkoYXJndW1lbnRzLmxlbmd0aCkgfHwgdigiRnVuY3Rpb24gJyIgKyB0ICsgIicgY2FsbGVkIHdpdGggYW4gaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0cyBvbmUgb2YgKCIgKyByW25dLmphICsgIikhIiksIHJbbl0uamFbYXJndW1lbnRzLmxlbmd0aF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9LCByW25dLmphID0gW10sIHJbbl0uamFbaS55YV0gPSBpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBwdChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgPyAoKHIgPT09IHZvaWQgMCB8fCBlW25dLmphICE9PSB2b2lkIDAgJiYgZVtuXS5qYVtyXSAhPT0gdm9pZCAwKSAmJiB2KCJDYW5ub3QgcmVnaXN0ZXIgcHVibGljIG5hbWUgJyIgKyBuICsgIicgdHdpY2UiKSwgUXQobiwgbiksIGUuaGFzT3duUHJvcGVydHkocikgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIG92ZXJsb2FkcyBvZiBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIHIgKyAiKSEiKSwgZVtuXS5qYVtyXSA9IHQpIDogKGVbbl0gPSB0LCByICE9PSB2b2lkIDAgJiYgKGVbbl0uUmEgPSByKSk7CiAgICB9CiAgICBmdW5jdGlvbiBxdChuLCB0LCByLCBpLCBvLCBzLCBsLCBjKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuY29uc3RydWN0b3IgPSB0LCB0aGlzLm1hID0gciwgdGhpcy5uYSA9IGksIHRoaXMuaWEgPSBvLCB0aGlzLkNhID0gcywgdGhpcy5xYSA9IGwsIHRoaXMuQWEgPSBjOwogICAgfQogICAgZnVuY3Rpb24gd24obiwgdCwgcikgewogICAgICBmb3IgKDsgdCAhPT0gcjsgKQogICAgICAgIHQucWEgfHwgdigiRXhwZWN0ZWQgbnVsbCBvciBpbnN0YW5jZSBvZiAiICsgci5uYW1lICsgIiwgZ290IGFuIGluc3RhbmNlIG9mICIgKyB0Lm5hbWUpLCBuID0gdC5xYShuKSwgdCA9IHQuaWE7CiAgICAgIHJldHVybiBuOwogICAgfQogICAgZnVuY3Rpb24gbmUobiwgdCkgewogICAgICByZXR1cm4gdCA9PT0gbnVsbCA/ICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIDApIDogKHQuQSB8fCB2KCdDYW5ub3QgcGFzcyAiJyArIHJuKHQpICsgJyIgYXMgYSAnICsgdGhpcy5uYW1lKSwgdC5BLmRhIHx8IHYoIkNhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICIgKyB0aGlzLm5hbWUpLCB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSkpOwogICAgfQogICAgZnVuY3Rpb24gdGUobiwgdCkgewogICAgICBpZiAodCA9PT0gbnVsbCkgewogICAgICAgIGlmICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIHRoaXMuc2EpIHsKICAgICAgICAgIHZhciByID0gdGhpcy5IYSgpOwogICAgICAgICAgcmV0dXJuIG4gIT09IG51bGwgJiYgbi5wdXNoKHRoaXMubmEsIHIpLCByOwogICAgICAgIH0KICAgICAgICByZXR1cm4gMDsKICAgICAgfQogICAgICBpZiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksICF0aGlzLnJhICYmIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpLCByID0gd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpLCB0aGlzLnNhKQogICAgICAgIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICB0LkEuaGEgPT09IHRoaXMgPyByID0gdC5BLmdhIDogdigiQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAiICsgKHQuQS5oYSA/IHQuQS5oYS5uYW1lIDogdC5BLmZhLm5hbWUpICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlIDE6CiAgICAgICAgICAgIHIgPSB0LkEuZ2E7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAyOgogICAgICAgICAgICBpZiAodC5BLmhhID09PSB0aGlzKQogICAgICAgICAgICAgIHIgPSB0LkEuZ2E7CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgIHZhciBpID0gdC5jbG9uZSgpOwogICAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIGVuKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgICAgaS5kZWxldGUoKTsKICAgICAgICAgICAgICB9KSksIG4gIT09IG51bGwgJiYgbi5wdXNoKHRoaXMubmEsIHIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgICAgfQogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIGVlKG4sIHQpIHsKICAgICAgcmV0dXJuIHQgPT09IG51bGwgPyAodGhpcy51YSAmJiB2KCJudWxsIGlzIG5vdCBhIHZhbGlkICIgKyB0aGlzLm5hbWUpLCAwKSA6ICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArIHQuQS5mYS5uYW1lICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKSwgd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKG4pIHsKICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKFVbbiA+PiAyXSk7CiAgICB9CiAgICBmdW5jdGlvbiBtdChuLCB0LCByKSB7CiAgICAgIHJldHVybiB0ID09PSByID8gbiA6IHIuaWEgPT09IHZvaWQgMCA/IG51bGwgOiAobiA9IG10KG4sIHQsIHIuaWEpLCBuID09PSBudWxsID8gbnVsbCA6IHIuQWEobikpOwogICAgfQogICAgdmFyIGZuID0ge307CiAgICBmdW5jdGlvbiByZShuLCB0KSB7CiAgICAgIGZvciAodCA9PT0gdm9pZCAwICYmIHYoInB0ciBzaG91bGQgbm90IGJlIHVuZGVmaW5lZCIpOyBuLmlhOyApCiAgICAgICAgdCA9IG4ucWEodCksIG4gPSBuLmlhOwogICAgICByZXR1cm4gZm5bdF07CiAgICB9CiAgICBmdW5jdGlvbiBfbihuLCB0KSB7CiAgICAgIHJldHVybiB0LmZhICYmIHQuZGEgfHwgZ24oIm1ha2VDbGFzc0hhbmRsZSByZXF1aXJlcyBwdHIgYW5kIHB0clR5cGUiKSwgISF0LmhhICE9ICEhdC5nYSAmJiBnbigiQm90aCBzbWFydFB0clR5cGUgYW5kIHNtYXJ0UHRyIG11c3QgYmUgc3BlY2lmaWVkIiksIHQuY291bnQgPSB7IHZhbHVlOiAxIH0sIHVuKE9iamVjdC5jcmVhdGUobiwgeyBBOiB7IHZhbHVlOiB0IH0gfSkpOwogICAgfQogICAgZnVuY3Rpb24gQihuLCB0LCByLCBpKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuZWEgPSB0LCB0aGlzLnVhID0gciwgdGhpcy5yYSA9IGksIHRoaXMuc2EgPSAhMSwgdGhpcy5uYSA9IHRoaXMuSWEgPSB0aGlzLkhhID0gdGhpcy53YSA9IHRoaXMuUGEgPSB0aGlzLkdhID0gdm9pZCAwLCB0LmlhICE9PSB2b2lkIDAgPyB0aGlzLnRvV2lyZVR5cGUgPSB0ZSA6ICh0aGlzLnRvV2lyZVR5cGUgPSBpID8gbmUgOiBlZSwgdGhpcy5rYSA9IG51bGwpOwogICAgfQogICAgZnVuY3Rpb24gdnQobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pIHx8IGduKCJSZXBsYWNpbmcgbm9uZXhpc3RhbnQgcHVibGljIHN5bWJvbCIpLCBlW25dLmphICE9PSB2b2lkIDAgJiYgciAhPT0gdm9pZCAwID8gZVtuXS5qYVtyXSA9IHQgOiAoZVtuXSA9IHQsIGVbbl0ueWEgPSByKTsKICAgIH0KICAgIGZ1bmN0aW9uIEcobiwgdCkgewogICAgICBuID0gUihuKTsKICAgICAgdmFyIHIgPSB4bihuLCB0KTsKICAgICAgcmV0dXJuIHR5cGVvZiByICE9ICJmdW5jdGlvbiIgJiYgdigidW5rbm93biBmdW5jdGlvbiBwb2ludGVyIHdpdGggc2lnbmF0dXJlICIgKyBuICsgIjogIiArIHQpLCByOwogICAgfQogICAgdmFyIGd0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gd3QobikgewogICAgICBuID0gV3Qobik7CiAgICAgIHZhciB0ID0gUihuKTsKICAgICAgcmV0dXJuIHoobiksIHQ7CiAgICB9CiAgICBmdW5jdGlvbiBkbihuLCB0KSB7CiAgICAgIGZ1bmN0aW9uIHIocykgewogICAgICAgIG9bc10gfHwgWFtzXSB8fCAodm5bc10gPyB2bltzXS5mb3JFYWNoKHIpIDogKGkucHVzaChzKSwgb1tzXSA9ICEwKSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSBbXSwgbyA9IHt9OwogICAgICB0aHJvdyB0LmZvckVhY2gociksIG5ldyBndChuICsgIjogIiArIGkubWFwKHd0KS5qb2luKFsiLCAiXSkpOwogICAgfQogICAgZnVuY3Rpb24gQXQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gW10sIGkgPSAwOyBpIDwgbjsgaSsrKQogICAgICAgIHIucHVzaChrWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIHduKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBEbiA9IFtdLCBqID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIEJuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1qW25dLkphID09PSAwICYmIChqW25dID0gdm9pZCAwLCBEbi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIGVuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IERuLmxlbmd0aCA/IERuLnBvcCgpIDogai5sZW5ndGg7CiAgICAgICAgICByZXR1cm4galt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHJuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpCiAgICAgICAgcmV0dXJuICJudWxsIjsKICAgICAgdmFyIHQgPSB0eXBlb2YgbjsKICAgICAgcmV0dXJuIHQgPT09ICJvYmplY3QiIHx8IHQgPT09ICJhcnJheSIgfHwgdCA9PT0gImZ1bmN0aW9uIiA/IG4udG9TdHJpbmcoKSA6ICIiICsgbjsKICAgIH0KICAgIGZ1bmN0aW9uIGllKG4sIHQpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKG50W3IgPj4gMl0pOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDM6CiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocikgewogICAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUodHRbciA+PiAzXSk7CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGZsb2F0IHR5cGU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gYWUobikgewogICAgICB2YXIgdCA9IEZ1bmN0aW9uOwogICAgICBpZiAoISh0IGluc3RhbmNlb2YgRnVuY3Rpb24pKQogICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIm5ld18gY2FsbGVkIHdpdGggY29uc3RydWN0b3IgdHlwZSAiICsgdHlwZW9mIHQgKyAiIHdoaWNoIGlzIG5vdCBhIGZ1bmN0aW9uIik7CiAgICAgIHZhciByID0gam4odC5uYW1lIHx8ICJ1bmtub3duRnVuY3Rpb25OYW1lIiwgZnVuY3Rpb24oKSB7CiAgICAgIH0pOwogICAgICByZXR1cm4gci5wcm90b3R5cGUgPSB0LnByb3RvdHlwZSwgciA9IG5ldyByKCksIG4gPSB0LmFwcGx5KHIsIG4pLCBuIGluc3RhbmNlb2YgT2JqZWN0ID8gbiA6IHI7CiAgICB9CiAgICBmdW5jdGlvbiBvZShuLCB0LCByKSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gWVtpXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBGW2ldOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFFbaSA+PiAxXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiB5bltpID4+IDFdOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIGtbaSA+PiAyXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBVW2kgPj4gMl07CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGludGVnZXIgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiB6bihuKSB7CiAgICAgIHJldHVybiBuIHx8IHYoIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9ICIgKyBuKSwgaltuXS52YWx1ZTsKICAgIH0KICAgIGZ1bmN0aW9uIEN0KG4sIHQpIHsKICAgICAgdmFyIHIgPSBYW25dOwogICAgICByZXR1cm4gciA9PT0gdm9pZCAwICYmIHYodCArICIgaGFzIHVua25vd24gdHlwZSAiICsgd3QobikpLCByOwogICAgfQogICAgdmFyIHNlID0ge30sIFR0ID0ge307CiAgICBmdW5jdGlvbiBFdCgpIHsKICAgICAgaWYgKCFWbikgewogICAgICAgIHZhciBuID0geyBVU0VSOiAid2ViX3VzZXIiLCBMT0dOQU1FOiAid2ViX3VzZXIiLCBQQVRIOiAiLyIsIFBXRDogIi8iLCBIT01FOiAiL2hvbWUvd2ViX3VzZXIiLCBMQU5HOiAodHlwZW9mIG5hdmlnYXRvciA9PSAib2JqZWN0IiAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gfHwgIkMiKS5yZXBsYWNlKCItIiwgIl8iKSArICIuVVRGLTgiLCBfOiBNIHx8ICIuL3RoaXMucHJvZ3JhbSIgfSwgdDsKICAgICAgICBmb3IgKHQgaW4gVHQpCiAgICAgICAgICBuW3RdID0gVHRbdF07CiAgICAgICAgdmFyIHIgPSBbXTsKICAgICAgICBmb3IgKHQgaW4gbikKICAgICAgICAgIHIucHVzaCh0ICsgIj0iICsgblt0XSk7CiAgICAgICAgVm4gPSByOwogICAgICB9CiAgICAgIHJldHVybiBWbjsKICAgIH0KICAgIHZhciBWbiwgUHQgPSBbXTsKICAgIGZ1bmN0aW9uIE10KG4pIHsKICAgICAgdmFyIHQgPSB7fSwgcjsKICAgICAgZm9yIChyIGluIG4pCiAgICAgICAgKGZ1bmN0aW9uKGkpIHsKICAgICAgICAgIHZhciBvID0gbltpXTsKICAgICAgICAgIHRbaV0gPSB0eXBlb2YgbyA9PSAiZnVuY3Rpb24iID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIFB0LnB1c2goaSk7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgcmV0dXJuIG8uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgICAgICAgICAgfSBmaW5hbGx5IHsKICAgICAgICAgICAgICBpZiAoa24pCiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgICAgdmFyIHMgPSBQdC5wb3AoKTsKICAgICAgICAgICAgICBLbihzID09PSBpKTsKICAgICAgICAgICAgfQogICAgICAgICAgfSA6IG87CiAgICAgICAgfSkocik7CiAgICAgIHJldHVybiB0OwogICAgfQogICAgZm9yICh2YXIgT3QgPSBBcnJheSgyNTYpLCBUbiA9IDA7IDI1NiA+IFRuOyArK1RuKQogICAgICBPdFtUbl0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFRuKTsKICAgIGx0ID0gT3QsIG5uID0gZS5CaW5kaW5nRXJyb3IgPSBMbigiQmluZGluZ0Vycm9yIiksIGZ0ID0gZS5JbnRlcm5hbEVycm9yID0gTG4oIkludGVybmFsRXJyb3IiKSwgVi5wcm90b3R5cGUuaXNBbGlhc09mID0gZnVuY3Rpb24obikgewogICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgViAmJiBuIGluc3RhbmNlb2YgVikpCiAgICAgICAgcmV0dXJuICExOwogICAgICB2YXIgdCA9IHRoaXMuQS5mYS5lYSwgciA9IHRoaXMuQS5kYSwgaSA9IG4uQS5mYS5lYTsKICAgICAgZm9yIChuID0gbi5BLmRhOyB0LmlhOyApCiAgICAgICAgciA9IHQucWEociksIHQgPSB0LmlhOwogICAgICBmb3IgKDsgaS5pYTsgKQogICAgICAgIG4gPSBpLnFhKG4pLCBpID0gaS5pYTsKICAgICAgcmV0dXJuIHQgPT09IGkgJiYgciA9PT0gbjsKICAgIH0sIFYucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7CiAgICAgIGlmICh0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5wYSkKICAgICAgICByZXR1cm4gdGhpcy5BLmNvdW50LnZhbHVlICs9IDEsIHRoaXM7CiAgICAgIHZhciBuID0gdW4oT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyksIHsgQTogeyB2YWx1ZTogS3QodGhpcy5BKSB9IH0pKTsKICAgICAgcmV0dXJuIG4uQS5jb3VudC52YWx1ZSArPSAxLCBuLkEub2EgPSAhMSwgbjsKICAgIH0sIFYucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKCkgewogICAgICB0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgZHQodGhpcyksIGh0KHRoaXMuQSksIHRoaXMuQS5wYSB8fCAodGhpcy5BLmdhID0gdm9pZCAwLCB0aGlzLkEuZGEgPSB2b2lkIDApOwogICAgfSwgVi5wcm90b3R5cGUuaXNEZWxldGVkID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAhdGhpcy5BLmRhOwogICAgfSwgVi5wcm90b3R5cGUuZGVsZXRlTGF0ZXIgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIHRoaXMuQS5kYSB8fCBObih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBsbi5wdXNoKHRoaXMpLCBsbi5sZW5ndGggPT09IDEgJiYgY24gJiYgY24oVW4pLCB0aGlzLkEub2EgPSAhMCwgdGhpczsKICAgIH0sIEIucHJvdG90eXBlLkRhID0gZnVuY3Rpb24obikgewogICAgICByZXR1cm4gdGhpcy53YSAmJiAobiA9IHRoaXMud2EobikpLCBuOwogICAgfSwgQi5wcm90b3R5cGUudmEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHRoaXMubmEgJiYgdGhpcy5uYShuKTsKICAgIH0sIEIucHJvdG90eXBlLmFyZ1BhY2tBZHZhbmNlID0gOCwgQi5wcm90b3R5cGUucmVhZFZhbHVlRnJvbVBvaW50ZXIgPSBBbiwgQi5wcm90b3R5cGUuZGVsZXRlT2JqZWN0ID0gZnVuY3Rpb24obikgewogICAgICBuICE9PSBudWxsICYmIG4uZGVsZXRlKCk7CiAgICB9LCBCLnByb3RvdHlwZS5mcm9tV2lyZVR5cGUgPSBmdW5jdGlvbihuKSB7CiAgICAgIGZ1bmN0aW9uIHQoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuc2EgPyBfbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLkdhLCBkYTogciwgaGE6IHRoaXMsIGdhOiBuIH0pIDogX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcywgZGE6IG4gfSk7CiAgICAgIH0KICAgICAgdmFyIHIgPSB0aGlzLkRhKG4pOwogICAgICBpZiAoIXIpCiAgICAgICAgcmV0dXJuIHRoaXMudmEobiksIG51bGw7CiAgICAgIHZhciBpID0gcmUodGhpcy5lYSwgcik7CiAgICAgIGlmIChpICE9PSB2b2lkIDApCiAgICAgICAgcmV0dXJuIGkuQS5jb3VudC52YWx1ZSA9PT0gMCA/IChpLkEuZGEgPSByLCBpLkEuZ2EgPSBuLCBpLmNsb25lKCkpIDogKGkgPSBpLmNsb25lKCksIHRoaXMudmEobiksIGkpOwogICAgICBpZiAoaSA9IHRoaXMuZWEuQ2EociksIGkgPSB5dFtpXSwgIWkpCiAgICAgICAgcmV0dXJuIHQuY2FsbCh0aGlzKTsKICAgICAgaSA9IHRoaXMucmEgPyBpLnphIDogaS5wb2ludGVyVHlwZTsKICAgICAgdmFyIG8gPSBtdChyLCB0aGlzLmVhLCBpLmVhKTsKICAgICAgcmV0dXJuIG8gPT09IG51bGwgPyB0LmNhbGwodGhpcykgOiB0aGlzLnNhID8gX24oaS5lYS5tYSwgeyBmYTogaSwgZGE6IG8sIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKAogICAgICAgIGkuZWEubWEsCiAgICAgICAgeyBmYTogaSwgZGE6IG8gfQogICAgICApOwogICAgfSwgZS5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmbikubGVuZ3RoOwogICAgfSwgZS5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gZnVuY3Rpb24oKSB7CiAgICAgIHZhciBuID0gW10sIHQ7CiAgICAgIGZvciAodCBpbiBmbikKICAgICAgICBmbi5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBuLnB1c2goZm5bdF0pOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZmx1c2hQZW5kaW5nRGVsZXRlcyA9IFVuLCBlLnNldERlbGF5RnVuY3Rpb24gPSBmdW5jdGlvbihuKSB7CiAgICAgIGNuID0gbiwgbG4ubGVuZ3RoICYmIGNuICYmIGNuKFVuKTsKICAgIH0sIGd0ID0gZS5VbmJvdW5kVHlwZUVycm9yID0gTG4oIlVuYm91bmRUeXBlRXJyb3IiKSwgZS5jb3VudF9lbXZhbF9oYW5kbGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSAwLCB0ID0gNTsgdCA8IGoubGVuZ3RoOyArK3QpCiAgICAgICAgalt0XSAhPT0gdm9pZCAwICYmICsrbjsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmdldF9maXJzdF9lbXZhbCA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gNTsgbiA8IGoubGVuZ3RoOyArK24pCiAgICAgICAgaWYgKGpbbl0gIT09IHZvaWQgMCkKICAgICAgICAgIHJldHVybiBqW25dOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0sIGF0LnB1c2goeyBCYTogZnVuY3Rpb24oKSB7CiAgICAgIFN0KCk7CiAgICB9IH0pOwogICAgdmFyIHVlID0gewogICAgICB6OiBmdW5jdGlvbihuKSB7CiAgICAgICAgcmV0dXJuIEVuKG4gKyAxNikgKyAxNjsKICAgICAgfSwKICAgICAgdTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHRocm93IG5ldyBKdChuKS5GYSh0LCByKSwgInVuY2F1Z2h0X2V4Y2VwdGlvbiIgaW4gbW4gPyBtbi54YSsrIDogbW4ueGEgPSAxLCBuOwogICAgICB9LAogICAgICB3OiBmdW5jdGlvbihuLCB0LCByLCBpLCBvKSB7CiAgICAgICAgdmFyIHMgPSBGbihyKTsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24obCkgewogICAgICAgICAgcmV0dXJuICEhbDsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihsLCBjKSB7CiAgICAgICAgICByZXR1cm4gYyA/IGkgOiBvOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24obCkgewogICAgICAgICAgaWYgKHIgPT09IDEpCiAgICAgICAgICAgIHZhciBjID0gWTsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDIpCiAgICAgICAgICAgIGMgPSBROwogICAgICAgICAgZWxzZSBpZiAociA9PT0gNCkKICAgICAgICAgICAgYyA9IGs7CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gYm9vbGVhbiB0eXBlIHNpemU6ICIgKyB0KTsKICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShjW2wgPj4gc10pOwogICAgICAgIH0sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBoOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvLCBzLCBsLCBjLCB5LCBmLCBkLCBoLCB3KSB7CiAgICAgICAgZCA9IFIoZCksIHMgPSBHKG8sIHMpLCBjICYmIChjID0gRyhsLCBjKSksIGYgJiYgKGYgPSBHKHksIGYpKSwgdyA9IEcoaCwgdyk7CiAgICAgICAgdmFyIFAgPSBJbihkKTsKICAgICAgICBwdChQLCBmdW5jdGlvbigpIHsKICAgICAgICAgIGRuKCJDYW5ub3QgY29uc3RydWN0ICIgKyBkICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtpXSk7CiAgICAgICAgfSksIHRuKFtuLCB0LCByXSwgaSA/IFtpXSA6IFtdLCBmdW5jdGlvbihwKSB7CiAgICAgICAgICBpZiAocCA9IHBbMF0sIGkpCiAgICAgICAgICAgIHZhciBOID0gcC5lYSwgYiA9IE4ubWE7CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIGIgPSBWLnByb3RvdHlwZTsKICAgICAgICAgIHAgPSBqbihQLCBmdW5jdGlvbigpIHsKICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSAhPT0geCkKICAgICAgICAgICAgICB0aHJvdyBuZXcgbm4oIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgIiArIGQpOwogICAgICAgICAgICBpZiAoTC5sYSA9PT0gdm9pZCAwKQogICAgICAgICAgICAgIHRocm93IG5ldyBubihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIgYnQgPSBMLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoYnQgPT09IHZvaWQgMCkKICAgICAgICAgICAgICB0aHJvdyBuZXcgbm4oIlRyaWVkIHRvIGludm9rZSBjdG9yIG9mICIgKyBkICsgIiB3aXRoIGludmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCIgKyBhcmd1bWVudHMubGVuZ3RoICsgIikgLSBleHBlY3RlZCAoIiArIE9iamVjdC5rZXlzKEwubGEpLnRvU3RyaW5nKCkgKyAiKSBwYXJhbWV0ZXJzIGluc3RlYWQhIik7CiAgICAgICAgICAgIHJldHVybiBidC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgfSk7CiAgICAgICAgICB2YXIgeCA9IE9iamVjdC5jcmVhdGUoYiwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogcCB9IH0pOwogICAgICAgICAgcC5wcm90b3R5cGUgPSB4OwogICAgICAgICAgdmFyIEwgPSBuZXcgcXQoZCwgcCwgeCwgdywgTiwgcywgYywgZik7CiAgICAgICAgICBOID0gbmV3IEIoZCwgTCwgITAsICExKSwgYiA9IG5ldyBCKGQgKyAiKiIsIEwsICExLCAhMSk7CiAgICAgICAgICB2YXIgaG4gPSBuZXcgQihkICsgIiBjb25zdCoiLCBMLCAhMSwgITApOwogICAgICAgICAgcmV0dXJuIHl0W25dID0geyBwb2ludGVyVHlwZTogYiwgemE6IGhuIH0sIHZ0KFAsIHApLCBbTiwgYiwgaG5dOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBnOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvLCBzKSB7CiAgICAgICAgS24oMCA8IHQpOwogICAgICAgIHZhciBsID0gQXQodCwgcik7CiAgICAgICAgbyA9IEcoaSwgbyk7CiAgICAgICAgdmFyIGMgPSBbc10sIHkgPSBbXTsKICAgICAgICB0bihbXSwgW25dLCBmdW5jdGlvbihmKSB7CiAgICAgICAgICBmID0gZlswXTsKICAgICAgICAgIHZhciBkID0gImNvbnN0cnVjdG9yICIgKyBmLm5hbWU7CiAgICAgICAgICBpZiAoZi5lYS5sYSA9PT0gdm9pZCAwICYmIChmLmVhLmxhID0gW10pLCBmLmVhLmxhW3QgLSAxXSAhPT0gdm9pZCAwKQogICAgICAgICAgICB0aHJvdyBuZXcgbm4oIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBjb25zdHJ1Y3RvcnMgd2l0aCBpZGVudGljYWwgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCIgKyAodCAtIDEpICsgIikgZm9yIGNsYXNzICciICsgZi5uYW1lICsgIichIE92ZXJsb2FkIHJlc29sdXRpb24gaXMgY3VycmVudGx5IG9ubHkgcGVyZm9ybWVkIHVzaW5nIHRoZSBwYXJhbWV0ZXIgY291bnQsIG5vdCBhY3R1YWwgdHlwZSBpbmZvISIpOwogICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgY29uc3RydWN0ICIgKyBmLm5hbWUgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgbCk7CiAgICAgICAgICB9LCB0bihbXSwgbCwgZnVuY3Rpb24oaCkgewogICAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoICE9PSB0IC0gMSAmJiB2KGQgKyAiIGNhbGxlZCB3aXRoICIgKyBhcmd1bWVudHMubGVuZ3RoICsgIiBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAodCAtIDEpKSwgeS5sZW5ndGggPSAwLCBjLmxlbmd0aCA9IHQ7CiAgICAgICAgICAgICAgZm9yICh2YXIgdyA9IDE7IHcgPCB0OyArK3cpCiAgICAgICAgICAgICAgICBjW3ddID0gaFt3XS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgICB5LAogICAgICAgICAgICAgICAgICBhcmd1bWVudHNbdyAtIDFdCiAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiB3ID0gby5hcHBseShudWxsLCBjKSwgQ24oeSksIGhbMF0uZnJvbVdpcmVUeXBlKHcpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgbywgcywgbCwgYywgeSwgZikgewogICAgICAgIHQgPSBSKHQpLCBvID0gRyhpLCBvKSwgdG4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgaCA9IGQubmFtZSArICIuIiArIHQsIHcgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgYWNjZXNzICIgKyBoICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBsXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHkgPyB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgbF0pOwogICAgICAgICAgfSA6IHcuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYoaCArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCB3KSwgdG4oW10sIHkgPyBbciwgbF0gOiBbcl0sIGZ1bmN0aW9uKFApIHsKICAgICAgICAgICAgdmFyIHAgPSBQWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciB4ID0gX3QodGhpcywgZCwgaCArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIHAuZnJvbVdpcmVUeXBlKG8ocywgeCkpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAoeSkgewogICAgICAgICAgICAgIHkgPSBHKGMsIHkpOwogICAgICAgICAgICAgIHZhciBiID0gUFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKHgpIHsKICAgICAgICAgICAgICAgIHZhciBMID0gX3QodGhpcywgZCwgaCArICIgc2V0dGVyIiksIGhuID0gW107CiAgICAgICAgICAgICAgICB5KGYsIEwsIGIudG9XaXJlVHlwZShobiwgeCkpLCBDbihobik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBSKHQpLCBEKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IGpbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gQm4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIGVuKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IEZuKHIpLCB0ID0gUih0KSwgRChuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIG8pIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBvICE9ICJudW1iZXIiICYmIHR5cGVvZiBvICE9ICJib29sZWFuIikKICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCAiJyArIHJuKG8pICsgJyIgdG8gJyArIHRoaXMubmFtZSk7CiAgICAgICAgICAgIHJldHVybiBvOwogICAgICAgICAgfSwKICAgICAgICAgIGFyZ1BhY2tBZHZhbmNlOiA4LAogICAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGllKHQsIHIpLAogICAgICAgICAga2E6IG51bGwKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYzogZnVuY3Rpb24obiwgdCwgciwgaSwgbywgcykgewogICAgICAgIHZhciBsID0gQXQodCwgcik7CiAgICAgICAgbiA9IFIobiksIG8gPSBHKGksIG8pLCBwdChuLCBmdW5jdGlvbigpIHsKICAgICAgICAgIGRuKCJDYW5ub3QgY2FsbCAiICsgbiArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBsKTsKICAgICAgICB9LCB0IC0gMSksIHRuKFtdLCBsLCBmdW5jdGlvbihjKSB7CiAgICAgICAgICB2YXIgeSA9IG4sIGYgPSBuOwogICAgICAgICAgYyA9IFtjWzBdLCBudWxsXS5jb25jYXQoYy5zbGljZSgxKSk7CiAgICAgICAgICB2YXIgZCA9IG8sIGggPSBjLmxlbmd0aDsKICAgICAgICAgIDIgPiBoICYmIHYoImFyZ1R5cGVzIGFycmF5IHNpemUgbWlzbWF0Y2ghIE11c3QgYXQgbGVhc3QgZ2V0IHJldHVybiB2YWx1ZSBhbmQgJ3RoaXMnIHR5cGVzISIpOwogICAgICAgICAgZm9yICh2YXIgdyA9IGNbMV0gIT09IG51bGwgJiYgITEsIFAgPSAhMSwgcCA9IDE7IHAgPCBjLmxlbmd0aDsgKytwKQogICAgICAgICAgICBpZiAoY1twXSAhPT0gbnVsbCAmJiBjW3BdLmthID09PSB2b2lkIDApIHsKICAgICAgICAgICAgICBQID0gITA7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICAgIHZhciBOID0gY1swXS5uYW1lICE9PSAidm9pZCIsIGIgPSAiIiwgeCA9ICIiOwogICAgICAgICAgZm9yIChwID0gMDsgcCA8IGggLSAyOyArK3ApCiAgICAgICAgICAgIGIgKz0gKHAgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyBwLCB4ICs9IChwICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgcCArICJXaXJlZCI7CiAgICAgICAgICBmID0gInJldHVybiBmdW5jdGlvbiAiICsgSW4oZikgKyAiKCIgKyBiICsgYCkgewppZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gYCArIChoIC0gMikgKyBgKSB7CnRocm93QmluZGluZ0Vycm9yKCdmdW5jdGlvbiBgICsgZiArICIgY2FsbGVkIHdpdGggJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArIChoIC0gMikgKyBgIGFyZ3MhJyk7Cn0KYCwgUCAmJiAoZiArPSBgdmFyIGRlc3RydWN0b3JzID0gW107CmApOwogICAgICAgICAgdmFyIEwgPSBQID8gImRlc3RydWN0b3JzIiA6ICJudWxsIjsKICAgICAgICAgIGZvciAoYiA9ICJ0aHJvd0JpbmRpbmdFcnJvciBpbnZva2VyIGZuIHJ1bkRlc3RydWN0b3JzIHJldFR5cGUgY2xhc3NQYXJhbSIuc3BsaXQoIiAiKSwgZCA9IFt2LCBkLCBzLCBDbiwgY1swXSwgY1sxXV0sIHcgJiYgKGYgKz0gInZhciB0aGlzV2lyZWQgPSBjbGFzc1BhcmFtLnRvV2lyZVR5cGUoIiArIEwgKyBgLCB0aGlzKTsKYCksIHAgPSAwOyBwIDwgaCAtIDI7ICsrcCkKICAgICAgICAgICAgZiArPSAidmFyIGFyZyIgKyBwICsgIldpcmVkID0gYXJnVHlwZSIgKyBwICsgIi50b1dpcmVUeXBlKCIgKyBMICsgIiwgYXJnIiArIHAgKyAiKTsgLy8gIiArIGNbcCArIDJdLm5hbWUgKyBgCmAsIGIucHVzaCgiYXJnVHlwZSIgKyBwKSwgZC5wdXNoKGNbcCArIDJdKTsKICAgICAgICAgIGlmICh3ICYmICh4ID0gInRoaXNXaXJlZCIgKyAoMCA8IHgubGVuZ3RoID8gIiwgIiA6ICIiKSArIHgpLCBmICs9IChOID8gInZhciBydiA9ICIgOiAiIikgKyAiaW52b2tlcihmbiIgKyAoMCA8IHgubGVuZ3RoID8gIiwgIiA6ICIiKSArIHggKyBgKTsKYCwgUCkKICAgICAgICAgICAgZiArPSBgcnVuRGVzdHJ1Y3RvcnMoZGVzdHJ1Y3RvcnMpOwpgOwogICAgICAgICAgZWxzZQogICAgICAgICAgICBmb3IgKHAgPSB3ID8gMSA6IDI7IHAgPCBjLmxlbmd0aDsgKytwKQogICAgICAgICAgICAgIGggPSBwID09PSAxID8gInRoaXNXaXJlZCIgOiAiYXJnIiArIChwIC0gMikgKyAiV2lyZWQiLCBjW3BdLmthICE9PSBudWxsICYmIChmICs9IGggKyAiX2R0b3IoIiArIGggKyAiKTsgLy8gIiArIGNbcF0ubmFtZSArIGAKYCwgYi5wdXNoKGggKyAiX2R0b3IiKSwgZC5wdXNoKGNbcF0ua2EpKTsKICAgICAgICAgIHJldHVybiBOICYmIChmICs9IGB2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpOwpyZXR1cm4gcmV0OwpgKSwgYi5wdXNoKGYgKyBgfQpgKSwgYyA9IGFlKGIpLmFwcGx5KG51bGwsIGQpLCB2dCh5LCBjLCB0IC0gMSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBlOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvKSB7CiAgICAgICAgZnVuY3Rpb24gcyhmKSB7CiAgICAgICAgICByZXR1cm4gZjsKICAgICAgICB9CiAgICAgICAgdCA9IFIodCksIG8gPT09IC0xICYmIChvID0gNDI5NDk2NzI5NSk7CiAgICAgICAgdmFyIGwgPSBGbihyKTsKICAgICAgICBpZiAoaSA9PT0gMCkgewogICAgICAgICAgdmFyIGMgPSAzMiAtIDggKiByOwogICAgICAgICAgcyA9IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgcmV0dXJuIGYgPDwgYyA+Pj4gYzsKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICAgIHZhciB5ID0gdC5pbmRleE9mKCJ1bnNpZ25lZCIpICE9IC0xOwogICAgICAgIEQobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IHMsIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGYsIGQpIHsKICAgICAgICAgIGlmICh0eXBlb2YgZCAhPSAibnVtYmVyIiAmJiB0eXBlb2YgZCAhPSAiYm9vbGVhbiIpCiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oZCkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgIGlmIChkIDwgaSB8fCBkID4gbykKICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciAiJyArIHJuKGQpICsgJyIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSAiJyArIHQgKyAnIiwgd2hpY2ggaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UgWycgKyBpICsgIiwgIiArIG8gKyAiXSEiKTsKICAgICAgICAgIHJldHVybiB5ID8gZCA+Pj4gMCA6IGQgfCAwOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogb2UodCwgbCwgaSAhPT0gMCksIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBkOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgZnVuY3Rpb24gaShzKSB7CiAgICAgICAgICBzID4+PSAyOwogICAgICAgICAgdmFyIGwgPSBVOwogICAgICAgICAgcmV0dXJuIG5ldyBvKEssIGxbcyArIDFdLCBsW3NdKTsKICAgICAgICB9CiAgICAgICAgdmFyIG8gPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gUihyKSwgRChuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFIodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgbyA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpCiAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IGkgKyA0LCBsID0gMDsgbCA8PSBvOyArK2wpIHsKICAgICAgICAgICAgICAgIHZhciBjID0gaSArIDQgKyBsOwogICAgICAgICAgICAgICAgaWYgKGwgPT0gbyB8fCBGW2NdID09IDApIHsKICAgICAgICAgICAgICAgICAgaWYgKHMpIHsKICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IHMsIGYgPSBGLCBkID0geSArIChjIC0gcyk7CiAgICAgICAgICAgICAgICAgICAgZm9yIChzID0geTsgZltzXSAmJiAhKHMgPj0gZCk7ICkKICAgICAgICAgICAgICAgICAgICAgICsrczsKICAgICAgICAgICAgICAgICAgICBpZiAoMTYgPCBzIC0geSAmJiBmLnN1YmFycmF5ICYmIFFuKQogICAgICAgICAgICAgICAgICAgICAgeSA9IFFuLmRlY29kZShmLnN1YmFycmF5KHksIHMpKTsKICAgICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgIGZvciAoZCA9ICIiOyB5IDwgczsgKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gZlt5KytdOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ID0gZlt5KytdICYgNjM7CiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChoICYgMjI0KSA9PSAxOTIpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGggJiAzMSkgPDwgNiB8IHcpOwogICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3krK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSAoaCAmIDI0MCkgPT0gMjI0ID8gKGggJiAxNSkgPDwgMTIgfCB3IDw8IDYgfCBQIDogKGggJiA3KSA8PCAxOCB8IHcgPDwgMTIgfCBQIDw8IDYgfCBmW3krK10gJiA2MywgNjU1MzYgPiBoID8gZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGgpIDogKGggLT0gNjU1MzYsIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGggPj4gMTAsIDU2MzIwIHwgaCAmIDEwMjMpKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZQogICAgICAgICAgICAgICAgICAgICAgICAgIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKTsKICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIHkgPSBkOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSBlbHNlCiAgICAgICAgICAgICAgICAgICAgeSA9ICIiOwogICAgICAgICAgICAgICAgICBpZiAocCA9PT0gdm9pZCAwKQogICAgICAgICAgICAgICAgICAgIHZhciBwID0geTsKICAgICAgICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgICAgICAgIHAgKz0gIlwwIiwgcCArPSB5OwogICAgICAgICAgICAgICAgICBzID0gYyArIDE7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICBmb3IgKHAgPSBBcnJheShvKSwgbCA9IDA7IGwgPCBvOyArK2wpCiAgICAgICAgICAgICAgICBwW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZShGW2kgKyA0ICsgbF0pOwogICAgICAgICAgICAgIHAgPSBwLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiB6KGkpLCBwOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIG8pIHsKICAgICAgICAgICAgbyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChvID0gbmV3IFVpbnQ4QXJyYXkobykpOwogICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiBvID09ICJzdHJpbmciOwogICAgICAgICAgICBzIHx8IG8gaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IG8gaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBvIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGwgPSAociAmJiBzID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgby5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBvLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IG8uY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIG8ubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBjID0gRW4oNCArIGwgKyAxKTsKICAgICAgICAgICAgaWYgKFVbYyA+PiAyXSA9IGwsIHIgJiYgcykKICAgICAgICAgICAgICBVdChvLCBjICsgNCwgbCArIDEpOwogICAgICAgICAgICBlbHNlIGlmIChzKQogICAgICAgICAgICAgIGZvciAocyA9IDA7IHMgPCBsOyArK3MpIHsKICAgICAgICAgICAgICAgIHZhciB5ID0gby5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgICAgICAgMjU1IDwgeSAmJiAoeihjKSwgdigiU3RyaW5nIGhhcyBVVEYtMTYgY29kZSB1bml0cyB0aGF0IGRvIG5vdCBmaXQgaW4gOCBiaXRzIikpLCBGW2MgKyA0ICsgc10gPSB5OwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgIGZvciAocyA9IDA7IHMgPCBsOyArK3MpCiAgICAgICAgICAgICAgICBGW2MgKyA0ICsgc10gPSBvW3NdOwogICAgICAgICAgICByZXR1cm4gaSAhPT0gbnVsbCAmJiBpLnB1c2goeiwgYyksIGM7CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sCiAgICAgICAgICBrYTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB6KGkpOwogICAgICAgICAgfQogICAgICAgIH0pOwogICAgICB9LAogICAgICBqOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgaWYgKHIgPSBSKHIpLCB0ID09PSAyKQogICAgICAgICAgdmFyIGkgPSBEdCwgbyA9IEJ0LCBzID0genQsIGwgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgcmV0dXJuIHluOwogICAgICAgICAgfSwgYyA9IDE7CiAgICAgICAgZWxzZQogICAgICAgICAgdCA9PT0gNCAmJiAoaSA9IFZ0LCBvID0gR3QsIHMgPSBZdCwgbCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gVTsKICAgICAgICAgIH0sIGMgPSAyKTsKICAgICAgICBEKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVt5ID4+IDJdLCBkID0gbCgpLCBoLCB3ID0geSArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgcCA9IHkgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFtwID4+IGNdID09IDApICYmICh3ID0gaSh3LCBwIC0gdyksIGggPT09IHZvaWQgMCA/IGggPSB3IDogKGggKz0gIlwwIiwgaCArPSB3KSwgdyA9IHAgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiB6KHkpLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHksIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gcyhmKSwgaCA9IEVuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBjLCBvKGYsIGggKyA0LCBkICsgdCksIHkgIT09IG51bGwgJiYgeS5wdXNoKHosIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICB6KHkpOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSB6bihuKSwgdCA9IEN0KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBvID0gZW4oaSk7CiAgICAgICAgcmV0dXJuIGtbciA+PiAyXSA9IG8sIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogQm4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IHpuKG4pLCB0ID0gem4odCksIGVuKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBzZVtuXTsKICAgICAgICByZXR1cm4gZW4odCA9PT0gdm9pZCAwID8gUihuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgQ24oaltuXS52YWx1ZSksIEJuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBDdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIGVuKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBzbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgRi5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gRi5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKQogICAgICAgICAgcmV0dXJuICExOwogICAgICAgIGZvciAodmFyIHIgPSAxOyA0ID49IHI7IHIgKj0gMikgewogICAgICAgICAgdmFyIGkgPSB0ICogKDEgKyAwLjIgLyByKTsKICAgICAgICAgIGkgPSBNYXRoLm1pbihpLCBuICsgMTAwNjYzMjk2KSwgaSA9IE1hdGgubWF4KDE2Nzc3MjE2LCBuLCBpKSwgMCA8IGkgJSA2NTUzNiAmJiAoaSArPSA2NTUzNiAtIGkgJSA2NTUzNik7CiAgICAgICAgICBuOiB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgSC5ncm93KE1hdGgubWluKDIxNDc0ODM2NDgsIGkpIC0gSy5ieXRlTGVuZ3RoICsgNjU1MzUgPj4+IDE2KSwgZXQoSC5idWZmZXIpOwogICAgICAgICAgICAgIHZhciBvID0gMTsKICAgICAgICAgICAgICBicmVhayBuOwogICAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgfQogICAgICAgICAgICBvID0gdm9pZCAwOwogICAgICAgICAgfQogICAgICAgICAgaWYgKG8pCiAgICAgICAgICAgIHJldHVybiAhMDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuICExOwogICAgICB9LAogICAgICBzOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSAwOwogICAgICAgIHJldHVybiBFdCgpLmZvckVhY2goZnVuY3Rpb24oaSwgbykgewogICAgICAgICAgdmFyIHMgPSB0ICsgcjsKICAgICAgICAgIGZvciAobyA9IGtbbiArIDQgKiBvID4+IDJdID0gcywgcyA9IDA7IHMgPCBpLmxlbmd0aDsgKytzKQogICAgICAgICAgICBZW28rKyA+PiAwXSA9IGkuY2hhckNvZGVBdChzKTsKICAgICAgICAgIFlbbyA+PiAwXSA9IDAsIHIgKz0gaS5sZW5ndGggKyAxOwogICAgICAgIH0pLCAwOwogICAgICB9LAogICAgICB0OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSBFdCgpOwogICAgICAgIGtbbiA+PiAyXSA9IHIubGVuZ3RoOwogICAgICAgIHZhciBpID0gMDsKICAgICAgICByZXR1cm4gci5mb3JFYWNoKGZ1bmN0aW9uKG8pIHsKICAgICAgICAgIGkgKz0gby5sZW5ndGggKyAxOwogICAgICAgIH0pLCBrW3QgPj4gMl0gPSBpLCAwOwogICAgICB9LAogICAgICBhOiBICiAgICB9OwogICAgKGZ1bmN0aW9uKCkgewogICAgICBmdW5jdGlvbiBuKHMpIHsKICAgICAgICBzID0gcy5leHBvcnRzLCBzID0gTXQocyksIGUuYXNtID0gcywgWi0tLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFopLCBaID09IDAgJiYgb24gJiYgKHMgPSBvbiwgb24gPSBudWxsLCBzKCkpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHQocykgewogICAgICAgIG4ocy5pbnN0YW5jZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcihzKSB7CiAgICAgICAgcmV0dXJuIFh0KCkudGhlbihmdW5jdGlvbihsKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUobCwgaSk7CiAgICAgICAgfSkudGhlbihzLCBmdW5jdGlvbihsKSB7CiAgICAgICAgICBFKCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAiICsgbCksIHNuKGwpOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIHZhciBpID0geyBhOiB1ZSB9OwogICAgICBpZiAoWisrLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFopLCBlLmluc3RhbnRpYXRlV2FzbSkKICAgICAgICB0cnkgewogICAgICAgICAgdmFyIG8gPSBlLmluc3RhbnRpYXRlV2FzbShpLCBuKTsKICAgICAgICAgIHJldHVybiBvID0gTXQobyk7CiAgICAgICAgfSBjYXRjaCAocykgewogICAgICAgICAgcmV0dXJuIEUoIk1vZHVsZS5pbnN0YW50aWF0ZVdhc20gY2FsbGJhY2sgZmFpbGVkIHdpdGggZXJyb3I6ICIgKyBzKSwgITE7CiAgICAgICAgfQogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKFcgfHwgdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nICE9ICJmdW5jdGlvbiIgfHwgc3QoKSB8fCBSbigiZmlsZTovLyIpIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iKQogICAgICAgICAgcmV0dXJuIHIodCk7CiAgICAgICAgZmV0Y2goJCwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKHMpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhzLCBpKS50aGVuKHQsIGZ1bmN0aW9uKGwpIHsKICAgICAgICAgICAgcmV0dXJuIEUoIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAiICsgbCksIEUoImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uIiksIHIodCk7CiAgICAgICAgICB9KTsKICAgICAgICB9KTsKICAgICAgfSgpLCB7fTsKICAgIH0pKCk7CiAgICB2YXIgU3QgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFN0ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBlLmFzbS5CKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgRW4gPSBlLl9tYWxsb2MgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChFbiA9IGUuX21hbGxvYyA9IGUuYXNtLkMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCB6ID0gZS5fZnJlZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKHogPSBlLl9mcmVlID0gZS5hc20uRCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIFd0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFd0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGUuYXNtLkUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZS5hc20uRikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paSA9IGUuYXNtLkcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmkgPSBlLmFzbS5IKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2kgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaSA9IGUuYXNtLkkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaSA9IGUuYXNtLkopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpID0gZS5hc20uSykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9maWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfZmlpID0gZS5hc20uTCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlmID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWYgPSBlLmFzbS5NKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpID0gZS5hc20uTikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWkgPSBlLmFzbS5PKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWkgPSBlLmFzbS5QKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWkgPSBlLmFzbS5RKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaWlpID0gZS5hc20uUikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaSA9IGUuYXNtLlMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGUuYXNtLlQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBlLmFzbS5VKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZS5hc20uVikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBlLmFzbS5XKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWkgPSBlLmFzbS5YKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaSA9IGUuYXNtLlkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWkgPSBlLmFzbS5aKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaSA9IGUuYXNtLl8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBlLmFzbS4kKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGUuYXNtLmFhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZS5hc20uYmEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZS5hc20uY2EpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgdmFyIFBuOwogICAgb24gPSBmdW5jdGlvbiBuKCkgewogICAgICBQbiB8fCBHbigpLCBQbiB8fCAob24gPSBuKTsKICAgIH07CiAgICBmdW5jdGlvbiBHbigpIHsKICAgICAgZnVuY3Rpb24gbigpIHsKICAgICAgICBpZiAoIVBuICYmIChQbiA9ICEwLCBlLmNhbGxlZFJ1biA9ICEwLCAha24pKSB7CiAgICAgICAgICBpZiAocG4oYXQpLCBwbihadCksIG0oZSksIGUub25SdW50aW1lSW5pdGlhbGl6ZWQgJiYgZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpLCBlLnBvc3RSdW4pCiAgICAgICAgICAgIGZvciAodHlwZW9mIGUucG9zdFJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnBvc3RSdW4gPSBbZS5wb3N0UnVuXSk7IGUucG9zdFJ1bi5sZW5ndGg7ICkgewogICAgICAgICAgICAgIHZhciB0ID0gZS5wb3N0UnVuLnNoaWZ0KCk7CiAgICAgICAgICAgICAgb3QudW5zaGlmdCh0KTsKICAgICAgICAgICAgfQogICAgICAgICAgcG4ob3QpOwogICAgICAgIH0KICAgICAgfQogICAgICBpZiAoISgwIDwgWikpIHsKICAgICAgICBpZiAoZS5wcmVSdW4pCiAgICAgICAgICBmb3IgKHR5cGVvZiBlLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnByZVJ1biA9IFtlLnByZVJ1bl0pOyBlLnByZVJ1bi5sZW5ndGg7ICkKICAgICAgICAgICAgJHQoKTsKICAgICAgICBwbihpdCksIDAgPCBaIHx8IChlLnNldFN0YXR1cyA/IChlLnNldFN0YXR1cygiUnVubmluZy4uLiIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgICAgZS5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgfSwgMSksIG4oKTsKICAgICAgICB9LCAxKSkgOiBuKCkpOwogICAgICB9CiAgICB9CiAgICBpZiAoZS5ydW4gPSBHbiwgZS5wcmVJbml0KQogICAgICBmb3IgKHR5cGVvZiBlLnByZUluaXQgPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVJbml0ID0gW2UucHJlSW5pdF0pOyAwIDwgZS5wcmVJbml0Lmxlbmd0aDsgKQogICAgICAgIGUucHJlSW5pdC5wb3AoKSgpOwogICAgcmV0dXJuIEduKCksIHUucmVhZHk7CiAgfTsKfSgpOwpjbGFzcyBtZSB7CiAgY29uc3RydWN0b3IoKSB7CiAgICBZbih0aGlzLCAic2FtV2FzbU1vZHVsZSIpOwogIH0KICBnZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBlKSB7CiAgICByZXR1cm4gewogICAgICBsb2NhdGVGaWxlOiAobSkgPT4gbmV3IFVSTChlIHx8IG0sIHUpLmhyZWYKICAgIH07CiAgfQogIGFzeW5jIGhhbmRsZU1pc3NpbmdPckludmFsaWRTYW1Nb2R1bGUodSwgZSkgewogICAgdHJ5IHsKICAgICAgY29uc3QgbSA9IGF3YWl0IGZldGNoKHUpOwogICAgICBpZiAoIW0ub2spCiAgICAgICAgdGhyb3cgbmV3IEkoCiAgICAgICAgICBgVGhlIHBhdGggdG8gJHtlfSBpcyBpbmNvcnJlY3Qgb3IgdGhlIG1vZHVsZSBpcyBtaXNzaW5nLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgICBjb25zdCBnID0gYXdhaXQgbS5hcnJheUJ1ZmZlcigpOwogICAgICBpZiAoIVdlYkFzc2VtYmx5LnZhbGlkYXRlKGcpKQogICAgICAgIHRocm93IG5ldyBJKAogICAgICAgICAgYFRoZSBwcm92aWRlZCAke2V9IGlzIG5vdCBhIHZhbGlkIFdBU00gbW9kdWxlLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgfSBjYXRjaCAobSkgewogICAgICBpZiAobSBpbnN0YW5jZW9mIEkpCiAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcigKICAgICAgICAgICJZb3UgY2FuIGZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG8gaG9zdCB3YXNtIGZpbGVzIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVycy5pbm5vdmF0cmljcy5jb20vZGlnaXRhbC1vbmJvYXJkaW5nL3RlY2huaWNhbC9yZW1vdGUvZG90LXdlYi1kb2N1bWVudC9sYXRlc3QvZG9jdW1lbnRhdGlvbi8jX2hvc3Rpbmdfc2FtX3dhc20iCiAgICAgICAgKSwgbTsKICAgIH0KICB9CiAgYXN5bmMgZ2V0V2FzbUZpbGVOYW1lKCkgewogICAgcmV0dXJuIGF3YWl0IGZlKCkgPyBrdC5zaW1kIDoga3Quc2FtOwogIH0KICBhc3luYyBpbml0U2FtTW9kdWxlKHUsIGUgPSAiL3dhc20iKSB7CiAgICBpZiAodGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICByZXR1cm47CiAgICBjb25zdCBtID0gYXdhaXQgdGhpcy5nZXRXYXNtRmlsZU5hbWUoKSwgZyA9IGAke2V9LyR7bX1gOwogICAgdHJ5IHsKICAgICAgdGhpcy5zYW1XYXNtTW9kdWxlID0gYXdhaXQgcGUodGhpcy5nZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBnKSk7CiAgICB9IGNhdGNoIHsKICAgICAgdGhyb3cgYXdhaXQgdGhpcy5oYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKGcsIG0pLCBuZXcgSSgiQ291bGQgbm90IGluaXQgZGV0ZWN0b3IuIik7CiAgICB9CiAgfQogIGFzeW5jIGdldFNhbVZlcnNpb24oKSB7CiAgICB2YXIgZTsKICAgIGNvbnN0IHUgPSBhd2FpdCAoKGUgPSB0aGlzLnNhbVdhc21Nb2R1bGUpID09IG51bGwgPyB2b2lkIDAgOiBlLmdldEluZm9TdHJpbmcoKSk7CiAgICByZXR1cm4gdSA9PSBudWxsID8gdm9pZCAwIDogdS50cmltKCk7CiAgfQogIC8qCiAgICogSW4gVFMgNS4yLjAgd2FzIGFkZGVkIHNwZWNpYWwga2V5d29yZCAidXNpbmciIHdoaWNoIGNvdWxkIGJlIHBlcmZlY3QgZm9yIHRoaXMgY2FzZS4KICAgKiBVbmZvcnR1bmF0ZWx5LCB2aXRlIHByZWFjdCBwbHVnaW4gZG9lcyBub3Qgc3VwcG9ydCB0aGlzIHZlcnNpb24gb2YgVFMgeWV0LgogICAqIENoZWNrIHBvc3NpYmlsaXR5IG9mIHVzaW5nICJ1c2luZyIga2V5d29yZCB3aGVuIHZpdGUgcHJlYWN0IHBsdWdpbiB1cGRhdGVzCiAgICovCiAgYWxsb2NhdGVNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBJKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICByZXR1cm4gdGhpcy5zYW1XYXNtTW9kdWxlLl9tYWxsb2ModSk7CiAgfQogIHJlbGVhc2VNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBJKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICB0aGlzLnNhbVdhc21Nb2R1bGUuX2ZyZWUodSk7CiAgfQogIHdyaXRlRGF0YVRvTWVtb3J5KHUsIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLkhFQVBVOC5zZXQodSwgZSk7CiAgfQp9Ci8qKgogKiBAbGljZW5zZQogKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDCiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wCiAqLwpjb25zdCB4dCA9IFN5bWJvbCgiQ29tbGluay5wcm94eSIpLCB2ZSA9IFN5bWJvbCgiQ29tbGluay5lbmRwb2ludCIpLCBnZSA9IFN5bWJvbCgiQ29tbGluay5yZWxlYXNlUHJveHkiKSwgWm4gPSBTeW1ib2woIkNvbWxpbmsuZmluYWxpemVyIiksIE9uID0gU3ltYm9sKCJDb21saW5rLnRocm93biIpLCBGdCA9IChhKSA9PiB0eXBlb2YgYSA9PSAib2JqZWN0IiAmJiBhICE9PSBudWxsIHx8IHR5cGVvZiBhID09ICJmdW5jdGlvbiIsIHdlID0gewogIGNhbkhhbmRsZTogKGEpID0+IEZ0KGEpICYmIGFbeHRdLAogIHNlcmlhbGl6ZShhKSB7CiAgICBjb25zdCB7IHBvcnQxOiB1LCBwb3J0MjogZSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICByZXR1cm4gSm4oYSwgdSksIFtlLCBbZV1dOwogIH0sCiAgZGVzZXJpYWxpemUoYSkgewogICAgcmV0dXJuIGEuc3RhcnQoKSwgVGUoYSk7CiAgfQp9LCBBZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBGdChhKSAmJiBPbiBpbiBhLAogIHNlcmlhbGl6ZSh7IHZhbHVlOiBhIH0pIHsKICAgIGxldCB1OwogICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBFcnJvciA/IHUgPSB7CiAgICAgIGlzRXJyb3I6ICEwLAogICAgICB2YWx1ZTogewogICAgICAgIG1lc3NhZ2U6IGEubWVzc2FnZSwKICAgICAgICBuYW1lOiBhLm5hbWUsCiAgICAgICAgc3RhY2s6IGEuc3RhY2sKICAgICAgfQogICAgfSA6IHUgPSB7IGlzRXJyb3I6ICExLCB2YWx1ZTogYSB9LCBbdSwgW11dOwogIH0sCiAgZGVzZXJpYWxpemUoYSkgewogICAgdGhyb3cgYS5pc0Vycm9yID8gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoYS52YWx1ZS5tZXNzYWdlKSwgYS52YWx1ZSkgOiBhLnZhbHVlOwogIH0KfSwgSXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbCiAgWyJwcm94eSIsIHdlXSwKICBbInRocm93IiwgQWVdCl0pOwpmdW5jdGlvbiBfZShhLCB1KSB7CiAgZm9yIChjb25zdCBlIG9mIGEpCiAgICBpZiAodSA9PT0gZSB8fCBlID09PSAiKiIgfHwgZSBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBlLnRlc3QodSkpCiAgICAgIHJldHVybiAhMDsKICByZXR1cm4gITE7Cn0KZnVuY3Rpb24gSm4oYSwgdSA9IGdsb2JhbFRoaXMsIGUgPSBbIioiXSkgewogIHUuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIG0oZykgewogICAgaWYgKCFnIHx8ICFnLmRhdGEpCiAgICAgIHJldHVybjsKICAgIGlmICghX2UoZSwgZy5vcmlnaW4pKSB7CiAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBvcmlnaW4gJyR7Zy5vcmlnaW59JyBmb3IgY29tbGluayBwcm94eWApOwogICAgICByZXR1cm47CiAgICB9CiAgICBjb25zdCB7IGlkOiBDLCB0eXBlOiBBLCBwYXRoOiBNIH0gPSBPYmplY3QuYXNzaWduKHsgcGF0aDogW10gfSwgZy5kYXRhKSwgTyA9IChnLmRhdGEuYXJndW1lbnRMaXN0IHx8IFtdKS5tYXAoSik7CiAgICBsZXQgVDsKICAgIHRyeSB7CiAgICAgIGNvbnN0IF8gPSBNLnNsaWNlKDAsIC0xKS5yZWR1Y2UoKEUsIFcpID0+IEVbV10sIGEpLCBTID0gTS5yZWR1Y2UoKEUsIFcpID0+IEVbV10sIGEpOwogICAgICBzd2l0Y2ggKEEpIHsKICAgICAgICBjYXNlICJHRVQiOgogICAgICAgICAgVCA9IFM7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJTRVQiOgogICAgICAgICAgX1tNLnNsaWNlKC0xKVswXV0gPSBKKGcuZGF0YS52YWx1ZSksIFQgPSAhMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkFQUExZIjoKICAgICAgICAgIFQgPSBTLmFwcGx5KF8sIE8pOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiQ09OU1RSVUNUIjoKICAgICAgICAgIHsKICAgICAgICAgICAgY29uc3QgRSA9IG5ldyBTKC4uLk8pOwogICAgICAgICAgICBUID0gU2UoRSk7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJFTkRQT0lOVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IHsgcG9ydDE6IEUsIHBvcnQyOiBXIH0gPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTsKICAgICAgICAgICAgSm4oYSwgVyksIFQgPSBPZShFLCBbRV0pOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiUkVMRUFTRSI6CiAgICAgICAgICBUID0gdm9pZCAwOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHJldHVybjsKICAgICAgfQogICAgfSBjYXRjaCAoXykgewogICAgICBUID0geyB2YWx1ZTogXywgW09uXTogMCB9OwogICAgfQogICAgUHJvbWlzZS5yZXNvbHZlKFQpLmNhdGNoKChfKSA9PiAoeyB2YWx1ZTogXywgW09uXTogMCB9KSkudGhlbigoXykgPT4gewogICAgICBjb25zdCBbUywgRV0gPSBibihfKTsKICAgICAgdS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFMpLCB7IGlkOiBDIH0pLCBFKSwgQSA9PT0gIlJFTEVBU0UiICYmICh1LnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBtKSwganQodSksIFpuIGluIGEgJiYgdHlwZW9mIGFbWm5dID09ICJmdW5jdGlvbiIgJiYgYVtabl0oKSk7CiAgICB9KS5jYXRjaCgoXykgPT4gewogICAgICBjb25zdCBbUywgRV0gPSBibih7CiAgICAgICAgdmFsdWU6IG5ldyBUeXBlRXJyb3IoIlVuc2VyaWFsaXphYmxlIHJldHVybiB2YWx1ZSIpLAogICAgICAgIFtPbl06IDAKICAgICAgfSk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBTKSwgeyBpZDogQyB9KSwgRSk7CiAgICB9KTsKICB9KSwgdS5zdGFydCAmJiB1LnN0YXJ0KCk7Cn0KZnVuY3Rpb24gQ2UoYSkgewogIHJldHVybiBhLmNvbnN0cnVjdG9yLm5hbWUgPT09ICJNZXNzYWdlUG9ydCI7Cn0KZnVuY3Rpb24ganQoYSkgewogIENlKGEpICYmIGEuY2xvc2UoKTsKfQpmdW5jdGlvbiBUZShhLCB1KSB7CiAgcmV0dXJuIFhuKGEsIFtdLCB1KTsKfQpmdW5jdGlvbiBNbihhKSB7CiAgaWYgKGEpCiAgICB0aHJvdyBuZXcgRXJyb3IoIlByb3h5IGhhcyBiZWVuIHJlbGVhc2VkIGFuZCBpcyBub3QgdXNlYWJsZSIpOwp9CmZ1bmN0aW9uIEx0KGEpIHsKICByZXR1cm4gYW4oYSwgewogICAgdHlwZTogIlJFTEVBU0UiCiAgfSkudGhlbigoKSA9PiB7CiAgICBqdChhKTsKICB9KTsKfQpjb25zdCBTbiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLCBXbiA9ICJGaW5hbGl6YXRpb25SZWdpc3RyeSIgaW4gZ2xvYmFsVGhpcyAmJiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKGEpID0+IHsKICBjb25zdCB1ID0gKFNuLmdldChhKSB8fCAwKSAtIDE7CiAgU24uc2V0KGEsIHUpLCB1ID09PSAwICYmIEx0KGEpOwp9KTsKZnVuY3Rpb24gRWUoYSwgdSkgewogIGNvbnN0IGUgPSAoU24uZ2V0KHUpIHx8IDApICsgMTsKICBTbi5zZXQodSwgZSksIFduICYmIFduLnJlZ2lzdGVyKGEsIHUsIGEpOwp9CmZ1bmN0aW9uIFBlKGEpIHsKICBXbiAmJiBXbi51bnJlZ2lzdGVyKGEpOwp9CmZ1bmN0aW9uIFhuKGEsIHUgPSBbXSwgZSA9IGZ1bmN0aW9uKCkgewp9KSB7CiAgbGV0IG0gPSAhMTsKICBjb25zdCBnID0gbmV3IFByb3h5KGUsIHsKICAgIGdldChDLCBBKSB7CiAgICAgIGlmIChNbihtKSwgQSA9PT0gZ2UpCiAgICAgICAgcmV0dXJuICgpID0+IHsKICAgICAgICAgIFBlKGcpLCBMdChhKSwgbSA9ICEwOwogICAgICAgIH07CiAgICAgIGlmIChBID09PSAidGhlbiIpIHsKICAgICAgICBpZiAodS5sZW5ndGggPT09IDApCiAgICAgICAgICByZXR1cm4geyB0aGVuOiAoKSA9PiBnIH07CiAgICAgICAgY29uc3QgTSA9IGFuKGEsIHsKICAgICAgICAgIHR5cGU6ICJHRVQiLAogICAgICAgICAgcGF0aDogdS5tYXAoKE8pID0+IE8udG9TdHJpbmcoKSkKICAgICAgICB9KS50aGVuKEopOwogICAgICAgIHJldHVybiBNLnRoZW4uYmluZChNKTsKICAgICAgfQogICAgICByZXR1cm4gWG4oYSwgWy4uLnUsIEFdKTsKICAgIH0sCiAgICBzZXQoQywgQSwgTSkgewogICAgICBNbihtKTsKICAgICAgY29uc3QgW08sIFRdID0gYm4oTSk7CiAgICAgIHJldHVybiBhbihhLCB7CiAgICAgICAgdHlwZTogIlNFVCIsCiAgICAgICAgcGF0aDogWy4uLnUsIEFdLm1hcCgoXykgPT4gXy50b1N0cmluZygpKSwKICAgICAgICB2YWx1ZTogTwogICAgICB9LCBUKS50aGVuKEopOwogICAgfSwKICAgIGFwcGx5KEMsIEEsIE0pIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IE8gPSB1W3UubGVuZ3RoIC0gMV07CiAgICAgIGlmIChPID09PSB2ZSkKICAgICAgICByZXR1cm4gYW4oYSwgewogICAgICAgICAgdHlwZTogIkVORFBPSU5UIgogICAgICAgIH0pLnRoZW4oSik7CiAgICAgIGlmIChPID09PSAiYmluZCIpCiAgICAgICAgcmV0dXJuIFhuKGEsIHUuc2xpY2UoMCwgLTEpKTsKICAgICAgY29uc3QgW1QsIF9dID0gUnQoTSk7CiAgICAgIHJldHVybiBhbihhLCB7CiAgICAgICAgdHlwZTogIkFQUExZIiwKICAgICAgICBwYXRoOiB1Lm1hcCgoUykgPT4gUy50b1N0cmluZygpKSwKICAgICAgICBhcmd1bWVudExpc3Q6IFQKICAgICAgfSwgXykudGhlbihKKTsKICAgIH0sCiAgICBjb25zdHJ1Y3QoQywgQSkgewogICAgICBNbihtKTsKICAgICAgY29uc3QgW00sIE9dID0gUnQoQSk7CiAgICAgIHJldHVybiBhbihhLCB7CiAgICAgICAgdHlwZTogIkNPTlNUUlVDVCIsCiAgICAgICAgcGF0aDogdS5tYXAoKFQpID0+IFQudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBNCiAgICAgIH0sIE8pLnRoZW4oSik7CiAgICB9CiAgfSk7CiAgcmV0dXJuIEVlKGcsIGEpLCBnOwp9CmZ1bmN0aW9uIE1lKGEpIHsKICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYSk7Cn0KZnVuY3Rpb24gUnQoYSkgewogIGNvbnN0IHUgPSBhLm1hcChibik7CiAgcmV0dXJuIFt1Lm1hcCgoZSkgPT4gZVswXSksIE1lKHUubWFwKChlKSA9PiBlWzFdKSldOwp9CmNvbnN0IE50ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7CmZ1bmN0aW9uIE9lKGEsIHUpIHsKICByZXR1cm4gTnQuc2V0KGEsIHUpLCBhOwp9CmZ1bmN0aW9uIFNlKGEpIHsKICByZXR1cm4gT2JqZWN0LmFzc2lnbihhLCB7IFt4dF06ICEwIH0pOwp9CmZ1bmN0aW9uIGJuKGEpIHsKICBmb3IgKGNvbnN0IFt1LCBlXSBvZiBJdCkKICAgIGlmIChlLmNhbkhhbmRsZShhKSkgewogICAgICBjb25zdCBbbSwgZ10gPSBlLnNlcmlhbGl6ZShhKTsKICAgICAgcmV0dXJuIFsKICAgICAgICB7CiAgICAgICAgICB0eXBlOiAiSEFORExFUiIsCiAgICAgICAgICBuYW1lOiB1LAogICAgICAgICAgdmFsdWU6IG0KICAgICAgICB9LAogICAgICAgIGcKICAgICAgXTsKICAgIH0KICByZXR1cm4gWwogICAgewogICAgICB0eXBlOiAiUkFXIiwKICAgICAgdmFsdWU6IGEKICAgIH0sCiAgICBOdC5nZXQoYSkgfHwgW10KICBdOwp9CmZ1bmN0aW9uIEooYSkgewogIHN3aXRjaCAoYS50eXBlKSB7CiAgICBjYXNlICJIQU5ETEVSIjoKICAgICAgcmV0dXJuIEl0LmdldChhLm5hbWUpLmRlc2VyaWFsaXplKGEudmFsdWUpOwogICAgY2FzZSAiUkFXIjoKICAgICAgcmV0dXJuIGEudmFsdWU7CiAgfQp9CmZ1bmN0aW9uIGFuKGEsIHUsIGUpIHsKICByZXR1cm4gbmV3IFByb21pc2UoKG0pID0+IHsKICAgIGNvbnN0IGcgPSBXZSgpOwogICAgYS5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgZnVuY3Rpb24gQyhBKSB7CiAgICAgICFBLmRhdGEgfHwgIUEuZGF0YS5pZCB8fCBBLmRhdGEuaWQgIT09IGcgfHwgKGEucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIEMpLCBtKEEuZGF0YSkpOwogICAgfSksIGEuc3RhcnQgJiYgYS5zdGFydCgpLCBhLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oeyBpZDogZyB9LCB1KSwgZSk7CiAgfSk7Cn0KZnVuY3Rpb24gV2UoKSB7CiAgcmV0dXJuIG5ldyBBcnJheSg0KS5maWxsKDApLm1hcCgoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikudG9TdHJpbmcoMTYpKS5qb2luKCItIik7Cn0KZnVuY3Rpb24gSHQoYSwgdSkgewogIHJldHVybiBNYXRoLnNxcnQoKGEueCAtIHUueCkgKiogMiArIChhLnkgLSB1LnkpICoqIDIpOwp9CmZ1bmN0aW9uIGJlKGEsIHUpIHsKICByZXR1cm4gewogICAgeDogKGEueCArIHUueCkgLyAyLAogICAgeTogKGEueSArIHUueSkgLyAyCiAgfTsKfQpmdW5jdGlvbiBrZShhLCB1KSB7CiAgaWYgKGEuY29uZmlkZW5jZSA8PSAwIHx8IHUuY29uZmlkZW5jZSA8PSAwKQogICAgcmV0dXJuIHsgeDogMCwgeTogMCB9OwogIGNvbnN0IGUgPSBIdChhLmNlbnRlciwgdS5jZW50ZXIpLCBtID0gYmUoYS5jZW50ZXIsIHUuY2VudGVyKTsKICByZXR1cm4gewogICAgeDogbS54LAogICAgeTogbS55ICsgZSAvIDQKICAgIC8vIGNhbGN1bGF0aW9uIGlzIHRha2VuIGZyb20gbW9iaWxlIHRlYW0KICB9Owp9CmZ1bmN0aW9uIFJlKGEsIHUsIGUpIHsKICBpZiAoYS5jb25maWRlbmNlIDw9IDAgfHwgdS5jb25maWRlbmNlIDw9IDApCiAgICByZXR1cm4gMDsKICBjb25zdCBtID0gSHQoYS5jZW50ZXIsIHUuY2VudGVyKSwgZyA9IHllKGUud2lkdGgsIGUuaGVpZ2h0KTsKICByZXR1cm4gaGUobSAvIGcpOwp9CmZ1bmN0aW9uICRuKGEpIHsKICBjb25zdCB7IGNlbnRlclg6IHUsIGNlbnRlclk6IGUsIGNvbmZpZGVuY2U6IG0sIHNpemU6IGcsIHN0YXR1czogQyB9ID0gYTsKICByZXR1cm4gewogICAgY2VudGVyOiB7CiAgICAgIHg6IHUsCiAgICAgIHk6IGUKICAgIH0sCiAgICBjb25maWRlbmNlOiBtIC8gMWUzLAogICAgc3RhdHVzOiBDIC8gMWUzLAogICAgc2l6ZTogZwogIH07Cn0KY2xhc3MgeGUgZXh0ZW5kcyBtZSB7CiAgcGFyc2VSYXdEYXRhKHUsIGUpIHsKICAgIGNvbnN0IHsgYnJpZ2h0bmVzczogbSwgc2hhcnBuZXNzOiBnIH0gPSB1LnBhcmFtcywgeyBib3R0b21SaWdodFg6IEMsIGJvdHRvbVJpZ2h0WTogQSwgbGVmdEV5ZTogTSwgbW91dGg6IE8sIHJpZ2h0RXllOiBULCB0b3BMZWZ0WDogXywgdG9wTGVmdFk6IFMgfSA9IHUsIEUgPSAkbihNKSwgVyA9ICRuKFQpLCBIID0gJG4oTyk7CiAgICByZXR1cm4gewogICAgICBjb25maWRlbmNlOiB1LmNvbmZpZGVuY2UgLyAxZTMsCiAgICAgIHRvcExlZnQ6IHsKICAgICAgICB4OiBfLAogICAgICAgIHk6IFMKICAgICAgfSwKICAgICAgYm90dG9tUmlnaHQ6IHsKICAgICAgICB4OiBDLAogICAgICAgIHk6IEEKICAgICAgfSwKICAgICAgZmFjZUNlbnRlcjoga2UoRSwgVyksCiAgICAgIGZhY2VTaXplOiBSZShFLCBXLCBlKSwKICAgICAgbGVmdEV5ZTogRSwKICAgICAgcmlnaHRFeWU6IFcsCiAgICAgIG1vdXRoOiBILAogICAgICBicmlnaHRuZXNzOiBtIC8gMWUzLAogICAgICBzaGFycG5lc3M6IGcgLyAxZTMKICAgIH07CiAgfQogIGFzeW5jIGRldGVjdCh1LCBlLCBtKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEkoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIGNvbnN0IGcgPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCksIEMgPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICB0aGlzLndyaXRlRGF0YVRvTWVtb3J5KHUsIGcpLCB0aGlzLnNhbVdhc21Nb2R1bGUuY29udmVydFRvU2FtQ29sb3JJbWFnZSgKICAgICAgZS53aWR0aCwKICAgICAgZS5oZWlnaHQsCiAgICAgIGcsCiAgICAgIGRlLlJHQkEsCiAgICAgIEMKICAgICk7CiAgICBjb25zdCBBID0gdGhpcy5zYW1XYXNtTW9kdWxlLmRldGVjdEZhY2VQYXJ0c1dpdGhJbWFnZVBhcmFtZXRlcnMoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBDLAogICAgICAwLAogICAgICAwLAogICAgICAvLyBwYXJhbVdpZHRoIHNob3VsZCBiZSAwIChkZWZhdWx0IHZhbHVlKQogICAgICAwCiAgICAgIC8vIHBhcmFtSGVpZ2h0IHNob3VsZCBiZSAwIChkZWZhdWx0IHZhbHVlKQogICAgKTsKICAgIHJldHVybiB0aGlzLnJlbGVhc2VNZW1vcnkoZyksIHRoaXMucmVsZWFzZU1lbW9yeShDKSwgdGhpcy5wYXJzZVJhd0RhdGEoQSwgbSk7CiAgfQp9CkpuKHhlKTsK", n0 = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);" + atob(Xs)], { type: "text/javascript;charset=utf-8" });
function Yl(t) {
  let o;
  try {
    if (o = n0 && (window.URL || window.webkitURL).createObjectURL(n0), !o)
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
      "data:application/javascript;base64," + Xs,
      {
        type: "module",
        name: t == null ? void 0 : t.name
      }
    );
  }
}
const Ei = class Ei extends Sl {
  constructor() {
    super(...arguments);
    Y(this, "detector");
    Y(this, "className", "FaceController");
    Y(this, "fallbackInstruction", me.FACE_NOT_PRESENT);
    Y(this, "pitchAngleAccelerationThreshold", null);
    Y(this, "validateDetectedObject", (e, n) => {
      const { brightnessHighThreshold: i, brightnessLowThreshold: r, faceConfidence: a, leftEye: s, maxFaceSizeRatio: g, minFaceSizeRatio: I, mouth: C, outOfBoundsThreshold: u, rightEye: p, sharpnessThreshold: A } = this.getThresholds(), w = e.confidence > a, K = e.faceSize > I, S = e.faceSize < g, v = e.sharpness > A, E = e.brightness > r, B = e.brightness < i, $ = Tl(u, e, n), D = Ll(this.pitchAngleAccelerationThreshold, this.acceleration), j = e.leftEye.confidence > s.confidence, H = e.rightEye.confidence > p.confidence, ie = e.mouth.confidence > C.confidence, _ = e.mouth.status < C.status.max, oe = e.mouth.status > C.status.min, q = {};
      return q.isPresent = w, q.isLeftEyePresent = j, q.isRightEyePresent = H, q.isNotSmall = K, q.isNotLarge = S, q.isSharp = v, q.isNotDim = E, q.isNotBright = B, q.isNotOutOfBounds = $, q.isNotPitched = D, q.isMouthPresent = ie, q.isMouthScoreNotTooHigh = _, q.isMouthScoreNotTooLow = oe, q;
    });
    Y(this, "getInstructionCode", (e, n) => {
      var r;
      if (this.isInCandidateSelection)
        return me.CANDIDATE_SELECTION;
      if ((r = this.lastImage) != null && r.isValid && n)
        return me.CANDIDATE_SELECTION;
      if (this.lastImage && n)
        return this.lastImage.instructionCode;
      const [i] = this.getInstructionCodesForValidators(e);
      return i ?? this.fallbackInstruction;
    });
    Y(this, "getInstructionCodesForValidators", (e) => {
      const n = [];
      return Object.entries(e).forEach(([i, r]) => {
        !r && n.push(Lx[i]);
      }), n;
    });
  }
  static async init() {
    const e = new Yl(), n = Ys(e), i = new Ei(), r = await new n();
    this._instance = i, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  setThresholds(e) {
    super.setThresholds(e);
    const { devicePitchAngleThreshold: n } = e;
    this.pitchAngleAccelerationThreshold = iI * Math.sin(n * (Math.PI / (-10290 + 5235 * 2)));
  }
  restart() {
    super.restart(), za(et.INSTRUCTION_CHANGED, void (209 * 25 + 8959 + 72 * -197), pI);
  }
  async processImage(e) {
    var K;
    const n = {};
    n.width = e.width, n.height = e.height;
    const i = n, r = Gr(i), a = ZI(e, r), s = kI(a), g = {};
    g.width = a.width, g.height = a.height;
    const I = g;
    let C = await this.detector.detect(s, I, i);
    C = cl(i, C);
    const u = this.validateDetectedObject(C, i), p = this.isDetectionValid(u), A = this.getInstructionCode(u, p);
    if (u.isPresent && this.collectImagesForDuplicateDetection(s), this.isInCandidateSelection) {
      if (this.bestImage && p && this.isNewImageBetter(this.bestImage.detection, C)) {
        const S = { image: e, detection: zt(C) };
        this.bestImage = S, this.candidateSelectionImages.push(S);
      }
    } else if ((K = this.lastImage) != null && K.isValid && p) {
      const S = { image: e, detection: zt(C) }, v = {};
      v.image = this.lastImage.image, v.detection = this.lastImage.detection;
      const E = v;
      this.isNewImageBetter(E.detection, S.detection) ? this.bestImage = S : this.bestImage = E, this.candidateSelectionImages.push(E, S), this.isInCandidateSelection = !0;
    } else
      p ? this.lastImage = { instructionCode: A, isValid: !0, image: e, detection: zt(C) } : this.lastImage = { instructionCode: A, isValid: !1, image: e, detection: zt(C) };
    const w = { detectedFace: zt(C), instructionCode: A, invalidValidators: this.getInstructionCodesForValidators(u), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(w.detectedFace), za(et.INSTRUCTION_CHANGED, A), yI(et.DETECTED_FACE_CHANGED, w.detectedFace, this.getThresholds().faceConfidence), wI(et.FACE_DETECTION, w.detectedFace, e), w;
  }
};
Y(Ei, "_instance");
let er = Ei;
const Fl = (t, o) => {
  const { handleError: e } = Ui(), [n, i] = Re(), { acceleration: r } = ol();
  n && n.setAcceleration(r), pe(() => {
    (async () => {
      const g = await er.getInstance();
      try {
        const I = {};
        I.wasmDirectoryPath = o, I.thresholds = t, await g.init(I);
      } catch (I) {
        if (I instanceof Error) {
          e(ne.fromError(I));
          return;
        }
      }
      i(g);
    })();
  }, [e, t, o]);
  const a = {};
  return a.controller = n, a;
};
var Gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, js = {}, i0 = {}, Dl = Xl;
function Xl(t, o) {
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
var Ms = {};
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
      var w = a[s++];
      switch (p) {
        case 0:
          C[u++] = e[w >> 2], A = (w & 3) << 4, p = 1;
          break;
        case 1:
          C[u++] = e[A | w >> 4], A = (w & 15) << 2, p = 2;
          break;
        case 2:
          C[u++] = e[A | w >> 6], C[u++] = e[w & 63], p = 0;
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
})(Ms);
var jl = Qi;
function Qi() {
  this._listeners = {};
}
Qi.prototype.on = function(t, o, e) {
  return (this._listeners[t] || (this._listeners[t] = [])).push({
    fn: o,
    ctx: e || this
  }), this;
};
Qi.prototype.off = function(t, o) {
  if (t === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[t] = [];
  else
    for (var e = this._listeners[t], n = 0; n < e.length; )
      e[n].fn === o ? e.splice(n, 1) : ++n;
  return this;
};
Qi.prototype.emit = function(t) {
  var o = this._listeners[t];
  if (o) {
    for (var e = [], n = 1; n < arguments.length; )
      e.push(arguments[n++]);
    for (n = 0; n < o.length; )
      o[n].fn.apply(o[n++].ctx, e);
  }
  return this;
};
var Ml = o0(o0);
function o0(t) {
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
    t.writeFloatLE = o.bind(null, r0), t.writeFloatBE = o.bind(null, a0);
    function e(n, i, r) {
      var a = n(i, r), s = (a >> 31) * 2 + 1, g = a >>> 23 & 255, I = a & 8388607;
      return g === 255 ? I ? NaN : s * (1 / 0) : g === 0 ? s * 1401298464324817e-60 * I : s * Math.pow(2, g - 150) * (I + 8388608);
    }
    t.readFloatLE = e.bind(null, s0), t.readFloatBE = e.bind(null, g0);
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
    t.writeDoubleLE = o.bind(null, r0, 0, 4), t.writeDoubleBE = o.bind(null, a0, 4, 0);
    function e(n, i, r, a, s) {
      var g = n(a, s + i), I = n(a, s + r), C = (I >> 31) * 2 + 1, u = I >>> 20 & 2047, p = 4294967296 * (I & 1048575) + g;
      return u === 2047 ? p ? NaN : C * (1 / 0) : u === 0 ? C * 5e-324 * p : C * Math.pow(2, u - 1075) * (p + 4503599627370496);
    }
    t.readDoubleLE = e.bind(null, s0, 0, 4), t.readDoubleBE = e.bind(null, g0, 4, 0);
  }(), t;
}
function r0(t, o, e) {
  o[e] = t & 255, o[e + 1] = t >>> 8 & 255, o[e + 2] = t >>> 16 & 255, o[e + 3] = t >>> 24;
}
function a0(t, o, e) {
  o[e] = t >>> 24, o[e + 1] = t >>> 16 & 255, o[e + 2] = t >>> 8 & 255, o[e + 3] = t & 255;
}
function s0(t, o) {
  return (t[o] | t[o + 1] << 8 | t[o + 2] << 16 | t[o + 3] << 24) >>> 0;
}
function g0(t, o) {
  return (t[o] << 24 | t[o + 1] << 16 | t[o + 2] << 8 | t[o + 3]) >>> 0;
}
function c0(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ul = Jl;
function Jl(t) {
  try {
    if (typeof c0 != "function")
      return null;
    var o = c0(t);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var Us = {};
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
})(Us);
var Ql = zl;
function zl(t, o, e) {
  var n = e || 8192, i = n >>> 1, r = null, a = n;
  return function(s) {
    if (s < 1 || s > i)
      return t(s);
    a + s > n && (r = t(n), a = 0);
    var g = o.call(r, a, a += s);
    return a & 7 && (a = (a | 7) + 1), g;
  };
}
var wo, x0;
function $l() {
  if (x0)
    return wo;
  x0 = 1, wo = o;
  var t = Nt();
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
  }, wo;
}
var I0;
function Nt() {
  return I0 || (I0 = 1, function(t) {
    var o = t;
    o.asPromise = Dl, o.base64 = Ms, o.EventEmitter = jl, o.float = Ml, o.inquire = Ul, o.utf8 = Us, o.pool = Ql, o.LongBits = $l(), o.isNode = !!(typeof Gt < "u" && Gt && Gt.process && Gt.process.versions && Gt.process.versions.node), o.global = o.isNode && Gt || typeof window < "u" && window || typeof self < "u" && self || Gt, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(i0)), i0;
}
var Js = U, Te = Nt(), tr, zi = Te.LongBits, l0 = Te.base64, u0 = Te.utf8;
function Yn(t, o, e) {
  this.fn = t, this.len = o, this.next = void 0, this.val = e;
}
function Zr() {
}
function _l(t) {
  this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states;
}
function U() {
  this.len = 0, this.head = new Yn(Zr, 0, 0), this.tail = this.head, this.states = null;
}
var Qs = function() {
  return Te.Buffer ? function() {
    return (U.create = function() {
      return new tr();
    })();
  } : function() {
    return new U();
  };
};
U.create = Qs();
U.alloc = function(t) {
  return new Te.Array(t);
};
Te.Array !== Array && (U.alloc = Te.pool(U.alloc, Te.Array.prototype.subarray));
U.prototype._push = function(t, o, e) {
  return this.tail = this.tail.next = new Yn(t, o, e), this.len += o, this;
};
function kr(t, o, e) {
  o[e] = t & 255;
}
function ql(t, o, e) {
  for (; t > 127; )
    o[e++] = t & 127 | 128, t >>>= 7;
  o[e] = t;
}
function Kr(t, o) {
  this.len = t, this.next = void 0, this.val = o;
}
Kr.prototype = Object.create(Yn.prototype);
Kr.prototype.fn = ql;
U.prototype.uint32 = function(t) {
  return this.len += (this.tail = this.tail.next = new Kr(
    (t = t >>> 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5,
    t
  )).len, this;
};
U.prototype.int32 = function(t) {
  return t < 0 ? this._push(Hr, 10, zi.fromNumber(t)) : this.uint32(t);
};
U.prototype.sint32 = function(t) {
  return this.uint32((t << 1 ^ t >> 31) >>> 0);
};
function Hr(t, o, e) {
  for (; t.hi; )
    o[e++] = t.lo & 127 | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
  for (; t.lo > 127; )
    o[e++] = t.lo & 127 | 128, t.lo = t.lo >>> 7;
  o[e++] = t.lo;
}
U.prototype.uint64 = function(t) {
  var o = zi.from(t);
  return this._push(Hr, o.length(), o);
};
U.prototype.int64 = U.prototype.uint64;
U.prototype.sint64 = function(t) {
  var o = zi.from(t).zzEncode();
  return this._push(Hr, o.length(), o);
};
U.prototype.bool = function(t) {
  return this._push(kr, 1, t ? 1 : 0);
};
function nr(t, o, e) {
  o[e] = t & 255, o[e + 1] = t >>> 8 & 255, o[e + 2] = t >>> 16 & 255, o[e + 3] = t >>> 24;
}
U.prototype.fixed32 = function(t) {
  return this._push(nr, 4, t >>> 0);
};
U.prototype.sfixed32 = U.prototype.fixed32;
U.prototype.fixed64 = function(t) {
  var o = zi.from(t);
  return this._push(nr, 4, o.lo)._push(nr, 4, o.hi);
};
U.prototype.sfixed64 = U.prototype.fixed64;
U.prototype.float = function(t) {
  return this._push(Te.float.writeFloatLE, 4, t);
};
U.prototype.double = function(t) {
  return this._push(Te.float.writeDoubleLE, 8, t);
};
var eu = Te.Array.prototype.set ? function(t, o, e) {
  o.set(t, e);
} : function(t, o, e) {
  for (var n = 0; n < t.length; ++n)
    o[e + n] = t[n];
};
U.prototype.bytes = function(t) {
  var o = t.length >>> 0;
  if (!o)
    return this._push(kr, 1, 0);
  if (Te.isString(t)) {
    var e = U.alloc(o = l0.length(t));
    l0.decode(t, e, 0), t = e;
  }
  return this.uint32(o)._push(eu, o, t);
};
U.prototype.string = function(t) {
  var o = u0.length(t);
  return o ? this.uint32(o)._push(u0.write, o, t) : this._push(kr, 1, 0);
};
U.prototype.fork = function() {
  return this.states = new _l(this), this.head = this.tail = new Yn(Zr, 0, 0), this.len = 0, this;
};
U.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Yn(Zr, 0, 0), this.len = 0), this;
};
U.prototype.ldelim = function() {
  var t = this.head, o = this.tail, e = this.len;
  return this.reset().uint32(e), e && (this.tail.next = t.next, this.tail = o, this.len += e), this;
};
U.prototype.finish = function() {
  for (var t = this.head.next, o = this.constructor.alloc(this.len), e = 0; t; )
    t.fn(t.val, o, e), e += t.len, t = t.next;
  return o;
};
U._configure = function(t) {
  tr = t, U.create = Qs(), tr._configure();
};
var tu = nt, zs = Js;
(nt.prototype = Object.create(zs.prototype)).constructor = nt;
var bt = Nt();
function nt() {
  zs.call(this);
}
nt._configure = function() {
  nt.alloc = bt._Buffer_allocUnsafe, nt.writeBytesBuffer = bt.Buffer && bt.Buffer.prototype instanceof Uint8Array && bt.Buffer.prototype.set.name === "set" ? function(t, o, e) {
    o.set(t, e);
  } : function(t, o, e) {
    if (t.copy)
      t.copy(o, e, 0, t.length);
    else
      for (var n = 0; n < t.length; )
        o[e++] = t[n++];
  };
};
nt.prototype.bytes = function(t) {
  bt.isString(t) && (t = bt._Buffer_from(t, "base64"));
  var o = t.length >>> 0;
  return this.uint32(o), o && this._push(nt.writeBytesBuffer, o, t), this;
};
function nu(t, o, e) {
  t.length < 40 ? bt.utf8.write(t, o, e) : o.utf8Write ? o.utf8Write(t, e) : o.write(t, e);
}
nt.prototype.string = function(t) {
  var o = bt.Buffer.byteLength(t);
  return this.uint32(o), o && this._push(nu, o, t), this;
};
nt._configure();
var $s = ge, it = Nt(), ir, _s = it.LongBits, iu = it.utf8;
function Ue(t, o) {
  return RangeError("index out of range: " + t.pos + " + " + (o || 1) + " > " + t.len);
}
function ge(t) {
  this.buf = t, this.pos = 0, this.len = t.length;
}
var C0 = typeof Uint8Array < "u" ? function(t) {
  if (t instanceof Uint8Array || Array.isArray(t))
    return new ge(t);
  throw Error("illegal buffer");
} : function(t) {
  if (Array.isArray(t))
    return new ge(t);
  throw Error("illegal buffer");
}, qs = function() {
  return it.Buffer ? function(t) {
    return (ge.create = function(o) {
      return it.Buffer.isBuffer(o) ? new ir(o) : C0(o);
    })(t);
  } : C0;
};
ge.create = qs();
ge.prototype._slice = it.Array.prototype.subarray || /* istanbul ignore next */
it.Array.prototype.slice;
ge.prototype.uint32 = /* @__PURE__ */ function() {
  var t = 4294967295;
  return function() {
    if (t = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (t = (t | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return t;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, Ue(this, 10);
    return t;
  };
}();
ge.prototype.int32 = function() {
  return this.uint32() | 0;
};
ge.prototype.sint32 = function() {
  var t = this.uint32();
  return t >>> 1 ^ -(t & 1) | 0;
};
function vo() {
  var t = new _s(0, 0), o = 0;
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
        throw Ue(this);
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
        throw Ue(this);
      if (t.hi = (t.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return t;
    }
  throw Error("invalid varint encoding");
}
ge.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Wi(t, o) {
  return (t[o - 4] | t[o - 3] << 8 | t[o - 2] << 16 | t[o - 1] << 24) >>> 0;
}
ge.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Ue(this, 4);
  return Wi(this.buf, this.pos += 4);
};
ge.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Ue(this, 4);
  return Wi(this.buf, this.pos += 4) | 0;
};
function d0() {
  if (this.pos + 8 > this.len)
    throw Ue(this, 8);
  return new _s(Wi(this.buf, this.pos += 4), Wi(this.buf, this.pos += 4));
}
ge.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw Ue(this, 4);
  var t = it.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, t;
};
ge.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw Ue(this, 4);
  var t = it.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, t;
};
ge.prototype.bytes = function() {
  var t = this.uint32(), o = this.pos, e = this.pos + t;
  if (e > this.len)
    throw Ue(this, t);
  return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(o, e) : o === e ? new this.buf.constructor(0) : this._slice.call(this.buf, o, e);
};
ge.prototype.string = function() {
  var t = this.bytes();
  return iu.read(t, 0, t.length);
};
ge.prototype.skip = function(t) {
  if (typeof t == "number") {
    if (this.pos + t > this.len)
      throw Ue(this, t);
    this.pos += t;
  } else
    do
      if (this.pos >= this.len)
        throw Ue(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
ge.prototype.skipType = function(t) {
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
ge._configure = function(t) {
  ir = t, ge.create = qs(), ir._configure();
  var o = it.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  it.merge(ge.prototype, {
    int64: function() {
      return vo.call(this)[o](!1);
    },
    uint64: function() {
      return vo.call(this)[o](!0);
    },
    sint64: function() {
      return vo.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return d0.call(this)[o](!0);
    },
    sfixed64: function() {
      return d0.call(this)[o](!1);
    }
  });
};
var ou = Pt, eg = $s;
(Pt.prototype = Object.create(eg.prototype)).constructor = Pt;
var f0 = Nt();
function Pt(t) {
  eg.call(this, t);
}
Pt._configure = function() {
  f0.Buffer && (Pt.prototype._slice = f0.Buffer.prototype.slice);
};
Pt.prototype.string = function() {
  var t = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len));
};
Pt._configure();
var tg = {}, ru = En, Or = Nt();
(En.prototype = Object.create(Or.EventEmitter.prototype)).constructor = En;
function En(t, o, e) {
  if (typeof t != "function")
    throw TypeError("rpcImpl must be a function");
  Or.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!o, this.responseDelimited = !!e;
}
En.prototype.rpcCall = function t(o, e, n, i, r) {
  if (!i)
    throw TypeError("request must be specified");
  var a = this;
  if (!r)
    return Or.asPromise(t, a, o, e, n, i);
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
En.prototype.end = function(t) {
  return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(t) {
  var o = t;
  o.Service = ru;
})(tg);
var au = {};
(function(t) {
  var o = t;
  o.build = "minimal", o.Writer = Js, o.BufferWriter = tu, o.Reader = $s, o.BufferReader = ou, o.util = Nt(), o.rpc = tg, o.roots = au, o.configure = e;
  function e() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  e();
})(js);
var ae = js;
const G = ae.Reader, fe = ae.Writer, h = ae.util, d = ae.roots.default || (ae.roots.default = {}), xn = d.dot = (() => {
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
      return n || (n = fe.create()), e.token != null && Object.hasOwnProperty.call(e, "token") && n.uint32(
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
      e instanceof G || (e = G.create(e));
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
      return e instanceof G || (e = new G(e)), this.decode(e, e.uint32());
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
      return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        if (i || (i = fe.create()), n.images != null && n.images.length)
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
        n instanceof G || (n = G.create(n));
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
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        return r || (r = fe.create()), i.platform != null && Object.hasOwnProperty.call(i, "platform") && r.uint32(
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
        i instanceof G || (i = G.create(i));
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
        return i instanceof G || (i = new G(i)), this.decode(i, i.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        if (r || (r = fe.create()), i.supportedAbis != null && i.supportedAbis.length)
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
        i instanceof G || (i = G.create(i));
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
        return i instanceof G || (i = new G(i)), this.decode(i, i.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        if (i || (i = fe.create()), n.device != null && Object.hasOwnProperty.call(n, "device") && i.uint32(
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
        n instanceof G || (n = G.create(n));
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
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        if (i || (i = fe.create()), n.currentCameraProperties != null && Object.hasOwnProperty.call(n, "currentCameraProperties") && d.dot.v3.MediaTrackSettings.encode(n.currentCameraProperties, i.uint32(
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
        n instanceof G || (n = G.create(n));
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
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        return r || (r = fe.create()), i.aspectRatio != null && Object.hasOwnProperty.call(i, "aspectRatio") && r.uint32(
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
        i instanceof G || (i = G.create(i));
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
        return i instanceof G || (i = new G(i)), this.decode(i, i.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        return i || (i = fe.create()), n.width != null && Object.hasOwnProperty.call(n, "width") && i.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.width), n.height != null && Object.hasOwnProperty.call(n, "height") && i.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(n.height), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof G || (n = G.create(n));
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
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        return r || (r = fe.create()), i.cameraInitFrameResolution != null && Object.hasOwnProperty.call(i, "cameraInitFrameResolution") && d.dot.v3.ImageBitmap.encode(i.cameraInitFrameResolution, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), i.cameraProperties != null && Object.hasOwnProperty.call(i, "cameraProperties") && d.dot.v3.MediaTrackSettings.encode(i.cameraProperties, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), r;
      }, e.encodeDelimited = function(i, r) {
        return this.encode(i, r).ldelim();
      }, e.decode = function(i, r) {
        i instanceof G || (i = G.create(i));
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
        return i instanceof G || (i = new G(i)), this.decode(i, i.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        return i || (i = fe.create()), n.brightness != null && Object.hasOwnProperty.call(n, "brightness") && i.uint32(
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
        n instanceof G || (n = G.create(n));
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
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        return i || (i = fe.create()), n.x != null && Object.hasOwnProperty.call(n, "x") && i.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(n.x), n.y != null && Object.hasOwnProperty.call(n, "y") && i.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(n.y), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof G || (n = G.create(n));
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
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        return i || (i = fe.create()), n.image != null && Object.hasOwnProperty.call(n, "image") && d.dot.Image.encode(n.image, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.metadata != null && Object.hasOwnProperty.call(n, "metadata") && d.dot.v3.Metadata.encode(n.metadata, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof G || (n = G.create(n));
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
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        return i || (i = fe.create()), n.image != null && Object.hasOwnProperty.call(n, "image") && d.dot.Image.encode(n.image, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.metadata != null && Object.hasOwnProperty.call(n, "metadata") && d.dot.v3.Metadata.encode(n.metadata, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof G || (n = G.create(n));
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
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        return r || (r = fe.create()), i.documentContent != null && Object.hasOwnProperty.call(i, "documentContent") && d.dot.v3.DocumentContent.encode(i.documentContent, r.uint32(
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
        i instanceof G || (i = G.create(i));
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
        return i instanceof G || (i = new G(i)), this.decode(i, i.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        return i || (i = fe.create()), n.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(n, "neutralExpressionFaceImage") && d.dot.Image.encode(n.neutralExpressionFaceImage, i.uint32(
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
        n instanceof G || (n = G.create(n));
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
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
      return n || (n = fe.create()), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && n.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(e.bytes), n;
    }, o.encodeDelimited = function(e, n) {
      return this.encode(e, n).ldelim();
    }, o.decode = function(e, n) {
      e instanceof G || (e = G.create(e));
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
      return e instanceof G || (e = new G(e)), this.decode(e, e.uint32());
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
      return this.constructor.toObject(this, ae.util.toJSONOptions);
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
      if (n || (n = fe.create()), e.items != null && e.items.length) {
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
      e instanceof G || (e = G.create(e));
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
      return e instanceof G || (e = new G(e)), this.decode(e, e.uint32());
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
      return this.constructor.toObject(this, ae.util.toJSONOptions);
    }, o.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Int32List";
    }, o;
  }(), t.Platform = function() {
    const o = {}, e = Object.create(o);
    return e[o[0] = "WEB"] = 0, e[o[1] = "ANDROID"] = 1, e[o[2] = "IOS"] = 2, e;
  }(), t;
})();
async function su(t) {
  const { Image: o } = xn, e = await t.arrayBuffer(), n = new Uint8Array(e), i = {};
  i.bytes = n;
  const r = o.verify(i);
  if (r)
    throw Error(r);
  const a = {};
  return a.bytes = n, o.create(a);
}
async function gu(t) {
  const { v3: { Metadata: o } } = xn, e = { ...t };
  e.platform = xn.Platform.WEB;
  const n = e, i = o.verify(n);
  if (i)
    throw Error(i);
  return o.create(n);
}
async function cu(t) {
  const { Content: o } = xn, { iv: e, key: n, message: i } = await vl(t), r = { token: new Uint8Array(n), iv: e, schemaVersion: aI, bytes: new Uint8Array(i) }, a = o.verify(r);
  if (a)
    throw Error(a);
  const s = o.create(r);
  return o.encode(s).finish();
}
function xu({ documentContent: t, faceContent: o, magnifeyeLivenessContent: e, smileLivenessContent: n }) {
  const { Blob: i } = xn.v3, r = {};
  r.documentContent = t, r.faceContent = o, r.magnifeyeLivenessContent = e, r.smileLivenessContent = n;
  const a = r, s = i.verify(a);
  if (s)
    throw Error(s);
  const g = i.create(a);
  return i.encode(g).finish();
}
async function Iu(t, o) {
  const { FaceContent: e } = xn.v3, n = await su(t), i = await gu(o), r = {};
  r.image = n, r.metadata = i;
  const a = r, s = e.verify(a);
  if (s)
    throw Error(s);
  const g = e.create(a), I = {};
  return I.faceContent = g, xu(I);
}
async function lu(t, o) {
  const e = await Iu(t, o);
  return cu(e);
}
const uu = ({
  onPhotoTakenInternal: t
}) => {
  const {
    analytics: o,
    appState: e,
    appTier: n,
    freemiumOverlayState: i,
    handleAppStateChange: r,
    handleError: a,
    isLicenseValidated: s
  } = Ui(), {
    faceCameraOptions: g
  } = As(), {
    cameraFacing: I,
    onPhotoTaken: C,
    sessionToken: u,
    thresholds: p,
    wasmDirectoryPath: A
  } = g, w = vt(), K = Ws(void 0), {
    cameraHandler: S,
    cameraResolution: v,
    onCameraResolutionChange: E
  } = qI(w, I), {
    controller: B
  } = Fl(p, A), {
    shouldMirror: $
  } = zI(et.CONTROL, S);
  OI(et.CAMERA_PROPS_CHANGED, {
    cameraResolution: v,
    shouldMirror: $
  }), pe(() => () => {
    Vn.getInstance().restart();
  }, []), pe(() => {
    S != null && S.videoTrack && (B != null && B.isDetectorInitialized) && s && r(We.RUNNING);
  }, [S == null ? void 0 : S.videoTrack, B == null ? void 0 : B.isDetectorInitialized, r, s]), pe(() => {
    if (e !== We.RUNNING)
      return;
    if (!S || !B)
      throw new ne("Cannot start detection");
    let _ = 0, oe = !1, q = 0;
    const Ce = new wr(30);
    B.clearImagesForDuplicateDetection();
    const Je = async (re, be, Qe) => {
      const Fe = {
        width: re.width,
        height: re.height
      }, ce = await GI(re), he = {
        ...await S.getCameraProperties(),
        detectionRecord: Qe,
        hashedDetectedImages: B.getImagesForDuplicateDetection()
      }, $e = await lu(ce, {
        sessionToken: u,
        web: he
      }), Be = {
        detection: be,
        imageResolution: Fe
      };
      HI(hs.FACE, B.getCandidateSelectionImages()), t && t({
        cameraProperties: he || {}
      }), C({
        image: ce,
        data: Be
      }, $e);
    };
    return (async () => {
      const re = Date.now();
      for (; S.checkIfStreamIsRunning() && !oe; ) {
        if (MI(_, q)) {
          const {
            detection: Be,
            image: Ve
          } = B.getBestImage() || {}, ot = B.getDetectionRecord();
          if (Ve && Be) {
            const Se = Date.now(), Ge = ms(Ce);
            o == null || o.trackCaptureProcess({
              faceDetection: Be,
              imageResolution: {
                width: Ve.width,
                height: Ve.height
              },
              deviceName: await S.getDeviceName(),
              averageFps: Ge,
              captureProcessDurationInMs: Se - re,
              facingMode: S.getCameraSettings().facingMode,
              instructionSet: await B.getInstructionSet()
            }), r(We.WAITING), await Je(Ve, Be, ot), B.restart();
          } else
            a(new ne("Something went wrong during capturing an image"));
          return;
        }
        const be = Date.now(), Qe = S.takePhoto(), Fe = {
          width: Qe.width,
          height: Qe.height
        };
        let ce;
        try {
          ce = await B.processImage(Qe);
        } catch (Be) {
          Be instanceof Error && a(ne.fromCameraError(Be));
          return;
        }
        const he = Date.now() - be, Ie = Tn(1e3 / he);
        Ce.pushFixed(Ie);
        const $e = {
          face: ce.detectedFace,
          detectionTime: he,
          fps: Ie,
          resolution: Fe,
          instructionCode: ce.instructionCode,
          invalidValidators: ce.invalidValidators,
          samVersion: B.samVersion
        };
        K.value = $e, ce.isInCandidateSelection && (_ === 0 && (_ = performance.now()), q++), E(Fe), await Uo(Math.max(Qa.max - he, Qa.min));
      }
    })(), () => {
      oe = !0;
    };
  }, [e, S, B, g, r, a, C, p.faceConfidence, E, t, u, K, o]);
  const D = i !== Gi.HIDDEN && n !== Mo.PREMIUM && v, j = i === Gi.VISIBLE, H = s, ie = v && s && e === We.RUNNING;
  return O(Me, {
    children: [D && O(Al, {
      fullOverlay: j,
      resolution: v
    }), O(Ex, {
      ref: w,
      $isImageMirror: $,
      $isVisible: H,
      autoPlay: !0,
      muted: !0,
      playsInline: !0
    }), ie && O(ll, {
      appTier: n,
      cameraResolution: v,
      detectionDetails: K,
      isImageMirror: $
    })]
  });
}, Cu = ({
  onPhotoTakenInternal: t,
  ...o
}) => O(CI, {
  cameraOptions: o,
  children: O(uu, {
    onPhotoTakenInternal: t
  })
});
function du({ licenseResult: t }) {
  return t != null && t.isValid ? Mo.PREMIUM : Mo.FREEMIUM;
}
function fu({ analytics: t, licenseResult: o }) {
  return o !== void (27 * -193 + -3862 + 9073) && !o.isAnalyticsDisabled ? t : void (12 * 447 + -1129 * 5 + 281);
}
function Au({ analytics: t, appKey: o, appTier: e, licenseResult: n, licenseValidator: i }) {
  const r = {};
  r.analytics = t, r.licenseResult = n;
  const a = fu(r);
  return pe(() => {
    a && a.init(o);
  }, [a, o]), pe(() => {
    n && (console.info("Analytics is " + (n.isAnalyticsDisabled ? "disabled" : "enabled")), a && a.sendLicenseResultData(e, i.getCustomerName()));
  }, [a, i, n, e]), pe(() => {
    if (a)
      return window.addEventListener("beforeunload", a.endSession), () => {
        a.endSession(), window.removeEventListener("beforeunload", a.endSession);
      };
  }, [a]), a;
}
function pu({ licensePath: t, licenseValidator: o, wasmDirectoryPath: e }) {
  const [n, i] = Re(), r = n !== void (-429 + 1 * -67 + 248 * 2);
  pe(() => {
    async function s() {
      await o.init(e, t), i(o.getLicenseResult());
    }
    s();
  }, [o, e, t, i]);
  const a = {};
  return a.licenseResult = n, a.isLicenseValidated = r, a;
}
function hu({ analytics: t, analyticsAppKey: o, initAppState: e, licensePath: n, licenseValidator: i, wasmDirectoryPath: r }) {
  const [a, s] = Re(e), [g, I] = Re(), [C, u] = Re(!1), p = {};
  p.licenseValidator = i, p.wasmDirectoryPath = r, p.licensePath = n;
  const { isLicenseValidated: A, licenseResult: w } = pu(p), K = {};
  K.licenseResult = w;
  const S = du(K), v = {};
  v.analytics = t, v.appKey = o, v.appTier = S, v.licenseResult = w, v.licenseValidator = i;
  const E = Au(v), B = {};
  return B.appTier = S, B.appState = a, B.setAppState = s, B.error = g, B.setError = I, B.isCameraReady = C, B.setIsCameraReady = u, B.licenseResult = w, B.isLicenseValidated = A, B.analytics = E, B;
}
function mu() {
  const [t] = window.crypto.getRandomValues(new Uint32Array(1));
  return t.toString(2364 + -587 * 4);
}
function bu() {
  const t = sessionStorage.getItem("dot-user-id");
  if (t)
    return t;
  const o = mu();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function yu(t, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : t;
}
function wu(t) {
  return t > -7248 + -261 * -28 ? ">1m" : t > -1 * -4731 + -311 * 32 + 5266 ? ">45" : t > 7576 * 1 + -1291 * 2 + -2482 * 2 ? ">30" : "" + t;
}
const vu = (t) => Math.round(t / 500) * 500 / (-6385 + 2 * -4065 + 145 * 107), A0 = (t) => t ? t <= 1398 + 4597 * 2 + -119 * 89 ? Math.round(t * (-1312 + -2723 * -1 + -1391)) / (-171 + 21 * 242 + 1 * -4891) : Math.round(t / (1 * -3719 + 4402 + -633)) * (-3882 + -1 * -3932) : 17 * 431 + 1 * 5997 + -13324, Bu = (t) => Math.round(t * (-8347 + 2866 * -1 + 11215)) / (-815 + -7 * -287 + 596 * -2);
function Su(t) {
  return t !== We.RUNNING ? Gi.VISIBLE : Gi.VISIBLE_WITH_MASK;
}
var ng = ((t) => (t.AUTO_CAPTURE = "auto-capture", t))(ng || {});
class Gu {
  constructor() {
    Y(this, "appKey", "");
    Y(this, "deviceId", "");
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
    const s = ii(a);
    await fetch("" + r + s + "&" + o, i);
  }
  async init(o, e) {
    if (!e)
      return;
    this.appKey = e, this.deviceId = o;
    const n = { _app_version: vs() }, i = { organization: Bs(window.location.href) }, r = ii({ begin_session: "1", metrics: JSON.stringify(n), user_details: JSON.stringify(i) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const e = ii(o);
    await this.countlyFetch(e);
  }
  async sendAutoCaptureEvent(o, e) {
    const n = {};
    n.key = ng.AUTO_CAPTURE, n.count = 1, n.dur = e, n.segmentation = o;
    const i = [n], r = ii({ events: JSON.stringify(i) });
    await this.countlyFetch(r);
  }
}
const ai = new Gu();
class Zu {
  constructor() {
    Y(this, "countly", ai);
  }
  createSegmentation(o) {
    return { appVersion: vs(), ...o };
  }
  init(o) {
    if (jI())
      return;
    const e = bu();
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
class ku extends Zu {
  trackCaptureProcess({ averageFps: o, captureProcessDurationInMs: e, deviceName: n, faceDetection: i, facingMode: r, imageResolution: a, instructionSet: s }) {
    if (!i)
      return;
    const g = vu(e), I = this.createSegmentation({ faceSize: A0(i.faceSize), confidence: A0(i.confidence), camera: yu(n, r), imageResolution: a.width + "x" + a.height, averageFps: Bu(o), captureTime: wu(g), instructionSet: s });
    this.countly.sendAutoCaptureEvent(I, g);
  }
}
const Ku = new ku();
let M;
const xt = new Array(2 * -1738 + -3 * 2182 + -145 * -70).fill(void 0);
xt.push(void 0, null, !0, !1);
function or(t) {
  return xt[t];
}
let ut = 1 * -4801 + -3 * 1733 + -4 * -2500, Bn = null;
function bi() {
  return (Bn === null || Bn.byteLength === 7172 + -5 * 1047 + -1937) && (Bn = new Uint8Array(M.memory.buffer)), Bn;
}
const yi = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Hu = typeof yi.encodeInto == "function" ? function(t, o) {
  return yi.encodeInto(t, o);
} : function(t, o) {
  const e = yi.encode(t);
  o.set(e);
  const n = {};
  return n.read = t.length, n.written = e.length, n;
};
function Ri(t, o, e) {
  if (e === void 0) {
    const s = yi.encode(t), g = o(s.length, 1) >>> -4 * -1420 + -8416 + 2736;
    return bi().subarray(g, g + s.length).set(s), ut = s.length, g;
  }
  let n = t.length, i = o(n, -197 * -1 + -3372 + 8 * 397) >>> 8165 + -2 * 244 + 853 * -9;
  const r = bi();
  let a = -1 * 3705 + -60 + -1 * -3765;
  for (; a < n; a++) {
    const s = t.charCodeAt(a);
    if (s > 1994 * 5 + -3964 * 1 + -5879)
      break;
    r[i + a] = s;
  }
  if (a !== n) {
    a !== -9451 + 1 * 9451 && (t = t.slice(a)), i = e(i, n, n = a + t.length * (-25 + 163 * 2 + -298), 505 * 2 + 2545 * -2 + -371 * -11) >>> 7280 + 1040 * -7;
    const s = bi().subarray(i + a, i + n), g = Hu(t, s);
    a += g.written;
  }
  return ut = a, i;
}
function ig(t) {
  return t == null;
}
let Sn = null;
function mt() {
  return (Sn === null || Sn.byteLength === 7812 + -1302 * 6) && (Sn = new Int32Array(M.memory.buffer)), Sn;
}
let Wn = xt.length;
function Ou(t) {
  t < 429 + -99 * 3 || (xt[t] = Wn, Wn = t);
}
function og(t) {
  const o = or(t);
  return Ou(t), o;
}
const rr = {};
rr.ignoreBOM = !0, rr.fatal = !0;
const rg = typeof TextDecoder < "u" ? new TextDecoder("utf-8", rr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && rg.decode();
function ar(t, o) {
  return t = t >>> 19 * 1 + -9839 + 9820, rg.decode(bi().subarray(t, t + o));
}
function sr(t) {
  Wn === xt.length && xt.push(xt.length + 1);
  const o = Wn;
  return Wn = xt[o], xt[o] = t, o;
}
let Gn = null;
function ag() {
  return (Gn === null || Gn.byteLength === -3167 + 292 * 2 + 3 * 861) && (Gn = new Uint32Array(M.memory.buffer)), Gn;
}
function p0(t, o) {
  const e = o(t.length * 4, 4) >>> 0, n = ag();
  for (let i = 11 * 91 + 3 * -469 + 406; i < t.length; i++)
    n[e / 4 + i] = sr(t[i]);
  return ut = t.length, e;
}
function h0(t, o) {
  t = t >>> 827 * 8 + -2 * -3086 + -12788;
  const e = ag(), n = e.subarray(t / (566 * -11 + 300 * 4 + 5030 * 1), t / (-104 * -69 + 3833 + 11005 * -1) + o), i = [];
  for (let r = -9547 * 1 + 3 * 1799 + 2 * 2075; r < n.length; r++)
    i.push(og(n[r]));
  return i;
}
function Wu(t, o) {
  const e = Ri(t, M.__wbindgen_malloc, M.__wbindgen_realloc), n = ut, i = Ri(o, M.__wbindgen_malloc, M.__wbindgen_realloc), r = ut, a = M.validate_license(e, n, i, r);
  return Wr.__wrap(a);
}
class Wr {
  static __wrap(o) {
    o = o >>> -5643 + 1108 * -8 + 14507;
    const e = Object.create(Wr.prototype);
    return e.__wbg_ptr = o, e;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = -9452 + -139 * -68, o;
  }
  free() {
    const o = this.__destroy_into_raw();
    M.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, e, n, i) {
    var r = ig(e) ? 0 : Ri(e, M.__wbindgen_malloc, M.__wbindgen_realloc), a = ut;
    const s = p0(n, M.__wbindgen_malloc), g = ut, I = p0(i, M.__wbindgen_malloc), C = ut, u = M.licensevalidationresult_new(o, r, a, s, g, I, C);
    return this.__wbg_ptr = u >>> -106 * -68 + 7241 + -14449 * 1, this;
  }
  get is_valid() {
    return M.licensevalidationresult_is_valid(this.__wbg_ptr) !== 0;
  }
  get features_json() {
    try {
      const n = M.__wbindgen_add_to_stack_pointer(-16);
      M.licensevalidationresult_features_json(n, this.__wbg_ptr);
      var o = mt()[n / (19 * -169 + 263 * -29 + 10842) + (373 * -15 + -4113 + 1 * 9708)], e = mt()[n / 4 + (-1 * -5677 + 4 * 1310 + -10916)];
      let i;
      return o !== -276 + 138 * 2 && (i = ar(o, e).slice(), M.__wbindgen_free(o, e * (1 * -659 + -655 * -1 + -1 * -5), 9058 + 1 * -9057)), i;
    } finally {
      M.__wbindgen_add_to_stack_pointer(3496 * 2 + -3164 + 3812 * -1);
    }
  }
  get errors() {
    try {
      const i = M.__wbindgen_add_to_stack_pointer(-16);
      M.licensevalidationresult_errors(i, this.__wbg_ptr);
      var o = mt()[i / (-4437 + 1 * 4441) + (6563 * 1 + -6663 + 100)], e = mt()[i / (9 * 139 + 102 * 31 + -1 * 4409) + (3811 * 2 + -220 + -7401)], n = h0(o, e).slice();
      return M.__wbindgen_free(o, e * (-18 * -550 + 2382 + -12278 * 1), -145 * 35 + 5637 + -558), n;
    } finally {
      M.__wbindgen_add_to_stack_pointer(-1 * -3739 + 4 * 1434 + 3 * -3153);
    }
  }
  get warnings() {
    try {
      const i = M.__wbindgen_add_to_stack_pointer(-16);
      M.licensevalidationresult_warnings(i, this.__wbg_ptr);
      var o = mt()[i / (2 * -569 + 7689 + -6547) + (-1062 * -8 + 449 * 20 + -17476)], e = mt()[i / (3 * -505 + -6242 + 3 * 2587) + (453 * 13 + -4111 + 1777 * -1)], n = h0(o, e).slice();
      return M.__wbindgen_free(o, e * 4, 4), n;
    } finally {
      M.__wbindgen_add_to_stack_pointer(4868 + 132 * -55 + 14 * 172);
    }
  }
}
async function Ru(t, o) {
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
function Vu() {
  const t = {};
  return t.wbg = {}, t.wbg.__wbindgen_string_get = function(o, e) {
    const n = or(e), i = typeof n == "string" ? n : void 0;
    var r = ig(i) ? -28 * 201 + 312 * -26 + 13740 : Ri(i, M.__wbindgen_malloc, M.__wbindgen_realloc), a = ut;
    mt()[o / (112 * 36 + 2 * 2078 + -8184) + 1] = a, mt()[o / (12295 + 3 * -4097) + (-1173 + -1 * -1173)] = r;
  }, t.wbg.__wbindgen_object_drop_ref = function(o) {
    og(o);
  }, t.wbg.__wbindgen_string_new = function(o, e) {
    const n = ar(o, e);
    return sr(n);
  }, t.wbg.__wbg_new0_c0e40662db0749ee = function() {
    return sr(/* @__PURE__ */ new Date());
  }, t.wbg.__wbg_getTime_af7ca51c0bcefa08 = function(o) {
    return or(o).getTime();
  }, t.wbg.__wbindgen_throw = function(o, e) {
    throw new Error(ar(o, e));
  }, t;
}
function Eu(t, o) {
  return M = t.exports, sg.__wbindgen_wasm_module = o, Sn = null, Gn = null, Bn = null, M;
}
async function sg(t) {
  if (M !== void 0)
    return M;
  typeof t > "u" && (t = new URL("dot_embedded_bg.wasm", import.meta.url));
  const o = Vu();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
  const { instance: e, module: n } = await Ru(await t, o);
  return Eu(e, n);
}
class Pu {
  constructor() {
    Y(this, "wasmInitialized", !1);
  }
  async init(o = "/wasm") {
    try {
      const e = o + "/" + lI;
      await sg(e), this.wasmInitialized = !0;
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
    Y(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
var en;
class m0 {
  constructor(o) {
    ga(this, en, void 0);
    this.licenseResult = o;
    try {
      ca(this, en, o.features_json && JSON.parse(o.features_json));
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
    return Io(this, en);
  }
  get isAnalyticsDisabled() {
    var o, e;
    return !!((e = (o = Io(this, en)) == null ? void 0 : o.features) != null && e["realTimeTransactionReportingDisabled"]);
  }
}
en = new WeakMap();
class Nu {
  constructor(o) {
    Y(this, "license");
    Y(this, "licenseResult");
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
      this.license = void (-355 * 3 + 352 + 713), console.error(e);
    }
  }
  async loadLicense(o) {
    if (this.licenseResult = void (-1 * 5411 + -5234 + 10645), !o) {
      console.info("No DOT license provided."), this.license = void (-5341 + -523 * -5 + 58 * 47);
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
      this.licenseResult = new m0(Wu(this.license, this.getDomain())), this.printErrors(this.licenseResult.errors), this.printWarnings(this.licenseResult.warnings);
    } catch (o) {
      o instanceof Bo ? o.log() : o instanceof Error && console.error(o);
      const e = {};
      e.is_valid = !1, e.errors = [], e.warnings = [], e.features_json = void 0, e.free = function() {
      }, this.licenseResult = new m0(e);
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
        e instanceof Error && ne.logError(e);
        return;
      }
  }
}
const Pi = class Pi extends Nu {
  static getInstance() {
    if (!this._instance) {
      const o = new Pu();
      this._instance = new Pi(o);
    }
    return this._instance;
  }
};
Y(Pi, "_instance");
let gr = Pi;
function Lu({
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
  } = hu({
    initAppState: We.LOADING,
    analytics: Ku,
    analyticsAppKey: "5f83e83ee4cee1ab6e5bbf86e215644473299675",
    wasmDirectoryPath: e,
    licenseValidator: gr.getInstance(),
    licensePath: t
  }), p = Su(i), A = vi((K) => {
    $a(et.STATE_CHANGED, {
      appState: We.ERROR,
      error: K
    }), u(!1), o(K), C(K), I(We.ERROR);
  }, [o, u, C, I]), w = vi((K) => {
    $a(et.STATE_CHANGED, {
      appState: K
    }), I(K);
  }, [I]);
  return {
    appState: i,
    isLicenseValidated: g,
    appTier: r,
    freemiumOverlayState: p,
    isCameraReady: s,
    setIsCameraReady: u,
    handleAppStateChange: w,
    handleError: A,
    error: a,
    analytics: n
  };
}
const Tu = ({
  children: t
}) => {
  const o = vt(null);
  return el(o, et.VIDEO_ELEMENT_SIZE), O(Vx, {
    ref: o,
    children: t
  });
}, Yu = ({
  cameraOptions: t
}) => {
  if (!t)
    return null;
  const o = Lu({
    onError: t.onError,
    wasmDirectoryPath: t.wasmDirectoryPath,
    licensePath: t.licensePath
  });
  return O(Zx, {
    target: t.styleTarget,
    children: O(Fx, {
      value: o,
      children: O(us, {
        children: O(Tu, {
          children: O(Cu, {
            ...t
          })
        })
      })
    })
  });
};
Vg(Yu, "x-dot-face-auto-capture", ["cameraOptions"]);
