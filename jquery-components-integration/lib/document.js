var _g = Object.defineProperty;
var Ta = (i) => {
  throw TypeError(i);
};
var qg = (i, o, t) => o in i ? _g(i, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[o] = t;
var X = (i, o, t) => qg(i, typeof o != "symbol" ? o + "" : o, t), Ea = (i, o, t) => o.has(i) || Ta("Cannot " + t);
var $ = (i, o, t) => (Ea(i, o, "read from private field"), t ? t.call(i) : o.get(i)), Se = (i, o, t) => o.has(i) ? Ta("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(i) : o.set(i, t), me = (i, o, t, e) => (Ea(i, o, "write to private field"), e ? e.call(i, t) : o.set(i, t), t);
var oi, L, Ms, js, Tt, Pa, Us, $o, Rr, _o, qo, Js, jn = {}, zs = [], ec = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, co = Array.isArray;
function ht(i, o) {
  for (var t in o) i[t] = o[t];
  return i;
}
function Qs(i) {
  var o = i.parentNode;
  o && o.removeChild(i);
}
function ke(i, o, t) {
  var e, n, r, a = {};
  for (r in o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : a[r] = o[r];
  if (arguments.length > 2 && (a.children = arguments.length > 169 * -53 + 8118 + 842 ? oi.call(arguments, -368 * -3 + -1 * -4201 + -5303) : t), typeof i == "function" && i.defaultProps != null)
    for (r in i.defaultProps) void (-2028 + -1 * 3064 + 19 * 268) === a[r] && (a[r] = i.defaultProps[r]);
  return Nn(i, a, e, n, null);
}
function Nn(i, o, t, e, n) {
  var r = {};
  r.type = i, r.props = o, r.key = t, r.ref = e, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (67 * 79 + 4380 + -9673), r.__c = null, r.constructor = void (124 * 48 + 2141 + -8093 * 1), r.__v = n ?? ++Ms, r.__i = -(-7 * 356 + 1524 + 969), r.__u = 0;
  var a = r;
  return n == null && L.vnode != null && L.vnode(a), a;
}
function tc() {
  var i = {};
  return i.current = null, i;
}
function et(i) {
  return i.children;
}
function Me(i, o) {
  this.props = i, this.context = o;
}
function Xt(i, o) {
  if (o == null) return i.__ ? Xt(i.__, i.__i + (-17 * 528 + -5 * 431 + -5566 * -2)) : null;
  for (var t; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? Xt(i) : null;
}
function $s(i) {
  var o, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, o = -6166 * 1 + -9 * 607 + 1 * 11629; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return $s(i);
  }
}
function er(i) {
  (!i.__d && (i.__d = !(1 * -3038 + -9e3 + 926 * 13)) && Tt.push(i) && !Ui.__r++ || Pa !== L.debounceRendering) && ((Pa = L.debounceRendering) || Us)(Ui);
}
function Ui() {
  var i, o, t, e, n, r, a, s;
  for (Tt.sort($o); i = Tt.shift(); ) i.__d && (o = Tt.length, e = void 0, r = (n = (t = i).__v).__e, a = [], s = [], t.__P && ((e = ht({}, n)).__v = n.__v + (9675 + -691 * 14), L.vnode && L.vnode(e), Tr(t.__P, e, n, t.__n, t.__P.namespaceURI, -6261 * 1 + 4124 + 2169 & n.__u ? [r] : null, a, r ?? Xt(n), !!(6219 + -1300 * -6 + -71 * 197 & n.__u), s), e.__v = n.__v, e.__.__k[e.__i] = e, e0(a, e, s), e.__e != r && $s(e)), Tt.length > o && Tt.sort($o));
  Ui.__r = 0;
}
function _s(i, o, t, e, n, r, a, s, g, x, C) {
  var d, m, f, w, k, T = e && e.__k || zs, S = o.length;
  for (t.__d = g, nc(t, o, T), g = t.__d, d = -4531 + 1 * -6614 + 11145; d < S; d++) (f = t.__k[d]) != null && typeof f != "boolean" && typeof f != "function" && (m = -(-2 * 2827 + -3275 + -190 * -47) === f.__i ? jn : T[f.__i] || jn, f.__i = d, Tr(i, f, m, n, r, a, s, g, x, C), w = f.__e, f.ref && m.ref != f.ref && (m.ref && Er(m.ref, null, f), C.push(f.ref, f.__c || w, f)), k == null && w != null && (k = w), -53620 + 1 * 119156 & f.__u || m.__k === f.__k ? (g && typeof f.type == "string" && !i.contains(g) && (g = Xt(m)), g = qs(f, g, i)) : typeof f.type == "function" && void (657 + 1 * -199 + -458) !== f.__d ? g = f.__d : w && (g = w.nextSibling), f.__d = void (-9835 + -37 * -85 + 6690), f.__u &= -(7620 + 1 * 48341 + -1 * -140648));
  t.__d = g, t.__e = k;
}
function nc(i, o, t) {
  var e, n, r, a, s, g = o.length, x = t.length, C = x, d = -3952 + 1 * 5525 + -1 * 1573;
  for (i.__k = [], e = 4136 + -88 * 47; e < g; e++) a = e + d, (n = i.__k[e] = (n = o[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? Nn(null, n, null, null, null) : co(n) ? Nn(et, { children: n }, null, null, null) : void (-1034 + -2 * 1406 + 1 * 3846) === n.constructor && n.__b > -554 + -1 * -8389 + -5 * 1567 ? Nn(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = i, n.__b = i.__b + (-12041 + -2 * -6021), s = ic(n, t, a, C), n.__i = s, r = null, -(337 * 17 + 8054 + -13782) !== s && (C--, (r = t[s]) && (r.__u |= -167087 * -1 + -254099 + 218084)), r == null || r.__v === null ? (-(6361 * -1 + 1 * -8289 + 14651) == s && d--, typeof n.type != "function" && (n.__u |= 65536)) : s !== a && (s == a - (-3859 + 30 * -16 + 4340) ? d = s - a : s == a + (-800 + 1 * 801) ? d++ : s > a ? C > g - a ? d += s - a : d-- : s < a && d++, s !== e + d && (n.__u |= -174652 + -1937 * -124))) : (r = t[a]) && r.key == null && r.__e && -8603 * -1 + 25 * 203 + -13678 == (-1 * -66133 + 156821 + -91882 & r.__u) && (r.__e == i.__d && (i.__d = Xt(r)), tr(r, r, !(1 * 2556 + 4195 * -2 + 5835)), t[a] = null, C--);
  if (C)
    for (e = 2002 + -2002 * 1; e < x; e++) (r = t[e]) != null && -31 * -2 + -1 * -8711 + 1 * -8773 == (13809 * -8 + -241798 + 483342 & r.__u) && (r.__e == i.__d && (i.__d = Xt(r)), tr(r, r));
}
function qs(i, o, t) {
  var e, n;
  if (typeof i.type == "function") {
    for (e = i.__k, n = 1 * -6767 + -1183 * 4 + 11499; e && n < e.length; n++) e[n] && (e[n].__ = i, o = qs(e[n], o, t));
    return o;
  }
  i.__e != o && (t.insertBefore(i.__e, o || null), o = i.__e);
  do
    o = o && o.nextSibling;
  while (o != null && -43 * 226 + -8920 + -18646 * -1 === o.nodeType);
  return o;
}
function ft(i, o) {
  return o = o || [], i == null || typeof i == "boolean" || (co(i) ? i.some(function(t) {
    ft(t, o);
  }) : o.push(i)), o;
}
function ic(i, o, t, e) {
  var n = i.key, r = i.type, a = t - (2016 * 4 + -8995 + 932), s = t + 1, g = o[t];
  if (g === null || g && n == g.key && r === g.type && 2560 * 2 + 7177 + -12297 == (-219739 * -1 + 194297 * -1 + -5 * -21126 & g.__u)) return t;
  if (e > (g != null && -7 * 973 + 7974 * 1 + -1163 == (81707 + -167998 * 1 + 217363 & g.__u) ? 526 * 7 + -8527 + 4846 : 1 * -6073 + -815 + 2 * 3444)) for (; a >= -7351 * -1 + -1067 + 4 * -1571 || s < o.length; ) {
    if (a >= 3271 + 1201 * 7 + 2 * -5839) {
      if ((g = o[a]) && 142 * -23 + -1174 + -120 * -37 == (-133 * 179 + -125043 + -8233 * -34 & g.__u) && n == g.key && r === g.type) return a;
      a--;
    }
    if (s < o.length) {
      if ((g = o[s]) && 4488 + -57 * -53 + -7509 * 1 == (149 * -659 + 17 * 13086 + 6801 & g.__u) && n == g.key && r === g.type) return s;
      s++;
    }
  }
  return -(6 * 1147 + -27 * -79 + 9014 * -1);
}
function Ya(i, o, t) {
  o[-10457 + -1 * -10457] === "-" ? i.setProperty(o, t ?? "") : i[o] = t == null ? "" : typeof t != "number" || ec.test(o) ? t : t + "px";
}
function bi(i, o, t, e, n) {
  var r;
  e: if (o === "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (o in e) t && o in t || Ya(i.style, o, "");
      if (t)
        for (o in t) e && t[o] === e[o] || Ya(i.style, o, t[o]);
    }
  else if (o[2969 * 1 + -8129 + 5160] === "o" && o[977 + 158 * -1 + -1 * 818] === "n") r = o !== (o = o.replace(/(PointerCapture)$|Capture$/i, "$1")), o = o.toLowerCase() in i || o === "onFocusOut" || o === "onFocusIn" ? o.toLowerCase().slice(-5012 * 1 + -9834 + 14848) : o.slice(8464 + -1018 * 3 + -5408), i.l || (i.l = {}), i.l[o + r] = t, t ? e ? t.u = e.u : (t.u = Rr, i.addEventListener(o, r ? qo : _o, r)) : i.removeEventListener(o, r ? qo : _o, r);
  else {
    if (n == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in i) try {
      i[o] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && o[-243 * 13 + -5186 + 8349] !== "-" ? i.removeAttribute(o) : i.setAttribute(o, o == "popover" && -756 + -8 * 365 + 3677 == t ? "" : t));
  }
}
function La(i) {
  return function(o) {
    if (this.l) {
      var t = this.l[o.type + i];
      if (o.t == null) o.t = Rr++;
      else if (o.t < t.u) return;
      return t(L.event ? L.event(o) : o);
    }
  };
}
function Tr(i, o, t, e, n, r, a, s, g, x) {
  var C, d, m, f, w, k, T, S, H, Y, z, M, N, G, j, he, Q = o.type;
  if (void (16351 + 83 * -197) !== o.constructor) return null;
  106 * -43 + 224 + 4462 & t.__u && (g = !!(32 & t.__u), r = [s = o.__e = t.__e]), (C = L.__b) && C(o);
  e: if (typeof Q == "function") try {
    if (S = o.props, H = "prototype" in Q && Q.prototype.render, Y = (C = Q.contextType) && e[C.__c], z = C ? Y ? Y.props.value : C.__ : e, t.__c ? T = (d = o.__c = t.__c).__ = d.__E : (H ? o.__c = d = new Q(S, z) : (o.__c = d = new Me(S, z), d.constructor = Q, d.render = rc), Y && Y.sub(d), d.props = S, d.state || (d.state = {}), d.context = z, d.__n = e, m = d.__d = !(1 * -1381 + -1 * -1879 + -498), d.__h = [], d._sb = []), H && d.__s == null && (d.__s = d.state), H && Q.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = ht({}, d.__s)), ht(d.__s, Q.getDerivedStateFromProps(S, d.__s))), f = d.props, w = d.state, d.__v = o, m) H && Q.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), H && d.componentDidMount != null && d.__h.push(d.componentDidMount);
    else {
      if (H && Q.getDerivedStateFromProps == null && S !== f && d.componentWillReceiveProps != null && d.componentWillReceiveProps(S, z), !d.__e && (d.shouldComponentUpdate != null && !(-4830 + 6310 * -1 + 11141) === d.shouldComponentUpdate(S, d.__s, z) || o.__v === t.__v)) {
        for (o.__v !== t.__v && (d.props = S, d.state = d.__s, d.__d = !(6600 + 6599 * -1)), o.__e = t.__e, o.__k = t.__k, o.__k.forEach(function(le) {
          le && (le.__ = o);
        }), M = 0; M < d._sb.length; M++) d.__h.push(d._sb[M]);
        d._sb = [], d.__h.length && a.push(d);
        break e;
      }
      d.componentWillUpdate != null && d.componentWillUpdate(S, d.__s, z), H && d.componentDidUpdate != null && d.__h.push(function() {
        d.componentDidUpdate(f, w, k);
      });
    }
    if (d.context = z, d.props = S, d.__P = i, d.__e = !(53 * -118 + -485 + -4 * -1685), N = L.__r, G = 0, H) {
      for (d.state = d.__s, d.__d = !1, N && N(o), C = d.render(d.props, d.state, d.context), j = -9509 + -59 * 26 + -1227 * -9; j < d._sb.length; j++) d.__h.push(d._sb[j]);
      d._sb = [];
    } else do
      d.__d = !(11 * 383 + 6679 + -10891), N && N(o), C = d.render(d.props, d.state, d.context), d.state = d.__s;
    while (d.__d && ++G < 17033 + 8504 * -2);
    d.state = d.__s, d.getChildContext != null && (e = ht(ht({}, e), d.getChildContext())), H && !m && d.getSnapshotBeforeUpdate != null && (k = d.getSnapshotBeforeUpdate(f, w)), _s(i, co(he = C != null && C.type === et && C.key == null ? C.props.children : C) ? he : [he], o, t, e, n, r, a, s, g, x), d.base = o.__e, o.__u &= -(9699 + -1 * 9538), d.__h.length && a.push(d), T && (d.__E = d.__ = null);
  } catch (le) {
    o.__v = null, g || r != null ? (o.__e = s, o.__u |= g ? 160 : -8151 + 167 * 49, r[r.indexOf(s)] = null) : (o.__e = t.__e, o.__k = t.__k), L.__e(le, o, t);
  }
  else r == null && o.__v === t.__v ? (o.__k = t.__k, o.__e = t.__e) : o.__e = oc(t.__e, o, t, e, n, r, a, g, x);
  (C = L.diffed) && C(o);
}
function e0(i, o, t) {
  o.__d = void (10637 + -11 * 967);
  for (var e = -7129 + 991 * 9 + 895 * -2; e < t.length; e++) Er(t[e], t[++e], t[++e]);
  L.__c && L.__c(o, i), i.some(function(n) {
    try {
      i = n.__h, n.__h = [], i.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      L.__e(r, n.__v);
    }
  });
}
function oc(i, o, t, e, n, r, a, s, g) {
  var x, C, d, m, f, w, k, T = t.props, S = o.props, H = o.type;
  if (H === "svg" ? n = "http://www.w3.org/2000/svg" : H === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), r != null) {
    for (x = 0; x < r.length; x++) if ((f = r[x]) && "setAttribute" in f == !!H && (H ? f.localName === H : -7 * -577 + -1688 * 1 + 1 * -2348 === f.nodeType)) {
      i = f, r[x] = null;
      break;
    }
  }
  if (i == null) {
    if (H === null) return document.createTextNode(S);
    i = document.createElementNS(n, H, S.is && S), r = null, s = !(-2097 + -1 * -1526 + 572);
  }
  if (H === null) T === S || s && i.data === S || (i.data = S);
  else {
    if (r = r && oi.call(i.childNodes), T = t.props || jn, !s && r != null)
      for (T = {}, x = 0; x < i.attributes.length; x++) T[(f = i.attributes[x]).name] = f.value;
    for (x in T) if (f = T[x], x != "children") {
      if (x == "dangerouslySetInnerHTML") d = f;
      else if (x !== "key" && !(x in S)) {
        if (x == "value" && "defaultValue" in S || x == "checked" && "defaultChecked" in S) continue;
        bi(i, x, null, f, n);
      }
    }
    for (x in S) f = S[x], x == "children" ? m = f : x == "dangerouslySetInnerHTML" ? C = f : x == "value" ? w = f : x == "checked" ? k = f : x === "key" || s && typeof f != "function" || T[x] === f || bi(i, x, f, T[x], n);
    if (C) s || d && (C.__html === d.__html || C.__html === i.innerHTML) || (i.innerHTML = C.__html), o.__k = [];
    else if (d && (i.innerHTML = ""), _s(i, co(m) ? m : [m], o, t, e, H === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, r, a, r ? r[8180 + -8180 * 1] : t.__k && Xt(t, 3919 + -792 * 1 + -59 * 53), s, g), r != null)
      for (x = r.length; x--; ) r[x] != null && Qs(r[x]);
    s || (x = "value", void (-999 + 4343 * 1 + 2 * -1672) !== w && (w !== i[x] || H === "progress" && !w || H === "option" && w !== T[x]) && bi(i, x, w, T[x], n), x = "checked", void (1 * 9742 + -6932 + 2810 * -1) !== k && k !== i[x] && bi(i, x, k, T[x], n));
  }
  return i;
}
function Er(i, o, t) {
  try {
    typeof i == "function" ? i(o) : i.current = o;
  } catch (e) {
    L.__e(e, t);
  }
}
function tr(i, o, t) {
  var e, n;
  if (L.unmount && L.unmount(i), (e = i.ref) && (e.current && e.current !== i.__e || Er(e, null, o)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (r) {
      L.__e(r, o);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (n = 3957 + -3957 * 1; n < e.length; n++) e[n] && tr(e[n], o, t || typeof i.type != "function");
  t || i.__e == null || Qs(i.__e), i.__c = i.__ = i.__e = i.__d = void (1 * 8831 + 7543 + -16374);
}
function rc(i, o, t) {
  return this.constructor(i, t);
}
function Gt(i, o, t) {
  var e, n, r, a;
  L.__ && L.__(i, o), n = (e = typeof t == "function") ? null : t && t.__k || o.__k, r = [], a = [], Tr(o, i = (!e && t || o).__k = ke(et, null, [i]), n || jn, jn, o.namespaceURI, !e && t ? [t] : n ? null : o.firstChild ? oi.call(o.childNodes) : null, r, !e && t ? t : n ? n.__e : o.firstChild, e, a), e0(r, i, a);
}
function Pr(i, o) {
  Gt(i, o, Pr);
}
function Yr(i, o, t) {
  var e, n, r, a, s = ht({}, i.props);
  for (r in i.type && i.type.defaultProps && (a = i.type.defaultProps), o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : s[r] = void (-1 * 9661 + -2761 + 6211 * 2) === o[r] && void (9902 * -1 + -213 * 12 + -12458 * -1) !== a ? a[r] : o[r];
  return arguments.length > -12 * -326 + -2478 + -358 * 4 && (s.children = arguments.length > -14949 + -534 * -28 ? oi.call(arguments, -6 * 810 + 5 * -301 + 6367) : t), Nn(i.type, s, e || i.key, n || i.ref, null);
}
function ri(i, o) {
  var t = { __c: o = "__cC" + Js++, __: i, Consumer: function(e, n) {
    return e.children(n);
  }, Provider: function(e) {
    var n, r;
    return this.getChildContext || (n = [], (r = {})[o] = this, this.getChildContext = function() {
      return r;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && n.some(function(s) {
        s.__e = !0, er(s);
      });
    }, this.sub = function(a) {
      n.push(a);
      var s = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        n && n.splice(n.indexOf(a), 1), s && s.call(a);
      };
    }), e.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
oi = zs.slice, L = { __e: function(i, o, t, e) {
  for (var n, r, a; o = o.__; ) if ((n = o.__c) && !n.__) try {
    if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(i)), a = n.__d), n.componentDidCatch != null && (n.componentDidCatch(i, e || {}), a = n.__d), a) return n.__E = n;
  } catch (s) {
    i = s;
  }
  throw i;
} }, Ms = -26 * 60 + -13 * 297 + 3 * 1807, js = function(i) {
  return i != null && i.constructor == null;
}, Me.prototype.setState = function(i, o) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ht({}, this.state), typeof i == "function" && (i = i(ht({}, t), this.props)), i && ht(t, i), i != null && this.__v && (o && this._sb.push(o), er(this));
}, Me.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !(-2307 + -159 * -31 + -2622), i && this.__h.push(i), er(this));
}, Me.prototype.render = et, Tt = [], Us = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $o = function(i, o) {
  return i.__v.__b - o.__v.__b;
}, Ui.__r = -9073 * 1 + 4 * -2393 + 18645, Rr = -724 * -4 + -7353 + 4457, _o = La(!(-9680 + 25 * 259 + 3206)), qo = La(!(-9333 + 968 * 6 + -15 * -235)), Js = 0;
function Lr() {
  return (Lr = Object.assign ? Object.assign.bind() : function(i) {
    for (var o = -45 * 93 + -6110 + 10296; o < arguments.length; o++) {
      var t = arguments[o];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }).apply(this, arguments);
}
var ac = ["context", "children"];
function sc(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var o = i.children, t = function(e, n) {
    if (e == null) return {};
    var r, a, s = {}, g = Object.keys(e);
    for (a = 2387 + 3295 * -3 + -3749 * -2; a < g.length; a++) n.indexOf(r = g[a]) >= 8 * 278 + -1340 + 52 * -17 || (s[r] = e[r]);
    return s;
  }(i, ac);
  return Yr(o, t);
}
function gc() {
  var i = {};
  i.detail = {}, i.bubbles = !(1 * -4397 + -9282 + 13679), i.cancelable = !(-1093 + 604 * 15 + -7967);
  var o = new CustomEvent("_preact", i);
  this.dispatchEvent(o), this._vdom = ke(sc, Lr({}, this._props, { context: o.detail.context }), function t(e, n) {
    if (21 * -147 + 961 * 6 + -2676 === e.nodeType) return e.data;
    if (4 * 1282 + 8052 + -13179 !== e.nodeType) return null;
    var r = [], a = {}, s = -160 * -44 + -2576 + 72 * -62, g = e.attributes, x = e.childNodes;
    for (s = g.length; s--; ) g[s].name !== "slot" && (a[g[s].name] = g[s].value, a[t0(g[s].name)] = g[s].value);
    for (s = x.length; s--; ) {
      var C = t(x[s], null), d = x[s].slot;
      d ? a[d] = ke(Da, { name: d }, C) : r[s] = C;
    }
    var m = n ? ke(Da, null, r) : r;
    return ke(n || e.nodeName.toLowerCase(), a, m);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Pr : Gt)(this._vdom, this._root);
}
function t0(i) {
  return i.replace(/-(\w)/g, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function cc(i, o, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void (6161 * 1 + 359 * -16 + 139 * -3), e[t0(i)] = t, this._vdom = Yr(this._vdom, e), Gt(this._vdom, this._root);
  }
}
function lc() {
  Gt(this._vdom = null, this._root);
}
function Da(i, o) {
  var t = this;
  return ke("slot", Lr({}, i, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = o;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function xc(i, o, t, e) {
  function n() {
    var r = Reflect.construct(HTMLElement, [], n);
    return r._vdomComponent = i, r._root = r, r;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = gc, n.prototype.attributeChangedCallback = cc, n.prototype.disconnectedCallback = lc, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), n.observedAttributes = t, t.forEach(function(r) {
    Object.defineProperty(n.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(r, null, a) : (this._props || (this._props = {}), this._props[r] = a, this.connectedCallback());
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(r, a);
    } });
  }), customElements.define(o, n);
}
var uc = -34 * -19 + 1762 * 2 + -4170;
function Z(i, o, t, e, n, r) {
  o || (o = {});
  var a, s, g = o;
  if ("ref" in g)
    for (s in g = {}, o) s == "ref" ? a = o[s] : g[s] = o[s];
  var x = {};
  x.type = i, x.props = g, x.key = t, x.ref = a, x.__k = null, x.__ = null, x.__b = 0, x.__e = null, x.__d = void (1 * -4660 + 2409 * 2 + -158), x.__c = null, x.constructor = void (266 * 19 + -9104 + 4050), x.__v = --uc, x.__i = -(-1 * 3732 + 6981 + -3248), x.__u = 0, x.__source = n, x.__self = r;
  var C = x;
  if (typeof i == "function" && (a = i.defaultProps))
    for (s in a) void (-3 * 1475 + -3540 + 177 * 45) === g[s] && (g[s] = a[s]);
  return L.vnode && L.vnode(C), C;
}
var Re = function() {
  return Re = Object.assign || function(o) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (o[r] = t[r]);
    }
    return o;
  }, Re.apply(this, arguments);
};
function dn(i, o, t) {
  if (t || arguments.length === 2) for (var e = 0, n = o.length, r; e < n; e++)
    (r || !(e in o)) && (r || (r = Array.prototype.slice.call(o, 0, e)), r[e] = o[e]);
  return i.concat(r || Array.prototype.slice.call(o));
}
function Ic(i) {
  var o = Object.create(null);
  return function(t) {
    return o[t] === void 0 && (o[t] = i(t)), o[t];
  };
}
var dc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Cc = Ic(function(i) {
  return dc.test(i) || i.charCodeAt(-2347 + 2957 * 2 + 29 * -123) === 309 + 51 * -134 + 6636 && i.charCodeAt(-11600 + -9 * -1289) === 7 * 263 + 7677 * -1 + 5946 && i.charCodeAt(-83 * 116 + -6378 + -116 * -138) < 91;
}), Zt, oe, Ro, Na, Cn = -155 * 3 + -6095 + 40 * 164, n0 = [], se = L, Fa = se.__b, Xa = se.__r, Ma = se.diffed, ja = se.__c, Ua = se.unmount, Ja = se.__;
function vn(i, o) {
  se.__h && se.__h(oe, i, Cn || o), Cn = -4937 * 1 + -911 + 5848;
  var t = {};
  t.__ = [], t.__h = [];
  var e = oe.__H || (oe.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function je(i) {
  return Cn = 14949 + 202 * -74, Dr(r0, i);
}
function Dr(i, o, t) {
  var e = vn(Zt++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(o) : r0(void (5986 * -1 + -51 * 169 + 14605), o), function(s) {
    var g = e.__N ? e.__N[0] : e.__[0], x = e.t(g, s);
    g !== x && (e.__N = [x, e.__[-1 * 629 + 1718 + -16 * 68]], e.__c.setState({}));
  }], e.__c = oe, !oe.u)) {
    var n = function(s, g, x) {
      if (!e.__c.__H) return !0;
      var C = e.__c.__H.__.filter(function(m) {
        return !!m.__c;
      });
      if (C.every(function(m) {
        return !m.__N;
      })) return !r || r.call(this, s, g, x);
      var d = !(662 * 8 + 2878 + -8173);
      return C.forEach(function(m) {
        if (m.__N) {
          var f = m.__[0];
          m.__ = m.__N, m.__N = void 0, f !== m.__[0] && (d = !0);
        }
      }), !(!d && e.__c.props === s) && (!r || r.call(this, s, g, x));
    };
    oe.u = !(8902 + 1322 * -1 + -7580);
    var r = oe.shouldComponentUpdate, a = oe.componentWillUpdate;
    oe.componentWillUpdate = function(s, g, x) {
      if (this.__e) {
        var C = r;
        r = void (-197 * -44 + -2428 + -6240), n(s, g, x), r = C;
      }
      a && a.call(this, s, g, x);
    }, oe.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function ye(i, o) {
  var t = vn(Zt++, 3);
  !se.__s && Nr(t.__H, o) && (t.__ = i, t.i = o, oe.__H.__h.push(t));
}
function wn(i, o) {
  var t = vn(Zt++, 4);
  !se.__s && Nr(t.__H, o) && (t.__ = i, t.i = o, oe.__h.push(t));
}
function kt(i) {
  return Cn = 8209 * -1 + -149 * -8 + 7022, Le(function() {
    var o = {};
    return o.current = i, o;
  }, []);
}
function i0(i, o, t) {
  Cn = 5073 + 949 * -7 + -8 * -197, wn(function() {
    return typeof i == "function" ? (i(o()), function() {
      return i(null);
    }) : i ? (i.current = o(), function() {
      return i.current = null;
    }) : void (-1918 + -7 * -274);
  }, t == null ? t : t.concat(i));
}
function Le(i, o) {
  var t = vn(Zt++, 7);
  return Nr(t.__H, o) && (t.__ = i(), t.__H = o, t.__h = i), t.__;
}
function pn(i, o) {
  return Cn = -680 + 3 * -863 + -3277 * -1, Le(function() {
    return i;
  }, o);
}
function Jt(i) {
  var o = oe.context[i.__c], t = vn(Zt++, 3 * -2007 + -5290 + 4 * 2830);
  return t.c = i, o ? (t.__ == null && (t.__ = !(4893 * -1 + -183 * 33 + 1 * 10932), o.sub(oe)), o.props.value) : i.__;
}
function Ji(i, o) {
  se.useDebugValue && se.useDebugValue(o ? o(i) : i);
}
function o0() {
  var i = vn(Zt++, 11);
  if (!i.__) {
    for (var o = oe.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [0, -67 * 47 + -1331 * 1 + 80 * 56]);
    i.__ = "P" + t[0] + "-" + t[-6937 + -3802 * 1 + 5 * 2148]++;
  }
  return i.__;
}
function pc() {
  for (var i; i = n0.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(Oi), i.__H.__h.forEach(nr), i.__H.__h = [];
  } catch (o) {
    i.__H.__h = [], se.__e(o, i.__v);
  }
}
se.__b = function(i) {
  oe = null, Fa && Fa(i);
}, se.__ = function(i, o) {
  i && o.__k && o.__k.__m && (i.__m = o.__k.__m), Ja && Ja(i, o);
}, se.__r = function(i) {
  Xa && Xa(i), Zt = 6535 + 5 * 686 + -9965;
  var o = (oe = i.__c).__H;
  o && (Ro === oe ? (o.__h = [], oe.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (4725 + 4447 * -1 + -278 * 1);
  })) : (o.__h.forEach(Oi), o.__h.forEach(nr), o.__h = [], Zt = 1246 + -7268 * -1 + -18 * 473)), Ro = oe;
}, se.diffed = function(i) {
  Ma && Ma(i);
  var o = i.__c;
  o && o.__H && (o.__H.__h.length && (-3861 * -1 + -8408 * 1 + 4548 !== n0.push(o) && Na === se.requestAnimationFrame || ((Na = se.requestAnimationFrame) || hc)(pc)), o.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-9952 + -1 * -4731 + -1 * -5221);
  })), Ro = oe = null;
}, se.__c = function(i, o) {
  o.some(function(t) {
    try {
      t.__h.forEach(Oi), t.__h = t.__h.filter(function(e) {
        return !e.__ || nr(e);
      });
    } catch (e) {
      o.some(function(n) {
        n.__h && (n.__h = []);
      }), o = [], se.__e(e, t.__v);
    }
  }), ja && ja(i, o);
}, se.unmount = function(i) {
  Ua && Ua(i);
  var o, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      Oi(e);
    } catch (n) {
      o = n;
    }
  }), t.__H = void 0, o && se.__e(o, t.__v));
};
var za = typeof requestAnimationFrame == "function";
function hc(i) {
  var o, t = function() {
    clearTimeout(e), za && cancelAnimationFrame(o), setTimeout(i);
  }, e = setTimeout(t, 100);
  za && (o = requestAnimationFrame(t));
}
function Oi(i) {
  var o = oe, t = i.__c;
  typeof t == "function" && (i.__c = void (17168 + 116 * -148), t()), oe = o;
}
function nr(i) {
  var o = oe;
  i.__c = i.__(), oe = o;
}
function Nr(i, o) {
  return !i || i.length !== o.length || o.some(function(t, e) {
    return t !== i[e];
  });
}
function r0(i, o) {
  return typeof o == "function" ? o(i) : o;
}
function a0(i, o) {
  for (var t in o) i[t] = o[t];
  return i;
}
function ir(i, o) {
  for (var t in i) if (t !== "__source" && !(t in o)) return !0;
  for (var e in o) if (e !== "__source" && i[e] !== o[e]) return !(1 * 229 + -10 * -468 + -4909);
  return !(-8704 + 532 * 2 + -7641 * -1);
}
function or(i, o) {
  this.props = i, this.context = o;
}
function fc(i, o) {
  function t(n) {
    var r = this.props.ref, a = r == n.ref;
    return !a && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, n) || !a : ir(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, ke(i, n);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !(-1 * -3469 + -627 + -203 * 14), e.__f = !(2220 + 6 * 1026 + -8376), e;
}
(or.prototype = new Me()).isPureReactComponent = !0, or.prototype.shouldComponentUpdate = function(i, o) {
  return ir(this.props, i) || ir(this.state, o);
};
var Qa = L.__b;
L.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), Qa && Qa(i);
};
var mc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 8301 + -1 * -2557 + -6947;
function s0(i) {
  function o(t) {
    var e = a0({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return o.$$typeof = mc, o.render = o, o.prototype.isReactComponent = o.__f = !(-5200 + 1 * 7304 + -2104), o.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", o;
}
var $a = function(i, o) {
  return i == null ? null : ft(ft(i).map(o));
}, Ac = { map: $a, forEach: $a, count: function(i) {
  return i ? ft(i).length : -2 * 4012 + -7024 + 15048;
}, only: function(i) {
  var o = ft(i);
  if (-4493 * -1 + 162 * 21 + 7894 * -1 !== o.length) throw "Children.only";
  return o[-6029 + 1 * 5144 + -1 * -885];
}, toArray: ft }, bc = L.__e;
L.__e = function(i, o, t, e) {
  if (i.then) {
    for (var n, r = o; r = r.__; ) if ((n = r.__c) && n.__c) return o.__e == null && (o.__e = t.__e, o.__k = t.__k), n.__c(i, o);
  }
  bc(i, o, t, e);
};
var _a = L.unmount;
function g0(i, o, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = a0({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = o), i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return g0(e, o, t);
  })), i;
}
function c0(i, o, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return c0(e, o, t);
  }), i.__c && i.__c.__P === o && (i.__e && t.appendChild(i.__e), i.__c.__e = !(626 * -3 + 4518 + -2640), i.__c.__P = t)), i;
}
function Ki() {
  this.__u = -247 + -13 * -19, this.t = null, this.__b = null;
}
function l0(i) {
  var o = i.__.__c;
  return o && o.__a && o.__a(i);
}
function yc(i) {
  var o, t, e;
  function n(r) {
    if (o || (o = i()).then(function(a) {
      t = a.default || a;
    }, function(a) {
      e = a;
    }), e) throw e;
    if (!t) throw o;
    return ke(t, r);
  }
  return n.displayName = "Lazy", n.__f = !(-1 * 8945 + 5130 + -35 * -109), n;
}
function Rn() {
  this.u = null, this.o = null;
}
L.unmount = function(i) {
  var o = i.__c;
  o && o.__R && o.__R(), o && -3 * -987 + -4219 * -2 + 421 * -27 & i.__u && (i.type = null), _a && _a(i);
}, (Ki.prototype = new Me()).__c = function(i, o) {
  var t = o.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = l0(e.__v), r = !(-90 * 17 + -14 * 397 + 3 * 2363), a = function() {
    r || (r = !(1 * 9672 + 358 * -8 + -46 * 148), t.__R = null, n ? n(s) : s());
  };
  t.__R = a;
  var s = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var g = e.state.__a;
        e.__v.__k[3571 + 3571 * -1] = c0(g, g.__c.__P, g.__c.__O);
      }
      var x;
      for (e.setState({ __a: e.__b = null }); x = e.t.pop(); ) x.forceUpdate();
    }
  };
  e.__u++ || -7081 * 1 + 9612 + -2499 & o.__u || e.setState({ __a: e.__b = e.__v.__k[0] }), i.then(a, a);
}, Ki.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ki.prototype.render = function(i, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[0].__c;
      this.__v.__k[8627 * -1 + -6462 + 79 * 191] = g0(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = o.__a && ke(et, null, i.fallback);
  return n && (n.__u &= -(6 * -554 + 4 * -1157 + 7985)), [ke(et, null, o.__a ? null : i.children), n];
};
var qa = function(i, o, t) {
  if (++t[-2059 * -2 + 1223 * 3 + -7786] === t[1 * -9901 + -8695 + -4 * -4649] && i.o.delete(o), i.props.revealOrder && (i.props.revealOrder[4139 * -1 + 5073 + -2 * 467] !== "t" || !i.o.size)) for (t = i.u; t; ) {
    for (; t.length > 199 * -23 + -1 * -1013 + 3567; ) t.pop()();
    if (t[3837 + 349 * -1 + -3487] < t[-1 * 2056 + 9886 + -290 * 27]) break;
    i.u = t = t[5 * -745 + 7751 + -4024];
  }
};
function vc(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function wc(i) {
  var o = this, t = i.i;
  o.componentWillUnmount = function() {
    Gt(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== t && o.componentWillUnmount(), o.l || (o.i = t, o.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(2971 + -67 * 78 + 2255 * 1);
  }, appendChild: function(e) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> -3715 + 1 * 3443 + 273, 16 * -278 + 8961 + -1504 * 3), o.i.removeChild(e);
  } }), Gt(ke(vc, { context: o.context }, i.__v), o.l);
}
function Sc(i, o) {
  var t = {};
  t.__v = i, t.i = o;
  var e = ke(wc, t);
  return e.containerInfo = o, e;
}
(Rn.prototype = new Me()).__a = function(i) {
  var o = this, t = l0(o.__v), e = o.o.get(i);
  return e[-485 * -15 + -5366 + -1909]++, function(n) {
    var r = function() {
      o.props.revealOrder ? (e.push(n), qa(o, i, e)) : n();
    };
    t ? t(r) : r();
  };
}, Rn.prototype.render = function(i) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = ft(i.children);
  i.revealOrder && i.revealOrder[-7 * 317 + 1 * 9391 + 1793 * -4] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.o.set(o[t], this.u = [-7171 + -727 * 3 + 9353, 411 * -23 + 9787 + 167 * -2, this.u]);
  return i.children;
}, Rn.prototype.componentDidUpdate = Rn.prototype.componentDidMount = function() {
  var i = this;
  this.o.forEach(function(o, t) {
    qa(i, t, o);
  });
};
var x0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -28839 * 3 + 9 * -12303 + 257347, Bc = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Gc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Zc = /[A-Z0-9]/g, kc = typeof document < "u", Wc = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function Hc(i, o, t) {
  return o.__k == null && (o.textContent = ""), Gt(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
function Oc(i, o, t) {
  return Pr(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
Me.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(Me.prototype, i, { configurable: !(-4904 + 1 * 1913 + 2991), get: function() {
    return this["UNSAFE_" + i];
  }, set: function(o) {
    var t = {};
    t.configurable = !(-5855 + -4551 * -1 + 1304), t.writable = !(-8133 + -1 * -2244 + 5889 * 1), t.value = o, Object.defineProperty(this, i, t);
  } });
});
var es = L.event;
function Kc() {
}
function Vc() {
  return this.cancelBubble;
}
function Rc() {
  return this.defaultPrevented;
}
L.event = function(i) {
  return es && (i = es(i)), i.persist = Kc, i.isPropagationStopped = Vc, i.isDefaultPrevented = Rc, i.nativeEvent = i;
};
var Vi = {};
Vi.enumerable = !(-6301 * 1 + 4537 + 5 * 353), Vi.configurable = !(-1 * -88 + -6979 + 1 * 6891), Vi.get = function() {
  return this.class;
};
var Fr, Tc = Vi, ts = L.vnode;
L.vnode = function(i) {
  typeof i.type == "string" && function(o) {
    var t = o.props, e = o.type, n = {};
    for (var r in t) {
      var a = t[r];
      if (!(r === "value" && "defaultValue" in t && a == null || kc && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var s = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && a === !0 ? a = "" : s === "translate" && a === "no" ? a = !1 : s === "ondoubleclick" ? r = "ondblclick" : s !== "onchange" || e !== "input" && e !== "textarea" || Wc(t.type) ? s === "onfocus" ? r = "onfocusin" : s === "onblur" ? r = "onfocusout" : Gc.test(r) ? r = s : -(8783 * -1 + -2245 + 11029) === e.indexOf("-") && Bc.test(r) ? r = r.replace(Zc, "-$&").toLowerCase() : a === null && (a = void 0) : s = r = "oninput", s === "oninput" && n[r = s] && (r = "oninputCapture"), n[r] = a;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = ft(t.children).forEach(function(g) {
      g.props.selected = -(-10348 + 1 * 10349) != n.value.indexOf(g.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = ft(t.children).forEach(function(g) {
      g.props.selected = n.multiple ? n.defaultValue.indexOf(g.props.value) != -1 : n.defaultValue == g.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", Tc)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), o.props = n;
  }(i), i.$$typeof = x0, ts && ts(i);
};
var ns = L.__r;
L.__r = function(i) {
  ns && ns(i), Fr = i.__c;
};
var is = L.diffed;
L.diffed = function(i) {
  is && is(i);
  var o = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), Fr = null;
};
var Ae = {};
Ae.readContext = function(i) {
  return Fr.__n[i.__c].props.value;
}, Ae.useCallback = pn, Ae.useContext = Jt, Ae.useDebugValue = Ji, Ae.useDeferredValue = C0, Ae.useEffect = ye, Ae.useId = o0, Ae.useImperativeHandle = i0, Ae.useInsertionEffect = h0, Ae.useLayoutEffect = wn, Ae.useMemo = Le, Ae.useReducer = Dr, Ae.useRef = kt, Ae.useState = je, Ae.useSyncExternalStore = f0, Ae.useTransition = p0;
var u0 = {};
u0.current = Ae;
var I0 = {};
I0.ReactCurrentDispatcher = u0;
var Ec = I0;
function Pc(i) {
  return ke.bind(null, i);
}
function lo(i) {
  return !!i && i.$$typeof === x0;
}
function Yc(i) {
  return lo(i) && i.type === et;
}
function Lc(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function Dc(i) {
  return lo(i) ? Yr.apply(null, arguments) : i;
}
function Nc(i) {
  return !!i.__k && (Gt(null, i), !(2748 + 12 * -229));
}
function Fc(i) {
  return i && (i.base || i.nodeType === 1 && i) || null;
}
var Xc = function(i, o) {
  return i(o);
}, Mc = function(i, o) {
  return i(o);
}, jc = et;
function d0(i) {
  i();
}
function C0(i) {
  return i;
}
function p0() {
  return [!(-10980 + 139 * 79), d0];
}
var h0 = wn, Uc = lo;
function f0(i, o) {
  var t = o(), e = je({ h: { __: t, v: o } }), n = e[4065 + -3 * 1355].h, r = e[-1 * -4883 + -7800 + 2918];
  return wn(function() {
    n.__ = t, n.v = o, To(n) && r({ h: n });
  }, [i, t, o]), ye(function() {
    return To(n) && r({ h: n }), i(function() {
      To(n) && r({ h: n });
    });
  }, [i]), t;
}
function To(i) {
  var o, t, e = i.v, n = i.__;
  try {
    var r = e();
    return !((o = n) === (t = r) && (5331 + 1 * -6183 + 6 * 142 !== o || (-8518 * 1 + -5552 + 14071) / o == 1 / t) || o != o && t != t);
  } catch {
    return !(-1926 + 229 * 13 + 1051 * -1);
  }
}
var P = {};
P.useState = je, P.useId = o0, P.useReducer = Dr, P.useEffect = ye, P.useLayoutEffect = wn, P.useInsertionEffect = h0, P.useTransition = p0, P.useDeferredValue = C0, P.useSyncExternalStore = f0, P.startTransition = d0, P.useRef = kt, P.useImperativeHandle = i0, P.useMemo = Le, P.useCallback = pn, P.useContext = Jt, P.useDebugValue = Ji, P.version = "17.0.2", P.Children = Ac, P.render = Hc, P.hydrate = Oc, P.unmountComponentAtNode = Nc, P.createPortal = Sc, P.createElement = ke, P.createContext = ri, P.createFactory = Pc, P.cloneElement = Dc, P.createRef = tc, P.Fragment = et, P.isValidElement = lo, P.isElement = Uc, P.isFragment = Yc, P.isMemo = Lc, P.findDOMNode = Fc, P.Component = Me, P.PureComponent = or, P.memo = fc, P.forwardRef = s0, P.flushSync = Mc, P.unstable_batchedUpdates = Xc, P.StrictMode = jc, P.Suspense = Ki, P.SuspenseList = Rn, P.lazy = yc, P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ec;
var Mt = P, Jc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zc(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function Qc(i) {
  return i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function $c(i) {
  return i && Object.prototype.hasOwnProperty.call(i, "default") && Object.keys(i).length === 1 ? i.default : i;
}
function _c(i) {
  if (i.__esModule) return i;
  var o = i.default;
  if (typeof o == "function") {
    var t = function e() {
      return this instanceof e ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
    };
    t.prototype = o.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(i).forEach(function(e) {
    var n = Object.getOwnPropertyDescriptor(i, e);
    Object.defineProperty(t, e, n.get ? n : {
      enumerable: !0,
      get: function() {
        return i[e];
      }
    });
  }), t;
}
const qc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Jc,
  getAugmentedNamespace: _c,
  getDefaultExportFromCjs: zc,
  getDefaultExportFromNamespaceIfNotNamed: $c,
  getDefaultExportFromNamespaceIfPresent: Qc
}, Symbol.toStringTag, { value: "Module" }));
var el = function(o, t, e, n) {
  var r = e ? e.call(n, o, t) : void 0;
  if (r !== void (6794 + 23 * -87 + -4793)) return !!r;
  if (o === t) return !0;
  if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
  var a = Object.keys(o), s = Object.keys(t);
  if (a.length !== s.length) return !1;
  for (var g = Object.prototype.hasOwnProperty.bind(t), x = 0; x < a.length; x++) {
    var C = a[x];
    if (!g(C)) return !1;
    var d = o[C], m = t[C];
    if (r = e ? e.call(n, d, m, C) : void 0, r === !1 || r === void (3564 + -445 * -11 + -11 * 769) && d !== m) return !1;
  }
  return !0;
};
const tl = qc.getDefaultExportFromCjs(el);
var ie = "-ms-", Fn = "-moz-", ee = "-webkit-", m0 = "comm", xo = "rule", Xr = "decl", nl = "@import", A0 = "@keyframes", il = "@layer", b0 = Math.abs, Mr = String.fromCharCode, rr = Object.assign;
function ol(i, o) {
  return fe(i, 5632 + -21 * 457 + 3965) ^ -7444 + -3 * 3197 + 17080 ? (((o << -1 * -9659 + -721 * -1 + -10378 * 1 ^ fe(i, -7924 + -1929 * -3 + -2137 * -1)) << 4679 + -1 * -2925 + -7602 ^ fe(i, 1 * -4648 + -113 * 68 + 12333)) << 408 * -11 + 1154 * -7 + 12568 * 1 ^ fe(i, 5689 * 1 + -4814 + -873)) << 9155 + 213 * -40 + 633 * -1 ^ fe(i, -8 * 478 + -7864 + 11691) : -11 * 395 + 336 + 19 * 211;
}
function y0(i) {
  return i.trim();
}
function dt(i, o) {
  return (i = o.exec(i)) ? i[-193 * -18 + -847 + -2627] : i;
}
function D(i, o, t) {
  return i.replace(o, t);
}
function Ri(i, o, t) {
  return i.indexOf(o, t);
}
function fe(i, o) {
  return i.charCodeAt(o) | -5585 + -3357 * 1 + 526 * 17;
}
function hn(i, o, t) {
  return i.slice(o, t);
}
function at(i) {
  return i.length;
}
function v0(i) {
  return i.length;
}
function Tn(i, o) {
  return o.push(i), i;
}
function rl(i, o) {
  return i.map(o).join("");
}
function os(i, o) {
  return i.filter(function(t) {
    return !dt(t, o);
  });
}
var uo = -1 * -5331 + 6608 + -11938, fn = 1, w0 = -4956 + -177 * -28, Je = 7727 + 7727 * -1, ue = 4076 * 1 + -75 * 3 + 3851 * -1, Sn = "";
function Io(i, o, t, e, n, r, a, s) {
  var g = {};
  return g.value = i, g.root = o, g.parent = t, g.type = e, g.props = n, g.children = r, g.line = uo, g.column = fn, g.length = a, g.return = "", g.siblings = s, g;
}
function yt(i, o) {
  return rr(Io("", null, null, "", null, null, 4283 + -1 * 4283, i.siblings), i, { length: -i.length }, o);
}
function an(i) {
  for (; i.root; ) i = yt(i.root, { children: [i] });
  Tn(i, i.siblings);
}
function al() {
  return ue;
}
function sl() {
  return ue = Je > 152 + -290 * 27 + 7678 ? fe(Sn, --Je) : 19 * 453 + 5799 + 1029 * -14, fn--, ue === -11 * 25 + -157 * -9 + -1128 && (fn = 133 * -22 + 758 + -1 * -2169, uo--), ue;
}
function qe() {
  return ue = Je < w0 ? fe(Sn, Je++) : 2863 + 3 * -1237 + 848, fn++, ue === -58 * -2 + -1 * -3601 + -3707 && (fn = -7039 + 39 * -91 + 1 * 10589, uo++), ue;
}
function Nt() {
  return fe(Sn, Je);
}
function Ti() {
  return Je;
}
function Co(i, o) {
  return hn(Sn, i, o);
}
function ar(i) {
  switch (i) {
    case 7 * 167 + -2638 + 1469:
    case 1 * 5938 + -7329 + 20 * 70:
    case -1 * 3979 + -2423 + 6412:
    case 13:
    case -10087 + -10119 * -1:
      return 2 * -1876 + -1934 + 5691;
    case -3781 * 1 + -2114 + -312 * -19:
    case 2219 * 4 + 2 * -1861 + -1 * 5111:
    case 31 * -91 + 8972 + -6107:
    case -2373 * -1 + 6668 + 1 * -8994:
    case 1679 * 5 + -4 * -134 + -7 * 1267:
    case 64:
    case -4918 + 4 * 1261:
    case 8053 * 1 + -314 + 120 * -64:
    case 123:
    case -8314 * 1 + -2 * 2897 + 14233 * 1:
      return -3 * -3106 + 3513 + -12827;
    case -16738 + -17 * -988:
      return 3747 + -213 * 27 + 2007;
    case -103 * 3 + -847 + -238 * -5:
    case 2133 * 1 + -197 * -1 + -2291:
    case 1 * 5518 + -9491 + 4013:
    case -77 * -47 + 1765 + 1 * -5293:
      return -5 * -995 + -7 * 4 + -4945;
    case -2323 * -1 + 3832 + -6114:
    case 8220 + 1 * -2515 + -5612:
      return 1;
  }
  return -3 * 685 + -13 * 727 + 5753 * 2;
}
function gl(i) {
  return uo = fn = -5539 + -19 * 6 + 5654, w0 = at(Sn = i), Je = 5750 + 8599 * 1 + -14349, [];
}
function cl(i) {
  return Sn = "", i;
}
function Eo(i) {
  return y0(Co(Je - (-1 * 5299 + 161 * 27 + 953), sr(i === 37 * 86 + 7218 + -61 * 169 ? i + (7437 + -107 * -55 + 36 * -370) : i === 1 * -9431 + 467 * -2 + 1 * 10405 ? i + (-33 * -59 + 7997 + 163 * -61) : i)));
}
function ll(i) {
  for (; (ue = Nt()) && ue < -2 * 2005 + 1 * -43 + 4086; ) qe();
  return ar(i) > -888 * -11 + -7322 + 611 * -4 || ar(ue) > 6189 + 1031 * -6 ? "" : " ";
}
function xl(i, o) {
  for (; --o && qe() && !(ue < 9951 + 43 * -15 + -9258 || ue > 76 * -53 + 5 * -657 + 1 * 7415 || ue > -5323 + -6592 * -1 + -1212 && ue < 5 + -3 * -20 || ue > 1 * 9825 + 8437 + 16 * -1137 && ue < -2809 + 2 * -2792 + 30 * 283); ) ;
  return Co(i, Ti() + (o < -3805 * 1 + 1 * -8773 + 12584 && Nt() == -1 * 1087 + 8258 + 11 * -649 && qe() == -7641 * 1 + 7180 + 493));
}
function sr(i) {
  for (; qe(); ) switch (ue) {
    case i:
      return Je;
    case 34:
    case -9594 + -6 * -1654 + -291 * 1:
      i !== 107 * -47 + 9044 + -1327 * 3 && i !== 23 * 332 + -3843 + -1877 * 2 && sr(ue);
      break;
    case 1174 * 6 + -3282 + -3722 * 1:
      i === 151 * -10 + 5409 + -3858 && sr(i);
      break;
    case -8047 * 1 + 9412 + -67 * 19:
      qe();
      break;
  }
  return Je;
}
function ul(i, o) {
  for (; qe() && i + ue !== 9 * 883 + -4646 + 3254 * -1 + (2137 * 1 + -35 * -5 + 1151 * -2); ) if (i + ue === 6179 + -6 * 1004 + -113 * 1 + (2230 + 1 * 541 + -2729 * 1) && Nt() === -5482 + 1 * 5529) break;
  return "/*" + Co(o, Je - (-1 * -1099 + 8 * 626 + -6106)) + "*" + Mr(i === 7990 + 7019 * 1 + -14962 ? i : qe());
}
function Il(i) {
  for (; !ar(Nt()); ) qe();
  return Co(i, Je);
}
function dl(i) {
  return cl(Ei("", null, null, null, [""], i = gl(i), -4604 + 2 * 2729 + -854, [4903 + -11 * -30 + -5233], i));
}
function Ei(i, o, t, e, n, r, a, s, g) {
  for (var x = 0, C = -55 * -151 + 9366 + -1 * 17671, d = a, m = -6894 + -2298 * -3, f = 132 * 51 + 1 * 3849 + -10581, w = -1 * 8389 + -53 + 2 * 4221, k = -25 * 346 + 2443 + 64 * 97, T = 8 * -101 + 8971 + -8162, S = 1, H = 5400 + 4933 * -1 + -467 * 1, Y = "", z = n, M = r, N = e, G = Y; T; ) switch (w = H, H = qe()) {
    case 40:
      if (w != -4354 * 1 + 26 * 223 + 4 * -334 && fe(G, d - (-4099 + 1 * 8189 + -3 * 1363)) == -34 * 278 + -2189 + 11699 * 1) {
        Ri(G += D(Eo(H), "&", "&\f"), "&\f", b0(x ? s[x - (2 * 722 + -9109 + 7666)] : 0)) != -(-175 * 9 + -1 * 1663 + 3239 * 1) && (S = -(605 * -10 + -4431 + -1747 * -6));
        break;
      }
    case 5 * -460 + 1 * -1613 + 1 * 3947:
    case 1454 * 4 + -14 * -349 + -1 * 10663:
    case 234 * 5 + -6534 + 5455:
      G += Eo(H);
      break;
    case 1388 * 2 + 6211 + 134 * -67:
    case -2305 + -5 * -463:
    case 8161 + 12 * -679:
    case 123 * 72 + -8181 + 1 * -643:
      G += ll(w);
      break;
    case -6411 + 4 * 972 + 523 * 5:
      G += xl(Ti() - (-2003 + 12 * -219 + 4632), 7);
      continue;
    case -157 * 44 + -1649 + -8604 * -1:
      switch (Nt()) {
        case -1277 * 2 + -3969 + -1313 * -5:
        case 6416 + -5 * 1837 + 2816:
          Tn(Cl(ul(qe(), Ti()), o, t, g), g);
          break;
        default:
          G += "/";
      }
      break;
    case (-9499 + -8243 * -1 + 1 * 1379) * k:
      s[x++] = at(G) * S;
    case (-37 * -41 + -4829 * -2 + 5 * -2210) * k:
    case 9863 + 635 * 11 + -16789:
    case 0:
      switch (H) {
        case 12951 + 1 * -12951:
        case 2 * 712 + 192 + -1491:
          T = -125 * 59 + 8198 + -823 * 1;
        case 4442 * -1 + 6793 * -1 + 11294 + C:
          S == -(-11311 + 56 * 202) && (G = D(G, /\f/g, "")), f > 6977 * -1 + 46 * -109 + -3 * -3997 && at(G) - d && Tn(f > 2 * -3394 + -11 * 839 + 16049 ? as(G + ";", e, t, d - (1 * -4585 + -453 * -15 + 1 * -2209), g) : as(D(G, " ", "") + ";", e, t, d - 2, g), g);
          break;
        case 3611 + 592 * -6:
          G += ";";
        default:
          if (Tn(N = rs(G, o, t, x, C, n, s, Y, z = [], M = [], d, r), r), H === 123)
            if (C === 47 * 7 + 426 + -755) Ei(G, o, N, N, z, r, d, s, M);
            else switch (m === 99 && fe(G, -1 * 139 + -1857 * 5 + 9427) === 1 * 8244 + -4463 * 1 + -3671 ? -118 * -42 + -7261 + -2405 * -1 : m) {
              case -5207 + -1 * -3917 + 1390 * 1:
              case 108:
              case 1 * -4749 + -2471 * -2 + -84:
              case -4385 * -1 + -122 * 1 + -61 * 68:
                Ei(i, N, N, e && Tn(rs(i, N, N, -493 + 426 * 3 + -785, 2203 * 4 + -17 * 95 + -7197, n, s, Y, n, z = [], d, M), M), n, M, d, s, e ? z : M);
                break;
              default:
                Ei(G, N, N, N, [""], M, 0, s, M);
            }
      }
      x = C = f = -930 + 296 * 18 + -4398, k = S = -8734 + 2899 * -2 + -1 * -14533, Y = G = "", d = a;
      break;
    case -4325 + 1 * 1118 + -653 * -5:
      d = -1411 + 1 * -3034 + 4446 + at(G), f = w;
    default:
      if (k < 1599 + 1286 * -1 + -312) {
        if (H == 259 + -16 * -439 + -7160) --k;
        else if (H == -7139 * -1 + -2843 + -4171 && k++ == -46 * -127 + 3107 + -471 * 19 && sl() == -337 * 23 + -4728 + -274 * -46) continue;
      }
      switch (G += Mr(H), H * k) {
        case -8056 + -57 * -142:
          S = C > -1 * 687 + 27 * 359 + 3002 * -3 ? 1 : (G += "\f", -(33 * 161 + 4806 + -10118));
          break;
        case 827 + -9 * 87:
          s[x++] = (at(G) - (311 * -1 + 2489 + -2177)) * S, S = -3469 + -67 * 149 + -13453 * -1;
          break;
        case -7777 + -9789 * -1 + -1948:
          Nt() === 332 * -6 + -6581 + -4309 * -2 && (G += Eo(qe())), m = Nt(), C = d = at(Y = G += Il(Ti())), H++;
          break;
        case 1758 + 4759 * -1 + -1523 * -2:
          w === -2955 * -1 + -9306 + 6396 && at(G) == 2 * -2641 + -1 * -6587 + 1 * -1303 && (k = 10 * 23 + 2233 + 1 * -2463);
      }
  }
  return r;
}
function rs(i, o, t, e, n, r, a, s, g, x, C, d) {
  for (var m = n - 1, f = n === 1 * -191 + 253 * 37 + 9170 * -1 ? r : [""], w = v0(f), k = 8604 + -8604 * 1, T = 764 * -12 + -3 * 857 + 11739, S = 1 * 8881 + -4164 + -4717; k < e; ++k) for (var H = 2369 * 1 + -6 * -8 + -2417, Y = hn(i, m + (4829 + -1826 * 1 + -3002), m = b0(T = a[k])), z = i; H < w; ++H) (z = y0(T > 1 * -8129 + -2504 + 1 * 10633 ? f[H] + " " + Y : D(Y, /&\f/g, f[H]))) && (g[S++] = z);
  return Io(i, o, t, n === 6321 + 13 * -61 + 2764 * -2 ? xo : s, g, x, C, d);
}
function Cl(i, o, t, e) {
  return Io(i, o, t, m0, Mr(al()), hn(i, -454 * 9 + -7357 + -35 * -327, -2), -10027 + -10027 * -1, e);
}
function as(i, o, t, e, n) {
  return Io(i, o, t, Xr, hn(i, -226 * 8 + -1 * 79 + -51 * -37, e), hn(i, e + (39 * 67 + 61 * -65 + 1353), -(4 * 2124 + -5994 + -2501)), e, n);
}
function S0(i, o, t) {
  switch (ol(i, o)) {
    case -63 * 157 + -1721 + 16715:
      return ee + "print-" + i + i;
    case 3 * -1527 + -3 * -751 + -1613 * -5:
    case -2827 + -3 * 1311 + 10961:
    case 3956 + 6 * -1103 + 5839:
    case -1 * -4466 + 3 * -1847 + 1127 * 4:
    case -6901 + -7 * -342 + 6148:
    case 4888 + 131 * 15 + 2 * -1198:
    case 23 * -37 + 3 * 2643 + -4157:
    case -5982 + 4105 * 2 + 3344:
    case -150 * 81 + -6352 + 24858:
    case 1 * -5948 + -7946 + 19738:
    case -1 * -6937 + 1037 + -1 * 4783:
    case 47 * -23 + -8037 + 1 * 15763:
    case 37 * -16 + 2672 + -925 * -1:
    case -4690 + 1 * 3502 + 7579:
    case -8501 + -1 * -14380:
    case -10103 + 322 * 5 + 14116:
    case 4241 * 1 + -17 * -17 + 1605:
    case 4599:
    case 1069 * 6 + -1014 + -545:
    case 93 * 28 + 3675 + -2064:
    case 4001 * 1 + 4638 + -2250:
    case 5722 * -1 + -4389 + 4 * 3805:
    case 6931 + 2 * -783:
    case 121 * -89 + -2668 + 26 * 733:
    case 1879 + -1 * -2993 + 7 * -149:
      return ee + i + i;
    case -623 * -16 + -211 * -37 + -12986:
      return Fn + i + i;
    case 291 * 4 + 929 * 10 + 5105 * -1:
    case 4246:
    case -6124 + 5051 * 1 + -159 * -37:
    case -727 * -5 + 227 * 31 + 8 * -463:
    case 967 * -1 + -2 * -4885 + -6047:
      return ee + i + Fn + i + ie + i + i;
    case -2699 + 1081 * -6 + -1 * -15121:
      switch (fe(i, o + (2 * -4762 + 1429 * -5 + 16680))) {
        case 6163 * 1 + -4027 * -1 + -10076:
          return ee + i + ie + D(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case -4430 + 3832 * -1 + 8370:
          return ee + i + ie + D(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case -74 + -3 * 937 + 1 * 2930:
          return ee + i + ie + D(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 36 * -197 + 1018 * -13 + 27154 * 1:
    case 7613 + 12 * 268 + -6561:
    case 1843 + -1 * 7333 + 763 * 11:
      return ee + i + ie + i + i;
    case 6165:
      return ee + i + ie + "flex-" + i + i;
    case 5187:
      return ee + i + D(i, /(\w+).+(:[^]+)/, ee + "box-$1$2" + ie + "flex-$1$2") + i;
    case 1 * 8761 + 4511 * 2 + -12340:
      return ee + i + ie + "flex-item-" + D(i, /flex-|-self/g, "") + (dt(i, /flex-|baseline/) ? "" : ie + "grid-row-" + D(i, /flex-|-self/g, "")) + i;
    case -13237 + -4478 * -4:
      return ee + i + ie + "flex-line-pack" + D(i, /align-content|flex-|-self/g, "") + i;
    case 1547 * 3 + 9412 * -1 + 17 * 607:
      return ee + i + ie + D(i, "shrink", "negative") + i;
    case 6 * -548 + -1537 + 10117:
      return ee + i + ie + D(i, "basis", "preferred-size") + i;
    case 7780 + -5806 * 1 + 4086:
      return ee + "box-" + D(i, "-grow", "") + ee + i + ie + D(i, "grow", "positive") + i;
    case 3 * 1259 + -5 * 170 + 1627:
      return ee + D(i, /([^-])(transform)/g, "$1" + ee + "$2") + i;
    case -2 * 1576 + -3769 + -13108 * -1:
      return D(D(D(i, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), i, "") + i;
    case 74 * -125 + -1 * -816 + -1 * -13929:
    case 193 * -50 + -1 * 2853 + 16462:
      return D(i, /(image-set\([^]*)/, ee + "$1$`$1");
    case -9 * 302 + 8503 + -19 * 43:
      return D(D(i, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + ie + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + i + i;
    case -699 * 13 + -1 * -4145 + -1 * -9142:
      if (!dt(i, /flex-|baseline/)) return ie + "grid-column-align" + hn(i, o) + i;
      break;
    case 97 + -4 * -586 + 151:
    case 6211 + -11 * -762 + -11233:
      return ie + D(i, "template-", "") + i;
    case 4384:
    case 3477 * 1 + 1 * 3263 + 1562 * -2:
      return t && t.some(function(e, n) {
        return o = n, dt(e.props, /grid-\w+-end/);
      }) ? ~Ri(i + (t = t[o].value), "span", -1457 * -1 + -5637 + -44 * -95) ? i : ie + D(i, "-start", "") + i + ie + "grid-row-span:" + (~Ri(t, "span", 13 * -354 + 6081 + 1479 * -1) ? dt(t, /\d+/) : +dt(t, /\d+/) - +dt(i, /\d+/)) + ";" : ie + D(i, "-start", "") + i;
    case 7556 + 35 * -76:
    case -15 * 358 + 6314 + 1 * 3184:
      return t && t.some(function(e) {
        return dt(e.props, /grid-\w+-start/);
      }) ? i : ie + D(D(i, "-end", "-span"), "span ", "") + i;
    case -9347 * -1 + -9 * -34 + 7 * -794:
    case 3583:
    case 3144 + 6035 * -1 + 6959:
    case 3 * 389 + -1 * 8974 + 1477 * 7:
      return D(i, /(.+)-inline(.+)/, ee + "$1$2") + i;
    case 8116:
    case 7698 + -639 * 1:
    case 907 * 5 + -677 * -11 + 1 * -6229:
    case 29 * -313 + 5412 + 50 * 184:
    case 5981 + -1 * -7223 + -7759:
    case -30 * -363 + -8189 + 750 * 4:
    case -8861 * 1 + 180 + 3 * 4538:
    case 5710 * 1 + -3955 + -1 * -2922:
    case 5533:
    case 5789:
    case -6 * 419 + -7 * 1356 + -17027 * -1:
    case 4160 + 61 * -81 + 5546:
      if (at(i) - (-7655 + -2313 * 2 + 12282) - o > 115 * 52 + 1856 + -522 * 15) switch (fe(i, o + (-8637 + -6975 * 1 + -1 * -15613))) {
        case 9332 + 1490 * -3 + 4753 * -1:
          if (fe(i, o + (-23 * -19 + -4697 + 533 * 8)) !== 45) break;
        case 575 + -997 * 1 + 524:
          return D(i, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + Fn + (fe(i, o + (-3022 + -1 * -1523 + 1502)) == 4889 * 2 + 7153 * 1 + -16823 ? "$3" : "$2-$3")) + i;
        case 1 * -3398 + 2 * -3988 + 1 * 11489:
          return ~Ri(i, "stretch", 4906 + -2 * -3254 + 13 * -878) ? S0(D(i, "stretch", "fill-available"), o, t) + i : i;
      }
      break;
    case 2 * -4646 + -41 * 183 + 21947 * 1:
    case 11215 + -2 * -2554 + -10403:
      return D(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, r, a, s, g, x) {
        return ie + n + ":" + r + x + (a ? ie + n + "-span:" + (s ? g : +g - +r) + x : "") + i;
      });
    case -7090 + -1 * -521 + 11518:
      if (fe(i, o + (9046 + 5 * -1808)) === 3 * 82 + -6873 + -482 * -14) return D(i, ":", ":" + ee) + i;
      break;
    case -1 * -1029 + 1854 * 1 + 3561:
      switch (fe(i, fe(i, -198 * 11 + 8527 * 1 + 181 * -35) === -1565 * 2 + -2504 + 5679 ? -6130 * -1 + 67 + -167 * 37 : 363 + -352 * 1)) {
        case -1681 + 196 * -41 + -9 * -1093:
          return D(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (fe(i, -2 * 288 + -4101 * -1 + -3511) === 61 * -157 + -6 * 187 + 68 * 158 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + ie + "$2box$3") + i;
        case -5023 + 4 * -1266 + -61 * -167:
          return D(i, ":", ":" + ie) + i;
      }
      break;
    case -1 * -10729 + -1722 + 2 * -1644:
    case 4 * -1238 + -8331 + 295 * 54:
    case 3 * -1532 + -349 * 1 + 7080:
    case -2883 + 1866 * 1 + 4944:
    case -6231 * 1 + -743 * 4 + 11594:
      return D(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function zi(i, o) {
  for (var t = "", e = -4836 + -1 * 5294 + 2 * 5065; e < i.length; e++) t += o(i[e], e, i, o) || "";
  return t;
}
function pl(i, o, t, e) {
  switch (i.type) {
    case il:
      if (i.children.length) break;
    case nl:
    case Xr:
      return i.return = i.return || i.value;
    case m0:
      return "";
    case A0:
      return i.return = i.value + "{" + zi(i.children, e) + "}";
    case xo:
      if (!at(i.value = i.props.join(","))) return "";
  }
  return at(t = zi(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function hl(i) {
  var o = v0(i);
  return function(t, e, n, r) {
    for (var a = "", s = -10338 + -3446 * -3; s < o; s++) a += i[s](t, e, n, r) || "";
    return a;
  };
}
function fl(i) {
  return function(o) {
    o.root || (o = o.return) && i(o);
  };
}
function ml(i, o, t, e) {
  if (i.length > -(7668 + -7667 * 1) && !i.return)
    switch (i.type) {
      case Xr:
        i.return = S0(i.value, i.length, t);
        return;
      case A0:
        return zi([yt(i, { value: D(i.value, "@", "@" + ee) })], e);
      case xo:
        if (i.length) return rl(t = i.props, function(n) {
          switch (dt(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              an(yt(i, { props: [D(n, /:(read-\w+)/, ":" + Fn + "$1")] }));
              var r = {};
              r.props = [n], an(yt(i, r)), rr(i, { props: os(t, e) });
              break;
            case "::placeholder":
              an(yt(i, { props: [D(n, /:(plac\w+)/, ":" + ee + "input-$1")] })), an(yt(i, { props: [D(n, /:(plac\w+)/, ":" + Fn + "$1")] })), an(yt(i, { props: [D(n, /:(plac\w+)/, ie + "input-$1")] }));
              var a = {};
              a.props = [n], an(yt(i, a)), rr(i, { props: os(t, e) });
              break;
          }
          return "";
        });
    }
}
var E = {};
E.animationIterationCount = 1, E.aspectRatio = 1, E.borderImageOutset = 1, E.borderImageSlice = 1, E.borderImageWidth = 1, E.boxFlex = 1, E.boxFlexGroup = 1, E.boxOrdinalGroup = 1, E.columnCount = 1, E.columns = 1, E.flex = 1, E.flexGrow = 1, E.flexPositive = 1, E.flexShrink = 1, E.flexNegative = 1, E.flexOrder = 1, E.gridRow = 1, E.gridRowEnd = 1, E.gridRowSpan = 1, E.gridRowStart = 1, E.gridColumn = 1, E.gridColumnEnd = 1, E.gridColumnSpan = 1, E.gridColumnStart = 1, E.msGridRow = 1, E.msGridRowSpan = 1, E.msGridColumn = 1, E.msGridColumnSpan = 1, E.fontWeight = 1, E.lineHeight = 1, E.opacity = 1, E.order = 1, E.orphans = 1, E.tabSize = 1, E.widows = 1, E.zIndex = 1, E.zoom = 1, E.WebkitLineClamp = 1, E.fillOpacity = 1, E.floodOpacity = 1, E.stopOpacity = 1, E.strokeDasharray = 1, E.strokeDashoffset = 1, E.strokeMiterlimit = 1, E.strokeOpacity = 1, E.strokeWidth = 1;
var Al = E, _ = {}, jt = typeof process < "u" && void (16627 + -13 * 1279) !== _ && (_.REACT_APP_SC_ATTR || _.SC_ATTR) || "data-styled", B0 = "active", G0 = "data-styled-version", po = "6.1.11", jr = `/*!sc*/
`, Ur = typeof window < "u" && "HTMLElement" in window, bl = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-5720 + -110 * -52) !== _ && void (-5 * -731 + -1 * 2210 + -1445) !== _.REACT_APP_SC_DISABLE_SPEEDY && _.REACT_APP_SC_DISABLE_SPEEDY !== "" ? _.REACT_APP_SC_DISABLE_SPEEDY !== "false" && _.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-3324 + 9 * -919 + 15 * 773) !== _ && void (-2179 * -1 + 1793 + -3972 * 1) !== _.SC_DISABLE_SPEEDY && _.SC_DISABLE_SPEEDY !== "" ? _.SC_DISABLE_SPEEDY !== "false" && _.SC_DISABLE_SPEEDY : _.NODE_ENV !== "production"), ss = /invalid hook call/i, yi = /* @__PURE__ */ new Set(), yl = function(i, o) {
  if (_.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var r = !0;
      console.error = function(a) {
        for (var s = [], g = 1; g < arguments.length; g++) s[g - (3733 * -1 + -4448 + -8182 * -1)] = arguments[g];
        ss.test(a) ? (r = !1, yi.delete(e)) : n.apply(void (554 + 11 * -664 + 6750), dn([a], s, !1));
      }, kt(), r && !yi.has(e) && (console.warn(e), yi.add(e));
    } catch (a) {
      ss.test(a.message) && yi.delete(e);
    } finally {
      console.error = n;
    }
  }
}, ho = Object.freeze([]), mn = Object.freeze({});
function vl(i, o, t) {
  return void (-203 * 48 + -4280 * 2 + 18304) === t && (t = mn), i.theme !== t.theme && i.theme || o || t.theme;
}
var gr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), wl = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Sl = /(^-|-$)/g;
function gs(i) {
  return i.replace(wl, "-").replace(Sl, "");
}
var Bl = /(a)(d)/gi, vi = 434 + 4106 * -1 + 3724, cs = function(i) {
  return String.fromCharCode(i + (i > -1 * -8783 + 6663 + -15421 * 1 ? -61 * 88 + 2 * -4476 + 14359 : -131 * 35 + 7023 + -2341));
};
function cr(i) {
  var o, t = "";
  for (o = Math.abs(i); o > vi; o = o / vi | 62 * 152 + -4269 * -1 + -13693) t = cs(o % vi) + t;
  return (cs(o % vi) + t).replace(Bl, "$1-$2");
}
var Po, Z0 = 5381, Et = function(i, o) {
  for (var t = o.length; t; ) i = (-233 * 31 + -331 + 7587) * i ^ o.charCodeAt(--t);
  return i;
}, k0 = function(i) {
  return Et(Z0, i);
};
function Gl(i) {
  return cr(k0(i) >>> 3236 + 103 * -34 + 266);
}
function W0(i) {
  return _.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Yo(i) {
  return typeof i == "string" && (_.NODE_ENV === "production" || i.charAt(-2357 + -1 * -5566 + -3209) === i.charAt(-3992 + -281 * -33 + -5281).toLowerCase());
}
var Xe = {};
Xe.childContextTypes = !0, Xe.contextType = !0, Xe.contextTypes = !0, Xe.defaultProps = !0, Xe.displayName = !0, Xe.getDefaultProps = !0, Xe.getDerivedStateFromError = !0, Xe.getDerivedStateFromProps = !0, Xe.mixins = !0, Xe.propTypes = !0, Xe.type = !0;
var vt = {};
vt.name = !0, vt.length = !0, vt.prototype = !0, vt.caller = !0, vt.callee = !0, vt.arguments = !0, vt.arity = !0;
var Rt = {};
Rt.$$typeof = !0, Rt.compare = !0, Rt.defaultProps = !0, Rt.displayName = !0, Rt.propTypes = !0, Rt.type = !0;
var sn = {};
sn.$$typeof = !0, sn.render = !0, sn.defaultProps = !0, sn.displayName = !0, sn.propTypes = !0;
var H0 = typeof Symbol == "function" && Symbol.for, O0 = H0 ? Symbol.for("react.memo") : 53886 + -11 * 3363 + 43222, Zl = H0 ? Symbol.for("react.forward_ref") : -82623 + -6 * 5246 + 174211, kl = Xe, Wl = vt, K0 = Rt, Hl = ((Po = {})[Zl] = sn, Po[O0] = K0, Po);
function ls(i) {
  return ("type" in (o = i) && o.type.$$typeof) === O0 ? K0 : "$$typeof" in i ? Hl[i.$$typeof] : kl;
  var o;
}
var Ol = Object.defineProperty, Kl = Object.getOwnPropertyNames, xs = Object.getOwnPropertySymbols, Vl = Object.getOwnPropertyDescriptor, Rl = Object.getPrototypeOf, us = Object.prototype;
function V0(i, o, t) {
  if (typeof o != "string") {
    if (us) {
      var e = Rl(o);
      e && e !== us && V0(i, e, t);
    }
    var n = Kl(o);
    xs && (n = n.concat(xs(o)));
    for (var r = ls(i), a = ls(o), s = 351 * 21 + -1492 * -1 + 1 * -8863; s < n.length; ++s) {
      var g = n[s];
      if (!(g in Wl || t && t[g] || a && g in a || r && g in r)) {
        var x = Vl(o, g);
        try {
          Ol(i, g, x);
        } catch {
        }
      }
    }
  }
  return i;
}
function An(i) {
  return typeof i == "function";
}
function Jr(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function Yt(i, o) {
  return i && o ? "".concat(i, " ").concat(o) : i || o || "";
}
function Is(i, o) {
  if (6125 + -71 * 86 + -19 === i.length) return "";
  for (var t = i[0], e = -1130 + -6 * 1290 + 8871; e < i.length; e++) t += i[e];
  return t;
}
function bn(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function lr(i, o, t) {
  if (void (-944 * -10 + 649 * 1 + 531 * -19) === t && (t = !1), !t && !bn(i) && !Array.isArray(i)) return o;
  if (Array.isArray(o))
    for (var e = 5 * -1617 + 5659 * -1 + -13744 * -1; e < o.length; e++) i[e] = lr(i[e], o[e]);
  else if (bn(o))
    for (var e in o) i[e] = lr(i[e], o[e]);
  return i;
}
function zr(i, o) {
  var t = {};
  t.value = o, Object.defineProperty(i, "toString", t);
}
var pe = {};
pe[1] = `Cannot create styled-component for component: %s.

`, pe[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, pe[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, pe[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, pe[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, pe[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, pe[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', pe[8] = `ThemeProvider: Please make your "theme" prop an object.

`, pe[9] = "Missing document `<head>`\n\n", pe[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, pe[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, pe[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", pe[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, pe[14] = `ThemeProvider: "theme" prop is required.

`, pe[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", pe[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, pe[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, pe[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var Tl = _.NODE_ENV !== "production" ? pe : {};
function El() {
  for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
  for (var t = i[0], e = [], n = -12150 + 29 * 419, r = i.length; n < r; n += 15 * -445 + -1 * 8811 + 15487) e.push(i[n]);
  return e.forEach(function(a) {
    t = t.replace(/%[a-z]/, a);
  }), t;
}
function Bn(i) {
  for (var o = [], t = 1; t < arguments.length; t++) o[t - (2601 + 1 * 7487 + -10087)] = arguments[t];
  return _.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(o.length > -651 * -12 + 151 * -62 + -5 * -310 ? " Args: ".concat(o.join(", ")) : "")) : new Error(El.apply(void (5969 + -2 * -2507 + -10983), dn([Tl[i]], o, !1)).trim());
}
var Pl = function() {
  function i(o) {
    this.groupSizes = new Uint32Array(-5332 + -3 * -1948), this.length = -4239 + -1 * -4751, this.tag = o;
  }
  return i.prototype.indexOfGroup = function(o) {
    for (var t = -6044 * -1 + -2695 + -3349, e = -71 * -17 + 1685 * -4 + 5533 * 1; e < o; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, r = n; o >= r; ) if ((r <<= 1) < 0) throw Bn(-5381 * -1 + -161 * -55 + -14220, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(e), this.length = r;
      for (var a = n; a < r; a++) this.groupSizes[a] = -2939 * 3 + 1 * -7397 + 16214;
    }
    for (var s = this.indexOfGroup(o + (-8875 + 1 * 137 + 971 * 9)), g = (a = -2 * 3833 + 96 * -38 + 11314, t.length); a < g; a++) this.tag.insertRule(s, t[a]) && (this.groupSizes[o]++, s++);
  }, i.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), n = e + t;
      this.groupSizes[o] = -772 + 386 * 2;
      for (var r = e; r < n; r++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || -3 * -2659 + -328 + 1 * -7649 === this.groupSizes[o]) return t;
    for (var e = this.groupSizes[o], n = this.indexOfGroup(o), r = n + e, a = n; a < r; a++) t += "".concat(this.tag.getRule(a)).concat(jr);
    return t;
  }, i;
}(), Yl = 8120 + -19 * 271 + 110 * -27 << 3346 + -5 * -1440 + -10516, Pi = /* @__PURE__ */ new Map(), Qi = /* @__PURE__ */ new Map(), Yi = -423 * -16 + -4 * 1569 + -491 * 1, wi = function(i) {
  if (Pi.has(i)) return Pi.get(i);
  for (; Qi.has(Yi); ) Yi++;
  var o = Yi++;
  if (_.NODE_ENV !== "production" && ((-1 * -3481 + -4903 + 3 * 474 | o) < -9 * -452 + 4013 * -1 + 5 * -11 || o > Yl)) throw Bn(16, "".concat(o));
  return Pi.set(i, o), Qi.set(o, i), o;
}, Ll = function(i, o) {
  Yi = o + (-8081 + 1 * 8082), Pi.set(i, o), Qi.set(o, i);
}, Dl = "style[".concat(jt, "][").concat(G0, '="').concat(po, '"]'), Nl = new RegExp("^".concat(jt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Fl = function(i, o, t) {
  for (var e, n = t.split(","), r = 0, a = n.length; r < a; r++) (e = n[r]) && i.registerName(o, e);
}, Xl = function(i, o) {
  for (var t, e = ((t = o.textContent) !== null && void (3903 + -1301 * 3) !== t ? t : "").split(jr), n = [], r = -483 * -18 + -6658 + -2036, a = e.length; r < a; r++) {
    var s = e[r].trim();
    if (s) {
      var g = s.match(Nl);
      if (g) {
        var x = 0 | parseInt(g[1], 10), C = g[2];
        x !== 0 && (Ll(C, x), Fl(i, C, g[2903 + -1 * 8587 + 5687]), i.getTag().insertRules(x, n)), n.length = 71 * -81 + 8149 + 2398 * -1;
      } else n.push(s);
    }
  }
};
function Ml() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var R0 = function(i) {
  var o = document.head, t = i || o, e = document.createElement("style"), n = function(s) {
    var g = Array.from(s.querySelectorAll("style[".concat(jt, "]")));
    return g[g.length - (-3248 + 7 * -115 + -2 * -2027)];
  }(t), r = void (866 * 8 + 5 * -1693 + 1537) !== n ? n.nextSibling : null;
  e.setAttribute(jt, B0), e.setAttribute(G0, po);
  var a = Ml();
  return a && e.setAttribute("nonce", a), t.insertBefore(e, r), e;
}, jl = function() {
  function i(o) {
    this.element = R0(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = 1 * -3571 + 413 * -23 + 1307 * 10, r = e.length; n < r; n++) {
        var a = e[n];
        if (a.ownerNode === t) return a;
      }
      throw Bn(1934 + -94 * -22 + -5 * 797);
    }(this.element), this.length = 8532 + -898 * 4 + 2 * -2470;
  }
  return i.prototype.insertRule = function(o, t) {
    try {
      return this.sheet.insertRule(t, o), this.length++, !0;
    } catch {
      return !1;
    }
  }, i.prototype.deleteRule = function(o) {
    this.sheet.deleteRule(o), this.length--;
  }, i.prototype.getRule = function(o) {
    var t = this.sheet.cssRules[o];
    return t && t.cssText ? t.cssText : "";
  }, i;
}(), Ul = function() {
  function i(o) {
    this.element = R0(o), this.nodes = this.element.childNodes, this.length = -5969 * -1 + -9688 * 1 + 3719;
  }
  return i.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= 69 * -25 + -170 * 19 + 4955) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, i.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, i;
}(), Jl = function() {
  function i(o) {
    this.rules = [], this.length = 6234 + -179 * -43 + -13931;
  }
  return i.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, -3 * 2317 + -1 * 2702 + -1379 * -7, t), this.length++, !0);
  }, i.prototype.deleteRule = function(o) {
    this.rules.splice(o, -1 + 119 * -80 + -3174 * -3), this.length--;
  }, i.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, i;
}(), ds = Ur, zl = { isServer: !Ur, useCSSOMInjection: !bl }, T0 = function() {
  function i(o, t, e) {
    o === void 0 && (o = mn), void (-4949 + -7171 * -1 + -1111 * 2) === t && (t = {});
    var n = this;
    this.options = Re(Re({}, zl), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && Ur && ds && (ds = !1, function(r) {
      for (var a = document.querySelectorAll(Dl), s = -5 * -1388 + -9773 + 1 * 2833, g = a.length; s < g; s++) {
        var x = a[s];
        x && x.getAttribute(jt) !== B0 && (Xl(r, x), x.parentNode && x.parentNode.removeChild(x));
      }
    }(this)), zr(this, function() {
      return function(r) {
        for (var a = r.getTag(), s = a.length, g = "", x = function(d) {
          var m = function(S) {
            return Qi.get(S);
          }(d);
          if (m === void 0) return "continue";
          var f = r.names.get(m), w = a.getGroup(d);
          if (void (-1 * -5751 + 422 * -2 + 701 * -7) === f || -5 * 67 + 2232 + -1 * 1897 === w.length) return "continue";
          var k = "".concat(jt, ".g").concat(d, '[id="').concat(m, '"]'), T = "";
          void (13365 + -135 * 99) !== f && f.forEach(function(S) {
            S.length > 4750 + 25 * -190 && (T += "".concat(S, ","));
          }), g += "".concat(w).concat(k, '{content:"').concat(T, '"}').concat(jr);
        }, C = 0; C < s; C++) x(C);
        return g;
      }(n);
    });
  }
  return i.registerId = function(o) {
    return wi(o);
  }, i.prototype.reconstructWithOptions = function(o, t) {
    return t === void 0 && (t = !0), new i(Re(Re({}, this.options), o), this.gs, t && this.names || void (1 * 4217 + -4874 + 657));
  }, i.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || -6081 * -1 + -805 + -5276) + (2067 + -1 * 1362 + -704);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new Jl(n) : e ? new jl(n) : new Ul(n);
    }(this.options), new Pl(o)));
    var o;
  }, i.prototype.hasNameForId = function(o, t) {
    return this.names.has(o) && this.names.get(o).has(t);
  }, i.prototype.registerName = function(o, t) {
    if (wi(o), this.names.has(o)) this.names.get(o).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(o, e);
    }
  }, i.prototype.insertRules = function(o, t, e) {
    this.registerName(o, t), this.getTag().insertRules(wi(o), e);
  }, i.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, i.prototype.clearRules = function(o) {
    this.getTag().clearGroup(wi(o)), this.clearNames(o);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
}(), Ql = /&/g, $l = /^\s*\/\/.*$/gm;
function E0(i, o) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(o, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(o, " ")), t.props = t.props.map(function(e) {
      return "".concat(o, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = E0(t.children, o)), t;
  });
}
function P0(i) {
  var o, t, e, n = i === void 0 ? mn : i, r = n.options, a = void (-1 * 5438 + -9187 * -1 + -23 * 163) === r ? mn : r, s = n.plugins, g = void (-8699 * 1 + -3813 + 12512) === s ? ho : s, x = function(m, f, w) {
    return w.startsWith(t) && w.endsWith(t) && w.replaceAll(t, "").length > 0 ? ".".concat(o) : m;
  }, C = g.slice();
  C.push(function(m) {
    m.type === xo && m.value.includes("&") && (m.props[118 * -54 + 1 * -5657 + 12029] = m.props[0].replace(Ql, t).replace(e, x));
  }), a.prefix && C.push(ml), C.push(pl);
  var d = function(m, f, w, k) {
    void (-1 * -7712 + 4270 + 6 * -1997) === f && (f = ""), void (-9494 * -1 + -6 * 1334 + -1490) === w && (w = ""), void (-1707 + -88 * 77 + 8483) === k && (k = "&"), o = k, t = f, e = new RegExp("\\".concat(t, "\\b"), "g");
    var T = m.replace($l, ""), S = dl(w || f ? "".concat(w, " ").concat(f, " { ").concat(T, " }") : T);
    a.namespace && (S = E0(S, a.namespace));
    var H = [];
    return zi(S, hl(C.concat(fl(function(Y) {
      return H.push(Y);
    })))), H;
  };
  return d.hash = g.length ? g.reduce(function(m, f) {
    return f.name || Bn(183 * 1 + -3 * -3315 + 3 * -3371), Et(m, f.name);
  }, Z0).toString() : "", d;
}
var _l = new T0(), xr = P0(), Qr = Mt.createContext({ shouldForwardProp: void 0, styleSheet: _l, stylis: xr });
Qr.Consumer;
var ql = Mt.createContext(void (82 * 35 + 2523 + 1 * -5393));
function ur() {
  return Jt(Qr);
}
function ex(i) {
  var o = je(i.stylisPlugins), t = o[1 * -8581 + -5261 + 3 * 4614], e = o[-3329 + 1541 * -5 + 2207 * 5], n = ur().styleSheet, r = Le(function() {
    var C = n, d = {};
    return d.useCSSOMInjection = !1, i.sheet ? C = i.sheet : i.target && (C = C.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (C = C.reconstructWithOptions(d)), C;
  }, [i.disableCSSOMInjection, i.sheet, i.target, n]), a = Le(function() {
    var C = {};
    C.namespace = i.namespace, C.prefix = i.enableVendorPrefixes;
    var d = {};
    return d.options = C, d.plugins = t, P0(d);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  ye(function() {
    tl(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var s = Le(function() {
    var C = {};
    return C.shouldForwardProp = i.shouldForwardProp, C.styleSheet = r, C.stylis = a, C;
  }, [i.shouldForwardProp, r, a]), g = {};
  g.value = s;
  var x = {};
  return x.value = a, Mt.createElement(Qr.Provider, g, Mt.createElement(ql.Provider, x, i.children));
}
var Cs = function() {
  function i(o, t) {
    var e = this;
    this.inject = function(n, r) {
      void (-6637 * 1 + 4757 * 1 + -20 * -94) === r && (r = xr);
      var a = e.name + r.hash;
      n.hasNameForId(e.id, a) || n.insertRules(e.id, a, r(e.rules, a, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, zr(this, function() {
      throw Bn(12, String(e.name));
    });
  }
  return i.prototype.getName = function(o) {
    return void (2195 * 3 + 5097 + 3894 * -3) === o && (o = xr), this.name + o.hash;
  }, i;
}(), tx = function(i) {
  return i >= "A" && i <= "Z";
};
function ps(i) {
  for (var o = "", t = -5160 + 4463 * 1 + 1 * 697; t < i.length; t++) {
    var e = i[t];
    if (-1091 * -1 + -31 * 157 + 3777 === t && e === "-" && i[0] === "-") return i;
    tx(e) ? o += "-" + e.toLowerCase() : o += e;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var Y0 = function(i) {
  return i == null || i === !1 || i === "";
}, L0 = function(i) {
  var o, t, e = [];
  for (var n in i) {
    var r = i[n];
    i.hasOwnProperty(n) && !Y0(r) && (Array.isArray(r) && r.isCss || An(r) ? e.push("".concat(ps(n), ":"), r, ";") : bn(r) ? e.push.apply(e, dn(dn(["".concat(n, " {")], L0(r), !1), ["}"], !1)) : e.push("".concat(ps(n), ": ").concat((o = n, (t = r) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -1 * 6421 + -2 * -3238 + -55 === t || o in Al || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function Ft(i, o, t, e) {
  if (Y0(i)) return [];
  if (Jr(i)) return [".".concat(i.styledComponentId)];
  if (An(i)) {
    if (!An(r = i) || r.prototype && r.prototype.isReactComponent || !o) return [i];
    var n = i(o);
    return _.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof Cs || bn(n) || n === null || console.error("".concat(W0(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ft(n, o, t, e);
  }
  var r;
  return i instanceof Cs ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : bn(i) ? L0(i) : Array.isArray(i) ? Array.prototype.concat.apply(ho, i.map(function(a) {
    return Ft(a, o, t, e);
  })) : [i.toString()];
}
function nx(i) {
  for (var o = -6084 + 10 * -313 + -17 * -542; o < i.length; o += -520 * -10 + 10 * -569 + 491 * 1) {
    var t = i[o];
    if (An(t) && !Jr(t)) return !1;
  }
  return !0;
}
var ix = k0(po), ox = function() {
  function i(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = _.NODE_ENV === "production" && (e === void 0 || e.isStatic) && nx(o), this.componentId = t, this.baseHash = Et(ix, t), this.baseStyle = e, T0.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(o, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = Yt(n, this.staticRulesId);
      else {
        var r = Is(Ft(this.rules, o, t, e)), a = cr(Et(this.baseHash, r) >>> 2934 * -2 + -9656 + 15524);
        if (!t.hasNameForId(this.componentId, a)) {
          var s = e(r, ".".concat(a), void 0, this.componentId);
          t.insertRules(this.componentId, a, s);
        }
        n = Yt(n, a), this.staticRulesId = a;
      }
    else {
      for (var g = Et(this.baseHash, e.hash), x = "", C = 617 * 7 + 8313 + -12632; C < this.rules.length; C++) {
        var d = this.rules[C];
        if (typeof d == "string") x += d, _.NODE_ENV !== "production" && (g = Et(g, d));
        else if (d) {
          var m = Is(Ft(d, o, t, e));
          g = Et(g, m + C), x += m;
        }
      }
      if (x) {
        var f = cr(g >>> 0);
        t.hasNameForId(this.componentId, f) || t.insertRules(this.componentId, f, e(x, ".".concat(f), void (-5292 * 1 + 9103 * -1 + 14395 * 1), this.componentId)), n = Yt(n, f);
      }
    }
    return n;
  }, i;
}(), D0 = Mt.createContext(void (-1 * -6191 + 3449 + -1 * 9640));
D0.Consumer;
var Lo = {}, hs = /* @__PURE__ */ new Set();
function rx(i, o, t) {
  var e = Jr(i), n = i, r = !Yo(i), a = o.attrs, s = void (-5605 + 521 * 1 + 2542 * 2) === a ? ho : a, g = o.componentId, x = g === void 0 ? function(M, N) {
    var G = typeof M != "string" ? "sc" : gs(M);
    Lo[G] = (Lo[G] || -492 * -13 + 9 * 467 + 10599 * -1) + (89 + 1 * -88);
    var j = "".concat(G, "-").concat(Gl(po + G + Lo[G]));
    return N ? "".concat(N, "-").concat(j) : j;
  }(o.displayName, o.parentComponentId) : g, C = o.displayName, d = void (-3 * 987 + -1818 + -9 * -531) === C ? function(M) {
    return Yo(M) ? "styled.".concat(M) : "Styled(".concat(W0(M), ")");
  }(i) : C, m = o.displayName && o.componentId ? "".concat(gs(o.displayName), "-").concat(o.componentId) : o.componentId || x, f = e && n.attrs ? n.attrs.concat(s).filter(Boolean) : s, w = o.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var k = n.shouldForwardProp;
    if (o.shouldForwardProp) {
      var T = o.shouldForwardProp;
      w = function(M, N) {
        return k(M, N) && T(M, N);
      };
    } else w = k;
  }
  var S = new ox(t, m, e ? n.componentStyle : void (-8 * -402 + -8406 + 5190));
  function H(M, N) {
    return function(G, j, he) {
      var Q = G.attrs, le = G.componentStyle, xe = G.defaultProps, ve = G.foldedComponentIds, ze = G.styledComponentId, ae = G.target, we = Mt.useContext(D0), We = ur(), De = G.shouldForwardProp || We.shouldForwardProp;
      _.NODE_ENV !== "production" && Ji(ze);
      var He = vl(j, we, xe) || mn, Ie = function($t, Te, nt) {
        var Ne = {};
        Ne.className = void (64 * 126 + 4961 + -13025), Ne.theme = nt;
        for (var Wt, it = Re(Re({}, Te), Ne), Qe = 0; Qe < $t.length; Qe += 8 * 961 + -6718 + -969) {
          var Ht = An(Wt = $t[Qe]) ? Wt(it) : Wt;
          for (var $e in Ht) it[$e] = $e === "className" ? Yt(it[$e], Ht[$e]) : $e === "style" ? Re(Re({}, it[$e]), Ht[$e]) : Ht[$e];
        }
        return Te.className && (it.className = Yt(it.className, Te.className)), it;
      }(Q, j, He), Be = Ie.as || ae, Oe = {};
      for (var de in Ie) void (4399 * -1 + 2 * -4645 + 13689) === Ie[de] || de[1654 * -3 + 6474 + 216 * -7] === "$" || de === "as" || de === "theme" && Ie.theme === He || (de === "forwardedAs" ? Oe.as = Ie.forwardedAs : De && !De(de, Be) || (Oe[de] = Ie[de], De || _.NODE_ENV !== "development" || Cc(de) || hs.has(de) || !gr.has(Be) || (hs.add(de), console.warn('styled-components: it looks like an unknown prop "'.concat(de, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ge = function($t, Te) {
        var nt = ur(), Ne = $t.generateAndInjectStyles(Te, nt.styleSheet, nt.stylis);
        return _.NODE_ENV !== "production" && Ji(Ne), Ne;
      }(le, Ie);
      _.NODE_ENV !== "production" && G.warnTooManyClasses && G.warnTooManyClasses(Ge);
      var Ke = Yt(ve, ze);
      return Ge && (Ke += " " + Ge), Ie.className && (Ke += " " + Ie.className), Oe[Yo(Be) && !gr.has(Be) ? "class" : "className"] = Ke, Oe.ref = he, ke(Be, Oe);
    }(Y, M, N);
  }
  H.displayName = d;
  var Y = Mt.forwardRef(H), z = {};
  return z.attrs = !0, z.componentStyle = !0, z.displayName = !0, z.foldedComponentIds = !0, z.shouldForwardProp = !0, z.styledComponentId = !0, z.target = !0, Y.attrs = f, Y.componentStyle = S, Y.displayName = d, Y.shouldForwardProp = w, Y.foldedComponentIds = e ? Yt(n.foldedComponentIds, n.styledComponentId) : "", Y.styledComponentId = m, Y.target = e ? n.target : i, Object.defineProperty(Y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(M) {
    this._foldedDefaultProps = e ? function(N) {
      for (var G = [], j = -7061 * 1 + 36 * 239 + -257 * 6; j < arguments.length; j++) G[j - (-158 * 17 + -3841 * 2 + 10369 * 1)] = arguments[j];
      for (var he = -3 * -2705 + 2068 * 3 + -14319, Q = G; he < Q.length; he++) lr(N, Q[he], !0);
      return N;
    }({}, n.defaultProps, M) : M;
  } }), _.NODE_ENV !== "production" && (yl(d, m), Y.warnTooManyClasses = /* @__PURE__ */ function(M, N) {
    var G = {}, j = !1;
    return function(he) {
      if (!j && (G[he] = !0, Object.keys(G).length >= 138 * -61 + -6977 + 15595)) {
        var Q = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(7410 + 1849 * 1 + -9059, " classes were generated for component ").concat(M).concat(Q, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), j = !0, G = {};
      }
    };
  }(d, m)), zr(Y, function() {
    return ".".concat(Y.styledComponentId);
  }), r && V0(Y, i, z), Y;
}
function fs(i, o) {
  for (var t = [i[3837 * -1 + 2276 + 1561]], e = -142 * 17 + 2906 * -1 + 152 * 35, n = o.length; e < n; e += -18 * -237 + 37 * 103 + -8076) t.push(o[e], i[e + (-5 * 1946 + -43 * 125 + 15106)]);
  return t;
}
var ms = function(i) {
  var o = {};
  return o.isCss = !0, Object.assign(i, o);
};
function ax(i) {
  for (var o = [], t = 1; t < arguments.length; t++) o[t - 1] = arguments[t];
  if (An(i) || bn(i)) return ms(Ft(fs(ho, dn([i], o, !0))));
  var e = i;
  return 10172 + -2543 * 4 === o.length && -5176 + -4 * 1532 + 11305 === e.length && typeof e[-20 * -211 + -6361 + -1 * -2141] == "string" ? Ft(e) : ms(Ft(fs(e, o)));
}
function Ir(i, o, t) {
  if (void (203 * 11 + 2419 * 2 + 2357 * -3) === t && (t = mn), !o) throw Bn(18 * 373 + 1787 + -8500, o);
  var e = function(n) {
    for (var r = [], a = 6 * -311 + -9288 + 115 * 97; a < arguments.length; a++) r[a - (-41 * -37 + 636 + -2152 * 1)] = arguments[a];
    return i(o, t, ax.apply(void (73 * -34 + 9952 + -7470), dn([n], r, !1)));
  };
  return e.attrs = function(n) {
    return Ir(i, o, Re(Re({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return Ir(i, o, Re(Re({}, t), n));
  }, e;
}
var N0 = function(i) {
  return Ir(rx, i);
}, ai = N0;
gr.forEach(function(i) {
  ai[i] = N0(i);
});
_.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Si = "__sc-".concat(jt, "__");
_.NODE_ENV !== "production" && _.NODE_ENV !== "test" && typeof window < "u" && (window[Si] || (window[Si] = 6647 * 1 + -8263 + 2 * 808), window[Si] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Si] += -9601 * -1 + -1867 + -703 * 11);
const sx = ai.div`
  position: relative;
`, gx = ai.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class re extends Error {
  constructor(t, e) {
    super(t);
    X(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof re) return t;
    let e;
    switch (t.name) {
      case "OverconstrainedError":
        e = "Minimum quality requirements are not met by your camera";
        break;
      case "NotReadableError":
      case "AbortError":
        e = "The webcam is already in use by another application";
        break;
      case "NotAllowedError":
        e = "To use your camera, you must allow permissions";
        break;
      case "NotFoundError":
        e = "There is no camera available to you";
        break;
      default:
        e = "An unknown camera error has occurred";
        break;
    }
    return new re(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof re) return t;
    const e = "An unexpected error has occurred";
    return new re(e);
  }
}
var Li = ((i) => (i.CONTINUE_DETECTION = "continue-detection", i.SWITCH_CAMERA = "switch-camera", i.TOGGLE_MIRROR = "toggle-mirror", i))(Li || {}), st = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", i.DOCUMENT_DETECTION = "document-auto-capture:document-detection", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(st || {}), cx = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(cx || {}), lx = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(lx || {}), xx = ((i) => (i.STATUS_CHANGED = "smile-auto-capture:status-changed", i))(xx || {});
const It = {};
It.CANDIDATE_SELECTION = "candidate_selection", It.DOCUMENT_CENTERING = "document_centering", It.DOCUMENT_NOT_PRESENT = "document_not_present", It.DOCUMENT_TOO_FAR = "document_too_far", It.SHARPNESS_TOO_LOW = "sharpness_too_low", It.BRIGHTNESS_TOO_LOW = "brightness_too_low", It.BRIGHTNESS_TOO_HIGH = "brightness_too_high", It.HOTSPOTS_PRESENT = "hotspots_present";
const rt = It, wt = {};
wt.isPresent = rt.DOCUMENT_NOT_PRESENT, wt.isNotSmall = rt.DOCUMENT_TOO_FAR, wt.isNotOutOfBounds = rt.DOCUMENT_CENTERING, wt.isSharp = rt.SHARPNESS_TOO_LOW, wt.isNotDim = rt.BRIGHTNESS_TOO_LOW, wt.isNotBright = rt.BRIGHTNESS_TOO_HIGH, wt.noHotspots = rt.HOTSPOTS_PRESENT;
const ux = wt, dr = {};
dr.FRONT = "user", dr.REAR = "environment";
const F0 = dr, En = {};
En.LOADING = "LOADING", En.ERROR = "ERROR", En.WAITING = "WAITING", En.RUNNING = "RUNNING";
const Ye = En;
var Ix = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(Ix || {});
const fo = ri(void 0);
fo.displayName = "AppStateContext";
function si() {
  const i = Jt(fo);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
const dx = fo.Provider;
class X0 extends Me {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const o = new re("An unknown error has occurred");
    (t = this.context) == null || t.handleError(o);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var o;
    return ((o = this.context) == null ? void 0 : o.appState) === Ye.ERROR ? null : this.props.children;
  }
}
X(X0, "contextType", fo);
const Cx = ai.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, px = ai.div`
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
function hx() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const fx = s0(
  ({ detectionDetails: i, isImageMirror: o }, t) => hx() ? (console.log(i), /* @__PURE__ */ Z(et, { children: [
    /* @__PURE__ */ Z(Cx, { ref: t, $isImageMirror: o }),
    /* @__PURE__ */ Z(px, { children: Object.entries(i).map(([e, n]) => /* @__PURE__ */ Z("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ Z("strong", { children: n })
    ] }, e)) })
  ] })) : null
), $i = ri(void 0);
$i.displayName = "AnalyticsContext";
function mx() {
  const i = Jt($i);
  if (i === void 0)
    throw new Error(`${$i.displayName} must be used within a AnalyticsProvider`);
  return i;
}
const _i = ri(void 0);
_i.displayName = "LicenseContext";
function $r() {
  const i = Jt(_i);
  if (i === void 0)
    throw new Error(`${_i.displayName} must be used within a LicenseProvider`);
  return i;
}
function Ax({ licensePath: i, licenseValidator: o, wasmDirectoryPath: t }) {
  const [e, n] = je(), r = e !== void 0;
  ye(() => {
    async function s() {
      await o.init(t, i), n(o.getLicenseResult());
    }
    s();
  }, [o, t, i, n]);
  const a = {};
  return a.licenseResult = e, a.isLicenseValidated = r, a;
}
var M0 = ((i) => (i.DOCUMENT = "document-auto-capture:dev", i.FACE = "face-auto-capture:dev", i))(M0 || {});
const Cr = {};
Cr.SIMD = "simd", Cr.NO_SIMD = "no-simd";
const As = Cr, pr = {};
pr.FREEMIUM = "Freemium", pr.PREMIUM = "Premium";
const hr = pr, Di = {};
Di.VISIBLE = "VISIBLE", Di.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", Di.HIDDEN = "HIDDEN";
const qi = Di;
function bx({ licenseResult: i }) {
  return i != null && i.isValid ? hr.PREMIUM : hr.FREEMIUM;
}
function yx({
  children: i,
  licensePath: o,
  licenseValidator: t,
  wasmDirectoryPath: e
}) {
  const { isLicenseValidated: n, licenseResult: r } = Ax({
    licenseValidator: t,
    licensePath: o,
    wasmDirectoryPath: e
  }), a = Le(
    () => ({
      appTier: bx({ licenseResult: r }),
      isLicenseValidated: n,
      licenseResult: r,
      licenseValidator: t
    }),
    [n, r, t]
  );
  return /* @__PURE__ */ Z(_i.Provider, { value: a, children: i });
}
function vx({ analytics: i, licenseResult: o }) {
  return o !== void (-1 * 7891 + 2234 + -5657 * -1) && !o.isAnalyticsDisabled ? i : void (-9708 + 2 * 4854);
}
function wx({ analytics: i, appKey: o, appTier: t, licenseResult: e, licenseValidator: n }) {
  const r = {};
  r.analytics = i, r.licenseResult = e;
  const a = vx(r);
  return ye(() => {
    a && a.init(o);
  }, [a, o]), ye(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), a && a.sendLicenseResultData(t, n.getCustomerName()));
  }, [a, n, e, t]), ye(() => {
    if (a)
      return window.addEventListener("beforeunload", a.endSession), () => {
        a.endSession(), window.removeEventListener("beforeunload", a.endSession);
      };
  }, [a]), a;
}
function Sx({
  analytics: i,
  appKey: o,
  children: t
}) {
  const { appTier: e, licenseResult: n, licenseValidator: r } = $r(), a = wx({ analytics: i, appTier: e, appKey: o, licenseResult: n, licenseValidator: r }), s = Le(
    () => ({
      analytics: a
    }),
    [a]
  );
  return /* @__PURE__ */ Z($i.Provider, { value: s, children: t });
}
const Bx = 2463 * -3 + -8348 + 15737 + 0.8, Gx = -5151 + 817 * 11 + -3836 + 0.43, Zx = 207 + -1194 * 1 + 987 + 0.03, kx = 2217 + 1 * -9802 + 205 * 37 + 0.5, Wx = 320 + 73 * 123 + -9299 + 0.25, Hx = -1 * -8504 + 2721 * -1 + -5783 + 0.9, Ox = 2 * -3593 + 1855 + 5331 + 0.1, Ni = {};
Ni.minDuration = 1e3, Ni.maxDuration = 2500, Ni.minFrames = 10;
const Do = Ni, fr = {};
fr.max = 100, fr.min = 10;
const bs = fr, Kx = 1521 * -2 + -3 * -539 + -1 * -2145, Vx = -4012 + 3 * 1511 + -321, Rx = -4158 + -1 * 8081 + -371 * -33, j0 = "AES-CBC", U0 = "RSA-OAEP", Tx = "SHA-256", Ex = "image/jpeg", Px = 5296 + -9427 * -1 + -327 * 45, Yx = "SAM v1.39.3 for idcards", Lx = "dot_embedded_bg.wasm", Bi = (i, o) => Math.hypot(o.x - i.x, o.y - i.y), Dx = (i) => i.length < -13 * -690 + 2074 + 11043 * -1 ? 1 * -647 + 808 * -5 + 4687 : i.reduce((t, e) => t + e, 0) / i.length, J0 = (i) => Number.parseFloat(i.toFixed(3)), Nx = (i) => {
  const o = i.getContext("2d");
  o && o.clearRect(-7329 * -1 + 39 * -223 + 36 * 38, 0, o.canvas.width, o.canvas.height);
}, Fx = 4485 + -5112 * 1 + 157 * 4 + 0.5, Xx = -1433 + -971 * -1 + 462 + 0.85, No = 1e3, Mx = 4203 + -3 * 1738 + 1611, jx = -334 + -9539 * 1 + 9873, Ux = (i, o) => i < No && o >= No ? No : i, Jx = (i, o) => i < o ? i : o, _r = ({ height: i, width: o }) => {
  let t;
  return o > i ? t = Ux(i, o) : t = o, { width: t, height: Jx(i, t) };
}, z0 = (i) => {
  const o = _r(i).width, t = o * Xx, e = (i.width - t) / (-23 * 286 + -2389 * 2 + 11358), n = t / Fx, r = (i.height - n) / (-1 * -4371 + 133 * -57 + 803 * 4), a = {};
  return a.shiftX = e, a.shiftY = r, a.width = t, a.height = n, a;
}, zx = (i) => {
  const { height: o, shiftX: t, shiftY: e, width: n } = z0(i), r = {};
  return r.shiftX = t / i.width, r.shiftY = e / i.height, r.width = n / i.width, r.height = o / i.height, r;
}, Qx = (i) => {
  const { bottomLeft: o, bottomRight: t, topLeft: e, topRight: n } = i, r = Bi(e, n), a = Bi(n, t), s = Bi(o, t), g = Bi(e, o);
  return Math.min(r, a, s, g);
}, $x = "@innovatrics/dot-common-auto-capture", _x = "6.1.4", qx = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, eu = {
  "@dot/proto-files": "2.0.4",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, tu = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.1"
}, nu = {
  name: $x,
  private: !0,
  version: _x,
  scripts: qx,
  dependencies: eu,
  devDependencies: tu
}, qr = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), ys = () => {
  const i = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return i && o;
}, iu = () => {
  const i = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && o ? !1 : o;
}, mr = (i) => new Promise((o) => {
  setTimeout(o, i);
}), On = (i) => JSON.parse(JSON.stringify(i, (o, t) => typeof t == "number" ? J0(t) : t)), Q0 = () => nu.version, $0 = (i) => new URL(i).hostname.replace("www.", ""), ou = () => $0(window.location.href) === "localhost", Gi = (i) => Object.entries(i).map(([o, t]) => encodeURIComponent(o) + "=" + encodeURIComponent(t)).join("&"), ru = (i, o) => {
  const t = i && performance.now() - i;
  return o >= Do.minFrames ? t > Do.minDuration : t > Do.maxDuration;
}, au = (i, o) => JSON.stringify(i) === JSON.stringify(o) ? o : i;
var Pe = {};
Pe.VITE_FACE_COUNTLY_APP_KEY = "5f83e83ee4cee1ab6e5bbf86e215644473299675", Pe.VITE_MAGNIFEYE_COUNTLY_APP_KEY = "d5ca54dabfb1a2c72d7090c9c8980252a879da44", Pe.VITE_DOCUMENT_COUNTLY_APP_KEY = "065cf6e242fc5e785cd17eebfbfbbd212a33133b", Pe.VITE_COUNTLY_URL = "https://innovatrics.count.ly", Pe.VITE_SMILE_COUNTLY_APP_KEY = "d64319129bb0ee02eccfab418edba9629a97d6b6", Pe.VITE_RSA_PUBLIC_KEY = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", Pe.BASE_URL = "/", Pe.MODE = "production", Pe.DEV = !1, Pe.PROD = !0, Pe.SSR = !1, Pe.VITE_PACKAGE_VERSION = "6.1.4";
var su = Pe;
const gu = () => {
  var i;
  return ((i = su.VITE_APP_ENV) == null ? void 0 : i.toLowerCase()) === "dev";
};
class _0 extends Array {
  constructor(t) {
    super();
    X(this, "size");
    this.size = t;
  }
  pushFixed(...t) {
    if (t.length > this.size) {
      const e = t.slice(-this.size);
      this.push(...e);
      return;
    }
    this.length === this.size && this.splice(0, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(1 * 9873 + 8 * 1219 + -19625);
  }
}
const cu = (i, o, t = Ex) => new Promise((e) => {
  i.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, o);
}), lu = async (i) => cu(i, -78 * -8 + 7214 + -7748), xu = (i, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, o.shiftX, o.shiftY, o.width, o.height, 3131 * 1 + -7123 + 3992, 3225 + -9 * 106 + 3 * -757, t.width, t.height), t;
}, uu = (i) => {
  const o = i.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(2 * 2377 + 2847 + -7601, 0, i.width, i.height);
  return t;
}, Iu = (i, o, t, e) => {
  const n = i.getContext("2d");
  n && (n.beginPath(), n.strokeStyle = t, n.rect(o.topLeft.x, o.topLeft.y, o.width, o.height), n.stroke());
}, Fo = (i, o, t) => {
  const { height: e, shiftX: n, shiftY: r, width: a } = o, s = {};
  s.x = n, s.y = r;
  const g = {};
  g.topLeft = s, g.width = a, g.height = e, g.color = t, Iu(i, g, t);
};
function du({ canvas: i, color: o, fill: t, offset: e = 6796 * 1 + -6709 + -3 * 29, polygon: n }) {
  const r = i.getContext("2d");
  if (!r) return;
  const { bottomLeft: a, bottomRight: s, topLeft: g, topRight: x } = n;
  t ? r.fillStyle = o : r.strokeStyle = o, r.beginPath(), r.moveTo(g.x + e, g.y + e), r.lineTo(x.x + e, x.y + e), r.lineTo(s.x + e, s.y + e), r.lineTo(a.x + e, a.y + e), r.closePath(), t ? r.fill() : r.stroke();
}
const Cu = (i, o) => {
  const t = i.getContext("2d");
  t && t.drawImage(o, -27 * -117 + 1 * 3889 + -8 * 881, -7334 + 3 * 1318 + -5 * -676);
}, pu = (i, o) => {
  const { height: t, shiftX: e, shiftY: n, width: r } = o;
  return !(i.x < e || i.x > e + r || i.y < n || i.y > n + t);
}, hu = (i, o) => Object.values(i).every((t) => pu(t, o)), q0 = ri(null), eg = () => {
  const i = Jt(q0);
  if (!i)
    throw new Error("Missing provider for CameraOptionsContext");
  return i;
}, fu = (i) => {
  const { cameraFacing: o, licensePath: t, onError: e, onPhotoTaken: n, sessionToken: r, thresholds: a, wasmDirectoryPath: s } = i, g = qr() ? "environment" : "user";
  return {
    onPhotoTaken: n,
    onError: e,
    cameraFacing: o ?? g,
    wasmDirectoryPath: s,
    licensePath: t,
    sessionToken: r,
    thresholds: {
      confidenceThreshold: (a == null ? void 0 : a.confidenceThreshold) ?? Bx,
      sharpnessThreshold: (a == null ? void 0 : a.sharpnessThreshold) ?? kx,
      brightnessLowThreshold: (a == null ? void 0 : a.brightnessLowThreshold) ?? Wx,
      brightnessHighThreshold: (a == null ? void 0 : a.brightnessHighThreshold) ?? Hx,
      hotspotsScoreThreshold: (a == null ? void 0 : a.hotspotsScoreThreshold) ?? Ox,
      sizeSmallThreshold: (a == null ? void 0 : a.sizeSmallThreshold) ?? Gx,
      outOfBoundsThreshold: (a == null ? void 0 : a.outOfBoundsThreshold) ?? Zx
    }
  };
}, mu = ({ cameraOptions: i, children: o }) => {
  const t = Le(() => ({
    documentCameraOptions: fu(i)
  }), [i]);
  return /* @__PURE__ */ Z(q0.Provider, { value: t, children: o });
}, Au = (i, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(i, t));
}, ao = class ao {
  constructor() {
    X(this, "lastDetails", {});
    X(this, "delayedTime", -2 * -3721 + 1747 * 1 + -9189);
  }
  static getInstance() {
    return !this._instance && (this._instance = new ao()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 7620 + -2 * -1523 + -10666;
  }
  isDetailChanged(o, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(o, t) {
    this.isDetailChanged(o, t) && Au(o, t);
  }
  dispatchDelayedCustomEventOnChange(o, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(o, t), this.delayedTime = n);
  }
};
X(ao, "_instance");
let Un = ao;
const gi = Un.getInstance(), vs = (i, o, t = Mx) => {
  const e = {};
  e.instructionCode = o;
  const n = e;
  gi.dispatchDelayedCustomEventOnChange(i, n, t);
}, ws = (i, o) => {
  gi.dispatchCustomEventOnChange(i, o);
}, bu = (i, o) => {
  gi.dispatchCustomEventOnChange(i, o);
}, yu = (i, o) => {
  const t = {};
  t.size = o;
  const e = t;
  gi.dispatchCustomEventOnChange(i, e);
}, vu = (i, o, t) => {
  const e = o.confidence < t ? void 0 : o, n = {};
  n.detectedObject = e;
  const r = n;
  gi.dispatchCustomEventOnChange(i, r);
}, wu = (i, o) => {
  if (gu()) {
    const t = {};
    t.candidateSelectionImages = o;
    const e = t;
    Un.getInstance().dispatchCustomEventOnChange(i, e);
  }
}, Su = (i, o) => {
  const { cameraResolution: t, shouldMirror: e } = o;
  ye(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, bu(i, n);
  }, [t, e, i]);
}, Bu = (i) => i === st.CONTROL ? !qr() : !0, Gu = (i, o) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: r } = si(), [a, s] = je(), g = Le(() => {
    const C = r && o && o.isStreaming && o.getCameraSettings().facingMode;
    return C ? a ?? C === "user" : a ?? Bu(i);
  }, [o, a, i, r]);
  ye(() => {
    const C = () => {
      t !== Ye.LOADING && e(Ye.RUNNING);
    }, d = () => {
      s(a === void 0 ? !g : !a);
    }, m = async () => {
      if (o) {
        e(Ye.LOADING);
        try {
          await o.switchCamera(), e(Ye.RUNNING);
        } catch (w) {
          if (w instanceof Error) {
            n(re.fromCameraError(w));
            return;
          }
        }
        s(void 0);
      }
    }, f = (w) => {
      var k;
      switch ((k = w.detail) == null ? void 0 : k["instruction"]) {
        case Li.CONTINUE_DETECTION:
          C();
          break;
        case Li.TOGGLE_MIRROR:
          d();
          break;
        case Li.SWITCH_CAMERA:
          m();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(i, f), () => {
      document.removeEventListener(i, f);
    };
  }, [t, o, n, a, e, g, i]);
  const x = {};
  return x.shouldMirror = g, x;
};
class Zu {
  constructor() {
    X(this, "canvasElement");
    X(this, "context");
    this.canvasElement = document.createElement("canvas"), this.context = this.canvasElement.getContext("2d");
  }
  cloneMutable(o) {
    this.canvasElement.width = o.width, this.canvasElement.height = o.height, Cu(this.canvasElement, o);
  }
}
async function tg() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Xo() {
  return (await tg()).filter((o) => o.kind === "videoinput");
}
function Mo(i) {
  i.getTracks().forEach((t) => t.stop());
}
function Ss(i) {
  return i.getVideoTracks()[0];
}
const Fi = {};
Fi.width = 1920, Fi.height = 1080, Fi.facingMode = F0.FRONT;
const ku = Fi;
var _e;
class ng {
  constructor({ defaultVideoConstrains: o = ku, minCameraShorterSide: t = Kx } = {}) {
    X(this, "options");
    X(this, "availableCameraProperties", []);
    Se(this, _e, null);
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return $(this, _e);
  }
  get videoTrack() {
    return $(this, _e) ? Ss($(this, _e)) : void (-3624 + -4 * 985 + 7564);
  }
  get isCameraActive() {
    var o;
    return !!((o = $(this, _e)) != null && o.active);
  }
  static async requestPermission() {
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    Mo(t);
  }
  async open(o = {}) {
    ys() && await mr(8649 + 722 * 12 + 73 * -231), me(this, _e, await navigator.mediaDevices.getUserMedia(o)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const o = await Xo();
    if (o.length <= -11 * 191 + -7391 + 9493) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = o.findIndex((s) => s.deviceId === e.deviceId), r = o[n + (-18 * -329 + 3723 + -9644)] ?? o[3378 * 2 + -1958 + 1 * -4798], a = this.getConstraints(t, r);
    await this.open(a);
  }
  close() {
    $(this, _e) && (Mo($(this, _e)), me(this, _e, null));
  }
  async getProperties() {
    const o = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = o;
    const n = {};
    return n.currentCameraProperties = e, n.availableCameraProperties = this.availableCameraProperties, n;
  }
  getSettings() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const o = this.getSettings();
    if (!o.width) throw new re("Video width is undefined");
    if (!o.height) throw new re("Video height is undefined");
    const t = {};
    return t.width = o.width, t.height = o.height, t;
  }
  async getDeviceName() {
    const o = this.getSettings(), t = await tg(), e = t.find((n) => n.deviceId === o.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(o) {
    return o === F0.FRONT ? void (1 * -5188 + -1877 + -785 * -9) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return qr() ? (await Xo()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (2141 * -2 + 933 * -1 + 5215);
  }
  async collectAvailableCamerasInfo() {
    const o = await Xo();
    for (const t of o) {
      ys() && await mr(-19 * 309 + -2651 * -3 + -1632);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const r = await navigator.mediaDevices.getUserMedia(n), a = Ss(r);
        if (!a) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const s = a.getSettings(), g = { ...s };
        g.deviceName = a.label;
        const x = {};
        x.cameraProperties = g;
        const C = x;
        this.availableCameraProperties.push(C), Mo(r);
      } catch (e) {
        e instanceof Error && re.logError(e);
      }
    }
  }
  getConstraints(o, t) {
    const e = { ...this.options.defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t.deviceId } : void (-339 * 28 + -48 * -37 + 7716);
    const n = {};
    return n.video = e, n.audio = !1, n;
  }
  checkVideoTrackSettings() {
    var e;
    const o = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(o != null && o.height) || !(o != null && o.width))
      throw this.close(), new re("Could not init camera settings");
    if (typeof this.options.minCameraShorterSide != "number") return;
    if (Math.min(o == null ? void 0 : o.width, o == null ? void 0 : o.height) < this.options.minCameraShorterSide)
      throw this.close(), new re("Could not init video because of low camera resolution: " + o.width + "x" + o.height + ".");
  }
}
_e = new WeakMap();
class Wu {
  constructor(o, t) {
    X(this, "canvas");
    this.videoHandler = o, this.cameraHandler = t, this.canvas = new Zu();
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(o = {}) {
    await ng.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(o.facingMode), e = this.cameraHandler.getConstraints(o, t);
    await this.cameraHandler.open(e), iu() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var t;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const o = (t = this.cameraHandler.videoTrack) == null ? void 0 : t.getSettings();
    if (!(o != null && o.width)) throw new re("Cant take photo - video width is undefined");
    if (!(o != null && o.height)) throw new re("Cant take photo - video height is undefined");
    if (!this.canvas.context) throw new re("Cant take photo - cant create context");
    return this.canvas.canvasElement.width = o.width, this.canvas.canvasElement.height = o.height, this.canvas.context.drawImage(this.videoHandler.videoElement, -844 * -2 + 79 * 71 + -1 * 7297, -1331 + -1 * 5705 + 7036), { image: this.canvas.canvasElement, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async switchCamera() {
    await this.cameraHandler.toggle(), await this.mountVideoStream();
  }
  async getCameraProperties() {
    return this.cameraHandler.getProperties();
  }
  getCameraSettings() {
    return this.cameraHandler.getSettings();
  }
  getCameraResolution() {
    return this.cameraHandler.getResolution();
  }
  async getDeviceName() {
    return this.cameraHandler.getDeviceName();
  }
  async mountVideoStream() {
    if (!this.cameraHandler.mediaStream) throw Error("Media Stream must be initialized to stream");
    await this.videoHandler.play(this.cameraHandler.mediaStream);
  }
}
var Ct;
class Hu {
  constructor(o) {
    Se(this, Ct);
    me(this, Ct, o);
  }
  get videoElement() {
    return $(this, Ct);
  }
  async play(o) {
    $(this, Ct).srcObject = o, await $(this, Ct).play();
  }
  stop() {
    $(this, Ct).srcObject = null;
  }
  hasSrcObject() {
    return !!$(this, Ct).srcObject;
  }
}
Ct = new WeakMap();
function Ou(i, o) {
  const t = kt(), { handleError: e, setIsCameraReady: n } = si(), [r, a] = je(), s = pn((x) => {
    a((C) => au(x, C));
  }, []);
  ye(() => ((async () => {
    if (!i.current) {
      e(new re("Something went wrong during video initialization"));
      return;
    }
    const C = new Hu(i.current), d = new ng(), m = new Wu(C, d);
    try {
      const f = {};
      f.facingMode = o, await m.startVideoStream(f);
    } catch (f) {
      if (f instanceof Error) {
        e(re.fromCameraError(f));
        return;
      }
    }
    n(!0), s(m.getCameraResolution()), t.current = m;
  })(), function() {
    t.current && t.current.stopStreaming(), n(!1);
  }), [o, e, n, i, s]);
  const g = {};
  return g.cameraService = t.current, g.cameraResolution = r, g.onCameraResolutionChange = s, g;
}
function Ku(i, o) {
  ye(() => {
    function t() {
      i.current && yu(o, i.current.getBoundingClientRect());
    }
    return t(), window.addEventListener("resize", t), () => {
      window.removeEventListener("resize", t);
    };
  }, [i, o]);
}
var Vu = Symbol.for("preact-signals");
function ea() {
  if (xn > -1773 + 887 * 2)
    xn--;
  else {
    for (var i, o = !1; void (-5526 + 2 * 2763) !== Xn; ) {
      var t = Xn;
      for (Xn = void (-5601 + 835 * 3 + 3096), Ar++; void (-9994 + -2113 * -3 + 3655) !== t; ) {
        var e = t.o;
        if (t.o = void (3 * -223 + -1 * 9457 + -83 * -122), t.f &= -(-197 * -1 + -4570 + 1 * 4376), !(43 * 89 + -3363 + -456 & t.f) && rg(t)) try {
          t.c();
        } catch (n) {
          !o && (i = n, o = !(-8801 + -11 * -775 + 276));
        }
        t = e;
      }
    }
    if (Ar = -3064 + 8962 * 1 + -5898, xn--, o) throw i;
  }
}
var te = void (355 * 13 + 4132 + -8747), Xn = void (56 * 149 + 5857 * -1 + 2487 * -1), xn = 0, Ar = 1340 + 5 * -268, eo = 2527 * -3 + 9025 + -4 * 361;
function ig(i) {
  if (void (89 * 17 + 8423 + -9936) !== te) {
    var o = i.n;
    if (void (1716 + 429 * -4) === o || o.t !== te)
      return o = { i: 0, S: i, p: te.s, n: void (268 * 17 + 1392 + -5948), t: te, e: void (3692 + -2201 * -2 + -8094), x: void (1 * 1874 + -5944 + 4070), r: o }, void (-9355 + 8766 * -1 + -1 * -18121) !== te.s && (te.s.n = o), te.s = o, i.n = o, -8261 + -27 * 311 + 16690 & te.f && i.S(o), o;
    if (-(2557 * 3 + 849 * 5 + -11915) === o.i)
      return o.i = -10026 + -2 * -5013, void (-1114 + -727 * -1 + 387) !== o.n && (o.n.p = o.p, void (-2 * 4946 + 9589 * -1 + 847 * 23) !== o.p && (o.p.n = o.n), o.p = te.s, o.n = void (3858 * -1 + 97 * -5 + -4343 * -1), te.s.n = o, te.s = o), o;
  }
}
function be(i) {
  this.v = i, this.i = 4 * -2369 + 7472 + -2004 * -1, this.n = void (-13508 + 22 * 614), this.t = void (6794 * -1 + -10 * 769 + 14484);
}
be.prototype.brand = Vu, be.prototype.h = function() {
  return !(4879 + 125 * 59 + -12254);
}, be.prototype.S = function(i) {
  this.t !== i && void (-7086 + -1 * -7086) === i.e && (i.x = this.t, void (7076 + 6 * -673 + -3038) !== this.t && (this.t.e = i), this.t = i);
}, be.prototype.U = function(i) {
  if (void (17 * -377 + 70 * -131 + 15579) !== this.t) {
    var o = i.e, t = i.x;
    void (-7 * -690 + 3038 + -281 * 28) !== o && (o.x = t, i.e = void 0), void (-973 * -1 + 1 * -6238 + 65 * 81) !== t && (t.e = o, i.x = void (-3116 * 1 + 8491 + -1075 * 5)), i === this.t && (this.t = t);
  }
}, be.prototype.subscribe = function(i) {
  var o = this;
  return na(function() {
    var t = o.value, e = te;
    te = void (-761 + -9 * 330 + 3731);
    try {
      i(t);
    } finally {
      te = e;
    }
  });
}, be.prototype.valueOf = function() {
  return this.value;
}, be.prototype.toString = function() {
  return this.value + "";
}, be.prototype.toJSON = function() {
  return this.value;
}, be.prototype.peek = function() {
  var i = te;
  te = void (13623 + 13623 * -1);
  try {
    return this.value;
  } finally {
    te = i;
  }
}, Object.defineProperty(be.prototype, "value", { get: function() {
  var i = ig(this);
  return void (-8574 + -3849 * 2 + -4 * -4068) !== i && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (Ar > 5005 + -139 * -38 + -10187) throw new Error("Cycle detected");
    this.v = i, this.i++, eo++, xn++;
    try {
      for (var o = this.t; o !== void 0; o = o.x) o.t.N();
    } finally {
      ea();
    }
  }
} });
function og(i) {
  return new be(i);
}
function rg(i) {
  for (var o = i.s; void (9407 + -7 * -851 + -15364) !== o; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !(-1642 + -9 * 289 + 4243);
  return !(-71 * -29 + -1460 + -26 * 23);
}
function ag(i) {
  for (var o = i.s; void (2 * 1634 + -51 * -101 + 1 * -8419) !== o; o = o.n) {
    var t = o.S.n;
    if (void (-6704 + -4567 * 1 + 289 * 39) !== t && (o.r = t), o.S.n = o, o.i = -(-7398 + 1358 * 3 + 3325), void (-2 * 464 + 3188 * -2 + -7304 * -1) === o.n) {
      i.s = o;
      break;
    }
  }
}
function sg(i) {
  for (var o = i.s, t = void (-5771 * 1 + 5483 * 1 + 12 * 24); void (-8821 + 138 * 63 + 127) !== o; ) {
    var e = o.p;
    o.i === -1 ? (o.S.U(o), void (-9729 + -463 * -3 + -20 * -417) !== e && (e.n = o.n), o.n !== void 0 && (o.n.p = e)) : t = o, o.S.n = o.r, void (9590 + -1754 * -3 + -14852) !== o.r && (o.r = void (-6380 + 1 * 541 + 5839)), o = e;
  }
  i.s = t;
}
function gn(i) {
  be.call(this, void 0), this.x = i, this.s = void (1717 + -1 * -7894 + -1373 * 7), this.g = eo - (2 * -2909 + -1971 + -7790 * -1), this.f = -8204 + -1255 * 4 + 1 * 13228;
}
(gn.prototype = new be()).h = function() {
  if (this.f &= -(-2985 + -43 * 20 + 52 * 74), 2202 * 3 + 507 + -2 * 3556 & this.f) return !(119 * 61 + 5179 * 1 + -12437 * 1);
  if (45 * 89 + 1 * -3076 + 39 * -23 == (-668 * -8 + 3340 + -376 * 23 & this.f)) return !0;
  if (this.f &= -5, this.g === eo) return !(-4422 + 66 * 67);
  if (this.g = eo, this.f |= 1, this.i > -4777 + -6577 * 1 + 7 * 1622 && !rg(this)) return this.f &= -(-4803 + 3595 * 1 + 1210), !(1 * -2804 + -9357 * 1 + 12161);
  var i = te;
  try {
    ag(this), te = this;
    var o = this.x();
    (16 & this.f || this.v !== o || 6 * -667 + -1049 + 5051 === this.i) && (this.v = o, this.f &= -(10 * 347 + 901 + -4354), this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return te = i, sg(this), this.f &= -(1 * -8071 + -705 * 1 + 8778), !(1 * 2962 + -7499 + 4537 * 1);
}, gn.prototype.S = function(i) {
  if (void (2 * -1960 + 8311 + -4391) === this.t) {
    this.f |= 2 * 1678 + -910 + 2410 * -1;
    for (var o = this.s; void (8547 + -2849 * 3) !== o; o = o.n) o.S.S(o);
  }
  be.prototype.S.call(this, i);
}, gn.prototype.U = function(i) {
  if (void (5088 + -106 * 48) !== this.t && (be.prototype.U.call(this, i), void (6020 + 1505 * -4) === this.t)) {
    this.f &= -(8440 + 10 * -622 + -2187);
    for (var o = this.s; void (1 * 4415 + -31 * -313 + -14118) !== o; o = o.n) o.S.U(o);
  }
}, gn.prototype.N = function() {
  if (!(8171 * -1 + -5163 + 13336 & this.f)) {
    this.f |= -347 * -25 + 2886 + -11555 * 1;
    for (var i = this.t; void (-1 * -4269 + -2 * 1779 + 711 * -1) !== i; i = i.x) i.t.N();
  }
}, Object.defineProperty(gn.prototype, "value", { get: function() {
  if (643 * -3 + -7843 + 29 * 337 & this.f) throw new Error("Cycle detected");
  var i = ig(this);
  if (this.h(), void (-953 * 5 + 1914 * 1 + 2851) !== i && (i.i = this.i), 2456 * 2 + -1 * 5782 + 886 & this.f) throw this.v;
  return this.v;
} });
function Ru(i) {
  return new gn(i);
}
function gg(i) {
  var o = i.u;
  if (i.u = void (1013 * 4 + 8212 + -12264), typeof o == "function") {
    xn++;
    var t = te;
    te = void (2878 * 1 + -19 * 127 + -155 * 3);
    try {
      o();
    } catch (e) {
      throw i.f &= -(1088 + 1 * -3511 + 2425 * 1), i.f |= 7077 + -1 * -5303 + -12372, ta(i), e;
    } finally {
      te = t, ea();
    }
  }
}
function ta(i) {
  for (var o = i.s; void (-714 + -3 * -1531 + -3879) !== o; o = o.n) o.S.U(o);
  i.x = void (92 + -889 * -9 + 1 * -8093), i.s = void (277 * 17 + 3791 * 1 + 68 * -125), gg(i);
}
function Tu(i) {
  if (te !== this) throw new Error("Out-of-order effect");
  sg(this), te = i, this.f &= -(26 * 186 + -694 * 10 + 26 * 81), 4427 + -9 * -1030 + 169 * -81 & this.f && ta(this), ea();
}
function Pn(i) {
  this.x = i, this.u = void (-312 * 32 + -3945 + 13929), this.s = void (-1205 * -1 + -7583 * -1 + -8788), this.o = void (6577 * 1 + 1 * 8383 + -14960), this.f = 91 * 19 + -3221 + 1524;
}
Pn.prototype.c = function() {
  var i = this.S();
  try {
    if (6449 * -1 + -3357 * -1 + -10 * -310 & this.f || this.x === void 0) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    i();
  }
}, Pn.prototype.S = function() {
  if (-8610 + 1 * 8611 & this.f) throw new Error("Cycle detected");
  this.f |= 8969 * -1 + 6158 * -1 + 15128, this.f &= -(-298 * -1 + 9577 * -1 + -54 * -172), gg(this), ag(this), xn++;
  var i = te;
  return te = this, Tu.bind(this, i);
}, Pn.prototype.N = function() {
  !(2 * -2032 + 613 * 6 + -194 * -2 & this.f) && (this.f |= 9003 + -24 * -107 + -11569, this.o = Xn, Xn = this);
}, Pn.prototype.d = function() {
  this.f |= 10786 + -10778 * 1, -17868 + -1 * -17869 & this.f || ta(this);
};
function na(i) {
  var o = new Pn(i);
  try {
    o.c();
  } catch (t) {
    throw o.d(), t;
  }
  return o.d.bind(o);
}
var jo;
function ln(i, o) {
  L[i] = o.bind(null, L[i] || function() {
  });
}
function Zi(i) {
  jo && jo(), jo = i && i.S();
}
function cg(i) {
  var o = this, t = i.data, e = lg(t);
  e.value = t;
  var n = Le(function() {
    for (var r = o.__v; r = r.__; ) if (r.__c) {
      r.__c.__$f |= -8895 * 1 + 1 * -9110 + 18009;
      break;
    }
    return o.__$u.c = function() {
      var a;
      !js(n.peek()) && -901 + -5444 * -1 + 20 * -227 === ((a = o.base) == null ? void (-1107 * -3 + -7433 + 1 * 4112) : a.nodeType) ? o.base.data = n.peek() : (o.__$f |= 429 * -22 + 9360 + 79 * 1, o.setState({}));
    }, Ru(function() {
      var a = e.value.value;
      return 8692 + 3261 * 1 + -11953 * 1 === a ? 0 : !(-9215 + 10 * 171 + 7505) === a ? "" : a || "";
    });
  }, []);
  return n.value;
}
cg.displayName = "_st";
var br = {};
br.configurable = !(-7 * 433 + 2515 + 516), br.value = void (-2 * -128 + 9221 + 351 * -27);
var yr = {};
yr.configurable = !(-3 * 2979 + -334 * -1 + 1 * 8603), yr.value = cg;
var vr = {};
vr.configurable = !0, vr.get = function() {
  var i = {};
  return i.data = this, i;
};
var wr = {};
wr.configurable = !(7788 + -3 * 687 + -5727), wr.value = 1;
var Kn = {};
Kn.constructor = br, Kn.type = yr, Kn.props = vr, Kn.__b = wr, Object.defineProperties(be.prototype, Kn), ln("__b", function(i, o) {
  if (typeof o.type == "string") {
    var t, e = o.props;
    for (var n in e) if (n !== "children") {
      var r = e[n];
      r instanceof be && (t || (o.__np = t = {}), t[n] = r, e[n] = r.peek());
    }
  }
  i(o);
}), ln("__r", function(i, o) {
  Zi();
  var t, e = o.__c;
  e && (e.__$f &= -(-499 * 3 + -6229 + 7728), void (8592 + 706 * -8 + -2944) === (t = e.__$u) && (e.__$u = t = function(n) {
    var r;
    return na(function() {
      r = this;
    }), r.c = function() {
      e.__$f |= 3 * 2520 + -8462 * -1 + -16021, e.setState({});
    }, r;
  }())), Zi(t), i(o);
}), ln("__e", function(i, o, t, e) {
  Zi(), i(o, t, e);
}), ln("diffed", function(i, o) {
  Zi();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, n = o.props;
    if (e) {
      var r = t.U;
      if (r) for (var a in r) {
        var s = r[a];
        void (-2 * 2777 + -559 * 5 + 8349) !== s && !(a in e) && (s.d(), r[a] = void (1 * 983 + 2212 + -15 * 213));
      }
      else t.U = r = {};
      for (var g in e) {
        var x = r[g], C = e[g];
        void (-7020 + 623 * 7 + 2659) === x ? (x = Eu(t, g, C, n), r[g] = x) : x.o(C, n);
      }
    }
  }
  i(o);
});
function Eu(i, o, t, e) {
  var n = o in i && i.ownerSVGElement === void 0, r = og(t);
  return { o: function(a, s) {
    r.value = a, e = s;
  }, d: na(function() {
    var a = r.value.value;
    e[o] !== a && (e[o] = a, n ? i[o] = a : a ? i.setAttribute(o, a) : i.removeAttribute(o));
  }) };
}
ln("unmount", function(i, o) {
  if (typeof o.type == "string") {
    var t = o.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (-9962 * 1 + -1 * 869 + 10831);
        for (var n in e) {
          var r = e[n];
          r && r.d();
        }
      }
    }
  } else {
    var a = o.__c;
    if (a) {
      var s = a.__$u;
      s && (a.__$u = void (233 * 20 + 727 * 7 + 9749 * -1), s.d());
    }
  }
  i(o);
}), ln("__h", function(i, o, t, e) {
  (e < 3 || -1007 * -3 + 4771 * -1 + 1 * 1759 === e) && (o.__$f |= -2 * -3368 + 18 * -377 + 13 * 4), i(o, t, e);
}), Me.prototype.shouldComponentUpdate = function(i, o) {
  var t = this.__$u;
  if (!(t && void (-5611 * -1 + 5068 + -10679) !== t.s || -10182 + 926 * 11 & this.__$f)) return !(-8220 + 1115 * 3 + 4875);
  if (-4411 * 2 + 6500 + 2325 & this.__$f) return !(2893 + -4177 * 1 + 1284);
  for (var e in o) return !(4049 * 1 + -1163 * 1 + -2886);
  for (var n in i) if (n !== "__source" && i[n] !== this.props[n]) return !(23 * -119 + 4970 * -1 + 7707);
  for (var r in this.props) if (!(r in i)) return !(-2234 * -3 + -11 * 193 + -4579);
  return !(5406 + -5405 * 1);
};
function lg(i) {
  return Le(function() {
    return og(i);
  }, []);
}
function Pu({ analytics: i, cameraFacing: o, controller: t, createProtoMessage: e, onPhotoTaken: n, sessionToken: r }) {
  const a = kt(null), { isLicenseValidated: s } = $r(), { appState: g, handleAppStateChange: x, handleError: C } = si(), { cameraResolution: d, cameraService: m, onCameraResolutionChange: f } = Ou(a, o), w = lg(void (-4808 + 1418 * 5 + -2 * 1141));
  ye(() => {
    m != null && m["isStreaming"] && (t != null && t["isDetectorInitialized"]) && s && x(Ye.RUNNING);
  }, [m == null ? void 0 : m["isStreaming"], t == null ? void 0 : t["isDetectorInitialized"], x, s]), ye(() => {
    if (g !== Ye.RUNNING) return;
    if (!m || !t) throw new re("Cannot start detection");
    let T = 8689 * 1 + 2 * -4866 + 1043, S = !1, H = -110 * 88 + -97 * 43 + 13851;
    const Y = new _0(-1 * -9319 + -2076 + -7213 * 1);
    t.clearImagesForDuplicateDetection();
    async function z({ cameraService: G, canvasImage: j, controller: he, detection: Q, detectionRecord: le, onPhotoTaken: xe }) {
      const ve = {};
      ve.width = j.width, ve.height = j.height;
      const ze = ve, ae = await lu(j), we = await G.getCameraProperties(), We = { ...we, detectionRecord: le, hashedDetectedImagesWithTimestamp: he.getImagesForDuplicateDetection() }, De = {};
      De.sessionToken = r, De.web = We;
      const He = De, Ie = await e(ae, He), Be = {};
      Be.detection = Q, Be.imageResolution = ze;
      const Oe = {};
      Oe.image = ae, Oe.data = Be;
      const de = Oe, Ge = {};
      Ge.imageData = de, Ge.content = Ie, Ge.webMetadata = We, Ge.controller = he, xe(Ge);
    }
    async function M({ cameraService: G, controller: j }) {
      const he = Date.now();
      for (; G.isStreaming && !S; ) {
        if (ru(T, H)) {
          const { detection: He, image: Ie } = j.getBestImage() || {}, Be = j.getDetectionRecord();
          if (Ie && He) {
            const Oe = Date.now(), de = Dx(Y), Ge = {};
            Ge.width = Ie.width, Ge.height = Ie.height, i == null || i.trackCaptureProcess({ detection: He, imageResolution: Ge, deviceName: await G.getDeviceName(), averageFps: de, captureProcessDurationInMs: Oe - he, facingMode: G.getCameraSettings().facingMode, instructionSet: await j.getInstructionSet() }), x(Ye.WAITING);
            const Ke = {};
            Ke.cameraService = G, Ke.controller = j, Ke.canvasImage = Ie, Ke.detection = He, Ke.detectionRecord = Be, Ke.onPhotoTaken = n, await z(Ke), j.restart();
          } else C(new re("Something went wrong during capturing an image"));
          return;
        }
        const Q = G.takePhoto(), le = {};
        le.width = Q.image.width, le.height = Q.image.height;
        const xe = le;
        let ve;
        try {
          ve = await j.processImage(Q);
        } catch (He) {
          He instanceof Error && C(re.fromCameraError(He));
          return;
        }
        const ze = Date.now(), ae = ze - Q.timestamp, we = J0((-17 * 134 + 3169 * 1 + 1 * 109) / ae);
        Y.pushFixed(we);
        const We = {};
        We.processedImage = ve, We.detectionTime = ae, We.fps = we, We.resolution = xe, We.samVersion = j.samVersion;
        const De = We;
        w.value = De, ve.isInCandidateSelection && (T === -4324 + -677 * 3 + 6355 && (T = performance.now()), H++), f(xe), await mr(Math.max(bs.max - ae, bs.min));
      }
    }
    const N = {};
    return N.controller = t, N.cameraService = m, M(N), () => {
      S = !0;
    };
  }, [i, e, g, m, t, x, C, n, f, w, r]);
  const k = {};
  return k.videoRef = a, k.cameraResolution = d, k.cameraService = m, k.detectionDetails = w, k;
}
const ia = (i) => {
  const { height: o, width: t } = _r(i), e = (i.width - t) / (-3113 + 4573 * 2 + -6031), n = (i.height - o) / (-2 * -557 + 7632 + -8744), r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = o, r;
}, xg = (i, o) => {
  const t = _r(i), e = t.width - t.width * (-24 * 202 + 2269 * -3 + 11657 * 1) * o, n = t.height - t.height * (-4885 + -8573 * -1 + -3686) * o, r = (i.width - e) / 2, a = (i.height - n) / (5921 * 1 + -2452 + 3467 * -1), s = {};
  return s.width = e, s.height = n, s.shiftX = r, s.shiftY = a, s;
}, ki = (i, o) => {
  const { shiftX: t, shiftY: e } = ia(i), n = {};
  return n.x = o.x + t, n.y = o.y + e, n;
}, Yu = (i, o) => ({ ...o, topLeft: ki(i, o.topLeft), topRight: ki(i, o.topRight), bottomRight: ki(i, o.bottomRight), bottomLeft: ki(i, o.bottomLeft) }), Lu = ({ appTier: i, cameraResolution: o, detectionDetails: t, isImageMirror: e }) => {
  const {
    documentCameraOptions: { thresholds: n }
  } = eg(), r = kt(null);
  if (ye(() => {
    if (!(r != null && r.current))
      return;
    r.current.width = o.width, r.current.height = o.height, Nx(r.current);
    const w = ia(o), k = xg(o, n.outOfBoundsThreshold), T = z0(o);
    t.value && (du({
      canvas: r.current,
      polygon: t.value.processedImage.detectedDocument,
      color: "red"
    }), Fo(r.current, w, "lime"), Fo(r.current, k, "yellow"), Fo(r.current, T, "blue"));
  }, [o, t.value, n.outOfBoundsThreshold]), !t.value)
    return null;
  const {
    detectionTime: a,
    fps: s,
    processedImage: { detectedDocument: g, instructionCode: x, invalidValidators: C },
    resolution: d,
    samVersion: m
  } = t.value, f = {
    Confidence: g.confidence,
    "Smallest edge": g.smallestEdge,
    Brightness: g.brightness,
    Hotspots: g.hotspots,
    Sharpness: g.sharpness,
    "Detection time": a,
    FPS: s,
    Tier: i,
    Instruction: x,
    Resolution: JSON.stringify(d),
    "Component version": "6.1.4"
  };
  return m && (f["SAM version"] = m), C.length > 0 && (f["Invalid validators"] = C.join(", ")), /* @__PURE__ */ Z(
    fx,
    {
      ref: r,
      cameraResolution: o,
      detectionDetails: f,
      isImageMirror: e
    }
  );
};
function Du(i) {
  return /* @__PURE__ */ Z("rect", { fill: "#000", ...i, rx: "2%" });
}
function Nu(i) {
  const [o, t] = je(!1), e = () => t((a) => !a), n = "" + o;
  wn(() => {
    function a() {
      if (!i.current) return;
      const C = new MutationObserver(() => {
        e();
      }), d = {};
      return d.childList = !0, d.subtree = !0, d.attributes = !0, C.observe(i.current, d), C;
    }
    function s() {
      var m;
      if (!((m = i.current) != null && m["parentElement"])) return;
      const C = new MutationObserver((f) => {
        f.find((k) => {
          for (const T of k.removedNodes)
            if (T === i.current) return !0;
        }) && e(), f.forEach((k) => {
          k.addedNodes.forEach((T) => {
            var S;
            (S = T.parentElement) == null || S.removeChild(T);
          });
        });
      }), d = {};
      return d.childList = !0, C.observe(i.current.parentElement, d), C;
    }
    const g = a(), x = s();
    return () => {
      x == null || x.disconnect(), g == null || g.disconnect();
    };
  });
  const r = {};
  return r.key = n, r;
}
const Fu = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Xu({ cutOut: i, height: o, width: t }) {
  const e = kt(null), { key: n } = Nu(e);
  return /* @__PURE__ */ Z("div", { ref: e, style: Fu, children: /* @__PURE__ */ Z("svg", { viewBox: `0 0 ${t} ${o}`, children: [
    /* @__PURE__ */ Z("defs", { children: [
      /* @__PURE__ */ Z("mask", { id: "placeholder", children: [
        /* @__PURE__ */ Z("rect", { fill: "#fff", height: "100%", width: "100%" }),
        i
      ] }),
      /* @__PURE__ */ Z(
        "pattern",
        {
          height: window.innerWidth > 480 ? "400" : "900",
          id: "innooverlay",
          patternUnits: "userSpaceOnUse",
          viewBox: "0 40 300 200",
          width: window.innerWidth > 480 ? "350" : "700",
          x: "0",
          y: "0",
          children: [
            /* @__PURE__ */ Z("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ Z("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ Z("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, n);
}
function Mu({ fullOverlay: i, resolution: o }) {
  const t = zx(o), e = `${t.height * 100}%`, n = `${t.width * 100}%`, r = `${t.shiftX * 100}%`, a = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ Z(
    Xu,
    {
      cutOut: i || /* @__PURE__ */ Z(Du, { height: e, width: n, x: r, y: a }),
      height: o.height,
      width: o.width
    }
  );
}
const ju = async () => WebAssembly.validate(new Uint8Array([0, 2584 + 297 * -6 + -705, 4208 + 53 * 119 + -10400 * 1, -9344 + -5 * -430 + -1 * -7303, 5904 + 1 * 5669 + -11572 * 1, -669 + 71 * -81 + 6420, 3283 * -1 + 3210 + 1 * 73, 839 * 10 + 6730 + -15120, -2005 * -1 + 6266 + 2 * -4135, 8434 + 2 * 3559 + 2221 * -7, 33 * 33 + 4913 * -1 + -15 * -255, 4608 + 376 * -12, 574 * 12 + 1 * -314 + -6574, 1, 2206 * -4 + 7610 + -7 * -191, 1 * -3285 + 99 * 73 + 1313 * -3, 9 * -1047 + -1 * -9395 + 30, -454 * -17 + 6062 + 4593 * -3, -1128 + 3 * 3082 + -6 * 1353, 8811 + 3 * -2669 + -794, 10, -18 * 454 + -1 * -7619 + 554, 3 * 1687 + 1 * 8079 + 49 * -268, -1555 * 1 + -1576 + -1 * -3131, 9484 + -11 * 571 + -3138, 2 * -3087 + 6514 + 68 * -5, -447 * -11 + 7238 + 5951 * -2, 1 * -6543 + -1387 + -1589 * -5, 2 * -3836 + -1648 + -3 * -3191, 1 * -8485 + -1330 * -2 + 5923, 3 * -1613 + 521 * -18 + -14228 * -1]));
async function Uu() {
  const i = {};
  i.name = j0, i.length = 256;
  const o = await window.crypto.subtle.generateKey(i, !0, ["encrypt", "decrypt"]), t = Uint8Array.from(Array(5 * 641 + -4767 + 1578).fill(1 * -8026 + -7693 * 1 + 15719)), e = window.crypto.getRandomValues(t), n = {};
  return n.key = o, n.iv = e, n;
}
async function Ju(i) {
  const { iv: o, key: t } = await Uu(), e = {};
  e.name = j0, e.iv = o;
  const n = await window.crypto.subtle.encrypt(e, t, i), r = await window.crypto.subtle.exportKey("raw", t), a = {};
  return a.message = n, a.key = r, a.iv = o, a;
}
function zu(i) {
  const o = new ArrayBuffer(i.length), t = new Uint8Array(o);
  for (let e = 9034 + 6 * -33 + -2209 * 4, n = i.length; e < n; e++)
    t[e] = i.charCodeAt(e);
  return o;
}
function Qu() {
  const i = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", o = window.atob(i), t = window.atob(o), e = zu(t), n = {};
  return n.name = U0, n.hash = Tx, window.crypto.subtle.importKey("spki", e, n, !0, ["encrypt"]);
}
async function $u(i) {
  const o = await Qu(), t = {};
  return t.name = U0, window.crypto.subtle.encrypt(t, o, i);
}
async function _u(i) {
  const { iv: o, key: t, message: e } = await Ju(i), n = await $u(t), r = {};
  return r.key = n, r.iv = o, r.message = e, r;
}
async function qu(i) {
  const o = await window.crypto.subtle.digest("SHA-1", i);
  return Array.from(new Uint8Array(o)).map((t) => t.toString(4 * 104 + -4667 * -1 + 9 * -563).padStart(7216 * 1 + -787 + 1 * -6427, "0")).join("");
}
class eI {
  constructor() {
    X(this, "samVersion", null);
    X(this, "isDetectorInitialized", !1);
    X(this, "isInCandidateSelection", !1);
    X(this, "lastImage", null);
    X(this, "bestImage", null);
    X(this, "detectionRecord", []);
    X(this, "candidateSelectionImages", []);
    X(this, "thresholds", null);
    X(this, "acceleration", null);
    X(this, "imagesWithTimestampForDuplicateDetection", new _0(Vx));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await ju() ? As.SIMD : As.NO_SIMD;
  }
  async init({ thresholds: o, wasmDirectoryPath: t }) {
    this.setThresholds(o), await this.initDetector(t);
  }
  setSamVersion(o) {
    if (!o || !this.areVersionsCompatible(o))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new re("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = o;
  }
  areVersionsCompatible(o) {
    return o === Yx;
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
    if (!this.thresholds) throw new re("Thresholds for " + this.className + " are not provided");
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
  isNewImageBetter(o, t) {
    return t.sharpness > o.sharpness;
  }
  async collectImagesForDuplicateDetection({ image: o, timestamp: t }) {
    const e = o.length / Px, n = e / (7515 + -8187 * 1 + 674), r = o.length / (-2137 + 17 * -122 + -383 * -11), a = await qu(o.slice(r - n, r + n)), s = {};
    s.imageHash = a, s.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(s);
  }
  clearImagesForDuplicateDetection() {
    this.imagesWithTimestampForDuplicateDetection.clear();
  }
  getImagesForDuplicateDetection() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
}
(function() {
  var i = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return function(o) {
    o = o || {};
    var t;
    t || (t = typeof o < "u" ? o : {});
    var e, n;
    t.ready = new Promise(function(c, l) {
      e = c, n = l;
    });
    var r = {}, a;
    for (a in t) t.hasOwnProperty(a) && (r[a] = t[a]);
    var s = "./this.program", g = !(-4 * -574 + 4505 + -6800), x = !(-10 * -682 + 1 * -372 + -6447);
    g = typeof window == "object", x = typeof importScripts == "function";
    var C = "", d;
    (g || x) && (x ? C = self.location.href : document.currentScript && (C = document.currentScript.src), i && (C = i), 47 * -7 + 1018 + 689 * -1 !== C.indexOf("blob:") ? C = C.substr(-964 * -2 + 7889 * -1 + 5961 * 1, C.lastIndexOf("/") + (8943 + 17 * -526)) : C = "", x && (d = function(c) {
      var l = new XMLHttpRequest();
      return l.open("GET", c, !(2 * -3106 + -8478 + 4897 * 3)), l.responseType = "arraybuffer", l.send(null), new Uint8Array(l.response);
    }));
    var m = t.printErr || console.warn.bind(console);
    for (a in r) r.hasOwnProperty(a) && (t[a] = r[a]);
    r = null, t.thisProgram && (s = t.thisProgram);
    var f;
    t.wasmBinary && (f = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && Ne("no native wasm support detected");
    var w, k = !(-1 * -8324 + -5 * -908 + -12863 * 1);
    function T(c) {
      c || Ne("Assertion failed: undefined");
    }
    var S = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (-7506 + -278 * -27);
    function H(c, l, u) {
      var p = xe;
      if (0 < u) {
        u = l + u - (-60 * 37 + -8068 + 10289);
        for (var A = 2321 * 1 + -1092 + 1 * -1229; A < c.length; ++A) {
          var b = c.charCodeAt(A);
          if (131 * -842 + -18913 * 5 + 260163 <= b && -5 * 9523 + -3 * -12766 + 66660 >= b) {
            var B = c.charCodeAt(++A);
            b = 65536 + ((b & -2822 + 3845 * 1) << -1065 + 5 * 215) | B & 9757 * -1 + -40 * 49 + -7 * -1820;
          }
          if (127 >= b) {
            if (l >= u) break;
            p[l++] = b;
          } else {
            if (267 * -10 + -49 * -43 + -9 * -290 >= b) {
              if (l + (-5 * 880 + -1552 + -1 * -5953) >= u) break;
              p[l++] = 9632 + 5 * -1888 | b >> 8703 * -1 + 15 * -239 + 2 * 6147;
            } else {
              if (-110218 + -6 * -7019 + 1 * 133639 >= b) {
                if (l + (-4084 * 2 + 9295 + -1125) >= u) break;
                p[l++] = -6201 + -102 * 53 + 11831 * 1 | b >> 5 * -1379 + 7957 * 1 + -1050;
              } else {
                if (l + (2 * -2098 + 4 * -1066 + 8463) >= u) break;
                p[l++] = 3912 + 216 * -17 | b >> -4219 * -1 + -69 * -117 + -12274, p[l++] = 3 * -1377 + 7213 + 422 * -7 | b >> -9823 * -1 + 3 * 602 + -1 * 11617 & 63;
              }
              p[l++] = 4 * 1518 + 426 * 3 + -7222 | b >> 6 & 8407 + -1103 * 1 + 7241 * -1;
            }
            p[l++] = -626 + -163 * -12 + -1202 | b & 63;
          }
        }
        p[l] = -6485 * 1 + 59 * -79 + 11146;
      }
    }
    var Y = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (782 + -1563 * -3 + -5471 * 1);
    function z(c, l) {
      for (var u = c >> 1, p = u + l / (-6062 + -831 * -5 + -83 * -23); !(u >= p) && ze[u]; ) ++u;
      if (u <<= -794 + 15 * 53, 15177 + -3029 * 5 < u - c && Y) return Y.decode(xe.subarray(c, u));
      for (u = 0, p = ""; ; ) {
        var A = ve[c + 2 * u >> 1];
        if (-11913 + -33 * -361 == A || u == l / (880 + -5 * 689 + -1 * -2567)) return p;
        ++u, p += String.fromCharCode(A);
      }
    }
    function M(c, l, u) {
      if (void (-7792 + -1 * 73 + 7865) === u && (u = 1379128306 + 1 * -3370150279 + 4138505620), -6129 + -3514 * -1 + 2617 > u) return 922 + -2 * 461;
      u -= -9048 + -295 * 26 + -209 * -80;
      var p = l;
      u = u < (10 * 104 + 9924 + 2 * -5481) * c.length ? u / (-6638 + 7 * -788 + 6078 * 2) : c.length;
      for (var A = 1257 + -2696 * -2 + -6649; A < u; ++A) ve[l >> 1] = c.charCodeAt(A), l += 1320 + -1279 * 1 + -39;
      return ve[l >> -2628 + 3519 * 1 + -178 * 5] = 0, l - p;
    }
    function N(c) {
      return (33 * -194 + -5214 + -37 * -314) * c.length;
    }
    function G(c, l) {
      for (var u = 0, p = ""; !(u >= l / (-1217 * 1 + -4449 * -2 + -7677)); ) {
        var A = ae[c + 4 * u >> 2];
        if (11919 + 1 * -11919 == A) break;
        ++u, -39296 + -61 * -211 + 91961 * 1 <= A ? (A -= 479 * -71 + -1 * 4836 + -1 * -104381, p += String.fromCharCode(74669 * -1 + 88123 * 1 + 2 * 20921 | A >> -7843 + 1966 * 4 + 11 * -1, 1 * 93846 + 19347 + -56873 * 1 | A & 183 + -4 * -210)) : p += String.fromCharCode(A);
      }
      return p;
    }
    function j(c, l, u) {
      if (void (116 * -3 + -4195 * -2 + -8042) === u && (u = 300387196 + 2491467893 * 1 + -644371442), 4 > u) return -5010 + -901 * -3 + 769 * 3;
      var p = l;
      u = p + u - (-1369 + -1 * -1373);
      for (var A = 138 * -15 + -6208 + -8278 * -1; A < c.length; ++A) {
        var b = c.charCodeAt(A);
        if (9989 + 5503 * 1 + 39804 <= b && -1 * -15092 + 67461 + 10 * -2521 >= b) {
          var B = c.charCodeAt(++A);
          b = -42357 + 1 * 95083 + -6405 * -2 + ((b & -5098 + 1 * 3983 + 2 * 1069) << -7 * 527 + 11 * -734 + -193 * -61) | B & -237 * -9 + -5 * 947 + -1 * -3625;
        }
        if (ae[l >> -1 * 2966 + -7081 + 10049 * 1] = b, l += 19 * -183 + -4245 + 7726, l + 4 > u) break;
      }
      return ae[l >> -8925 + -7 * -1101 + 1220] = -4649 + -1 * 8003 + -4 * -3163, l - p;
    }
    function he(c) {
      for (var l = 227 * -43 + -253 * -11 + 6978 * 1, u = -7 * 1190 + -544 * -11 + 2346; u < c.length; ++u) {
        var p = c.charCodeAt(u);
        55296 <= p && 65295 + -1 * 1982 + 2985 * -2 >= p && ++u, l += 8746 + 5 * 382 + -1 * 10652;
      }
      return l;
    }
    var Q, le, xe, ve, ze, ae, we, We, De;
    function He(c) {
      Q = c, t.HEAP8 = le = new Int8Array(c), t.HEAP16 = ve = new Int16Array(c), t.HEAP32 = ae = new Int32Array(c), t.HEAPU8 = xe = new Uint8Array(c), t.HEAPU16 = ze = new Uint16Array(c), t.HEAPU32 = we = new Uint32Array(c), t.HEAPF32 = We = new Float32Array(c), t.HEAPF64 = De = new Float64Array(c);
    }
    var Ie = t.INITIAL_MEMORY || -21920587 + 15 * -1759724 + -83 * -784261, Be = {};
    Be.initial = Ie / (-768 * 61 + 4363 * 14 + 51302), Be.maximum = 32768, t.wasmMemory ? w = t.wasmMemory : w = new WebAssembly.Memory(Be), w && (Q = w.buffer), Ie = Q.byteLength, He(Q);
    var Oe = [], de = [], Ge = [], Ke = [];
    function $t() {
      var c = t.preRun.shift();
      Oe.unshift(c);
    }
    var Te = 8845 + 61 * -145, nt = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function Ne(c) {
      throw t.onAbort && t.onAbort(c), m(c), k = !(-1 * -41 + 9967 + -10008), c = new WebAssembly.RuntimeError("abort(" + c + "). Build with -s ASSERTIONS=1 for more info."), n(c), c;
    }
    function Wt(c) {
      var l = Qe;
      return String.prototype.startsWith ? l.startsWith(c) : l.indexOf(c) === 0;
    }
    function it() {
      return Wt("data:application/octet-stream;base64,");
    }
    var Qe = "sam.wasm";
    if (!it()) {
      var Ht = Qe;
      Qe = t.locateFile ? t.locateFile(Ht, C) : C + Ht;
    }
    function $e() {
      try {
        if (f) return new Uint8Array(f);
        if (d) return d(Qe);
        throw "both async and sync fetching of the wasm failed";
      } catch (c) {
        Ne(c);
      }
    }
    function Pg() {
      var c = {};
      return c.credentials = "same-origin", f || !g && !x || typeof fetch != "function" || Wt("file://") ? Promise.resolve().then($e) : fetch(Qe, c).then(function(l) {
        if (!l.ok) throw "failed to load wasm binary file at '" + Qe + "'";
        return l.arrayBuffer();
      }).catch(function() {
        return $e();
      });
    }
    function li(c) {
      for (; -5561 * 1 + -9539 * 1 + 5 * 3020 < c.length; ) {
        var l = c.shift();
        if (typeof l == "function") l(t);
        else {
          var u = l.Ba;
          typeof u == "number" ? l.ta === void 0 ? bo("v", u)() : bo("vi", u)(l.ta) : u(void (6 * 1659 + -60 + 291 * -34) === l.ta ? null : l.ta);
        }
      }
    }
    function bo(c, l) {
      var u = [];
      return function() {
        u.length = arguments.length;
        for (var p = -5 * -92 + -6160 + -2850 * -2; p < arguments.length; p++) u[p] = arguments[p];
        return u && u.length ? t["dynCall_" + c].apply(null, [l].concat(u)) : t["dynCall_" + c].call(null, l);
      };
    }
    function Yg(c) {
      this.da = c - (-3256 + -1636 * -2), this.Oa = function(l) {
        ae[this.da + (1964 + 6 * -326) >> 5509 + -2348 * -4 + -14899] = l;
      }, this.La = function(l) {
        ae[this.da + (-683 * -4 + -5226 + 58 * 43) >> 13 * 209 + -8633 + -5918 * -1] = l;
      }, this.Ma = function() {
        ae[this.da + (-1113 + -1 * -3517 + -150 * 16) >> 2305 + -8926 * 1 + 6623] = 2489 * -3 + 1353 + 6114;
      }, this.Ka = function() {
        le[this.da + (1797 + 3 * -509 + -258 * 1) >> 3084 + 514 * -6] = 219 * 37 + 1 * -8552 + 449;
      }, this.Na = function() {
        le[this.da + 13 >> -2164 + 3 * 1401 + -2039 * 1] = -18655 + 13 * 1435;
      }, this.Fa = function(l, u) {
        this.Oa(l), this.La(u), this.Ma(), this.Ka(), this.Na();
      };
    }
    function xi() {
      return 9379 + 9379 * -1 < xi.xa;
    }
    function yo(c) {
      switch (c) {
        case -3370 * 1 + -31 * 62 + 5293:
          return 1756 + -1 * 4278 + 2522;
        case -374 * -13 + 572 + 97 * -56:
          return 1 * 9001 + -3263 * 1 + -5737;
        case 5319 + -3447 * 1 + -934 * 2:
          return 9389 + 395 * 1 + -9782;
        case -9727 + -1 * -9735:
          return -2827 + 3541 * -1 + -23 * -277;
        default:
          throw new TypeError("Unknown type size: " + c);
      }
    }
    var la = void (1 * 3983 + -7691 * 1 + 3708);
    function Ve(c) {
      for (var l = ""; xe[c]; ) l += la[xe[c++]];
      return l;
    }
    var _t = {}, Ot = {}, ui = {};
    function vo(c) {
      if (void (-93 * 23 + 6064 + -3925) === c) return "_unknown";
      c = c.replace(/[^a-zA-Z0-9_]/g, "$");
      var l = c.charCodeAt(7039 + -7039 * 1);
      return -7 * -41 + -9851 * -1 + -10090 <= l && 678 + -1 * 4387 + 1 * 3766 >= l ? "_" + c : c;
    }
    function wo(c, l) {
      return c = vo(c), new Function("body", "return function " + c + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(l);
    }
    function So(c) {
      var l = Error, u = wo(c, function(p) {
        this.name = c, this.message = p, p = Error(p).stack, void (41 * -4 + 4570 + -4406 * 1) !== p && (this.stack = this.toString() + `
` + p.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return u.prototype = Object.create(l.prototype), u.prototype.constructor = u, u.prototype.toString = function() {
        return void (-3647 + -397 * -22 + -5087) === this.message ? this.name : this.name + ": " + this.message;
      }, u;
    }
    var qt = void (-37 * -121 + -1 * -4954 + -1 * 9431);
    function F(c) {
      throw new qt(c);
    }
    var xa = void (-5374 + -1611 * -5 + -383 * 7);
    function Ii(c) {
      throw new xa(c);
    }
    function en(c, l, u) {
      function p(v) {
        v = u(v), v.length !== c.length && Ii("Mismatched type converter count");
        for (var W = -6635 + 6635 * 1; W < c.length; ++W) lt(c[W], v[W]);
      }
      c.forEach(function(v) {
        ui[v] = l;
      });
      var A = Array(l.length), b = [], B = -3551 + 27 * -132 + -1423 * -5;
      l.forEach(function(v, W) {
        Ot.hasOwnProperty(v) ? A[W] = Ot[v] : (b.push(v), _t.hasOwnProperty(v) || (_t[v] = []), _t[v].push(function() {
          A[W] = Ot[v], ++B, B === b.length && p(A);
        }));
      }), b.length === 0 && p(A);
    }
    function lt(c, l, u) {
      if (u = u || {}, !("argPackAdvance" in l)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var p = l.name;
      if (c || F('type "' + p + '" must have a positive integer typeid pointer'), Ot.hasOwnProperty(c)) {
        if (u.Ea) return;
        F("Cannot register type '" + p + "' twice");
      }
      Ot[c] = l, delete ui[c], _t.hasOwnProperty(c) && (l = _t[c], delete _t[c], l.forEach(function(A) {
        A();
      }));
    }
    function Lg(c) {
      var l = {};
      return l.count = c.count, l.oa = c.oa, l.pa = c.pa, l.da = c.da, l.fa = c.fa, l.ga = c.ga, l.ha = c.ha, l;
    }
    function Bo(c) {
      F(c.A.fa.ea.name + " instance already deleted");
    }
    var Go = !(-1318 * -2 + -1 * 1657 + -978);
    function ua() {
    }
    function Ia(c) {
      --c.count.value, 1 * -4678 + -209 * -10 + -1 * -2588 === c.count.value && (c.ga ? c.ha.na(c.ga) : c.fa.ea.na(c.da));
    }
    function Gn(c) {
      return typeof FinalizationGroup > "u" ? (Gn = function(l) {
        return l;
      }, c) : (Go = new FinalizationGroup(function(l) {
        for (var u = l.next(); !u.done; u = l.next()) u = u.value, u.da ? Ia(u) : console.warn("object already deleted: " + u.da);
      }), Gn = function(l) {
        return Go.register(l, l.A, l.A), l;
      }, ua = function(l) {
        Go.unregister(l.A);
      }, Gn(c));
    }
    var Zn = void (64 * -19 + -5837 + 7053), kn = [];
    function Zo() {
      for (; kn.length; ) {
        var c = kn.pop();
        c.A.oa = !(-5195 + 1 * -6035 + 1 * 11231), c.delete();
      }
    }
    function At() {
    }
    var da = {};
    function Dg(c, l) {
      var u = t;
      if (void (7022 * 1 + -6585 + -437) === u[c].ja) {
        var p = u[c];
        u[c] = function() {
          return u[c].ja.hasOwnProperty(arguments.length) || F("Function '" + l + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + u[c].ja + ")!"), u[c].ja[arguments.length].apply(this, arguments);
        }, u[c].ja = [], u[c].ja[p.ya] = p;
      }
    }
    function Ca(c, l, u) {
      t.hasOwnProperty(c) ? ((void (-4562 + 1 * 4562) === u || void (298 * -11 + -1678 + -826 * -6) !== t[c].ja && void (-4505 + -1 * 5597 + 1 * 10102) !== t[c].ja[u]) && F("Cannot register public name '" + c + "' twice"), Dg(c, c), t.hasOwnProperty(u) && F("Cannot register multiple overloads of a function with the same number of arguments (" + u + ")!"), t[c].ja[u] = l) : (t[c] = l, void (993 + 331 * -3) !== u && (t[c].Ra = u));
    }
    function Ng(c, l, u, p, A, b, B, v) {
      this.name = c, this.constructor = l, this.ma = u, this.na = p, this.ia = A, this.Ca = b, this.qa = B, this.Aa = v;
    }
    function di(c, l, u) {
      for (; l !== u; ) l.qa || F("Expected null or instance of " + u.name + ", got an instance of " + l.name), c = l.qa(c), l = l.ia;
      return c;
    }
    function Fg(c, l) {
      return l === null ? (this.ua && F("null is not a valid " + this.name), -5 * 1791 + 2 * -4586 + 18127 * 1) : (l.A || F('Cannot pass "' + nn(l) + '" as a ' + this.name), l.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), di(l.A.da, l.A.fa.ea, this.ea));
    }
    function Xg(c, l) {
      if (l === null) {
        if (this.ua && F("null is not a valid " + this.name), this.sa) {
          var u = this.Ha();
          return c !== null && c.push(this.na, u), u;
        }
        return 16289 + -7 * 2327;
      }
      if (l.A || F('Cannot pass "' + nn(l) + '" as a ' + this.name), l.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && l.A.fa.ra && F("Cannot convert argument of type " + (l.A.ha ? l.A.ha.name : l.A.fa.name) + " to parameter type " + this.name), u = di(l.A.da, l.A.fa.ea, this.ea), this.sa) switch (void (-13 * 503 + -8409 * 1 + 7474 * 2) === l.A.ga && F("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case -1 * -5679 + -2403 + 4 * -819:
          l.A.ha === this ? u = l.A.ga : F("Cannot convert argument of type " + (l.A.ha ? l.A.ha.name : l.A.fa.name) + " to parameter type " + this.name);
          break;
        case 2204 + -1 * 1571 + -632:
          u = l.A.ga;
          break;
        case -2672 + 52 * 62 + -50 * 11:
          if (l.A.ha === this) u = l.A.ga;
          else {
            var p = l.clone();
            u = this.Ia(u, tn(function() {
              p.delete();
            })), c !== null && c.push(this.na, u);
          }
          break;
        default:
          F("Unsupporting sharing policy");
      }
      return u;
    }
    function Mg(c, l) {
      return l === null ? (this.ua && F("null is not a valid " + this.name), -15719 + 1 * 15719) : (l.A || F('Cannot pass "' + nn(l) + '" as a ' + this.name), l.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), l.A.fa.ra && F("Cannot convert argument of type " + l.A.fa.name + " to parameter type " + this.name), di(l.A.da, l.A.fa.ea, this.ea));
    }
    function Ci(c) {
      return this.fromWireType(we[c >> -2187 * 1 + 32 * -295 + -11629 * -1]);
    }
    function pa(c, l, u) {
      return l === u ? c : void (-9553 + 3 * -2027 + 15634 * 1) === u.ia ? null : (c = pa(c, l, u.ia), c === null ? null : u.Aa(c));
    }
    var Wn = {};
    function jg(c, l) {
      for (void (1 * -2227 + 2 * 481 + 1265) === l && F("ptr should not be undefined"); c.ia; ) l = c.qa(l), c = c.ia;
      return Wn[l];
    }
    function pi(c, l) {
      l.fa && l.da || Ii("makeClassHandle requires ptr and ptrType"), !!l.ha != !!l.ga && Ii("Both smartPtrType and smartPtr must be specified");
      var u = {};
      u.value = 1, l.count = u;
      var p = {};
      p.value = l;
      var A = {};
      return A.A = p, Gn(Object.create(c, A));
    }
    function xt(c, l, u, p) {
      this.name = c, this.ea = l, this.ua = u, this.ra = p, this.sa = !1, this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-3607 + -1 * 5632 + 9239), void (12 * 659 + -8 * 1039 + -101 * -4) !== l.ia ? this.toWireType = Xg : (this.toWireType = p ? Fg : Mg, this.ka = null);
    }
    function ha(c, l, u) {
      t.hasOwnProperty(c) || Ii("Replacing nonexistant public symbol"), void (1507 * -1 + -8745 + 10252) !== t[c].ja && void (-5280 + -2510 * -1 + 554 * 5) !== u ? t[c].ja[u] = l : (t[c] = l, t[c].ya = u);
    }
    function bt(c, l) {
      c = Ve(c);
      var u = bo(c, l);
      return typeof u != "function" && F("unknown function pointer with signature " + c + ": " + l), u;
    }
    var fa = void (5 * -188 + -1973 * -1 + -1033);
    function ma(c) {
      c = Ka(c);
      var l = Ve(c);
      return ut(c), l;
    }
    function Hn(c, l) {
      function u(b) {
        A[b] || Ot[b] || (ui[b] ? ui[b].forEach(u) : (p.push(b), A[b] = !(495 + -2822 * -2 + -6139)));
      }
      var p = [], A = {};
      throw l.forEach(u), new fa(c + ": " + p.map(ma).join([", "]));
    }
    function Aa(c, l) {
      for (var u = [], p = -6110 + 235 * 26; p < c; p++) u.push(ae[(l >> -7086 + -5 * 977 + 11973) + p]);
      return u;
    }
    function hi(c) {
      for (; c.length; ) {
        var l = c.pop();
        c.pop()(l);
      }
    }
    function ba(c, l, u) {
      return c instanceof Object || F(u + ' with invalid "this": ' + c), c instanceof l.ea.constructor || F(u + ' incompatible with "this" of type ' + c.constructor.name), c.A.da || F("cannot call emscripten binding method " + u + " on deleted object"), di(c.A.da, c.A.fa.ea, l.ea);
    }
    var ya = {};
    ya.value = void (6989 + 1 * -6989);
    var va = {};
    va.value = null;
    var wa = {};
    wa.value = !(1 * 3038 + 1838 * 2 + 1119 * -6);
    var Sa = {};
    Sa.value = !(-1 * -4541 + 3 * -362 + -3454);
    var ko = [], Fe = [{}, ya, va, wa, Sa];
    function Wo(c) {
      22 * 98 + -147 * 41 + 3875 < c && -8744 + -233 * 41 + 18297 === --Fe[c].Ja && (Fe[c] = void (-3146 * 1 + -2797 + 5943), ko.push(c));
    }
    function tn(c) {
      switch (c) {
        case void (-6927 + 1 * 6927):
          return 27 * -345 + 1417 + 2633 * 3;
        case null:
          return 7233 + -1 * -8161 + -296 * 52;
        case !(1 * -50 + 109 * -4 + 486):
          return -3 * -1465 + 1 * -2729 + 1 * -1663;
        case !(2643 + 28 * 247 + 354 * -27):
          return -1 * -5799 + -418 + 283 * -19;
        default:
          var l = ko.length ? ko.pop() : Fe.length, u = {};
          return u.Ja = 1, u.value = c, Fe[l] = u, l;
      }
    }
    function nn(c) {
      if (c === null) return "null";
      var l = typeof c;
      return l === "object" || l === "array" || l === "function" ? c.toString() : "" + c;
    }
    function Ug(c, l) {
      switch (l) {
        case 11 * 105 + 4016 * 2 + -11 * 835:
          return function(u) {
            return this.fromWireType(We[u >> -1 * -3945 + -1 * -6117 + 2012 * -5]);
          };
        case 3:
          return function(u) {
            return this.fromWireType(De[u >> -81 * 111 + 4066 + -352 * -14]);
          };
        default:
          throw new TypeError("Unknown float type: " + c);
      }
    }
    function Jg(c) {
      var l = Function;
      if (!(l instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof l + " which is not a function");
      var u = wo(l.name || "unknownFunctionName", function() {
      });
      return u.prototype = l.prototype, u = new u(), c = l.apply(u, c), c instanceof Object ? c : u;
    }
    function zg(c, l, u) {
      switch (l) {
        case -1 * 7131 + -3975 + 11106:
          return u ? function(p) {
            return le[p];
          } : function(p) {
            return xe[p];
          };
        case -8971 * -1 + 33 * 287 + -3 * 6147:
          return u ? function(p) {
            return ve[p >> 953 * -1 + 813 * 4 + -766 * 3];
          } : function(p) {
            return ze[p >> 6762 + 3521 * -1 + -810 * 4];
          };
        case 414 * -24 + 9 + -9929 * -1:
          return u ? function(p) {
            return ae[p >> 1104 + -10 * 279 + -422 * -4];
          } : function(p) {
            return we[p >> 12 * -590 + -1917 + 8999];
          };
        default:
          throw new TypeError("Unknown integer type: " + c);
      }
    }
    function Ho(c) {
      return c || F("Cannot use deleted val. handle = " + c), Fe[c].value;
    }
    function Ba(c, l) {
      var u = Ot[c];
      return void (-22 * 429 + 5166 + 4272) === u && F(l + " has unknown type " + ma(c)), u;
    }
    var Qg = {}, Ga = {};
    function Za() {
      if (!Oo) {
        var c = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: s || "./this.program" }, l;
        for (l in Ga) c[l] = Ga[l];
        var u = [];
        for (l in c) u.push(l + "=" + c[l]);
        Oo = u;
      }
      return Oo;
    }
    var Oo, ka = [];
    function Wa(c) {
      var l = {}, u;
      for (u in c) (function(p) {
        var A = c[p];
        l[p] = typeof A == "function" ? function() {
          ka.push(p);
          try {
            return A.apply(null, arguments);
          } finally {
            if (k) return;
            var b = ka.pop();
            T(b === p);
          }
        } : A;
      })(u);
      return l;
    }
    for (var Ha = Array(2705 + 1 * -8605 + 6156), fi = -1 * -877 + -194 * 32 + -1777 * -3; 340 * 1 + -4579 + 4495 > fi; ++fi) Ha[fi] = String.fromCharCode(fi);
    la = Ha, qt = t.BindingError = So("BindingError"), xa = t.InternalError = So("InternalError"), At.prototype.isAliasOf = function(c) {
      if (!(this instanceof At && c instanceof At)) return !(-271 * 2 + -29 * -41 + 1 * -646);
      var l = this.A.fa.ea, u = this.A.da, p = c.A.fa.ea;
      for (c = c.A.da; l.ia; ) u = l.qa(u), l = l.ia;
      for (; p.ia; ) c = p.qa(c), p = p.ia;
      return l === p && u === c;
    }, At.prototype.clone = function() {
      if (this.A.da || Bo(this), this.A.pa) return this.A.count.value += 1 * -911 + 3491 * 1 + -2579, this;
      var c = Gn(Object.create(Object.getPrototypeOf(this), { A: { value: Lg(this.A) } }));
      return c.A.count.value += -9599 + -1339 * 4 + 4 * 3739, c.A.oa = !(1034 * -9 + 9320 + -13), c;
    }, At.prototype.delete = function() {
      this.A.da || Bo(this), this.A.oa && !this.A.pa && F("Object already scheduled for deletion"), ua(this), Ia(this.A), this.A.pa || (this.A.ga = void (473 + 13 * 578 + -7987), this.A.da = void (4419 + -1 * 8781 + 1454 * 3));
    }, At.prototype.isDeleted = function() {
      return !this.A.da;
    }, At.prototype.deleteLater = function() {
      return this.A.da || Bo(this), this.A.oa && !this.A.pa && F("Object already scheduled for deletion"), kn.push(this), -2980 + -11 * -879 + -6688 === kn.length && Zn && Zn(Zo), this.A.oa = !(2 * -2529 + 35 * 73 + 1 * 2503), this;
    }, xt.prototype.Da = function(c) {
      return this.wa && (c = this.wa(c)), c;
    }, xt.prototype.va = function(c) {
      this.na && this.na(c);
    }, xt.prototype.argPackAdvance = 8, xt.prototype.readValueFromPointer = Ci, xt.prototype.deleteObject = function(c) {
      c !== null && c.delete();
    }, xt.prototype.fromWireType = function(c) {
      function l() {
        return this.sa ? pi(this.ea.ma, { fa: this.Ga, da: u, ha: this, ga: c }) : pi(this.ea.ma, { fa: this, da: c });
      }
      var u = this.Da(c);
      if (!u) return this.va(c), null;
      var p = jg(this.ea, u);
      if (void (87 * 111 + -6880 + -2777) !== p)
        return 1 * 7714 + -7897 + -183 * -1 === p.A.count.value ? (p.A.da = u, p.A.ga = c, p.clone()) : (p = p.clone(), this.va(c), p);
      if (p = this.ea.Ca(u), p = da[p], !p) return l.call(this);
      p = this.ra ? p.za : p.pointerType;
      var A = pa(u, this.ea, p.ea);
      return A === null ? l.call(this) : this.sa ? pi(p.ea.ma, { fa: p, da: A, ha: this, ga: c }) : pi(p.ea.ma, { fa: p, da: A });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(Wn).length;
    }, t.getLiveInheritedInstances = function() {
      var c = [], l;
      for (l in Wn) Wn.hasOwnProperty(l) && c.push(Wn[l]);
      return c;
    }, t.flushPendingDeletes = Zo, t.setDelayFunction = function(c) {
      Zn = c, kn.length && Zn && Zn(Zo);
    }, fa = t.UnboundTypeError = So("UnboundTypeError"), t.count_emval_handles = function() {
      for (var c = 4 * -761 + -1333 * -7 + -6287 * 1, l = 43 * 11 + 4415 + -4883 * 1; l < Fe.length; ++l) void (-8461 + 28 * -21 + -9049 * -1) !== Fe[l] && ++c;
      return c;
    }, t.get_first_emval = function() {
      for (var c = 19 * 482 + 966 + -10119; c < Fe.length; ++c) if (void (2 * -1682 + 6183 + -2819 * 1) !== Fe[c]) return Fe[c];
      return null;
    }, de.push({ Ba: function() {
      Oa();
    } });
    var $g = { z: function(c) {
      return mi(c + (1 * 2462 + 1 * -8471 + 6025)) + (13 * 386 + 8921 + 3 * -4641);
    }, u: function(c, l, u) {
      throw new Yg(c).Fa(l, u), "uncaught_exception" in xi ? xi.xa++ : xi.xa = 175 * 38 + 2733 * 1 + 2 * -4691, c;
    }, w: function(c, l, u, p, A) {
      var b = yo(u);
      l = Ve(l), lt(c, { name: l, fromWireType: function(B) {
        return !!B;
      }, toWireType: function(B, v) {
        return v ? p : A;
      }, argPackAdvance: 8, readValueFromPointer: function(B) {
        if (1 * -9096 + 4303 + -51 * -94 === u) var v = le;
        else if (-4717 + -10 * 757 + 12289 === u) v = ve;
        else if (-2943 + -1 * -2947 === u) v = ae;
        else throw new TypeError("Unknown boolean type size: " + l);
        return this.fromWireType(v[B >> b]);
      }, ka: null });
    }, h: function(c, l, u, p, A, b, B, v, W, O, K, V, q) {
      K = Ve(K), b = bt(A, b), v && (v = bt(B, v)), O && (O = bt(W, O)), q = bt(V, q);
      var Ce = vo(K);
      Ca(Ce, function() {
        Hn("Cannot construct " + K + " due to unbound types", [p]);
      }), en([c, l, u], p ? [p] : [], function(R) {
        if (R = R[8617 + 521 * -17 + 12 * 20], p) var ot = R.ea, Ze = ot.ma;
        else Ze = At.prototype;
        R = wo(Ce, function() {
          if (Object.getPrototypeOf(this) !== on) throw new qt("Use 'new' to construct " + K);
          if (void (-6 * -11 + -8157 + 8091) === rn.la) throw new qt(K + " has no accessible constructor");
          var Ra = rn.la[arguments.length];
          if (void (7573 * -1 + -9 * 661 + 13522) === Ra) throw new qt("Tried to invoke ctor of " + K + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(rn.la).toString() + ") parameters instead!");
          return Ra.apply(this, arguments);
        });
        var Ee = {};
        Ee.value = R;
        var Kt = {};
        Kt.constructor = Ee;
        var on = Object.create(Ze, Kt);
        R.prototype = on;
        var rn = new Ng(K, R, on, q, ot, b, v, O);
        ot = new xt(K, rn, !(2 * 3491 + -1 * 749 + -6233), !(6 * 899 + -4618 + -1 * 775)), Ze = new xt(K + "*", rn, !(3 * -598 + 13 * -187 + 4226), !(81 * -117 + -4503 + 41 * 341));
        var Va = new xt(K + " const*", rn, !(-1 * -7961 + -13 * 26 + 7622 * -1), !(4 * -1879 + 5968 + 1548)), Vo = {};
        return Vo.pointerType = Ze, Vo.za = Va, da[c] = Vo, ha(Ce, R), [ot, Ze, Va];
      });
    }, g: function(c, l, u, p, A, b) {
      T(313 * -18 + -1 * 1579 + 7213 < l);
      var B = Aa(l, u);
      A = bt(p, A);
      var v = [b], W = [];
      en([], [c], function(O) {
        O = O[-1072 + 134 * 8];
        var K = "constructor " + O.name;
        if (void (9562 + 1366 * -7) === O.ea.la && (O.ea.la = []), void (-6639 + 27 * 79 + 4506) !== O.ea.la[l - (149 * -66 + 3364 + 9 * 719)]) throw new qt("Cannot register multiple constructors with identical number of parameters (" + (l - (-1433 + -239 * -6)) + ") for class '" + O.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return O.ea.la[l - (-5 * -613 + -822 * 1 + -2242)] = function() {
          Hn("Cannot construct " + O.name + " due to unbound types", B);
        }, en([], B, function(V) {
          return O.ea.la[l - (-4577 * -1 + -52 * 40 + -2496)] = function() {
            arguments.length !== l - (-2780 + -2333 * 1 + 5114 * 1) && F(K + " called with " + arguments.length + " arguments, expected " + (l - 1)), W.length = 13359 + -4453 * 3, v.length = l;
            for (var q = -7255 + -1 * -7753 + -497; q < l; ++q) v[q] = V[q].toWireType(W, arguments[q - (1 * 5087 + 9155 + -14241)]);
            return q = A.apply(null, v), hi(W), V[-4692 * 2 + 5325 + 4059 * 1].fromWireType(q);
          }, [];
        }), [];
      });
    }, b: function(c, l, u, p, A, b, B, v, W, O) {
      l = Ve(l), A = bt(p, A), en([], [c], function(K) {
        K = K[-4987 * -1 + 9972 * 1 + -14959];
        var V = K.name + "." + l, q = { get: function() {
          Hn("Cannot access " + V + " due to unbound types", [u, B]);
        }, enumerable: !(3204 * -1 + 1438 * -2 + -6080 * -1), configurable: !(6357 + 39 * -163) };
        return W ? q.set = function() {
          Hn("Cannot access " + V + " due to unbound types", [u, B]);
        } : q.set = function() {
          F(V + " is a read-only property");
        }, Object.defineProperty(K.ea.ma, l, q), en([], W ? [u, B] : [u], function(Ce) {
          var R = Ce[0], ot = { get: function() {
            var Ee = ba(this, K, V + " getter");
            return R.fromWireType(A(b, Ee));
          }, enumerable: !(-47 * 118 + 9207 + -3661) };
          if (W) {
            W = bt(v, W);
            var Ze = Ce[4987 + -1 * -5811 + -10797];
            ot.set = function(Ee) {
              var Kt = ba(this, K, V + " setter"), on = [];
              W(O, Kt, Ze.toWireType(on, Ee)), hi(on);
            };
          }
          return Object.defineProperty(K.ea.ma, l, ot), [];
        }), [];
      });
    }, v: function(c, l) {
      l = Ve(l), lt(c, { name: l, fromWireType: function(u) {
        var p = Fe[u].value;
        return Wo(u), p;
      }, toWireType: function(u, p) {
        return tn(p);
      }, argPackAdvance: 8, readValueFromPointer: Ci, ka: null });
    }, m: function(c, l, u) {
      u = yo(u), l = Ve(l), lt(c, { name: l, fromWireType: function(p) {
        return p;
      }, toWireType: function(p, A) {
        if (typeof A != "number" && typeof A != "boolean") throw new TypeError('Cannot convert "' + nn(A) + '" to ' + this.name);
        return A;
      }, argPackAdvance: 8, readValueFromPointer: Ug(l, u), ka: null });
    }, c: function(c, l, u, p, A, b) {
      var B = Aa(l, u);
      c = Ve(c), A = bt(p, A), Ca(c, function() {
        Hn("Cannot call " + c + " due to unbound types", B);
      }, l - (-2 * 1903 + 2 * -2437 + 1 * 8681)), en([], B, function(v) {
        var W = c, O = c;
        v = [v[-16 * 437 + -1 * 696 + 248 * 31], null].concat(v.slice(854 * 2 + 1777 * -5 + -37 * -194));
        var K = A, V = v.length;
        38 * -47 + -7024 + 8812 > V && F("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var q = v[1 * -1389 + 355 * -5 + 3165] !== null && !(-133 * 8 + 1972 * 4 + -6823), Ce = !(-254 * 7 + 5505 + -3726), R = -1086 + 1099 * 6 + 5507 * -1; R < v.length; ++R) if (v[R] !== null && void (16 * 244 + -1791 + -1 * 2113) === v[R].ka) {
          Ce = !(3203 * 1 + -4721 * -1 + -14 * 566);
          break;
        }
        var ot = v[5196 + -2369 * 3 + -91 * -21].name !== "void", Ze = "", Ee = "";
        for (R = 1 * -5303 + 8842 + 1 * -3539; R < V - (-888 + -862 * -1 + 28); ++R) Ze += (R !== 0 ? ", " : "") + "arg" + R, Ee += (-9452 + 3 * 3173 + -67 * 1 !== R ? ", " : "") + "arg" + R + "Wired";
        O = "return function " + vo(O) + "(" + Ze + `) {
if (arguments.length !== ` + (V - (2102 * -1 + -4772 + 6876)) + `) {
throwBindingError('function ` + O + " called with ' + arguments.length + ' arguments, expected " + (V - (-1163 + -5 * -233)) + ` args!');
}
`, Ce && (O += `var destructors = [];
`);
        var Kt = Ce ? "destructors" : "null";
        for (Ze = "throwBindingError invoker fn runDestructors retType classParam".split(" "), K = [F, K, b, hi, v[59 * 123 + -2518 * 3 + -11 * -27], v[-4 * -685 + -2082 + -657]], q && (O += "var thisWired = classParam.toWireType(" + Kt + `, this);
`), R = 3888 + 383 * -13 + 1091; R < V - (2509 * -1 + -1 * 9484 + -5 * -2399); ++R) O += "var arg" + R + "Wired = argType" + R + ".toWireType(" + Kt + ", arg" + R + "); // " + v[R + (8636 + -3347 * 2 + -1940)].name + `
`, Ze.push("argType" + R), K.push(v[R + 2]);
        if (q && (Ee = "thisWired" + (-462 * 5 + 4846 + -2536 < Ee.length ? ", " : "") + Ee), O += (ot ? "var rv = " : "") + "invoker(fn" + (-9772 + 7 * 1396 < Ee.length ? ", " : "") + Ee + `);
`, Ce) O += `runDestructors(destructors);
`;
        else
          for (R = q ? -565 + 2 * 283 : -7305 + -7307 * -1; R < v.length; ++R) V = 6 * -124 + 2273 + -1528 === R ? "thisWired" : "arg" + (R - (822 * 1 + -2884 + 2 * 1032)) + "Wired", v[R].ka !== null && (O += V + "_dtor(" + V + "); // " + v[R].name + `
`, Ze.push(V + "_dtor"), K.push(v[R].ka));
        return ot && (O += `var ret = retType.fromWireType(rv);
return ret;
`), Ze.push(O + `}
`), v = Jg(Ze).apply(null, K), ha(W, v, l - (5654 * -1 + -4027 + 2 * 4841)), [];
      });
    }, e: function(c, l, u, p, A) {
      function b(O) {
        return O;
      }
      l = Ve(l), -(2 * 4607 + -10 * 428 + -1 * 4933) === A && (A = 1136104676 + -6738088291 * -1 + -264 * 13557673);
      var B = yo(u);
      if (-9905 + 36 * 37 + 8573 === p) {
        var v = 32 - 8 * u;
        b = function(O) {
          return O << v >>> v;
        };
      }
      var W = -(3 * -2118 + -5855 + 12210) != l.indexOf("unsigned");
      lt(c, { name: l, fromWireType: b, toWireType: function(O, K) {
        if (typeof K != "number" && typeof K != "boolean") throw new TypeError('Cannot convert "' + nn(K) + '" to ' + this.name);
        if (K < p || K > A) throw new TypeError('Passing a number "' + nn(K) + '" from JS side to C/C++ side to an argument of type "' + l + '", which is outside the valid range [' + p + ", " + A + "]!");
        return W ? K >>> -477 * -19 + -17 * -411 + -8025 * 2 : K | 5724 + -159 * 36;
      }, argPackAdvance: 8, readValueFromPointer: zg(l, B, -1 * 6424 + -2203 + 8627 !== p), ka: null });
    }, d: function(c, l, u) {
      function p(v) {
        v >>= 2;
        var W = we;
        return new A(Q, W[v + (7 * -1066 + 3 * -2687 + -7762 * -2)], W[v]);
      }
      var A = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][l];
      u = Ve(u);
      var b = {};
      b.name = u, b.fromWireType = p, b.argPackAdvance = 8, b.readValueFromPointer = p;
      var B = {};
      B.Ea = !(-1785 + 371 * -5 + -13 * -280), lt(c, b, B);
    }, n: function(c, l) {
      l = Ve(l);
      var u = l === "std::string";
      lt(c, { name: l, fromWireType: function(p) {
        var A = we[p >> 2];
        if (u) for (var b = p + (-4078 + -26 * -157), B = -2663 * -1 + 4713 + 8 * -922; B <= A; ++B) {
          var v = p + 4 + B;
          if (B == A || -1 * -9130 + -18 * 444 + -1138 == xe[v]) {
            if (b) {
              var W = b, O = xe, K = W + (v - b);
              for (b = W; O[b] && !(b >= K); ) ++b;
              if (16 < b - W && O.subarray && S) W = S.decode(O.subarray(W, b));
              else {
                for (K = ""; W < b; ) {
                  var V = O[W++];
                  if (V & 53 * 18 + -2 * -1657 + -4140) {
                    var q = O[W++] & 63;
                    if (-3063 + 13 * 227 + 1 * 304 == (V & 1923 * -1 + 6737 + -4590)) K += String.fromCharCode((V & 7 * -404 + -59 * 61 + 2 * 3229) << 6 * -1257 + 5709 + -1 * -1839 | q);
                    else {
                      var Ce = O[W++] & 63;
                      V = 2 * -2569 + -226 * 2 + 5814 == (V & -3032 + 1669 * 4 + -3404) ? (V & 8643 + 6 * -1438) << -2127 * -4 + -4641 + -3855 | q << 557 * -11 + 5003 * 1 + 113 * 10 | Ce : (V & -3797 + -2 * 323 + 5 * 890) << 9322 + 1579 * 3 + -1 * 14041 | q << -2803 * -3 + 468 + -197 * 45 | Ce << -107 + -113 * -1 | O[W++] & -3 * -1903 + -4808 + -838 * 1, 86114 + 5 * -13241 + 45627 > V ? K += String.fromCharCode(V) : (V -= -180536 + -61518 * -4, K += String.fromCharCode(64578 + 1 * -5659 + -3623 | V >> -3806 + 18 * 212, -11649 * 1 + -41333 * 2 + -47 * -3205 | V & 95 + 1 * 7925 + -6997));
                    }
                  } else K += String.fromCharCode(V);
                }
                W = K;
              }
            } else W = "";
            if (void (9 * 133 + -1 * 6029 + 4832) === R) var R = W;
            else R += String.fromCharCode(-5311 + -4451 * -1 + -10 * -86), R += W;
            b = v + (262 * -12 + 1 * 4982 + -1837);
          }
        }
        else {
          for (R = Array(A), B = 291 + -450 * -6 + -2991; B < A; ++B) R[B] = String.fromCharCode(xe[p + (11 * 22 + -1262 + 1024) + B]);
          R = R.join("");
        }
        return ut(p), R;
      }, toWireType: function(p, A) {
        A instanceof ArrayBuffer && (A = new Uint8Array(A));
        var b = typeof A == "string";
        b || A instanceof Uint8Array || A instanceof Uint8ClampedArray || A instanceof Int8Array || F("Cannot pass non-string to std::string");
        var B = (u && b ? function() {
          for (var O = 5938 + 270 * 17 + -10528, K = 0; K < A.length; ++K) {
            var V = A.charCodeAt(K);
            37 * 1018 + 7 * 4768 + -15746 * 1 <= V && 24347 + 2207 * -20 + 77136 >= V && (V = -4 * -281 + 25302 + 39110 + ((V & 1978 * 4 + 2053 * 1 + -8942) << 1450 + 251 * -27 + 5337) | A.charCodeAt(++K) & 73 * 89 + -3958 * 1 + -1516), 1865 * 5 + -206 * -21 + -13524 >= V ? ++O : O = 2207 + -5503 * 1 + -39 * -137 >= V ? O + (-43 * 54 + -9142 + 11466) : -49662 + 3 * 38399 >= V ? O + 3 : O + (3491 + -1 * -6259 + 1 * -9746);
          }
          return O;
        } : function() {
          return A.length;
        })(), v = mi(2 * -2619 + -5382 + 10624 + B + (1268 + 1267 * -1));
        if (we[v >> -3697 * -2 + -957 * -1 + -8349] = B, u && b) H(A, v + (-1 * -7390 + -6794 + -592), B + (-178 * -2 + -1446 + 1 * 1091));
        else if (b) for (b = 5 * 621 + 3 * -3126 + 6273; b < B; ++b) {
          var W = A.charCodeAt(b);
          255 < W && (ut(v), F("String has UTF-16 code units that do not fit in 8 bits")), xe[v + (-2846 * -1 + -1493 * -5 + -10307) + b] = W;
        }
        else
          for (b = 11583 + -11583 * 1; b < B; ++b) xe[v + (-9015 + -9019 * -1) + b] = A[b];
        return p !== null && p.push(ut, v), v;
      }, argPackAdvance: 8, readValueFromPointer: Ci, ka: function(p) {
        ut(p);
      } });
    }, j: function(c, l, u) {
      if (u = Ve(u), l === 2) var p = z, A = M, b = N, B = function() {
        return ze;
      }, v = 6888 + -3344 * -1 + -10231;
      else l === 4 && (p = G, A = j, b = he, B = function() {
        return we;
      }, v = -3431 + 4618 * 2 + 5803 * -1);
      lt(c, { name: u, fromWireType: function(W) {
        for (var O = we[W >> 2], K = B(), V, q = W + (-1 * -5527 + -1 * 1813 + -3710), Ce = 6092 + 6638 * 1 + -12730; Ce <= O; ++Ce) {
          var R = W + 4 + Ce * l;
          (Ce == O || -7203 + -3087 * -1 + 4116 == K[R >> v]) && (q = p(q, R - q), void (-8140 + 6573 * -1 + 14713) === V ? V = q : (V += String.fromCharCode(8719 * 1 + -3 * 2297 + -1828), V += q), q = R + l);
        }
        return ut(W), V;
      }, toWireType: function(W, O) {
        typeof O != "string" && F("Cannot pass non-string to C++ string type " + u);
        var K = b(O), V = mi(-1 * 2747 + -5251 + 8002 * 1 + K + l);
        return we[V >> -3235 + -3237 * -1] = K >> v, A(O, V + (-8417 + -2 * -1048 + 6325), K + l), W !== null && W.push(ut, V), V;
      }, argPackAdvance: 8, readValueFromPointer: Ci, ka: function(W) {
        ut(W);
      } });
    }, x: function(c, l) {
      l = Ve(l);
      var u = {};
      u.Qa = !(-5241 + 1193 * -7 + 13592), u.name = l, u.argPackAdvance = 0, u.fromWireType = function() {
      }, u.toWireType = function() {
      }, lt(c, u);
    }, k: function(c, l, u) {
      c = Ho(c), l = Ba(l, "emval::as");
      var p = [], A = tn(p);
      return ae[u >> -1 * -3737 + 9035 + -12770] = A, l.toWireType(p, c);
    }, i: Wo, l: function(c, l) {
      return c = Ho(c), l = Ho(l), tn(c[l]);
    }, p: function(c) {
      var l = Qg[c];
      return tn(void (-9 * -379 + 7332 + -10743) === l ? Ve(c) : l);
    }, o: function(c) {
      hi(Fe[c].value), Wo(c);
    }, y: function(c, l) {
      return c = Ba(c, "_emval_take_value"), c = c.readValueFromPointer(l), tn(c);
    }, f: function() {
      Ne();
    }, q: function(c, l, u) {
      xe.copyWithin(c, l, l + u);
    }, r: function(c) {
      c >>>= -976 + 1 * 976;
      var l = xe.length;
      if (302690108 + 368958708 * 5 < c) return !(1343 + 4663 * -2 + -499 * -16);
      for (var u = 7975 + -943 * -1 + -8917; 137 * -19 + -3297 + 36 * 164 >= u; u *= -695 * -5 + -187 * 15 + -668) {
        var p = l * (1 + 0.2 / u);
        p = Math.min(p, c + (-17 * -1650697 + -168511973 + 20092785 * 12)), p = Math.max(-17071963 + -1 * -4501282 + 29347897, c, p), -2902 + -2 * -1451 < p % (44408 + 96461 * 1 + -1 * 75333) && (p += 3 * 34187 + -1 * 101733 + -14 * -4622 - p % (41 * -1158 + 119140 + 6 * -1021));
        e: {
          try {
            w.grow(Math.min(2147483648, p) - Q.byteLength + (-65087 + 381 * 161 + 2389 * 29) >>> -8343 + 1 * -8403 + 17 * 986), He(w.buffer);
            var A = 8265 + -101 * 1 + -8163;
            break e;
          } catch {
          }
          A = void (9429 + 9429 * -1);
        }
        if (A) return !(-918 + 303 * 16 + -10 * 393);
      }
      return !(8084 + -303 * 19 + -2326);
    }, s: function(c, l) {
      var u = 0;
      return Za().forEach(function(p, A) {
        var b = l + u;
        for (A = ae[c + (5805 + 5801 * -1) * A >> -5809 + 362 * 15 + 381] = b, b = -1 * -7831 + 1 * -7559 + -272; b < p.length; ++b) le[A++ >> 2819 * 1 + -1 * 3223 + -4 * -101] = p.charCodeAt(b);
        le[A >> 6829 * -1 + 440 * 6 + 59 * 71] = 1 * -706 + 9887 + 9181 * -1, u += p.length + (-1454 * 1 + 5804 + -4349 * 1);
      }), 2978 + 2 * -1489;
    }, t: function(c, l) {
      var u = Za();
      ae[c >> 793 + 113 * -7] = u.length;
      var p = -1 * -3581 + -9 * -1043 + -1 * 12968;
      return u.forEach(function(A) {
        p += A.length + 1;
      }), ae[l >> -61 * 83 + -3 * -2621 + -2798] = p, 8 * 1093 + 5843 + -503 * 29;
    }, a: w };
    (function() {
      function c(B) {
        B = B.exports, B = Wa(B), t.asm = B, Te--, t.monitorRunDependencies && t.monitorRunDependencies(Te), 3040 + -152 * 20 == Te && nt && (B = nt, nt = null, B());
      }
      function l(B) {
        c(B.instance);
      }
      function u(B) {
        return Pg().then(function(v) {
          return WebAssembly.instantiate(v, A);
        }).then(B, function(v) {
          m("failed to asynchronously prepare wasm: " + v), Ne(v);
        });
      }
      var p = {};
      p.a = $g;
      var A = p;
      if (Te++, t.monitorRunDependencies && t.monitorRunDependencies(Te), t.instantiateWasm) try {
        var b = t.instantiateWasm(A, c);
        return b = Wa(b);
      } catch (B) {
        return m("Module.instantiateWasm callback failed with error: " + B), !(11 * 515 + 2378 + 8042 * -1);
      }
      return function() {
        if (f || typeof WebAssembly.instantiateStreaming != "function" || it() || Wt("file://") || typeof fetch != "function") return u(l);
        var B = {};
        B.credentials = "same-origin", fetch(Qe, B).then(function(v) {
          return WebAssembly.instantiateStreaming(v, A).then(l, function(W) {
            return m("wasm streaming compile failed: " + W), m("falling back to ArrayBuffer instantiation"), u(l);
          });
        });
      }(), {};
    })();
    var Oa = t.___wasm_call_ctors = function() {
      return (Oa = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, mi = t._malloc = function() {
      return (mi = t._malloc = t.asm.C).apply(null, arguments);
    }, ut = t._free = function() {
      return (ut = t._free = t.asm.D).apply(null, arguments);
    }, Ka = t.___getTypeName = function() {
      return (Ka = t.___getTypeName = t.asm.E).apply(null, arguments);
    };
    t.___embind_register_native_and_builtin_types = function() {
      return (t.___embind_register_native_and_builtin_types = t.asm.F).apply(null, arguments);
    }, t.dynCall_ii = function() {
      return (t.dynCall_ii = t.asm.G).apply(null, arguments);
    }, t.dynCall_vi = function() {
      return (t.dynCall_vi = t.asm.H).apply(null, arguments);
    }, t.dynCall_i = function() {
      return (t.dynCall_i = t.asm.I).apply(null, arguments);
    }, t.dynCall_iii = function() {
      return (t.dynCall_iii = t.asm.J).apply(null, arguments);
    }, t.dynCall_viii = function() {
      return (t.dynCall_viii = t.asm.K).apply(null, arguments);
    }, t.dynCall_fii = function() {
      return (t.dynCall_fii = t.asm.L).apply(null, arguments);
    }, t.dynCall_viif = function() {
      return (t.dynCall_viif = t.asm.M).apply(null, arguments);
    }, t.dynCall_viiii = function() {
      return (t.dynCall_viiii = t.asm.N).apply(null, arguments);
    }, t.dynCall_viiiiii = function() {
      return (t.dynCall_viiiiii = t.asm.O).apply(null, arguments);
    }, t.dynCall_iiiiii = function() {
      return (t.dynCall_iiiiii = t.asm.P).apply(null, arguments);
    }, t.dynCall_viiiii = function() {
      return (t.dynCall_viiiii = t.asm.Q).apply(null, arguments);
    }, t.dynCall_iiiiiiii = function() {
      return (t.dynCall_iiiiiiii = t.asm.R).apply(null, arguments);
    }, t.dynCall_viiiiiii = function() {
      return (t.dynCall_viiiiiii = t.asm.S).apply(null, arguments);
    }, t.dynCall_viiiiiiiiidi = function() {
      return (t.dynCall_viiiiiiiiidi = t.asm.T).apply(null, arguments);
    }, t.dynCall_viiiiiiiidi = function() {
      return (t.dynCall_viiiiiiiidi = t.asm.U).apply(null, arguments);
    }, t.dynCall_viiiiiiiiii = function() {
      return (t.dynCall_viiiiiiiiii = t.asm.V).apply(null, arguments);
    }, t.dynCall_viiiiiiiii = function() {
      return (t.dynCall_viiiiiiiii = t.asm.W).apply(null, arguments);
    }, t.dynCall_viiiiiiii = function() {
      return (t.dynCall_viiiiiiii = t.asm.X).apply(null, arguments);
    }, t.dynCall_iiiiiii = function() {
      return (t.dynCall_iiiiiii = t.asm.Y).apply(null, arguments);
    }, t.dynCall_iiiii = function() {
      return (t.dynCall_iiiii = t.asm.Z).apply(null, arguments);
    }, t.dynCall_iiii = function() {
      return (t.dynCall_iiii = t.asm._).apply(null, arguments);
    }, t._asyncify_start_unwind = function() {
      return (t._asyncify_start_unwind = t.asm.$).apply(null, arguments);
    }, t._asyncify_stop_unwind = function() {
      return (t._asyncify_stop_unwind = t.asm.aa).apply(null, arguments);
    }, t._asyncify_start_rewind = function() {
      return (t._asyncify_start_rewind = t.asm.ba).apply(null, arguments);
    }, t._asyncify_stop_rewind = function() {
      return (t._asyncify_stop_rewind = t.asm.ca).apply(null, arguments);
    };
    var Ai;
    nt = function c() {
      Ai || Ko(), Ai || (nt = c);
    };
    function Ko() {
      function c() {
        if (!Ai && (Ai = !(-3 * -687 + 4108 + -6169), t.calledRun = !(-1206 + -135 * 40 + -2202 * -3), !k)) {
          if (li(de), li(Ge), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var l = t.postRun.shift();
            Ke.unshift(l);
          }
          li(Ke);
        }
      }
      if (!(-14 * -122 + 1845 + 1 * -3553 < Te)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) $t();
        li(Oe), 1095 + 1 * 4109 + -5204 * 1 < Te || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, 1), c();
        }, 1 * 1647 + -1979 * -5 + -11541)) : c());
      }
    }
    if (t.run = Ko, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); 74 * 119 + 612 + -9418 < t.preInit.length; ) t.preInit.pop()();
    return Ko(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ug = Symbol("Comlink.proxy"), tI = Symbol("Comlink.endpoint"), nI = Symbol("Comlink.releaseProxy"), Uo = Symbol("Comlink.finalizer"), Xi = Symbol("Comlink.thrown"), Ig = (i) => typeof i == "object" && i !== null || typeof i == "function", iI = {
  canHandle: (i) => Ig(i) && i[ug],
  serialize(i) {
    const { port1: o, port2: t } = new MessageChannel();
    return Cg(i, o), [t, [t]];
  },
  deserialize(i) {
    return i.start(), hg(i);
  }
}, oI = {
  canHandle: (i) => Ig(i) && Xi in i,
  serialize({ value: i }) {
    let o;
    return i instanceof Error ? o = {
      isError: !0,
      value: {
        message: i.message,
        name: i.name,
        stack: i.stack
      }
    } : o = { isError: !1, value: i }, [o, []];
  },
  deserialize(i) {
    throw i.isError ? Object.assign(new Error(i.value.message), i.value) : i.value;
  }
}, dg = /* @__PURE__ */ new Map([
  ["proxy", iI],
  ["throw", oI]
]);
function rI(i, o) {
  for (const t of i)
    if (o === t || t === "*" || t instanceof RegExp && t.test(o))
      return !0;
  return !1;
}
function Cg(i, o = globalThis, t = ["*"]) {
  o.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!rI(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: a, path: s } = Object.assign({ path: [] }, n.data), g = (n.data.argumentList || []).map(Pt);
    let x;
    try {
      const C = s.slice(0, -1).reduce((m, f) => m[f], i), d = s.reduce((m, f) => m[f], i);
      switch (a) {
        case "GET":
          x = d;
          break;
        case "SET":
          C[s.slice(-1)[0]] = Pt(n.data.value), x = !0;
          break;
        case "APPLY":
          x = d.apply(C, g);
          break;
        case "CONSTRUCT":
          {
            const m = new d(...g);
            x = xI(m);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: m, port2: f } = new MessageChannel();
            Cg(i, f), x = lI(m, [m]);
          }
          break;
        case "RELEASE":
          x = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      x = { value: C, [Xi]: 0 };
    }
    Promise.resolve(x).catch((C) => ({ value: C, [Xi]: 0 })).then((C) => {
      const [d, m] = io(C);
      o.postMessage(Object.assign(Object.assign({}, d), { id: r }), m), a === "RELEASE" && (o.removeEventListener("message", e), pg(o), Uo in i && typeof i[Uo] == "function" && i[Uo]());
    }).catch((C) => {
      const [d, m] = io({
        value: new TypeError("Unserializable return value"),
        [Xi]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, d), { id: r }), m);
    });
  }), o.start && o.start();
}
function aI(i) {
  return i.constructor.name === "MessagePort";
}
function pg(i) {
  aI(i) && i.close();
}
function hg(i, o) {
  return Sr(i, [], o);
}
function Wi(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function fg(i) {
  return cn(i, {
    type: "RELEASE"
  }).then(() => {
    pg(i);
  });
}
const to = /* @__PURE__ */ new WeakMap(), no = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const o = (to.get(i) || 0) - 1;
  to.set(i, o), o === 0 && fg(i);
});
function sI(i, o) {
  const t = (to.get(o) || 0) + 1;
  to.set(o, t), no && no.register(i, o, i);
}
function gI(i) {
  no && no.unregister(i);
}
function Sr(i, o = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(r, a) {
      if (Wi(e), a === nI)
        return () => {
          gI(n), fg(i), e = !0;
        };
      if (a === "then") {
        if (o.length === 0)
          return { then: () => n };
        const s = cn(i, {
          type: "GET",
          path: o.map((g) => g.toString())
        }).then(Pt);
        return s.then.bind(s);
      }
      return Sr(i, [...o, a]);
    },
    set(r, a, s) {
      Wi(e);
      const [g, x] = io(s);
      return cn(i, {
        type: "SET",
        path: [...o, a].map((C) => C.toString()),
        value: g
      }, x).then(Pt);
    },
    apply(r, a, s) {
      Wi(e);
      const g = o[o.length - 1];
      if (g === tI)
        return cn(i, {
          type: "ENDPOINT"
        }).then(Pt);
      if (g === "bind")
        return Sr(i, o.slice(0, -1));
      const [x, C] = Bs(s);
      return cn(i, {
        type: "APPLY",
        path: o.map((d) => d.toString()),
        argumentList: x
      }, C).then(Pt);
    },
    construct(r, a) {
      Wi(e);
      const [s, g] = Bs(a);
      return cn(i, {
        type: "CONSTRUCT",
        path: o.map((x) => x.toString()),
        argumentList: s
      }, g).then(Pt);
    }
  });
  return sI(n, i), n;
}
function cI(i) {
  return Array.prototype.concat.apply([], i);
}
function Bs(i) {
  const o = i.map(io);
  return [o.map((t) => t[0]), cI(o.map((t) => t[1]))];
}
const mg = /* @__PURE__ */ new WeakMap();
function lI(i, o) {
  return mg.set(i, o), i;
}
function xI(i) {
  return Object.assign(i, { [ug]: !0 });
}
function io(i) {
  for (const [o, t] of dg)
    if (t.canHandle(i)) {
      const [e, n] = t.serialize(i);
      return [
        {
          type: "HANDLER",
          name: o,
          value: e
        },
        n
      ];
    }
  return [
    {
      type: "RAW",
      value: i
    },
    mg.get(i) || []
  ];
}
function Pt(i) {
  switch (i.type) {
    case "HANDLER":
      return dg.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function cn(i, o, t) {
  return new Promise((e) => {
    const n = uI();
    i.addEventListener("message", function r(a) {
      !a.data || !a.data.id || a.data.id !== n || (i.removeEventListener("message", r), e(a.data));
    }), i.start && i.start(), i.postMessage(Object.assign({ id: n }, o), t);
  });
}
function uI() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const Ag = "dmFyIHVlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgbGUgPSAocywgdSwgZSkgPT4gdSBpbiBzID8gdWUocywgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IHNbdV0gPSBlOwp2YXIgWW4gPSAocywgdSwgZSkgPT4gbGUocywgdHlwZW9mIHUgIT0gInN5bWJvbCIgPyB1ICsgIiIgOiB1LCBlKTsKY29uc3Qga3QgPSB7CiAgc2ltZDogInNhbV9zaW1kLndhc20iLAogIHNhbTogInNhbS53YXNtIgp9LCBjZSA9IGFzeW5jICgpID0+IFdlYkFzc2VtYmx5LnZhbGlkYXRlKG5ldyBVaW50OEFycmF5KFswLCA5NywgMTE1LCAxMDksIDEsIDAsIDAsIDAsIDEsIDUsIDEsIDk2LCAwLCAxLCAxMjMsIDMsIDIsIDEsIDAsIDEwLCAxMCwgMSwgOCwgMCwgNjUsIDAsIDI1MywgMTUsIDI1MywgOTgsIDExXSkpOwpjbGFzcyBGIGV4dGVuZHMgRXJyb3IgewogIGNvbnN0cnVjdG9yKGUsIG0pIHsKICAgIHN1cGVyKGUpOwogICAgWW4odGhpcywgImNhdXNlIik7CiAgICB0aGlzLm5hbWUgPSAiQXV0b0NhcHR1cmVFcnJvciIsIHRoaXMuY2F1c2UgPSBtOwogIH0KICAvLyBDaGFuZ2UgdGhpcyB0byBEZWNvcmF0b3Igd2hlbiB0aGV5IHdpbGwgYmUgaW4gc3RhYmxlIHJlbGVhc2UKICBzdGF0aWMgbG9nRXJyb3IoZSkgewogIH0KICBzdGF0aWMgZnJvbUNhbWVyYUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgRikKICAgICAgcmV0dXJuIGU7CiAgICBsZXQgbTsKICAgIHN3aXRjaCAoZS5uYW1lKSB7CiAgICAgIGNhc2UgIk92ZXJjb25zdHJhaW5lZEVycm9yIjoKICAgICAgICBtID0gIk1pbmltdW0gcXVhbGl0eSByZXF1aXJlbWVudHMgYXJlIG5vdCBtZXQgYnkgeW91ciBjYW1lcmEiOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RSZWFkYWJsZUVycm9yIjoKICAgICAgY2FzZSAiQWJvcnRFcnJvciI6CiAgICAgICAgbSA9ICJUaGUgd2ViY2FtIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYXBwbGljYXRpb24iOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RBbGxvd2VkRXJyb3IiOgogICAgICAgIG0gPSAiVG8gdXNlIHlvdXIgY2FtZXJhLCB5b3UgbXVzdCBhbGxvdyBwZXJtaXNzaW9ucyI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEZvdW5kRXJyb3IiOgogICAgICAgIG0gPSAiVGhlcmUgaXMgbm8gY2FtZXJhIGF2YWlsYWJsZSB0byB5b3UiOwogICAgICAgIGJyZWFrOwogICAgICBkZWZhdWx0OgogICAgICAgIG0gPSAiQW4gdW5rbm93biBjYW1lcmEgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgICAgICBicmVhazsKICAgIH0KICAgIHJldHVybiBuZXcgRihtLCBlKTsKICB9CiAgc3RhdGljIGZyb21FcnJvcihlKSB7CiAgICBpZiAodGhpcy5sb2dFcnJvcihlKSwgZSBpbnN0YW5jZW9mIEYpCiAgICAgIHJldHVybiBlOwogICAgY29uc3QgbSA9ICJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCI7CiAgICByZXR1cm4gbmV3IEYobSk7CiAgfQp9CmNvbnN0IGZlID0gewogIFJHQjogIlJHQiIsCiAgUkdCQTogIlJHQkEiCn0sIE1uID0gKHMsIHUpID0+IE1hdGguaHlwb3QodS54IC0gcy54LCB1LnkgLSBzLnkpLCBkZSA9IChzKSA9PiB7CiAgY29uc3QgeyBib3R0b21MZWZ0OiB1LCBib3R0b21SaWdodDogZSwgdG9wTGVmdDogbSwgdG9wUmlnaHQ6IGcgfSA9IHMsIEMgPSBNbihtLCBnKSwgQSA9IE1uKGcsIGUpLCBNID0gTW4odSwgZSksIFcgPSBNbihtLCB1KTsKICByZXR1cm4gTWF0aC5taW4oQywgQSwgTSwgVyk7Cn07CnZhciBoZSA9IGZ1bmN0aW9uKCkgewogIHZhciBzID0gdHlwZW9mIGRvY3VtZW50IDwgInUiICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgPyBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyA6IHZvaWQgMDsKICByZXR1cm4gZnVuY3Rpb24odSkgewogICAgdSA9IHUgfHwge307CiAgICB2YXIgZTsKICAgIGUgfHwgKGUgPSB0eXBlb2YgdSA8ICJ1IiA/IHUgOiB7fSk7CiAgICB2YXIgbSwgZzsKICAgIGUucmVhZHkgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihuLCB0KSB7CiAgICAgIG0gPSBuLCBnID0gdDsKICAgIH0pOwogICAgdmFyIEMgPSB7fSwgQTsKICAgIGZvciAoQSBpbiBlKSBlLmhhc093blByb3BlcnR5KEEpICYmIChDW0FdID0gZVtBXSk7CiAgICB2YXIgTSA9ICIuL3RoaXMucHJvZ3JhbSIsIFcgPSAhMSwgRSA9ICExOwogICAgVyA9IHR5cGVvZiB3aW5kb3cgPT0gIm9iamVjdCIsIEUgPSB0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PSAiZnVuY3Rpb24iOwogICAgdmFyIF8gPSAiIiwgUjsKICAgIChXIHx8IEUpICYmIChFID8gXyA9IHNlbGYubG9jYXRpb24uaHJlZiA6IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgKF8gPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyksIHMgJiYgKF8gPSBzKSwgXy5pbmRleE9mKCJibG9iOiIpICE9PSAwID8gXyA9IF8uc3Vic3RyKDAsIF8ubGFzdEluZGV4T2YoIi8iKSArIDEpIDogXyA9ICIiLCBFICYmIChSID0gZnVuY3Rpb24obikgewogICAgICB2YXIgdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOwogICAgICByZXR1cm4gdC5vcGVuKCJHRVQiLCBuLCAhMSksIHQucmVzcG9uc2VUeXBlID0gImFycmF5YnVmZmVyIiwgdC5zZW5kKG51bGwpLCBuZXcgVWludDhBcnJheSh0LnJlc3BvbnNlKTsKICAgIH0pKTsKICAgIHZhciBQID0gZS5wcmludEVyciB8fCBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKTsKICAgIGZvciAoQSBpbiBDKSBDLmhhc093blByb3BlcnR5KEEpICYmIChlW0FdID0gQ1tBXSk7CiAgICBDID0gbnVsbCwgZS50aGlzUHJvZ3JhbSAmJiAoTSA9IGUudGhpc1Byb2dyYW0pOwogICAgdmFyIEw7CiAgICBlLndhc21CaW5hcnkgJiYgKEwgPSBlLndhc21CaW5hcnkpLCBlLm5vRXhpdFJ1bnRpbWUgJiYgZS5ub0V4aXRSdW50aW1lLCB0eXBlb2YgV2ViQXNzZW1ibHkgIT0gIm9iamVjdCIgJiYgc24oIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWQiKTsKICAgIHZhciBHLCBSbiA9ICExOwogICAgZnVuY3Rpb24gUW4obikgewogICAgICBuIHx8IHNuKCJBc3NlcnRpb24gZmFpbGVkOiB1bmRlZmluZWQiKTsKICAgIH0KICAgIHZhciBYbiA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmOCIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gSHQobiwgdCwgcikgewogICAgICB2YXIgaSA9IHg7CiAgICAgIGlmICgwIDwgcikgewogICAgICAgIHIgPSB0ICsgciAtIDE7CiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBuLmxlbmd0aDsgKythKSB7CiAgICAgICAgICB2YXIgbyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICAgIGlmICg1NTI5NiA8PSBvICYmIDU3MzQzID49IG8pIHsKICAgICAgICAgICAgdmFyIGMgPSBuLmNoYXJDb2RlQXQoKythKTsKICAgICAgICAgICAgbyA9IDY1NTM2ICsgKChvICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAoMTI3ID49IG8pIHsKICAgICAgICAgICAgaWYgKHQgPj0gcikgYnJlYWs7CiAgICAgICAgICAgIGlbdCsrXSA9IG87CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBpZiAoMjA0NyA+PSBvKSB7CiAgICAgICAgICAgICAgaWYgKHQgKyAxID49IHIpIGJyZWFrOwogICAgICAgICAgICAgIGlbdCsrXSA9IDE5MiB8IG8gPj4gNjsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICBpZiAoNjU1MzUgPj0gbykgewogICAgICAgICAgICAgICAgaWYgKHQgKyAyID49IHIpIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjI0IHwgbyA+PiAxMjsKICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgaWYgKHQgKyAzID49IHIpIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjQwIHwgbyA+PiAxOCwgaVt0KytdID0gMTI4IHwgbyA+PiAxMiAmIDYzOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgICBpW3QrK10gPSAxMjggfCBvID4+IDYgJiA2MzsKICAgICAgICAgICAgfQogICAgICAgICAgICBpW3QrK10gPSAxMjggfCBvICYgNjM7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGlbdF0gPSAwOwogICAgICB9CiAgICB9CiAgICB2YXIgcW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0Zi0xNmxlIikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiBVdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBuID4+IDEsIGkgPSByICsgdCAvIDI7ICEociA+PSBpKSAmJiBwbltyXTsgKSArK3I7CiAgICAgIGlmIChyIDw8PSAxLCAzMiA8IHIgLSBuICYmIHFuKSByZXR1cm4gcW4uZGVjb2RlKHguc3ViYXJyYXkobiwgcikpOwogICAgICBmb3IgKHIgPSAwLCBpID0gIiI7IDsgKSB7CiAgICAgICAgdmFyIGEgPSBYW24gKyAyICogciA+PiAxXTsKICAgICAgICBpZiAoYSA9PSAwIHx8IHIgPT0gdCAvIDIpIHJldHVybiBpOwogICAgICAgICsrciwgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGEpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiB6dChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgMiA+IHIpIHJldHVybiAwOwogICAgICByIC09IDI7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IHIgPCAyICogbi5sZW5ndGggPyByIC8gMiA6IG4ubGVuZ3RoOwogICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHI7ICsrYSkgWFt0ID4+IDFdID0gbi5jaGFyQ29kZUF0KGEpLCB0ICs9IDI7CiAgICAgIHJldHVybiBYW3QgPj4gMV0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEJ0KG4pIHsKICAgICAgcmV0dXJuIDIgKiBuLmxlbmd0aDsKICAgIH0KICAgIGZ1bmN0aW9uIER0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IDAsIGkgPSAiIjsgIShyID49IHQgLyA0KTsgKSB7CiAgICAgICAgdmFyIGEgPSBiW24gKyA0ICogciA+PiAyXTsKICAgICAgICBpZiAoYSA9PSAwKSBicmVhazsKICAgICAgICArK3IsIDY1NTM2IDw9IGEgPyAoYSAtPSA2NTUzNiwgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2IHwgYSA+PiAxMCwgNTYzMjAgfCBhICYgMTAyMykpIDogaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGEpOwogICAgICB9CiAgICAgIHJldHVybiBpOwogICAgfQogICAgZnVuY3Rpb24gVnQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDQgPiByKSByZXR1cm4gMDsKICAgICAgdmFyIGkgPSB0OwogICAgICByID0gaSArIHIgLSA0OwogICAgICBmb3IgKHZhciBhID0gMDsgYSA8IG4ubGVuZ3RoOyArK2EpIHsKICAgICAgICB2YXIgbyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICBpZiAoNTUyOTYgPD0gbyAmJiA1NzM0MyA+PSBvKSB7CiAgICAgICAgICB2YXIgYyA9IG4uY2hhckNvZGVBdCgrK2EpOwogICAgICAgICAgbyA9IDY1NTM2ICsgKChvICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgfQogICAgICAgIGlmIChiW3QgPj4gMl0gPSBvLCB0ICs9IDQsIHQgKyA0ID4gcikgYnJlYWs7CiAgICAgIH0KICAgICAgcmV0dXJuIGJbdCA+PiAyXSA9IDAsIHQgLSBpOwogICAgfQogICAgZnVuY3Rpb24gR3QobikgewogICAgICBmb3IgKHZhciB0ID0gMCwgciA9IDA7IHIgPCBuLmxlbmd0aDsgKytyKSB7CiAgICAgICAgdmFyIGkgPSBuLmNoYXJDb2RlQXQocik7CiAgICAgICAgNTUyOTYgPD0gaSAmJiA1NzM0MyA+PSBpICYmICsrciwgdCArPSA0OwogICAgICB9CiAgICAgIHJldHVybiB0OwogICAgfQogICAgdmFyIFEsICQsIHgsIFgsIHBuLCBiLCBILCBudCwgdHQ7CiAgICBmdW5jdGlvbiBldChuKSB7CiAgICAgIFEgPSBuLCBlLkhFQVA4ID0gJCA9IG5ldyBJbnQ4QXJyYXkobiksIGUuSEVBUDE2ID0gWCA9IG5ldyBJbnQxNkFycmF5KG4pLCBlLkhFQVAzMiA9IGIgPSBuZXcgSW50MzJBcnJheShuKSwgZS5IRUFQVTggPSB4ID0gbmV3IFVpbnQ4QXJyYXkobiksIGUuSEVBUFUxNiA9IHBuID0gbmV3IFVpbnQxNkFycmF5KG4pLCBlLkhFQVBVMzIgPSBIID0gbmV3IFVpbnQzMkFycmF5KG4pLCBlLkhFQVBGMzIgPSBudCA9IG5ldyBGbG9hdDMyQXJyYXkobiksIGUuSEVBUEY2NCA9IHR0ID0gbmV3IEZsb2F0NjRBcnJheShuKTsKICAgIH0KICAgIHZhciBydCA9IGUuSU5JVElBTF9NRU1PUlkgfHwgMTY3NzcyMTY7CiAgICBlLndhc21NZW1vcnkgPyBHID0gZS53YXNtTWVtb3J5IDogRyA9IG5ldyBXZWJBc3NlbWJseS5NZW1vcnkoeyBpbml0aWFsOiBydCAvIDY1NTM2LCBtYXhpbXVtOiAzMjc2OCB9KSwgRyAmJiAoUSA9IEcuYnVmZmVyKSwgcnQgPSBRLmJ5dGVMZW5ndGgsIGV0KFEpOwogICAgdmFyIGl0ID0gW10sIGF0ID0gW10sICR0ID0gW10sIG90ID0gW107CiAgICBmdW5jdGlvbiBZdCgpIHsKICAgICAgdmFyIG4gPSBlLnByZVJ1bi5zaGlmdCgpOwogICAgICBpdC51bnNoaWZ0KG4pOwogICAgfQogICAgdmFyIFkgPSAwLCBvbiA9IG51bGw7CiAgICBlLnByZWxvYWRlZEltYWdlcyA9IHt9LCBlLnByZWxvYWRlZEF1ZGlvcyA9IHt9OwogICAgZnVuY3Rpb24gc24obikgewogICAgICB0aHJvdyBlLm9uQWJvcnQgJiYgZS5vbkFib3J0KG4pLCBQKG4pLCBSbiA9ICEwLCBuID0gbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcigiYWJvcnQoIiArIG4gKyAiKS4gQnVpbGQgd2l0aCAtcyBBU1NFUlRJT05TPTEgZm9yIG1vcmUgaW5mby4iKSwgZyhuKSwgbjsKICAgIH0KICAgIGZ1bmN0aW9uIHhuKG4pIHsKICAgICAgdmFyIHQgPSBaOwogICAgICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID8gdC5zdGFydHNXaXRoKG4pIDogdC5pbmRleE9mKG4pID09PSAwOwogICAgfQogICAgZnVuY3Rpb24gc3QoKSB7CiAgICAgIHJldHVybiB4bigiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LCIpOwogICAgfQogICAgdmFyIFogPSAic2FtLndhc20iOwogICAgaWYgKCFzdCgpKSB7CiAgICAgIHZhciB1dCA9IFo7CiAgICAgIFogPSBlLmxvY2F0ZUZpbGUgPyBlLmxvY2F0ZUZpbGUodXQsIF8pIDogXyArIHV0OwogICAgfQogICAgZnVuY3Rpb24gbHQoKSB7CiAgICAgIHRyeSB7CiAgICAgICAgaWYgKEwpIHJldHVybiBuZXcgVWludDhBcnJheShMKTsKICAgICAgICBpZiAoUikgcmV0dXJuIFIoWik7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIHNuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBadCgpIHsKICAgICAgcmV0dXJuIEwgfHwgIVcgJiYgIUUgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgeG4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4obHQpIDogZmV0Y2goWiwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spIHRocm93ICJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICciICsgWiArICInIjsKICAgICAgICByZXR1cm4gbi5hcnJheUJ1ZmZlcigpOwogICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gbHQoKTsKICAgICAgfSk7CiAgICB9CiAgICBmdW5jdGlvbiB5bihuKSB7CiAgICAgIGZvciAoOyAwIDwgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5zaGlmdCgpOwogICAgICAgIGlmICh0eXBlb2YgdCA9PSAiZnVuY3Rpb24iKSB0KGUpOwogICAgICAgIGVsc2UgewogICAgICAgICAgdmFyIHIgPSB0LkJhOwogICAgICAgICAgdHlwZW9mIHIgPT0gIm51bWJlciIgPyB0LnRhID09PSB2b2lkIDAgPyBGbigidiIsIHIpKCkgOiBGbigidmkiLCByKSh0LnRhKSA6IHIodC50YSA9PT0gdm9pZCAwID8gbnVsbCA6IHQudGEpOwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gRm4obiwgdCkgewogICAgICB2YXIgciA9IFtdOwogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgci5sZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOwogICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gSnQobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIGJbdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIGJbdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgYlt0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIG1uKCkgewogICAgICByZXR1cm4gMCA8IG1uLnhhOwogICAgfQogICAgZnVuY3Rpb24gSW4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIGN0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gUyhuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgeFtuXTsgKSB0ICs9IGN0W3hbbisrXV07CiAgICAgIHJldHVybiB0OwogICAgfQogICAgdmFyIHEgPSB7fSwgSiA9IHt9LCB2biA9IHt9OwogICAgZnVuY3Rpb24gTG4obikgewogICAgICBpZiAobiA9PT0gdm9pZCAwKSByZXR1cm4gIl91bmtub3duIjsKICAgICAgbiA9IG4ucmVwbGFjZSgvW15hLXpBLVowLTlfXS9nLCAiJCIpOwogICAgICB2YXIgdCA9IG4uY2hhckNvZGVBdCgwKTsKICAgICAgcmV0dXJuIDQ4IDw9IHQgJiYgNTcgPj0gdCA/ICJfIiArIG4gOiBuOwogICAgfQogICAgZnVuY3Rpb24gam4obiwgdCkgewogICAgICByZXR1cm4gbiA9IExuKG4pLCBuZXcgRnVuY3Rpb24oImJvZHkiLCAicmV0dXJuIGZ1bmN0aW9uICIgKyBuICsgYCgpIHsKICAgICJ1c2Ugc3RyaWN0IjsgICAgcmV0dXJuIGJvZHkuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKfTsKYCkodCk7CiAgICB9CiAgICBmdW5jdGlvbiBObihuKSB7CiAgICAgIHZhciB0ID0gRXJyb3IsIHIgPSBqbihuLCBmdW5jdGlvbihpKSB7CiAgICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5tZXNzYWdlID0gaSwgaSA9IEVycm9yKGkpLnN0YWNrLCBpICE9PSB2b2lkIDAgJiYgKHRoaXMuc3RhY2sgPSB0aGlzLnRvU3RyaW5nKCkgKyBgCmAgKyBpLnJlcGxhY2UoL15FcnJvcig6W15cbl0qKT9cbi8sICIiKSk7CiAgICAgIH0pOwogICAgICByZXR1cm4gci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHQucHJvdG90eXBlKSwgci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSByLCByLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkgewogICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UgPT09IHZvaWQgMCA/IHRoaXMubmFtZSA6IHRoaXMubmFtZSArICI6ICIgKyB0aGlzLm1lc3NhZ2U7CiAgICAgIH0sIHI7CiAgICB9CiAgICB2YXIgbm4gPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB2KG4pIHsKICAgICAgdGhyb3cgbmV3IG5uKG4pOwogICAgfQogICAgdmFyIGZ0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gZ24obikgewogICAgICB0aHJvdyBuZXcgZnQobik7CiAgICB9CiAgICBmdW5jdGlvbiB0bihuLCB0LCByKSB7CiAgICAgIGZ1bmN0aW9uIGkobCkgewogICAgICAgIGwgPSByKGwpLCBsLmxlbmd0aCAhPT0gbi5sZW5ndGggJiYgZ24oIk1pc21hdGNoZWQgdHlwZSBjb252ZXJ0ZXIgY291bnQiKTsKICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IG4ubGVuZ3RoOyArK3ApIFUobltwXSwgbFtwXSk7CiAgICAgIH0KICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uKGwpIHsKICAgICAgICB2bltsXSA9IHQ7CiAgICAgIH0pOwogICAgICB2YXIgYSA9IEFycmF5KHQubGVuZ3RoKSwgbyA9IFtdLCBjID0gMDsKICAgICAgdC5mb3JFYWNoKGZ1bmN0aW9uKGwsIHApIHsKICAgICAgICBKLmhhc093blByb3BlcnR5KGwpID8gYVtwXSA9IEpbbF0gOiAoby5wdXNoKGwpLCBxLmhhc093blByb3BlcnR5KGwpIHx8IChxW2xdID0gW10pLCBxW2xdLnB1c2goZnVuY3Rpb24oKSB7CiAgICAgICAgICBhW3BdID0gSltsXSwgKytjLCBjID09PSBvLmxlbmd0aCAmJiBpKGEpOwogICAgICAgIH0pKTsKICAgICAgfSksIG8ubGVuZ3RoID09PSAwICYmIGkoYSk7CiAgICB9CiAgICBmdW5jdGlvbiBVKG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPSByIHx8IHt9LCAhKCJhcmdQYWNrQWR2YW5jZSIgaW4gdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoInJlZ2lzdGVyVHlwZSByZWdpc3RlcmVkSW5zdGFuY2UgcmVxdWlyZXMgYXJnUGFja0FkdmFuY2UiKTsKICAgICAgdmFyIGkgPSB0Lm5hbWU7CiAgICAgIGlmIChuIHx8IHYoJ3R5cGUgIicgKyBpICsgJyIgbXVzdCBoYXZlIGEgcG9zaXRpdmUgaW50ZWdlciB0eXBlaWQgcG9pbnRlcicpLCBKLmhhc093blByb3BlcnR5KG4pKSB7CiAgICAgICAgaWYgKHIuRWEpIHJldHVybjsKICAgICAgICB2KCJDYW5ub3QgcmVnaXN0ZXIgdHlwZSAnIiArIGkgKyAiJyB0d2ljZSIpOwogICAgICB9CiAgICAgIEpbbl0gPSB0LCBkZWxldGUgdm5bbl0sIHEuaGFzT3duUHJvcGVydHkobikgJiYgKHQgPSBxW25dLCBkZWxldGUgcVtuXSwgdC5mb3JFYWNoKGZ1bmN0aW9uKGEpIHsKICAgICAgICBhKCk7CiAgICAgIH0pKTsKICAgIH0KICAgIGZ1bmN0aW9uIEt0KG4pIHsKICAgICAgcmV0dXJuIHsgY291bnQ6IG4uY291bnQsIG9hOiBuLm9hLCBwYTogbi5wYSwgZGE6IG4uZGEsIGZhOiBuLmZhLCBnYTogbi5nYSwgaGE6IG4uaGEgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEhuKG4pIHsKICAgICAgdihuLkEuZmEuZWEubmFtZSArICIgaW5zdGFuY2UgYWxyZWFkeSBkZWxldGVkIik7CiAgICB9CiAgICB2YXIgVW4gPSAhMTsKICAgIGZ1bmN0aW9uIGR0KCkgewogICAgfQogICAgZnVuY3Rpb24gaHQobikgewogICAgICAtLW4uY291bnQudmFsdWUsIG4uY291bnQudmFsdWUgPT09IDAgJiYgKG4uZ2EgPyBuLmhhLm5hKG4uZ2EpIDogbi5mYS5lYS5uYShuLmRhKSk7CiAgICB9CiAgICBmdW5jdGlvbiB1bihuKSB7CiAgICAgIHJldHVybiB0eXBlb2YgRmluYWxpemF0aW9uR3JvdXAgPiAidSIgPyAodW4gPSBmdW5jdGlvbih0KSB7CiAgICAgICAgcmV0dXJuIHQ7CiAgICAgIH0sIG4pIDogKFVuID0gbmV3IEZpbmFsaXphdGlvbkdyb3VwKGZ1bmN0aW9uKHQpIHsKICAgICAgICBmb3IgKHZhciByID0gdC5uZXh0KCk7ICFyLmRvbmU7IHIgPSB0Lm5leHQoKSkgciA9IHIudmFsdWUsIHIuZGEgPyBodChyKSA6IGNvbnNvbGUud2Fybigib2JqZWN0IGFscmVhZHkgZGVsZXRlZDogIiArIHIuZGEpOwogICAgICB9KSwgdW4gPSBmdW5jdGlvbih0KSB7CiAgICAgICAgcmV0dXJuIFVuLnJlZ2lzdGVyKHQsIHQuQSwgdC5BKSwgdDsKICAgICAgfSwgZHQgPSBmdW5jdGlvbih0KSB7CiAgICAgICAgVW4udW5yZWdpc3Rlcih0LkEpOwogICAgICB9LCB1bihuKSk7CiAgICB9CiAgICB2YXIgbG4gPSB2b2lkIDAsIGNuID0gW107CiAgICBmdW5jdGlvbiB6bigpIHsKICAgICAgZm9yICg7IGNuLmxlbmd0aDsgKSB7CiAgICAgICAgdmFyIG4gPSBjbi5wb3AoKTsKICAgICAgICBuLkEub2EgPSAhMSwgbi5kZWxldGUoKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gRCgpIHsKICAgIH0KICAgIHZhciBwdCA9IHt9OwogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICB2YXIgciA9IGU7CiAgICAgIGlmIChyW25dLmphID09PSB2b2lkIDApIHsKICAgICAgICB2YXIgaSA9IHJbbl07CiAgICAgICAgcltuXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgcmV0dXJuIHJbbl0uamEuaGFzT3duUHJvcGVydHkoYXJndW1lbnRzLmxlbmd0aCkgfHwgdigiRnVuY3Rpb24gJyIgKyB0ICsgIicgY2FsbGVkIHdpdGggYW4gaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0cyBvbmUgb2YgKCIgKyByW25dLmphICsgIikhIiksIHJbbl0uamFbYXJndW1lbnRzLmxlbmd0aF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9LCByW25dLmphID0gW10sIHJbbl0uamFbaS55YV0gPSBpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiB5dChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgPyAoKHIgPT09IHZvaWQgMCB8fCBlW25dLmphICE9PSB2b2lkIDAgJiYgZVtuXS5qYVtyXSAhPT0gdm9pZCAwKSAmJiB2KCJDYW5ub3QgcmVnaXN0ZXIgcHVibGljIG5hbWUgJyIgKyBuICsgIicgdHdpY2UiKSwgUXQobiwgbiksIGUuaGFzT3duUHJvcGVydHkocikgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIG92ZXJsb2FkcyBvZiBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIHIgKyAiKSEiKSwgZVtuXS5qYVtyXSA9IHQpIDogKGVbbl0gPSB0LCByICE9PSB2b2lkIDAgJiYgKGVbbl0uUmEgPSByKSk7CiAgICB9CiAgICBmdW5jdGlvbiBYdChuLCB0LCByLCBpLCBhLCBvLCBjLCBsKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuY29uc3RydWN0b3IgPSB0LCB0aGlzLm1hID0gciwgdGhpcy5uYSA9IGksIHRoaXMuaWEgPSBhLCB0aGlzLkNhID0gbywgdGhpcy5xYSA9IGMsIHRoaXMuQWEgPSBsOwogICAgfQogICAgZnVuY3Rpb24gd24obiwgdCwgcikgewogICAgICBmb3IgKDsgdCAhPT0gcjsgKSB0LnFhIHx8IHYoIkV4cGVjdGVkIG51bGwgb3IgaW5zdGFuY2Ugb2YgIiArIHIubmFtZSArICIsIGdvdCBhbiBpbnN0YW5jZSBvZiAiICsgdC5uYW1lKSwgbiA9IHQucWEobiksIHQgPSB0LmlhOwogICAgICByZXR1cm4gbjsKICAgIH0KICAgIGZ1bmN0aW9uIHF0KG4sIHQpIHsKICAgICAgcmV0dXJuIHQgPT09IG51bGwgPyAodGhpcy51YSAmJiB2KCJudWxsIGlzIG5vdCBhIHZhbGlkICIgKyB0aGlzLm5hbWUpLCAwKSA6ICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIG5lKG4sIHQpIHsKICAgICAgaWYgKHQgPT09IG51bGwpIHsKICAgICAgICBpZiAodGhpcy51YSAmJiB2KCJudWxsIGlzIG5vdCBhIHZhbGlkICIgKyB0aGlzLm5hbWUpLCB0aGlzLnNhKSB7CiAgICAgICAgICB2YXIgciA9IHRoaXMuSGEoKTsKICAgICAgICAgIHJldHVybiBuICE9PSBudWxsICYmIG4ucHVzaCh0aGlzLm5hLCByKSwgcjsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIDA7CiAgICAgIH0KICAgICAgaWYgKHQuQSB8fCB2KCdDYW5ub3QgcGFzcyAiJyArIHJuKHQpICsgJyIgYXMgYSAnICsgdGhpcy5uYW1lKSwgdC5BLmRhIHx8IHYoIkNhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICIgKyB0aGlzLm5hbWUpLCAhdGhpcy5yYSAmJiB0LkEuZmEucmEgJiYgdigiQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAiICsgKHQuQS5oYSA/IHQuQS5oYS5uYW1lIDogdC5BLmZhLm5hbWUpICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKSwgciA9IHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSwgdGhpcy5zYSkgc3dpdGNoICh0LkEuZ2EgPT09IHZvaWQgMCAmJiB2KCJQYXNzaW5nIHJhdyBwb2ludGVyIHRvIHNtYXJ0IHBvaW50ZXIgaXMgaWxsZWdhbCIpLCB0aGlzLlBhKSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgdC5BLmhhID09PSB0aGlzID8gciA9IHQuQS5nYSA6IHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSk7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByID0gdC5BLmdhOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgaWYgKHQuQS5oYSA9PT0gdGhpcykgciA9IHQuQS5nYTsKICAgICAgICAgIGVsc2UgewogICAgICAgICAgICB2YXIgaSA9IHQuY2xvbmUoKTsKICAgICAgICAgICAgciA9IHRoaXMuSWEociwgZW4oZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgaS5kZWxldGUoKTsKICAgICAgICAgICAgfSkpLCBuICE9PSBudWxsICYmIG4ucHVzaCh0aGlzLm5hLCByKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2KCJVbnN1cHBvcnRpbmcgc2hhcmluZyBwb2xpY3kiKTsKICAgICAgfQogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIHRlKG4sIHQpIHsKICAgICAgcmV0dXJuIHQgPT09IG51bGwgPyAodGhpcy51YSAmJiB2KCJudWxsIGlzIG5vdCBhIHZhbGlkICIgKyB0aGlzLm5hbWUpLCAwKSA6ICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArIHQuQS5mYS5uYW1lICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKSwgd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKG4pIHsKICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKEhbbiA+PiAyXSk7CiAgICB9CiAgICBmdW5jdGlvbiBtdChuLCB0LCByKSB7CiAgICAgIHJldHVybiB0ID09PSByID8gbiA6IHIuaWEgPT09IHZvaWQgMCA/IG51bGwgOiAobiA9IG10KG4sIHQsIHIuaWEpLCBuID09PSBudWxsID8gbnVsbCA6IHIuQWEobikpOwogICAgfQogICAgdmFyIGZuID0ge307CiAgICBmdW5jdGlvbiBlZShuLCB0KSB7CiAgICAgIGZvciAodCA9PT0gdm9pZCAwICYmIHYoInB0ciBzaG91bGQgbm90IGJlIHVuZGVmaW5lZCIpOyBuLmlhOyApIHQgPSBuLnFhKHQpLCBuID0gbi5pYTsKICAgICAgcmV0dXJuIGZuW3RdOwogICAgfQogICAgZnVuY3Rpb24gX24obiwgdCkgewogICAgICByZXR1cm4gdC5mYSAmJiB0LmRhIHx8IGduKCJtYWtlQ2xhc3NIYW5kbGUgcmVxdWlyZXMgcHRyIGFuZCBwdHJUeXBlIiksICEhdC5oYSAhPSAhIXQuZ2EgJiYgZ24oIkJvdGggc21hcnRQdHJUeXBlIGFuZCBzbWFydFB0ciBtdXN0IGJlIHNwZWNpZmllZCIpLCB0LmNvdW50ID0geyB2YWx1ZTogMSB9LCB1bihPYmplY3QuY3JlYXRlKG4sIHsgQTogeyB2YWx1ZTogdCB9IH0pKTsKICAgIH0KICAgIGZ1bmN0aW9uIHoobiwgdCwgciwgaSkgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmVhID0gdCwgdGhpcy51YSA9IHIsIHRoaXMucmEgPSBpLCB0aGlzLnNhID0gITEsIHRoaXMubmEgPSB0aGlzLklhID0gdGhpcy5IYSA9IHRoaXMud2EgPSB0aGlzLlBhID0gdGhpcy5HYSA9IHZvaWQgMCwgdC5pYSAhPT0gdm9pZCAwID8gdGhpcy50b1dpcmVUeXBlID0gbmUgOiAodGhpcy50b1dpcmVUeXBlID0gaSA/IHF0IDogdGUsIHRoaXMua2EgPSBudWxsKTsKICAgIH0KICAgIGZ1bmN0aW9uIHZ0KG4sIHQsIHIpIHsKICAgICAgZS5oYXNPd25Qcm9wZXJ0eShuKSB8fCBnbigiUmVwbGFjaW5nIG5vbmV4aXN0YW50IHB1YmxpYyBzeW1ib2wiKSwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIHIgIT09IHZvaWQgMCA/IGVbbl0uamFbcl0gPSB0IDogKGVbbl0gPSB0LCBlW25dLnlhID0gcik7CiAgICB9CiAgICBmdW5jdGlvbiBWKG4sIHQpIHsKICAgICAgbiA9IFMobik7CiAgICAgIHZhciByID0gRm4obiwgdCk7CiAgICAgIHJldHVybiB0eXBlb2YgciAhPSAiZnVuY3Rpb24iICYmIHYoInVua25vd24gZnVuY3Rpb24gcG9pbnRlciB3aXRoIHNpZ25hdHVyZSAiICsgbiArICI6ICIgKyB0KSwgcjsKICAgIH0KICAgIHZhciBndCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIHd0KG4pIHsKICAgICAgbiA9IGJ0KG4pOwogICAgICB2YXIgdCA9IFMobik7CiAgICAgIHJldHVybiBCKG4pLCB0OwogICAgfQogICAgZnVuY3Rpb24gZG4obiwgdCkgewogICAgICBmdW5jdGlvbiByKG8pIHsKICAgICAgICBhW29dIHx8IEpbb10gfHwgKHZuW29dID8gdm5bb10uZm9yRWFjaChyKSA6IChpLnB1c2gobyksIGFbb10gPSAhMCkpOwogICAgICB9CiAgICAgIHZhciBpID0gW10sIGEgPSB7fTsKICAgICAgdGhyb3cgdC5mb3JFYWNoKHIpLCBuZXcgZ3QobiArICI6ICIgKyBpLm1hcCh3dCkuam9pbihbIiwgIl0pKTsKICAgIH0KICAgIGZ1bmN0aW9uIEF0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IFtdLCBpID0gMDsgaSA8IG47IGkrKykgci5wdXNoKGJbKHQgPj4gMikgKyBpXSk7CiAgICAgIHJldHVybiByOwogICAgfQogICAgZnVuY3Rpb24gQ24obikgewogICAgICBmb3IgKDsgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5wb3AoKTsKICAgICAgICBuLnBvcCgpKHQpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBfdChuLCB0LCByKSB7CiAgICAgIHJldHVybiBuIGluc3RhbmNlb2YgT2JqZWN0IHx8IHYociArICcgd2l0aCBpbnZhbGlkICJ0aGlzIjogJyArIG4pLCBuIGluc3RhbmNlb2YgdC5lYS5jb25zdHJ1Y3RvciB8fCB2KHIgKyAnIGluY29tcGF0aWJsZSB3aXRoICJ0aGlzIiBvZiB0eXBlICcgKyBuLmNvbnN0cnVjdG9yLm5hbWUpLCBuLkEuZGEgfHwgdigiY2Fubm90IGNhbGwgZW1zY3JpcHRlbiBiaW5kaW5nIG1ldGhvZCAiICsgciArICIgb24gZGVsZXRlZCBvYmplY3QiKSwgd24obi5BLmRhLCBuLkEuZmEuZWEsIHQuZWEpOwogICAgfQogICAgdmFyIEJuID0gW10sIEkgPSBbe30sIHsgdmFsdWU6IHZvaWQgMCB9LCB7IHZhbHVlOiBudWxsIH0sIHsgdmFsdWU6ICEwIH0sIHsgdmFsdWU6ICExIH1dOwogICAgZnVuY3Rpb24gRG4obikgewogICAgICA0IDwgbiAmJiAtLUlbbl0uSmEgPT09IDAgJiYgKElbbl0gPSB2b2lkIDAsIEJuLnB1c2gobikpOwogICAgfQogICAgZnVuY3Rpb24gZW4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIHZvaWQgMDoKICAgICAgICAgIHJldHVybiAxOwogICAgICAgIGNhc2UgbnVsbDoKICAgICAgICAgIHJldHVybiAyOwogICAgICAgIGNhc2UgITA6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBjYXNlICExOgogICAgICAgICAgcmV0dXJuIDQ7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHZhciB0ID0gQm4ubGVuZ3RoID8gQm4ucG9wKCkgOiBJLmxlbmd0aDsKICAgICAgICAgIHJldHVybiBJW3RdID0geyBKYTogMSwgdmFsdWU6IG4gfSwgdDsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcm4obikgewogICAgICBpZiAobiA9PT0gbnVsbCkgcmV0dXJuICJudWxsIjsKICAgICAgdmFyIHQgPSB0eXBlb2YgbjsKICAgICAgcmV0dXJuIHQgPT09ICJvYmplY3QiIHx8IHQgPT09ICJhcnJheSIgfHwgdCA9PT0gImZ1bmN0aW9uIiA/IG4udG9TdHJpbmcoKSA6ICIiICsgbjsKICAgIH0KICAgIGZ1bmN0aW9uIHJlKG4sIHQpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKG50W3IgPj4gMl0pOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDM6CiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocikgewogICAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUodHRbciA+PiAzXSk7CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGZsb2F0IHR5cGU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gaWUobikgewogICAgICB2YXIgdCA9IEZ1bmN0aW9uOwogICAgICBpZiAoISh0IGluc3RhbmNlb2YgRnVuY3Rpb24pKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJuZXdfIGNhbGxlZCB3aXRoIGNvbnN0cnVjdG9yIHR5cGUgIiArIHR5cGVvZiB0ICsgIiB3aGljaCBpcyBub3QgYSBmdW5jdGlvbiIpOwogICAgICB2YXIgciA9IGpuKHQubmFtZSB8fCAidW5rbm93bkZ1bmN0aW9uTmFtZSIsIGZ1bmN0aW9uKCkgewogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gdC5wcm90b3R5cGUsIHIgPSBuZXcgcigpLCBuID0gdC5hcHBseShyLCBuKSwgbiBpbnN0YW5jZW9mIE9iamVjdCA/IG4gOiByOwogICAgfQogICAgZnVuY3Rpb24gYWUobiwgdCwgcikgewogICAgICBzd2l0Y2ggKHQpIHsKICAgICAgICBjYXNlIDA6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuICRbaV07CiAgICAgICAgICB9IDogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4geFtpXTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBYW2kgPj4gMV07CiAgICAgICAgICB9IDogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gcG5baSA+PiAxXTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBiW2kgPj4gMl07CiAgICAgICAgICB9IDogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gSFtpID4+IDJdOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBpbnRlZ2VyIHR5cGU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gVm4obikgewogICAgICByZXR1cm4gbiB8fCB2KCJDYW5ub3QgdXNlIGRlbGV0ZWQgdmFsLiBoYW5kbGUgPSAiICsgbiksIElbbl0udmFsdWU7CiAgICB9CiAgICBmdW5jdGlvbiBDdChuLCB0KSB7CiAgICAgIHZhciByID0gSltuXTsKICAgICAgcmV0dXJuIHIgPT09IHZvaWQgMCAmJiB2KHQgKyAiIGhhcyB1bmtub3duIHR5cGUgIiArIHd0KG4pKSwgcjsKICAgIH0KICAgIHZhciBvZSA9IHt9LCBFdCA9IHt9OwogICAgZnVuY3Rpb24gVHQoKSB7CiAgICAgIGlmICghR24pIHsKICAgICAgICB2YXIgbiA9IHsgVVNFUjogIndlYl91c2VyIiwgTE9HTkFNRTogIndlYl91c2VyIiwgUEFUSDogIi8iLCBQV0Q6ICIvIiwgSE9NRTogIi9ob21lL3dlYl91c2VyIiwgTEFORzogKHR5cGVvZiBuYXZpZ2F0b3IgPT0gIm9iamVjdCIgJiYgbmF2aWdhdG9yLmxhbmd1YWdlcyAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdIHx8ICJDIikucmVwbGFjZSgiLSIsICJfIikgKyAiLlVURi04IiwgXzogTSB8fCAiLi90aGlzLnByb2dyYW0iIH0sIHQ7CiAgICAgICAgZm9yICh0IGluIEV0KSBuW3RdID0gRXRbdF07CiAgICAgICAgdmFyIHIgPSBbXTsKICAgICAgICBmb3IgKHQgaW4gbikgci5wdXNoKHQgKyAiPSIgKyBuW3RdKTsKICAgICAgICBHbiA9IHI7CiAgICAgIH0KICAgICAgcmV0dXJuIEduOwogICAgfQogICAgdmFyIEduLCBQdCA9IFtdOwogICAgZnVuY3Rpb24gTXQobikgewogICAgICB2YXIgdCA9IHt9LCByOwogICAgICBmb3IgKHIgaW4gbikgKGZ1bmN0aW9uKGkpIHsKICAgICAgICB2YXIgYSA9IG5baV07CiAgICAgICAgdFtpXSA9IHR5cGVvZiBhID09ICJmdW5jdGlvbiIgPyBmdW5jdGlvbigpIHsKICAgICAgICAgIFB0LnB1c2goaSk7CiAgICAgICAgICB0cnkgewogICAgICAgICAgICByZXR1cm4gYS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgICAgICAgfSBmaW5hbGx5IHsKICAgICAgICAgICAgaWYgKFJuKSByZXR1cm47CiAgICAgICAgICAgIHZhciBvID0gUHQucG9wKCk7CiAgICAgICAgICAgIFFuKG8gPT09IGkpOwogICAgICAgICAgfQogICAgICAgIH0gOiBhOwogICAgICB9KShyKTsKICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICBmb3IgKHZhciBXdCA9IEFycmF5KDI1NiksIEVuID0gMDsgMjU2ID4gRW47ICsrRW4pIFd0W0VuXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoRW4pOwogICAgY3QgPSBXdCwgbm4gPSBlLkJpbmRpbmdFcnJvciA9IE5uKCJCaW5kaW5nRXJyb3IiKSwgZnQgPSBlLkludGVybmFsRXJyb3IgPSBObigiSW50ZXJuYWxFcnJvciIpLCBELnByb3RvdHlwZS5pc0FsaWFzT2YgPSBmdW5jdGlvbihuKSB7CiAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBEICYmIG4gaW5zdGFuY2VvZiBEKSkgcmV0dXJuICExOwogICAgICB2YXIgdCA9IHRoaXMuQS5mYS5lYSwgciA9IHRoaXMuQS5kYSwgaSA9IG4uQS5mYS5lYTsKICAgICAgZm9yIChuID0gbi5BLmRhOyB0LmlhOyApIHIgPSB0LnFhKHIpLCB0ID0gdC5pYTsKICAgICAgZm9yICg7IGkuaWE7ICkgbiA9IGkucWEobiksIGkgPSBpLmlhOwogICAgICByZXR1cm4gdCA9PT0gaSAmJiByID09PSBuOwogICAgfSwgRC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHsKICAgICAgaWYgKHRoaXMuQS5kYSB8fCBIbih0aGlzKSwgdGhpcy5BLnBhKSByZXR1cm4gdGhpcy5BLmNvdW50LnZhbHVlICs9IDEsIHRoaXM7CiAgICAgIHZhciBuID0gdW4oT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyksIHsgQTogeyB2YWx1ZTogS3QodGhpcy5BKSB9IH0pKTsKICAgICAgcmV0dXJuIG4uQS5jb3VudC52YWx1ZSArPSAxLCBuLkEub2EgPSAhMSwgbjsKICAgIH0sIEQucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKCkgewogICAgICB0aGlzLkEuZGEgfHwgSG4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgZHQodGhpcyksIGh0KHRoaXMuQSksIHRoaXMuQS5wYSB8fCAodGhpcy5BLmdhID0gdm9pZCAwLCB0aGlzLkEuZGEgPSB2b2lkIDApOwogICAgfSwgRC5wcm90b3R5cGUuaXNEZWxldGVkID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAhdGhpcy5BLmRhOwogICAgfSwgRC5wcm90b3R5cGUuZGVsZXRlTGF0ZXIgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIHRoaXMuQS5kYSB8fCBIbih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBjbi5wdXNoKHRoaXMpLCBjbi5sZW5ndGggPT09IDEgJiYgbG4gJiYgbG4oem4pLCB0aGlzLkEub2EgPSAhMCwgdGhpczsKICAgIH0sIHoucHJvdG90eXBlLkRhID0gZnVuY3Rpb24obikgewogICAgICByZXR1cm4gdGhpcy53YSAmJiAobiA9IHRoaXMud2EobikpLCBuOwogICAgfSwgei5wcm90b3R5cGUudmEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHRoaXMubmEgJiYgdGhpcy5uYShuKTsKICAgIH0sIHoucHJvdG90eXBlLmFyZ1BhY2tBZHZhbmNlID0gOCwgei5wcm90b3R5cGUucmVhZFZhbHVlRnJvbVBvaW50ZXIgPSBBbiwgei5wcm90b3R5cGUuZGVsZXRlT2JqZWN0ID0gZnVuY3Rpb24obikgewogICAgICBuICE9PSBudWxsICYmIG4uZGVsZXRlKCk7CiAgICB9LCB6LnByb3RvdHlwZS5mcm9tV2lyZVR5cGUgPSBmdW5jdGlvbihuKSB7CiAgICAgIGZ1bmN0aW9uIHQoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuc2EgPyBfbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLkdhLCBkYTogciwgaGE6IHRoaXMsIGdhOiBuIH0pIDogX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcywgZGE6IG4gfSk7CiAgICAgIH0KICAgICAgdmFyIHIgPSB0aGlzLkRhKG4pOwogICAgICBpZiAoIXIpIHJldHVybiB0aGlzLnZhKG4pLCBudWxsOwogICAgICB2YXIgaSA9IGVlKHRoaXMuZWEsIHIpOwogICAgICBpZiAoaSAhPT0gdm9pZCAwKQogICAgICAgIHJldHVybiBpLkEuY291bnQudmFsdWUgPT09IDAgPyAoaS5BLmRhID0gciwgaS5BLmdhID0gbiwgaS5jbG9uZSgpKSA6IChpID0gaS5jbG9uZSgpLCB0aGlzLnZhKG4pLCBpKTsKICAgICAgaWYgKGkgPSB0aGlzLmVhLkNhKHIpLCBpID0gcHRbaV0sICFpKSByZXR1cm4gdC5jYWxsKHRoaXMpOwogICAgICBpID0gdGhpcy5yYSA/IGkuemEgOiBpLnBvaW50ZXJUeXBlOwogICAgICB2YXIgYSA9IG10KHIsIHRoaXMuZWEsIGkuZWEpOwogICAgICByZXR1cm4gYSA9PT0gbnVsbCA/IHQuY2FsbCh0aGlzKSA6IHRoaXMuc2EgPyBfbihpLmVhLm1hLCB7IGZhOiBpLCBkYTogYSwgaGE6IHRoaXMsIGdhOiBuIH0pIDogX24oCiAgICAgICAgaS5lYS5tYSwKICAgICAgICB7IGZhOiBpLCBkYTogYSB9CiAgICAgICk7CiAgICB9LCBlLmdldEluaGVyaXRlZEluc3RhbmNlQ291bnQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGZuKS5sZW5ndGg7CiAgICB9LCBlLmdldExpdmVJbmhlcml0ZWRJbnN0YW5jZXMgPSBmdW5jdGlvbigpIHsKICAgICAgdmFyIG4gPSBbXSwgdDsKICAgICAgZm9yICh0IGluIGZuKSBmbi5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBuLnB1c2goZm5bdF0pOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZmx1c2hQZW5kaW5nRGVsZXRlcyA9IHpuLCBlLnNldERlbGF5RnVuY3Rpb24gPSBmdW5jdGlvbihuKSB7CiAgICAgIGxuID0gbiwgY24ubGVuZ3RoICYmIGxuICYmIGxuKHpuKTsKICAgIH0sIGd0ID0gZS5VbmJvdW5kVHlwZUVycm9yID0gTm4oIlVuYm91bmRUeXBlRXJyb3IiKSwgZS5jb3VudF9lbXZhbF9oYW5kbGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSAwLCB0ID0gNTsgdCA8IEkubGVuZ3RoOyArK3QpIElbdF0gIT09IHZvaWQgMCAmJiArK247CiAgICAgIHJldHVybiBuOwogICAgfSwgZS5nZXRfZmlyc3RfZW12YWwgPSBmdW5jdGlvbigpIHsKICAgICAgZm9yICh2YXIgbiA9IDU7IG4gPCBJLmxlbmd0aDsgKytuKSBpZiAoSVtuXSAhPT0gdm9pZCAwKSByZXR1cm4gSVtuXTsKICAgICAgcmV0dXJuIG51bGw7CiAgICB9LCBhdC5wdXNoKHsgQmE6IGZ1bmN0aW9uKCkgewogICAgICBPdCgpOwogICAgfSB9KTsKICAgIHZhciBzZSA9IHsKICAgICAgejogZnVuY3Rpb24obikgewogICAgICAgIHJldHVybiBUbihuICsgMTYpICsgMTY7CiAgICAgIH0sCiAgICAgIHU6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICB0aHJvdyBuZXcgSnQobikuRmEodCwgciksICJ1bmNhdWdodF9leGNlcHRpb24iIGluIG1uID8gbW4ueGErKyA6IG1uLnhhID0gMSwgbjsKICAgICAgfSwKICAgICAgdzogZnVuY3Rpb24obiwgdCwgciwgaSwgYSkgewogICAgICAgIHZhciBvID0gSW4ocik7CiAgICAgICAgdCA9IFModCksIFUobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIHJldHVybiAhIWM7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oYywgbCkgewogICAgICAgICAgcmV0dXJuIGwgPyBpIDogYTsKICAgICAgICB9LCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIGlmIChyID09PSAxKSB2YXIgbCA9ICQ7CiAgICAgICAgICBlbHNlIGlmIChyID09PSAyKSBsID0gWDsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDQpIGwgPSBiOwogICAgICAgICAgZWxzZSB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGJvb2xlYW4gdHlwZSBzaXplOiAiICsgdCk7CiAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUobFtjID4+IG9dKTsKICAgICAgICB9LCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgaDogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgbywgYywgbCwgcCwgZiwgZCwgaCwgdykgewogICAgICAgIGQgPSBTKGQpLCBvID0gVihhLCBvKSwgbCAmJiAobCA9IFYoYywgbCkpLCBmICYmIChmID0gVihwLCBmKSksIHcgPSBWKGgsIHcpOwogICAgICAgIHZhciBUID0gTG4oZCk7CiAgICAgICAgeXQoVCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBkbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbaV0pOwogICAgICAgIH0pLCB0bihbbiwgdCwgcl0sIGkgPyBbaV0gOiBbXSwgZnVuY3Rpb24oeSkgewogICAgICAgICAgaWYgKHkgPSB5WzBdLCBpKQogICAgICAgICAgICB2YXIgTiA9IHkuZWEsIE8gPSBOLm1hOwogICAgICAgICAgZWxzZSBPID0gRC5wcm90b3R5cGU7CiAgICAgICAgICB5ID0gam4oVCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykgIT09IGspIHRocm93IG5ldyBubigiVXNlICduZXcnIHRvIGNvbnN0cnVjdCAiICsgZCk7CiAgICAgICAgICAgIGlmIChqLmxhID09PSB2b2lkIDApIHRocm93IG5ldyBubihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIgU3QgPSBqLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoU3QgPT09IHZvaWQgMCkgdGhyb3cgbmV3IG5uKCJUcmllZCB0byBpbnZva2UgY3RvciBvZiAiICsgZCArICIgd2l0aCBpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0ZWQgKCIgKyBPYmplY3Qua2V5cyhqLmxhKS50b1N0cmluZygpICsgIikgcGFyYW1ldGVycyBpbnN0ZWFkISIpOwogICAgICAgICAgICByZXR1cm4gU3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICAgIH0pOwogICAgICAgICAgdmFyIGsgPSBPYmplY3QuY3JlYXRlKE8sIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHkgfSB9KTsKICAgICAgICAgIHkucHJvdG90eXBlID0gazsKICAgICAgICAgIHZhciBqID0gbmV3IFh0KGQsIHksIGssIHcsIE4sIG8sIGwsIGYpOwogICAgICAgICAgTiA9IG5ldyB6KGQsIGosICEwLCAhMSksIE8gPSBuZXcgeihkICsgIioiLCBqLCAhMSwgITEpOwogICAgICAgICAgdmFyIGhuID0gbmV3IHooZCArICIgY29uc3QqIiwgaiwgITEsICEwKTsKICAgICAgICAgIHJldHVybiBwdFtuXSA9IHsgcG9pbnRlclR5cGU6IE8sIHphOiBobiB9LCB2dChULCB5KSwgW04sIE8sIGhuXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgZzogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgbykgewogICAgICAgIFFuKDAgPCB0KTsKICAgICAgICB2YXIgYyA9IEF0KHQsIHIpOwogICAgICAgIGEgPSBWKGksIGEpOwogICAgICAgIHZhciBsID0gW29dLCBwID0gW107CiAgICAgICAgdG4oW10sIFtuXSwgZnVuY3Rpb24oZikgewogICAgICAgICAgZiA9IGZbMF07CiAgICAgICAgICB2YXIgZCA9ICJjb25zdHJ1Y3RvciAiICsgZi5uYW1lOwogICAgICAgICAgaWYgKGYuZWEubGEgPT09IHZvaWQgMCAmJiAoZi5lYS5sYSA9IFtdKSwgZi5lYS5sYVt0IC0gMV0gIT09IHZvaWQgMCkgdGhyb3cgbmV3IG5uKCJDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgY29uc3RydWN0b3JzIHdpdGggaWRlbnRpY2FsIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgKHQgLSAxKSArICIpIGZvciBjbGFzcyAnIiArIGYubmFtZSArICInISBPdmVybG9hZCByZXNvbHV0aW9uIGlzIGN1cnJlbnRseSBvbmx5IHBlcmZvcm1lZCB1c2luZyB0aGUgcGFyYW1ldGVyIGNvdW50LCBub3QgYWN0dWFsIHR5cGUgaW5mbyEiKTsKICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZi5uYW1lICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGMpOwogICAgICAgICAgfSwgdG4oW10sIGMsIGZ1bmN0aW9uKGgpIHsKICAgICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCAhPT0gdCAtIDEgJiYgdihkICsgIiBjYWxsZWQgd2l0aCAiICsgYXJndW1lbnRzLmxlbmd0aCArICIgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKHQgLSAxKSksIHAubGVuZ3RoID0gMCwgbC5sZW5ndGggPSB0OwogICAgICAgICAgICAgIGZvciAodmFyIHcgPSAxOyB3IDwgdDsgKyt3KSBsW3ddID0gaFt3XS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgcCwKICAgICAgICAgICAgICAgIGFyZ3VtZW50c1t3IC0gMV0KICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiB3ID0gYS5hcHBseShudWxsLCBsKSwgQ24ocCksIGhbMF0uZnJvbVdpcmVUeXBlKHcpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgbywgYywgbCwgcCwgZikgewogICAgICAgIHQgPSBTKHQpLCBhID0gVihpLCBhKSwgdG4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgaCA9IGQubmFtZSArICIuIiArIHQsIHcgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgYWNjZXNzICIgKyBoICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBjXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHAgPyB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgY10pOwogICAgICAgICAgfSA6IHcuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYoaCArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCB3KSwgdG4oW10sIHAgPyBbciwgY10gOiBbcl0sIGZ1bmN0aW9uKFQpIHsKICAgICAgICAgICAgdmFyIHkgPSBUWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciBrID0gX3QodGhpcywgZCwgaCArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIHkuZnJvbVdpcmVUeXBlKGEobywgaykpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAocCkgewogICAgICAgICAgICAgIHAgPSBWKGwsIHApOwogICAgICAgICAgICAgIHZhciBPID0gVFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKGspIHsKICAgICAgICAgICAgICAgIHZhciBqID0gX3QodGhpcywgZCwgaCArICIgc2V0dGVyIiksIGhuID0gW107CiAgICAgICAgICAgICAgICBwKGYsIGosIE8udG9XaXJlVHlwZShobiwgaykpLCBDbihobik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBTKHQpLCBVKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IElbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gRG4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIGVuKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IEluKHIpLCB0ID0gUyh0KSwgVShuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBhICE9ICJudW1iZXIiICYmIHR5cGVvZiBhICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBybihhKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgICByZXR1cm4gYTsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiByZSh0LCByKSwKICAgICAgICAgIGthOiBudWxsCiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGM6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEsIG8pIHsKICAgICAgICB2YXIgYyA9IEF0KHQsIHIpOwogICAgICAgIG4gPSBTKG4pLCBhID0gVihpLCBhKSwgeXQobiwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBkbigiQ2Fubm90IGNhbGwgIiArIG4gKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgYyk7CiAgICAgICAgfSwgdCAtIDEpLCB0bihbXSwgYywgZnVuY3Rpb24obCkgewogICAgICAgICAgdmFyIHAgPSBuLCBmID0gbjsKICAgICAgICAgIGwgPSBbbFswXSwgbnVsbF0uY29uY2F0KGwuc2xpY2UoMSkpOwogICAgICAgICAgdmFyIGQgPSBhLCBoID0gbC5sZW5ndGg7CiAgICAgICAgICAyID4gaCAmJiB2KCJhcmdUeXBlcyBhcnJheSBzaXplIG1pc21hdGNoISBNdXN0IGF0IGxlYXN0IGdldCByZXR1cm4gdmFsdWUgYW5kICd0aGlzJyB0eXBlcyEiKTsKICAgICAgICAgIGZvciAodmFyIHcgPSBsWzFdICE9PSBudWxsICYmICExLCBUID0gITEsIHkgPSAxOyB5IDwgbC5sZW5ndGg7ICsreSkgaWYgKGxbeV0gIT09IG51bGwgJiYgbFt5XS5rYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgICAgIFQgPSAhMDsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICB9CiAgICAgICAgICB2YXIgTiA9IGxbMF0ubmFtZSAhPT0gInZvaWQiLCBPID0gIiIsIGsgPSAiIjsKICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCBoIC0gMjsgKyt5KSBPICs9ICh5ICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgeSwgayArPSAoeSAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHkgKyAiV2lyZWQiOwogICAgICAgICAgZiA9ICJyZXR1cm4gZnVuY3Rpb24gIiArIExuKGYpICsgIigiICsgTyArIGApIHsKaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IGAgKyAoaCAtIDIpICsgYCkgewp0aHJvd0JpbmRpbmdFcnJvcignZnVuY3Rpb24gYCArIGYgKyAiIGNhbGxlZCB3aXRoICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAoaCAtIDIpICsgYCBhcmdzIScpOwp9CmAsIFQgJiYgKGYgKz0gYHZhciBkZXN0cnVjdG9ycyA9IFtdOwpgKTsKICAgICAgICAgIHZhciBqID0gVCA/ICJkZXN0cnVjdG9ycyIgOiAibnVsbCI7CiAgICAgICAgICBmb3IgKE8gPSAidGhyb3dCaW5kaW5nRXJyb3IgaW52b2tlciBmbiBydW5EZXN0cnVjdG9ycyByZXRUeXBlIGNsYXNzUGFyYW0iLnNwbGl0KCIgIiksIGQgPSBbdiwgZCwgbywgQ24sIGxbMF0sIGxbMV1dLCB3ICYmIChmICs9ICJ2YXIgdGhpc1dpcmVkID0gY2xhc3NQYXJhbS50b1dpcmVUeXBlKCIgKyBqICsgYCwgdGhpcyk7CmApLCB5ID0gMDsgeSA8IGggLSAyOyArK3kpIGYgKz0gInZhciBhcmciICsgeSArICJXaXJlZCA9IGFyZ1R5cGUiICsgeSArICIudG9XaXJlVHlwZSgiICsgaiArICIsIGFyZyIgKyB5ICsgIik7IC8vICIgKyBsW3kgKyAyXS5uYW1lICsgYApgLCBPLnB1c2goImFyZ1R5cGUiICsgeSksIGQucHVzaChsW3kgKyAyXSk7CiAgICAgICAgICBpZiAodyAmJiAoayA9ICJ0aGlzV2lyZWQiICsgKDAgPCBrLmxlbmd0aCA/ICIsICIgOiAiIikgKyBrKSwgZiArPSAoTiA/ICJ2YXIgcnYgPSAiIDogIiIpICsgImludm9rZXIoZm4iICsgKDAgPCBrLmxlbmd0aCA/ICIsICIgOiAiIikgKyBrICsgYCk7CmAsIFQpIGYgKz0gYHJ1bkRlc3RydWN0b3JzKGRlc3RydWN0b3JzKTsKYDsKICAgICAgICAgIGVsc2UgZm9yICh5ID0gdyA/IDEgOiAyOyB5IDwgbC5sZW5ndGg7ICsreSkgaCA9IHkgPT09IDEgPyAidGhpc1dpcmVkIiA6ICJhcmciICsgKHkgLSAyKSArICJXaXJlZCIsIGxbeV0ua2EgIT09IG51bGwgJiYgKGYgKz0gaCArICJfZHRvcigiICsgaCArICIpOyAvLyAiICsgbFt5XS5uYW1lICsgYApgLCBPLnB1c2goaCArICJfZHRvciIpLCBkLnB1c2gobFt5XS5rYSkpOwogICAgICAgICAgcmV0dXJuIE4gJiYgKGYgKz0gYHZhciByZXQgPSByZXRUeXBlLmZyb21XaXJlVHlwZShydik7CnJldHVybiByZXQ7CmApLCBPLnB1c2goZiArIGB9CmApLCBsID0gaWUoTykuYXBwbHkobnVsbCwgZCksIHZ0KHAsIGwsIHQgLSAxKSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGU6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEpIHsKICAgICAgICBmdW5jdGlvbiBvKGYpIHsKICAgICAgICAgIHJldHVybiBmOwogICAgICAgIH0KICAgICAgICB0ID0gUyh0KSwgYSA9PT0gLTEgJiYgKGEgPSA0Mjk0OTY3Mjk1KTsKICAgICAgICB2YXIgYyA9IEluKHIpOwogICAgICAgIGlmIChpID09PSAwKSB7CiAgICAgICAgICB2YXIgbCA9IDMyIC0gOCAqIHI7CiAgICAgICAgICBvID0gZnVuY3Rpb24oZikgewogICAgICAgICAgICByZXR1cm4gZiA8PCBsID4+PiBsOwogICAgICAgICAgfTsKICAgICAgICB9CiAgICAgICAgdmFyIHAgPSB0LmluZGV4T2YoInVuc2lnbmVkIikgIT0gLTE7CiAgICAgICAgVShuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogbywgdG9XaXJlVHlwZTogZnVuY3Rpb24oZiwgZCkgewogICAgICAgICAgaWYgKHR5cGVvZiBkICE9ICJudW1iZXIiICYmIHR5cGVvZiBkICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBybihkKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgaWYgKGQgPCBpIHx8IGQgPiBhKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXNzaW5nIGEgbnVtYmVyICInICsgcm4oZCkgKyAnIiBmcm9tIEpTIHNpZGUgdG8gQy9DKysgc2lkZSB0byBhbiBhcmd1bWVudCBvZiB0eXBlICInICsgdCArICciLCB3aGljaCBpcyBvdXRzaWRlIHRoZSB2YWxpZCByYW5nZSBbJyArIGkgKyAiLCAiICsgYSArICJdISIpOwogICAgICAgICAgcmV0dXJuIHAgPyBkID4+PiAwIDogZCB8IDA7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBhZSh0LCBjLCBpICE9PSAwKSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGQ6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBmdW5jdGlvbiBpKG8pIHsKICAgICAgICAgIG8gPj49IDI7CiAgICAgICAgICB2YXIgYyA9IEg7CiAgICAgICAgICByZXR1cm4gbmV3IGEoUSwgY1tvICsgMV0sIGNbb10pOwogICAgICAgIH0KICAgICAgICB2YXIgYSA9IFtJbnQ4QXJyYXksIFVpbnQ4QXJyYXksIEludDE2QXJyYXksIFVpbnQxNkFycmF5LCBJbnQzMkFycmF5LCBVaW50MzJBcnJheSwgRmxvYXQzMkFycmF5LCBGbG9hdDY0QXJyYXldW3RdOwogICAgICAgIHIgPSBTKHIpLCBVKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBpLCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGkgfSwgeyBFYTogITAgfSk7CiAgICAgIH0sCiAgICAgIG46IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUyh0KTsKICAgICAgICB2YXIgciA9IHQgPT09ICJzdGQ6OnN0cmluZyI7CiAgICAgICAgVShuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHZhciBhID0gSFtpID4+IDJdOwogICAgICAgICAgICBpZiAocikgZm9yICh2YXIgbyA9IGkgKyA0LCBjID0gMDsgYyA8PSBhOyArK2MpIHsKICAgICAgICAgICAgICB2YXIgbCA9IGkgKyA0ICsgYzsKICAgICAgICAgICAgICBpZiAoYyA9PSBhIHx8IHhbbF0gPT0gMCkgewogICAgICAgICAgICAgICAgaWYgKG8pIHsKICAgICAgICAgICAgICAgICAgdmFyIHAgPSBvLCBmID0geCwgZCA9IHAgKyAobCAtIG8pOwogICAgICAgICAgICAgICAgICBmb3IgKG8gPSBwOyBmW29dICYmICEobyA+PSBkKTsgKSArK287CiAgICAgICAgICAgICAgICAgIGlmICgxNiA8IG8gLSBwICYmIGYuc3ViYXJyYXkgJiYgWG4pIHAgPSBYbi5kZWNvZGUoZi5zdWJhcnJheShwLCBvKSk7CiAgICAgICAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgICAgIGZvciAoZCA9ICIiOyBwIDwgbzsgKSB7CiAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IGZbcCsrXTsKICAgICAgICAgICAgICAgICAgICAgIGlmIChoICYgMTI4KSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ID0gZltwKytdICYgNjM7CiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoaCAmIDIyNCkgPT0gMTkyKSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGggJiAzMSkgPDwgNiB8IHcpOwogICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgVCA9IGZbcCsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICAgIGggPSAoaCAmIDI0MCkgPT0gMjI0ID8gKGggJiAxNSkgPDwgMTIgfCB3IDw8IDYgfCBUIDogKGggJiA3KSA8PCAxOCB8IHcgPDwgMTIgfCBUIDw8IDYgfCBmW3ArK10gJiA2MywgNjU1MzYgPiBoID8gZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGgpIDogKGggLT0gNjU1MzYsIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGggPj4gMTAsIDU2MzIwIHwgaCAmIDEwMjMpKTsKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgcCA9IGQ7CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0gZWxzZSBwID0gIiI7CiAgICAgICAgICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKSB2YXIgeSA9IHA7CiAgICAgICAgICAgICAgICBlbHNlIHkgKz0gIlwwIiwgeSArPSBwOwogICAgICAgICAgICAgICAgbyA9IGwgKyAxOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICBmb3IgKHkgPSBBcnJheShhKSwgYyA9IDA7IGMgPCBhOyArK2MpIHlbY10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHhbaSArIDQgKyBjXSk7CiAgICAgICAgICAgICAgeSA9IHkuam9pbigiIik7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIEIoaSksIHk7CiAgICAgICAgICB9LAogICAgICAgICAgdG9XaXJlVHlwZTogZnVuY3Rpb24oaSwgYSkgewogICAgICAgICAgICBhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgJiYgKGEgPSBuZXcgVWludDhBcnJheShhKSk7CiAgICAgICAgICAgIHZhciBvID0gdHlwZW9mIGEgPT0gInN0cmluZyI7CiAgICAgICAgICAgIG8gfHwgYSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgfHwgYSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5IHx8IGEgaW5zdGFuY2VvZiBJbnQ4QXJyYXkgfHwgdigiQ2Fubm90IHBhc3Mgbm9uLXN0cmluZyB0byBzdGQ6OnN0cmluZyIpOwogICAgICAgICAgICB2YXIgYyA9IChyICYmIG8gPyBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICBmb3IgKHZhciBmID0gMCwgZCA9IDA7IGQgPCBhLmxlbmd0aDsgKytkKSB7CiAgICAgICAgICAgICAgICB2YXIgaCA9IGEuY2hhckNvZGVBdChkKTsKICAgICAgICAgICAgICAgIDU1Mjk2IDw9IGggJiYgNTczNDMgPj0gaCAmJiAoaCA9IDY1NTM2ICsgKChoICYgMTAyMykgPDwgMTApIHwgYS5jaGFyQ29kZUF0KCsrZCkgJiAxMDIzKSwgMTI3ID49IGggPyArK2YgOiBmID0gMjA0NyA+PSBoID8gZiArIDIgOiA2NTUzNSA+PSBoID8gZiArIDMgOiBmICsgNDsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgcmV0dXJuIGY7CiAgICAgICAgICAgIH0gOiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICByZXR1cm4gYS5sZW5ndGg7CiAgICAgICAgICAgIH0pKCksIGwgPSBUbig0ICsgYyArIDEpOwogICAgICAgICAgICBpZiAoSFtsID4+IDJdID0gYywgciAmJiBvKSBIdChhLCBsICsgNCwgYyArIDEpOwogICAgICAgICAgICBlbHNlIGlmIChvKSBmb3IgKG8gPSAwOyBvIDwgYzsgKytvKSB7CiAgICAgICAgICAgICAgdmFyIHAgPSBhLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICAgICAgMjU1IDwgcCAmJiAoQihsKSwgdigiU3RyaW5nIGhhcyBVVEYtMTYgY29kZSB1bml0cyB0aGF0IGRvIG5vdCBmaXQgaW4gOCBiaXRzIikpLCB4W2wgKyA0ICsgb10gPSBwOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgZm9yIChvID0gMDsgbyA8IGM7ICsrbykgeFtsICsgNCArIG9dID0gYVtvXTsKICAgICAgICAgICAgcmV0dXJuIGkgIT09IG51bGwgJiYgaS5wdXNoKEIsIGwpLCBsOwogICAgICAgICAgfSwKICAgICAgICAgIGFyZ1BhY2tBZHZhbmNlOiA4LAogICAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IEFuLAogICAgICAgICAga2E6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgQihpKTsKICAgICAgICAgIH0KICAgICAgICB9KTsKICAgICAgfSwKICAgICAgajogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIGlmIChyID0gUyhyKSwgdCA9PT0gMikKICAgICAgICAgIHZhciBpID0gVXQsIGEgPSB6dCwgbyA9IEJ0LCBjID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHJldHVybiBwbjsKICAgICAgICAgIH0sIGwgPSAxOwogICAgICAgIGVsc2UgdCA9PT0gNCAmJiAoaSA9IER0LCBhID0gVnQsIG8gPSBHdCwgYyA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgcmV0dXJuIEg7CiAgICAgICAgfSwgbCA9IDIpOwogICAgICAgIFUobiwgeyBuYW1lOiByLCBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uKHApIHsKICAgICAgICAgIGZvciAodmFyIGYgPSBIW3AgPj4gMl0sIGQgPSBjKCksIGgsIHcgPSBwICsgNCwgVCA9IDA7IFQgPD0gZjsgKytUKSB7CiAgICAgICAgICAgIHZhciB5ID0gcCArIDQgKyBUICogdDsKICAgICAgICAgICAgKFQgPT0gZiB8fCBkW3kgPj4gbF0gPT0gMCkgJiYgKHcgPSBpKHcsIHkgLSB3KSwgaCA9PT0gdm9pZCAwID8gaCA9IHcgOiAoaCArPSAiXDAiLCBoICs9IHcpLCB3ID0geSArIHQpOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuIEIocCksIGg7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ocCwgZikgewogICAgICAgICAgdHlwZW9mIGYgIT0gInN0cmluZyIgJiYgdigiQ2Fubm90IHBhc3Mgbm9uLXN0cmluZyB0byBDKysgc3RyaW5nIHR5cGUgIiArIHIpOwogICAgICAgICAgdmFyIGQgPSBvKGYpLCBoID0gVG4oNCArIGQgKyB0KTsKICAgICAgICAgIHJldHVybiBIW2ggPj4gMl0gPSBkID4+IGwsIGEoZiwgaCArIDQsIGQgKyB0KSwgcCAhPT0gbnVsbCAmJiBwLnB1c2goQiwgaCksIGg7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwga2E6IGZ1bmN0aW9uKHApIHsKICAgICAgICAgIEIocCk7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgeDogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBTKHQpLCBVKG4sIHsgUWE6ICEwLCBuYW1lOiB0LCBhcmdQYWNrQWR2YW5jZTogMCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbigpIHsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbigpIHsKICAgICAgICB9IH0pOwogICAgICB9LAogICAgICBrOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgbiA9IFZuKG4pLCB0ID0gQ3QodCwgImVtdmFsOjphcyIpOwogICAgICAgIHZhciBpID0gW10sIGEgPSBlbihpKTsKICAgICAgICByZXR1cm4gYltyID4+IDJdID0gYSwgdC50b1dpcmVUeXBlKGksIG4pOwogICAgICB9LAogICAgICBpOiBEbiwKICAgICAgbDogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHJldHVybiBuID0gVm4obiksIHQgPSBWbih0KSwgZW4oblt0XSk7CiAgICAgIH0sCiAgICAgIHA6IGZ1bmN0aW9uKG4pIHsKICAgICAgICB2YXIgdCA9IG9lW25dOwogICAgICAgIHJldHVybiBlbih0ID09PSB2b2lkIDAgPyBTKG4pIDogdCk7CiAgICAgIH0sCiAgICAgIG86IGZ1bmN0aW9uKG4pIHsKICAgICAgICBDbihJW25dLnZhbHVlKSwgRG4obik7CiAgICAgIH0sCiAgICAgIHk6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IEN0KG4sICJfZW12YWxfdGFrZV92YWx1ZSIpLCBuID0gbi5yZWFkVmFsdWVGcm9tUG9pbnRlcih0KSwgZW4obik7CiAgICAgIH0sCiAgICAgIGY6IGZ1bmN0aW9uKCkgewogICAgICAgIHNuKCk7CiAgICAgIH0sCiAgICAgIHE6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICB4LmNvcHlXaXRoaW4obiwgdCwgdCArIHIpOwogICAgICB9LAogICAgICByOiBmdW5jdGlvbihuKSB7CiAgICAgICAgbiA+Pj49IDA7CiAgICAgICAgdmFyIHQgPSB4Lmxlbmd0aDsKICAgICAgICBpZiAoMjE0NzQ4MzY0OCA8IG4pIHJldHVybiAhMTsKICAgICAgICBmb3IgKHZhciByID0gMTsgNCA+PSByOyByICo9IDIpIHsKICAgICAgICAgIHZhciBpID0gdCAqICgxICsgMC4yIC8gcik7CiAgICAgICAgICBpID0gTWF0aC5taW4oaSwgbiArIDEwMDY2MzI5NiksIGkgPSBNYXRoLm1heCgxNjc3NzIxNiwgbiwgaSksIDAgPCBpICUgNjU1MzYgJiYgKGkgKz0gNjU1MzYgLSBpICUgNjU1MzYpOwogICAgICAgICAgbjogewogICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgIEcuZ3JvdyhNYXRoLm1pbigyMTQ3NDgzNjQ4LCBpKSAtIFEuYnl0ZUxlbmd0aCArIDY1NTM1ID4+PiAxNiksIGV0KEcuYnVmZmVyKTsKICAgICAgICAgICAgICB2YXIgYSA9IDE7CiAgICAgICAgICAgICAgYnJlYWsgbjsKICAgICAgICAgICAgfSBjYXRjaCB7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgYSA9IHZvaWQgMDsKICAgICAgICAgIH0KICAgICAgICAgIGlmIChhKSByZXR1cm4gITA7CiAgICAgICAgfQogICAgICAgIHJldHVybiAhMTsKICAgICAgfSwKICAgICAgczogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHZhciByID0gMDsKICAgICAgICByZXR1cm4gVHQoKS5mb3JFYWNoKGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgIHZhciBvID0gdCArIHI7CiAgICAgICAgICBmb3IgKGEgPSBiW24gKyA0ICogYSA+PiAyXSA9IG8sIG8gPSAwOyBvIDwgaS5sZW5ndGg7ICsrbykgJFthKysgPj4gMF0gPSBpLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICAkW2EgPj4gMF0gPSAwLCByICs9IGkubGVuZ3RoICsgMTsKICAgICAgICB9KSwgMDsKICAgICAgfSwKICAgICAgdDogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHZhciByID0gVHQoKTsKICAgICAgICBiW24gPj4gMl0gPSByLmxlbmd0aDsKICAgICAgICB2YXIgaSA9IDA7CiAgICAgICAgcmV0dXJuIHIuZm9yRWFjaChmdW5jdGlvbihhKSB7CiAgICAgICAgICBpICs9IGEubGVuZ3RoICsgMTsKICAgICAgICB9KSwgYlt0ID4+IDJdID0gaSwgMDsKICAgICAgfSwKICAgICAgYTogRwogICAgfTsKICAgIChmdW5jdGlvbigpIHsKICAgICAgZnVuY3Rpb24gbihvKSB7CiAgICAgICAgbyA9IG8uZXhwb3J0cywgbyA9IE10KG8pLCBlLmFzbSA9IG8sIFktLSwgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzICYmIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyhZKSwgWSA9PSAwICYmIG9uICYmIChvID0gb24sIG9uID0gbnVsbCwgbygpKTsKICAgICAgfQogICAgICBmdW5jdGlvbiB0KG8pIHsKICAgICAgICBuKG8uaW5zdGFuY2UpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHIobykgewogICAgICAgIHJldHVybiBadCgpLnRoZW4oZnVuY3Rpb24oYykgewogICAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGMsIGkpOwogICAgICAgIH0pLnRoZW4obywgZnVuY3Rpb24oYykgewogICAgICAgICAgUCgiZmFpbGVkIHRvIGFzeW5jaHJvbm91c2x5IHByZXBhcmUgd2FzbTogIiArIGMpLCBzbihjKTsKICAgICAgICB9KTsKICAgICAgfQogICAgICB2YXIgaSA9IHsgYTogc2UgfTsKICAgICAgaWYgKFkrKywgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzICYmIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyhZKSwgZS5pbnN0YW50aWF0ZVdhc20pIHRyeSB7CiAgICAgICAgdmFyIGEgPSBlLmluc3RhbnRpYXRlV2FzbShpLCBuKTsKICAgICAgICByZXR1cm4gYSA9IE10KGEpOwogICAgICB9IGNhdGNoIChvKSB7CiAgICAgICAgcmV0dXJuIFAoIk1vZHVsZS5pbnN0YW50aWF0ZVdhc20gY2FsbGJhY2sgZmFpbGVkIHdpdGggZXJyb3I6ICIgKyBvKSwgITE7CiAgICAgIH0KICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgewogICAgICAgIGlmIChMIHx8IHR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyAhPSAiZnVuY3Rpb24iIHx8IHN0KCkgfHwgeG4oImZpbGU6Ly8iKSB8fCB0eXBlb2YgZmV0Y2ggIT0gImZ1bmN0aW9uIikgcmV0dXJuIHIodCk7CiAgICAgICAgZmV0Y2goWiwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG8pIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhvLCBpKS50aGVuKHQsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgICAgcmV0dXJuIFAoIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAiICsgYyksIFAoImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uIiksIHIodCk7CiAgICAgICAgICB9KTsKICAgICAgICB9KTsKICAgICAgfSgpLCB7fTsKICAgIH0pKCk7CiAgICB2YXIgT3QgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKE90ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBlLmFzbS5CKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgVG4gPSBlLl9tYWxsb2MgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChUbiA9IGUuX21hbGxvYyA9IGUuYXNtLkMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBCID0gZS5fZnJlZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKEIgPSBlLl9mcmVlID0gZS5hc20uRCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGUuYXNtLkUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZS5hc20uRikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paSA9IGUuYXNtLkcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmkgPSBlLmFzbS5IKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2kgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaSA9IGUuYXNtLkkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaSA9IGUuYXNtLkopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpID0gZS5hc20uSykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9maWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfZmlpID0gZS5hc20uTCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlmID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWYgPSBlLmFzbS5NKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpID0gZS5hc20uTikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWkgPSBlLmFzbS5PKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWkgPSBlLmFzbS5QKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWkgPSBlLmFzbS5RKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaWlpID0gZS5hc20uUikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaSA9IGUuYXNtLlMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGUuYXNtLlQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBlLmFzbS5VKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZS5hc20uVikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBlLmFzbS5XKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWkgPSBlLmFzbS5YKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaSA9IGUuYXNtLlkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWkgPSBlLmFzbS5aKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaSA9IGUuYXNtLl8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBlLmFzbS4kKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGUuYXNtLmFhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZS5hc20uYmEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZS5hc20uY2EpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgdmFyIFBuOwogICAgb24gPSBmdW5jdGlvbiBuKCkgewogICAgICBQbiB8fCAkbigpLCBQbiB8fCAob24gPSBuKTsKICAgIH07CiAgICBmdW5jdGlvbiAkbigpIHsKICAgICAgZnVuY3Rpb24gbigpIHsKICAgICAgICBpZiAoIVBuICYmIChQbiA9ICEwLCBlLmNhbGxlZFJ1biA9ICEwLCAhUm4pKSB7CiAgICAgICAgICBpZiAoeW4oYXQpLCB5bigkdCksIG0oZSksIGUub25SdW50aW1lSW5pdGlhbGl6ZWQgJiYgZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpLCBlLnBvc3RSdW4pIGZvciAodHlwZW9mIGUucG9zdFJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnBvc3RSdW4gPSBbZS5wb3N0UnVuXSk7IGUucG9zdFJ1bi5sZW5ndGg7ICkgewogICAgICAgICAgICB2YXIgdCA9IGUucG9zdFJ1bi5zaGlmdCgpOwogICAgICAgICAgICBvdC51bnNoaWZ0KHQpOwogICAgICAgICAgfQogICAgICAgICAgeW4ob3QpOwogICAgICAgIH0KICAgICAgfQogICAgICBpZiAoISgwIDwgWSkpIHsKICAgICAgICBpZiAoZS5wcmVSdW4pIGZvciAodHlwZW9mIGUucHJlUnVuID09ICJmdW5jdGlvbiIgJiYgKGUucHJlUnVuID0gW2UucHJlUnVuXSk7IGUucHJlUnVuLmxlbmd0aDsgKSBZdCgpOwogICAgICAgIHluKGl0KSwgMCA8IFkgfHwgKGUuc2V0U3RhdHVzID8gKGUuc2V0U3RhdHVzKCJSdW5uaW5nLi4uIiksIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgICBlLnNldFN0YXR1cygiIik7CiAgICAgICAgICB9LCAxKSwgbigpOwogICAgICAgIH0sIDEpKSA6IG4oKSk7CiAgICAgIH0KICAgIH0KICAgIGlmIChlLnJ1biA9ICRuLCBlLnByZUluaXQpIGZvciAodHlwZW9mIGUucHJlSW5pdCA9PSAiZnVuY3Rpb24iICYmIChlLnByZUluaXQgPSBbZS5wcmVJbml0XSk7IDAgPCBlLnByZUluaXQubGVuZ3RoOyApIGUucHJlSW5pdC5wb3AoKSgpOwogICAgcmV0dXJuICRuKCksIHUucmVhZHk7CiAgfTsKfSgpOwpjbGFzcyBwZSB7CiAgY29uc3RydWN0b3IoKSB7CiAgICBZbih0aGlzLCAic2FtV2FzbU1vZHVsZSIpOwogIH0KICBnZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBlKSB7CiAgICByZXR1cm4gewogICAgICBsb2NhdGVGaWxlOiAobSkgPT4gbmV3IFVSTChlIHx8IG0sIHUpLmhyZWYKICAgIH07CiAgfQogIGFzeW5jIGhhbmRsZU1pc3NpbmdPckludmFsaWRTYW1Nb2R1bGUodSwgZSkgewogICAgdHJ5IHsKICAgICAgY29uc3QgbSA9IGF3YWl0IGZldGNoKHUpOwogICAgICBpZiAoIW0ub2spCiAgICAgICAgdGhyb3cgbmV3IEYoCiAgICAgICAgICBgVGhlIHBhdGggdG8gJHtlfSBpcyBpbmNvcnJlY3Qgb3IgdGhlIG1vZHVsZSBpcyBtaXNzaW5nLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgICBjb25zdCBnID0gYXdhaXQgbS5hcnJheUJ1ZmZlcigpOwogICAgICBpZiAoIVdlYkFzc2VtYmx5LnZhbGlkYXRlKGcpKQogICAgICAgIHRocm93IG5ldyBGKAogICAgICAgICAgYFRoZSBwcm92aWRlZCAke2V9IGlzIG5vdCBhIHZhbGlkIFdBU00gbW9kdWxlLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgfSBjYXRjaCAobSkgewogICAgICBpZiAobSBpbnN0YW5jZW9mIEYpCiAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcigKICAgICAgICAgICJZb3UgY2FuIGZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG8gaG9zdCB3YXNtIGZpbGVzIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVycy5pbm5vdmF0cmljcy5jb20vZGlnaXRhbC1vbmJvYXJkaW5nL3RlY2huaWNhbC9yZW1vdGUvZG90LXdlYi1kb2N1bWVudC9sYXRlc3QvZG9jdW1lbnRhdGlvbi8jX2hvc3Rpbmdfc2FtX3dhc20iCiAgICAgICAgKSwgbTsKICAgIH0KICB9CiAgYXN5bmMgZ2V0V2FzbUZpbGVOYW1lKCkgewogICAgcmV0dXJuIGF3YWl0IGNlKCkgPyBrdC5zaW1kIDoga3Quc2FtOwogIH0KICBhc3luYyBpbml0U2FtTW9kdWxlKHUsIGUgPSAiL3dhc20iKSB7CiAgICBpZiAodGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICByZXR1cm47CiAgICBjb25zdCBtID0gYXdhaXQgdGhpcy5nZXRXYXNtRmlsZU5hbWUoKSwgZyA9IGAke2V9LyR7bX1gOwogICAgdHJ5IHsKICAgICAgdGhpcy5zYW1XYXNtTW9kdWxlID0gYXdhaXQgaGUodGhpcy5nZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBnKSk7CiAgICB9IGNhdGNoIHsKICAgICAgdGhyb3cgYXdhaXQgdGhpcy5oYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKGcsIG0pLCBuZXcgRigiQ291bGQgbm90IGluaXQgZGV0ZWN0b3IuIik7CiAgICB9CiAgfQogIGFzeW5jIGdldFNhbVZlcnNpb24oKSB7CiAgICB2YXIgZTsKICAgIGNvbnN0IHUgPSBhd2FpdCAoKGUgPSB0aGlzLnNhbVdhc21Nb2R1bGUpID09IG51bGwgPyB2b2lkIDAgOiBlLmdldEluZm9TdHJpbmcoKSk7CiAgICByZXR1cm4gdSA9PSBudWxsID8gdm9pZCAwIDogdS50cmltKCk7CiAgfQogIC8qCiAgICogSW4gVFMgNS4yLjAgd2FzIGFkZGVkIHNwZWNpYWwga2V5d29yZCAidXNpbmciIHdoaWNoIGNvdWxkIGJlIHBlcmZlY3QgZm9yIHRoaXMgY2FzZS4KICAgKiBVbmZvcnR1bmF0ZWx5LCB2aXRlIHByZWFjdCBwbHVnaW4gZG9lcyBub3Qgc3VwcG9ydCB0aGlzIHZlcnNpb24gb2YgVFMgeWV0LgogICAqIENoZWNrIHBvc3NpYmlsaXR5IG9mIHVzaW5nICJ1c2luZyIga2V5d29yZCB3aGVuIHZpdGUgcHJlYWN0IHBsdWdpbiB1cGRhdGVzCiAgICovCiAgYWxsb2NhdGVNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBGKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICByZXR1cm4gdGhpcy5zYW1XYXNtTW9kdWxlLl9tYWxsb2ModSk7CiAgfQogIHJlbGVhc2VNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBGKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICB0aGlzLnNhbVdhc21Nb2R1bGUuX2ZyZWUodSk7CiAgfQogIHdyaXRlRGF0YVRvTWVtb3J5KHUsIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgRigiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLkhFQVBVOC5zZXQodSwgZSk7CiAgfQp9Ci8qKgogKiBAbGljZW5zZQogKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDCiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wCiAqLwpjb25zdCB4dCA9IFN5bWJvbCgiQ29tbGluay5wcm94eSIpLCB5ZSA9IFN5bWJvbCgiQ29tbGluay5lbmRwb2ludCIpLCBtZSA9IFN5bWJvbCgiQ29tbGluay5yZWxlYXNlUHJveHkiKSwgWm4gPSBTeW1ib2woIkNvbWxpbmsuZmluYWxpemVyIiksIE9uID0gU3ltYm9sKCJDb21saW5rLnRocm93biIpLCBGdCA9IChzKSA9PiB0eXBlb2YgcyA9PSAib2JqZWN0IiAmJiBzICE9PSBudWxsIHx8IHR5cGVvZiBzID09ICJmdW5jdGlvbiIsIHZlID0gewogIGNhbkhhbmRsZTogKHMpID0+IEZ0KHMpICYmIHNbeHRdLAogIHNlcmlhbGl6ZShzKSB7CiAgICBjb25zdCB7IHBvcnQxOiB1LCBwb3J0MjogZSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICByZXR1cm4gS24ocywgdSksIFtlLCBbZV1dOwogIH0sCiAgZGVzZXJpYWxpemUocykgewogICAgcmV0dXJuIHMuc3RhcnQoKSwgX2Uocyk7CiAgfQp9LCBnZSA9IHsKICBjYW5IYW5kbGU6IChzKSA9PiBGdChzKSAmJiBPbiBpbiBzLAogIHNlcmlhbGl6ZSh7IHZhbHVlOiBzIH0pIHsKICAgIGxldCB1OwogICAgcmV0dXJuIHMgaW5zdGFuY2VvZiBFcnJvciA/IHUgPSB7CiAgICAgIGlzRXJyb3I6ICEwLAogICAgICB2YWx1ZTogewogICAgICAgIG1lc3NhZ2U6IHMubWVzc2FnZSwKICAgICAgICBuYW1lOiBzLm5hbWUsCiAgICAgICAgc3RhY2s6IHMuc3RhY2sKICAgICAgfQogICAgfSA6IHUgPSB7IGlzRXJyb3I6ICExLCB2YWx1ZTogcyB9LCBbdSwgW11dOwogIH0sCiAgZGVzZXJpYWxpemUocykgewogICAgdGhyb3cgcy5pc0Vycm9yID8gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3Iocy52YWx1ZS5tZXNzYWdlKSwgcy52YWx1ZSkgOiBzLnZhbHVlOwogIH0KfSwgSXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbCiAgWyJwcm94eSIsIHZlXSwKICBbInRocm93IiwgZ2VdCl0pOwpmdW5jdGlvbiB3ZShzLCB1KSB7CiAgZm9yIChjb25zdCBlIG9mIHMpCiAgICBpZiAodSA9PT0gZSB8fCBlID09PSAiKiIgfHwgZSBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBlLnRlc3QodSkpCiAgICAgIHJldHVybiAhMDsKICByZXR1cm4gITE7Cn0KZnVuY3Rpb24gS24ocywgdSA9IGdsb2JhbFRoaXMsIGUgPSBbIioiXSkgewogIHUuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIG0oZykgewogICAgaWYgKCFnIHx8ICFnLmRhdGEpCiAgICAgIHJldHVybjsKICAgIGlmICghd2UoZSwgZy5vcmlnaW4pKSB7CiAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBvcmlnaW4gJyR7Zy5vcmlnaW59JyBmb3IgY29tbGluayBwcm94eWApOwogICAgICByZXR1cm47CiAgICB9CiAgICBjb25zdCB7IGlkOiBDLCB0eXBlOiBBLCBwYXRoOiBNIH0gPSBPYmplY3QuYXNzaWduKHsgcGF0aDogW10gfSwgZy5kYXRhKSwgVyA9IChnLmRhdGEuYXJndW1lbnRMaXN0IHx8IFtdKS5tYXAoSyk7CiAgICBsZXQgRTsKICAgIHRyeSB7CiAgICAgIGNvbnN0IF8gPSBNLnNsaWNlKDAsIC0xKS5yZWR1Y2UoKFAsIEwpID0+IFBbTF0sIHMpLCBSID0gTS5yZWR1Y2UoKFAsIEwpID0+IFBbTF0sIHMpOwogICAgICBzd2l0Y2ggKEEpIHsKICAgICAgICBjYXNlICJHRVQiOgogICAgICAgICAgRSA9IFI7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJTRVQiOgogICAgICAgICAgX1tNLnNsaWNlKC0xKVswXV0gPSBLKGcuZGF0YS52YWx1ZSksIEUgPSAhMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkFQUExZIjoKICAgICAgICAgIEUgPSBSLmFwcGx5KF8sIFcpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiQ09OU1RSVUNUIjoKICAgICAgICAgIHsKICAgICAgICAgICAgY29uc3QgUCA9IG5ldyBSKC4uLlcpOwogICAgICAgICAgICBFID0gTWUoUCk7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJFTkRQT0lOVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IHsgcG9ydDE6IFAsIHBvcnQyOiBMIH0gPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTsKICAgICAgICAgICAgS24ocywgTCksIEUgPSBQZShQLCBbUF0pOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiUkVMRUFTRSI6CiAgICAgICAgICBFID0gdm9pZCAwOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHJldHVybjsKICAgICAgfQogICAgfSBjYXRjaCAoXykgewogICAgICBFID0geyB2YWx1ZTogXywgW09uXTogMCB9OwogICAgfQogICAgUHJvbWlzZS5yZXNvbHZlKEUpLmNhdGNoKChfKSA9PiAoeyB2YWx1ZTogXywgW09uXTogMCB9KSkudGhlbigoXykgPT4gewogICAgICBjb25zdCBbUiwgUF0gPSBrbihfKTsKICAgICAgdS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFIpLCB7IGlkOiBDIH0pLCBQKSwgQSA9PT0gIlJFTEVBU0UiICYmICh1LnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBtKSwgTHQodSksIFpuIGluIHMgJiYgdHlwZW9mIHNbWm5dID09ICJmdW5jdGlvbiIgJiYgc1tabl0oKSk7CiAgICB9KS5jYXRjaCgoXykgPT4gewogICAgICBjb25zdCBbUiwgUF0gPSBrbih7CiAgICAgICAgdmFsdWU6IG5ldyBUeXBlRXJyb3IoIlVuc2VyaWFsaXphYmxlIHJldHVybiB2YWx1ZSIpLAogICAgICAgIFtPbl06IDAKICAgICAgfSk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBSKSwgeyBpZDogQyB9KSwgUCk7CiAgICB9KTsKICB9KSwgdS5zdGFydCAmJiB1LnN0YXJ0KCk7Cn0KZnVuY3Rpb24gQWUocykgewogIHJldHVybiBzLmNvbnN0cnVjdG9yLm5hbWUgPT09ICJNZXNzYWdlUG9ydCI7Cn0KZnVuY3Rpb24gTHQocykgewogIEFlKHMpICYmIHMuY2xvc2UoKTsKfQpmdW5jdGlvbiBfZShzLCB1KSB7CiAgcmV0dXJuIEpuKHMsIFtdLCB1KTsKfQpmdW5jdGlvbiBXbihzKSB7CiAgaWYgKHMpCiAgICB0aHJvdyBuZXcgRXJyb3IoIlByb3h5IGhhcyBiZWVuIHJlbGVhc2VkIGFuZCBpcyBub3QgdXNlYWJsZSIpOwp9CmZ1bmN0aW9uIGp0KHMpIHsKICByZXR1cm4gYW4ocywgewogICAgdHlwZTogIlJFTEVBU0UiCiAgfSkudGhlbigoKSA9PiB7CiAgICBMdChzKTsKICB9KTsKfQpjb25zdCBibiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLCBTbiA9ICJGaW5hbGl6YXRpb25SZWdpc3RyeSIgaW4gZ2xvYmFsVGhpcyAmJiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKHMpID0+IHsKICBjb25zdCB1ID0gKGJuLmdldChzKSB8fCAwKSAtIDE7CiAgYm4uc2V0KHMsIHUpLCB1ID09PSAwICYmIGp0KHMpOwp9KTsKZnVuY3Rpb24gQ2UocywgdSkgewogIGNvbnN0IGUgPSAoYm4uZ2V0KHUpIHx8IDApICsgMTsKICBibi5zZXQodSwgZSksIFNuICYmIFNuLnJlZ2lzdGVyKHMsIHUsIHMpOwp9CmZ1bmN0aW9uIEVlKHMpIHsKICBTbiAmJiBTbi51bnJlZ2lzdGVyKHMpOwp9CmZ1bmN0aW9uIEpuKHMsIHUgPSBbXSwgZSA9IGZ1bmN0aW9uKCkgewp9KSB7CiAgbGV0IG0gPSAhMTsKICBjb25zdCBnID0gbmV3IFByb3h5KGUsIHsKICAgIGdldChDLCBBKSB7CiAgICAgIGlmIChXbihtKSwgQSA9PT0gbWUpCiAgICAgICAgcmV0dXJuICgpID0+IHsKICAgICAgICAgIEVlKGcpLCBqdChzKSwgbSA9ICEwOwogICAgICAgIH07CiAgICAgIGlmIChBID09PSAidGhlbiIpIHsKICAgICAgICBpZiAodS5sZW5ndGggPT09IDApCiAgICAgICAgICByZXR1cm4geyB0aGVuOiAoKSA9PiBnIH07CiAgICAgICAgY29uc3QgTSA9IGFuKHMsIHsKICAgICAgICAgIHR5cGU6ICJHRVQiLAogICAgICAgICAgcGF0aDogdS5tYXAoKFcpID0+IFcudG9TdHJpbmcoKSkKICAgICAgICB9KS50aGVuKEspOwogICAgICAgIHJldHVybiBNLnRoZW4uYmluZChNKTsKICAgICAgfQogICAgICByZXR1cm4gSm4ocywgWy4uLnUsIEFdKTsKICAgIH0sCiAgICBzZXQoQywgQSwgTSkgewogICAgICBXbihtKTsKICAgICAgY29uc3QgW1csIEVdID0ga24oTSk7CiAgICAgIHJldHVybiBhbihzLCB7CiAgICAgICAgdHlwZTogIlNFVCIsCiAgICAgICAgcGF0aDogWy4uLnUsIEFdLm1hcCgoXykgPT4gXy50b1N0cmluZygpKSwKICAgICAgICB2YWx1ZTogVwogICAgICB9LCBFKS50aGVuKEspOwogICAgfSwKICAgIGFwcGx5KEMsIEEsIE0pIHsKICAgICAgV24obSk7CiAgICAgIGNvbnN0IFcgPSB1W3UubGVuZ3RoIC0gMV07CiAgICAgIGlmIChXID09PSB5ZSkKICAgICAgICByZXR1cm4gYW4ocywgewogICAgICAgICAgdHlwZTogIkVORFBPSU5UIgogICAgICAgIH0pLnRoZW4oSyk7CiAgICAgIGlmIChXID09PSAiYmluZCIpCiAgICAgICAgcmV0dXJuIEpuKHMsIHUuc2xpY2UoMCwgLTEpKTsKICAgICAgY29uc3QgW0UsIF9dID0gUnQoTSk7CiAgICAgIHJldHVybiBhbihzLCB7CiAgICAgICAgdHlwZTogIkFQUExZIiwKICAgICAgICBwYXRoOiB1Lm1hcCgoUikgPT4gUi50b1N0cmluZygpKSwKICAgICAgICBhcmd1bWVudExpc3Q6IEUKICAgICAgfSwgXykudGhlbihLKTsKICAgIH0sCiAgICBjb25zdHJ1Y3QoQywgQSkgewogICAgICBXbihtKTsKICAgICAgY29uc3QgW00sIFddID0gUnQoQSk7CiAgICAgIHJldHVybiBhbihzLCB7CiAgICAgICAgdHlwZTogIkNPTlNUUlVDVCIsCiAgICAgICAgcGF0aDogdS5tYXAoKEUpID0+IEUudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBNCiAgICAgIH0sIFcpLnRoZW4oSyk7CiAgICB9CiAgfSk7CiAgcmV0dXJuIENlKGcsIHMpLCBnOwp9CmZ1bmN0aW9uIFRlKHMpIHsKICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgcyk7Cn0KZnVuY3Rpb24gUnQocykgewogIGNvbnN0IHUgPSBzLm1hcChrbik7CiAgcmV0dXJuIFt1Lm1hcCgoZSkgPT4gZVswXSksIFRlKHUubWFwKChlKSA9PiBlWzFdKSldOwp9CmNvbnN0IE50ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7CmZ1bmN0aW9uIFBlKHMsIHUpIHsKICByZXR1cm4gTnQuc2V0KHMsIHUpLCBzOwp9CmZ1bmN0aW9uIE1lKHMpIHsKICByZXR1cm4gT2JqZWN0LmFzc2lnbihzLCB7IFt4dF06ICEwIH0pOwp9CmZ1bmN0aW9uIGtuKHMpIHsKICBmb3IgKGNvbnN0IFt1LCBlXSBvZiBJdCkKICAgIGlmIChlLmNhbkhhbmRsZShzKSkgewogICAgICBjb25zdCBbbSwgZ10gPSBlLnNlcmlhbGl6ZShzKTsKICAgICAgcmV0dXJuIFsKICAgICAgICB7CiAgICAgICAgICB0eXBlOiAiSEFORExFUiIsCiAgICAgICAgICBuYW1lOiB1LAogICAgICAgICAgdmFsdWU6IG0KICAgICAgICB9LAogICAgICAgIGcKICAgICAgXTsKICAgIH0KICByZXR1cm4gWwogICAgewogICAgICB0eXBlOiAiUkFXIiwKICAgICAgdmFsdWU6IHMKICAgIH0sCiAgICBOdC5nZXQocykgfHwgW10KICBdOwp9CmZ1bmN0aW9uIEsocykgewogIHN3aXRjaCAocy50eXBlKSB7CiAgICBjYXNlICJIQU5ETEVSIjoKICAgICAgcmV0dXJuIEl0LmdldChzLm5hbWUpLmRlc2VyaWFsaXplKHMudmFsdWUpOwogICAgY2FzZSAiUkFXIjoKICAgICAgcmV0dXJuIHMudmFsdWU7CiAgfQp9CmZ1bmN0aW9uIGFuKHMsIHUsIGUpIHsKICByZXR1cm4gbmV3IFByb21pc2UoKG0pID0+IHsKICAgIGNvbnN0IGcgPSBXZSgpOwogICAgcy5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgZnVuY3Rpb24gQyhBKSB7CiAgICAgICFBLmRhdGEgfHwgIUEuZGF0YS5pZCB8fCBBLmRhdGEuaWQgIT09IGcgfHwgKHMucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIEMpLCBtKEEuZGF0YSkpOwogICAgfSksIHMuc3RhcnQgJiYgcy5zdGFydCgpLCBzLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oeyBpZDogZyB9LCB1KSwgZSk7CiAgfSk7Cn0KZnVuY3Rpb24gV2UoKSB7CiAgcmV0dXJuIG5ldyBBcnJheSg0KS5maWxsKDApLm1hcCgoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikudG9TdHJpbmcoMTYpKS5qb2luKCItIik7Cn0KY2xhc3MgT2UgZXh0ZW5kcyBwZSB7CiAgcGFyc2VSYXdEYXRhKHUpIHsKICAgIGNvbnN0IHsgYnJpZ2h0bmVzczogZSwgaG90c3BvdHM6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIEMgPSB7CiAgICAgIGNvbmZpZGVuY2U6IHUuY29uZmlkZW5jZSAvIDFlMywKICAgICAgdG9wTGVmdDogewogICAgICAgIHg6IHUueDAsCiAgICAgICAgeTogdS55MAogICAgICB9LAogICAgICB0b3BSaWdodDogewogICAgICAgIHg6IHUueDEsCiAgICAgICAgeTogdS55MQogICAgICB9LAogICAgICBib3R0b21SaWdodDogewogICAgICAgIHg6IHUueDIsCiAgICAgICAgeTogdS55MgogICAgICB9LAogICAgICBib3R0b21MZWZ0OiB7CiAgICAgICAgeDogdS54MywKICAgICAgICB5OiB1LnkzCiAgICAgIH0sCiAgICAgIGJyaWdodG5lc3M6IGUgLyAxZTMsCiAgICAgIGhvdHNwb3RzOiBtIC8gMWUzLAogICAgICBzaGFycG5lc3M6IGcgLyAxZTMKICAgIH07CiAgICByZXR1cm4gewogICAgICAuLi5DLAogICAgICBzbWFsbGVzdEVkZ2U6IGRlKEMpCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QodSwgZSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBGKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBtID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpLCBnID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpOwogICAgdGhpcy53cml0ZURhdGFUb01lbW9yeSh1LCBtKSwgdGhpcy5zYW1XYXNtTW9kdWxlLmNvbnZlcnRUb1NhbUNvbG9ySW1hZ2UoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBtLAogICAgICBmZS5SR0JBLAogICAgICBnCiAgICApOwogICAgY29uc3QgQyA9IHRoaXMuc2FtV2FzbU1vZHVsZS5kZXRlY3REb2N1bWVudFdpdGhJbWFnZVBhcmFtZXRlcnMoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLAogICAgICAwLAogICAgICAvLyBwYXJhbVdpZHRoIHNob3VsZCBiZSAwIChkZWZhdWx0IHZhbHVlKQogICAgICAwLAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBkb2N1bWVudERldGVjdGlvbk9wdGlvbnMgLSBzcGVlZCBvcHRpb24gLSBzZXQgYXMgInN0YW5kYXJkIGZ1bGwgbWV0aG9kIgogICAgKTsKICAgIHJldHVybiB0aGlzLnJlbGVhc2VNZW1vcnkobSksIHRoaXMucmVsZWFzZU1lbW9yeShnKSwgdGhpcy5wYXJzZVJhd0RhdGEoQyk7CiAgfQp9CktuKE9lKTsK", II = (i) => Uint8Array.from(atob(i), (o) => o.charCodeAt(0)), Gs = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", II(Ag)], { type: "text/javascript;charset=utf-8" });
function dI(i) {
  let o;
  try {
    if (o = Gs && (window.URL || window.webkitURL).createObjectURL(Gs), !o) throw "";
    const t = new Worker(o, {
      type: "module",
      name: i == null ? void 0 : i.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(o);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Ag,
      {
        type: "module",
        name: i == null ? void 0 : i.name
      }
    );
  }
}
var un, Lt;
class CI {
  constructor(o) {
    Se(this, un);
    Se(this, Lt);
    me(this, un, o), me(this, Lt, /* @__PURE__ */ new Map());
  }
  validate() {
    $(this, un).forEach((o) => {
      $(this, Lt).set(o.name, o.evaluate());
    });
  }
  isValid() {
    return Array.from($(this, Lt).values()).every((o) => o);
  }
  get result() {
    return $(this, Lt);
  }
  get validators() {
    return $(this, un);
  }
}
un = new WeakMap(), Lt = new WeakMap();
var zn, Dt;
class zt {
  constructor(o, t) {
    Se(this, zn);
    Se(this, Dt);
    me(this, zn, o), me(this, Dt, t);
  }
  get threshold() {
    return $(this, Dt);
  }
  get name() {
    return $(this, zn);
  }
  isValueBelowThreshold(o) {
    return o < $(this, Dt);
  }
  isValueAboveThreshold(o) {
    return o > $(this, Dt);
  }
}
zn = new WeakMap(), Dt = new WeakMap();
var Qn;
class pI extends zt {
  constructor(t, e) {
    super("isNotDim", t);
    Se(this, Qn);
    me(this, Qn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold($(this, Qn));
  }
}
Qn = new WeakMap();
var $n;
class hI extends zt {
  constructor(t, e) {
    super("isNotSmall", t);
    Se(this, $n);
    me(this, $n, e);
  }
  evaluate() {
    return this.isValueAboveThreshold($(this, $n));
  }
}
$n = new WeakMap();
var _n;
class fI extends zt {
  constructor(t, e) {
    super("isNotBright", t);
    Se(this, _n);
    me(this, _n, e);
  }
  evaluate() {
    return this.isValueBelowThreshold($(this, _n));
  }
}
_n = new WeakMap();
var qn;
class mI extends zt {
  constructor(t, e) {
    super("isPresent", t);
    Se(this, qn);
    me(this, qn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold($(this, qn));
  }
}
qn = new WeakMap();
var ei;
class AI extends zt {
  constructor(t, e) {
    super("isSharp", t);
    Se(this, ei);
    me(this, ei, e);
  }
  evaluate() {
    return this.isValueAboveThreshold($(this, ei));
  }
}
ei = new WeakMap();
var ti;
class bI extends zt {
  constructor(t, e) {
    super("noHotspots", t);
    Se(this, ti);
    me(this, ti, e);
  }
  evaluate() {
    return this.isValueBelowThreshold($(this, ti));
  }
}
ti = new WeakMap();
var ni, ii;
class yI extends zt {
  constructor(t, e, n) {
    super("isNotOutOfBounds", t);
    Se(this, ni);
    Se(this, ii);
    me(this, ni, e), me(this, ii, n);
  }
  evaluate() {
    const t = xg($(this, ii), this.threshold), { bottomLeft: e, bottomRight: n, topLeft: r, topRight: a } = $(this, ni), s = {};
    return s.topLeft = r, s.topRight = a, s.bottomLeft = e, s.bottomRight = n, hu(s, t);
  }
}
ni = new WeakMap(), ii = new WeakMap();
class vI {
  static getDocumentValidationInstance(o, t, e) {
    return new CI([new mI(o.confidenceThreshold, t.confidence), new AI(o.sharpnessThreshold, t.sharpness), new pI(o.brightnessLowThreshold, t.brightness), new fI(o.brightnessHighThreshold, t.brightness), new bI(o.hotspotsScoreThreshold, t.hotspots), new yI(o.outOfBoundsThreshold, t, e), new hI(o.sizeSmallThreshold, t.smallestEdge)]);
  }
}
const so = class so extends eI {
  constructor() {
    super(...arguments);
    X(this, "detector");
    X(this, "className", "DocumentController");
    X(this, "fallbackInstruction", rt.DOCUMENT_NOT_PRESENT);
    X(this, "getInstructionCode", (t, e) => {
      var r;
      if (this.isInCandidateSelection) return rt.CANDIDATE_SELECTION;
      if ((r = this.lastImage) != null && r.isValid && e) return rt.CANDIDATE_SELECTION;
      if (this.lastImage && e) return this.lastImage.instructionCode;
      const [n] = this.getInstructionCodesForValidators(t);
      return n ?? this.fallbackInstruction;
    });
    X(this, "getInstructionCodesForValidators", (t) => {
      const e = [];
      return Array.from(t).forEach(([n, r]) => {
        !r && e.push(ux[n]);
      }), e;
    });
    X(this, "transformSmallestEdgeRelativeToDetectionFrameWidth", (t, e) => {
      const n = Qx(t), r = n / e.width, a = { ...t };
      return a.smallestEdge = r, a;
    });
  }
  static async init() {
    const t = new dI(), e = hg(t), n = new so(), r = await new e();
    this._instance = n, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  restart() {
    super.restart(), vs(st.INSTRUCTION_CHANGED, this.fallbackInstruction, jx);
  }
  validateDetectedObject(t, e) {
    const n = vI.getDocumentValidationInstance(this.getThresholds(), t, e);
    return n.validate(), n;
  }
  async processImage({ image: t, timestamp: e }) {
    var T;
    const n = {};
    n.width = t.width, n.height = t.height;
    const r = n, a = ia(r), s = xu(t, a), g = uu(s), x = {};
    x.width = s.width, x.height = s.height;
    const C = x;
    let d = await this.detector.detect(g, C);
    d = Yu(r, d), d = this.transformSmallestEdgeRelativeToDetectionFrameWidth(d, C);
    const m = this.validateDetectedObject(d, r), { result: f } = m, w = this.getInstructionCode(f, m.isValid());
    if (f.get("isPresent")) {
      const S = {};
      S.image = g, S.timestamp = e, this.collectImagesForDuplicateDetection(S);
    }
    if (this.isInCandidateSelection) {
      if (this.bestImage && m.isValid() && this.isNewImageBetter(this.bestImage.detection, d)) {
        const S = { image: t, detection: On(d) };
        this.bestImage = S, this.candidateSelectionImages.push(S);
      }
    } else if ((T = this.lastImage) != null && T.isValid && m.isValid()) {
      const S = { image: t, detection: On(d) }, H = {};
      H.image = this.lastImage.image, H.detection = this.lastImage.detection;
      const Y = H;
      this.isNewImageBetter(Y.detection, S.detection) ? this.bestImage = S : this.bestImage = Y, this.candidateSelectionImages.push(Y, S), this.isInCandidateSelection = !0;
    } else m.isValid() ? this.lastImage = { instructionCode: w, isValid: !0, image: t, detection: On(d) } : this.lastImage = { instructionCode: w, isValid: !1, image: t, detection: On(d) };
    const k = { detectedDocument: On(d), instructionCode: w, isInCandidateSelection: this.isInCandidateSelection, invalidValidators: this.getInstructionCodesForValidators(f) };
    return this.detectionRecord.push(k.detectedDocument), vs(st.INSTRUCTION_CHANGED, w), vu(st.DETECTED_DOCUMENT_CHANGED, k.detectedDocument, this.getThresholds().confidenceThreshold), k;
  }
};
X(so, "_instance");
let Br = so;
const wI = (i, o) => {
  const { handleError: t } = si(), [e, n] = je();
  ye(() => {
    (async () => {
      const s = await Br.getInstance();
      try {
        const g = {};
        g.wasmDirectoryPath = o, g.thresholds = i, await s.init(g);
      } catch (g) {
        if (g instanceof Error) {
          t(re.fromError(g));
          return;
        }
      }
      n(s);
    })();
  }, [t, i, o]);
  const r = {};
  return r.controller = e, r;
};
var Vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bg = {}, Zs = {}, SI = BI;
function BI(i, o) {
  for (var t = new Array(arguments.length - 1), e = 0, n = 2, r = !0; n < arguments.length; )
    t[e++] = arguments[n++];
  return new Promise(function(a, s) {
    t[e] = function(g) {
      if (r)
        if (r = !1, g)
          s(g);
        else {
          for (var x = new Array(arguments.length - 1), C = 0; C < x.length; )
            x[C++] = arguments[C];
          a.apply(null, x);
        }
    };
    try {
      i.apply(o || null, t);
    } catch (g) {
      r && (r = !1, s(g));
    }
  });
}
var yg = {};
(function(i) {
  var o = i;
  o.length = function(a) {
    var s = a.length;
    if (!s)
      return 0;
    for (var g = 0; --s % 4 > 1 && a.charAt(s) === "="; )
      ++g;
    return Math.ceil(a.length * 3) / 4 - g;
  };
  for (var t = new Array(64), e = new Array(123), n = 0; n < 64; )
    e[t[n] = n < 26 ? n + 65 : n < 52 ? n + 71 : n < 62 ? n - 4 : n - 59 | 43] = n++;
  o.encode = function(a, s, g) {
    for (var x = null, C = [], d = 0, m = 0, f; s < g; ) {
      var w = a[s++];
      switch (m) {
        case 0:
          C[d++] = t[w >> 2], f = (w & 3) << 4, m = 1;
          break;
        case 1:
          C[d++] = t[f | w >> 4], f = (w & 15) << 2, m = 2;
          break;
        case 2:
          C[d++] = t[f | w >> 6], C[d++] = t[w & 63], m = 0;
          break;
      }
      d > 8191 && ((x || (x = [])).push(String.fromCharCode.apply(String, C)), d = 0);
    }
    return m && (C[d++] = t[f], C[d++] = 61, m === 1 && (C[d++] = 61)), x ? (d && x.push(String.fromCharCode.apply(String, C.slice(0, d))), x.join("")) : String.fromCharCode.apply(String, C.slice(0, d));
  };
  var r = "invalid encoding";
  o.decode = function(a, s, g) {
    for (var x = g, C = 0, d, m = 0; m < a.length; ) {
      var f = a.charCodeAt(m++);
      if (f === 61 && C > 1)
        break;
      if ((f = e[f]) === void 0)
        throw Error(r);
      switch (C) {
        case 0:
          d = f, C = 1;
          break;
        case 1:
          s[g++] = d << 2 | (f & 48) >> 4, d = f, C = 2;
          break;
        case 2:
          s[g++] = (d & 15) << 4 | (f & 60) >> 2, d = f, C = 3;
          break;
        case 3:
          s[g++] = (d & 3) << 6 | f, C = 0;
          break;
      }
    }
    if (C === 1)
      throw Error(r);
    return g - x;
  }, o.test = function(a) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a);
  };
})(yg);
var GI = mo;
function mo() {
  this._listeners = {};
}
mo.prototype.on = function(i, o, t) {
  return (this._listeners[i] || (this._listeners[i] = [])).push({
    fn: o,
    ctx: t || this
  }), this;
};
mo.prototype.off = function(i, o) {
  if (i === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[i] = [];
  else
    for (var t = this._listeners[i], e = 0; e < t.length; )
      t[e].fn === o ? t.splice(e, 1) : ++e;
  return this;
};
mo.prototype.emit = function(i) {
  var o = this._listeners[i];
  if (o) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < o.length; )
      o[e].fn.apply(o[e++].ctx, t);
  }
  return this;
};
var ZI = ks(ks);
function ks(i) {
  return typeof Float32Array < "u" ? function() {
    var o = new Float32Array([-0]), t = new Uint8Array(o.buffer), e = t[3] === 128;
    function n(g, x, C) {
      o[0] = g, x[C] = t[0], x[C + 1] = t[1], x[C + 2] = t[2], x[C + 3] = t[3];
    }
    function r(g, x, C) {
      o[0] = g, x[C] = t[3], x[C + 1] = t[2], x[C + 2] = t[1], x[C + 3] = t[0];
    }
    i.writeFloatLE = e ? n : r, i.writeFloatBE = e ? r : n;
    function a(g, x) {
      return t[0] = g[x], t[1] = g[x + 1], t[2] = g[x + 2], t[3] = g[x + 3], o[0];
    }
    function s(g, x) {
      return t[3] = g[x], t[2] = g[x + 1], t[1] = g[x + 2], t[0] = g[x + 3], o[0];
    }
    i.readFloatLE = e ? a : s, i.readFloatBE = e ? s : a;
  }() : function() {
    function o(e, n, r, a) {
      var s = n < 0 ? 1 : 0;
      if (s && (n = -n), n === 0)
        e(1 / n > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), r, a);
      else if (isNaN(n))
        e(2143289344, r, a);
      else if (n > 34028234663852886e22)
        e((s << 31 | 2139095040) >>> 0, r, a);
      else if (n < 11754943508222875e-54)
        e((s << 31 | Math.round(n / 1401298464324817e-60)) >>> 0, r, a);
      else {
        var g = Math.floor(Math.log(n) / Math.LN2), x = Math.round(n * Math.pow(2, -g) * 8388608) & 8388607;
        e((s << 31 | g + 127 << 23 | x) >>> 0, r, a);
      }
    }
    i.writeFloatLE = o.bind(null, Ws), i.writeFloatBE = o.bind(null, Hs);
    function t(e, n, r) {
      var a = e(n, r), s = (a >> 31) * 2 + 1, g = a >>> 23 & 255, x = a & 8388607;
      return g === 255 ? x ? NaN : s * (1 / 0) : g === 0 ? s * 1401298464324817e-60 * x : s * Math.pow(2, g - 150) * (x + 8388608);
    }
    i.readFloatLE = t.bind(null, Os), i.readFloatBE = t.bind(null, Ks);
  }(), typeof Float64Array < "u" ? function() {
    var o = new Float64Array([-0]), t = new Uint8Array(o.buffer), e = t[7] === 128;
    function n(g, x, C) {
      o[0] = g, x[C] = t[0], x[C + 1] = t[1], x[C + 2] = t[2], x[C + 3] = t[3], x[C + 4] = t[4], x[C + 5] = t[5], x[C + 6] = t[6], x[C + 7] = t[7];
    }
    function r(g, x, C) {
      o[0] = g, x[C] = t[7], x[C + 1] = t[6], x[C + 2] = t[5], x[C + 3] = t[4], x[C + 4] = t[3], x[C + 5] = t[2], x[C + 6] = t[1], x[C + 7] = t[0];
    }
    i.writeDoubleLE = e ? n : r, i.writeDoubleBE = e ? r : n;
    function a(g, x) {
      return t[0] = g[x], t[1] = g[x + 1], t[2] = g[x + 2], t[3] = g[x + 3], t[4] = g[x + 4], t[5] = g[x + 5], t[6] = g[x + 6], t[7] = g[x + 7], o[0];
    }
    function s(g, x) {
      return t[7] = g[x], t[6] = g[x + 1], t[5] = g[x + 2], t[4] = g[x + 3], t[3] = g[x + 4], t[2] = g[x + 5], t[1] = g[x + 6], t[0] = g[x + 7], o[0];
    }
    i.readDoubleLE = e ? a : s, i.readDoubleBE = e ? s : a;
  }() : function() {
    function o(e, n, r, a, s, g) {
      var x = a < 0 ? 1 : 0;
      if (x && (a = -a), a === 0)
        e(0, s, g + n), e(1 / a > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), s, g + r);
      else if (isNaN(a))
        e(0, s, g + n), e(2146959360, s, g + r);
      else if (a > 17976931348623157e292)
        e(0, s, g + n), e((x << 31 | 2146435072) >>> 0, s, g + r);
      else {
        var C;
        if (a < 22250738585072014e-324)
          C = a / 5e-324, e(C >>> 0, s, g + n), e((x << 31 | C / 4294967296) >>> 0, s, g + r);
        else {
          var d = Math.floor(Math.log(a) / Math.LN2);
          d === 1024 && (d = 1023), C = a * Math.pow(2, -d), e(C * 4503599627370496 >>> 0, s, g + n), e((x << 31 | d + 1023 << 20 | C * 1048576 & 1048575) >>> 0, s, g + r);
        }
      }
    }
    i.writeDoubleLE = o.bind(null, Ws, 0, 4), i.writeDoubleBE = o.bind(null, Hs, 4, 0);
    function t(e, n, r, a, s) {
      var g = e(a, s + n), x = e(a, s + r), C = (x >> 31) * 2 + 1, d = x >>> 20 & 2047, m = 4294967296 * (x & 1048575) + g;
      return d === 2047 ? m ? NaN : C * (1 / 0) : d === 0 ? C * 5e-324 * m : C * Math.pow(2, d - 1075) * (m + 4503599627370496);
    }
    i.readDoubleLE = t.bind(null, Os, 0, 4), i.readDoubleBE = t.bind(null, Ks, 4, 0);
  }(), i;
}
function Ws(i, o, t) {
  o[t] = i & 255, o[t + 1] = i >>> 8 & 255, o[t + 2] = i >>> 16 & 255, o[t + 3] = i >>> 24;
}
function Hs(i, o, t) {
  o[t] = i >>> 24, o[t + 1] = i >>> 16 & 255, o[t + 2] = i >>> 8 & 255, o[t + 3] = i & 255;
}
function Os(i, o) {
  return (i[o] | i[o + 1] << 8 | i[o + 2] << 16 | i[o + 3] << 24) >>> 0;
}
function Ks(i, o) {
  return (i[o] << 24 | i[o + 1] << 16 | i[o + 2] << 8 | i[o + 3]) >>> 0;
}
function Vs(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var kI = WI;
function WI(i) {
  try {
    if (typeof Vs != "function")
      return null;
    var o = Vs(i);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var vg = {};
(function(i) {
  var o = i;
  o.length = function(t) {
    for (var e = 0, n = 0, r = 0; r < t.length; ++r)
      n = t.charCodeAt(r), n < 128 ? e += 1 : n < 2048 ? e += 2 : (n & 64512) === 55296 && (t.charCodeAt(r + 1) & 64512) === 56320 ? (++r, e += 4) : e += 3;
    return e;
  }, o.read = function(t, e, n) {
    var r = n - e;
    if (r < 1)
      return "";
    for (var a = null, s = [], g = 0, x; e < n; )
      x = t[e++], x < 128 ? s[g++] = x : x > 191 && x < 224 ? s[g++] = (x & 31) << 6 | t[e++] & 63 : x > 239 && x < 365 ? (x = ((x & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, s[g++] = 55296 + (x >> 10), s[g++] = 56320 + (x & 1023)) : s[g++] = (x & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, g > 8191 && ((a || (a = [])).push(String.fromCharCode.apply(String, s)), g = 0);
    return a ? (g && a.push(String.fromCharCode.apply(String, s.slice(0, g))), a.join("")) : String.fromCharCode.apply(String, s.slice(0, g));
  }, o.write = function(t, e, n) {
    for (var r = n, a, s, g = 0; g < t.length; ++g)
      a = t.charCodeAt(g), a < 128 ? e[n++] = a : a < 2048 ? (e[n++] = a >> 6 | 192, e[n++] = a & 63 | 128) : (a & 64512) === 55296 && ((s = t.charCodeAt(g + 1)) & 64512) === 56320 ? (a = 65536 + ((a & 1023) << 10) + (s & 1023), ++g, e[n++] = a >> 18 | 240, e[n++] = a >> 12 & 63 | 128, e[n++] = a >> 6 & 63 | 128, e[n++] = a & 63 | 128) : (e[n++] = a >> 12 | 224, e[n++] = a >> 6 & 63 | 128, e[n++] = a & 63 | 128);
    return n - r;
  };
})(vg);
var HI = OI;
function OI(i, o, t) {
  var e = t || 8192, n = e >>> 1, r = null, a = e;
  return function(s) {
    if (s < 1 || s > n)
      return i(s);
    a + s > e && (r = i(e), a = 0);
    var g = o.call(r, a, a += s);
    return a & 7 && (a = (a | 7) + 1), g;
  };
}
var Jo, Rs;
function KI() {
  if (Rs)
    return Jo;
  Rs = 1, Jo = o;
  var i = Qt();
  function o(r, a) {
    this.lo = r >>> 0, this.hi = a >>> 0;
  }
  var t = o.zero = new o(0, 0);
  t.toNumber = function() {
    return 0;
  }, t.zzEncode = t.zzDecode = function() {
    return this;
  }, t.length = function() {
    return 1;
  };
  var e = o.zeroHash = "\0\0\0\0\0\0\0\0";
  o.fromNumber = function(r) {
    if (r === 0)
      return t;
    var a = r < 0;
    a && (r = -r);
    var s = r >>> 0, g = (r - s) / 4294967296 >>> 0;
    return a && (g = ~g >>> 0, s = ~s >>> 0, ++s > 4294967295 && (s = 0, ++g > 4294967295 && (g = 0))), new o(s, g);
  }, o.from = function(r) {
    if (typeof r == "number")
      return o.fromNumber(r);
    if (i.isString(r))
      if (i.Long)
        r = i.Long.fromString(r);
      else
        return o.fromNumber(parseInt(r, 10));
    return r.low || r.high ? new o(r.low >>> 0, r.high >>> 0) : t;
  }, o.prototype.toNumber = function(r) {
    if (!r && this.hi >>> 31) {
      var a = ~this.lo + 1 >>> 0, s = ~this.hi >>> 0;
      return a || (s = s + 1 >>> 0), -(a + s * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, o.prototype.toLong = function(r) {
    return i.Long ? new i.Long(this.lo | 0, this.hi | 0, !!r) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!r };
  };
  var n = String.prototype.charCodeAt;
  return o.fromHash = function(r) {
    return r === e ? t : new o(
      (n.call(r, 0) | n.call(r, 1) << 8 | n.call(r, 2) << 16 | n.call(r, 3) << 24) >>> 0,
      (n.call(r, 4) | n.call(r, 5) << 8 | n.call(r, 6) << 16 | n.call(r, 7) << 24) >>> 0
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
  }, Jo;
}
var Ts;
function Qt() {
  return Ts || (Ts = 1, function(i) {
    var o = i;
    o.asPromise = SI, o.base64 = yg, o.EventEmitter = GI, o.float = ZI, o.inquire = kI, o.utf8 = vg, o.pool = HI, o.LongBits = KI(), o.isNode = !!(typeof Vt < "u" && Vt && Vt.process && Vt.process.versions && Vt.process.versions.node), o.global = o.isNode && Vt || typeof window < "u" && window || typeof self < "u" && self || Vt, o.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), o.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), o.isInteger = Number.isInteger || /* istanbul ignore next */
    function(n) {
      return typeof n == "number" && isFinite(n) && Math.floor(n) === n;
    }, o.isString = function(n) {
      return typeof n == "string" || n instanceof String;
    }, o.isObject = function(n) {
      return n && typeof n == "object";
    }, o.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    o.isSet = function(n, r) {
      var a = n[r];
      return a != null && n.hasOwnProperty(r) ? typeof a != "object" || (Array.isArray(a) ? a.length : Object.keys(a).length) > 0 : !1;
    }, o.Buffer = function() {
      try {
        var n = o.inquire("buffer").Buffer;
        return n.prototype.utf8Write ? n : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), o._Buffer_from = null, o._Buffer_allocUnsafe = null, o.newBuffer = function(n) {
      return typeof n == "number" ? o.Buffer ? o._Buffer_allocUnsafe(n) : new o.Array(n) : o.Buffer ? o._Buffer_from(n) : typeof Uint8Array > "u" ? n : new Uint8Array(n);
    }, o.Array = typeof Uint8Array < "u" ? Uint8Array : Array, o.Long = /* istanbul ignore next */
    o.global.dcodeIO && /* istanbul ignore next */
    o.global.dcodeIO.Long || /* istanbul ignore next */
    o.global.Long || o.inquire("long"), o.key2Re = /^true|false|0|1$/, o.key32Re = /^-?(?:0|[1-9][0-9]*)$/, o.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, o.longToHash = function(n) {
      return n ? o.LongBits.from(n).toHash() : o.LongBits.zeroHash;
    }, o.longFromHash = function(n, r) {
      var a = o.LongBits.fromHash(n);
      return o.Long ? o.Long.fromBits(a.lo, a.hi, r) : a.toNumber(!!r);
    };
    function t(n, r, a) {
      for (var s = Object.keys(r), g = 0; g < s.length; ++g)
        (n[s[g]] === void 0 || !a) && (n[s[g]] = r[s[g]]);
      return n;
    }
    o.merge = t, o.lcFirst = function(n) {
      return n.charAt(0).toLowerCase() + n.substring(1);
    };
    function e(n) {
      function r(a, s) {
        if (!(this instanceof r))
          return new r(a, s);
        Object.defineProperty(this, "message", { get: function() {
          return a;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, r) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), s && t(this, s);
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
            return n;
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
    o.newError = e, o.ProtocolError = e("ProtocolError"), o.oneOfGetter = function(n) {
      for (var r = {}, a = 0; a < n.length; ++a)
        r[n[a]] = 1;
      return function() {
        for (var s = Object.keys(this), g = s.length - 1; g > -1; --g)
          if (r[s[g]] === 1 && this[s[g]] !== void 0 && this[s[g]] !== null)
            return s[g];
      };
    }, o.oneOfSetter = function(n) {
      return function(r) {
        for (var a = 0; a < n.length; ++a)
          n[a] !== r && delete this[n[a]];
      };
    }, o.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, o._configure = function() {
      var n = o.Buffer;
      if (!n) {
        o._Buffer_from = o._Buffer_allocUnsafe = null;
        return;
      }
      o._Buffer_from = n.from !== Uint8Array.from && n.from || /* istanbul ignore next */
      function(r, a) {
        return new n(r, a);
      }, o._Buffer_allocUnsafe = n.allocUnsafe || /* istanbul ignore next */
      function(r) {
        return new n(r);
      };
    };
  }(Zs)), Zs;
}
var wg = J, Ue = Qt(), Gr, Ao = Ue.LongBits, Es = Ue.base64, Ps = Ue.utf8;
function ci(i, o, t) {
  this.fn = i, this.len = o, this.next = void 0, this.val = t;
}
function oa() {
}
function VI(i) {
  this.head = i.head, this.tail = i.tail, this.len = i.len, this.next = i.states;
}
function J() {
  this.len = 0, this.head = new ci(oa, 0, 0), this.tail = this.head, this.states = null;
}
var Sg = function() {
  return Ue.Buffer ? function() {
    return (J.create = function() {
      return new Gr();
    })();
  } : function() {
    return new J();
  };
};
J.create = Sg();
J.alloc = function(i) {
  return new Ue.Array(i);
};
Ue.Array !== Array && (J.alloc = Ue.pool(J.alloc, Ue.Array.prototype.subarray));
J.prototype._push = function(i, o, t) {
  return this.tail = this.tail.next = new ci(i, o, t), this.len += o, this;
};
function ra(i, o, t) {
  o[t] = i & 255;
}
function RI(i, o, t) {
  for (; i > 127; )
    o[t++] = i & 127 | 128, i >>>= 7;
  o[t] = i;
}
function aa(i, o) {
  this.len = i, this.next = void 0, this.val = o;
}
aa.prototype = Object.create(ci.prototype);
aa.prototype.fn = RI;
J.prototype.uint32 = function(i) {
  return this.len += (this.tail = this.tail.next = new aa(
    (i = i >>> 0) < 128 ? 1 : i < 16384 ? 2 : i < 2097152 ? 3 : i < 268435456 ? 4 : 5,
    i
  )).len, this;
};
J.prototype.int32 = function(i) {
  return i < 0 ? this._push(sa, 10, Ao.fromNumber(i)) : this.uint32(i);
};
J.prototype.sint32 = function(i) {
  return this.uint32((i << 1 ^ i >> 31) >>> 0);
};
function sa(i, o, t) {
  for (; i.hi; )
    o[t++] = i.lo & 127 | 128, i.lo = (i.lo >>> 7 | i.hi << 25) >>> 0, i.hi >>>= 7;
  for (; i.lo > 127; )
    o[t++] = i.lo & 127 | 128, i.lo = i.lo >>> 7;
  o[t++] = i.lo;
}
J.prototype.uint64 = function(i) {
  var o = Ao.from(i);
  return this._push(sa, o.length(), o);
};
J.prototype.int64 = J.prototype.uint64;
J.prototype.sint64 = function(i) {
  var o = Ao.from(i).zzEncode();
  return this._push(sa, o.length(), o);
};
J.prototype.bool = function(i) {
  return this._push(ra, 1, i ? 1 : 0);
};
function Zr(i, o, t) {
  o[t] = i & 255, o[t + 1] = i >>> 8 & 255, o[t + 2] = i >>> 16 & 255, o[t + 3] = i >>> 24;
}
J.prototype.fixed32 = function(i) {
  return this._push(Zr, 4, i >>> 0);
};
J.prototype.sfixed32 = J.prototype.fixed32;
J.prototype.fixed64 = function(i) {
  var o = Ao.from(i);
  return this._push(Zr, 4, o.lo)._push(Zr, 4, o.hi);
};
J.prototype.sfixed64 = J.prototype.fixed64;
J.prototype.float = function(i) {
  return this._push(Ue.float.writeFloatLE, 4, i);
};
J.prototype.double = function(i) {
  return this._push(Ue.float.writeDoubleLE, 8, i);
};
var TI = Ue.Array.prototype.set ? function(i, o, t) {
  o.set(i, t);
} : function(i, o, t) {
  for (var e = 0; e < i.length; ++e)
    o[t + e] = i[e];
};
J.prototype.bytes = function(i) {
  var o = i.length >>> 0;
  if (!o)
    return this._push(ra, 1, 0);
  if (Ue.isString(i)) {
    var t = J.alloc(o = Es.length(i));
    Es.decode(i, t, 0), i = t;
  }
  return this.uint32(o)._push(TI, o, i);
};
J.prototype.string = function(i) {
  var o = Ps.length(i);
  return o ? this.uint32(o)._push(Ps.write, o, i) : this._push(ra, 1, 0);
};
J.prototype.fork = function() {
  return this.states = new VI(this), this.head = this.tail = new ci(oa, 0, 0), this.len = 0, this;
};
J.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new ci(oa, 0, 0), this.len = 0), this;
};
J.prototype.ldelim = function() {
  var i = this.head, o = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = i.next, this.tail = o, this.len += t), this;
};
J.prototype.finish = function() {
  for (var i = this.head.next, o = this.constructor.alloc(this.len), t = 0; i; )
    i.fn(i.val, o, t), t += i.len, i = i.next;
  return o;
};
J._configure = function(i) {
  Gr = i, J.create = Sg(), Gr._configure();
};
var EI = gt, Bg = wg;
(gt.prototype = Object.create(Bg.prototype)).constructor = gt;
var Bt = Qt();
function gt() {
  Bg.call(this);
}
gt._configure = function() {
  gt.alloc = Bt._Buffer_allocUnsafe, gt.writeBytesBuffer = Bt.Buffer && Bt.Buffer.prototype instanceof Uint8Array && Bt.Buffer.prototype.set.name === "set" ? function(i, o, t) {
    o.set(i, t);
  } : function(i, o, t) {
    if (i.copy)
      i.copy(o, t, 0, i.length);
    else
      for (var e = 0; e < i.length; )
        o[t++] = i[e++];
  };
};
gt.prototype.bytes = function(i) {
  Bt.isString(i) && (i = Bt._Buffer_from(i, "base64"));
  var o = i.length >>> 0;
  return this.uint32(o), o && this._push(gt.writeBytesBuffer, o, i), this;
};
function PI(i, o, t) {
  i.length < 40 ? Bt.utf8.write(i, o, t) : o.utf8Write ? o.utf8Write(i, t) : o.write(i, t);
}
gt.prototype.string = function(i) {
  var o = Bt.Buffer.byteLength(i);
  return this.uint32(o), o && this._push(PI, o, i), this;
};
gt._configure();
var Gg = ce, ct = Qt(), kr, Zg = ct.LongBits, YI = ct.utf8;
function tt(i, o) {
  return RangeError("index out of range: " + i.pos + " + " + (o || 1) + " > " + i.len);
}
function ce(i) {
  this.buf = i, this.pos = 0, this.len = i.length;
}
var Ys = typeof Uint8Array < "u" ? function(i) {
  if (i instanceof Uint8Array || Array.isArray(i))
    return new ce(i);
  throw Error("illegal buffer");
} : function(i) {
  if (Array.isArray(i))
    return new ce(i);
  throw Error("illegal buffer");
}, kg = function() {
  return ct.Buffer ? function(i) {
    return (ce.create = function(o) {
      return ct.Buffer.isBuffer(o) ? new kr(o) : Ys(o);
    })(i);
  } : Ys;
};
ce.create = kg();
ce.prototype._slice = ct.Array.prototype.subarray || /* istanbul ignore next */
ct.Array.prototype.slice;
ce.prototype.uint32 = /* @__PURE__ */ function() {
  var i = 4294967295;
  return function() {
    if (i = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (i = (i | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return i;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, tt(this, 10);
    return i;
  };
}();
ce.prototype.int32 = function() {
  return this.uint32() | 0;
};
ce.prototype.sint32 = function() {
  var i = this.uint32();
  return i >>> 1 ^ -(i & 1) | 0;
};
function zo() {
  var i = new Zg(0, 0), o = 0;
  if (this.len - this.pos > 4) {
    for (; o < 4; ++o)
      if (i.lo = (i.lo | (this.buf[this.pos] & 127) << o * 7) >>> 0, this.buf[this.pos++] < 128)
        return i;
    if (i.lo = (i.lo | (this.buf[this.pos] & 127) << 28) >>> 0, i.hi = (i.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return i;
    o = 0;
  } else {
    for (; o < 3; ++o) {
      if (this.pos >= this.len)
        throw tt(this);
      if (i.lo = (i.lo | (this.buf[this.pos] & 127) << o * 7) >>> 0, this.buf[this.pos++] < 128)
        return i;
    }
    return i.lo = (i.lo | (this.buf[this.pos++] & 127) << o * 7) >>> 0, i;
  }
  if (this.len - this.pos > 4) {
    for (; o < 5; ++o)
      if (i.hi = (i.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return i;
  } else
    for (; o < 5; ++o) {
      if (this.pos >= this.len)
        throw tt(this);
      if (i.hi = (i.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return i;
    }
  throw Error("invalid varint encoding");
}
ce.prototype.bool = function() {
  return this.uint32() !== 0;
};
function oo(i, o) {
  return (i[o - 4] | i[o - 3] << 8 | i[o - 2] << 16 | i[o - 1] << 24) >>> 0;
}
ce.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw tt(this, 4);
  return oo(this.buf, this.pos += 4);
};
ce.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw tt(this, 4);
  return oo(this.buf, this.pos += 4) | 0;
};
function Ls() {
  if (this.pos + 8 > this.len)
    throw tt(this, 8);
  return new Zg(oo(this.buf, this.pos += 4), oo(this.buf, this.pos += 4));
}
ce.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw tt(this, 4);
  var i = ct.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, i;
};
ce.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw tt(this, 4);
  var i = ct.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, i;
};
ce.prototype.bytes = function() {
  var i = this.uint32(), o = this.pos, t = this.pos + i;
  if (t > this.len)
    throw tt(this, i);
  return this.pos += i, Array.isArray(this.buf) ? this.buf.slice(o, t) : o === t ? new this.buf.constructor(0) : this._slice.call(this.buf, o, t);
};
ce.prototype.string = function() {
  var i = this.bytes();
  return YI.read(i, 0, i.length);
};
ce.prototype.skip = function(i) {
  if (typeof i == "number") {
    if (this.pos + i > this.len)
      throw tt(this, i);
    this.pos += i;
  } else
    do
      if (this.pos >= this.len)
        throw tt(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
ce.prototype.skipType = function(i) {
  switch (i) {
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
      for (; (i = this.uint32() & 7) !== 4; )
        this.skipType(i);
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + i + " at offset " + this.pos);
  }
  return this;
};
ce._configure = function(i) {
  kr = i, ce.create = kg(), kr._configure();
  var o = ct.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  ct.merge(ce.prototype, {
    int64: function() {
      return zo.call(this)[o](!1);
    },
    uint64: function() {
      return zo.call(this)[o](!0);
    },
    sint64: function() {
      return zo.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return Ls.call(this)[o](!0);
    },
    sfixed64: function() {
      return Ls.call(this)[o](!1);
    }
  });
};
var LI = Ut, Wg = Gg;
(Ut.prototype = Object.create(Wg.prototype)).constructor = Ut;
var Ds = Qt();
function Ut(i) {
  Wg.call(this, i);
}
Ut._configure = function() {
  Ds.Buffer && (Ut.prototype._slice = Ds.Buffer.prototype.slice);
};
Ut.prototype.string = function() {
  var i = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + i, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + i, this.len));
};
Ut._configure();
var Hg = {}, DI = Jn, ga = Qt();
(Jn.prototype = Object.create(ga.EventEmitter.prototype)).constructor = Jn;
function Jn(i, o, t) {
  if (typeof i != "function")
    throw TypeError("rpcImpl must be a function");
  ga.EventEmitter.call(this), this.rpcImpl = i, this.requestDelimited = !!o, this.responseDelimited = !!t;
}
Jn.prototype.rpcCall = function i(o, t, e, n, r) {
  if (!n)
    throw TypeError("request must be specified");
  var a = this;
  if (!r)
    return ga.asPromise(i, a, o, t, e, n);
  if (!a.rpcImpl) {
    setTimeout(function() {
      r(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return a.rpcImpl(
      o,
      t[a.requestDelimited ? "encodeDelimited" : "encode"](n).finish(),
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
        if (!(g instanceof e))
          try {
            g = e[a.responseDelimited ? "decodeDelimited" : "decode"](g);
          } catch (x) {
            return a.emit("error", x, o), r(x);
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
Jn.prototype.end = function(i) {
  return this.rpcImpl && (i || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(i) {
  var o = i;
  o.Service = DI;
})(Hg);
var NI = {};
(function(i) {
  var o = i;
  o.build = "minimal", o.Writer = wg, o.BufferWriter = EI, o.Reader = Gg, o.BufferReader = LI, o.util = Qt(), o.rpc = Hg, o.roots = NI, o.configure = t;
  function t() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  t();
})(bg);
var ne = bg;
const y = ne.Reader, ge = ne.Writer, h = ne.util, I = ne.roots.default || (ne.roots.default = {}), yn = I.dot = (() => {
  const i = {};
  return i.Content = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.token = h.newBuffer([]), o.prototype.iv = h.newBuffer([]), o.prototype.schemaVersion = 0, o.prototype.bytes = h.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = ge.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.token), t.iv != null && Object.hasOwnProperty.call(t, "iv") && e.uint32(
        /* id 2, wireType 2 =*/
        18
      ).bytes(t.iv), t.schemaVersion != null && Object.hasOwnProperty.call(t, "schemaVersion") && e.uint32(
        /* id 3, wireType 0 =*/
        24
      ).int32(t.schemaVersion), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 4, wireType 2 =*/
        34
      ).bytes(t.bytes), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof y || (t = y.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new I.dot.Content();
      for (; t.pos < n; ) {
        let a = t.uint32();
        switch (a >>> 3) {
          case 1: {
            r.token = t.bytes();
            break;
          }
          case 2: {
            r.iv = t.bytes();
            break;
          }
          case 3: {
            r.schemaVersion = t.int32();
            break;
          }
          case 4: {
            r.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof y || (t = new y(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || h.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || h.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !h.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || h.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof I.dot.Content)
        return t;
      let e = new I.dot.Content();
      return t.token != null && (typeof t.token == "string" ? h.base64.decode(t.token, e.token = h.newBuffer(h.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? h.base64.decode(t.iv, e.iv = h.newBuffer(h.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? h.base64.decode(t.bytes, e.bytes = h.newBuffer(h.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.token = "" : (n.token = [], e.bytes !== Array && (n.token = h.newBuffer(n.token))), e.bytes === String ? n.iv = "" : (n.iv = [], e.bytes !== Array && (n.iv = h.newBuffer(n.iv))), n.schemaVersion = 0, e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = h.newBuffer(n.bytes)))), t.token != null && t.hasOwnProperty("token") && (n.token = e.bytes === String ? h.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (n.iv = e.bytes === String ? h.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (n.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? h.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, o;
  }(), i.v4 = function() {
    const o = {};
    return o.MagnifEyeLivenessContent = function() {
      function t(e) {
        if (this.images = [], e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.images = h.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = ge.create()), e.images != null && e.images.length)
          for (let r = 0; r < e.images.length; ++r)
            I.dot.Image.encode(e.images[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && I.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.images && a.images.length || (a.images = []), a.images.push(I.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              a.metadata = I.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.images != null && e.hasOwnProperty("images")) {
          if (!Array.isArray(e.images))
            return "images: array expected";
          for (let n = 0; n < e.images.length; ++n) {
            let r = I.dot.Image.verify(e.images[n]);
            if (r)
              return "images." + r;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = I.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.MagnifEyeLivenessContent)
          return e;
        let n = new I.dot.v4.MagnifEyeLivenessContent();
        if (e.images) {
          if (!Array.isArray(e.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          n.images = [];
          for (let r = 0; r < e.images.length; ++r) {
            if (typeof e.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            n.images[r] = I.dot.Image.fromObject(e.images[r]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          n.metadata = I.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.images = []), n.defaults && (r.metadata = null), e.images && e.images.length) {
          r.images = [];
          for (let a = 0; a < e.images.length; ++a)
            r.images[a] = I.dot.Image.toObject(e.images[a], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = I.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), o.Metadata = function() {
      function t(n) {
        if (n)
          for (let r = Object.keys(n), a = 0; a < r.length; ++a)
            n[r[a]] != null && (this[r[a]] = n[r[a]]);
      }
      t.prototype.platform = 0, t.prototype.sessionToken = null, t.prototype.componentVersion = "", t.prototype.web = null, t.prototype.android = null, t.prototype.ios = null;
      let e;
      return Object.defineProperty(t.prototype, "_sessionToken", {
        get: h.oneOfGetter(e = ["sessionToken"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: h.oneOfGetter(e = ["web", "android", "ios"]),
        set: h.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        return r || (r = ge.create()), n.platform != null && Object.hasOwnProperty.call(n, "platform") && r.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.platform), n.web != null && Object.hasOwnProperty.call(n, "web") && I.dot.v4.WebMetadata.encode(n.web, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.android != null && Object.hasOwnProperty.call(n, "android") && I.dot.v4.AndroidMetadata.encode(n.android, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.ios != null && Object.hasOwnProperty.call(n, "ios") && I.dot.v4.IosMetadata.encode(n.ios, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.sessionToken != null && Object.hasOwnProperty.call(n, "sessionToken") && r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(n.sessionToken), n.componentVersion != null && Object.hasOwnProperty.call(n, "componentVersion") && r.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(n.componentVersion), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof y || (n = y.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new I.dot.v4.Metadata();
        for (; n.pos < a; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              s.platform = n.int32();
              break;
            }
            case 5: {
              s.sessionToken = n.string();
              break;
            }
            case 6: {
              s.componentVersion = n.string();
              break;
            }
            case 2: {
              s.web = I.dot.v4.WebMetadata.decode(n, n.uint32());
              break;
            }
            case 3: {
              s.android = I.dot.v4.AndroidMetadata.decode(n, n.uint32());
              break;
            }
            case 4: {
              s.ios = I.dot.v4.IosMetadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return s;
      }, t.decodeDelimited = function(n) {
        return n instanceof y || (n = new y(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        let r = {};
        if (n.platform != null && n.hasOwnProperty("platform"))
          switch (n.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (n.sessionToken != null && n.hasOwnProperty("sessionToken") && (r._sessionToken = 1, !h.isString(n.sessionToken)))
          return "sessionToken: string expected";
        if (n.componentVersion != null && n.hasOwnProperty("componentVersion") && !h.isString(n.componentVersion))
          return "componentVersion: string expected";
        if (n.web != null && n.hasOwnProperty("web")) {
          r.metadata = 1;
          {
            let a = I.dot.v4.WebMetadata.verify(n.web);
            if (a)
              return "web." + a;
          }
        }
        if (n.android != null && n.hasOwnProperty("android")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let a = I.dot.v4.AndroidMetadata.verify(n.android);
            if (a)
              return "android." + a;
          }
        }
        if (n.ios != null && n.hasOwnProperty("ios")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let a = I.dot.v4.IosMetadata.verify(n.ios);
            if (a)
              return "ios." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof I.dot.v4.Metadata)
          return n;
        let r = new I.dot.v4.Metadata();
        switch (n.platform) {
          default:
            if (typeof n.platform == "number") {
              r.platform = n.platform;
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
        if (n.sessionToken != null && (r.sessionToken = String(n.sessionToken)), n.componentVersion != null && (r.componentVersion = String(n.componentVersion)), n.web != null) {
          if (typeof n.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          r.web = I.dot.v4.WebMetadata.fromObject(n.web);
        }
        if (n.android != null) {
          if (typeof n.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          r.android = I.dot.v4.AndroidMetadata.fromObject(n.android);
        }
        if (n.ios != null) {
          if (typeof n.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          r.ios = I.dot.v4.IosMetadata.fromObject(n.ios);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return r.defaults && (a.platform = r.enums === String ? "WEB" : 0, a.componentVersion = ""), n.platform != null && n.hasOwnProperty("platform") && (a.platform = r.enums === String ? I.dot.Platform[n.platform] === void 0 ? n.platform : I.dot.Platform[n.platform] : n.platform), n.web != null && n.hasOwnProperty("web") && (a.web = I.dot.v4.WebMetadata.toObject(n.web, r), r.oneofs && (a.metadata = "web")), n.android != null && n.hasOwnProperty("android") && (a.android = I.dot.v4.AndroidMetadata.toObject(n.android, r), r.oneofs && (a.metadata = "android")), n.ios != null && n.hasOwnProperty("ios") && (a.ios = I.dot.v4.IosMetadata.toObject(n.ios, r), r.oneofs && (a.metadata = "ios")), n.sessionToken != null && n.hasOwnProperty("sessionToken") && (a.sessionToken = n.sessionToken, r.oneofs && (a._sessionToken = "sessionToken")), n.componentVersion != null && n.hasOwnProperty("componentVersion") && (a.componentVersion = n.componentVersion), a;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.Metadata";
      }, t;
    }(), o.AndroidMetadata = function() {
      function t(n) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, n)
          for (let r = Object.keys(n), a = 0; a < r.length; ++a)
            n[r[a]] != null && (this[r[a]] = n[r[a]]);
      }
      t.prototype.supportedAbis = h.emptyArray, t.prototype.device = null, t.prototype.digests = h.emptyArray, t.prototype.digestsWithTimestamp = h.emptyArray, t.prototype.dynamicCameraFrameProperties = h.emptyObject;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: h.oneOfGetter(e = ["device"]),
        set: h.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        if (r || (r = ge.create()), n.supportedAbis != null && n.supportedAbis.length)
          for (let a = 0; a < n.supportedAbis.length; ++a)
            r.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(n.supportedAbis[a]);
        if (n.device != null && Object.hasOwnProperty.call(n, "device") && r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(n.device), n.digests != null && n.digests.length)
          for (let a = 0; a < n.digests.length; ++a)
            r.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(n.digests[a]);
        if (n.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(n, "dynamicCameraFrameProperties"))
          for (let a = Object.keys(n.dynamicCameraFrameProperties), s = 0; s < a.length; ++s)
            r.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(a[s]), I.dot.Int32List.encode(n.dynamicCameraFrameProperties[a[s]], r.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (n.digestsWithTimestamp != null && n.digestsWithTimestamp.length)
          for (let a = 0; a < n.digestsWithTimestamp.length; ++a)
            I.dot.DigestWithTimestamp.encode(n.digestsWithTimestamp[a], r.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof y || (n = y.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new I.dot.v4.AndroidMetadata(), g, x;
        for (; n.pos < a; ) {
          let C = n.uint32();
          switch (C >>> 3) {
            case 1: {
              s.supportedAbis && s.supportedAbis.length || (s.supportedAbis = []), s.supportedAbis.push(n.string());
              break;
            }
            case 2: {
              s.device = n.string();
              break;
            }
            case 3: {
              s.digests && s.digests.length || (s.digests = []), s.digests.push(n.bytes());
              break;
            }
            case 5: {
              s.digestsWithTimestamp && s.digestsWithTimestamp.length || (s.digestsWithTimestamp = []), s.digestsWithTimestamp.push(I.dot.DigestWithTimestamp.decode(n, n.uint32()));
              break;
            }
            case 4: {
              s.dynamicCameraFrameProperties === h.emptyObject && (s.dynamicCameraFrameProperties = {});
              let d = n.uint32() + n.pos;
              for (g = "", x = null; n.pos < d; ) {
                let m = n.uint32();
                switch (m >>> 3) {
                  case 1:
                    g = n.string();
                    break;
                  case 2:
                    x = I.dot.Int32List.decode(n, n.uint32());
                    break;
                  default:
                    n.skipType(m & 7);
                    break;
                }
              }
              s.dynamicCameraFrameProperties[g] = x;
              break;
            }
            default:
              n.skipType(C & 7);
              break;
          }
        }
        return s;
      }, t.decodeDelimited = function(n) {
        return n instanceof y || (n = new y(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.supportedAbis != null && n.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(n.supportedAbis))
            return "supportedAbis: array expected";
          for (let r = 0; r < n.supportedAbis.length; ++r)
            if (!h.isString(n.supportedAbis[r]))
              return "supportedAbis: string[] expected";
        }
        if (n.device != null && n.hasOwnProperty("device") && !h.isString(n.device))
          return "device: string expected";
        if (n.digests != null && n.hasOwnProperty("digests")) {
          if (!Array.isArray(n.digests))
            return "digests: array expected";
          for (let r = 0; r < n.digests.length; ++r)
            if (!(n.digests[r] && typeof n.digests[r].length == "number" || h.isString(n.digests[r])))
              return "digests: buffer[] expected";
        }
        if (n.digestsWithTimestamp != null && n.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(n.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let r = 0; r < n.digestsWithTimestamp.length; ++r) {
            let a = I.dot.DigestWithTimestamp.verify(n.digestsWithTimestamp[r]);
            if (a)
              return "digestsWithTimestamp." + a;
          }
        }
        if (n.dynamicCameraFrameProperties != null && n.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!h.isObject(n.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let r = Object.keys(n.dynamicCameraFrameProperties);
          for (let a = 0; a < r.length; ++a) {
            let s = I.dot.Int32List.verify(n.dynamicCameraFrameProperties[r[a]]);
            if (s)
              return "dynamicCameraFrameProperties." + s;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof I.dot.v4.AndroidMetadata)
          return n;
        let r = new I.dot.v4.AndroidMetadata();
        if (n.supportedAbis) {
          if (!Array.isArray(n.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          r.supportedAbis = [];
          for (let a = 0; a < n.supportedAbis.length; ++a)
            r.supportedAbis[a] = String(n.supportedAbis[a]);
        }
        if (n.device != null && (r.device = String(n.device)), n.digests) {
          if (!Array.isArray(n.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          r.digests = [];
          for (let a = 0; a < n.digests.length; ++a)
            typeof n.digests[a] == "string" ? h.base64.decode(n.digests[a], r.digests[a] = h.newBuffer(h.base64.length(n.digests[a])), 0) : n.digests[a].length >= 0 && (r.digests[a] = n.digests[a]);
        }
        if (n.digestsWithTimestamp) {
          if (!Array.isArray(n.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          r.digestsWithTimestamp = [];
          for (let a = 0; a < n.digestsWithTimestamp.length; ++a) {
            if (typeof n.digestsWithTimestamp[a] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            r.digestsWithTimestamp[a] = I.dot.DigestWithTimestamp.fromObject(n.digestsWithTimestamp[a]);
          }
        }
        if (n.dynamicCameraFrameProperties) {
          if (typeof n.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          r.dynamicCameraFrameProperties = {};
          for (let a = Object.keys(n.dynamicCameraFrameProperties), s = 0; s < a.length; ++s) {
            if (typeof n.dynamicCameraFrameProperties[a[s]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            r.dynamicCameraFrameProperties[a[s]] = I.dot.Int32List.fromObject(n.dynamicCameraFrameProperties[a[s]]);
          }
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        if ((r.arrays || r.defaults) && (a.supportedAbis = [], a.digests = [], a.digestsWithTimestamp = []), (r.objects || r.defaults) && (a.dynamicCameraFrameProperties = {}), n.supportedAbis && n.supportedAbis.length) {
          a.supportedAbis = [];
          for (let g = 0; g < n.supportedAbis.length; ++g)
            a.supportedAbis[g] = n.supportedAbis[g];
        }
        if (n.device != null && n.hasOwnProperty("device") && (a.device = n.device, r.oneofs && (a._device = "device")), n.digests && n.digests.length) {
          a.digests = [];
          for (let g = 0; g < n.digests.length; ++g)
            a.digests[g] = r.bytes === String ? h.base64.encode(n.digests[g], 0, n.digests[g].length) : r.bytes === Array ? Array.prototype.slice.call(n.digests[g]) : n.digests[g];
        }
        let s;
        if (n.dynamicCameraFrameProperties && (s = Object.keys(n.dynamicCameraFrameProperties)).length) {
          a.dynamicCameraFrameProperties = {};
          for (let g = 0; g < s.length; ++g)
            a.dynamicCameraFrameProperties[s[g]] = I.dot.Int32List.toObject(n.dynamicCameraFrameProperties[s[g]], r);
        }
        if (n.digestsWithTimestamp && n.digestsWithTimestamp.length) {
          a.digestsWithTimestamp = [];
          for (let g = 0; g < n.digestsWithTimestamp.length; ++g)
            a.digestsWithTimestamp[g] = I.dot.DigestWithTimestamp.toObject(n.digestsWithTimestamp[g], r);
        }
        return a;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.AndroidMetadata";
      }, t;
    }(), o.IosMetadata = function() {
      function t(e) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.cameraModelId = "", t.prototype.architectureInfo = h.emptyObject, t.prototype.digests = h.emptyArray, t.prototype.digestsWithTimestamp = h.emptyArray, t.prototype.isoValues = h.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = ge.create()), e.cameraModelId != null && Object.hasOwnProperty.call(e, "cameraModelId") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.cameraModelId), e.architectureInfo != null && Object.hasOwnProperty.call(e, "architectureInfo"))
          for (let r = Object.keys(e.architectureInfo), a = 0; a < r.length; ++a)
            n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[a]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(e.architectureInfo[r[a]]).ldelim();
        if (e.digests != null && e.digests.length)
          for (let r = 0; r < e.digests.length; ++r)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(e.digests[r]);
        if (e.isoValues != null && e.isoValues.length) {
          n.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let r = 0; r < e.isoValues.length; ++r)
            n.int32(e.isoValues[r]);
          n.ldelim();
        }
        if (e.digestsWithTimestamp != null && e.digestsWithTimestamp.length)
          for (let r = 0; r < e.digestsWithTimestamp.length; ++r)
            I.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.IosMetadata(), s, g;
        for (; e.pos < r; ) {
          let x = e.uint32();
          switch (x >>> 3) {
            case 1: {
              a.cameraModelId = e.string();
              break;
            }
            case 2: {
              a.architectureInfo === h.emptyObject && (a.architectureInfo = {});
              let C = e.uint32() + e.pos;
              for (s = "", g = !1; e.pos < C; ) {
                let d = e.uint32();
                switch (d >>> 3) {
                  case 1:
                    s = e.string();
                    break;
                  case 2:
                    g = e.bool();
                    break;
                  default:
                    e.skipType(d & 7);
                    break;
                }
              }
              a.architectureInfo[s] = g;
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(e.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(I.dot.DigestWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (x & 7) === 2) {
                let C = e.uint32() + e.pos;
                for (; e.pos < C; )
                  a.isoValues.push(e.int32());
              } else
                a.isoValues.push(e.int32());
              break;
            }
            default:
              e.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.cameraModelId != null && e.hasOwnProperty("cameraModelId") && !h.isString(e.cameraModelId))
          return "cameraModelId: string expected";
        if (e.architectureInfo != null && e.hasOwnProperty("architectureInfo")) {
          if (!h.isObject(e.architectureInfo))
            return "architectureInfo: object expected";
          let n = Object.keys(e.architectureInfo);
          for (let r = 0; r < n.length; ++r)
            if (typeof e.architectureInfo[n[r]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (e.digests != null && e.hasOwnProperty("digests")) {
          if (!Array.isArray(e.digests))
            return "digests: array expected";
          for (let n = 0; n < e.digests.length; ++n)
            if (!(e.digests[n] && typeof e.digests[n].length == "number" || h.isString(e.digests[n])))
              return "digests: buffer[] expected";
        }
        if (e.digestsWithTimestamp != null && e.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(e.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let n = 0; n < e.digestsWithTimestamp.length; ++n) {
            let r = I.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[n]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (e.isoValues != null && e.hasOwnProperty("isoValues")) {
          if (!Array.isArray(e.isoValues))
            return "isoValues: array expected";
          for (let n = 0; n < e.isoValues.length; ++n)
            if (!h.isInteger(e.isoValues[n]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.IosMetadata)
          return e;
        let n = new I.dot.v4.IosMetadata();
        if (e.cameraModelId != null && (n.cameraModelId = String(e.cameraModelId)), e.architectureInfo) {
          if (typeof e.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          n.architectureInfo = {};
          for (let r = Object.keys(e.architectureInfo), a = 0; a < r.length; ++a)
            n.architectureInfo[r[a]] = !!e.architectureInfo[r[a]];
        }
        if (e.digests) {
          if (!Array.isArray(e.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          n.digests = [];
          for (let r = 0; r < e.digests.length; ++r)
            typeof e.digests[r] == "string" ? h.base64.decode(e.digests[r], n.digests[r] = h.newBuffer(h.base64.length(e.digests[r])), 0) : e.digests[r].length >= 0 && (n.digests[r] = e.digests[r]);
        }
        if (e.digestsWithTimestamp) {
          if (!Array.isArray(e.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let r = 0; r < e.digestsWithTimestamp.length; ++r) {
            if (typeof e.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[r] = I.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[r]);
          }
        }
        if (e.isoValues) {
          if (!Array.isArray(e.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          n.isoValues = [];
          for (let r = 0; r < e.isoValues.length; ++r)
            n.isoValues[r] = e.isoValues[r] | 0;
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        (n.arrays || n.defaults) && (r.digests = [], r.isoValues = [], r.digestsWithTimestamp = []), (n.objects || n.defaults) && (r.architectureInfo = {}), n.defaults && (r.cameraModelId = ""), e.cameraModelId != null && e.hasOwnProperty("cameraModelId") && (r.cameraModelId = e.cameraModelId);
        let a;
        if (e.architectureInfo && (a = Object.keys(e.architectureInfo)).length) {
          r.architectureInfo = {};
          for (let s = 0; s < a.length; ++s)
            r.architectureInfo[a[s]] = e.architectureInfo[a[s]];
        }
        if (e.digests && e.digests.length) {
          r.digests = [];
          for (let s = 0; s < e.digests.length; ++s)
            r.digests[s] = n.bytes === String ? h.base64.encode(e.digests[s], 0, e.digests[s].length) : n.bytes === Array ? Array.prototype.slice.call(e.digests[s]) : e.digests[s];
        }
        if (e.isoValues && e.isoValues.length) {
          r.isoValues = [];
          for (let s = 0; s < e.isoValues.length; ++s)
            r.isoValues[s] = e.isoValues[s];
        }
        if (e.digestsWithTimestamp && e.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let s = 0; s < e.digestsWithTimestamp.length; ++s)
            r.digestsWithTimestamp[s] = I.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[s], n);
        }
        return r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosMetadata";
      }, t;
    }(), o.WebMetadata = function() {
      function t(e) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = h.emptyArray, t.prototype.hashedDetectedImages = h.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = h.emptyArray, t.prototype.detectionRecord = h.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = ge.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && I.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.availableCameraProperties != null && e.availableCameraProperties.length)
          for (let r = 0; r < e.availableCameraProperties.length; ++r)
            I.dot.v4.CameraProperties.encode(e.availableCameraProperties[r], n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (e.hashedDetectedImages != null && e.hashedDetectedImages.length)
          for (let r = 0; r < e.hashedDetectedImages.length; ++r)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(e.hashedDetectedImages[r]);
        if (e.detectionRecord != null && e.detectionRecord.length)
          for (let r = 0; r < e.detectionRecord.length; ++r)
            I.dot.v4.DetectedObject.encode(e.detectionRecord[r], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (e.hashedDetectedImagesWithTimestamp != null && e.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < e.hashedDetectedImagesWithTimestamp.length; ++r)
            I.dot.v4.HashedDetectedImageWithTimestamp.encode(e.hashedDetectedImagesWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.WebMetadata();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.currentCameraProperties = I.dot.v4.MediaTrackSettings.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.availableCameraProperties && a.availableCameraProperties.length || (a.availableCameraProperties = []), a.availableCameraProperties.push(I.dot.v4.CameraProperties.decode(e, e.uint32()));
              break;
            }
            case 3: {
              a.hashedDetectedImages && a.hashedDetectedImages.length || (a.hashedDetectedImages = []), a.hashedDetectedImages.push(e.string());
              break;
            }
            case 5: {
              a.hashedDetectedImagesWithTimestamp && a.hashedDetectedImagesWithTimestamp.length || (a.hashedDetectedImagesWithTimestamp = []), a.hashedDetectedImagesWithTimestamp.push(I.dot.v4.HashedDetectedImageWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              a.detectionRecord && a.detectionRecord.length || (a.detectionRecord = []), a.detectionRecord.push(I.dot.v4.DetectedObject.decode(e, e.uint32()));
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties")) {
          let n = I.dot.v4.MediaTrackSettings.verify(e.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (e.availableCameraProperties != null && e.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(e.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < e.availableCameraProperties.length; ++n) {
            let r = I.dot.v4.CameraProperties.verify(e.availableCameraProperties[n]);
            if (r)
              return "availableCameraProperties." + r;
          }
        }
        if (e.hashedDetectedImages != null && e.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(e.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let n = 0; n < e.hashedDetectedImages.length; ++n)
            if (!h.isString(e.hashedDetectedImages[n]))
              return "hashedDetectedImages: string[] expected";
        }
        if (e.hashedDetectedImagesWithTimestamp != null && e.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(e.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let n = 0; n < e.hashedDetectedImagesWithTimestamp.length; ++n) {
            let r = I.dot.v4.HashedDetectedImageWithTimestamp.verify(e.hashedDetectedImagesWithTimestamp[n]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (e.detectionRecord != null && e.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(e.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < e.detectionRecord.length; ++n) {
            let r = I.dot.v4.DetectedObject.verify(e.detectionRecord[n]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.WebMetadata)
          return e;
        let n = new I.dot.v4.WebMetadata();
        if (e.currentCameraProperties != null) {
          if (typeof e.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          n.currentCameraProperties = I.dot.v4.MediaTrackSettings.fromObject(e.currentCameraProperties);
        }
        if (e.availableCameraProperties) {
          if (!Array.isArray(e.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          n.availableCameraProperties = [];
          for (let r = 0; r < e.availableCameraProperties.length; ++r) {
            if (typeof e.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[r] = I.dot.v4.CameraProperties.fromObject(e.availableCameraProperties[r]);
          }
        }
        if (e.hashedDetectedImages) {
          if (!Array.isArray(e.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          n.hashedDetectedImages = [];
          for (let r = 0; r < e.hashedDetectedImages.length; ++r)
            n.hashedDetectedImages[r] = String(e.hashedDetectedImages[r]);
        }
        if (e.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(e.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          n.hashedDetectedImagesWithTimestamp = [];
          for (let r = 0; r < e.hashedDetectedImagesWithTimestamp.length; ++r) {
            if (typeof e.hashedDetectedImagesWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            n.hashedDetectedImagesWithTimestamp[r] = I.dot.v4.HashedDetectedImageWithTimestamp.fromObject(e.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (e.detectionRecord) {
          if (!Array.isArray(e.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let r = 0; r < e.detectionRecord.length; ++r) {
            if (typeof e.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[r] = I.dot.v4.DetectedObject.fromObject(e.detectionRecord[r]);
          }
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), n.defaults && (r.currentCameraProperties = null), e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = I.dot.v4.MediaTrackSettings.toObject(e.currentCameraProperties, n)), e.availableCameraProperties && e.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let a = 0; a < e.availableCameraProperties.length; ++a)
            r.availableCameraProperties[a] = I.dot.v4.CameraProperties.toObject(e.availableCameraProperties[a], n);
        }
        if (e.hashedDetectedImages && e.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let a = 0; a < e.hashedDetectedImages.length; ++a)
            r.hashedDetectedImages[a] = e.hashedDetectedImages[a];
        }
        if (e.detectionRecord && e.detectionRecord.length) {
          r.detectionRecord = [];
          for (let a = 0; a < e.detectionRecord.length; ++a)
            r.detectionRecord[a] = I.dot.v4.DetectedObject.toObject(e.detectionRecord[a], n);
        }
        if (e.hashedDetectedImagesWithTimestamp && e.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let a = 0; a < e.hashedDetectedImagesWithTimestamp.length; ++a)
            r.hashedDetectedImagesWithTimestamp[a] = I.dot.v4.HashedDetectedImageWithTimestamp.toObject(e.hashedDetectedImagesWithTimestamp[a], n);
        }
        return r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.WebMetadata";
      }, t;
    }(), o.HashedDetectedImageWithTimestamp = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = h.Long ? h.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ge.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.imageHash), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && n.uint32(
          /* id 2, wireType 0 =*/
          16
        ).uint64(e.timestampMillis), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.imageHash = e.string();
              break;
            }
            case 2: {
              a.timestampMillis = e.uint64();
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !h.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !h.isInteger(e.timestampMillis) && !(e.timestampMillis && h.isInteger(e.timestampMillis.low) && h.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let n = new I.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (n.imageHash = String(e.imageHash)), e.timestampMillis != null && (h.Long ? (n.timestampMillis = h.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? n.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? n.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (n.timestampMillis = new h.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if (n.defaults)
          if (r.imageHash = "", h.Long) {
            let a = new h.Long(0, 0, !0);
            r.timestampMillis = n.longs === String ? a.toString() : n.longs === Number ? a.toNumber() : a;
          } else
            r.timestampMillis = n.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (r.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? r.timestampMillis = n.longs === String ? String(e.timestampMillis) : e.timestampMillis : r.timestampMillis = n.longs === String ? h.Long.prototype.toString.call(e.timestampMillis) : n.longs === Number ? new h.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), o.MediaTrackSettings = function() {
      function t(n) {
        if (n)
          for (let r = Object.keys(n), a = 0; a < r.length; ++a)
            n[r[a]] != null && (this[r[a]] = n[r[a]]);
      }
      t.prototype.aspectRatio = null, t.prototype.autoGainControl = null, t.prototype.channelCount = null, t.prototype.deviceId = null, t.prototype.displaySurface = null, t.prototype.echoCancellation = null, t.prototype.facingMode = null, t.prototype.frameRate = null, t.prototype.groupId = null, t.prototype.height = null, t.prototype.noiseSuppression = null, t.prototype.sampleRate = null, t.prototype.sampleSize = null, t.prototype.width = null, t.prototype.deviceName = null;
      let e;
      return Object.defineProperty(t.prototype, "_aspectRatio", {
        get: h.oneOfGetter(e = ["aspectRatio"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: h.oneOfGetter(e = ["autoGainControl"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: h.oneOfGetter(e = ["channelCount"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: h.oneOfGetter(e = ["deviceId"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: h.oneOfGetter(e = ["displaySurface"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: h.oneOfGetter(e = ["echoCancellation"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: h.oneOfGetter(e = ["facingMode"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: h.oneOfGetter(e = ["frameRate"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: h.oneOfGetter(e = ["groupId"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_height", {
        get: h.oneOfGetter(e = ["height"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: h.oneOfGetter(e = ["noiseSuppression"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: h.oneOfGetter(e = ["sampleRate"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: h.oneOfGetter(e = ["sampleSize"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_width", {
        get: h.oneOfGetter(e = ["width"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: h.oneOfGetter(e = ["deviceName"]),
        set: h.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        return r || (r = ge.create()), n.aspectRatio != null && Object.hasOwnProperty.call(n, "aspectRatio") && r.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(n.aspectRatio), n.autoGainControl != null && Object.hasOwnProperty.call(n, "autoGainControl") && r.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(n.autoGainControl), n.channelCount != null && Object.hasOwnProperty.call(n, "channelCount") && r.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(n.channelCount), n.deviceId != null && Object.hasOwnProperty.call(n, "deviceId") && r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(n.deviceId), n.displaySurface != null && Object.hasOwnProperty.call(n, "displaySurface") && r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(n.displaySurface), n.echoCancellation != null && Object.hasOwnProperty.call(n, "echoCancellation") && r.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(n.echoCancellation), n.facingMode != null && Object.hasOwnProperty.call(n, "facingMode") && r.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(n.facingMode), n.frameRate != null && Object.hasOwnProperty.call(n, "frameRate") && r.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(n.frameRate), n.groupId != null && Object.hasOwnProperty.call(n, "groupId") && r.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(n.groupId), n.height != null && Object.hasOwnProperty.call(n, "height") && r.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(n.height), n.noiseSuppression != null && Object.hasOwnProperty.call(n, "noiseSuppression") && r.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(n.noiseSuppression), n.sampleRate != null && Object.hasOwnProperty.call(n, "sampleRate") && r.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(n.sampleRate), n.sampleSize != null && Object.hasOwnProperty.call(n, "sampleSize") && r.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(n.sampleSize), n.width != null && Object.hasOwnProperty.call(n, "width") && r.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(n.width), n.deviceName != null && Object.hasOwnProperty.call(n, "deviceName") && r.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(n.deviceName), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof y || (n = y.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new I.dot.v4.MediaTrackSettings();
        for (; n.pos < a; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              s.aspectRatio = n.double();
              break;
            }
            case 2: {
              s.autoGainControl = n.bool();
              break;
            }
            case 3: {
              s.channelCount = n.int32();
              break;
            }
            case 4: {
              s.deviceId = n.string();
              break;
            }
            case 5: {
              s.displaySurface = n.string();
              break;
            }
            case 6: {
              s.echoCancellation = n.bool();
              break;
            }
            case 7: {
              s.facingMode = n.string();
              break;
            }
            case 8: {
              s.frameRate = n.double();
              break;
            }
            case 9: {
              s.groupId = n.string();
              break;
            }
            case 10: {
              s.height = n.int32();
              break;
            }
            case 11: {
              s.noiseSuppression = n.bool();
              break;
            }
            case 12: {
              s.sampleRate = n.int32();
              break;
            }
            case 13: {
              s.sampleSize = n.int32();
              break;
            }
            case 14: {
              s.width = n.int32();
              break;
            }
            case 15: {
              s.deviceName = n.string();
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return s;
      }, t.decodeDelimited = function(n) {
        return n instanceof y || (n = new y(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        return typeof n != "object" || n === null ? "object expected" : n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && typeof n.aspectRatio != "number" ? "aspectRatio: number expected" : n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && typeof n.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : n.channelCount != null && n.hasOwnProperty("channelCount") && !h.isInteger(n.channelCount) ? "channelCount: integer expected" : n.deviceId != null && n.hasOwnProperty("deviceId") && !h.isString(n.deviceId) ? "deviceId: string expected" : n.displaySurface != null && n.hasOwnProperty("displaySurface") && !h.isString(n.displaySurface) ? "displaySurface: string expected" : n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && typeof n.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : n.facingMode != null && n.hasOwnProperty("facingMode") && !h.isString(n.facingMode) ? "facingMode: string expected" : n.frameRate != null && n.hasOwnProperty("frameRate") && typeof n.frameRate != "number" ? "frameRate: number expected" : n.groupId != null && n.hasOwnProperty("groupId") && !h.isString(n.groupId) ? "groupId: string expected" : n.height != null && n.hasOwnProperty("height") && !h.isInteger(n.height) ? "height: integer expected" : n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && typeof n.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : n.sampleRate != null && n.hasOwnProperty("sampleRate") && !h.isInteger(n.sampleRate) ? "sampleRate: integer expected" : n.sampleSize != null && n.hasOwnProperty("sampleSize") && !h.isInteger(n.sampleSize) ? "sampleSize: integer expected" : n.width != null && n.hasOwnProperty("width") && !h.isInteger(n.width) ? "width: integer expected" : n.deviceName != null && n.hasOwnProperty("deviceName") && !h.isString(n.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(n) {
        if (n instanceof I.dot.v4.MediaTrackSettings)
          return n;
        let r = new I.dot.v4.MediaTrackSettings();
        return n.aspectRatio != null && (r.aspectRatio = Number(n.aspectRatio)), n.autoGainControl != null && (r.autoGainControl = !!n.autoGainControl), n.channelCount != null && (r.channelCount = n.channelCount | 0), n.deviceId != null && (r.deviceId = String(n.deviceId)), n.displaySurface != null && (r.displaySurface = String(n.displaySurface)), n.echoCancellation != null && (r.echoCancellation = !!n.echoCancellation), n.facingMode != null && (r.facingMode = String(n.facingMode)), n.frameRate != null && (r.frameRate = Number(n.frameRate)), n.groupId != null && (r.groupId = String(n.groupId)), n.height != null && (r.height = n.height | 0), n.noiseSuppression != null && (r.noiseSuppression = !!n.noiseSuppression), n.sampleRate != null && (r.sampleRate = n.sampleRate | 0), n.sampleSize != null && (r.sampleSize = n.sampleSize | 0), n.width != null && (r.width = n.width | 0), n.deviceName != null && (r.deviceName = String(n.deviceName)), r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && (a.aspectRatio = r.json && !isFinite(n.aspectRatio) ? String(n.aspectRatio) : n.aspectRatio, r.oneofs && (a._aspectRatio = "aspectRatio")), n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && (a.autoGainControl = n.autoGainControl, r.oneofs && (a._autoGainControl = "autoGainControl")), n.channelCount != null && n.hasOwnProperty("channelCount") && (a.channelCount = n.channelCount, r.oneofs && (a._channelCount = "channelCount")), n.deviceId != null && n.hasOwnProperty("deviceId") && (a.deviceId = n.deviceId, r.oneofs && (a._deviceId = "deviceId")), n.displaySurface != null && n.hasOwnProperty("displaySurface") && (a.displaySurface = n.displaySurface, r.oneofs && (a._displaySurface = "displaySurface")), n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && (a.echoCancellation = n.echoCancellation, r.oneofs && (a._echoCancellation = "echoCancellation")), n.facingMode != null && n.hasOwnProperty("facingMode") && (a.facingMode = n.facingMode, r.oneofs && (a._facingMode = "facingMode")), n.frameRate != null && n.hasOwnProperty("frameRate") && (a.frameRate = r.json && !isFinite(n.frameRate) ? String(n.frameRate) : n.frameRate, r.oneofs && (a._frameRate = "frameRate")), n.groupId != null && n.hasOwnProperty("groupId") && (a.groupId = n.groupId, r.oneofs && (a._groupId = "groupId")), n.height != null && n.hasOwnProperty("height") && (a.height = n.height, r.oneofs && (a._height = "height")), n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && (a.noiseSuppression = n.noiseSuppression, r.oneofs && (a._noiseSuppression = "noiseSuppression")), n.sampleRate != null && n.hasOwnProperty("sampleRate") && (a.sampleRate = n.sampleRate, r.oneofs && (a._sampleRate = "sampleRate")), n.sampleSize != null && n.hasOwnProperty("sampleSize") && (a.sampleSize = n.sampleSize, r.oneofs && (a._sampleSize = "sampleSize")), n.width != null && n.hasOwnProperty("width") && (a.width = n.width, r.oneofs && (a._width = "width")), n.deviceName != null && n.hasOwnProperty("deviceName") && (a.deviceName = n.deviceName, r.oneofs && (a._deviceName = "deviceName")), a;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.MediaTrackSettings";
      }, t;
    }(), o.ImageBitmap = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.width = 0, t.prototype.height = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ge.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.width), e.height != null && Object.hasOwnProperty.call(e, "height") && n.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.height), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.ImageBitmap();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.width = e.int32();
              break;
            }
            case 2: {
              a.height = e.int32();
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !h.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !h.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.ImageBitmap)
          return e;
        let n = new I.dot.v4.ImageBitmap();
        return e.width != null && (n.width = e.width | 0), e.height != null && (n.height = e.height | 0), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.width = 0, r.height = 0), e.width != null && e.hasOwnProperty("width") && (r.width = e.width), e.height != null && e.hasOwnProperty("height") && (r.height = e.height), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    }(), o.CameraProperties = function() {
      function t(n) {
        if (n)
          for (let r = Object.keys(n), a = 0; a < r.length; ++a)
            n[r[a]] != null && (this[r[a]] = n[r[a]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: h.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: h.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        return r || (r = ge.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && I.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.cameraProperties != null && Object.hasOwnProperty.call(n, "cameraProperties") && I.dot.v4.MediaTrackSettings.encode(n.cameraProperties, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof y || (n = y.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new I.dot.v4.CameraProperties();
        for (; n.pos < a; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              s.cameraInitFrameResolution = I.dot.v4.ImageBitmap.decode(n, n.uint32());
              break;
            }
            case 2: {
              s.cameraProperties = I.dot.v4.MediaTrackSettings.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return s;
      }, t.decodeDelimited = function(n) {
        return n instanceof y || (n = new y(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution")) {
          let r = I.dot.v4.ImageBitmap.verify(n.cameraInitFrameResolution);
          if (r)
            return "cameraInitFrameResolution." + r;
        }
        if (n.cameraProperties != null && n.hasOwnProperty("cameraProperties")) {
          let r = I.dot.v4.MediaTrackSettings.verify(n.cameraProperties);
          if (r)
            return "cameraProperties." + r;
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof I.dot.v4.CameraProperties)
          return n;
        let r = new I.dot.v4.CameraProperties();
        if (n.cameraInitFrameResolution != null) {
          if (typeof n.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          r.cameraInitFrameResolution = I.dot.v4.ImageBitmap.fromObject(n.cameraInitFrameResolution);
        }
        if (n.cameraProperties != null) {
          if (typeof n.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          r.cameraProperties = I.dot.v4.MediaTrackSettings.fromObject(n.cameraProperties);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return r.defaults && (a.cameraProperties = null), n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution") && (a.cameraInitFrameResolution = I.dot.v4.ImageBitmap.toObject(n.cameraInitFrameResolution, r), r.oneofs && (a._cameraInitFrameResolution = "cameraInitFrameResolution")), n.cameraProperties != null && n.hasOwnProperty("cameraProperties") && (a.cameraProperties = I.dot.v4.MediaTrackSettings.toObject(n.cameraProperties, r)), a;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.CameraProperties";
      }, t;
    }(), o.DetectedObject = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.brightness = 0, t.prototype.sharpness = 0, t.prototype.hotspots = 0, t.prototype.confidence = 0, t.prototype.faceSize = 0, t.prototype.faceCenter = null, t.prototype.smallestEdge = 0, t.prototype.bottomLeft = null, t.prototype.bottomRight = null, t.prototype.topLeft = null, t.prototype.topRight = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ge.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && n.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(e.brightness), e.sharpness != null && Object.hasOwnProperty.call(e, "sharpness") && n.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(e.sharpness), e.hotspots != null && Object.hasOwnProperty.call(e, "hotspots") && n.uint32(
          /* id 3, wireType 5 =*/
          29
        ).float(e.hotspots), e.confidence != null && Object.hasOwnProperty.call(e, "confidence") && n.uint32(
          /* id 4, wireType 5 =*/
          37
        ).float(e.confidence), e.faceSize != null && Object.hasOwnProperty.call(e, "faceSize") && n.uint32(
          /* id 5, wireType 5 =*/
          45
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && I.dot.v4.Point.encode(e.faceCenter, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && n.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && I.dot.v4.Point.encode(e.bottomLeft, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && I.dot.v4.Point.encode(e.bottomRight, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && I.dot.v4.Point.encode(e.topLeft, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && I.dot.v4.Point.encode(e.topRight, n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.DetectedObject();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.brightness = e.float();
              break;
            }
            case 2: {
              a.sharpness = e.float();
              break;
            }
            case 3: {
              a.hotspots = e.float();
              break;
            }
            case 4: {
              a.confidence = e.float();
              break;
            }
            case 5: {
              a.faceSize = e.float();
              break;
            }
            case 6: {
              a.faceCenter = I.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              a.smallestEdge = e.float();
              break;
            }
            case 8: {
              a.bottomLeft = I.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              a.bottomRight = I.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              a.topLeft = I.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              a.topRight = I.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.brightness != null && e.hasOwnProperty("brightness") && typeof e.brightness != "number")
          return "brightness: number expected";
        if (e.sharpness != null && e.hasOwnProperty("sharpness") && typeof e.sharpness != "number")
          return "sharpness: number expected";
        if (e.hotspots != null && e.hasOwnProperty("hotspots") && typeof e.hotspots != "number")
          return "hotspots: number expected";
        if (e.confidence != null && e.hasOwnProperty("confidence") && typeof e.confidence != "number")
          return "confidence: number expected";
        if (e.faceSize != null && e.hasOwnProperty("faceSize") && typeof e.faceSize != "number")
          return "faceSize: number expected";
        if (e.faceCenter != null && e.hasOwnProperty("faceCenter")) {
          let n = I.dot.v4.Point.verify(e.faceCenter);
          if (n)
            return "faceCenter." + n;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let n = I.dot.v4.Point.verify(e.bottomLeft);
          if (n)
            return "bottomLeft." + n;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let n = I.dot.v4.Point.verify(e.bottomRight);
          if (n)
            return "bottomRight." + n;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let n = I.dot.v4.Point.verify(e.topLeft);
          if (n)
            return "topLeft." + n;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let n = I.dot.v4.Point.verify(e.topRight);
          if (n)
            return "topRight." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.DetectedObject)
          return e;
        let n = new I.dot.v4.DetectedObject();
        if (e.brightness != null && (n.brightness = Number(e.brightness)), e.sharpness != null && (n.sharpness = Number(e.sharpness)), e.hotspots != null && (n.hotspots = Number(e.hotspots)), e.confidence != null && (n.confidence = Number(e.confidence)), e.faceSize != null && (n.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          n.faceCenter = I.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (n.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          n.bottomLeft = I.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          n.bottomRight = I.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          n.topLeft = I.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          n.topRight = I.dot.v4.Point.fromObject(e.topRight);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.brightness = 0, r.sharpness = 0, r.hotspots = 0, r.confidence = 0, r.faceSize = 0, r.faceCenter = null, r.smallestEdge = 0, r.bottomLeft = null, r.bottomRight = null, r.topLeft = null, r.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (r.brightness = n.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (r.sharpness = n.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (r.hotspots = n.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (r.confidence = n.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (r.faceSize = n.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (r.faceCenter = I.dot.v4.Point.toObject(e.faceCenter, n)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (r.smallestEdge = n.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (r.bottomLeft = I.dot.v4.Point.toObject(e.bottomLeft, n)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (r.bottomRight = I.dot.v4.Point.toObject(e.bottomRight, n)), e.topLeft != null && e.hasOwnProperty("topLeft") && (r.topLeft = I.dot.v4.Point.toObject(e.topLeft, n)), e.topRight != null && e.hasOwnProperty("topRight") && (r.topRight = I.dot.v4.Point.toObject(e.topRight, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    }(), o.Point = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.x = 0, t.prototype.y = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ge.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && n.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(e.x), e.y != null && Object.hasOwnProperty.call(e, "y") && n.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(e.y), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.Point();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.x = e.float();
              break;
            }
            case 2: {
              a.y = e.float();
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.x != null && e.hasOwnProperty("x") && typeof e.x != "number" ? "x: number expected" : e.y != null && e.hasOwnProperty("y") && typeof e.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.Point)
          return e;
        let n = new I.dot.v4.Point();
        return e.x != null && (n.x = Number(e.x)), e.y != null && (n.y = Number(e.y)), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.x = 0, r.y = 0), e.x != null && e.hasOwnProperty("x") && (r.x = n.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (r.y = n.json && !isFinite(e.y) ? String(e.y) : e.y), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    }(), o.FaceContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ge.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && I.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && I.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.FaceContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.image = I.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.metadata = I.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let n = I.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = I.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.FaceContent)
          return e;
        let n = new I.dot.v4.FaceContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          n.image = I.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          n.metadata = I.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = I.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = I.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceContent";
      }, t;
    }(), o.DocumentContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ge.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && I.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && I.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.DocumentContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.image = I.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.metadata = I.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let n = I.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = I.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.DocumentContent)
          return e;
        let n = new I.dot.v4.DocumentContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          n.image = I.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          n.metadata = I.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = I.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = I.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), o.Blob = function() {
      function t(n) {
        if (n)
          for (let r = Object.keys(n), a = 0; a < r.length; ++a)
            n[r[a]] != null && (this[r[a]] = n[r[a]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: h.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent"]),
        set: h.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        return r || (r = ge.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && I.dot.v4.DocumentContent.encode(n.documentContent, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.faceContent != null && Object.hasOwnProperty.call(n, "faceContent") && I.dot.v4.FaceContent.encode(n.faceContent, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(n, "magnifeyeLivenessContent") && I.dot.v4.MagnifEyeLivenessContent.encode(n.magnifeyeLivenessContent, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.smileLivenessContent != null && Object.hasOwnProperty.call(n, "smileLivenessContent") && I.dot.v4.SmileLivenessContent.encode(n.smileLivenessContent, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(n, "eyeGazeLivenessContent") && I.dot.v4.EyeGazeLivenessContent.encode(n.eyeGazeLivenessContent, r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof y || (n = y.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new I.dot.v4.Blob();
        for (; n.pos < a; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              s.documentContent = I.dot.v4.DocumentContent.decode(n, n.uint32());
              break;
            }
            case 5: {
              s.eyeGazeLivenessContent = I.dot.v4.EyeGazeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 2: {
              s.faceContent = I.dot.v4.FaceContent.decode(n, n.uint32());
              break;
            }
            case 3: {
              s.magnifeyeLivenessContent = I.dot.v4.MagnifEyeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 4: {
              s.smileLivenessContent = I.dot.v4.SmileLivenessContent.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return s;
      }, t.decodeDelimited = function(n) {
        return n instanceof y || (n = new y(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        let r = {};
        if (n.documentContent != null && n.hasOwnProperty("documentContent")) {
          r.blob = 1;
          {
            let a = I.dot.v4.DocumentContent.verify(n.documentContent);
            if (a)
              return "documentContent." + a;
          }
        }
        if (n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = I.dot.v4.EyeGazeLivenessContent.verify(n.eyeGazeLivenessContent);
            if (a)
              return "eyeGazeLivenessContent." + a;
          }
        }
        if (n.faceContent != null && n.hasOwnProperty("faceContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = I.dot.v4.FaceContent.verify(n.faceContent);
            if (a)
              return "faceContent." + a;
          }
        }
        if (n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = I.dot.v4.MagnifEyeLivenessContent.verify(n.magnifeyeLivenessContent);
            if (a)
              return "magnifeyeLivenessContent." + a;
          }
        }
        if (n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = I.dot.v4.SmileLivenessContent.verify(n.smileLivenessContent);
            if (a)
              return "smileLivenessContent." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof I.dot.v4.Blob)
          return n;
        let r = new I.dot.v4.Blob();
        if (n.documentContent != null) {
          if (typeof n.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          r.documentContent = I.dot.v4.DocumentContent.fromObject(n.documentContent);
        }
        if (n.eyeGazeLivenessContent != null) {
          if (typeof n.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          r.eyeGazeLivenessContent = I.dot.v4.EyeGazeLivenessContent.fromObject(n.eyeGazeLivenessContent);
        }
        if (n.faceContent != null) {
          if (typeof n.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          r.faceContent = I.dot.v4.FaceContent.fromObject(n.faceContent);
        }
        if (n.magnifeyeLivenessContent != null) {
          if (typeof n.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          r.magnifeyeLivenessContent = I.dot.v4.MagnifEyeLivenessContent.fromObject(n.magnifeyeLivenessContent);
        }
        if (n.smileLivenessContent != null) {
          if (typeof n.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          r.smileLivenessContent = I.dot.v4.SmileLivenessContent.fromObject(n.smileLivenessContent);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return n.documentContent != null && n.hasOwnProperty("documentContent") && (a.documentContent = I.dot.v4.DocumentContent.toObject(n.documentContent, r), r.oneofs && (a.blob = "documentContent")), n.faceContent != null && n.hasOwnProperty("faceContent") && (a.faceContent = I.dot.v4.FaceContent.toObject(n.faceContent, r), r.oneofs && (a.blob = "faceContent")), n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent") && (a.magnifeyeLivenessContent = I.dot.v4.MagnifEyeLivenessContent.toObject(n.magnifeyeLivenessContent, r), r.oneofs && (a.blob = "magnifeyeLivenessContent")), n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent") && (a.smileLivenessContent = I.dot.v4.SmileLivenessContent.toObject(n.smileLivenessContent, r), r.oneofs && (a.blob = "smileLivenessContent")), n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent") && (a.eyeGazeLivenessContent = I.dot.v4.EyeGazeLivenessContent.toObject(n.eyeGazeLivenessContent, r), r.oneofs && (a.blob = "eyeGazeLivenessContent")), a;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.Blob";
      }, t;
    }(), o.EyeGazeLivenessContent = function() {
      function t(e) {
        if (this.segments = [], e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.segments = h.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = ge.create()), e.segments != null && e.segments.length)
          for (let r = 0; r < e.segments.length; ++r)
            I.dot.v4.EyeGazeLivenessSegment.encode(e.segments[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && I.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.EyeGazeLivenessContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.segments && a.segments.length || (a.segments = []), a.segments.push(I.dot.v4.EyeGazeLivenessSegment.decode(e, e.uint32()));
              break;
            }
            case 2: {
              a.metadata = I.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.segments != null && e.hasOwnProperty("segments")) {
          if (!Array.isArray(e.segments))
            return "segments: array expected";
          for (let n = 0; n < e.segments.length; ++n) {
            let r = I.dot.v4.EyeGazeLivenessSegment.verify(e.segments[n]);
            if (r)
              return "segments." + r;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = I.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.EyeGazeLivenessContent)
          return e;
        let n = new I.dot.v4.EyeGazeLivenessContent();
        if (e.segments) {
          if (!Array.isArray(e.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          n.segments = [];
          for (let r = 0; r < e.segments.length; ++r) {
            if (typeof e.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[r] = I.dot.v4.EyeGazeLivenessSegment.fromObject(e.segments[r]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          n.metadata = I.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.segments = []), n.defaults && (r.metadata = null), e.segments && e.segments.length) {
          r.segments = [];
          for (let a = 0; a < e.segments.length; ++a)
            r.segments[a] = I.dot.v4.EyeGazeLivenessSegment.toObject(e.segments[a], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = I.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), o.EyeGazeLivenessSegment = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ge.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && I.dot.Image.encode(e.image, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.corner = e.int32();
              break;
            }
            case 2: {
              a.image = I.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.corner != null && e.hasOwnProperty("corner"))
          switch (e.corner) {
            default:
              return "corner: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
              break;
          }
        if (e.image != null && e.hasOwnProperty("image")) {
          let n = I.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.EyeGazeLivenessSegment)
          return e;
        let n = new I.dot.v4.EyeGazeLivenessSegment();
        switch (e.corner) {
          default:
            if (typeof e.corner == "number") {
              n.corner = e.corner;
              break;
            }
            break;
          case "TOP_LEFT":
          case 0:
            n.corner = 0;
            break;
          case "TOP_RIGHT":
          case 1:
            n.corner = 1;
            break;
          case "BOTTOM_RIGHT":
          case 2:
            n.corner = 2;
            break;
          case "BOTTOM_LEFT":
          case 3:
            n.corner = 3;
            break;
        }
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessSegment.image: object expected");
          n.image = I.dot.Image.fromObject(e.image);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.corner = n.enums === String ? "TOP_LEFT" : 0, r.image = null), e.corner != null && e.hasOwnProperty("corner") && (r.corner = n.enums === String ? I.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : I.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (r.image = I.dot.Image.toObject(e.image, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), o.EyeGazeLivenessCorner = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    }(), o.SmileLivenessContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ge.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && I.dot.Image.encode(e.neutralExpressionFaceImage, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.smileExpressionFaceImage != null && Object.hasOwnProperty.call(e, "smileExpressionFaceImage") && I.dot.Image.encode(e.smileExpressionFaceImage, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && I.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.SmileLivenessContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.neutralExpressionFaceImage = I.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.smileExpressionFaceImage = I.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              a.metadata = I.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage")) {
          let n = I.dot.Image.verify(e.neutralExpressionFaceImage);
          if (n)
            return "neutralExpressionFaceImage." + n;
        }
        if (e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage")) {
          let n = I.dot.Image.verify(e.smileExpressionFaceImage);
          if (n)
            return "smileExpressionFaceImage." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = I.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.SmileLivenessContent)
          return e;
        let n = new I.dot.v4.SmileLivenessContent();
        if (e.neutralExpressionFaceImage != null) {
          if (typeof e.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          n.neutralExpressionFaceImage = I.dot.Image.fromObject(e.neutralExpressionFaceImage);
        }
        if (e.smileExpressionFaceImage != null) {
          if (typeof e.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          n.smileExpressionFaceImage = I.dot.Image.fromObject(e.smileExpressionFaceImage);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          n.metadata = I.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = I.dot.Image.toObject(e.neutralExpressionFaceImage, n)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = I.dot.Image.toObject(e.smileExpressionFaceImage, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = I.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), o;
  }(), i.Image = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.bytes = h.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = ge.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof y || (t = y.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new I.dot.Image();
      for (; t.pos < n; ) {
        let a = t.uint32();
        switch (a >>> 3) {
          case 1: {
            r.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof y || (t = new y(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || h.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof I.dot.Image)
        return t;
      let e = new I.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? h.base64.decode(t.bytes, e.bytes = h.newBuffer(h.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = h.newBuffer(n.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? h.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, o;
  }(), i.Int32List = function() {
    function o(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.items = h.emptyArray, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      if (e || (e = ge.create()), t.items != null && t.items.length) {
        e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let n = 0; n < t.items.length; ++n)
          e.int32(t.items[n]);
        e.ldelim();
      }
      return e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof y || (t = y.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new I.dot.Int32List();
      for (; t.pos < n; ) {
        let a = t.uint32();
        switch (a >>> 3) {
          case 1: {
            if (r.items && r.items.length || (r.items = []), (a & 7) === 2) {
              let s = t.uint32() + t.pos;
              for (; t.pos < s; )
                r.items.push(t.int32());
            } else
              r.items.push(t.int32());
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof y || (t = new y(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.items != null && t.hasOwnProperty("items")) {
        if (!Array.isArray(t.items))
          return "items: array expected";
        for (let e = 0; e < t.items.length; ++e)
          if (!h.isInteger(t.items[e]))
            return "items: integer[] expected";
      }
      return null;
    }, o.fromObject = function(t) {
      if (t instanceof I.dot.Int32List)
        return t;
      let e = new I.dot.Int32List();
      if (t.items) {
        if (!Array.isArray(t.items))
          throw TypeError(".dot.Int32List.items: array expected");
        e.items = [];
        for (let n = 0; n < t.items.length; ++n)
          e.items[n] = t.items[n] | 0;
      }
      return e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      if ((e.arrays || e.defaults) && (n.items = []), t.items && t.items.length) {
        n.items = [];
        for (let r = 0; r < t.items.length; ++r)
          n.items[r] = t.items[r];
      }
      return n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, o;
  }(), i.Platform = function() {
    const o = {}, t = Object.create(o);
    return t[o[0] = "WEB"] = 0, t[o[1] = "ANDROID"] = 1, t[o[2] = "IOS"] = 2, t;
  }(), i.DigestWithTimestamp = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.digest = h.newBuffer([]), o.prototype.timestampMillis = h.Long ? h.Long.fromBits(0, 0, !0) : 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = ge.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof y || (t = y.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new I.dot.DigestWithTimestamp();
      for (; t.pos < n; ) {
        let a = t.uint32();
        switch (a >>> 3) {
          case 1: {
            r.digest = t.bytes();
            break;
          }
          case 2: {
            r.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof y || (t = new y(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || h.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !h.isInteger(t.timestampMillis) && !(t.timestampMillis && h.isInteger(t.timestampMillis.low) && h.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof I.dot.DigestWithTimestamp)
        return t;
      let e = new I.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? h.base64.decode(t.digest, e.digest = h.newBuffer(h.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (h.Long ? (e.timestampMillis = h.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new h.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      if (e.defaults)
        if (e.bytes === String ? n.digest = "" : (n.digest = [], e.bytes !== Array && (n.digest = h.newBuffer(n.digest))), h.Long) {
          let r = new h.Long(0, 0, !0);
          n.timestampMillis = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r;
        } else
          n.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (n.digest = e.bytes === String ? h.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? n.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : n.timestampMillis = e.longs === String ? h.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new h.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, o;
  }(), i;
})();
async function FI(i) {
  const { Image: o } = yn, t = await i.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const r = o.verify(n);
  if (r) throw Error(r);
  const a = {};
  return a.bytes = e, o.create(a);
}
async function XI(i) {
  const { v4: { Metadata: o } } = yn, t = { ...i };
  t.platform = yn.Platform.WEB;
  const e = t, n = o.verify(e);
  if (n) throw Error(n);
  return o.create(e);
}
async function MI(i) {
  const { Content: o } = yn, { iv: t, key: e, message: n } = await _u(i), r = { token: new Uint8Array(e), iv: t, schemaVersion: Rx, bytes: new Uint8Array(n) }, a = o.verify(r);
  if (a) throw Error(a);
  const s = o.create(r);
  return o.encode(s).finish();
}
function jI({ documentContent: i, faceContent: o, magnifeyeLivenessContent: t, smileLivenessContent: e }) {
  const { Blob: n } = yn.v4, r = {};
  r.documentContent = i, r.faceContent = o, r.magnifeyeLivenessContent = t, r.smileLivenessContent = e;
  const a = r, s = n.verify(a);
  if (s) throw Error(s);
  const g = n.create(a);
  return n.encode(g).finish();
}
async function UI(i, o) {
  const { DocumentContent: t } = yn.v4, e = await FI(i), n = await XI(o), r = {};
  r.image = e, r.metadata = n;
  const a = r, s = t.verify(a);
  if (s) throw Error(s);
  const g = t.create(a), x = {};
  return x.documentContent = g, jI(x);
}
async function JI(i, o) {
  const t = await UI(i, o);
  return MI(t);
}
const zI = () => {
  const { appTier: i, isLicenseValidated: o } = $r(), { analytics: t } = mx(), { appState: e, freemiumOverlayState: n } = si(), { documentCameraOptions: r } = eg(), { cameraFacing: a, onPhotoTaken: s, sessionToken: g, thresholds: x, wasmDirectoryPath: C } = r, { controller: d } = wI(x, C), m = pn(
    ({ content: N, controller: G, imageData: j }) => {
      wu(M0.DOCUMENT, G.getCandidateSelectionImages()), s(j, N);
    },
    [s]
  ), { cameraResolution: f, cameraService: w, detectionDetails: k, videoRef: T } = Pu({
    analytics: t,
    cameraFacing: a,
    controller: d,
    sessionToken: g,
    createProtoMessage: JI,
    onPhotoTaken: m
  }), { shouldMirror: S } = Gu(st.CONTROL, w);
  Su(st.CAMERA_PROPS_CHANGED, {
    cameraResolution: f,
    shouldMirror: S
  }), ye(() => () => {
    Un.getInstance().restart();
  }, []);
  const H = n !== qi.HIDDEN && i !== hr.PREMIUM && f, Y = n === qi.VISIBLE, z = f && o && e === Ye.RUNNING;
  return /* @__PURE__ */ Z(et, { children: [
    H && /* @__PURE__ */ Z(Mu, { fullOverlay: Y, resolution: f }),
    /* @__PURE__ */ Z(gx, { ref: T, $isImageMirror: S, $isVisible: o, autoPlay: !0, muted: !0, playsInline: !0 }),
    z && /* @__PURE__ */ Z(
      Lu,
      {
        appTier: i,
        cameraResolution: f,
        detectionDetails: k,
        isImageMirror: S
      }
    )
  ] });
}, QI = ({ ...i }) => /* @__PURE__ */ Z(mu, { cameraOptions: i, children: /* @__PURE__ */ Z(zI, {}) });
function $I({ initAppState: i }) {
  const [o, t] = je(i), [e, n] = je(), [r, a] = je(!1), s = {};
  return s.appState = o, s.setAppState = t, s.error = e, s.setError = n, s.isCameraReady = r, s.setIsCameraReady = a, s;
}
function _I() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(3236 * -1 + 3759 * -2 + -2154 * -5);
}
function qI() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const o = _I();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function ed(i, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : i;
}
function td(i) {
  return i > 5949 * -1 + 5 * -282 + -2473 * -3 ? ">1m" : i > 8478 + 7211 * 1 + -7822 * 2 ? ">45" : i > 422 * 3 + 1906 + -1 * 3142 ? ">30" : "" + i;
}
const nd = (i) => Math.round(i / 500) * 500 / (8819 + 141 * -54 + -205), Vn = (i) => i ? i <= 4352 + 21 * -379 + -41 * -88 ? Math.round(i * (4183 * 2 + -182 + -8164)) / (-271 * 17 + -9686 + 14313) : Math.round(i / (-18 * 122 + -898 + 131 * 24)) * 50 : 3946 + 1797 * 1 + 1 * -5743, id = (i) => Math.round(i * (3577 * -1 + 3261 * 2 + -2943)) / (-2 * 2570 + -55 * 155 + -79 * -173);
function od(i) {
  return i !== Ye.RUNNING ? qi.VISIBLE : qi.VISIBLE_WITH_MASK;
}
function rd({ onError: i }) {
  const { appState: o, error: t, isCameraReady: e, setAppState: n, setError: r, setIsCameraReady: a } = $I({
    initAppState: Ye.LOADING
  }), s = od(o), g = pn(
    (C) => {
      ws(st.STATE_CHANGED, { appState: Ye.ERROR, error: C }), a(!1), i(C), r(C), n(Ye.ERROR);
    },
    [i, r, n, a]
  ), x = pn(
    (C) => {
      ws(st.STATE_CHANGED, { appState: C }), n(C);
    },
    [n]
  );
  return {
    appState: o,
    freemiumOverlayState: s,
    isCameraReady: e,
    setIsCameraReady: a,
    handleAppStateChange: x,
    handleError: g,
    error: t
  };
}
var Og = ((i) => (i.AUTO_CAPTURE = "auto-capture", i))(Og || {});
class ad {
  constructor() {
    X(this, "appKey", "");
    X(this, "deviceId", "");
  }
  async countlyFetch(o) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const n = e, r = "https://innovatrics.count.ly/i?", a = {};
    a.app_key = this.appKey, a.device_id = this.deviceId;
    const s = Gi(a);
    await fetch("" + r + s + "&" + o, n);
  }
  async init(o, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = o;
    const e = { _app_version: Q0() }, n = { organization: $0(window.location.href) }, r = Gi({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const t = Gi(o);
    await this.countlyFetch(t);
  }
  async sendAutoCaptureEvent(o, t) {
    const e = {};
    e.key = Og.AUTO_CAPTURE, e.count = 1, e.dur = t, e.segmentation = o;
    const n = [e], r = Gi({ events: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
}
const Hi = new ad();
class sd {
  constructor() {
    X(this, "countly", Hi);
  }
  createSegmentation(o) {
    return { appVersion: Q0(), ...o };
  }
  init(o) {
    if (ou()) return;
    const t = qI();
    Hi.init(t, o);
  }
  endSession() {
    Hi.endSession();
  }
  sendLicenseResultData(o, t) {
    const e = {};
    e.licenseTier = o, e.customer = t;
    const n = this.createSegmentation(e);
    Hi.sendAutoCaptureEvent(n);
  }
}
class gd extends sd {
  trackCaptureProcess({ averageFps: o, captureProcessDurationInMs: t, detection: e, deviceName: n, facingMode: r, imageResolution: a, instructionSet: s }) {
    if (!e) return;
    const g = nd(t), x = this.createSegmentation({ hotspots: Vn(e.hotspots), brightness: Vn(e.brightness), confidence: Vn(e.confidence), sharpness: Vn(e.sharpness), smallestEdge: Vn(e.smallestEdge), camera: ed(n, r), imageResolution: a.width + "x" + a.height, averageFps: id(o), captureTime: td(g), instructionSet: s });
    this.countly.sendAutoCaptureEvent(x, g);
  }
}
const cd = new gd();
let U;
const pt = new Array(-3482 * 1 + 3467 * -2 + 5272 * 2).fill(void 0);
pt.push(void 0, null, !0, !1);
function Wr(i) {
  return pt[i];
}
let mt = 12 * -11 + -1051 * -1 + -1 * 919, Yn = null;
function Mi() {
  return (Yn === null || Yn.byteLength === 3861 + -3861 * 1) && (Yn = new Uint8Array(U.memory.buffer)), Yn;
}
const ji = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, ld = typeof ji.encodeInto == "function" ? function(i, o) {
  return ji.encodeInto(i, o);
} : function(i, o) {
  const t = ji.encode(i);
  o.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function ro(i, o, t) {
  if (t === void 0) {
    const s = ji.encode(i), g = o(s.length, 1 * 6077 + 1131 + -7207 * 1) >>> 0;
    return Mi().subarray(g, g + s.length).set(s), mt = s.length, g;
  }
  let e = i.length, n = o(e, 34 * 45 + -1 * 193 + -334 * 4) >>> -13 * 769 + 341 * -22 + 17499;
  const r = Mi();
  let a = -2 * 767 + -9440 + -1 * -10974;
  for (; a < e; a++) {
    const s = i.charCodeAt(a);
    if (s > -278 * -12 + -570 + -2639 * 1) break;
    r[n + a] = s;
  }
  if (a !== e) {
    a !== 337 + -1 * 337 && (i = i.slice(a)), n = t(n, e, e = a + i.length * (-3 * -2486 + -6126 + 1 * -1329), -2 * -259 + 250 * -8 + 1 * 1483) >>> -1 * 3423 + -3474 + 121 * 57;
    const s = Mi().subarray(n + a, n + e), g = ld(i, s);
    a += g.written;
  }
  return mt = a, n;
}
function Kg(i) {
  return i == null;
}
let Ln = null;
function St() {
  return (Ln === null || Ln.byteLength === 0) && (Ln = new Int32Array(U.memory.buffer)), Ln;
}
let Mn = pt.length;
function xd(i) {
  i < 583 * -3 + 4567 * 1 + 2686 * -1 || (pt[i] = Mn, Mn = i);
}
function Vg(i) {
  const o = Wr(i);
  return xd(i), o;
}
const Hr = {};
Hr.ignoreBOM = !0, Hr.fatal = !0;
const Rg = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Hr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Rg.decode();
function Or(i, o) {
  return i = i >>> 7477 * 1 + 6746 + -14223, Rg.decode(Mi().subarray(i, i + o));
}
function Kr(i) {
  Mn === pt.length && pt.push(pt.length + (5 * 569 + 6030 + 87 * -102));
  const o = Mn;
  return Mn = pt[o], pt[o] = i, o;
}
let Dn = null;
function Tg() {
  return (Dn === null || Dn.byteLength === -5 * -1652 + -5771 + -19 * 131) && (Dn = new Uint32Array(U.memory.buffer)), Dn;
}
function Ns(i, o) {
  const t = o(i.length * 4, 4) >>> 0, e = Tg();
  for (let n = 577 * -7 + -1205 * 4 + 3 * 2953; n < i.length; n++)
    e[t / (-4803 + 19 * 253) + n] = Kr(i[n]);
  return mt = i.length, t;
}
function Fs(i, o) {
  i = i >>> -1602 * -3 + 1 * -9642 + 403 * 12;
  const t = Tg(), e = t.subarray(i / (-3920 * 2 + -831 + 8675), i / (2649 + 23 * -115) + o), n = [];
  for (let r = -1826 + 1826 * 1; r < e.length; r++)
    n.push(Vg(e[r]));
  return n;
}
function ud(i, o) {
  const t = ro(i, U.__wbindgen_malloc, U.__wbindgen_realloc), e = mt, n = ro(o, U.__wbindgen_malloc, U.__wbindgen_realloc), r = mt, a = U.validate_license(t, e, n, r);
  return ca.__wrap(a);
}
class ca {
  static __wrap(o) {
    o = o >>> -9007 + 59 * -159 + 9194 * 2;
    const t = Object.create(ca.prototype);
    return t.__wbg_ptr = o, t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = -31 * -127 + 1 * -3065 + 8 * -109, o;
  }
  free() {
    const o = this.__destroy_into_raw();
    U.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, n) {
    var r = Kg(t) ? 0 : ro(t, U.__wbindgen_malloc, U.__wbindgen_realloc), a = mt;
    const s = Ns(e, U.__wbindgen_malloc), g = mt, x = Ns(n, U.__wbindgen_malloc), C = mt, d = U.licensevalidationresult_new(o, r, a, s, g, x, C);
    return this.__wbg_ptr = d >>> 5989 + 1 * -5989, this;
  }
  get is_valid() {
    return U.licensevalidationresult_is_valid(this.__wbg_ptr) !== 2107 + 43 * -49;
  }
  get features_json() {
    try {
      const e = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = St()[e / (44 * -155 + -365 + 7189 * 1) + (-6015 + -8 * 787 + -13 * -947)], t = St()[e / (1 * 8955 + 1 * -4511 + -4440) + (9313 * 1 + 6351 + -15663)];
      let n;
      return o !== -197 * -10 + 8563 * -1 + 1 * 6593 && (n = Or(o, t).slice(), U.__wbindgen_free(o, t * (-7065 * -1 + -667 * 11 + 7 * 39), 4813 + 103 * 67 + -11713)), n;
    } finally {
      U.__wbindgen_add_to_stack_pointer(270 * 10 + 5903 + -277 * 31);
    }
  }
  get errors() {
    try {
      const n = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_errors(n, this.__wbg_ptr);
      var o = St()[n / (-3141 * 2 + 126 * -15 + 2 * 4088) + (353 * 12 + -206 * -31 + -1 * 10622)], t = St()[n / (137 * -1 + 6972 + -6831) + (-1 * 6115 + -1 * 4493 + 10609)], e = Fs(o, t).slice();
      return U.__wbindgen_free(o, t * (-238 * 11 + -7048 + 9670), -8449 + 81 * -114 + 17687), e;
    } finally {
      U.__wbindgen_add_to_stack_pointer(-1 * -6317 + 1 * -4577 + -1 * 1724);
    }
  }
  get warnings() {
    try {
      const n = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var o = St()[n / (-17 * 76 + -1 * 1509 + 2805) + (-8778 * 1 + 1 * 3631 + 5147)], t = St()[n / (6812 + -11 * -301 + -10119) + (-3 * -1396 + 1419 + -5606)], e = Fs(o, t).slice();
      return U.__wbindgen_free(o, t * 4, -9280 + -2321 * -4), e;
    } finally {
      U.__wbindgen_add_to_stack_pointer(-2 * -4286 + -1 * -64 + 4 * -2155);
    }
  }
}
async function Id(i, o) {
  if (typeof Response == "function" && i instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(i, o);
    } catch (e) {
      if (i.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
      else throw e;
    }
    const t = await i.arrayBuffer();
    return await WebAssembly.instantiate(t, o);
  } else {
    const t = await WebAssembly.instantiate(i, o);
    if (t instanceof WebAssembly.Instance) {
      const e = {};
      return e.instance = t, e.module = i, e;
    } else return t;
  }
}
function dd() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(o, t) {
    const e = Wr(t), n = typeof e == "string" ? e : void 0;
    var r = Kg(n) ? 0 : ro(n, U.__wbindgen_malloc, U.__wbindgen_realloc), a = mt;
    St()[o / (34 * -64 + -2787 + 4967 * 1) + (1 * -4057 + 190 + 3868)] = a, St()[o / (-2291 + 6 * 473 + 3 * -181) + (22 * 9 + 2981 + -3179)] = r;
  }, i.wbg.__wbindgen_object_drop_ref = function(o) {
    Vg(o);
  }, i.wbg.__wbindgen_string_new = function(o, t) {
    const e = Or(o, t);
    return Kr(e);
  }, i.wbg.__wbg_new0_c0e40662db0749ee = function() {
    return Kr(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_af7ca51c0bcefa08 = function(o) {
    return Wr(o).getTime();
  }, i.wbg.__wbindgen_throw = function(o, t) {
    throw new Error(Or(o, t));
  }, i;
}
function Cd(i, o) {
  return U = i.exports, Eg.__wbindgen_wasm_module = o, Ln = null, Dn = null, Yn = null, U;
}
async function Eg(i) {
  if (U !== void 0) return U;
  typeof i > "u" && (i = new URL("dot_embedded_bg.wasm", import.meta.url));
  const o = dd();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await Id(await i, o);
  return Cd(t, e);
}
class pd {
  constructor() {
    X(this, "wasmInitialized", !1);
  }
  async init(o = "/wasm") {
    try {
      const t = o + "/" + Lx;
      await Eg(t), this.wasmInitialized = !0;
    } catch {
      this.wasmInitialized = !1, console.warn("dot_embedded_bg.wasm initialization failed! Please check documentation for more information.");
    }
  }
  isWasmInitialized() {
    return this.wasmInitialized;
  }
}
class Qo extends Error {
  constructor() {
    super(...arguments);
    X(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
var In;
class Xs {
  constructor(o) {
    Se(this, In);
    this.licenseResult = o;
    try {
      me(this, In, o.features_json && JSON.parse(o.features_json));
    } catch (t) {
      console.info(t);
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
    return $(this, In);
  }
  get isAnalyticsDisabled() {
    var o, t;
    return !!((t = (o = $(this, In)) == null ? void 0 : o.features) != null && t["realTimeTransactionReportingDisabled"]);
  }
}
In = new WeakMap();
class hd {
  constructor(o) {
    X(this, "license");
    X(this, "licenseResult");
    this.dotEmbedded = o;
  }
  async init(o = "/wasm", t = "/license.lic") {
    await Promise.allSettled([this.dotEmbedded.init(o), this.loadLicense(t)]), this.validateLicense();
  }
  async fetchLicense(o) {
    try {
      const t = await fetch(o);
      if (!t.ok) throw new Error("DOT License not found.");
      this.license = await t.text();
    } catch (t) {
      this.license = void (-101 * -43 + -8581 + -163 * -26), console.error(t);
    }
  }
  async loadLicense(o) {
    if (this.licenseResult = void (9662 + -4 * -2357 + -19090), !o) {
      console.info("No DOT license provided."), this.license = void (3 * 187 + 281 * -9 + -246 * -8);
      return;
    }
    await this.fetchLicense(o);
  }
  printErrors(o) {
    o.forEach((t) => console.warn(t));
  }
  printWarnings(o) {
    o.forEach((t) => console.info(t));
  }
  getDomain() {
    return window.location.hostname;
  }
  validateLicense() {
    try {
      if (!this.license) throw new Qo("No DOT license found.");
      if (!this.dotEmbedded.isWasmInitialized()) throw new Qo("Wasm not initialized.");
      this.licenseResult = new Xs(ud(this.license, this.getDomain())), this.printErrors(this.licenseResult.errors), this.printWarnings(this.licenseResult.warnings);
    } catch (o) {
      o instanceof Qo ? o.log() : o instanceof Error && console.error(o);
      const t = {};
      t.is_valid = !1, t.errors = [], t.warnings = [], t.features_json = void (-4481 + 1 * 4481), t.free = function() {
      }, this.licenseResult = new Xs(t);
    }
  }
  getLicenseResult() {
    return this.licenseResult;
  }
  getCustomerName() {
    var o;
    if (this.license)
      try {
        const t = JSON.parse(this.license);
        return (o = t == null ? void 0 : t.contract) == null ? void 0 : o.customer;
      } catch (t) {
        t instanceof Error && re.logError(t);
        return;
      }
  }
}
const go = class go extends hd {
  static getInstance() {
    if (!this._instance) {
      const o = new pd();
      this._instance = new go(o);
    }
    return this._instance;
  }
};
X(go, "_instance");
let Vr = go;
const fd = ({ children: i }) => {
  const o = kt(null);
  return Ku(o, st.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ Z(sx, { ref: o, children: i });
}, md = ({ cameraOptions: i }) => i ? /* @__PURE__ */ Z(ex, { target: i.styleTarget, children: /* @__PURE__ */ Z(
  yx,
  {
    licensePath: i.licensePath,
    licenseValidator: Vr.getInstance(),
    wasmDirectoryPath: i.wasmDirectoryPath,
    children: /* @__PURE__ */ Z(Sx, { analytics: cd, appKey: "065cf6e242fc5e785cd17eebfbfbbd212a33133b", children: /* @__PURE__ */ Z(
      dx,
      {
        value: rd({
          onError: i.onError
        }),
        children: /* @__PURE__ */ Z(X0, { children: /* @__PURE__ */ Z(fd, { children: /* @__PURE__ */ Z(QI, { ...i }) }) })
      }
    ) })
  }
) }) : null;
xc(md, "x-dot-document-auto-capture", ["cameraOptions"]);
