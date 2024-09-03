var _c = Object.defineProperty;
var wi = (x) => {
  throw TypeError(x);
};
var Qc = (x, o, t) => o in x ? _c(x, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[o] = t;
var M = (x, o, t) => Qc(x, typeof o != "symbol" ? o + "" : o, t), Si = (x, o, t) => o.has(x) || wi("Cannot " + t);
var z = (x, o, t) => (Si(x, o, "read from private field"), t ? t.call(x) : o.get(x)), Re = (x, o, t) => o.has(x) ? wi("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(x) : o.set(x, t), ye = (x, o, t, e) => (Si(x, o, "write to private field"), e ? e.call(x, t) : o.set(x, t), t);
var vn, N, Da, Ya, e0, Bi, Fa, Lo, vr, Eo, No, Xa, un = {}, Ma = [], zc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, jx = Array.isArray;
function Rt(x, o) {
  for (var t in o) x[t] = o[t];
  return x;
}
function ja(x) {
  var o = x.parentNode;
  o && o.removeChild(x);
}
function Ne(x, o, t) {
  var e, n, r, i = {};
  for (r in o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : i[r] = o[r];
  if (arguments.length > -4 * 1889 + -2 * -4101 + -644 && (i.children = arguments.length > -2 * -1827 + 3 * -329 + 333 * -8 ? vn.call(arguments, 2451 * 3 + 1258 + -8609 * 1) : t), typeof x == "function" && x.defaultProps != null)
    for (r in x.defaultProps) void (-27 * 184 + 2195 + 2773) === i[r] && (i[r] = x.defaultProps[r]);
  return sn(x, i, e, n, null);
}
function sn(x, o, t, e, n) {
  var r = {};
  r.type = x, r.props = o, r.key = t, r.ref = e, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (-5993 * 1 + -2 * -422 + 1 * 5149), r.__c = null, r.constructor = void (-7570 * 1 + -2129 + 3 * 3233), r.__v = n ?? ++Da, r.__i = -(43 * 199 + -3266 + -5290), r.__u = 0;
  var i = r;
  return n == null && N.vnode != null && N.vnode(i), i;
}
function qc() {
  var x = {};
  return x.current = null, x;
}
function Ct(x) {
  return x.children;
}
function rt(x, o) {
  this.props = x, this.context = o;
}
function s0(x, o) {
  if (o == null) return x.__ ? s0(x.__, x.__i + 1) : null;
  for (var t; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) return t.__e;
  return typeof x.type == "function" ? s0(x) : null;
}
function Ja(x) {
  var o, t;
  if ((x = x.__) != null && x.__c != null) {
    for (x.__e = x.__c.base = null, o = -6253 + 13 * 481; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) {
      x.__e = x.__c.base = t.__e;
      break;
    }
    return Ja(x);
  }
}
function Do(x) {
  (!x.__d && (x.__d = !0) && e0.push(x) && !Cx.__r++ || Bi !== N.debounceRendering) && ((Bi = N.debounceRendering) || Fa)(Cx);
}
function Cx() {
  var x, o, t, e, n, r, i, a;
  for (e0.sort(Lo); x = e0.shift(); ) x.__d && (o = e0.length, e = void (-13 * 535 + -4991 + 11946), r = (n = (t = x).__v).__e, i = [], a = [], t.__P && ((e = Rt({}, n)).__v = n.__v + (1283 * 6 + -7974 + 277), N.vnode && N.vnode(e), wr(t.__P, e, n, t.__n, t.__P.namespaceURI, -4135 + -19 * 103 + -4 * -1531 & n.__u ? [r] : null, i, r ?? s0(n), !!(-1022 * -3 + -107 * 41 + -123 * -11 & n.__u), a), e.__v = n.__v, e.__.__k[e.__i] = e, Qa(i, e, a), e.__e != r && Ja(e)), e0.length > o && e0.sort(Lo));
  Cx.__r = 1366 + -1 * 1366;
}
function Ua(x, o, t, e, n, r, i, a, s, c, u) {
  var g, p, l, C, m, A = e && e.__k || Ma, d = o.length;
  for (t.__d = s, $c(t, o, A), s = t.__d, g = 4621 * 1 + 1504 + -49 * 125; g < d; g++) (l = t.__k[g]) != null && typeof l != "boolean" && typeof l != "function" && (p = -(-973 * -2 + 2239 + -4184) === l.__i ? un : A[l.__i] || un, l.__i = g, wr(x, l, p, n, r, i, a, s, c, u), C = l.__e, l.ref && p.ref != l.ref && (p.ref && Sr(p.ref, null, l), u.push(l.ref, l.__c || C, l)), m == null && C != null && (m = C), 65536 & l.__u || p.__k === l.__k ? (s && typeof l.type == "string" && !x.contains(s) && (s = s0(p)), s = _a(l, s, x)) : typeof l.type == "function" && l.__d !== void 0 ? s = l.__d : C && (s = C.nextSibling), l.__d = void 0, l.__u &= -(290381 + 178 * -1685 + 206158));
  t.__d = s, t.__e = m;
}
function $c(x, o, t) {
  var e, n, r, i, a, s = o.length, c = t.length, u = c, g = 1552 + -4 * 1142 + 3016;
  for (x.__k = [], e = 0; e < s; e++) i = e + g, (n = x.__k[e] = (n = o[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? sn(null, n, null, null, null) : jx(n) ? sn(Ct, { children: n }, null, null, null) : void (7 * -1031 + -4568 + 11785) === n.constructor && n.__b > -1826 * -3 + 8632 + -14110 ? sn(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = x, n.__b = x.__b + 1, a = eg(n, t, i, u), n.__i = a, r = null, a !== -1 && (u--, (r = t[a]) && (r.__u |= 131072)), r == null || r.__v === null ? (-(4211 + -4523 * 1 + 313) == a && g--, typeof n.type != "function" && (n.__u |= 13 * -829 + -105854 + 182167)) : a !== i && (a == i - 1 ? g = a - i : a == i + (7222 + -8609 * -1 + -15830) ? g++ : a > i ? u > s - i ? g += a - i : g-- : a < i && g++, a !== e + g && (n.__u |= 1117 * 78 + 425 * 107 + -67065))) : (r = t[i]) && r.key == null && r.__e && -1523 * 2 + -5147 + 8193 == (-25793 + 12280 * -5 + 218265 & r.__u) && (r.__e == x.__d && (x.__d = s0(r)), Yo(r, r, !(1903 + 634 * -3)), t[i] = null, u--);
  if (u)
    for (e = 3830 * -2 + -8467 * -1 + 807 * -1; e < c; e++) (r = t[e]) != null && 24 * 384 + 799 * -10 + 2 * -613 == (466 * -57 + -462 * -231 + 86 * 592 & r.__u) && (r.__e == x.__d && (x.__d = s0(r)), Yo(r, r));
}
function _a(x, o, t) {
  var e, n;
  if (typeof x.type == "function") {
    for (e = x.__k, n = 0; e && n < e.length; n++) e[n] && (e[n].__ = x, o = _a(e[n], o, t));
    return o;
  }
  x.__e != o && (t.insertBefore(x.__e, o || null), o = x.__e);
  do
    o = o && o.nextSibling;
  while (o != null && -5562 + -7643 * -1 + -2073 === o.nodeType);
  return o;
}
function Kt(x, o) {
  return o = o || [], x == null || typeof x == "boolean" || (jx(x) ? x.some(function(t) {
    Kt(t, o);
  }) : o.push(x)), o;
}
function eg(x, o, t, e) {
  var n = x.key, r = x.type, i = t - (-205 * -23 + 13 * 18 + -4948), a = t + 1, s = o[t];
  if (s === null || s && n == s.key && r === s.type && !(23893 * -1 + -92870 * 1 + 247835 & s.__u)) return t;
  if (e > (s != null && 6751 * -1 + 1 * -3548 + -3 * -3433 == (113 * 651 + -36962 + 94471 & s.__u) ? -8699 * 1 + -8641 + 17341 : 8 * -222 + -8874 + 10650)) for (; i >= 0 || a < o.length; ) {
    if (i >= 5569 + 1 * 939 + -6508) {
      if ((s = o[i]) && -2770 + -8728 * 1 + 11498 == (-27777 * 2 + -2243 * -35 + 108121 & s.__u) && n == s.key && r === s.type) return i;
      i--;
    }
    if (a < o.length) {
      if ((s = o[a]) && 299 * 7 + -1 * 2857 + 4 * 191 == (-65512 * 3 + -8 * -31695 + 104 * 712 & s.__u) && n == s.key && r === s.type) return a;
      a++;
    }
  }
  return -1;
}
function ki(x, o, t) {
  o[4404 + -2202 * 2] === "-" ? x.setProperty(o, t ?? "") : x[o] = t == null ? "" : typeof t != "number" || zc.test(o) ? t : t + "px";
}
function Dn(x, o, t, e, n) {
  var r;
  e: if (o === "style")
    if (typeof t == "string") x.style.cssText = t;
    else {
      if (typeof e == "string" && (x.style.cssText = e = ""), e)
        for (o in e) t && o in t || ki(x.style, o, "");
      if (t)
        for (o in t) e && t[o] === e[o] || ki(x.style, o, t[o]);
    }
  else if (o[2486 + -1 * 2486] === "o" && o[-32 * 256 + 1 * 79 + 8114] === "n") r = o !== (o = o.replace(/(PointerCapture)$|Capture$/i, "$1")), o = o.toLowerCase() in x || o === "onFocusOut" || o === "onFocusIn" ? o.toLowerCase().slice(2) : o.slice(-1 * -6325 + 663 + -6986), x.l || (x.l = {}), x.l[o + r] = t, t ? e ? t.u = e.u : (t.u = vr, x.addEventListener(o, r ? No : Eo, r)) : x.removeEventListener(o, r ? No : Eo, r);
  else {
    if (n == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in x) try {
      x[o] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || !(9447 + -9 * 906 + -1292) === t && o[-4283 + 1 * -7908 + 3 * 4065] !== "-" ? x.removeAttribute(o) : x.setAttribute(o, o == "popover" && -4386 + -4387 * -1 == t ? "" : t));
  }
}
function Gi(x) {
  return function(o) {
    if (this.l) {
      var t = this.l[o.type + x];
      if (o.t == null) o.t = vr++;
      else if (o.t < t.u) return;
      return t(N.event ? N.event(o) : o);
    }
  };
}
function wr(x, o, t, e, n, r, i, a, s, c) {
  var u, g, p, l, C, m, A, d, v, G, Y, j, F, Z, J, be, Q = o.type;
  if (void (-1 * -1268 + -8778 + 7510) !== o.constructor) return null;
  -21 * 127 + -146 * 7 + -347 * -11 & t.__u && (s = !!(-7382 + 86 * -26 + 9650 & t.__u), r = [a = o.__e = t.__e]), (u = N.__b) && u(o);
  e: if (typeof Q == "function") try {
    if (d = o.props, v = "prototype" in Q && Q.prototype.render, G = (u = Q.contextType) && e[u.__c], Y = u ? G ? G.props.value : u.__ : e, t.__c ? A = (g = o.__c = t.__c).__ = g.__E : (v ? o.__c = g = new Q(d, Y) : (o.__c = g = new rt(d, Y), g.constructor = Q, g.render = ng), G && G.sub(g), g.props = d, g.state || (g.state = {}), g.context = Y, g.__n = e, p = g.__d = !(-8998 + 1 * -6374 + 18 * 854), g.__h = [], g._sb = []), v && g.__s == null && (g.__s = g.state), v && Q.getDerivedStateFromProps != null && (g.__s == g.state && (g.__s = Rt({}, g.__s)), Rt(g.__s, Q.getDerivedStateFromProps(d, g.__s))), l = g.props, C = g.state, g.__v = o, p) v && Q.getDerivedStateFromProps == null && g.componentWillMount != null && g.componentWillMount(), v && g.componentDidMount != null && g.__h.push(g.componentDidMount);
    else {
      if (v && Q.getDerivedStateFromProps == null && d !== l && g.componentWillReceiveProps != null && g.componentWillReceiveProps(d, Y), !g.__e && (g.shouldComponentUpdate != null && !(7663 + -1 * 1469 + -11 * 563) === g.shouldComponentUpdate(d, g.__s, Y) || o.__v === t.__v)) {
        for (o.__v !== t.__v && (g.props = d, g.state = g.__s, g.__d = !(146 * -29 + 1 * -4406 + 8641 * 1)), o.__e = t.__e, o.__k = t.__k, o.__k.forEach(function(ue) {
          ue && (ue.__ = o);
        }), j = 457 + 1 * -457; j < g._sb.length; j++) g.__h.push(g._sb[j]);
        g._sb = [], g.__h.length && i.push(g);
        break e;
      }
      g.componentWillUpdate != null && g.componentWillUpdate(d, g.__s, Y), v && g.componentDidUpdate != null && g.__h.push(function() {
        g.componentDidUpdate(l, C, m);
      });
    }
    if (g.context = Y, g.props = d, g.__P = x, g.__e = !(-5417 + -18 * -301), F = N.__r, Z = 315 + -2246 * -4 + 9299 * -1, v) {
      for (g.state = g.__s, g.__d = !(4996 + -8 * -974 + -12787), F && F(o), u = g.render(g.props, g.state, g.context), J = 0; J < g._sb.length; J++) g.__h.push(g._sb[J]);
      g._sb = [];
    } else do
      g.__d = !(3988 + -7 * 1386 + -1143 * -5), F && F(o), u = g.render(g.props, g.state, g.context), g.state = g.__s;
    while (g.__d && ++Z < -7708 + 1 * 834 + 1 * 6899);
    g.state = g.__s, g.getChildContext != null && (e = Rt(Rt({}, e), g.getChildContext())), v && !p && g.getSnapshotBeforeUpdate != null && (m = g.getSnapshotBeforeUpdate(l, C)), Ua(x, jx(be = u != null && u.type === Ct && u.key == null ? u.props.children : u) ? be : [be], o, t, e, n, r, i, a, s, c), g.base = o.__e, o.__u &= -(9777 + -9616 * 1), g.__h.length && i.push(g), A && (g.__E = g.__ = null);
  } catch (ue) {
    o.__v = null, s || r != null ? (o.__e = a, o.__u |= s ? -1 * 8597 + -199 * 25 + -4 * -3433 : -249 * 37 + -549 * 1 + 118 * 83, r[r.indexOf(a)] = null) : (o.__e = t.__e, o.__k = t.__k), N.__e(ue, o, t);
  }
  else r == null && o.__v === t.__v ? (o.__k = t.__k, o.__e = t.__e) : o.__e = tg(t.__e, o, t, e, n, r, i, s, c);
  (u = N.diffed) && u(o);
}
function Qa(x, o, t) {
  o.__d = void (-7 * 131 + 9303 + -8386);
  for (var e = 2958 + -2 * 2289 + -5 * -324; e < t.length; e++) Sr(t[e], t[++e], t[++e]);
  N.__c && N.__c(o, x), x.some(function(n) {
    try {
      x = n.__h, n.__h = [], x.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      N.__e(r, n.__v);
    }
  });
}
function tg(x, o, t, e, n, r, i, a, s) {
  var c, u, g, p, l, C, m, A = t.props, d = o.props, v = o.type;
  if (v === "svg" ? n = "http://www.w3.org/2000/svg" : v === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), r != null) {
    for (c = -341 + 1 * -8285 + -4313 * -2; c < r.length; c++) if ((l = r[c]) && "setAttribute" in l == !!v && (v ? l.localName === v : -3 * -1293 + 14 * 131 + 5 * -1142 === l.nodeType)) {
      x = l, r[c] = null;
      break;
    }
  }
  if (x == null) {
    if (v === null) return document.createTextNode(d);
    x = document.createElementNS(n, v, d.is && d), r = null, a = !(1 * 9214 + -2 * 2697 + -3819);
  }
  if (v === null) A === d || a && x.data === d || (x.data = d);
  else {
    if (r = r && vn.call(x.childNodes), A = t.props || un, !a && r != null)
      for (A = {}, c = -1 * -8737 + 10 * -751 + -1227; c < x.attributes.length; c++) A[(l = x.attributes[c]).name] = l.value;
    for (c in A) if (l = A[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") g = l;
      else if (c !== "key" && !(c in d)) {
        if (c == "value" && "defaultValue" in d || c == "checked" && "defaultChecked" in d) continue;
        Dn(x, c, null, l, n);
      }
    }
    for (c in d) l = d[c], c == "children" ? p = l : c == "dangerouslySetInnerHTML" ? u = l : c == "value" ? C = l : c == "checked" ? m = l : c === "key" || a && typeof l != "function" || A[c] === l || Dn(x, c, l, A[c], n);
    if (u) a || g && (u.__html === g.__html || u.__html === x.innerHTML) || (x.innerHTML = u.__html), o.__k = [];
    else if (g && (x.innerHTML = ""), Ua(x, jx(p) ? p : [p], o, t, e, v === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, r, i, r ? r[-35 * 54 + -296 * 32 + -299 * -38] : t.__k && s0(t, -1381 * 3 + -6305 * -1 + -2162), a, s), r != null)
      for (c = r.length; c--; ) r[c] != null && ja(r[c]);
    a || (c = "value", void (-5108 + -31 * -117 + -1 * -1481) !== C && (C !== x[c] || v === "progress" && !C || v === "option" && C !== A[c]) && Dn(x, c, C, A[c], n), c = "checked", void (1 * 6458 + -3669 + -2789) !== m && m !== x[c] && Dn(x, c, m, A[c], n));
  }
  return x;
}
function Sr(x, o, t) {
  try {
    typeof x == "function" ? x(o) : x.current = o;
  } catch (e) {
    N.__e(e, t);
  }
}
function Yo(x, o, t) {
  var e, n;
  if (N.unmount && N.unmount(x), (e = x.ref) && (e.current && e.current !== x.__e || Sr(e, null, o)), (e = x.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (r) {
      N.__e(r, o);
    }
    e.base = e.__P = null;
  }
  if (e = x.__k)
    for (n = 1251 * -1 + 8951 + -350 * 22; n < e.length; n++) e[n] && Yo(e[n], o, t || typeof x.type != "function");
  t || x.__e == null || ja(x.__e), x.__c = x.__ = x.__e = x.__d = void (-32 * 119 + 7027 + -3219);
}
function ng(x, o, t) {
  return this.constructor(x, t);
}
function Xt(x, o, t) {
  var e, n, r, i;
  N.__ && N.__(x, o), n = (e = typeof t == "function") ? null : t && t.__k || o.__k, r = [], i = [], wr(o, x = (!e && t || o).__k = Ne(Ct, null, [x]), n || un, un, o.namespaceURI, !e && t ? [t] : n ? null : o.firstChild ? vn.call(o.childNodes) : null, r, !e && t ? t : n ? n.__e : o.firstChild, e, i), Qa(r, x, i);
}
function Br(x, o) {
  Xt(x, o, Br);
}
function kr(x, o, t) {
  var e, n, r, i, a = Rt({}, x.props);
  for (r in x.type && x.type.defaultProps && (i = x.type.defaultProps), o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : a[r] = o[r] === void 0 && void (-1637 * 2 + 3856 * 2 + 634 * -7) !== i ? i[r] : o[r];
  return arguments.length > -3702 + -4 * 1763 + -2689 * -4 && (a.children = arguments.length > 3 ? vn.call(arguments, 2) : t), sn(x.type, a, e || x.key, n || x.ref, null);
}
function wn(x, o) {
  var t = { __c: o = "__cC" + Xa++, __: x, Consumer: function(e, n) {
    return e.children(n);
  }, Provider: function(e) {
    var n, r;
    return this.getChildContext || (n = [], (r = {})[o] = this, this.getChildContext = function() {
      return r;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && n.some(function(a) {
        a.__e = !0, Do(a);
      });
    }, this.sub = function(i) {
      n.push(i);
      var a = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        n && n.splice(n.indexOf(i), 1), a && a.call(i);
      };
    }), e.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
vn = Ma.slice, N = { __e: function(x, o, t, e) {
  for (var n, r, i; o = o.__; ) if ((n = o.__c) && !n.__) try {
    if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(x)), i = n.__d), n.componentDidCatch != null && (n.componentDidCatch(x, e || {}), i = n.__d), i) return n.__E = n;
  } catch (a) {
    x = a;
  }
  throw x;
} }, Da = 4265 + 5 * -853, Ya = function(x) {
  return x != null && x.constructor == null;
}, rt.prototype.setState = function(x, o) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Rt({}, this.state), typeof x == "function" && (x = x(Rt({}, t), this.props)), x && Rt(t, x), x != null && this.__v && (o && this._sb.push(o), Do(this));
}, rt.prototype.forceUpdate = function(x) {
  this.__v && (this.__e = !(10230 + 30 * -341), x && this.__h.push(x), Do(this));
}, rt.prototype.render = Ct, e0 = [], Fa = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Lo = function(x, o) {
  return x.__v.__b - o.__v.__b;
}, Cx.__r = -9871 + -23 * -166 + 6053, vr = -9836 + -1 * -9836, Eo = Gi(!(-1306 + -9 * -443 + -20 * 134)), No = Gi(!(714 + 119 * 1 + 49 * -17)), Xa = 2347 * 1 + 3287 + -1 * 5634;
function Gr() {
  return (Gr = Object.assign ? Object.assign.bind() : function(x) {
    for (var o = 1; o < arguments.length; o++) {
      var t = arguments[o];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (x[e] = t[e]);
    }
    return x;
  }).apply(this, arguments);
}
var xg = ["context", "children"];
function og(x) {
  this.getChildContext = function() {
    return x.context;
  };
  var o = x.children, t = function(e, n) {
    if (e == null) return {};
    var r, i, a = {}, s = Object.keys(e);
    for (i = 0; i < s.length; i++) n.indexOf(r = s[i]) >= 1036 * -1 + 6586 + -5550 || (a[r] = e[r]);
    return a;
  }(x, xg);
  return kr(o, t);
}
function rg() {
  var x = {};
  x.detail = {}, x.bubbles = !(-7239 + 19 * 381), x.cancelable = !(8145 + 1 * 2917 + 1 * -11062);
  var o = new CustomEvent("_preact", x);
  this.dispatchEvent(o), this._vdom = Ne(og, Gr({}, this._props, { context: o.detail.context }), function t(e, n) {
    if (54 * 151 + -8877 + 726 === e.nodeType) return e.data;
    if (-6323 * 1 + -1 * -8621 + -2297 !== e.nodeType) return null;
    var r = [], i = {}, a = -1 * -661 + 9515 + -10176, s = e.attributes, c = e.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[za(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var u = t(c[a], null), g = c[a].slot;
      g ? i[g] = Ne(Oi, { name: g }, u) : r[a] = u;
    }
    var p = n ? Ne(Oi, null, r) : r;
    return Ne(n || e.nodeName.toLowerCase(), i, p);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Br : Xt)(this._vdom, this._root);
}
function za(x) {
  return x.replace(/-(\w)/g, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function ig(x, o, t) {
  if (this._vdom) {
    var e = {};
    e[x] = t = t ?? void (6943 + 5864 * -1 + -1079), e[za(x)] = t, this._vdom = kr(this._vdom, e), Xt(this._vdom, this._root);
  }
}
function ag() {
  Xt(this._vdom = null, this._root);
}
function Oi(x, o) {
  var t = this;
  return Ne("slot", Gr({}, x, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = o;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function sg(x, o, t, e) {
  function n() {
    var r = Reflect.construct(HTMLElement, [], n);
    return r._vdomComponent = x, r._root = r, r;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = rg, n.prototype.attributeChangedCallback = ig, n.prototype.disconnectedCallback = ag, t = t || x.observedAttributes || Object.keys(x.propTypes || {}), n.observedAttributes = t, t.forEach(function(r) {
    Object.defineProperty(n.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(i) {
      this._vdom ? this.attributeChangedCallback(r, null, i) : (this._props || (this._props = {}), this._props[r] = i, this.connectedCallback());
      var a = typeof i;
      i != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(r, i);
    } });
  }), customElements.define(o, n);
}
var cg = -4992 + 3 * 548 + 3348;
function H(x, o, t, e, n, r) {
  o || (o = {});
  var i, a, s = o;
  if ("ref" in s)
    for (a in s = {}, o) a == "ref" ? i = o[a] : s[a] = o[a];
  var c = {};
  c.type = x, c.props = s, c.key = t, c.ref = i, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__d = void (-2 * -3351 + -602 + -6100), c.__c = null, c.constructor = void (1373 * -6 + 1951 + 6287), c.__v = --cg, c.__i = -(-3 * -1783 + -7111 + 43 * 41), c.__u = 0, c.__source = n, c.__self = r;
  var u = c;
  if (typeof x == "function" && (i = x.defaultProps))
    for (a in i) void (-4 * -1479 + 8322 + -14238) === s[a] && (s[a] = i[a]);
  return N.vnode && N.vnode(u), u;
}
var _e = function() {
  return _e = Object.assign || function(o) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (o[r] = t[r]);
    }
    return o;
  }, _e.apply(this, arguments);
};
function H0(x, o, t) {
  if (t || arguments.length === 2) for (var e = 0, n = o.length, r; e < n; e++)
    (r || !(e in o)) && (r || (r = Array.prototype.slice.call(o, 0, e)), r[e] = o[e]);
  return x.concat(r || Array.prototype.slice.call(o));
}
function gg(x) {
  var o = Object.create(null);
  return function(t) {
    return o[t] === void 0 && (o[t] = x(t)), o[t];
  };
}
var dg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ug = gg(function(x) {
  return dg.test(x) || x.charCodeAt(12599 + 293 * -43) === 748 + 49 * -13 && x.charCodeAt(-6407 + 9355 * -1 + 15763) === 110 && x.charCodeAt(-2238 + -70 * -32) < 91;
}), Mt, oe, ho, Zi, R0 = 0, qa = [], ae = N, Hi = ae.__b, Ri = ae.__r, Ki = ae.diffed, Pi = ae.__c, Vi = ae.unmount, Ti = ae.__;
function D0(x, o) {
  ae.__h && ae.__h(oe, x, R0 || o), R0 = -3797 * 1 + 5 * -109 + 4342;
  var t = {};
  t.__ = [], t.__h = [];
  var e = oe.__H || (oe.__H = t);
  return x >= e.__.length && e.__.push({}), e.__[x];
}
function it(x) {
  return R0 = -4673 + 57 * 82, Or(ts, x);
}
function Or(x, o, t) {
  var e = D0(Mt++, 2);
  if (e.t = x, !e.__c && (e.__ = [t ? t(o) : ts(void (-1 * -1637 + -4007 * 2 + 6377), o), function(a) {
    var s = e.__N ? e.__N[0] : e.__[0], c = e.t(s, a);
    s !== c && (e.__N = [c, e.__[730 + 2 * 4003 + 1747 * -5]], e.__c.setState({}));
  }], e.__c = oe, !oe.u)) {
    var n = function(a, s, c) {
      if (!e.__c.__H) return !0;
      var u = e.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (u.every(function(p) {
        return !p.__N;
      })) return !r || r.call(this, a, s, c);
      var g = !(5361 + -9579 * -1 + 1 * -14939);
      return u.forEach(function(p) {
        if (p.__N) {
          var l = p.__[0];
          p.__ = p.__N, p.__N = void 0, l !== p.__[0] && (g = !0);
        }
      }), !(!g && e.__c.props === a) && (!r || r.call(this, a, s, c));
    };
    oe.u = !(-2 * 1253 + -11 * -218 + 108);
    var r = oe.shouldComponentUpdate, i = oe.componentWillUpdate;
    oe.componentWillUpdate = function(a, s, c) {
      if (this.__e) {
        var u = r;
        r = void 0, n(a, s, c), r = u;
      }
      i && i.call(this, a, s, c);
    }, oe.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function Oe(x, o) {
  var t = D0(Mt++, 3);
  !ae.__s && Zr(t.__H, o) && (t.__ = x, t.i = o, oe.__H.__h.push(t));
}
function Y0(x, o) {
  var t = D0(Mt++, 4);
  !ae.__s && Zr(t.__H, o) && (t.__ = x, t.i = o, oe.__h.push(t));
}
function jt(x) {
  return R0 = 5, $e(function() {
    var o = {};
    return o.current = x, o;
  }, []);
}
function $a(x, o, t) {
  R0 = -113 * 71 + -67 * -43 + 5148, Y0(function() {
    return typeof x == "function" ? (x(o()), function() {
      return x(null);
    }) : x ? (x.current = o(), function() {
      return x.current = null;
    }) : void 0;
  }, t == null ? t : t.concat(x));
}
function $e(x, o) {
  var t = D0(Mt++, 7);
  return Zr(t.__H, o) && (t.__ = x(), t.__H = o, t.__h = x), t.__;
}
function K0(x, o) {
  return R0 = -1786 * -5 + 7259 + -16181, $e(function() {
    return x;
  }, o);
}
function u0(x) {
  var o = oe.context[x.__c], t = D0(Mt++, 1 * -5344 + -860 * -4 + 1913 * 1);
  return t.c = x, o ? (t.__ == null && (t.__ = !(-2893 * 3 + -2456 * 3 + 16047 * 1), o.sub(oe)), o.props.value) : x.__;
}
function px(x, o) {
  ae.useDebugValue && ae.useDebugValue(o ? o(x) : x);
}
function es() {
  var x = D0(Mt++, 11);
  if (!x.__) {
    for (var o = oe.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [-4025 + 175 * 23, 7641 + 2 * -1433 + -4775]);
    x.__ = "P" + t[51 * -124 + 1 * -7043 + -13367 * -1] + "-" + t[-2371 * 2 + 3 * -827 + 1 * 7224]++;
  }
  return x.__;
}
function lg() {
  for (var x; x = qa.shift(); ) if (x.__P && x.__H) try {
    x.__H.__h.forEach(tx), x.__H.__h.forEach(Fo), x.__H.__h = [];
  } catch (o) {
    x.__H.__h = [], ae.__e(o, x.__v);
  }
}
ae.__b = function(x) {
  oe = null, Hi && Hi(x);
}, ae.__ = function(x, o) {
  x && o.__k && o.__k.__m && (x.__m = o.__k.__m), Ti && Ti(x, o);
}, ae.__r = function(x) {
  Ri && Ri(x), Mt = 0;
  var o = (oe = x.__c).__H;
  o && (ho === oe ? (o.__h = [], oe.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (113 * -31 + -6827 * 1 + -5 * -2066);
  })) : (o.__h.forEach(tx), o.__h.forEach(Fo), o.__h = [], Mt = 1786 + -15 * 27 + -1381)), ho = oe;
}, ae.diffed = function(x) {
  Ki && Ki(x);
  var o = x.__c;
  o && o.__H && (o.__H.__h.length && (qa.push(o) !== 1 && Zi === ae.requestAnimationFrame || ((Zi = ae.requestAnimationFrame) || Ig)(lg)), o.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-16329 + -1 * -16329);
  })), ho = oe = null;
}, ae.__c = function(x, o) {
  o.some(function(t) {
    try {
      t.__h.forEach(tx), t.__h = t.__h.filter(function(e) {
        return !e.__ || Fo(e);
      });
    } catch (e) {
      o.some(function(n) {
        n.__h && (n.__h = []);
      }), o = [], ae.__e(e, t.__v);
    }
  }), Pi && Pi(x, o);
}, ae.unmount = function(x) {
  Vi && Vi(x);
  var o, t = x.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      tx(e);
    } catch (n) {
      o = n;
    }
  }), t.__H = void 0, o && ae.__e(o, t.__v));
};
var Li = typeof requestAnimationFrame == "function";
function Ig(x) {
  var o, t = function() {
    clearTimeout(e), Li && cancelAnimationFrame(o), setTimeout(x);
  }, e = setTimeout(t, 100);
  Li && (o = requestAnimationFrame(t));
}
function tx(x) {
  var o = oe, t = x.__c;
  typeof t == "function" && (x.__c = void (-9943 * 1 + -8872 + -3763 * -5), t()), oe = o;
}
function Fo(x) {
  var o = oe;
  x.__c = x.__(), oe = o;
}
function Zr(x, o) {
  return !x || x.length !== o.length || o.some(function(t, e) {
    return t !== x[e];
  });
}
function ts(x, o) {
  return typeof o == "function" ? o(x) : o;
}
function ns(x, o) {
  for (var t in o) x[t] = o[t];
  return x;
}
function Xo(x, o) {
  for (var t in x) if (t !== "__source" && !(t in o)) return !(6749 + 397 * -17);
  for (var e in o) if (e !== "__source" && x[e] !== o[e]) return !(-269 * 11 + -6767 + 9726);
  return !(-9072 + -211 * -43);
}
function Mo(x, o) {
  this.props = x, this.context = o;
}
function fg(x, o) {
  function t(n) {
    var r = this.props.ref, i = r == n.ref;
    return !i && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, n) || !i : Xo(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, Ne(x, n);
  }
  return e.displayName = "Memo(" + (x.displayName || x.name) + ")", e.prototype.isReactComponent = !(1 * 6238 + 6 * -794 + -1474), e.__f = !(-927 + -309 * -3), e;
}
(Mo.prototype = new rt()).isPureReactComponent = !0, Mo.prototype.shouldComponentUpdate = function(x, o) {
  return Xo(this.props, x) || Xo(this.state, o);
};
var Ei = N.__b;
N.__b = function(x) {
  x.type && x.type.__f && x.ref && (x.props.ref = x.ref, x.ref = null), Ei && Ei(x);
};
var Cg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 8 * 911 + 8 * -355 + -537;
function xs(x) {
  function o(t) {
    var e = ns({}, t);
    return delete e.ref, x(e, t.ref || null);
  }
  return o.$$typeof = Cg, o.render = o, o.prototype.isReactComponent = o.__f = !(-8252 * 1 + 2474 * 1 + -642 * -9), o.displayName = "ForwardRef(" + (x.displayName || x.name) + ")", o;
}
var Ni = function(x, o) {
  return x == null ? null : Kt(Kt(x).map(o));
}, pg = { map: Ni, forEach: Ni, count: function(x) {
  return x ? Kt(x).length : 1 * 2372 + -4610 * 1 + 2238;
}, only: function(x) {
  var o = Kt(x);
  if (9076 + 13 * -217 + -6254 !== o.length) throw "Children.only";
  return o[-8832 * 1 + -9 * 779 + 15843];
}, toArray: Kt }, hg = N.__e;
N.__e = function(x, o, t, e) {
  if (x.then) {
    for (var n, r = o; r = r.__; ) if ((n = r.__c) && n.__c) return o.__e == null && (o.__e = t.__e, o.__k = t.__k), n.__c(x, o);
  }
  hg(x, o, t, e);
};
var Di = N.unmount;
function os(x, o, t) {
  return x && (x.__c && x.__c.__H && (x.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), x.__c.__H = null), (x = ns({}, x)).__c != null && (x.__c.__P === t && (x.__c.__P = o), x.__c = null), x.__k = x.__k && x.__k.map(function(e) {
    return os(e, o, t);
  })), x;
}
function rs(x, o, t) {
  return x && t && (x.__v = null, x.__k = x.__k && x.__k.map(function(e) {
    return rs(e, o, t);
  }), x.__c && x.__c.__P === o && (x.__e && t.appendChild(x.__e), x.__c.__e = !(-1099 + 1 * 1535 + 2 * -218), x.__c.__P = t)), x;
}
function nx() {
  this.__u = -3077 + 1 * 3077, this.t = null, this.__b = null;
}
function is(x) {
  var o = x.__.__c;
  return o && o.__a && o.__a(x);
}
function mg(x) {
  var o, t, e;
  function n(r) {
    if (o || (o = x()).then(function(i) {
      t = i.default || i;
    }, function(i) {
      e = i;
    }), e) throw e;
    if (!t) throw o;
    return Ne(t, r);
  }
  return n.displayName = "Lazy", n.__f = !(1819 * 1 + 7222 + -1 * 9041), n;
}
function en() {
  this.u = null, this.o = null;
}
N.unmount = function(x) {
  var o = x.__c;
  o && o.__R && o.__R(), o && -8640 + 487 * -5 + 11107 & x.__u && (x.type = null), Di && Di(x);
}, (nx.prototype = new rt()).__c = function(x, o) {
  var t = o.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = is(e.__v), r = !1, i = function() {
    r || (r = !(12554 + -6277 * 2), t.__R = null, n ? n(a) : a());
  };
  t.__R = i;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var s = e.state.__a;
        e.__v.__k[-2393 + -6243 * 1 + -4318 * -2] = rs(s, s.__c.__P, s.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.t.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || -8264 + -63 * -57 + 4705 & o.__u || e.setState({ __a: e.__b = e.__v.__k[-5104 + -638 * -8] }), x.then(i, i);
}, nx.prototype.componentWillUnmount = function() {
  this.t = [];
}, nx.prototype.render = function(x, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[5 * -1206 + -4597 + 10627].__c;
      this.__v.__k[3 * -3327 + 1 * -3137 + 13118] = os(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = o.__a && Ne(Ct, null, x.fallback);
  return n && (n.__u &= -(-644 + 1 * -6651 + 7328)), [Ne(Ct, null, o.__a ? null : x.children), n];
};
var Yi = function(x, o, t) {
  if (++t[-5822 + 445 * 1 + 5378] === t[40 * 205 + -2942 + -2 * 2629] && x.o.delete(o), x.props.revealOrder && (x.props.revealOrder[-1 * 4087 + -4742 + 8829] !== "t" || !x.o.size)) for (t = x.u; t; ) {
    for (; t.length > 8 * -863 + 1 * -5650 + 12557; ) t.pop()();
    if (t[-9183 + -28 * -328] < t[-1579 * -1 + -7219 * 1 + -282 * -20]) break;
    x.u = t = t[5341 + 19 * -281];
  }
};
function bg(x) {
  return this.getChildContext = function() {
    return x.context;
  }, x.children;
}
function Ag(x) {
  var o = this, t = x.i;
  o.componentWillUnmount = function() {
    Xt(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== t && o.componentWillUnmount(), o.l || (o.i = t, o.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(-1 * -1019 + -5345 + 1 * 4326);
  }, appendChild: function(e) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> -3313 + 3314 * 1, 130 * -2 + 5 * 1518 + -7329), o.i.removeChild(e);
  } }), Xt(Ne(bg, { context: o.context }, x.__v), o.l);
}
function yg(x, o) {
  var t = {};
  t.__v = x, t.i = o;
  var e = Ne(Ag, t);
  return e.containerInfo = o, e;
}
(en.prototype = new rt()).__a = function(x) {
  var o = this, t = is(o.__v), e = o.o.get(x);
  return e[206 * 41 + 2765 + 111 * -101]++, function(n) {
    var r = function() {
      o.props.revealOrder ? (e.push(n), Yi(o, x, e)) : n();
    };
    t ? t(r) : r();
  };
}, en.prototype.render = function(x) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = Kt(x.children);
  x.revealOrder && x.revealOrder[333 * 13 + -2607 + -1722] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.o.set(o[t], this.u = [-3 * -2726 + -9821 + -2 * -822, 254 + -52 * 86 + 4218, this.u]);
  return x.children;
}, en.prototype.componentDidUpdate = en.prototype.componentDidMount = function() {
  var x = this;
  this.o.forEach(function(o, t) {
    Yi(x, t, o);
  });
};
var as = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 53741 + 2 * 3181, Wg = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, vg = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, wg = /[A-Z0-9]/g, Sg = typeof document < "u", Bg = function(x) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(x);
};
function kg(x, o, t) {
  return o.__k == null && (o.textContent = ""), Xt(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
function Gg(x, o, t) {
  return Br(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
rt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(x) {
  Object.defineProperty(rt.prototype, x, { configurable: !(3617 + 2 * 733 + 391 * -13), get: function() {
    return this["UNSAFE_" + x];
  }, set: function(o) {
    var t = {};
    t.configurable = !(4548 + 6 * -758), t.writable = !(-6 * -745 + -320 * -25 + -12470), t.value = o, Object.defineProperty(this, x, t);
  } });
});
var Fi = N.event;
function Og() {
}
function Zg() {
  return this.cancelBubble;
}
function Hg() {
  return this.defaultPrevented;
}
N.event = function(x) {
  return Fi && (x = Fi(x)), x.persist = Og, x.isPropagationStopped = Zg, x.isDefaultPrevented = Hg, x.nativeEvent = x;
};
var xx = {};
xx.enumerable = !1, xx.configurable = !(1 * -4327 + 9390 + 83 * -61), xx.get = function() {
  return this.class;
};
var Hr, Rg = xx, Xi = N.vnode;
N.vnode = function(x) {
  typeof x.type == "string" && function(o) {
    var t = o.props, e = o.type, n = {};
    for (var r in t) {
      var i = t[r];
      if (!(r === "value" && "defaultValue" in t && i == null || Sg && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var a = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && !(-4 * -326 + 9169 + 3 * -3491) === i ? i = "" : a === "translate" && i === "no" ? i = !(893 * 5 + -1 * 7613 + -67 * -47) : a === "ondoubleclick" ? r = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || Bg(t.type) ? a === "onfocus" ? r = "onfocusin" : a === "onblur" ? r = "onfocusout" : vg.test(r) ? r = a : -(1 * 4331 + -2307 + -2023) === e.indexOf("-") && Wg.test(r) ? r = r.replace(wg, "-$&").toLowerCase() : i === null && (i = void 0) : a = r = "oninput", a === "oninput" && n[r = a] && (r = "oninputCapture"), n[r] = i;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Kt(t.children).forEach(function(s) {
      s.props.selected = -(-1 * -5857 + 7838 + -13694) != n.value.indexOf(s.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = Kt(t.children).forEach(function(s) {
      s.props.selected = n.multiple ? -(393 * 12 + 382 + -1 * 5097) != n.defaultValue.indexOf(s.props.value) : n.defaultValue == s.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", Rg)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), o.props = n;
  }(x), x.$$typeof = as, Xi && Xi(x);
};
var Mi = N.__r;
N.__r = function(x) {
  Mi && Mi(x), Hr = x.__c;
};
var ji = N.diffed;
N.diffed = function(x) {
  ji && ji(x);
  var o = x.props, t = x.__e;
  t != null && x.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), Hr = null;
};
var ve = {};
ve.readContext = function(x) {
  return Hr.__n[x.__c].props.value;
}, ve.useCallback = K0, ve.useContext = u0, ve.useDebugValue = px, ve.useDeferredValue = ds, ve.useEffect = Oe, ve.useId = es, ve.useImperativeHandle = $a, ve.useInsertionEffect = ls, ve.useLayoutEffect = Y0, ve.useMemo = $e, ve.useReducer = Or, ve.useRef = jt, ve.useState = it, ve.useSyncExternalStore = Is, ve.useTransition = us;
var ss = {};
ss.current = ve;
var cs = {};
cs.ReactCurrentDispatcher = ss;
var Kg = cs;
function Pg(x) {
  return Ne.bind(null, x);
}
function Jx(x) {
  return !!x && x.$$typeof === as;
}
function Vg(x) {
  return Jx(x) && x.type === Ct;
}
function Tg(x) {
  return !!x && !!x.displayName && (typeof x.displayName == "string" || x.displayName instanceof String) && x.displayName.startsWith("Memo(");
}
function Lg(x) {
  return Jx(x) ? kr.apply(null, arguments) : x;
}
function Eg(x) {
  return !!x.__k && (Xt(null, x), !(5808 + 1 * 3954 + -9762));
}
function Ng(x) {
  return x && (x.base || -890 + -2 * -4036 + -7181 === x.nodeType && x) || null;
}
var Dg = function(x, o) {
  return x(o);
}, Yg = function(x, o) {
  return x(o);
}, Fg = Ct;
function gs(x) {
  x();
}
function ds(x) {
  return x;
}
function us() {
  return [!(-1678 + 1 * 1679), gs];
}
var ls = Y0, Xg = Jx;
function Is(x, o) {
  var t = o(), e = it({ h: { __: t, v: o } }), n = e[52 + 19 * 211 + -1 * 4061].h, r = e[-3895 + 2 * 4556 + 1304 * -4];
  return Y0(function() {
    n.__ = t, n.v = o, mo(n) && r({ h: n });
  }, [x, t, o]), Oe(function() {
    return mo(n) && r({ h: n }), x(function() {
      mo(n) && r({ h: n });
    });
  }, [x]), t;
}
function mo(x) {
  var o, t, e = x.v, n = x.__;
  try {
    var r = e();
    return !((o = n) === (t = r) && (819 + 36 * 115 + -4959 !== o || (7861 + 4139 * 1 + 13 * -923) / o == (4819 + -2953 * -2 + -10724 * 1) / t) || o != o && t != t);
  } catch {
    return !(-4039 + -6306 * -1 + 1 * -2267);
  }
}
var E = {};
E.useState = it, E.useId = es, E.useReducer = Or, E.useEffect = Oe, E.useLayoutEffect = Y0, E.useInsertionEffect = ls, E.useTransition = us, E.useDeferredValue = ds, E.useSyncExternalStore = Is, E.startTransition = gs, E.useRef = jt, E.useImperativeHandle = $a, E.useMemo = $e, E.useCallback = K0, E.useContext = u0, E.useDebugValue = px, E.version = "17.0.2", E.Children = pg, E.render = kg, E.hydrate = Gg, E.unmountComponentAtNode = Eg, E.createPortal = yg, E.createElement = Ne, E.createContext = wn, E.createFactory = Pg, E.cloneElement = Lg, E.createRef = qc, E.Fragment = Ct, E.isValidElement = Jx, E.isElement = Xg, E.isFragment = Vg, E.isMemo = Tg, E.findDOMNode = Ng, E.Component = rt, E.PureComponent = Mo, E.memo = fg, E.forwardRef = xs, E.flushSync = Yg, E.unstable_batchedUpdates = Dg, E.StrictMode = Fg, E.Suspense = nx, E.SuspenseList = en, E.lazy = mg, E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kg;
var c0 = E, Mg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function jg(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Jg(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Ug(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") && Object.keys(x).length === 1 ? x.default : x;
}
function _g(x) {
  if (x.__esModule) return x;
  var o = x.default;
  if (typeof o == "function") {
    var t = function e() {
      return this instanceof e ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
    };
    t.prototype = o.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(x).forEach(function(e) {
    var n = Object.getOwnPropertyDescriptor(x, e);
    Object.defineProperty(t, e, n.get ? n : {
      enumerable: !0,
      get: function() {
        return x[e];
      }
    });
  }), t;
}
const Qg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Mg,
  getAugmentedNamespace: _g,
  getDefaultExportFromCjs: jg,
  getDefaultExportFromNamespaceIfNotNamed: Ug,
  getDefaultExportFromNamespaceIfPresent: Jg
}, Symbol.toStringTag, { value: "Module" }));
var zg = function(o, t, e, n) {
  var r = e ? e.call(n, o, t) : void 0;
  if (r !== void (4259 * 1 + -7158 + 1 * 2899)) return !!r;
  if (o === t) return !0;
  if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
  var i = Object.keys(o), a = Object.keys(t);
  if (i.length !== a.length) return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = -2 * 1879 + -453 + -1 * -4211; c < i.length; c++) {
    var u = i[c];
    if (!s(u)) return !1;
    var g = o[u], p = t[u];
    if (r = e ? e.call(n, g, p, u) : void (2 * 2861 + -2845 + 1 * -2877), r === !1 || r === void (-1347 * 1 + 2 * 136 + 1075) && g !== p) return !1;
  }
  return !0;
};
const qg = Qg.getDefaultExportFromCjs(zg);
var xe = "-ms-", cn = "-moz-", ee = "-webkit-", fs = "comm", Ux = "rule", Rr = "decl", $g = "@import", Cs = "@keyframes", ed = "@layer", ps = Math.abs, Kr = String.fromCharCode, jo = Object.assign;
function td(x, o) {
  return Ae(x, -529 * -17 + -9622 + 17 * 37) ^ 7438 * 1 + -1889 + -5504 ? (((o << -93 * 13 + 87 * 73 + 5 * -1028 ^ Ae(x, -840 + 7967 * 1 + -1 * 7127)) << -1 * 6775 + 1 * 5637 + 1140 ^ Ae(x, -1244 + -9395 * 1 + 304 * 35)) << 2644 + -1 * 8435 + 5793 ^ Ae(x, 2)) << 7652 + -2 * -4861 + -17372 ^ Ae(x, -4 * 2454 + 2340 + -7479 * -1) : -4052 + -1 * -4052;
}
function hs(x) {
  return x.trim();
}
function Ot(x, o) {
  return (x = o.exec(x)) ? x[-2 * -2825 + -7322 + 1672] : x;
}
function D(x, o, t) {
  return x.replace(o, t);
}
function ox(x, o, t) {
  return x.indexOf(o, t);
}
function Ae(x, o) {
  return x.charCodeAt(o) | 7639 + 7 * 147 + 394 * -22;
}
function P0(x, o, t) {
  return x.slice(o, t);
}
function yt(x) {
  return x.length;
}
function ms(x) {
  return x.length;
}
function tn(x, o) {
  return o.push(x), x;
}
function nd(x, o) {
  return x.map(o).join("");
}
function Ji(x, o) {
  return x.filter(function(t) {
    return !Ot(t, o);
  });
}
var _x = -1 * 925 + 4 * 226 + 22, V0 = -1950 + 1 * 1951, bs = 0, st = 0, fe = 9093 + 2 * -3227 + 7 * -377, F0 = "";
function Qx(x, o, t, e, n, r, i, a) {
  var s = {};
  return s.value = x, s.root = o, s.parent = t, s.type = e, s.props = n, s.children = r, s.line = _x, s.column = V0, s.length = i, s.return = "", s.siblings = a, s;
}
function Et(x, o) {
  return jo(Qx("", null, null, "", null, null, -7277 + 832 * -7 + 13101, x.siblings), x, { length: -x.length }, o);
}
function W0(x) {
  for (; x.root; ) x = Et(x.root, { children: [x] });
  tn(x, x.siblings);
}
function xd() {
  return fe;
}
function od() {
  return fe = st > -3146 + 11 * 286 ? Ae(F0, --st) : -4697 * 2 + 2261 + 1 * 7133, V0--, fe === 9733 * 1 + -5644 + -4079 && (V0 = -8 * -763 + -1 * 3913 + 3 * -730, _x--), fe;
}
function ft() {
  return fe = st < bs ? Ae(F0, st++) : -1853 * -1 + 519 * -19 + 8008, V0++, fe === 2663 * 1 + -49 * 57 + -14 * -10 && (V0 = -8578 + 28 * 276 + 1 * 851, _x++), fe;
}
function i0() {
  return Ae(F0, st);
}
function rx() {
  return st;
}
function zx(x, o) {
  return P0(F0, x, o);
}
function Jo(x) {
  switch (x) {
    case 662 + -8 * 85 + 18:
    case -2594 + 19 * 137:
    case -14731 + -14741 * -1:
    case 9245 + -1 * -4041 + 13273 * -1:
    case 5334 + 1 * -5302:
      return -1 * 3678 + -538 * -2 + 2607;
    case -5292 + 692 * 4 + 2557:
    case 13212 + -13 * 1013:
    case -3592 + 2 * 1818:
    case -5917 * -1 + -2815 * 1 + -3055:
    case 2052 + 8102 * 1 + -10092:
    case -7 * -1071 + -4802 + -1 * 2631:
    case 1934 * 1 + 1335 + -3143:
    case 3559 + 4 * -875:
    case 83 * 101 + -4481 * -1 + -12741 * 1:
    case -2 * -2707 + 6182 + -1 * 11471:
      return -8181 + -70 * 103 + 15395;
    case -4 * -313 + -7069 + 1 * 5875:
      return 134 * 8 + 3403 * -2 + 5737;
    case 2154 * -2 + -8426 + -152 * -84:
    case 39:
    case -364 * -5 + -9264 + 7484:
    case 2377 + -59 * -95 + -7891:
      return -117 + 17 * 7;
    case 2175 + -113 * -74 + -10496:
    case 93:
      return 5 * -1294 + -383 * -3 + 2 * 2661;
  }
  return -1 * 3651 + -2431 * 1 + -3041 * -2;
}
function rd(x) {
  return _x = V0 = 1, bs = yt(F0 = x), st = -5 * -915 + -2650 + 25 * -77, [];
}
function id(x) {
  return F0 = "", x;
}
function bo(x) {
  return hs(zx(st - (3830 + -57 * 127 + 3410), Uo(x === 2141 * -1 + 1182 + 1050 ? x + (-1972 * -4 + -2 * 1377 + -5132) : x === -2 * 699 + -1 * 4429 + 1 * 5867 ? x + 1 : x)));
}
function ad(x) {
  for (; (fe = i0()) && fe < 6930 + 43 * -141 + 139 * -6; ) ft();
  return Jo(x) > -9130 + 1522 * 6 || Jo(fe) > -10 * 893 + 1724 + -801 * -9 ? "" : " ";
}
function sd(x, o) {
  for (; --o && ft() && !(fe < -35 * 26 + -750 * 3 + 3208 || fe > 102 || fe > -3590 + -521 * -7 && fe < -17935 + 24 * 750 || fe > 75 * -17 + 3527 + -2 * 1091 && fe < -2 * 1694 + -1 * -6559 + -3074); ) ;
  return zx(x, rx() + (o < 17 * -233 + 21 * 89 + -2098 * -1 && i0() == 421 * 23 + 12 * -254 + 3 * -2201 && ft() == -10965 + 10997 * 1));
}
function Uo(x) {
  for (; ft(); ) switch (fe) {
    case x:
      return st;
    case -6117 + 9 * -495 + 10606:
    case 39:
      x !== -1 * 1245 + -4484 + -1 * -5763 && x !== -2 * -1987 + -9515 + 1 * 5580 && Uo(fe);
      break;
    case 40:
      x === 6798 + 1 * -6757 && Uo(x);
      break;
    case -1 * -9091 + -3122 + 1959 * -3:
      ft();
      break;
  }
  return st;
}
function cd(x, o) {
  for (; ft() && x + fe !== -463 * 1 + 10 * 269 + 5 * -436 + (1 * 2578 + 101 * 11 + -1 * 3679); ) if (x + fe === -719 * -1 + 6234 + -6911 + (671 * 4 + 397 + 1 * -3039) && i0() === -8246 + 5 * 709 + 4748) break;
  return "/*" + zx(o, st - (-7786 + 7787 * 1)) + "*" + Kr(x === 1 * 2785 + -4085 + 1347 ? x : ft());
}
function gd(x) {
  for (; !Jo(i0()); ) ft();
  return zx(x, st);
}
function dd(x) {
  return id(ix("", null, null, null, [""], x = rd(x), 0, [1 * 8327 + -5533 + -2 * 1397], x));
}
function ix(x, o, t, e, n, r, i, a, s) {
  for (var c = 0, u = 1 * -2861 + -5732 + -1 * -8593, g = i, p = 6388 * 1 + 5668 + -12056, l = 7828 + -547 * 11 + -1811, C = 1 * 2433 + 7 * -959 + 4280, m = 89 * 25 + 102 * -97 + 2 * 3835, A = -5260 * -1 + 1 * -7753 + 2494, d = -2186 * 2 + 2781 + 1592, v = -6569 + 316 * 2 + 5937, G = "", Y = n, j = r, F = e, Z = G; A; ) switch (C = v, v = ft()) {
    case 40:
      if (C != 18 * -381 + 9333 + -263 * 9 && Ae(Z, g - (8405 + 382 * -22)) == 2039 * -1 + -1 * -6497 + 22 * -200) {
        ox(Z += D(bo(v), "&", "&\f"), "&\f", ps(c ? a[c - (8689 * -1 + 127 * -57 + -1 * -15929)] : 80 * 16 + 3963 * 1 + -49 * 107)) != -(4692 + 857 * 3 + -1 * 7262) && (d = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      Z += bo(v);
      break;
    case 13 * -706 + 3719 * 1 + -5468 * -1:
    case 4 * -686 + 55 * 150 + -5496:
    case 2 * -1481 + -8066 + -1 * -11041:
    case -8844 + -711 * -3 + 6743:
      Z += ad(C);
      break;
    case -5304 + 2384 * -2 + 10164:
      Z += sd(rx() - (-260 + 3 * 87), -899 + 3 * 302);
      continue;
    case 1 * 8513 + 1 * 5 + -8471:
      switch (i0()) {
        case -542 * 8 + 51 * -118 + -92 * -113:
        case 6341 + 9 * -14 + -6168:
          tn(ud(cd(ft(), rx()), o, t, s), s);
          break;
        default:
          Z += "/";
      }
      break;
    case (7076 * 1 + 4629 + -11582) * m:
      a[c++] = yt(Z) * d;
    case (359 * 11 + -1269 + 7 * -365) * m:
    case -6302 + -9980 * -1 + -517 * 7:
    case 2192 + 548 * -4:
      switch (v) {
        case 25 * 172 + 294 * 2 + -2 * 2444:
        case 1888 + 1 * 982 + -2745 * 1:
          A = -8421 + 45 * -57 + -1831 * -6;
        case 59 + u:
          d == -(9553 + -402 * 2 + -8748) && (Z = D(Z, /\f/g, "")), l > -1617 + 1 * 5726 + -1 * 4109 && yt(Z) - g && tn(l > 32 ? _i(Z + ";", e, t, g - 1, s) : _i(D(Z, " ", "") + ";", e, t, g - (12311 + 4103 * -3), s), s);
          break;
        case -5948 + 1 * 6007:
          Z += ";";
        default:
          if (tn(F = Ui(Z, o, t, c, u, n, a, G, Y = [], j = [], g, r), r), v === 123)
            if (u === -1709 * 1 + 1 * 7901 + -6192) ix(Z, o, F, F, Y, r, g, a, j);
            else switch (p === 3 * 409 + -167 * -16 + 40 * -95 && Ae(Z, 3) === -76 * 46 + -3803 * -1 + -1 * 197 ? 2197 + -1021 * 1 + -1076 : p) {
              case -2122 * 1 + -1 * -2183 + 39:
              case -6149 + 2199 * -1 + -604 * -14:
              case 109:
              case 115:
                ix(x, F, F, e && tn(Ui(x, F, F, 0, -417 * 3 + 5 * -1964 + 11071, n, a, G, n, Y = [], g, j), j), n, j, g, a, e ? Y : j);
                break;
              default:
                ix(Z, F, F, F, [""], j, -699 * -1 + -1 * 5237 + 1 * 4538, a, j);
            }
      }
      c = u = l = -9217 + 1 * -7525 + -1 * -16742, m = d = -229 * -4 + -4124 + 3209, G = Z = "", g = i;
      break;
    case 58:
      g = 1601 * 2 + 6175 + -16 * 586 + yt(Z), l = C;
    default:
      if (m < -7204 * 1 + -7448 * 1 + 14653 * 1) {
        if (v == 4266 + -109 * -78 + -4215 * 3) --m;
        else if (v == -83 * -73 + -6070 + -2 * -68 && m++ == -19 * -433 + 362 + -8589 && od() == 61 * 3 + -9865 + 9807) continue;
      }
      switch (Z += Kr(v), v * m) {
        case 2686 + 119 * -11 + -103 * 13:
          d = u > 1 * -547 + -257 + -1 * -804 ? -4957 * 2 + 2524 + 7391 : (Z += "\f", -(6809 * -1 + -9819 + -23 * -723));
          break;
        case 5242 + 1 * -2087 + 3111 * -1:
          a[c++] = (yt(Z) - (1 * -7454 + 6351 + 48 * 23)) * d, d = 8275 * -1 + -6176 + 2 * 7226;
          break;
        case 64:
          i0() === -74 * -83 + 1 * -3799 + -2298 && (Z += bo(ft())), p = i0(), u = g = yt(G = Z += gd(rx())), v++;
          break;
        case -1509 * -3 + 8648 + -13130:
          C === 45 && yt(Z) == -254 * 25 + 15 * 367 + -847 * -1 && (m = -4380 + 5 * -1231 + 10535);
      }
  }
  return r;
}
function Ui(x, o, t, e, n, r, i, a, s, c, u, g) {
  for (var p = n - 1, l = n === -7957 + -2413 * 2 + 12783 * 1 ? r : [""], C = ms(l), m = -6115 * -1 + 9827 + -15942, A = 1 * 4839 + -8498 + 3659, d = 0; m < e; ++m) for (var v = 21 * 49 + -1 * -1923 + -2952, G = P0(x, p + (6376 * 1 + -1444 + -4931), p = ps(A = i[m])), Y = x; v < C; ++v) (Y = hs(A > 753 * 6 + -3921 + -597 ? l[v] + " " + G : D(G, /&\f/g, l[v]))) && (s[d++] = Y);
  return Qx(x, o, t, n === 3091 * 3 + 12 * 93 + 10389 * -1 ? Ux : a, s, c, u, g);
}
function ud(x, o, t, e) {
  return Qx(x, o, t, fs, Kr(xd()), P0(x, 5293 + 407 * -13, -(-9068 * -1 + -5698 + -842 * 4)), 1043 + -1043 * 1, e);
}
function _i(x, o, t, e, n) {
  return Qx(x, o, t, Rr, P0(x, 909 * 3 + 7516 + 10243 * -1, e), P0(x, e + (-7897 * -1 + 1 * -9437 + 1541 * 1), -(309 + -1 * 308)), e, n);
}
function As(x, o, t) {
  switch (td(x, o)) {
    case 208 * -4 + 4011 + 1924:
      return ee + "print-" + x + x;
    case -1 * 7957 + -5375 + 19069:
    case 331 * -27 + 803 * -1 + 13941:
    case 3194 * 3 + 7301 + -13706:
    case 2713 * -1 + -9 * 447 + 10169:
    case -877 * 7 + -5 * -659 + 4485:
    case 118 * 17 + -2593 + 13 * 388:
    case 2921:
    case -137 * -1 + -1 * 5054 + 17 * 617:
    case -31 * 197 + -1 * -538 + 11925:
    case -1 * -2234 + 1887 + -1723 * -1:
    case 3191:
    case 3412 + -1 * 7835 + -5534 * -2:
    case -17 * 70 + 1311 * 6 + -3671:
    case 7984 * -1 + 4388 * 2 + 5599 * 1:
    case 1 * 821 + -1 * 1903 + -1 * -6961:
    case 21711 + 2011 * -8:
    case -2 * -2614 + 9200 + -8293:
    case 4599:
    case 30 * -331 + 75 * -33 + 17260:
    case 2 * -4309 + -1274 + 1 * 14107:
    case 6389:
    case 5109:
    case 7764 + 1310 * 2 + -5019:
    case 34 * -146 + -658 * 4 + 1 * 13217:
    case -17 * -439 + 4419 + -8053:
      return ee + x + x;
    case 1 * 9973 + 356 * 15 + -877 * 12:
      return cn + x + x;
    case 5349:
    case -2666 + -269 * -37 + -1 * 3041:
    case 9905 + 1 * -2808 + -2287:
    case -3106 + -105 * -65 + 3 * 1083:
    case -6734 + -5 * -1898:
      return ee + x + cn + x + xe + x + x;
    case 2 * 1052 + -1 * 1861 + -5693 * -1:
      switch (Ae(x, o + (-8504 + 1 * 5983 + 2532))) {
        case 2105 * 1 + 6358 + -8349:
          return ee + x + xe + D(x, /[svh]\w+-[tblr]{2}/, "tb") + x;
        case 3442 + -169 * -26 + -1932 * 4:
          return ee + x + xe + D(x, /[svh]\w+-[tblr]{2}/, "tb-rl") + x;
        case -7248 + 9 * -959 + 15924:
          return ee + x + xe + D(x, /[svh]\w+-[tblr]{2}/, "lr") + x;
      }
    case 6828:
    case -17887 + -105 * -211:
    case -1327 * 2 + -178 * 40 + 1 * 12677:
      return ee + x + xe + x + x;
    case -1 * 2622 + 1243 + 7544:
      return ee + x + xe + "flex-" + x + x;
    case -521 * 15 + 6127 * -1 + 47 * 407:
      return ee + x + D(x, /(\w+).+(:[^]+)/, ee + "box-$1$2" + xe + "flex-$1$2") + x;
    case 8667 + 73 * 21 + 4757 * -1:
      return ee + x + xe + "flex-item-" + D(x, /flex-|-self/g, "") + (Ot(x, /flex-|baseline/) ? "" : xe + "grid-row-" + D(x, /flex-|-self/g, "")) + x;
    case -240 + -1309 * 2 + 7533:
      return ee + x + xe + "flex-line-pack" + D(x, /align-content|flex-|-self/g, "") + x;
    case 5548:
      return ee + x + xe + D(x, "shrink", "negative") + x;
    case 14031 + 9 * -971:
      return ee + x + xe + D(x, "basis", "preferred-size") + x;
    case 273 * -31 + -2135 * 5 + 12599 * 2:
      return ee + "box-" + D(x, "-grow", "") + ee + x + xe + D(x, "grow", "positive") + x;
    case -118 * -1 + 5184 + -22 * 34:
      return ee + D(x, /([^-])(transform)/g, "$1" + ee + "$2") + x;
    case -7358 + -1 * 1727 + -2 * -7636:
      return D(D(D(x, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), x, "") + x;
    case 9321 + 175 * 9 + 1 * -5401:
    case -2 * 1786 + 25 * -303 + -581 * -26:
      return D(x, /(image-set\([^]*)/, ee + "$1$`$1");
    case 2307 * -3 + -13 * -477 + -711 * -8:
      return D(D(x, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + xe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + x + x;
    case -3046 + 10 * -109 + 8336:
      if (!Ot(x, /flex-|baseline/)) return xe + "grid-column-align" + P0(x, o) + x;
      break;
    case 800 * 5 + -7318 * -1 + -4363 * 2:
    case -7391 + -52 * 57 + 13715:
      return xe + D(x, "template-", "") + x;
    case -261 * -15 + 9821 + -7 * 1336:
    case 9640 + 263 * -17 + -1 * 1553:
      return t && t.some(function(e, n) {
        return o = n, Ot(e.props, /grid-\w+-end/);
      }) ? ~ox(x + (t = t[o].value), "span", 14816 + 16 * -926) ? x : xe + D(x, "-start", "") + x + xe + "grid-row-span:" + (~ox(t, "span", 0) ? Ot(t, /\d+/) : +Ot(t, /\d+/) - +Ot(x, /\d+/)) + ";" : xe + D(x, "-start", "") + x;
    case 8947 + -1 * 4051:
    case -8980 + 487 * 11 + -23 * -337:
      return t && t.some(function(e) {
        return Ot(e.props, /grid-\w+-start/);
      }) ? x : xe + D(D(x, "-end", "-span"), "span ", "") + x;
    case 4095:
    case 5 * 1389 + -7068 + 3706:
    case -1067 * 7 + 18 * 64 + -335 * -31:
    case 2532:
      return D(x, /(.+)-inline(.+)/, ee + "$1$2") + x;
    case -719 * 20 + -201 * -39 + 14657:
    case 11199 + 3 * -1380:
    case 1 * -4701 + 5777 * 1 + -4677 * -1:
    case -34 * -100 + 20 * -107 + 4275:
    case -81 * 43 + -8392 + 20 * 866:
    case -1597 * 3 + -2621 * 3 + 18355:
    case 7049 + 23 * -92:
    case 6761 + -1 * 712 + -1 * 1372:
    case 7618 + -3 * 373 + -966:
    case -9275 + 89 * -5 + -1 * -15509:
    case -15437 + -106 * -193:
    case 6288 + -437 * 2 + 649 * -1:
      if (yt(x) - (1 * -9242 + 1 * -2785 + 12028) - o > 261 + -4271 * -1 + 4526 * -1) switch (Ae(x, o + (69 * -131 + -5 * 354 + 10810))) {
        case -1 * -2674 + -6641 * 1 + 4076:
          if (Ae(x, o + (-181 * -26 + -438 + -13 * 328)) !== 7 * 727 + -3684 + -1360) break;
        case -1458 + 7391 * -1 + 8951:
          return D(x, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + cn + (Ae(x, o + (-2369 * 4 + 5835 + -4 * -911)) == 9086 + -1451 * 5 + -1 * 1723 ? "$3" : "$2-$3")) + x;
        case 4967 + 1 * -6761 + 1909:
          return ~ox(x, "stretch", 2 * -4139 + 1651 + 6627) ? As(D(x, "stretch", "fill-available"), o, t) + x : x;
      }
      break;
    case -16453 + -21605 * -1:
    case 5920:
      return D(x, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, r, i, a, s, c) {
        return xe + n + ":" + r + c + (i ? xe + n + "-span:" + (a ? s : +s - +r) + c : "") + x;
      });
    case -5675 + -1 * -5906 + 2 * 2359:
      if (Ae(x, o + (57 * -2 + -411 * 7 + 81 * 37)) === -7883 + -4211 * -2 + -418) return D(x, ":", ":" + ee) + x;
      break;
    case -5351 * 1 + -1 * 10970 + 22765:
      switch (Ae(x, Ae(x, 10 * -887 + 8683 * 1 + -201 * -1) === -16891 + 146 * 116 ? -5856 + 1 * -6514 + 12388 : -3261 * -1 + -1868 + -1382)) {
        case 1217 * 1 + -1 * -7166 + 8263 * -1:
          return D(x, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (Ae(x, 9346 + -268 * -32 + -484 * 37) === 47 * 127 + -4 * 2325 + 3376 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + xe + "$2box$3") + x;
        case 10649 + 7 * -1507:
          return D(x, ":", ":" + xe) + x;
      }
      break;
    case -1 * 119 + -184 + 6022:
    case -1 * 1044 + 498 * 13 + -2783:
    case 2135:
    case -46 * 195 + 1577 + 566 * 20:
    case 11 * 854 + 795 + 3899 * -2:
      return D(x, "scroll-", "scroll-snap-") + x;
  }
  return x;
}
function hx(x, o) {
  for (var t = "", e = 0; e < x.length; e++) t += o(x[e], e, x, o) || "";
  return t;
}
function ld(x, o, t, e) {
  switch (x.type) {
    case ed:
      if (x.children.length) break;
    case $g:
    case Rr:
      return x.return = x.return || x.value;
    case fs:
      return "";
    case Cs:
      return x.return = x.value + "{" + hx(x.children, e) + "}";
    case Ux:
      if (!yt(x.value = x.props.join(","))) return "";
  }
  return yt(t = hx(x.children, e)) ? x.return = x.value + "{" + t + "}" : "";
}
function Id(x) {
  var o = ms(x);
  return function(t, e, n, r) {
    for (var i = "", a = -2452 * 2 + -3260 + 628 * 13; a < o; a++) i += x[a](t, e, n, r) || "";
    return i;
  };
}
function fd(x) {
  return function(o) {
    o.root || (o = o.return) && x(o);
  };
}
function Cd(x, o, t, e) {
  if (x.length > -(1188 + 797 * -1 + 195 * -2) && !x.return)
    switch (x.type) {
      case Rr:
        x.return = As(x.value, x.length, t);
        return;
      case Cs:
        return hx([Et(x, { value: D(x.value, "@", "@" + ee) })], e);
      case Ux:
        if (x.length) return nd(t = x.props, function(n) {
          switch (Ot(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              W0(Et(x, { props: [D(n, /:(read-\w+)/, ":" + cn + "$1")] }));
              var r = {};
              r.props = [n], W0(Et(x, r)), jo(x, { props: Ji(t, e) });
              break;
            case "::placeholder":
              W0(Et(x, { props: [D(n, /:(plac\w+)/, ":" + ee + "input-$1")] })), W0(Et(x, { props: [D(n, /:(plac\w+)/, ":" + cn + "$1")] })), W0(Et(x, { props: [D(n, /:(plac\w+)/, xe + "input-$1")] }));
              var i = {};
              i.props = [n], W0(Et(x, i)), jo(x, { props: Ji(t, e) });
              break;
          }
          return "";
        });
    }
}
var L = {};
L.animationIterationCount = 1, L.aspectRatio = 1, L.borderImageOutset = 1, L.borderImageSlice = 1, L.borderImageWidth = 1, L.boxFlex = 1, L.boxFlexGroup = 1, L.boxOrdinalGroup = 1, L.columnCount = 1, L.columns = 1, L.flex = 1, L.flexGrow = 1, L.flexPositive = 1, L.flexShrink = 1, L.flexNegative = 1, L.flexOrder = 1, L.gridRow = 1, L.gridRowEnd = 1, L.gridRowSpan = 1, L.gridRowStart = 1, L.gridColumn = 1, L.gridColumnEnd = 1, L.gridColumnSpan = 1, L.gridColumnStart = 1, L.msGridRow = 1, L.msGridRowSpan = 1, L.msGridColumn = 1, L.msGridColumnSpan = 1, L.fontWeight = 1, L.lineHeight = 1, L.opacity = 1, L.order = 1, L.orphans = 1, L.tabSize = 1, L.widows = 1, L.zIndex = 1, L.zoom = 1, L.WebkitLineClamp = 1, L.fillOpacity = 1, L.floodOpacity = 1, L.stopOpacity = 1, L.strokeDasharray = 1, L.strokeDashoffset = 1, L.strokeMiterlimit = 1, L.strokeOpacity = 1, L.strokeWidth = 1;
var pd = L, q = {}, g0 = typeof process < "u" && void (-314 * 10 + -1905 * 3 + 115 * 77) !== q && (q.REACT_APP_SC_ATTR || q.SC_ATTR) || "data-styled", ys = "active", Ws = "data-styled-version", qx = "6.1.11", Pr = `/*!sc*/
`, Vr = typeof window < "u" && "HTMLElement" in window, hd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (1 * -3819 + -1373 * -7 + -5792) !== q && void (18032 + -16 * 1127) !== q.REACT_APP_SC_DISABLE_SPEEDY && q.REACT_APP_SC_DISABLE_SPEEDY !== "" ? q.REACT_APP_SC_DISABLE_SPEEDY !== "false" && q.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-1385 * -3 + -8062 + 3907) !== q && void (6039 + -671 * 9) !== q.SC_DISABLE_SPEEDY && q.SC_DISABLE_SPEEDY !== "" ? q.SC_DISABLE_SPEEDY !== "false" && q.SC_DISABLE_SPEEDY : q.NODE_ENV !== "production"), Qi = /invalid hook call/i, Yn = /* @__PURE__ */ new Set(), md = function(x, o) {
  if (q.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(x).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var r = !0;
      console.error = function(i) {
        for (var a = [], s = -9761 + 65 * 118 + 2092; s < arguments.length; s++) a[s - (-8717 + 5 * -871 + 1 * 13073)] = arguments[s];
        Qi.test(i) ? (r = !1, Yn.delete(e)) : n.apply(void (21 * 409 + 8373 * 1 + -16962), H0([i], a, !1));
      }, jt(), r && !Yn.has(e) && (console.warn(e), Yn.add(e));
    } catch (i) {
      Qi.test(i.message) && Yn.delete(e);
    } finally {
      console.error = n;
    }
  }
}, $x = Object.freeze([]), T0 = Object.freeze({});
function bd(x, o, t) {
  return void (-53 * -67 + 3599 + -7150) === t && (t = T0), x.theme !== t.theme && x.theme || o || t.theme;
}
var _o = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Ad = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, yd = /(^-|-$)/g;
function zi(x) {
  return x.replace(Ad, "-").replace(yd, "");
}
var Wd = /(a)(d)/gi, Fn = -9 * -371 + -2989 + -1 * 298, qi = function(x) {
  return String.fromCharCode(x + (x > 25 * -359 + 197 * -17 + -12349 * -1 ? 7544 + 68 * -64 + -3 * 1051 : -4 * 459 + -1 * -1013 + -184 * -5));
};
function Qo(x) {
  var o, t = "";
  for (o = Math.abs(x); o > Fn; o = o / Fn | 3826 + -3622 * -1 + 56 * -133) t = qi(o % Fn) + t;
  return (qi(o % Fn) + t).replace(Wd, "$1-$2");
}
var Ao, vs = 6750 + -1 * 9607 + 8238, t0 = function(x, o) {
  for (var t = o.length; t; ) x = (-1 * 653 + -6961 + 7647) * x ^ o.charCodeAt(--t);
  return x;
}, ws = function(x) {
  return t0(vs, x);
};
function vd(x) {
  return Qo(ws(x) >>> 163 * -5 + -311 * 13 + 4858 * 1);
}
function Ss(x) {
  return q.NODE_ENV !== "production" && typeof x == "string" && x || x.displayName || x.name || "Component";
}
function yo(x) {
  return typeof x == "string" && (q.NODE_ENV === "production" || x.charAt(7813 + -4513 * -1 + -12326) === x.charAt(-5019 + 33 * 116 + 1191).toLowerCase());
}
var xt = {};
xt.childContextTypes = !0, xt.contextType = !0, xt.contextTypes = !0, xt.defaultProps = !0, xt.displayName = !0, xt.getDefaultProps = !0, xt.getDerivedStateFromError = !0, xt.getDerivedStateFromProps = !0, xt.mixins = !0, xt.propTypes = !0, xt.type = !0;
var Nt = {};
Nt.name = !0, Nt.length = !0, Nt.prototype = !0, Nt.caller = !0, Nt.callee = !0, Nt.arguments = !0, Nt.arity = !0;
var $t = {};
$t.$$typeof = !0, $t.compare = !0, $t.defaultProps = !0, $t.displayName = !0, $t.propTypes = !0, $t.type = !0;
var w0 = {};
w0.$$typeof = !0, w0.render = !0, w0.defaultProps = !0, w0.displayName = !0, w0.propTypes = !0;
var Bs = typeof Symbol == "function" && Symbol.for, ks = Bs ? Symbol.for("react.memo") : -1 * 56969 + -7 * -3853 + 90113, wd = Bs ? Symbol.for("react.forward_ref") : -121 * 287 + 7 * 14757 + -8460, Sd = xt, Bd = Nt, Gs = $t, kd = ((Ao = {})[wd] = w0, Ao[ks] = Gs, Ao);
function $i(x) {
  return ("type" in (o = x) && o.type.$$typeof) === ks ? Gs : "$$typeof" in x ? kd[x.$$typeof] : Sd;
  var o;
}
var Gd = Object.defineProperty, Od = Object.getOwnPropertyNames, ea = Object.getOwnPropertySymbols, Zd = Object.getOwnPropertyDescriptor, Hd = Object.getPrototypeOf, ta = Object.prototype;
function Os(x, o, t) {
  if (typeof o != "string") {
    if (ta) {
      var e = Hd(o);
      e && e !== ta && Os(x, e, t);
    }
    var n = Od(o);
    ea && (n = n.concat(ea(o)));
    for (var r = $i(x), i = $i(o), a = -811 * -6 + 4364 + 71 * -130; a < n.length; ++a) {
      var s = n[a];
      if (!(s in Bd || t && t[s] || i && s in i || r && s in r)) {
        var c = Zd(o, s);
        try {
          Gd(x, s, c);
        } catch {
        }
      }
    }
  }
  return x;
}
function L0(x) {
  return typeof x == "function";
}
function Tr(x) {
  return typeof x == "object" && "styledComponentId" in x;
}
function x0(x, o) {
  return x && o ? "".concat(x, " ").concat(o) : x || o || "";
}
function na(x, o) {
  if (-3679 * 1 + -6017 + 9696 === x.length) return "";
  for (var t = x[-5119 + 10 * 713 + -1 * 2011], e = 7274 + -2 * -3373 + -14019; e < x.length; e++) t += x[e];
  return t;
}
function E0(x) {
  return x !== null && typeof x == "object" && x.constructor.name === Object.name && !("props" in x && x.$$typeof);
}
function zo(x, o, t) {
  if (void (4391 + -13 * -15 + 2 * -2293) === t && (t = !1), !t && !E0(x) && !Array.isArray(x)) return o;
  if (Array.isArray(o))
    for (var e = -67 * -59 + 1 * -7405 + 3452; e < o.length; e++) x[e] = zo(x[e], o[e]);
  else if (E0(o))
    for (var e in o) x[e] = zo(x[e], o[e]);
  return x;
}
function Lr(x, o) {
  var t = {};
  t.value = o, Object.defineProperty(x, "toString", t);
}
var me = {};
me[1] = `Cannot create styled-component for component: %s.

`, me[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, me[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, me[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, me[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, me[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, me[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', me[8] = `ThemeProvider: Please make your "theme" prop an object.

`, me[9] = "Missing document `<head>`\n\n", me[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, me[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, me[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", me[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, me[14] = `ThemeProvider: "theme" prop is required.

`, me[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", me[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, me[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, me[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var Rd = q.NODE_ENV !== "production" ? me : {};
function Kd() {
  for (var x = [], o = 1 * -7307 + -2 * 643 + 8593 * 1; o < arguments.length; o++) x[o] = arguments[o];
  for (var t = x[8019 + 4253 * -2 + 487 * 1], e = [], n = 12 * 500 + 5157 * 1 + 5578 * -2, r = x.length; n < r; n += 1076 + -2419 * -1 + 2 * -1747) e.push(x[n]);
  return e.forEach(function(i) {
    t = t.replace(/%[a-z]/, i);
  }), t;
}
function X0(x) {
  for (var o = [], t = -8771 + 5 * 611 + 5717; t < arguments.length; t++) o[t - (-2 * 1509 + -8219 + 11238)] = arguments[t];
  return q.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(x, " for more information.").concat(o.length > -1747 * -5 + 2094 + -10829 ? " Args: ".concat(o.join(", ")) : "")) : new Error(Kd.apply(void (-6058 + 1154 * -7 + 14136), H0([Rd[x]], o, !1)).trim());
}
var Pd = function() {
  function x(o) {
    this.groupSizes = new Uint32Array(3098 + -431 * 6), this.length = -5769 + 6281 * 1, this.tag = o;
  }
  return x.prototype.indexOfGroup = function(o) {
    for (var t = 0, e = 1007 * -1 + -1 * 3433 + 3 * 1480; e < o; e++) t += this.groupSizes[e];
    return t;
  }, x.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, r = n; o >= r; ) if ((r <<= 4506 + -226 * -3 + -5183) < 95 * 83 + -44 * 194 + 651 * 1) throw X0(10803 + -7 * 1541, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(e), this.length = r;
      for (var i = n; i < r; i++) this.groupSizes[i] = -3261 * -2 + 2 * -696 + -5130;
    }
    for (var a = this.indexOfGroup(o + (-4164 + -7461 * 1 + 11626)), s = (i = -1 * -2083 + -2 * -4279 + -10641, t.length); i < s; i++) this.tag.insertRule(a, t[i]) && (this.groupSizes[o]++, a++);
  }, x.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), n = e + t;
      this.groupSizes[o] = -98 * -60 + 911 * 9 + -39 * 361;
      for (var r = e; r < n; r++) this.tag.deleteRule(e);
    }
  }, x.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || 5 * -1697 + 2887 + 5598 === this.groupSizes[o]) return t;
    for (var e = this.groupSizes[o], n = this.indexOfGroup(o), r = n + e, i = n; i < r; i++) t += "".concat(this.tag.getRule(i)).concat(Pr);
    return t;
  }, x;
}(), Vd = 1 << -54 * -135 + 525 * -11 + -1485, ax = /* @__PURE__ */ new Map(), mx = /* @__PURE__ */ new Map(), sx = 1 * 3391 + -1 * 4969 + 1579 * 1, Xn = function(x) {
  if (ax.has(x)) return ax.get(x);
  for (; mx.has(sx); ) sx++;
  var o = sx++;
  if (q.NODE_ENV !== "production" && ((251 * -18 + -2 * 615 + 5748 | o) < 422 * 1 + 4 * -2021 + 3 * 2554 || o > Vd)) throw X0(-8968 + 4 * 2246, "".concat(o));
  return ax.set(x, o), mx.set(o, x), o;
}, Td = function(x, o) {
  sx = o + (2143 + 127 * -43 + 3319), ax.set(x, o), mx.set(o, x);
}, Ld = "style[".concat(g0, "][").concat(Ws, '="').concat(qx, '"]'), Ed = new RegExp("^".concat(g0, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Nd = function(x, o, t) {
  for (var e, n = t.split(","), r = 7415 + 10 * -595 + -5 * 293, i = n.length; r < i; r++) (e = n[r]) && x.registerName(o, e);
}, Dd = function(x, o) {
  for (var t, e = ((t = o.textContent) !== null && void (-1 * 883 + -6798 + 7681) !== t ? t : "").split(Pr), n = [], r = -1 * -3241 + -6289 + -1524 * -2, i = e.length; r < i; r++) {
    var a = e[r].trim();
    if (a) {
      var s = a.match(Ed);
      if (s) {
        var c = 0 | parseInt(s[1], 10), u = s[9148 * -1 + -1 * -7882 + 1268];
        -1607 * -4 + -1559 + -4869 !== c && (Td(u, c), Nd(x, u, s[3]), x.getTag().insertRules(c, n)), n.length = -6045 + -403 * -15;
      } else n.push(a);
    }
  }
};
function Yd() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Zs = function(x) {
  var o = document.head, t = x || o, e = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(g0, "]")));
    return s[s.length - (13048 + 13047 * -1)];
  }(t), r = void (-1 * -3574 + 209 * -5 + 2529 * -1) !== n ? n.nextSibling : null;
  e.setAttribute(g0, ys), e.setAttribute(Ws, qx);
  var i = Yd();
  return i && e.setAttribute("nonce", i), t.insertBefore(e, r), e;
}, Fd = function() {
  function x(o) {
    this.element = Zs(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = -2 * -3766 + -1 * 5537 + -285 * 7, r = e.length; n < r; n++) {
        var i = e[n];
        if (i.ownerNode === t) return i;
      }
      throw X0(4857 * 1 + 1403 * 1 + -1 * 6243);
    }(this.element), this.length = -7054 + -823 * 1 + 7877;
  }
  return x.prototype.insertRule = function(o, t) {
    try {
      return this.sheet.insertRule(t, o), this.length++, !0;
    } catch {
      return !1;
    }
  }, x.prototype.deleteRule = function(o) {
    this.sheet.deleteRule(o), this.length--;
  }, x.prototype.getRule = function(o) {
    var t = this.sheet.cssRules[o];
    return t && t.cssText ? t.cssText : "";
  }, x;
}(), Xd = function() {
  function x(o) {
    this.element = Zs(o), this.nodes = this.element.childNodes, this.length = -4571 * -2 + -4229 + -4913 * 1;
  }
  return x.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= 0) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, x.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, x;
}(), Md = function() {
  function x(o) {
    this.rules = [], this.length = -1 * -6179 + -2295 + -3884;
  }
  return x.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, 107 * 47 + 5084 + -1 * 10113, t), this.length++, !0);
  }, x.prototype.deleteRule = function(o) {
    this.rules.splice(o, 1 * 8327 + 7779 + -1 * 16105), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, x;
}(), xa = Vr, jd = { isServer: !Vr, useCSSOMInjection: !hd }, Hs = function() {
  function x(o, t, e) {
    void (-6638 + -2 * -3319) === o && (o = T0), void (-4955 + -598 * 1 + 5553) === t && (t = {});
    var n = this;
    this.options = _e(_e({}, jd), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && Vr && xa && (xa = !1, function(r) {
      for (var i = document.querySelectorAll(Ld), a = -6209 + 115 * -1 + 2108 * 3, s = i.length; a < s; a++) {
        var c = i[a];
        c && c.getAttribute(g0) !== ys && (Dd(r, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), Lr(this, function() {
      return function(r) {
        for (var i = r.getTag(), a = i.length, s = "", c = function(g) {
          var p = function(d) {
            return mx.get(d);
          }(g);
          if (void (-5521 + -1 * -5521) === p) return "continue";
          var l = r.names.get(p), C = i.getGroup(g);
          if (void (227 * 22 + -63 * -3 + -5183) === l || 2136 + -1068 * 2 === C.length) return "continue";
          var m = "".concat(g0, ".g").concat(g, '[id="').concat(p, '"]'), A = "";
          void (3 * -2114 + 8183 + -1841) !== l && l.forEach(function(d) {
            d.length > 5307 + -1 * 5581 + 274 && (A += "".concat(d, ","));
          }), s += "".concat(C).concat(m, '{content:"').concat(A, '"}').concat(Pr);
        }, u = -8650 + -2 * -3532 + -26 * -61; u < a; u++) c(u);
        return s;
      }(n);
    });
  }
  return x.registerId = function(o) {
    return Xn(o);
  }, x.prototype.reconstructWithOptions = function(o, t) {
    return void (2458 * -4 + 6941 + -2891 * -1) === t && (t = !0), new x(_e(_e({}, this.options), o), this.gs, t && this.names || void (1455 * -2 + 6637 * 1 + -3727 * 1));
  }, x.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || -2 * -1157 + 3847 + -101 * 61) + (1 * -239 + -6342 + -2 * -3291);
  }, x.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new Md(n) : e ? new Fd(n) : new Xd(n);
    }(this.options), new Pd(o)));
    var o;
  }, x.prototype.hasNameForId = function(o, t) {
    return this.names.has(o) && this.names.get(o).has(t);
  }, x.prototype.registerName = function(o, t) {
    if (Xn(o), this.names.has(o)) this.names.get(o).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(o, e);
    }
  }, x.prototype.insertRules = function(o, t, e) {
    this.registerName(o, t), this.getTag().insertRules(Xn(o), e);
  }, x.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, x.prototype.clearRules = function(o) {
    this.getTag().clearGroup(Xn(o)), this.clearNames(o);
  }, x.prototype.clearTag = function() {
    this.tag = void (188 * 28 + 1 * 8881 + -69 * 205);
  }, x;
}(), Jd = /&/g, Ud = /^\s*\/\/.*$/gm;
function Rs(x, o) {
  return x.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(o, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(o, " ")), t.props = t.props.map(function(e) {
      return "".concat(o, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Rs(t.children, o)), t;
  });
}
function Ks(x) {
  var o, t, e, n = x === void 0 ? T0 : x, r = n.options, i = void (4773 * 1 + 7 * -631 + -356) === r ? T0 : r, a = n.plugins, s = void (353 * -1 + 158 * 37 + -5493) === a ? $x : a, c = function(p, l, C) {
    return C.startsWith(t) && C.endsWith(t) && C.replaceAll(t, "").length > 1 * 5411 + -5076 + -335 ? ".".concat(o) : p;
  }, u = s.slice();
  u.push(function(p) {
    p.type === Ux && p.value.includes("&") && (p.props[12583 + 1 * -12583] = p.props[3770 + -29 * 130].replace(Jd, t).replace(e, c));
  }), i.prefix && u.push(Cd), u.push(ld);
  var g = function(p, l, C, m) {
    l === void 0 && (l = ""), void (-8394 + 5949 * 1 + -163 * -15) === C && (C = ""), void (-1289 * -2 + 2 * -796 + -493 * 2) === m && (m = "&"), o = m, t = l, e = new RegExp("\\".concat(t, "\\b"), "g");
    var A = p.replace(Ud, ""), d = dd(C || l ? "".concat(C, " ").concat(l, " { ").concat(A, " }") : A);
    i.namespace && (d = Rs(d, i.namespace));
    var v = [];
    return hx(d, Id(u.concat(fd(function(G) {
      return v.push(G);
    })))), v;
  };
  return g.hash = s.length ? s.reduce(function(p, l) {
    return l.name || X0(-3 * -1843 + -1999 * -1 + -1 * 7513), t0(p, l.name);
  }, vs).toString() : "", g;
}
var _d = new Hs(), qo = Ks(), Er = c0.createContext({ shouldForwardProp: void (17 * -335 + 1 * -5822 + 11517), styleSheet: _d, stylis: qo });
Er.Consumer;
var Qd = c0.createContext(void (-1 * 259 + -6261 + 6520));
function $o() {
  return u0(Er);
}
function zd(x) {
  var o = it(x.stylisPlugins), t = o[0], e = o[-142 * -20 + -20 * -239 + -7619], n = $o().styleSheet, r = $e(function() {
    var u = n, g = {};
    return g.useCSSOMInjection = !1, x.sheet ? u = x.sheet : x.target && (u = u.reconstructWithOptions({ target: x.target }, !1)), x.disableCSSOMInjection && (u = u.reconstructWithOptions(g)), u;
  }, [x.disableCSSOMInjection, x.sheet, x.target, n]), i = $e(function() {
    var u = {};
    u.namespace = x.namespace, u.prefix = x.enableVendorPrefixes;
    var g = {};
    return g.options = u, g.plugins = t, Ks(g);
  }, [x.enableVendorPrefixes, x.namespace, t]);
  Oe(function() {
    qg(t, x.stylisPlugins) || e(x.stylisPlugins);
  }, [x.stylisPlugins]);
  var a = $e(function() {
    var u = {};
    return u.shouldForwardProp = x.shouldForwardProp, u.styleSheet = r, u.stylis = i, u;
  }, [x.shouldForwardProp, r, i]), s = {};
  s.value = a;
  var c = {};
  return c.value = i, c0.createElement(Er.Provider, s, c0.createElement(Qd.Provider, c, x.children));
}
var oa = function() {
  function x(o, t) {
    var e = this;
    this.inject = function(n, r) {
      void (8989 + 81 * -19 + -7450) === r && (r = qo);
      var i = e.name + r.hash;
      n.hasNameForId(e.id, i) || n.insertRules(e.id, i, r(e.rules, i, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, Lr(this, function() {
      throw X0(-1 * 9421 + 9071 * -1 + 4626 * 4, String(e.name));
    });
  }
  return x.prototype.getName = function(o) {
    return void (11 * 837 + -9007 + -5 * 40) === o && (o = qo), this.name + o.hash;
  }, x;
}(), qd = function(x) {
  return x >= "A" && x <= "Z";
};
function ra(x) {
  for (var o = "", t = 5772 + -74 * 78; t < x.length; t++) {
    var e = x[t];
    if (4574 + 6297 * -1 + 1724 === t && e === "-" && x[233 * 11 + 6194 * 1 + -8757] === "-") return x;
    qd(e) ? o += "-" + e.toLowerCase() : o += e;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var Ps = function(x) {
  return x == null || x === !1 || x === "";
}, Vs = function(x) {
  var o, t, e = [];
  for (var n in x) {
    var r = x[n];
    x.hasOwnProperty(n) && !Ps(r) && (Array.isArray(r) && r.isCss || L0(r) ? e.push("".concat(ra(n), ":"), r, ";") : E0(r) ? e.push.apply(e, H0(H0(["".concat(n, " {")], Vs(r), !1), ["}"], !1)) : e.push("".concat(ra(n), ": ").concat((o = n, (t = r) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 1889 * 1 + 26 * 52 + -1 * 3241 === t || o in pd || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function a0(x, o, t, e) {
  if (Ps(x)) return [];
  if (Tr(x)) return [".".concat(x.styledComponentId)];
  if (L0(x)) {
    if (!L0(r = x) || r.prototype && r.prototype.isReactComponent || !o) return [x];
    var n = x(o);
    return q.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof oa || E0(n) || n === null || console.error("".concat(Ss(x), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), a0(n, o, t, e);
  }
  var r;
  return x instanceof oa ? t ? (x.inject(t, e), [x.getName(e)]) : [x] : E0(x) ? Vs(x) : Array.isArray(x) ? Array.prototype.concat.apply($x, x.map(function(i) {
    return a0(i, o, t, e);
  })) : [x.toString()];
}
function $d(x) {
  for (var o = -6828 + 4 * 1707; o < x.length; o += 1) {
    var t = x[o];
    if (L0(t) && !Tr(t)) return !1;
  }
  return !0;
}
var e1 = ws(qx), t1 = function() {
  function x(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = q.NODE_ENV === "production" && (void (-697 * -1 + -3587 + 2890) === e || e.isStatic) && $d(o), this.componentId = t, this.baseHash = t0(e1, t), this.baseStyle = e, Hs.registerId(t);
  }
  return x.prototype.generateAndInjectStyles = function(o, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = x0(n, this.staticRulesId);
      else {
        var r = na(a0(this.rules, o, t, e)), i = Qo(t0(this.baseHash, r) >>> 0);
        if (!t.hasNameForId(this.componentId, i)) {
          var a = e(r, ".".concat(i), void 0, this.componentId);
          t.insertRules(this.componentId, i, a);
        }
        n = x0(n, i), this.staticRulesId = i;
      }
    else {
      for (var s = t0(this.baseHash, e.hash), c = "", u = -2108 + -4 * -527; u < this.rules.length; u++) {
        var g = this.rules[u];
        if (typeof g == "string") c += g, q.NODE_ENV !== "production" && (s = t0(s, g));
        else if (g) {
          var p = na(a0(g, o, t, e));
          s = t0(s, p + u), c += p;
        }
      }
      if (c) {
        var l = Qo(s >>> 0);
        t.hasNameForId(this.componentId, l) || t.insertRules(this.componentId, l, e(c, ".".concat(l), void (-17551 + 17551 * 1), this.componentId)), n = x0(n, l);
      }
    }
    return n;
  }, x;
}(), Ts = c0.createContext(void (1926 * 3 + -7849 + -1 * -2071));
Ts.Consumer;
var Wo = {}, ia = /* @__PURE__ */ new Set();
function n1(x, o, t) {
  var e = Tr(x), n = x, r = !yo(x), i = o.attrs, a = void (-2391 + -3 * -797) === i ? $x : i, s = o.componentId, c = void (-13 * 723 + 2 * 3986 + 1 * 1427) === s ? function(j, F) {
    var Z = typeof j != "string" ? "sc" : zi(j);
    Wo[Z] = (Wo[Z] || 1 * -3394 + 8893 + -5499) + 1;
    var J = "".concat(Z, "-").concat(vd(qx + Z + Wo[Z]));
    return F ? "".concat(F, "-").concat(J) : J;
  }(o.displayName, o.parentComponentId) : s, u = o.displayName, g = void (-1 * -6674 + -1631 * -5 + -14829) === u ? function(j) {
    return yo(j) ? "styled.".concat(j) : "Styled(".concat(Ss(j), ")");
  }(x) : u, p = o.displayName && o.componentId ? "".concat(zi(o.displayName), "-").concat(o.componentId) : o.componentId || c, l = e && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, C = o.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var m = n.shouldForwardProp;
    if (o.shouldForwardProp) {
      var A = o.shouldForwardProp;
      C = function(j, F) {
        return m(j, F) && A(j, F);
      };
    } else C = m;
  }
  var d = new t1(t, p, e ? n.componentStyle : void (19 * -379 + -2 * 57 + 7315));
  function v(j, F) {
    return function(Z, J, be) {
      var Q = Z.attrs, ue = Z.componentStyle, le = Z.defaultProps, Ze = Z.foldedComponentIds, ct = Z.styledComponentId, ie = Z.target, He = c0.useContext(Ts), De = $o(), et = Z.shouldForwardProp || De.shouldForwardProp;
      q.NODE_ENV !== "production" && px(ct);
      var Ye = bd(J, He, le) || T0, Ce = function(f0, Qe, ht) {
        var tt = {};
        tt.className = void (-3170 + 5 * 634), tt.theme = ht;
        for (var Jt, mt = _e(_e({}, Qe), tt), gt = 2215 + 5 * -443; gt < f0.length; gt += 1) {
          var Ut = L0(Jt = f0[gt]) ? Jt(mt) : Jt;
          for (var dt in Ut) mt[dt] = dt === "className" ? x0(mt[dt], Ut[dt]) : dt === "style" ? _e(_e({}, mt[dt]), Ut[dt]) : Ut[dt];
        }
        return Qe.className && (mt.className = x0(mt.className, Qe.className)), mt;
      }(Q, J, Ye), Ve = Ce.as || ie, Fe = {};
      for (var pe in Ce) Ce[pe] === void 0 || pe[-9409 * 1 + -8175 + 17584] === "$" || pe === "as" || pe === "theme" && Ce.theme === Ye || (pe === "forwardedAs" ? Fe.as = Ce.forwardedAs : et && !et(pe, Ve) || (Fe[pe] = Ce[pe], et || q.NODE_ENV !== "development" || ug(pe) || ia.has(pe) || !_o.has(Ve) || (ia.add(pe), console.warn('styled-components: it looks like an unknown prop "'.concat(pe, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Te = function(f0, Qe) {
        var ht = $o(), tt = f0.generateAndInjectStyles(Qe, ht.styleSheet, ht.stylis);
        return q.NODE_ENV !== "production" && px(tt), tt;
      }(ue, Ce);
      q.NODE_ENV !== "production" && Z.warnTooManyClasses && Z.warnTooManyClasses(Te);
      var Xe = x0(Ze, ct);
      return Te && (Xe += " " + Te), Ce.className && (Xe += " " + Ce.className), Fe[yo(Ve) && !_o.has(Ve) ? "class" : "className"] = Xe, Fe.ref = be, Ne(Ve, Fe);
    }(G, j, F);
  }
  v.displayName = g;
  var G = c0.forwardRef(v), Y = {};
  return Y.attrs = !0, Y.componentStyle = !0, Y.displayName = !0, Y.foldedComponentIds = !0, Y.shouldForwardProp = !0, Y.styledComponentId = !0, Y.target = !0, G.attrs = l, G.componentStyle = d, G.displayName = g, G.shouldForwardProp = C, G.foldedComponentIds = e ? x0(n.foldedComponentIds, n.styledComponentId) : "", G.styledComponentId = p, G.target = e ? n.target : x, Object.defineProperty(G, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(j) {
    this._foldedDefaultProps = e ? function(F) {
      for (var Z = [], J = -2851 + -1 * 478 + 3330; J < arguments.length; J++) Z[J - (-116 * 5 + -7903 + 1414 * 6)] = arguments[J];
      for (var be = -4 * 299 + 7516 + -16 * 395, Q = Z; be < Q.length; be++) zo(F, Q[be], !0);
      return F;
    }({}, n.defaultProps, j) : j;
  } }), q.NODE_ENV !== "production" && (md(g, p), G.warnTooManyClasses = /* @__PURE__ */ function(j, F) {
    var Z = {}, J = !1;
    return function(be) {
      if (!J && (Z[be] = !0, Object.keys(Z).length >= 3372 + 1447 * -1 + -3 * 575)) {
        var Q = F ? ' with the id of "'.concat(F, '"') : "";
        console.warn("Over ".concat(21 * 4 + -8754 + 8870, " classes were generated for component ").concat(j).concat(Q, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), J = !0, Z = {};
      }
    };
  }(g, p)), Lr(G, function() {
    return ".".concat(G.styledComponentId);
  }), r && Os(G, x, Y), G;
}
function aa(x, o) {
  for (var t = [x[-7107 + -1 * 1830 + 8937]], e = 7133 * -1 + -2702 + 9835, n = o.length; e < n; e += -9631 * -1 + 5691 + -15321) t.push(o[e], x[e + 1]);
  return t;
}
var sa = function(x) {
  var o = {};
  return o.isCss = !0, Object.assign(x, o);
};
function x1(x) {
  for (var o = [], t = -320 * -17 + 3898 + -9337; t < arguments.length; t++) o[t - 1] = arguments[t];
  if (L0(x) || E0(x)) return sa(a0(aa($x, H0([x], o, !0))));
  var e = x;
  return -5510 + -3 * -1318 + 1556 === o.length && e.length === 1 && typeof e[-1 * 4354 + -34 * -47 + 52 * 53] == "string" ? a0(e) : sa(a0(aa(e, o)));
}
function er(x, o, t) {
  if (void (-2178 + 13 * -59 + 2945) === t && (t = T0), !o) throw X0(1, o);
  var e = function(n) {
    for (var r = [], i = -9 * 150 + 11 * 218 + -1 * 1047; i < arguments.length; i++) r[i - 1] = arguments[i];
    return x(o, t, x1.apply(void (-3 * 1621 + -84 * -39 + -69 * -23), H0([n], r, !1)));
  };
  return e.attrs = function(n) {
    return er(x, o, _e(_e({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return er(x, o, _e(_e({}, t), n));
  }, e;
}
var Ls = function(x) {
  return er(n1, x);
}, Sn = Ls;
_o.forEach(function(x) {
  Sn[x] = Ls(x);
});
q.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Mn = "__sc-".concat(g0, "__");
q.NODE_ENV !== "production" && q.NODE_ENV !== "test" && typeof window < "u" && (window[Mn] || (window[Mn] = 16259 + 1 * -16259), -4 * 123 + 1 * -727 + -610 * -2 === window[Mn] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Mn] += 7 * 204 + 6750 + -629 * 13);
const o1 = Sn.div`
  position: relative;
`, r1 = Sn.video`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(x) => x.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class re extends Error {
  constructor(t, e) {
    super(t);
    M(this, "cause");
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
var cx = ((x) => (x.CONTINUE_DETECTION = "continue-detection", x.SWITCH_CAMERA = "switch-camera", x.TOGGLE_MIRROR = "toggle-mirror", x))(cx || {}), Wt = ((x) => (x.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", x.CONTROL = "document-auto-capture:control", x.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", x.DOCUMENT_DETECTION = "document-auto-capture:document-detection", x.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", x.STATE_CHANGED = "document-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", x))(Wt || {}), i1 = ((x) => (x.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", x.CONTROL = "face-auto-capture:control", x.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", x.FACE_DETECTION = "face-auto-capture:face-detection", x.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", x.STATE_CHANGED = "face-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", x))(i1 || {}), a1 = ((x) => (x.ANIMATION_END = "magnifeye-auto-capture:animation-end", x.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", x))(a1 || {}), s1 = ((x) => (x.STATUS_CHANGED = "smile-auto-capture:status-changed", x))(s1 || {});
const Gt = {};
Gt.CANDIDATE_SELECTION = "candidate_selection", Gt.DOCUMENT_CENTERING = "document_centering", Gt.DOCUMENT_NOT_PRESENT = "document_not_present", Gt.DOCUMENT_TOO_FAR = "document_too_far", Gt.SHARPNESS_TOO_LOW = "sharpness_too_low", Gt.BRIGHTNESS_TOO_LOW = "brightness_too_low", Gt.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Gt.HOTSPOTS_PRESENT = "hotspots_present";
const At = Gt, Dt = {};
Dt.isPresent = At.DOCUMENT_NOT_PRESENT, Dt.isNotSmall = At.DOCUMENT_TOO_FAR, Dt.isNotOutOfBounds = At.DOCUMENT_CENTERING, Dt.isSharp = At.SHARPNESS_TOO_LOW, Dt.isNotDim = At.BRIGHTNESS_TOO_LOW, Dt.isNotBright = At.BRIGHTNESS_TOO_HIGH, Dt.noHotspots = At.HOTSPOTS_PRESENT;
const c1 = Dt, tr = {};
tr.FRONT = "user", tr.REAR = "environment";
const Es = tr, nn = {};
nn.LOADING = "LOADING", nn.ERROR = "ERROR", nn.WAITING = "WAITING", nn.RUNNING = "RUNNING";
const qe = nn;
var g1 = ((x) => (x.CLOSEUP = "CLOSEUP", x.DISTANT = "DISTANT", x.MIDDLE = "MIDDLE", x))(g1 || {});
const eo = wn(void 0);
eo.displayName = "AppStateContext";
function Bn() {
  const x = u0(eo);
  if (x === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return x;
}
const d1 = eo.Provider;
class Ns extends rt {
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
    return ((o = this.context) == null ? void 0 : o.appState) === qe.ERROR ? null : this.props.children;
  }
}
M(Ns, "contextType", eo);
const u1 = Sn.canvas`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, l1 = Sn.div`
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
function I1() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const f1 = xs(
  ({ detectionDetails: x, isImageMirror: o }, t) => I1() ? (console.log(x), /* @__PURE__ */ H(Ct, { children: [
    /* @__PURE__ */ H(u1, { ref: t, $isImageMirror: o }),
    /* @__PURE__ */ H(l1, { children: Object.entries(x).map(([e, n]) => /* @__PURE__ */ H("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ H("strong", { children: n })
    ] }, e)) })
  ] })) : null
), bx = wn(void 0);
bx.displayName = "AnalyticsContext";
function C1() {
  const x = u0(bx);
  if (x === void 0)
    throw new Error(`${bx.displayName} must be used within a AnalyticsProvider`);
  return x;
}
function Ds(x, o, t, e, n) {
  return Se(e - 800, n);
}
(function(x, o) {
  function t(s, c, u, g, p) {
    return Se(u - 505, c);
  }
  function e(s, c, u, g, p) {
    return Se(c - -204, u);
  }
  const n = x();
  function r(s, c, u, g, p) {
    return Se(s - -187, p);
  }
  function i(s, c, u, g, p) {
    return Se(s - -426, c);
  }
  function a(s, c, u, g, p) {
    return Se(s - -603, g);
  }
  for (; ; )
    try {
      if (parseInt(t(717, "AFi@", 713, 708, 707)) / 1 + -parseInt(r(14, 28, 14, 3, "diA]")) / 2 * (parseInt(t(707, "i9qz", 698, 691, 693)) / 3) + -parseInt(a(-387, -390, -370, "IMo3", -378)) / 4 * (parseInt(e(8, -4, "LXxf", 2, -16)) / 5) + parseInt(i(-229, "2ofP", -212, -225, -215)) / 6 + parseInt(t(728, "i$]U", 715, 717, 719)) / 7 * (-parseInt(e(-8, -17, "Xza&", -27, 0)) / 8) + -parseInt(t(714, "4]1B", 697, 681, 694)) / 9 + parseInt(t(726, "R1U)", 719, 735, 711)) / 10 === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ax, -329802 + -28399 * -32);
function Ax() {
  const x = ["dN8TdSk4", "mmk+yGSved0DW5GeWRa", "FXWnBCkja0FcNmoaW6pdMCokWPi", "W6BcGxRdPCoIW4ZcKM4", "ntq9W6uA", "W69IW6uCpchdL8o7WOG", "W6jPW65zrfZcPSo2WRZdL0JcR8ki", "WRW8u1ldOh7dRCoNmq", "amo+WR0ICg4Kn8k0WOS", "tCkPvCkOWRuYDLVdV8oKW4m", "m8oJxCozxmo/na", "u8k5WQWgWOu6WO42W4FdLIC5pa", "BSkLWRFdMqG", "W4ilW68", "WQnpFmkpW5qlW6m", "WRBcJSkdbYnvWP1idmkt", "xComW6qdWRG", "BIHFpKLmWO3dO8kqFKKSW6a", "W4XTWQTNW4tcSCoFmrRcSgVdS8o+", "zmkyWPLk", "eNZdOSoQza", "z3z7h8k5o8klWRNdLCk/aaTy", "F8kQmmolq8kZW4fAWQ7cOmoDWP0Y", "sNSRdCkG", "yxWVqmocDCo6WRm", "WO0/W584WPm", "pXbuW7tdKa", "W6r8jepdGq", "WQKUjmkFW6/cOmolW4VdTSkdW7FdLCoJ", "WRpcJmoLzCo0", "W5pcPSkmyf1aWOJdM8kQW7nGW61b", "W7y5WRLmbq", "W6yRW5u0WR3cMCk/W5XhuCk/w2C", "iceTcSo6", "x3yPWQZcIq"];
  return Ax = function() {
    return x;
  }, Ax();
}
const yx = wn(void (-131 * 27 + -2251 + 5788));
function ca(x, o, t, e, n) {
  return Se(e - 199, o);
}
function vo(x, o, t, e, n) {
  return Se(t - -788, e);
}
function Se(x, o) {
  const t = Ax();
  return Se = function(e, n) {
    e = e - (73 * -33 + -275 * -1 + -38 * -61);
    let r = t[e];
    if (Se.USNzcS === void 0) {
      var i = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = p.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, p) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + p.charCodeAt(d % p.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      Se.VQiGLW = u, x = arguments, Se.USNzcS = !0;
    }
    const a = t[527 * -6 + 5976 + -2814], s = e + a, c = x[s];
    return c ? r = c : (Se.CoAPhk === void 0 && (Se.CoAPhk = !0), r = Se.VQiGLW(r, n), x[s] = r), r;
  }, Se(x, o);
}
yx[vo(-572, -600, -586, "%7H0") + nr(-164, -165, -173, -165, "CpPn") + "e"] = vo(-604, -591, -590, "L#VE") + Ds(1012, 1015, 1005, 1011, "f%&f") + vo(-600, -579, -583, "XB6*");
function nr(x, o, t, e, n) {
  return Se(x - -354, n);
}
function Nr() {
  function x(i, a, s, c, u) {
    return ca(i - 399, c, s - 312, a - 714);
  }
  function o(i, a, s, c, u) {
    return ca(i - 422, s, s - 115, a - -329);
  }
  function t(i, a, s, c, u) {
    return nr(a - -165, a - 392, s - 498, c - 228, c);
  }
  const e = u0(yx);
  if (e === void 0) throw new Error(yx[r(-68, -73, "q3NQ", -81) + o(90, 83, "i9qz") + "e"] + (o(61, 56, "q3NQ") + n(-199, -166, -185, -183, "4]1B") + o(67, 54, "i$]U") + x(1128, 1119, 1131, "hXCq") + n(-217, -209, -204, -215, "gT4h") + x(1133, 1125, 1115, "7fVm") + t(-295, -304, -316, "&1s*") + x(1126, 1112, 1105, "hQ4z")));
  function n(i, a, s, c, u) {
    return Ds(i - 395, a - 181, s - 5, c - -1200, u);
  }
  function r(i, a, s, c, u) {
    return nr(c - 64, a - 83, s - 465, c - 161, s);
  }
  return e;
}
function Ke(x, o) {
  const t = Wx();
  return Ke = function(e, n) {
    e = e - (6858 * 1 + -6989 + 425 * 1);
    let r = t[e];
    if (Ke.hKaMhG === void 0) {
      var i = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = p.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, p) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + p.charCodeAt(d % p.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      Ke.umElJL = u, x = arguments, Ke.hKaMhG = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? r = c : (Ke.Dfucuq === void 0 && (Ke.Dfucuq = !0), r = Ke.umElJL(r, n), x[s] = r), r;
  }, Ke(x, o);
}
(function(x, o) {
  function t(a, s, c, u, g) {
    return Ke(s - -646, u);
  }
  function e(a, s, c, u, g) {
    return Ke(g - -841, a);
  }
  function n(a, s, c, u, g) {
    return Ke(a - -817, g);
  }
  function r(a, s, c, u, g) {
    return Ke(c - 827, s);
  }
  const i = x();
  for (; ; )
    try {
      if (-parseInt(n(-503, -502, -502, -498, "^EzD")) / 1 + -parseInt(n(-515, -517, -502, -526, "^12F")) / 2 + -parseInt(n(-498, -489, -501, -495, "GNMq")) / 3 * (parseInt(e("ygW2", -543, -542, -547, -537)) / 4) + parseInt(r(1114, "&Y72", 1126, 1134, 1123)) / 5 * (-parseInt(e("RlhF", -549, -552, -552, -541)) / 6) + parseInt(e("^8qX", -530, -532, -541, -529)) / 7 + -parseInt(t(-326, -339, -332, "tdaH", -327)) / 8 + -parseInt(n(-502, -504, -492, -508, "^8qX")) / 9 * (-parseInt(r(1151, "]HAu", 1145, 1154, 1148)) / 10) === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Wx, -888892 + 4 * 35645 + -3 * -397520);
function Wx() {
  const x = ["W6WvWQ7cQCkUW6JcLSokdSoHma", "ECo+W43dSba", "FmkzW5ZdVr0", "mH9OBMtdGdNdISo3CSoSWQNcGa", "WPFcKSkYa1LKWPhcPhxcHmoNWRC", "EIFcNCk5geDdWOBcRrOuWQ/cSW", "gmkwomkI", "W4CKWPNcPgHbfmkscSomWQpdLW", "ANBcQmoHWQfsFmoboxpdR8kGW6i", "WRHuWOe0nmoVWOjPWPXEWR3dJMS", "W4xcHwVcV8ouW6NcPSkYAmk6zSkS", "yhlcRSoHWQzrd8oifeFdV8ka", "W7OHWPRcRdDwtq", "C8kDW5ZdKHW", "W4iPWPddLtiIiCkZkW", "lSkdW6lcSSoPWR7dNW", "xM4mfmoy", "WRHzWOe0oCoJWO97WOXJWQZdSKu", "WP7cNmkXCWOhWRpcH20", "cmkQeYmgWR7dMq", "wmkihsi6", "W6JdHZ7dICkKCSk5WOuVeLRdOZK", "tWhcOCoyWQuwW5XpeCoWWP3dK0m", "WPNdHmoRwb80WR8", "WPZcKCk2b1WsWRhcI0pcUCoe", "W6RcMf7cQSoOECkLAv0swWbU", "k3hdHSo+sW"];
  return Wx = function() {
    return x;
  }, Wx();
}
function p1({ licensePath: x, bramble: o, wasmDirectoryPath: t }) {
  function e(c, u, g, p, l) {
    return Ke(p - 798, u);
  }
  const [n, r] = it(), i = n !== void (3130 + 2386 * -1 + 3 * -248);
  function a(c, u, g, p, l) {
    return Ke(g - -729, l);
  }
  Oe(() => {
    async function c() {
      function u(p, l, C, m, A) {
        return Ke(l - -167, A);
      }
      function g(p, l, C, m, A) {
        return Ke(C - 11, p);
      }
      await o[u(129, 143, 146, 133, "^WaX")](t, x), r(o[u(157, 150, 161, 153, "CVcf") + g("[aJ0", 306, 314) + g("pZq^", 311, 316) + "t"]());
    }
    c();
  }, [o, t, x, r]);
  const s = {};
  return s[e(1105, "O]N&", 1105, 1095) + e(1099, "CVcf", 1095, 1104)] = n, s[a(-411, -406, -409, -420, "jAa6") + "sh"] = i, s;
}
var Ys = ((x) => (x.DOCUMENT = "document-auto-capture:dev", x.FACE = "face-auto-capture:dev", x))(Ys || {});
const xr = {};
xr.SIMD = "simd", xr.NO_SIMD = "no-simd";
const ga = xr, or = {};
or.Lower = "Lower", or.Higher = "Higher";
const rr = or, gx = {};
gx.VISIBLE = "VISIBLE", gx.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", gx.HIDDEN = "HIDDEN";
const vx = gx;
(function(x, o) {
  function t(s, c, u, g, p) {
    return Je(g - -638, s);
  }
  function e(s, c, u, g, p) {
    return Je(p - -450, s);
  }
  function n(s, c, u, g, p) {
    return Je(s - 919, g);
  }
  function r(s, c, u, g, p) {
    return Je(s - 613, p);
  }
  for (var i = x(); ; )
    try {
      var a = -parseInt(t("^TNN", -432, -433, -435, -430)) / 1 + -parseInt(t("e&qv", -433, -442, -441, -428)) / 2 * (parseInt(t("RfhM", -451, -432, -445, -440)) / 3) + -parseInt(t("Xwy(", -438, -437, -442, -454)) / 4 + parseInt(n(1113, 1103, 1123, "TF^k", 1113)) / 5 * (-parseInt(t("tKfI", -425, -441, -430, -432)) / 6) + parseInt(n(1128, 1132, 1133, "Isqv", 1139)) / 7 * (-parseInt(e("3WFk", -244, -252, -234, -246)) / 8) + -parseInt(t("W3Nq", -443, -435, -447, -442)) / 9 + -parseInt(n(1131, 1121, 1122, "[WfM", 1127)) / 10 * (-parseInt(r(813, 805, 803, 823, "%d5v")) / 11);
      if (a === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(wx, 4 * 168128 + -266247 + -16 * 3247);
function wx() {
  var x = ["WQNdS0pcJmkrECoHW6JcVeVdM0O", "jCo3WQ8EW4RcOq3dUCksWPhcMbeE", "tdGtdSk3W67cVJ9VEq", "WQ4RewRcVa", "lSo2chxdSGCT", "wmkvpSo8BNhcKtVcISoc", "WOTSWQnPAgGcfW", "W7TalNCE", "oaNdR8ofWQdcTCoHmXmFb8kl", "W5zWuZ/dUwiIWRxcP8opruS", "WOFdGa9XW7udlXFcOmo4ASkqW4K", "ymo1WOTiW6m", "m8obW5ZdJCkcW4icW4Tyiv56", "B1WYWOqKksNdICoqWRepff8", "kCktqsdcTf1KdSkeW7BcICoJCG", "W6XOASoqWOBcVcy", "xgBcG3WKW6GUBCoRW4G", "oLbak0TNWRWMACogW4hcSG", "WPtdLSknWQaSWOzUWQlcHmkYpCkRWRy", "WQJcPSkJWPvJdSkPluRcVu/cSW", "xCkrm8k9rfpcIalcPG", "WPtdK8kaWQmQWOXUWPFcSSkqpCkzWRq", "cYVdLCkFW6ZdRNlcR8on", "W6GoA8o7WRRcPZnd", "WQmBumoGW7CcW4KZweu"];
  return wx = function() {
    return x;
  }, wx();
}
function Je(x, o) {
  var t = wx();
  return Je = function(e, n) {
    e = e - (-55 * -116 + 6490 + 746 * -17);
    var r = t[e];
    if (Je.VpgsNS === void 0) {
      var i = function(g) {
        for (var p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", C = "", m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = p.indexOf(d);
        for (var G = 0, Y = l.length; G < Y; G++)
          C += "%" + ("00" + l.charCodeAt(G).toString(16)).slice(-2);
        return decodeURIComponent(C);
      }, a = function(g, p) {
        var l = [], C = 0, m, A = "";
        g = i(g);
        var d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + p.charCodeAt(d % p.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (var v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      Je.ZOPFMj = a, x = arguments, Je.VpgsNS = !0;
    }
    var s = t[0], c = e + s, u = x[c];
    return u ? r = u : (Je.uDohrY === void 0 && (Je.uDohrY = !0), r = Je.ZOPFMj(r, n), x[c] = r), r;
  }, Je(x, o);
}
function h1({ crosshatch: x }) {
  function o(e, n, r, i, a) {
    return Je(e - -563, i);
  }
  function t(e, n, r, i, a) {
    return Je(i - -746, r);
  }
  return x != null && x[t(-562, -547, "Ot1O", -557) + "id"] ? rr[t(-529, -530, "9@(V", -536) + "r"] : rr[o(-357, -366, -359, "[WfM")];
}
(function(x, o) {
  function t(a, s, c, u, g) {
    return Be(g - 454, c);
  }
  const e = x();
  function n(a, s, c, u, g) {
    return Be(a - 756, s);
  }
  function r(a, s, c, u, g) {
    return Be(c - -577, u);
  }
  function i(a, s, c, u, g) {
    return Be(a - -431, s);
  }
  for (; ; )
    try {
      if (-parseInt(r(-417, -427, -411, "7PyX", -400)) / 1 + parseInt(n(895, ")$M[", 881, 884, 882)) / 2 + parseInt(t(590, 610, "AWaR", 592, 597)) / 3 * (-parseInt(r(-439, -422, -435, "Rv4n", -438)) / 4) + -parseInt(t(604, 603, "3nm&", 617, 609)) / 5 * (-parseInt(r(-434, -436, -428, "jff*", -442)) / 6) + parseInt(n(900, "N[BI", 887, 908, 884)) / 7 + parseInt(n(921, "Hguh", 915, 908, 915)) / 8 + -parseInt(i(-270, "kAM1", -256, -261, -261)) / 9 === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Sx, -14 * -33146 + 347 * -3271 + 823 * 1783);
function Be(x, o) {
  const t = Sx();
  return Be = function(e, n) {
    e = e - 139;
    let r = t[e];
    if (Be.KvogbO === void 0) {
      var i = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = p.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, p) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + p.charCodeAt(d % p.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      Be.cvhOav = u, x = arguments, Be.KvogbO = !0;
    }
    const a = t[9137 * 1 + 2082 + 863 * -13], s = e + a, c = x[s];
    return c ? r = c : (Be.VCYdyi === void 0 && (Be.VCYdyi = !0), r = Be.cvhOav(r, n), x[s] = r), r;
  }, Be(x, o);
}
function Sx() {
  const x = ["r8koaCkQW70", "W6WNc0dcN2H8x8o/W47cPhZcG8k4", "xSoQxmodxmkUs1RdIwzVW5K", "WOtcJKFcO8kWDCop", "qfJcGeSZ", "WP1qW6mcWPSEWRNdTsNcGCkaW6hdSa", "WQOkoCk2DKrvWPNcHSo8W7ZcGa", "WOeZE2NdQa", "D3ldMY0vy8oLW4ZdTLXFoSkc", "WQpcIqWyW7xdNxqdySkVdJhcTYK", "W4uNW7KqWQ/dNr98Fe8eWOZcIG", "xw3dNmotdq", "WQTXxG3dGW", "uSojnXXYgae", "bYZcHCkqt2BcJSkyvWpdNe8", "bSoBzSo7WRXKc8k+FCkIWPtdKSo0", "yfJcUG", "A1qAW47cKmohW6CoWP/cJSkaW5Gj", "W4b0uSk9vq", "W5eWWPBcS2tcPmoBWQGqCGtcJam", "saNcS8otreanWQK/W6G", "tCkEW4JdLSoF", "W4FcPWtcRhvhwCoBWPi2", "W5FcPCkWfCoAWRNdLsGUBq", "yfqzW4NcKSonWR4+WQxcU8kpW78", "a1xdQW", "W4/cMSk6eqNdOx5JW6DR", "hmooWRJcNuC", "WPNdVCo1tSoy", "W7XVxSkUuG", "W6KXuYX+"];
  return Sx = function() {
    return x;
  }, Sx();
}
function m1({ children: x, licensePath: o, bramble: t, wasmDirectoryPath: e }) {
  const n = {};
  n[i(1002, 1004, 1003, 993, "URdI") + "le"] = t;
  function r(m, A, d, v, G) {
    return Be(v - -302, m);
  }
  function i(m, A, d, v, G) {
    return Be(A - 854, G);
  }
  n[i(1027, 1012, 1012, 1025, "S9Z2") + a(432, 436, "N[BI", 460, 446) + "h"] = o;
  function a(m, A, d, v, G) {
    return Be(G - 286, d);
  }
  n[u(656, 653, "yP!O", 642, 655) + r("AtC@", -151, -133, -143) + i(1023, 1021, 1008, 1012, "oSo3") + "th"] = e;
  const { sunfish: s, crosshatch: c } = p1(n);
  function u(m, A, d, v, G) {
    return Be(G - 498, d);
  }
  const g = {};
  g[i(1003, 994, 986, 984, "AWaR") + r("dBu7", -141, -128, -138)] = c;
  const p = $e(() => ({ redfin: h1(g), sunfish: s, crosshatch: c, bramble: t }), [s, c, t]), l = {};
  l[C("kAM1", -358, -372)] = p;
  function C(m, A, d, v, G) {
    return Be(d - -513, m);
  }
  return l[r("jum^", -135, -149, -146) + r("jff*", -139, -145, -148)] = x, H(yx[u(660, 631, "S9Z2", 635, 645) + u(638, 655, "3fXK", 655, 643)], l);
}
(function(x, o) {
  function t(a, s, c, u, g) {
    return lt(a - 526, g);
  }
  function e(a, s, c, u, g) {
    return lt(c - -964, s);
  }
  var n = x();
  function r(a, s, c, u, g) {
    return lt(u - -60, s);
  }
  for (; ; )
    try {
      var i = parseInt(r(399, "LOvc", 394, 393, 395)) / 1 + parseInt(r(387, "Nehm", 394, 392, 397)) / 2 + -parseInt(t(972, 981, 975, 974, "AYo8")) / 3 + parseInt(e(-509, "wy]l", -510, -507, -509)) / 4 * (-parseInt(e(-504, "lCSn", -507, -501, -515)) / 5) + -parseInt(t(975, 966, 973, 979, "6A4u")) / 6 + -parseInt(e(-516, "GuWd", -516, -521, -525)) / 7 + parseInt(e(-511, "Pv]j", -509, -501, -513)) / 8 * (parseInt(e(-497, "UWi*", -504, -507, -497)) / 9);
      if (i === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Bx, 678665);
function Bx() {
  var x = ["zCoxhfpcNZRcUvHVW71p", "hsLeWO9SWRW/WPahk8kcW4q", "kZZcJConWQldTCooWOVdGSoAW4JdLSoI", "FCkIW7tdNSk2mx9Vs1T6WPnx", "mSkEnbRdRNCgW5hcQSkntJhdGq", "e8kBESk4tJeLWPRdJItcUmoeW7m", "zeFcQSoUWORcVCkwWPNcNCoAimklzq", "wfnmWQT6WPa5W68", "yCoqn0XKW4nVW4NcUmkfvSoEW68", "lN51WObFW43dQCoXbCoNW6BcR8oE", "idqcpMhcJSoNDanMduO5", "gr0AxSojBmkMW5VdVgdcTmoaWRm", "W6hdTmoDp8ony8omsCoDWQ7dOmo/pa", "W44HW4eaB8o7W5tcNwf6Aw0", "WONdJ8kkW7bZwmoqbbJcH1G", "sfhcV3hcSmkLhfq", "tqOTWPP2WPZdJSkF", "eYWIW5m3W6yyWQ0"];
  return Bx = function() {
    return x;
  }, Bx();
}
function lt(x, o) {
  var t = Bx();
  return lt = function(e, n) {
    e = e - (-5444 + 1 * -9877 + -1051 * -15);
    var r = t[e];
    if (lt.svZgzB === void 0) {
      var i = function(g) {
        for (var p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", C = "", m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = p.indexOf(d);
        for (var G = 0, Y = l.length; G < Y; G++)
          C += "%" + ("00" + l.charCodeAt(G).toString(16)).slice(-2);
        return decodeURIComponent(C);
      }, a = function(g, p) {
        var l = [], C = 0, m, A = "";
        g = i(g);
        var d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + p.charCodeAt(d % p.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (var v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      lt.nPzQhj = a, x = arguments, lt.svZgzB = !0;
    }
    var s = t[-9553 + -83 * -114 + 91], c = e + s, u = x[c];
    return u ? r = u : (lt.kfXfyj === void 0 && (lt.kfXfyj = !0), r = lt.nPzQhj(r, n), x[c] = r), r;
  }, lt(x, o);
}
function b1({ analytics: x, crosshatch: o }) {
  return o !== void (-291 + 1 * 291) && !o.isAnalyticsDisabled ? x : void (1 * 2743 + 46 * -198 + 6365);
}
function A1({ analytics: x, appKey: o, redfin: t, crosshatch: e, bramble: n }) {
  const r = {};
  r.analytics = x, r.crosshatch = e;
  const i = b1(r);
  return Oe(() => {
    i && i.init(o);
  }, [i, o]), Oe(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), i && i.walleye(t, n.getCustomerName()));
  }, [i, n, e, t]), Oe(() => {
    if (i)
      return window.addEventListener("beforeunload", i.endSession), () => {
        i.endSession(), window.removeEventListener("beforeunload", i.endSession);
      };
  }, [i]), i;
}
function y1({
  analytics: x,
  appKey: o,
  children: t
}) {
  const { redfin: e, crosshatch: n, bramble: r } = Nr(), i = A1({ analytics: x, redfin: e, appKey: o, crosshatch: n, bramble: r }), a = $e(
    () => ({
      analytics: i
    }),
    [i]
  );
  return /* @__PURE__ */ H(bx.Provider, { value: a, children: t });
}
const W1 = -34 * -97 + -5039 + 1741 * 1 + 0.8, v1 = -7167 + 1 * 2234 + 1 * 4933 + 0.43, w1 = -1052 + -8 * 177 + 2468 + 0.03, S1 = -8981 * 1 + -4393 + 13374 + 0.5, B1 = 0 + 0.25, k1 = 1055 * 2 + -2121 * -3 + -8473 + 0.9, G1 = 25 * -165 + 179 * 54 + -5541 + 0.1, dx = {};
dx.minDuration = 1e3, dx.maxDuration = 2500, dx.minFrames = 10;
const wo = dx, ir = {};
ir.max = 100, ir.min = 10;
const da = ir, O1 = -1 * 9704 + -2893 + 13317, Z1 = -1785 + 5 * 397, H1 = 4, Fs = "AES-CBC", Xs = "RSA-OAEP", R1 = "SHA-256", K1 = "image/jpeg", P1 = 1372 + -356 * 24 + 3590 * 2, V1 = "SAM v1.39.3 for idcards", T1 = "dot_embedded_bg.wasm", jn = (x, o) => Math.hypot(o.x - x.x, o.y - x.y), L1 = (x) => x.length < 23 * 119 + 491 * 5 + 29 * -179 ? 1182 + 1 * -8693 + 7511 : x.reduce((t, e) => t + e, 4 * -2243 + -7267 + -16239 * -1) / x.length, Ms = (x) => Number.parseFloat(x.toFixed(301 + -379 * -7 + -2951)), E1 = (x) => {
  const o = x.getContext("2d");
  o && o.clearRect(17 * 445 + -84 * -28 + 47 * -211, 2275 + 1 * -2275, o.canvas.width, o.canvas.height);
}, N1 = 828 + 827 * -1 + 0.5, D1 = 13 * -652 + 9 * -13 + 8593 + 0.85, So = 7940 + 3470 * -2, Y1 = 2555 + -1 * 5201 + 3246, F1 = 1 * 9467 + 4857 * -1 + -922 * 5, X1 = (x, o) => x < So && o >= So ? So : x, M1 = (x, o) => x < o ? x : o, Dr = ({ height: x, width: o }) => {
  let t;
  return o > x ? t = X1(x, o) : t = o, { width: t, height: M1(x, t) };
}, js = (x) => {
  const o = Dr(x).width, t = o * D1, e = (x.width - t) / (7993 + -1 * 1832 + -2053 * 3), n = t / N1, r = (x.height - n) / (1 * -2122 + -6600 + 8724), i = {};
  return i.shiftX = e, i.shiftY = r, i.width = t, i.height = n, i;
}, j1 = (x) => {
  const { height: o, shiftX: t, shiftY: e, width: n } = js(x), r = {};
  return r.shiftX = t / x.width, r.shiftY = e / x.height, r.width = n / x.width, r.height = o / x.height, r;
}, J1 = (x) => {
  const { bottomLeft: o, bottomRight: t, topLeft: e, topRight: n } = x, r = jn(e, n), i = jn(n, t), a = jn(o, t), s = jn(e, o);
  return Math.min(r, i, a, s);
}, U1 = "@innovatrics/dot-common-auto-capture", _1 = "6.1.5", Q1 = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, z1 = {
  "@dot/proto-files": "2.0.4",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, q1 = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.1"
}, $1 = {
  name: U1,
  private: !0,
  version: _1,
  scripts: Q1,
  dependencies: z1,
  devDependencies: q1
}, Yr = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), ua = () => {
  const x = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return x && o;
}, eu = () => {
  const x = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return x && o ? !1 : o;
}, ar = (x) => new Promise((o) => {
  setTimeout(o, x);
}), Q0 = (x) => JSON.parse(JSON.stringify(x, (o, t) => typeof t == "number" ? Ms(t) : t)), Js = () => $1.version, Us = (x) => new URL(x).hostname.replace("www.", ""), tu = () => Us(window.location.href) === "localhost", Jn = (x) => Object.entries(x).map(([o, t]) => encodeURIComponent(o) + "=" + encodeURIComponent(t)).join("&"), nu = (x, o) => {
  const t = x && performance.now() - x;
  return o >= wo.minFrames ? t > wo.minDuration : t > wo.maxDuration;
}, xu = (x, o) => JSON.stringify(x) === JSON.stringify(o) ? o : x, ou = () => "prod".toLowerCase() === "dev";
class _s extends Array {
  constructor(t) {
    super();
    M(this, "size");
    this.size = t;
  }
  pushFixed(...t) {
    if (t.length > this.size) {
      const e = t.slice(-this.size);
      this.push(...e);
      return;
    }
    this.length === this.size && this.splice(-3856 + -1311 * -3 + 1 * -77, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-3842 + -1 * -3842);
  }
}
const ru = (x, o, t = K1) => new Promise((e) => {
  x.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, o);
}), iu = async (x) => ru(x, 90), au = (x, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(x, o.shiftX, o.shiftY, o.width, o.height, -2 * 1501 + -312 + 3314, 0, t.width, t.height), t;
}, su = (x) => {
  const o = x.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(7 * -739 + 1 * 5740 + -567, 11970 + 21 * -570, x.width, x.height);
  return t;
}, cu = (x, o, t, e) => {
  const n = x.getContext("2d");
  n && (n.beginPath(), n.strokeStyle = t, n.rect(o.topLeft.x, o.topLeft.y, o.width, o.height), n.stroke());
}, Bo = (x, o, t) => {
  const { height: e, shiftX: n, shiftY: r, width: i } = o, a = {};
  a.x = n, a.y = r;
  const s = {};
  s.topLeft = a, s.width = i, s.height = e, s.color = t, cu(x, s, t);
};
function gu({ canvas: x, color: o, fill: t, offset: e = 1 * 563 + -2 * 4229 + -1 * -7895, polygon: n }) {
  const r = x.getContext("2d");
  if (!r) return;
  const { bottomLeft: i, bottomRight: a, topLeft: s, topRight: c } = n;
  t ? r.fillStyle = o : r.strokeStyle = o, r.beginPath(), r.moveTo(s.x + e, s.y + e), r.lineTo(c.x + e, c.y + e), r.lineTo(a.x + e, a.y + e), r.lineTo(i.x + e, i.y + e), r.closePath(), t ? r.fill() : r.stroke();
}
const du = (x, o) => {
  const t = x.getContext("2d");
  t && t.drawImage(o, -3405 + -8222 * -1 + 1 * -4817, -739 * 1 + -7 * 849 + 6682);
}, uu = (x, o) => {
  const { height: t, shiftX: e, shiftY: n, width: r } = o;
  return !(x.x < e || x.x > e + r || x.y < n || x.y > n + t);
}, lu = (x, o) => Object.values(x).every((t) => uu(t, o)), Qs = wn(null), zs = () => {
  const x = u0(Qs);
  if (!x)
    throw new Error("Missing provider for CameraOptionsContext");
  return x;
}, Iu = (x) => {
  const { cameraFacing: o, licensePath: t, onError: e, onPhotoTaken: n, sessionToken: r, thresholds: i, wasmDirectoryPath: a } = x, s = Yr() ? "environment" : "user";
  return {
    onPhotoTaken: n,
    onError: e,
    cameraFacing: o ?? s,
    wasmDirectoryPath: a,
    licensePath: t,
    sessionToken: r,
    thresholds: {
      confidenceThreshold: (i == null ? void 0 : i.confidenceThreshold) ?? W1,
      sharpnessThreshold: (i == null ? void 0 : i.sharpnessThreshold) ?? S1,
      brightnessLowThreshold: (i == null ? void 0 : i.brightnessLowThreshold) ?? B1,
      brightnessHighThreshold: (i == null ? void 0 : i.brightnessHighThreshold) ?? k1,
      hotspotsScoreThreshold: (i == null ? void 0 : i.hotspotsScoreThreshold) ?? G1,
      sizeSmallThreshold: (i == null ? void 0 : i.sizeSmallThreshold) ?? v1,
      outOfBoundsThreshold: (i == null ? void 0 : i.outOfBoundsThreshold) ?? w1
    }
  };
}, fu = ({ cameraOptions: x, children: o }) => {
  const t = $e(() => ({
    documentCameraOptions: Iu(x)
  }), [x]);
  return /* @__PURE__ */ H(Qs.Provider, { value: t, children: o });
}, Cu = (x, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(x, t));
}, Fx = class Fx {
  constructor() {
    M(this, "lastDetails", {});
    M(this, "delayedTime", -1 * -7387 + -902 + 1 * -6485);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Fx()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 19 * 283 + 7460 + -12837;
  }
  isDetailChanged(o, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(o, t) {
    this.isDetailChanged(o, t) && Cu(o, t);
  }
  dispatchDelayedCustomEventOnChange(o, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(o, t), this.delayedTime = n);
  }
};
M(Fx, "_instance");
let ln = Fx;
const kn = ln.getInstance(), la = (x, o, t = Y1) => {
  const e = {};
  e.instructionCode = o;
  const n = e;
  kn.dispatchDelayedCustomEventOnChange(x, n, t);
}, Ia = (x, o) => {
  kn.dispatchCustomEventOnChange(x, o);
}, pu = (x, o) => {
  kn.dispatchCustomEventOnChange(x, o);
}, hu = (x, o) => {
  const t = {};
  t.size = o;
  const e = t;
  kn.dispatchCustomEventOnChange(x, e);
}, mu = (x, o, t) => {
  const e = o.confidence < t ? void 0 : o, n = {};
  n.detectedObject = e;
  const r = n;
  kn.dispatchCustomEventOnChange(x, r);
}, bu = (x, o) => {
  if (ou()) {
    const t = {};
    t.candidateSelectionImages = o;
    const e = t;
    ln.getInstance().dispatchCustomEventOnChange(x, e);
  }
}, Au = (x, o) => {
  const { cameraResolution: t, shouldMirror: e } = o;
  Oe(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, pu(x, n);
  }, [t, e, x]);
}, yu = (x) => x === Wt.CONTROL ? !Yr() : !0, Wu = (x, o) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: r } = Bn(), [i, a] = it(), s = $e(() => {
    const u = r && o && o.isStreaming && o.getCameraSettings().facingMode;
    return u ? i ?? u === "user" : i ?? yu(x);
  }, [o, i, x, r]);
  Oe(() => {
    const u = () => {
      t !== qe.LOADING && e(qe.RUNNING);
    }, g = () => {
      a(i === void 0 ? !s : !i);
    }, p = async () => {
      if (o) {
        e(qe.LOADING);
        try {
          await o.switchCamera(), e(qe.RUNNING);
        } catch (C) {
          if (C instanceof Error) {
            n(re.fromCameraError(C));
            return;
          }
        }
        a(void 0);
      }
    }, l = (C) => {
      var m;
      switch ((m = C.detail) == null ? void 0 : m["instruction"]) {
        case cx.CONTINUE_DETECTION:
          u();
          break;
        case cx.TOGGLE_MIRROR:
          g();
          break;
        case cx.SWITCH_CAMERA:
          p();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(x, l), () => {
      document.removeEventListener(x, l);
    };
  }, [t, o, n, i, e, s, x]);
  const c = {};
  return c.shouldMirror = s, c;
};
class vu {
  constructor() {
    M(this, "canvasElement");
    M(this, "context");
    this.canvasElement = document.createElement("canvas"), this.context = this.canvasElement.getContext("2d");
  }
  cloneMutable(o) {
    this.canvasElement.width = o.width, this.canvasElement.height = o.height, du(this.canvasElement, o);
  }
}
async function qs() {
  return navigator.mediaDevices.enumerateDevices();
}
async function ko() {
  return (await qs()).filter((o) => o.kind === "videoinput");
}
function Go(x) {
  x.getTracks().forEach((t) => t.stop());
}
function fa(x) {
  return x.getVideoTracks()[-16 * 367 + 1143 + 1 * 4729];
}
const ux = {};
ux.width = 1920, ux.height = 1080, ux.facingMode = Es.FRONT;
const wu = ux;
var It;
class $s {
  constructor({ defaultVideoConstrains: o = wu, minCameraShorterSide: t = O1 } = {}) {
    M(this, "options");
    M(this, "availableCameraProperties", []);
    Re(this, It, null);
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return z(this, It);
  }
  get videoTrack() {
    if (z(this, It)) return fa(z(this, It));
  }
  get isCameraActive() {
    var o;
    return !!((o = z(this, It)) != null && o.active);
  }
  static async requestPermission() {
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    Go(t);
  }
  async open(o = {}) {
    ua() && await ar(-1609 * -4 + 353 * -16 + 26 * -13), ye(this, It, await navigator.mediaDevices.getUserMedia(o)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const o = await ko();
    if (o.length <= 1) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = o.findIndex((a) => a.deviceId === e.deviceId), r = o[n + (2 * -242 + -107 * 57 + 6584)] ?? o[-4 * -2071 + -2478 + -1 * 5806], i = this.getConstraints(t, r);
    await this.open(i);
  }
  close() {
    z(this, It) && (Go(z(this, It)), ye(this, It, null));
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
    const o = this.getSettings(), t = await qs(), e = t.find((n) => n.deviceId === o.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(o) {
    return o === Es.FRONT ? void (-1534 + -2 * -767) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return Yr() ? (await ko()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (346 * 19 + 6517 + -13091);
  }
  async collectAvailableCamerasInfo() {
    const o = await ko();
    for (const t of o) {
      ua() && await ar(-5 * -1819 + -4838 + -81 * 47);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const r = await navigator.mediaDevices.getUserMedia(n), i = fa(r);
        if (!i) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = i.getSettings(), s = { ...a };
        s.deviceName = i.label;
        const c = {};
        c.cameraProperties = s;
        const u = c;
        this.availableCameraProperties.push(u), Go(r);
      } catch (e) {
        e instanceof Error && re.logError(e);
      }
    }
  }
  getConstraints(o, t) {
    const e = { ...this.options.defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t.deviceId } : void (-9638 + 1 * 6157 + -59 * -59);
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
It = new WeakMap();
class Su {
  constructor(o, t) {
    M(this, "canvas");
    this.videoHandler = o, this.cameraHandler = t, this.canvas = new vu();
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(o = {}) {
    await $s.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(o.facingMode), e = this.cameraHandler.getConstraints(o, t);
    await this.cameraHandler.open(e), eu() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var t;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const o = (t = this.cameraHandler.videoTrack) == null ? void 0 : t.getSettings();
    if (!(o != null && o.width)) throw new re("Cant take photo - video width is undefined");
    if (!(o != null && o.height)) throw new re("Cant take photo - video height is undefined");
    if (!this.canvas.context) throw new re("Cant take photo - cant create context");
    return this.canvas.canvasElement.width = o.width, this.canvas.canvasElement.height = o.height, this.canvas.context.drawImage(this.videoHandler.videoElement, -127 * -39 + 5645 * 1 + 1 * -10598, 6699 + 2233 * -3), { image: this.canvas.canvasElement, timestamp: Date.now() };
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
var Zt;
class Bu {
  constructor(o) {
    Re(this, Zt);
    ye(this, Zt, o);
  }
  get videoElement() {
    return z(this, Zt);
  }
  async play(o) {
    z(this, Zt).srcObject = o, await z(this, Zt).play();
  }
  stop() {
    z(this, Zt).srcObject = null;
  }
  hasSrcObject() {
    return !!z(this, Zt).srcObject;
  }
}
Zt = new WeakMap();
function ku(x, o) {
  const t = jt(), { handleError: e, setIsCameraReady: n } = Bn(), [r, i] = it(), a = K0((c) => {
    i((u) => xu(c, u));
  }, []);
  Oe(() => ((async () => {
    if (!x.current) {
      e(new re("Something went wrong during video initialization"));
      return;
    }
    const u = new Bu(x.current), g = new $s(), p = new Su(u, g);
    try {
      const l = {};
      l.facingMode = o, await p.startVideoStream(l);
    } catch (l) {
      if (l instanceof Error) {
        e(re.fromCameraError(l));
        return;
      }
    }
    n(!0), a(p.getCameraResolution()), t.current = p;
  })(), function() {
    t.current && t.current.stopStreaming(), n(!1);
  }), [o, e, n, x, a]);
  const s = {};
  return s.cameraService = t.current, s.cameraResolution = r, s.onCameraResolutionChange = a, s;
}
function Gu(x, o) {
  Oe(() => {
    function t() {
      x.current && hu(o, x.current.getBoundingClientRect());
    }
    return t(), window.addEventListener("resize", t), () => {
      window.removeEventListener("resize", t);
    };
  }, [x, o]);
}
var Ou = Symbol.for("preact-signals");
function Fr() {
  if (G0 > 1)
    G0--;
  else {
    for (var x, o = !1; void (-3 * 158 + 9159 + -8685) !== gn; ) {
      var t = gn;
      for (gn = void (8581 * -1 + 359 * -8 + -1 * -11453), sr++; void (47 * -15 + -623 * -10 + -1 * 5525) !== t; ) {
        var e = t.o;
        if (t.o = void (13 * 380 + 7287 + -12227), t.f &= -3, !(-2615 + 2623 * 1 & t.f) && nc(t)) try {
          t.c();
        } catch (n) {
          !o && (x = n, o = !(8004 + 25 * 83 + 10079 * -1));
        }
        t = e;
      }
    }
    if (sr = 74 * 119 + -1 * 9059 + 253, G0--, o) throw x;
  }
}
var te = void (3 * 269 + 3397 + -4204), gn = void (6491 + -189 * 6 + -5357), G0 = -3 * 1223 + -7732 * 1 + -877 * -13, sr = 5628 + 2 * -2814, kx = -1234 * -7 + 2729 * -3 + 11 * -41;
function ec(x) {
  if (void (-1 * 6131 + 865 + 5266) !== te) {
    var o = x.n;
    if (void (-2483 + -226 * 26 + 8359) === o || o.t !== te)
      return o = { i: 0, S: x, p: te.s, n: void (-1151 + -1151 * -1), t: te, e: void (748 * -5 + -3358 + 7098), x: void 0, r: o }, void (-7 + 3439 * -2 + 6885) !== te.s && (te.s.n = o), te.s = o, x.n = o, -23 * 299 + 1842 + 5067 & te.f && x.S(o), o;
    if (-(4048 + -11 * 827 + 5050) === o.i)
      return o.i = -2 * -519 + 1 * 8105 + -9143, void (7174 + -34 * 211) !== o.n && (o.n.p = o.p, void (26 * 347 + -1 * 8621 + -401) !== o.p && (o.p.n = o.n), o.p = te.s, o.n = void (9331 + 3 * 828 + -2363 * 5), te.s.n = o, te.s = o), o;
  }
}
function we(x) {
  this.v = x, this.i = -3844 + -1922 * -2, this.n = void (-23 * -263 + -2879 + 10 * -317), this.t = void (-6454 + -1 * -6454);
}
we.prototype.brand = Ou, we.prototype.h = function() {
  return !(1 * -1e3 + -2341 * 3 + 8023);
}, we.prototype.S = function(x) {
  this.t !== x && void (146 * 1 + 37 * 205 + -7731) === x.e && (x.x = this.t, void (-10884 + 1814 * 6) !== this.t && (this.t.e = x), this.t = x);
}, we.prototype.U = function(x) {
  if (void (338 * 26 + -46 * 178 + -600) !== this.t) {
    var o = x.e, t = x.x;
    void (32 * -306 + -6421 + 16213) !== o && (o.x = t, x.e = void (4889 + 1 * -4889)), void (1 * -2534 + 7220 + -6 * 781) !== t && (t.e = o, x.x = void (-3404 + -75 * 59 + 7829)), x === this.t && (this.t = t);
  }
}, we.prototype.subscribe = function(x) {
  var o = this;
  return Mr(function() {
    var t = o.value, e = te;
    te = void (-3 * -191 + 6912 + -7485);
    try {
      x(t);
    } finally {
      te = e;
    }
  });
}, we.prototype.valueOf = function() {
  return this.value;
}, we.prototype.toString = function() {
  return this.value + "";
}, we.prototype.toJSON = function() {
  return this.value;
}, we.prototype.peek = function() {
  var x = te;
  te = void (-3384 + -1 * -1506 + -2 * -939);
  try {
    return this.value;
  } finally {
    te = x;
  }
}, Object.defineProperty(we.prototype, "value", { get: function() {
  var x = ec(this);
  return void (9472 + 1 * -6587 + -2885) !== x && (x.i = this.i), this.v;
}, set: function(x) {
  if (x !== this.v) {
    if (sr > 1368 + 1068 * 6 + 76 * -101) throw new Error("Cycle detected");
    this.v = x, this.i++, kx++, G0++;
    try {
      for (var o = this.t; void (59 * -89 + -94 * 23 + 353 * 21) !== o; o = o.x) o.t.N();
    } finally {
      Fr();
    }
  }
} });
function tc(x) {
  return new we(x);
}
function nc(x) {
  for (var o = x.s; void (2388 + -796 * 3) !== o; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !0;
  return !1;
}
function xc(x) {
  for (var o = x.s; void (808 + 334 * 28 + -10160) !== o; o = o.n) {
    var t = o.S.n;
    if (void (-537 * 11 + -65 * 29 + 7792) !== t && (o.r = t), o.S.n = o, o.i = -(-5 * 833 + -4611 + 1 * 8777), void (1209 * 1 + 2649 + 6 * -643) === o.n) {
      x.s = o;
      break;
    }
  }
}
function oc(x) {
  for (var o = x.s, t = void (1718 * 2 + 4380 + -7816 * 1); void (1351 * 7 + 592 * -10 + -9 * 393) !== o; ) {
    var e = o.p;
    -(-7945 + 5897 * -1 + 109 * 127) === o.i ? (o.S.U(o), e !== void 0 && (e.n = o.n), o.n !== void 0 && (o.n.p = e)) : t = o, o.S.n = o.r, void (4891 * 1 + 2657 * -3 + 3080) !== o.r && (o.r = void (427 * 11 + -638 * 6 + 1 * -869)), o = e;
  }
  x.s = t;
}
function S0(x) {
  we.call(this, void (-7166 + -2 * -162 + 6842)), this.x = x, this.s = void (-11 * -373 + -83 * -43 + -7672), this.g = kx - (3739 + 47 * -181 + -1 * -4769), this.f = -1367 * -7 + -6283 * 1 + -2 * 1641;
}
(S0.prototype = new we()).h = function() {
  if (this.f &= -(114 * 53 + -1 * -7899 + -13938), 3942 + -1 * -9929 + -2774 * 5 & this.f) return !(-691 * 2 + -5024 + -43 * -149);
  if (-16518 + 1 * 16550 == (81 * -25 + 1499 * 1 + -562 * -1 & this.f)) return !(1686 * 1 + -7169 + 5483);
  if (this.f &= -(-28 * -268 + -3 * 2144 + -1067), this.g === kx) return !(-5008 + 4871 * 1 + 1 * 137);
  if (this.g = kx, this.f |= 1605 + -83 * -104 + 2559 * -4, this.i > 1 * 1303 + 625 + -4 * 482 && !nc(this)) return this.f &= -(1 * 8411 + -2938 + -5471 * 1), !(-1 * -1273 + 1 * -5498 + 4225);
  var x = te;
  try {
    xc(this), te = this;
    var o = this.x();
    (6299 + 39 * 43 + -7960 & this.f || this.v !== o || -11531 + 887 * 13 === this.i) && (this.v = o, this.f &= -(-3819 + -4133 * 1 + 1 * 7969), this.i++);
  } catch (t) {
    this.v = t, this.f |= 14377 + 1 * -14361, this.i++;
  }
  return te = x, oc(this), this.f &= -(2493 + 1 * -2491), !(1364 * -2 + -7381 + 1 * 10109);
}, S0.prototype.S = function(x) {
  if (void (-2608 * -3 + 14 * 665 + 659 * -26) === this.t) {
    this.f |= 2169 * -2 + 11 * 149 + 2735;
    for (var o = this.s; void (5256 + 6 * -876) !== o; o = o.n) o.S.S(o);
  }
  we.prototype.S.call(this, x);
}, S0.prototype.U = function(x) {
  if (void (3702 + -1851 * 2) !== this.t && (we.prototype.U.call(this, x), this.t === void 0)) {
    this.f &= -33;
    for (var o = this.s; void (3102 + 16 * 257 + -7214) !== o; o = o.n) o.S.U(o);
  }
}, S0.prototype.N = function() {
  if (!(4117 * -2 + -327 * 5 + 9871 & this.f)) {
    this.f |= -7 * -1163 + -5612 + -2523;
    for (var x = this.t; void (-5099 + 3606 * 1 + 1493) !== x; x = x.x) x.t.N();
  }
}, Object.defineProperty(S0.prototype, "value", { get: function() {
  if (-86 * 41 + 5989 + 2462 * -1 & this.f) throw new Error("Cycle detected");
  var x = ec(this);
  if (this.h(), void (-6840 + -152 * -45) !== x && (x.i = this.i), -1438 + 727 * 2 & this.f) throw this.v;
  return this.v;
} });
function Zu(x) {
  return new S0(x);
}
function rc(x) {
  var o = x.u;
  if (x.u = void (3984 + 80 * -3 + -3744), typeof o == "function") {
    G0++;
    var t = te;
    te = void 0;
    try {
      o();
    } catch (e) {
      throw x.f &= -(10461 + -1 * 10459), x.f |= 8, Xr(x), e;
    } finally {
      te = t, Fr();
    }
  }
}
function Xr(x) {
  for (var o = x.s; void (7 * 1 + 1 * -19 + 12) !== o; o = o.n) o.S.U(o);
  x.x = void (5742 + -19 * 175 + 2417 * -1), x.s = void (1 * 618 + -9372 + -2 * -4377), rc(x);
}
function Hu(x) {
  if (te !== this) throw new Error("Out-of-order effect");
  oc(this), te = x, this.f &= -(-5 * 835 + 9271 + -5094), -6745 * -1 + 7 * -1061 + 690 & this.f && Xr(this), Fr();
}
function xn(x) {
  this.x = x, this.u = void (-9348 + -1576 * 5 + 17228), this.s = void (3095 * -3 + -6705 + -41 * -390), this.o = void (7629 + -505 * 17 + 956), this.f = 3046 + 1 * 1788 + -4802;
}
xn.prototype.c = function() {
  var x = this.S();
  try {
    if (-7831 + 6311 * -1 + -5 * -2830 & this.f || void (1361 + 8 * 212 + -3057 * 1) === this.x) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    x();
  }
}, xn.prototype.S = function() {
  if (2 * -4182 + -7916 + 16281 & this.f) throw new Error("Cycle detected");
  this.f |= -9259 + 1 * -7118 + 16378, this.f &= -(-345 * -13 + 5339 + -9815), rc(this), xc(this), G0++;
  var x = te;
  return te = this, Hu.bind(this, x);
}, xn.prototype.N = function() {
  !(8706 + 1 * -2733 + -5971 & this.f) && (this.f |= 2, this.o = gn, gn = this);
}, xn.prototype.d = function() {
  this.f |= 8, -3674 + 2383 * -1 + -26 * -233 & this.f || Xr(this);
};
function Mr(x) {
  var o = new xn(x);
  try {
    o.c();
  } catch (t) {
    throw o.d(), t;
  }
  return o.d.bind(o);
}
var Oo;
function k0(x, o) {
  N[x] = o.bind(null, N[x] || function() {
  });
}
function Un(x) {
  Oo && Oo(), Oo = x && x.S();
}
function ic(x) {
  var o = this, t = x.data, e = ac(t);
  e.value = t;
  var n = $e(function() {
    for (var r = o.__v; r = r.__; ) if (r.__c) {
      r.__c.__$f |= 2200 + 1 * 3377 + -5573;
      break;
    }
    return o.__$u.c = function() {
      var i;
      !Ya(n.peek()) && -1 * 1649 + 34 * -34 + 2808 === ((i = o.base) == null ? void (1949 * 3 + -8421 + -9 * -286) : i.nodeType) ? o.base.data = n.peek() : (o.__$f |= -421 * -9 + 7073 + -10861, o.setState({}));
    }, Zu(function() {
      var i = e.value.value;
      return -1 * 2099 + 74 * 109 + -5967 === i ? 5091 * -1 + 5749 * -1 + 10840 : !(-20 * -271 + 2 * -674 + 8 * -509) === i ? "" : i || "";
    });
  }, []);
  return n.value;
}
ic.displayName = "_st";
var cr = {};
cr.configurable = !(4542 * 1 + 8762 + -13304), cr.value = void (2179 * -2 + -2897 * -3 + -619 * 7);
var gr = {};
gr.configurable = !(-9732 * 1 + -115 + -1 * -9847), gr.value = ic;
var dr = {};
dr.configurable = !(-6592 + 146 * -61 + 15498), dr.get = function() {
  var x = {};
  return x.data = this, x;
};
var ur = {};
ur.configurable = !(5846 + 78 * 105 + -14036), ur.value = 1;
var z0 = {};
z0.constructor = cr, z0.type = gr, z0.props = dr, z0.__b = ur, Object.defineProperties(we.prototype, z0), k0("__b", function(x, o) {
  if (typeof o.type == "string") {
    var t, e = o.props;
    for (var n in e) if (n !== "children") {
      var r = e[n];
      r instanceof we && (t || (o.__np = t = {}), t[n] = r, e[n] = r.peek());
    }
  }
  x(o);
}), k0("__r", function(x, o) {
  Un();
  var t, e = o.__c;
  e && (e.__$f &= -2, void (1 * -2158 + 3709 * 1 + -517 * 3) === (t = e.__$u) && (e.__$u = t = function(n) {
    var r;
    return Mr(function() {
      r = this;
    }), r.c = function() {
      e.__$f |= 1, e.setState({});
    }, r;
  }())), Un(t), x(o);
}), k0("__e", function(x, o, t, e) {
  Un(), x(o, t, e);
}), k0("diffed", function(x, o) {
  Un();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, n = o.props;
    if (e) {
      var r = t.U;
      if (r) for (var i in r) {
        var a = r[i];
        a !== void 0 && !(i in e) && (a.d(), r[i] = void 0);
      }
      else t.U = r = {};
      for (var s in e) {
        var c = r[s], u = e[s];
        void (-6150 + -7 * 417 + 9069) === c ? (c = Ru(t, s, u, n), r[s] = c) : c.o(u, n);
      }
    }
  }
  x(o);
});
function Ru(x, o, t, e) {
  var n = o in x && x.ownerSVGElement === void 0, r = tc(t);
  return { o: function(i, a) {
    r.value = i, e = a;
  }, d: Mr(function() {
    var i = r.value.value;
    e[o] !== i && (e[o] = i, n ? x[o] = i : i ? x.setAttribute(o, i) : x.removeAttribute(o));
  }) };
}
k0("unmount", function(x, o) {
  if (typeof o.type == "string") {
    var t = o.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void 0;
        for (var n in e) {
          var r = e[n];
          r && r.d();
        }
      }
    }
  } else {
    var i = o.__c;
    if (i) {
      var a = i.__$u;
      a && (i.__$u = void (-9535 + 77 * -77 + 15464), a.d());
    }
  }
  x(o);
}), k0("__h", function(x, o, t, e) {
  (e < -3456 + -6431 * 1 + -86 * -115 || -12748 + -12757 * -1 === e) && (o.__$f |= 2), x(o, t, e);
}), rt.prototype.shouldComponentUpdate = function(x, o) {
  var t = this.__$u;
  if (!(t && void (-1063 * -8 + -1 * -1543 + 1 * -10047) !== t.s || 38 * -262 + 7769 + 7 * 313 & this.__$f)) return !(1 * -2732 + -9746 + 12478);
  if (8226 + 3 * -2741 & this.__$f) return !(5533 + -211 * 14 + 1 * -2579);
  for (var e in o) return !(427 * -13 + 1 * -5649 + -25 * -448);
  for (var n in x) if (n !== "__source" && x[n] !== this.props[n]) return !(3271 + -4378 * 1 + 1107);
  for (var r in this.props) if (!(r in x)) return !0;
  return !(-3111 + -3319 * 3 + 13069 * 1);
};
function ac(x) {
  return $e(function() {
    return tc(x);
  }, []);
}
function Ku({ analytics: x, cameraFacing: o, controller: t, createProtoMessage: e, onPhotoTaken: n, sessionToken: r }) {
  const i = jt(null), { sunfish: a } = Nr(), { appState: s, handleAppStateChange: c, handleError: u } = Bn(), { cameraResolution: g, cameraService: p, onCameraResolutionChange: l } = ku(i, o), C = ac(void (-1 * 3177 + 9151 * 1 + -58 * 103));
  Oe(() => {
    p != null && p["isStreaming"] && (t != null && t["isDetectorInitialized"]) && a && c(qe.RUNNING);
  }, [p == null ? void 0 : p["isStreaming"], t == null ? void 0 : t["isDetectorInitialized"], c, a]), Oe(() => {
    if (s !== qe.RUNNING) return;
    if (!p || !t) throw new re("Cannot start detection");
    let A = 1 * -1141 + -6058 + 23 * 313, d = !1, v = -4793 + -221 * -5 + 3688;
    const G = new _s(-3573 * -1 + 1 * 1 + -2 * 1772);
    t.clearImagesForDuplicateDetection();
    async function Y({ cameraService: Z, canvasImage: J, controller: be, detection: Q, detectionRecord: ue, onPhotoTaken: le }) {
      const Ze = {};
      Ze.width = J.width, Ze.height = J.height;
      const ct = Ze, ie = await iu(J), He = await Z.getCameraProperties(), De = { ...He, detectionRecord: ue, hashedDetectedImagesWithTimestamp: be.getImagesForDuplicateDetection() }, et = {};
      et.sessionToken = r, et.web = De;
      const Ye = et, Ce = await e(ie, Ye), Ve = {};
      Ve.detection = Q, Ve.imageResolution = ct;
      const Fe = {};
      Fe.image = ie, Fe.data = Ve;
      const pe = Fe, Te = {};
      Te.imageData = pe, Te.content = Ce, Te.webMetadata = De, Te.controller = be, le(Te);
    }
    async function j({ cameraService: Z, controller: J }) {
      const be = Date.now();
      for (; Z.isStreaming && !d; ) {
        if (nu(A, v)) {
          const { detection: Ye, image: Ce } = J.getBestImage() || {}, Ve = J.getDetectionRecord();
          if (Ce && Ye) {
            const Fe = Date.now(), pe = L1(G), Te = {};
            Te.width = Ce.width, Te.height = Ce.height, x == null || x.trackCaptureProcess({ detection: Ye, imageResolution: Te, deviceName: await Z.getDeviceName(), averageFps: pe, captureProcessDurationInMs: Fe - be, facingMode: Z.getCameraSettings().facingMode, instructionSet: await J.getInstructionSet() }), c(qe.WAITING);
            const Xe = {};
            Xe.cameraService = Z, Xe.controller = J, Xe.canvasImage = Ce, Xe.detection = Ye, Xe.detectionRecord = Ve, Xe.onPhotoTaken = n, await Y(Xe), J.restart();
          } else u(new re("Something went wrong during capturing an image"));
          return;
        }
        const Q = Z.takePhoto(), ue = {};
        ue.width = Q.image.width, ue.height = Q.image.height;
        const le = ue;
        let Ze;
        try {
          Ze = await J.processImage(Q);
        } catch (Ye) {
          Ye instanceof Error && u(re.fromCameraError(Ye));
          return;
        }
        const ct = Date.now(), ie = ct - Q.timestamp, He = Ms(1e3 / ie);
        G.pushFixed(He);
        const De = {};
        De.processedImage = Ze, De.detectionTime = ie, De.fps = He, De.resolution = le, De.samVersion = J.samVersion;
        const et = De;
        C.value = et, Ze.isInCandidateSelection && (A === 5899 + 17 * 460 + -51 * 269 && (A = performance.now()), v++), l(le), await ar(Math.max(da.max - ie, da.min));
      }
    }
    const F = {};
    return F.controller = t, F.cameraService = p, j(F), () => {
      d = !0;
    };
  }, [x, e, s, p, t, c, u, n, l, C, r]);
  const m = {};
  return m.videoRef = i, m.cameraResolution = g, m.cameraService = p, m.detectionDetails = C, m;
}
const jr = (x) => {
  const { height: o, width: t } = Dr(x), e = (x.width - t) / (7 * -745 + 2264 + -1 * -2953), n = (x.height - o) / 2, r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = o, r;
}, sc = (x, o) => {
  const t = Dr(x), e = t.width - t.width * 2 * o, n = t.height - t.height * (-538 * 18 + 1719 + 7967) * o, r = (x.width - e) / (-869 * -7 + 139 * -21 + 3 * -1054), i = (x.height - n) / (-9 * 641 + 5070 + -1 * -701), a = {};
  return a.width = e, a.height = n, a.shiftX = r, a.shiftY = i, a;
}, _n = (x, o) => {
  const { shiftX: t, shiftY: e } = jr(x), n = {};
  return n.x = o.x + t, n.y = o.y + e, n;
}, Pu = (x, o) => ({ ...o, topLeft: _n(x, o.topLeft), topRight: _n(x, o.topRight), bottomRight: _n(x, o.bottomRight), bottomLeft: _n(x, o.bottomLeft) }), Vu = ({ redfin: x, cameraResolution: o, detectionDetails: t, isImageMirror: e }) => {
  const {
    documentCameraOptions: { thresholds: n }
  } = zs(), r = jt(null);
  if (Oe(() => {
    if (!(r != null && r.current))
      return;
    r.current.width = o.width, r.current.height = o.height, E1(r.current);
    const C = jr(o), m = sc(o, n.outOfBoundsThreshold), A = js(o);
    t.value && (gu({
      canvas: r.current,
      polygon: t.value.processedImage.detectedDocument,
      color: "red"
    }), Bo(r.current, C, "lime"), Bo(r.current, m, "yellow"), Bo(r.current, A, "blue"));
  }, [o, t.value, n.outOfBoundsThreshold]), !t.value)
    return null;
  const {
    detectionTime: i,
    fps: a,
    processedImage: { detectedDocument: s, instructionCode: c, invalidValidators: u },
    resolution: g,
    samVersion: p
  } = t.value, l = {
    Confidence: s.confidence,
    "Smallest edge": s.smallestEdge,
    Brightness: s.brightness,
    Hotspots: s.hotspots,
    Sharpness: s.sharpness,
    "Detection time": i,
    FPS: a,
    Tier: x,
    Instruction: c,
    Resolution: JSON.stringify(g),
    "Component version": "6.1.5"
  };
  return p && (l["SAM version"] = p), u.length > 0 && (l["Invalid validators"] = u.join(", ")), /* @__PURE__ */ H(
    f1,
    {
      ref: r,
      cameraResolution: o,
      detectionDetails: l,
      isImageMirror: e
    }
  );
};
function Tu(x) {
  return /* @__PURE__ */ H("rect", { fill: "#000", ...x, rx: "2%" });
}
function Lu(x) {
  const [o, t] = it(!1), e = () => t((i) => !i), n = "" + o;
  Y0(() => {
    function i() {
      if (!x.current) return;
      const u = new MutationObserver(() => {
        e();
      }), g = {};
      return g.childList = !0, g.subtree = !0, g.attributes = !0, u.observe(x.current, g), u;
    }
    function a() {
      var p;
      if (!((p = x.current) != null && p["parentElement"])) return;
      const u = new MutationObserver((l) => {
        l.find((m) => {
          for (const A of m.removedNodes)
            if (A === x.current) return !0;
        }) && e(), l.forEach((m) => {
          m.addedNodes.forEach((A) => {
            var d;
            (d = A.parentElement) == null || d.removeChild(A);
          });
        });
      }), g = {};
      return g.childList = !0, u.observe(x.current.parentElement, g), u;
    }
    const s = i(), c = a();
    return () => {
      c == null || c.disconnect(), s == null || s.disconnect();
    };
  });
  const r = {};
  return r.key = n, r;
}
const Eu = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Nu({ cutOut: x, height: o, width: t }) {
  const e = jt(null), { key: n } = Lu(e);
  return /* @__PURE__ */ H("div", { ref: e, style: Eu, children: /* @__PURE__ */ H("svg", { viewBox: `0 0 ${t} ${o}`, children: [
    /* @__PURE__ */ H("defs", { children: [
      /* @__PURE__ */ H("mask", { id: "placeholder", children: [
        /* @__PURE__ */ H("rect", { fill: "#fff", height: "100%", width: "100%" }),
        x
      ] }),
      /* @__PURE__ */ H(
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
            /* @__PURE__ */ H("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ H("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
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
    /* @__PURE__ */ H("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, n);
}
function Du({ fullOverlay: x, resolution: o }) {
  const t = j1(o), e = `${t.height * 100}%`, n = `${t.width * 100}%`, r = `${t.shiftX * 100}%`, i = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ H(
    Nu,
    {
      cutOut: x || /* @__PURE__ */ H(Tu, { height: e, width: n, x: r, y: i }),
      height: o.height,
      width: o.width
    }
  );
}
const Yu = async () => WebAssembly.validate(new Uint8Array([4311 * -2 + -6941 + 15563 * 1, -1734 * -2 + -1 * 6364 + 2993, 3336 + 4163 * -1 + -314 * -3, -2041 * -4 + 785 + 4 * -2210, 5188 + 1403 * 6 + 907 * -15, 0, -8219 * -1 + 5 * 95 + -8694, 5648 + 5648 * -1, 1054 * -3 + -2442 + 5605, 9133 * 1 + -787 * 6 + 2203 * -2, 1, -307 * -17 + -5812 * 1 + 689, -4209 + -148 * -64 + 19 * -277, -46 * 191 + -4501 * -1 + 4286, -883 + 1 * 1006, 1 * -9087 + 3925 * -2 + 3388 * 5, -3756 + -7550 * 1 + 11308, 3192 + 2 * -1986 + 781, -9446 + -2 * 514 + 10474 * 1, -1 * 1697 + 7655 * 1 + 1 * -5948, -5554 + 1 * 4078 + 1486 * 1, -4249 + -7 * 947 + 10879, 1 * 5877 + 4114 + 149 * -67, -5093 + 3083 * 1 + 2010, -9373 * -1 + 1 * -3813 + -5495, 2543 * -2 + -8592 + -2 * -6839, 1 * 9673 + 5025 + -14445, 71 * -131 + -5553 + 14869, -1277 * -4 + -123 * -26 + -8053, 521 * -1 + -97 * 21 + 2656, -916 * 1 + -1 * -1489 + 281 * -2]));
function se(x, o) {
  const t = Gx();
  return se = function(e, n) {
    e = e - 205;
    let r = t[e];
    if (se.BTQdIB === void 0) {
      var i = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = p.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, p) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + p.charCodeAt(d % p.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      se.DXeawN = u, x = arguments, se.BTQdIB = !0;
    }
    const a = t[-79 * 19 + -2737 + 4238], s = e + a, c = x[s];
    return c ? r = c : (se.RvZysV === void 0 && (se.RvZysV = !0), r = se.DXeawN(r, n), x[s] = r), r;
  }, se(x, o);
}
(function(x, o) {
  function t(s, c, u, g, p) {
    return se(g - 818, s);
  }
  function e(s, c, u, g, p) {
    return se(g - -831, c);
  }
  function n(s, c, u, g, p) {
    return se(s - 294, u);
  }
  function r(s, c, u, g, p) {
    return se(p - 974, g);
  }
  function i(s, c, u, g, p) {
    return se(u - 343, c);
  }
  const a = x();
  for (; ; )
    try {
      if (parseInt(e(-616, "p21#", -573, -597, -581)) / 1 + parseInt(e(-581, "WwEX", -583, -591, -581)) / 2 + parseInt(r(1218, 1211, 1197, "as5R", 1199)) / 3 * (parseInt(t("Uwxb", 1030, 1044, 1049, 1046)) / 4) + parseInt(n(536, 513, "wDkx", 560, 539)) / 5 * (parseInt(n(542, 547, "Uwxb", 563, 549)) / 6) + -parseInt(t("t5y9", 1047, 1047, 1031, 1036)) / 7 * (-parseInt(i(550, "2^u0", 553, 565, 529)) / 8) + -parseInt(n(547, 550, "ZOS)", 558, 523)) / 9 * (parseInt(r(1225, 1203, 1234, "zWfp", 1217)) / 10) + -parseInt(e(-604, "pAYE", -627, -614, -629)) / 11 * (parseInt(n(512, 500, "WwEX", 526, 534)) / 12) === o) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Gx, 2 * -171910 + -603213 * -1 + 704519);
async function Fu() {
  const x = {};
  x[t(-58, -21, "ax9H", -36)] = Fs, x[t(-56, -57, "a7Mw", -40) + "h"] = 256;
  const o = await window[t(-2, -14, "wD*#", -12) + "o"][c(865, 876, 880, 887, ")ZR8") + "e"][c(891, 898, 887, 894, "(vac") + e(18, 49, 24, 34, "ZOS)") + "y"](x, !0, [e(43, 36, 64, 46, "hdN&") + "pt", r(-185, -209, -190, -188, "d8(E") + "pt"]);
  function t(u, g, p, l, C) {
    return se(l - -266, p);
  }
  function e(u, g, p, l, C) {
    return se(l - -193, C);
  }
  function n(u, g, p, l, C) {
    return se(l - 705, C);
  }
  function r(u, g, p, l, C) {
    return se(g - -437, C);
  }
  const i = Uint8Array[e(35, 19, 63, 42, "Zx8f")](Array(1 * -8706 + -2616 + 11338)[e(40, 74, 56, 57, "ZOS)")](5679 + -1 * 1269 + 98 * -45)), a = window[n(927, 909, 935, 916, "a7Mw") + "o"][r(-201, -201, -211, -180, "#n4f") + c(869, 853, 859, 836, "gB%l") + n(921, 918, 891, 910, "dVfL")](i), s = {};
  function c(u, g, p, l, C) {
    return se(g - 647, C);
  }
  return s[c(845, 866, 879, 855, "WwEX")] = o, s.iv = a, s;
}
function Gx() {
  const x = ["W7eKk17cKW", "WPOdyaVdId/cQLTuWRLJeuq", "WP8fW5PIWRRcLg3cV8oRWO1eW7tcUW", "W7JdRxtcOSkmWOlcMSk+BY8", "W5C1WORdPZZcLM7dMa", "e8kypSojoW", "WPTqExFcPa", "WR/cKCoYsGfeWONcKW", "AZhdN3iL", "h8o4z8oqWPjjE8kHWR3cSq", "W6fHqMCN", "ixDDcW", "E2RdSZ9b", "W7tcVSoLCCkBkSkYWOrNaG", "CI4jvmkbWRLVWOtcJIRdJhO", "W6KlpCoSta", "C1NdJSknfG", "o1DglSov", "k8o/tg3cKgddPCo6WOK", "aZ15WQTruwVdH8oQWPSkW4S", "mwxcMdL3WR7dRmo9mmkbqs0", "WP8fW51LWRVdQH7cO8orWRnj", "WRxdOSo9eWO", "qCoFC8kjD8o3W60JWOhdH8kW", "fSkKBSk4WRb8lWhcPCkQ", "W49RB1ihW7pdGKBcGJK", "ztKNymkD", "WRSrWP5BW4xcQJP4vhXneCoL", "WRm+fs1TnKxdHxJdGCkqWQm", "WPipzx/cSKpdKwLR", "W4btkG", "WQRdQmkQ", "ixHmoG", "rgW2", "iCkmA8koW7HlW4DyyLO", "Asfngrm", "WRJcLSkUp1y1W4NcLWzfdCk3W4W", "WRRdTCoQbaO", "jMPulmox", "yI49ySkq", "W6lcQSoDBHi", "WR3dHSksuq", "eSk0omkdWO9RwG", "WOPKWORdHq", "W4jLA1rAWP3cUvZcGq1jW70J", "wCk3W7TWm8oRfmoYWOBdR2FdOmkK", "WO5xDg4", "kspcLq7cLG", "W7JdUmo8W7RcTWK3", "W7D6q2eY"];
  return Gx = function() {
    return x;
  }, Gx();
}
async function Xu(x) {
  const { iv: o, key: t } = await Fu(), e = {};
  function n(p, l, C, m, A) {
    return se(l - -512, A);
  }
  e[n(-273, -280, -266, -287, "zWfp")] = Fs, e.iv = o;
  function r(p, l, C, m, A) {
    return se(A - -35, m);
  }
  const i = await window[s("d8(E", 701) + "o"][r(221, 218, 230, "Zx8f", 210) + "e"][r(189, 189, 239, "pAYE", 214) + "pt"](e, t, x);
  function a(p, l, C, m, A) {
    return se(l - 698, A);
  }
  function s(p, l, C, m, A) {
    return se(l - 486, p);
  }
  function c(p, l, C, m, A) {
    return se(p - 559, C);
  }
  const u = await window[n(-267, -268, -274, -246, "Pp79") + "o"][a(919, 936, 937, 949, "pAYE") + "e"][c(783, 758, "r%tp") + c(780, 783, "gB%l")](r(188, 171, 167, "oG)e", 187), t), g = {};
  return g[a(964, 945, 944, 953, "1ahb") + "ge"] = i, g[s("dOn5", 706)] = u, g.iv = o, g;
}
(function(x, o) {
  function t(a, s, c, u, g) {
    return Ee(s - -640, a);
  }
  function e(a, s, c, u, g) {
    return Ee(c - 667, g);
  }
  function n(a, s, c, u, g) {
    return Ee(s - 14, g);
  }
  const r = x();
  function i(a, s, c, u, g) {
    return Ee(c - -794, g);
  }
  for (; ; )
    try {
      if (parseInt(e(1026, 1019, 1026, 1017, "XDb$")) / 1 * (parseInt(t("dXf]", -287, -292, -296, -282)) / 2) + parseInt(t("[%2W", -290, -305, -299, -291)) / 3 * (-parseInt(e(1015, 1016, 1011, 1021, "vmi[")) / 4) + parseInt(e(1030, 1001, 1016, 1016, "xpJs")) / 5 + parseInt(n(369, 380, 366, 395, "K9e#")) / 6 + -parseInt(i(-431, -442, -440, -442, "KwMe")) / 7 * (-parseInt(t("5jrt", -269, -260, -276, -281)) / 8) + -parseInt(t("7%^@", -273, -288, -280, -280)) / 9 * (parseInt(t("8BJk", -275, -287, -274, -275)) / 10) + -parseInt(i(-443, -428, -438, -441, "HUno")) / 11 === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ox, 412217);
function Mu(x) {
  const o = new ArrayBuffer(x[t(343, 341, "A*Ac") + "h"]);
  function t(i, a, s, c, u) {
    return Ee(a - -2, s);
  }
  const e = new Uint8Array(o);
  function n(i, a, s, c, u) {
    return Ee(s - 705, a);
  }
  function r(i, a, s, c, u) {
    return Ee(u - 865, s);
  }
  for (let i = 297 * -19 + 1766 * 1 + 3877, a = x[r(1229, 1238, "VH1N", 1235, 1237) + "h"]; i < a; i++)
    e[i] = x[t(354, 361, "Ocb(") + n(1054, "[%2W", 1062)](i);
  return o;
}
function Ee(x, o) {
  const t = Ox();
  return Ee = function(e, n) {
    e = e - 343;
    let r = t[e];
    if (Ee.MDPtZV === void 0) {
      var i = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = p.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, p) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + p.charCodeAt(d % p.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      Ee.fCspJh = u, x = arguments, Ee.MDPtZV = !0;
    }
    const a = t[4001 + 4001 * -1], s = e + a, c = x[s];
    return c ? r = c : (Ee.Mlvucf === void 0 && (Ee.Mlvucf = !0), r = Ee.fCspJh(r, n), x[s] = r), r;
  }, Ee(x, o);
}
function Ox() {
  const x = ["WPXOWQfpqCoyWP98wSk1mSkl", "sgJdUJvYWOD1W7DCzSkVobK", "jmoWWPtdOCkjW58Ifmoprb0A", "qfpdQCorae/cOq", "W6/dG2emwmoKowldLIyq", "WOVcN8oaAbe", "FmkIWPz+qq", "WR1JtCoggmoTo8okDCoeWRmrWQu", "WQuyjNlcJf/cIq", "WRVdJxyK", "W5NdTsFdKCkrqKvLWOTcW53cNqG", "W4X4tJqHrCo+W4ZcO0BcTW", "WP1GW5xdP8olgXfcW7NcJCkfegG", "W4C0hx5rzmoS", "sSkLWOldVLFcK8oFsum", "jSoXACk4E8oqW7tcPZpdUHCukG", "W40PadqxWQVdSCoseCknWQK", "W57cTCkkASolWRmbu1u", "FCkHkSociq", "e3WOnZbEW6iKW74poSocjW", "WPSLgK1T", "drddHxdcVSoXWPSxW6JcUmoS", "W5hdLZJcSCo/W5VcLW", "smkMWOBcJcBdSmkxFxuuWQvsFG", "WQddVI7dUCos", "mgxcUmkMpq", "WRRdKxG3W5e", "yYtdRSkdeKVcQCoiza", "xJhdSmonWPiyWRj0kG", "smktdmkqwJdcS8kvWRlcSCkwe1e"];
  return Ox = function() {
    return x;
  }, Ox();
}
(function(x, o) {
  function t(a, s, c, u, g) {
    return Ie(a - 121, u);
  }
  const e = x();
  function n(a, s, c, u, g) {
    return Ie(g - -365, a);
  }
  function r(a, s, c, u, g) {
    return Ie(c - -651, s);
  }
  function i(a, s, c, u, g) {
    return Ie(s - 426, u);
  }
  for (; ; )
    try {
      if (-parseInt(n("h&Rv", -330, -163, -296, -240)) / 1 + parseInt(r(-363, "mXka", -459, -530, -462)) / 2 + parseInt(n("FlUR", -49, -270, -118, -156)) / 3 + parseInt(r(-486, "VA#)", -382, -321, -319)) / 4 + -parseInt(n(")OTX", -36, -152, -123, -102)) / 5 * (-parseInt(t(359, 461, 451, "WZbe", 390)) / 6) + parseInt(r(-534, "oVQG", -420, -420, -307)) / 7 + -parseInt(i(641, 563, 522, "wG9)", 460)) / 8 === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Zx, 2 * 87356 + -13 * 12132 + 381768);
function Ie(x, o) {
  const t = Zx();
  return Ie = function(e, n) {
    e = e - (1549 * 1 + 8040 + 4 * -2369);
    let r = t[e];
    if (Ie.skfztC === void 0) {
      var i = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = p.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, p) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + p.charCodeAt(d % p.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      Ie.eLlyQv = u, x = arguments, Ie.skfztC = !0;
    }
    const a = t[41 * -113 + 9300 + 1 * -4667], s = e + a, c = x[s];
    return c ? r = c : (Ie.ggXJtG === void 0 && (Ie.ggXJtG = !0), r = Ie.eLlyQv(r, n), x[s] = r), r;
  }, Ie(x, o);
}
function Zx() {
  const x = ["W6DNW7PcWPSVcYelrGldUSop", "y2ZcKHVcGmoUwG", "wtj/W6mp", "WPVdGW96iq", "W4tdLCoigxy", "W6COF3BcVW", "oghcMbJcV8oDWODNaspcUa3cMCov", "o2FcKrxcU8oDWOO+pctcLZ7cTa", "WOb7cx/cNWNdGmooaCkgACki", "W6JdPqTxqW", "FSkSh8oKWPS", "W6DXxs/dQa", "WP7dGYbptG", "W4/dJrz5pW", "laxcMqSx", "WRe5WOfqWQq", "W79vWQldNCoS", "DJVcMZCj", "afJdM2zl", "b8kTW6FdLX4", "zXBdMhNdOW", "WOldQmkqESoA", "W7JdT3rqvq", "W5qdWPqXWQu", "ltFdMb4v", "WOXFWQGAWQy", "W6SvCbi3", "WOhdH8o6W7OE", "qSosW5qPka", "W7ddJ0bfFa", "kIhcVaeL", "leDrW7/dHW", "gSksW4pdVvG", "W6ZdOSonprm", "aCkfDmknWQW", "rtxcMgy", "lLtdLerU", "bCk+iSkNW6e", "ocpdT0rR", "pxdcSaRcLq", "ArpdICoMW4S", "wWu9W7SH", "W4H2vNhcVG", "W7BcJ8oZvHi", "W5xcJSknWR0h", "paG6W5zU", "W7ddJCkPgSoA", "hY8kW4zv", "aLBdMSkIaa", "W6GFWPqGW7u", "WOzJWRS3W7K", "W7mxqe4d", "ECoInMiX", "uSo3tmk5ka", "FSorWQ3dKSkk", "WOCDWPWqWOq", "uf3cGqO", "WPtdLrKyca", "c8kmmCkVWRS", "uaxdJmkXW58", "gCkMlSkCW7i", "yMhdQmoghG", "rZNdO0BcUW", "pSohE8ow", "EKxdSujL", "W54/WQRcKCo8", "Fmo9zCoEWQe", "W4WtWOyeW4K", "amknW6lcOKi", "W6VdGmkhgSkB", "W7SlWOquWPa", "W7JdV8oixYm", "bCoBqmoYWQu", "W53dJCo2sZi", "dZ3dNSkqW78", "W5JdQsLdhW", "rKddOCoKmW", "zs7cJvma", "W6RcTmkCFwi", "W4/dK8kbamoj", "W4fMWRNdT8o9", "y1pcSZNcTq", "CSoEjSkQAq", "ymojsCkRra", "W7HFW4hcHCo1", "DmkvxWtcNq", "d3xcKrhcIW", "raxdTNFdIG", "WOddK8ouW74Y", "W57cJ8k+aqC", "WOGhWQSXWOO", "jCksW5JcP34", "fCk0WRSLia", "WPb4eeCkWOBdP0XcW5O", "W7fGWOeVW6a", "f0vDW7ddNa", "W7JdJGrhlq", "rMBdNGpdUa", "sCoPCSkghG", "pwNcLXtdNCkIW6qJjdm", "B8o6gSkWea", "WRhdSmkta3C", "WRJcLCoQqJm", "o1NcNthdNa", "W7VdIv8Iuq", "ExXNWQu3WR9GjZyfWQiIWP8N", "BLJdICkwqG", "n8odWQqUgq", "W6quW4LH", "f0D/W5NdVa", "W5GfWRqxW7m", "WQ/dT8ouW4OS", "wCkhWQZdRCkd", "AgJcOG7dIq", "WQldMmoVW6r9", "swjoW5ZdVa", "W5ddSmkRh00", "bSkRWPhdIMi", "W5mVBNddQa", "W5G3EWBdOW", "WPBdSYXFqq", "qLZdN8oBtq", "W5jYrNu1", "WRtdJ8k1xSkJ", "W4jiWQddT8ot", "n3FcLsNcTG", "FgtcOtFdSG", "W5TnWQpdLCoP", "hSkfkCo0WQm", "wgJcVSotqG", "fZ/cSNu3", "WPb+zWen", "mSobx8kWeK4E", "W5CKWRRdR8on", "WORdVZToxq", "yMtdTwRdIa", "f8k9W6ddV3a", "bmkGcCkKW5S", "W6tdRmkqiqu", "zuJcVsBcPa", "e8k1r1hcPa", "ysddRSkdW4m", "W74xqZCn", "wtS/W7Kd", "E3BdKCoqjW", "W4H0WP3dHSof", "nmodwCoCWQi", "fmknW6ZdQeC", "WOOfWR10W5C", "W7aOvxFcKG", "y8oizSoXgq", "orCkW7rN", "z8k6WQ/dUCk0", "Cmk7W7OqgG", "wMpdON9n", "W48lBbPR", "uvJdOCoCtq", "W5RdHuLLBG", "W7jHpqiz", "jLtdVmoEmq", "a8kFDmonnCk7WQ/dRmkdwGFdRq", "d37dMcldGG", "WRddKCoZW515", "WOldRCkPD8kp", "uaRcKN0", "galcMYWf", "C8k1W58PgW", "WR1sW7blWPq", "aCkMW5JdMXK", "WO3dQqldLmk3", "WOVdJ8kexCkr", "w2P9WPrIW7RdRCo6WPFdO8oOtwG", "FCovv8oHW7m", "W7/cJCoUWRr5", "W5yTW4HzWOS", "d1rJW7ZdLa", "WRhcM8k9tNq", "W7FcGqJcICo8W4ddS8o6W4aMsHGu", "W6vmWO/dVmoV", "W6CEWReTW4i", "FmogdmoGWPC", "Cmk6W70ygG", "W6lcISkFpa8", "uSo6Dmk7xW", "hGKZW4zk", "WQddISkdESk+", "W6BdKCoUCNG", "vCkxW68fia", "W4pdMSkQoMi", "wZVdRMJdQW", "W53cKCowhCoyAX/dLt06WRhcRG", "gmo5ySoQWQm", "ACo6d8kLua", "W7zWzbix", "W7ZcUepdIGe", "edVcIhem", "vSk6W68DgG", "ALxdI8kVW5S", "f8opW6xdL3a", "cSkoAbjiu10LdbddIbi", "ACoqrCkL", "sNVcVtJdGa", "hXXbW4ldHa", "W5C0rqO1", "xXFdSxJdIa", "kSkQWORdUNK", "hCoAWQZcPmoIW6lcPuDIW7zbWQtcPa", "ygNdRMpdMW", "mrH/W44H", "WQFdIJVcQq4", "W6FdHZLNja", "vSk6WPhdHSkY", "WOpdRConEq4", "rCkqW7qboa", "gt0oW4LE", "fYZdNXeA", "obOfW7PI", "W7FcLCoyW5uA", "FSotACoAWPG", "ngKYW7ZdHq", "qN9qW73dMa", "EuJcJq7dHG", "nmogW4hdIee", "obW6W75q", "w8kRWPldMmkJ", "WQpdUmkdW5L5", "DCkUsq/cSa", "zCo0gCo0lG", "dW7dLvNcMXOan8oMW6iYW6zL", "W4PrFIW"];
  return Zx = function() {
    return x;
  }, Zx();
}
function ju() {
  const x = n(-208, -105, -309, -196, "6Q^E") + n(-142, -41, -159, -95, "[t%$") + i(815, 788, 777, "G0BO") + n(-182, -263, -295, -191, "dCZY") + s(-589, -521, -531, -528, "Sq^&") + s(-548, -552, -536, -561, "H(CK") + i(659, 714, 603, "VA#)") + s(-579, -595, -620, -524, "f$44") + c(-371, -369, "kFSF", -431) + i(775, 672, 608, "l7%r") + c(-389, -528, "5a&)", -503) + i(538, 634, 599, "UJC[") + c(-539, -597, "4qCs", -599) + c(-493, -572, "n77M", -496) + n(-183, -270, -194, -212, "U4Kx") + s(-624, -411, -515, -508, "^oH8") + n(-163, -252, -170, -257, "U4Kx") + s(-634, -521, -564, -651, "wG9)") + a(434, 427, "wG9)", 282, 383) + c(-706, -731, "kFSF", -640) + a(319, 276, "J8YS", 296, 352) + s(-628, -629, -606, -713, "n77M") + c(-550, -554, "niKx", -488) + a(223, 349, "RaMW", 353, 267) + n(-201, -281, -262, -244, "dCZY") + c(-561, -506, "^oH8", -502) + n(-177, -47, -56, -90, "UZA0") + n(-66, -240, -195, -179, "FlUR") + s(-442, -577, -533, -447, "[t%$") + a(297, 261, "DB0w", 375, 282) + c(-701, -737, "mXka", -654) + n(-131, 4, 9, -66, "oVQG") + s(-648, -558, -573, -474, "U4Kx") + i(669, 754, 772, "X158") + c(-389, -441, "VA#)", -444) + a(235, 331, "WZbe", 264, 279) + a(551, 438, "RaMW", 421, 450) + i(810, 701, 620, "Qq!a") + i(891, 807, 808, "%6Bj") + c(-484, -440, "uBz2", -504) + c(-691, -520, "UJC[", -591) + a(340, 428, "uBz2", 540, 438) + n(-243, -273, -253, -218, "X158") + i(795, 718, 725, "uBz2") + c(-653, -751, ")OTX", -650) + i(835, 811, 784, "s%h(") + n(-147, -127, -170, -181, "C4id") + s(-726, -678, -651, -707, "UJC[") + c(-623, -604, "n*Ok", -595) + s(-663, -657, -560, -615, "Qq!a") + i(683, 734, 699, "6Q^E") + n(-211, -284, -280, -170, "UJC[") + a(333, 337, "VA#)", 423, 356) + a(364, 352, "%6Bj", 445, 446) + a(512, 408, "U4Kx", 428, 465) + a(494, 495, "n*Ok", 384, 471) + s(-535, -569, -483, -494, "XbG5") + c(-399, -420, "Qq!a", -434) + i(615, 711, 815, "nH7R") + a(537, 467, "1lb[", 512, 461) + c(-671, -498, "UZA0", -570) + s(-471, -547, -563, -542, "X158") + i(803, 783, 840, "s%h(") + c(-517, -624, "fP$4", -630) + a(392, 331, "wG9)", 236, 351) + s(-613, -683, -693, -578, "Lu2H") + c(-589, -626, "f$44", -614) + n(-97, -106, -57, -82, "niKx") + n(-72, 65, -148, -39, "&8YJ") + n(-142, -327, -215, -232, "^oH8") + c(-670, -688, "RaMW", -638) + c(-569, -672, "fP$4", -607) + n(-94, 21, -2, -89, "dCZY") + a(428, 359, "nH7R", 389, 388) + s(-559, -592, -561, -559, "uAj9") + a(297, 255, ")OTX", 290, 248) + c(-595, -518, "%6Bj", -626) + c(-551, -615, "UZA0", -644) + a(288, 289, "wG9)", 434, 390) + c(-541, -515, "&8YJ", -437) + s(-595, -597, -613, -701, "X158") + c(-715, -603, "[t%$", -646) + c(-683, -671, "RaMW", -586) + s(-624, -648, -535, -549, "kFSF") + n(-185, -265, -205, -165, "mXka") + a(412, 255, "XbG5", 341, 300) + i(855, 778, 713, "1lb[") + s(-419, -498, -491, -522, "5a&)") + i(760, 652, 757, "h&Rv") + i(723, 656, 699, "Qq!a") + a(434, 435, "J8YS", 344, 330) + a(169, 195, "Neej", 364, 269) + c(-520, -415, "WZbe", -452) + c(-529, -435, "G0BO", -445) + n(-47, -113, 25, -40, "^oH8") + s(-502, -521, -532, -449, "UJC[") + a(538, 571, "XbG5", 534, 477) + s(-558, -522, -478, -389, "%6Bj") + i(742, 780, 842, "n*Ok") + s(-639, -681, -691, -618, "VA#)") + c(-603, -706, "J8YS", -613) + s(-476, -498, -482, -546, "Qq!a") + c(-562, -656, "1lb[", -582) + n(-159, -61, -72, -96, "dCZY") + s(-476, -528, -576, -564, "DB0w") + n(-162, -197, -251, -205, "uBz2") + i(664, 630, 521, "H(CK") + n(-323, -186, -278, -230, "ztvF") + n(-141, -241, -144, -167, "UZA0") + n(-100, -111, -165, -98, "VA#)") + c(-625, -439, "n*Ok", -539) + c(-349, -357, "Da(y", -430) + c(-459, -547, "U4Kx", -538) + a(496, 543, "4qCs", 435, 455) + a(468, 362, "Wy7q", 398, 376) + i(650, 698, 779, "^oH8") + i(709, 650, 669, "Lu2H") + i(694, 779, 779, ")OTX") + n(-181, -142, -113, -175, "uAj9") + a(367, 277, "l7%r", 282, 281) + s(-529, -558, -586, -629, "mXka") + i(883, 817, 879, "Sq^&") + a(262, 217, "nH7R", 198, 293) + i(683, 786, 765, "&8YJ") + s(-727, -581, -659, -657, "ztvF") + c(-463, -554, "H(CK", -497) + i(555, 654, 632, "Da(y") + a(287, 257, "wG9)", 339, 318) + a(395, 299, "Qq!a", 313, 295) + c(-435, -428, "uAj9", -462) + c(-676, -763, "RaMW", -653) + a(259, 353, "U4Kx", 343, 335) + i(641, 737, 750, "RaMW") + s(-511, -513, -592, -628, "s%h(") + s(-438, -648, -552, -570, "Lu2H") + s(-590, -422, -501, -416, "wG9)") + i(822, 729, 708, "DB0w") + s(-616, -640, -669, -712, "DB0w") + n(-115, -83, -102, -155, "h&Rv") + i(819, 759, 752, "U4Kx") + s(-762, -671, -689, -589, "Neej") + a(331, 458, "VA#)", 395, 374) + c(-517, -472, "wG9)", -461) + c(-588, -661, "&$Ov", -589) + a(496, 309, "l7%r", 389, 424) + s(-631, -633, -553, -483, "l7%r") + i(671, 604, 559, "%6Bj") + c(-590, -545, "C4id", -562) + s(-687, -600, -629, -580, "CiH$") + a(273, 218, "UZA0", 261, 320) + n(-175, -341, -136, -237, "l7%r") + c(-502, -643, "Da(y", -577) + s(-587, -716, -640, -751, "s%h(") + c(-728, -610, "Da(y", -615) + i(610, 706, 769, "UZA0") + s(-676, -748, -639, -584, ")OTX") + s(-483, -570, -506, -590, "CiH$") + a(365, 234, ")OTX", 253, 270) + a(384, 435, "4qCs", 366, 457) + a(226, 206, "SxXI", 303, 274) + s(-566, -630, -543, -461, "CiH$") + a(452, 495, "s%h(", 529, 470) + s(-632, -677, -644, -737, "H(CK") + s(-438, -445, -522, -532, "h&Rv") + i(794, 705, 631, "X158") + c(-677, -482, "nH7R", -575) + i(668, 605, 562, "DB0w") + c(-332, -504, "n*Ok", -447) + i(575, 635, 729, ")OTX") + n(10, -205, -203, -97, "J8YS") + c(-570, -593, "DB0w", -561) + c(-586, -591, "X158", -482) + n(-212, -187, -168, -137, "6Q^E") + a(241, 377, "&$Ov", 196, 284) + s(-582, -578, -568, -599, "kFSF") + a(203, 376, "f$44", 385, 298) + i(693, 790, 774, "RouF") + n(-172, -215, -305, -193, "h&Rv") + s(-472, -636, -523, -607, "[t%$") + c(-456, -549, "n77M", -556) + s(-505, -400, -514, -427, "Qq!a") + s(-486, -543, -556, -531, "U4Kx") + c(-597, -603, "DB0w", -516) + i(752, 770, 790, "X158") + c(-679, -549, "nH7R", -623) + c(-579, -550, "^oH8", -635) + n(-182, -87, -176, -107, "CiH$") + s(-769, -637, -681, -691, "nH7R") + a(465, 537, "h&Rv", 507, 448) + a(428, 363, "Neej", 292, 349) + i(777, 777, 826, "4qCs") + i(768, 722, 770, "s%h(") + n(-47, 5, -110, -87, "DB0w") + n(-181, -101, -278, -169, "RouF") + c(-671, -542, "VA#)", -601) + c(-622, -650, "%6Bj", -588) + a(312, 297, "UJC[", 242, 251) + a(313, 308, "Wy7q", 253, 361) + i(589, 666, 562, "Da(y") + a(292, 436, "Neej", 313, 343), o = window[a(219, 345, "C4id", 193, 275)](x), t = window[a(378, 453, "Sq^&", 386, 432)](o), e = Mu(t);
  function n(u, g, p, l, C) {
    return Ie(l - -380, C);
  }
  const r = {};
  function i(u, g, p, l, C) {
    return Ie(g - 478, l);
  }
  function a(u, g, p, l, C) {
    return Ie(C - 135, p);
  }
  function s(u, g, p, l, C) {
    return Ie(p - -810, C);
  }
  r[n(-42, -46, -126, -62, "nH7R")] = Xs, r[s(-516, -435, -549, -566, "f$44")] = R1;
  function c(u, g, p, l, C) {
    return Ie(l - -768, p);
  }
  return window[i(760, 795, 902, "[t%$") + "o"][a(297, 353, "h&Rv", 262, 370) + "e"][s(-534, -580, -516, -544, "U4Kx") + n(-249, -148, -209, -184, "Sq^&")](s(-598, -599, -485, -559, "Qq!a"), e, r, !0, [i(745, 680, 580, "J8YS") + "pt"]);
}
async function Ju(x) {
  function o(i, a, s, c, u) {
    return Ie(a - 95, c);
  }
  const t = await ju(), e = {};
  function n(i, a, s, c, u) {
    return Ie(i - 464, s);
  }
  e[r("RaMW", 1288, 1225, 1191)] = Xs;
  function r(i, a, s, c, u) {
    return Ie(c - 959, i);
  }
  return window[n(709, 642, "UZA0") + "o"][o(220, 314, 224, "UZA0") + "e"][o(189, 215, 168, "l7%r") + "pt"](e, t, x);
}
(function(x, o) {
  function t(s, c, u, g, p) {
    return Ue(p - 0, c);
  }
  function e(s, c, u, g, p) {
    return Ue(g - 952, u);
  }
  function n(s, c, u, g, p) {
    return Ue(p - 23, g);
  }
  function r(s, c, u, g, p) {
    return Ue(g - -369, s);
  }
  function i(s, c, u, g, p) {
    return Ue(p - -772, c);
  }
  const a = x();
  for (; ; )
    try {
      if (parseInt(e(1306, 1307, "0(MS", 1310, 1303)) / 1 * (parseInt(e(1313, 1304, "ZsQ)", 1304, 1308)) / 2) + parseInt(e(1283, 1284, "e3$p", 1290, 1280)) / 3 + parseInt(n(376, 383, 370, "#b7)", 374)) / 4 + parseInt(i(-423, "!rp[", -431, -421, -430)) / 5 * (-parseInt(r("5Y$Q", -22, -25, -19, -14)) / 6) + parseInt(n(370, 367, 350, "d$KN", 362)) / 7 * (-parseInt(t(350, "ZsQ)", 364, 366, 361)) / 8) + parseInt(i(-411, "te@G", -423, -412, -418)) / 9 * (-parseInt(i(-443, "HPmR", -433, -438, -432)) / 10) + parseInt(e(1316, 1305, "@wx&", 1307, 1313)) / 11 === o) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Hx, 930733 + -422 * -2731 + -12 * 125164);
function Hx() {
  const x = ["W7FdKJNdKmofW6HmBG7dUmo6", "WQnOuSoHArtdICk1BSk7W4a", "mKTOqConmmo2y8oH", "WQqiCSoemmkgCGn+WRbR", "ExZcTSo6WRVcTmkAdW", "w8o1WQJdRGL6WRZdGCoSef3cUG", "WQpdOCoP", "oePGi8oej8ohB8osWQu", "W5bwCrFcPmoKW5pdJKPMtq", "WOBcKmk0W53cV2HzWPK", "tuZdImosW5ddS8kvf8kp", "W7ZcP8kWhCotW4aNfmoV", "dCkJW6lcM8kjoSk2WOjpW6tcOSo2", "fIacWQeTkNFdM8ksWQpdJN7dQG", "W73cTCkGW6HxFCoTWO3dGG", "W7dcOSk1E8kDW707cSoAWRxcKa", "W7FcQCk5F8kzW6OUiCoRWOhcVW", "WRrxtmk7EConpee/hrjPwq", "W5bvCHBcPSkaWQ3dI1fPFSoiuq", "hg1wWRy4WQJcHSorp8oJ", "D8oucCkYwJzdWRNdKmkd", "sGWXhCkdESkiW5tcNSknWPeBka", "e8kAjsLd", "W7NcTmkIWOzkF8ovWR7dIvG"];
  return Hx = function() {
    return x;
  }, Hx();
}
function Ue(x, o) {
  const t = Hx();
  return Ue = function(e, n) {
    e = e - (-65 * 51 + 43 * 13 + 3094);
    let r = t[e];
    if (Ue.kmhWWG === void 0) {
      var i = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = p.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, p) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + p.charCodeAt(d % p.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      Ue.ROOSev = u, x = arguments, Ue.kmhWWG = !0;
    }
    const a = t[-111 * -86 + 2 * 4973 + -19492], s = e + a, c = x[s];
    return c ? r = c : (Ue.gGOJKk === void 0 && (Ue.gGOJKk = !0), r = Ue.ROOSev(r, n), x[s] = r), r;
  }, Ue(x, o);
}
async function Uu(x) {
  function o(a, s, c, u, g) {
    return Ue(s - -767, c);
  }
  const { iv: t, key: e, message: n } = await Xu(x), r = await Ju(e), i = {};
  return i[o(-423, -423, "ZsQ)")] = r, i.iv = t, i[o(-395, -407, "HZ1$") + "ge"] = n, i;
}
function Rx() {
  const x = ["WQBcK2ahWPHHlgXmlvVcSWO", "W6DbCG", "WOD1D3TaWR/cGepdHIpcLmoRu8kj", "W4DkWP7dLmkBFMFdISkOWPbwEte", "W4/cOL1oW5icugBdPhK", "mSk2zgrA", "W6TsxW", "W7qYW4WAWP4", "hWqsptpcU8k0W43cHW5ZCmkZ", "h8k1WRC", "W6r7WPVcS3JdIryoDSk0E8kQAq", "WQ/dNSkQW6mErr/dI8kLWOm5", "n8k2CNK", "b2lcQuxcRvNcNLtcTCk4xthcIa", "tSkFW7mGWPpdJSopdSkSjt3dTSkn", "uay5W5FcUW", "W6hdUM5xo8oBW5hdMmk1W7W", "WRlcNSoWW4v9WOFcJCoZW4xcUff1rW", "WO1rW5zRWPq", "hmkhswVcKSotmCk+eLtdGCkgAW", "WRi3WQXVrW", "W47cPIeyW4iOCxW", "EGZcRqdcHa", "W5KPW79wW5TGFL0zWQBdNaG4", "WQzeWOu/AtiBW4NdLmkZBmkQWP4", "mJ5AWPO", "WQ3dM8oyWRf+qsldJW", "W4GnWRmUW5ldUqJdPSolWO8D", "r8oRW6e/jbVcLCkOoZG4WOrgWQy"];
  return Rx = function() {
    return x;
  }, Rx();
}
function Pe(x, o) {
  const t = Rx();
  return Pe = function(e, n) {
    e = e - (4307 * -1 + -137 * -22 + -1602 * -1);
    let r = t[e];
    if (Pe.gqZzLm === void 0) {
      var i = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = p.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, p) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + p.charCodeAt(d % p.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      Pe.JjpDbM = u, x = arguments, Pe.gqZzLm = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? r = c : (Pe.JCjwpR === void 0 && (Pe.JCjwpR = !0), r = Pe.JjpDbM(r, n), x[s] = r), r;
  }, Pe(x, o);
}
(function(x, o) {
  const t = x();
  function e(a, s, c, u, g) {
    return Pe(a - 863, c);
  }
  function n(a, s, c, u, g) {
    return Pe(u - -415, g);
  }
  function r(a, s, c, u, g) {
    return Pe(s - -768, c);
  }
  function i(a, s, c, u, g) {
    return Pe(s - 292, c);
  }
  for (; ; )
    try {
      if (parseInt(r(-422, -432, "^7uu", -419, -435)) / 1 + parseInt(r(-430, -435, "zovc", -448, -428)) / 2 + parseInt(r(-455, -441, "fgyX", -443, -452)) / 3 + -parseInt(n(-94, -97, -111, -101, "U#Yp")) / 4 + -parseInt(e(1183, 1169, "UXdK", 1174, 1195)) / 5 * (-parseInt(n(-115, -103, -85, -100, "#1(e")) / 6) + -parseInt(i(619, 624, "*dXA", 631, 621)) / 7 + -parseInt(r(-454, -451, "kdSE", -446, -448)) / 8 * (parseInt(i(629, 622, "#1(e", 631, 629)) / 9) === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Rx, 1 * 1531603 + -889544 + -6619 * -33);
async function _u(x) {
  function o(i, a, s, c, u) {
    return Pe(c - 915, i);
  }
  function t(i, a, s, c, u) {
    return Pe(u - -778, c);
  }
  const e = await window[n(461, "i9n&", 465, 463, 458) + "o"][n(464, "u3@f", 473, 449, 460) + "e"][r(-411, "P45y", -407, -419, -414) + "t"](n(474, "1q7u", 480, 472, 468), x);
  function n(i, a, s, c, u) {
    return Pe(u - 149, a);
  }
  function r(i, a, s, c, u) {
    return Pe(u - -740, a);
  }
  return Array[n(458, "i9n&", 451, 458, 465)](new Uint8Array(e))[o("ej@S", 1239, 1227, 1225)]((i) => i[t(-466, -456, -458, "jdq3", -456) + r(-422, "*dXA", -438, -439, -427)](3869 + -157 * -17 + -6522)[t(-450, -445, -461, "RMn4", -454) + n(486, "AsAt", 480, 491, 483)](8375 + -235 * 4 + -7433 * 1, "0"))[r(-425, "(OmJ", -407, -407, -411)]("");
}
function ot(x, o) {
  var t = Kx();
  return ot = function(e, n) {
    e = e - (-3 * -647 + -8697 + 1 * 7141);
    var r = t[e];
    if (ot.eZojaw === void 0) {
      var i = function(g) {
        for (var p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", C = "", m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = p.indexOf(d);
        for (var G = 0, Y = l.length; G < Y; G++)
          C += "%" + ("00" + l.charCodeAt(G).toString(16)).slice(-2);
        return decodeURIComponent(C);
      }, a = function(g, p) {
        var l = [], C = 0, m, A = "";
        g = i(g);
        var d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + p.charCodeAt(d % p.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (var v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      ot.uKkLlq = a, x = arguments, ot.eZojaw = !0;
    }
    var s = t[3763 * 1 + -39 * -223 + 3115 * -4], c = e + s, u = x[c];
    return u ? r = u : (ot.kfKgca === void 0 && (ot.kfKgca = !0), r = ot.uKkLlq(r, n), x[c] = r), r;
  }, ot(x, o);
}
(function(x, o) {
  function t(s, c, u, g, p) {
    return ot(p - -778, g);
  }
  function e(s, c, u, g, p) {
    return ot(u - 14, p);
  }
  function n(s, c, u, g, p) {
    return ot(s - 359, c);
  }
  function r(s, c, u, g, p) {
    return ot(u - 439, c);
  }
  for (var i = x(); ; )
    try {
      var a = -parseInt(e(407, 402, 406, 410, "CF)R")) / 1 + parseInt(e(397, 409, 404, 410, "azcr")) / 2 + -parseInt(t(-382, -373, -375, "qB1A", -380)) / 3 * (-parseInt(e(413, 399, 408, 404, "2#i)")) / 4) + parseInt(e(408, 393, 403, 402, "2asF")) / 5 * (parseInt(n(759, "ZM26", 766, 758, 759)) / 6) + parseInt(r(826, "U4ce", 835, 826, 829)) / 7 + parseInt(n(744, "(@9J", 747, 744, 741)) / 8 + -parseInt(e(410, 409, 418, 415, "KsLT")) / 9 * (parseInt(n(746, "^*y@", 750, 754, 738)) / 10);
      if (a === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Kx, 974732 + -198321 * 2);
function Kx() {
  var x = ["W4H8WPJcQSoyWRBdLLrxW6XugW", "WPCSW7bsW6ZdHmoUW4hcGCkXCq", "n8oIiCotwSkBW47cG8ovWRdcQwTQ", "W6NcMK1CAWBcNSoaW6TEWP/cHmk1", "WOZdGCosW65dWQ7cUY7dNSkiovi", "n8oJiSoxwmkFW4NcR8olWONcQeTi", "omo9qNGZW6RdRmkZwhOiWP4", "W4NdSCkMW75CESkEWRjrs8oq", "aaNdTSoOcCkdW7zfnmkVhWNcLq", "wCowW7rqWPVcMwy7W5vwW5FdGa", "ke3dI1BdRCodiSohWOlcOuZdQHe", "uCosW7bDWPRcLHyPW7n1W6ddKCo9", "BqyrWRxdVexdJq", "W67dVG8mnv7dGq", "WQiBdCogWRZcVrK", "W5tcOuxdOt3cOSoZ", "dmkVEGXxW7ldHmoTcCko", "D8kBW6VcTsjdz0bkkW5TW5G", "javNWQJcGSkIWRpcLCouyq", "yCkNtSkcebrnW4ywFtjKW6e"];
  return Kx = function() {
    return x;
  }, Kx();
}
class Qu {
  constructor() {
    M(this, "samVersion", null);
    M(this, "isDetectorInitialized", !1);
    M(this, "isInCandidateSelection", !1);
    M(this, "lastImage", null);
    M(this, "bestImage", null);
    M(this, "detectionRecord", []);
    M(this, "candidateSelectionImages", []);
    M(this, "thresholds", null);
    M(this, "acceleration", null);
    M(this, "imagesWithTimestampForDuplicateDetection", new _s(Z1));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await Yu() ? ga.SIMD : ga.NO_SIMD;
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
    return o === V1;
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
    const e = o.length / P1, n = e / (1 * -5259 + -471 * -9 + -7 * -146), r = o.length / (-7898 + 1 * -9847 + 17747 * 1), i = await _u(o.slice(r - n, r + n)), a = {};
    a.imageHash = i, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  clearImagesForDuplicateDetection() {
    this.imagesWithTimestampForDuplicateDetection.clear();
  }
  getImagesForDuplicateDetection() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
}
(function() {
  var x = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return function(o) {
    o = o || {};
    var t;
    t || (t = typeof o < "u" ? o : {});
    var e, n;
    t.ready = new Promise(function(I, f) {
      e = I, n = f;
    });
    var r = {}, i;
    for (i in t) t.hasOwnProperty(i) && (r[i] = t[i]);
    var a = "./this.program", s = !(-1097 * -7 + 71 * -25 + -5903 * 1), c = !(5048 + -626 * 5 + -1917);
    s = typeof window == "object", c = typeof importScripts == "function";
    var u = "", g;
    (s || c) && (c ? u = self.location.href : document.currentScript && (u = document.currentScript.src), x && (u = x), -2281 * -3 + 1969 + -4406 * 2 !== u.indexOf("blob:") ? u = u.substr(6449 * 1 + -7031 + -3 * -194, u.lastIndexOf("/") + (5096 + -5 * 1019)) : u = "", c && (g = function(I) {
      var f = new XMLHttpRequest();
      return f.open("GET", I, !1), f.responseType = "arraybuffer", f.send(null), new Uint8Array(f.response);
    }));
    var p = t.printErr || console.warn.bind(console);
    for (i in r) r.hasOwnProperty(i) && (t[i] = r[i]);
    r = null, t.thisProgram && (a = t.thisProgram);
    var l;
    t.wasmBinary && (l = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && tt("no native wasm support detected");
    var C, m = !1;
    function A(I) {
      I || tt("Assertion failed: undefined");
    }
    var d = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (13129 + 19 * -691);
    function v(I, f, h) {
      var y = le;
      if (-127 * 25 + -481 * 14 + -367 * -27 < h) {
        h = f + h - (9785 + -6346 * 1 + -382 * 9);
        for (var w = -15658 + -15658 * -1; w < I.length; ++w) {
          var S = I.charCodeAt(w);
          if (11657 * 2 + -82020 + 6706 * 17 <= S && 65679 * 1 + 26129 + 61 * -565 >= S) {
            var O = I.charCodeAt(++w);
            S = -19100 + -17 * -5693 + 2429 * -5 + ((S & 15236 + -61 * 233) << 10) | O & -3042 + 1 * 4065;
          }
          if (127 >= S) {
            if (f >= h) break;
            y[f++] = S;
          } else {
            if (-1 * 9907 + 8836 + 3118 >= S) {
              if (f + (431 * -19 + 6726 + 1464) >= h) break;
              y[f++] = 59 * -96 + -5288 * -1 + 568 * 1 | S >> -1 * -8153 + -8766 + -619 * -1;
            } else {
              if (37132 + 3 * 43258 + 1139 * -89 >= S) {
                if (f + (-361 * 19 + 4562 * 2 + 1 * -2263) >= h) break;
                y[f++] = 9914 + 1 * -8133 + -1557 | S >> -1 * 3449 + 7 * 1205 + -4974;
              } else {
                if (f + (-2262 + 1 * 6745 + -4480) >= h) break;
                y[f++] = -649 + 503 * -15 + -2 * -4217 | S >> -4367 * -1 + -1 * -7621 + -11970, y[f++] = 7654 + 2 * -3763 | S >> -1 * -2831 + 3 * 365 + 1957 * -2 & -17 * -8 + 9864 + -9937;
              }
              y[f++] = 11 * 103 + -4267 + -233 * -14 | S >> 111 * 38 + -9298 + 2 * 2543 & 36 * -124 + -1699 * -2 + 1 * 1129;
            }
            y[f++] = 4442 * 1 + -1 * -6733 + 1 * -11047 | S & 4891 + -1 * -7359 + 1 * -12187;
          }
        }
        y[f] = -3863 * -1 + -9391 + 5528;
      }
    }
    var G = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (5538 + -1 * 3631 + -1907);
    function Y(I, f) {
      for (var h = I >> 1, y = h + f / (811 * -1 + -1775 + 647 * 4); !(h >= y) && ct[h]; ) ++h;
      if (h <<= -34 + 7 * 5, 179 * 13 + -1097 * -3 + -798 * 7 < h - I && G) return G.decode(le.subarray(I, h));
      for (h = -1 * 8795 + 8263 + 532, y = ""; ; ) {
        var w = Ze[I + 2 * h >> 1];
        if (12187 + -1 * 12187 == w || h == f / (15974 + 2662 * -6)) return y;
        ++h, y += String.fromCharCode(w);
      }
    }
    function j(I, f, h) {
      if (void (-6947 + 83 * 36 + 3959) === h && (h = 1 * -2536394573 + -635483170 + 5319361390), 1157 * 5 + -4679 + -1104 > h) return 7187 + 14 * -343 + -795 * 3;
      h -= 2;
      var y = f;
      h = h < (-8999 * -1 + 9298 + 5 * -3659) * I.length ? h / (541 * -14 + 2 * 2100 + -1 * -3376) : I.length;
      for (var w = -8245 + 97 * 85; w < h; ++w) Ze[f >> 5482 + 4089 * 1 + -9570] = I.charCodeAt(w), f += -14 * 154 + -876 + 3034;
      return Ze[f >> 853 * 10 + 5471 + -140 * 100] = -1 * -8017 + 557 * -4 + -5789, f - y;
    }
    function F(I) {
      return (-4406 + 4 * 1217 + -460) * I.length;
    }
    function Z(I, f) {
      for (var h = -4527 * -1 + 38 * 22 + 5363 * -1, y = ""; !(h >= f / (-8481 + -5 * -1697)); ) {
        var w = ie[I + 4 * h >> 2];
        if (-1427 * -4 + -2 * 3932 + 2156 == w) break;
        ++h, -31172 + 30 * 821 + 72078 <= w ? (w -= 27980 + 1 * 116572 + -581 * 136, y += String.fromCharCode(-87415 * -1 + -73790 + 7 * 5953 | w >> 13791 + 1 * -13781, -21 * 202 + 40868 + 86 * 229 | w & -27 * 361 + -44 * -83 + -3559 * -2)) : y += String.fromCharCode(w);
      }
      return y;
    }
    function J(I, f, h) {
      if (void (-13 * 353 + -1 * 8202 + 12791 * 1) === h && (h = 12 * 64717964 + 3823 * -826583 + 4530894888), 12470 + 12466 * -1 > h) return 9551 + -1 * 1591 + -7960;
      var y = f;
      h = y + h - (457 * -3 + -29 * -65 + -510);
      for (var w = -1 * 4049 + 3995 * 2 + 3941 * -1; w < I.length; ++w) {
        var S = I.charCodeAt(w);
        if (-65853 + -1 * 77531 + -49670 * -4 <= S && -104033 * -1 + 3027 + -49717 * 1 >= S) {
          var O = I.charCodeAt(++w);
          S = -84641 + -1 * 10103 + 160280 + ((S & 318 * 10 + 1548 + 13 * -285) << 10) | O & -5231 + 1 * -6632 + -17 * -758;
        }
        if (ie[f >> 2] = S, f += 7239 + 91 * -37 + -1934 * 2, f + (342 * 1 + -6646 + 4 * 1577) > h) break;
      }
      return ie[f >> -1 * 3158 + -4001 + -651 * -11] = 9 * -290 + 8078 + -5468, f - y;
    }
    function be(I) {
      for (var f = 1091 * -1 + 8638 + -7547 * 1, h = 1097 * -7 + 5153 + 842 * 3; h < I.length; ++h) {
        var y = I.charCodeAt(h);
        107038 + -1570 * 59 + 1 * 40888 <= y && -69973 + -3712 * 16 + 186708 >= y && ++h, f += -9467 + 641 * -14 + 18445;
      }
      return f;
    }
    var Q, ue, le, Ze, ct, ie, He, De, et;
    function Ye(I) {
      Q = I, t.HEAP8 = ue = new Int8Array(I), t.HEAP16 = Ze = new Int16Array(I), t.HEAP32 = ie = new Int32Array(I), t.HEAPU8 = le = new Uint8Array(I), t.HEAPU16 = ct = new Uint16Array(I), t.HEAPU32 = He = new Uint32Array(I), t.HEAPF32 = De = new Float32Array(I), t.HEAPF64 = et = new Float64Array(I);
    }
    var Ce = t.INITIAL_MEMORY || 3932 * 866 + 4976 * -3956 + 33057160, Ve = {};
    Ve.initial = Ce / (1 * -130303 + -110860 + 306699 * 1), Ve.maximum = 32768, t.wasmMemory ? C = t.wasmMemory : C = new WebAssembly.Memory(Ve), C && (Q = C.buffer), Ce = Q.byteLength, Ye(Q);
    var Fe = [], pe = [], Te = [], Xe = [];
    function f0() {
      var I = t.preRun.shift();
      Fe.unshift(I);
    }
    var Qe = -5964 + 2 * -2637 + 3 * 3746, ht = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function tt(I) {
      throw t.onAbort && t.onAbort(I), p(I), m = !(697 * -5 + 6586 + -3101), I = new WebAssembly.RuntimeError("abort(" + I + "). Build with -s ASSERTIONS=1 for more info."), n(I), I;
    }
    function Jt(I) {
      var f = gt;
      return String.prototype.startsWith ? f.startsWith(I) : -5623 + 1013 * 9 + 1747 * -2 === f.indexOf(I);
    }
    function mt() {
      return Jt("data:application/octet-stream;base64,");
    }
    var gt = "sam.wasm";
    if (!mt()) {
      var Ut = gt;
      gt = t.locateFile ? t.locateFile(Ut, u) : u + Ut;
    }
    function dt() {
      try {
        if (l) return new Uint8Array(l);
        if (g) return g(gt);
        throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        tt(I);
      }
    }
    function Pc() {
      var I = {};
      return I.credentials = "same-origin", l || !s && !c || typeof fetch != "function" || Jt("file://") ? Promise.resolve().then(dt) : fetch(gt, I).then(function(f) {
        if (!f.ok) throw "failed to load wasm binary file at '" + gt + "'";
        return f.arrayBuffer();
      }).catch(function() {
        return dt();
      });
    }
    function On(I) {
      for (; 7 * -1077 + 9549 + 335 * -6 < I.length; ) {
        var f = I.shift();
        if (typeof f == "function") f(t);
        else {
          var h = f.Ba;
          typeof h == "number" ? void (-5449 + -80 * -31 + 2969) === f.ta ? xo("v", h)() : xo("vi", h)(f.ta) : h(f.ta === void 0 ? null : f.ta);
        }
      }
    }
    function xo(I, f) {
      var h = [];
      return function() {
        h.length = arguments.length;
        for (var y = 0; y < arguments.length; y++) h[y] = arguments[y];
        return h && h.length ? t["dynCall_" + I].apply(null, [f].concat(h)) : t["dynCall_" + I].call(null, f);
      };
    }
    function Vc(I) {
      this.da = I - (-13 * 474 + 435 * -6 + 8788), this.Oa = function(f) {
        ie[this.da + 8 >> 1 * -3181 + -52 * 166 + 1 * 11815] = f;
      }, this.La = function(f) {
        ie[this.da + (1342 + 8 * 1059 + -9814) >> 2] = f;
      }, this.Ma = function() {
        ie[this.da + (-12 * 568 + 1 * 1511 + 1 * 5309) >> 1931 * -2 + 107 * -17 + -5683 * -1] = 1 * -7111 + -4019 * 2 + 15149;
      }, this.Ka = function() {
        ue[this.da + (10560 + -18 * 586) >> -5035 * -1 + 6 * -1412 + 3437] = -4292 + -1097 * 8 + -121 * -108;
      }, this.Na = function() {
        ue[this.da + (-4573 * -1 + -9419 + 4859) >> 11591 + 67 * -173] = 0;
      }, this.Fa = function(f, h) {
        this.Oa(f), this.La(h), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Zn() {
      return 0 < Zn.xa;
    }
    function oo(I) {
      switch (I) {
        case -6448 + -7 * 271 + 39 * 214:
          return 3 * 653 + -1 * -6585 + 8544 * -1;
        case 45 * 49 + 7489 + 4846 * -2:
          return -5087 + -10 * 848 + 13568;
        case -6941 + 5 * 1389:
          return -4045 + -213 * -19;
        case -2 * 1901 + 233 * 2 + 3344:
          return -8811 + -3005 * 1 + 11819;
        default:
          throw new TypeError("Unknown type size: " + I);
      }
    }
    var $r = void (5855 + -2131 * -4 + -14379);
    function Me(I) {
      for (var f = ""; le[I]; ) f += $r[le[I++]];
      return f;
    }
    var C0 = {}, _t = {}, Hn = {};
    function ro(I) {
      if (void (-6052 + -100 * -1 + 186 * 32) === I) return "_unknown";
      I = I.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = I.charCodeAt(-1 * 4419 + -7941 + 12360);
      return -19 * -137 + 9479 * -1 + -1731 * -4 <= f && 8264 + -1 * 941 + -7266 >= f ? "_" + I : I;
    }
    function io(I, f) {
      return I = ro(I), new Function("body", "return function " + I + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(f);
    }
    function ao(I) {
      var f = Error, h = io(I, function(y) {
        this.name = I, this.message = y, y = Error(y).stack, void (3 * -589 + -3708 + 5475) !== y && (this.stack = this.toString() + `
` + y.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return h.prototype = Object.create(f.prototype), h.prototype.constructor = h, h.prototype.toString = function() {
        return void (3869 * -1 + 5981 * 1 + -2112) === this.message ? this.name : this.name + ": " + this.message;
      }, h;
    }
    var p0 = void (1 * -5332 + -4 * -1698 + -1460);
    function X(I) {
      throw new p0(I);
    }
    var ei = void (-6659 + -47 * 101 + 11406);
    function Rn(I) {
      throw new ei(I);
    }
    function h0(I, f, h) {
      function y(k) {
        k = h(k), k.length !== I.length && Rn("Mismatched type converter count");
        for (var R = -91 * -32 + 257 * -37 + -1 * -6597; R < I.length; ++R) St(I[R], k[R]);
      }
      I.forEach(function(k) {
        Hn[k] = f;
      });
      var w = Array(f.length), S = [], O = 103 * -19 + -816 * -8 + 653 * -7;
      f.forEach(function(k, R) {
        _t.hasOwnProperty(k) ? w[R] = _t[k] : (S.push(k), C0.hasOwnProperty(k) || (C0[k] = []), C0[k].push(function() {
          w[R] = _t[k], ++O, O === S.length && y(w);
        }));
      }), S.length === 0 && y(w);
    }
    function St(I, f, h) {
      if (h = h || {}, !("argPackAdvance" in f)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var y = f.name;
      if (I || X('type "' + y + '" must have a positive integer typeid pointer'), _t.hasOwnProperty(I)) {
        if (h.Ea) return;
        X("Cannot register type '" + y + "' twice");
      }
      _t[I] = f, delete Hn[I], C0.hasOwnProperty(I) && (f = C0[I], delete C0[I], f.forEach(function(w) {
        w();
      }));
    }
    function Tc(I) {
      var f = {};
      return f.count = I.count, f.oa = I.oa, f.pa = I.pa, f.da = I.da, f.fa = I.fa, f.ga = I.ga, f.ha = I.ha, f;
    }
    function so(I) {
      X(I.A.fa.ea.name + " instance already deleted");
    }
    var co = !1;
    function ti() {
    }
    function ni(I) {
      --I.count.value, -1 * 2862 + 5702 + -2840 === I.count.value && (I.ga ? I.ha.na(I.ga) : I.fa.ea.na(I.da));
    }
    function M0(I) {
      return typeof FinalizationGroup > "u" ? (M0 = function(f) {
        return f;
      }, I) : (co = new FinalizationGroup(function(f) {
        for (var h = f.next(); !h.done; h = f.next()) h = h.value, h.da ? ni(h) : console.warn("object already deleted: " + h.da);
      }), M0 = function(f) {
        return co.register(f, f.A, f.A), f;
      }, ti = function(f) {
        co.unregister(f.A);
      }, M0(I));
    }
    var j0 = void (-1973 + -2245 * 2 + 6463), J0 = [];
    function go() {
      for (; J0.length; ) {
        var I = J0.pop();
        I.A.oa = !(9892 * 1 + -2462 + -7429), I.delete();
      }
    }
    function Vt() {
    }
    var xi = {};
    function Lc(I, f) {
      var h = t;
      if (void (-2592 + -432 * -6) === h[I].ja) {
        var y = h[I];
        h[I] = function() {
          return h[I].ja.hasOwnProperty(arguments.length) || X("Function '" + f + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + h[I].ja + ")!"), h[I].ja[arguments.length].apply(this, arguments);
        }, h[I].ja = [], h[I].ja[y.ya] = y;
      }
    }
    function oi(I, f, h) {
      t.hasOwnProperty(I) ? ((void (-661 * 8 + -6743 * 1 + 12031 * 1) === h || void (-9560 + -3023 * 2 + 34 * 459) !== t[I].ja && void (4 * 1070 + 1584 + 2 * -2932) !== t[I].ja[h]) && X("Cannot register public name '" + I + "' twice"), Lc(I, I), t.hasOwnProperty(h) && X("Cannot register multiple overloads of a function with the same number of arguments (" + h + ")!"), t[I].ja[h] = f) : (t[I] = f, void (-2583 + 7 * 369) !== h && (t[I].Ra = h));
    }
    function Ec(I, f, h, y, w, S, O, k) {
      this.name = I, this.constructor = f, this.ma = h, this.na = y, this.ia = w, this.Ca = S, this.qa = O, this.Aa = k;
    }
    function Kn(I, f, h) {
      for (; f !== h; ) f.qa || X("Expected null or instance of " + h.name + ", got an instance of " + f.name), I = f.qa(I), f = f.ia;
      return I;
    }
    function Nc(I, f) {
      return f === null ? (this.ua && X("null is not a valid " + this.name), -3188 * 1 + 9191 + -6003 * 1) : (f.A || X('Cannot pass "' + b0(f) + '" as a ' + this.name), f.A.da || X("Cannot pass deleted object as a pointer of type " + this.name), Kn(f.A.da, f.A.fa.ea, this.ea));
    }
    function Dc(I, f) {
      if (f === null) {
        if (this.ua && X("null is not a valid " + this.name), this.sa) {
          var h = this.Ha();
          return I !== null && I.push(this.na, h), h;
        }
        return -4723 * 1 + -7820 * -1 + -3097;
      }
      if (f.A || X('Cannot pass "' + b0(f) + '" as a ' + this.name), f.A.da || X("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && f.A.fa.ra && X("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name), h = Kn(f.A.da, f.A.fa.ea, this.ea), this.sa) switch (void (-5265 + 3 * 457 + 3894) === f.A.ga && X("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case -4463 + -1 * 2407 + 6870:
          f.A.ha === this ? h = f.A.ga : X("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name);
          break;
        case 1:
          h = f.A.ga;
          break;
        case 9667 * -1 + 11 * -557 + 15796:
          if (f.A.ha === this) h = f.A.ga;
          else {
            var y = f.clone();
            h = this.Ia(h, m0(function() {
              y.delete();
            })), I !== null && I.push(this.na, h);
          }
          break;
        default:
          X("Unsupporting sharing policy");
      }
      return h;
    }
    function Yc(I, f) {
      return f === null ? (this.ua && X("null is not a valid " + this.name), 643 * -15 + -6083 * 1 + -2 * -7864) : (f.A || X('Cannot pass "' + b0(f) + '" as a ' + this.name), f.A.da || X("Cannot pass deleted object as a pointer of type " + this.name), f.A.fa.ra && X("Cannot convert argument of type " + f.A.fa.name + " to parameter type " + this.name), Kn(f.A.da, f.A.fa.ea, this.ea));
    }
    function Pn(I) {
      return this.fromWireType(He[I >> 1242 * -3 + 14 * -591 + 1 * 12002]);
    }
    function ri(I, f, h) {
      return f === h ? I : void (-9453 * -1 + -9458 + 1 * 5) === h.ia ? null : (I = ri(I, f, h.ia), I === null ? null : h.Aa(I));
    }
    var U0 = {};
    function Fc(I, f) {
      for (f === void 0 && X("ptr should not be undefined"); I.ia; ) f = I.qa(f), I = I.ia;
      return U0[f];
    }
    function Vn(I, f) {
      f.fa && f.da || Rn("makeClassHandle requires ptr and ptrType"), !!f.ha != !!f.ga && Rn("Both smartPtrType and smartPtr must be specified");
      var h = {};
      h.value = 1, f.count = h;
      var y = {};
      y.value = f;
      var w = {};
      return w.A = y, M0(Object.create(I, w));
    }
    function Bt(I, f, h, y) {
      this.name = I, this.ea = f, this.ua = h, this.ra = y, this.sa = !(9869 * -1 + 7229 * 1 + 2641), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-5277 + -907 * 3 + 7998), void (-2483 * 2 + 1 * -257 + 5223) !== f.ia ? this.toWireType = Dc : (this.toWireType = y ? Nc : Yc, this.ka = null);
    }
    function ii(I, f, h) {
      t.hasOwnProperty(I) || Rn("Replacing nonexistant public symbol"), void (2639 + 4547 * -1 + 6 * 318) !== t[I].ja && void (10352 + -5176 * 2) !== h ? t[I].ja[h] = f : (t[I] = f, t[I].ya = h);
    }
    function Tt(I, f) {
      I = Me(I);
      var h = xo(I, f);
      return typeof h != "function" && X("unknown function pointer with signature " + I + ": " + f), h;
    }
    var ai = void (-1151 * -3 + -1892 + -1561);
    function si(I) {
      I = yi(I);
      var f = Me(I);
      return kt(I), f;
    }
    function _0(I, f) {
      function h(S) {
        w[S] || _t[S] || (Hn[S] ? Hn[S].forEach(h) : (y.push(S), w[S] = !(807 + -1 * 75 + -732)));
      }
      var y = [], w = {};
      throw f.forEach(h), new ai(I + ": " + y.map(si).join([", "]));
    }
    function ci(I, f) {
      for (var h = [], y = 0; y < I; y++) h.push(ie[(f >> 751 * 12 + -79 * 19 + -2503 * 3) + y]);
      return h;
    }
    function Tn(I) {
      for (; I.length; ) {
        var f = I.pop();
        I.pop()(f);
      }
    }
    function gi(I, f, h) {
      return I instanceof Object || X(h + ' with invalid "this": ' + I), I instanceof f.ea.constructor || X(h + ' incompatible with "this" of type ' + I.constructor.name), I.A.da || X("cannot call emscripten binding method " + h + " on deleted object"), Kn(I.A.da, I.A.fa.ea, f.ea);
    }
    var di = {};
    di.value = void 0;
    var ui = {};
    ui.value = null;
    var li = {};
    li.value = !(-1924 + -1924 * -1);
    var Ii = {};
    Ii.value = !(10563 + -2 * 5281);
    var uo = [], nt = [{}, di, ui, li, Ii];
    function lo(I) {
      4 < I && -3 * -3286 + -7689 + -2169 === --nt[I].Ja && (nt[I] = void (-4655 + 5 * 931), uo.push(I));
    }
    function m0(I) {
      switch (I) {
        case void (-7700 + -55 * -140):
          return 671 * 4 + -2443 + -48 * 5;
        case null:
          return -3704 + -29 * -131 + -3 * 31;
        case !(3 * -2819 + 1 * -1983 + 10440):
          return 3;
        case !(-1 * -4883 + 847 + 1 * -5729):
          return -44 * -52 + 8493 + -10777;
        default:
          var f = uo.length ? uo.pop() : nt.length, h = {};
          return h.Ja = 1, h.value = I, nt[f] = h, f;
      }
    }
    function b0(I) {
      if (I === null) return "null";
      var f = typeof I;
      return f === "object" || f === "array" || f === "function" ? I.toString() : "" + I;
    }
    function Xc(I, f) {
      switch (f) {
        case -1 * 4491 + -5 * 1975 + 14368:
          return function(h) {
            return this.fromWireType(De[h >> 19 * -98 + -1562 + 3426]);
          };
        case -33 * 71 + 17 * 579 + -3 * 2499:
          return function(h) {
            return this.fromWireType(et[h >> -1 * -6871 + -199 * 22 + 3 * -830]);
          };
        default:
          throw new TypeError("Unknown float type: " + I);
      }
    }
    function Mc(I) {
      var f = Function;
      if (!(f instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof f + " which is not a function");
      var h = io(f.name || "unknownFunctionName", function() {
      });
      return h.prototype = f.prototype, h = new h(), I = f.apply(h, I), I instanceof Object ? I : h;
    }
    function jc(I, f, h) {
      switch (f) {
        case 0:
          return h ? function(y) {
            return ue[y];
          } : function(y) {
            return le[y];
          };
        case 5067 + 9641 * -1 + 4575:
          return h ? function(y) {
            return Ze[y >> -656 * -2 + -6801 * 1 + 5490];
          } : function(y) {
            return ct[y >> -3529 * 1 + 8177 + -3 * 1549];
          };
        case -222 * 2 + -1322 * -7 + 2 * -4404:
          return h ? function(y) {
            return ie[y >> 2];
          } : function(y) {
            return He[y >> -3359 * -1 + -1 * -8579 + 11936 * -1];
          };
        default:
          throw new TypeError("Unknown integer type: " + I);
      }
    }
    function Io(I) {
      return I || X("Cannot use deleted val. handle = " + I), nt[I].value;
    }
    function fi(I, f) {
      var h = _t[I];
      return h === void 0 && X(f + " has unknown type " + si(I)), h;
    }
    var Jc = {}, Ci = {};
    function pi() {
      if (!fo) {
        var I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: a || "./this.program" }, f;
        for (f in Ci) I[f] = Ci[f];
        var h = [];
        for (f in I) h.push(f + "=" + I[f]);
        fo = h;
      }
      return fo;
    }
    var fo, hi = [];
    function mi(I) {
      var f = {}, h;
      for (h in I) (function(y) {
        var w = I[y];
        f[y] = typeof w == "function" ? function() {
          hi.push(y);
          try {
            return w.apply(null, arguments);
          } finally {
            if (m) return;
            var S = hi.pop();
            A(S === y);
          }
        } : w;
      })(h);
      return f;
    }
    for (var bi = Array(-686 + 2 * 471), Ln = 515 * 13 + 2535 + -9230; -5934 * -1 + -4 * -1549 + -11874 * 1 > Ln; ++Ln) bi[Ln] = String.fromCharCode(Ln);
    $r = bi, p0 = t.BindingError = ao("BindingError"), ei = t.InternalError = ao("InternalError"), Vt.prototype.isAliasOf = function(I) {
      if (!(this instanceof Vt && I instanceof Vt)) return !(-663 * -2 + -618 * -5 + -4415);
      var f = this.A.fa.ea, h = this.A.da, y = I.A.fa.ea;
      for (I = I.A.da; f.ia; ) h = f.qa(h), f = f.ia;
      for (; y.ia; ) I = y.qa(I), y = y.ia;
      return f === y && h === I;
    }, Vt.prototype.clone = function() {
      if (this.A.da || so(this), this.A.pa) return this.A.count.value += 5210 + 1 * 8238 + -13447 * 1, this;
      var I = M0(Object.create(Object.getPrototypeOf(this), { A: { value: Tc(this.A) } }));
      return I.A.count.value += 286 + 54 * 176 + -9789, I.A.oa = !1, I;
    }, Vt.prototype.delete = function() {
      this.A.da || so(this), this.A.oa && !this.A.pa && X("Object already scheduled for deletion"), ti(this), ni(this.A), this.A.pa || (this.A.ga = void 0, this.A.da = void (8929 + 4 * -2098 + 179 * -3));
    }, Vt.prototype.isDeleted = function() {
      return !this.A.da;
    }, Vt.prototype.deleteLater = function() {
      return this.A.da || so(this), this.A.oa && !this.A.pa && X("Object already scheduled for deletion"), J0.push(this), -6758 + -13 * -389 + 1702 === J0.length && j0 && j0(go), this.A.oa = !(1 * 1379 + 4999 + -6378), this;
    }, Bt.prototype.Da = function(I) {
      return this.wa && (I = this.wa(I)), I;
    }, Bt.prototype.va = function(I) {
      this.na && this.na(I);
    }, Bt.prototype.argPackAdvance = 991 + -1 * -8831 + -701 * 14, Bt.prototype.readValueFromPointer = Pn, Bt.prototype.deleteObject = function(I) {
      I !== null && I.delete();
    }, Bt.prototype.fromWireType = function(I) {
      function f() {
        return this.sa ? Vn(this.ea.ma, { fa: this.Ga, da: h, ha: this, ga: I }) : Vn(this.ea.ma, { fa: this, da: I });
      }
      var h = this.Da(I);
      if (!h) return this.va(I), null;
      var y = Fc(this.ea, h);
      if (y !== void 0)
        return -5885 + 21 * 409 + -2704 === y.A.count.value ? (y.A.da = h, y.A.ga = I, y.clone()) : (y = y.clone(), this.va(I), y);
      if (y = this.ea.Ca(h), y = xi[y], !y) return f.call(this);
      y = this.ra ? y.za : y.pointerType;
      var w = ri(h, this.ea, y.ea);
      return w === null ? f.call(this) : this.sa ? Vn(y.ea.ma, { fa: y, da: w, ha: this, ga: I }) : Vn(y.ea.ma, { fa: y, da: w });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(U0).length;
    }, t.getLiveInheritedInstances = function() {
      var I = [], f;
      for (f in U0) U0.hasOwnProperty(f) && I.push(U0[f]);
      return I;
    }, t.flushPendingDeletes = go, t.setDelayFunction = function(I) {
      j0 = I, J0.length && j0 && j0(go);
    }, ai = t.UnboundTypeError = ao("UnboundTypeError"), t.count_emval_handles = function() {
      for (var I = 5 * 760 + 244 * 1 + -4044, f = 1561 * -1 + 2570 + 1004 * -1; f < nt.length; ++f) void (109 * -4 + -643 + 1079) !== nt[f] && ++I;
      return I;
    }, t.get_first_emval = function() {
      for (var I = 16 * -115 + 4316 + 1 * -2471; I < nt.length; ++I) if (void (3962 * -2 + 2969 + -4955 * -1) !== nt[I]) return nt[I];
      return null;
    }, pe.push({ Ba: function() {
      Ai();
    } });
    var Uc = { z: function(I) {
      return En(I + (3236 + -46 * 70)) + (813 * -7 + 8416 * 1 + -2709);
    }, u: function(I, f, h) {
      throw new Vc(I).Fa(f, h), "uncaught_exception" in Zn ? Zn.xa++ : Zn.xa = 1, I;
    }, w: function(I, f, h, y, w) {
      var S = oo(h);
      f = Me(f), St(I, { name: f, fromWireType: function(O) {
        return !!O;
      }, toWireType: function(O, k) {
        return k ? y : w;
      }, argPackAdvance: 8, readValueFromPointer: function(O) {
        if (5101 + 164 * 46 + -12644 === h) var k = ue;
        else if (h === 2) k = Ze;
        else if (-2026 * 1 + -2551 * 1 + 4581 === h) k = ie;
        else throw new TypeError("Unknown boolean type size: " + f);
        return this.fromWireType(k[O >> S]);
      }, ka: null });
    }, h: function(I, f, h, y, w, S, O, k, R, K, P, V, $) {
      P = Me(P), S = Tt(w, S), k && (k = Tt(O, k)), K && (K = Tt(R, K)), $ = Tt(V, $);
      var he = ro(P);
      oi(he, function() {
        _0("Cannot construct " + P + " due to unbound types", [y]);
      }), h0([I, f, h], y ? [y] : [], function(T) {
        if (T = T[217 * 7 + -590 * -10 + -7419], y) var bt = T.ea, Le = bt.ma;
        else Le = Vt.prototype;
        T = io(he, function() {
          if (Object.getPrototypeOf(this) !== A0) throw new p0("Use 'new' to construct " + P);
          if (void (-2313 + 9 * 257) === y0.la) throw new p0(P + " has no accessible constructor");
          var vi = y0.la[arguments.length];
          if (void (6426 + 126 * -51) === vi) throw new p0("Tried to invoke ctor of " + P + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(y0.la).toString() + ") parameters instead!");
          return vi.apply(this, arguments);
        });
        var ze = {};
        ze.value = T;
        var Qt = {};
        Qt.constructor = ze;
        var A0 = Object.create(Le, Qt);
        T.prototype = A0;
        var y0 = new Ec(P, T, A0, $, bt, S, k, K);
        bt = new Bt(P, y0, !(-2453 * -1 + -8739 + 6286), !(-1084 * 6 + -3647 + 10152)), Le = new Bt(P + "*", y0, !(-11184 + -2237 * -5), !(123 * -19 + 1582 + 756));
        var Wi = new Bt(P + " const*", y0, !(241 * 2 + -1468 * -2 + 51 * -67), !(-4643 + 4643 * 1)), po = {};
        return po.pointerType = Le, po.za = Wi, xi[I] = po, ii(he, T), [bt, Le, Wi];
      });
    }, g: function(I, f, h, y, w, S) {
      A(-34 * -272 + 5338 + -78 * 187 < f);
      var O = ci(f, h);
      w = Tt(y, w);
      var k = [S], R = [];
      h0([], [I], function(K) {
        K = K[16 * 37 + -802 * 2 + -253 * -4];
        var P = "constructor " + K.name;
        if (void (-794 * -7 + 315 + -5873) === K.ea.la && (K.ea.la = []), void (9091 + -4022 * -1 + -13113) !== K.ea.la[f - (422 * -1 + -9823 + -47 * -218)]) throw new p0("Cannot register multiple constructors with identical number of parameters (" + (f - (-9209 + -161 * 57 + 18387)) + ") for class '" + K.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return K.ea.la[f - (37 * 191 + 6222 + 44 * -302)] = function() {
          _0("Cannot construct " + K.name + " due to unbound types", O);
        }, h0([], O, function(V) {
          return K.ea.la[f - (-1 * 4687 + 1233 * 4 + -244)] = function() {
            arguments.length !== f - (-19 * 297 + -567 * 13 + -137 * -95) && X(P + " called with " + arguments.length + " arguments, expected " + (f - (-1 * -6123 + 4 * 947 + -9910))), R.length = 49 * -151 + -9388 + -1 * -16787, k.length = f;
            for (var $ = 16388 + -2341 * 7; $ < f; ++$) k[$] = V[$].toWireType(R, arguments[$ - (-4564 + -1 * -7510 + -2945)]);
            return $ = w.apply(null, k), Tn(R), V[0].fromWireType($);
          }, [];
        }), [];
      });
    }, b: function(I, f, h, y, w, S, O, k, R, K) {
      f = Me(f), w = Tt(y, w), h0([], [I], function(P) {
        P = P[-1 * 4087 + 37 * -197 + 11376];
        var V = P.name + "." + f, $ = { get: function() {
          _0("Cannot access " + V + " due to unbound types", [h, O]);
        }, enumerable: !(-7 * -986 + -1 * 5541 + -1361), configurable: !(-8481 + -3 * -2827) };
        return R ? $.set = function() {
          _0("Cannot access " + V + " due to unbound types", [h, O]);
        } : $.set = function() {
          X(V + " is a read-only property");
        }, Object.defineProperty(P.ea.ma, f, $), h0([], R ? [h, O] : [h], function(he) {
          var T = he[0], bt = { get: function() {
            var ze = gi(this, P, V + " getter");
            return T.fromWireType(w(S, ze));
          }, enumerable: !(7730 + 31 * -239 + -1 * 321) };
          if (R) {
            R = Tt(k, R);
            var Le = he[1];
            bt.set = function(ze) {
              var Qt = gi(this, P, V + " setter"), A0 = [];
              R(K, Qt, Le.toWireType(A0, ze)), Tn(A0);
            };
          }
          return Object.defineProperty(P.ea.ma, f, bt), [];
        }), [];
      });
    }, v: function(I, f) {
      f = Me(f), St(I, { name: f, fromWireType: function(h) {
        var y = nt[h].value;
        return lo(h), y;
      }, toWireType: function(h, y) {
        return m0(y);
      }, argPackAdvance: 8, readValueFromPointer: Pn, ka: null });
    }, m: function(I, f, h) {
      h = oo(h), f = Me(f), St(I, { name: f, fromWireType: function(y) {
        return y;
      }, toWireType: function(y, w) {
        if (typeof w != "number" && typeof w != "boolean") throw new TypeError('Cannot convert "' + b0(w) + '" to ' + this.name);
        return w;
      }, argPackAdvance: 8, readValueFromPointer: Xc(f, h), ka: null });
    }, c: function(I, f, h, y, w, S) {
      var O = ci(f, h);
      I = Me(I), w = Tt(y, w), oi(I, function() {
        _0("Cannot call " + I + " due to unbound types", O);
      }, f - (-87 * -59 + -2 * -4773 + -14678 * 1)), h0([], O, function(k) {
        var R = I, K = I;
        k = [k[-8847 + -637 * 13 + 17128], null].concat(k.slice(-1042 + 59 * -2 + -387 * -3));
        var P = w, V = k.length;
        -5 * 1779 + -7330 + -27 * -601 > V && X("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var $ = k[-1487 * -4 + -3587 + 8 * -295] !== null && !(2 * 4277 + -3257 + 662 * -8), he = !(4315 + -1 * 2834 + 74 * -20), T = -33 * -67 + 1 * 6918 + -1304 * 7; T < k.length; ++T) if (k[T] !== null && k[T].ka === void 0) {
          he = !(-1 * 7929 + -209 * -1 + -772 * -10);
          break;
        }
        var bt = k[-1 * -1451 + 23 * 124 + -4303].name !== "void", Le = "", ze = "";
        for (T = -2895 + -2687 * 1 + -5582 * -1; T < V - (1364 + -4583 * 1 + 3221); ++T) Le += (-830 + -166 * -5 !== T ? ", " : "") + "arg" + T, ze += (312 + -1 * -9083 + -9395 !== T ? ", " : "") + "arg" + T + "Wired";
        K = "return function " + ro(K) + "(" + Le + `) {
if (arguments.length !== ` + (V - (-13158 + 20 * 658)) + `) {
throwBindingError('function ` + K + " called with ' + arguments.length + ' arguments, expected " + (V - 2) + ` args!');
}
`, he && (K += `var destructors = [];
`);
        var Qt = he ? "destructors" : "null";
        for (Le = "throwBindingError invoker fn runDestructors retType classParam".split(" "), P = [X, P, S, Tn, k[0], k[-1762 + 1 * -5855 + 7618]], $ && (K += "var thisWired = classParam.toWireType(" + Qt + `, this);
`), T = -1 * 1973 + 11 * 869 + -7586; T < V - (-7463 * -1 + 271 * -1 + 719 * -10); ++T) K += "var arg" + T + "Wired = argType" + T + ".toWireType(" + Qt + ", arg" + T + "); // " + k[T + 2].name + `
`, Le.push("argType" + T), P.push(k[T + (-3 * -644 + 8555 + -10485)]);
        if ($ && (ze = "thisWired" + (9687 + -1 * 9687 < ze.length ? ", " : "") + ze), K += (bt ? "var rv = " : "") + "invoker(fn" + (494 + 38 * -13 < ze.length ? ", " : "") + ze + `);
`, he) K += `runDestructors(destructors);
`;
        else
          for (T = $ ? 1723 * 3 + -7918 + 2750 : -1423 * -1 + -5750 * -1 + -7171; T < k.length; ++T) V = 384 + 383 * -1 === T ? "thisWired" : "arg" + (T - (-2117 + 19 * 307 + 1238 * -3)) + "Wired", k[T].ka !== null && (K += V + "_dtor(" + V + "); // " + k[T].name + `
`, Le.push(V + "_dtor"), P.push(k[T].ka));
        return bt && (K += `var ret = retType.fromWireType(rv);
return ret;
`), Le.push(K + `}
`), k = Mc(Le).apply(null, P), ii(R, k, f - 1), [];
      });
    }, e: function(I, f, h, y, w) {
      function S(K) {
        return K;
      }
      f = Me(f), w === -1 && (w = 1078352992 + -5 * 1122298143 + 8828105018 * 1);
      var O = oo(h);
      if (-6254 + 3 * 1637 + -1343 * -1 === y) {
        var k = 32 - 8 * h;
        S = function(K) {
          return K << k >>> k;
        };
      }
      var R = -(-6 * 87 + 97 * -19 + -7 * -338) != f.indexOf("unsigned");
      St(I, { name: f, fromWireType: S, toWireType: function(K, P) {
        if (typeof P != "number" && typeof P != "boolean") throw new TypeError('Cannot convert "' + b0(P) + '" to ' + this.name);
        if (P < y || P > w) throw new TypeError('Passing a number "' + b0(P) + '" from JS side to C/C++ side to an argument of type "' + f + '", which is outside the valid range [' + y + ", " + w + "]!");
        return R ? P >>> 1369 + -3622 * -2 + 33 * -261 : P | 0;
      }, argPackAdvance: 8, readValueFromPointer: jc(f, O, -7963 + 6507 * -1 + 1447 * 10 !== y), ka: null });
    }, d: function(I, f, h) {
      function y(k) {
        k >>= -949 + -3 * -317;
        var R = He;
        return new w(Q, R[k + 1], R[k]);
      }
      var w = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][f];
      h = Me(h);
      var S = {};
      S.name = h, S.fromWireType = y, S.argPackAdvance = 8, S.readValueFromPointer = y;
      var O = {};
      O.Ea = !(3949 * -2 + 6369 + -11 * -139), St(I, S, O);
    }, n: function(I, f) {
      f = Me(f);
      var h = f === "std::string";
      St(I, { name: f, fromWireType: function(y) {
        var w = He[y >> 2];
        if (h) for (var S = y + (-895 + -215 * -6 + -391), O = 243 * 9 + -12 * -201 + -4599; O <= w; ++O) {
          var k = y + 4 + O;
          if (O == w || 11 * 839 + -3034 + -6195 == le[k]) {
            if (S) {
              var R = S, K = le, P = R + (k - S);
              for (S = R; K[S] && !(S >= P); ) ++S;
              if (1511 * -5 + 7 * 377 + 1233 * 4 < S - R && K.subarray && d) R = d.decode(K.subarray(R, S));
              else {
                for (P = ""; R < S; ) {
                  var V = K[R++];
                  if (V & -868 + 498 * 2) {
                    var $ = K[R++] & 63;
                    if (4171 + -2215 * -1 + 1 * -6194 == (V & 3275 + -1 * 7980 + 4929)) P += String.fromCharCode((V & 31) << 1 * -5081 + 4497 + -5 * -118 | $);
                    else {
                      var he = K[R++] & 63;
                      V = 1 * 1198 + -7637 + -3 * -2221 == (V & -2738 + -2433 * -1 + 545) ? (V & 3505 + 2 * -3503 + 3516) << 1 * -716 + 1314 + 293 * -2 | $ << 1821 + 361 * 25 + 10 * -1084 | he : (V & 7) << -1777 * 1 + -8395 + 5095 * 2 | $ << -10324 + 646 * 16 | he << 7381 + 1 * 7391 + -14766 | K[R++] & 2659 * 1 + 1 * 7474 + 106 * -95, -38791 * -1 + 25 * -313 + 34570 > V ? P += String.fromCharCode(V) : (V -= 1 * 1951 + -1 * 29514 + -31033 * -3, P += String.fromCharCode(214 * 32 + 52496 + 2024 * -2 | V >> -15733 + 1211 * 13, -179 * 211 + 4928 + 89161 * 1 | V & -336 + 9 * 151));
                    }
                  } else P += String.fromCharCode(V);
                }
                R = P;
              }
            } else R = "";
            if (void (1677 + 559 * -3) === T) var T = R;
            else T += String.fromCharCode(-3 * 2419 + 4381 + -2876 * -1), T += R;
            S = k + (-4033 * 2 + 8845 + -778);
          }
        }
        else {
          for (T = Array(w), O = -2 * 3691 + -3292 + -1186 * -9; O < w; ++O) T[O] = String.fromCharCode(le[y + (-1571 * 3 + -799 + 5516) + O]);
          T = T.join("");
        }
        return kt(y), T;
      }, toWireType: function(y, w) {
        w instanceof ArrayBuffer && (w = new Uint8Array(w));
        var S = typeof w == "string";
        S || w instanceof Uint8Array || w instanceof Uint8ClampedArray || w instanceof Int8Array || X("Cannot pass non-string to std::string");
        var O = (h && S ? function() {
          for (var K = -8 * -1046 + 33 * 278 + -17542, P = 2775 + -1 * 3334 + -1 * -559; P < w.length; ++P) {
            var V = w.charCodeAt(P);
            -89190 + -67115 * -1 + -11053 * -7 <= V && 9832 * 1 + -373 * -244 + 41 * -1061 >= V && (V = 129599 + 19 * -4198 + 15699 + ((V & 191 * 37 + -1 * -1837 + -7881) << 2322 + 1 * -4326 + 2014) | w.charCodeAt(++P) & 6420 + 431 * -21 + -261 * -14), 127 >= V ? ++K : K = -5686 + -1 * -1838 + -3 * -1965 >= V ? K + (-3929 * 1 + 3 * -1799 + 9328) : -21 * 2916 + -23 * 822 + 20811 * 7 >= V ? K + 3 : K + (-9330 + -4667 * -2);
          }
          return K;
        } : function() {
          return w.length;
        })(), k = En(1 * -4651 + -365 + 1004 * 5 + O + (-4489 + 1 * 2417 + 2073));
        if (He[k >> 263 * 1 + -9827 + -9566 * -1] = O, h && S) v(w, k + (-5142 + -1 * 5904 + 11050), O + (-1 * 6515 + -6990 + -13506 * -1));
        else if (S) for (S = -9797 * -1 + -2 * -4391 + -33 * 563; S < O; ++S) {
          var R = w.charCodeAt(S);
          19 * -462 + -1 * 6616 + 15649 < R && (kt(k), X("String has UTF-16 code units that do not fit in 8 bits")), le[k + (-262 + -14 * -19) + S] = R;
        }
        else
          for (S = -1684 + 1 * 1684; S < O; ++S) le[k + (-6851 + -2285 * -3) + S] = w[S];
        return y !== null && y.push(kt, k), k;
      }, argPackAdvance: 8, readValueFromPointer: Pn, ka: function(y) {
        kt(y);
      } });
    }, j: function(I, f, h) {
      if (h = Me(h), -2810 + -5 * -339 + 1117 * 1 === f) var y = Y, w = j, S = F, O = function() {
        return ct;
      }, k = 7 * 1387 + -2203 * -4 + -18520;
      else -452 * -3 + 5879 + -7231 === f && (y = Z, w = J, S = be, O = function() {
        return He;
      }, k = 9402 + -191 * 2 + -4509 * 2);
      St(I, { name: h, fromWireType: function(R) {
        for (var K = He[R >> -12 * 281 + -2233 + 5607], P = O(), V, $ = R + (214 * 2 + 3855 + -4279 * 1), he = 0; he <= K; ++he) {
          var T = R + 4 + he * f;
          (he == K || -5001 * 1 + 9327 + -4326 == P[T >> k]) && ($ = y($, T - $), void (-7 * -586 + -191 * 21 + 13 * -7) === V ? V = $ : (V += String.fromCharCode(-2220 + 10 * 222), V += $), $ = T + f);
        }
        return kt(R), V;
      }, toWireType: function(R, K) {
        typeof K != "string" && X("Cannot pass non-string to C++ string type " + h);
        var P = S(K), V = En(6 * -547 + 363 + 2923 + P + f);
        return He[V >> -3 * -2747 + 4060 + -251 * 49] = P >> k, w(K, V + (-146 * -29 + 61 * 97 + 1 * -10147), P + f), R !== null && R.push(kt, V), V;
      }, argPackAdvance: 8, readValueFromPointer: Pn, ka: function(R) {
        kt(R);
      } });
    }, x: function(I, f) {
      f = Me(f);
      var h = {};
      h.Qa = !(-6344 + 6 * 632 + -2 * -1276), h.name = f, h.argPackAdvance = 0, h.fromWireType = function() {
      }, h.toWireType = function() {
      }, St(I, h);
    }, k: function(I, f, h) {
      I = Io(I), f = fi(f, "emval::as");
      var y = [], w = m0(y);
      return ie[h >> 2309 * -1 + -7142 * 1 + 9453] = w, f.toWireType(y, I);
    }, i: lo, l: function(I, f) {
      return I = Io(I), f = Io(f), m0(I[f]);
    }, p: function(I) {
      var f = Jc[I];
      return m0(void (-5 * 83 + -6676 + -1 * -7091) === f ? Me(I) : f);
    }, o: function(I) {
      Tn(nt[I].value), lo(I);
    }, y: function(I, f) {
      return I = fi(I, "_emval_take_value"), I = I.readValueFromPointer(f), m0(I);
    }, f: function() {
      tt();
    }, q: function(I, f, h) {
      le.copyWithin(I, f, f + h);
    }, r: function(I) {
      I >>>= 613 * 8 + -7211 * -1 + -12115;
      var f = le.length;
      if (-721131236 + -2 * -1434307442 < I) return !(131 * -52 + 3866 + 2947);
      for (var h = -14285 + 2381 * 6; -1721 + 5 * 345 >= h; h *= 6563 + 11 * -534 + -687 * 1) {
        var y = f * (1 + 0.2 / h);
        y = Math.min(y, I + (117438871 + 25 * -671023)), y = Math.max(3058807 * 1 + -24523177 + 38241586, I, y), -250 * 13 + 3496 + -82 * 3 < y % 65536 && (y += -249 * -115 + -13183 * -3 + -2648 - y % (-5489 * 15 + 51358 + 1 * 96513));
        e: {
          try {
            C.grow(Math.min(-3236272240 + 1794585296 * 3, y) - Q.byteLength + (-209563 + -1046 * -263) >>> -107 * -3 + -3333 + -757 * -4), Ye(C.buffer);
            var w = -301 + -674 * -6 + -3742;
            break e;
          } catch {
          }
          w = void (-434 * -17 + -8613 + 247 * 5);
        }
        if (w) return !(-5631 + -13 * -580 + -1909);
      }
      return !(-5056 + 1 * -9339 + 14396);
    }, s: function(I, f) {
      var h = 0;
      return pi().forEach(function(y, w) {
        var S = f + h;
        for (w = ie[I + (5787 * -1 + -1099 + 26 * 265) * w >> -7764 + 22 * 353] = S, S = 7735 + 1105 * -7; S < y.length; ++S) ue[w++ >> -8689 + 8689 * 1] = y.charCodeAt(S);
        ue[w >> 271 * 24 + -2 * -4989 + -16482 * 1] = 2508 + -73 * -2 + -2654, h += y.length + 1;
      }), 8447 + -2 * 2085 + -47 * 91;
    }, t: function(I, f) {
      var h = pi();
      ie[I >> 464 + 7 * -66] = h.length;
      var y = 4796 + 6975 * -1 + 1 * 2179;
      return h.forEach(function(w) {
        y += w.length + (1 * -9716 + 1 * -2917 + 12634);
      }), ie[f >> -5366 + 1342 * 4] = y, 1 * -6841 + 1663 + 5178;
    }, a: C };
    (function() {
      function I(O) {
        O = O.exports, O = mi(O), t.asm = O, Qe--, t.monitorRunDependencies && t.monitorRunDependencies(Qe), Qe == 0 && ht && (O = ht, ht = null, O());
      }
      function f(O) {
        I(O.instance);
      }
      function h(O) {
        return Pc().then(function(k) {
          return WebAssembly.instantiate(k, w);
        }).then(O, function(k) {
          p("failed to asynchronously prepare wasm: " + k), tt(k);
        });
      }
      var y = {};
      y.a = Uc;
      var w = y;
      if (Qe++, t.monitorRunDependencies && t.monitorRunDependencies(Qe), t.instantiateWasm) try {
        var S = t.instantiateWasm(w, I);
        return S = mi(S);
      } catch (O) {
        return p("Module.instantiateWasm callback failed with error: " + O), !(-290 * 22 + 1 * -8489 + 14870);
      }
      return function() {
        if (l || typeof WebAssembly.instantiateStreaming != "function" || mt() || Jt("file://") || typeof fetch != "function") return h(f);
        var O = {};
        O.credentials = "same-origin", fetch(gt, O).then(function(k) {
          return WebAssembly.instantiateStreaming(k, w).then(f, function(R) {
            return p("wasm streaming compile failed: " + R), p("falling back to ArrayBuffer instantiation"), h(f);
          });
        });
      }(), {};
    })();
    var Ai = t.___wasm_call_ctors = function() {
      return (Ai = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, En = t._malloc = function() {
      return (En = t._malloc = t.asm.C).apply(null, arguments);
    }, kt = t._free = function() {
      return (kt = t._free = t.asm.D).apply(null, arguments);
    }, yi = t.___getTypeName = function() {
      return (yi = t.___getTypeName = t.asm.E).apply(null, arguments);
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
    var Nn;
    ht = function I() {
      Nn || Co(), Nn || (ht = I);
    };
    function Co() {
      function I() {
        if (!Nn && (Nn = !(2 * 2901 + -26 * -276 + -309 * 42), t.calledRun = !(15669 + -3 * 5223), !m)) {
          if (On(pe), On(Te), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var f = t.postRun.shift();
            Xe.unshift(f);
          }
          On(Xe);
        }
      }
      if (!(6595 * 1 + -5849 + -1 * 746 < Qe)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) f0();
        On(Fe), -4118 * 2 + 5658 + 2578 < Qe || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, -53 * -167 + -4359 + -1 * 4491), I();
        }, -1 * -4493 + 1 * 3236 + -14 * 552)) : I());
      }
    }
    if (t.run = Co, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); -1177 + -181 * 18 + 4435 < t.preInit.length; ) t.preInit.pop()();
    return Co(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const cc = Symbol("Comlink.proxy"), zu = Symbol("Comlink.endpoint"), qu = Symbol("Comlink.releaseProxy"), Zo = Symbol("Comlink.finalizer"), lx = Symbol("Comlink.thrown"), gc = (x) => typeof x == "object" && x !== null || typeof x == "function", $u = {
  canHandle: (x) => gc(x) && x[cc],
  serialize(x) {
    const { port1: o, port2: t } = new MessageChannel();
    return uc(x, o), [t, [t]];
  },
  deserialize(x) {
    return x.start(), Ic(x);
  }
}, el = {
  canHandle: (x) => gc(x) && lx in x,
  serialize({ value: x }) {
    let o;
    return x instanceof Error ? o = {
      isError: !0,
      value: {
        message: x.message,
        name: x.name,
        stack: x.stack
      }
    } : o = { isError: !1, value: x }, [o, []];
  },
  deserialize(x) {
    throw x.isError ? Object.assign(new Error(x.value.message), x.value) : x.value;
  }
}, dc = /* @__PURE__ */ new Map([
  ["proxy", $u],
  ["throw", el]
]);
function tl(x, o) {
  for (const t of x)
    if (o === t || t === "*" || t instanceof RegExp && t.test(o))
      return !0;
  return !1;
}
function uc(x, o = globalThis, t = ["*"]) {
  o.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!tl(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: i, path: a } = Object.assign({ path: [] }, n.data), s = (n.data.argumentList || []).map(n0);
    let c;
    try {
      const u = a.slice(0, -1).reduce((p, l) => p[l], x), g = a.reduce((p, l) => p[l], x);
      switch (i) {
        case "GET":
          c = g;
          break;
        case "SET":
          u[a.slice(-1)[0]] = n0(n.data.value), c = !0;
          break;
        case "APPLY":
          c = g.apply(u, s);
          break;
        case "CONSTRUCT":
          {
            const p = new g(...s);
            c = al(p);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: p, port2: l } = new MessageChannel();
            uc(x, l), c = il(p, [p]);
          }
          break;
        case "RELEASE":
          c = void 0;
          break;
        default:
          return;
      }
    } catch (u) {
      c = { value: u, [lx]: 0 };
    }
    Promise.resolve(c).catch((u) => ({ value: u, [lx]: 0 })).then((u) => {
      const [g, p] = Tx(u);
      o.postMessage(Object.assign(Object.assign({}, g), { id: r }), p), i === "RELEASE" && (o.removeEventListener("message", e), lc(o), Zo in x && typeof x[Zo] == "function" && x[Zo]());
    }).catch((u) => {
      const [g, p] = Tx({
        value: new TypeError("Unserializable return value"),
        [lx]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, g), { id: r }), p);
    });
  }), o.start && o.start();
}
function nl(x) {
  return x.constructor.name === "MessagePort";
}
function lc(x) {
  nl(x) && x.close();
}
function Ic(x, o) {
  return lr(x, [], o);
}
function Qn(x) {
  if (x)
    throw new Error("Proxy has been released and is not useable");
}
function fc(x) {
  return B0(x, {
    type: "RELEASE"
  }).then(() => {
    lc(x);
  });
}
const Px = /* @__PURE__ */ new WeakMap(), Vx = "FinalizationRegistry" in globalThis && new FinalizationRegistry((x) => {
  const o = (Px.get(x) || 0) - 1;
  Px.set(x, o), o === 0 && fc(x);
});
function xl(x, o) {
  const t = (Px.get(o) || 0) + 1;
  Px.set(o, t), Vx && Vx.register(x, o, x);
}
function ol(x) {
  Vx && Vx.unregister(x);
}
function lr(x, o = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(r, i) {
      if (Qn(e), i === qu)
        return () => {
          ol(n), fc(x), e = !0;
        };
      if (i === "then") {
        if (o.length === 0)
          return { then: () => n };
        const a = B0(x, {
          type: "GET",
          path: o.map((s) => s.toString())
        }).then(n0);
        return a.then.bind(a);
      }
      return lr(x, [...o, i]);
    },
    set(r, i, a) {
      Qn(e);
      const [s, c] = Tx(a);
      return B0(x, {
        type: "SET",
        path: [...o, i].map((u) => u.toString()),
        value: s
      }, c).then(n0);
    },
    apply(r, i, a) {
      Qn(e);
      const s = o[o.length - 1];
      if (s === zu)
        return B0(x, {
          type: "ENDPOINT"
        }).then(n0);
      if (s === "bind")
        return lr(x, o.slice(0, -1));
      const [c, u] = Ca(a);
      return B0(x, {
        type: "APPLY",
        path: o.map((g) => g.toString()),
        argumentList: c
      }, u).then(n0);
    },
    construct(r, i) {
      Qn(e);
      const [a, s] = Ca(i);
      return B0(x, {
        type: "CONSTRUCT",
        path: o.map((c) => c.toString()),
        argumentList: a
      }, s).then(n0);
    }
  });
  return xl(n, x), n;
}
function rl(x) {
  return Array.prototype.concat.apply([], x);
}
function Ca(x) {
  const o = x.map(Tx);
  return [o.map((t) => t[0]), rl(o.map((t) => t[1]))];
}
const Cc = /* @__PURE__ */ new WeakMap();
function il(x, o) {
  return Cc.set(x, o), x;
}
function al(x) {
  return Object.assign(x, { [cc]: !0 });
}
function Tx(x) {
  for (const [o, t] of dc)
    if (t.canHandle(x)) {
      const [e, n] = t.serialize(x);
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
      value: x
    },
    Cc.get(x) || []
  ];
}
function n0(x) {
  switch (x.type) {
    case "HANDLER":
      return dc.get(x.name).deserialize(x.value);
    case "RAW":
      return x.value;
  }
}
function B0(x, o, t) {
  return new Promise((e) => {
    const n = sl();
    x.addEventListener("message", function r(i) {
      !i.data || !i.data.id || i.data.id !== n || (x.removeEventListener("message", r), e(i.data));
    }), x.start && x.start(), x.postMessage(Object.assign({ id: n }, o), t);
  });
}
function sl() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const pc = "dmFyIHVlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgbGUgPSAocywgdSwgZSkgPT4gdSBpbiBzID8gdWUocywgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IHNbdV0gPSBlOwp2YXIgWW4gPSAocywgdSwgZSkgPT4gbGUocywgdHlwZW9mIHUgIT0gInN5bWJvbCIgPyB1ICsgIiIgOiB1LCBlKTsKY29uc3Qga3QgPSB7CiAgc2ltZDogInNhbV9zaW1kLndhc20iLAogIHNhbTogInNhbS53YXNtIgp9LCBjZSA9IGFzeW5jICgpID0+IFdlYkFzc2VtYmx5LnZhbGlkYXRlKG5ldyBVaW50OEFycmF5KFswLCA5NywgMTE1LCAxMDksIDEsIDAsIDAsIDAsIDEsIDUsIDEsIDk2LCAwLCAxLCAxMjMsIDMsIDIsIDEsIDAsIDEwLCAxMCwgMSwgOCwgMCwgNjUsIDAsIDI1MywgMTUsIDI1MywgOTgsIDExXSkpOwpjbGFzcyBGIGV4dGVuZHMgRXJyb3IgewogIGNvbnN0cnVjdG9yKGUsIG0pIHsKICAgIHN1cGVyKGUpOwogICAgWW4odGhpcywgImNhdXNlIik7CiAgICB0aGlzLm5hbWUgPSAiQXV0b0NhcHR1cmVFcnJvciIsIHRoaXMuY2F1c2UgPSBtOwogIH0KICAvLyBDaGFuZ2UgdGhpcyB0byBEZWNvcmF0b3Igd2hlbiB0aGV5IHdpbGwgYmUgaW4gc3RhYmxlIHJlbGVhc2UKICBzdGF0aWMgbG9nRXJyb3IoZSkgewogIH0KICBzdGF0aWMgZnJvbUNhbWVyYUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgRikKICAgICAgcmV0dXJuIGU7CiAgICBsZXQgbTsKICAgIHN3aXRjaCAoZS5uYW1lKSB7CiAgICAgIGNhc2UgIk92ZXJjb25zdHJhaW5lZEVycm9yIjoKICAgICAgICBtID0gIk1pbmltdW0gcXVhbGl0eSByZXF1aXJlbWVudHMgYXJlIG5vdCBtZXQgYnkgeW91ciBjYW1lcmEiOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RSZWFkYWJsZUVycm9yIjoKICAgICAgY2FzZSAiQWJvcnRFcnJvciI6CiAgICAgICAgbSA9ICJUaGUgd2ViY2FtIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYXBwbGljYXRpb24iOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RBbGxvd2VkRXJyb3IiOgogICAgICAgIG0gPSAiVG8gdXNlIHlvdXIgY2FtZXJhLCB5b3UgbXVzdCBhbGxvdyBwZXJtaXNzaW9ucyI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEZvdW5kRXJyb3IiOgogICAgICAgIG0gPSAiVGhlcmUgaXMgbm8gY2FtZXJhIGF2YWlsYWJsZSB0byB5b3UiOwogICAgICAgIGJyZWFrOwogICAgICBkZWZhdWx0OgogICAgICAgIG0gPSAiQW4gdW5rbm93biBjYW1lcmEgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgICAgICBicmVhazsKICAgIH0KICAgIHJldHVybiBuZXcgRihtLCBlKTsKICB9CiAgc3RhdGljIGZyb21FcnJvcihlKSB7CiAgICBpZiAodGhpcy5sb2dFcnJvcihlKSwgZSBpbnN0YW5jZW9mIEYpCiAgICAgIHJldHVybiBlOwogICAgY29uc3QgbSA9ICJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCI7CiAgICByZXR1cm4gbmV3IEYobSk7CiAgfQp9CmNvbnN0IGZlID0gewogIFJHQjogIlJHQiIsCiAgUkdCQTogIlJHQkEiCn0sIE1uID0gKHMsIHUpID0+IE1hdGguaHlwb3QodS54IC0gcy54LCB1LnkgLSBzLnkpLCBkZSA9IChzKSA9PiB7CiAgY29uc3QgeyBib3R0b21MZWZ0OiB1LCBib3R0b21SaWdodDogZSwgdG9wTGVmdDogbSwgdG9wUmlnaHQ6IGcgfSA9IHMsIEMgPSBNbihtLCBnKSwgQSA9IE1uKGcsIGUpLCBNID0gTW4odSwgZSksIFcgPSBNbihtLCB1KTsKICByZXR1cm4gTWF0aC5taW4oQywgQSwgTSwgVyk7Cn07CnZhciBoZSA9IGZ1bmN0aW9uKCkgewogIHZhciBzID0gdHlwZW9mIGRvY3VtZW50IDwgInUiICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgPyBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyA6IHZvaWQgMDsKICByZXR1cm4gZnVuY3Rpb24odSkgewogICAgdSA9IHUgfHwge307CiAgICB2YXIgZTsKICAgIGUgfHwgKGUgPSB0eXBlb2YgdSA8ICJ1IiA/IHUgOiB7fSk7CiAgICB2YXIgbSwgZzsKICAgIGUucmVhZHkgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihuLCB0KSB7CiAgICAgIG0gPSBuLCBnID0gdDsKICAgIH0pOwogICAgdmFyIEMgPSB7fSwgQTsKICAgIGZvciAoQSBpbiBlKSBlLmhhc093blByb3BlcnR5KEEpICYmIChDW0FdID0gZVtBXSk7CiAgICB2YXIgTSA9ICIuL3RoaXMucHJvZ3JhbSIsIFcgPSAhMSwgRSA9ICExOwogICAgVyA9IHR5cGVvZiB3aW5kb3cgPT0gIm9iamVjdCIsIEUgPSB0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PSAiZnVuY3Rpb24iOwogICAgdmFyIF8gPSAiIiwgUjsKICAgIChXIHx8IEUpICYmIChFID8gXyA9IHNlbGYubG9jYXRpb24uaHJlZiA6IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgKF8gPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyksIHMgJiYgKF8gPSBzKSwgXy5pbmRleE9mKCJibG9iOiIpICE9PSAwID8gXyA9IF8uc3Vic3RyKDAsIF8ubGFzdEluZGV4T2YoIi8iKSArIDEpIDogXyA9ICIiLCBFICYmIChSID0gZnVuY3Rpb24obikgewogICAgICB2YXIgdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOwogICAgICByZXR1cm4gdC5vcGVuKCJHRVQiLCBuLCAhMSksIHQucmVzcG9uc2VUeXBlID0gImFycmF5YnVmZmVyIiwgdC5zZW5kKG51bGwpLCBuZXcgVWludDhBcnJheSh0LnJlc3BvbnNlKTsKICAgIH0pKTsKICAgIHZhciBQID0gZS5wcmludEVyciB8fCBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKTsKICAgIGZvciAoQSBpbiBDKSBDLmhhc093blByb3BlcnR5KEEpICYmIChlW0FdID0gQ1tBXSk7CiAgICBDID0gbnVsbCwgZS50aGlzUHJvZ3JhbSAmJiAoTSA9IGUudGhpc1Byb2dyYW0pOwogICAgdmFyIEw7CiAgICBlLndhc21CaW5hcnkgJiYgKEwgPSBlLndhc21CaW5hcnkpLCBlLm5vRXhpdFJ1bnRpbWUgJiYgZS5ub0V4aXRSdW50aW1lLCB0eXBlb2YgV2ViQXNzZW1ibHkgIT0gIm9iamVjdCIgJiYgc24oIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWQiKTsKICAgIHZhciBHLCBSbiA9ICExOwogICAgZnVuY3Rpb24gUW4obikgewogICAgICBuIHx8IHNuKCJBc3NlcnRpb24gZmFpbGVkOiB1bmRlZmluZWQiKTsKICAgIH0KICAgIHZhciBYbiA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmOCIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gSHQobiwgdCwgcikgewogICAgICB2YXIgaSA9IHg7CiAgICAgIGlmICgwIDwgcikgewogICAgICAgIHIgPSB0ICsgciAtIDE7CiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBuLmxlbmd0aDsgKythKSB7CiAgICAgICAgICB2YXIgbyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICAgIGlmICg1NTI5NiA8PSBvICYmIDU3MzQzID49IG8pIHsKICAgICAgICAgICAgdmFyIGMgPSBuLmNoYXJDb2RlQXQoKythKTsKICAgICAgICAgICAgbyA9IDY1NTM2ICsgKChvICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAoMTI3ID49IG8pIHsKICAgICAgICAgICAgaWYgKHQgPj0gcikgYnJlYWs7CiAgICAgICAgICAgIGlbdCsrXSA9IG87CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBpZiAoMjA0NyA+PSBvKSB7CiAgICAgICAgICAgICAgaWYgKHQgKyAxID49IHIpIGJyZWFrOwogICAgICAgICAgICAgIGlbdCsrXSA9IDE5MiB8IG8gPj4gNjsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICBpZiAoNjU1MzUgPj0gbykgewogICAgICAgICAgICAgICAgaWYgKHQgKyAyID49IHIpIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjI0IHwgbyA+PiAxMjsKICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgaWYgKHQgKyAzID49IHIpIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjQwIHwgbyA+PiAxOCwgaVt0KytdID0gMTI4IHwgbyA+PiAxMiAmIDYzOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgICBpW3QrK10gPSAxMjggfCBvID4+IDYgJiA2MzsKICAgICAgICAgICAgfQogICAgICAgICAgICBpW3QrK10gPSAxMjggfCBvICYgNjM7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGlbdF0gPSAwOwogICAgICB9CiAgICB9CiAgICB2YXIgcW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0Zi0xNmxlIikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiBVdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBuID4+IDEsIGkgPSByICsgdCAvIDI7ICEociA+PSBpKSAmJiBwbltyXTsgKSArK3I7CiAgICAgIGlmIChyIDw8PSAxLCAzMiA8IHIgLSBuICYmIHFuKSByZXR1cm4gcW4uZGVjb2RlKHguc3ViYXJyYXkobiwgcikpOwogICAgICBmb3IgKHIgPSAwLCBpID0gIiI7IDsgKSB7CiAgICAgICAgdmFyIGEgPSBYW24gKyAyICogciA+PiAxXTsKICAgICAgICBpZiAoYSA9PSAwIHx8IHIgPT0gdCAvIDIpIHJldHVybiBpOwogICAgICAgICsrciwgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGEpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiB6dChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgMiA+IHIpIHJldHVybiAwOwogICAgICByIC09IDI7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IHIgPCAyICogbi5sZW5ndGggPyByIC8gMiA6IG4ubGVuZ3RoOwogICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHI7ICsrYSkgWFt0ID4+IDFdID0gbi5jaGFyQ29kZUF0KGEpLCB0ICs9IDI7CiAgICAgIHJldHVybiBYW3QgPj4gMV0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEJ0KG4pIHsKICAgICAgcmV0dXJuIDIgKiBuLmxlbmd0aDsKICAgIH0KICAgIGZ1bmN0aW9uIER0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IDAsIGkgPSAiIjsgIShyID49IHQgLyA0KTsgKSB7CiAgICAgICAgdmFyIGEgPSBiW24gKyA0ICogciA+PiAyXTsKICAgICAgICBpZiAoYSA9PSAwKSBicmVhazsKICAgICAgICArK3IsIDY1NTM2IDw9IGEgPyAoYSAtPSA2NTUzNiwgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2IHwgYSA+PiAxMCwgNTYzMjAgfCBhICYgMTAyMykpIDogaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGEpOwogICAgICB9CiAgICAgIHJldHVybiBpOwogICAgfQogICAgZnVuY3Rpb24gVnQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDQgPiByKSByZXR1cm4gMDsKICAgICAgdmFyIGkgPSB0OwogICAgICByID0gaSArIHIgLSA0OwogICAgICBmb3IgKHZhciBhID0gMDsgYSA8IG4ubGVuZ3RoOyArK2EpIHsKICAgICAgICB2YXIgbyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICBpZiAoNTUyOTYgPD0gbyAmJiA1NzM0MyA+PSBvKSB7CiAgICAgICAgICB2YXIgYyA9IG4uY2hhckNvZGVBdCgrK2EpOwogICAgICAgICAgbyA9IDY1NTM2ICsgKChvICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgfQogICAgICAgIGlmIChiW3QgPj4gMl0gPSBvLCB0ICs9IDQsIHQgKyA0ID4gcikgYnJlYWs7CiAgICAgIH0KICAgICAgcmV0dXJuIGJbdCA+PiAyXSA9IDAsIHQgLSBpOwogICAgfQogICAgZnVuY3Rpb24gR3QobikgewogICAgICBmb3IgKHZhciB0ID0gMCwgciA9IDA7IHIgPCBuLmxlbmd0aDsgKytyKSB7CiAgICAgICAgdmFyIGkgPSBuLmNoYXJDb2RlQXQocik7CiAgICAgICAgNTUyOTYgPD0gaSAmJiA1NzM0MyA+PSBpICYmICsrciwgdCArPSA0OwogICAgICB9CiAgICAgIHJldHVybiB0OwogICAgfQogICAgdmFyIFEsICQsIHgsIFgsIHBuLCBiLCBILCBudCwgdHQ7CiAgICBmdW5jdGlvbiBldChuKSB7CiAgICAgIFEgPSBuLCBlLkhFQVA4ID0gJCA9IG5ldyBJbnQ4QXJyYXkobiksIGUuSEVBUDE2ID0gWCA9IG5ldyBJbnQxNkFycmF5KG4pLCBlLkhFQVAzMiA9IGIgPSBuZXcgSW50MzJBcnJheShuKSwgZS5IRUFQVTggPSB4ID0gbmV3IFVpbnQ4QXJyYXkobiksIGUuSEVBUFUxNiA9IHBuID0gbmV3IFVpbnQxNkFycmF5KG4pLCBlLkhFQVBVMzIgPSBIID0gbmV3IFVpbnQzMkFycmF5KG4pLCBlLkhFQVBGMzIgPSBudCA9IG5ldyBGbG9hdDMyQXJyYXkobiksIGUuSEVBUEY2NCA9IHR0ID0gbmV3IEZsb2F0NjRBcnJheShuKTsKICAgIH0KICAgIHZhciBydCA9IGUuSU5JVElBTF9NRU1PUlkgfHwgMTY3NzcyMTY7CiAgICBlLndhc21NZW1vcnkgPyBHID0gZS53YXNtTWVtb3J5IDogRyA9IG5ldyBXZWJBc3NlbWJseS5NZW1vcnkoeyBpbml0aWFsOiBydCAvIDY1NTM2LCBtYXhpbXVtOiAzMjc2OCB9KSwgRyAmJiAoUSA9IEcuYnVmZmVyKSwgcnQgPSBRLmJ5dGVMZW5ndGgsIGV0KFEpOwogICAgdmFyIGl0ID0gW10sIGF0ID0gW10sICR0ID0gW10sIG90ID0gW107CiAgICBmdW5jdGlvbiBZdCgpIHsKICAgICAgdmFyIG4gPSBlLnByZVJ1bi5zaGlmdCgpOwogICAgICBpdC51bnNoaWZ0KG4pOwogICAgfQogICAgdmFyIFkgPSAwLCBvbiA9IG51bGw7CiAgICBlLnByZWxvYWRlZEltYWdlcyA9IHt9LCBlLnByZWxvYWRlZEF1ZGlvcyA9IHt9OwogICAgZnVuY3Rpb24gc24obikgewogICAgICB0aHJvdyBlLm9uQWJvcnQgJiYgZS5vbkFib3J0KG4pLCBQKG4pLCBSbiA9ICEwLCBuID0gbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcigiYWJvcnQoIiArIG4gKyAiKS4gQnVpbGQgd2l0aCAtcyBBU1NFUlRJT05TPTEgZm9yIG1vcmUgaW5mby4iKSwgZyhuKSwgbjsKICAgIH0KICAgIGZ1bmN0aW9uIHhuKG4pIHsKICAgICAgdmFyIHQgPSBaOwogICAgICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID8gdC5zdGFydHNXaXRoKG4pIDogdC5pbmRleE9mKG4pID09PSAwOwogICAgfQogICAgZnVuY3Rpb24gc3QoKSB7CiAgICAgIHJldHVybiB4bigiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LCIpOwogICAgfQogICAgdmFyIFogPSAic2FtLndhc20iOwogICAgaWYgKCFzdCgpKSB7CiAgICAgIHZhciB1dCA9IFo7CiAgICAgIFogPSBlLmxvY2F0ZUZpbGUgPyBlLmxvY2F0ZUZpbGUodXQsIF8pIDogXyArIHV0OwogICAgfQogICAgZnVuY3Rpb24gbHQoKSB7CiAgICAgIHRyeSB7CiAgICAgICAgaWYgKEwpIHJldHVybiBuZXcgVWludDhBcnJheShMKTsKICAgICAgICBpZiAoUikgcmV0dXJuIFIoWik7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIHNuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBadCgpIHsKICAgICAgcmV0dXJuIEwgfHwgIVcgJiYgIUUgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgeG4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4obHQpIDogZmV0Y2goWiwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spIHRocm93ICJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICciICsgWiArICInIjsKICAgICAgICByZXR1cm4gbi5hcnJheUJ1ZmZlcigpOwogICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gbHQoKTsKICAgICAgfSk7CiAgICB9CiAgICBmdW5jdGlvbiB5bihuKSB7CiAgICAgIGZvciAoOyAwIDwgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5zaGlmdCgpOwogICAgICAgIGlmICh0eXBlb2YgdCA9PSAiZnVuY3Rpb24iKSB0KGUpOwogICAgICAgIGVsc2UgewogICAgICAgICAgdmFyIHIgPSB0LkJhOwogICAgICAgICAgdHlwZW9mIHIgPT0gIm51bWJlciIgPyB0LnRhID09PSB2b2lkIDAgPyBGbigidiIsIHIpKCkgOiBGbigidmkiLCByKSh0LnRhKSA6IHIodC50YSA9PT0gdm9pZCAwID8gbnVsbCA6IHQudGEpOwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gRm4obiwgdCkgewogICAgICB2YXIgciA9IFtdOwogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgci5sZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOwogICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gSnQobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIGJbdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIGJbdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgYlt0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIG1uKCkgewogICAgICByZXR1cm4gMCA8IG1uLnhhOwogICAgfQogICAgZnVuY3Rpb24gSW4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIGN0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gUyhuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgeFtuXTsgKSB0ICs9IGN0W3hbbisrXV07CiAgICAgIHJldHVybiB0OwogICAgfQogICAgdmFyIHEgPSB7fSwgSiA9IHt9LCB2biA9IHt9OwogICAgZnVuY3Rpb24gTG4obikgewogICAgICBpZiAobiA9PT0gdm9pZCAwKSByZXR1cm4gIl91bmtub3duIjsKICAgICAgbiA9IG4ucmVwbGFjZSgvW15hLXpBLVowLTlfXS9nLCAiJCIpOwogICAgICB2YXIgdCA9IG4uY2hhckNvZGVBdCgwKTsKICAgICAgcmV0dXJuIDQ4IDw9IHQgJiYgNTcgPj0gdCA/ICJfIiArIG4gOiBuOwogICAgfQogICAgZnVuY3Rpb24gam4obiwgdCkgewogICAgICByZXR1cm4gbiA9IExuKG4pLCBuZXcgRnVuY3Rpb24oImJvZHkiLCAicmV0dXJuIGZ1bmN0aW9uICIgKyBuICsgYCgpIHsKICAgICJ1c2Ugc3RyaWN0IjsgICAgcmV0dXJuIGJvZHkuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKfTsKYCkodCk7CiAgICB9CiAgICBmdW5jdGlvbiBObihuKSB7CiAgICAgIHZhciB0ID0gRXJyb3IsIHIgPSBqbihuLCBmdW5jdGlvbihpKSB7CiAgICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5tZXNzYWdlID0gaSwgaSA9IEVycm9yKGkpLnN0YWNrLCBpICE9PSB2b2lkIDAgJiYgKHRoaXMuc3RhY2sgPSB0aGlzLnRvU3RyaW5nKCkgKyBgCmAgKyBpLnJlcGxhY2UoL15FcnJvcig6W15cbl0qKT9cbi8sICIiKSk7CiAgICAgIH0pOwogICAgICByZXR1cm4gci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHQucHJvdG90eXBlKSwgci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSByLCByLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkgewogICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UgPT09IHZvaWQgMCA/IHRoaXMubmFtZSA6IHRoaXMubmFtZSArICI6ICIgKyB0aGlzLm1lc3NhZ2U7CiAgICAgIH0sIHI7CiAgICB9CiAgICB2YXIgbm4gPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB2KG4pIHsKICAgICAgdGhyb3cgbmV3IG5uKG4pOwogICAgfQogICAgdmFyIGZ0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gZ24obikgewogICAgICB0aHJvdyBuZXcgZnQobik7CiAgICB9CiAgICBmdW5jdGlvbiB0bihuLCB0LCByKSB7CiAgICAgIGZ1bmN0aW9uIGkobCkgewogICAgICAgIGwgPSByKGwpLCBsLmxlbmd0aCAhPT0gbi5sZW5ndGggJiYgZ24oIk1pc21hdGNoZWQgdHlwZSBjb252ZXJ0ZXIgY291bnQiKTsKICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IG4ubGVuZ3RoOyArK3ApIFUobltwXSwgbFtwXSk7CiAgICAgIH0KICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uKGwpIHsKICAgICAgICB2bltsXSA9IHQ7CiAgICAgIH0pOwogICAgICB2YXIgYSA9IEFycmF5KHQubGVuZ3RoKSwgbyA9IFtdLCBjID0gMDsKICAgICAgdC5mb3JFYWNoKGZ1bmN0aW9uKGwsIHApIHsKICAgICAgICBKLmhhc093blByb3BlcnR5KGwpID8gYVtwXSA9IEpbbF0gOiAoby5wdXNoKGwpLCBxLmhhc093blByb3BlcnR5KGwpIHx8IChxW2xdID0gW10pLCBxW2xdLnB1c2goZnVuY3Rpb24oKSB7CiAgICAgICAgICBhW3BdID0gSltsXSwgKytjLCBjID09PSBvLmxlbmd0aCAmJiBpKGEpOwogICAgICAgIH0pKTsKICAgICAgfSksIG8ubGVuZ3RoID09PSAwICYmIGkoYSk7CiAgICB9CiAgICBmdW5jdGlvbiBVKG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPSByIHx8IHt9LCAhKCJhcmdQYWNrQWR2YW5jZSIgaW4gdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoInJlZ2lzdGVyVHlwZSByZWdpc3RlcmVkSW5zdGFuY2UgcmVxdWlyZXMgYXJnUGFja0FkdmFuY2UiKTsKICAgICAgdmFyIGkgPSB0Lm5hbWU7CiAgICAgIGlmIChuIHx8IHYoJ3R5cGUgIicgKyBpICsgJyIgbXVzdCBoYXZlIGEgcG9zaXRpdmUgaW50ZWdlciB0eXBlaWQgcG9pbnRlcicpLCBKLmhhc093blByb3BlcnR5KG4pKSB7CiAgICAgICAgaWYgKHIuRWEpIHJldHVybjsKICAgICAgICB2KCJDYW5ub3QgcmVnaXN0ZXIgdHlwZSAnIiArIGkgKyAiJyB0d2ljZSIpOwogICAgICB9CiAgICAgIEpbbl0gPSB0LCBkZWxldGUgdm5bbl0sIHEuaGFzT3duUHJvcGVydHkobikgJiYgKHQgPSBxW25dLCBkZWxldGUgcVtuXSwgdC5mb3JFYWNoKGZ1bmN0aW9uKGEpIHsKICAgICAgICBhKCk7CiAgICAgIH0pKTsKICAgIH0KICAgIGZ1bmN0aW9uIEt0KG4pIHsKICAgICAgcmV0dXJuIHsgY291bnQ6IG4uY291bnQsIG9hOiBuLm9hLCBwYTogbi5wYSwgZGE6IG4uZGEsIGZhOiBuLmZhLCBnYTogbi5nYSwgaGE6IG4uaGEgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEhuKG4pIHsKICAgICAgdihuLkEuZmEuZWEubmFtZSArICIgaW5zdGFuY2UgYWxyZWFkeSBkZWxldGVkIik7CiAgICB9CiAgICB2YXIgVW4gPSAhMTsKICAgIGZ1bmN0aW9uIGR0KCkgewogICAgfQogICAgZnVuY3Rpb24gaHQobikgewogICAgICAtLW4uY291bnQudmFsdWUsIG4uY291bnQudmFsdWUgPT09IDAgJiYgKG4uZ2EgPyBuLmhhLm5hKG4uZ2EpIDogbi5mYS5lYS5uYShuLmRhKSk7CiAgICB9CiAgICBmdW5jdGlvbiB1bihuKSB7CiAgICAgIHJldHVybiB0eXBlb2YgRmluYWxpemF0aW9uR3JvdXAgPiAidSIgPyAodW4gPSBmdW5jdGlvbih0KSB7CiAgICAgICAgcmV0dXJuIHQ7CiAgICAgIH0sIG4pIDogKFVuID0gbmV3IEZpbmFsaXphdGlvbkdyb3VwKGZ1bmN0aW9uKHQpIHsKICAgICAgICBmb3IgKHZhciByID0gdC5uZXh0KCk7ICFyLmRvbmU7IHIgPSB0Lm5leHQoKSkgciA9IHIudmFsdWUsIHIuZGEgPyBodChyKSA6IGNvbnNvbGUud2Fybigib2JqZWN0IGFscmVhZHkgZGVsZXRlZDogIiArIHIuZGEpOwogICAgICB9KSwgdW4gPSBmdW5jdGlvbih0KSB7CiAgICAgICAgcmV0dXJuIFVuLnJlZ2lzdGVyKHQsIHQuQSwgdC5BKSwgdDsKICAgICAgfSwgZHQgPSBmdW5jdGlvbih0KSB7CiAgICAgICAgVW4udW5yZWdpc3Rlcih0LkEpOwogICAgICB9LCB1bihuKSk7CiAgICB9CiAgICB2YXIgbG4gPSB2b2lkIDAsIGNuID0gW107CiAgICBmdW5jdGlvbiB6bigpIHsKICAgICAgZm9yICg7IGNuLmxlbmd0aDsgKSB7CiAgICAgICAgdmFyIG4gPSBjbi5wb3AoKTsKICAgICAgICBuLkEub2EgPSAhMSwgbi5kZWxldGUoKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gRCgpIHsKICAgIH0KICAgIHZhciBwdCA9IHt9OwogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICB2YXIgciA9IGU7CiAgICAgIGlmIChyW25dLmphID09PSB2b2lkIDApIHsKICAgICAgICB2YXIgaSA9IHJbbl07CiAgICAgICAgcltuXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgcmV0dXJuIHJbbl0uamEuaGFzT3duUHJvcGVydHkoYXJndW1lbnRzLmxlbmd0aCkgfHwgdigiRnVuY3Rpb24gJyIgKyB0ICsgIicgY2FsbGVkIHdpdGggYW4gaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0cyBvbmUgb2YgKCIgKyByW25dLmphICsgIikhIiksIHJbbl0uamFbYXJndW1lbnRzLmxlbmd0aF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9LCByW25dLmphID0gW10sIHJbbl0uamFbaS55YV0gPSBpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiB5dChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgPyAoKHIgPT09IHZvaWQgMCB8fCBlW25dLmphICE9PSB2b2lkIDAgJiYgZVtuXS5qYVtyXSAhPT0gdm9pZCAwKSAmJiB2KCJDYW5ub3QgcmVnaXN0ZXIgcHVibGljIG5hbWUgJyIgKyBuICsgIicgdHdpY2UiKSwgUXQobiwgbiksIGUuaGFzT3duUHJvcGVydHkocikgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIG92ZXJsb2FkcyBvZiBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIHIgKyAiKSEiKSwgZVtuXS5qYVtyXSA9IHQpIDogKGVbbl0gPSB0LCByICE9PSB2b2lkIDAgJiYgKGVbbl0uUmEgPSByKSk7CiAgICB9CiAgICBmdW5jdGlvbiBYdChuLCB0LCByLCBpLCBhLCBvLCBjLCBsKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuY29uc3RydWN0b3IgPSB0LCB0aGlzLm1hID0gciwgdGhpcy5uYSA9IGksIHRoaXMuaWEgPSBhLCB0aGlzLkNhID0gbywgdGhpcy5xYSA9IGMsIHRoaXMuQWEgPSBsOwogICAgfQogICAgZnVuY3Rpb24gd24obiwgdCwgcikgewogICAgICBmb3IgKDsgdCAhPT0gcjsgKSB0LnFhIHx8IHYoIkV4cGVjdGVkIG51bGwgb3IgaW5zdGFuY2Ugb2YgIiArIHIubmFtZSArICIsIGdvdCBhbiBpbnN0YW5jZSBvZiAiICsgdC5uYW1lKSwgbiA9IHQucWEobiksIHQgPSB0LmlhOwogICAgICByZXR1cm4gbjsKICAgIH0KICAgIGZ1bmN0aW9uIHF0KG4sIHQpIHsKICAgICAgcmV0dXJuIHQgPT09IG51bGwgPyAodGhpcy51YSAmJiB2KCJudWxsIGlzIG5vdCBhIHZhbGlkICIgKyB0aGlzLm5hbWUpLCAwKSA6ICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIG5lKG4sIHQpIHsKICAgICAgaWYgKHQgPT09IG51bGwpIHsKICAgICAgICBpZiAodGhpcy51YSAmJiB2KCJudWxsIGlzIG5vdCBhIHZhbGlkICIgKyB0aGlzLm5hbWUpLCB0aGlzLnNhKSB7CiAgICAgICAgICB2YXIgciA9IHRoaXMuSGEoKTsKICAgICAgICAgIHJldHVybiBuICE9PSBudWxsICYmIG4ucHVzaCh0aGlzLm5hLCByKSwgcjsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIDA7CiAgICAgIH0KICAgICAgaWYgKHQuQSB8fCB2KCdDYW5ub3QgcGFzcyAiJyArIHJuKHQpICsgJyIgYXMgYSAnICsgdGhpcy5uYW1lKSwgdC5BLmRhIHx8IHYoIkNhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICIgKyB0aGlzLm5hbWUpLCAhdGhpcy5yYSAmJiB0LkEuZmEucmEgJiYgdigiQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAiICsgKHQuQS5oYSA/IHQuQS5oYS5uYW1lIDogdC5BLmZhLm5hbWUpICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKSwgciA9IHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSwgdGhpcy5zYSkgc3dpdGNoICh0LkEuZ2EgPT09IHZvaWQgMCAmJiB2KCJQYXNzaW5nIHJhdyBwb2ludGVyIHRvIHNtYXJ0IHBvaW50ZXIgaXMgaWxsZWdhbCIpLCB0aGlzLlBhKSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgdC5BLmhhID09PSB0aGlzID8gciA9IHQuQS5nYSA6IHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSk7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByID0gdC5BLmdhOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgaWYgKHQuQS5oYSA9PT0gdGhpcykgciA9IHQuQS5nYTsKICAgICAgICAgIGVsc2UgewogICAgICAgICAgICB2YXIgaSA9IHQuY2xvbmUoKTsKICAgICAgICAgICAgciA9IHRoaXMuSWEociwgZW4oZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgaS5kZWxldGUoKTsKICAgICAgICAgICAgfSkpLCBuICE9PSBudWxsICYmIG4ucHVzaCh0aGlzLm5hLCByKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2KCJVbnN1cHBvcnRpbmcgc2hhcmluZyBwb2xpY3kiKTsKICAgICAgfQogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIHRlKG4sIHQpIHsKICAgICAgcmV0dXJuIHQgPT09IG51bGwgPyAodGhpcy51YSAmJiB2KCJudWxsIGlzIG5vdCBhIHZhbGlkICIgKyB0aGlzLm5hbWUpLCAwKSA6ICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArIHQuQS5mYS5uYW1lICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKSwgd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKG4pIHsKICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKEhbbiA+PiAyXSk7CiAgICB9CiAgICBmdW5jdGlvbiBtdChuLCB0LCByKSB7CiAgICAgIHJldHVybiB0ID09PSByID8gbiA6IHIuaWEgPT09IHZvaWQgMCA/IG51bGwgOiAobiA9IG10KG4sIHQsIHIuaWEpLCBuID09PSBudWxsID8gbnVsbCA6IHIuQWEobikpOwogICAgfQogICAgdmFyIGZuID0ge307CiAgICBmdW5jdGlvbiBlZShuLCB0KSB7CiAgICAgIGZvciAodCA9PT0gdm9pZCAwICYmIHYoInB0ciBzaG91bGQgbm90IGJlIHVuZGVmaW5lZCIpOyBuLmlhOyApIHQgPSBuLnFhKHQpLCBuID0gbi5pYTsKICAgICAgcmV0dXJuIGZuW3RdOwogICAgfQogICAgZnVuY3Rpb24gX24obiwgdCkgewogICAgICByZXR1cm4gdC5mYSAmJiB0LmRhIHx8IGduKCJtYWtlQ2xhc3NIYW5kbGUgcmVxdWlyZXMgcHRyIGFuZCBwdHJUeXBlIiksICEhdC5oYSAhPSAhIXQuZ2EgJiYgZ24oIkJvdGggc21hcnRQdHJUeXBlIGFuZCBzbWFydFB0ciBtdXN0IGJlIHNwZWNpZmllZCIpLCB0LmNvdW50ID0geyB2YWx1ZTogMSB9LCB1bihPYmplY3QuY3JlYXRlKG4sIHsgQTogeyB2YWx1ZTogdCB9IH0pKTsKICAgIH0KICAgIGZ1bmN0aW9uIHoobiwgdCwgciwgaSkgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmVhID0gdCwgdGhpcy51YSA9IHIsIHRoaXMucmEgPSBpLCB0aGlzLnNhID0gITEsIHRoaXMubmEgPSB0aGlzLklhID0gdGhpcy5IYSA9IHRoaXMud2EgPSB0aGlzLlBhID0gdGhpcy5HYSA9IHZvaWQgMCwgdC5pYSAhPT0gdm9pZCAwID8gdGhpcy50b1dpcmVUeXBlID0gbmUgOiAodGhpcy50b1dpcmVUeXBlID0gaSA/IHF0IDogdGUsIHRoaXMua2EgPSBudWxsKTsKICAgIH0KICAgIGZ1bmN0aW9uIHZ0KG4sIHQsIHIpIHsKICAgICAgZS5oYXNPd25Qcm9wZXJ0eShuKSB8fCBnbigiUmVwbGFjaW5nIG5vbmV4aXN0YW50IHB1YmxpYyBzeW1ib2wiKSwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIHIgIT09IHZvaWQgMCA/IGVbbl0uamFbcl0gPSB0IDogKGVbbl0gPSB0LCBlW25dLnlhID0gcik7CiAgICB9CiAgICBmdW5jdGlvbiBWKG4sIHQpIHsKICAgICAgbiA9IFMobik7CiAgICAgIHZhciByID0gRm4obiwgdCk7CiAgICAgIHJldHVybiB0eXBlb2YgciAhPSAiZnVuY3Rpb24iICYmIHYoInVua25vd24gZnVuY3Rpb24gcG9pbnRlciB3aXRoIHNpZ25hdHVyZSAiICsgbiArICI6ICIgKyB0KSwgcjsKICAgIH0KICAgIHZhciBndCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIHd0KG4pIHsKICAgICAgbiA9IGJ0KG4pOwogICAgICB2YXIgdCA9IFMobik7CiAgICAgIHJldHVybiBCKG4pLCB0OwogICAgfQogICAgZnVuY3Rpb24gZG4obiwgdCkgewogICAgICBmdW5jdGlvbiByKG8pIHsKICAgICAgICBhW29dIHx8IEpbb10gfHwgKHZuW29dID8gdm5bb10uZm9yRWFjaChyKSA6IChpLnB1c2gobyksIGFbb10gPSAhMCkpOwogICAgICB9CiAgICAgIHZhciBpID0gW10sIGEgPSB7fTsKICAgICAgdGhyb3cgdC5mb3JFYWNoKHIpLCBuZXcgZ3QobiArICI6ICIgKyBpLm1hcCh3dCkuam9pbihbIiwgIl0pKTsKICAgIH0KICAgIGZ1bmN0aW9uIEF0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IFtdLCBpID0gMDsgaSA8IG47IGkrKykgci5wdXNoKGJbKHQgPj4gMikgKyBpXSk7CiAgICAgIHJldHVybiByOwogICAgfQogICAgZnVuY3Rpb24gQ24obikgewogICAgICBmb3IgKDsgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5wb3AoKTsKICAgICAgICBuLnBvcCgpKHQpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBfdChuLCB0LCByKSB7CiAgICAgIHJldHVybiBuIGluc3RhbmNlb2YgT2JqZWN0IHx8IHYociArICcgd2l0aCBpbnZhbGlkICJ0aGlzIjogJyArIG4pLCBuIGluc3RhbmNlb2YgdC5lYS5jb25zdHJ1Y3RvciB8fCB2KHIgKyAnIGluY29tcGF0aWJsZSB3aXRoICJ0aGlzIiBvZiB0eXBlICcgKyBuLmNvbnN0cnVjdG9yLm5hbWUpLCBuLkEuZGEgfHwgdigiY2Fubm90IGNhbGwgZW1zY3JpcHRlbiBiaW5kaW5nIG1ldGhvZCAiICsgciArICIgb24gZGVsZXRlZCBvYmplY3QiKSwgd24obi5BLmRhLCBuLkEuZmEuZWEsIHQuZWEpOwogICAgfQogICAgdmFyIEJuID0gW10sIEkgPSBbe30sIHsgdmFsdWU6IHZvaWQgMCB9LCB7IHZhbHVlOiBudWxsIH0sIHsgdmFsdWU6ICEwIH0sIHsgdmFsdWU6ICExIH1dOwogICAgZnVuY3Rpb24gRG4obikgewogICAgICA0IDwgbiAmJiAtLUlbbl0uSmEgPT09IDAgJiYgKElbbl0gPSB2b2lkIDAsIEJuLnB1c2gobikpOwogICAgfQogICAgZnVuY3Rpb24gZW4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIHZvaWQgMDoKICAgICAgICAgIHJldHVybiAxOwogICAgICAgIGNhc2UgbnVsbDoKICAgICAgICAgIHJldHVybiAyOwogICAgICAgIGNhc2UgITA6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBjYXNlICExOgogICAgICAgICAgcmV0dXJuIDQ7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHZhciB0ID0gQm4ubGVuZ3RoID8gQm4ucG9wKCkgOiBJLmxlbmd0aDsKICAgICAgICAgIHJldHVybiBJW3RdID0geyBKYTogMSwgdmFsdWU6IG4gfSwgdDsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcm4obikgewogICAgICBpZiAobiA9PT0gbnVsbCkgcmV0dXJuICJudWxsIjsKICAgICAgdmFyIHQgPSB0eXBlb2YgbjsKICAgICAgcmV0dXJuIHQgPT09ICJvYmplY3QiIHx8IHQgPT09ICJhcnJheSIgfHwgdCA9PT0gImZ1bmN0aW9uIiA/IG4udG9TdHJpbmcoKSA6ICIiICsgbjsKICAgIH0KICAgIGZ1bmN0aW9uIHJlKG4sIHQpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKG50W3IgPj4gMl0pOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDM6CiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocikgewogICAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUodHRbciA+PiAzXSk7CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGZsb2F0IHR5cGU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gaWUobikgewogICAgICB2YXIgdCA9IEZ1bmN0aW9uOwogICAgICBpZiAoISh0IGluc3RhbmNlb2YgRnVuY3Rpb24pKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJuZXdfIGNhbGxlZCB3aXRoIGNvbnN0cnVjdG9yIHR5cGUgIiArIHR5cGVvZiB0ICsgIiB3aGljaCBpcyBub3QgYSBmdW5jdGlvbiIpOwogICAgICB2YXIgciA9IGpuKHQubmFtZSB8fCAidW5rbm93bkZ1bmN0aW9uTmFtZSIsIGZ1bmN0aW9uKCkgewogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gdC5wcm90b3R5cGUsIHIgPSBuZXcgcigpLCBuID0gdC5hcHBseShyLCBuKSwgbiBpbnN0YW5jZW9mIE9iamVjdCA/IG4gOiByOwogICAgfQogICAgZnVuY3Rpb24gYWUobiwgdCwgcikgewogICAgICBzd2l0Y2ggKHQpIHsKICAgICAgICBjYXNlIDA6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuICRbaV07CiAgICAgICAgICB9IDogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4geFtpXTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBYW2kgPj4gMV07CiAgICAgICAgICB9IDogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gcG5baSA+PiAxXTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBiW2kgPj4gMl07CiAgICAgICAgICB9IDogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gSFtpID4+IDJdOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBpbnRlZ2VyIHR5cGU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gVm4obikgewogICAgICByZXR1cm4gbiB8fCB2KCJDYW5ub3QgdXNlIGRlbGV0ZWQgdmFsLiBoYW5kbGUgPSAiICsgbiksIElbbl0udmFsdWU7CiAgICB9CiAgICBmdW5jdGlvbiBDdChuLCB0KSB7CiAgICAgIHZhciByID0gSltuXTsKICAgICAgcmV0dXJuIHIgPT09IHZvaWQgMCAmJiB2KHQgKyAiIGhhcyB1bmtub3duIHR5cGUgIiArIHd0KG4pKSwgcjsKICAgIH0KICAgIHZhciBvZSA9IHt9LCBFdCA9IHt9OwogICAgZnVuY3Rpb24gVHQoKSB7CiAgICAgIGlmICghR24pIHsKICAgICAgICB2YXIgbiA9IHsgVVNFUjogIndlYl91c2VyIiwgTE9HTkFNRTogIndlYl91c2VyIiwgUEFUSDogIi8iLCBQV0Q6ICIvIiwgSE9NRTogIi9ob21lL3dlYl91c2VyIiwgTEFORzogKHR5cGVvZiBuYXZpZ2F0b3IgPT0gIm9iamVjdCIgJiYgbmF2aWdhdG9yLmxhbmd1YWdlcyAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdIHx8ICJDIikucmVwbGFjZSgiLSIsICJfIikgKyAiLlVURi04IiwgXzogTSB8fCAiLi90aGlzLnByb2dyYW0iIH0sIHQ7CiAgICAgICAgZm9yICh0IGluIEV0KSBuW3RdID0gRXRbdF07CiAgICAgICAgdmFyIHIgPSBbXTsKICAgICAgICBmb3IgKHQgaW4gbikgci5wdXNoKHQgKyAiPSIgKyBuW3RdKTsKICAgICAgICBHbiA9IHI7CiAgICAgIH0KICAgICAgcmV0dXJuIEduOwogICAgfQogICAgdmFyIEduLCBQdCA9IFtdOwogICAgZnVuY3Rpb24gTXQobikgewogICAgICB2YXIgdCA9IHt9LCByOwogICAgICBmb3IgKHIgaW4gbikgKGZ1bmN0aW9uKGkpIHsKICAgICAgICB2YXIgYSA9IG5baV07CiAgICAgICAgdFtpXSA9IHR5cGVvZiBhID09ICJmdW5jdGlvbiIgPyBmdW5jdGlvbigpIHsKICAgICAgICAgIFB0LnB1c2goaSk7CiAgICAgICAgICB0cnkgewogICAgICAgICAgICByZXR1cm4gYS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgICAgICAgfSBmaW5hbGx5IHsKICAgICAgICAgICAgaWYgKFJuKSByZXR1cm47CiAgICAgICAgICAgIHZhciBvID0gUHQucG9wKCk7CiAgICAgICAgICAgIFFuKG8gPT09IGkpOwogICAgICAgICAgfQogICAgICAgIH0gOiBhOwogICAgICB9KShyKTsKICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICBmb3IgKHZhciBXdCA9IEFycmF5KDI1NiksIEVuID0gMDsgMjU2ID4gRW47ICsrRW4pIFd0W0VuXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoRW4pOwogICAgY3QgPSBXdCwgbm4gPSBlLkJpbmRpbmdFcnJvciA9IE5uKCJCaW5kaW5nRXJyb3IiKSwgZnQgPSBlLkludGVybmFsRXJyb3IgPSBObigiSW50ZXJuYWxFcnJvciIpLCBELnByb3RvdHlwZS5pc0FsaWFzT2YgPSBmdW5jdGlvbihuKSB7CiAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBEICYmIG4gaW5zdGFuY2VvZiBEKSkgcmV0dXJuICExOwogICAgICB2YXIgdCA9IHRoaXMuQS5mYS5lYSwgciA9IHRoaXMuQS5kYSwgaSA9IG4uQS5mYS5lYTsKICAgICAgZm9yIChuID0gbi5BLmRhOyB0LmlhOyApIHIgPSB0LnFhKHIpLCB0ID0gdC5pYTsKICAgICAgZm9yICg7IGkuaWE7ICkgbiA9IGkucWEobiksIGkgPSBpLmlhOwogICAgICByZXR1cm4gdCA9PT0gaSAmJiByID09PSBuOwogICAgfSwgRC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHsKICAgICAgaWYgKHRoaXMuQS5kYSB8fCBIbih0aGlzKSwgdGhpcy5BLnBhKSByZXR1cm4gdGhpcy5BLmNvdW50LnZhbHVlICs9IDEsIHRoaXM7CiAgICAgIHZhciBuID0gdW4oT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyksIHsgQTogeyB2YWx1ZTogS3QodGhpcy5BKSB9IH0pKTsKICAgICAgcmV0dXJuIG4uQS5jb3VudC52YWx1ZSArPSAxLCBuLkEub2EgPSAhMSwgbjsKICAgIH0sIEQucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKCkgewogICAgICB0aGlzLkEuZGEgfHwgSG4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgZHQodGhpcyksIGh0KHRoaXMuQSksIHRoaXMuQS5wYSB8fCAodGhpcy5BLmdhID0gdm9pZCAwLCB0aGlzLkEuZGEgPSB2b2lkIDApOwogICAgfSwgRC5wcm90b3R5cGUuaXNEZWxldGVkID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAhdGhpcy5BLmRhOwogICAgfSwgRC5wcm90b3R5cGUuZGVsZXRlTGF0ZXIgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIHRoaXMuQS5kYSB8fCBIbih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBjbi5wdXNoKHRoaXMpLCBjbi5sZW5ndGggPT09IDEgJiYgbG4gJiYgbG4oem4pLCB0aGlzLkEub2EgPSAhMCwgdGhpczsKICAgIH0sIHoucHJvdG90eXBlLkRhID0gZnVuY3Rpb24obikgewogICAgICByZXR1cm4gdGhpcy53YSAmJiAobiA9IHRoaXMud2EobikpLCBuOwogICAgfSwgei5wcm90b3R5cGUudmEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHRoaXMubmEgJiYgdGhpcy5uYShuKTsKICAgIH0sIHoucHJvdG90eXBlLmFyZ1BhY2tBZHZhbmNlID0gOCwgei5wcm90b3R5cGUucmVhZFZhbHVlRnJvbVBvaW50ZXIgPSBBbiwgei5wcm90b3R5cGUuZGVsZXRlT2JqZWN0ID0gZnVuY3Rpb24obikgewogICAgICBuICE9PSBudWxsICYmIG4uZGVsZXRlKCk7CiAgICB9LCB6LnByb3RvdHlwZS5mcm9tV2lyZVR5cGUgPSBmdW5jdGlvbihuKSB7CiAgICAgIGZ1bmN0aW9uIHQoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuc2EgPyBfbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLkdhLCBkYTogciwgaGE6IHRoaXMsIGdhOiBuIH0pIDogX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcywgZGE6IG4gfSk7CiAgICAgIH0KICAgICAgdmFyIHIgPSB0aGlzLkRhKG4pOwogICAgICBpZiAoIXIpIHJldHVybiB0aGlzLnZhKG4pLCBudWxsOwogICAgICB2YXIgaSA9IGVlKHRoaXMuZWEsIHIpOwogICAgICBpZiAoaSAhPT0gdm9pZCAwKQogICAgICAgIHJldHVybiBpLkEuY291bnQudmFsdWUgPT09IDAgPyAoaS5BLmRhID0gciwgaS5BLmdhID0gbiwgaS5jbG9uZSgpKSA6IChpID0gaS5jbG9uZSgpLCB0aGlzLnZhKG4pLCBpKTsKICAgICAgaWYgKGkgPSB0aGlzLmVhLkNhKHIpLCBpID0gcHRbaV0sICFpKSByZXR1cm4gdC5jYWxsKHRoaXMpOwogICAgICBpID0gdGhpcy5yYSA/IGkuemEgOiBpLnBvaW50ZXJUeXBlOwogICAgICB2YXIgYSA9IG10KHIsIHRoaXMuZWEsIGkuZWEpOwogICAgICByZXR1cm4gYSA9PT0gbnVsbCA/IHQuY2FsbCh0aGlzKSA6IHRoaXMuc2EgPyBfbihpLmVhLm1hLCB7IGZhOiBpLCBkYTogYSwgaGE6IHRoaXMsIGdhOiBuIH0pIDogX24oCiAgICAgICAgaS5lYS5tYSwKICAgICAgICB7IGZhOiBpLCBkYTogYSB9CiAgICAgICk7CiAgICB9LCBlLmdldEluaGVyaXRlZEluc3RhbmNlQ291bnQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGZuKS5sZW5ndGg7CiAgICB9LCBlLmdldExpdmVJbmhlcml0ZWRJbnN0YW5jZXMgPSBmdW5jdGlvbigpIHsKICAgICAgdmFyIG4gPSBbXSwgdDsKICAgICAgZm9yICh0IGluIGZuKSBmbi5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBuLnB1c2goZm5bdF0pOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZmx1c2hQZW5kaW5nRGVsZXRlcyA9IHpuLCBlLnNldERlbGF5RnVuY3Rpb24gPSBmdW5jdGlvbihuKSB7CiAgICAgIGxuID0gbiwgY24ubGVuZ3RoICYmIGxuICYmIGxuKHpuKTsKICAgIH0sIGd0ID0gZS5VbmJvdW5kVHlwZUVycm9yID0gTm4oIlVuYm91bmRUeXBlRXJyb3IiKSwgZS5jb3VudF9lbXZhbF9oYW5kbGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSAwLCB0ID0gNTsgdCA8IEkubGVuZ3RoOyArK3QpIElbdF0gIT09IHZvaWQgMCAmJiArK247CiAgICAgIHJldHVybiBuOwogICAgfSwgZS5nZXRfZmlyc3RfZW12YWwgPSBmdW5jdGlvbigpIHsKICAgICAgZm9yICh2YXIgbiA9IDU7IG4gPCBJLmxlbmd0aDsgKytuKSBpZiAoSVtuXSAhPT0gdm9pZCAwKSByZXR1cm4gSVtuXTsKICAgICAgcmV0dXJuIG51bGw7CiAgICB9LCBhdC5wdXNoKHsgQmE6IGZ1bmN0aW9uKCkgewogICAgICBPdCgpOwogICAgfSB9KTsKICAgIHZhciBzZSA9IHsKICAgICAgejogZnVuY3Rpb24obikgewogICAgICAgIHJldHVybiBUbihuICsgMTYpICsgMTY7CiAgICAgIH0sCiAgICAgIHU6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICB0aHJvdyBuZXcgSnQobikuRmEodCwgciksICJ1bmNhdWdodF9leGNlcHRpb24iIGluIG1uID8gbW4ueGErKyA6IG1uLnhhID0gMSwgbjsKICAgICAgfSwKICAgICAgdzogZnVuY3Rpb24obiwgdCwgciwgaSwgYSkgewogICAgICAgIHZhciBvID0gSW4ocik7CiAgICAgICAgdCA9IFModCksIFUobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIHJldHVybiAhIWM7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oYywgbCkgewogICAgICAgICAgcmV0dXJuIGwgPyBpIDogYTsKICAgICAgICB9LCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIGlmIChyID09PSAxKSB2YXIgbCA9ICQ7CiAgICAgICAgICBlbHNlIGlmIChyID09PSAyKSBsID0gWDsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDQpIGwgPSBiOwogICAgICAgICAgZWxzZSB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGJvb2xlYW4gdHlwZSBzaXplOiAiICsgdCk7CiAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUobFtjID4+IG9dKTsKICAgICAgICB9LCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgaDogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgbywgYywgbCwgcCwgZiwgZCwgaCwgdykgewogICAgICAgIGQgPSBTKGQpLCBvID0gVihhLCBvKSwgbCAmJiAobCA9IFYoYywgbCkpLCBmICYmIChmID0gVihwLCBmKSksIHcgPSBWKGgsIHcpOwogICAgICAgIHZhciBUID0gTG4oZCk7CiAgICAgICAgeXQoVCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBkbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbaV0pOwogICAgICAgIH0pLCB0bihbbiwgdCwgcl0sIGkgPyBbaV0gOiBbXSwgZnVuY3Rpb24oeSkgewogICAgICAgICAgaWYgKHkgPSB5WzBdLCBpKQogICAgICAgICAgICB2YXIgTiA9IHkuZWEsIE8gPSBOLm1hOwogICAgICAgICAgZWxzZSBPID0gRC5wcm90b3R5cGU7CiAgICAgICAgICB5ID0gam4oVCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykgIT09IGspIHRocm93IG5ldyBubigiVXNlICduZXcnIHRvIGNvbnN0cnVjdCAiICsgZCk7CiAgICAgICAgICAgIGlmIChqLmxhID09PSB2b2lkIDApIHRocm93IG5ldyBubihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIgU3QgPSBqLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoU3QgPT09IHZvaWQgMCkgdGhyb3cgbmV3IG5uKCJUcmllZCB0byBpbnZva2UgY3RvciBvZiAiICsgZCArICIgd2l0aCBpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0ZWQgKCIgKyBPYmplY3Qua2V5cyhqLmxhKS50b1N0cmluZygpICsgIikgcGFyYW1ldGVycyBpbnN0ZWFkISIpOwogICAgICAgICAgICByZXR1cm4gU3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICAgIH0pOwogICAgICAgICAgdmFyIGsgPSBPYmplY3QuY3JlYXRlKE8sIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHkgfSB9KTsKICAgICAgICAgIHkucHJvdG90eXBlID0gazsKICAgICAgICAgIHZhciBqID0gbmV3IFh0KGQsIHksIGssIHcsIE4sIG8sIGwsIGYpOwogICAgICAgICAgTiA9IG5ldyB6KGQsIGosICEwLCAhMSksIE8gPSBuZXcgeihkICsgIioiLCBqLCAhMSwgITEpOwogICAgICAgICAgdmFyIGhuID0gbmV3IHooZCArICIgY29uc3QqIiwgaiwgITEsICEwKTsKICAgICAgICAgIHJldHVybiBwdFtuXSA9IHsgcG9pbnRlclR5cGU6IE8sIHphOiBobiB9LCB2dChULCB5KSwgW04sIE8sIGhuXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgZzogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgbykgewogICAgICAgIFFuKDAgPCB0KTsKICAgICAgICB2YXIgYyA9IEF0KHQsIHIpOwogICAgICAgIGEgPSBWKGksIGEpOwogICAgICAgIHZhciBsID0gW29dLCBwID0gW107CiAgICAgICAgdG4oW10sIFtuXSwgZnVuY3Rpb24oZikgewogICAgICAgICAgZiA9IGZbMF07CiAgICAgICAgICB2YXIgZCA9ICJjb25zdHJ1Y3RvciAiICsgZi5uYW1lOwogICAgICAgICAgaWYgKGYuZWEubGEgPT09IHZvaWQgMCAmJiAoZi5lYS5sYSA9IFtdKSwgZi5lYS5sYVt0IC0gMV0gIT09IHZvaWQgMCkgdGhyb3cgbmV3IG5uKCJDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgY29uc3RydWN0b3JzIHdpdGggaWRlbnRpY2FsIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgKHQgLSAxKSArICIpIGZvciBjbGFzcyAnIiArIGYubmFtZSArICInISBPdmVybG9hZCByZXNvbHV0aW9uIGlzIGN1cnJlbnRseSBvbmx5IHBlcmZvcm1lZCB1c2luZyB0aGUgcGFyYW1ldGVyIGNvdW50LCBub3QgYWN0dWFsIHR5cGUgaW5mbyEiKTsKICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZi5uYW1lICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGMpOwogICAgICAgICAgfSwgdG4oW10sIGMsIGZ1bmN0aW9uKGgpIHsKICAgICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCAhPT0gdCAtIDEgJiYgdihkICsgIiBjYWxsZWQgd2l0aCAiICsgYXJndW1lbnRzLmxlbmd0aCArICIgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKHQgLSAxKSksIHAubGVuZ3RoID0gMCwgbC5sZW5ndGggPSB0OwogICAgICAgICAgICAgIGZvciAodmFyIHcgPSAxOyB3IDwgdDsgKyt3KSBsW3ddID0gaFt3XS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgcCwKICAgICAgICAgICAgICAgIGFyZ3VtZW50c1t3IC0gMV0KICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiB3ID0gYS5hcHBseShudWxsLCBsKSwgQ24ocCksIGhbMF0uZnJvbVdpcmVUeXBlKHcpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgbywgYywgbCwgcCwgZikgewogICAgICAgIHQgPSBTKHQpLCBhID0gVihpLCBhKSwgdG4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgaCA9IGQubmFtZSArICIuIiArIHQsIHcgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgYWNjZXNzICIgKyBoICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBjXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHAgPyB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgY10pOwogICAgICAgICAgfSA6IHcuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYoaCArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCB3KSwgdG4oW10sIHAgPyBbciwgY10gOiBbcl0sIGZ1bmN0aW9uKFQpIHsKICAgICAgICAgICAgdmFyIHkgPSBUWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciBrID0gX3QodGhpcywgZCwgaCArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIHkuZnJvbVdpcmVUeXBlKGEobywgaykpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAocCkgewogICAgICAgICAgICAgIHAgPSBWKGwsIHApOwogICAgICAgICAgICAgIHZhciBPID0gVFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKGspIHsKICAgICAgICAgICAgICAgIHZhciBqID0gX3QodGhpcywgZCwgaCArICIgc2V0dGVyIiksIGhuID0gW107CiAgICAgICAgICAgICAgICBwKGYsIGosIE8udG9XaXJlVHlwZShobiwgaykpLCBDbihobik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBTKHQpLCBVKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IElbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gRG4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIGVuKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IEluKHIpLCB0ID0gUyh0KSwgVShuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBhICE9ICJudW1iZXIiICYmIHR5cGVvZiBhICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBybihhKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgICByZXR1cm4gYTsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiByZSh0LCByKSwKICAgICAgICAgIGthOiBudWxsCiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGM6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEsIG8pIHsKICAgICAgICB2YXIgYyA9IEF0KHQsIHIpOwogICAgICAgIG4gPSBTKG4pLCBhID0gVihpLCBhKSwgeXQobiwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBkbigiQ2Fubm90IGNhbGwgIiArIG4gKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgYyk7CiAgICAgICAgfSwgdCAtIDEpLCB0bihbXSwgYywgZnVuY3Rpb24obCkgewogICAgICAgICAgdmFyIHAgPSBuLCBmID0gbjsKICAgICAgICAgIGwgPSBbbFswXSwgbnVsbF0uY29uY2F0KGwuc2xpY2UoMSkpOwogICAgICAgICAgdmFyIGQgPSBhLCBoID0gbC5sZW5ndGg7CiAgICAgICAgICAyID4gaCAmJiB2KCJhcmdUeXBlcyBhcnJheSBzaXplIG1pc21hdGNoISBNdXN0IGF0IGxlYXN0IGdldCByZXR1cm4gdmFsdWUgYW5kICd0aGlzJyB0eXBlcyEiKTsKICAgICAgICAgIGZvciAodmFyIHcgPSBsWzFdICE9PSBudWxsICYmICExLCBUID0gITEsIHkgPSAxOyB5IDwgbC5sZW5ndGg7ICsreSkgaWYgKGxbeV0gIT09IG51bGwgJiYgbFt5XS5rYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgICAgIFQgPSAhMDsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICB9CiAgICAgICAgICB2YXIgTiA9IGxbMF0ubmFtZSAhPT0gInZvaWQiLCBPID0gIiIsIGsgPSAiIjsKICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCBoIC0gMjsgKyt5KSBPICs9ICh5ICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgeSwgayArPSAoeSAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHkgKyAiV2lyZWQiOwogICAgICAgICAgZiA9ICJyZXR1cm4gZnVuY3Rpb24gIiArIExuKGYpICsgIigiICsgTyArIGApIHsKaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IGAgKyAoaCAtIDIpICsgYCkgewp0aHJvd0JpbmRpbmdFcnJvcignZnVuY3Rpb24gYCArIGYgKyAiIGNhbGxlZCB3aXRoICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAoaCAtIDIpICsgYCBhcmdzIScpOwp9CmAsIFQgJiYgKGYgKz0gYHZhciBkZXN0cnVjdG9ycyA9IFtdOwpgKTsKICAgICAgICAgIHZhciBqID0gVCA/ICJkZXN0cnVjdG9ycyIgOiAibnVsbCI7CiAgICAgICAgICBmb3IgKE8gPSAidGhyb3dCaW5kaW5nRXJyb3IgaW52b2tlciBmbiBydW5EZXN0cnVjdG9ycyByZXRUeXBlIGNsYXNzUGFyYW0iLnNwbGl0KCIgIiksIGQgPSBbdiwgZCwgbywgQ24sIGxbMF0sIGxbMV1dLCB3ICYmIChmICs9ICJ2YXIgdGhpc1dpcmVkID0gY2xhc3NQYXJhbS50b1dpcmVUeXBlKCIgKyBqICsgYCwgdGhpcyk7CmApLCB5ID0gMDsgeSA8IGggLSAyOyArK3kpIGYgKz0gInZhciBhcmciICsgeSArICJXaXJlZCA9IGFyZ1R5cGUiICsgeSArICIudG9XaXJlVHlwZSgiICsgaiArICIsIGFyZyIgKyB5ICsgIik7IC8vICIgKyBsW3kgKyAyXS5uYW1lICsgYApgLCBPLnB1c2goImFyZ1R5cGUiICsgeSksIGQucHVzaChsW3kgKyAyXSk7CiAgICAgICAgICBpZiAodyAmJiAoayA9ICJ0aGlzV2lyZWQiICsgKDAgPCBrLmxlbmd0aCA/ICIsICIgOiAiIikgKyBrKSwgZiArPSAoTiA/ICJ2YXIgcnYgPSAiIDogIiIpICsgImludm9rZXIoZm4iICsgKDAgPCBrLmxlbmd0aCA/ICIsICIgOiAiIikgKyBrICsgYCk7CmAsIFQpIGYgKz0gYHJ1bkRlc3RydWN0b3JzKGRlc3RydWN0b3JzKTsKYDsKICAgICAgICAgIGVsc2UgZm9yICh5ID0gdyA/IDEgOiAyOyB5IDwgbC5sZW5ndGg7ICsreSkgaCA9IHkgPT09IDEgPyAidGhpc1dpcmVkIiA6ICJhcmciICsgKHkgLSAyKSArICJXaXJlZCIsIGxbeV0ua2EgIT09IG51bGwgJiYgKGYgKz0gaCArICJfZHRvcigiICsgaCArICIpOyAvLyAiICsgbFt5XS5uYW1lICsgYApgLCBPLnB1c2goaCArICJfZHRvciIpLCBkLnB1c2gobFt5XS5rYSkpOwogICAgICAgICAgcmV0dXJuIE4gJiYgKGYgKz0gYHZhciByZXQgPSByZXRUeXBlLmZyb21XaXJlVHlwZShydik7CnJldHVybiByZXQ7CmApLCBPLnB1c2goZiArIGB9CmApLCBsID0gaWUoTykuYXBwbHkobnVsbCwgZCksIHZ0KHAsIGwsIHQgLSAxKSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGU6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEpIHsKICAgICAgICBmdW5jdGlvbiBvKGYpIHsKICAgICAgICAgIHJldHVybiBmOwogICAgICAgIH0KICAgICAgICB0ID0gUyh0KSwgYSA9PT0gLTEgJiYgKGEgPSA0Mjk0OTY3Mjk1KTsKICAgICAgICB2YXIgYyA9IEluKHIpOwogICAgICAgIGlmIChpID09PSAwKSB7CiAgICAgICAgICB2YXIgbCA9IDMyIC0gOCAqIHI7CiAgICAgICAgICBvID0gZnVuY3Rpb24oZikgewogICAgICAgICAgICByZXR1cm4gZiA8PCBsID4+PiBsOwogICAgICAgICAgfTsKICAgICAgICB9CiAgICAgICAgdmFyIHAgPSB0LmluZGV4T2YoInVuc2lnbmVkIikgIT0gLTE7CiAgICAgICAgVShuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogbywgdG9XaXJlVHlwZTogZnVuY3Rpb24oZiwgZCkgewogICAgICAgICAgaWYgKHR5cGVvZiBkICE9ICJudW1iZXIiICYmIHR5cGVvZiBkICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBybihkKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgaWYgKGQgPCBpIHx8IGQgPiBhKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXNzaW5nIGEgbnVtYmVyICInICsgcm4oZCkgKyAnIiBmcm9tIEpTIHNpZGUgdG8gQy9DKysgc2lkZSB0byBhbiBhcmd1bWVudCBvZiB0eXBlICInICsgdCArICciLCB3aGljaCBpcyBvdXRzaWRlIHRoZSB2YWxpZCByYW5nZSBbJyArIGkgKyAiLCAiICsgYSArICJdISIpOwogICAgICAgICAgcmV0dXJuIHAgPyBkID4+PiAwIDogZCB8IDA7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBhZSh0LCBjLCBpICE9PSAwKSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGQ6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBmdW5jdGlvbiBpKG8pIHsKICAgICAgICAgIG8gPj49IDI7CiAgICAgICAgICB2YXIgYyA9IEg7CiAgICAgICAgICByZXR1cm4gbmV3IGEoUSwgY1tvICsgMV0sIGNbb10pOwogICAgICAgIH0KICAgICAgICB2YXIgYSA9IFtJbnQ4QXJyYXksIFVpbnQ4QXJyYXksIEludDE2QXJyYXksIFVpbnQxNkFycmF5LCBJbnQzMkFycmF5LCBVaW50MzJBcnJheSwgRmxvYXQzMkFycmF5LCBGbG9hdDY0QXJyYXldW3RdOwogICAgICAgIHIgPSBTKHIpLCBVKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBpLCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGkgfSwgeyBFYTogITAgfSk7CiAgICAgIH0sCiAgICAgIG46IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUyh0KTsKICAgICAgICB2YXIgciA9IHQgPT09ICJzdGQ6OnN0cmluZyI7CiAgICAgICAgVShuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHZhciBhID0gSFtpID4+IDJdOwogICAgICAgICAgICBpZiAocikgZm9yICh2YXIgbyA9IGkgKyA0LCBjID0gMDsgYyA8PSBhOyArK2MpIHsKICAgICAgICAgICAgICB2YXIgbCA9IGkgKyA0ICsgYzsKICAgICAgICAgICAgICBpZiAoYyA9PSBhIHx8IHhbbF0gPT0gMCkgewogICAgICAgICAgICAgICAgaWYgKG8pIHsKICAgICAgICAgICAgICAgICAgdmFyIHAgPSBvLCBmID0geCwgZCA9IHAgKyAobCAtIG8pOwogICAgICAgICAgICAgICAgICBmb3IgKG8gPSBwOyBmW29dICYmICEobyA+PSBkKTsgKSArK287CiAgICAgICAgICAgICAgICAgIGlmICgxNiA8IG8gLSBwICYmIGYuc3ViYXJyYXkgJiYgWG4pIHAgPSBYbi5kZWNvZGUoZi5zdWJhcnJheShwLCBvKSk7CiAgICAgICAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgICAgIGZvciAoZCA9ICIiOyBwIDwgbzsgKSB7CiAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IGZbcCsrXTsKICAgICAgICAgICAgICAgICAgICAgIGlmIChoICYgMTI4KSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ID0gZltwKytdICYgNjM7CiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoaCAmIDIyNCkgPT0gMTkyKSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGggJiAzMSkgPDwgNiB8IHcpOwogICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgVCA9IGZbcCsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICAgIGggPSAoaCAmIDI0MCkgPT0gMjI0ID8gKGggJiAxNSkgPDwgMTIgfCB3IDw8IDYgfCBUIDogKGggJiA3KSA8PCAxOCB8IHcgPDwgMTIgfCBUIDw8IDYgfCBmW3ArK10gJiA2MywgNjU1MzYgPiBoID8gZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGgpIDogKGggLT0gNjU1MzYsIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGggPj4gMTAsIDU2MzIwIHwgaCAmIDEwMjMpKTsKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgcCA9IGQ7CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0gZWxzZSBwID0gIiI7CiAgICAgICAgICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKSB2YXIgeSA9IHA7CiAgICAgICAgICAgICAgICBlbHNlIHkgKz0gIlwwIiwgeSArPSBwOwogICAgICAgICAgICAgICAgbyA9IGwgKyAxOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICBmb3IgKHkgPSBBcnJheShhKSwgYyA9IDA7IGMgPCBhOyArK2MpIHlbY10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHhbaSArIDQgKyBjXSk7CiAgICAgICAgICAgICAgeSA9IHkuam9pbigiIik7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIEIoaSksIHk7CiAgICAgICAgICB9LAogICAgICAgICAgdG9XaXJlVHlwZTogZnVuY3Rpb24oaSwgYSkgewogICAgICAgICAgICBhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgJiYgKGEgPSBuZXcgVWludDhBcnJheShhKSk7CiAgICAgICAgICAgIHZhciBvID0gdHlwZW9mIGEgPT0gInN0cmluZyI7CiAgICAgICAgICAgIG8gfHwgYSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgfHwgYSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5IHx8IGEgaW5zdGFuY2VvZiBJbnQ4QXJyYXkgfHwgdigiQ2Fubm90IHBhc3Mgbm9uLXN0cmluZyB0byBzdGQ6OnN0cmluZyIpOwogICAgICAgICAgICB2YXIgYyA9IChyICYmIG8gPyBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICBmb3IgKHZhciBmID0gMCwgZCA9IDA7IGQgPCBhLmxlbmd0aDsgKytkKSB7CiAgICAgICAgICAgICAgICB2YXIgaCA9IGEuY2hhckNvZGVBdChkKTsKICAgICAgICAgICAgICAgIDU1Mjk2IDw9IGggJiYgNTczNDMgPj0gaCAmJiAoaCA9IDY1NTM2ICsgKChoICYgMTAyMykgPDwgMTApIHwgYS5jaGFyQ29kZUF0KCsrZCkgJiAxMDIzKSwgMTI3ID49IGggPyArK2YgOiBmID0gMjA0NyA+PSBoID8gZiArIDIgOiA2NTUzNSA+PSBoID8gZiArIDMgOiBmICsgNDsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgcmV0dXJuIGY7CiAgICAgICAgICAgIH0gOiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICByZXR1cm4gYS5sZW5ndGg7CiAgICAgICAgICAgIH0pKCksIGwgPSBUbig0ICsgYyArIDEpOwogICAgICAgICAgICBpZiAoSFtsID4+IDJdID0gYywgciAmJiBvKSBIdChhLCBsICsgNCwgYyArIDEpOwogICAgICAgICAgICBlbHNlIGlmIChvKSBmb3IgKG8gPSAwOyBvIDwgYzsgKytvKSB7CiAgICAgICAgICAgICAgdmFyIHAgPSBhLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICAgICAgMjU1IDwgcCAmJiAoQihsKSwgdigiU3RyaW5nIGhhcyBVVEYtMTYgY29kZSB1bml0cyB0aGF0IGRvIG5vdCBmaXQgaW4gOCBiaXRzIikpLCB4W2wgKyA0ICsgb10gPSBwOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgZm9yIChvID0gMDsgbyA8IGM7ICsrbykgeFtsICsgNCArIG9dID0gYVtvXTsKICAgICAgICAgICAgcmV0dXJuIGkgIT09IG51bGwgJiYgaS5wdXNoKEIsIGwpLCBsOwogICAgICAgICAgfSwKICAgICAgICAgIGFyZ1BhY2tBZHZhbmNlOiA4LAogICAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IEFuLAogICAgICAgICAga2E6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgQihpKTsKICAgICAgICAgIH0KICAgICAgICB9KTsKICAgICAgfSwKICAgICAgajogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIGlmIChyID0gUyhyKSwgdCA9PT0gMikKICAgICAgICAgIHZhciBpID0gVXQsIGEgPSB6dCwgbyA9IEJ0LCBjID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHJldHVybiBwbjsKICAgICAgICAgIH0sIGwgPSAxOwogICAgICAgIGVsc2UgdCA9PT0gNCAmJiAoaSA9IER0LCBhID0gVnQsIG8gPSBHdCwgYyA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgcmV0dXJuIEg7CiAgICAgICAgfSwgbCA9IDIpOwogICAgICAgIFUobiwgeyBuYW1lOiByLCBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uKHApIHsKICAgICAgICAgIGZvciAodmFyIGYgPSBIW3AgPj4gMl0sIGQgPSBjKCksIGgsIHcgPSBwICsgNCwgVCA9IDA7IFQgPD0gZjsgKytUKSB7CiAgICAgICAgICAgIHZhciB5ID0gcCArIDQgKyBUICogdDsKICAgICAgICAgICAgKFQgPT0gZiB8fCBkW3kgPj4gbF0gPT0gMCkgJiYgKHcgPSBpKHcsIHkgLSB3KSwgaCA9PT0gdm9pZCAwID8gaCA9IHcgOiAoaCArPSAiXDAiLCBoICs9IHcpLCB3ID0geSArIHQpOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuIEIocCksIGg7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ocCwgZikgewogICAgICAgICAgdHlwZW9mIGYgIT0gInN0cmluZyIgJiYgdigiQ2Fubm90IHBhc3Mgbm9uLXN0cmluZyB0byBDKysgc3RyaW5nIHR5cGUgIiArIHIpOwogICAgICAgICAgdmFyIGQgPSBvKGYpLCBoID0gVG4oNCArIGQgKyB0KTsKICAgICAgICAgIHJldHVybiBIW2ggPj4gMl0gPSBkID4+IGwsIGEoZiwgaCArIDQsIGQgKyB0KSwgcCAhPT0gbnVsbCAmJiBwLnB1c2goQiwgaCksIGg7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwga2E6IGZ1bmN0aW9uKHApIHsKICAgICAgICAgIEIocCk7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgeDogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBTKHQpLCBVKG4sIHsgUWE6ICEwLCBuYW1lOiB0LCBhcmdQYWNrQWR2YW5jZTogMCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbigpIHsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbigpIHsKICAgICAgICB9IH0pOwogICAgICB9LAogICAgICBrOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgbiA9IFZuKG4pLCB0ID0gQ3QodCwgImVtdmFsOjphcyIpOwogICAgICAgIHZhciBpID0gW10sIGEgPSBlbihpKTsKICAgICAgICByZXR1cm4gYltyID4+IDJdID0gYSwgdC50b1dpcmVUeXBlKGksIG4pOwogICAgICB9LAogICAgICBpOiBEbiwKICAgICAgbDogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHJldHVybiBuID0gVm4obiksIHQgPSBWbih0KSwgZW4oblt0XSk7CiAgICAgIH0sCiAgICAgIHA6IGZ1bmN0aW9uKG4pIHsKICAgICAgICB2YXIgdCA9IG9lW25dOwogICAgICAgIHJldHVybiBlbih0ID09PSB2b2lkIDAgPyBTKG4pIDogdCk7CiAgICAgIH0sCiAgICAgIG86IGZ1bmN0aW9uKG4pIHsKICAgICAgICBDbihJW25dLnZhbHVlKSwgRG4obik7CiAgICAgIH0sCiAgICAgIHk6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IEN0KG4sICJfZW12YWxfdGFrZV92YWx1ZSIpLCBuID0gbi5yZWFkVmFsdWVGcm9tUG9pbnRlcih0KSwgZW4obik7CiAgICAgIH0sCiAgICAgIGY6IGZ1bmN0aW9uKCkgewogICAgICAgIHNuKCk7CiAgICAgIH0sCiAgICAgIHE6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICB4LmNvcHlXaXRoaW4obiwgdCwgdCArIHIpOwogICAgICB9LAogICAgICByOiBmdW5jdGlvbihuKSB7CiAgICAgICAgbiA+Pj49IDA7CiAgICAgICAgdmFyIHQgPSB4Lmxlbmd0aDsKICAgICAgICBpZiAoMjE0NzQ4MzY0OCA8IG4pIHJldHVybiAhMTsKICAgICAgICBmb3IgKHZhciByID0gMTsgNCA+PSByOyByICo9IDIpIHsKICAgICAgICAgIHZhciBpID0gdCAqICgxICsgMC4yIC8gcik7CiAgICAgICAgICBpID0gTWF0aC5taW4oaSwgbiArIDEwMDY2MzI5NiksIGkgPSBNYXRoLm1heCgxNjc3NzIxNiwgbiwgaSksIDAgPCBpICUgNjU1MzYgJiYgKGkgKz0gNjU1MzYgLSBpICUgNjU1MzYpOwogICAgICAgICAgbjogewogICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgIEcuZ3JvdyhNYXRoLm1pbigyMTQ3NDgzNjQ4LCBpKSAtIFEuYnl0ZUxlbmd0aCArIDY1NTM1ID4+PiAxNiksIGV0KEcuYnVmZmVyKTsKICAgICAgICAgICAgICB2YXIgYSA9IDE7CiAgICAgICAgICAgICAgYnJlYWsgbjsKICAgICAgICAgICAgfSBjYXRjaCB7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgYSA9IHZvaWQgMDsKICAgICAgICAgIH0KICAgICAgICAgIGlmIChhKSByZXR1cm4gITA7CiAgICAgICAgfQogICAgICAgIHJldHVybiAhMTsKICAgICAgfSwKICAgICAgczogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHZhciByID0gMDsKICAgICAgICByZXR1cm4gVHQoKS5mb3JFYWNoKGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgIHZhciBvID0gdCArIHI7CiAgICAgICAgICBmb3IgKGEgPSBiW24gKyA0ICogYSA+PiAyXSA9IG8sIG8gPSAwOyBvIDwgaS5sZW5ndGg7ICsrbykgJFthKysgPj4gMF0gPSBpLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICAkW2EgPj4gMF0gPSAwLCByICs9IGkubGVuZ3RoICsgMTsKICAgICAgICB9KSwgMDsKICAgICAgfSwKICAgICAgdDogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHZhciByID0gVHQoKTsKICAgICAgICBiW24gPj4gMl0gPSByLmxlbmd0aDsKICAgICAgICB2YXIgaSA9IDA7CiAgICAgICAgcmV0dXJuIHIuZm9yRWFjaChmdW5jdGlvbihhKSB7CiAgICAgICAgICBpICs9IGEubGVuZ3RoICsgMTsKICAgICAgICB9KSwgYlt0ID4+IDJdID0gaSwgMDsKICAgICAgfSwKICAgICAgYTogRwogICAgfTsKICAgIChmdW5jdGlvbigpIHsKICAgICAgZnVuY3Rpb24gbihvKSB7CiAgICAgICAgbyA9IG8uZXhwb3J0cywgbyA9IE10KG8pLCBlLmFzbSA9IG8sIFktLSwgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzICYmIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyhZKSwgWSA9PSAwICYmIG9uICYmIChvID0gb24sIG9uID0gbnVsbCwgbygpKTsKICAgICAgfQogICAgICBmdW5jdGlvbiB0KG8pIHsKICAgICAgICBuKG8uaW5zdGFuY2UpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHIobykgewogICAgICAgIHJldHVybiBadCgpLnRoZW4oZnVuY3Rpb24oYykgewogICAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGMsIGkpOwogICAgICAgIH0pLnRoZW4obywgZnVuY3Rpb24oYykgewogICAgICAgICAgUCgiZmFpbGVkIHRvIGFzeW5jaHJvbm91c2x5IHByZXBhcmUgd2FzbTogIiArIGMpLCBzbihjKTsKICAgICAgICB9KTsKICAgICAgfQogICAgICB2YXIgaSA9IHsgYTogc2UgfTsKICAgICAgaWYgKFkrKywgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzICYmIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyhZKSwgZS5pbnN0YW50aWF0ZVdhc20pIHRyeSB7CiAgICAgICAgdmFyIGEgPSBlLmluc3RhbnRpYXRlV2FzbShpLCBuKTsKICAgICAgICByZXR1cm4gYSA9IE10KGEpOwogICAgICB9IGNhdGNoIChvKSB7CiAgICAgICAgcmV0dXJuIFAoIk1vZHVsZS5pbnN0YW50aWF0ZVdhc20gY2FsbGJhY2sgZmFpbGVkIHdpdGggZXJyb3I6ICIgKyBvKSwgITE7CiAgICAgIH0KICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgewogICAgICAgIGlmIChMIHx8IHR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyAhPSAiZnVuY3Rpb24iIHx8IHN0KCkgfHwgeG4oImZpbGU6Ly8iKSB8fCB0eXBlb2YgZmV0Y2ggIT0gImZ1bmN0aW9uIikgcmV0dXJuIHIodCk7CiAgICAgICAgZmV0Y2goWiwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG8pIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhvLCBpKS50aGVuKHQsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgICAgcmV0dXJuIFAoIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAiICsgYyksIFAoImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uIiksIHIodCk7CiAgICAgICAgICB9KTsKICAgICAgICB9KTsKICAgICAgfSgpLCB7fTsKICAgIH0pKCk7CiAgICB2YXIgT3QgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKE90ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBlLmFzbS5CKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgVG4gPSBlLl9tYWxsb2MgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChUbiA9IGUuX21hbGxvYyA9IGUuYXNtLkMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBCID0gZS5fZnJlZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKEIgPSBlLl9mcmVlID0gZS5hc20uRCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGUuYXNtLkUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZS5hc20uRikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paSA9IGUuYXNtLkcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmkgPSBlLmFzbS5IKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2kgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaSA9IGUuYXNtLkkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaSA9IGUuYXNtLkopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpID0gZS5hc20uSykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9maWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfZmlpID0gZS5hc20uTCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlmID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWYgPSBlLmFzbS5NKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpID0gZS5hc20uTikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWkgPSBlLmFzbS5PKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWkgPSBlLmFzbS5QKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWkgPSBlLmFzbS5RKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaWlpID0gZS5hc20uUikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaSA9IGUuYXNtLlMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGUuYXNtLlQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBlLmFzbS5VKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZS5hc20uVikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBlLmFzbS5XKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWkgPSBlLmFzbS5YKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaSA9IGUuYXNtLlkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWkgPSBlLmFzbS5aKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaSA9IGUuYXNtLl8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBlLmFzbS4kKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGUuYXNtLmFhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZS5hc20uYmEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZS5hc20uY2EpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgdmFyIFBuOwogICAgb24gPSBmdW5jdGlvbiBuKCkgewogICAgICBQbiB8fCAkbigpLCBQbiB8fCAob24gPSBuKTsKICAgIH07CiAgICBmdW5jdGlvbiAkbigpIHsKICAgICAgZnVuY3Rpb24gbigpIHsKICAgICAgICBpZiAoIVBuICYmIChQbiA9ICEwLCBlLmNhbGxlZFJ1biA9ICEwLCAhUm4pKSB7CiAgICAgICAgICBpZiAoeW4oYXQpLCB5bigkdCksIG0oZSksIGUub25SdW50aW1lSW5pdGlhbGl6ZWQgJiYgZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpLCBlLnBvc3RSdW4pIGZvciAodHlwZW9mIGUucG9zdFJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnBvc3RSdW4gPSBbZS5wb3N0UnVuXSk7IGUucG9zdFJ1bi5sZW5ndGg7ICkgewogICAgICAgICAgICB2YXIgdCA9IGUucG9zdFJ1bi5zaGlmdCgpOwogICAgICAgICAgICBvdC51bnNoaWZ0KHQpOwogICAgICAgICAgfQogICAgICAgICAgeW4ob3QpOwogICAgICAgIH0KICAgICAgfQogICAgICBpZiAoISgwIDwgWSkpIHsKICAgICAgICBpZiAoZS5wcmVSdW4pIGZvciAodHlwZW9mIGUucHJlUnVuID09ICJmdW5jdGlvbiIgJiYgKGUucHJlUnVuID0gW2UucHJlUnVuXSk7IGUucHJlUnVuLmxlbmd0aDsgKSBZdCgpOwogICAgICAgIHluKGl0KSwgMCA8IFkgfHwgKGUuc2V0U3RhdHVzID8gKGUuc2V0U3RhdHVzKCJSdW5uaW5nLi4uIiksIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgICBlLnNldFN0YXR1cygiIik7CiAgICAgICAgICB9LCAxKSwgbigpOwogICAgICAgIH0sIDEpKSA6IG4oKSk7CiAgICAgIH0KICAgIH0KICAgIGlmIChlLnJ1biA9ICRuLCBlLnByZUluaXQpIGZvciAodHlwZW9mIGUucHJlSW5pdCA9PSAiZnVuY3Rpb24iICYmIChlLnByZUluaXQgPSBbZS5wcmVJbml0XSk7IDAgPCBlLnByZUluaXQubGVuZ3RoOyApIGUucHJlSW5pdC5wb3AoKSgpOwogICAgcmV0dXJuICRuKCksIHUucmVhZHk7CiAgfTsKfSgpOwpjbGFzcyBwZSB7CiAgY29uc3RydWN0b3IoKSB7CiAgICBZbih0aGlzLCAic2FtV2FzbU1vZHVsZSIpOwogIH0KICBnZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBlKSB7CiAgICByZXR1cm4gewogICAgICBsb2NhdGVGaWxlOiAobSkgPT4gbmV3IFVSTChlIHx8IG0sIHUpLmhyZWYKICAgIH07CiAgfQogIGFzeW5jIGhhbmRsZU1pc3NpbmdPckludmFsaWRTYW1Nb2R1bGUodSwgZSkgewogICAgdHJ5IHsKICAgICAgY29uc3QgbSA9IGF3YWl0IGZldGNoKHUpOwogICAgICBpZiAoIW0ub2spCiAgICAgICAgdGhyb3cgbmV3IEYoCiAgICAgICAgICBgVGhlIHBhdGggdG8gJHtlfSBpcyBpbmNvcnJlY3Qgb3IgdGhlIG1vZHVsZSBpcyBtaXNzaW5nLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgICBjb25zdCBnID0gYXdhaXQgbS5hcnJheUJ1ZmZlcigpOwogICAgICBpZiAoIVdlYkFzc2VtYmx5LnZhbGlkYXRlKGcpKQogICAgICAgIHRocm93IG5ldyBGKAogICAgICAgICAgYFRoZSBwcm92aWRlZCAke2V9IGlzIG5vdCBhIHZhbGlkIFdBU00gbW9kdWxlLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgfSBjYXRjaCAobSkgewogICAgICBpZiAobSBpbnN0YW5jZW9mIEYpCiAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcigKICAgICAgICAgICJZb3UgY2FuIGZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG8gaG9zdCB3YXNtIGZpbGVzIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVycy5pbm5vdmF0cmljcy5jb20vZGlnaXRhbC1vbmJvYXJkaW5nL3RlY2huaWNhbC9yZW1vdGUvZG90LXdlYi1kb2N1bWVudC9sYXRlc3QvZG9jdW1lbnRhdGlvbi8jX2hvc3Rpbmdfc2FtX3dhc20iCiAgICAgICAgKSwgbTsKICAgIH0KICB9CiAgYXN5bmMgZ2V0V2FzbUZpbGVOYW1lKCkgewogICAgcmV0dXJuIGF3YWl0IGNlKCkgPyBrdC5zaW1kIDoga3Quc2FtOwogIH0KICBhc3luYyBpbml0U2FtTW9kdWxlKHUsIGUgPSAiL3dhc20iKSB7CiAgICBpZiAodGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICByZXR1cm47CiAgICBjb25zdCBtID0gYXdhaXQgdGhpcy5nZXRXYXNtRmlsZU5hbWUoKSwgZyA9IGAke2V9LyR7bX1gOwogICAgdHJ5IHsKICAgICAgdGhpcy5zYW1XYXNtTW9kdWxlID0gYXdhaXQgaGUodGhpcy5nZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBnKSk7CiAgICB9IGNhdGNoIHsKICAgICAgdGhyb3cgYXdhaXQgdGhpcy5oYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKGcsIG0pLCBuZXcgRigiQ291bGQgbm90IGluaXQgZGV0ZWN0b3IuIik7CiAgICB9CiAgfQogIGFzeW5jIGdldFNhbVZlcnNpb24oKSB7CiAgICB2YXIgZTsKICAgIGNvbnN0IHUgPSBhd2FpdCAoKGUgPSB0aGlzLnNhbVdhc21Nb2R1bGUpID09IG51bGwgPyB2b2lkIDAgOiBlLmdldEluZm9TdHJpbmcoKSk7CiAgICByZXR1cm4gdSA9PSBudWxsID8gdm9pZCAwIDogdS50cmltKCk7CiAgfQogIC8qCiAgICogSW4gVFMgNS4yLjAgd2FzIGFkZGVkIHNwZWNpYWwga2V5d29yZCAidXNpbmciIHdoaWNoIGNvdWxkIGJlIHBlcmZlY3QgZm9yIHRoaXMgY2FzZS4KICAgKiBVbmZvcnR1bmF0ZWx5LCB2aXRlIHByZWFjdCBwbHVnaW4gZG9lcyBub3Qgc3VwcG9ydCB0aGlzIHZlcnNpb24gb2YgVFMgeWV0LgogICAqIENoZWNrIHBvc3NpYmlsaXR5IG9mIHVzaW5nICJ1c2luZyIga2V5d29yZCB3aGVuIHZpdGUgcHJlYWN0IHBsdWdpbiB1cGRhdGVzCiAgICovCiAgYWxsb2NhdGVNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBGKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICByZXR1cm4gdGhpcy5zYW1XYXNtTW9kdWxlLl9tYWxsb2ModSk7CiAgfQogIHJlbGVhc2VNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBGKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICB0aGlzLnNhbVdhc21Nb2R1bGUuX2ZyZWUodSk7CiAgfQogIHdyaXRlRGF0YVRvTWVtb3J5KHUsIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgRigiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLkhFQVBVOC5zZXQodSwgZSk7CiAgfQp9Ci8qKgogKiBAbGljZW5zZQogKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDCiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wCiAqLwpjb25zdCB4dCA9IFN5bWJvbCgiQ29tbGluay5wcm94eSIpLCB5ZSA9IFN5bWJvbCgiQ29tbGluay5lbmRwb2ludCIpLCBtZSA9IFN5bWJvbCgiQ29tbGluay5yZWxlYXNlUHJveHkiKSwgWm4gPSBTeW1ib2woIkNvbWxpbmsuZmluYWxpemVyIiksIE9uID0gU3ltYm9sKCJDb21saW5rLnRocm93biIpLCBGdCA9IChzKSA9PiB0eXBlb2YgcyA9PSAib2JqZWN0IiAmJiBzICE9PSBudWxsIHx8IHR5cGVvZiBzID09ICJmdW5jdGlvbiIsIHZlID0gewogIGNhbkhhbmRsZTogKHMpID0+IEZ0KHMpICYmIHNbeHRdLAogIHNlcmlhbGl6ZShzKSB7CiAgICBjb25zdCB7IHBvcnQxOiB1LCBwb3J0MjogZSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICByZXR1cm4gS24ocywgdSksIFtlLCBbZV1dOwogIH0sCiAgZGVzZXJpYWxpemUocykgewogICAgcmV0dXJuIHMuc3RhcnQoKSwgX2Uocyk7CiAgfQp9LCBnZSA9IHsKICBjYW5IYW5kbGU6IChzKSA9PiBGdChzKSAmJiBPbiBpbiBzLAogIHNlcmlhbGl6ZSh7IHZhbHVlOiBzIH0pIHsKICAgIGxldCB1OwogICAgcmV0dXJuIHMgaW5zdGFuY2VvZiBFcnJvciA/IHUgPSB7CiAgICAgIGlzRXJyb3I6ICEwLAogICAgICB2YWx1ZTogewogICAgICAgIG1lc3NhZ2U6IHMubWVzc2FnZSwKICAgICAgICBuYW1lOiBzLm5hbWUsCiAgICAgICAgc3RhY2s6IHMuc3RhY2sKICAgICAgfQogICAgfSA6IHUgPSB7IGlzRXJyb3I6ICExLCB2YWx1ZTogcyB9LCBbdSwgW11dOwogIH0sCiAgZGVzZXJpYWxpemUocykgewogICAgdGhyb3cgcy5pc0Vycm9yID8gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3Iocy52YWx1ZS5tZXNzYWdlKSwgcy52YWx1ZSkgOiBzLnZhbHVlOwogIH0KfSwgSXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbCiAgWyJwcm94eSIsIHZlXSwKICBbInRocm93IiwgZ2VdCl0pOwpmdW5jdGlvbiB3ZShzLCB1KSB7CiAgZm9yIChjb25zdCBlIG9mIHMpCiAgICBpZiAodSA9PT0gZSB8fCBlID09PSAiKiIgfHwgZSBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBlLnRlc3QodSkpCiAgICAgIHJldHVybiAhMDsKICByZXR1cm4gITE7Cn0KZnVuY3Rpb24gS24ocywgdSA9IGdsb2JhbFRoaXMsIGUgPSBbIioiXSkgewogIHUuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIG0oZykgewogICAgaWYgKCFnIHx8ICFnLmRhdGEpCiAgICAgIHJldHVybjsKICAgIGlmICghd2UoZSwgZy5vcmlnaW4pKSB7CiAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBvcmlnaW4gJyR7Zy5vcmlnaW59JyBmb3IgY29tbGluayBwcm94eWApOwogICAgICByZXR1cm47CiAgICB9CiAgICBjb25zdCB7IGlkOiBDLCB0eXBlOiBBLCBwYXRoOiBNIH0gPSBPYmplY3QuYXNzaWduKHsgcGF0aDogW10gfSwgZy5kYXRhKSwgVyA9IChnLmRhdGEuYXJndW1lbnRMaXN0IHx8IFtdKS5tYXAoSyk7CiAgICBsZXQgRTsKICAgIHRyeSB7CiAgICAgIGNvbnN0IF8gPSBNLnNsaWNlKDAsIC0xKS5yZWR1Y2UoKFAsIEwpID0+IFBbTF0sIHMpLCBSID0gTS5yZWR1Y2UoKFAsIEwpID0+IFBbTF0sIHMpOwogICAgICBzd2l0Y2ggKEEpIHsKICAgICAgICBjYXNlICJHRVQiOgogICAgICAgICAgRSA9IFI7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJTRVQiOgogICAgICAgICAgX1tNLnNsaWNlKC0xKVswXV0gPSBLKGcuZGF0YS52YWx1ZSksIEUgPSAhMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkFQUExZIjoKICAgICAgICAgIEUgPSBSLmFwcGx5KF8sIFcpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiQ09OU1RSVUNUIjoKICAgICAgICAgIHsKICAgICAgICAgICAgY29uc3QgUCA9IG5ldyBSKC4uLlcpOwogICAgICAgICAgICBFID0gTWUoUCk7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJFTkRQT0lOVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IHsgcG9ydDE6IFAsIHBvcnQyOiBMIH0gPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTsKICAgICAgICAgICAgS24ocywgTCksIEUgPSBQZShQLCBbUF0pOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiUkVMRUFTRSI6CiAgICAgICAgICBFID0gdm9pZCAwOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHJldHVybjsKICAgICAgfQogICAgfSBjYXRjaCAoXykgewogICAgICBFID0geyB2YWx1ZTogXywgW09uXTogMCB9OwogICAgfQogICAgUHJvbWlzZS5yZXNvbHZlKEUpLmNhdGNoKChfKSA9PiAoeyB2YWx1ZTogXywgW09uXTogMCB9KSkudGhlbigoXykgPT4gewogICAgICBjb25zdCBbUiwgUF0gPSBrbihfKTsKICAgICAgdS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFIpLCB7IGlkOiBDIH0pLCBQKSwgQSA9PT0gIlJFTEVBU0UiICYmICh1LnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBtKSwgTHQodSksIFpuIGluIHMgJiYgdHlwZW9mIHNbWm5dID09ICJmdW5jdGlvbiIgJiYgc1tabl0oKSk7CiAgICB9KS5jYXRjaCgoXykgPT4gewogICAgICBjb25zdCBbUiwgUF0gPSBrbih7CiAgICAgICAgdmFsdWU6IG5ldyBUeXBlRXJyb3IoIlVuc2VyaWFsaXphYmxlIHJldHVybiB2YWx1ZSIpLAogICAgICAgIFtPbl06IDAKICAgICAgfSk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBSKSwgeyBpZDogQyB9KSwgUCk7CiAgICB9KTsKICB9KSwgdS5zdGFydCAmJiB1LnN0YXJ0KCk7Cn0KZnVuY3Rpb24gQWUocykgewogIHJldHVybiBzLmNvbnN0cnVjdG9yLm5hbWUgPT09ICJNZXNzYWdlUG9ydCI7Cn0KZnVuY3Rpb24gTHQocykgewogIEFlKHMpICYmIHMuY2xvc2UoKTsKfQpmdW5jdGlvbiBfZShzLCB1KSB7CiAgcmV0dXJuIEpuKHMsIFtdLCB1KTsKfQpmdW5jdGlvbiBXbihzKSB7CiAgaWYgKHMpCiAgICB0aHJvdyBuZXcgRXJyb3IoIlByb3h5IGhhcyBiZWVuIHJlbGVhc2VkIGFuZCBpcyBub3QgdXNlYWJsZSIpOwp9CmZ1bmN0aW9uIGp0KHMpIHsKICByZXR1cm4gYW4ocywgewogICAgdHlwZTogIlJFTEVBU0UiCiAgfSkudGhlbigoKSA9PiB7CiAgICBMdChzKTsKICB9KTsKfQpjb25zdCBibiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLCBTbiA9ICJGaW5hbGl6YXRpb25SZWdpc3RyeSIgaW4gZ2xvYmFsVGhpcyAmJiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKHMpID0+IHsKICBjb25zdCB1ID0gKGJuLmdldChzKSB8fCAwKSAtIDE7CiAgYm4uc2V0KHMsIHUpLCB1ID09PSAwICYmIGp0KHMpOwp9KTsKZnVuY3Rpb24gQ2UocywgdSkgewogIGNvbnN0IGUgPSAoYm4uZ2V0KHUpIHx8IDApICsgMTsKICBibi5zZXQodSwgZSksIFNuICYmIFNuLnJlZ2lzdGVyKHMsIHUsIHMpOwp9CmZ1bmN0aW9uIEVlKHMpIHsKICBTbiAmJiBTbi51bnJlZ2lzdGVyKHMpOwp9CmZ1bmN0aW9uIEpuKHMsIHUgPSBbXSwgZSA9IGZ1bmN0aW9uKCkgewp9KSB7CiAgbGV0IG0gPSAhMTsKICBjb25zdCBnID0gbmV3IFByb3h5KGUsIHsKICAgIGdldChDLCBBKSB7CiAgICAgIGlmIChXbihtKSwgQSA9PT0gbWUpCiAgICAgICAgcmV0dXJuICgpID0+IHsKICAgICAgICAgIEVlKGcpLCBqdChzKSwgbSA9ICEwOwogICAgICAgIH07CiAgICAgIGlmIChBID09PSAidGhlbiIpIHsKICAgICAgICBpZiAodS5sZW5ndGggPT09IDApCiAgICAgICAgICByZXR1cm4geyB0aGVuOiAoKSA9PiBnIH07CiAgICAgICAgY29uc3QgTSA9IGFuKHMsIHsKICAgICAgICAgIHR5cGU6ICJHRVQiLAogICAgICAgICAgcGF0aDogdS5tYXAoKFcpID0+IFcudG9TdHJpbmcoKSkKICAgICAgICB9KS50aGVuKEspOwogICAgICAgIHJldHVybiBNLnRoZW4uYmluZChNKTsKICAgICAgfQogICAgICByZXR1cm4gSm4ocywgWy4uLnUsIEFdKTsKICAgIH0sCiAgICBzZXQoQywgQSwgTSkgewogICAgICBXbihtKTsKICAgICAgY29uc3QgW1csIEVdID0ga24oTSk7CiAgICAgIHJldHVybiBhbihzLCB7CiAgICAgICAgdHlwZTogIlNFVCIsCiAgICAgICAgcGF0aDogWy4uLnUsIEFdLm1hcCgoXykgPT4gXy50b1N0cmluZygpKSwKICAgICAgICB2YWx1ZTogVwogICAgICB9LCBFKS50aGVuKEspOwogICAgfSwKICAgIGFwcGx5KEMsIEEsIE0pIHsKICAgICAgV24obSk7CiAgICAgIGNvbnN0IFcgPSB1W3UubGVuZ3RoIC0gMV07CiAgICAgIGlmIChXID09PSB5ZSkKICAgICAgICByZXR1cm4gYW4ocywgewogICAgICAgICAgdHlwZTogIkVORFBPSU5UIgogICAgICAgIH0pLnRoZW4oSyk7CiAgICAgIGlmIChXID09PSAiYmluZCIpCiAgICAgICAgcmV0dXJuIEpuKHMsIHUuc2xpY2UoMCwgLTEpKTsKICAgICAgY29uc3QgW0UsIF9dID0gUnQoTSk7CiAgICAgIHJldHVybiBhbihzLCB7CiAgICAgICAgdHlwZTogIkFQUExZIiwKICAgICAgICBwYXRoOiB1Lm1hcCgoUikgPT4gUi50b1N0cmluZygpKSwKICAgICAgICBhcmd1bWVudExpc3Q6IEUKICAgICAgfSwgXykudGhlbihLKTsKICAgIH0sCiAgICBjb25zdHJ1Y3QoQywgQSkgewogICAgICBXbihtKTsKICAgICAgY29uc3QgW00sIFddID0gUnQoQSk7CiAgICAgIHJldHVybiBhbihzLCB7CiAgICAgICAgdHlwZTogIkNPTlNUUlVDVCIsCiAgICAgICAgcGF0aDogdS5tYXAoKEUpID0+IEUudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBNCiAgICAgIH0sIFcpLnRoZW4oSyk7CiAgICB9CiAgfSk7CiAgcmV0dXJuIENlKGcsIHMpLCBnOwp9CmZ1bmN0aW9uIFRlKHMpIHsKICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgcyk7Cn0KZnVuY3Rpb24gUnQocykgewogIGNvbnN0IHUgPSBzLm1hcChrbik7CiAgcmV0dXJuIFt1Lm1hcCgoZSkgPT4gZVswXSksIFRlKHUubWFwKChlKSA9PiBlWzFdKSldOwp9CmNvbnN0IE50ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7CmZ1bmN0aW9uIFBlKHMsIHUpIHsKICByZXR1cm4gTnQuc2V0KHMsIHUpLCBzOwp9CmZ1bmN0aW9uIE1lKHMpIHsKICByZXR1cm4gT2JqZWN0LmFzc2lnbihzLCB7IFt4dF06ICEwIH0pOwp9CmZ1bmN0aW9uIGtuKHMpIHsKICBmb3IgKGNvbnN0IFt1LCBlXSBvZiBJdCkKICAgIGlmIChlLmNhbkhhbmRsZShzKSkgewogICAgICBjb25zdCBbbSwgZ10gPSBlLnNlcmlhbGl6ZShzKTsKICAgICAgcmV0dXJuIFsKICAgICAgICB7CiAgICAgICAgICB0eXBlOiAiSEFORExFUiIsCiAgICAgICAgICBuYW1lOiB1LAogICAgICAgICAgdmFsdWU6IG0KICAgICAgICB9LAogICAgICAgIGcKICAgICAgXTsKICAgIH0KICByZXR1cm4gWwogICAgewogICAgICB0eXBlOiAiUkFXIiwKICAgICAgdmFsdWU6IHMKICAgIH0sCiAgICBOdC5nZXQocykgfHwgW10KICBdOwp9CmZ1bmN0aW9uIEsocykgewogIHN3aXRjaCAocy50eXBlKSB7CiAgICBjYXNlICJIQU5ETEVSIjoKICAgICAgcmV0dXJuIEl0LmdldChzLm5hbWUpLmRlc2VyaWFsaXplKHMudmFsdWUpOwogICAgY2FzZSAiUkFXIjoKICAgICAgcmV0dXJuIHMudmFsdWU7CiAgfQp9CmZ1bmN0aW9uIGFuKHMsIHUsIGUpIHsKICByZXR1cm4gbmV3IFByb21pc2UoKG0pID0+IHsKICAgIGNvbnN0IGcgPSBXZSgpOwogICAgcy5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgZnVuY3Rpb24gQyhBKSB7CiAgICAgICFBLmRhdGEgfHwgIUEuZGF0YS5pZCB8fCBBLmRhdGEuaWQgIT09IGcgfHwgKHMucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIEMpLCBtKEEuZGF0YSkpOwogICAgfSksIHMuc3RhcnQgJiYgcy5zdGFydCgpLCBzLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oeyBpZDogZyB9LCB1KSwgZSk7CiAgfSk7Cn0KZnVuY3Rpb24gV2UoKSB7CiAgcmV0dXJuIG5ldyBBcnJheSg0KS5maWxsKDApLm1hcCgoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikudG9TdHJpbmcoMTYpKS5qb2luKCItIik7Cn0KY2xhc3MgT2UgZXh0ZW5kcyBwZSB7CiAgcGFyc2VSYXdEYXRhKHUpIHsKICAgIGNvbnN0IHsgYnJpZ2h0bmVzczogZSwgaG90c3BvdHM6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIEMgPSB7CiAgICAgIGNvbmZpZGVuY2U6IHUuY29uZmlkZW5jZSAvIDFlMywKICAgICAgdG9wTGVmdDogewogICAgICAgIHg6IHUueDAsCiAgICAgICAgeTogdS55MAogICAgICB9LAogICAgICB0b3BSaWdodDogewogICAgICAgIHg6IHUueDEsCiAgICAgICAgeTogdS55MQogICAgICB9LAogICAgICBib3R0b21SaWdodDogewogICAgICAgIHg6IHUueDIsCiAgICAgICAgeTogdS55MgogICAgICB9LAogICAgICBib3R0b21MZWZ0OiB7CiAgICAgICAgeDogdS54MywKICAgICAgICB5OiB1LnkzCiAgICAgIH0sCiAgICAgIGJyaWdodG5lc3M6IGUgLyAxZTMsCiAgICAgIGhvdHNwb3RzOiBtIC8gMWUzLAogICAgICBzaGFycG5lc3M6IGcgLyAxZTMKICAgIH07CiAgICByZXR1cm4gewogICAgICAuLi5DLAogICAgICBzbWFsbGVzdEVkZ2U6IGRlKEMpCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QodSwgZSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBGKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBtID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpLCBnID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpOwogICAgdGhpcy53cml0ZURhdGFUb01lbW9yeSh1LCBtKSwgdGhpcy5zYW1XYXNtTW9kdWxlLmNvbnZlcnRUb1NhbUNvbG9ySW1hZ2UoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBtLAogICAgICBmZS5SR0JBLAogICAgICBnCiAgICApOwogICAgY29uc3QgQyA9IHRoaXMuc2FtV2FzbU1vZHVsZS5kZXRlY3REb2N1bWVudFdpdGhJbWFnZVBhcmFtZXRlcnMoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLAogICAgICAwLAogICAgICAvLyBwYXJhbVdpZHRoIHNob3VsZCBiZSAwIChkZWZhdWx0IHZhbHVlKQogICAgICAwLAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBkb2N1bWVudERldGVjdGlvbk9wdGlvbnMgLSBzcGVlZCBvcHRpb24gLSBzZXQgYXMgInN0YW5kYXJkIGZ1bGwgbWV0aG9kIgogICAgKTsKICAgIHJldHVybiB0aGlzLnJlbGVhc2VNZW1vcnkobSksIHRoaXMucmVsZWFzZU1lbW9yeShnKSwgdGhpcy5wYXJzZVJhd0RhdGEoQyk7CiAgfQp9CktuKE9lKTsK", cl = (x) => Uint8Array.from(atob(x), (o) => o.charCodeAt(0)), pa = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", cl(pc)], { type: "text/javascript;charset=utf-8" });
function gl(x) {
  let o;
  try {
    if (o = pa && (window.URL || window.webkitURL).createObjectURL(pa), !o) throw "";
    const t = new Worker(o, {
      type: "module",
      name: x == null ? void 0 : x.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(o);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + pc,
      {
        type: "module",
        name: x == null ? void 0 : x.name
      }
    );
  }
}
var O0, o0;
class dl {
  constructor(o) {
    Re(this, O0);
    Re(this, o0);
    ye(this, O0, o), ye(this, o0, /* @__PURE__ */ new Map());
  }
  validate() {
    z(this, O0).forEach((o) => {
      z(this, o0).set(o.name, o.evaluate());
    });
  }
  isValid() {
    return Array.from(z(this, o0).values()).every((o) => o);
  }
  get result() {
    return z(this, o0);
  }
  get validators() {
    return z(this, O0);
  }
}
O0 = new WeakMap(), o0 = new WeakMap();
var fn, r0;
class l0 {
  constructor(o, t) {
    Re(this, fn);
    Re(this, r0);
    ye(this, fn, o), ye(this, r0, t);
  }
  get threshold() {
    return z(this, r0);
  }
  get name() {
    return z(this, fn);
  }
  isValueBelowThreshold(o) {
    return o < z(this, r0);
  }
  isValueAboveThreshold(o) {
    return o > z(this, r0);
  }
}
fn = new WeakMap(), r0 = new WeakMap();
var Cn;
class ul extends l0 {
  constructor(t, e) {
    super("isNotDim", t);
    Re(this, Cn);
    ye(this, Cn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(z(this, Cn));
  }
}
Cn = new WeakMap();
var pn;
class ll extends l0 {
  constructor(t, e) {
    super("isNotSmall", t);
    Re(this, pn);
    ye(this, pn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(z(this, pn));
  }
}
pn = new WeakMap();
var hn;
class Il extends l0 {
  constructor(t, e) {
    super("isNotBright", t);
    Re(this, hn);
    ye(this, hn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(z(this, hn));
  }
}
hn = new WeakMap();
var mn;
class fl extends l0 {
  constructor(t, e) {
    super("isPresent", t);
    Re(this, mn);
    ye(this, mn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(z(this, mn));
  }
}
mn = new WeakMap();
var bn;
class Cl extends l0 {
  constructor(t, e) {
    super("isSharp", t);
    Re(this, bn);
    ye(this, bn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(z(this, bn));
  }
}
bn = new WeakMap();
var An;
class pl extends l0 {
  constructor(t, e) {
    super("noHotspots", t);
    Re(this, An);
    ye(this, An, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(z(this, An));
  }
}
An = new WeakMap();
var yn, Wn;
class hl extends l0 {
  constructor(t, e, n) {
    super("isNotOutOfBounds", t);
    Re(this, yn);
    Re(this, Wn);
    ye(this, yn, e), ye(this, Wn, n);
  }
  evaluate() {
    const t = sc(z(this, Wn), this.threshold), { bottomLeft: e, bottomRight: n, topLeft: r, topRight: i } = z(this, yn), a = {};
    return a.topLeft = r, a.topRight = i, a.bottomLeft = e, a.bottomRight = n, lu(a, t);
  }
}
yn = new WeakMap(), Wn = new WeakMap();
class ml {
  static getDocumentValidationInstance(o, t, e) {
    return new dl([new fl(o.confidenceThreshold, t.confidence), new Cl(o.sharpnessThreshold, t.sharpness), new ul(o.brightnessLowThreshold, t.brightness), new Il(o.brightnessHighThreshold, t.brightness), new pl(o.hotspotsScoreThreshold, t.hotspots), new hl(o.outOfBoundsThreshold, t, e), new ll(o.sizeSmallThreshold, t.smallestEdge)]);
  }
}
const Xx = class Xx extends Qu {
  constructor() {
    super(...arguments);
    M(this, "detector");
    M(this, "className", "DocumentController");
    M(this, "fallbackInstruction", At.DOCUMENT_NOT_PRESENT);
    M(this, "getInstructionCode", (t, e) => {
      var r;
      if (this.isInCandidateSelection) return At.CANDIDATE_SELECTION;
      if ((r = this.lastImage) != null && r.isValid && e) return At.CANDIDATE_SELECTION;
      if (this.lastImage && e) return this.lastImage.instructionCode;
      const [n] = this.getInstructionCodesForValidators(t);
      return n ?? this.fallbackInstruction;
    });
    M(this, "getInstructionCodesForValidators", (t) => {
      const e = [];
      return Array.from(t).forEach(([n, r]) => {
        !r && e.push(c1[n]);
      }), e;
    });
    M(this, "transformSmallestEdgeRelativeToDetectionFrameWidth", (t, e) => {
      const n = J1(t), r = n / e.width, i = { ...t };
      return i.smallestEdge = r, i;
    });
  }
  static async init() {
    const t = new gl(), e = Ic(t), n = new Xx(), r = await new e();
    this._instance = n, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  restart() {
    super.restart(), la(Wt.INSTRUCTION_CHANGED, this.fallbackInstruction, F1);
  }
  validateDetectedObject(t, e) {
    const n = ml.getDocumentValidationInstance(this.getThresholds(), t, e);
    return n.validate(), n;
  }
  async processImage({ image: t, timestamp: e }) {
    var A;
    const n = {};
    n.width = t.width, n.height = t.height;
    const r = n, i = jr(r), a = au(t, i), s = su(a), c = {};
    c.width = a.width, c.height = a.height;
    const u = c;
    let g = await this.detector.detect(s, u);
    g = Pu(r, g), g = this.transformSmallestEdgeRelativeToDetectionFrameWidth(g, u);
    const p = this.validateDetectedObject(g, r), { result: l } = p, C = this.getInstructionCode(l, p.isValid());
    if (l.get("isPresent")) {
      const d = {};
      d.image = s, d.timestamp = e, this.collectImagesForDuplicateDetection(d);
    }
    if (this.isInCandidateSelection) {
      if (this.bestImage && p.isValid() && this.isNewImageBetter(this.bestImage.detection, g)) {
        const d = { image: t, detection: Q0(g) };
        this.bestImage = d, this.candidateSelectionImages.push(d);
      }
    } else if ((A = this.lastImage) != null && A.isValid && p.isValid()) {
      const d = { image: t, detection: Q0(g) }, v = {};
      v.image = this.lastImage.image, v.detection = this.lastImage.detection;
      const G = v;
      this.isNewImageBetter(G.detection, d.detection) ? this.bestImage = d : this.bestImage = G, this.candidateSelectionImages.push(G, d), this.isInCandidateSelection = !0;
    } else p.isValid() ? this.lastImage = { instructionCode: C, isValid: !0, image: t, detection: Q0(g) } : this.lastImage = { instructionCode: C, isValid: !1, image: t, detection: Q0(g) };
    const m = { detectedDocument: Q0(g), instructionCode: C, isInCandidateSelection: this.isInCandidateSelection, invalidValidators: this.getInstructionCodesForValidators(l) };
    return this.detectionRecord.push(m.detectedDocument), la(Wt.INSTRUCTION_CHANGED, C), mu(Wt.DETECTED_DOCUMENT_CHANGED, m.detectedDocument, this.getThresholds().confidenceThreshold), m;
  }
};
M(Xx, "_instance");
let Ir = Xx;
const bl = (x, o) => {
  const { handleError: t } = Bn(), [e, n] = it();
  Oe(() => {
    (async () => {
      const a = await Ir.getInstance();
      try {
        const s = {};
        s.wasmDirectoryPath = o, s.thresholds = x, await a.init(s);
      } catch (s) {
        if (s instanceof Error) {
          t(re.fromError(s));
          return;
        }
      }
      n(a);
    })();
  }, [t, x, o]);
  const r = {};
  return r.controller = e, r;
};
var zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, hc = {}, ha = {}, Al = yl;
function yl(x, o) {
  for (var t = new Array(arguments.length - 1), e = 0, n = 2, r = !0; n < arguments.length; )
    t[e++] = arguments[n++];
  return new Promise(function(i, a) {
    t[e] = function(s) {
      if (r)
        if (r = !1, s)
          a(s);
        else {
          for (var c = new Array(arguments.length - 1), u = 0; u < c.length; )
            c[u++] = arguments[u];
          i.apply(null, c);
        }
    };
    try {
      x.apply(o || null, t);
    } catch (s) {
      r && (r = !1, a(s));
    }
  });
}
var mc = {};
(function(x) {
  var o = x;
  o.length = function(i) {
    var a = i.length;
    if (!a)
      return 0;
    for (var s = 0; --a % 4 > 1 && i.charAt(a) === "="; )
      ++s;
    return Math.ceil(i.length * 3) / 4 - s;
  };
  for (var t = new Array(64), e = new Array(123), n = 0; n < 64; )
    e[t[n] = n < 26 ? n + 65 : n < 52 ? n + 71 : n < 62 ? n - 4 : n - 59 | 43] = n++;
  o.encode = function(i, a, s) {
    for (var c = null, u = [], g = 0, p = 0, l; a < s; ) {
      var C = i[a++];
      switch (p) {
        case 0:
          u[g++] = t[C >> 2], l = (C & 3) << 4, p = 1;
          break;
        case 1:
          u[g++] = t[l | C >> 4], l = (C & 15) << 2, p = 2;
          break;
        case 2:
          u[g++] = t[l | C >> 6], u[g++] = t[C & 63], p = 0;
          break;
      }
      g > 8191 && ((c || (c = [])).push(String.fromCharCode.apply(String, u)), g = 0);
    }
    return p && (u[g++] = t[l], u[g++] = 61, p === 1 && (u[g++] = 61)), c ? (g && c.push(String.fromCharCode.apply(String, u.slice(0, g))), c.join("")) : String.fromCharCode.apply(String, u.slice(0, g));
  };
  var r = "invalid encoding";
  o.decode = function(i, a, s) {
    for (var c = s, u = 0, g, p = 0; p < i.length; ) {
      var l = i.charCodeAt(p++);
      if (l === 61 && u > 1)
        break;
      if ((l = e[l]) === void 0)
        throw Error(r);
      switch (u) {
        case 0:
          g = l, u = 1;
          break;
        case 1:
          a[s++] = g << 2 | (l & 48) >> 4, g = l, u = 2;
          break;
        case 2:
          a[s++] = (g & 15) << 4 | (l & 60) >> 2, g = l, u = 3;
          break;
        case 3:
          a[s++] = (g & 3) << 6 | l, u = 0;
          break;
      }
    }
    if (u === 1)
      throw Error(r);
    return s - c;
  }, o.test = function(i) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(i);
  };
})(mc);
var Wl = to;
function to() {
  this._listeners = {};
}
to.prototype.on = function(x, o, t) {
  return (this._listeners[x] || (this._listeners[x] = [])).push({
    fn: o,
    ctx: t || this
  }), this;
};
to.prototype.off = function(x, o) {
  if (x === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[x] = [];
  else
    for (var t = this._listeners[x], e = 0; e < t.length; )
      t[e].fn === o ? t.splice(e, 1) : ++e;
  return this;
};
to.prototype.emit = function(x) {
  var o = this._listeners[x];
  if (o) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < o.length; )
      o[e].fn.apply(o[e++].ctx, t);
  }
  return this;
};
var vl = ma(ma);
function ma(x) {
  return typeof Float32Array < "u" ? function() {
    var o = new Float32Array([-0]), t = new Uint8Array(o.buffer), e = t[3] === 128;
    function n(s, c, u) {
      o[0] = s, c[u] = t[0], c[u + 1] = t[1], c[u + 2] = t[2], c[u + 3] = t[3];
    }
    function r(s, c, u) {
      o[0] = s, c[u] = t[3], c[u + 1] = t[2], c[u + 2] = t[1], c[u + 3] = t[0];
    }
    x.writeFloatLE = e ? n : r, x.writeFloatBE = e ? r : n;
    function i(s, c) {
      return t[0] = s[c], t[1] = s[c + 1], t[2] = s[c + 2], t[3] = s[c + 3], o[0];
    }
    function a(s, c) {
      return t[3] = s[c], t[2] = s[c + 1], t[1] = s[c + 2], t[0] = s[c + 3], o[0];
    }
    x.readFloatLE = e ? i : a, x.readFloatBE = e ? a : i;
  }() : function() {
    function o(e, n, r, i) {
      var a = n < 0 ? 1 : 0;
      if (a && (n = -n), n === 0)
        e(1 / n > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), r, i);
      else if (isNaN(n))
        e(2143289344, r, i);
      else if (n > 34028234663852886e22)
        e((a << 31 | 2139095040) >>> 0, r, i);
      else if (n < 11754943508222875e-54)
        e((a << 31 | Math.round(n / 1401298464324817e-60)) >>> 0, r, i);
      else {
        var s = Math.floor(Math.log(n) / Math.LN2), c = Math.round(n * Math.pow(2, -s) * 8388608) & 8388607;
        e((a << 31 | s + 127 << 23 | c) >>> 0, r, i);
      }
    }
    x.writeFloatLE = o.bind(null, ba), x.writeFloatBE = o.bind(null, Aa);
    function t(e, n, r) {
      var i = e(n, r), a = (i >> 31) * 2 + 1, s = i >>> 23 & 255, c = i & 8388607;
      return s === 255 ? c ? NaN : a * (1 / 0) : s === 0 ? a * 1401298464324817e-60 * c : a * Math.pow(2, s - 150) * (c + 8388608);
    }
    x.readFloatLE = t.bind(null, ya), x.readFloatBE = t.bind(null, Wa);
  }(), typeof Float64Array < "u" ? function() {
    var o = new Float64Array([-0]), t = new Uint8Array(o.buffer), e = t[7] === 128;
    function n(s, c, u) {
      o[0] = s, c[u] = t[0], c[u + 1] = t[1], c[u + 2] = t[2], c[u + 3] = t[3], c[u + 4] = t[4], c[u + 5] = t[5], c[u + 6] = t[6], c[u + 7] = t[7];
    }
    function r(s, c, u) {
      o[0] = s, c[u] = t[7], c[u + 1] = t[6], c[u + 2] = t[5], c[u + 3] = t[4], c[u + 4] = t[3], c[u + 5] = t[2], c[u + 6] = t[1], c[u + 7] = t[0];
    }
    x.writeDoubleLE = e ? n : r, x.writeDoubleBE = e ? r : n;
    function i(s, c) {
      return t[0] = s[c], t[1] = s[c + 1], t[2] = s[c + 2], t[3] = s[c + 3], t[4] = s[c + 4], t[5] = s[c + 5], t[6] = s[c + 6], t[7] = s[c + 7], o[0];
    }
    function a(s, c) {
      return t[7] = s[c], t[6] = s[c + 1], t[5] = s[c + 2], t[4] = s[c + 3], t[3] = s[c + 4], t[2] = s[c + 5], t[1] = s[c + 6], t[0] = s[c + 7], o[0];
    }
    x.readDoubleLE = e ? i : a, x.readDoubleBE = e ? a : i;
  }() : function() {
    function o(e, n, r, i, a, s) {
      var c = i < 0 ? 1 : 0;
      if (c && (i = -i), i === 0)
        e(0, a, s + n), e(1 / i > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), a, s + r);
      else if (isNaN(i))
        e(0, a, s + n), e(2146959360, a, s + r);
      else if (i > 17976931348623157e292)
        e(0, a, s + n), e((c << 31 | 2146435072) >>> 0, a, s + r);
      else {
        var u;
        if (i < 22250738585072014e-324)
          u = i / 5e-324, e(u >>> 0, a, s + n), e((c << 31 | u / 4294967296) >>> 0, a, s + r);
        else {
          var g = Math.floor(Math.log(i) / Math.LN2);
          g === 1024 && (g = 1023), u = i * Math.pow(2, -g), e(u * 4503599627370496 >>> 0, a, s + n), e((c << 31 | g + 1023 << 20 | u * 1048576 & 1048575) >>> 0, a, s + r);
        }
      }
    }
    x.writeDoubleLE = o.bind(null, ba, 0, 4), x.writeDoubleBE = o.bind(null, Aa, 4, 0);
    function t(e, n, r, i, a) {
      var s = e(i, a + n), c = e(i, a + r), u = (c >> 31) * 2 + 1, g = c >>> 20 & 2047, p = 4294967296 * (c & 1048575) + s;
      return g === 2047 ? p ? NaN : u * (1 / 0) : g === 0 ? u * 5e-324 * p : u * Math.pow(2, g - 1075) * (p + 4503599627370496);
    }
    x.readDoubleLE = t.bind(null, ya, 0, 4), x.readDoubleBE = t.bind(null, Wa, 4, 0);
  }(), x;
}
function ba(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
function Aa(x, o, t) {
  o[t] = x >>> 24, o[t + 1] = x >>> 16 & 255, o[t + 2] = x >>> 8 & 255, o[t + 3] = x & 255;
}
function ya(x, o) {
  return (x[o] | x[o + 1] << 8 | x[o + 2] << 16 | x[o + 3] << 24) >>> 0;
}
function Wa(x, o) {
  return (x[o] << 24 | x[o + 1] << 16 | x[o + 2] << 8 | x[o + 3]) >>> 0;
}
function va(x) {
  throw new Error('Could not dynamically require "' + x + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var wl = Sl;
function Sl(x) {
  try {
    if (typeof va != "function")
      return null;
    var o = va(x);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var bc = {};
(function(x) {
  var o = x;
  o.length = function(t) {
    for (var e = 0, n = 0, r = 0; r < t.length; ++r)
      n = t.charCodeAt(r), n < 128 ? e += 1 : n < 2048 ? e += 2 : (n & 64512) === 55296 && (t.charCodeAt(r + 1) & 64512) === 56320 ? (++r, e += 4) : e += 3;
    return e;
  }, o.read = function(t, e, n) {
    var r = n - e;
    if (r < 1)
      return "";
    for (var i = null, a = [], s = 0, c; e < n; )
      c = t[e++], c < 128 ? a[s++] = c : c > 191 && c < 224 ? a[s++] = (c & 31) << 6 | t[e++] & 63 : c > 239 && c < 365 ? (c = ((c & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[s++] = 55296 + (c >> 10), a[s++] = 56320 + (c & 1023)) : a[s++] = (c & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, s > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, a)), s = 0);
    return i ? (s && i.push(String.fromCharCode.apply(String, a.slice(0, s))), i.join("")) : String.fromCharCode.apply(String, a.slice(0, s));
  }, o.write = function(t, e, n) {
    for (var r = n, i, a, s = 0; s < t.length; ++s)
      i = t.charCodeAt(s), i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = i & 63 | 128) : (i & 64512) === 55296 && ((a = t.charCodeAt(s + 1)) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (a & 1023), ++s, e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128) : (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128);
    return n - r;
  };
})(bc);
var Bl = kl;
function kl(x, o, t) {
  var e = t || 8192, n = e >>> 1, r = null, i = e;
  return function(a) {
    if (a < 1 || a > n)
      return x(a);
    i + a > e && (r = x(e), i = 0);
    var s = o.call(r, i, i += a);
    return i & 7 && (i = (i | 7) + 1), s;
  };
}
var Ho, wa;
function Gl() {
  if (wa)
    return Ho;
  wa = 1, Ho = o;
  var x = I0();
  function o(r, i) {
    this.lo = r >>> 0, this.hi = i >>> 0;
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
    var i = r < 0;
    i && (r = -r);
    var a = r >>> 0, s = (r - a) / 4294967296 >>> 0;
    return i && (s = ~s >>> 0, a = ~a >>> 0, ++a > 4294967295 && (a = 0, ++s > 4294967295 && (s = 0))), new o(a, s);
  }, o.from = function(r) {
    if (typeof r == "number")
      return o.fromNumber(r);
    if (x.isString(r))
      if (x.Long)
        r = x.Long.fromString(r);
      else
        return o.fromNumber(parseInt(r, 10));
    return r.low || r.high ? new o(r.low >>> 0, r.high >>> 0) : t;
  }, o.prototype.toNumber = function(r) {
    if (!r && this.hi >>> 31) {
      var i = ~this.lo + 1 >>> 0, a = ~this.hi >>> 0;
      return i || (a = a + 1 >>> 0), -(i + a * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, o.prototype.toLong = function(r) {
    return x.Long ? new x.Long(this.lo | 0, this.hi | 0, !!r) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!r };
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
    var r = this.lo, i = (this.lo >>> 28 | this.hi << 4) >>> 0, a = this.hi >>> 24;
    return a === 0 ? i === 0 ? r < 16384 ? r < 128 ? 1 : 2 : r < 2097152 ? 3 : 4 : i < 16384 ? i < 128 ? 5 : 6 : i < 2097152 ? 7 : 8 : a < 128 ? 9 : 10;
  }, Ho;
}
var Sa;
function I0() {
  return Sa || (Sa = 1, function(x) {
    var o = x;
    o.asPromise = Al, o.base64 = mc, o.EventEmitter = Wl, o.float = vl, o.inquire = wl, o.utf8 = bc, o.pool = Bl, o.LongBits = Gl(), o.isNode = !!(typeof zt < "u" && zt && zt.process && zt.process.versions && zt.process.versions.node), o.global = o.isNode && zt || typeof window < "u" && window || typeof self < "u" && self || zt, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
      var i = n[r];
      return i != null && n.hasOwnProperty(r) ? typeof i != "object" || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0 : !1;
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
      var i = o.LongBits.fromHash(n);
      return o.Long ? o.Long.fromBits(i.lo, i.hi, r) : i.toNumber(!!r);
    };
    function t(n, r, i) {
      for (var a = Object.keys(r), s = 0; s < a.length; ++s)
        (n[a[s]] === void 0 || !i) && (n[a[s]] = r[a[s]]);
      return n;
    }
    o.merge = t, o.lcFirst = function(n) {
      return n.charAt(0).toLowerCase() + n.substring(1);
    };
    function e(n) {
      function r(i, a) {
        if (!(this instanceof r))
          return new r(i, a);
        Object.defineProperty(this, "message", { get: function() {
          return i;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, r) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), a && t(this, a);
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
      for (var r = {}, i = 0; i < n.length; ++i)
        r[n[i]] = 1;
      return function() {
        for (var a = Object.keys(this), s = a.length - 1; s > -1; --s)
          if (r[a[s]] === 1 && this[a[s]] !== void 0 && this[a[s]] !== null)
            return a[s];
      };
    }, o.oneOfSetter = function(n) {
      return function(r) {
        for (var i = 0; i < n.length; ++i)
          n[i] !== r && delete this[n[i]];
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
      function(r, i) {
        return new n(r, i);
      }, o._Buffer_allocUnsafe = n.allocUnsafe || /* istanbul ignore next */
      function(r) {
        return new n(r);
      };
    };
  }(ha)), ha;
}
var Ac = _, at = I0(), fr, no = at.LongBits, Ba = at.base64, ka = at.utf8;
function Gn(x, o, t) {
  this.fn = x, this.len = o, this.next = void 0, this.val = t;
}
function Jr() {
}
function Ol(x) {
  this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
}
function _() {
  this.len = 0, this.head = new Gn(Jr, 0, 0), this.tail = this.head, this.states = null;
}
var yc = function() {
  return at.Buffer ? function() {
    return (_.create = function() {
      return new fr();
    })();
  } : function() {
    return new _();
  };
};
_.create = yc();
_.alloc = function(x) {
  return new at.Array(x);
};
at.Array !== Array && (_.alloc = at.pool(_.alloc, at.Array.prototype.subarray));
_.prototype._push = function(x, o, t) {
  return this.tail = this.tail.next = new Gn(x, o, t), this.len += o, this;
};
function Ur(x, o, t) {
  o[t] = x & 255;
}
function Zl(x, o, t) {
  for (; x > 127; )
    o[t++] = x & 127 | 128, x >>>= 7;
  o[t] = x;
}
function _r(x, o) {
  this.len = x, this.next = void 0, this.val = o;
}
_r.prototype = Object.create(Gn.prototype);
_r.prototype.fn = Zl;
_.prototype.uint32 = function(x) {
  return this.len += (this.tail = this.tail.next = new _r(
    (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
    x
  )).len, this;
};
_.prototype.int32 = function(x) {
  return x < 0 ? this._push(Qr, 10, no.fromNumber(x)) : this.uint32(x);
};
_.prototype.sint32 = function(x) {
  return this.uint32((x << 1 ^ x >> 31) >>> 0);
};
function Qr(x, o, t) {
  for (; x.hi; )
    o[t++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
  for (; x.lo > 127; )
    o[t++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
  o[t++] = x.lo;
}
_.prototype.uint64 = function(x) {
  var o = no.from(x);
  return this._push(Qr, o.length(), o);
};
_.prototype.int64 = _.prototype.uint64;
_.prototype.sint64 = function(x) {
  var o = no.from(x).zzEncode();
  return this._push(Qr, o.length(), o);
};
_.prototype.bool = function(x) {
  return this._push(Ur, 1, x ? 1 : 0);
};
function Cr(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
_.prototype.fixed32 = function(x) {
  return this._push(Cr, 4, x >>> 0);
};
_.prototype.sfixed32 = _.prototype.fixed32;
_.prototype.fixed64 = function(x) {
  var o = no.from(x);
  return this._push(Cr, 4, o.lo)._push(Cr, 4, o.hi);
};
_.prototype.sfixed64 = _.prototype.fixed64;
_.prototype.float = function(x) {
  return this._push(at.float.writeFloatLE, 4, x);
};
_.prototype.double = function(x) {
  return this._push(at.float.writeDoubleLE, 8, x);
};
var Hl = at.Array.prototype.set ? function(x, o, t) {
  o.set(x, t);
} : function(x, o, t) {
  for (var e = 0; e < x.length; ++e)
    o[t + e] = x[e];
};
_.prototype.bytes = function(x) {
  var o = x.length >>> 0;
  if (!o)
    return this._push(Ur, 1, 0);
  if (at.isString(x)) {
    var t = _.alloc(o = Ba.length(x));
    Ba.decode(x, t, 0), x = t;
  }
  return this.uint32(o)._push(Hl, o, x);
};
_.prototype.string = function(x) {
  var o = ka.length(x);
  return o ? this.uint32(o)._push(ka.write, o, x) : this._push(Ur, 1, 0);
};
_.prototype.fork = function() {
  return this.states = new Ol(this), this.head = this.tail = new Gn(Jr, 0, 0), this.len = 0, this;
};
_.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Gn(Jr, 0, 0), this.len = 0), this;
};
_.prototype.ldelim = function() {
  var x = this.head, o = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = x.next, this.tail = o, this.len += t), this;
};
_.prototype.finish = function() {
  for (var x = this.head.next, o = this.constructor.alloc(this.len), t = 0; x; )
    x.fn(x.val, o, t), t += x.len, x = x.next;
  return o;
};
_._configure = function(x) {
  fr = x, _.create = yc(), fr._configure();
};
var Rl = vt, Wc = Ac;
(vt.prototype = Object.create(Wc.prototype)).constructor = vt;
var Ft = I0();
function vt() {
  Wc.call(this);
}
vt._configure = function() {
  vt.alloc = Ft._Buffer_allocUnsafe, vt.writeBytesBuffer = Ft.Buffer && Ft.Buffer.prototype instanceof Uint8Array && Ft.Buffer.prototype.set.name === "set" ? function(x, o, t) {
    o.set(x, t);
  } : function(x, o, t) {
    if (x.copy)
      x.copy(o, t, 0, x.length);
    else
      for (var e = 0; e < x.length; )
        o[t++] = x[e++];
  };
};
vt.prototype.bytes = function(x) {
  Ft.isString(x) && (x = Ft._Buffer_from(x, "base64"));
  var o = x.length >>> 0;
  return this.uint32(o), o && this._push(vt.writeBytesBuffer, o, x), this;
};
function Kl(x, o, t) {
  x.length < 40 ? Ft.utf8.write(x, o, t) : o.utf8Write ? o.utf8Write(x, t) : o.write(x, t);
}
vt.prototype.string = function(x) {
  var o = Ft.Buffer.byteLength(x);
  return this.uint32(o), o && this._push(Kl, o, x), this;
};
vt._configure();
var vc = de, wt = I0(), pr, wc = wt.LongBits, Pl = wt.utf8;
function pt(x, o) {
  return RangeError("index out of range: " + x.pos + " + " + (o || 1) + " > " + x.len);
}
function de(x) {
  this.buf = x, this.pos = 0, this.len = x.length;
}
var Ga = typeof Uint8Array < "u" ? function(x) {
  if (x instanceof Uint8Array || Array.isArray(x))
    return new de(x);
  throw Error("illegal buffer");
} : function(x) {
  if (Array.isArray(x))
    return new de(x);
  throw Error("illegal buffer");
}, Sc = function() {
  return wt.Buffer ? function(x) {
    return (de.create = function(o) {
      return wt.Buffer.isBuffer(o) ? new pr(o) : Ga(o);
    })(x);
  } : Ga;
};
de.create = Sc();
de.prototype._slice = wt.Array.prototype.subarray || /* istanbul ignore next */
wt.Array.prototype.slice;
de.prototype.uint32 = /* @__PURE__ */ function() {
  var x = 4294967295;
  return function() {
    if (x = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (x = (x | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return x;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, pt(this, 10);
    return x;
  };
}();
de.prototype.int32 = function() {
  return this.uint32() | 0;
};
de.prototype.sint32 = function() {
  var x = this.uint32();
  return x >>> 1 ^ -(x & 1) | 0;
};
function Ro() {
  var x = new wc(0, 0), o = 0;
  if (this.len - this.pos > 4) {
    for (; o < 4; ++o)
      if (x.lo = (x.lo | (this.buf[this.pos] & 127) << o * 7) >>> 0, this.buf[this.pos++] < 128)
        return x;
    if (x.lo = (x.lo | (this.buf[this.pos] & 127) << 28) >>> 0, x.hi = (x.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return x;
    o = 0;
  } else {
    for (; o < 3; ++o) {
      if (this.pos >= this.len)
        throw pt(this);
      if (x.lo = (x.lo | (this.buf[this.pos] & 127) << o * 7) >>> 0, this.buf[this.pos++] < 128)
        return x;
    }
    return x.lo = (x.lo | (this.buf[this.pos++] & 127) << o * 7) >>> 0, x;
  }
  if (this.len - this.pos > 4) {
    for (; o < 5; ++o)
      if (x.hi = (x.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return x;
  } else
    for (; o < 5; ++o) {
      if (this.pos >= this.len)
        throw pt(this);
      if (x.hi = (x.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return x;
    }
  throw Error("invalid varint encoding");
}
de.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Lx(x, o) {
  return (x[o - 4] | x[o - 3] << 8 | x[o - 2] << 16 | x[o - 1] << 24) >>> 0;
}
de.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw pt(this, 4);
  return Lx(this.buf, this.pos += 4);
};
de.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw pt(this, 4);
  return Lx(this.buf, this.pos += 4) | 0;
};
function Oa() {
  if (this.pos + 8 > this.len)
    throw pt(this, 8);
  return new wc(Lx(this.buf, this.pos += 4), Lx(this.buf, this.pos += 4));
}
de.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw pt(this, 4);
  var x = wt.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, x;
};
de.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw pt(this, 4);
  var x = wt.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, x;
};
de.prototype.bytes = function() {
  var x = this.uint32(), o = this.pos, t = this.pos + x;
  if (t > this.len)
    throw pt(this, x);
  return this.pos += x, Array.isArray(this.buf) ? this.buf.slice(o, t) : o === t ? new this.buf.constructor(0) : this._slice.call(this.buf, o, t);
};
de.prototype.string = function() {
  var x = this.bytes();
  return Pl.read(x, 0, x.length);
};
de.prototype.skip = function(x) {
  if (typeof x == "number") {
    if (this.pos + x > this.len)
      throw pt(this, x);
    this.pos += x;
  } else
    do
      if (this.pos >= this.len)
        throw pt(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
de.prototype.skipType = function(x) {
  switch (x) {
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
      for (; (x = this.uint32() & 7) !== 4; )
        this.skipType(x);
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + x + " at offset " + this.pos);
  }
  return this;
};
de._configure = function(x) {
  pr = x, de.create = Sc(), pr._configure();
  var o = wt.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  wt.merge(de.prototype, {
    int64: function() {
      return Ro.call(this)[o](!1);
    },
    uint64: function() {
      return Ro.call(this)[o](!0);
    },
    sint64: function() {
      return Ro.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return Oa.call(this)[o](!0);
    },
    sfixed64: function() {
      return Oa.call(this)[o](!1);
    }
  });
};
var Vl = d0, Bc = vc;
(d0.prototype = Object.create(Bc.prototype)).constructor = d0;
var Za = I0();
function d0(x) {
  Bc.call(this, x);
}
d0._configure = function() {
  Za.Buffer && (d0.prototype._slice = Za.Buffer.prototype.slice);
};
d0.prototype.string = function() {
  var x = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + x, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + x, this.len));
};
d0._configure();
var kc = {}, Tl = In, zr = I0();
(In.prototype = Object.create(zr.EventEmitter.prototype)).constructor = In;
function In(x, o, t) {
  if (typeof x != "function")
    throw TypeError("rpcImpl must be a function");
  zr.EventEmitter.call(this), this.rpcImpl = x, this.requestDelimited = !!o, this.responseDelimited = !!t;
}
In.prototype.rpcCall = function x(o, t, e, n, r) {
  if (!n)
    throw TypeError("request must be specified");
  var i = this;
  if (!r)
    return zr.asPromise(x, i, o, t, e, n);
  if (!i.rpcImpl) {
    setTimeout(function() {
      r(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return i.rpcImpl(
      o,
      t[i.requestDelimited ? "encodeDelimited" : "encode"](n).finish(),
      function(a, s) {
        if (a)
          return i.emit("error", a, o), r(a);
        if (s === null) {
          i.end(
            /* endedByRPC */
            !0
          );
          return;
        }
        if (!(s instanceof e))
          try {
            s = e[i.responseDelimited ? "decodeDelimited" : "decode"](s);
          } catch (c) {
            return i.emit("error", c, o), r(c);
          }
        return i.emit("data", s, o), r(null, s);
      }
    );
  } catch (a) {
    i.emit("error", a, o), setTimeout(function() {
      r(a);
    }, 0);
    return;
  }
};
In.prototype.end = function(x) {
  return this.rpcImpl && (x || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(x) {
  var o = x;
  o.Service = Tl;
})(kc);
var Ll = {};
(function(x) {
  var o = x;
  o.build = "minimal", o.Writer = Ac, o.BufferWriter = Rl, o.Reader = vc, o.BufferReader = Vl, o.util = I0(), o.rpc = kc, o.roots = Ll, o.configure = t;
  function t() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  t();
})(hc);
var ne = hc;
const B = ne.Reader, ge = ne.Writer, W = ne.util, b = ne.roots.default || (ne.roots.default = {}), N0 = b.dot = (() => {
  const x = {};
  return x.Content = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.token = W.newBuffer([]), o.prototype.iv = W.newBuffer([]), o.prototype.schemaVersion = 0, o.prototype.bytes = W.newBuffer([]), o.create = function(t) {
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
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new b.dot.Content();
      for (; t.pos < n; ) {
        let i = t.uint32();
        switch (i >>> 3) {
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
            t.skipType(i & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || W.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || W.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !W.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || W.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof b.dot.Content)
        return t;
      let e = new b.dot.Content();
      return t.token != null && (typeof t.token == "string" ? W.base64.decode(t.token, e.token = W.newBuffer(W.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? W.base64.decode(t.iv, e.iv = W.newBuffer(W.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? W.base64.decode(t.bytes, e.bytes = W.newBuffer(W.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.token = "" : (n.token = [], e.bytes !== Array && (n.token = W.newBuffer(n.token))), e.bytes === String ? n.iv = "" : (n.iv = [], e.bytes !== Array && (n.iv = W.newBuffer(n.iv))), n.schemaVersion = 0, e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = W.newBuffer(n.bytes)))), t.token != null && t.hasOwnProperty("token") && (n.token = e.bytes === String ? W.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (n.iv = e.bytes === String ? W.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (n.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? W.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, o;
  }(), x.v4 = function() {
    const o = {};
    return o.MagnifEyeLivenessContent = function() {
      function t(e) {
        if (this.images = [], e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.images = W.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = ge.create()), e.images != null && e.images.length)
          for (let r = 0; r < e.images.length; ++r)
            b.dot.Image.encode(e.images[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && b.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.images && i.images.length || (i.images = []), i.images.push(b.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              i.metadata = b.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.images != null && e.hasOwnProperty("images")) {
          if (!Array.isArray(e.images))
            return "images: array expected";
          for (let n = 0; n < e.images.length; ++n) {
            let r = b.dot.Image.verify(e.images[n]);
            if (r)
              return "images." + r;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = b.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.MagnifEyeLivenessContent)
          return e;
        let n = new b.dot.v4.MagnifEyeLivenessContent();
        if (e.images) {
          if (!Array.isArray(e.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          n.images = [];
          for (let r = 0; r < e.images.length; ++r) {
            if (typeof e.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            n.images[r] = b.dot.Image.fromObject(e.images[r]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          n.metadata = b.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.images = []), n.defaults && (r.metadata = null), e.images && e.images.length) {
          r.images = [];
          for (let i = 0; i < e.images.length; ++i)
            r.images[i] = b.dot.Image.toObject(e.images[i], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), o.Metadata = function() {
      function t(n) {
        if (n)
          for (let r = Object.keys(n), i = 0; i < r.length; ++i)
            n[r[i]] != null && (this[r[i]] = n[r[i]]);
      }
      t.prototype.platform = 0, t.prototype.sessionToken = null, t.prototype.componentVersion = "", t.prototype.web = null, t.prototype.android = null, t.prototype.ios = null;
      let e;
      return Object.defineProperty(t.prototype, "_sessionToken", {
        get: W.oneOfGetter(e = ["sessionToken"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: W.oneOfGetter(e = ["web", "android", "ios"]),
        set: W.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        return r || (r = ge.create()), n.platform != null && Object.hasOwnProperty.call(n, "platform") && r.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.platform), n.web != null && Object.hasOwnProperty.call(n, "web") && b.dot.v4.WebMetadata.encode(n.web, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.android != null && Object.hasOwnProperty.call(n, "android") && b.dot.v4.AndroidMetadata.encode(n.android, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.ios != null && Object.hasOwnProperty.call(n, "ios") && b.dot.v4.IosMetadata.encode(n.ios, r.uint32(
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
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new b.dot.v4.Metadata();
        for (; n.pos < i; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.platform = n.int32();
              break;
            }
            case 5: {
              a.sessionToken = n.string();
              break;
            }
            case 6: {
              a.componentVersion = n.string();
              break;
            }
            case 2: {
              a.web = b.dot.v4.WebMetadata.decode(n, n.uint32());
              break;
            }
            case 3: {
              a.android = b.dot.v4.AndroidMetadata.decode(n, n.uint32());
              break;
            }
            case 4: {
              a.ios = b.dot.v4.IosMetadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
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
        if (n.sessionToken != null && n.hasOwnProperty("sessionToken") && (r._sessionToken = 1, !W.isString(n.sessionToken)))
          return "sessionToken: string expected";
        if (n.componentVersion != null && n.hasOwnProperty("componentVersion") && !W.isString(n.componentVersion))
          return "componentVersion: string expected";
        if (n.web != null && n.hasOwnProperty("web")) {
          r.metadata = 1;
          {
            let i = b.dot.v4.WebMetadata.verify(n.web);
            if (i)
              return "web." + i;
          }
        }
        if (n.android != null && n.hasOwnProperty("android")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let i = b.dot.v4.AndroidMetadata.verify(n.android);
            if (i)
              return "android." + i;
          }
        }
        if (n.ios != null && n.hasOwnProperty("ios")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let i = b.dot.v4.IosMetadata.verify(n.ios);
            if (i)
              return "ios." + i;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof b.dot.v4.Metadata)
          return n;
        let r = new b.dot.v4.Metadata();
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
          r.web = b.dot.v4.WebMetadata.fromObject(n.web);
        }
        if (n.android != null) {
          if (typeof n.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          r.android = b.dot.v4.AndroidMetadata.fromObject(n.android);
        }
        if (n.ios != null) {
          if (typeof n.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          r.ios = b.dot.v4.IosMetadata.fromObject(n.ios);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return r.defaults && (i.platform = r.enums === String ? "WEB" : 0, i.componentVersion = ""), n.platform != null && n.hasOwnProperty("platform") && (i.platform = r.enums === String ? b.dot.Platform[n.platform] === void 0 ? n.platform : b.dot.Platform[n.platform] : n.platform), n.web != null && n.hasOwnProperty("web") && (i.web = b.dot.v4.WebMetadata.toObject(n.web, r), r.oneofs && (i.metadata = "web")), n.android != null && n.hasOwnProperty("android") && (i.android = b.dot.v4.AndroidMetadata.toObject(n.android, r), r.oneofs && (i.metadata = "android")), n.ios != null && n.hasOwnProperty("ios") && (i.ios = b.dot.v4.IosMetadata.toObject(n.ios, r), r.oneofs && (i.metadata = "ios")), n.sessionToken != null && n.hasOwnProperty("sessionToken") && (i.sessionToken = n.sessionToken, r.oneofs && (i._sessionToken = "sessionToken")), n.componentVersion != null && n.hasOwnProperty("componentVersion") && (i.componentVersion = n.componentVersion), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.Metadata";
      }, t;
    }(), o.AndroidMetadata = function() {
      function t(n) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, n)
          for (let r = Object.keys(n), i = 0; i < r.length; ++i)
            n[r[i]] != null && (this[r[i]] = n[r[i]]);
      }
      t.prototype.supportedAbis = W.emptyArray, t.prototype.device = null, t.prototype.digests = W.emptyArray, t.prototype.digestsWithTimestamp = W.emptyArray, t.prototype.dynamicCameraFrameProperties = W.emptyObject;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: W.oneOfGetter(e = ["device"]),
        set: W.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        if (r || (r = ge.create()), n.supportedAbis != null && n.supportedAbis.length)
          for (let i = 0; i < n.supportedAbis.length; ++i)
            r.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(n.supportedAbis[i]);
        if (n.device != null && Object.hasOwnProperty.call(n, "device") && r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(n.device), n.digests != null && n.digests.length)
          for (let i = 0; i < n.digests.length; ++i)
            r.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(n.digests[i]);
        if (n.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(n, "dynamicCameraFrameProperties"))
          for (let i = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < i.length; ++a)
            r.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(i[a]), b.dot.Int32List.encode(n.dynamicCameraFrameProperties[i[a]], r.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (n.digestsWithTimestamp != null && n.digestsWithTimestamp.length)
          for (let i = 0; i < n.digestsWithTimestamp.length; ++i)
            b.dot.DigestWithTimestamp.encode(n.digestsWithTimestamp[i], r.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new b.dot.v4.AndroidMetadata(), s, c;
        for (; n.pos < i; ) {
          let u = n.uint32();
          switch (u >>> 3) {
            case 1: {
              a.supportedAbis && a.supportedAbis.length || (a.supportedAbis = []), a.supportedAbis.push(n.string());
              break;
            }
            case 2: {
              a.device = n.string();
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(n.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(b.dot.DigestWithTimestamp.decode(n, n.uint32()));
              break;
            }
            case 4: {
              a.dynamicCameraFrameProperties === W.emptyObject && (a.dynamicCameraFrameProperties = {});
              let g = n.uint32() + n.pos;
              for (s = "", c = null; n.pos < g; ) {
                let p = n.uint32();
                switch (p >>> 3) {
                  case 1:
                    s = n.string();
                    break;
                  case 2:
                    c = b.dot.Int32List.decode(n, n.uint32());
                    break;
                  default:
                    n.skipType(p & 7);
                    break;
                }
              }
              a.dynamicCameraFrameProperties[s] = c;
              break;
            }
            default:
              n.skipType(u & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.supportedAbis != null && n.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(n.supportedAbis))
            return "supportedAbis: array expected";
          for (let r = 0; r < n.supportedAbis.length; ++r)
            if (!W.isString(n.supportedAbis[r]))
              return "supportedAbis: string[] expected";
        }
        if (n.device != null && n.hasOwnProperty("device") && !W.isString(n.device))
          return "device: string expected";
        if (n.digests != null && n.hasOwnProperty("digests")) {
          if (!Array.isArray(n.digests))
            return "digests: array expected";
          for (let r = 0; r < n.digests.length; ++r)
            if (!(n.digests[r] && typeof n.digests[r].length == "number" || W.isString(n.digests[r])))
              return "digests: buffer[] expected";
        }
        if (n.digestsWithTimestamp != null && n.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(n.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let r = 0; r < n.digestsWithTimestamp.length; ++r) {
            let i = b.dot.DigestWithTimestamp.verify(n.digestsWithTimestamp[r]);
            if (i)
              return "digestsWithTimestamp." + i;
          }
        }
        if (n.dynamicCameraFrameProperties != null && n.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!W.isObject(n.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let r = Object.keys(n.dynamicCameraFrameProperties);
          for (let i = 0; i < r.length; ++i) {
            let a = b.dot.Int32List.verify(n.dynamicCameraFrameProperties[r[i]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof b.dot.v4.AndroidMetadata)
          return n;
        let r = new b.dot.v4.AndroidMetadata();
        if (n.supportedAbis) {
          if (!Array.isArray(n.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          r.supportedAbis = [];
          for (let i = 0; i < n.supportedAbis.length; ++i)
            r.supportedAbis[i] = String(n.supportedAbis[i]);
        }
        if (n.device != null && (r.device = String(n.device)), n.digests) {
          if (!Array.isArray(n.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          r.digests = [];
          for (let i = 0; i < n.digests.length; ++i)
            typeof n.digests[i] == "string" ? W.base64.decode(n.digests[i], r.digests[i] = W.newBuffer(W.base64.length(n.digests[i])), 0) : n.digests[i].length >= 0 && (r.digests[i] = n.digests[i]);
        }
        if (n.digestsWithTimestamp) {
          if (!Array.isArray(n.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          r.digestsWithTimestamp = [];
          for (let i = 0; i < n.digestsWithTimestamp.length; ++i) {
            if (typeof n.digestsWithTimestamp[i] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            r.digestsWithTimestamp[i] = b.dot.DigestWithTimestamp.fromObject(n.digestsWithTimestamp[i]);
          }
        }
        if (n.dynamicCameraFrameProperties) {
          if (typeof n.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          r.dynamicCameraFrameProperties = {};
          for (let i = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < i.length; ++a) {
            if (typeof n.dynamicCameraFrameProperties[i[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            r.dynamicCameraFrameProperties[i[a]] = b.dot.Int32List.fromObject(n.dynamicCameraFrameProperties[i[a]]);
          }
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        if ((r.arrays || r.defaults) && (i.supportedAbis = [], i.digests = [], i.digestsWithTimestamp = []), (r.objects || r.defaults) && (i.dynamicCameraFrameProperties = {}), n.supportedAbis && n.supportedAbis.length) {
          i.supportedAbis = [];
          for (let s = 0; s < n.supportedAbis.length; ++s)
            i.supportedAbis[s] = n.supportedAbis[s];
        }
        if (n.device != null && n.hasOwnProperty("device") && (i.device = n.device, r.oneofs && (i._device = "device")), n.digests && n.digests.length) {
          i.digests = [];
          for (let s = 0; s < n.digests.length; ++s)
            i.digests[s] = r.bytes === String ? W.base64.encode(n.digests[s], 0, n.digests[s].length) : r.bytes === Array ? Array.prototype.slice.call(n.digests[s]) : n.digests[s];
        }
        let a;
        if (n.dynamicCameraFrameProperties && (a = Object.keys(n.dynamicCameraFrameProperties)).length) {
          i.dynamicCameraFrameProperties = {};
          for (let s = 0; s < a.length; ++s)
            i.dynamicCameraFrameProperties[a[s]] = b.dot.Int32List.toObject(n.dynamicCameraFrameProperties[a[s]], r);
        }
        if (n.digestsWithTimestamp && n.digestsWithTimestamp.length) {
          i.digestsWithTimestamp = [];
          for (let s = 0; s < n.digestsWithTimestamp.length; ++s)
            i.digestsWithTimestamp[s] = b.dot.DigestWithTimestamp.toObject(n.digestsWithTimestamp[s], r);
        }
        return i;
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
      return t.prototype.cameraModelId = "", t.prototype.architectureInfo = W.emptyObject, t.prototype.digests = W.emptyArray, t.prototype.digestsWithTimestamp = W.emptyArray, t.prototype.isoValues = W.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = ge.create()), e.cameraModelId != null && Object.hasOwnProperty.call(e, "cameraModelId") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.cameraModelId), e.architectureInfo != null && Object.hasOwnProperty.call(e, "architectureInfo"))
          for (let r = Object.keys(e.architectureInfo), i = 0; i < r.length; ++i)
            n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[i]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(e.architectureInfo[r[i]]).ldelim();
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
            b.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.IosMetadata(), a, s;
        for (; e.pos < r; ) {
          let c = e.uint32();
          switch (c >>> 3) {
            case 1: {
              i.cameraModelId = e.string();
              break;
            }
            case 2: {
              i.architectureInfo === W.emptyObject && (i.architectureInfo = {});
              let u = e.uint32() + e.pos;
              for (a = "", s = !1; e.pos < u; ) {
                let g = e.uint32();
                switch (g >>> 3) {
                  case 1:
                    a = e.string();
                    break;
                  case 2:
                    s = e.bool();
                    break;
                  default:
                    e.skipType(g & 7);
                    break;
                }
              }
              i.architectureInfo[a] = s;
              break;
            }
            case 3: {
              i.digests && i.digests.length || (i.digests = []), i.digests.push(e.bytes());
              break;
            }
            case 5: {
              i.digestsWithTimestamp && i.digestsWithTimestamp.length || (i.digestsWithTimestamp = []), i.digestsWithTimestamp.push(b.dot.DigestWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              if (i.isoValues && i.isoValues.length || (i.isoValues = []), (c & 7) === 2) {
                let u = e.uint32() + e.pos;
                for (; e.pos < u; )
                  i.isoValues.push(e.int32());
              } else
                i.isoValues.push(e.int32());
              break;
            }
            default:
              e.skipType(c & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.cameraModelId != null && e.hasOwnProperty("cameraModelId") && !W.isString(e.cameraModelId))
          return "cameraModelId: string expected";
        if (e.architectureInfo != null && e.hasOwnProperty("architectureInfo")) {
          if (!W.isObject(e.architectureInfo))
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
            if (!(e.digests[n] && typeof e.digests[n].length == "number" || W.isString(e.digests[n])))
              return "digests: buffer[] expected";
        }
        if (e.digestsWithTimestamp != null && e.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(e.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let n = 0; n < e.digestsWithTimestamp.length; ++n) {
            let r = b.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[n]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (e.isoValues != null && e.hasOwnProperty("isoValues")) {
          if (!Array.isArray(e.isoValues))
            return "isoValues: array expected";
          for (let n = 0; n < e.isoValues.length; ++n)
            if (!W.isInteger(e.isoValues[n]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.IosMetadata)
          return e;
        let n = new b.dot.v4.IosMetadata();
        if (e.cameraModelId != null && (n.cameraModelId = String(e.cameraModelId)), e.architectureInfo) {
          if (typeof e.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          n.architectureInfo = {};
          for (let r = Object.keys(e.architectureInfo), i = 0; i < r.length; ++i)
            n.architectureInfo[r[i]] = !!e.architectureInfo[r[i]];
        }
        if (e.digests) {
          if (!Array.isArray(e.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          n.digests = [];
          for (let r = 0; r < e.digests.length; ++r)
            typeof e.digests[r] == "string" ? W.base64.decode(e.digests[r], n.digests[r] = W.newBuffer(W.base64.length(e.digests[r])), 0) : e.digests[r].length >= 0 && (n.digests[r] = e.digests[r]);
        }
        if (e.digestsWithTimestamp) {
          if (!Array.isArray(e.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let r = 0; r < e.digestsWithTimestamp.length; ++r) {
            if (typeof e.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[r] = b.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[r]);
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
        let i;
        if (e.architectureInfo && (i = Object.keys(e.architectureInfo)).length) {
          r.architectureInfo = {};
          for (let a = 0; a < i.length; ++a)
            r.architectureInfo[i[a]] = e.architectureInfo[i[a]];
        }
        if (e.digests && e.digests.length) {
          r.digests = [];
          for (let a = 0; a < e.digests.length; ++a)
            r.digests[a] = n.bytes === String ? W.base64.encode(e.digests[a], 0, e.digests[a].length) : n.bytes === Array ? Array.prototype.slice.call(e.digests[a]) : e.digests[a];
        }
        if (e.isoValues && e.isoValues.length) {
          r.isoValues = [];
          for (let a = 0; a < e.isoValues.length; ++a)
            r.isoValues[a] = e.isoValues[a];
        }
        if (e.digestsWithTimestamp && e.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let a = 0; a < e.digestsWithTimestamp.length; ++a)
            r.digestsWithTimestamp[a] = b.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[a], n);
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
      return t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = W.emptyArray, t.prototype.hashedDetectedImages = W.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = W.emptyArray, t.prototype.detectionRecord = W.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = ge.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && b.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.availableCameraProperties != null && e.availableCameraProperties.length)
          for (let r = 0; r < e.availableCameraProperties.length; ++r)
            b.dot.v4.CameraProperties.encode(e.availableCameraProperties[r], n.uint32(
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
            b.dot.v4.DetectedObject.encode(e.detectionRecord[r], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (e.hashedDetectedImagesWithTimestamp != null && e.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < e.hashedDetectedImagesWithTimestamp.length; ++r)
            b.dot.v4.HashedDetectedImageWithTimestamp.encode(e.hashedDetectedImagesWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.WebMetadata();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.currentCameraProperties = b.dot.v4.MediaTrackSettings.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.availableCameraProperties && i.availableCameraProperties.length || (i.availableCameraProperties = []), i.availableCameraProperties.push(b.dot.v4.CameraProperties.decode(e, e.uint32()));
              break;
            }
            case 3: {
              i.hashedDetectedImages && i.hashedDetectedImages.length || (i.hashedDetectedImages = []), i.hashedDetectedImages.push(e.string());
              break;
            }
            case 5: {
              i.hashedDetectedImagesWithTimestamp && i.hashedDetectedImagesWithTimestamp.length || (i.hashedDetectedImagesWithTimestamp = []), i.hashedDetectedImagesWithTimestamp.push(b.dot.v4.HashedDetectedImageWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              i.detectionRecord && i.detectionRecord.length || (i.detectionRecord = []), i.detectionRecord.push(b.dot.v4.DetectedObject.decode(e, e.uint32()));
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties")) {
          let n = b.dot.v4.MediaTrackSettings.verify(e.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (e.availableCameraProperties != null && e.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(e.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < e.availableCameraProperties.length; ++n) {
            let r = b.dot.v4.CameraProperties.verify(e.availableCameraProperties[n]);
            if (r)
              return "availableCameraProperties." + r;
          }
        }
        if (e.hashedDetectedImages != null && e.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(e.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let n = 0; n < e.hashedDetectedImages.length; ++n)
            if (!W.isString(e.hashedDetectedImages[n]))
              return "hashedDetectedImages: string[] expected";
        }
        if (e.hashedDetectedImagesWithTimestamp != null && e.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(e.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let n = 0; n < e.hashedDetectedImagesWithTimestamp.length; ++n) {
            let r = b.dot.v4.HashedDetectedImageWithTimestamp.verify(e.hashedDetectedImagesWithTimestamp[n]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (e.detectionRecord != null && e.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(e.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < e.detectionRecord.length; ++n) {
            let r = b.dot.v4.DetectedObject.verify(e.detectionRecord[n]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.WebMetadata)
          return e;
        let n = new b.dot.v4.WebMetadata();
        if (e.currentCameraProperties != null) {
          if (typeof e.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          n.currentCameraProperties = b.dot.v4.MediaTrackSettings.fromObject(e.currentCameraProperties);
        }
        if (e.availableCameraProperties) {
          if (!Array.isArray(e.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          n.availableCameraProperties = [];
          for (let r = 0; r < e.availableCameraProperties.length; ++r) {
            if (typeof e.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[r] = b.dot.v4.CameraProperties.fromObject(e.availableCameraProperties[r]);
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
            n.hashedDetectedImagesWithTimestamp[r] = b.dot.v4.HashedDetectedImageWithTimestamp.fromObject(e.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (e.detectionRecord) {
          if (!Array.isArray(e.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let r = 0; r < e.detectionRecord.length; ++r) {
            if (typeof e.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[r] = b.dot.v4.DetectedObject.fromObject(e.detectionRecord[r]);
          }
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), n.defaults && (r.currentCameraProperties = null), e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = b.dot.v4.MediaTrackSettings.toObject(e.currentCameraProperties, n)), e.availableCameraProperties && e.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let i = 0; i < e.availableCameraProperties.length; ++i)
            r.availableCameraProperties[i] = b.dot.v4.CameraProperties.toObject(e.availableCameraProperties[i], n);
        }
        if (e.hashedDetectedImages && e.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let i = 0; i < e.hashedDetectedImages.length; ++i)
            r.hashedDetectedImages[i] = e.hashedDetectedImages[i];
        }
        if (e.detectionRecord && e.detectionRecord.length) {
          r.detectionRecord = [];
          for (let i = 0; i < e.detectionRecord.length; ++i)
            r.detectionRecord[i] = b.dot.v4.DetectedObject.toObject(e.detectionRecord[i], n);
        }
        if (e.hashedDetectedImagesWithTimestamp && e.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let i = 0; i < e.hashedDetectedImagesWithTimestamp.length; ++i)
            r.hashedDetectedImagesWithTimestamp[i] = b.dot.v4.HashedDetectedImageWithTimestamp.toObject(e.hashedDetectedImagesWithTimestamp[i], n);
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
      return t.prototype.imageHash = "", t.prototype.timestampMillis = W.Long ? W.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
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
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.imageHash = e.string();
              break;
            }
            case 2: {
              i.timestampMillis = e.uint64();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !W.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !W.isInteger(e.timestampMillis) && !(e.timestampMillis && W.isInteger(e.timestampMillis.low) && W.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let n = new b.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (n.imageHash = String(e.imageHash)), e.timestampMillis != null && (W.Long ? (n.timestampMillis = W.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? n.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? n.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (n.timestampMillis = new W.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if (n.defaults)
          if (r.imageHash = "", W.Long) {
            let i = new W.Long(0, 0, !0);
            r.timestampMillis = n.longs === String ? i.toString() : n.longs === Number ? i.toNumber() : i;
          } else
            r.timestampMillis = n.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (r.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? r.timestampMillis = n.longs === String ? String(e.timestampMillis) : e.timestampMillis : r.timestampMillis = n.longs === String ? W.Long.prototype.toString.call(e.timestampMillis) : n.longs === Number ? new W.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), o.MediaTrackSettings = function() {
      function t(n) {
        if (n)
          for (let r = Object.keys(n), i = 0; i < r.length; ++i)
            n[r[i]] != null && (this[r[i]] = n[r[i]]);
      }
      t.prototype.aspectRatio = null, t.prototype.autoGainControl = null, t.prototype.channelCount = null, t.prototype.deviceId = null, t.prototype.displaySurface = null, t.prototype.echoCancellation = null, t.prototype.facingMode = null, t.prototype.frameRate = null, t.prototype.groupId = null, t.prototype.height = null, t.prototype.noiseSuppression = null, t.prototype.sampleRate = null, t.prototype.sampleSize = null, t.prototype.width = null, t.prototype.deviceName = null;
      let e;
      return Object.defineProperty(t.prototype, "_aspectRatio", {
        get: W.oneOfGetter(e = ["aspectRatio"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: W.oneOfGetter(e = ["autoGainControl"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: W.oneOfGetter(e = ["channelCount"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: W.oneOfGetter(e = ["deviceId"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: W.oneOfGetter(e = ["displaySurface"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: W.oneOfGetter(e = ["echoCancellation"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: W.oneOfGetter(e = ["facingMode"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: W.oneOfGetter(e = ["frameRate"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: W.oneOfGetter(e = ["groupId"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_height", {
        get: W.oneOfGetter(e = ["height"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: W.oneOfGetter(e = ["noiseSuppression"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: W.oneOfGetter(e = ["sampleRate"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: W.oneOfGetter(e = ["sampleSize"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_width", {
        get: W.oneOfGetter(e = ["width"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: W.oneOfGetter(e = ["deviceName"]),
        set: W.oneOfSetter(e)
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
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new b.dot.v4.MediaTrackSettings();
        for (; n.pos < i; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.aspectRatio = n.double();
              break;
            }
            case 2: {
              a.autoGainControl = n.bool();
              break;
            }
            case 3: {
              a.channelCount = n.int32();
              break;
            }
            case 4: {
              a.deviceId = n.string();
              break;
            }
            case 5: {
              a.displaySurface = n.string();
              break;
            }
            case 6: {
              a.echoCancellation = n.bool();
              break;
            }
            case 7: {
              a.facingMode = n.string();
              break;
            }
            case 8: {
              a.frameRate = n.double();
              break;
            }
            case 9: {
              a.groupId = n.string();
              break;
            }
            case 10: {
              a.height = n.int32();
              break;
            }
            case 11: {
              a.noiseSuppression = n.bool();
              break;
            }
            case 12: {
              a.sampleRate = n.int32();
              break;
            }
            case 13: {
              a.sampleSize = n.int32();
              break;
            }
            case 14: {
              a.width = n.int32();
              break;
            }
            case 15: {
              a.deviceName = n.string();
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        return typeof n != "object" || n === null ? "object expected" : n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && typeof n.aspectRatio != "number" ? "aspectRatio: number expected" : n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && typeof n.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : n.channelCount != null && n.hasOwnProperty("channelCount") && !W.isInteger(n.channelCount) ? "channelCount: integer expected" : n.deviceId != null && n.hasOwnProperty("deviceId") && !W.isString(n.deviceId) ? "deviceId: string expected" : n.displaySurface != null && n.hasOwnProperty("displaySurface") && !W.isString(n.displaySurface) ? "displaySurface: string expected" : n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && typeof n.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : n.facingMode != null && n.hasOwnProperty("facingMode") && !W.isString(n.facingMode) ? "facingMode: string expected" : n.frameRate != null && n.hasOwnProperty("frameRate") && typeof n.frameRate != "number" ? "frameRate: number expected" : n.groupId != null && n.hasOwnProperty("groupId") && !W.isString(n.groupId) ? "groupId: string expected" : n.height != null && n.hasOwnProperty("height") && !W.isInteger(n.height) ? "height: integer expected" : n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && typeof n.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : n.sampleRate != null && n.hasOwnProperty("sampleRate") && !W.isInteger(n.sampleRate) ? "sampleRate: integer expected" : n.sampleSize != null && n.hasOwnProperty("sampleSize") && !W.isInteger(n.sampleSize) ? "sampleSize: integer expected" : n.width != null && n.hasOwnProperty("width") && !W.isInteger(n.width) ? "width: integer expected" : n.deviceName != null && n.hasOwnProperty("deviceName") && !W.isString(n.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(n) {
        if (n instanceof b.dot.v4.MediaTrackSettings)
          return n;
        let r = new b.dot.v4.MediaTrackSettings();
        return n.aspectRatio != null && (r.aspectRatio = Number(n.aspectRatio)), n.autoGainControl != null && (r.autoGainControl = !!n.autoGainControl), n.channelCount != null && (r.channelCount = n.channelCount | 0), n.deviceId != null && (r.deviceId = String(n.deviceId)), n.displaySurface != null && (r.displaySurface = String(n.displaySurface)), n.echoCancellation != null && (r.echoCancellation = !!n.echoCancellation), n.facingMode != null && (r.facingMode = String(n.facingMode)), n.frameRate != null && (r.frameRate = Number(n.frameRate)), n.groupId != null && (r.groupId = String(n.groupId)), n.height != null && (r.height = n.height | 0), n.noiseSuppression != null && (r.noiseSuppression = !!n.noiseSuppression), n.sampleRate != null && (r.sampleRate = n.sampleRate | 0), n.sampleSize != null && (r.sampleSize = n.sampleSize | 0), n.width != null && (r.width = n.width | 0), n.deviceName != null && (r.deviceName = String(n.deviceName)), r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && (i.aspectRatio = r.json && !isFinite(n.aspectRatio) ? String(n.aspectRatio) : n.aspectRatio, r.oneofs && (i._aspectRatio = "aspectRatio")), n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && (i.autoGainControl = n.autoGainControl, r.oneofs && (i._autoGainControl = "autoGainControl")), n.channelCount != null && n.hasOwnProperty("channelCount") && (i.channelCount = n.channelCount, r.oneofs && (i._channelCount = "channelCount")), n.deviceId != null && n.hasOwnProperty("deviceId") && (i.deviceId = n.deviceId, r.oneofs && (i._deviceId = "deviceId")), n.displaySurface != null && n.hasOwnProperty("displaySurface") && (i.displaySurface = n.displaySurface, r.oneofs && (i._displaySurface = "displaySurface")), n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && (i.echoCancellation = n.echoCancellation, r.oneofs && (i._echoCancellation = "echoCancellation")), n.facingMode != null && n.hasOwnProperty("facingMode") && (i.facingMode = n.facingMode, r.oneofs && (i._facingMode = "facingMode")), n.frameRate != null && n.hasOwnProperty("frameRate") && (i.frameRate = r.json && !isFinite(n.frameRate) ? String(n.frameRate) : n.frameRate, r.oneofs && (i._frameRate = "frameRate")), n.groupId != null && n.hasOwnProperty("groupId") && (i.groupId = n.groupId, r.oneofs && (i._groupId = "groupId")), n.height != null && n.hasOwnProperty("height") && (i.height = n.height, r.oneofs && (i._height = "height")), n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && (i.noiseSuppression = n.noiseSuppression, r.oneofs && (i._noiseSuppression = "noiseSuppression")), n.sampleRate != null && n.hasOwnProperty("sampleRate") && (i.sampleRate = n.sampleRate, r.oneofs && (i._sampleRate = "sampleRate")), n.sampleSize != null && n.hasOwnProperty("sampleSize") && (i.sampleSize = n.sampleSize, r.oneofs && (i._sampleSize = "sampleSize")), n.width != null && n.hasOwnProperty("width") && (i.width = n.width, r.oneofs && (i._width = "width")), n.deviceName != null && n.hasOwnProperty("deviceName") && (i.deviceName = n.deviceName, r.oneofs && (i._deviceName = "deviceName")), i;
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
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.ImageBitmap();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.width = e.int32();
              break;
            }
            case 2: {
              i.height = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !W.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !W.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.ImageBitmap)
          return e;
        let n = new b.dot.v4.ImageBitmap();
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
          for (let r = Object.keys(n), i = 0; i < r.length; ++i)
            n[r[i]] != null && (this[r[i]] = n[r[i]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: W.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: W.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        return r || (r = ge.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && b.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.cameraProperties != null && Object.hasOwnProperty.call(n, "cameraProperties") && b.dot.v4.MediaTrackSettings.encode(n.cameraProperties, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new b.dot.v4.CameraProperties();
        for (; n.pos < i; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = b.dot.v4.ImageBitmap.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = b.dot.v4.MediaTrackSettings.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution")) {
          let r = b.dot.v4.ImageBitmap.verify(n.cameraInitFrameResolution);
          if (r)
            return "cameraInitFrameResolution." + r;
        }
        if (n.cameraProperties != null && n.hasOwnProperty("cameraProperties")) {
          let r = b.dot.v4.MediaTrackSettings.verify(n.cameraProperties);
          if (r)
            return "cameraProperties." + r;
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof b.dot.v4.CameraProperties)
          return n;
        let r = new b.dot.v4.CameraProperties();
        if (n.cameraInitFrameResolution != null) {
          if (typeof n.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          r.cameraInitFrameResolution = b.dot.v4.ImageBitmap.fromObject(n.cameraInitFrameResolution);
        }
        if (n.cameraProperties != null) {
          if (typeof n.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          r.cameraProperties = b.dot.v4.MediaTrackSettings.fromObject(n.cameraProperties);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return r.defaults && (i.cameraProperties = null), n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution") && (i.cameraInitFrameResolution = b.dot.v4.ImageBitmap.toObject(n.cameraInitFrameResolution, r), r.oneofs && (i._cameraInitFrameResolution = "cameraInitFrameResolution")), n.cameraProperties != null && n.hasOwnProperty("cameraProperties") && (i.cameraProperties = b.dot.v4.MediaTrackSettings.toObject(n.cameraProperties, r)), i;
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && b.dot.v4.Point.encode(e.faceCenter, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && n.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && b.dot.v4.Point.encode(e.bottomLeft, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && b.dot.v4.Point.encode(e.bottomRight, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && b.dot.v4.Point.encode(e.topLeft, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && b.dot.v4.Point.encode(e.topRight, n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.DetectedObject();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.brightness = e.float();
              break;
            }
            case 2: {
              i.sharpness = e.float();
              break;
            }
            case 3: {
              i.hotspots = e.float();
              break;
            }
            case 4: {
              i.confidence = e.float();
              break;
            }
            case 5: {
              i.faceSize = e.float();
              break;
            }
            case 6: {
              i.faceCenter = b.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              i.smallestEdge = e.float();
              break;
            }
            case 8: {
              i.bottomLeft = b.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              i.bottomRight = b.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              i.topLeft = b.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              i.topRight = b.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
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
          let n = b.dot.v4.Point.verify(e.faceCenter);
          if (n)
            return "faceCenter." + n;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let n = b.dot.v4.Point.verify(e.bottomLeft);
          if (n)
            return "bottomLeft." + n;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let n = b.dot.v4.Point.verify(e.bottomRight);
          if (n)
            return "bottomRight." + n;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let n = b.dot.v4.Point.verify(e.topLeft);
          if (n)
            return "topLeft." + n;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let n = b.dot.v4.Point.verify(e.topRight);
          if (n)
            return "topRight." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.DetectedObject)
          return e;
        let n = new b.dot.v4.DetectedObject();
        if (e.brightness != null && (n.brightness = Number(e.brightness)), e.sharpness != null && (n.sharpness = Number(e.sharpness)), e.hotspots != null && (n.hotspots = Number(e.hotspots)), e.confidence != null && (n.confidence = Number(e.confidence)), e.faceSize != null && (n.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          n.faceCenter = b.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (n.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          n.bottomLeft = b.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          n.bottomRight = b.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          n.topLeft = b.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          n.topRight = b.dot.v4.Point.fromObject(e.topRight);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.brightness = 0, r.sharpness = 0, r.hotspots = 0, r.confidence = 0, r.faceSize = 0, r.faceCenter = null, r.smallestEdge = 0, r.bottomLeft = null, r.bottomRight = null, r.topLeft = null, r.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (r.brightness = n.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (r.sharpness = n.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (r.hotspots = n.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (r.confidence = n.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (r.faceSize = n.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (r.faceCenter = b.dot.v4.Point.toObject(e.faceCenter, n)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (r.smallestEdge = n.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (r.bottomLeft = b.dot.v4.Point.toObject(e.bottomLeft, n)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (r.bottomRight = b.dot.v4.Point.toObject(e.bottomRight, n)), e.topLeft != null && e.hasOwnProperty("topLeft") && (r.topLeft = b.dot.v4.Point.toObject(e.topLeft, n)), e.topRight != null && e.hasOwnProperty("topRight") && (r.topRight = b.dot.v4.Point.toObject(e.topRight, n)), r;
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
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.Point();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.x = e.float();
              break;
            }
            case 2: {
              i.y = e.float();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.x != null && e.hasOwnProperty("x") && typeof e.x != "number" ? "x: number expected" : e.y != null && e.hasOwnProperty("y") && typeof e.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.Point)
          return e;
        let n = new b.dot.v4.Point();
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
        return n || (n = ge.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && b.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && b.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.FaceContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.image = b.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.metadata = b.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let n = b.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = b.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.FaceContent)
          return e;
        let n = new b.dot.v4.FaceContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          n.image = b.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          n.metadata = b.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = b.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        return n || (n = ge.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && b.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && b.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.DocumentContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.image = b.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.metadata = b.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let n = b.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = b.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.DocumentContent)
          return e;
        let n = new b.dot.v4.DocumentContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          n.image = b.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          n.metadata = b.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = b.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), o.Blob = function() {
      function t(n) {
        if (n)
          for (let r = Object.keys(n), i = 0; i < r.length; ++i)
            n[r[i]] != null && (this[r[i]] = n[r[i]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: W.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent"]),
        set: W.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        return r || (r = ge.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && b.dot.v4.DocumentContent.encode(n.documentContent, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.faceContent != null && Object.hasOwnProperty.call(n, "faceContent") && b.dot.v4.FaceContent.encode(n.faceContent, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(n, "magnifeyeLivenessContent") && b.dot.v4.MagnifEyeLivenessContent.encode(n.magnifeyeLivenessContent, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.smileLivenessContent != null && Object.hasOwnProperty.call(n, "smileLivenessContent") && b.dot.v4.SmileLivenessContent.encode(n.smileLivenessContent, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(n, "eyeGazeLivenessContent") && b.dot.v4.EyeGazeLivenessContent.encode(n.eyeGazeLivenessContent, r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new b.dot.v4.Blob();
        for (; n.pos < i; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.documentContent = b.dot.v4.DocumentContent.decode(n, n.uint32());
              break;
            }
            case 5: {
              a.eyeGazeLivenessContent = b.dot.v4.EyeGazeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.faceContent = b.dot.v4.FaceContent.decode(n, n.uint32());
              break;
            }
            case 3: {
              a.magnifeyeLivenessContent = b.dot.v4.MagnifEyeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 4: {
              a.smileLivenessContent = b.dot.v4.SmileLivenessContent.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        let r = {};
        if (n.documentContent != null && n.hasOwnProperty("documentContent")) {
          r.blob = 1;
          {
            let i = b.dot.v4.DocumentContent.verify(n.documentContent);
            if (i)
              return "documentContent." + i;
          }
        }
        if (n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = b.dot.v4.EyeGazeLivenessContent.verify(n.eyeGazeLivenessContent);
            if (i)
              return "eyeGazeLivenessContent." + i;
          }
        }
        if (n.faceContent != null && n.hasOwnProperty("faceContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = b.dot.v4.FaceContent.verify(n.faceContent);
            if (i)
              return "faceContent." + i;
          }
        }
        if (n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = b.dot.v4.MagnifEyeLivenessContent.verify(n.magnifeyeLivenessContent);
            if (i)
              return "magnifeyeLivenessContent." + i;
          }
        }
        if (n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = b.dot.v4.SmileLivenessContent.verify(n.smileLivenessContent);
            if (i)
              return "smileLivenessContent." + i;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof b.dot.v4.Blob)
          return n;
        let r = new b.dot.v4.Blob();
        if (n.documentContent != null) {
          if (typeof n.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          r.documentContent = b.dot.v4.DocumentContent.fromObject(n.documentContent);
        }
        if (n.eyeGazeLivenessContent != null) {
          if (typeof n.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          r.eyeGazeLivenessContent = b.dot.v4.EyeGazeLivenessContent.fromObject(n.eyeGazeLivenessContent);
        }
        if (n.faceContent != null) {
          if (typeof n.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          r.faceContent = b.dot.v4.FaceContent.fromObject(n.faceContent);
        }
        if (n.magnifeyeLivenessContent != null) {
          if (typeof n.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          r.magnifeyeLivenessContent = b.dot.v4.MagnifEyeLivenessContent.fromObject(n.magnifeyeLivenessContent);
        }
        if (n.smileLivenessContent != null) {
          if (typeof n.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          r.smileLivenessContent = b.dot.v4.SmileLivenessContent.fromObject(n.smileLivenessContent);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return n.documentContent != null && n.hasOwnProperty("documentContent") && (i.documentContent = b.dot.v4.DocumentContent.toObject(n.documentContent, r), r.oneofs && (i.blob = "documentContent")), n.faceContent != null && n.hasOwnProperty("faceContent") && (i.faceContent = b.dot.v4.FaceContent.toObject(n.faceContent, r), r.oneofs && (i.blob = "faceContent")), n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent") && (i.magnifeyeLivenessContent = b.dot.v4.MagnifEyeLivenessContent.toObject(n.magnifeyeLivenessContent, r), r.oneofs && (i.blob = "magnifeyeLivenessContent")), n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent") && (i.smileLivenessContent = b.dot.v4.SmileLivenessContent.toObject(n.smileLivenessContent, r), r.oneofs && (i.blob = "smileLivenessContent")), n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent") && (i.eyeGazeLivenessContent = b.dot.v4.EyeGazeLivenessContent.toObject(n.eyeGazeLivenessContent, r), r.oneofs && (i.blob = "eyeGazeLivenessContent")), i;
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
      return t.prototype.segments = W.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = ge.create()), e.segments != null && e.segments.length)
          for (let r = 0; r < e.segments.length; ++r)
            b.dot.v4.EyeGazeLivenessSegment.encode(e.segments[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && b.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.EyeGazeLivenessContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.segments && i.segments.length || (i.segments = []), i.segments.push(b.dot.v4.EyeGazeLivenessSegment.decode(e, e.uint32()));
              break;
            }
            case 2: {
              i.metadata = b.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.segments != null && e.hasOwnProperty("segments")) {
          if (!Array.isArray(e.segments))
            return "segments: array expected";
          for (let n = 0; n < e.segments.length; ++n) {
            let r = b.dot.v4.EyeGazeLivenessSegment.verify(e.segments[n]);
            if (r)
              return "segments." + r;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = b.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.EyeGazeLivenessContent)
          return e;
        let n = new b.dot.v4.EyeGazeLivenessContent();
        if (e.segments) {
          if (!Array.isArray(e.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          n.segments = [];
          for (let r = 0; r < e.segments.length; ++r) {
            if (typeof e.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[r] = b.dot.v4.EyeGazeLivenessSegment.fromObject(e.segments[r]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          n.metadata = b.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.segments = []), n.defaults && (r.metadata = null), e.segments && e.segments.length) {
          r.segments = [];
          for (let i = 0; i < e.segments.length; ++i)
            r.segments[i] = b.dot.v4.EyeGazeLivenessSegment.toObject(e.segments[i], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && b.dot.Image.encode(e.image, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.corner = e.int32();
              break;
            }
            case 2: {
              i.image = b.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
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
          let n = b.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.EyeGazeLivenessSegment)
          return e;
        let n = new b.dot.v4.EyeGazeLivenessSegment();
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
          n.image = b.dot.Image.fromObject(e.image);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.corner = n.enums === String ? "TOP_LEFT" : 0, r.image = null), e.corner != null && e.hasOwnProperty("corner") && (r.corner = n.enums === String ? b.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : b.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (r.image = b.dot.Image.toObject(e.image, n)), r;
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
        return n || (n = ge.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && b.dot.Image.encode(e.neutralExpressionFaceImage, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.smileExpressionFaceImage != null && Object.hasOwnProperty.call(e, "smileExpressionFaceImage") && b.dot.Image.encode(e.smileExpressionFaceImage, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && b.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.SmileLivenessContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.neutralExpressionFaceImage = b.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.smileExpressionFaceImage = b.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              i.metadata = b.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage")) {
          let n = b.dot.Image.verify(e.neutralExpressionFaceImage);
          if (n)
            return "neutralExpressionFaceImage." + n;
        }
        if (e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage")) {
          let n = b.dot.Image.verify(e.smileExpressionFaceImage);
          if (n)
            return "smileExpressionFaceImage." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = b.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.SmileLivenessContent)
          return e;
        let n = new b.dot.v4.SmileLivenessContent();
        if (e.neutralExpressionFaceImage != null) {
          if (typeof e.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          n.neutralExpressionFaceImage = b.dot.Image.fromObject(e.neutralExpressionFaceImage);
        }
        if (e.smileExpressionFaceImage != null) {
          if (typeof e.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          n.smileExpressionFaceImage = b.dot.Image.fromObject(e.smileExpressionFaceImage);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          n.metadata = b.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = b.dot.Image.toObject(e.neutralExpressionFaceImage, n)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = b.dot.Image.toObject(e.smileExpressionFaceImage, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), o;
  }(), x.Image = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.bytes = W.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = ge.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new b.dot.Image();
      for (; t.pos < n; ) {
        let i = t.uint32();
        switch (i >>> 3) {
          case 1: {
            r.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(i & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || W.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof b.dot.Image)
        return t;
      let e = new b.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? W.base64.decode(t.bytes, e.bytes = W.newBuffer(W.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = W.newBuffer(n.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? W.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, o;
  }(), x.Int32List = function() {
    function o(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.items = W.emptyArray, o.create = function(t) {
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
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new b.dot.Int32List();
      for (; t.pos < n; ) {
        let i = t.uint32();
        switch (i >>> 3) {
          case 1: {
            if (r.items && r.items.length || (r.items = []), (i & 7) === 2) {
              let a = t.uint32() + t.pos;
              for (; t.pos < a; )
                r.items.push(t.int32());
            } else
              r.items.push(t.int32());
            break;
          }
          default:
            t.skipType(i & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.items != null && t.hasOwnProperty("items")) {
        if (!Array.isArray(t.items))
          return "items: array expected";
        for (let e = 0; e < t.items.length; ++e)
          if (!W.isInteger(t.items[e]))
            return "items: integer[] expected";
      }
      return null;
    }, o.fromObject = function(t) {
      if (t instanceof b.dot.Int32List)
        return t;
      let e = new b.dot.Int32List();
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
  }(), x.Platform = function() {
    const o = {}, t = Object.create(o);
    return t[o[0] = "WEB"] = 0, t[o[1] = "ANDROID"] = 1, t[o[2] = "IOS"] = 2, t;
  }(), x.DigestWithTimestamp = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.digest = W.newBuffer([]), o.prototype.timestampMillis = W.Long ? W.Long.fromBits(0, 0, !0) : 0, o.create = function(t) {
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
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new b.dot.DigestWithTimestamp();
      for (; t.pos < n; ) {
        let i = t.uint32();
        switch (i >>> 3) {
          case 1: {
            r.digest = t.bytes();
            break;
          }
          case 2: {
            r.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(i & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || W.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !W.isInteger(t.timestampMillis) && !(t.timestampMillis && W.isInteger(t.timestampMillis.low) && W.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof b.dot.DigestWithTimestamp)
        return t;
      let e = new b.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? W.base64.decode(t.digest, e.digest = W.newBuffer(W.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (W.Long ? (e.timestampMillis = W.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new W.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      if (e.defaults)
        if (e.bytes === String ? n.digest = "" : (n.digest = [], e.bytes !== Array && (n.digest = W.newBuffer(n.digest))), W.Long) {
          let r = new W.Long(0, 0, !0);
          n.timestampMillis = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r;
        } else
          n.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (n.digest = e.bytes === String ? W.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? n.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : n.timestampMillis = e.longs === String ? W.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new W.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, o;
  }(), x;
})();
async function El(x) {
  const { Image: o } = N0, t = await x.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const r = o.verify(n);
  if (r) throw Error(r);
  const i = {};
  return i.bytes = e, o.create(i);
}
async function Nl(x) {
  const { v4: { Metadata: o } } = N0, t = { ...x };
  t.platform = N0.Platform.WEB;
  const e = t, n = o.verify(e);
  if (n) throw Error(n);
  return o.create(e);
}
async function Dl(x) {
  const { Content: o } = N0, { iv: t, key: e, message: n } = await Uu(x), r = { token: new Uint8Array(e), iv: t, schemaVersion: H1, bytes: new Uint8Array(n) }, i = o.verify(r);
  if (i) throw Error(i);
  const a = o.create(r);
  return o.encode(a).finish();
}
function Yl({ documentContent: x, faceContent: o, magnifeyeLivenessContent: t, smileLivenessContent: e }) {
  const { Blob: n } = N0.v4, r = {};
  r.documentContent = x, r.faceContent = o, r.magnifeyeLivenessContent = t, r.smileLivenessContent = e;
  const i = r, a = n.verify(i);
  if (a) throw Error(a);
  const s = n.create(i);
  return n.encode(s).finish();
}
async function Fl(x, o) {
  const { DocumentContent: t } = N0.v4, e = await El(x), n = await Nl(o), r = {};
  r.image = e, r.metadata = n;
  const i = r, a = t.verify(i);
  if (a) throw Error(a);
  const s = t.create(i), c = {};
  return c.documentContent = s, Yl(c);
}
async function Xl(x, o) {
  const t = await Fl(x, o);
  return Dl(t);
}
const Ml = () => {
  const { redfin: x, sunfish: o } = Nr(), { analytics: t } = C1(), { appState: e, freemiumOverlayState: n } = Bn(), { documentCameraOptions: r } = zs(), { cameraFacing: i, onPhotoTaken: a, sessionToken: s, thresholds: c, wasmDirectoryPath: u } = r, { controller: g } = bl(c, u), p = K0(
    ({ content: F, controller: Z, imageData: J }) => {
      bu(Ys.DOCUMENT, Z.getCandidateSelectionImages()), a(J, F);
    },
    [a]
  ), { cameraResolution: l, cameraService: C, detectionDetails: m, videoRef: A } = Ku({
    analytics: t,
    cameraFacing: i,
    controller: g,
    sessionToken: s,
    createProtoMessage: Xl,
    onPhotoTaken: p
  }), { shouldMirror: d } = Wu(Wt.CONTROL, C);
  Au(Wt.CAMERA_PROPS_CHANGED, {
    cameraResolution: l,
    shouldMirror: d
  }), Oe(() => () => {
    ln.getInstance().restart();
  }, []);
  const v = n !== vx.HIDDEN && x !== rr.Higher && l, G = n === vx.VISIBLE, Y = l && o && e === qe.RUNNING;
  return /* @__PURE__ */ H(Ct, { children: [
    v && /* @__PURE__ */ H(Du, { fullOverlay: G, resolution: l }),
    /* @__PURE__ */ H(r1, { ref: A, $isImageMirror: d, $isVisible: o, autoPlay: !0, muted: !0, playsInline: !0 }),
    Y && /* @__PURE__ */ H(
      Vu,
      {
        redfin: x,
        cameraResolution: l,
        detectionDetails: m,
        isImageMirror: d
      }
    )
  ] });
}, jl = ({ ...x }) => /* @__PURE__ */ H(fu, { cameraOptions: x, children: /* @__PURE__ */ H(Ml, {}) });
function Jl({ initAppState: x }) {
  const [o, t] = it(x), [e, n] = it(), [r, i] = it(!1), a = {};
  return a.appState = o, a.setAppState = t, a.error = e, a.setError = n, a.isCameraReady = r, a.setIsCameraReady = i, a;
}
function Ul() {
  const [x] = window.crypto.getRandomValues(new Uint32Array(1));
  return x.toString(3 * 1318 + -2835 + 1103 * -1);
}
function _l() {
  const x = sessionStorage.getItem("dot-user-id");
  if (x) return x;
  const o = Ul();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function Ql(x, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : x;
}
function zl(x) {
  return x > -10714 + -2 * -5387 ? ">1m" : x > 1 * 9669 + -3245 + -6379 ? ">45" : x > 30 ? ">30" : "" + x;
}
const ql = (x) => Math.round(x / 500) * 500 / (3449 * -2 + 9676 + -1778), q0 = (x) => x ? x <= -7 * -1151 + -3532 + 1131 * -4 ? Math.round(x * (5692 + -12 * -58 + -6368 * 1)) / (1 * -9809 + 4117 + -21 * -272) : Math.round(x / (-2527 + -1210 * 2 + 4997)) * (-367 * 13 + -3403 + 8224) : -4155 * -2 + 3980 + 10 * -1229, $l = (x) => Math.round(x * (-1 * -8567 + -5882 + -1 * 2683)) / (3302 + 761 * 3 + -5583);
function eI(x) {
  return x !== qe.RUNNING ? vx.VISIBLE : vx.VISIBLE_WITH_MASK;
}
function tI({ onError: x }) {
  const { appState: o, error: t, isCameraReady: e, setAppState: n, setError: r, setIsCameraReady: i } = Jl({
    initAppState: qe.LOADING
  }), a = eI(o), s = K0(
    (u) => {
      Ia(Wt.STATE_CHANGED, { appState: qe.ERROR, error: u }), i(!1), x(u), r(u), n(qe.ERROR);
    },
    [x, r, n, i]
  ), c = K0(
    (u) => {
      Ia(Wt.STATE_CHANGED, { appState: u }), n(u);
    },
    [n]
  );
  return {
    appState: o,
    freemiumOverlayState: a,
    isCameraReady: e,
    setIsCameraReady: i,
    handleAppStateChange: c,
    handleError: s,
    error: t
  };
}
var Gc = ((x) => (x.AUTO_CAPTURE = "auto-capture", x))(Gc || {});
class nI {
  constructor() {
    M(this, "appKey", "");
    M(this, "deviceId", "");
  }
  async countlyFetch(o) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const n = e, r = "https://innovatrics.count.ly/i?", i = {};
    i.app_key = this.appKey, i.device_id = this.deviceId;
    const a = Jn(i);
    await fetch("" + r + a + "&" + o, n);
  }
  async init(o, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = o;
    const e = { _app_version: Js() }, n = { organization: Us(window.location.href) }, r = Jn({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const t = Jn(o);
    await this.countlyFetch(t);
  }
  async sendAutoCaptureEvent(o, t) {
    const e = {};
    e.key = Gc.AUTO_CAPTURE, e.count = 1, e.dur = t, e.segmentation = o;
    const n = [e], r = Jn({ events: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
}
const zn = new nI();
class xI {
  constructor() {
    M(this, "countly", zn);
  }
  createSegmentation(o) {
    return { appVersion: Js(), ...o };
  }
  init(o) {
    if (tu()) return;
    const t = _l();
    zn.init(t, o);
  }
  endSession() {
    zn.endSession();
  }
  walleye(o, t) {
    const e = {};
    e.nocturne = o, e.customer = t;
    const n = this.createSegmentation(e);
    zn.sendAutoCaptureEvent(n);
  }
}
class oI extends xI {
  trackCaptureProcess({ averageFps: o, captureProcessDurationInMs: t, detection: e, deviceName: n, facingMode: r, imageResolution: i, instructionSet: a }) {
    if (!e) return;
    const s = ql(t), c = this.createSegmentation({ hotspots: q0(e.hotspots), brightness: q0(e.brightness), confidence: q0(e.confidence), sharpness: q0(e.sharpness), smallestEdge: q0(e.smallestEdge), camera: Ql(n, r), imageResolution: i.width + "x" + i.height, averageFps: $l(o), captureTime: zl(s), instructionSet: a });
    this.countly.sendAutoCaptureEvent(c, s);
  }
}
const rI = new oI();
let U;
const Ht = new Array(128).fill(void 0);
Ht.push(void 0, null, !0, !1);
function hr(x) {
  return Ht[x];
}
let dn = Ht.length;
function iI(x) {
  x < 9036 + -25 * -86 + -11054 || (Ht[x] = dn, dn = x);
}
function Oc(x) {
  const o = hr(x);
  return iI(x), o;
}
let Pt = 0, on = null;
function Ix() {
  return (on === null || on.byteLength === 0) && (on = new Uint8Array(U.memory.buffer)), on;
}
const fx = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, aI = typeof fx.encodeInto == "function" ? function(x, o) {
  return fx.encodeInto(x, o);
} : function(x, o) {
  const t = fx.encode(x);
  o.set(t);
  const e = {};
  return e.read = x.length, e.written = t.length, e;
};
function Ex(x, o, t) {
  if (t === void 0) {
    const a = fx.encode(x), s = o(a.length, -1 * -4082 + -776 + -3305 * 1) >>> 46 * 115 + -6814 + -1524 * -1;
    return Ix().subarray(s, s + a.length).set(a), Pt = a.length, s;
  }
  let e = x.length, n = o(e, 431 * -23 + 271 + 9643) >>> -8558 + -778 * -11;
  const r = Ix();
  let i = -1 * 1849 + -997 * 4 + -13 * -449;
  for (; i < e; i++) {
    const a = x.charCodeAt(i);
    if (a > -3781 + 602 * 12 + -3316) break;
    r[n + i] = a;
  }
  if (i !== e) {
    i !== 0 && (x = x.slice(i)), n = t(n, e, e = i + x.length * (-8313 + -93 * 89 + 16593 * 1), 1409 * 3 + 34 * -265 + 23 * 208) >>> 8077 * 1 + -32 * -53 + -9773;
    const a = Ix().subarray(n + i, n + e), s = aI(x, a);
    i += s.written, n = t(n, e, i, 2672 + -23 * -24 + -3223) >>> 7134 + 107 * 32 + 2 * -5279;
  }
  return Pt = i, n;
}
function Zc(x) {
  return x == null;
}
let rn = null;
function Yt() {
  return (rn === null || rn.byteLength === 0) && (rn = new Int32Array(U.memory.buffer)), rn;
}
const mr = {};
mr.ignoreBOM = !0, mr.fatal = !0;
const Hc = typeof TextDecoder < "u" ? new TextDecoder("utf-8", mr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Hc.decode();
function br(x, o) {
  return x = x >>> -9746 + 101 * 68 + -2 * -1439, Hc.decode(Ix().subarray(x, x + o));
}
function Ar(x) {
  dn === Ht.length && Ht.push(Ht.length + (-1 * -4463 + 3228 + -7690 * 1));
  const o = dn;
  return dn = Ht[o], Ht[o] = x, o;
}
let an = null;
function Rc() {
  return (an === null || an.byteLength === 2813 + -6085 * -1 + -2966 * 3) && (an = new Uint32Array(U.memory.buffer)), an;
}
function Ha(x, o) {
  const t = o(x.length * 4, 4) >>> 0, e = Rc();
  for (let n = 8888 + -7669 * -1 + -3 * 5519; n < x.length; n++)
    e[t / (-2943 + -1039 * 9 + 12298) + n] = Ar(x[n]);
  return Pt = x.length, t;
}
function Ra(x, o) {
  x = x >>> 9853 + -42 * 85 + -6283;
  const t = Rc(), e = t.subarray(x / (5143 * -1 + -206 * -15 + 2057), x / (3463 + 1 * -3459) + o), n = [];
  for (let r = -9162 + 123 * -19 + 1 * 11499; r < e.length; r++)
    n.push(Oc(e[r]));
  return n;
}
function sI(x, o) {
  const t = Ex(x, U.__wbindgen_malloc, U.__wbindgen_realloc), e = Pt, n = Ex(o, U.__wbindgen_malloc, U.__wbindgen_realloc), r = Pt, i = U.is_mobile_supported(t, e, n, r);
  return qr.__wrap(i);
}
const yr = {};
yr.register = () => {
}, yr.unregister = () => {
};
const Ka = typeof FinalizationRegistry > "u" ? yr : new FinalizationRegistry((x) => U.__wbg_licensevalidationresult_free(x >>> -1103 + -1103 * -1));
class qr {
  static __wrap(o) {
    o = o >>> -484 + 44 * 11;
    const t = Object.create(qr.prototype);
    return t.__wbg_ptr = o, Ka.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = -9689 * -1 + -358 * 17 + -3603, Ka.unregister(this), o;
  }
  free() {
    const o = this.__destroy_into_raw();
    U.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, n) {
    var r = Zc(t) ? 0 : Ex(t, U.__wbindgen_malloc, U.__wbindgen_realloc), i = Pt;
    const a = Ha(e, U.__wbindgen_malloc), s = Pt, c = Ha(n, U.__wbindgen_malloc), u = Pt, g = U.licensevalidationresult_new(o, r, i, a, s, c, u);
    return this.__wbg_ptr = g >>> 8513 + 5451 * -1 + -3062, this;
  }
  get is_valid() {
    return U.licensevalidationresult_is_valid(this.__wbg_ptr) !== -9565 + 1244 * 5 + 5 * 669;
  }
  get features_json() {
    try {
      const e = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = Yt()[e / (-9620 + -1 * -9624) + 0], t = Yt()[e / (-659 * -9 + -7903 + 1976) + (3137 * -2 + 6598 + -323)];
      let n;
      return o !== -491 * 1 + 1 * -3833 + 4324 && (n = br(o, t).slice(), U.__wbindgen_free(o, t * 1, -622 + -1 * 4691 + 5314)), n;
    } finally {
      U.__wbindgen_add_to_stack_pointer(-11 * -518 + 8956 + -14638);
    }
  }
  get errors() {
    try {
      const n = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_errors(n, this.__wbg_ptr);
      var o = Yt()[n / (-8425 + 1302 * 6 + 617) + (-1 * -4051 + 3 * 1195 + -7636)], t = Yt()[n / (111 * -62 + -11 * -735 + -1199) + 1], e = Ra(o, t).slice();
      return U.__wbindgen_free(o, t * (9166 + 33 * 127 + -13353), -6748 + -25 * 30 + 7502), e;
    } finally {
      U.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get warnings() {
    try {
      const n = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var o = Yt()[n / (-1642 * -3 + 8063 * 1 + -12985) + (7688 * 1 + 9963 + -19 * 929)], t = Yt()[n / (-2 * 4219 + 4491 + 3951) + (-9077 * -1 + 8429 + -1 * 17505)], e = Ra(o, t).slice();
      return U.__wbindgen_free(o, t * (4838 + 4365 * -1 + -469), -30 * 232 + 9 * -414 + 10690), e;
    } finally {
      U.__wbindgen_add_to_stack_pointer(2103 * 4 + 52 + -8448);
    }
  }
}
async function cI(x, o) {
  if (typeof Response == "function" && x instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(x, o);
    } catch (e) {
      if (x.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
      else throw e;
    }
    const t = await x.arrayBuffer();
    return await WebAssembly.instantiate(t, o);
  } else {
    const t = await WebAssembly.instantiate(x, o);
    if (t instanceof WebAssembly.Instance) {
      const e = {};
      return e.instance = t, e.module = x, e;
    } else return t;
  }
}
function gI() {
  const x = {};
  return x.wbg = {}, x.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Ar(/* @__PURE__ */ new Date());
  }, x.wbg.__wbg_getTime_2bc4375165f02d15 = function(o) {
    return hr(o).getTime();
  }, x.wbg.__wbindgen_object_drop_ref = function(o) {
    Oc(o);
  }, x.wbg.__wbindgen_string_get = function(o, t) {
    const e = hr(t), n = typeof e == "string" ? e : void 0;
    var r = Zc(n) ? -1264 * 1 + -7323 * -1 + -6059 : Ex(n, U.__wbindgen_malloc, U.__wbindgen_realloc), i = Pt;
    Yt()[o / (-257 * 1 + -4465 + 4726) + (8783 * 1 + -168 * -7 + -766 * 13)] = i, Yt()[o / (1192 + -1399 * 2 + 1610) + (5480 + -352 * 7 + -3016)] = r;
  }, x.wbg.__wbindgen_string_new = function(o, t) {
    const e = br(o, t);
    return Ar(e);
  }, x.wbg.__wbindgen_throw = function(o, t) {
    throw new Error(br(o, t));
  }, x;
}
function dI(x, o) {
  return U = x.exports, Kc.__wbindgen_wasm_module = o, rn = null, an = null, on = null, U;
}
async function Kc(x) {
  if (U !== void 0) return U;
  typeof x > "u" && (x = new URL("dot_embedded_bg.wasm", import.meta.url));
  const o = gI();
  (typeof x == "string" || typeof Request == "function" && x instanceof Request || typeof URL == "function" && x instanceof URL) && (x = fetch(x));
  const { instance: t, module: e } = await cI(await x, o);
  return dI(t, e);
}
function Pa(x, o, t, e, n) {
  return ke(t - 307, e);
}
function ke(x, o) {
  const t = Nx();
  return ke = function(e, n) {
    e = e - 242;
    let r = t[e];
    if (ke.HJuSdj === void 0) {
      var i = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = p.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, p) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + p.charCodeAt(d % p.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      ke.hHaPJy = u, x = arguments, ke.HJuSdj = !0;
    }
    const a = t[-4633 + -17 * -563 + -3 * 1646], s = e + a, c = x[s];
    return c ? r = c : (ke.CMeljm === void 0 && (ke.CMeljm = !0), r = ke.hHaPJy(r, n), x[s] = r), r;
  }, ke(x, o);
}
(function(x, o) {
  function t(a, s, c, u, g) {
    return ke(c - 221, a);
  }
  function e(a, s, c, u, g) {
    return ke(a - -26, s);
  }
  const n = x();
  function r(a, s, c, u, g) {
    return ke(c - -921, a);
  }
  function i(a, s, c, u, g) {
    return ke(c - 521, g);
  }
  for (; ; )
    try {
      if (-parseInt(i(777, 815, 793, 822, "mrXr")) / 1 + -parseInt(t("QC6W", 544, 515, 527, 523)) / 2 * (-parseInt(e(251, "u5@4", 238, 252, 237)) / 3) + -parseInt(t("5s@S", 492, 484, 511, 499)) / 4 * (-parseInt(r("inWE", -640, -636, -651, -617)) / 5) + -parseInt(r("u#IH", -677, -666, -649, -670)) / 6 * (parseInt(e(238, "cH7@", 230, 222, 225)) / 7) + -parseInt(e(258, ")$U&", 289, 273, 282)) / 8 * (parseInt(i(831, 842, 812, 842, "n5I0")) / 9) + -parseInt(i(835, 816, 821, 829, "!6XP")) / 10 * (-parseInt(e(220, "4#Zn", 235, 233, 218)) / 11) + parseInt(r("j&4Q", -641, -620, -593, -625)) / 12 * (parseInt(t("AMZ(", 482, 478, 460, 460)) / 13) === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Nx, 72166 + 1601 * 39);
function Nx() {
  const x = ["WOySW5JdJSkh", "hNXIiZq", "W4WEW4r8W6a", "W70xDSo7wH/dKG", "W6fqDmkjWOG", "W4noxH5q", "W5irW5f+W5S", "W7i7cCkoDG", "BCkXkCkaWQm6ksjge8kI", "agFcQ8kYeW", "h8kQaCoDxmoEzY86qx50", "WP5it1uLc8kKW4q", "WOtdVLBcJSoW", "m8oNDSoBW60", "WPapeWddJIJdT8kk", "zSoXbCkLW4C", "W7JdHN3cNNy", "W5hdVgpcJSoqWQCo", "oef7WPyq", "cmotW6BdNXu", "aaZcJXafW6BdGIv9WQCG", "DmkjDJO", "ba3cHbaiWOFdHcXkWQCOWOa", "W47cNLS+WPa", "W7H1W4PAWPpdQgjP", "rJmRWOxcNq", "W7H4WPLXWRhdHN9oWOW", "o8kQnSkHW7rBW6fc", "weJcVMO", "BvnptCo+", "d8kaWRRdVmkECCkud8kXWOFcVG", "dqbPjSoX", "f8kgESk+WQa", "W5ezCwaV", "A8k0kmkhWQjybHjujCkGW68", "W4GygsddRG", "W7Pmp8okDYxdLSo+FG", "W4ODy34d", "pSkUr8oZWPDAW4rWlaNcGa", "emoHFZq0", "v8kNWPpcV0q", "W5PmWPStWRRdSIFcTtlcH8oF", "W4Stcc3dQW", "W6CeW4PHi8kJufzjkh/dIa", "nvHcvmo8W5dcHW", "fqWcWQxdKHKaW67dSb/dRG", "WR4lmSovW5XIWRy3cKldTWK", "x8kWqqe+WPTDWQm", "cmoxW6JdM0W", "dCo0nmogr1e0", "oCk1eCkUWR0", "WQ3cMt3dSYVdNWSnuxH6", "WOfZtfHCWPL8zG", "W4KtbIhdRG", "m8o1tCotW6q", "WRLtWOy6Dq", "aCoEWR3cMIe", "WPGkWQddVSod", "CWj3WPWq", "WPromZ9Ex8kqW4ZcOtddISkl", "W6ldLsJcMSk6W7ldVSk9F2FcHW", "W5tcKfO2W7K"];
  return Nx = function() {
    return x;
  }, Nx();
}
function qn(x, o, t, e, n) {
  return ke(o - -215, n);
}
function Ko(x, o, t, e, n) {
  return ke(x - -197, t);
}
function Po(x, o, t, e, n) {
  return ke(n - -31, t);
}
function $n(x, o, t, e, n) {
  return ke(o - -438, x);
}
var La;
class uI {
  constructor() {
    M(this, La, !1);
  }
  async [(La = Ko(54, 45, "L27U") + Ko(77, 107, "Cv(N") + qn(41, 50, 71, 43, "$]Dp"), $n("BOfl", -143))](o = Po(278, 228, "Mv0D", 231, 252)) {
    function t(a, s, c, u, g) {
      return qn(a - 492, u - -303, c - 238, u - 155, a);
    }
    function e(a, s, c, u, g) {
      return Po(a - 251, s - 455, a, u - 483, c - -151);
    }
    function n(a, s, c, u, g) {
      return $n(a, s - 1373);
    }
    function r(a, s, c, u, g) {
      return Pa(a - 6, s - 94, c - 314, a);
    }
    function i(a, s, c, u, g) {
      return Pa(a - 377, s - 457, c - 100, s);
    }
    try {
      const a = o + "/" + T1;
      await Kc(a), this[t("8#G1", -224, -226, -238, -210) + i(668, "$]Dp", 661, 632, 660) + i(725, "j&4Q", 696, 693, 704)] = !0;
    } catch {
      this[r("C5R%", 914, 918) + e("XcHX", 107, 96, 109) + e("n5I0", 108, 104, 122)] = !1, console[n("MEqu", 1237)](e("5s@S", 102, 108, 125) + n("$]Dp", 1182) + r("m7y9", 879, 873) + i(653, "GC43", 651) + e("Z0A!", 64, 78, 109) + i(671, "4#Zn", 694) + i(648, "e&Y0", 669) + e("$@qq", 94, 93, 74) + r("R*j!", 893, 889) + i(674, "inWE", 656) + n("E*br", 1227) + e("E*br", 60, 88, 112) + t(")5vK", -250, -263, -237) + e("P^Zy", 125, 97, 79) + e("i[Mm", 58, 61, 79) + t("C5R%", -223, -266, -245) + i(711, "8#G1", 683) + n("u#IH", 1202) + "n.");
    }
  }
  [$n("4#Zn", -172) + Po(276, 241, "90!3", 237, 268) + Ko(72, 56, "$4Bw") + "ed"]() {
    function o(n, r, i, a, s) {
      return $n(s, i - 1246);
    }
    function t(n, r, i, a, s) {
      return qn(n - 195, s - -751, i - 420, a - 219, n);
    }
    function e(n, r, i, a, s) {
      return qn(n - 12, r - 217, i - 80, a - 298, n);
    }
    return this[o(1047, 1022, 1053, 1056, "inWE") + e("MeVb", 305, 283, 325) + t("R*j!", -700, -679, -685, -673)];
  }
}
class Vo extends Error {
  constructor() {
    super(...arguments);
    M(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function Dx() {
  var x = ["eSo2WRbDuW", "keiZWPZdMG", "f8o+WOSiW5S", "oHbdl8oR", "u8k4W5WfWOS", "WP45WPHdza", "lbrqkmo7", "esvlgtC", "r0RdN8o5dW", "dCkkmZ4", "k1uGWOFdNq", "WRatWOTJW40", "dK3dLfnL", "h8o9WOZdGgG", "WRNcNZe", "hmoRWOO", "tCkUw8k8cSk5WOi", "thjfkrxdO8krWQ8", "sehdHmoJhW", "W5iiWOhcKmojW6ddL8oFadCiW5yq", "e0RdNhLE", "wSoCW5yPs0GkW5W", "WR/dL2bDEG", "Dmo/WPJcTxq", "uCoCW44", "DSkEWPiiWOq", "fmoRW4C6WPxdNsqg", "WRZdGM5BEW", "WQVdIJ4", "xSkYy2VcHa", "peiHWRFdHq", "qmkkWQpcOmoxW4qx", "zmk0WOGAWOy", "p8oss8kTyCkJWOWWmfnGduej", "W7C+W67dSmol", "mxZcMmoCW4q", "WQbeW7/dRLy6fmoWx8oIW7pdUq", "Dmo/WO/cUNK", "WP/dLSkUWRStn0nrW7XNW6FdKW", "r8kKW5NcOY/cJmkPWRzNWRaOFCon", "bSkeWOG", "W5tcVtPtxCoBjhZcSCofW54BWRu", "f8knWO/dVSkiBmoHub1+sCkphW", "W6BdIhpdJ3JdJ39CpbbvW7i2W6a", "nmoUW4TmW5ddLJnyjeDDh8kt", "WQ1QWQ7cPmktW4JdHuVcUL8J", "WPXAW4FdJCkr", "WOjiW6RdLCkz", "nfbGnSkEcaVcS8o8W4zrDeu", "smkIW7ajc8oApCoMWPVcKu0", "r8kJW5VcPY7cJCkLW4fGWPKcy8oNWRa", "WR5zW6pdTSkuWRNdOSom", "d8kdW6O", "W68oW4/dUSkL", "WRZdIIrymG", "yhNdKSocaa", "WO3cLx/dO2S", "wZnkW7RdSeBdNSo2B8kGWRhdU3RdRa", "z8k2WP4F"];
  return Dx = function() {
    return x;
  }, Dx();
}
function ce(x, o) {
  var t = Dx();
  return ce = function(e, n) {
    e = e - (55 * -138 + 7564 + 356);
    var r = t[e];
    if (ce.PyBfgJ === void 0) {
      var i = function(g) {
        for (var p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", C = "", m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = p.indexOf(d);
        for (var G = 0, Y = l.length; G < Y; G++)
          C += "%" + ("00" + l.charCodeAt(G).toString(16)).slice(-2);
        return decodeURIComponent(C);
      }, a = function(g, p) {
        var l = [], C = 0, m, A = "";
        g = i(g);
        var d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + p.charCodeAt(d % p.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (var v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      ce.iDnDmu = a, x = arguments, ce.PyBfgJ = !0;
    }
    var s = t[-5 * -1129 + -9535 + 3890], c = e + s, u = x[c];
    return u ? r = u : (ce.WgSKRL === void 0 && (ce.WgSKRL = !0), r = ce.iDnDmu(r, n), x[c] = r), r;
  }, ce(x, o);
}
function To(x, o, t, e, n) {
  return ce(n - 671, x);
}
(function(x, o) {
  function t(c, u, g, p, l) {
    return ce(u - -356, g);
  }
  function e(c, u, g, p, l) {
    return ce(c - -586, p);
  }
  function n(c, u, g, p, l) {
    return ce(c - 939, p);
  }
  function r(c, u, g, p, l) {
    return ce(u - -506, c);
  }
  function i(c, u, g, p, l) {
    return ce(u - 58, c);
  }
  for (var a = x(); ; )
    try {
      var s = -parseInt(n(1296, 1299, 1326, "MyBu", 1301)) / 1 * (-parseInt(n(1324, 1333, 1335, "^T0^", 1345)) / 2) + -parseInt(e(-208, -230, -229, "QWZc", -235)) / 3 + -parseInt(i("H!5E", 433, 412, 421, 431)) / 4 * (-parseInt(e(-234, -229, -208, "G5VG", -256)) / 5) + parseInt(r("]ZOE", -127, -102, -99, -102)) / 6 + parseInt(n(1311, 1341, 1302, "BD72", 1340)) / 7 * (-parseInt(t(22, -3, "9lJL", -27, 8)) / 8) + -parseInt(i("H!5E", 444, 449, 436, 426)) / 9 + parseInt(t(23, -1, "LCdE", -22, 6)) / 10;
      if (s === o) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Dx, 853983);
function $0(x, o, t, e, n) {
  return ce(e - -671, x);
}
function Va(x, o, t, e, n) {
  return ce(e - 927, t);
}
function ex(x, o, t, e, n) {
  return ce(x - 323, o);
}
function v0(x, o, t, e, n) {
  return ce(n - 524, o);
}
var Z0;
class Ta {
  constructor(o) {
    Re(this, Z0);
    this[t("Qhel", 105, 131, 132) + i(915, "FbOU", 916, 901, 928)] = o;
    function t(a, s, c, u, g) {
      return ce(u - -233, a);
    }
    function e(a, s, c, u, g) {
      return ce(g - 417, a);
    }
    function n(a, s, c, u, g) {
      return ce(a - -338, c);
    }
    function r(a, s, c, u, g) {
      return ce(s - 764, c);
    }
    function i(a, s, c, u, g) {
      return ce(g - 598, s);
    }
    try {
      ye(this, Z0, o[n(1, -9, "Xpn0", -13, 21) + e("N*&O", 791, 759, 759, 783) + r(1112, 1128, "&S!Z", 1137, 1154)] && JSON[n(4, 14, "Xpn0", -22, -2)](o[n(20, 8, "1k0h", 14, 21) + n(3, -17, "BpCC", 29, 26) + t("tCBX", 130, 131, 143, 154)]));
    } catch (a) {
      console[r(1124, 1109, "3R*M")](a);
    }
  }
  get [$0("*ayn", -291, -300, -312) + "id"]() {
    function o(e, n, r, i, a) {
      return $0(i, n - 25, r - 335, e - 1110);
    }
    function t(e, n, r, i, a) {
      return $0(e, n - 296, r - 93, n - 259);
    }
    return this[o(786, 802, 761, "fpBJ") + o(775, 770, 772, "^T0^")][t("LCdE", -29, -55) + o(827, 836, 833, "MyBu")];
  }
  get [v0(881, "N*&O", 864, 849, 870) + "s"]() {
    function o(e, n, r, i, a) {
      return v0(e - 176, e, r - 319, i - 210, r - -885);
    }
    function t(e, n, r, i, a) {
      return $0(r, n - 28, r - 156, e - 381);
    }
    return this[t(43, 15, "yF6I") + o("9lJL", -35, -18, -17)][t(48, 67, "GTab") + "s"];
  }
  get [ex(694, "Espk") + ex(673, "]ZOE")]() {
    function o(e, n, r, i, a) {
      return v0(e - 483, i, r - 246, i - 239, n - -241);
    }
    function t(e, n, r, i, a) {
      return v0(e - 86, i, r - 288, i - 75, e - -1429);
    }
    return this[t(-551, -553, -567, "Py6*") + t(-535, -551, -525, "(zDI")][o(649, 665, 660, "LCdE") + o(621, 634, 604, "GTab")];
  }
  get [To("&S!Z", 1013, 1024, 994, 1002) + "b"]() {
    return z(this, Z0);
  }
  get [ex(696, "*ayn") + To("Py6*", 1004, 1025, 1029, 1015) + v0(859, "Ggy#", 894, 881, 885) + $0("Ggy#", -320, -365, -336)]() {
    var i, a;
    function o(s, c, u, g, p) {
      return To(g, c - 379, u - 474, g - 281, c - -280);
    }
    function t(s, c, u, g, p) {
      return Va(s - 411, c - 115, s, u - -1871);
    }
    function e(s, c, u, g, p) {
      return v0(s - 318, g, u - 220, g - 140, p - -1315);
    }
    function n(s, c, u, g, p) {
      return Va(s - 343, c - 436, u, s - -667);
    }
    function r(s, c, u, g, p) {
      return ex(g - -394, p);
    }
    return !!((a = (i = z(this, Z0)) == null ? void 0 : i[e(-461, -473, -456, "N*&O", -454) + r(297, 296, 264, 289, "QWZc")]) != null && a[r(278, 251, 262, 269, "nO5A") + n(609, 630, "H!5E") + r(284, 267, 282, 297, "Ggy#") + r(295, 298, 288, 285, "2x)$") + o(747, 754, 780, "1k0h") + e(-429, -453, -429, "2x)$", -443) + t("*uRf", -599, -612) + "d"]);
  }
}
Z0 = new WeakMap();
function Lt(x, o, t, e, n) {
  return Ge(n - 47, e);
}
(function(x, o) {
  function t(i, a, s, c, u) {
    return Ge(a - -81, u);
  }
  function e(i, a, s, c, u) {
    return Ge(c - -2, a);
  }
  function n(i, a, s, c, u) {
    return Ge(a - -307, c);
  }
  const r = x();
  for (; ; )
    try {
      if (-parseInt(n(262, 277, 332, "MNJl", 245)) / 1 + -parseInt(n(265, 288, 254, "UhUx", 235)) / 2 + -parseInt(n(255, 257, 151, "j7Jo", 342)) / 3 * (parseInt(t(531, 500, 502, 453, "Js!0")) / 4) + -parseInt(t(476, 372, 398, 335, "*E43")) / 5 * (parseInt(e(400, "Rzhc", 524, 489, 443)) / 6) + -parseInt(n(270, 185, 210, "Zo2V", 182)) / 7 * (-parseInt(t(494, 391, 390, 499, "6WYo")) / 8) + parseInt(e(574, "aPm!", 597, 554, 567)) / 9 + parseInt(t(284, 341, 259, 249, "$7ax")) / 10 === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Yx, -2 * -489691 + -487055 + 75019);
function qt(x, o, t, e, n) {
  return Ge(t - 514, e);
}
function ut(x, o, t, e, n) {
  return Ge(n - -710, x);
}
function je(x, o, t, e, n) {
  return Ge(e - -963, n);
}
function Ge(x, o) {
  const t = Yx();
  return Ge = function(e, n) {
    e = e - (-11 * 173 + -6997 + -50 * -186);
    let r = t[e];
    if (Ge.gJiGDl === void 0) {
      var i = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = p.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, p) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + p.charCodeAt(d % p.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      Ge.RMRDmc = u, x = arguments, Ge.gJiGDl = !0;
    }
    const a = t[5039 + -905 * 7 + 1296 * 1], s = e + a, c = x[s];
    return c ? r = c : (Ge.UNPttz === void 0 && (Ge.UNPttz = !0), r = Ge.RMRDmc(r, n), x[s] = r), r;
  }, Ge(x, o);
}
function We(x, o, t, e, n) {
  return Ge(x - 946, e);
}
function Yx() {
  const x = ["W5XWACoQW4pdT8ootxm/W5JcRq", "h13dPq", "fNujaxS", "WOTLW4SSW4S", "b8k0rmkoW60", "W4pcT0/dRbq", "hsJcU8kEWOO", "WOhcOw4FW5C", "W6SFkSkmmW", "nIWKW4NcRG", "e8kbWR8VmG", "W6tdTc9TWRZdMSkgW5FcH3hcRxxdJG", "WOHVW4SQW5m", "CmkRCLlcUSkJm0W", "WPCCWRb+", "pmo4bSk7WQ8", "WRDkW49dra", "CSkPFgNdOG", "WPDnW6e", "aCklnMPj", "daJcS8kxWQK", "WR9hDSkLjW", "h8o5b8kvWRy", "WPVcQJCyW4i", "WRbAEmkYga", "emkiWRGzpq", "hwm6bg0", "BCktW4KiWR0", "BSkYW6DRqG", "AHhdRwfs", "mCkCWP82eG", "W64yimkD", "WQyEW41jva", "WOS3iSk1WOq", "WRBdNmkcW5ee", "a1/dPCokW5a", "WPWQiG", "W4zVWQH3", "W4DHWQb9WOu", "C8kHdSkuW4xcRCoZW4XQdG07uSk/", "D3nfW5fQ", "WR3cPgm/W6u", "A8k5h8otWRaAvZtcOsv+WOi", "Dc8VW5JcPq", "cSkVx8kuW78", "o2lcN0hcIW", "W6atpCkTmG", "WRldUL01DW", "bmkJWPizWQ8", "vmoAacbg", "WQhcJf4OW5O", "gftdSmo6", "DNjcW7eN", "l8kWWQa9WOa", "W6D6ESo3W6RdT1ldMCogW7pdUHZcS8kU", "fSklWPCcoW", "WQpcPhS1W6K", "zSojacfD", "mSoMk8oeva", "rxXfW5LQ", "jSo0tmoOWP0", "WRxdNKBcLMa", "WRZcQ3eZ", "WQlcPguY", "EmkPBu3dTW", "AmkoW5q+WQ8", "gvVdOSo2W5i", "W6ulA2W", "WOBdSvNcMvK", "rWRcRSkTW7NcM8kBEMFdIW", "fexcM17cRq", "WRddTe0", "FNrvW5eK", "W6FcV1JdQHi", "AtVcMZBcGG", "bmoHC2JcNG", "WQixcSk3WOu", "WRCeW5jjea", "WPK7W7GPW7ZdR8kdFH/dT8o8Da", "W7ldUSo7imkF", "W4DNWQj8WQC", "oglcIeS", "mNNcJKVcLW", "dCkGWOqIjG", "WQP+q8kymW", "pgBdIMldMZHiW5xcPuFdMSkq", "WOJcOmoAp8k8W5y1eG", "aSk8WQKrjG", "WR8JW49fra", "WRNdVSk5W4OS", "j8ksWPf7", "WR/dHeCJxW", "WRVcTNjYW6e", "W57cOru+WOS", "WR3dVfaKAW", "W4pcLmkXp8oB", "D8kZFvJdRa", "psCMW4i", "pKuBfuO", "WOLUW4WkWP4", "WOpdLMBcSKC", "W5ddTmoR", "W4dcVa5OWOS", "pmoRg8k+WQm", "x8oTcmoFW4/dHmo7WPZdOae", "mSkYWQWWFW", "WRZcPhS1W7C", "W7exjCkaoq", "DSonbGTB", "WRWLiG", "g8kpWR8vFa", "WQJdPvKBsG", "WOmlWR0+W5W", "nsuSW77cRG", "WQhdGxZcQv8", "imkfWPOMWR4", "WQpdMuKiwq", "A8k1W7TH", "fmoYoSoRqq", "WQ5AAW", "n3q/i1a", "W43cUu7dOrG", "pupdISohW4u", "W4xcVeddI8oxW6evW5y", "nuhdINvSW51uW7i", "W68akmoKyfTWW6qDeSksWOaQ", "iXtdP3Pp", "WPndW7lcVCkM", "WO9LW5eCW5S", "bKVdMSopWOS", "t8kzigveeSkZ", "vCk6W69GtW", "abNcPmkwWQG", "e8kynMTs", "WOPLW54BW4S", "WR1wBq", "a3NdMCoGW7y", "W7ldOmo8W7j6", "aSo3u0hcOG", "lCkSW7X9sW", "l8o4bSk+WRu", "ySktW5u", "iSokkg1d", "W4JcPftdVa8", "WONcP3tdJXu", "WRFdOgeMEa", "WPldIwO", "y8ktW4G5WRi", "WOtdPuhdRCoK", "kCoVvmkv", "cmkPvCkRW6u", "WRBdTmk0W5G9", "kmo/uCoq", "lSksWOC", "WObPW4ukW5O", "f1/dOSo2W5i", "WRLhA8k5jG", "oKBcUJ4wWRLuW5tdJ1JcPx4", "WPZdPuFdVCoP", "WROlW5vpwa", "iSoTgG", "eCohomopCG", "ur3cTZ/cHa", "mKpcSd4qWROYW5pdPvdcUK9p", "pmoSka", "WOzkW41fuW", "mCoGoW", "lCo6yMlcGG", "WQjVWP8RW7e", "bCkfkG", "nSoAAvBcTG", "WR8pW5m", "hvxdSCoqW4G", "W5pcOq9QWPa", "gSkQWQCiBG", "CtZdQwje", "W6yclmkLna", "e2xdGCooWOK", "yYdcNty", "D8onbIXC", "cJdcGuFcMG", "gN8zrxC", "W6Oximkh", "mCoJsa", "WR9OtMXC", "WRVdOuW/AW", "W5dcLmk3iSoC", "o8knWPuReG", "WO3cPSkPD8ofWRrxpCoOtmk0WQ9J", "g8oRg8kJWQ8", "DCo+kM1J", "W6SFlq", "pwlcGL3cIG", "W7ldK1VcLM0", "wSkPlMJdJa", "dmkVqSkiW74", "W5BcU2xdGbvAW6S", "oZdcG0hcJq", "AmkjW4G5WRm", "g8oMDxxcNq", "mSoLv8ojWPe", "W7yfBuD2", "gmknnW", "WRFdQ1VdVh8", "BSkYW75Rsa", "E8o0og14", "WRBcOhKVW6G", "WQRdNKdcM2e", "if8Icxy", "zSkJFxpdQq", "W41HWRnCWQG", "WR/dVLS", "WOfQimkUWRG", "WOBdVviSW5SutfpcVg9uWRe", "WQ9ADW", "WPWfWOfOFW"];
  return Yx = function() {
    return x;
  }, Yx();
}
var Ea, Na;
class lI {
  constructor(o) {
    M(this, Na);
    M(this, Ea);
    function t(e, n, r, i, a) {
      return Ge(r - 43, a);
    }
    this[t(558, 519, 463, 409, "CIF^") + t(440, 393, 469, 452, "562k") + "d"] = o;
  }
  async [(Na = ut("CIF^", -313, -271, -166, -270) + "se", Ea = qt(826, 893, 926, "6WYo") + ut("6j)*", -282, -304, -369, -276), qt(1074, 1215, 1129, "co^v"))](o = qt(931, 937, 1021, "RM&9"), t = We(1507, 1440, 1539, "Zs5G") + We(1406, 1412, 1325, "UhUx") + "ic") {
    function e(s, c, u, g, p) {
      return ut(g, c - 228, u - 297, g - 312, u - 686);
    }
    function n(s, c, u, g, p) {
      return We(u - -641, c - 1, u - 20, g);
    }
    function r(s, c, u, g, p) {
      return ut(g, c - 328, u - 119, g - 131, p - 1593);
    }
    function i(s, c, u, g, p) {
      return je(s - 244, c - 329, u - 9, s - 665, u);
    }
    function a(s, c, u, g, p) {
      return qt(s - 133, c - 330, u - -171, p);
    }
    await Promise[a(723, 920, 824, 720, "8WAO") + n(764, 674, 705, "u]H!")]([this[a(1002, 879, 912, 927, "OX0Z") + i(254, 241, "gqv]") + "d"][e(533, 436, 496, "SwHu")](o), this[a(932, 921, 951, 872, "14mh") + n(803, 993, 909, "KRFq") + "e"](t)]), this[r(1272, 1353, 1266, "co^v", 1358) + a(843, 838, 861, 772, "6WYo") + n(907, 828, 879, "UhUx")]();
  }
  async [ut("6j)*", -163, -243, -272, -187) + We(1393, 1453, 1321, "aPm!") + "se"](o) {
    var a;
    function t(s, c, u, g, p) {
      return We(s - -1789, c - 438, u - 258, g);
    }
    function e(s, c, u, g, p) {
      return je(s - 237, c - 192, u - 267, g - 1703, u);
    }
    function n(s, c, u, g, p) {
      return Lt(s - 55, c - 270, u - 49, u, c - 183);
    }
    function r(s, c, u, g, p) {
      return ut(s, c - 499, u - 358, g - 253, u - -187);
    }
    function i(s, c, u, g, p) {
      return Lt(s - 20, c - 218, u - 44, c, s - -573);
    }
    try {
      if (t(-377, -407, -461, "znmX", -326) !== e(1181, 1170, "HlCp", 1178, 1190)) throw new _0x20074c(t(-272, -343, -355, "DW$J", -311) + i(87, "Zo2V", 102, 165, -17) + e(1233, 1304, "u]H!", 1340, 1380) + e(1055, 1257, "8WAO", 1151, 1256) + "d.");
      {
        const s = await fetch(o);
        if (!s.ok)
          if (e(1309, 1244, "aWWh", 1334, 1409) === t(-301, -196, -247, "1cq@", -341)) {
            _0x315c8a instanceof _0x48f6f7 ? _0x57e455[n(858, 762, "562k", 772, 847)]() : _0x115ea0 instanceof _0x224b51 && _0x6b5284[r("MNJl", -490, -496, -437, -601)](_0x54fadf);
            const c = {};
            c[r("J7FE", -434, -384, -304, -403) + r("co^v", -282, -338, -343, -445)] = !1, c[i(-25, "6@2b", -65, -60, -26) + "s"] = [], c[r("UkGl", -463, -472, -528, -504) + t(-258, -344, -347, "6j)*", -169)] = [], c[e(1280, 1286, "eyFM", 1242, 1263) + n(528, 633, "6j)*", 727, 660) + n(734, 767, "6@2b", 860, 794)] = void (2185 * 1 + -8952 + 101 * 67), c[r("HlCp", -367, -448, -370, -488)] = function() {
            }, this[r("uQyH", -339, -414, -470, -413) + e(1278, 1266, "WJ58", 1329, 1225)] = new _0x494bd2(c);
          } else throw new Error(i(45, "DW$J", 17, -36, 117) + n(841, 785, "aWWh", 844, 769) + i(39, "HlCp", -43, -44, 127) + t(-349, -400, -330, "Zo2V", -417) + "d.");
        this[e(1094, 1205, "HlCp", 1190, 1237) + "se"] = await s[n(799, 747, "^QV@", 710, 709)]();
      }
    } catch (s) {
      if (e(1318, 1285, "562k", 1269) !== t(-357, -307, -304, "562k")) this[r("X3*I", -406, -362, -458) + "se"] = void (-11601 + -3867 * -3), console[t(-290, -334, -339, "J7FE")](s);
      else {
        const c = _0xd89c70[i(-10, "Rzhc", -40)](this[i(66, "co^v", 81) + "se"]);
        return (a = c == null ? void 0 : c[t(-381, -328, -400, "J7FE") + t(-309, -354, -325, "562k")]) == null ? void 0 : a[n(632, 694, "$Si$") + i(-5, "uQyH", 32)];
      }
    }
  }
  async [ut("#HxC", -358, -391, -246, -304) + We(1501, 1586, 1438, "aWWh") + "e"](o) {
    function t(a, s, c, u, g) {
      return We(s - -1371, s - 79, c - 54, c);
    }
    function e(a, s, c, u, g) {
      return ut(s, s - 358, c - 85, u - 480, u - 542);
    }
    function n(a, s, c, u, g) {
      return Lt(a - 31, s - 406, c - 391, a, s - 329);
    }
    this[e(284, "WJ58", 430, 343) + n("UhUx", 785, 768)] = void (-4328 + 1415 * -4 + -4994 * -2);
    function r(a, s, c, u, g) {
      return We(u - -823, s - 91, c - 331, a);
    }
    function i(a, s, c, u, g) {
      return We(s - -349, s - 424, c - 496, g);
    }
    if (!o)
      if (r("&Vxw", 567, 611, 602) !== n("MNJl", 820, 880)) {
        console[r("UhUx", 643, 494, 553)](i(1242, 1159, 1189, 1122, "$Si$") + n("6@2b", 886, 815) + r("u]H!", 496, 666, 568) + e(285, "Js!0", 237, 302) + r("uQyH", 588, 664, 581)), this[i(959, 1039, 1100, 1122, "*E43") + "se"] = void (1699 * 2 + 1051 * -2 + 36 * -36);
        return;
      } else throw new _0x3fc50a(n("0dtA", 866, 805) + r("znmX", 600, 615, 672) + i(1113, 1075, 1141, 1127, "1cq@") + n("eyFM", 898, 833) + ".");
    await this[i(1151, 1144, 1102, 1211, "UkGl") + t(25, 16, "WJ58") + "se"](o);
  }
  [ut("DW$J", -303, -211, -233, -242) + je(-621, -435, -416, -520, "X3*I") + "s"](o) {
    function t(e, n, r, i, a) {
      return ut(e, n - 370, r - 127, i - 81, i - 1246);
    }
    o[t("Jj0t", 1162, 1204, 1147) + "ch"]((e) => console[t("UhUx", 1003, 1e3, 967)](e));
  }
  [je(-487, -572, -480, -504, "&Vxw") + je(-299, -405, -473, -406, "!l(e") + Lt(660, 540, 534, "6@2b", 617)](o) {
    function t(e, n, r, i, a) {
      return Lt(e - 161, n - 335, r - 405, a, r - -1035);
    }
    o[t(-431, -475, -410, -349, "#HxC") + "ch"]((e) => console[t(-556, -444, -523, -486, "8WAO")](e));
  }
  [je(-500, -480, -437, -487, "UkGl") + Lt(638, 666, 613, "co^v", 597)]() {
    function o(e, n, r, i, a) {
      return We(a - -105, n - 461, r - 49, i);
    }
    function t(e, n, r, i, a) {
      return ut(i, n - 393, r - 77, i - 61, r - 571);
    }
    return window[o(1446, 1394, 1271, "xmM@", 1360) + t(403, 463, 370, "Jj0t")][t(497, 519, 419, "DrJO") + o(1346, 1528, 1496, "J7FE", 1420)];
  }
  [We(1370, 1434, 1478, "UhUx") + je(-314, -523, -384, -419, "co^v") + je(-549, -418, -483, -467, "eyFM")]() {
    function o(i, a, s, c, u) {
      return We(c - -73, a - 10, s - 267, i);
    }
    function t(i, a, s, c, u) {
      return qt(i - 479, a - 239, a - 67, i);
    }
    function e(i, a, s, c, u) {
      return je(i - 87, a - 322, s - 478, u - 333, s);
    }
    function n(i, a, s, c, u) {
      return je(i - 353, a - 38, s - 103, u - 1820, a);
    }
    function r(i, a, s, c, u) {
      return We(c - -1105, a - 158, s - 469, s);
    }
    try {
      if (e(-152, -177, "X3*I", -145, -92) === t("DW$J", 1017, 999, 1052, 925)) _0x229151[t("$Si$", 1182, 1101, 1160, 1214) + "ch"]((i) => _0x2ddfc8[e(-117, -253, "6j)*", -318, -211)](i));
      else {
        if (!this[e(-30, -43, "RM&9", 14, -58) + "se"]) {
          if (n(1396, "KRFq", 1415, 1493, 1447) !== o("14mh", 1418, 1429, 1325, 1373)) throw new Vo(n(1417, "eyFM", 1319, 1462, 1393) + n(1414, "u]H!", 1367, 1410, 1390) + n(1389, "1cq@", 1485, 1564, 1466) + r(343, 410, "j7Jo", 353, 289) + ".");
          _0x4c7ede[o("biG7", 1415, 1290, 1324, 1258) + "ch"]((i) => _0x4ec583[t("OX0Z", 1016, 1010, 983, 984)](i));
        }
        if (!this[o("eyFM", 1409, 1376, 1469, 1477) + t("znmX", 1167, 1061, 1087, 1237) + "d"][r(552, 461, "znmX", 451, 515) + r(273, 296, "u]H!", 297, 347) + t("UhUx", 1055, 1149, 1011, 964) + "ed"]()) {
          if (o("xmM@", 1188, 1325, 1275, 1343) === e(-196, -242, "uQyH", -178, -209)) throw new Vo(o("CIF^", 1197, 1336, 1300, 1239) + e(-134, -226, "Js!0", -215, -169) + r(325, 434, "6WYo", 429, 364) + n(1432, "RM&9", 1543, 1496, 1469) + ".");
          return this[e(-103, -145, "Jj0t", -89, -197) + n(1354, "Rzhc", 1363, 1298, 1383)];
        }
        this[n(1414, "HlCp", 1310, 1370, 1417) + t("9Rhg", 1076, 1061, 1086, 1092)] = new Ta(sI(this[r(255, 172, "J7FE", 256, 273) + "se"], this[n(1212, "co^v", 1187, 1187, 1271) + o("#HxC", 1347, 1309, 1278, 1236)]())), this[e(-140, -257, "Z*xi", -202, -150) + o("UkGl", 1387, 1330, 1290, 1386) + "s"](this[n(1492, "14mh", 1363, 1520, 1462) + e(-154, -109, "6j)*", -182, -196)][e(-193, -96, "14mh", -184, -106) + "s"]), this[o("tzwK", 1418, 1451, 1427, 1521) + e(-167, -118, "RM&9", -90, -131) + n(1452, "!l(e", 1372, 1307, 1385)](this[t("tzwK", 1044, 1095, 980, 961) + o("Zs5G", 1213, 1337, 1302, 1398)][o("6@2b", 1471, 1480, 1476, 1423) + o("aPm!", 1413, 1371, 1342, 1257)]);
      }
    } catch (i) {
      if (t("*E43", 1111) !== n(1458, "znmX", 1381, 1404, 1433)) throw new _0x1df096(t("u]H!", 1164) + t("$7ax", 1161) + t("eyFM", 1048) + o("WJ58", 1274, 1332, 1362) + ".");
      {
        if (i instanceof Vo)
          if (o("aWWh", 1252, 1215, 1296) !== e(-181, -59, "tOQ2", -126, -125)) i[o("9Rhg", 1469, 1512, 1475)]();
          else {
            _0x5db5ae[e(-58, -220, "RM&9", -93, -145)](o("UhUx", 1448, 1522, 1480) + t("HlCp", 1129) + r(184, 210, "CIF^", 249) + e(61, -139, "!l(e", 6, -31) + e(-124, -81, "Z*xi", -29, -32)), this[o("*E43", 1401, 1373, 1315) + "se"] = void (-1 * -5407 + -4492 + -915);
            return;
          }
        else i instanceof Error && (r(409, 379, "0dtA", 386) !== o("!l(e", 1430, 1417, 1479) ? console[n(1251, "HlCp", 1168, 1327, 1270)](i) : _0xee9515[n(1440, "6j)*", 1493, 1410, 1397) + e(-35, -135, "14mh", -146, -143)](_0x5795d3));
        const a = {};
        a[t("biG7", 1036) + e(-37, -178, "^QV@", -99, -79)] = !1, a[o("KRFq", 1437, 1270, 1373) + "s"] = [], a[e(-119, -2, "Zs5G", -87, -55) + o("J7FE", 1418, 1260, 1312)] = [], a[o("DrJO", 1349, 1481, 1446) + e(9, -55, "$Si$", -122, -53) + r(403, 315, "14mh", 423)] = void (4213 + 4213 * -1), a[r(306, 445, "*E43", 387)] = function() {
        }, this[e(-27, -111, "aWWh", -81, -16) + r(326, 437, "u]H!", 368)] = new Ta(a);
      }
    }
  }
  [je(-466, -539, -593, -535, "SwHu") + We(1403, 1471, 1506, "xmM@") + je(-525, -439, -419, -481, "DW$J") + "t"]() {
    function o(t, e, n, r, i) {
      return We(i - -249, e - 193, n - 36, r);
    }
    return this[o(1146, 1154, 1290, "!l(e", 1205) + o(1140, 1154, 1237, "9Rhg", 1192)];
  }
  [We(1533, 1589, 1455, "eyFM") + We(1514, 1499, 1454, "SwHu") + Lt(691, 592, 592, "Zo2V", 590)]() {
    var i;
    function o(a, s, c, u, g) {
      return qt(a - 361, s - 240, a - -839, s);
    }
    function t(a, s, c, u, g) {
      return Lt(a - 349, s - 205, c - 375, g, u - 105);
    }
    function e(a, s, c, u, g) {
      return je(a - 353, s - 116, c - 168, s - 1457, u);
    }
    function n(a, s, c, u, g) {
      return je(a - 247, s - 170, c - 475, g - 736, u);
    }
    function r(a, s, c, u, g) {
      return qt(a - 188, s - 358, a - -1370, s);
    }
    if (!this[t(606, 683, 632, 649, "0dtA") + "se"]) {
      if (t(658, 682, 758, 658, "X3*I") === e(1026, 982, 1081, "znmX")) return;
      this[o(244, "OX0Z") + r(-263, "8WAO") + "d"] = _0x48c13a;
    }
    try {
      if (t(822, 687, 814, 743, "UhUx") !== o(242, "X3*I", 285, 293, 328)) {
        const a = JSON[e(1061, 965, 1038, "!l(e", 937)](this[r(-408, "#HxC", -379, -447, -346) + "se"]);
        return (i = a == null ? void 0 : a[o(216, "Js!0", 145, 217, 301) + t(580, 591, 752, 655, "14mh")]) == null ? void 0 : i[o(241, "Jj0t", 331, 296, 249) + n(254, 364, 388, "u]H!", 312)];
      } else _0x5271c8[o(238, "6WYo", 157, 239, 225)](_0x2953b6);
    } catch (a) {
      if (e(1044, 967, 1028, "1cq@") !== o(91, "uQyH")) return;
      if (a instanceof Error) {
        if (e(920, 912, 1018, "UhUx") === n(232, 314, 345, "6j)*", 277)) return _0x2c85b1[e(952, 926, 991, "$Si$") + n(252, 331, 337, "$7ax", 250)][e(1030, 1009, 1026, "Jj0t") + r(-342, "DW$J")];
        re[n(208, 198, 358, "&Vxw", 257) + n(214, 147, 260, "MNJl", 177)](a);
      }
      return;
    }
  }
}
const Mx = class Mx extends lI {
  static getInstance() {
    if (!this._instance) {
      const o = new uI();
      this._instance = new Mx(o);
    }
    return this._instance;
  }
};
M(Mx, "_instance");
let Wr = Mx;
const II = ({ children: x }) => {
  const o = jt(null);
  return Gu(o, Wt.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ H(o1, { ref: o, children: x });
}, fI = ({ cameraOptions: x }) => x ? /* @__PURE__ */ H(zd, { target: x.styleTarget, children: /* @__PURE__ */ H(
  m1,
  {
    licensePath: x.licensePath,
    bramble: Wr.getInstance(),
    wasmDirectoryPath: x.wasmDirectoryPath,
    children: /* @__PURE__ */ H(y1, { analytics: rI, appKey: "065cf6e242fc5e785cd17eebfbfbbd212a33133b", children: /* @__PURE__ */ H(
      d1,
      {
        value: tI({
          onError: x.onError
        }),
        children: /* @__PURE__ */ H(Ns, { children: /* @__PURE__ */ H(II, { children: /* @__PURE__ */ H(jl, { ...x }) }) })
      }
    ) })
  }
) }) : null;
sg(fI, "x-dot-document-auto-capture", ["cameraOptions"]);
