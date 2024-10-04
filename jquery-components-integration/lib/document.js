var Uc = Object.defineProperty;
var Si = (x) => {
  throw TypeError(x);
};
var _c = (x, o, t) => o in x ? Uc(x, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[o] = t;
var J = (x, o, t) => _c(x, typeof o != "symbol" ? o + "" : o, t), Bi = (x, o, t) => o.has(x) || Si("Cannot " + t);
var z = (x, o, t) => (Bi(x, o, "read from private field"), t ? t.call(x) : o.get(x)), Ke = (x, o, t) => o.has(x) ? Si("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(x) : o.set(x, t), Se = (x, o, t, e) => (Bi(x, o, "write to private field"), e ? e.call(x, t) : o.set(x, t), t);
var vn, D, Ea, Ya, $t, ki, Fa, Lo, wr, No, Do, Xa, un = {}, ja = [], Qc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, jx = Array.isArray;
function Rt(x, o) {
  for (var t in o) x[t] = o[t];
  return x;
}
function Ma(x) {
  var o = x.parentNode;
  o && o.removeChild(x);
}
function Ee(x, o, t) {
  var e, n, r, i = {};
  for (r in o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : i[r] = o[r];
  if (arguments.length > -3809 + -109 * 91 + -1373 * -10 && (i.children = arguments.length > 3 ? vn.call(arguments, -6688 + 8 * -47 + 7066) : t), typeof x == "function" && x.defaultProps != null)
    for (r in x.defaultProps) void (13367 + -1 * 13367) === i[r] && (i[r] = x.defaultProps[r]);
  return sn(x, i, e, n, null);
}
function sn(x, o, t, e, n) {
  var r = {};
  r.type = x, r.props = o, r.key = t, r.ref = e, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (3009 + -59 * 51), r.__c = null, r.constructor = void (2958 + 1479 * -2), r.__v = n ?? ++Ea, r.__i = -(2594 + 1 * -2593), r.__u = 0;
  var i = r;
  return n == null && D.vnode != null && D.vnode(i), i;
}
function zc() {
  var x = {};
  return x.current = null, x;
}
function ft(x) {
  return x.children;
}
function it(x, o) {
  this.props = x, this.context = o;
}
function a0(x, o) {
  if (o == null) return x.__ ? a0(x.__, x.__i + (-202 * 41 + 213 + -807 * -10)) : null;
  for (var t; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) return t.__e;
  return typeof x.type == "function" ? a0(x) : null;
}
function Ja(x) {
  var o, t;
  if ((x = x.__) != null && x.__c != null) {
    for (x.__e = x.__c.base = null, o = -5739 + 1 * 5739; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) {
      x.__e = x.__c.base = t.__e;
      break;
    }
    return Ja(x);
  }
}
function Eo(x) {
  (!x.__d && (x.__d = !(-4050 * 1 + 923 * -1 + -1 * -4973)) && $t.push(x) && !fx.__r++ || ki !== D.debounceRendering) && ((ki = D.debounceRendering) || Fa)(fx);
}
function fx() {
  var x, o, t, e, n, r, i, a;
  for ($t.sort(Lo); x = $t.shift(); ) x.__d && (o = $t.length, e = void (1373 * 5 + -115 * -59 + -1050 * 13), r = (n = (t = x).__v).__e, i = [], a = [], t.__P && ((e = Rt({}, n)).__v = n.__v + 1, D.vnode && D.vnode(e), Sr(t.__P, e, n, t.__n, t.__P.namespaceURI, -1 * -6598 + -4391 + 75 * -29 & n.__u ? [r] : null, i, r ?? a0(n), !!(32 & n.__u), a), e.__v = n.__v, e.__.__k[e.__i] = e, Qa(i, e, a), e.__e != r && Ja(e)), $t.length > o && $t.sort(Lo));
  fx.__r = 2 * 4877 + -3381 + 1 * -6373;
}
function Ua(x, o, t, e, n, r, i, a, s, c, d) {
  var g, C, l, p, b, A = e && e.__k || ja, u = o.length;
  for (t.__d = s, qc(t, o, A), s = t.__d, g = 0; g < u; g++) (l = t.__k[g]) != null && typeof l != "boolean" && typeof l != "function" && (C = -(5771 + -41 * -79 + -13 * 693) === l.__i ? un : A[l.__i] || un, l.__i = g, Sr(x, l, C, n, r, i, a, s, c, d), p = l.__e, l.ref && C.ref != l.ref && (C.ref && Br(C.ref, null, l), d.push(l.ref, l.__c || p, l)), b == null && p != null && (b = p), 65536 & l.__u || C.__k === l.__k ? (s && typeof l.type == "string" && !x.contains(s) && (s = a0(C)), s = _a(l, s, x)) : typeof l.type == "function" && void (-1579 + 1579 * 1) !== l.__d ? s = l.__d : p && (s = p.nextSibling), l.__d = void (320 + 160 * -2), l.__u &= -(14285 * -25 + 112347 + -3 * -147129));
  t.__d = s, t.__e = b;
}
function qc(x, o, t) {
  var e, n, r, i, a, s = o.length, c = t.length, d = c, g = -59 * 103 + 316 * 20 + -3 * 81;
  for (x.__k = [], e = 0; e < s; e++) i = e + g, (n = x.__k[e] = (n = o[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? sn(null, n, null, null, null) : jx(n) ? sn(ft, { children: n }, null, null, null) : void (-13842 + 3 * 4614) === n.constructor && n.__b > 11 * -197 + 3426 + -1 * 1259 ? sn(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = x, n.__b = x.__b + (-365 + -122 * -3), a = $c(n, t, i, d), n.__i = a, r = null, a !== -1 && (d--, (r = t[a]) && (r.__u |= 24793 * 4 + -35 * 6117 + 245995)), r == null || r.__v === null ? (-(-1976 * -1 + -8756 + -1 * -6781) == a && g--, typeof n.type != "function" && (n.__u |= 25904 * -5 + -3 * 847 + -197597 * -1)) : a !== i && (a == i - (-1580 + 581 * -16 + 10877) ? g = a - i : a == i + (-97 * -20 + -8269 + 6330) ? g++ : a > i ? d > s - i ? g += a - i : g-- : a < i && g++, a !== e + g && (n.__u |= 53782 + -9 * -1306))) : (r = t[i]) && r.key == null && r.__e && 1208 * -4 + 47 * 130 + 213 * -6 == (-87 * -2358 + -11 * -22753 + 3 * -108119 & r.__u) && (r.__e == x.__d && (x.__d = a0(r)), Yo(r, r, !(-134 * -13 + 7907 + -24 * 402)), t[i] = null, d--);
  if (d)
    for (e = -1 * -8225 + 14 * -619 + 3 * 147; e < c; e++) (r = t[e]) != null && 54 * -51 + -6749 + 17 * 559 == (595 * -253 + 53104 + 228503 & r.__u) && (r.__e == x.__d && (x.__d = a0(r)), Yo(r, r));
}
function _a(x, o, t) {
  var e, n;
  if (typeof x.type == "function") {
    for (e = x.__k, n = -311 + -547 * 1 + -33 * -26; e && n < e.length; n++) e[n] && (e[n].__ = x, o = _a(e[n], o, t));
    return o;
  }
  x.__e != o && (t.insertBefore(x.__e, o || null), o = x.__e);
  do
    o = o && o.nextSibling;
  while (o != null && -18 * 96 + -6524 + -20 * -413 === o.nodeType);
  return o;
}
function Kt(x, o) {
  return o = o || [], x == null || typeof x == "boolean" || (jx(x) ? x.some(function(t) {
    Kt(t, o);
  }) : o.push(x)), o;
}
function $c(x, o, t, e) {
  var n = x.key, r = x.type, i = t - (9663 * -1 + -9393 + 19057), a = t + (9756 + 1 * -9755), s = o[t];
  if (s === null || s && n == s.key && r === s.type && -11 * -229 + -3384 + 865 * 1 == (140192 + 1 * -214645 + -25 * -8221 & s.__u)) return t;
  if (e > (s != null && -4363 * 2 + 2861 * -1 + -11587 * -1 == (-135753 + -207770 * 1 + 55 * 8629 & s.__u) ? -418 * 6 + -4162 + -953 * -7 : -1 * 9883 + 1004 * 5 + 4863)) for (; i >= -4 * 904 + 1 * -5582 + 9198 || a < o.length; ) {
    if (i >= -1026 + -3 * -866 + 1572 * -1) {
      if ((s = o[i]) && 7701 + 1 * -48 + -7653 == (178768 + -23848 * 2 & s.__u) && n == s.key && r === s.type) return i;
      i--;
    }
    if (a < o.length) {
      if ((s = o[a]) && -1 * 5857 + -2242 * -2 + 1 * 1373 == (2 * 49918 + -178307 + -209543 * -1 & s.__u) && n == s.key && r === s.type) return a;
      a++;
    }
  }
  return -1;
}
function Gi(x, o, t) {
  o[-5664 + 258 * 24 + -528] === "-" ? x.setProperty(o, t ?? "") : x[o] = t == null ? "" : typeof t != "number" || Qc.test(o) ? t : t + "px";
}
function En(x, o, t, e, n) {
  var r;
  e: if (o === "style")
    if (typeof t == "string") x.style.cssText = t;
    else {
      if (typeof e == "string" && (x.style.cssText = e = ""), e)
        for (o in e) t && o in t || Gi(x.style, o, "");
      if (t)
        for (o in t) e && t[o] === e[o] || Gi(x.style, o, t[o]);
    }
  else if (o[-1221 * -3 + 7 * 1136 + -11615] === "o" && o[7161 + -40 * 179] === "n") r = o !== (o = o.replace(/(PointerCapture)$|Capture$/i, "$1")), o = o.toLowerCase() in x || o === "onFocusOut" || o === "onFocusIn" ? o.toLowerCase().slice(2) : o.slice(3163 * -2 + -631 * 3 + 8221), x.l || (x.l = {}), x.l[o + r] = t, t ? e ? t.u = e.u : (t.u = wr, x.addEventListener(o, r ? Do : No, r)) : x.removeEventListener(o, r ? Do : No, r);
  else {
    if (n == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in x) try {
      x[o] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || !(-4362 + -1 * -974 + -3389 * -1) === t && o[-1 * 4813 + 7917 + -3100] !== "-" ? x.removeAttribute(o) : x.setAttribute(o, o == "popover" && 10 * 127 + -5 * 1389 + 5676 == t ? "" : t));
  }
}
function Oi(x) {
  return function(o) {
    if (this.l) {
      var t = this.l[o.type + x];
      if (o.t == null) o.t = wr++;
      else if (o.t < t.u) return;
      return t(D.event ? D.event(o) : o);
    }
  };
}
function Sr(x, o, t, e, n, r, i, a, s, c) {
  var d, g, C, l, p, b, A, u, v, Z, Y, j, F, O, M, ye, Q = o.type;
  if (o.constructor !== void 0) return null;
  128 & t.__u && (s = !!(-6343 * 1 + 8273 + 949 * -2 & t.__u), r = [a = o.__e = t.__e]), (d = D.__b) && d(o);
  e: if (typeof Q == "function") try {
    if (u = o.props, v = "prototype" in Q && Q.prototype.render, Z = (d = Q.contextType) && e[d.__c], Y = d ? Z ? Z.props.value : d.__ : e, t.__c ? A = (g = o.__c = t.__c).__ = g.__E : (v ? o.__c = g = new Q(u, Y) : (o.__c = g = new it(u, Y), g.constructor = Q, g.render = tg), Z && Z.sub(g), g.props = u, g.state || (g.state = {}), g.context = Y, g.__n = e, C = g.__d = !(919 * -7 + 1 * -1039 + -467 * -16), g.__h = [], g._sb = []), v && g.__s == null && (g.__s = g.state), v && Q.getDerivedStateFromProps != null && (g.__s == g.state && (g.__s = Rt({}, g.__s)), Rt(g.__s, Q.getDerivedStateFromProps(u, g.__s))), l = g.props, p = g.state, g.__v = o, C) v && Q.getDerivedStateFromProps == null && g.componentWillMount != null && g.componentWillMount(), v && g.componentDidMount != null && g.__h.push(g.componentDidMount);
    else {
      if (v && Q.getDerivedStateFromProps == null && u !== l && g.componentWillReceiveProps != null && g.componentWillReceiveProps(u, Y), !g.__e && (g.shouldComponentUpdate != null && !(3846 * 1 + -1373 * 1 + 1236 * -2) === g.shouldComponentUpdate(u, g.__s, Y) || o.__v === t.__v)) {
        for (o.__v !== t.__v && (g.props = u, g.state = g.__s, g.__d = !(1 * -4594 + -251 * 22 + 67 * 151)), o.__e = t.__e, o.__k = t.__k, o.__k.forEach(function(ue) {
          ue && (ue.__ = o);
        }), j = -7069 + -174 * -26 + 2545; j < g._sb.length; j++) g.__h.push(g._sb[j]);
        g._sb = [], g.__h.length && i.push(g);
        break e;
      }
      g.componentWillUpdate != null && g.componentWillUpdate(u, g.__s, Y), v && g.componentDidUpdate != null && g.__h.push(function() {
        g.componentDidUpdate(l, p, b);
      });
    }
    if (g.context = Y, g.props = u, g.__P = x, g.__e = !(9628 + -188 * 37 + -2671), F = D.__r, O = 7671 + 272 * -17 + -3047 * 1, v) {
      for (g.state = g.__s, g.__d = !(-3 * -1949 + -9943 + 4097), F && F(o), d = g.render(g.props, g.state, g.context), M = -3593 * -1 + 226 * -18 + 475; M < g._sb.length; M++) g.__h.push(g._sb[M]);
      g._sb = [];
    } else do
      g.__d = !(-16 * -18 + -7538 + -1 * -7251), F && F(o), d = g.render(g.props, g.state, g.context), g.state = g.__s;
    while (g.__d && ++O < 25);
    g.state = g.__s, g.getChildContext != null && (e = Rt(Rt({}, e), g.getChildContext())), v && !C && g.getSnapshotBeforeUpdate != null && (b = g.getSnapshotBeforeUpdate(l, p)), Ua(x, jx(ye = d != null && d.type === ft && d.key == null ? d.props.children : d) ? ye : [ye], o, t, e, n, r, i, a, s, c), g.base = o.__e, o.__u &= -(1587 * 4 + 6260 + -1 * 12447), g.__h.length && i.push(g), A && (g.__E = g.__ = null);
  } catch (ue) {
    o.__v = null, s || r != null ? (o.__e = a, o.__u |= s ? 4163 * -1 + -2 * -4322 + -4321 : 85 * 109 + -1 * 5582 + 3 * -1217, r[r.indexOf(a)] = null) : (o.__e = t.__e, o.__k = t.__k), D.__e(ue, o, t);
  }
  else r == null && o.__v === t.__v ? (o.__k = t.__k, o.__e = t.__e) : o.__e = eg(t.__e, o, t, e, n, r, i, s, c);
  (d = D.diffed) && d(o);
}
function Qa(x, o, t) {
  o.__d = void (181 * 4 + 3 * 2383 + 7873 * -1);
  for (var e = -9027 + 4 * -2066 + 17291; e < t.length; e++) Br(t[e], t[++e], t[++e]);
  D.__c && D.__c(o, x), x.some(function(n) {
    try {
      x = n.__h, n.__h = [], x.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      D.__e(r, n.__v);
    }
  });
}
function eg(x, o, t, e, n, r, i, a, s) {
  var c, d, g, C, l, p, b, A = t.props, u = o.props, v = o.type;
  if (v === "svg" ? n = "http://www.w3.org/2000/svg" : v === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), r != null) {
    for (c = 4823 + 4805 * -1 + 3 * -6; c < r.length; c++) if ((l = r[c]) && "setAttribute" in l == !!v && (v ? l.localName === v : 169 * -11 + -2727 + 4589 * 1 === l.nodeType)) {
      x = l, r[c] = null;
      break;
    }
  }
  if (x == null) {
    if (v === null) return document.createTextNode(u);
    x = document.createElementNS(n, v, u.is && u), r = null, a = !(1807 + -141 * 35 + 3129);
  }
  if (v === null) A === u || a && x.data === u || (x.data = u);
  else {
    if (r = r && vn.call(x.childNodes), A = t.props || un, !a && r != null)
      for (A = {}, c = 3128 + -1564 * 2; c < x.attributes.length; c++) A[(l = x.attributes[c]).name] = l.value;
    for (c in A) if (l = A[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") g = l;
      else if (c !== "key" && !(c in u)) {
        if (c == "value" && "defaultValue" in u || c == "checked" && "defaultChecked" in u) continue;
        En(x, c, null, l, n);
      }
    }
    for (c in u) l = u[c], c == "children" ? C = l : c == "dangerouslySetInnerHTML" ? d = l : c == "value" ? p = l : c == "checked" ? b = l : c === "key" || a && typeof l != "function" || A[c] === l || En(x, c, l, A[c], n);
    if (d) a || g && (d.__html === g.__html || d.__html === x.innerHTML) || (x.innerHTML = d.__html), o.__k = [];
    else if (g && (x.innerHTML = ""), Ua(x, jx(C) ? C : [C], o, t, e, v === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, r, i, r ? r[0] : t.__k && a0(t, 1 * 2249 + -2740 + 491), a, s), r != null)
      for (c = r.length; c--; ) r[c] != null && Ma(r[c]);
    a || (c = "value", p !== void 0 && (p !== x[c] || v === "progress" && !p || v === "option" && p !== A[c]) && En(x, c, p, A[c], n), c = "checked", void (16428 + 4 * -4107) !== b && b !== x[c] && En(x, c, b, A[c], n));
  }
  return x;
}
function Br(x, o, t) {
  try {
    typeof x == "function" ? x(o) : x.current = o;
  } catch (e) {
    D.__e(e, t);
  }
}
function Yo(x, o, t) {
  var e, n;
  if (D.unmount && D.unmount(x), (e = x.ref) && (e.current && e.current !== x.__e || Br(e, null, o)), (e = x.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (r) {
      D.__e(r, o);
    }
    e.base = e.__P = null;
  }
  if (e = x.__k)
    for (n = 194 * 11 + -382 * -16 + -8246; n < e.length; n++) e[n] && Yo(e[n], o, t || typeof x.type != "function");
  t || x.__e == null || Ma(x.__e), x.__c = x.__ = x.__e = x.__d = void (5193 + 5193 * -1);
}
function tg(x, o, t) {
  return this.constructor(x, t);
}
function Xt(x, o, t) {
  var e, n, r, i;
  D.__ && D.__(x, o), n = (e = typeof t == "function") ? null : t && t.__k || o.__k, r = [], i = [], Sr(o, x = (!e && t || o).__k = Ee(ft, null, [x]), n || un, un, o.namespaceURI, !e && t ? [t] : n ? null : o.firstChild ? vn.call(o.childNodes) : null, r, !e && t ? t : n ? n.__e : o.firstChild, e, i), Qa(r, x, i);
}
function kr(x, o) {
  Xt(x, o, kr);
}
function Gr(x, o, t) {
  var e, n, r, i, a = Rt({}, x.props);
  for (r in x.type && x.type.defaultProps && (i = x.type.defaultProps), o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : a[r] = void (-58 * 80 + -1 * -2053 + -2587 * -1) === o[r] && void (-1 * 3170 + 3781 + -611 * 1) !== i ? i[r] : o[r];
  return arguments.length > -43 * -121 + -7 * 1283 + 3780 && (a.children = arguments.length > 694 + -691 * 1 ? vn.call(arguments, -71 * -137 + -1 * -5387 + -15112) : t), sn(x.type, a, e || x.key, n || x.ref, null);
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
        a.__e = !0, Eo(a);
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
vn = ja.slice, D = { __e: function(x, o, t, e) {
  for (var n, r, i; o = o.__; ) if ((n = o.__c) && !n.__) try {
    if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(x)), i = n.__d), n.componentDidCatch != null && (n.componentDidCatch(x, e || {}), i = n.__d), i) return n.__E = n;
  } catch (a) {
    x = a;
  }
  throw x;
} }, Ea = -10516 + -1 * -10516, Ya = function(x) {
  return x != null && x.constructor == null;
}, it.prototype.setState = function(x, o) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Rt({}, this.state), typeof x == "function" && (x = x(Rt({}, t), this.props)), x && Rt(t, x), x != null && this.__v && (o && this._sb.push(o), Eo(this));
}, it.prototype.forceUpdate = function(x) {
  this.__v && (this.__e = !(566 * -14 + -1117 * -7 + -15 * -7), x && this.__h.push(x), Eo(this));
}, it.prototype.render = ft, $t = [], Fa = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Lo = function(x, o) {
  return x.__v.__b - o.__v.__b;
}, fx.__r = 7047 * -1 + -9228 + -75 * -217, wr = 3954 + -17 * -5 + -7 * 577, No = Oi(!(-688 * 2 + -33 * 194 + 7779)), Do = Oi(!(99 * 1 + 3 * 1713 + 1746 * -3)), Xa = 7772 + -1 * 9667 + 1895;
function Or() {
  return (Or = Object.assign ? Object.assign.bind() : function(x) {
    for (var o = 4252 + -39 * 109; o < arguments.length; o++) {
      var t = arguments[o];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (x[e] = t[e]);
    }
    return x;
  }).apply(this, arguments);
}
var ng = ["context", "children"];
function xg(x) {
  this.getChildContext = function() {
    return x.context;
  };
  var o = x.children, t = function(e, n) {
    if (e == null) return {};
    var r, i, a = {}, s = Object.keys(e);
    for (i = 4799 + -4799 * 1; i < s.length; i++) n.indexOf(r = s[i]) >= -1 * 3873 + -9 * -809 + -3408 || (a[r] = e[r]);
    return a;
  }(x, ng);
  return Gr(o, t);
}
function og() {
  var x = {};
  x.detail = {}, x.bubbles = !(-2 * -905 + 5 * -1371 + 1 * 5045), x.cancelable = !(6304 + 7259 * 1 + -13563);
  var o = new CustomEvent("_preact", x);
  this.dispatchEvent(o), this._vdom = Ee(xg, Or({}, this._props, { context: o.detail.context }), function t(e, n) {
    if (-7942 + -1 * 1406 + 9351 === e.nodeType) return e.data;
    if (4241 * 1 + 4 * 107 + -4668 !== e.nodeType) return null;
    var r = [], i = {}, a = 8213 + -7 * 1142 + -219, s = e.attributes, c = e.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[za(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var d = t(c[a], null), g = c[a].slot;
      g ? i[g] = Ee(Hi, { name: g }, d) : r[a] = d;
    }
    var C = n ? Ee(Hi, null, r) : r;
    return Ee(n || e.nodeName.toLowerCase(), i, C);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? kr : Xt)(this._vdom, this._root);
}
function za(x) {
  return x.replace(/-(\w)/g, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function rg(x, o, t) {
  if (this._vdom) {
    var e = {};
    e[x] = t = t ?? void (9083 + -4619 * -1 + 34 * -403), e[za(x)] = t, this._vdom = Gr(this._vdom, e), Xt(this._vdom, this._root);
  }
}
function ig() {
  Xt(this._vdom = null, this._root);
}
function Hi(x, o) {
  var t = this;
  return Ee("slot", Or({}, x, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = o;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function ag(x, o, t, e) {
  function n() {
    var r = Reflect.construct(HTMLElement, [], n);
    return r._vdomComponent = x, r._root = r, r;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = og, n.prototype.attributeChangedCallback = rg, n.prototype.disconnectedCallback = ig, t = t || x.observedAttributes || Object.keys(x.propTypes || {}), n.observedAttributes = t, t.forEach(function(r) {
    Object.defineProperty(n.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(i) {
      this._vdom ? this.attributeChangedCallback(r, null, i) : (this._props || (this._props = {}), this._props[r] = i, this.connectedCallback());
      var a = typeof i;
      i != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(r, i);
    } });
  }), customElements.define(o, n);
}
var sg = 6976 + -51 * 124 + -652 * 1;
function H(x, o, t, e, n, r) {
  o || (o = {});
  var i, a, s = o;
  if ("ref" in s)
    for (a in s = {}, o) a == "ref" ? i = o[a] : s[a] = o[a];
  var c = {};
  c.type = x, c.props = s, c.key = t, c.ref = i, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__d = void (-4096 + 76 * 35 + -1 * -1436), c.__c = null, c.constructor = void (213 * -13 + 3558 + 1 * -789), c.__v = --sg, c.__i = -(-994 + -6 * 251 + -61 * -41), c.__u = 0, c.__source = n, c.__self = r;
  var d = c;
  if (typeof x == "function" && (i = x.defaultProps))
    for (a in i) void (6902 * -1 + -4033 * -2 + -1164) === s[a] && (s[a] = i[a]);
  return D.vnode && D.vnode(d), d;
}
var Je = function() {
  return Je = Object.assign || function(o) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (o[r] = t[r]);
    }
    return o;
  }, Je.apply(this, arguments);
};
function H0(x, o, t) {
  if (t || arguments.length === 2) for (var e = 0, n = o.length, r; e < n; e++)
    (r || !(e in o)) && (r || (r = Array.prototype.slice.call(o, 0, e)), r[e] = o[e]);
  return x.concat(r || Array.prototype.slice.call(o));
}
function cg(x) {
  var o = Object.create(null);
  return function(t) {
    return o[t] === void 0 && (o[t] = x(t)), o[t];
  };
}
var gg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, dg = cg(function(x) {
  return gg.test(x) || x.charCodeAt(6080 + 13 * 634 + -14322) === 111 && x.charCodeAt(9733 * -1 + -7829 * -1 + 1905) === -1 * -3260 + -8040 + 6 * 815 && x.charCodeAt(1 * 8039 + 2 * 3469 + -1 * 14975) < -3158 * 2 + -2 * 1801 + 1 * 10009;
}), jt, oe, po, Zi, Z0 = 0, qa = [], ae = D, Ri = ae.__b, Ki = ae.__r, Pi = ae.diffed, Vi = ae.__c, Ti = ae.unmount, Li = ae.__;
function D0(x, o) {
  ae.__h && ae.__h(oe, x, Z0 || o), Z0 = -2076 * 4 + -5553 + 4619 * 3;
  var t = {};
  t.__ = [], t.__h = [];
  var e = oe.__H || (oe.__H = t);
  return x >= e.__.length && e.__.push({}), e.__[x];
}
function at(x) {
  return Z0 = 9572 + -7 * 738 + -4405, Hr(ts, x);
}
function Hr(x, o, t) {
  var e = D0(jt++, 2);
  if (e.t = x, !e.__c && (e.__ = [t ? t(o) : ts(void (-3 * 687 + -2417 + 4478), o), function(a) {
    var s = e.__N ? e.__N[0] : e.__[0], c = e.t(s, a);
    s !== c && (e.__N = [c, e.__[-15003 + -44 * -341]], e.__c.setState({}));
  }], e.__c = oe, !oe.u)) {
    var n = function(a, s, c) {
      if (!e.__c.__H) return !0;
      var d = e.__c.__H.__.filter(function(C) {
        return !!C.__c;
      });
      if (d.every(function(C) {
        return !C.__N;
      })) return !r || r.call(this, a, s, c);
      var g = !(6054 + 6053 * -1);
      return d.forEach(function(C) {
        if (C.__N) {
          var l = C.__[0];
          C.__ = C.__N, C.__N = void 0, l !== C.__[0] && (g = !0);
        }
      }), !(!g && e.__c.props === a) && (!r || r.call(this, a, s, c));
    };
    oe.u = !(12389 + 1 * -12389);
    var r = oe.shouldComponentUpdate, i = oe.componentWillUpdate;
    oe.componentWillUpdate = function(a, s, c) {
      if (this.__e) {
        var d = r;
        r = void (17 * -295 + 463 * 11 + -78), n(a, s, c), r = d;
      }
      i && i.call(this, a, s, c);
    }, oe.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function He(x, o) {
  var t = D0(jt++, 3);
  !ae.__s && Zr(t.__H, o) && (t.__ = x, t.i = o, oe.__H.__h.push(t));
}
function E0(x, o) {
  var t = D0(jt++, 4);
  !ae.__s && Zr(t.__H, o) && (t.__ = x, t.i = o, oe.__h.push(t));
}
function Mt(x) {
  return Z0 = -3 * 1844 + 8 * 1003 + 2487 * -1, tt(function() {
    var o = {};
    return o.current = x, o;
  }, []);
}
function $a(x, o, t) {
  Z0 = 5631 * -1 + 1 * 3667 + 1 * 1970, E0(function() {
    return typeof x == "function" ? (x(o()), function() {
      return x(null);
    }) : x ? (x.current = o(), function() {
      return x.current = null;
    }) : void (6119 * -1 + 1 * -4486 + 10605);
  }, t == null ? t : t.concat(x));
}
function tt(x, o) {
  var t = D0(jt++, 7);
  return Zr(t.__H, o) && (t.__ = x(), t.__H = o, t.__h = x), t.__;
}
function R0(x, o) {
  return Z0 = 9437 * 1 + 1045 + -10474, tt(function() {
    return x;
  }, o);
}
function d0(x) {
  var o = oe.context[x.__c], t = D0(jt++, -1 * -6322 + 3770 + -10083);
  return t.c = x, o ? (t.__ == null && (t.__ = !(7064 + -4 * -862 + 72 * -146), o.sub(oe)), o.props.value) : x.__;
}
function Cx(x, o) {
  ae.useDebugValue && ae.useDebugValue(o ? o(x) : x);
}
function es() {
  var x = D0(jt++, 11);
  if (!x.__) {
    for (var o = oe.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [-5549 + -179 * -31, 1600 + -4 * -2325 + -5 * 2180]);
    x.__ = "P" + t[23 * -165 + -3 * 1526 + 8373] + "-" + t[-6 * -1588 + -62 * -9 + 5 * -2017]++;
  }
  return x.__;
}
function ug() {
  for (var x; x = qa.shift(); ) if (x.__P && x.__H) try {
    x.__H.__h.forEach(ex), x.__H.__h.forEach(Fo), x.__H.__h = [];
  } catch (o) {
    x.__H.__h = [], ae.__e(o, x.__v);
  }
}
ae.__b = function(x) {
  oe = null, Ri && Ri(x);
}, ae.__ = function(x, o) {
  x && o.__k && o.__k.__m && (x.__m = o.__k.__m), Li && Li(x, o);
}, ae.__r = function(x) {
  Ki && Ki(x), jt = 7247 + -288 * 2 + 953 * -7;
  var o = (oe = x.__c).__H;
  o && (po === oe ? (o.__h = [], oe.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (9145 + -1 * 9145);
  })) : (o.__h.forEach(ex), o.__h.forEach(Fo), o.__h = [], jt = -1879 * -2 + -479 + -3279 * 1)), po = oe;
}, ae.diffed = function(x) {
  Pi && Pi(x);
  var o = x.__c;
  o && o.__H && (o.__H.__h.length && (3190 + 11 * -457 + 1838 !== qa.push(o) && Zi === ae.requestAnimationFrame || ((Zi = ae.requestAnimationFrame) || lg)(ug)), o.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (622 + -1 * 2431 + 27 * 67);
  })), po = oe = null;
}, ae.__c = function(x, o) {
  o.some(function(t) {
    try {
      t.__h.forEach(ex), t.__h = t.__h.filter(function(e) {
        return !e.__ || Fo(e);
      });
    } catch (e) {
      o.some(function(n) {
        n.__h && (n.__h = []);
      }), o = [], ae.__e(e, t.__v);
    }
  }), Vi && Vi(x, o);
}, ae.unmount = function(x) {
  Ti && Ti(x);
  var o, t = x.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      ex(e);
    } catch (n) {
      o = n;
    }
  }), t.__H = void (-4 * 157 + -6808 + 7436), o && ae.__e(o, t.__v));
};
var Ni = typeof requestAnimationFrame == "function";
function lg(x) {
  var o, t = function() {
    clearTimeout(e), Ni && cancelAnimationFrame(o), setTimeout(x);
  }, e = setTimeout(t, 100);
  Ni && (o = requestAnimationFrame(t));
}
function ex(x) {
  var o = oe, t = x.__c;
  typeof t == "function" && (x.__c = void (8765 * 1 + -4847 + -3918 * 1), t()), oe = o;
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
  for (var t in x) if (t !== "__source" && !(t in o)) return !(617 * 12 + 129 * -55 + -103 * 3);
  for (var e in o) if (e !== "__source" && x[e] !== o[e]) return !(554 * -1 + 3210 + -2656);
  return !(-2476 + -434 * -7 + -187 * 3);
}
function jo(x, o) {
  this.props = x, this.context = o;
}
function Ig(x, o) {
  function t(n) {
    var r = this.props.ref, i = r == n.ref;
    return !i && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, n) || !i : Xo(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, Ee(x, n);
  }
  return e.displayName = "Memo(" + (x.displayName || x.name) + ")", e.prototype.isReactComponent = !0, e.__f = !(-1 * 2885 + 1 * -6473 + 9358), e;
}
(jo.prototype = new it()).isPureReactComponent = !(-74 * -77 + -1 * -5727 + -11425), jo.prototype.shouldComponentUpdate = function(x, o) {
  return Xo(this.props, x) || Xo(this.state, o);
};
var Di = D.__b;
D.__b = function(x) {
  x.type && x.type.__f && x.ref && (x.props.ref = x.ref, x.ref = null), Di && Di(x);
};
var fg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -1 * 8111 + 10 * 479 + 7232;
function xs(x) {
  function o(t) {
    var e = ns({}, t);
    return delete e.ref, x(e, t.ref || null);
  }
  return o.$$typeof = fg, o.render = o, o.prototype.isReactComponent = o.__f = !(254 * -11 + -225 * 31 + 9769), o.displayName = "ForwardRef(" + (x.displayName || x.name) + ")", o;
}
var Ei = function(x, o) {
  return x == null ? null : Kt(Kt(x).map(o));
}, Cg = { map: Ei, forEach: Ei, count: function(x) {
  return x ? Kt(x).length : 6947 + -1 * 6947;
}, only: function(x) {
  var o = Kt(x);
  if (3231 + 2 * -1615 !== o.length) throw "Children.only";
  return o[-7422 * -1 + -2128 + -5294];
}, toArray: Kt }, pg = D.__e;
D.__e = function(x, o, t, e) {
  if (x.then) {
    for (var n, r = o; r = r.__; ) if ((n = r.__c) && n.__c) return o.__e == null && (o.__e = t.__e, o.__k = t.__k), n.__c(x, o);
  }
  pg(x, o, t, e);
};
var Yi = D.unmount;
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
  }), x.__c && x.__c.__P === o && (x.__e && t.appendChild(x.__e), x.__c.__e = !(-1 * 970 + 9185 * 1 + -8215), x.__c.__P = t)), x;
}
function tx() {
  this.__u = -5578 + -1 * -6491 + 913 * -1, this.t = null, this.__b = null;
}
function is(x) {
  var o = x.__.__c;
  return o && o.__a && o.__a(x);
}
function hg(x) {
  var o, t, e;
  function n(r) {
    if (o || (o = x()).then(function(i) {
      t = i.default || i;
    }, function(i) {
      e = i;
    }), e) throw e;
    if (!t) throw o;
    return Ee(t, r);
  }
  return n.displayName = "Lazy", n.__f = !(2909 * 2 + -5933 + 115), n;
}
function en() {
  this.u = null, this.o = null;
}
D.unmount = function(x) {
  var o = x.__c;
  o && o.__R && o.__R(), o && 936 + 2 * -4342 + -1 * -7780 & x.__u && (x.type = null), Yi && Yi(x);
}, (tx.prototype = new it()).__c = function(x, o) {
  var t = o.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = is(e.__v), r = !(-3916 + -1 * -3917), i = function() {
    r || (r = !(7110 + -7 * -311 + -251 * 37), t.__R = null, n ? n(a) : a());
  };
  t.__R = i;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var s = e.state.__a;
        e.__v.__k[3129 + -11 * -431 + -7870] = rs(s, s.__c.__P, s.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.t.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || 4 * 985 + 6743 * -1 + -315 * -9 & o.__u || e.setState({ __a: e.__b = e.__v.__k[-434 * 8 + -7597 + 11069 * 1] }), x.then(i, i);
}, tx.prototype.componentWillUnmount = function() {
  this.t = [];
}, tx.prototype.render = function(x, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-2275 + -121 * 30 + 5905].__c;
      this.__v.__k[1 * -4268 + 1510 * 1 + 1379 * 2] = os(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = o.__a && Ee(ft, null, x.fallback);
  return n && (n.__u &= -(3143 + 2109 * 1 + -1 * 5219)), [Ee(ft, null, o.__a ? null : x.children), n];
};
var Fi = function(x, o, t) {
  if (++t[-2951 * 3 + 449 * 8 + -1754 * -3] === t[4929 + 5213 * -1 + 2 * 142] && x.o.delete(o), x.props.revealOrder && (x.props.revealOrder[-1 * 8627 + 2 * -1861 + -53 * -233] !== "t" || !x.o.size)) for (t = x.u; t; ) {
    for (; t.length > 3 * -2554 + -5122 + 12787; ) t.pop()();
    if (t[-4885 + -698 * -7] < t[6641 + 29 * -229]) break;
    x.u = t = t[227 * 9 + 2165 + -4206];
  }
};
function mg(x) {
  return this.getChildContext = function() {
    return x.context;
  }, x.children;
}
function bg(x) {
  var o = this, t = x.i;
  o.componentWillUnmount = function() {
    Xt(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== t && o.componentWillUnmount(), o.l || (o.i = t, o.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(-521 * -18 + 2 * 670 + -23 * 466);
  }, appendChild: function(e) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> -2885 * 1 + 4742 + 29 * -64, 1), o.i.removeChild(e);
  } }), Xt(Ee(mg, { context: o.context }, x.__v), o.l);
}
function Ag(x, o) {
  var t = {};
  t.__v = x, t.i = o;
  var e = Ee(bg, t);
  return e.containerInfo = o, e;
}
(en.prototype = new it()).__a = function(x) {
  var o = this, t = is(o.__v), e = o.o.get(x);
  return e[13833 + -1 * 13833]++, function(n) {
    var r = function() {
      o.props.revealOrder ? (e.push(n), Fi(o, x, e)) : n();
    };
    t ? t(r) : r();
  };
}, en.prototype.render = function(x) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = Kt(x.children);
  x.revealOrder && x.revealOrder[0] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.o.set(o[t], this.u = [1, 2998 * -3 + 8214 + -4 * -195, this.u]);
  return x.children;
}, en.prototype.componentDidUpdate = en.prototype.componentDidMount = function() {
  var x = this;
  this.o.forEach(function(o, t) {
    Fi(x, t, o);
  });
};
var as = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -2 * -2293 + 48095 + 7422, yg = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Wg = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, vg = /[A-Z0-9]/g, wg = typeof document < "u", Sg = function(x) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(x);
};
function Bg(x, o, t) {
  return o.__k == null && (o.textContent = ""), Xt(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
function kg(x, o, t) {
  return kr(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
it.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(x) {
  Object.defineProperty(it.prototype, x, { configurable: !(46 * 43 + 3 * -1301 + 11 * 175), get: function() {
    return this["UNSAFE_" + x];
  }, set: function(o) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = o, Object.defineProperty(this, x, t);
  } });
});
var Xi = D.event;
function Gg() {
}
function Og() {
  return this.cancelBubble;
}
function Hg() {
  return this.defaultPrevented;
}
D.event = function(x) {
  return Xi && (x = Xi(x)), x.persist = Gg, x.isPropagationStopped = Og, x.isDefaultPrevented = Hg, x.nativeEvent = x;
};
var nx = {};
nx.enumerable = !(1299 * 4 + -5348 + -153 * -1), nx.configurable = !(-1 * 537 + -5786 + 6323), nx.get = function() {
  return this.class;
};
var Rr, Zg = nx, ji = D.vnode;
D.vnode = function(x) {
  typeof x.type == "string" && function(o) {
    var t = o.props, e = o.type, n = {};
    for (var r in t) {
      var i = t[r];
      if (!(r === "value" && "defaultValue" in t && i == null || wg && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var a = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && !(4406 * -1 + -5188 + 9594) === i ? i = "" : a === "translate" && i === "no" ? i = !(8557 * -1 + 16 * 599 + -1026) : a === "ondoubleclick" ? r = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || Sg(t.type) ? a === "onfocus" ? r = "onfocusin" : a === "onblur" ? r = "onfocusout" : Wg.test(r) ? r = a : -(-100 * -40 + 3476 + 25 * -299) === e.indexOf("-") && yg.test(r) ? r = r.replace(vg, "-$&").toLowerCase() : i === null && (i = void (2116 + 2 * 2675 + 1 * -7466)) : a = r = "oninput", a === "oninput" && n[r = a] && (r = "oninputCapture"), n[r] = i;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Kt(t.children).forEach(function(s) {
      s.props.selected = -(120 * -13 + -5029 + 1318 * 5) != n.value.indexOf(s.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = Kt(t.children).forEach(function(s) {
      s.props.selected = n.multiple ? -(574 * 10 + 6844 + 12583 * -1) != n.defaultValue.indexOf(s.props.value) : n.defaultValue == s.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", Zg)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), o.props = n;
  }(x), x.$$typeof = as, ji && ji(x);
};
var Mi = D.__r;
D.__r = function(x) {
  Mi && Mi(x), Rr = x.__c;
};
var Ji = D.diffed;
D.diffed = function(x) {
  Ji && Ji(x);
  var o = x.props, t = x.__e;
  t != null && x.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), Rr = null;
};
var Be = {};
Be.readContext = function(x) {
  return Rr.__n[x.__c].props.value;
}, Be.useCallback = R0, Be.useContext = d0, Be.useDebugValue = Cx, Be.useDeferredValue = ds, Be.useEffect = He, Be.useId = es, Be.useImperativeHandle = $a, Be.useInsertionEffect = ls, Be.useLayoutEffect = E0, Be.useMemo = tt, Be.useReducer = Hr, Be.useRef = Mt, Be.useState = at, Be.useSyncExternalStore = Is, Be.useTransition = us;
var ss = {};
ss.current = Be;
var cs = {};
cs.ReactCurrentDispatcher = ss;
var Rg = cs;
function Kg(x) {
  return Ee.bind(null, x);
}
function Mx(x) {
  return !!x && x.$$typeof === as;
}
function Pg(x) {
  return Mx(x) && x.type === ft;
}
function Vg(x) {
  return !!x && !!x.displayName && (typeof x.displayName == "string" || x.displayName instanceof String) && x.displayName.startsWith("Memo(");
}
function Tg(x) {
  return Mx(x) ? Gr.apply(null, arguments) : x;
}
function Lg(x) {
  return !!x.__k && (Xt(null, x), !(-4725 * 2 + -7305 + 16755));
}
function Ng(x) {
  return x && (x.base || 7 * 49 + 7224 + 2522 * -3 === x.nodeType && x) || null;
}
var Dg = function(x, o) {
  return x(o);
}, Eg = function(x, o) {
  return x(o);
}, Yg = ft;
function gs(x) {
  x();
}
function ds(x) {
  return x;
}
function us() {
  return [!(1 * -2635 + -196 * 33 + -569 * -16), gs];
}
var ls = E0, Fg = Mx;
function Is(x, o) {
  var t = o(), e = at({ h: { __: t, v: o } }), n = e[-6624 + 22 * -107 + 8978].h, r = e[-6634 * -1 + -1952 + -4681];
  return E0(function() {
    n.__ = t, n.v = o, ho(n) && r({ h: n });
  }, [x, t, o]), He(function() {
    return ho(n) && r({ h: n }), x(function() {
      ho(n) && r({ h: n });
    });
  }, [x]), t;
}
function ho(x) {
  var o, t, e = x.v, n = x.__;
  try {
    var r = e();
    return !((o = n) === (t = r) && (-8161 * 1 + -6573 + -1 * -14734 !== o || (-8003 + 106 * -73 + -926 * -17) / o == (-3211 + 73 * 44) / t) || o != o && t != t);
  } catch {
    return !(4339 * -2 + 2871 + -5807 * -1);
  }
}
var N = {};
N.useState = at, N.useId = es, N.useReducer = Hr, N.useEffect = He, N.useLayoutEffect = E0, N.useInsertionEffect = ls, N.useTransition = us, N.useDeferredValue = ds, N.useSyncExternalStore = Is, N.startTransition = gs, N.useRef = Mt, N.useImperativeHandle = $a, N.useMemo = tt, N.useCallback = R0, N.useContext = d0, N.useDebugValue = Cx, N.version = "17.0.2", N.Children = Cg, N.render = Bg, N.hydrate = kg, N.unmountComponentAtNode = Lg, N.createPortal = Ag, N.createElement = Ee, N.createContext = wn, N.createFactory = Kg, N.cloneElement = Tg, N.createRef = zc, N.Fragment = ft, N.isValidElement = Mx, N.isElement = Fg, N.isFragment = Pg, N.isMemo = Vg, N.findDOMNode = Ng, N.Component = it, N.PureComponent = jo, N.memo = Ig, N.forwardRef = xs, N.flushSync = Eg, N.unstable_batchedUpdates = Dg, N.StrictMode = Yg, N.Suspense = tx, N.SuspenseList = en, N.lazy = hg, N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rg;
var s0 = N, Xg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function jg(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Mg(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Jg(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") && Object.keys(x).length === 1 ? x.default : x;
}
function Ug(x) {
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
const _g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Xg,
  getAugmentedNamespace: Ug,
  getDefaultExportFromCjs: jg,
  getDefaultExportFromNamespaceIfNotNamed: Jg,
  getDefaultExportFromNamespaceIfPresent: Mg
}, Symbol.toStringTag, { value: "Module" }));
var Qg = function(o, t, e, n) {
  var r = e ? e.call(n, o, t) : void 0;
  if (r !== void (17 * 155 + 7432 * -1 + 4797)) return !!r;
  if (o === t) return !0;
  if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
  var i = Object.keys(o), a = Object.keys(t);
  if (i.length !== a.length) return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = 0; c < i.length; c++) {
    var d = i[c];
    if (!s(d)) return !1;
    var g = o[d], C = t[d];
    if (r = e ? e.call(n, g, C, d) : void (6915 * 1 + -1 * 9305 + -478 * -5), r === !1 || r === void (-3 * 180 + -319 * -1 + 13 * 17) && g !== C) return !1;
  }
  return !0;
};
const zg = _g.getDefaultExportFromCjs(Qg);
var xe = "-ms-", cn = "-moz-", ee = "-webkit-", fs = "comm", Jx = "rule", Kr = "decl", qg = "@import", Cs = "@keyframes", $g = "@layer", ps = Math.abs, Pr = String.fromCharCode, Mo = Object.assign;
function ed(x, o) {
  return We(x, 2908 * 2 + 8790 + -2 * 7303) ^ 1 * -6569 + 6 * -1663 + -34 * -488 ? (((o << 8975 + 2 * 3324 + -15621 * 1 ^ We(x, -6008 + -6008 * -1)) << -10776 + -634 * -17 ^ We(x, -1 * 9641 + 7304 + 2338)) << -4273 + -827 * -3 + 1794 ^ We(x, 1434 * 2 + -9150 + 6284)) << -3226 + -1 * -9121 + -5893 ^ We(x, -2 * -3777 + -2 * 11 + -1 * 7529) : 2525 * 3 + -1238 * -2 + -10051 * 1;
}
function hs(x) {
  return x.trim();
}
function Ot(x, o) {
  return (x = o.exec(x)) ? x[0] : x;
}
function E(x, o, t) {
  return x.replace(o, t);
}
function xx(x, o, t) {
  return x.indexOf(o, t);
}
function We(x, o) {
  return x.charCodeAt(o) | 5589 + -3889 * -2 + -1 * 13367;
}
function K0(x, o, t) {
  return x.slice(o, t);
}
function At(x) {
  return x.length;
}
function ms(x) {
  return x.length;
}
function tn(x, o) {
  return o.push(x), x;
}
function td(x, o) {
  return x.map(o).join("");
}
function Ui(x, o) {
  return x.filter(function(t) {
    return !Ot(t, o);
  });
}
var Ux = 1, P0 = 1, bs = -7 * -883 + -1 * 4653 + 191 * -8, ct = -33 * -83 + 6537 + -9276, fe = 1 * 9209 + 30 * -122 + -5549, Y0 = "";
function _x(x, o, t, e, n, r, i, a) {
  var s = {};
  return s.value = x, s.root = o, s.parent = t, s.type = e, s.props = n, s.children = r, s.line = Ux, s.column = P0, s.length = i, s.return = "", s.siblings = a, s;
}
function Nt(x, o) {
  return Mo(_x("", null, null, "", null, null, -8265 + 13 * 277 + 583 * 8, x.siblings), x, { length: -x.length }, o);
}
function y0(x) {
  for (; x.root; ) x = Nt(x.root, { children: [x] });
  tn(x, x.siblings);
}
function nd() {
  return fe;
}
function xd() {
  return fe = ct > -961 * 6 + 1 * -2447 + 8213 ? We(Y0, --ct) : -5 * 1149 + 9665 + -3920, P0--, fe === -9999 + 137 * -5 + -1 * -10694 && (P0 = -10 * 503 + 5 * -217 + 6116, Ux--), fe;
}
function It() {
  return fe = ct < bs ? We(Y0, ct++) : -13 * 515 + 2243 * -1 + 8938, P0++, fe === 43 * 98 + -1 * 5947 + 1743 && (P0 = 91 * 7 + 2939 * -3 + 909 * 9, Ux++), fe;
}
function r0() {
  return We(Y0, ct);
}
function ox() {
  return ct;
}
function Qx(x, o) {
  return K0(Y0, x, o);
}
function Jo(x) {
  switch (x) {
    case 7571 + -67 * 113:
    case 442 * -12 + 7258 + -1945:
    case 2 * 2742 + 11 * -311 + -2053:
    case 1 * 9451 + 4626 * 1 + -14064:
    case 1 * 8682 + -8645 + -5:
      return -6932 + -6937 * -1;
    case 27 * -347 + 1 * -9237 + 57 * 327:
    case -2467 + -1 * 3511 + 6021:
    case -116 * -53 + -505 * -8 + -10144:
    case -4 * 2126 + 4 * 823 + 5259:
    case 2887 * -1 + -5 * -201 + 1944:
    case -5 * -1594 + 18 + -7924 * 1:
    case 126:
    case -6046 + -407 * -15:
    case 544 + -645 * 13 + 7964:
    case -9658 * 1 + 1909 + 31 * 254:
      return -5611 * -1 + -6075 + 468;
    case -4 * -2374 + -3791 + 5647 * -1:
      return -235 * -2 + 2125 + -18 * 144;
    case 1765 + -9 * -881 + 42 * -230:
    case 1127 * -7 + -1 * 787 + 8715:
    case -9606 + 1313 * -3 + 2717 * 5:
    case -771 + 431 * 2:
      return 6 * 1059 + 65 * -62 + 1161 * -2;
    case 9641 * -1 + -512 * -3 + 8146:
    case -743 * 5 + -1792 + 5600:
      return -1 * 5864 + 241 * 28 + 883 * -1;
  }
  return 30 * 107 + -9086 + 5876;
}
function od(x) {
  return Ux = P0 = -317 * -5 + 2201 * -2 + 2818, bs = At(Y0 = x), ct = 262 * 35 + 3914 + 1 * -13084, [];
}
function rd(x) {
  return Y0 = "", x;
}
function mo(x) {
  return hs(Qx(ct - (-1 * -8893 + -4134 + -4758), Uo(x === 2527 * -1 + 1834 * 3 + -2884 ? x + (2699 + 2 * 4388 + -11473) : x === 2188 + -11 * 269 + 811 ? x + (8193 + 16 * -512) : x)));
}
function id(x) {
  for (; (fe = r0()) && fe < -2 * 3382 + -9 * -1073 + -2860; ) It();
  return Jo(x) > -1 * -5098 + -74 * -24 + -6872 || Jo(fe) > -9959 + -877 * 3 + 12593 ? "" : " ";
}
function ad(x, o) {
  for (; --o && It() && !(fe < -8672 + 25 * -33 + 9545 || fe > -4099 + 1 * -1937 + 2 * 3069 || fe > 9557 + -3047 * -1 + -1 * 12547 && fe < 65 || fe > 1 * 5999 + 2 * -4441 + 2953 && fe < 1 * 7246 + -9304 * -1 + 16453 * -1); ) ;
  return Qx(x, ox() + (o < -4790 + -3 * 2823 + 13265 && r0() == 2617 * 1 + 477 * -9 + 244 * 7 && It() == -568 + 12 * 50));
}
function Uo(x) {
  for (; It(); ) switch (fe) {
    case x:
      return ct;
    case 8087 + -1 * 4118 + -1 * 3935:
    case 10414 + 2075 * -5:
      x !== -17322 + 4339 * 4 && x !== 6076 + 6037 * -1 && Uo(fe);
      break;
    case 40:
      x === -1123 * -2 + -1 * 2237 + -32 * -1 && Uo(x);
      break;
    case 61 * -53 + -2044 + 7 * 767:
      It();
      break;
  }
  return ct;
}
function sd(x, o) {
  for (; It() && x + fe !== 8494 * -1 + 7367 + 1174 + (1 * 5154 + -9345 + -4201 * -1); ) if (x + fe === -4817 * -1 + 3507 * 1 + -8282 + 42 && r0() === -13 * 72 + 2 * -2425 + -5833 * -1) break;
  return "/*" + Qx(o, ct - (1805 * -1 + -59 * -1 + 1747 * 1)) + "*" + Pr(x === -657 * -6 + -26 * 178 + 733 ? x : It());
}
function cd(x) {
  for (; !Jo(r0()); ) It();
  return Qx(x, ct);
}
function gd(x) {
  return rd(rx("", null, null, null, [""], x = od(x), -31 * -151 + -2412 + -2269, [5517 + -355 * 25 + 46 * 73], x));
}
function rx(x, o, t, e, n, r, i, a, s) {
  for (var c = 0, d = -479 * 5 + 2714 + 11 * -29, g = i, C = -8033 + -3995 * -1 + 4038, l = 8081 * -1 + -26 * 146 + -107 * -111, p = 8321 + -1 * 8689 + 2 * 184, b = -6749 + -4 * -2411 + -2894, A = -395 * -1 + 7276 + 5 * -1534, u = -445 * 3 + 9902 + 4283 * -2, v = 894 + 73 * 22 + -20 * 125, Z = "", Y = n, j = r, F = e, O = Z; A; ) switch (p = v, v = It()) {
    case 40:
      if (p != -3221 * 1 + -6304 + 169 * 57 && We(O, g - (1 * 3107 + -1 * -1291 + 1 * -4397)) == 58) {
        xx(O += E(mo(v), "&", "&\f"), "&\f", ps(c ? a[c - (-9164 + 7937 * 1 + -2 * -614)] : 0)) != -(8751 * 1 + -1069 * -1 + -9819) && (u = -(112 * -58 + 8813 + -1158 * 2));
        break;
      }
    case 4256 + -8219 * -1 + -12441:
    case -6771 + -577 * 6 + 10272:
    case 1803 * -1 + -9132 + 11026:
      O += mo(v);
      break;
    case 9:
    case 24 + -14 * -113 + -1596:
    case -149 * -23 + -6503 + 3089:
    case -5216 + -29 * 311 + 1 * 14267:
      O += id(p);
      break;
    case 61 * 83 + -1951 + -3020:
      O += ad(ox() - (-1 * -5848 + 2783 * 3 + 7 * -2028), 5 * -1743 + -3840 + 12562);
      continue;
    case 11715 + -2 * 5834:
      switch (r0()) {
        case -9988 * -1 + 5 * 571 + -4267 * 3:
        case 1 * -7717 + -103 * -54 + -2202 * -1:
          tn(dd(sd(It(), ox()), o, t, s), s);
          break;
        default:
          O += "/";
      }
      break;
    case (3 * -398 + -4593 * -2 + -7869) * b:
      a[c++] = At(O) * u;
    case (34 * 235 + -2372 * 2 + 1 * -3121) * b:
    case 59:
    case -2 * 808 + 3224 + 3 * -536:
      switch (v) {
        case -33 * 202 + 2050 + 4616:
        case -15704 + -15829 * -1:
          A = -8199 + 1 * 9404 + -1205;
        case 4 * -2138 + 4627 * 2 + 1 * -643 + d:
          u == -1 && (O = E(O, /\f/g, "")), l > -51 * -37 + -8 * -749 + -7879 && At(O) - g && tn(l > -3543 + 13 * 509 + -3042 ? Qi(O + ";", e, t, g - (-5159 + -60 * -86), s) : Qi(E(O, " ", "") + ";", e, t, g - (-3 * -1207 + -11 * 877 + 44 * 137), s), s);
          break;
        case 97 * 7 + 11 * 309 + 1 * -4019:
          O += ";";
        default:
          if (tn(F = _i(O, o, t, c, d, n, a, Z, Y = [], j = [], g, r), r), v === -757 * 7 + 1 * -7483 + 12905)
            if (d === -1183 + -7 * -169) rx(O, o, F, F, Y, r, g, a, j);
            else switch (C === -3209 + 5 * 967 + -509 * 3 && We(O, -7 * -1381 + -9271 * -1 + -1 * 18935) === -359 * 22 + -685 + 8693 ? 517 * 11 + 2 * -99 + -5389 : C) {
              case -830 * -6 + -2647 + -2233:
              case 4 * -638 + 2 * -3619 + -4949 * -2:
              case -1533 * -2 + 7473 + 149 * -70:
              case -2 * 193 + -17 * 145 + 2966:
                rx(x, F, F, e && tn(_i(x, F, F, 13 * -365 + 7961 * 1 + -12 * 268, -6616 * 1 + 7275 + -659, n, a, Z, n, Y = [], g, j), j), n, j, g, a, e ? Y : j);
                break;
              default:
                rx(O, F, F, F, [""], j, 7 * -1227 + -6043 * -1 + 2546, a, j);
            }
      }
      c = d = l = -3040 + 127 * 56 + 8 * -509, b = u = -1132 * 4 + -2447 + 6976, Z = O = "", g = i;
      break;
    case -8465 + -947 * -9:
      g = -676 * -8 + 2 * -2102 + -1203 + At(O), l = p;
    default:
      if (b < 8094 + -1 * -5938 + -14031 * 1) {
        if (v == 8 * 148 + 3645 + -2 * 2353) --b;
        else if (v == 125 && b++ == 324 * 28 + -8489 + -583 && xd() == 125) continue;
      }
      switch (O += Pr(v), v * b) {
        case 1 * 7817 + 2028 + -9807:
          u = d > -2890 + 2793 * -1 + 1 * 5683 ? 143 * -54 + 1 * -5094 + 12817 : (O += "\f", -(-9509 + -3669 * 1 + 13179));
          break;
        case -2803 * -1 + 8484 + -11243:
          a[c++] = (At(O) - (18 * 291 + -13 * 479 + -165 * -6)) * u, u = 7112 + 1 * -7111;
          break;
        case 64:
          r0() === 3115 * 1 + -1 * -1163 + 1 * -4233 && (O += mo(It())), C = r0(), d = g = At(Z = O += cd(ox())), v++;
          break;
        case 45:
          p === -1 * -2092 + 1555 + 1801 * -2 && At(O) == -9732 + -1823 * -5 + 619 && (b = 8657 + -14 * 404 + -3001);
      }
  }
  return r;
}
function _i(x, o, t, e, n, r, i, a, s, c, d, g) {
  for (var C = n - 1, l = n === 11 * -314 + 971 + -2483 * -1 ? r : [""], p = ms(l), b = 2022 + -2 * 1011, A = 9819 + -1921 * -3 + -15582, u = -1847 * 1 + 1969 + -122; b < e; ++b) for (var v = 1401 + -4 * -36 + -309 * 5, Z = K0(x, C + (-1522 + 1 * 1523), C = ps(A = i[b])), Y = x; v < p; ++v) (Y = hs(A > 2194 * -3 + -9874 * -1 + -3292 ? l[v] + " " + Z : E(Z, /&\f/g, l[v]))) && (s[u++] = Y);
  return _x(x, o, t, n === 0 ? Jx : a, s, c, d, g);
}
function dd(x, o, t, e) {
  return _x(x, o, t, fs, Pr(nd()), K0(x, -7816 * -1 + -4909 * 1 + -2905, -(-7782 * 1 + 4958 + -471 * -6)), -1 * -2741 + -1 * 9427 + 6686, e);
}
function Qi(x, o, t, e, n) {
  return _x(x, o, t, Kr, K0(x, 13 * -681 + -7 * 1322 + 18107, e), K0(x, e + 1, -(11459 + 337 * -34)), e, n);
}
function As(x, o, t) {
  switch (ed(x, o)) {
    case 9779 + -1 * 4676:
      return ee + "print-" + x + x;
    case -4816 + -93 * -47 + -281 * -22:
    case 4619 + 11 * -38:
    case -2 * -2604 + 4633 + -1666 * 4:
    case 7898 * -1 + 1 * 5886 + 55 * 99:
    case 1641:
    case -5896 + 5596 * -1 + 1 * 15949:
    case -8812 + -1 * 311 + 12044:
    case -12 * 505 + -77 * -141 + -31 * -25:
    case 9241 * -1 + -10214 + 25811:
    case 5844:
    case 7684 + 1970 * -2 + -553 * 1:
    case -3706 + 10351 * 1:
    case -5165 + 190 * 43:
    case -4 * 827 + 4856 + 1 * 4843:
    case 5879:
    case -8571 + 1 * -6641 + 1389 * 15:
    case -2 * 631 + -1 * -1607 + 5790:
    case -9698 + -25 * -7 + 14122:
    case -1830 + -2 * -55 + -1 * -6575:
    case -21 * -103 + -3 * 591 + 5 * 765:
    case 3 * 2455 + 3314 + 3 * -1430:
    case -3570 + -3291 * 3 + 6 * 3092:
    case 5365:
    case 1 * 5757 + -3663 + 3527:
    case -3572 * -1 + -3927 + -4 * -1046:
      return ee + x + x;
    case 1 * -7826 + -1638 + 14253:
      return cn + x + x;
    case 283 * -19 + 24 * 386 + 1 * 1462:
    case -4131 + -373 * 21 + 16210:
    case -13900 + -2 * -9355:
    case 827 * 13 + -7710 + 3927:
    case 2809 + 1 * 922 + -25 * 39:
      return ee + x + cn + x + xe + x + x;
    case -23 * -274 + 5035 + -5401:
      switch (We(x, o + (79 * 47 + -5031 + -1329 * -1))) {
        case 711 + 293 * -13 + 3212:
          return ee + x + xe + E(x, /[svh]\w+-[tblr]{2}/, "tb") + x;
        case 4764 * -2 + 743 + -1 * -8893:
          return ee + x + xe + E(x, /[svh]\w+-[tblr]{2}/, "tb-rl") + x;
        case -196 * 46 + -8261 + -5774 * -3:
          return ee + x + xe + E(x, /[svh]\w+-[tblr]{2}/, "lr") + x;
      }
    case -1770 + -1297 * -4 + -2 * -1705:
    case -23 * -172 + 4656 + -724 * 6:
    case 1 * 8102 + -7848 + 2649:
      return ee + x + xe + x + x;
    case 266 * 12 + -2 * 463 + 3899:
      return ee + x + xe + "flex-" + x + x;
    case 5187:
      return ee + x + E(x, /(\w+).+(:[^]+)/, ee + "box-$1$2" + xe + "flex-$1$2") + x;
    case -10690 + 1 * -6326 + 22459:
      return ee + x + xe + "flex-item-" + E(x, /flex-|-self/g, "") + (Ot(x, /flex-|baseline/) ? "" : xe + "grid-row-" + E(x, /flex-|-self/g, "")) + x;
    case 70 * 105 + 1 * 8587 + -2 * 5631:
      return ee + x + xe + "flex-line-pack" + E(x, /align-content|flex-|-self/g, "") + x;
    case -69 * -137 + -2228 + -1677:
      return ee + x + xe + E(x, "shrink", "negative") + x;
    case 1 * -2725 + -578 + 8595:
      return ee + x + xe + E(x, "basis", "preferred-size") + x;
    case 6060:
      return ee + "box-" + E(x, "-grow", "") + ee + x + xe + E(x, "grow", "positive") + x;
    case -5123 * 1 + 2731 + 23 * 302:
      return ee + E(x, /([^-])(transform)/g, "$1" + ee + "$2") + x;
    case -1423 * 7 + 230 * 8 + 14308:
      return E(E(E(x, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), x, "") + x;
    case -5925 + 4909 * 1 + 6511:
    case 7401 + 94 * 59 + 12 * -749:
      return E(x, /(image-set\([^]*)/, ee + "$1$`$1");
    case 4968:
      return E(E(x, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + xe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + x + x;
    case 7516 + -1 * 379 + 979 * -3:
      if (!Ot(x, /flex-|baseline/)) return xe + "grid-column-align" + K0(x, o) + x;
      break;
    case -203 * 25 + 7252 + -5 * -83:
    case 7905 + 4489 * -1 + -56:
      return xe + E(x, "template-", "") + x;
    case 7903 + -1 * 5659 + 2140:
    case -21 * 97 + 3621 + 2032:
      return t && t.some(function(e, n) {
        return o = n, Ot(e.props, /grid-\w+-end/);
      }) ? ~xx(x + (t = t[o].value), "span", -47 * 111 + -7966 + 1 * 13183) ? x : xe + E(x, "-start", "") + x + xe + "grid-row-span:" + (~xx(t, "span", -5575 + -5575 * -1) ? Ot(t, /\d+/) : +Ot(t, /\d+/) - +Ot(x, /\d+/)) + ";" : xe + E(x, "-start", "") + x;
    case 1313 * 1 + 8740 + -5157:
    case 4128:
      return t && t.some(function(e) {
        return Ot(e.props, /grid-\w+-start/);
      }) ? x : xe + E(E(x, "-end", "-span"), "span ", "") + x;
    case 1958 * -1 + -7 * 953 + -3181 * -4:
    case -1 * 4817 + -5066 + 1 * 13466:
    case 2847 + -3142 * -1 + -1921:
    case -4730 + 3 * 1719 + 2105:
      return E(x, /(.+)-inline(.+)/, ee + "$1$2") + x;
    case -23 * -479 + -5387 + 2486:
    case -73 * 91 + 5059 + -67 * -129:
    case -11248 * -1 + -7225 + -2 * -865:
    case 808 + 4783 * 2 + 1 * -4839:
    case -6598 + -1 * -12043:
    case 9569 * 1 + 4663 + -8531:
    case -569 * -5 + 3261 * 2 + 2 * -2217:
    case 259 * 29 + -54 * 130 + -23 * -182:
    case 1348 * -7 + -1 * -10723 + 4246:
    case 5789:
    case 11 * 413 + -8856 + 13 * 718:
    case -1846 + -1 * 9321 + 2276 * 7:
      if (At(x) - (-442 * 7 + 3640 + 1 * -545) - o > -2543 + -413 * 11 + 7092) switch (We(x, o + (2395 + -1685 * 5 + 6031))) {
        case -1 * -2426 + -295 * -19 + -7922 * 1:
          if (We(x, o + (-41 * -2 + 3384 + -3462)) !== 5251 + 137 * -38) break;
        case 14600 + -22 * 659:
          return E(x, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + cn + (We(x, o + 3) == 1362 * 1 + 7355 + 1 * -8609 ? "$3" : "$2-$3")) + x;
        case 13 * -246 + -3534 + 6847:
          return ~xx(x, "stretch", 6485 + -267 * 29 + 629 * 2) ? As(E(x, "stretch", "fill-available"), o, t) + x : x;
      }
      break;
    case -2 * 4693 + 9835 + -1 * -4703:
    case 5154 * 1 + 11551 * 1 + -10785:
      return E(x, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, r, i, a, s, c) {
        return xe + n + ":" + r + c + (i ? xe + n + "-span:" + (a ? s : +s - +r) + c : "") + x;
      });
    case -11 * -778 + 1 * 9740 + -13349:
      if (We(x, o + (3986 + 1 * 4274 + 2 * -4127)) === -760 * 4 + 1221 + 1940) return E(x, ":", ":" + ee) + x;
      break;
    case 6444:
      switch (We(x, We(x, -5371 + 1795 * 3) === -8438 + -6351 * -1 + 1 * 2132 ? 1 * 5647 + 79 * 79 + -2 * 5935 : 11)) {
        case -755 + -37 * 203 + 7 * 1198:
          return E(x, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (We(x, -3 * -2066 + -3267 + -1 * 2917) === -1 * 7669 + -7014 + -263 * -56 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + xe + "$2box$3") + x;
        case 1 * -8248 + -1 * 8741 + 23 * 743:
          return E(x, ":", ":" + xe) + x;
      }
      break;
    case 34 * 87 + -3375 + 1534 * 4:
    case 369 * 21 + 9427 + 1 * -14529:
    case -1 * 6553 + -7522 + 16210:
    case 1184 + -2 * -1086 + 571:
    case 1251 + 39 * 207 + -2311 * 3:
      return E(x, "scroll-", "scroll-snap-") + x;
  }
  return x;
}
function px(x, o) {
  for (var t = "", e = -79 * 83 + -9 * 81 + -1 * -7286; e < x.length; e++) t += o(x[e], e, x, o) || "";
  return t;
}
function ud(x, o, t, e) {
  switch (x.type) {
    case $g:
      if (x.children.length) break;
    case qg:
    case Kr:
      return x.return = x.return || x.value;
    case fs:
      return "";
    case Cs:
      return x.return = x.value + "{" + px(x.children, e) + "}";
    case Jx:
      if (!At(x.value = x.props.join(","))) return "";
  }
  return At(t = px(x.children, e)) ? x.return = x.value + "{" + t + "}" : "";
}
function ld(x) {
  var o = ms(x);
  return function(t, e, n, r) {
    for (var i = "", a = -1 * -4711 + -197 * 11 + 212 * -12; a < o; a++) i += x[a](t, e, n, r) || "";
    return i;
  };
}
function Id(x) {
  return function(o) {
    o.root || (o = o.return) && x(o);
  };
}
function fd(x, o, t, e) {
  if (x.length > -(-4 * 1596 + 9600 + -3215) && !x.return)
    switch (x.type) {
      case Kr:
        x.return = As(x.value, x.length, t);
        return;
      case Cs:
        return px([Nt(x, { value: E(x.value, "@", "@" + ee) })], e);
      case Jx:
        if (x.length) return td(t = x.props, function(n) {
          switch (Ot(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              y0(Nt(x, { props: [E(n, /:(read-\w+)/, ":" + cn + "$1")] }));
              var r = {};
              r.props = [n], y0(Nt(x, r)), Mo(x, { props: Ui(t, e) });
              break;
            case "::placeholder":
              y0(Nt(x, { props: [E(n, /:(plac\w+)/, ":" + ee + "input-$1")] })), y0(Nt(x, { props: [E(n, /:(plac\w+)/, ":" + cn + "$1")] })), y0(Nt(x, { props: [E(n, /:(plac\w+)/, xe + "input-$1")] }));
              var i = {};
              i.props = [n], y0(Nt(x, i)), Mo(x, { props: Ui(t, e) });
              break;
          }
          return "";
        });
    }
}
var L = {};
L.animationIterationCount = 1, L.aspectRatio = 1, L.borderImageOutset = 1, L.borderImageSlice = 1, L.borderImageWidth = 1, L.boxFlex = 1, L.boxFlexGroup = 1, L.boxOrdinalGroup = 1, L.columnCount = 1, L.columns = 1, L.flex = 1, L.flexGrow = 1, L.flexPositive = 1, L.flexShrink = 1, L.flexNegative = 1, L.flexOrder = 1, L.gridRow = 1, L.gridRowEnd = 1, L.gridRowSpan = 1, L.gridRowStart = 1, L.gridColumn = 1, L.gridColumnEnd = 1, L.gridColumnSpan = 1, L.gridColumnStart = 1, L.msGridRow = 1, L.msGridRowSpan = 1, L.msGridColumn = 1, L.msGridColumnSpan = 1, L.fontWeight = 1, L.lineHeight = 1, L.opacity = 1, L.order = 1, L.orphans = 1, L.tabSize = 1, L.widows = 1, L.zIndex = 1, L.zoom = 1, L.WebkitLineClamp = 1, L.fillOpacity = 1, L.floodOpacity = 1, L.stopOpacity = 1, L.strokeDasharray = 1, L.strokeDashoffset = 1, L.strokeMiterlimit = 1, L.strokeOpacity = 1, L.strokeWidth = 1;
var Cd = L, q = {}, c0 = typeof process < "u" && void (-6131 + 6131 * 1) !== q && (q.REACT_APP_SC_ATTR || q.SC_ATTR) || "data-styled", ys = "active", Ws = "data-styled-version", zx = "6.1.11", Vr = `/*!sc*/
`, Tr = typeof window < "u" && "HTMLElement" in window, pd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-3649 + 1 * 2221 + 1428) !== q && q.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && q.REACT_APP_SC_DISABLE_SPEEDY !== "" ? q.REACT_APP_SC_DISABLE_SPEEDY !== "false" && q.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-3 * 357 + 283 * -25 + 8146) !== q && void (6 * -1654 + 2056 + 7868) !== q.SC_DISABLE_SPEEDY && q.SC_DISABLE_SPEEDY !== "" ? q.SC_DISABLE_SPEEDY !== "false" && q.SC_DISABLE_SPEEDY : q.NODE_ENV !== "production"), zi = /invalid hook call/i, Yn = /* @__PURE__ */ new Set(), hd = function(x, o) {
  if (q.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(x).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var r = !0;
      console.error = function(i) {
        for (var a = [], s = -8707 + -3481 * -1 + 5227; s < arguments.length; s++) a[s - (-5165 * 1 + 8653 + -3487)] = arguments[s];
        zi.test(i) ? (r = !1, Yn.delete(e)) : n.apply(void (-351 * 21 + -9874 + 17245), H0([i], a, !1));
      }, Mt(), r && !Yn.has(e) && (console.warn(e), Yn.add(e));
    } catch (i) {
      zi.test(i.message) && Yn.delete(e);
    } finally {
      console.error = n;
    }
  }
}, qx = Object.freeze([]), V0 = Object.freeze({});
function md(x, o, t) {
  return void (-1 * 6983 + -1 * -2137 + -2423 * -2) === t && (t = V0), x.theme !== t.theme && x.theme || o || t.theme;
}
var _o = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), bd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ad = /(^-|-$)/g;
function qi(x) {
  return x.replace(bd, "-").replace(Ad, "");
}
var yd = /(a)(d)/gi, Fn = -6 * -1447 + 7593 + -16223, $i = function(x) {
  return String.fromCharCode(x + (x > -4333 * -1 + -1 * 1407 + -2901 ? 1 * -6214 + -1648 + 7901 * 1 : 1512 + -73 * -5 + 178 * -10));
};
function Qo(x) {
  var o, t = "";
  for (o = Math.abs(x); o > Fn; o = o / Fn | -4 * -2084 + -3046 + 46 * -115) t = $i(o % Fn) + t;
  return ($i(o % Fn) + t).replace(yd, "$1-$2");
}
var bo, vs = -32 * -326 + -3080 + 9 * -219, e0 = function(x, o) {
  for (var t = o.length; t; ) x = (3166 * 1 + 3707 * 1 + -6840) * x ^ o.charCodeAt(--t);
  return x;
}, ws = function(x) {
  return e0(vs, x);
};
function Wd(x) {
  return Qo(ws(x) >>> 3934 + 3934 * -1);
}
function Ss(x) {
  return q.NODE_ENV !== "production" && typeof x == "string" && x || x.displayName || x.name || "Component";
}
function Ao(x) {
  return typeof x == "string" && (q.NODE_ENV === "production" || x.charAt(-7853 + 41 * -142 + 13675) === x.charAt(-2 * -2221 + -43 * 231 + -289 * -19).toLowerCase());
}
var rt = {};
rt.childContextTypes = !0, rt.contextType = !0, rt.contextTypes = !0, rt.defaultProps = !0, rt.displayName = !0, rt.getDefaultProps = !0, rt.getDerivedStateFromError = !0, rt.getDerivedStateFromProps = !0, rt.mixins = !0, rt.propTypes = !0, rt.type = !0;
var Dt = {};
Dt.name = !0, Dt.length = !0, Dt.prototype = !0, Dt.caller = !0, Dt.callee = !0, Dt.arguments = !0, Dt.arity = !0;
var qt = {};
qt.$$typeof = !0, qt.compare = !0, qt.defaultProps = !0, qt.displayName = !0, qt.propTypes = !0, qt.type = !0;
var v0 = {};
v0.$$typeof = !0, v0.render = !0, v0.defaultProps = !0, v0.displayName = !0, v0.propTypes = !0;
var Bs = typeof Symbol == "function" && Symbol.for, ks = Bs ? Symbol.for("react.memo") : 1 * 118739 + -16026 * 5 + 2 * 10753, vd = Bs ? Symbol.for("react.forward_ref") : 60112, wd = rt, Sd = Dt, Gs = qt, Bd = ((bo = {})[vd] = v0, bo[ks] = Gs, bo);
function ea(x) {
  return ("type" in (o = x) && o.type.$$typeof) === ks ? Gs : "$$typeof" in x ? Bd[x.$$typeof] : wd;
  var o;
}
var kd = Object.defineProperty, Gd = Object.getOwnPropertyNames, ta = Object.getOwnPropertySymbols, Od = Object.getOwnPropertyDescriptor, Hd = Object.getPrototypeOf, na = Object.prototype;
function Os(x, o, t) {
  if (typeof o != "string") {
    if (na) {
      var e = Hd(o);
      e && e !== na && Os(x, e, t);
    }
    var n = Gd(o);
    ta && (n = n.concat(ta(o)));
    for (var r = ea(x), i = ea(o), a = -5750 + -7791 * 1 + 1 * 13541; a < n.length; ++a) {
      var s = n[a];
      if (!(s in Sd || t && t[s] || i && s in i || r && s in r)) {
        var c = Od(o, s);
        try {
          kd(x, s, c);
        } catch {
        }
      }
    }
  }
  return x;
}
function T0(x) {
  return typeof x == "function";
}
function Lr(x) {
  return typeof x == "object" && "styledComponentId" in x;
}
function n0(x, o) {
  return x && o ? "".concat(x, " ").concat(o) : x || o || "";
}
function xa(x, o) {
  if (x.length === 0) return "";
  for (var t = x[1129 * 4 + -6879 + -2363 * -1], e = -1 * 1960 + 3165 + 28 * -43; e < x.length; e++) t += x[e];
  return t;
}
function L0(x) {
  return x !== null && typeof x == "object" && x.constructor.name === Object.name && !("props" in x && x.$$typeof);
}
function zo(x, o, t) {
  if (void (27 * -293 + 5326 * 1 + 2585) === t && (t = !1), !t && !L0(x) && !Array.isArray(x)) return o;
  if (Array.isArray(o))
    for (var e = -1234 * 2 + 6274 + -3806; e < o.length; e++) x[e] = zo(x[e], o[e]);
  else if (L0(o))
    for (var e in o) x[e] = zo(x[e], o[e]);
  return x;
}
function Nr(x, o) {
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
var Zd = q.NODE_ENV !== "production" ? me : {};
function Rd() {
  for (var x = [], o = 4 * 1502 + 4322 + -10330; o < arguments.length; o++) x[o] = arguments[o];
  for (var t = x[-9143 + 1 * 7333 + 181 * 10], e = [], n = 1607 * -1 + -7988 + -2399 * -4, r = x.length; n < r; n += 1 * 1704 + 1 * 1823 + 41 * -86) e.push(x[n]);
  return e.forEach(function(i) {
    t = t.replace(/%[a-z]/, i);
  }), t;
}
function F0(x) {
  for (var o = [], t = 45 * -167 + 5 * 797 + -3 * -1177; t < arguments.length; t++) o[t - (-3362 + -21 * -339 + -3756)] = arguments[t];
  return q.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(x, " for more information.").concat(o.length > 6636 + 5303 * -1 + -1333 ? " Args: ".concat(o.join(", ")) : "")) : new Error(Rd.apply(void 0, H0([Zd[x]], o, !1)).trim());
}
var Kd = function() {
  function x(o) {
    this.groupSizes = new Uint32Array(-8314 + -1940 * -1 + -313 * -22), this.length = 512, this.tag = o;
  }
  return x.prototype.indexOfGroup = function(o) {
    for (var t = 3994 * -1 + 2 * 2654 + 657 * -2, e = 0; e < o; e++) t += this.groupSizes[e];
    return t;
  }, x.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, r = n; o >= r; ) if ((r <<= -3758 * -1 + -7643 * 1 + -29 * -134) < 3489 + 289 * 31 + 1 * -12448) throw F0(-34 * -101 + 746 * -11 + 4788, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(e), this.length = r;
      for (var i = n; i < r; i++) this.groupSizes[i] = 19 * -445 + -3133 + 11588 * 1;
    }
    for (var a = this.indexOfGroup(o + (6350 * -1 + 2161 * -2 + 1 * 10673)), s = (i = 0, t.length); i < s; i++) this.tag.insertRule(a, t[i]) && (this.groupSizes[o]++, a++);
  }, x.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), n = e + t;
      this.groupSizes[o] = 1224 + 60 * 12 + -27 * 72;
      for (var r = e; r < n; r++) this.tag.deleteRule(e);
    }
  }, x.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || 1224 + 1 * 2759 + -3983 === this.groupSizes[o]) return t;
    for (var e = this.groupSizes[o], n = this.indexOfGroup(o), r = n + e, i = n; i < r; i++) t += "".concat(this.tag.getRule(i)).concat(Vr);
    return t;
  }, x;
}(), Pd = 6463 + -8089 * -1 + -1 * 14551 << 14 * 439 + 8289 + -14405 * 1, ix = /* @__PURE__ */ new Map(), hx = /* @__PURE__ */ new Map(), ax = 0 + -3506 * -1 + 1 * -3505, Xn = function(x) {
  if (ix.has(x)) return ix.get(x);
  for (; hx.has(ax); ) ax++;
  var o = ax++;
  if (q.NODE_ENV !== "production" && ((34 * 248 + -1150 + -1 * 7282 | o) < -7959 + -3 * 1867 + 13560 || o > Pd)) throw F0(2598 + -2 * 1291, "".concat(o));
  return ix.set(x, o), hx.set(o, x), o;
}, Vd = function(x, o) {
  ax = o + (3 * -179 + -7282 * 1 + -170 * -46), ix.set(x, o), hx.set(o, x);
}, Td = "style[".concat(c0, "][").concat(Ws, '="').concat(zx, '"]'), Ld = new RegExp("^".concat(c0, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Nd = function(x, o, t) {
  for (var e, n = t.split(","), r = 8872 * 1 + 6791 + -15663, i = n.length; r < i; r++) (e = n[r]) && x.registerName(o, e);
}, Dd = function(x, o) {
  for (var t, e = ((t = o.textContent) !== null && void (3257 * 1 + 4059 * 1 + -7316) !== t ? t : "").split(Vr), n = [], r = 0, i = e.length; r < i; r++) {
    var a = e[r].trim();
    if (a) {
      var s = a.match(Ld);
      if (s) {
        var c = 0 | parseInt(s[1], 10), d = s[6680 + 4 * 1480 + -12598];
        c !== 0 && (Vd(d, c), Nd(x, d, s[3]), x.getTag().insertRules(c, n)), n.length = 247 * 34 + 269 * 34 + -516 * 34;
      } else n.push(a);
    }
  }
};
function Ed() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Hs = function(x) {
  var o = document.head, t = x || o, e = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(c0, "]")));
    return s[s.length - (1163 * 5 + 47 * -202 + 3680)];
  }(t), r = void (-215 * -25 + 6578 + 1 * -11953) !== n ? n.nextSibling : null;
  e.setAttribute(c0, ys), e.setAttribute(Ws, zx);
  var i = Ed();
  return i && e.setAttribute("nonce", i), t.insertBefore(e, r), e;
}, Yd = function() {
  function x(o) {
    this.element = Hs(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = 4839 + -86 * 74 + -5 * -305, r = e.length; n < r; n++) {
        var i = e[n];
        if (i.ownerNode === t) return i;
      }
      throw F0(-1 * -5524 + -5682 + -7 * -25);
    }(this.element), this.length = -45 * 185 + 5241 + 6 * 514;
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
}(), Fd = function() {
  function x(o) {
    this.element = Hs(o), this.nodes = this.element.childNodes, this.length = 2245 + 21 * -113 + 16 * 8;
  }
  return x.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= 92 * 97 + 706 + -107 * 90) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, x.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, x;
}(), Xd = function() {
  function x(o) {
    this.rules = [], this.length = 4247 * -1 + -8082 + 12329;
  }
  return x.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, 9130 + 5015 * 1 + -14145, t), this.length++, !0);
  }, x.prototype.deleteRule = function(o) {
    this.rules.splice(o, -1342 + 219 * -14 + -1 * -4409), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, x;
}(), oa = Tr, jd = { isServer: !Tr, useCSSOMInjection: !pd }, Zs = function() {
  function x(o, t, e) {
    void (1 * -4319 + -3 * 2850 + -17 * -757) === o && (o = V0), void (-1 * 1201 + -6287 * 1 + 7488) === t && (t = {});
    var n = this;
    this.options = Je(Je({}, jd), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && Tr && oa && (oa = !1, function(r) {
      for (var i = document.querySelectorAll(Td), a = 4923 * -1 + -1 * 3730 + -1 * -8653, s = i.length; a < s; a++) {
        var c = i[a];
        c && c.getAttribute(c0) !== ys && (Dd(r, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), Nr(this, function() {
      return function(r) {
        for (var i = r.getTag(), a = i.length, s = "", c = function(g) {
          var C = function(u) {
            return hx.get(u);
          }(g);
          if (void (15609 + -3 * 5203) === C) return "continue";
          var l = r.names.get(C), p = i.getGroup(g);
          if (void (-9 * 803 + 642 + 3 * 2195) === l || -1 * -7737 + 2834 + -961 * 11 === p.length) return "continue";
          var b = "".concat(c0, ".g").concat(g, '[id="').concat(C, '"]'), A = "";
          void (8255 + -127 * 65) !== l && l.forEach(function(u) {
            u.length > -1536 * 1 + -4988 + -6524 * -1 && (A += "".concat(u, ","));
          }), s += "".concat(p).concat(b, '{content:"').concat(A, '"}').concat(Vr);
        }, d = 5598 * 1 + 7 * 755 + -10883; d < a; d++) c(d);
        return s;
      }(n);
    });
  }
  return x.registerId = function(o) {
    return Xn(o);
  }, x.prototype.reconstructWithOptions = function(o, t) {
    return void (-1 * -3309 + 879 + 2094 * -2) === t && (t = !0), new x(Je(Je({}, this.options), o), this.gs, t && this.names || void (9797 * 1 + 3837 + -13634));
  }, x.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || 11 * -905 + -1 * 7757 + 328 * 54) + 1;
  }, x.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new Xd(n) : e ? new Yd(n) : new Fd(n);
    }(this.options), new Kd(o)));
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
    this.tag = void (847 * -1 + 7685 + -6838);
  }, x;
}(), Md = /&/g, Jd = /^\s*\/\/.*$/gm;
function Rs(x, o) {
  return x.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(o, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(o, " ")), t.props = t.props.map(function(e) {
      return "".concat(o, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Rs(t.children, o)), t;
  });
}
function Ks(x) {
  var o, t, e, n = x === void 0 ? V0 : x, r = n.options, i = void (698 + -1138 * -6 + 142 * -53) === r ? V0 : r, a = n.plugins, s = void (7 * -139 + -9694 * 1 + 10667) === a ? qx : a, c = function(C, l, p) {
    return p.startsWith(t) && p.endsWith(t) && p.replaceAll(t, "").length > -7 * 733 + 9227 + -8 * 512 ? ".".concat(o) : C;
  }, d = s.slice();
  d.push(function(C) {
    C.type === Jx && C.value.includes("&") && (C.props[0] = C.props[1 * 8777 + 454 + 543 * -17].replace(Md, t).replace(e, c));
  }), i.prefix && d.push(fd), d.push(ud);
  var g = function(C, l, p, b) {
    l === void 0 && (l = ""), p === void 0 && (p = ""), void (-456 + -5219 * -1 + 4763 * -1) === b && (b = "&"), o = b, t = l, e = new RegExp("\\".concat(t, "\\b"), "g");
    var A = C.replace(Jd, ""), u = gd(p || l ? "".concat(p, " ").concat(l, " { ").concat(A, " }") : A);
    i.namespace && (u = Rs(u, i.namespace));
    var v = [];
    return px(u, ld(d.concat(Id(function(Z) {
      return v.push(Z);
    })))), v;
  };
  return g.hash = s.length ? s.reduce(function(C, l) {
    return l.name || F0(1 * -5914 + 7489 * 1 + -1560), e0(C, l.name);
  }, vs).toString() : "", g;
}
var Ud = new Zs(), qo = Ks(), Dr = s0.createContext({ shouldForwardProp: void (-771 * -1 + -7515 + 6744), styleSheet: Ud, stylis: qo });
Dr.Consumer;
var _d = s0.createContext(void 0);
function $o() {
  return d0(Dr);
}
function Qd(x) {
  var o = at(x.stylisPlugins), t = o[0], e = o[-6697 + 89 * 98 + -2024], n = $o().styleSheet, r = tt(function() {
    var d = n, g = {};
    return g.useCSSOMInjection = !1, x.sheet ? d = x.sheet : x.target && (d = d.reconstructWithOptions({ target: x.target }, !1)), x.disableCSSOMInjection && (d = d.reconstructWithOptions(g)), d;
  }, [x.disableCSSOMInjection, x.sheet, x.target, n]), i = tt(function() {
    var d = {};
    d.namespace = x.namespace, d.prefix = x.enableVendorPrefixes;
    var g = {};
    return g.options = d, g.plugins = t, Ks(g);
  }, [x.enableVendorPrefixes, x.namespace, t]);
  He(function() {
    zg(t, x.stylisPlugins) || e(x.stylisPlugins);
  }, [x.stylisPlugins]);
  var a = tt(function() {
    var d = {};
    return d.shouldForwardProp = x.shouldForwardProp, d.styleSheet = r, d.stylis = i, d;
  }, [x.shouldForwardProp, r, i]), s = {};
  s.value = a;
  var c = {};
  return c.value = i, s0.createElement(Dr.Provider, s, s0.createElement(_d.Provider, c, x.children));
}
var ra = function() {
  function x(o, t) {
    var e = this;
    this.inject = function(n, r) {
      void (3252 + 813 * -4) === r && (r = qo);
      var i = e.name + r.hash;
      n.hasNameForId(e.id, i) || n.insertRules(e.id, i, r(e.rules, i, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, Nr(this, function() {
      throw F0(-4721 * -1 + -7249 + 2540, String(e.name));
    });
  }
  return x.prototype.getName = function(o) {
    return void (10 * 551 + -3 * 569 + -3803) === o && (o = qo), this.name + o.hash;
  }, x;
}(), zd = function(x) {
  return x >= "A" && x <= "Z";
};
function ia(x) {
  for (var o = "", t = 6223 + 503 * -10 + 1 * -1193; t < x.length; t++) {
    var e = x[t];
    if (829 * -1 + -217 * 33 + 131 * 61 === t && e === "-" && x[0] === "-") return x;
    zd(e) ? o += "-" + e.toLowerCase() : o += e;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var Ps = function(x) {
  return x == null || x === !1 || x === "";
}, Vs = function(x) {
  var o, t, e = [];
  for (var n in x) {
    var r = x[n];
    x.hasOwnProperty(n) && !Ps(r) && (Array.isArray(r) && r.isCss || T0(r) ? e.push("".concat(ia(n), ":"), r, ";") : L0(r) ? e.push.apply(e, H0(H0(["".concat(n, " {")], Vs(r), !1), ["}"], !1)) : e.push("".concat(ia(n), ": ").concat((o = n, (t = r) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 59 * -67 + 3836 * 2 + -1 * 3719 === t || o in Cd || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function i0(x, o, t, e) {
  if (Ps(x)) return [];
  if (Lr(x)) return [".".concat(x.styledComponentId)];
  if (T0(x)) {
    if (!T0(r = x) || r.prototype && r.prototype.isReactComponent || !o) return [x];
    var n = x(o);
    return q.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof ra || L0(n) || n === null || console.error("".concat(Ss(x), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), i0(n, o, t, e);
  }
  var r;
  return x instanceof ra ? t ? (x.inject(t, e), [x.getName(e)]) : [x] : L0(x) ? Vs(x) : Array.isArray(x) ? Array.prototype.concat.apply(qx, x.map(function(i) {
    return i0(i, o, t, e);
  })) : [x.toString()];
}
function qd(x) {
  for (var o = -2239 * 4 + 1334 * 2 + 6288; o < x.length; o += 1) {
    var t = x[o];
    if (T0(t) && !Lr(t)) return !1;
  }
  return !0;
}
var $d = ws(zx), eu = function() {
  function x(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = q.NODE_ENV === "production" && (void (6957 + -92 * -18 + -8613) === e || e.isStatic) && qd(o), this.componentId = t, this.baseHash = e0($d, t), this.baseStyle = e, Zs.registerId(t);
  }
  return x.prototype.generateAndInjectStyles = function(o, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = n0(n, this.staticRulesId);
      else {
        var r = xa(i0(this.rules, o, t, e)), i = Qo(e0(this.baseHash, r) >>> 1 * 8828 + -4652 * 1 + 48 * -87);
        if (!t.hasNameForId(this.componentId, i)) {
          var a = e(r, ".".concat(i), void 0, this.componentId);
          t.insertRules(this.componentId, i, a);
        }
        n = n0(n, i), this.staticRulesId = i;
      }
    else {
      for (var s = e0(this.baseHash, e.hash), c = "", d = -60 * 72 + 4551 * -1 + 8871; d < this.rules.length; d++) {
        var g = this.rules[d];
        if (typeof g == "string") c += g, q.NODE_ENV !== "production" && (s = e0(s, g));
        else if (g) {
          var C = xa(i0(g, o, t, e));
          s = e0(s, C + d), c += C;
        }
      }
      if (c) {
        var l = Qo(s >>> 0);
        t.hasNameForId(this.componentId, l) || t.insertRules(this.componentId, l, e(c, ".".concat(l), void (-6871 * -1 + 7425 + -14296), this.componentId)), n = n0(n, l);
      }
    }
    return n;
  }, x;
}(), Ts = s0.createContext(void (2182 + 9041 * -1 + -6859 * -1));
Ts.Consumer;
var yo = {}, aa = /* @__PURE__ */ new Set();
function tu(x, o, t) {
  var e = Lr(x), n = x, r = !Ao(x), i = o.attrs, a = void (-4291 + -17 * -548 + -75 * 67) === i ? qx : i, s = o.componentId, c = s === void 0 ? function(j, F) {
    var O = typeof j != "string" ? "sc" : qi(j);
    yo[O] = (yo[O] || 1 * 9033 + -75 * -132 + 6311 * -3) + (-1519 + 47 * 71 + -1817);
    var M = "".concat(O, "-").concat(Wd(zx + O + yo[O]));
    return F ? "".concat(F, "-").concat(M) : M;
  }(o.displayName, o.parentComponentId) : s, d = o.displayName, g = void (-8893 + 2 * -1291 + -3825 * -3) === d ? function(j) {
    return Ao(j) ? "styled.".concat(j) : "Styled(".concat(Ss(j), ")");
  }(x) : d, C = o.displayName && o.componentId ? "".concat(qi(o.displayName), "-").concat(o.componentId) : o.componentId || c, l = e && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, p = o.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var b = n.shouldForwardProp;
    if (o.shouldForwardProp) {
      var A = o.shouldForwardProp;
      p = function(j, F) {
        return b(j, F) && A(j, F);
      };
    } else p = b;
  }
  var u = new eu(t, C, e ? n.componentStyle : void (5769 + 757 * 2 + -7283 * 1));
  function v(j, F) {
    return function(O, M, ye) {
      var Q = O.attrs, ue = O.componentStyle, le = O.defaultProps, Ze = O.foldedComponentIds, gt = O.styledComponentId, ie = O.target, Re = s0.useContext(Ts), Ye = $o(), nt = O.shouldForwardProp || Ye.shouldForwardProp;
      q.NODE_ENV !== "production" && Cx(gt);
      var Fe = md(M, Re, le) || V0, Ce = function(I0, Ue, pt) {
        var xt = {};
        xt.className = void (-448 * 2 + -4881 + 5777), xt.theme = pt;
        for (var Jt, ht = Je(Je({}, Ue), xt), dt = -7142 + -7142 * -1; dt < I0.length; dt += 1 * -2771 + 3235 + -463) {
          var Ut = T0(Jt = I0[dt]) ? Jt(ht) : Jt;
          for (var ut in Ut) ht[ut] = ut === "className" ? n0(ht[ut], Ut[ut]) : ut === "style" ? Je(Je({}, ht[ut]), Ut[ut]) : Ut[ut];
        }
        return Ue.className && (ht.className = n0(ht.className, Ue.className)), ht;
      }(Q, M, Fe), Te = Ce.as || ie, Xe = {};
      for (var pe in Ce) void (4 * 2455 + -9663 + -157) === Ce[pe] || pe[-22 * 12 + -988 + 2 * 626] === "$" || pe === "as" || pe === "theme" && Ce.theme === Fe || (pe === "forwardedAs" ? Xe.as = Ce.forwardedAs : nt && !nt(pe, Te) || (Xe[pe] = Ce[pe], nt || q.NODE_ENV !== "development" || dg(pe) || aa.has(pe) || !_o.has(Te) || (aa.add(pe), console.warn('styled-components: it looks like an unknown prop "'.concat(pe, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Le = function(I0, Ue) {
        var pt = $o(), xt = I0.generateAndInjectStyles(Ue, pt.styleSheet, pt.stylis);
        return q.NODE_ENV !== "production" && Cx(xt), xt;
      }(ue, Ce);
      q.NODE_ENV !== "production" && O.warnTooManyClasses && O.warnTooManyClasses(Le);
      var je = n0(Ze, gt);
      return Le && (je += " " + Le), Ce.className && (je += " " + Ce.className), Xe[Ao(Te) && !_o.has(Te) ? "class" : "className"] = je, Xe.ref = ye, Ee(Te, Xe);
    }(Z, j, F);
  }
  v.displayName = g;
  var Z = s0.forwardRef(v), Y = {};
  return Y.attrs = !0, Y.componentStyle = !0, Y.displayName = !0, Y.foldedComponentIds = !0, Y.shouldForwardProp = !0, Y.styledComponentId = !0, Y.target = !0, Z.attrs = l, Z.componentStyle = u, Z.displayName = g, Z.shouldForwardProp = p, Z.foldedComponentIds = e ? n0(n.foldedComponentIds, n.styledComponentId) : "", Z.styledComponentId = C, Z.target = e ? n.target : x, Object.defineProperty(Z, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(j) {
    this._foldedDefaultProps = e ? function(F) {
      for (var O = [], M = -8753 + 3599 * 2 + 1556; M < arguments.length; M++) O[M - (-8062 + 4483 * 1 + -358 * -10)] = arguments[M];
      for (var ye = 3851 + -3851 * 1, Q = O; ye < Q.length; ye++) zo(F, Q[ye], !0);
      return F;
    }({}, n.defaultProps, j) : j;
  } }), q.NODE_ENV !== "production" && (hd(g, C), Z.warnTooManyClasses = /* @__PURE__ */ function(j, F) {
    var O = {}, M = !1;
    return function(ye) {
      if (!M && (O[ye] = !0, Object.keys(O).length >= 200)) {
        var Q = F ? ' with the id of "'.concat(F, '"') : "";
        console.warn("Over ".concat(6652 + 2 * -4543 + -1317 * -2, " classes were generated for component ").concat(j).concat(Q, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), M = !0, O = {};
      }
    };
  }(g, C)), Nr(Z, function() {
    return ".".concat(Z.styledComponentId);
  }), r && Os(Z, x, Y), Z;
}
function sa(x, o) {
  for (var t = [x[94 * 91 + 3 * 1681 + -13597 * 1]], e = -7187 * -1 + -3067 * 2 + -1053, n = o.length; e < n; e += 1 * -1822 + -5059 + -186 * -37) t.push(o[e], x[e + (1 * 3166 + 5911 + -2 * 4538)]);
  return t;
}
var ca = function(x) {
  var o = {};
  return o.isCss = !0, Object.assign(x, o);
};
function nu(x) {
  for (var o = [], t = -2790 + -2791 * -1; t < arguments.length; t++) o[t - 1] = arguments[t];
  if (T0(x) || L0(x)) return ca(i0(sa(qx, H0([x], o, !0))));
  var e = x;
  return 1987 + 1 * 61 + -8 * 256 === o.length && 1 * -949 + 102 * 88 + 1 * -8026 === e.length && typeof e[0] == "string" ? i0(e) : ca(i0(sa(e, o)));
}
function er(x, o, t) {
  if (void (6102 + 7719 * -1 + 1617) === t && (t = V0), !o) throw F0(1, o);
  var e = function(n) {
    for (var r = [], i = -4027 * 2 + 4313 + 3742; i < arguments.length; i++) r[i - 1] = arguments[i];
    return x(o, t, nu.apply(void (6428 * 1 + 7 * -1414 + 3470), H0([n], r, !1)));
  };
  return e.attrs = function(n) {
    return er(x, o, Je(Je({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return er(x, o, Je(Je({}, t), n));
  }, e;
}
var Ls = function(x) {
  return er(tu, x);
}, Sn = Ls;
_o.forEach(function(x) {
  Sn[x] = Ls(x);
});
q.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var jn = "__sc-".concat(c0, "__");
q.NODE_ENV !== "production" && q.NODE_ENV !== "test" && typeof window < "u" && (window[jn] || (window[jn] = 8947 + 23 * -389), window[jn] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[jn] += 832 + 4 * 1163 + -5483);
const xu = Sn.div`
  position: relative;
`, ou = Sn.video`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(x) => x.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class re extends Error {
  constructor(t, e) {
    super(t);
    J(this, "cause");
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
var sx = ((x) => (x.CONTINUE_DETECTION = "continue-detection", x.SWITCH_CAMERA = "switch-camera", x.TOGGLE_MIRROR = "toggle-mirror", x))(sx || {}), yt = ((x) => (x.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", x.CONTROL = "document-auto-capture:control", x.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", x.DOCUMENT_DETECTION = "document-auto-capture:document-detection", x.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", x.STATE_CHANGED = "document-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", x))(yt || {}), ru = ((x) => (x.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", x.CONTROL = "face-auto-capture:control", x.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", x.FACE_DETECTION = "face-auto-capture:face-detection", x.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", x.STATE_CHANGED = "face-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", x))(ru || {}), iu = ((x) => (x.ANIMATION_END = "magnifeye-auto-capture:animation-end", x.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", x))(iu || {}), au = ((x) => (x.STATUS_CHANGED = "smile-auto-capture:status-changed", x))(au || {});
const Gt = {};
Gt.CANDIDATE_SELECTION = "candidate_selection", Gt.DOCUMENT_CENTERING = "document_centering", Gt.DOCUMENT_NOT_PRESENT = "document_not_present", Gt.DOCUMENT_TOO_FAR = "document_too_far", Gt.SHARPNESS_TOO_LOW = "sharpness_too_low", Gt.BRIGHTNESS_TOO_LOW = "brightness_too_low", Gt.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Gt.HOTSPOTS_PRESENT = "hotspots_present";
const bt = Gt, Et = {};
Et.isPresent = bt.DOCUMENT_NOT_PRESENT, Et.isNotSmall = bt.DOCUMENT_TOO_FAR, Et.isNotOutOfBounds = bt.DOCUMENT_CENTERING, Et.isSharp = bt.SHARPNESS_TOO_LOW, Et.isNotDim = bt.BRIGHTNESS_TOO_LOW, Et.isNotBright = bt.BRIGHTNESS_TOO_HIGH, Et.noHotspots = bt.HOTSPOTS_PRESENT;
const su = Et, tr = {};
tr.FRONT = "user", tr.REAR = "environment";
const Ns = tr, nn = {};
nn.LOADING = "LOADING", nn.ERROR = "ERROR", nn.WAITING = "WAITING", nn.RUNNING = "RUNNING";
const et = nn;
var cu = ((x) => (x.CLOSEUP = "CLOSEUP", x.DISTANT = "DISTANT", x.MIDDLE = "MIDDLE", x))(cu || {});
const $x = wn(void 0);
$x.displayName = "AppStateContext";
function Bn() {
  const x = d0($x);
  if (x === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return x;
}
const gu = $x.Provider;
class Ds extends it {
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
    return ((o = this.context) == null ? void 0 : o.appState) === et.ERROR ? null : this.props.children;
  }
}
J(Ds, "contextType", $x);
const du = Sn.canvas`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, uu = Sn.div`
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
function lu() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Iu = xs(
  ({ detectionDetails: x, isImageMirror: o }, t) => lu() ? (console.log(x), /* @__PURE__ */ H(ft, { children: [
    /* @__PURE__ */ H(du, { ref: t, $isImageMirror: o }),
    /* @__PURE__ */ H(uu, { children: Object.entries(x).map(([e, n]) => /* @__PURE__ */ H("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ H("strong", { children: n })
    ] }, e)) })
  ] })) : null
), mx = wn(void 0);
mx.displayName = "AnalyticsContext";
function fu() {
  const x = d0(mx);
  if (x === void 0)
    throw new Error(`${mx.displayName} must be used within a AnalyticsProvider`);
  return x;
}
function ga(x, o, t, e, n) {
  return Ge(x - 917, e);
}
function bx() {
  const x = ["W5OyuK1g", "W5m1ghldNXHRpw/cHKNcPa", "WQGTrZnJ", "Et9CA2y6oSk6v8k1WRVcRW", "W7RdPhpdH0hcU8kvz3pcSvbC", "lapdJu4", "W4qGWQFdNCke", "WRpdJmoS", "W4O/sv/cKHnfl8o/ufZcISoh", "wmk2WOBcJXS", "d8oPWPJdHhC8W6ZdImo1W4y6W4a", "W7HGrHPQbJ0K", "WPNcRf3cN8ow", "WOm2WQanWQXohSo2ye5UAa", "jJCDWQryWPDHfCoWWRHjFrddQW", "ybhcO8kMW5amjXG", "W7FdHmoRsXO", "mrldNvnY", "W5WHWRtcOM3cUmo7wSoqrmoPW7GR", "WP9HoL7dNmkZWO7dMmkTuNyqW4O", "WOJdQmkFWPZcVMLLWOTkp1lcKa8", "WQrbCffGWQtdLmoJ", "cmkkWOeDW5y", "qmouW5C9WQO", "qXtcUwyBWQHYBCkiBKnqW5G", "yXxcRCkxW7W3eHy", "iCostSkdWOmLW4OsuXTBWPpdUW", "rCoeW6OSWQS", "WR1ZWP9GW64", "W4HHW5PvW7e", "W4RcOmkOemovW64BASkeamouWONcKMi", "xXBdMYPX", "WP1HpvJdKCk2W7VdO8ktsNSW"];
  return bx = function() {
    return x;
  }, bx();
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return Ge(s - 991, d);
  }
  function e(s, c, d, g, C) {
    return Ge(g - -381, C);
  }
  function n(s, c, d, g, C) {
    return Ge(d - -200, c);
  }
  function r(s, c, d, g, C) {
    return Ge(d - -538, g);
  }
  function i(s, c, d, g, C) {
    return Ge(d - 677, s);
  }
  const a = x();
  for (; ; )
    try {
      if (-parseInt(t(1157, 1143, "XnqU", 1149, 1142)) / 1 + -parseInt(t(1164, 1165, "oOI1", 1175, 1166)) / 2 + -parseInt(i("WEeV", 835, 839, 834, 845)) / 3 * (parseInt(e(-238, -228, -230, -236, "ZTd(")) / 4) + parseInt(r(-374, -392, -382, "VnYU", -382)) / 5 + parseInt(e(-227, -249, -218, -232, "WEeV")) / 6 + parseInt(i("ZTd(", 847, 832, 846, 823)) / 7 * (-parseInt(n(-63, "jqZ0", -46, -29, -52)) / 8) + parseInt(r(-377, -366, -378, "Hx4r", -375)) / 9 === o) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(bx, 644780 + 3 * -67807);
const Ax = wn(void (9081 + -3 * 1372 + -4965));
function nr(x, o, t, e, n) {
  return Ge(o - -271, x);
}
function Ge(x, o) {
  const t = bx();
  return Ge = function(e, n) {
    e = e - (15213 + -15068 * 1);
    let r = t[e];
    if (Ge.NhZrKQ === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", p = "";
        for (let b = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = b % 4 ? A * 64 + u : u, b++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          u = C.indexOf(u);
        for (let b = 0, A = l.length; b < A; b++)
          p += "%" + ("00" + l.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let l = [], p = 0, b, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          p = (p + l[u] + C.charCodeAt(u % C.length)) % 256, b = l[u], l[u] = l[p], l[p] = b;
        u = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, p = (p + l[u]) % 256, b = l[u], l[u] = l[p], l[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[p]) % 256]);
        return A;
      };
      Ge.rqGzPI = d, x = arguments, Ge.NhZrKQ = !0;
    }
    const a = t[7305 + 5 * -1461], s = e + a, c = x[s];
    return c ? r = c : (Ge.KKPuCD === void 0 && (Ge.KKPuCD = !0), r = Ge.rqGzPI(r, n), x[s] = r), r;
  }, Ge(x, o);
}
Ax[nr("A&@Q", -113) + nr("@#sy", -106) + "e"] = Cu("D7Zy", 387) + xr(757, 762, "zY8i") + xr(766, 771, "8XRK");
function xr(x, o, t, e, n) {
  return Ge(x - 598, t);
}
function Cu(x, o, t, e, n) {
  return Ge(o - 224, x);
}
function Er() {
  function x(r, i, a, s, c) {
    return ga(r - -764, i - 260, a - 374, c);
  }
  const o = d0(Ax);
  function t(r, i, a, s, c) {
    return xr(s - 226, i - 445, c);
  }
  function e(r, i, a, s, c) {
    return nr(c, s - 48);
  }
  function n(r, i, a, s, c) {
    return ga(c - -1049, i - 300, a - 118, i);
  }
  if (o === void 0) throw new Error(Ax[n(24, "cM7f", 38, 24, 21) + n(26, "cM7f", 14, 14, 25) + "e"] + (e(-64, -89, -69, -77, "87Ei") + n(14, "ydnX", 16, 9, 20) + e(-41, -56, -59, -54, "gYb)") + e(-88, -72, -85, -76, "8XRK") + x(325, 342, 319, 329, "sfa3") + t(1012, 993, 988, 999, "vinU") + t(972, 998, 985, 985, "b0!G") + n(32, "87Ei", 53, 42, 38)));
  return o;
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return ve(s - 228, C);
  }
  function e(s, c, d, g, C) {
    return ve(d - -561, C);
  }
  function n(s, c, d, g, C) {
    return ve(g - -300, c);
  }
  const r = x();
  function i(s, c, d, g, C) {
    return ve(d - 278, g);
  }
  function a(s, c, d, g, C) {
    return ve(d - 917, s);
  }
  for (; ; )
    try {
      if (parseInt(i(448, 468, 458, "Iej#", 447)) / 1 + -parseInt(i(437, 445, 443, "AkhC", 432)) / 2 + parseInt(n(-101, "rv9Z", -125, -114, -102)) / 3 * (parseInt(t(397, 393, 398, 388, "q5Z5")) / 4) + -parseInt(t(411, 417, 414, 416, "&YOx")) / 5 * (-parseInt(e(-383, -407, -394, -397, "m%9]")) / 6) + parseInt(n(-125, "6tan", -138, -134, -124)) / 7 * (-parseInt(n(-124, "Iej#", -104, -116, -128)) / 8) + parseInt(a("a(58", 1114, 1104, 1112, 1107)) / 9 * (parseInt(n(-133, "EfDP", -138, -129, -132)) / 10) + parseInt(e(-394, -393, -383, -370, "Ox*$")) / 11 === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(yx, 932459 + 3 * -89057);
function ve(x, o) {
  const t = yx();
  return ve = function(e, n) {
    e = e - (7501 + 734 * -10);
    let r = t[e];
    if (ve.WRPoaD === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", p = "";
        for (let b = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = b % 4 ? A * 64 + u : u, b++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          u = C.indexOf(u);
        for (let b = 0, A = l.length; b < A; b++)
          p += "%" + ("00" + l.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let l = [], p = 0, b, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          p = (p + l[u] + C.charCodeAt(u % C.length)) % 256, b = l[u], l[u] = l[p], l[p] = b;
        u = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, p = (p + l[u]) % 256, b = l[u], l[u] = l[p], l[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[p]) % 256]);
        return A;
      };
      ve.wBXpnZ = d, x = arguments, ve.WRPoaD = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? r = c : (ve.zXTJqL === void 0 && (ve.zXTJqL = !0), r = ve.wBXpnZ(r, n), x[s] = r), r;
  }, ve(x, o);
}
function yx() {
  const x = ["e8oLFa/cJa", "vmosxCovrG", "WPS5WR/cVCoedWyIWQC", "cSoAWOmQWPtdL8oVW5pcSXJcSXaW", "W60/vWn6W53cK3G", "yYldOX7cKSoRW7KHWPFcImoNma", "WP0/WRZdU8ktAdiHWPBdQwGO", "rmoVW59vwwddRmkBW59plSoPW5G", "pSoeW41KW6HWzwO", "BIddQrxcMCoKWRWnWQBcUSoqnmkf", "iCk+WPqtaq", "W6tdPCk4u8kJvSoIW45W", "W5jzzmo8qhdcMmoyWRFcMZm", "lSknWP3dHtuKWP4WBq", "W7Ontt7dVa", "WR3dQfjTW4tdOCobrY/dRgRdNCks", "W6SZW5Dc", "W687mvG7W5VcJ2S2WRJcGa", "WOS/W7qszCooWOmEWOfqWRig", "E8o8h10jWRVdPW", "EhFdRmoEWRhdHfuuW7asW5ldGLW", "vSkXpIvG", "BI5mW77cS01ucCoWW7C", "WRJdQLLTW4xdR8k8xqRdUe/dNW", "q8kLiWJcKhf2W7dcTW", "FmkUEu5MyCkL", "tCkLjcbH", "WPVcU3tdMq4nWQZcHhVdUW"];
  return yx = function() {
    return x;
  }, yx();
}
function pu({ licensePath: x, bramble: o, wasmDirectoryPath: t }) {
  function e(c, d, g, C, l) {
    return ve(l - 721, d);
  }
  function n(c, d, g, C, l) {
    return ve(c - 960, g);
  }
  const [r, i] = at(), a = r !== void (-9806 + -1 * -5988 + -166 * -23);
  He(() => {
    async function c() {
      function d(l, p, b, A, u) {
        return ve(A - 537, u);
      }
      await o[C("omBP", 1051)](t, x);
      function g(l, p, b, A, u) {
        return ve(A - 451, p);
      }
      function C(l, p, b, A, u) {
        return ve(p - 888, l);
      }
      i(o[d(711, 688, 686, 698, "u!5j") + g(619, "wrok", 630, 627) + d(735, 724, 734, 722, "8g4I") + "t"]());
    }
    c();
  }, [o, t, x, i]);
  const s = {};
  return s[e(901, "EfDP", 909, 909, 896) + n(1128, 1119, "k^O1")] = r, s[n(1133, 1140, "k^O1") + "sh"] = a, s;
}
var Es = ((x) => (x.DOCUMENT = "document-auto-capture:dev", x.FACE = "face-auto-capture:dev", x))(Es || {});
const or = {};
or.SIMD = "simd", or.NO_SIMD = "no-simd";
const da = or, rr = {};
rr.Lower = "Lower", rr.Higher = "Higher";
const ir = rr, cx = {};
cx.VISIBLE = "VISIBLE", cx.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", cx.HIDDEN = "HIDDEN";
const Wx = cx;
function De(x, o) {
  var t = vx();
  return De = function(e, n) {
    e = e - (-8879 + 9683 * -1 + -18797 * -1);
    var r = t[e];
    if (De.AGueef === void 0) {
      var i = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", p = "", b = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = b % 4 ? A * 64 + u : u, b++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          u = C.indexOf(u);
        for (var Z = 0, Y = l.length; Z < Y; Z++)
          p += "%" + ("00" + l.charCodeAt(Z).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, C) {
        var l = [], p = 0, b, A = "";
        g = i(g);
        var u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          p = (p + l[u] + C.charCodeAt(u % C.length)) % 256, b = l[u], l[u] = l[p], l[p] = b;
        u = 0, p = 0;
        for (var v = 0; v < g.length; v++)
          u = (u + 1) % 256, p = (p + l[u]) % 256, b = l[u], l[u] = l[p], l[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[p]) % 256]);
        return A;
      };
      De.XoLuuH = a, x = arguments, De.AGueef = !0;
    }
    var s = t[-81 * -54 + 17 * 119 + 1 * -6397], c = e + s, d = x[c];
    return d ? r = d : (De.sNmifZ === void 0 && (De.sNmifZ = !0), r = De.XoLuuH(r, n), x[c] = r), r;
  }, De(x, o);
}
function vx() {
  var x = ["W6hcMWRcVr42WOC4WRG", "jtdcI8okWR4DWQpdMsPg", "WPOWWPf5W5K/rJpcOx0", "W5m3cqjHWRWBhHucE8olWOTW", "DSonW5tdLSoopgCQ", "W6/dGmkMW6xdMG", "l8oPr8kgW5GWwW4rrSoq", "WPFdULa/m8o1bJVcTmoYra", "l8kjavPzWRNcPqtcGCkOWQ0", "WPO2WPH9WQHMod/cLutdVrCx", "pSk+vCoGWRZcLZ3dKq", "ymoWzmkCvgLDdmkYWR9YBsT1", "WQdcKbVdPfTgrCkwvqmwW6pdGCot", "WQpdOmkRWOzJWPGfWQablG", "A8oVpJzKWPnobb/cQSk9WOHs", "CfucW5pdHq", "ymoWaSogaJ4pCW", "W5OCWOhcULVcK8ojxG", "uMfGbcRdHupcM8kbdr0", "W64Yy8kLc0lcVCoA", "e2W3umoRpHe+WQhcPG", "BGHhW53cRSkvW48hlmk7W6OW", "kMFcNCkyjSoqn8kr", "W54CW5RcVh7cNSo/uhy", "hZeCzmo0", "kH9MWORcNbCbftKFcSo1", "WOZdRSkVFmk9DCoKjSkwk8oogCk4oq"];
  return vx = function() {
    return x;
  }, vx();
}
(function(x, o) {
  function t(c, d, g, C, l) {
    return De(d - -295, g);
  }
  var e = x();
  function n(c, d, g, C, l) {
    return De(c - 514, l);
  }
  function r(c, d, g, C, l) {
    return De(c - -216, g);
  }
  function i(c, d, g, C, l) {
    return De(c - 983, l);
  }
  function a(c, d, g, C, l) {
    return De(C - -103, g);
  }
  for (; ; )
    try {
      var s = -parseInt(i(1235, 1228, 1226, 1231, "(Gh$")) / 1 * (parseInt(i(1232, 1243, 1246, 1219, "ilep")) / 2) + -parseInt(i(1238, 1227, 1234, 1238, "eBPs")) / 3 * (parseInt(a(137, 132, "nxSO", 141, 133)) / 4) + -parseInt(i(1225, 1216, 1235, 1230, "$G*C")) / 5 * (-parseInt(t(-34, -37, "Ihcy", -49, -50)) / 6) + -parseInt(a(141, 133, "4)^8", 132, 137)) / 7 + parseInt(r(34, 27, "kRjo", 36, 38)) / 8 * (-parseInt(i(1239, 1237, 1251, 1235, "uGbg")) / 9) + parseInt(a(137, 149, "sFR7", 148, 157)) / 10 + -parseInt(a(130, 152, "[nlM", 144, 150)) / 11 * (-parseInt(n(754, 753, 758, 751, "HnbI")) / 12);
      if (s === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(vx, -1 * -8069 + 420958 + 213362);
function hu({ crosshatch: x }) {
  function o(e, n, r, i, a) {
    return De(e - -420, n);
  }
  function t(e, n, r, i, a) {
    return De(i - 677, a);
  }
  return x != null && x[t(903, 899, 924, 913, "FgQh") + "id"] ? ir[t(927, 924, 921, 930, "Ig##") + "r"] : ir[o(-175, "[OGf")];
}
(function(x, o) {
  function t(a, s, c, d, g) {
    return Ve(g - -768, s);
  }
  function e(a, s, c, d, g) {
    return Ve(c - 114, a);
  }
  const n = x();
  function r(a, s, c, d, g) {
    return Ve(g - 367, a);
  }
  function i(a, s, c, d, g) {
    return Ve(g - -345, a);
  }
  for (; ; )
    try {
      if (-parseInt(e("#U*c", 406, 394, 405, 401)) / 1 * (parseInt(e("l[xj", 405, 408, 406, 399)) / 2) + parseInt(r("VHWM", 685, 685, 664, 675)) / 3 + -parseInt(t(-505, "iM&I", -485, -479, -492)) / 4 * (parseInt(r("^0cd", 654, 649, 668, 664)) / 5) + parseInt(i("Hl7B", -32, -44, -30, -47)) / 6 * (parseInt(r("^!YM", 665, 652, 642, 654)) / 7) + parseInt(t(-471, "LlH&", -483, -500, -485)) / 8 * (parseInt(e("H!6r", 425, 415, 404, 411)) / 9) + parseInt(i("4IbM", -52, -47, -60, -53)) / 10 + -parseInt(t(-492, "TY!O", -474, -489, -479)) / 11 * (parseInt(e("Kd8K", 383, 388, 394, 405)) / 12) === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(wx, -1763055 + 2791 * 43 + 2626506);
function Ve(x, o) {
  const t = wx();
  return Ve = function(e, n) {
    e = e - (-6198 + 2157 * 3);
    let r = t[e];
    if (Ve.YzpeXP === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", p = "";
        for (let b = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = b % 4 ? A * 64 + u : u, b++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          u = C.indexOf(u);
        for (let b = 0, A = l.length; b < A; b++)
          p += "%" + ("00" + l.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let l = [], p = 0, b, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          p = (p + l[u] + C.charCodeAt(u % C.length)) % 256, b = l[u], l[u] = l[p], l[p] = b;
        u = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, p = (p + l[u]) % 256, b = l[u], l[u] = l[p], l[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[p]) % 256]);
        return A;
      };
      Ve.wTYNZg = d, x = arguments, Ve.YzpeXP = !0;
    }
    const a = t[-157 * -23 + 3038 + -6649], s = e + a, c = x[s];
    return c ? r = c : (Ve.yCeVKk === void 0 && (Ve.yCeVKk = !0), r = Ve.wTYNZg(r, n), x[s] = r), r;
  }, Ve(x, o);
}
function wx() {
  const x = ["W7tdHh4IW7L7WQ3cGmkkW7C", "fLPmfCkJW7Lbl0ldVI7cKCoz", "WQzkW63cSsldM8klbSo7WOnsW488", "WO9BEmkAWQK", "W4SLWR/dHmodW4e6rXeyWRTLWOi", "nW9uW79c", "edmjzSkJW5/cQxWpW57cRmoX", "W40gWQRdQHG", "fc06WO3cUa", "WQiiW4uGW7JdMMz6WPzM", "WQrlW4JcNgLjoWhdOmo3W5G", "WQrlW6/cSsZdNSo3kCoLWRPvW4a", "W4BdPX41W7O", "W6JcGaKGW7jBnCks", "hYqNWOlcTa", "W7VdUM/dJx8", "gcK8", "rqxcLmoNWRJcG8oBjCkjbhq7WQ8", "W6ZcQCkWCGa", "kIuuaSkD", "aSoeW5pcMrNcOCoNWORcUedcUavh", "i0XAW5ziWOGdc8kbWPe", "W5RcHSk/W6S9BaZcRa", "WO7dSMqNWPBdR8kUW44", "WQiiW4eKWPJcQhr9WPPiW7JcSa", "W6Ccn8kWlmkpWQG+W4rV", "ld4HWPJcUq", "WPzcWOtdGqCkW71W", "WRhdR8kmBYVcLqlcPq", "W4NcPL4WrmoSEK8", "bmoOWPXHW4miW5XDgem", "WQalW4CIWPhcPsvNWPPTW5VcQGq", "je5zW5yUW7G4pSkIWR8ohW", "WQfkW6VcVs3cMmoVc8oCWPLJ", "exNdGG", "hZ4HWP3cOW", "WP0DW6NdQ8k5jmkceg7cVW"];
  return wx = function() {
    return x;
  }, wx();
}
function mu({ children: x, licensePath: o, bramble: t, wasmDirectoryPath: e }) {
  const n = {};
  n[i(")fc$", -647) + "le"] = t;
  function r(p, b, A, u, v) {
    return Ve(b - -90, v);
  }
  n[l(370, 363, 354, "kHsE") + a(569, "m!3L", 592, 584) + "h"] = o;
  function i(p, b, A, u, v) {
    return Ve(b - -950, p);
  }
  n[i("O$G!", -659) + r(216, 205, 223, 217, "[4w!") + l(366, 369, 357, "apZU") + "th"] = e;
  function a(p, b, A, u, v) {
    return Ve(u - 277, b);
  }
  const { sunfish: s, crosshatch: c } = pu(n), d = {};
  d[a(569, "L*[c", 579, 563) + a(586, "L*[c", 577, 573)] = c;
  const g = tt(() => ({ redfin: hu(d), sunfish: s, crosshatch: c, bramble: t }), [s, c, t]), C = {};
  function l(p, b, A, u, v) {
    return Ve(b - 63, u);
  }
  return C[r(207, 203, 216, 222, "XqL0")] = g, C[a(581, "L*[c", 589, 579) + a(545, "^umg", 545, 562)] = x, H(Ax[r(188, 187, 174, 206, "L*[c") + l(363, 367, 373, "L*[c")], C);
}
(function(x, o) {
  function t(c, d, g, C, l) {
    return Qe(g - 244, C);
  }
  function e(c, d, g, C, l) {
    return Qe(c - 869, l);
  }
  function n(c, d, g, C, l) {
    return Qe(c - -548, d);
  }
  function r(c, d, g, C, l) {
    return Qe(C - 717, l);
  }
  var i = x();
  function a(c, d, g, C, l) {
    return Qe(g - -449, c);
  }
  for (; ; )
    try {
      var s = parseInt(e(1041, 1037, 1041, 1043, "4Kge")) / 1 * (-parseInt(e(1047, 1038, 1055, 1057, "Cdcx")) / 2) + -parseInt(n(-378, "R6kp", -388, -388, -378)) / 3 + parseInt(r(893, 887, 888, 893, "4Kge")) / 4 * (parseInt(t(402, 412, 409, "^z5r", 414)) / 5) + parseInt(r(883, 882, 885, 878, "I0AW")) / 6 * (-parseInt(a("Z5lg", -273, -281, -275, -275)) / 7) + parseInt(n(-375, "xEjh", -379, -383, -375)) / 8 + -parseInt(r(887, 884, 893, 886, "^z5r")) / 9 + parseInt(r(894, 895, 895, 891, "Z5lg")) / 10;
      if (s === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Sx, 17 * 18481 + 194483 + -130493);
function Qe(x, o) {
  var t = Sx();
  return Qe = function(e, n) {
    e = e - (1 * 5878 + -8564 + 2846);
    var r = t[e];
    if (Qe.hKmrVe === void 0) {
      var i = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", p = "", b = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = b % 4 ? A * 64 + u : u, b++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          u = C.indexOf(u);
        for (var Z = 0, Y = l.length; Z < Y; Z++)
          p += "%" + ("00" + l.charCodeAt(Z).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, C) {
        var l = [], p = 0, b, A = "";
        g = i(g);
        var u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          p = (p + l[u] + C.charCodeAt(u % C.length)) % 256, b = l[u], l[u] = l[p], l[p] = b;
        u = 0, p = 0;
        for (var v = 0; v < g.length; v++)
          u = (u + 1) % 256, p = (p + l[u]) % 256, b = l[u], l[u] = l[p], l[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[p]) % 256]);
        return A;
      };
      Qe.UgCWbm = a, x = arguments, Qe.hKmrVe = !0;
    }
    var s = t[4750 + -38 * 125], c = e + s, d = x[c];
    return d ? r = d : (Qe.gciEoX === void 0 && (Qe.gciEoX = !0), r = Qe.UgCWbm(r, n), x[c] = r), r;
  }, Qe(x, o);
}
function Sx() {
  var x = ["W53cJCoNtmkMWQFdImkh", "WO7dQmoAW77cR1xdPre", "W6XBASkMW6BdTmokySoju8kbWOlcNG", "v8o2h0dcH8odW5pdHCoSzwddU0G", "W6ddL3r9W5WplSokhZDrW6K", "WO/dOmkaWRxcQhxdHbeyW4q", "tCkBW73dLLxcJmoqWR0eW54EnSkU", "W5eOdmoyW6rxmNeNwru", "W5ZcOt8zW4pdNuldGhtdHCkYdmkX", "d8kcWQtcSK/cTSocW68YWQaL", "wJe4W6XDaSk+oedcTGi", "W5SXW7lcTSoRW4qwxIG", "ptX/W4ubW63cICkyW5TIW7W", "WRRdVSo3omkdW4m5W54bFYKIpq", "pafYlwWFeIWuWPS", "WQlcPCoXngtcSLBdR8kTja", "tCksW7BdNIxdV8krWRO0W6e", "xSo1gZhdHSk8WPFdGCo2", "paH5jrXSuYSKWQtdISk4FW", "mtX7W4moWOJcVSkjW5bIW6Xj"];
  return Sx = function() {
    return x;
  }, Sx();
}
function bu({ analytics: x, crosshatch: o }) {
  return o !== void (1009 * 5 + 1 * 5233 + -5139 * 2) && !o.isAnalyticsDisabled ? x : void (94 * 49 + 5414 * -1 + -2 * -404);
}
function Au({ analytics: x, appKey: o, redfin: t, crosshatch: e, bramble: n }) {
  const r = {};
  r.analytics = x, r.crosshatch = e;
  const i = bu(r);
  return He(() => {
    i && i.init(o);
  }, [i, o]), He(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), i && i.walleye(t, n.getCustomerName()));
  }, [i, n, e, t]), He(() => {
    if (i)
      return window.addEventListener("beforeunload", i.endSession), () => {
        i.endSession(), window.removeEventListener("beforeunload", i.endSession);
      };
  }, [i]), i;
}
function yu({
  analytics: x,
  appKey: o,
  children: t
}) {
  const { redfin: e, crosshatch: n, bramble: r } = Er(), i = Au({ analytics: x, redfin: e, appKey: o, crosshatch: n, bramble: r }), a = tt(
    () => ({
      analytics: i
    }),
    [i]
  );
  return /* @__PURE__ */ H(mx.Provider, { value: a, children: t });
}
const Wu = -3440 + -20 * -172 + 0.8, vu = -6027 + -3041 * -1 + 2986 + 0.43, wu = -1673 + -1673 * -1 + 0.03, Su = 5850 + 1 * 5419 + -11269 * 1 + 0.5, Bu = -111 * -41 + -321 * 18 + -3 * -409 + 0.25, ku = 1 * -5088 + -6163 + -11251 * -1 + 0.9, Gu = -11 * 563 + -1 * 787 + 6980 + 0.1, gx = {};
gx.minDuration = 1e3, gx.maxDuration = 2500, gx.minFrames = 10;
const Wo = gx, ar = {};
ar.max = 100, ar.min = 10;
const ua = ar, Ou = -1249 + -179 * -11, Hu = -2642 + 47 * -149 + 9845, Zu = 3 * 532 + 4557 + -473 * 13, Ys = "AES-CBC", Fs = "RSA-OAEP", Ru = "SHA-256", Ku = "image/jpeg", Pu = 281 * 17 + -884 + 7 * -555, Vu = "SAM v1.39.3 for idcards", Tu = "dot_embedded_bg.wasm", Mn = (x, o) => Math.hypot(o.x - x.x, o.y - x.y), Lu = (x) => x.length < 1 ? 872 + 4 * -1531 + 5252 : x.reduce((t, e) => t + e, -2806 * 1 + -21 * 401 + 11227) / x.length, Xs = (x) => Number.parseFloat(x.toFixed(6832 + 5150 * -1 + -1679)), Nu = (x) => {
  const o = x.getContext("2d");
  o && o.clearRect(763 * -2 + 1 * -8581 + 10107, 0, o.canvas.width, o.canvas.height);
}, Du = 1544 + 2066 * 2 + -5675 + 0.5, Eu = 0 + 0.85, vo = 1e3, Yu = -9182 + 5569 * -1 + 301 * 51, Fu = -647 * 1 + 32 * 100 + -2553, Xu = (x, o) => x < vo && o >= vo ? vo : x, ju = (x, o) => x < o ? x : o, Yr = ({ height: x, width: o }) => {
  let t;
  return o > x ? t = Xu(x, o) : t = o, { width: t, height: ju(x, t) };
}, js = (x) => {
  const o = Yr(x).width, t = o * Eu, e = (x.width - t) / (3854 + 36 * -107), n = t / Du, r = (x.height - n) / (7458 + 932 * -8), i = {};
  return i.shiftX = e, i.shiftY = r, i.width = t, i.height = n, i;
}, Mu = (x) => {
  const { height: o, shiftX: t, shiftY: e, width: n } = js(x), r = {};
  return r.shiftX = t / x.width, r.shiftY = e / x.height, r.width = n / x.width, r.height = o / x.height, r;
}, Ju = (x) => {
  const { bottomLeft: o, bottomRight: t, topLeft: e, topRight: n } = x, r = Mn(e, n), i = Mn(n, t), a = Mn(o, t), s = Mn(e, o);
  return Math.min(r, i, a, s);
}, Uu = "@innovatrics/dot-common-auto-capture", _u = "6.1.8", Qu = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, zu = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, qu = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.1"
}, $u = {
  name: Uu,
  private: !0,
  version: _u,
  scripts: Qu,
  dependencies: zu,
  devDependencies: qu
}, Fr = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), la = () => {
  const x = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return x && o;
}, el = () => {
  const x = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return x && o ? !1 : o;
}, sr = (x) => new Promise((o) => {
  setTimeout(o, x);
}), _0 = (x) => JSON.parse(JSON.stringify(x, (o, t) => typeof t == "number" ? Xs(t) : t)), Ms = () => $u.version, Js = (x) => new URL(x).hostname.replace("www.", ""), tl = () => Js(window.location.href) === "localhost", Jn = (x) => Object.entries(x).map(([o, t]) => encodeURIComponent(o) + "=" + encodeURIComponent(t)).join("&"), nl = (x, o) => {
  const t = x && performance.now() - x;
  return o >= Wo.minFrames ? t > Wo.minDuration : t > Wo.maxDuration;
}, xl = (x, o) => JSON.stringify(x) === JSON.stringify(o) ? o : x, ol = () => "prod".toLowerCase() === "dev";
class Us extends Array {
  constructor(t) {
    super();
    J(this, "size");
    this.size = t;
  }
  pushFixed(...t) {
    if (t.length > this.size) {
      const e = t.slice(-this.size);
      this.push(...e);
      return;
    }
    this.length === this.size && this.splice(-16404 + 6 * 2734, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(19 * -353 + 1423 * 1 + 5284);
  }
}
const rl = (x, o, t = Ku) => new Promise((e) => {
  x.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, o);
}), il = async (x) => rl(x, 95 * -26 + -687 * 9 + 1249 * 7), al = (x, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(x, o.shiftX, o.shiftY, o.width, o.height, 0, 3208 + 802 * -4, t.width, t.height), t;
}, sl = (x) => {
  const o = x.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(2 * 4759 + -7166 + -2352, -20 * 215 + 77 * -77 + -10229 * -1, x.width, x.height);
  return t;
}, cl = (x, o, t, e) => {
  const n = x.getContext("2d");
  n && (n.beginPath(), n.strokeStyle = t, n.rect(o.topLeft.x, o.topLeft.y, o.width, o.height), n.stroke());
}, wo = (x, o, t) => {
  const { height: e, shiftX: n, shiftY: r, width: i } = o, a = {};
  a.x = n, a.y = r;
  const s = {};
  s.topLeft = a, s.width = i, s.height = e, s.color = t, cl(x, s, t);
};
function gl({ canvas: x, color: o, fill: t, offset: e = 9736 * -1 + 8223 + 1513, polygon: n }) {
  const r = x.getContext("2d");
  if (!r) return;
  const { bottomLeft: i, bottomRight: a, topLeft: s, topRight: c } = n;
  t ? r.fillStyle = o : r.strokeStyle = o, r.beginPath(), r.moveTo(s.x + e, s.y + e), r.lineTo(c.x + e, c.y + e), r.lineTo(a.x + e, a.y + e), r.lineTo(i.x + e, i.y + e), r.closePath(), t ? r.fill() : r.stroke();
}
const dl = (x, o) => {
  const { height: t, shiftX: e, shiftY: n, width: r } = o;
  return !(x.x < e || x.x > e + r || x.y < n || x.y > n + t);
}, ul = (x, o) => Object.values(x).every((t) => dl(t, o)), _s = wn(null), Qs = () => {
  const x = d0(_s);
  if (!x)
    throw new Error("Missing provider for CameraOptionsContext");
  return x;
}, ll = (x) => {
  const { cameraFacing: o, licensePath: t, onError: e, onPhotoTaken: n, sessionToken: r, thresholds: i, wasmDirectoryPath: a } = x, s = Fr() ? "environment" : "user";
  return {
    onPhotoTaken: n,
    onError: e,
    cameraFacing: o ?? s,
    wasmDirectoryPath: a,
    licensePath: t,
    sessionToken: r,
    thresholds: {
      confidenceThreshold: (i == null ? void 0 : i.confidenceThreshold) ?? Wu,
      sharpnessThreshold: (i == null ? void 0 : i.sharpnessThreshold) ?? Su,
      brightnessLowThreshold: (i == null ? void 0 : i.brightnessLowThreshold) ?? Bu,
      brightnessHighThreshold: (i == null ? void 0 : i.brightnessHighThreshold) ?? ku,
      hotspotsScoreThreshold: (i == null ? void 0 : i.hotspotsScoreThreshold) ?? Gu,
      sizeSmallThreshold: (i == null ? void 0 : i.sizeSmallThreshold) ?? vu,
      outOfBoundsThreshold: (i == null ? void 0 : i.outOfBoundsThreshold) ?? wu
    }
  };
}, Il = ({ cameraOptions: x, children: o }) => {
  const t = tt(() => ({
    documentCameraOptions: ll(x)
  }), [x]);
  return /* @__PURE__ */ H(_s.Provider, { value: t, children: o });
}, fl = (x, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(x, t));
}, Yx = class Yx {
  constructor() {
    J(this, "lastDetails", {});
    J(this, "delayedTime", -15941 + 15941 * 1);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Yx()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 6615 + -838 * 8 + 89;
  }
  isDetailChanged(o, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(o, t) {
    this.isDetailChanged(o, t) && fl(o, t);
  }
  dispatchDelayedCustomEventOnChange(o, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(o, t), this.delayedTime = n);
  }
};
J(Yx, "_instance");
let ln = Yx;
const kn = ln.getInstance(), Ia = (x, o, t = Yu) => {
  const e = {};
  e.instructionCode = o;
  const n = e;
  kn.dispatchDelayedCustomEventOnChange(x, n, t);
}, fa = (x, o) => {
  kn.dispatchCustomEventOnChange(x, o);
}, Cl = (x, o) => {
  kn.dispatchCustomEventOnChange(x, o);
}, pl = (x, o) => {
  const t = {};
  t.size = o;
  const e = t;
  kn.dispatchCustomEventOnChange(x, e);
}, hl = (x, o, t) => {
  const e = o.confidence < t ? void 0 : o, n = {};
  n.detectedObject = e;
  const r = n;
  kn.dispatchCustomEventOnChange(x, r);
}, ml = (x, o) => {
  if (ol()) {
    const t = {};
    t.candidateSelectionImages = o;
    const e = t;
    ln.getInstance().dispatchCustomEventOnChange(x, e);
  }
}, bl = (x, o) => {
  const { cameraResolution: t, shouldMirror: e } = o;
  He(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, Cl(x, n);
  }, [t, e, x]);
}, Al = (x) => x === yt.CONTROL ? !Fr() : !0, yl = (x, o) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: r } = Bn(), [i, a] = at(), s = tt(() => {
    const d = r && o && o.isStreaming && o.getCameraSettings().facingMode;
    return d ? i ?? d === "user" : i ?? Al(x);
  }, [o, i, x, r]);
  He(() => {
    const d = () => {
      t !== et.LOADING && e(et.RUNNING);
    }, g = () => {
      a(i === void 0 ? !s : !i);
    }, C = async () => {
      if (o) {
        e(et.LOADING);
        try {
          await o.switchCamera(), e(et.RUNNING);
        } catch (p) {
          if (p instanceof Error) {
            n(re.fromCameraError(p));
            return;
          }
        }
        a(void 0);
      }
    }, l = (p) => {
      var b;
      switch ((b = p.detail) == null ? void 0 : b["instruction"]) {
        case sx.CONTINUE_DETECTION:
          d();
          break;
        case sx.TOGGLE_MIRROR:
          g();
          break;
        case sx.SWITCH_CAMERA:
          C();
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
async function zs() {
  return navigator.mediaDevices.enumerateDevices();
}
async function So() {
  return (await zs()).filter((o) => o.kind === "videoinput");
}
function Bo(x) {
  x.getTracks().forEach((t) => t.stop());
}
function Ca(x) {
  return x.getVideoTracks()[-11 * -773 + -4177 + -4326];
}
const dx = {};
dx.width = 1920, dx.height = 1080, dx.facingMode = Ns.FRONT;
const Wl = dx;
var lt;
class qs {
  constructor({ defaultVideoConstrains: o = Wl, minCameraShorterSide: t = Ou } = {}) {
    J(this, "options");
    J(this, "availableCameraProperties", []);
    Ke(this, lt, null);
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return z(this, lt);
  }
  get videoTrack() {
    return z(this, lt) ? Ca(z(this, lt)) : void (209 * 7 + -2129 + 666);
  }
  get isCameraActive() {
    var o;
    return !!((o = z(this, lt)) != null && o.active);
  }
  static async requestPermission() {
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    Bo(t);
  }
  async open(o = {}) {
    la() && await sr(2249 * -1 + 1165 + 767 * 2), Se(this, lt, await navigator.mediaDevices.getUserMedia(o)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const o = await So();
    if (o.length <= -41 * 94 + -6078 * 1 + 9933) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = o.findIndex((a) => a.deviceId === e.deviceId), r = o[n + (-2783 + 58 * 48)] ?? o[-572 + -463 * 2 + 1 * 1498], i = this.getConstraints(t, r);
    this.close(), await this.open(i);
  }
  close() {
    z(this, lt) && (Bo(z(this, lt)), Se(this, lt, null));
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
    const o = this.getSettings(), t = await zs(), e = t.find((n) => n.deviceId === o.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(o) {
    return o === Ns.FRONT ? void (251 + 2 * -832 + -471 * -3) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return Fr() ? (await So()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (-1052 + -653 * 1 + 1705);
  }
  async collectAvailableCamerasInfo() {
    const o = await So();
    for (const t of o) {
      la() && await sr(-8548 + -1 * -8998);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const r = await navigator.mediaDevices.getUserMedia(n), i = Ca(r);
        if (!i) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = i.getSettings(), s = { ...a };
        s.deviceName = i.label;
        const c = {};
        c.cameraProperties = s;
        const d = c;
        this.availableCameraProperties.push(d), Bo(r);
      } catch (e) {
        e instanceof Error && re.logError(e);
      }
    }
  }
  getConstraints(o, t) {
    const e = { ...this.options.defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t.deviceId } : void (-57 * -6 + 283 * -2 + 8 * 28);
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
lt = new WeakMap();
class vl {
  constructor(o, t) {
    this.videoHandler = o, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(o = {}) {
    await qs.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(o.facingMode), e = this.cameraHandler.getConstraints(o, t);
    await this.cameraHandler.open(e), el() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var n;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const o = (n = this.cameraHandler.videoTrack) == null ? void 0 : n.getSettings();
    if (!(o != null && o.width)) throw new re("Cant take photo - video width is undefined");
    if (!(o != null && o.height)) throw new re("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = o.width, t.height = o.height;
    const e = t.getContext("2d");
    if (!e) throw new re("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 1015 * -5 + -1129 * 3 + 8462, 0), { image: t, timestamp: Date.now() };
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
var Ht;
class wl {
  constructor(o) {
    Ke(this, Ht);
    Se(this, Ht, o);
  }
  get videoElement() {
    return z(this, Ht);
  }
  async play(o) {
    z(this, Ht).srcObject = o, await z(this, Ht).play();
  }
  stop() {
    z(this, Ht).srcObject = null;
  }
  hasSrcObject() {
    return !!z(this, Ht).srcObject;
  }
}
Ht = new WeakMap();
function Sl(x, o) {
  const t = Mt(), { handleError: e, setIsCameraReady: n } = Bn(), [r, i] = at(), a = R0((c) => {
    i((d) => xl(c, d));
  }, []);
  He(() => ((async () => {
    if (!x.current) {
      e(new re("Something went wrong during video initialization"));
      return;
    }
    const d = new wl(x.current), g = new qs(), C = new vl(d, g);
    try {
      const l = {};
      l.facingMode = o, await C.startVideoStream(l);
    } catch (l) {
      if (l instanceof Error) {
        e(re.fromCameraError(l));
        return;
      }
    }
    n(!0), a(C.getCameraResolution()), t.current = C;
  })(), function() {
    t.current && t.current.stopStreaming(), n(!1);
  }), [o, e, n, x, a]);
  const s = {};
  return s.cameraService = t.current, s.cameraResolution = r, s.onCameraResolutionChange = a, s;
}
function Bl(x, o) {
  He(() => {
    function t() {
      x.current && pl(o, x.current.getBoundingClientRect());
    }
    return t(), window.addEventListener("resize", t), () => {
      window.removeEventListener("resize", t);
    };
  }, [x, o]);
}
var kl = Symbol.for("preact-signals");
function Xr() {
  if (k0 > 1)
    k0--;
  else {
    for (var x, o = !1; void (4105 + -2271 * 3 + 2708) !== gn; ) {
      var t = gn;
      for (gn = void (3251 + 33 * -292 + -6385 * -1), cr++; void (-2891 + -3 * 2232 + 9587) !== t; ) {
        var e = t.o;
        if (t.o = void (161 * 7 + -349 * 1 + -1 * 778), t.f &= -(5641 + 1803 * 4 + -12850), !(47 * 118 + 1589 + 7127 * -1 & t.f) && tc(t)) try {
          t.c();
        } catch (n) {
          !o && (x = n, o = !(5537 + 140 * 37 + -10717));
        }
        t = e;
      }
    }
    if (cr = 5 * -1103 + -9440 + -14955 * -1, k0--, o) throw x;
  }
}
var ne = void (-4993 * -2 + 3055 * -2 + -3876), gn = void (-18 * -102 + 3307 + -5143), k0 = -6099 + 5 * 1115 + 524, cr = -2 * -2430 + 1591 * -1 + -3269, Bx = -1 * -1607 + 1 * -5617 + 4010;
function $s(x) {
  if (void (1 * -5327 + 3 * -543 + -6956 * -1) !== ne) {
    var o = x.n;
    if (void (-873 * 3 + -4432 + 7051) === o || o.t !== ne)
      return o = { i: 0, S: x, p: ne.s, n: void (-4029 + -683 * -6 + -69), t: ne, e: void (-224 * 9 + 6344 + -4328), x: void (1 * -1187 + -2887 + 1 * 4074), r: o }, void (6 * 566 + 3735 + 3 * -2377) !== ne.s && (ne.s.n = o), ne.s = o, x.n = o, 524 * 14 + 1128 * -2 + -2524 * 2 & ne.f && x.S(o), o;
    if (-(-397 * 17 + -34 * 19 + 7396) === o.i)
      return o.i = -2587 * 2 + 1 * 856 + 4318, void (-8135 + 2249 * -4 + 17131) !== o.n && (o.n.p = o.p, void (-3096 + -516 * -6) !== o.p && (o.p.n = o.n), o.p = ne.s, o.n = void (131 * -62 + -158 * -33 + 1454 * 2), ne.s.n = o, ne.s = o), o;
  }
}
function ke(x) {
  this.v = x, this.i = -7376 + 17 * -101 + 9093, this.n = void (-37 * -57 + -2 * 2261 + 2413 * 1), this.t = void (-2545 * -2 + -2911 * 1 + -2179);
}
ke.prototype.brand = kl, ke.prototype.h = function() {
  return !(-973 * -6 + -1098 + -4740);
}, ke.prototype.S = function(x) {
  this.t !== x && void (9786 + -3201 * -3 + -19389) === x.e && (x.x = this.t, void (-2389 * 3 + 6133 + -22 * -47) !== this.t && (this.t.e = x), this.t = x);
}, ke.prototype.U = function(x) {
  if (void (-431 * -23 + -1 * 467 + -1 * 9446) !== this.t) {
    var o = x.e, t = x.x;
    void (1247 + -1273 * 1 + 26) !== o && (o.x = t, x.e = void (-827 * -1 + -8227 * 1 + 50 * 148)), void (1310 + -2 * -876 + -3062) !== t && (t.e = o, x.x = void (-222 * 24 + 6541 + 1213 * -1)), x === this.t && (this.t = t);
  }
}, ke.prototype.subscribe = function(x) {
  var o = this;
  return Mr(function() {
    var t = o.value, e = ne;
    ne = void (-3893 + 17 * 229);
    try {
      x(t);
    } finally {
      ne = e;
    }
  });
}, ke.prototype.valueOf = function() {
  return this.value;
}, ke.prototype.toString = function() {
  return this.value + "";
}, ke.prototype.toJSON = function() {
  return this.value;
}, ke.prototype.peek = function() {
  var x = ne;
  ne = void (553 + 654 * -5 + 2717);
  try {
    return this.value;
  } finally {
    ne = x;
  }
}, Object.defineProperty(ke.prototype, "value", { get: function() {
  var x = $s(this);
  return void (5060 + -1978 * 1 + -46 * 67) !== x && (x.i = this.i), this.v;
}, set: function(x) {
  if (x !== this.v) {
    if (cr > 998 + -1 * 898) throw new Error("Cycle detected");
    this.v = x, this.i++, Bx++, k0++;
    try {
      for (var o = this.t; void (-5447 + 5447 * 1) !== o; o = o.x) o.t.N();
    } finally {
      Xr();
    }
  }
} });
function ec(x) {
  return new ke(x);
}
function tc(x) {
  for (var o = x.s; void (9071 + 1774 * 1 + -10845) !== o; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !(1645 + -1 * 9259 + 94 * 81);
  return !(4134 + 4133 * -1);
}
function nc(x) {
  for (var o = x.s; void (-12510 + -278 * -45) !== o; o = o.n) {
    var t = o.S.n;
    if (void (269 * -2 + 9209 + -1 * 8671) !== t && (o.r = t), o.S.n = o, o.i = -(-383 * -19 + 1436 + 1452 * -6), void (10888 + -4 * 2722) === o.n) {
      x.s = o;
      break;
    }
  }
}
function xc(x) {
  for (var o = x.s, t = void (4 * -1327 + 1 * -6693 + 12001); void (-6 * 1438 + -9267 + 17895) !== o; ) {
    var e = o.p;
    -(-1759 * 4 + -7979 * 1 + -3754 * -4) === o.i ? (o.S.U(o), void (213 * -17 + -2682 + 6303) !== e && (e.n = o.n), void (1 * -6121 + -5765 + 11886) !== o.n && (o.n.p = e)) : t = o, o.S.n = o.r, void (-1 * -2522 + -309 + -2213) !== o.r && (o.r = void (-6031 + 1 * 6031)), o = e;
  }
  x.s = t;
}
function w0(x) {
  ke.call(this, void 0), this.x = x, this.s = void (245 * -14 + -506 * 16 + -113 * -102), this.g = Bx - (2 * 3235 + 2188 + 8657 * -1), this.f = -10 * 418 + 8037 + 1 * -3853;
}
(w0.prototype = new ke()).h = function() {
  if (this.f &= -3, -137 * -2 + -1211 + 938 & this.f) return !(-5723 * 1 + 72 * -47 + -253 * -36);
  if (-568 * 11 + -1146 * 7 + 1 * 14302 == (1979 + -363 * -19 + -8840 & this.f)) return !(85 * -35 + 1 * 1609 + -1366 * -1);
  if (this.f &= -5, this.g === Bx) return !(9385 * -1 + 3475 * 1 + -985 * -6);
  if (this.g = Bx, this.f |= -1 * 4889 + 8944 + -4054, this.i > -2243 * 1 + 1109 * 9 + -7738 && !tc(this)) return this.f &= -(-1 * -5653 + -6250 + -599 * -1), !(4 * -579 + 1985 + 331);
  var x = ne;
  try {
    nc(this), ne = this;
    var o = this.x();
    (16 & this.f || this.v !== o || -8260 + 1 * 9021 + -761 * 1 === this.i) && (this.v = o, this.f &= -(-2826 + 1916 * -5 + 12423), this.i++);
  } catch (t) {
    this.v = t, this.f |= 2 * 733 + -7 * -974 + 39 * -212, this.i++;
  }
  return ne = x, xc(this), this.f &= -(-1844 + -6121 * -1 + -4275), !(-3 * -2869 + 7460 + -16067 * 1);
}, w0.prototype.S = function(x) {
  if (void (5248 + 1883 * 5 + -14663) === this.t) {
    this.f |= -572 * 5 + -862 + 3758;
    for (var o = this.s; void (1757 * 1 + 7205 * -1 + 6 * 908) !== o; o = o.n) o.S.S(o);
  }
  ke.prototype.S.call(this, x);
}, w0.prototype.U = function(x) {
  if (void (-17 * 562 + 1 * 6780 + -19 * -146) !== this.t && (ke.prototype.U.call(this, x), void (-5666 * 1 + 2803 + 2863) === this.t)) {
    this.f &= -33;
    for (var o = this.s; void (5324 + -1 * 5324) !== o; o = o.n) o.S.U(o);
  }
}, w0.prototype.N = function() {
  if (!(-4725 + -1787 * -5 + -4208 & this.f)) {
    this.f |= -661 * 13 + -179 * -19 + 5198;
    for (var x = this.t; void (-1388 + 2651 * -2 + 6690) !== x; x = x.x) x.t.N();
  }
}, Object.defineProperty(w0.prototype, "value", { get: function() {
  if (359 * -27 + -8680 + -1 * -18374 & this.f) throw new Error("Cycle detected");
  var x = $s(this);
  if (this.h(), void (-17 * 581 + -12 * 439 + 15145 * 1) !== x && (x.i = this.i), 3 * -1612 + -6581 + 37 * 309 & this.f) throw this.v;
  return this.v;
} });
function Gl(x) {
  return new w0(x);
}
function oc(x) {
  var o = x.u;
  if (x.u = void 0, typeof o == "function") {
    k0++;
    var t = ne;
    ne = void 0;
    try {
      o();
    } catch (e) {
      throw x.f &= -(-3 * 919 + 1 * 8681 + -5922), x.f |= -1033 * -4 + 6934 + 194 * -57, jr(x), e;
    } finally {
      ne = t, Xr();
    }
  }
}
function jr(x) {
  for (var o = x.s; void (-366 * 5 + -1556 * -5 + -5950) !== o; o = o.n) o.S.U(o);
  x.x = void 0, x.s = void (4865 * -2 + 9967 + -237), oc(x);
}
function Ol(x) {
  if (ne !== this) throw new Error("Out-of-order effect");
  xc(this), ne = x, this.f &= -(-5239 + -3 * -2677 + -155 * 18), -2635 + -1 * -8005 + -5362 & this.f && jr(this), Xr();
}
function xn(x) {
  this.x = x, this.u = void (-467 * 14 + -7097 + 13635), this.s = void (-818 * -3 + 2 * -2954 + -314 * -11), this.o = void (8733 * -1 + -1 * -8783 + -50), this.f = 10964 + -10932 * 1;
}
xn.prototype.c = function() {
  var x = this.S();
  try {
    if (4804 + 4796 * -1 & this.f || void (10767 + -111 * 97) === this.x) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    x();
  }
}, xn.prototype.S = function() {
  if (-15185 + 2 * 7593 & this.f) throw new Error("Cycle detected");
  this.f |= 12285 + 74 * -166, this.f &= -(6210 + -11 * 227 + -3704), oc(this), nc(this), k0++;
  var x = ne;
  return ne = this, Ol.bind(this, x);
}, xn.prototype.N = function() {
  !(120 * 16 + 109 * 71 + -9657 & this.f) && (this.f |= -1 * 859 + -1519 + 238 * 10, this.o = gn, gn = this);
}, xn.prototype.d = function() {
  this.f |= 2 * 1156 + 7359 + -9663, 1 & this.f || jr(this);
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
var ko;
function B0(x, o) {
  D[x] = o.bind(null, D[x] || function() {
  });
}
function Un(x) {
  ko && ko(), ko = x && x.S();
}
function rc(x) {
  var o = this, t = x.data, e = ic(t);
  e.value = t;
  var n = tt(function() {
    for (var r = o.__v; r = r.__; ) if (r.__c) {
      r.__c.__$f |= 7961 + -5041 * 1 + 2 * -1458;
      break;
    }
    return o.__$u.c = function() {
      var i;
      !Ya(n.peek()) && 66 * -44 + 9335 + -6428 === ((i = o.base) == null ? void (-8653 + 8 * 757 + 53 * 49) : i.nodeType) ? o.base.data = n.peek() : (o.__$f |= 9452 + 142 * 1 + 1 * -9593, o.setState({}));
    }, Gl(function() {
      var i = e.value.value;
      return -2620 + -9 * -1059 + -6911 === i ? -1078 + 2 * 539 : !(-913 * 8 + 3949 + 3355) === i ? "" : i || "";
    });
  }, []);
  return n.value;
}
rc.displayName = "_st";
var gr = {};
gr.configurable = !0, gr.value = void (646 + 5 * -67 + -311);
var dr = {};
dr.configurable = !(6871 + 5198 * -1 + 239 * -7), dr.value = rc;
var ur = {};
ur.configurable = !(-5 * -788 + 8133 * 1 + -12073), ur.get = function() {
  var x = {};
  return x.data = this, x;
};
var lr = {};
lr.configurable = !(2 * -4968 + 1 * 1109 + 8827), lr.value = 1;
var Q0 = {};
Q0.constructor = gr, Q0.type = dr, Q0.props = ur, Q0.__b = lr, Object.defineProperties(ke.prototype, Q0), B0("__b", function(x, o) {
  if (typeof o.type == "string") {
    var t, e = o.props;
    for (var n in e) if (n !== "children") {
      var r = e[n];
      r instanceof ke && (t || (o.__np = t = {}), t[n] = r, e[n] = r.peek());
    }
  }
  x(o);
}), B0("__r", function(x, o) {
  Un();
  var t, e = o.__c;
  e && (e.__$f &= -(-372 + -1 * 33 + 1 * 407), (t = e.__$u) === void 0 && (e.__$u = t = function(n) {
    var r;
    return Mr(function() {
      r = this;
    }), r.c = function() {
      e.__$f |= 1 * 5581 + 4642 + -10222, e.setState({});
    }, r;
  }())), Un(t), x(o);
}), B0("__e", function(x, o, t, e) {
  Un(), x(o, t, e);
}), B0("diffed", function(x, o) {
  Un();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, n = o.props;
    if (e) {
      var r = t.U;
      if (r) for (var i in r) {
        var a = r[i];
        void (-6 * -123 + -8064 + 7326) !== a && !(i in e) && (a.d(), r[i] = void (109 * -5 + 5588 + -5043));
      }
      else t.U = r = {};
      for (var s in e) {
        var c = r[s], d = e[s];
        void (-8423 + 1 * -8131 + 16554) === c ? (c = Hl(t, s, d, n), r[s] = c) : c.o(d, n);
      }
    }
  }
  x(o);
});
function Hl(x, o, t, e) {
  var n = o in x && x.ownerSVGElement === void 0, r = ec(t);
  return { o: function(i, a) {
    r.value = i, e = a;
  }, d: Mr(function() {
    var i = r.value.value;
    e[o] !== i && (e[o] = i, n ? x[o] = i : i ? x.setAttribute(o, i) : x.removeAttribute(o));
  }) };
}
B0("unmount", function(x, o) {
  if (typeof o.type == "string") {
    var t = o.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (-2260 + -1 * -9909 + -7649 * 1);
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
      a && (i.__$u = void (-239 * 4 + -3914 * -2 + -6872), a.d());
    }
  }
  x(o);
}), B0("__h", function(x, o, t, e) {
  (e < 61 * 87 + 273 + 39 * -143 || -107 * -65 + 9426 + -16372 === e) && (o.__$f |= -4660 + -1531 * 6 + 13848), x(o, t, e);
}), it.prototype.shouldComponentUpdate = function(x, o) {
  var t = this.__$u;
  if (!(t && t.s !== void 0 || 4 * -1931 + 2654 * -3 + 15690 & this.__$f)) return !(-955 + -646 * -9 + -4859 * 1);
  if (-104 * 71 + 339 * -1 + 7726 & this.__$f) return !(-1 * -2296 + -9188 + 6892);
  for (var e in o) return !0;
  for (var n in x) if (n !== "__source" && x[n] !== this.props[n]) return !(269 * 7 + 3267 * 1 + 2 * -2575);
  for (var r in this.props) if (!(r in x)) return !0;
  return !(5757 + -7231 * 1 + -59 * -25);
};
function ic(x) {
  return tt(function() {
    return ec(x);
  }, []);
}
function Zl({ analytics: x, cameraFacing: o, controller: t, createProtoMessage: e, onPhotoTaken: n, sessionToken: r }) {
  const i = Mt(null), { sunfish: a } = Er(), { appState: s, handleAppStateChange: c, handleError: d } = Bn(), { cameraResolution: g, cameraService: C, onCameraResolutionChange: l } = Sl(i, o), p = ic(void (9273 + 9 * -5 + 4614 * -2));
  He(() => {
    C != null && C["isStreaming"] && (t != null && t["isDetectorInitialized"]) && a && c(et.RUNNING);
  }, [C == null ? void 0 : C["isStreaming"], t == null ? void 0 : t["isDetectorInitialized"], c, a]), He(() => {
    if (s !== et.RUNNING) return;
    if (!C || !t) throw new re("Cannot start detection");
    let A = -5118 * -1 + -2849 + -2269 * 1, u = !1, v = 1 * -5011 + -2949 + -1 * -7960;
    const Z = new Us(30);
    t.clearImagesForDuplicateDetection();
    async function Y({ cameraService: O, canvasImage: M, controller: ye, detection: Q, detectionRecord: ue, onPhotoTaken: le }) {
      const Ze = {};
      Ze.width = M.width, Ze.height = M.height;
      const gt = Ze, ie = await il(M), Re = await O.getCameraProperties(), Ye = { ...Re, detectionRecord: ue, hashedDetectedImagesWithTimestamp: ye.getImagesForDuplicateDetection() }, nt = {};
      nt.sessionToken = r, nt.web = Ye;
      const Fe = nt, Ce = await e(ie, Fe), Te = {};
      Te.detection = Q, Te.imageResolution = gt;
      const Xe = {};
      Xe.image = ie, Xe.data = Te;
      const pe = Xe, Le = {};
      Le.imageData = pe, Le.content = Ce, Le.webMetadata = Ye, Le.controller = ye, le(Le);
    }
    async function j({ cameraService: O, controller: M }) {
      const ye = Date.now();
      for (; O.isStreaming && !u; ) {
        if (nl(A, v)) {
          const { detection: Fe, image: Ce } = M.getBestImage() || {}, Te = M.getDetectionRecord();
          if (Ce && Fe) {
            const Xe = Date.now(), pe = Lu(Z), Le = {};
            Le.width = Ce.width, Le.height = Ce.height, x == null || x.trackCaptureProcess({ detection: Fe, imageResolution: Le, deviceName: await O.getDeviceName(), averageFps: pe, captureProcessDurationInMs: Xe - ye, facingMode: O.getCameraSettings().facingMode, instructionSet: await M.getInstructionSet() }), c(et.WAITING);
            const je = {};
            je.cameraService = O, je.controller = M, je.canvasImage = Ce, je.detection = Fe, je.detectionRecord = Te, je.onPhotoTaken = n, await Y(je), M.restart();
          } else d(new re("Something went wrong during capturing an image"));
          return;
        }
        const Q = O.takePhoto(), ue = {};
        ue.width = Q.image.width, ue.height = Q.image.height;
        const le = ue;
        let Ze;
        try {
          Ze = await M.processImage(Q);
        } catch (Fe) {
          Fe instanceof Error && d(re.fromCameraError(Fe));
          return;
        }
        const gt = Date.now(), ie = gt - Q.timestamp, Re = Xs(1e3 / ie);
        Z.pushFixed(Re);
        const Ye = {};
        Ye.processedImage = Ze, Ye.detectionTime = ie, Ye.fps = Re, Ye.resolution = le, Ye.samVersion = M.samVersion;
        const nt = Ye;
        p.value = nt, Ze.isInCandidateSelection && (A === 9354 * -1 + 31 * 139 + 1009 * 5 && (A = performance.now()), v++), l(le), await sr(Math.max(ua.max - ie, ua.min));
      }
    }
    const F = {};
    return F.controller = t, F.cameraService = C, j(F), () => {
      u = !0;
    };
  }, [x, e, s, C, t, c, d, n, l, p, r]);
  const b = {};
  return b.videoRef = i, b.cameraResolution = g, b.cameraService = C, b.detectionDetails = p, b;
}
const Jr = (x) => {
  const { height: o, width: t } = Yr(x), e = (x.width - t) / (8 * -257 + -4454 + 6512), n = (x.height - o) / (1 * 2789 + 1 * -9575 + 6788), r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = o, r;
}, ac = (x, o) => {
  const t = Yr(x), e = t.width - t.width * 2 * o, n = t.height - t.height * (-6247 + -2 * -3428 + -607 * 1) * o, r = (x.width - e) / (-9643 * 1 + 4318 * 2 + -1009 * -1), i = (x.height - n) / (4446 + -2363 * 3 + 2645), a = {};
  return a.width = e, a.height = n, a.shiftX = r, a.shiftY = i, a;
}, _n = (x, o) => {
  const { shiftX: t, shiftY: e } = Jr(x), n = {};
  return n.x = o.x + t, n.y = o.y + e, n;
}, Rl = (x, o) => ({ ...o, topLeft: _n(x, o.topLeft), topRight: _n(x, o.topRight), bottomRight: _n(x, o.bottomRight), bottomLeft: _n(x, o.bottomLeft) }), Kl = ({ redfin: x, cameraResolution: o, detectionDetails: t, isImageMirror: e }) => {
  const {
    documentCameraOptions: { thresholds: n }
  } = Qs(), r = Mt(null);
  if (He(() => {
    if (!(r != null && r.current))
      return;
    r.current.width = o.width, r.current.height = o.height, Nu(r.current);
    const p = Jr(o), b = ac(o, n.outOfBoundsThreshold), A = js(o);
    t.value && (gl({
      canvas: r.current,
      polygon: t.value.processedImage.detectedDocument,
      color: "red"
    }), wo(r.current, p, "lime"), wo(r.current, b, "yellow"), wo(r.current, A, "blue"));
  }, [o, t.value, n.outOfBoundsThreshold]), !t.value)
    return null;
  const {
    detectionTime: i,
    fps: a,
    processedImage: { detectedDocument: s, instructionCode: c, invalidValidators: d },
    resolution: g,
    samVersion: C
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
    "Component version": "6.1.8"
  };
  return C && (l["SAM version"] = C), d.length > 0 && (l["Invalid validators"] = d.join(", ")), /* @__PURE__ */ H(
    Iu,
    {
      ref: r,
      cameraResolution: o,
      detectionDetails: l,
      isImageMirror: e
    }
  );
};
function Pl(x) {
  return /* @__PURE__ */ H("rect", { fill: "#000", ...x, rx: "2%" });
}
function Vl(x) {
  const [o, t] = at(!1), e = () => t((i) => !i), n = "" + o;
  E0(() => {
    function i() {
      if (!x.current) return;
      const d = new MutationObserver(() => {
        e();
      }), g = {};
      return g.childList = !0, g.subtree = !0, g.attributes = !0, d.observe(x.current, g), d;
    }
    function a() {
      var C;
      if (!((C = x.current) != null && C["parentElement"])) return;
      const d = new MutationObserver((l) => {
        l.find((b) => {
          for (const A of b.removedNodes)
            if (A === x.current) return !0;
        }) && e(), l.forEach((b) => {
          b.addedNodes.forEach((A) => {
            var u;
            (u = A.parentElement) == null || u.removeChild(A);
          });
        });
      }), g = {};
      return g.childList = !0, d.observe(x.current.parentElement, g), d;
    }
    const s = i(), c = a();
    return () => {
      c == null || c.disconnect(), s == null || s.disconnect();
    };
  });
  const r = {};
  return r.key = n, r;
}
const Tl = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Ll({ cutOut: x, height: o, width: t }) {
  const e = Mt(null), { key: n } = Vl(e);
  return /* @__PURE__ */ H("div", { ref: e, style: Tl, children: /* @__PURE__ */ H("svg", { viewBox: `0 0 ${t} ${o}`, children: [
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
function Nl({ fullOverlay: x, resolution: o }) {
  const t = Mu(o), e = `${t.height * 100}%`, n = `${t.width * 100}%`, r = `${t.shiftX * 100}%`, i = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ H(
    Ll,
    {
      cutOut: x || /* @__PURE__ */ H(Pl, { height: e, width: n, x: r, y: i }),
      height: o.height,
      width: o.width
    }
  );
}
const Dl = async () => WebAssembly.validate(new Uint8Array([6663 + 114 * 76 + -131 * 117, -718 + 393 * -17 + 7496, -4015 + 134 * 2 + 3862, 972 + 70 * 24 + -2543, 1, -9913 + 291 * -29 + 18352, 8059 + -8059 * 1, 8168 + 3488 * 2 + -15144, -8474 + 1 * 6133 + 2342, -613 * 2 + -34 * 101 + 4665 * 1, 4992 + -109 * -15 + -6626, -11 * 687 + 2851 * -3 + 16206, 15 * -593 + -3658 * -1 + 5237 * 1, -2489 * -3 + -487 + -6979 * 1, 9079 + -1 * 8956, -1126 * 1 + 5191 + -677 * 6, 8 * 308 + -8989 + 6527, 2188 * -4 + 1430 + 7323, 6755 + -193 * 35, -1290 * -3 + 827 + -1 * 4687, 5629 + 1548 * 6 + 1 * -14907, 3369 * -1 + 261 * 33 + -5243, -131 * -73 + 5190 + -14745, -2918 + -4 * -1346 + -2466, 229 * 43 + 2890 + -11 * 1152, 2483 + -11 * 633 + -70 * -64, -1 * 1501 + 164 * -36 + -547 * -14, 77 * 46 + -1067 * 1 + -2460, -3642 + -3 * 505 + 5410, -8470 + 952 * 9, 2 * 181 + -452 * -5 + -2611]));
(function(x, o) {
  function t(s, c, d, g, C) {
    return ce(g - 666, C);
  }
  function e(s, c, d, g, C) {
    return ce(d - 226, s);
  }
  function n(s, c, d, g, C) {
    return ce(g - -786, d);
  }
  function r(s, c, d, g, C) {
    return ce(C - 214, c);
  }
  const i = x();
  function a(s, c, d, g, C) {
    return ce(g - 563, s);
  }
  for (; ; )
    try {
      if (parseInt(a("Qn(O", 751, 730, 751, 753)) / 1 + -parseInt(e("H%PV", 384, 404, 384, 385)) / 2 * (-parseInt(e("S(to", 418, 429, 409, 423)) / 3) + -parseInt(t(853, 869, 880, 865, "kfxh")) / 4 + parseInt(r(399, "kfxh", 412, 393, 401)) / 5 + parseInt(r(404, "@)r&", 424, 416, 408)) / 6 + parseInt(t(837, 859, 850, 847, "iUJl")) / 7 + -parseInt(r(436, "I59N", 436, 397, 419)) / 8 * (parseInt(n(-601, -565, "rh4N", -586, -605)) / 9) === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(kx, -89110 + 37 * -5528 + 565277 * 1);
async function El() {
  function x(d, g, C, l, p) {
    return ce(l - 846, p);
  }
  const o = {};
  function t(d, g, C, l, p) {
    return ce(d - 642, C);
  }
  o[t(811, 800, "(WEj")] = Ys, o[e(1033, "wp06") + "h"] = 256;
  function e(d, g, C, l, p) {
    return ce(d - 827, g);
  }
  const n = await window[t(834, 831, "4Tc&") + "o"][a("LXe8", 797) + "e"][t(818, 814, "W#b*") + a("1Tu3", 816) + "y"](o, !0, [a("iUJl", 810) + "pt", e(1035, "TKNU") + "pt"]), r = Uint8Array[s("yESa", -366, -358, -379)](Array(16)[e(1001, "EpaQ")](15 * 486 + -539 * -1 + 7829 * -1)), i = window[a("C*Oe", 835) + "o"][t(838, 826, "E&kb") + s("[(lT", -375, -342, -360) + t(839, 828, "9Mdo")](r);
  function a(d, g, C, l, p) {
    return ce(g - 625, d);
  }
  function s(d, g, C, l, p) {
    return ce(l - -561, d);
  }
  const c = {};
  return c[x(1039, 1035, 1053, 1050, "hjxQ")] = n, c.iv = i, c;
}
function ce(x, o) {
  const t = kx();
  return ce = function(e, n) {
    e = e - (8126 + -1086 * 1 + -1 * 6871);
    let r = t[e];
    if (ce.uHByKw === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", p = "";
        for (let b = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = b % 4 ? A * 64 + u : u, b++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          u = C.indexOf(u);
        for (let b = 0, A = l.length; b < A; b++)
          p += "%" + ("00" + l.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let l = [], p = 0, b, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          p = (p + l[u] + C.charCodeAt(u % C.length)) % 256, b = l[u], l[u] = l[p], l[p] = b;
        u = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, p = (p + l[u]) % 256, b = l[u], l[u] = l[p], l[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[p]) % 256]);
        return A;
      };
      ce.sjZvzO = d, x = arguments, ce.uHByKw = !0;
    }
    const a = t[5 * -753 + 9166 * -1 + -193 * -67], s = e + a, c = x[s];
    return c ? r = c : (ce.pkSkbS === void 0 && (ce.pkSkbS = !0), r = ce.sjZvzO(r, n), x[s] = r), r;
  }, ce(x, o);
}
async function Yl(x) {
  const { iv: o, key: t } = await El(), e = {};
  function n(g, C, l, p, b) {
    return ce(C - 308, g);
  }
  e[n("qgbL", 501)] = Ys, e.iv = o;
  const r = await window[d(-155, -170, -163, "rh4N") + "o"][n("iUJl", 510) + "e"][c(1070, 1071, 1080, "iUJl") + "pt"](e, t, x);
  function i(g, C, l, p, b) {
    return ce(l - 395, g);
  }
  const a = await window[c(1083, 1089, 1067, "Qn(O") + "o"][c(1060, 1075, 1050, "(WEj") + "e"][n("wp06", 491) + i("vyG0", 549, 566)](d(-163, -179, -183, "gKNG"), t), s = {};
  function c(g, C, l, p, b) {
    return ce(g - 885, p);
  }
  function d(g, C, l, p, b) {
    return ce(C - -349, p);
  }
  return s[n("iUJl", 517) + "ge"] = r, s[i("W#b*", 623, 606)] = a, s.iv = o, s;
}
function kx() {
  const x = ["WPRdHLqbfctcRCopW63cL8kXna", "W4KewCoxWP9tWQFcLGdcKuXu", "W7v3dJVdNq", "ybZcV8o3bW", "W7pdLs4LW7i", "WRvOWP0DfmoxAhlcQ8ojwuW", "FHlcUsBcOCkUpCkW", "WQVcKmkYW4JdSq", "WQpcIbNcKCob", "W7Xko8kLW4VdRSktAZiF", "oNry", "W60EArDoWRb/WQa2WO/dRwJdPG", "W5XSWPjFWQi", "or06kgFcNColWQPgWOdcMuO", "W7W+WQG7WQm", "WR3cMaJcLSom", "WPJdTraktG", "ceCw", "WO48a0m", "W5OVoq", "cCoZrc0", "W4xcQhNcQSoe", "ymk0W6/dTfJdU8k3W50kaa", "WQjft8oN", "WPmOdfldJW", "beCbaCk0", "p8oEiL/cMYXpW61hWRybhhS", "pH4Zlc/dGCo9WPf+WPa", "kvxcIGdcMa", "WPL9ECkHiSk7W49AusO", "W6hdIKJdLmkuW4pcTCoeuXdcHSkIxa", "W69WWPzG", "W5vXWOXxWQq", "W6tdIdhcS8oGWOldOmoo", "WRxcKXJcL8ou", "W70eW4RdMmkDsWBdGCo5W7RcImoQ", "WRfPWPiBfmoxd3dcT8oqyuhcMa", "WQxcLMnIWRxcS8kWW5hcMSojWQtcRG", "xLtcPmkwmI5uWRTNW7rtoWK", "W5fQxrFcMSkdqCoZWQJcRapdGmk0", "axRcRqVcHG", "EqPlfSkJ", "WQdcI8ktsG"];
  return kx = function() {
    return x;
  }, kx();
}
(function(x, o) {
  const t = x();
  function e(a, s, c, d, g) {
    return ze(s - -74, a);
  }
  function n(a, s, c, d, g) {
    return ze(a - -205, g);
  }
  function r(a, s, c, d, g) {
    return ze(c - -25, g);
  }
  function i(a, s, c, d, g) {
    return ze(g - -915, d);
  }
  for (; ; )
    try {
      if (parseInt(e("PrXi", 201, 212, 196, 188)) / 1 + parseInt(e("Z^SX", 214, 204, 223, 214)) / 2 + parseInt(n(78, 74, 68, 74, "LWy^")) / 3 * (-parseInt(e("ppOy", 200, 204, 194, 213)) / 4) + -parseInt(i(-640, -644, -630, "CSeD", -634)) / 5 + -parseInt(i(-632, -646, -637, ")yjj", -642)) / 6 * (-parseInt(r(267, 260, 267, 263, "6SJg")) / 7) + parseInt(n(72, 77, 72, 77, ")yjj")) / 8 + parseInt(n(64, 71, 54, 64, "F6Gd")) / 9 === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Gx, -5473 * 43 + 224723 + 153536);
function ze(x, o) {
  const t = Gx();
  return ze = function(e, n) {
    e = e - 267;
    let r = t[e];
    if (ze.aOCcpp === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", p = "";
        for (let b = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = b % 4 ? A * 64 + u : u, b++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          u = C.indexOf(u);
        for (let b = 0, A = l.length; b < A; b++)
          p += "%" + ("00" + l.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let l = [], p = 0, b, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          p = (p + l[u] + C.charCodeAt(u % C.length)) % 256, b = l[u], l[u] = l[p], l[p] = b;
        u = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, p = (p + l[u]) % 256, b = l[u], l[u] = l[p], l[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[p]) % 256]);
        return A;
      };
      ze.fcpDsE = d, x = arguments, ze.aOCcpp = !0;
    }
    const a = t[-1407 * -5 + -1 * -7247 + 386 * -37], s = e + a, c = x[s];
    return c ? r = c : (ze.yQuZVy === void 0 && (ze.yQuZVy = !0), r = ze.fcpDsE(r, n), x[s] = r), r;
  }, ze(x, o);
}
function Gx() {
  const x = ["WP0YEmoMemk2iCkTW6KtWPq", "tSoZW4xcPa", "udCPW4ujW4ddTSocW5bJWO86", "WPy5W4OhkHPrW7K", "W4bLW6Wana", "y8kZW5JcGsVcTmowoq", "W6XmW7C1ftRdIHT1WQuOWRVcHW", "yCkVjmkjoq", "WOxdNmkFW6ddMSoXWRhcMMhcNeddHs0", "rGFcPYW3", "W7qWx8kMpmkpB8oPxW", "vfSOqwjQd8kuFa", "WRtcUqpdKHtdIHtcIbGmWRm", "bK7cGIbQ", "W7q5umo0x8oXtSoLFv1+WQ4", "WQlcNSoEWQq6", "WQ3cJhtcMSob", "WQddTCotWORdISknuJLA", "vWLJmedcOsVdRCoBbmoSWR/cOG", "WPG4WRWqgHXbW4hdMq", "tmoGW4ZdHCkll8kiwvW", "WOlcGbZdN8k1", "WRGYWRnXW5tcRCo8W7dcKq", "W5ZdKetcJ8oXWQ4iw8kDWRxdJIGg", "WQFdTSoFW67cOSkUEtLQxCkS", "aIldUmkbc8kEWQldSJ8FvW"];
  return Gx = function() {
    return x;
  }, Gx();
}
function Fl(x) {
  const o = new ArrayBuffer(x[e("Tksf", 12, 31, 21) + "h"]), t = new Uint8Array(o);
  for (let n = -1 * -317 + 2606 + -2923, r = x[e("r[GC", 3, 21, 13) + "h"]; n < r; n++)
    t[n] = x[e("311F", 6, 6, 7) + e("6SJg", 9, -4, 4)](n);
  function e(n, r, i, a, s) {
    return ze(a - -263, n);
  }
  return o;
}
(function(x, o) {
  function t(a, s, c, d, g) {
    return be(c - -299, a);
  }
  const e = x();
  function n(a, s, c, d, g) {
    return be(a - 518, s);
  }
  function r(a, s, c, d, g) {
    return be(g - -877, c);
  }
  function i(a, s, c, d, g) {
    return be(c - 873, d);
  }
  for (; ; )
    try {
      if (parseInt(i(1255, 1277, 1253, "SVZz", 1289)) / 1 * (parseInt(n(808, "[GOc", 712, 882, 816)) / 2) + parseInt(i(1391, 1335, 1327, "1JOv", 1406)) / 3 + parseInt(i(1328, 1174, 1271, "EYkr", 1156)) / 4 * (parseInt(i(1278, 1226, 1261, "41tm", 1311)) / 5) + -parseInt(r(-642, -599, "EYkr", -501, -604)) / 6 + parseInt(i(1188, 1232, 1275, "[GOc", 1231)) / 7 * (parseInt(t("BR)R", -47, 17, -22, 22)) / 8) + -parseInt(r(-536, -469, "1Ylf", -544, -513)) / 9 + parseInt(t("cbwm", 42, 104, 75, 30)) / 10 === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ox, 289883);
function be(x, o) {
  const t = Ox();
  return be = function(e, n) {
    e = e - 237;
    let r = t[e];
    if (be.wotwqb === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", p = "";
        for (let b = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = b % 4 ? A * 64 + u : u, b++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          u = C.indexOf(u);
        for (let b = 0, A = l.length; b < A; b++)
          p += "%" + ("00" + l.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let l = [], p = 0, b, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          p = (p + l[u] + C.charCodeAt(u % C.length)) % 256, b = l[u], l[u] = l[p], l[p] = b;
        u = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, p = (p + l[u]) % 256, b = l[u], l[u] = l[p], l[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[p]) % 256]);
        return A;
      };
      be.RnbZMh = d, x = arguments, be.wotwqb = !0;
    }
    const a = t[2 * 1067 + -2 * 4958 + 7782], s = e + a, c = x[s];
    return c ? r = c : (be.qGtkiM === void 0 && (be.qGtkiM = !0), r = be.RnbZMh(r, n), x[s] = r), r;
  }, be(x, o);
}
function Xl() {
  const x = i(-441, -411, -573, -484, "]XW)") + r(1118, "h9va", 1148, 1055) + s(-185, "KlSp", -79) + s(-170, "rOuo", -227) + r(996, "]XW)", 1045, 1048) + a(-24, -82, "rD7^") + i(-398, -524, -490, -510, "NuRn") + a(-50, -54, "!ME&") + c("eHYy", -52) + c("1]Pk", -145) + s(-122, "H@mO", -94) + s(-127, "rOuo", -217) + s(-11, "^JNt", -100) + r(816, "rD7^", 963, 857) + a(31, 1, "&XuQ") + i(-367, -408, -430, -457, "!ME&") + s(-251, "bQ(1", -233) + r(952, "eHYy", 838, 875) + c("^JNt", -111) + c("^JNt", -127) + i(-473, -475, -503, -503, "eHYy") + s(-85, "6mOd", -144) + a(-25, 92, "EYkr") + s(-97, "6nIW", -187) + i(-402, -327, -332, -387, "9G(7") + c("E5jK", 43) + s(-306, "eHYy", -251) + c("e@#e", -100) + i(-426, -436, -515, -468, "1Ylf") + c("JZ6m", -168) + i(-634, -645, -612, -543, "EU&2") + c("f*mN", 50) + a(46, 135, "f*mN") + s(-35, "BwQf", -86) + c("bQ(1", -36) + s(-170, "7isP", -169) + r(997, "]XW)", 890, 984) + a(-44, -89, "Ct^w") + a(30, 19, "f*mN") + c("cbwm", -19) + c("[GOc", 17) + r(846, "41tm", 849, 868) + i(-583, -658, -606, -597, "1JOv") + r(1126, "1Ylf", 1038, 1030) + i(-389, -371, -449, -442, "H6&d") + c("NvCT", -150) + a(-2, -32, "BR)R") + r(1032, "Du^3", 1025, 946) + i(-553, -551, -531, -541, "1Ylf") + a(-84, 22, "1Ylf") + a(-88, 13, "SVZz") + c("JZ6m", -153) + r(1024, "U@0[", 1003, 1016) + a(35, -30, "1]Pk") + i(-489, -324, -425, -425, "1XJG") + c("E5jK", -115) + a(-34, -67, "1GGr") + i(-692, -596, -554, -609, "41tm") + i(-438, -467, -525, -482, "1GGr") + r(812, "BwQf", 925, 839) + i(-482, -502, -413, -391, "KlSp") + s(-93, "SVZz", -210) + a(55, -43, "f*mN") + s(-65, "BR)R", -182) + a(-83, 17, "1JOv") + i(-479, -502, -472, -501, "eHYy") + c("6nIW", -79) + i(-488, -496, -666, -564, "6nIW") + c("NvCT", -7) + s(-4, "1]Pk", -116) + i(-513, -534, -380, -461, "rOuo") + r(1009, "NuRn", 959, 910) + a(82, 91, "bQ(1") + i(-457, -412, -436, -505, "9aq[") + c("H6&d", -47) + r(811, "h9va", 776, 877) + i(-573, -553, -600, -493, "cbwm") + a(-35, -122, "H@mO") + i(-403, -400, -465, -448, "6mOd") + r(935, "NvCT", 929, 1041) + c("KlSp", -110) + a(-66, -75, "pQ%b") + s(-288, "7isP", -180) + s(-281, "1Ylf", -218) + r(947, "H1oo", 1144, 1029) + a(69, -40, "KlSp") + s(-336, "JZ6m", -265) + i(-356, -418, -456, -434, "eHYy") + a(63, 48, "Rrzl") + r(979, "Ct^w", 998, 1036) + s(-214, "1]Pk", -186) + a(-147, -193, "1JOv") + c("6mOd", -97) + r(999, "[GOc", 900, 1004) + a(-48, -126, "BwQf") + r(1018, "D029", 1172, 1058) + a(-112, -130, "bQ(1") + i(-568, -551, -624, -533, "H@mO") + a(47, 108, "9aq[") + r(971, "SVZz", 867, 959) + i(-469, -465, -507, -472, "IbS0") + a(-136, -55, "NvCT") + r(861, "H1oo", 950, 896) + r(975, "(z!y", 947, 945) + c("NuRn", -69) + c("!ME&", -2) + c("cbwm", -132) + c("9aq[", -143) + a(-71, -98, "1Ylf") + r(1019, "eHYy", 1121, 1014) + a(-141, -204, "pQ%b") + a(32, 62, "SVZz") + r(898, "Rrzl", 900, 837) + s(-70, "E5jK", -136) + r(1120, "Pz@o", 1062, 1034) + s(-182, "e@#e", -235) + a(-1, -5, "BwQf") + s(-117, "1XJG", -62) + i(-271, -422, -445, -384, "(z!y") + c("bQ(1", 2) + c("[GOc", -121) + i(-411, -371, -523, -420, "NvCT") + r(899, "&XuQ", 886, 859) + r(881, "H1oo", 850, 951) + c("h9va", -84) + c("9aq[", -13) + s(-75, "1XJG", -165) + s(18, "H6&d", -55) + s(-40, "(z!y", -72) + i(-653, -622, -666, -573, "1JOv") + s(-217, "[GOc", -138) + i(-400, -414, -530, -496, "1Ylf") + a(-132, -198, "Du^3") + c("Pz@o", -140) + c("H6&d", -14) + i(-471, -473, -504, -423, "[(JQ") + c("(z!y", -151) + a(-46, -48, "EYkr") + s(-291, "1]Pk", -203) + c("eHYy", 21) + a(44, 15, "1JOv") + a(-131, -173, "EYkr") + s(-217, "H1oo", -135) + r(1035, "H@mO", 940, 985) + s(-328, "ycD@", -252) + s(-288, "ycD@", -179) + c("&XuQ", -128) + r(796, "IbS0", 807, 864) + a(-115, -106, "f*mN") + i(-335, -313, -366, -386, "&XuQ") + a(-128, -69, "U@0[") + c("D029", -80) + i(-613, -599, -546, -605, "6nIW") + s(-79, "cbwm", -145) + c("Du^3", 62) + i(-591, -434, -566, -492, "rOuo") + s(-220, "]XW)", -271) + i(-488, -472, -346, -402, "41tm") + r(970, "&XuQ", 1045, 1061) + s(-85, "6mOd", -181) + r(900, "Rrzl", 1042, 1013) + c("Pz@o", 27) + s(-218, "A@wv", -242) + s(-183, "(z!y", -119) + r(860, "1Ylf", 962, 963) + s(-36, "NvCT", -80) + c("Rrzl", 38) + c("e@#e", -101) + i(-478, -473, -453, -383, "NvCT") + c("BR)R", 0) + s(-185, "1]Pk", -167) + r(993, "KlSp", 1021, 1031) + c("]XW)", -67) + i(-448, -306, -449, -403, "1Ylf") + r(972, "ycD@", 839, 884) + r(907, "1]Pk", 818, 892) + a(-125, -153, "Ct^w") + r(1146, "eHYy", 1154, 1060) + a(-27, -44, "rD7^") + r(953, "EYkr", 1013, 908) + c("h9va", -87) + i(-646, -520, -467, -559, "Pz@o") + i(-520, -509, -449, -447, "41tm") + i(-616, -573, -520, -569, "e@#e") + i(-460, -500, -409, -463, "6mOd") + c("[(JQ", -119) + a(-64, -111, "f*mN") + i(-570, -627, -707, -593, "pQ%b") + i(-454, -314, -367, -430, "A@wv") + a(58, -13, "1JOv") + a(23, 24, "^JNt") + a(68, 112, "&XuQ") + s(1, "ycD@", -43) + s(-363, "6mOd", -261) + s(-79, "^JNt", -185) + r(999, "BR)R", 1064, 1002) + s(-99, "h9va", -202) + a(-92, -207, "NvCT") + s(-215, "]XW)", -273) + r(852, "1Ylf", 1002, 964), o = window[c("NuRn", -96)](x), t = window[c("f*mN", -122)](o), e = Fl(t), n = {};
  n[i(-372, -507, -472, -460, "Du^3")] = Fs, n[c("e@#e", -4)] = Ru;
  function r(d, g, C, l, p) {
    return be(l - 593, g);
  }
  function i(d, g, C, l, p) {
    return be(l - -847, p);
  }
  function a(d, g, C, l, p) {
    return be(d - -384, C);
  }
  function s(d, g, C, l, p) {
    return be(C - -512, g);
  }
  function c(d, g, C, l, p) {
    return be(g - -408, d);
  }
  return window[c("BwQf", -141) + "o"][s(-319, "1Ylf", -250) + "e"][r(1010, "h9va", 1115, 1027) + a(-79, 32, "IbS0")](i(-603, -461, -468, -525, "cbwm"), e, n, !0, [c("[(JQ", -39) + "pt"]);
}
function Ox() {
  const x = ["W5lcNWHCFq", "BaVdLfbu", "BSkqhSoKuq", "W7PlChLO", "qxhdM39x", "WRCUsSodha", "gXxcJSkaWPW", "pCkCW5GqW5i", "W6nDn2NcUMdcP8kEWOe+lSkLWPK", "WOJcRLSbEq", "WQxcNLBcN8k0", "W48IWQ9+ya", "pIWjWP/cRW", "sx3dIH7cTa", "WOa+zM/dMa", "W6GOyMFcTG", "WPJdSIPoiq", "W5JdT8kHASofvSoUmCok", "hX/cLSkBW5e", "W7fvB8oada", "WR96Amomiq", "CCkmaCoWsa", "WPCcrSku", "WOq9ywRdNW", "W5RdSMtcSmk8WPldMCkx", "CmkZWRWuESoFW7CduuldLx9a", "W7BdOSkCWODN", "WOL8W6K8Eq", "pJf2WRxdVG", "D8k3WR0rFmoCW78KAu/dVvHh", "B2NcUmkvlW", "mCoWW5L8", "Eu5vWRG1W7ZcVa3cQmk9WR3dMa", "WQOfW7zJba", "WRVcMCodbda", "pmkpW5aJW5y", "fweoWOGJ", "W6SqW5fVoG", "W4GSsCkFaa", "WOHNzx7dNG", "WOTxW6ddKuq", "WRBcUSkVW6aAWQjBW71YW6ZcSq", "WRPYvvf0W65t", "gdrDWRRdIq", "Ds40W45n", "W5ddJ8oiWP9a", "svFdGSojW5andCoyWOPbka", "WQ5sW7yAy8o/xSk9ySk6kSofW5C", "WPyBymk0", "WQakx8kliG", "W6BcK8kbi1S", "rK3dPmoOWRG", "WQlcMCk9WPO9", "W7JcHmkNW7P6", "WPhdVJfniG", "lrpcN8kMWOi", "r1pdJ8oRWOi", "W7BcGaLaqq", "nSoTW4juW50", "WRFcTSoQlSo9", "WRNcKvxcQCk+", "w8kmi8otoq", "bhTUW4Gx", "WO5PW7ldOx4", "xCkMWRhdQhC", "W7pcNdzgqW", "WRRdJ8oTdmov", "W67cMWtcKSoj", "E3hdVdRcNG", "haNcN8khWOK", "WRndW7DdyW", "W4xdP8oGWObM", "DCkujSo9vW", "W6NcIbPxgG", "h8o6WQ15W6u", "W6L/xWddGa", "WRxdISkUWPPi", "jKfRpCko", "WQJdMw9LW4G", "lSo1W5H8nq", "z8kCvCoYEG", "WOKGnZNdSq", "F1ScvCkW", "amkzW4zwW6W", "W7D2WR9iaq", "kmk1W4qxfq", "sCkrb8oaxW", "W6GskhJcNG", "WRyBsqJdNa", "itGBW5eW", "FmkIWOtcKL4", "sSkDWRRcK0a", "W7tdNmooWOus", "mqJcRXK0W6/dMCovWPPicxm", "WQldKCoPxCoh", "WQjPdCo/rG", "W6dcOmovk8oH", "vhj0qSkP", "emoZDSk3kCo8WQldJ8kOW7XbyW", "o8kZW5HPW44", "rLvJv8kT", "WOG5FSkvjW", "dmo1W75xW78", "WQD2W7zRvIOsBmkkzSo6WRhdTG", "W6bjWR99WQi", "WOxcRCooiSoX", "W7hdMg5BW68", "W6irW5fqBq", "W6xdO8oQWPv7", "WOddMZr/WQK", "WOtdScDXDG", "W7BcKav2ha", "WPNcMmo2fmoF", "WOaOubxcPG", "l8ojW5z1bW", "e8koCSk+yW", "bbeZW4zq", "l8klW6eoWRm", "s3pdUSkJfW", "c8o6W7jVW6e", "WQX0W5vQvW", "jCoAW7TLrG", "Dmo7WOJcN04", "WO/cNgGIFq", "WQr+W4bNuq", "qq3dSmkQcq", "WRxdGSoVWRz1", "W5RcR8ovzCo+tCo/", "DCksg8k+Cq", "wITcWOpdSW", "pCouWOuTaG", "W6CNx3fZ", "dmkYWPHZqa", "mgVdICkknG", "W7BcUINcKCol", "W6SbWRnhbW", "W4ZdJSoZWPLj", "W4jvevBcNq", "WRm5sYtcOG", "W7NdQHDksG", "WQiEzY7dPW", "WO9lW7ldKrS", "uqVdOgrA", "W5fPxWRdGq", "WPhcRmo0g8o9", "WR1AW7X8xW", "fCoPW4bfFW", "hmocW5eIW7G", "xCkShCk3jq", "W7H2u8oRma", "WOFcQs9WDW", "WR0SiG0tWQS4WO/dOCoZWPiDbG", "t8kvDSovxG", "FIStW515", "W5CEWOPOcG", "WRWGrmkOzq", "WPu1rmkzxq", "WOddTGiqqa", "WP7dHCoOlCoL", "F1VdJmooWRi", "W4ZcQH9lDG", "WQj4WOO+Cq", "W7tdU0LyW6a", "wvdcPCkNpa", "j8oBW7TZ", "itlcVCkQWR0", "bmk4W718ja", "hgpdHYhcMG", "sLxdGSohW5aLomo3WO5lpW", "WQCOudJcNW", "WRtdJSkPWOv3", "W5nMFmoTyG", "WOKkFc7dUa", "t2pcT8kvoW", "WOdcJ1hcRSk2", "yg7dVCoUWRC", "sM5bz8kG", "W6HPW5ZdHvm", "W6ipFd/dPq", "DCkhlSozvq", "WR7cIttcKmk1", "x8k5mSoGCG", "WRxdSSowewi", "W59Wwmoi", "WOSSCqZdHq", "WPuyrCk4Dq", "WRuGimk3xW", "WOGwW7xdRgC", "WPxdSsS+W6S", "ovCjWPVdJG", "W7q0WQS6", "WOCZDtpdNq", "j21RWQ1J", "W5LeE3vY", "W7JdPmo6WQ5MzhVcU8kD", "W6CrW7rPpW", "gmkaW6roAG", "nmo5uCkpgmkdF1hcR1y8", "c8kBW5L6WOi", "WO3cHNS4W6a", "W6KuWQ9e", "W4Pth8ojDSojWPpcOSoGrIdcGG", "WQddJLLfW7y", "WPbQW5yQDW", "WRzRW7JdMe4", "EW3dSSodWPu", "W6ldMITfWQ0", "WOHJWQ9Rwa", "WORcSCknWRTx", "lZf8WO7dTG", "WORcUSoFoSoi", "WPegmGFdHq", "WOBcQSodmw0", "rSorW45QxmkAgmoo", "WRuCW6q/Aq", "W4mhWPuniq", "W6j1Av5m", "W7fWWOiInq", "W4qOe07cNW", "dmkCW6yVW5q", "W7X/BvldQa", "WPJcP8kHE8o0", "W5pcSsPhEa", "WQ5FW5ldHgS", "WQ3cRJP3rq", "WQxdKCozzmoN", "ymkNb8oewq", "u2ejWQW9", "WRlcGL9LCW", "WQmYBHpcUa", "W74xW7XchW", "kmogW6j9ha", "W74WWQb7aq", "eMxcUSkEbW"];
  return Ox = function() {
    return x;
  }, Ox();
}
async function jl(x) {
  const o = await Xl(), t = {};
  function e(r, i, a, s, c) {
    return be(a - 133, s);
  }
  function n(r, i, a, s, c) {
    return be(r - -910, c);
  }
  return t[n(-532, -634, -549, -522, "H6&d")] = Fs, window[e(600, 445, 495, "[GOc") + "o"][e(283, 403, 378, "1GGr") + "e"][e(371, 563, 481, "H1oo") + "pt"](t, o, x);
}
function qe(x, o) {
  const t = Hx();
  return qe = function(e, n) {
    e = e - (1 * 9103 + 509 * -1 + -8492);
    let r = t[e];
    if (qe.Yxvpdj === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", p = "";
        for (let b = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = b % 4 ? A * 64 + u : u, b++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          u = C.indexOf(u);
        for (let b = 0, A = l.length; b < A; b++)
          p += "%" + ("00" + l.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let l = [], p = 0, b, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          p = (p + l[u] + C.charCodeAt(u % C.length)) % 256, b = l[u], l[u] = l[p], l[p] = b;
        u = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, p = (p + l[u]) % 256, b = l[u], l[u] = l[p], l[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[p]) % 256]);
        return A;
      };
      qe.ryIjvY = d, x = arguments, qe.Yxvpdj = !0;
    }
    const a = t[-1 * -6833 + 3032 * 2 + 4299 * -3], s = e + a, c = x[s];
    return c ? r = c : (qe.DUXXRC === void 0 && (qe.DUXXRC = !0), r = qe.ryIjvY(r, n), x[s] = r), r;
  }, qe(x, o);
}
(function(x, o) {
  function t(i, a, s, c, d) {
    return qe(c - -277, i);
  }
  function e(i, a, s, c, d) {
    return qe(a - -582, d);
  }
  function n(i, a, s, c, d) {
    return qe(i - -670, s);
  }
  const r = x();
  for (; ; )
    try {
      if (parseInt(n(-557, -547, "Qx4e", -558, -547)) / 1 * (-parseInt(e(-458, -462, -460, -452, "I5ZJ")) / 2) + -parseInt(n(-566, -564, "vS2!", -559, -558)) / 3 + -parseInt(n(-549, -547, "jJtS", -553, -538)) / 4 + parseInt(e(-476, -465, -474, -465, "67l(")) / 5 + -parseInt(n(-554, -562, "]*q5", -547, -554)) / 6 + -parseInt(t("G9S4", -170, -169, -165, -171)) / 7 * (-parseInt(e(-471, -467, -463, -465, "g0kF")) / 8) + -parseInt(t("cD95", -165, -165, -174, -167)) / 9 * (-parseInt(n(-568, -566, "xUw(", -573, -579)) / 10) === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Hx, 921179);
function Hx() {
  const x = ["W4NcR3/cV8k+WPVcRfy", "WQFdJCo9kqxcQePtWQhcHsqbpSkF", "WP3cGqVcLSo0W4lcTqrtW6NcP8kewa", "W5FcHM7cLCojW5LWrCoDW79WWQ8", "WQHxW40GgmkHEmk3WQZcTSo+pYC", "WOhdNeFcQhxdM8kqxW", "mb9uFSooWR0UWRJdSeLt", "WQDrWO5ayCoIn8kq", "idldPSo4WQu", "WOJdK2S", "WQigW6D3EmkEBmot", "WPzDomoOWOJdJmk6kW", "jdCmW4RdQ8oXtCkQyCkozmkxW4K", "WOtcMviQW4aqWPNdUCkaatL2", "W6ZcSxZdS8k/pMD8W7JcVGldUt4", "WQ1jqKldVe5ekJHjxdau", "W6y+WOClWQnlWP5U", "W7RcHqz7W6HQndKzWPVdI8kPjq", "FM7cRmk6W7ivhmoxxCkRWQe", "lSoFW7L/W7BcPqtcH8kqu0BcPYu", "WPPrymojoSk0W5FcNxhcLmoGgSoD"];
  return Hx = function() {
    return x;
  }, Hx();
}
async function Ml(x) {
  const { iv: o, key: t, message: e } = await Yl(x), n = await jl(t);
  function r(s, c, d, g, C) {
    return qe(s - -998, c);
  }
  const i = {};
  i[a(770, 769, 772, 778, "6&KI")] = n, i.iv = o;
  function a(s, c, d, g, C) {
    return qe(s - 659, C);
  }
  return i[r(-888, "I5ZJ") + "ge"] = e, i;
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return we(C - 571, c);
  }
  function e(s, c, d, g, C) {
    return we(d - -829, c);
  }
  function n(s, c, d, g, C) {
    return we(d - -91, c);
  }
  function r(s, c, d, g, C) {
    return we(c - -463, d);
  }
  function i(s, c, d, g, C) {
    return we(c - -44, C);
  }
  const a = x();
  for (; ; )
    try {
      if (parseInt(r(-140, -133, "ba8d", -129, -124)) / 1 * (-parseInt(r(-165, -147, "cz(2", -161, -141)) / 2) + -parseInt(t(894, "14Bo", 882, 887, 888)) / 3 * (-parseInt(t(906, "1THB", 900, 921, 907)) / 4) + -parseInt(r(-130, -141, "h)j3", -142, -125)) / 5 * (parseInt(t(889, "99Ur", 887, 895, 892)) / 6) + parseInt(t(884, "iKNN", 872, 892, 890)) / 7 * (parseInt(i(292, 280, 276, 297, "93G4")) / 8) + -parseInt(n(254, "&o4e", 249, 260, 254)) / 9 + -parseInt(r(-161, -151, "e9t&", -155, -169)) / 10 * (parseInt(t(894, "lyXK", 912, 913, 896)) / 11) + -parseInt(n(209, "rcwq", 227, 226, 242)) / 12 * (-parseInt(e(-512, "l%2O", -496, -493, -477)) / 13) === o) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Zx, 407054 * 1 + -311 * -4691 + -6 * 156922);
async function Jl(x) {
  const o = await window[i(893, 888, "Ouwg", 879) + "o"][i(892, 877, "z@[C", 887) + "e"][e("e9t&", 1087) + "t"](r(550, 539, "42lX"), x);
  function t(a, s, c, d, g) {
    return we(g - 61, a);
  }
  function e(a, s, c, d, g) {
    return we(s - 742, a);
  }
  function n(a, s, c, d, g) {
    return we(g - 926, d);
  }
  function r(a, s, c, d, g) {
    return we(a - 204, c);
  }
  function i(a, s, c, d, g) {
    return we(d - 564, c);
  }
  return Array[e("^#2a", 1069)](new Uint8Array(o))[t("iR6l", 417, 412, 390, 404)]((a) => a[e("z@j1", 1056) + r(541, 525, "e9t&")](-1057 + 29 * 37)[n(1275, 1279, 1278, "Mo^$", 1273) + n(1231, 1235, 1260, "Kqvu", 1246)](-5097 * -1 + -1 * 3397 + -6 * 283, "0"))[n(1281, 1275, 1259, "99Ur", 1268)]("");
}
function we(x, o) {
  const t = Zx();
  return we = function(e, n) {
    e = e - (7442 + -310 * 23);
    let r = t[e];
    if (we.uswFpG === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", p = "";
        for (let b = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = b % 4 ? A * 64 + u : u, b++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          u = C.indexOf(u);
        for (let b = 0, A = l.length; b < A; b++)
          p += "%" + ("00" + l.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let l = [], p = 0, b, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          p = (p + l[u] + C.charCodeAt(u % C.length)) % 256, b = l[u], l[u] = l[p], l[p] = b;
        u = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, p = (p + l[u]) % 256, b = l[u], l[u] = l[p], l[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[p]) % 256]);
        return A;
      };
      we.HaVOrA = d, x = arguments, we.uswFpG = !0;
    }
    const a = t[-228 + -22 * -88 + -1708], s = e + a, c = x[s];
    return c ? r = c : (we.OQBHxq === void 0 && (we.OQBHxq = !0), r = we.HaVOrA(r, n), x[s] = r), r;
  }, we(x, o);
}
function Zx() {
  const x = ["W4THWR8pvG", "WQpcGCoPWQdcLWddRbRdHCkEW78j", "WQFcPmkxWOeYW5a2W6BcNCkyW7JdT8oa", "WQWVtaldG8oynf4", "cHONyW", "W6CjqG1+WPqdW6/dNeisyNi", "cmoPWOHax8k9FL/cNWWuWOa", "WPvPW4f8fmk/W6tdNq", "tmoRW6azdtfeuG", "kWijqSoab8kuEmkNeeG", "Fmo0W4pdOSoTvmkAWOm", "WQJdR8oyWRldPSoImSktAq", "W7VcSaddVmkcWPdcUSoEW5bOx3ZdQIm", "WRqwrCkGW4RcT2VdSmkz", "be/dJW", "i1ZcLCkPW4i7WRj+W4y", "WRXnW57cHmo1WQ5ugq", "iGlcGZG5u0pcNmoOgeddQmky", "t8oTW5ascYPUzG", "W7RdNNNdMa", "WRXBaW", "c8oUWODfwCk9qhZcMJi8WQ8", "cuJdJW7dPq", "W6zqWRFcQXi", "tSkUWRyWjq", "pc/cLmksW65dfCkeCeG", "xHhdSa7dSHbPsa", "fMbLmZZdP3rcW5CPW7CnqW", "W6y/WQpdHmkC", "mL5Ga0K", "WQGUjf/cKCoad0mGwGK", "Egm1pW7dUK3cGCo2W48", "W5jDiSkaWQlcPaldOW03FMNcTCoj", "WQZdL8o/zCo0tCogdSoN", "W6JdHwy", "WQtcIxldV8knA8kWrq", "W60BwCkTW5apWP/cOxTFBCoH"];
  return Zx = function() {
    return x;
  }, Zx();
}
function Rx() {
  var x = ["W5iZW5qtbSkuWPFcImk2W6tcKCk8", "WOqnaCkyvSkxbmkuW6OZWObz", "q03dNmoeWORcP8oWAN4DsW", "e1tcVHDAW6nmbHWLzSkg", "WQdcRCo+W43cPmoPa2RdIfxcSSkqW6C", "W7ddUmo0WRH/W4VdHG", "WRRcM8kMWOrQuCksoSoFvCoFWROX", "WQtcNMBcPhScp8oCWOKpFa18cq", "WRxdHahdMCkniwXlW7NdMLddGLq", "W7nPW4SnWOtdM8oR", "et7dU3ZcP8khWQBcMfddTfGr", "WP1kW7TGWQGmk8oQmmkOBCkZtq", "ttFcP2avWOZdOa", "FmomACoBcdyAxqldISkI", "W5ScW6JdVCoAhXi", "p0znW5JdLmoKWObCrZlcHq3cQW", "ed9lsmkTW40bqh0JdSoDWRK", "W7yxWRDOW7VcQ8k5smkkW4tdVbhdNf8"];
  return Rx = function() {
    return x;
  }, Rx();
}
function $e(x, o) {
  var t = Rx();
  return $e = function(e, n) {
    e = e - (-1 * 6039 + -68 * -13 + -1 * -5310);
    var r = t[e];
    if ($e.DnzfeP === void 0) {
      var i = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", p = "", b = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = b % 4 ? A * 64 + u : u, b++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          u = C.indexOf(u);
        for (var Z = 0, Y = l.length; Z < Y; Z++)
          p += "%" + ("00" + l.charCodeAt(Z).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, C) {
        var l = [], p = 0, b, A = "";
        g = i(g);
        var u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          p = (p + l[u] + C.charCodeAt(u % C.length)) % 256, b = l[u], l[u] = l[p], l[p] = b;
        u = 0, p = 0;
        for (var v = 0; v < g.length; v++)
          u = (u + 1) % 256, p = (p + l[u]) % 256, b = l[u], l[u] = l[p], l[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[p]) % 256]);
        return A;
      };
      $e.TeCiez = a, x = arguments, $e.DnzfeP = !0;
    }
    var s = t[-1247 * -1 + -4679 + 3432], c = e + s, d = x[c];
    return d ? r = d : ($e.yBzIvi === void 0 && ($e.yBzIvi = !0), r = $e.TeCiez(r, n), x[c] = r), r;
  }, $e(x, o);
}
(function(x, o) {
  function t(c, d, g, C, l) {
    return $e(l - 45, d);
  }
  function e(c, d, g, C, l) {
    return $e(c - 794, l);
  }
  function n(c, d, g, C, l) {
    return $e(c - 43, C);
  }
  function r(c, d, g, C, l) {
    return $e(c - 550, g);
  }
  var i = x();
  function a(c, d, g, C, l) {
    return $e(l - -462, d);
  }
  for (; ; )
    try {
      var s = -parseInt(t(224, "x&Z&", 214, 213, 216)) / 1 + parseInt(t(222, "*G4*", 212, 224, 217)) / 2 + parseInt(n(198, 204, 197, "hAh0", 190)) / 3 * (-parseInt(t(203, "Y^k8", 210, 207, 212)) / 4) + -parseInt(a(-307, "OU*W", -299, -299, -305)) / 5 * (parseInt(t(206, "mZAu", 218, 211, 210)) / 6) + -parseInt(r(714, 720, "!MgM", 721, 723)) / 7 + -parseInt(t(195, "DM4u", 202, 207, 204)) / 8 + parseInt(e(954, 958, 950, 948, "X(e8")) / 9;
      if (s === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Rx, -307045 + 18 * 35528);
class Ul {
  constructor() {
    J(this, "samVersion", null);
    J(this, "isDetectorInitialized", !1);
    J(this, "isInCandidateSelection", !1);
    J(this, "lastImage", null);
    J(this, "bestImage", null);
    J(this, "detectionRecord", []);
    J(this, "candidateSelectionImages", []);
    J(this, "thresholds", null);
    J(this, "acceleration", null);
    J(this, "imagesWithTimestampForDuplicateDetection", new Us(Hu));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await Dl() ? da.SIMD : da.NO_SIMD;
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
    return o === Vu;
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
    const e = o.length / Pu, n = e / (1 * 6901 + 5 * 337 + -37 * 232), r = o.length / (4006 + 3506 * -1 + 6 * -83), i = await Jl(o.slice(r - n, r + n)), a = {};
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
    var a = "./this.program", s = !(-1308 * 3 + -8503 * -1 + -42 * 109), c = !(5 * -1915 + -2863 + -7 * -1777);
    s = typeof window == "object", c = typeof importScripts == "function";
    var d = "", g;
    (s || c) && (c ? d = self.location.href : document.currentScript && (d = document.currentScript.src), x && (d = x), 3771 + 3 * 282 + 1539 * -3 !== d.indexOf("blob:") ? d = d.substr(-5890 + -2945 * -2, d.lastIndexOf("/") + (235 * -25 + -2 * -2633 + 1 * 610)) : d = "", c && (g = function(I) {
      var f = new XMLHttpRequest();
      return f.open("GET", I, !(3394 + 3325 * 1 + -6718)), f.responseType = "arraybuffer", f.send(null), new Uint8Array(f.response);
    }));
    var C = t.printErr || console.warn.bind(console);
    for (i in r) r.hasOwnProperty(i) && (t[i] = r[i]);
    r = null, t.thisProgram && (a = t.thisProgram);
    var l;
    t.wasmBinary && (l = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && xt("no native wasm support detected");
    var p, b = !(-45 * 74 + 3977 + -646);
    function A(I) {
      I || xt("Assertion failed: undefined");
    }
    var u = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (843 * 1 + 7 * -277 + 1096);
    function v(I, f, m) {
      var y = le;
      if (0 < m) {
        m = f + m - 1;
        for (var w = 0; w < I.length; ++w) {
          var S = I.charCodeAt(w);
          if (2752 * 1 + -17782 + 70326 <= S && 126143 + -400 * 172 >= S) {
            var G = I.charCodeAt(++w);
            S = 65536 + ((S & -1 * -3583 + -5843 * -1 + -8403 * 1) << -4827 * 2 + 2019 + 7645) | G & 369 + -3258 * -3 + -9120;
          }
          if (-1 * -6999 + 1 * 6007 + -4293 * 3 >= S) {
            if (f >= m) break;
            y[f++] = S;
          } else {
            if (-5923 + 3 * 1761 + 2687 >= S) {
              if (f + (-3478 + -4362 * -1 + -883 * 1) >= m) break;
              y[f++] = 413 * -3 + -4 * 1048 + -5623 * -1 | S >> -4183 + 1 * 2816 + 1373;
            } else {
              if (100641 + -23 * -1718 + -5740 * 13 >= S) {
                if (f + (133 * 9 + -2 * 1789 + 2383) >= m) break;
                y[f++] = 224 | S >> -8504 + 541 * -11 + 14467;
              } else {
                if (f + (-619 * 5 + -9605 + 12703 * 1) >= m) break;
                y[f++] = 18580 + -1834 * 10 | S >> -5218 + -1 * -4795 + -3 * -147, y[f++] = -1514 + -572 * -9 + -3506 | S >> 389 * -17 + -6548 + 1 * 13173 & 2 * -2689 + -47 * 184 + 14089;
              }
              y[f++] = 128 | S >> 3788 * -1 + -7880 * -1 + -227 * 18 & -314 * -13 + 749 + -4768;
            }
            y[f++] = 128 | S & 63;
          }
        }
        y[f] = -7386 * -1 + -9 * -115 + 1 * -8421;
      }
    }
    var Z = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (35 * -3 + -2593 + 2698);
    function Y(I, f) {
      for (var m = I >> 1, y = m + f / (1 * -4979 + -5452 + -10433 * -1); !(m >= y) && gt[m]; ) ++m;
      if (m <<= -11768 + -11769 * -1, 7838 * -1 + 5090 * 1 + -695 * -4 < m - I && Z) return Z.decode(le.subarray(I, m));
      for (m = 1058 + -23 * 46, y = ""; ; ) {
        var w = Ze[I + 2 * m >> 1];
        if (3814 + -3 * -797 + -6205 == w || m == f / (-823 * -2 + 8453 + 10097 * -1)) return y;
        ++m, y += String.fromCharCode(w);
      }
    }
    function j(I, f, m) {
      if (void (6854 + 3 * 2402 + -14060) === m && (m = -54599 * -55113 + -193 * 743592 + -179529446 * 4), 13079 + -4359 * 3 > m) return 1 * 4607 + 764 + -5371;
      m -= 5311 + -2 * 1151 + 1 * -3007;
      var y = f;
      m = m < (7855 * -1 + 5502 + 157 * 15) * I.length ? m / 2 : I.length;
      for (var w = -5377 + 19 * 283; w < m; ++w) Ze[f >> -77 * -18 + -1 * -8733 + -10118] = I.charCodeAt(w), f += 2562 + 932 * -9 + 94 * 62;
      return Ze[f >> -1 * -4409 + 164 * 58 + -13920] = -313 * -17 + -6959 + 1638, f - y;
    }
    function F(I) {
      return (-10 * -36 + -6859 + -591 * -11) * I.length;
    }
    function O(I, f) {
      for (var m = 9514 + -3607 * -2 + 2788 * -6, y = ""; !(m >= f / (-1479 + 1 * 1483)); ) {
        var w = ie[I + 4 * m >> 2];
        if (w == 0) break;
        ++m, -24178 * -3 + 329 * 227 + -81681 <= w ? (w -= 118 * 509 + -95204 + -142 * -709, y += String.fromCharCode(-12652 * 3 + -109834 + -949 * -214 | w >> -3449 * -2 + -924 * 8 + 504, -97053 + 1 * 8274 + 145099 | w & -30 * -241 + -957 * -9 + -78 * 190)) : y += String.fromCharCode(w);
      }
      return y;
    }
    function M(I, f, m) {
      if (void (2771 * -1 + 788 + -1983 * -1) === m && (m = -4109487417 * 1 + -992747562 + -557542 * -13003), 1889 * 5 + -8909 + -532 > m) return 12858 + -3 * 4286;
      var y = f;
      m = y + m - (5 * 1433 + -2119 * -1 + 116 * -80);
      for (var w = 0; w < I.length; ++w) {
        var S = I.charCodeAt(w);
        if (68509 + -6 * -7443 + -57871 <= S && 2 * 17723 + 64607 + -42710 >= S) {
          var G = I.charCodeAt(++w);
          S = -1 * -37342 + -43603 + -1 * -71797 + ((S & 8 * 214 + -2153 + -8 * -183) << 7601 + 1 * 2819 + 2082 * -5) | G & 226 * -32 + 201 * 19 + -2 * -2218;
        }
        if (ie[f >> -4994 + -2 * -2498] = S, f += 4, f + (1 * 7393 + 1 * -4781 + -1304 * 2) > m) break;
      }
      return ie[f >> -1164 + 53 * 22] = -8087 + 1 * 8087, f - y;
    }
    function ye(I) {
      for (var f = -9 * 274 + 4130 + 1 * -1664, m = -123 * -52 + 4515 + 1 * -10911; m < I.length; ++m) {
        var y = I.charCodeAt(m);
        -102523 * 1 + 2 * -48983 + 255785 <= y && -1 * -111820 + 34172 + -88649 >= y && ++m, f += 1 * 8539 + -1483 + -7052;
      }
      return f;
    }
    var Q, ue, le, Ze, gt, ie, Re, Ye, nt;
    function Fe(I) {
      Q = I, t.HEAP8 = ue = new Int8Array(I), t.HEAP16 = Ze = new Int16Array(I), t.HEAP32 = ie = new Int32Array(I), t.HEAPU8 = le = new Uint8Array(I), t.HEAPU16 = gt = new Uint16Array(I), t.HEAPU32 = Re = new Uint32Array(I), t.HEAPF32 = Ye = new Float32Array(I), t.HEAPF64 = nt = new Float64Array(I);
    }
    var Ce = t.INITIAL_MEMORY || -39 * 405933 + -18324524 + -50933127 * -1, Te = {};
    Te.initial = Ce / (82939 + -292 * -22 + -23827), Te.maximum = 32768, t.wasmMemory ? p = t.wasmMemory : p = new WebAssembly.Memory(Te), p && (Q = p.buffer), Ce = Q.byteLength, Fe(Q);
    var Xe = [], pe = [], Le = [], je = [];
    function I0() {
      var I = t.preRun.shift();
      Xe.unshift(I);
    }
    var Ue = 8321 + -283 * 13 + -4642, pt = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function xt(I) {
      throw t.onAbort && t.onAbort(I), C(I), b = !0, I = new WebAssembly.RuntimeError("abort(" + I + "). Build with -s ASSERTIONS=1 for more info."), n(I), I;
    }
    function Jt(I) {
      var f = dt;
      return String.prototype.startsWith ? f.startsWith(I) : -113 * 59 + 2 * -1433 + 9533 === f.indexOf(I);
    }
    function ht() {
      return Jt("data:application/octet-stream;base64,");
    }
    var dt = "sam.wasm";
    if (!ht()) {
      var Ut = dt;
      dt = t.locateFile ? t.locateFile(Ut, d) : d + Ut;
    }
    function ut() {
      try {
        if (l) return new Uint8Array(l);
        if (g) return g(dt);
        throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        xt(I);
      }
    }
    function Kc() {
      var I = {};
      return I.credentials = "same-origin", l || !s && !c || typeof fetch != "function" || Jt("file://") ? Promise.resolve().then(ut) : fetch(dt, I).then(function(f) {
        if (!f.ok) throw "failed to load wasm binary file at '" + dt + "'";
        return f.arrayBuffer();
      }).catch(function() {
        return ut();
      });
    }
    function On(I) {
      for (; 8e3 + 3323 * 2 + -14646 < I.length; ) {
        var f = I.shift();
        if (typeof f == "function") f(t);
        else {
          var m = f.Ba;
          typeof m == "number" ? void (-8221 * -1 + 6890 + 23 * -657) === f.ta ? no("v", m)() : no("vi", m)(f.ta) : m(void (-6996 + 1093 * 2 + 4810) === f.ta ? null : f.ta);
        }
      }
    }
    function no(I, f) {
      var m = [];
      return function() {
        m.length = arguments.length;
        for (var y = -3645 + 45 * 81; y < arguments.length; y++) m[y] = arguments[y];
        return m && m.length ? t["dynCall_" + I].apply(null, [f].concat(m)) : t["dynCall_" + I].call(null, f);
      };
    }
    function Pc(I) {
      this.da = I - (-3 * 311 + -9363 + 2 * 5156), this.Oa = function(f) {
        ie[this.da + (-2109 + 2117 * 1) >> -9309 + -4651 * 1 + 2 * 6981] = f;
      }, this.La = function(f) {
        ie[this.da + (-4 * 960 + 1130 * -5 + 65 * 146) >> -1 * -4628 + 2 * 4585 + -13796] = f;
      }, this.Ma = function() {
        ie[this.da + (-205 * 19 + -1970 + 5869) >> -47 * 97 + 6609 + -2048] = 1 * -6043 + -5243 * -1 + 10 * 80;
      }, this.Ka = function() {
        ue[this.da + (-1 * 6268 + -4671 + -10951 * -1) >> 0] = 0;
      }, this.Na = function() {
        ue[this.da + (269 * -29 + -8819 + 16633) >> -1 * -657 + -389 * -19 + -8048] = 4319 + 1 * -4319;
      }, this.Fa = function(f, m) {
        this.Oa(f), this.La(m), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Hn() {
      return -495 * 11 + 1223 * -4 + 10337 < Hn.xa;
    }
    function xo(I) {
      switch (I) {
        case 8918 + 2 * 2764 + -14445:
          return 0;
        case 313 * -2 + -1 * 653 + -427 * -3:
          return -6485 * 1 + 4475 * -1 + 97 * 113;
        case -5111 * -1 + -4118 * -1 + -123 * 75:
          return 4 * -133 + 792 + -3 * 86;
        case 8674 * 1 + -2077 + -6589:
          return 463 * -9 + -2709 + 6879;
        default:
          throw new TypeError("Unknown type size: " + I);
      }
    }
    var ei = void (-6639 * -1 + 1 * -2590 + 1 * -4049);
    function Me(I) {
      for (var f = ""; le[I]; ) f += ei[le[I++]];
      return f;
    }
    var f0 = {}, _t = {}, Zn = {};
    function oo(I) {
      if (void (4496 * 2 + 5300 + -14292) === I) return "_unknown";
      I = I.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = I.charCodeAt(-16895 + 3379 * 5);
      return 4 * -997 + 585 + 3451 <= f && -131 * -3 + -1 * -4451 + -4787 >= f ? "_" + I : I;
    }
    function ro(I, f) {
      return I = oo(I), new Function("body", "return function " + I + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(f);
    }
    function io(I) {
      var f = Error, m = ro(I, function(y) {
        this.name = I, this.message = y, y = Error(y).stack, void (8 * -199 + 6198 + -4606) !== y && (this.stack = this.toString() + `
` + y.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return m.prototype = Object.create(f.prototype), m.prototype.constructor = m, m.prototype.toString = function() {
        return void (7667 + -14 * -538 + -1 * 15199) === this.message ? this.name : this.name + ": " + this.message;
      }, m;
    }
    var C0 = void (-1 * 3668 + 8596 + -4928);
    function X(I) {
      throw new C0(I);
    }
    var ti = void (-333 * 23 + 4897 + -2762 * -1);
    function Rn(I) {
      throw new ti(I);
    }
    function p0(I, f, m) {
      function y(k) {
        k = m(k), k.length !== I.length && Rn("Mismatched type converter count");
        for (var R = -2066 * 1 + -358 + 2424; R < I.length; ++R) wt(I[R], k[R]);
      }
      I.forEach(function(k) {
        Zn[k] = f;
      });
      var w = Array(f.length), S = [], G = -524 * 1 + 2760 + 1 * -2236;
      f.forEach(function(k, R) {
        _t.hasOwnProperty(k) ? w[R] = _t[k] : (S.push(k), f0.hasOwnProperty(k) || (f0[k] = []), f0[k].push(function() {
          w[R] = _t[k], ++G, G === S.length && y(w);
        }));
      }), -10 * -641 + 1854 + -4132 * 2 === S.length && y(w);
    }
    function wt(I, f, m) {
      if (m = m || {}, !("argPackAdvance" in f)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var y = f.name;
      if (I || X('type "' + y + '" must have a positive integer typeid pointer'), _t.hasOwnProperty(I)) {
        if (m.Ea) return;
        X("Cannot register type '" + y + "' twice");
      }
      _t[I] = f, delete Zn[I], f0.hasOwnProperty(I) && (f = f0[I], delete f0[I], f.forEach(function(w) {
        w();
      }));
    }
    function Vc(I) {
      var f = {};
      return f.count = I.count, f.oa = I.oa, f.pa = I.pa, f.da = I.da, f.fa = I.fa, f.ga = I.ga, f.ha = I.ha, f;
    }
    function ao(I) {
      X(I.A.fa.ea.name + " instance already deleted");
    }
    var so = !(45 * -77 + 9341 + -5875);
    function ni() {
    }
    function xi(I) {
      --I.count.value, -55 * -39 + -1997 * -2 + -6139 === I.count.value && (I.ga ? I.ha.na(I.ga) : I.fa.ea.na(I.da));
    }
    function X0(I) {
      return typeof FinalizationGroup > "u" ? (X0 = function(f) {
        return f;
      }, I) : (so = new FinalizationGroup(function(f) {
        for (var m = f.next(); !m.done; m = f.next()) m = m.value, m.da ? xi(m) : console.warn("object already deleted: " + m.da);
      }), X0 = function(f) {
        return so.register(f, f.A, f.A), f;
      }, ni = function(f) {
        so.unregister(f.A);
      }, X0(I));
    }
    var j0 = void (3606 + -6 * 601), M0 = [];
    function co() {
      for (; M0.length; ) {
        var I = M0.pop();
        I.A.oa = !(5705 + -1464 * 1 + -4240), I.delete();
      }
    }
    function Vt() {
    }
    var oi = {};
    function Tc(I, f) {
      var m = t;
      if (void (-4551 + 1842 * 1 + 2709) === m[I].ja) {
        var y = m[I];
        m[I] = function() {
          return m[I].ja.hasOwnProperty(arguments.length) || X("Function '" + f + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + m[I].ja + ")!"), m[I].ja[arguments.length].apply(this, arguments);
        }, m[I].ja = [], m[I].ja[y.ya] = y;
      }
    }
    function ri(I, f, m) {
      t.hasOwnProperty(I) ? ((m === void 0 || void (51 * 113 + -455 * 7 + -2578) !== t[I].ja && void (1 * 7331 + 3221 * 2 + -13773 * 1) !== t[I].ja[m]) && X("Cannot register public name '" + I + "' twice"), Tc(I, I), t.hasOwnProperty(m) && X("Cannot register multiple overloads of a function with the same number of arguments (" + m + ")!"), t[I].ja[m] = f) : (t[I] = f, void (-2897 + -12 * -449 + 47 * -53) !== m && (t[I].Ra = m));
    }
    function Lc(I, f, m, y, w, S, G, k) {
      this.name = I, this.constructor = f, this.ma = m, this.na = y, this.ia = w, this.Ca = S, this.qa = G, this.Aa = k;
    }
    function Kn(I, f, m) {
      for (; f !== m; ) f.qa || X("Expected null or instance of " + m.name + ", got an instance of " + f.name), I = f.qa(I), f = f.ia;
      return I;
    }
    function Nc(I, f) {
      return f === null ? (this.ua && X("null is not a valid " + this.name), 0) : (f.A || X('Cannot pass "' + m0(f) + '" as a ' + this.name), f.A.da || X("Cannot pass deleted object as a pointer of type " + this.name), Kn(f.A.da, f.A.fa.ea, this.ea));
    }
    function Dc(I, f) {
      if (f === null) {
        if (this.ua && X("null is not a valid " + this.name), this.sa) {
          var m = this.Ha();
          return I !== null && I.push(this.na, m), m;
        }
        return -8693 + 1558 * 5 + 903;
      }
      if (f.A || X('Cannot pass "' + m0(f) + '" as a ' + this.name), f.A.da || X("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && f.A.fa.ra && X("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name), m = Kn(f.A.da, f.A.fa.ea, this.ea), this.sa) switch (void (-551 * -13 + 2117 * -4 + 1305) === f.A.ga && X("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case 8756 + 34 * 71 + 1117 * -10:
          f.A.ha === this ? m = f.A.ga : X("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name);
          break;
        case 8091 + -61 * -19 + 3083 * -3:
          m = f.A.ga;
          break;
        case 7227 + 85 * -85:
          if (f.A.ha === this) m = f.A.ga;
          else {
            var y = f.clone();
            m = this.Ia(m, h0(function() {
              y.delete();
            })), I !== null && I.push(this.na, m);
          }
          break;
        default:
          X("Unsupporting sharing policy");
      }
      return m;
    }
    function Ec(I, f) {
      return f === null ? (this.ua && X("null is not a valid " + this.name), -800 + -1244 * -5 + -4 * 1355) : (f.A || X('Cannot pass "' + m0(f) + '" as a ' + this.name), f.A.da || X("Cannot pass deleted object as a pointer of type " + this.name), f.A.fa.ra && X("Cannot convert argument of type " + f.A.fa.name + " to parameter type " + this.name), Kn(f.A.da, f.A.fa.ea, this.ea));
    }
    function Pn(I) {
      return this.fromWireType(Re[I >> -1 * -7631 + -523 + -22 * 323]);
    }
    function ii(I, f, m) {
      return f === m ? I : void (-113 * -45 + -75 * 84 + -3 * -405) === m.ia ? null : (I = ii(I, f, m.ia), I === null ? null : m.Aa(I));
    }
    var J0 = {};
    function Yc(I, f) {
      for (void (-7630 + 9 * -943 + 227 * 71) === f && X("ptr should not be undefined"); I.ia; ) f = I.qa(f), I = I.ia;
      return J0[f];
    }
    function Vn(I, f) {
      f.fa && f.da || Rn("makeClassHandle requires ptr and ptrType"), !!f.ha != !!f.ga && Rn("Both smartPtrType and smartPtr must be specified");
      var m = {};
      m.value = 1, f.count = m;
      var y = {};
      y.value = f;
      var w = {};
      return w.A = y, X0(Object.create(I, w));
    }
    function St(I, f, m, y) {
      this.name = I, this.ea = f, this.ua = m, this.ra = y, this.sa = !(1 * -5861 + -2 * -1303 + 814 * 4), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (717 + 789 * -6 + 13 * 309), void (201 + -201 * 1) !== f.ia ? this.toWireType = Dc : (this.toWireType = y ? Nc : Ec, this.ka = null);
    }
    function ai(I, f, m) {
      t.hasOwnProperty(I) || Rn("Replacing nonexistant public symbol"), void (-9357 + -6019 * 1 + -31 * -496) !== t[I].ja && void (1076 * 5 + 269 * -31 + 2959) !== m ? t[I].ja[m] = f : (t[I] = f, t[I].ya = m);
    }
    function Tt(I, f) {
      I = Me(I);
      var m = no(I, f);
      return typeof m != "function" && X("unknown function pointer with signature " + I + ": " + f), m;
    }
    var si = void (-1 * -3242 + -8227 + 4985);
    function ci(I) {
      I = Wi(I);
      var f = Me(I);
      return Bt(I), f;
    }
    function U0(I, f) {
      function m(S) {
        w[S] || _t[S] || (Zn[S] ? Zn[S].forEach(m) : (y.push(S), w[S] = !(-5066 + 307 * -19 + 10899)));
      }
      var y = [], w = {};
      throw f.forEach(m), new si(I + ": " + y.map(ci).join([", "]));
    }
    function gi(I, f) {
      for (var m = [], y = -4021 * -1 + -1 * 5651 + 1630; y < I; y++) m.push(ie[(f >> -2 * -2522 + -30 * 79 + -2672) + y]);
      return m;
    }
    function Tn(I) {
      for (; I.length; ) {
        var f = I.pop();
        I.pop()(f);
      }
    }
    function di(I, f, m) {
      return I instanceof Object || X(m + ' with invalid "this": ' + I), I instanceof f.ea.constructor || X(m + ' incompatible with "this" of type ' + I.constructor.name), I.A.da || X("cannot call emscripten binding method " + m + " on deleted object"), Kn(I.A.da, I.A.fa.ea, f.ea);
    }
    var ui = {};
    ui.value = void (-391 * -9 + 6948 + -10467);
    var li = {};
    li.value = null;
    var Ii = {};
    Ii.value = !(-4373 + -4373 * -1);
    var fi = {};
    fi.value = !(-1596 + 1933 * -2 + 5463);
    var go = [], ot = [{}, ui, li, Ii, fi];
    function uo(I) {
      4 < I && 5 * 1727 + 4 * -2206 + 189 === --ot[I].Ja && (ot[I] = void (-756 + -252 * -3), go.push(I));
    }
    function h0(I) {
      switch (I) {
        case void (-271 * 1 + -4134 + -1 * -4405):
          return -3908 + -11 * -69 + 3150;
        case null:
          return -325 * -17 + 5236 + -10759;
        case !0:
          return 2851 * -1 + -97 * -10 + 1884;
        case !(-2182 * -3 + 5108 + -11653):
          return 4;
        default:
          var f = go.length ? go.pop() : ot.length, m = {};
          return m.Ja = 1, m.value = I, ot[f] = m, f;
      }
    }
    function m0(I) {
      if (I === null) return "null";
      var f = typeof I;
      return f === "object" || f === "array" || f === "function" ? I.toString() : "" + I;
    }
    function Fc(I, f) {
      switch (f) {
        case 162 * -60 + -3200 + 1 * 12922:
          return function(m) {
            return this.fromWireType(Ye[m >> 1 * 5994 + -6068 + 76]);
          };
        case -2749 * -1 + -9070 + 6324:
          return function(m) {
            return this.fromWireType(nt[m >> 11 * -826 + -9917 * 1 + -442 * -43]);
          };
        default:
          throw new TypeError("Unknown float type: " + I);
      }
    }
    function Xc(I) {
      var f = Function;
      if (!(f instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof f + " which is not a function");
      var m = ro(f.name || "unknownFunctionName", function() {
      });
      return m.prototype = f.prototype, m = new m(), I = f.apply(m, I), I instanceof Object ? I : m;
    }
    function jc(I, f, m) {
      switch (f) {
        case -57 * 94 + 4093 + 1265:
          return m ? function(y) {
            return ue[y];
          } : function(y) {
            return le[y];
          };
        case 8092 + -261 * 31:
          return m ? function(y) {
            return Ze[y >> -2801 * 3 + -597 * -2 + 7210];
          } : function(y) {
            return gt[y >> -1 * -5653 + 2279 + 77 * -103];
          };
        case -1249 * 8 + -8800 + 18794:
          return m ? function(y) {
            return ie[y >> 2];
          } : function(y) {
            return Re[y >> 5370 * 1 + 7791 + 1 * -13159];
          };
        default:
          throw new TypeError("Unknown integer type: " + I);
      }
    }
    function lo(I) {
      return I || X("Cannot use deleted val. handle = " + I), ot[I].value;
    }
    function Ci(I, f) {
      var m = _t[I];
      return void (3139 * 3 + 1314 * 7 + -18615) === m && X(f + " has unknown type " + ci(I)), m;
    }
    var Mc = {}, pi = {};
    function hi() {
      if (!Io) {
        var I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: a || "./this.program" }, f;
        for (f in pi) I[f] = pi[f];
        var m = [];
        for (f in I) m.push(f + "=" + I[f]);
        Io = m;
      }
      return Io;
    }
    var Io, mi = [];
    function bi(I) {
      var f = {}, m;
      for (m in I) (function(y) {
        var w = I[y];
        f[y] = typeof w == "function" ? function() {
          mi.push(y);
          try {
            return w.apply(null, arguments);
          } finally {
            if (b) return;
            var S = mi.pop();
            A(S === y);
          }
        } : w;
      })(m);
      return f;
    }
    for (var Ai = Array(15 * 515 + -44 * 150 + 79 * -11), Ln = 0; -6253 + -2102 * 4 + 1 * 14917 > Ln; ++Ln) Ai[Ln] = String.fromCharCode(Ln);
    ei = Ai, C0 = t.BindingError = io("BindingError"), ti = t.InternalError = io("InternalError"), Vt.prototype.isAliasOf = function(I) {
      if (!(this instanceof Vt && I instanceof Vt)) return !(7156 + -1 * -1437 + -8592);
      var f = this.A.fa.ea, m = this.A.da, y = I.A.fa.ea;
      for (I = I.A.da; f.ia; ) m = f.qa(m), f = f.ia;
      for (; y.ia; ) I = y.qa(I), y = y.ia;
      return f === y && m === I;
    }, Vt.prototype.clone = function() {
      if (this.A.da || ao(this), this.A.pa) return this.A.count.value += 4006 * -1 + -1 * 5788 + -653 * -15, this;
      var I = X0(Object.create(Object.getPrototypeOf(this), { A: { value: Vc(this.A) } }));
      return I.A.count.value += -1414 + -17 * -86 + -47, I.A.oa = !(-95 * -62 + -5170 + -1 * 719), I;
    }, Vt.prototype.delete = function() {
      this.A.da || ao(this), this.A.oa && !this.A.pa && X("Object already scheduled for deletion"), ni(this), xi(this.A), this.A.pa || (this.A.ga = void (-8845 + 5 * 1769), this.A.da = void (8370 + 558 * -15));
    }, Vt.prototype.isDeleted = function() {
      return !this.A.da;
    }, Vt.prototype.deleteLater = function() {
      return this.A.da || ao(this), this.A.oa && !this.A.pa && X("Object already scheduled for deletion"), M0.push(this), 281 * 2 + -6025 * -1 + -89 * 74 === M0.length && j0 && j0(co), this.A.oa = !(3902 * 1 + 1819 + -3 * 1907), this;
    }, St.prototype.Da = function(I) {
      return this.wa && (I = this.wa(I)), I;
    }, St.prototype.va = function(I) {
      this.na && this.na(I);
    }, St.prototype.argPackAdvance = -1 * -3759 + -7523 + 3772, St.prototype.readValueFromPointer = Pn, St.prototype.deleteObject = function(I) {
      I !== null && I.delete();
    }, St.prototype.fromWireType = function(I) {
      function f() {
        return this.sa ? Vn(this.ea.ma, { fa: this.Ga, da: m, ha: this, ga: I }) : Vn(this.ea.ma, { fa: this, da: I });
      }
      var m = this.Da(I);
      if (!m) return this.va(I), null;
      var y = Yc(this.ea, m);
      if (void (-4601 + 4 * -1466 + 1 * 10465) !== y)
        return 6919 + 159 * 31 + -11848 === y.A.count.value ? (y.A.da = m, y.A.ga = I, y.clone()) : (y = y.clone(), this.va(I), y);
      if (y = this.ea.Ca(m), y = oi[y], !y) return f.call(this);
      y = this.ra ? y.za : y.pointerType;
      var w = ii(m, this.ea, y.ea);
      return w === null ? f.call(this) : this.sa ? Vn(y.ea.ma, { fa: y, da: w, ha: this, ga: I }) : Vn(y.ea.ma, { fa: y, da: w });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(J0).length;
    }, t.getLiveInheritedInstances = function() {
      var I = [], f;
      for (f in J0) J0.hasOwnProperty(f) && I.push(J0[f]);
      return I;
    }, t.flushPendingDeletes = co, t.setDelayFunction = function(I) {
      j0 = I, M0.length && j0 && j0(co);
    }, si = t.UnboundTypeError = io("UnboundTypeError"), t.count_emval_handles = function() {
      for (var I = 8 * 648 + 2 * -3417 + -33 * -50, f = -131 * 22 + 2103 + 784; f < ot.length; ++f) void (-17274 + -2879 * -6) !== ot[f] && ++I;
      return I;
    }, t.get_first_emval = function() {
      for (var I = -6746 + 157 * 43; I < ot.length; ++I) if (void (283 * 31 + 3 * -2253 + -2014) !== ot[I]) return ot[I];
      return null;
    }, pe.push({ Ba: function() {
      yi();
    } });
    var Jc = { z: function(I) {
      return Nn(I + (-1 * 7537 + 9341 + -1788)) + (7 * -259 + -636 * -6 + -1987 * 1);
    }, u: function(I, f, m) {
      throw new Pc(I).Fa(f, m), "uncaught_exception" in Hn ? Hn.xa++ : Hn.xa = 1 * -2383 + -46 * -26 + -108 * -11, I;
    }, w: function(I, f, m, y, w) {
      var S = xo(m);
      f = Me(f), wt(I, { name: f, fromWireType: function(G) {
        return !!G;
      }, toWireType: function(G, k) {
        return k ? y : w;
      }, argPackAdvance: 8, readValueFromPointer: function(G) {
        if (-96 * -103 + -6 * -941 + 15533 * -1 === m) var k = ue;
        else if (841 * -11 + 9489 + -236 === m) k = Ze;
        else if (m === 4) k = ie;
        else throw new TypeError("Unknown boolean type size: " + f);
        return this.fromWireType(k[G >> S]);
      }, ka: null });
    }, h: function(I, f, m, y, w, S, G, k, R, K, P, V, $) {
      P = Me(P), S = Tt(w, S), k && (k = Tt(G, k)), K && (K = Tt(R, K)), $ = Tt(V, $);
      var he = oo(P);
      ri(he, function() {
        U0("Cannot construct " + P + " due to unbound types", [y]);
      }), p0([I, f, m], y ? [y] : [], function(T) {
        if (T = T[-4 * -1662 + -9777 + 3129], y) var mt = T.ea, Ne = mt.ma;
        else Ne = Vt.prototype;
        T = ro(he, function() {
          if (Object.getPrototypeOf(this) !== b0) throw new C0("Use 'new' to construct " + P);
          if (void (-5025 + -1 * -712 + -4313 * -1) === A0.la) throw new C0(P + " has no accessible constructor");
          var wi = A0.la[arguments.length];
          if (wi === void 0) throw new C0("Tried to invoke ctor of " + P + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(A0.la).toString() + ") parameters instead!");
          return wi.apply(this, arguments);
        });
        var _e = {};
        _e.value = T;
        var Qt = {};
        Qt.constructor = _e;
        var b0 = Object.create(Ne, Qt);
        T.prototype = b0;
        var A0 = new Lc(P, T, b0, $, mt, S, k, K);
        mt = new St(P, A0, !(2956 + 1 * -2956), !(4461 + -1 * -9499 + -4653 * 3)), Ne = new St(P + "*", A0, !(8252 + -2 * 4076 + -99), !(17634 + -17633 * 1));
        var vi = new St(P + " const*", A0, !(1153 * 5 + 423 * -7 + -2803 * 1), !(-4430 + 1753 * 2 + 924)), Co = {};
        return Co.pointerType = Ne, Co.za = vi, oi[I] = Co, ai(he, T), [mt, Ne, vi];
      });
    }, g: function(I, f, m, y, w, S) {
      A(337 * 3 + -253 * -36 + -10119 < f);
      var G = gi(f, m);
      w = Tt(y, w);
      var k = [S], R = [];
      p0([], [I], function(K) {
        K = K[157 * -17 + 5942 + -3273];
        var P = "constructor " + K.name;
        if (void (3540 + -78 * 108 + 4884) === K.ea.la && (K.ea.la = []), void (4412 * 2 + 119 * -39 + -4183) !== K.ea.la[f - (-538 * -15 + -6689 * -1 + 14758 * -1)]) throw new C0("Cannot register multiple constructors with identical number of parameters (" + (f - (-2 * 2401 + 8403 + -3600)) + ") for class '" + K.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return K.ea.la[f - (1 * 1702 + 9101 + -10802)] = function() {
          U0("Cannot construct " + K.name + " due to unbound types", G);
        }, p0([], G, function(V) {
          return K.ea.la[f - (-2207 * 1 + -8599 + 10807)] = function() {
            arguments.length !== f - (1319 * -3 + 3794 + -41 * -4) && X(P + " called with " + arguments.length + " arguments, expected " + (f - (2 * 4009 + 7897 + 146 * -109))), R.length = 0, k.length = f;
            for (var $ = 1; $ < f; ++$) k[$] = V[$].toWireType(R, arguments[$ - 1]);
            return $ = w.apply(null, k), Tn(R), V[-7211 * 1 + 7823 * -1 + 15034].fromWireType($);
          }, [];
        }), [];
      });
    }, b: function(I, f, m, y, w, S, G, k, R, K) {
      f = Me(f), w = Tt(y, w), p0([], [I], function(P) {
        P = P[0];
        var V = P.name + "." + f, $ = { get: function() {
          U0("Cannot access " + V + " due to unbound types", [m, G]);
        }, enumerable: !(867 + -1 * -7971 + 18 * -491), configurable: !(-2 * -1270 + -8137 + 5597) };
        return R ? $.set = function() {
          U0("Cannot access " + V + " due to unbound types", [m, G]);
        } : $.set = function() {
          X(V + " is a read-only property");
        }, Object.defineProperty(P.ea.ma, f, $), p0([], R ? [m, G] : [m], function(he) {
          var T = he[0], mt = { get: function() {
            var _e = di(this, P, V + " getter");
            return T.fromWireType(w(S, _e));
          }, enumerable: !(-1 * 5975 + -7781 + -3439 * -4) };
          if (R) {
            R = Tt(k, R);
            var Ne = he[7453 + 269 * 1 + -7721 * 1];
            mt.set = function(_e) {
              var Qt = di(this, P, V + " setter"), b0 = [];
              R(K, Qt, Ne.toWireType(b0, _e)), Tn(b0);
            };
          }
          return Object.defineProperty(P.ea.ma, f, mt), [];
        }), [];
      });
    }, v: function(I, f) {
      f = Me(f), wt(I, { name: f, fromWireType: function(m) {
        var y = ot[m].value;
        return uo(m), y;
      }, toWireType: function(m, y) {
        return h0(y);
      }, argPackAdvance: 8, readValueFromPointer: Pn, ka: null });
    }, m: function(I, f, m) {
      m = xo(m), f = Me(f), wt(I, { name: f, fromWireType: function(y) {
        return y;
      }, toWireType: function(y, w) {
        if (typeof w != "number" && typeof w != "boolean") throw new TypeError('Cannot convert "' + m0(w) + '" to ' + this.name);
        return w;
      }, argPackAdvance: 8, readValueFromPointer: Fc(f, m), ka: null });
    }, c: function(I, f, m, y, w, S) {
      var G = gi(f, m);
      I = Me(I), w = Tt(y, w), ri(I, function() {
        U0("Cannot call " + I + " due to unbound types", G);
      }, f - 1), p0([], G, function(k) {
        var R = I, K = I;
        k = [k[-3814 + -862 * 7 + 9848], null].concat(k.slice(1313 + -2 * 656));
        var P = w, V = k.length;
        3050 + 3048 * -1 > V && X("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var $ = k[2462 * -2 + -7075 + 300 * 40] !== null && !(-2282 * 2 + 6033 + -367 * 4), he = !(29 * 334 + 615 + 25 * -412), T = 6792 + -82 * 94 + 917; T < k.length; ++T) if (k[T] !== null && void (2285 + -5 * 457) === k[T].ka) {
          he = !(-4 * -921 + 1103 * -6 + 2934);
          break;
        }
        var mt = k[10185 + 7 * -1455].name !== "void", Ne = "", _e = "";
        for (T = 1787 * 4 + -5627 + -1521; T < V - (-3043 * -1 + 3595 + -6636); ++T) Ne += (-577 * -7 + 1 * -5783 + 1 * 1744 !== T ? ", " : "") + "arg" + T, _e += (9 * -573 + -3049 * 3 + 14304 !== T ? ", " : "") + "arg" + T + "Wired";
        K = "return function " + oo(K) + "(" + Ne + `) {
if (arguments.length !== ` + (V - (1 * 1294 + -5482 + -1 * -4190)) + `) {
throwBindingError('function ` + K + " called with ' + arguments.length + ' arguments, expected " + (V - (-1 * 3327 + -2497 * -4 + -6659)) + ` args!');
}
`, he && (K += `var destructors = [];
`);
        var Qt = he ? "destructors" : "null";
        for (Ne = "throwBindingError invoker fn runDestructors retType classParam".split(" "), P = [X, P, S, Tn, k[5 * -1486 + -1757 + 9187], k[20 + -1655 * 5 + 8256]], $ && (K += "var thisWired = classParam.toWireType(" + Qt + `, this);
`), T = 6598 + -43 * 187 + 111 * 13; T < V - (-1 * -6618 + -3499 + -3117); ++T) K += "var arg" + T + "Wired = argType" + T + ".toWireType(" + Qt + ", arg" + T + "); // " + k[T + (-376 * -18 + -1 * 4479 + -2287)].name + `
`, Ne.push("argType" + T), P.push(k[T + (-8 * 229 + -7284 + -47 * -194)]);
        if ($ && (_e = "thisWired" + (8505 + 1991 * -5 + 1450 < _e.length ? ", " : "") + _e), K += (mt ? "var rv = " : "") + "invoker(fn" + (1 * -9218 + 4179 * 1 + 5039 < _e.length ? ", " : "") + _e + `);
`, he) K += `runDestructors(destructors);
`;
        else
          for (T = $ ? -1 * 9146 + -7213 + 16360 : -6 * -545 + -115 * -4 + 8 * -466; T < k.length; ++T) V = -8068 + -1 * -8069 === T ? "thisWired" : "arg" + (T - (894 * -1 + -263 * -2 + -74 * -5)) + "Wired", k[T].ka !== null && (K += V + "_dtor(" + V + "); // " + k[T].name + `
`, Ne.push(V + "_dtor"), P.push(k[T].ka));
        return mt && (K += `var ret = retType.fromWireType(rv);
return ret;
`), Ne.push(K + `}
`), k = Xc(Ne).apply(null, P), ai(R, k, f - (41 * 10 + -101 * 53 + -16 * -309)), [];
      });
    }, e: function(I, f, m, y, w) {
      function S(K) {
        return K;
      }
      f = Me(f), -(-1451 + 2 * 726) === w && (w = 1 * 7124092367 + -741734610 * 2 + 244 * -5514983);
      var G = xo(m);
      if (y === 0) {
        var k = 32 - 8 * m;
        S = function(K) {
          return K << k >>> k;
        };
      }
      var R = -(-7691 * -1 + 7847 + -15537) != f.indexOf("unsigned");
      wt(I, { name: f, fromWireType: S, toWireType: function(K, P) {
        if (typeof P != "number" && typeof P != "boolean") throw new TypeError('Cannot convert "' + m0(P) + '" to ' + this.name);
        if (P < y || P > w) throw new TypeError('Passing a number "' + m0(P) + '" from JS side to C/C++ side to an argument of type "' + f + '", which is outside the valid range [' + y + ", " + w + "]!");
        return R ? P >>> -5509 + 7 * 787 : P | 0;
      }, argPackAdvance: 8, readValueFromPointer: jc(f, G, -859 * 7 + -6601 + 17 * 742 !== y), ka: null });
    }, d: function(I, f, m) {
      function y(k) {
        k >>= 979 + -977 * 1;
        var R = Re;
        return new w(Q, R[k + (7998 + -11 * 727)], R[k]);
      }
      var w = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][f];
      m = Me(m);
      var S = {};
      S.name = m, S.fromWireType = y, S.argPackAdvance = 8, S.readValueFromPointer = y;
      var G = {};
      G.Ea = !(6220 + 183 * -44 + 1 * 1832), wt(I, S, G);
    }, n: function(I, f) {
      f = Me(f);
      var m = f === "std::string";
      wt(I, { name: f, fromWireType: function(y) {
        var w = Re[y >> 2];
        if (m) for (var S = y + 4, G = -985 * 4 + -6756 + 10696; G <= w; ++G) {
          var k = y + 4 + G;
          if (G == w || -7070 + 1704 * 2 + 1 * 3662 == le[k]) {
            if (S) {
              var R = S, K = le, P = R + (k - S);
              for (S = R; K[S] && !(S >= P); ) ++S;
              if (-5669 * 1 + -9208 + 14893 < S - R && K.subarray && u) R = u.decode(K.subarray(R, S));
              else {
                for (P = ""; R < S; ) {
                  var V = K[R++];
                  if (V & 8692 + -692 * -1 + -9256) {
                    var $ = K[R++] & 63;
                    if (-6067 * 1 + 6953 + 694 * -1 == (V & 224)) P += String.fromCharCode((V & 7644 + 7 * -893 + 227 * -6) << 3370 + 1 * -8373 + 1 * 5009 | $);
                    else {
                      var he = K[R++] & 63;
                      V = 5641 + -1 * 5417 == (V & 240) ? (V & -114 + 389 * -13 + 5186) << 2 * 1607 + -3865 + 663 | $ << 356 * -9 + -2 * -2746 + 2282 * -1 | he : (V & -2156 + 1 * 8831 + -6668) << 233 * 42 + -6479 + -3289 | $ << 12 | he << -1 * 1775 + -4567 * -1 + -2786 | K[R++] & -9829 + -3061 * -3 + -1 * -709, -118990 + -1 * -101685 + 11 * 7531 > V ? P += String.fromCharCode(V) : (V -= 339 * -3 + -107320 + -7 * -24839, P += String.fromCharCode(19583 * 5 + 93274 + 135893 * -1 | V >> 1366 * -1 + -9462 + -2 * -5419, 56320 | V & -8343 * -1 + -6 * 934 + -286 * 6));
                    }
                  } else P += String.fromCharCode(V);
                }
                R = P;
              }
            } else R = "";
            if (void (-25 * 213 + -4863 * -1 + -14 * -33) === T) var T = R;
            else T += String.fromCharCode(13 * -341 + 8053 + 4 * -905), T += R;
            S = k + (-1109 + -222 * -5);
          }
        }
        else {
          for (T = Array(w), G = -1 * -266 + -6868 + -3301 * -2; G < w; ++G) T[G] = String.fromCharCode(le[y + 4 + G]);
          T = T.join("");
        }
        return Bt(y), T;
      }, toWireType: function(y, w) {
        w instanceof ArrayBuffer && (w = new Uint8Array(w));
        var S = typeof w == "string";
        S || w instanceof Uint8Array || w instanceof Uint8ClampedArray || w instanceof Int8Array || X("Cannot pass non-string to std::string");
        var G = (m && S ? function() {
          for (var K = -1 * -2426 + -2 * 4948 + -90 * -83, P = 1711 * 3 + -1 * 3355 + -254 * 7; P < w.length; ++P) {
            var V = w.charCodeAt(P);
            -39613 * -1 + -261 * -383 + -70 * 1204 <= V && 18099 + -1 * -23938 + 15306 >= V && (V = -1016 + 2773 * 24 + ((V & -662 * -1 + -195 + 556) << -3911 + 119 * 2 + 3683) | w.charCodeAt(++P) & -3 * 2281 + 233 * 8 + 6002), -4890 * -2 + -275 + 1563 * -6 >= V ? ++K : K = -83 * -86 + -1061 * 8 + 3397 >= V ? K + (5 * -1932 + 2020 + -2 * -3821) : 63095 + 61 * 40 >= V ? K + 3 : K + (-25 * -158 + -1 * -5793 + 9739 * -1);
          }
          return K;
        } : function() {
          return w.length;
        })(), k = Nn(4 + G + (-2 * -1334 + -4 * -1080 + 6987 * -1));
        if (Re[k >> -1 * 4020 + 311 * 6 + 2156] = G, m && S) v(w, k + (9991 + 1 * -9987), G + (-10380 + -1483 * -7));
        else if (S) for (S = -2192 + -457 * 6 + -2 * -2467; S < G; ++S) {
          var R = w.charCodeAt(S);
          255 < R && (Bt(k), X("String has UTF-16 code units that do not fit in 8 bits")), le[k + (8733 + 1 * -7897 + -64 * 13) + S] = R;
        }
        else
          for (S = -9278 + 1 * -1882 + 180 * 62; S < G; ++S) le[k + (-1943 * 1 + 5748 + -3801) + S] = w[S];
        return y !== null && y.push(Bt, k), k;
      }, argPackAdvance: 8, readValueFromPointer: Pn, ka: function(y) {
        Bt(y);
      } });
    }, j: function(I, f, m) {
      if (m = Me(m), -5 * -733 + 1717 * -3 + 1488 === f) var y = Y, w = j, S = F, G = function() {
        return gt;
      }, k = -223 * -2 + 2639 * -1 + 2194;
      else 8038 + 1 * 9005 + 1549 * -11 === f && (y = O, w = M, S = ye, G = function() {
        return Re;
      }, k = 8267 * -1 + 1437 * -5 + 7727 * 2);
      wt(I, { name: m, fromWireType: function(R) {
        for (var K = Re[R >> 1413 + -3 * -446 + -1 * 2749], P = G(), V, $ = R + (-347 * 9 + -6816 + -163 * -61), he = 0; he <= K; ++he) {
          var T = R + 4 + he * f;
          (he == K || -3456 * 2 + -5697 + -3 * -4203 == P[T >> k]) && ($ = y($, T - $), V === void 0 ? V = $ : (V += "\0", V += $), $ = T + f);
        }
        return Bt(R), V;
      }, toWireType: function(R, K) {
        typeof K != "string" && X("Cannot pass non-string to C++ string type " + m);
        var P = S(K), V = Nn(-2 * -319 + -2852 + 2218 + P + f);
        return Re[V >> 2] = P >> k, w(K, V + (-1 * -697 + 7095 + -7788), P + f), R !== null && R.push(Bt, V), V;
      }, argPackAdvance: 8, readValueFromPointer: Pn, ka: function(R) {
        Bt(R);
      } });
    }, x: function(I, f) {
      f = Me(f);
      var m = {};
      m.Qa = !0, m.name = f, m.argPackAdvance = 0, m.fromWireType = function() {
      }, m.toWireType = function() {
      }, wt(I, m);
    }, k: function(I, f, m) {
      I = lo(I), f = Ci(f, "emval::as");
      var y = [], w = h0(y);
      return ie[m >> -1 * 2249 + 4 * -719 + 5127] = w, f.toWireType(y, I);
    }, i: uo, l: function(I, f) {
      return I = lo(I), f = lo(f), h0(I[f]);
    }, p: function(I) {
      var f = Mc[I];
      return h0(void (-7722 + -2 * 397 + -2 * -4258) === f ? Me(I) : f);
    }, o: function(I) {
      Tn(ot[I].value), uo(I);
    }, y: function(I, f) {
      return I = Ci(I, "_emval_take_value"), I = I.readValueFromPointer(f), h0(I);
    }, f: function() {
      xt();
    }, q: function(I, f, m) {
      le.copyWithin(I, f, f + m);
    }, r: function(I) {
      I >>>= -1 * 4736 + 9033 + 1 * -4297;
      var f = le.length;
      if (4424706344 + -13828 * 164682 < I) return !(-1 * -967 + 2 * -2701 + -2 * -2218);
      for (var m = 4555 + -506 * 9; 5371 + -653 * -2 + -1 * 6673 >= m; m *= -6016 + -39 * -165 + -417) {
        var y = f * (1 + 0.2 / m);
        y = Math.min(y, I + (151154732 + -5073 * -739 + -14041 * 3863)), y = Math.max(-14419734 + 3 * -10575857 + 62924521, I, y), 1 * 8667 + -3178 + -499 * 11 < y % (1527 + 253 * 253) && (y += 52062 + 781 * -93 + -1 * -86107 - y % (-5 * 6067 + -119673 + -10264 * -21));
        e: {
          try {
            p.grow(Math.min(-2 * -1691068592 + 367 * -7319782 + 1451706458, y) - Q.byteLength + (-61535 + 970 * 131) >>> -72 * -30 + -7247 + 7 * 729), Fe(p.buffer);
            var w = 9776 * 1 + -3887 + 5888 * -1;
            break e;
          } catch {
          }
          w = void (57 * 101 + 1 * 7687 + -13444);
        }
        if (w) return !(-6761 + -229 * 41 + -1615 * -10);
      }
      return !1;
    }, s: function(I, f) {
      var m = 0;
      return hi().forEach(function(y, w) {
        var S = f + m;
        for (w = ie[I + 4 * w >> -9405 + 1 * -9079 + 18486 * 1] = S, S = -1 * -3115 + 812 * -10 + 55 * 91; S < y.length; ++S) ue[w++ >> 0] = y.charCodeAt(S);
        ue[w >> 83 * 2 + -477 * -1 + 643 * -1] = 8933 * 1 + 2214 + -11147, m += y.length + (703 * -11 + 4468 + -142 * -23);
      }), -8058 + -79 * -107 + -5 * 79;
    }, t: function(I, f) {
      var m = hi();
      ie[I >> 2769 * 3 + -2 * 3818 + -669] = m.length;
      var y = -2991 + 7911 * 1 + -4920;
      return m.forEach(function(w) {
        y += w.length + (518 * 2 + -8355 + 1220 * 6);
      }), ie[f >> 2] = y, -171 * -28 + 1 * -3049 + -1739;
    }, a: p };
    (function() {
      function I(G) {
        G = G.exports, G = bi(G), t.asm = G, Ue--, t.monitorRunDependencies && t.monitorRunDependencies(Ue), 4519 + 2 * -2674 + 829 == Ue && pt && (G = pt, pt = null, G());
      }
      function f(G) {
        I(G.instance);
      }
      function m(G) {
        return Kc().then(function(k) {
          return WebAssembly.instantiate(k, w);
        }).then(G, function(k) {
          C("failed to asynchronously prepare wasm: " + k), xt(k);
        });
      }
      var y = {};
      y.a = Jc;
      var w = y;
      if (Ue++, t.monitorRunDependencies && t.monitorRunDependencies(Ue), t.instantiateWasm) try {
        var S = t.instantiateWasm(w, I);
        return S = bi(S);
      } catch (G) {
        return C("Module.instantiateWasm callback failed with error: " + G), !1;
      }
      return function() {
        if (l || typeof WebAssembly.instantiateStreaming != "function" || ht() || Jt("file://") || typeof fetch != "function") return m(f);
        var G = {};
        G.credentials = "same-origin", fetch(dt, G).then(function(k) {
          return WebAssembly.instantiateStreaming(k, w).then(f, function(R) {
            return C("wasm streaming compile failed: " + R), C("falling back to ArrayBuffer instantiation"), m(f);
          });
        });
      }(), {};
    })();
    var yi = t.___wasm_call_ctors = function() {
      return (yi = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, Nn = t._malloc = function() {
      return (Nn = t._malloc = t.asm.C).apply(null, arguments);
    }, Bt = t._free = function() {
      return (Bt = t._free = t.asm.D).apply(null, arguments);
    }, Wi = t.___getTypeName = function() {
      return (Wi = t.___getTypeName = t.asm.E).apply(null, arguments);
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
    var Dn;
    pt = function I() {
      Dn || fo(), Dn || (pt = I);
    };
    function fo() {
      function I() {
        if (!Dn && (Dn = !(-9653 * -1 + -6779 + -2 * 1437), t.calledRun = !(-1 * -6048 + -8342 + 74 * 31), !b)) {
          if (On(pe), On(Le), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var f = t.postRun.shift();
            je.unshift(f);
          }
          On(je);
        }
      }
      if (!(-5176 + -5176 * -1 < Ue)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) I0();
        On(Xe), -3253 * 1 + -8923 + -1 * -12176 < Ue || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, -2608 + -1 * 9859 + 12468), I();
        }, -9583 * -1 + 1704 + -11286)) : I());
      }
    }
    if (t.run = fo, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); -5589 + -11 * 425 + -10264 * -1 < t.preInit.length; ) t.preInit.pop()();
    return fo(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const sc = Symbol("Comlink.proxy"), _l = Symbol("Comlink.endpoint"), Ql = Symbol("Comlink.releaseProxy"), Go = Symbol("Comlink.finalizer"), ux = Symbol("Comlink.thrown"), cc = (x) => typeof x == "object" && x !== null || typeof x == "function", zl = {
  canHandle: (x) => cc(x) && x[sc],
  serialize(x) {
    const { port1: o, port2: t } = new MessageChannel();
    return dc(x, o), [t, [t]];
  },
  deserialize(x) {
    return x.start(), lc(x);
  }
}, ql = {
  canHandle: (x) => cc(x) && ux in x,
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
}, gc = /* @__PURE__ */ new Map([
  ["proxy", zl],
  ["throw", ql]
]);
function $l(x, o) {
  for (const t of x)
    if (o === t || t === "*" || t instanceof RegExp && t.test(o))
      return !0;
  return !1;
}
function dc(x, o = globalThis, t = ["*"]) {
  o.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!$l(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: i, path: a } = Object.assign({ path: [] }, n.data), s = (n.data.argumentList || []).map(t0);
    let c;
    try {
      const d = a.slice(0, -1).reduce((C, l) => C[l], x), g = a.reduce((C, l) => C[l], x);
      switch (i) {
        case "GET":
          c = g;
          break;
        case "SET":
          d[a.slice(-1)[0]] = t0(n.data.value), c = !0;
          break;
        case "APPLY":
          c = g.apply(d, s);
          break;
        case "CONSTRUCT":
          {
            const C = new g(...s);
            c = r1(C);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: C, port2: l } = new MessageChannel();
            dc(x, l), c = o1(C, [C]);
          }
          break;
        case "RELEASE":
          c = void 0;
          break;
        default:
          return;
      }
    } catch (d) {
      c = { value: d, [ux]: 0 };
    }
    Promise.resolve(c).catch((d) => ({ value: d, [ux]: 0 })).then((d) => {
      const [g, C] = Vx(d);
      o.postMessage(Object.assign(Object.assign({}, g), { id: r }), C), i === "RELEASE" && (o.removeEventListener("message", e), uc(o), Go in x && typeof x[Go] == "function" && x[Go]());
    }).catch((d) => {
      const [g, C] = Vx({
        value: new TypeError("Unserializable return value"),
        [ux]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, g), { id: r }), C);
    });
  }), o.start && o.start();
}
function e1(x) {
  return x.constructor.name === "MessagePort";
}
function uc(x) {
  e1(x) && x.close();
}
function lc(x, o) {
  return Ir(x, [], o);
}
function Qn(x) {
  if (x)
    throw new Error("Proxy has been released and is not useable");
}
function Ic(x) {
  return S0(x, {
    type: "RELEASE"
  }).then(() => {
    uc(x);
  });
}
const Kx = /* @__PURE__ */ new WeakMap(), Px = "FinalizationRegistry" in globalThis && new FinalizationRegistry((x) => {
  const o = (Kx.get(x) || 0) - 1;
  Kx.set(x, o), o === 0 && Ic(x);
});
function t1(x, o) {
  const t = (Kx.get(o) || 0) + 1;
  Kx.set(o, t), Px && Px.register(x, o, x);
}
function n1(x) {
  Px && Px.unregister(x);
}
function Ir(x, o = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(r, i) {
      if (Qn(e), i === Ql)
        return () => {
          n1(n), Ic(x), e = !0;
        };
      if (i === "then") {
        if (o.length === 0)
          return { then: () => n };
        const a = S0(x, {
          type: "GET",
          path: o.map((s) => s.toString())
        }).then(t0);
        return a.then.bind(a);
      }
      return Ir(x, [...o, i]);
    },
    set(r, i, a) {
      Qn(e);
      const [s, c] = Vx(a);
      return S0(x, {
        type: "SET",
        path: [...o, i].map((d) => d.toString()),
        value: s
      }, c).then(t0);
    },
    apply(r, i, a) {
      Qn(e);
      const s = o[o.length - 1];
      if (s === _l)
        return S0(x, {
          type: "ENDPOINT"
        }).then(t0);
      if (s === "bind")
        return Ir(x, o.slice(0, -1));
      const [c, d] = pa(a);
      return S0(x, {
        type: "APPLY",
        path: o.map((g) => g.toString()),
        argumentList: c
      }, d).then(t0);
    },
    construct(r, i) {
      Qn(e);
      const [a, s] = pa(i);
      return S0(x, {
        type: "CONSTRUCT",
        path: o.map((c) => c.toString()),
        argumentList: a
      }, s).then(t0);
    }
  });
  return t1(n, x), n;
}
function x1(x) {
  return Array.prototype.concat.apply([], x);
}
function pa(x) {
  const o = x.map(Vx);
  return [o.map((t) => t[0]), x1(o.map((t) => t[1]))];
}
const fc = /* @__PURE__ */ new WeakMap();
function o1(x, o) {
  return fc.set(x, o), x;
}
function r1(x) {
  return Object.assign(x, { [sc]: !0 });
}
function Vx(x) {
  for (const [o, t] of gc)
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
    fc.get(x) || []
  ];
}
function t0(x) {
  switch (x.type) {
    case "HANDLER":
      return gc.get(x.name).deserialize(x.value);
    case "RAW":
      return x.value;
  }
}
function S0(x, o, t) {
  return new Promise((e) => {
    const n = i1();
    x.addEventListener("message", function r(i) {
      !i.data || !i.data.id || i.data.id !== n || (x.removeEventListener("message", r), e(i.data));
    }), x.start && x.start(), x.postMessage(Object.assign({ id: n }, o), t);
  });
}
function i1() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const Cc = "dmFyIHVlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgbGUgPSAocywgdSwgZSkgPT4gdSBpbiBzID8gdWUocywgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IHNbdV0gPSBlOwp2YXIgWW4gPSAocywgdSwgZSkgPT4gbGUocywgdHlwZW9mIHUgIT0gInN5bWJvbCIgPyB1ICsgIiIgOiB1LCBlKTsKY29uc3Qga3QgPSB7CiAgc2ltZDogInNhbV9zaW1kLndhc20iLAogIHNhbTogInNhbS53YXNtIgp9LCBjZSA9IGFzeW5jICgpID0+IFdlYkFzc2VtYmx5LnZhbGlkYXRlKG5ldyBVaW50OEFycmF5KFswLCA5NywgMTE1LCAxMDksIDEsIDAsIDAsIDAsIDEsIDUsIDEsIDk2LCAwLCAxLCAxMjMsIDMsIDIsIDEsIDAsIDEwLCAxMCwgMSwgOCwgMCwgNjUsIDAsIDI1MywgMTUsIDI1MywgOTgsIDExXSkpOwpjbGFzcyBGIGV4dGVuZHMgRXJyb3IgewogIGNvbnN0cnVjdG9yKGUsIG0pIHsKICAgIHN1cGVyKGUpOwogICAgWW4odGhpcywgImNhdXNlIik7CiAgICB0aGlzLm5hbWUgPSAiQXV0b0NhcHR1cmVFcnJvciIsIHRoaXMuY2F1c2UgPSBtOwogIH0KICAvLyBDaGFuZ2UgdGhpcyB0byBEZWNvcmF0b3Igd2hlbiB0aGV5IHdpbGwgYmUgaW4gc3RhYmxlIHJlbGVhc2UKICBzdGF0aWMgbG9nRXJyb3IoZSkgewogIH0KICBzdGF0aWMgZnJvbUNhbWVyYUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgRikKICAgICAgcmV0dXJuIGU7CiAgICBsZXQgbTsKICAgIHN3aXRjaCAoZS5uYW1lKSB7CiAgICAgIGNhc2UgIk92ZXJjb25zdHJhaW5lZEVycm9yIjoKICAgICAgICBtID0gIk1pbmltdW0gcXVhbGl0eSByZXF1aXJlbWVudHMgYXJlIG5vdCBtZXQgYnkgeW91ciBjYW1lcmEiOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RSZWFkYWJsZUVycm9yIjoKICAgICAgY2FzZSAiQWJvcnRFcnJvciI6CiAgICAgICAgbSA9ICJUaGUgd2ViY2FtIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYXBwbGljYXRpb24iOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RBbGxvd2VkRXJyb3IiOgogICAgICAgIG0gPSAiVG8gdXNlIHlvdXIgY2FtZXJhLCB5b3UgbXVzdCBhbGxvdyBwZXJtaXNzaW9ucyI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEZvdW5kRXJyb3IiOgogICAgICAgIG0gPSAiVGhlcmUgaXMgbm8gY2FtZXJhIGF2YWlsYWJsZSB0byB5b3UiOwogICAgICAgIGJyZWFrOwogICAgICBkZWZhdWx0OgogICAgICAgIG0gPSAiQW4gdW5rbm93biBjYW1lcmEgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgICAgICBicmVhazsKICAgIH0KICAgIHJldHVybiBuZXcgRihtLCBlKTsKICB9CiAgc3RhdGljIGZyb21FcnJvcihlKSB7CiAgICBpZiAodGhpcy5sb2dFcnJvcihlKSwgZSBpbnN0YW5jZW9mIEYpCiAgICAgIHJldHVybiBlOwogICAgY29uc3QgbSA9ICJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCI7CiAgICByZXR1cm4gbmV3IEYobSk7CiAgfQp9CmNvbnN0IGZlID0gewogIFJHQjogIlJHQiIsCiAgUkdCQTogIlJHQkEiCn0sIE1uID0gKHMsIHUpID0+IE1hdGguaHlwb3QodS54IC0gcy54LCB1LnkgLSBzLnkpLCBkZSA9IChzKSA9PiB7CiAgY29uc3QgeyBib3R0b21MZWZ0OiB1LCBib3R0b21SaWdodDogZSwgdG9wTGVmdDogbSwgdG9wUmlnaHQ6IGcgfSA9IHMsIEMgPSBNbihtLCBnKSwgQSA9IE1uKGcsIGUpLCBNID0gTW4odSwgZSksIFcgPSBNbihtLCB1KTsKICByZXR1cm4gTWF0aC5taW4oQywgQSwgTSwgVyk7Cn07CnZhciBoZSA9IGZ1bmN0aW9uKCkgewogIHZhciBzID0gdHlwZW9mIGRvY3VtZW50IDwgInUiICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgPyBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyA6IHZvaWQgMDsKICByZXR1cm4gZnVuY3Rpb24odSkgewogICAgdSA9IHUgfHwge307CiAgICB2YXIgZTsKICAgIGUgfHwgKGUgPSB0eXBlb2YgdSA8ICJ1IiA/IHUgOiB7fSk7CiAgICB2YXIgbSwgZzsKICAgIGUucmVhZHkgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihuLCB0KSB7CiAgICAgIG0gPSBuLCBnID0gdDsKICAgIH0pOwogICAgdmFyIEMgPSB7fSwgQTsKICAgIGZvciAoQSBpbiBlKSBlLmhhc093blByb3BlcnR5KEEpICYmIChDW0FdID0gZVtBXSk7CiAgICB2YXIgTSA9ICIuL3RoaXMucHJvZ3JhbSIsIFcgPSAhMSwgRSA9ICExOwogICAgVyA9IHR5cGVvZiB3aW5kb3cgPT0gIm9iamVjdCIsIEUgPSB0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PSAiZnVuY3Rpb24iOwogICAgdmFyIF8gPSAiIiwgUjsKICAgIChXIHx8IEUpICYmIChFID8gXyA9IHNlbGYubG9jYXRpb24uaHJlZiA6IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgKF8gPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyksIHMgJiYgKF8gPSBzKSwgXy5pbmRleE9mKCJibG9iOiIpICE9PSAwID8gXyA9IF8uc3Vic3RyKDAsIF8ubGFzdEluZGV4T2YoIi8iKSArIDEpIDogXyA9ICIiLCBFICYmIChSID0gZnVuY3Rpb24obikgewogICAgICB2YXIgdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOwogICAgICByZXR1cm4gdC5vcGVuKCJHRVQiLCBuLCAhMSksIHQucmVzcG9uc2VUeXBlID0gImFycmF5YnVmZmVyIiwgdC5zZW5kKG51bGwpLCBuZXcgVWludDhBcnJheSh0LnJlc3BvbnNlKTsKICAgIH0pKTsKICAgIHZhciBQID0gZS5wcmludEVyciB8fCBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKTsKICAgIGZvciAoQSBpbiBDKSBDLmhhc093blByb3BlcnR5KEEpICYmIChlW0FdID0gQ1tBXSk7CiAgICBDID0gbnVsbCwgZS50aGlzUHJvZ3JhbSAmJiAoTSA9IGUudGhpc1Byb2dyYW0pOwogICAgdmFyIEw7CiAgICBlLndhc21CaW5hcnkgJiYgKEwgPSBlLndhc21CaW5hcnkpLCBlLm5vRXhpdFJ1bnRpbWUgJiYgZS5ub0V4aXRSdW50aW1lLCB0eXBlb2YgV2ViQXNzZW1ibHkgIT0gIm9iamVjdCIgJiYgc24oIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWQiKTsKICAgIHZhciBHLCBSbiA9ICExOwogICAgZnVuY3Rpb24gUW4obikgewogICAgICBuIHx8IHNuKCJBc3NlcnRpb24gZmFpbGVkOiB1bmRlZmluZWQiKTsKICAgIH0KICAgIHZhciBYbiA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmOCIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gSHQobiwgdCwgcikgewogICAgICB2YXIgaSA9IHg7CiAgICAgIGlmICgwIDwgcikgewogICAgICAgIHIgPSB0ICsgciAtIDE7CiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBuLmxlbmd0aDsgKythKSB7CiAgICAgICAgICB2YXIgbyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICAgIGlmICg1NTI5NiA8PSBvICYmIDU3MzQzID49IG8pIHsKICAgICAgICAgICAgdmFyIGMgPSBuLmNoYXJDb2RlQXQoKythKTsKICAgICAgICAgICAgbyA9IDY1NTM2ICsgKChvICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAoMTI3ID49IG8pIHsKICAgICAgICAgICAgaWYgKHQgPj0gcikgYnJlYWs7CiAgICAgICAgICAgIGlbdCsrXSA9IG87CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBpZiAoMjA0NyA+PSBvKSB7CiAgICAgICAgICAgICAgaWYgKHQgKyAxID49IHIpIGJyZWFrOwogICAgICAgICAgICAgIGlbdCsrXSA9IDE5MiB8IG8gPj4gNjsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICBpZiAoNjU1MzUgPj0gbykgewogICAgICAgICAgICAgICAgaWYgKHQgKyAyID49IHIpIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjI0IHwgbyA+PiAxMjsKICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgaWYgKHQgKyAzID49IHIpIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjQwIHwgbyA+PiAxOCwgaVt0KytdID0gMTI4IHwgbyA+PiAxMiAmIDYzOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgICBpW3QrK10gPSAxMjggfCBvID4+IDYgJiA2MzsKICAgICAgICAgICAgfQogICAgICAgICAgICBpW3QrK10gPSAxMjggfCBvICYgNjM7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGlbdF0gPSAwOwogICAgICB9CiAgICB9CiAgICB2YXIgcW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0Zi0xNmxlIikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiBVdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBuID4+IDEsIGkgPSByICsgdCAvIDI7ICEociA+PSBpKSAmJiBwbltyXTsgKSArK3I7CiAgICAgIGlmIChyIDw8PSAxLCAzMiA8IHIgLSBuICYmIHFuKSByZXR1cm4gcW4uZGVjb2RlKHguc3ViYXJyYXkobiwgcikpOwogICAgICBmb3IgKHIgPSAwLCBpID0gIiI7IDsgKSB7CiAgICAgICAgdmFyIGEgPSBYW24gKyAyICogciA+PiAxXTsKICAgICAgICBpZiAoYSA9PSAwIHx8IHIgPT0gdCAvIDIpIHJldHVybiBpOwogICAgICAgICsrciwgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGEpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiB6dChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgMiA+IHIpIHJldHVybiAwOwogICAgICByIC09IDI7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IHIgPCAyICogbi5sZW5ndGggPyByIC8gMiA6IG4ubGVuZ3RoOwogICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHI7ICsrYSkgWFt0ID4+IDFdID0gbi5jaGFyQ29kZUF0KGEpLCB0ICs9IDI7CiAgICAgIHJldHVybiBYW3QgPj4gMV0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEJ0KG4pIHsKICAgICAgcmV0dXJuIDIgKiBuLmxlbmd0aDsKICAgIH0KICAgIGZ1bmN0aW9uIER0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IDAsIGkgPSAiIjsgIShyID49IHQgLyA0KTsgKSB7CiAgICAgICAgdmFyIGEgPSBiW24gKyA0ICogciA+PiAyXTsKICAgICAgICBpZiAoYSA9PSAwKSBicmVhazsKICAgICAgICArK3IsIDY1NTM2IDw9IGEgPyAoYSAtPSA2NTUzNiwgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2IHwgYSA+PiAxMCwgNTYzMjAgfCBhICYgMTAyMykpIDogaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGEpOwogICAgICB9CiAgICAgIHJldHVybiBpOwogICAgfQogICAgZnVuY3Rpb24gVnQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDQgPiByKSByZXR1cm4gMDsKICAgICAgdmFyIGkgPSB0OwogICAgICByID0gaSArIHIgLSA0OwogICAgICBmb3IgKHZhciBhID0gMDsgYSA8IG4ubGVuZ3RoOyArK2EpIHsKICAgICAgICB2YXIgbyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICBpZiAoNTUyOTYgPD0gbyAmJiA1NzM0MyA+PSBvKSB7CiAgICAgICAgICB2YXIgYyA9IG4uY2hhckNvZGVBdCgrK2EpOwogICAgICAgICAgbyA9IDY1NTM2ICsgKChvICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgfQogICAgICAgIGlmIChiW3QgPj4gMl0gPSBvLCB0ICs9IDQsIHQgKyA0ID4gcikgYnJlYWs7CiAgICAgIH0KICAgICAgcmV0dXJuIGJbdCA+PiAyXSA9IDAsIHQgLSBpOwogICAgfQogICAgZnVuY3Rpb24gR3QobikgewogICAgICBmb3IgKHZhciB0ID0gMCwgciA9IDA7IHIgPCBuLmxlbmd0aDsgKytyKSB7CiAgICAgICAgdmFyIGkgPSBuLmNoYXJDb2RlQXQocik7CiAgICAgICAgNTUyOTYgPD0gaSAmJiA1NzM0MyA+PSBpICYmICsrciwgdCArPSA0OwogICAgICB9CiAgICAgIHJldHVybiB0OwogICAgfQogICAgdmFyIFEsICQsIHgsIFgsIHBuLCBiLCBILCBudCwgdHQ7CiAgICBmdW5jdGlvbiBldChuKSB7CiAgICAgIFEgPSBuLCBlLkhFQVA4ID0gJCA9IG5ldyBJbnQ4QXJyYXkobiksIGUuSEVBUDE2ID0gWCA9IG5ldyBJbnQxNkFycmF5KG4pLCBlLkhFQVAzMiA9IGIgPSBuZXcgSW50MzJBcnJheShuKSwgZS5IRUFQVTggPSB4ID0gbmV3IFVpbnQ4QXJyYXkobiksIGUuSEVBUFUxNiA9IHBuID0gbmV3IFVpbnQxNkFycmF5KG4pLCBlLkhFQVBVMzIgPSBIID0gbmV3IFVpbnQzMkFycmF5KG4pLCBlLkhFQVBGMzIgPSBudCA9IG5ldyBGbG9hdDMyQXJyYXkobiksIGUuSEVBUEY2NCA9IHR0ID0gbmV3IEZsb2F0NjRBcnJheShuKTsKICAgIH0KICAgIHZhciBydCA9IGUuSU5JVElBTF9NRU1PUlkgfHwgMTY3NzcyMTY7CiAgICBlLndhc21NZW1vcnkgPyBHID0gZS53YXNtTWVtb3J5IDogRyA9IG5ldyBXZWJBc3NlbWJseS5NZW1vcnkoeyBpbml0aWFsOiBydCAvIDY1NTM2LCBtYXhpbXVtOiAzMjc2OCB9KSwgRyAmJiAoUSA9IEcuYnVmZmVyKSwgcnQgPSBRLmJ5dGVMZW5ndGgsIGV0KFEpOwogICAgdmFyIGl0ID0gW10sIGF0ID0gW10sICR0ID0gW10sIG90ID0gW107CiAgICBmdW5jdGlvbiBZdCgpIHsKICAgICAgdmFyIG4gPSBlLnByZVJ1bi5zaGlmdCgpOwogICAgICBpdC51bnNoaWZ0KG4pOwogICAgfQogICAgdmFyIFkgPSAwLCBvbiA9IG51bGw7CiAgICBlLnByZWxvYWRlZEltYWdlcyA9IHt9LCBlLnByZWxvYWRlZEF1ZGlvcyA9IHt9OwogICAgZnVuY3Rpb24gc24obikgewogICAgICB0aHJvdyBlLm9uQWJvcnQgJiYgZS5vbkFib3J0KG4pLCBQKG4pLCBSbiA9ICEwLCBuID0gbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcigiYWJvcnQoIiArIG4gKyAiKS4gQnVpbGQgd2l0aCAtcyBBU1NFUlRJT05TPTEgZm9yIG1vcmUgaW5mby4iKSwgZyhuKSwgbjsKICAgIH0KICAgIGZ1bmN0aW9uIHhuKG4pIHsKICAgICAgdmFyIHQgPSBaOwogICAgICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID8gdC5zdGFydHNXaXRoKG4pIDogdC5pbmRleE9mKG4pID09PSAwOwogICAgfQogICAgZnVuY3Rpb24gc3QoKSB7CiAgICAgIHJldHVybiB4bigiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LCIpOwogICAgfQogICAgdmFyIFogPSAic2FtLndhc20iOwogICAgaWYgKCFzdCgpKSB7CiAgICAgIHZhciB1dCA9IFo7CiAgICAgIFogPSBlLmxvY2F0ZUZpbGUgPyBlLmxvY2F0ZUZpbGUodXQsIF8pIDogXyArIHV0OwogICAgfQogICAgZnVuY3Rpb24gbHQoKSB7CiAgICAgIHRyeSB7CiAgICAgICAgaWYgKEwpIHJldHVybiBuZXcgVWludDhBcnJheShMKTsKICAgICAgICBpZiAoUikgcmV0dXJuIFIoWik7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIHNuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBadCgpIHsKICAgICAgcmV0dXJuIEwgfHwgIVcgJiYgIUUgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgeG4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4obHQpIDogZmV0Y2goWiwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spIHRocm93ICJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICciICsgWiArICInIjsKICAgICAgICByZXR1cm4gbi5hcnJheUJ1ZmZlcigpOwogICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gbHQoKTsKICAgICAgfSk7CiAgICB9CiAgICBmdW5jdGlvbiB5bihuKSB7CiAgICAgIGZvciAoOyAwIDwgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5zaGlmdCgpOwogICAgICAgIGlmICh0eXBlb2YgdCA9PSAiZnVuY3Rpb24iKSB0KGUpOwogICAgICAgIGVsc2UgewogICAgICAgICAgdmFyIHIgPSB0LkJhOwogICAgICAgICAgdHlwZW9mIHIgPT0gIm51bWJlciIgPyB0LnRhID09PSB2b2lkIDAgPyBGbigidiIsIHIpKCkgOiBGbigidmkiLCByKSh0LnRhKSA6IHIodC50YSA9PT0gdm9pZCAwID8gbnVsbCA6IHQudGEpOwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gRm4obiwgdCkgewogICAgICB2YXIgciA9IFtdOwogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgci5sZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOwogICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gSnQobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIGJbdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIGJbdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgYlt0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIG1uKCkgewogICAgICByZXR1cm4gMCA8IG1uLnhhOwogICAgfQogICAgZnVuY3Rpb24gSW4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIGN0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gUyhuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgeFtuXTsgKSB0ICs9IGN0W3hbbisrXV07CiAgICAgIHJldHVybiB0OwogICAgfQogICAgdmFyIHEgPSB7fSwgSiA9IHt9LCB2biA9IHt9OwogICAgZnVuY3Rpb24gTG4obikgewogICAgICBpZiAobiA9PT0gdm9pZCAwKSByZXR1cm4gIl91bmtub3duIjsKICAgICAgbiA9IG4ucmVwbGFjZSgvW15hLXpBLVowLTlfXS9nLCAiJCIpOwogICAgICB2YXIgdCA9IG4uY2hhckNvZGVBdCgwKTsKICAgICAgcmV0dXJuIDQ4IDw9IHQgJiYgNTcgPj0gdCA/ICJfIiArIG4gOiBuOwogICAgfQogICAgZnVuY3Rpb24gam4obiwgdCkgewogICAgICByZXR1cm4gbiA9IExuKG4pLCBuZXcgRnVuY3Rpb24oImJvZHkiLCAicmV0dXJuIGZ1bmN0aW9uICIgKyBuICsgYCgpIHsKICAgICJ1c2Ugc3RyaWN0IjsgICAgcmV0dXJuIGJvZHkuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKfTsKYCkodCk7CiAgICB9CiAgICBmdW5jdGlvbiBObihuKSB7CiAgICAgIHZhciB0ID0gRXJyb3IsIHIgPSBqbihuLCBmdW5jdGlvbihpKSB7CiAgICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5tZXNzYWdlID0gaSwgaSA9IEVycm9yKGkpLnN0YWNrLCBpICE9PSB2b2lkIDAgJiYgKHRoaXMuc3RhY2sgPSB0aGlzLnRvU3RyaW5nKCkgKyBgCmAgKyBpLnJlcGxhY2UoL15FcnJvcig6W15cbl0qKT9cbi8sICIiKSk7CiAgICAgIH0pOwogICAgICByZXR1cm4gci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHQucHJvdG90eXBlKSwgci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSByLCByLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkgewogICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UgPT09IHZvaWQgMCA/IHRoaXMubmFtZSA6IHRoaXMubmFtZSArICI6ICIgKyB0aGlzLm1lc3NhZ2U7CiAgICAgIH0sIHI7CiAgICB9CiAgICB2YXIgbm4gPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB2KG4pIHsKICAgICAgdGhyb3cgbmV3IG5uKG4pOwogICAgfQogICAgdmFyIGZ0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gZ24obikgewogICAgICB0aHJvdyBuZXcgZnQobik7CiAgICB9CiAgICBmdW5jdGlvbiB0bihuLCB0LCByKSB7CiAgICAgIGZ1bmN0aW9uIGkobCkgewogICAgICAgIGwgPSByKGwpLCBsLmxlbmd0aCAhPT0gbi5sZW5ndGggJiYgZ24oIk1pc21hdGNoZWQgdHlwZSBjb252ZXJ0ZXIgY291bnQiKTsKICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IG4ubGVuZ3RoOyArK3ApIFUobltwXSwgbFtwXSk7CiAgICAgIH0KICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uKGwpIHsKICAgICAgICB2bltsXSA9IHQ7CiAgICAgIH0pOwogICAgICB2YXIgYSA9IEFycmF5KHQubGVuZ3RoKSwgbyA9IFtdLCBjID0gMDsKICAgICAgdC5mb3JFYWNoKGZ1bmN0aW9uKGwsIHApIHsKICAgICAgICBKLmhhc093blByb3BlcnR5KGwpID8gYVtwXSA9IEpbbF0gOiAoby5wdXNoKGwpLCBxLmhhc093blByb3BlcnR5KGwpIHx8IChxW2xdID0gW10pLCBxW2xdLnB1c2goZnVuY3Rpb24oKSB7CiAgICAgICAgICBhW3BdID0gSltsXSwgKytjLCBjID09PSBvLmxlbmd0aCAmJiBpKGEpOwogICAgICAgIH0pKTsKICAgICAgfSksIG8ubGVuZ3RoID09PSAwICYmIGkoYSk7CiAgICB9CiAgICBmdW5jdGlvbiBVKG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPSByIHx8IHt9LCAhKCJhcmdQYWNrQWR2YW5jZSIgaW4gdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoInJlZ2lzdGVyVHlwZSByZWdpc3RlcmVkSW5zdGFuY2UgcmVxdWlyZXMgYXJnUGFja0FkdmFuY2UiKTsKICAgICAgdmFyIGkgPSB0Lm5hbWU7CiAgICAgIGlmIChuIHx8IHYoJ3R5cGUgIicgKyBpICsgJyIgbXVzdCBoYXZlIGEgcG9zaXRpdmUgaW50ZWdlciB0eXBlaWQgcG9pbnRlcicpLCBKLmhhc093blByb3BlcnR5KG4pKSB7CiAgICAgICAgaWYgKHIuRWEpIHJldHVybjsKICAgICAgICB2KCJDYW5ub3QgcmVnaXN0ZXIgdHlwZSAnIiArIGkgKyAiJyB0d2ljZSIpOwogICAgICB9CiAgICAgIEpbbl0gPSB0LCBkZWxldGUgdm5bbl0sIHEuaGFzT3duUHJvcGVydHkobikgJiYgKHQgPSBxW25dLCBkZWxldGUgcVtuXSwgdC5mb3JFYWNoKGZ1bmN0aW9uKGEpIHsKICAgICAgICBhKCk7CiAgICAgIH0pKTsKICAgIH0KICAgIGZ1bmN0aW9uIEt0KG4pIHsKICAgICAgcmV0dXJuIHsgY291bnQ6IG4uY291bnQsIG9hOiBuLm9hLCBwYTogbi5wYSwgZGE6IG4uZGEsIGZhOiBuLmZhLCBnYTogbi5nYSwgaGE6IG4uaGEgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEhuKG4pIHsKICAgICAgdihuLkEuZmEuZWEubmFtZSArICIgaW5zdGFuY2UgYWxyZWFkeSBkZWxldGVkIik7CiAgICB9CiAgICB2YXIgVW4gPSAhMTsKICAgIGZ1bmN0aW9uIGR0KCkgewogICAgfQogICAgZnVuY3Rpb24gaHQobikgewogICAgICAtLW4uY291bnQudmFsdWUsIG4uY291bnQudmFsdWUgPT09IDAgJiYgKG4uZ2EgPyBuLmhhLm5hKG4uZ2EpIDogbi5mYS5lYS5uYShuLmRhKSk7CiAgICB9CiAgICBmdW5jdGlvbiB1bihuKSB7CiAgICAgIHJldHVybiB0eXBlb2YgRmluYWxpemF0aW9uR3JvdXAgPiAidSIgPyAodW4gPSBmdW5jdGlvbih0KSB7CiAgICAgICAgcmV0dXJuIHQ7CiAgICAgIH0sIG4pIDogKFVuID0gbmV3IEZpbmFsaXphdGlvbkdyb3VwKGZ1bmN0aW9uKHQpIHsKICAgICAgICBmb3IgKHZhciByID0gdC5uZXh0KCk7ICFyLmRvbmU7IHIgPSB0Lm5leHQoKSkgciA9IHIudmFsdWUsIHIuZGEgPyBodChyKSA6IGNvbnNvbGUud2Fybigib2JqZWN0IGFscmVhZHkgZGVsZXRlZDogIiArIHIuZGEpOwogICAgICB9KSwgdW4gPSBmdW5jdGlvbih0KSB7CiAgICAgICAgcmV0dXJuIFVuLnJlZ2lzdGVyKHQsIHQuQSwgdC5BKSwgdDsKICAgICAgfSwgZHQgPSBmdW5jdGlvbih0KSB7CiAgICAgICAgVW4udW5yZWdpc3Rlcih0LkEpOwogICAgICB9LCB1bihuKSk7CiAgICB9CiAgICB2YXIgbG4gPSB2b2lkIDAsIGNuID0gW107CiAgICBmdW5jdGlvbiB6bigpIHsKICAgICAgZm9yICg7IGNuLmxlbmd0aDsgKSB7CiAgICAgICAgdmFyIG4gPSBjbi5wb3AoKTsKICAgICAgICBuLkEub2EgPSAhMSwgbi5kZWxldGUoKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gRCgpIHsKICAgIH0KICAgIHZhciBwdCA9IHt9OwogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICB2YXIgciA9IGU7CiAgICAgIGlmIChyW25dLmphID09PSB2b2lkIDApIHsKICAgICAgICB2YXIgaSA9IHJbbl07CiAgICAgICAgcltuXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgcmV0dXJuIHJbbl0uamEuaGFzT3duUHJvcGVydHkoYXJndW1lbnRzLmxlbmd0aCkgfHwgdigiRnVuY3Rpb24gJyIgKyB0ICsgIicgY2FsbGVkIHdpdGggYW4gaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0cyBvbmUgb2YgKCIgKyByW25dLmphICsgIikhIiksIHJbbl0uamFbYXJndW1lbnRzLmxlbmd0aF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9LCByW25dLmphID0gW10sIHJbbl0uamFbaS55YV0gPSBpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiB5dChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgPyAoKHIgPT09IHZvaWQgMCB8fCBlW25dLmphICE9PSB2b2lkIDAgJiYgZVtuXS5qYVtyXSAhPT0gdm9pZCAwKSAmJiB2KCJDYW5ub3QgcmVnaXN0ZXIgcHVibGljIG5hbWUgJyIgKyBuICsgIicgdHdpY2UiKSwgUXQobiwgbiksIGUuaGFzT3duUHJvcGVydHkocikgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIG92ZXJsb2FkcyBvZiBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIHIgKyAiKSEiKSwgZVtuXS5qYVtyXSA9IHQpIDogKGVbbl0gPSB0LCByICE9PSB2b2lkIDAgJiYgKGVbbl0uUmEgPSByKSk7CiAgICB9CiAgICBmdW5jdGlvbiBYdChuLCB0LCByLCBpLCBhLCBvLCBjLCBsKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuY29uc3RydWN0b3IgPSB0LCB0aGlzLm1hID0gciwgdGhpcy5uYSA9IGksIHRoaXMuaWEgPSBhLCB0aGlzLkNhID0gbywgdGhpcy5xYSA9IGMsIHRoaXMuQWEgPSBsOwogICAgfQogICAgZnVuY3Rpb24gd24obiwgdCwgcikgewogICAgICBmb3IgKDsgdCAhPT0gcjsgKSB0LnFhIHx8IHYoIkV4cGVjdGVkIG51bGwgb3IgaW5zdGFuY2Ugb2YgIiArIHIubmFtZSArICIsIGdvdCBhbiBpbnN0YW5jZSBvZiAiICsgdC5uYW1lKSwgbiA9IHQucWEobiksIHQgPSB0LmlhOwogICAgICByZXR1cm4gbjsKICAgIH0KICAgIGZ1bmN0aW9uIHF0KG4sIHQpIHsKICAgICAgcmV0dXJuIHQgPT09IG51bGwgPyAodGhpcy51YSAmJiB2KCJudWxsIGlzIG5vdCBhIHZhbGlkICIgKyB0aGlzLm5hbWUpLCAwKSA6ICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIG5lKG4sIHQpIHsKICAgICAgaWYgKHQgPT09IG51bGwpIHsKICAgICAgICBpZiAodGhpcy51YSAmJiB2KCJudWxsIGlzIG5vdCBhIHZhbGlkICIgKyB0aGlzLm5hbWUpLCB0aGlzLnNhKSB7CiAgICAgICAgICB2YXIgciA9IHRoaXMuSGEoKTsKICAgICAgICAgIHJldHVybiBuICE9PSBudWxsICYmIG4ucHVzaCh0aGlzLm5hLCByKSwgcjsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIDA7CiAgICAgIH0KICAgICAgaWYgKHQuQSB8fCB2KCdDYW5ub3QgcGFzcyAiJyArIHJuKHQpICsgJyIgYXMgYSAnICsgdGhpcy5uYW1lKSwgdC5BLmRhIHx8IHYoIkNhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICIgKyB0aGlzLm5hbWUpLCAhdGhpcy5yYSAmJiB0LkEuZmEucmEgJiYgdigiQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAiICsgKHQuQS5oYSA/IHQuQS5oYS5uYW1lIDogdC5BLmZhLm5hbWUpICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKSwgciA9IHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSwgdGhpcy5zYSkgc3dpdGNoICh0LkEuZ2EgPT09IHZvaWQgMCAmJiB2KCJQYXNzaW5nIHJhdyBwb2ludGVyIHRvIHNtYXJ0IHBvaW50ZXIgaXMgaWxsZWdhbCIpLCB0aGlzLlBhKSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgdC5BLmhhID09PSB0aGlzID8gciA9IHQuQS5nYSA6IHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSk7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByID0gdC5BLmdhOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgaWYgKHQuQS5oYSA9PT0gdGhpcykgciA9IHQuQS5nYTsKICAgICAgICAgIGVsc2UgewogICAgICAgICAgICB2YXIgaSA9IHQuY2xvbmUoKTsKICAgICAgICAgICAgciA9IHRoaXMuSWEociwgZW4oZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgaS5kZWxldGUoKTsKICAgICAgICAgICAgfSkpLCBuICE9PSBudWxsICYmIG4ucHVzaCh0aGlzLm5hLCByKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2KCJVbnN1cHBvcnRpbmcgc2hhcmluZyBwb2xpY3kiKTsKICAgICAgfQogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIHRlKG4sIHQpIHsKICAgICAgcmV0dXJuIHQgPT09IG51bGwgPyAodGhpcy51YSAmJiB2KCJudWxsIGlzIG5vdCBhIHZhbGlkICIgKyB0aGlzLm5hbWUpLCAwKSA6ICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArIHQuQS5mYS5uYW1lICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKSwgd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKG4pIHsKICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKEhbbiA+PiAyXSk7CiAgICB9CiAgICBmdW5jdGlvbiBtdChuLCB0LCByKSB7CiAgICAgIHJldHVybiB0ID09PSByID8gbiA6IHIuaWEgPT09IHZvaWQgMCA/IG51bGwgOiAobiA9IG10KG4sIHQsIHIuaWEpLCBuID09PSBudWxsID8gbnVsbCA6IHIuQWEobikpOwogICAgfQogICAgdmFyIGZuID0ge307CiAgICBmdW5jdGlvbiBlZShuLCB0KSB7CiAgICAgIGZvciAodCA9PT0gdm9pZCAwICYmIHYoInB0ciBzaG91bGQgbm90IGJlIHVuZGVmaW5lZCIpOyBuLmlhOyApIHQgPSBuLnFhKHQpLCBuID0gbi5pYTsKICAgICAgcmV0dXJuIGZuW3RdOwogICAgfQogICAgZnVuY3Rpb24gX24obiwgdCkgewogICAgICByZXR1cm4gdC5mYSAmJiB0LmRhIHx8IGduKCJtYWtlQ2xhc3NIYW5kbGUgcmVxdWlyZXMgcHRyIGFuZCBwdHJUeXBlIiksICEhdC5oYSAhPSAhIXQuZ2EgJiYgZ24oIkJvdGggc21hcnRQdHJUeXBlIGFuZCBzbWFydFB0ciBtdXN0IGJlIHNwZWNpZmllZCIpLCB0LmNvdW50ID0geyB2YWx1ZTogMSB9LCB1bihPYmplY3QuY3JlYXRlKG4sIHsgQTogeyB2YWx1ZTogdCB9IH0pKTsKICAgIH0KICAgIGZ1bmN0aW9uIHoobiwgdCwgciwgaSkgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmVhID0gdCwgdGhpcy51YSA9IHIsIHRoaXMucmEgPSBpLCB0aGlzLnNhID0gITEsIHRoaXMubmEgPSB0aGlzLklhID0gdGhpcy5IYSA9IHRoaXMud2EgPSB0aGlzLlBhID0gdGhpcy5HYSA9IHZvaWQgMCwgdC5pYSAhPT0gdm9pZCAwID8gdGhpcy50b1dpcmVUeXBlID0gbmUgOiAodGhpcy50b1dpcmVUeXBlID0gaSA/IHF0IDogdGUsIHRoaXMua2EgPSBudWxsKTsKICAgIH0KICAgIGZ1bmN0aW9uIHZ0KG4sIHQsIHIpIHsKICAgICAgZS5oYXNPd25Qcm9wZXJ0eShuKSB8fCBnbigiUmVwbGFjaW5nIG5vbmV4aXN0YW50IHB1YmxpYyBzeW1ib2wiKSwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIHIgIT09IHZvaWQgMCA/IGVbbl0uamFbcl0gPSB0IDogKGVbbl0gPSB0LCBlW25dLnlhID0gcik7CiAgICB9CiAgICBmdW5jdGlvbiBWKG4sIHQpIHsKICAgICAgbiA9IFMobik7CiAgICAgIHZhciByID0gRm4obiwgdCk7CiAgICAgIHJldHVybiB0eXBlb2YgciAhPSAiZnVuY3Rpb24iICYmIHYoInVua25vd24gZnVuY3Rpb24gcG9pbnRlciB3aXRoIHNpZ25hdHVyZSAiICsgbiArICI6ICIgKyB0KSwgcjsKICAgIH0KICAgIHZhciBndCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIHd0KG4pIHsKICAgICAgbiA9IGJ0KG4pOwogICAgICB2YXIgdCA9IFMobik7CiAgICAgIHJldHVybiBCKG4pLCB0OwogICAgfQogICAgZnVuY3Rpb24gZG4obiwgdCkgewogICAgICBmdW5jdGlvbiByKG8pIHsKICAgICAgICBhW29dIHx8IEpbb10gfHwgKHZuW29dID8gdm5bb10uZm9yRWFjaChyKSA6IChpLnB1c2gobyksIGFbb10gPSAhMCkpOwogICAgICB9CiAgICAgIHZhciBpID0gW10sIGEgPSB7fTsKICAgICAgdGhyb3cgdC5mb3JFYWNoKHIpLCBuZXcgZ3QobiArICI6ICIgKyBpLm1hcCh3dCkuam9pbihbIiwgIl0pKTsKICAgIH0KICAgIGZ1bmN0aW9uIEF0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IFtdLCBpID0gMDsgaSA8IG47IGkrKykgci5wdXNoKGJbKHQgPj4gMikgKyBpXSk7CiAgICAgIHJldHVybiByOwogICAgfQogICAgZnVuY3Rpb24gQ24obikgewogICAgICBmb3IgKDsgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5wb3AoKTsKICAgICAgICBuLnBvcCgpKHQpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBfdChuLCB0LCByKSB7CiAgICAgIHJldHVybiBuIGluc3RhbmNlb2YgT2JqZWN0IHx8IHYociArICcgd2l0aCBpbnZhbGlkICJ0aGlzIjogJyArIG4pLCBuIGluc3RhbmNlb2YgdC5lYS5jb25zdHJ1Y3RvciB8fCB2KHIgKyAnIGluY29tcGF0aWJsZSB3aXRoICJ0aGlzIiBvZiB0eXBlICcgKyBuLmNvbnN0cnVjdG9yLm5hbWUpLCBuLkEuZGEgfHwgdigiY2Fubm90IGNhbGwgZW1zY3JpcHRlbiBiaW5kaW5nIG1ldGhvZCAiICsgciArICIgb24gZGVsZXRlZCBvYmplY3QiKSwgd24obi5BLmRhLCBuLkEuZmEuZWEsIHQuZWEpOwogICAgfQogICAgdmFyIEJuID0gW10sIEkgPSBbe30sIHsgdmFsdWU6IHZvaWQgMCB9LCB7IHZhbHVlOiBudWxsIH0sIHsgdmFsdWU6ICEwIH0sIHsgdmFsdWU6ICExIH1dOwogICAgZnVuY3Rpb24gRG4obikgewogICAgICA0IDwgbiAmJiAtLUlbbl0uSmEgPT09IDAgJiYgKElbbl0gPSB2b2lkIDAsIEJuLnB1c2gobikpOwogICAgfQogICAgZnVuY3Rpb24gZW4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIHZvaWQgMDoKICAgICAgICAgIHJldHVybiAxOwogICAgICAgIGNhc2UgbnVsbDoKICAgICAgICAgIHJldHVybiAyOwogICAgICAgIGNhc2UgITA6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBjYXNlICExOgogICAgICAgICAgcmV0dXJuIDQ7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHZhciB0ID0gQm4ubGVuZ3RoID8gQm4ucG9wKCkgOiBJLmxlbmd0aDsKICAgICAgICAgIHJldHVybiBJW3RdID0geyBKYTogMSwgdmFsdWU6IG4gfSwgdDsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcm4obikgewogICAgICBpZiAobiA9PT0gbnVsbCkgcmV0dXJuICJudWxsIjsKICAgICAgdmFyIHQgPSB0eXBlb2YgbjsKICAgICAgcmV0dXJuIHQgPT09ICJvYmplY3QiIHx8IHQgPT09ICJhcnJheSIgfHwgdCA9PT0gImZ1bmN0aW9uIiA/IG4udG9TdHJpbmcoKSA6ICIiICsgbjsKICAgIH0KICAgIGZ1bmN0aW9uIHJlKG4sIHQpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKG50W3IgPj4gMl0pOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDM6CiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocikgewogICAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUodHRbciA+PiAzXSk7CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGZsb2F0IHR5cGU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gaWUobikgewogICAgICB2YXIgdCA9IEZ1bmN0aW9uOwogICAgICBpZiAoISh0IGluc3RhbmNlb2YgRnVuY3Rpb24pKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJuZXdfIGNhbGxlZCB3aXRoIGNvbnN0cnVjdG9yIHR5cGUgIiArIHR5cGVvZiB0ICsgIiB3aGljaCBpcyBub3QgYSBmdW5jdGlvbiIpOwogICAgICB2YXIgciA9IGpuKHQubmFtZSB8fCAidW5rbm93bkZ1bmN0aW9uTmFtZSIsIGZ1bmN0aW9uKCkgewogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gdC5wcm90b3R5cGUsIHIgPSBuZXcgcigpLCBuID0gdC5hcHBseShyLCBuKSwgbiBpbnN0YW5jZW9mIE9iamVjdCA/IG4gOiByOwogICAgfQogICAgZnVuY3Rpb24gYWUobiwgdCwgcikgewogICAgICBzd2l0Y2ggKHQpIHsKICAgICAgICBjYXNlIDA6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuICRbaV07CiAgICAgICAgICB9IDogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4geFtpXTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBYW2kgPj4gMV07CiAgICAgICAgICB9IDogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gcG5baSA+PiAxXTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBiW2kgPj4gMl07CiAgICAgICAgICB9IDogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gSFtpID4+IDJdOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBpbnRlZ2VyIHR5cGU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gVm4obikgewogICAgICByZXR1cm4gbiB8fCB2KCJDYW5ub3QgdXNlIGRlbGV0ZWQgdmFsLiBoYW5kbGUgPSAiICsgbiksIElbbl0udmFsdWU7CiAgICB9CiAgICBmdW5jdGlvbiBDdChuLCB0KSB7CiAgICAgIHZhciByID0gSltuXTsKICAgICAgcmV0dXJuIHIgPT09IHZvaWQgMCAmJiB2KHQgKyAiIGhhcyB1bmtub3duIHR5cGUgIiArIHd0KG4pKSwgcjsKICAgIH0KICAgIHZhciBvZSA9IHt9LCBFdCA9IHt9OwogICAgZnVuY3Rpb24gVHQoKSB7CiAgICAgIGlmICghR24pIHsKICAgICAgICB2YXIgbiA9IHsgVVNFUjogIndlYl91c2VyIiwgTE9HTkFNRTogIndlYl91c2VyIiwgUEFUSDogIi8iLCBQV0Q6ICIvIiwgSE9NRTogIi9ob21lL3dlYl91c2VyIiwgTEFORzogKHR5cGVvZiBuYXZpZ2F0b3IgPT0gIm9iamVjdCIgJiYgbmF2aWdhdG9yLmxhbmd1YWdlcyAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdIHx8ICJDIikucmVwbGFjZSgiLSIsICJfIikgKyAiLlVURi04IiwgXzogTSB8fCAiLi90aGlzLnByb2dyYW0iIH0sIHQ7CiAgICAgICAgZm9yICh0IGluIEV0KSBuW3RdID0gRXRbdF07CiAgICAgICAgdmFyIHIgPSBbXTsKICAgICAgICBmb3IgKHQgaW4gbikgci5wdXNoKHQgKyAiPSIgKyBuW3RdKTsKICAgICAgICBHbiA9IHI7CiAgICAgIH0KICAgICAgcmV0dXJuIEduOwogICAgfQogICAgdmFyIEduLCBQdCA9IFtdOwogICAgZnVuY3Rpb24gTXQobikgewogICAgICB2YXIgdCA9IHt9LCByOwogICAgICBmb3IgKHIgaW4gbikgKGZ1bmN0aW9uKGkpIHsKICAgICAgICB2YXIgYSA9IG5baV07CiAgICAgICAgdFtpXSA9IHR5cGVvZiBhID09ICJmdW5jdGlvbiIgPyBmdW5jdGlvbigpIHsKICAgICAgICAgIFB0LnB1c2goaSk7CiAgICAgICAgICB0cnkgewogICAgICAgICAgICByZXR1cm4gYS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgICAgICAgfSBmaW5hbGx5IHsKICAgICAgICAgICAgaWYgKFJuKSByZXR1cm47CiAgICAgICAgICAgIHZhciBvID0gUHQucG9wKCk7CiAgICAgICAgICAgIFFuKG8gPT09IGkpOwogICAgICAgICAgfQogICAgICAgIH0gOiBhOwogICAgICB9KShyKTsKICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICBmb3IgKHZhciBXdCA9IEFycmF5KDI1NiksIEVuID0gMDsgMjU2ID4gRW47ICsrRW4pIFd0W0VuXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoRW4pOwogICAgY3QgPSBXdCwgbm4gPSBlLkJpbmRpbmdFcnJvciA9IE5uKCJCaW5kaW5nRXJyb3IiKSwgZnQgPSBlLkludGVybmFsRXJyb3IgPSBObigiSW50ZXJuYWxFcnJvciIpLCBELnByb3RvdHlwZS5pc0FsaWFzT2YgPSBmdW5jdGlvbihuKSB7CiAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBEICYmIG4gaW5zdGFuY2VvZiBEKSkgcmV0dXJuICExOwogICAgICB2YXIgdCA9IHRoaXMuQS5mYS5lYSwgciA9IHRoaXMuQS5kYSwgaSA9IG4uQS5mYS5lYTsKICAgICAgZm9yIChuID0gbi5BLmRhOyB0LmlhOyApIHIgPSB0LnFhKHIpLCB0ID0gdC5pYTsKICAgICAgZm9yICg7IGkuaWE7ICkgbiA9IGkucWEobiksIGkgPSBpLmlhOwogICAgICByZXR1cm4gdCA9PT0gaSAmJiByID09PSBuOwogICAgfSwgRC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHsKICAgICAgaWYgKHRoaXMuQS5kYSB8fCBIbih0aGlzKSwgdGhpcy5BLnBhKSByZXR1cm4gdGhpcy5BLmNvdW50LnZhbHVlICs9IDEsIHRoaXM7CiAgICAgIHZhciBuID0gdW4oT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyksIHsgQTogeyB2YWx1ZTogS3QodGhpcy5BKSB9IH0pKTsKICAgICAgcmV0dXJuIG4uQS5jb3VudC52YWx1ZSArPSAxLCBuLkEub2EgPSAhMSwgbjsKICAgIH0sIEQucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKCkgewogICAgICB0aGlzLkEuZGEgfHwgSG4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgZHQodGhpcyksIGh0KHRoaXMuQSksIHRoaXMuQS5wYSB8fCAodGhpcy5BLmdhID0gdm9pZCAwLCB0aGlzLkEuZGEgPSB2b2lkIDApOwogICAgfSwgRC5wcm90b3R5cGUuaXNEZWxldGVkID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAhdGhpcy5BLmRhOwogICAgfSwgRC5wcm90b3R5cGUuZGVsZXRlTGF0ZXIgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIHRoaXMuQS5kYSB8fCBIbih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBjbi5wdXNoKHRoaXMpLCBjbi5sZW5ndGggPT09IDEgJiYgbG4gJiYgbG4oem4pLCB0aGlzLkEub2EgPSAhMCwgdGhpczsKICAgIH0sIHoucHJvdG90eXBlLkRhID0gZnVuY3Rpb24obikgewogICAgICByZXR1cm4gdGhpcy53YSAmJiAobiA9IHRoaXMud2EobikpLCBuOwogICAgfSwgei5wcm90b3R5cGUudmEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHRoaXMubmEgJiYgdGhpcy5uYShuKTsKICAgIH0sIHoucHJvdG90eXBlLmFyZ1BhY2tBZHZhbmNlID0gOCwgei5wcm90b3R5cGUucmVhZFZhbHVlRnJvbVBvaW50ZXIgPSBBbiwgei5wcm90b3R5cGUuZGVsZXRlT2JqZWN0ID0gZnVuY3Rpb24obikgewogICAgICBuICE9PSBudWxsICYmIG4uZGVsZXRlKCk7CiAgICB9LCB6LnByb3RvdHlwZS5mcm9tV2lyZVR5cGUgPSBmdW5jdGlvbihuKSB7CiAgICAgIGZ1bmN0aW9uIHQoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuc2EgPyBfbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLkdhLCBkYTogciwgaGE6IHRoaXMsIGdhOiBuIH0pIDogX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcywgZGE6IG4gfSk7CiAgICAgIH0KICAgICAgdmFyIHIgPSB0aGlzLkRhKG4pOwogICAgICBpZiAoIXIpIHJldHVybiB0aGlzLnZhKG4pLCBudWxsOwogICAgICB2YXIgaSA9IGVlKHRoaXMuZWEsIHIpOwogICAgICBpZiAoaSAhPT0gdm9pZCAwKQogICAgICAgIHJldHVybiBpLkEuY291bnQudmFsdWUgPT09IDAgPyAoaS5BLmRhID0gciwgaS5BLmdhID0gbiwgaS5jbG9uZSgpKSA6IChpID0gaS5jbG9uZSgpLCB0aGlzLnZhKG4pLCBpKTsKICAgICAgaWYgKGkgPSB0aGlzLmVhLkNhKHIpLCBpID0gcHRbaV0sICFpKSByZXR1cm4gdC5jYWxsKHRoaXMpOwogICAgICBpID0gdGhpcy5yYSA/IGkuemEgOiBpLnBvaW50ZXJUeXBlOwogICAgICB2YXIgYSA9IG10KHIsIHRoaXMuZWEsIGkuZWEpOwogICAgICByZXR1cm4gYSA9PT0gbnVsbCA/IHQuY2FsbCh0aGlzKSA6IHRoaXMuc2EgPyBfbihpLmVhLm1hLCB7IGZhOiBpLCBkYTogYSwgaGE6IHRoaXMsIGdhOiBuIH0pIDogX24oCiAgICAgICAgaS5lYS5tYSwKICAgICAgICB7IGZhOiBpLCBkYTogYSB9CiAgICAgICk7CiAgICB9LCBlLmdldEluaGVyaXRlZEluc3RhbmNlQ291bnQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGZuKS5sZW5ndGg7CiAgICB9LCBlLmdldExpdmVJbmhlcml0ZWRJbnN0YW5jZXMgPSBmdW5jdGlvbigpIHsKICAgICAgdmFyIG4gPSBbXSwgdDsKICAgICAgZm9yICh0IGluIGZuKSBmbi5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBuLnB1c2goZm5bdF0pOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZmx1c2hQZW5kaW5nRGVsZXRlcyA9IHpuLCBlLnNldERlbGF5RnVuY3Rpb24gPSBmdW5jdGlvbihuKSB7CiAgICAgIGxuID0gbiwgY24ubGVuZ3RoICYmIGxuICYmIGxuKHpuKTsKICAgIH0sIGd0ID0gZS5VbmJvdW5kVHlwZUVycm9yID0gTm4oIlVuYm91bmRUeXBlRXJyb3IiKSwgZS5jb3VudF9lbXZhbF9oYW5kbGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSAwLCB0ID0gNTsgdCA8IEkubGVuZ3RoOyArK3QpIElbdF0gIT09IHZvaWQgMCAmJiArK247CiAgICAgIHJldHVybiBuOwogICAgfSwgZS5nZXRfZmlyc3RfZW12YWwgPSBmdW5jdGlvbigpIHsKICAgICAgZm9yICh2YXIgbiA9IDU7IG4gPCBJLmxlbmd0aDsgKytuKSBpZiAoSVtuXSAhPT0gdm9pZCAwKSByZXR1cm4gSVtuXTsKICAgICAgcmV0dXJuIG51bGw7CiAgICB9LCBhdC5wdXNoKHsgQmE6IGZ1bmN0aW9uKCkgewogICAgICBPdCgpOwogICAgfSB9KTsKICAgIHZhciBzZSA9IHsKICAgICAgejogZnVuY3Rpb24obikgewogICAgICAgIHJldHVybiBUbihuICsgMTYpICsgMTY7CiAgICAgIH0sCiAgICAgIHU6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICB0aHJvdyBuZXcgSnQobikuRmEodCwgciksICJ1bmNhdWdodF9leGNlcHRpb24iIGluIG1uID8gbW4ueGErKyA6IG1uLnhhID0gMSwgbjsKICAgICAgfSwKICAgICAgdzogZnVuY3Rpb24obiwgdCwgciwgaSwgYSkgewogICAgICAgIHZhciBvID0gSW4ocik7CiAgICAgICAgdCA9IFModCksIFUobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIHJldHVybiAhIWM7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oYywgbCkgewogICAgICAgICAgcmV0dXJuIGwgPyBpIDogYTsKICAgICAgICB9LCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIGlmIChyID09PSAxKSB2YXIgbCA9ICQ7CiAgICAgICAgICBlbHNlIGlmIChyID09PSAyKSBsID0gWDsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDQpIGwgPSBiOwogICAgICAgICAgZWxzZSB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGJvb2xlYW4gdHlwZSBzaXplOiAiICsgdCk7CiAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUobFtjID4+IG9dKTsKICAgICAgICB9LCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgaDogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgbywgYywgbCwgcCwgZiwgZCwgaCwgdykgewogICAgICAgIGQgPSBTKGQpLCBvID0gVihhLCBvKSwgbCAmJiAobCA9IFYoYywgbCkpLCBmICYmIChmID0gVihwLCBmKSksIHcgPSBWKGgsIHcpOwogICAgICAgIHZhciBUID0gTG4oZCk7CiAgICAgICAgeXQoVCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBkbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbaV0pOwogICAgICAgIH0pLCB0bihbbiwgdCwgcl0sIGkgPyBbaV0gOiBbXSwgZnVuY3Rpb24oeSkgewogICAgICAgICAgaWYgKHkgPSB5WzBdLCBpKQogICAgICAgICAgICB2YXIgTiA9IHkuZWEsIE8gPSBOLm1hOwogICAgICAgICAgZWxzZSBPID0gRC5wcm90b3R5cGU7CiAgICAgICAgICB5ID0gam4oVCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykgIT09IGspIHRocm93IG5ldyBubigiVXNlICduZXcnIHRvIGNvbnN0cnVjdCAiICsgZCk7CiAgICAgICAgICAgIGlmIChqLmxhID09PSB2b2lkIDApIHRocm93IG5ldyBubihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIgU3QgPSBqLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoU3QgPT09IHZvaWQgMCkgdGhyb3cgbmV3IG5uKCJUcmllZCB0byBpbnZva2UgY3RvciBvZiAiICsgZCArICIgd2l0aCBpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0ZWQgKCIgKyBPYmplY3Qua2V5cyhqLmxhKS50b1N0cmluZygpICsgIikgcGFyYW1ldGVycyBpbnN0ZWFkISIpOwogICAgICAgICAgICByZXR1cm4gU3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICAgIH0pOwogICAgICAgICAgdmFyIGsgPSBPYmplY3QuY3JlYXRlKE8sIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHkgfSB9KTsKICAgICAgICAgIHkucHJvdG90eXBlID0gazsKICAgICAgICAgIHZhciBqID0gbmV3IFh0KGQsIHksIGssIHcsIE4sIG8sIGwsIGYpOwogICAgICAgICAgTiA9IG5ldyB6KGQsIGosICEwLCAhMSksIE8gPSBuZXcgeihkICsgIioiLCBqLCAhMSwgITEpOwogICAgICAgICAgdmFyIGhuID0gbmV3IHooZCArICIgY29uc3QqIiwgaiwgITEsICEwKTsKICAgICAgICAgIHJldHVybiBwdFtuXSA9IHsgcG9pbnRlclR5cGU6IE8sIHphOiBobiB9LCB2dChULCB5KSwgW04sIE8sIGhuXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgZzogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgbykgewogICAgICAgIFFuKDAgPCB0KTsKICAgICAgICB2YXIgYyA9IEF0KHQsIHIpOwogICAgICAgIGEgPSBWKGksIGEpOwogICAgICAgIHZhciBsID0gW29dLCBwID0gW107CiAgICAgICAgdG4oW10sIFtuXSwgZnVuY3Rpb24oZikgewogICAgICAgICAgZiA9IGZbMF07CiAgICAgICAgICB2YXIgZCA9ICJjb25zdHJ1Y3RvciAiICsgZi5uYW1lOwogICAgICAgICAgaWYgKGYuZWEubGEgPT09IHZvaWQgMCAmJiAoZi5lYS5sYSA9IFtdKSwgZi5lYS5sYVt0IC0gMV0gIT09IHZvaWQgMCkgdGhyb3cgbmV3IG5uKCJDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgY29uc3RydWN0b3JzIHdpdGggaWRlbnRpY2FsIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgKHQgLSAxKSArICIpIGZvciBjbGFzcyAnIiArIGYubmFtZSArICInISBPdmVybG9hZCByZXNvbHV0aW9uIGlzIGN1cnJlbnRseSBvbmx5IHBlcmZvcm1lZCB1c2luZyB0aGUgcGFyYW1ldGVyIGNvdW50LCBub3QgYWN0dWFsIHR5cGUgaW5mbyEiKTsKICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZi5uYW1lICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGMpOwogICAgICAgICAgfSwgdG4oW10sIGMsIGZ1bmN0aW9uKGgpIHsKICAgICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCAhPT0gdCAtIDEgJiYgdihkICsgIiBjYWxsZWQgd2l0aCAiICsgYXJndW1lbnRzLmxlbmd0aCArICIgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKHQgLSAxKSksIHAubGVuZ3RoID0gMCwgbC5sZW5ndGggPSB0OwogICAgICAgICAgICAgIGZvciAodmFyIHcgPSAxOyB3IDwgdDsgKyt3KSBsW3ddID0gaFt3XS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgcCwKICAgICAgICAgICAgICAgIGFyZ3VtZW50c1t3IC0gMV0KICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiB3ID0gYS5hcHBseShudWxsLCBsKSwgQ24ocCksIGhbMF0uZnJvbVdpcmVUeXBlKHcpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgbywgYywgbCwgcCwgZikgewogICAgICAgIHQgPSBTKHQpLCBhID0gVihpLCBhKSwgdG4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgaCA9IGQubmFtZSArICIuIiArIHQsIHcgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgYWNjZXNzICIgKyBoICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBjXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHAgPyB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgY10pOwogICAgICAgICAgfSA6IHcuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYoaCArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCB3KSwgdG4oW10sIHAgPyBbciwgY10gOiBbcl0sIGZ1bmN0aW9uKFQpIHsKICAgICAgICAgICAgdmFyIHkgPSBUWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciBrID0gX3QodGhpcywgZCwgaCArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIHkuZnJvbVdpcmVUeXBlKGEobywgaykpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAocCkgewogICAgICAgICAgICAgIHAgPSBWKGwsIHApOwogICAgICAgICAgICAgIHZhciBPID0gVFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKGspIHsKICAgICAgICAgICAgICAgIHZhciBqID0gX3QodGhpcywgZCwgaCArICIgc2V0dGVyIiksIGhuID0gW107CiAgICAgICAgICAgICAgICBwKGYsIGosIE8udG9XaXJlVHlwZShobiwgaykpLCBDbihobik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBTKHQpLCBVKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IElbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gRG4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIGVuKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IEluKHIpLCB0ID0gUyh0KSwgVShuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBhICE9ICJudW1iZXIiICYmIHR5cGVvZiBhICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBybihhKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgICByZXR1cm4gYTsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiByZSh0LCByKSwKICAgICAgICAgIGthOiBudWxsCiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGM6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEsIG8pIHsKICAgICAgICB2YXIgYyA9IEF0KHQsIHIpOwogICAgICAgIG4gPSBTKG4pLCBhID0gVihpLCBhKSwgeXQobiwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBkbigiQ2Fubm90IGNhbGwgIiArIG4gKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgYyk7CiAgICAgICAgfSwgdCAtIDEpLCB0bihbXSwgYywgZnVuY3Rpb24obCkgewogICAgICAgICAgdmFyIHAgPSBuLCBmID0gbjsKICAgICAgICAgIGwgPSBbbFswXSwgbnVsbF0uY29uY2F0KGwuc2xpY2UoMSkpOwogICAgICAgICAgdmFyIGQgPSBhLCBoID0gbC5sZW5ndGg7CiAgICAgICAgICAyID4gaCAmJiB2KCJhcmdUeXBlcyBhcnJheSBzaXplIG1pc21hdGNoISBNdXN0IGF0IGxlYXN0IGdldCByZXR1cm4gdmFsdWUgYW5kICd0aGlzJyB0eXBlcyEiKTsKICAgICAgICAgIGZvciAodmFyIHcgPSBsWzFdICE9PSBudWxsICYmICExLCBUID0gITEsIHkgPSAxOyB5IDwgbC5sZW5ndGg7ICsreSkgaWYgKGxbeV0gIT09IG51bGwgJiYgbFt5XS5rYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgICAgIFQgPSAhMDsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICB9CiAgICAgICAgICB2YXIgTiA9IGxbMF0ubmFtZSAhPT0gInZvaWQiLCBPID0gIiIsIGsgPSAiIjsKICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCBoIC0gMjsgKyt5KSBPICs9ICh5ICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgeSwgayArPSAoeSAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHkgKyAiV2lyZWQiOwogICAgICAgICAgZiA9ICJyZXR1cm4gZnVuY3Rpb24gIiArIExuKGYpICsgIigiICsgTyArIGApIHsKaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IGAgKyAoaCAtIDIpICsgYCkgewp0aHJvd0JpbmRpbmdFcnJvcignZnVuY3Rpb24gYCArIGYgKyAiIGNhbGxlZCB3aXRoICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAoaCAtIDIpICsgYCBhcmdzIScpOwp9CmAsIFQgJiYgKGYgKz0gYHZhciBkZXN0cnVjdG9ycyA9IFtdOwpgKTsKICAgICAgICAgIHZhciBqID0gVCA/ICJkZXN0cnVjdG9ycyIgOiAibnVsbCI7CiAgICAgICAgICBmb3IgKE8gPSAidGhyb3dCaW5kaW5nRXJyb3IgaW52b2tlciBmbiBydW5EZXN0cnVjdG9ycyByZXRUeXBlIGNsYXNzUGFyYW0iLnNwbGl0KCIgIiksIGQgPSBbdiwgZCwgbywgQ24sIGxbMF0sIGxbMV1dLCB3ICYmIChmICs9ICJ2YXIgdGhpc1dpcmVkID0gY2xhc3NQYXJhbS50b1dpcmVUeXBlKCIgKyBqICsgYCwgdGhpcyk7CmApLCB5ID0gMDsgeSA8IGggLSAyOyArK3kpIGYgKz0gInZhciBhcmciICsgeSArICJXaXJlZCA9IGFyZ1R5cGUiICsgeSArICIudG9XaXJlVHlwZSgiICsgaiArICIsIGFyZyIgKyB5ICsgIik7IC8vICIgKyBsW3kgKyAyXS5uYW1lICsgYApgLCBPLnB1c2goImFyZ1R5cGUiICsgeSksIGQucHVzaChsW3kgKyAyXSk7CiAgICAgICAgICBpZiAodyAmJiAoayA9ICJ0aGlzV2lyZWQiICsgKDAgPCBrLmxlbmd0aCA/ICIsICIgOiAiIikgKyBrKSwgZiArPSAoTiA/ICJ2YXIgcnYgPSAiIDogIiIpICsgImludm9rZXIoZm4iICsgKDAgPCBrLmxlbmd0aCA/ICIsICIgOiAiIikgKyBrICsgYCk7CmAsIFQpIGYgKz0gYHJ1bkRlc3RydWN0b3JzKGRlc3RydWN0b3JzKTsKYDsKICAgICAgICAgIGVsc2UgZm9yICh5ID0gdyA/IDEgOiAyOyB5IDwgbC5sZW5ndGg7ICsreSkgaCA9IHkgPT09IDEgPyAidGhpc1dpcmVkIiA6ICJhcmciICsgKHkgLSAyKSArICJXaXJlZCIsIGxbeV0ua2EgIT09IG51bGwgJiYgKGYgKz0gaCArICJfZHRvcigiICsgaCArICIpOyAvLyAiICsgbFt5XS5uYW1lICsgYApgLCBPLnB1c2goaCArICJfZHRvciIpLCBkLnB1c2gobFt5XS5rYSkpOwogICAgICAgICAgcmV0dXJuIE4gJiYgKGYgKz0gYHZhciByZXQgPSByZXRUeXBlLmZyb21XaXJlVHlwZShydik7CnJldHVybiByZXQ7CmApLCBPLnB1c2goZiArIGB9CmApLCBsID0gaWUoTykuYXBwbHkobnVsbCwgZCksIHZ0KHAsIGwsIHQgLSAxKSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGU6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEpIHsKICAgICAgICBmdW5jdGlvbiBvKGYpIHsKICAgICAgICAgIHJldHVybiBmOwogICAgICAgIH0KICAgICAgICB0ID0gUyh0KSwgYSA9PT0gLTEgJiYgKGEgPSA0Mjk0OTY3Mjk1KTsKICAgICAgICB2YXIgYyA9IEluKHIpOwogICAgICAgIGlmIChpID09PSAwKSB7CiAgICAgICAgICB2YXIgbCA9IDMyIC0gOCAqIHI7CiAgICAgICAgICBvID0gZnVuY3Rpb24oZikgewogICAgICAgICAgICByZXR1cm4gZiA8PCBsID4+PiBsOwogICAgICAgICAgfTsKICAgICAgICB9CiAgICAgICAgdmFyIHAgPSB0LmluZGV4T2YoInVuc2lnbmVkIikgIT0gLTE7CiAgICAgICAgVShuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogbywgdG9XaXJlVHlwZTogZnVuY3Rpb24oZiwgZCkgewogICAgICAgICAgaWYgKHR5cGVvZiBkICE9ICJudW1iZXIiICYmIHR5cGVvZiBkICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBybihkKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgaWYgKGQgPCBpIHx8IGQgPiBhKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXNzaW5nIGEgbnVtYmVyICInICsgcm4oZCkgKyAnIiBmcm9tIEpTIHNpZGUgdG8gQy9DKysgc2lkZSB0byBhbiBhcmd1bWVudCBvZiB0eXBlICInICsgdCArICciLCB3aGljaCBpcyBvdXRzaWRlIHRoZSB2YWxpZCByYW5nZSBbJyArIGkgKyAiLCAiICsgYSArICJdISIpOwogICAgICAgICAgcmV0dXJuIHAgPyBkID4+PiAwIDogZCB8IDA7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBhZSh0LCBjLCBpICE9PSAwKSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGQ6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBmdW5jdGlvbiBpKG8pIHsKICAgICAgICAgIG8gPj49IDI7CiAgICAgICAgICB2YXIgYyA9IEg7CiAgICAgICAgICByZXR1cm4gbmV3IGEoUSwgY1tvICsgMV0sIGNbb10pOwogICAgICAgIH0KICAgICAgICB2YXIgYSA9IFtJbnQ4QXJyYXksIFVpbnQ4QXJyYXksIEludDE2QXJyYXksIFVpbnQxNkFycmF5LCBJbnQzMkFycmF5LCBVaW50MzJBcnJheSwgRmxvYXQzMkFycmF5LCBGbG9hdDY0QXJyYXldW3RdOwogICAgICAgIHIgPSBTKHIpLCBVKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBpLCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGkgfSwgeyBFYTogITAgfSk7CiAgICAgIH0sCiAgICAgIG46IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUyh0KTsKICAgICAgICB2YXIgciA9IHQgPT09ICJzdGQ6OnN0cmluZyI7CiAgICAgICAgVShuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHZhciBhID0gSFtpID4+IDJdOwogICAgICAgICAgICBpZiAocikgZm9yICh2YXIgbyA9IGkgKyA0LCBjID0gMDsgYyA8PSBhOyArK2MpIHsKICAgICAgICAgICAgICB2YXIgbCA9IGkgKyA0ICsgYzsKICAgICAgICAgICAgICBpZiAoYyA9PSBhIHx8IHhbbF0gPT0gMCkgewogICAgICAgICAgICAgICAgaWYgKG8pIHsKICAgICAgICAgICAgICAgICAgdmFyIHAgPSBvLCBmID0geCwgZCA9IHAgKyAobCAtIG8pOwogICAgICAgICAgICAgICAgICBmb3IgKG8gPSBwOyBmW29dICYmICEobyA+PSBkKTsgKSArK287CiAgICAgICAgICAgICAgICAgIGlmICgxNiA8IG8gLSBwICYmIGYuc3ViYXJyYXkgJiYgWG4pIHAgPSBYbi5kZWNvZGUoZi5zdWJhcnJheShwLCBvKSk7CiAgICAgICAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgICAgIGZvciAoZCA9ICIiOyBwIDwgbzsgKSB7CiAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IGZbcCsrXTsKICAgICAgICAgICAgICAgICAgICAgIGlmIChoICYgMTI4KSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ID0gZltwKytdICYgNjM7CiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoaCAmIDIyNCkgPT0gMTkyKSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGggJiAzMSkgPDwgNiB8IHcpOwogICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgVCA9IGZbcCsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICAgIGggPSAoaCAmIDI0MCkgPT0gMjI0ID8gKGggJiAxNSkgPDwgMTIgfCB3IDw8IDYgfCBUIDogKGggJiA3KSA8PCAxOCB8IHcgPDwgMTIgfCBUIDw8IDYgfCBmW3ArK10gJiA2MywgNjU1MzYgPiBoID8gZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGgpIDogKGggLT0gNjU1MzYsIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGggPj4gMTAsIDU2MzIwIHwgaCAmIDEwMjMpKTsKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgcCA9IGQ7CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0gZWxzZSBwID0gIiI7CiAgICAgICAgICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKSB2YXIgeSA9IHA7CiAgICAgICAgICAgICAgICBlbHNlIHkgKz0gIlwwIiwgeSArPSBwOwogICAgICAgICAgICAgICAgbyA9IGwgKyAxOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICBmb3IgKHkgPSBBcnJheShhKSwgYyA9IDA7IGMgPCBhOyArK2MpIHlbY10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHhbaSArIDQgKyBjXSk7CiAgICAgICAgICAgICAgeSA9IHkuam9pbigiIik7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIEIoaSksIHk7CiAgICAgICAgICB9LAogICAgICAgICAgdG9XaXJlVHlwZTogZnVuY3Rpb24oaSwgYSkgewogICAgICAgICAgICBhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgJiYgKGEgPSBuZXcgVWludDhBcnJheShhKSk7CiAgICAgICAgICAgIHZhciBvID0gdHlwZW9mIGEgPT0gInN0cmluZyI7CiAgICAgICAgICAgIG8gfHwgYSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgfHwgYSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5IHx8IGEgaW5zdGFuY2VvZiBJbnQ4QXJyYXkgfHwgdigiQ2Fubm90IHBhc3Mgbm9uLXN0cmluZyB0byBzdGQ6OnN0cmluZyIpOwogICAgICAgICAgICB2YXIgYyA9IChyICYmIG8gPyBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICBmb3IgKHZhciBmID0gMCwgZCA9IDA7IGQgPCBhLmxlbmd0aDsgKytkKSB7CiAgICAgICAgICAgICAgICB2YXIgaCA9IGEuY2hhckNvZGVBdChkKTsKICAgICAgICAgICAgICAgIDU1Mjk2IDw9IGggJiYgNTczNDMgPj0gaCAmJiAoaCA9IDY1NTM2ICsgKChoICYgMTAyMykgPDwgMTApIHwgYS5jaGFyQ29kZUF0KCsrZCkgJiAxMDIzKSwgMTI3ID49IGggPyArK2YgOiBmID0gMjA0NyA+PSBoID8gZiArIDIgOiA2NTUzNSA+PSBoID8gZiArIDMgOiBmICsgNDsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgcmV0dXJuIGY7CiAgICAgICAgICAgIH0gOiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICByZXR1cm4gYS5sZW5ndGg7CiAgICAgICAgICAgIH0pKCksIGwgPSBUbig0ICsgYyArIDEpOwogICAgICAgICAgICBpZiAoSFtsID4+IDJdID0gYywgciAmJiBvKSBIdChhLCBsICsgNCwgYyArIDEpOwogICAgICAgICAgICBlbHNlIGlmIChvKSBmb3IgKG8gPSAwOyBvIDwgYzsgKytvKSB7CiAgICAgICAgICAgICAgdmFyIHAgPSBhLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICAgICAgMjU1IDwgcCAmJiAoQihsKSwgdigiU3RyaW5nIGhhcyBVVEYtMTYgY29kZSB1bml0cyB0aGF0IGRvIG5vdCBmaXQgaW4gOCBiaXRzIikpLCB4W2wgKyA0ICsgb10gPSBwOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgZm9yIChvID0gMDsgbyA8IGM7ICsrbykgeFtsICsgNCArIG9dID0gYVtvXTsKICAgICAgICAgICAgcmV0dXJuIGkgIT09IG51bGwgJiYgaS5wdXNoKEIsIGwpLCBsOwogICAgICAgICAgfSwKICAgICAgICAgIGFyZ1BhY2tBZHZhbmNlOiA4LAogICAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IEFuLAogICAgICAgICAga2E6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgQihpKTsKICAgICAgICAgIH0KICAgICAgICB9KTsKICAgICAgfSwKICAgICAgajogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIGlmIChyID0gUyhyKSwgdCA9PT0gMikKICAgICAgICAgIHZhciBpID0gVXQsIGEgPSB6dCwgbyA9IEJ0LCBjID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHJldHVybiBwbjsKICAgICAgICAgIH0sIGwgPSAxOwogICAgICAgIGVsc2UgdCA9PT0gNCAmJiAoaSA9IER0LCBhID0gVnQsIG8gPSBHdCwgYyA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgcmV0dXJuIEg7CiAgICAgICAgfSwgbCA9IDIpOwogICAgICAgIFUobiwgeyBuYW1lOiByLCBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uKHApIHsKICAgICAgICAgIGZvciAodmFyIGYgPSBIW3AgPj4gMl0sIGQgPSBjKCksIGgsIHcgPSBwICsgNCwgVCA9IDA7IFQgPD0gZjsgKytUKSB7CiAgICAgICAgICAgIHZhciB5ID0gcCArIDQgKyBUICogdDsKICAgICAgICAgICAgKFQgPT0gZiB8fCBkW3kgPj4gbF0gPT0gMCkgJiYgKHcgPSBpKHcsIHkgLSB3KSwgaCA9PT0gdm9pZCAwID8gaCA9IHcgOiAoaCArPSAiXDAiLCBoICs9IHcpLCB3ID0geSArIHQpOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuIEIocCksIGg7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ocCwgZikgewogICAgICAgICAgdHlwZW9mIGYgIT0gInN0cmluZyIgJiYgdigiQ2Fubm90IHBhc3Mgbm9uLXN0cmluZyB0byBDKysgc3RyaW5nIHR5cGUgIiArIHIpOwogICAgICAgICAgdmFyIGQgPSBvKGYpLCBoID0gVG4oNCArIGQgKyB0KTsKICAgICAgICAgIHJldHVybiBIW2ggPj4gMl0gPSBkID4+IGwsIGEoZiwgaCArIDQsIGQgKyB0KSwgcCAhPT0gbnVsbCAmJiBwLnB1c2goQiwgaCksIGg7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwga2E6IGZ1bmN0aW9uKHApIHsKICAgICAgICAgIEIocCk7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgeDogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBTKHQpLCBVKG4sIHsgUWE6ICEwLCBuYW1lOiB0LCBhcmdQYWNrQWR2YW5jZTogMCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbigpIHsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbigpIHsKICAgICAgICB9IH0pOwogICAgICB9LAogICAgICBrOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgbiA9IFZuKG4pLCB0ID0gQ3QodCwgImVtdmFsOjphcyIpOwogICAgICAgIHZhciBpID0gW10sIGEgPSBlbihpKTsKICAgICAgICByZXR1cm4gYltyID4+IDJdID0gYSwgdC50b1dpcmVUeXBlKGksIG4pOwogICAgICB9LAogICAgICBpOiBEbiwKICAgICAgbDogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHJldHVybiBuID0gVm4obiksIHQgPSBWbih0KSwgZW4oblt0XSk7CiAgICAgIH0sCiAgICAgIHA6IGZ1bmN0aW9uKG4pIHsKICAgICAgICB2YXIgdCA9IG9lW25dOwogICAgICAgIHJldHVybiBlbih0ID09PSB2b2lkIDAgPyBTKG4pIDogdCk7CiAgICAgIH0sCiAgICAgIG86IGZ1bmN0aW9uKG4pIHsKICAgICAgICBDbihJW25dLnZhbHVlKSwgRG4obik7CiAgICAgIH0sCiAgICAgIHk6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IEN0KG4sICJfZW12YWxfdGFrZV92YWx1ZSIpLCBuID0gbi5yZWFkVmFsdWVGcm9tUG9pbnRlcih0KSwgZW4obik7CiAgICAgIH0sCiAgICAgIGY6IGZ1bmN0aW9uKCkgewogICAgICAgIHNuKCk7CiAgICAgIH0sCiAgICAgIHE6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICB4LmNvcHlXaXRoaW4obiwgdCwgdCArIHIpOwogICAgICB9LAogICAgICByOiBmdW5jdGlvbihuKSB7CiAgICAgICAgbiA+Pj49IDA7CiAgICAgICAgdmFyIHQgPSB4Lmxlbmd0aDsKICAgICAgICBpZiAoMjE0NzQ4MzY0OCA8IG4pIHJldHVybiAhMTsKICAgICAgICBmb3IgKHZhciByID0gMTsgNCA+PSByOyByICo9IDIpIHsKICAgICAgICAgIHZhciBpID0gdCAqICgxICsgMC4yIC8gcik7CiAgICAgICAgICBpID0gTWF0aC5taW4oaSwgbiArIDEwMDY2MzI5NiksIGkgPSBNYXRoLm1heCgxNjc3NzIxNiwgbiwgaSksIDAgPCBpICUgNjU1MzYgJiYgKGkgKz0gNjU1MzYgLSBpICUgNjU1MzYpOwogICAgICAgICAgbjogewogICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgIEcuZ3JvdyhNYXRoLm1pbigyMTQ3NDgzNjQ4LCBpKSAtIFEuYnl0ZUxlbmd0aCArIDY1NTM1ID4+PiAxNiksIGV0KEcuYnVmZmVyKTsKICAgICAgICAgICAgICB2YXIgYSA9IDE7CiAgICAgICAgICAgICAgYnJlYWsgbjsKICAgICAgICAgICAgfSBjYXRjaCB7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgYSA9IHZvaWQgMDsKICAgICAgICAgIH0KICAgICAgICAgIGlmIChhKSByZXR1cm4gITA7CiAgICAgICAgfQogICAgICAgIHJldHVybiAhMTsKICAgICAgfSwKICAgICAgczogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHZhciByID0gMDsKICAgICAgICByZXR1cm4gVHQoKS5mb3JFYWNoKGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgIHZhciBvID0gdCArIHI7CiAgICAgICAgICBmb3IgKGEgPSBiW24gKyA0ICogYSA+PiAyXSA9IG8sIG8gPSAwOyBvIDwgaS5sZW5ndGg7ICsrbykgJFthKysgPj4gMF0gPSBpLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICAkW2EgPj4gMF0gPSAwLCByICs9IGkubGVuZ3RoICsgMTsKICAgICAgICB9KSwgMDsKICAgICAgfSwKICAgICAgdDogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHZhciByID0gVHQoKTsKICAgICAgICBiW24gPj4gMl0gPSByLmxlbmd0aDsKICAgICAgICB2YXIgaSA9IDA7CiAgICAgICAgcmV0dXJuIHIuZm9yRWFjaChmdW5jdGlvbihhKSB7CiAgICAgICAgICBpICs9IGEubGVuZ3RoICsgMTsKICAgICAgICB9KSwgYlt0ID4+IDJdID0gaSwgMDsKICAgICAgfSwKICAgICAgYTogRwogICAgfTsKICAgIChmdW5jdGlvbigpIHsKICAgICAgZnVuY3Rpb24gbihvKSB7CiAgICAgICAgbyA9IG8uZXhwb3J0cywgbyA9IE10KG8pLCBlLmFzbSA9IG8sIFktLSwgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzICYmIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyhZKSwgWSA9PSAwICYmIG9uICYmIChvID0gb24sIG9uID0gbnVsbCwgbygpKTsKICAgICAgfQogICAgICBmdW5jdGlvbiB0KG8pIHsKICAgICAgICBuKG8uaW5zdGFuY2UpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHIobykgewogICAgICAgIHJldHVybiBadCgpLnRoZW4oZnVuY3Rpb24oYykgewogICAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGMsIGkpOwogICAgICAgIH0pLnRoZW4obywgZnVuY3Rpb24oYykgewogICAgICAgICAgUCgiZmFpbGVkIHRvIGFzeW5jaHJvbm91c2x5IHByZXBhcmUgd2FzbTogIiArIGMpLCBzbihjKTsKICAgICAgICB9KTsKICAgICAgfQogICAgICB2YXIgaSA9IHsgYTogc2UgfTsKICAgICAgaWYgKFkrKywgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzICYmIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyhZKSwgZS5pbnN0YW50aWF0ZVdhc20pIHRyeSB7CiAgICAgICAgdmFyIGEgPSBlLmluc3RhbnRpYXRlV2FzbShpLCBuKTsKICAgICAgICByZXR1cm4gYSA9IE10KGEpOwogICAgICB9IGNhdGNoIChvKSB7CiAgICAgICAgcmV0dXJuIFAoIk1vZHVsZS5pbnN0YW50aWF0ZVdhc20gY2FsbGJhY2sgZmFpbGVkIHdpdGggZXJyb3I6ICIgKyBvKSwgITE7CiAgICAgIH0KICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgewogICAgICAgIGlmIChMIHx8IHR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyAhPSAiZnVuY3Rpb24iIHx8IHN0KCkgfHwgeG4oImZpbGU6Ly8iKSB8fCB0eXBlb2YgZmV0Y2ggIT0gImZ1bmN0aW9uIikgcmV0dXJuIHIodCk7CiAgICAgICAgZmV0Y2goWiwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG8pIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhvLCBpKS50aGVuKHQsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgICAgcmV0dXJuIFAoIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAiICsgYyksIFAoImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uIiksIHIodCk7CiAgICAgICAgICB9KTsKICAgICAgICB9KTsKICAgICAgfSgpLCB7fTsKICAgIH0pKCk7CiAgICB2YXIgT3QgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKE90ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBlLmFzbS5CKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgVG4gPSBlLl9tYWxsb2MgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChUbiA9IGUuX21hbGxvYyA9IGUuYXNtLkMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBCID0gZS5fZnJlZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKEIgPSBlLl9mcmVlID0gZS5hc20uRCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGUuYXNtLkUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZS5hc20uRikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paSA9IGUuYXNtLkcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmkgPSBlLmFzbS5IKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2kgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaSA9IGUuYXNtLkkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaSA9IGUuYXNtLkopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpID0gZS5hc20uSykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9maWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfZmlpID0gZS5hc20uTCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlmID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWYgPSBlLmFzbS5NKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpID0gZS5hc20uTikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWkgPSBlLmFzbS5PKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWkgPSBlLmFzbS5QKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWkgPSBlLmFzbS5RKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaWlpID0gZS5hc20uUikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaSA9IGUuYXNtLlMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGUuYXNtLlQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBlLmFzbS5VKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZS5hc20uVikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBlLmFzbS5XKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWkgPSBlLmFzbS5YKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaSA9IGUuYXNtLlkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWkgPSBlLmFzbS5aKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaSA9IGUuYXNtLl8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBlLmFzbS4kKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGUuYXNtLmFhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZS5hc20uYmEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZS5hc20uY2EpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgdmFyIFBuOwogICAgb24gPSBmdW5jdGlvbiBuKCkgewogICAgICBQbiB8fCAkbigpLCBQbiB8fCAob24gPSBuKTsKICAgIH07CiAgICBmdW5jdGlvbiAkbigpIHsKICAgICAgZnVuY3Rpb24gbigpIHsKICAgICAgICBpZiAoIVBuICYmIChQbiA9ICEwLCBlLmNhbGxlZFJ1biA9ICEwLCAhUm4pKSB7CiAgICAgICAgICBpZiAoeW4oYXQpLCB5bigkdCksIG0oZSksIGUub25SdW50aW1lSW5pdGlhbGl6ZWQgJiYgZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpLCBlLnBvc3RSdW4pIGZvciAodHlwZW9mIGUucG9zdFJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnBvc3RSdW4gPSBbZS5wb3N0UnVuXSk7IGUucG9zdFJ1bi5sZW5ndGg7ICkgewogICAgICAgICAgICB2YXIgdCA9IGUucG9zdFJ1bi5zaGlmdCgpOwogICAgICAgICAgICBvdC51bnNoaWZ0KHQpOwogICAgICAgICAgfQogICAgICAgICAgeW4ob3QpOwogICAgICAgIH0KICAgICAgfQogICAgICBpZiAoISgwIDwgWSkpIHsKICAgICAgICBpZiAoZS5wcmVSdW4pIGZvciAodHlwZW9mIGUucHJlUnVuID09ICJmdW5jdGlvbiIgJiYgKGUucHJlUnVuID0gW2UucHJlUnVuXSk7IGUucHJlUnVuLmxlbmd0aDsgKSBZdCgpOwogICAgICAgIHluKGl0KSwgMCA8IFkgfHwgKGUuc2V0U3RhdHVzID8gKGUuc2V0U3RhdHVzKCJSdW5uaW5nLi4uIiksIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgICBlLnNldFN0YXR1cygiIik7CiAgICAgICAgICB9LCAxKSwgbigpOwogICAgICAgIH0sIDEpKSA6IG4oKSk7CiAgICAgIH0KICAgIH0KICAgIGlmIChlLnJ1biA9ICRuLCBlLnByZUluaXQpIGZvciAodHlwZW9mIGUucHJlSW5pdCA9PSAiZnVuY3Rpb24iICYmIChlLnByZUluaXQgPSBbZS5wcmVJbml0XSk7IDAgPCBlLnByZUluaXQubGVuZ3RoOyApIGUucHJlSW5pdC5wb3AoKSgpOwogICAgcmV0dXJuICRuKCksIHUucmVhZHk7CiAgfTsKfSgpOwpjbGFzcyBwZSB7CiAgY29uc3RydWN0b3IoKSB7CiAgICBZbih0aGlzLCAic2FtV2FzbU1vZHVsZSIpOwogIH0KICBnZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBlKSB7CiAgICByZXR1cm4gewogICAgICBsb2NhdGVGaWxlOiAobSkgPT4gbmV3IFVSTChlIHx8IG0sIHUpLmhyZWYKICAgIH07CiAgfQogIGFzeW5jIGhhbmRsZU1pc3NpbmdPckludmFsaWRTYW1Nb2R1bGUodSwgZSkgewogICAgdHJ5IHsKICAgICAgY29uc3QgbSA9IGF3YWl0IGZldGNoKHUpOwogICAgICBpZiAoIW0ub2spCiAgICAgICAgdGhyb3cgbmV3IEYoCiAgICAgICAgICBgVGhlIHBhdGggdG8gJHtlfSBpcyBpbmNvcnJlY3Qgb3IgdGhlIG1vZHVsZSBpcyBtaXNzaW5nLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgICBjb25zdCBnID0gYXdhaXQgbS5hcnJheUJ1ZmZlcigpOwogICAgICBpZiAoIVdlYkFzc2VtYmx5LnZhbGlkYXRlKGcpKQogICAgICAgIHRocm93IG5ldyBGKAogICAgICAgICAgYFRoZSBwcm92aWRlZCAke2V9IGlzIG5vdCBhIHZhbGlkIFdBU00gbW9kdWxlLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgfSBjYXRjaCAobSkgewogICAgICBpZiAobSBpbnN0YW5jZW9mIEYpCiAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcigKICAgICAgICAgICJZb3UgY2FuIGZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG8gaG9zdCB3YXNtIGZpbGVzIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVycy5pbm5vdmF0cmljcy5jb20vZGlnaXRhbC1vbmJvYXJkaW5nL3RlY2huaWNhbC9yZW1vdGUvZG90LXdlYi1kb2N1bWVudC9sYXRlc3QvZG9jdW1lbnRhdGlvbi8jX2hvc3Rpbmdfc2FtX3dhc20iCiAgICAgICAgKSwgbTsKICAgIH0KICB9CiAgYXN5bmMgZ2V0V2FzbUZpbGVOYW1lKCkgewogICAgcmV0dXJuIGF3YWl0IGNlKCkgPyBrdC5zaW1kIDoga3Quc2FtOwogIH0KICBhc3luYyBpbml0U2FtTW9kdWxlKHUsIGUgPSAiL3dhc20iKSB7CiAgICBpZiAodGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICByZXR1cm47CiAgICBjb25zdCBtID0gYXdhaXQgdGhpcy5nZXRXYXNtRmlsZU5hbWUoKSwgZyA9IGAke2V9LyR7bX1gOwogICAgdHJ5IHsKICAgICAgdGhpcy5zYW1XYXNtTW9kdWxlID0gYXdhaXQgaGUodGhpcy5nZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBnKSk7CiAgICB9IGNhdGNoIHsKICAgICAgdGhyb3cgYXdhaXQgdGhpcy5oYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKGcsIG0pLCBuZXcgRigiQ291bGQgbm90IGluaXQgZGV0ZWN0b3IuIik7CiAgICB9CiAgfQogIGFzeW5jIGdldFNhbVZlcnNpb24oKSB7CiAgICB2YXIgZTsKICAgIGNvbnN0IHUgPSBhd2FpdCAoKGUgPSB0aGlzLnNhbVdhc21Nb2R1bGUpID09IG51bGwgPyB2b2lkIDAgOiBlLmdldEluZm9TdHJpbmcoKSk7CiAgICByZXR1cm4gdSA9PSBudWxsID8gdm9pZCAwIDogdS50cmltKCk7CiAgfQogIC8qCiAgICogSW4gVFMgNS4yLjAgd2FzIGFkZGVkIHNwZWNpYWwga2V5d29yZCAidXNpbmciIHdoaWNoIGNvdWxkIGJlIHBlcmZlY3QgZm9yIHRoaXMgY2FzZS4KICAgKiBVbmZvcnR1bmF0ZWx5LCB2aXRlIHByZWFjdCBwbHVnaW4gZG9lcyBub3Qgc3VwcG9ydCB0aGlzIHZlcnNpb24gb2YgVFMgeWV0LgogICAqIENoZWNrIHBvc3NpYmlsaXR5IG9mIHVzaW5nICJ1c2luZyIga2V5d29yZCB3aGVuIHZpdGUgcHJlYWN0IHBsdWdpbiB1cGRhdGVzCiAgICovCiAgYWxsb2NhdGVNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBGKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICByZXR1cm4gdGhpcy5zYW1XYXNtTW9kdWxlLl9tYWxsb2ModSk7CiAgfQogIHJlbGVhc2VNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBGKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICB0aGlzLnNhbVdhc21Nb2R1bGUuX2ZyZWUodSk7CiAgfQogIHdyaXRlRGF0YVRvTWVtb3J5KHUsIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgRigiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLkhFQVBVOC5zZXQodSwgZSk7CiAgfQp9Ci8qKgogKiBAbGljZW5zZQogKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDCiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wCiAqLwpjb25zdCB4dCA9IFN5bWJvbCgiQ29tbGluay5wcm94eSIpLCB5ZSA9IFN5bWJvbCgiQ29tbGluay5lbmRwb2ludCIpLCBtZSA9IFN5bWJvbCgiQ29tbGluay5yZWxlYXNlUHJveHkiKSwgWm4gPSBTeW1ib2woIkNvbWxpbmsuZmluYWxpemVyIiksIE9uID0gU3ltYm9sKCJDb21saW5rLnRocm93biIpLCBGdCA9IChzKSA9PiB0eXBlb2YgcyA9PSAib2JqZWN0IiAmJiBzICE9PSBudWxsIHx8IHR5cGVvZiBzID09ICJmdW5jdGlvbiIsIHZlID0gewogIGNhbkhhbmRsZTogKHMpID0+IEZ0KHMpICYmIHNbeHRdLAogIHNlcmlhbGl6ZShzKSB7CiAgICBjb25zdCB7IHBvcnQxOiB1LCBwb3J0MjogZSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICByZXR1cm4gS24ocywgdSksIFtlLCBbZV1dOwogIH0sCiAgZGVzZXJpYWxpemUocykgewogICAgcmV0dXJuIHMuc3RhcnQoKSwgX2Uocyk7CiAgfQp9LCBnZSA9IHsKICBjYW5IYW5kbGU6IChzKSA9PiBGdChzKSAmJiBPbiBpbiBzLAogIHNlcmlhbGl6ZSh7IHZhbHVlOiBzIH0pIHsKICAgIGxldCB1OwogICAgcmV0dXJuIHMgaW5zdGFuY2VvZiBFcnJvciA/IHUgPSB7CiAgICAgIGlzRXJyb3I6ICEwLAogICAgICB2YWx1ZTogewogICAgICAgIG1lc3NhZ2U6IHMubWVzc2FnZSwKICAgICAgICBuYW1lOiBzLm5hbWUsCiAgICAgICAgc3RhY2s6IHMuc3RhY2sKICAgICAgfQogICAgfSA6IHUgPSB7IGlzRXJyb3I6ICExLCB2YWx1ZTogcyB9LCBbdSwgW11dOwogIH0sCiAgZGVzZXJpYWxpemUocykgewogICAgdGhyb3cgcy5pc0Vycm9yID8gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3Iocy52YWx1ZS5tZXNzYWdlKSwgcy52YWx1ZSkgOiBzLnZhbHVlOwogIH0KfSwgSXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbCiAgWyJwcm94eSIsIHZlXSwKICBbInRocm93IiwgZ2VdCl0pOwpmdW5jdGlvbiB3ZShzLCB1KSB7CiAgZm9yIChjb25zdCBlIG9mIHMpCiAgICBpZiAodSA9PT0gZSB8fCBlID09PSAiKiIgfHwgZSBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBlLnRlc3QodSkpCiAgICAgIHJldHVybiAhMDsKICByZXR1cm4gITE7Cn0KZnVuY3Rpb24gS24ocywgdSA9IGdsb2JhbFRoaXMsIGUgPSBbIioiXSkgewogIHUuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIG0oZykgewogICAgaWYgKCFnIHx8ICFnLmRhdGEpCiAgICAgIHJldHVybjsKICAgIGlmICghd2UoZSwgZy5vcmlnaW4pKSB7CiAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBvcmlnaW4gJyR7Zy5vcmlnaW59JyBmb3IgY29tbGluayBwcm94eWApOwogICAgICByZXR1cm47CiAgICB9CiAgICBjb25zdCB7IGlkOiBDLCB0eXBlOiBBLCBwYXRoOiBNIH0gPSBPYmplY3QuYXNzaWduKHsgcGF0aDogW10gfSwgZy5kYXRhKSwgVyA9IChnLmRhdGEuYXJndW1lbnRMaXN0IHx8IFtdKS5tYXAoSyk7CiAgICBsZXQgRTsKICAgIHRyeSB7CiAgICAgIGNvbnN0IF8gPSBNLnNsaWNlKDAsIC0xKS5yZWR1Y2UoKFAsIEwpID0+IFBbTF0sIHMpLCBSID0gTS5yZWR1Y2UoKFAsIEwpID0+IFBbTF0sIHMpOwogICAgICBzd2l0Y2ggKEEpIHsKICAgICAgICBjYXNlICJHRVQiOgogICAgICAgICAgRSA9IFI7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJTRVQiOgogICAgICAgICAgX1tNLnNsaWNlKC0xKVswXV0gPSBLKGcuZGF0YS52YWx1ZSksIEUgPSAhMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkFQUExZIjoKICAgICAgICAgIEUgPSBSLmFwcGx5KF8sIFcpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiQ09OU1RSVUNUIjoKICAgICAgICAgIHsKICAgICAgICAgICAgY29uc3QgUCA9IG5ldyBSKC4uLlcpOwogICAgICAgICAgICBFID0gTWUoUCk7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJFTkRQT0lOVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IHsgcG9ydDE6IFAsIHBvcnQyOiBMIH0gPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTsKICAgICAgICAgICAgS24ocywgTCksIEUgPSBQZShQLCBbUF0pOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiUkVMRUFTRSI6CiAgICAgICAgICBFID0gdm9pZCAwOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHJldHVybjsKICAgICAgfQogICAgfSBjYXRjaCAoXykgewogICAgICBFID0geyB2YWx1ZTogXywgW09uXTogMCB9OwogICAgfQogICAgUHJvbWlzZS5yZXNvbHZlKEUpLmNhdGNoKChfKSA9PiAoeyB2YWx1ZTogXywgW09uXTogMCB9KSkudGhlbigoXykgPT4gewogICAgICBjb25zdCBbUiwgUF0gPSBrbihfKTsKICAgICAgdS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFIpLCB7IGlkOiBDIH0pLCBQKSwgQSA9PT0gIlJFTEVBU0UiICYmICh1LnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBtKSwgTHQodSksIFpuIGluIHMgJiYgdHlwZW9mIHNbWm5dID09ICJmdW5jdGlvbiIgJiYgc1tabl0oKSk7CiAgICB9KS5jYXRjaCgoXykgPT4gewogICAgICBjb25zdCBbUiwgUF0gPSBrbih7CiAgICAgICAgdmFsdWU6IG5ldyBUeXBlRXJyb3IoIlVuc2VyaWFsaXphYmxlIHJldHVybiB2YWx1ZSIpLAogICAgICAgIFtPbl06IDAKICAgICAgfSk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBSKSwgeyBpZDogQyB9KSwgUCk7CiAgICB9KTsKICB9KSwgdS5zdGFydCAmJiB1LnN0YXJ0KCk7Cn0KZnVuY3Rpb24gQWUocykgewogIHJldHVybiBzLmNvbnN0cnVjdG9yLm5hbWUgPT09ICJNZXNzYWdlUG9ydCI7Cn0KZnVuY3Rpb24gTHQocykgewogIEFlKHMpICYmIHMuY2xvc2UoKTsKfQpmdW5jdGlvbiBfZShzLCB1KSB7CiAgcmV0dXJuIEpuKHMsIFtdLCB1KTsKfQpmdW5jdGlvbiBXbihzKSB7CiAgaWYgKHMpCiAgICB0aHJvdyBuZXcgRXJyb3IoIlByb3h5IGhhcyBiZWVuIHJlbGVhc2VkIGFuZCBpcyBub3QgdXNlYWJsZSIpOwp9CmZ1bmN0aW9uIGp0KHMpIHsKICByZXR1cm4gYW4ocywgewogICAgdHlwZTogIlJFTEVBU0UiCiAgfSkudGhlbigoKSA9PiB7CiAgICBMdChzKTsKICB9KTsKfQpjb25zdCBibiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLCBTbiA9ICJGaW5hbGl6YXRpb25SZWdpc3RyeSIgaW4gZ2xvYmFsVGhpcyAmJiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKHMpID0+IHsKICBjb25zdCB1ID0gKGJuLmdldChzKSB8fCAwKSAtIDE7CiAgYm4uc2V0KHMsIHUpLCB1ID09PSAwICYmIGp0KHMpOwp9KTsKZnVuY3Rpb24gQ2UocywgdSkgewogIGNvbnN0IGUgPSAoYm4uZ2V0KHUpIHx8IDApICsgMTsKICBibi5zZXQodSwgZSksIFNuICYmIFNuLnJlZ2lzdGVyKHMsIHUsIHMpOwp9CmZ1bmN0aW9uIEVlKHMpIHsKICBTbiAmJiBTbi51bnJlZ2lzdGVyKHMpOwp9CmZ1bmN0aW9uIEpuKHMsIHUgPSBbXSwgZSA9IGZ1bmN0aW9uKCkgewp9KSB7CiAgbGV0IG0gPSAhMTsKICBjb25zdCBnID0gbmV3IFByb3h5KGUsIHsKICAgIGdldChDLCBBKSB7CiAgICAgIGlmIChXbihtKSwgQSA9PT0gbWUpCiAgICAgICAgcmV0dXJuICgpID0+IHsKICAgICAgICAgIEVlKGcpLCBqdChzKSwgbSA9ICEwOwogICAgICAgIH07CiAgICAgIGlmIChBID09PSAidGhlbiIpIHsKICAgICAgICBpZiAodS5sZW5ndGggPT09IDApCiAgICAgICAgICByZXR1cm4geyB0aGVuOiAoKSA9PiBnIH07CiAgICAgICAgY29uc3QgTSA9IGFuKHMsIHsKICAgICAgICAgIHR5cGU6ICJHRVQiLAogICAgICAgICAgcGF0aDogdS5tYXAoKFcpID0+IFcudG9TdHJpbmcoKSkKICAgICAgICB9KS50aGVuKEspOwogICAgICAgIHJldHVybiBNLnRoZW4uYmluZChNKTsKICAgICAgfQogICAgICByZXR1cm4gSm4ocywgWy4uLnUsIEFdKTsKICAgIH0sCiAgICBzZXQoQywgQSwgTSkgewogICAgICBXbihtKTsKICAgICAgY29uc3QgW1csIEVdID0ga24oTSk7CiAgICAgIHJldHVybiBhbihzLCB7CiAgICAgICAgdHlwZTogIlNFVCIsCiAgICAgICAgcGF0aDogWy4uLnUsIEFdLm1hcCgoXykgPT4gXy50b1N0cmluZygpKSwKICAgICAgICB2YWx1ZTogVwogICAgICB9LCBFKS50aGVuKEspOwogICAgfSwKICAgIGFwcGx5KEMsIEEsIE0pIHsKICAgICAgV24obSk7CiAgICAgIGNvbnN0IFcgPSB1W3UubGVuZ3RoIC0gMV07CiAgICAgIGlmIChXID09PSB5ZSkKICAgICAgICByZXR1cm4gYW4ocywgewogICAgICAgICAgdHlwZTogIkVORFBPSU5UIgogICAgICAgIH0pLnRoZW4oSyk7CiAgICAgIGlmIChXID09PSAiYmluZCIpCiAgICAgICAgcmV0dXJuIEpuKHMsIHUuc2xpY2UoMCwgLTEpKTsKICAgICAgY29uc3QgW0UsIF9dID0gUnQoTSk7CiAgICAgIHJldHVybiBhbihzLCB7CiAgICAgICAgdHlwZTogIkFQUExZIiwKICAgICAgICBwYXRoOiB1Lm1hcCgoUikgPT4gUi50b1N0cmluZygpKSwKICAgICAgICBhcmd1bWVudExpc3Q6IEUKICAgICAgfSwgXykudGhlbihLKTsKICAgIH0sCiAgICBjb25zdHJ1Y3QoQywgQSkgewogICAgICBXbihtKTsKICAgICAgY29uc3QgW00sIFddID0gUnQoQSk7CiAgICAgIHJldHVybiBhbihzLCB7CiAgICAgICAgdHlwZTogIkNPTlNUUlVDVCIsCiAgICAgICAgcGF0aDogdS5tYXAoKEUpID0+IEUudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBNCiAgICAgIH0sIFcpLnRoZW4oSyk7CiAgICB9CiAgfSk7CiAgcmV0dXJuIENlKGcsIHMpLCBnOwp9CmZ1bmN0aW9uIFRlKHMpIHsKICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgcyk7Cn0KZnVuY3Rpb24gUnQocykgewogIGNvbnN0IHUgPSBzLm1hcChrbik7CiAgcmV0dXJuIFt1Lm1hcCgoZSkgPT4gZVswXSksIFRlKHUubWFwKChlKSA9PiBlWzFdKSldOwp9CmNvbnN0IE50ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7CmZ1bmN0aW9uIFBlKHMsIHUpIHsKICByZXR1cm4gTnQuc2V0KHMsIHUpLCBzOwp9CmZ1bmN0aW9uIE1lKHMpIHsKICByZXR1cm4gT2JqZWN0LmFzc2lnbihzLCB7IFt4dF06ICEwIH0pOwp9CmZ1bmN0aW9uIGtuKHMpIHsKICBmb3IgKGNvbnN0IFt1LCBlXSBvZiBJdCkKICAgIGlmIChlLmNhbkhhbmRsZShzKSkgewogICAgICBjb25zdCBbbSwgZ10gPSBlLnNlcmlhbGl6ZShzKTsKICAgICAgcmV0dXJuIFsKICAgICAgICB7CiAgICAgICAgICB0eXBlOiAiSEFORExFUiIsCiAgICAgICAgICBuYW1lOiB1LAogICAgICAgICAgdmFsdWU6IG0KICAgICAgICB9LAogICAgICAgIGcKICAgICAgXTsKICAgIH0KICByZXR1cm4gWwogICAgewogICAgICB0eXBlOiAiUkFXIiwKICAgICAgdmFsdWU6IHMKICAgIH0sCiAgICBOdC5nZXQocykgfHwgW10KICBdOwp9CmZ1bmN0aW9uIEsocykgewogIHN3aXRjaCAocy50eXBlKSB7CiAgICBjYXNlICJIQU5ETEVSIjoKICAgICAgcmV0dXJuIEl0LmdldChzLm5hbWUpLmRlc2VyaWFsaXplKHMudmFsdWUpOwogICAgY2FzZSAiUkFXIjoKICAgICAgcmV0dXJuIHMudmFsdWU7CiAgfQp9CmZ1bmN0aW9uIGFuKHMsIHUsIGUpIHsKICByZXR1cm4gbmV3IFByb21pc2UoKG0pID0+IHsKICAgIGNvbnN0IGcgPSBXZSgpOwogICAgcy5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgZnVuY3Rpb24gQyhBKSB7CiAgICAgICFBLmRhdGEgfHwgIUEuZGF0YS5pZCB8fCBBLmRhdGEuaWQgIT09IGcgfHwgKHMucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIEMpLCBtKEEuZGF0YSkpOwogICAgfSksIHMuc3RhcnQgJiYgcy5zdGFydCgpLCBzLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oeyBpZDogZyB9LCB1KSwgZSk7CiAgfSk7Cn0KZnVuY3Rpb24gV2UoKSB7CiAgcmV0dXJuIG5ldyBBcnJheSg0KS5maWxsKDApLm1hcCgoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikudG9TdHJpbmcoMTYpKS5qb2luKCItIik7Cn0KY2xhc3MgT2UgZXh0ZW5kcyBwZSB7CiAgcGFyc2VSYXdEYXRhKHUpIHsKICAgIGNvbnN0IHsgYnJpZ2h0bmVzczogZSwgaG90c3BvdHM6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIEMgPSB7CiAgICAgIGNvbmZpZGVuY2U6IHUuY29uZmlkZW5jZSAvIDFlMywKICAgICAgdG9wTGVmdDogewogICAgICAgIHg6IHUueDAsCiAgICAgICAgeTogdS55MAogICAgICB9LAogICAgICB0b3BSaWdodDogewogICAgICAgIHg6IHUueDEsCiAgICAgICAgeTogdS55MQogICAgICB9LAogICAgICBib3R0b21SaWdodDogewogICAgICAgIHg6IHUueDIsCiAgICAgICAgeTogdS55MgogICAgICB9LAogICAgICBib3R0b21MZWZ0OiB7CiAgICAgICAgeDogdS54MywKICAgICAgICB5OiB1LnkzCiAgICAgIH0sCiAgICAgIGJyaWdodG5lc3M6IGUgLyAxZTMsCiAgICAgIGhvdHNwb3RzOiBtIC8gMWUzLAogICAgICBzaGFycG5lc3M6IGcgLyAxZTMKICAgIH07CiAgICByZXR1cm4gewogICAgICAuLi5DLAogICAgICBzbWFsbGVzdEVkZ2U6IGRlKEMpCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QodSwgZSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBGKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBtID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpLCBnID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpOwogICAgdGhpcy53cml0ZURhdGFUb01lbW9yeSh1LCBtKSwgdGhpcy5zYW1XYXNtTW9kdWxlLmNvbnZlcnRUb1NhbUNvbG9ySW1hZ2UoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBtLAogICAgICBmZS5SR0JBLAogICAgICBnCiAgICApOwogICAgY29uc3QgQyA9IHRoaXMuc2FtV2FzbU1vZHVsZS5kZXRlY3REb2N1bWVudFdpdGhJbWFnZVBhcmFtZXRlcnMoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLAogICAgICAwLAogICAgICAvLyBwYXJhbVdpZHRoIHNob3VsZCBiZSAwIChkZWZhdWx0IHZhbHVlKQogICAgICAwLAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBkb2N1bWVudERldGVjdGlvbk9wdGlvbnMgLSBzcGVlZCBvcHRpb24gLSBzZXQgYXMgInN0YW5kYXJkIGZ1bGwgbWV0aG9kIgogICAgKTsKICAgIHJldHVybiB0aGlzLnJlbGVhc2VNZW1vcnkobSksIHRoaXMucmVsZWFzZU1lbW9yeShnKSwgdGhpcy5wYXJzZVJhd0RhdGEoQyk7CiAgfQp9CktuKE9lKTsK", a1 = (x) => Uint8Array.from(atob(x), (o) => o.charCodeAt(0)), ha = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", a1(Cc)], { type: "text/javascript;charset=utf-8" });
function s1(x) {
  let o;
  try {
    if (o = ha && (window.URL || window.webkitURL).createObjectURL(ha), !o) throw "";
    const t = new Worker(o, {
      type: "module",
      name: x == null ? void 0 : x.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(o);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Cc,
      {
        type: "module",
        name: x == null ? void 0 : x.name
      }
    );
  }
}
var G0, x0;
class c1 {
  constructor(o) {
    Ke(this, G0);
    Ke(this, x0);
    Se(this, G0, o), Se(this, x0, /* @__PURE__ */ new Map());
  }
  validate() {
    z(this, G0).forEach((o) => {
      z(this, x0).set(o.name, o.evaluate());
    });
  }
  isValid() {
    return Array.from(z(this, x0).values()).every((o) => o);
  }
  get result() {
    return z(this, x0);
  }
  get validators() {
    return z(this, G0);
  }
}
G0 = new WeakMap(), x0 = new WeakMap();
var fn, o0;
class u0 {
  constructor(o, t) {
    Ke(this, fn);
    Ke(this, o0);
    Se(this, fn, o), Se(this, o0, t);
  }
  get threshold() {
    return z(this, o0);
  }
  get name() {
    return z(this, fn);
  }
  isValueBelowThreshold(o) {
    return o < z(this, o0);
  }
  isValueAboveThreshold(o) {
    return o > z(this, o0);
  }
}
fn = new WeakMap(), o0 = new WeakMap();
var Cn;
class g1 extends u0 {
  constructor(t, e) {
    super("isNotDim", t);
    Ke(this, Cn);
    Se(this, Cn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(z(this, Cn));
  }
}
Cn = new WeakMap();
var pn;
class d1 extends u0 {
  constructor(t, e) {
    super("isNotSmall", t);
    Ke(this, pn);
    Se(this, pn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(z(this, pn));
  }
}
pn = new WeakMap();
var hn;
class u1 extends u0 {
  constructor(t, e) {
    super("isNotBright", t);
    Ke(this, hn);
    Se(this, hn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(z(this, hn));
  }
}
hn = new WeakMap();
var mn;
class l1 extends u0 {
  constructor(t, e) {
    super("isPresent", t);
    Ke(this, mn);
    Se(this, mn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(z(this, mn));
  }
}
mn = new WeakMap();
var bn;
class I1 extends u0 {
  constructor(t, e) {
    super("isSharp", t);
    Ke(this, bn);
    Se(this, bn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(z(this, bn));
  }
}
bn = new WeakMap();
var An;
class f1 extends u0 {
  constructor(t, e) {
    super("noHotspots", t);
    Ke(this, An);
    Se(this, An, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(z(this, An));
  }
}
An = new WeakMap();
var yn, Wn;
class C1 extends u0 {
  constructor(t, e, n) {
    super("isNotOutOfBounds", t);
    Ke(this, yn);
    Ke(this, Wn);
    Se(this, yn, e), Se(this, Wn, n);
  }
  evaluate() {
    const t = ac(z(this, Wn), this.threshold), { bottomLeft: e, bottomRight: n, topLeft: r, topRight: i } = z(this, yn), a = {};
    return a.topLeft = r, a.topRight = i, a.bottomLeft = e, a.bottomRight = n, ul(a, t);
  }
}
yn = new WeakMap(), Wn = new WeakMap();
class p1 {
  static getDocumentValidationInstance(o, t, e) {
    return new c1([new l1(o.confidenceThreshold, t.confidence), new I1(o.sharpnessThreshold, t.sharpness), new g1(o.brightnessLowThreshold, t.brightness), new u1(o.brightnessHighThreshold, t.brightness), new f1(o.hotspotsScoreThreshold, t.hotspots), new C1(o.outOfBoundsThreshold, t, e), new d1(o.sizeSmallThreshold, t.smallestEdge)]);
  }
}
const Fx = class Fx extends Ul {
  constructor() {
    super(...arguments);
    J(this, "detector");
    J(this, "className", "DocumentController");
    J(this, "fallbackInstruction", bt.DOCUMENT_NOT_PRESENT);
    J(this, "getInstructionCode", (t, e) => {
      var r;
      if (this.isInCandidateSelection) return bt.CANDIDATE_SELECTION;
      if ((r = this.lastImage) != null && r.isValid && e) return bt.CANDIDATE_SELECTION;
      if (this.lastImage && e) return this.lastImage.instructionCode;
      const [n] = this.getInstructionCodesForValidators(t);
      return n ?? this.fallbackInstruction;
    });
    J(this, "getInstructionCodesForValidators", (t) => {
      const e = [];
      return Array.from(t).forEach(([n, r]) => {
        !r && e.push(su[n]);
      }), e;
    });
    J(this, "transformSmallestEdgeRelativeToDetectionFrameWidth", (t, e) => {
      const n = Ju(t), r = n / e.width, i = { ...t };
      return i.smallestEdge = r, i;
    });
  }
  static async init() {
    const t = new s1(), e = lc(t), n = new Fx(), r = await new e();
    this._instance = n, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  restart() {
    super.restart(), Ia(yt.INSTRUCTION_CHANGED, this.fallbackInstruction, Fu);
  }
  validateDetectedObject(t, e) {
    const n = p1.getDocumentValidationInstance(this.getThresholds(), t, e);
    return n.validate(), n;
  }
  async processImage({ image: t, timestamp: e }) {
    var A;
    const n = {};
    n.width = t.width, n.height = t.height;
    const r = n, i = Jr(r), a = al(t, i), s = sl(a), c = {};
    c.width = a.width, c.height = a.height;
    const d = c;
    let g = await this.detector.detect(s, d);
    g = Rl(r, g), g = this.transformSmallestEdgeRelativeToDetectionFrameWidth(g, d);
    const C = this.validateDetectedObject(g, r), { result: l } = C, p = this.getInstructionCode(l, C.isValid());
    if (l.get("isPresent")) {
      const u = {};
      u.image = s, u.timestamp = e, this.collectImagesForDuplicateDetection(u);
    }
    if (this.isInCandidateSelection) {
      if (this.bestImage && C.isValid() && this.isNewImageBetter(this.bestImage.detection, g)) {
        const u = { image: t, detection: _0(g) };
        this.bestImage = u, this.candidateSelectionImages.push(u);
      }
    } else if ((A = this.lastImage) != null && A.isValid && C.isValid()) {
      const u = { image: t, detection: _0(g) }, v = {};
      v.image = this.lastImage.image, v.detection = this.lastImage.detection;
      const Z = v;
      this.isNewImageBetter(Z.detection, u.detection) ? this.bestImage = u : this.bestImage = Z, this.candidateSelectionImages.push(Z, u), this.isInCandidateSelection = !0;
    } else C.isValid() ? this.lastImage = { instructionCode: p, isValid: !0, image: t, detection: _0(g) } : this.lastImage = { instructionCode: p, isValid: !1, image: t, detection: _0(g) };
    const b = { detectedDocument: _0(g), instructionCode: p, isInCandidateSelection: this.isInCandidateSelection, invalidValidators: this.getInstructionCodesForValidators(l) };
    return this.detectionRecord.push(b.detectedDocument), Ia(yt.INSTRUCTION_CHANGED, p), hl(yt.DETECTED_DOCUMENT_CHANGED, b.detectedDocument, this.getThresholds().confidenceThreshold), b;
  }
};
J(Fx, "_instance");
let fr = Fx;
const h1 = (x, o) => {
  const { handleError: t } = Bn(), [e, n] = at();
  He(() => {
    (async () => {
      const a = await fr.getInstance();
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
var zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, pc = {}, ma = {}, m1 = b1;
function b1(x, o) {
  for (var t = new Array(arguments.length - 1), e = 0, n = 2, r = !0; n < arguments.length; )
    t[e++] = arguments[n++];
  return new Promise(function(i, a) {
    t[e] = function(s) {
      if (r)
        if (r = !1, s)
          a(s);
        else {
          for (var c = new Array(arguments.length - 1), d = 0; d < c.length; )
            c[d++] = arguments[d];
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
var hc = {};
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
    for (var c = null, d = [], g = 0, C = 0, l; a < s; ) {
      var p = i[a++];
      switch (C) {
        case 0:
          d[g++] = t[p >> 2], l = (p & 3) << 4, C = 1;
          break;
        case 1:
          d[g++] = t[l | p >> 4], l = (p & 15) << 2, C = 2;
          break;
        case 2:
          d[g++] = t[l | p >> 6], d[g++] = t[p & 63], C = 0;
          break;
      }
      g > 8191 && ((c || (c = [])).push(String.fromCharCode.apply(String, d)), g = 0);
    }
    return C && (d[g++] = t[l], d[g++] = 61, C === 1 && (d[g++] = 61)), c ? (g && c.push(String.fromCharCode.apply(String, d.slice(0, g))), c.join("")) : String.fromCharCode.apply(String, d.slice(0, g));
  };
  var r = "invalid encoding";
  o.decode = function(i, a, s) {
    for (var c = s, d = 0, g, C = 0; C < i.length; ) {
      var l = i.charCodeAt(C++);
      if (l === 61 && d > 1)
        break;
      if ((l = e[l]) === void 0)
        throw Error(r);
      switch (d) {
        case 0:
          g = l, d = 1;
          break;
        case 1:
          a[s++] = g << 2 | (l & 48) >> 4, g = l, d = 2;
          break;
        case 2:
          a[s++] = (g & 15) << 4 | (l & 60) >> 2, g = l, d = 3;
          break;
        case 3:
          a[s++] = (g & 3) << 6 | l, d = 0;
          break;
      }
    }
    if (d === 1)
      throw Error(r);
    return s - c;
  }, o.test = function(i) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(i);
  };
})(hc);
var A1 = eo;
function eo() {
  this._listeners = {};
}
eo.prototype.on = function(x, o, t) {
  return (this._listeners[x] || (this._listeners[x] = [])).push({
    fn: o,
    ctx: t || this
  }), this;
};
eo.prototype.off = function(x, o) {
  if (x === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[x] = [];
  else
    for (var t = this._listeners[x], e = 0; e < t.length; )
      t[e].fn === o ? t.splice(e, 1) : ++e;
  return this;
};
eo.prototype.emit = function(x) {
  var o = this._listeners[x];
  if (o) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < o.length; )
      o[e].fn.apply(o[e++].ctx, t);
  }
  return this;
};
var y1 = ba(ba);
function ba(x) {
  return typeof Float32Array < "u" ? function() {
    var o = new Float32Array([-0]), t = new Uint8Array(o.buffer), e = t[3] === 128;
    function n(s, c, d) {
      o[0] = s, c[d] = t[0], c[d + 1] = t[1], c[d + 2] = t[2], c[d + 3] = t[3];
    }
    function r(s, c, d) {
      o[0] = s, c[d] = t[3], c[d + 1] = t[2], c[d + 2] = t[1], c[d + 3] = t[0];
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
    x.writeFloatLE = o.bind(null, Aa), x.writeFloatBE = o.bind(null, ya);
    function t(e, n, r) {
      var i = e(n, r), a = (i >> 31) * 2 + 1, s = i >>> 23 & 255, c = i & 8388607;
      return s === 255 ? c ? NaN : a * (1 / 0) : s === 0 ? a * 1401298464324817e-60 * c : a * Math.pow(2, s - 150) * (c + 8388608);
    }
    x.readFloatLE = t.bind(null, Wa), x.readFloatBE = t.bind(null, va);
  }(), typeof Float64Array < "u" ? function() {
    var o = new Float64Array([-0]), t = new Uint8Array(o.buffer), e = t[7] === 128;
    function n(s, c, d) {
      o[0] = s, c[d] = t[0], c[d + 1] = t[1], c[d + 2] = t[2], c[d + 3] = t[3], c[d + 4] = t[4], c[d + 5] = t[5], c[d + 6] = t[6], c[d + 7] = t[7];
    }
    function r(s, c, d) {
      o[0] = s, c[d] = t[7], c[d + 1] = t[6], c[d + 2] = t[5], c[d + 3] = t[4], c[d + 4] = t[3], c[d + 5] = t[2], c[d + 6] = t[1], c[d + 7] = t[0];
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
        var d;
        if (i < 22250738585072014e-324)
          d = i / 5e-324, e(d >>> 0, a, s + n), e((c << 31 | d / 4294967296) >>> 0, a, s + r);
        else {
          var g = Math.floor(Math.log(i) / Math.LN2);
          g === 1024 && (g = 1023), d = i * Math.pow(2, -g), e(d * 4503599627370496 >>> 0, a, s + n), e((c << 31 | g + 1023 << 20 | d * 1048576 & 1048575) >>> 0, a, s + r);
        }
      }
    }
    x.writeDoubleLE = o.bind(null, Aa, 0, 4), x.writeDoubleBE = o.bind(null, ya, 4, 0);
    function t(e, n, r, i, a) {
      var s = e(i, a + n), c = e(i, a + r), d = (c >> 31) * 2 + 1, g = c >>> 20 & 2047, C = 4294967296 * (c & 1048575) + s;
      return g === 2047 ? C ? NaN : d * (1 / 0) : g === 0 ? d * 5e-324 * C : d * Math.pow(2, g - 1075) * (C + 4503599627370496);
    }
    x.readDoubleLE = t.bind(null, Wa, 0, 4), x.readDoubleBE = t.bind(null, va, 4, 0);
  }(), x;
}
function Aa(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
function ya(x, o, t) {
  o[t] = x >>> 24, o[t + 1] = x >>> 16 & 255, o[t + 2] = x >>> 8 & 255, o[t + 3] = x & 255;
}
function Wa(x, o) {
  return (x[o] | x[o + 1] << 8 | x[o + 2] << 16 | x[o + 3] << 24) >>> 0;
}
function va(x, o) {
  return (x[o] << 24 | x[o + 1] << 16 | x[o + 2] << 8 | x[o + 3]) >>> 0;
}
function wa(x) {
  throw new Error('Could not dynamically require "' + x + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var W1 = v1;
function v1(x) {
  try {
    if (typeof wa != "function")
      return null;
    var o = wa(x);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var mc = {};
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
})(mc);
var w1 = S1;
function S1(x, o, t) {
  var e = t || 8192, n = e >>> 1, r = null, i = e;
  return function(a) {
    if (a < 1 || a > n)
      return x(a);
    i + a > e && (r = x(e), i = 0);
    var s = o.call(r, i, i += a);
    return i & 7 && (i = (i | 7) + 1), s;
  };
}
var Oo, Sa;
function B1() {
  if (Sa)
    return Oo;
  Sa = 1, Oo = o;
  var x = l0();
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
  }, Oo;
}
var Ba;
function l0() {
  return Ba || (Ba = 1, function(x) {
    var o = x;
    o.asPromise = m1, o.base64 = hc, o.EventEmitter = A1, o.float = y1, o.inquire = W1, o.utf8 = mc, o.pool = w1, o.LongBits = B1(), o.isNode = !!(typeof zt < "u" && zt && zt.process && zt.process.versions && zt.process.versions.node), o.global = o.isNode && zt || typeof window < "u" && window || typeof self < "u" && self || zt, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(ma)), ma;
}
var bc = _, st = l0(), Cr, to = st.LongBits, ka = st.base64, Ga = st.utf8;
function Gn(x, o, t) {
  this.fn = x, this.len = o, this.next = void 0, this.val = t;
}
function Ur() {
}
function k1(x) {
  this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
}
function _() {
  this.len = 0, this.head = new Gn(Ur, 0, 0), this.tail = this.head, this.states = null;
}
var Ac = function() {
  return st.Buffer ? function() {
    return (_.create = function() {
      return new Cr();
    })();
  } : function() {
    return new _();
  };
};
_.create = Ac();
_.alloc = function(x) {
  return new st.Array(x);
};
st.Array !== Array && (_.alloc = st.pool(_.alloc, st.Array.prototype.subarray));
_.prototype._push = function(x, o, t) {
  return this.tail = this.tail.next = new Gn(x, o, t), this.len += o, this;
};
function _r(x, o, t) {
  o[t] = x & 255;
}
function G1(x, o, t) {
  for (; x > 127; )
    o[t++] = x & 127 | 128, x >>>= 7;
  o[t] = x;
}
function Qr(x, o) {
  this.len = x, this.next = void 0, this.val = o;
}
Qr.prototype = Object.create(Gn.prototype);
Qr.prototype.fn = G1;
_.prototype.uint32 = function(x) {
  return this.len += (this.tail = this.tail.next = new Qr(
    (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
    x
  )).len, this;
};
_.prototype.int32 = function(x) {
  return x < 0 ? this._push(zr, 10, to.fromNumber(x)) : this.uint32(x);
};
_.prototype.sint32 = function(x) {
  return this.uint32((x << 1 ^ x >> 31) >>> 0);
};
function zr(x, o, t) {
  for (; x.hi; )
    o[t++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
  for (; x.lo > 127; )
    o[t++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
  o[t++] = x.lo;
}
_.prototype.uint64 = function(x) {
  var o = to.from(x);
  return this._push(zr, o.length(), o);
};
_.prototype.int64 = _.prototype.uint64;
_.prototype.sint64 = function(x) {
  var o = to.from(x).zzEncode();
  return this._push(zr, o.length(), o);
};
_.prototype.bool = function(x) {
  return this._push(_r, 1, x ? 1 : 0);
};
function pr(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
_.prototype.fixed32 = function(x) {
  return this._push(pr, 4, x >>> 0);
};
_.prototype.sfixed32 = _.prototype.fixed32;
_.prototype.fixed64 = function(x) {
  var o = to.from(x);
  return this._push(pr, 4, o.lo)._push(pr, 4, o.hi);
};
_.prototype.sfixed64 = _.prototype.fixed64;
_.prototype.float = function(x) {
  return this._push(st.float.writeFloatLE, 4, x);
};
_.prototype.double = function(x) {
  return this._push(st.float.writeDoubleLE, 8, x);
};
var O1 = st.Array.prototype.set ? function(x, o, t) {
  o.set(x, t);
} : function(x, o, t) {
  for (var e = 0; e < x.length; ++e)
    o[t + e] = x[e];
};
_.prototype.bytes = function(x) {
  var o = x.length >>> 0;
  if (!o)
    return this._push(_r, 1, 0);
  if (st.isString(x)) {
    var t = _.alloc(o = ka.length(x));
    ka.decode(x, t, 0), x = t;
  }
  return this.uint32(o)._push(O1, o, x);
};
_.prototype.string = function(x) {
  var o = Ga.length(x);
  return o ? this.uint32(o)._push(Ga.write, o, x) : this._push(_r, 1, 0);
};
_.prototype.fork = function() {
  return this.states = new k1(this), this.head = this.tail = new Gn(Ur, 0, 0), this.len = 0, this;
};
_.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Gn(Ur, 0, 0), this.len = 0), this;
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
  Cr = x, _.create = Ac(), Cr._configure();
};
var H1 = Wt, yc = bc;
(Wt.prototype = Object.create(yc.prototype)).constructor = Wt;
var Ft = l0();
function Wt() {
  yc.call(this);
}
Wt._configure = function() {
  Wt.alloc = Ft._Buffer_allocUnsafe, Wt.writeBytesBuffer = Ft.Buffer && Ft.Buffer.prototype instanceof Uint8Array && Ft.Buffer.prototype.set.name === "set" ? function(x, o, t) {
    o.set(x, t);
  } : function(x, o, t) {
    if (x.copy)
      x.copy(o, t, 0, x.length);
    else
      for (var e = 0; e < x.length; )
        o[t++] = x[e++];
  };
};
Wt.prototype.bytes = function(x) {
  Ft.isString(x) && (x = Ft._Buffer_from(x, "base64"));
  var o = x.length >>> 0;
  return this.uint32(o), o && this._push(Wt.writeBytesBuffer, o, x), this;
};
function Z1(x, o, t) {
  x.length < 40 ? Ft.utf8.write(x, o, t) : o.utf8Write ? o.utf8Write(x, t) : o.write(x, t);
}
Wt.prototype.string = function(x) {
  var o = Ft.Buffer.byteLength(x);
  return this.uint32(o), o && this._push(Z1, o, x), this;
};
Wt._configure();
var Wc = de, vt = l0(), hr, vc = vt.LongBits, R1 = vt.utf8;
function Ct(x, o) {
  return RangeError("index out of range: " + x.pos + " + " + (o || 1) + " > " + x.len);
}
function de(x) {
  this.buf = x, this.pos = 0, this.len = x.length;
}
var Oa = typeof Uint8Array < "u" ? function(x) {
  if (x instanceof Uint8Array || Array.isArray(x))
    return new de(x);
  throw Error("illegal buffer");
} : function(x) {
  if (Array.isArray(x))
    return new de(x);
  throw Error("illegal buffer");
}, wc = function() {
  return vt.Buffer ? function(x) {
    return (de.create = function(o) {
      return vt.Buffer.isBuffer(o) ? new hr(o) : Oa(o);
    })(x);
  } : Oa;
};
de.create = wc();
de.prototype._slice = vt.Array.prototype.subarray || /* istanbul ignore next */
vt.Array.prototype.slice;
de.prototype.uint32 = /* @__PURE__ */ function() {
  var x = 4294967295;
  return function() {
    if (x = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (x = (x | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return x;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, Ct(this, 10);
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
function Ho() {
  var x = new vc(0, 0), o = 0;
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
        throw Ct(this);
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
        throw Ct(this);
      if (x.hi = (x.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return x;
    }
  throw Error("invalid varint encoding");
}
de.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Tx(x, o) {
  return (x[o - 4] | x[o - 3] << 8 | x[o - 2] << 16 | x[o - 1] << 24) >>> 0;
}
de.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Ct(this, 4);
  return Tx(this.buf, this.pos += 4);
};
de.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Ct(this, 4);
  return Tx(this.buf, this.pos += 4) | 0;
};
function Ha() {
  if (this.pos + 8 > this.len)
    throw Ct(this, 8);
  return new vc(Tx(this.buf, this.pos += 4), Tx(this.buf, this.pos += 4));
}
de.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw Ct(this, 4);
  var x = vt.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, x;
};
de.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw Ct(this, 4);
  var x = vt.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, x;
};
de.prototype.bytes = function() {
  var x = this.uint32(), o = this.pos, t = this.pos + x;
  if (t > this.len)
    throw Ct(this, x);
  return this.pos += x, Array.isArray(this.buf) ? this.buf.slice(o, t) : o === t ? new this.buf.constructor(0) : this._slice.call(this.buf, o, t);
};
de.prototype.string = function() {
  var x = this.bytes();
  return R1.read(x, 0, x.length);
};
de.prototype.skip = function(x) {
  if (typeof x == "number") {
    if (this.pos + x > this.len)
      throw Ct(this, x);
    this.pos += x;
  } else
    do
      if (this.pos >= this.len)
        throw Ct(this);
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
  hr = x, de.create = wc(), hr._configure();
  var o = vt.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  vt.merge(de.prototype, {
    int64: function() {
      return Ho.call(this)[o](!1);
    },
    uint64: function() {
      return Ho.call(this)[o](!0);
    },
    sint64: function() {
      return Ho.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return Ha.call(this)[o](!0);
    },
    sfixed64: function() {
      return Ha.call(this)[o](!1);
    }
  });
};
var K1 = g0, Sc = Wc;
(g0.prototype = Object.create(Sc.prototype)).constructor = g0;
var Za = l0();
function g0(x) {
  Sc.call(this, x);
}
g0._configure = function() {
  Za.Buffer && (g0.prototype._slice = Za.Buffer.prototype.slice);
};
g0.prototype.string = function() {
  var x = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + x, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + x, this.len));
};
g0._configure();
var Bc = {}, P1 = In, qr = l0();
(In.prototype = Object.create(qr.EventEmitter.prototype)).constructor = In;
function In(x, o, t) {
  if (typeof x != "function")
    throw TypeError("rpcImpl must be a function");
  qr.EventEmitter.call(this), this.rpcImpl = x, this.requestDelimited = !!o, this.responseDelimited = !!t;
}
In.prototype.rpcCall = function x(o, t, e, n, r) {
  if (!n)
    throw TypeError("request must be specified");
  var i = this;
  if (!r)
    return qr.asPromise(x, i, o, t, e, n);
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
  o.Service = P1;
})(Bc);
var V1 = {};
(function(x) {
  var o = x;
  o.build = "minimal", o.Writer = bc, o.BufferWriter = H1, o.Reader = Wc, o.BufferReader = K1, o.util = l0(), o.rpc = Bc, o.roots = V1, o.configure = t;
  function t() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  t();
})(pc);
var te = pc;
const B = te.Reader, se = te.Writer, W = te.util, h = te.roots.default || (te.roots.default = {}), N0 = h.dot = (() => {
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
      return e || (e = se.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
      let n = e === void 0 ? t.len : t.pos + e, r = new h.dot.Content();
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
      if (t instanceof h.dot.Content)
        return t;
      let e = new h.dot.Content();
      return t.token != null && (typeof t.token == "string" ? W.base64.decode(t.token, e.token = W.newBuffer(W.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? W.base64.decode(t.iv, e.iv = W.newBuffer(W.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? W.base64.decode(t.bytes, e.bytes = W.newBuffer(W.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.token = "" : (n.token = [], e.bytes !== Array && (n.token = W.newBuffer(n.token))), e.bytes === String ? n.iv = "" : (n.iv = [], e.bytes !== Array && (n.iv = W.newBuffer(n.iv))), n.schemaVersion = 0, e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = W.newBuffer(n.bytes)))), t.token != null && t.hasOwnProperty("token") && (n.token = e.bytes === String ? W.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (n.iv = e.bytes === String ? W.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (n.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? W.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, te.util.toJSONOptions);
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
        if (n || (n = se.create()), e.images != null && e.images.length)
          for (let r = 0; r < e.images.length; ++r)
            h.dot.Image.encode(e.images[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && h.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new h.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.images && i.images.length || (i.images = []), i.images.push(h.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              i.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
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
            let r = h.dot.Image.verify(e.images[n]);
            if (r)
              return "images." + r;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = h.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.MagnifEyeLivenessContent)
          return e;
        let n = new h.dot.v4.MagnifEyeLivenessContent();
        if (e.images) {
          if (!Array.isArray(e.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          n.images = [];
          for (let r = 0; r < e.images.length; ++r) {
            if (typeof e.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            n.images[r] = h.dot.Image.fromObject(e.images[r]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          n.metadata = h.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.images = []), n.defaults && (r.metadata = null), e.images && e.images.length) {
          r.images = [];
          for (let i = 0; i < e.images.length; ++i)
            r.images[i] = h.dot.Image.toObject(e.images[i], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
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
        return r || (r = se.create()), n.platform != null && Object.hasOwnProperty.call(n, "platform") && r.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.platform), n.web != null && Object.hasOwnProperty.call(n, "web") && h.dot.v4.WebMetadata.encode(n.web, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.android != null && Object.hasOwnProperty.call(n, "android") && h.dot.v4.AndroidMetadata.encode(n.android, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.ios != null && Object.hasOwnProperty.call(n, "ios") && h.dot.v4.IosMetadata.encode(n.ios, r.uint32(
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
        let i = r === void 0 ? n.len : n.pos + r, a = new h.dot.v4.Metadata();
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
              a.web = h.dot.v4.WebMetadata.decode(n, n.uint32());
              break;
            }
            case 3: {
              a.android = h.dot.v4.AndroidMetadata.decode(n, n.uint32());
              break;
            }
            case 4: {
              a.ios = h.dot.v4.IosMetadata.decode(n, n.uint32());
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
            let i = h.dot.v4.WebMetadata.verify(n.web);
            if (i)
              return "web." + i;
          }
        }
        if (n.android != null && n.hasOwnProperty("android")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let i = h.dot.v4.AndroidMetadata.verify(n.android);
            if (i)
              return "android." + i;
          }
        }
        if (n.ios != null && n.hasOwnProperty("ios")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let i = h.dot.v4.IosMetadata.verify(n.ios);
            if (i)
              return "ios." + i;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof h.dot.v4.Metadata)
          return n;
        let r = new h.dot.v4.Metadata();
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
          r.web = h.dot.v4.WebMetadata.fromObject(n.web);
        }
        if (n.android != null) {
          if (typeof n.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          r.android = h.dot.v4.AndroidMetadata.fromObject(n.android);
        }
        if (n.ios != null) {
          if (typeof n.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          r.ios = h.dot.v4.IosMetadata.fromObject(n.ios);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return r.defaults && (i.platform = r.enums === String ? "WEB" : 0, i.componentVersion = ""), n.platform != null && n.hasOwnProperty("platform") && (i.platform = r.enums === String ? h.dot.Platform[n.platform] === void 0 ? n.platform : h.dot.Platform[n.platform] : n.platform), n.web != null && n.hasOwnProperty("web") && (i.web = h.dot.v4.WebMetadata.toObject(n.web, r), r.oneofs && (i.metadata = "web")), n.android != null && n.hasOwnProperty("android") && (i.android = h.dot.v4.AndroidMetadata.toObject(n.android, r), r.oneofs && (i.metadata = "android")), n.ios != null && n.hasOwnProperty("ios") && (i.ios = h.dot.v4.IosMetadata.toObject(n.ios, r), r.oneofs && (i.metadata = "ios")), n.sessionToken != null && n.hasOwnProperty("sessionToken") && (i.sessionToken = n.sessionToken, r.oneofs && (i._sessionToken = "sessionToken")), n.componentVersion != null && n.hasOwnProperty("componentVersion") && (i.componentVersion = n.componentVersion), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
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
        if (r || (r = se.create()), n.supportedAbis != null && n.supportedAbis.length)
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
            ).string(i[a]), h.dot.Int32List.encode(n.dynamicCameraFrameProperties[i[a]], r.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (n.digestsWithTimestamp != null && n.digestsWithTimestamp.length)
          for (let i = 0; i < n.digestsWithTimestamp.length; ++i)
            h.dot.DigestWithTimestamp.encode(n.digestsWithTimestamp[i], r.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new h.dot.v4.AndroidMetadata(), s, c;
        for (; n.pos < i; ) {
          let d = n.uint32();
          switch (d >>> 3) {
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
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(h.dot.DigestWithTimestamp.decode(n, n.uint32()));
              break;
            }
            case 4: {
              a.dynamicCameraFrameProperties === W.emptyObject && (a.dynamicCameraFrameProperties = {});
              let g = n.uint32() + n.pos;
              for (s = "", c = null; n.pos < g; ) {
                let C = n.uint32();
                switch (C >>> 3) {
                  case 1:
                    s = n.string();
                    break;
                  case 2:
                    c = h.dot.Int32List.decode(n, n.uint32());
                    break;
                  default:
                    n.skipType(C & 7);
                    break;
                }
              }
              a.dynamicCameraFrameProperties[s] = c;
              break;
            }
            default:
              n.skipType(d & 7);
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
            let i = h.dot.DigestWithTimestamp.verify(n.digestsWithTimestamp[r]);
            if (i)
              return "digestsWithTimestamp." + i;
          }
        }
        if (n.dynamicCameraFrameProperties != null && n.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!W.isObject(n.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let r = Object.keys(n.dynamicCameraFrameProperties);
          for (let i = 0; i < r.length; ++i) {
            let a = h.dot.Int32List.verify(n.dynamicCameraFrameProperties[r[i]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof h.dot.v4.AndroidMetadata)
          return n;
        let r = new h.dot.v4.AndroidMetadata();
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
            r.digestsWithTimestamp[i] = h.dot.DigestWithTimestamp.fromObject(n.digestsWithTimestamp[i]);
          }
        }
        if (n.dynamicCameraFrameProperties) {
          if (typeof n.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          r.dynamicCameraFrameProperties = {};
          for (let i = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < i.length; ++a) {
            if (typeof n.dynamicCameraFrameProperties[i[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            r.dynamicCameraFrameProperties[i[a]] = h.dot.Int32List.fromObject(n.dynamicCameraFrameProperties[i[a]]);
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
            i.dynamicCameraFrameProperties[a[s]] = h.dot.Int32List.toObject(n.dynamicCameraFrameProperties[a[s]], r);
        }
        if (n.digestsWithTimestamp && n.digestsWithTimestamp.length) {
          i.digestsWithTimestamp = [];
          for (let s = 0; s < n.digestsWithTimestamp.length; ++s)
            i.digestsWithTimestamp[s] = h.dot.DigestWithTimestamp.toObject(n.digestsWithTimestamp[s], r);
        }
        return i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
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
        if (n || (n = se.create()), e.cameraModelId != null && Object.hasOwnProperty.call(e, "cameraModelId") && n.uint32(
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
            h.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new h.dot.v4.IosMetadata(), a, s;
        for (; e.pos < r; ) {
          let c = e.uint32();
          switch (c >>> 3) {
            case 1: {
              i.cameraModelId = e.string();
              break;
            }
            case 2: {
              i.architectureInfo === W.emptyObject && (i.architectureInfo = {});
              let d = e.uint32() + e.pos;
              for (a = "", s = !1; e.pos < d; ) {
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
              i.digestsWithTimestamp && i.digestsWithTimestamp.length || (i.digestsWithTimestamp = []), i.digestsWithTimestamp.push(h.dot.DigestWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              if (i.isoValues && i.isoValues.length || (i.isoValues = []), (c & 7) === 2) {
                let d = e.uint32() + e.pos;
                for (; e.pos < d; )
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
            let r = h.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[n]);
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
        if (e instanceof h.dot.v4.IosMetadata)
          return e;
        let n = new h.dot.v4.IosMetadata();
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
            n.digestsWithTimestamp[r] = h.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[r]);
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
            r.digestsWithTimestamp[a] = h.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[a], n);
        }
        return r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
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
        if (n || (n = se.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && h.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.availableCameraProperties != null && e.availableCameraProperties.length)
          for (let r = 0; r < e.availableCameraProperties.length; ++r)
            h.dot.v4.CameraProperties.encode(e.availableCameraProperties[r], n.uint32(
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
            h.dot.v4.DetectedObject.encode(e.detectionRecord[r], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (e.hashedDetectedImagesWithTimestamp != null && e.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < e.hashedDetectedImagesWithTimestamp.length; ++r)
            h.dot.v4.HashedDetectedImageWithTimestamp.encode(e.hashedDetectedImagesWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new h.dot.v4.WebMetadata();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.currentCameraProperties = h.dot.v4.MediaTrackSettings.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.availableCameraProperties && i.availableCameraProperties.length || (i.availableCameraProperties = []), i.availableCameraProperties.push(h.dot.v4.CameraProperties.decode(e, e.uint32()));
              break;
            }
            case 3: {
              i.hashedDetectedImages && i.hashedDetectedImages.length || (i.hashedDetectedImages = []), i.hashedDetectedImages.push(e.string());
              break;
            }
            case 5: {
              i.hashedDetectedImagesWithTimestamp && i.hashedDetectedImagesWithTimestamp.length || (i.hashedDetectedImagesWithTimestamp = []), i.hashedDetectedImagesWithTimestamp.push(h.dot.v4.HashedDetectedImageWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              i.detectionRecord && i.detectionRecord.length || (i.detectionRecord = []), i.detectionRecord.push(h.dot.v4.DetectedObject.decode(e, e.uint32()));
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
          let n = h.dot.v4.MediaTrackSettings.verify(e.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (e.availableCameraProperties != null && e.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(e.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < e.availableCameraProperties.length; ++n) {
            let r = h.dot.v4.CameraProperties.verify(e.availableCameraProperties[n]);
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
            let r = h.dot.v4.HashedDetectedImageWithTimestamp.verify(e.hashedDetectedImagesWithTimestamp[n]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (e.detectionRecord != null && e.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(e.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < e.detectionRecord.length; ++n) {
            let r = h.dot.v4.DetectedObject.verify(e.detectionRecord[n]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.WebMetadata)
          return e;
        let n = new h.dot.v4.WebMetadata();
        if (e.currentCameraProperties != null) {
          if (typeof e.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          n.currentCameraProperties = h.dot.v4.MediaTrackSettings.fromObject(e.currentCameraProperties);
        }
        if (e.availableCameraProperties) {
          if (!Array.isArray(e.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          n.availableCameraProperties = [];
          for (let r = 0; r < e.availableCameraProperties.length; ++r) {
            if (typeof e.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[r] = h.dot.v4.CameraProperties.fromObject(e.availableCameraProperties[r]);
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
            n.hashedDetectedImagesWithTimestamp[r] = h.dot.v4.HashedDetectedImageWithTimestamp.fromObject(e.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (e.detectionRecord) {
          if (!Array.isArray(e.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let r = 0; r < e.detectionRecord.length; ++r) {
            if (typeof e.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[r] = h.dot.v4.DetectedObject.fromObject(e.detectionRecord[r]);
          }
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), n.defaults && (r.currentCameraProperties = null), e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = h.dot.v4.MediaTrackSettings.toObject(e.currentCameraProperties, n)), e.availableCameraProperties && e.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let i = 0; i < e.availableCameraProperties.length; ++i)
            r.availableCameraProperties[i] = h.dot.v4.CameraProperties.toObject(e.availableCameraProperties[i], n);
        }
        if (e.hashedDetectedImages && e.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let i = 0; i < e.hashedDetectedImages.length; ++i)
            r.hashedDetectedImages[i] = e.hashedDetectedImages[i];
        }
        if (e.detectionRecord && e.detectionRecord.length) {
          r.detectionRecord = [];
          for (let i = 0; i < e.detectionRecord.length; ++i)
            r.detectionRecord[i] = h.dot.v4.DetectedObject.toObject(e.detectionRecord[i], n);
        }
        if (e.hashedDetectedImagesWithTimestamp && e.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let i = 0; i < e.hashedDetectedImagesWithTimestamp.length; ++i)
            r.hashedDetectedImagesWithTimestamp[i] = h.dot.v4.HashedDetectedImageWithTimestamp.toObject(e.hashedDetectedImagesWithTimestamp[i], n);
        }
        return r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
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
        return n || (n = se.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new h.dot.v4.HashedDetectedImageWithTimestamp();
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
        if (e instanceof h.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let n = new h.dot.v4.HashedDetectedImageWithTimestamp();
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
        return this.constructor.toObject(this, te.util.toJSONOptions);
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
        return r || (r = se.create()), n.aspectRatio != null && Object.hasOwnProperty.call(n, "aspectRatio") && r.uint32(
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
        let i = r === void 0 ? n.len : n.pos + r, a = new h.dot.v4.MediaTrackSettings();
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
        if (n instanceof h.dot.v4.MediaTrackSettings)
          return n;
        let r = new h.dot.v4.MediaTrackSettings();
        return n.aspectRatio != null && (r.aspectRatio = Number(n.aspectRatio)), n.autoGainControl != null && (r.autoGainControl = !!n.autoGainControl), n.channelCount != null && (r.channelCount = n.channelCount | 0), n.deviceId != null && (r.deviceId = String(n.deviceId)), n.displaySurface != null && (r.displaySurface = String(n.displaySurface)), n.echoCancellation != null && (r.echoCancellation = !!n.echoCancellation), n.facingMode != null && (r.facingMode = String(n.facingMode)), n.frameRate != null && (r.frameRate = Number(n.frameRate)), n.groupId != null && (r.groupId = String(n.groupId)), n.height != null && (r.height = n.height | 0), n.noiseSuppression != null && (r.noiseSuppression = !!n.noiseSuppression), n.sampleRate != null && (r.sampleRate = n.sampleRate | 0), n.sampleSize != null && (r.sampleSize = n.sampleSize | 0), n.width != null && (r.width = n.width | 0), n.deviceName != null && (r.deviceName = String(n.deviceName)), r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && (i.aspectRatio = r.json && !isFinite(n.aspectRatio) ? String(n.aspectRatio) : n.aspectRatio, r.oneofs && (i._aspectRatio = "aspectRatio")), n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && (i.autoGainControl = n.autoGainControl, r.oneofs && (i._autoGainControl = "autoGainControl")), n.channelCount != null && n.hasOwnProperty("channelCount") && (i.channelCount = n.channelCount, r.oneofs && (i._channelCount = "channelCount")), n.deviceId != null && n.hasOwnProperty("deviceId") && (i.deviceId = n.deviceId, r.oneofs && (i._deviceId = "deviceId")), n.displaySurface != null && n.hasOwnProperty("displaySurface") && (i.displaySurface = n.displaySurface, r.oneofs && (i._displaySurface = "displaySurface")), n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && (i.echoCancellation = n.echoCancellation, r.oneofs && (i._echoCancellation = "echoCancellation")), n.facingMode != null && n.hasOwnProperty("facingMode") && (i.facingMode = n.facingMode, r.oneofs && (i._facingMode = "facingMode")), n.frameRate != null && n.hasOwnProperty("frameRate") && (i.frameRate = r.json && !isFinite(n.frameRate) ? String(n.frameRate) : n.frameRate, r.oneofs && (i._frameRate = "frameRate")), n.groupId != null && n.hasOwnProperty("groupId") && (i.groupId = n.groupId, r.oneofs && (i._groupId = "groupId")), n.height != null && n.hasOwnProperty("height") && (i.height = n.height, r.oneofs && (i._height = "height")), n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && (i.noiseSuppression = n.noiseSuppression, r.oneofs && (i._noiseSuppression = "noiseSuppression")), n.sampleRate != null && n.hasOwnProperty("sampleRate") && (i.sampleRate = n.sampleRate, r.oneofs && (i._sampleRate = "sampleRate")), n.sampleSize != null && n.hasOwnProperty("sampleSize") && (i.sampleSize = n.sampleSize, r.oneofs && (i._sampleSize = "sampleSize")), n.width != null && n.hasOwnProperty("width") && (i.width = n.width, r.oneofs && (i._width = "width")), n.deviceName != null && n.hasOwnProperty("deviceName") && (i.deviceName = n.deviceName, r.oneofs && (i._deviceName = "deviceName")), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
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
        return n || (n = se.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new h.dot.v4.ImageBitmap();
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
        if (e instanceof h.dot.v4.ImageBitmap)
          return e;
        let n = new h.dot.v4.ImageBitmap();
        return e.width != null && (n.width = e.width | 0), e.height != null && (n.height = e.height | 0), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.width = 0, r.height = 0), e.width != null && e.hasOwnProperty("width") && (r.width = e.width), e.height != null && e.hasOwnProperty("height") && (r.height = e.height), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
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
        return r || (r = se.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && h.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.cameraProperties != null && Object.hasOwnProperty.call(n, "cameraProperties") && h.dot.v4.MediaTrackSettings.encode(n.cameraProperties, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new h.dot.v4.CameraProperties();
        for (; n.pos < i; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = h.dot.v4.ImageBitmap.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = h.dot.v4.MediaTrackSettings.decode(n, n.uint32());
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
          let r = h.dot.v4.ImageBitmap.verify(n.cameraInitFrameResolution);
          if (r)
            return "cameraInitFrameResolution." + r;
        }
        if (n.cameraProperties != null && n.hasOwnProperty("cameraProperties")) {
          let r = h.dot.v4.MediaTrackSettings.verify(n.cameraProperties);
          if (r)
            return "cameraProperties." + r;
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof h.dot.v4.CameraProperties)
          return n;
        let r = new h.dot.v4.CameraProperties();
        if (n.cameraInitFrameResolution != null) {
          if (typeof n.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          r.cameraInitFrameResolution = h.dot.v4.ImageBitmap.fromObject(n.cameraInitFrameResolution);
        }
        if (n.cameraProperties != null) {
          if (typeof n.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          r.cameraProperties = h.dot.v4.MediaTrackSettings.fromObject(n.cameraProperties);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return r.defaults && (i.cameraProperties = null), n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution") && (i.cameraInitFrameResolution = h.dot.v4.ImageBitmap.toObject(n.cameraInitFrameResolution, r), r.oneofs && (i._cameraInitFrameResolution = "cameraInitFrameResolution")), n.cameraProperties != null && n.hasOwnProperty("cameraProperties") && (i.cameraProperties = h.dot.v4.MediaTrackSettings.toObject(n.cameraProperties, r)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
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
        return n || (n = se.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && n.uint32(
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && h.dot.v4.Point.encode(e.faceCenter, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && n.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && h.dot.v4.Point.encode(e.bottomLeft, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && h.dot.v4.Point.encode(e.bottomRight, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && h.dot.v4.Point.encode(e.topLeft, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && h.dot.v4.Point.encode(e.topRight, n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new h.dot.v4.DetectedObject();
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
              i.faceCenter = h.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              i.smallestEdge = e.float();
              break;
            }
            case 8: {
              i.bottomLeft = h.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              i.bottomRight = h.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              i.topLeft = h.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              i.topRight = h.dot.v4.Point.decode(e, e.uint32());
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
          let n = h.dot.v4.Point.verify(e.faceCenter);
          if (n)
            return "faceCenter." + n;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let n = h.dot.v4.Point.verify(e.bottomLeft);
          if (n)
            return "bottomLeft." + n;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let n = h.dot.v4.Point.verify(e.bottomRight);
          if (n)
            return "bottomRight." + n;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let n = h.dot.v4.Point.verify(e.topLeft);
          if (n)
            return "topLeft." + n;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let n = h.dot.v4.Point.verify(e.topRight);
          if (n)
            return "topRight." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.DetectedObject)
          return e;
        let n = new h.dot.v4.DetectedObject();
        if (e.brightness != null && (n.brightness = Number(e.brightness)), e.sharpness != null && (n.sharpness = Number(e.sharpness)), e.hotspots != null && (n.hotspots = Number(e.hotspots)), e.confidence != null && (n.confidence = Number(e.confidence)), e.faceSize != null && (n.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          n.faceCenter = h.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (n.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          n.bottomLeft = h.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          n.bottomRight = h.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          n.topLeft = h.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          n.topRight = h.dot.v4.Point.fromObject(e.topRight);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.brightness = 0, r.sharpness = 0, r.hotspots = 0, r.confidence = 0, r.faceSize = 0, r.faceCenter = null, r.smallestEdge = 0, r.bottomLeft = null, r.bottomRight = null, r.topLeft = null, r.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (r.brightness = n.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (r.sharpness = n.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (r.hotspots = n.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (r.confidence = n.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (r.faceSize = n.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (r.faceCenter = h.dot.v4.Point.toObject(e.faceCenter, n)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (r.smallestEdge = n.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (r.bottomLeft = h.dot.v4.Point.toObject(e.bottomLeft, n)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (r.bottomRight = h.dot.v4.Point.toObject(e.bottomRight, n)), e.topLeft != null && e.hasOwnProperty("topLeft") && (r.topLeft = h.dot.v4.Point.toObject(e.topLeft, n)), e.topRight != null && e.hasOwnProperty("topRight") && (r.topRight = h.dot.v4.Point.toObject(e.topRight, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
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
        return n || (n = se.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new h.dot.v4.Point();
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
        if (e instanceof h.dot.v4.Point)
          return e;
        let n = new h.dot.v4.Point();
        return e.x != null && (n.x = Number(e.x)), e.y != null && (n.y = Number(e.y)), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.x = 0, r.y = 0), e.x != null && e.hasOwnProperty("x") && (r.x = n.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (r.y = n.json && !isFinite(e.y) ? String(e.y) : e.y), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
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
        return n || (n = se.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && h.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new h.dot.v4.FaceContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.image = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
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
          let n = h.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = h.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.FaceContent)
          return e;
        let n = new h.dot.v4.FaceContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          n.image = h.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          n.metadata = h.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = h.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
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
        return n || (n = se.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && h.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new h.dot.v4.DocumentContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.image = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
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
          let n = h.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = h.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.DocumentContent)
          return e;
        let n = new h.dot.v4.DocumentContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          n.image = h.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          n.metadata = h.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = h.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), o.Blob = function() {
      function t(n) {
        if (n)
          for (let r = Object.keys(n), i = 0; i < r.length; ++i)
            n[r[i]] != null && (this[r[i]] = n[r[i]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: W.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent"]),
        set: W.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        return r || (r = se.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && h.dot.v4.DocumentContent.encode(n.documentContent, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.faceContent != null && Object.hasOwnProperty.call(n, "faceContent") && h.dot.v4.FaceContent.encode(n.faceContent, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(n, "magnifeyeLivenessContent") && h.dot.v4.MagnifEyeLivenessContent.encode(n.magnifeyeLivenessContent, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.smileLivenessContent != null && Object.hasOwnProperty.call(n, "smileLivenessContent") && h.dot.v4.SmileLivenessContent.encode(n.smileLivenessContent, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(n, "eyeGazeLivenessContent") && h.dot.v4.EyeGazeLivenessContent.encode(n.eyeGazeLivenessContent, r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), n.palmContent != null && Object.hasOwnProperty.call(n, "palmContent") && h.dot.v4.PalmContent.encode(n.palmContent, r.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new h.dot.v4.Blob();
        for (; n.pos < i; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.documentContent = h.dot.v4.DocumentContent.decode(n, n.uint32());
              break;
            }
            case 5: {
              a.eyeGazeLivenessContent = h.dot.v4.EyeGazeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.faceContent = h.dot.v4.FaceContent.decode(n, n.uint32());
              break;
            }
            case 3: {
              a.magnifeyeLivenessContent = h.dot.v4.MagnifEyeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 4: {
              a.smileLivenessContent = h.dot.v4.SmileLivenessContent.decode(n, n.uint32());
              break;
            }
            case 6: {
              a.palmContent = h.dot.v4.PalmContent.decode(n, n.uint32());
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
            let i = h.dot.v4.DocumentContent.verify(n.documentContent);
            if (i)
              return "documentContent." + i;
          }
        }
        if (n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = h.dot.v4.EyeGazeLivenessContent.verify(n.eyeGazeLivenessContent);
            if (i)
              return "eyeGazeLivenessContent." + i;
          }
        }
        if (n.faceContent != null && n.hasOwnProperty("faceContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = h.dot.v4.FaceContent.verify(n.faceContent);
            if (i)
              return "faceContent." + i;
          }
        }
        if (n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = h.dot.v4.MagnifEyeLivenessContent.verify(n.magnifeyeLivenessContent);
            if (i)
              return "magnifeyeLivenessContent." + i;
          }
        }
        if (n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = h.dot.v4.SmileLivenessContent.verify(n.smileLivenessContent);
            if (i)
              return "smileLivenessContent." + i;
          }
        }
        if (n.palmContent != null && n.hasOwnProperty("palmContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = h.dot.v4.PalmContent.verify(n.palmContent);
            if (i)
              return "palmContent." + i;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof h.dot.v4.Blob)
          return n;
        let r = new h.dot.v4.Blob();
        if (n.documentContent != null) {
          if (typeof n.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          r.documentContent = h.dot.v4.DocumentContent.fromObject(n.documentContent);
        }
        if (n.eyeGazeLivenessContent != null) {
          if (typeof n.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          r.eyeGazeLivenessContent = h.dot.v4.EyeGazeLivenessContent.fromObject(n.eyeGazeLivenessContent);
        }
        if (n.faceContent != null) {
          if (typeof n.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          r.faceContent = h.dot.v4.FaceContent.fromObject(n.faceContent);
        }
        if (n.magnifeyeLivenessContent != null) {
          if (typeof n.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          r.magnifeyeLivenessContent = h.dot.v4.MagnifEyeLivenessContent.fromObject(n.magnifeyeLivenessContent);
        }
        if (n.smileLivenessContent != null) {
          if (typeof n.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          r.smileLivenessContent = h.dot.v4.SmileLivenessContent.fromObject(n.smileLivenessContent);
        }
        if (n.palmContent != null) {
          if (typeof n.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          r.palmContent = h.dot.v4.PalmContent.fromObject(n.palmContent);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return n.documentContent != null && n.hasOwnProperty("documentContent") && (i.documentContent = h.dot.v4.DocumentContent.toObject(n.documentContent, r), r.oneofs && (i.blob = "documentContent")), n.faceContent != null && n.hasOwnProperty("faceContent") && (i.faceContent = h.dot.v4.FaceContent.toObject(n.faceContent, r), r.oneofs && (i.blob = "faceContent")), n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent") && (i.magnifeyeLivenessContent = h.dot.v4.MagnifEyeLivenessContent.toObject(n.magnifeyeLivenessContent, r), r.oneofs && (i.blob = "magnifeyeLivenessContent")), n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent") && (i.smileLivenessContent = h.dot.v4.SmileLivenessContent.toObject(n.smileLivenessContent, r), r.oneofs && (i.blob = "smileLivenessContent")), n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent") && (i.eyeGazeLivenessContent = h.dot.v4.EyeGazeLivenessContent.toObject(n.eyeGazeLivenessContent, r), r.oneofs && (i.blob = "eyeGazeLivenessContent")), n.palmContent != null && n.hasOwnProperty("palmContent") && (i.palmContent = h.dot.v4.PalmContent.toObject(n.palmContent, r), r.oneofs && (i.blob = "palmContent")), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
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
        if (n || (n = se.create()), e.segments != null && e.segments.length)
          for (let r = 0; r < e.segments.length; ++r)
            h.dot.v4.EyeGazeLivenessSegment.encode(e.segments[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && h.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new h.dot.v4.EyeGazeLivenessContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.segments && i.segments.length || (i.segments = []), i.segments.push(h.dot.v4.EyeGazeLivenessSegment.decode(e, e.uint32()));
              break;
            }
            case 2: {
              i.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
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
            let r = h.dot.v4.EyeGazeLivenessSegment.verify(e.segments[n]);
            if (r)
              return "segments." + r;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = h.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.EyeGazeLivenessContent)
          return e;
        let n = new h.dot.v4.EyeGazeLivenessContent();
        if (e.segments) {
          if (!Array.isArray(e.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          n.segments = [];
          for (let r = 0; r < e.segments.length; ++r) {
            if (typeof e.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[r] = h.dot.v4.EyeGazeLivenessSegment.fromObject(e.segments[r]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          n.metadata = h.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.segments = []), n.defaults && (r.metadata = null), e.segments && e.segments.length) {
          r.segments = [];
          for (let i = 0; i < e.segments.length; ++i)
            r.segments[i] = h.dot.v4.EyeGazeLivenessSegment.toObject(e.segments[i], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
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
        return n || (n = se.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new h.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.corner = e.int32();
              break;
            }
            case 2: {
              i.image = h.dot.Image.decode(e, e.uint32());
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
          let n = h.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.EyeGazeLivenessSegment)
          return e;
        let n = new h.dot.v4.EyeGazeLivenessSegment();
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
          n.image = h.dot.Image.fromObject(e.image);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.corner = n.enums === String ? "TOP_LEFT" : 0, r.image = null), e.corner != null && e.hasOwnProperty("corner") && (r.corner = n.enums === String ? h.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : h.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (r.image = h.dot.Image.toObject(e.image, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
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
        return n || (n = se.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && h.dot.Image.encode(e.neutralExpressionFaceImage, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.smileExpressionFaceImage != null && Object.hasOwnProperty.call(e, "smileExpressionFaceImage") && h.dot.Image.encode(e.smileExpressionFaceImage, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && h.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new h.dot.v4.SmileLivenessContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.neutralExpressionFaceImage = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.smileExpressionFaceImage = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              i.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
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
          let n = h.dot.Image.verify(e.neutralExpressionFaceImage);
          if (n)
            return "neutralExpressionFaceImage." + n;
        }
        if (e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage")) {
          let n = h.dot.Image.verify(e.smileExpressionFaceImage);
          if (n)
            return "smileExpressionFaceImage." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = h.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.SmileLivenessContent)
          return e;
        let n = new h.dot.v4.SmileLivenessContent();
        if (e.neutralExpressionFaceImage != null) {
          if (typeof e.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          n.neutralExpressionFaceImage = h.dot.Image.fromObject(e.neutralExpressionFaceImage);
        }
        if (e.smileExpressionFaceImage != null) {
          if (typeof e.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          n.smileExpressionFaceImage = h.dot.Image.fromObject(e.smileExpressionFaceImage);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          n.metadata = h.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = h.dot.Image.toObject(e.neutralExpressionFaceImage, n)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = h.dot.Image.toObject(e.smileExpressionFaceImage, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), o.PalmContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = se.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && h.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new h.dot.v4.PalmContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.image = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
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
          let n = h.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = h.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.PalmContent)
          return e;
        let n = new h.dot.v4.PalmContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          n.image = h.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          n.metadata = h.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = h.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.PalmContent";
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
      return e || (e = se.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new h.dot.Image();
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
      if (t instanceof h.dot.Image)
        return t;
      let e = new h.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? W.base64.decode(t.bytes, e.bytes = W.newBuffer(W.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = W.newBuffer(n.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? W.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, te.util.toJSONOptions);
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
      if (e || (e = se.create()), t.items != null && t.items.length) {
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
      let n = e === void 0 ? t.len : t.pos + e, r = new h.dot.Int32List();
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
      if (t instanceof h.dot.Int32List)
        return t;
      let e = new h.dot.Int32List();
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
      return this.constructor.toObject(this, te.util.toJSONOptions);
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
      return e || (e = se.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
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
      let n = e === void 0 ? t.len : t.pos + e, r = new h.dot.DigestWithTimestamp();
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
      if (t instanceof h.dot.DigestWithTimestamp)
        return t;
      let e = new h.dot.DigestWithTimestamp();
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
      return this.constructor.toObject(this, te.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, o;
  }(), x;
})();
async function T1(x) {
  const { Image: o } = N0, t = await x.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const r = o.verify(n);
  if (r) throw Error(r);
  const i = {};
  return i.bytes = e, o.create(i);
}
async function L1(x) {
  const { v4: { Metadata: o } } = N0, t = { ...x };
  t.platform = N0.Platform.WEB;
  const e = t, n = o.verify(e);
  if (n) throw Error(n);
  return o.create(e);
}
async function N1(x) {
  const { Content: o } = N0, { iv: t, key: e, message: n } = await Ml(x), r = { token: new Uint8Array(e), iv: t, schemaVersion: Zu, bytes: new Uint8Array(n) }, i = o.verify(r);
  if (i) throw Error(i);
  const a = o.create(r);
  return o.encode(a).finish();
}
function D1({ documentContent: x, faceContent: o, magnifeyeLivenessContent: t, smileLivenessContent: e }) {
  const { Blob: n } = N0.v4, r = {};
  r.documentContent = x, r.faceContent = o, r.magnifeyeLivenessContent = t, r.smileLivenessContent = e;
  const i = r, a = n.verify(i);
  if (a) throw Error(a);
  const s = n.create(i);
  return n.encode(s).finish();
}
async function E1(x, o) {
  const { DocumentContent: t } = N0.v4, e = await T1(x), n = await L1(o), r = {};
  r.image = e, r.metadata = n;
  const i = r, a = t.verify(i);
  if (a) throw Error(a);
  const s = t.create(i), c = {};
  return c.documentContent = s, D1(c);
}
async function Y1(x, o) {
  const t = await E1(x, o);
  return N1(t);
}
const F1 = () => {
  const { redfin: x, sunfish: o } = Er(), { analytics: t } = fu(), { appState: e, freemiumOverlayState: n } = Bn(), { documentCameraOptions: r } = Qs(), { cameraFacing: i, onPhotoTaken: a, sessionToken: s, thresholds: c, wasmDirectoryPath: d } = r, { controller: g } = h1(c, d), C = R0(
    ({ content: F, controller: O, imageData: M }) => {
      ml(Es.DOCUMENT, O.getCandidateSelectionImages()), a(M, F);
    },
    [a]
  ), { cameraResolution: l, cameraService: p, detectionDetails: b, videoRef: A } = Zl({
    analytics: t,
    cameraFacing: i,
    controller: g,
    sessionToken: s,
    createProtoMessage: Y1,
    onPhotoTaken: C
  }), { shouldMirror: u } = yl(yt.CONTROL, p);
  bl(yt.CAMERA_PROPS_CHANGED, {
    cameraResolution: l,
    shouldMirror: u
  }), He(() => () => {
    ln.getInstance().restart();
  }, []);
  const v = n !== Wx.HIDDEN && x !== ir.Higher && l, Z = n === Wx.VISIBLE, Y = l && o && e === et.RUNNING;
  return /* @__PURE__ */ H(ft, { children: [
    v && /* @__PURE__ */ H(Nl, { fullOverlay: Z, resolution: l }),
    /* @__PURE__ */ H(ou, { ref: A, $isImageMirror: u, $isVisible: o, autoPlay: !0, muted: !0, playsInline: !0 }),
    Y && /* @__PURE__ */ H(
      Kl,
      {
        redfin: x,
        cameraResolution: l,
        detectionDetails: b,
        isImageMirror: u
      }
    )
  ] });
}, X1 = ({ ...x }) => /* @__PURE__ */ H(Il, { cameraOptions: x, children: /* @__PURE__ */ H(F1, {}) });
function j1({ initAppState: x }) {
  const [o, t] = at(x), [e, n] = at(), [r, i] = at(!1), a = {};
  return a.appState = o, a.setAppState = t, a.error = e, a.setError = n, a.isCameraReady = r, a.setIsCameraReady = i, a;
}
function M1() {
  const [x] = window.crypto.getRandomValues(new Uint32Array(1));
  return x.toString(3611 * 2 + 1 * -5079 + -2127);
}
function J1() {
  const x = sessionStorage.getItem("dot-user-id");
  if (x) return x;
  const o = M1();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function U1(x, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : x;
}
function _1(x) {
  return x > 3559 + 4523 * 1 + 8022 * -1 ? ">1m" : x > -6901 + 422 * 1 + 6524 ? ">45" : x > 6581 * -1 + 5187 + -4 * -356 ? ">30" : "" + x;
}
const Q1 = (x) => Math.round(x / 500) * 500 / 1e3, z0 = (x) => x ? x <= 599 * -1 + 6414 + -34 * 171 ? Math.round(x * (-4007 + -514 * -7 + -429 * -1)) / (-961 * 1 + -193 * 4 + 1753) : Math.round(x / (-5841 + 9 * -30 + 6161)) * (-11645 + -2339 * -5) : 1 * 4273 + -3176 + -1097, z1 = (x) => Math.round(x * (187 * -43 + -8563 * 1 + 16606)) / (469 * 4 + 82 * -115 + 7556);
function q1(x) {
  return x !== et.RUNNING ? Wx.VISIBLE : Wx.VISIBLE_WITH_MASK;
}
function $1({ onError: x }) {
  const { appState: o, error: t, isCameraReady: e, setAppState: n, setError: r, setIsCameraReady: i } = j1({
    initAppState: et.LOADING
  }), a = q1(o), s = R0(
    (d) => {
      fa(yt.STATE_CHANGED, { appState: et.ERROR, error: d }), i(!1), x(d), r(d), n(et.ERROR);
    },
    [x, r, n, i]
  ), c = R0(
    (d) => {
      fa(yt.STATE_CHANGED, { appState: d }), n(d);
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
var kc = ((x) => (x.AUTO_CAPTURE = "auto-capture", x))(kc || {});
class eI {
  constructor() {
    J(this, "appKey", "");
    J(this, "deviceId", "");
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
    const e = { _app_version: Ms() }, n = { organization: Js(window.location.href) }, r = Jn({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
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
    e.key = kc.AUTO_CAPTURE, e.count = 1, e.dur = t, e.segmentation = o;
    const n = [e], r = Jn({ events: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
}
const zn = new eI();
class tI {
  constructor() {
    J(this, "countly", zn);
  }
  createSegmentation(o) {
    return { appVersion: Ms(), ...o };
  }
  init(o) {
    if (tl()) return;
    const t = J1();
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
class nI extends tI {
  trackCaptureProcess({ averageFps: o, captureProcessDurationInMs: t, detection: e, deviceName: n, facingMode: r, imageResolution: i, instructionSet: a }) {
    if (!e) return;
    const s = Q1(t), c = this.createSegmentation({ hotspots: z0(e.hotspots), brightness: z0(e.brightness), confidence: z0(e.confidence), sharpness: z0(e.sharpness), smallestEdge: z0(e.smallestEdge), camera: U1(n, r), imageResolution: i.width + "x" + i.height, averageFps: z1(o), captureTime: _1(s), instructionSet: a });
    this.countly.sendAutoCaptureEvent(c, s);
  }
}
const xI = new nI();
let U;
const Zt = new Array(-1231 * 6 + 96 + 7418).fill(void 0);
Zt.push(void 0, null, !0, !1);
function mr(x) {
  return Zt[x];
}
let dn = Zt.length;
function oI(x) {
  x < 193 * 36 + 5 * -899 + -2321 || (Zt[x] = dn, dn = x);
}
function Gc(x) {
  const o = mr(x);
  return oI(x), o;
}
let Pt = 2580 + -632 * -3 + -4476, on = null;
function lx() {
  return (on === null || on.byteLength === 163 * -43 + -7371 + 20 * 719) && (on = new Uint8Array(U.memory.buffer)), on;
}
const Ix = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, rI = typeof Ix.encodeInto == "function" ? function(x, o) {
  return Ix.encodeInto(x, o);
} : function(x, o) {
  const t = Ix.encode(x);
  o.set(t);
  const e = {};
  return e.read = x.length, e.written = t.length, e;
};
function Lx(x, o, t) {
  if (t === void 0) {
    const a = Ix.encode(x), s = o(a.length, -13 * 325 + -6710 + 10936) >>> 2313 + 257 * -9;
    return lx().subarray(s, s + a.length).set(a), Pt = a.length, s;
  }
  let e = x.length, n = o(e, 195 * -35 + -153 * -21 + 3613) >>> -1 * -4502 + 87 * 18 + 1 * -6068;
  const r = lx();
  let i = -4222 + -2 * -2111;
  for (; i < e; i++) {
    const a = x.charCodeAt(i);
    if (a > -2473 + -997 * -9 + -1 * 6373) break;
    r[n + i] = a;
  }
  if (i !== e) {
    i !== 4945 + -11 * 617 + -6 * -307 && (x = x.slice(i)), n = t(n, e, e = i + x.length * (983 * 3 + -4730 * 1 + 1784), -5660 + 1 * -6457 + 12118) >>> -1 * -4793 + 8792 + -13585 * 1;
    const a = lx().subarray(n + i, n + e), s = rI(x, a);
    i += s.written, n = t(n, e, i, -9999 + 5790 * -1 + 10 * 1579) >>> -8073 + 1772 * 3 + 2757;
  }
  return Pt = i, n;
}
function Oc(x) {
  return x == null;
}
let rn = null;
function Yt() {
  return (rn === null || rn.byteLength === -1009 + 1 * 9403 + 1 * -8394) && (rn = new Int32Array(U.memory.buffer)), rn;
}
const br = {};
br.ignoreBOM = !0, br.fatal = !0;
const Hc = typeof TextDecoder < "u" ? new TextDecoder("utf-8", br) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Hc.decode();
function Ar(x, o) {
  return x = x >>> 1958 + 1958 * -1, Hc.decode(lx().subarray(x, x + o));
}
function yr(x) {
  dn === Zt.length && Zt.push(Zt.length + (1573 + 132 * -27 + 1992));
  const o = dn;
  return dn = Zt[o], Zt[o] = x, o;
}
let an = null;
function Zc() {
  return (an === null || an.byteLength === -7 * 490 + 9546 + -556 * 11) && (an = new Uint32Array(U.memory.buffer)), an;
}
function Ra(x, o) {
  const t = o(x.length * 4, 4) >>> 0, e = Zc();
  for (let n = 1 * 5461 + 1699 + -7160; n < x.length; n++)
    e[t / (-254 * -18 + -1 * -6258 + 5413 * -2) + n] = yr(x[n]);
  return Pt = x.length, t;
}
function Ka(x, o) {
  x = x >>> -1 * -6545 + -1194 + -5351;
  const t = Zc(), e = t.subarray(x / (7678 + -6412 * -1 + -14086), x / (-322 * 1 + -1 * 8233 + 3 * 2853) + o), n = [];
  for (let r = 0; r < e.length; r++)
    n.push(Gc(e[r]));
  return n;
}
function iI(x, o) {
  const t = Lx(x, U.__wbindgen_malloc, U.__wbindgen_realloc), e = Pt, n = Lx(o, U.__wbindgen_malloc, U.__wbindgen_realloc), r = Pt, i = U.is_mobile_supported(t, e, n, r);
  return $r.__wrap(i);
}
const Wr = {};
Wr.register = () => {
}, Wr.unregister = () => {
};
const Pa = typeof FinalizationRegistry > "u" ? Wr : new FinalizationRegistry((x) => U.__wbg_licensevalidationresult_free(x >>> -2069 * -2 + 1588 + 409 * -14));
class $r {
  static __wrap(o) {
    o = o >>> 2 * 2453 + 227 * 14 + -8084;
    const t = Object.create($r.prototype);
    return t.__wbg_ptr = o, Pa.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Pa.unregister(this), o;
  }
  free() {
    const o = this.__destroy_into_raw();
    U.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, n) {
    var r = Oc(t) ? 0 : Lx(t, U.__wbindgen_malloc, U.__wbindgen_realloc), i = Pt;
    const a = Ra(e, U.__wbindgen_malloc), s = Pt, c = Ra(n, U.__wbindgen_malloc), d = Pt, g = U.licensevalidationresult_new(o, r, i, a, s, c, d);
    return this.__wbg_ptr = g >>> 118 * -1 + -1155 + 1273 * 1, this;
  }
  get is_valid() {
    return U.licensevalidationresult_is_valid(this.__wbg_ptr) !== -6046 + -1 * 9785 + -1759 * -9;
  }
  get features_json() {
    try {
      const e = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = Yt()[e / (1 * -2150 + -1 * -4651 + -2497) + (-1 * 5861 + 698 * 14 + -3911)], t = Yt()[e / 4 + (5 * -766 + 310 * -22 + 10651)];
      let n;
      return o !== -8702 + -49 * 25 + 9927 && (n = Ar(o, t).slice(), U.__wbindgen_free(o, t * (23 * -417 + 9 * 997 + 619), -8787 + -1 * -2309 + 6479)), n;
    } finally {
      U.__wbindgen_add_to_stack_pointer(5235 * 1 + -11 * 9 + -5120);
    }
  }
  get errors() {
    try {
      const n = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_errors(n, this.__wbg_ptr);
      var o = Yt()[n / (-2290 + -3532 * -2 + -4770) + (-1009 * -7 + -1 * -6787 + -13850 * 1)], t = Yt()[n / (17826 + 8911 * -2) + 1], e = Ka(o, t).slice();
      return U.__wbindgen_free(o, t * (8 * -16 + -3133 * -1 + -3001), 4), e;
    } finally {
      U.__wbindgen_add_to_stack_pointer(-8192 + 2 * -28 + -2 * -4132);
    }
  }
  get warnings() {
    try {
      const n = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var o = Yt()[n / (-2398 * 3 + 1 * 8574 + -344 * 4) + (-731 * 13 + 2421 + -7082 * -1)], t = Yt()[n / (1 * 5339 + 2 * 3382 + -12099) + 1], e = Ka(o, t).slice();
      return U.__wbindgen_free(o, t * 4, 6579 + 32 * 133 + -10831), e;
    } finally {
      U.__wbindgen_add_to_stack_pointer(2390 + 24 * 268 + -8806);
    }
  }
}
async function aI(x, o) {
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
function sI() {
  const x = {};
  return x.wbg = {}, x.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return yr(/* @__PURE__ */ new Date());
  }, x.wbg.__wbg_getTime_2bc4375165f02d15 = function(o) {
    return mr(o).getTime();
  }, x.wbg.__wbindgen_object_drop_ref = function(o) {
    Gc(o);
  }, x.wbg.__wbindgen_string_get = function(o, t) {
    const e = mr(t), n = typeof e == "string" ? e : void 0;
    var r = Oc(n) ? 4534 * -2 + 686 + 8382 : Lx(n, U.__wbindgen_malloc, U.__wbindgen_realloc), i = Pt;
    Yt()[o / (6161 + -47 * 131) + (826 * -7 + 6139 * -1 + 11922)] = i, Yt()[o / (6713 + 183 * -1 + -6526) + (5 * 1385 + -58 * 107 + -719)] = r;
  }, x.wbg.__wbindgen_string_new = function(o, t) {
    const e = Ar(o, t);
    return yr(e);
  }, x.wbg.__wbindgen_throw = function(o, t) {
    throw new Error(Ar(o, t));
  }, x;
}
function cI(x, o) {
  return U = x.exports, Rc.__wbindgen_wasm_module = o, rn = null, an = null, on = null, U;
}
async function Rc(x) {
  if (U !== void 0) return U;
  typeof x > "u" && (x = new URL("dot_embedded_bg.wasm", import.meta.url));
  const o = sI();
  (typeof x == "string" || typeof Request == "function" && x instanceof Request || typeof URL == "function" && x instanceof URL) && (x = fetch(x));
  const { instance: t, module: e } = await aI(await x, o);
  return cI(t, e);
}
(function(x, o) {
  const t = x();
  function e(a, s, c, d, g) {
    return Oe(s - -462, c);
  }
  function n(a, s, c, d, g) {
    return Oe(g - 764, c);
  }
  function r(a, s, c, d, g) {
    return Oe(g - 855, c);
  }
  function i(a, s, c, d, g) {
    return Oe(a - -578, g);
  }
  for (; ; )
    try {
      if (parseInt(n(1161, 1156, "b(6[", 1166, 1176)) / 1 + -parseInt(e(-50, -68, "syq^", -82, -62)) / 2 + parseInt(e(-79, -73, "9q0Y", -76, -66)) / 3 + -parseInt(e(-73, -94, "Y)kj", -115, -95)) / 4 + -parseInt(e(-77, -54, "&eMv", -54, -57)) / 5 * (parseInt(i(-185, -210, -166, -161, "d78U")) / 6) + parseInt(n(1161, 1167, "Pq#7", 1176, 1164)) / 7 + parseInt(r(1232, 1233, "BoSC", 1253, 1251)) / 8 === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Nx, 9 * 4657 + -198870 + 92795 * 3);
function Va(x, o, t, e, n) {
  return Oe(n - 612, o);
}
function Zo(x, o, t, e, n) {
  return Oe(e - -954, t);
}
function Ro(x, o, t, e, n) {
  return Oe(o - 604, n);
}
function Ko(x, o, t, e, n) {
  return Oe(n - 665, x);
}
function Po(x, o, t, e, n) {
  return Oe(n - 734, o);
}
var La;
class gI {
  constructor() {
    J(this, La, !1);
  }
  async [(La = Po(1149, "6AR]", 1108, 1152, 1133) + Po(1149, "oQNd", 1124, 1152, 1132) + Zo(-547, -564, "6AR]", -543), Ro(968, 982, 993, 963, "T@p["))](o = Ko("tQvD", 1062, 1042, 1065, 1047)) {
    function t(a, s, c, d, g) {
      return Ko(c, s - 190, c - 423, d - 125, a - -705);
    }
    function e(a, s, c, d, g) {
      return Zo(a - 109, s - 423, a, s - 1676);
    }
    function n(a, s, c, d, g) {
      return Po(a - 285, s, c - 178, d - 198, a - -111);
    }
    function r(a, s, c, d, g) {
      return Ro(a - 361, d - -1475, c - 477, d - 302, s);
    }
    function i(a, s, c, d, g) {
      return Ro(a - 80, d - -1358, c - 398, d - 7, g);
    }
    try {
      const a = o + "/" + Tu;
      await Rc(a), this[n(1025, "[x%#", 1002, 1001, 1015) + t(348, 343, "QXaP", 342, 342) + n(990, "b!0(", 976, 981, 999)] = !0;
    } catch {
      this[t(344, 334, "ttyI", 351) + i(-368, -368, -336, -353, "brRS") + n(1030, "DK7L", 1021, 1014)] = !1, console[e("!bA&", 1119)](i(-365, -377, -361, -381, "X^(#") + e("6AR]", 1096) + i(-349, -361, -371, -363, "6Fdy") + n(986, "tQvD", 986, 961) + t(326, 306, "D]t]", 342) + i(-393, -380, -351, -371, "JPUP") + t(345, 319, "(Tp4", 334) + n(1002, "AWRu", 1024, 1e3) + r(-458, "d78U", -443, -465) + r(-515, "JiHY", -475, -491) + e("tGnY", 1092) + n(994, "dWrF", 989, 1014) + r(-527, "&eMv", -491, -506) + i(-334, -333, -376, -351, "$mGi") + r(-462, "tswh", -480, -467) + r(-481, "d78U", -474, -496) + r(-530, "^nME", -503, -509) + t(355, 346, "tswh", 363) + "n.");
    }
  }
  [Ko("^hH@", 1046, 1093, 1050, 1070) + Va(996, "&Yw4", 1e3, 1040, 1022) + Zo(-577, -541, "b!0(", -562) + "ed"]() {
    function o(t, e, n, r, i) {
      return Va(t - 214, n, n - 45, r - 274, i - -449);
    }
    return this[o(565, 570, "dWrF", 569, 550) + o(530, 530, "JGm9", 543, 535) + o(568, 525, "8iTl", 528, 544)];
  }
}
function Oe(x, o) {
  const t = Nx();
  return Oe = function(e, n) {
    e = e - (1353 * 1 + -9571 + -2145 * -4);
    let r = t[e];
    if (Oe.OZxLZa === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", p = "";
        for (let b = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = b % 4 ? A * 64 + u : u, b++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          u = C.indexOf(u);
        for (let b = 0, A = l.length; b < A; b++)
          p += "%" + ("00" + l.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let l = [], p = 0, b, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          p = (p + l[u] + C.charCodeAt(u % C.length)) % 256, b = l[u], l[u] = l[p], l[p] = b;
        u = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, p = (p + l[u]) % 256, b = l[u], l[u] = l[p], l[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[p]) % 256]);
        return A;
      };
      Oe.NeQobW = d, x = arguments, Oe.OZxLZa = !0;
    }
    const a = t[-679 + 1585 * 1 + 906 * -1], s = e + a, c = x[s];
    return c ? r = c : (Oe.IDgJWO === void 0 && (Oe.IDgJWO = !0), r = Oe.NeQobW(r, n), x[s] = r), r;
  }, Oe(x, o);
}
function Nx() {
  const x = ["rCo4W7tdM8kV", "Fu3cGrBcQa", "WQNdICk6WPNcJ2ZdV2WesKqe", "W5P5W6mbW5fLbfGEW7n/wG", "W6/cKCoNbcu", "qNZdH8ofja", "W4ZcVCk3DmkiWPtcSamusI0", "W43cNCkczgZcQZhdV3W4WRGm", "WQ/dQwhdT2y", "WRS8hSoDWQa", "WPddTKldG8oDW68KW5xcGdpdQKG", "W67cLCoVW4/dJq", "uGJcMb7dRq", "W7GldmktWOO", "w8oDWQerWOVdN8osudRcN8kFeq", "qfFdJK7cOwjMWRegWPWcWPy", "W5NcLuVdLLe", "h8oAi37dSa", "DCklymk0W64", "W6NdJNn2ta", "q3FdMmoeja", "tCoZWQFcNSoF", "lmkLWOldKSkvW694W5NdGeaxfSks", "WRb+E8kYW6mNfCoOWP1zBSoC", "ymkKzee", "jWVdGmkgW7i", "WPFcVKucW7u", "WPBdGCojmt4", "WRO8hSoDWQa", "k8o2jsLL", "DCojp3jy", "nCkeWQNdOSoS", "tmooFIhcPCkDk3JdQmkVWRi", "a8kBnhZdMG", "dfJdKSkGW4W", "gSkAW7DQWPnqob3dKc/cGIS", "WPlcJq/cLCktWO15W4G", "WO0SWOXBWOa", "W70dgSkFWPq", "e8kSWOZcJmkQEaFcSa", "WPpdSepdJCoqW6KPW5/cUr/dQge", "W7RcUamuWOm", "v8oTmJWxAGeFW6lcIxFdUeG", "W5BdNctcJa", "W6tdGN7cOmod", "wxtdJSoncq", "WRldHSkBgaW1AhXVnmouW4O", "y8oyWRldM8oy", "k8otW6ddMxe", "WQ7dT1OuWPe", "WRFcVXGpW4W", "WRW/hbGJ"];
  return Nx = function() {
    return x;
  }, Nx();
}
class Vo extends Error {
  constructor() {
    super(...arguments);
    J(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function q0(x, o, t, e, n) {
  return ge(o - 914, n);
}
function Dx() {
  var x = ["WPmfW5hcK8kP", "WPrSdXRdHa", "rCobW6dcUq", "qHpcGa", "mYzFpZdcMSorj8ohW6BcIsS", "WPVdOq/cU2dcTCk2W7vimmobd1a", "WPhdO0K", "ruCxlCkx", "W53dJ8omteG", "mGXbWQy", "ws5bW6VdPW", "mqG6jSkX", "dw8dWRhcOwXDWRfadCkIaYq", "WPTiasRdHW", "WP8Nj2mr", "WO8HpfOM", "cmohWPtcMCoy", "WQ06du1a", "FxunWPRcI8kgzISZWRtcQHb2", "W7mwW5BcTSok", "W4ycfW", "ch5DW7tcJvyOyZZcPSof", "WR3dH8ktW6hcMq", "W5NdKCoqx18", "W7hdKqasW6fFW5NdKwhcOKhcKW", "W6zKFmkPwmkmW5v7", "EgiGW4lcUW", "zmkZy8k1gLVdPmoFWO3cIq/cKq", "s8o5WRNdGSkx", "gmkiWQ8DW7m", "W6/cUSkQz2i", "xHhcGa", "vd1hW6FdVq", "WOTsW6nvvJmgdCowhmoZva", "yv9KuSoRuCoYWQ8wW6/cQW", "WPixW7pcKCkT", "WRJdNCkO", "W60AW4hcJmor", "WPWsiCksW44yqmkw", "z2aDzhe", "B2NcVmo0WRq", "gebcw8kn", "irqkm1i", "rmooW7lcTCov", "lYH5WOtdVCoTkmogwSkFBmk8", "guPF", "d1BdUmkKya", "FxuUW4xcVq", "eLFdUbRdH8ocW5CavgG", "jWfwWQX5", "wsyqWQFdLG", "WOVcJSkvdWtcLvnohCkaWQrH", "W6lcH8o6W5tcJ8oCWR/cIN8", "xSoAW6STW6fEgCkqWP8"];
  return Dx = function() {
    return x;
  }, Dx();
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return ge(d - 297, C);
  }
  function e(s, c, d, g, C) {
    return ge(s - -965, d);
  }
  function n(s, c, d, g, C) {
    return ge(d - -37, C);
  }
  var r = x();
  function i(s, c, d, g, C) {
    return ge(d - -635, g);
  }
  for (; ; )
    try {
      var a = parseInt(i(-520, -471, -498, "1C&U", -479)) / 1 + parseInt(i(-515, -496, -488, "iead", -498)) / 2 + -parseInt(i(-441, -458, -466, "01x$", -488)) / 3 + -parseInt(n(114, 116, 117, 98, "5rrs")) / 4 * (parseInt(n(89, 72, 91, 85, "0PZL")) / 5) + parseInt(t(452, 449, 453, 444, "R6z&")) / 6 * (parseInt(e(-814, -838, "UQ&I", -816, -816)) / 7) + -parseInt(e(-804, -783, "&RDZ", -798, -815)) / 8 + parseInt(i(-469, -455, -473, "ebEB", -499)) / 9;
      if (a === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Dx, 14 * 26333 + -3 * -174599 + 5 * -121331);
function To(x, o, t, e, n) {
  return ge(e - -531, t);
}
function ge(x, o) {
  var t = Dx();
  return ge = function(e, n) {
    e = e - (7361 + -53 * 172 + 1871);
    var r = t[e];
    if (ge.rzcRrX === void 0) {
      var i = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", p = "", b = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = b % 4 ? A * 64 + u : u, b++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          u = C.indexOf(u);
        for (var Z = 0, Y = l.length; Z < Y; Z++)
          p += "%" + ("00" + l.charCodeAt(Z).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, C) {
        var l = [], p = 0, b, A = "";
        g = i(g);
        var u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          p = (p + l[u] + C.charCodeAt(u % C.length)) % 256, b = l[u], l[u] = l[p], l[p] = b;
        u = 0, p = 0;
        for (var v = 0; v < g.length; v++)
          u = (u + 1) % 256, p = (p + l[u]) % 256, b = l[u], l[u] = l[p], l[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[p]) % 256]);
        return A;
      };
      ge.PpWhWh = a, x = arguments, ge.rzcRrX = !0;
    }
    var s = t[1 * 4907 + 34 * 2 + -4975], c = e + s, d = x[c];
    return d ? r = d : (ge.jidlrx === void 0 && (ge.jidlrx = !0), r = ge.PpWhWh(r, n), x[c] = r), r;
  }, ge(x, o);
}
function qn(x, o, t, e, n) {
  return ge(o - 123, t);
}
function $n(x, o, t, e, n) {
  return ge(x - 910, n);
}
function $0(x, o, t, e, n) {
  return ge(x - -317, n);
}
var O0;
class Ta {
  constructor(o) {
    Ke(this, O0);
    function t(a, s, c, d, g) {
      return ge(a - 618, s);
    }
    function e(a, s, c, d, g) {
      return ge(d - 201, s);
    }
    function n(a, s, c, d, g) {
      return ge(g - 250, c);
    }
    function r(a, s, c, d, g) {
      return ge(s - 442, g);
    }
    this[e(339, "iead", 325, 330) + n(402, 366, "7pGT", 377, 388)] = o;
    function i(a, s, c, d, g) {
      return ge(g - -641, d);
    }
    try {
      Se(this, O0, o[e(333, "p70U", 325, 317, 295) + r(592, 586, 584, 595, "dUK$") + i(-512, -515, -470, "dUK$", -493)] && JSON[e(351, "R6z&", 319, 333, 355)](o[t(768, "iead", 744, 760, 775) + e(342, ")04R", 344, 359, 342) + r(588, 605, 603, 598, "DK&$")]));
    } catch (a) {
      console[n(427, 433, "VyR6", 398, 409)](a);
    }
  }
  get [$0(-160, -152, -137, -156, "7pGT") + "id"]() {
    function o(e, n, r, i, a) {
      return $0(n - -500, n - 363, r - 274, i - 218, a);
    }
    function t(e, n, r, i, a) {
      return $0(n - -323, n - 132, r - 360, i - 397, a);
    }
    return this[t(-512, -491, -479, -505, "puSg") + t(-505, -487, -462, -496, "Y@&h")][t(-512, -515, -509, -530, "$h2a") + o(-688, -678, -697, -657, "$h2a")];
  }
  get [qn(274, 265, "&RDZ") + "s"]() {
    function o(e, n, r, i, a) {
      return qn(e - 431, n - -1111, a);
    }
    function t(e, n, r, i, a) {
      return $0(a - -598, n - 101, r - 176, i - 56, n);
    }
    return this[t(-781, "xG7c", -814, -770, -796) + t(-754, "01x$", -756, -803, -780)][o(-835, -821, -846, -805, "01x$") + "s"];
  }
  get [$0(-177, -173, -181, -151, "pb*A") + qn(306, 283, "Sq1%")]() {
    function o(n, r, i, a, s) {
      return $n(i - -1145, r - 149, i - 359, a - 288, a);
    }
    function t(n, r, i, a, s) {
      return q0(n - 446, s - -1374, i - 356, a - 107, a);
    }
    function e(n, r, i, a, s) {
      return q0(n - 171, r - -1139, i - 121, a - 197, s);
    }
    return this[o(-128, -109, -102, "Ir]6") + t(-314, -287, -288, "VyR6", -314)][e(-50, -73, -61, -95, "U6Cz") + t(-322, -315, -328, "O!6N", -337)];
  }
  get [$n(1027, 1026, 1026, 1031, "o1j8") + "b"]() {
    return z(this, O0);
  }
  get [$n(1041, 1036, 1031, 1040, "9cc3") + To(-373, -382, "Xna6", -388) + qn(311, 287, "RGU%") + $n(1076, 1050, 1078, 1079, "U6Cz")]() {
    var i, a;
    function o(s, c, d, g, C) {
      return q0(s - 370, g - -1670, d - 461, g - 279, C);
    }
    function t(s, c, d, g, C) {
      return q0(s - 359, c - -167, d - 143, g - 341, d);
    }
    function e(s, c, d, g, C) {
      return To(s - 163, c - 423, C, d - 97);
    }
    function n(s, c, d, g, C) {
      return q0(s - 370, C - -1881, d - 196, g - 194, d);
    }
    function r(s, c, d, g, C) {
      return To(s - 454, c - 33, c, s - 296);
    }
    return !!((a = (i = z(this, O0)) == null ? void 0 : i[e(-296, -285, -284, -272, "iead") + e(-309, -276, -300, -278, "Sq1%")]) != null && a[e(-329, -291, -314, -323, "@FBs") + e(-328, -330, -312, -289, "pb*A") + t(894, 873, "5rrs", 881) + r(-117, "o1j8") + r(-70, "5rrs") + n(-800, -804, "1C&U", -799, -799) + o(-635, -619, -613, -611, "DhnS") + "d"]);
  }
}
O0 = new WeakMap();
function W0(x, o, t, e, n) {
  return Ae(n - 362, e);
}
(function(x, o) {
  function t(a, s, c, d, g) {
    return Ae(a - -82, d);
  }
  function e(a, s, c, d, g) {
    return Ae(g - -592, a);
  }
  function n(a, s, c, d, g) {
    return Ae(g - -599, s);
  }
  function r(a, s, c, d, g) {
    return Ae(a - -196, d);
  }
  const i = x();
  for (; ; )
    try {
      if (parseInt(e("LoQ3", -143, -74, -253, -174)) / 1 + -parseInt(r(180, 74, 241, "*2i^", 184)) / 2 * (-parseInt(r(94, 160, 75, "PCUs", 101)) / 3) + parseInt(e("z*#1", -113, -212, -255, -195)) / 4 * (-parseInt(n(-208, "*2i^", -110, -277, -212)) / 5) + -parseInt(n(-272, "Lx3&", -269, -292, -285)) / 6 + parseInt(r(104, 195, 12, "*2i^", -4)) / 7 + parseInt(n(-196, "d5B!", -245, -179, -269)) / 8 + -parseInt(t(415, 399, 428, "DNy&", 361)) / 9 === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Ex, -3175 * -410 + -969033 + -1 * -459320);
function Pe(x, o, t, e, n) {
  return Ae(t - -567, o);
}
function Lt(x, o, t, e, n) {
  return Ae(n - -972, t);
}
function Ex() {
  const x = ["xK7dRCoEFG", "WR11WR0", "sSkHd8kXgW", "WRf0W4iRkq", "W5NcO8kxubS", "WO10W7XDW5u", "wmk4dYFcVW", "kSo0WRK", "WOFcUSkGsSk8", "lqxdNmowfSobo8k8W6RcVmoNemk7", "W4VcR8knqCkoW5/dNq", "W6dcI8ob", "CSknWQVcVSoE", "EmoklSovW5S", "W4vpoYNcPa", "WONcMhNcHCkb", "WRD1WQJdPMC", "y8kAW7tcOZ8", "F8k8WPldTx8", "WOXSW4flW4a", "e1PH", "W4JcS8kiqmk8W6FdVG", "DSk4W6G", "W6pcG8kxmSod", "W5lcTSkw", "gW5XWOBdUq", "WQfTW5/dVXG", "WPrJWO/dJhC", "cZXxeq", "W6/cGCobvmol", "WRddSxVcHCkw", "W4ddG8ktgSo+W6irWOldSSksW5C+WQS", "j8o2WQtdM2y", "EMSfWO0h", "WQuog10g", "W5Wxhmo4W6W", "W7OaWRZcUuxdQ8oLfCk1rmkTW5ZcLG", "WPuefSklW5W", "W6NcICobxSoc", "zCoAle43", "uutdUSkTza", "f0TNnmo3", "lJHwcSkz", "W4tcPNncvG", "w8k2e8kDaG", "z3DtkG", "WRjlbM0y", "F8oxnCoJW4u", "W4xcP3rIgW", "W57cICkHvxC", "WPf8W61lW54", "t8kylCopW4S", "W5xdOshdN8obWPddKbxcSZrcW4pcIa", "WQXfW6xdVWC", "WOFcThNcN8kq", "k8kFsdldVW", "W6lcMSoAtSoz", "W681W4C", "WQzwW6BdPq4", "z8k9z8kv", "Amk+W6NdK8ks", "WRSecwyG", "WPbCW6bhW4q", "W6NcKmkzFeu", "iSkkwr3dVG", "W7ZcT8k4yMS", "oMFdLSklxa", "WR4kbgSw", "WPxcVSkFCmkN", "WOWflSkCW4y", "WQfIWOH5W7G", "WRpcSmolv8ka", "wazlWR0", "W6/cICkhDSop", "vSkJdW", "WReehwWi", "W47cMmkPhG", "h8o0h2VcSq", "WRNcHCoKfgW", "W6G9W5O", "W7DCoIVdTG", "ENmyxNW", "aSk/paNdPa", "uHJdPmkmW7K", "hCkZW6ZcH0a", "rcFdH8kDWQq", "W5pcQ8kFqfG", "wHTAWP0F", "WOiRicT/", "W6/cM8oqe8og", "WPv6W71AW54", "D8ohcSkvWO3cMguRWRfHBCol", "WPf8W6O", "WRSTW4ruW5q", "tMtcKCkgfa", "W59yb8o5W7W", "WQHOW4SY", "ACk2DCk+WPG", "fmkfW7LQCq", "c8kfW79NCa", "j8oHWQxdM3a", "W43cQg5P", "W4i6kHbArCkn", "Dw8it30", "D8kPW5q", "Frb8WQWr", "b8kvxX7dVq", "WP3cHu7cLmks", "xSk0DK8", "WPHwW7NdOvq", "WRCUhJz4", "WPtcHCkQjfe", "qtldHmkzWQu", "sI3dVmkRW5W", "W7BcG3jvqW", "W41yoW", "jmk/BZNdHq", "DmkWW7W", "WRf0W4qZna", "lCoGWPxdNMi", "WP7cMCkBjKi", "gCkwW79MAW", "ymoDW7pdUCkgWQ3dRIbYW7BdP8offq", "WPVcLSobrSk7", "WO7cSmkf", "F8kRfcFcOG", "FhOuWO0h", "W58wgSoZWQG", "iSkzWQ3cPCoe", "jmkgqConW4y", "kSk5utZdMG", "F8oLkhZcK8kfjG1pW5TCW4G", "W5nsjW", "ft5aeCkg", "WQRcVSkzFCkM", "kmo6WRddJwC", "W7VcG8k4d8ov", "WP05gYnO", "E8kTW7tdK8ke", "FCoDimosW50", "uaxdVW", "taxdUCocW6q", "W7lcJ8kuw3S", "DmkWWOxdK2q", "W607W5FdUCoU", "x8k7A1JcTG", "W4RcRujHBW", "cmkbW7v9", "WPJcSCkyDSoV", "ESk8WOldKM8", "W4Ltidi", "DSksxWldPb8E", "l8kLBZNdHa", "W4tdN8oWyrVdMg80WQBdPmkoma", "vHvAWRSA", "FexcNmklxa", "WO3cSNlcGSkg", "f8kzWRBcPmoc", "WOnEW6NdQrO", "WPhcTSkiDSkH", "tGxdRmkgW4e", "kCklD8kvWPddPIHgyHvJvW", "W74hWRZcV0ddQCoNiSkWumkqW6ZcKa", "WPf6W6LRW4i", "CSoBjmoiW5S", "ACk8csRcVG", "shNcJCkDfa", "BwddI8kqwW", "CgGnrq", "W5xdHSkFp8of", "kmo/WPddOeW1x8o5W4HjWR4R", "W4JdQmoDjSo+WOdcNNrVmSodW67cMG", "y3pdHmkzWQi", "W6iGW5VdR8oZ", "ENJcK8kaaa", "utZdMSk1WQa", "WPv0W7PnW5G", "WOr0W58YmG", "FM7dJCk7xW", "WPrOWQJdJhq", "vmkOCeJcRq", "a8oPfwtcSq", "W5BcICohu8od", "xZldNmktWQK", "nKdcJ8kxqW", "BCooWORcLtr7WQ3cG8o0W5LvySoN", "iGb+", "W6BcJCobECof", "W4jylslcSW", "WOFcO3JcN8kg", "lCkDumohW5O", "W5lcH2zQxG", "lCkBva", "WQPfW7JdOWy", "WRb2WRBdSgm", "W45AoG", "emknW7DSFq", "bmkAwcldLG", "FCoxm8oJW4K", "W5dcUmkgwGC", "W5WDhCo1W6a", "raOSBmk8mCkWW5zouCkZAG", "W5izhCo1W6a", "nSkUW7BdTg8", "W7yrcSoZW6y", "vtBdJmkuWQq", "W4VcKmkO", "WRNcN8kZcvi", "W70CdCoLW4K", "j8kBrSomW5a", "nSkeWRdcJSoD", "W4XukIpcUa", "W5lcUmkrvGG", "tGpdQq", "sGVdUCkbW6u", "W5yxdSotW7O", "mqjP", "FxObWRuB", "nMOcsxy", "rhKAaba", "WOpcJmoRtCk4", "n8kfWRFcRSkq", "fbPunSkK", "W5tcSmkrxae", "a8oVfwdcQW", "Ed3dJ8kNWRS", "AwrvnYW", "Dv7cJCkbqa", "q2ZcJa", "AuxcH8kkwG", "W609W5FdVCo0", "WPpcSgxcGSkC", "FmoDnCoIW4C", "WPr6W6a", "y8kWhIZcUa", "WRX7WRpdJq", "ftndea"];
  return Ex = function() {
    return x;
  }, Ex();
}
function kt(x, o, t, e, n) {
  return Ae(n - -393, e);
}
function Ie(x, o, t, e, n) {
  return Ae(e - 582, n);
}
function Ae(x, o) {
  const t = Ex();
  return Ae = function(e, n) {
    e = e - (-1923 * 2 + -1008 + 5116);
    let r = t[e];
    if (Ae.lTTyst === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", p = "";
        for (let b = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = b % 4 ? A * 64 + u : u, b++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          u = C.indexOf(u);
        for (let b = 0, A = l.length; b < A; b++)
          p += "%" + ("00" + l.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let l = [], p = 0, b, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          p = (p + l[u] + C.charCodeAt(u % C.length)) % 256, b = l[u], l[u] = l[p], l[p] = b;
        u = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, p = (p + l[u]) % 256, b = l[u], l[u] = l[p], l[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[p]) % 256]);
        return A;
      };
      Ae.iNSchy = d, x = arguments, Ae.lTTyst = !0;
    }
    const a = t[5 * 60 + 1 * 559 + 859 * -1], s = e + a, c = x[s];
    return c ? r = c : (Ae.kgTMTK === void 0 && (Ae.kgTMTK = !0), r = Ae.iNSchy(r, n), x[s] = r), r;
  }, Ae(x, o);
}
var Na, Da;
class dI {
  constructor(o) {
    J(this, Da);
    J(this, Na);
    function t(n, r, i, a, s) {
      return Ae(r - -920, s);
    }
    function e(n, r, i, a, s) {
      return Ae(a - 828, n);
    }
    this[t(-499, -511, -533, -417, "OH2m") + e("o2Va", 1232, 1223, 1217) + "d"] = o;
  }
  async [(Da = Lt(-623, -586, "*2i^", -632, -684) + "se", Na = Lt(-446, -475, "bI][", -471, -550) + Pe(-389, "rtwE", -293), Lt(-607, -597, "g7OE", -757, -693))](o = Pe(-226, "QJU5", -254), t = Pe(-263, "vAR)", -220) + kt(166, -9, 4, "bI][", 62) + "ic") {
    function e(s, c, d, g, C) {
      return Ie(s - 299, c - 174, d - 371, d - 331, s);
    }
    function n(s, c, d, g, C) {
      return Ie(s - 6, c - 352, d - 86, C - -1378, c);
    }
    function r(s, c, d, g, C) {
      return Ie(s - 294, c - 201, d - 7, s - -930, c);
    }
    await Promise[a(-70, -71, -178, "^jcR") + e("0@l9", 1349, 1328)]([this[i(665, 530, 589, "]stD") + e("@UJ3", 1281, 1247) + "d"][a(137, 80, 29, "rtwE")](o), this[r(-59, "g*@P", -94) + n(-499, "PCUs", -564, -421, -503) + "e"](t)]);
    function i(s, c, d, g, C) {
      return kt(s - 65, c - 325, d - 172, g, d - 643);
    }
    function a(s, c, d, g, C) {
      return Ie(s - 473, c - 198, d - 255, c - -976, g);
    }
    this[i(745, 673, 704, "2(mR") + a(27, 5, -72, "MG9R") + n(-285, "ZnuC", -479, -410, -398)]();
  }
  async [kt(-27, -94, -154, "Nq@!", -99) + Ie(782, 905, 780, 869, "ofK*") + "se"](o) {
    function t(a, s, c, d, g) {
      return kt(a - 97, s - 165, c - 497, a, c - 567);
    }
    function e(a, s, c, d, g) {
      return W0(a - 455, s - 498, c - 250, s, d - -768);
    }
    function n(a, s, c, d, g) {
      return Ie(a - 215, s - 421, c - 350, c - -964, a);
    }
    function r(a, s, c, d, g) {
      return Lt(a - 24, s - 217, a, d - 347, s - 1826);
    }
    function i(a, s, c, d, g) {
      return Lt(a - 17, s - 159, a, d - 16, c - 31);
    }
    try {
      if (n("@UJ3", -59, -28, -135, 72) === n("[AAH", -59, -79, -98, -107)) {
        _0xc0745e instanceof _0x2c05ed && _0x3a92a1[t("DKXn", 532, 466, 476, 560) + i("XeUA", -489, -596, -713, -609)](_0x5595cc);
        return;
      } else {
        const a = await fetch(o);
        if (!a.ok)
          if (e(126, "0@l9", 102, 25, 20) !== e(79, "OH2m", 130, 74, 150)) {
            _0x38bed9[r("CDkI", 1219, 1319, 1326, 1184)](t("uCxA", 620, 522, 532, 593) + e(-53, "gIf!", 96, 30, 46) + n("OH2m", 57, 32, 42, 56) + t("^xH9", 443, 543, 456, 614) + i("0@l9", -603, -499, -561, -590)), this[r("xwI$", 1207, 1206, 1145, 1160) + "se"] = void (-16 * -596 + 688 * -8 + -4032);
            return;
          } else throw new Error(n("oshn", 92, -16, -59, 75) + e(-258, "CDkI", -99, -144, -181) + t("0v3p", 615, 586, 603, 489) + t("]stD", 580, 552, 563, 521) + "d.");
        this[r("*2i^", 1142, 1037, 1200, 1162) + "se"] = await a[r("JXMl", 1130, 1142, 1153, 1131)]();
      }
    } catch (a) {
      i("2(mR", -533, -465, -535) === i("yI$V", -586, -470, -412) ? (this[e(-162, "Nq@!", -109, -43) + "se"] = void (-9593 * 1 + -3951 + 4 * 3386), console[e(-151, "QJU5", -71, -122)](a)) : this[e(83, "yI$V", 150, 47) + i("g7OE", -596, -624, -510) + "d"] = _0x38ae47;
    }
  }
  async [Pe(-176, "0v3p", -140) + Ie(1069, 1180, 1045, 1071, "z*#1") + "e"](o) {
    function t(i, a, s, c, d) {
      return Lt(i - 201, a - 262, i, c - 395, d - 989);
    }
    function e(i, a, s, c, d) {
      return Pe(i - 332, c, d - 1342);
    }
    this[n(550, 473, 643, "Lu4)") + t("yI$V", 318, 335, 348, 300)] = void (-8924 + 33 * 298 + -910);
    function n(i, a, s, c, d) {
      return W0(i - 413, a - 229, s - 392, c, i - -222);
    }
    function r(i, a, s, c, d) {
      return Ie(i - 335, a - 40, s - 426, d - 60, a);
    }
    if (!o)
      if (t("0@l9", 229, 242, 273, 288) === e(1253, 1092, 1134, "^jcR", 1168)) _0x216350[n(467, 436, 503, "PCUs") + "ch"]((i) => _0x45133d[t("0kFV", 544, 558, 341, 442)](i));
      else {
        console[r(986, "^xH9", 1180, 1068, 1104)](t("DNy&", 352, 532, 375, 465) + t("LoQ3", 304, 481, 299, 413) + n(633, 665, 611, "cqf8") + r(1010, "N5L6", 1158, 1023, 1045) + t("0@l9", 433, 577, 385, 459)), this[r(912, "sf36", 1023, 902, 970) + "se"] = void (1213 * -4 + 6733 + -11 * 171);
        return;
      }
    await this[e(1191, 1078, 985, "cqf8", 1104) + r(994, "cqf8", 1046, 930, 975) + "se"](o);
  }
  [Ie(1070, 1062, 1035, 1066, "^xH9") + W0(781, 609, 760, "^xH9", 668) + "s"](o) {
    function t(n, r, i, a, s) {
      return W0(n - 325, r - 388, i - 147, n, r - -291);
    }
    function e(n, r, i, a, s) {
      return Pe(n - 199, r, n - 117);
    }
    o[t("^jcR", 453, 569) + "ch"]((n) => console[e(-56, "CDkI")](n));
  }
  [Pe(-190, "g*@P", -118) + kt(39, 81, 25, "Nq@!", -21) + Ie(1043, 959, 1040, 1022, "Lu4)")](o) {
    function t(e, n, r, i, a) {
      return Ie(e - 323, n - 207, r - 74, e - 102, n);
    }
    o[t(988, "@UJ3", 879) + "ch"]((e) => console[t(981, "vAR)", 984)](e));
  }
  [Pe(-152, "bI][", -251) + Ie(962, 998, 966, 946, "^jcR")]() {
    function o(n, r, i, a, s) {
      return Pe(n - 48, i, s - 949);
    }
    function t(n, r, i, a, s) {
      return kt(n - 100, r - 385, i - 291, a, i - 1227);
    }
    function e(n, r, i, a, s) {
      return Lt(n - 66, r - 30, a, a - 205, r - 1463);
    }
    return window[t(1075, 1158, 1193, "VamV") + o(848, 757, "VamV", 713, 827)][o(759, 820, "DNy&", 800, 864) + e(911, 826, 878, "0@l9")];
  }
  [W0(777, 874, 752, "@UJ3", 840) + Pe(-91, "CWxn", -137) + Pe(-265, "LoQ3", -147)]() {
    function o(i, a, s, c, d) {
      return W0(i - 17, a - 317, s - 302, d, a - -1074);
    }
    function t(i, a, s, c, d) {
      return Pe(i - 34, d, a - -301);
    }
    function e(i, a, s, c, d) {
      return kt(i - 42, a - 299, s - 445, a, s - -434);
    }
    function n(i, a, s, c, d) {
      return Pe(i - 108, c, a - 635);
    }
    function r(i, a, s, c, d) {
      return kt(i - 189, a - 384, s - 406, d, a - 1228);
    }
    try {
      if (o(-312, -306, -376, -302, "oshn") === o(-294, -240, -227, -316, "DNy&")) {
        if (!this[o(-533, -440, -455, -514, "I*eQ") + "se"]) {
          if (e(-230, "CWxn", -331, -379, -251) !== r(1072, 1167, 1104, 1277, "Lx3&")) throw new Vo(t(-325, -424, -309, -529, "Czm4") + o(-376, -295, -213, -338, "PCUs") + e(-493, "a0QP", -422, -496, -498) + e(-475, "61eh", -489, -403, -512) + ".");
          if (!this[r(1201, 1304, 1357, 1297, "vAR)") + "se"]) throw new _0x14bb22(t(-311, -409, -498, -437, "gIf!") + n(380, 369, 356, "@UJ3", 474) + o(-408, -435, -497, -404, "*2i^") + n(465, 469, 432, "cqf8", 543) + ".");
          if (!this[n(451, 375, 493, "oshn", 313) + r(1132, 1113, 1164, 1063, "I*eQ") + "d"][e(-461, "2(mR", -561, -583, -667) + t(-430, -440, -384, -353, "DKXn") + o(-379, -279, -362, -352, "0v3p") + "ed"]()) throw new _0x164355(e(-384, "ofK*", -352, -273, -318) + t(-689, -598, -716, -601, "g*@P") + o(-339, -371, -459, -342, "sf36") + r(1100, 1160, 1085, 1261, "JXMl") + ".");
          this[t(-475, -559, -580, -627, "rtwE") + t(-573, -464, -547, -372, "bI][")] = new _0x4d0c5e(_0x41eb69(this[n(276, 387, 310, "61eh", 326) + "se"], this[n(524, 531, 646, "0kFV", 471) + r(1236, 1246, 1261, 1323, "uCxA")]())), this[n(656, 559, 488, "Nq@!", 512) + o(-535, -426, -541, -335, "]stD") + "s"](this[t(-418, -489, -442, -554, "PCUs") + e(-599, "DKXn", -522, -405, -536)][r(1186, 1242, 1168, 1277, "d5B!") + "s"]), this[t(-625, -510, -465, -428, "QJU5") + t(-492, -605, -487, -641, "*2i^") + o(-306, -339, -221, -232, "ZnuC")](this[t(-526, -513, -461, -593, "uCxA") + n(550, 502, 430, "*2i^", 517)][r(1190, 1300, 1373, 1397, "JXMl") + e(-425, "g7OE", -503, -437, -616)]);
        }
        if (!this[o(-303, -299, -296, -185, "PCUs") + e(-423, "o2Va", -438, -354, -513) + "d"][e(-474, "N5L6", -392, -416, -349) + r(1258, 1216, 1272, 1333, "LoQ3") + e(-379, "ofK*", -403, -347, -492) + "ed"]())
          if (n(363, 460, 449, "ofK*", 540) === e(-485, "XeUA", -436, -479, -528)) this[o(-458, -393, -364, -345, "61eh") + "se"] = void (-14551 + -14551 * -1), _0x35977a[n(551, 563, 495, "61eh", 643)](_0x5832dd);
          else throw new Vo(o(-321, -266, -240, -352, "g7OE") + t(-504, -429, -398, -529, "o2Va") + e(-460, "bI][", -432, -349, -433) + r(1085, 1099, 1030, 1034, "ZnuC") + ".");
        this[e(-464, "ofK*", -408, -402, -364) + e(-440, "@UJ3", -515, -512, -622)] = new Ta(iI(this[t(-689, -595, -605, -580, "VamV") + "se"], this[t(-593, -507, -579, -583, "PCUs") + r(1205, 1302, 1263, 1283, "OH2m")]())), this[o(-172, -269, -158, -342, "xwI$") + o(-309, -404, -439, -401, "^jcR") + "s"](this[t(-633, -601, -685, -555, "eqwC") + o(-270, -248, -212, -235, "JXMl")][o(-383, -417, -482, -301, "[AAH") + "s"]), this[e(-335, "]stD", -333, -267, -247) + r(1070, 1146, 1257, 1165, "bI][") + o(-246, -324, -415, -386, "eqwC")](this[t(-536, -489, -393, -387, "PCUs") + e(-551, "g*@P", -484, -573, -455)][t(-392, -508, -474, -391, "LoQ3") + r(1340, 1258, 1337, 1347, "VamV")]);
      } else _0x242cb5[t(-609, -547, -545, -499, "61eh")]();
    } catch (i) {
      if (o(-394, -375, -462, -439, "cqf8") === o(-341, -386, -459, -435, "CWxn")) {
        if (i instanceof Vo)
          if (n(444, 417, 449, "z*#1") === t(-383, -483, -378, -404, "DKXn")) i[e(-468, "^jcR", -460)]();
          else throw new _0x3cdb60(t(-468, -418, -312, -322, "Lx3&") + o(-505, -427, -543, -329, "LoQ3") + o(-302, -251, -173, -231, "cqf8") + n(513, 500, 567, "oshn") + "d.");
        else if (i instanceof Error) {
          if (t(-489, -532, -514, -448, "Czm4") === n(647, 541, 473, "LoQ3")) return _0x1211a3[n(329, 378, 310, "xwI$") + o(-402, -350, -358, -462, "DKXn")][t(-334, -412, -359, -512, "DKXn") + e(-530, "XeUA", -512)];
          console[e(-409, "JXMl", -340)](i);
        }
        const a = {};
        a[n(606, 554, 628, "Czm4") + r(1283, 1293, 1359, 1393, "DKXn")] = !1, a[r(1207, 1157, 1114, 1191, "ofK*") + "s"] = [], a[e(-554, "oshn", -531) + e(-464, "sf36", -437)] = [], a[t(-568, -522, -610, -593, "MG9R") + e(-476, "0v3p", -427) + n(498, 566, 469, "g7OE")] = void 0, a[n(482, 506, 389, "yI$V")] = function() {
        }, this[r(1313, 1301, 1315, 1252, "ZnuC") + r(1122, 1187, 1273, 1091, "sf36")] = new Ta(a);
      } else {
        _0x4b2fd6 instanceof _0x1f6d8f ? _0x2e8060[e(-440, "eqwC", -344)]() : _0x18f642 instanceof _0x3f65c2 && _0x353b0f[t(-638, -546, -602, -503, "ofK*")](_0x22c39c);
        const a = {};
        a[n(493, 553, 637, "ZnuC") + t(-503, -526, -432, -513, "g*@P")] = !1, a[n(544, 448, 439, "g7OE") + "s"] = [], a[o(-338, -352, -330, -253, "LoQ3") + t(-520, -511, -435, -435, "[AAH")] = [], a[n(451, 336, 297, "PCUs") + o(-295, -344, -366, -296, "Lu4)") + o(-145, -222, -116, -218, "*2i^")] = void 0, a[e(-433, "yI$V", -389)] = function() {
        }, this[e(-472, "LoQ3", -509) + n(308, 399, 345, "cqf8")] = new _0x1e848e(a);
      }
    }
  }
  [Pe(-113, "MG9R", -75) + Ie(959, 1075, 929, 1002, "LoQ3") + Ie(987, 950, 877, 990, "CDkI") + "t"]() {
    function o(e, n, r, i, a) {
      return kt(e - 493, n - 318, r - 124, i, r - -447);
    }
    function t(e, n, r, i, a) {
      return Ie(e - 199, n - 127, r - 126, a - -1327, i);
    }
    return this[o(-562, -621, -538, "VamV") + t(-326, -257, -312, "CWxn", -324)];
  }
  [Pe(-93, "I*eQ", -183) + Pe(-183, "@UJ3", -116) + Ie(858, 982, 930, 902, "OH2m")]() {
    var i, a;
    function o(s, c, d, g, C) {
      return Ie(s - 148, c - 241, d - 116, s - -715, d);
    }
    function t(s, c, d, g, C) {
      return Ie(s - 34, c - 42, d - 118, g - -1425, C);
    }
    function e(s, c, d, g, C) {
      return Lt(s - 71, c - 43, g, g - 259, d - 1537);
    }
    if (!this[o(207, 204, "g7OE") + "se"]) {
      if (n(-135, -99, -168, "o2Va") !== t(-536, -506, -450, -469, "*2i^")) throw new _0x2016e6(n(-51, 17, 4, "*2i^") + t(-538, -429, -559, -545, "o2Va") + r(918, 862, 891, "]stD") + t(-483, -377, -518, -402, "0v3p") + ".");
      return;
    }
    function n(s, c, d, g, C) {
      return Ie(s - 133, c - 349, d - 314, d - -1015, g);
    }
    function r(s, c, d, g, C) {
      return Ie(s - 200, c - 493, d - 252, c - -70, g);
    }
    try {
      if (o(346, 420, "g*@P", 444, 243) === e(902, 878, 916, "CDkI", 915)) {
        const s = JSON[o(293, 200, "eqwC", 217, 209)](this[o(223, 204, "QJU5", 200, 332) + "se"]);
        return (i = s == null ? void 0 : s[o(327, 373, "[AAH", 251, 331) + e(910, 948, 951, "d5B!", 1043)]) == null ? void 0 : i[r(801, 793, 885, "DNy&", 704) + o(337, 389, "!VNo", 312, 242)];
      } else {
        const s = _0x7d8b1d[r(932, 883, 859, "DKXn", 995)](this[e(960, 972, 981, "DKXn", 1023) + "se"]);
        return (a = s == null ? void 0 : s[t(-262, -280, -248, -366, "Czm4") + n(-129, 5, -56, "bI][", -9)]) == null ? void 0 : a[r(942, 959, 874, "vAR)", 930) + n(-51, 95, 48, "g7OE", 156)];
      }
    } catch (s) {
      if (r(831, 941, 1043, "0@l9") === r(838, 787, 728, "OH2m")) return;
      s instanceof Error && (t(-498, -307, -438, -391, "0@l9") === n(-61, -46, -50, "!VNo") ? re[e(917, 994, 909, "cqf8") + o(136, 21, "g*@P")](s) : _0x3cb49e[n(-68, -151, -63, "sf36")](_0x1acd5e));
      return;
    }
  }
}
const Xx = class Xx extends dI {
  static getInstance() {
    if (!this._instance) {
      const o = new gI();
      this._instance = new Xx(o);
    }
    return this._instance;
  }
};
J(Xx, "_instance");
let vr = Xx;
const uI = ({ children: x }) => {
  const o = Mt(null);
  return Bl(o, yt.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ H(xu, { ref: o, children: x });
}, lI = ({ cameraOptions: x }) => x ? /* @__PURE__ */ H(Qd, { target: x.styleTarget, children: /* @__PURE__ */ H(
  mu,
  {
    licensePath: x.licensePath,
    bramble: vr.getInstance(),
    wasmDirectoryPath: x.wasmDirectoryPath,
    children: /* @__PURE__ */ H(yu, { analytics: xI, appKey: "065cf6e242fc5e785cd17eebfbfbbd212a33133b", children: /* @__PURE__ */ H(
      gu,
      {
        value: $1({
          onError: x.onError
        }),
        children: /* @__PURE__ */ H(Ds, { children: /* @__PURE__ */ H(uI, { children: /* @__PURE__ */ H(X1, { ...x }) }) })
      }
    ) })
  }
) }) : null;
ag(lI, "x-dot-document-auto-capture", ["cameraOptions"]);
