var Mg = Object.defineProperty;
var zr = (x) => {
  throw TypeError(x);
};
var Xg = (x, i, t) => i in x ? Mg(x, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[i] = t;
var V = (x, i, t) => Xg(x, typeof i != "symbol" ? i + "" : i, t), qr = (x, i, t) => i.has(x) || zr("Cannot " + t);
var L = (x, i, t) => (qr(x, i, "read from private field"), t ? t.call(x) : i.get(x)), ne = (x, i, t) => i.has(x) ? zr("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(x) : i.set(x, t), $ = (x, i, t, e) => (qr(x, i, "write to private field"), e ? e.call(x, t) : i.set(x, t), t);
var Xn, M, hs, ms, t0, $r, bs, xo, Qo, io, oo, As, Wn = {}, ys = [], jg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, gi = Array.isArray;
function Ht(x, i) {
  for (var t in i) x[t] = i[t];
  return x;
}
function vs(x) {
  var i = x.parentNode;
  i && i.removeChild(x);
}
function Te(x, i, t) {
  var e, n, o, r = {};
  for (o in i) o == "key" ? e = i[o] : o == "ref" ? n = i[o] : r[o] = i[o];
  if (arguments.length > 6911 + 147 * -47 && (r.children = arguments.length > -1423 * 7 + -8524 + 8 * 2311 ? Xn.call(arguments, -7037 + -415 * 3 + 436 * 19) : t), typeof x == "function" && x.defaultProps != null)
    for (o in x.defaultProps) void (4 * 1087 + -8702 + 1 * 4354) === r[o] && (r[o] = x.defaultProps[o]);
  return hn(x, r, e, n, null);
}
function hn(x, i, t, e, n) {
  var o = {};
  o.type = x, o.props = i, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__d = void (421 * 10 + 4071 * -1 + -139), o.__c = null, o.constructor = void (-10427 + -1 * -10427), o.__v = n ?? ++hs, o.__i = -(-1752 + -995 * -2 + 1 * -237), o.__u = 0;
  var r = o;
  return n == null && M.vnode != null && M.vnode(r), r;
}
function _g() {
  var x = {};
  return x.current = null, x;
}
function ot(x) {
  return x.children;
}
function xt(x, i) {
  this.props = x, this.context = i;
}
function l0(x, i) {
  if (i == null) return x.__ ? l0(x.__, x.__i + (-28 * 13 + -7915 + 8280)) : null;
  for (var t; i < x.__k.length; i++) if ((t = x.__k[i]) != null && t.__e != null) return t.__e;
  return typeof x.type == "function" ? l0(x) : null;
}
function Ws(x) {
  var i, t;
  if ((x = x.__) != null && x.__c != null) {
    for (x.__e = x.__c.base = null, i = 2 * 380 + -1331 * -1 + 123 * -17; i < x.__k.length; i++) if ((t = x.__k[i]) != null && t.__e != null) {
      x.__e = x.__c.base = t.__e;
      break;
    }
    return Ws(x);
  }
}
function ro(x) {
  (!x.__d && (x.__d = !(160 + -1411 * -3 + -4393)) && t0.push(x) && !Rx.__r++ || $r !== M.debounceRendering) && (($r = M.debounceRendering) || bs)(Rx);
}
function Rx() {
  var x, i, t, e, n, o, r, s;
  for (t0.sort(xo); x = t0.shift(); ) x.__d && (i = t0.length, e = void (7 * 362 + -373 * -3 + -3653), o = (n = (t = x).__v).__e, r = [], s = [], t.__P && ((e = Ht({}, n)).__v = n.__v + (-8790 + -1893 * 2 + 1 * 12577), M.vnode && M.vnode(e), zo(t.__P, e, n, t.__n, t.__P.namespaceURI, 4772 + 2319 * -2 + -3 * 34 & n.__u ? [o] : null, r, o ?? l0(n), !!(1835 * -5 + 3830 + 5377 & n.__u), s), e.__v = n.__v, e.__.__k[e.__i] = e, Bs(r, e, s), e.__e != o && Ws(e)), t0.length > i && t0.sort(xo));
  Rx.__r = -6910 + -1382 * -5;
}
function Ss(x, i, t, e, n, o, r, s, a, c, d) {
  var g, C, u, p, m, A = e && e.__k || ys, l = i.length;
  for (t.__d = a, Jg(t, i, A), a = t.__d, g = -142 * -5 + -5753 + 5043; g < l; g++) (u = t.__k[g]) != null && typeof u != "boolean" && typeof u != "function" && (C = -(-2 * -833 + 5159 + 6824 * -1) === u.__i ? Wn : A[u.__i] || Wn, u.__i = g, zo(x, u, C, n, o, r, s, a, c, d), p = u.__e, u.ref && C.ref != u.ref && (C.ref && qo(C.ref, null, u), d.push(u.ref, u.__c || p, u)), m == null && p != null && (m = p), 13326 + 364 * -223 + 34 * 3923 & u.__u || C.__k === u.__k ? (a && typeof u.type == "string" && !x.contains(a) && (a = l0(C)), a = ws(u, a, x)) : typeof u.type == "function" && void (10 * -58 + 53 * -125 + -5 * -1441) !== u.__d ? a = u.__d : p && (a = p.nextSibling), u.__d = void (5206 + 1 * 3359 + -8565), u.__u &= -(256309 * 1 + -19879 + -39821));
  t.__d = a, t.__e = m;
}
function Jg(x, i, t) {
  var e, n, o, r, s, a = i.length, c = t.length, d = c, g = -1 * -1621 + -3284 + -1663 * -1;
  for (x.__k = [], e = 9686 * -1 + 4715 + 4971 * 1; e < a; e++) r = e + g, (n = x.__k[e] = (n = i[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? hn(null, n, null, null, null) : gi(n) ? hn(ot, { children: n }, null, null, null) : void (-895 * 1 + -27 * -34 + -23 * 1) === n.constructor && n.__b > 5171 + 1549 * 5 + 6458 * -2 ? hn(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = x, n.__b = x.__b + (-1 * -8811 + 28 * 111 + -11918), s = Ug(n, t, r, d), n.__i = s, o = null, -(-181 * 16 + 499 * 10 + -1 * 2093) !== s && (d--, (o = t[s]) && (o.__u |= -178 * 796 + 9 * -22318 + 157874 * 3)), o == null || o.__v === null ? (-(78 * 120 + 5662 + -15021) == s && g--, typeof n.type != "function" && (n.__u |= 65536)) : s !== r && (s == r - (-143 * 59 + -9272 + 805 * 22) ? g = s - r : s == r + (9235 + -1 * -149 + 1 * -9383) ? g++ : s > r ? d > a - r ? g += s - r : g-- : s < r && g++, s !== e + g && (n.__u |= 16 * 2381 + 1523 * 17 + 1549))) : (o = t[r]) && o.key == null && o.__e && 3834 + -17 * -570 + -13524 == (-113031 + -227187 * -1 + 16916 & o.__u) && (o.__e == x.__d && (x.__d = l0(o)), ao(o, o, !(17093 + 4 * -4273)), t[r] = null, d--);
  if (d)
    for (e = 271 * -9 + 4307 + -467 * 4; e < c; e++) (o = t[e]) != null && -185 * 9 + 408 * -15 + 865 * 9 == (-268727 + 1 * 399799 & o.__u) && (o.__e == x.__d && (x.__d = l0(o)), ao(o, o));
}
function ws(x, i, t) {
  var e, n;
  if (typeof x.type == "function") {
    for (e = x.__k, n = -9129 + 1 * -7367 + 16496; e && n < e.length; n++) e[n] && (e[n].__ = x, i = ws(e[n], i, t));
    return i;
  }
  x.__e != i && (t.insertBefore(x.__e, i || null), i = x.__e);
  do
    i = i && i.nextSibling;
  while (i != null && 2 * 478 + 4005 * -1 + 3057 === i.nodeType);
  return i;
}
function Rt(x, i) {
  return i = i || [], x == null || typeof x == "boolean" || (gi(x) ? x.some(function(t) {
    Rt(t, i);
  }) : i.push(x)), i;
}
function Ug(x, i, t, e) {
  var n = x.key, o = x.type, r = t - (-10586 + 3529 * 3), s = t + (-113 * 9 + -5571 + 1 * 6589), a = i[t];
  if (a === null || a && n == a.key && o === a.type && 2 * 2116 + 8 * -1134 + 484 * 10 == (-244442 + 359 * 1046 & a.__u)) return t;
  if (e > (a != null && 683 + -1201 * -6 + -7889 == (131072 & a.__u) ? -920 + -3 * -307 : -5 * 1902 + 367 + 223 * 41)) for (; r >= -11656 + -188 * -62 || s < i.length; ) {
    if (r >= -9950 + -10 * -995) {
      if ((a = i[r]) && -1 * 2999 + 14 * -115 + -4609 * -1 == (-153484 * -1 + 16958 * -10 + 252 * 584 & a.__u) && n == a.key && o === a.type) return r;
      r--;
    }
    if (s < i.length) {
      if ((a = i[s]) && 2309 + -2131 * -4 + -1 * 10833 == (-2 * -70572 + 79162 * 3 + -247558 & a.__u) && n == a.key && o === a.type) return s;
      s++;
    }
  }
  return -(114 + -1 * 9077 + 8964);
}
function ea(x, i, t) {
  i[0] === "-" ? x.setProperty(i, t ?? "") : x[i] = t == null ? "" : typeof t != "number" || jg.test(i) ? t : t + "px";
}
function sx(x, i, t, e, n) {
  var o;
  e: if (i === "style")
    if (typeof t == "string") x.style.cssText = t;
    else {
      if (typeof e == "string" && (x.style.cssText = e = ""), e)
        for (i in e) t && i in t || ea(x.style, i, "");
      if (t)
        for (i in t) e && t[i] === e[i] || ea(x.style, i, t[i]);
    }
  else if (i[0] === "o" && i[-3952 * -2 + -1 * -9067 + -16970] === "n") o = i !== (i = i.replace(/(PointerCapture)$|Capture$/i, "$1")), i = i.toLowerCase() in x || i === "onFocusOut" || i === "onFocusIn" ? i.toLowerCase().slice(-3506 + 1 * 3508) : i.slice(-1883 * -1 + -1 * 4098 + 2217), x.l || (x.l = {}), x.l[i + o] = t, t ? e ? t.u = e.u : (t.u = Qo, x.addEventListener(i, o ? oo : io, o)) : x.removeEventListener(i, o ? oo : io, o);
  else {
    if (n == "http://www.w3.org/2000/svg") i = i.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (i != "width" && i != "height" && i != "href" && i != "list" && i != "form" && i != "tabIndex" && i != "download" && i != "rowSpan" && i != "colSpan" && i != "role" && i != "popover" && i in x) try {
      x[i] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || !(-2 * -4583 + 614 * -9 + 3639 * -1) === t && i[-886 + -178 * -5] !== "-" ? x.removeAttribute(i) : x.setAttribute(i, i == "popover" && 4497 + -1 * 4496 == t ? "" : t));
  }
}
function ta(x) {
  return function(i) {
    if (this.l) {
      var t = this.l[i.type + x];
      if (i.t == null) i.t = Qo++;
      else if (i.t < t.u) return;
      return t(M.event ? M.event(i) : i);
    }
  };
}
function zo(x, i, t, e, n, o, r, s, a, c) {
  var d, g, C, u, p, m, A, l, W, O, D, Y, _, H, re, U, te = i.type;
  if (void (-5 + 29 * -311 + 9024) !== i.constructor) return null;
  5 * 1931 + 1178 + 2141 * -5 & t.__u && (a = !!(1937 * -1 + -40 + 41 * 49 & t.__u), o = [s = i.__e = t.__e]), (d = M.__b) && d(i);
  e: if (typeof te == "function") try {
    if (l = i.props, W = "prototype" in te && te.prototype.render, O = (d = te.contextType) && e[d.__c], D = d ? O ? O.props.value : d.__ : e, t.__c ? A = (g = i.__c = t.__c).__ = g.__E : (W ? i.__c = g = new te(l, D) : (i.__c = g = new xt(l, D), g.constructor = te, g.render = zg), O && O.sub(g), g.props = l, g.state || (g.state = {}), g.context = D, g.__n = e, C = g.__d = !(6 * 706 + 9496 + -13732), g.__h = [], g._sb = []), W && g.__s == null && (g.__s = g.state), W && te.getDerivedStateFromProps != null && (g.__s == g.state && (g.__s = Ht({}, g.__s)), Ht(g.__s, te.getDerivedStateFromProps(l, g.__s))), u = g.props, p = g.state, g.__v = i, C) W && te.getDerivedStateFromProps == null && g.componentWillMount != null && g.componentWillMount(), W && g.componentDidMount != null && g.__h.push(g.componentDidMount);
    else {
      if (W && te.getDerivedStateFromProps == null && l !== u && g.componentWillReceiveProps != null && g.componentWillReceiveProps(l, D), !g.__e && (g.shouldComponentUpdate != null && !(949 * 4 + 2788 + -6583) === g.shouldComponentUpdate(l, g.__s, D) || i.__v === t.__v)) {
        for (i.__v !== t.__v && (g.props = l, g.state = g.__s, g.__d = !(1 * -4133 + 8971 + -4837)), i.__e = t.__e, i.__k = t.__k, i.__k.forEach(function(Ve) {
          Ve && (Ve.__ = i);
        }), Y = 2029 + 3 * 1464 + -1 * 6421; Y < g._sb.length; Y++) g.__h.push(g._sb[Y]);
        g._sb = [], g.__h.length && r.push(g);
        break e;
      }
      g.componentWillUpdate != null && g.componentWillUpdate(l, g.__s, D), W && g.componentDidUpdate != null && g.__h.push(function() {
        g.componentDidUpdate(u, p, m);
      });
    }
    if (g.context = D, g.props = l, g.__P = x, g.__e = !(-1751 * 3 + -1056 + -3155 * -2), _ = M.__r, H = -5559 + 236 * 34 + -17 * 145, W) {
      for (g.state = g.__s, g.__d = !(-298 * -10 + -1107 + -1872), _ && _(i), d = g.render(g.props, g.state, g.context), re = 1604 + -6 * 1029 + 4570; re < g._sb.length; re++) g.__h.push(g._sb[re]);
      g._sb = [];
    } else do
      g.__d = !(1 * 9619 + 1 * -7292 + -2326), _ && _(i), d = g.render(g.props, g.state, g.context), g.state = g.__s;
    while (g.__d && ++H < 3128 + 3103 * -1);
    g.state = g.__s, g.getChildContext != null && (e = Ht(Ht({}, e), g.getChildContext())), W && !C && g.getSnapshotBeforeUpdate != null && (m = g.getSnapshotBeforeUpdate(u, p)), Ss(x, gi(U = d != null && d.type === ot && d.key == null ? d.props.children : d) ? U : [U], i, t, e, n, o, r, s, a, c), g.base = i.__e, i.__u &= -(70 + 74 * -25 + 647 * 3), g.__h.length && r.push(g), A && (g.__E = g.__ = null);
  } catch (Ve) {
    i.__v = null, a || o != null ? (i.__e = s, i.__u |= a ? 160 : -95 * 73 + -1234 + 8201, o[o.indexOf(s)] = null) : (i.__e = t.__e, i.__k = t.__k), M.__e(Ve, i, t);
  }
  else o == null && i.__v === t.__v ? (i.__k = t.__k, i.__e = t.__e) : i.__e = Qg(t.__e, i, t, e, n, o, r, a, c);
  (d = M.diffed) && d(i);
}
function Bs(x, i, t) {
  i.__d = void (-5 * 1757 + 1 * 2506 + 6279);
  for (var e = 37 * -253 + 29 * 136 + 5417; e < t.length; e++) qo(t[e], t[++e], t[++e]);
  M.__c && M.__c(i, x), x.some(function(n) {
    try {
      x = n.__h, n.__h = [], x.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      M.__e(o, n.__v);
    }
  });
}
function Qg(x, i, t, e, n, o, r, s, a) {
  var c, d, g, C, u, p, m, A = t.props, l = i.props, W = i.type;
  if (W === "svg" ? n = "http://www.w3.org/2000/svg" : W === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), o != null) {
    for (c = -4857 + 1 * 4399 + -1 * -458; c < o.length; c++) if ((u = o[c]) && "setAttribute" in u == !!W && (W ? u.localName === W : -20 * 314 + -4168 + 10451 === u.nodeType)) {
      x = u, o[c] = null;
      break;
    }
  }
  if (x == null) {
    if (W === null) return document.createTextNode(l);
    x = document.createElementNS(n, W, l.is && l), o = null, s = !(3656 + 13 * 20 + 3915 * -1);
  }
  if (W === null) A === l || s && x.data === l || (x.data = l);
  else {
    if (o = o && Xn.call(x.childNodes), A = t.props || Wn, !s && o != null)
      for (A = {}, c = 7983 + -5519 * -1 + -157 * 86; c < x.attributes.length; c++) A[(u = x.attributes[c]).name] = u.value;
    for (c in A) if (u = A[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") g = u;
      else if (c !== "key" && !(c in l)) {
        if (c == "value" && "defaultValue" in l || c == "checked" && "defaultChecked" in l) continue;
        sx(x, c, null, u, n);
      }
    }
    for (c in l) u = l[c], c == "children" ? C = u : c == "dangerouslySetInnerHTML" ? d = u : c == "value" ? p = u : c == "checked" ? m = u : c === "key" || s && typeof u != "function" || A[c] === u || sx(x, c, u, A[c], n);
    if (d) s || g && (d.__html === g.__html || d.__html === x.innerHTML) || (x.innerHTML = d.__html), i.__k = [];
    else if (g && (x.innerHTML = ""), Ss(x, gi(C) ? C : [C], i, t, e, W === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, o, r, o ? o[-5287 + -1 * -218 + 137 * 37] : t.__k && l0(t, 887 * -5 + -6349 + 10784), s, a), o != null)
      for (c = o.length; c--; ) o[c] != null && vs(o[c]);
    s || (c = "value", void (5961 + 1 * 6269 + -12230) !== p && (p !== x[c] || W === "progress" && !p || W === "option" && p !== A[c]) && sx(x, c, p, A[c], n), c = "checked", void (-9893 * -1 + 1 * 6613 + -16506) !== m && m !== x[c] && sx(x, c, m, A[c], n));
  }
  return x;
}
function qo(x, i, t) {
  try {
    typeof x == "function" ? x(i) : x.current = i;
  } catch (e) {
    M.__e(e, t);
  }
}
function ao(x, i, t) {
  var e, n;
  if (M.unmount && M.unmount(x), (e = x.ref) && (e.current && e.current !== x.__e || qo(e, null, i)), (e = x.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      M.__e(o, i);
    }
    e.base = e.__P = null;
  }
  if (e = x.__k)
    for (n = -5507 * 1 + 8357 + -150 * 19; n < e.length; n++) e[n] && ao(e[n], i, t || typeof x.type != "function");
  t || x.__e == null || vs(x.__e), x.__c = x.__ = x.__e = x.__d = void (-31 * 233 + -1061 * 7 + 14650);
}
function zg(x, i, t) {
  return this.constructor(x, t);
}
function jt(x, i, t) {
  var e, n, o, r;
  M.__ && M.__(x, i), n = (e = typeof t == "function") ? null : t && t.__k || i.__k, o = [], r = [], zo(i, x = (!e && t || i).__k = Te(ot, null, [x]), n || Wn, Wn, i.namespaceURI, !e && t ? [t] : n ? null : i.firstChild ? Xn.call(i.childNodes) : null, o, !e && t ? t : n ? n.__e : i.firstChild, e, r), Bs(o, x, r);
}
function $o(x, i) {
  jt(x, i, $o);
}
function er(x, i, t) {
  var e, n, o, r, s = Ht({}, x.props);
  for (o in x.type && x.type.defaultProps && (r = x.type.defaultProps), i) o == "key" ? e = i[o] : o == "ref" ? n = i[o] : s[o] = void (-9357 * -1 + 5 * 101 + -9862) === i[o] && void (1723 + 1 * -1723) !== r ? r[o] : i[o];
  return arguments.length > 2 && (s.children = arguments.length > 9844 + 823 * 3 + 12310 * -1 ? Xn.call(arguments, 4207 * -1 + 19 * 17 + 3886) : t), hn(x.type, s, e || x.key, n || x.ref, null);
}
function jn(x, i) {
  var t = { __c: i = "__cC" + As++, __: x, Consumer: function(e, n) {
    return e.children(n);
  }, Provider: function(e) {
    var n, o;
    return this.getChildContext || (n = [], (o = {})[i] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value !== r.value && n.some(function(s) {
        s.__e = !0, ro(s);
      });
    }, this.sub = function(r) {
      n.push(r);
      var s = r.componentWillUnmount;
      r.componentWillUnmount = function() {
        n && n.splice(n.indexOf(r), 1), s && s.call(r);
      };
    }), e.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
Xn = ys.slice, M = { __e: function(x, i, t, e) {
  for (var n, o, r; i = i.__; ) if ((n = i.__c) && !n.__) try {
    if ((o = n.constructor) && o.getDerivedStateFromError != null && (n.setState(o.getDerivedStateFromError(x)), r = n.__d), n.componentDidCatch != null && (n.componentDidCatch(x, e || {}), r = n.__d), r) return n.__E = n;
  } catch (s) {
    x = s;
  }
  throw x;
} }, hs = -5580 + -1 * -459 + 5121, ms = function(x) {
  return x != null && x.constructor == null;
}, xt.prototype.setState = function(x, i) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ht({}, this.state), typeof x == "function" && (x = x(Ht({}, t), this.props)), x && Ht(t, x), x != null && this.__v && (i && this._sb.push(i), ro(this));
}, xt.prototype.forceUpdate = function(x) {
  this.__v && (this.__e = !(-1511 * -2 + -4716 * -2 + -12454), x && this.__h.push(x), ro(this));
}, xt.prototype.render = ot, t0 = [], bs = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, xo = function(x, i) {
  return x.__v.__b - i.__v.__b;
}, Rx.__r = 8021 * 1 + 1 * 7300 + -15321 * 1, Qo = 1874 * -2 + -1 * -682 + 3066, io = ta(!(3955 + 4 * 2284 + -1190 * 11)), oo = ta(!(1 * 739 + 1 * 3949 + 1 * -4688)), As = 93 * -4 + 917 + 5 * -109;
function tr() {
  return (tr = Object.assign ? Object.assign.bind() : function(x) {
    for (var i = -4 * 977 + -1 * 4510 + 8419; i < arguments.length; i++) {
      var t = arguments[i];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (x[e] = t[e]);
    }
    return x;
  }).apply(this, arguments);
}
var qg = ["context", "children"];
function $g(x) {
  this.getChildContext = function() {
    return x.context;
  };
  var i = x.children, t = function(e, n) {
    if (e == null) return {};
    var o, r, s = {}, a = Object.keys(e);
    for (r = -936 * 5 + -8138 + 493 * 26; r < a.length; r++) n.indexOf(o = a[r]) >= 0 || (s[o] = e[o]);
    return s;
  }(x, qg);
  return er(i, t);
}
function ed() {
  var x = {};
  x.detail = {}, x.bubbles = !(431 * -1 + -1 * -4075 + 911 * -4), x.cancelable = !(9684 + -1 * 586 + -9098);
  var i = new CustomEvent("_preact", x);
  this.dispatchEvent(i), this._vdom = Te($g, tr({}, this._props, { context: i.detail.context }), function t(e, n) {
    if (-4362 + -2951 * -1 + -2 * -707 === e.nodeType) return e.data;
    if (e.nodeType !== 1) return null;
    var o = [], r = {}, s = -5686 + 4963 * 1 + 1 * 723, a = e.attributes, c = e.childNodes;
    for (s = a.length; s--; ) a[s].name !== "slot" && (r[a[s].name] = a[s].value, r[ks(a[s].name)] = a[s].value);
    for (s = c.length; s--; ) {
      var d = t(c[s], null), g = c[s].slot;
      g ? r[g] = Te(na, { name: g }, d) : o[s] = d;
    }
    var C = n ? Te(na, null, o) : o;
    return Te(n || e.nodeName.toLowerCase(), r, C);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? $o : jt)(this._vdom, this._root);
}
function ks(x) {
  return x.replace(/-(\w)/g, function(i, t) {
    return t ? t.toUpperCase() : "";
  });
}
function td(x, i, t) {
  if (this._vdom) {
    var e = {};
    e[x] = t = t ?? void 0, e[ks(x)] = t, this._vdom = er(this._vdom, e), jt(this._vdom, this._root);
  }
}
function nd() {
  jt(this._vdom = null, this._root);
}
function na(x, i) {
  var t = this;
  return Te("slot", tr({}, x, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = i;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function xd(x, i, t, e) {
  function n() {
    var o = Reflect.construct(HTMLElement, [], n);
    return o._vdomComponent = x, o._root = o, o;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = ed, n.prototype.attributeChangedCallback = td, n.prototype.disconnectedCallback = nd, t = t || x.observedAttributes || Object.keys(x.propTypes || {}), n.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(n.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r, this.connectedCallback());
      var s = typeof r;
      r != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(i, n);
}
var id = 643 * -14 + -9103 + 6035 * 3;
function G(x, i, t, e, n, o) {
  i || (i = {});
  var r, s, a = i;
  if ("ref" in a)
    for (s in a = {}, i) s == "ref" ? r = i[s] : a[s] = i[s];
  var c = {};
  c.type = x, c.props = a, c.key = t, c.ref = r, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__d = void (-566 * 4 + 976 + 1288), c.__c = null, c.constructor = void (-1306 * 1 + -1 * 3359 + 3 * 1555), c.__v = --id, c.__i = -(1 * 4951 + -3655 + -1295), c.__u = 0, c.__source = n, c.__self = o;
  var d = c;
  if (typeof x == "function" && (r = x.defaultProps))
    for (s in r) void (134 * -1 + -7197 + 7331) === a[s] && (a[s] = r[s]);
  return M.vnode && M.vnode(d), d;
}
var Me = function() {
  return Me = Object.assign || function(i) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (i[o] = t[o]);
    }
    return i;
  }, Me.apply(this, arguments);
};
function N0(x, i, t) {
  if (t || arguments.length === 2) for (var e = 0, n = i.length, o; e < n; e++)
    (o || !(e in i)) && (o || (o = Array.prototype.slice.call(i, 0, e)), o[e] = i[e]);
  return x.concat(o || Array.prototype.slice.call(i));
}
function od(x) {
  var i = Object.create(null);
  return function(t) {
    return i[t] === void 0 && (i[t] = x(t)), i[t];
  };
}
var rd = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ad = od(function(x) {
  return rd.test(x) || x.charCodeAt(-134 * -2 + -446 + -178 * -1) === -7543 + 1382 * 1 + -1568 * -4 && x.charCodeAt(8766 + 1041 * -2 + -6683) === 87 * 95 + -16 * 523 + 213 && x.charCodeAt(-8678 + -951 * -8 + 1072) < 647 * 1 + -5955 + -5399 * -1;
}), _t, se, Ti, xa, F0 = -402 + 201 * 2, Gs = [], ce = M, ia = ce.__b, oa = ce.__r, ra = ce.diffed, aa = ce.__c, sa = ce.unmount, ca = ce.__;
function J0(x, i) {
  ce.__h && ce.__h(se, x, F0 || i), F0 = -6663 * -1 + 4 * -1511 + -619;
  var t = {};
  t.__ = [], t.__h = [];
  var e = se.__H || (se.__H = t);
  return x >= e.__.length && e.__.push({}), e.__[x];
}
function Xe(x) {
  return F0 = -9124 * -1 + 3 * 1369 + -13230, nr(Hs, x);
}
function nr(x, i, t) {
  var e = J0(_t++, 2);
  if (e.t = x, !e.__c && (e.__ = [t ? t(i) : Hs(void (5584 + -290 * 13 + -1814 * 1), i), function(s) {
    var a = e.__N ? e.__N[0] : e.__[0], c = e.t(a, s);
    a !== c && (e.__N = [c, e.__[4701 + -1 * 7049 + 2349]], e.__c.setState({}));
  }], e.__c = se, !se.u)) {
    var n = function(s, a, c) {
      if (!e.__c.__H) return !0;
      var d = e.__c.__H.__.filter(function(C) {
        return !!C.__c;
      });
      if (d.every(function(C) {
        return !C.__N;
      })) return !o || o.call(this, s, a, c);
      var g = !(-8315 * 1 + 2 * 1667 + 4982);
      return d.forEach(function(C) {
        if (C.__N) {
          var u = C.__[0];
          C.__ = C.__N, C.__N = void 0, u !== C.__[0] && (g = !0);
        }
      }), !(!g && e.__c.props === s) && (!o || o.call(this, s, a, c));
    };
    se.u = !(-1 * 7122 + 6956 + 166);
    var o = se.shouldComponentUpdate, r = se.componentWillUpdate;
    se.componentWillUpdate = function(s, a, c) {
      if (this.__e) {
        var d = o;
        o = void (-2099 * -2 + -517 + -3681), n(s, a, c), o = d;
      }
      r && r.call(this, s, a, c);
    }, se.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function de(x, i) {
  var t = J0(_t++, 3);
  !ce.__s && xr(t.__H, i) && (t.__ = x, t.i = i, se.__H.__h.push(t));
}
function U0(x, i) {
  var t = J0(_t++, 4);
  !ce.__s && xr(t.__H, i) && (t.__ = x, t.i = i, se.__h.push(t));
}
function ut(x) {
  return F0 = 1 * 6490 + 1371 + 982 * -8, Qe(function() {
    var i = {};
    return i.current = x, i;
  }, []);
}
function Os(x, i, t) {
  F0 = 6, U0(function() {
    return typeof x == "function" ? (x(i()), function() {
      return x(null);
    }) : x ? (x.current = i(), function() {
      return x.current = null;
    }) : void (-7027 + 5 * -93 + -4 * -1873);
  }, t == null ? t : t.concat(x));
}
function Qe(x, i) {
  var t = J0(_t++, 7);
  return xr(t.__H, i) && (t.__ = x(), t.__H = i, t.__h = x), t.__;
}
function Kt(x, i) {
  return F0 = 349 + 37 * 95 + -3856, Qe(function() {
    return x;
  }, i);
}
function h0(x) {
  var i = se.context[x.__c], t = J0(_t++, -26 * -175 + -7491 + 2950);
  return t.c = x, i ? (t.__ == null && (t.__ = !(5397 + 1 * -5397), i.sub(se)), i.props.value) : x.__;
}
function Kx(x, i) {
  ce.useDebugValue && ce.useDebugValue(i ? i(x) : x);
}
function Zs() {
  var x = J0(_t++, 11);
  if (!x.__) {
    for (var i = se.__v; i !== null && !i.__m && i.__ !== null; ) i = i.__;
    var t = i.__m || (i.__m = [-3329 + -5669 * 1 + 8998, 10514 + -14 * 751]);
    x.__ = "P" + t[-14 * 307 + 103 * -82 + 4 * 3186] + "-" + t[1]++;
  }
  return x.__;
}
function sd() {
  for (var x; x = Gs.shift(); ) if (x.__P && x.__H) try {
    x.__H.__h.forEach(hx), x.__H.__h.forEach(so), x.__H.__h = [];
  } catch (i) {
    x.__H.__h = [], ce.__e(i, x.__v);
  }
}
ce.__b = function(x) {
  se = null, ia && ia(x);
}, ce.__ = function(x, i) {
  x && i.__k && i.__k.__m && (x.__m = i.__k.__m), ca && ca(x, i);
}, ce.__r = function(x) {
  oa && oa(x), _t = -1945 * 1 + 1 * -2831 + 4776;
  var i = (se = x.__c).__H;
  i && (Ti === se ? (i.__h = [], se.__h = [], i.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (8503 * 1 + 6768 + -1 * 15271);
  })) : (i.__h.forEach(hx), i.__h.forEach(so), i.__h = [], _t = 233 * -22 + -1 * -8821 + -3695)), Ti = se;
}, ce.diffed = function(x) {
  ra && ra(x);
  var i = x.__c;
  i && i.__H && (i.__H.__h.length && (Gs.push(i) !== 1 && xa === ce.requestAnimationFrame || ((xa = ce.requestAnimationFrame) || cd)(sd)), i.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (1321 * 2 + 6086 + -1 * 8728);
  })), Ti = se = null;
}, ce.__c = function(x, i) {
  i.some(function(t) {
    try {
      t.__h.forEach(hx), t.__h = t.__h.filter(function(e) {
        return !e.__ || so(e);
      });
    } catch (e) {
      i.some(function(n) {
        n.__h && (n.__h = []);
      }), i = [], ce.__e(e, t.__v);
    }
  }), aa && aa(x, i);
}, ce.unmount = function(x) {
  sa && sa(x);
  var i, t = x.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      hx(e);
    } catch (n) {
      i = n;
    }
  }), t.__H = void (6287 * 1 + -1 * 9879 + 3592), i && ce.__e(i, t.__v));
};
var ga = typeof requestAnimationFrame == "function";
function cd(x) {
  var i, t = function() {
    clearTimeout(e), ga && cancelAnimationFrame(i), setTimeout(x);
  }, e = setTimeout(t, 100);
  ga && (i = requestAnimationFrame(t));
}
function hx(x) {
  var i = se, t = x.__c;
  typeof t == "function" && (x.__c = void (3904 + -249 * 23 + 1823), t()), se = i;
}
function so(x) {
  var i = se;
  x.__c = x.__(), se = i;
}
function xr(x, i) {
  return !x || x.length !== i.length || i.some(function(t, e) {
    return t !== x[e];
  });
}
function Hs(x, i) {
  return typeof i == "function" ? i(x) : i;
}
function Rs(x, i) {
  for (var t in i) x[t] = i[t];
  return x;
}
function co(x, i) {
  for (var t in x) if (t !== "__source" && !(t in i)) return !0;
  for (var e in i) if (e !== "__source" && x[e] !== i[e]) return !(14131 + 1087 * -13);
  return !(2959 * 1 + -7218 + 4260);
}
function go(x, i) {
  this.props = x, this.context = i;
}
function gd(x, i) {
  function t(n) {
    var o = this.props.ref, r = o == n.ref;
    return !r && o && (o.call ? o(null) : o.current = null), i ? !i(this.props, n) || !r : co(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, Te(x, n);
  }
  return e.displayName = "Memo(" + (x.displayName || x.name) + ")", e.prototype.isReactComponent = !(-207 * 3 + 3217 * -3 + -1712 * -6), e.__f = !(-9146 + 1 * 1403 + 7743), e;
}
(go.prototype = new xt()).isPureReactComponent = !(512 * -2 + 328 + 696), go.prototype.shouldComponentUpdate = function(x, i) {
  return co(this.props, x) || co(this.state, i);
};
var da = M.__b;
M.__b = function(x) {
  x.type && x.type.__f && x.ref && (x.props.ref = x.ref, x.ref = null), da && da(x);
};
var dd = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 4441 * 1 + -6182 + -942 * -6;
function Ks(x) {
  function i(t) {
    var e = Rs({}, t);
    return delete e.ref, x(e, t.ref || null);
  }
  return i.$$typeof = dd, i.render = i, i.prototype.isReactComponent = i.__f = !(6874 * 1 + -2519 * -2 + -5956 * 2), i.displayName = "ForwardRef(" + (x.displayName || x.name) + ")", i;
}
var ua = function(x, i) {
  return x == null ? null : Rt(Rt(x).map(i));
}, ud = { map: ua, forEach: ua, count: function(x) {
  return x ? Rt(x).length : 6208 + 36 * 66 + 8 * -1073;
}, only: function(x) {
  var i = Rt(x);
  if (8593 + 7883 * 1 + -16475 !== i.length) throw "Children.only";
  return i[-6160 + 49 * -7 + 1 * 6503];
}, toArray: Rt }, ld = M.__e;
M.__e = function(x, i, t, e) {
  if (x.then) {
    for (var n, o = i; o = o.__; ) if ((n = o.__c) && n.__c) return i.__e == null && (i.__e = t.__e, i.__k = t.__k), n.__c(x, i);
  }
  ld(x, i, t, e);
};
var la = M.unmount;
function Ps(x, i, t) {
  return x && (x.__c && x.__c.__H && (x.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), x.__c.__H = null), (x = Rs({}, x)).__c != null && (x.__c.__P === t && (x.__c.__P = i), x.__c = null), x.__k = x.__k && x.__k.map(function(e) {
    return Ps(e, i, t);
  })), x;
}
function Ts(x, i, t) {
  return x && t && (x.__v = null, x.__k = x.__k && x.__k.map(function(e) {
    return Ts(e, i, t);
  }), x.__c && x.__c.__P === i && (x.__e && t.appendChild(x.__e), x.__c.__e = !0, x.__c.__P = t)), x;
}
function mx() {
  this.__u = -3063 + -761 * -7 + -2264, this.t = null, this.__b = null;
}
function Vs(x) {
  var i = x.__.__c;
  return i && i.__a && i.__a(x);
}
function Id(x) {
  var i, t, e;
  function n(o) {
    if (i || (i = x()).then(function(r) {
      t = r.default || r;
    }, function(r) {
      e = r;
    }), e) throw e;
    if (!t) throw i;
    return Te(t, o);
  }
  return n.displayName = "Lazy", n.__f = !(-384 * -11 + 1 * 619 + 29 * -167), n;
}
function dn() {
  this.u = null, this.o = null;
}
M.unmount = function(x) {
  var i = x.__c;
  i && i.__R && i.__R(), i && -5084 * -1 + 1 * -8779 + 3727 & x.__u && (x.type = null), la && la(x);
}, (mx.prototype = new xt()).__c = function(x, i) {
  var t = i.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = Vs(e.__v), o = !(2 * 3472 + 1039 * -1 + -5904), r = function() {
    o || (o = !(-2660 + -190 * -14), t.__R = null, n ? n(s) : s());
  };
  t.__R = r;
  var s = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[5565 * -1 + 4008 + -1557 * -1] = Ts(a, a.__c.__P, a.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.t.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || 32 & i.__u || e.setState({ __a: e.__b = e.__v.__k[-317 * 4 + 2237 * -2 + 22 * 261] }), x.then(r, r);
}, mx.prototype.componentWillUnmount = function() {
  this.t = [];
}, mx.prototype.render = function(x, i) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-4 * 917 + -1 * 2873 + 31 * 211].__c;
      this.__v.__k[135 * 41 + -7163 + 2 * 814] = Ps(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = i.__a && Te(ot, null, x.fallback);
  return n && (n.__u &= -(-7988 + -8021 * -1)), [Te(ot, null, i.__a ? null : x.children), n];
};
var Ia = function(x, i, t) {
  if (++t[5 * 1580 + -626 * -2 + 9151 * -1] === t[1 * 6733 + -776 * -3 + -9061] && x.o.delete(i), x.props.revealOrder && (x.props.revealOrder[7947 + -5 * 1558 + -157 * 1] !== "t" || !x.o.size)) for (t = x.u; t; ) {
    for (; t.length > 6382 + -6379 * 1; ) t.pop()();
    if (t[-337 * 2 + -8799 + 9474] < t[-519 + -519 * -1]) break;
    x.u = t = t[14 * 661 + 651 * -11 + -3 * 697];
  }
};
function fd(x) {
  return this.getChildContext = function() {
    return x.context;
  }, x.children;
}
function Cd(x) {
  var i = this, t = x.i;
  i.componentWillUnmount = function() {
    jt(null, i.l), i.l = null, i.i = null;
  }, i.i && i.i !== t && i.componentWillUnmount(), i.l || (i.i = t, i.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(e) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> 88 * -99 + 8725 + 6 * -2, 1988 + -1 * 1901 + 1 * -86), i.i.removeChild(e);
  } }), jt(Te(fd, { context: i.context }, x.__v), i.l);
}
function pd(x, i) {
  var t = {};
  t.__v = x, t.i = i;
  var e = Te(Cd, t);
  return e.containerInfo = i, e;
}
(dn.prototype = new xt()).__a = function(x) {
  var i = this, t = Vs(i.__v), e = i.o.get(x);
  return e[25 * 109 + 8091 + -10816]++, function(n) {
    var o = function() {
      i.props.revealOrder ? (e.push(n), Ia(i, x, e)) : n();
    };
    t ? t(o) : o();
  };
}, dn.prototype.render = function(x) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var i = Rt(x.children);
  x.revealOrder && x.revealOrder[5306 + 780 * 7 + 769 * -14] === "b" && i.reverse();
  for (var t = i.length; t--; ) this.o.set(i[t], this.u = [4348 + 2 * -4001 + 3655, -756 + -6 * -126, this.u]);
  return x.children;
}, dn.prototype.componentDidUpdate = dn.prototype.componentDidMount = function() {
  var x = this;
  this.o.forEach(function(i, t) {
    Ia(x, t, i);
  });
};
var Es = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 48921 * 1 + 4348 + 201 * 34, hd = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, md = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, bd = /[A-Z0-9]/g, Ad = typeof document < "u", yd = function(x) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(x);
};
function vd(x, i, t) {
  return i.__k == null && (i.textContent = ""), jt(x, i), typeof t == "function" && t(), x ? x.__c : null;
}
function Wd(x, i, t) {
  return $o(x, i), typeof t == "function" && t(), x ? x.__c : null;
}
xt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(x) {
  Object.defineProperty(xt.prototype, x, { configurable: !(-8724 + 1873 * 1 + 6851), get: function() {
    return this["UNSAFE_" + x];
  }, set: function(i) {
    var t = {};
    t.configurable = !(1 * -2797 + 7448 + -4651), t.writable = !(-82 * 53 + -1 * 6879 + 11225), t.value = i, Object.defineProperty(this, x, t);
  } });
});
var fa = M.event;
function Sd() {
}
function wd() {
  return this.cancelBubble;
}
function Bd() {
  return this.defaultPrevented;
}
M.event = function(x) {
  return fa && (x = fa(x)), x.persist = Sd, x.isPropagationStopped = wd, x.isDefaultPrevented = Bd, x.nativeEvent = x;
};
var bx = {};
bx.enumerable = !(-2935 + -1 * -2936), bx.configurable = !(1 * -4348 + 395 * -2 + 5138), bx.get = function() {
  return this.class;
};
var ir, kd = bx, Ca = M.vnode;
M.vnode = function(x) {
  typeof x.type == "string" && function(i) {
    var t = i.props, e = i.type, n = {};
    for (var o in t) {
      var r = t[o];
      if (!(o === "value" && "defaultValue" in t && r == null || Ad && o === "children" && e === "noscript" || o === "class" || o === "className")) {
        var s = o.toLowerCase();
        o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && !(-2243 * 4 + 8493 + 479) === r ? r = "" : s === "translate" && r === "no" ? r = !(-9800 * -1 + -1841 * 5 + -297 * 2) : s === "ondoubleclick" ? o = "ondblclick" : s !== "onchange" || e !== "input" && e !== "textarea" || yd(t.type) ? s === "onfocus" ? o = "onfocusin" : s === "onblur" ? o = "onfocusout" : md.test(o) ? o = s : e.indexOf("-") === -1 && hd.test(o) ? o = o.replace(bd, "-$&").toLowerCase() : r === null && (r = void (-4143 * -2 + -5586 + -2700)) : s = o = "oninput", s === "oninput" && n[o = s] && (o = "oninputCapture"), n[o] = r;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Rt(t.children).forEach(function(a) {
      a.props.selected = -(1 * 5881 + 548 + 6428 * -1) != n.value.indexOf(a.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = Rt(t.children).forEach(function(a) {
      a.props.selected = n.multiple ? n.defaultValue.indexOf(a.props.value) != -1 : n.defaultValue == a.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", kd)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), i.props = n;
  }(x), x.$$typeof = Es, Ca && Ca(x);
};
var pa = M.__r;
M.__r = function(x) {
  pa && pa(x), ir = x.__c;
};
var ha = M.diffed;
M.diffed = function(x) {
  ha && ha(x);
  var i = x.props, t = x.__e;
  t != null && x.type === "textarea" && "value" in i && i.value !== t.value && (t.value = i.value == null ? "" : i.value), ir = null;
};
var Se = {};
Se.readContext = function(x) {
  return ir.__n[x.__c].props.value;
}, Se.useCallback = Kt, Se.useContext = h0, Se.useDebugValue = Kx, Se.useDeferredValue = Fs, Se.useEffect = de, Se.useId = Zs, Se.useImperativeHandle = Os, Se.useInsertionEffect = Ms, Se.useLayoutEffect = U0, Se.useMemo = Qe, Se.useReducer = nr, Se.useRef = ut, Se.useState = Xe, Se.useSyncExternalStore = Xs, Se.useTransition = Ys;
var Ls = {};
Ls.current = Se;
var Ds = {};
Ds.ReactCurrentDispatcher = Ls;
var Gd = Ds;
function Od(x) {
  return Te.bind(null, x);
}
function di(x) {
  return !!x && x.$$typeof === Es;
}
function Zd(x) {
  return di(x) && x.type === ot;
}
function Hd(x) {
  return !!x && !!x.displayName && (typeof x.displayName == "string" || x.displayName instanceof String) && x.displayName.startsWith("Memo(");
}
function Rd(x) {
  return di(x) ? er.apply(null, arguments) : x;
}
function Kd(x) {
  return !!x.__k && (jt(null, x), !0);
}
function Pd(x) {
  return x && (x.base || 3 * -2255 + 2 * -1504 + 1 * 9774 === x.nodeType && x) || null;
}
var Td = function(x, i) {
  return x(i);
}, Vd = function(x, i) {
  return x(i);
}, Ed = ot;
function Ns(x) {
  x();
}
function Fs(x) {
  return x;
}
function Ys() {
  return [!(9308 + -1 * 9307), Ns];
}
var Ms = U0, Ld = di;
function Xs(x, i) {
  var t = i(), e = Xe({ h: { __: t, v: i } }), n = e[25 * -63 + -4371 + 5946].h, o = e[-4 * 2492 + 1 * 7122 + 1 * 2847];
  return U0(function() {
    n.__ = t, n.v = i, Vi(n) && o({ h: n });
  }, [x, t, i]), de(function() {
    return Vi(n) && o({ h: n }), x(function() {
      Vi(n) && o({ h: n });
    });
  }, [x]), t;
}
function Vi(x) {
  var i, t, e = x.v, n = x.__;
  try {
    var o = e();
    return !((i = n) === (t = o) && (6795 + -2265 * 3 !== i || (10528 + 87 * -121) / i == (11733 + 7 * -1676) / t) || i != i && t != t);
  } catch {
    return !(1 * -2463 + 4824 + -2361);
  }
}
var F = {};
F.useState = Xe, F.useId = Zs, F.useReducer = nr, F.useEffect = de, F.useLayoutEffect = U0, F.useInsertionEffect = Ms, F.useTransition = Ys, F.useDeferredValue = Fs, F.useSyncExternalStore = Xs, F.startTransition = Ns, F.useRef = ut, F.useImperativeHandle = Os, F.useMemo = Qe, F.useCallback = Kt, F.useContext = h0, F.useDebugValue = Kx, F.version = "17.0.2", F.Children = ud, F.render = vd, F.hydrate = Wd, F.unmountComponentAtNode = Kd, F.createPortal = pd, F.createElement = Te, F.createContext = jn, F.createFactory = Od, F.cloneElement = Rd, F.createRef = _g, F.Fragment = ot, F.isValidElement = di, F.isElement = Ld, F.isFragment = Zd, F.isMemo = Hd, F.findDOMNode = Pd, F.Component = xt, F.PureComponent = go, F.memo = gd, F.forwardRef = Ks, F.flushSync = Vd, F.unstable_batchedUpdates = Td, F.StrictMode = Ed, F.Suspense = mx, F.SuspenseList = dn, F.lazy = Id, F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gd;
var I0 = F, Dd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nd(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Fd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Yd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") && Object.keys(x).length === 1 ? x.default : x;
}
function Md(x) {
  if (x.__esModule) return x;
  var i = x.default;
  if (typeof i == "function") {
    var t = function e() {
      return this instanceof e ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments);
    };
    t.prototype = i.prototype;
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
const Xd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Dd,
  getAugmentedNamespace: Md,
  getDefaultExportFromCjs: Nd,
  getDefaultExportFromNamespaceIfNotNamed: Yd,
  getDefaultExportFromNamespaceIfPresent: Fd
}, Symbol.toStringTag, { value: "Module" }));
var jd = function(i, t, e, n) {
  var o = e ? e.call(n, i, t) : void 0;
  if (o !== void 0) return !!o;
  if (i === t) return !0;
  if (typeof i != "object" || !i || typeof t != "object" || !t) return !1;
  var r = Object.keys(i), s = Object.keys(t);
  if (r.length !== s.length) return !1;
  for (var a = Object.prototype.hasOwnProperty.bind(t), c = 11 * 428 + -7033 + 2325; c < r.length; c++) {
    var d = r[c];
    if (!a(d)) return !1;
    var g = i[d], C = t[d];
    if (o = e ? e.call(n, g, C, d) : void (366 + 3 * -122), o === !1 || o === void (622 * 1 + 1 * -1453 + -831 * -1) && g !== C) return !1;
  }
  return !0;
};
const _d = Xd.getDefaultExportFromCjs(jd);
var ae = "-ms-", mn = "-moz-", ee = "-webkit-", js = "comm", ui = "rule", or = "decl", Jd = "@import", _s = "@keyframes", Ud = "@layer", Js = Math.abs, rr = String.fromCharCode, uo = Object.assign;
function Qd(x, i) {
  return ye(x, -3 * -2033 + 6881 + 59 * -220) ^ 9536 + -10 * -831 + 2543 * -7 ? (((i << -2513 + 4 * -83 + 1 * 2847 ^ ye(x, -1045 * -2 + 984 + -3074)) << -767 * 6 + 9121 + -4517 ^ ye(x, -4949 * -2 + -5340 + -4557)) << 2 ^ ye(x, 1531 * -1 + -8414 + 1 * 9947)) << 425 + 2611 * 3 + 344 * -24 ^ ye(x, -1795 + -87 * 73 + -8149 * -1) : 1 * 1850 + -1076 + -2 * 387;
}
function Us(x) {
  return x.trim();
}
function Gt(x, i) {
  return (x = i.exec(x)) ? x[-4329 + -6191 * 1 + 20 * 526] : x;
}
function X(x, i, t) {
  return x.replace(i, t);
}
function Ax(x, i, t) {
  return x.indexOf(i, t);
}
function ye(x, i) {
  return x.charCodeAt(i) | -12172 + -1 * -12172;
}
function Y0(x, i, t) {
  return x.slice(i, t);
}
function mt(x) {
  return x.length;
}
function Qs(x) {
  return x.length;
}
function un(x, i) {
  return i.push(x), x;
}
function zd(x, i) {
  return x.map(i).join("");
}
function ma(x, i) {
  return x.filter(function(t) {
    return !Gt(t, i);
  });
}
var li = -353 * -11 + 2174 * 1 + -1514 * 4, M0 = 132 * 58 + 79 * 61 + 63 * -198, zs = 6779 * -1 + -60 * -139 + -1561, rt = 0, pe = -587 * -11 + -3 * 977 + -3526, Q0 = "";
function Ii(x, i, t, e, n, o, r, s) {
  var a = {};
  return a.value = x, a.root = i, a.parent = t, a.type = e, a.props = n, a.children = o, a.line = li, a.column = M0, a.length = r, a.return = "", a.siblings = s, a;
}
function Dt(x, i) {
  return uo(Ii("", null, null, "", null, null, -158 * 1 + 56 * -124 + 7102, x.siblings), x, { length: -x.length }, i);
}
function O0(x) {
  for (; x.root; ) x = Dt(x.root, { children: [x] });
  un(x, x.siblings);
}
function qd() {
  return pe;
}
function $d() {
  return pe = rt > 2384 * -3 + -5887 + 17 * 767 ? ye(Q0, --rt) : 5851 + -8 * -1181 + -1 * 15299, M0--, pe === -1 * -521 + 9500 + -10011 && (M0 = -43 * -57 + 6673 + -9123, li--), pe;
}
function dt() {
  return pe = rt < zs ? ye(Q0, rt++) : 1 * -235 + 1023 * -9 + -1 * -9442, M0++, pe === 10 && (M0 = -6437 + -174 * -37, li++), pe;
}
function d0() {
  return ye(Q0, rt);
}
function yx() {
  return rt;
}
function fi(x, i) {
  return Y0(Q0, x, i);
}
function lo(x) {
  switch (x) {
    case -2 * -773 + 86 * 74 + -3955 * 2:
    case 1155 + -2652 * -2 + -6450:
    case 943 * 5 + 106 + 4811 * -1:
    case 1654 * -4 + -1 * 2106 + 1 * 8735:
    case -4175 + -4019 * -1 + 188:
      return -14969 + 7487 * 2;
    case -129 * 37 + -545 * 1 + -5351 * -1:
    case 1 * 6086 + 10 * 28 + -1 * 6323:
    case 1275 * -1 + -4933 + -3126 * -2:
    case -547 * 18 + -5291 + 146 * 104:
    case 62:
    case -1 * 1385 + -7759 + 1151 * 8:
    case -9777 + 23 * 136 + 6775:
    case 1 * 6e3 + -1 * -2347 + -8288:
    case 123:
    case 9526 + 1 * -9401:
      return 391 * 19 + 1 * -2469 + -4956;
    case 3063 * -1 + 8574 + -5453:
      return -7 * -565 + -5500 + 129 * 12;
    case 34:
    case -349 + 147 * 49 + -1363 * 5:
    case 3005 * 1 + -1 * -1593 + -4558:
    case -1 * -1137 + 3 * -452 + 310:
      return 2129 + 2 * -2833 + 3539 * 1;
    case -86 * 59 + 7815 + -2700:
    case 4137 + -9362 * -1 + 2 * -6703:
      return 2145 * 2 + -22 * 250 + 1211;
  }
  return -4041 + 1 * 8983 + -4942;
}
function eu(x) {
  return li = M0 = 41 * -181 + 997 + 1285 * 5, zs = mt(Q0 = x), rt = 6384 + 6129 * -1 + -255, [];
}
function tu(x) {
  return Q0 = "", x;
}
function Ei(x) {
  return Us(fi(rt - (1 * -1831 + 1 * -2561 + 1 * 4393), Io(x === -1 * 7672 + -4555 + 6 * 2053 ? x + (6546 + -417 * -20 + 244 * -61) : x === 1 * -2846 + 5630 + -392 * 7 ? x + 1 : x)));
}
function nu(x) {
  for (; (pe = d0()) && pe < 5682 + 21 * -269; ) dt();
  return lo(x) > 4446 * 1 + -2314 * 2 + 184 || lo(pe) > -4 * -229 + 1153 * -5 + 2 * 2426 ? "" : " ";
}
function xu(x, i) {
  for (; --i && dt() && !(pe < 3026 + 874 * 3 + -5600 || pe > 3678 + -894 * 4 || pe > 64 * -67 + 1 * 4181 + -2 * -82 && pe < -2166 + 1 * 2017 + 214 * 1 || pe > 302 * -14 + 2 * -2911 + 10120 && pe < 5209 + 36 * 129 + 542 * -18); ) ;
  return fi(x, yx() + (i < -2569 * -1 + 10 * -219 + 1 * -373 && d0() == -6179 * -1 + -6567 + -140 * -3 && dt() == -1 * 7274 + -1 * -4639 + 2667));
}
function Io(x) {
  for (; dt(); ) switch (pe) {
    case x:
      return rt;
    case 211 + 59 * -3:
    case 13959 + -4640 * 3:
      x !== -6073 * -1 + 9325 + 7682 * -2 && x !== -2154 + -3 * -731 && Io(pe);
      break;
    case -1 * -4958 + 5111 + -10029:
      x === 13 * 29 + 6 * -1223 + 778 * 9 && Io(x);
      break;
    case 7677 + 3 * -1559 + -2908:
      dt();
      break;
  }
  return rt;
}
function iu(x, i) {
  for (; dt() && x + pe !== 47 + (2 * 773 + 6487 + -8023); ) if (x + pe === -4634 + -167 * -28 + 42 && d0() === 4139 * -1 + -3779 * 1 + 135 * 59) break;
  return "/*" + fi(i, rt - 1) + "*" + rr(x === 3578 + -2393 * 1 + -1138 ? x : dt());
}
function ou(x) {
  for (; !lo(d0()); ) dt();
  return fi(x, rt);
}
function ru(x) {
  return tu(vx("", null, null, null, [""], x = eu(x), 6530 * -1 + 3093 * -1 + 9623, [-3641 + -180 * 12 + 1 * 5801], x));
}
function vx(x, i, t, e, n, o, r, s, a) {
  for (var c = 0, d = 0, g = r, C = 0, u = -1 * -3966 + 5410 + -9376, p = 74 * -2 + -627 * -1 + 479 * -1, m = 1 * 1073 + -914 * 1 + 79 * -2, A = 1 * -4308 + 1199 * 2 + 1911, l = 1, W = -61 * 133 + 2357 * -3 + 15184, O = "", D = n, Y = o, _ = e, H = O; A; ) switch (p = W, W = dt()) {
    case -9719 * -1 + -2844 + -6835 * 1:
      if (p != -4138 + 54 * 58 + -2 * -557 && ye(H, g - (4494 + 3 * -3101 + 4810)) == -6437 + -7 * 721 + 11542) {
        Ax(H += X(Ei(W), "&", "&\f"), "&\f", Js(c ? s[c - (-6115 + -2 * -1627 + 2862)] : 0)) != -(-1 * -2425 + 1442 * 2 + 5308 * -1) && (l = -(273 * -31 + 2937 + 5527 * 1));
        break;
      }
    case 1713 + 1 * -4790 + 3111:
    case -1019 * 9 + -457 * -1 + 1 * 8753:
    case -5415 + -2753 * -2:
      H += Ei(W);
      break;
    case -273 + -701 * -13 + -1 * 8831:
    case -1 * 7618 + 229 * 18 + 3506:
    case 3 * 1076 + -2 * 521 + -2173:
    case -5 * -61 + 2331 + 4 * -651:
      H += nu(p);
      break;
    case 2341 * -3 + 10 * -100 + -2705 * -3:
      H += xu(yx() - (-415 * -2 + -8407 + 2526 * 3), -1 * -4827 + -5193 + 373 * 1);
      continue;
    case -289 * -14 + -65 * -19 + -5234:
      switch (d0()) {
        case -8207 * 1 + -6608 + 1 * 14857:
        case 338 * 10 + -4325 + -31 * -32:
          un(au(iu(dt(), yx()), i, t, a), a);
          break;
        default:
          H += "/";
      }
      break;
    case (3 * -3271 + 1676 * 4 + -1616 * -2) * m:
      s[c++] = mt(H) * l;
    case (-7993 + 18 * 451) * m:
    case -191 * -23 + -19 * 479 + -1589 * -3:
    case -2 * 2373 + 6457 + 1 * -1711:
      switch (W) {
        case 2078 * -1 + -10 * 663 + 28 * 311:
        case 2371 + -3 * 1753 + 1 * 3013:
          A = 5 * -477 + -5870 + 635 * 13;
        case -6304 * -1 + -9399 + -83 * -38 + d:
          l == -(-5577 + -1 * -5578) && (H = X(H, /\f/g, "")), u > -7789 + 1 * 5083 + 22 * 123 && mt(H) - g && un(u > -1 * 9767 + -1 * -9219 + 580 ? Aa(H + ";", e, t, g - (3247 * -1 + 2 * -368 + 3984), a) : Aa(X(H, " ", "") + ";", e, t, g - (-199 * -31 + 3 * 1745 + 1 * -11402), a), a);
          break;
        case 59:
          H += ";";
        default:
          if (un(_ = ba(H, i, t, c, d, n, s, O, D = [], Y = [], g, o), o), W === 2003 * -1 + 8600 + -6474)
            if (d === -467 * 4 + 1141 * 7 + -6119) vx(H, i, _, _, D, o, g, s, Y);
            else switch (C === -13278 + -343 * -39 && ye(H, -1 * 8337 + 1292 * 6 + 588) === -4446 + 943 * -10 + 13986 ? 2590 + -7 * 1418 + 2 * 3718 : C) {
              case 2970 + -2870 * 1:
              case 2997 + -5691 * 1 + -467 * -6:
              case 2062 + -1441 * -3 + -6276:
              case -7716 * 1 + -199 + 803 * 10:
                vx(x, _, _, e && un(ba(x, _, _, 5863 + -1 * -1698 + 1 * -7561, -4 * 378 + 4293 + -1 * 2781, n, s, O, n, D = [], g, Y), Y), n, Y, g, s, e ? D : Y);
                break;
              default:
                vx(H, _, _, _, [""], Y, 213 * -25 + -16 * -379 + -1 * 739, s, Y);
            }
      }
      c = d = u = -93 + -93 * -1, m = l = -713 + 8005 * 1 + -7291, O = H = "", g = r;
      break;
    case 135 + 7 * -11:
      g = -17771 + -2962 * -6 + mt(H), u = p;
    default:
      if (m < 1 * 3877 + 8575 + -12451 * 1) {
        if (W == -59 * 123 + 9652 + 1 * -2272) --m;
        else if (W == 13153 + 13028 * -1 && m++ == 7220 + -147 * 61 + 1747 && $d() == -2269 + 1806 * 1 + 98 * 6) continue;
      }
      switch (H += rr(W), W * m) {
        case 89 * -87 + 1527 * -3 + -883 * -14:
          l = d > 2167 * -3 + 319 * -25 + 14476 ? -4 * 1507 + 3273 * -2 + 12575 : (H += "\f", -1);
          break;
        case 44:
          s[c++] = (mt(H) - 1) * l, l = 335 * -1 + 100 * -83 + -127 * -68;
          break;
        case -2378 + -2442 * -1:
          d0() === 1037 + -845 * -1 + -1837 && (H += Ei(dt())), C = d0(), d = g = mt(O = H += ou(yx())), W++;
          break;
        case 45:
          p === -6685 + 4 * 235 + 10 * 579 && mt(H) == 2 && (m = -8809 + 9223 * 1 + -414);
      }
  }
  return o;
}
function ba(x, i, t, e, n, o, r, s, a, c, d, g) {
  for (var C = n - 1, u = n === -14226 + -1 * -14226 ? o : [""], p = Qs(u), m = -12 + 8839 * -1 + 53 * 167, A = 8133 + -1 * -2662 + -10795 * 1, l = 2009 + 7 * -1407 + 7840; m < e; ++m) for (var W = 2 * -1549 + 3 * -2289 + 1 * 9965, O = Y0(x, C + 1, C = Js(A = r[m])), D = x; W < p; ++W) (D = Us(A > -2 * 2189 + 1906 * -3 + 10096 ? u[W] + " " + O : X(O, /&\f/g, u[W]))) && (a[l++] = D);
  return Ii(x, i, t, n === 1 * -4141 + -5930 + 1 * 10071 ? ui : s, a, c, d, g);
}
function au(x, i, t, e) {
  return Ii(x, i, t, js, rr(qd()), Y0(x, -1 * 3499 + 3 * -639 + -129 * -42, -(9713 + 1028 * -8 + 1487 * -1)), 3062 + -1531 * 2, e);
}
function Aa(x, i, t, e, n) {
  return Ii(x, i, t, or, Y0(x, 2 * 1277 + -8909 + 205 * 31, e), Y0(x, e + (1180 * -2 + -2523 + -1221 * -4), -(-2596 * -1 + -661 * 8 + 2693)), e, n);
}
function qs(x, i, t) {
  switch (Qd(x, i)) {
    case 4 * 1751 + -24 * -41 + -2885:
      return ee + "print-" + x + x;
    case -8369 + -666 * 4 + -1677 * -10:
    case 1 * -4259 + 5147 * 1 + -1 * -3313:
    case -19 * 311 + 1 * -5219 + 14305:
    case 2166 + -23 * -73 + -412:
    case -4790 + 1508 * -4 + 12463:
    case 4457:
    case -5763 + -78 * -116 + 14 * -26:
    case -2118 * -2 + -537 * 17 + 10465:
    case -1 * 9181 + 7 * 1647 + 4008:
    case 3107 + -23 * -119:
    case -8284 + 153 * 75:
    case 9468 + -1 * 2823:
    case -10750 + -917 * -15:
    case 6391:
    case 9318 * -1 + 3241 + 11956:
    case -39 * 35 + -2 * -3062 + 864:
    case -9367 + -46 * -337:
    case -3485 + -4042 * -2:
    case 1 * 2049 + -718 * -1 + 2088:
    case -10648 + -14863 * -1:
    case 70 * 23 + -491 + 5270:
    case 5161 + -1902 * -5 + 1366 * -7:
    case 5642 + -4 * -1534 + -6413:
    case 6497 + -7 * -1132 + -8800:
    case -4197 * -2 + -3203 + -1362:
      return ee + x + x;
    case 4789:
      return mn + x + x;
    case 5349:
    case 255 * 25 + 1 * -9194 + 7065:
    case 4548 + 2 * 131:
    case -2 * 5788 + -6289 * 2 + -741 * -42:
    case 2756:
      return ee + x + mn + x + ae + x + x;
    case 5936:
      switch (ye(x, i + 11)) {
        case -6184 + -453 * -10 + 104 * 17:
          return ee + x + ae + X(x, /[svh]\w+-[tblr]{2}/, "tb") + x;
        case -13 * -607 + -463 * 4 + 659 * -9:
          return ee + x + ae + X(x, /[svh]\w+-[tblr]{2}/, "tb-rl") + x;
        case -8 * 97 + -5901 + 2 * 3361:
          return ee + x + ae + X(x, /[svh]\w+-[tblr]{2}/, "lr") + x;
      }
    case -4229 + -23 * -290 + -41 * -107:
    case 2118 + -215 * -10:
    case 67 * 61 + 7355 + -8539 * 1:
      return ee + x + ae + x + x;
    case 7 * 103 + 6 * 692 + 1292:
      return ee + x + ae + "flex-" + x + x;
    case -20 * 44 + -9932 + 15999:
      return ee + x + X(x, /(\w+).+(:[^]+)/, ee + "box-$1$2" + ae + "flex-$1$2") + x;
    case 727 * -2 + 1289 * 3 + 3030:
      return ee + x + ae + "flex-item-" + X(x, /flex-|-self/g, "") + (Gt(x, /flex-|baseline/) ? "" : ae + "grid-row-" + X(x, /flex-|-self/g, "")) + x;
    case 1 * 219 + -7644 + 12100:
      return ee + x + ae + "flex-line-pack" + X(x, /align-content|flex-|-self/g, "") + x;
    case -129 * -17 + -8115 + 5735 * 2:
      return ee + x + ae + X(x, "shrink", "negative") + x;
    case -959 * -9 + -8728 + 5389:
      return ee + x + ae + X(x, "basis", "preferred-size") + x;
    case -4157 * 1 + -9355 + -2 * -9786:
      return ee + "box-" + X(x, "-grow", "") + ee + x + ae + X(x, "grow", "positive") + x;
    case 103 * 97 + -8581 * -1 + -14018:
      return ee + X(x, /([^-])(transform)/g, "$1" + ee + "$2") + x;
    case -62 * -16 + -7703 * 1 + 12898 * 1:
      return X(X(X(x, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), x, "") + x;
    case 10398 + -2649 * -1 + -7552:
    case -1 * 3113 + -4546 + 11618:
      return X(x, /(image-set\([^]*)/, ee + "$1$`$1");
    case 7642 * -1 + 116 + 12494:
      return X(X(x, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + ae + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + x + x;
    case 815 + 1 * 3385:
      if (!Gt(x, /flex-|baseline/)) return ae + "grid-column-align" + Y0(x, i) + x;
      break;
    case -1 * -1787 + 25 * 61 + -720 * 1:
    case 4074 + 1 * -3885 + 3171:
      return ae + X(x, "template-", "") + x;
    case -2 * 3124 + 2361 + -2757 * -3:
    case 3230 * 1 + 5817 + -5431:
      return t && t.some(function(e, n) {
        return i = n, Gt(e.props, /grid-\w+-end/);
      }) ? ~Ax(x + (t = t[i].value), "span", 0) ? x : ae + X(x, "-start", "") + x + ae + "grid-row-span:" + (~Ax(t, "span", 3 * 238 + 1 * 323 + -1037) ? Gt(t, /\d+/) : +Gt(t, /\d+/) - +Gt(x, /\d+/)) + ";" : ae + X(x, "-start", "") + x;
    case 2615 + -2281 * -1:
    case 2417 * 3 + -1594 + -11 * 139:
      return t && t.some(function(e) {
        return Gt(e.props, /grid-\w+-start/);
      }) ? x : ae + X(X(x, "-end", "-span"), "span ", "") + x;
    case 1 * -7786 + -253 * -29 + -71 * -64:
    case 3331 * -1 + -3 * 2633 + 1 * 14813:
    case -3793 + -293 * 26 + 23 * 673:
    case 3263 + 65 * 10 + -1381:
      return X(x, /(.+)-inline(.+)/, ee + "$1$2") + x;
    case -23 * 283 + 6 * -1860 + 25785:
    case -1079 * -9 + -8 * 1009 + -1084 * -5:
    case 7 * -863 + 7297 + 4497:
    case 106 * -1 + -7854 + -1 * -13495:
    case -1 * -10623 + -5715 + 179 * 3:
    case 5701:
    case -2 * 2069 + 1 * -9155 + 18226:
    case -5931 * -1 + 76 * -69 + -5 * -798:
    case 5533:
    case 5789:
    case 2 * -1277 + 787 * -4 + 10723:
    case 8025 + 1 * 3716 + 2 * -3488:
      if (mt(x) - (16728 + -16727 * 1) - i > 1 * 1466 + -2260 + 800) switch (ye(x, i + (-253 * -32 + 225 * 17 + 10 * -1192))) {
        case 109:
          if (ye(x, i + (10057 + 1117 * -9)) !== 6004 * -1 + 1 * -8401 + 425 * 34) break;
        case -2517 * -1 + 1236 + -3651:
          return X(x, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + mn + (ye(x, i + (14 * -3 + -2010 + 2055)) == -1877 * 3 + -1065 + 6804 ? "$3" : "$2-$3")) + x;
        case 37 + -1 * -8446 + -8368:
          return ~Ax(x, "stretch", 8488 + 8 * -1061) ? qs(X(x, "stretch", "fill-available"), i, t) + x : x;
      }
      break;
    case -7793 + 2589 * 5:
    case 3290 * -1 + 3893 + -1 * -5317:
      return X(x, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, o, r, s, a, c) {
        return ae + n + ":" + o + c + (r ? ae + n + "-span:" + (s ? a : +a - +o) + c : "") + x;
      });
    case 4469 + 767 * -1 + 43 * 29:
      if (ye(x, i + (-4982 * 2 + 1 * -3793 + -13763 * -1)) === -9502 + -1 * 3317 + -4 * -3235) return X(x, ":", ":" + ee) + x;
      break;
    case 10329 + 8239 * -1 + 311 * 14:
      switch (ye(x, ye(x, -2363 + 2377 * 1) === 9982 * 1 + 7023 + -16960 ? -4568 + 128 * -64 + 12778 : 3384 + -1 * 3373)) {
        case 4525 + -881 * 5:
          return X(x, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (ye(x, 1242 + -113 * 31 + -13 * -175) === 45 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + ae + "$2box$3") + x;
        case -3 * 3085 + 20 * 283 + -739 * -5:
          return X(x, ":", ":" + ae) + x;
      }
      break;
    case 111 * -2 + 1524 + 4417:
    case -1371 * 6 + 7004 + 3869:
    case 1 * 3347 + 9945 + -1 * 11157:
    case 33 * 115 + 161 * 1 + -29 * 1:
    case 5621 + -646 * 5:
      return X(x, "scroll-", "scroll-snap-") + x;
  }
  return x;
}
function Px(x, i) {
  for (var t = "", e = 3503 + 194 * 42 + -11651; e < x.length; e++) t += i(x[e], e, x, i) || "";
  return t;
}
function su(x, i, t, e) {
  switch (x.type) {
    case Ud:
      if (x.children.length) break;
    case Jd:
    case or:
      return x.return = x.return || x.value;
    case js:
      return "";
    case _s:
      return x.return = x.value + "{" + Px(x.children, e) + "}";
    case ui:
      if (!mt(x.value = x.props.join(","))) return "";
  }
  return mt(t = Px(x.children, e)) ? x.return = x.value + "{" + t + "}" : "";
}
function cu(x) {
  var i = Qs(x);
  return function(t, e, n, o) {
    for (var r = "", s = 1144 * 8 + -2 * 1293 + -3283 * 2; s < i; s++) r += x[s](t, e, n, o) || "";
    return r;
  };
}
function gu(x) {
  return function(i) {
    i.root || (i = i.return) && x(i);
  };
}
function du(x, i, t, e) {
  if (x.length > -1 && !x.return)
    switch (x.type) {
      case or:
        x.return = qs(x.value, x.length, t);
        return;
      case _s:
        return Px([Dt(x, { value: X(x.value, "@", "@" + ee) })], e);
      case ui:
        if (x.length) return zd(t = x.props, function(n) {
          switch (Gt(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              O0(Dt(x, { props: [X(n, /:(read-\w+)/, ":" + mn + "$1")] }));
              var o = {};
              o.props = [n], O0(Dt(x, o)), uo(x, { props: ma(t, e) });
              break;
            case "::placeholder":
              O0(Dt(x, { props: [X(n, /:(plac\w+)/, ":" + ee + "input-$1")] })), O0(Dt(x, { props: [X(n, /:(plac\w+)/, ":" + mn + "$1")] })), O0(Dt(x, { props: [X(n, /:(plac\w+)/, ae + "input-$1")] }));
              var r = {};
              r.props = [n], O0(Dt(x, r)), uo(x, { props: ma(t, e) });
              break;
          }
          return "";
        });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var uu = N, z = {}, f0 = typeof process < "u" && z !== void 0 && (z.REACT_APP_SC_ATTR || z.SC_ATTR) || "data-styled", $s = "active", ec = "data-styled-version", Ci = "6.1.11", ar = `/*!sc*/
`, sr = typeof window < "u" && "HTMLElement" in window, lu = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && z !== void 0 && void (-8677 + -10 * 281 + 11487) !== z.REACT_APP_SC_DISABLE_SPEEDY && z.REACT_APP_SC_DISABLE_SPEEDY !== "" ? z.REACT_APP_SC_DISABLE_SPEEDY !== "false" && z.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-5779 + -1 * 8859 + 14638) !== z && void (-2 * -233 + 8995 * -1 + 2843 * 3) !== z.SC_DISABLE_SPEEDY && z.SC_DISABLE_SPEEDY !== "" ? z.SC_DISABLE_SPEEDY !== "false" && z.SC_DISABLE_SPEEDY : z.NODE_ENV !== "production"), ya = /invalid hook call/i, cx = /* @__PURE__ */ new Set(), Iu = function(x, i) {
  if (z.NODE_ENV !== "production") {
    var t = i ? ' with the id of "'.concat(i, '"') : "", e = "The component ".concat(x).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var s = [], a = 1; a < arguments.length; a++) s[a - (1949 + 1015 * -9 + 7187)] = arguments[a];
        ya.test(r) ? (o = !1, cx.delete(e)) : n.apply(void (3605 * -2 + -6706 + 13916), N0([r], s, !1));
      }, ut(), o && !cx.has(e) && (console.warn(e), cx.add(e));
    } catch (r) {
      ya.test(r.message) && cx.delete(e);
    } finally {
      console.error = n;
    }
  }
}, pi = Object.freeze([]), X0 = Object.freeze({});
function fu(x, i, t) {
  return void (1079 * 5 + -3662 + 1 * -1733) === t && (t = X0), x.theme !== t.theme && x.theme || i || t.theme;
}
var fo = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Cu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, pu = /(^-|-$)/g;
function va(x) {
  return x.replace(Cu, "-").replace(pu, "");
}
var hu = /(a)(d)/gi, gx = 52, Wa = function(x) {
  return String.fromCharCode(x + (x > -9575 + 150 * 64 ? 39 : -2 * 1768 + 1858 + 1775));
};
function Co(x) {
  var i, t = "";
  for (i = Math.abs(x); i > gx; i = i / gx | 1 * -8026 + -4607 + 3 * 4211) t = Wa(i % gx) + t;
  return (Wa(i % gx) + t).replace(hu, "$1-$2");
}
var Li, tc = 5381, n0 = function(x, i) {
  for (var t = i.length; t; ) x = (-6235 * -1 + 29 * 43 + -7449) * x ^ i.charCodeAt(--t);
  return x;
}, nc = function(x) {
  return n0(tc, x);
};
function mu(x) {
  return Co(nc(x) >>> 1 * -3656 + 1271 + 2385);
}
function xc(x) {
  return z.NODE_ENV !== "production" && typeof x == "string" && x || x.displayName || x.name || "Component";
}
function Di(x) {
  return typeof x == "string" && (z.NODE_ENV === "production" || x.charAt(-1 * 1509 + 13 * 293 + -2300) === x.charAt(4014 + -669 * 6).toLowerCase());
}
var tt = {};
tt.childContextTypes = !0, tt.contextType = !0, tt.contextTypes = !0, tt.defaultProps = !0, tt.displayName = !0, tt.getDefaultProps = !0, tt.getDerivedStateFromError = !0, tt.getDerivedStateFromProps = !0, tt.mixins = !0, tt.propTypes = !0, tt.type = !0;
var Nt = {};
Nt.name = !0, Nt.length = !0, Nt.prototype = !0, Nt.caller = !0, Nt.callee = !0, Nt.arguments = !0, Nt.arity = !0;
var e0 = {};
e0.$$typeof = !0, e0.compare = !0, e0.defaultProps = !0, e0.displayName = !0, e0.propTypes = !0, e0.type = !0;
var K0 = {};
K0.$$typeof = !0, K0.render = !0, K0.defaultProps = !0, K0.displayName = !0, K0.propTypes = !0;
var ic = typeof Symbol == "function" && Symbol.for, oc = ic ? Symbol.for("react.memo") : 42342 * 2 + -38103 + 101 * 134, bu = ic ? Symbol.for("react.forward_ref") : 4763 * 5 + -7 * -4229 + 6694 * 1, Au = tt, yu = Nt, rc = e0, vu = ((Li = {})[bu] = K0, Li[oc] = rc, Li);
function Sa(x) {
  return ("type" in (i = x) && i.type.$$typeof) === oc ? rc : "$$typeof" in x ? vu[x.$$typeof] : Au;
  var i;
}
var Wu = Object.defineProperty, Su = Object.getOwnPropertyNames, wa = Object.getOwnPropertySymbols, wu = Object.getOwnPropertyDescriptor, Bu = Object.getPrototypeOf, Ba = Object.prototype;
function ac(x, i, t) {
  if (typeof i != "string") {
    if (Ba) {
      var e = Bu(i);
      e && e !== Ba && ac(x, e, t);
    }
    var n = Su(i);
    wa && (n = n.concat(wa(i)));
    for (var o = Sa(x), r = Sa(i), s = -5 * 199 + 6453 * -1 + 392 * 19; s < n.length; ++s) {
      var a = n[s];
      if (!(a in yu || t && t[a] || r && a in r || o && a in o)) {
        var c = wu(i, a);
        try {
          Wu(x, a, c);
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
function cr(x) {
  return typeof x == "object" && "styledComponentId" in x;
}
function i0(x, i) {
  return x && i ? "".concat(x, " ").concat(i) : x || i || "";
}
function ka(x, i) {
  if (x.length === 0) return "";
  for (var t = x[-1 * -3964 + 1 * 5953 + -9917 * 1], e = -11 * 359 + -4059 * 1 + 8009; e < x.length; e++) t += x[e];
  return t;
}
function _0(x) {
  return x !== null && typeof x == "object" && x.constructor.name === Object.name && !("props" in x && x.$$typeof);
}
function po(x, i, t) {
  if (void (1319 + -2 * -1822 + -4963 * 1) === t && (t = !1), !t && !_0(x) && !Array.isArray(x)) return i;
  if (Array.isArray(i))
    for (var e = -4094 + -2 * -3287 + -40 * 62; e < i.length; e++) x[e] = po(x[e], i[e]);
  else if (_0(i))
    for (var e in i) x[e] = po(x[e], i[e]);
  return x;
}
function gr(x, i) {
  var t = {};
  t.value = i, Object.defineProperty(x, "toString", t);
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
var ku = z.NODE_ENV !== "production" ? me : {};
function Gu() {
  for (var x = [], i = 7948 + 3757 * 1 + -11705; i < arguments.length; i++) x[i] = arguments[i];
  for (var t = x[6343 + 357 * -11 + -2416], e = [], n = -12961 + 6481 * 2, o = x.length; n < o; n += 1 * 961 + -7055 + 6095) e.push(x[n]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function z0(x) {
  for (var i = [], t = 7277 + 4877 * -2 + -59 * -42; t < arguments.length; t++) i[t - (1 * 2363 + 37 * 139 + -1501 * 5)] = arguments[t];
  return z.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(x, " for more information.").concat(i.length > 28 * -137 + -2730 + 6566 ? " Args: ".concat(i.join(", ")) : "")) : new Error(Gu.apply(void (-5861 + 3187 * -3 + 15422), N0([ku[x]], i, !1)).trim());
}
var Ou = function() {
  function x(i) {
    this.groupSizes = new Uint32Array(5904 + 337 * -16), this.length = 512, this.tag = i;
  }
  return x.prototype.indexOfGroup = function(i) {
    for (var t = 1 * 5457 + 73 * 27 + 7428 * -1, e = -2 * -2344 + 2 * 2787 + 1 * -10262; e < i; e++) t += this.groupSizes[e];
    return t;
  }, x.prototype.insertRules = function(i, t) {
    if (i >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, o = n; i >= o; ) if ((o <<= -4679 + -3293 * 3 + 14559) < -4432 + 4759 * -1 + 9191) throw z0(-2549 + 9 * 596 + -3 * 933, "".concat(i));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = n; r < o; r++) this.groupSizes[r] = -5055 + 2 * 4961 + 157 * -31;
    }
    for (var s = this.indexOfGroup(i + (-4986 + 1 * -2987 + 7974)), a = (r = -1556 + 389 * 4, t.length); r < a; r++) this.tag.insertRule(s, t[r]) && (this.groupSizes[i]++, s++);
  }, x.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var t = this.groupSizes[i], e = this.indexOfGroup(i), n = e + t;
      this.groupSizes[i] = 0;
      for (var o = e; o < n; o++) this.tag.deleteRule(e);
    }
  }, x.prototype.getGroup = function(i) {
    var t = "";
    if (i >= this.length || -1228 * 5 + -1 * 4117 + 10257 === this.groupSizes[i]) return t;
    for (var e = this.groupSizes[i], n = this.indexOfGroup(i), o = n + e, r = n; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(ar);
    return t;
  }, x;
}(), Zu = 396 * 15 + -9043 + 3104 << -8423 + 107 * 79, Wx = /* @__PURE__ */ new Map(), Tx = /* @__PURE__ */ new Map(), Sx = 1259 + -1 * -4259 + -5517, dx = function(x) {
  if (Wx.has(x)) return Wx.get(x);
  for (; Tx.has(Sx); ) Sx++;
  var i = Sx++;
  if (z.NODE_ENV !== "production" && ((-1333 * 3 + -4556 + 8555 | i) < -12181 + -12181 * -1 || i > Zu)) throw z0(-4 * 499 + -7165 * -1 + 5153 * -1, "".concat(i));
  return Wx.set(x, i), Tx.set(i, x), i;
}, Hu = function(x, i) {
  Sx = i + (4641 + -2 * 3189 + -11 * -158), Wx.set(x, i), Tx.set(i, x);
}, Ru = "style[".concat(f0, "][").concat(ec, '="').concat(Ci, '"]'), Ku = new RegExp("^".concat(f0, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Pu = function(x, i, t) {
  for (var e, n = t.split(","), o = -1070 * -7 + 5372 + 12862 * -1, r = n.length; o < r; o++) (e = n[o]) && x.registerName(i, e);
}, Tu = function(x, i) {
  for (var t, e = ((t = i.textContent) !== null && void (-7 * -436 + -6165 + 3113) !== t ? t : "").split(ar), n = [], o = 0, r = e.length; o < r; o++) {
    var s = e[o].trim();
    if (s) {
      var a = s.match(Ku);
      if (a) {
        var c = 0 | parseInt(a[1], 10), d = a[-56 * -7 + 58 * -2 + -1 * 274];
        3015 * 3 + -101 * 11 + 3967 * -2 !== c && (Hu(d, c), Pu(x, d, a[1021 * 5 + -5932 + 2 * 415]), x.getTag().insertRules(c, n)), n.length = 5071 + 5071 * -1;
      } else n.push(s);
    }
  }
};
function Vu() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var sc = function(x) {
  var i = document.head, t = x || i, e = document.createElement("style"), n = function(s) {
    var a = Array.from(s.querySelectorAll("style[".concat(f0, "]")));
    return a[a.length - 1];
  }(t), o = void (4820 * 1 + 814 * 3 + 7262 * -1) !== n ? n.nextSibling : null;
  e.setAttribute(f0, $s), e.setAttribute(ec, Ci);
  var r = Vu();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, Eu = function() {
  function x(i) {
    this.element = sc(i), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = -1498 + -4445 * 2 + 10388, o = e.length; n < o; n++) {
        var r = e[n];
        if (r.ownerNode === t) return r;
      }
      throw z0(-1 * -8867 + -2415 + -6435);
    }(this.element), this.length = -4613 + 139 * 41 + -1086;
  }
  return x.prototype.insertRule = function(i, t) {
    try {
      return this.sheet.insertRule(t, i), this.length++, !0;
    } catch {
      return !1;
    }
  }, x.prototype.deleteRule = function(i) {
    this.sheet.deleteRule(i), this.length--;
  }, x.prototype.getRule = function(i) {
    var t = this.sheet.cssRules[i];
    return t && t.cssText ? t.cssText : "";
  }, x;
}(), Lu = function() {
  function x(i) {
    this.element = sc(i), this.nodes = this.element.childNodes, this.length = 1047 * -7 + -8393 + 15722;
  }
  return x.prototype.insertRule = function(i, t) {
    if (i <= this.length && i >= -459 * 9 + 4150 + -19) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }, x.prototype.deleteRule = function(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }, x.prototype.getRule = function(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }, x;
}(), Du = function() {
  function x(i) {
    this.rules = [], this.length = -26 * 337 + -9411 + -1069 * -17;
  }
  return x.prototype.insertRule = function(i, t) {
    return i <= this.length && (this.rules.splice(i, -41 * 238 + 3 * 330 + 8768, t), this.length++, !0);
  }, x.prototype.deleteRule = function(i) {
    this.rules.splice(i, -2561 * -2 + -2576 + 2545 * -1), this.length--;
  }, x.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, x;
}(), Ga = sr, Nu = { isServer: !sr, useCSSOMInjection: !lu }, cc = function() {
  function x(i, t, e) {
    void (6652 + 1491 * 5 + -14107) === i && (i = X0), t === void 0 && (t = {});
    var n = this;
    this.options = Me(Me({}, Nu), i), this.gs = t, this.names = new Map(e), this.server = !!i.isServer, !this.server && sr && Ga && (Ga = !1, function(o) {
      for (var r = document.querySelectorAll(Ru), s = -2 * -694 + -7 * -389 + -1 * 4111, a = r.length; s < a; s++) {
        var c = r[s];
        c && c.getAttribute(f0) !== $s && (Tu(o, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), gr(this, function() {
      return function(o) {
        for (var r = o.getTag(), s = r.length, a = "", c = function(g) {
          var C = function(l) {
            return Tx.get(l);
          }(g);
          if (void (9215 + -9960 * 1 + 1 * 745) === C) return "continue";
          var u = o.names.get(C), p = r.getGroup(g);
          if (u === void 0 || -1 * 1622 + -1882 + 3504 === p.length) return "continue";
          var m = "".concat(f0, ".g").concat(g, '[id="').concat(C, '"]'), A = "";
          void (6303 + 11 * 813 + 14 * -1089) !== u && u.forEach(function(l) {
            l.length > 1317 * -1 + -173 + 1490 && (A += "".concat(l, ","));
          }), a += "".concat(p).concat(m, '{content:"').concat(A, '"}').concat(ar);
        }, d = -6 * -508 + 1 * 233 + -3281; d < s; d++) c(d);
        return a;
      }(n);
    });
  }
  return x.registerId = function(i) {
    return dx(i);
  }, x.prototype.reconstructWithOptions = function(i, t) {
    return void (1 * 3623 + -3025 + 23 * -26) === t && (t = !0), new x(Me(Me({}, this.options), i), this.gs, t && this.names || void (2 * 2162 + -2841 * -3 + 443 * -29));
  }, x.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || 558 + 1641 * 5 + -8763) + (6747 + 200 * 33 + -13346);
  }, x.prototype.getTag = function() {
    return this.tag || (this.tag = (i = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new Du(n) : e ? new Eu(n) : new Lu(n);
    }(this.options), new Ou(i)));
    var i;
  }, x.prototype.hasNameForId = function(i, t) {
    return this.names.has(i) && this.names.get(i).has(t);
  }, x.prototype.registerName = function(i, t) {
    if (dx(i), this.names.has(i)) this.names.get(i).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(i, e);
    }
  }, x.prototype.insertRules = function(i, t, e) {
    this.registerName(i, t), this.getTag().insertRules(dx(i), e);
  }, x.prototype.clearNames = function(i) {
    this.names.has(i) && this.names.get(i).clear();
  }, x.prototype.clearRules = function(i) {
    this.getTag().clearGroup(dx(i)), this.clearNames(i);
  }, x.prototype.clearTag = function() {
    this.tag = void (-79 * 65 + 64 * -132 + 13583);
  }, x;
}(), Fu = /&/g, Yu = /^\s*\/\/.*$/gm;
function gc(x, i) {
  return x.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(i, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(i, " ")), t.props = t.props.map(function(e) {
      return "".concat(i, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = gc(t.children, i)), t;
  });
}
function dc(x) {
  var i, t, e, n = x === void 0 ? X0 : x, o = n.options, r = void (-2012 * -1 + 1 * 9240 + -11252) === o ? X0 : o, s = n.plugins, a = void (867 * 10 + 3595 + -12265) === s ? pi : s, c = function(C, u, p) {
    return p.startsWith(t) && p.endsWith(t) && p.replaceAll(t, "").length > 7161 + 2503 * 3 + -14670 ? ".".concat(i) : C;
  }, d = a.slice();
  d.push(function(C) {
    C.type === ui && C.value.includes("&") && (C.props[-7203 + 108 * 79 + -1329] = C.props[0].replace(Fu, t).replace(e, c));
  }), r.prefix && d.push(du), d.push(su);
  var g = function(C, u, p, m) {
    void (7079 + -1 * 7079) === u && (u = ""), void (8067 + -1 * 5121 + 6 * -491) === p && (p = ""), void (-2476 * 3 + -6 * 421 + 9954) === m && (m = "&"), i = m, t = u, e = new RegExp("\\".concat(t, "\\b"), "g");
    var A = C.replace(Yu, ""), l = ru(p || u ? "".concat(p, " ").concat(u, " { ").concat(A, " }") : A);
    r.namespace && (l = gc(l, r.namespace));
    var W = [];
    return Px(l, cu(d.concat(gu(function(O) {
      return W.push(O);
    })))), W;
  };
  return g.hash = a.length ? a.reduce(function(C, u) {
    return u.name || z0(79 * 114 + -4101 + 30 * -163), n0(C, u.name);
  }, tc).toString() : "", g;
}
var Mu = new cc(), ho = dc(), dr = I0.createContext({ shouldForwardProp: void (-11 * -56 + -2484 + 4 * 467), styleSheet: Mu, stylis: ho });
dr.Consumer;
var Xu = I0.createContext(void (-39 * 109 + 6545 + -1147 * 2));
function mo() {
  return h0(dr);
}
function ju(x) {
  var i = Xe(x.stylisPlugins), t = i[-8557 + -1 * -8557], e = i[2721 + 2 * -2075 + 1430], n = mo().styleSheet, o = Qe(function() {
    var d = n, g = {};
    return g.useCSSOMInjection = !1, x.sheet ? d = x.sheet : x.target && (d = d.reconstructWithOptions({ target: x.target }, !1)), x.disableCSSOMInjection && (d = d.reconstructWithOptions(g)), d;
  }, [x.disableCSSOMInjection, x.sheet, x.target, n]), r = Qe(function() {
    var d = {};
    d.namespace = x.namespace, d.prefix = x.enableVendorPrefixes;
    var g = {};
    return g.options = d, g.plugins = t, dc(g);
  }, [x.enableVendorPrefixes, x.namespace, t]);
  de(function() {
    _d(t, x.stylisPlugins) || e(x.stylisPlugins);
  }, [x.stylisPlugins]);
  var s = Qe(function() {
    var d = {};
    return d.shouldForwardProp = x.shouldForwardProp, d.styleSheet = o, d.stylis = r, d;
  }, [x.shouldForwardProp, o, r]), a = {};
  a.value = s;
  var c = {};
  return c.value = r, I0.createElement(dr.Provider, a, I0.createElement(Xu.Provider, c, x.children));
}
var Oa = function() {
  function x(i, t) {
    var e = this;
    this.inject = function(n, o) {
      void (3365 + 345 * 8 + -35 * 175) === o && (o = ho);
      var r = e.name + o.hash;
      n.hasNameForId(e.id, r) || n.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = t, gr(this, function() {
      throw z0(12, String(e.name));
    });
  }
  return x.prototype.getName = function(i) {
    return void (-34 * 61 + 5452 + -3378) === i && (i = ho), this.name + i.hash;
  }, x;
}(), _u = function(x) {
  return x >= "A" && x <= "Z";
};
function Za(x) {
  for (var i = "", t = 0; t < x.length; t++) {
    var e = x[t];
    if (-4261 + -5 * -79 + 3867 === t && e === "-" && x[131 * 63 + -2 * -657 + 3189 * -3] === "-") return x;
    _u(e) ? i += "-" + e.toLowerCase() : i += e;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var uc = function(x) {
  return x == null || x === !1 || x === "";
}, lc = function(x) {
  var i, t, e = [];
  for (var n in x) {
    var o = x[n];
    x.hasOwnProperty(n) && !uc(o) && (Array.isArray(o) && o.isCss || j0(o) ? e.push("".concat(Za(n), ":"), o, ";") : _0(o) ? e.push.apply(e, N0(N0(["".concat(n, " {")], lc(o), !1), ["}"], !1)) : e.push("".concat(Za(n), ": ").concat((i = n, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -41 * 187 + 187 + 44 * 170 === t || i in uu || i.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function u0(x, i, t, e) {
  if (uc(x)) return [];
  if (cr(x)) return [".".concat(x.styledComponentId)];
  if (j0(x)) {
    if (!j0(o = x) || o.prototype && o.prototype.isReactComponent || !i) return [x];
    var n = x(i);
    return z.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof Oa || _0(n) || n === null || console.error("".concat(xc(x), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), u0(n, i, t, e);
  }
  var o;
  return x instanceof Oa ? t ? (x.inject(t, e), [x.getName(e)]) : [x] : _0(x) ? lc(x) : Array.isArray(x) ? Array.prototype.concat.apply(pi, x.map(function(r) {
    return u0(r, i, t, e);
  })) : [x.toString()];
}
function Ju(x) {
  for (var i = -2698 + 1 * 2698; i < x.length; i += -8360 + -9 * -929) {
    var t = x[i];
    if (j0(t) && !cr(t)) return !1;
  }
  return !0;
}
var Uu = nc(Ci), Qu = function() {
  function x(i, t, e) {
    this.rules = i, this.staticRulesId = "", this.isStatic = z.NODE_ENV === "production" && (void (18697 + 2671 * -7) === e || e.isStatic) && Ju(i), this.componentId = t, this.baseHash = n0(Uu, t), this.baseStyle = e, cc.registerId(t);
  }
  return x.prototype.generateAndInjectStyles = function(i, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = i0(n, this.staticRulesId);
      else {
        var o = ka(u0(this.rules, i, t, e)), r = Co(n0(this.baseHash, o) >>> 5168 + 136 * -38);
        if (!t.hasNameForId(this.componentId, r)) {
          var s = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, s);
        }
        n = i0(n, r), this.staticRulesId = r;
      }
    else {
      for (var a = n0(this.baseHash, e.hash), c = "", d = -8560 + -1 * 5036 + 33 * 412; d < this.rules.length; d++) {
        var g = this.rules[d];
        if (typeof g == "string") c += g, z.NODE_ENV !== "production" && (a = n0(a, g));
        else if (g) {
          var C = ka(u0(g, i, t, e));
          a = n0(a, C + d), c += C;
        }
      }
      if (c) {
        var u = Co(a >>> 0);
        t.hasNameForId(this.componentId, u) || t.insertRules(this.componentId, u, e(c, ".".concat(u), void (9041 + 4583 * -2 + 125), this.componentId)), n = i0(n, u);
      }
    }
    return n;
  }, x;
}(), Ic = I0.createContext(void (-151 * 43 + 257 * 31 + -1474));
Ic.Consumer;
var Ni = {}, Ha = /* @__PURE__ */ new Set();
function zu(x, i, t) {
  var e = cr(x), n = x, o = !Di(x), r = i.attrs, s = void (45 * 53 + 1234 * -7 + -37 * -169) === r ? pi : r, a = i.componentId, c = a === void 0 ? function(Y, _) {
    var H = typeof Y != "string" ? "sc" : va(Y);
    Ni[H] = (Ni[H] || -4 * 2092 + -25 + 8393) + 1;
    var re = "".concat(H, "-").concat(mu(Ci + H + Ni[H]));
    return _ ? "".concat(_, "-").concat(re) : re;
  }(i.displayName, i.parentComponentId) : a, d = i.displayName, g = void (113 * 79 + 7262 + -16189) === d ? function(Y) {
    return Di(Y) ? "styled.".concat(Y) : "Styled(".concat(xc(Y), ")");
  }(x) : d, C = i.displayName && i.componentId ? "".concat(va(i.displayName), "-").concat(i.componentId) : i.componentId || c, u = e && n.attrs ? n.attrs.concat(s).filter(Boolean) : s, p = i.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var m = n.shouldForwardProp;
    if (i.shouldForwardProp) {
      var A = i.shouldForwardProp;
      p = function(Y, _) {
        return m(Y, _) && A(Y, _);
      };
    } else p = m;
  }
  var l = new Qu(t, C, e ? n.componentStyle : void (1 * -4885 + -3 * -1031 + 8 * 224));
  function W(Y, _) {
    return function(H, re, U) {
      var te = H.attrs, Ve = H.componentStyle, He = H.defaultProps, Pt = H.foldedComponentIds, Jt = H.styledComponentId, Oe = H.target, at = I0.useContext(Ic), Qn = mo(), b0 = H.shouldForwardProp || Qn.shouldForwardProp;
      z.NODE_ENV !== "production" && Kx(Jt);
      var nn = fu(re, at, He) || X0, qe = function(y0, je, It) {
        var $e = {};
        $e.className = void (-2111 + 1 * 7031 + -4920), $e.theme = It;
        for (var Ut, ft = Me(Me({}, je), $e), st = 551 * 4 + 2 * -1953 + 1702; st < y0.length; st += 441 * 1 + -1 * -6421 + 2287 * -3) {
          var Qt = j0(Ut = y0[st]) ? Ut(ft) : Ut;
          for (var ct in Qt) ft[ct] = ct === "className" ? i0(ft[ct], Qt[ct]) : ct === "style" ? Me(Me({}, ft[ct]), Qt[ct]) : Qt[ct];
        }
        return je.className && (ft.className = i0(ft.className, je.className)), ft;
      }(te, re, nn), Wt = qe.as || Oe, Tt = {};
      for (var Re in qe) void (4689 + -3 * 1563) === qe[Re] || Re[5638 + 198 * 36 + -982 * 13] === "$" || Re === "as" || Re === "theme" && qe.theme === nn || (Re === "forwardedAs" ? Tt.as = qe.forwardedAs : b0 && !b0(Re, Wt) || (Tt[Re] = qe[Re], b0 || z.NODE_ENV !== "development" || ad(Re) || Ha.has(Re) || !fo.has(Wt) || (Ha.add(Re), console.warn('styled-components: it looks like an unknown prop "'.concat(Re, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var xn = function(y0, je) {
        var It = mo(), $e = y0.generateAndInjectStyles(je, It.styleSheet, It.stylis);
        return z.NODE_ENV !== "production" && Kx($e), $e;
      }(Ve, qe);
      z.NODE_ENV !== "production" && H.warnTooManyClasses && H.warnTooManyClasses(xn);
      var A0 = i0(Pt, Jt);
      return xn && (A0 += " " + xn), qe.className && (A0 += " " + qe.className), Tt[Di(Wt) && !fo.has(Wt) ? "class" : "className"] = A0, Tt.ref = U, Te(Wt, Tt);
    }(O, Y, _);
  }
  W.displayName = g;
  var O = I0.forwardRef(W), D = {};
  return D.attrs = !0, D.componentStyle = !0, D.displayName = !0, D.foldedComponentIds = !0, D.shouldForwardProp = !0, D.styledComponentId = !0, D.target = !0, O.attrs = u, O.componentStyle = l, O.displayName = g, O.shouldForwardProp = p, O.foldedComponentIds = e ? i0(n.foldedComponentIds, n.styledComponentId) : "", O.styledComponentId = C, O.target = e ? n.target : x, Object.defineProperty(O, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(Y) {
    this._foldedDefaultProps = e ? function(_) {
      for (var H = [], re = -1 * 4244 + 7 * -408 + 7101; re < arguments.length; re++) H[re - 1] = arguments[re];
      for (var U = -3745 + -46 * 194 + 12669, te = H; U < te.length; U++) po(_, te[U], !0);
      return _;
    }({}, n.defaultProps, Y) : Y;
  } }), z.NODE_ENV !== "production" && (Iu(g, C), O.warnTooManyClasses = /* @__PURE__ */ function(Y, _) {
    var H = {}, re = !1;
    return function(U) {
      if (!re && (H[U] = !0, Object.keys(H).length >= 9493 + 218 * 34 + 257 * -65)) {
        var te = _ ? ' with the id of "'.concat(_, '"') : "";
        console.warn("Over ".concat(6404 * 1 + 1 * 1904 + -1 * 8108, " classes were generated for component ").concat(Y).concat(te, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), re = !0, H = {};
      }
    };
  }(g, C)), gr(O, function() {
    return ".".concat(O.styledComponentId);
  }), o && ac(O, x, D), O;
}
function Ra(x, i) {
  for (var t = [x[7405 + -2351 * -3 + -14458]], e = 3376 + -422 * 8, n = i.length; e < n; e += -3181 * -2 + 7070 + -13431) t.push(i[e], x[e + (2 * 782 + -3481 * 2 + -5399 * -1)]);
  return t;
}
var Ka = function(x) {
  var i = {};
  return i.isCss = !0, Object.assign(x, i);
};
function fc(x) {
  for (var i = [], t = -2 * -760 + -1706 + 11 * 17; t < arguments.length; t++) i[t - (3233 + -1 * -5854 + -9086)] = arguments[t];
  if (j0(x) || _0(x)) return Ka(u0(Ra(pi, N0([x], i, !0))));
  var e = x;
  return -8974 + -1951 * -3 + 3121 * 1 === i.length && 1263 + -1 * 1262 === e.length && typeof e[-429 + -2039 * -1 + -1610] == "string" ? u0(e) : Ka(u0(Ra(e, i)));
}
function bo(x, i, t) {
  if (void (7371 + 12 * -809 + 2337) === t && (t = X0), !i) throw z0(1748 + -887 * -8 + -8843, i);
  var e = function(n) {
    for (var o = [], r = 4518 * 2 + -2357 * 1 + -14 * 477; r < arguments.length; r++) o[r - (-8 * 163 + -5207 + 6512)] = arguments[r];
    return x(i, t, fc.apply(void (401 * -14 + 1 * 5283 + 331 * 1), N0([n], o, !1)));
  };
  return e.attrs = function(n) {
    return bo(x, i, Me(Me({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return bo(x, i, Me(Me({}, t), n));
  }, e;
}
var Cc = function(x) {
  return bo(zu, x);
}, q0 = Cc;
fo.forEach(function(x) {
  q0[x] = Cc(x);
});
z.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ux = "__sc-".concat(f0, "__");
z.NODE_ENV !== "production" && z.NODE_ENV !== "test" && typeof window < "u" && (window[ux] || (window[ux] = -1334 * 2 + -1 * -289 + -61 * -39), -2704 + -1 * 9501 + 12206 === window[ux] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ux] += -623 * -10 + 6149 + 6 * -2063);
const qu = q0.div`
  position: relative;
`, $u = q0.video`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(x) => x.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class xe extends Error {
  constructor(t, e) {
    super(t);
    V(this, "cause");
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
const wx = {};
wx.CONTINUE_DETECTION = "continue-detection", wx.SWITCH_CAMERA = "switch-camera", wx.TOGGLE_MIRROR = "toggle-mirror";
const Fi = wx, Ao = {};
Ao.FIRST_FRAME = "first-frame", Ao.FIRST_VALID_FRAME = "first-valid-frame";
const Yi = Ao, pc = {};
pc.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Pa = pc;
var hc = ((x) => (x.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", x.CONTROL = "document-auto-capture:control", x.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", x.DOCUMENT_DETECTION = "document-auto-capture:document-detection", x.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", x.STATE_CHANGED = "document-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", x))(hc || {}), Mt = ((x) => (x.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", x.CONTROL = "face-auto-capture:control", x.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", x.FACE_DETECTION = "face-auto-capture:face-detection", x.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", x.STATE_CHANGED = "face-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", x))(Mt || {}), Sn = ((x) => (x.ANIMATION_END = "magnifeye-auto-capture:animation-end", x.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", x))(Sn || {}), el = ((x) => (x.STATUS_CHANGED = "smile-auto-capture:status-changed", x))(el || {}), tl = ((x) => (x.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", x.CONTROL = "palm-capture:control", x.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", x.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", x.STATE_CHANGED = "palm-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", x))(tl || {}), nl = ((x) => (x.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", x))(nl || {});
const mc = {};
mc.EYE_NOT_PRESENT = "eye_not_present";
const Ta = mc, Pe = {};
Pe.CANDIDATE_SELECTION = "candidate_selection", Pe.FACE_TOO_CLOSE = "face_too_close", Pe.FACE_TOO_FAR = "face_too_far", Pe.FACE_CENTERING = "face_centering", Pe.FACE_NOT_PRESENT = "face_not_present", Pe.SHARPNESS_TOO_LOW = "sharpness_too_low", Pe.BRIGHTNESS_TOO_LOW = "brightness_too_low", Pe.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Pe.DEVICE_PITCHED = "device_pitched", Pe.LEFT_EYE_NOT_PRESENT = "left_" + Ta.EYE_NOT_PRESENT, Pe.RIGHT_EYE_NOT_PRESENT = "right_" + Ta.EYE_NOT_PRESENT, Pe.MOUTH_NOT_PRESENT = "mouth_not_present", Pe.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", Pe.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const Ae = Pe, De = {};
De.isPresent = Ae.FACE_NOT_PRESENT, De.isNotPitched = Ae.DEVICE_PITCHED, De.isNotSmall = Ae.FACE_TOO_FAR, De.isNotLarge = Ae.FACE_TOO_CLOSE, De.isNotOutOfBounds = Ae.FACE_CENTERING, De.isNotDim = Ae.BRIGHTNESS_TOO_LOW, De.isNotBright = Ae.BRIGHTNESS_TOO_HIGH, De.isSharp = Ae.SHARPNESS_TOO_LOW, De.isLeftEyePresent = Ae.LEFT_EYE_NOT_PRESENT, De.isRightEyePresent = Ae.RIGHT_EYE_NOT_PRESENT, De.isMouthPresent = Ae.MOUTH_NOT_PRESENT, De.isMouthScoreNotTooHigh = Ae.MOUTH_SCORE_TOO_HIGH, De.isMouthScoreNotTooLow = Ae.MOUTH_SCORE_TOO_LOW;
const xl = De, yo = {};
yo.FRONT = "user", yo.REAR = "environment";
const ur = yo, vo = {};
vo.AUTO_CAPTURE = "AUTO_CAPTURE", vo.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const bc = vo, ln = {};
ln.LOADING = "LOADING", ln.ERROR = "ERROR", ln.WAITING = "WAITING", ln.RUNNING = "RUNNING";
const bt = ln;
({ ...Ae });
var Ue = ((x) => (x.CLOSEUP = "CLOSEUP", x.DISTANT = "DISTANT", x.MIDDLE = "MIDDLE", x))(Ue || {});
const Ac = { ...bt };
Ac.DONE = "DONE";
const o0 = Ac;
({ ...Ae });
({ ...Ae });
const hi = jn(void 0);
hi.displayName = "AppStateContext";
function $0() {
  const x = h0(hi);
  if (x === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return x;
}
const il = hi.Provider, ol = $0;
class yc extends xt {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const i = new xe("An unknown error has occurred");
    (t = this.context) == null || t.handleError(i);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var i;
    return ((i = this.context) == null ? void 0 : i.appState) === bt.ERROR ? null : this.props.children;
  }
}
V(yc, "contextType", hi);
const rl = q0.canvas`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, al = q0.div`
  background-color: #00000060;
  color: #fff;
  font-size: 13px;
  width: 300px;
  padding: 10px;
  z-index: 2;
  word-break: break-word;
  position: absolute;
  top: 0;
`;
function sl() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const cl = Ks(
  ({ detectionDetails: x, isImageMirror: i }, t) => sl() ? (console.log(x), /* @__PURE__ */ G(ot, { children: [
    /* @__PURE__ */ G(rl, { ref: t, $isImageMirror: i }),
    /* @__PURE__ */ G(al, { children: Object.entries(x).map(([e, n]) => /* @__PURE__ */ G("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ G("strong", { children: n })
    ] }, e)) })
  ] })) : null
), Vx = jn(void 0);
Vx.displayName = "AnalyticsContext";
function vc() {
  const x = h0(Vx);
  if (x === void 0)
    throw new Error(`${Vx.displayName} must be used within a AnalyticsProvider`);
  return x;
}
(function(x, i) {
  function t(a, c, d, g, C) {
    return Be(d - 928, c);
  }
  function e(a, c, d, g, C) {
    return Be(c - 99, C);
  }
  function n(a, c, d, g, C) {
    return Be(d - -644, C);
  }
  function o(a, c, d, g, C) {
    return Be(c - 666, d);
  }
  const r = x();
  function s(a, c, d, g, C) {
    return Be(c - -285, a);
  }
  for (; ; )
    try {
      if (parseInt(n(-318, -345, -335, -335, "ASn*")) / 1 * (parseInt(e(407, 424, 435, 431, "K1hp")) / 2) + -parseInt(e(411, 430, 425, 449, "h^Ne")) / 3 + -parseInt(t(1254, "X2qd", 1262, 1262, 1264)) / 4 * (-parseInt(o(970, 973, "CU3]", 973, 963)) / 5) + parseInt(o(1006, 986, "Izwj", 969, 998)) / 6 + -parseInt(n(-320, -300, -306, -293, "&zYz")) / 7 * (parseInt(s("Cp]Q", 33, 36, 44, 41)) / 8) + parseInt(o(970, 990, "T0^s", 973, 992)) / 9 * (-parseInt(t(1242, "$[PM", 1238, 1230, 1223)) / 10) + parseInt(t(1245, "$[PM", 1260, 1260, 1280)) / 11 * (parseInt(e(427, 434, 433, 423, "fLc$")) / 12) === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Lx, 321970 + -1030378 * -1 + -777043);
function Be(x, i) {
  const t = Lx();
  return Be = function(e, n) {
    e = e - (-1 * -5574 + 6610 * 1 + -11877 * 1);
    let o = t[e];
    if (Be.ajKgZU === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          p += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[p], u[p] = m;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, m = u[l], u[l] = u[p], u[p] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Be.LCkLbd = d, x = arguments, Be.ajKgZU = !0;
    }
    const s = t[-6549 + 222 * -5 + 7659], a = e + s, c = x[a];
    return c ? o = c : (Be.GptFGp === void 0 && (Be.GptFGp = !0), o = Be.LCkLbd(o, n), x[a] = o), o;
  }, Be(x, i);
}
function Wo(x, i, t, e, n) {
  return Be(x - -1, n);
}
const Ex = jn(void (8821 + -9219 * 1 + 2 * 199));
function So(x, i, t, e, n) {
  return Be(x - -209, n);
}
function Lx() {
  const x = ["WOZdNCkubmoer2uGw8oRW6FcTfddOa", "WQiovXLXrueoW5RcSSk/W4u", "qGtcSmkLWPTyW7BcL3BcOq", "zSkVdmkME8onE04", "W4r9DSkRc8k/W7lcHSoYW5y7WQrW", "CaTjAxG", "WQuyqmosnYlcUW", "qqJcTCkKW5WfW4ZcQ1BcKgpcLq", "WRBdNJzQjrhdSvW", "BaZcRJZcUq", "WRRdHCkyuZldO8kYWRiDWPO", "FSkKWR9OtNDIWQDSW6NdOe3dTW", "WPlcNNRdRKS", "W7yKWORcQYVdR8ogjSo2W6ZcUmktW7W", "W4z4DCkLd8oQWQJcUCorW5eB", "W4BcMIldLG", "W459C8kKcCk7WQZcKmouW7iRWOq", "WQqsWOJcLmoc", "WO0wAIOm", "FmkGWR1TthiiWQbDW7pdQLC", "zCkLW6FcS3q", "W54rtgux", "cSkgh8oeWP7dS8kCWPGVWRy", "WP3dSmkLqSoH", "W4xdGSknpmocWOug", "WRtdNqrvoItdGN0", "WPldRCkOWPVcPq", "AcVcRWjwWPddSSoMtSkK", "WOZdNmkud8ofht1stmouW4a", "nCosz8k8WPS", "yCoqW4eTuq", "W4ijWOBdUxHZWPLusYeTehrQ", "rG7cSCkKWQLTW63cTwBcRq", "ySkVDmoKESo7wKyhW6q", "hSo5veyI", "WRvokgZdPmoJWRrLWOhdKYD5dG", "W4tcNmkfmCosWRq0W7G", "W6/cK8oy", "WR3cMhnrW48"];
  return Lx = function() {
    return x;
  }, Lx();
}
function Wc(x, i, t, e, n) {
  return Be(e - -468, x);
}
function gl(x, i, t, e, n) {
  return Be(n - 283, t);
}
Ex[So(102, 121, 93, 100, "abMA") + Wc("Vx3e", -126, -140, -145) + "e"] = Wo(314, 326, 323, 309, "7qUX") + So(136, 148, 125, 150, "2j](") + Wo(338, 356, 338, 328, "&2K$");
function _n() {
  function x(o, r, s, a, c) {
    return Wc(r, r - 310, s - 229, s - -439);
  }
  function i(o, r, s, a, c) {
    return gl(o - 306, r - 3, r, a - 258, c - -1244);
  }
  const t = h0(Ex);
  function e(o, r, s, a, c) {
    return Wo(o - -653, r - 498, s - 318, a - 102, c);
  }
  function n(o, r, s, a, c) {
    return So(a - 1103, r - 500, s - 157, a - 259, s);
  }
  if (t === void (7833 + 1119 * -7)) throw new Error(Ex[x(-559, "%cCd", -566) + x(-588, "Rrk&", -574) + "e"] + (i(-642, "Ax^Q", -650, -663, -647) + n(1220, 1234, "2j](", 1236) + i(-637, "Q50T", -668, -635, -653) + n(1237, 1229, "C#C8", 1238) + n(1216, 1245, "&2K$", 1230) + e(-325, -330, -342, -337, "QI]Q") + i(-656, "i0T!", -649, -644, -642) + i(-631, "X2qd", -641, -642, -639)));
  return t;
}
(function(x, i) {
  function t(a, c, d, g, C) {
    return ve(d - 725, g);
  }
  function e(a, c, d, g, C) {
    return ve(C - 160, a);
  }
  function n(a, c, d, g, C) {
    return ve(d - -704, a);
  }
  const o = x();
  function r(a, c, d, g, C) {
    return ve(c - 938, d);
  }
  function s(a, c, d, g, C) {
    return ve(d - -514, a);
  }
  for (; ; )
    try {
      if (-parseInt(n("(Q&m", -217, -231, -216, -242)) / 1 * (parseInt(s("2TDo", -41, -51, -48, -42)) / 2) + parseInt(n("jW%K", -251, -259, -244, -265)) / 3 * (-parseInt(t(1189, 1168, 1182, "l5ae", 1167)) / 4) + -parseInt(s("meYV", -59, -59, -63, -46)) / 5 * (-parseInt(s("arGA", -38, -44, -41, -43)) / 6) + -parseInt(r(1382, 1391, "(Q&m", 1401, 1385)) / 7 + -parseInt(t(1173, 1193, 1183, "arGA", 1192)) / 8 * (parseInt(s("Kne&", -59, -54, -60, -69)) / 9) + -parseInt(s("Y8#O", -45, -47, -47, -33)) / 10 + parseInt(e("y)A3", 616, 602, 623, 609)) / 11 * (parseInt(n("mL]u", -255, -248, -235, -256)) / 12) === i) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Dx, 2 * 194342 + -233 * -1249 + -464064);
function Dx() {
  const x = ["gmk3FdKrWPldT8opEmkPWPRdS8k0", "js5vyce", "W4iaz3dcMvJdPYdcJdinqCkY", "W5/dKCkIWRukCJRdSaLUvH/cMCob", "rNLsxGfQW7RcIG", "W4rFwSkAvSoOj8o+dxS6lG", "nxRcL8kXWQOSW4BdKW", "eSoffCkTst3dTxO", "zmkTWPWgFG", "WODaW6PAW7OChG9wW5TUAG", "nqWwnJRdPmkoW4vCr8klW6u", "j8oamwlcImoaFJWHW6GNW55j", "W7buA8kg", "gmk0EdKtWP3dSCk5qSkmWQVdRSkFgq", "ySkiWQlcQWzibKdcRmkgismP", "o8oGCmksW4u", "WONcQX3dImkWlSo2uSkKq17dPmoV", "W4O8omokmSkZcW", "W6JcSmo5wSkoW6NcPCkI", "WOPfW6LDW7KCmcTYW75+EG", "gmoMpfbRW4JcSq", "fhrLyH4", "W4/cK8kxW7iWbs3cHvXnhIW", "nmk4WPHBWOZcOSkfhq", "WP3dHSk7DW4", "W6xdTSkmFmkAW7BdH2WSaMlcRCk8", "W5TVz1BdKCoQasS", "yCozW6/dGhOsqa", "emo1WOWtW40", "WRLgW6aMeSoNfN8lWOKTW58"];
  return Dx = function() {
    return x;
  }, Dx();
}
function ve(x, i) {
  const t = Dx();
  return ve = function(e, n) {
    e = e - (-16 * 58 + 8207 * 1 + -6834);
    let o = t[e];
    if (ve.qUYPHC === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          p += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[p], u[p] = m;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, m = u[l], u[l] = u[p], u[p] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      ve.HpcxNS = d, x = arguments, ve.qUYPHC = !0;
    }
    const s = t[6067 * 1 + -5144 * -1 + -11211], a = e + s, c = x[a];
    return c ? o = c : (ve.WJpZrn === void 0 && (ve.WJpZrn = !0), o = ve.HpcxNS(o, n), x[a] = o), o;
  }, ve(x, i);
}
function dl({ licensePath: x, bramble: i, wasmDirectoryPath: t }) {
  function e(c, d, g, C, u) {
    return ve(d - 555, C);
  }
  function n(c, d, g, C, u) {
    return ve(c - 840, g);
  }
  const [o, r] = Xe(), s = o !== void 0;
  de(() => {
    async function c() {
      await i[g(498, 504, "cdn0", 508, 504)](t, x);
      function d(u, p, m, A, l) {
        return ve(u - -890, p);
      }
      function g(u, p, m, A, l) {
        return ve(l - 39, m);
      }
      function C(u, p, m, A, l) {
        return ve(A - 477, m);
      }
      r(i[d(-443, "29f7") + C(942, 945, "kPa*", 951) + g(504, 494, "l5ae", 504, 493) + "t"]());
    }
    c();
  }, [i, t, x, r]);
  const a = {};
  return a[n(1308, 1299, "D)JB") + n(1291, 1276, "xF)w")] = o, a[e(1027, 1016, 1023, "A[e@") + "sh"] = s, a;
}
var Sc = ((x) => (x.DOCUMENT = "document-auto-capture:dev", x.FACE = "face-auto-capture:dev", x.PALM = "palm-capture:dev", x))(Sc || {});
const wo = {};
wo.SIMD = "simd", wo.NO_SIMD = "no-simd";
const Va = wo, Bo = {};
Bo.Lower = "Lower", Bo.Higher = "Higher";
const ko = Bo, Bx = {};
Bx.VISIBLE = "VISIBLE", Bx.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", Bx.HIDDEN = "HIDDEN";
const bn = Bx;
(function(x, i) {
  function t(a, c, d, g, C) {
    return Ne(c - 619, C);
  }
  function e(a, c, d, g, C) {
    return Ne(c - 164, a);
  }
  function n(a, c, d, g, C) {
    return Ne(g - 448, d);
  }
  function o(a, c, d, g, C) {
    return Ne(g - -863, a);
  }
  for (var r = x(); ; )
    try {
      var s = parseInt(t(1030, 1024, 1013, 1032, "50)c")) / 1 + -parseInt(e("&5&6", 577, 571, 573, 567)) / 2 * (parseInt(t(1020, 1029, 1019, 1030, "t]0o")) / 3) + parseInt(e("#c$p", 578, 578, 567, 586)) / 4 * (-parseInt(e("kM!c", 573, 570, 560, 583)) / 5) + parseInt(e("(kyI", 591, 594, 592, 597)) / 6 * (parseInt(o("nQf5", -449, -452, -448, -445)) / 7) + parseInt(t(1039, 1039, 1034, 1050, "BmB3")) / 8 + -parseInt(n(858, 866, "c5PN", 871, 883)) / 9 * (-parseInt(e("BmB3", 585, 578, 580, 582)) / 10) + parseInt(e("fDec", 583, 580, 592, 586)) / 11 * (-parseInt(n(862, 853, "]G8a", 852, 840)) / 12);
      if (s === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Nx, -85577 * -11 + 261526 * -1 + -74655);
function Ne(x, i) {
  var t = Nx();
  return Ne = function(e, n) {
    e = e - (-880 + -1477 * -1 + -1 * 194);
    var o = t[e];
    if (Ne.UCzXLQ === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (var O = 0, D = u.length; O < D; O++)
          p += "%" + ("00" + u.charCodeAt(O).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, s = function(g, C) {
        var u = [], p = 0, m, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[p], u[p] = m;
        l = 0, p = 0;
        for (var W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, m = u[l], u[l] = u[p], u[p] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Ne.pZOEtL = s, x = arguments, Ne.UCzXLQ = !0;
    }
    var a = t[3 * 3045 + -4230 * -2 + -85 * 207], c = e + a, d = x[c];
    return d ? o = d : (Ne.iiQrSq === void 0 && (Ne.iiQrSq = !0), o = Ne.pZOEtL(o, n), x[c] = o), o;
  }, Ne(x, i);
}
function ul({ crosshatch: x }) {
  function i(e, n, o, r, s) {
    return Ne(s - 558, n);
  }
  function t(e, n, o, r, s) {
    return Ne(s - -226, r);
  }
  return x != null && x[i(995, "R6Gj", 992, 980, 982) + "id"] ? ko[i(960, "9Aih", 983, 984, 970) + "r"] : ko[t(200, 188, 206, "fq7x", 199)];
}
function Nx() {
  var x = ["WRj2mmoDWOWgaYWYkglcKq", "W5HqW4RdM8ksDcWcW7ZdQq", "WOZdSSkvkahdVWSRfmonoCkg", "WRDYnSoFWOXtntOCpuW", "WRj5sCkyW5LHpJS", "WOjcW5/dKgWPrgHQW53dSSk3", "WOvNWRBdOJNcTHr/DCk4WRldMKa", "WOPNWRhdPZdcTe5wzmkZWR7dIa", "dSoIW5DwpSoivSkveJJdTXi", "WR4AEtJcVCoFqCkT", "W4hcVHDRkW", "WRldKCoqWQ/cSa", "xmktWRqFiCkraCoTv0y", "amkYA8oyWRJdH3RdMSoqrG", "W6rAWPBcU8ouWPldH8kTW5jTwSo8sa", "Cmkqe2xdR2JcNmkN", "uSo3rMLwlCkkWRK3rW", "W6eKgCk9ymkvzCkh", "jdNcM8oHWR/cIgjQvYRcVgq", "aCo4qSkAWOPLkf4qW5hcP8kt", "cCkaWQ5YhCoyzSksWP8", "WRv1mCoAWOOaisyDnK3cIq", "bxVcHIfUaSk5W5W", "W6LDWPBcU8oBW4pcICkyW4jTvW", "WRzTW7ClWPlcI8o8rG", "W4JdTfnbka", "j8odW7KeW5hdMYFdGSoX"];
  return Nx = function() {
    return x;
  }, Nx();
}
(function(x, i) {
  function t(s, a, c, d, g) {
    return ke(g - 492, a);
  }
  function e(s, a, c, d, g) {
    return ke(d - -687, s);
  }
  const n = x();
  function o(s, a, c, d, g) {
    return ke(d - -594, s);
  }
  function r(s, a, c, d, g) {
    return ke(a - -409, d);
  }
  for (; ; )
    try {
      if (-parseInt(t(770, "aOFR", 802, 771, 784)) / 1 * (parseInt(e("fHFT", -432, -402, -420, -424)) / 2) + -parseInt(o("Vz2C", -303, -314, -308, -313)) / 3 * (-parseInt(e("ZIKf", -436, -423, -421, -411)) / 4) + parseInt(o("iwpG", -291, -284, -296, -298)) / 5 + -parseInt(o("oVpL", -292, -295, -301, -299)) / 6 * (parseInt(r(-112, -113, -99, "e9]^", -127)) / 7) + parseInt(r(-138, -139, -156, "boGv", -122)) / 8 + -parseInt(o("e%KC", -332, -322, -323, -318)) / 9 * (-parseInt(r(-102, -114, -114, "f3Ih", -127)) / 10) + parseInt(o("fHFT", -323, -332, -322, -332)) / 11 * (-parseInt(t(756, "fE4b", 767, 772, 772)) / 12) === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Fx, -218607 + 496143 * 3 + -1 * 335749);
function Fx() {
  const x = ["WQ5PW43dT3fqW43cOunOW43cKmoM", "W4v1WQldU2LxlHmLD8kmWOC", "W6BcJGRcLSophwe", "WRGXW5hcHmk9WONdT8kMW691W5ZcI8onWRS", "WRr1WPRdRIpdGqfaWPq", "WQ5PWOtcVamUWPhcMa", "WRJcNJVcQSoj", "W6hdTCk5W7aeWOxdMXhcHSoFhmoMW6y", "F8oro8kFWQn0A8ojhSkPzCkd", "WRtcGCkA", "W6PXWORdG8o3", "aqq6zfZcNSkHf8kghCoyWPpcNa", "E8oComo4W6iuESoqgW", "tCoFW47cMmowDLZcLSkntHOmo8oN", "CeWLEmoVwqaSWPqjWQJdLJy", "W5ldHmkro8ox", "zYlcPvnVx8kyza", "oY5fWO1y", "WRasW7fZaa", "W4RdM8kjWRldT13cLCoNb8omWOSc", "a1fLgHRdTSoH", "W6/dK8kVW4Hx", "l8kllCk+yG", "k8kpdSkYuG", "i8kjmXlcUKTPWQBdL8ocjmkhW4/cJG", "yaKNDb3dOhG", "mCoKW6LMzdODcX8vv8o8na", "jhBcUW", "DKqLECoPwfqHWO4JWP/dPG", "xdPcWRrcBCkd", "WQddKtj3zCkSjmoV", "j8kgnbxcU0jTW7hdTCoMh8kIW7C", "WO1Hv2lcQa", "BCoCsCoRl0zEfJz8AeemW60", "W4ZdHmkjlCoA", "WPSCCSoBWRC", "W6BdNGVcLmokheVcKW"];
  return Fx = function() {
    return x;
  }, Fx();
}
function ke(x, i) {
  const t = Fx();
  return ke = function(e, n) {
    e = e - (6759 + -151 * 43);
    let o = t[e];
    if (ke.ZAKUcv === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          p += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[p], u[p] = m;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, m = u[l], u[l] = u[p], u[p] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      ke.jeFwBZ = d, x = arguments, ke.ZAKUcv = !0;
    }
    const s = t[-5193 + 577 * 9], a = e + s, c = x[a];
    return c ? o = c : (ke.iYZWbt === void 0 && (ke.iYZWbt = !0), o = ke.jeFwBZ(o, n), x[a] = o), o;
  }, ke(x, i);
}
function ll({ children: x, licensePath: i, bramble: t, wasmDirectoryPath: e }) {
  const n = {};
  n[d("hH3n", 490, 503) + "le"] = t;
  function o(m, A, l, W, O) {
    return ke(m - 993, A);
  }
  n[p(246, 244, "mWMf") + d("eqx&", 507, 493) + "h"] = i, n[p(234, 247, "eqx&") + r("3xj[", -283, -268) + o(1266, "ZIKf") + "th"] = e;
  function r(m, A, l, W, O) {
    return ke(l - -556, m);
  }
  const { sunfish: s, crosshatch: a } = dl(n);
  function c(m, A, l, W, O) {
    return ke(l - -252, O);
  }
  function d(m, A, l, W, O) {
    return ke(l - 204, m);
  }
  const g = {};
  g[c(9, 12, 25, 23, "boGv") + r("L&Ee", -267, -255)] = a;
  const C = Qe(() => ({ redfin: ul(g), sunfish: s, crosshatch: a, bramble: t }), [s, a, t]), u = {};
  u[o(1275, "L&Ee")] = C, u[r(")cD4", -277, -271) + o(1287, "M!C]")] = x;
  function p(m, A, l, W, O) {
    return ke(m - -56, l);
  }
  return G(Ex[d("e9]^", 478, 488) + p(220, 238, "$nZb")], u);
}
(function(x, i) {
  function t(a, c, d, g, C) {
    return nt(C - -843, a);
  }
  function e(a, c, d, g, C) {
    return nt(c - -197, a);
  }
  var n = x();
  function o(a, c, d, g, C) {
    return nt(C - 982, a);
  }
  function r(a, c, d, g, C) {
    return nt(d - 743, c);
  }
  for (; ; )
    try {
      var s = parseInt(e("dJOX", 58, 59, 58, 58)) / 1 * (-parseInt(e("QdYU", 64, 62, 58, 69)) / 2) + parseInt(r(1003, "FwFh", 997, 1004, 991)) / 3 * (parseInt(o("UZFg", 1235, 1238, 1241, 1244)) / 4) + -parseInt(r(992, "U182", 995, 989, 985)) / 5 + parseInt(r(1001, "YrG7", 1e3, 1004, 991)) / 6 * (parseInt(r(1014, "wVd%", 1006, 997, 1004)) / 7) + parseInt(o("7otc", 1239, 1236, 1247, 1242)) / 8 + -parseInt(t("PMED", -589, -594, -596, -592)) / 9 + -parseInt(o("wha%", 1233, 1230, 1230, 1235)) / 10;
      if (s === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Yx, -143 * 769 + -459023 + 521366 * 2);
function nt(x, i) {
  var t = Yx();
  return nt = function(e, n) {
    e = e - (9283 + 1 * -3391 + 17 * -332);
    var o = t[e];
    if (nt.KbZcbD === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (var O = 0, D = u.length; O < D; O++)
          p += "%" + ("00" + u.charCodeAt(O).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, s = function(g, C) {
        var u = [], p = 0, m, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[p], u[p] = m;
        l = 0, p = 0;
        for (var W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, m = u[l], u[l] = u[p], u[p] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      nt.fGAOYM = s, x = arguments, nt.KbZcbD = !0;
    }
    var a = t[40 * -237 + -7958 + 17438], c = e + a, d = x[c];
    return d ? o = d : (nt.aPmEpb === void 0 && (nt.aPmEpb = !0), o = nt.fGAOYM(o, n), x[c] = o), o;
  }, nt(x, i);
}
function Yx() {
  var x = ["W6LzbrGiWQ9mtWLxW68Rma", "WQWTpx/dUCk7nX0DmW", "W6BcHCkdW5HvW5NcIq", "u1GnnaOfsSkW", "rtvPDCoPWOtcNqiAymoc", "vLP2qLjndmkrWQlcRrepW5m", "bc/dJuH+kCkAA2BcO8krW6q", "W63dI8ouWQSzbSkegYbMo1RdRq", "WOiJD8kJW7NdGZy", "WR7dN0BcSIfXsGeohCo0va", "WQ4jhmksW50jeCoTiNnmW7RcVG", "p8kPygfKeYTXx0v0", "WRFdM0pcSInYwqq7n8onsq", "eu7cRSoDb3/dQb8fW6ieWOP1", "WRbJja1jwSkxzCoCB2JcOXy", "sCojW4JcTN/cMLNcJa", "W5hcLMBdLCkmW448neNdV8kkWPW", "eSkcexDAW5jHqSoCFa", "u8kudmkSoxHXjmk2W74EW4O", "pCkTz2jJwGn/rL1yW5G"];
  return Yx = function() {
    return x;
  }, Yx();
}
function Il({ analytics: x, crosshatch: i }) {
  return i !== void (6 * 1032 + -9350 + 3158 * 1) && !i.isAnalyticsDisabled ? x : void (2368 + 592 * -4);
}
function fl({ analytics: x, appKey: i, redfin: t, crosshatch: e, bramble: n }) {
  const o = {};
  o.analytics = x, o.crosshatch = e;
  const r = Il(o);
  return de(() => {
    r && r.init(i);
  }, [r, i]), de(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), r && r.walleye(t, n.getCustomerName()));
  }, [r, n, e, t]), de(() => {
    if (r)
      return window.addEventListener("beforeunload", r.endSession), () => {
        r.endSession(), window.removeEventListener("beforeunload", r.endSession);
      };
  }, [r]), r;
}
function Cl({
  analytics: x,
  appKey: i,
  children: t
}) {
  const { redfin: e, crosshatch: n, bramble: o } = _n(), r = fl({ analytics: x, redfin: e, appKey: i, crosshatch: n, bramble: o }), s = Qe(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ G(Vx.Provider, { value: s, children: t });
}
const pl = -1 * -2186 + -380 + -1806 + 0.4, hl = 8121 + -3 * 2707 + 0.16, ml = 1 * 353 + 7841 + -8194 + 0.2, bl = -1 * -6659 + 3896 + -10555 + 0.05, Al = -9620 + 740 * 13, Go = {};
Go.min = -(394 + -29 * 6 + -219), Go.max = 1;
const Ea = Go, La = 2467 * 1 + -4846 + 39 * 61, yl = 9442 * -1 + -8368 * -1 + 179 * 6 + 0.3, vl = -1 * 9511 + -2 * 1289 + -77 * -157 + 0.2, Wl = -6369 + 579 * 11 + 0.85, Sl = 7098 * -1 + -191 * 12 + 9420, wl = -1210 + -1219 * -1 + 0.8100000000000005, kx = {};
kx.minDuration = 1e3, kx.maxDuration = 2500, kx.minFrames = 10;
const Mi = kx, Oo = {};
Oo.max = 100, Oo.min = 10;
const Da = Oo, Bl = -1027 * 8 + -1 * -5399 + -3 * -1179, kl = 15782 + 106 * -147, Gl = -13 * -523 + -8410 + 1615, wc = "AES-CBC", Bc = "RSA-OAEP", Ol = "SHA-256", Zl = "image/jpeg", Hl = 8753 * -1 + -61 * -4 + 167 * 51, Rl = 71 * 67 + 1589 + -2 * 3153, Kl = "SAM v1.40.4 for idcards", Pl = "dot_embedded_bg.wasm";
let j;
const Zt = new Array(128).fill(void 0);
Zt.push(void 0, null, !0, !1);
function Zo(x) {
  return Zt[x];
}
let At = -9282 + -1 * 284 + 9566, In = null;
function Gx() {
  return (In === null || In.byteLength === -9495 + -262 * -6 + 1 * 7923) && (In = new Uint8Array(j.memory.buffer)), In;
}
const Ox = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Tl = typeof Ox.encodeInto == "function" ? function(x, i) {
  return Ox.encodeInto(x, i);
} : function(x, i) {
  const t = Ox.encode(x);
  i.set(t);
  const e = {};
  return e.read = x.length, e.written = t.length, e;
};
function wn(x, i, t) {
  if (t === void 0) {
    const s = Ox.encode(x), a = i(s.length, 686 * 11 + -4966 * 2 + 2387) >>> 1 * 5153 + -1993 + -158 * 20;
    return Gx().subarray(a, a + s.length).set(s), At = s.length, a;
  }
  let e = x.length, n = i(e, -81 * -36 + -8172 + 1 * 5257) >>> 71 + -71 * 1;
  const o = Gx();
  let r = -5229 + 1 * 8554 + -3325;
  for (; r < e; r++) {
    const s = x.charCodeAt(r);
    if (s > -3935 + -1 * 1517 + 5579) break;
    o[n + r] = s;
  }
  if (r !== e) {
    r !== -4768 + -32 * -149 && (x = x.slice(r)), n = t(n, e, e = r + x.length * (23 * 257 + -4933 + -975), -3991 + 2111 * 2 + -230) >>> -3 * -497 + 414 + -1905;
    const s = Gx().subarray(n + r, n + e), a = Tl(x, s);
    r += a.written, n = t(n, e, r, 1672 + -5 * -1483 + -9086) >>> 0;
  }
  return At = r, n;
}
function kc(x) {
  return x == null;
}
let fn = null;
function ht() {
  return (fn === null || fn.byteLength === 479 * -19 + 1453 * -1 + 3 * 3518) && (fn = new Int32Array(j.memory.buffer)), fn;
}
let An = Zt.length;
function Vl(x) {
  x < 7158 + -6 * 1171 || (Zt[x] = An, An = x);
}
function Gc(x) {
  const i = Zo(x);
  return Vl(x), i;
}
const Ho = {};
Ho.ignoreBOM = !0, Ho.fatal = !0;
const Oc = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Ho) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Oc.decode();
function Mx(x, i) {
  return x = x >>> 6968 + 134 * -52, Oc.decode(Gx().subarray(x, x + i));
}
function Ro(x) {
  An === Zt.length && Zt.push(Zt.length + (-8931 + 9995 * -1 + 18927));
  const i = An;
  return An = Zt[i], Zt[i] = x, i;
}
let Cn = null;
function Zc() {
  return (Cn === null || Cn.byteLength === -7359 + -7 * -1231 + -2 * 629) && (Cn = new Uint32Array(j.memory.buffer)), Cn;
}
function Na(x, i) {
  const t = i(x.length * 4, 4) >>> 0, e = Zc();
  for (let n = -9404 + -26 * -31 + 8598; n < x.length; n++)
    e[t / (-1 * -3341 + 6859 * -1 + -587 * -6) + n] = Ro(x[n]);
  return At = x.length, t;
}
function Fa(x, i) {
  x = x >>> 4301 * -1 + -622 + 4923;
  const t = Zc(), e = t.subarray(x / (8710 + 11 * -187 + -6649), x / (-3303 * -2 + 8546 + -15148) + i), n = [];
  for (let o = 337 * -25 + 1104 + 7321; o < e.length; o++)
    n.push(Gc(e[o]));
  return n;
}
function El(x, i) {
  const t = wn(x, j.__wbindgen_malloc, j.__wbindgen_realloc), e = At, n = wn(i, j.__wbindgen_malloc, j.__wbindgen_realloc), o = At, r = j.is_mobile_supported(t, e, n, o);
  return lr.__wrap(r);
}
const Ko = {};
Ko.register = () => {
}, Ko.unregister = () => {
};
const Ya = typeof FinalizationRegistry > "u" ? Ko : new FinalizationRegistry((x) => j.__wbg_licensevalidationresult_free(x >>> -23 * 215 + 2842 + 1 * 2103));
class lr {
  static __wrap(i) {
    i = i >>> -4164 + -194 * -5 + 3194;
    const t = Object.create(lr.prototype);
    return t.__wbg_ptr = i, Ya.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const i = this.__wbg_ptr;
    return this.__wbg_ptr = 1 * -2 + -3030 + 3032, Ya.unregister(this), i;
  }
  free() {
    const i = this.__destroy_into_raw();
    j.__wbg_licensevalidationresult_free(i);
  }
  constructor(i, t, e, n, o) {
    var r = kc(t) ? 0 : wn(t, j.__wbindgen_malloc, j.__wbindgen_realloc), s = At;
    const a = Na(e, j.__wbindgen_malloc), c = At, d = Na(n, j.__wbindgen_malloc), g = At, C = wn(o, j.__wbindgen_malloc, j.__wbindgen_realloc), u = At, p = j.licensevalidationresult_new(i, r, s, a, c, d, g, C, u);
    return this.__wbg_ptr = p >>> -233 * -13 + -913 * 1 + -2116, this;
  }
  get is_valid() {
    return j.licensevalidationresult_is_valid(this.__wbg_ptr) !== -4250 * -1 + -43 * -3 + 4379 * -1;
  }
  get features_json() {
    try {
      const e = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var i = ht()[e / 4 + (4569 * -2 + -4944 * 1 + -14082 * -1)], t = ht()[e / (1201 * 5 + 6841 + -1 * 12842) + (2837 + 6355 * 1 + 1313 * -7)];
      let n;
      return i !== 43 * 225 + -1 * -5935 + 1561 * -10 && (n = Mx(i, t).slice(), j.__wbindgen_free(i, t * (1 * 4289 + 4168 + -8456), -9631 * 1 + 235 * 38 + 26 * 27)), n;
    } finally {
      j.__wbindgen_add_to_stack_pointer(-2923 + -1 * 9431 + -1 * -12370);
    }
  }
  get errors() {
    try {
      const n = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_errors(n, this.__wbg_ptr);
      var i = ht()[n / (1174 * 1 + -7889 + 6719) + (-11232 + -312 * -36)], t = ht()[n / (4904 * 2 + -3707 + -469 * 13) + (-2544 + 41 * -20 + 3365)], e = Fa(i, t).slice();
      return j.__wbindgen_free(i, t * (-5654 + 219 * 1 + 5439), 119 * -26 + 7 * -949 + 1 * 9741), e;
    } finally {
      j.__wbindgen_add_to_stack_pointer(15105 + 1 * -15089);
    }
  }
  get warnings() {
    try {
      const n = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var i = ht()[n / (4973 + 134 * -62 + 53 * 63) + (-3461 * -2 + 7010 + -6966 * 2)], t = ht()[n / 4 + (-14731 + 1 * 14732)], e = Fa(i, t).slice();
      return j.__wbindgen_free(i, t * (1 * 8264 + -3 * 320 + -7300), -39 * -183 + -7640 + 507), e;
    } finally {
      j.__wbindgen_add_to_stack_pointer(94 + 1 * -2458 + 2380);
    }
  }
  get customer() {
    let i, t;
    try {
      const o = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = ht()[o / (-251 * 31 + 3001 + 8 * 598) + (-9552 + 48 * 199)], n = ht()[o / (-7382 * -1 + -9814 + -42 * -58) + (-1 * 135 + -332 * 19 + 12 * 537)];
      return i = e, t = n, Mx(e, n);
    } finally {
      j.__wbindgen_add_to_stack_pointer(-6514 * -1 + 4349 * -2 + 2200), j.__wbindgen_free(i, t, -8232 + -1 * -4079 + 67 * 62);
    }
  }
}
async function Ll(x, i) {
  if (typeof Response == "function" && x instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(x, i);
    } catch (e) {
      if (x.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
      else throw e;
    }
    const t = await x.arrayBuffer();
    return await WebAssembly.instantiate(t, i);
  } else {
    const t = await WebAssembly.instantiate(x, i);
    if (t instanceof WebAssembly.Instance) {
      const e = {};
      return e.instance = t, e.module = x, e;
    } else return t;
  }
}
function Dl() {
  const x = {};
  return x.wbg = {}, x.wbg.__wbindgen_string_get = function(i, t) {
    const e = Zo(t), n = typeof e == "string" ? e : void 0;
    var o = kc(n) ? -3 * 1161 + 8590 + 5107 * -1 : wn(n, j.__wbindgen_malloc, j.__wbindgen_realloc), r = At;
    ht()[i / (-7408 + 1 * 6683 + 729) + (-7781 + 1 * 3527 + 4255 * 1)] = r, ht()[i / (4464 + -77 * -8 + 108 * -47) + (-4413 + 388 * 24 + -71 * 69)] = o;
  }, x.wbg.__wbindgen_object_drop_ref = function(i) {
    Gc(i);
  }, x.wbg.__wbindgen_string_new = function(i, t) {
    const e = Mx(i, t);
    return Ro(e);
  }, x.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Ro(/* @__PURE__ */ new Date());
  }, x.wbg.__wbg_getTime_2bc4375165f02d15 = function(i) {
    return Zo(i).getTime();
  }, x.wbg.__wbindgen_throw = function(i, t) {
    throw new Error(Mx(i, t));
  }, x;
}
function Nl(x, i) {
  return j = x.exports, Hc.__wbindgen_wasm_module = i, fn = null, Cn = null, In = null, j;
}
async function Hc(x) {
  if (j !== void 0) return j;
  typeof x > "u" && (x = new URL("dot_embedded_bg.wasm", import.meta.url));
  const i = Dl();
  (typeof x == "string" || typeof Request == "function" && x instanceof Request || typeof URL == "function" && x instanceof URL) && (x = fetch(x));
  const { instance: t, module: e } = await Ll(await x, i);
  return Nl(t, e);
}
function Xi(x, i, t, e, n) {
  return Ze(i - -933, e);
}
function lx(x, i, t, e, n) {
  return Ze(t - -541, n);
}
function Z0(x, i, t, e, n) {
  return Ze(n - 696, e);
}
(function(x, i) {
  function t(r, s, a, c, d) {
    return Ze(r - -429, a);
  }
  function e(r, s, a, c, d) {
    return Ze(c - -138, a);
  }
  const n = x();
  function o(r, s, a, c, d) {
    return Ze(d - -210, c);
  }
  for (; ; )
    try {
      if (parseInt(e(132, 170, "$&OT", 151, 147)) / 1 + parseInt(e(154, 158, "mqWL", 150, 148)) / 2 + -parseInt(e(195, 148, "2nyL", 171, 188)) / 3 + -parseInt(t(-107, -84, "gvNy", -130, -102)) / 4 + parseInt(o(61, 56, 100, "N3ze", 81)) / 5 * (parseInt(t(-101, -101, "Vhj@", -91, -90)) / 6) + parseInt(e(159, 193, "$&OT", 183, 185)) / 7 + -parseInt(t(-139, -154, "KrO[", -117, -150)) / 8 === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Xx, 68067 * -11 + -428814 * -2 + 334796);
function Ze(x, i) {
  const t = Xx();
  return Ze = function(e, n) {
    e = e - (-3217 * 1 + -8765 * -1 + -5262);
    let o = t[e];
    if (Ze.uAHCoO === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          p += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[p], u[p] = m;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, m = u[l], u[l] = u[p], u[p] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Ze.DMLzOv = d, x = arguments, Ze.uAHCoO = !0;
    }
    const s = t[-391 + 23 * 17], a = e + s, c = x[a];
    return c ? o = c : (Ze.OZTZol === void 0 && (Ze.OZTZol = !0), o = Ze.DMLzOv(o, n), x[a] = o), o;
  }, Ze(x, i);
}
function Ma(x, i, t, e, n) {
  return Ze(e - -404, i);
}
function Fl(x, i, t, e, n) {
  return Ze(t - -510, x);
}
var Is;
class Yl {
  constructor() {
    V(this, Is, !1);
  }
  async [(Is = Z0(1022, 994, 978, "9%[g", 1e3) + Z0(1047, 998, 1022, "$&OT", 1021) + Ma(-83, "gvNy", -120, -103), Xi(-617, -623, -619, "CK8["))](i = Xi(-651, -633, -616, "Vhj@")) {
    function t(s, a, c, d, g) {
      return Z0(s - 36, a - 371, c - 338, s, a - -1424);
    }
    function e(s, a, c, d, g) {
      return Xi(s - 211, a - 1596, c - 223, c);
    }
    function n(s, a, c, d, g) {
      return Fl(c, a - 347, g - 137);
    }
    function o(s, a, c, d, g) {
      return lx(s - 419, a - 175, g - 1190, d - 460, c);
    }
    function r(s, a, c, d, g) {
      return lx(s - 274, a - 350, c - -399, d - 412, g);
    }
    try {
      const s = i + "/" + Pl;
      await Hc(s), this[r(-648, -626, -623, -608, "I!7!") + n(-37, -58, "lCyc", -50, -49) + n(-46, -81, "8NWB", -86, -71)] = !0;
    } catch {
      this[o(966, 949, "ol#O", 965, 954) + o(937, 956, "8NWB", 938, 963) + n(-57, -91, "dE&#", -61, -80)] = !1, console[n(-61, -72, "ol#O", -33, -50)](e(1012, 990, "w!lC") + n(-21, -46, "f^%N", -31, -37) + n(-49, -58, "Pkxz", -59, -67) + n(-58, -51, "Pkxz", -69, -62) + t("IE[w", -402, -376) + o(967, 980, "VDHz", 963, 957) + r(-664, -632, -646, -669, "hOKb") + o(932, 944, "dxV9", 960, 956) + o(959, 1003, "uSLz", 1e3, 983) + r(-589, -615, -609, -600, "xm1z") + n(-102, -89, "DTw$", -86, -78) + o(955, 993, "Vl4Y", 975, 968) + e(995, 996, "mqWL") + o(970, 984, "g]2r", 948, 964) + n(-72, -68, "^Tle", -41, -57) + o(969, 957, ")p@o", 993, 969) + e(976, 959, "@Pk[") + n(-74, -63, "T^YM", -70, -70) + "n.");
    }
  }
  [Z0(1015, 995, 1015, "N3ze", 1014) + lx(-240, -250, -229, -247, "u^7h") + lx(-239, -223, -228, -204, "g]2r") + "ed"]() {
    function i(n, o, r, s, a) {
      return Z0(n - 258, o - 180, r - 202, n, a - -824);
    }
    function t(n, o, r, s, a) {
      return Ma(n - 422, r, r - 62, o - 327);
    }
    function e(n, o, r, s, a) {
      return Z0(n - 22, o - 377, r - 175, n, r - 168);
    }
    return this[t(216, 209, "^Ww0") + e("i(Nt", 1179, 1156) + i("gvNy", 163, 168, 160, 173)];
  }
}
function Xx() {
  const x = ["W5xcTIHWDCktWPJcUvThr8otWQO", "E392oMP8WORcMNZdHI86nG", "E3TtWQa", "WQZdJCkWmCkm", "WO/dRg8HjW", "W7NdQCkaWPBcHq", "WRJdPSo0WQZdVG", "D8kvWO/cUYX9WOxdMG", "W5SOW5/dHSklWQylW5FcHCo6WONcNG", "EqWTkcRdVMZcNSobW47dLmojW5a", "W6Dmr8k4W6m", "W4yucmo8W7W5W6iCW6nKiMCQ", "jH1OW7ZdIa", "zmoCWOzJBW", "x2DrW6FcRsBcQCk9WRetBCo/mW", "W5tdUIvlW48", "WRXPjCoCWOS", "W7xcOgD7bCkGWOJcPGO6z8ocW7i", "yKC8WQdcJ8kKWPqujmkWW5WMWPK", "W5pcSIL/F8kwW4RcI2PdAmoV", "W41+WPhdQCkNdmk8scBdPdVcLxS", "lmoxomk0WQFcJCoPkaBdS8o+W7y", "WO9JW7pcSCk6", "WO42fSoVDa", "WOZcTvFdOSk2", "W7HGWPCDWRi", "oZbUWPNdOW", "y2XzWP3dHCkHECon", "uCoYW6fof8kjWPVdMt/dKqZcUG", "W74uW559WOxdN8o1WQ/cQCoItcNcMW", "ACoqWR/cOXu", "jci8BdW", "tdveW5XH", "WOCICI7dTW", "ECkTWQPLWRa", "E3TsWQns", "veFdJ8onWRG", "qSkIoYWz", "W7VcHt7cHCot", "W7SqW5v0WOxdN8o0WOpcVmo0xdxcNq", "WQJcJNVdOW", "h1tdSCoCWRi", "WPPQxSkKWRS", "wGRdV1pdJG", "tJvkW5bK", "uH/dULxdMG", "fSkEW5VdJv8", "W6mBW6NcIZ4", "FmkxwCoTW60", "iGTJp8op", "dSkQWQeCdG"];
  return Xx = function() {
    return x;
  }, Xx();
}
class ji extends Error {
  constructor() {
    super(...arguments);
    V(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
(function(x, i) {
  function t(a, c, d, g, C) {
    return le(d - -35, g);
  }
  function e(a, c, d, g, C) {
    return le(a - 334, c);
  }
  function n(a, c, d, g, C) {
    return le(C - -837, a);
  }
  var o = x();
  function r(a, c, d, g, C) {
    return le(C - 492, d);
  }
  for (; ; )
    try {
      var s = parseInt(e(705, "2o(c", 736, 714, 737)) / 1 + parseInt(e(688, "IL61", 673, 715, 712)) / 2 + -parseInt(r(788, 826, "ViOH", 815, 816)) / 3 + parseInt(n("j]C@", -536, -487, -487, -507)) / 4 + -parseInt(r(843, 853, "MQAm", 826, 827)) / 5 * (-parseInt(n("IL61", -524, -477, -489, -496)) / 6) + parseInt(r(816, 819, "MQAm", 808, 824)) / 7 * (-parseInt(t(350, 333, 322, "a0QJ", 341)) / 8) + parseInt(t(319, 309, 311, "bRP4", 323)) / 9 * (parseInt(t(315, 324, 331, "bRP4", 312)) / 10);
      if (s === i) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(jx, 264562 + -2 * -362759 + 91801 * -3);
function jx() {
  var x = ["hXhdIMua", "WPLKBSocW6u", "zaPWWQFdSG", "WQxdI8kjWQzLjNVdPJVdGmor", "zmkaWPyRWRC", "c1m7WRqqWPpcVYZcTGZdKqO", "dmoOrCoxWP8", "CmkHW5xdUM8", "W5NcVCksW7n5", "W5ZcUCku", "WR3cT8kCet3cIaRcNCkegqLvW48", "WO/cNWBcNCkZ", "W54QrNnp", "BsNcNSoAW6a", "xSk8W6hcHWu", "W4O5w25v", "W7ZdImk6W5OsWOj9d8kvWQ7dP8oC", "WOhdIXXUWOu", "aSoZFez/kc/dG8oc", "W5O/t8oLsW", "w8ofka", "aCo3Fr9jedFdLSo2hW", "WQRcJCoKWPPu", "WO9UACokW6O", "bCkzFMqqW7dcNCkVh8oJWOf8yq", "W6FdO8oAr2e", "uSkGW7tcRb4", "xrVdPGmPhWSmm00z", "s8k6fCkiW740W7bCi8kpW5ZcUq", "y8kTWPa2WOq", "vSkICGKd", "WRn7W60", "W5hcM8kACCkvnSkyCG", "bSoVWOldTaK", "o2RdNmkwWRZdKGRdOSkCWOpdKq", "WOVdKCkQAmk3", "WRldICoXW688W4n9WRVdGmk2WPOttG", "W5ClW7xdGwy", "imkEw8oglW", "W6ZdT8oDugy", "xr/dRamSrhWraM4FkCkp", "kqNdICkFWQ0", "WPHUCW", "WOvpWQNcGs3cPrpcLW1TW4NdQq", "u8kYiLXk", "dmoWnWmTfcT9WPu", "q0ddRCkL", "cHFdRG", "hHFdVmoIFq", "ebpdQCo1ya", "wCkUk0a", "grZdRSo3AW", "W5pcKCoRoCoLC8kXBrldLxbr", "aCkFccfLWRtdI8ki", "y8omgmkPnCkMW6pcHrhdNq", "WQ1XW7e", "bL0VdYm", "W6SOWQ5CW58rW53dOK9jWOu", "WRBdHgi", "W5JcR8kNW75W", "duOZ", "m1KIW6dcV3dcNmkrF8orW6VdMG", "ECkAWQyZWOq"];
  return jx = function() {
    return x;
  }, jx();
}
function _i(x, i, t, e, n) {
  return le(x - -69, t);
}
function le(x, i) {
  var t = jx();
  return le = function(e, n) {
    e = e - (-7990 * 1 + 5479 + -5 * -567);
    var o = t[e];
    if (le.XsnQsB === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (var O = 0, D = u.length; O < D; O++)
          p += "%" + ("00" + u.charCodeAt(O).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, s = function(g, C) {
        var u = [], p = 0, m, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[p], u[p] = m;
        l = 0, p = 0;
        for (var W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, m = u[l], u[l] = u[p], u[p] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      le.atbIJO = s, x = arguments, le.XsnQsB = !0;
    }
    var a = t[4253 * -1 + -98 * -83 + -1 * 3881], c = e + a, d = x[c];
    return d ? o = d : (le.aRANdw === void 0 && (le.aRANdw = !0), o = le.atbIJO(o, n), x[c] = o), o;
  }, le(x, i);
}
function pt(x, i, t, e, n) {
  return le(e - 345, x);
}
function Ji(x, i, t, e, n) {
  return le(e - 551, i);
}
function Xa(x, i, t, e, n) {
  return le(i - -519, n);
}
function Ui(x, i, t, e, n) {
  return le(t - 988, i);
}
var L0, Gn;
class ja {
  constructor(i) {
    ne(this, L0);
    ne(this, Gn);
    function t(s, a, c, d, g) {
      return le(s - -816, d);
    }
    this[e(747, 766, 789, "MQAm") + e(761, 752, 739, "d(oY")] = i;
    function e(s, a, c, d, g) {
      return le(a - 408, d);
    }
    function n(s, a, c, d, g) {
      return le(c - -128, s);
    }
    function o(s, a, c, d, g) {
      return le(d - 965, a);
    }
    function r(s, a, c, d, g) {
      return le(d - -929, c);
    }
    try {
      $(this, L0, i[n("TgX#", 228, 219, 229, 230) + e(763, 760, 756, "s2sg", 752) + e(780, 764, 776, "Z@*D", 739)] && JSON[e(753, 733, 750, "GQ7o", 746)](i[e(787, 770, 758, "@E(!", 773) + o(1369, "Z@*D", 1371, 1343, 1363) + r(-581, -584, "2o(c", -560, -530)])), $(this, Gn, i[n("mT%o", 193, 199, 180, 181) + t(-471, -499, -480, "2o(c", -477)]);
    } catch (s) {
      console[e(795, 772, 799, "MQAm")](s);
    }
  }
  get [pt("sf8@", 671, 665, 678) + "id"]() {
    function i(n, o, r, s, a) {
      return pt(n, o - 196, r - 351, r - 196);
    }
    function t(n, o, r, s, a) {
      return pt(o, o - 134, r - 59, s - 348);
    }
    function e(n, o, r, s, a) {
      return pt(r, o - 404, r - 493, o - 454);
    }
    return this[t(1003, "S43*", 1013, 1022) + t(1055, "ViOH", 1059, 1032)][i("Dt&Z", 933, 917) + e(1134, 1133, "Ov@S")];
  }
  get [pt("cUOG", 642, 641, 673) + "s"]() {
    function i(e, n, o, r, s) {
      return Ji(e - 240, n, o - 188, e - -488);
    }
    function t(e, n, o, r, s) {
      return pt(s, n - 186, o - 48, n - -965);
    }
    return this[t(-264, -269, -240, -257, "a0QJ") + i(448, "6XF^", 466)][t(-256, -243, -267, -233, "SiYb") + "s"];
  }
  get [Xa(-141, -164, -179, -187, "Eki0") + Ui(1374, "jPfP", 1360)]() {
    function i(e, n, o, r, s) {
      return pt(o, n - 60, o - 413, e - 380);
    }
    function t(e, n, o, r, s) {
      return Ui(e - 363, o, e - -1085);
    }
    return this[i(1061, 1034, "j]C@") + i(1088, 1108, "@E(!")][t(229, 259, "S43*") + i(1099, 1104, "bE3r")];
  }
  get [_i(268, 247, "Z@*D") + "b"]() {
    return L(this, L0);
  }
  get [_i(284, 293, "ViOH") + pt("6XF^", 739, 741, 731)]() {
    return L(this, Gn);
  }
  get [Ui(1370, "6XF^", 1361) + Ji(907, "bRP4", 870, 900) + pt("Dt&Z", 682, 699, 688) + Xa(-154, -159, -146, -164, "3FWQ")]() {
    var n, o;
    function i(r, s, a, c, d) {
      return pt(s, s - 272, a - 243, r - -242);
    }
    function t(r, s, a, c, d) {
      return _i(a - 354, s - 445, s);
    }
    function e(r, s, a, c, d) {
      return Ji(r - 439, r, a - 286, d - -1343);
    }
    return !!((o = (n = L(this, L0)) == null ? void 0 : n[t(634, "WL^q", 664) + t(650, "@E(!", 646)]) != null && o[i(486, "iU]&", 510) + e("b56f", -445, -468, -471, -461) + e("@E(!", -447, -440, -416, -427) + e("Dt&Z", -442, -410, -390, -411) + e("bE3r", -420, -427, -448, -422) + i(443, "cUOG", 426) + t(666, "BT^w", 669) + "d"]);
  }
}
L0 = new WeakMap(), Gn = new WeakMap();
(function(x, i) {
  function t(s, a, c, d, g) {
    return be(s - 736, c);
  }
  function e(s, a, c, d, g) {
    return be(s - 807, a);
  }
  const n = x();
  function o(s, a, c, d, g) {
    return be(c - -886, d);
  }
  function r(s, a, c, d, g) {
    return be(g - 181, s);
  }
  for (; ; )
    try {
      if (parseInt(e(1192, "gp9w", 1105, 1271, 1092)) / 1 * (-parseInt(e(1207, "X1xY", 1171, 1213, 1192)) / 2) + parseInt(r("atpx", 757, 765, 623, 651)) / 3 + -parseInt(e(1245, "*Z21", 1177, 1332, 1148)) / 4 + -parseInt(o(-559, -468, -457, "*Z21", -376)) / 5 * (-parseInt(t(1149, 1073, "Xn66", 1050, 1054)) / 6) + -parseInt(t(1085, 992, "4Pli", 1044, 1105)) / 7 + parseInt(t(1300, 1216, "X1xY", 1326, 1212)) / 8 * (parseInt(r("8e8s", 638, 663, 617, 717)) / 9) + parseInt(r("X1xY", 609, 650, 574, 572)) / 10 === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(_x, 558313 + -106329 * 1);
function Ce(x, i, t, e, n) {
  return be(t - -217, x);
}
function _x() {
  const x = ["W6S5WPFdPq", "hw/dL8klmq", "jCk8eIq", "W5BdNs7cICo8", "pSk0gI/cHG", "WPi3cmoWbq", "W6ZdG8obnxi", "WPOtomk7dq", "fSk+rbddTa", "W785i8krfq", "lCk2vrVdSW", "wSkXW4hcN8o2", "WOvMWQKMW6O", "WQXQW5VcPJf/xI8EWQCYWPW", "yWxdUWJdOW", "rCkpWRWHcW", "W5RdJmk1WRxcLG", "WRiHqmkqvG", "WR7cHZhdTmkg", "WPlcGKNdSCk8W6buWRxcOCoSW5m", "hq9EuSkX", "WPbABwyb", "wSoyrhJdVa", "h2tdKmkQdG", "WQOSpCkXoa", "WRxdTbtcN20", "W5/cObtdRSon", "thHeW4mO", "WQNdVbZcIwW", "WOvADMCh", "kCk+qH3dTq", "aCk7W5tdOG4", "WONcLmoDdvldGWin", "u2GuW6NcNG", "WRpdKSo/W5/cMW", "wXVdSW", "xCkQW7FcQSoz", "a8oJntni", "tgfe", "tN5oW7WY", "WOyonSkqcW", "WOPQWQqWW6e", "WQJcMvri", "aKBcP1NcLeu8WPtcSIJdNL8T", "WP7cJe5vqa", "xSk+W5ZdVXC", "EM1sW6jH", "DXngWOFcTq", "W4irlJ9kc8o7f8kAahhcU8on", "W5eVdq", "p0bcWPVcLa", "xMaj", "rhmwW7JcIa", "WPmolCkrdq", "W6ldUSkzWRe", "WPOtpSkAmW", "lCkREHFdVG", "W7vMW4BcRSkS", "imkRuZldTa", "xNqFWRpcGa", "W73dNw5Hwe9JWPS", "W6ddK8kWW7u/", "gvNdGSkxoa", "W48sc8kWgG", "lKqosSk+", "W6zpW6dcPLi", "WRHSWOm", "WR50WOKvW7K", "zmo8x8kmWRi", "pSkYbW/cKa", "wCkzw3ZcVW", "tCk+W5RdOHa", "W7C9WPVdSM4", "o8k3fqpcUW", "arHNumk5", "W4qqnmkTmq", "hfCos8kL", "sSoGW5RcMd4", "W40Vc8orCq", "W7tcPLddMJO7kb3dS8kZmbNcQq", "t8o6W67cNcm", "W5xdHCoa", "WQxcHf9ErW", "krG1uCkx", "W7vMW5pcUCkX", "WO8Se8k9cq", "fg7dH8kpfq", "WQepz8oDoG", "aHLMCmki", "xSk5W5BcMCoW", "zSo2s8kOWQy", "WO/dJCo8WQJdRa", "W4CLgCkqBq", "W4LPWQu2W6O", "W6W/WOxdL2C", "rg9eW6eY", "WR1PWO4uW68", "W4uqpSk6mq", "WQu3mCkNjq", "W5RcJaddGCoG", "Emk5WPhcR8of", "xHFdSqtdKG", "W68PhmkuDG", "W5/dUSkeWRC", "egddKmkncq", "WOddPXtcG3O", "WP5AsLKY", "yXfKWQlcJtv4WRa", "WQ3cIfPAxa", "W6FcUbJdQCoH", "W6fSW4a", "W7j3W5RcVG", "wHxdVqq", "WPu7gCk+hW", "ugNcQrBdRq", "rmk9W5hcPCoY", "dGrcDmkR", "zCoeW6pcMsC", "W6ldG8k1WRBcLa", "W4VdRJ3cNZi", "wCoYv8kQ", "wmkTW5NdUaC", "WQVcR8k8", "A8o9smoNWR8", "qSkJW5BdSbC", "W4aLeCkcFq", "hd4sWRLZo3xcMaq0pu5z", "WRTIWP9TbW", "WQjIWOf3ga", "hxpdLSkbeW", "mJldQIy", "yCowufdcRG", "W4Ofcmk7wW", "WQ/cPmkmm2S", "WPLCu2aq", "W6/dGgBdVSkEWPKKarS", "WQPVWOfnbW", "pSk0aY/cJa", "WQP3WOvT", "WPhdHCo5W7pcNa", "WQhcJeHyqq", "WQLNW6jFW6q", "WP8RfCk3pa", "WPLbFgWD", "t8oQFK3cKG", "W57dR8kHWRdcKq", "WRFcQCk6owq", "WRTPWPmiW64", "WQVcIfHFta", "uCo/rq", "t8oQW5ZcKYm", "mKldTSk6aa", "W4Kskq", "bCkUaSo2W7bfDmodWRNdL8kIW6P+", "zbDsWOG", "W6FdQrVdOSoa", "pbxdQqTs", "crbM", "o2lcSYNdLq", "umkKWQKabW", "WQaUW69vW74", "uMiEW7NcIq", "lSk7WRZcUCof", "iSkQrqRdSG", "W7W5WOhdOMm", "W7KZWPRdV2i", "WRfNsYK/", "WRhcOCk6m20", "wX3dTW/dJW", "dZzmwmk5", "fZxdRYXy", "WPu2fCkK", "WPitk8k7eG", "WPzAChOa", "pI7dVIze", "mHzeDSk5", "W7SZWPVdLgS", "WP1hBh0D", "DHHtWOpdOa", "W4aqlSkspq", "WRi3xmkuiW", "b1KDqCka", "W5BcUWxdPmor", "n8kEDwqT", "bav6zSkR", "omksDq", "WOxdTCobWOJdMW", "W7tcU0S", "nNdcSW", "jKeyW5xdSmkvW6vbWPpcQSkC", "WPznCxOw", "W4NdSWxcNZa", "WPyKkSk8", "wmoDAmkiWQq", "h8o/WOpcP1fDW47cNmkBWQawcuS", "ybGhW47dHxKRWOpdV8ofW7uXWR8", "W75bW4lcMfC", "cJ57FmkS", "WRpcKI0", "nJNdVG", "W57cGbNdOSox", "o1v6WPhcNW", "pCkXWO3cV8kl", "WQPUWOG", "zrDyWQ7cTr1sWR0", "W7bXW53cVSk3", "WOddQmoCWR7dIq", "DmklW6VcOSow", "W4qAnmkQjG", "dGrky8k5", "WQ4KkSk3pG", "pmkWWORcN8og", "Ee1FWPVcMq", "WQ3cHZhdSCkC", "W57cGSoDng8", "ewVdKCkNoa", "WP8snSkk", "fmk8WOhcHdS6W75WWO0", "W43dLrq", "W53dKmowpG", "bGfMCSkv", "WP8Dm8kxbq", "hMtdKmkncq", "WPOhD8ovDa", "reJcRZ7cVa", "pxNcSZJdQG", "t2LfW6SK", "n8ognHLT", "g0qvs8k4", "uSkVWQ4PpG", "g8o7WO3cOLmfWR7cKCk2WRmS", "WQeiC2aq", "DSkyzcOJ", "WO3cMSkayI7dVIOfzX3dQq", "W4Oqka", "ECkUW70iiq", "rSkQW4VcLmoS", "jSk6qJldTa", "uMlcRJFcOG", "W4pcUX7dPCox", "W4xdUSkFWRFcMW", "W4vkW5FcGG", "WORcKmkaBsNcQ3mgDWxdTConFq", "qrxdUapdHq", "WQHVW6Hu", "fwtdLG", "WRjVW7nuW6m", "mmk+WORcUCod", "hgtdGmoa", "WO3dS8ohWQtdMW", "WQfRW6DBW78", "gMtdGmkkba", "WPrdBSoPy8kHl8o+rG9OWR0", "WRf0WPi", "W7KZWP3dLgC", "uCoOwCk2", "mhBcTd7dKG", "WPelymo0Dq", "WRxcMI3dS8kB", "WQhdUHlcQwu", "WPpdKSo/W5/cMW"];
  return _x = function() {
    return x;
  }, _x();
}
function Lt(x, i, t, e, n) {
  return be(t - -399, i);
}
function kt(x, i, t, e, n) {
  return be(t - -245, n);
}
function Le(x, i, t, e, n) {
  return be(i - 829, n);
}
function Ie(x, i, t, e, n) {
  return be(i - 242, e);
}
function be(x, i) {
  const t = _x();
  return be = function(e, n) {
    e = e - (-29 * 60 + 4607 + 229 * -11);
    let o = t[e];
    if (be.vOPDCS === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          p += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[p], u[p] = m;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, m = u[l], u[l] = u[p], u[p] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      be.ymBuBb = d, x = arguments, be.vOPDCS = !0;
    }
    const s = t[-4688 + -2661 * 1 + -7349 * -1], a = e + s, c = x[a];
    return c ? o = c : (be.ykinSj === void 0 && (be.ykinSj = !0), o = be.ymBuBb(o, n), x[a] = o), o;
  }, be(x, i);
}
var fs, Cs, ps;
class Ml {
  constructor(i) {
    V(this, ps);
    V(this, Cs, [Le(1238, 1257, 1189, 1260, "ckW4") + Le(1331, 1409, 1486, 1502, "J#Df") + "ic", Ie(718, 650, 627, "X1xY") + Ce("DR0R", 296, 299) + "ic"]);
    V(this, fs);
    function t(n, o, r, s, a) {
      return be(s - -957, a);
    }
    function e(n, o, r, s, a) {
      return be(n - -153, o);
    }
    this[t(-557, -703, -681, -589, "XcEg") + e(269, "z#U6") + "d"] = i;
  }
  async [(ps = Ie(547, 661, 686, "fO11") + "se", Cs = Ie(796, 688, 559, "Hps5") + Ie(813, 833, 801, "l1xY") + Ce("V42Q", 324, 204) + Le(1368, 1328, 1269, 1394, "0!)O"), fs = Ie(901, 846, 929, "[IrB") + Ce("0!)O", 483, 380), Lt(-46, "XcEg", 13))](i = kt(201, 256, 243, 356, "KO52"), t) {
    function e(c, d, g, C, u) {
      return Ce(d, d - 165, u - 756);
    }
    function n(c, d, g, C, u) {
      return Ie(c - 42, g - 463, g - 180, u);
    }
    function o(c, d, g, C, u) {
      return kt(c - 456, d - 34, c - -688, C - 98, d);
    }
    function r(c, d, g, C, u) {
      return Ie(c - 268, C - 441, g - 149, c);
    }
    const s = await this[a("nEI&", 910, 827, 874, 885) + o(-573, "atpx", -528, -632) + a("HEY!", 1027, 974, 859, 898)](t);
    await Promise[e(1076, "$S4W", 1215, 1071, 1132) + e(1019, "DR0R", 992, 1108, 1048)]([this[o(-561, "atpx", -445, -578) + a("nEI&", 1111, 1004, 1041, 1064) + "d"][r("^cxK", 1139, 1117, 1050)](i), this[n(1002, 1055, 1082, 1087, "Kf!Y") + r("8byN", 1254, 1304, 1241) + "e"](s)]);
    function a(c, d, g, C, u) {
      return Ce(c, d - 185, u - 727);
    }
    this[e(955, "8byN", 1010, 980, 978) + r("z#U6", 1278, 1133, 1167) + a("GfLJ", 1020, 1061, 877, 1008)]();
  }
  async [kt(147, 200, 173, 140, "]aJ7") + Ce("d%(f", 376, 342) + "se"](i) {
    function t(s, a, c, d, g) {
      return kt(s - 214, a - 362, a - 165, d - 214, d);
    }
    function e(s, a, c, d, g) {
      return Ce(g, a - 353, c - 823);
    }
    function n(s, a, c, d, g) {
      return Ce(g, a - 348, c - -203);
    }
    function o(s, a, c, d, g) {
      return Lt(s - 284, d, a - 836);
    }
    function r(s, a, c, d, g) {
      return Ie(s - 253, g - 430, c - 79, s);
    }
    try {
      if (t(556, 486, 358, "GTY0", 583) === o(979, 908, 780, "8byN", 860)) {
        const s = await fetch(i);
        if (!s.ok) {
          if (t(292, 414, 367, "^p!]", 544) !== n(100, -43, 46, 104, "nEI&")) return _0x8ff025[n(206, 244, 161, 77, "KO52") + r("[IrB", 1020, 1224, 1150, 1121)][e(1080, 1113, 1060, 1035, "S277") + o(846, 836, 954, "$S4W", 817)];
          throw new Error(t(312, 282, 386, "l1xY", 222) + o(906, 989, 1051, "z#U6", 1104) + e(910, 1088, 1016, 887, "*Z21") + n(216, 90, 137, 54, "&zK@") + "d.");
        }
        this[n(73, -11, -56, 61, "8byN") + "se"] = await s[t(255, 377, 452, "atpx", 388)]();
      } else _0x17df96[r("XcEg", 1061, 1061, 1140, 1136) + r("Efo7", 1361, 1321, 1264, 1239)](_0x21150f);
    } catch (s) {
      n(244, 170, 154, 155, "Xn66") !== r("]aJ7", 1228, 1397, 1395, 1280) ? (this[o(850, 918, 856, "HEY!") + "se"] = void 0, console[n(-35, -15, 90, 110, "XcEg")](s)) : this[e(1079, 902, 974, 894, "XcEg") + t(406, 525, 517, "0!)O") + "d"] = _0x28cf40;
    }
  }
  async [Ie(644, 754, 735, "XcEg") + Ce("Xn66", 373, 390) + "e"](i) {
    function t(s, a, c, d, g) {
      return Ie(s - 37, d - -233, c - 247, g);
    }
    function e(s, a, c, d, g) {
      return Ce(a, a - 451, c - -330);
    }
    function n(s, a, c, d, g) {
      return Lt(s - 30, s, a - 1253);
    }
    function o(s, a, c, d, g) {
      return kt(s - 204, a - 164, g - 973, d - 204, c);
    }
    if (this[e(32, "KO52", -19) + t(562, 380, 423, 452, "&zK@")] = void (1 * -8229 + -9561 + 2 * 8895), !i) {
      if (r(1425, 1404, "XcEg") === r(1198, 1176, "*j]m")) return _0x116171;
      console[n("zV$z", 1291)](e(-21, "aXH$", -116) + r(1168, 1232, "l1xY") + r(1232, 1203, "&zK@") + e(-35, "S277", -138) + r(1341, 1249, "]aJ7")), this[o(1130, 1132, "GTY0", 1282, 1211) + "se"] = void 0;
      return;
    }
    function r(s, a, c, d, g) {
      return Ce(c, a - 39, a - 1022);
    }
    await this[r(1334, 1319, "Efo7") + t(466, 415, 366, 375, "OaVQ") + "se"](i);
  }
  async [Le(1199, 1184, 1288, 1113, "aXH$") + Le(1344, 1411, 1362, 1514, "d%(f") + Le(1438, 1340, 1458, 1384, "hnK4")](i) {
    function t(a, c, d, g, C) {
      return Ie(a - 37, d - 98, d - 496, C);
    }
    if (i) {
      if (s(818, "hnK4", 825) !== s(721, "*j]m", 768)) return i;
      _0x245ff5 instanceof _0x44a853 && _0x282948[s(801, "fF&C", 878) + t(778, 841, 846, 820, "d%(f")](_0x1a8eed);
      return;
    }
    const e = await fetch(this[o(200, 5, 78, -1, "gp9w") + r(429, 440, "hnK4", 334) + n("]aJ7", -95, -88) + o(137, 116, 25, -96, "4Pli")][6260 + 1231 * 5 + -12415]);
    function n(a, c, d, g, C) {
      return Lt(a - 466, a, d - -147);
    }
    function o(a, c, d, g, C) {
      return Ie(a - 431, d - -668, d - 420, C);
    }
    function r(a, c, d, g, C) {
      return Le(a - 217, c - -991, d - 431, g - 4, d);
    }
    function s(a, c, d, g, C) {
      return Ie(a - 166, d - 110, d - 264, c);
    }
    if (e.ok) {
      if (n("OaVQ", -109, -194) !== o(217, 30, 125, 234, "atpx")) return this[t(947, 1021, 905, 779, "0!)O") + n("iMIh", -98, -33) + t(827, 787, 858, 827, "FBSZ") + t(1055, 827, 935, 1001, "$S4W")][1301 + 1 * -6737 + 18 * 302];
      throw new _0x2eb8ce(s(834, "fO11", 826) + r(313, 408, "^cxK", 527) + t(570, 640, 696, 583, "Hps5") + s(929, "GfLJ", 902) + "d.");
    }
    return this[o(181, 99, 123, 196, "d%(f") + n("X1xY", -191, -149) + t(776, 977, 885, 943, "*j]m") + r(363, 406, "Efo7", 535)][6209 * -1 + -2345 + -5 * -1711];
  }
  [Ie(648, 744, 873, "KO52") + Le(1250, 1320, 1280, 1366, "CK[b") + "s"](i) {
    function t(n, o, r, s, a) {
      return Ce(r, o - 52, o - -735);
    }
    function e(n, o, r, s, a) {
      return Ce(o, o - 177, n - 369);
    }
    i[t(-393, -427, "J#Df") + "ch"]((n) => console[e(502, "gp9w")](n));
  }
  [Ie(778, 739, 723, "XcEg") + Le(1243, 1330, 1432, 1383, "0!)O") + Lt(122, "*Z21", 139)](i) {
    function t(e, n, o, r, s) {
      return Ce(n, n - 17, o - 975);
    }
    i[t(1276, "atpx", 1208) + "ch"]((e) => console[t(1300, "4Pli", 1335)](e));
  }
  [Ce("]aJ7", 330, 263) + Lt(258, "hnK4", 161)]() {
    function i(e, n, o, r, s) {
      return Le(e - 52, n - -678, o - 374, r - 30, r);
    }
    function t(e, n, o, r, s) {
      return Ie(e - 139, r - -114, o - 216, o);
    }
    return window[t(606, 567, "]aJ7", 671) + i(519, 565, 585, "laLI")][t(490, 468, "l1xY", 501) + t(623, 738, "z#U6", 623)];
  }
  [Le(1496, 1407, 1451, 1465, "KO52") + Lt(134, "iMIh", 116) + Ie(854, 774, 694, "nEI&")]() {
    function i(r, s, a, c, d) {
      return Ie(r - 117, d - -843, a - 434, c);
    }
    function t(r, s, a, c, d) {
      return Ce(a, s - 410, c - 431);
    }
    function e(r, s, a, c, d) {
      return Ie(r - 154, a - 339, a - 422, s);
    }
    function n(r, s, a, c, d) {
      return kt(r - 164, s - 150, s - -277, c - 34, c);
    }
    function o(r, s, a, c, d) {
      return Ce(s, s - 437, c - 105);
    }
    try {
      if (n(82, -3, -56, "]aJ7", -54) === n(40, 0, 31, "zV$z", -46)) this[e(1251, "Hps5", 1179, 1187, 1133) + "se"] = void (19 * 347 + 1 * -9931 + -3338 * -1), _0x29d4ff[o(571, "]aJ7", 438, 474, 467)](_0x1f3108);
      else {
        if (!this[n(-71, 12, -54, "Xn66", 82) + "se"]) {
          if (e(1049, "GTY0", 1137, 1257, 1254) === o(538, "d%(f", 562, 477, 538)) throw new ji(e(1046, "*j]m", 1121, 1168, 1202) + n(-50, 5, -18, "Sc5p", 90) + e(882, "gp9w", 955, 1052, 1054) + t(453, 568, "atpx", 575, 540) + ".");
          return;
        }
        if (!this[o(240, "&zK@", 343, 295, 197) + o(357, "]aJ7", 422, 335, 315) + "d"][i(49, 88, 42, "*j]m", -28) + e(1028, "GTY0", 977, 858, 1071) + i(-159, -59, -289, "XcEg", -184) + "ed"]())
          if (n(-171, -111, -8, "]aJ7", -69) !== o(461, "fF&C", 338, 418, 432)) _0x2fcb6e[o(336, "CK[b", 285, 344, 333)](_0x575fdb);
          else throw new ji(i(19, -137, -112, "z#U6", -98) + i(-41, -102, -2, "d%(f", -66) + i(-257, -131, -246, "(Do8", -156) + e(922, "^p!]", 1004, 996, 1110) + ".");
        this[e(1081, "*j]m", 961, 895, 902) + i(-279, -335, -109, "vpqe", -238)] = new ja(El(this[o(529, "fF&C", 414, 482, 461) + "se"], this[o(461, "fO11", 265, 341, 348) + e(1046, "Hps5", 1021, 985, 970)]())), this[n(-2, -36, -110, "l1xY", -2) + o(517, "8e8s", 433, 450, 578) + "s"](this[e(828, "l1xY", 950, 964, 872) + n(-155, -116, -155, "HEY!", -178)][i(59, -110, -72, "[IrB", -48) + "s"]), this[e(974, "Kf!Y", 1005, 1065, 976) + n(-161, -57, 24, "iMIh", 48) + o(255, "*j]m", 273, 241, 278)](this[i(-7, -112, -33, "HEY!", -46) + t(730, 811, "iMIh", 701, 588)][o(217, "Hps5", 381, 330, 355) + n(-31, -128, -258, "S277", -78)]);
      }
    } catch (r) {
      if (n(-70, 41, 153, "l1xY") !== o(466, "S$6E", 288, 381)) {
        if (!this[e(1207, "0!)O", 1120) + "se"]) throw new _0x3848e5(i(-178, -193, -336, "^cxK", -225) + e(832, "GTY0", 932) + i(-62, -45, -68, "ctse", -30) + t(670, 641, "[IrB", 738) + ".");
        if (!this[t(625, 771, "8e8s", 669) + o(287, "DR0R", 199, 245) + "d"][n(-76, 15, -115, "Xn66") + e(1084, "*j]m", 974) + o(555, "$S4W", 539, 473) + "ed"]()) throw new _0x4c3e8f(n(145, 22, 56, "fO11") + t(550, 775, "^cxK", 676) + n(155, 81, 207, "vpqe") + t(548, 764, "fF&C", 675) + ".");
        this[t(630, 580, "Efo7", 615) + n(-76, -79, -40, "&zK@")] = new _0x2c7ebc(_0xb3cb55(this[e(1161, "S$6E", 1049) + "se"], this[i(-167, -99, -142, "ctse", -167) + n(-72, 47, 110, "8byN")]())), this[o(295, "S$6E", 301, 320) + e(1096, "Kf!Y", 1102) + "s"](this[t(690, 686, "S277", 689) + t(704, 669, "]aJ7", 775)][o(182, "OaVQ", 322, 258) + "s"]), this[i(-56, -104, -218, "GTY0", -166) + t(742, 572, "*Z21", 677) + n(-69, -14, -112, "DR0R")](this[n(-118, -26, -52, "z#U6") + t(740, 781, "X1xY", 721)][i(-171, -101, -79, "hnK4", -165) + e(991, "nEI&", 929)]);
      } else {
        if (r instanceof ji) {
          if (i(44, -93, -33, "hnK4", -26) === e(1146, "*j]m", 1058)) return this[e(1022, "J#Df", 1128) + o(216, "zP8o", 255, 275) + e(1027, "aXH$", 1006) + o(312, "0!)O", 357, 387)][-14 * -12 + 4301 + 109 * -41];
          r[n(-13, -30, 52, "8byN")]();
        } else if (r instanceof Error) {
          if (n(-140, -119, -61, "S$6E") !== n(-8, 79, 193, "Sc5p")) return this[o(376, "(Do8", 274, 290) + t(618, 645, "V42Q", 666)];
          console[t(586, 680, "GTY0", 592)](r);
        }
        const s = {};
        s[e(1027, "*j]m", 986) + e(965, "*4BC", 964)] = !1, s[e(1101, "l1xY", 1059) + "s"] = [], s[n(-108, 11, 90, "Kf!Y") + i(-129, -161, -101, "V42Q", -217)] = [], s[e(1143, "Efo7", 1122) + t(717, 809, "S$6E", 786) + i(-126, -201, -74, "$S4W", -78)] = void 0, s[n(-90, -107, -36, "*Z21")] = function() {
        }, s[n(-58, -163, -123, "iMIh") + e(1052, "nEI&", 1011)] = "", this[i(-119, -125, -106, "[IrB", 3) + t(837, 853, "atpx", 743)] = new ja(s);
      }
    }
  }
  [Ie(708, 675, 621, "iMIh") + kt(30, 171, 141, 159, "l1xY") + Le(1122, 1221, 1256, 1292, "zV$z") + "t"]() {
    function i(t, e, n, o, r) {
      return kt(t - 38, e - 183, o - 1004, o - 308, t);
    }
    return this[i("l1xY", 1e3, 1076, 1128) + i("S$6E", 1202, 1239, 1305)];
  }
  [Le(1390, 1425, 1474, 1473, "CK[b") + kt(363, 280, 297, 239, "^cxK") + Ce("aXH$", 336, 255)]() {
    var r, s;
    function i(a, c, d, g, C) {
      return Ie(a - 433, d - -189, d - 259, c);
    }
    function t(a, c, d, g, C) {
      return Lt(a - 306, a, c - -205);
    }
    function e(a, c, d, g, C) {
      return Le(a - 363, C - -1474, d - 89, g - 3, a);
    }
    function n(a, c, d, g, C) {
      return Ce(g, c - 92, d - 572);
    }
    function o(a, c, d, g, C) {
      return Ce(g, c - 414, d - -226);
    }
    if (!this[e("l1xY", -17, -34, -101, -45) + "se"]) {
      if (e("*j]m", -324, -362, -258, -280) === n(678, 714, 744, "4Pli")) return;
      _0x166dc8[e("*j]m", -178, -26, -151, -114) + "ch"]((a) => _0x6a0a57[t("fF&C", -145)](a));
    }
    try {
      if (o(-33, -34, -23, "ctse", -41) === t("laLI", -144, -116, -216, -226)) _0x4c0fc4[t("(Do8", -222, -293, -157, -171) + "ch"]((a) => _0x5af6d2[o(246, 203, 144, "OaVQ", 260)](a));
      else {
        const a = JSON[t("8e8s", -122, -113, -20, -129)](this[e("GfLJ", -90, -282, -116, -176) + "se"]);
        return (r = a == null ? void 0 : a[i(414, "DR0R", 543, 497, 651) + i(398, "ckW4", 434, 466, 386)]) == null ? void 0 : r[o(36, -76, -89, "V42Q", -54) + e("OaVQ", -159, -211, -211, -250)];
      }
    } catch (a) {
      if (t("nEI&", -84) === n(850, 832, 903, "(Do8")) {
        const c = _0x46e0b1[e("$S4W", -21, -89, -56, -61)](this[e("iMIh", -165, -160, -274, -178) + "se"]);
        return (s = c == null ? void 0 : c[o(-9, -129, -39, "nEI&") + i(611, "4Pli", 659)]) == null ? void 0 : s[i(343, "V42Q", 407) + o(112, 108, -2, "]aJ7")];
      } else {
        if (a instanceof Error) {
          if (n(661, 671, 713, "&zK@") !== o(190, 87, 147, "vpqe")) throw new _0xb16b3c(e("Sc5p", -223, -167, -178, -166) + i(542, "ckW4", 432) + o(115, 249, 133, "zP8o") + t("8e8s", -119) + ".");
          xe[i(677, "Sc5p", 641) + e("vpqe", 45, -20, -163, -66)](a);
        }
        return;
      }
    }
  }
}
const ri = class ri extends Ml {
  static getInstance() {
    if (!this._instance) {
      const i = new Yl();
      this._instance = new ri(i);
    }
    return this._instance;
  }
};
V(ri, "_instance");
let Po = ri;
var Xl = Symbol.for("preact-signals");
function Ir() {
  if (E0 > -131 + 133 * -7 + -1 * -1063)
    E0--;
  else {
    for (var x, i = !1; void (-11558 + 2 * 5779) !== yn; ) {
      var t = yn;
      for (yn = void (-3265 * 3 + 4 * -1797 + 111 * 153), To++; void (11 * 522 + 4095 + -9 * 1093) !== t; ) {
        var e = t.o;
        if (t.o = void 0, t.f &= -(8009 + 8006 * -1), !(8 & t.f) && Pc(t)) try {
          t.c();
        } catch (n) {
          !i && (x = n, i = !(3289 + -299 * 11));
        }
        t = e;
      }
    }
    if (To = 3776 + 541 * -8 + 24 * 23, E0--, i) throw x;
  }
}
var oe = void (-6785 + 2195 * -3 + 13370), yn = void 0, E0 = -9135 + -7765 * 1 + 169 * 100, To = -10 * -426 + -1815 + -2445, Jx = 7799 + 19 * -251 + -3030;
function Rc(x) {
  if (void (-8128 + 2651 * -3 + -1 * -16081) !== oe) {
    var i = x.n;
    if (void (67 * -71 + 9332 + -4575) === i || i.t !== oe)
      return i = { i: 0, S: x, p: oe.s, n: void (-2657 + 4 * -1766 + -1 * -9721), t: oe, e: void (1 * 2019 + -6 * 140 + -1179), x: void (1 * -1345 + -2959 + -538 * -8), r: i }, void (50 * -111 + 324 + -1 * -5226) !== oe.s && (oe.s.n = i), oe.s = i, x.n = i, 2730 + -124 * -32 + 606 * -11 & oe.f && x.S(i), i;
    if (-(-49 * 76 + 3048 + 1 * 677) === i.i)
      return i.i = 1 * -129 + -1631 + 1760, void (-577 * 4 + 397 * -23 + 11439) !== i.n && (i.n.p = i.p, void (-29 * 301 + 11 * -89 + 9708) !== i.p && (i.p.n = i.n), i.p = oe.s, i.n = void (-1 * -9167 + 109 * 3 + -9494), oe.s.n = i, oe.s = i), i;
  }
}
function we(x) {
  this.v = x, this.i = 1206 + -603 * 2, this.n = void (-1 * 6758 + 1 * -4851 + 11609), this.t = void (2756 + 14 * -631 + -6078 * -1);
}
we.prototype.brand = Xl, we.prototype.h = function() {
  return !0;
}, we.prototype.S = function(x) {
  this.t !== x && void (1321 + 452 * -19 + 7267) === x.e && (x.x = this.t, void (-4 * 707 + -6943 + 9771) !== this.t && (this.t.e = x), this.t = x);
}, we.prototype.U = function(x) {
  if (void (-6387 + 1 * 2501 + 3886) !== this.t) {
    var i = x.e, t = x.x;
    void (-4 * -956 + 6619 * 1 + -10443) !== i && (i.x = t, x.e = void (1 * 1970 + 5917 + 33 * -239)), void (2 * 1307 + -1 * 3827 + 1 * 1213) !== t && (t.e = i, x.x = void (7981 + -386 * 1 + -155 * 49)), x === this.t && (this.t = t);
  }
}, we.prototype.subscribe = function(x) {
  var i = this;
  return Cr(function() {
    var t = i.value, e = oe;
    oe = void (-1 * -6589 + -293 + -6296 * 1);
    try {
      x(t);
    } finally {
      oe = e;
    }
  });
}, we.prototype.valueOf = function() {
  return this.value;
}, we.prototype.toString = function() {
  return this.value + "";
}, we.prototype.toJSON = function() {
  return this.value;
}, we.prototype.peek = function() {
  var x = oe;
  oe = void (1533 + -558 * 15 + 6837);
  try {
    return this.value;
  } finally {
    oe = x;
  }
}, Object.defineProperty(we.prototype, "value", { get: function() {
  var x = Rc(this);
  return x !== void 0 && (x.i = this.i), this.v;
}, set: function(x) {
  if (x !== this.v) {
    if (To > 5675 * 1 + -1 * 9803 + -1057 * -4) throw new Error("Cycle detected");
    this.v = x, this.i++, Jx++, E0++;
    try {
      for (var i = this.t; void (8715 + 6857 * 1 + -15572) !== i; i = i.x) i.t.N();
    } finally {
      Ir();
    }
  }
} });
function Kc(x) {
  return new we(x);
}
function Pc(x) {
  for (var i = x.s; void (-7038 + -153 * -46) !== i; i = i.n) if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return !(4 * -811 + -9650 * 1 + 12894 * 1);
  return !(-7 * -451 + 17 * -463 + -115 * -41);
}
function Tc(x) {
  for (var i = x.s; i !== void 0; i = i.n) {
    var t = i.S.n;
    if (void (2609 * 2 + -264 * 21 + 326) !== t && (i.r = t), i.S.n = i, i.i = -(-1306 * -3 + -317 * 1 + 120 * -30), void (22 * -214 + -198 + -22 * -223) === i.n) {
      x.s = i;
      break;
    }
  }
}
function Vc(x) {
  for (var i = x.s, t = void (-6871 * 1 + -20 * -397 + 1069 * -1); void (-4103 + 373 * 11) !== i; ) {
    var e = i.p;
    i.i === -1 ? (i.S.U(i), void (-1 * 4957 + -1 * 5531 + 10488) !== e && (e.n = i.n), void (-1052 * 1 + 198 * -44 + 9764) !== i.n && (i.n.p = e)) : t = i, i.S.n = i.r, void (-207 * -34 + 9440 * -1 + 1201 * 2) !== i.r && (i.r = void (11 * -527 + 8675 + -1 * 2878)), i = e;
  }
  x.s = t;
}
function P0(x) {
  we.call(this, void (-2964 + 114 * 26)), this.x = x, this.s = void (2623 * 3 + 2731 * 3 + -6 * 2677), this.g = Jx - (-5367 + -1 * 8006 + 3 * 4458), this.f = 135 * -10 + 5857 + 57 * -79;
}
(P0.prototype = new we()).h = function() {
  if (this.f &= -(1 * 6954 + -3 * -1514 + -11493), -5057 + 2769 * 1 + -763 * -3 & this.f) return !1;
  if (-4599 + 421 * 11 == (36 & this.f)) return !(-3453 + -289 * 11 + 6632);
  if (this.f &= -(-1 * 7349 + 6515 + 839), this.g === Jx) return !(-9786 + -181 * -29 + 4537);
  if (this.g = Jx, this.f |= -9812 + -20 * -355 + -1 * -2713, this.i > -37 * 89 + -8166 + 11459 && !Pc(this)) return this.f &= -(8163 * 1 + -5571 + -1 * 2590), !(-2 * 302 + 13 * -493 + 7013 * 1);
  var x = oe;
  try {
    Tc(this), oe = this;
    var i = this.x();
    (16 & this.f || this.v !== i || 4 * 731 + 7257 + -10181 === this.i) && (this.v = i, this.f &= -(321 + -87 * -113 + -10135), this.i++);
  } catch (t) {
    this.v = t, this.f |= -2469 * -4 + 6389 + -1 * 16249, this.i++;
  }
  return oe = x, Vc(this), this.f &= -2, !(1384 + -1 * 1384);
}, P0.prototype.S = function(x) {
  if (void (3903 * -2 + 3968 + 3838) === this.t) {
    this.f |= -4853 + -2951 * 2 + 10791;
    for (var i = this.s; void (5266 + -6747 * -1 + -12013) !== i; i = i.n) i.S.S(i);
  }
  we.prototype.S.call(this, x);
}, P0.prototype.U = function(x) {
  if (void (64 * -78 + -13 * 66 + 10 * 585) !== this.t && (we.prototype.U.call(this, x), void (-3774 + 8248 * 1 + 1 * -4474) === this.t)) {
    this.f &= -(-6027 + -1 * 2967 + 9027);
    for (var i = this.s; void (49 * 197 + 3595 + 3 * -4416) !== i; i = i.n) i.S.U(i);
  }
}, P0.prototype.N = function() {
  if (!(-214 * -34 + -949 + -5 * 1265 & this.f)) {
    this.f |= -8293 + -1501 * -5 + 794;
    for (var x = this.t; void (-1 * 1553 + 3287 * -1 + 4840) !== x; x = x.x) x.t.N();
  }
}, Object.defineProperty(P0.prototype, "value", { get: function() {
  if (-9653 + -726 * -12 + 942 & this.f) throw new Error("Cycle detected");
  var x = Rc(this);
  if (this.h(), void (2176 + 17 * -302 + 2958) !== x && (x.i = this.i), 921 * 6 + 6257 + -11767 & this.f) throw this.v;
  return this.v;
} });
function jl(x) {
  return new P0(x);
}
function Ec(x) {
  var i = x.u;
  if (x.u = void (7898 + -36 * -90 + -11138), typeof i == "function") {
    E0++;
    var t = oe;
    oe = void (-20 * 324 + -1 * -1583 + 1 * 4897);
    try {
      i();
    } catch (e) {
      throw x.f &= -(-1 * -8928 + -7213 + -1713), x.f |= 200 + 192 * -1, fr(x), e;
    } finally {
      oe = t, Ir();
    }
  }
}
function fr(x) {
  for (var i = x.s; void (-85 * -67 + -2 * -1447 + -8589 * 1) !== i; i = i.n) i.S.U(i);
  x.x = void (809 * -7 + -1 * -8623 + -16 * 185), x.s = void (-1143 + 1 * -331 + 1474), Ec(x);
}
function _l(x) {
  if (oe !== this) throw new Error("Out-of-order effect");
  Vc(this), oe = x, this.f &= -(427 + -4 * -2490 + 335 * -31), 6694 * -1 + -5125 + 11827 & this.f && fr(this), Ir();
}
function pn(x) {
  this.x = x, this.u = void (-8405 + 205 * 41), this.s = void (-9298 + -789 * -5 + -5353 * -1), this.o = void (-4323 + 1 * 1611 + 904 * 3), this.f = 314 * -21 + -1632 * 1 + 8258 * 1;
}
pn.prototype.c = function() {
  var x = this.S();
  try {
    if (-2886 + 2 * 1831 + 256 * -3 & this.f || void (8205 * -1 + -688 * -8 + -2701 * -1) === this.x) return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    x();
  }
}, pn.prototype.S = function() {
  if (-3328 + 3 * 637 + -1 * -1418 & this.f) throw new Error("Cycle detected");
  this.f |= 107 * 69 + 124 * 80 + -17302, this.f &= -(-5715 + -2 * 3686 + 13096), Ec(this), Tc(this), E0++;
  var x = oe;
  return oe = this, _l.bind(this, x);
}, pn.prototype.N = function() {
  !(299 * 29 + 7192 + -15861 & this.f) && (this.f |= 344 * 13 + -1 * 5294 + -2 * -412, this.o = yn, yn = this);
}, pn.prototype.d = function() {
  this.f |= -493 * 9 + 21 + 4424, -233 * 28 + 9726 + 291 * -11 & this.f || fr(this);
};
function Cr(x) {
  var i = new pn(x);
  try {
    i.c();
  } catch (t) {
    throw i.d(), t;
  }
  return i.d.bind(i);
}
var Qi;
function V0(x, i) {
  M[x] = i.bind(null, M[x] || function() {
  });
}
function Ix(x) {
  Qi && Qi(), Qi = x && x.S();
}
function Lc(x) {
  var i = this, t = x.data, e = en(t);
  e.value = t;
  var n = Qe(function() {
    for (var o = i.__v; o = o.__; ) if (o.__c) {
      o.__c.__$f |= -41 * -101 + 1 * 179 + -4 * 1079;
      break;
    }
    return i.__$u.c = function() {
      var r;
      !ms(n.peek()) && -1 * 8291 + 3202 + -1273 * -4 === ((r = i.base) == null ? void (-835 * -4 + -23 * 331 + -1 * -4273) : r.nodeType) ? i.base.data = n.peek() : (i.__$f |= 7 * 835 + -5462 + -382 * 1, i.setState({}));
    }, jl(function() {
      var r = e.value.value;
      return 7049 + 1 * 2381 + -10 * 943 === r ? 1 * -5233 + -1730 * -5 + -3417 : !(92 * -67 + 1295 + -541 * -9) === r ? "" : r || "";
    });
  }, []);
  return n.value;
}
Lc.displayName = "_st";
var Vo = {};
Vo.configurable = !(7834 + 3 * 193 + -8413), Vo.value = void (-1737 + 81 * 4 + 1413);
var Eo = {};
Eo.configurable = !(2649 * 2 + 4745 + -10043), Eo.value = Lc;
var Lo = {};
Lo.configurable = !0, Lo.get = function() {
  var x = {};
  return x.data = this, x;
};
var Do = {};
Do.configurable = !(1198 * -1 + -8 * -73 + 614), Do.value = 1;
var gn = {};
gn.constructor = Vo, gn.type = Eo, gn.props = Lo, gn.__b = Do, Object.defineProperties(we.prototype, gn), V0("__b", function(x, i) {
  if (typeof i.type == "string") {
    var t, e = i.props;
    for (var n in e) if (n !== "children") {
      var o = e[n];
      o instanceof we && (t || (i.__np = t = {}), t[n] = o, e[n] = o.peek());
    }
  }
  x(i);
}), V0("__r", function(x, i) {
  Ix();
  var t, e = i.__c;
  e && (e.__$f &= -(6199 * -1 + 8729 + -2528), void (5702 + -7159 * 1 + 1 * 1457) === (t = e.__$u) && (e.__$u = t = function(n) {
    var o;
    return Cr(function() {
      o = this;
    }), o.c = function() {
      e.__$f |= 5785 + -964 * 6, e.setState({});
    }, o;
  }())), Ix(t), x(i);
}), V0("__e", function(x, i, t, e) {
  Ix(), x(i, t, e);
}), V0("diffed", function(x, i) {
  Ix();
  var t;
  if (typeof i.type == "string" && (t = i.__e)) {
    var e = i.__np, n = i.props;
    if (e) {
      var o = t.U;
      if (o) for (var r in o) {
        var s = o[r];
        void (3838 + -2741 * -1 + -6579) !== s && !(r in e) && (s.d(), o[r] = void (-1338 + -3 * 3237 + 11049));
      }
      else t.U = o = {};
      for (var a in e) {
        var c = o[a], d = e[a];
        void (3591 + 14 * -699 + -21 * -295) === c ? (c = Jl(t, a, d, n), o[a] = c) : c.o(d, n);
      }
    }
  }
  x(i);
});
function Jl(x, i, t, e) {
  var n = i in x && x.ownerSVGElement === void 0, o = Kc(t);
  return { o: function(r, s) {
    o.value = r, e = s;
  }, d: Cr(function() {
    var r = o.value.value;
    e[i] !== r && (e[i] = r, n ? x[i] = r : r ? x.setAttribute(i, r) : x.removeAttribute(i));
  }) };
}
V0("unmount", function(x, i) {
  if (typeof i.type == "string") {
    var t = i.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (-641 * -3 + 2 * -3609 + 5295);
        for (var n in e) {
          var o = e[n];
          o && o.d();
        }
      }
    }
  } else {
    var r = i.__c;
    if (r) {
      var s = r.__$u;
      s && (r.__$u = void 0, s.d());
    }
  }
  x(i);
}), V0("__h", function(x, i, t, e) {
  (e < -5940 + 9644 * 1 + 3701 * -1 || -13278 + -129 * -103 === e) && (i.__$f |= 5485 + -1 * 5483), x(i, t, e);
}), xt.prototype.shouldComponentUpdate = function(x, i) {
  var t = this.__$u;
  if (!(t && void (2868 + -2 * 2539 + 130 * 17) !== t.s || 1 * 2771 + -43 * 130 + 941 * 3 & this.__$f)) return !(-7 * -226 + -2776 + 1194 * 1);
  if (2 * 461 + 3245 + -4164 & this.__$f) return !(-5324 * -1 + -6198 + 2 * 437);
  for (var e in i) return !(1 * 4062 + 400 + 194 * -23);
  for (var n in x) if (n !== "__source" && x[n] !== this.props[n]) return !0;
  for (var o in this.props) if (!(o in x)) return !(-9313 * 1 + -161 * -23 + -170 * -33);
  return !(5193 + 3 * -2377 + -277 * -7);
};
function en(x) {
  return Qe(function() {
    return Kc(x);
  }, []);
}
function Ul(x, i) {
  if (!x) return i;
  const { detectionRecord: t, hashedDetectedImages: e } = x;
  i.hashedDetectedImages && (e == null || e.push(...i.hashedDetectedImages)), i.detectionRecord && (t == null || t.push(...i.detectionRecord));
  const n = { ...x };
  return n.hashedDetectedImages = e, n.detectionRecord = t, n;
}
function Ql() {
  const x = en(null);
  function i({ cameraProperties: e }) {
    x.value = Ul(x.value, e);
  }
  const t = {};
  return t.cameraProperties = x, t.mergeCameraProperties = i, t;
}
const Dc = (x, i) => {
  const t = ut(i);
  de(() => {
    t.current = i;
  }, [i]), de(() => {
    const e = (n) => t.current(n);
    return document.addEventListener(x, e), () => {
      document.removeEventListener(x, e);
    };
  }, [x]);
}, zl = (x) => {
  const i = en(!1);
  return Dc(x, (e) => {
    e.detail && (i.value = e.detail.animationEnd);
  }), i;
}, ql = (x, i, t = Zl) => new Promise((e) => {
  x.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, i);
}), Nc = async (x) => ql(x, 90), $l = (x, i) => {
  const t = document.createElement("canvas");
  t.width = i.width, t.height = i.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(x, i.shiftX, i.shiftY, i.width, i.height, -16 * 369 + -6163 + 11 * 1097, -2557 * -2 + -1128 * 5 + -1 * -526, t.width, t.height), t;
}, e1 = (x) => {
  const i = x.getContext("2d");
  if (!i) throw new Error("getImageDataForSam ctx error");
  const { data: t } = i.getImageData(-6303 + -2101 * -3, 47 * -76 + 408 + -14 * -226, x.width, x.height);
  return t;
}, Fc = (x, i, t, e) => {
  const n = x.getContext("2d");
  n && (n.beginPath(), e ? (n.fillStyle = t, n.fillRect(i.topLeft.x, i.topLeft.y, i.width, i.height)) : (n.strokeStyle = t, n.rect(i.topLeft.x, i.topLeft.y, i.width, i.height)), n.stroke());
}, zi = (x, i, t) => {
  const { height: e, shiftX: n, shiftY: o, width: r } = i, s = {};
  s.x = n, s.y = o;
  const a = {};
  a.topLeft = s, a.width = r, a.height = e, a.color = t, Fc(x, a, t);
}, vn = (x, i, t, e = 741 + -1 * -8891 + 1 * -9632) => {
  const n = x.getContext("2d");
  n && (n.fillStyle = t, n.fillRect(i.x + e, i.y + e, -9442 + 1118 * -2 + 11685, -7297 + 30 * -99 + 2 * 5137), n.beginPath());
}, Yc = jn(null), pr = () => {
  const x = h0(Yc);
  if (!x)
    throw new Error("Missing provider for CameraOptionsContext");
  return x;
}, t1 = ({
  cameraFacing: x,
  captureMode: i,
  licensePath: t,
  onPhotoTaken: e,
  sessionToken: n,
  thresholds: o,
  wasmDirectoryPath: r
}) => {
  var s, a, c;
  return {
    onPhotoTaken: e,
    cameraFacing: x ?? ur.FRONT,
    captureMode: i ?? bc.AUTO_CAPTURE,
    wasmDirectoryPath: r,
    licensePath: t,
    sessionToken: n,
    thresholds: {
      faceConfidence: (o == null ? void 0 : o.faceConfidence) ?? pl,
      minFaceSizeRatio: (o == null ? void 0 : o.minFaceSizeRatio) ?? hl,
      maxFaceSizeRatio: (o == null ? void 0 : o.maxFaceSizeRatio) ?? ml,
      sharpnessThreshold: (o == null ? void 0 : o.sharpnessThreshold) ?? yl,
      brightnessLowThreshold: (o == null ? void 0 : o.brightnessLowThreshold) ?? vl,
      brightnessHighThreshold: (o == null ? void 0 : o.brightnessHighThreshold) ?? Wl,
      outOfBoundsThreshold: (o == null ? void 0 : o.outOfBoundsThreshold) ?? bl,
      devicePitchAngleThreshold: (o == null ? void 0 : o.devicePitchAngleThreshold) ?? Sl,
      mouth: {
        confidence: ((s = o == null ? void 0 : o.mouth) == null ? void 0 : s.confidence) ?? Al,
        status: {
          min: ((a = o == null ? void 0 : o.mouth) == null ? void 0 : a.status.min) ?? Ea.min,
          max: ((c = o == null ? void 0 : o.mouth) == null ? void 0 : c.status.max) ?? Ea.max
        }
      },
      leftEye: (o == null ? void 0 : o.leftEye) ?? {
        confidence: La
      },
      rightEye: (o == null ? void 0 : o.rightEye) ?? {
        confidence: La
      }
    }
  };
}, n1 = ({
  cameraOptions: x,
  children: i
}) => {
  const t = Qe(() => t1(x), [x]);
  return /* @__PURE__ */ G(Yc.Provider, { value: t, children: i });
}, Mc = -4234 + 6074 * -1 + 10308 + 0.75, x1 = 2, i1 = 600, o1 = -2596 + -3 * -941 + -227, r1 = "dot-auto-capture-video", Xc = (x) => x.length < -4157 + -44 * -151 + 2486 * -1 ? 4234 * 2 + 6437 + 14905 * -1 : x.reduce((t, e) => t + e, -1 * 3641 + 8 * 1047 + -4735) / x.length, tn = (x) => Number.parseFloat(x.toFixed(-4178 + -4181 * -1)), a1 = (x) => {
  const i = x.getContext("2d");
  i && i.clearRect(1196 + -393 * -5 + -109 * 29, 8777 + 1695 * -2 + 1 * -5387, i.canvas.width, i.canvas.height);
}, mi = (x, i) => Math.min(x, i), jc = ({ height: x, width: i }, t) => {
  const e = mi(i, x) * t, n = (i - e) / (-1 * 5428 + 4820 + 2 * 305), o = (x - e) / (4649 + -401 * -3 + -5850), r = {};
  return r.shiftX = n, r.shiftY = o, r.width = e, r.height = e, r;
}, s1 = (x, i) => {
  const { height: t, shiftX: e, shiftY: n, width: o } = jc(x, i), r = {};
  return r.shiftX = e / x.width, r.shiftY = n / x.height, r.width = o / x.width, r.height = t / x.height, r;
}, c1 = ({ height: x, width: i }) => {
  const t = mi(i, x), e = t / 3 * (-5 * -317 + -966 + -615);
  if (i > x) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const n = {};
  return n.width = t, n.height = e, n;
}, g1 = (x, i) => {
  const t = mi(i.width, i.height);
  return tn(x * t);
}, d1 = ({ height: x, width: i }) => {
  const t = {};
  return t.height = x, t.width = i, jc(t, Mc);
}, u1 = (x) => s1(x, Mc), l1 = (x, i) => g1(x, i) * x1, I1 = "@innovatrics/dot-common-auto-capture", f1 = "6.2.1", C1 = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, p1 = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, h1 = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, m1 = {
  name: I1,
  private: !0,
  version: f1,
  scripts: C1,
  dependencies: p1,
  devDependencies: h1
}, _c = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), _a = () => {
  const x = /Android/i.test(navigator.userAgent), i = /Firefox/i.test(navigator.userAgent);
  return x && i;
}, b1 = () => {
  const x = navigator.userAgent.includes("Chrome"), i = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return x && i ? !1 : i;
}, No = (x) => new Promise((i) => {
  setTimeout(i, x);
}), Jc = (x) => JSON.parse(JSON.stringify(x, (i, t) => typeof t == "number" ? tn(t) : t)), Uc = () => m1.version, Qc = (x) => new URL(x).hostname.replace("www.", ""), A1 = () => Qc(window.location.href) === "localhost", fx = (x) => Object.entries(x).map(([i, t]) => encodeURIComponent(i) + "=" + encodeURIComponent(t)).join("&"), y1 = (x, i) => JSON.stringify(x) === JSON.stringify(i) ? i : x, Ja = (x, i) => Math.abs(x - i);
function v1(x, i) {
  let t;
  return (...e) => {
    const n = () => {
      clearTimeout(t), t = void 0, x(...e);
    };
    t === void (-7 * -163 + -59 * 27 + 4 * 113) && (t = setTimeout(n, i));
  };
}
const W1 = () => "prod".toLowerCase() === "dev";
class hr extends Array {
  constructor(t) {
    super();
    V(this, "size");
    this.size = t;
  }
  pushFixed(...t) {
    if (t.length > this.size) {
      const e = t.slice(-this.size);
      this.push(...e);
      return;
    }
    this.length === this.size && this.splice(6408 + 7 * -939 + -165 * -1, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(4604 + 314 * -11 + -1150);
  }
}
const S1 = (x, i) => {
  const { height: t, shiftX: e, shiftY: n, width: o } = i;
  return !(x.x < e || x.x > e + o || x.y < n || x.y > n + t);
}, w1 = (x, i) => Object.values(x).every((t) => S1(t, i));
function Ux(x) {
  const { height: i, width: t } = c1(x), e = (x.width - t) / (-3814 + 2 * -934 + -14 * -406), n = (x.height - i) / (-1049 + 1051 * 1), o = {};
  return o.shiftX = e, o.shiftY = n, o.width = t, o.height = i, o;
}
function zc(x, i, t) {
  const { height: e, width: n } = t, o = mi(x.width, x.height), r = n - o * i * (3512 + -8444 * 1 + -2467 * -2), s = e - o * i * (-142 * -43 + 7580 + -13684), a = (x.width - r) / (9060 + 1801 * -5 + 53 * -1), c = (x.height - s) / 2, d = {};
  return d.shiftX = a, d.shiftY = c, d.width = r, d.height = s, d;
}
function H0(x, i) {
  const { shiftX: t, shiftY: e } = i, n = {};
  return n.x = x.x + t, n.y = x.y + e, n;
}
const B1 = (x, i) => ({ ...x, leftEye: { ...x.leftEye, center: H0(x.leftEye.center, i) }, rightEye: { ...x.rightEye, center: H0(x.rightEye.center, i) }, mouth: { ...x.mouth, center: H0(x.mouth.center, i) }, topLeft: H0(x.topLeft, i), bottomRight: H0(x.bottomRight, i), faceCenter: H0(x.faceCenter, i) }), qc = (x, i) => {
  const { faceCenter: t, faceSize: e } = x, n = l1(e, i), o = {};
  o.x = t.x, o.y = t.y - n;
  const r = {};
  r.x = t.x + n, r.y = t.y;
  const s = {};
  s.x = t.x, s.y = t.y + n;
  const a = {};
  a.x = t.x - n, a.y = t.y;
  const c = {};
  return c.top = o, c.right = r, c.bottom = s, c.left = a, Jc(c);
}, k1 = (x, i) => {
  const { bottomRight: t, faceCenter: e, topLeft: n } = i, o = {
    topLeft: n,
    width: t.x - n.x,
    height: t.y - n.y
  };
  Fc(x, o, "rgba(255, 0, 0, 0.3)", !0), vn(x, e, "lime");
}, G1 = (x, i, t) => {
  const e = qc(i, t);
  Object.values(e).map((n) => vn(x, n, "orange"));
}, O1 = ({ cameraResolution: x, detectionDetails: i, isImageMirror: t }) => {
  const { thresholds: e } = pr(), { redfin: n } = _n(), o = ut(null);
  if (de(() => {
    if (!o.current)
      return;
    o.current.width = x.width, o.current.height = x.height, a1(o.current);
    const p = Ux(x), m = zc(
      x,
      e.outOfBoundsThreshold,
      p
    ), A = d1(x);
    i.value && (k1(o.current, i.value.processedImage.detection), G1(
      o.current,
      i.value.processedImage.detection,
      x
    ), zi(o.current, p, "lime"), zi(o.current, m, "yellow"), zi(o.current, A, "blue"), vn(o.current, i.value.processedImage.detection.leftEye.center, "cyan"), vn(o.current, i.value.processedImage.detection.rightEye.center, "cyan"), vn(o.current, i.value.processedImage.detection.mouth.center, "cyan"));
  }, [x, e, i.value]), !i.value)
    return null;
  const {
    detectionTime: r,
    fps: s,
    processedImage: { detection: a, instructionCode: c, invalidValidators: d },
    resolution: g,
    samVersion: C
  } = i.value, u = {
    Confidence: a.confidence,
    Brightness: a.brightness,
    Sharpness: a.sharpness,
    "Face size": a.faceSize,
    "Left eye confidence": a.leftEye.confidence,
    "Left eye status": a.leftEye.status,
    "Right eye confidence": a.rightEye.confidence,
    "Right eye status": a.rightEye.status,
    "Mouth confidence": a.mouth.confidence,
    "Mouth status": a.mouth.status,
    "Detection time": r,
    FPS: s,
    Tier: n,
    Instruction: c,
    Resolution: JSON.stringify(g),
    "Component version": "6.2.1"
  };
  return C && (u["SAM version"] = C), d.length > 0 && (u["Invalid validators"] = d.join(", ")), /* @__PURE__ */ G(
    cl,
    {
      ref: o,
      cameraResolution: x,
      detectionDetails: u,
      isImageMirror: t
    }
  );
};
function Z1(x) {
  return /* @__PURE__ */ G("rect", { fill: "#000", ...x, rx: "50%" });
}
function H1(x) {
  const [i, t] = Xe(!1), e = () => t((r) => !r), n = "" + i;
  U0(() => {
    function r() {
      if (!x.current) return;
      const d = new MutationObserver(() => {
        e();
      }), g = {};
      return g.childList = !0, g.subtree = !0, g.attributes = !0, d.observe(x.current, g), d;
    }
    function s() {
      var C;
      if (!((C = x.current) != null && C["parentElement"])) return;
      const d = new MutationObserver((u) => {
        u.find((m) => {
          for (const A of m.removedNodes)
            if (A === x.current) return !0;
        }) && e(), u.forEach((m) => {
          m.addedNodes.forEach((A) => {
            var l;
            (l = A.parentElement) == null || l.removeChild(A);
          });
        });
      }), g = {};
      return g.childList = !0, d.observe(x.current.parentElement, g), d;
    }
    const a = r(), c = s();
    return () => {
      c == null || c.disconnect(), a == null || a.disconnect();
    };
  });
  const o = {};
  return o.key = n, o;
}
const R1 = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function K1({ cutOut: x, height: i, width: t }) {
  const e = ut(null), { key: n } = H1(e);
  return /* @__PURE__ */ G("div", { ref: e, style: R1, children: /* @__PURE__ */ G("svg", { viewBox: `0 0 ${t} ${i}`, children: [
    /* @__PURE__ */ G("defs", { children: [
      /* @__PURE__ */ G("mask", { id: "placeholder", children: [
        /* @__PURE__ */ G("rect", { fill: "#fff", height: "100%", width: "100%" }),
        x
      ] }),
      /* @__PURE__ */ G(
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
            /* @__PURE__ */ G("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ G("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ G(
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
    /* @__PURE__ */ G("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, n);
}
function P1({ fullOverlay: x, resolution: i }) {
  const t = u1(i), e = `${t.height * 100}%`, n = `${t.width * 100}%`, o = `${t.shiftX * 100}%`, r = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ G(
    K1,
    {
      cutOut: x || /* @__PURE__ */ G(Z1, { height: e, width: n, x: o, y: r }),
      height: i.height,
      width: i.width
    }
  );
}
function T1({ cameraResolution: x, children: i, detectionDetails: t, shouldMirror: e }) {
  const { redfin: n, sunfish: o } = _n(), { appState: r, freemiumOverlayState: s } = $0(), a = s !== bn.HIDDEN && n !== ko.Higher && x, c = s === bn.VISIBLE, d = x && o && r === bt.RUNNING;
  return /* @__PURE__ */ G(ot, { children: [
    a && /* @__PURE__ */ G(P1, { fullOverlay: c, resolution: x }),
    i,
    d && /* @__PURE__ */ G(
      O1,
      {
        cameraResolution: x,
        detectionDetails: t,
        isImageMirror: e
      }
    )
  ] });
}
const $c = (x, i) => {
  const t = {};
  t.detail = i, document.dispatchEvent(new CustomEvent(x, t));
}, ai = class ai {
  constructor() {
    V(this, "lastDetails", {});
    V(this, "delayedTime", 0);
  }
  static getInstance() {
    return !this._instance && (this._instance = new ai()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 25 * 19 + 697 + -1172;
  }
  isDetailChanged(i, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[i]) ? (this.lastDetails[i] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(i, t) {
    this.isDetailChanged(i, t) && $c(i, t);
  }
  dispatchDelayedCustomEventOnChange(i, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(i, t), this.delayedTime = n);
  }
};
V(ai, "_instance");
let Bn = ai;
const Jn = Bn.getInstance(), eg = (x, i, t = i1) => {
  const e = {};
  e.instructionCode = i;
  const n = e;
  Jn.dispatchDelayedCustomEventOnChange(x, n, t);
}, V1 = (x, i) => {
  Jn.dispatchCustomEventOnChange(x, i);
}, E1 = (x, i) => {
  const t = {};
  t.size = i;
  const e = t;
  Jn.dispatchCustomEventOnChange(x, e);
}, L1 = (x, i, t) => {
  const e = i.confidence < t ? void 0 : i, n = {};
  n.detectedObject = e;
  const o = n;
  Jn.dispatchCustomEventOnChange(x, o);
}, D1 = (x, { detection: i, fps: t, image: e, invalidValidators: n, isInCandidateSelection: o }) => {
  const r = {};
  r.image = e, r.data = {}, r.data.detection = i, r.data.fps = t, r.data.isInCandidateSelection = o, r.data.invalidValidators = n, r.data.imageResolution = {}, r.data.imageResolution.width = e.width, r.data.imageResolution.height = e.height;
  const s = r;
  Jn.dispatchCustomEventOnChange(x, s);
}, Fo = (x, i) => {
  $c(x, i);
}, N1 = (x, i) => {
  if (W1()) {
    const t = {};
    t.candidateSelectionImages = i;
    const e = t;
    Bn.getInstance().dispatchCustomEventOnChange(x, e);
  }
}, F1 = (x, i) => {
  const { cameraResolution: t, shouldCameraMirror: e } = i;
  de(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, V1(x, n);
  }, [t, e, x]);
}, Y1 = (x) => x === hc.CONTROL ? !_c() : !0, M1 = (x, i) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: o } = $0(), [r, s] = Xe(), a = Qe(() => {
    const d = o && i && i.isStreaming && i.getCameraSettings().facingMode;
    return d ? r ?? d === "user" : r ?? Y1(x);
  }, [i, r, x, o]);
  de(() => {
    const d = () => {
      t !== bt.LOADING && e(bt.RUNNING);
    }, g = () => {
      s(r === void 0 ? !a : !r);
    }, C = async () => {
      if (i) {
        e(bt.LOADING);
        try {
          await i.switchCamera(), e(bt.RUNNING);
        } catch (p) {
          if (p instanceof Error) {
            n(xe.fromCameraError(p));
            return;
          }
        }
        s(void 0);
      }
    }, u = (p) => {
      var m;
      switch ((m = p.detail) == null ? void 0 : m["instruction"]) {
        case Fi.CONTINUE_DETECTION:
          d();
          break;
        case Fi.TOGGLE_MIRROR:
          g();
          break;
        case Fi.SWITCH_CAMERA:
          C();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(x, u), () => {
      document.removeEventListener(x, u);
    };
  }, [t, i, n, r, e, a, x]);
  const c = {};
  return c.shouldCameraMirror = a, c;
};
async function tg() {
  return navigator.mediaDevices.enumerateDevices();
}
async function qi() {
  return (await tg()).filter((i) => i.kind === "videoinput");
}
function $i(x) {
  x.getTracks().forEach((t) => t.stop());
}
function Ua(x) {
  return x.getVideoTracks()[-389 * 5 + 1779 * 5 + -6950];
}
const Zx = {};
Zx.width = 1920, Zx.height = 1080, Zx.facingMode = ur.FRONT;
const X1 = Zx;
var gt;
class ng {
  constructor({ defaultVideoConstrains: i = X1, minCameraShorterSide: t = Bl } = {}) {
    V(this, "options");
    V(this, "availableCameraProperties", []);
    ne(this, gt, null);
    const e = {};
    e.defaultVideoConstrains = i, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return L(this, gt);
  }
  get videoTrack() {
    return L(this, gt) ? Ua(L(this, gt)) : void (8 * -498 + -1355 * -7 + 1 * -5501);
  }
  get isCameraActive() {
    var i;
    return !!((i = L(this, gt)) != null && i.active);
  }
  static async requestPermission() {
    const i = {};
    i.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(i);
    $i(t);
  }
  async open(i = {}) {
    _a() && await No(8311 * -1 + 6189 * -1 + 14950), $(this, gt, await navigator.mediaDevices.getUserMedia(i)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const i = await qi();
    if (i.length <= -1 * 2687 + 771 * 3 + 375) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = i.findIndex((s) => s.deviceId === e.deviceId), o = i[n + (-71 * -9 + -3 * 643 + 1291)] ?? i[-6943 + 51 * -125 + -6659 * -2], r = this.getConstraints(t, o);
    this.close(), await this.open(r);
  }
  close() {
    L(this, gt) && ($i(L(this, gt)), $(this, gt, null));
  }
  async getProperties() {
    const i = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = i;
    const n = {};
    return n.currentCameraProperties = e, n.availableCameraProperties = this.availableCameraProperties, n;
  }
  getSettings() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const i = this.getSettings();
    if (!i.width) throw new xe("Video width is undefined");
    if (!i.height) throw new xe("Video height is undefined");
    const t = {};
    return t.width = i.width, t.height = i.height, t;
  }
  async getDeviceName() {
    const i = this.getSettings(), t = await tg(), e = t.find((n) => n.deviceId === i.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(i) {
    if (i !== ur.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return _c() ? (await qi()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (1 * -6587 + -1196 * 7 + 14959);
  }
  async collectAvailableCamerasInfo() {
    const i = await qi();
    for (const t of i) {
      _a() && await No(8891 + -68 * 71 + -3613);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const o = await navigator.mediaDevices.getUserMedia(n), r = Ua(o);
        if (!r) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const s = r.getSettings(), a = { ...s };
        a.deviceName = r.label;
        const c = {};
        c.cameraProperties = a;
        const d = c;
        this.availableCameraProperties.push(d), $i(o);
      } catch (e) {
        e instanceof Error && xe.logError(e);
      }
    }
  }
  getConstraints(i, t) {
    const e = { ...this.options.defaultVideoConstrains, ...i };
    e.deviceId = t ? { exact: t.deviceId } : void (789 * -1 + 125 * -6 + 1539);
    const n = {};
    return n.video = e, n.audio = !1, n;
  }
  checkVideoTrackSettings() {
    var e;
    const i = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(i != null && i.height) || !(i != null && i.width))
      throw this.close(), new xe("Could not init camera settings");
    if (typeof this.options.minCameraShorterSide != "number") return;
    if (Math.min(i == null ? void 0 : i.width, i == null ? void 0 : i.height) < this.options.minCameraShorterSide)
      throw this.close(), new xe("Could not init video because of low camera resolution: " + i.width + "x" + i.height + ".");
  }
}
gt = new WeakMap();
class j1 {
  constructor(i, t) {
    this.videoHandler = i, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(i = {}) {
    await ng.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(i.facingMode), e = this.cameraHandler.getConstraints(i, t);
    await this.cameraHandler.open(e), b1() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var n;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const i = (n = this.cameraHandler.videoTrack) == null ? void 0 : n.getSettings();
    if (!(i != null && i.width)) throw new xe("Cant take photo - video width is undefined");
    if (!(i != null && i.height)) throw new xe("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = i.width, t.height = i.height;
    const e = t.getContext("2d");
    if (!e) throw new xe("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, -1 * -6633 + -7454 + 821, -1731 + -2 * -2836 + -563 * 7), { image: t, timestamp: Date.now() };
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
var Ot;
class _1 {
  constructor(i) {
    ne(this, Ot);
    $(this, Ot, i);
  }
  get videoElement() {
    return L(this, Ot);
  }
  async play(i) {
    L(this, Ot).srcObject = i, await L(this, Ot).play();
  }
  stop() {
    L(this, Ot).srcObject = null;
  }
  hasSrcObject() {
    return !!L(this, Ot).srcObject;
  }
}
Ot = new WeakMap();
function J1(x) {
  const i = ut(null), t = ut(), { handleError: e, setIsCameraReady: n } = $0(), [o, r] = Xe(), s = Kt((c) => {
    r((d) => y1(c, d));
  }, []);
  de(() => ((async () => {
    if (!i.current) {
      e(new xe("Something went wrong during video initialization"));
      return;
    }
    const d = new _1(i.current), g = new ng(), C = new j1(d, g);
    try {
      const u = {};
      u.facingMode = x, await C.startVideoStream(u);
    } catch (u) {
      if (u instanceof Error) {
        e(xe.fromCameraError(u));
        return;
      }
    }
    n(!0), s(C.getCameraResolution()), t.current = C;
  })(), function() {
    t.current && t.current.stopStreaming(), n(!1);
  }), [x, e, n, i, s]);
  const a = {};
  return a.cameraService = t.current, a.cameraResolution = o, a.onCameraResolutionChange = s, a.videoRef = i, a;
}
function U1(x, i) {
  de(() => {
    if (!x.current) return;
    const t = new ResizeObserver((e) => {
      const [n] = e;
      E1(i, n.contentRect);
    });
    return t.observe(x.current), () => {
      t.disconnect();
    };
  }, [x, i]);
}
function Q1(x) {
  return tn(Math.abs(x));
}
const z1 = () => {
  const [x, i] = Xe(null), t = ut(new hr(5));
  function e(o) {
    const { z: r } = o.accelerationIncludingGravity || {};
    if (!r) return;
    t.current.pushFixed(Q1(r));
    const s = tn(Xc(t.current)), a = {};
    a.z = s, i(a);
  }
  de(() => (window.addEventListener("devicemotion", v1(e, Rl), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const n = {};
  return n.acceleration = x, n;
}, q1 = async () => WebAssembly.validate(new Uint8Array([5 * -1013 + 1 * 503 + 4562, -5821 * 1 + 7428 + -1510, 17 * -115 + -7064 + 9134, -1 * -4357 + -7096 + 2848, 7527 + -37 * 43 + 1187 * -5, -3571 * 2 + -4867 + 1 * 12009, -16380 + 52 * 315, 7840 + 40 * -196, 2687 * 2 + 2100 + -159 * 47, -746 + 2 * -3059 + -6869 * -1, -8495 * 1 + -6418 + 14914, 7287 + 38 * -107 + 3125 * -1, 5714 * 1 + 2 * -3121 + -1 * -528, -5089 + -5944 * 1 + 11034, 542 * -18 + -584 * -4 + 7543, -722 * -2 + 12 * -329 + 2507, 3293 * 1 + 1 * -137 + -38 * 83, 11 * -123 + 2296 + 314 * -3, 0, -1 * 3523 + 4597 + -1064, 10, 1888 * 5 + -2856 + 6583 * -1, 127 * -19 + -3093 + 5514, 9750 + 361 * 9 + -1 * 12999, -53 * 131 + -1 * 5164 + 12172, 6762 + 15 * 655 + -16587, -3497 + 3 * 1250, 8837 * 1 + -7 * 497 + 1781 * -3, -3 * -1585 + 1 * -3907 + -595, -33 * 76 + -7522 + 10128, 11]));
function $1() {
  const [x] = window.crypto.getRandomValues(new Uint32Array(1));
  return x.toString(-278 + 1 * 122 + 172);
}
function eI() {
  const x = sessionStorage.getItem("dot-user-id");
  if (x) return x;
  const i = $1();
  return sessionStorage.setItem("dot-user-id", i), i;
}
function tI(x, i) {
  return i ? i === "user" ? "Front Camera" : "Back Camera" : x;
}
const Qa = (x) => Math.round(x / 500) * 500 / (7066 * 1 + -283 * 20 + -1 * 406), R0 = (x) => x ? x <= 5175 + -2 * -4519 + -14212 ? Math.round(x * 20) / (6 * 628 + -73 * 34 + -1266) : Math.round(x / (-9298 + -123 * -76)) * (-19386 + -4 * -4859) : -68 * -71 + 763 + -5591, nI = (x) => Math.round(x * (-1 * -509 + 795 * 6 + -5277)) / (-7094 * 1 + -3008 * -1 + -14 * -292);
async function xI() {
  return await q1() ? Va.SIMD : Va.NO_SIMD;
}
var On, si;
class xg {
  constructor(i) {
    ne(this, On, !0);
    ne(this, si, Date.now());
    V(this, "analytics");
    V(this, "samVersion");
    V(this, "sessionToken");
    V(this, "onDetectionCallback");
    V(this, "onCaptureCallback");
    V(this, "createProtoMessage");
    V(this, "fpsOfAllImages", new hr(-1 * 8467 + -1 * 4478 + 865 * 15));
    V(this, "cameraService");
    V(this, "imageProcessor");
    this.cameraService = i.cameraService, this.imageProcessor = i.imageProcessor, this.analytics = i.analytics, this.samVersion = i.samVersion, this.sessionToken = i.sessionToken, this.createProtoMessage = i.createProtoMessage, this.onDetectionCallback = i.onDetectionCallback, this.onCaptureCallback = i.onCaptureCallback;
  }
  async run() {
    for (; L(this, On); )
      await this.iterate();
    return this;
  }
  stop() {
    $(this, On, !1);
  }
  async trackCaptureProcess(i, t) {
    var r;
    const e = Date.now(), n = Xc(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height, (r = this.analytics) == null || r.trackCaptureProcess({ detection: i, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: n, captureProcessDurationInMs: e - L(this, si), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await xI() });
  }
  onDetection(i, t) {
    this.onDetectionCallback({ ...i, samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: i, canvasImage: t, detection: e }) {
    const n = {};
    n.width = t.width, n.height = t.height;
    const o = n, r = await Nc(t), s = await this.cameraService.getCameraProperties(), a = { ...s, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp() }, c = {};
    c.sessionToken = this.sessionToken, c.web = a;
    const d = c, g = await this.createProtoMessage(r, d), C = {};
    C.detection = e, C.imageResolution = o;
    const u = {};
    u.image = r, u.data = C;
    const p = u;
    this.stop();
    const m = {};
    m.imageData = p, m.protoMessage = g, m.webMetadata = a, m.candidateSelectionImages = i, this.onCaptureCallback(m);
  }
  getDetectionEndTime(i) {
    return Date.now() - i;
  }
  getInvalidInstructions(i, t) {
    const e = [];
    return Array.from(i).forEach(([n, o]) => {
      !o && e.push(t[n]);
    }), e;
  }
  async sleep(i) {
    await No(Math.max(Da.max - i, Da.min));
  }
}
On = new WeakMap(), si = new WeakMap();
class iI extends xg {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, instructionCodeMap: n, ...o }) {
    super(o);
    V(this, "candidateSelectionTime", 0);
    V(this, "candidatesSelectionFramesCount", -1 * 2487 + -744 + 3231);
    V(this, "isInCandidateSelection", !1);
    V(this, "lastImage", null);
    V(this, "bestImage", null);
    V(this, "candidateSelectionImages", []);
    V(this, "fallbackInstruction");
    V(this, "instructionCodeMap");
    V(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.instructionCodeMap = n, this.checkToInstructionCodeMap = t;
  }
  async iterate() {
    if (this.isCandidateSelectionDone()) {
      await this.onCandidateSelectionDone();
      return;
    }
    const t = this.cameraService.takePhoto(), e = await this.processTakenPhoto(t);
    this.isInCandidateSelection ? this.saveBetterImage(t, e) : this.tryInitCandidatePhase(t, e);
    const n = {};
    n.takenPhoto = t, n.imageProcessorResult = e;
    const o = this.getDetectionDetails(n);
    this.onDetection(o, t.image), this.isInCandidateSelection && this.candidateSelectionBegun();
    const r = {};
    r.instructionCode = o.processedImage.instructionCode, r.isValid = e.isValid, r.image = t.image, r.detection = e.detection, this.lastImage = r, await this.sleep(o.detectionTime);
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? xe.fromCameraError(e) : xe.fromError(e);
    }
  }
  saveBetterImage(t, e) {
    if (!(this.bestImage && e.isValid && this.isNewImageBetter(this.bestImage.detection, e.detection))) return;
    const o = {};
    o.image = t.image, o.detection = e.detection;
    const r = o;
    this.bestImage = r, this.candidateSelectionImages.push(r);
  }
  tryInitCandidatePhase(t, e) {
    var s;
    if (!(((s = this.lastImage) == null ? void 0 : s.isValid) && e.isValid)) return;
    const o = {};
    o.image = t.image, o.detection = e.detection;
    const r = o;
    this.isNewImageBetter(this.lastImage.detection, r.detection) ? this.bestImage = r : this.bestImage = this.lastImage, this.candidateSelectionImages.push(this.lastImage, r), this.isInCandidateSelection = !0;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime === 9284 + 199 * 12 + -11672 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= Mi.minFrames ? t > Mi.minDuration : t > Mi.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages }), this.imageProcessor.reset();
    else throw new xe("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const n = this.getDetectionEndTime(e.timestamp), o = tn((-4834 * -2 + 2458 + -11126) / n);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = e.image.width, r.height = e.image.height;
    const s = r, a = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), c = {};
    c.isNewDetectionValid = t.isValid, c.newInvalidInstruction = a[1698 * 1 + 5942 + -8 * 955];
    const d = this.getInstructionCode(c), g = {};
    g.detection = t.detection, g.instructionCode = d, g.invalidValidators = a, g.isInCandidateSelection = this.isInCandidateSelection;
    const C = {};
    return C.processedImage = g, C.detectionTime = n, C.fps = o, C.resolution = s, C;
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var n;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (n = this.lastImage) != null && n.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
var Yt, r0;
class oI extends xg {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, ...n }) {
    super(n);
    ne(this, Yt, void (7 * 281 + -211 * 41 + 6684));
    ne(this, r0);
    V(this, "fallbackInstruction");
    V(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, n;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Yi).includes((n = t.detail) == null ? void 0 : n["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    $(this, r0, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && $(this, Yt, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(Pa.REQUEST_CAPTURE, L(this, r0));
  }
  async iterate() {
    const t = this.cameraService.takePhoto(), e = await this.processTakenPhoto(t), n = this.getDetectionDetails(t, e);
    if (this.onDetection(n, t.image), this.isCaptureDone(e)) {
      await this.onCaptureDone(t.image, e.detection);
      return;
    }
    await this.sleep(n.detectionTime);
  }
  isCaptureDone(t) {
    return L(this, Yt) ? L(this, Yt) === Yi.FIRST_FRAME ? !0 : L(this, Yt) === Yi.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? xe.fromCameraError(e) : xe.fromError(e);
    }
  }
  async onCaptureDone(t, e) {
    this.trackCaptureProcess(e, t);
    const n = {};
    n.canvasImage = t, n.detection = e, n.candidateSelectionImages = [], await this.onCapture(n), $(this, Yt, void (7 * 483 + 67 * 93 + -9612)), this.imageProcessor.reset();
  }
  getDetectionDetails(t, e) {
    const n = this.getDetectionEndTime(t.timestamp), o = tn((1 * -4021 + -1 * 1898 + 629 * 11) / n);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = t.image.width, r.height = t.image.height;
    const s = r, a = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), c = this.getInstructionCode(a[0]), d = {};
    d.detection = e.detection, d.instructionCode = c, d.invalidValidators = a, d.isInCandidateSelection = !1;
    const g = {};
    return g.processedImage = d, g.detectionTime = n, g.fps = o, g.resolution = s, g;
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), L(this, r0) && document.removeEventListener(Pa.REQUEST_CAPTURE, L(this, r0));
  }
}
Yt = new WeakMap(), r0 = new WeakMap();
function rI({ captureMode: x, ...i }) {
  return x === bc.AUTO_CAPTURE ? new iI(i) : new oI(i);
}
function aI({ cameraResolution: x, cameraService: i, customEvent: t }) {
  const { shouldCameraMirror: e } = M1(t.CONTROL, i), n = {};
  n.cameraResolution = x, n.shouldCameraMirror = e, F1(t.CAMERA_PROPS_CHANGED, n), de(() => () => {
    Bn.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = e, o;
}
function sI({ cameraFacing: x, captureMode: i, checkToInstructionCodeMap: t, controller: e, createProtoMessage: n, customEvent: o, fallbackInstruction: r, instructionCodeMap: s, onCapture: a, onDetection: c, sessionToken: d }) {
  const { appState: g, handleAppStateChange: C } = $0(), { sunfish: u } = _n(), { analytics: p } = vc(), { cameraResolution: m, cameraService: A, onCameraResolutionChange: l, videoRef: W } = J1(x), O = {};
  O.cameraResolution = m, O.cameraService = A, O.customEvent = o;
  const { shouldCameraMirror: D } = aI(O), Y = en(void (1 * -3716 + -604 * 14 + 12172)), _ = Kt((U) => {
    C(bt.WAITING), a(U);
  }, [a, C]), H = Kt((U, te) => {
    l(U.resolution), Y.value = U, c(U, te);
  }, [c, Y, l]);
  de(() => {
    A != null && A["isStreaming"] && (e != null && e["isDetectorInitialized"]) && u && C(bt.RUNNING);
  }, [A == null ? void 0 : A["isStreaming"], e == null ? void 0 : e["isDetectorInitialized"], C, u]), de(() => {
    if (g !== bt.RUNNING) return;
    if (!A || !e) throw new xe("Cannot start detection");
    const U = {};
    U.captureMode = i, U.analytics = p, U.cameraService = A, U.imageProcessor = e.imageProcessor, U.fallbackInstruction = r, U.instructionCodeMap = s, U.checkToInstructionCodeMap = t, U.sessionToken = d, U.samVersion = e.samVersion, U.createProtoMessage = n, U.onCaptureCallback = _, U.onDetectionCallback = H;
    const te = rI(U);
    return e.runDetectionLoop(te), () => {
      e.stopDetectionLoop();
    };
  }, [g, e, A, _, H, d, Y, p, n, s, t, r, i]);
  const re = {};
  return re.videoRef = W, re.cameraResolution = m, re.detectionDetails = Y, re.shouldCameraMirror = D, re;
}
var $t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ig = {}, za = {}, cI = gI;
function gI(x, i) {
  for (var t = new Array(arguments.length - 1), e = 0, n = 2, o = !0; n < arguments.length; )
    t[e++] = arguments[n++];
  return new Promise(function(r, s) {
    t[e] = function(a) {
      if (o)
        if (o = !1, a)
          s(a);
        else {
          for (var c = new Array(arguments.length - 1), d = 0; d < c.length; )
            c[d++] = arguments[d];
          r.apply(null, c);
        }
    };
    try {
      x.apply(i || null, t);
    } catch (a) {
      o && (o = !1, s(a));
    }
  });
}
var og = {};
(function(x) {
  var i = x;
  i.length = function(r) {
    var s = r.length;
    if (!s)
      return 0;
    for (var a = 0; --s % 4 > 1 && r.charAt(s) === "="; )
      ++a;
    return Math.ceil(r.length * 3) / 4 - a;
  };
  for (var t = new Array(64), e = new Array(123), n = 0; n < 64; )
    e[t[n] = n < 26 ? n + 65 : n < 52 ? n + 71 : n < 62 ? n - 4 : n - 59 | 43] = n++;
  i.encode = function(r, s, a) {
    for (var c = null, d = [], g = 0, C = 0, u; s < a; ) {
      var p = r[s++];
      switch (C) {
        case 0:
          d[g++] = t[p >> 2], u = (p & 3) << 4, C = 1;
          break;
        case 1:
          d[g++] = t[u | p >> 4], u = (p & 15) << 2, C = 2;
          break;
        case 2:
          d[g++] = t[u | p >> 6], d[g++] = t[p & 63], C = 0;
          break;
      }
      g > 8191 && ((c || (c = [])).push(String.fromCharCode.apply(String, d)), g = 0);
    }
    return C && (d[g++] = t[u], d[g++] = 61, C === 1 && (d[g++] = 61)), c ? (g && c.push(String.fromCharCode.apply(String, d.slice(0, g))), c.join("")) : String.fromCharCode.apply(String, d.slice(0, g));
  };
  var o = "invalid encoding";
  i.decode = function(r, s, a) {
    for (var c = a, d = 0, g, C = 0; C < r.length; ) {
      var u = r.charCodeAt(C++);
      if (u === 61 && d > 1)
        break;
      if ((u = e[u]) === void 0)
        throw Error(o);
      switch (d) {
        case 0:
          g = u, d = 1;
          break;
        case 1:
          s[a++] = g << 2 | (u & 48) >> 4, g = u, d = 2;
          break;
        case 2:
          s[a++] = (g & 15) << 4 | (u & 60) >> 2, g = u, d = 3;
          break;
        case 3:
          s[a++] = (g & 3) << 6 | u, d = 0;
          break;
      }
    }
    if (d === 1)
      throw Error(o);
    return a - c;
  }, i.test = function(r) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
  };
})(og);
var dI = bi;
function bi() {
  this._listeners = {};
}
bi.prototype.on = function(x, i, t) {
  return (this._listeners[x] || (this._listeners[x] = [])).push({
    fn: i,
    ctx: t || this
  }), this;
};
bi.prototype.off = function(x, i) {
  if (x === void 0)
    this._listeners = {};
  else if (i === void 0)
    this._listeners[x] = [];
  else
    for (var t = this._listeners[x], e = 0; e < t.length; )
      t[e].fn === i ? t.splice(e, 1) : ++e;
  return this;
};
bi.prototype.emit = function(x) {
  var i = this._listeners[x];
  if (i) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < i.length; )
      i[e].fn.apply(i[e++].ctx, t);
  }
  return this;
};
var uI = qa(qa);
function qa(x) {
  return typeof Float32Array < "u" ? function() {
    var i = new Float32Array([-0]), t = new Uint8Array(i.buffer), e = t[3] === 128;
    function n(a, c, d) {
      i[0] = a, c[d] = t[0], c[d + 1] = t[1], c[d + 2] = t[2], c[d + 3] = t[3];
    }
    function o(a, c, d) {
      i[0] = a, c[d] = t[3], c[d + 1] = t[2], c[d + 2] = t[1], c[d + 3] = t[0];
    }
    x.writeFloatLE = e ? n : o, x.writeFloatBE = e ? o : n;
    function r(a, c) {
      return t[0] = a[c], t[1] = a[c + 1], t[2] = a[c + 2], t[3] = a[c + 3], i[0];
    }
    function s(a, c) {
      return t[3] = a[c], t[2] = a[c + 1], t[1] = a[c + 2], t[0] = a[c + 3], i[0];
    }
    x.readFloatLE = e ? r : s, x.readFloatBE = e ? s : r;
  }() : function() {
    function i(e, n, o, r) {
      var s = n < 0 ? 1 : 0;
      if (s && (n = -n), n === 0)
        e(1 / n > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), o, r);
      else if (isNaN(n))
        e(2143289344, o, r);
      else if (n > 34028234663852886e22)
        e((s << 31 | 2139095040) >>> 0, o, r);
      else if (n < 11754943508222875e-54)
        e((s << 31 | Math.round(n / 1401298464324817e-60)) >>> 0, o, r);
      else {
        var a = Math.floor(Math.log(n) / Math.LN2), c = Math.round(n * Math.pow(2, -a) * 8388608) & 8388607;
        e((s << 31 | a + 127 << 23 | c) >>> 0, o, r);
      }
    }
    x.writeFloatLE = i.bind(null, $a), x.writeFloatBE = i.bind(null, es);
    function t(e, n, o) {
      var r = e(n, o), s = (r >> 31) * 2 + 1, a = r >>> 23 & 255, c = r & 8388607;
      return a === 255 ? c ? NaN : s * (1 / 0) : a === 0 ? s * 1401298464324817e-60 * c : s * Math.pow(2, a - 150) * (c + 8388608);
    }
    x.readFloatLE = t.bind(null, ts), x.readFloatBE = t.bind(null, ns);
  }(), typeof Float64Array < "u" ? function() {
    var i = new Float64Array([-0]), t = new Uint8Array(i.buffer), e = t[7] === 128;
    function n(a, c, d) {
      i[0] = a, c[d] = t[0], c[d + 1] = t[1], c[d + 2] = t[2], c[d + 3] = t[3], c[d + 4] = t[4], c[d + 5] = t[5], c[d + 6] = t[6], c[d + 7] = t[7];
    }
    function o(a, c, d) {
      i[0] = a, c[d] = t[7], c[d + 1] = t[6], c[d + 2] = t[5], c[d + 3] = t[4], c[d + 4] = t[3], c[d + 5] = t[2], c[d + 6] = t[1], c[d + 7] = t[0];
    }
    x.writeDoubleLE = e ? n : o, x.writeDoubleBE = e ? o : n;
    function r(a, c) {
      return t[0] = a[c], t[1] = a[c + 1], t[2] = a[c + 2], t[3] = a[c + 3], t[4] = a[c + 4], t[5] = a[c + 5], t[6] = a[c + 6], t[7] = a[c + 7], i[0];
    }
    function s(a, c) {
      return t[7] = a[c], t[6] = a[c + 1], t[5] = a[c + 2], t[4] = a[c + 3], t[3] = a[c + 4], t[2] = a[c + 5], t[1] = a[c + 6], t[0] = a[c + 7], i[0];
    }
    x.readDoubleLE = e ? r : s, x.readDoubleBE = e ? s : r;
  }() : function() {
    function i(e, n, o, r, s, a) {
      var c = r < 0 ? 1 : 0;
      if (c && (r = -r), r === 0)
        e(0, s, a + n), e(1 / r > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), s, a + o);
      else if (isNaN(r))
        e(0, s, a + n), e(2146959360, s, a + o);
      else if (r > 17976931348623157e292)
        e(0, s, a + n), e((c << 31 | 2146435072) >>> 0, s, a + o);
      else {
        var d;
        if (r < 22250738585072014e-324)
          d = r / 5e-324, e(d >>> 0, s, a + n), e((c << 31 | d / 4294967296) >>> 0, s, a + o);
        else {
          var g = Math.floor(Math.log(r) / Math.LN2);
          g === 1024 && (g = 1023), d = r * Math.pow(2, -g), e(d * 4503599627370496 >>> 0, s, a + n), e((c << 31 | g + 1023 << 20 | d * 1048576 & 1048575) >>> 0, s, a + o);
        }
      }
    }
    x.writeDoubleLE = i.bind(null, $a, 0, 4), x.writeDoubleBE = i.bind(null, es, 4, 0);
    function t(e, n, o, r, s) {
      var a = e(r, s + n), c = e(r, s + o), d = (c >> 31) * 2 + 1, g = c >>> 20 & 2047, C = 4294967296 * (c & 1048575) + a;
      return g === 2047 ? C ? NaN : d * (1 / 0) : g === 0 ? d * 5e-324 * C : d * Math.pow(2, g - 1075) * (C + 4503599627370496);
    }
    x.readDoubleLE = t.bind(null, ts, 0, 4), x.readDoubleBE = t.bind(null, ns, 4, 0);
  }(), x;
}
function $a(x, i, t) {
  i[t] = x & 255, i[t + 1] = x >>> 8 & 255, i[t + 2] = x >>> 16 & 255, i[t + 3] = x >>> 24;
}
function es(x, i, t) {
  i[t] = x >>> 24, i[t + 1] = x >>> 16 & 255, i[t + 2] = x >>> 8 & 255, i[t + 3] = x & 255;
}
function ts(x, i) {
  return (x[i] | x[i + 1] << 8 | x[i + 2] << 16 | x[i + 3] << 24) >>> 0;
}
function ns(x, i) {
  return (x[i] << 24 | x[i + 1] << 16 | x[i + 2] << 8 | x[i + 3]) >>> 0;
}
function xs(x) {
  throw new Error('Could not dynamically require "' + x + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var lI = II;
function II(x) {
  try {
    if (typeof xs != "function")
      return null;
    var i = xs(x);
    return i && (i.length || Object.keys(i).length) ? i : null;
  } catch {
    return null;
  }
}
var rg = {};
(function(x) {
  var i = x;
  i.length = function(t) {
    for (var e = 0, n = 0, o = 0; o < t.length; ++o)
      n = t.charCodeAt(o), n < 128 ? e += 1 : n < 2048 ? e += 2 : (n & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 ? (++o, e += 4) : e += 3;
    return e;
  }, i.read = function(t, e, n) {
    var o = n - e;
    if (o < 1)
      return "";
    for (var r = null, s = [], a = 0, c; e < n; )
      c = t[e++], c < 128 ? s[a++] = c : c > 191 && c < 224 ? s[a++] = (c & 31) << 6 | t[e++] & 63 : c > 239 && c < 365 ? (c = ((c & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, s[a++] = 55296 + (c >> 10), s[a++] = 56320 + (c & 1023)) : s[a++] = (c & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, a > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, s)), a = 0);
    return r ? (a && r.push(String.fromCharCode.apply(String, s.slice(0, a))), r.join("")) : String.fromCharCode.apply(String, s.slice(0, a));
  }, i.write = function(t, e, n) {
    for (var o = n, r, s, a = 0; a < t.length; ++a)
      r = t.charCodeAt(a), r < 128 ? e[n++] = r : r < 2048 ? (e[n++] = r >> 6 | 192, e[n++] = r & 63 | 128) : (r & 64512) === 55296 && ((s = t.charCodeAt(a + 1)) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (s & 1023), ++a, e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128) : (e[n++] = r >> 12 | 224, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128);
    return n - o;
  };
})(rg);
var fI = CI;
function CI(x, i, t) {
  var e = t || 8192, n = e >>> 1, o = null, r = e;
  return function(s) {
    if (s < 1 || s > n)
      return x(s);
    r + s > e && (o = x(e), r = 0);
    var a = i.call(o, r, r += s);
    return r & 7 && (r = (r | 7) + 1), a;
  };
}
var eo, is;
function pI() {
  if (is)
    return eo;
  is = 1, eo = i;
  var x = m0();
  function i(o, r) {
    this.lo = o >>> 0, this.hi = r >>> 0;
  }
  var t = i.zero = new i(0, 0);
  t.toNumber = function() {
    return 0;
  }, t.zzEncode = t.zzDecode = function() {
    return this;
  }, t.length = function() {
    return 1;
  };
  var e = i.zeroHash = "\0\0\0\0\0\0\0\0";
  i.fromNumber = function(o) {
    if (o === 0)
      return t;
    var r = o < 0;
    r && (o = -o);
    var s = o >>> 0, a = (o - s) / 4294967296 >>> 0;
    return r && (a = ~a >>> 0, s = ~s >>> 0, ++s > 4294967295 && (s = 0, ++a > 4294967295 && (a = 0))), new i(s, a);
  }, i.from = function(o) {
    if (typeof o == "number")
      return i.fromNumber(o);
    if (x.isString(o))
      if (x.Long)
        o = x.Long.fromString(o);
      else
        return i.fromNumber(parseInt(o, 10));
    return o.low || o.high ? new i(o.low >>> 0, o.high >>> 0) : t;
  }, i.prototype.toNumber = function(o) {
    if (!o && this.hi >>> 31) {
      var r = ~this.lo + 1 >>> 0, s = ~this.hi >>> 0;
      return r || (s = s + 1 >>> 0), -(r + s * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, i.prototype.toLong = function(o) {
    return x.Long ? new x.Long(this.lo | 0, this.hi | 0, !!o) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!o };
  };
  var n = String.prototype.charCodeAt;
  return i.fromHash = function(o) {
    return o === e ? t : new i(
      (n.call(o, 0) | n.call(o, 1) << 8 | n.call(o, 2) << 16 | n.call(o, 3) << 24) >>> 0,
      (n.call(o, 4) | n.call(o, 5) << 8 | n.call(o, 6) << 16 | n.call(o, 7) << 24) >>> 0
    );
  }, i.prototype.toHash = function() {
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
  }, i.prototype.zzEncode = function() {
    var o = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ o) >>> 0, this.lo = (this.lo << 1 ^ o) >>> 0, this;
  }, i.prototype.zzDecode = function() {
    var o = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ o) >>> 0, this.hi = (this.hi >>> 1 ^ o) >>> 0, this;
  }, i.prototype.length = function() {
    var o = this.lo, r = (this.lo >>> 28 | this.hi << 4) >>> 0, s = this.hi >>> 24;
    return s === 0 ? r === 0 ? o < 16384 ? o < 128 ? 1 : 2 : o < 2097152 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 2097152 ? 7 : 8 : s < 128 ? 9 : 10;
  }, eo;
}
var os;
function m0() {
  return os || (os = 1, function(x) {
    var i = x;
    i.asPromise = cI, i.base64 = og, i.EventEmitter = dI, i.float = uI, i.inquire = lI, i.utf8 = rg, i.pool = fI, i.LongBits = pI(), i.isNode = !!(typeof $t < "u" && $t && $t.process && $t.process.versions && $t.process.versions.node), i.global = i.isNode && $t || typeof window < "u" && window || typeof self < "u" && self || $t, i.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), i.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), i.isInteger = Number.isInteger || /* istanbul ignore next */
    function(n) {
      return typeof n == "number" && isFinite(n) && Math.floor(n) === n;
    }, i.isString = function(n) {
      return typeof n == "string" || n instanceof String;
    }, i.isObject = function(n) {
      return n && typeof n == "object";
    }, i.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    i.isSet = function(n, o) {
      var r = n[o];
      return r != null && n.hasOwnProperty(o) ? typeof r != "object" || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0 : !1;
    }, i.Buffer = function() {
      try {
        var n = i.inquire("buffer").Buffer;
        return n.prototype.utf8Write ? n : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), i._Buffer_from = null, i._Buffer_allocUnsafe = null, i.newBuffer = function(n) {
      return typeof n == "number" ? i.Buffer ? i._Buffer_allocUnsafe(n) : new i.Array(n) : i.Buffer ? i._Buffer_from(n) : typeof Uint8Array > "u" ? n : new Uint8Array(n);
    }, i.Array = typeof Uint8Array < "u" ? Uint8Array : Array, i.Long = /* istanbul ignore next */
    i.global.dcodeIO && /* istanbul ignore next */
    i.global.dcodeIO.Long || /* istanbul ignore next */
    i.global.Long || i.inquire("long"), i.key2Re = /^true|false|0|1$/, i.key32Re = /^-?(?:0|[1-9][0-9]*)$/, i.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, i.longToHash = function(n) {
      return n ? i.LongBits.from(n).toHash() : i.LongBits.zeroHash;
    }, i.longFromHash = function(n, o) {
      var r = i.LongBits.fromHash(n);
      return i.Long ? i.Long.fromBits(r.lo, r.hi, o) : r.toNumber(!!o);
    };
    function t(n, o, r) {
      for (var s = Object.keys(o), a = 0; a < s.length; ++a)
        (n[s[a]] === void 0 || !r) && (n[s[a]] = o[s[a]]);
      return n;
    }
    i.merge = t, i.lcFirst = function(n) {
      return n.charAt(0).toLowerCase() + n.substring(1);
    };
    function e(n) {
      function o(r, s) {
        if (!(this instanceof o))
          return new o(r, s);
        Object.defineProperty(this, "message", { get: function() {
          return r;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, o) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), s && t(this, s);
      }
      return o.prototype = Object.create(Error.prototype, {
        constructor: {
          value: o,
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
      }), o;
    }
    i.newError = e, i.ProtocolError = e("ProtocolError"), i.oneOfGetter = function(n) {
      for (var o = {}, r = 0; r < n.length; ++r)
        o[n[r]] = 1;
      return function() {
        for (var s = Object.keys(this), a = s.length - 1; a > -1; --a)
          if (o[s[a]] === 1 && this[s[a]] !== void 0 && this[s[a]] !== null)
            return s[a];
      };
    }, i.oneOfSetter = function(n) {
      return function(o) {
        for (var r = 0; r < n.length; ++r)
          n[r] !== o && delete this[n[r]];
      };
    }, i.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, i._configure = function() {
      var n = i.Buffer;
      if (!n) {
        i._Buffer_from = i._Buffer_allocUnsafe = null;
        return;
      }
      i._Buffer_from = n.from !== Uint8Array.from && n.from || /* istanbul ignore next */
      function(o, r) {
        return new n(o, r);
      }, i._Buffer_allocUnsafe = n.allocUnsafe || /* istanbul ignore next */
      function(o) {
        return new n(o);
      };
    };
  }(za)), za;
}
var ag = Q, it = m0(), Yo, Ai = it.LongBits, rs = it.base64, as = it.utf8;
function Un(x, i, t) {
  this.fn = x, this.len = i, this.next = void 0, this.val = t;
}
function mr() {
}
function hI(x) {
  this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
}
function Q() {
  this.len = 0, this.head = new Un(mr, 0, 0), this.tail = this.head, this.states = null;
}
var sg = function() {
  return it.Buffer ? function() {
    return (Q.create = function() {
      return new Yo();
    })();
  } : function() {
    return new Q();
  };
};
Q.create = sg();
Q.alloc = function(x) {
  return new it.Array(x);
};
it.Array !== Array && (Q.alloc = it.pool(Q.alloc, it.Array.prototype.subarray));
Q.prototype._push = function(x, i, t) {
  return this.tail = this.tail.next = new Un(x, i, t), this.len += i, this;
};
function br(x, i, t) {
  i[t] = x & 255;
}
function mI(x, i, t) {
  for (; x > 127; )
    i[t++] = x & 127 | 128, x >>>= 7;
  i[t] = x;
}
function Ar(x, i) {
  this.len = x, this.next = void 0, this.val = i;
}
Ar.prototype = Object.create(Un.prototype);
Ar.prototype.fn = mI;
Q.prototype.uint32 = function(x) {
  return this.len += (this.tail = this.tail.next = new Ar(
    (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
    x
  )).len, this;
};
Q.prototype.int32 = function(x) {
  return x < 0 ? this._push(yr, 10, Ai.fromNumber(x)) : this.uint32(x);
};
Q.prototype.sint32 = function(x) {
  return this.uint32((x << 1 ^ x >> 31) >>> 0);
};
function yr(x, i, t) {
  for (; x.hi; )
    i[t++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
  for (; x.lo > 127; )
    i[t++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
  i[t++] = x.lo;
}
Q.prototype.uint64 = function(x) {
  var i = Ai.from(x);
  return this._push(yr, i.length(), i);
};
Q.prototype.int64 = Q.prototype.uint64;
Q.prototype.sint64 = function(x) {
  var i = Ai.from(x).zzEncode();
  return this._push(yr, i.length(), i);
};
Q.prototype.bool = function(x) {
  return this._push(br, 1, x ? 1 : 0);
};
function Mo(x, i, t) {
  i[t] = x & 255, i[t + 1] = x >>> 8 & 255, i[t + 2] = x >>> 16 & 255, i[t + 3] = x >>> 24;
}
Q.prototype.fixed32 = function(x) {
  return this._push(Mo, 4, x >>> 0);
};
Q.prototype.sfixed32 = Q.prototype.fixed32;
Q.prototype.fixed64 = function(x) {
  var i = Ai.from(x);
  return this._push(Mo, 4, i.lo)._push(Mo, 4, i.hi);
};
Q.prototype.sfixed64 = Q.prototype.fixed64;
Q.prototype.float = function(x) {
  return this._push(it.float.writeFloatLE, 4, x);
};
Q.prototype.double = function(x) {
  return this._push(it.float.writeDoubleLE, 8, x);
};
var bI = it.Array.prototype.set ? function(x, i, t) {
  i.set(x, t);
} : function(x, i, t) {
  for (var e = 0; e < x.length; ++e)
    i[t + e] = x[e];
};
Q.prototype.bytes = function(x) {
  var i = x.length >>> 0;
  if (!i)
    return this._push(br, 1, 0);
  if (it.isString(x)) {
    var t = Q.alloc(i = rs.length(x));
    rs.decode(x, t, 0), x = t;
  }
  return this.uint32(i)._push(bI, i, x);
};
Q.prototype.string = function(x) {
  var i = as.length(x);
  return i ? this.uint32(i)._push(as.write, i, x) : this._push(br, 1, 0);
};
Q.prototype.fork = function() {
  return this.states = new hI(this), this.head = this.tail = new Un(mr, 0, 0), this.len = 0, this;
};
Q.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Un(mr, 0, 0), this.len = 0), this;
};
Q.prototype.ldelim = function() {
  var x = this.head, i = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = x.next, this.tail = i, this.len += t), this;
};
Q.prototype.finish = function() {
  for (var x = this.head.next, i = this.constructor.alloc(this.len), t = 0; x; )
    x.fn(x.val, i, t), t += x.len, x = x.next;
  return i;
};
Q._configure = function(x) {
  Yo = x, Q.create = sg(), Yo._configure();
};
var AI = yt, cg = ag;
(yt.prototype = Object.create(cg.prototype)).constructor = yt;
var Xt = m0();
function yt() {
  cg.call(this);
}
yt._configure = function() {
  yt.alloc = Xt._Buffer_allocUnsafe, yt.writeBytesBuffer = Xt.Buffer && Xt.Buffer.prototype instanceof Uint8Array && Xt.Buffer.prototype.set.name === "set" ? function(x, i, t) {
    i.set(x, t);
  } : function(x, i, t) {
    if (x.copy)
      x.copy(i, t, 0, x.length);
    else
      for (var e = 0; e < x.length; )
        i[t++] = x[e++];
  };
};
yt.prototype.bytes = function(x) {
  Xt.isString(x) && (x = Xt._Buffer_from(x, "base64"));
  var i = x.length >>> 0;
  return this.uint32(i), i && this._push(yt.writeBytesBuffer, i, x), this;
};
function yI(x, i, t) {
  x.length < 40 ? Xt.utf8.write(x, i, t) : i.utf8Write ? i.utf8Write(x, t) : i.write(x, t);
}
yt.prototype.string = function(x) {
  var i = Xt.Buffer.byteLength(x);
  return this.uint32(i), i && this._push(yI, i, x), this;
};
yt._configure();
var gg = fe, vt = m0(), Xo, dg = vt.LongBits, vI = vt.utf8;
function lt(x, i) {
  return RangeError("index out of range: " + x.pos + " + " + (i || 1) + " > " + x.len);
}
function fe(x) {
  this.buf = x, this.pos = 0, this.len = x.length;
}
var ss = typeof Uint8Array < "u" ? function(x) {
  if (x instanceof Uint8Array || Array.isArray(x))
    return new fe(x);
  throw Error("illegal buffer");
} : function(x) {
  if (Array.isArray(x))
    return new fe(x);
  throw Error("illegal buffer");
}, ug = function() {
  return vt.Buffer ? function(x) {
    return (fe.create = function(i) {
      return vt.Buffer.isBuffer(i) ? new Xo(i) : ss(i);
    })(x);
  } : ss;
};
fe.create = ug();
fe.prototype._slice = vt.Array.prototype.subarray || /* istanbul ignore next */
vt.Array.prototype.slice;
fe.prototype.uint32 = /* @__PURE__ */ function() {
  var x = 4294967295;
  return function() {
    if (x = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (x = (x | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return x;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, lt(this, 10);
    return x;
  };
}();
fe.prototype.int32 = function() {
  return this.uint32() | 0;
};
fe.prototype.sint32 = function() {
  var x = this.uint32();
  return x >>> 1 ^ -(x & 1) | 0;
};
function to() {
  var x = new dg(0, 0), i = 0;
  if (this.len - this.pos > 4) {
    for (; i < 4; ++i)
      if (x.lo = (x.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0, this.buf[this.pos++] < 128)
        return x;
    if (x.lo = (x.lo | (this.buf[this.pos] & 127) << 28) >>> 0, x.hi = (x.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return x;
    i = 0;
  } else {
    for (; i < 3; ++i) {
      if (this.pos >= this.len)
        throw lt(this);
      if (x.lo = (x.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0, this.buf[this.pos++] < 128)
        return x;
    }
    return x.lo = (x.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0, x;
  }
  if (this.len - this.pos > 4) {
    for (; i < 5; ++i)
      if (x.hi = (x.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return x;
  } else
    for (; i < 5; ++i) {
      if (this.pos >= this.len)
        throw lt(this);
      if (x.hi = (x.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return x;
    }
  throw Error("invalid varint encoding");
}
fe.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Qx(x, i) {
  return (x[i - 4] | x[i - 3] << 8 | x[i - 2] << 16 | x[i - 1] << 24) >>> 0;
}
fe.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw lt(this, 4);
  return Qx(this.buf, this.pos += 4);
};
fe.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw lt(this, 4);
  return Qx(this.buf, this.pos += 4) | 0;
};
function cs() {
  if (this.pos + 8 > this.len)
    throw lt(this, 8);
  return new dg(Qx(this.buf, this.pos += 4), Qx(this.buf, this.pos += 4));
}
fe.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw lt(this, 4);
  var x = vt.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, x;
};
fe.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw lt(this, 4);
  var x = vt.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, x;
};
fe.prototype.bytes = function() {
  var x = this.uint32(), i = this.pos, t = this.pos + x;
  if (t > this.len)
    throw lt(this, x);
  return this.pos += x, Array.isArray(this.buf) ? this.buf.slice(i, t) : i === t ? new this.buf.constructor(0) : this._slice.call(this.buf, i, t);
};
fe.prototype.string = function() {
  var x = this.bytes();
  return vI.read(x, 0, x.length);
};
fe.prototype.skip = function(x) {
  if (typeof x == "number") {
    if (this.pos + x > this.len)
      throw lt(this, x);
    this.pos += x;
  } else
    do
      if (this.pos >= this.len)
        throw lt(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
fe.prototype.skipType = function(x) {
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
fe._configure = function(x) {
  Xo = x, fe.create = ug(), Xo._configure();
  var i = vt.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  vt.merge(fe.prototype, {
    int64: function() {
      return to.call(this)[i](!1);
    },
    uint64: function() {
      return to.call(this)[i](!0);
    },
    sint64: function() {
      return to.call(this).zzDecode()[i](!1);
    },
    fixed64: function() {
      return cs.call(this)[i](!0);
    },
    sfixed64: function() {
      return cs.call(this)[i](!1);
    }
  });
};
var WI = C0, lg = gg;
(C0.prototype = Object.create(lg.prototype)).constructor = C0;
var gs = m0();
function C0(x) {
  lg.call(this, x);
}
C0._configure = function() {
  gs.Buffer && (C0.prototype._slice = gs.Buffer.prototype.slice);
};
C0.prototype.string = function() {
  var x = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + x, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + x, this.len));
};
C0._configure();
var Ig = {}, SI = kn, vr = m0();
(kn.prototype = Object.create(vr.EventEmitter.prototype)).constructor = kn;
function kn(x, i, t) {
  if (typeof x != "function")
    throw TypeError("rpcImpl must be a function");
  vr.EventEmitter.call(this), this.rpcImpl = x, this.requestDelimited = !!i, this.responseDelimited = !!t;
}
kn.prototype.rpcCall = function x(i, t, e, n, o) {
  if (!n)
    throw TypeError("request must be specified");
  var r = this;
  if (!o)
    return vr.asPromise(x, r, i, t, e, n);
  if (!r.rpcImpl) {
    setTimeout(function() {
      o(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return r.rpcImpl(
      i,
      t[r.requestDelimited ? "encodeDelimited" : "encode"](n).finish(),
      function(s, a) {
        if (s)
          return r.emit("error", s, i), o(s);
        if (a === null) {
          r.end(
            /* endedByRPC */
            !0
          );
          return;
        }
        if (!(a instanceof e))
          try {
            a = e[r.responseDelimited ? "decodeDelimited" : "decode"](a);
          } catch (c) {
            return r.emit("error", c, i), o(c);
          }
        return r.emit("data", a, i), o(null, a);
      }
    );
  } catch (s) {
    r.emit("error", s, i), setTimeout(function() {
      o(s);
    }, 0);
    return;
  }
};
kn.prototype.end = function(x) {
  return this.rpcImpl && (x || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(x) {
  var i = x;
  i.Service = SI;
})(Ig);
var wI = {};
(function(x) {
  var i = x;
  i.build = "minimal", i.Writer = ag, i.BufferWriter = AI, i.Reader = gg, i.BufferReader = WI, i.util = m0(), i.rpc = Ig, i.roots = wI, i.configure = t;
  function t() {
    i.util._configure(), i.Writer._configure(i.BufferWriter), i.Reader._configure(i.BufferReader);
  }
  t();
})(ig);
var ie = ig;
const B = ie.Reader, ue = ie.Writer, v = ie.util, h = ie.roots.default || (ie.roots.default = {}), p0 = h.dot = (() => {
  const x = {};
  return x.Content = function() {
    function i(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return i.prototype.token = v.newBuffer([]), i.prototype.iv = v.newBuffer([]), i.prototype.schemaVersion = 0, i.prototype.bytes = v.newBuffer([]), i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
      return e || (e = ue.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, o = new h.dot.Content();
      for (; t.pos < n; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            o.token = t.bytes();
            break;
          }
          case 2: {
            o.iv = t.bytes();
            break;
          }
          case 3: {
            o.schemaVersion = t.int32();
            break;
          }
          case 4: {
            o.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, i.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || v.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || v.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !v.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || v.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof h.dot.Content)
        return t;
      let e = new h.dot.Content();
      return t.token != null && (typeof t.token == "string" ? v.base64.decode(t.token, e.token = v.newBuffer(v.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? v.base64.decode(t.iv, e.iv = v.newBuffer(v.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? v.base64.decode(t.bytes, e.bytes = v.newBuffer(v.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.token = "" : (n.token = [], e.bytes !== Array && (n.token = v.newBuffer(n.token))), e.bytes === String ? n.iv = "" : (n.iv = [], e.bytes !== Array && (n.iv = v.newBuffer(n.iv))), n.schemaVersion = 0, e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = v.newBuffer(n.bytes)))), t.token != null && t.hasOwnProperty("token") && (n.token = e.bytes === String ? v.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (n.iv = e.bytes === String ? v.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (n.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? v.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, ie.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, i;
  }(), x.v4 = function() {
    const i = {};
    return i.MagnifEyeLivenessContent = function() {
      function t(e) {
        if (this.images = [], e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.images = v.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = ue.create()), e.images != null && e.images.length)
          for (let o = 0; o < e.images.length; ++o)
            h.dot.Image.encode(e.images[o], n.uint32(
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < o; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              r.images && r.images.length || (r.images = []), r.images.push(h.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              r.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.images != null && e.hasOwnProperty("images")) {
          if (!Array.isArray(e.images))
            return "images: array expected";
          for (let n = 0; n < e.images.length; ++n) {
            let o = h.dot.Image.verify(e.images[n]);
            if (o)
              return "images." + o;
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
          for (let o = 0; o < e.images.length; ++o) {
            if (typeof e.images[o] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            n.images[o] = h.dot.Image.fromObject(e.images[o]);
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
        let o = {};
        if ((n.arrays || n.defaults) && (o.images = []), n.defaults && (o.metadata = null), e.images && e.images.length) {
          o.images = [];
          for (let r = 0; r < e.images.length; ++r)
            o.images[r] = h.dot.Image.toObject(e.images[r], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), i.Metadata = function() {
      function t(n) {
        if (n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
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
      }, t.encode = function(n, o) {
        return o || (o = ue.create()), n.platform != null && Object.hasOwnProperty.call(n, "platform") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.platform), n.web != null && Object.hasOwnProperty.call(n, "web") && h.dot.v4.WebMetadata.encode(n.web, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.android != null && Object.hasOwnProperty.call(n, "android") && h.dot.v4.AndroidMetadata.encode(n.android, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.ios != null && Object.hasOwnProperty.call(n, "ios") && h.dot.v4.IosMetadata.encode(n.ios, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.sessionToken != null && Object.hasOwnProperty.call(n, "sessionToken") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(n.sessionToken), n.componentVersion != null && Object.hasOwnProperty.call(n, "componentVersion") && o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(n.componentVersion), o;
      }, t.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, t.decode = function(n, o) {
        n instanceof B || (n = B.create(n));
        let r = o === void 0 ? n.len : n.pos + o, s = new h.dot.v4.Metadata();
        for (; n.pos < r; ) {
          let a = n.uint32();
          switch (a >>> 3) {
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
              s.web = h.dot.v4.WebMetadata.decode(n, n.uint32());
              break;
            }
            case 3: {
              s.android = h.dot.v4.AndroidMetadata.decode(n, n.uint32());
              break;
            }
            case 4: {
              s.ios = h.dot.v4.IosMetadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(a & 7);
              break;
          }
        }
        return s;
      }, t.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        let o = {};
        if (n.platform != null && n.hasOwnProperty("platform"))
          switch (n.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (n.sessionToken != null && n.hasOwnProperty("sessionToken") && (o._sessionToken = 1, !v.isString(n.sessionToken)))
          return "sessionToken: string expected";
        if (n.componentVersion != null && n.hasOwnProperty("componentVersion") && !v.isString(n.componentVersion))
          return "componentVersion: string expected";
        if (n.web != null && n.hasOwnProperty("web")) {
          o.metadata = 1;
          {
            let r = h.dot.v4.WebMetadata.verify(n.web);
            if (r)
              return "web." + r;
          }
        }
        if (n.android != null && n.hasOwnProperty("android")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = h.dot.v4.AndroidMetadata.verify(n.android);
            if (r)
              return "android." + r;
          }
        }
        if (n.ios != null && n.hasOwnProperty("ios")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = h.dot.v4.IosMetadata.verify(n.ios);
            if (r)
              return "ios." + r;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof h.dot.v4.Metadata)
          return n;
        let o = new h.dot.v4.Metadata();
        switch (n.platform) {
          default:
            if (typeof n.platform == "number") {
              o.platform = n.platform;
              break;
            }
            break;
          case "WEB":
          case 0:
            o.platform = 0;
            break;
          case "ANDROID":
          case 1:
            o.platform = 1;
            break;
          case "IOS":
          case 2:
            o.platform = 2;
            break;
        }
        if (n.sessionToken != null && (o.sessionToken = String(n.sessionToken)), n.componentVersion != null && (o.componentVersion = String(n.componentVersion)), n.web != null) {
          if (typeof n.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          o.web = h.dot.v4.WebMetadata.fromObject(n.web);
        }
        if (n.android != null) {
          if (typeof n.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          o.android = h.dot.v4.AndroidMetadata.fromObject(n.android);
        }
        if (n.ios != null) {
          if (typeof n.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          o.ios = h.dot.v4.IosMetadata.fromObject(n.ios);
        }
        return o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.platform = o.enums === String ? "WEB" : 0, r.componentVersion = ""), n.platform != null && n.hasOwnProperty("platform") && (r.platform = o.enums === String ? h.dot.Platform[n.platform] === void 0 ? n.platform : h.dot.Platform[n.platform] : n.platform), n.web != null && n.hasOwnProperty("web") && (r.web = h.dot.v4.WebMetadata.toObject(n.web, o), o.oneofs && (r.metadata = "web")), n.android != null && n.hasOwnProperty("android") && (r.android = h.dot.v4.AndroidMetadata.toObject(n.android, o), o.oneofs && (r.metadata = "android")), n.ios != null && n.hasOwnProperty("ios") && (r.ios = h.dot.v4.IosMetadata.toObject(n.ios, o), o.oneofs && (r.metadata = "ios")), n.sessionToken != null && n.hasOwnProperty("sessionToken") && (r.sessionToken = n.sessionToken, o.oneofs && (r._sessionToken = "sessionToken")), n.componentVersion != null && n.hasOwnProperty("componentVersion") && (r.componentVersion = n.componentVersion), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.Metadata";
      }, t;
    }(), i.AndroidMetadata = function() {
      function t(n) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
      }
      t.prototype.supportedAbis = v.emptyArray, t.prototype.device = null, t.prototype.digests = v.emptyArray, t.prototype.digestsWithTimestamp = v.emptyArray, t.prototype.dynamicCameraFrameProperties = v.emptyObject;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: v.oneOfGetter(e = ["device"]),
        set: v.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, o) {
        if (o || (o = ue.create()), n.supportedAbis != null && n.supportedAbis.length)
          for (let r = 0; r < n.supportedAbis.length; ++r)
            o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(n.supportedAbis[r]);
        if (n.device != null && Object.hasOwnProperty.call(n, "device") && o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(n.device), n.digests != null && n.digests.length)
          for (let r = 0; r < n.digests.length; ++r)
            o.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(n.digests[r]);
        if (n.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(n, "dynamicCameraFrameProperties"))
          for (let r = Object.keys(n.dynamicCameraFrameProperties), s = 0; s < r.length; ++s)
            o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[s]), h.dot.Int32List.encode(n.dynamicCameraFrameProperties[r[s]], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (n.digestsWithTimestamp != null && n.digestsWithTimestamp.length)
          for (let r = 0; r < n.digestsWithTimestamp.length; ++r)
            h.dot.DigestWithTimestamp.encode(n.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return o;
      }, t.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, t.decode = function(n, o) {
        n instanceof B || (n = B.create(n));
        let r = o === void 0 ? n.len : n.pos + o, s = new h.dot.v4.AndroidMetadata(), a, c;
        for (; n.pos < r; ) {
          let d = n.uint32();
          switch (d >>> 3) {
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
              s.digestsWithTimestamp && s.digestsWithTimestamp.length || (s.digestsWithTimestamp = []), s.digestsWithTimestamp.push(h.dot.DigestWithTimestamp.decode(n, n.uint32()));
              break;
            }
            case 4: {
              s.dynamicCameraFrameProperties === v.emptyObject && (s.dynamicCameraFrameProperties = {});
              let g = n.uint32() + n.pos;
              for (a = "", c = null; n.pos < g; ) {
                let C = n.uint32();
                switch (C >>> 3) {
                  case 1:
                    a = n.string();
                    break;
                  case 2:
                    c = h.dot.Int32List.decode(n, n.uint32());
                    break;
                  default:
                    n.skipType(C & 7);
                    break;
                }
              }
              s.dynamicCameraFrameProperties[a] = c;
              break;
            }
            default:
              n.skipType(d & 7);
              break;
          }
        }
        return s;
      }, t.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.supportedAbis != null && n.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(n.supportedAbis))
            return "supportedAbis: array expected";
          for (let o = 0; o < n.supportedAbis.length; ++o)
            if (!v.isString(n.supportedAbis[o]))
              return "supportedAbis: string[] expected";
        }
        if (n.device != null && n.hasOwnProperty("device") && !v.isString(n.device))
          return "device: string expected";
        if (n.digests != null && n.hasOwnProperty("digests")) {
          if (!Array.isArray(n.digests))
            return "digests: array expected";
          for (let o = 0; o < n.digests.length; ++o)
            if (!(n.digests[o] && typeof n.digests[o].length == "number" || v.isString(n.digests[o])))
              return "digests: buffer[] expected";
        }
        if (n.digestsWithTimestamp != null && n.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(n.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let o = 0; o < n.digestsWithTimestamp.length; ++o) {
            let r = h.dot.DigestWithTimestamp.verify(n.digestsWithTimestamp[o]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (n.dynamicCameraFrameProperties != null && n.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!v.isObject(n.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(n.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let s = h.dot.Int32List.verify(n.dynamicCameraFrameProperties[o[r]]);
            if (s)
              return "dynamicCameraFrameProperties." + s;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof h.dot.v4.AndroidMetadata)
          return n;
        let o = new h.dot.v4.AndroidMetadata();
        if (n.supportedAbis) {
          if (!Array.isArray(n.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          o.supportedAbis = [];
          for (let r = 0; r < n.supportedAbis.length; ++r)
            o.supportedAbis[r] = String(n.supportedAbis[r]);
        }
        if (n.device != null && (o.device = String(n.device)), n.digests) {
          if (!Array.isArray(n.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          o.digests = [];
          for (let r = 0; r < n.digests.length; ++r)
            typeof n.digests[r] == "string" ? v.base64.decode(n.digests[r], o.digests[r] = v.newBuffer(v.base64.length(n.digests[r])), 0) : n.digests[r].length >= 0 && (o.digests[r] = n.digests[r]);
        }
        if (n.digestsWithTimestamp) {
          if (!Array.isArray(n.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          o.digestsWithTimestamp = [];
          for (let r = 0; r < n.digestsWithTimestamp.length; ++r) {
            if (typeof n.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            o.digestsWithTimestamp[r] = h.dot.DigestWithTimestamp.fromObject(n.digestsWithTimestamp[r]);
          }
        }
        if (n.dynamicCameraFrameProperties) {
          if (typeof n.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          o.dynamicCameraFrameProperties = {};
          for (let r = Object.keys(n.dynamicCameraFrameProperties), s = 0; s < r.length; ++s) {
            if (typeof n.dynamicCameraFrameProperties[r[s]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[r[s]] = h.dot.Int32List.fromObject(n.dynamicCameraFrameProperties[r[s]]);
          }
        }
        return o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.supportedAbis = [], r.digests = [], r.digestsWithTimestamp = []), (o.objects || o.defaults) && (r.dynamicCameraFrameProperties = {}), n.supportedAbis && n.supportedAbis.length) {
          r.supportedAbis = [];
          for (let a = 0; a < n.supportedAbis.length; ++a)
            r.supportedAbis[a] = n.supportedAbis[a];
        }
        if (n.device != null && n.hasOwnProperty("device") && (r.device = n.device, o.oneofs && (r._device = "device")), n.digests && n.digests.length) {
          r.digests = [];
          for (let a = 0; a < n.digests.length; ++a)
            r.digests[a] = o.bytes === String ? v.base64.encode(n.digests[a], 0, n.digests[a].length) : o.bytes === Array ? Array.prototype.slice.call(n.digests[a]) : n.digests[a];
        }
        let s;
        if (n.dynamicCameraFrameProperties && (s = Object.keys(n.dynamicCameraFrameProperties)).length) {
          r.dynamicCameraFrameProperties = {};
          for (let a = 0; a < s.length; ++a)
            r.dynamicCameraFrameProperties[s[a]] = h.dot.Int32List.toObject(n.dynamicCameraFrameProperties[s[a]], o);
        }
        if (n.digestsWithTimestamp && n.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let a = 0; a < n.digestsWithTimestamp.length; ++a)
            r.digestsWithTimestamp[a] = h.dot.DigestWithTimestamp.toObject(n.digestsWithTimestamp[a], o);
        }
        return r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.AndroidMetadata";
      }, t;
    }(), i.IosMetadata = function() {
      function t(e) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.cameraModelId = "", t.prototype.architectureInfo = v.emptyObject, t.prototype.digests = v.emptyArray, t.prototype.digestsWithTimestamp = v.emptyArray, t.prototype.isoValues = v.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = ue.create()), e.cameraModelId != null && Object.hasOwnProperty.call(e, "cameraModelId") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.cameraModelId), e.architectureInfo != null && Object.hasOwnProperty.call(e, "architectureInfo"))
          for (let o = Object.keys(e.architectureInfo), r = 0; r < o.length; ++r)
            n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(o[r]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(e.architectureInfo[o[r]]).ldelim();
        if (e.digests != null && e.digests.length)
          for (let o = 0; o < e.digests.length; ++o)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(e.digests[o]);
        if (e.isoValues != null && e.isoValues.length) {
          n.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let o = 0; o < e.isoValues.length; ++o)
            n.int32(e.isoValues[o]);
          n.ldelim();
        }
        if (e.digestsWithTimestamp != null && e.digestsWithTimestamp.length)
          for (let o = 0; o < e.digestsWithTimestamp.length; ++o)
            h.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[o], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.IosMetadata(), s, a;
        for (; e.pos < o; ) {
          let c = e.uint32();
          switch (c >>> 3) {
            case 1: {
              r.cameraModelId = e.string();
              break;
            }
            case 2: {
              r.architectureInfo === v.emptyObject && (r.architectureInfo = {});
              let d = e.uint32() + e.pos;
              for (s = "", a = !1; e.pos < d; ) {
                let g = e.uint32();
                switch (g >>> 3) {
                  case 1:
                    s = e.string();
                    break;
                  case 2:
                    a = e.bool();
                    break;
                  default:
                    e.skipType(g & 7);
                    break;
                }
              }
              r.architectureInfo[s] = a;
              break;
            }
            case 3: {
              r.digests && r.digests.length || (r.digests = []), r.digests.push(e.bytes());
              break;
            }
            case 5: {
              r.digestsWithTimestamp && r.digestsWithTimestamp.length || (r.digestsWithTimestamp = []), r.digestsWithTimestamp.push(h.dot.DigestWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              if (r.isoValues && r.isoValues.length || (r.isoValues = []), (c & 7) === 2) {
                let d = e.uint32() + e.pos;
                for (; e.pos < d; )
                  r.isoValues.push(e.int32());
              } else
                r.isoValues.push(e.int32());
              break;
            }
            default:
              e.skipType(c & 7);
              break;
          }
        }
        return r;
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
          for (let o = 0; o < n.length; ++o)
            if (typeof e.architectureInfo[n[o]] != "boolean")
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
            let o = h.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[n]);
            if (o)
              return "digestsWithTimestamp." + o;
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
        if (e instanceof h.dot.v4.IosMetadata)
          return e;
        let n = new h.dot.v4.IosMetadata();
        if (e.cameraModelId != null && (n.cameraModelId = String(e.cameraModelId)), e.architectureInfo) {
          if (typeof e.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          n.architectureInfo = {};
          for (let o = Object.keys(e.architectureInfo), r = 0; r < o.length; ++r)
            n.architectureInfo[o[r]] = !!e.architectureInfo[o[r]];
        }
        if (e.digests) {
          if (!Array.isArray(e.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          n.digests = [];
          for (let o = 0; o < e.digests.length; ++o)
            typeof e.digests[o] == "string" ? v.base64.decode(e.digests[o], n.digests[o] = v.newBuffer(v.base64.length(e.digests[o])), 0) : e.digests[o].length >= 0 && (n.digests[o] = e.digests[o]);
        }
        if (e.digestsWithTimestamp) {
          if (!Array.isArray(e.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let o = 0; o < e.digestsWithTimestamp.length; ++o) {
            if (typeof e.digestsWithTimestamp[o] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[o] = h.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[o]);
          }
        }
        if (e.isoValues) {
          if (!Array.isArray(e.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          n.isoValues = [];
          for (let o = 0; o < e.isoValues.length; ++o)
            n.isoValues[o] = e.isoValues[o] | 0;
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        (n.arrays || n.defaults) && (o.digests = [], o.isoValues = [], o.digestsWithTimestamp = []), (n.objects || n.defaults) && (o.architectureInfo = {}), n.defaults && (o.cameraModelId = ""), e.cameraModelId != null && e.hasOwnProperty("cameraModelId") && (o.cameraModelId = e.cameraModelId);
        let r;
        if (e.architectureInfo && (r = Object.keys(e.architectureInfo)).length) {
          o.architectureInfo = {};
          for (let s = 0; s < r.length; ++s)
            o.architectureInfo[r[s]] = e.architectureInfo[r[s]];
        }
        if (e.digests && e.digests.length) {
          o.digests = [];
          for (let s = 0; s < e.digests.length; ++s)
            o.digests[s] = n.bytes === String ? v.base64.encode(e.digests[s], 0, e.digests[s].length) : n.bytes === Array ? Array.prototype.slice.call(e.digests[s]) : e.digests[s];
        }
        if (e.isoValues && e.isoValues.length) {
          o.isoValues = [];
          for (let s = 0; s < e.isoValues.length; ++s)
            o.isoValues[s] = e.isoValues[s];
        }
        if (e.digestsWithTimestamp && e.digestsWithTimestamp.length) {
          o.digestsWithTimestamp = [];
          for (let s = 0; s < e.digestsWithTimestamp.length; ++s)
            o.digestsWithTimestamp[s] = h.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[s], n);
        }
        return o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosMetadata";
      }, t;
    }(), i.WebMetadata = function() {
      function t(e) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = v.emptyArray, t.prototype.hashedDetectedImages = v.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = v.emptyArray, t.prototype.detectionRecord = v.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = ue.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && h.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.availableCameraProperties != null && e.availableCameraProperties.length)
          for (let o = 0; o < e.availableCameraProperties.length; ++o)
            h.dot.v4.CameraProperties.encode(e.availableCameraProperties[o], n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (e.hashedDetectedImages != null && e.hashedDetectedImages.length)
          for (let o = 0; o < e.hashedDetectedImages.length; ++o)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(e.hashedDetectedImages[o]);
        if (e.detectionRecord != null && e.detectionRecord.length)
          for (let o = 0; o < e.detectionRecord.length; ++o)
            h.dot.v4.DetectedObject.encode(e.detectionRecord[o], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (e.hashedDetectedImagesWithTimestamp != null && e.hashedDetectedImagesWithTimestamp.length)
          for (let o = 0; o < e.hashedDetectedImagesWithTimestamp.length; ++o)
            h.dot.v4.HashedDetectedImageWithTimestamp.encode(e.hashedDetectedImagesWithTimestamp[o], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.WebMetadata();
        for (; e.pos < o; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              r.currentCameraProperties = h.dot.v4.MediaTrackSettings.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.availableCameraProperties && r.availableCameraProperties.length || (r.availableCameraProperties = []), r.availableCameraProperties.push(h.dot.v4.CameraProperties.decode(e, e.uint32()));
              break;
            }
            case 3: {
              r.hashedDetectedImages && r.hashedDetectedImages.length || (r.hashedDetectedImages = []), r.hashedDetectedImages.push(e.string());
              break;
            }
            case 5: {
              r.hashedDetectedImagesWithTimestamp && r.hashedDetectedImagesWithTimestamp.length || (r.hashedDetectedImagesWithTimestamp = []), r.hashedDetectedImagesWithTimestamp.push(h.dot.v4.HashedDetectedImageWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              r.detectionRecord && r.detectionRecord.length || (r.detectionRecord = []), r.detectionRecord.push(h.dot.v4.DetectedObject.decode(e, e.uint32()));
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return r;
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
            let o = h.dot.v4.CameraProperties.verify(e.availableCameraProperties[n]);
            if (o)
              return "availableCameraProperties." + o;
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
            let o = h.dot.v4.HashedDetectedImageWithTimestamp.verify(e.hashedDetectedImagesWithTimestamp[n]);
            if (o)
              return "hashedDetectedImagesWithTimestamp." + o;
          }
        }
        if (e.detectionRecord != null && e.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(e.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < e.detectionRecord.length; ++n) {
            let o = h.dot.v4.DetectedObject.verify(e.detectionRecord[n]);
            if (o)
              return "detectionRecord." + o;
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
          for (let o = 0; o < e.availableCameraProperties.length; ++o) {
            if (typeof e.availableCameraProperties[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[o] = h.dot.v4.CameraProperties.fromObject(e.availableCameraProperties[o]);
          }
        }
        if (e.hashedDetectedImages) {
          if (!Array.isArray(e.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          n.hashedDetectedImages = [];
          for (let o = 0; o < e.hashedDetectedImages.length; ++o)
            n.hashedDetectedImages[o] = String(e.hashedDetectedImages[o]);
        }
        if (e.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(e.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          n.hashedDetectedImagesWithTimestamp = [];
          for (let o = 0; o < e.hashedDetectedImagesWithTimestamp.length; ++o) {
            if (typeof e.hashedDetectedImagesWithTimestamp[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            n.hashedDetectedImagesWithTimestamp[o] = h.dot.v4.HashedDetectedImageWithTimestamp.fromObject(e.hashedDetectedImagesWithTimestamp[o]);
          }
        }
        if (e.detectionRecord) {
          if (!Array.isArray(e.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let o = 0; o < e.detectionRecord.length; ++o) {
            if (typeof e.detectionRecord[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[o] = h.dot.v4.DetectedObject.fromObject(e.detectionRecord[o]);
          }
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        if ((n.arrays || n.defaults) && (o.availableCameraProperties = [], o.hashedDetectedImages = [], o.detectionRecord = [], o.hashedDetectedImagesWithTimestamp = []), n.defaults && (o.currentCameraProperties = null), e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties") && (o.currentCameraProperties = h.dot.v4.MediaTrackSettings.toObject(e.currentCameraProperties, n)), e.availableCameraProperties && e.availableCameraProperties.length) {
          o.availableCameraProperties = [];
          for (let r = 0; r < e.availableCameraProperties.length; ++r)
            o.availableCameraProperties[r] = h.dot.v4.CameraProperties.toObject(e.availableCameraProperties[r], n);
        }
        if (e.hashedDetectedImages && e.hashedDetectedImages.length) {
          o.hashedDetectedImages = [];
          for (let r = 0; r < e.hashedDetectedImages.length; ++r)
            o.hashedDetectedImages[r] = e.hashedDetectedImages[r];
        }
        if (e.detectionRecord && e.detectionRecord.length) {
          o.detectionRecord = [];
          for (let r = 0; r < e.detectionRecord.length; ++r)
            o.detectionRecord[r] = h.dot.v4.DetectedObject.toObject(e.detectionRecord[r], n);
        }
        if (e.hashedDetectedImagesWithTimestamp && e.hashedDetectedImagesWithTimestamp.length) {
          o.hashedDetectedImagesWithTimestamp = [];
          for (let r = 0; r < e.hashedDetectedImagesWithTimestamp.length; ++r)
            o.hashedDetectedImagesWithTimestamp[r] = h.dot.v4.HashedDetectedImageWithTimestamp.toObject(e.hashedDetectedImagesWithTimestamp[r], n);
        }
        return o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.WebMetadata";
      }, t;
    }(), i.HashedDetectedImageWithTimestamp = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = v.Long ? v.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ue.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && n.uint32(
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < o; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              r.imageHash = e.string();
              break;
            }
            case 2: {
              r.timestampMillis = e.uint64();
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !v.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !v.isInteger(e.timestampMillis) && !(e.timestampMillis && v.isInteger(e.timestampMillis.low) && v.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let n = new h.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (n.imageHash = String(e.imageHash)), e.timestampMillis != null && (v.Long ? (n.timestampMillis = v.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? n.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? n.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (n.timestampMillis = new v.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        if (n.defaults)
          if (o.imageHash = "", v.Long) {
            let r = new v.Long(0, 0, !0);
            o.timestampMillis = n.longs === String ? r.toString() : n.longs === Number ? r.toNumber() : r;
          } else
            o.timestampMillis = n.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (o.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = n.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = n.longs === String ? v.Long.prototype.toString.call(e.timestampMillis) : n.longs === Number ? new v.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), i.MediaTrackSettings = function() {
      function t(n) {
        if (n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
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
      }, t.encode = function(n, o) {
        return o || (o = ue.create()), n.aspectRatio != null && Object.hasOwnProperty.call(n, "aspectRatio") && o.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(n.aspectRatio), n.autoGainControl != null && Object.hasOwnProperty.call(n, "autoGainControl") && o.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(n.autoGainControl), n.channelCount != null && Object.hasOwnProperty.call(n, "channelCount") && o.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(n.channelCount), n.deviceId != null && Object.hasOwnProperty.call(n, "deviceId") && o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(n.deviceId), n.displaySurface != null && Object.hasOwnProperty.call(n, "displaySurface") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(n.displaySurface), n.echoCancellation != null && Object.hasOwnProperty.call(n, "echoCancellation") && o.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(n.echoCancellation), n.facingMode != null && Object.hasOwnProperty.call(n, "facingMode") && o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(n.facingMode), n.frameRate != null && Object.hasOwnProperty.call(n, "frameRate") && o.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(n.frameRate), n.groupId != null && Object.hasOwnProperty.call(n, "groupId") && o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(n.groupId), n.height != null && Object.hasOwnProperty.call(n, "height") && o.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(n.height), n.noiseSuppression != null && Object.hasOwnProperty.call(n, "noiseSuppression") && o.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(n.noiseSuppression), n.sampleRate != null && Object.hasOwnProperty.call(n, "sampleRate") && o.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(n.sampleRate), n.sampleSize != null && Object.hasOwnProperty.call(n, "sampleSize") && o.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(n.sampleSize), n.width != null && Object.hasOwnProperty.call(n, "width") && o.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(n.width), n.deviceName != null && Object.hasOwnProperty.call(n, "deviceName") && o.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(n.deviceName), o;
      }, t.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, t.decode = function(n, o) {
        n instanceof B || (n = B.create(n));
        let r = o === void 0 ? n.len : n.pos + o, s = new h.dot.v4.MediaTrackSettings();
        for (; n.pos < r; ) {
          let a = n.uint32();
          switch (a >>> 3) {
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
              n.skipType(a & 7);
              break;
          }
        }
        return s;
      }, t.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        return typeof n != "object" || n === null ? "object expected" : n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && typeof n.aspectRatio != "number" ? "aspectRatio: number expected" : n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && typeof n.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : n.channelCount != null && n.hasOwnProperty("channelCount") && !v.isInteger(n.channelCount) ? "channelCount: integer expected" : n.deviceId != null && n.hasOwnProperty("deviceId") && !v.isString(n.deviceId) ? "deviceId: string expected" : n.displaySurface != null && n.hasOwnProperty("displaySurface") && !v.isString(n.displaySurface) ? "displaySurface: string expected" : n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && typeof n.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : n.facingMode != null && n.hasOwnProperty("facingMode") && !v.isString(n.facingMode) ? "facingMode: string expected" : n.frameRate != null && n.hasOwnProperty("frameRate") && typeof n.frameRate != "number" ? "frameRate: number expected" : n.groupId != null && n.hasOwnProperty("groupId") && !v.isString(n.groupId) ? "groupId: string expected" : n.height != null && n.hasOwnProperty("height") && !v.isInteger(n.height) ? "height: integer expected" : n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && typeof n.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : n.sampleRate != null && n.hasOwnProperty("sampleRate") && !v.isInteger(n.sampleRate) ? "sampleRate: integer expected" : n.sampleSize != null && n.hasOwnProperty("sampleSize") && !v.isInteger(n.sampleSize) ? "sampleSize: integer expected" : n.width != null && n.hasOwnProperty("width") && !v.isInteger(n.width) ? "width: integer expected" : n.deviceName != null && n.hasOwnProperty("deviceName") && !v.isString(n.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(n) {
        if (n instanceof h.dot.v4.MediaTrackSettings)
          return n;
        let o = new h.dot.v4.MediaTrackSettings();
        return n.aspectRatio != null && (o.aspectRatio = Number(n.aspectRatio)), n.autoGainControl != null && (o.autoGainControl = !!n.autoGainControl), n.channelCount != null && (o.channelCount = n.channelCount | 0), n.deviceId != null && (o.deviceId = String(n.deviceId)), n.displaySurface != null && (o.displaySurface = String(n.displaySurface)), n.echoCancellation != null && (o.echoCancellation = !!n.echoCancellation), n.facingMode != null && (o.facingMode = String(n.facingMode)), n.frameRate != null && (o.frameRate = Number(n.frameRate)), n.groupId != null && (o.groupId = String(n.groupId)), n.height != null && (o.height = n.height | 0), n.noiseSuppression != null && (o.noiseSuppression = !!n.noiseSuppression), n.sampleRate != null && (o.sampleRate = n.sampleRate | 0), n.sampleSize != null && (o.sampleSize = n.sampleSize | 0), n.width != null && (o.width = n.width | 0), n.deviceName != null && (o.deviceName = String(n.deviceName)), o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        return n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && (r.aspectRatio = o.json && !isFinite(n.aspectRatio) ? String(n.aspectRatio) : n.aspectRatio, o.oneofs && (r._aspectRatio = "aspectRatio")), n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && (r.autoGainControl = n.autoGainControl, o.oneofs && (r._autoGainControl = "autoGainControl")), n.channelCount != null && n.hasOwnProperty("channelCount") && (r.channelCount = n.channelCount, o.oneofs && (r._channelCount = "channelCount")), n.deviceId != null && n.hasOwnProperty("deviceId") && (r.deviceId = n.deviceId, o.oneofs && (r._deviceId = "deviceId")), n.displaySurface != null && n.hasOwnProperty("displaySurface") && (r.displaySurface = n.displaySurface, o.oneofs && (r._displaySurface = "displaySurface")), n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && (r.echoCancellation = n.echoCancellation, o.oneofs && (r._echoCancellation = "echoCancellation")), n.facingMode != null && n.hasOwnProperty("facingMode") && (r.facingMode = n.facingMode, o.oneofs && (r._facingMode = "facingMode")), n.frameRate != null && n.hasOwnProperty("frameRate") && (r.frameRate = o.json && !isFinite(n.frameRate) ? String(n.frameRate) : n.frameRate, o.oneofs && (r._frameRate = "frameRate")), n.groupId != null && n.hasOwnProperty("groupId") && (r.groupId = n.groupId, o.oneofs && (r._groupId = "groupId")), n.height != null && n.hasOwnProperty("height") && (r.height = n.height, o.oneofs && (r._height = "height")), n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && (r.noiseSuppression = n.noiseSuppression, o.oneofs && (r._noiseSuppression = "noiseSuppression")), n.sampleRate != null && n.hasOwnProperty("sampleRate") && (r.sampleRate = n.sampleRate, o.oneofs && (r._sampleRate = "sampleRate")), n.sampleSize != null && n.hasOwnProperty("sampleSize") && (r.sampleSize = n.sampleSize, o.oneofs && (r._sampleSize = "sampleSize")), n.width != null && n.hasOwnProperty("width") && (r.width = n.width, o.oneofs && (r._width = "width")), n.deviceName != null && n.hasOwnProperty("deviceName") && (r.deviceName = n.deviceName, o.oneofs && (r._deviceName = "deviceName")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.MediaTrackSettings";
      }, t;
    }(), i.ImageBitmap = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.width = 0, t.prototype.height = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ue.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && n.uint32(
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.ImageBitmap();
        for (; e.pos < o; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              r.width = e.int32();
              break;
            }
            case 2: {
              r.height = e.int32();
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !v.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !v.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.ImageBitmap)
          return e;
        let n = new h.dot.v4.ImageBitmap();
        return e.width != null && (n.width = e.width | 0), e.height != null && (n.height = e.height | 0), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        return n.defaults && (o.width = 0, o.height = 0), e.width != null && e.hasOwnProperty("width") && (o.width = e.width), e.height != null && e.hasOwnProperty("height") && (o.height = e.height), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    }(), i.CameraProperties = function() {
      function t(n) {
        if (n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: v.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: v.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, o) {
        return o || (o = ue.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && h.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.cameraProperties != null && Object.hasOwnProperty.call(n, "cameraProperties") && h.dot.v4.MediaTrackSettings.encode(n.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, t.decode = function(n, o) {
        n instanceof B || (n = B.create(n));
        let r = o === void 0 ? n.len : n.pos + o, s = new h.dot.v4.CameraProperties();
        for (; n.pos < r; ) {
          let a = n.uint32();
          switch (a >>> 3) {
            case 1: {
              s.cameraInitFrameResolution = h.dot.v4.ImageBitmap.decode(n, n.uint32());
              break;
            }
            case 2: {
              s.cameraProperties = h.dot.v4.MediaTrackSettings.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(a & 7);
              break;
          }
        }
        return s;
      }, t.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution")) {
          let o = h.dot.v4.ImageBitmap.verify(n.cameraInitFrameResolution);
          if (o)
            return "cameraInitFrameResolution." + o;
        }
        if (n.cameraProperties != null && n.hasOwnProperty("cameraProperties")) {
          let o = h.dot.v4.MediaTrackSettings.verify(n.cameraProperties);
          if (o)
            return "cameraProperties." + o;
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof h.dot.v4.CameraProperties)
          return n;
        let o = new h.dot.v4.CameraProperties();
        if (n.cameraInitFrameResolution != null) {
          if (typeof n.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          o.cameraInitFrameResolution = h.dot.v4.ImageBitmap.fromObject(n.cameraInitFrameResolution);
        }
        if (n.cameraProperties != null) {
          if (typeof n.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          o.cameraProperties = h.dot.v4.MediaTrackSettings.fromObject(n.cameraProperties);
        }
        return o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.cameraProperties = null), n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution") && (r.cameraInitFrameResolution = h.dot.v4.ImageBitmap.toObject(n.cameraInitFrameResolution, o), o.oneofs && (r._cameraInitFrameResolution = "cameraInitFrameResolution")), n.cameraProperties != null && n.hasOwnProperty("cameraProperties") && (r.cameraProperties = h.dot.v4.MediaTrackSettings.toObject(n.cameraProperties, o)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.CameraProperties";
      }, t;
    }(), i.DetectedObject = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.brightness = 0, t.prototype.sharpness = 0, t.prototype.hotspots = 0, t.prototype.confidence = 0, t.prototype.faceSize = 0, t.prototype.faceCenter = null, t.prototype.smallestEdge = 0, t.prototype.bottomLeft = null, t.prototype.bottomRight = null, t.prototype.topLeft = null, t.prototype.topRight = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ue.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && n.uint32(
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.DetectedObject();
        for (; e.pos < o; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              r.brightness = e.float();
              break;
            }
            case 2: {
              r.sharpness = e.float();
              break;
            }
            case 3: {
              r.hotspots = e.float();
              break;
            }
            case 4: {
              r.confidence = e.float();
              break;
            }
            case 5: {
              r.faceSize = e.float();
              break;
            }
            case 6: {
              r.faceCenter = h.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              r.smallestEdge = e.float();
              break;
            }
            case 8: {
              r.bottomLeft = h.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              r.bottomRight = h.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              r.topLeft = h.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              r.topRight = h.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return r;
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
        let o = {};
        return n.defaults && (o.brightness = 0, o.sharpness = 0, o.hotspots = 0, o.confidence = 0, o.faceSize = 0, o.faceCenter = null, o.smallestEdge = 0, o.bottomLeft = null, o.bottomRight = null, o.topLeft = null, o.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (o.brightness = n.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (o.sharpness = n.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (o.hotspots = n.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (o.confidence = n.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (o.faceSize = n.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (o.faceCenter = h.dot.v4.Point.toObject(e.faceCenter, n)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (o.smallestEdge = n.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (o.bottomLeft = h.dot.v4.Point.toObject(e.bottomLeft, n)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (o.bottomRight = h.dot.v4.Point.toObject(e.bottomRight, n)), e.topLeft != null && e.hasOwnProperty("topLeft") && (o.topLeft = h.dot.v4.Point.toObject(e.topLeft, n)), e.topRight != null && e.hasOwnProperty("topRight") && (o.topRight = h.dot.v4.Point.toObject(e.topRight, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    }(), i.Point = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.x = 0, t.prototype.y = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ue.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && n.uint32(
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.Point();
        for (; e.pos < o; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              r.x = e.float();
              break;
            }
            case 2: {
              r.y = e.float();
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return r;
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
        let o = {};
        return n.defaults && (o.x = 0, o.y = 0), e.x != null && e.hasOwnProperty("x") && (o.x = n.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (o.y = n.json && !isFinite(e.y) ? String(e.y) : e.y), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    }(), i.FaceContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ue.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.FaceContent();
        for (; e.pos < o; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              r.image = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return r;
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
        let o = {};
        return n.defaults && (o.image = null, o.metadata = null), e.image != null && e.hasOwnProperty("image") && (o.image = h.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceContent";
      }, t;
    }(), i.DocumentContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ue.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.DocumentContent();
        for (; e.pos < o; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              r.image = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return r;
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
        let o = {};
        return n.defaults && (o.image = null, o.metadata = null), e.image != null && e.hasOwnProperty("image") && (o.image = h.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), i.Blob = function() {
      function t(n) {
        if (n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: v.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent"]),
        set: v.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, o) {
        return o || (o = ue.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && h.dot.v4.DocumentContent.encode(n.documentContent, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.faceContent != null && Object.hasOwnProperty.call(n, "faceContent") && h.dot.v4.FaceContent.encode(n.faceContent, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(n, "magnifeyeLivenessContent") && h.dot.v4.MagnifEyeLivenessContent.encode(n.magnifeyeLivenessContent, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.smileLivenessContent != null && Object.hasOwnProperty.call(n, "smileLivenessContent") && h.dot.v4.SmileLivenessContent.encode(n.smileLivenessContent, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(n, "eyeGazeLivenessContent") && h.dot.v4.EyeGazeLivenessContent.encode(n.eyeGazeLivenessContent, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), n.palmContent != null && Object.hasOwnProperty.call(n, "palmContent") && h.dot.v4.PalmContent.encode(n.palmContent, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, t.decode = function(n, o) {
        n instanceof B || (n = B.create(n));
        let r = o === void 0 ? n.len : n.pos + o, s = new h.dot.v4.Blob();
        for (; n.pos < r; ) {
          let a = n.uint32();
          switch (a >>> 3) {
            case 1: {
              s.documentContent = h.dot.v4.DocumentContent.decode(n, n.uint32());
              break;
            }
            case 5: {
              s.eyeGazeLivenessContent = h.dot.v4.EyeGazeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 2: {
              s.faceContent = h.dot.v4.FaceContent.decode(n, n.uint32());
              break;
            }
            case 3: {
              s.magnifeyeLivenessContent = h.dot.v4.MagnifEyeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 4: {
              s.smileLivenessContent = h.dot.v4.SmileLivenessContent.decode(n, n.uint32());
              break;
            }
            case 6: {
              s.palmContent = h.dot.v4.PalmContent.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(a & 7);
              break;
          }
        }
        return s;
      }, t.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        let o = {};
        if (n.documentContent != null && n.hasOwnProperty("documentContent")) {
          o.blob = 1;
          {
            let r = h.dot.v4.DocumentContent.verify(n.documentContent);
            if (r)
              return "documentContent." + r;
          }
        }
        if (n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = h.dot.v4.EyeGazeLivenessContent.verify(n.eyeGazeLivenessContent);
            if (r)
              return "eyeGazeLivenessContent." + r;
          }
        }
        if (n.faceContent != null && n.hasOwnProperty("faceContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = h.dot.v4.FaceContent.verify(n.faceContent);
            if (r)
              return "faceContent." + r;
          }
        }
        if (n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = h.dot.v4.MagnifEyeLivenessContent.verify(n.magnifeyeLivenessContent);
            if (r)
              return "magnifeyeLivenessContent." + r;
          }
        }
        if (n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = h.dot.v4.SmileLivenessContent.verify(n.smileLivenessContent);
            if (r)
              return "smileLivenessContent." + r;
          }
        }
        if (n.palmContent != null && n.hasOwnProperty("palmContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = h.dot.v4.PalmContent.verify(n.palmContent);
            if (r)
              return "palmContent." + r;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof h.dot.v4.Blob)
          return n;
        let o = new h.dot.v4.Blob();
        if (n.documentContent != null) {
          if (typeof n.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          o.documentContent = h.dot.v4.DocumentContent.fromObject(n.documentContent);
        }
        if (n.eyeGazeLivenessContent != null) {
          if (typeof n.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          o.eyeGazeLivenessContent = h.dot.v4.EyeGazeLivenessContent.fromObject(n.eyeGazeLivenessContent);
        }
        if (n.faceContent != null) {
          if (typeof n.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          o.faceContent = h.dot.v4.FaceContent.fromObject(n.faceContent);
        }
        if (n.magnifeyeLivenessContent != null) {
          if (typeof n.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          o.magnifeyeLivenessContent = h.dot.v4.MagnifEyeLivenessContent.fromObject(n.magnifeyeLivenessContent);
        }
        if (n.smileLivenessContent != null) {
          if (typeof n.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          o.smileLivenessContent = h.dot.v4.SmileLivenessContent.fromObject(n.smileLivenessContent);
        }
        if (n.palmContent != null) {
          if (typeof n.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          o.palmContent = h.dot.v4.PalmContent.fromObject(n.palmContent);
        }
        return o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        return n.documentContent != null && n.hasOwnProperty("documentContent") && (r.documentContent = h.dot.v4.DocumentContent.toObject(n.documentContent, o), o.oneofs && (r.blob = "documentContent")), n.faceContent != null && n.hasOwnProperty("faceContent") && (r.faceContent = h.dot.v4.FaceContent.toObject(n.faceContent, o), o.oneofs && (r.blob = "faceContent")), n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent") && (r.magnifeyeLivenessContent = h.dot.v4.MagnifEyeLivenessContent.toObject(n.magnifeyeLivenessContent, o), o.oneofs && (r.blob = "magnifeyeLivenessContent")), n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent") && (r.smileLivenessContent = h.dot.v4.SmileLivenessContent.toObject(n.smileLivenessContent, o), o.oneofs && (r.blob = "smileLivenessContent")), n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent") && (r.eyeGazeLivenessContent = h.dot.v4.EyeGazeLivenessContent.toObject(n.eyeGazeLivenessContent, o), o.oneofs && (r.blob = "eyeGazeLivenessContent")), n.palmContent != null && n.hasOwnProperty("palmContent") && (r.palmContent = h.dot.v4.PalmContent.toObject(n.palmContent, o), o.oneofs && (r.blob = "palmContent")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.Blob";
      }, t;
    }(), i.EyeGazeLivenessContent = function() {
      function t(e) {
        if (this.segments = [], e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.segments = v.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = ue.create()), e.segments != null && e.segments.length)
          for (let o = 0; o < e.segments.length; ++o)
            h.dot.v4.EyeGazeLivenessSegment.encode(e.segments[o], n.uint32(
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.EyeGazeLivenessContent();
        for (; e.pos < o; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              r.segments && r.segments.length || (r.segments = []), r.segments.push(h.dot.v4.EyeGazeLivenessSegment.decode(e, e.uint32()));
              break;
            }
            case 2: {
              r.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.segments != null && e.hasOwnProperty("segments")) {
          if (!Array.isArray(e.segments))
            return "segments: array expected";
          for (let n = 0; n < e.segments.length; ++n) {
            let o = h.dot.v4.EyeGazeLivenessSegment.verify(e.segments[n]);
            if (o)
              return "segments." + o;
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
          for (let o = 0; o < e.segments.length; ++o) {
            if (typeof e.segments[o] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[o] = h.dot.v4.EyeGazeLivenessSegment.fromObject(e.segments[o]);
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
        let o = {};
        if ((n.arrays || n.defaults) && (o.segments = []), n.defaults && (o.metadata = null), e.segments && e.segments.length) {
          o.segments = [];
          for (let r = 0; r < e.segments.length; ++r)
            o.segments[r] = h.dot.v4.EyeGazeLivenessSegment.toObject(e.segments[r], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), i.EyeGazeLivenessSegment = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ue.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && n.uint32(
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < o; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              r.corner = e.int32();
              break;
            }
            case 2: {
              r.image = h.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return r;
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
        let o = {};
        return n.defaults && (o.corner = n.enums === String ? "TOP_LEFT" : 0, o.image = null), e.corner != null && e.hasOwnProperty("corner") && (o.corner = n.enums === String ? h.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : h.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (o.image = h.dot.Image.toObject(e.image, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), i.EyeGazeLivenessCorner = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    }(), i.SmileLivenessContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ue.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && h.dot.Image.encode(e.neutralExpressionFaceImage, n.uint32(
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.SmileLivenessContent();
        for (; e.pos < o; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              r.neutralExpressionFaceImage = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.smileExpressionFaceImage = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              r.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return r;
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
        let o = {};
        return n.defaults && (o.neutralExpressionFaceImage = null, o.smileExpressionFaceImage = null, o.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (o.neutralExpressionFaceImage = h.dot.Image.toObject(e.neutralExpressionFaceImage, n)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (o.smileExpressionFaceImage = h.dot.Image.toObject(e.smileExpressionFaceImage, n)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), i.PalmContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ue.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.PalmContent();
        for (; e.pos < o; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              r.image = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return r;
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
        let o = {};
        return n.defaults && (o.image = null, o.metadata = null), e.image != null && e.hasOwnProperty("image") && (o.image = h.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.PalmContent";
      }, t;
    }(), i;
  }(), x.Image = function() {
    function i(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return i.prototype.bytes = v.newBuffer([]), i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
      return e || (e = ue.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, o = new h.dot.Image();
      for (; t.pos < n; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            o.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, i.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || v.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof h.dot.Image)
        return t;
      let e = new h.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? v.base64.decode(t.bytes, e.bytes = v.newBuffer(v.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = v.newBuffer(n.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? v.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, ie.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, i;
  }(), x.Int32List = function() {
    function i(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return i.prototype.items = v.emptyArray, i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
      if (e || (e = ue.create()), t.items != null && t.items.length) {
        e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let n = 0; n < t.items.length; ++n)
          e.int32(t.items[n]);
        e.ldelim();
      }
      return e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, o = new h.dot.Int32List();
      for (; t.pos < n; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            if (o.items && o.items.length || (o.items = []), (r & 7) === 2) {
              let s = t.uint32() + t.pos;
              for (; t.pos < s; )
                o.items.push(t.int32());
            } else
              o.items.push(t.int32());
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, i.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
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
    }, i.fromObject = function(t) {
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
    }, i.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      if ((e.arrays || e.defaults) && (n.items = []), t.items && t.items.length) {
        n.items = [];
        for (let o = 0; o < t.items.length; ++o)
          n.items[o] = t.items[o];
      }
      return n;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, ie.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, i;
  }(), x.Platform = function() {
    const i = {}, t = Object.create(i);
    return t[i[0] = "WEB"] = 0, t[i[1] = "ANDROID"] = 1, t[i[2] = "IOS"] = 2, t;
  }(), x.DigestWithTimestamp = function() {
    function i(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return i.prototype.digest = v.newBuffer([]), i.prototype.timestampMillis = v.Long ? v.Long.fromBits(0, 0, !0) : 0, i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
      return e || (e = ue.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, o = new h.dot.DigestWithTimestamp();
      for (; t.pos < n; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            o.digest = t.bytes();
            break;
          }
          case 2: {
            o.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, i.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || v.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !v.isInteger(t.timestampMillis) && !(t.timestampMillis && v.isInteger(t.timestampMillis.low) && v.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof h.dot.DigestWithTimestamp)
        return t;
      let e = new h.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? v.base64.decode(t.digest, e.digest = v.newBuffer(v.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (v.Long ? (e.timestampMillis = v.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new v.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      if (e.defaults)
        if (e.bytes === String ? n.digest = "" : (n.digest = [], e.bytes !== Array && (n.digest = v.newBuffer(n.digest))), v.Long) {
          let o = new v.Long(0, 0, !0);
          n.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          n.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (n.digest = e.bytes === String ? v.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? n.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : n.timestampMillis = e.longs === String ? v.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new v.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), n;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, ie.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, i;
  }(), x;
})();
function ge(x, i) {
  const t = zx();
  return ge = function(e, n) {
    e = e - (4545 + -1 * 8539 + 4461);
    let o = t[e];
    if (ge.ISuhXi === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          p += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[p], u[p] = m;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, m = u[l], u[l] = u[p], u[p] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      ge.mFWpVa = d, x = arguments, ge.ISuhXi = !0;
    }
    const s = t[-89 * -49 + 2 * 73 + -4507 * 1], a = e + s, c = x[a];
    return c ? o = c : (ge.xTDAbY === void 0 && (ge.xTDAbY = !0), o = ge.mFWpVa(o, n), x[a] = o), o;
  }, ge(x, i);
}
(function(x, i) {
  const t = x();
  function e(a, c, d, g, C) {
    return ge(C - -110, c);
  }
  function n(a, c, d, g, C) {
    return ge(c - 170, g);
  }
  function o(a, c, d, g, C) {
    return ge(c - 661, g);
  }
  function r(a, c, d, g, C) {
    return ge(d - -58, a);
  }
  function s(a, c, d, g, C) {
    return ge(g - -138, c);
  }
  for (; ; )
    try {
      if (-parseInt(r("pqWf", 435, 431, 437, 438)) / 1 * (parseInt(r("dW2L", 406, 426, 432, 438)) / 2) + parseInt(e(374, "x0vH", 417, 418, 396)) / 3 + -parseInt(s(342, "80V(", 368, 361, 343)) / 4 + parseInt(n(668, 647, 654, "z9NK", 636)) / 5 * (parseInt(r("usJt", 394, 416, 426, 426)) / 6) + -parseInt(n(638, 657, 643, "V1Lf", 671)) / 7 + parseInt(o(1174, 1162, 1150, "dW2L", 1181)) / 8 + parseInt(n(673, 656, 674, "w^50", 647)) / 9 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(zx, 129242);
function zx() {
  const x = ["lCk1DfBcJW", "WOlcQCkjWRddP8kcla", "W5FdICoaW5VcGq", "ymkEeSopWOnzW7S", "WQNcLHqEWQe", "bwFcOSk+", "W5BcRCkMWOVdUG", "WOjTWQ4c", "s2yKF2u", "WRZcRJW", "W7WUW5i", "W4ddRWT7rSk+WRLYW5NcHCkQW5y", "WO4Azg/dLa", "WR7cLCoUWR4OW5pdUCkBBxPmk0q", "WO3cU8oJy8oObCo2W4K9WQNdUSoV", "W7KQW4y3", "x0riWP1l", "W59bW4CBjaPkCZxcMSoImcO", "W7/dV37cGaVcVJpcQNddSmk/W7i", "WOSlWObczq", "wMZcG8kseSoGwa", "DeVdUG", "W5RdOSk6pW", "s8osW4VdJXXzW5NdNSodAhCT", "W5dcSCk8WONdTW", "EvZdRmkQ", "W7q5W5iIWQG", "WPaEr8oyWRC", "WQOKWQpcV3G", "WRH0WQhcSuJdJ8kPtCozWOJcKmoRW4i", "WRRcP8oxtabOW4DxW50NW64YAq", "WPpcRf0eeG", "nSk7q8oweSk4WRi", "lH7cTmo1W5LbWOjHW7TGbNRcNG", "W54ZWORcLCkZ", "WPBcVvS9dG", "mCo9aSkTga", "W59gW4KEiaLnFtNcISoMeJm", "WP8wxCoqWPi", "WRZcLmoSWReQW5lcH8k2s2PjcG", "W5fIW6hcRaG", "W4CtW7jilcFcVsNcRCkHW4qIW7W", "W7VdLLrDW6hdG8olew3cPqddJdC"];
  return zx = function() {
    return x;
  }, zx();
}
async function BI() {
  const x = {};
  function i(d, g, C, u, p) {
    return ge(d - 744, C);
  }
  function t(d, g, C, u, p) {
    return ge(p - 207, u);
  }
  x[i(1237, 1220, "&ghJ")] = wc;
  function e(d, g, C, u, p) {
    return ge(C - 474, u);
  }
  x[a("JwD^", 535, 569, 531, 549) + "h"] = 256;
  const n = await window[c(199, 174, "pqWf", 180) + "o"][t(699, 722, 731, "eXMM", 711) + "e"][e(961, 982, 962, "xl3s") + t(693, 701, 693, "80V(", 683) + "y"](x, !0, [e(962, 985, 968, "pqWf") + "pt", a("80V(", 536, 557, 551, 548) + "pt"]), o = Uint8Array[t(689, 685, 686, "NeKk", 677)](Array(16)[e(932, 945, 941, "2e2Y")](0)), r = window[a("tHrD", 575, 556, 548, 564) + "o"][e(960, 952, 947, "JeWN") + c(203, 174, "1n*3", 194) + a("1n*3", 525, 529, 528, 540)](o), s = {};
  s[e(968, 990, 972, "zwp)")] = n;
  function a(d, g, C, u, p) {
    return ge(p - 68, d);
  }
  function c(d, g, C, u, p) {
    return ge(u - -289, C);
  }
  return s.iv = r, s;
}
async function kI(x) {
  function i(C, u, p, m, A) {
    return ge(p - 591, m);
  }
  const { iv: t, key: e } = await BI();
  function n(C, u, p, m, A) {
    return ge(p - 420, u);
  }
  function o(C, u, p, m, A) {
    return ge(A - 7, C);
  }
  function r(C, u, p, m, A) {
    return ge(A - -430, m);
  }
  const s = {};
  s[o("zwp)", 491, 532, 496, 510)] = wc, s.iv = t;
  const a = await window[d(-10, -3, -16, 4, "V1Lf") + "o"][d(-7, 24, 22, 2, "KTvz") + "e"][d(-13, -22, -19, -3, "yQCO") + "pt"](s, e, x), c = await window[i(1077, 1052, 1062, "zwp)") + "o"][d(19, 30, 25, 12, "zbm9") + "e"][d(7, 30, 34, 19, "9HBY") + r(75, 83, 68, "w^50", 65)](n(900, "x0vH", 917), e);
  function d(C, u, p, m, A) {
    return ge(m - -488, A);
  }
  const g = {};
  return g[d(-25, 7, -17, -9, "Db%1") + "ge"] = a, g[n(920, "NeKk", 929)] = c, g.iv = t, g;
}
(function(x, i) {
  function t(s, a, c, d, g) {
    return Fe(s - -795, d);
  }
  function e(s, a, c, d, g) {
    return Fe(c - -292, a);
  }
  function n(s, a, c, d, g) {
    return Fe(s - 568, c);
  }
  function o(s, a, c, d, g) {
    return Fe(g - 454, a);
  }
  const r = x();
  for (; ; )
    try {
      if (-parseInt(n(897, 893, "#oE#", 892, 885)) / 1 + -parseInt(e(40, "up%^", 35, 31, 28)) / 2 * (-parseInt(e(19, "Wlko", 25, 10, 39)) / 3) + parseInt(n(898, 891, "y6Z5", 889, 900)) / 4 * (parseInt(n(876, 870, "Pe%u", 885, 863)) / 5) + -parseInt(e(31, "%Num", 30, 24, 28)) / 6 * (parseInt(t(-476, -486, -479, "y6Z5", -478)) / 7) + parseInt(t(-467, -463, -455, "lnTV", -474)) / 8 * (parseInt(n(902, 892, "L(RM", 915, 893)) / 9) + parseInt(e(34, "8g)l", 20, 5, 27)) / 10 + -parseInt(o(762, "Wlko", 772, 767, 765)) / 11 === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(qx, 541425);
function Fe(x, i) {
  const t = qx();
  return Fe = function(e, n) {
    e = e - 307;
    let o = t[e];
    if (Fe.RfoXIH === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          p += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[p], u[p] = m;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, m = u[l], u[l] = u[p], u[p] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Fe.VWuIuA = d, x = arguments, Fe.RfoXIH = !0;
    }
    const s = t[-8094 + -2 * 1401 + 10896], a = e + s, c = x[a];
    return c ? o = c : (Fe.CkmyKa === void 0 && (Fe.CkmyKa = !0), o = Fe.VWuIuA(o, n), x[a] = o), o;
  }, Fe(x, i);
}
function GI(x) {
  const i = new ArrayBuffer(x[n(582, 589, "jPe%") + "h"]), t = new Uint8Array(i);
  function e(o, r, s, a, c) {
    return Fe(a - 957, c);
  }
  function n(o, r, s, a, c) {
    return Fe(r - 265, s);
  }
  for (let o = 1 * 9477 + -4327 + 2575 * -2, r = x[n(601, 597, "7pNq") + "h"]; o < r; o++)
    t[o] = x[e(1261, 1262, 1277, 1272, "zoxx") + e(1283, 1279, 1258, 1273, "%Num")](o);
  return i;
}
function qx() {
  const x = ["W5RcUNLFWRD+W5TbCcZdOr1S", "eSkuAmk5WRBdRmk3WOb6W4O", "hSkjoai", "W4qZW6pcHJO", "lY4yWPtdUW", "omowfCkvWOJdPZBcRq", "FmkxW6/cNCk+WP0bW7hdRx0jWQ8", "WOZdKINcI8kdimof", "WQnSy8oWW7ZcQmoOC8osW7i", "rbXmFeVdVmkeWPjHWQOoW4e", "DhLeW6ZcUZiBWOFdN8kuBqNcOa", "W4NcJdbJWRFcHmoDWQe", "WOW4WR1ita", "W7XjWOpcS21eWOxdS8kPWOldOGpcVG", "fuFcSmkfWPK", "WQf2F0fkW7zOhmkCW57cSSoa", "nNBcS8kyW4qNW7CVWO8", "t8onzvbzWO8YW6pdLWdcMSoX", "WORcV3/dQSkViConAfmh", "WR/dJ8oWWRBdVa", "W55zr8ofWO4", "AmofeW4VACkRwSkgWRnFW7FcRq", "W4lcJH3dN2tdNYDmWQFdVNqQ", "E2yinYWdW5C", "CNniW6hcUtzYWRhdNCkWzru", "zmotW6K0k8k1nCkKFG", "WQnQymoWW7pcR8oQzSocW7O", "hCkDvCkLD8oZlmkWhJ3cL8keFq", "oSkervPy", "pmoFvSo8W6RcSfFcSmkwW4JcSSk2BW"];
  return qx = function() {
    return x;
  }, qx();
}
(function(x, i) {
  const t = x();
  function e(r, s, a, c, d) {
    return We(a - -206, d);
  }
  function n(r, s, a, c, d) {
    return We(a - -763, s);
  }
  function o(r, s, a, c, d) {
    return We(a - 411, c);
  }
  for (; ; )
    try {
      if (-parseInt(n(-309, "o@bI", -315, -280, -394)) / 1 + -parseInt(n(-237, "1vIS", -250, -278, -269)) / 2 + -parseInt(n(-424, "[ped", -411, -488, -379)) / 3 + -parseInt(o(775, 835, 735, "LX^^", 782)) / 4 + parseInt(o(857, 777, 776, "r]8k", 756)) / 5 * (parseInt(o(781, 880, 770, "[(FZ", 876)) / 6) + parseInt(o(774, 671, 737, "Ke4u", 746)) / 7 + parseInt(e(348, 361, 249, 268, "9TXD")) / 8 * (parseInt(n(-491, "@^8G", -423, -359, -343)) / 9) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})($x, -1603080 + 539 * 643 + 7 * 307897);
function OI() {
  const x = e(748, "47$K", 750, 782) + o("r52$", 635, 493, 608, 526) + o("YN)9", 594, 538, 437, 547) + e(722, "PVSg", 784, 750) + t("$0Jp", 257, 191) + o("[1k0", 385, 503, 466, 464) + e(998, "CgGq", 935, 913) + e(1032, "@^8G", 1e3, 936) + e(882, "9oxv", 788, 828) + t("o@bI", 275, 194) + a(1457, "^a*9") + i(")v3l", -554, -530, -614, -518) + a(1321, "(egZ") + o("Mn]0", 559, 623, 482, 555) + o("9TXD", 497, 381, 398, 438) + o("f5wW", 644, 472, 607, 578) + o("k0Iq", 467, 533, 468, 461) + e(839, "Mn]0", 953, 841) + e(933, "2rnN", 969, 897) + e(942, "5dCn", 893, 829) + t("cK%l", 303, 255) + t("2rnN", 424, 390) + e(747, "9oxv", 764, 752) + t(")v3l", 421, 408) + i("VC&F", -389, -510, -346, -446) + t("UlTk", 257, 288) + a(1360, "[1k0") + a(1531, "[ped") + e(987, "47$K", 903, 944) + t("HQHT", 321, 323) + a(1383, "PEYI") + a(1352, "jU!*") + e(823, "k0Iq", 772, 834) + t("2rnN", 105, 213) + i("zMd9", -317, -335, -473, -405) + o("gUrA", 322, 290, 347, 352) + a(1448, "2rnN") + o("jU!*", 429, 328, 503, 436) + a(1453, "1vIS") + i("@^8G", -297, -405, -485, -406) + t("CgGq", 278, 183) + t("FzJ$", 308, 199) + e(681, "zMd9", 714, 738) + o("7m9L", 351, 439, 430, 365) + t("5dCn", 258, 362) + t("r]8k", 313, 280) + e(690, "VC&F", 742, 759) + t("5dCn", 154, 248) + a(1493, "o@bI") + o("7m9L", 532, 545, 591, 539) + o("J%OH", 623, 505, 569, 574) + t("LX^^", 275, 252) + t("S]eQ", 201, 299) + t("YN)9", 441, 352) + o("2rnN", 588, 504, 550, 477) + i("FzJ$", -389, -396, -456, -497) + a(1514, "cK%l") + t("CgGq", 403, 290) + i("HQHT", -262, -447, -337, -350) + a(1449, "9oxv") + o("PEYI", 494, 504, 476, 489) + i("FzJ$", -434, -330, -489, -416) + o("[1k0", 444, 272, 426, 355) + i("iBR2", -378, -445, -427, -475) + t("r52$", 283, 381) + e(976, "X(b9", 966, 930) + i("sa3P", -542, -375, -521, -488) + t("47$K", 328, 369) + t("gUrA", 322, 361) + a(1385, "S]eQ") + e(722, "Ke4u", 720, 792) + o("ISn[", 460, 372, 370, 445) + o("[1k0", 366, 439, 462, 479) + a(1405, "^a*9") + a(1459, "PVSg") + a(1339, "9TXD") + a(1446, "D!i)") + e(843, "r]8k", 814, 768) + t("sa3P", 386, 313) + o("x^12", 537, 592, 644, 579) + t("[1k0", 392, 348) + a(1371, "Jecf") + o("(egZ", 569, 476, 492, 507) + o("[(FZ", 401, 583, 553, 476) + a(1396, "Mn]0") + i("PEYI", -273, -268, -308, -354) + t("[(FZ", 340, 289) + i("7m9L", -294, -336, -291, -397) + e(876, "[(FZ", 960, 947) + a(1454, "D!i)") + a(1435, "CgGq") + e(984, "9oxv", 968, 872) + t("CgGq", 285, 273) + i("7m9L", -538, -595, -455, -532) + t("x)PD", 354, 327) + o("[ped", 494, 531, 646, 573) + a(1486, "CgGq") + t("zMd9", 178, 202) + i("CgGq", -375, -271, -498, -387) + t("x^12", 180, 190) + t("cK%l", 146, 212) + o("x^12", 418, 389, 264, 368) + a(1504, "47$K") + a(1445, "Jecf") + t("cK%l", 377, 315) + i("PVSg", -472, -499, -585, -521) + o("Mn]0", 531, 491, 615, 522) + i("33o!", -577, -505, -541, -473) + o("9oxv", 576, 406, 409, 462) + i("PEYI", -360, -474, -345, -417) + o("LX^^", 457, 493, 460, 448) + i("8&6H", -465, -304, -370, -382) + a(1542, "CgGq") + a(1465, "FzJ$") + e(659, "r]8k", 670, 770) + o("ISn[", 611, 631, 550, 561) + e(852, "J%OH", 711, 748) + t("FzJ$", 313, 236) + i("[ped", -534, -448, -518, -531) + a(1495, "^a*9") + a(1389, "FzJ$") + e(783, "[ped", 837, 846) + o("f5wW", 505, 324, 514, 432) + a(1437, "zMd9") + e(940, "[1k0", 904, 850) + a(1460, "D!i)") + o("7m9L", 470, 400, 257, 367) + t("J%OH", 178, 184) + a(1503, "7m9L") + t("VC&F", 395, 383) + o("CgGq", 435, 380, 440, 391) + t("D!i)", 372, 410) + a(1476, "PEYI") + a(1464, "@^8G") + i("PVSg", -253, -265, -294, -359) + o("HQHT", 440, 601, 530, 518) + t("FzJ$", 336, 342) + a(1429, "PEYI") + i("9oxv", -613, -454, -510, -504) + i("[1k0", -452, -389, -436, -491) + a(1340, "PVSg") + o("HQHT", 453, 347, 420, 373) + a(1528, "J%OH") + e(870, "r52$", 965, 910) + t("VC&F", 357, 382) + a(1513, "Mn]0") + i("5dCn", -547, -594, -488, -507) + e(1037, "CgGq", 965, 946) + t(")v3l", 446, 339) + a(1521, "Jecf") + a(1479, "YN)9") + t("jU!*", 236, 257) + o("u#B!", 563, 413, 473, 460) + i("^a*9", -457, -542, -646, -533) + a(1349, "2rnN") + a(1485, "[1k0") + i("33o!", -302, -345, -434, -353) + a(1450, "5dCn") + o("f5wW", 479, 467, 364, 454) + t("jU!*", 358, 326) + e(911, "vtsR", 822, 845) + a(1461, "FzJ$") + t("u#B!", 374, 270) + t("f5wW", 261, 305) + a(1412, "HQHT") + o("cK%l", 444, 552, 485, 525) + a(1362, "u#B!") + i("sa3P", -572, -521, -520, -536) + o("vtsR", 522, 433, 300, 414) + t("u#B!", 415, 398) + e(966, "x^12", 950, 921) + a(1397, "7m9L") + t("CgGq", 312, 250) + t("jU!*", 286, 234) + i("iBR2", -525, -395, -409, -484) + e(774, "Jecf", 874, 769) + o("2rnN", 405, 326, 480, 405) + t("7m9L", 239, 235) + i("(egZ", -450, -384, -385, -458) + e(938, "[(FZ", 845, 827) + i("iBR2", -574, -417, -405, -471) + o("Jecf", 442, 269, 345, 364) + a(1472, "^a*9") + o("33o!", 485, 469, 536, 556) + a(1524, "Mn]0") + t("Ke4u", 381, 337) + a(1538, "CgGq") + i("YN)9", -506, -458, -647, -546) + o("5dCn", 373, 332, 315, 388) + e(640, "LX^^", 631, 736) + i("(egZ", -452, -507, -488, -542) + i("ISn[", -560, -509, -401, -492) + t("ISn[", 392, 373) + i("9oxv", -552, -393, -407, -478) + i("x^12", -382, -429, -371, -371) + o("o@bI", 460, 419, 483, 481) + e(938, "CgGq", 840, 948) + o("u#B!", 296, 503, 299, 412) + i("jU!*", -466, -325, -423, -409) + t("[ped", 268, 301);
  function i(d, g, C, u, p) {
    return We(p - -887, d);
  }
  function t(d, g, C, u, p) {
    return We(C - -137, d);
  }
  function e(d, g, C, u, p) {
    return We(u - 406, g);
  }
  const n = window[o("f5wW", 577, 513, 575, 532)](x);
  function o(d, g, C, u, p) {
    return We(p - 30, d);
  }
  const r = window[e(619, "Jecf", 775, 729)](n), s = GI(r);
  function a(d, g, C, u, p) {
    return We(d - 992, g);
  }
  const c = {};
  return c[e(734, "f5wW", 840, 773)] = Bc, c[t("PEYI", 310, 377)] = Ol, window[t("r]8k", 335, 263) + "o"][o("x)PD", 514, 420, 459, 449) + "e"][i("x)PD", -481, -302, -426, -412) + t("Jecf", 407, 346)](a(1373, "$0Jp"), s, c, !0, [t("k0Iq", 355, 240) + "pt"]);
}
function We(x, i) {
  const t = $x();
  return We = function(e, n) {
    e = e - (-326 * 5 + -3554 + 5503);
    let o = t[e];
    if (We.MncPWE === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          p += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[p], u[p] = m;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, m = u[l], u[l] = u[p], u[p] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      We.nNiYGC = d, x = arguments, We.MncPWE = !0;
    }
    const s = t[-2 * 2279 + 75 * 113 + -3917], a = e + s, c = x[a];
    return c ? o = c : (We.kyajOZ === void 0 && (We.kyajOZ = !0), o = We.nNiYGC(o, n), x[a] = o), o;
  }, We(x, i);
}
function $x() {
  const x = ["W7VcU8kNkZxdS8kfcSkfs0hcQ3i", "umovWOJcI8ol", "n8kfbSk4yG", "W7ZdN8o4l3C", "sYiDW6tdOG", "DvrtnCoG", "f8ooECk7W4O", "qmkvW6WUbCktWPFdJWKKW6iSWRz4", "E8keDJlcQq", "WQNcHSo2wwC", "WP7cIgVcM8kq", "cKBdJNJcRa", "B0VdSCo+qW", "WPxcOJxdHmkA", "cSoUvmkoW48", "DshdKN3dSa", "W7RdUSogWO5p", "W4XwW6SnW5u", "W6pcNCkda2C", "W40Rt3xcJq", "qmo2DmkGW4m", "gfFcH8kcW4C", "mvFdPhtcLG", "i2hdPmknW7G", "WO3cMaJcG8kH", "lwxcGmk8WOW", "W5hcNwnPDa", "W7JcO8oxW5j/", "kCogfX4y", "iCo4h8kGEG", "DdFdG3pcQq", "oMBdPCkCW64", "WPfjW614W50", "W6VcKxxcRSof", "W6NcVINcVmkQ", "w0Xmdq", "pvtcRrtcQa", "w8osWRBcT8oZ", "pCk6CSofhCoZWQrLW6ldQ3r6W4C", "W44qW63cImkr", "cMFdRComEG", "W5auW4RcR8kH", "rGpcVCoNvW", "xSkvschcMa", "DSk3WQi5WO4", "mCoQWP7cKSoI", "pgmIe8k2", "hLbVW5pdMG", "WQhdRGRdJCox", "W6ddPSklaYS+W53cGbzBwGm", "hhNcQqr7", "WQRcPgFcU8oh", "pYu3DCkt", "WPddJmoHteW", "W5VcMSkuW6u", "W69/W6jvWQu", "W6tdLeRdRmoW", "W4mtW51pnq", "W4hdQ8kNW6jl", "oXy1e8kt", "tSoJdta", "hJ3cG8oqvG", "w8oHfSkZEW", "FMVdG8o+Bq", "W4hdGSkFW5bY", "W5FdK1BcTCoidb7cMSkXWQhcISoLlq", "n3ddR0G", "xSo5g8kzda", "qCk1kSkAca", "WRezW5tdVmkc", "W4FdHHFdISoo", "WRTxW5ueWPG", "WRn7WQWOWOO", "FCkiW5GPW6y", "yxKoWQ3dKG", "qmkJjCoyW5ZdGmk1W5xdUb8", "W4brWQ5zyW", "BSo9WPuYWOW", "W6zvWOS+WQ0", "EmkliWddJa", "WRiPtcNcKq", "Ev5EfCo9", "WOVcOxFcPSo/", "tSoqf8kaAa", "BCkzWQiDWRu", "gghdMw3cQa", "W68PWPPoWRu", "W5pcPqfJW4u", "W5VcShpcLCkc", "kuldQConqq", "W47dPmkTWRz0", "j8k2EmkcAa", "pHWkhmkI", "W6JcOHZcK8k0", "orrqCSke", "p8kJhmkfwa", "W4FcSuFcUmkS", "g8oGyf07", "iguPlCoH", "aCodDSkKWQG", "W5FcJmolW7rb", "wSovk8kpFG", "cweYa8kp", "o0VcMtH1", "ct8mmCk0", "W57cR0pcT8kl", "pLRdIZXb", "tNngfG", "CxNcPmkuWOCdWOKxW5FdG8kTW7v3", "rmkiWPtcMmoZ", "W5ddNtKvfIxcI8kMeKa7W6uRW6S", "z8oukCkhcG", "W6BcSmoMp2a", "eSoRoCo+tW", "lHJdLSoVW7a", "WP/dP8orsZa", "W7hcHJpdPSo3", "WRzPWRVdUSopW4RcKCk7aSkTW7yhWOm", "Ad5BlSoa", "DrldImowqG", "r3xcOmkoW4C", "qtxcN8oTyG", "g8olcSk8gq", "W6dcJt7cGSkT", "W6lcLGhcQ8oNuSo3", "W7WaWRZcOSkM", "W7JcOxRdO8k4", "ndZdTSouFa", "W7ShAtpcPW", "e8o1eSo9Dq", "WQFcHCosDfm", "rmoVWO9pBW", "W5uXsJxcMq", "DxWjW6/dUW", "q8kPyatcTa", "lmk2nCkYzG", "x8oAC8oyjSkXW6zLW6KyWPhdVW", "W6CFW446WQu", "W71CW5fUWQm", "Ec3cKSoJuG", "kSk5hmk6kq", "xSkACcFcQG", "WQtcM3tdSCo5", "WORdGuZdRSkZWP7dUw9uWPe", "Ec/dVghdKa", "cIKflCoS", "e8ouvGhdJG", "huLdmCor", "s8k2k2tdUa", "e8k7wgddPraDy8kmjG", "WRmoxbpcJW", "W5tcJ8kwW6i", "zSkoWP/cH8on", "hCo5b2SH", "W5pcHsX+WR0", "vqxdMNxdJG", "rHpcSCorcG", "hK/cHCk5W4C", "vwrqCSkgjY7dSxZdIq", "FCoXyGBcQW", "W4/dP8kLW4XX", "W4/cOsXAW4S", "WOpdGu3dQCoqW4ZcGZHjWQ3cOxKblW", "q29NjCor", "WR7dVelcR8oH", "W4FcUSoHzq", "WO/cQKvKWQi", "WOhdOCoWxLm", "W5WwW5ddN10", "WOtcMKxcPCoU", "WQ/cTvDIqa", "caq2m8kc", "jmkMgSkMqa", "drZdQCoTW70", "qxNcLmkDW48", "hwddV3xcLW", "yxK/W4VdPG", "W4yGr8k2WQW", "aZVdNNhdLq", "p8oElmkCBa", "DSoSWPlcMSkD", "lhBcMSkcW6G", "WQD6WR8xsSkbWRKVxCouWQtdLg4", "n8kwkmoNDG", "q8oWgsxdLG", "W6ldOmkhaYG6WPhdTsDEvrTcDa", "W7JcTSk2W58O", "WRjIW54tW6C", "wCkyW504WO4", "qqddICoVCG", "zZVdPhldJa", "W67cMI9IWRe", "fCoIWOPWBW", "W6hcNSojzxe", "pgnvcCke", "WQ42v8kSWRC9WPi", "WOzOW48nW5C", "W69UW5TCW70", "W6D4WO9cWPa", "FSoBCmofCG", "WO47W6XlW5u", "AmoecrVdIq", "fxJdGSoAW6a", "W6lcU8ofW4LH", "dfddM8kVEG", "W6xcRHlcKmk0", "WPZcLCo1Fe4", "WPZcR3JcI8oc", "W7dcGSk0W5ak", "W7JdGtvqW6m", "WORdHdVcT8ku", "jt00c8kg", "W7pcMNzaW6e", "lCkXhmoRsa", "W6VcUuCgWRO", "W7ZcOIqDW6y", "WOxcImodw0S", "sNW4W6ZdIq", "r8o0WOtcISo8", "ASk9WR0LWOW", "W4u7x8kIWQq", "m3RdPehcKq", "vCkVlmoulq", "W7aqW4/cR2C", "lCkdmCk+va", "WOzaW4LbWOi", "W7xcUSkSW6SC", "ar0QhSkY", "y8oeWOdcKmoL", "W4ZcJHdcHCoU", "W6RcLqhcRSkt", "xCkWq3VcLa"];
  return $x = function() {
    return x;
  }, $x();
}
async function ZI(x) {
  const i = await OI();
  function t(o, r, s, a, c) {
    return We(s - -797, c);
  }
  const e = {};
  e[t(-364, -234, -289, -183, "r]8k")] = Bc;
  function n(o, r, s, a, c) {
    return We(a - 383, r);
  }
  return window[t(-482, -426, -409, -380, "sa3P") + "o"][n(809, "gUrA", 700, 702) + "e"][t(-312, -304, -364, -438, "cK%l") + "pt"](e, i, x);
}
function ei() {
  const x = ["W4LZy1Gwjq3cNSoTW4dcMCkcWP4o", "W7zowCkzWPRcO1mbW5OeAG", "cSkiaxjoWOayWQ5IWRJdHCoXWQldHW", "WPnrFf7dNmkQWPVdM3mddrTZ", "qmoLWPRdU2S", "W5LdWRi", "W44nWRJcQu/dN0vdCSkMW4JcPJi", "jCoWnGZdNXOpsSkn", "jCkIuW7dKbi7", "ySkFBCochvrDn05TDCoDcq", "WPfsD1tdN8o5W77dTv4Hma", "tCkbW6ddJJGJW57dJWq", "WQviWPlcTCkkWOK1", "W6RdVb0EW53dG1lcVG", "t8kgWR7dGWy8W6FdSa", "d8kkd3jjW7fNW6HFWOpdLW", "FHC4W6z7W4rMkwBdLXLc", "WP7cPgCxW6mJWRf/cSkhl8oXWRy", "W73cUmoYvY/dTCkZWP3dTMlcU8kEcq", "W4XXBvGrvhldMmoqW7VcIW", "d8kQWQ5cB8khWQ3dLmokWQldT8ooWPS"];
  return ei = function() {
    return x;
  }, ei();
}
(function(x, i) {
  function t(a, c, d, g, C) {
    return Ye(g - -815, c);
  }
  function e(a, c, d, g, C) {
    return Ye(a - 577, g);
  }
  function n(a, c, d, g, C) {
    return Ye(g - 218, c);
  }
  function o(a, c, d, g, C) {
    return Ye(a - 228, c);
  }
  function r(a, c, d, g, C) {
    return Ye(c - 298, a);
  }
  const s = x();
  for (; ; )
    try {
      if (-parseInt(t(-650, "i*#m", -666, -657, -664)) / 1 * (parseInt(e(743, 749, 735, "gF$D", 734)) / 2) + -parseInt(t(-661, "i*#m", -658, -658, -662)) / 3 * (-parseInt(e(725, 731, 730, "&2Fv", 724)) / 4) + parseInt(o(391, "0Z@t", 395, 386, 385)) / 5 * (parseInt(r("07Vl", 449, 446, 446, 458)) / 6) + -parseInt(t(-670, "nBbA", -660, -666, -676)) / 7 + -parseInt(e(733, 726, 730, "sJED", 730)) / 8 + -parseInt(n(371, "RR(u", 369, 364, 356)) / 9 + parseInt(e(729, 733, 732, "S6B^", 730)) / 10 === i) break;
      s.push(s.shift());
    } catch {
      s.push(s.shift());
    }
})(ei, -1 * -935897 + -5 * -239042 + -1516527);
function Ye(x, i) {
  const t = ei();
  return Ye = function(e, n) {
    e = e - (7831 + 1 * 2558 + -10243);
    let o = t[e];
    if (Ye.QUtjIS === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          p += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[p], u[p] = m;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, m = u[l], u[l] = u[p], u[p] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Ye.wggpuK = d, x = arguments, Ye.QUtjIS = !0;
    }
    const s = t[-23 * -254 + -7641 + 1799], a = e + s, c = x[a];
    return c ? o = c : (Ye.QiLwOP === void 0 && (Ye.QiLwOP = !0), o = Ye.wggpuK(o, n), x[a] = o), o;
  }, Ye(x, i);
}
async function HI(x) {
  const { iv: i, key: t, message: e } = await kI(x), n = await ZI(t), o = {};
  o[r(-459, -466, "Zpl3", -465)] = n, o.iv = i, o[r(-464, -472, "J&gQ", -466) + "ge"] = e;
  function r(s, a, c, d, g) {
    return Ye(d - -620, c);
  }
  return o;
}
(function(x, i) {
  function t(a, c, d, g, C) {
    return Ge(d - 668, c);
  }
  const e = x();
  function n(a, c, d, g, C) {
    return Ge(C - -805, c);
  }
  function o(a, c, d, g, C) {
    return Ge(g - 415, c);
  }
  function r(a, c, d, g, C) {
    return Ge(a - 524, d);
  }
  function s(a, c, d, g, C) {
    return Ge(g - -426, a);
  }
  for (; ; )
    try {
      if (-parseInt(t(1020, "2426", 1009, 1023, 1014)) / 1 * (-parseInt(s("sWVv", -75, -81, -92, -82)) / 2) + parseInt(t(979, "Fuz2", 996, 992, 1002)) / 3 + parseInt(r(853, 847, "D1tr", 843, 856)) / 4 * (parseInt(t(1028, "tfkb", 1015, 1010, 1031)) / 5) + parseInt(t(1e3, "17Vy", 992, 974, 983)) / 6 * (-parseInt(o(753, "QIEW", 767, 765, 748)) / 7) + -parseInt(o(778, "5$F^", 765, 767, 777)) / 8 * (parseInt(r(849, 837, "QIEW", 838, 850)) / 9) + -parseInt(n(-471, "GT@(", -480, -452, -463)) / 10 + parseInt(n(-484, "XEqM", -466, -454, -468)) / 11 * (parseInt(n(-495, "GT@(", -473, -480, -487)) / 12) === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ti, 77 * -2764 + -1034430 + 3 * 669667);
function Ge(x, i) {
  const t = ti();
  return Ge = function(e, n) {
    e = e - 318;
    let o = t[e];
    if (Ge.KtwbYa === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          p += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[p], u[p] = m;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, m = u[l], u[l] = u[p], u[p] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Ge.TKOMUi = d, x = arguments, Ge.KtwbYa = !0;
    }
    const s = t[1448 * 1 + -5453 + -267 * -15], a = e + s, c = x[a];
    return c ? o = c : (Ge.GGqDvu === void 0 && (Ge.GGqDvu = !0), o = Ge.TKOMUi(o, n), x[a] = o), o;
  }, Ge(x, i);
}
async function RI(x) {
  function i(r, s, a, c, d) {
    return Ge(r - 773, s);
  }
  function t(r, s, a, c, d) {
    return Ge(r - 886, d);
  }
  function e(r, s, a, c, d) {
    return Ge(d - 361, c);
  }
  function n(r, s, a, c, d) {
    return Ge(a - 512, s);
  }
  const o = await window[t(1222, 1222, 1229, 1237, "@bys") + "o"][t(1224, 1211, 1235, 1217, "7#je") + "e"][n(869, "a[sM", 852) + "t"](i(1095, "NHE1"), x);
  return Array[n(836, "@ux^", 843)](new Uint8Array(o))[i(1116, "PGnq")]((r) => r[n(841, "XEqM", 851) + n(856, "@ux^", 858)](-693 * -5 + -419 * 20 + -1 * -4931)[e(669, 672, 679, "7#je", 681) + e(680, 683, 694, "Zcfb", 693)](-9136 + -3 * -3046, "0"))[n(842, "62]j", 839)]("");
}
function ti() {
  const x = ["WRJcRZFdGmkdWP7dJcVdMqBcNCoKWQW", "W7eNqSkbraSKxSk/Cq", "WRlcO0NcNmopW4FcTaS", "WQbbWPBdMZ3cTtNdUa", "BcpcGMqiW58sW70", "FwGAWQWwumoX", "W4JdLmkkW7KB", "sSoGW7FdPmoGW6VdPbntWRu", "W74AW4xdMmoz", "fmklx8o4AmoEW7ddTwFdG8kca2e", "W7aXqCoVWPpcNmocWRm8Eq", "W7COqCkah21oAmkTuCk+WPZcSq", "ix3dVtldUmorW4G1WQ/cKmoSdwW", "W7RcHmkuAq", "gCkLkSk2fv9cWR1itdrLkG", "F0yFvZKMWQRdTZu", "iN7dUhRcKmkFWRuiWOa", "DZxcT8k1", "BCoaWOy", "jhNcVMxcImkOWPOz", "W7X4imobrW7dP8oXpIT3W7TK", "WOhcH8oCWPiyWP0EWQfOW40", "rbBcOSoYmq", "l8k7W5VdRmoOaq0GamoMumomoW", "W4VdGmkmW54d", "ACoJWRRcR8kV", "jmkOW4RdVI4", "sIXGxw3dMmkc", "yYFdVJ5cWOvPW63cKmoaWPCBW7u", "e8kvaG", "j3tdVJdcVSkkWPWHWRhcQG", "j3ZdUtNdUCosW4aBWQFcGmoRmMS", "EcNcVW", "cNJdMdDbWQJdMCoDWQdcRa", "m0xdP8kmuCo9WRmvW6/dM8oSW48U"];
  return ti = function() {
    return x;
  }, ti();
}
(function(x, i) {
  function t(c, d, g, C, u) {
    return Je(d - 953, g);
  }
  function e(c, d, g, C, u) {
    return Je(g - -470, c);
  }
  function n(c, d, g, C, u) {
    return Je(d - 769, C);
  }
  function o(c, d, g, C, u) {
    return Je(u - -866, C);
  }
  function r(c, d, g, C, u) {
    return Je(C - -534, d);
  }
  for (var s = x(); ; )
    try {
      var a = parseInt(e("$qdP", -108, -111, -113, -111)) / 1 + parseInt(o(-509, -500, -508, "7P*O", -504)) / 2 + -parseInt(o(-506, -499, -497, "gEj%", -501)) / 3 * (-parseInt(o(-485, -484, -500, "HPd^", -493)) / 4) + parseInt(r(-163, "*6F3", -157, -162, -157)) / 5 + parseInt(e("bPgB", -101, -103, -99, -99)) / 6 + -parseInt(t(1328, 1328, "q&wE", 1322, 1330)) / 7 * (parseInt(n(1122, 1130, 1138, "9@Cn", 1125)) / 8) + -parseInt(t(1323, 1316, "*6F3", 1319, 1323)) / 9;
      if (a === i) break;
      s.push(s.shift());
    } catch {
      s.push(s.shift());
    }
})(ni, -58149 + -37 * -37751 + 139 * -3284);
function Je(x, i) {
  var t = ni();
  return Je = function(e, n) {
    e = e - (-139 * 33 + 3130 * -3 + -305 * -47);
    var o = t[e];
    if (Je.LKiHXR === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (var O = 0, D = u.length; O < D; O++)
          p += "%" + ("00" + u.charCodeAt(O).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, s = function(g, C) {
        var u = [], p = 0, m, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[p], u[p] = m;
        l = 0, p = 0;
        for (var W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, m = u[l], u[l] = u[p], u[p] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Je.SGFOup = s, x = arguments, Je.LKiHXR = !0;
    }
    var a = t[0], c = e + a, d = x[c];
    return d ? o = d : (Je.RUaiDZ === void 0 && (Je.RUaiDZ = !0), o = Je.SGFOup(o, n), x[c] = o), o;
  }, Je(x, i);
}
function ni() {
  var x = ["rr7cR8kLC8kbWPVdV8kFcmoTWQq", "W73cUCksxSofqbD+rbdcG8ow", "WOVdV8kiWRL1WRzCWPysW7NdGYCe", "WQ1cW5ZcI8o9x3xcPNu", "m8owcSoTtmkMWOpcICoqWRC/W6TX", "qcZcS8oTcSoYm1S", "A28qWQHQkqNdU1dcLINcT1K", "W4fdp8kuWQhcQ8oIg0FdOCkBWPa", "EmoJoSkDW55NW4hdJSoyWQ/cRKn0", "iCkaWRavy8oIuCo3e8k3lmkP", "hmkeWPJdRCkWWP3dV8oujG9pjW", "tZzSjL9dWO1Olq", "zvigW5i5WPy2WQqHWRDmW5tdQq", "omovc8oLsSkJWOhcKCoKWPmpW75L", "WRD5W4FdP251dI8", "WRj3vhtcKgZcLbZcSahcOCor", "z2ZcU1KlofFcRmopW4CVuW", "WOlcN8k1amorW43dHhO6k3tdUa"];
  return ni = function() {
    return x;
  }, ni();
}
async function fg(x) {
  const { Image: i } = p0, t = await x.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const o = i.verify(n);
  if (o) throw Error(o);
  const r = {};
  return r.bytes = e, i.create(r);
}
async function Cg(x) {
  const { v4: { Metadata: i } } = p0, t = { ...x };
  t.platform = p0.Platform.WEB;
  const e = t, n = i.verify(e);
  if (n) throw Error(n);
  return i.create(e);
}
async function pg(x) {
  const { Content: i } = p0, { iv: t, key: e, message: n } = await HI(x), o = { token: new Uint8Array(e), iv: t, schemaVersion: Gl, bytes: new Uint8Array(n) }, r = i.verify(o);
  if (r) throw Error(r);
  const s = i.create(o);
  return i.encode(s).finish();
}
function hg(x) {
  const { Blob: i } = p0.v4, t = i.verify(x);
  if (t) throw Error(t);
  const e = i.create(x);
  return i.encode(e).finish();
}
async function KI(x, i) {
  const { FaceContent: t } = p0.v4, e = await fg(x), n = await Cg(i), o = {};
  o.image = e, o.metadata = n;
  const r = o, s = t.verify(r);
  if (s) throw Error(s);
  const a = t.create(r), c = {};
  return c.faceContent = a, hg(c);
}
async function PI(x, i) {
  const t = await KI(x, i);
  return pg(t);
}
(function() {
  var x = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return function(i) {
    i = i || {};
    var t;
    t || (t = typeof i < "u" ? i : {});
    var e, n;
    t.ready = new Promise(function(I, f) {
      e = I, n = f;
    });
    var o = {}, r;
    for (r in t) t.hasOwnProperty(r) && (o[r] = t[r]);
    var s = "./this.program", a = !(-1 * 3369 + 3401 + -31), c = !(1 * 320 + -1973 * 4 + 7573);
    a = typeof window == "object", c = typeof importScripts == "function";
    var d = "", g;
    (a || c) && (c ? d = self.location.href : document.currentScript && (d = document.currentScript.src), x && (d = x), -361 + -1 * 4733 + 6 * 849 !== d.indexOf("blob:") ? d = d.substr(-1 * -6764 + 1 * 5009 + -11773 * 1, d.lastIndexOf("/") + 1) : d = "", c && (g = function(I) {
      var f = new XMLHttpRequest();
      return f.open("GET", I, !(-13010 + 1 * 13011)), f.responseType = "arraybuffer", f.send(null), new Uint8Array(f.response);
    }));
    var C = t.printErr || console.warn.bind(console);
    for (r in o) o.hasOwnProperty(r) && (t[r] = o[r]);
    o = null, t.thisProgram && (s = t.thisProgram);
    var u;
    t.wasmBinary && (u = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && $e("no native wasm support detected");
    var p, m = !(-13836 + 13837 * 1);
    function A(I) {
      I || $e("Assertion failed: undefined");
    }
    var l = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (5 * -872 + -181 * -32 + 1432 * -1);
    function W(I, f, b) {
      var y = He;
      if (-1181 + -32 * 133 + 1 * 5437 < b) {
        b = f + b - (-1166 + -292 * -21 + -4965);
        for (var S = 7635 + -1 * -4959 + -12594; S < I.length; ++S) {
          var w = I.charCodeAt(S);
          if (3333 + 2008 * 45 + -3 * 12799 <= w && 57343 >= w) {
            var Z = I.charCodeAt(++S);
            w = 1334 * -1 + -118983 + -185853 * -1 + ((w & -219 * 2 + -9131 + -5296 * -2) << -7637 + 40 * -60 + -17 * -591) | Z & 829 * -11 + 7902 + 1120 * 2;
          }
          if (-9412 + -12 * -169 + -1 * -7511 >= w) {
            if (f >= b) break;
            y[f++] = w;
          } else {
            if (1 * -7109 + -5769 + 14925 >= w) {
              if (f + 1 >= b) break;
              y[f++] = -799 * -8 + -1138 + -5062 | w >> -8608 + 3 * -1878 + -1096 * -13;
            } else {
              if (65535 >= w) {
                if (f + (-6248 + -10 * -625) >= b) break;
                y[f++] = 1 * 7226 + -2724 + -4278 | w >> 12;
              } else {
                if (f + (-1 * -6202 + -267 * -23 + -12340) >= b) break;
                y[f++] = 10780 + 2 * -5270 | w >> 18, y[f++] = 4360 * -1 + -3 * -894 + 1806 | w >> 12 & -4873 * -2 + -4 * -1309 + -14919;
              }
              y[f++] = -14836 + -86 * -174 | w >> 9983 + 11 * -907 & -4307 * 1 + -7817 + 12187;
            }
            y[f++] = -4520 + -4877 * -1 + 1 * -229 | w & 1721 * -3 + 118 * -1 + -334 * -16;
          }
        }
        y[f] = -4966 * 2 + 5040 + 4892;
      }
    }
    var O = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (22 * 111 + 1 * 8089 + -10531);
    function D(I, f) {
      for (var b = I >> 1, y = b + f / (-601 * -2 + -162 * -61 + 5541 * -2); !(b >= y) && Jt[b]; ) ++b;
      if (b <<= -1 * -2649 + 2274 + 4922 * -1, -1 * -8069 + 679 + -8716 < b - I && O) return O.decode(He.subarray(I, b));
      for (b = 886 * 7 + 8465 * 1 + -14667, y = ""; ; ) {
        var S = Pt[I + 2 * b >> 1];
        if (-1 * -5587 + 6420 + -12007 == S || b == f / (1 * -1126 + -110 + 1238)) return y;
        ++b, y += String.fromCharCode(S);
      }
    }
    function Y(I, f, b) {
      if (b === void 0 && (b = 2147483647), 353 * 17 + -8515 + -34 * -74 > b) return -113 * -31 + 2797 * -2 + -1 * -2091;
      b -= 1 * 3547 + -4480 + 5 * 187;
      var y = f;
      b = b < (-87 * 73 + 8512 + -2159) * I.length ? b / (-1949 + 1951 * 1) : I.length;
      for (var S = 673 * 2 + -174 * 1 + 1172 * -1; S < b; ++S) Pt[f >> -1 * -1484 + 8214 + -9697] = I.charCodeAt(S), f += 13360 + 13358 * -1;
      return Pt[f >> -8731 + -4 * -2183] = -3783 + 2 * 3946 + -4109, f - y;
    }
    function _(I) {
      return (3452 + -1 * 7127 + 3677) * I.length;
    }
    function H(I, f) {
      for (var b = -428 * 17 + -2 * -4555 + -1 * 1834, y = ""; !(b >= f / (-1 * -5619 + -9787 * -1 + -15402)); ) {
        var S = Oe[I + 4 * b >> 2];
        if (2050 + 1297 * -1 + -753 == S) break;
        ++b, -9 * -11813 + 124427 + -4 * 41302 <= S ? (S -= 65536, y += String.fromCharCode(-60377 + 2 * 38068 + 39537 | S >> -9380 + -1 * -2693 + -1 * -6697, -4251 * -17 + -1 * -2386 + 7 * -2619 | S & -4822 * -1 + -8604 + 5 * 961)) : y += String.fromCharCode(S);
      }
      return y;
    }
    function re(I, f, b) {
      if (void (4568 + -2 * 2284) === b && (b = -1 * 3713071691 + -268 * -205012 + -2 * -2902806061), 3810 + -1 * -167 + -3973 > b) return -5679 + -1 * -839 + -110 * -44;
      var y = f;
      b = y + b - (98 * -57 + 5135 + 455);
      for (var S = -4305 + 40 * -189 + -7 * -1695; S < I.length; ++S) {
        var w = I.charCodeAt(S);
        if (53286 + 1 * 97712 + -439 * 218 <= w && -311 * -262 + -23151 * -2 + 203 * -347 >= w) {
          var Z = I.charCodeAt(++S);
          w = 108 * 139 + 84315 + -33791 + ((w & -1 * -3463 + 1 * -129 + -2311) << -702 + 89 * 8) | Z & 8161 + 1 * -2498 + 4 * -1160;
        }
        if (Oe[f >> 15 * 619 + 1467 * 1 + -10750] = w, f += 2152 + -4873 * 2 + 7598, f + (-3 * 3308 + -5442 + 10 * 1537) > b) break;
      }
      return Oe[f >> -5938 + -9 * -660] = -2548 + -6352 * 1 + 8900, f - y;
    }
    function U(I) {
      for (var f = -3305 * -3 + -1 * -4852 + -14767, b = 685 * -2 + -7 * -882 + 2 * -2402; b < I.length; ++b) {
        var y = I.charCodeAt(b);
        -1 * 88996 + -14389 + 158681 <= y && -5411 * -2 + -61414 * -1 + -14893 >= y && ++b, f += -1439 * 6 + 227 * 26 + -38 * -72;
      }
      return f;
    }
    var te, Ve, He, Pt, Jt, Oe, at, Qn, b0;
    function nn(I) {
      te = I, t.HEAP8 = Ve = new Int8Array(I), t.HEAP16 = Pt = new Int16Array(I), t.HEAP32 = Oe = new Int32Array(I), t.HEAPU8 = He = new Uint8Array(I), t.HEAPU16 = Jt = new Uint16Array(I), t.HEAPU32 = at = new Uint32Array(I), t.HEAPF32 = Qn = new Float32Array(I), t.HEAPF64 = b0 = new Float64Array(I);
    }
    var qe = t.INITIAL_MEMORY || -344723 * -45 + 31114797 * -1 + 32379478, Wt = {};
    Wt.initial = qe / (-3601 * -22 + -92 * 449 + -13811 * -2), Wt.maximum = 32768, t.wasmMemory ? p = t.wasmMemory : p = new WebAssembly.Memory(Wt), p && (te = p.buffer), qe = te.byteLength, nn(te);
    var Tt = [], Re = [], xn = [], A0 = [];
    function y0() {
      var I = t.preRun.shift();
      Tt.unshift(I);
    }
    var je = -1006 + -53 * -55 + 1909 * -1, It = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function $e(I) {
      throw t.onAbort && t.onAbort(I), C(I), m = !(1 * 6619 + -359 * -1 + -2 * 3489), I = new WebAssembly.RuntimeError("abort(" + I + "). Build with -s ASSERTIONS=1 for more info."), n(I), I;
    }
    function Ut(I) {
      var f = st;
      return String.prototype.startsWith ? f.startsWith(I) : 11651 + -1 * 11651 === f.indexOf(I);
    }
    function ft() {
      return Ut("data:application/octet-stream;base64,");
    }
    var st = "sam.wasm";
    if (!ft()) {
      var Qt = st;
      st = t.locateFile ? t.locateFile(Qt, d) : d + Qt;
    }
    function ct() {
      try {
        if (u) return new Uint8Array(u);
        if (g) return g(st);
        throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        $e(I);
      }
    }
    function Og() {
      var I = {};
      return I.credentials = "same-origin", u || !a && !c || typeof fetch != "function" || Ut("file://") ? Promise.resolve().then(ct) : fetch(st, I).then(function(f) {
        if (!f.ok) throw "failed to load wasm binary file at '" + st + "'";
        return f.arrayBuffer();
      }).catch(function() {
        return ct();
      });
    }
    function zn(I) {
      for (; 5522 + 11 * -502 < I.length; ) {
        var f = I.shift();
        if (typeof f == "function") f(t);
        else {
          var b = f.Ba;
          typeof b == "number" ? f.ta === void 0 ? yi("v", b)() : yi("vi", b)(f.ta) : b(void (1 * -2883 + -6333 + -256 * -36) === f.ta ? null : f.ta);
        }
      }
    }
    function yi(I, f) {
      var b = [];
      return function() {
        b.length = arguments.length;
        for (var y = 6125 + -1093 * 1 + 296 * -17; y < arguments.length; y++) b[y] = arguments[y];
        return b && b.length ? t["dynCall_" + I].apply(null, [f].concat(b)) : t["dynCall_" + I].call(null, f);
      };
    }
    function Zg(I) {
      this.da = I - (-1777 * -4 + -6652 + -440), this.Oa = function(f) {
        Oe[this.da + 8 >> 2] = f;
      }, this.La = function(f) {
        Oe[this.da + (8662 + 1 * 6671 + -15333) >> 4577 * -1 + 9662 + -1 * 5083] = f;
      }, this.Ma = function() {
        Oe[this.da + (-74 * 106 + -4 * 128 + 380 * 22) >> -3159 + -109 * -29] = -9774 + 14 * -563 + 8 * 2207;
      }, this.Ka = function() {
        Ve[this.da + (116 * 46 + -8306 * -1 + -13630) >> -6362 + -9 * -1025 + -2863] = 3891 * 1 + -2444 + -1447;
      }, this.Na = function() {
        Ve[this.da + (8937 + -35 * -92 + -276 * 44) >> -13 * -668 + 6340 + -7512 * 2] = 14714 + -7357 * 2;
      }, this.Fa = function(f, b) {
        this.Oa(f), this.La(b), this.Ma(), this.Ka(), this.Na();
      };
    }
    function qn() {
      return -9115 + -9762 * 1 + 18877 < qn.xa;
    }
    function vi(I) {
      switch (I) {
        case 4801 * -1 + -66 * 145 + 14372:
          return 20 * 68 + 9925 + -11285;
        case -3 * 733 + -1660 * -5 + -6099 * 1:
          return -34 * -60 + 8941 + -10980;
        case 1154 * -1 + 2 * -1699 + 2278 * 2:
          return 10 * 956 + -5111 + 4447 * -1;
        case -3 * 1333 + -29 * 293 + 12504:
          return 325 * 30 + -3437 + 6310 * -1;
        default:
          throw new TypeError("Unknown type size: " + I);
      }
    }
    var Sr = void (5222 * 1 + 1184 + -6406);
    function Ee(I) {
      for (var f = ""; He[I]; ) f += Sr[He[I++]];
      return f;
    }
    var v0 = {}, zt = {}, $n = {};
    function Wi(I) {
      if (void (2648 + -662 * 4) === I) return "_unknown";
      I = I.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = I.charCodeAt(-6889 * -1 + 2 * -1379 + -51 * 81);
      return 3021 + 892 * -6 + 3 * 793 <= f && 3077 * 2 + -3802 + -51 * 45 >= f ? "_" + I : I;
    }
    function Si(I, f) {
      return I = Wi(I), new Function("body", "return function " + I + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(f);
    }
    function wi(I) {
      var f = Error, b = Si(I, function(y) {
        this.name = I, this.message = y, y = Error(y).stack, void (-2388 + 597 * 4) !== y && (this.stack = this.toString() + `
` + y.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return b.prototype = Object.create(f.prototype), b.prototype.constructor = b, b.prototype.toString = function() {
        return void (-2061 * 4 + 339 * -3 + -21 * -441) === this.message ? this.name : this.name + ": " + this.message;
      }, b;
    }
    var W0 = void (-561 * -6 + 1399 * 2 + -268 * 23);
    function J(I) {
      throw new W0(I);
    }
    var wr = void (-6308 + -83 * -76);
    function ex(I) {
      throw new wr(I);
    }
    function S0(I, f, b) {
      function y(k) {
        k = b(k), k.length !== I.length && ex("Mismatched type converter count");
        for (var R = 8440 + 844 * -10; R < I.length; ++R) St(I[R], k[R]);
      }
      I.forEach(function(k) {
        $n[k] = f;
      });
      var S = Array(f.length), w = [], Z = 1 * -9449 + 2983 + 6466;
      f.forEach(function(k, R) {
        zt.hasOwnProperty(k) ? S[R] = zt[k] : (w.push(k), v0.hasOwnProperty(k) || (v0[k] = []), v0[k].push(function() {
          S[R] = zt[k], ++Z, Z === w.length && y(S);
        }));
      }), 22 * -84 + -8312 + -20 * -508 === w.length && y(S);
    }
    function St(I, f, b) {
      if (b = b || {}, !("argPackAdvance" in f)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var y = f.name;
      if (I || J('type "' + y + '" must have a positive integer typeid pointer'), zt.hasOwnProperty(I)) {
        if (b.Ea) return;
        J("Cannot register type '" + y + "' twice");
      }
      zt[I] = f, delete $n[I], v0.hasOwnProperty(I) && (f = v0[I], delete v0[I], f.forEach(function(S) {
        S();
      }));
    }
    function Hg(I) {
      var f = {};
      return f.count = I.count, f.oa = I.oa, f.pa = I.pa, f.da = I.da, f.fa = I.fa, f.ga = I.ga, f.ha = I.ha, f;
    }
    function Bi(I) {
      J(I.A.fa.ea.name + " instance already deleted");
    }
    var ki = !(-1539 + -385 * -4);
    function Br() {
    }
    function kr(I) {
      --I.count.value, 2811 + -7 * 13 + -2720 === I.count.value && (I.ga ? I.ha.na(I.ga) : I.fa.ea.na(I.da));
    }
    function on(I) {
      return typeof FinalizationGroup > "u" ? (on = function(f) {
        return f;
      }, I) : (ki = new FinalizationGroup(function(f) {
        for (var b = f.next(); !b.done; b = f.next()) b = b.value, b.da ? kr(b) : console.warn("object already deleted: " + b.da);
      }), on = function(f) {
        return ki.register(f, f.A, f.A), f;
      }, Br = function(f) {
        ki.unregister(f.A);
      }, on(I));
    }
    var rn = void (3657 + 67 * 32 + -5801), an = [];
    function Gi() {
      for (; an.length; ) {
        var I = an.pop();
        I.A.oa = !(-6302 * 1 + -997 * -9 + 89 * -30), I.delete();
      }
    }
    function Vt() {
    }
    var Gr = {};
    function Rg(I, f) {
      var b = t;
      if (void (-666 + 25 * -111 + 93 * 37) === b[I].ja) {
        var y = b[I];
        b[I] = function() {
          return b[I].ja.hasOwnProperty(arguments.length) || J("Function '" + f + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + b[I].ja + ")!"), b[I].ja[arguments.length].apply(this, arguments);
        }, b[I].ja = [], b[I].ja[y.ya] = y;
      }
    }
    function Or(I, f, b) {
      t.hasOwnProperty(I) ? ((void (16 * 617 + -2969 * -1 + -12841 * 1) === b || void (6394 + -823 * 3 + -157 * 25) !== t[I].ja && void (7079 + 1757 * -3 + -1808) !== t[I].ja[b]) && J("Cannot register public name '" + I + "' twice"), Rg(I, I), t.hasOwnProperty(b) && J("Cannot register multiple overloads of a function with the same number of arguments (" + b + ")!"), t[I].ja[b] = f) : (t[I] = f, void (-4072 + 1 * -9e3 + 13072) !== b && (t[I].Ra = b));
    }
    function Kg(I, f, b, y, S, w, Z, k) {
      this.name = I, this.constructor = f, this.ma = b, this.na = y, this.ia = S, this.Ca = w, this.qa = Z, this.Aa = k;
    }
    function tx(I, f, b) {
      for (; f !== b; ) f.qa || J("Expected null or instance of " + b.name + ", got an instance of " + f.name), I = f.qa(I), f = f.ia;
      return I;
    }
    function Pg(I, f) {
      return f === null ? (this.ua && J("null is not a valid " + this.name), -2393 + -1 * -2393) : (f.A || J('Cannot pass "' + B0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), tx(f.A.da, f.A.fa.ea, this.ea));
    }
    function Tg(I, f) {
      if (f === null) {
        if (this.ua && J("null is not a valid " + this.name), this.sa) {
          var b = this.Ha();
          return I !== null && I.push(this.na, b), b;
        }
        return 1655 + -127 * 50 + 5 * 939;
      }
      if (f.A || J('Cannot pass "' + B0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && f.A.fa.ra && J("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name), b = tx(f.A.da, f.A.fa.ea, this.ea), this.sa) switch (void (8514 + 4257 * -2) === f.A.ga && J("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case 0:
          f.A.ha === this ? b = f.A.ga : J("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name);
          break;
        case 170 + -8629 * -1 + -8798:
          b = f.A.ga;
          break;
        case -1081 * -1 + -4375 * 1 + 3296:
          if (f.A.ha === this) b = f.A.ga;
          else {
            var y = f.clone();
            b = this.Ia(b, w0(function() {
              y.delete();
            })), I !== null && I.push(this.na, b);
          }
          break;
        default:
          J("Unsupporting sharing policy");
      }
      return b;
    }
    function Vg(I, f) {
      return f === null ? (this.ua && J("null is not a valid " + this.name), -9013 * 1 + -6130 + 15143) : (f.A || J('Cannot pass "' + B0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), f.A.fa.ra && J("Cannot convert argument of type " + f.A.fa.name + " to parameter type " + this.name), tx(f.A.da, f.A.fa.ea, this.ea));
    }
    function nx(I) {
      return this.fromWireType(at[I >> 4 * 1352 + 5634 + 30 * -368]);
    }
    function Zr(I, f, b) {
      return f === b ? I : void (-2 * 3413 + 6719 * 1 + 107) === b.ia ? null : (I = Zr(I, f, b.ia), I === null ? null : b.Aa(I));
    }
    var sn = {};
    function Eg(I, f) {
      for (f === void 0 && J("ptr should not be undefined"); I.ia; ) f = I.qa(f), I = I.ia;
      return sn[f];
    }
    function xx(I, f) {
      f.fa && f.da || ex("makeClassHandle requires ptr and ptrType"), !!f.ha != !!f.ga && ex("Both smartPtrType and smartPtr must be specified");
      var b = {};
      b.value = 1, f.count = b;
      var y = {};
      y.value = f;
      var S = {};
      return S.A = y, on(Object.create(I, S));
    }
    function wt(I, f, b, y) {
      this.name = I, this.ea = f, this.ua = b, this.ra = y, this.sa = !(-1051 * 3 + 54 * -111 + 2287 * 4), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void 0, void (3 * -2965 + -44 * -11 + 8411) !== f.ia ? this.toWireType = Tg : (this.toWireType = y ? Pg : Vg, this.ka = null);
    }
    function Hr(I, f, b) {
      t.hasOwnProperty(I) || ex("Replacing nonexistant public symbol"), void (3319 * 1 + -7565 + 4246) !== t[I].ja && void (499 * -11 + -9729 + 15218) !== b ? t[I].ja[b] = f : (t[I] = f, t[I].ya = b);
    }
    function Et(I, f) {
      I = Ee(I);
      var b = yi(I, f);
      return typeof b != "function" && J("unknown function pointer with signature " + I + ": " + f), b;
    }
    var Rr = void 0;
    function Kr(I) {
      I = Jr(I);
      var f = Ee(I);
      return Bt(I), f;
    }
    function cn(I, f) {
      function b(w) {
        S[w] || zt[w] || ($n[w] ? $n[w].forEach(b) : (y.push(w), S[w] = !(9059 + -401 * -1 + -9460)));
      }
      var y = [], S = {};
      throw f.forEach(b), new Rr(I + ": " + y.map(Kr).join([", "]));
    }
    function Pr(I, f) {
      for (var b = [], y = -4504 * -1 + -42 + -97 * 46; y < I; y++) b.push(Oe[(f >> -2007 + 791 * -11 + -315 * -34) + y]);
      return b;
    }
    function ix(I) {
      for (; I.length; ) {
        var f = I.pop();
        I.pop()(f);
      }
    }
    function Tr(I, f, b) {
      return I instanceof Object || J(b + ' with invalid "this": ' + I), I instanceof f.ea.constructor || J(b + ' incompatible with "this" of type ' + I.constructor.name), I.A.da || J("cannot call emscripten binding method " + b + " on deleted object"), tx(I.A.da, I.A.fa.ea, f.ea);
    }
    var Vr = {};
    Vr.value = void (-5680 * 1 + 4287 + 1393);
    var Er = {};
    Er.value = null;
    var Lr = {};
    Lr.value = !(1 * 5505 + -2 * 622 + -1 * 4261);
    var Dr = {};
    Dr.value = !(-1 * 2168 + 1291 * -1 + 20 * 173);
    var Oi = [], et = [{}, Vr, Er, Lr, Dr];
    function Zi(I) {
      1651 * -5 + -4778 + -1 * -13037 < I && 1819 + 3 * -1871 + -1 * -3794 === --et[I].Ja && (et[I] = void (9540 + -1 * 9540), Oi.push(I));
    }
    function w0(I) {
      switch (I) {
        case void (-5 * 622 + -1338 * -3 + 904 * -1):
          return 4982 + -1 * 8103 + 3122;
        case null:
          return -16 * 17 + 235 * 41 + -9361;
        case !0:
          return 55 * -89 + 1 * 3603 + 259 * 5;
        case !(-6656 + -1495 * 1 + 4 * 2038):
          return -1 * 5473 + -6813 + 12290;
        default:
          var f = Oi.length ? Oi.pop() : et.length, b = {};
          return b.Ja = 1, b.value = I, et[f] = b, f;
      }
    }
    function B0(I) {
      if (I === null) return "null";
      var f = typeof I;
      return f === "object" || f === "array" || f === "function" ? I.toString() : "" + I;
    }
    function Lg(I, f) {
      switch (f) {
        case -1945 + 3 * -379 + 1542 * 2:
          return function(b) {
            return this.fromWireType(Qn[b >> -1 * -9778 + 6196 + 12 * -1331]);
          };
        case -6025 + -3763 * 1 + 9791:
          return function(b) {
            return this.fromWireType(b0[b >> 6803 * 1 + 1788 + -8588]);
          };
        default:
          throw new TypeError("Unknown float type: " + I);
      }
    }
    function Dg(I) {
      var f = Function;
      if (!(f instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof f + " which is not a function");
      var b = Si(f.name || "unknownFunctionName", function() {
      });
      return b.prototype = f.prototype, b = new b(), I = f.apply(b, I), I instanceof Object ? I : b;
    }
    function Ng(I, f, b) {
      switch (f) {
        case -1 * 5212 + -1 * 533 + 5745:
          return b ? function(y) {
            return Ve[y];
          } : function(y) {
            return He[y];
          };
        case 19 * -164 + -1 * 8458 + -463 * -25:
          return b ? function(y) {
            return Pt[y >> 260 * -4 + -2163 + 3204];
          } : function(y) {
            return Jt[y >> 9747 + -8337 * -1 + 107 * -169];
          };
        case 38 * 133 + -8420 + 3368:
          return b ? function(y) {
            return Oe[y >> 3340 * 1 + 4990 + 694 * -12];
          } : function(y) {
            return at[y >> 1 * 993 + -19 * 235 + 3474];
          };
        default:
          throw new TypeError("Unknown integer type: " + I);
      }
    }
    function Hi(I) {
      return I || J("Cannot use deleted val. handle = " + I), et[I].value;
    }
    function Nr(I, f) {
      var b = zt[I];
      return b === void 0 && J(f + " has unknown type " + Kr(I)), b;
    }
    var Fg = {}, Fr = {};
    function Yr() {
      if (!Ri) {
        var I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: s || "./this.program" }, f;
        for (f in Fr) I[f] = Fr[f];
        var b = [];
        for (f in I) b.push(f + "=" + I[f]);
        Ri = b;
      }
      return Ri;
    }
    var Ri, Mr = [];
    function Xr(I) {
      var f = {}, b;
      for (b in I) (function(y) {
        var S = I[y];
        f[y] = typeof S == "function" ? function() {
          Mr.push(y);
          try {
            return S.apply(null, arguments);
          } finally {
            if (m) return;
            var w = Mr.pop();
            A(w === y);
          }
        } : S;
      })(b);
      return f;
    }
    for (var jr = Array(9551 + -3 * -163 + -9784 * 1), ox = 7413 + 7 * -1059; 5710 + 99 * -31 + -2385 > ox; ++ox) jr[ox] = String.fromCharCode(ox);
    Sr = jr, W0 = t.BindingError = wi("BindingError"), wr = t.InternalError = wi("InternalError"), Vt.prototype.isAliasOf = function(I) {
      if (!(this instanceof Vt && I instanceof Vt)) return !(-1 * -8270 + 6032 + 21 * -681);
      var f = this.A.fa.ea, b = this.A.da, y = I.A.fa.ea;
      for (I = I.A.da; f.ia; ) b = f.qa(b), f = f.ia;
      for (; y.ia; ) I = y.qa(I), y = y.ia;
      return f === y && b === I;
    }, Vt.prototype.clone = function() {
      if (this.A.da || Bi(this), this.A.pa) return this.A.count.value += 175 + 1337 * 5 + -6859, this;
      var I = on(Object.create(Object.getPrototypeOf(this), { A: { value: Hg(this.A) } }));
      return I.A.count.value += -11227 + 1 * 11228, I.A.oa = !(1322 + -1 * 1321), I;
    }, Vt.prototype.delete = function() {
      this.A.da || Bi(this), this.A.oa && !this.A.pa && J("Object already scheduled for deletion"), Br(this), kr(this.A), this.A.pa || (this.A.ga = void (-694 * 1 + 11 * 484 + 10 * -463), this.A.da = void (7873 + -4 * 1002 + -3865));
    }, Vt.prototype.isDeleted = function() {
      return !this.A.da;
    }, Vt.prototype.deleteLater = function() {
      return this.A.da || Bi(this), this.A.oa && !this.A.pa && J("Object already scheduled for deletion"), an.push(this), -1 * -7453 + -1493 * 2 + -406 * 11 === an.length && rn && rn(Gi), this.A.oa = !0, this;
    }, wt.prototype.Da = function(I) {
      return this.wa && (I = this.wa(I)), I;
    }, wt.prototype.va = function(I) {
      this.na && this.na(I);
    }, wt.prototype.argPackAdvance = -7092 + 5 * -943 + 11815, wt.prototype.readValueFromPointer = nx, wt.prototype.deleteObject = function(I) {
      I !== null && I.delete();
    }, wt.prototype.fromWireType = function(I) {
      function f() {
        return this.sa ? xx(this.ea.ma, { fa: this.Ga, da: b, ha: this, ga: I }) : xx(this.ea.ma, { fa: this, da: I });
      }
      var b = this.Da(I);
      if (!b) return this.va(I), null;
      var y = Eg(this.ea, b);
      if (void (-2561 * 1 + 3 * -2146 + 8999) !== y)
        return 2255 + -8556 * 1 + 6301 === y.A.count.value ? (y.A.da = b, y.A.ga = I, y.clone()) : (y = y.clone(), this.va(I), y);
      if (y = this.ea.Ca(b), y = Gr[y], !y) return f.call(this);
      y = this.ra ? y.za : y.pointerType;
      var S = Zr(b, this.ea, y.ea);
      return S === null ? f.call(this) : this.sa ? xx(y.ea.ma, { fa: y, da: S, ha: this, ga: I }) : xx(y.ea.ma, { fa: y, da: S });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(sn).length;
    }, t.getLiveInheritedInstances = function() {
      var I = [], f;
      for (f in sn) sn.hasOwnProperty(f) && I.push(sn[f]);
      return I;
    }, t.flushPendingDeletes = Gi, t.setDelayFunction = function(I) {
      rn = I, an.length && rn && rn(Gi);
    }, Rr = t.UnboundTypeError = wi("UnboundTypeError"), t.count_emval_handles = function() {
      for (var I = -7193 * 1 + 4095 + -2 * -1549, f = -1 * 4252 + -5004 + -1 * -9261; f < et.length; ++f) void (-7967 * 1 + -147 * -25 + -116 * -37) !== et[f] && ++I;
      return I;
    }, t.get_first_emval = function() {
      for (var I = -6 * -53 + -7951 * 1 + -201 * -38; I < et.length; ++I) if (void (-490 * -16 + -865 * -1 + -8705 * 1) !== et[I]) return et[I];
      return null;
    }, Re.push({ Ba: function() {
      _r();
    } });
    var Yg = { z: function(I) {
      return rx(I + (494 * 13 + 4818 + -11224)) + (6295 * 1 + -9977 + 3698);
    }, u: function(I, f, b) {
      throw new Zg(I).Fa(f, b), "uncaught_exception" in qn ? qn.xa++ : qn.xa = 9719 + -11 * -69 + -10477, I;
    }, w: function(I, f, b, y, S) {
      var w = vi(b);
      f = Ee(f), St(I, { name: f, fromWireType: function(Z) {
        return !!Z;
      }, toWireType: function(Z, k) {
        return k ? y : S;
      }, argPackAdvance: 8, readValueFromPointer: function(Z) {
        if (-1750 + -1 * -1751 === b) var k = Ve;
        else if (31 * -287 + -4423 + 13322 === b) k = Pt;
        else if (-1 * 1076 + -39 * 50 + -6 * -505 === b) k = Oe;
        else throw new TypeError("Unknown boolean type size: " + f);
        return this.fromWireType(k[Z >> w]);
      }, ka: null });
    }, h: function(I, f, b, y, S, w, Z, k, R, K, P, T, q) {
      P = Ee(P), w = Et(S, w), k && (k = Et(Z, k)), K && (K = Et(R, K)), q = Et(T, q);
      var he = Wi(P);
      Or(he, function() {
        cn("Cannot construct " + P + " due to unbound types", [y]);
      }), S0([I, f, b], y ? [y] : [], function(E) {
        if (E = E[-262 * 7 + -6852 + 8686], y) var Ct = E.ea, Ke = Ct.ma;
        else Ke = Vt.prototype;
        E = Si(he, function() {
          if (Object.getPrototypeOf(this) !== k0) throw new W0("Use 'new' to construct " + P);
          if (void (4559 + 87 * -107 + 4750) === G0.la) throw new W0(P + " has no accessible constructor");
          var Qr = G0.la[arguments.length];
          if (Qr === void 0) throw new W0("Tried to invoke ctor of " + P + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(G0.la).toString() + ") parameters instead!");
          return Qr.apply(this, arguments);
        });
        var _e = {};
        _e.value = E;
        var qt = {};
        qt.constructor = _e;
        var k0 = Object.create(Ke, qt);
        E.prototype = k0;
        var G0 = new Kg(P, E, k0, q, Ct, w, k, K);
        Ct = new wt(P, G0, !(-18 + 423 * 7 + -2943), !(3317 + 4 * -829)), Ke = new wt(P + "*", G0, !1, !(33 * 156 + 2246 + -7393));
        var Ur = new wt(P + " const*", G0, !(-1 * 3257 + 577 * 17 + 6551 * -1), !(6 * -255 + 5659 + -4129)), Pi = {};
        return Pi.pointerType = Ke, Pi.za = Ur, Gr[I] = Pi, Hr(he, E), [Ct, Ke, Ur];
      });
    }, g: function(I, f, b, y, S, w) {
      A(4423 + 2 * -1433 + -3 * 519 < f);
      var Z = Pr(f, b);
      S = Et(y, S);
      var k = [w], R = [];
      S0([], [I], function(K) {
        K = K[3884 + 78 * -110 + 2348 * 2];
        var P = "constructor " + K.name;
        if (K.ea.la === void 0 && (K.ea.la = []), void (-9122 * -1 + 3739 + -12861) !== K.ea.la[f - (-6996 + -2 * 3143 + 13283 * 1)]) throw new W0("Cannot register multiple constructors with identical number of parameters (" + (f - (6788 + -7943 * -1 + -14730)) + ") for class '" + K.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return K.ea.la[f - (3 * -2517 + 2287 * 1 + 5265)] = function() {
          cn("Cannot construct " + K.name + " due to unbound types", Z);
        }, S0([], Z, function(T) {
          return K.ea.la[f - (-83 * -22 + -62 * -83 + 6971 * -1)] = function() {
            arguments.length !== f - (9579 + -137 * 13 + -7797) && J(P + " called with " + arguments.length + " arguments, expected " + (f - (-6931 * 1 + -6993 + 13925))), R.length = 0, k.length = f;
            for (var q = 1; q < f; ++q) k[q] = T[q].toWireType(R, arguments[q - (-1 * -6401 + -2517 * -1 + 1 * -8917)]);
            return q = S.apply(null, k), ix(R), T[206 * 17 + 35 * 38 + 16 * -302].fromWireType(q);
          }, [];
        }), [];
      });
    }, b: function(I, f, b, y, S, w, Z, k, R, K) {
      f = Ee(f), S = Et(y, S), S0([], [I], function(P) {
        P = P[-8019 + -9 * -891];
        var T = P.name + "." + f, q = { get: function() {
          cn("Cannot access " + T + " due to unbound types", [b, Z]);
        }, enumerable: !0, configurable: !(-7392 + -490 * 3 + 8862) };
        return R ? q.set = function() {
          cn("Cannot access " + T + " due to unbound types", [b, Z]);
        } : q.set = function() {
          J(T + " is a read-only property");
        }, Object.defineProperty(P.ea.ma, f, q), S0([], R ? [b, Z] : [b], function(he) {
          var E = he[0], Ct = { get: function() {
            var _e = Tr(this, P, T + " getter");
            return E.fromWireType(S(w, _e));
          }, enumerable: !0 };
          if (R) {
            R = Et(k, R);
            var Ke = he[-1 * -1275 + 97 * 41 + 1 * -5251];
            Ct.set = function(_e) {
              var qt = Tr(this, P, T + " setter"), k0 = [];
              R(K, qt, Ke.toWireType(k0, _e)), ix(k0);
            };
          }
          return Object.defineProperty(P.ea.ma, f, Ct), [];
        }), [];
      });
    }, v: function(I, f) {
      f = Ee(f), St(I, { name: f, fromWireType: function(b) {
        var y = et[b].value;
        return Zi(b), y;
      }, toWireType: function(b, y) {
        return w0(y);
      }, argPackAdvance: 8, readValueFromPointer: nx, ka: null });
    }, m: function(I, f, b) {
      b = vi(b), f = Ee(f), St(I, { name: f, fromWireType: function(y) {
        return y;
      }, toWireType: function(y, S) {
        if (typeof S != "number" && typeof S != "boolean") throw new TypeError('Cannot convert "' + B0(S) + '" to ' + this.name);
        return S;
      }, argPackAdvance: 8, readValueFromPointer: Lg(f, b), ka: null });
    }, c: function(I, f, b, y, S, w) {
      var Z = Pr(f, b);
      I = Ee(I), S = Et(y, S), Or(I, function() {
        cn("Cannot call " + I + " due to unbound types", Z);
      }, f - 1), S0([], Z, function(k) {
        var R = I, K = I;
        k = [k[-7326 + -2 * -337 + 6652], null].concat(k.slice(-8931 + -319 * -28));
        var P = S, T = k.length;
        2 > T && J("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var q = k[-9017 * -1 + -7645 + 1371 * -1] !== null && !1, he = !(2284 + 22 * -283 + 3943), E = -13669 + 2 * 6835; E < k.length; ++E) if (k[E] !== null && void (-3717 + -241 * 1 + -1 * -3958) === k[E].ka) {
          he = !(-6672 * -1 + 1053 * 3 + -9831);
          break;
        }
        var Ct = k[2 * -2319 + -3204 * -2 + -354 * 5].name !== "void", Ke = "", _e = "";
        for (E = -4549 + 3 * 2942 + -4277; E < T - (3 * -2168 + -34 * -182 + -106 * -3); ++E) Ke += (E !== 0 ? ", " : "") + "arg" + E, _e += (6932 + 1069 * -1 + -451 * 13 !== E ? ", " : "") + "arg" + E + "Wired";
        K = "return function " + Wi(K) + "(" + Ke + `) {
if (arguments.length !== ` + (T - (-8231 + 289 * -23 + 14880)) + `) {
throwBindingError('function ` + K + " called with ' + arguments.length + ' arguments, expected " + (T - (-1 * -2947 + -23 * 227 + 2276)) + ` args!');
}
`, he && (K += `var destructors = [];
`);
        var qt = he ? "destructors" : "null";
        for (Ke = "throwBindingError invoker fn runDestructors retType classParam".split(" "), P = [J, P, w, ix, k[3 * 1293 + -4841 * -2 + -13561], k[-1 * -8929 + 1648 + -10576]], q && (K += "var thisWired = classParam.toWireType(" + qt + `, this);
`), E = -1 * 9539 + -3890 + 13429; E < T - (8647 * -1 + -9867 + 3 * 6172); ++E) K += "var arg" + E + "Wired = argType" + E + ".toWireType(" + qt + ", arg" + E + "); // " + k[E + (3765 + 17 * 88 + 1 * -5259)].name + `
`, Ke.push("argType" + E), P.push(k[E + (-5326 + -144 * -37)]);
        if (q && (_e = "thisWired" + (11 * -7 + -6133 * 1 + 135 * 46 < _e.length ? ", " : "") + _e), K += (Ct ? "var rv = " : "") + "invoker(fn" + (1 * -7211 + 6046 + -233 * -5 < _e.length ? ", " : "") + _e + `);
`, he) K += `runDestructors(destructors);
`;
        else
          for (E = q ? 5467 + 7 * -871 + 631 : -17204 + 1 * 17206; E < k.length; ++E) T = -7438 * 1 + 3875 + 891 * 4 === E ? "thisWired" : "arg" + (E - (-1 * 4233 + 5340 + -1105)) + "Wired", k[E].ka !== null && (K += T + "_dtor(" + T + "); // " + k[E].name + `
`, Ke.push(T + "_dtor"), P.push(k[E].ka));
        return Ct && (K += `var ret = retType.fromWireType(rv);
return ret;
`), Ke.push(K + `}
`), k = Dg(Ke).apply(null, P), Hr(R, k, f - 1), [];
      });
    }, e: function(I, f, b, y, S) {
      function w(K) {
        return K;
      }
      f = Ee(f), -(-1821 + 121 * 29 + -1687 * 1) === S && (S = 5519970011 + 1 * 3331211235 + -1 * 4556213951);
      var Z = vi(b);
      if (3162 + -93 * 34 === y) {
        var k = 32 - 8 * b;
        w = function(K) {
          return K << k >>> k;
        };
      }
      var R = -(-7633 + -3883 * -2 + -44 * 3) != f.indexOf("unsigned");
      St(I, { name: f, fromWireType: w, toWireType: function(K, P) {
        if (typeof P != "number" && typeof P != "boolean") throw new TypeError('Cannot convert "' + B0(P) + '" to ' + this.name);
        if (P < y || P > S) throw new TypeError('Passing a number "' + B0(P) + '" from JS side to C/C++ side to an argument of type "' + f + '", which is outside the valid range [' + y + ", " + S + "]!");
        return R ? P >>> -11 * 692 + 1819 * -5 + 16707 : P | 9924 + 144 * 58 + -4569 * 4;
      }, argPackAdvance: 8, readValueFromPointer: Ng(f, Z, 2048 + -1 * -4839 + -6887 !== y), ka: null });
    }, d: function(I, f, b) {
      function y(k) {
        k >>= 2;
        var R = at;
        return new S(te, R[k + (-15 * 482 + 8805 + -1574)], R[k]);
      }
      var S = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][f];
      b = Ee(b);
      var w = {};
      w.name = b, w.fromWireType = y, w.argPackAdvance = 8, w.readValueFromPointer = y;
      var Z = {};
      Z.Ea = !(-1 * -1443 + 4313 + -5756), St(I, w, Z);
    }, n: function(I, f) {
      f = Ee(f);
      var b = f === "std::string";
      St(I, { name: f, fromWireType: function(y) {
        var S = at[y >> 2];
        if (b) for (var w = y + (-2964 + -212 * -14), Z = 2093 + -1069 * 1 + 128 * -8; Z <= S; ++Z) {
          var k = y + 4 + Z;
          if (Z == S || 6407 + 2 * 2447 + 3 * -3767 == He[k]) {
            if (w) {
              var R = w, K = He, P = R + (k - w);
              for (w = R; K[w] && !(w >= P); ) ++w;
              if (1203 * -3 + -3126 + 6751 < w - R && K.subarray && l) R = l.decode(K.subarray(R, w));
              else {
                for (P = ""; R < w; ) {
                  var T = K[R++];
                  if (T & -56 * -142 + 4831 + -12655) {
                    var q = K[R++] & 63;
                    if (-8862 + -43 * 183 + 5641 * 3 == (T & 136 * -15 + -545 * -2 + -1 * -1174)) P += String.fromCharCode((T & 31) << -25 * 346 + 3681 + 4975 | q);
                    else {
                      var he = K[R++] & 63;
                      T = -3609 + -223 * -41 + -5310 == (T & 18212 + -4493 * 4) ? (T & 5 * 1343 + -7845 + 1145) << -9437 + 4391 * -2 + 103 * 177 | q << -6554 + 1312 * 5 | he : (T & 1371 * 3 + -9963 + 1 * 5857) << -141 * 19 + 7617 + -4920 | q << 761 + 8451 * 1 + 25 * -368 | he << 6376 + -194 * 23 + -1908 | K[R++] & -2938 + 7841 * 1 + 8 * -605, 1682 * 6 + 64516 + 2268 * -4 > T ? P += String.fromCharCode(T) : (T -= -25231 + 65245 * -2 + 221257, P += String.fromCharCode(4 * -17072 + 15501 * -2 + 1 * 154586 | T >> -7263 + -4 * -147 + 6685 * 1, 77969 * -1 + 121 * -139 + -151108 * -1 | T & 2 * 4163 + 47 * 137 + 1 * -13742));
                    }
                  } else P += String.fromCharCode(T);
                }
                R = P;
              }
            } else R = "";
            if (void (-230 * -33 + 2 * -449 + 7 * -956) === E) var E = R;
            else E += String.fromCharCode(524 + -541 * -5 + -3229), E += R;
            w = k + (7204 + 1 * -4306 + 1 * -2897);
          }
        }
        else {
          for (E = Array(S), Z = 103 * -23 + -2 * 481 + 3331 * 1; Z < S; ++Z) E[Z] = String.fromCharCode(He[y + (-5602 * 1 + 859 * -7 + 1 * 11619) + Z]);
          E = E.join("");
        }
        return Bt(y), E;
      }, toWireType: function(y, S) {
        S instanceof ArrayBuffer && (S = new Uint8Array(S));
        var w = typeof S == "string";
        w || S instanceof Uint8Array || S instanceof Uint8ClampedArray || S instanceof Int8Array || J("Cannot pass non-string to std::string");
        var Z = (b && w ? function() {
          for (var K = -484 + 121 * 4, P = -1102 + 2636 * 2 + -15 * 278; P < S.length; ++P) {
            var T = S.charCodeAt(P);
            -32140 + -1 * 48228 + 135664 <= T && -92298 + -991 * -151 >= T && (T = 39414 * 2 + 65692 + -78984 + ((T & -1140 + 5 * 794 + -139 * 13) << -3 * -101 + -6535 + 3121 * 2) | S.charCodeAt(++P) & -5628 * 1 + -4747 + 278 * 41), 127 >= T ? ++K : K = 2047 >= T ? K + (9039 + 9037 * -1) : -1 * -98335 + 3 * 30629 + -67 * 1861 >= T ? K + (-6581 + 2 * 1730 + -1 * -3124) : K + 4;
          }
          return K;
        } : function() {
          return S.length;
        })(), k = rx(-1618 * 3 + 7790 * -1 + 12648 + Z + (-9631 * -1 + -3852 + 18 * -321));
        if (at[k >> -46 * 111 + 1 * 5261 + -153] = Z, b && w) W(S, k + (-167 * -31 + 1 * -6977 + 41 * 44), Z + 1);
        else if (w) for (w = -3108 + -4 * -777; w < Z; ++w) {
          var R = S.charCodeAt(w);
          8845 + 2 * -4295 < R && (Bt(k), J("String has UTF-16 code units that do not fit in 8 bits")), He[k + (-993 * 5 + -3814 + 8783) + w] = R;
        }
        else
          for (w = -6358 + -3 * 641 + 8281; w < Z; ++w) He[k + (1 * 9791 + 1647 * 3 + 2 * -7364) + w] = S[w];
        return y !== null && y.push(Bt, k), k;
      }, argPackAdvance: 8, readValueFromPointer: nx, ka: function(y) {
        Bt(y);
      } });
    }, j: function(I, f, b) {
      if (b = Ee(b), f === 2) var y = D, S = Y, w = _, Z = function() {
        return Jt;
      }, k = 8486 + 1697 * -5;
      else 2385 + 5 * -395 + -406 === f && (y = H, S = re, w = U, Z = function() {
        return at;
      }, k = 11 * -536 + -3253 + 9151);
      St(I, { name: b, fromWireType: function(R) {
        for (var K = at[R >> 547 * 13 + 29 * -121 + -3600], P = Z(), T, q = R + (-53 * 172 + -383 * 8 + 12184), he = 1251 * -7 + 293 * -20 + 14617; he <= K; ++he) {
          var E = R + 4 + he * f;
          (he == K || -2 * -1739 + -1 * -9543 + -13021 == P[E >> k]) && (q = y(q, E - q), void (5447 + -923 * -7 + -52 * 229) === T ? T = q : (T += String.fromCharCode(-1562 + -129 * -14 + -244), T += q), q = E + f);
        }
        return Bt(R), T;
      }, toWireType: function(R, K) {
        typeof K != "string" && J("Cannot pass non-string to C++ string type " + b);
        var P = w(K), T = rx(6382 * 1 + -1 * 9271 + 2893 + P + f);
        return at[T >> 3235 + -3233 * 1] = P >> k, S(K, T + (2 * 114 + 1854 + -2078), P + f), R !== null && R.push(Bt, T), T;
      }, argPackAdvance: 8, readValueFromPointer: nx, ka: function(R) {
        Bt(R);
      } });
    }, x: function(I, f) {
      f = Ee(f);
      var b = {};
      b.Qa = !(4 * -1468 + 2950 + 2922), b.name = f, b.argPackAdvance = 0, b.fromWireType = function() {
      }, b.toWireType = function() {
      }, St(I, b);
    }, k: function(I, f, b) {
      I = Hi(I), f = Nr(f, "emval::as");
      var y = [], S = w0(y);
      return Oe[b >> 19 * -50 + 9051 + -8099] = S, f.toWireType(y, I);
    }, i: Zi, l: function(I, f) {
      return I = Hi(I), f = Hi(f), w0(I[f]);
    }, p: function(I) {
      var f = Fg[I];
      return w0(void (-8 * 511 + -41 * 169 + 11017) === f ? Ee(I) : f);
    }, o: function(I) {
      ix(et[I].value), Zi(I);
    }, y: function(I, f) {
      return I = Nr(I, "_emval_take_value"), I = I.readValueFromPointer(f), w0(I);
    }, f: function() {
      $e();
    }, q: function(I, f, b) {
      He.copyWithin(I, f, f + b);
    }, r: function(I) {
      I >>>= -8028 + 2007 * 4;
      var f = He.length;
      if (4 * -485826573 + 8093891 * 10 + 4009851030 < I) return !(-3401 + -63 * -54);
      for (var b = -3413 + -569 * -6; -8085 + -272 * -17 + 3465 >= b; b *= -517 * -8 + 2790 + -12 * 577) {
        var y = f * (1 + 0.2 / b);
        y = Math.min(y, I + (48048292 + -7 * 14131999 + -3 * -50512999)), y = Math.max(-72445 * -148 + -29059221 + -1 * -35114577, I, y), 3555 + -804 * -3 + -5967 < y % (-15519 * -5 + 99586 + 827 * -135) && (y += -25485 + -7 * -16681 + -25746 - y % (-105297 + -2393 * -46 + 60755));
        e: {
          try {
            p.grow(Math.min(10369 * 14238 + -367562906 * 1 + -1183706366 * -2, y) - te.byteLength + (37 * -1891 + -114901 + 250403) >>> 8004 + -1082 * 3 + -4742 * 1), nn(p.buffer);
            var S = 1270 + -47 * 27;
            break e;
          } catch {
          }
          S = void (-353 * -28 + 21 * -389 + 343 * -5);
        }
        if (S) return !0;
      }
      return !1;
    }, s: function(I, f) {
      var b = 0;
      return Yr().forEach(function(y, S) {
        var w = f + b;
        for (S = Oe[I + (4110 + -1 * 4106) * S >> -2889 + -5 * 833 + 12 * 588] = w, w = -1 * 8783 + 1 * -1006 + 9789; w < y.length; ++w) Ve[S++ >> 1 * 1510 + 9228 + 5369 * -2] = y.charCodeAt(w);
        Ve[S >> -1 * -6170 + -7664 + 1494] = -4270 + -10 * -427, b += y.length + (-1733 * 2 + -7838 * 1 + 35 * 323);
      }), 6936 + -3 * -1484 + -11388;
    }, t: function(I, f) {
      var b = Yr();
      Oe[I >> 2] = b.length;
      var y = -83 * -91 + 2312 + 9865 * -1;
      return b.forEach(function(S) {
        y += S.length + (634 * -6 + 2257 + 1548);
      }), Oe[f >> -8328 + 179 * 11 + -6361 * -1] = y, 0;
    }, a: p };
    (function() {
      function I(Z) {
        Z = Z.exports, Z = Xr(Z), t.asm = Z, je--, t.monitorRunDependencies && t.monitorRunDependencies(je), -2555 + -913 * 3 + 5294 == je && It && (Z = It, It = null, Z());
      }
      function f(Z) {
        I(Z.instance);
      }
      function b(Z) {
        return Og().then(function(k) {
          return WebAssembly.instantiate(k, S);
        }).then(Z, function(k) {
          C("failed to asynchronously prepare wasm: " + k), $e(k);
        });
      }
      var y = {};
      y.a = Yg;
      var S = y;
      if (je++, t.monitorRunDependencies && t.monitorRunDependencies(je), t.instantiateWasm) try {
        var w = t.instantiateWasm(S, I);
        return w = Xr(w);
      } catch (Z) {
        return C("Module.instantiateWasm callback failed with error: " + Z), !(-362 * -19 + 5445 + -12322);
      }
      return function() {
        if (u || typeof WebAssembly.instantiateStreaming != "function" || ft() || Ut("file://") || typeof fetch != "function") return b(f);
        var Z = {};
        Z.credentials = "same-origin", fetch(st, Z).then(function(k) {
          return WebAssembly.instantiateStreaming(k, S).then(f, function(R) {
            return C("wasm streaming compile failed: " + R), C("falling back to ArrayBuffer instantiation"), b(f);
          });
        });
      }(), {};
    })();
    var _r = t.___wasm_call_ctors = function() {
      return (_r = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, rx = t._malloc = function() {
      return (rx = t._malloc = t.asm.C).apply(null, arguments);
    }, Bt = t._free = function() {
      return (Bt = t._free = t.asm.D).apply(null, arguments);
    }, Jr = t.___getTypeName = function() {
      return (Jr = t.___getTypeName = t.asm.E).apply(null, arguments);
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
    var ax;
    It = function I() {
      ax || Ki(), ax || (It = I);
    };
    function Ki() {
      function I() {
        if (!ax && (ax = !(-1 * 4987 + -1604 + 6591), t.calledRun = !(3803 * 1 + -7485 + 3682), !m)) {
          if (zn(Re), zn(xn), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var f = t.postRun.shift();
            A0.unshift(f);
          }
          zn(A0);
        }
      }
      if (!(4642 + -5398 * -1 + 1004 * -10 < je)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) y0();
        zn(Tt), 13 * 403 + 4723 + -1 * 9962 < je || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, 1), I();
        }, 9341 * 1 + -350 + -8990)) : I());
      }
    }
    if (t.run = Ki, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); -1 * 1607 + -431 * -8 + -1841 < t.preInit.length; ) t.preInit.pop()();
    return Ki(), i.ready;
  };
})();
class TI {
  constructor(i, t) {
    V(this, "isDetectorInitialized", !1);
    V(this, "samVersion", null);
    V(this, "detection");
    this.imageProcessor = i, this.wasmDirectoryPath = t;
  }
  async init() {
    await this.initDetector(this.wasmDirectoryPath);
  }
  async initDetector(i) {
    await this.detector.initSamModule(location.href, i);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(i) {
    if (!i || !this.areVersionsCompatible(i))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new xe("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = i;
  }
  runDetectionLoop(i) {
    this.detection && this.detection.stop(), this.detection = i, this.detection.run();
  }
  stopDetectionLoop() {
    var i;
    (i = this.detection) == null || i.stop();
  }
  areVersionsCompatible(i) {
    return i === Kl;
  }
  setThresholds(i) {
    this.imageProcessor.validationService.thresholds = i;
  }
}
class VI {
  constructor() {
    V(this, "detectionRecord", []);
    V(this, "imagesWithTimestampForDuplicateDetection", new hr(kl));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: i, timestamp: t }) {
    const e = i.length / Hl, n = e / 2, o = i.length / (-14 * 137 + 9161 * 1 + -7241), r = await RI(i.slice(o - n, o + n)), s = {};
    s.imageHash = r, s.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(s);
  }
  optimizeImageBeforeDetection(i) {
    return { data: e1(i), resolution: { width: i.width, height: i.height } };
  }
  async processDetectedObject({ detectedObject: i, image: t, imageData: e, timestamp: n }) {
    const o = Jc(i), r = this.validationService.validateDetectedObject(o, t);
    if (r.result.get("isPresent")) {
      const s = {};
      s.image = e, s.timestamp = n, this.collectImagesForDuplicateDetection(s);
    }
    return this.detectionRecord.push(i), { detection: o, validationResult: r.result, isValid: r.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class EI {
  constructor() {
    V(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new xe("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const mg = Symbol("Comlink.proxy"), LI = Symbol("Comlink.endpoint"), DI = Symbol("Comlink.releaseProxy"), no = Symbol("Comlink.finalizer"), Hx = Symbol("Comlink.thrown"), bg = (x) => typeof x == "object" && x !== null || typeof x == "function", NI = {
  canHandle: (x) => bg(x) && x[mg],
  serialize(x) {
    const { port1: i, port2: t } = new MessageChannel();
    return yg(x, i), [t, [t]];
  },
  deserialize(x) {
    return x.start(), Wg(x);
  }
}, FI = {
  canHandle: (x) => bg(x) && Hx in x,
  serialize({ value: x }) {
    let i;
    return x instanceof Error ? i = {
      isError: !0,
      value: {
        message: x.message,
        name: x.name,
        stack: x.stack
      }
    } : i = { isError: !1, value: x }, [i, []];
  },
  deserialize(x) {
    throw x.isError ? Object.assign(new Error(x.value.message), x.value) : x.value;
  }
}, Ag = /* @__PURE__ */ new Map([
  ["proxy", NI],
  ["throw", FI]
]);
function YI(x, i) {
  for (const t of x)
    if (i === t || t === "*" || t instanceof RegExp && t.test(i))
      return !0;
  return !1;
}
function yg(x, i = globalThis, t = ["*"]) {
  i.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!YI(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: s } = Object.assign({ path: [] }, n.data), a = (n.data.argumentList || []).map(x0);
    let c;
    try {
      const d = s.slice(0, -1).reduce((C, u) => C[u], x), g = s.reduce((C, u) => C[u], x);
      switch (r) {
        case "GET":
          c = g;
          break;
        case "SET":
          d[s.slice(-1)[0]] = x0(n.data.value), c = !0;
          break;
        case "APPLY":
          c = g.apply(d, a);
          break;
        case "CONSTRUCT":
          {
            const C = new g(...a);
            c = UI(C);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: C, port2: u } = new MessageChannel();
            yg(x, u), c = JI(C, [C]);
          }
          break;
        case "RELEASE":
          c = void 0;
          break;
        default:
          return;
      }
    } catch (d) {
      c = { value: d, [Hx]: 0 };
    }
    Promise.resolve(c).catch((d) => ({ value: d, [Hx]: 0 })).then((d) => {
      const [g, C] = oi(d);
      i.postMessage(Object.assign(Object.assign({}, g), { id: o }), C), r === "RELEASE" && (i.removeEventListener("message", e), vg(i), no in x && typeof x[no] == "function" && x[no]());
    }).catch((d) => {
      const [g, C] = oi({
        value: new TypeError("Unserializable return value"),
        [Hx]: 0
      });
      i.postMessage(Object.assign(Object.assign({}, g), { id: o }), C);
    });
  }), i.start && i.start();
}
function MI(x) {
  return x.constructor.name === "MessagePort";
}
function vg(x) {
  MI(x) && x.close();
}
function Wg(x, i) {
  return jo(x, [], i);
}
function Cx(x) {
  if (x)
    throw new Error("Proxy has been released and is not useable");
}
function Sg(x) {
  return T0(x, {
    type: "RELEASE"
  }).then(() => {
    vg(x);
  });
}
const xi = /* @__PURE__ */ new WeakMap(), ii = "FinalizationRegistry" in globalThis && new FinalizationRegistry((x) => {
  const i = (xi.get(x) || 0) - 1;
  xi.set(x, i), i === 0 && Sg(x);
});
function XI(x, i) {
  const t = (xi.get(i) || 0) + 1;
  xi.set(i, t), ii && ii.register(x, i, x);
}
function jI(x) {
  ii && ii.unregister(x);
}
function jo(x, i = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(o, r) {
      if (Cx(e), r === DI)
        return () => {
          jI(n), Sg(x), e = !0;
        };
      if (r === "then") {
        if (i.length === 0)
          return { then: () => n };
        const s = T0(x, {
          type: "GET",
          path: i.map((a) => a.toString())
        }).then(x0);
        return s.then.bind(s);
      }
      return jo(x, [...i, r]);
    },
    set(o, r, s) {
      Cx(e);
      const [a, c] = oi(s);
      return T0(x, {
        type: "SET",
        path: [...i, r].map((d) => d.toString()),
        value: a
      }, c).then(x0);
    },
    apply(o, r, s) {
      Cx(e);
      const a = i[i.length - 1];
      if (a === LI)
        return T0(x, {
          type: "ENDPOINT"
        }).then(x0);
      if (a === "bind")
        return jo(x, i.slice(0, -1));
      const [c, d] = ds(s);
      return T0(x, {
        type: "APPLY",
        path: i.map((g) => g.toString()),
        argumentList: c
      }, d).then(x0);
    },
    construct(o, r) {
      Cx(e);
      const [s, a] = ds(r);
      return T0(x, {
        type: "CONSTRUCT",
        path: i.map((c) => c.toString()),
        argumentList: s
      }, a).then(x0);
    }
  });
  return XI(n, x), n;
}
function _I(x) {
  return Array.prototype.concat.apply([], x);
}
function ds(x) {
  const i = x.map(oi);
  return [i.map((t) => t[0]), _I(i.map((t) => t[1]))];
}
const wg = /* @__PURE__ */ new WeakMap();
function JI(x, i) {
  return wg.set(x, i), x;
}
function UI(x) {
  return Object.assign(x, { [mg]: !0 });
}
function oi(x) {
  for (const [i, t] of Ag)
    if (t.canHandle(x)) {
      const [e, n] = t.serialize(x);
      return [
        {
          type: "HANDLER",
          name: i,
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
    wg.get(x) || []
  ];
}
function x0(x) {
  switch (x.type) {
    case "HANDLER":
      return Ag.get(x.name).deserialize(x.value);
    case "RAW":
      return x.value;
  }
}
function T0(x, i, t) {
  return new Promise((e) => {
    const n = QI();
    x.addEventListener("message", function o(r) {
      !r.data || !r.data.id || r.data.id !== n || (x.removeEventListener("message", o), e(r.data));
    }), x.start && x.start(), x.postMessage(Object.assign({ id: n }, i), t);
  });
}
function QI() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const Bg = "dmFyIHZlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgTHQgPSAoYSkgPT4gewogIHRocm93IFR5cGVFcnJvcihhKTsKfTsKdmFyIGdlID0gKGEsIG8sIGUpID0+IG8gaW4gYSA/IHZlKGEsIG8sIHsgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCwgdmFsdWU6IGUgfSkgOiBhW29dID0gZTsKdmFyIFFuID0gKGEsIG8sIGUpID0+IGdlKGEsIHR5cGVvZiBvICE9ICJzeW1ib2wiID8gbyArICIiIDogbywgZSksIE50ID0gKGEsIG8sIGUpID0+IG8uaGFzKGEpIHx8IEx0KCJDYW5ub3QgIiArIGUpOwp2YXIgSCA9IChhLCBvLCBlKSA9PiAoTnQoYSwgbywgInJlYWQgZnJvbSBwcml2YXRlIGZpZWxkIiksIGUgPyBlLmNhbGwoYSkgOiBvLmdldChhKSksIFduID0gKGEsIG8sIGUpID0+IG8uaGFzKGEpID8gTHQoIkNhbm5vdCBhZGQgdGhlIHNhbWUgcHJpdmF0ZSBtZW1iZXIgbW9yZSB0aGFuIG9uY2UiKSA6IG8gaW5zdGFuY2VvZiBXZWFrU2V0ID8gby5hZGQoYSkgOiBvLnNldChhLCBlKSwga24gPSAoYSwgbywgZSwgaCkgPT4gKE50KGEsIG8sICJ3cml0ZSB0byBwcml2YXRlIGZpZWxkIiksIGggPyBoLmNhbGwoYSwgZSkgOiBvLnNldChhLCBlKSwgZSk7CmNvbnN0IEh0ID0gewogIHNpbWQ6ICJzYW1fc2ltZC53YXNtIiwKICBzYW06ICJzYW0ud2FzbSIKfSwgd2UgPSBhc3luYyAoKSA9PiBXZWJBc3NlbWJseS52YWxpZGF0ZShuZXcgVWludDhBcnJheShbMCwgOTcsIDExNSwgMTA5LCAxLCAwLCAwLCAwLCAxLCA1LCAxLCA5NiwgMCwgMSwgMTIzLCAzLCAyLCAxLCAwLCAxMCwgMTAsIDEsIDgsIDAsIDY1LCAwLCAyNTMsIDE1LCAyNTMsIDk4LCAxMV0pKTsKdmFyIEFlID0gZnVuY3Rpb24oKSB7CiAgdmFyIGEgPSB0eXBlb2YgZG9jdW1lbnQgPCAidSIgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdCA/IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjIDogdm9pZCAwOwogIHJldHVybiBmdW5jdGlvbihvKSB7CiAgICBvID0gbyB8fCB7fTsKICAgIHZhciBlOwogICAgZSB8fCAoZSA9IHR5cGVvZiBvIDwgInUiID8gbyA6IHt9KTsKICAgIHZhciBoLCBnOwogICAgZS5yZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgaCA9IG4sIGcgPSB0OwogICAgfSk7CiAgICB2YXIgQyA9IHt9LCBBOwogICAgZm9yIChBIGluIGUpIGUuaGFzT3duUHJvcGVydHkoQSkgJiYgKENbQV0gPSBlW0FdKTsKICAgIHZhciBPID0gIi4vdGhpcy5wcm9ncmFtIiwgYiA9ICExLCBUID0gITE7CiAgICBiID0gdHlwZW9mIHdpbmRvdyA9PSAib2JqZWN0IiwgVCA9IHR5cGVvZiBpbXBvcnRTY3JpcHRzID09ICJmdW5jdGlvbiI7CiAgICB2YXIgXyA9ICIiLCBTOwogICAgKGIgfHwgVCkgJiYgKFQgPyBfID0gc2VsZi5sb2NhdGlvbi5ocmVmIDogZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiAoXyA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjKSwgYSAmJiAoXyA9IGEpLCBfLmluZGV4T2YoImJsb2I6IikgIT09IDAgPyBfID0gXy5zdWJzdHIoMCwgXy5sYXN0SW5kZXhPZigiLyIpICsgMSkgOiBfID0gIiIsIFQgJiYgKFMgPSBmdW5jdGlvbihuKSB7CiAgICAgIHZhciB0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7CiAgICAgIHJldHVybiB0Lm9wZW4oIkdFVCIsIG4sICExKSwgdC5yZXNwb25zZVR5cGUgPSAiYXJyYXlidWZmZXIiLCB0LnNlbmQobnVsbCksIG5ldyBVaW50OEFycmF5KHQucmVzcG9uc2UpOwogICAgfSkpOwogICAgdmFyIEUgPSBlLnByaW50RXJyIHx8IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpOwogICAgZm9yIChBIGluIEMpIEMuaGFzT3duUHJvcGVydHkoQSkgJiYgKGVbQV0gPSBDW0FdKTsKICAgIEMgPSBudWxsLCBlLnRoaXNQcm9ncmFtICYmIChPID0gZS50aGlzUHJvZ3JhbSk7CiAgICB2YXIgTTsKICAgIGUud2FzbUJpbmFyeSAmJiAoTSA9IGUud2FzbUJpbmFyeSksIGUubm9FeGl0UnVudGltZSAmJiBlLm5vRXhpdFJ1bnRpbWUsIHR5cGVvZiBXZWJBc3NlbWJseSAhPSAib2JqZWN0IiAmJiBmbigibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZCIpOwogICAgdmFyIFUsIExuID0gITE7CiAgICBmdW5jdGlvbiBydChuKSB7CiAgICAgIG4gfHwgZm4oIkFzc2VydGlvbiBmYWlsZWQ6IHVuZGVmaW5lZCIpOwogICAgfQogICAgdmFyIGl0ID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGY4IikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiAkdChuLCB0LCByKSB7CiAgICAgIHZhciBpID0geDsKICAgICAgaWYgKDAgPCByKSB7CiAgICAgICAgciA9IHQgKyByIC0gMTsKICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IG4ubGVuZ3RoOyArK3MpIHsKICAgICAgICAgIHZhciB1ID0gbi5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgaWYgKDU1Mjk2IDw9IHUgJiYgNTczNDMgPj0gdSkgewogICAgICAgICAgICB2YXIgbCA9IG4uY2hhckNvZGVBdCgrK3MpOwogICAgICAgICAgICB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCBsICYgMTAyMzsKICAgICAgICAgIH0KICAgICAgICAgIGlmICgxMjcgPj0gdSkgewogICAgICAgICAgICBpZiAodCA+PSByKSBicmVhazsKICAgICAgICAgICAgaVt0KytdID0gdTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGlmICgyMDQ3ID49IHUpIHsKICAgICAgICAgICAgICBpZiAodCArIDEgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgaVt0KytdID0gMTkyIHwgdSA+PiA2OwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgIGlmICg2NTUzNSA+PSB1KSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDIgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyMjQgfCB1ID4+IDEyOwogICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDMgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyNDAgfCB1ID4+IDE4LCBpW3QrK10gPSAxMjggfCB1ID4+IDEyICYgNjM7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IHUgPj4gNiAmIDYzOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IHUgJiA2MzsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgaVt0XSA9IDA7CiAgICAgIH0KICAgIH0KICAgIHZhciBhdCA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmLTE2bGUiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFh0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IG4gPj4gMSwgaSA9IHIgKyB0IC8gMjsgIShyID49IGkpICYmIGduW3JdOyApICsrcjsKICAgICAgaWYgKHIgPDw9IDEsIDMyIDwgciAtIG4gJiYgYXQpIHJldHVybiBhdC5kZWNvZGUoeC5zdWJhcnJheShuLCByKSk7CiAgICAgIGZvciAociA9IDAsIGkgPSAiIjsgOyApIHsKICAgICAgICB2YXIgcyA9IHRuW24gKyAyICogciA+PiAxXTsKICAgICAgICBpZiAocyA9PSAwIHx8IHIgPT0gdCAvIDIpIHJldHVybiBpOwogICAgICAgICsrciwgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHMpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBKdChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgMiA+IHIpIHJldHVybiAwOwogICAgICByIC09IDI7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IHIgPCAyICogbi5sZW5ndGggPyByIC8gMiA6IG4ubGVuZ3RoOwogICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHI7ICsrcykgdG5bdCA+PiAxXSA9IG4uY2hhckNvZGVBdChzKSwgdCArPSAyOwogICAgICByZXR1cm4gdG5bdCA+PiAxXSA9IDAsIHQgLSBpOwogICAgfQogICAgZnVuY3Rpb24gS3QobikgewogICAgICByZXR1cm4gMiAqIG4ubGVuZ3RoOwogICAgfQogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gMCwgaSA9ICIiOyAhKHIgPj0gdCAvIDQpOyApIHsKICAgICAgICB2YXIgcyA9IGtbbiArIDQgKiByID4+IDJdOwogICAgICAgIGlmIChzID09IDApIGJyZWFrOwogICAgICAgICsrciwgNjU1MzYgPD0gcyA/IChzIC09IDY1NTM2LCBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBzID4+IDEwLCA1NjMyMCB8IHMgJiAxMDIzKSkgOiBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocyk7CiAgICAgIH0KICAgICAgcmV0dXJuIGk7CiAgICB9CiAgICBmdW5jdGlvbiBxdChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgNCA+IHIpIHJldHVybiAwOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSBpICsgciAtIDQ7CiAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgbi5sZW5ndGg7ICsrcykgewogICAgICAgIHZhciB1ID0gbi5jaGFyQ29kZUF0KHMpOwogICAgICAgIGlmICg1NTI5NiA8PSB1ICYmIDU3MzQzID49IHUpIHsKICAgICAgICAgIHZhciBsID0gbi5jaGFyQ29kZUF0KCsrcyk7CiAgICAgICAgICB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCBsICYgMTAyMzsKICAgICAgICB9CiAgICAgICAgaWYgKGtbdCA+PiAyXSA9IHUsIHQgKz0gNCwgdCArIDQgPiByKSBicmVhazsKICAgICAgfQogICAgICByZXR1cm4ga1t0ID4+IDJdID0gMCwgdCAtIGk7CiAgICB9CiAgICBmdW5jdGlvbiBuZShuKSB7CiAgICAgIGZvciAodmFyIHQgPSAwLCByID0gMDsgciA8IG4ubGVuZ3RoOyArK3IpIHsKICAgICAgICB2YXIgaSA9IG4uY2hhckNvZGVBdChyKTsKICAgICAgICA1NTI5NiA8PSBpICYmIDU3MzQzID49IGkgJiYgKytyLCB0ICs9IDQ7CiAgICAgIH0KICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICB2YXIgbm4sICQsIHgsIHRuLCBnbiwgaywgRCwgb3QsIHN0OwogICAgZnVuY3Rpb24gdXQobikgewogICAgICBubiA9IG4sIGUuSEVBUDggPSAkID0gbmV3IEludDhBcnJheShuKSwgZS5IRUFQMTYgPSB0biA9IG5ldyBJbnQxNkFycmF5KG4pLCBlLkhFQVAzMiA9IGsgPSBuZXcgSW50MzJBcnJheShuKSwgZS5IRUFQVTggPSB4ID0gbmV3IFVpbnQ4QXJyYXkobiksIGUuSEVBUFUxNiA9IGduID0gbmV3IFVpbnQxNkFycmF5KG4pLCBlLkhFQVBVMzIgPSBEID0gbmV3IFVpbnQzMkFycmF5KG4pLCBlLkhFQVBGMzIgPSBvdCA9IG5ldyBGbG9hdDMyQXJyYXkobiksIGUuSEVBUEY2NCA9IHN0ID0gbmV3IEZsb2F0NjRBcnJheShuKTsKICAgIH0KICAgIHZhciBjdCA9IGUuSU5JVElBTF9NRU1PUlkgfHwgMTY3NzcyMTY7CiAgICBlLndhc21NZW1vcnkgPyBVID0gZS53YXNtTWVtb3J5IDogVSA9IG5ldyBXZWJBc3NlbWJseS5NZW1vcnkoeyBpbml0aWFsOiBjdCAvIDY1NTM2LCBtYXhpbXVtOiAzMjc2OCB9KSwgVSAmJiAobm4gPSBVLmJ1ZmZlciksIGN0ID0gbm4uYnl0ZUxlbmd0aCwgdXQobm4pOwogICAgdmFyIGx0ID0gW10sIGZ0ID0gW10sIHRlID0gW10sIGR0ID0gW107CiAgICBmdW5jdGlvbiBlZSgpIHsKICAgICAgdmFyIG4gPSBlLnByZVJ1bi5zaGlmdCgpOwogICAgICBsdC51bnNoaWZ0KG4pOwogICAgfQogICAgdmFyIFggPSAwLCBsbiA9IG51bGw7CiAgICBlLnByZWxvYWRlZEltYWdlcyA9IHt9LCBlLnByZWxvYWRlZEF1ZGlvcyA9IHt9OwogICAgZnVuY3Rpb24gZm4obikgewogICAgICB0aHJvdyBlLm9uQWJvcnQgJiYgZS5vbkFib3J0KG4pLCBFKG4pLCBMbiA9ICEwLCBuID0gbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcigiYWJvcnQoIiArIG4gKyAiKS4gQnVpbGQgd2l0aCAtcyBBU1NFUlRJT05TPTEgZm9yIG1vcmUgaW5mby4iKSwgZyhuKSwgbjsKICAgIH0KICAgIGZ1bmN0aW9uIE5uKG4pIHsKICAgICAgdmFyIHQgPSBKOwogICAgICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID8gdC5zdGFydHNXaXRoKG4pIDogdC5pbmRleE9mKG4pID09PSAwOwogICAgfQogICAgZnVuY3Rpb24gaHQoKSB7CiAgICAgIHJldHVybiBObigiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LCIpOwogICAgfQogICAgdmFyIEogPSAic2FtLndhc20iOwogICAgaWYgKCFodCgpKSB7CiAgICAgIHZhciBtdCA9IEo7CiAgICAgIEogPSBlLmxvY2F0ZUZpbGUgPyBlLmxvY2F0ZUZpbGUobXQsIF8pIDogXyArIG10OwogICAgfQogICAgZnVuY3Rpb24geXQoKSB7CiAgICAgIHRyeSB7CiAgICAgICAgaWYgKE0pIHJldHVybiBuZXcgVWludDhBcnJheShNKTsKICAgICAgICBpZiAoUykgcmV0dXJuIFMoSik7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIGZuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiByZSgpIHsKICAgICAgcmV0dXJuIE0gfHwgIWIgJiYgIVQgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgTm4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oeXQpIDogZmV0Y2goSiwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spIHRocm93ICJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICciICsgSiArICInIjsKICAgICAgICByZXR1cm4gbi5hcnJheUJ1ZmZlcigpOwogICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4geXQoKTsKICAgICAgfSk7CiAgICB9CiAgICBmdW5jdGlvbiB3bihuKSB7CiAgICAgIGZvciAoOyAwIDwgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5zaGlmdCgpOwogICAgICAgIGlmICh0eXBlb2YgdCA9PSAiZnVuY3Rpb24iKSB0KGUpOwogICAgICAgIGVsc2UgewogICAgICAgICAgdmFyIHIgPSB0LkJhOwogICAgICAgICAgdHlwZW9mIHIgPT0gIm51bWJlciIgPyB0LnRhID09PSB2b2lkIDAgPyBIbigidiIsIHIpKCkgOiBIbigidmkiLCByKSh0LnRhKSA6IHIodC50YSA9PT0gdm9pZCAwID8gbnVsbCA6IHQudGEpOwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gSG4obiwgdCkgewogICAgICB2YXIgciA9IFtdOwogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgci5sZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOwogICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gaWUobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIGtbdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIGtbdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAga1t0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKCkgewogICAgICByZXR1cm4gMCA8IEFuLnhhOwogICAgfQogICAgZnVuY3Rpb24gVW4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIHB0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gUihuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgeFtuXTsgKSB0ICs9IHB0W3hbbisrXV07CiAgICAgIHJldHVybiB0OwogICAgfQogICAgdmFyIGVuID0ge30sIEsgPSB7fSwgX24gPSB7fTsKICAgIGZ1bmN0aW9uIERuKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIEJuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBEbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gem4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gQm4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIHJuID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBybihuKTsKICAgIH0KICAgIHZhciB2dCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgdGhyb3cgbmV3IHZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gYW4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGMpIHsKICAgICAgICBjID0gcihjKSwgYy5sZW5ndGggIT09IG4ubGVuZ3RoICYmIENuKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBuLmxlbmd0aDsgKyt5KSBCKG5beV0sIGNbeV0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihjKSB7CiAgICAgICAgX25bY10gPSB0OwogICAgICB9KTsKICAgICAgdmFyIHMgPSBBcnJheSh0Lmxlbmd0aCksIHUgPSBbXSwgbCA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihjLCB5KSB7CiAgICAgICAgSy5oYXNPd25Qcm9wZXJ0eShjKSA/IHNbeV0gPSBLW2NdIDogKHUucHVzaChjKSwgZW4uaGFzT3duUHJvcGVydHkoYykgfHwgKGVuW2NdID0gW10pLCBlbltjXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgc1t5XSA9IEtbY10sICsrbCwgbCA9PT0gdS5sZW5ndGggJiYgaShzKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCB1Lmxlbmd0aCA9PT0gMCAmJiBpKHMpOwogICAgfQogICAgZnVuY3Rpb24gQihuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgSy5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKSByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBLW25dID0gdCwgZGVsZXRlIF9uW25dLCBlbi5oYXNPd25Qcm9wZXJ0eShuKSAmJiAodCA9IGVuW25dLCBkZWxldGUgZW5bbl0sIHQuZm9yRWFjaChmdW5jdGlvbihzKSB7CiAgICAgICAgcygpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBhZShuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBWbihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIEduID0gITE7CiAgICBmdW5jdGlvbiBndCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIHd0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gZG4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKGRuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChHbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpIHIgPSByLnZhbHVlLCByLmRhID8gd3QocikgOiBjb25zb2xlLndhcm4oIm9iamVjdCBhbHJlYWR5IGRlbGV0ZWQ6ICIgKyByLmRhKTsKICAgICAgfSksIGRuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiBHbi5yZWdpc3Rlcih0LCB0LkEsIHQuQSksIHQ7CiAgICAgIH0sIGd0ID0gZnVuY3Rpb24odCkgewogICAgICAgIEduLnVucmVnaXN0ZXIodC5BKTsKICAgICAgfSwgZG4obikpOwogICAgfQogICAgdmFyIGhuID0gdm9pZCAwLCBtbiA9IFtdOwogICAgZnVuY3Rpb24gWW4oKSB7CiAgICAgIGZvciAoOyBtbi5sZW5ndGg7ICkgewogICAgICAgIHZhciBuID0gbW4ucG9wKCk7CiAgICAgICAgbi5BLm9hID0gITEsIG4uZGVsZXRlKCk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIEcoKSB7CiAgICB9CiAgICB2YXIgQXQgPSB7fTsKICAgIGZ1bmN0aW9uIG9lKG4sIHQpIHsKICAgICAgdmFyIHIgPSBlOwogICAgICBpZiAocltuXS5qYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdmFyIGkgPSByW25dOwogICAgICAgIHJbbl0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiByW25dLmphLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpIHx8IHYoIkZ1bmN0aW9uICciICsgdCArICInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdHMgb25lIG9mICgiICsgcltuXS5qYSArICIpISIpLCByW25dLmphW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfSwgcltuXS5qYSA9IFtdLCByW25dLmphW2kueWFdID0gaTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pID8gKChyID09PSB2b2lkIDAgfHwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIGVbbl0uamFbcl0gIT09IHZvaWQgMCkgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICciICsgbiArICInIHR3aWNlIiksIG9lKG4sIG4pLCBlLmhhc093blByb3BlcnR5KHIpICYmIHYoIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyByICsgIikhIiksIGVbbl0uamFbcl0gPSB0KSA6IChlW25dID0gdCwgciAhPT0gdm9pZCAwICYmIChlW25dLlJhID0gcikpOwogICAgfQogICAgZnVuY3Rpb24gc2UobiwgdCwgciwgaSwgcywgdSwgbCwgYykgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmNvbnN0cnVjdG9yID0gdCwgdGhpcy5tYSA9IHIsIHRoaXMubmEgPSBpLCB0aGlzLmlhID0gcywgdGhpcy5DYSA9IHUsIHRoaXMucWEgPSBsLCB0aGlzLkFhID0gYzsKICAgIH0KICAgIGZ1bmN0aW9uIFRuKG4sIHQsIHIpIHsKICAgICAgZm9yICg7IHQgIT09IHI7ICkgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiB1ZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgc24odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIFRuKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBjZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBzbih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSBUbih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpIHIgPSB0LkEuZ2E7CiAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIG9uKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGkuZGVsZXRlKCk7CiAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgIH0KICAgICAgcmV0dXJuIHI7CiAgICB9CiAgICBmdW5jdGlvbiBsZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgc24odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyB0LkEuZmEubmFtZSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIFRuKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBFbihuKSB7CiAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShEW24gPj4gMl0pOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCwgcikgewogICAgICByZXR1cm4gdCA9PT0gciA/IG4gOiByLmlhID09PSB2b2lkIDAgPyBudWxsIDogKG4gPSBDdChuLCB0LCByLmlhKSwgbiA9PT0gbnVsbCA/IG51bGwgOiByLkFhKG4pKTsKICAgIH0KICAgIHZhciB5biA9IHt9OwogICAgZnVuY3Rpb24gZmUobiwgdCkgewogICAgICBmb3IgKHQgPT09IHZvaWQgMCAmJiB2KCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsgbi5pYTsgKSB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiB5blt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIFBuKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBDbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIENuKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgZG4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiB6KG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IGNlIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyB1ZSA6IGxlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiBUdChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgQ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gWShuLCB0KSB7CiAgICAgIG4gPSBSKG4pOwogICAgICB2YXIgciA9IEhuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgRXQgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiBQdChuKSB7CiAgICAgIG4gPSBGdChuKTsKICAgICAgdmFyIHQgPSBSKG4pOwogICAgICByZXR1cm4gVihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIHBuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcih1KSB7CiAgICAgICAgc1t1XSB8fCBLW3VdIHx8IChfblt1XSA/IF9uW3VdLmZvckVhY2gocikgOiAoaS5wdXNoKHUpLCBzW3VdID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBzID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IEV0KG4gKyAiOiAiICsgaS5tYXAoUHQpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBPdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspIHIucHVzaChrWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIE9uKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gYnQobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIFRuKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBabiA9IFtdLCBGID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uICRuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1GW25dLkphID09PSAwICYmIChGW25dID0gdm9pZCAwLCBabi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIG9uKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IFpuLmxlbmd0aCA/IFpuLnBvcCgpIDogRi5sZW5ndGg7CiAgICAgICAgICByZXR1cm4gRlt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpIHJldHVybiAibnVsbCI7CiAgICAgIHZhciB0ID0gdHlwZW9mIG47CiAgICAgIHJldHVybiB0ID09PSAib2JqZWN0IiB8fCB0ID09PSAiYXJyYXkiIHx8IHQgPT09ICJmdW5jdGlvbiIgPyBuLnRvU3RyaW5nKCkgOiAiIiArIG47CiAgICB9CiAgICBmdW5jdGlvbiBkZShuLCB0KSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShvdFtyID4+IDJdKTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHN0W3IgPj4gM10pOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBmbG9hdCB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGhlKG4pIHsKICAgICAgdmFyIHQgPSBGdW5jdGlvbjsKICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBCbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIG1lKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiAkW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHhbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gdG5baSA+PiAxXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBnbltpID4+IDFdOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIGtbaSA+PiAyXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBEW2kgPj4gMl07CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGludGVnZXIgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBYbihuKSB7CiAgICAgIHJldHVybiBuIHx8IHYoIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9ICIgKyBuKSwgRltuXS52YWx1ZTsKICAgIH0KICAgIGZ1bmN0aW9uIFN0KG4sIHQpIHsKICAgICAgdmFyIHIgPSBLW25dOwogICAgICByZXR1cm4gciA9PT0gdm9pZCAwICYmIHYodCArICIgaGFzIHVua25vd24gdHlwZSAiICsgUHQobikpLCByOwogICAgfQogICAgdmFyIHllID0ge30sIE10ID0ge307CiAgICBmdW5jdGlvbiBXdCgpIHsKICAgICAgaWYgKCFKbikgewogICAgICAgIHZhciBuID0geyBVU0VSOiAid2ViX3VzZXIiLCBMT0dOQU1FOiAid2ViX3VzZXIiLCBQQVRIOiAiLyIsIFBXRDogIi8iLCBIT01FOiAiL2hvbWUvd2ViX3VzZXIiLCBMQU5HOiAodHlwZW9mIG5hdmlnYXRvciA9PSAib2JqZWN0IiAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gfHwgIkMiKS5yZXBsYWNlKCItIiwgIl8iKSArICIuVVRGLTgiLCBfOiBPIHx8ICIuL3RoaXMucHJvZ3JhbSIgfSwgdDsKICAgICAgICBmb3IgKHQgaW4gTXQpIG5bdF0gPSBNdFt0XTsKICAgICAgICB2YXIgciA9IFtdOwogICAgICAgIGZvciAodCBpbiBuKSByLnB1c2godCArICI9IiArIG5bdF0pOwogICAgICAgIEpuID0gcjsKICAgICAgfQogICAgICByZXR1cm4gSm47CiAgICB9CiAgICB2YXIgSm4sIGt0ID0gW107CiAgICBmdW5jdGlvbiBSdChuKSB7CiAgICAgIHZhciB0ID0ge30sIHI7CiAgICAgIGZvciAociBpbiBuKSAoZnVuY3Rpb24oaSkgewogICAgICAgIHZhciBzID0gbltpXTsKICAgICAgICB0W2ldID0gdHlwZW9mIHMgPT0gImZ1bmN0aW9uIiA/IGZ1bmN0aW9uKCkgewogICAgICAgICAga3QucHVzaChpKTsKICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgIHJldHVybiBzLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9IGZpbmFsbHkgewogICAgICAgICAgICBpZiAoTG4pIHJldHVybjsKICAgICAgICAgICAgdmFyIHUgPSBrdC5wb3AoKTsKICAgICAgICAgICAgcnQodSA9PT0gaSk7CiAgICAgICAgICB9CiAgICAgICAgfSA6IHM7CiAgICAgIH0pKHIpOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIGZvciAodmFyIEl0ID0gQXJyYXkoMjU2KSwgYm4gPSAwOyAyNTYgPiBibjsgKytibikgSXRbYm5dID0gU3RyaW5nLmZyb21DaGFyQ29kZShibik7CiAgICBwdCA9IEl0LCBybiA9IGUuQmluZGluZ0Vycm9yID0gem4oIkJpbmRpbmdFcnJvciIpLCB2dCA9IGUuSW50ZXJuYWxFcnJvciA9IHpuKCJJbnRlcm5hbEVycm9yIiksIEcucHJvdG90eXBlLmlzQWxpYXNPZiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEcgJiYgbiBpbnN0YW5jZW9mIEcpKSByZXR1cm4gITE7CiAgICAgIHZhciB0ID0gdGhpcy5BLmZhLmVhLCByID0gdGhpcy5BLmRhLCBpID0gbi5BLmZhLmVhOwogICAgICBmb3IgKG4gPSBuLkEuZGE7IHQuaWE7ICkgciA9IHQucWEociksIHQgPSB0LmlhOwogICAgICBmb3IgKDsgaS5pYTsgKSBuID0gaS5xYShuKSwgaSA9IGkuaWE7CiAgICAgIHJldHVybiB0ID09PSBpICYmIHIgPT09IG47CiAgICB9LCBHLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkgewogICAgICBpZiAodGhpcy5BLmRhIHx8IFZuKHRoaXMpLCB0aGlzLkEucGEpIHJldHVybiB0aGlzLkEuY291bnQudmFsdWUgKz0gMSwgdGhpczsKICAgICAgdmFyIG4gPSBkbihPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSwgeyBBOiB7IHZhbHVlOiBhZSh0aGlzLkEpIH0gfSkpOwogICAgICByZXR1cm4gbi5BLmNvdW50LnZhbHVlICs9IDEsIG4uQS5vYSA9ICExLCBuOwogICAgfSwgRy5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24oKSB7CiAgICAgIHRoaXMuQS5kYSB8fCBWbih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBndCh0aGlzKSwgd3QodGhpcy5BKSwgdGhpcy5BLnBhIHx8ICh0aGlzLkEuZ2EgPSB2b2lkIDAsIHRoaXMuQS5kYSA9IHZvaWQgMCk7CiAgICB9LCBHLnByb3RvdHlwZS5pc0RlbGV0ZWQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICF0aGlzLkEuZGE7CiAgICB9LCBHLnByb3RvdHlwZS5kZWxldGVMYXRlciA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gdGhpcy5BLmRhIHx8IFZuKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIG1uLnB1c2godGhpcyksIG1uLmxlbmd0aCA9PT0gMSAmJiBobiAmJiBobihZbiksIHRoaXMuQS5vYSA9ICEwLCB0aGlzOwogICAgfSwgei5wcm90b3R5cGUuRGEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHJldHVybiB0aGlzLndhICYmIChuID0gdGhpcy53YShuKSksIG47CiAgICB9LCB6LnByb3RvdHlwZS52YSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdGhpcy5uYSAmJiB0aGlzLm5hKG4pOwogICAgfSwgei5wcm90b3R5cGUuYXJnUGFja0FkdmFuY2UgPSA4LCB6LnByb3RvdHlwZS5yZWFkVmFsdWVGcm9tUG9pbnRlciA9IEVuLCB6LnByb3RvdHlwZS5kZWxldGVPYmplY3QgPSBmdW5jdGlvbihuKSB7CiAgICAgIG4gIT09IG51bGwgJiYgbi5kZWxldGUoKTsKICAgIH0sIHoucHJvdG90eXBlLmZyb21XaXJlVHlwZSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgZnVuY3Rpb24gdCgpIHsKICAgICAgICByZXR1cm4gdGhpcy5zYSA/IFBuKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMuR2EsIGRhOiByLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBQbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLCBkYTogbiB9KTsKICAgICAgfQogICAgICB2YXIgciA9IHRoaXMuRGEobik7CiAgICAgIGlmICghcikgcmV0dXJuIHRoaXMudmEobiksIG51bGw7CiAgICAgIHZhciBpID0gZmUodGhpcy5lYSwgcik7CiAgICAgIGlmIChpICE9PSB2b2lkIDApCiAgICAgICAgcmV0dXJuIGkuQS5jb3VudC52YWx1ZSA9PT0gMCA/IChpLkEuZGEgPSByLCBpLkEuZ2EgPSBuLCBpLmNsb25lKCkpIDogKGkgPSBpLmNsb25lKCksIHRoaXMudmEobiksIGkpOwogICAgICBpZiAoaSA9IHRoaXMuZWEuQ2EociksIGkgPSBBdFtpXSwgIWkpIHJldHVybiB0LmNhbGwodGhpcyk7CiAgICAgIGkgPSB0aGlzLnJhID8gaS56YSA6IGkucG9pbnRlclR5cGU7CiAgICAgIHZhciBzID0gQ3QociwgdGhpcy5lYSwgaS5lYSk7CiAgICAgIHJldHVybiBzID09PSBudWxsID8gdC5jYWxsKHRoaXMpIDogdGhpcy5zYSA/IFBuKGkuZWEubWEsIHsgZmE6IGksIGRhOiBzLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBQbigKICAgICAgICBpLmVhLm1hLAogICAgICAgIHsgZmE6IGksIGRhOiBzIH0KICAgICAgKTsKICAgIH0sIGUuZ2V0SW5oZXJpdGVkSW5zdGFuY2VDb3VudCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gT2JqZWN0LmtleXMoeW4pLmxlbmd0aDsKICAgIH0sIGUuZ2V0TGl2ZUluaGVyaXRlZEluc3RhbmNlcyA9IGZ1bmN0aW9uKCkgewogICAgICB2YXIgbiA9IFtdLCB0OwogICAgICBmb3IgKHQgaW4geW4pIHluLmhhc093blByb3BlcnR5KHQpICYmIG4ucHVzaCh5blt0XSk7CiAgICAgIHJldHVybiBuOwogICAgfSwgZS5mbHVzaFBlbmRpbmdEZWxldGVzID0gWW4sIGUuc2V0RGVsYXlGdW5jdGlvbiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgaG4gPSBuLCBtbi5sZW5ndGggJiYgaG4gJiYgaG4oWW4pOwogICAgfSwgRXQgPSBlLlVuYm91bmRUeXBlRXJyb3IgPSB6bigiVW5ib3VuZFR5cGVFcnJvciIpLCBlLmNvdW50X2VtdmFsX2hhbmRsZXMgPSBmdW5jdGlvbigpIHsKICAgICAgZm9yICh2YXIgbiA9IDAsIHQgPSA1OyB0IDwgRi5sZW5ndGg7ICsrdCkgRlt0XSAhPT0gdm9pZCAwICYmICsrbjsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmdldF9maXJzdF9lbXZhbCA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gNTsgbiA8IEYubGVuZ3RoOyArK24pIGlmIChGW25dICE9PSB2b2lkIDApIHJldHVybiBGW25dOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0sIGZ0LnB1c2goeyBCYTogZnVuY3Rpb24oKSB7CiAgICAgIHh0KCk7CiAgICB9IH0pOwogICAgdmFyIHBlID0gewogICAgICB6OiBmdW5jdGlvbihuKSB7CiAgICAgICAgcmV0dXJuIFNuKG4gKyAxNikgKyAxNjsKICAgICAgfSwKICAgICAgdTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHRocm93IG5ldyBpZShuKS5GYSh0LCByKSwgInVuY2F1Z2h0X2V4Y2VwdGlvbiIgaW4gQW4gPyBBbi54YSsrIDogQW4ueGEgPSAxLCBuOwogICAgICB9LAogICAgICB3OiBmdW5jdGlvbihuLCB0LCByLCBpLCBzKSB7CiAgICAgICAgdmFyIHUgPSBVbihyKTsKICAgICAgICB0ID0gUih0KSwgQihuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24obCkgewogICAgICAgICAgcmV0dXJuICEhbDsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihsLCBjKSB7CiAgICAgICAgICByZXR1cm4gYyA/IGkgOiBzOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24obCkgewogICAgICAgICAgaWYgKHIgPT09IDEpIHZhciBjID0gJDsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDIpIGMgPSB0bjsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDQpIGMgPSBrOwogICAgICAgICAgZWxzZSB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGJvb2xlYW4gdHlwZSBzaXplOiAiICsgdCk7CiAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUoY1tsID4+IHVdKTsKICAgICAgICB9LCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgaDogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSwgbCwgYywgeSwgZiwgZCwgbSwgdykgewogICAgICAgIGQgPSBSKGQpLCB1ID0gWShzLCB1KSwgYyAmJiAoYyA9IFkobCwgYykpLCBmICYmIChmID0gWSh5LCBmKSksIHcgPSBZKG0sIHcpOwogICAgICAgIHZhciBQID0gRG4oZCk7CiAgICAgICAgX3QoUCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBwbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbaV0pOwogICAgICAgIH0pLCBhbihbbiwgdCwgcl0sIGkgPyBbaV0gOiBbXSwgZnVuY3Rpb24ocCkgewogICAgICAgICAgaWYgKHAgPSBwWzBdLCBpKQogICAgICAgICAgICB2YXIgTiA9IHAuZWEsIFcgPSBOLm1hOwogICAgICAgICAgZWxzZSBXID0gRy5wcm90b3R5cGU7CiAgICAgICAgICBwID0gQm4oUCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykgIT09IEkpIHRocm93IG5ldyBybigiVXNlICduZXcnIHRvIGNvbnN0cnVjdCAiICsgZCk7CiAgICAgICAgICAgIGlmIChMLmxhID09PSB2b2lkIDApIHRocm93IG5ldyBybihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIganQgPSBMLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoanQgPT09IHZvaWQgMCkgdGhyb3cgbmV3IHJuKCJUcmllZCB0byBpbnZva2UgY3RvciBvZiAiICsgZCArICIgd2l0aCBpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0ZWQgKCIgKyBPYmplY3Qua2V5cyhMLmxhKS50b1N0cmluZygpICsgIikgcGFyYW1ldGVycyBpbnN0ZWFkISIpOwogICAgICAgICAgICByZXR1cm4ganQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICAgIH0pOwogICAgICAgICAgdmFyIEkgPSBPYmplY3QuY3JlYXRlKFcsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHAgfSB9KTsKICAgICAgICAgIHAucHJvdG90eXBlID0gSTsKICAgICAgICAgIHZhciBMID0gbmV3IHNlKGQsIHAsIEksIHcsIE4sIHUsIGMsIGYpOwogICAgICAgICAgTiA9IG5ldyB6KGQsIEwsICEwLCAhMSksIFcgPSBuZXcgeihkICsgIioiLCBMLCAhMSwgITEpOwogICAgICAgICAgdmFyIHZuID0gbmV3IHooZCArICIgY29uc3QqIiwgTCwgITEsICEwKTsKICAgICAgICAgIHJldHVybiBBdFtuXSA9IHsgcG9pbnRlclR5cGU6IFcsIHphOiB2biB9LCBUdChQLCBwKSwgW04sIFcsIHZuXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgZzogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSkgewogICAgICAgIHJ0KDAgPCB0KTsKICAgICAgICB2YXIgbCA9IE90KHQsIHIpOwogICAgICAgIHMgPSBZKGksIHMpOwogICAgICAgIHZhciBjID0gW3VdLCB5ID0gW107CiAgICAgICAgYW4oW10sIFtuXSwgZnVuY3Rpb24oZikgewogICAgICAgICAgZiA9IGZbMF07CiAgICAgICAgICB2YXIgZCA9ICJjb25zdHJ1Y3RvciAiICsgZi5uYW1lOwogICAgICAgICAgaWYgKGYuZWEubGEgPT09IHZvaWQgMCAmJiAoZi5lYS5sYSA9IFtdKSwgZi5lYS5sYVt0IC0gMV0gIT09IHZvaWQgMCkgdGhyb3cgbmV3IHJuKCJDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgY29uc3RydWN0b3JzIHdpdGggaWRlbnRpY2FsIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgKHQgLSAxKSArICIpIGZvciBjbGFzcyAnIiArIGYubmFtZSArICInISBPdmVybG9hZCByZXNvbHV0aW9uIGlzIGN1cnJlbnRseSBvbmx5IHBlcmZvcm1lZCB1c2luZyB0aGUgcGFyYW1ldGVyIGNvdW50LCBub3QgYWN0dWFsIHR5cGUgaW5mbyEiKTsKICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBwbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZi5uYW1lICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGwpOwogICAgICAgICAgfSwgYW4oW10sIGwsIGZ1bmN0aW9uKG0pIHsKICAgICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCAhPT0gdCAtIDEgJiYgdihkICsgIiBjYWxsZWQgd2l0aCAiICsgYXJndW1lbnRzLmxlbmd0aCArICIgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKHQgLSAxKSksIHkubGVuZ3RoID0gMCwgYy5sZW5ndGggPSB0OwogICAgICAgICAgICAgIGZvciAodmFyIHcgPSAxOyB3IDwgdDsgKyt3KSBjW3ddID0gbVt3XS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgeSwKICAgICAgICAgICAgICAgIGFyZ3VtZW50c1t3IC0gMV0KICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiB3ID0gcy5hcHBseShudWxsLCBjKSwgT24oeSksIG1bMF0uZnJvbVdpcmVUeXBlKHcpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSwgbCwgYywgeSwgZikgewogICAgICAgIHQgPSBSKHQpLCBzID0gWShpLCBzKSwgYW4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgbSA9IGQubmFtZSArICIuIiArIHQsIHcgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHBuKCJDYW5ub3QgYWNjZXNzICIgKyBtICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBsXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHkgPyB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBwbigiQ2Fubm90IGFjY2VzcyAiICsgbSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgbF0pOwogICAgICAgICAgfSA6IHcuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYobSArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCB3KSwgYW4oW10sIHkgPyBbciwgbF0gOiBbcl0sIGZ1bmN0aW9uKFApIHsKICAgICAgICAgICAgdmFyIHAgPSBQWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciBJID0gYnQodGhpcywgZCwgbSArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIHAuZnJvbVdpcmVUeXBlKHModSwgSSkpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAoeSkgewogICAgICAgICAgICAgIHkgPSBZKGMsIHkpOwogICAgICAgICAgICAgIHZhciBXID0gUFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKEkpIHsKICAgICAgICAgICAgICAgIHZhciBMID0gYnQodGhpcywgZCwgbSArICIgc2V0dGVyIiksIHZuID0gW107CiAgICAgICAgICAgICAgICB5KGYsIEwsIFcudG9XaXJlVHlwZSh2biwgSSkpLCBPbih2bik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBSKHQpLCBCKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IEZbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gJG4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIG9uKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogRW4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IFVuKHIpLCB0ID0gUih0KSwgQihuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIHMpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBzICE9ICJudW1iZXIiICYmIHR5cGVvZiBzICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBzbihzKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgICByZXR1cm4gczsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBkZSh0LCByKSwKICAgICAgICAgIGthOiBudWxsCiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGM6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIHMsIHUpIHsKICAgICAgICB2YXIgbCA9IE90KHQsIHIpOwogICAgICAgIG4gPSBSKG4pLCBzID0gWShpLCBzKSwgX3QobiwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBwbigiQ2Fubm90IGNhbGwgIiArIG4gKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgbCk7CiAgICAgICAgfSwgdCAtIDEpLCBhbihbXSwgbCwgZnVuY3Rpb24oYykgewogICAgICAgICAgdmFyIHkgPSBuLCBmID0gbjsKICAgICAgICAgIGMgPSBbY1swXSwgbnVsbF0uY29uY2F0KGMuc2xpY2UoMSkpOwogICAgICAgICAgdmFyIGQgPSBzLCBtID0gYy5sZW5ndGg7CiAgICAgICAgICAyID4gbSAmJiB2KCJhcmdUeXBlcyBhcnJheSBzaXplIG1pc21hdGNoISBNdXN0IGF0IGxlYXN0IGdldCByZXR1cm4gdmFsdWUgYW5kICd0aGlzJyB0eXBlcyEiKTsKICAgICAgICAgIGZvciAodmFyIHcgPSBjWzFdICE9PSBudWxsICYmICExLCBQID0gITEsIHAgPSAxOyBwIDwgYy5sZW5ndGg7ICsrcCkgaWYgKGNbcF0gIT09IG51bGwgJiYgY1twXS5rYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgICAgIFAgPSAhMDsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICB9CiAgICAgICAgICB2YXIgTiA9IGNbMF0ubmFtZSAhPT0gInZvaWQiLCBXID0gIiIsIEkgPSAiIjsKICAgICAgICAgIGZvciAocCA9IDA7IHAgPCBtIC0gMjsgKytwKSBXICs9IChwICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgcCwgSSArPSAocCAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHAgKyAiV2lyZWQiOwogICAgICAgICAgZiA9ICJyZXR1cm4gZnVuY3Rpb24gIiArIERuKGYpICsgIigiICsgVyArIGApIHsKaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IGAgKyAobSAtIDIpICsgYCkgewp0aHJvd0JpbmRpbmdFcnJvcignZnVuY3Rpb24gYCArIGYgKyAiIGNhbGxlZCB3aXRoICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAobSAtIDIpICsgYCBhcmdzIScpOwp9CmAsIFAgJiYgKGYgKz0gYHZhciBkZXN0cnVjdG9ycyA9IFtdOwpgKTsKICAgICAgICAgIHZhciBMID0gUCA/ICJkZXN0cnVjdG9ycyIgOiAibnVsbCI7CiAgICAgICAgICBmb3IgKFcgPSAidGhyb3dCaW5kaW5nRXJyb3IgaW52b2tlciBmbiBydW5EZXN0cnVjdG9ycyByZXRUeXBlIGNsYXNzUGFyYW0iLnNwbGl0KCIgIiksIGQgPSBbdiwgZCwgdSwgT24sIGNbMF0sIGNbMV1dLCB3ICYmIChmICs9ICJ2YXIgdGhpc1dpcmVkID0gY2xhc3NQYXJhbS50b1dpcmVUeXBlKCIgKyBMICsgYCwgdGhpcyk7CmApLCBwID0gMDsgcCA8IG0gLSAyOyArK3ApIGYgKz0gInZhciBhcmciICsgcCArICJXaXJlZCA9IGFyZ1R5cGUiICsgcCArICIudG9XaXJlVHlwZSgiICsgTCArICIsIGFyZyIgKyBwICsgIik7IC8vICIgKyBjW3AgKyAyXS5uYW1lICsgYApgLCBXLnB1c2goImFyZ1R5cGUiICsgcCksIGQucHVzaChjW3AgKyAyXSk7CiAgICAgICAgICBpZiAodyAmJiAoSSA9ICJ0aGlzV2lyZWQiICsgKDAgPCBJLmxlbmd0aCA/ICIsICIgOiAiIikgKyBJKSwgZiArPSAoTiA/ICJ2YXIgcnYgPSAiIDogIiIpICsgImludm9rZXIoZm4iICsgKDAgPCBJLmxlbmd0aCA/ICIsICIgOiAiIikgKyBJICsgYCk7CmAsIFApIGYgKz0gYHJ1bkRlc3RydWN0b3JzKGRlc3RydWN0b3JzKTsKYDsKICAgICAgICAgIGVsc2UgZm9yIChwID0gdyA/IDEgOiAyOyBwIDwgYy5sZW5ndGg7ICsrcCkgbSA9IHAgPT09IDEgPyAidGhpc1dpcmVkIiA6ICJhcmciICsgKHAgLSAyKSArICJXaXJlZCIsIGNbcF0ua2EgIT09IG51bGwgJiYgKGYgKz0gbSArICJfZHRvcigiICsgbSArICIpOyAvLyAiICsgY1twXS5uYW1lICsgYApgLCBXLnB1c2gobSArICJfZHRvciIpLCBkLnB1c2goY1twXS5rYSkpOwogICAgICAgICAgcmV0dXJuIE4gJiYgKGYgKz0gYHZhciByZXQgPSByZXRUeXBlLmZyb21XaXJlVHlwZShydik7CnJldHVybiByZXQ7CmApLCBXLnB1c2goZiArIGB9CmApLCBjID0gaGUoVykuYXBwbHkobnVsbCwgZCksIFR0KHksIGMsIHQgLSAxKSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGU6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIHMpIHsKICAgICAgICBmdW5jdGlvbiB1KGYpIHsKICAgICAgICAgIHJldHVybiBmOwogICAgICAgIH0KICAgICAgICB0ID0gUih0KSwgcyA9PT0gLTEgJiYgKHMgPSA0Mjk0OTY3Mjk1KTsKICAgICAgICB2YXIgbCA9IFVuKHIpOwogICAgICAgIGlmIChpID09PSAwKSB7CiAgICAgICAgICB2YXIgYyA9IDMyIC0gOCAqIHI7CiAgICAgICAgICB1ID0gZnVuY3Rpb24oZikgewogICAgICAgICAgICByZXR1cm4gZiA8PCBjID4+PiBjOwogICAgICAgICAgfTsKICAgICAgICB9CiAgICAgICAgdmFyIHkgPSB0LmluZGV4T2YoInVuc2lnbmVkIikgIT0gLTE7CiAgICAgICAgQihuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogdSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oZiwgZCkgewogICAgICAgICAgaWYgKHR5cGVvZiBkICE9ICJudW1iZXIiICYmIHR5cGVvZiBkICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBzbihkKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgaWYgKGQgPCBpIHx8IGQgPiBzKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXNzaW5nIGEgbnVtYmVyICInICsgc24oZCkgKyAnIiBmcm9tIEpTIHNpZGUgdG8gQy9DKysgc2lkZSB0byBhbiBhcmd1bWVudCBvZiB0eXBlICInICsgdCArICciLCB3aGljaCBpcyBvdXRzaWRlIHRoZSB2YWxpZCByYW5nZSBbJyArIGkgKyAiLCAiICsgcyArICJdISIpOwogICAgICAgICAgcmV0dXJuIHkgPyBkID4+PiAwIDogZCB8IDA7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBtZSh0LCBsLCBpICE9PSAwKSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGQ6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBmdW5jdGlvbiBpKHUpIHsKICAgICAgICAgIHUgPj49IDI7CiAgICAgICAgICB2YXIgbCA9IEQ7CiAgICAgICAgICByZXR1cm4gbmV3IHMobm4sIGxbdSArIDFdLCBsW3VdKTsKICAgICAgICB9CiAgICAgICAgdmFyIHMgPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gUihyKSwgQihuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFIodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEIobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgcyA9IERbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpIGZvciAodmFyIHUgPSBpICsgNCwgbCA9IDA7IGwgPD0gczsgKytsKSB7CiAgICAgICAgICAgICAgdmFyIGMgPSBpICsgNCArIGw7CiAgICAgICAgICAgICAgaWYgKGwgPT0gcyB8fCB4W2NdID09IDApIHsKICAgICAgICAgICAgICAgIGlmICh1KSB7CiAgICAgICAgICAgICAgICAgIHZhciB5ID0gdSwgZiA9IHgsIGQgPSB5ICsgKGMgLSB1KTsKICAgICAgICAgICAgICAgICAgZm9yICh1ID0geTsgZlt1XSAmJiAhKHUgPj0gZCk7ICkgKyt1OwogICAgICAgICAgICAgICAgICBpZiAoMTYgPCB1IC0geSAmJiBmLnN1YmFycmF5ICYmIGl0KSB5ID0gaXQuZGVjb2RlKGYuc3ViYXJyYXkoeSwgdSkpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAiIjsgeSA8IHU7ICkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBmW3krK107CiAgICAgICAgICAgICAgICAgICAgICBpZiAobSAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZbeSsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG0gJiAyMjQpID09IDE5MikgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChtICYgMzEpIDw8IDYgfCB3KTsKICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3krK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBtID0gKG0gJiAyNDApID09IDIyNCA/IChtICYgMTUpIDw8IDEyIHwgdyA8PCA2IHwgUCA6IChtICYgNykgPDwgMTggfCB3IDw8IDEyIHwgUCA8PCA2IHwgZlt5KytdICYgNjMsIDY1NTM2ID4gbSA/IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShtKSA6IChtIC09IDY1NTM2LCBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBtID4+IDEwLCA1NjMyMCB8IG0gJiAxMDIzKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobSk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHkgPSBkOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgeSA9ICIiOwogICAgICAgICAgICAgICAgaWYgKHAgPT09IHZvaWQgMCkgdmFyIHAgPSB5OwogICAgICAgICAgICAgICAgZWxzZSBwICs9ICJcMCIsIHAgKz0geTsKICAgICAgICAgICAgICAgIHUgPSBjICsgMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgZm9yIChwID0gQXJyYXkocyksIGwgPSAwOyBsIDwgczsgKytsKSBwW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZSh4W2kgKyA0ICsgbF0pOwogICAgICAgICAgICAgIHAgPSBwLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBWKGkpLCBwOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIHMpIHsKICAgICAgICAgICAgcyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChzID0gbmV3IFVpbnQ4QXJyYXkocykpOwogICAgICAgICAgICB2YXIgdSA9IHR5cGVvZiBzID09ICJzdHJpbmciOwogICAgICAgICAgICB1IHx8IHMgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IHMgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBzIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGwgPSAociAmJiB1ID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgcy5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIG0gPSBzLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBtICYmIDU3MzQzID49IG0gJiYgKG0gPSA2NTUzNiArICgobSAmIDEwMjMpIDw8IDEwKSB8IHMuY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBtID8gKytmIDogZiA9IDIwNDcgPj0gbSA/IGYgKyAyIDogNjU1MzUgPj0gbSA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIHMubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBjID0gU24oNCArIGwgKyAxKTsKICAgICAgICAgICAgaWYgKERbYyA+PiAyXSA9IGwsIHIgJiYgdSkgJHQocywgYyArIDQsIGwgKyAxKTsKICAgICAgICAgICAgZWxzZSBpZiAodSkgZm9yICh1ID0gMDsgdSA8IGw7ICsrdSkgewogICAgICAgICAgICAgIHZhciB5ID0gcy5jaGFyQ29kZUF0KHUpOwogICAgICAgICAgICAgIDI1NSA8IHkgJiYgKFYoYyksIHYoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpKSwgeFtjICsgNCArIHVdID0geTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGZvciAodSA9IDA7IHUgPCBsOyArK3UpIHhbYyArIDQgKyB1XSA9IHNbdV07CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaChWLCBjKSwgYzsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBFbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIFYoaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFIociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IFh0LCBzID0gSnQsIHUgPSBLdCwgbCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gZ247CiAgICAgICAgICB9LCBjID0gMTsKICAgICAgICBlbHNlIHQgPT09IDQgJiYgKGkgPSBRdCwgcyA9IHF0LCB1ID0gbmUsIGwgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiBEOwogICAgICAgIH0sIGMgPSAyKTsKICAgICAgICBCKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gRFt5ID4+IDJdLCBkID0gbCgpLCBtLCB3ID0geSArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgcCA9IHkgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFtwID4+IGNdID09IDApICYmICh3ID0gaSh3LCBwIC0gdyksIG0gPT09IHZvaWQgMCA/IG0gPSB3IDogKG0gKz0gIlwwIiwgbSArPSB3KSwgdyA9IHAgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiBWKHkpLCBtOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHksIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gdShmKSwgbSA9IFNuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gRFttID4+IDJdID0gZCA+PiBjLCBzKGYsIG0gKyA0LCBkICsgdCksIHkgIT09IG51bGwgJiYgeS5wdXNoKFYsIG0pLCBtOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogRW4sIGthOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBWKHkpOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgQihuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSBYbihuKSwgdCA9IFN0KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBzID0gb24oaSk7CiAgICAgICAgcmV0dXJuIGtbciA+PiAyXSA9IHMsIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogJG4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IFhuKG4pLCB0ID0gWG4odCksIG9uKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSB5ZVtuXTsKICAgICAgICByZXR1cm4gb24odCA9PT0gdm9pZCAwID8gUihuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgT24oRltuXS52YWx1ZSksICRuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBTdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIG9uKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBmbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgeC5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0geC5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKSByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBVLmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBubi5ieXRlTGVuZ3RoICsgNjU1MzUgPj4+IDE2KSwgdXQoVS5idWZmZXIpOwogICAgICAgICAgICAgIHZhciBzID0gMTsKICAgICAgICAgICAgICBicmVhayBuOwogICAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgfQogICAgICAgICAgICBzID0gdm9pZCAwOwogICAgICAgICAgfQogICAgICAgICAgaWYgKHMpIHJldHVybiAhMDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuICExOwogICAgICB9LAogICAgICBzOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSAwOwogICAgICAgIHJldHVybiBXdCgpLmZvckVhY2goZnVuY3Rpb24oaSwgcykgewogICAgICAgICAgdmFyIHUgPSB0ICsgcjsKICAgICAgICAgIGZvciAocyA9IGtbbiArIDQgKiBzID4+IDJdID0gdSwgdSA9IDA7IHUgPCBpLmxlbmd0aDsgKyt1KSAkW3MrKyA+PiAwXSA9IGkuY2hhckNvZGVBdCh1KTsKICAgICAgICAgICRbcyA+PiAwXSA9IDAsIHIgKz0gaS5sZW5ndGggKyAxOwogICAgICAgIH0pLCAwOwogICAgICB9LAogICAgICB0OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSBXdCgpOwogICAgICAgIGtbbiA+PiAyXSA9IHIubGVuZ3RoOwogICAgICAgIHZhciBpID0gMDsKICAgICAgICByZXR1cm4gci5mb3JFYWNoKGZ1bmN0aW9uKHMpIHsKICAgICAgICAgIGkgKz0gcy5sZW5ndGggKyAxOwogICAgICAgIH0pLCBrW3QgPj4gMl0gPSBpLCAwOwogICAgICB9LAogICAgICBhOiBVCiAgICB9OwogICAgKGZ1bmN0aW9uKCkgewogICAgICBmdW5jdGlvbiBuKHUpIHsKICAgICAgICB1ID0gdS5leHBvcnRzLCB1ID0gUnQodSksIGUuYXNtID0gdSwgWC0tLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFgpLCBYID09IDAgJiYgbG4gJiYgKHUgPSBsbiwgbG4gPSBudWxsLCB1KCkpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHQodSkgewogICAgICAgIG4odS5pbnN0YW5jZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcih1KSB7CiAgICAgICAgcmV0dXJuIHJlKCkudGhlbihmdW5jdGlvbihsKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUobCwgaSk7CiAgICAgICAgfSkudGhlbih1LCBmdW5jdGlvbihsKSB7CiAgICAgICAgICBFKCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAiICsgbCksIGZuKGwpOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIHZhciBpID0geyBhOiBwZSB9OwogICAgICBpZiAoWCsrLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFgpLCBlLmluc3RhbnRpYXRlV2FzbSkgdHJ5IHsKICAgICAgICB2YXIgcyA9IGUuaW5zdGFudGlhdGVXYXNtKGksIG4pOwogICAgICAgIHJldHVybiBzID0gUnQocyk7CiAgICAgIH0gY2F0Y2ggKHUpIHsKICAgICAgICByZXR1cm4gRSgiTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogIiArIHUpLCAhMTsKICAgICAgfQogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKE0gfHwgdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nICE9ICJmdW5jdGlvbiIgfHwgaHQoKSB8fCBObigiZmlsZTovLyIpIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iKSByZXR1cm4gcih0KTsKICAgICAgICBmZXRjaChKLCB7IGNyZWRlbnRpYWxzOiAic2FtZS1vcmlnaW4iIH0pLnRoZW4oZnVuY3Rpb24odSkgewogICAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHUsIGkpLnRoZW4odCwgZnVuY3Rpb24obCkgewogICAgICAgICAgICByZXR1cm4gRSgid2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6ICIgKyBsKSwgRSgiZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb24iKSwgcih0KTsKICAgICAgICAgIH0pOwogICAgICAgIH0pOwogICAgICB9KCksIHt9OwogICAgfSkoKTsKICAgIHZhciB4dCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoeHQgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGUuYXNtLkIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBTbiA9IGUuX21hbGxvYyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFNuID0gZS5fbWFsbG9jID0gZS5hc20uQykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIFYgPSBlLl9mcmVlID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoViA9IGUuX2ZyZWUgPSBlLmFzbS5EKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgRnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZS5hc20uRSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICBlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBlLmFzbS5GKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpID0gZS5hc20uRykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aSA9IGUuYXNtLkgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9pID0gZS5hc20uSSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpID0gZS5hc20uSikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWkgPSBlLmFzbS5LKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2ZpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9maWkgPSBlLmFzbS5MKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWYgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpZiA9IGUuYXNtLk0pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWkgPSBlLmFzbS5OKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaSA9IGUuYXNtLk8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaSA9IGUuYXNtLlApLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaSA9IGUuYXNtLlEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaWkgPSBlLmFzbS5SKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpID0gZS5hc20uUykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZS5hc20uVCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGUuYXNtLlUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBlLmFzbS5WKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGUuYXNtLlcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGUuYXNtLlgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpID0gZS5hc20uWSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaSA9IGUuYXNtLlopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpID0gZS5hc20uXykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGUuYXNtLiQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZS5hc20uYWEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBlLmFzbS5iYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBlLmFzbS5jYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICB2YXIgTW47CiAgICBsbiA9IGZ1bmN0aW9uIG4oKSB7CiAgICAgIE1uIHx8IEtuKCksIE1uIHx8IChsbiA9IG4pOwogICAgfTsKICAgIGZ1bmN0aW9uIEtuKCkgewogICAgICBmdW5jdGlvbiBuKCkgewogICAgICAgIGlmICghTW4gJiYgKE1uID0gITAsIGUuY2FsbGVkUnVuID0gITAsICFMbikpIHsKICAgICAgICAgIGlmICh3bihmdCksIHduKHRlKSwgaChlKSwgZS5vblJ1bnRpbWVJbml0aWFsaXplZCAmJiBlLm9uUnVudGltZUluaXRpYWxpemVkKCksIGUucG9zdFJ1bikgZm9yICh0eXBlb2YgZS5wb3N0UnVuID09ICJmdW5jdGlvbiIgJiYgKGUucG9zdFJ1biA9IFtlLnBvc3RSdW5dKTsgZS5wb3N0UnVuLmxlbmd0aDsgKSB7CiAgICAgICAgICAgIHZhciB0ID0gZS5wb3N0UnVuLnNoaWZ0KCk7CiAgICAgICAgICAgIGR0LnVuc2hpZnQodCk7CiAgICAgICAgICB9CiAgICAgICAgICB3bihkdCk7CiAgICAgICAgfQogICAgICB9CiAgICAgIGlmICghKDAgPCBYKSkgewogICAgICAgIGlmIChlLnByZVJ1bikgZm9yICh0eXBlb2YgZS5wcmVSdW4gPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVSdW4gPSBbZS5wcmVSdW5dKTsgZS5wcmVSdW4ubGVuZ3RoOyApIGVlKCk7CiAgICAgICAgd24obHQpLCAwIDwgWCB8fCAoZS5zZXRTdGF0dXMgPyAoZS5zZXRTdGF0dXMoIlJ1bm5pbmcuLi4iKSwgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGUuc2V0U3RhdHVzKCIiKTsKICAgICAgICAgIH0sIDEpLCBuKCk7CiAgICAgICAgfSwgMSkpIDogbigpKTsKICAgICAgfQogICAgfQogICAgaWYgKGUucnVuID0gS24sIGUucHJlSW5pdCkgZm9yICh0eXBlb2YgZS5wcmVJbml0ID09ICJmdW5jdGlvbiIgJiYgKGUucHJlSW5pdCA9IFtlLnByZUluaXRdKTsgMCA8IGUucHJlSW5pdC5sZW5ndGg7ICkgZS5wcmVJbml0LnBvcCgpKCk7CiAgICByZXR1cm4gS24oKSwgby5yZWFkeTsKICB9Owp9KCk7CmNsYXNzIGogZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgaCkgewogICAgc3VwZXIoZSk7CiAgICBRbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IGg7CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiBqKQogICAgICByZXR1cm4gZTsKICAgIGxldCBoOwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIGggPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICBoID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgaCA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgaCA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgaCA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyBqKGgsIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgaikKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCBoID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgaihoKTsKICB9Cn0KY29uc3QgX2UgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfTsKdmFyIFosIHEsIGNuOwpjbGFzcyBDZSB7CiAgY29uc3RydWN0b3IobywgZSkgewogICAgV24odGhpcywgWik7CiAgICBXbih0aGlzLCBxKTsKICAgIFduKHRoaXMsIGNuKTsKICAgIGtuKHRoaXMsIFosIG8pLCBrbih0aGlzLCBxLCB0aGlzLmFsbG9jYXRlKGUubGVuZ3RoICogZS5CWVRFU19QRVJfRUxFTUVOVCkpLCBrbih0aGlzLCBjbiwgdGhpcy5hbGxvY2F0ZShlLmxlbmd0aCAqIGUuQllURVNfUEVSX0VMRU1FTlQpKTsKICB9CiAgZ2V0IHJnYmFJbWFnZVBvaW50ZXIoKSB7CiAgICByZXR1cm4gSCh0aGlzLCBxKTsKICB9CiAgZ2V0IGJncjBJbWFnZVBvaW50ZXIoKSB7CiAgICByZXR1cm4gSCh0aGlzLCBjbik7CiAgfQogIGFsbG9jYXRlKG8pIHsKICAgIHJldHVybiBIKHRoaXMsIFopLl9tYWxsb2Mobyk7CiAgfQogIGZyZWUoKSB7CiAgICBIKHRoaXMsIFopLl9mcmVlKEgodGhpcywgcSkpLCBIKHRoaXMsIFopLl9mcmVlKEgodGhpcywgY24pKTsKICB9CiAgd3JpdGVEYXRhVG9NZW1vcnkobykgewogICAgSCh0aGlzLCBaKS5IRUFQVTguc2V0KG8sIEgodGhpcywgcSkpOwogIH0KfQpaID0gbmV3IFdlYWtNYXAoKSwgcSA9IG5ldyBXZWFrTWFwKCksIGNuID0gbmV3IFdlYWtNYXAoKTsKY2xhc3MgVGUgewogIGNvbnN0cnVjdG9yKCkgewogICAgUW4odGhpcywgInNhbVdhc21Nb2R1bGUiKTsKICB9CiAgZ2V0T3ZlcnJpZGRlbk1vZHVsZXMobywgZSkgewogICAgcmV0dXJuIHsKICAgICAgbG9jYXRlRmlsZTogKGgpID0+IG5ldyBVUkwoZSB8fCBoLCBvKS5ocmVmCiAgICB9OwogIH0KICBhc3luYyBoYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKG8sIGUpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IGggPSBhd2FpdCBmZXRjaChvKTsKICAgICAgaWYgKCFoLm9rKQogICAgICAgIHRocm93IG5ldyBqKAogICAgICAgICAgYFRoZSBwYXRoIHRvICR7ZX0gaXMgaW5jb3JyZWN0IG9yIHRoZSBtb2R1bGUgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7b31gCiAgICAgICAgKTsKICAgICAgY29uc3QgZyA9IGF3YWl0IGguYXJyYXlCdWZmZXIoKTsKICAgICAgaWYgKCFXZWJBc3NlbWJseS52YWxpZGF0ZShnKSkKICAgICAgICB0aHJvdyBuZXcgaigKICAgICAgICAgIGBUaGUgcHJvdmlkZWQgJHtlfSBpcyBub3QgYSB2YWxpZCBXQVNNIG1vZHVsZS4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7b31gCiAgICAgICAgKTsKICAgIH0gY2F0Y2ggKGgpIHsKICAgICAgaWYgKGggaW5zdGFuY2VvZiBqKQogICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICAgICAiWW91IGNhbiBmaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIGhvc3Qgd2FzbSBmaWxlcyBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuaW5ub3ZhdHJpY3MuY29tL2RpZ2l0YWwtb25ib2FyZGluZy90ZWNobmljYWwvcmVtb3RlL2RvdC13ZWItZG9jdW1lbnQvbGF0ZXN0L2RvY3VtZW50YXRpb24vI19ob3N0aW5nX3NhbV93YXNtIgogICAgICAgICksIGg7CiAgICB9CiAgfQogIGFzeW5jIGdldFdhc21GaWxlTmFtZSgpIHsKICAgIHJldHVybiBhd2FpdCB3ZSgpID8gSHQuc2ltZCA6IEh0LnNhbTsKICB9CiAgYXN5bmMgaW5pdFNhbU1vZHVsZShvLCBlID0gIi93YXNtIikgewogICAgaWYgKHRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgcmV0dXJuOwogICAgY29uc3QgaCA9IGF3YWl0IHRoaXMuZ2V0V2FzbUZpbGVOYW1lKCksIGcgPSBgJHtlfS8ke2h9YDsKICAgIHRyeSB7CiAgICAgIHRoaXMuc2FtV2FzbU1vZHVsZSA9IGF3YWl0IEFlKHRoaXMuZ2V0T3ZlcnJpZGRlbk1vZHVsZXMobywgZykpOwogICAgfSBjYXRjaCB7CiAgICAgIHRocm93IGF3YWl0IHRoaXMuaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZShnLCBoKSwgbmV3IGooIkNvdWxkIG5vdCBpbml0IGRldGVjdG9yLiIpOwogICAgfQogIH0KICBhc3luYyBnZXRTYW1WZXJzaW9uKCkgewogICAgdmFyIGU7CiAgICBjb25zdCBvID0gYXdhaXQgKChlID0gdGhpcy5zYW1XYXNtTW9kdWxlKSA9PSBudWxsID8gdm9pZCAwIDogZS5nZXRJbmZvU3RyaW5nKCkpOwogICAgcmV0dXJuIG8gPT0gbnVsbCA/IHZvaWQgMCA6IG8udHJpbSgpOwogIH0KICAvKgogICAqIEluIFRTIDUuMi4wIHdhcyBhZGRlZCBzcGVjaWFsIGtleXdvcmQgInVzaW5nIiB3aGljaCBjb3VsZCBiZSBwZXJmZWN0IGZvciB0aGlzIGNhc2UuCiAgICogVW5mb3J0dW5hdGVseSwgdml0ZSBwcmVhY3QgcGx1Z2luIGRvZXMgbm90IHN1cHBvcnQgdGhpcyB2ZXJzaW9uIG9mIFRTIHlldC4KICAgKiBDaGVjayBwb3NzaWJpbGl0eSBvZiB1c2luZyAidXNpbmciIGtleXdvcmQgd2hlbiB2aXRlIHByZWFjdCBwbHVnaW4gdXBkYXRlcwogICAqLwogIHdyaXRlSW1hZ2VUb01lbW9yeShvKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IGooIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIGNvbnN0IGUgPSBuZXcgQ2UodGhpcy5zYW1XYXNtTW9kdWxlLCBvKTsKICAgIHJldHVybiBlLndyaXRlRGF0YVRvTWVtb3J5KG8pLCBlOwogIH0KICBjb252ZXJ0VG9TYW1Db2xvckltYWdlKG8sIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgaigiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgY29uc3QgaCA9IHRoaXMud3JpdGVJbWFnZVRvTWVtb3J5KG8pOwogICAgcmV0dXJuIHRoaXMuc2FtV2FzbU1vZHVsZS5jb252ZXJ0VG9TYW1Db2xvckltYWdlKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgaC5yZ2JhSW1hZ2VQb2ludGVyLAogICAgICBfZS5SR0JBLAogICAgICBoLmJncjBJbWFnZVBvaW50ZXIKICAgICksIGg7CiAgfQp9CmNvbnN0IEVlID0gKGEpID0+IE51bWJlci5wYXJzZUZsb2F0KGEudG9GaXhlZCgzKSksIFBlID0gKGEsIG8pID0+IE1hdGgubWluKGEsIG8pOwovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQwogKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMAogKi8KY29uc3QgRHQgPSBTeW1ib2woIkNvbWxpbmsucHJveHkiKSwgT2UgPSBTeW1ib2woIkNvbWxpbmsuZW5kcG9pbnQiKSwgYmUgPSBTeW1ib2woIkNvbWxpbmsucmVsZWFzZVByb3h5IiksIHFuID0gU3ltYm9sKCJDb21saW5rLmZpbmFsaXplciIpLCBJbiA9IFN5bWJvbCgiQ29tbGluay50aHJvd24iKSwgQnQgPSAoYSkgPT4gdHlwZW9mIGEgPT0gIm9iamVjdCIgJiYgYSAhPT0gbnVsbCB8fCB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iLCBTZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBCdChhKSAmJiBhW0R0XSwKICBzZXJpYWxpemUoYSkgewogICAgY29uc3QgeyBwb3J0MTogbywgcG9ydDI6IGUgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgcmV0dXJuIGV0KGEsIG8pLCBbZSwgW2VdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHJldHVybiBhLnN0YXJ0KCksIFJlKGEpOwogIH0KfSwgTWUgPSB7CiAgY2FuSGFuZGxlOiAoYSkgPT4gQnQoYSkgJiYgSW4gaW4gYSwKICBzZXJpYWxpemUoeyB2YWx1ZTogYSB9KSB7CiAgICBsZXQgbzsKICAgIHJldHVybiBhIGluc3RhbmNlb2YgRXJyb3IgPyBvID0gewogICAgICBpc0Vycm9yOiAhMCwKICAgICAgdmFsdWU6IHsKICAgICAgICBtZXNzYWdlOiBhLm1lc3NhZ2UsCiAgICAgICAgbmFtZTogYS5uYW1lLAogICAgICAgIHN0YWNrOiBhLnN0YWNrCiAgICAgIH0KICAgIH0gOiBvID0geyBpc0Vycm9yOiAhMSwgdmFsdWU6IGEgfSwgW28sIFtdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHRocm93IGEuaXNFcnJvciA/IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGEudmFsdWUubWVzc2FnZSksIGEudmFsdWUpIDogYS52YWx1ZTsKICB9Cn0sIHp0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoWwogIFsicHJveHkiLCBTZV0sCiAgWyJ0aHJvdyIsIE1lXQpdKTsKZnVuY3Rpb24gV2UoYSwgbykgewogIGZvciAoY29uc3QgZSBvZiBhKQogICAgaWYgKG8gPT09IGUgfHwgZSA9PT0gIioiIHx8IGUgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZS50ZXN0KG8pKQogICAgICByZXR1cm4gITA7CiAgcmV0dXJuICExOwp9CmZ1bmN0aW9uIGV0KGEsIG8gPSBnbG9iYWxUaGlzLCBlID0gWyIqIl0pIHsKICBvLmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBoKGcpIHsKICAgIGlmICghZyB8fCAhZy5kYXRhKQogICAgICByZXR1cm47CiAgICBpZiAoIVdlKGUsIGcub3JpZ2luKSkgewogICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgb3JpZ2luICcke2cub3JpZ2lufScgZm9yIGNvbWxpbmsgcHJveHlgKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgY29uc3QgeyBpZDogQywgdHlwZTogQSwgcGF0aDogTyB9ID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFtdIH0sIGcuZGF0YSksIGIgPSAoZy5kYXRhLmFyZ3VtZW50TGlzdCB8fCBbXSkubWFwKFEpOwogICAgbGV0IFQ7CiAgICB0cnkgewogICAgICBjb25zdCBfID0gTy5zbGljZSgwLCAtMSkucmVkdWNlKChFLCBNKSA9PiBFW01dLCBhKSwgUyA9IE8ucmVkdWNlKChFLCBNKSA9PiBFW01dLCBhKTsKICAgICAgc3dpdGNoIChBKSB7CiAgICAgICAgY2FzZSAiR0VUIjoKICAgICAgICAgIFQgPSBTOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiU0VUIjoKICAgICAgICAgIF9bTy5zbGljZSgtMSlbMF1dID0gUShnLmRhdGEudmFsdWUpLCBUID0gITA7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJBUFBMWSI6CiAgICAgICAgICBUID0gUy5hcHBseShfLCBiKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkNPTlNUUlVDVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IEUgPSBuZXcgUyguLi5iKTsKICAgICAgICAgICAgVCA9IExlKEUpOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiRU5EUE9JTlQiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCB7IHBvcnQxOiBFLCBwb3J0MjogTSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICAgICAgICAgIGV0KGEsIE0pLCBUID0gamUoRSwgW0VdKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlJFTEVBU0UiOgogICAgICAgICAgVCA9IHZvaWQgMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICByZXR1cm47CiAgICAgIH0KICAgIH0gY2F0Y2ggKF8pIHsKICAgICAgVCA9IHsgdmFsdWU6IF8sIFtJbl06IDAgfTsKICAgIH0KICAgIFByb21pc2UucmVzb2x2ZShUKS5jYXRjaCgoXykgPT4gKHsgdmFsdWU6IF8sIFtJbl06IDAgfSkpLnRoZW4oKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gam4oXyk7CiAgICAgIG8ucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBTKSwgeyBpZDogQyB9KSwgRSksIEEgPT09ICJSRUxFQVNFIiAmJiAoby5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgaCksIFZ0KG8pLCBxbiBpbiBhICYmIHR5cGVvZiBhW3FuXSA9PSAiZnVuY3Rpb24iICYmIGFbcW5dKCkpOwogICAgfSkuY2F0Y2goKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gam4oewogICAgICAgIHZhbHVlOiBuZXcgVHlwZUVycm9yKCJVbnNlcmlhbGl6YWJsZSByZXR1cm4gdmFsdWUiKSwKICAgICAgICBbSW5dOiAwCiAgICAgIH0pOwogICAgICBvLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUyksIHsgaWQ6IEMgfSksIEUpOwogICAgfSk7CiAgfSksIG8uc3RhcnQgJiYgby5zdGFydCgpOwp9CmZ1bmN0aW9uIGtlKGEpIHsKICByZXR1cm4gYS5jb25zdHJ1Y3Rvci5uYW1lID09PSAiTWVzc2FnZVBvcnQiOwp9CmZ1bmN0aW9uIFZ0KGEpIHsKICBrZShhKSAmJiBhLmNsb3NlKCk7Cn0KZnVuY3Rpb24gUmUoYSwgbykgewogIHJldHVybiB0dChhLCBbXSwgbyk7Cn0KZnVuY3Rpb24gUm4oYSkgewogIGlmIChhKQogICAgdGhyb3cgbmV3IEVycm9yKCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGUiKTsKfQpmdW5jdGlvbiBHdChhKSB7CiAgcmV0dXJuIHVuKGEsIHsKICAgIHR5cGU6ICJSRUxFQVNFIgogIH0pLnRoZW4oKCkgPT4gewogICAgVnQoYSk7CiAgfSk7Cn0KY29uc3QgeG4gPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgRm4gPSAiRmluYWxpemF0aW9uUmVnaXN0cnkiIGluIGdsb2JhbFRoaXMgJiYgbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChhKSA9PiB7CiAgY29uc3QgbyA9ICh4bi5nZXQoYSkgfHwgMCkgLSAxOwogIHhuLnNldChhLCBvKSwgbyA9PT0gMCAmJiBHdChhKTsKfSk7CmZ1bmN0aW9uIEllKGEsIG8pIHsKICBjb25zdCBlID0gKHhuLmdldChvKSB8fCAwKSArIDE7CiAgeG4uc2V0KG8sIGUpLCBGbiAmJiBGbi5yZWdpc3RlcihhLCBvLCBhKTsKfQpmdW5jdGlvbiB4ZShhKSB7CiAgRm4gJiYgRm4udW5yZWdpc3RlcihhKTsKfQpmdW5jdGlvbiB0dChhLCBvID0gW10sIGUgPSBmdW5jdGlvbigpIHsKfSkgewogIGxldCBoID0gITE7CiAgY29uc3QgZyA9IG5ldyBQcm94eShlLCB7CiAgICBnZXQoQywgQSkgewogICAgICBpZiAoUm4oaCksIEEgPT09IGJlKQogICAgICAgIHJldHVybiAoKSA9PiB7CiAgICAgICAgICB4ZShnKSwgR3QoYSksIGggPSAhMDsKICAgICAgICB9OwogICAgICBpZiAoQSA9PT0gInRoZW4iKSB7CiAgICAgICAgaWYgKG8ubGVuZ3RoID09PSAwKQogICAgICAgICAgcmV0dXJuIHsgdGhlbjogKCkgPT4gZyB9OwogICAgICAgIGNvbnN0IE8gPSB1bihhLCB7CiAgICAgICAgICB0eXBlOiAiR0VUIiwKICAgICAgICAgIHBhdGg6IG8ubWFwKChiKSA9PiBiLnRvU3RyaW5nKCkpCiAgICAgICAgfSkudGhlbihRKTsKICAgICAgICByZXR1cm4gTy50aGVuLmJpbmQoTyk7CiAgICAgIH0KICAgICAgcmV0dXJuIHR0KGEsIFsuLi5vLCBBXSk7CiAgICB9LAogICAgc2V0KEMsIEEsIE8pIHsKICAgICAgUm4oaCk7CiAgICAgIGNvbnN0IFtiLCBUXSA9IGpuKE8pOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJTRVQiLAogICAgICAgIHBhdGg6IFsuLi5vLCBBXS5tYXAoKF8pID0+IF8udG9TdHJpbmcoKSksCiAgICAgICAgdmFsdWU6IGIKICAgICAgfSwgVCkudGhlbihRKTsKICAgIH0sCiAgICBhcHBseShDLCBBLCBPKSB7CiAgICAgIFJuKGgpOwogICAgICBjb25zdCBiID0gb1tvLmxlbmd0aCAtIDFdOwogICAgICBpZiAoYiA9PT0gT2UpCiAgICAgICAgcmV0dXJuIHVuKGEsIHsKICAgICAgICAgIHR5cGU6ICJFTkRQT0lOVCIKICAgICAgICB9KS50aGVuKFEpOwogICAgICBpZiAoYiA9PT0gImJpbmQiKQogICAgICAgIHJldHVybiB0dChhLCBvLnNsaWNlKDAsIC0xKSk7CiAgICAgIGNvbnN0IFtULCBfXSA9IFV0KE8pOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJBUFBMWSIsCiAgICAgICAgcGF0aDogby5tYXAoKFMpID0+IFMudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIF8pLnRoZW4oUSk7CiAgICB9LAogICAgY29uc3RydWN0KEMsIEEpIHsKICAgICAgUm4oaCk7CiAgICAgIGNvbnN0IFtPLCBiXSA9IFV0KEEpOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJDT05TVFJVQ1QiLAogICAgICAgIHBhdGg6IG8ubWFwKChUKSA9PiBULnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogTwogICAgICB9LCBiKS50aGVuKFEpOwogICAgfQogIH0pOwogIHJldHVybiBJZShnLCBhKSwgZzsKfQpmdW5jdGlvbiBGZShhKSB7CiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGEpOwp9CmZ1bmN0aW9uIFV0KGEpIHsKICBjb25zdCBvID0gYS5tYXAoam4pOwogIHJldHVybiBbby5tYXAoKGUpID0+IGVbMF0pLCBGZShvLm1hcCgoZSkgPT4gZVsxXSkpXTsKfQpjb25zdCBZdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpOwpmdW5jdGlvbiBqZShhLCBvKSB7CiAgcmV0dXJuIFl0LnNldChhLCBvKSwgYTsKfQpmdW5jdGlvbiBMZShhKSB7CiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYSwgeyBbRHRdOiAhMCB9KTsKfQpmdW5jdGlvbiBqbihhKSB7CiAgZm9yIChjb25zdCBbbywgZV0gb2YgenQpCiAgICBpZiAoZS5jYW5IYW5kbGUoYSkpIHsKICAgICAgY29uc3QgW2gsIGddID0gZS5zZXJpYWxpemUoYSk7CiAgICAgIHJldHVybiBbCiAgICAgICAgewogICAgICAgICAgdHlwZTogIkhBTkRMRVIiLAogICAgICAgICAgbmFtZTogbywKICAgICAgICAgIHZhbHVlOiBoCiAgICAgICAgfSwKICAgICAgICBnCiAgICAgIF07CiAgICB9CiAgcmV0dXJuIFsKICAgIHsKICAgICAgdHlwZTogIlJBVyIsCiAgICAgIHZhbHVlOiBhCiAgICB9LAogICAgWXQuZ2V0KGEpIHx8IFtdCiAgXTsKfQpmdW5jdGlvbiBRKGEpIHsKICBzd2l0Y2ggKGEudHlwZSkgewogICAgY2FzZSAiSEFORExFUiI6CiAgICAgIHJldHVybiB6dC5nZXQoYS5uYW1lKS5kZXNlcmlhbGl6ZShhLnZhbHVlKTsKICAgIGNhc2UgIlJBVyI6CiAgICAgIHJldHVybiBhLnZhbHVlOwogIH0KfQpmdW5jdGlvbiB1bihhLCBvLCBlKSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChoKSA9PiB7CiAgICBjb25zdCBnID0gTmUoKTsKICAgIGEuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIEMoQSkgewogICAgICAhQS5kYXRhIHx8ICFBLmRhdGEuaWQgfHwgQS5kYXRhLmlkICE9PSBnIHx8IChhLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBDKSwgaChBLmRhdGEpKTsKICAgIH0pLCBhLnN0YXJ0ICYmIGEuc3RhcnQoKSwgYS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHsgaWQ6IGcgfSwgbyksIGUpOwogIH0pOwp9CmZ1bmN0aW9uIE5lKCkgewogIHJldHVybiBuZXcgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpLnRvU3RyaW5nKDE2KSkuam9pbigiLSIpOwp9CmZ1bmN0aW9uIFp0KGEsIG8pIHsKICByZXR1cm4gTWF0aC5zcXJ0KChhLnggLSBvLngpICoqIDIgKyAoYS55IC0gby55KSAqKiAyKTsKfQpmdW5jdGlvbiBIZShhLCBvKSB7CiAgcmV0dXJuIHsKICAgIHg6IChhLnggKyBvLngpIC8gMiwKICAgIHk6IChhLnkgKyBvLnkpIC8gMgogIH07Cn0KZnVuY3Rpb24gVWUoYSwgbykgewogIGlmIChhLmNvbmZpZGVuY2UgPD0gMCB8fCBvLmNvbmZpZGVuY2UgPD0gMCkKICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTsKICBjb25zdCBlID0gWnQoYS5jZW50ZXIsIG8uY2VudGVyKSwgaCA9IEhlKGEuY2VudGVyLCBvLmNlbnRlcik7CiAgcmV0dXJuIHsKICAgIHg6IGgueCwKICAgIHk6IGgueSArIGUgLyA0CiAgICAvLyBjYWxjdWxhdGlvbiBpcyB0YWtlbiBmcm9tIG1vYmlsZSB0ZWFtCiAgfTsKfQpmdW5jdGlvbiBEZShhLCBvLCBlKSB7CiAgaWYgKGEuY29uZmlkZW5jZSA8PSAwIHx8IG8uY29uZmlkZW5jZSA8PSAwKQogICAgcmV0dXJuIDA7CiAgY29uc3QgaCA9IFp0KGEuY2VudGVyLCBvLmNlbnRlciksIGcgPSBQZShlLndpZHRoLCBlLmhlaWdodCk7CiAgcmV0dXJuIEVlKGggLyBnKTsKfQpmdW5jdGlvbiBudChhKSB7CiAgY29uc3QgeyBjZW50ZXJYOiBvLCBjZW50ZXJZOiBlLCBjb25maWRlbmNlOiBoLCBzaXplOiBnLCBzdGF0dXM6IEMgfSA9IGE7CiAgcmV0dXJuIHsKICAgIGNlbnRlcjogewogICAgICB4OiBvLAogICAgICB5OiBlCiAgICB9LAogICAgY29uZmlkZW5jZTogaCAvIDFlMywKICAgIHN0YXR1czogQyAvIDFlMywKICAgIHNpemU6IGcKICB9Owp9CmNsYXNzIEJlIGV4dGVuZHMgVGUgewogIHBhcnNlUmF3RGF0YShvLCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IGgsIHNoYXJwbmVzczogZyB9ID0gby5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBDLCBib3R0b21SaWdodFk6IEEsIGxlZnRFeWU6IE8sIG1vdXRoOiBiLCByaWdodEV5ZTogVCwgdG9wTGVmdFg6IF8sIHRvcExlZnRZOiBTIH0gPSBvLCBFID0gbnQoTyksIE0gPSBudChUKSwgVSA9IG50KGIpOwogICAgcmV0dXJuIHsKICAgICAgY29uZmlkZW5jZTogby5jb25maWRlbmNlIC8gMWUzLAogICAgICB0b3BMZWZ0OiB7CiAgICAgICAgeDogXywKICAgICAgICB5OiBTCiAgICAgIH0sCiAgICAgIGJvdHRvbVJpZ2h0OiB7CiAgICAgICAgeDogQywKICAgICAgICB5OiBBCiAgICAgIH0sCiAgICAgIGZhY2VDZW50ZXI6IFVlKEUsIE0pLAogICAgICBmYWNlU2l6ZTogRGUoRSwgTSwgZSksCiAgICAgIGxlZnRFeWU6IEUsCiAgICAgIHJpZ2h0RXllOiBNLAogICAgICBtb3V0aDogVSwKICAgICAgYnJpZ2h0bmVzczogaCAvIDFlMywKICAgICAgc2hhcnBuZXNzOiBnIC8gMWUzCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QobywgZSwgaCkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBqKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBnID0gdGhpcy5jb252ZXJ0VG9TYW1Db2xvckltYWdlKG8sIGUpLCBDID0gdGhpcy5zYW1XYXNtTW9kdWxlLmRldGVjdEZhY2VQYXJ0c1dpdGhJbWFnZVBhcmFtZXRlcnMoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLmJncjBJbWFnZVBvaW50ZXIsCiAgICAgIDAsCiAgICAgIDAsCiAgICAgIC8vIHBhcmFtV2lkdGggc2hvdWxkIGJlIDAgKGRlZmF1bHQgdmFsdWUpCiAgICAgIDAKICAgICAgLy8gcGFyYW1IZWlnaHQgc2hvdWxkIGJlIDAgKGRlZmF1bHQgdmFsdWUpCiAgICApOwogICAgcmV0dXJuIGcuZnJlZSgpLCB0aGlzLnBhcnNlUmF3RGF0YShDLCBoKTsKICB9Cn0KZXQoQmUpOwo=", zI = (x) => Uint8Array.from(atob(x), (i) => i.charCodeAt(0)), us = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", zI(Bg)], { type: "text/javascript;charset=utf-8" });
function qI(x) {
  let i;
  try {
    if (i = us && (window.URL || window.webkitURL).createObjectURL(us), !i) throw "";
    const t = new Worker(i, {
      type: "module",
      name: x == null ? void 0 : x.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(i);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Bg,
      {
        type: "module",
        name: x == null ? void 0 : x.name
      }
    );
  }
}
class $I extends VI {
  constructor(t, e) {
    super();
    V(this, "className", "FaceImageProcessor");
    V(this, "detector");
    V(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = Ux(t), n = $l(t, e);
    return super.optimizeImageBeforeDetection(n);
  }
  async process({ image: t, timestamp: e }) {
    const n = this.optimizeImageBeforeDetection(t), o = {};
    o.height = t.height, o.width = t.width;
    let r = await this.detector.detect(n.data, n.resolution, o);
    r = B1(r, Ux(t));
    const s = {};
    return s.detectedObject = r, s.image = t, s.imageData = n.data, s.timestamp = e, this.processDetectedObject(s);
  }
}
var D0, a0, s0;
class ef {
  constructor(i) {
    ne(this, D0);
    ne(this, a0);
    ne(this, s0);
    $(this, D0, i), $(this, a0, /* @__PURE__ */ new Map());
  }
  validate() {
    L(this, D0).forEach((i) => {
      L(this, a0).set(i.name, i.evaluate());
    }), $(this, s0, void (-1405 + 83 * -103 + -1106 * -9));
  }
  isValid() {
    return L(this, s0) === void (-3834 + -1 * -4557 + -723 * 1) && $(this, s0, Array.from(L(this, a0).values()).every((i) => i)), L(this, s0);
  }
  get result() {
    return L(this, a0);
  }
  get validators() {
    return L(this, D0);
  }
}
D0 = new WeakMap(), a0 = new WeakMap(), s0 = new WeakMap();
var Zn, c0;
class ze {
  constructor(i, t) {
    ne(this, Zn);
    ne(this, c0);
    $(this, Zn, i), $(this, c0, t);
  }
  get threshold() {
    return L(this, c0);
  }
  get name() {
    return L(this, Zn);
  }
  isValueBelowThreshold(i) {
    return i < L(this, c0);
  }
  isValueAboveThreshold(i) {
    return i > L(this, c0);
  }
}
Zn = new WeakMap(), c0 = new WeakMap();
const tf = "isNotDim";
var Hn;
class nf extends ze {
  constructor(t, e) {
    super(tf, t);
    ne(this, Hn);
    $(this, Hn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Hn));
  }
}
Hn = new WeakMap();
const xf = "isNotSmall";
var Rn;
class of extends ze {
  constructor(t, e) {
    super(xf, t);
    ne(this, Rn);
    $(this, Rn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Rn));
  }
}
Rn = new WeakMap();
const rf = "isNotBright";
var Kn;
class af extends ze {
  constructor(t, e) {
    super(rf, t);
    ne(this, Kn);
    $(this, Kn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, Kn));
  }
}
Kn = new WeakMap();
const sf = "isPresent";
var Pn;
class cf extends ze {
  constructor(t, e) {
    super(sf, t);
    ne(this, Pn);
    $(this, Pn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Pn));
  }
}
Pn = new WeakMap();
const gf = "isSharp";
var Tn;
class df extends ze {
  constructor(t, e) {
    super(gf, t);
    ne(this, Tn);
    $(this, Tn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Tn));
  }
}
Tn = new WeakMap();
const uf = "isLeftEyePresent";
var Vn;
class lf extends ze {
  constructor(t, e) {
    super(uf, t);
    ne(this, Vn);
    $(this, Vn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Vn));
  }
}
Vn = new WeakMap();
const If = "isMouthPresent";
var En;
class ff extends ze {
  constructor(t, e) {
    super(If, t);
    ne(this, En);
    $(this, En, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, En));
  }
}
En = new WeakMap();
const Cf = "isMouthScoreNotTooLow";
var Ln;
class pf extends ze {
  constructor(t, e) {
    super(Cf, t);
    ne(this, Ln);
    $(this, Ln, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Ln));
  }
}
Ln = new WeakMap();
const hf = "isMouthScoreNotTooHigh";
var Dn;
class mf extends ze {
  constructor(t, e) {
    super(hf, t);
    ne(this, Dn);
    $(this, Dn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, Dn));
  }
}
Dn = new WeakMap();
const bf = "isNotLarge";
var Nn;
class Af extends ze {
  constructor(t, e) {
    super(bf, t);
    ne(this, Nn);
    $(this, Nn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, Nn));
  }
}
Nn = new WeakMap();
const yf = "isNotPitched";
var Fn;
const Wr = class Wr extends ze {
  constructor(t, e) {
    super(yf, Wr.calculatePitchAngleAccelerationThreshold(t));
    ne(this, Fn);
    $(this, Fn, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return wl * Math.sin(t * (Math.PI / (-1 * 8551 + -3102 + 1 * 11833)));
  }
  evaluate() {
    const { z: t } = L(this, Fn) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
Fn = new WeakMap();
let _o = Wr;
const vf = "isRightEyePresent";
var Yn;
class Wf extends ze {
  constructor(t, e) {
    super(vf, t);
    ne(this, Yn);
    $(this, Yn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Yn));
  }
}
Yn = new WeakMap();
const Sf = "isNotOutOfBounds";
var Mn, g0;
class wf extends ze {
  constructor(t, e, n) {
    super(Sf, t);
    ne(this, Mn);
    ne(this, g0);
    $(this, Mn, e), $(this, g0, n);
  }
  evaluate() {
    const t = zc(L(this, g0), this.threshold, Ux(L(this, g0))), e = qc(L(this, Mn), L(this, g0));
    return w1(e, t);
  }
}
Mn = new WeakMap(), g0 = new WeakMap();
class Bf {
  static getFaceValidationInstance(i, t, e, n) {
    return new ef([new cf(i.faceConfidence, t.confidence), new lf(i.leftEye.confidence, t.leftEye.confidence), new Wf(i.rightEye.confidence, t.rightEye.confidence), new of(i.minFaceSizeRatio, t.faceSize), new Af(i.maxFaceSizeRatio, t.faceSize), new df(i.sharpnessThreshold, t.sharpness), new nf(i.brightnessLowThreshold, t.brightness), new af(i.brightnessHighThreshold, t.brightness), new wf(i.outOfBoundsThreshold, t, e), new _o(i.devicePitchAngleThreshold, n), new ff(i.mouth.confidence, t.mouth.confidence), new mf(i.mouth.status.max, t.mouth.status), new pf(i.mouth.status.min, t.mouth.status)]);
  }
}
class kf extends EI {
  constructor() {
    super(...arguments);
    V(this, "className", "FaceValidationService");
    V(this, "acceleration", null);
  }
  validateDetectedObject(t, e) {
    const n = Bf.getFaceValidationInstance(this.getThresholds(), t, e, this.acceleration);
    return n.validate(), n;
  }
}
const ci = class ci extends TI {
  constructor(t, e, n, o) {
    super(n, o);
    V(this, "detector");
    V(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  static async createInstance(t) {
    const e = new qI(), n = Wg(e), o = await new n(), r = new kf(), s = new $I(o, r), a = new ci(o, r, s, t);
    this._instance = a;
  }
  static async getInstance(t) {
    return !this._instance && await this.createInstance(t), this._instance;
  }
  stopDetectionLoop() {
    var t;
    super.stopDetectionLoop(), eg(Mt.INSTRUCTION_CHANGED, (t = this.detection) == null ? void 0 : t["fallbackInstruction"], o1);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
};
V(ci, "_instance");
let Jo = ci;
const Gf = () => {
  const { handleError: x } = $0(), { acceleration: i } = z1(), { thresholds: t, wasmDirectoryPath: e } = pr(), [n, o] = Xe();
  de(() => {
    (async () => {
      const a = await Jo.getInstance(e);
      try {
        await a.init(), o(a);
      } catch (c) {
        if (c instanceof Error) {
          x(xe.fromError(c));
          return;
        }
      }
    })();
  }, [x, e]), de(() => {
    n && n.setThresholds(t);
  }, [n, t]), de(() => {
    n && n.setAcceleration(i);
  }, [i, n]);
  const r = {};
  return r.controller = n, r;
};
function Of({ onPhotoTakenInternal: x }) {
  const { cameraFacing: i, captureMode: t, onPhotoTaken: e, sessionToken: n } = pr(), { controller: o } = Gf(), r = Kt(({ candidateSelectionImages: c, imageData: d, protoMessage: g, webMetadata: C }) => {
    N1(Sc.FACE, c), e(d, g);
    const u = {};
    u.cameraProperties = C, x == null || x(u);
  }, [x, e]), s = Kt(({ fps: c, processedImage: d }, g) => {
    eg(Mt.INSTRUCTION_CHANGED, d.instructionCode), o && L1(Mt.DETECTED_FACE_CHANGED, d.detection, o.imageProcessor.validationService.getThresholds().faceConfidence);
    const C = {};
    C.detection = d.detection, C.fps = c, C.image = g, C.isInCandidateSelection = d.isInCandidateSelection, C.invalidValidators = d.invalidValidators, D1(Mt.FACE_DETECTION, C);
  }, [o]), a = {};
  return a.captureMode = t, a.cameraFacing = i, a.controller = o, a.createProtoMessage = PI, a.onCapture = r, a.onDetection = s, a.sessionToken = n, a.customEvent = Mt, a.fallbackInstruction = Ae.FACE_NOT_PRESENT, a.instructionCodeMap = Ae, a.checkToInstructionCodeMap = xl, sI(a);
}
const Zf = ({ onPhotoTakenInternal: x }) => {
  const { sunfish: i } = _n(), { cameraResolution: t, detectionDetails: e, shouldCameraMirror: n, videoRef: o } = Of({
    onPhotoTakenInternal: x
  });
  return /* @__PURE__ */ G(ot, { children: /* @__PURE__ */ G(
    T1,
    {
      cameraResolution: t,
      detectionDetails: e,
      shouldMirror: n,
      children: /* @__PURE__ */ G(
        $u,
        {
          ref: o,
          $isImageMirror: n,
          $isVisible: i,
          autoPlay: !0,
          id: r1,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}, Hf = ({ onPhotoTakenInternal: x, ...i }) => /* @__PURE__ */ G(n1, { cameraOptions: i, children: /* @__PURE__ */ G(Zf, { onPhotoTakenInternal: x }) }), Rf = ({ children: x }) => {
  const i = ut(null);
  return U1(i, Mt.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ G(qu, { ref: i, children: x });
}, Uo = {};
Uo.minFaceSizeRatio = 0.135, Uo.maxFaceSizeRatio = 0.21;
const kg = {};
kg.faceConfidence = 1;
const Ft = {};
Ft.minFaceSizeRatio = 0.3, Ft.maxFaceSizeRatio = 1, Ft.brightnessHighThreshold = 1, Ft.brightnessLowThreshold = -1, Ft.faceConfidence = 0.15, Ft.sharpnessThreshold = -1, Ft.outOfBoundsThreshold = -(9204 + -2 * 2817 + -3569 * 1);
const Kf = { [Ue.DISTANT]: Uo, [Ue.MIDDLE]: kg, [Ue.CLOSEUP]: Ft }, Pf = Kf, ls = 6372 + -283 * -29 + 61 * -239 + 0.255;
async function Tf(x, i) {
  const { MagnifEyeLivenessContent: t } = p0.v4, e = await Promise.all(x.map(async (d) => fg(d))), n = await Cg(i), o = {};
  o.images = e, o.metadata = n;
  const r = o, s = t.verify(r);
  if (s) throw Error(s);
  const a = t.create(r), c = {};
  return c.magnifeyeLivenessContent = a, hg(c);
}
async function Vf(x, i) {
  const t = x.map((n) => n.image), e = await Tf(t, i);
  return pg(e);
}
function Ef(x, i) {
  const t = Ja(x.faceSize, ls);
  return Ja(i.faceSize, ls) < t;
}
const Lf = (x, i) => {
  const t = en(void 0), e = (o) => {
    if (!(!o.detail || x !== o0.RUNNING || i !== Ue.CLOSEUP)) {
      if (!t.value) {
        t.value = o.detail;
        return;
      }
      Ef(t.value.data.detection, o.detail.data.detection) && (t.value = o.detail);
    }
  };
  Dc(Mt.FACE_DETECTION, e);
  const n = {};
  return n.middleImageBestCandidate = t, n;
}, Df = q0.div`
  ${(x) => x.$isSecondStep && fc`
      transition: all 1.5s ease-in-out;
      transform: translate(16%, 5%) scale(2);
      transition-delay: 1.5s;
    `}
`, Nf = ({
  licensePath: x,
  onComplete: i,
  sessionToken: t,
  wasmDirectoryPath: e
}) => {
  const { analytics: n } = vc(), { appState: o, handleAppStateChange: r, handleError: s, magnifEyePhase: a, setMagnifEyePhase: c } = ol(), { cameraProperties: d, mergeCameraProperties: g } = Ql(), C = en([]), { middleImageBestCandidate: u } = Lf(o, a), p = zl(Sn.ANIMATION_END);
  function m(D) {
    C.value = [...C.value, D];
  }
  function A(D) {
    c(D), Fo(Sn.STATUS_CHANGED, { phase: D });
  }
  function l(D) {
    m(D), A(Ue.MIDDLE);
  }
  p.value && A(Ue.CLOSEUP);
  async function W(D) {
    if (u.value) {
      const _ = { image: await Nc(u.value.image), data: u.value.data };
      m(_);
    }
    m(D);
    try {
      const Y = {
        sessionToken: t,
        web: d.value
      }, _ = await Vf(C.value, Y), [H] = C.value;
      i(H, _), n == null || n.trackLivenessProcess(C.value);
    } catch (Y) {
      Y instanceof Error && s(xe.fromError(Y));
      return;
    }
    r(o0.DONE);
  }
  const O = {
    [Ue.DISTANT]: l,
    /**
     * we don't care about onPhotoTaken in MIDDLE phase, because faceConfidence = 1
     */
    [Ue.MIDDLE]: () => {
    },
    [Ue.CLOSEUP]: W
  };
  return /* @__PURE__ */ G(Rf, { children: /* @__PURE__ */ G(Df, { $isSecondStep: a !== Ue.DISTANT, children: /* @__PURE__ */ G(
    Hf,
    {
      licensePath: x,
      onPhotoTaken: O[a],
      onPhotoTakenInternal: g,
      thresholds: Pf[a],
      wasmDirectoryPath: e
    }
  ) }) });
};
function Ff({ initAppState: x, onError: i }) {
  const [t, e] = Xe(x), [n, o] = Xe(), [r, s] = Xe(!1), a = ut(i);
  de(() => {
    a.current = i;
  }, [i]);
  const c = {};
  return c.appState = t, c.setAppState = e, c.error = n, c.setError = o, c.isCameraReady = r, c.setIsCameraReady = s, c.onErrorRef = a, c;
}
function Yf(x, i) {
  return i !== Ue.DISTANT ? bn.HIDDEN : x !== o0.RUNNING ? bn.VISIBLE : bn.VISIBLE_WITH_MASK;
}
function Mf({
  onError: x
}) {
  const { appState: i, error: t, isCameraReady: e, onErrorRef: n, setAppState: o, setError: r, setIsCameraReady: s } = Ff({
    initAppState: o0.LOADING,
    onError: x
  }), [a, c] = Xe(Ue.DISTANT), d = Yf(i, a), g = Kt(
    (u) => {
      Fo(Sn.STATUS_CHANGED, { state: o0.ERROR, error: u }), s(!1), n.current(u), r(u), o(o0.ERROR);
    },
    [s, n, r, o]
  ), C = Kt(
    (u) => {
      u !== o0.WAITING && (o(u), Fo(Sn.STATUS_CHANGED, { state: u }));
    },
    [o]
  );
  return {
    appState: i,
    magnifEyePhase: a,
    setMagnifEyePhase: c,
    freemiumOverlayState: d,
    isCameraReady: e,
    setIsCameraReady: s,
    handleAppStateChange: C,
    handleError: g,
    error: t
  };
}
var Gg = ((x) => (x.AUTO_CAPTURE = "auto-capture", x.LONG_CAPTURE_SMILE = "long-capture-smile", x))(Gg || {});
class Xf {
  constructor() {
    V(this, "appKey", "");
    V(this, "deviceId", "");
  }
  async countlyFetch(i) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const n = e, o = "https://innovatrics.count.ly/i?", r = {};
    r.app_key = this.appKey, r.device_id = this.deviceId;
    const s = fx(r);
    try {
      await fetch("" + o + s + "&" + i, n);
    } catch (a) {
      console.error("Countly Error", a);
    }
  }
  async init(i, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = i;
    const e = { _app_version: Uc() }, n = { organization: Qc(window.location.href) }, o = fx({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(o);
  }
  async endSession() {
    const i = {};
    i.end_session = "1";
    const t = fx(i);
    await this.countlyFetch(t);
  }
  async sendEvent(i, t, e) {
    const n = {};
    n.key = i, n.count = 1, n.dur = e, n.segmentation = t;
    const o = [n], r = fx({ events: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
  async sendAutoCaptureEvent(i, t) {
    await this.sendEvent(Gg.AUTO_CAPTURE, i, t);
  }
}
const px = new Xf();
class jf {
  constructor() {
    V(this, "countly", px);
  }
  createSegmentation(i) {
    return { appVersion: Uc(), ...i };
  }
  init(i) {
    if (A1()) return;
    const t = eI();
    px.init(t, i);
  }
  endSession() {
    px.endSession();
  }
  walleye(i, t) {
    const e = {};
    e.nocturne = i, e.customer = t;
    const n = this.createSegmentation(e);
    px.sendAutoCaptureEvent(n);
  }
}
class _f extends jf {
  constructor() {
    super(...arguments);
    V(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(t) {
    this.captureProcessAnalytics.push(t);
  }
  reset() {
    this.captureProcessAnalytics = [];
  }
}
class Jf extends _f {
  trackLivenessProcess(i) {
    var g, C, u, p, m, A, l, W, O, D;
    if (!i.length || !this.captureProcessAnalytics.length) return;
    const [t, e, n] = i, [o, r] = this.captureProcessAnalytics, s = nI(o.averageFps + (r == null ? void 0 : r.averageFps)) / (-8535 + -4 * -2462 + 69 * -19), a = Qa(o.captureProcessDurationInMs), c = Qa(r == null ? void 0 : r["captureProcessDurationInMs"]), d = this.createSegmentation({ faceSizeDistant: R0((g = t.data.detection) == null ? void 0 : g.faceSize), faceSizeCloseup: R0((C = n == null ? void 0 : n.data.detection) == null ? void 0 : C.faceSize), faceSizeMiddle: R0((u = e.data.detection) == null ? void 0 : u.faceSize), confidenceDistant: R0((p = t.data.detection) == null ? void 0 : p.confidence), confidenceCloseup: R0((m = n == null ? void 0 : n.data.detection) == null ? void 0 : m.confidence), confidenceMiddle: R0((A = e.data.detection) == null ? void 0 : A.confidence), imageResolution: ((W = (l = t.data) == null ? void 0 : l["imageResolution"]) == null ? void 0 : W.width) + "x" + ((D = (O = t.data) == null ? void 0 : O["imageResolution"]) == null ? void 0 : D.height), averageFps: s, captureTimeCloseup: c > 45 ? ">45" : "" + c, captureTimeDistant: a > -10994 + 16 * 689 ? ">30" : "" + a, camera: tI(o == null ? void 0 : o.deviceName, o == null ? void 0 : o.facingMode), instructionSet: o.instructionSet });
    this.countly.sendAutoCaptureEvent(d, a + c), this.reset();
  }
}
const Uf = new Jf(), Qf = ({ props: x }) => x ? /* @__PURE__ */ G(ju, { target: x.styleTarget, children: /* @__PURE__ */ G(
  ll,
  {
    licensePath: x.licensePath,
    bramble: Po.getInstance(),
    wasmDirectoryPath: x.wasmDirectoryPath,
    children: /* @__PURE__ */ G(Cl, { analytics: Uf, appKey: "d5ca54dabfb1a2c72d7090c9c8980252a879da44", children: /* @__PURE__ */ G(
      il,
      {
        value: Mf({
          onError: x.onError
        }),
        children: /* @__PURE__ */ G(yc, { children: /* @__PURE__ */ G(Nf, { ...x }) })
      }
    ) })
  }
) }) : null;
xd(Qf, "x-dot-magnifeye-liveness", ["props"]);
