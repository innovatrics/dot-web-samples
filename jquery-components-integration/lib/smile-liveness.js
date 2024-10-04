var wg = Object.defineProperty;
var Ni = (x) => {
  throw TypeError(x);
};
var Bg = (x, o, t) => o in x ? wg(x, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[o] = t;
var J = (x, o, t) => Bg(x, typeof o != "symbol" ? o + "" : o, t), Di = (x, o, t) => o.has(x) || Ni("Cannot " + t);
var M = (x, o, t) => (Di(x, o, "read from private field"), t ? t.call(x) : o.get(x)), ge = (x, o, t) => o.has(x) ? Ni("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(x) : o.set(x, t), ae = (x, o, t, e) => (Di(x, o, "write to private field"), e ? e.call(x, t) : o.set(x, t), t);
var Vn, D, is, as, n0, Fi, ss, Jo, Nr, _o, Qo, cs, pn = {}, gs = [], Gg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, xo = Array.isArray;
function Pt(x, o) {
  for (var t in o) x[t] = o[t];
  return x;
}
function ds(x) {
  var o = x.parentNode;
  o && o.removeChild(x);
}
function Fe(x, o, t) {
  var e, n, r, i = {};
  for (r in o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : i[r] = o[r];
  if (arguments.length > 2 && (i.children = arguments.length > 50 * 102 + -63 * 9 + -4530 * 1 ? Vn.call(arguments, 5308 * 1 + 6511 + -303 * 39) : t), typeof x == "function" && x.defaultProps != null)
    for (r in x.defaultProps) void (1957 * 2 + 9633 + -31 * 437) === i[r] && (i[r] = x.defaultProps[r]);
  return In(x, i, e, n, null);
}
function In(x, o, t, e, n) {
  var r = {};
  r.type = x, r.props = o, r.key = t, r.ref = e, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (-3 * -2243 + 1327 * -2 + -4075), r.__c = null, r.constructor = void (9 * 1017 + -3581 * -1 + 12734 * -1), r.__v = n ?? ++is, r.__i = -(15 * 239 + -917 * -9 + -11837 * 1), r.__u = 0;
  var i = r;
  return n == null && D.vnode != null && D.vnode(i), i;
}
function kg() {
  var x = {};
  return x.current = null, x;
}
function pt(x) {
  return x.children;
}
function gt(x, o) {
  this.props = x, this.context = o;
}
function d0(x, o) {
  if (o == null) return x.__ ? d0(x.__, x.__i + (-3 * -227 + -5013 + 619 * 7)) : null;
  for (var t; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) return t.__e;
  return typeof x.type == "function" ? d0(x) : null;
}
function us(x) {
  var o, t;
  if ((x = x.__) != null && x.__c != null) {
    for (x.__e = x.__c.base = null, o = -731 + -731 * -1; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) {
      x.__e = x.__c.base = t.__e;
      break;
    }
    return us(x);
  }
}
function Uo(x) {
  (!x.__d && (x.__d = !(5 * 959 + -6381 + 1586)) && n0.push(x) && !wx.__r++ || Fi !== D.debounceRendering) && ((Fi = D.debounceRendering) || ss)(wx);
}
function wx() {
  var x, o, t, e, n, r, i, a;
  for (n0.sort(Jo); x = n0.shift(); ) x.__d && (o = n0.length, e = void (10949 + -10949 * 1), r = (n = (t = x).__v).__e, i = [], a = [], t.__P && ((e = Pt({}, n)).__v = n.__v + (8360 + 35 * 4 + -1 * 8499), D.vnode && D.vnode(e), Dr(t.__P, e, n, t.__n, t.__P.namespaceURI, 32 & n.__u ? [r] : null, i, r ?? d0(n), !!(32 & n.__u), a), e.__v = n.__v, e.__.__k[e.__i] = e, fs(i, e, a), e.__e != r && us(e)), n0.length > o && n0.sort(Jo));
  wx.__r = -5384 + 1 * 5801 + -417;
}
function ls(x, o, t, e, n, r, i, a, s, c, d) {
  var g, C, l, h, p, A = e && e.__k || gs, u = o.length;
  for (t.__d = s, Hg(t, o, A), s = t.__d, g = -1047 * -2 + -4296 + 6 * 367; g < u; g++) (l = t.__k[g]) != null && typeof l != "boolean" && typeof l != "function" && (C = -(-5409 + 39 * -2 + 5488) === l.__i ? pn : A[l.__i] || pn, l.__i = g, Dr(x, l, C, n, r, i, a, s, c, d), h = l.__e, l.ref && C.ref != l.ref && (C.ref && Fr(C.ref, null, l), d.push(l.ref, l.__c || h, l)), p == null && h != null && (p = h), 94267 + 72911 * -1 + 44180 & l.__u || C.__k === l.__k ? (s && typeof l.type == "string" && !x.contains(s) && (s = d0(C)), s = Is(l, s, x)) : typeof l.type == "function" && l.__d !== void 0 ? s = l.__d : h && (s = h.nextSibling), l.__d = void 0, l.__u &= -(-85193 * -2 + 9012 * -40 + 386703));
  t.__d = s, t.__e = p;
}
function Hg(x, o, t) {
  var e, n, r, i, a, s = o.length, c = t.length, d = c, g = -8709 * -1 + 4981 + -13690;
  for (x.__k = [], e = 3 * 2991 + 4406 + -13379; e < s; e++) i = e + g, (n = x.__k[e] = (n = o[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? In(null, n, null, null, null) : xo(n) ? In(pt, { children: n }, null, null, null) : void (6132 + -5 * -415 + -8207) === n.constructor && n.__b > 0 ? In(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = x, n.__b = x.__b + (3194 + -1 * 2635 + -558), a = Og(n, t, i, d), n.__i = a, r = null, a !== -1 && (d--, (r = t[a]) && (r.__u |= 253439 + -4208 * -37 + -278063 * 1)), r == null || r.__v === null ? (-(-2028 * 4 + -1649 + -6 * -1627) == a && g--, typeof n.type != "function" && (n.__u |= -1 * -13647 + -14 * -2363 + 18807)) : a !== i && (a == i - 1 ? g = a - i : a == i + (8818 * -1 + -2405 + -488 * -23) ? g++ : a > i ? d > s - i ? g += a - i : g-- : a < i && g++, a !== e + g && (n.__u |= -1911 + 6661 * -5 + 8 * 12594))) : (r = t[i]) && r.key == null && r.__e && 1 * 725 + -3643 * 2 + 6561 == (63583 + 1 * 67489 & r.__u) && (r.__e == x.__d && (x.__d = d0(r)), zo(r, r, !(-2 * 4996 + -5692 + -3137 * -5)), t[i] = null, d--);
  if (d)
    for (e = 0; e < c; e++) (r = t[e]) != null && 2608 + 25 * 283 + -9683 * 1 == (-1 * -47137 + 3956 + 79979 & r.__u) && (r.__e == x.__d && (x.__d = d0(r)), zo(r, r));
}
function Is(x, o, t) {
  var e, n;
  if (typeof x.type == "function") {
    for (e = x.__k, n = 6051 + -78 * -39 + -21 * 433; e && n < e.length; n++) e[n] && (e[n].__ = x, o = Is(e[n], o, t));
    return o;
  }
  x.__e != o && (t.insertBefore(x.__e, o || null), o = x.__e);
  do
    o = o && o.nextSibling;
  while (o != null && 3 * -1269 + 1433 + 2382 === o.nodeType);
  return o;
}
function Vt(x, o) {
  return o = o || [], x == null || typeof x == "boolean" || (xo(x) ? x.some(function(t) {
    Vt(t, o);
  }) : o.push(x)), o;
}
function Og(x, o, t, e) {
  var n = x.key, r = x.type, i = t - (-5 * 1639 + 17 * 587 + -1783 * 1), a = t + (2 * -2433 + -838 * -3 + 2353), s = o[t];
  if (s === null || s && n == s.key && r === s.type && -332 * -22 + 5 * -1453 + -3 * 13 == (203395 + 11 * 14886 + 236069 * -1 & s.__u)) return t;
  if (e > (s != null && 29 * -195 + -59 * 95 + 11260 == (-618 * -368 + -112949 + 16597 & s.__u) ? 9135 + 2 * -1180 + -6774 * 1 : 7745 + -1762 * -2 + 11269 * -1)) for (; i >= 8456 + -3 * -365 + -9551 || a < o.length; ) {
    if (i >= -2489 + -349 * -11 + -1350) {
      if ((s = o[i]) && -1834 * -1 + 1111 + -1 * 2945 == (131072 & s.__u) && n == s.key && r === s.type) return i;
      i--;
    }
    if (a < o.length) {
      if ((s = o[a]) && 1080 + 2 * 1303 + 38 * -97 == (-2066 * 124 + -188829 * 1 + -115217 * -5 & s.__u) && n == s.key && r === s.type) return a;
      a++;
    }
  }
  return -(9381 + 1 * -8934 + -2 * 223);
}
function Yi(x, o, t) {
  o[-7662 + 3831 * 2] === "-" ? x.setProperty(o, t ?? "") : x[o] = t == null ? "" : typeof t != "number" || Gg.test(o) ? t : t + "px";
}
function $n(x, o, t, e, n) {
  var r;
  e: if (o === "style")
    if (typeof t == "string") x.style.cssText = t;
    else {
      if (typeof e == "string" && (x.style.cssText = e = ""), e)
        for (o in e) t && o in t || Yi(x.style, o, "");
      if (t)
        for (o in t) e && t[o] === e[o] || Yi(x.style, o, t[o]);
    }
  else if (o[2 * 1259 + -7507 + 3 * 1663] === "o" && o[-35 * -101 + 852 + -86 * 51] === "n") r = o !== (o = o.replace(/(PointerCapture)$|Capture$/i, "$1")), o = o.toLowerCase() in x || o === "onFocusOut" || o === "onFocusIn" ? o.toLowerCase().slice(-9247 + 3 * 3083) : o.slice(-5 * 1759 + -306 * -19 + 2983), x.l || (x.l = {}), x.l[o + r] = t, t ? e ? t.u = e.u : (t.u = Nr, x.addEventListener(o, r ? Qo : _o, r)) : x.removeEventListener(o, r ? Qo : _o, r);
  else {
    if (n == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in x) try {
      x[o] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || !(-6802 * 1 + 1 * -9998 + 16801) === t && o[-1 * 6393 + -237 * 15 + 9952] !== "-" ? x.removeAttribute(o) : x.setAttribute(o, o == "popover" && -712 * -5 + 2512 + -6071 == t ? "" : t));
  }
}
function Xi(x) {
  return function(o) {
    if (this.l) {
      var t = this.l[o.type + x];
      if (o.t == null) o.t = Nr++;
      else if (o.t < t.u) return;
      return t(D.event ? D.event(o) : o);
    }
  };
}
function Dr(x, o, t, e, n, r, i, a, s, c) {
  var d, g, C, l, h, p, A, u, W, H, N, Y, X, K, _, Ie, U = o.type;
  if (void (-1409 * 7 + 124 * -74 + 19039) !== o.constructor) return null;
  6333 + -2405 * 2 + -45 * 31 & t.__u && (s = !!(32 & t.__u), r = [a = o.__e = t.__e]), (d = D.__b) && d(o);
  e: if (typeof U == "function") try {
    if (u = o.props, W = "prototype" in U && U.prototype.render, H = (d = U.contextType) && e[d.__c], N = d ? H ? H.props.value : d.__ : e, t.__c ? A = (g = o.__c = t.__c).__ = g.__E : (W ? o.__c = g = new U(u, N) : (o.__c = g = new gt(u, N), g.constructor = U, g.render = Zg), H && H.sub(g), g.props = u, g.state || (g.state = {}), g.context = N, g.__n = e, C = g.__d = !0, g.__h = [], g._sb = []), W && g.__s == null && (g.__s = g.state), W && U.getDerivedStateFromProps != null && (g.__s == g.state && (g.__s = Pt({}, g.__s)), Pt(g.__s, U.getDerivedStateFromProps(u, g.__s))), l = g.props, h = g.state, g.__v = o, C) W && U.getDerivedStateFromProps == null && g.componentWillMount != null && g.componentWillMount(), W && g.componentDidMount != null && g.__h.push(g.componentDidMount);
    else {
      if (W && U.getDerivedStateFromProps == null && u !== l && g.componentWillReceiveProps != null && g.componentWillReceiveProps(u, N), !g.__e && (g.shouldComponentUpdate != null && !(-359 * -22 + -1151 * 2 + -5595) === g.shouldComponentUpdate(u, g.__s, N) || o.__v === t.__v)) {
        for (o.__v !== t.__v && (g.props = u, g.state = g.__s, g.__d = !(-1486 + 1 * 6681 + 53 * -98)), o.__e = t.__e, o.__k = t.__k, o.__k.forEach(function(fe) {
          fe && (fe.__ = o);
        }), Y = 19 * -341 + 1 * 7830 + -193 * 7; Y < g._sb.length; Y++) g.__h.push(g._sb[Y]);
        g._sb = [], g.__h.length && i.push(g);
        break e;
      }
      g.componentWillUpdate != null && g.componentWillUpdate(u, g.__s, N), W && g.componentDidUpdate != null && g.__h.push(function() {
        g.componentDidUpdate(l, h, p);
      });
    }
    if (g.context = N, g.props = u, g.__P = x, g.__e = !(123 * 63 + 6980 + -14728), X = D.__r, K = 15380 + 3845 * -4, W) {
      for (g.state = g.__s, g.__d = !(-1099 + 2598 * 2 + -4096), X && X(o), d = g.render(g.props, g.state, g.context), _ = 9458 + 2 * -4729; _ < g._sb.length; _++) g.__h.push(g._sb[_]);
      g._sb = [];
    } else do
      g.__d = !(-62 * 79 + 2588 * -2 + 10075), X && X(o), d = g.render(g.props, g.state, g.context), g.state = g.__s;
    while (g.__d && ++K < -17340 + 755 * 23);
    g.state = g.__s, g.getChildContext != null && (e = Pt(Pt({}, e), g.getChildContext())), W && !C && g.getSnapshotBeforeUpdate != null && (p = g.getSnapshotBeforeUpdate(l, h)), ls(x, xo(Ie = d != null && d.type === pt && d.key == null ? d.props.children : d) ? Ie : [Ie], o, t, e, n, r, i, a, s, c), g.base = o.__e, o.__u &= -(-5 * 441 + -3319 * -1 + 1 * -953), g.__h.length && i.push(g), A && (g.__E = g.__ = null);
  } catch (fe) {
    o.__v = null, s || r != null ? (o.__e = a, o.__u |= s ? 1 * -2906 + -5217 + -2761 * -3 : 3922 * -1 + -5 * 1277 + -49 * -211, r[r.indexOf(a)] = null) : (o.__e = t.__e, o.__k = t.__k), D.__e(fe, o, t);
  }
  else r == null && o.__v === t.__v ? (o.__k = t.__k, o.__e = t.__e) : o.__e = Kg(t.__e, o, t, e, n, r, i, s, c);
  (d = D.diffed) && d(o);
}
function fs(x, o, t) {
  o.__d = void 0;
  for (var e = -1323 * -6 + -2358 + -5580; e < t.length; e++) Fr(t[e], t[++e], t[++e]);
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
function Kg(x, o, t, e, n, r, i, a, s) {
  var c, d, g, C, l, h, p, A = t.props, u = o.props, W = o.type;
  if (W === "svg" ? n = "http://www.w3.org/2000/svg" : W === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), r != null) {
    for (c = 3367 * 1 + -2587 + 390 * -2; c < r.length; c++) if ((l = r[c]) && "setAttribute" in l == !!W && (W ? l.localName === W : l.nodeType === 3)) {
      x = l, r[c] = null;
      break;
    }
  }
  if (x == null) {
    if (W === null) return document.createTextNode(u);
    x = document.createElementNS(n, W, u.is && u), r = null, a = !(1161 + -10 * 116);
  }
  if (W === null) A === u || a && x.data === u || (x.data = u);
  else {
    if (r = r && Vn.call(x.childNodes), A = t.props || pn, !a && r != null)
      for (A = {}, c = 3981 + 5 * 1593 + -3982 * 3; c < x.attributes.length; c++) A[(l = x.attributes[c]).name] = l.value;
    for (c in A) if (l = A[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") g = l;
      else if (c !== "key" && !(c in u)) {
        if (c == "value" && "defaultValue" in u || c == "checked" && "defaultChecked" in u) continue;
        $n(x, c, null, l, n);
      }
    }
    for (c in u) l = u[c], c == "children" ? C = l : c == "dangerouslySetInnerHTML" ? d = l : c == "value" ? h = l : c == "checked" ? p = l : c === "key" || a && typeof l != "function" || A[c] === l || $n(x, c, l, A[c], n);
    if (d) a || g && (d.__html === g.__html || d.__html === x.innerHTML) || (x.innerHTML = d.__html), o.__k = [];
    else if (g && (x.innerHTML = ""), ls(x, xo(C) ? C : [C], o, t, e, W === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, r, i, r ? r[-637 * 10 + -22 * 223 + 11276] : t.__k && d0(t, 0), a, s), r != null)
      for (c = r.length; c--; ) r[c] != null && ds(r[c]);
    a || (c = "value", void (169 * -37 + -4043 * 1 + 198 * 52) !== h && (h !== x[c] || W === "progress" && !h || W === "option" && h !== A[c]) && $n(x, c, h, A[c], n), c = "checked", void (9559 + 11 * -869) !== p && p !== x[c] && $n(x, c, p, A[c], n));
  }
  return x;
}
function Fr(x, o, t) {
  try {
    typeof x == "function" ? x(o) : x.current = o;
  } catch (e) {
    D.__e(e, t);
  }
}
function zo(x, o, t) {
  var e, n;
  if (D.unmount && D.unmount(x), (e = x.ref) && (e.current && e.current !== x.__e || Fr(e, null, o)), (e = x.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (r) {
      D.__e(r, o);
    }
    e.base = e.__P = null;
  }
  if (e = x.__k)
    for (n = 0; n < e.length; n++) e[n] && zo(e[n], o, t || typeof x.type != "function");
  t || x.__e == null || ds(x.__e), x.__c = x.__ = x.__e = x.__d = void (6718 * -1 + 5535 + -1 * -1183);
}
function Zg(x, o, t) {
  return this.constructor(x, t);
}
function Jt(x, o, t) {
  var e, n, r, i;
  D.__ && D.__(x, o), n = (e = typeof t == "function") ? null : t && t.__k || o.__k, r = [], i = [], Dr(o, x = (!e && t || o).__k = Fe(pt, null, [x]), n || pn, pn, o.namespaceURI, !e && t ? [t] : n ? null : o.firstChild ? Vn.call(o.childNodes) : null, r, !e && t ? t : n ? n.__e : o.firstChild, e, i), fs(r, x, i);
}
function Yr(x, o) {
  Jt(x, o, Yr);
}
function Xr(x, o, t) {
  var e, n, r, i, a = Pt({}, x.props);
  for (r in x.type && x.type.defaultProps && (i = x.type.defaultProps), o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : a[r] = void (127 * -5 + 7089 + -6454 * 1) === o[r] && void (-1057 * 6 + 7458 + -93 * 12) !== i ? i[r] : o[r];
  return arguments.length > 2 && (a.children = arguments.length > 7573 * 1 + -1650 + -1184 * 5 ? Vn.call(arguments, 2) : t), In(x.type, a, e || x.key, n || x.ref, null);
}
function Tn(x, o) {
  var t = { __c: o = "__cC" + cs++, __: x, Consumer: function(e, n) {
    return e.children(n);
  }, Provider: function(e) {
    var n, r;
    return this.getChildContext || (n = [], (r = {})[o] = this, this.getChildContext = function() {
      return r;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && n.some(function(a) {
        a.__e = !0, Uo(a);
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
Vn = gs.slice, D = { __e: function(x, o, t, e) {
  for (var n, r, i; o = o.__; ) if ((n = o.__c) && !n.__) try {
    if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(x)), i = n.__d), n.componentDidCatch != null && (n.componentDidCatch(x, e || {}), i = n.__d), i) return n.__E = n;
  } catch (a) {
    x = a;
  }
  throw x;
} }, is = 5241 + 1747 * -3, as = function(x) {
  return x != null && x.constructor == null;
}, gt.prototype.setState = function(x, o) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Pt({}, this.state), typeof x == "function" && (x = x(Pt({}, t), this.props)), x && Pt(t, x), x != null && this.__v && (o && this._sb.push(o), Uo(this));
}, gt.prototype.forceUpdate = function(x) {
  this.__v && (this.__e = !(8351 + 7369 * -1 + -982), x && this.__h.push(x), Uo(this));
}, gt.prototype.render = pt, n0 = [], ss = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Jo = function(x, o) {
  return x.__v.__b - o.__v.__b;
}, wx.__r = 5020 + -4 * -1714 + -11876, Nr = 961 + -1 * 961, _o = Xi(!(-64 * 46 + -4919 * -2 + -6893)), Qo = Xi(!(-823 * 5 + 2201 + -58 * -33)), cs = 0;
function Mr() {
  return (Mr = Object.assign ? Object.assign.bind() : function(x) {
    for (var o = 1; o < arguments.length; o++) {
      var t = arguments[o];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (x[e] = t[e]);
    }
    return x;
  }).apply(this, arguments);
}
var Rg = ["context", "children"];
function Pg(x) {
  this.getChildContext = function() {
    return x.context;
  };
  var o = x.children, t = function(e, n) {
    if (e == null) return {};
    var r, i, a = {}, s = Object.keys(e);
    for (i = -1 * 8017 + 817 * -3 + 10468; i < s.length; i++) n.indexOf(r = s[i]) >= -31 * -191 + 151 * -11 + -1065 * 4 || (a[r] = e[r]);
    return a;
  }(x, Rg);
  return Xr(o, t);
}
function Vg() {
  var x = {};
  x.detail = {}, x.bubbles = !(-387 + 387 * 1), x.cancelable = !(-6131 * -1 + 597 * 15 + 794 * -19);
  var o = new CustomEvent("_preact", x);
  this.dispatchEvent(o), this._vdom = Fe(Pg, Mr({}, this._props, { context: o.detail.context }), function t(e, n) {
    if (-3814 * -1 + -6685 + -1437 * -2 === e.nodeType) return e.data;
    if (-1 * -6652 + -1 * -5263 + -74 * 161 !== e.nodeType) return null;
    var r = [], i = {}, a = -404 * 7 + -6027 + 8855, s = e.attributes, c = e.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[Cs(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var d = t(c[a], null), g = c[a].slot;
      g ? i[g] = Fe(Mi, { name: g }, d) : r[a] = d;
    }
    var C = n ? Fe(Mi, null, r) : r;
    return Fe(n || e.nodeName.toLowerCase(), i, C);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Yr : Jt)(this._vdom, this._root);
}
function Cs(x) {
  return x.replace(/-(\w)/g, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Tg(x, o, t) {
  if (this._vdom) {
    var e = {};
    e[x] = t = t ?? void (-26 * -307 + -5837 * -1 + -13819), e[Cs(x)] = t, this._vdom = Xr(this._vdom, e), Jt(this._vdom, this._root);
  }
}
function Eg() {
  Jt(this._vdom = null, this._root);
}
function Mi(x, o) {
  var t = this;
  return Fe("slot", Mr({}, x, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = o;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Lg(x, o, t, e) {
  function n() {
    var r = Reflect.construct(HTMLElement, [], n);
    return r._vdomComponent = x, r._root = r, r;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = Vg, n.prototype.attributeChangedCallback = Tg, n.prototype.disconnectedCallback = Eg, t = t || x.observedAttributes || Object.keys(x.propTypes || {}), n.observedAttributes = t, t.forEach(function(r) {
    Object.defineProperty(n.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(i) {
      this._vdom ? this.attributeChangedCallback(r, null, i) : (this._props || (this._props = {}), this._props[r] = i, this.connectedCallback());
      var a = typeof i;
      i != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(r, i);
    } });
  }), customElements.define(o, n);
}
var Ng = 0;
function O(x, o, t, e, n, r) {
  o || (o = {});
  var i, a, s = o;
  if ("ref" in s)
    for (a in s = {}, o) a == "ref" ? i = o[a] : s[a] = o[a];
  var c = {};
  c.type = x, c.props = s, c.key = t, c.ref = i, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__d = void 0, c.__c = null, c.constructor = void (15808 + -7904 * 2), c.__v = --Ng, c.__i = -(-1 * 4463 + 362 * 3 + 3378), c.__u = 0, c.__source = n, c.__self = r;
  var d = c;
  if (typeof x == "function" && (i = x.defaultProps))
    for (a in i) void (-1959 * -1 + 1201 * -1 + -379 * 2) === s[a] && (s[a] = i[a]);
  return D.vnode && D.vnode(d), d;
}
var ze = function() {
  return ze = Object.assign || function(o) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (o[r] = t[r]);
    }
    return o;
  }, ze.apply(this, arguments);
};
function N0(x, o, t) {
  if (t || arguments.length === 2) for (var e = 0, n = o.length, r; e < n; e++)
    (r || !(e in o)) && (r || (r = Array.prototype.slice.call(o, 0, e)), r[e] = o[e]);
  return x.concat(r || Array.prototype.slice.call(o));
}
function Dg(x) {
  var o = Object.create(null);
  return function(t) {
    return o[t] === void 0 && (o[t] = x(t)), o[t];
  };
}
var Fg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Yg = Dg(function(x) {
  return Fg.test(x) || x.charCodeAt(39 * -169 + 1 * 1130 + -1 * -5461) === 7411 + 1556 * -1 + -8 * 718 && x.charCodeAt(863 + -13 * -669 + -79 * 121) === -2771 + -43 * -67 && x.charCodeAt(2 * 1087 + 2852 + -5024) < -2637 + 176 * 11 + 3 * 264;
}), _t, re, Ho, ji, D0 = -4349 + -1 * 1570 + 5919, hs = [], se = D, Ji = se.__b, _i = se.__r, Qi = se.diffed, Ui = se.__c, zi = se.unmount, qi = se.__;
function _0(x, o) {
  se.__h && se.__h(re, x, D0 || o), D0 = -5314 + 3 * 354 + 4252;
  var t = {};
  t.__ = [], t.__h = [];
  var e = re.__H || (re.__H = t);
  return x >= e.__.length && e.__.push({}), e.__[x];
}
function tt(x) {
  return D0 = 7318 + 9 * 30 + -7587, jr(bs, x);
}
function jr(x, o, t) {
  var e = _0(_t++, 2);
  if (e.t = x, !e.__c && (e.__ = [t ? t(o) : bs(void 0, o), function(a) {
    var s = e.__N ? e.__N[0] : e.__[0], c = e.t(s, a);
    s !== c && (e.__N = [c, e.__[-641 * -9 + 360 * 9 + -9008]], e.__c.setState({}));
  }], e.__c = re, !re.u)) {
    var n = function(a, s, c) {
      if (!e.__c.__H) return !0;
      var d = e.__c.__H.__.filter(function(C) {
        return !!C.__c;
      });
      if (d.every(function(C) {
        return !C.__N;
      })) return !r || r.call(this, a, s, c);
      var g = !(1570 * 6 + 6225 + -7822 * 2);
      return d.forEach(function(C) {
        if (C.__N) {
          var l = C.__[0];
          C.__ = C.__N, C.__N = void 0, l !== C.__[0] && (g = !0);
        }
      }), !(!g && e.__c.props === a) && (!r || r.call(this, a, s, c));
    };
    re.u = !(2785 + -557 * 5);
    var r = re.shouldComponentUpdate, i = re.componentWillUpdate;
    re.componentWillUpdate = function(a, s, c) {
      if (this.__e) {
        var d = r;
        r = void (-4396 + -4396 * -1), n(a, s, c), r = d;
      }
      i && i.call(this, a, s, c);
    }, re.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function Be(x, o) {
  var t = _0(_t++, 3);
  !se.__s && Jr(t.__H, o) && (t.__ = x, t.i = o, re.__H.__h.push(t));
}
function Q0(x, o) {
  var t = _0(_t++, 4);
  !se.__s && Jr(t.__H, o) && (t.__ = x, t.i = o, re.__h.push(t));
}
function Et(x) {
  return D0 = 7832 + 2609 * -3, nt(function() {
    var o = {};
    return o.current = x, o;
  }, []);
}
function ms(x, o, t) {
  D0 = 7197 + 9183 * -1 + 996 * 2, Q0(function() {
    return typeof x == "function" ? (x(o()), function() {
      return x(null);
    }) : x ? (x.current = o(), function() {
      return x.current = null;
    }) : void 0;
  }, t == null ? t : t.concat(x));
}
function nt(x, o) {
  var t = _0(_t++, 7);
  return Jr(t.__H, o) && (t.__ = x(), t.__H = o, t.__h = x), t.__;
}
function F0(x, o) {
  return D0 = 8, nt(function() {
    return x;
  }, o);
}
function C0(x) {
  var o = re.context[x.__c], t = _0(_t++, 3975 + 46 * -139 + 2428);
  return t.c = x, o ? (t.__ == null && (t.__ = !(-3264 + 1088 * 3), o.sub(re)), o.props.value) : x.__;
}
function Bx(x, o) {
  se.useDebugValue && se.useDebugValue(o ? o(x) : x);
}
function ps() {
  var x = _0(_t++, 11);
  if (!x.__) {
    for (var o = re.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [5 * -1618 + 172 + 7918, 43 * 17 + 1478 + 2209 * -1]);
    x.__ = "P" + t[-5 * 358 + -8879 + 10669 * 1] + "-" + t[-154 * 2 + -1703 * 1 + 2012]++;
  }
  return x.__;
}
function Xg() {
  for (var x; x = hs.shift(); ) if (x.__P && x.__H) try {
    x.__H.__h.forEach(dx), x.__H.__h.forEach(qo), x.__H.__h = [];
  } catch (o) {
    x.__H.__h = [], se.__e(o, x.__v);
  }
}
se.__b = function(x) {
  re = null, Ji && Ji(x);
}, se.__ = function(x, o) {
  x && o.__k && o.__k.__m && (x.__m = o.__k.__m), qi && qi(x, o);
}, se.__r = function(x) {
  _i && _i(x), _t = 13 * -483 + -8111 + 7195 * 2;
  var o = (re = x.__c).__H;
  o && (Ho === re ? (o.__h = [], re.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (5855 * -1 + 190 + 103 * 55);
  })) : (o.__h.forEach(dx), o.__h.forEach(qo), o.__h = [], _t = -910 + -5 * 1987 + 3615 * 3)), Ho = re;
}, se.diffed = function(x) {
  Qi && Qi(x);
  var o = x.__c;
  o && o.__H && (o.__H.__h.length && (3528 + -45 * -171 + -362 * 31 !== hs.push(o) && ji === se.requestAnimationFrame || ((ji = se.requestAnimationFrame) || Mg)(Xg)), o.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-1622 + 1 * 481 + -1141 * -1);
  })), Ho = re = null;
}, se.__c = function(x, o) {
  o.some(function(t) {
    try {
      t.__h.forEach(dx), t.__h = t.__h.filter(function(e) {
        return !e.__ || qo(e);
      });
    } catch (e) {
      o.some(function(n) {
        n.__h && (n.__h = []);
      }), o = [], se.__e(e, t.__v);
    }
  }), Ui && Ui(x, o);
}, se.unmount = function(x) {
  zi && zi(x);
  var o, t = x.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      dx(e);
    } catch (n) {
      o = n;
    }
  }), t.__H = void (-28 * -159 + 6008 + -10460), o && se.__e(o, t.__v));
};
var $i = typeof requestAnimationFrame == "function";
function Mg(x) {
  var o, t = function() {
    clearTimeout(e), $i && cancelAnimationFrame(o), setTimeout(x);
  }, e = setTimeout(t, 100);
  $i && (o = requestAnimationFrame(t));
}
function dx(x) {
  var o = re, t = x.__c;
  typeof t == "function" && (x.__c = void (1949 + 2918 * 2 + 1557 * -5), t()), re = o;
}
function qo(x) {
  var o = re;
  x.__c = x.__(), re = o;
}
function Jr(x, o) {
  return !x || x.length !== o.length || o.some(function(t, e) {
    return t !== x[e];
  });
}
function bs(x, o) {
  return typeof o == "function" ? o(x) : o;
}
function As(x, o) {
  for (var t in o) x[t] = o[t];
  return x;
}
function $o(x, o) {
  for (var t in x) if (t !== "__source" && !(t in o)) return !(-8350 + -474 * -11 + 14 * 224);
  for (var e in o) if (e !== "__source" && x[e] !== o[e]) return !(-3638 + 214 * 17);
  return !(-689 + 690 * 1);
}
function er(x, o) {
  this.props = x, this.context = o;
}
function jg(x, o) {
  function t(n) {
    var r = this.props.ref, i = r == n.ref;
    return !i && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, n) || !i : $o(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, Fe(x, n);
  }
  return e.displayName = "Memo(" + (x.displayName || x.name) + ")", e.prototype.isReactComponent = !(34 * 57 + -1 * 9532 + 7594 * 1), e.__f = !(6706 + 1 * -6706), e;
}
(er.prototype = new gt()).isPureReactComponent = !(649 * -8 + 4084 + 1108), er.prototype.shouldComponentUpdate = function(x, o) {
  return $o(this.props, x) || $o(this.state, o);
};
var ea = D.__b;
D.__b = function(x) {
  x.type && x.type.__f && x.ref && (x.props.ref = x.ref, x.ref = null), ea && ea(x);
};
var Jg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 9582 * -1 + -1 * -9742 + 3751;
function ys(x) {
  function o(t) {
    var e = As({}, t);
    return delete e.ref, x(e, t.ref || null);
  }
  return o.$$typeof = Jg, o.render = o, o.prototype.isReactComponent = o.__f = !(-29 * -197 + 9888 + -1 * 15601), o.displayName = "ForwardRef(" + (x.displayName || x.name) + ")", o;
}
var ta = function(x, o) {
  return x == null ? null : Vt(Vt(x).map(o));
}, _g = { map: ta, forEach: ta, count: function(x) {
  return x ? Vt(x).length : -2 * -2014 + -1 * 1537 + -2491;
}, only: function(x) {
  var o = Vt(x);
  if (o.length !== 1) throw "Children.only";
  return o[-2265 + 1 * -6196 + -8461 * -1];
}, toArray: Vt }, Qg = D.__e;
D.__e = function(x, o, t, e) {
  if (x.then) {
    for (var n, r = o; r = r.__; ) if ((n = r.__c) && n.__c) return o.__e == null && (o.__e = t.__e, o.__k = t.__k), n.__c(x, o);
  }
  Qg(x, o, t, e);
};
var na = D.unmount;
function Ws(x, o, t) {
  return x && (x.__c && x.__c.__H && (x.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), x.__c.__H = null), (x = As({}, x)).__c != null && (x.__c.__P === t && (x.__c.__P = o), x.__c = null), x.__k = x.__k && x.__k.map(function(e) {
    return Ws(e, o, t);
  })), x;
}
function vs(x, o, t) {
  return x && t && (x.__v = null, x.__k = x.__k && x.__k.map(function(e) {
    return vs(e, o, t);
  }), x.__c && x.__c.__P === o && (x.__e && t.appendChild(x.__e), x.__c.__e = !(1 * 6211 + -2635 + 1 * -3576), x.__c.__P = t)), x;
}
function ux() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Ss(x) {
  var o = x.__.__c;
  return o && o.__a && o.__a(x);
}
function Ug(x) {
  var o, t, e;
  function n(r) {
    if (o || (o = x()).then(function(i) {
      t = i.default || i;
    }, function(i) {
      e = i;
    }), e) throw e;
    if (!t) throw o;
    return Fe(t, r);
  }
  return n.displayName = "Lazy", n.__f = !(-9354 + 787 * -2 + -683 * -16), n;
}
function an() {
  this.u = null, this.o = null;
}
D.unmount = function(x) {
  var o = x.__c;
  o && o.__R && o.__R(), o && -1 * 6137 + -1532 + 7701 & x.__u && (x.type = null), na && na(x);
}, (ux.prototype = new gt()).__c = function(x, o) {
  var t = o.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = Ss(e.__v), r = !(-2293 + 2191 * -3 + 8867), i = function() {
    r || (r = !(-2050 + -745 * 11 + 10245), t.__R = null, n ? n(a) : a());
  };
  t.__R = i;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var s = e.state.__a;
        e.__v.__k[-1042 * -9 + -1 * -2498 + 5938 * -2] = vs(s, s.__c.__P, s.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.t.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || 13 * 369 + 5455 + -10220 & o.__u || e.setState({ __a: e.__b = e.__v.__k[0] }), x.then(i, i);
}, ux.prototype.componentWillUnmount = function() {
  this.t = [];
}, ux.prototype.render = function(x, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[4273 + -453 * -16 + 281 * -41].__c;
      this.__v.__k[872 + -1 * -6908 + -7780] = Ws(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = o.__a && Fe(pt, null, x.fallback);
  return n && (n.__u &= -33), [Fe(pt, null, o.__a ? null : x.children), n];
};
var xa = function(x, o, t) {
  if (++t[-6132 + -1 * -6133] === t[4984 * -1 + -8936 + 13920] && x.o.delete(o), x.props.revealOrder && (x.props.revealOrder[-56 * 61 + 5 * 1253 + 11 * -259] !== "t" || !x.o.size)) for (t = x.u; t; ) {
    for (; t.length > 743 + 6069 * -1 + -1 * -5329; ) t.pop()();
    if (t[13787 + 1 * -13786] < t[1 * 8209 + 8797 + -17006]) break;
    x.u = t = t[11367 + 2273 * -5];
  }
};
function zg(x) {
  return this.getChildContext = function() {
    return x.context;
  }, x.children;
}
function qg(x) {
  var o = this, t = x.i;
  o.componentWillUnmount = function() {
    Jt(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== t && o.componentWillUnmount(), o.l || (o.i = t, o.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(957 + -319 * 3);
  }, appendChild: function(e) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, -1 * 7459 + -6283 + 13743), o.i.removeChild(e);
  } }), Jt(Fe(zg, { context: o.context }, x.__v), o.l);
}
function $g(x, o) {
  var t = {};
  t.__v = x, t.i = o;
  var e = Fe(qg, t);
  return e.containerInfo = o, e;
}
(an.prototype = new gt()).__a = function(x) {
  var o = this, t = Ss(o.__v), e = o.o.get(x);
  return e[-9780 + -15 * -18 + 9510]++, function(n) {
    var r = function() {
      o.props.revealOrder ? (e.push(n), xa(o, x, e)) : n();
    };
    t ? t(r) : r();
  };
}, an.prototype.render = function(x) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = Vt(x.children);
  x.revealOrder && x.revealOrder[-1 * 1607 + 8860 + -7253] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.o.set(o[t], this.u = [-4201 * -2 + -8245 + -156, 1152 * 8 + -181 * 1 + -9035, this.u]);
  return x.children;
}, an.prototype.componentDidUpdate = an.prototype.componentDidMount = function() {
  var x = this;
  this.o.forEach(function(o, t) {
    xa(x, t, o);
  });
};
var ws = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 58153 * -1 + -57805 + 176061 * 1, ed = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, td = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, nd = /[A-Z0-9]/g, xd = typeof document < "u", od = function(x) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(x);
};
function rd(x, o, t) {
  return o.__k == null && (o.textContent = ""), Jt(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
function id(x, o, t) {
  return Yr(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
gt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(x) {
  Object.defineProperty(gt.prototype, x, { configurable: !(6923 + 23 * -301), get: function() {
    return this["UNSAFE_" + x];
  }, set: function(o) {
    var t = {};
    t.configurable = !(2 * -775 + 9724 + 134 * -61), t.writable = !(-4007 + 1 * -7393 + 11400 * 1), t.value = o, Object.defineProperty(this, x, t);
  } });
});
var oa = D.event;
function ad() {
}
function sd() {
  return this.cancelBubble;
}
function cd() {
  return this.defaultPrevented;
}
D.event = function(x) {
  return oa && (x = oa(x)), x.persist = ad, x.isPropagationStopped = sd, x.isDefaultPrevented = cd, x.nativeEvent = x;
};
var lx = {};
lx.enumerable = !(-7001 + 559 * -11 + 13151), lx.configurable = !0, lx.get = function() {
  return this.class;
};
var _r, gd = lx, ra = D.vnode;
D.vnode = function(x) {
  typeof x.type == "string" && function(o) {
    var t = o.props, e = o.type, n = {};
    for (var r in t) {
      var i = t[r];
      if (!(r === "value" && "defaultValue" in t && i == null || xd && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var a = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && !(3353 + 89 * -31 + -18 * 33) === i ? i = "" : a === "translate" && i === "no" ? i = !(-409 * 23 + 9074 + 334) : a === "ondoubleclick" ? r = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || od(t.type) ? a === "onfocus" ? r = "onfocusin" : a === "onblur" ? r = "onfocusout" : td.test(r) ? r = a : -(-59 * 57 + 1088 + 2276) === e.indexOf("-") && ed.test(r) ? r = r.replace(nd, "-$&").toLowerCase() : i === null && (i = void 0) : a = r = "oninput", a === "oninput" && n[r = a] && (r = "oninputCapture"), n[r] = i;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Vt(t.children).forEach(function(s) {
      s.props.selected = -(-21 * -456 + 6117 + -15692) != n.value.indexOf(s.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = Vt(t.children).forEach(function(s) {
      s.props.selected = n.multiple ? -(-553 * 11 + -11 * 197 + 8251 * 1) != n.defaultValue.indexOf(s.props.value) : n.defaultValue == s.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", gd)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), o.props = n;
  }(x), x.$$typeof = ws, ra && ra(x);
};
var ia = D.__r;
D.__r = function(x) {
  ia && ia(x), _r = x.__c;
};
var aa = D.diffed;
D.diffed = function(x) {
  aa && aa(x);
  var o = x.props, t = x.__e;
  t != null && x.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), _r = null;
};
var ke = {};
ke.readContext = function(x) {
  return _r.__n[x.__c].props.value;
}, ke.useCallback = F0, ke.useContext = C0, ke.useDebugValue = Bx, ke.useDeferredValue = Hs, ke.useEffect = Be, ke.useId = ps, ke.useImperativeHandle = ms, ke.useInsertionEffect = Ks, ke.useLayoutEffect = Q0, ke.useMemo = nt, ke.useReducer = jr, ke.useRef = Et, ke.useState = tt, ke.useSyncExternalStore = Zs, ke.useTransition = Os;
var Bs = {};
Bs.current = ke;
var Gs = {};
Gs.ReactCurrentDispatcher = Bs;
var dd = Gs;
function ud(x) {
  return Fe.bind(null, x);
}
function oo(x) {
  return !!x && x.$$typeof === ws;
}
function ld(x) {
  return oo(x) && x.type === pt;
}
function Id(x) {
  return !!x && !!x.displayName && (typeof x.displayName == "string" || x.displayName instanceof String) && x.displayName.startsWith("Memo(");
}
function fd(x) {
  return oo(x) ? Xr.apply(null, arguments) : x;
}
function Cd(x) {
  return !!x.__k && (Jt(null, x), !(82 * 113 + -1 * 5419 + 1 * -3847));
}
function hd(x) {
  return x && (x.base || x.nodeType === 1 && x) || null;
}
var md = function(x, o) {
  return x(o);
}, pd = function(x, o) {
  return x(o);
}, bd = pt;
function ks(x) {
  x();
}
function Hs(x) {
  return x;
}
function Os() {
  return [!(2 * 3974 + 3409 + -11356 * 1), ks];
}
var Ks = Q0, Ad = oo;
function Zs(x, o) {
  var t = o(), e = tt({ h: { __: t, v: o } }), n = e[-4397 + -4955 * 1 + -9352 * -1].h, r = e[1];
  return Q0(function() {
    n.__ = t, n.v = o, Oo(n) && r({ h: n });
  }, [x, t, o]), Be(function() {
    return Oo(n) && r({ h: n }), x(function() {
      Oo(n) && r({ h: n });
    });
  }, [x]), t;
}
function Oo(x) {
  var o, t, e = x.v, n = x.__;
  try {
    var r = e();
    return !((o = n) === (t = r) && (-1 * 4153 + -1641 + 5794 !== o || (-1122 + -1123 * -1) / o == (1278 * -7 + 6885 + -1 * -2062) / t) || o != o && t != t);
  } catch {
    return !(-1282 + 1 * -3957 + 5239);
  }
}
var L = {};
L.useState = tt, L.useId = ps, L.useReducer = jr, L.useEffect = Be, L.useLayoutEffect = Q0, L.useInsertionEffect = Ks, L.useTransition = Os, L.useDeferredValue = Hs, L.useSyncExternalStore = Zs, L.startTransition = ks, L.useRef = Et, L.useImperativeHandle = ms, L.useMemo = nt, L.useCallback = F0, L.useContext = C0, L.useDebugValue = Bx, L.version = "17.0.2", L.Children = _g, L.render = rd, L.hydrate = id, L.unmountComponentAtNode = Cd, L.createPortal = $g, L.createElement = Fe, L.createContext = Tn, L.createFactory = ud, L.cloneElement = fd, L.createRef = kg, L.Fragment = pt, L.isValidElement = oo, L.isElement = Ad, L.isFragment = ld, L.isMemo = Id, L.findDOMNode = hd, L.Component = gt, L.PureComponent = er, L.memo = jg, L.forwardRef = ys, L.flushSync = pd, L.unstable_batchedUpdates = md, L.StrictMode = bd, L.Suspense = ux, L.SuspenseList = an, L.lazy = Ug, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dd;
var u0 = L, yd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wd(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function vd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Sd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") && Object.keys(x).length === 1 ? x.default : x;
}
function wd(x) {
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
const Bd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: yd,
  getAugmentedNamespace: wd,
  getDefaultExportFromCjs: Wd,
  getDefaultExportFromNamespaceIfNotNamed: Sd,
  getDefaultExportFromNamespaceIfPresent: vd
}, Symbol.toStringTag, { value: "Module" }));
var Gd = function(o, t, e, n) {
  var r = e ? e.call(n, o, t) : void 0;
  if (r !== void (-5789 + -9 * -691 + 430 * -1)) return !!r;
  if (o === t) return !0;
  if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
  var i = Object.keys(o), a = Object.keys(t);
  if (i.length !== a.length) return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = -783 + -7 * 662 + -1 * -5417; c < i.length; c++) {
    var d = i[c];
    if (!s(d)) return !1;
    var g = o[d], C = t[d];
    if (r = e ? e.call(n, g, C, d) : void (-500 * -6 + 6739 + 1 * -9739), r === !1 || r === void 0 && g !== C) return !1;
  }
  return !0;
};
const kd = Bd.getDefaultExportFromCjs(Gd);
var oe = "-ms-", fn = "-moz-", ee = "-webkit-", Rs = "comm", ro = "rule", Qr = "decl", Hd = "@import", Ps = "@keyframes", Od = "@layer", Vs = Math.abs, Ur = String.fromCharCode, tr = Object.assign;
function Kd(x, o) {
  return We(x, -7234 + 4933 * -1 + 12167) ^ -1315 * 5 + -193 * -27 + 1409 ? (((o << -183 + -1 * 4087 + 4272 ^ We(x, -787 * 11 + -2440 + 11097)) << -2986 * 3 + 21 * 5 + 8855 ^ We(x, 1 * 9641 + -3 * 2229 + -2953 * 1)) << 15 * -412 + -8064 + 14246 ^ We(x, 2)) << 2 ^ We(x, -10333 + -17 * -608) : -8827 + 1 * -3949 + 12776;
}
function Ts(x) {
  return x.trim();
}
function Kt(x, o) {
  return (x = o.exec(x)) ? x[-110 * 22 + 7918 + -5498] : x;
}
function F(x, o, t) {
  return x.replace(o, t);
}
function Ix(x, o, t) {
  return x.indexOf(o, t);
}
function We(x, o) {
  return x.charCodeAt(o) | 3319 * 3 + 2490 + 1 * -12447;
}
function Y0(x, o, t) {
  return x.slice(o, t);
}
function vt(x) {
  return x.length;
}
function Es(x) {
  return x.length;
}
function sn(x, o) {
  return o.push(x), x;
}
function Zd(x, o) {
  return x.map(o).join("");
}
function sa(x, o) {
  return x.filter(function(t) {
    return !Kt(t, o);
  });
}
var io = -1 * 2649 + 7699 + 3 * -1683, X0 = 1, Ls = -17776 + 22 * 808, ut = -11925 + 1325 * 9, me = -2 * -876 + 2462 + -4214, U0 = "";
function ao(x, o, t, e, n, r, i, a) {
  var s = {};
  return s.value = x, s.root = o, s.parent = t, s.type = e, s.props = n, s.children = r, s.line = io, s.column = X0, s.length = i, s.return = "", s.siblings = a, s;
}
function Ft(x, o) {
  return tr(ao("", null, null, "", null, null, 6 * 325 + 2212 + 2 * -2081, x.siblings), x, { length: -x.length }, o);
}
function w0(x) {
  for (; x.root; ) x = Ft(x.root, { children: [x] });
  sn(x, x.siblings);
}
function Rd() {
  return me;
}
function Pd() {
  return me = ut > 2 * -1101 + 7 * -1347 + 11631 ? We(U0, --ut) : -608 + -304 * -2, X0--, me === 10 && (X0 = 5862 + 1 * -2559 + -3302, io--), me;
}
function mt() {
  return me = ut < Ls ? We(U0, ut++) : -4726 + 10 * 69 + 4036, X0++, me === -45 * -147 + 4002 + 10607 * -1 && (X0 = -3245 + -1241 * 2 + 1 * 5728, io++), me;
}
function s0() {
  return We(U0, ut);
}
function fx() {
  return ut;
}
function so(x, o) {
  return Y0(U0, x, o);
}
function nr(x) {
  switch (x) {
    case -4459 + 4459 * 1:
    case 3006 + 1791 * 5 + 664 * -18:
    case -19 * -337 + 4821 + -623 * 18:
    case 4144 * -2 + -144 * 27 + -12189 * -1:
    case 5 * -315 + -32 * 311 + 3853 * 3:
      return 67 * -111 + 9838 + -2396;
    case -2523 + 1 * 6033 + -3477:
    case -9970 + -17 * -589:
    case -2671 + 2715 * 1:
    case -2703 + -3 * -1970 + -3160:
    case 28 * 65 + -6180 + -1474 * -3:
    case 3387 + 3323 * -1:
    case 2 * 2204 + -26 * -39 + -5296:
    case 1 * -923 + 34 * 82 + 21 * -86:
    case 123:
    case 125:
      return -94 * 49 + 89 * 49 + -249 * -1;
    case 2194 + 712 * -3:
      return 8686 + 1 * -8683;
    case 34:
    case -8453 + 193 * 44:
    case 1232 + -2 * 2767 + -4342 * -1:
    case -1 * -571 + 5826 + 2 * -3153:
      return -1 * 8318 + -1697 + -1 * -10017;
    case -9086 + 8837 * 1 + 290:
    case 4 * -2151 + -2973 + -3 * -3890:
      return -2330 + -259 * -9;
  }
  return 6935 + -31 * 95 + -2 * 1995;
}
function Vd(x) {
  return io = X0 = -5145 + -1860 * 4 + 434 * 29, Ls = vt(U0 = x), ut = 7043 * -1 + 1 * -3317 + 10360, [];
}
function Td(x) {
  return U0 = "", x;
}
function Ko(x) {
  return Ts(so(ut - (8950 + -471 * 19), xr(x === -81 * -23 + 9606 + 5689 * -2 ? x + (-1 * -3798 + 1504 + -5300) : x === -5636 + -1 * -8849 + -19 * 167 ? x + (9757 + 12 * -813) : x)));
}
function Ed(x) {
  for (; (me = s0()) && me < -1 * -6529 + 9375 + 269 * -59; ) mt();
  return nr(x) > 2 || nr(me) > 47 * -5 + 214 * 37 + -640 * 12 ? "" : " ";
}
function Ld(x, o) {
  for (; --o && mt() && !(me < 48 || me > 8 * 1067 + 8993 + 3 * -5809 || me > -1033 + 1011 * -7 + 8167 && me < 1 * -4562 + -96 * 55 + 9907 || me > 70 && me < 13455 + 2 * -6679); ) ;
  return so(x, fx() + (o < -1437 * 4 + 3683 * -1 + 9437 && s0() == 12577 + -5 * 2509 && mt() == 9919 + -166 * 40 + -3247));
}
function xr(x) {
  for (; mt(); ) switch (me) {
    case x:
      return ut;
    case -9778 + 4 * 1250 + 4812:
    case 23 * -49 + -5 * 1957 + -10951 * -1:
      x !== 61 * -157 + -4142 + -1 * -13753 && x !== 39 && xr(me);
      break;
    case 15155 + 15115 * -1:
      x === 6268 + -1 * 7257 + 1030 && xr(x);
      break;
    case 1 * 8791 + 2596 * 1 + 3765 * -3:
      mt();
      break;
  }
  return ut;
}
function Nd(x, o) {
  for (; mt() && x + me !== 47 + (-8308 + -765 * 6 + 2 * 6454); ) if (x + me === -277 * 31 + 265 + -1394 * -6 + (9822 + -43 * 199 + 1223 * -1) && s0() === -136 * 1 + 31 * -143 + -1154 * -4) break;
  return "/*" + so(o, ut - (763 * 2 + 9623 + -11148)) + "*" + Ur(x === 7797 + -6 * -1039 + -13984 ? x : mt());
}
function Dd(x) {
  for (; !nr(s0()); ) mt();
  return so(x, ut);
}
function Fd(x) {
  return Td(Cx("", null, null, null, [""], x = Vd(x), -1 * 2864 + 9042 + 2 * -3089, [9 * 1037 + -2 * -2581 + -65 * 223], x));
}
function Cx(x, o, t, e, n, r, i, a, s) {
  for (var c = 0, d = -487 * -3 + -28 * -110 + -4541, g = i, C = -6079 * -1 + -5189 + 2 * -445, l = 2 * -3343 + -5331 + 12017, h = 8198 + -5 * 1111 + -881 * 3, p = 1, A = -5736 + -8177 * 1 + 6957 * 2, u = 899 * 2 + 1029 + -2826, W = -59 * 60 + 7454 + -19 * 206, H = "", N = n, Y = r, X = e, K = H; A; ) switch (h = W, W = mt()) {
    case 64 * -24 + -877 + 2453:
      if (h != 146 * 13 + 2433 * 3 + -9089 && We(K, g - (-9487 + -1112 * -6 + 2816)) == -1 * 4451 + 4 * 1882 + -1 * 3019) {
        Ix(K += F(Ko(W), "&", "&\f"), "&\f", Vs(c ? a[c - (-141 * -17 + -251 * 15 + 1369 * 1)] : 554 * -11 + 7821 + -1727)) != -(-716 * 4 + 4933 + -2068) && (u = -(-8371 * 1 + -916 * -4 + 4708));
        break;
      }
    case -899 + -2 * 761 + 2455 * 1:
    case 12771 + -12 * 1061:
    case -131 * -49 + 2312 + 320 * -27:
      K += Ko(W);
      break;
    case -4827 + -1612 * -3:
    case -33 * -12 + -7751 + 5 * 1473:
    case 2529 + -37 * 68:
    case 283 * -29 + -6 * 543 + 11497:
      K += Ed(h);
      break;
    case 1797 * -1 + -9527 + 11416:
      K += Ld(fx() - (57 * 83 + -2462 * 1 + -756 * 3), -7130 + 9 * -724 + 13653);
      continue;
    case 5188 * 1 + -3373 + -1768:
      switch (s0()) {
        case 42:
        case 47:
          sn(Yd(Nd(mt(), fx()), o, t, s), s);
          break;
        default:
          K += "/";
      }
      break;
    case (2 * 1303 + 3633 * -2 + -4783 * -1) * p:
      a[c++] = vt(K) * u;
    case (37 + -2 * -2047 + -2 * 2003) * p:
    case 9151 * 1 + 23 * -341 + 1249 * -1:
    case 155 * 39 + -4 * -341 + -7409:
      switch (W) {
        case -6689 + -49 * 77 + -2 * -5231:
        case 13 * -469 + 1 * -9018 + 8 * 1905:
          A = 691 * 14 + 11 * 593 + -16197;
        case -2165 * 2 + 8527 + -4138 + d:
          u == -(1 * -6274 + -4633 + 10908) && (K = F(K, /\f/g, "")), l > 1 * 9145 + 2441 * 1 + -11586 && vt(K) - g && sn(l > -1285 + -3508 * 2 + -1 * -8333 ? ga(K + ";", e, t, g - (3718 + 5666 * -1 + 1949), s) : ga(F(K, " ", "") + ";", e, t, g - (-865 * 10 + -1 * -6971 + 1681), s), s);
          break;
        case 9032 + -4 * -481 + 1 * -10897:
          K += ";";
        default:
          if (sn(X = ca(K, o, t, c, d, n, a, H, N = [], Y = [], g, r), r), W === -19 * -343 + -43 * -134 + -2026 * 6)
            if (d === 8929 * -1 + 1192 + -7737 * -1) Cx(K, o, X, X, N, r, g, a, Y);
            else switch (C === -535 + -3 * 2319 + 7591 && We(K, 43 * 60 + 3359 * -1 + -1 * -782) === 102 * 7 + -2280 + 1676 ? -1 * 9494 + 2 * 3181 + -32 * -101 : C) {
              case 7 * -319 + 6 * 1530 + 1 * -6847:
              case 13 * 376 + 2 * -3361 + 1942 * 1:
              case -4033 + 1 * 8817 + -1 * 4675:
              case 4852 * -1 + 6220 + 7 * -179:
                Cx(x, X, X, e && sn(ca(x, X, X, 7570 + -7570 * 1, -1559 * 4 + 1 * -5174 + 815 * 14, n, a, H, n, N = [], g, Y), Y), n, Y, g, a, e ? N : Y);
                break;
              default:
                Cx(K, X, X, X, [""], Y, 524 + 2 * -262, a, Y);
            }
      }
      c = d = l = -4009 + -19 * -211, p = u = -3887 + 4294 * -1 + 1 * 8182, H = K = "", g = i;
      break;
    case 7 * -165 + -4283 + 5496:
      g = -1 * -7491 + 121 * 41 + 12451 * -1 + vt(K), l = h;
    default:
      if (p < 1) {
        if (W == -7960 * -1 + 19 * 433 + -16064) --p;
        else if (W == -1 * 3979 + -2 * 860 + 416 * 14 && p++ == -5927 + 57 * 137 + -1882 && Pd() == 7117 + 2 * 2027 + -11046) continue;
      }
      switch (K += Ur(W), W * p) {
        case -7698 * 1 + 7893 * -1 + -15629 * -1:
          u = d > -784 * 4 + 863 + 2273 ? -119 * 63 + 3 * 1769 + 2191 : (K += "\f", -(-9926 + 1217 * 4 + 5059));
          break;
        case 1044 + 4 * -250:
          a[c++] = (vt(K) - (-462 * 18 + -4150 + 12467)) * u, u = 4447 * 1 + -1 * -417 + 1621 * -3;
          break;
        case -8404 + -1 * -6003 + 2465:
          s0() === 2722 + 1 * -8606 + 5929 && (K += Ko(mt())), C = s0(), d = g = vt(H = K += Dd(fx())), W++;
          break;
        case 45:
          h === -1 * 5982 + -5503 + 5765 * 2 && vt(K) == -7081 + 787 * 9 && (p = 6839 + -1 * 83 + 2 * -3378);
      }
  }
  return r;
}
function ca(x, o, t, e, n, r, i, a, s, c, d, g) {
  for (var C = n - 1, l = n === -2017 * -1 + 9011 + -11028 ? r : [""], h = Es(l), p = -4 * 746 + 2512 + 472, A = -1 * -5569 + 3118 * -3 + 3785, u = 19100 + 10 * -1910; p < e; ++p) for (var W = -8 * 853 + 3645 + -289 * -11, H = Y0(x, C + (-12830 + 91 * 141), C = Vs(A = i[p])), N = x; W < h; ++W) (N = Ts(A > -6 * 537 + -1 * -7163 + -3941 ? l[W] + " " + H : F(H, /&\f/g, l[W]))) && (s[u++] = N);
  return ao(x, o, t, n === -6784 + 1 * -3825 + 10609 * 1 ? ro : a, s, c, d, g);
}
function Yd(x, o, t, e) {
  return ao(x, o, t, Rs, Ur(Rd()), Y0(x, 3468 + -2 * 1733, -2), 677 + 4222 * -1 + 3545, e);
}
function ga(x, o, t, e, n) {
  return ao(x, o, t, Qr, Y0(x, 6073 * -1 + -1084 * 3 + 5 * 1865, e), Y0(x, e + (-77 * -11 + 639 * 1 + -1485), -1), e, n);
}
function Ns(x, o, t) {
  switch (Kd(x, o)) {
    case 1839 + -1 * 2578 + -254 * -23:
      return ee + "print-" + x + x;
    case 5737:
    case 22 * -171 + -2 * 2377 + 9 * 1413:
    case -1 * 1136 + -2414 * -4 + -13 * 411:
    case 5908 + -2 * 1433 + 391:
    case -1 * 6311 + -2258 + 10210:
    case 9081 + -9723 * 1 + 5099:
    case 3 * -3323 + 4530 * 1 + 8360:
    case 19 * -274 + -1912 + 270 * 47:
    case 13788 + -1 * 7432:
    case 147 * 23 + -4302 * 1 + 6765:
    case 7460 + -1 * 4269:
    case 3772 + -17 * -766 + -10149:
    case 8515 + -1 * -9241 + 3 * -4917:
    case -4649 + 1 * -3394 + 14434:
    case 2 * -2494 + 1249 + 9618:
    case -61 * 179 + 7227 + -3 * -3105:
    case 2025 * -3 + -10015 * -1 + 2195:
    case 83 * 41 + 8 * -1212 + 4 * 2723:
    case -1665 * -1 + 1 * 3554 + -4 * 91:
    case 1 * 461 + 2887 + 867:
    case -13337 + -2818 * -7:
    case -8093 + -2 * -1492 + 10218:
    case -587 + -14 * -178 + 3460:
    case 11 * 791 + 6112 + 3 * -3064:
    case 632 * -1 + -18 * 283 + 15 * 637:
      return ee + x + x;
    case -11 * -97 + -6899 + -43 * -247:
      return fn + x + x;
    case 6239 + 178 * -5:
    case -1971 * -5 + -145 * 30 + 1259 * -1:
    case -15 * -254 + 9565 + -8565:
    case 13454 + -5 * 1931 + 1 * 3169:
    case 2756:
      return ee + x + fn + x + oe + x + x;
    case -1 * -4196 + 5 * -1949 + 1 * 11485:
      switch (We(x, o + (8126 + -3 * 2705))) {
        case 610 * 11 + -4609 + 1 * -1987:
          return ee + x + oe + F(x, /[svh]\w+-[tblr]{2}/, "tb") + x;
        case 108:
          return ee + x + oe + F(x, /[svh]\w+-[tblr]{2}/, "tb-rl") + x;
        case 6366 + -49 * 129:
          return ee + x + oe + F(x, /[svh]\w+-[tblr]{2}/, "lr") + x;
      }
    case 6828:
    case 2 * -2 + -7663 + 11935:
    case 1145 * -5 + -2357 * -1 + 6271:
      return ee + x + oe + x + x;
    case 1 * -4879 + -118 * -47 + 5498:
      return ee + x + oe + "flex-" + x + x;
    case 1 * -7096 + -10275 + -2 * -11279:
      return ee + x + F(x, /(\w+).+(:[^]+)/, ee + "box-$1$2" + oe + "flex-$1$2") + x;
    case -6073 + -4 * -2879:
      return ee + x + oe + "flex-item-" + F(x, /flex-|-self/g, "") + (Kt(x, /flex-|baseline/) ? "" : oe + "grid-row-" + F(x, /flex-|-self/g, "")) + x;
    case -66 * 15 + -183 + 5848:
      return ee + x + oe + "flex-line-pack" + F(x, /align-content|flex-|-self/g, "") + x;
    case -7 * -349 + -244 * 43 + 13597:
      return ee + x + oe + F(x, "shrink", "negative") + x;
    case -700 * -3 + 6348 + 2 * -1578:
      return ee + x + oe + F(x, "basis", "preferred-size") + x;
    case -3523 * -1 + 1514 * -4 + 8593:
      return ee + "box-" + F(x, "-grow", "") + ee + x + oe + F(x, "grow", "positive") + x;
    case -6778 * -1 + 2773 * -2 + 3322:
      return ee + F(x, /([^-])(transform)/g, "$1" + ee + "$2") + x;
    case 2 * 463 + -6 * 1528 + 14429:
      return F(F(F(x, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), x, "") + x;
    case -1 * 5932 + -1345 * -5 + -1 * -4702:
    case 3676 + -1 * 1039 + 1322:
      return F(x, /(image-set\([^]*)/, ee + "$1$`$1");
    case 3 * 2730 + -41 * 5 + -3017:
      return F(F(x, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + oe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + x + x;
    case 1842 + -393 * -6:
      if (!Kt(x, /flex-|baseline/)) return oe + "grid-column-align" + Y0(x, o) + x;
      break;
    case 2 * -4561 + -2968 + 3 * 4894:
    case -1478 * 6 + -2551 * -2 + 1018 * 7:
      return oe + F(x, "template-", "") + x;
    case 8697 + -2319 * -1 + -1 * 6632:
    case -9515 + -8 * -640 + 8011:
      return t && t.some(function(e, n) {
        return o = n, Kt(e.props, /grid-\w+-end/);
      }) ? ~Ix(x + (t = t[o].value), "span", 2 * -2458 + -9884 * 1 + 14800) ? x : oe + F(x, "-start", "") + x + oe + "grid-row-span:" + (~Ix(t, "span", 0) ? Kt(t, /\d+/) : +Kt(t, /\d+/) - +Kt(x, /\d+/)) + ";" : oe + F(x, "-start", "") + x;
    case -15 * -197 + -4834 + 6775:
    case 4128:
      return t && t.some(function(e) {
        return Kt(e.props, /grid-\w+-start/);
      }) ? x : oe + F(F(x, "-end", "-span"), "span ", "") + x;
    case 242 * -29 + -2183 + -277 * -48:
    case 3583:
    case -1 * 957 + -15 * -263 + 1080:
    case 7 * -694 + -1 * -6577 + 813:
      return F(x, /(.+)-inline(.+)/, ee + "$1$2") + x;
    case 6 * -1324 + -14854 + 30914:
    case -2972 + -1 * 5801 + 15832:
    case 5753:
    case 4925 + -10 * -61:
    case -2239 * 2 + 1 * -6093 + 16016:
    case -785 * 5 + 4666 + -32 * -155:
    case 2618 + -463 * -5:
    case 5065 + -2 * 194:
    case -142 * 68 + -2 * 4134 + 23457:
    case 593 * 11 + 3359 + -4093 * 1:
    case -403 + -2 * 2335 + 10094:
    case 5 * 1597 + 1 * 6634 + -9854:
      if (vt(x) - (4432 + -23 * -281 + -10894) - o > 4400 + -838 * 1 + -3556) switch (We(x, o + (-8854 * -1 + -8273 * 1 + -580))) {
        case -96 * -97 + -1 * 8075 + 188 * -6:
          if (We(x, o + (6522 + 877 * -6 + -1256)) !== 2 * -1483 + 4815 + -164 * 11) break;
        case 5 * 619 + -106 * -28 + -5961:
          return F(x, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + fn + (We(x, o + (3027 * 1 + -4098 + 1074)) == 616 + -2495 * -2 + -5498 * 1 ? "$3" : "$2-$3")) + x;
        case -839 * 2 + 146 * 8 + 1 * 625:
          return ~Ix(x, "stretch", 57 * 142 + -1 * 6805 + -1289 * 1) ? Ns(F(x, "stretch", "fill-available"), o, t) + x : x;
      }
      break;
    case -9311 + -41 * 205 + 22868:
    case 4360 + -1 * -5578 + 4018 * -1:
      return F(x, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, r, i, a, s, c) {
        return oe + n + ":" + r + c + (i ? oe + n + "-span:" + (a ? s : +s - +r) + c : "") + x;
      });
    case -6047 * -1 + 2 * 2731 + -6560:
      if (We(x, o + (1 * 7661 + -9891 + 2236)) === 1 * -2311 + 74 * -65 + 7242) return F(x, ":", ":" + ee) + x;
      break;
    case -8406 + -1 * -305 + -1 * -14545:
      switch (We(x, We(x, 14770 + -238 * 62) === 2353 * 3 + -98 + -1729 * 4 ? -9589 * 1 + 93 * -29 + -6152 * -2 : -1 * 8851 + 10 * 885 + -4 * -3)) {
        case 4310 + -1097 * 6 + 2392:
          return F(x, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (We(x, -4489 * -2 + 209 * 43 + -17951) === 1012 * -6 + 4607 + 1 * 1510 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + oe + "$2box$3") + x;
        case -8175 + 1 * 8275:
          return F(x, ":", ":" + oe) + x;
      }
      break;
    case 8022 * -1 + 6955 + 6786:
    case 5750 + -24 * -80 + -5023:
    case 2135:
    case 3927:
    case 1 * 5852 + -1786 + -1675:
      return F(x, "scroll-", "scroll-snap-") + x;
  }
  return x;
}
function Gx(x, o) {
  for (var t = "", e = -2 * 4252 + 2677 * 2 + -6 * -525; e < x.length; e++) t += o(x[e], e, x, o) || "";
  return t;
}
function Xd(x, o, t, e) {
  switch (x.type) {
    case Od:
      if (x.children.length) break;
    case Hd:
    case Qr:
      return x.return = x.return || x.value;
    case Rs:
      return "";
    case Ps:
      return x.return = x.value + "{" + Gx(x.children, e) + "}";
    case ro:
      if (!vt(x.value = x.props.join(","))) return "";
  }
  return vt(t = Gx(x.children, e)) ? x.return = x.value + "{" + t + "}" : "";
}
function Md(x) {
  var o = Es(x);
  return function(t, e, n, r) {
    for (var i = "", a = -714 + 1 * -8306 + 11 * 820; a < o; a++) i += x[a](t, e, n, r) || "";
    return i;
  };
}
function jd(x) {
  return function(o) {
    o.root || (o = o.return) && x(o);
  };
}
function Jd(x, o, t, e) {
  if (x.length > -1 && !x.return)
    switch (x.type) {
      case Qr:
        x.return = Ns(x.value, x.length, t);
        return;
      case Ps:
        return Gx([Ft(x, { value: F(x.value, "@", "@" + ee) })], e);
      case ro:
        if (x.length) return Zd(t = x.props, function(n) {
          switch (Kt(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              w0(Ft(x, { props: [F(n, /:(read-\w+)/, ":" + fn + "$1")] }));
              var r = {};
              r.props = [n], w0(Ft(x, r)), tr(x, { props: sa(t, e) });
              break;
            case "::placeholder":
              w0(Ft(x, { props: [F(n, /:(plac\w+)/, ":" + ee + "input-$1")] })), w0(Ft(x, { props: [F(n, /:(plac\w+)/, ":" + fn + "$1")] })), w0(Ft(x, { props: [F(n, /:(plac\w+)/, oe + "input-$1")] }));
              var i = {};
              i.props = [n], w0(Ft(x, i)), tr(x, { props: sa(t, e) });
              break;
          }
          return "";
        });
    }
}
var E = {};
E.animationIterationCount = 1, E.aspectRatio = 1, E.borderImageOutset = 1, E.borderImageSlice = 1, E.borderImageWidth = 1, E.boxFlex = 1, E.boxFlexGroup = 1, E.boxOrdinalGroup = 1, E.columnCount = 1, E.columns = 1, E.flex = 1, E.flexGrow = 1, E.flexPositive = 1, E.flexShrink = 1, E.flexNegative = 1, E.flexOrder = 1, E.gridRow = 1, E.gridRowEnd = 1, E.gridRowSpan = 1, E.gridRowStart = 1, E.gridColumn = 1, E.gridColumnEnd = 1, E.gridColumnSpan = 1, E.gridColumnStart = 1, E.msGridRow = 1, E.msGridRowSpan = 1, E.msGridColumn = 1, E.msGridColumnSpan = 1, E.fontWeight = 1, E.lineHeight = 1, E.opacity = 1, E.order = 1, E.orphans = 1, E.tabSize = 1, E.widows = 1, E.zIndex = 1, E.zoom = 1, E.WebkitLineClamp = 1, E.fillOpacity = 1, E.floodOpacity = 1, E.stopOpacity = 1, E.strokeDasharray = 1, E.strokeDashoffset = 1, E.strokeMiterlimit = 1, E.strokeOpacity = 1, E.strokeWidth = 1;
var _d = E, q = {}, l0 = typeof process < "u" && void (8508 + -123 * -63 + -16257) !== q && (q.REACT_APP_SC_ATTR || q.SC_ATTR) || "data-styled", Ds = "active", Fs = "data-styled-version", co = "6.1.11", zr = `/*!sc*/
`, qr = typeof window < "u" && "HTMLElement" in window, Qd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-218 * -7 + -940 + -586) !== q && void (-8047 + -2053 * -2 + 1 * 3941) !== q.REACT_APP_SC_DISABLE_SPEEDY && q.REACT_APP_SC_DISABLE_SPEEDY !== "" ? q.REACT_APP_SC_DISABLE_SPEEDY !== "false" && q.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (1 * -1203 + -2602 * 2 + 1 * 6407) !== q && void (-5645 + -5645 * -1) !== q.SC_DISABLE_SPEEDY && q.SC_DISABLE_SPEEDY !== "" ? q.SC_DISABLE_SPEEDY !== "false" && q.SC_DISABLE_SPEEDY : q.NODE_ENV !== "production"), da = /invalid hook call/i, ex = /* @__PURE__ */ new Set(), Ud = function(x, o) {
  if (q.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(x).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var r = !0;
      console.error = function(i) {
        for (var a = [], s = -22 * -1 + -8776 + 8755; s < arguments.length; s++) a[s - (-3063 + -22 * 268 + 64 * 140)] = arguments[s];
        da.test(i) ? (r = !1, ex.delete(e)) : n.apply(void (9738 * -1 + 1406 + 8332), N0([i], a, !1));
      }, Et(), r && !ex.has(e) && (console.warn(e), ex.add(e));
    } catch (i) {
      da.test(i.message) && ex.delete(e);
    } finally {
      console.error = n;
    }
  }
}, go = Object.freeze([]), M0 = Object.freeze({});
function zd(x, o, t) {
  return t === void 0 && (t = M0), x.theme !== t.theme && x.theme || o || t.theme;
}
var or = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), qd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, $d = /(^-|-$)/g;
function ua(x) {
  return x.replace(qd, "-").replace($d, "");
}
var eu = /(a)(d)/gi, tx = -5 * 1055 + 9630 + 1 * -4303, la = function(x) {
  return String.fromCharCode(x + (x > -1366 * -1 + 513 * 9 + -5958 ? -71 * 19 + 4 * 14 + 1332 : -5760 + 7 * -1126 + -11 * -1249));
};
function rr(x) {
  var o, t = "";
  for (o = Math.abs(x); o > tx; o = o / tx | -171 * 49 + -5982 * -1 + -799 * -3) t = la(o % tx) + t;
  return (la(o % tx) + t).replace(eu, "$1-$2");
}
var Zo, Ys = -2434 + -1 * -10418 + -2603, x0 = function(x, o) {
  for (var t = o.length; t; ) x = (-2 * -4377 + 1 * 1423 + -8 * 1268) * x ^ o.charCodeAt(--t);
  return x;
}, Xs = function(x) {
  return x0(Ys, x);
};
function tu(x) {
  return rr(Xs(x) >>> 6974 + 6974 * -1);
}
function Ms(x) {
  return q.NODE_ENV !== "production" && typeof x == "string" && x || x.displayName || x.name || "Component";
}
function Ro(x) {
  return typeof x == "string" && (q.NODE_ENV === "production" || x.charAt(-505 * 4 + 19 * 228 + 34 * -68) === x.charAt(1 * 3246 + 3876 + -3 * 2374).toLowerCase());
}
var st = {};
st.childContextTypes = !0, st.contextType = !0, st.contextTypes = !0, st.defaultProps = !0, st.displayName = !0, st.getDefaultProps = !0, st.getDerivedStateFromError = !0, st.getDerivedStateFromProps = !0, st.mixins = !0, st.propTypes = !0, st.type = !0;
var Yt = {};
Yt.name = !0, Yt.length = !0, Yt.prototype = !0, Yt.caller = !0, Yt.callee = !0, Yt.arguments = !0, Yt.arity = !0;
var e0 = {};
e0.$$typeof = !0, e0.compare = !0, e0.defaultProps = !0, e0.displayName = !0, e0.propTypes = !0, e0.type = !0;
var k0 = {};
k0.$$typeof = !0, k0.render = !0, k0.defaultProps = !0, k0.displayName = !0, k0.propTypes = !0;
var js = typeof Symbol == "function" && Symbol.for, Js = js ? Symbol.for("react.memo") : 60115, nu = js ? Symbol.for("react.forward_ref") : -28006 + 7 * 4897 + 53839 * 1, xu = st, ou = Yt, _s = e0, ru = ((Zo = {})[nu] = k0, Zo[Js] = _s, Zo);
function Ia(x) {
  return ("type" in (o = x) && o.type.$$typeof) === Js ? _s : "$$typeof" in x ? ru[x.$$typeof] : xu;
  var o;
}
var iu = Object.defineProperty, au = Object.getOwnPropertyNames, fa = Object.getOwnPropertySymbols, su = Object.getOwnPropertyDescriptor, cu = Object.getPrototypeOf, Ca = Object.prototype;
function Qs(x, o, t) {
  if (typeof o != "string") {
    if (Ca) {
      var e = cu(o);
      e && e !== Ca && Qs(x, e, t);
    }
    var n = au(o);
    fa && (n = n.concat(fa(o)));
    for (var r = Ia(x), i = Ia(o), a = 6189 * 1 + -2133 + 39 * -104; a < n.length; ++a) {
      var s = n[a];
      if (!(s in ou || t && t[s] || i && s in i || r && s in r)) {
        var c = su(o, s);
        try {
          iu(x, s, c);
        } catch {
        }
      }
    }
  }
  return x;
}
function j0(x) {
  return typeof x == "function";
}
function $r(x) {
  return typeof x == "object" && "styledComponentId" in x;
}
function r0(x, o) {
  return x && o ? "".concat(x, " ").concat(o) : x || o || "";
}
function ha(x, o) {
  if (-1 * -8014 + 86 * -30 + 11 * -494 === x.length) return "";
  for (var t = x[118 * 51 + 5386 * -1 + -632], e = 1; e < x.length; e++) t += x[e];
  return t;
}
function J0(x) {
  return x !== null && typeof x == "object" && x.constructor.name === Object.name && !("props" in x && x.$$typeof);
}
function ir(x, o, t) {
  if (void (4 * -741 + -9529 + 12493) === t && (t = !1), !t && !J0(x) && !Array.isArray(x)) return o;
  if (Array.isArray(o))
    for (var e = 5 * 31 + -8032 + 7877; e < o.length; e++) x[e] = ir(x[e], o[e]);
  else if (J0(o))
    for (var e in o) x[e] = ir(x[e], o[e]);
  return x;
}
function ei(x, o) {
  var t = {};
  t.value = o, Object.defineProperty(x, "toString", t);
}
var ye = {};
ye[1] = `Cannot create styled-component for component: %s.

`, ye[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, ye[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, ye[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, ye[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, ye[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, ye[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', ye[8] = `ThemeProvider: Please make your "theme" prop an object.

`, ye[9] = "Missing document `<head>`\n\n", ye[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, ye[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, ye[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", ye[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, ye[14] = `ThemeProvider: "theme" prop is required.

`, ye[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", ye[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, ye[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, ye[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var gu = q.NODE_ENV !== "production" ? ye : {};
function du() {
  for (var x = [], o = 1 * -8168 + -3304 + 12 * 956; o < arguments.length; o++) x[o] = arguments[o];
  for (var t = x[9109 * -1 + 313 * -2 + 9735], e = [], n = 1, r = x.length; n < r; n += 7744 + -35 * -157 + -6619 * 2) e.push(x[n]);
  return e.forEach(function(i) {
    t = t.replace(/%[a-z]/, i);
  }), t;
}
function z0(x) {
  for (var o = [], t = 3 * -1529 + 7038 + -2450; t < arguments.length; t++) o[t - (-5184 + -5 * -1037)] = arguments[t];
  return q.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(x, " for more information.").concat(o.length > -25 * -134 + -227 + -3123 ? " Args: ".concat(o.join(", ")) : "")) : new Error(du.apply(void (-357 * -25 + -6019 + -2906 * 1), N0([gu[x]], o, !1)).trim());
}
var uu = function() {
  function x(o) {
    this.groupSizes = new Uint32Array(-54 * -42 + -9507 + -23 * -337), this.length = 8902 + 179 * -51 + 1 * 739, this.tag = o;
  }
  return x.prototype.indexOfGroup = function(o) {
    for (var t = -1078 * 6 + 499 * 19 + -131 * 23, e = 4172 + -4172 * 1; e < o; e++) t += this.groupSizes[e];
    return t;
  }, x.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, r = n; o >= r; ) if ((r <<= -2705 * -1 + -1 * 2965 + 261) < -3585 + -5 * -717) throw z0(-9314 * 1 + -4181 * 1 + 13511, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(e), this.length = r;
      for (var i = n; i < r; i++) this.groupSizes[i] = 0;
    }
    for (var a = this.indexOfGroup(o + 1), s = (i = 8952 + -58 * -95 + -2 * 7231, t.length); i < s; i++) this.tag.insertRule(a, t[i]) && (this.groupSizes[o]++, a++);
  }, x.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), n = e + t;
      this.groupSizes[o] = -271 + 271 * 1;
      for (var r = e; r < n; r++) this.tag.deleteRule(e);
    }
  }, x.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || 9595 + 19 * -505 === this.groupSizes[o]) return t;
    for (var e = this.groupSizes[o], n = this.indexOfGroup(o), r = n + e, i = n; i < r; i++) t += "".concat(this.tag.getRule(i)).concat(zr);
    return t;
  }, x;
}(), lu = -179 * -27 + -1 * -27 + -4859 << 2 * -641 + 8215 + -6903, hx = /* @__PURE__ */ new Map(), kx = /* @__PURE__ */ new Map(), mx = 571 * 1 + -2 * -2507 + -349 * 16, nx = function(x) {
  if (hx.has(x)) return hx.get(x);
  for (; kx.has(mx); ) mx++;
  var o = mx++;
  if (q.NODE_ENV !== "production" && ((3713 + 74 * 122 + -12741 | o) < -1155 * -3 + -31 * 206 + -127 * -23 || o > lu)) throw z0(834 * -5 + -8234 + 12420, "".concat(o));
  return hx.set(x, o), kx.set(o, x), o;
}, Iu = function(x, o) {
  mx = o + (-8852 * 1 + 2 * 1984 + 4885), hx.set(x, o), kx.set(o, x);
}, fu = "style[".concat(l0, "][").concat(Fs, '="').concat(co, '"]'), Cu = new RegExp("^".concat(l0, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), hu = function(x, o, t) {
  for (var e, n = t.split(","), r = -1586 + 61 * 26, i = n.length; r < i; r++) (e = n[r]) && x.registerName(o, e);
}, mu = function(x, o) {
  for (var t, e = ((t = o.textContent) !== null && t !== void 0 ? t : "").split(zr), n = [], r = 1 * -614 + -13 * 353 + 5203, i = e.length; r < i; r++) {
    var a = e[r].trim();
    if (a) {
      var s = a.match(Cu);
      if (s) {
        var c = 0 | parseInt(s[1], 10), d = s[3449 * 2 + 1 * 1691 + -8587];
        2582 + -51 * -76 + -6458 !== c && (Iu(d, c), hu(x, d, s[-1564 + 1 * -641 + 2208]), x.getTag().insertRules(c, n)), n.length = 3058 * 1 + -3346 + 288;
      } else n.push(a);
    }
  }
};
function pu() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Us = function(x) {
  var o = document.head, t = x || o, e = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(l0, "]")));
    return s[s.length - (6679 + -1 * -1521 + -911 * 9)];
  }(t), r = n !== void 0 ? n.nextSibling : null;
  e.setAttribute(l0, Ds), e.setAttribute(Fs, co);
  var i = pu();
  return i && e.setAttribute("nonce", i), t.insertBefore(e, r), e;
}, bu = function() {
  function x(o) {
    this.element = Us(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = -4 * 1517 + 2867 + 291 * 11, r = e.length; n < r; n++) {
        var i = e[n];
        if (i.ownerNode === t) return i;
      }
      throw z0(1 * -8170 + -8867 * -1 + -340 * 2);
    }(this.element), this.length = 0;
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
}(), Au = function() {
  function x(o) {
    this.element = Us(o), this.nodes = this.element.childNodes, this.length = -52 * 31 + 331 * 4 + 6 * 48;
  }
  return x.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= 3837 + 1279 * -3) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, x.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, x;
}(), yu = function() {
  function x(o) {
    this.rules = [], this.length = -41 * -190 + -9162 * -1 + -16952;
  }
  return x.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, 0, t), this.length++, !0);
  }, x.prototype.deleteRule = function(o) {
    this.rules.splice(o, 1), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, x;
}(), ma = qr, Wu = { isServer: !qr, useCSSOMInjection: !Qd }, zs = function() {
  function x(o, t, e) {
    o === void 0 && (o = M0), void (9376 + 23 * 90 + -11446) === t && (t = {});
    var n = this;
    this.options = ze(ze({}, Wu), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && qr && ma && (ma = !1, function(r) {
      for (var i = document.querySelectorAll(fu), a = 19019 + -11 * 1729, s = i.length; a < s; a++) {
        var c = i[a];
        c && c.getAttribute(l0) !== Ds && (mu(r, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), ei(this, function() {
      return function(r) {
        for (var i = r.getTag(), a = i.length, s = "", c = function(g) {
          var C = function(u) {
            return kx.get(u);
          }(g);
          if (void (-3221 * -3 + -1 * 1083 + -8580) === C) return "continue";
          var l = r.names.get(C), h = i.getGroup(g);
          if (void (7555 * -1 + 3 * -167 + 8056) === l || 9236 + 23 * -354 + -1094 === h.length) return "continue";
          var p = "".concat(l0, ".g").concat(g, '[id="').concat(C, '"]'), A = "";
          void (-4003 + 1501 * -2 + 7005) !== l && l.forEach(function(u) {
            u.length > -1 * 2690 + 1 * -2066 + 4756 && (A += "".concat(u, ","));
          }), s += "".concat(h).concat(p, '{content:"').concat(A, '"}').concat(zr);
        }, d = -2837 * -1 + -605 + 18 * -124; d < a; d++) c(d);
        return s;
      }(n);
    });
  }
  return x.registerId = function(o) {
    return nx(o);
  }, x.prototype.reconstructWithOptions = function(o, t) {
    return void (10888 + -1361 * 8) === t && (t = !0), new x(ze(ze({}, this.options), o), this.gs, t && this.names || void (6 * 1151 + 3 * -1228 + -1 * 3222));
  }, x.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || 0) + (8630 + 8629 * -1);
  }, x.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new yu(n) : e ? new bu(n) : new Au(n);
    }(this.options), new uu(o)));
    var o;
  }, x.prototype.hasNameForId = function(o, t) {
    return this.names.has(o) && this.names.get(o).has(t);
  }, x.prototype.registerName = function(o, t) {
    if (nx(o), this.names.has(o)) this.names.get(o).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(o, e);
    }
  }, x.prototype.insertRules = function(o, t, e) {
    this.registerName(o, t), this.getTag().insertRules(nx(o), e);
  }, x.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, x.prototype.clearRules = function(o) {
    this.getTag().clearGroup(nx(o)), this.clearNames(o);
  }, x.prototype.clearTag = function() {
    this.tag = void (1 * -5101 + 1 * -9529 + 7315 * 2);
  }, x;
}(), vu = /&/g, Su = /^\s*\/\/.*$/gm;
function qs(x, o) {
  return x.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(o, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(o, " ")), t.props = t.props.map(function(e) {
      return "".concat(o, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = qs(t.children, o)), t;
  });
}
function $s(x) {
  var o, t, e, n = x === void 0 ? M0 : x, r = n.options, i = void (-397 * -22 + 5784 + -14518) === r ? M0 : r, a = n.plugins, s = void (9457 * 1 + -1388 * 2 + -6681) === a ? go : a, c = function(C, l, h) {
    return h.startsWith(t) && h.endsWith(t) && h.replaceAll(t, "").length > -518 * -5 + -19 * -102 + -4528 ? ".".concat(o) : C;
  }, d = s.slice();
  d.push(function(C) {
    C.type === ro && C.value.includes("&") && (C.props[86 * -85 + 8825 + -1515] = C.props[5953 + 1 * -5953].replace(vu, t).replace(e, c));
  }), i.prefix && d.push(Jd), d.push(Xd);
  var g = function(C, l, h, p) {
    void (-1 * 3767 + 3529 + -14 * -17) === l && (l = ""), h === void 0 && (h = ""), void (65 * 79 + -2243 * 4 + 3837) === p && (p = "&"), o = p, t = l, e = new RegExp("\\".concat(t, "\\b"), "g");
    var A = C.replace(Su, ""), u = Fd(h || l ? "".concat(h, " ").concat(l, " { ").concat(A, " }") : A);
    i.namespace && (u = qs(u, i.namespace));
    var W = [];
    return Gx(u, Md(d.concat(jd(function(H) {
      return W.push(H);
    })))), W;
  };
  return g.hash = s.length ? s.reduce(function(C, l) {
    return l.name || z0(-5939 + -2 * -163 + 1407 * 4), x0(C, l.name);
  }, Ys).toString() : "", g;
}
var wu = new zs(), ar = $s(), ti = u0.createContext({ shouldForwardProp: void 0, styleSheet: wu, stylis: ar });
ti.Consumer;
var Bu = u0.createContext(void (-600 + -120 * -5));
function sr() {
  return C0(ti);
}
function Gu(x) {
  var o = tt(x.stylisPlugins), t = o[-142 * -66 + 7570 + -1 * 16942], e = o[1], n = sr().styleSheet, r = nt(function() {
    var d = n, g = {};
    return g.useCSSOMInjection = !1, x.sheet ? d = x.sheet : x.target && (d = d.reconstructWithOptions({ target: x.target }, !1)), x.disableCSSOMInjection && (d = d.reconstructWithOptions(g)), d;
  }, [x.disableCSSOMInjection, x.sheet, x.target, n]), i = nt(function() {
    var d = {};
    d.namespace = x.namespace, d.prefix = x.enableVendorPrefixes;
    var g = {};
    return g.options = d, g.plugins = t, $s(g);
  }, [x.enableVendorPrefixes, x.namespace, t]);
  Be(function() {
    kd(t, x.stylisPlugins) || e(x.stylisPlugins);
  }, [x.stylisPlugins]);
  var a = nt(function() {
    var d = {};
    return d.shouldForwardProp = x.shouldForwardProp, d.styleSheet = r, d.stylis = i, d;
  }, [x.shouldForwardProp, r, i]), s = {};
  s.value = a;
  var c = {};
  return c.value = i, u0.createElement(ti.Provider, s, u0.createElement(Bu.Provider, c, x.children));
}
var pa = function() {
  function x(o, t) {
    var e = this;
    this.inject = function(n, r) {
      void (664 * 7 + 6715 * 1 + -11363) === r && (r = ar);
      var i = e.name + r.hash;
      n.hasNameForId(e.id, i) || n.insertRules(e.id, i, r(e.rules, i, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, ei(this, function() {
      throw z0(-4 * -1396 + -4950 * -1 + -10522, String(e.name));
    });
  }
  return x.prototype.getName = function(o) {
    return void (2 * -1882 + 9058 + -5294) === o && (o = ar), this.name + o.hash;
  }, x;
}(), ku = function(x) {
  return x >= "A" && x <= "Z";
};
function ba(x) {
  for (var o = "", t = 637 + 1 * -150 + -487; t < x.length; t++) {
    var e = x[t];
    if (1867 * 1 + 1562 * 6 + -11238 === t && e === "-" && x[0] === "-") return x;
    ku(e) ? o += "-" + e.toLowerCase() : o += e;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var ec = function(x) {
  return x == null || x === !1 || x === "";
}, tc = function(x) {
  var o, t, e = [];
  for (var n in x) {
    var r = x[n];
    x.hasOwnProperty(n) && !ec(r) && (Array.isArray(r) && r.isCss || j0(r) ? e.push("".concat(ba(n), ":"), r, ";") : J0(r) ? e.push.apply(e, N0(N0(["".concat(n, " {")], tc(r), !1), ["}"], !1)) : e.push("".concat(ba(n), ": ").concat((o = n, (t = r) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -39 * 89 + 7543 + -4 * 1018 === t || o in _d || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function c0(x, o, t, e) {
  if (ec(x)) return [];
  if ($r(x)) return [".".concat(x.styledComponentId)];
  if (j0(x)) {
    if (!j0(r = x) || r.prototype && r.prototype.isReactComponent || !o) return [x];
    var n = x(o);
    return q.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof pa || J0(n) || n === null || console.error("".concat(Ms(x), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), c0(n, o, t, e);
  }
  var r;
  return x instanceof pa ? t ? (x.inject(t, e), [x.getName(e)]) : [x] : J0(x) ? tc(x) : Array.isArray(x) ? Array.prototype.concat.apply(go, x.map(function(i) {
    return c0(i, o, t, e);
  })) : [x.toString()];
}
function Hu(x) {
  for (var o = -1 * 973 + -2675 + 192 * 19; o < x.length; o += -4756 + -1 * -4757) {
    var t = x[o];
    if (j0(t) && !$r(t)) return !1;
  }
  return !0;
}
var Ou = Xs(co), Ku = function() {
  function x(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = q.NODE_ENV === "production" && (void (5575 + -1 * 289 + 1 * -5286) === e || e.isStatic) && Hu(o), this.componentId = t, this.baseHash = x0(Ou, t), this.baseStyle = e, zs.registerId(t);
  }
  return x.prototype.generateAndInjectStyles = function(o, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = r0(n, this.staticRulesId);
      else {
        var r = ha(c0(this.rules, o, t, e)), i = rr(x0(this.baseHash, r) >>> -5878 * 1 + 6801 * -1 + 12679);
        if (!t.hasNameForId(this.componentId, i)) {
          var a = e(r, ".".concat(i), void 0, this.componentId);
          t.insertRules(this.componentId, i, a);
        }
        n = r0(n, i), this.staticRulesId = i;
      }
    else {
      for (var s = x0(this.baseHash, e.hash), c = "", d = 1085 + -25 * -261 + -7610; d < this.rules.length; d++) {
        var g = this.rules[d];
        if (typeof g == "string") c += g, q.NODE_ENV !== "production" && (s = x0(s, g));
        else if (g) {
          var C = ha(c0(g, o, t, e));
          s = x0(s, C + d), c += C;
        }
      }
      if (c) {
        var l = rr(s >>> 0);
        t.hasNameForId(this.componentId, l) || t.insertRules(this.componentId, l, e(c, ".".concat(l), void (-8319 + -1054 * -5 + 3049), this.componentId)), n = r0(n, l);
      }
    }
    return n;
  }, x;
}(), nc = u0.createContext(void 0);
nc.Consumer;
var Po = {}, Aa = /* @__PURE__ */ new Set();
function Zu(x, o, t) {
  var e = $r(x), n = x, r = !Ro(x), i = o.attrs, a = void (-11694 + -1949 * -6) === i ? go : i, s = o.componentId, c = void (-7688 + -3295 * 1 + 3 * 3661) === s ? function(Y, X) {
    var K = typeof Y != "string" ? "sc" : ua(Y);
    Po[K] = (Po[K] || 3392 + 2 * -1853 + 314) + (-7764 + -1521 * 1 + -4643 * -2);
    var _ = "".concat(K, "-").concat(tu(co + K + Po[K]));
    return X ? "".concat(X, "-").concat(_) : _;
  }(o.displayName, o.parentComponentId) : s, d = o.displayName, g = d === void 0 ? function(Y) {
    return Ro(Y) ? "styled.".concat(Y) : "Styled(".concat(Ms(Y), ")");
  }(x) : d, C = o.displayName && o.componentId ? "".concat(ua(o.displayName), "-").concat(o.componentId) : o.componentId || c, l = e && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, h = o.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var p = n.shouldForwardProp;
    if (o.shouldForwardProp) {
      var A = o.shouldForwardProp;
      h = function(Y, X) {
        return p(Y, X) && A(Y, X);
      };
    } else h = p;
  }
  var u = new Ku(t, C, e ? n.componentStyle : void (1 * 9713 + 8898 + -18611));
  function W(Y, X) {
    return function(K, _, Ie) {
      var U = K.attrs, fe = K.componentStyle, Ce = K.defaultProps, Ze = K.foldedComponentIds, lt = K.styledComponentId, ie = K.target, Re = u0.useContext(nc), Ye = sr(), ot = K.shouldForwardProp || Ye.shouldForwardProp;
      q.NODE_ENV !== "production" && Bx(lt);
      var Xe = zd(_, Re, Ce) || M0, pe = function(m0, qe, At) {
        var rt = {};
        rt.className = void (2362 * -1 + 3 * -678 + 1 * 4396), rt.theme = At;
        for (var Qt, yt = ze(ze({}, qe), rt), It = -139 * 1 + 9995 * -1 + -10134 * -1; It < m0.length; It += 173 * -47 + -1 * 4708 + -428 * -30) {
          var Ut = j0(Qt = m0[It]) ? Qt(yt) : Qt;
          for (var ft in Ut) yt[ft] = ft === "className" ? r0(yt[ft], Ut[ft]) : ft === "style" ? ze(ze({}, yt[ft]), Ut[ft]) : Ut[ft];
        }
        return qe.className && (yt.className = r0(yt.className, qe.className)), yt;
      }(U, _, Xe), Te = pe.as || ie, Me = {};
      for (var be in pe) void (-3737 + 293 * 33 + 2966 * -2) === pe[be] || be[-118 * -17 + 7 * -1046 + 5316] === "$" || be === "as" || be === "theme" && pe.theme === Xe || (be === "forwardedAs" ? Me.as = pe.forwardedAs : ot && !ot(be, Te) || (Me[be] = pe[be], ot || q.NODE_ENV !== "development" || Yg(be) || Aa.has(be) || !or.has(Te) || (Aa.add(be), console.warn('styled-components: it looks like an unknown prop "'.concat(be, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ee = function(m0, qe) {
        var At = sr(), rt = m0.generateAndInjectStyles(qe, At.styleSheet, At.stylis);
        return q.NODE_ENV !== "production" && Bx(rt), rt;
      }(fe, pe);
      q.NODE_ENV !== "production" && K.warnTooManyClasses && K.warnTooManyClasses(Ee);
      var je = r0(Ze, lt);
      return Ee && (je += " " + Ee), pe.className && (je += " " + pe.className), Me[Ro(Te) && !or.has(Te) ? "class" : "className"] = je, Me.ref = Ie, Fe(Te, Me);
    }(H, Y, X);
  }
  W.displayName = g;
  var H = u0.forwardRef(W), N = {};
  return N.attrs = !0, N.componentStyle = !0, N.displayName = !0, N.foldedComponentIds = !0, N.shouldForwardProp = !0, N.styledComponentId = !0, N.target = !0, H.attrs = l, H.componentStyle = u, H.displayName = g, H.shouldForwardProp = h, H.foldedComponentIds = e ? r0(n.foldedComponentIds, n.styledComponentId) : "", H.styledComponentId = C, H.target = e ? n.target : x, Object.defineProperty(H, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(Y) {
    this._foldedDefaultProps = e ? function(X) {
      for (var K = [], _ = 20 * -277 + 9193 + -3652; _ < arguments.length; _++) K[_ - 1] = arguments[_];
      for (var Ie = 7 * -1028 + 151 * -9 + 8555, U = K; Ie < U.length; Ie++) ir(X, U[Ie], !0);
      return X;
    }({}, n.defaultProps, Y) : Y;
  } }), q.NODE_ENV !== "production" && (Ud(g, C), H.warnTooManyClasses = /* @__PURE__ */ function(Y, X) {
    var K = {}, _ = !1;
    return function(Ie) {
      if (!_ && (K[Ie] = !0, Object.keys(K).length >= -253 * 13 + -1 * 4274 + -7763 * -1)) {
        var U = X ? ' with the id of "'.concat(X, '"') : "";
        console.warn("Over ".concat(2429 * 1 + 9421 * -1 + 232 * 31, " classes were generated for component ").concat(Y).concat(U, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), _ = !0, K = {};
      }
    };
  }(g, C)), ei(H, function() {
    return ".".concat(H.styledComponentId);
  }), r && Qs(H, x, N), H;
}
function ya(x, o) {
  for (var t = [x[0]], e = 7736 + -2 * 4916 + 2096, n = o.length; e < n; e += 1) t.push(o[e], x[e + (9714 + -11 * 883)]);
  return t;
}
var Wa = function(x) {
  var o = {};
  return o.isCss = !0, Object.assign(x, o);
};
function Ru(x) {
  for (var o = [], t = -3811 + -4 * -953; t < arguments.length; t++) o[t - (1 * 3219 + -1101 * 7 + -4489 * -1)] = arguments[t];
  if (j0(x) || J0(x)) return Wa(c0(ya(go, N0([x], o, !0))));
  var e = x;
  return -12678 + -4226 * -3 === o.length && 10 * 18 + 1 * 2218 + 3 * -799 === e.length && typeof e[-7828 + -4 * -1957] == "string" ? c0(e) : Wa(c0(ya(e, o)));
}
function cr(x, o, t) {
  if (void (-9637 + -5 * 750 + 13387) === t && (t = M0), !o) throw z0(262 * 19 + -2273 * 2 + -431, o);
  var e = function(n) {
    for (var r = [], i = 1 * 1163 + 4047 + -5209; i < arguments.length; i++) r[i - (2358 + -2357 * 1)] = arguments[i];
    return x(o, t, Ru.apply(void (5 * 1203 + 4713 * 1 + -10728), N0([n], r, !1)));
  };
  return e.attrs = function(n) {
    return cr(x, o, ze(ze({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return cr(x, o, ze(ze({}, t), n));
  }, e;
}
var xc = function(x) {
  return cr(Zu, x);
}, En = xc;
or.forEach(function(x) {
  En[x] = xc(x);
});
q.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var xx = "__sc-".concat(l0, "__");
q.NODE_ENV !== "production" && q.NODE_ENV !== "test" && typeof window < "u" && (window[xx] || (window[xx] = 401 * 3 + 270 * 20 + -6603), 10 * -987 + -7595 * -1 + -2 * -1138 === window[xx] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[xx] += -2 * -794 + 57 * -38 + 579);
const Pu = En.div`
  position: relative;
`, Vu = En.video`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(x) => x.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class xe extends Error {
  constructor(t, e) {
    super(t);
    J(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof xe) return t;
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
    return new xe(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof xe) return t;
    const e = "An unexpected error has occurred";
    return new xe(e);
  }
}
var px = ((x) => (x.CONTINUE_DETECTION = "continue-detection", x.SWITCH_CAMERA = "switch-camera", x.TOGGLE_MIRROR = "toggle-mirror", x))(px || {}), oc = ((x) => (x.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", x.CONTROL = "document-auto-capture:control", x.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", x.DOCUMENT_DETECTION = "document-auto-capture:document-detection", x.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", x.STATE_CHANGED = "document-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", x))(oc || {}), Mt = ((x) => (x.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", x.CONTROL = "face-auto-capture:control", x.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", x.FACE_DETECTION = "face-auto-capture:face-detection", x.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", x.STATE_CHANGED = "face-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", x))(Mt || {}), Tu = ((x) => (x.ANIMATION_END = "magnifeye-auto-capture:animation-end", x.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", x))(Tu || {}), Hx = ((x) => (x.STATUS_CHANGED = "smile-auto-capture:status-changed", x))(Hx || {});
const rc = {};
rc.EYE_NOT_PRESENT = "eye_not_present";
const va = rc, Ne = {};
Ne.CANDIDATE_SELECTION = "candidate_selection", Ne.FACE_TOO_CLOSE = "face_too_close", Ne.FACE_TOO_FAR = "face_too_far", Ne.FACE_CENTERING = "face_centering", Ne.FACE_NOT_PRESENT = "face_not_present", Ne.SHARPNESS_TOO_LOW = "sharpness_too_low", Ne.BRIGHTNESS_TOO_LOW = "brightness_too_low", Ne.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Ne.DEVICE_PITCHED = "device_pitched", Ne.LEFT_EYE_NOT_PRESENT = "left_" + va.EYE_NOT_PRESENT, Ne.RIGHT_EYE_NOT_PRESENT = "right_" + va.EYE_NOT_PRESENT, Ne.MOUTH_NOT_PRESENT = "mouth_not_present", Ne.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", Ne.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const Pe = Ne, _e = {};
_e.isPresent = Pe.FACE_NOT_PRESENT, _e.isNotPitched = Pe.DEVICE_PITCHED, _e.isNotSmall = Pe.FACE_TOO_FAR, _e.isNotLarge = Pe.FACE_TOO_CLOSE, _e.isNotOutOfBounds = Pe.FACE_CENTERING, _e.isNotDim = Pe.BRIGHTNESS_TOO_LOW, _e.isNotBright = Pe.BRIGHTNESS_TOO_HIGH, _e.isSharp = Pe.SHARPNESS_TOO_LOW, _e.isLeftEyePresent = Pe.LEFT_EYE_NOT_PRESENT, _e.isRightEyePresent = Pe.RIGHT_EYE_NOT_PRESENT, _e.isMouthPresent = Pe.MOUTH_NOT_PRESENT, _e.isMouthScoreNotTooHigh = Pe.MOUTH_SCORE_TOO_HIGH, _e.isMouthScoreNotTooLow = Pe.MOUTH_SCORE_TOO_LOW;
const Eu = _e, gr = {};
gr.FRONT = "user", gr.REAR = "environment";
const ic = gr, cn = {};
cn.LOADING = "LOADING", cn.ERROR = "ERROR", cn.WAITING = "WAITING", cn.RUNNING = "RUNNING";
const St = cn;
var Lu = ((x) => (x.CLOSEUP = "CLOSEUP", x.DISTANT = "DISTANT", x.MIDDLE = "MIDDLE", x))(Lu || {});
const dr = {};
dr.NEUTRAL = "NEUTRAL", dr.SMILE = "SMILE";
const Z0 = dr, ac = { ...St };
ac.DONE = "DONE";
const g0 = ac, uo = Tn(void 0);
uo.displayName = "AppStateContext";
function q0() {
  const x = C0(uo);
  if (x === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return x;
}
const Nu = uo.Provider, Du = q0;
class sc extends gt {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const o = new xe("An unknown error has occurred");
    (t = this.context) == null || t.handleError(o);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var o;
    return ((o = this.context) == null ? void 0 : o.appState) === St.ERROR ? null : this.props.children;
  }
}
J(sc, "contextType", uo);
const Fu = En.canvas`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Yu = En.div`
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
function Xu() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Mu = ys(
  ({ detectionDetails: x, isImageMirror: o }, t) => Xu() ? (console.log(x), /* @__PURE__ */ O(pt, { children: [
    /* @__PURE__ */ O(Fu, { ref: t, $isImageMirror: o }),
    /* @__PURE__ */ O(Yu, { children: Object.entries(x).map(([e, n]) => /* @__PURE__ */ O("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ O("strong", { children: n })
    ] }, e)) })
  ] })) : null
), Ox = Tn(void 0);
Ox.displayName = "AnalyticsContext";
function cc() {
  const x = C0(Ox);
  if (x === void 0)
    throw new Error(`${Ox.displayName} must be used within a AnalyticsProvider`);
  return x;
}
(function(x, o) {
  const t = x();
  function e(s, c, d, g, C) {
    return ve(d - -829, C);
  }
  function n(s, c, d, g, C) {
    return ve(g - -39, C);
  }
  function r(s, c, d, g, C) {
    return ve(C - -807, s);
  }
  function i(s, c, d, g, C) {
    return ve(g - -608, c);
  }
  function a(s, c, d, g, C) {
    return ve(s - -140, c);
  }
  for (; ; )
    try {
      if (-parseInt(n(234, 207, 210, 219, "v548")) / 1 + -parseInt(n(215, 222, 195, 213, "*hhn")) / 2 + -parseInt(n(194, 203, 177, 195, "rGW#")) / 3 * (-parseInt(i(-377, "ANuu", -362, -365, -370)) / 4) + -parseInt(a(106, "8z7a", 99, 119, 115)) / 5 * (-parseInt(e(-556, -558, -559, -549, "idY4")) / 6) + parseInt(a(113, "VFvH", 104, 124, 131)) / 7 * (-parseInt(i(-333, "L[Sf", -339, -352, -364)) / 8) + parseInt(r("XowO", -571, -557, -586, -570)) / 9 + -parseInt(r("L[Sf", -544, -545, -556, -560)) / 10 * (-parseInt(r("ANuu", -552, -535, -559, -553)) / 11) === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Zx, 7 * 71268 + -1510004 + 1792647);
function ju(x, o, t, e, n) {
  return ve(n - 998, t);
}
function ve(x, o) {
  const t = Zx();
  return ve = function(e, n) {
    e = e - 234;
    let r = t[e];
    if (ve.wofIUL === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, W = 0; u = g.charAt(W++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      ve.hcEWuo = d, x = arguments, ve.wofIUL = !0;
    }
    const a = t[2027 * -1 + 5048 + -19 * 159], s = e + a, c = x[s];
    return c ? r = c : (ve.KfRncu === void 0 && (ve.KfRncu = !0), r = ve.hcEWuo(r, n), x[s] = r), r;
  }, ve(x, o);
}
function Sa(x, o, t, e, n) {
  return ve(o - -517, e);
}
function Ju(x, o, t, e, n) {
  return ve(t - -226, o);
}
const Kx = Tn(void (9638 + 1 * 3324 + 6481 * -2));
function ur(x, o, t, e, n) {
  return ve(e - -762, o);
}
Kx[Sa(-242, -257, -265, "v548") + lr(-54, "s5br", -35, -58, -46) + "e"] = ur(-504, "gUmB", -483, -494) + ur(-506, "qWx)", -480, -499) + Sa(-278, -269, -264, "gIQN");
function lr(x, o, t, e, n) {
  return ve(n - -284, o);
}
function Zx() {
  const x = ["WRBcPCkbWP5X", "eK42W6nSj8ow", "WPVcJSojW7RdMG", "DSkQWQqvyMpdR8ksWRVcLSoX", "W5qhW6vwW6BcGmoUW4NcPXqImL0", "W70aBcvmWOGepW", "nCogW7Tn", "WOtdIutdP8oT", "bKBdUX/dLmkMW73cPh9GW5hcMGK", "W6yeWRycWOq", "DSkOWQixyWdcR8k5WOlcMmoIeSoc", "W67dOmoAW4qSmvanW6xdMti", "ea56WRO8ECkOu2VcUdiRW7G", "W6nmW7VdQwWqqbNdICkDW5fEWQC", "W7GfgvHiWRSxev7cHW", "WRhcTwqRwW", "qmk+t3SYWQ7cRmojWQ0sWQ7dSG", "AHxdOmkwlSkeW4b5m8ke", "hmoUdtTO", "BN5fW4FdVq", "vCkfnCoJW6G", "jYTsamoC", "WR3dLHbqxZiOcG", "faX5WRK4EmkOB1xcRbOYW4m", "W5imW7iyy30mCJ/cOSkjWRC", "ACkAW7qlW7JdQ8kR", "WQtcO8kbW7L1", "W5qbW6rqW6lcJmoQW7hcQGq1eea", "W6NdQmoFWPhcVCoXWPpdRW", "W6ZcKGHtEGafW5zuWOBcH29W", "ntDFdSoF", "pCk0WPJdKg4tBN1PlSoUWPpcMa", "W67dIMHPW70+W5pdN1tcUapdL8k+", "jrddP0FdUW", "BbtcRCowjmkvW6nS", "W7LTmxa5", "WPRdMmo2"];
  return Zx = function() {
    return x;
  }, Zx();
}
function ni() {
  const x = C0(Kx);
  function o(i, a, s, c, d) {
    return ur(i - 303, c, s - 373, i - 953);
  }
  function t(i, a, s, c, d) {
    return lr(i - 249, a, s - 82, c - 488, d - 71);
  }
  function e(i, a, s, c, d) {
    return lr(i - 342, d, s - 458, c - 494, s - 292);
  }
  function n(i, a, s, c, d) {
    return ju(i - 224, a - 261, a, c - 170, d - -1623);
  }
  if (x === void (358 * -11 + -1 * 6494 + 8 * 1304)) throw new Error(Kx[e(239, 267, 252, 263, "tRUL") + e(234, 243, 243, 233, "qWx)") + "e"] + (t(43, "*S3m", 17, 26, 27) + o(442, 457, 454, "fqA7") + r(457, 452, 439, 442, "wSS[") + r(413, 432, 420, 403, "VFvH") + t(53, "pAeL", 33, 27, 36) + n(-374, "S[ln", -374, -360, -363) + r(437, 442, 435, 443, "8!c5") + r(431, 436, 419, 402, "JYRP")));
  function r(i, a, s, c, d) {
    return Ju(i - 330, d, s - 404);
  }
  return x;
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return Se(g - -742, s);
  }
  function e(s, c, d, g, C) {
    return Se(c - -367, g);
  }
  function n(s, c, d, g, C) {
    return Se(C - 278, c);
  }
  const r = x();
  function i(s, c, d, g, C) {
    return Se(C - -724, g);
  }
  function a(s, c, d, g, C) {
    return Se(s - -275, c);
  }
  for (; ; )
    try {
      if (-parseInt(e(142, 127, 134, "Qtur", 131)) / 1 * (parseInt(a(204, "uXus", 218, 219, 196)) / 2) + -parseInt(e(145, 131, 145, "9dGu", 121)) / 3 * (parseInt(t(")(1Z", -269, -264, -264, -256)) / 4) + -parseInt(a(210, "$OJ]", 208, 207, 214)) / 5 + parseInt(i(-238, -238, -229, "Y3Hf", -234)) / 6 * (parseInt(t("7LRN", -272, -256, -260, -249)) / 7) + parseInt(e(130, 132, 136, "7LRN", 130)) / 8 * (parseInt(e(134, 134, 119, "7LRN", 125)) / 9) + parseInt(i(-213, -219, -230, "zmXx", -224)) / 10 + -parseInt(n(773, "Y3Hf", 757, 761, 765)) / 11 * (-parseInt(a(208, "emoo", 204, 200, 220)) / 12) === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Rx, -333890 + 504479 * 2 + 151748);
function _u({ licensePath: x, bramble: o, wasmDirectoryPath: t }) {
  function e(c, d, g, C, l) {
    return Se(l - -855, d);
  }
  const [n, r] = tt(), i = n !== void (-1 * 7351 + 9526 + -2175);
  Be(() => {
    async function c() {
      await o[g(1049, 1055, 1046, 1043, "8UWD")](t, x);
      function d(l, h, p, A, u) {
        return Se(l - -670, p);
      }
      function g(l, h, p, A, u) {
        return Se(A - 547, u);
      }
      function C(l, h, p, A, u) {
        return Se(p - -754, h);
      }
      r(o[d(-196, -203, "cuvm") + g(1052, 1028, 1042, 1038, "oMFL") + C(-284, "Qtur", -279) + "t"]());
    }
    c();
  }, [o, t, x, r]);
  const a = {};
  a[s(-318, -318, -330, -314, "7LRN") + s(-317, -330, -322, -304, "L3se")] = n, a[e(-370, "c[kz", -364, -353, -362) + "sh"] = i;
  function s(c, d, g, C, l) {
    return Se(c - -798, l);
  }
  return a;
}
function Se(x, o) {
  const t = Rx();
  return Se = function(e, n) {
    e = e - (726 * -6 + -20 * -214 + 550);
    let r = t[e];
    if (Se.sQfPAq === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, W = 0; u = g.charAt(W++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      Se.SBILuV = d, x = arguments, Se.sQfPAq = !0;
    }
    const a = t[-3790 * 2 + -5359 + 12939], s = e + a, c = x[s];
    return c ? r = c : (Se.lKfGXJ === void 0 && (Se.lKfGXJ = !0), r = Se.SBILuV(r, n), x[s] = r), r;
  }, Se(x, o);
}
function Rx() {
  const x = ["kCkphLhdKY4qxh7cGSkCCLC", "WRiyWRNcGKBdJGPMWO5PW4Ge", "jCkMWOXGsrpdMMe", "W5mwW6xdP8oNntC7efPkW6ldIa", "WPdcUgdcJmkPbCosW7q", "i8kMWOLsAWFdPKi", "WPNdKHWHDq", "v8oPWQZdHGWJvIRcKSo1W4VcOwW", "W7xdNYpdP3K", "wCoWW7HibSk5imoLaYq/ja", "umoYW79bbmk/m8o3pYCvhG", "f8kRkmoa", "WRFdLSo5tHTlAG", "WPqymtj2w8oJW753kciJ", "W51lWOBcUSkADxK", "aaxcLH3cI2hcQmoBvSolvaBdL1e", "W5aEW6ldQmoNntiydNLmW6ddQG", "t8kHW4ruW73dMLjc", "WRRdOmkLWQVcHG", "oSkMWRKewG", "W4xcV2tcPCoCoa5YWQtdMSo2tX0", "W6uym8kms8kggCkIdG/dOSo6", "uSkrdMdcJ8kBW6G", "W6D/W5pcR8oZl8okWQO", "WOzDWRVcO8kI", "FSkpW6asW4i", "W50EW6hdOmoJnNG8cMP2W5y", "vmoHWQVdIqWJuWNcJmowW43cO04", "B8krWQy9W68rcG"];
  return Rx = function() {
    return x;
  }, Rx();
}
var gc = ((x) => (x.DOCUMENT = "document-auto-capture:dev", x.FACE = "face-auto-capture:dev", x))(gc || {});
const Ir = {};
Ir.SIMD = "simd", Ir.NO_SIMD = "no-simd";
const wa = Ir, fr = {};
fr.Lower = "Lower", fr.Higher = "Higher";
const Cr = fr, bx = {};
bx.VISIBLE = "VISIBLE", bx.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", bx.HIDDEN = "HIDDEN";
const Px = bx;
(function(x, o) {
  var t = x();
  function e(s, c, d, g, C) {
    return Qe(c - -259, d);
  }
  function n(s, c, d, g, C) {
    return Qe(C - -675, c);
  }
  function r(s, c, d, g, C) {
    return Qe(d - 180, g);
  }
  function i(s, c, d, g, C) {
    return Qe(d - -434, c);
  }
  for (; ; )
    try {
      var a = parseInt(n(-155, "EXo]", -167, -170, -159)) / 1 * (-parseInt(n(-163, "mK4q", -153, -151, -152)) / 2) + -parseInt(e(262, 265, "x))*", 261, 274)) / 3 + -parseInt(n(-174, "gFzp", -172, -159, -161)) / 4 + parseInt(n(-177, ")!0C", -168, -170, -164)) / 5 * (parseInt(e(254, 244, "vw*0", 236, 236)) / 6) + parseInt(i(72, "jalm", 78, 67, 87)) / 7 + -parseInt(r(688, 691, 688, "ggb@", 690)) / 8 * (parseInt(r(674, 692, 686, "@6!y", 693)) / 9) + parseInt(e(230, 242, "C^P$", 234, 243)) / 10 * (parseInt(n(-163, "jalm", -170, -182, -171)) / 11);
      if (a === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Vx, 5 * 135484 + 1436571 + -1310868);
function Qu({ crosshatch: x }) {
  function o(e, n, r, i, a) {
    return Qe(i - 791, e);
  }
  function t(e, n, r, i, a) {
    return Qe(i - 237, a);
  }
  return x != null && x[t(767, 753, 744, 755, "hom4") + "id"] ? Cr[o("*xse", 1280, 1303, 1291) + "r"] : Cr[t(770, 760, 763, 759, "*l4t")];
}
function Qe(x, o) {
  var t = Vx();
  return Qe = function(e, n) {
    e = e - (-4281 * 2 + 4 * 1680 + 2342 * 1);
    var r = t[e];
    if (Qe.lMtxmZ === void 0) {
      var i = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", h = "", p = 0, A, u, W = 0; u = g.charAt(W++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (var H = 0, N = l.length; H < N; H++)
          h += "%" + ("00" + l.charCodeAt(H).toString(16)).slice(-2);
        return decodeURIComponent(h);
      }, a = function(g, C) {
        var l = [], h = 0, p, A = "";
        g = i(g);
        var u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (var W = 0; W < g.length; W++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      Qe.iZsaYx = a, x = arguments, Qe.lMtxmZ = !0;
    }
    var s = t[37 * 114 + 8944 + -13162], c = e + s, d = x[c];
    return d ? r = d : (Qe.SEDVXr === void 0 && (Qe.SEDVXr = !0), r = Qe.iZsaYx(r, n), x[c] = r), r;
  }, Qe(x, o);
}
function Vx() {
  var x = ["W5ldLCkJoCo+iSkUWPeidCkRWOnK", "W4KTg8kLW5a", "W5vWqmowWOpdQSkxyq", "C8kCsmoVaZe+W4ymxSkVW60q", "FmkVbSkudW", "DX96CCopW4NdQSkRW4dcVLOx", "WPnWWPH6WRi8W4jBavBcMW", "nSk/sXhdS1lcUMm", "WQrptqJdK8kQemkNDq", "WRJcHKtcUfdcPehdOG/dPCoCga", "W5ZdKSkmCuToht82W7JcK8oWW48", "eSoDW7ddNmkQWPRdQZ/cLSk1W43dKu8", "WOJdVx3dU2JcHmoQ", "W53dKSkLC8kkuSoXWO8P", "W4SgbSouWRzDWOnwW7ZcVcpdSbq", "F8o9cCoMWObFW63cLqZdSsBcKW", "WQTis0lcP8oAt8k5vhRcSv7dRW", "x8oltYFdJSkrDmodmmkMa8kWW6m", "WQBcR2qVW7H0ECoAWQRcPZhdKHG", "khOFj8oxCCkGpG", "W6JcMSoEW5pdQZLHW6H3AIW", "kYWvl3a7bW", "WOlcICo0p8oX", "CH91C8opW4NdS8k9W6JcOey+", "dCo9W6xdTCkWACkBnq"];
  return Vx = function() {
    return x;
  }, Vx();
}
(function(x, o) {
  function t(a, s, c, d, g) {
    return Ve(c - 32, a);
  }
  function e(a, s, c, d, g) {
    return Ve(d - 199, s);
  }
  function n(a, s, c, d, g) {
    return Ve(g - -122, c);
  }
  const r = x();
  function i(a, s, c, d, g) {
    return Ve(a - 320, c);
  }
  for (; ; )
    try {
      if (parseInt(e(509, "OyUD", 513, 525, 508)) / 1 * (-parseInt(e(497, "rFuH", 490, 506, 513)) / 2) + -parseInt(e(486, "^t60", 495, 497, 487)) / 3 * (parseInt(i(620, 615, "4S!0", 618, 605)) / 4) + parseInt(n(197, 200, "ZU9V", 180, 186)) / 5 * (parseInt(i(640, 646, "t%ME", 642, 627)) / 6) + -parseInt(t("Kut$", 324, 328, 332, 342)) / 7 + -parseInt(i(633, 621, "KWf9", 633, 643)) / 8 + -parseInt(t("4S!0", 321, 326, 319, 340)) / 9 + parseInt(i(625, 627, "rrf8", 629, 639)) / 10 === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Tx, 9192 * -83 + -343 * 1409 + 1804974);
function Ve(x, o) {
  const t = Tx();
  return Ve = function(e, n) {
    e = e - (5043 + 1 * -8939 + 4190);
    let r = t[e];
    if (Ve.HKbXGp === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, W = 0; u = g.charAt(W++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      Ve.wVubIf = d, x = arguments, Ve.HKbXGp = !0;
    }
    const a = t[6645 + 6645 * -1], s = e + a, c = x[s];
    return c ? r = c : (Ve.azoDvC === void 0 && (Ve.azoDvC = !0), r = Ve.wVubIf(r, n), x[s] = r), r;
  }, Ve(x, o);
}
function Tx() {
  const x = ["W7NdNmo3", "WPVcK3pcNmoH", "vJ5iWOtcPW", "W7/cIdn7WRldN3b6BcFcHfpcPW", "W63cOSk9imkdWRmFW5NcLCofuCoq", "WORcMv9DFxemW6i", "WRZcQmo/vY0", "FctcVNFcK8o+DCo2WO7cVCkyWQNdUq", "WPtdKSo0W7/dTrnoW606DNpdM8oU", "Bv5Vv8k6WPGKWQVcPGBdSSoG", "hSoFWPHXfaBcMMhcSCkcFcTy", "WQLLsqVcQSkxzW", "aJyZW7L4W6NdRCkGWPL7aYSD", "u1FcTW", "WRRcJmkQW7VdUhD8bmkJ", "WQ3dSCo3ESoW", "fCorWPT1ghtdG3lcOCkOrq", "W6xcV33cTCk4", "CYpdSfxdNG", "rvRdMG9L", "WRldVcpdVSo5W4xcNaDAWRarnrix", "W6nVWPecuSk8W6qIW51VWRJdJHFcSG", "W6zRWPn/j8ocWRztW7m", "fgldJCk1W6fvW5C", "W5DSltmzW73cVYG", "W4pcKmocWO7cQ0lcGXldSvf8s8oB", "rfFcLCoeW7m", "DtJdT07cMa", "W6rNWPaiwmomWR1zW7zxWOa", "WRRcKCk7EHHlDsb4gfGbW4u", "wMVcHmoqW6u", "W6ZcOSk8jCkbWR5GW57cImotzCowlG", "WPldLCkuW5VdQW"];
  return Tx = function() {
    return x;
  }, Tx();
}
function Uu({ children: x, licensePath: o, bramble: t, wasmDirectoryPath: e }) {
  function n(h, p, A, u, W) {
    return Ve(h - -135, u);
  }
  function r(h, p, A, u, W) {
    return Ve(A - 965, W);
  }
  const i = {};
  i[r(1271, 1288, 1279, 1272, "&SZZ") + "le"] = t, i[r(1270, 1263, 1268, 1271, "4KgP") + a(454, "4brj", 462, 463) + "h"] = o, i[a(451, "3(NQ", 463, 452) + d("UJqB", -627) + a(470, "LzAY", 470, 472) + "th"] = e;
  function a(h, p, A, u, W) {
    return Ve(u - 153, p);
  }
  const { sunfish: s, crosshatch: c } = _u(i);
  function d(h, p, A, u, W) {
    return Ve(p - -943, h);
  }
  const g = {};
  g[d("VR]0", -642) + r(1281, 1279, 1288, 1298, "O&3t")] = c;
  const C = nt(() => ({ redfin: Qu(g), sunfish: s, crosshatch: c, bramble: t }), [s, c, t]), l = {};
  return l[d("7sLi", -641)] = C, l[n(183, 169, 197, "OsP@") + d("^t60", -626)] = x, O(Kx[n(176, 186, 192, "5ibs") + a(442, "4brj", 446, 450)], l);
}
function Ex() {
  var x = ["FrtdLYaBn8oGWQ7dU8k6dmoYna", "WP8wWRpdKSoOW5mch0jZl1RdSW", "n8kMW6FdKSoAWOJdHmo0Ca", "W4ZcTv9KdcXQW5bOjZGQra", "gwSrW6NcVmkxWQ/dHvtdOSkVW53dHG", "WOXyW4JdMIaXW6VdOHxcKmk7W6yQ", "r8ogWQvxW5NdLxhcPMhcH0ZdPG", "pmkvW5RdNsNcPuJdL3W/W7iH", "wCoCWPL8scr6W6LGW47dVJ4", "rmorsmoHDmoeW5mQWP4", "WRCMW4ZcHb7dTmoOW7RcMN94W7dcLW", "W63dKIbQWQhdNM7dHJi", "r8khn8oEymoeW4e", "WPutWRBdKSoOW5v7fg9OowS", "WOKvWPGyW6nQW4yXWQ3dK8okBq", "o8kxW53cQMRdNx/dI08", "cSoms8oYW7ldJ8kaDs8zWQLR", "W47dL2/dM0BdISomfmoHWR3cTCkAhW", "W6NdLcmoW5lcGX7dUG7dTM3cGqK", "nmo3WP3dUCo9WQpdQW"];
  return Ex = function() {
    return x;
  }, Ex();
}
(function(x, o) {
  function t(a, s, c, d, g) {
    return Ct(c - -100, a);
  }
  function e(a, s, c, d, g) {
    return Ct(c - 208, g);
  }
  var n = x();
  function r(a, s, c, d, g) {
    return Ct(c - 408, g);
  }
  for (; ; )
    try {
      var i = parseInt(t("pH6%", 293, 292, 288, 285)) / 1 + -parseInt(t(")djw", 290, 297, 295, 290)) / 2 * (parseInt(t("kpCa", 280, 290, 294, 295)) / 3) + -parseInt(r(819, 811, 809, 800, "djKU")) / 4 * (-parseInt(e(594, 585, 595, 604, "QmmX")) / 5) + parseInt(r(794, 801, 794, 801, "RXnP")) / 6 + parseInt(e(601, 600, 596, 603, "5ctu")) / 7 + -parseInt(e(597, 601, 597, 598, ")Vs]")) / 8 + -parseInt(e(610, 612, 606, 602, "RXnP")) / 9 * (-parseInt(e(598, 603, 602, 602, ")djw")) / 10);
      if (i === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ex, 99472 * 5 + 118415 * -9 + -84 * -18020);
function Ct(x, o) {
  var t = Ex();
  return Ct = function(e, n) {
    e = e - (21 * 457 + 2445 + -11657);
    var r = t[e];
    if (Ct.AEWQhM === void 0) {
      var i = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", h = "", p = 0, A, u, W = 0; u = g.charAt(W++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (var H = 0, N = l.length; H < N; H++)
          h += "%" + ("00" + l.charCodeAt(H).toString(16)).slice(-2);
        return decodeURIComponent(h);
      }, a = function(g, C) {
        var l = [], h = 0, p, A = "";
        g = i(g);
        var u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (var W = 0; W < g.length; W++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      Ct.JvjesK = a, x = arguments, Ct.AEWQhM = !0;
    }
    var s = t[9516 + 863 * 11 + -19009], c = e + s, d = x[c];
    return d ? r = d : (Ct.DURFze === void 0 && (Ct.DURFze = !0), r = Ct.JvjesK(r, n), x[c] = r), r;
  }, Ct(x, o);
}
function zu({ analytics: x, crosshatch: o }) {
  return o !== void (899 * 1 + -2e3 * -4 + -8899) && !o.isAnalyticsDisabled ? x : void 0;
}
function qu({ analytics: x, appKey: o, redfin: t, crosshatch: e, bramble: n }) {
  const r = {};
  r.analytics = x, r.crosshatch = e;
  const i = zu(r);
  return Be(() => {
    i && i.init(o);
  }, [i, o]), Be(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), i && i.walleye(t, n.getCustomerName()));
  }, [i, n, e, t]), Be(() => {
    if (i)
      return window.addEventListener("beforeunload", i.endSession), () => {
        i.endSession(), window.removeEventListener("beforeunload", i.endSession);
      };
  }, [i]), i;
}
function $u({
  analytics: x,
  appKey: o,
  children: t
}) {
  const { redfin: e, crosshatch: n, bramble: r } = ni(), i = qu({ analytics: x, redfin: e, appKey: o, crosshatch: n, bramble: r }), a = nt(
    () => ({
      analytics: i
    }),
    [i]
  );
  return /* @__PURE__ */ O(Ox.Provider, { value: a, children: t });
}
const el = -13535 + 5 * 2707 + 0.4, tl = 0 + 0.16, nl = 12 * 466 + -9280 + 1 * 3688 + 0.2, xl = -241 * -31 + -605 * -5 + -64 * 164 + 0.05, ol = 670 + -335 * 2, hr = {};
hr.min = -(-7 * -432 + 152 + -3175), hr.max = 1;
const Ba = hr, Ga = 3343 * 1 + -834 + -2509, rl = -1877 + 1877 * 1 + 0.3, il = 0 + 0.2, al = -28 * -138 + 2031 + -1179 * 5 + 0.85, sl = -3127 * -1 + -27 * -55 + -4582, cl = -6403 + 229 * 28 + 0.8100000000000005, Ax = {};
Ax.minDuration = 1e3, Ax.maxDuration = 2500, Ax.minFrames = 10;
const Vo = Ax, mr = {};
mr.max = 100, mr.min = 10;
const ka = mr, gl = -19116 + -228 * -87, dl = 200, ul = 1726 + -1 * 6210 + 2244 * 2, dc = "AES-CBC", uc = "RSA-OAEP", ll = "SHA-256", Il = "image/jpeg", fl = -1041 + 1 * 8509 + 373 * -20, Cl = -133 * -3 + -431 * 13 + 5244, hl = "SAM v1.39.3 for idcards", ml = "dot_embedded_bg.wasm";
let Q;
const Rt = new Array(-5117 + 225 * 27 + -830).fill(void 0);
Rt.push(void 0, null, !0, !1);
function pr(x) {
  return Rt[x];
}
let Cn = Rt.length;
function pl(x) {
  x < -1579 * 2 + 2271 + 1019 * 1 || (Rt[x] = Cn, Cn = x);
}
function lc(x) {
  const o = pr(x);
  return pl(x), o;
}
let Tt = 330 * 27 + -5914 * 1 + -2996, gn = null;
function yx() {
  return (gn === null || gn.byteLength === 106 * 50 + 12 * 77 + -6224) && (gn = new Uint8Array(Q.memory.buffer)), gn;
}
const Wx = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, bl = typeof Wx.encodeInto == "function" ? function(x, o) {
  return Wx.encodeInto(x, o);
} : function(x, o) {
  const t = Wx.encode(x);
  o.set(t);
  const e = {};
  return e.read = x.length, e.written = t.length, e;
};
function Lx(x, o, t) {
  if (t === void 0) {
    const a = Wx.encode(x), s = o(a.length, 61 * 85 + -7475 + -2291 * -1) >>> 130 * 16 + -1 * -1367 + -383 * 9;
    return yx().subarray(s, s + a.length).set(a), Tt = a.length, s;
  }
  let e = x.length, n = o(e, 1 * 1873 + 3079 * -1 + 71 * 17) >>> 2 * 4811 + -4776 + -4846;
  const r = yx();
  let i = -1 * 7093 + -893 * -6 + 1735;
  for (; i < e; i++) {
    const a = x.charCodeAt(i);
    if (a > 6033 * 1 + -3761 + -2145) break;
    r[n + i] = a;
  }
  if (i !== e) {
    i !== 3 * -221 + -9775 + 10438 && (x = x.slice(i)), n = t(n, e, e = i + x.length * (-106 * 69 + -146 * 22 + 10529), 9837 + 1 * 8573 + -18409) >>> 2652 + 8193 * -1 + 5541;
    const a = yx().subarray(n + i, n + e), s = bl(x, a);
    i += s.written, n = t(n, e, i, 9416 + -2 * -2341 + -4699 * 3) >>> 2146 * 1 + -5824 + 3678;
  }
  return Tt = i, n;
}
function Ic(x) {
  return x == null;
}
let dn = null;
function Xt() {
  return (dn === null || dn.byteLength === -244 + 1 * -2356 + 2600) && (dn = new Int32Array(Q.memory.buffer)), dn;
}
const br = {};
br.ignoreBOM = !0, br.fatal = !0;
const fc = typeof TextDecoder < "u" ? new TextDecoder("utf-8", br) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && fc.decode();
function Ar(x, o) {
  return x = x >>> 0, fc.decode(yx().subarray(x, x + o));
}
function yr(x) {
  Cn === Rt.length && Rt.push(Rt.length + (-3 * 2199 + -9572 + 16170));
  const o = Cn;
  return Cn = Rt[o], Rt[o] = x, o;
}
let un = null;
function Cc() {
  return (un === null || un.byteLength === 11 * 463 + 41 * -1 + -6 * 842) && (un = new Uint32Array(Q.memory.buffer)), un;
}
function Ha(x, o) {
  const t = o(x.length * 4, 4) >>> 0, e = Cc();
  for (let n = 0; n < x.length; n++)
    e[t / (-282 * 34 + -7633 + 17225) + n] = yr(x[n]);
  return Tt = x.length, t;
}
function Oa(x, o) {
  x = x >>> -1 * 389 + -9151 * 1 + 530 * 18;
  const t = Cc(), e = t.subarray(x / (4544 * 1 + -1237 * -7 + -67 * 197), x / (43 * 158 + -9992 + 3202) + o), n = [];
  for (let r = -6792 + -497 * 1 + -7289 * -1; r < e.length; r++)
    n.push(lc(e[r]));
  return n;
}
function Al(x, o) {
  const t = Lx(x, Q.__wbindgen_malloc, Q.__wbindgen_realloc), e = Tt, n = Lx(o, Q.__wbindgen_malloc, Q.__wbindgen_realloc), r = Tt, i = Q.is_mobile_supported(t, e, n, r);
  return xi.__wrap(i);
}
const Wr = {};
Wr.register = () => {
}, Wr.unregister = () => {
};
const Ka = typeof FinalizationRegistry > "u" ? Wr : new FinalizationRegistry((x) => Q.__wbg_licensevalidationresult_free(x >>> 1 * -3832 + -8283 + 1 * 12115));
class xi {
  static __wrap(o) {
    o = o >>> 293 * 17 + -7912 + -2931 * -1;
    const t = Object.create(xi.prototype);
    return t.__wbg_ptr = o, Ka.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = 8 * 1069 + 8068 + -16620, Ka.unregister(this), o;
  }
  free() {
    const o = this.__destroy_into_raw();
    Q.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, n) {
    var r = Ic(t) ? 0 : Lx(t, Q.__wbindgen_malloc, Q.__wbindgen_realloc), i = Tt;
    const a = Ha(e, Q.__wbindgen_malloc), s = Tt, c = Ha(n, Q.__wbindgen_malloc), d = Tt, g = Q.licensevalidationresult_new(o, r, i, a, s, c, d);
    return this.__wbg_ptr = g >>> -1 * 2936 + -941 * 3 + 5759, this;
  }
  get is_valid() {
    return Q.licensevalidationresult_is_valid(this.__wbg_ptr) !== -41 * 127 + 5685 + -478;
  }
  get features_json() {
    try {
      const e = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = Xt()[e / (7 * 551 + 7225 + -11078) + (-142 * 16 + -7306 + 1 * 9578)], t = Xt()[e / (-295 * -31 + -7398 + -1743) + (-1194 + 1 * 1195)];
      let n;
      return o !== 0 && (n = Ar(o, t).slice(), Q.__wbindgen_free(o, t * (1491 * 4 + 38 * -173 + 611), -565 * -15 + 4 * 55 + -8694)), n;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(10901 + 1 * -10885);
    }
  }
  get errors() {
    try {
      const n = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_errors(n, this.__wbg_ptr);
      var o = Xt()[n / (4 * 1473 + -2 * 2432 + 2 * -512) + (2698 + -27 * -169 + 137 * -53)], t = Xt()[n / (-2764 + -2768 * -1) + (512 * 3 + -61 * 21 + -254)], e = Oa(o, t).slice();
      return Q.__wbindgen_free(o, t * (2599 * 2 + 2745 * 3 + 13429 * -1), -3605 * 2 + -1219 + 2811 * 3), e;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(6530 + 1 * 8369 + -14883);
    }
  }
  get warnings() {
    try {
      const n = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var o = Xt()[n / 4 + (-5079 * 1 + -4899 + 1 * 9978)], t = Xt()[n / (-1 * 3727 + -1 * -2561 + -45 * -26) + (4 * 1969 + 5375 + -13250)], e = Oa(o, t).slice();
      return Q.__wbindgen_free(o, t * (8791 + 1 * -2652 + -6135), -6 * 667 + 6225 + -2219), e;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(-1 * 5471 + 7956 + -3 * 823);
    }
  }
}
async function yl(x, o) {
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
function Wl() {
  const x = {};
  return x.wbg = {}, x.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return yr(/* @__PURE__ */ new Date());
  }, x.wbg.__wbg_getTime_2bc4375165f02d15 = function(o) {
    return pr(o).getTime();
  }, x.wbg.__wbindgen_object_drop_ref = function(o) {
    lc(o);
  }, x.wbg.__wbindgen_string_get = function(o, t) {
    const e = pr(t), n = typeof e == "string" ? e : void 0;
    var r = Ic(n) ? 7696 + 1067 * -6 + 2 * -647 : Lx(n, Q.__wbindgen_malloc, Q.__wbindgen_realloc), i = Tt;
    Xt()[o / (1 * -4456 + -20 * 223 + -446 * -20) + (-7017 + -7633 * 1 + 14651)] = i, Xt()[o / 4 + (-38 * -153 + -649 * 8 + -622 * 1)] = r;
  }, x.wbg.__wbindgen_string_new = function(o, t) {
    const e = Ar(o, t);
    return yr(e);
  }, x.wbg.__wbindgen_throw = function(o, t) {
    throw new Error(Ar(o, t));
  }, x;
}
function vl(x, o) {
  return Q = x.exports, hc.__wbindgen_wasm_module = o, dn = null, un = null, gn = null, Q;
}
async function hc(x) {
  if (Q !== void 0) return Q;
  typeof x > "u" && (x = new URL("dot_embedded_bg.wasm", import.meta.url));
  const o = Wl();
  (typeof x == "string" || typeof Request == "function" && x instanceof Request || typeof URL == "function" && x instanceof URL) && (x = fetch(x));
  const { instance: t, module: e } = await yl(await x, o);
  return vl(t, e);
}
(function(x, o) {
  const t = x();
  function e(a, s, c, d, g) {
    return Oe(g - -264, d);
  }
  function n(a, s, c, d, g) {
    return Oe(a - -360, s);
  }
  function r(a, s, c, d, g) {
    return Oe(s - 417, g);
  }
  function i(a, s, c, d, g) {
    return Oe(d - -923, a);
  }
  for (; ; )
    try {
      if (parseInt(i(")2[V", -642, -644, -649, -667)) / 1 * (parseInt(e(22, 16, 15, "oYMx", -6)) / 2) + parseInt(i("iTCh", -643, -662, -646, -660)) / 3 * (-parseInt(e(13, 8, -29, "qHvk", -4)) / 4) + parseInt(r(735, 712, 729, 727, "@!bS")) / 5 * (parseInt(i("#a[n", -669, -658, -643, -663)) / 6) + -parseInt(e(35, 12, 21, "%EXT", 29)) / 7 * (-parseInt(n(-57, "WeSK", -69, -74, -66)) / 8) + -parseInt(n(-81, "*qNS", -67, -69, -69)) / 9 * (parseInt(i("0!^3", -641, -651, -657, -649)) / 10) + -parseInt(r(712, 684, 668, 692, "n&7l")) / 11 * (-parseInt(r(698, 716, 720, 706, "y(80")) / 12) + -parseInt(r(685, 668, 658, 637, "($)t")) / 13 === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Nx, -218884 * 2 + -546645 + 1298154);
function Za(x, o, t, e, n) {
  return Oe(x - -355, t);
}
function ox(x, o, t, e, n) {
  return Oe(n - 430, x);
}
function Ra(x, o, t, e, n) {
  return Oe(x - 464, n);
}
function rx(x, o, t, e, n) {
  return Oe(t - -89, n);
}
function Nx() {
  const x = ["W6lcL8oCFeG", "qXPlfmk0", "WRlcR2ddIfe", "WO5NW59JWQ4", "WPGnemoGW6u", "wmojW5tcLfS5WQRcGq", "W6/cO0BdOSkJtCoKDq", "WOTpW4Spgq", "WPuMpZ9m", "u33cIdek", "WOmZjt1R", "WQnVW4Cvla", "emkGWQRcMZfapbu", "WPWsWQ3dNuZdKc0T", "laZdUmoNWPe", "WPCoW5WnmW", "W6/cH3ddSfZdSX8", "W5n/Dgy3WOVcLJ/cQr4xW4K", "bIhdGMnEWP09W67cScX8WOC", "W7pdHSkkiq48u0hcV8oroCoq", "W4XGW4LYCG", "jSkTnSo0W40", "WQZcL8ogFf0", "tZFdPComuq", "aSo5WRNdTJi", "WPRcNdzFlW", "WR1ZW4NcI8oc", "WPWLeSoGW6S", "g8kLW4ddLuiccby0r8kPiW", "phOFcdK", "W7/cT8kPvW", "WRZcOSo7bdi", "W5rKwSodW4XQWPSgWPb5", "W4DvWRxdUvu", "z1FcGXakWPKiWRq", "WPi9W7XsFmojegq", "kGyhkmkuW7FdS1uqlG", "lxGoosG", "nhrDW4JcPGC0A1KqWPnI", "zCkAhSkdWOm", "mepcOmkIW4RcPayZgddcQq", "nxbxW4NdM2y1y0qc", "fmkIW4JdMJzJpY8xvW", "nhWrmJG", "W68uW4ddSHq", "tq5caSk6", "DCkrg8oVlW", "W5tcUsCtiG", "nrW/aCoSkrC2", "WOZdVhHkFJTSW6xdN8kOqqxdOq", "WPaGiCoRW7y", "BKa9oSoa", "WPK4WOuHjmkCCvddO8kjBConWRa", "pmkJnSo/", "D8kFtmooWPO", "W4LNW5v4za", "xWJdR8kjE8ouW5zwcmofpmo/W6q", "W5vXFMS8WONcRqhcGWq7W6a", "W7xdJSo6D1Hnsge", "xLutuCoVW759FL8pWQO", "mamlWQddS2eQ", "WQxcGLhcHvLoWPGLWQuvfCoaW7K"];
  return Nx = function() {
    return x;
  }, Nx();
}
function Oe(x, o) {
  const t = Nx();
  return Oe = function(e, n) {
    e = e - (21 * -243 + 1 * 9719 + -4374);
    let r = t[e];
    if (Oe.hqStBI === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, W = 0; u = g.charAt(W++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      Oe.eUYgII = d, x = arguments, Oe.hqStBI = !0;
    }
    const a = t[2 * -536 + 9724 + 206 * -42], s = e + a, c = x[s];
    return c ? r = c : (Oe.jSRQlW === void 0 && (Oe.jSRQlW = !0), r = Oe.eUYgII(r, n), x[s] = r), r;
  }, Oe(x, o);
}
function To(x, o, t, e, n) {
  return Oe(x - 773, t);
}
var xs;
class Sl {
  constructor() {
    J(this, xs, !1);
  }
  async [(xs = To(1042, 1034, "mc(t") + To(1023, 1036, "bBVy") + rx(222, 203, 198, 174, "IFjd"), rx(192, 175, 202, 218, "q6nZ"))](o = To(1048, 1039, "86Z8")) {
    function t(a, s, c, d, g) {
      return ox(c, s - 112, c - 156, d - 361, s - -1107);
    }
    function e(a, s, c, d, g) {
      return ox(d, s - 163, c - 301, d - 285, a - -675);
    }
    function n(a, s, c, d, g) {
      return Za(d - 158, s - 486, g);
    }
    function r(a, s, c, d, g) {
      return Za(c - -538, s - 122, s);
    }
    function i(a, s, c, d, g) {
      return ox(c, s - 15, c - 49, d - 166, a - 304);
    }
    try {
      const a = o + "/" + ml;
      await hc(a), this[e(31, 51, 9, "JnFc", 56) + e(38, 30, 36, "#a[n", 30) + t(-398, -396, "($)t", -423, -370)] = !0;
    } catch {
      this[i(1018, 1001, "wG*6", 991) + n(44, 61, 55, 66, "iTCh") + t(-453, -435, "Au2O", -456)] = !1, console[t(-413, -425, "PB3M", -406)](e(45, 47, 72, "Au2O") + t(-416, -392, "euPX", -422) + e(4, 12, 15, "Jx4u") + e(17, -14, 41, "oYMx") + i(995, 969, "#a[n", 988) + i(1022, 1042, "Jx4u", 1042) + e(26, 19, 0, "mc(t") + i(1020, 1005, "W6@7", 1044) + n(72, 131, 75, 103, "3biR") + r(-625, "&[Oj", -629) + r(-659, "oYMx", -649) + e(23, 23, 42, "JnFc") + i(1032, 1011, "Au2O", 1010) + r(-657, "zRv2", -647) + n(119, 126, 86, 95, "&KsJ") + e(37, 43, 34, "PB3M") + r(-627, "($)t", -639) + n(67, 66, 24, 46, "f0G[") + "n.");
    }
  }
  [rx(187, 228, 205, 183, ")2[V") + Ra(729, 704, 746, 760, "Jx4u") + rx(169, 179, 156, 175, "cxfx") + "ed"]() {
    function o(e, n, r, i, a) {
      return ox(r, n - 332, r - 283, i - 354, i - -1019);
    }
    function t(e, n, r, i, a) {
      return Ra(e - 328, n - 465, r - 116, i - 298, a);
    }
    return this[t(1045, 1057, 1038, 1062, "3biR") + t(1064, 1092, 1076, 1051, "gltn") + o(-306, -296, "*qNS", -319)];
  }
}
class Eo extends Error {
  constructor() {
    super(...arguments);
    J(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function Lo(x, o, t, e, n) {
  return ce(x - -743, o);
}
function on(x, o, t, e, n) {
  return ce(t - -506, x);
}
(function(x, o) {
  function t(c, d, g, C, l) {
    return ce(g - 408, C);
  }
  function e(c, d, g, C, l) {
    return ce(C - -376, d);
  }
  function n(c, d, g, C, l) {
    return ce(g - -782, C);
  }
  var r = x();
  function i(c, d, g, C, l) {
    return ce(l - 369, g);
  }
  function a(c, d, g, C, l) {
    return ce(c - 215, C);
  }
  for (; ; )
    try {
      var s = -parseInt(n(-266, -223, -245, "YjpX", -268)) / 1 + parseInt(a(742, 716, 723, "srpd", 726)) / 2 + parseInt(n(-281, -241, -254, "UT6)", -237)) / 3 + parseInt(e(153, "1EHb", 130, 157, 158)) / 4 + -parseInt(t(941, 939, 949, "vLul", 924)) / 5 + parseInt(i(882, 931, "h0#Z", 882, 905)) / 6 * (-parseInt(n(-244, -288, -269, "UT6)", -279)) / 7) + -parseInt(a(707, 725, 708, "1EHb", 687)) / 8 * (-parseInt(i(881, 858, "pyw0", 854, 867)) / 9);
      if (s === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Dx, 307122 + 192271 * -1);
function ce(x, o) {
  var t = Dx();
  return ce = function(e, n) {
    e = e - (-6016 + -1 * -4159 + 2345);
    var r = t[e];
    if (ce.sUvWZv === void 0) {
      var i = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", h = "", p = 0, A, u, W = 0; u = g.charAt(W++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (var H = 0, N = l.length; H < N; H++)
          h += "%" + ("00" + l.charCodeAt(H).toString(16)).slice(-2);
        return decodeURIComponent(h);
      }, a = function(g, C) {
        var l = [], h = 0, p, A = "";
        g = i(g);
        var u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (var W = 0; W < g.length; W++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      ce.FPhjoE = a, x = arguments, ce.sUvWZv = !0;
    }
    var s = t[-2 * -2879 + -9490 + -1244 * -3], c = e + s, d = x[c];
    return d ? r = d : (ce.XnoFRZ === void 0 && (ce.XnoFRZ = !0), r = ce.FPhjoE(r, n), x[c] = r), r;
  }, ce(x, o);
}
function Pa(x, o, t, e, n) {
  return ce(o - 462, t);
}
function Dx() {
  var x = ["W69SWOxdVevjW4lcQalcMmobWOC", "WPRcM8koW5vW", "W4WGC8k5ma", "xCkoxSo/W6uRW6jmafK", "WQSdaNJcVq", "FrPsW5RdQJVcQ8oDzCk3", "ySozWO4", "mCo1WRr+W58", "nCkaW7OIWRblW6zouLG", "lCo3WRq", "W5FdI3NdU8kV", "WPDeW5LHsq", "WRSqd2FcQW", "BCoFWQTwWRq", "FSodsMBcMG", "f8kfcLvv", "W6NcQqWirHRcJbnzFCkNW5S", "gsFcKmkBub5BW6VdM2Kt", "wSkix8o/WPrrW4vnk1OyfG", "WPDVW54", "EbLrW5/cPGtcHSo3FmkWcG", "C8oqWR58WRq", "sqBdK8k7BG", "gMjGadlcPtSvW4Xfsba", "vCkikYpcMa", "WRtdVKPCgq", "WOOfW6xcKCoBbfBcVuqL", "WOLXlCoKu8o8W6PDnKb+WPC", "oc3dQZlcNmoYW6NcVX48WQa", "WPldUuiXWRu", "aCk8W6lcVGnTW4NcLCoZWOaimW", "WOxcNcZcUmoSo8oZWOpcQmo8fu8", "rJK2xG", "E8oFWO8VhW", "sGNcRmotyw1Cp3nm", "fmkqbfnu", "W7PWW7ldHSoG", "zCoFWR9ZWR4", "hMzMaw/dHXurW6rt", "WPbpoCo7CuLBWQRcKCk1WRFdLW", "BSosWPGL", "WPZcM8ktW4LX", "ybdcNmogWPm", "W7rozSoVWQe", "dCoosNpdGmkUWROlWRVdT1a", "q8ouWRddT1W", "WOvUfsq+", "arPv", "hSokW6WDuW", "yxlcVG", "WP7cLCokmCk1", "cLZdRa", "fWDjWOPP", "oSo6WPhdIW4", "mCo1WQznW6e", "ASoBWPW1aW"];
  return Dx = function() {
    return x;
  }, Dx();
}
function ix(x, o, t, e, n) {
  return ce(o - -866, e);
}
function B0(x, o, t, e, n) {
  return ce(e - -327, n);
}
var T0;
class Va {
  constructor(o) {
    ge(this, T0);
    function t(a, s, c, d, g) {
      return ce(d - -129, g);
    }
    function e(a, s, c, d, g) {
      return ce(g - -499, d);
    }
    function n(a, s, c, d, g) {
      return ce(g - -971, c);
    }
    this[i(1473, 1473, 1447, "x3c0") + r(-276, -273, "&txD")] = o;
    function r(a, s, c, d, g) {
      return ce(s - -763, c);
    }
    function i(a, s, c, d, g) {
      return ce(a - 962, d);
    }
    try {
      ae(this, T0, o[r(-254, -243, "vLul", -249, -245) + n(-465, -495, "qyfz", -494, -467) + e(25, -18, -25, "6zAG", 2)] && JSON[t(407, 413, 424, 410, "b9w6")](o[n(-507, -470, "*&3C", -486, -482) + t(368, 405, 382, 388, "O@mP") + t(407, 399, 372, 400, "n^0K")]));
    } catch (a) {
      console[e(42, 28, 60, "1EHb", 43)](a);
    }
  }
  get [B0(193, 218, 185, 207, "pyw0") + "id"]() {
    function o(e, n, r, i, a) {
      return B0(e - 242, n - 0, r - 263, r - 536, i);
    }
    function t(e, n, r, i, a) {
      return B0(e - 315, n - 479, r - 273, i - 698, r);
    }
    return this[o(702, 679, 705, "sPqI") + t(919, 931, "%r!S", 906)][o(741, 734, 733, "tzOV") + t(860, 870, "#C$6", 874)];
  }
  get [ix(-343, -360, -381, "6zAG") + "s"]() {
    function o(e, n, r, i, a) {
      return ix(e - 381, r - 786, r - 149, n);
    }
    function t(e, n, r, i, a) {
      return B0(e - 144, n - 266, r - 428, r - 728, a);
    }
    return this[o(408, "hUXB", 417) + o(429, "%r!S", 455)][t(889, 898, 896, 896, "x3c0") + "s"];
  }
  get [B0(221, 202, 244, 216, "RP!)") + on("RP!)", -9, 10)]() {
    function o(n, r, i, a, s) {
      return Lo(r - 727, n);
    }
    function t(n, r, i, a, s) {
      return on(i, r - 100, n - 1287);
    }
    function e(n, r, i, a, s) {
      return on(a, r - 225, i - 1098);
    }
    return this[t(1303, 1305, "CJf9") + t(1313, 1303, "]Vzm")][o("pNPv", 515) + e(1098, 1102, 1111, "O@mP")];
  }
  get [Pa(987, 964, "hB@M") + "b"]() {
    return M(this, T0);
  }
  get [Lo(-236, "@RUK") + Lo(-243, "ijq8") + on("n^0K", 16, 15) + Pa(938, 956, "RP!)")]() {
    var r, i;
    function o(a, s, c, d, g) {
      return on(g, s - 153, c - 1062);
    }
    function t(a, s, c, d, g) {
      return B0(a - 126, s - 409, c - 466, d - 120, s);
    }
    function e(a, s, c, d, g) {
      return ix(a - 417, c - 890, c - 170, s);
    }
    function n(a, s, c, d, g) {
      return ix(a - 434, s - 1164, c - 487, d);
    }
    return !!((i = (r = M(this, T0)) == null ? void 0 : r[n(781, 807, 803, "RP!)") + n(830, 803, 785, "3Y5Z")]) != null && i[n(814, 806, 828, "O@mP") + n(818, 797, 800, "0u7w") + o(1046, 1035, 1047, 1057, "pNPv") + e(512, "YjpX", 536) + n(821, 823, 812, "*&3C") + n(809, 821, 805, "pNPv") + t(299, "CJf9", 300, 307) + "d"]);
  }
}
T0 = new WeakMap();
(function(x, o) {
  function t(a, s, c, d, g) {
    return we(s - -115, a);
  }
  const e = x();
  function n(a, s, c, d, g) {
    return we(c - -408, g);
  }
  function r(a, s, c, d, g) {
    return we(s - -949, g);
  }
  function i(a, s, c, d, g) {
    return we(c - 857, d);
  }
  for (; ; )
    try {
      if (-parseInt(r(-587, -611, -606, -637, "pjAR")) / 1 + -parseInt(n(-58, -101, -118, -184, "*SBI")) / 2 + -parseInt(n(-141, -233, -235, -325, "eiL%")) / 3 + -parseInt(n(-124, -138, -152, -185, "ubgy")) / 4 * (parseInt(n(-138, -64, -156, -217, "@jO*")) / 5) + parseInt(t("d!%9", 220, 118, 197, 296)) / 6 + parseInt(i(1059, 1131, 1037, "1Pug", 976)) / 7 + -parseInt(r(-864, -751, -752, -856, "*SBI")) / 8 * (-parseInt(t("i1Tq", 178, 251, 189, 213)) / 9) === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Fx, 247853 + -593741 * -1 + -221732);
function Fx() {
  const x = ["nmoGW5vn", "W5CXWQeRW4G", "yCogW5HBoW", "bJlcJaX4", "W7rtW47dRGm", "W5mXWRNdUCkq", "EmkuW5LlWQu", "W7VcLSk5W7jG", "hmkUW786bq", "WP4CWRNcQCoAW5HuWQ/dIG", "W6lcTsVcPSoM", "vvJcMCkAuCknyKu", "W4lcTsRcPCkV", "uHmKyIhdSmossqGsWQ4", "W67cISkPW6VdIW", "WOXKzSkccG", "pSkPiXi", "A8k2m2NdLa", "du5OC3O", "W697leis", "W7pcPJZcRq", "WPa3smkWW6K", "WRfrlxSJ", "DZWdtmkF", "W6ulWQtcImke", "y8opW64uyW", "WRHMrmksoW", "WPKQxCkAW6K", "irmDWRLp", "W4VcTtddQ8kC", "WQjnWPTowW", "WOpdGLS", "WOVcUdOtra", "vCozW79SAa", "y8o6W7mgxa", "DMpdPSoGW78", "sSkkmu0", "cafojSku", "acNcNSk1tG", "W7NcTSk6W6NdNa", "ySotW4iwBa", "W55rFuXz", "aXpcLCoYvG", "WR8PwW9B", "j1ycWQva", "nSkGAmkgW7lcGSoiW5eXxCkpaG", "W6xcGmkOWOxdUa", "B8k8WOOqWQaBW44Ud2nXWQyP", "CZqnsSkt", "WQJcQg7cU8kr", "WPTXW6BcUSojWPuHW78EWPRcHZi", "W5OkW6e4Bq", "WP0QsCkRW7u", "W4pcP8kHWRddVW", "mmoVW5Pm", "W70lWQlcMmkj", "xmkNWOa", "uCk1WObOWQ0", "q8o8W59GbW", "W4naW6/cVSoE", "AColl0RcHq", "cCkcWQm2iSoYr8ouzCo/WOS+", "W4XgW6lcR8oc", "W4dcUt7dISkx", "W5a3WRNdOSkC", "hr1snCoD", "WRPcnMS4", "WQz2auWN", "iqNcGSk9ta", "W7mxWO/dTSkX", "WPKSwCk6W7u", "W6NcISk4W4hdTa", "e8oHWPnMW5y", "W5JdQI1XW5a", "W4FdMKuXwW", "WQCKwmk0W60", "WR9ck2y", "frmAWQ9l", "W5ldSfKLEW", "hSkUW693", "WRNcRNdcSCkh", "W6WIW6Oisq", "zmo+W7zQnG", "DNpdU8oNW7u", "W4DZW6lcVCoH", "WODkWO9a", "w8kemwBcHW", "h8kLW7G8tq", "W4zkW6NcTCod", "W6VcISkVWOddQq", "W5BdP0ivFq", "nGqCWQnr", "dZdcTujUvSogwXa/WQlcS8k1", "CuPIWQWe", "WOdcVZ0Fbq", "W5ZcLbNdOSkCW7bbbXm4iCoEqa", "WQhdLfRcGmoi", "vCo6W6zbpa", "W4/dISkKySoc", "W6TEW4xcJ8ov", "DSo6W6b9nG", "wJJdU0VdUa", "W7ayWQtcLmkt", "CmotW7LNDq", "W7ddGtPfW5y", "W7D9mW", "W5jmyq", "W4rWWQmTW5G", "hr8AWQvc", "lu48f1W", "jZX3W4a", "Fmo+W7b6oW", "W7BdJmkL", "x8kzW6y", "qSo7o8owWQW", "W53dMCkKy8oz", "ECowW6PWjW", "umoqW5a5hW", "ASodW6K", "z1PCWQTx", "WRL4WQS/tSkOpIHv", "W6qIW7K", "W6lcI8kmW6xdIG", "ASonW7G", "qGZcMCk/xW", "W7nzWQCmW7m", "WOlcUMaSWOWMWOZdO8kzWPtcHxOm", "sCoVW5X6dG", "afnZiga", "W6FcKCk/", "WOTDWRz5mqFcILKaW5aNE8oV", "FdanBCku", "nmk1kG7dHG", "W7vml2DK", "WRa3smkWW6K", "W7BcPJBcU8o8", "omoGW4bhWRK", "W5abW6y/", "WOhdJeVcTCof", "WQq5wZfr", "WOddH03cN8of", "ddtcMGDY", "W5eoW7SOya", "W7L+WPGnW6K", "AmofW7mtAa", "W7NcL8kP", "WQ5wDmkGgW", "W5jcy0Pr", "WOeMtW4", "W5ZdO184", "WOzfWP1mrq", "W7v1iu86", "WOzOzmkteq", "CIddK3VdKq", "fXKAWOLo", "Emo2W6D8pq", "fbmAWObk", "pmoJW5y", "gINcHGDI", "WOCPW7zWWOuOzN1ycd0a", "qCkFW7DhWQu", "WO5UC8kZeG", "cafipSkj", "W4xcL8o7W4ddTG", "ba7cMCkO", "aWFcGW", "W55XhLKkWPpcTmoQWQFcVCk/uHq", "W59mE2zg", "ughdTbeZ", "umkUmeVdQW", "xfjmWQmz", "xCkeW71mWR8", "W6CpWQxcPmkl", "t8kpW5bTWRW", "W7qjWQi", "hmoeWQWtW7NcPSk/AbLfDG", "wSkHWOD/WQO", "W4BdO0q4yq", "qmk/W6HWma", "W457m0zw", "W63cL8kPW4hdMa", "vmkyfelcLq", "DZOEBmkj", "WPVdTdzNW5K", "zCk2W5PKW7jiWO4M", "WPmQt8kXW78", "x2xdTdy0", "AHRdSvVdQG", "W4WBW5Kzqa", "W53dRdK", "WOeRta9b", "W5CaW7TRyq", "c0bOmhS", "W78SW6WJtq", "mSkPnHJcLq", "fmkIW78Wda", "pSo8W5XrW6O", "aqNcK8k5va", "WO9ZDCkzdq", "AYCqr8kp", "W7SjW6dcSSot", "WOCQsa", "EmoWW6m", "W5JdRdbrW4y", "WOOTtqvx", "vbePyYBcKmkexHaVWQJcOmkp", "A8kMiuddRa", "W5zgFq", "WOFcUIxdU8kw", "W7v1i0Oc", "WPy3vCkSW6G", "W5Hryfby", "W6vnW4VdKXi", "FZaDbW", "W6xcOLO/AW", "WOlcVYOtcG", "WRrmme0X", "W6uOW6W", "eSkQW786bq", "W6hcISk+WQtdVa", "WODbd2e+", "l37cGY3cQIztW5BcRSk/aCkvtW", "s8kzW6fmWQ8", "WOdcStO", "W6FdOmkwWQxdOa", "W5nLWQOiW5u", "W5tcSYq", "W6RcJmk+W4JdKa", "ermkWQHg"];
  return Fx = function() {
    return x;
  }, Fx();
}
function at(x, o, t, e, n) {
  return we(e - 291, x);
}
function Ot(x, o, t, e, n) {
  return we(x - 192, n);
}
function we(x, o) {
  const t = Fx();
  return we = function(e, n) {
    e = e - 128;
    let r = t[e];
    if (we.XcdJxR === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, W = 0; u = g.charAt(W++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      we.mzYGHP = d, x = arguments, we.XcdJxR = !0;
    }
    const a = t[-3287 * -2 + 7 * -1065 + 881 * 1], s = e + a, c = x[s];
    return c ? r = c : (we.qBuEkV === void 0 && (we.qBuEkV = !0), r = we.mzYGHP(r, n), x[s] = r), r;
  }, we(x, o);
}
function Ge(x, o, t, e, n) {
  return we(n - 875, t);
}
function Dt(x, o, t, e, n) {
  return we(e - 254, o);
}
function et(x, o, t, e, n) {
  return we(t - 816, e);
}
var os, rs;
class wl {
  constructor(o) {
    J(this, rs);
    J(this, os);
    function t(e, n, r, i, a) {
      return we(i - 40, a);
    }
    this[t(217, 144, 182, 221, "QnYe") + t(432, 272, 300, 329, "fH(u") + "d"] = o;
  }
  async [(rs = et(879, 943, 990, "kg22") + "se", os = et(1098, 1077, 1117, "]IuZ") + at("*2zP", 497, 502, 600), et(1081, 953, 967, "k1s$"))](o = Ot(389, 482, 314, 415, "luGE"), t = Ge(1060, 1057, "aVrB", 1110, 1013) + Dt(648, "aVrB", 555, 539) + "ic") {
    function e(s, c, d, g, C) {
      return Ot(s - 529, c - 449, d - 379, g - 135, C);
    }
    function n(s, c, d, g, C) {
      return et(s - 279, c - 18, d - -176, C);
    }
    await Promise[e(968, 963, 900, 989, "DMEj") + e(1013, 1033, 1034, 1082, "xxo$")]([this[n(762, 807, 815, 823, ")tM0") + i(-12, 73, 34, 113, "TceG") + "d"][n(724, 797, 818, 766, "aVrB")](o), this[a(1221, 1100, 1163, "ikxc") + r(-747, "1Pug", -718, -736) + "e"](t)]);
    function r(s, c, d, g, C) {
      return Ge(s - 25, c - 285, c, g - 115, g - -1815);
    }
    function i(s, c, d, g, C) {
      return at(C, c - 356, d - 176, d - -600);
    }
    function a(s, c, d, g, C) {
      return Ot(d - 804, c - 235, d - 346, g - 224, g);
    }
    this[a(1305, 1305, 1346, "eiL%") + r(-625, "eiL%", -619, -701) + a(1353, 1218, 1290, "k1s$")]();
  }
  async [Dt(530, "Ugi6", 649, 574) + et(1194, 1089, 1162, "qbB3") + "se"](o) {
    function t(a, s, c, d, g) {
      return Ge(a - 416, s - 339, c, d - 143, d - -259);
    }
    function e(a, s, c, d, g) {
      return at(c, s - 357, c - 445, g - -796);
    }
    function n(a, s, c, d, g) {
      return et(a - 255, s - 500, a - -1794, s);
    }
    function r(a, s, c, d, g) {
      return et(a - 446, s - 444, g - -1784, d);
    }
    function i(a, s, c, d, g) {
      return et(a - 488, s - 30, c - -1810, g);
    }
    try {
      if (t(1036, 977, "x$jw", 934, 882) !== i(-784, -710, -807, -890, "kg22")) {
        const a = await fetch(o);
        if (!a.ok) {
          if (t(718, 737, "ikxc", 817, 868) === t(851, 982, "*2zP", 926, 857)) throw new Error(r(-825, -871, -912, "TceG", -837) + t(822, 913, "qbB3", 892, 960) + n(-734, "eiL%", -840, -735, -727) + n(-756, "mhu2", -711, -830, -681) + "d.");
          if (!this[r(-706, -843, -930, "pjAR", -816) + "se"]) throw new _0x5be370(e(-205, -125, "ubgy", -122, -153) + e(-245, -275, "Bqt0", -223, -202) + r(-778, -900, -733, "*SBI", -818) + n(-742, "kg22", -796, -739, -737) + ".");
          if (!this[r(-687, -657, -560, "FYCZ", -644) + i(-889, -857, -776, -835, "1Pug") + "d"][r(-834, -747, -915, "7lih", -832) + n(-848, "TceG", -904, -904, -910) + t(826, 718, "]IuZ", 757, 802) + "ed"]()) throw new _0x54a602(i(-631, -799, -739, -670, "6x1r") + i(-781, -738, -680, -764, "fH(u") + r(-707, -534, -553, "Ugi6", -617) + t(779, 812, "6h9K", 882, 929) + ".");
          this[e(-358, -270, "*SBI", -236, -295) + t(848, 925, "6h9K", 907, 992)] = new _0x118bf2(_0x2ac963(this[i(-586, -792, -681, -746, "x$jw") + "se"], this[t(707, 812, "6h9K", 761, 788) + t(829, 1027, "*SBI", 913, 826)]())), this[i(-878, -759, -781, -805, "6h9K") + n(-644, "Ugi6", -585, -712, -719) + "s"](this[r(-682, -667, -758, "]IuZ", -667) + r(-782, -686, -827, "ubgy", -762)][r(-783, -613, -728, "x$jw", -704) + "s"]), this[e(-425, -264, "pPu!", -413, -329) + i(-755, -817, -708, -676, "1Pug") + t(816, 844, "@ahx", 853, 749)](this[r(-689, -826, -779, "QnYe", -743) + t(881, 880, "d!%9", 798, 823)][i(-667, -708, -741, -808, "6x1r") + i(-713, -833, -815, -841, "aVrB")]);
        }
        this[r(-789, -828, -821, ")tM0", -802) + "se"] = await a[r(-570, -698, -627, "YJPi", -615)]();
      } else return _0x25ea85[e(-315, -232, "tyVC", -334, -282) + n(-629, "QnYe", -580, -665, -519)][n(-683, "x$jw", -691, -633, -718) + n(-841, "3J1o", -757, -755, -782)];
    } catch (a) {
      if (e(-359, -364, "*2zP", -377, -271) === i(-827, -649, -745, -797, "kg22")) this[e(-329, -230, "@ahx", -212, -276) + "se"] = void (-2 * -2017 + -8610 + -44 * -104), console[n(-721, "7lih")](a);
      else throw new _0x5656bd(n(-831, "QnYe") + t(919, 855, "TceG", 808) + r(-604, -688, -658, "@ahx", -693) + i(-896, -824, -839, -744, "^hZu") + ".");
    }
  }
  async [at("tyVC", 374, 468, 456) + Dt(583, "@jO*", 491, 585) + "e"](o) {
    function t(a, s, c, d, g) {
      return Ge(a - 399, s - 262, a, d - 63, s - -171);
    }
    function e(a, s, c, d, g) {
      return Ge(a - 219, s - 149, d, d - 472, g - -1752);
    }
    function n(a, s, c, d, g) {
      return et(a - 307, s - 291, s - -1312, g);
    }
    this[i(546, 515, 467, "x$jw") + i(326, 485, 433, "gyjb")] = void (-34 * -9 + -7 * -127 + -1195);
    function r(a, s, c, d, g) {
      return at(s, s - 446, c - 181, g - 115);
    }
    if (!o)
      if (n(-229, -339, -266, -389, "eiL%") === i(500, 395, 403, ")tM0")) {
        _0x302d2d[i(427, 579, 486, "*SBI")](e(-718, -727, -652, "7lih", -700) + r(621, "Ugi6", 610, 801, 693) + i(492, 622, 551, "pPu!") + e(-512, -525, -665, "pPu!", -597) + i(466, 545, 565, "BRf&")), this[t("aVrB", 915, 1009, 967) + "se"] = void (-4 * -1966 + 8106 + -15970);
        return;
      } else {
        console[n(-325, -334, -398, -410, "1Pug")](r(549, "qd@a", 580, 605, 644) + t("@jO*", 918, 1014, 851) + t("BRf&", 1034, 1054, 966) + e(-532, -629, -688, "i1Tq", -629) + i(427, 536, 470, "6h9K")), this[i(454, 331, 412, "TceG") + "se"] = void (8904 + -3 * -1487 + -13365);
        return;
      }
    function i(a, s, c, d, g) {
      return at(d, s - 262, c - 419, c - -48);
    }
    await this[t("BRf&", 955, 1020, 892) + e(-700, -751, -806, "Vgxj", -749) + "se"](o);
  }
  [Ge(1025, 1033, "^hZu", 1064, 1047) + et(926, 976, 964, "x$jw") + "s"](o) {
    function t(e, n, r, i, a) {
      return Ge(e - 124, n - 155, r, i - 218, e - -941);
    }
    o[t(263, 313, "Bqt0", 163) + "ch"]((e) => console[t(213, 278, "Bqt0", 114)](e));
  }
  [at("kg22", 575, 511, 476) + Ge(1166, 1147, "z*xK", 1055, 1058) + Dt(622, "pjAR", 602, 528)](o) {
    function t(e, n, r, i, a) {
      return at(e, n - 58, r - 89, a - 608);
    }
    o[t("*2zP", 1135, 1210, 1113, 1129) + "ch"]((e) => console[t("F*lG", 1157, 1183, 1113, 1227)](e));
  }
  [Ot(498, 597, 481, 421, "mhu2") + et(1070, 1126, 1135, "*2zP")]() {
    function o(n, r, i, a, s) {
      return Ot(s - 121, r - 189, i - 235, a - 453, a);
    }
    function t(n, r, i, a, s) {
      return at(a, r - 149, i - 17, n - -394);
    }
    function e(n, r, i, a, s) {
      return Ge(n - 238, r - 384, r, a - 334, s - -874);
    }
    return window[t(229, 285, 259, "fH(u") + t(100, 27, 108, "luGE")][o(626, 604, 553, "3J1o", 581) + e(186, "*SBI", 273, 188, 172)];
  }
  [Ge(1093, 1180, "tyVC", 1127, 1137) + Ge(1217, 1035, "7lih", 1182, 1116) + Dt(573, "u!5z", 518, 532)]() {
    var i;
    function o(a, s, c, d, g) {
      return Dt(a - 157, s, c - 190, a - 613);
    }
    function t(a, s, c, d, g) {
      return Ot(s - -844, s - 317, c - 125, d - 33, d);
    }
    function e(a, s, c, d, g) {
      return Ge(a - 235, s - 317, g, d - 470, a - -263);
    }
    function n(a, s, c, d, g) {
      return Ge(a - 427, s - 462, g, d - 328, c - -1440);
    }
    function r(a, s, c, d, g) {
      return at(c, s - 10, c - 363, d - -283);
    }
    try {
      if (e(765, 747, 780, 798, "1Pug") === e(951, 849, 973, 923, "pjAR")) {
        if (!this[e(796, 794, 811, 763, "9k4w") + "se"])
          if (t(-371, -316, -254, "9k4w", -344) === t(-388, -340, -387, "i1Tq", -385)) _0x3254d0[e(828, 883, 841, 819, "TceG")]();
          else throw new Eo(e(927, 848, 918, 997, "*SBI") + o(1095, "CMfx", 1125, 1163, 1081) + o(1075, "lk3P", 1039, 1036, 1057) + t(-462, -453, -559, "x$jw", -470) + ".");
        if (!this[n(-399, -313, -397, -377, "Ugi6") + n(-319, -346, -323, -363, "Ugi6") + "d"][r(304, 191, "Bqt0", 203, 212) + r(331, 198, "aVrB", 289, 339) + e(773, 764, 803, 823, "QnYe") + "ed"]()) {
          if (n(-419, -518, -411, -377, "pjAR") !== e(881, 920, 917, 829, ")tM0")) throw new Eo(e(745, 741, 663, 793, "9k4w") + o(1128, "ubgy", 1210, 1017, 1056) + t(-352, -443, -439, "BRf&", -532) + o(1139, "mhu2", 1087, 1174, 1049) + ".");
          _0x912c44[o(1061, "7lih", 1093, 989, 1167) + "ch"]((a) => _0x5bd910[e(871, 911, 862, 760, "lk3P")](a));
        }
        this[n(-316, -479, -423, -363, "ubgy") + n(-425, -305, -383, -391, "d!%9")] = new Va(Al(this[n(-483, -418, -381, -287, "9k4w") + "se"], this[e(812, 802, 814, 817, "d!%9") + n(-367, -322, -402, -489, "CMfx")]())), this[t(-382, -480, -511, "^hZu", -432) + n(-326, -333, -436, -438, "dtEK") + "s"](this[r(145, 187, "lk3P", 154, 133) + e(776, 849, 676, 871, "F*lG")][e(957, 1057, 979, 884, "Se2c") + "s"]), this[r(141, 235, "DMEj", 234, 257) + t(-364, -311, -344, "dtEK", -405) + e(911, 909, 962, 800, "gyjb")](this[n(-397, -316, -416, -509, "6x1r") + e(768, 825, 780, 830, "k1s$")][o(1058, "CMfx", 1105, 978, 1149) + e(967, 935, 881, 904, "dtEK")]);
      } else return this[e(836, 899, 913, 937, "x$jw") + o(1099, "BRf&", 1181, 1107, 1063)];
    } catch (a) {
      if (t(-469, -450, -363, "k1s$") !== r(276, 329, "]IuZ", 348)) {
        const s = _0x415e51[e(879, 869, 942, 812, "Se2c")](this[e(914, 959, 1028, 894, "@jO*") + "se"]);
        return (i = s == null ? void 0 : s[e(862, 770, 892, 927, "tzPJ") + r(106, 171, "Se2c", 196)]) == null ? void 0 : i[r(262, 396, "u!5z", 334) + r(177, 124, "QnYe", 229)];
      } else {
        if (a instanceof Eo) n(-359, -234, -292, -333, "F*lG") !== t(-359, -341, -307, "aVrB") ? _0x22a673[e(808, 742, 770, 860, "6h9K") + o(1223, "kg22", 1292)](_0x323b3f) : a[r(245, 81, "FYCZ", 143)]();
        else if (a instanceof Error)
          if (n(-193, -235, -248, -233, "CMfx") !== t(-393, -392, -385, "z*xK")) console[o(1190, "xxo$", 1204)](a);
          else return;
        const s = {};
        s[n(-395, -191, -282, -175, "3J1o") + n(-322, -443, -422, -469, "7lih")] = !1, s[t(-497, -440, -433, ")tM0") + "s"] = [], s[n(-332, -432, -358, -319, "FYCZ") + r(443, 264, "tyVC", 356)] = [], s[e(870, 791, 890, 773, ")tM0") + n(-360, -294, -379, -378, "Se2c") + e(852, 760, 874, 810, "mhu2")] = void (-1 * -2039 + -6648 + -4609 * -1), s[e(875, 897, 948, 894, "6x1r")] = function() {
        }, this[n(-163, -298, -244, -216, "CMfx") + t(-250, -298, -377, "TceG")] = new Va(s);
      }
    }
  }
  [et(906, 963, 986, "Ugi6") + Ge(949, 993, "3J1o", 922, 1033) + Ot(463, 426, 418, 481, "Ugi6") + "t"]() {
    function o(e, n, r, i, a) {
      return Dt(e - 433, e, r - 8, r - -729);
    }
    function t(e, n, r, i, a) {
      return Ge(e - 68, n - 162, i, i - 363, e - -1221);
    }
    return this[t(-81, -117, -10, "*2zP") + o("Se2c", -276, -177)];
  }
  [at("CMfx", 673, 684, 624) + Ot(499, 434, 436, 557, "i1Tq") + at("7lih", 582, 524, 573)]() {
    var i;
    function o(a, s, c, d, g) {
      return Ot(d - -558, s - 494, c - 103, d - 452, s);
    }
    function t(a, s, c, d, g) {
      return et(a - 185, s - 268, d - -53, c);
    }
    function e(a, s, c, d, g) {
      return Ge(a - 95, s - 275, g, d - 419, c - -352);
    }
    if (!this[o(-198, "z*xK", -225, -146) + "se"]) {
      if (o(-36, "3J1o", -118, -89) === e(739, 762, 850, 964, "@jO*")) return;
      _0x3e28c8[r("fH(u", 979, 965, 1178, 1077) + "ch"]((a) => _0x39401f[o(-41, "Bqt0", -8, -87)](a));
    }
    function n(a, s, c, d, g) {
      return Ge(a - 300, s - 353, a, d - 432, g - -63);
    }
    function r(a, s, c, d, g) {
      return Dt(a - 268, a, c - 81, g - 590);
    }
    try {
      if (o(-325, "eiL%", -316, -227, -164) === o(-136, "]IuZ", -158, -121, -135)) {
        const a = JSON[o(-16, "TceG", -86, -41, 3)](this[o(-47, "^hZu", -179, -120, -97) + "se"]);
        return (i = a == null ? void 0 : a[e(893, 797, 828, 918, "@jO*") + t(945, 790, "3J1o", 895, 802)]) == null ? void 0 : i[r("gyjb", 1110, 1088, 1225, 1144) + t(1052, 931, "FYCZ", 994, 971)];
      } else {
        _0x2bd1e5 instanceof _0x5df7ee && _0x35e167[n("luGE", 966, 1056, 985, 1029) + n("x$jw", 987, 952, 974, 1027)](_0x1d7e77);
        return;
      }
    } catch (a) {
      if (o(-178, "fH(u", -54, -70) !== n("luGE", 1093, 1250, 1082, 1159)) _0x131865[o(-124, "QnYe", -60, -82)](_0x209128);
      else {
        if (a instanceof Error) {
          if (n("@jO*", 1155, 1262, 1165, 1154) !== n("ikxc", 1255, 1161, 1086, 1156)) throw new _0x4f966b(e(608, 650, 716, 734, "tyVC") + r("k1s$", 1112, 1130, 1103, 1049) + r("@ahx", 1287, 1092, 1109, 1181) + e(801, 902, 839, 891, "luGE") + ".");
          xe[n("x$jw", 1156, 1092, 1020, 1082) + e(597, 613, 682, 591, "7lih")](a);
        }
        return;
      }
    }
  }
}
const eo = class eo extends wl {
  static getInstance() {
    if (!this._instance) {
      const o = new Sl();
      this._instance = new eo(o);
    }
    return this._instance;
  }
};
J(eo, "_instance");
let vr = eo;
function Bl(x, o) {
  if (!x) return o;
  const { detectionRecord: t, hashedDetectedImages: e } = x;
  o.hashedDetectedImages && (e == null || e.push(...o.hashedDetectedImages)), o.detectionRecord && (t == null || t.push(...o.detectionRecord));
  const n = { ...x };
  return n.hashedDetectedImages = e, n.detectionRecord = t, n;
}
const mc = Tn(null), pc = () => {
  const x = C0(mc);
  if (!x)
    throw new Error("Missing provider for CameraOptionsContext");
  return x;
}, Gl = (x) => {
  var s, c, d;
  const { cameraFacing: o, licensePath: t, onError: e, onPhotoTaken: n, sessionToken: r, thresholds: i, wasmDirectoryPath: a } = x;
  return {
    onPhotoTaken: n,
    onError: e,
    cameraFacing: o ?? "user",
    wasmDirectoryPath: a,
    licensePath: t,
    sessionToken: r,
    thresholds: {
      faceConfidence: (i == null ? void 0 : i.faceConfidence) ?? el,
      minFaceSizeRatio: (i == null ? void 0 : i.minFaceSizeRatio) ?? tl,
      maxFaceSizeRatio: (i == null ? void 0 : i.maxFaceSizeRatio) ?? nl,
      sharpnessThreshold: (i == null ? void 0 : i.sharpnessThreshold) ?? rl,
      brightnessLowThreshold: (i == null ? void 0 : i.brightnessLowThreshold) ?? il,
      brightnessHighThreshold: (i == null ? void 0 : i.brightnessHighThreshold) ?? al,
      outOfBoundsThreshold: (i == null ? void 0 : i.outOfBoundsThreshold) ?? xl,
      devicePitchAngleThreshold: (i == null ? void 0 : i.devicePitchAngleThreshold) ?? sl,
      mouth: {
        confidence: ((s = i == null ? void 0 : i.mouth) == null ? void 0 : s.confidence) ?? ol,
        status: {
          min: ((c = i == null ? void 0 : i.mouth) == null ? void 0 : c.status.min) ?? Ba.min,
          max: ((d = i == null ? void 0 : i.mouth) == null ? void 0 : d.status.max) ?? Ba.max
        }
      },
      leftEye: (i == null ? void 0 : i.leftEye) ?? {
        confidence: Ga
      },
      rightEye: (i == null ? void 0 : i.rightEye) ?? {
        confidence: Ga
      }
    }
  };
}, kl = ({ cameraOptions: x, children: o }) => {
  const t = nt(() => ({
    faceCameraOptions: Gl(x)
  }), [x]);
  return /* @__PURE__ */ O(mc.Provider, { value: t, children: o });
}, Hl = 8306 + -2281 * -4 + 1162 * -15 + 0.75, Ol = 2, Kl = 8053 * 1 + -756 * -11 + 13 * -1213, Zl = 77 * -12 + -5541 + 6465, bc = (x, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(x, t));
}, to = class to {
  constructor() {
    J(this, "lastDetails", {});
    J(this, "delayedTime", -3152 * -2 + -2 * -4901 + -16106);
  }
  static getInstance() {
    return !this._instance && (this._instance = new to()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -9450 + -240 * 2 + 6 * 1655;
  }
  isDetailChanged(o, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(o, t) {
    this.isDetailChanged(o, t) && bc(o, t);
  }
  dispatchDelayedCustomEventOnChange(o, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(o, t), this.delayedTime = n);
  }
};
J(to, "_instance");
let bn = to;
const Ln = bn.getInstance(), Ta = (x, o, t = Kl) => {
  const e = {};
  e.instructionCode = o;
  const n = e;
  Ln.dispatchDelayedCustomEventOnChange(x, n, t);
}, Rl = (x, o) => {
  Ln.dispatchCustomEventOnChange(x, o);
}, Pl = (x, o) => {
  const t = {};
  t.size = o;
  const e = t;
  Ln.dispatchCustomEventOnChange(x, e);
}, Vl = (x, o, t) => {
  const e = o.confidence < t ? void 0 : o, n = {};
  n.detectedObject = e;
  const r = n;
  Ln.dispatchCustomEventOnChange(x, r);
}, Tl = (x, o, t) => {
  const e = {};
  e.image = t, e.data = {}, e.data.detection = o, e.data.imageResolution = {}, e.data.imageResolution.width = t.width, e.data.imageResolution.height = t.height;
  const n = e;
  Ln.dispatchCustomEventOnChange(x, n);
}, Sr = (x, o) => {
  bc(x, o);
}, El = () => "prod".toLowerCase() === "dev", Ll = (x, o, t = Il) => new Promise((e) => {
  x.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, o);
}), Nl = async (x) => Ll(x, 6079 + -31 * -37 + -4 * 1784), Dl = (x, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(x, o.shiftX, o.shiftY, o.width, o.height, 1705 + 1 * -3209 + -16 * -94, -421 * -11 + 9954 + 5 * -2917, t.width, t.height), t;
}, Fl = (x) => {
  const o = x.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(-63 * -131 + 8890 + -17143, -7992 + -80 * 9 + 8712, x.width, x.height);
  return t;
}, Ac = (x, o, t, e) => {
  const n = x.getContext("2d");
  n && (n.beginPath(), e ? (n.fillStyle = t, n.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (n.strokeStyle = t, n.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), n.stroke());
}, No = (x, o, t) => {
  const { height: e, shiftX: n, shiftY: r, width: i } = o, a = {};
  a.x = n, a.y = r;
  const s = {};
  s.topLeft = a, s.width = i, s.height = e, s.color = t, Ac(x, s, t);
}, hn = (x, o, t, e = -7458 + -107 * 37 + 233 * 49) => {
  const n = x.getContext("2d");
  n && (n.fillStyle = t, n.fillRect(o.x + e, o.y + e, -250 + 7 * -1335 + 9602, 4 * -1882 + -1702 * 1 + 9237), n.beginPath());
}, Yl = (x, o) => {
  if (El()) {
    const t = {};
    t.candidateSelectionImages = o;
    const e = t;
    bn.getInstance().dispatchCustomEventOnChange(x, e);
  }
}, Xl = (x, o) => {
  const { cameraResolution: t, shouldMirror: e } = o;
  Be(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, Rl(x, n);
  }, [t, e, x]);
}, yc = (x) => x.length < -4008 + 1 * -8069 + 12078 ? -4486 * -1 + -1075 + -3411 : x.reduce((t, e) => t + e, -6448 + -3 * -1713 + 77 * 17) / x.length, Nn = (x) => Number.parseFloat(x.toFixed(3)), Ml = (x) => {
  const o = x.getContext("2d");
  o && o.clearRect(5941 * 1 + -5302 + -639, -3642 + -3 * -1214, o.canvas.width, o.canvas.height);
}, lo = (x, o) => Math.min(x, o), jl = (x, o) => {
  const t = lo(o.width, o.height);
  return Nn(x * t);
}, Wc = ({ height: x, width: o }) => {
  const t = lo(o, x), e = t / (-611 + -1 * -614) * (-1 * -3685 + -10 * -710 + 10781 * -1);
  if (o > x) {
    const r = {};
    return r.width = e, r.height = t, r;
  }
  const n = {};
  return n.width = t, n.height = e, n;
}, vc = ({ height: x, width: o }) => {
  const t = lo(o, x) * Hl, e = (o - t) / (-6259 * 1 + 1223 * -5 + 12376), n = (x - t) / (1661 * -2 + -131 + -3455 * -1), r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = t, r;
}, Jl = (x) => {
  const { height: o, shiftX: t, shiftY: e, width: n } = vc(x), r = {};
  return r.shiftX = t / x.width, r.shiftY = e / x.height, r.width = n / x.width, r.height = o / x.height, r;
}, _l = (x, o) => jl(x, o) * Ol, Ql = "@innovatrics/dot-common-auto-capture", Ul = "6.1.8", zl = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, ql = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, $l = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.1"
}, e1 = {
  name: Ql,
  private: !0,
  version: Ul,
  scripts: zl,
  dependencies: ql,
  devDependencies: $l
}, Sc = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Ea = () => {
  const x = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return x && o;
}, t1 = () => {
  const x = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return x && o ? !1 : o;
}, wr = (x) => new Promise((o) => {
  setTimeout(o, x);
}), H0 = (x) => JSON.parse(JSON.stringify(x, (o, t) => typeof t == "number" ? Nn(t) : t)), wc = () => e1.version, Bc = (x) => new URL(x).hostname.replace("www.", ""), n1 = () => Bc(window.location.href) === "localhost", ax = (x) => Object.entries(x).map(([o, t]) => encodeURIComponent(o) + "=" + encodeURIComponent(t)).join("&"), x1 = (x, o) => {
  const t = x && performance.now() - x;
  return o >= Vo.minFrames ? t > Vo.minDuration : t > Vo.maxDuration;
}, o1 = (x, o) => JSON.stringify(x) === JSON.stringify(o) ? o : x;
function r1(x, o) {
  let t;
  return (...e) => {
    const n = () => {
      clearTimeout(t), t = void 0, x(...e);
    };
    t === void (-616 + -154 * -4) && (t = setTimeout(n, o));
  };
}
const i1 = (x) => x === oc.CONTROL ? !Sc() : !0, a1 = (x, o) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: r } = q0(), [i, a] = tt(), s = nt(() => {
    const d = r && o && o.isStreaming && o.getCameraSettings().facingMode;
    return d ? i ?? d === "user" : i ?? i1(x);
  }, [o, i, x, r]);
  Be(() => {
    const d = () => {
      t !== St.LOADING && e(St.RUNNING);
    }, g = () => {
      a(i === void 0 ? !s : !i);
    }, C = async () => {
      if (o) {
        e(St.LOADING);
        try {
          await o.switchCamera(), e(St.RUNNING);
        } catch (h) {
          if (h instanceof Error) {
            n(xe.fromCameraError(h));
            return;
          }
        }
        a(void 0);
      }
    }, l = (h) => {
      var p;
      switch ((p = h.detail) == null ? void 0 : p["instruction"]) {
        case px.CONTINUE_DETECTION:
          d();
          break;
        case px.TOGGLE_MIRROR:
          g();
          break;
        case px.SWITCH_CAMERA:
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
async function Gc() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Do() {
  return (await Gc()).filter((o) => o.kind === "videoinput");
}
function Fo(x) {
  x.getTracks().forEach((t) => t.stop());
}
function La(x) {
  return x.getVideoTracks()[1 * -7321 + -6173 + 2249 * 6];
}
const vx = {};
vx.width = 1920, vx.height = 1080, vx.facingMode = ic.FRONT;
const s1 = vx;
var ht;
class kc {
  constructor({ defaultVideoConstrains: o = s1, minCameraShorterSide: t = gl } = {}) {
    J(this, "options");
    J(this, "availableCameraProperties", []);
    ge(this, ht, null);
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return M(this, ht);
  }
  get videoTrack() {
    if (M(this, ht)) return La(M(this, ht));
  }
  get isCameraActive() {
    var o;
    return !!((o = M(this, ht)) != null && o.active);
  }
  static async requestPermission() {
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    Fo(t);
  }
  async open(o = {}) {
    Ea() && await wr(7 * 129 + 6 * 1384 + -8757), ae(this, ht, await navigator.mediaDevices.getUserMedia(o)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const o = await Do();
    if (o.length <= -2 * -4585 + -3 * 1533 + 10 * -457) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = o.findIndex((a) => a.deviceId === e.deviceId), r = o[n + (-319 * -16 + 22 * 55 + -6313)] ?? o[1 * -3589 + -6670 + 1 * 10259], i = this.getConstraints(t, r);
    this.close(), await this.open(i);
  }
  close() {
    M(this, ht) && (Fo(M(this, ht)), ae(this, ht, null));
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
    if (!o.width) throw new xe("Video width is undefined");
    if (!o.height) throw new xe("Video height is undefined");
    const t = {};
    return t.width = o.width, t.height = o.height, t;
  }
  async getDeviceName() {
    const o = this.getSettings(), t = await Gc(), e = t.find((n) => n.deviceId === o.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(o) {
    return o === ic.FRONT ? void (1 * 6383 + -1 * 7608 + -25 * -49) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return Sc() ? (await Do()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (2828 * -1 + -9288 + 12116);
  }
  async collectAvailableCamerasInfo() {
    const o = await Do();
    for (const t of o) {
      Ea() && await wr(450);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const r = await navigator.mediaDevices.getUserMedia(n), i = La(r);
        if (!i) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = i.getSettings(), s = { ...a };
        s.deviceName = i.label;
        const c = {};
        c.cameraProperties = s;
        const d = c;
        this.availableCameraProperties.push(d), Fo(r);
      } catch (e) {
        e instanceof Error && xe.logError(e);
      }
    }
  }
  getConstraints(o, t) {
    const e = { ...this.options.defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t.deviceId } : void 0;
    const n = {};
    return n.video = e, n.audio = !1, n;
  }
  checkVideoTrackSettings() {
    var e;
    const o = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(o != null && o.height) || !(o != null && o.width))
      throw this.close(), new xe("Could not init camera settings");
    if (typeof this.options.minCameraShorterSide != "number") return;
    if (Math.min(o == null ? void 0 : o.width, o == null ? void 0 : o.height) < this.options.minCameraShorterSide)
      throw this.close(), new xe("Could not init video because of low camera resolution: " + o.width + "x" + o.height + ".");
  }
}
ht = new WeakMap();
class c1 {
  constructor(o, t) {
    this.videoHandler = o, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(o = {}) {
    await kc.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(o.facingMode), e = this.cameraHandler.getConstraints(o, t);
    await this.cameraHandler.open(e), t1() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var n;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const o = (n = this.cameraHandler.videoTrack) == null ? void 0 : n.getSettings();
    if (!(o != null && o.width)) throw new xe("Cant take photo - video width is undefined");
    if (!(o != null && o.height)) throw new xe("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = o.width, t.height = o.height;
    const e = t.getContext("2d");
    if (!e) throw new xe("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 3348 + 27 * -124, 9555 + 7687 * 1 + -17242), { image: t, timestamp: Date.now() };
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
class g1 {
  constructor(o) {
    ge(this, Zt);
    ae(this, Zt, o);
  }
  get videoElement() {
    return M(this, Zt);
  }
  async play(o) {
    M(this, Zt).srcObject = o, await M(this, Zt).play();
  }
  stop() {
    M(this, Zt).srcObject = null;
  }
  hasSrcObject() {
    return !!M(this, Zt).srcObject;
  }
}
Zt = new WeakMap();
function d1(x, o) {
  const t = Et(), { handleError: e, setIsCameraReady: n } = q0(), [r, i] = tt(), a = F0((c) => {
    i((d) => o1(c, d));
  }, []);
  Be(() => ((async () => {
    if (!x.current) {
      e(new xe("Something went wrong during video initialization"));
      return;
    }
    const d = new g1(x.current), g = new kc(), C = new c1(d, g);
    try {
      const l = {};
      l.facingMode = o, await C.startVideoStream(l);
    } catch (l) {
      if (l instanceof Error) {
        e(xe.fromCameraError(l));
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
function u1(x, o) {
  Be(() => {
    function t() {
      x.current && Pl(o, x.current.getBoundingClientRect());
    }
    return t(), window.addEventListener("resize", t), () => {
      window.removeEventListener("resize", t);
    };
  }, [x, o]);
}
class oi extends Array {
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
    this.length === this.size && this.splice(-2861 * -2 + -6907 * 1 + 1185, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(8231 * 1 + -5814 + -2417);
  }
}
const l1 = (x, o) => {
  const { height: t, shiftX: e, shiftY: n, width: r } = o;
  return !(x.x < e || x.x > e + r || x.y < n || x.y > n + t);
}, I1 = (x, o) => Object.values(x).every((t) => l1(t, o));
function f1(x) {
  return Nn(Math.abs(x));
}
const C1 = () => {
  const [x, o] = tt(null), t = Et(new oi(5));
  function e(r) {
    const { z: i } = r.accelerationIncludingGravity || {};
    if (!i) return;
    t.current.pushFixed(f1(i));
    const a = Nn(yc(t.current)), s = {};
    s.z = a, o(s);
  }
  Be(() => (window.addEventListener("devicemotion", r1(e, Cl), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const n = {};
  return n.acceleration = x, n;
};
var h1 = Symbol.for("preact-signals");
function ri() {
  if (V0 > -971 + -18 * -54)
    V0--;
  else {
    for (var x, o = !1; void (7 * -322 + 9431 * -1 + -779 * -15) !== mn; ) {
      var t = mn;
      for (mn = void (3277 * 1 + -7247 + 1 * 3970), Br++; void (-8717 * -1 + -5847 + -2870) !== t; ) {
        var e = t.o;
        if (t.o = void (-7376 + -739 * 1 + -541 * -15), t.f &= -(4868 + -7 * 21 + -337 * 14), !(-61 * -95 + -5838 * -1 + -11625 * 1 & t.f) && Kc(t)) try {
          t.c();
        } catch (n) {
          !o && (x = n, o = !(8545 + -3868 * 1 + 1559 * -3));
        }
        t = e;
      }
    }
    if (Br = -7941 + -7941 * -1, V0--, o) throw x;
  }
}
var ne = void (2020 + 577 * -16 + 7212), mn = void (-9733 * -1 + -6467 + -3266), V0 = 0, Br = -1613 * 3 + -4823 + 9662, Yx = 0;
function Hc(x) {
  if (void (9116 * 1 + 9241 + -1 * 18357) !== ne) {
    var o = x.n;
    if (void (-5420 + 19 * -323 + -7 * -1651) === o || o.t !== ne)
      return o = { i: 0, S: x, p: ne.s, n: void (-349 * -18 + -9036 + -1 * -2754), t: ne, e: void (6463 * -1 + 307 + 6156), x: void (2701 * 3 + -14 * 181 + 1 * -5569), r: o }, void (3682 + 1 * -4441 + 11 * 69) !== ne.s && (ne.s.n = o), ne.s = o, x.n = o, -11 * -381 + -8735 + 4576 & ne.f && x.S(o), o;
    if (-(-6319 + 11 * -366 + 739 * 14) === o.i)
      return o.i = 0, void (-1 * -368 + 5 * 233 + -21 * 73) !== o.n && (o.n.p = o.p, o.p !== void 0 && (o.p.n = o.n), o.p = ne.s, o.n = void (4181 * -2 + -2994 + 17 * 668), ne.s.n = o, ne.s = o), o;
  }
}
function He(x) {
  this.v = x, this.i = 6465 + -422 * 12 + -1401, this.n = void (19 * 335 + -3 * -2539 + -13982), this.t = void (-119 + 92 * -40 + 1 * 3799);
}
He.prototype.brand = h1, He.prototype.h = function() {
  return !(17 * -212 + -769 * 3 + -5911 * -1);
}, He.prototype.S = function(x) {
  this.t !== x && void (-317 * -19 + 1680 + -7703) === x.e && (x.x = this.t, this.t !== void 0 && (this.t.e = x), this.t = x);
}, He.prototype.U = function(x) {
  if (void (1 * 4241 + 5351 + -109 * 88) !== this.t) {
    var o = x.e, t = x.x;
    void (2730 + 2179 * 2 + -1 * 7088) !== o && (o.x = t, x.e = void 0), void (-9953 + 9953 * 1) !== t && (t.e = o, x.x = void (8603 + -1229 * 7)), x === this.t && (this.t = t);
  }
}, He.prototype.subscribe = function(x) {
  var o = this;
  return ai(function() {
    var t = o.value, e = ne;
    ne = void (-941 * -6 + -253 * 38 + 3968);
    try {
      x(t);
    } finally {
      ne = e;
    }
  });
}, He.prototype.valueOf = function() {
  return this.value;
}, He.prototype.toString = function() {
  return this.value + "";
}, He.prototype.toJSON = function() {
  return this.value;
}, He.prototype.peek = function() {
  var x = ne;
  ne = void (4 * -1483 + 3580 + -168 * -14);
  try {
    return this.value;
  } finally {
    ne = x;
  }
}, Object.defineProperty(He.prototype, "value", { get: function() {
  var x = Hc(this);
  return void (-3 * -1557 + 784 + -5455) !== x && (x.i = this.i), this.v;
}, set: function(x) {
  if (x !== this.v) {
    if (Br > 18 * 262 + 3 * 2078 + -10850) throw new Error("Cycle detected");
    this.v = x, this.i++, Yx++, V0++;
    try {
      for (var o = this.t; void (2560 + 32 * -80) !== o; o = o.x) o.t.N();
    } finally {
      ri();
    }
  }
} });
function Oc(x) {
  return new He(x);
}
function Kc(x) {
  for (var o = x.s; void (7512 + 94 * -1 + 7418 * -1) !== o; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !(-9086 + 649 * 14);
  return !(6047 + -2698 * -1 + -8744);
}
function Zc(x) {
  for (var o = x.s; void (293 * 26 + 2 * 2224 + -12066) !== o; o = o.n) {
    var t = o.S.n;
    if (void (1598 * 6 + -6372 + -48 * 67) !== t && (o.r = t), o.S.n = o, o.i = -(-6403 + -6758 * -1 + -354), void (-7071 + 2227 * -1 + 2 * 4649) === o.n) {
      x.s = o;
      break;
    }
  }
}
function Rc(x) {
  for (var o = x.s, t = void (-5 * 1622 + 3545 + -5 * -913); void (-9119 + -745 * -5 + 5394) !== o; ) {
    var e = o.p;
    -(-3 * 1803 + 3069 + 2341) === o.i ? (o.S.U(o), void (-13999 + 13999 * 1) !== e && (e.n = o.n), void (-1 * -3637 + -2568 + -1069) !== o.n && (o.n.p = e)) : t = o, o.S.n = o.r, void (-5202 + -563 * -4 + 2950) !== o.r && (o.r = void (-8121 + -2 * 4439 + 1 * 16999)), o = e;
  }
  x.s = t;
}
function O0(x) {
  He.call(this, void (5466 + 40 * -132 + 62 * -3)), this.x = x, this.s = void (-35 * -56 + 6181 + -8141), this.g = Yx - (-5 * 179 + -3683 + 241 * 19), this.f = 4;
}
(O0.prototype = new He()).h = function() {
  if (this.f &= -3, -4696 + 524 * 14 + -203 * 13 & this.f) return !(-1156 * 1 + 9895 + -8738);
  if (-4440 + -7241 * 1 + 11713 == (-1531 * -6 + -1 * -2113 + -11263 & this.f)) return !0;
  if (this.f &= -(-17 * 169 + -6669 + -9547 * -1), this.g === Yx) return !(8041 + 187 * -43);
  if (this.g = Yx, this.f |= 8951 + -1 * 2731 + -6219 * 1, this.i > -4451 * 1 + -1262 * -2 + 41 * 47 && !Kc(this)) return this.f &= -(-3 * -1612 + 6684 + -886 * 13), !(-13437 + -1 * -13437);
  var x = ne;
  try {
    Zc(this), ne = this;
    var o = this.x();
    (16 & this.f || this.v !== o || -6659 * -1 + -5938 + -721 === this.i) && (this.v = o, this.f &= -(11 * 578 + 6846 + -13187), this.i++);
  } catch (t) {
    this.v = t, this.f |= 180 * 47 + 8372 + 1051 * -16, this.i++;
  }
  return ne = x, Rc(this), this.f &= -(-3 * 311 + 2776 + -7 * 263), !(-1 * -7976 + 33 * 60 + -9956);
}, O0.prototype.S = function(x) {
  if (void (-505 * -2 + 3090 + 4100 * -1) === this.t) {
    this.f |= 185 + -568 * 5 + 3 * 897;
    for (var o = this.s; void (-4138 * -1 + 2403 + -1 * 6541) !== o; o = o.n) o.S.S(o);
  }
  He.prototype.S.call(this, x);
}, O0.prototype.U = function(x) {
  if (void (1043 * -8 + -166 * 8 + -156 * -62) !== this.t && (He.prototype.U.call(this, x), this.t === void 0)) {
    this.f &= -33;
    for (var o = this.s; void (-8617 + -7327 * 1 + 15944) !== o; o = o.n) o.S.U(o);
  }
}, O0.prototype.N = function() {
  if (!(-9236 + -2 * -4577 + 7 * 12 & this.f)) {
    this.f |= -6469 + -1295 * -5;
    for (var x = this.t; void (-22 * -142 + 431 * -4 + -1400) !== x; x = x.x) x.t.N();
  }
}, Object.defineProperty(O0.prototype, "value", { get: function() {
  if (2055 + 3389 * -1 + 1335 & this.f) throw new Error("Cycle detected");
  var x = Hc(this);
  if (this.h(), void (3959 + -2 * -2510 + -41 * 219) !== x && (x.i = this.i), 7745 * 1 + -2994 * -3 + 16711 * -1 & this.f) throw this.v;
  return this.v;
} });
function m1(x) {
  return new O0(x);
}
function Pc(x) {
  var o = x.u;
  if (x.u = void (-1945 * 1 + -5090 + 7035), typeof o == "function") {
    V0++;
    var t = ne;
    ne = void (-17744 + -4 * -4436);
    try {
      o();
    } catch (e) {
      throw x.f &= -(-34 * -188 + -3 * 1501 + -1887), x.f |= 1 * 9974 + -2778 + -1 * 7188, ii(x), e;
    } finally {
      ne = t, ri();
    }
  }
}
function ii(x) {
  for (var o = x.s; void (-29 * -239 + -2744 * -1 + 3 * -3225) !== o; o = o.n) o.S.U(o);
  x.x = void 0, x.s = void (12 * -438 + -1189 * 4 + -10012 * -1), Pc(x);
}
function p1(x) {
  if (ne !== this) throw new Error("Out-of-order effect");
  Rc(this), ne = x, this.f &= -(1 * -6829 + -2713 + 8 * 1193), 4421 * -2 + 9902 + -526 * 2 & this.f && ii(this), ri();
}
function ln(x) {
  this.x = x, this.u = void (-2 * 149 + 1843 * 4 + -7074), this.s = void (7091 + 1 * -7091), this.o = void (3 * 1723 + -635 + -4534), this.f = -7349 + 14 * -199 + 10167 * 1;
}
ln.prototype.c = function() {
  var x = this.S();
  try {
    if (5 * 1211 + -6889 + -421 * -2 & this.f || void (2448 + -2448 * 1) === this.x) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    x();
  }
}, ln.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 2455 * -2 + 7 * 146 + 3889, this.f &= -(-393 + -402 * -1), Pc(this), Zc(this), V0++;
  var x = ne;
  return ne = this, p1.bind(this, x);
}, ln.prototype.N = function() {
  !(2 & this.f) && (this.f |= 56 * 145 + 6130 + -14248, this.o = mn, mn = this);
}, ln.prototype.d = function() {
  this.f |= 8, 793 * 12 + 6101 * 1 + 3904 * -4 & this.f || ii(this);
};
function ai(x) {
  var o = new ln(x);
  try {
    o.c();
  } catch (t) {
    throw o.d(), t;
  }
  return o.d.bind(o);
}
var Yo;
function R0(x, o) {
  D[x] = o.bind(null, D[x] || function() {
  });
}
function sx(x) {
  Yo && Yo(), Yo = x && x.S();
}
function Vc(x) {
  var o = this, t = x.data, e = P0(t);
  e.value = t;
  var n = nt(function() {
    for (var r = o.__v; r = r.__; ) if (r.__c) {
      r.__c.__$f |= -2163 * 1 + -3070 + 1 * 5237;
      break;
    }
    return o.__$u.c = function() {
      var i;
      !as(n.peek()) && -8120 + -1 * -3889 + -58 * -73 === ((i = o.base) == null ? void (3030 + 1010 * -3) : i.nodeType) ? o.base.data = n.peek() : (o.__$f |= -3067 * 1 + 13 * -71 + 13 * 307, o.setState({}));
    }, m1(function() {
      var i = e.value.value;
      return 1 * -4594 + -863 * 11 + 14087 === i ? -2021 * 1 + -900 * 8 + 9221 : !(-2551 * 3 + -7629 * 1 + -1698 * -9) === i ? "" : i || "";
    });
  }, []);
  return n.value;
}
Vc.displayName = "_st";
var Gr = {};
Gr.configurable = !(1085 + 811 * -3 + 1348), Gr.value = void (12 * 259 + 33 * 167 + -169 * 51);
var kr = {};
kr.configurable = !(-1 * -6989 + -9181 * -1 + -8085 * 2), kr.value = Vc;
var Hr = {};
Hr.configurable = !(-2704 + -208 * -13), Hr.get = function() {
  var x = {};
  return x.data = this, x;
};
var Or = {};
Or.configurable = !(1 * 8187 + -2 * -158 + 773 * -11), Or.value = 1;
var rn = {};
rn.constructor = Gr, rn.type = kr, rn.props = Hr, rn.__b = Or, Object.defineProperties(He.prototype, rn), R0("__b", function(x, o) {
  if (typeof o.type == "string") {
    var t, e = o.props;
    for (var n in e) if (n !== "children") {
      var r = e[n];
      r instanceof He && (t || (o.__np = t = {}), t[n] = r, e[n] = r.peek());
    }
  }
  x(o);
}), R0("__r", function(x, o) {
  sx();
  var t, e = o.__c;
  e && (e.__$f &= -(4280 * -2 + -1 * 8017 + -16579 * -1), void (6397 * 1 + 290 * 26 + 11 * -1267) === (t = e.__$u) && (e.__$u = t = function(n) {
    var r;
    return ai(function() {
      r = this;
    }), r.c = function() {
      e.__$f |= 3019 * -1 + -7522 * -1 + 1 * -4502, e.setState({});
    }, r;
  }())), sx(t), x(o);
}), R0("__e", function(x, o, t, e) {
  sx(), x(o, t, e);
}), R0("diffed", function(x, o) {
  sx();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, n = o.props;
    if (e) {
      var r = t.U;
      if (r) for (var i in r) {
        var a = r[i];
        void (-6202 + 8402 * 1 + -2200) !== a && !(i in e) && (a.d(), r[i] = void (7048 + -3524 * 2));
      }
      else t.U = r = {};
      for (var s in e) {
        var c = r[s], d = e[s];
        void (-3545 * 2 + -2 * 4597 + 1 * 16284) === c ? (c = b1(t, s, d, n), r[s] = c) : c.o(d, n);
      }
    }
  }
  x(o);
});
function b1(x, o, t, e) {
  var n = o in x && x.ownerSVGElement === void 0, r = Oc(t);
  return { o: function(i, a) {
    r.value = i, e = a;
  }, d: ai(function() {
    var i = r.value.value;
    e[o] !== i && (e[o] = i, n ? x[o] = i : i ? x.setAttribute(o, i) : x.removeAttribute(o));
  }) };
}
R0("unmount", function(x, o) {
  if (typeof o.type == "string") {
    var t = o.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (1 * 4729 + 1241 * 5 + -10934);
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
      a && (i.__$u = void (1201 * 6 + 6956 + -97 * 146), a.d());
    }
  }
  x(o);
}), R0("__h", function(x, o, t, e) {
  (e < -11987 + -5 * -2398 || -1 * 3981 + 2495 * -2 + 8980 === e) && (o.__$f |= 2), x(o, t, e);
}), gt.prototype.shouldComponentUpdate = function(x, o) {
  var t = this.__$u;
  if (!(t && void (-1 * 5380 + -131 + 5511) !== t.s || 2293 * -1 + -89 * -85 + -5268 & this.__$f)) return !(795 + -265 * 3);
  if (811 + 808 * -1 & this.__$f) return !0;
  for (var e in o) return !(4759 * -1 + 2098 + 2661);
  for (var n in x) if (n !== "__source" && x[n] !== this.props[n]) return !(-1595 * -1 + -2293 * 4 + -7577 * -1);
  for (var r in this.props) if (!(r in x)) return !(-8079 + 7715 * 1 + 364);
  return !(19 * 217 + -1 * 5694 + 1572);
};
function P0(x) {
  return nt(function() {
    return Oc(x);
  }, []);
}
function A1({ analytics: x, cameraFacing: o, controller: t, createProtoMessage: e, onPhotoTaken: n, sessionToken: r }) {
  const i = Et(null), { sunfish: a } = ni(), { appState: s, handleAppStateChange: c, handleError: d } = q0(), { cameraResolution: g, cameraService: C, onCameraResolutionChange: l } = d1(i, o), h = P0(void (6 * 747 + 198 * -23 + 36 * 2));
  Be(() => {
    C != null && C["isStreaming"] && (t != null && t["isDetectorInitialized"]) && a && c(St.RUNNING);
  }, [C == null ? void 0 : C["isStreaming"], t == null ? void 0 : t["isDetectorInitialized"], c, a]), Be(() => {
    if (s !== St.RUNNING) return;
    if (!C || !t) throw new xe("Cannot start detection");
    let A = 0, u = !1, W = 3085 + 3085 * -1;
    const H = new oi(1 * -2422 + -9391 * -1 + -6939);
    t.clearImagesForDuplicateDetection();
    async function N({ cameraService: K, canvasImage: _, controller: Ie, detection: U, detectionRecord: fe, onPhotoTaken: Ce }) {
      const Ze = {};
      Ze.width = _.width, Ze.height = _.height;
      const lt = Ze, ie = await Nl(_), Re = await K.getCameraProperties(), Ye = { ...Re, detectionRecord: fe, hashedDetectedImagesWithTimestamp: Ie.getImagesForDuplicateDetection() }, ot = {};
      ot.sessionToken = r, ot.web = Ye;
      const Xe = ot, pe = await e(ie, Xe), Te = {};
      Te.detection = U, Te.imageResolution = lt;
      const Me = {};
      Me.image = ie, Me.data = Te;
      const be = Me, Ee = {};
      Ee.imageData = be, Ee.content = pe, Ee.webMetadata = Ye, Ee.controller = Ie, Ce(Ee);
    }
    async function Y({ cameraService: K, controller: _ }) {
      const Ie = Date.now();
      for (; K.isStreaming && !u; ) {
        if (x1(A, W)) {
          const { detection: Xe, image: pe } = _.getBestImage() || {}, Te = _.getDetectionRecord();
          if (pe && Xe) {
            const Me = Date.now(), be = yc(H), Ee = {};
            Ee.width = pe.width, Ee.height = pe.height, x == null || x.trackCaptureProcess({ detection: Xe, imageResolution: Ee, deviceName: await K.getDeviceName(), averageFps: be, captureProcessDurationInMs: Me - Ie, facingMode: K.getCameraSettings().facingMode, instructionSet: await _.getInstructionSet() }), c(St.WAITING);
            const je = {};
            je.cameraService = K, je.controller = _, je.canvasImage = pe, je.detection = Xe, je.detectionRecord = Te, je.onPhotoTaken = n, await N(je), _.restart();
          } else d(new xe("Something went wrong during capturing an image"));
          return;
        }
        const U = K.takePhoto(), fe = {};
        fe.width = U.image.width, fe.height = U.image.height;
        const Ce = fe;
        let Ze;
        try {
          Ze = await _.processImage(U);
        } catch (Xe) {
          Xe instanceof Error && d(xe.fromCameraError(Xe));
          return;
        }
        const lt = Date.now(), ie = lt - U.timestamp, Re = Nn((-7475 + 3 * 2825) / ie);
        H.pushFixed(Re);
        const Ye = {};
        Ye.processedImage = Ze, Ye.detectionTime = ie, Ye.fps = Re, Ye.resolution = Ce, Ye.samVersion = _.samVersion;
        const ot = Ye;
        h.value = ot, Ze.isInCandidateSelection && (A === -1 * -4759 + -1 * -2578 + -1 * 7337 && (A = performance.now()), W++), l(Ce), await wr(Math.max(ka.max - ie, ka.min));
      }
    }
    const X = {};
    return X.controller = t, X.cameraService = C, Y(X), () => {
      u = !0;
    };
  }, [x, e, s, C, t, c, d, n, l, h, r]);
  const p = {};
  return p.videoRef = i, p.cameraResolution = g, p.cameraService = C, p.detectionDetails = h, p;
}
const si = (x) => {
  const { height: o, width: t } = Wc(x), e = (x.width - t) / (-5767 + 2 * -3533 + 12835), n = (x.height - o) / (-5390 + 5903 * 1 + -7 * 73), r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = o, r;
}, Tc = (x, o) => {
  const { height: t, width: e } = Wc(x), n = lo(x.width, x.height), r = e - n * o * (2476 + 2059 * -1 + -5 * 83), i = t - n * o * (-197 * 21 + 2 * 2736 + -31 * 43), a = (x.width - r) / (-1196 + -1 * -3475 + -2277), s = (x.height - i) / (8533 * -1 + -2684 + 11219), c = {};
  return c.shiftX = a, c.shiftY = s, c.width = r, c.height = i, c;
}, G0 = (x, o) => {
  const { shiftX: t, shiftY: e } = si(x), n = {};
  return n.x = o.x + t, n.y = o.y + e, n;
}, y1 = (x, o) => ({ ...o, leftEye: { ...o.leftEye, center: G0(x, o.leftEye.center) }, rightEye: { ...o.rightEye, center: G0(x, o.rightEye.center) }, mouth: { ...o.mouth, center: G0(x, o.mouth.center) }, topLeft: G0(x, o.topLeft), bottomRight: G0(x, o.bottomRight), faceCenter: G0(x, o.faceCenter) }), Ec = (x, o) => {
  const { faceCenter: t, faceSize: e } = x, n = _l(e, o), r = {};
  r.x = t.x, r.y = t.y - n;
  const i = {};
  i.x = t.x + n, i.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + n;
  const s = {};
  s.x = t.x - n, s.y = t.y;
  const c = {};
  return c.top = r, c.right = i, c.bottom = a, c.left = s, H0(c);
}, W1 = (x, o) => {
  const { bottomRight: t, faceCenter: e, topLeft: n } = o, r = {
    topLeft: n,
    width: t.x - n.x,
    height: t.y - n.y
  };
  Ac(x, r, "rgba(255, 0, 0, 0.3)", !0), hn(x, e, "lime");
}, v1 = (x, o, t) => {
  const e = Ec(o, t);
  Object.values(e).map((n) => hn(x, n, "orange"));
}, S1 = ({ redfin: x, cameraResolution: o, detectionDetails: t, isImageMirror: e }) => {
  const {
    faceCameraOptions: { thresholds: n }
  } = pc(), r = Et(null);
  if (Be(() => {
    if (!r.current)
      return;
    r.current.width = o.width, r.current.height = o.height, Ml(r.current);
    const h = si(o), p = Tc(o, n.outOfBoundsThreshold), A = vc(o);
    t.value && (W1(r.current, t.value.processedImage.detectedFace), v1(
      r.current,
      t.value.processedImage.detectedFace,
      o
    ), No(r.current, h, "lime"), No(r.current, p, "yellow"), No(r.current, A, "blue"), hn(r.current, t.value.processedImage.detectedFace.leftEye.center, "cyan"), hn(r.current, t.value.processedImage.detectedFace.rightEye.center, "cyan"), hn(r.current, t.value.processedImage.detectedFace.mouth.center, "cyan"));
  }, [o, n, t.value]), !t.value)
    return null;
  const {
    detectionTime: i,
    fps: a,
    processedImage: { detectedFace: s, instructionCode: c, invalidValidators: d },
    resolution: g,
    samVersion: C
  } = t.value, l = {
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
    "Detection time": i,
    FPS: a,
    Tier: x,
    Instruction: c,
    Resolution: JSON.stringify(g),
    "Component version": "6.1.8"
  };
  return C && (l["SAM version"] = C), d.length > 0 && (l["Invalid validators"] = d.join(", ")), /* @__PURE__ */ O(
    Mu,
    {
      ref: r,
      cameraResolution: o,
      detectionDetails: l,
      isImageMirror: e
    }
  );
};
function w1(x) {
  return /* @__PURE__ */ O("rect", { fill: "#000", ...x, rx: "50%" });
}
function B1(x) {
  const [o, t] = tt(!1), e = () => t((i) => !i), n = "" + o;
  Q0(() => {
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
        l.find((p) => {
          for (const A of p.removedNodes)
            if (A === x.current) return !0;
        }) && e(), l.forEach((p) => {
          p.addedNodes.forEach((A) => {
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
const G1 = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function k1({ cutOut: x, height: o, width: t }) {
  const e = Et(null), { key: n } = B1(e);
  return /* @__PURE__ */ O("div", { ref: e, style: G1, children: /* @__PURE__ */ O("svg", { viewBox: `0 0 ${t} ${o}`, children: [
    /* @__PURE__ */ O("defs", { children: [
      /* @__PURE__ */ O("mask", { id: "placeholder", children: [
        /* @__PURE__ */ O("rect", { fill: "#fff", height: "100%", width: "100%" }),
        x
      ] }),
      /* @__PURE__ */ O(
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
            /* @__PURE__ */ O("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ O("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
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
    /* @__PURE__ */ O("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, n);
}
function H1({ fullOverlay: x, resolution: o }) {
  const t = Jl(o), e = `${t.height * 100}%`, n = `${t.width * 100}%`, r = `${t.shiftX * 100}%`, i = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ O(
    k1,
    {
      cutOut: x || /* @__PURE__ */ O(w1, { height: e, width: n, x: r, y: i }),
      height: o.height,
      width: o.width
    }
  );
}
const O1 = async () => WebAssembly.validate(new Uint8Array([0, -3963 + 290 * 14, -3362 + -183 * -19, 1057 * 1 + -3 * -2961 + -9831, 5751 + -867 * -9 + 1 * -13553, -4486 * -1 + -2704 + 11 * -162, 2 * 4436 + 1 * -8111 + -761, -6052 * -1 + -9298 + -1 * -3246, -2 * 3002 + -1436 + -7441 * -1, -3703 + 62 * -7 + -1 * -4142, 1, 96, -628 + 2 * 314, 1, -6 * 549 + -1845 + 5262, 3301 + -194 * 17, 4973 * 1 + -967 * -4 + 1 * -8839, -4 * 1174 + 3347 + 1350, 819 + -3 * 838 + 1695, -1625 + 3 * 545, 10, -1 * 8851 + 2362 + 118 * 55, -7359 + 1 * 2617 + 4750, -3679 + 1 * 3679, 8 * 973 + -1943 + -722 * 8, -1761 * 2 + 3 * -169 + 4029, 10 * 136 + -47 * -206 + -1 * 10789, 56 * -61 + 1722 + 1709, -2297 * 1 + 801 * -6 + -1 * -7356, -5989 * 1 + -1 * -2268 + 67 * 57, 114 + -2 * -356 + -815]));
function Xx() {
  const x = ["y8ocWRxdKW", "pGmpW7SoqhNcSMWfW7C0ja", "umkpW7BcJ8kHyIrc", "A8okWRtdMG", "rcRcVq", "kx4PWQ7dRSkvhJvbAt/dJa", "WPZdSmolz0u", "e8oSASkzeW", "AsddPrpcJa", "jcXFW47cMmo2la", "WRO2WQmkWQldNX/cPu/cJa", "W4bReSo5WQFcUCoifbGVWPpdPa", "W47cSSo0yhNdMCkupa", "WO7cHmoog8oO", "DCkFW4Dh", "WOPcrmovWQD/i8kErG", "sILhW5RcNG", "DZNcMt4n", "EdDQW7pcPa", "qgdcLKO5", "WR8ZWQmnW7pdJcpcJx/cTCkT", "vmkjWO7dUCofhs5BW4zdgIS", "mhdcOfdcImklDCkcW5OV", "qMBcINeO", "WRW1WQbFWQldOYxcNeq", "E1vb", "FmkKW6W8WPi", "WP/dIuC", "xCkwtmkSt8kTfq", "o8oCW4VcR8kKvSoUqMNdHSoUjLi", "W6ldQSkQWPpcV8kKWQPvaSktzYqO", "W6lcSIXzW4lcUJVdUa", "lmo4WQ9UW5xcLmo6WOrqv8oZ", "sCkpWRFcLrK", "W57dLSkzs8kJqCkChCo5tqHhW68", "nSo/W7nvbwVdKg4", "EG3dS8krzG", "cmkrpeKiWOm0cmo1WQaoW6G", "mh3dIhHzbSkEW7RdJYv4WOa", "W7xdHCkvWQlcQa", "W7ddHCkdWR8", "xdjgW5ZcIW", "AIhdUq3cUW", "WRtcT8oUW7JdRG", "B8oFW60QW6FdIYTXWPGCW5CY", "WP09rSkP", "zZ7cGJOv", "BCkXW4XzjW"];
  return Xx = function() {
    return x;
  }, Xx();
}
function ue(x, o) {
  const t = Xx();
  return ue = function(e, n) {
    e = e - (-12097 + 881 * 14);
    let r = t[e];
    if (ue.nxfzgA === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, W = 0; u = g.charAt(W++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      ue.lmxtPD = d, x = arguments, ue.nxfzgA = !0;
    }
    const a = t[11033 + 59 * -187], s = e + a, c = x[s];
    return c ? r = c : (ue.YKcKZH === void 0 && (ue.YKcKZH = !0), r = ue.lmxtPD(r, n), x[s] = r), r;
  }, ue(x, o);
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return ue(g - -923, C);
  }
  const e = x();
  function n(s, c, d, g, C) {
    return ue(g - 585, s);
  }
  function r(s, c, d, g, C) {
    return ue(c - -717, d);
  }
  function i(s, c, d, g, C) {
    return ue(s - 963, d);
  }
  function a(s, c, d, g, C) {
    return ue(C - 404, c);
  }
  for (; ; )
    try {
      if (parseInt(n("v]hu", 849, 853, 844, 824)) / 1 + parseInt(i(1246, 1242, "CPGc", 1254, 1256)) / 2 * (parseInt(n("Vgs(", 843, 855, 843, 824)) / 3) + parseInt(t(-657, -664, -693, -679, "]sH%")) / 4 + -parseInt(r(-452, -445, "Vgs(", -426, -424)) / 5 * (-parseInt(t(-639, -632, -646, -655, "Vgs(")) / 6) + parseInt(r(-449, -464, "^1ro", -457, -458)) / 7 + -parseInt(i(1240, 1247, "XQ7$", 1231, 1239)) / 8 * (-parseInt(a(639, "^1ro", 677, 645, 661)) / 9) + -parseInt(n("m88b", 854, 850, 864, 872)) / 10 * (parseInt(r(-423, -435, "D50U", -443, -447)) / 11) === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Xx, 148616 + -74818 * 3 + -33 * -9113);
async function K1() {
  const x = {};
  x[n(646, 628, 624, "v]hu")] = dc;
  function o(c, d, g, C, l) {
    return ue(d - 615, g);
  }
  x[n(612, 630, 631, "uh6p") + "h"] = 256;
  const t = await window[n(641, 629, 639, "Xjpm") + "o"][i(1032, 1044, "JYny") + "e"][i(1009, 992, "D50U") + a(892, 899, 888, 916, "BMxx") + "y"](x, !0, [o(867, 856, "aDt2") + "pt", i(1003, 1015, "O#&9") + "pt"]), e = Uint8Array[n(612, 623, 613, "LdYW")](Array(1 * 8738 + 21 * 323 + -7 * 2215)[a(876, 894, 877, 867, "pUv0")](6551 + -1493 * -3 + -5515 * 2));
  function n(c, d, g, C, l) {
    return ue(d - 383, C);
  }
  const r = window[i(1002, 1023, "8D*t") + "o"][n(618, 626, 639, "FFq0") + n(626, 625, 604, "(o&y") + n(650, 657, 653, "gEDE")](e);
  function i(c, d, g, C, l) {
    return ue(c - 748, g);
  }
  function a(c, d, g, C, l) {
    return ue(c - 625, l);
  }
  const s = {};
  return s[i(1023, 1020, "7VzA")] = t, s.iv = r, s;
}
async function Z1(x) {
  function o(C, l, h, p, A) {
    return ue(A - -80, l);
  }
  const { iv: t, key: e } = await K1(), n = {};
  n[c(177, 154, 194, "pUv0")] = dc;
  function r(C, l, h, p, A) {
    return ue(C - -483, p);
  }
  n.iv = t;
  function i(C, l, h, p, A) {
    return ue(C - -424, A);
  }
  const a = await window[c(200, 192, 192, "BMxx") + "o"][s(-162, "Xjpm", -190, -179, -173) + "e"][o(225, "(22^", 177, 215, 201) + "pt"](n, e, x);
  function s(C, l, h, p, A) {
    return ue(A - -438, l);
  }
  function c(C, l, h, p, A) {
    return ue(C - -71, p);
  }
  const d = await window[i(-185, -191, -208, -171, "LdYW") + "o"][i(-160, -178, -156, -145, "aDt2") + "e"][c(195, 202, 180, "^1ro") + r(-221, -216, -221, "uh6p")](s(-146, "OrIm", -182, -156, -165), e), g = {};
  return g[c(185, 165, 193, "(o&y") + "ge"] = a, g[s(-193, "KvZW", -165, -188, -186)] = d, g.iv = t, g;
}
function Mx() {
  const x = ["W6X3WQ5NqXWrDW", "z8kPWPNdJmoks8k8WRKPW53dKq", "jSkYWOlcUW1AW7JcSNldHK5fWO0", "tSkRqmkAW69nW5bB", "wgBcSLxcICo8wJxcU8oQcW8", "drxdPXTS", "oIFdMff7WRH9WQG", "lmo8W4RcICkE", "pmk3mKOJW5RdOfq", "W73dLxfAW4HjW4/dQexdNmkX", "W5BdLWiIbCobW7VdLLeAWQ8", "bu3cLhVdLq", "FhtcPmkkbSoNFCk7ySk7", "lLCcnCo4y8o0WOnzpdi", "WPBdQSkgd8oA", "emk4mSo7WOJdJduHnI17", "CSotWROyqSkCWOahhJhdJCoGWO7dUa", "WP3dO8kvpSo2", "W4yFavVcQ8olFuRdOqldTrq", "AwhdRNy", "u0hdGZXawZC+", "AY7dOchcUsPfWOqoWOJcVCoM", "WQNcLsyoWR0", "mxZcUxtdUq", "raenz0TpFX5IW44", "y8k4WQVcKSkxxWXQW7hcHCkWWRm", "jmk4WOFcVa1FW7JdRhldIvfYWRxdPq", "FNFdH8o9p8oRACk/", "kCozW5PzWR7dIJzN", "g3xdKSk4f8k1jXpcMmkTdq", "cLlcI8kkEYRdQmkEbmoQg8khfq", "guBcUGGXh25k"];
  return Mx = function() {
    return x;
  }, Mx();
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return De(g - 332, c);
  }
  function e(s, c, d, g, C) {
    return De(s - -205, d);
  }
  function n(s, c, d, g, C) {
    return De(C - 868, g);
  }
  const r = x();
  function i(s, c, d, g, C) {
    return De(c - 865, s);
  }
  function a(s, c, d, g, C) {
    return De(s - -259, C);
  }
  for (; ; )
    try {
      if (parseInt(i("kunE", 1350, 1353, 1348, 1362)) / 1 * (parseInt(i("oSBp", 1365, 1366, 1366, 1374)) / 2) + parseInt(i("#j20", 1343, 1345, 1328, 1351)) / 3 * (-parseInt(n(1372, 1389, 1362, "lqJS", 1374)) / 4) + -parseInt(t(837, "(!9e", 828, 822, 813)) / 5 * (parseInt(e(294, 300, "1@tY", 310, 301)) / 6) + -parseInt(e(279, 292, "1@tY", 273, 288)) / 7 * (parseInt(n(1369, 1361, 1382, "K0K1", 1369)) / 8) + parseInt(t(847, "z^Mg", 841, 835, 830)) / 9 * (-parseInt(e(277, 290, ")E87", 262, 284)) / 10) + parseInt(a(238, 229, 247, 248, "$e1C")) / 11 + parseInt(i("lqJS", 1363, 1378, 1372, 1353)) / 12 === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Mx, 359015 + -1 * 963601 + -13 * -116190);
function De(x, o) {
  const t = Mx();
  return De = function(e, n) {
    e = e - (-982 * 5 + 6013 + -626 * 1);
    let r = t[e];
    if (De.UoQAIj === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, W = 0; u = g.charAt(W++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      De.IbUAGU = d, x = arguments, De.UoQAIj = !0;
    }
    const a = t[-252 * -36 + -4 * -1307 + 25 * -572], s = e + a, c = x[s];
    return c ? r = c : (De.oipAjN === void 0 && (De.oipAjN = !0), r = De.IbUAGU(r, n), x[s] = r), r;
  }, De(x, o);
}
function R1(x) {
  const o = new ArrayBuffer(x[t(1172, 1174, 1177, "pux2") + "h"]);
  function t(r, i, a, s, c) {
    return De(r - 689, s);
  }
  const e = new Uint8Array(o);
  for (let r = 163 * 45 + 6288 + -13623, i = x[t(1184, 1191, 1171, "kvtU") + "h"]; r < i; r++)
    e[r] = x[n(977, 976, 989, 983, "ZFya") + n(965, 949, 966, 961, "zYVh")](r);
  function n(r, i, a, s, c) {
    return De(r - 488, c);
  }
  return o;
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return he(d - -529, C);
  }
  function e(s, c, d, g, C) {
    return he(C - -592, g);
  }
  function n(s, c, d, g, C) {
    return he(C - 360, s);
  }
  function r(s, c, d, g, C) {
    return he(d - -180, c);
  }
  const i = x();
  function a(s, c, d, g, C) {
    return he(c - 907, g);
  }
  for (; ; )
    try {
      if (parseInt(n("AMip", 736, 571, 711, 681)) / 1 * (parseInt(r(163, "o!!0", 266, 166, 352)) / 2) + -parseInt(a(1145, 1240, 1133, "#snV", 1268)) / 3 * (parseInt(a(1123, 1239, 1298, "TR!s", 1128)) / 4) + -parseInt(r(309, "IrtV", 255, 314, 336)) / 5 * (-parseInt(a(1120, 1223, 1165, "o!!0", 1255)) / 6) + -parseInt(t(10, 33, -50, 59, "j#SV")) / 7 + -parseInt(t(-72, -133, -178, -205, "A%6W")) / 8 * (-parseInt(n("NZAm", 853, 748, 844, 775)) / 9) + parseInt(n("NZAm", 687, 761, 677, 712)) / 10 * (parseInt(e(-222, -100, -76, "3ZY8", -123)) / 11) + -parseInt(n("Pd2*", 687, 662, 684, 673)) / 12 * (parseInt(a(1075, 1193, 1152, "#snV", 1189)) / 13) === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(jx, 10 * -12745 + -388409 + 32 * 22793);
function jx() {
  const x = ["w8kcW6fDW4q", "WR3cGf/dKmoO", "qSouBSo9lW", "WRWdzMzC", "WPHEW59HyW", "nmk5W7njWR8", "A8kLW7j0W5O", "bSkODSo1W7y", "WOWVemo5DSkOymkOW5iYW5NcT8oG", "WPJdRu99W4y", "qCkrWPpcVsa", "ma7dVLFdRSoVwSkqW67cMmkUva", "rmoQaCkVWOm", "cuz2ibS", "W7hcJMJcUW", "narussm", "pmodWRG3W5eSW6NcMSkdeSo0WRa", "WQGWBeNdPG", "WQTcEvJcP8kNwColmciTWRi", "WPPiW514iW", "W4VcQCoJW6lcGG", "x8kmz8kfWQ4", "W7DfsSknda", "vSkunaXv", "AJRdPmkFCW", "dvJcJ8kylqFdH8kZjCkIW7NdKq", "n8kVj8kYWOW", "WRZdKvNcRmkfgN5xW549w8ofCq", "W7qBfuJdUdHJ", "WQhcHmoRW5/cOq", "WOy9W54YW4m", "W7yKDdhdMq", "kLr6cWG", "W5S+jvFdNa", "Da3cQMldOa", "W7q2WRxdKCkD", "W4Gtn2BcTG", "W6tcVvdcICkJ", "rSoGWPRdVG3dH8of", "oSomW7FcKSon", "W40+DvxdIa", "omoXW4xdPCoi", "WOuDW7iAW6m", "W4xdIKThxa", "WQ7cQ8koWRNcQW", "W6iZW6W1W5W", "W4NdMSkmW5JdNIbQWQ7cLZZdUq", "WP5BFslcQ8krchW8W7xcJhm", "uc7cTGX2", "CCo7WPSohq", "WPJdH3uDW5q", "W6NdOsVdMCod", "hrJdKSoXza", "W73dPf0TW7W", "b8oidbxcSq", "W6r2WQPhra", "CSk0W5XeW7O", "WQRcHguSW6i", "FSkyW63cI3y", "rCkjWRNdGdBdHSoEWRO", "W6FdRqxdGCk6", "d8kxhtNdNG", "v8kWltr/", "vW/dLxpdSW", "q8oPpCkEWOm", "bNJdT8o2aG", "W53dIs7cVmkz", "xqddJCoSqG", "jSkWW7HDWOW", "f8kshmkdW5K", "wZxcGJ9l", "WOJcVCoUWR7dNG", "r8oKg8kGW7C", "WRZcImo9WPJcTG", "gmousCobW4m", "W5iEecBdJq", "m8o2W7VcT8oE", "WRdcIbSwcSkPs8oczWmZWPpcHa", "amoOWRFdLxS", "oSofW7tcG8op", "smkNW4FcMei", "WQhdJ8ksiCkv", "W4VcOZJdISkm", "W4mYD0VdMa", "A8kwW7VcPIu", "W5RcTWRcRSoM", "dsSIqci", "omo7gHRdPq", "cSk9W4e2WR0", "s3evW7ZdIG", "kLRcMCoyFG", "WOiJuKH0", "hCo0FK7dIq", "WRBcGSoEWRNcUa", "W6ZdJCo5W7tcUG", "rCo0WQVdHGm", "W6KdngNcIq", "o8o+W5BcTmok", "jSoEdmkenW", "yNisWRNdIa", "W5iPWQddL8kE", "ANaFWPBdSW", "iSkvgJNdGG", "W5/cILFcICkt", "rSohW4/cICkh", "WPdcOSkiWPZcGW", "W5VdUmoPW6ZcPa", "xgRcM21J", "WPJdIrudWQi", "sfeBW7ZdSW", "WPybfNBdPSoXbW", "W7PgWQjm", "wa/cOwJdUW", "idunyW", "sYG3WQxcNq", "ASkMW7tcNsO", "ECoLWRCFeW", "FmoUgsZdNG", "WPJdHeGEW54", "BSkcW4dcM38", "W4ScfJRdSW", "bM7dIMWsW70JWPTCcGRdR8oo", "gSkGxSoHW5i", "rHVcT27dMW", "WOuVy8kMmq", "WP3cR08hWPO", "tcNdQ8oRCa", "W7BdVs/dQmoa", "uSkZpCkWWR4", "ugFcMq3cLG", "W4rJyhDAs2VdPa", "W6eSWRjlW5K", "WO13WO47aG", "DSkEW6BdVv0", "W5ddRmomW6ZcUa", "WR3dSe8H", "WR7cTvqvWOu", "ECotWQuSbG", "BvNdU8o7Ea", "W6fjyL0g", "BmkWW68HW5u", "m2FcTq/cMSk/yW", "n8o0W5VcLmox", "y8kXDCkAW7q", "pCkSlr15", "p1zyaay", "W6KPWRtdOCkp", "c8o7gaRdHG", "eCorW6HRWRe", "iSo5WOWZpG", "W5fTWO18rW", "emoaWQ7dPHO", "WOWSfSo/DCo/nmk+W7uNW4C", "W7JdOW/dPCkN", "W4RdTmoEW7FcPG", "rCoDWO5ooW", "umoTW6ldLCoH", "WQvTWRPirq", "imoDW6/cKmog", "dSovW5JcPCoO", "l8kDW71dW5hcJvi", "W6yncfxcTq", "kH/cICkhDG", "W6aKWQ3cISkr", "ewhdKwldJCkXBmoWWR0", "lmoBWPRdPdW", "W5hcMe/cLCkm", "WQpcJCo6m8ky", "ymoplb1T", "cdhdUCoRAq", "oNBcH8kZyG", "b0vQns4", "nmohW7HsWRi", "bmoxkCoGW5a", "WPZcJu7cVmojdKSxW6XAkmk6rW", "W5FcKtVdImoU", "qfLoWPVcMW", "ASoAW5FcHmoG", "WQKYre7dPa", "W4vrWPz9va", "W4vfeSkNfq", "W5FdKM53aa", "bc9yxbK", "WQ/dTeSQ", "rmolW4xcGCkl", "W6CtW6PmW4u", "yuS4utuKqt8", "wt7dR8oBta", "WPiYj0JcJG", "smodW6xcTee", "cmoonsNdGa", "W53cT3tcOmoY", "W5ZdKZZdPmoQ", "nmolW5hcVCog", "W4WLjbNdKa", "tuzjWQxdKq", "W4rEB14F", "WPlcI8oPW5xcQq", "WQavzZhdQG", "W5JdReVcJSkv", "AqOUxc4", "ACkMomkd", "WP7dLW7dNCkK", "W6NdRh3dTSkG", "W4xdVmkzsSk5", "W7qFbvpdUq", "ztekDde", "m2VcVdFcOG", "s8k6tXXK", "WQTcDfNcP8kIbCo5dtKFWRdcQW", "gw8IWPFcJa", "zCombCkCW4K", "A8oQW4tcR8o0", "n8kPtaXB", "EtxcR21d", "WPZdMCoJWRtcIG", "nSkXeb1n", "W7tdSs9pW6C4mY1oecGU", "xCkrmCkVWOa", "obyMsW0", "W7zhfKVdHW5fWOm", "D8kqd8kmWRa", "W743kYBcGW", "W5igm3FcQq", "WO7cJCkkWPZcTG", "WOTJW5TmmG", "W7SLahddHq", "W4fHWQTqrW", "W7Plzmkrla", "W7bMaGpcHa", "WPr/W4rykW", "BrqRlGBdSmkpwNu", "W41OW7DUma", "W6yyW5lcJ8kM", "p3yOWQNdNCk0W5e", "p8oHW4xcGSk4", "W6eZWOddICkm", "p8ozW4dcP8kM", "mCoVW5BdHXK"];
  return jx = function() {
    return x;
  }, jx();
}
function he(x, o) {
  const t = jx();
  return he = function(e, n) {
    e = e - (-251 * -31 + 3 * 2490 + -14998);
    let r = t[e];
    if (he.fQuQVE === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, W = 0; u = g.charAt(W++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      he.vLavBf = d, x = arguments, he.fQuQVE = !0;
    }
    const a = t[1965 * 2 + 4538 + -8468], s = e + a, c = x[s];
    return c ? r = c : (he.WdGATT === void 0 && (he.WdGATT = !0), r = he.vLavBf(r, n), x[s] = r), r;
  }, he(x, o);
}
function P1() {
  const x = c(113, "&hAq", 0, 61, 47) + o(323, "j#SV") + s(-710, -601, -659, -694, "QS)t") + c(87, ")xGI", 29, 13, 50) + s(-490, -456, -376, -602, "wFt4") + n(472, "@Wv2", 487) + s(-625, -554, -711, -602, "iXWS") + s(-493, -602, -401, -556, "fAOK") + n(396, "G699", 459) + o(541, "N&ew") + o(319, "avjx") + i("YmjT", 1114) + s(-662, -705, -640, -628, "EcFD") + o(365, "RHoU") + s(-552, -648, -441, -618, "3ZY8") + o(370, "1shv") + c(-121, "iXWS", -81, -155, -47) + n(482, "QS)t", 418) + o(342, "B^)9") + c(52, "&hAq", 65, 83, -19) + n(465, "A%6W", 430) + i("iXWS", 1238) + o(393, "NZAm") + c(13, "A%6W", 103, -38, 49) + c(69, "A%6W", -70, 9, -27) + n(324, "JqiZ", 336) + o(336, "A%6W") + o(316, "g%90") + n(351, "%FqS", 378) + n(264, "KafA", 330) + i("1shv", 1249) + c(-26, "Pd2*", 4, 46, -34) + i("D$A$", 1101) + s(-497, -551, -586, -448, "avjx") + c(97, "cWao", -7, -22, -2) + o(345, "A%6W") + c(-61, "@Wv2", -160, -124, -68) + o(532, "RHoU") + i("*(Xt", 1256) + o(361, "TR!s") + n(503, "g%90", 436) + n(323, "o!!0", 305) + c(-123, "*(Xt", -90, 49, -32) + c(-60, "B^)9", 67, -48, -35) + o(531, "EcFD") + c(64, "[w[$", 47, 152, 128) + c(43, "oEOE", -16, -106, 13) + c(-80, "e!sK", -112, 15, -50) + c(32, "&hAq", 199, 174, 110) + c(14, "iXWS", 24, 102, -3) + s(-603, -680, -713, -672, "oEOE") + n(416, "j#SV", 397) + n(341, "1shv", 395) + c(-56, "NZAm", -114, -67, -69) + n(398, "j#SV", 403) + n(566, "*(Xt", 506) + c(-16, "koRK", -167, -201, -81) + i("vhQX", 1205) + s(-639, -552, -665, -635, "YmjT") + i("3ZY8", 1242) + s(-579, -565, -555, -549, "YmjT") + c(-132, "A%6W", 61, 27, -12) + c(-2, "cWao", -77, -84, 5) + n(526, "A%6W", 410) + s(-557, -445, -473, -529, "iXWS") + i("wFt4", 1172) + n(591, "e!sK", 477) + c(213, "YmjT", 30, 63, 105) + c(153, "Jrj*", 147, 60, 42) + s(-555, -452, -642, -652, "vhQX") + s(-536, -655, -478, -592, "bsfS") + i("KafA", 1262) + n(258, "7]9H", 360) + n(401, "N&ew", 380) + i("g%90", 1239) + i("cWao", 1247) + s(-595, -525, -553, -482, "1shv") + c(-5, "7]9H", -15, -119, -82) + o(415, "@Wv2") + s(-604, -570, -536, -497, "A%6W") + c(-82, "%FqS", -98, -112, -102) + n(231, "fAOK", 317) + n(399, "bVu#", 500) + i("JqiZ", 1295) + s(-635, -697, -746, -520, "NZAm") + o(360, "e!sK") + i("Pd2*", 1254) + s(-538, -572, -538, -571, "[GSM") + o(339, "B^)9") + o(496, "f]AU") + o(321, "2iwj") + o(362, "Jrj*") + c(213, "G699", 58, 31, 117) + s(-547, -482, -594, -447, "B^)9") + s(-568, -557, -682, -589, "koRK") + c(1, "7]9H", -89, -30, 6) + c(-23, "*(Xt", 88, 91, 82) + o(411, "j#SV") + i("%]^L", 1220) + o(363, "IrtV") + s(-550, -608, -459, -487, "f]AU") + s(-518, -493, -591, -445, "@Wv2") + n(621, "TR!s", 512) + s(-533, -532, -512, -498, "%FqS") + o(310, "1shv") + c(-84, "B^)9", -31, 14, -30) + o(518, "%FqS") + s(-717, -679, -707, -650, "A%6W") + s(-522, -559, -607, -517, "j#SV") + s(-619, -649, -506, -580, "e!sK") + o(313, "TR!s") + o(489, "o!!0") + i("7]9H", 1298) + n(584, "j#SV", 464) + s(-587, -531, -535, -548, "RHoU") + s(-528, -631, -519, -599, "cWao") + i("[GSM", 1285) + s(-559, -656, -507, -470, "[GSM") + c(-28, "1shv", 117, -16, 59) + c(-61, "1shv", -47, -17, 28) + i("fAOK", 1216) + o(311, "cWao") + i("%]^L", 1300) + c(-107, "KafA", -50, -67, -65) + o(505, "EcFD") + o(356, "[w[$") + s(-574, -498, -678, -592, "g%90") + c(112, "cWao", 101, -41, 31) + s(-508, -584, -583, -411, "QS)t") + n(439, "vhQX", 368) + s(-671, -555, -581, -677, "KafA") + i("qsS0", 1182) + c(43, "bVu#", 17, 26, -62) + s(-723, -780, -691, -839, "&hAq") + i("fAOK", 1097) + i("%FqS", 1209) + c(-21, "7]9H", 12, -26, -87) + s(-605, -655, -714, -528, "koRK") + o(522, "%]^L") + c(-82, "JqiZ", 53, 88, 22) + i("vhQX", 1085) + s(-610, -694, -572, -507, "qsS0") + c(31, "KafA", -146, -6, -70) + n(342, "3ZY8", 400) + n(498, "JqiZ", 488) + n(616, "g%90", 513) + s(-601, -685, -540, -590, "G699") + n(347, "G699", 344) + o(493, "1shv") + s(-578, -569, -494, -651, "%FqS") + o(464, "[w[$") + i("JqiZ", 1225) + c(154, "cWao", 125, -82, 36) + i("#snV", 1079) + i("RHoU", 1278) + i("wFt4", 1160) + s(-711, -659, -795, -637, "&hAq") + n(421, "f]AU", 394) + n(332, "oEOE", 309) + s(-686, -600, -725, -638, "Pd2*") + s(-586, -641, -663, -510, "g%90") + i("bVu#", 1276) + o(539, "@Wv2") + n(405, ")xGI", 431) + o(516, "AlXU") + o(375, "2iwj") + c(-144, "avjx", 37, -68, -39) + o(537, "AlXU") + s(-608, -652, -540, -663, "*(Xt") + n(464, "oEOE", 401) + n(362, "EcFD", 369) + s(-592, -693, -694, -512, "NZAm") + i("*(Xt", 1078) + i("koRK", 1178) + s(-640, -688, -753, -554, "bVu#") + n(342, "7]9H", 314) + o(320, "&hAq") + o(372, "oEOE") + n(305, ")xGI", 357) + i("wFt4", 1175) + o(350, "YmjT") + n(513, "RHoU", 405) + s(-531, -568, -638, -595, "7]9H") + s(-718, -726, -832, -771, "bsfS") + c(-98, "3ZY8", -75, -30, -22) + o(509, "[GSM") + s(-561, -597, -454, -621, "g%90") + o(540, "Pd2*") + o(445, "TR!s") + o(333, "AlXU") + i("bVu#", 1230) + s(-677, -662, -624, -617, "[w[$") + o(399, "%FqS") + o(436, "AlXU") + s(-573, -563, -533, -475, "cWao") + i("G699", 1273) + n(579, "wFt4", 468) + n(201, "avjx", 303) + o(442, "TR!s") + n(372, "#snV", 320);
  function o(d, g, C, l, h) {
    return he(d - 55, g);
  }
  const t = window[o(543, "iXWS")](x), e = window[n(507, "iXWS", 520)](t);
  function n(d, g, C, l, h) {
    return he(C - 32, g);
  }
  const r = R1(e);
  function i(d, g, C, l, h) {
    return he(g - 825, d);
  }
  const a = {};
  a[s(-564, -587, -654, -591, "@Wv2")] = uc, a[i("Wb1P", 1144)] = ll;
  function s(d, g, C, l, h) {
    return he(d - -980, h);
  }
  function c(d, g, C, l, h) {
    return he(h - -361, g);
  }
  return window[i("%FqS", 1289) + "o"][o(494, ")xGI") + "e"][i(")xGI", 1284) + n(523, "fAOK", 450)](n(423, "iXWS", 472), r, a, !0, [i("bVu#", 1127) + "pt"]);
}
async function V1(x) {
  const o = await P1(), t = {};
  t[e("B^)9", 1191, 1105, 1333, 1216)] = uc;
  function e(r, i, a, s, c) {
    return he(c - 949, r);
  }
  function n(r, i, a, s, c) {
    return he(i - -164, a);
  }
  return window[e("[GSM", 1334, 1362, 1262, 1303) + "o"][n(128, 232, "IrtV") + "e"][e("KafA", 1243, 1167, 1170, 1273) + "pt"](t, o, x);
}
function Jx() {
  const x = ["WRO0WQqmWOvMoLVcGMFcK3i", "acfbzZpdG2qK", "uXhcRCkOW47dIXuxg8kHW4HIWRG", "W68dWQbqk8kNBCoNpq", "WRO1WQqlWOnJhvVcN1JcOK8", "W40fwgtcLg7dLKZcPNJdRN8", "W7VdJCoDqSoGv8o2WOLfumkoWQFdGq", "iSoBl8kGWR3dVmksW68", "FmkEoSkvrq4LW5tcKfjWW70", "tSk+WQdcPYmAW4n2", "cSkZWPpdOLz6nLy", "mNqIWOFcKf55C8kaW5OJW6q", "ESovW6C3WQvPAZy9cCkNW7y", "W5BdQCkCjSkWmCkoW43cPSoQWQ5dW7KB", "iSoyhmkPWO3dH8kaW6e", "WR80W5jQW4iGjxC", "W5FdVmkSWPDeWO/dLuHdW4W3WPq", "amkQWPO", "WRJcQSoTWPzkCL3cMwZcKqb9", "CmkDpmoNc2OcW6JcPW", "WQiRoSk3kmoqWQRcLCoRWP5TW7a", "duldR8oJWPy", "W7X8oYPFgmknyHv7WR5vnmkY", "W796osrreSonkYzRWP5r"];
  return Jx = function() {
    return x;
  }, Jx();
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return Ue(C - -729, d);
  }
  function e(s, c, d, g, C) {
    return Ue(d - 69, g);
  }
  function n(s, c, d, g, C) {
    return Ue(s - -7, c);
  }
  function r(s, c, d, g, C) {
    return Ue(s - -975, g);
  }
  const i = x();
  function a(s, c, d, g, C) {
    return Ue(c - -871, g);
  }
  for (; ; )
    try {
      if (-parseInt(t(-276, -263, "gjrl", -285, -275)) / 1 + -parseInt(t(-281, -269, "#DPe", -281, -276)) / 2 * (parseInt(n(454, "YEE3", 461, 466, 464)) / 3) + -parseInt(n(457, "k^0R", 451, 452, 461)) / 4 * (-parseInt(e(522, 530, 531, "Ly(S", 522)) / 5) + -parseInt(n(449, "8T!X", 447, 460, 437)) / 6 + -parseInt(a(-437, -425, -433, "p8Il", -415)) / 7 + parseInt(a(-421, -421, -431, "PU9t", -431)) / 8 * (-parseInt(r(-518, -529, -514, "3G15", -527)) / 9) + parseInt(t(-286, -269, "#DPe", -284, -277)) / 10 * (parseInt(n(448, "7ntK", 456, 442, 451)) / 11) === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Jx, 357192 + -131980 * -7 + -574020);
function Ue(x, o) {
  const t = Jx();
  return Ue = function(e, n) {
    e = e - (-1 * -7483 + -2901 + -4136);
    let r = t[e];
    if (Ue.kgrzZx === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, W = 0; u = g.charAt(W++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      Ue.qKZAGe = d, x = arguments, Ue.kgrzZx = !0;
    }
    const a = t[1 * -6917 + -2361 + 9278 * 1], s = e + a, c = x[s];
    return c ? r = c : (Ue.lLHwuK === void 0 && (Ue.lLHwuK = !0), r = Ue.qKZAGe(r, n), x[s] = r), r;
  }, Ue(x, o);
}
async function T1(x) {
  function o(a, s, c, d, g) {
    return Ue(a - 424, s);
  }
  const { iv: t, key: e, message: n } = await Z1(x), r = await V1(e), i = {};
  return i[o(871, "zzfY")] = r, i.iv = t, i[o(875, "8T!X") + "ge"] = n, i;
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return Ke(g - 224, d);
  }
  function e(s, c, d, g, C) {
    return Ke(d - 411, s);
  }
  function n(s, c, d, g, C) {
    return Ke(d - -252, g);
  }
  function r(s, c, d, g, C) {
    return Ke(c - -137, g);
  }
  function i(s, c, d, g, C) {
    return Ke(d - 797, s);
  }
  const a = x();
  for (; ; )
    try {
      if (parseInt(e("X!Xe", 661, 650, 655, 668)) / 1 * (-parseInt(i("9X7^", 1067, 1058, 1071, 1052)) / 2) + -parseInt(t(460, 477, "s6rx", 474, 472)) / 3 * (parseInt(t(466, 444, "kSgX", 457, 471)) / 4) + -parseInt(i("MDDg", 1034, 1029, 1021, 1027)) / 5 * (parseInt(r(111, 107, 114, "5*Ht", 99)) / 6) + -parseInt(t(469, 498, "kSgX", 487, 484)) / 7 + -parseInt(t(475, 482, "3hxM", 476, 459)) / 8 * (-parseInt(r(89, 104, 100, "h2]r", 100)) / 9) + -parseInt(n(-39, -25, -22, "h2]r", -18)) / 10 * (parseInt(i("cpM7", 1068, 1056, 1064, 1041)) / 11) + -parseInt(n(-9, 11, 3, "HQ2n", 0)) / 12 * (-parseInt(r(94, 110, 102, "nKl8", 109)) / 13) === o) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(_x, 525577 * 1 + -436190 + 288254);
function Ke(x, o) {
  const t = _x();
  return Ke = function(e, n) {
    e = e - (33 * 13 + 41 * 83 + -3604);
    let r = t[e];
    if (Ke.VcEWuu === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, W = 0; u = g.charAt(W++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      Ke.AcEWKd = d, x = arguments, Ke.VcEWuu = !0;
    }
    const a = t[9210 + 14 * 7 + -9308], s = e + a, c = x[s];
    return c ? r = c : (Ke.ZOknvM === void 0 && (Ke.ZOknvM = !0), r = Ke.AcEWKd(r, n), x[s] = r), r;
  }, Ke(x, o);
}
function _x() {
  const x = ["WPldQSoWamokW6PGWQ0a", "wsfyumoDWOddKd8", "emofqNHbrKldM2VdH8kX", "WOBcLXhdPSog", "g8oft3TciaVcHxJdO8kKWP/dGb8", "bhVdNq", "g8oJy8ksW63dLmk4WO4VtmoSWPldJW", "W4NcLHC", "rf/cJtHInSoGsCoZ", "hYRcK31tguNdV2LRAalcTa", "iSoyqSk+AJm7fCoH", "imooaeq", "t8knhLRdTCoxWO3dHs5hsG/cGW", "cx/dMq", "rmkMm8ohoG", "dmojWRCVESoJWRL4WQddKmkpd2G", "WPNdIuNcQCo1WR4cc8kYW47cMW", "W7FdP8kasJxcJtO", "wmo6W68qWRecW797qsFdUxxcGG", "s8kkgLldSSkRW5FdHZT0zq", "WPFcJb7dVum", "W7ufW4yRW45hWOWk", "W5pdMuRdMLm7W6aJW7y", "W7ieWPDQWR96WPiyx8kTWOq", "wSkJmmoEWRy", "WROXWRtcOCkMyWnuW7ZcGa", "tSkwWOGsW4VcV2Pv", "WPldIuhcRmo3W5Hol8kTW5/cIc/cKq", "WQJdPhFdPhOZW7P2kCk+W7mHx1e", "WPhdQmkbvSko", "WQBdH0mVWQDaW6y", "W4iwWQzn", "WOhdT8oUCKSwWQRdIW", "ESo5ySoxW4ulWQyA", "kJZdNXHduHJdMSoqWP4", "W55oWQtdVCot", "WP8woCkJWQqAbmkL"];
  return _x = function() {
    return x;
  }, _x();
}
async function E1(x) {
  const o = await window[e(667, 659, "BgQr", 661) + "o"][e(643, 648, "S8^)", 650) + "e"][r(290, 319, 325, "rK7I", 308) + "t"](t(438, "9X7^", 421), x);
  function t(i, a, s, c, d) {
    return Ke(s - 193, a);
  }
  function e(i, a, s, c, d) {
    return Ke(c - 412, s);
  }
  function n(i, a, s, c, d) {
    return Ke(a - 174, i);
  }
  function r(i, a, s, c, d) {
    return Ke(d - 65, c);
  }
  return Array[n("k(om", 419)](new Uint8Array(o))[n("%bCj", 438)]((i) => i[e(675, 676, "aopq", 666) + t(442, "h2]r", 451)](2 * -3212 + -6524 + 12964)[t(442, "8M0i", 427) + r(316, 307, 329, "iLaf", 321)](2, "0"))[n(")1]z", 436)]("");
}
function ct(x, o) {
  var t = Qx();
  return ct = function(e, n) {
    e = e - (-6116 + 37 * -233 + -47 * -324);
    var r = t[e];
    if (ct.OQzZSg === void 0) {
      var i = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", h = "", p = 0, A, u, W = 0; u = g.charAt(W++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (var H = 0, N = l.length; H < N; H++)
          h += "%" + ("00" + l.charCodeAt(H).toString(16)).slice(-2);
        return decodeURIComponent(h);
      }, a = function(g, C) {
        var l = [], h = 0, p, A = "";
        g = i(g);
        var u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (var W = 0; W < g.length; W++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      ct.kvCYNw = a, x = arguments, ct.OQzZSg = !0;
    }
    var s = t[-5301 + -2027 * 1 + 7328], c = e + s, d = x[c];
    return d ? r = d : (ct.BRwVTm === void 0 && (ct.BRwVTm = !0), r = ct.kvCYNw(r, n), x[c] = r), r;
  }, ct(x, o);
}
function Qx() {
  var x = ["W6lcNJTXAX4d", "fCkhltappSk+iCkJW7i", "WPX6WONcISkhW6JdRa8", "W4D6W7ddImkwW4xcV8kTW40wW6i", "xbiSa17dVfVdNCkruq", "utzABbZcG8oDmq", "vdi1oMJdNCkammkXWRddJfFdNG", "fHWcW4vckSkcW6NcSCkIC3u", "bCoZWP0jdHJdRmkg", "WOxcMSoxuCo7WOr0", "lSksW6hcUSoCWQldRmohWORcJmkckG", "W5hdIrjNDSkEeSokWRXf", "aCkLnatcNmovW5lcTXWn", "WQGQBazqW4nvW40", "EhbqW5VcNwhcUCo1WOy0cmovESoz", "WQtdSwS9WRNcHSoUW4ldMCoWsG", "WOtdS8k0jmkTW40jW5RdHCodWPKNWRu", "WOhdTmk1l8kQW4ulW4ddM8oDWQaaWPu", "W45cWPdcSCoro8k7WOvpdmkhfa", "fCkaidDWxCoHCCkkW4hdUtTBzq", "W6jEnmkBF8kToSkY", "wmklW47cUvCPW442", "WQhdUMy8WR/dOmkmW6NdVmotC1jy", "w8kUWR/dNCkjW7OUWR7dJGP6W4a"];
  return Qx = function() {
    return x;
  }, Qx();
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return ct(C - -580, g);
  }
  function e(s, c, d, g, C) {
    return ct(d - 111, g);
  }
  function n(s, c, d, g, C) {
    return ct(c - -375, g);
  }
  function r(s, c, d, g, C) {
    return ct(d - -760, c);
  }
  for (var i = x(); ; )
    try {
      var a = -parseInt(n(119, 128, 124, "aHuf", 131)) / 1 * (-parseInt(n(113, 124, 120, "SPVT", 116)) / 2) + -parseInt(n(122, 130, 130, "Z@]X", 132)) / 3 + parseInt(t(-76, -56, -63, "KjR*", -67)) / 4 * (parseInt(e(626, 618, 615, "]NUB", 605)) / 5) + -parseInt(n(143, 136, 126, "]NUB", 126)) / 6 + parseInt(e(630, 630, 623, "]NUB", 621)) / 7 * (parseInt(r(-262, "kMu#", -263, -269, -274)) / 8) + -parseInt(n(123, 135, 141, "PM$C", 134)) / 9 * (parseInt(e(616, 613, 617, "!!db", 611)) / 10) + parseInt(r(-258, "HND!", -246, -255, -235)) / 11 * (parseInt(n(113, 117, 105, "4d$B", 126)) / 12);
      if (a === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Qx, 589142);
class L1 {
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
    J(this, "imagesWithTimestampForDuplicateDetection", new oi(dl));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await O1() ? wa.SIMD : wa.NO_SIMD;
  }
  async init({ thresholds: o, wasmDirectoryPath: t }) {
    this.setThresholds(o), await this.initDetector(t);
  }
  setSamVersion(o) {
    if (!o || !this.areVersionsCompatible(o))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new xe("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = o;
  }
  areVersionsCompatible(o) {
    return o === hl;
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
    if (!this.thresholds) throw new xe("Thresholds for " + this.className + " are not provided");
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
    const e = o.length / fl, n = e / 2, r = o.length / (1 * -1689 + 3213 * 3 + 3974 * -2), i = await E1(o.slice(r - n, r + n)), a = {};
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
    var a = "./this.program", s = !(-149 * -54 + -1822 * 1 + -6223), c = !(2427 + 2 * -1213);
    s = typeof window == "object", c = typeof importScripts == "function";
    var d = "", g;
    (s || c) && (c ? d = self.location.href : document.currentScript && (d = document.currentScript.src), x && (d = x), 3609 + -26 * 337 + 5153 !== d.indexOf("blob:") ? d = d.substr(0, d.lastIndexOf("/") + (1 * -7498 + 603 + 6896)) : d = "", c && (g = function(I) {
      var f = new XMLHttpRequest();
      return f.open("GET", I, !(-313 * 22 + -6561 + 13448)), f.responseType = "arraybuffer", f.send(null), new Uint8Array(f.response);
    }));
    var C = t.printErr || console.warn.bind(console);
    for (i in r) r.hasOwnProperty(i) && (t[i] = r[i]);
    r = null, t.thisProgram && (a = t.thisProgram);
    var l;
    t.wasmBinary && (l = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && rt("no native wasm support detected");
    var h, p = !(-3513 + 14 * 251);
    function A(I) {
      I || rt("Assertion failed: undefined");
    }
    var u = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (-16 * -549 + 7107 + -5297 * 3);
    function W(I, f, b) {
      var y = Ce;
      if (-125 * -18 + 4922 + -7172 * 1 < b) {
        b = f + b - (1 * 7721 + 678 * -8 + -2296);
        for (var S = -5965 * -1 + -1 * 5469 + -496; S < I.length; ++S) {
          var w = I.charCodeAt(S);
          if (32871 + -325 * -69 <= w && 11 * 2341 + 33715 + -193 * 11 >= w) {
            var k = I.charCodeAt(++S);
            w = 5287 * 7 + -9539 + 38066 + ((w & 5746 + 1 * 7331 + 574 * -21) << -3860 + -1 * 2931 + 6801) | k & 7266 + -3 * -3329 + -16230;
          }
          if (-2137 * -4 + 8069 * 1 + -97 * 170 >= w) {
            if (f >= b) break;
            y[f++] = w;
          } else {
            if (-5249 * -1 + 7856 + -291 * 38 >= w) {
              if (f + (7296 * 1 + 4636 + -11931) >= b) break;
              y[f++] = -57 * 169 + -1059 + 1 * 10884 | w >> -299 * 31 + -139 * -5 + 8580;
            } else {
              if (65535 >= w) {
                if (f + (1 * -1300 + 1 * -2566 + 3868) >= b) break;
                y[f++] = 70 + 431 * -23 + 10067 * 1 | w >> 5636 + -2 * -760 + -7144;
              } else {
                if (f + (-3535 + 3 * 125 + -3163 * -1) >= b) break;
                y[f++] = -43 * 1 + 8515 + -294 * 28 | w >> 1009 * 5 + -1764 + 1 * -3263, y[f++] = 794 * 5 + -3503 * 2 + 3164 | w >> -3550 + 2 * -499 + 4560 & -2663 * 1 + 1249 * -1 + 3975;
              }
              y[f++] = 7 * 1333 + -61 * -29 + -10972 | w >> 4910 + -2743 * -1 + 7647 * -1 & -4 * 2177 + -2 * 2639 + 14049;
            }
            y[f++] = -8212 + 278 * 30 | w & -4112 + -4996 * -2 + -5817;
          }
        }
        y[f] = 1 * 5398 + 4784 + -10182;
      }
    }
    var H = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0;
    function N(I, f) {
      for (var b = I >> 1, y = b + f / (-3458 + -348 * 12 + 7636); !(b >= y) && lt[b]; ) ++b;
      if (b <<= -79 * -77 + -3 * 1592 + -2 * 653, -805 * 4 + -8116 + 232 * 49 < b - I && H) return H.decode(Ce.subarray(I, b));
      for (b = 0, y = ""; ; ) {
        var S = Ze[I + 2 * b >> 1];
        if (-367 * -2 + -2939 * 1 + -63 * -35 == S || b == f / 2) return y;
        ++b, y += String.fromCharCode(S);
      }
    }
    function Y(I, f, b) {
      if (void (2396 + -4279 * 1 + 1883) === b && (b = 269609961 * -13 + -193380527 * 21 + 9713404207), -50 * 133 + 7062 + -410 > b) return -1 * -6599 + 1646 + 485 * -17;
      b -= -1984 * 5 + 2794 + 264 * 27;
      var y = f;
      b = b < (-3803 + -7 * -172 + 51 * 51) * I.length ? b / 2 : I.length;
      for (var S = -2 * 4766 + 4399 + 5133; S < b; ++S) Ze[f >> 8574 + -2892 * -2 + -14357] = I.charCodeAt(S), f += -9 * 927 + 3883 + -97 * -46;
      return Ze[f >> 1] = -5681 + 4 * 2368 + -3791, f - y;
    }
    function X(I) {
      return (53 * -123 + 1803 + 2359 * 2) * I.length;
    }
    function K(I, f) {
      for (var b = 1943 * -5 + 2 * -4267 + -231 * -79, y = ""; !(b >= f / (-6584 + -4999 * 1 + 11587)); ) {
        var S = ie[I + 4 * b >> 2];
        if (-2513 * 1 + -6355 + 8868 == S) break;
        ++b, -80006 * 1 + 95581 + 49961 <= S ? (S -= -197 * 78 + -10987 + 91889, y += String.fromCharCode(55296 | S >> -2148 * 4 + -3 * 1466 + -200 * -65, -1 * 71355 + -57 * 858 + 176581 | S & 337 * -17 + 2 * 3353 + 46)) : y += String.fromCharCode(S);
      }
      return y;
    }
    function _(I, f, b) {
      if (void (2 * 18 + 7911 + 9 * -883) === b && (b = -1823986703 + 271311 * 15389 + -33339 * 6111), 4857 + 2 * -3681 + 2509 > b) return -1 * 5780 + 6795 * -1 + 25 * 503;
      var y = f;
      b = y + b - (87 * 41 + 838 * 4 + -5 * 1383);
      for (var S = 6439 + 215 * -19 + -2354; S < I.length; ++S) {
        var w = I.charCodeAt(S);
        if (-94944 + -9714 * -1 + -2 * -70263 <= w && 109731 + -4 * 13097 >= w) {
          var k = I.charCodeAt(++S);
          w = -103291 + -83 * -778 + 104253 * 1 + ((w & -345 * -19 + 4154 * -2 + 2776) << -230 * -22 + -8176 + -1042 * -3) | k & 1023;
        }
        if (ie[f >> 8602 + -886 * -9 + -16574] = w, f += 9 * 355 + 3855 + -13 * 542, f + (2 * -898 + -1223 + 3023) > b) break;
      }
      return ie[f >> 2] = -9922 + 2 * 3459 + 3004, f - y;
    }
    function Ie(I) {
      for (var f = 1 * -5447 + 3 * -393 + 6626, b = 31 * 56 + -9 * -837 + 299 * -31; b < I.length; ++b) {
        var y = I.charCodeAt(b);
        55296 <= y && 66139 + -38278 * 2 + -6160 * -11 >= y && ++b, f += -6930 + -2 * -3467;
      }
      return f;
    }
    var U, fe, Ce, Ze, lt, ie, Re, Ye, ot;
    function Xe(I) {
      U = I, t.HEAP8 = fe = new Int8Array(I), t.HEAP16 = Ze = new Int16Array(I), t.HEAP32 = ie = new Int32Array(I), t.HEAPU8 = Ce = new Uint8Array(I), t.HEAPU16 = lt = new Uint16Array(I), t.HEAPU32 = Re = new Uint32Array(I), t.HEAPF32 = Ye = new Float32Array(I), t.HEAPF64 = ot = new Float64Array(I);
    }
    var pe = t.INITIAL_MEMORY || -20283096 + -8527 * -1441 + -1 * -24772905, Te = {};
    Te.initial = pe / (-53968 + 121058 * -1 + 7 * 34366), Te.maximum = 32768, t.wasmMemory ? h = t.wasmMemory : h = new WebAssembly.Memory(Te), h && (U = h.buffer), pe = U.byteLength, Xe(U);
    var Me = [], be = [], Ee = [], je = [];
    function m0() {
      var I = t.preRun.shift();
      Me.unshift(I);
    }
    var qe = 5292 + -5 * 1787 + -1 * -3643, At = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function rt(I) {
      throw t.onAbort && t.onAbort(I), C(I), p = !(-2213 * 2 + -4 * -1069 + 150), I = new WebAssembly.RuntimeError("abort(" + I + "). Build with -s ASSERTIONS=1 for more info."), n(I), I;
    }
    function Qt(I) {
      var f = It;
      return String.prototype.startsWith ? f.startsWith(I) : f.indexOf(I) === 0;
    }
    function yt() {
      return Qt("data:application/octet-stream;base64,");
    }
    var It = "sam.wasm";
    if (!yt()) {
      var Ut = It;
      It = t.locateFile ? t.locateFile(Ut, d) : d + Ut;
    }
    function ft() {
      try {
        if (l) return new Uint8Array(l);
        if (g) return g(It);
        throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        rt(I);
      }
    }
    function ug() {
      var I = {};
      return I.credentials = "same-origin", l || !s && !c || typeof fetch != "function" || Qt("file://") ? Promise.resolve().then(ft) : fetch(It, I).then(function(f) {
        if (!f.ok) throw "failed to load wasm binary file at '" + It + "'";
        return f.arrayBuffer();
      }).catch(function() {
        return ft();
      });
    }
    function Fn(I) {
      for (; -6333 + 2111 * 3 < I.length; ) {
        var f = I.shift();
        if (typeof f == "function") f(t);
        else {
          var b = f.Ba;
          typeof b == "number" ? void (-7020 + -9 * 539 + 11871) === f.ta ? Co("v", b)() : Co("vi", b)(f.ta) : b(void (8 * 834 + -352 * -5 + -8432) === f.ta ? null : f.ta);
        }
      }
    }
    function Co(I, f) {
      var b = [];
      return function() {
        b.length = arguments.length;
        for (var y = -2935 * 1 + -2 * -4021 + -5107 * 1; y < arguments.length; y++) b[y] = arguments[y];
        return b && b.length ? t["dynCall_" + I].apply(null, [f].concat(b)) : t["dynCall_" + I].call(null, f);
      };
    }
    function lg(I) {
      this.da = I - (-8522 * -1 + -7043 * 1 + -1463), this.Oa = function(f) {
        ie[this.da + (-21 * -335 + 4177 + -11204) >> 22 * -268 + 8608 + -1 * 2710] = f;
      }, this.La = function(f) {
        ie[this.da + (3503 + 3298 * -1 + -205 * 1) >> 982 + 1 * 8743 + 463 * -21] = f;
      }, this.Ma = function() {
        ie[this.da + (1013 * 9 + 44 * 97 + -13381) >> 8235 + -8233 * 1] = -313 * 13 + 5168 + -1099;
      }, this.Ka = function() {
        fe[this.da + (-4204 + 9 * 153 + -167 * -17) >> 1 * 9489 + 1 * -8378 + 11 * -101] = 0;
      }, this.Na = function() {
        fe[this.da + (1528 + -303 * 5) >> 5786 + 1465 * 1 + -2417 * 3] = -9085 + -5 * -1817;
      }, this.Fa = function(f, b) {
        this.Oa(f), this.La(b), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Yn() {
      return 5612 + -8 * -1096 + -14380 < Yn.xa;
    }
    function ho(I) {
      switch (I) {
        case 5692 + -726 * 9 + 843:
          return -2049 * -4 + -5743 + -2453;
        case 8465 + 89 * 74 + -15049:
          return 1;
        case 8899 + 165 * 27 + -13350:
          return 143 * -5 + 1266 + 61 * -9;
        case -2481 + 9353 * -1 + 11842:
          return -2904 + 1 * 5471 + -2564;
        default:
          throw new TypeError("Unknown type size: " + I);
      }
    }
    var Ii = void (-2953 * 2 + 8622 + -2716);
    function Je(I) {
      for (var f = ""; Ce[I]; ) f += Ii[Ce[I++]];
      return f;
    }
    var p0 = {}, zt = {}, Xn = {};
    function mo(I) {
      if (void (-167 + 63 * -9 + 734) === I) return "_unknown";
      I = I.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = I.charCodeAt(-43 * 6 + 1 * -5006 + -8 * -658);
      return 1339 + -97 * 28 + 1 * 1425 <= f && 7254 + 1478 * -2 + 4241 * -1 >= f ? "_" + I : I;
    }
    function po(I, f) {
      return I = mo(I), new Function("body", "return function " + I + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(f);
    }
    function bo(I) {
      var f = Error, b = po(I, function(y) {
        this.name = I, this.message = y, y = Error(y).stack, void (3 * 2127 + 687 + 589 * -12) !== y && (this.stack = this.toString() + `
` + y.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return b.prototype = Object.create(f.prototype), b.prototype.constructor = b, b.prototype.toString = function() {
        return void (943 + 41 * -23) === this.message ? this.name : this.name + ": " + this.message;
      }, b;
    }
    var b0 = void 0;
    function j(I) {
      throw new b0(I);
    }
    var fi = void 0;
    function Mn(I) {
      throw new fi(I);
    }
    function A0(I, f, b) {
      function y(G) {
        G = b(G), G.length !== I.length && Mn("Mismatched type converter count");
        for (var Z = 1233 * -6 + 6459 + -939 * -1; Z < I.length; ++Z) Gt(I[Z], G[Z]);
      }
      I.forEach(function(G) {
        Xn[G] = f;
      });
      var S = Array(f.length), w = [], k = 9624 + 1203 * -8;
      f.forEach(function(G, Z) {
        zt.hasOwnProperty(G) ? S[Z] = zt[G] : (w.push(G), p0.hasOwnProperty(G) || (p0[G] = []), p0[G].push(function() {
          S[Z] = zt[G], ++k, k === w.length && y(S);
        }));
      }), 13076 + -1868 * 7 === w.length && y(S);
    }
    function Gt(I, f, b) {
      if (b = b || {}, !("argPackAdvance" in f)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var y = f.name;
      if (I || j('type "' + y + '" must have a positive integer typeid pointer'), zt.hasOwnProperty(I)) {
        if (b.Ea) return;
        j("Cannot register type '" + y + "' twice");
      }
      zt[I] = f, delete Xn[I], p0.hasOwnProperty(I) && (f = p0[I], delete p0[I], f.forEach(function(S) {
        S();
      }));
    }
    function Ig(I) {
      var f = {};
      return f.count = I.count, f.oa = I.oa, f.pa = I.pa, f.da = I.da, f.fa = I.fa, f.ga = I.ga, f.ha = I.ha, f;
    }
    function Ao(I) {
      j(I.A.fa.ea.name + " instance already deleted");
    }
    var yo = !(1024 * 2 + 8179 * -1 + 6132);
    function Ci() {
    }
    function hi(I) {
      --I.count.value, -2 * 3454 + 3541 * -1 + 10449 * 1 === I.count.value && (I.ga ? I.ha.na(I.ga) : I.fa.ea.na(I.da));
    }
    function $0(I) {
      return typeof FinalizationGroup > "u" ? ($0 = function(f) {
        return f;
      }, I) : (yo = new FinalizationGroup(function(f) {
        for (var b = f.next(); !b.done; b = f.next()) b = b.value, b.da ? hi(b) : console.warn("object already deleted: " + b.da);
      }), $0 = function(f) {
        return yo.register(f, f.A, f.A), f;
      }, Ci = function(f) {
        yo.unregister(f.A);
      }, $0(I));
    }
    var en = void 0, tn = [];
    function Wo() {
      for (; tn.length; ) {
        var I = tn.pop();
        I.A.oa = !(3849 + 1 * 2729 + -6577), I.delete();
      }
    }
    function Lt() {
    }
    var mi = {};
    function fg(I, f) {
      var b = t;
      if (void (-7085 + -1 * -4280 + 85 * 33) === b[I].ja) {
        var y = b[I];
        b[I] = function() {
          return b[I].ja.hasOwnProperty(arguments.length) || j("Function '" + f + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + b[I].ja + ")!"), b[I].ja[arguments.length].apply(this, arguments);
        }, b[I].ja = [], b[I].ja[y.ya] = y;
      }
    }
    function pi(I, f, b) {
      t.hasOwnProperty(I) ? ((void (-1 * 8867 + -1 * -4271 + -4 * -1149) === b || void (-1121 + 6029 * 1 + 818 * -6) !== t[I].ja && void (-4827 + 92 * -3 + 63 * 81) !== t[I].ja[b]) && j("Cannot register public name '" + I + "' twice"), fg(I, I), t.hasOwnProperty(b) && j("Cannot register multiple overloads of a function with the same number of arguments (" + b + ")!"), t[I].ja[b] = f) : (t[I] = f, void (-29 * 300 + -101 * -76 + -64 * -16) !== b && (t[I].Ra = b));
    }
    function Cg(I, f, b, y, S, w, k, G) {
      this.name = I, this.constructor = f, this.ma = b, this.na = y, this.ia = S, this.Ca = w, this.qa = k, this.Aa = G;
    }
    function jn(I, f, b) {
      for (; f !== b; ) f.qa || j("Expected null or instance of " + b.name + ", got an instance of " + f.name), I = f.qa(I), f = f.ia;
      return I;
    }
    function hg(I, f) {
      return f === null ? (this.ua && j("null is not a valid " + this.name), 0) : (f.A || j('Cannot pass "' + W0(f) + '" as a ' + this.name), f.A.da || j("Cannot pass deleted object as a pointer of type " + this.name), jn(f.A.da, f.A.fa.ea, this.ea));
    }
    function mg(I, f) {
      if (f === null) {
        if (this.ua && j("null is not a valid " + this.name), this.sa) {
          var b = this.Ha();
          return I !== null && I.push(this.na, b), b;
        }
        return 7771 + -19 * 409;
      }
      if (f.A || j('Cannot pass "' + W0(f) + '" as a ' + this.name), f.A.da || j("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && f.A.fa.ra && j("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name), b = jn(f.A.da, f.A.fa.ea, this.ea), this.sa) switch (void (16 * 239 + -784 + 5 * -608) === f.A.ga && j("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case -2844 + -1 * -8274 + -5430:
          f.A.ha === this ? b = f.A.ga : j("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name);
          break;
        case 30 * -135 + -1976 + 6027:
          b = f.A.ga;
          break;
        case -1 * 9238 + -5806 + 15046 * 1:
          if (f.A.ha === this) b = f.A.ga;
          else {
            var y = f.clone();
            b = this.Ia(b, y0(function() {
              y.delete();
            })), I !== null && I.push(this.na, b);
          }
          break;
        default:
          j("Unsupporting sharing policy");
      }
      return b;
    }
    function pg(I, f) {
      return f === null ? (this.ua && j("null is not a valid " + this.name), 31 * 197 + 1 * 7303 + -13410) : (f.A || j('Cannot pass "' + W0(f) + '" as a ' + this.name), f.A.da || j("Cannot pass deleted object as a pointer of type " + this.name), f.A.fa.ra && j("Cannot convert argument of type " + f.A.fa.name + " to parameter type " + this.name), jn(f.A.da, f.A.fa.ea, this.ea));
    }
    function Jn(I) {
      return this.fromWireType(Re[I >> 1 * -778 + -5375 + 6155]);
    }
    function bi(I, f, b) {
      return f === b ? I : void (5973 + -3401 * 1 + 643 * -4) === b.ia ? null : (I = bi(I, f, b.ia), I === null ? null : b.Aa(I));
    }
    var nn = {};
    function bg(I, f) {
      for (void (-853 * -5 + 21 * 187 + -2048 * 4) === f && j("ptr should not be undefined"); I.ia; ) f = I.qa(f), I = I.ia;
      return nn[f];
    }
    function _n(I, f) {
      f.fa && f.da || Mn("makeClassHandle requires ptr and ptrType"), !!f.ha != !!f.ga && Mn("Both smartPtrType and smartPtr must be specified");
      var b = {};
      b.value = 1, f.count = b;
      var y = {};
      y.value = f;
      var S = {};
      return S.A = y, $0(Object.create(I, S));
    }
    function kt(I, f, b, y) {
      this.name = I, this.ea = f, this.ua = b, this.ra = y, this.sa = !(-172 + 1906 * -4 + 7797), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (7631 + -13 * 587), void (-883 + 7811 * 1 + -8 * 866) !== f.ia ? this.toWireType = mg : (this.toWireType = y ? hg : pg, this.ka = null);
    }
    function Ai(I, f, b) {
      t.hasOwnProperty(I) || Mn("Replacing nonexistant public symbol"), void (6509 + -2359 * 3 + -568 * -1) !== t[I].ja && void (4789 * 1 + 4547 + -9336) !== b ? t[I].ja[b] = f : (t[I] = f, t[I].ya = b);
    }
    function Nt(I, f) {
      I = Je(I);
      var b = Co(I, f);
      return typeof b != "function" && j("unknown function pointer with signature " + I + ": " + f), b;
    }
    var yi = void (10400 + 80 * -130);
    function Wi(I) {
      I = Ti(I);
      var f = Je(I);
      return Ht(I), f;
    }
    function xn(I, f) {
      function b(w) {
        S[w] || zt[w] || (Xn[w] ? Xn[w].forEach(b) : (y.push(w), S[w] = !(-11 * -895 + -1017 * -6 + 37 * -431)));
      }
      var y = [], S = {};
      throw f.forEach(b), new yi(I + ": " + y.map(Wi).join([", "]));
    }
    function vi(I, f) {
      for (var b = [], y = 3243 + 1 * -4354 + 1111; y < I; y++) b.push(ie[(f >> -16917 + -16919 * -1) + y]);
      return b;
    }
    function Qn(I) {
      for (; I.length; ) {
        var f = I.pop();
        I.pop()(f);
      }
    }
    function Si(I, f, b) {
      return I instanceof Object || j(b + ' with invalid "this": ' + I), I instanceof f.ea.constructor || j(b + ' incompatible with "this" of type ' + I.constructor.name), I.A.da || j("cannot call emscripten binding method " + b + " on deleted object"), jn(I.A.da, I.A.fa.ea, f.ea);
    }
    var wi = {};
    wi.value = void (-7764 + -7764 * -1);
    var Bi = {};
    Bi.value = null;
    var Gi = {};
    Gi.value = !(6056 + 4791 * -1 + -23 * 55);
    var ki = {};
    ki.value = !(1 * 6913 + 223 * -7 + 5351 * -1);
    var vo = [], it = [{}, wi, Bi, Gi, ki];
    function So(I) {
      48 * 171 + -6768 + -1436 < I && -4059 + -123 * -33 === --it[I].Ja && (it[I] = void (2694 * -1 + -125 * 20 + 742 * 7), vo.push(I));
    }
    function y0(I) {
      switch (I) {
        case void (-1945 * -1 + 766 * 10 + -9605):
          return -1 * -5044 + 1 * -4246 + -797;
        case null:
          return -3463 + 309 * 6 + -179 * -9;
        case !(10362 + 942 * -11):
          return 2 * 134 + 9942 + 173 * -59;
        case !1:
          return 4893 * 2 + 346 + -10128;
        default:
          var f = vo.length ? vo.pop() : it.length, b = {};
          return b.Ja = 1, b.value = I, it[f] = b, f;
      }
    }
    function W0(I) {
      if (I === null) return "null";
      var f = typeof I;
      return f === "object" || f === "array" || f === "function" ? I.toString() : "" + I;
    }
    function Ag(I, f) {
      switch (f) {
        case -9854 + 64 * 154:
          return function(b) {
            return this.fromWireType(Ye[b >> -10976 + 499 * 22]);
          };
        case 15 * -16 + -1 * 1097 + -134 * -10:
          return function(b) {
            return this.fromWireType(ot[b >> -2512 * -2 + -5023 + 1 * 2]);
          };
        default:
          throw new TypeError("Unknown float type: " + I);
      }
    }
    function yg(I) {
      var f = Function;
      if (!(f instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof f + " which is not a function");
      var b = po(f.name || "unknownFunctionName", function() {
      });
      return b.prototype = f.prototype, b = new b(), I = f.apply(b, I), I instanceof Object ? I : b;
    }
    function Wg(I, f, b) {
      switch (f) {
        case -7 * -65 + 171 + -626 * 1:
          return b ? function(y) {
            return fe[y];
          } : function(y) {
            return Ce[y];
          };
        case 1 * -6261 + 2 + 6260:
          return b ? function(y) {
            return Ze[y >> 1];
          } : function(y) {
            return lt[y >> 1 * -1928 + 157 * 1 + 1772];
          };
        case 2 * -682 + -9547 + 10913:
          return b ? function(y) {
            return ie[y >> 6 * 443 + 291 * 24 + -9640];
          } : function(y) {
            return Re[y >> 4 * -109 + 5195 + -4757];
          };
        default:
          throw new TypeError("Unknown integer type: " + I);
      }
    }
    function wo(I) {
      return I || j("Cannot use deleted val. handle = " + I), it[I].value;
    }
    function Hi(I, f) {
      var b = zt[I];
      return void (8013 + 6807 * 1 + 1140 * -13) === b && j(f + " has unknown type " + Wi(I)), b;
    }
    var vg = {}, Oi = {};
    function Ki() {
      if (!Bo) {
        var I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: a || "./this.program" }, f;
        for (f in Oi) I[f] = Oi[f];
        var b = [];
        for (f in I) b.push(f + "=" + I[f]);
        Bo = b;
      }
      return Bo;
    }
    var Bo, Zi = [];
    function Ri(I) {
      var f = {}, b;
      for (b in I) (function(y) {
        var S = I[y];
        f[y] = typeof S == "function" ? function() {
          Zi.push(y);
          try {
            return S.apply(null, arguments);
          } finally {
            if (p) return;
            var w = Zi.pop();
            A(w === y);
          }
        } : S;
      })(b);
      return f;
    }
    for (var Pi = Array(256), Un = 2306 + 7196 * -1 + 4890 * 1; 4467 + -185 * 9 + -2546 > Un; ++Un) Pi[Un] = String.fromCharCode(Un);
    Ii = Pi, b0 = t.BindingError = bo("BindingError"), fi = t.InternalError = bo("InternalError"), Lt.prototype.isAliasOf = function(I) {
      if (!(this instanceof Lt && I instanceof Lt)) return !(-659 * 15 + -1819 + 2341 * 5);
      var f = this.A.fa.ea, b = this.A.da, y = I.A.fa.ea;
      for (I = I.A.da; f.ia; ) b = f.qa(b), f = f.ia;
      for (; y.ia; ) I = y.qa(I), y = y.ia;
      return f === y && b === I;
    }, Lt.prototype.clone = function() {
      if (this.A.da || Ao(this), this.A.pa) return this.A.count.value += -5095 + -2 * -3791 + -2486, this;
      var I = $0(Object.create(Object.getPrototypeOf(this), { A: { value: Ig(this.A) } }));
      return I.A.count.value += -8111 + -3853 * 1 + 2393 * 5, I.A.oa = !1, I;
    }, Lt.prototype.delete = function() {
      this.A.da || Ao(this), this.A.oa && !this.A.pa && j("Object already scheduled for deletion"), Ci(this), hi(this.A), this.A.pa || (this.A.ga = void (13756 + -181 * 76), this.A.da = void (-71 * 44 + 9133 * -1 + 12257));
    }, Lt.prototype.isDeleted = function() {
      return !this.A.da;
    }, Lt.prototype.deleteLater = function() {
      return this.A.da || Ao(this), this.A.oa && !this.A.pa && j("Object already scheduled for deletion"), tn.push(this), -541 * 8 + 3646 * 2 + -1 * 2963 === tn.length && en && en(Wo), this.A.oa = !(2 * -938 + 2298 + 2 * -211), this;
    }, kt.prototype.Da = function(I) {
      return this.wa && (I = this.wa(I)), I;
    }, kt.prototype.va = function(I) {
      this.na && this.na(I);
    }, kt.prototype.argPackAdvance = 1572 + 92 * -17, kt.prototype.readValueFromPointer = Jn, kt.prototype.deleteObject = function(I) {
      I !== null && I.delete();
    }, kt.prototype.fromWireType = function(I) {
      function f() {
        return this.sa ? _n(this.ea.ma, { fa: this.Ga, da: b, ha: this, ga: I }) : _n(this.ea.ma, { fa: this, da: I });
      }
      var b = this.Da(I);
      if (!b) return this.va(I), null;
      var y = bg(this.ea, b);
      if (void (-1692 + -44 * 209 + 1361 * 8) !== y)
        return -5722 + 4 * 313 + 3 * 1490 === y.A.count.value ? (y.A.da = b, y.A.ga = I, y.clone()) : (y = y.clone(), this.va(I), y);
      if (y = this.ea.Ca(b), y = mi[y], !y) return f.call(this);
      y = this.ra ? y.za : y.pointerType;
      var S = bi(b, this.ea, y.ea);
      return S === null ? f.call(this) : this.sa ? _n(y.ea.ma, { fa: y, da: S, ha: this, ga: I }) : _n(y.ea.ma, { fa: y, da: S });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(nn).length;
    }, t.getLiveInheritedInstances = function() {
      var I = [], f;
      for (f in nn) nn.hasOwnProperty(f) && I.push(nn[f]);
      return I;
    }, t.flushPendingDeletes = Wo, t.setDelayFunction = function(I) {
      en = I, tn.length && en && en(Wo);
    }, yi = t.UnboundTypeError = bo("UnboundTypeError"), t.count_emval_handles = function() {
      for (var I = -4051 * 2 + -610 + -8712 * -1, f = -3 * 2784 + -1 * -4659 + -43 * -86; f < it.length; ++f) void (6738 + 4 * -2102 + -1 * -1670) !== it[f] && ++I;
      return I;
    }, t.get_first_emval = function() {
      for (var I = -2665 + 1 * -4 + 2674; I < it.length; ++I) if (void (-10 * 47 + 9826 + -9356) !== it[I]) return it[I];
      return null;
    }, be.push({ Ba: function() {
      Vi();
    } });
    var Sg = { z: function(I) {
      return zn(I + (-4757 + 43 * 111)) + 16;
    }, u: function(I, f, b) {
      throw new lg(I).Fa(f, b), "uncaught_exception" in Yn ? Yn.xa++ : Yn.xa = -2528 * 1 + -1439 * 1 + -32 * -124, I;
    }, w: function(I, f, b, y, S) {
      var w = ho(b);
      f = Je(f), Gt(I, { name: f, fromWireType: function(k) {
        return !!k;
      }, toWireType: function(k, G) {
        return G ? y : S;
      }, argPackAdvance: 8, readValueFromPointer: function(k) {
        if (-1 * -7873 + -3 * -565 + -9567 === b) var G = fe;
        else if (-37 * 136 + -2 * -1089 + -56 * -51 === b) G = Ze;
        else if (-1 * 6002 + 124 * -7 + -1 * -6874 === b) G = ie;
        else throw new TypeError("Unknown boolean type size: " + f);
        return this.fromWireType(G[k >> w]);
      }, ka: null });
    }, h: function(I, f, b, y, S, w, k, G, Z, R, P, V, $) {
      P = Je(P), w = Nt(S, w), G && (G = Nt(k, G)), R && (R = Nt(Z, R)), $ = Nt(V, $);
      var Ae = mo(P);
      pi(Ae, function() {
        xn("Cannot construct " + P + " due to unbound types", [y]);
      }), A0([I, f, b], y ? [y] : [], function(T) {
        if (T = T[13383 + -9 * 1487], y) var Wt = T.ea, Le = Wt.ma;
        else Le = Lt.prototype;
        T = po(Ae, function() {
          if (Object.getPrototypeOf(this) !== v0) throw new b0("Use 'new' to construct " + P);
          if (void (73 * -17 + 8788 + -1 * 7547) === S0.la) throw new b0(P + " has no accessible constructor");
          var Li = S0.la[arguments.length];
          if (void (300 + 1 * 5561 + -5861) === Li) throw new b0("Tried to invoke ctor of " + P + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(S0.la).toString() + ") parameters instead!");
          return Li.apply(this, arguments);
        });
        var $e = {};
        $e.value = T;
        var qt = {};
        qt.constructor = $e;
        var v0 = Object.create(Le, qt);
        T.prototype = v0;
        var S0 = new Cg(P, T, v0, $, Wt, w, G, R);
        Wt = new kt(P, S0, !(769 * -9 + -492 * 2 + 7905), !(14830 + 3 * -4943)), Le = new kt(P + "*", S0, !(1502 + 79 * -19), !(-2247 + -5 * -88 + 8 * 226));
        var Ei = new kt(P + " const*", S0, !(194 * 46 + -5389 + -3534), !(19 * -137 + 7 * -739 + -4 * -1944)), ko = {};
        return ko.pointerType = Le, ko.za = Ei, mi[I] = ko, Ai(Ae, T), [Wt, Le, Ei];
      });
    }, g: function(I, f, b, y, S, w) {
      A(-3200 * 2 + 5 * -1343 + 13115 < f);
      var k = vi(f, b);
      S = Nt(y, S);
      var G = [w], Z = [];
      A0([], [I], function(R) {
        R = R[4441 + -106 * -13 + -5819];
        var P = "constructor " + R.name;
        if (void (-85 * 27 + -6948 + 711 * 13) === R.ea.la && (R.ea.la = []), void (1 * -11 + -8274 + -5 * -1657) !== R.ea.la[f - (-13283 + -4428 * -3)]) throw new b0("Cannot register multiple constructors with identical number of parameters (" + (f - (-201 + 1 * 1909 + -1 * 1707)) + ") for class '" + R.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return R.ea.la[f - (-21 * 455 + -43 * -162 + 2590)] = function() {
          xn("Cannot construct " + R.name + " due to unbound types", k);
        }, A0([], k, function(V) {
          return R.ea.la[f - (-125 * -62 + 3 * -3007 + 12 * 106)] = function() {
            arguments.length !== f - 1 && j(P + " called with " + arguments.length + " arguments, expected " + (f - 1)), Z.length = 2982 + 2 * -1491, G.length = f;
            for (var $ = -32 * 30 + -34 * -161 + -4513; $ < f; ++$) G[$] = V[$].toWireType(Z, arguments[$ - (-1 * -4737 + -8597 + 3861)]);
            return $ = S.apply(null, G), Qn(Z), V[0].fromWireType($);
          }, [];
        }), [];
      });
    }, b: function(I, f, b, y, S, w, k, G, Z, R) {
      f = Je(f), S = Nt(y, S), A0([], [I], function(P) {
        P = P[7759 + 3 * -614 + -1 * 5917];
        var V = P.name + "." + f, $ = { get: function() {
          xn("Cannot access " + V + " due to unbound types", [b, k]);
        }, enumerable: !(-1 * 6568 + -2412 + 8980), configurable: !(-5456 + -6007 * 1 + 11463) };
        return Z ? $.set = function() {
          xn("Cannot access " + V + " due to unbound types", [b, k]);
        } : $.set = function() {
          j(V + " is a read-only property");
        }, Object.defineProperty(P.ea.ma, f, $), A0([], Z ? [b, k] : [b], function(Ae) {
          var T = Ae[0], Wt = { get: function() {
            var $e = Si(this, P, V + " getter");
            return T.fromWireType(S(w, $e));
          }, enumerable: !(1516 + -6502 * 1 + -1662 * -3) };
          if (Z) {
            Z = Nt(G, Z);
            var Le = Ae[1];
            Wt.set = function($e) {
              var qt = Si(this, P, V + " setter"), v0 = [];
              Z(R, qt, Le.toWireType(v0, $e)), Qn(v0);
            };
          }
          return Object.defineProperty(P.ea.ma, f, Wt), [];
        }), [];
      });
    }, v: function(I, f) {
      f = Je(f), Gt(I, { name: f, fromWireType: function(b) {
        var y = it[b].value;
        return So(b), y;
      }, toWireType: function(b, y) {
        return y0(y);
      }, argPackAdvance: 8, readValueFromPointer: Jn, ka: null });
    }, m: function(I, f, b) {
      b = ho(b), f = Je(f), Gt(I, { name: f, fromWireType: function(y) {
        return y;
      }, toWireType: function(y, S) {
        if (typeof S != "number" && typeof S != "boolean") throw new TypeError('Cannot convert "' + W0(S) + '" to ' + this.name);
        return S;
      }, argPackAdvance: 8, readValueFromPointer: Ag(f, b), ka: null });
    }, c: function(I, f, b, y, S, w) {
      var k = vi(f, b);
      I = Je(I), S = Nt(y, S), pi(I, function() {
        xn("Cannot call " + I + " due to unbound types", k);
      }, f - (-1549 * 4 + 1 * -7157 + 13354)), A0([], k, function(G) {
        var Z = I, R = I;
        G = [G[9588 * -1 + -1029 * -7 + 2385], null].concat(G.slice(706 * 12 + -1 * 9298 + 827 * 1));
        var P = S, V = G.length;
        -839 * -1 + -142 * -64 + -9925 > V && j("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var $ = G[5936 + -1 * -747 + -13 * 514] !== null && !(25 * 49 + 3797 + 1 * -5021), Ae = !(-3 * 3214 + 5933 + 3710), T = -3389 + 1319 * -1 + 1 * 4709; T < G.length; ++T) if (G[T] !== null && void (2037 + -7547 * 1 + 5 * 1102) === G[T].ka) {
          Ae = !(-8590 + -8 * -603 + 3766);
          break;
        }
        var Wt = G[-2977 + 229 * 13].name !== "void", Le = "", $e = "";
        for (T = 1765 * 1 + -2100 + 1 * 335; T < V - (-4433 + -5 * -617 + 1350); ++T) Le += (-3446 * -2 + -3719 * 1 + -3173 !== T ? ", " : "") + "arg" + T, $e += (88 * -107 + 93 * 45 + -5231 * -1 !== T ? ", " : "") + "arg" + T + "Wired";
        R = "return function " + mo(R) + "(" + Le + `) {
if (arguments.length !== ` + (V - (-4779 + -17 * -371 + -1526)) + `) {
throwBindingError('function ` + R + " called with ' + arguments.length + ' arguments, expected " + (V - (5 * 1879 + -1 * -2437 + 2366 * -5)) + ` args!');
}
`, Ae && (R += `var destructors = [];
`);
        var qt = Ae ? "destructors" : "null";
        for (Le = "throwBindingError invoker fn runDestructors retType classParam".split(" "), P = [j, P, w, Qn, G[30 * 305 + 1608 + -10758], G[-4450 + -1 * -1069 + 3382 * 1]], $ && (R += "var thisWired = classParam.toWireType(" + qt + `, this);
`), T = -152 * 19 + 282 * -17 + 7682; T < V - 2; ++T) R += "var arg" + T + "Wired = argType" + T + ".toWireType(" + qt + ", arg" + T + "); // " + G[T + (5759 * 1 + -1612 + 829 * -5)].name + `
`, Le.push("argType" + T), P.push(G[T + (7664 + 1 * -7662)]);
        if ($ && ($e = "thisWired" + (-8631 + -1 * 8351 + -8491 * -2 < $e.length ? ", " : "") + $e), R += (Wt ? "var rv = " : "") + "invoker(fn" + (-5733 + -1 * -479 + 5254 < $e.length ? ", " : "") + $e + `);
`, Ae) R += `runDestructors(destructors);
`;
        else
          for (T = $ ? 1 : 3278 * 2 + 2749 * -3 + 1 * 1693; T < G.length; ++T) V = 6221 + -8 * -1151 + 38 * -406 === T ? "thisWired" : "arg" + (T - (1001 + 2 * -401 + -197 * 1)) + "Wired", G[T].ka !== null && (R += V + "_dtor(" + V + "); // " + G[T].name + `
`, Le.push(V + "_dtor"), P.push(G[T].ka));
        return Wt && (R += `var ret = retType.fromWireType(rv);
return ret;
`), Le.push(R + `}
`), G = yg(Le).apply(null, P), Ai(Z, G, f - (-6580 + -3 * -113 + 2 * 3121)), [];
      });
    }, e: function(I, f, b, y, S) {
      function w(R) {
        return R;
      }
      f = Je(f), -(453 * -13 + -9254 + -1893 * -8) === S && (S = -172934276 + 609287 * 7333);
      var k = ho(b);
      if (-6482 * 1 + 1204 + -29 * -182 === y) {
        var G = 32 - 8 * b;
        w = function(R) {
          return R << G >>> G;
        };
      }
      var Z = -(8171 + -4546 * -2 + -17262) != f.indexOf("unsigned");
      Gt(I, { name: f, fromWireType: w, toWireType: function(R, P) {
        if (typeof P != "number" && typeof P != "boolean") throw new TypeError('Cannot convert "' + W0(P) + '" to ' + this.name);
        if (P < y || P > S) throw new TypeError('Passing a number "' + W0(P) + '" from JS side to C/C++ side to an argument of type "' + f + '", which is outside the valid range [' + y + ", " + S + "]!");
        return Z ? P >>> -3076 + 543 * 17 + -6155 : P | -6019 + 2129 * 1 + -3890 * -1;
      }, argPackAdvance: 8, readValueFromPointer: Wg(f, k, y !== 0), ka: null });
    }, d: function(I, f, b) {
      function y(G) {
        G >>= 2;
        var Z = Re;
        return new S(U, Z[G + (1 * -1487 + -10 * -616 + -16 * 292)], Z[G]);
      }
      var S = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][f];
      b = Je(b);
      var w = {};
      w.name = b, w.fromWireType = y, w.argPackAdvance = 8, w.readValueFromPointer = y;
      var k = {};
      k.Ea = !(-3987 + 1 * 553 + 3434), Gt(I, w, k);
    }, n: function(I, f) {
      f = Je(f);
      var b = f === "std::string";
      Gt(I, { name: f, fromWireType: function(y) {
        var S = Re[y >> 2];
        if (b) for (var w = y + 4, k = 1 * -6567 + -9984 + -613 * -27; k <= S; ++k) {
          var G = y + 4 + k;
          if (k == S || 7311 * 1 + 1297 * -5 + -118 * 7 == Ce[G]) {
            if (w) {
              var Z = w, R = Ce, P = Z + (G - w);
              for (w = Z; R[w] && !(w >= P); ) ++w;
              if (9846 + 10 * -983 < w - Z && R.subarray && u) Z = u.decode(R.subarray(Z, w));
              else {
                for (P = ""; Z < w; ) {
                  var V = R[Z++];
                  if (V & -3097 * -3 + 2467 * -1 + -6696) {
                    var $ = R[Z++] & 63;
                    if (1453 + -1 * 1261 == (V & 2965 * -2 + -7088 + 13242)) P += String.fromCharCode((V & -6063 + 4793 * -2 + 15680) << 1811 * 5 + -1097 + -1988 * 4 | $);
                    else {
                      var Ae = R[Z++] & 63;
                      V = 131 * -45 + -1635 + 7754 * 1 == (V & -4213 * 1 + -2833 + -1 * -7286) ? (V & 26 * -382 + 9420 + 527 * 1) << -8522 + 34 * 251 | $ << 6 | Ae : (V & 7) << -2251 + -1 * -2269 | $ << 7864 * -1 + 7309 * 1 + 567 | Ae << -233 * -2 + -2557 * -2 + 3 * -1858 | R[Z++] & 17 * -277 + -85 * 109 + 14037 * 1, 67 * -351 + -98538 + 187591 * 1 > V ? P += String.fromCharCode(V) : (V -= 25229 * -1 + 3912 * -6 + 114237, P += String.fromCharCode(-1 * 51385 + -49556 + 156237 | V >> -479 * -4 + 2053 * 4 + 5059 * -2, -102804 + 8 * 12133 + 62060 | V & -4 * 2347 + -4049 + 14460));
                    }
                  } else P += String.fromCharCode(V);
                }
                Z = P;
              }
            } else Z = "";
            if (void (-7596 + -3721 * 1 + -11317 * -1) === T) var T = Z;
            else T += String.fromCharCode(524 + -8 * -1019 + -8676), T += Z;
            w = G + (-1 * -481 + 3667 + 4147 * -1);
          }
        }
        else {
          for (T = Array(S), k = -37 * -34 + -486 * 9 + -2 * -1558; k < S; ++k) T[k] = String.fromCharCode(Ce[y + (130 * 68 + 362 * 26 + 2281 * -8) + k]);
          T = T.join("");
        }
        return Ht(y), T;
      }, toWireType: function(y, S) {
        S instanceof ArrayBuffer && (S = new Uint8Array(S));
        var w = typeof S == "string";
        w || S instanceof Uint8Array || S instanceof Uint8ClampedArray || S instanceof Int8Array || j("Cannot pass non-string to std::string");
        var k = (b && w ? function() {
          for (var R = 11796 + 6 * -1966, P = -1 * -7878 + 1 * 8367 + -16245; P < S.length; ++P) {
            var V = S.charCodeAt(P);
            -2661 * 27 + 8 * -7905 + -3733 * -51 <= V && -1 * 12927 + 44499 + -1 * -25771 >= V && (V = -45677 + -118361 * 1 + 229574 + ((V & 2 * 2996 + -331 * 26 + 3637 * 1) << -695 * -1 + 9727 + -10412 * 1) | S.charCodeAt(++P) & 7589 * -1 + 314 * -3 + 2 * 4777), -9405 + -5638 * 1 + 2 * 7585 >= V ? ++R : R = 2047 >= V ? R + 2 : 1 * 106472 + 116823 + -157760 >= V ? R + 3 : R + (2 * 3013 + 9902 + 4 * -3981);
          }
          return R;
        } : function() {
          return S.length;
        })(), G = zn(4 + k + (5149 + -5148 * 1));
        if (Re[G >> 6854 * -1 + 3492 + 3364] = k, b && w) W(S, G + (-9797 + 891 * 11), k + 1);
        else if (w) for (w = 1 * -4816 + 5688 + -109 * 8; w < k; ++w) {
          var Z = S.charCodeAt(w);
          -2 * -4531 + -7550 * -1 + -16357 < Z && (Ht(G), j("String has UTF-16 code units that do not fit in 8 bits")), Ce[G + (15216 + 4 * -3803) + w] = Z;
        }
        else
          for (w = 0; w < k; ++w) Ce[G + (-10895 + 21 * 519) + w] = S[w];
        return y !== null && y.push(Ht, G), G;
      }, argPackAdvance: 8, readValueFromPointer: Jn, ka: function(y) {
        Ht(y);
      } });
    }, j: function(I, f, b) {
      if (b = Je(b), -1910 + -1 * 5834 + 7746 === f) var y = N, S = Y, w = X, k = function() {
        return lt;
      }, G = -19 * -131 + -4617 + 2129;
      else 3341 + -35 * 97 + 58 === f && (y = K, S = _, w = Ie, k = function() {
        return Re;
      }, G = 8527 * -1 + 9311 + -17 * 46);
      Gt(I, { name: b, fromWireType: function(Z) {
        for (var R = Re[Z >> -11719 + 1 * 11721], P = k(), V, $ = Z + 4, Ae = 11639 + -113 * 103; Ae <= R; ++Ae) {
          var T = Z + 4 + Ae * f;
          (Ae == R || -5688 + 474 * 12 == P[T >> G]) && ($ = y($, T - $), void (7632 + 103 * 19 + -9589) === V ? V = $ : (V += String.fromCharCode(2942 * 1 + -11 * -470 + -8112), V += $), $ = T + f);
        }
        return Ht(Z), V;
      }, toWireType: function(Z, R) {
        typeof R != "string" && j("Cannot pass non-string to C++ string type " + b);
        var P = w(R), V = zn(8642 + 116 * -86 + 1338 + P + f);
        return Re[V >> 8986 + 1 * 9768 + -18752] = P >> G, S(R, V + (6209 + 1 * -6205), P + f), Z !== null && Z.push(Ht, V), V;
      }, argPackAdvance: 8, readValueFromPointer: Jn, ka: function(Z) {
        Ht(Z);
      } });
    }, x: function(I, f) {
      f = Je(f);
      var b = {};
      b.Qa = !(-11 * 574 + 2 * -4406 + -1 * -15126), b.name = f, b.argPackAdvance = 0, b.fromWireType = function() {
      }, b.toWireType = function() {
      }, Gt(I, b);
    }, k: function(I, f, b) {
      I = wo(I), f = Hi(f, "emval::as");
      var y = [], S = y0(y);
      return ie[b >> -4606 + 1 * -7549 + 12157] = S, f.toWireType(y, I);
    }, i: So, l: function(I, f) {
      return I = wo(I), f = wo(f), y0(I[f]);
    }, p: function(I) {
      var f = vg[I];
      return y0(void (-8109 + 1 * 6073 + 2036) === f ? Je(I) : f);
    }, o: function(I) {
      Qn(it[I].value), So(I);
    }, y: function(I, f) {
      return I = Hi(I, "_emval_take_value"), I = I.readValueFromPointer(f), y0(I);
    }, f: function() {
      rt();
    }, q: function(I, f, b) {
      Ce.copyWithin(I, f, f + b);
    }, r: function(I) {
      I >>>= 0;
      var f = Ce.length;
      if (-2030707016 + 14115509 * 296 < I) return !(-2615 * 1 + -2253 + 4869);
      for (var b = -6887 * 1 + -1 * -1079 + 5809; -52 * 107 + -6101 + -11669 * -1 >= b; b *= -2892 + -9033 * -1 + -6139) {
        var y = f * (1 + 0.2 / b);
        y = Math.min(y, I + (1289 * -73336 + 139350239 + 55843161)), y = Math.max(-26432701 + 107 * 403831, I, y), 1 * -6161 + 1 * 1808 + 4353 < y % (-16449 + 95 * 863) && (y += -2357 * -24 + 37 * -3527 + 139467 - y % (7570 + -717 * 56 + 23 * 4266));
        e: {
          try {
            h.grow(Math.min(1194910206 + -952573442 * -1, y) - U.byteLength + (52641 + 2 * 6447) >>> -7027 * -1 + -4451 * -1 + -1 * 11462), Xe(h.buffer);
            var S = -8756 + -9 * -601 + -372 * -9;
            break e;
          } catch {
          }
          S = void (13 * 309 + 107 * -7 + -3268);
        }
        if (S) return !(5457 * 1 + -1 * 9067 + 3610);
      }
      return !(1 * 515 + -5108 + 1 * 4594);
    }, s: function(I, f) {
      var b = 0;
      return Ki().forEach(function(y, S) {
        var w = f + b;
        for (S = ie[I + (3922 + 9619 * -1 + -5701 * -1) * S >> -6386 * 1 + 1 * -1085 + 7473] = w, w = 0; w < y.length; ++w) fe[S++ >> 4907 + 701 * -7] = y.charCodeAt(w);
        fe[S >> 3394 * -2 + -9183 + 15971] = 816 + -3139 * 1 + 2323, b += y.length + (15333 + 2 * -7666);
      }), -45 + -9 * -5;
    }, t: function(I, f) {
      var b = Ki();
      ie[I >> 1129 + 33 * -77 + 1414] = b.length;
      var y = 0;
      return b.forEach(function(S) {
        y += S.length + (-2903 * -2 + -9154 * 1 + 197 * 17);
      }), ie[f >> 2] = y, -2 * -3527 + -840 + -1 * 6214;
    }, a: h };
    (function() {
      function I(k) {
        k = k.exports, k = Ri(k), t.asm = k, qe--, t.monitorRunDependencies && t.monitorRunDependencies(qe), qe == 0 && At && (k = At, At = null, k());
      }
      function f(k) {
        I(k.instance);
      }
      function b(k) {
        return ug().then(function(G) {
          return WebAssembly.instantiate(G, S);
        }).then(k, function(G) {
          C("failed to asynchronously prepare wasm: " + G), rt(G);
        });
      }
      var y = {};
      y.a = Sg;
      var S = y;
      if (qe++, t.monitorRunDependencies && t.monitorRunDependencies(qe), t.instantiateWasm) try {
        var w = t.instantiateWasm(S, I);
        return w = Ri(w);
      } catch (k) {
        return C("Module.instantiateWasm callback failed with error: " + k), !(9704 + 1997 * -5 + 282);
      }
      return function() {
        if (l || typeof WebAssembly.instantiateStreaming != "function" || yt() || Qt("file://") || typeof fetch != "function") return b(f);
        var k = {};
        k.credentials = "same-origin", fetch(It, k).then(function(G) {
          return WebAssembly.instantiateStreaming(G, S).then(f, function(Z) {
            return C("wasm streaming compile failed: " + Z), C("falling back to ArrayBuffer instantiation"), b(f);
          });
        });
      }(), {};
    })();
    var Vi = t.___wasm_call_ctors = function() {
      return (Vi = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, zn = t._malloc = function() {
      return (zn = t._malloc = t.asm.C).apply(null, arguments);
    }, Ht = t._free = function() {
      return (Ht = t._free = t.asm.D).apply(null, arguments);
    }, Ti = t.___getTypeName = function() {
      return (Ti = t.___getTypeName = t.asm.E).apply(null, arguments);
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
    var qn;
    At = function I() {
      qn || Go(), qn || (At = I);
    };
    function Go() {
      function I() {
        if (!qn && (qn = !(-51 * 183 + 813 + -426 * -20), t.calledRun = !(3995 + -9 * 966 + 4699), !p)) {
          if (Fn(be), Fn(Ee), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var f = t.postRun.shift();
            je.unshift(f);
          }
          Fn(je);
        }
      }
      if (!(-1 * 3799 + 3 * -1838 + 9313 < qe)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) m0();
        Fn(Me), 0 < qe || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, 215 * -25 + 28 * -202 + 11032), I();
        }, -1087 + -1 * -1088)) : I());
      }
    }
    if (t.run = Go, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); -1 * -4551 + -3692 + -859 * 1 < t.preInit.length; ) t.preInit.pop()();
    return Go(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Lc = Symbol("Comlink.proxy"), N1 = Symbol("Comlink.endpoint"), D1 = Symbol("Comlink.releaseProxy"), Xo = Symbol("Comlink.finalizer"), Sx = Symbol("Comlink.thrown"), Nc = (x) => typeof x == "object" && x !== null || typeof x == "function", F1 = {
  canHandle: (x) => Nc(x) && x[Lc],
  serialize(x) {
    const { port1: o, port2: t } = new MessageChannel();
    return Fc(x, o), [t, [t]];
  },
  deserialize(x) {
    return x.start(), Xc(x);
  }
}, Y1 = {
  canHandle: (x) => Nc(x) && Sx in x,
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
}, Dc = /* @__PURE__ */ new Map([
  ["proxy", F1],
  ["throw", Y1]
]);
function X1(x, o) {
  for (const t of x)
    if (o === t || t === "*" || t instanceof RegExp && t.test(o))
      return !0;
  return !1;
}
function Fc(x, o = globalThis, t = ["*"]) {
  o.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!X1(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: i, path: a } = Object.assign({ path: [] }, n.data), s = (n.data.argumentList || []).map(o0);
    let c;
    try {
      const d = a.slice(0, -1).reduce((C, l) => C[l], x), g = a.reduce((C, l) => C[l], x);
      switch (i) {
        case "GET":
          c = g;
          break;
        case "SET":
          d[a.slice(-1)[0]] = o0(n.data.value), c = !0;
          break;
        case "APPLY":
          c = g.apply(d, s);
          break;
        case "CONSTRUCT":
          {
            const C = new g(...s);
            c = U1(C);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: C, port2: l } = new MessageChannel();
            Fc(x, l), c = Q1(C, [C]);
          }
          break;
        case "RELEASE":
          c = void 0;
          break;
        default:
          return;
      }
    } catch (d) {
      c = { value: d, [Sx]: 0 };
    }
    Promise.resolve(c).catch((d) => ({ value: d, [Sx]: 0 })).then((d) => {
      const [g, C] = qx(d);
      o.postMessage(Object.assign(Object.assign({}, g), { id: r }), C), i === "RELEASE" && (o.removeEventListener("message", e), Yc(o), Xo in x && typeof x[Xo] == "function" && x[Xo]());
    }).catch((d) => {
      const [g, C] = qx({
        value: new TypeError("Unserializable return value"),
        [Sx]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, g), { id: r }), C);
    });
  }), o.start && o.start();
}
function M1(x) {
  return x.constructor.name === "MessagePort";
}
function Yc(x) {
  M1(x) && x.close();
}
function Xc(x, o) {
  return Kr(x, [], o);
}
function cx(x) {
  if (x)
    throw new Error("Proxy has been released and is not useable");
}
function Mc(x) {
  return K0(x, {
    type: "RELEASE"
  }).then(() => {
    Yc(x);
  });
}
const Ux = /* @__PURE__ */ new WeakMap(), zx = "FinalizationRegistry" in globalThis && new FinalizationRegistry((x) => {
  const o = (Ux.get(x) || 0) - 1;
  Ux.set(x, o), o === 0 && Mc(x);
});
function j1(x, o) {
  const t = (Ux.get(o) || 0) + 1;
  Ux.set(o, t), zx && zx.register(x, o, x);
}
function J1(x) {
  zx && zx.unregister(x);
}
function Kr(x, o = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(r, i) {
      if (cx(e), i === D1)
        return () => {
          J1(n), Mc(x), e = !0;
        };
      if (i === "then") {
        if (o.length === 0)
          return { then: () => n };
        const a = K0(x, {
          type: "GET",
          path: o.map((s) => s.toString())
        }).then(o0);
        return a.then.bind(a);
      }
      return Kr(x, [...o, i]);
    },
    set(r, i, a) {
      cx(e);
      const [s, c] = qx(a);
      return K0(x, {
        type: "SET",
        path: [...o, i].map((d) => d.toString()),
        value: s
      }, c).then(o0);
    },
    apply(r, i, a) {
      cx(e);
      const s = o[o.length - 1];
      if (s === N1)
        return K0(x, {
          type: "ENDPOINT"
        }).then(o0);
      if (s === "bind")
        return Kr(x, o.slice(0, -1));
      const [c, d] = Na(a);
      return K0(x, {
        type: "APPLY",
        path: o.map((g) => g.toString()),
        argumentList: c
      }, d).then(o0);
    },
    construct(r, i) {
      cx(e);
      const [a, s] = Na(i);
      return K0(x, {
        type: "CONSTRUCT",
        path: o.map((c) => c.toString()),
        argumentList: a
      }, s).then(o0);
    }
  });
  return j1(n, x), n;
}
function _1(x) {
  return Array.prototype.concat.apply([], x);
}
function Na(x) {
  const o = x.map(qx);
  return [o.map((t) => t[0]), _1(o.map((t) => t[1]))];
}
const jc = /* @__PURE__ */ new WeakMap();
function Q1(x, o) {
  return jc.set(x, o), x;
}
function U1(x) {
  return Object.assign(x, { [Lc]: !0 });
}
function qx(x) {
  for (const [o, t] of Dc)
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
    jc.get(x) || []
  ];
}
function o0(x) {
  switch (x.type) {
    case "HANDLER":
      return Dc.get(x.name).deserialize(x.value);
    case "RAW":
      return x.value;
  }
}
function K0(x, o, t) {
  return new Promise((e) => {
    const n = z1();
    x.addEventListener("message", function r(i) {
      !i.data || !i.data.id || i.data.id !== n || (x.removeEventListener("message", r), e(i.data));
    }), x.start && x.start(), x.postMessage(Object.assign({ id: n }, o), t);
  });
}
function z1() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const Jc = "dmFyIGNlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgbGUgPSAoYSwgdSwgZSkgPT4gdSBpbiBhID8gY2UoYSwgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IGFbdV0gPSBlOwp2YXIgWW4gPSAoYSwgdSwgZSkgPT4gbGUoYSwgdHlwZW9mIHUgIT0gInN5bWJvbCIgPyB1ICsgIiIgOiB1LCBlKTsKY29uc3Qga3QgPSB7CiAgc2ltZDogInNhbV9zaW1kLndhc20iLAogIHNhbTogInNhbS53YXNtIgp9LCBmZSA9IGFzeW5jICgpID0+IFdlYkFzc2VtYmx5LnZhbGlkYXRlKG5ldyBVaW50OEFycmF5KFswLCA5NywgMTE1LCAxMDksIDEsIDAsIDAsIDAsIDEsIDUsIDEsIDk2LCAwLCAxLCAxMjMsIDMsIDIsIDEsIDAsIDEwLCAxMCwgMSwgOCwgMCwgNjUsIDAsIDI1MywgMTUsIDI1MywgOTgsIDExXSkpOwpjbGFzcyBJIGV4dGVuZHMgRXJyb3IgewogIGNvbnN0cnVjdG9yKGUsIG0pIHsKICAgIHN1cGVyKGUpOwogICAgWW4odGhpcywgImNhdXNlIik7CiAgICB0aGlzLm5hbWUgPSAiQXV0b0NhcHR1cmVFcnJvciIsIHRoaXMuY2F1c2UgPSBtOwogIH0KICAvLyBDaGFuZ2UgdGhpcyB0byBEZWNvcmF0b3Igd2hlbiB0aGV5IHdpbGwgYmUgaW4gc3RhYmxlIHJlbGVhc2UKICBzdGF0aWMgbG9nRXJyb3IoZSkgewogIH0KICBzdGF0aWMgZnJvbUNhbWVyYUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgSSkKICAgICAgcmV0dXJuIGU7CiAgICBsZXQgbTsKICAgIHN3aXRjaCAoZS5uYW1lKSB7CiAgICAgIGNhc2UgIk92ZXJjb25zdHJhaW5lZEVycm9yIjoKICAgICAgICBtID0gIk1pbmltdW0gcXVhbGl0eSByZXF1aXJlbWVudHMgYXJlIG5vdCBtZXQgYnkgeW91ciBjYW1lcmEiOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RSZWFkYWJsZUVycm9yIjoKICAgICAgY2FzZSAiQWJvcnRFcnJvciI6CiAgICAgICAgbSA9ICJUaGUgd2ViY2FtIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYXBwbGljYXRpb24iOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RBbGxvd2VkRXJyb3IiOgogICAgICAgIG0gPSAiVG8gdXNlIHlvdXIgY2FtZXJhLCB5b3UgbXVzdCBhbGxvdyBwZXJtaXNzaW9ucyI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEZvdW5kRXJyb3IiOgogICAgICAgIG0gPSAiVGhlcmUgaXMgbm8gY2FtZXJhIGF2YWlsYWJsZSB0byB5b3UiOwogICAgICAgIGJyZWFrOwogICAgICBkZWZhdWx0OgogICAgICAgIG0gPSAiQW4gdW5rbm93biBjYW1lcmEgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgICAgICBicmVhazsKICAgIH0KICAgIHJldHVybiBuZXcgSShtLCBlKTsKICB9CiAgc3RhdGljIGZyb21FcnJvcihlKSB7CiAgICBpZiAodGhpcy5sb2dFcnJvcihlKSwgZSBpbnN0YW5jZW9mIEkpCiAgICAgIHJldHVybiBlOwogICAgY29uc3QgbSA9ICJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCI7CiAgICByZXR1cm4gbmV3IEkobSk7CiAgfQp9CmNvbnN0IGRlID0gewogIFJHQjogIlJHQiIsCiAgUkdCQTogIlJHQkEiCn0sIGhlID0gKGEpID0+IE51bWJlci5wYXJzZUZsb2F0KGEudG9GaXhlZCgzKSksIHllID0gKGEsIHUpID0+IE1hdGgubWluKGEsIHUpOwp2YXIgcGUgPSBmdW5jdGlvbigpIHsKICB2YXIgYSA9IHR5cGVvZiBkb2N1bWVudCA8ICJ1IiAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ID8gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMgOiB2b2lkIDA7CiAgcmV0dXJuIGZ1bmN0aW9uKHUpIHsKICAgIHUgPSB1IHx8IHt9OwogICAgdmFyIGU7CiAgICBlIHx8IChlID0gdHlwZW9mIHUgPCAidSIgPyB1IDoge30pOwogICAgdmFyIG0sIGc7CiAgICBlLnJlYWR5ID0gbmV3IFByb21pc2UoZnVuY3Rpb24obiwgdCkgewogICAgICBtID0gbiwgZyA9IHQ7CiAgICB9KTsKICAgIHZhciBDID0ge30sIEE7CiAgICBmb3IgKEEgaW4gZSkgZS5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoQ1tBXSA9IGVbQV0pOwogICAgdmFyIE0gPSAiLi90aGlzLnByb2dyYW0iLCBPID0gITEsIFQgPSAhMTsKICAgIE8gPSB0eXBlb2Ygd2luZG93ID09ICJvYmplY3QiLCBUID0gdHlwZW9mIGltcG9ydFNjcmlwdHMgPT0gImZ1bmN0aW9uIjsKICAgIHZhciBfID0gIiIsIFM7CiAgICAoTyB8fCBUKSAmJiAoVCA/IF8gPSBzZWxmLmxvY2F0aW9uLmhyZWYgOiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIChfID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpLCBhICYmIChfID0gYSksIF8uaW5kZXhPZigiYmxvYjoiKSAhPT0gMCA/IF8gPSBfLnN1YnN0cigwLCBfLmxhc3RJbmRleE9mKCIvIikgKyAxKSA6IF8gPSAiIiwgVCAmJiAoUyA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdmFyIHQgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsKICAgICAgcmV0dXJuIHQub3BlbigiR0VUIiwgbiwgITEpLCB0LnJlc3BvbnNlVHlwZSA9ICJhcnJheWJ1ZmZlciIsIHQuc2VuZChudWxsKSwgbmV3IFVpbnQ4QXJyYXkodC5yZXNwb25zZSk7CiAgICB9KSk7CiAgICB2YXIgRSA9IGUucHJpbnRFcnIgfHwgY29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7CiAgICBmb3IgKEEgaW4gQykgQy5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoZVtBXSA9IENbQV0pOwogICAgQyA9IG51bGwsIGUudGhpc1Byb2dyYW0gJiYgKE0gPSBlLnRoaXNQcm9ncmFtKTsKICAgIHZhciBXOwogICAgZS53YXNtQmluYXJ5ICYmIChXID0gZS53YXNtQmluYXJ5KSwgZS5ub0V4aXRSdW50aW1lICYmIGUubm9FeGl0UnVudGltZSwgdHlwZW9mIFdlYkFzc2VtYmx5ICE9ICJvYmplY3QiICYmIHNuKCJubyBuYXRpdmUgd2FzbSBzdXBwb3J0IGRldGVjdGVkIik7CiAgICB2YXIgSCwga24gPSAhMTsKICAgIGZ1bmN0aW9uIEtuKG4pIHsKICAgICAgbiB8fCBzbigiQXNzZXJ0aW9uIGZhaWxlZDogdW5kZWZpbmVkIik7CiAgICB9CiAgICB2YXIgUW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0ZjgiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFV0KG4sIHQsIHIpIHsKICAgICAgdmFyIGkgPSBGOwogICAgICBpZiAoMCA8IHIpIHsKICAgICAgICByID0gdCArIHIgLSAxOwogICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgbi5sZW5ndGg7ICsrbykgewogICAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICBpZiAoNTUyOTYgPD0gcyAmJiA1NzM0MyA+PSBzKSB7CiAgICAgICAgICAgIHZhciBsID0gbi5jaGFyQ29kZUF0KCsrbyk7CiAgICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgICAgfQogICAgICAgICAgaWYgKDEyNyA+PSBzKSB7CiAgICAgICAgICAgIGlmICh0ID49IHIpIGJyZWFrOwogICAgICAgICAgICBpW3QrK10gPSBzOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgaWYgKDIwNDcgPj0gcykgewogICAgICAgICAgICAgIGlmICh0ICsgMSA+PSByKSBicmVhazsKICAgICAgICAgICAgICBpW3QrK10gPSAxOTIgfCBzID4+IDY7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgaWYgKDY1NTM1ID49IHMpIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMiA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDIyNCB8IHMgPj4gMTI7CiAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMyA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDI0MCB8IHMgPj4gMTgsIGlbdCsrXSA9IDEyOCB8IHMgPj4gMTIgJiA2MzsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyA+PiA2ICYgNjM7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyAmIDYzOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBpW3RdID0gMDsKICAgICAgfQogICAgfQogICAgdmFyIHFuID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGYtMTZsZSIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gRHQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gbiA+PiAxLCBpID0gciArIHQgLyAyOyAhKHIgPj0gaSkgJiYgeW5bcl07ICkgKytyOwogICAgICBpZiAociA8PD0gMSwgMzIgPCByIC0gbiAmJiBxbikgcmV0dXJuIHFuLmRlY29kZShGLnN1YmFycmF5KG4sIHIpKTsKICAgICAgZm9yIChyID0gMCwgaSA9ICIiOyA7ICkgewogICAgICAgIHZhciBvID0gUVtuICsgMiAqIHIgPj4gMV07CiAgICAgICAgaWYgKG8gPT0gMCB8fCByID09IHQgLyAyKSByZXR1cm4gaTsKICAgICAgICArK3IsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQnQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDIgPiByKSByZXR1cm4gMDsKICAgICAgciAtPSAyOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSByIDwgMiAqIG4ubGVuZ3RoID8gciAvIDIgOiBuLmxlbmd0aDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCByOyArK28pIFFbdCA+PiAxXSA9IG4uY2hhckNvZGVBdChvKSwgdCArPSAyOwogICAgICByZXR1cm4gUVt0ID4+IDFdID0gMCwgdCAtIGk7CiAgICB9CiAgICBmdW5jdGlvbiB6dChuKSB7CiAgICAgIHJldHVybiAyICogbi5sZW5ndGg7CiAgICB9CiAgICBmdW5jdGlvbiBWdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSAwLCBpID0gIiI7ICEociA+PSB0IC8gNCk7ICkgewogICAgICAgIHZhciBvID0ga1tuICsgNCAqIHIgPj4gMl07CiAgICAgICAgaWYgKG8gPT0gMCkgYnJlYWs7CiAgICAgICAgKytyLCA2NTUzNiA8PSBvID8gKG8gLT0gNjU1MzYsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IG8gPj4gMTAsIDU2MzIwIHwgbyAmIDEwMjMpKSA6IGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgICByZXR1cm4gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEd0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCA0ID4gcikgcmV0dXJuIDA7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IGkgKyByIC0gNDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBuLmxlbmd0aDsgKytvKSB7CiAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgaWYgKDU1Mjk2IDw9IHMgJiYgNTczNDMgPj0gcykgewogICAgICAgICAgdmFyIGwgPSBuLmNoYXJDb2RlQXQoKytvKTsKICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgIH0KICAgICAgICBpZiAoa1t0ID4+IDJdID0gcywgdCArPSA0LCB0ICsgNCA+IHIpIGJyZWFrOwogICAgICB9CiAgICAgIHJldHVybiBrW3QgPj4gMl0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIFl0KG4pIHsKICAgICAgZm9yICh2YXIgdCA9IDAsIHIgPSAwOyByIDwgbi5sZW5ndGg7ICsrcikgewogICAgICAgIHZhciBpID0gbi5jaGFyQ29kZUF0KHIpOwogICAgICAgIDU1Mjk2IDw9IGkgJiYgNTczNDMgPj0gaSAmJiArK3IsIHQgKz0gNDsKICAgICAgfQogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBLLCBZLCBGLCBRLCB5biwgaywgVSwgbnQsIHR0OwogICAgZnVuY3Rpb24gZXQobikgewogICAgICBLID0gbiwgZS5IRUFQOCA9IFkgPSBuZXcgSW50OEFycmF5KG4pLCBlLkhFQVAxNiA9IFEgPSBuZXcgSW50MTZBcnJheShuKSwgZS5IRUFQMzIgPSBrID0gbmV3IEludDMyQXJyYXkobiksIGUuSEVBUFU4ID0gRiA9IG5ldyBVaW50OEFycmF5KG4pLCBlLkhFQVBVMTYgPSB5biA9IG5ldyBVaW50MTZBcnJheShuKSwgZS5IRUFQVTMyID0gVSA9IG5ldyBVaW50MzJBcnJheShuKSwgZS5IRUFQRjMyID0gbnQgPSBuZXcgRmxvYXQzMkFycmF5KG4pLCBlLkhFQVBGNjQgPSB0dCA9IG5ldyBGbG9hdDY0QXJyYXkobik7CiAgICB9CiAgICB2YXIgcnQgPSBlLklOSVRJQUxfTUVNT1JZIHx8IDE2Nzc3MjE2OwogICAgZS53YXNtTWVtb3J5ID8gSCA9IGUud2FzbU1lbW9yeSA6IEggPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogcnQgLyA2NTUzNiwgbWF4aW11bTogMzI3NjggfSksIEggJiYgKEsgPSBILmJ1ZmZlciksIHJ0ID0gSy5ieXRlTGVuZ3RoLCBldChLKTsKICAgIHZhciBpdCA9IFtdLCBhdCA9IFtdLCBadCA9IFtdLCBvdCA9IFtdOwogICAgZnVuY3Rpb24gJHQoKSB7CiAgICAgIHZhciBuID0gZS5wcmVSdW4uc2hpZnQoKTsKICAgICAgaXQudW5zaGlmdChuKTsKICAgIH0KICAgIHZhciBaID0gMCwgb24gPSBudWxsOwogICAgZS5wcmVsb2FkZWRJbWFnZXMgPSB7fSwgZS5wcmVsb2FkZWRBdWRpb3MgPSB7fTsKICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgdGhyb3cgZS5vbkFib3J0ICYmIGUub25BYm9ydChuKSwgRShuKSwga24gPSAhMCwgbiA9IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoImFib3J0KCIgKyBuICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIiksIGcobiksIG47CiAgICB9CiAgICBmdW5jdGlvbiBSbihuKSB7CiAgICAgIHZhciB0ID0gJDsKICAgICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/IHQuc3RhcnRzV2l0aChuKSA6IHQuaW5kZXhPZihuKSA9PT0gMDsKICAgIH0KICAgIGZ1bmN0aW9uIHN0KCkgewogICAgICByZXR1cm4gUm4oImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKTsKICAgIH0KICAgIHZhciAkID0gInNhbS53YXNtIjsKICAgIGlmICghc3QoKSkgewogICAgICB2YXIgdXQgPSAkOwogICAgICAkID0gZS5sb2NhdGVGaWxlID8gZS5sb2NhdGVGaWxlKHV0LCBfKSA6IF8gKyB1dDsKICAgIH0KICAgIGZ1bmN0aW9uIGN0KCkgewogICAgICB0cnkgewogICAgICAgIGlmIChXKSByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoVyk7CiAgICAgICAgaWYgKFMpIHJldHVybiBTKCQpOwogICAgICAgIHRocm93ICJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZCI7CiAgICAgIH0gY2F0Y2ggKG4pIHsKICAgICAgICBzbihuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gWHQoKSB7CiAgICAgIHJldHVybiBXIHx8ICFPICYmICFUIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iIHx8IFJuKCJmaWxlOi8vIikgPyBQcm9taXNlLnJlc29sdmUoKS50aGVuKGN0KSA6IGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihuKSB7CiAgICAgICAgaWYgKCFuLm9rKSB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArICQgKyAiJyI7CiAgICAgICAgcmV0dXJuIG4uYXJyYXlCdWZmZXIoKTsKICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7CiAgICAgICAgcmV0dXJuIGN0KCk7CiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24gcG4obikgewogICAgICBmb3IgKDsgMCA8IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4uc2hpZnQoKTsKICAgICAgICBpZiAodHlwZW9mIHQgPT0gImZ1bmN0aW9uIikgdChlKTsKICAgICAgICBlbHNlIHsKICAgICAgICAgIHZhciByID0gdC5CYTsKICAgICAgICAgIHR5cGVvZiByID09ICJudW1iZXIiID8gdC50YSA9PT0gdm9pZCAwID8geG4oInYiLCByKSgpIDogeG4oInZpIiwgcikodC50YSkgOiByKHQudGEgPT09IHZvaWQgMCA/IG51bGwgOiB0LnRhKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHhuKG4sIHQpIHsKICAgICAgdmFyIHIgPSBbXTsKICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgewogICAgICAgIHIubGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsKICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgcltpXSA9IGFyZ3VtZW50c1tpXTsKICAgICAgICByZXR1cm4gciAmJiByLmxlbmd0aCA/IGVbImR5bkNhbGxfIiArIG5dLmFwcGx5KG51bGwsIFt0XS5jb25jYXQocikpIDogZVsiZHluQ2FsbF8iICsgbl0uY2FsbChudWxsLCB0KTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEp0KG4pIHsKICAgICAgdGhpcy5kYSA9IG4gLSAxNiwgdGhpcy5PYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyA4ID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5MYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyAwID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5NYSA9IGZ1bmN0aW9uKCkgewogICAgICAgIGtbdGhpcy5kYSArIDQgPj4gMl0gPSAwOwogICAgICB9LCB0aGlzLkthID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTIgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLk5hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTMgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLkZhID0gZnVuY3Rpb24odCwgcikgewogICAgICAgIHRoaXMuT2EodCksIHRoaXMuTGEociksIHRoaXMuTWEoKSwgdGhpcy5LYSgpLCB0aGlzLk5hKCk7CiAgICAgIH07CiAgICB9CiAgICBmdW5jdGlvbiBtbigpIHsKICAgICAgcmV0dXJuIDAgPCBtbi54YTsKICAgIH0KICAgIGZ1bmN0aW9uIEZuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIDE7CiAgICAgICAgY2FzZSA0OgogICAgICAgICAgcmV0dXJuIDI7CiAgICAgICAgY2FzZSA4OgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gdHlwZSBzaXplOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIHZhciBsdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFIobikgewogICAgICBmb3IgKHZhciB0ID0gIiI7IEZbbl07ICkgdCArPSBsdFtGW24rK11dOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBxID0ge30sIFggPSB7fSwgdm4gPSB7fTsKICAgIGZ1bmN0aW9uIEluKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIGpuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBJbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gTG4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gam4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIG5uID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBubihuKTsKICAgIH0KICAgIHZhciBmdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIGduKG4pIHsKICAgICAgdGhyb3cgbmV3IGZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gdG4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGMpIHsKICAgICAgICBjID0gcihjKSwgYy5sZW5ndGggIT09IG4ubGVuZ3RoICYmIGduKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBuLmxlbmd0aDsgKyt5KSBEKG5beV0sIGNbeV0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihjKSB7CiAgICAgICAgdm5bY10gPSB0OwogICAgICB9KTsKICAgICAgdmFyIG8gPSBBcnJheSh0Lmxlbmd0aCksIHMgPSBbXSwgbCA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihjLCB5KSB7CiAgICAgICAgWC5oYXNPd25Qcm9wZXJ0eShjKSA/IG9beV0gPSBYW2NdIDogKHMucHVzaChjKSwgcS5oYXNPd25Qcm9wZXJ0eShjKSB8fCAocVtjXSA9IFtdKSwgcVtjXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgb1t5XSA9IFhbY10sICsrbCwgbCA9PT0gcy5sZW5ndGggJiYgaShvKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCBzLmxlbmd0aCA9PT0gMCAmJiBpKG8pOwogICAgfQogICAgZnVuY3Rpb24gRChuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgWC5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKSByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBYW25dID0gdCwgZGVsZXRlIHZuW25dLCBxLmhhc093blByb3BlcnR5KG4pICYmICh0ID0gcVtuXSwgZGVsZXRlIHFbbl0sIHQuZm9yRWFjaChmdW5jdGlvbihvKSB7CiAgICAgICAgbygpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBObihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIEhuID0gITE7CiAgICBmdW5jdGlvbiBkdCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIGh0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gdW4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChIbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpIHIgPSByLnZhbHVlLCByLmRhID8gaHQocikgOiBjb25zb2xlLndhcm4oIm9iamVjdCBhbHJlYWR5IGRlbGV0ZWQ6ICIgKyByLmRhKTsKICAgICAgfSksIHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiBIbi5yZWdpc3Rlcih0LCB0LkEsIHQuQSksIHQ7CiAgICAgIH0sIGR0ID0gZnVuY3Rpb24odCkgewogICAgICAgIEhuLnVucmVnaXN0ZXIodC5BKTsKICAgICAgfSwgdW4obikpOwogICAgfQogICAgdmFyIGNuID0gdm9pZCAwLCBsbiA9IFtdOwogICAgZnVuY3Rpb24gVW4oKSB7CiAgICAgIGZvciAoOyBsbi5sZW5ndGg7ICkgewogICAgICAgIHZhciBuID0gbG4ucG9wKCk7CiAgICAgICAgbi5BLm9hID0gITEsIG4uZGVsZXRlKCk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIFYoKSB7CiAgICB9CiAgICB2YXIgeXQgPSB7fTsKICAgIGZ1bmN0aW9uIFF0KG4sIHQpIHsKICAgICAgdmFyIHIgPSBlOwogICAgICBpZiAocltuXS5qYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdmFyIGkgPSByW25dOwogICAgICAgIHJbbl0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiByW25dLmphLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpIHx8IHYoIkZ1bmN0aW9uICciICsgdCArICInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdHMgb25lIG9mICgiICsgcltuXS5qYSArICIpISIpLCByW25dLmphW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfSwgcltuXS5qYSA9IFtdLCByW25dLmphW2kueWFdID0gaTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcHQobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pID8gKChyID09PSB2b2lkIDAgfHwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIGVbbl0uamFbcl0gIT09IHZvaWQgMCkgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICciICsgbiArICInIHR3aWNlIiksIFF0KG4sIG4pLCBlLmhhc093blByb3BlcnR5KHIpICYmIHYoIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyByICsgIikhIiksIGVbbl0uamFbcl0gPSB0KSA6IChlW25dID0gdCwgciAhPT0gdm9pZCAwICYmIChlW25dLlJhID0gcikpOwogICAgfQogICAgZnVuY3Rpb24gcXQobiwgdCwgciwgaSwgbywgcywgbCwgYykgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmNvbnN0cnVjdG9yID0gdCwgdGhpcy5tYSA9IHIsIHRoaXMubmEgPSBpLCB0aGlzLmlhID0gbywgdGhpcy5DYSA9IHMsIHRoaXMucWEgPSBsLCB0aGlzLkFhID0gYzsKICAgIH0KICAgIGZ1bmN0aW9uIHduKG4sIHQsIHIpIHsKICAgICAgZm9yICg7IHQgIT09IHI7ICkgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiBuZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiB0ZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpIHIgPSB0LkEuZ2E7CiAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIGVuKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGkuZGVsZXRlKCk7CiAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgIH0KICAgICAgcmV0dXJuIHI7CiAgICB9CiAgICBmdW5jdGlvbiBlZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyB0LkEuZmEubmFtZSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBbihuKSB7CiAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShVW24gPj4gMl0pOwogICAgfQogICAgZnVuY3Rpb24gbXQobiwgdCwgcikgewogICAgICByZXR1cm4gdCA9PT0gciA/IG4gOiByLmlhID09PSB2b2lkIDAgPyBudWxsIDogKG4gPSBtdChuLCB0LCByLmlhKSwgbiA9PT0gbnVsbCA/IG51bGwgOiByLkFhKG4pKTsKICAgIH0KICAgIHZhciBmbiA9IHt9OwogICAgZnVuY3Rpb24gcmUobiwgdCkgewogICAgICBmb3IgKHQgPT09IHZvaWQgMCAmJiB2KCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsgbi5pYTsgKSB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiBmblt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIF9uKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBnbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIGduKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgdW4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBCKG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IHRlIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyBuZSA6IGVlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiB2dChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgZ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gRyhuLCB0KSB7CiAgICAgIG4gPSBSKG4pOwogICAgICB2YXIgciA9IHhuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgZ3QgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB3dChuKSB7CiAgICAgIG4gPSBXdChuKTsKICAgICAgdmFyIHQgPSBSKG4pOwogICAgICByZXR1cm4geihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIGRuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcihzKSB7CiAgICAgICAgb1tzXSB8fCBYW3NdIHx8ICh2bltzXSA/IHZuW3NdLmZvckVhY2gocikgOiAoaS5wdXNoKHMpLCBvW3NdID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBvID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IGd0KG4gKyAiOiAiICsgaS5tYXAod3QpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspIHIucHVzaChrWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIHduKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBEbiA9IFtdLCBqID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIEJuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1qW25dLkphID09PSAwICYmIChqW25dID0gdm9pZCAwLCBEbi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIGVuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IERuLmxlbmd0aCA/IERuLnBvcCgpIDogai5sZW5ndGg7CiAgICAgICAgICByZXR1cm4galt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHJuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpIHJldHVybiAibnVsbCI7CiAgICAgIHZhciB0ID0gdHlwZW9mIG47CiAgICAgIHJldHVybiB0ID09PSAib2JqZWN0IiB8fCB0ID09PSAiYXJyYXkiIHx8IHQgPT09ICJmdW5jdGlvbiIgPyBuLnRvU3RyaW5nKCkgOiAiIiArIG47CiAgICB9CiAgICBmdW5jdGlvbiBpZShuLCB0KSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShudFtyID4+IDJdKTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHR0W3IgPj4gM10pOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBmbG9hdCB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGFlKG4pIHsKICAgICAgdmFyIHQgPSBGdW5jdGlvbjsKICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBqbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIG9lKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBZW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIEZbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gUVtpID4+IDFdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHluW2kgPj4gMV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4ga1tpID4+IDJdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFVbaSA+PiAyXTsKICAgICAgICAgIH07CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gaW50ZWdlciB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHpuKG4pIHsKICAgICAgcmV0dXJuIG4gfHwgdigiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gIiArIG4pLCBqW25dLnZhbHVlOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCkgewogICAgICB2YXIgciA9IFhbbl07CiAgICAgIHJldHVybiByID09PSB2b2lkIDAgJiYgdih0ICsgIiBoYXMgdW5rbm93biB0eXBlICIgKyB3dChuKSksIHI7CiAgICB9CiAgICB2YXIgc2UgPSB7fSwgVHQgPSB7fTsKICAgIGZ1bmN0aW9uIEV0KCkgewogICAgICBpZiAoIVZuKSB7CiAgICAgICAgdmFyIG4gPSB7IFVTRVI6ICJ3ZWJfdXNlciIsIExPR05BTUU6ICJ3ZWJfdXNlciIsIFBBVEg6ICIvIiwgUFdEOiAiLyIsIEhPTUU6ICIvaG9tZS93ZWJfdXNlciIsIExBTkc6ICh0eXBlb2YgbmF2aWdhdG9yID09ICJvYmplY3QiICYmIG5hdmlnYXRvci5sYW5ndWFnZXMgJiYgbmF2aWdhdG9yLmxhbmd1YWdlc1swXSB8fCAiQyIpLnJlcGxhY2UoIi0iLCAiXyIpICsgIi5VVEYtOCIsIF86IE0gfHwgIi4vdGhpcy5wcm9ncmFtIiB9LCB0OwogICAgICAgIGZvciAodCBpbiBUdCkgblt0XSA9IFR0W3RdOwogICAgICAgIHZhciByID0gW107CiAgICAgICAgZm9yICh0IGluIG4pIHIucHVzaCh0ICsgIj0iICsgblt0XSk7CiAgICAgICAgVm4gPSByOwogICAgICB9CiAgICAgIHJldHVybiBWbjsKICAgIH0KICAgIHZhciBWbiwgUHQgPSBbXTsKICAgIGZ1bmN0aW9uIE10KG4pIHsKICAgICAgdmFyIHQgPSB7fSwgcjsKICAgICAgZm9yIChyIGluIG4pIChmdW5jdGlvbihpKSB7CiAgICAgICAgdmFyIG8gPSBuW2ldOwogICAgICAgIHRbaV0gPSB0eXBlb2YgbyA9PSAiZnVuY3Rpb24iID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICBQdC5wdXNoKGkpOwogICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgcmV0dXJuIG8uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgICAgICAgIH0gZmluYWxseSB7CiAgICAgICAgICAgIGlmIChrbikgcmV0dXJuOwogICAgICAgICAgICB2YXIgcyA9IFB0LnBvcCgpOwogICAgICAgICAgICBLbihzID09PSBpKTsKICAgICAgICAgIH0KICAgICAgICB9IDogbzsKICAgICAgfSkocik7CiAgICAgIHJldHVybiB0OwogICAgfQogICAgZm9yICh2YXIgT3QgPSBBcnJheSgyNTYpLCBUbiA9IDA7IDI1NiA+IFRuOyArK1RuKSBPdFtUbl0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFRuKTsKICAgIGx0ID0gT3QsIG5uID0gZS5CaW5kaW5nRXJyb3IgPSBMbigiQmluZGluZ0Vycm9yIiksIGZ0ID0gZS5JbnRlcm5hbEVycm9yID0gTG4oIkludGVybmFsRXJyb3IiKSwgVi5wcm90b3R5cGUuaXNBbGlhc09mID0gZnVuY3Rpb24obikgewogICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgViAmJiBuIGluc3RhbmNlb2YgVikpIHJldHVybiAhMTsKICAgICAgdmFyIHQgPSB0aGlzLkEuZmEuZWEsIHIgPSB0aGlzLkEuZGEsIGkgPSBuLkEuZmEuZWE7CiAgICAgIGZvciAobiA9IG4uQS5kYTsgdC5pYTsgKSByID0gdC5xYShyKSwgdCA9IHQuaWE7CiAgICAgIGZvciAoOyBpLmlhOyApIG4gPSBpLnFhKG4pLCBpID0gaS5pYTsKICAgICAgcmV0dXJuIHQgPT09IGkgJiYgciA9PT0gbjsKICAgIH0sIFYucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7CiAgICAgIGlmICh0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5wYSkgcmV0dXJuIHRoaXMuQS5jb3VudC52YWx1ZSArPSAxLCB0aGlzOwogICAgICB2YXIgbiA9IHVuKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLCB7IEE6IHsgdmFsdWU6IEt0KHRoaXMuQSkgfSB9KSk7CiAgICAgIHJldHVybiBuLkEuY291bnQudmFsdWUgKz0gMSwgbi5BLm9hID0gITEsIG47CiAgICB9LCBWLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbigpIHsKICAgICAgdGhpcy5BLmRhIHx8IE5uKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIGR0KHRoaXMpLCBodCh0aGlzLkEpLCB0aGlzLkEucGEgfHwgKHRoaXMuQS5nYSA9IHZvaWQgMCwgdGhpcy5BLmRhID0gdm9pZCAwKTsKICAgIH0sIFYucHJvdG90eXBlLmlzRGVsZXRlZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gIXRoaXMuQS5kYTsKICAgIH0sIFYucHJvdG90eXBlLmRlbGV0ZUxhdGVyID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiB0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgbG4ucHVzaCh0aGlzKSwgbG4ubGVuZ3RoID09PSAxICYmIGNuICYmIGNuKFVuKSwgdGhpcy5BLm9hID0gITAsIHRoaXM7CiAgICB9LCBCLnByb3RvdHlwZS5EYSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgcmV0dXJuIHRoaXMud2EgJiYgKG4gPSB0aGlzLndhKG4pKSwgbjsKICAgIH0sIEIucHJvdG90eXBlLnZhID0gZnVuY3Rpb24obikgewogICAgICB0aGlzLm5hICYmIHRoaXMubmEobik7CiAgICB9LCBCLnByb3RvdHlwZS5hcmdQYWNrQWR2YW5jZSA9IDgsIEIucHJvdG90eXBlLnJlYWRWYWx1ZUZyb21Qb2ludGVyID0gQW4sIEIucHJvdG90eXBlLmRlbGV0ZU9iamVjdCA9IGZ1bmN0aW9uKG4pIHsKICAgICAgbiAhPT0gbnVsbCAmJiBuLmRlbGV0ZSgpOwogICAgfSwgQi5wcm90b3R5cGUuZnJvbVdpcmVUeXBlID0gZnVuY3Rpb24obikgewogICAgICBmdW5jdGlvbiB0KCkgewogICAgICAgIHJldHVybiB0aGlzLnNhID8gX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcy5HYSwgZGE6IHIsIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMsIGRhOiBuIH0pOwogICAgICB9CiAgICAgIHZhciByID0gdGhpcy5EYShuKTsKICAgICAgaWYgKCFyKSByZXR1cm4gdGhpcy52YShuKSwgbnVsbDsKICAgICAgdmFyIGkgPSByZSh0aGlzLmVhLCByKTsKICAgICAgaWYgKGkgIT09IHZvaWQgMCkKICAgICAgICByZXR1cm4gaS5BLmNvdW50LnZhbHVlID09PSAwID8gKGkuQS5kYSA9IHIsIGkuQS5nYSA9IG4sIGkuY2xvbmUoKSkgOiAoaSA9IGkuY2xvbmUoKSwgdGhpcy52YShuKSwgaSk7CiAgICAgIGlmIChpID0gdGhpcy5lYS5DYShyKSwgaSA9IHl0W2ldLCAhaSkgcmV0dXJuIHQuY2FsbCh0aGlzKTsKICAgICAgaSA9IHRoaXMucmEgPyBpLnphIDogaS5wb2ludGVyVHlwZTsKICAgICAgdmFyIG8gPSBtdChyLCB0aGlzLmVhLCBpLmVhKTsKICAgICAgcmV0dXJuIG8gPT09IG51bGwgPyB0LmNhbGwodGhpcykgOiB0aGlzLnNhID8gX24oaS5lYS5tYSwgeyBmYTogaSwgZGE6IG8sIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKAogICAgICAgIGkuZWEubWEsCiAgICAgICAgeyBmYTogaSwgZGE6IG8gfQogICAgICApOwogICAgfSwgZS5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmbikubGVuZ3RoOwogICAgfSwgZS5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gZnVuY3Rpb24oKSB7CiAgICAgIHZhciBuID0gW10sIHQ7CiAgICAgIGZvciAodCBpbiBmbikgZm4uaGFzT3duUHJvcGVydHkodCkgJiYgbi5wdXNoKGZuW3RdKTsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmZsdXNoUGVuZGluZ0RlbGV0ZXMgPSBVbiwgZS5zZXREZWxheUZ1bmN0aW9uID0gZnVuY3Rpb24obikgewogICAgICBjbiA9IG4sIGxuLmxlbmd0aCAmJiBjbiAmJiBjbihVbik7CiAgICB9LCBndCA9IGUuVW5ib3VuZFR5cGVFcnJvciA9IExuKCJVbmJvdW5kVHlwZUVycm9yIiksIGUuY291bnRfZW12YWxfaGFuZGxlcyA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gMCwgdCA9IDU7IHQgPCBqLmxlbmd0aDsgKyt0KSBqW3RdICE9PSB2b2lkIDAgJiYgKytuOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZ2V0X2ZpcnN0X2VtdmFsID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSA1OyBuIDwgai5sZW5ndGg7ICsrbikgaWYgKGpbbl0gIT09IHZvaWQgMCkgcmV0dXJuIGpbbl07CiAgICAgIHJldHVybiBudWxsOwogICAgfSwgYXQucHVzaCh7IEJhOiBmdW5jdGlvbigpIHsKICAgICAgU3QoKTsKICAgIH0gfSk7CiAgICB2YXIgdWUgPSB7CiAgICAgIHo6IGZ1bmN0aW9uKG4pIHsKICAgICAgICByZXR1cm4gRW4obiArIDE2KSArIDE2OwogICAgICB9LAogICAgICB1OiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgdGhyb3cgbmV3IEp0KG4pLkZhKHQsIHIpLCAidW5jYXVnaHRfZXhjZXB0aW9uIiBpbiBtbiA/IG1uLnhhKysgOiBtbi54YSA9IDEsIG47CiAgICAgIH0sCiAgICAgIHc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8pIHsKICAgICAgICB2YXIgcyA9IEZuKHIpOwogICAgICAgIHQgPSBSKHQpLCBEKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICByZXR1cm4gISFsOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGwsIGMpIHsKICAgICAgICAgIHJldHVybiBjID8gaSA6IG87CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICBpZiAociA9PT0gMSkgdmFyIGMgPSBZOwogICAgICAgICAgZWxzZSBpZiAociA9PT0gMikgYyA9IFE7CiAgICAgICAgICBlbHNlIGlmIChyID09PSA0KSBjID0gazsKICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBib29sZWFuIHR5cGUgc2l6ZTogIiArIHQpOwogICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKGNbbCA+PiBzXSk7CiAgICAgICAgfSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGg6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYsIGQsIGgsIHcpIHsKICAgICAgICBkID0gUihkKSwgcyA9IEcobywgcyksIGMgJiYgKGMgPSBHKGwsIGMpKSwgZiAmJiAoZiA9IEcoeSwgZikpLCB3ID0gRyhoLCB3KTsKICAgICAgICB2YXIgUCA9IEluKGQpOwogICAgICAgIHB0KFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGQgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW2ldKTsKICAgICAgICB9KSwgdG4oW24sIHQsIHJdLCBpID8gW2ldIDogW10sIGZ1bmN0aW9uKHApIHsKICAgICAgICAgIGlmIChwID0gcFswXSwgaSkKICAgICAgICAgICAgdmFyIE4gPSBwLmVhLCBiID0gTi5tYTsKICAgICAgICAgIGVsc2UgYiA9IFYucHJvdG90eXBlOwogICAgICAgICAgcCA9IGpuKFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSB4KSB0aHJvdyBuZXcgbm4oIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgIiArIGQpOwogICAgICAgICAgICBpZiAoTC5sYSA9PT0gdm9pZCAwKSB0aHJvdyBuZXcgbm4oZCArICIgaGFzIG5vIGFjY2Vzc2libGUgY29uc3RydWN0b3IiKTsKICAgICAgICAgICAgdmFyIGJ0ID0gTC5sYVthcmd1bWVudHMubGVuZ3RoXTsKICAgICAgICAgICAgaWYgKGJ0ID09PSB2b2lkIDApIHRocm93IG5ldyBubigiVHJpZWQgdG8gaW52b2tlIGN0b3Igb2YgIiArIGQgKyAiIHdpdGggaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdGVkICgiICsgT2JqZWN0LmtleXMoTC5sYSkudG9TdHJpbmcoKSArICIpIHBhcmFtZXRlcnMgaW5zdGVhZCEiKTsKICAgICAgICAgICAgcmV0dXJuIGJ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9KTsKICAgICAgICAgIHZhciB4ID0gT2JqZWN0LmNyZWF0ZShiLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBwIH0gfSk7CiAgICAgICAgICBwLnByb3RvdHlwZSA9IHg7CiAgICAgICAgICB2YXIgTCA9IG5ldyBxdChkLCBwLCB4LCB3LCBOLCBzLCBjLCBmKTsKICAgICAgICAgIE4gPSBuZXcgQihkLCBMLCAhMCwgITEpLCBiID0gbmV3IEIoZCArICIqIiwgTCwgITEsICExKTsKICAgICAgICAgIHZhciBobiA9IG5ldyBCKGQgKyAiIGNvbnN0KiIsIEwsICExLCAhMCk7CiAgICAgICAgICByZXR1cm4geXRbbl0gPSB7IHBvaW50ZXJUeXBlOiBiLCB6YTogaG4gfSwgdnQoUCwgcCksIFtOLCBiLCBobl07CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMpIHsKICAgICAgICBLbigwIDwgdCk7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBvID0gRyhpLCBvKTsKICAgICAgICB2YXIgYyA9IFtzXSwgeSA9IFtdOwogICAgICAgIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGYpIHsKICAgICAgICAgIGYgPSBmWzBdOwogICAgICAgICAgdmFyIGQgPSAiY29uc3RydWN0b3IgIiArIGYubmFtZTsKICAgICAgICAgIGlmIChmLmVhLmxhID09PSB2b2lkIDAgJiYgKGYuZWEubGEgPSBbXSksIGYuZWEubGFbdCAtIDFdICE9PSB2b2lkIDApIHRocm93IG5ldyBubigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIGNvbnN0cnVjdG9ycyB3aXRoIGlkZW50aWNhbCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArICh0IC0gMSkgKyAiKSBmb3IgY2xhc3MgJyIgKyBmLm5hbWUgKyAiJyEgT3ZlcmxvYWQgcmVzb2x1dGlvbiBpcyBjdXJyZW50bHkgb25seSBwZXJmb3JtZWQgdXNpbmcgdGhlIHBhcmFtZXRlciBjb3VudCwgbm90IGFjdHVhbCB0eXBlIGluZm8hIik7CiAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGYubmFtZSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBsKTsKICAgICAgICAgIH0sIHRuKFtdLCBsLCBmdW5jdGlvbihoKSB7CiAgICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggIT09IHQgLSAxICYmIHYoZCArICIgY2FsbGVkIHdpdGggIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArICh0IC0gMSkpLCB5Lmxlbmd0aCA9IDAsIGMubGVuZ3RoID0gdDsKICAgICAgICAgICAgICBmb3IgKHZhciB3ID0gMTsgdyA8IHQ7ICsrdykgY1t3XSA9IGhbd10udG9XaXJlVHlwZSgKICAgICAgICAgICAgICAgIHksCiAgICAgICAgICAgICAgICBhcmd1bWVudHNbdyAtIDFdCiAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICByZXR1cm4gdyA9IG8uYXBwbHkobnVsbCwgYyksIENuKHkpLCBoWzBdLmZyb21XaXJlVHlwZSh3KTsKICAgICAgICAgICAgfSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGI6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYpIHsKICAgICAgICB0ID0gUih0KSwgbyA9IEcoaSwgbyksIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGQpIHsKICAgICAgICAgIGQgPSBkWzBdOwogICAgICAgICAgdmFyIGggPSBkLm5hbWUgKyAiLiIgKyB0LCB3ID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgbF0pOwogICAgICAgICAgfSwgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAgfTsKICAgICAgICAgIHJldHVybiB5ID8gdy5zZXQgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBhY2Nlc3MgIiArIGggKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW3IsIGxdKTsKICAgICAgICAgIH0gOiB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICB2KGggKyAiIGlzIGEgcmVhZC1vbmx5IHByb3BlcnR5Iik7CiAgICAgICAgICB9LCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZC5lYS5tYSwgdCwgdyksIHRuKFtdLCB5ID8gW3IsIGxdIDogW3JdLCBmdW5jdGlvbihQKSB7CiAgICAgICAgICAgIHZhciBwID0gUFswXSwgTiA9IHsgZ2V0OiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICB2YXIgeCA9IF90KHRoaXMsIGQsIGggKyAiIGdldHRlciIpOwogICAgICAgICAgICAgIHJldHVybiBwLmZyb21XaXJlVHlwZShvKHMsIHgpKTsKICAgICAgICAgICAgfSwgZW51bWVyYWJsZTogITAgfTsKICAgICAgICAgICAgaWYgKHkpIHsKICAgICAgICAgICAgICB5ID0gRyhjLCB5KTsKICAgICAgICAgICAgICB2YXIgYiA9IFBbMV07CiAgICAgICAgICAgICAgTi5zZXQgPSBmdW5jdGlvbih4KSB7CiAgICAgICAgICAgICAgICB2YXIgTCA9IF90KHRoaXMsIGQsIGggKyAiIHNldHRlciIpLCBobiA9IFtdOwogICAgICAgICAgICAgICAgeShmLCBMLCBiLnRvV2lyZVR5cGUoaG4sIHgpKSwgQ24oaG4pOwogICAgICAgICAgICAgIH07CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCBOKSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIHY6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24ocikgewogICAgICAgICAgdmFyIGkgPSBqW3JdLnZhbHVlOwogICAgICAgICAgcmV0dXJuIEJuKHIpLCBpOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHIsIGkpIHsKICAgICAgICAgIHJldHVybiBlbihpKTsKICAgICAgICB9LCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IEFuLCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgbTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHIgPSBGbihyKSwgdCA9IFIodCksIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gaTsKICAgICAgICAgIH0sCiAgICAgICAgICB0b1dpcmVUeXBlOiBmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICAgIGlmICh0eXBlb2YgbyAhPSAibnVtYmVyIiAmJiB0eXBlb2YgbyAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4obykgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgcmV0dXJuIG87CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogaWUodCwgciksCiAgICAgICAgICBrYTogbnVsbAogICAgICAgIH0pOwogICAgICB9LAogICAgICBjOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvLCBzKSB7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBuID0gUihuKSwgbyA9IEcoaSwgbyksIHB0KG4sIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjYWxsICIgKyBuICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGwpOwogICAgICAgIH0sIHQgLSAxKSwgdG4oW10sIGwsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIHZhciB5ID0gbiwgZiA9IG47CiAgICAgICAgICBjID0gW2NbMF0sIG51bGxdLmNvbmNhdChjLnNsaWNlKDEpKTsKICAgICAgICAgIHZhciBkID0gbywgaCA9IGMubGVuZ3RoOwogICAgICAgICAgMiA+IGggJiYgdigiYXJnVHlwZXMgYXJyYXkgc2l6ZSBtaXNtYXRjaCEgTXVzdCBhdCBsZWFzdCBnZXQgcmV0dXJuIHZhbHVlIGFuZCAndGhpcycgdHlwZXMhIik7CiAgICAgICAgICBmb3IgKHZhciB3ID0gY1sxXSAhPT0gbnVsbCAmJiAhMSwgUCA9ICExLCBwID0gMTsgcCA8IGMubGVuZ3RoOyArK3ApIGlmIChjW3BdICE9PSBudWxsICYmIGNbcF0ua2EgPT09IHZvaWQgMCkgewogICAgICAgICAgICBQID0gITA7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgfQogICAgICAgICAgdmFyIE4gPSBjWzBdLm5hbWUgIT09ICJ2b2lkIiwgYiA9ICIiLCB4ID0gIiI7CiAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgaCAtIDI7ICsrcCkgYiArPSAocCAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHAsIHggKz0gKHAgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyBwICsgIldpcmVkIjsKICAgICAgICAgIGYgPSAicmV0dXJuIGZ1bmN0aW9uICIgKyBJbihmKSArICIoIiArIGIgKyBgKSB7CmlmIChhcmd1bWVudHMubGVuZ3RoICE9PSBgICsgKGggLSAyKSArIGApIHsKdGhyb3dCaW5kaW5nRXJyb3IoJ2Z1bmN0aW9uIGAgKyBmICsgIiBjYWxsZWQgd2l0aCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKGggLSAyKSArIGAgYXJncyEnKTsKfQpgLCBQICYmIChmICs9IGB2YXIgZGVzdHJ1Y3RvcnMgPSBbXTsKYCk7CiAgICAgICAgICB2YXIgTCA9IFAgPyAiZGVzdHJ1Y3RvcnMiIDogIm51bGwiOwogICAgICAgICAgZm9yIChiID0gInRocm93QmluZGluZ0Vycm9yIGludm9rZXIgZm4gcnVuRGVzdHJ1Y3RvcnMgcmV0VHlwZSBjbGFzc1BhcmFtIi5zcGxpdCgiICIpLCBkID0gW3YsIGQsIHMsIENuLCBjWzBdLCBjWzFdXSwgdyAmJiAoZiArPSAidmFyIHRoaXNXaXJlZCA9IGNsYXNzUGFyYW0udG9XaXJlVHlwZSgiICsgTCArIGAsIHRoaXMpOwpgKSwgcCA9IDA7IHAgPCBoIC0gMjsgKytwKSBmICs9ICJ2YXIgYXJnIiArIHAgKyAiV2lyZWQgPSBhcmdUeXBlIiArIHAgKyAiLnRvV2lyZVR5cGUoIiArIEwgKyAiLCBhcmciICsgcCArICIpOyAvLyAiICsgY1twICsgMl0ubmFtZSArIGAKYCwgYi5wdXNoKCJhcmdUeXBlIiArIHApLCBkLnB1c2goY1twICsgMl0pOwogICAgICAgICAgaWYgKHcgJiYgKHggPSAidGhpc1dpcmVkIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCksIGYgKz0gKE4gPyAidmFyIHJ2ID0gIiA6ICIiKSArICJpbnZva2VyKGZuIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCArIGApOwpgLCBQKSBmICs9IGBydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyk7CmA7CiAgICAgICAgICBlbHNlIGZvciAocCA9IHcgPyAxIDogMjsgcCA8IGMubGVuZ3RoOyArK3ApIGggPSBwID09PSAxID8gInRoaXNXaXJlZCIgOiAiYXJnIiArIChwIC0gMikgKyAiV2lyZWQiLCBjW3BdLmthICE9PSBudWxsICYmIChmICs9IGggKyAiX2R0b3IoIiArIGggKyAiKTsgLy8gIiArIGNbcF0ubmFtZSArIGAKYCwgYi5wdXNoKGggKyAiX2R0b3IiKSwgZC5wdXNoKGNbcF0ua2EpKTsKICAgICAgICAgIHJldHVybiBOICYmIChmICs9IGB2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpOwpyZXR1cm4gcmV0OwpgKSwgYi5wdXNoKGYgKyBgfQpgKSwgYyA9IGFlKGIpLmFwcGx5KG51bGwsIGQpLCB2dCh5LCBjLCB0IC0gMSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBlOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvKSB7CiAgICAgICAgZnVuY3Rpb24gcyhmKSB7CiAgICAgICAgICByZXR1cm4gZjsKICAgICAgICB9CiAgICAgICAgdCA9IFIodCksIG8gPT09IC0xICYmIChvID0gNDI5NDk2NzI5NSk7CiAgICAgICAgdmFyIGwgPSBGbihyKTsKICAgICAgICBpZiAoaSA9PT0gMCkgewogICAgICAgICAgdmFyIGMgPSAzMiAtIDggKiByOwogICAgICAgICAgcyA9IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgcmV0dXJuIGYgPDwgYyA+Pj4gYzsKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICAgIHZhciB5ID0gdC5pbmRleE9mKCJ1bnNpZ25lZCIpICE9IC0xOwogICAgICAgIEQobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IHMsIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGYsIGQpIHsKICAgICAgICAgIGlmICh0eXBlb2YgZCAhPSAibnVtYmVyIiAmJiB0eXBlb2YgZCAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oZCkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgIGlmIChkIDwgaSB8fCBkID4gbykgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciAiJyArIHJuKGQpICsgJyIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSAiJyArIHQgKyAnIiwgd2hpY2ggaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UgWycgKyBpICsgIiwgIiArIG8gKyAiXSEiKTsKICAgICAgICAgIHJldHVybiB5ID8gZCA+Pj4gMCA6IGQgfCAwOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogb2UodCwgbCwgaSAhPT0gMCksIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBkOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgZnVuY3Rpb24gaShzKSB7CiAgICAgICAgICBzID4+PSAyOwogICAgICAgICAgdmFyIGwgPSBVOwogICAgICAgICAgcmV0dXJuIG5ldyBvKEssIGxbcyArIDFdLCBsW3NdKTsKICAgICAgICB9CiAgICAgICAgdmFyIG8gPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gUihyKSwgRChuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFIodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgbyA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpIGZvciAodmFyIHMgPSBpICsgNCwgbCA9IDA7IGwgPD0gbzsgKytsKSB7CiAgICAgICAgICAgICAgdmFyIGMgPSBpICsgNCArIGw7CiAgICAgICAgICAgICAgaWYgKGwgPT0gbyB8fCBGW2NdID09IDApIHsKICAgICAgICAgICAgICAgIGlmIChzKSB7CiAgICAgICAgICAgICAgICAgIHZhciB5ID0gcywgZiA9IEYsIGQgPSB5ICsgKGMgLSBzKTsKICAgICAgICAgICAgICAgICAgZm9yIChzID0geTsgZltzXSAmJiAhKHMgPj0gZCk7ICkgKytzOwogICAgICAgICAgICAgICAgICBpZiAoMTYgPCBzIC0geSAmJiBmLnN1YmFycmF5ICYmIFFuKSB5ID0gUW4uZGVjb2RlKGYuc3ViYXJyYXkoeSwgcykpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAiIjsgeSA8IHM7ICkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBmW3krK107CiAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZbeSsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGggJiAyMjQpID09IDE5MikgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChoICYgMzEpIDw8IDYgfCB3KTsKICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3krK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gKGggJiAyNDApID09IDIyNCA/IChoICYgMTUpIDw8IDEyIHwgdyA8PCA2IHwgUCA6IChoICYgNykgPDwgMTggfCB3IDw8IDEyIHwgUCA8PCA2IHwgZlt5KytdICYgNjMsIDY1NTM2ID4gaCA/IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKSA6IChoIC09IDY1NTM2LCBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBoID4+IDEwLCA1NjMyMCB8IGggJiAxMDIzKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoaCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHkgPSBkOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgeSA9ICIiOwogICAgICAgICAgICAgICAgaWYgKHAgPT09IHZvaWQgMCkgdmFyIHAgPSB5OwogICAgICAgICAgICAgICAgZWxzZSBwICs9ICJcMCIsIHAgKz0geTsKICAgICAgICAgICAgICAgIHMgPSBjICsgMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgZm9yIChwID0gQXJyYXkobyksIGwgPSAwOyBsIDwgbzsgKytsKSBwW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZShGW2kgKyA0ICsgbF0pOwogICAgICAgICAgICAgIHAgPSBwLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiB6KGkpLCBwOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIG8pIHsKICAgICAgICAgICAgbyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChvID0gbmV3IFVpbnQ4QXJyYXkobykpOwogICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiBvID09ICJzdHJpbmciOwogICAgICAgICAgICBzIHx8IG8gaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IG8gaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBvIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGwgPSAociAmJiBzID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgby5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBvLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IG8uY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIG8ubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBjID0gRW4oNCArIGwgKyAxKTsKICAgICAgICAgICAgaWYgKFVbYyA+PiAyXSA9IGwsIHIgJiYgcykgVXQobywgYyArIDQsIGwgKyAxKTsKICAgICAgICAgICAgZWxzZSBpZiAocykgZm9yIChzID0gMDsgcyA8IGw7ICsrcykgewogICAgICAgICAgICAgIHZhciB5ID0gby5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgICAgIDI1NSA8IHkgJiYgKHooYyksIHYoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpKSwgRltjICsgNCArIHNdID0geTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGZvciAocyA9IDA7IHMgPCBsOyArK3MpIEZbYyArIDQgKyBzXSA9IG9bc107CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaCh6LCBjKSwgYzsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHooaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFIociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IER0LCBvID0gQnQsIHMgPSB6dCwgbCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4geW47CiAgICAgICAgICB9LCBjID0gMTsKICAgICAgICBlbHNlIHQgPT09IDQgJiYgKGkgPSBWdCwgbyA9IEd0LCBzID0gWXQsIGwgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiBVOwogICAgICAgIH0sIGMgPSAyKTsKICAgICAgICBEKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVt5ID4+IDJdLCBkID0gbCgpLCBoLCB3ID0geSArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgcCA9IHkgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFtwID4+IGNdID09IDApICYmICh3ID0gaSh3LCBwIC0gdyksIGggPT09IHZvaWQgMCA/IGggPSB3IDogKGggKz0gIlwwIiwgaCArPSB3KSwgdyA9IHAgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiB6KHkpLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHksIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gcyhmKSwgaCA9IEVuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBjLCBvKGYsIGggKyA0LCBkICsgdCksIHkgIT09IG51bGwgJiYgeS5wdXNoKHosIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICB6KHkpOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSB6bihuKSwgdCA9IEN0KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBvID0gZW4oaSk7CiAgICAgICAgcmV0dXJuIGtbciA+PiAyXSA9IG8sIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogQm4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IHpuKG4pLCB0ID0gem4odCksIGVuKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBzZVtuXTsKICAgICAgICByZXR1cm4gZW4odCA9PT0gdm9pZCAwID8gUihuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgQ24oaltuXS52YWx1ZSksIEJuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBDdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIGVuKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBzbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgRi5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gRi5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKSByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBILmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBLLmJ5dGVMZW5ndGggKyA2NTUzNSA+Pj4gMTYpLCBldChILmJ1ZmZlcik7CiAgICAgICAgICAgICAgdmFyIG8gPSAxOwogICAgICAgICAgICAgIGJyZWFrIG47CiAgICAgICAgICAgIH0gY2F0Y2ggewogICAgICAgICAgICB9CiAgICAgICAgICAgIG8gPSB2b2lkIDA7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAobykgcmV0dXJuICEwOwogICAgICAgIH0KICAgICAgICByZXR1cm4gITE7CiAgICAgIH0sCiAgICAgIHM6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IDA7CiAgICAgICAgcmV0dXJuIEV0KCkuZm9yRWFjaChmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICB2YXIgcyA9IHQgKyByOwogICAgICAgICAgZm9yIChvID0ga1tuICsgNCAqIG8gPj4gMl0gPSBzLCBzID0gMDsgcyA8IGkubGVuZ3RoOyArK3MpIFlbbysrID4+IDBdID0gaS5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgWVtvID4+IDBdID0gMCwgciArPSBpLmxlbmd0aCArIDE7CiAgICAgICAgfSksIDA7CiAgICAgIH0sCiAgICAgIHQ6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IEV0KCk7CiAgICAgICAga1tuID4+IDJdID0gci5sZW5ndGg7CiAgICAgICAgdmFyIGkgPSAwOwogICAgICAgIHJldHVybiByLmZvckVhY2goZnVuY3Rpb24obykgewogICAgICAgICAgaSArPSBvLmxlbmd0aCArIDE7CiAgICAgICAgfSksIGtbdCA+PiAyXSA9IGksIDA7CiAgICAgIH0sCiAgICAgIGE6IEgKICAgIH07CiAgICAoZnVuY3Rpb24oKSB7CiAgICAgIGZ1bmN0aW9uIG4ocykgewogICAgICAgIHMgPSBzLmV4cG9ydHMsIHMgPSBNdChzKSwgZS5hc20gPSBzLCBaLS0sIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIFogPT0gMCAmJiBvbiAmJiAocyA9IG9uLCBvbiA9IG51bGwsIHMoKSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gdChzKSB7CiAgICAgICAgbihzLmluc3RhbmNlKTsKICAgICAgfQogICAgICBmdW5jdGlvbiByKHMpIHsKICAgICAgICByZXR1cm4gWHQoKS50aGVuKGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShsLCBpKTsKICAgICAgICB9KS50aGVuKHMsIGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIEUoImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206ICIgKyBsKSwgc24obCk7CiAgICAgICAgfSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSB7IGE6IHVlIH07CiAgICAgIGlmIChaKyssIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIGUuaW5zdGFudGlhdGVXYXNtKSB0cnkgewogICAgICAgIHZhciBvID0gZS5pbnN0YW50aWF0ZVdhc20oaSwgbik7CiAgICAgICAgcmV0dXJuIG8gPSBNdChvKTsKICAgICAgfSBjYXRjaCAocykgewogICAgICAgIHJldHVybiBFKCJNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiAiICsgcyksICExOwogICAgICB9CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICBpZiAoVyB8fCB0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgIT0gImZ1bmN0aW9uIiB8fCBzdCgpIHx8IFJuKCJmaWxlOi8vIikgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIpIHJldHVybiByKHQpOwogICAgICAgIGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihzKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocywgaSkudGhlbih0LCBmdW5jdGlvbihsKSB7CiAgICAgICAgICAgIHJldHVybiBFKCJ3YXNtIHN0cmVhbWluZyBjb21waWxlIGZhaWxlZDogIiArIGwpLCBFKCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvbiIpLCByKHQpOwogICAgICAgICAgfSk7CiAgICAgICAgfSk7CiAgICAgIH0oKSwge307CiAgICB9KSgpOwogICAgdmFyIFN0ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChTdCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZS5hc20uQikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIEVuID0gZS5fbWFsbG9jID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRW4gPSBlLl9tYWxsb2MgPSBlLmFzbS5DKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgeiA9IGUuX2ZyZWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICh6ID0gZS5fZnJlZSA9IGUuYXNtLkQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBlLmFzbS5FKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGUuYXNtLkYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWkgPSBlLmFzbS5HKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpID0gZS5hc20uSCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9pID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2kgPSBlLmFzbS5JKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWkgPSBlLmFzbS5KKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaSA9IGUuYXNtLkspLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfZmlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2ZpaSA9IGUuYXNtLkwpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpZiA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlmID0gZS5hc20uTSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaSA9IGUuYXNtLk4pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpID0gZS5hc20uTykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpID0gZS5hc20uUCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpID0gZS5hc20uUSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpaSA9IGUuYXNtLlIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWkgPSBlLmFzbS5TKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBlLmFzbS5UKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZS5hc20uVSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGUuYXNtLlYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZS5hc20uVykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpID0gZS5hc20uWCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaWkgPSBlLmFzbS5ZKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpID0gZS5hc20uWikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWkgPSBlLmFzbS5fKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZS5hc20uJCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBlLmFzbS5hYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGUuYXNtLmJhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGUuYXNtLmNhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIHZhciBQbjsKICAgIG9uID0gZnVuY3Rpb24gbigpIHsKICAgICAgUG4gfHwgR24oKSwgUG4gfHwgKG9uID0gbik7CiAgICB9OwogICAgZnVuY3Rpb24gR24oKSB7CiAgICAgIGZ1bmN0aW9uIG4oKSB7CiAgICAgICAgaWYgKCFQbiAmJiAoUG4gPSAhMCwgZS5jYWxsZWRSdW4gPSAhMCwgIWtuKSkgewogICAgICAgICAgaWYgKHBuKGF0KSwgcG4oWnQpLCBtKGUpLCBlLm9uUnVudGltZUluaXRpYWxpemVkICYmIGUub25SdW50aW1lSW5pdGlhbGl6ZWQoKSwgZS5wb3N0UnVuKSBmb3IgKHR5cGVvZiBlLnBvc3RSdW4gPT0gImZ1bmN0aW9uIiAmJiAoZS5wb3N0UnVuID0gW2UucG9zdFJ1bl0pOyBlLnBvc3RSdW4ubGVuZ3RoOyApIHsKICAgICAgICAgICAgdmFyIHQgPSBlLnBvc3RSdW4uc2hpZnQoKTsKICAgICAgICAgICAgb3QudW5zaGlmdCh0KTsKICAgICAgICAgIH0KICAgICAgICAgIHBuKG90KTsKICAgICAgICB9CiAgICAgIH0KICAgICAgaWYgKCEoMCA8IFopKSB7CiAgICAgICAgaWYgKGUucHJlUnVuKSBmb3IgKHR5cGVvZiBlLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnByZVJ1biA9IFtlLnByZVJ1bl0pOyBlLnByZVJ1bi5sZW5ndGg7ICkgJHQoKTsKICAgICAgICBwbihpdCksIDAgPCBaIHx8IChlLnNldFN0YXR1cyA/IChlLnNldFN0YXR1cygiUnVubmluZy4uLiIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgICAgZS5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgfSwgMSksIG4oKTsKICAgICAgICB9LCAxKSkgOiBuKCkpOwogICAgICB9CiAgICB9CiAgICBpZiAoZS5ydW4gPSBHbiwgZS5wcmVJbml0KSBmb3IgKHR5cGVvZiBlLnByZUluaXQgPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVJbml0ID0gW2UucHJlSW5pdF0pOyAwIDwgZS5wcmVJbml0Lmxlbmd0aDsgKSBlLnByZUluaXQucG9wKCkoKTsKICAgIHJldHVybiBHbigpLCB1LnJlYWR5OwogIH07Cn0oKTsKY2xhc3MgbWUgewogIGNvbnN0cnVjdG9yKCkgewogICAgWW4odGhpcywgInNhbVdhc21Nb2R1bGUiKTsKICB9CiAgZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZSkgewogICAgcmV0dXJuIHsKICAgICAgbG9jYXRlRmlsZTogKG0pID0+IG5ldyBVUkwoZSB8fCBtLCB1KS5ocmVmCiAgICB9OwogIH0KICBhc3luYyBoYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKHUsIGUpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IG0gPSBhd2FpdCBmZXRjaCh1KTsKICAgICAgaWYgKCFtLm9rKQogICAgICAgIHRocm93IG5ldyBJKAogICAgICAgICAgYFRoZSBwYXRoIHRvICR7ZX0gaXMgaW5jb3JyZWN0IG9yIHRoZSBtb2R1bGUgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgICAgY29uc3QgZyA9IGF3YWl0IG0uYXJyYXlCdWZmZXIoKTsKICAgICAgaWYgKCFXZWJBc3NlbWJseS52YWxpZGF0ZShnKSkKICAgICAgICB0aHJvdyBuZXcgSSgKICAgICAgICAgIGBUaGUgcHJvdmlkZWQgJHtlfSBpcyBub3QgYSB2YWxpZCBXQVNNIG1vZHVsZS4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgIH0gY2F0Y2ggKG0pIHsKICAgICAgaWYgKG0gaW5zdGFuY2VvZiBJKQogICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICAgICAiWW91IGNhbiBmaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIGhvc3Qgd2FzbSBmaWxlcyBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuaW5ub3ZhdHJpY3MuY29tL2RpZ2l0YWwtb25ib2FyZGluZy90ZWNobmljYWwvcmVtb3RlL2RvdC13ZWItZG9jdW1lbnQvbGF0ZXN0L2RvY3VtZW50YXRpb24vI19ob3N0aW5nX3NhbV93YXNtIgogICAgICAgICksIG07CiAgICB9CiAgfQogIGFzeW5jIGdldFdhc21GaWxlTmFtZSgpIHsKICAgIHJldHVybiBhd2FpdCBmZSgpID8ga3Quc2ltZCA6IGt0LnNhbTsKICB9CiAgYXN5bmMgaW5pdFNhbU1vZHVsZSh1LCBlID0gIi93YXNtIikgewogICAgaWYgKHRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgcmV0dXJuOwogICAgY29uc3QgbSA9IGF3YWl0IHRoaXMuZ2V0V2FzbUZpbGVOYW1lKCksIGcgPSBgJHtlfS8ke219YDsKICAgIHRyeSB7CiAgICAgIHRoaXMuc2FtV2FzbU1vZHVsZSA9IGF3YWl0IHBlKHRoaXMuZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZykpOwogICAgfSBjYXRjaCB7CiAgICAgIHRocm93IGF3YWl0IHRoaXMuaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZShnLCBtKSwgbmV3IEkoIkNvdWxkIG5vdCBpbml0IGRldGVjdG9yLiIpOwogICAgfQogIH0KICBhc3luYyBnZXRTYW1WZXJzaW9uKCkgewogICAgdmFyIGU7CiAgICBjb25zdCB1ID0gYXdhaXQgKChlID0gdGhpcy5zYW1XYXNtTW9kdWxlKSA9PSBudWxsID8gdm9pZCAwIDogZS5nZXRJbmZvU3RyaW5nKCkpOwogICAgcmV0dXJuIHUgPT0gbnVsbCA/IHZvaWQgMCA6IHUudHJpbSgpOwogIH0KICAvKgogICAqIEluIFRTIDUuMi4wIHdhcyBhZGRlZCBzcGVjaWFsIGtleXdvcmQgInVzaW5nIiB3aGljaCBjb3VsZCBiZSBwZXJmZWN0IGZvciB0aGlzIGNhc2UuCiAgICogVW5mb3J0dW5hdGVseSwgdml0ZSBwcmVhY3QgcGx1Z2luIGRvZXMgbm90IHN1cHBvcnQgdGhpcyB2ZXJzaW9uIG9mIFRTIHlldC4KICAgKiBDaGVjayBwb3NzaWJpbGl0eSBvZiB1c2luZyAidXNpbmciIGtleXdvcmQgd2hlbiB2aXRlIHByZWFjdCBwbHVnaW4gdXBkYXRlcwogICAqLwogIGFsbG9jYXRlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgcmV0dXJuIHRoaXMuc2FtV2FzbU1vZHVsZS5fbWFsbG9jKHUpOwogIH0KICByZWxlYXNlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLl9mcmVlKHUpOwogIH0KICB3cml0ZURhdGFUb01lbW9yeSh1LCBlKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEkoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIHRoaXMuc2FtV2FzbU1vZHVsZS5IRUFQVTguc2V0KHUsIGUpOwogIH0KfQovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQwogKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMAogKi8KY29uc3QgeHQgPSBTeW1ib2woIkNvbWxpbmsucHJveHkiKSwgdmUgPSBTeW1ib2woIkNvbWxpbmsuZW5kcG9pbnQiKSwgZ2UgPSBTeW1ib2woIkNvbWxpbmsucmVsZWFzZVByb3h5IiksIFpuID0gU3ltYm9sKCJDb21saW5rLmZpbmFsaXplciIpLCBPbiA9IFN5bWJvbCgiQ29tbGluay50aHJvd24iKSwgRnQgPSAoYSkgPT4gdHlwZW9mIGEgPT0gIm9iamVjdCIgJiYgYSAhPT0gbnVsbCB8fCB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iLCB3ZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBGdChhKSAmJiBhW3h0XSwKICBzZXJpYWxpemUoYSkgewogICAgY29uc3QgeyBwb3J0MTogdSwgcG9ydDI6IGUgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgcmV0dXJuIEpuKGEsIHUpLCBbZSwgW2VdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHJldHVybiBhLnN0YXJ0KCksIFRlKGEpOwogIH0KfSwgQWUgPSB7CiAgY2FuSGFuZGxlOiAoYSkgPT4gRnQoYSkgJiYgT24gaW4gYSwKICBzZXJpYWxpemUoeyB2YWx1ZTogYSB9KSB7CiAgICBsZXQgdTsKICAgIHJldHVybiBhIGluc3RhbmNlb2YgRXJyb3IgPyB1ID0gewogICAgICBpc0Vycm9yOiAhMCwKICAgICAgdmFsdWU6IHsKICAgICAgICBtZXNzYWdlOiBhLm1lc3NhZ2UsCiAgICAgICAgbmFtZTogYS5uYW1lLAogICAgICAgIHN0YWNrOiBhLnN0YWNrCiAgICAgIH0KICAgIH0gOiB1ID0geyBpc0Vycm9yOiAhMSwgdmFsdWU6IGEgfSwgW3UsIFtdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHRocm93IGEuaXNFcnJvciA/IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGEudmFsdWUubWVzc2FnZSksIGEudmFsdWUpIDogYS52YWx1ZTsKICB9Cn0sIEl0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoWwogIFsicHJveHkiLCB3ZV0sCiAgWyJ0aHJvdyIsIEFlXQpdKTsKZnVuY3Rpb24gX2UoYSwgdSkgewogIGZvciAoY29uc3QgZSBvZiBhKQogICAgaWYgKHUgPT09IGUgfHwgZSA9PT0gIioiIHx8IGUgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZS50ZXN0KHUpKQogICAgICByZXR1cm4gITA7CiAgcmV0dXJuICExOwp9CmZ1bmN0aW9uIEpuKGEsIHUgPSBnbG9iYWxUaGlzLCBlID0gWyIqIl0pIHsKICB1LmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBtKGcpIHsKICAgIGlmICghZyB8fCAhZy5kYXRhKQogICAgICByZXR1cm47CiAgICBpZiAoIV9lKGUsIGcub3JpZ2luKSkgewogICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgb3JpZ2luICcke2cub3JpZ2lufScgZm9yIGNvbWxpbmsgcHJveHlgKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgY29uc3QgeyBpZDogQywgdHlwZTogQSwgcGF0aDogTSB9ID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFtdIH0sIGcuZGF0YSksIE8gPSAoZy5kYXRhLmFyZ3VtZW50TGlzdCB8fCBbXSkubWFwKEopOwogICAgbGV0IFQ7CiAgICB0cnkgewogICAgICBjb25zdCBfID0gTS5zbGljZSgwLCAtMSkucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKSwgUyA9IE0ucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKTsKICAgICAgc3dpdGNoIChBKSB7CiAgICAgICAgY2FzZSAiR0VUIjoKICAgICAgICAgIFQgPSBTOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiU0VUIjoKICAgICAgICAgIF9bTS5zbGljZSgtMSlbMF1dID0gSihnLmRhdGEudmFsdWUpLCBUID0gITA7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJBUFBMWSI6CiAgICAgICAgICBUID0gUy5hcHBseShfLCBPKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkNPTlNUUlVDVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IEUgPSBuZXcgUyguLi5PKTsKICAgICAgICAgICAgVCA9IFNlKEUpOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiRU5EUE9JTlQiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCB7IHBvcnQxOiBFLCBwb3J0MjogVyB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICAgICAgICAgIEpuKGEsIFcpLCBUID0gT2UoRSwgW0VdKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlJFTEVBU0UiOgogICAgICAgICAgVCA9IHZvaWQgMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICByZXR1cm47CiAgICAgIH0KICAgIH0gY2F0Y2ggKF8pIHsKICAgICAgVCA9IHsgdmFsdWU6IF8sIFtPbl06IDAgfTsKICAgIH0KICAgIFByb21pc2UucmVzb2x2ZShUKS5jYXRjaCgoXykgPT4gKHsgdmFsdWU6IF8sIFtPbl06IDAgfSkpLnRoZW4oKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oXyk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBTKSwgeyBpZDogQyB9KSwgRSksIEEgPT09ICJSRUxFQVNFIiAmJiAodS5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgbSksIGp0KHUpLCBabiBpbiBhICYmIHR5cGVvZiBhW1puXSA9PSAiZnVuY3Rpb24iICYmIGFbWm5dKCkpOwogICAgfSkuY2F0Y2goKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oewogICAgICAgIHZhbHVlOiBuZXcgVHlwZUVycm9yKCJVbnNlcmlhbGl6YWJsZSByZXR1cm4gdmFsdWUiKSwKICAgICAgICBbT25dOiAwCiAgICAgIH0pOwogICAgICB1LnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUyksIHsgaWQ6IEMgfSksIEUpOwogICAgfSk7CiAgfSksIHUuc3RhcnQgJiYgdS5zdGFydCgpOwp9CmZ1bmN0aW9uIENlKGEpIHsKICByZXR1cm4gYS5jb25zdHJ1Y3Rvci5uYW1lID09PSAiTWVzc2FnZVBvcnQiOwp9CmZ1bmN0aW9uIGp0KGEpIHsKICBDZShhKSAmJiBhLmNsb3NlKCk7Cn0KZnVuY3Rpb24gVGUoYSwgdSkgewogIHJldHVybiBYbihhLCBbXSwgdSk7Cn0KZnVuY3Rpb24gTW4oYSkgewogIGlmIChhKQogICAgdGhyb3cgbmV3IEVycm9yKCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGUiKTsKfQpmdW5jdGlvbiBMdChhKSB7CiAgcmV0dXJuIGFuKGEsIHsKICAgIHR5cGU6ICJSRUxFQVNFIgogIH0pLnRoZW4oKCkgPT4gewogICAganQoYSk7CiAgfSk7Cn0KY29uc3QgU24gPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgV24gPSAiRmluYWxpemF0aW9uUmVnaXN0cnkiIGluIGdsb2JhbFRoaXMgJiYgbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChhKSA9PiB7CiAgY29uc3QgdSA9IChTbi5nZXQoYSkgfHwgMCkgLSAxOwogIFNuLnNldChhLCB1KSwgdSA9PT0gMCAmJiBMdChhKTsKfSk7CmZ1bmN0aW9uIEVlKGEsIHUpIHsKICBjb25zdCBlID0gKFNuLmdldCh1KSB8fCAwKSArIDE7CiAgU24uc2V0KHUsIGUpLCBXbiAmJiBXbi5yZWdpc3RlcihhLCB1LCBhKTsKfQpmdW5jdGlvbiBQZShhKSB7CiAgV24gJiYgV24udW5yZWdpc3RlcihhKTsKfQpmdW5jdGlvbiBYbihhLCB1ID0gW10sIGUgPSBmdW5jdGlvbigpIHsKfSkgewogIGxldCBtID0gITE7CiAgY29uc3QgZyA9IG5ldyBQcm94eShlLCB7CiAgICBnZXQoQywgQSkgewogICAgICBpZiAoTW4obSksIEEgPT09IGdlKQogICAgICAgIHJldHVybiAoKSA9PiB7CiAgICAgICAgICBQZShnKSwgTHQoYSksIG0gPSAhMDsKICAgICAgICB9OwogICAgICBpZiAoQSA9PT0gInRoZW4iKSB7CiAgICAgICAgaWYgKHUubGVuZ3RoID09PSAwKQogICAgICAgICAgcmV0dXJuIHsgdGhlbjogKCkgPT4gZyB9OwogICAgICAgIGNvbnN0IE0gPSBhbihhLCB7CiAgICAgICAgICB0eXBlOiAiR0VUIiwKICAgICAgICAgIHBhdGg6IHUubWFwKChPKSA9PiBPLnRvU3RyaW5nKCkpCiAgICAgICAgfSkudGhlbihKKTsKICAgICAgICByZXR1cm4gTS50aGVuLmJpbmQoTSk7CiAgICAgIH0KICAgICAgcmV0dXJuIFhuKGEsIFsuLi51LCBBXSk7CiAgICB9LAogICAgc2V0KEMsIEEsIE0pIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtPLCBUXSA9IGJuKE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJTRVQiLAogICAgICAgIHBhdGg6IFsuLi51LCBBXS5tYXAoKF8pID0+IF8udG9TdHJpbmcoKSksCiAgICAgICAgdmFsdWU6IE8KICAgICAgfSwgVCkudGhlbihKKTsKICAgIH0sCiAgICBhcHBseShDLCBBLCBNKSB7CiAgICAgIE1uKG0pOwogICAgICBjb25zdCBPID0gdVt1Lmxlbmd0aCAtIDFdOwogICAgICBpZiAoTyA9PT0gdmUpCiAgICAgICAgcmV0dXJuIGFuKGEsIHsKICAgICAgICAgIHR5cGU6ICJFTkRQT0lOVCIKICAgICAgICB9KS50aGVuKEopOwogICAgICBpZiAoTyA9PT0gImJpbmQiKQogICAgICAgIHJldHVybiBYbihhLCB1LnNsaWNlKDAsIC0xKSk7CiAgICAgIGNvbnN0IFtULCBfXSA9IFJ0KE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJBUFBMWSIsCiAgICAgICAgcGF0aDogdS5tYXAoKFMpID0+IFMudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIF8pLnRoZW4oSik7CiAgICB9LAogICAgY29uc3RydWN0KEMsIEEpIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtNLCBPXSA9IFJ0KEEpOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJDT05TVFJVQ1QiLAogICAgICAgIHBhdGg6IHUubWFwKChUKSA9PiBULnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogTQogICAgICB9LCBPKS50aGVuKEopOwogICAgfQogIH0pOwogIHJldHVybiBFZShnLCBhKSwgZzsKfQpmdW5jdGlvbiBNZShhKSB7CiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGEpOwp9CmZ1bmN0aW9uIFJ0KGEpIHsKICBjb25zdCB1ID0gYS5tYXAoYm4pOwogIHJldHVybiBbdS5tYXAoKGUpID0+IGVbMF0pLCBNZSh1Lm1hcCgoZSkgPT4gZVsxXSkpXTsKfQpjb25zdCBOdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpOwpmdW5jdGlvbiBPZShhLCB1KSB7CiAgcmV0dXJuIE50LnNldChhLCB1KSwgYTsKfQpmdW5jdGlvbiBTZShhKSB7CiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYSwgeyBbeHRdOiAhMCB9KTsKfQpmdW5jdGlvbiBibihhKSB7CiAgZm9yIChjb25zdCBbdSwgZV0gb2YgSXQpCiAgICBpZiAoZS5jYW5IYW5kbGUoYSkpIHsKICAgICAgY29uc3QgW20sIGddID0gZS5zZXJpYWxpemUoYSk7CiAgICAgIHJldHVybiBbCiAgICAgICAgewogICAgICAgICAgdHlwZTogIkhBTkRMRVIiLAogICAgICAgICAgbmFtZTogdSwKICAgICAgICAgIHZhbHVlOiBtCiAgICAgICAgfSwKICAgICAgICBnCiAgICAgIF07CiAgICB9CiAgcmV0dXJuIFsKICAgIHsKICAgICAgdHlwZTogIlJBVyIsCiAgICAgIHZhbHVlOiBhCiAgICB9LAogICAgTnQuZ2V0KGEpIHx8IFtdCiAgXTsKfQpmdW5jdGlvbiBKKGEpIHsKICBzd2l0Y2ggKGEudHlwZSkgewogICAgY2FzZSAiSEFORExFUiI6CiAgICAgIHJldHVybiBJdC5nZXQoYS5uYW1lKS5kZXNlcmlhbGl6ZShhLnZhbHVlKTsKICAgIGNhc2UgIlJBVyI6CiAgICAgIHJldHVybiBhLnZhbHVlOwogIH0KfQpmdW5jdGlvbiBhbihhLCB1LCBlKSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChtKSA9PiB7CiAgICBjb25zdCBnID0gV2UoKTsKICAgIGEuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIEMoQSkgewogICAgICAhQS5kYXRhIHx8ICFBLmRhdGEuaWQgfHwgQS5kYXRhLmlkICE9PSBnIHx8IChhLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBDKSwgbShBLmRhdGEpKTsKICAgIH0pLCBhLnN0YXJ0ICYmIGEuc3RhcnQoKSwgYS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHsgaWQ6IGcgfSwgdSksIGUpOwogIH0pOwp9CmZ1bmN0aW9uIFdlKCkgewogIHJldHVybiBuZXcgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpLnRvU3RyaW5nKDE2KSkuam9pbigiLSIpOwp9CmZ1bmN0aW9uIEh0KGEsIHUpIHsKICByZXR1cm4gTWF0aC5zcXJ0KChhLnggLSB1LngpICoqIDIgKyAoYS55IC0gdS55KSAqKiAyKTsKfQpmdW5jdGlvbiBiZShhLCB1KSB7CiAgcmV0dXJuIHsKICAgIHg6IChhLnggKyB1LngpIC8gMiwKICAgIHk6IChhLnkgKyB1LnkpIC8gMgogIH07Cn0KZnVuY3Rpb24ga2UoYSwgdSkgewogIGlmIChhLmNvbmZpZGVuY2UgPD0gMCB8fCB1LmNvbmZpZGVuY2UgPD0gMCkKICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTsKICBjb25zdCBlID0gSHQoYS5jZW50ZXIsIHUuY2VudGVyKSwgbSA9IGJlKGEuY2VudGVyLCB1LmNlbnRlcik7CiAgcmV0dXJuIHsKICAgIHg6IG0ueCwKICAgIHk6IG0ueSArIGUgLyA0CiAgICAvLyBjYWxjdWxhdGlvbiBpcyB0YWtlbiBmcm9tIG1vYmlsZSB0ZWFtCiAgfTsKfQpmdW5jdGlvbiBSZShhLCB1LCBlKSB7CiAgaWYgKGEuY29uZmlkZW5jZSA8PSAwIHx8IHUuY29uZmlkZW5jZSA8PSAwKQogICAgcmV0dXJuIDA7CiAgY29uc3QgbSA9IEh0KGEuY2VudGVyLCB1LmNlbnRlciksIGcgPSB5ZShlLndpZHRoLCBlLmhlaWdodCk7CiAgcmV0dXJuIGhlKG0gLyBnKTsKfQpmdW5jdGlvbiAkbihhKSB7CiAgY29uc3QgeyBjZW50ZXJYOiB1LCBjZW50ZXJZOiBlLCBjb25maWRlbmNlOiBtLCBzaXplOiBnLCBzdGF0dXM6IEMgfSA9IGE7CiAgcmV0dXJuIHsKICAgIGNlbnRlcjogewogICAgICB4OiB1LAogICAgICB5OiBlCiAgICB9LAogICAgY29uZmlkZW5jZTogbSAvIDFlMywKICAgIHN0YXR1czogQyAvIDFlMywKICAgIHNpemU6IGcKICB9Owp9CmNsYXNzIHhlIGV4dGVuZHMgbWUgewogIHBhcnNlUmF3RGF0YSh1LCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBDLCBib3R0b21SaWdodFk6IEEsIGxlZnRFeWU6IE0sIG1vdXRoOiBPLCByaWdodEV5ZTogVCwgdG9wTGVmdFg6IF8sIHRvcExlZnRZOiBTIH0gPSB1LCBFID0gJG4oTSksIFcgPSAkbihUKSwgSCA9ICRuKE8pOwogICAgcmV0dXJuIHsKICAgICAgY29uZmlkZW5jZTogdS5jb25maWRlbmNlIC8gMWUzLAogICAgICB0b3BMZWZ0OiB7CiAgICAgICAgeDogXywKICAgICAgICB5OiBTCiAgICAgIH0sCiAgICAgIGJvdHRvbVJpZ2h0OiB7CiAgICAgICAgeDogQywKICAgICAgICB5OiBBCiAgICAgIH0sCiAgICAgIGZhY2VDZW50ZXI6IGtlKEUsIFcpLAogICAgICBmYWNlU2l6ZTogUmUoRSwgVywgZSksCiAgICAgIGxlZnRFeWU6IEUsCiAgICAgIHJpZ2h0RXllOiBXLAogICAgICBtb3V0aDogSCwKICAgICAgYnJpZ2h0bmVzczogbSAvIDFlMywKICAgICAgc2hhcnBuZXNzOiBnIC8gMWUzCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QodSwgZSwgbSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBJKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBnID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpLCBDID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpOwogICAgdGhpcy53cml0ZURhdGFUb01lbW9yeSh1LCBnKSwgdGhpcy5zYW1XYXNtTW9kdWxlLmNvbnZlcnRUb1NhbUNvbG9ySW1hZ2UoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLAogICAgICBkZS5SR0JBLAogICAgICBDCiAgICApOwogICAgY29uc3QgQSA9IHRoaXMuc2FtV2FzbU1vZHVsZS5kZXRlY3RGYWNlUGFydHNXaXRoSW1hZ2VQYXJhbWV0ZXJzKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgQywKICAgICAgMCwKICAgICAgMCwKICAgICAgLy8gcGFyYW1XaWR0aCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICk7CiAgICByZXR1cm4gdGhpcy5yZWxlYXNlTWVtb3J5KGcpLCB0aGlzLnJlbGVhc2VNZW1vcnkoQyksIHRoaXMucGFyc2VSYXdEYXRhKEEsIG0pOwogIH0KfQpKbih4ZSk7Cg==", q1 = (x) => Uint8Array.from(atob(x), (o) => o.charCodeAt(0)), Da = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", q1(Jc)], { type: "text/javascript;charset=utf-8" });
function $1(x) {
  let o;
  try {
    if (o = Da && (window.URL || window.webkitURL).createObjectURL(Da), !o) throw "";
    const t = new Worker(o, {
      type: "module",
      name: x == null ? void 0 : x.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(o);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Jc,
      {
        type: "module",
        name: x == null ? void 0 : x.name
      }
    );
  }
}
var E0, i0;
class eI {
  constructor(o) {
    ge(this, E0);
    ge(this, i0);
    ae(this, E0, o), ae(this, i0, /* @__PURE__ */ new Map());
  }
  validate() {
    M(this, E0).forEach((o) => {
      M(this, i0).set(o.name, o.evaluate());
    });
  }
  isValid() {
    return Array.from(M(this, i0).values()).every((o) => o);
  }
  get result() {
    return M(this, i0);
  }
  get validators() {
    return M(this, E0);
  }
}
E0 = new WeakMap(), i0 = new WeakMap();
var yn, a0;
class xt {
  constructor(o, t) {
    ge(this, yn);
    ge(this, a0);
    ae(this, yn, o), ae(this, a0, t);
  }
  get threshold() {
    return M(this, a0);
  }
  get name() {
    return M(this, yn);
  }
  isValueBelowThreshold(o) {
    return o < M(this, a0);
  }
  isValueAboveThreshold(o) {
    return o > M(this, a0);
  }
}
yn = new WeakMap(), a0 = new WeakMap();
var Wn;
class tI extends xt {
  constructor(t, e) {
    super("isNotDim", t);
    ge(this, Wn);
    ae(this, Wn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(M(this, Wn));
  }
}
Wn = new WeakMap();
var vn;
class nI extends xt {
  constructor(t, e) {
    super("isNotSmall", t);
    ge(this, vn);
    ae(this, vn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(M(this, vn));
  }
}
vn = new WeakMap();
var Sn;
class xI extends xt {
  constructor(t, e) {
    super("isNotBright", t);
    ge(this, Sn);
    ae(this, Sn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(M(this, Sn));
  }
}
Sn = new WeakMap();
var wn;
class oI extends xt {
  constructor(t, e) {
    super("isPresent", t);
    ge(this, wn);
    ae(this, wn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(M(this, wn));
  }
}
wn = new WeakMap();
var Bn;
class rI extends xt {
  constructor(t, e) {
    super("isSharp", t);
    ge(this, Bn);
    ae(this, Bn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(M(this, Bn));
  }
}
Bn = new WeakMap();
var Gn;
class iI extends xt {
  constructor(t, e) {
    super("isLeftEyePresent", t);
    ge(this, Gn);
    ae(this, Gn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(M(this, Gn));
  }
}
Gn = new WeakMap();
var kn;
class aI extends xt {
  constructor(t, e) {
    super("isMouthPresent", t);
    ge(this, kn);
    ae(this, kn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(M(this, kn));
  }
}
kn = new WeakMap();
var Hn;
class sI extends xt {
  constructor(t, e) {
    super("isMouthScoreNotTooLow", t);
    ge(this, Hn);
    ae(this, Hn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(M(this, Hn));
  }
}
Hn = new WeakMap();
var On;
class cI extends xt {
  constructor(t, e) {
    super("isMouthScoreNotTooHigh", t);
    ge(this, On);
    ae(this, On, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(M(this, On));
  }
}
On = new WeakMap();
var Kn;
class gI extends xt {
  constructor(t, e) {
    super("isNotLarge", t);
    ge(this, Kn);
    ae(this, Kn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(M(this, Kn));
  }
}
Kn = new WeakMap();
var Zn;
class dI extends xt {
  constructor(t, e) {
    super("isNotPitched", t || 2368 + -108 * 21);
    ge(this, Zn);
    ae(this, Zn, e);
  }
  evaluate() {
    const { z: t } = M(this, Zn) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
}
Zn = new WeakMap();
var Rn;
class uI extends xt {
  constructor(t, e) {
    super("isRightEyePresent", t);
    ge(this, Rn);
    ae(this, Rn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(M(this, Rn));
  }
}
Rn = new WeakMap();
var Pn, L0;
class lI extends xt {
  constructor(t, e, n) {
    super("isNotOutOfBounds", t);
    ge(this, Pn);
    ge(this, L0);
    ae(this, Pn, e), ae(this, L0, n);
  }
  evaluate() {
    const t = Tc(M(this, L0), this.threshold), e = Ec(M(this, Pn), M(this, L0));
    return I1(e, t);
  }
}
Pn = new WeakMap(), L0 = new WeakMap();
class II {
  static getFaceValidationInstance(o, t, e, n) {
    return new eI([new oI(o.faceConfidence, t.confidence), new iI(o.leftEye.confidence, t.leftEye.confidence), new uI(o.rightEye.confidence, t.rightEye.confidence), new nI(o.minFaceSizeRatio, t.faceSize), new gI(o.maxFaceSizeRatio, t.faceSize), new rI(o.sharpnessThreshold, t.sharpness), new tI(o.brightnessLowThreshold, t.brightness), new xI(o.brightnessHighThreshold, t.brightness), new lI(o.outOfBoundsThreshold, t, e), new dI(o.pitchAngleAccelerationThreshold, n), new aI(o.mouth.confidence, t.mouth.confidence), new cI(o.mouth.status.max, t.mouth.status), new sI(o.mouth.status.min, t.mouth.status)]);
  }
}
const no = class no extends L1 {
  constructor() {
    super(...arguments);
    J(this, "detector");
    J(this, "className", "FaceController");
    J(this, "fallbackInstruction", Pe.FACE_NOT_PRESENT);
    J(this, "pitchAngleAccelerationThreshold", null);
    J(this, "getInstructionCode", (t, e) => {
      var r;
      if (this.isInCandidateSelection) return Pe.CANDIDATE_SELECTION;
      if ((r = this.lastImage) != null && r.isValid && e) return Pe.CANDIDATE_SELECTION;
      if (this.lastImage && e) return this.lastImage.instructionCode;
      const [n] = this.getInstructionCodesForValidators(t);
      return n ?? this.fallbackInstruction;
    });
    J(this, "getInstructionCodesForValidators", (t) => {
      const e = [];
      return Array.from(t).forEach(([n, r]) => {
        !r && e.push(Eu[n]);
      }), e;
    });
  }
  static async init() {
    const t = new $1(), e = Xc(t), n = new no(), r = await new e();
    this._instance = n, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  setThresholds(t) {
    super.setThresholds(t);
    const { devicePitchAngleThreshold: e } = t;
    this.pitchAngleAccelerationThreshold = cl * Math.sin(e * (Math.PI / (-1 * -315 + 9385 + -9520)));
  }
  restart() {
    super.restart(), Ta(Mt.INSTRUCTION_CHANGED, void (551 + 1 * 211 + -762), Zl);
  }
  validateDetectedObject(t, e) {
    const n = II.getFaceValidationInstance({ ...this.getThresholds(), pitchAngleAccelerationThreshold: this.pitchAngleAccelerationThreshold }, t, e, this.acceleration);
    return n.validate(), n;
  }
  async processImage({ image: t, timestamp: e }) {
    var A;
    const n = {};
    n.width = t.width, n.height = t.height;
    const r = n, i = si(r), a = Dl(t, i), s = Fl(a), c = {};
    c.width = a.width, c.height = a.height;
    const d = c;
    let g = await this.detector.detect(s, d, r);
    g = y1(r, g);
    const C = this.validateDetectedObject(g, r), { result: l } = C, h = this.getInstructionCode(l, C.isValid());
    if (l.get("isPresent")) {
      const u = {};
      u.image = s, u.timestamp = e, this.collectImagesForDuplicateDetection(u);
    }
    if (this.isInCandidateSelection) {
      if (this.bestImage && C.isValid() && this.isNewImageBetter(this.bestImage.detection, g)) {
        const u = { image: t, detection: H0(g) };
        this.bestImage = u, this.candidateSelectionImages.push(u);
      }
    } else if ((A = this.lastImage) != null && A.isValid && C.isValid()) {
      const u = { image: t, detection: H0(g) }, W = {};
      W.image = this.lastImage.image, W.detection = this.lastImage.detection;
      const H = W;
      this.isNewImageBetter(H.detection, u.detection) ? this.bestImage = u : this.bestImage = H, this.candidateSelectionImages.push(H, u), this.isInCandidateSelection = !0;
    } else C.isValid() ? this.lastImage = { instructionCode: h, isValid: !0, image: t, detection: H0(g) } : this.lastImage = { instructionCode: h, isValid: !1, image: t, detection: H0(g) };
    const p = { detectedFace: H0(g), instructionCode: h, invalidValidators: this.getInstructionCodesForValidators(l), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(p.detectedFace), Ta(Mt.INSTRUCTION_CHANGED, h), Vl(Mt.DETECTED_FACE_CHANGED, p.detectedFace, this.getThresholds().faceConfidence), Tl(Mt.FACE_DETECTION, p.detectedFace, t), p;
  }
};
J(no, "_instance");
let Zr = no;
const fI = (x, o) => {
  const { handleError: t } = q0(), [e, n] = tt(), { acceleration: r } = C1();
  e && e.setAcceleration(r), Be(() => {
    (async () => {
      const s = await Zr.getInstance();
      try {
        const c = {};
        c.wasmDirectoryPath = o, c.thresholds = x, await s.init(c);
      } catch (c) {
        if (c instanceof Error) {
          t(xe.fromError(c));
          return;
        }
      }
      n(s);
    })();
  }, [t, x, o]);
  const i = {};
  return i.controller = e, i;
};
var $t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _c = {}, Fa = {}, CI = hI;
function hI(x, o) {
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
var Qc = {};
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
      var h = i[a++];
      switch (C) {
        case 0:
          d[g++] = t[h >> 2], l = (h & 3) << 4, C = 1;
          break;
        case 1:
          d[g++] = t[l | h >> 4], l = (h & 15) << 2, C = 2;
          break;
        case 2:
          d[g++] = t[l | h >> 6], d[g++] = t[h & 63], C = 0;
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
})(Qc);
var mI = Io;
function Io() {
  this._listeners = {};
}
Io.prototype.on = function(x, o, t) {
  return (this._listeners[x] || (this._listeners[x] = [])).push({
    fn: o,
    ctx: t || this
  }), this;
};
Io.prototype.off = function(x, o) {
  if (x === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[x] = [];
  else
    for (var t = this._listeners[x], e = 0; e < t.length; )
      t[e].fn === o ? t.splice(e, 1) : ++e;
  return this;
};
Io.prototype.emit = function(x) {
  var o = this._listeners[x];
  if (o) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < o.length; )
      o[e].fn.apply(o[e++].ctx, t);
  }
  return this;
};
var pI = Ya(Ya);
function Ya(x) {
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
    x.writeFloatLE = o.bind(null, Xa), x.writeFloatBE = o.bind(null, Ma);
    function t(e, n, r) {
      var i = e(n, r), a = (i >> 31) * 2 + 1, s = i >>> 23 & 255, c = i & 8388607;
      return s === 255 ? c ? NaN : a * (1 / 0) : s === 0 ? a * 1401298464324817e-60 * c : a * Math.pow(2, s - 150) * (c + 8388608);
    }
    x.readFloatLE = t.bind(null, ja), x.readFloatBE = t.bind(null, Ja);
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
    x.writeDoubleLE = o.bind(null, Xa, 0, 4), x.writeDoubleBE = o.bind(null, Ma, 4, 0);
    function t(e, n, r, i, a) {
      var s = e(i, a + n), c = e(i, a + r), d = (c >> 31) * 2 + 1, g = c >>> 20 & 2047, C = 4294967296 * (c & 1048575) + s;
      return g === 2047 ? C ? NaN : d * (1 / 0) : g === 0 ? d * 5e-324 * C : d * Math.pow(2, g - 1075) * (C + 4503599627370496);
    }
    x.readDoubleLE = t.bind(null, ja, 0, 4), x.readDoubleBE = t.bind(null, Ja, 4, 0);
  }(), x;
}
function Xa(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
function Ma(x, o, t) {
  o[t] = x >>> 24, o[t + 1] = x >>> 16 & 255, o[t + 2] = x >>> 8 & 255, o[t + 3] = x & 255;
}
function ja(x, o) {
  return (x[o] | x[o + 1] << 8 | x[o + 2] << 16 | x[o + 3] << 24) >>> 0;
}
function Ja(x, o) {
  return (x[o] << 24 | x[o + 1] << 16 | x[o + 2] << 8 | x[o + 3]) >>> 0;
}
function _a(x) {
  throw new Error('Could not dynamically require "' + x + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var bI = AI;
function AI(x) {
  try {
    if (typeof _a != "function")
      return null;
    var o = _a(x);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var Uc = {};
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
})(Uc);
var yI = WI;
function WI(x, o, t) {
  var e = t || 8192, n = e >>> 1, r = null, i = e;
  return function(a) {
    if (a < 1 || a > n)
      return x(a);
    i + a > e && (r = x(e), i = 0);
    var s = o.call(r, i, i += a);
    return i & 7 && (i = (i | 7) + 1), s;
  };
}
var Mo, Qa;
function vI() {
  if (Qa)
    return Mo;
  Qa = 1, Mo = o;
  var x = h0();
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
  }, Mo;
}
var Ua;
function h0() {
  return Ua || (Ua = 1, function(x) {
    var o = x;
    o.asPromise = CI, o.base64 = Qc, o.EventEmitter = mI, o.float = pI, o.inquire = bI, o.utf8 = Uc, o.pool = yI, o.LongBits = vI(), o.isNode = !!(typeof $t < "u" && $t && $t.process && $t.process.versions && $t.process.versions.node), o.global = o.isNode && $t || typeof window < "u" && window || typeof self < "u" && self || $t, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(Fa)), Fa;
}
var zc = z, dt = h0(), Rr, fo = dt.LongBits, za = dt.base64, qa = dt.utf8;
function Dn(x, o, t) {
  this.fn = x, this.len = o, this.next = void 0, this.val = t;
}
function ci() {
}
function SI(x) {
  this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
}
function z() {
  this.len = 0, this.head = new Dn(ci, 0, 0), this.tail = this.head, this.states = null;
}
var qc = function() {
  return dt.Buffer ? function() {
    return (z.create = function() {
      return new Rr();
    })();
  } : function() {
    return new z();
  };
};
z.create = qc();
z.alloc = function(x) {
  return new dt.Array(x);
};
dt.Array !== Array && (z.alloc = dt.pool(z.alloc, dt.Array.prototype.subarray));
z.prototype._push = function(x, o, t) {
  return this.tail = this.tail.next = new Dn(x, o, t), this.len += o, this;
};
function gi(x, o, t) {
  o[t] = x & 255;
}
function wI(x, o, t) {
  for (; x > 127; )
    o[t++] = x & 127 | 128, x >>>= 7;
  o[t] = x;
}
function di(x, o) {
  this.len = x, this.next = void 0, this.val = o;
}
di.prototype = Object.create(Dn.prototype);
di.prototype.fn = wI;
z.prototype.uint32 = function(x) {
  return this.len += (this.tail = this.tail.next = new di(
    (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
    x
  )).len, this;
};
z.prototype.int32 = function(x) {
  return x < 0 ? this._push(ui, 10, fo.fromNumber(x)) : this.uint32(x);
};
z.prototype.sint32 = function(x) {
  return this.uint32((x << 1 ^ x >> 31) >>> 0);
};
function ui(x, o, t) {
  for (; x.hi; )
    o[t++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
  for (; x.lo > 127; )
    o[t++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
  o[t++] = x.lo;
}
z.prototype.uint64 = function(x) {
  var o = fo.from(x);
  return this._push(ui, o.length(), o);
};
z.prototype.int64 = z.prototype.uint64;
z.prototype.sint64 = function(x) {
  var o = fo.from(x).zzEncode();
  return this._push(ui, o.length(), o);
};
z.prototype.bool = function(x) {
  return this._push(gi, 1, x ? 1 : 0);
};
function Pr(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
z.prototype.fixed32 = function(x) {
  return this._push(Pr, 4, x >>> 0);
};
z.prototype.sfixed32 = z.prototype.fixed32;
z.prototype.fixed64 = function(x) {
  var o = fo.from(x);
  return this._push(Pr, 4, o.lo)._push(Pr, 4, o.hi);
};
z.prototype.sfixed64 = z.prototype.fixed64;
z.prototype.float = function(x) {
  return this._push(dt.float.writeFloatLE, 4, x);
};
z.prototype.double = function(x) {
  return this._push(dt.float.writeDoubleLE, 8, x);
};
var BI = dt.Array.prototype.set ? function(x, o, t) {
  o.set(x, t);
} : function(x, o, t) {
  for (var e = 0; e < x.length; ++e)
    o[t + e] = x[e];
};
z.prototype.bytes = function(x) {
  var o = x.length >>> 0;
  if (!o)
    return this._push(gi, 1, 0);
  if (dt.isString(x)) {
    var t = z.alloc(o = za.length(x));
    za.decode(x, t, 0), x = t;
  }
  return this.uint32(o)._push(BI, o, x);
};
z.prototype.string = function(x) {
  var o = qa.length(x);
  return o ? this.uint32(o)._push(qa.write, o, x) : this._push(gi, 1, 0);
};
z.prototype.fork = function() {
  return this.states = new SI(this), this.head = this.tail = new Dn(ci, 0, 0), this.len = 0, this;
};
z.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Dn(ci, 0, 0), this.len = 0), this;
};
z.prototype.ldelim = function() {
  var x = this.head, o = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = x.next, this.tail = o, this.len += t), this;
};
z.prototype.finish = function() {
  for (var x = this.head.next, o = this.constructor.alloc(this.len), t = 0; x; )
    x.fn(x.val, o, t), t += x.len, x = x.next;
  return o;
};
z._configure = function(x) {
  Rr = x, z.create = qc(), Rr._configure();
};
var GI = wt, $c = zc;
(wt.prototype = Object.create($c.prototype)).constructor = wt;
var jt = h0();
function wt() {
  $c.call(this);
}
wt._configure = function() {
  wt.alloc = jt._Buffer_allocUnsafe, wt.writeBytesBuffer = jt.Buffer && jt.Buffer.prototype instanceof Uint8Array && jt.Buffer.prototype.set.name === "set" ? function(x, o, t) {
    o.set(x, t);
  } : function(x, o, t) {
    if (x.copy)
      x.copy(o, t, 0, x.length);
    else
      for (var e = 0; e < x.length; )
        o[t++] = x[e++];
  };
};
wt.prototype.bytes = function(x) {
  jt.isString(x) && (x = jt._Buffer_from(x, "base64"));
  var o = x.length >>> 0;
  return this.uint32(o), o && this._push(wt.writeBytesBuffer, o, x), this;
};
function kI(x, o, t) {
  x.length < 40 ? jt.utf8.write(x, o, t) : o.utf8Write ? o.utf8Write(x, t) : o.write(x, t);
}
wt.prototype.string = function(x) {
  var o = jt.Buffer.byteLength(x);
  return this.uint32(o), o && this._push(kI, o, x), this;
};
wt._configure();
var eg = le, Bt = h0(), Vr, tg = Bt.LongBits, HI = Bt.utf8;
function bt(x, o) {
  return RangeError("index out of range: " + x.pos + " + " + (o || 1) + " > " + x.len);
}
function le(x) {
  this.buf = x, this.pos = 0, this.len = x.length;
}
var $a = typeof Uint8Array < "u" ? function(x) {
  if (x instanceof Uint8Array || Array.isArray(x))
    return new le(x);
  throw Error("illegal buffer");
} : function(x) {
  if (Array.isArray(x))
    return new le(x);
  throw Error("illegal buffer");
}, ng = function() {
  return Bt.Buffer ? function(x) {
    return (le.create = function(o) {
      return Bt.Buffer.isBuffer(o) ? new Vr(o) : $a(o);
    })(x);
  } : $a;
};
le.create = ng();
le.prototype._slice = Bt.Array.prototype.subarray || /* istanbul ignore next */
Bt.Array.prototype.slice;
le.prototype.uint32 = /* @__PURE__ */ function() {
  var x = 4294967295;
  return function() {
    if (x = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (x = (x | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return x;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, bt(this, 10);
    return x;
  };
}();
le.prototype.int32 = function() {
  return this.uint32() | 0;
};
le.prototype.sint32 = function() {
  var x = this.uint32();
  return x >>> 1 ^ -(x & 1) | 0;
};
function jo() {
  var x = new tg(0, 0), o = 0;
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
        throw bt(this);
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
        throw bt(this);
      if (x.hi = (x.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return x;
    }
  throw Error("invalid varint encoding");
}
le.prototype.bool = function() {
  return this.uint32() !== 0;
};
function $x(x, o) {
  return (x[o - 4] | x[o - 3] << 8 | x[o - 2] << 16 | x[o - 1] << 24) >>> 0;
}
le.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw bt(this, 4);
  return $x(this.buf, this.pos += 4);
};
le.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw bt(this, 4);
  return $x(this.buf, this.pos += 4) | 0;
};
function es() {
  if (this.pos + 8 > this.len)
    throw bt(this, 8);
  return new tg($x(this.buf, this.pos += 4), $x(this.buf, this.pos += 4));
}
le.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw bt(this, 4);
  var x = Bt.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, x;
};
le.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw bt(this, 4);
  var x = Bt.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, x;
};
le.prototype.bytes = function() {
  var x = this.uint32(), o = this.pos, t = this.pos + x;
  if (t > this.len)
    throw bt(this, x);
  return this.pos += x, Array.isArray(this.buf) ? this.buf.slice(o, t) : o === t ? new this.buf.constructor(0) : this._slice.call(this.buf, o, t);
};
le.prototype.string = function() {
  var x = this.bytes();
  return HI.read(x, 0, x.length);
};
le.prototype.skip = function(x) {
  if (typeof x == "number") {
    if (this.pos + x > this.len)
      throw bt(this, x);
    this.pos += x;
  } else
    do
      if (this.pos >= this.len)
        throw bt(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
le.prototype.skipType = function(x) {
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
le._configure = function(x) {
  Vr = x, le.create = ng(), Vr._configure();
  var o = Bt.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  Bt.merge(le.prototype, {
    int64: function() {
      return jo.call(this)[o](!1);
    },
    uint64: function() {
      return jo.call(this)[o](!0);
    },
    sint64: function() {
      return jo.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return es.call(this)[o](!0);
    },
    sfixed64: function() {
      return es.call(this)[o](!1);
    }
  });
};
var OI = I0, xg = eg;
(I0.prototype = Object.create(xg.prototype)).constructor = I0;
var ts = h0();
function I0(x) {
  xg.call(this, x);
}
I0._configure = function() {
  ts.Buffer && (I0.prototype._slice = ts.Buffer.prototype.slice);
};
I0.prototype.string = function() {
  var x = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + x, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + x, this.len));
};
I0._configure();
var og = {}, KI = An, li = h0();
(An.prototype = Object.create(li.EventEmitter.prototype)).constructor = An;
function An(x, o, t) {
  if (typeof x != "function")
    throw TypeError("rpcImpl must be a function");
  li.EventEmitter.call(this), this.rpcImpl = x, this.requestDelimited = !!o, this.responseDelimited = !!t;
}
An.prototype.rpcCall = function x(o, t, e, n, r) {
  if (!n)
    throw TypeError("request must be specified");
  var i = this;
  if (!r)
    return li.asPromise(x, i, o, t, e, n);
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
An.prototype.end = function(x) {
  return this.rpcImpl && (x || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(x) {
  var o = x;
  o.Service = KI;
})(og);
var ZI = {};
(function(x) {
  var o = x;
  o.build = "minimal", o.Writer = zc, o.BufferWriter = GI, o.Reader = eg, o.BufferReader = OI, o.util = h0(), o.rpc = og, o.roots = ZI, o.configure = t;
  function t() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  t();
})(_c);
var te = _c;
const B = te.Reader, de = te.Writer, v = te.util, m = te.roots.default || (te.roots.default = {}), f0 = m.dot = (() => {
  const x = {};
  return x.Content = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.token = v.newBuffer([]), o.prototype.iv = v.newBuffer([]), o.prototype.schemaVersion = 0, o.prototype.bytes = v.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = de.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
      let n = e === void 0 ? t.len : t.pos + e, r = new m.dot.Content();
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
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || v.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || v.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !v.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || v.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof m.dot.Content)
        return t;
      let e = new m.dot.Content();
      return t.token != null && (typeof t.token == "string" ? v.base64.decode(t.token, e.token = v.newBuffer(v.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? v.base64.decode(t.iv, e.iv = v.newBuffer(v.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? v.base64.decode(t.bytes, e.bytes = v.newBuffer(v.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.token = "" : (n.token = [], e.bytes !== Array && (n.token = v.newBuffer(n.token))), e.bytes === String ? n.iv = "" : (n.iv = [], e.bytes !== Array && (n.iv = v.newBuffer(n.iv))), n.schemaVersion = 0, e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = v.newBuffer(n.bytes)))), t.token != null && t.hasOwnProperty("token") && (n.token = e.bytes === String ? v.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (n.iv = e.bytes === String ? v.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (n.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? v.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
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
      return t.prototype.images = v.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.images != null && e.images.length)
          for (let r = 0; r < e.images.length; ++r)
            m.dot.Image.encode(e.images[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && m.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new m.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.images && i.images.length || (i.images = []), i.images.push(m.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              i.metadata = m.dot.v4.Metadata.decode(e, e.uint32());
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
            let r = m.dot.Image.verify(e.images[n]);
            if (r)
              return "images." + r;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = m.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof m.dot.v4.MagnifEyeLivenessContent)
          return e;
        let n = new m.dot.v4.MagnifEyeLivenessContent();
        if (e.images) {
          if (!Array.isArray(e.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          n.images = [];
          for (let r = 0; r < e.images.length; ++r) {
            if (typeof e.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            n.images[r] = m.dot.Image.fromObject(e.images[r]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          n.metadata = m.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.images = []), n.defaults && (r.metadata = null), e.images && e.images.length) {
          r.images = [];
          for (let i = 0; i < e.images.length; ++i)
            r.images[i] = m.dot.Image.toObject(e.images[i], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = m.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        get: v.oneOfGetter(e = ["sessionToken"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: v.oneOfGetter(e = ["web", "android", "ios"]),
        set: v.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        return r || (r = de.create()), n.platform != null && Object.hasOwnProperty.call(n, "platform") && r.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.platform), n.web != null && Object.hasOwnProperty.call(n, "web") && m.dot.v4.WebMetadata.encode(n.web, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.android != null && Object.hasOwnProperty.call(n, "android") && m.dot.v4.AndroidMetadata.encode(n.android, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.ios != null && Object.hasOwnProperty.call(n, "ios") && m.dot.v4.IosMetadata.encode(n.ios, r.uint32(
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
        let i = r === void 0 ? n.len : n.pos + r, a = new m.dot.v4.Metadata();
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
              a.web = m.dot.v4.WebMetadata.decode(n, n.uint32());
              break;
            }
            case 3: {
              a.android = m.dot.v4.AndroidMetadata.decode(n, n.uint32());
              break;
            }
            case 4: {
              a.ios = m.dot.v4.IosMetadata.decode(n, n.uint32());
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
        if (n.sessionToken != null && n.hasOwnProperty("sessionToken") && (r._sessionToken = 1, !v.isString(n.sessionToken)))
          return "sessionToken: string expected";
        if (n.componentVersion != null && n.hasOwnProperty("componentVersion") && !v.isString(n.componentVersion))
          return "componentVersion: string expected";
        if (n.web != null && n.hasOwnProperty("web")) {
          r.metadata = 1;
          {
            let i = m.dot.v4.WebMetadata.verify(n.web);
            if (i)
              return "web." + i;
          }
        }
        if (n.android != null && n.hasOwnProperty("android")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let i = m.dot.v4.AndroidMetadata.verify(n.android);
            if (i)
              return "android." + i;
          }
        }
        if (n.ios != null && n.hasOwnProperty("ios")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let i = m.dot.v4.IosMetadata.verify(n.ios);
            if (i)
              return "ios." + i;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof m.dot.v4.Metadata)
          return n;
        let r = new m.dot.v4.Metadata();
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
          r.web = m.dot.v4.WebMetadata.fromObject(n.web);
        }
        if (n.android != null) {
          if (typeof n.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          r.android = m.dot.v4.AndroidMetadata.fromObject(n.android);
        }
        if (n.ios != null) {
          if (typeof n.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          r.ios = m.dot.v4.IosMetadata.fromObject(n.ios);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return r.defaults && (i.platform = r.enums === String ? "WEB" : 0, i.componentVersion = ""), n.platform != null && n.hasOwnProperty("platform") && (i.platform = r.enums === String ? m.dot.Platform[n.platform] === void 0 ? n.platform : m.dot.Platform[n.platform] : n.platform), n.web != null && n.hasOwnProperty("web") && (i.web = m.dot.v4.WebMetadata.toObject(n.web, r), r.oneofs && (i.metadata = "web")), n.android != null && n.hasOwnProperty("android") && (i.android = m.dot.v4.AndroidMetadata.toObject(n.android, r), r.oneofs && (i.metadata = "android")), n.ios != null && n.hasOwnProperty("ios") && (i.ios = m.dot.v4.IosMetadata.toObject(n.ios, r), r.oneofs && (i.metadata = "ios")), n.sessionToken != null && n.hasOwnProperty("sessionToken") && (i.sessionToken = n.sessionToken, r.oneofs && (i._sessionToken = "sessionToken")), n.componentVersion != null && n.hasOwnProperty("componentVersion") && (i.componentVersion = n.componentVersion), i;
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
      t.prototype.supportedAbis = v.emptyArray, t.prototype.device = null, t.prototype.digests = v.emptyArray, t.prototype.digestsWithTimestamp = v.emptyArray, t.prototype.dynamicCameraFrameProperties = v.emptyObject;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: v.oneOfGetter(e = ["device"]),
        set: v.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        if (r || (r = de.create()), n.supportedAbis != null && n.supportedAbis.length)
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
            ).string(i[a]), m.dot.Int32List.encode(n.dynamicCameraFrameProperties[i[a]], r.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (n.digestsWithTimestamp != null && n.digestsWithTimestamp.length)
          for (let i = 0; i < n.digestsWithTimestamp.length; ++i)
            m.dot.DigestWithTimestamp.encode(n.digestsWithTimestamp[i], r.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new m.dot.v4.AndroidMetadata(), s, c;
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
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(m.dot.DigestWithTimestamp.decode(n, n.uint32()));
              break;
            }
            case 4: {
              a.dynamicCameraFrameProperties === v.emptyObject && (a.dynamicCameraFrameProperties = {});
              let g = n.uint32() + n.pos;
              for (s = "", c = null; n.pos < g; ) {
                let C = n.uint32();
                switch (C >>> 3) {
                  case 1:
                    s = n.string();
                    break;
                  case 2:
                    c = m.dot.Int32List.decode(n, n.uint32());
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
            if (!v.isString(n.supportedAbis[r]))
              return "supportedAbis: string[] expected";
        }
        if (n.device != null && n.hasOwnProperty("device") && !v.isString(n.device))
          return "device: string expected";
        if (n.digests != null && n.hasOwnProperty("digests")) {
          if (!Array.isArray(n.digests))
            return "digests: array expected";
          for (let r = 0; r < n.digests.length; ++r)
            if (!(n.digests[r] && typeof n.digests[r].length == "number" || v.isString(n.digests[r])))
              return "digests: buffer[] expected";
        }
        if (n.digestsWithTimestamp != null && n.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(n.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let r = 0; r < n.digestsWithTimestamp.length; ++r) {
            let i = m.dot.DigestWithTimestamp.verify(n.digestsWithTimestamp[r]);
            if (i)
              return "digestsWithTimestamp." + i;
          }
        }
        if (n.dynamicCameraFrameProperties != null && n.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!v.isObject(n.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let r = Object.keys(n.dynamicCameraFrameProperties);
          for (let i = 0; i < r.length; ++i) {
            let a = m.dot.Int32List.verify(n.dynamicCameraFrameProperties[r[i]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof m.dot.v4.AndroidMetadata)
          return n;
        let r = new m.dot.v4.AndroidMetadata();
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
            typeof n.digests[i] == "string" ? v.base64.decode(n.digests[i], r.digests[i] = v.newBuffer(v.base64.length(n.digests[i])), 0) : n.digests[i].length >= 0 && (r.digests[i] = n.digests[i]);
        }
        if (n.digestsWithTimestamp) {
          if (!Array.isArray(n.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          r.digestsWithTimestamp = [];
          for (let i = 0; i < n.digestsWithTimestamp.length; ++i) {
            if (typeof n.digestsWithTimestamp[i] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            r.digestsWithTimestamp[i] = m.dot.DigestWithTimestamp.fromObject(n.digestsWithTimestamp[i]);
          }
        }
        if (n.dynamicCameraFrameProperties) {
          if (typeof n.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          r.dynamicCameraFrameProperties = {};
          for (let i = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < i.length; ++a) {
            if (typeof n.dynamicCameraFrameProperties[i[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            r.dynamicCameraFrameProperties[i[a]] = m.dot.Int32List.fromObject(n.dynamicCameraFrameProperties[i[a]]);
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
            i.digests[s] = r.bytes === String ? v.base64.encode(n.digests[s], 0, n.digests[s].length) : r.bytes === Array ? Array.prototype.slice.call(n.digests[s]) : n.digests[s];
        }
        let a;
        if (n.dynamicCameraFrameProperties && (a = Object.keys(n.dynamicCameraFrameProperties)).length) {
          i.dynamicCameraFrameProperties = {};
          for (let s = 0; s < a.length; ++s)
            i.dynamicCameraFrameProperties[a[s]] = m.dot.Int32List.toObject(n.dynamicCameraFrameProperties[a[s]], r);
        }
        if (n.digestsWithTimestamp && n.digestsWithTimestamp.length) {
          i.digestsWithTimestamp = [];
          for (let s = 0; s < n.digestsWithTimestamp.length; ++s)
            i.digestsWithTimestamp[s] = m.dot.DigestWithTimestamp.toObject(n.digestsWithTimestamp[s], r);
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
      return t.prototype.cameraModelId = "", t.prototype.architectureInfo = v.emptyObject, t.prototype.digests = v.emptyArray, t.prototype.digestsWithTimestamp = v.emptyArray, t.prototype.isoValues = v.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.cameraModelId != null && Object.hasOwnProperty.call(e, "cameraModelId") && n.uint32(
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
            m.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new m.dot.v4.IosMetadata(), a, s;
        for (; e.pos < r; ) {
          let c = e.uint32();
          switch (c >>> 3) {
            case 1: {
              i.cameraModelId = e.string();
              break;
            }
            case 2: {
              i.architectureInfo === v.emptyObject && (i.architectureInfo = {});
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
              i.digestsWithTimestamp && i.digestsWithTimestamp.length || (i.digestsWithTimestamp = []), i.digestsWithTimestamp.push(m.dot.DigestWithTimestamp.decode(e, e.uint32()));
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
        if (e.cameraModelId != null && e.hasOwnProperty("cameraModelId") && !v.isString(e.cameraModelId))
          return "cameraModelId: string expected";
        if (e.architectureInfo != null && e.hasOwnProperty("architectureInfo")) {
          if (!v.isObject(e.architectureInfo))
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
            if (!(e.digests[n] && typeof e.digests[n].length == "number" || v.isString(e.digests[n])))
              return "digests: buffer[] expected";
        }
        if (e.digestsWithTimestamp != null && e.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(e.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let n = 0; n < e.digestsWithTimestamp.length; ++n) {
            let r = m.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[n]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (e.isoValues != null && e.hasOwnProperty("isoValues")) {
          if (!Array.isArray(e.isoValues))
            return "isoValues: array expected";
          for (let n = 0; n < e.isoValues.length; ++n)
            if (!v.isInteger(e.isoValues[n]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof m.dot.v4.IosMetadata)
          return e;
        let n = new m.dot.v4.IosMetadata();
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
            typeof e.digests[r] == "string" ? v.base64.decode(e.digests[r], n.digests[r] = v.newBuffer(v.base64.length(e.digests[r])), 0) : e.digests[r].length >= 0 && (n.digests[r] = e.digests[r]);
        }
        if (e.digestsWithTimestamp) {
          if (!Array.isArray(e.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let r = 0; r < e.digestsWithTimestamp.length; ++r) {
            if (typeof e.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[r] = m.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[r]);
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
            r.digests[a] = n.bytes === String ? v.base64.encode(e.digests[a], 0, e.digests[a].length) : n.bytes === Array ? Array.prototype.slice.call(e.digests[a]) : e.digests[a];
        }
        if (e.isoValues && e.isoValues.length) {
          r.isoValues = [];
          for (let a = 0; a < e.isoValues.length; ++a)
            r.isoValues[a] = e.isoValues[a];
        }
        if (e.digestsWithTimestamp && e.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let a = 0; a < e.digestsWithTimestamp.length; ++a)
            r.digestsWithTimestamp[a] = m.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[a], n);
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
      return t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = v.emptyArray, t.prototype.hashedDetectedImages = v.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = v.emptyArray, t.prototype.detectionRecord = v.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && m.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.availableCameraProperties != null && e.availableCameraProperties.length)
          for (let r = 0; r < e.availableCameraProperties.length; ++r)
            m.dot.v4.CameraProperties.encode(e.availableCameraProperties[r], n.uint32(
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
            m.dot.v4.DetectedObject.encode(e.detectionRecord[r], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (e.hashedDetectedImagesWithTimestamp != null && e.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < e.hashedDetectedImagesWithTimestamp.length; ++r)
            m.dot.v4.HashedDetectedImageWithTimestamp.encode(e.hashedDetectedImagesWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new m.dot.v4.WebMetadata();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.currentCameraProperties = m.dot.v4.MediaTrackSettings.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.availableCameraProperties && i.availableCameraProperties.length || (i.availableCameraProperties = []), i.availableCameraProperties.push(m.dot.v4.CameraProperties.decode(e, e.uint32()));
              break;
            }
            case 3: {
              i.hashedDetectedImages && i.hashedDetectedImages.length || (i.hashedDetectedImages = []), i.hashedDetectedImages.push(e.string());
              break;
            }
            case 5: {
              i.hashedDetectedImagesWithTimestamp && i.hashedDetectedImagesWithTimestamp.length || (i.hashedDetectedImagesWithTimestamp = []), i.hashedDetectedImagesWithTimestamp.push(m.dot.v4.HashedDetectedImageWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              i.detectionRecord && i.detectionRecord.length || (i.detectionRecord = []), i.detectionRecord.push(m.dot.v4.DetectedObject.decode(e, e.uint32()));
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
          let n = m.dot.v4.MediaTrackSettings.verify(e.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (e.availableCameraProperties != null && e.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(e.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < e.availableCameraProperties.length; ++n) {
            let r = m.dot.v4.CameraProperties.verify(e.availableCameraProperties[n]);
            if (r)
              return "availableCameraProperties." + r;
          }
        }
        if (e.hashedDetectedImages != null && e.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(e.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let n = 0; n < e.hashedDetectedImages.length; ++n)
            if (!v.isString(e.hashedDetectedImages[n]))
              return "hashedDetectedImages: string[] expected";
        }
        if (e.hashedDetectedImagesWithTimestamp != null && e.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(e.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let n = 0; n < e.hashedDetectedImagesWithTimestamp.length; ++n) {
            let r = m.dot.v4.HashedDetectedImageWithTimestamp.verify(e.hashedDetectedImagesWithTimestamp[n]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (e.detectionRecord != null && e.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(e.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < e.detectionRecord.length; ++n) {
            let r = m.dot.v4.DetectedObject.verify(e.detectionRecord[n]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof m.dot.v4.WebMetadata)
          return e;
        let n = new m.dot.v4.WebMetadata();
        if (e.currentCameraProperties != null) {
          if (typeof e.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          n.currentCameraProperties = m.dot.v4.MediaTrackSettings.fromObject(e.currentCameraProperties);
        }
        if (e.availableCameraProperties) {
          if (!Array.isArray(e.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          n.availableCameraProperties = [];
          for (let r = 0; r < e.availableCameraProperties.length; ++r) {
            if (typeof e.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[r] = m.dot.v4.CameraProperties.fromObject(e.availableCameraProperties[r]);
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
            n.hashedDetectedImagesWithTimestamp[r] = m.dot.v4.HashedDetectedImageWithTimestamp.fromObject(e.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (e.detectionRecord) {
          if (!Array.isArray(e.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let r = 0; r < e.detectionRecord.length; ++r) {
            if (typeof e.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[r] = m.dot.v4.DetectedObject.fromObject(e.detectionRecord[r]);
          }
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), n.defaults && (r.currentCameraProperties = null), e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = m.dot.v4.MediaTrackSettings.toObject(e.currentCameraProperties, n)), e.availableCameraProperties && e.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let i = 0; i < e.availableCameraProperties.length; ++i)
            r.availableCameraProperties[i] = m.dot.v4.CameraProperties.toObject(e.availableCameraProperties[i], n);
        }
        if (e.hashedDetectedImages && e.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let i = 0; i < e.hashedDetectedImages.length; ++i)
            r.hashedDetectedImages[i] = e.hashedDetectedImages[i];
        }
        if (e.detectionRecord && e.detectionRecord.length) {
          r.detectionRecord = [];
          for (let i = 0; i < e.detectionRecord.length; ++i)
            r.detectionRecord[i] = m.dot.v4.DetectedObject.toObject(e.detectionRecord[i], n);
        }
        if (e.hashedDetectedImagesWithTimestamp && e.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let i = 0; i < e.hashedDetectedImagesWithTimestamp.length; ++i)
            r.hashedDetectedImagesWithTimestamp[i] = m.dot.v4.HashedDetectedImageWithTimestamp.toObject(e.hashedDetectedImagesWithTimestamp[i], n);
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
      return t.prototype.imageHash = "", t.prototype.timestampMillis = v.Long ? v.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = de.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new m.dot.v4.HashedDetectedImageWithTimestamp();
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
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !v.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !v.isInteger(e.timestampMillis) && !(e.timestampMillis && v.isInteger(e.timestampMillis.low) && v.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof m.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let n = new m.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (n.imageHash = String(e.imageHash)), e.timestampMillis != null && (v.Long ? (n.timestampMillis = v.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? n.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? n.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (n.timestampMillis = new v.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if (n.defaults)
          if (r.imageHash = "", v.Long) {
            let i = new v.Long(0, 0, !0);
            r.timestampMillis = n.longs === String ? i.toString() : n.longs === Number ? i.toNumber() : i;
          } else
            r.timestampMillis = n.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (r.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? r.timestampMillis = n.longs === String ? String(e.timestampMillis) : e.timestampMillis : r.timestampMillis = n.longs === String ? v.Long.prototype.toString.call(e.timestampMillis) : n.longs === Number ? new v.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), r;
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
        get: v.oneOfGetter(e = ["aspectRatio"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: v.oneOfGetter(e = ["autoGainControl"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: v.oneOfGetter(e = ["channelCount"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: v.oneOfGetter(e = ["deviceId"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: v.oneOfGetter(e = ["displaySurface"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: v.oneOfGetter(e = ["echoCancellation"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: v.oneOfGetter(e = ["facingMode"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: v.oneOfGetter(e = ["frameRate"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: v.oneOfGetter(e = ["groupId"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_height", {
        get: v.oneOfGetter(e = ["height"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: v.oneOfGetter(e = ["noiseSuppression"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: v.oneOfGetter(e = ["sampleRate"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: v.oneOfGetter(e = ["sampleSize"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_width", {
        get: v.oneOfGetter(e = ["width"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: v.oneOfGetter(e = ["deviceName"]),
        set: v.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        return r || (r = de.create()), n.aspectRatio != null && Object.hasOwnProperty.call(n, "aspectRatio") && r.uint32(
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
        let i = r === void 0 ? n.len : n.pos + r, a = new m.dot.v4.MediaTrackSettings();
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
        return typeof n != "object" || n === null ? "object expected" : n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && typeof n.aspectRatio != "number" ? "aspectRatio: number expected" : n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && typeof n.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : n.channelCount != null && n.hasOwnProperty("channelCount") && !v.isInteger(n.channelCount) ? "channelCount: integer expected" : n.deviceId != null && n.hasOwnProperty("deviceId") && !v.isString(n.deviceId) ? "deviceId: string expected" : n.displaySurface != null && n.hasOwnProperty("displaySurface") && !v.isString(n.displaySurface) ? "displaySurface: string expected" : n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && typeof n.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : n.facingMode != null && n.hasOwnProperty("facingMode") && !v.isString(n.facingMode) ? "facingMode: string expected" : n.frameRate != null && n.hasOwnProperty("frameRate") && typeof n.frameRate != "number" ? "frameRate: number expected" : n.groupId != null && n.hasOwnProperty("groupId") && !v.isString(n.groupId) ? "groupId: string expected" : n.height != null && n.hasOwnProperty("height") && !v.isInteger(n.height) ? "height: integer expected" : n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && typeof n.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : n.sampleRate != null && n.hasOwnProperty("sampleRate") && !v.isInteger(n.sampleRate) ? "sampleRate: integer expected" : n.sampleSize != null && n.hasOwnProperty("sampleSize") && !v.isInteger(n.sampleSize) ? "sampleSize: integer expected" : n.width != null && n.hasOwnProperty("width") && !v.isInteger(n.width) ? "width: integer expected" : n.deviceName != null && n.hasOwnProperty("deviceName") && !v.isString(n.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(n) {
        if (n instanceof m.dot.v4.MediaTrackSettings)
          return n;
        let r = new m.dot.v4.MediaTrackSettings();
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
        return n || (n = de.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new m.dot.v4.ImageBitmap();
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
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !v.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !v.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof m.dot.v4.ImageBitmap)
          return e;
        let n = new m.dot.v4.ImageBitmap();
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
        get: v.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: v.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        return r || (r = de.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && m.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.cameraProperties != null && Object.hasOwnProperty.call(n, "cameraProperties") && m.dot.v4.MediaTrackSettings.encode(n.cameraProperties, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new m.dot.v4.CameraProperties();
        for (; n.pos < i; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = m.dot.v4.ImageBitmap.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = m.dot.v4.MediaTrackSettings.decode(n, n.uint32());
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
          let r = m.dot.v4.ImageBitmap.verify(n.cameraInitFrameResolution);
          if (r)
            return "cameraInitFrameResolution." + r;
        }
        if (n.cameraProperties != null && n.hasOwnProperty("cameraProperties")) {
          let r = m.dot.v4.MediaTrackSettings.verify(n.cameraProperties);
          if (r)
            return "cameraProperties." + r;
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof m.dot.v4.CameraProperties)
          return n;
        let r = new m.dot.v4.CameraProperties();
        if (n.cameraInitFrameResolution != null) {
          if (typeof n.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          r.cameraInitFrameResolution = m.dot.v4.ImageBitmap.fromObject(n.cameraInitFrameResolution);
        }
        if (n.cameraProperties != null) {
          if (typeof n.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          r.cameraProperties = m.dot.v4.MediaTrackSettings.fromObject(n.cameraProperties);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return r.defaults && (i.cameraProperties = null), n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution") && (i.cameraInitFrameResolution = m.dot.v4.ImageBitmap.toObject(n.cameraInitFrameResolution, r), r.oneofs && (i._cameraInitFrameResolution = "cameraInitFrameResolution")), n.cameraProperties != null && n.hasOwnProperty("cameraProperties") && (i.cameraProperties = m.dot.v4.MediaTrackSettings.toObject(n.cameraProperties, r)), i;
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
        return n || (n = de.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && n.uint32(
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && m.dot.v4.Point.encode(e.faceCenter, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && n.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && m.dot.v4.Point.encode(e.bottomLeft, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && m.dot.v4.Point.encode(e.bottomRight, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && m.dot.v4.Point.encode(e.topLeft, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && m.dot.v4.Point.encode(e.topRight, n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new m.dot.v4.DetectedObject();
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
              i.faceCenter = m.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              i.smallestEdge = e.float();
              break;
            }
            case 8: {
              i.bottomLeft = m.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              i.bottomRight = m.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              i.topLeft = m.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              i.topRight = m.dot.v4.Point.decode(e, e.uint32());
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
          let n = m.dot.v4.Point.verify(e.faceCenter);
          if (n)
            return "faceCenter." + n;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let n = m.dot.v4.Point.verify(e.bottomLeft);
          if (n)
            return "bottomLeft." + n;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let n = m.dot.v4.Point.verify(e.bottomRight);
          if (n)
            return "bottomRight." + n;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let n = m.dot.v4.Point.verify(e.topLeft);
          if (n)
            return "topLeft." + n;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let n = m.dot.v4.Point.verify(e.topRight);
          if (n)
            return "topRight." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof m.dot.v4.DetectedObject)
          return e;
        let n = new m.dot.v4.DetectedObject();
        if (e.brightness != null && (n.brightness = Number(e.brightness)), e.sharpness != null && (n.sharpness = Number(e.sharpness)), e.hotspots != null && (n.hotspots = Number(e.hotspots)), e.confidence != null && (n.confidence = Number(e.confidence)), e.faceSize != null && (n.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          n.faceCenter = m.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (n.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          n.bottomLeft = m.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          n.bottomRight = m.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          n.topLeft = m.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          n.topRight = m.dot.v4.Point.fromObject(e.topRight);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.brightness = 0, r.sharpness = 0, r.hotspots = 0, r.confidence = 0, r.faceSize = 0, r.faceCenter = null, r.smallestEdge = 0, r.bottomLeft = null, r.bottomRight = null, r.topLeft = null, r.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (r.brightness = n.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (r.sharpness = n.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (r.hotspots = n.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (r.confidence = n.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (r.faceSize = n.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (r.faceCenter = m.dot.v4.Point.toObject(e.faceCenter, n)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (r.smallestEdge = n.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (r.bottomLeft = m.dot.v4.Point.toObject(e.bottomLeft, n)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (r.bottomRight = m.dot.v4.Point.toObject(e.bottomRight, n)), e.topLeft != null && e.hasOwnProperty("topLeft") && (r.topLeft = m.dot.v4.Point.toObject(e.topLeft, n)), e.topRight != null && e.hasOwnProperty("topRight") && (r.topRight = m.dot.v4.Point.toObject(e.topRight, n)), r;
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
        return n || (n = de.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new m.dot.v4.Point();
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
        if (e instanceof m.dot.v4.Point)
          return e;
        let n = new m.dot.v4.Point();
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
        return n || (n = de.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && m.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && m.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new m.dot.v4.FaceContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.image = m.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.metadata = m.dot.v4.Metadata.decode(e, e.uint32());
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
          let n = m.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = m.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof m.dot.v4.FaceContent)
          return e;
        let n = new m.dot.v4.FaceContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          n.image = m.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          n.metadata = m.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = m.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = m.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        return n || (n = de.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && m.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && m.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new m.dot.v4.DocumentContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.image = m.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.metadata = m.dot.v4.Metadata.decode(e, e.uint32());
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
          let n = m.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = m.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof m.dot.v4.DocumentContent)
          return e;
        let n = new m.dot.v4.DocumentContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          n.image = m.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          n.metadata = m.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = m.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = m.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        get: v.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent"]),
        set: v.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        return r || (r = de.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && m.dot.v4.DocumentContent.encode(n.documentContent, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.faceContent != null && Object.hasOwnProperty.call(n, "faceContent") && m.dot.v4.FaceContent.encode(n.faceContent, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(n, "magnifeyeLivenessContent") && m.dot.v4.MagnifEyeLivenessContent.encode(n.magnifeyeLivenessContent, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.smileLivenessContent != null && Object.hasOwnProperty.call(n, "smileLivenessContent") && m.dot.v4.SmileLivenessContent.encode(n.smileLivenessContent, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(n, "eyeGazeLivenessContent") && m.dot.v4.EyeGazeLivenessContent.encode(n.eyeGazeLivenessContent, r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), n.palmContent != null && Object.hasOwnProperty.call(n, "palmContent") && m.dot.v4.PalmContent.encode(n.palmContent, r.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new m.dot.v4.Blob();
        for (; n.pos < i; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.documentContent = m.dot.v4.DocumentContent.decode(n, n.uint32());
              break;
            }
            case 5: {
              a.eyeGazeLivenessContent = m.dot.v4.EyeGazeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.faceContent = m.dot.v4.FaceContent.decode(n, n.uint32());
              break;
            }
            case 3: {
              a.magnifeyeLivenessContent = m.dot.v4.MagnifEyeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 4: {
              a.smileLivenessContent = m.dot.v4.SmileLivenessContent.decode(n, n.uint32());
              break;
            }
            case 6: {
              a.palmContent = m.dot.v4.PalmContent.decode(n, n.uint32());
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
            let i = m.dot.v4.DocumentContent.verify(n.documentContent);
            if (i)
              return "documentContent." + i;
          }
        }
        if (n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = m.dot.v4.EyeGazeLivenessContent.verify(n.eyeGazeLivenessContent);
            if (i)
              return "eyeGazeLivenessContent." + i;
          }
        }
        if (n.faceContent != null && n.hasOwnProperty("faceContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = m.dot.v4.FaceContent.verify(n.faceContent);
            if (i)
              return "faceContent." + i;
          }
        }
        if (n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = m.dot.v4.MagnifEyeLivenessContent.verify(n.magnifeyeLivenessContent);
            if (i)
              return "magnifeyeLivenessContent." + i;
          }
        }
        if (n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = m.dot.v4.SmileLivenessContent.verify(n.smileLivenessContent);
            if (i)
              return "smileLivenessContent." + i;
          }
        }
        if (n.palmContent != null && n.hasOwnProperty("palmContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = m.dot.v4.PalmContent.verify(n.palmContent);
            if (i)
              return "palmContent." + i;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof m.dot.v4.Blob)
          return n;
        let r = new m.dot.v4.Blob();
        if (n.documentContent != null) {
          if (typeof n.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          r.documentContent = m.dot.v4.DocumentContent.fromObject(n.documentContent);
        }
        if (n.eyeGazeLivenessContent != null) {
          if (typeof n.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          r.eyeGazeLivenessContent = m.dot.v4.EyeGazeLivenessContent.fromObject(n.eyeGazeLivenessContent);
        }
        if (n.faceContent != null) {
          if (typeof n.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          r.faceContent = m.dot.v4.FaceContent.fromObject(n.faceContent);
        }
        if (n.magnifeyeLivenessContent != null) {
          if (typeof n.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          r.magnifeyeLivenessContent = m.dot.v4.MagnifEyeLivenessContent.fromObject(n.magnifeyeLivenessContent);
        }
        if (n.smileLivenessContent != null) {
          if (typeof n.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          r.smileLivenessContent = m.dot.v4.SmileLivenessContent.fromObject(n.smileLivenessContent);
        }
        if (n.palmContent != null) {
          if (typeof n.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          r.palmContent = m.dot.v4.PalmContent.fromObject(n.palmContent);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return n.documentContent != null && n.hasOwnProperty("documentContent") && (i.documentContent = m.dot.v4.DocumentContent.toObject(n.documentContent, r), r.oneofs && (i.blob = "documentContent")), n.faceContent != null && n.hasOwnProperty("faceContent") && (i.faceContent = m.dot.v4.FaceContent.toObject(n.faceContent, r), r.oneofs && (i.blob = "faceContent")), n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent") && (i.magnifeyeLivenessContent = m.dot.v4.MagnifEyeLivenessContent.toObject(n.magnifeyeLivenessContent, r), r.oneofs && (i.blob = "magnifeyeLivenessContent")), n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent") && (i.smileLivenessContent = m.dot.v4.SmileLivenessContent.toObject(n.smileLivenessContent, r), r.oneofs && (i.blob = "smileLivenessContent")), n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent") && (i.eyeGazeLivenessContent = m.dot.v4.EyeGazeLivenessContent.toObject(n.eyeGazeLivenessContent, r), r.oneofs && (i.blob = "eyeGazeLivenessContent")), n.palmContent != null && n.hasOwnProperty("palmContent") && (i.palmContent = m.dot.v4.PalmContent.toObject(n.palmContent, r), r.oneofs && (i.blob = "palmContent")), i;
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
      return t.prototype.segments = v.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.segments != null && e.segments.length)
          for (let r = 0; r < e.segments.length; ++r)
            m.dot.v4.EyeGazeLivenessSegment.encode(e.segments[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && m.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new m.dot.v4.EyeGazeLivenessContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.segments && i.segments.length || (i.segments = []), i.segments.push(m.dot.v4.EyeGazeLivenessSegment.decode(e, e.uint32()));
              break;
            }
            case 2: {
              i.metadata = m.dot.v4.Metadata.decode(e, e.uint32());
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
            let r = m.dot.v4.EyeGazeLivenessSegment.verify(e.segments[n]);
            if (r)
              return "segments." + r;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = m.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof m.dot.v4.EyeGazeLivenessContent)
          return e;
        let n = new m.dot.v4.EyeGazeLivenessContent();
        if (e.segments) {
          if (!Array.isArray(e.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          n.segments = [];
          for (let r = 0; r < e.segments.length; ++r) {
            if (typeof e.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[r] = m.dot.v4.EyeGazeLivenessSegment.fromObject(e.segments[r]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          n.metadata = m.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.segments = []), n.defaults && (r.metadata = null), e.segments && e.segments.length) {
          r.segments = [];
          for (let i = 0; i < e.segments.length; ++i)
            r.segments[i] = m.dot.v4.EyeGazeLivenessSegment.toObject(e.segments[i], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = m.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        return n || (n = de.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && m.dot.Image.encode(e.image, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new m.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.corner = e.int32();
              break;
            }
            case 2: {
              i.image = m.dot.Image.decode(e, e.uint32());
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
          let n = m.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof m.dot.v4.EyeGazeLivenessSegment)
          return e;
        let n = new m.dot.v4.EyeGazeLivenessSegment();
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
          n.image = m.dot.Image.fromObject(e.image);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.corner = n.enums === String ? "TOP_LEFT" : 0, r.image = null), e.corner != null && e.hasOwnProperty("corner") && (r.corner = n.enums === String ? m.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : m.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (r.image = m.dot.Image.toObject(e.image, n)), r;
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
        return n || (n = de.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && m.dot.Image.encode(e.neutralExpressionFaceImage, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.smileExpressionFaceImage != null && Object.hasOwnProperty.call(e, "smileExpressionFaceImage") && m.dot.Image.encode(e.smileExpressionFaceImage, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && m.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new m.dot.v4.SmileLivenessContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.neutralExpressionFaceImage = m.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.smileExpressionFaceImage = m.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              i.metadata = m.dot.v4.Metadata.decode(e, e.uint32());
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
          let n = m.dot.Image.verify(e.neutralExpressionFaceImage);
          if (n)
            return "neutralExpressionFaceImage." + n;
        }
        if (e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage")) {
          let n = m.dot.Image.verify(e.smileExpressionFaceImage);
          if (n)
            return "smileExpressionFaceImage." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = m.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof m.dot.v4.SmileLivenessContent)
          return e;
        let n = new m.dot.v4.SmileLivenessContent();
        if (e.neutralExpressionFaceImage != null) {
          if (typeof e.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          n.neutralExpressionFaceImage = m.dot.Image.fromObject(e.neutralExpressionFaceImage);
        }
        if (e.smileExpressionFaceImage != null) {
          if (typeof e.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          n.smileExpressionFaceImage = m.dot.Image.fromObject(e.smileExpressionFaceImage);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          n.metadata = m.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = m.dot.Image.toObject(e.neutralExpressionFaceImage, n)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = m.dot.Image.toObject(e.smileExpressionFaceImage, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = m.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        return n || (n = de.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && m.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && m.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new m.dot.v4.PalmContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.image = m.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.metadata = m.dot.v4.Metadata.decode(e, e.uint32());
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
          let n = m.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = m.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof m.dot.v4.PalmContent)
          return e;
        let n = new m.dot.v4.PalmContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          n.image = m.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          n.metadata = m.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = m.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = m.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
    return o.prototype.bytes = v.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = de.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new m.dot.Image();
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
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || v.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof m.dot.Image)
        return t;
      let e = new m.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? v.base64.decode(t.bytes, e.bytes = v.newBuffer(v.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = v.newBuffer(n.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? v.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
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
    return o.prototype.items = v.emptyArray, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      if (e || (e = de.create()), t.items != null && t.items.length) {
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
      let n = e === void 0 ? t.len : t.pos + e, r = new m.dot.Int32List();
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
          if (!v.isInteger(t.items[e]))
            return "items: integer[] expected";
      }
      return null;
    }, o.fromObject = function(t) {
      if (t instanceof m.dot.Int32List)
        return t;
      let e = new m.dot.Int32List();
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
    return o.prototype.digest = v.newBuffer([]), o.prototype.timestampMillis = v.Long ? v.Long.fromBits(0, 0, !0) : 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = de.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
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
      let n = e === void 0 ? t.len : t.pos + e, r = new m.dot.DigestWithTimestamp();
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
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || v.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !v.isInteger(t.timestampMillis) && !(t.timestampMillis && v.isInteger(t.timestampMillis.low) && v.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof m.dot.DigestWithTimestamp)
        return t;
      let e = new m.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? v.base64.decode(t.digest, e.digest = v.newBuffer(v.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (v.Long ? (e.timestampMillis = v.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new v.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      if (e.defaults)
        if (e.bytes === String ? n.digest = "" : (n.digest = [], e.bytes !== Array && (n.digest = v.newBuffer(n.digest))), v.Long) {
          let r = new v.Long(0, 0, !0);
          n.timestampMillis = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r;
        } else
          n.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (n.digest = e.bytes === String ? v.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? n.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : n.timestampMillis = e.longs === String ? v.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new v.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, te.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, o;
  }(), x;
})();
async function Tr(x) {
  const { Image: o } = f0, t = await x.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const r = o.verify(n);
  if (r) throw Error(r);
  const i = {};
  return i.bytes = e, o.create(i);
}
async function rg(x) {
  const { v4: { Metadata: o } } = f0, t = { ...x };
  t.platform = f0.Platform.WEB;
  const e = t, n = o.verify(e);
  if (n) throw Error(n);
  return o.create(e);
}
async function ig(x) {
  const { Content: o } = f0, { iv: t, key: e, message: n } = await T1(x), r = { token: new Uint8Array(e), iv: t, schemaVersion: ul, bytes: new Uint8Array(n) }, i = o.verify(r);
  if (i) throw Error(i);
  const a = o.create(r);
  return o.encode(a).finish();
}
function ag({ documentContent: x, faceContent: o, magnifeyeLivenessContent: t, smileLivenessContent: e }) {
  const { Blob: n } = f0.v4, r = {};
  r.documentContent = x, r.faceContent = o, r.magnifeyeLivenessContent = t, r.smileLivenessContent = e;
  const i = r, a = n.verify(i);
  if (a) throw Error(a);
  const s = n.create(i);
  return n.encode(s).finish();
}
async function RI(x, o) {
  const { FaceContent: t } = f0.v4, e = await Tr(x), n = await rg(o), r = {};
  r.image = e, r.metadata = n;
  const i = r, a = t.verify(i);
  if (a) throw Error(a);
  const s = t.create(i), c = {};
  return c.faceContent = s, ag(c);
}
async function PI(x, o) {
  const t = await RI(x, o);
  return ig(t);
}
const VI = ({ onPhotoTakenInternal: x }) => {
  const { redfin: o, sunfish: t } = ni(), { analytics: e } = cc(), { appState: n, freemiumOverlayState: r } = q0(), { faceCameraOptions: i } = pc(), { cameraFacing: a, onPhotoTaken: s, sessionToken: c, thresholds: d, wasmDirectoryPath: g } = i, { controller: C } = fI(d, g), l = F0(
    ({ content: K, controller: _, imageData: Ie, webMetadata: U }) => {
      Yl(gc.FACE, _.getCandidateSelectionImages()), x == null || x({ cameraProperties: U }), s(Ie, K);
    },
    [x, s]
  ), { cameraResolution: h, cameraService: p, detectionDetails: A, videoRef: u } = A1({
    analytics: e,
    cameraFacing: a,
    controller: C,
    sessionToken: c,
    createProtoMessage: PI,
    onPhotoTaken: l
  }), { shouldMirror: W } = a1(Mt.CONTROL, p);
  Xl(Mt.CAMERA_PROPS_CHANGED, {
    cameraResolution: h,
    shouldMirror: W
  }), Be(() => () => {
    bn.getInstance().restart();
  }, []);
  const H = r !== Px.HIDDEN && o !== Cr.Higher && h, N = r === Px.VISIBLE, Y = t, X = h && t && n === St.RUNNING;
  return /* @__PURE__ */ O(pt, { children: [
    H && /* @__PURE__ */ O(H1, { fullOverlay: N, resolution: h }),
    /* @__PURE__ */ O(Vu, { ref: u, $isImageMirror: W, $isVisible: Y, autoPlay: !0, muted: !0, playsInline: !0 }),
    X && /* @__PURE__ */ O(
      S1,
      {
        redfin: o,
        cameraResolution: h,
        detectionDetails: A,
        isImageMirror: W
      }
    )
  ] });
}, TI = ({
  onPhotoTakenInternal: x,
  ...o
}) => /* @__PURE__ */ O(kl, { cameraOptions: o, children: /* @__PURE__ */ O(VI, { onPhotoTakenInternal: x }) }), EI = ({ children: x }) => {
  const o = Et(null);
  return u1(o, Mt.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ O(Pu, { ref: o, children: x });
};
async function LI(x, o, t) {
  const { SmileLivenessContent: e } = f0.v4, n = await Tr(x), r = await Tr(o), i = await rg(t), a = {};
  a.neutralExpressionFaceImage = n, a.smileExpressionFaceImage = r, a.metadata = i;
  const s = a, c = e.verify(s);
  if (c) throw Error(c);
  const d = e.create(s), g = {};
  return g.smileLivenessContent = d, ag(g);
}
async function NI(x, o, t) {
  const e = await LI(x, o, t);
  return ig(e);
}
const sg = {};
sg.max = 0.15;
const Er = {};
Er.confidence = 0.3, Er.status = sg;
const cg = {};
cg.mouth = Er;
const gg = {};
gg.min = 0.35;
const Lr = {};
Lr.confidence = 0.3, Lr.status = gg;
const t0 = {};
t0.brightnessHighThreshold = 1, t0.brightnessLowThreshold = -(1 * -8837 + -73 * -55 + -53 * -91), t0.sharpnessThreshold = -(-1452 + -1453 * -1), t0.outOfBoundsThreshold = -(383 * -21 + -2579 + -3541 * -3), t0.minFaceSizeRatio = 0.1, t0.mouth = Lr;
const DI = { [Z0.NEUTRAL]: cg, [Z0.SMILE]: t0 }, FI = DI;
function YI(x, o) {
  var t = { ...FI[x.value], ...o };
  return t;
}
const XI = ({
  licensePath: x,
  onComplete: o,
  onError: t,
  sessionToken: e,
  thresholds: n,
  wasmDirectoryPath: r
}) => {
  const { analytics: i } = cc(), { handleAppStateChange: a, handleError: s } = Du(), c = P0(Z0.NEUTRAL), d = P0(null), g = P0(null), C = P0(null);
  function l(W) {
    c.value = W, Sr(Hx.STATUS_CHANGED, { phase: W });
  }
  function h(W) {
    d.value = W, l(Z0.SMILE), a(g0.RUNNING);
  }
  async function p(W) {
    g.value = W;
    try {
      if (!d.value || !g.value)
        throw new xe("Missing face data");
      const H = {
        sessionToken: e,
        web: C.value
      }, N = await NI(
        d.value.image,
        g.value.image,
        H
      ), Y = [d.value, g.value];
      o(Y, N), i == null || i.trackLivenessProcess(Y), a(g0.DONE);
    } catch (H) {
      H instanceof Error && s(xe.fromError(H));
      return;
    }
  }
  function A(W) {
    C.value = Bl(C.value, W.cameraProperties);
  }
  const u = {
    [Z0.NEUTRAL]: h,
    [Z0.SMILE]: p
  };
  return /* @__PURE__ */ O(EI, { children: /* @__PURE__ */ O(
    TI,
    {
      licensePath: x,
      onError: t,
      onPhotoTaken: u[c.value],
      onPhotoTakenInternal: A,
      thresholds: YI(c, n),
      wasmDirectoryPath: r
    }
  ) });
};
function MI({ initAppState: x }) {
  const [o, t] = tt(x), [e, n] = tt(), [r, i] = tt(!1), a = {};
  return a.appState = o, a.setAppState = t, a.error = e, a.setError = n, a.isCameraReady = r, a.setIsCameraReady = i, a;
}
function jI(x) {
  return x !== g0.RUNNING && x !== g0.WAITING ? Px.VISIBLE : Px.VISIBLE_WITH_MASK;
}
function JI({ onError: x }) {
  const { appState: o, error: t, isCameraReady: e, setAppState: n, setError: r, setIsCameraReady: i } = MI({
    initAppState: g0.LOADING
  }), a = jI(o), s = F0(
    (d) => {
      Sr(Hx.STATUS_CHANGED, { state: g0.ERROR, error: d }), i(!1), x(d), r(d), n(g0.ERROR);
    },
    [x, i, r, n]
  ), c = F0(
    (d) => {
      n(d), Sr(Hx.STATUS_CHANGED, { state: d });
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
var dg = ((x) => (x.AUTO_CAPTURE = "auto-capture", x))(dg || {});
class _I {
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
    const a = ax(i);
    await fetch("" + r + a + "&" + o, n);
  }
  async init(o, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = o;
    const e = { _app_version: wc() }, n = { organization: Bc(window.location.href) }, r = ax({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const t = ax(o);
    await this.countlyFetch(t);
  }
  async sendAutoCaptureEvent(o, t) {
    const e = {};
    e.key = dg.AUTO_CAPTURE, e.count = 1, e.dur = t, e.segmentation = o;
    const n = [e], r = ax({ events: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
}
const gx = new _I();
function QI() {
  const [x] = window.crypto.getRandomValues(new Uint32Array(1));
  return x.toString(-1539 + -1555 * -1);
}
function UI() {
  const x = sessionStorage.getItem("dot-user-id");
  if (x) return x;
  const o = QI();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function zI(x, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : x;
}
function qI(x) {
  return x > -4 * 1518 + 1750 * 4 + -868 ? ">1m" : x > 6551 + -3253 * 2 ? ">45" : x > 9487 + 871 * 1 + 2 * -5164 ? ">30" : "" + x;
}
const $I = (x) => Math.round(x / 500) * 500 / (-12983 + -3 * -4661), ns = (x) => x ? x <= -2378 + 61 * 39 ? Math.round(x * (-9707 * -1 + 1021 * 1 + -1 * 10708)) / (-1 * 4054 + 3525 + 183 * 3) : Math.round(x / 50) * (-451 * 10 + 8955 + -4395) : -160 * -56 + -3695 + 15 * -351, e2 = (x) => Math.round(x * (-9399 * -1 + 7142 + -16539)) / (-6266 + 565 * 13 + 1 * -1077);
class t2 {
  constructor() {
    J(this, "countly", gx);
  }
  createSegmentation(o) {
    return { appVersion: wc(), ...o };
  }
  init(o) {
    if (n1()) return;
    const t = UI();
    gx.init(t, o);
  }
  endSession() {
    gx.endSession();
  }
  walleye(o, t) {
    const e = {};
    e.nocturne = o, e.customer = t;
    const n = this.createSegmentation(e);
    gx.sendAutoCaptureEvent(n);
  }
}
class n2 extends t2 {
  constructor() {
    super(...arguments);
    J(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(t) {
    this.captureProcessAnalytics.push(t);
  }
}
class x2 extends n2 {
  trackLivenessProcess(o) {
    var d, g, C, l, h, p;
    if (!o.length || !this.captureProcessAnalytics.length) return;
    const [t, e] = o, [n, r] = this.captureProcessAnalytics, i = e2(n.averageFps + (r == null ? void 0 : r.averageFps)) / (5535 + -5533 * 1), a = $I(n.captureProcessDurationInMs), s = -1559 * -3 + -5347 + 673, c = this.createSegmentation({ faceSize: ns((d = e.data.detection) == null ? void 0 : d.faceSize), confidence: ns((g = t.data.detection) == null ? void 0 : g.confidence), imageResolution: ((l = (C = t.data) == null ? void 0 : C["imageResolution"]) == null ? void 0 : l.width) + "x" + ((p = (h = t.data) == null ? void 0 : h["imageResolution"]) == null ? void 0 : p.height), averageFps: i, captureTimeNeutral: qI(a), captureTimeSmile: "" + s, camera: zI(n == null ? void 0 : n.deviceName, n.facingMode), instructionSet: n.instructionSet });
    this.countly.sendAutoCaptureEvent(c, a + s);
  }
}
const o2 = new x2(), r2 = ({ props: x }) => x ? /* @__PURE__ */ O(Gu, { target: x.styleTarget, children: /* @__PURE__ */ O(
  Uu,
  {
    licensePath: x.licensePath,
    bramble: vr.getInstance(),
    wasmDirectoryPath: x.wasmDirectoryPath,
    children: /* @__PURE__ */ O($u, { analytics: o2, appKey: "d64319129bb0ee02eccfab418edba9629a97d6b6", children: /* @__PURE__ */ O(
      Nu,
      {
        value: JI({
          onError: x.onError
        }),
        children: /* @__PURE__ */ O(sc, { children: /* @__PURE__ */ O(XI, { ...x }) })
      }
    ) })
  }
) }) : null;
Lg(r2, "x-dot-smile-liveness", ["props"]);
