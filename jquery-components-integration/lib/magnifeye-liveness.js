var Yg = Object.defineProperty;
var Qr = (x) => {
  throw TypeError(x);
};
var Mg = (x, i, t) => i in x ? Yg(x, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[i] = t;
var E = (x, i, t) => Mg(x, typeof i != "symbol" ? i + "" : i, t), zr = (x, i, t) => i.has(x) || Qr("Cannot " + t);
var L = (x, i, t) => (zr(x, i, "read from private field"), t ? t.call(x) : i.get(x)), ne = (x, i, t) => i.has(x) ? Qr("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(x) : i.set(x, t), $ = (x, i, t, e) => (zr(x, i, "write to private field"), e ? e.call(x, t) : i.set(x, t), t);
var Xn, M, ps, hs, n0, qr, ms, io, Uo, oo, ro, bs, Sn = {}, As = [], jg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ui = Array.isArray;
function Kt(x, i) {
  for (var t in i) x[t] = i[t];
  return x;
}
function ys(x) {
  var i = x.parentNode;
  i && i.removeChild(x);
}
function Ee(x, i, t) {
  var e, n, o, r = {};
  for (o in i) o == "key" ? e = i[o] : o == "ref" ? n = i[o] : r[o] = i[o];
  if (arguments.length > -6985 + -137 * -51 && (r.children = arguments.length > -333 * -23 + -1043 + -6613 ? Xn.call(arguments, 2) : t), typeof x == "function" && x.defaultProps != null)
    for (o in x.defaultProps) r[o] === void 0 && (r[o] = x.defaultProps[o]);
  return mn(x, r, e, n, null);
}
function mn(x, i, t, e, n) {
  var o = {};
  o.type = x, o.props = i, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__d = void (271 * -25 + 13 * -108 + 8179), o.__c = null, o.constructor = void (-28 * 88 + -5494 + 7958), o.__v = n ?? ++ps, o.__i = -(-33 * -205 + -1033 * -9 + -16061), o.__u = 0;
  var r = o;
  return n == null && M.vnode != null && M.vnode(r), r;
}
function Xg() {
  var x = {};
  return x.current = null, x;
}
function rt(x) {
  return x.children;
}
function it(x, i) {
  this.props = x, this.context = i;
}
function I0(x, i) {
  if (i == null) return x.__ ? I0(x.__, x.__i + 1) : null;
  for (var t; i < x.__k.length; i++) if ((t = x.__k[i]) != null && t.__e != null) return t.__e;
  return typeof x.type == "function" ? I0(x) : null;
}
function Ws(x) {
  var i, t;
  if ((x = x.__) != null && x.__c != null) {
    for (x.__e = x.__c.base = null, i = -3366 * -1 + -1 * 1044 + -2322 * 1; i < x.__k.length; i++) if ((t = x.__k[i]) != null && t.__e != null) {
      x.__e = x.__c.base = t.__e;
      break;
    }
    return Ws(x);
  }
}
function ao(x) {
  (!x.__d && (x.__d = !(-1 * 2557 + -70 * 11 + 1109 * 3)) && n0.push(x) && !Kx.__r++ || qr !== M.debounceRendering) && ((qr = M.debounceRendering) || ms)(Kx);
}
function Kx() {
  var x, i, t, e, n, o, r, a;
  for (n0.sort(io); x = n0.shift(); ) x.__d && (i = n0.length, e = void (16 * -464 + -5550 + 12974), o = (n = (t = x).__v).__e, r = [], a = [], t.__P && ((e = Kt({}, n)).__v = n.__v + (6417 + -73 * -47 + -9847 * 1), M.vnode && M.vnode(e), Qo(t.__P, e, n, t.__n, t.__P.namespaceURI, 386 * 13 + -2 * -2137 + -4630 * 2 & n.__u ? [o] : null, r, o ?? I0(n), !!(32 & n.__u), a), e.__v = n.__v, e.__.__k[e.__i] = e, ws(r, e, a), e.__e != o && Ws(e)), n0.length > i && n0.sort(io));
  Kx.__r = 3943 * 1 + -9739 + -23 * -252;
}
function vs(x, i, t, e, n, o, r, a, s, c, d) {
  var g, C, u, p, m, A = e && e.__k || As, l = i.length;
  for (t.__d = s, _g(t, i, A), s = t.__d, g = 1 * 4358 + 1144 * 4 + -8934; g < l; g++) (u = t.__k[g]) != null && typeof u != "boolean" && typeof u != "function" && (C = u.__i === -1 ? Sn : A[u.__i] || Sn, u.__i = g, Qo(x, u, C, n, o, r, a, s, c, d), p = u.__e, u.ref && C.ref != u.ref && (C.ref && zo(C.ref, null, u), d.push(u.ref, u.__c || p, u)), m == null && p != null && (m = p), -2459 * 25 + 353 * -317 + 4 * 59728 & u.__u || C.__k === u.__k ? (s && typeof u.type == "string" && !x.contains(s) && (s = I0(C)), s = Ss(u, s, x)) : typeof u.type == "function" && void (6455 + -419 * -3 + -7712) !== u.__d ? s = u.__d : p && (s = p.nextSibling), u.__d = void (1 * 22 + 4015 + 4037 * -1), u.__u &= -(1 * 152501 + 41703 * -1 + 85811));
  t.__d = s, t.__e = m;
}
function _g(x, i, t) {
  var e, n, o, r, a, s = i.length, c = t.length, d = c, g = 3622 + -1 * -8623 + -12245;
  for (x.__k = [], e = 4 * 1693 + -113 * -13 + -8241; e < s; e++) r = e + g, (n = x.__k[e] = (n = i[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? mn(null, n, null, null, null) : ui(n) ? mn(rt, { children: n }, null, null, null) : void (-8163 + 1 * -6953 + 15116) === n.constructor && n.__b > -5507 + -1387 * -7 + -4202 ? mn(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = x, n.__b = x.__b + (5539 + -2 * -2885 + -2 * 5654), a = Jg(n, t, r, d), n.__i = a, o = null, -(2941 * -2 + 316 * 8 + -61 * -55) !== a && (d--, (o = t[a]) && (o.__u |= 131072)), o == null || o.__v === null ? (a == -1 && g--, typeof n.type != "function" && (n.__u |= 65536)) : a !== r && (a == r - (-889 * -7 + -5195 + 13 * -79) ? g = a - r : a == r + (-78 + 2 * 4007 + -345 * 23) ? g++ : a > r ? d > s - r ? g += a - r : g-- : a < r && g++, a !== e + g && (n.__u |= -6 * -13441 + -5199 + -9911))) : (o = t[r]) && o.key == null && o.__e && -18 * 267 + -11 * 742 + 12968 == (-215457 + 1 * 346529 & o.__u) && (o.__e == x.__d && (x.__d = I0(o)), so(o, o, !(5267 + -7923 * 1 + -2657 * -1)), t[r] = null, d--);
  if (d)
    for (e = -38 * -239 + 2 * 4263 + -17608; e < c; e++) (o = t[e]) != null && 1301 * 5 + 6005 + 2085 * -6 == (-227777 + -1489 * -241 & o.__u) && (o.__e == x.__d && (x.__d = I0(o)), so(o, o));
}
function Ss(x, i, t) {
  var e, n;
  if (typeof x.type == "function") {
    for (e = x.__k, n = 0; e && n < e.length; n++) e[n] && (e[n].__ = x, i = Ss(e[n], i, t));
    return i;
  }
  x.__e != i && (t.insertBefore(x.__e, i || null), i = x.__e);
  do
    i = i && i.nextSibling;
  while (i != null && -9561 + -1 * 3457 + 13 * 1002 === i.nodeType);
  return i;
}
function Pt(x, i) {
  return i = i || [], x == null || typeof x == "boolean" || (ui(x) ? x.some(function(t) {
    Pt(t, i);
  }) : i.push(x)), i;
}
function Jg(x, i, t, e) {
  var n = x.key, o = x.type, r = t - (-15 * -59 + 1 * -1930 + 1046), a = t + (2582 + 89 * -29), s = i[t];
  if (s === null || s && n == s.key && o === s.type && -95 * 33 + 3299 + -164 == (-373759 + -168277 * -3 & s.__u)) return t;
  if (e > (s != null && -269 * -1 + -7663 + -1 * -7394 == (66754 * 1 + 1 * -141471 + 205789 & s.__u) ? -879 + 440 * 2 : 6542 + 1097 * -3 + -3251 * 1)) for (; r >= 0 || a < i.length; ) {
    if (r >= 1 * -9493 + -3079 * -1 + 6414) {
      if ((s = i[r]) && 6661 + 6 * 1219 + -559 * 25 == (76599 + -778 * 261 + -11197 * -23 & s.__u) && n == s.key && o === s.type) return r;
      r--;
    }
    if (a < i.length) {
      if ((s = i[a]) && !(243336 + 2 * -56132 & s.__u) && n == s.key && o === s.type) return a;
      a++;
    }
  }
  return -(6674 + -9 * -1 + -1 * 6682);
}
function $r(x, i, t) {
  i[-2 * -427 + 2441 * 2 + -4 * 1434] === "-" ? x.setProperty(i, t ?? "") : x[i] = t == null ? "" : typeof t != "number" || jg.test(i) ? t : t + "px";
}
function cx(x, i, t, e, n) {
  var o;
  e: if (i === "style")
    if (typeof t == "string") x.style.cssText = t;
    else {
      if (typeof e == "string" && (x.style.cssText = e = ""), e)
        for (i in e) t && i in t || $r(x.style, i, "");
      if (t)
        for (i in t) e && t[i] === e[i] || $r(x.style, i, t[i]);
    }
  else if (i[-1 * -3985 + 1 * -436 + -3549] === "o" && i[2234 + -1 * -6037 + 8270 * -1] === "n") o = i !== (i = i.replace(/(PointerCapture)$|Capture$/i, "$1")), i = i.toLowerCase() in x || i === "onFocusOut" || i === "onFocusIn" ? i.toLowerCase().slice(1 * 9351 + 1 * -3919 + -5430) : i.slice(-9155 * 1 + 5552 + -7 * -515), x.l || (x.l = {}), x.l[i + o] = t, t ? e ? t.u = e.u : (t.u = Uo, x.addEventListener(i, o ? ro : oo, o)) : x.removeEventListener(i, o ? ro : oo, o);
  else {
    if (n == "http://www.w3.org/2000/svg") i = i.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (i != "width" && i != "height" && i != "href" && i != "list" && i != "form" && i != "tabIndex" && i != "download" && i != "rowSpan" && i != "colSpan" && i != "role" && i != "popover" && i in x) try {
      x[i] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || !(163 * -21 + -3072 * -2 + 160 * -17) === t && i[8563 * 1 + 4849 + -13408] !== "-" ? x.removeAttribute(i) : x.setAttribute(i, i == "popover" && t == 1 ? "" : t));
  }
}
function ea(x) {
  return function(i) {
    if (this.l) {
      var t = this.l[i.type + x];
      if (i.t == null) i.t = Uo++;
      else if (i.t < t.u) return;
      return t(M.event ? M.event(i) : i);
    }
  };
}
function Qo(x, i, t, e, n, o, r, a, s, c) {
  var d, g, C, u, p, m, A, l, W, k, D, Y, _, H, re, U, te = i.type;
  if (void (-1420 + -5281 * 1 + -1 * -6701) !== i.constructor) return null;
  67 * -127 + 7013 * -1 + 15650 & t.__u && (s = !!(2794 + -2693 * -3 + -10841 & t.__u), o = [a = i.__e = t.__e]), (d = M.__b) && d(i);
  e: if (typeof te == "function") try {
    if (l = i.props, W = "prototype" in te && te.prototype.render, k = (d = te.contextType) && e[d.__c], D = d ? k ? k.props.value : d.__ : e, t.__c ? A = (g = i.__c = t.__c).__ = g.__E : (W ? i.__c = g = new te(l, D) : (i.__c = g = new it(l, D), g.constructor = te, g.render = Qg), k && k.sub(g), g.props = l, g.state || (g.state = {}), g.context = D, g.__n = e, C = g.__d = !(7271 + 2 * -4327 + 1383), g.__h = [], g._sb = []), W && g.__s == null && (g.__s = g.state), W && te.getDerivedStateFromProps != null && (g.__s == g.state && (g.__s = Kt({}, g.__s)), Kt(g.__s, te.getDerivedStateFromProps(l, g.__s))), u = g.props, p = g.state, g.__v = i, C) W && te.getDerivedStateFromProps == null && g.componentWillMount != null && g.componentWillMount(), W && g.componentDidMount != null && g.__h.push(g.componentDidMount);
    else {
      if (W && te.getDerivedStateFromProps == null && l !== u && g.componentWillReceiveProps != null && g.componentWillReceiveProps(l, D), !g.__e && (g.shouldComponentUpdate != null && !(-7642 * 1 + -495 + -626 * -13) === g.shouldComponentUpdate(l, g.__s, D) || i.__v === t.__v)) {
        for (i.__v !== t.__v && (g.props = l, g.state = g.__s, g.__d = !(-7353 + -9 * 549 + -1 * -12295)), i.__e = t.__e, i.__k = t.__k, i.__k.forEach(function(Ve) {
          Ve && (Ve.__ = i);
        }), Y = 602 * 4 + 1 * -2243 + -165; Y < g._sb.length; Y++) g.__h.push(g._sb[Y]);
        g._sb = [], g.__h.length && r.push(g);
        break e;
      }
      g.componentWillUpdate != null && g.componentWillUpdate(l, g.__s, D), W && g.componentDidUpdate != null && g.__h.push(function() {
        g.componentDidUpdate(u, p, m);
      });
    }
    if (g.context = D, g.props = l, g.__P = x, g.__e = !(9355 * 1 + -5857 + 13 * -269), _ = M.__r, H = -6 * -571 + -2131 + 1295 * -1, W) {
      for (g.state = g.__s, g.__d = !(-1 * 4358 + 6653 + -2294), _ && _(i), d = g.render(g.props, g.state, g.context), re = 0; re < g._sb.length; re++) g.__h.push(g._sb[re]);
      g._sb = [];
    } else do
      g.__d = !(-305 * 5 + -6646 * 1 + 8172), _ && _(i), d = g.render(g.props, g.state, g.context), g.state = g.__s;
    while (g.__d && ++H < 3 * 841 + 2749 * -3 + -5749 * -1);
    g.state = g.__s, g.getChildContext != null && (e = Kt(Kt({}, e), g.getChildContext())), W && !C && g.getSnapshotBeforeUpdate != null && (m = g.getSnapshotBeforeUpdate(u, p)), vs(x, ui(U = d != null && d.type === rt && d.key == null ? d.props.children : d) ? U : [U], i, t, e, n, o, r, a, s, c), g.base = i.__e, i.__u &= -(8810 + -389 * 2 + -7871), g.__h.length && r.push(g), A && (g.__E = g.__ = null);
  } catch (Ve) {
    i.__v = null, s || o != null ? (i.__e = a, i.__u |= s ? 7699 + -2845 * 2 + -1849 : 32, o[o.indexOf(a)] = null) : (i.__e = t.__e, i.__k = t.__k), M.__e(Ve, i, t);
  }
  else o == null && i.__v === t.__v ? (i.__k = t.__k, i.__e = t.__e) : i.__e = Ug(t.__e, i, t, e, n, o, r, s, c);
  (d = M.diffed) && d(i);
}
function ws(x, i, t) {
  i.__d = void 0;
  for (var e = 0; e < t.length; e++) zo(t[e], t[++e], t[++e]);
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
function Ug(x, i, t, e, n, o, r, a, s) {
  var c, d, g, C, u, p, m, A = t.props, l = i.props, W = i.type;
  if (W === "svg" ? n = "http://www.w3.org/2000/svg" : W === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), o != null) {
    for (c = 0; c < o.length; c++) if ((u = o[c]) && "setAttribute" in u == !!W && (W ? u.localName === W : 2987 + -4 * 1921 + 4700 === u.nodeType)) {
      x = u, o[c] = null;
      break;
    }
  }
  if (x == null) {
    if (W === null) return document.createTextNode(l);
    x = document.createElementNS(n, W, l.is && l), o = null, a = !1;
  }
  if (W === null) A === l || a && x.data === l || (x.data = l);
  else {
    if (o = o && Xn.call(x.childNodes), A = t.props || Sn, !a && o != null)
      for (A = {}, c = 8532 + 2 * -1999 + -2 * 2267; c < x.attributes.length; c++) A[(u = x.attributes[c]).name] = u.value;
    for (c in A) if (u = A[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") g = u;
      else if (c !== "key" && !(c in l)) {
        if (c == "value" && "defaultValue" in l || c == "checked" && "defaultChecked" in l) continue;
        cx(x, c, null, u, n);
      }
    }
    for (c in l) u = l[c], c == "children" ? C = u : c == "dangerouslySetInnerHTML" ? d = u : c == "value" ? p = u : c == "checked" ? m = u : c === "key" || a && typeof u != "function" || A[c] === u || cx(x, c, u, A[c], n);
    if (d) a || g && (d.__html === g.__html || d.__html === x.innerHTML) || (x.innerHTML = d.__html), i.__k = [];
    else if (g && (x.innerHTML = ""), vs(x, ui(C) ? C : [C], i, t, e, W === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, o, r, o ? o[-4792 + 16 * 39 + 1 * 4168] : t.__k && I0(t, -698 * -7 + 2 * 1949 + 4 * -2196), a, s), o != null)
      for (c = o.length; c--; ) o[c] != null && ys(o[c]);
    a || (c = "value", void (577 * -2 + -1135 * 5 + 6829) !== p && (p !== x[c] || W === "progress" && !p || W === "option" && p !== A[c]) && cx(x, c, p, A[c], n), c = "checked", void (1363 * -7 + -3 * 2953 + -460 * -40) !== m && m !== x[c] && cx(x, c, m, A[c], n));
  }
  return x;
}
function zo(x, i, t) {
  try {
    typeof x == "function" ? x(i) : x.current = i;
  } catch (e) {
    M.__e(e, t);
  }
}
function so(x, i, t) {
  var e, n;
  if (M.unmount && M.unmount(x), (e = x.ref) && (e.current && e.current !== x.__e || zo(e, null, i)), (e = x.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      M.__e(o, i);
    }
    e.base = e.__P = null;
  }
  if (e = x.__k)
    for (n = 5503 * 1 + -1 * 1097 + 1 * -4406; n < e.length; n++) e[n] && so(e[n], i, t || typeof x.type != "function");
  t || x.__e == null || ys(x.__e), x.__c = x.__ = x.__e = x.__d = void (9422 + -1 * 9422);
}
function Qg(x, i, t) {
  return this.constructor(x, t);
}
function _t(x, i, t) {
  var e, n, o, r;
  M.__ && M.__(x, i), n = (e = typeof t == "function") ? null : t && t.__k || i.__k, o = [], r = [], Qo(i, x = (!e && t || i).__k = Ee(rt, null, [x]), n || Sn, Sn, i.namespaceURI, !e && t ? [t] : n ? null : i.firstChild ? Xn.call(i.childNodes) : null, o, !e && t ? t : n ? n.__e : i.firstChild, e, r), ws(o, x, r);
}
function qo(x, i) {
  _t(x, i, qo);
}
function $o(x, i, t) {
  var e, n, o, r, a = Kt({}, x.props);
  for (o in x.type && x.type.defaultProps && (r = x.type.defaultProps), i) o == "key" ? e = i[o] : o == "ref" ? n = i[o] : a[o] = i[o] === void 0 && void (-8237 + 31 * 141 + -1 * -3866) !== r ? r[o] : i[o];
  return arguments.length > -1896 + -9 * 719 + 8369 && (a.children = arguments.length > 3 ? Xn.call(arguments, -327 * 1 + 654 * -8 + 5561 * 1) : t), mn(x.type, a, e || x.key, n || x.ref, null);
}
function _n(x, i) {
  var t = { __c: i = "__cC" + bs++, __: x, Consumer: function(e, n) {
    return e.children(n);
  }, Provider: function(e) {
    var n, o;
    return this.getChildContext || (n = [], (o = {})[i] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value !== r.value && n.some(function(a) {
        a.__e = !0, ao(a);
      });
    }, this.sub = function(r) {
      n.push(r);
      var a = r.componentWillUnmount;
      r.componentWillUnmount = function() {
        n && n.splice(n.indexOf(r), 1), a && a.call(r);
      };
    }), e.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
Xn = As.slice, M = { __e: function(x, i, t, e) {
  for (var n, o, r; i = i.__; ) if ((n = i.__c) && !n.__) try {
    if ((o = n.constructor) && o.getDerivedStateFromError != null && (n.setState(o.getDerivedStateFromError(x)), r = n.__d), n.componentDidCatch != null && (n.componentDidCatch(x, e || {}), r = n.__d), r) return n.__E = n;
  } catch (a) {
    x = a;
  }
  throw x;
} }, ps = 23 * 271 + -5468 + -765, hs = function(x) {
  return x != null && x.constructor == null;
}, it.prototype.setState = function(x, i) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Kt({}, this.state), typeof x == "function" && (x = x(Kt({}, t), this.props)), x && Kt(t, x), x != null && this.__v && (i && this._sb.push(i), ao(this));
}, it.prototype.forceUpdate = function(x) {
  this.__v && (this.__e = !(-3438 + 1 * -9794 + 13232), x && this.__h.push(x), ao(this));
}, it.prototype.render = rt, n0 = [], ms = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, io = function(x, i) {
  return x.__v.__b - i.__v.__b;
}, Kx.__r = -57 * 72 + 6211 * 1 + -2107 * 1, Uo = -1 * 6995 + 92 * 58 + -3 * -553, oo = ea(!(-6452 * -1 + -2 * -982 + -8415)), ro = ea(!(7 * -1212 + 1096 + -3694 * -2)), bs = -3306 + 3306 * 1;
function er() {
  return (er = Object.assign ? Object.assign.bind() : function(x) {
    for (var i = 1; i < arguments.length; i++) {
      var t = arguments[i];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (x[e] = t[e]);
    }
    return x;
  }).apply(this, arguments);
}
var zg = ["context", "children"];
function qg(x) {
  this.getChildContext = function() {
    return x.context;
  };
  var i = x.children, t = function(e, n) {
    if (e == null) return {};
    var o, r, a = {}, s = Object.keys(e);
    for (r = -683 + -86 * -17 + -41 * 19; r < s.length; r++) n.indexOf(o = s[r]) >= 8950 + 50 * -179 || (a[o] = e[o]);
    return a;
  }(x, zg);
  return $o(i, t);
}
function $g() {
  var x = {};
  x.detail = {}, x.bubbles = !(10450 + 11 * -950), x.cancelable = !(4898 * 2 + 2 * -4987 + 178);
  var i = new CustomEvent("_preact", x);
  this.dispatchEvent(i), this._vdom = Ee(qg, er({}, this._props, { context: i.detail.context }), function t(e, n) {
    if (6482 + -43 * -64 + -17 * 543 === e.nodeType) return e.data;
    if (3909 + 690 * -2 + -158 * 16 !== e.nodeType) return null;
    var o = [], r = {}, a = 97 * 38 + -2462 + -1224, s = e.attributes, c = e.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (r[s[a].name] = s[a].value, r[Bs(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var d = t(c[a], null), g = c[a].slot;
      g ? r[g] = Ee(ta, { name: g }, d) : o[a] = d;
    }
    var C = n ? Ee(ta, null, o) : o;
    return Ee(n || e.nodeName.toLowerCase(), r, C);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? qo : _t)(this._vdom, this._root);
}
function Bs(x) {
  return x.replace(/-(\w)/g, function(i, t) {
    return t ? t.toUpperCase() : "";
  });
}
function ed(x, i, t) {
  if (this._vdom) {
    var e = {};
    e[x] = t = t ?? void (68 * -91 + -6454 + 6 * 2107), e[Bs(x)] = t, this._vdom = $o(this._vdom, e), _t(this._vdom, this._root);
  }
}
function td() {
  _t(this._vdom = null, this._root);
}
function ta(x, i) {
  var t = this;
  return Ee("slot", er({}, x, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = i;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function nd(x, i, t, e) {
  function n() {
    var o = Reflect.construct(HTMLElement, [], n);
    return o._vdomComponent = x, o._root = o, o;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = $g, n.prototype.attributeChangedCallback = ed, n.prototype.disconnectedCallback = td, t = t || x.observedAttributes || Object.keys(x.propTypes || {}), n.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(n.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r, this.connectedCallback());
      var a = typeof r;
      r != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(i, n);
}
var xd = 8898 + -8 * -479 + 2 * -6365;
function O(x, i, t, e, n, o) {
  i || (i = {});
  var r, a, s = i;
  if ("ref" in s)
    for (a in s = {}, i) a == "ref" ? r = i[a] : s[a] = i[a];
  var c = {};
  c.type = x, c.props = s, c.key = t, c.ref = r, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__d = void (-1 * -1887 + -16 * 173 + 881), c.__c = null, c.constructor = void (-178 * 32 + -2986 + 1447 * 6), c.__v = --xd, c.__i = -(-107 * -26 + 9562 + -12343), c.__u = 0, c.__source = n, c.__self = o;
  var d = c;
  if (typeof x == "function" && (r = x.defaultProps))
    for (a in r) void (4788 + 153 * 45 + -11673) === s[a] && (s[a] = r[a]);
  return M.vnode && M.vnode(d), d;
}
var Ye = function() {
  return Ye = Object.assign || function(i) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (i[o] = t[o]);
    }
    return i;
  }, Ye.apply(this, arguments);
};
function N0(x, i, t) {
  if (t || arguments.length === 2) for (var e = 0, n = i.length, o; e < n; e++)
    (o || !(e in i)) && (o || (o = Array.prototype.slice.call(i, 0, e)), o[e] = i[e]);
  return x.concat(o || Array.prototype.slice.call(i));
}
function id(x) {
  var i = Object.create(null);
  return function(t) {
    return i[t] === void 0 && (i[t] = x(t)), i[t];
  };
}
var od = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, rd = id(function(x) {
  return od.test(x) || x.charCodeAt(-5 * -1568 + -8666 + -7 * -118) === 71 * 91 + 666 * -7 + -1688 && x.charCodeAt(7 * -157 + -7153 + 8253) === 110 && x.charCodeAt(-1026 + 1423 * 4 + 212 * -22) < 7023 * 1 + -3765 + -1 * 3167;
}), Jt, se, Vi, na, F0 = 2 * -1831 + -2 * -4714 + -5766, Gs = [], ce = M, xa = ce.__b, ia = ce.__r, oa = ce.diffed, ra = ce.__c, aa = ce.unmount, sa = ce.__;
function J0(x, i) {
  ce.__h && ce.__h(se, x, F0 || i), F0 = -131 * 41 + -5573 + -76 * -144;
  var t = {};
  t.__ = [], t.__h = [];
  var e = se.__H || (se.__H = t);
  return x >= e.__.length && e.__.push({}), e.__[x];
}
function Me(x) {
  return F0 = 4057 * 2 + -7081 + -1032, tr(Zs, x);
}
function tr(x, i, t) {
  var e = J0(Jt++, 2);
  if (e.t = x, !e.__c && (e.__ = [t ? t(i) : Zs(void 0, i), function(a) {
    var s = e.__N ? e.__N[0] : e.__[0], c = e.t(s, a);
    s !== c && (e.__N = [c, e.__[346 * 25 + 8309 * 1 + -16958]], e.__c.setState({}));
  }], e.__c = se, !se.u)) {
    var n = function(a, s, c) {
      if (!e.__c.__H) return !0;
      var d = e.__c.__H.__.filter(function(C) {
        return !!C.__c;
      });
      if (d.every(function(C) {
        return !C.__N;
      })) return !o || o.call(this, a, s, c);
      var g = !(1 * -6385 + 3 * -2351 + 13439);
      return d.forEach(function(C) {
        if (C.__N) {
          var u = C.__[0];
          C.__ = C.__N, C.__N = void 0, u !== C.__[0] && (g = !0);
        }
      }), !(!g && e.__c.props === a) && (!o || o.call(this, a, s, c));
    };
    se.u = !(-3059 + 4 * -607 + 5487);
    var o = se.shouldComponentUpdate, r = se.componentWillUpdate;
    se.componentWillUpdate = function(a, s, c) {
      if (this.__e) {
        var d = o;
        o = void (-3829 + -547 * -7), n(a, s, c), o = d;
      }
      r && r.call(this, a, s, c);
    }, se.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function ge(x, i) {
  var t = J0(Jt++, 3);
  !ce.__s && nr(t.__H, i) && (t.__ = x, t.i = i, se.__H.__h.push(t));
}
function U0(x, i) {
  var t = J0(Jt++, 4);
  !ce.__s && nr(t.__H, i) && (t.__ = x, t.i = i, se.__h.push(t));
}
function It(x) {
  return F0 = 21 * 207 + 4503 + 29 * -305, Qe(function() {
    var i = {};
    return i.current = x, i;
  }, []);
}
function ks(x, i, t) {
  F0 = -1 * 4152 + 1405 * -1 + -5563 * -1, U0(function() {
    return typeof x == "function" ? (x(i()), function() {
      return x(null);
    }) : x ? (x.current = i(), function() {
      return x.current = null;
    }) : void (5 * -273 + 7751 + 62 * -103);
  }, t == null ? t : t.concat(x));
}
function Qe(x, i) {
  var t = J0(Jt++, 7);
  return nr(t.__H, i) && (t.__ = x(), t.__H = i, t.__h = x), t.__;
}
function Tt(x, i) {
  return F0 = 1 * -4706 + -2990 + 214 * 36, Qe(function() {
    return x;
  }, i);
}
function m0(x) {
  var i = se.context[x.__c], t = J0(Jt++, 5849 * -1 + -2843 + 8701);
  return t.c = x, i ? (t.__ == null && (t.__ = !(-1829 + 501 * -5 + 22 * 197), i.sub(se)), i.props.value) : x.__;
}
function Px(x, i) {
  ce.useDebugValue && ce.useDebugValue(i ? i(x) : x);
}
function Os() {
  var x = J0(Jt++, 11);
  if (!x.__) {
    for (var i = se.__v; i !== null && !i.__m && i.__ !== null; ) i = i.__;
    var t = i.__m || (i.__m = [1063 + 111 * 26 + -3949, -2312 * 1 + -6757 + 9069]);
    x.__ = "P" + t[1 * -7989 + 1115 * 7 + 184] + "-" + t[8572 + -11 * 544 + -2587]++;
  }
  return x.__;
}
function ad() {
  for (var x; x = Gs.shift(); ) if (x.__P && x.__H) try {
    x.__H.__h.forEach(mx), x.__H.__h.forEach(co), x.__H.__h = [];
  } catch (i) {
    x.__H.__h = [], ce.__e(i, x.__v);
  }
}
ce.__b = function(x) {
  se = null, xa && xa(x);
}, ce.__ = function(x, i) {
  x && i.__k && i.__k.__m && (x.__m = i.__k.__m), sa && sa(x, i);
}, ce.__r = function(x) {
  ia && ia(x), Jt = -1 * -5009 + 2662 + 1 * -7671;
  var i = (se = x.__c).__H;
  i && (Vi === se ? (i.__h = [], se.__h = [], i.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (8546 + 57 * 25 + 9971 * -1);
  })) : (i.__h.forEach(mx), i.__h.forEach(co), i.__h = [], Jt = -3978 + -1 * 8439 + 12417)), Vi = se;
}, ce.diffed = function(x) {
  oa && oa(x);
  var i = x.__c;
  i && i.__H && (i.__H.__h.length && (-9999 + 1725 * 2 + 6550 !== Gs.push(i) && na === ce.requestAnimationFrame || ((na = ce.requestAnimationFrame) || sd)(ad)), i.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void 0;
  })), Vi = se = null;
}, ce.__c = function(x, i) {
  i.some(function(t) {
    try {
      t.__h.forEach(mx), t.__h = t.__h.filter(function(e) {
        return !e.__ || co(e);
      });
    } catch (e) {
      i.some(function(n) {
        n.__h && (n.__h = []);
      }), i = [], ce.__e(e, t.__v);
    }
  }), ra && ra(x, i);
}, ce.unmount = function(x) {
  aa && aa(x);
  var i, t = x.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      mx(e);
    } catch (n) {
      i = n;
    }
  }), t.__H = void (-1 * 8517 + -1832 + 10349 * 1), i && ce.__e(i, t.__v));
};
var ca = typeof requestAnimationFrame == "function";
function sd(x) {
  var i, t = function() {
    clearTimeout(e), ca && cancelAnimationFrame(i), setTimeout(x);
  }, e = setTimeout(t, 100);
  ca && (i = requestAnimationFrame(t));
}
function mx(x) {
  var i = se, t = x.__c;
  typeof t == "function" && (x.__c = void (-5771 * 1 + 8092 + -2321), t()), se = i;
}
function co(x) {
  var i = se;
  x.__c = x.__(), se = i;
}
function nr(x, i) {
  return !x || x.length !== i.length || i.some(function(t, e) {
    return t !== x[e];
  });
}
function Zs(x, i) {
  return typeof i == "function" ? i(x) : i;
}
function Hs(x, i) {
  for (var t in i) x[t] = i[t];
  return x;
}
function go(x, i) {
  for (var t in x) if (t !== "__source" && !(t in i)) return !(39 * 1 + -5806 * 1 + -5767 * -1);
  for (var e in i) if (e !== "__source" && x[e] !== i[e]) return !(-1 * -6911 + -8037 + 563 * 2);
  return !(363 * -17 + 1651 * 5 + -2083 * 1);
}
function uo(x, i) {
  this.props = x, this.context = i;
}
function cd(x, i) {
  function t(n) {
    var o = this.props.ref, r = o == n.ref;
    return !r && o && (o.call ? o(null) : o.current = null), i ? !i(this.props, n) || !r : go(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, Ee(x, n);
  }
  return e.displayName = "Memo(" + (x.displayName || x.name) + ")", e.prototype.isReactComponent = !(-4551 * 1 + -5 * 1237 + 10736), e.__f = !(-8836 + 3 * -2875 + 19 * 919), e;
}
(uo.prototype = new it()).isPureReactComponent = !0, uo.prototype.shouldComponentUpdate = function(x, i) {
  return go(this.props, x) || go(this.state, i);
};
var ga = M.__b;
M.__b = function(x) {
  x.type && x.type.__f && x.ref && (x.props.ref = x.ref, x.ref = null), ga && ga(x);
};
var gd = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -346 * -1 + 5984 + -2419;
function Rs(x) {
  function i(t) {
    var e = Hs({}, t);
    return delete e.ref, x(e, t.ref || null);
  }
  return i.$$typeof = gd, i.render = i, i.prototype.isReactComponent = i.__f = !(-9645 + 2137 * -3 + -892 * -18), i.displayName = "ForwardRef(" + (x.displayName || x.name) + ")", i;
}
var da = function(x, i) {
  return x == null ? null : Pt(Pt(x).map(i));
}, dd = { map: da, forEach: da, count: function(x) {
  return x ? Pt(x).length : 993 + 1 * -2706 + 1713;
}, only: function(x) {
  var i = Pt(x);
  if (-3 * -2389 + 4576 * -2 + -2 * -993 !== i.length) throw "Children.only";
  return i[-151 * 1 + -7828 + 7979];
}, toArray: Pt }, ud = M.__e;
M.__e = function(x, i, t, e) {
  if (x.then) {
    for (var n, o = i; o = o.__; ) if ((n = o.__c) && n.__c) return i.__e == null && (i.__e = t.__e, i.__k = t.__k), n.__c(x, i);
  }
  ud(x, i, t, e);
};
var ua = M.unmount;
function Ks(x, i, t) {
  return x && (x.__c && x.__c.__H && (x.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), x.__c.__H = null), (x = Hs({}, x)).__c != null && (x.__c.__P === t && (x.__c.__P = i), x.__c = null), x.__k = x.__k && x.__k.map(function(e) {
    return Ks(e, i, t);
  })), x;
}
function Ps(x, i, t) {
  return x && t && (x.__v = null, x.__k = x.__k && x.__k.map(function(e) {
    return Ps(e, i, t);
  }), x.__c && x.__c.__P === i && (x.__e && t.appendChild(x.__e), x.__c.__e = !(1591 + -1 * 1591), x.__c.__P = t)), x;
}
function bx() {
  this.__u = -2021 + 1 * -9381 + 11402, this.t = null, this.__b = null;
}
function Ts(x) {
  var i = x.__.__c;
  return i && i.__a && i.__a(x);
}
function ld(x) {
  var i, t, e;
  function n(o) {
    if (i || (i = x()).then(function(r) {
      t = r.default || r;
    }, function(r) {
      e = r;
    }), e) throw e;
    if (!t) throw i;
    return Ee(t, o);
  }
  return n.displayName = "Lazy", n.__f = !(1213 + 233 * -9 + 884), n;
}
function un() {
  this.u = null, this.o = null;
}
M.unmount = function(x) {
  var i = x.__c;
  i && i.__R && i.__R(), i && 14 * -28 + 4156 + -3732 & x.__u && (x.type = null), ua && ua(x);
}, (bx.prototype = new it()).__c = function(x, i) {
  var t = i.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = Ts(e.__v), o = !(-7605 + 7606 * 1), r = function() {
    o || (o = !(10 * 755 + 142 * 62 + -16354), t.__R = null, n ? n(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var s = e.state.__a;
        e.__v.__k[364 * 6 + 34 + -2 * 1109] = Ps(s, s.__c.__P, s.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.t.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || -4912 + -47 * -81 + 1137 & i.__u || e.setState({ __a: e.__b = e.__v.__k[-1 * -859 + -6797 + -1 * -5938] }), x.then(r, r);
}, bx.prototype.componentWillUnmount = function() {
  this.t = [];
}, bx.prototype.render = function(x, i) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[1135 * -1 + -217 * 28 + 1 * 7211].__c;
      this.__v.__k[-1 * 6703 + -291 * -6 + 1 * 4957] = Ks(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = i.__a && Ee(rt, null, x.fallback);
  return n && (n.__u &= -(29 * -123 + 8644 + -1261 * 4)), [Ee(rt, null, i.__a ? null : x.children), n];
};
var la = function(x, i, t) {
  if (++t[-9934 + -1 * -2762 + 7173] === t[-167 * 9 + -3551 + -7 * -722] && x.o.delete(i), x.props.revealOrder && (x.props.revealOrder[-1 * -7948 + 7937 + -15885] !== "t" || !x.o.size)) for (t = x.u; t; ) {
    for (; t.length > -1482 + 1 * -2819 + 4304; ) t.pop()();
    if (t[5 * 409 + -2943 * -2 + 3965 * -2] < t[1612 + -2 * -1366 + -4344]) break;
    x.u = t = t[3398 + 753 * -5 + 369];
  }
};
function Id(x) {
  return this.getChildContext = function() {
    return x.context;
  }, x.children;
}
function fd(x) {
  var i = this, t = x.i;
  i.componentWillUnmount = function() {
    _t(null, i.l), i.l = null, i.i = null;
  }, i.i && i.i !== t && i.componentWillUnmount(), i.l || (i.i = t, i.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(691 * 11 + -838 + -6763 * 1);
  }, appendChild: function(e) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> 9707 * -1 + -6 * 142 + 240 * 44, 185 * 43 + 150 * -3 + -7504), i.i.removeChild(e);
  } }), _t(Ee(Id, { context: i.context }, x.__v), i.l);
}
function Cd(x, i) {
  var t = {};
  t.__v = x, t.i = i;
  var e = Ee(fd, t);
  return e.containerInfo = i, e;
}
(un.prototype = new it()).__a = function(x) {
  var i = this, t = Ts(i.__v), e = i.o.get(x);
  return e[0]++, function(n) {
    var o = function() {
      i.props.revealOrder ? (e.push(n), la(i, x, e)) : n();
    };
    t ? t(o) : o();
  };
}, un.prototype.render = function(x) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var i = Pt(x.children);
  x.revealOrder && x.revealOrder[0] === "b" && i.reverse();
  for (var t = i.length; t--; ) this.o.set(i[t], this.u = [1 * 9325 + 3385 * 1 + -12709, 3574 * -1 + -7834 + 11408, this.u]);
  return x.children;
}, un.prototype.componentDidUpdate = un.prototype.componentDidMount = function() {
  var x = this;
  this.o.forEach(function(i, t) {
    la(x, t, i);
  });
};
var Es = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 26 * 2453 + 32363 * 1 + -74 * 487, pd = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, hd = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, md = /[A-Z0-9]/g, bd = typeof document < "u", Ad = function(x) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(x);
};
function yd(x, i, t) {
  return i.__k == null && (i.textContent = ""), _t(x, i), typeof t == "function" && t(), x ? x.__c : null;
}
function Wd(x, i, t) {
  return qo(x, i), typeof t == "function" && t(), x ? x.__c : null;
}
it.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(x) {
  Object.defineProperty(it.prototype, x, { configurable: !(8924 + -1286 * -4 + -7034 * 2), get: function() {
    return this["UNSAFE_" + x];
  }, set: function(i) {
    var t = {};
    t.configurable = !(1729 * 4 + 8052 + -14968), t.writable = !(-1 * -9149 + 1522 * 4 + -15237), t.value = i, Object.defineProperty(this, x, t);
  } });
});
var Ia = M.event;
function vd() {
}
function Sd() {
  return this.cancelBubble;
}
function wd() {
  return this.defaultPrevented;
}
M.event = function(x) {
  return Ia && (x = Ia(x)), x.persist = vd, x.isPropagationStopped = Sd, x.isDefaultPrevented = wd, x.nativeEvent = x;
};
var Ax = {};
Ax.enumerable = !(-2 * -4894 + -7451 + -2336), Ax.configurable = !(-2476 + -95 * 61 + 8271), Ax.get = function() {
  return this.class;
};
var xr, Bd = Ax, fa = M.vnode;
M.vnode = function(x) {
  typeof x.type == "string" && function(i) {
    var t = i.props, e = i.type, n = {};
    for (var o in t) {
      var r = t[o];
      if (!(o === "value" && "defaultValue" in t && r == null || bd && o === "children" && e === "noscript" || o === "class" || o === "className")) {
        var a = o.toLowerCase();
        o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && !(-3543 + -1 * 9046 + 12589) === r ? r = "" : a === "translate" && r === "no" ? r = !1 : a === "ondoubleclick" ? o = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || Ad(t.type) ? a === "onfocus" ? o = "onfocusin" : a === "onblur" ? o = "onfocusout" : hd.test(o) ? o = a : -(-6 * 102 + 6183 + -10 * 557) === e.indexOf("-") && pd.test(o) ? o = o.replace(md, "-$&").toLowerCase() : r === null && (r = void 0) : a = o = "oninput", a === "oninput" && n[o = a] && (o = "oninputCapture"), n[o] = r;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Pt(t.children).forEach(function(s) {
      s.props.selected = -(5590 + 1 * 3752 + -9341) != n.value.indexOf(s.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = Pt(t.children).forEach(function(s) {
      s.props.selected = n.multiple ? -(-58 + -1899 * 3 + 5756 * 1) != n.defaultValue.indexOf(s.props.value) : n.defaultValue == s.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", Bd)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), i.props = n;
  }(x), x.$$typeof = Es, fa && fa(x);
};
var Ca = M.__r;
M.__r = function(x) {
  Ca && Ca(x), xr = x.__c;
};
var pa = M.diffed;
M.diffed = function(x) {
  pa && pa(x);
  var i = x.props, t = x.__e;
  t != null && x.type === "textarea" && "value" in i && i.value !== t.value && (t.value = i.value == null ? "" : i.value), xr = null;
};
var Se = {};
Se.readContext = function(x) {
  return xr.__n[x.__c].props.value;
}, Se.useCallback = Tt, Se.useContext = m0, Se.useDebugValue = Px, Se.useDeferredValue = Ns, Se.useEffect = ge, Se.useId = Os, Se.useImperativeHandle = ks, Se.useInsertionEffect = Ys, Se.useLayoutEffect = U0, Se.useMemo = Qe, Se.useReducer = tr, Se.useRef = It, Se.useState = Me, Se.useSyncExternalStore = Ms, Se.useTransition = Fs;
var Vs = {};
Vs.current = Se;
var Ls = {};
Ls.ReactCurrentDispatcher = Vs;
var Gd = Ls;
function kd(x) {
  return Ee.bind(null, x);
}
function li(x) {
  return !!x && x.$$typeof === Es;
}
function Od(x) {
  return li(x) && x.type === rt;
}
function Zd(x) {
  return !!x && !!x.displayName && (typeof x.displayName == "string" || x.displayName instanceof String) && x.displayName.startsWith("Memo(");
}
function Hd(x) {
  return li(x) ? $o.apply(null, arguments) : x;
}
function Rd(x) {
  return !!x.__k && (_t(null, x), !(-7002 + 55 * 178 + 82 * -34));
}
function Kd(x) {
  return x && (x.base || -8252 * -1 + -113 + -8138 === x.nodeType && x) || null;
}
var Pd = function(x, i) {
  return x(i);
}, Td = function(x, i) {
  return x(i);
}, Ed = rt;
function Ds(x) {
  x();
}
function Ns(x) {
  return x;
}
function Fs() {
  return [!(19 * 248 + 4509 * 1 + -9220), Ds];
}
var Ys = U0, Vd = li;
function Ms(x, i) {
  var t = i(), e = Me({ h: { __: t, v: i } }), n = e[431 * -4 + -3022 * 3 + 415 * 26].h, o = e[4 * -860 + 26 * -29 + 4195];
  return U0(function() {
    n.__ = t, n.v = i, Li(n) && o({ h: n });
  }, [x, t, i]), ge(function() {
    return Li(n) && o({ h: n }), x(function() {
      Li(n) && o({ h: n });
    });
  }, [x]), t;
}
function Li(x) {
  var i, t, e = x.v, n = x.__;
  try {
    var o = e();
    return !((i = n) === (t = o) && (-755 * 2 + -670 * 5 + 4860 !== i || 1 / i == (1373 * 5 + 765 + -7629) / t) || i != i && t != t);
  } catch {
    return !(-1994 * -4 + -4224 * 2 + 472);
  }
}
var F = {};
F.useState = Me, F.useId = Os, F.useReducer = tr, F.useEffect = ge, F.useLayoutEffect = U0, F.useInsertionEffect = Ys, F.useTransition = Fs, F.useDeferredValue = Ns, F.useSyncExternalStore = Ms, F.startTransition = Ds, F.useRef = It, F.useImperativeHandle = ks, F.useMemo = Qe, F.useCallback = Tt, F.useContext = m0, F.useDebugValue = Px, F.version = "17.0.2", F.Children = dd, F.render = yd, F.hydrate = Wd, F.unmountComponentAtNode = Rd, F.createPortal = Cd, F.createElement = Ee, F.createContext = _n, F.createFactory = kd, F.cloneElement = Hd, F.createRef = Xg, F.Fragment = rt, F.isValidElement = li, F.isElement = Vd, F.isFragment = Od, F.isMemo = Zd, F.findDOMNode = Kd, F.Component = it, F.PureComponent = uo, F.memo = cd, F.forwardRef = Rs, F.flushSync = Td, F.unstable_batchedUpdates = Pd, F.StrictMode = Ed, F.Suspense = bx, F.SuspenseList = un, F.lazy = ld, F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gd;
var f0 = F, Ld = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dd(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Nd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Fd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") && Object.keys(x).length === 1 ? x.default : x;
}
function Yd(x) {
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
const Md = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Ld,
  getAugmentedNamespace: Yd,
  getDefaultExportFromCjs: Dd,
  getDefaultExportFromNamespaceIfNotNamed: Fd,
  getDefaultExportFromNamespaceIfPresent: Nd
}, Symbol.toStringTag, { value: "Module" }));
var jd = function(i, t, e, n) {
  var o = e ? e.call(n, i, t) : void 0;
  if (o !== void (1 * 1727 + 5764 + -7491)) return !!o;
  if (i === t) return !0;
  if (typeof i != "object" || !i || typeof t != "object" || !t) return !1;
  var r = Object.keys(i), a = Object.keys(t);
  if (r.length !== a.length) return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = -946 + -4241 * -1 + -3295; c < r.length; c++) {
    var d = r[c];
    if (!s(d)) return !1;
    var g = i[d], C = t[d];
    if (o = e ? e.call(n, g, C, d) : void (-3 * 583 + 1443 + -153 * -2), o === !1 || o === void (3316 + 2 * 4549 + 4138 * -3) && g !== C) return !1;
  }
  return !0;
};
const Xd = Md.getDefaultExportFromCjs(jd);
var ae = "-ms-", bn = "-moz-", ee = "-webkit-", js = "comm", Ii = "rule", ir = "decl", _d = "@import", Xs = "@keyframes", Jd = "@layer", _s = Math.abs, or = String.fromCharCode, lo = Object.assign;
function Ud(x, i) {
  return me(x, -2728 + 5 * -725 + -6353 * -1) ^ 3865 + -13 * 433 + -603 * -3 ? (((i << 358 * -23 + 886 * -1 + -1 * -9122 ^ me(x, 0)) << 3633 * 1 + -1 * 2077 + -1554 ^ me(x, -11873 + 3958 * 3)) << 11164 + 5581 * -2 ^ me(x, 11 * 617 + -646 * -9 + -12599)) << -3664 + 4 * -419 + -2671 * -2 ^ me(x, -801 * 5 + -449 * 2 + -446 * -11) : -421 + -13 * -439 + -5286;
}
function Js(x) {
  return x.trim();
}
function Zt(x, i) {
  return (x = i.exec(x)) ? x[0] : x;
}
function j(x, i, t) {
  return x.replace(i, t);
}
function yx(x, i, t) {
  return x.indexOf(i, t);
}
function me(x, i) {
  return x.charCodeAt(i) | -3006 * -1 + -8 * -971 + -10774;
}
function Y0(x, i, t) {
  return x.slice(i, t);
}
function At(x) {
  return x.length;
}
function Us(x) {
  return x.length;
}
function ln(x, i) {
  return i.push(x), x;
}
function Qd(x, i) {
  return x.map(i).join("");
}
function ha(x, i) {
  return x.filter(function(t) {
    return !Zt(t, i);
  });
}
var fi = -9545 + 700 * -7 + -31 * -466, M0 = 4159 * -1 + -2 * -419 + 3322, Qs = -9480 + 1811 * 5 + 425, at = -831 * -11 + -15 * 665 + 834, fe = 0, Q0 = "";
function Ci(x, i, t, e, n, o, r, a) {
  var s = {};
  return s.value = x, s.root = i, s.parent = t, s.type = e, s.props = n, s.children = o, s.line = fi, s.column = M0, s.length = r, s.return = "", s.siblings = a, s;
}
function Nt(x, i) {
  return lo(Ci("", null, null, "", null, null, 3 + 470 * -3 + -1 * -1407, x.siblings), x, { length: -x.length }, i);
}
function Z0(x) {
  for (; x.root; ) x = Nt(x.root, { children: [x] });
  ln(x, x.siblings);
}
function zd() {
  return fe;
}
function qd() {
  return fe = at > -48 * 144 + 1 * 6153 + 759 ? me(Q0, --at) : -9904 + -4952 * -2, M0--, fe === -4218 + -7 * -604 && (M0 = -6324 + -38 * 37 + 7731, fi--), fe;
}
function lt() {
  return fe = at < Qs ? me(Q0, at++) : -277 + 6551 * 1 + -6274, M0++, fe === -15 * -166 + 9019 + 1 * -11499 && (M0 = 1, fi++), fe;
}
function u0() {
  return me(Q0, at);
}
function Wx() {
  return at;
}
function pi(x, i) {
  return Y0(Q0, x, i);
}
function Io(x) {
  switch (x) {
    case 1772 * 4 + 2851 * 3 + -15641 * 1:
    case 1823 * 3 + -3884 + -394 * 4:
    case 4475 + 3 * 16 + -4513 * 1:
    case -9248 + -1 * 2960 + 12221:
    case 3129 + -663 * 5 + 218:
      return 6 * 1486 + -6634 + -9 * 253;
    case 553 + -23 * 155 + 3045:
    case -1672 + 245 * 7:
    case 1 * 2273 + 2193 + -4422:
    case 2357 * 1 + -82 * 5 + -2 * 950:
    case -1 * -4786 + -4967 + 243:
    case -3913 + -104 * -18 + 2105:
    case 126:
    case 3 * -1515 + -106 * 82 + 13296:
    case 4856 + 4733 * -1:
    case 125:
      return 2817 * -1 + 7556 + -4735;
    case 1 * -4014 + -1 * -8731 + -4659 * 1:
      return 4943 * 1 + -487 * 4 + -2992;
    case -23 * 210 + -1370 + 3117 * 2:
    case -5 * 884 + 2887 * -1 + 7346:
    case -1033 * -3 + 10 * -407 + 1011:
    case 91:
      return -8084 + -8086 * -1;
    case -7498 + -118 * -52 + 1403:
    case 93:
      return 1;
  }
  return 1 * -9334 + 7268 + -2066 * -1;
}
function $d(x) {
  return fi = M0 = 42 + 3146 * 2 + -6333, Qs = At(Q0 = x), at = -3943 + -3943 * -1, [];
}
function eu(x) {
  return Q0 = "", x;
}
function Di(x) {
  return Js(pi(at - (-9995 * 1 + -194 * 15 + -6453 * -2), fo(x === -3023 * 1 + 4 * -347 + 4502 ? x + (-163 * -58 + 8 * -346 + -6684) : x === -132 * 32 + 5478 + -2 * 607 ? x + (-43 * -90 + 4715 * -1 + 3 * 282) : x)));
}
function tu(x) {
  for (; (fe = u0()) && fe < -4629 + 264 * -18 + 9414; ) lt();
  return Io(x) > 2 || Io(fe) > -4 * -1109 + -1430 + -33 * 91 ? "" : " ";
}
function nu(x, i) {
  for (; --i && lt() && !(fe < 1429 + -379 * 3 + -61 * 4 || fe > 2849 + 41 * -67 || fe > -13632 + 507 * 27 && fe < 8677 * 1 + 2 * -2341 + -3930 || fe > 233 * -13 + -475 * -4 + -109 * -11 && fe < -905 + 6 * 167); ) ;
  return pi(x, Wx() + (i < -7 * -277 + 9085 + 5509 * -2 && u0() == 1 * -5701 + 8751 + -3018 && lt() == 137 * 7 + -148 * -18 + 19 * -189));
}
function fo(x) {
  for (; lt(); ) switch (fe) {
    case x:
      return at;
    case -1 * -7697 + 828 + 8491 * -1:
    case 186 + 1 * 7129 + -1819 * 4:
      x !== -4761 * 1 + 419 * -20 + 13175 && x !== -7889 + 5 * -1937 + 17613 && fo(fe);
      break;
    case -1 * -9113 + -1052 + -8021:
      x === 5962 + -99 * 9 + -5030 && fo(x);
      break;
    case -6454 + -89 * -97 + -2087:
      lt();
      break;
  }
  return at;
}
function xu(x, i) {
  for (; lt() && x + fe !== -8634 + 2311 * 2 + -1353 * -3 + (6891 + 1 * -501 + -6380); ) if (x + fe === -1 * 3601 + 3152 + -1 * -491 + (1231 + -29 * 41) && u0() === -9307 + 1987 * 4 + 38 * 37) break;
  return "/*" + pi(i, at - (-8711 + 1775 * -4 + 268 * 59)) + "*" + or(x === 5985 + -5938 * 1 ? x : lt());
}
function iu(x) {
  for (; !Io(u0()); ) lt();
  return pi(x, at);
}
function ou(x) {
  return eu(vx("", null, null, null, [""], x = $d(x), 0, [5594 + -2 * 2797], x));
}
function vx(x, i, t, e, n, o, r, a, s) {
  for (var c = 0, d = 1183 + -152 * -64 + -3 * 3637, g = r, C = -1 * 67 + -5749 + 5816, u = -229 * -18 + 1 * 7669 + -11791 * 1, p = 5 * -1721 + -2397 + -1 * -11002, m = 1, A = 4549 + 1137 * -4, l = -3299 * 3 + 375 + 9523, W = 7 * -719 + -9539 + 14572, k = "", D = n, Y = o, _ = e, H = k; A; ) switch (p = W, W = lt()) {
    case 2235 + 1 * -2195:
      if (p != -101 * -44 + 5246 + 9582 * -1 && me(H, g - (-3 * 2477 + 1208 + -1 * -6224)) == 4 * -1061 + -1 * -6747 + -2445) {
        yx(H += j(Di(W), "&", "&\f"), "&\f", _s(c ? a[c - (-2621 + -6469 * -1 + -3847)] : 719 * 11 + 9 * 887 + -15892)) != -(2471 * 1 + -15 * 619 + 6815) && (l = -(-1 * 5519 + 5076 + 444));
        break;
      }
    case -129 * -23 + 3896 + 6829 * -1:
    case 2068 + 1 * 9717 + -14 * 839:
    case 6253 + 8603 * -1 + 2441:
      H += Di(W);
      break;
    case -445 * -17 + -9006 + 1450:
    case 163 * -10 + -234 * 29 + 8426 * 1:
    case 5 * 1746 + -14 * 331 + -4083:
    case 1195 * 7 + -1724 * 1 + -3 * 2203:
      H += tu(p);
      break;
    case 7447 + 41 * -67 + -4608:
      H += nu(Wx() - 1, 7);
      continue;
    case -4302 + -1 * -4349:
      switch (u0()) {
        case -4845 + 4887 * 1:
        case -6301 + -1 * -8747 + -2399:
          ln(ru(xu(lt(), Wx()), i, t, s), s);
          break;
        default:
          H += "/";
      }
      break;
    case (-1242 + -2 * 3846 + 9057) * m:
      a[c++] = At(H) * l;
    case (-2382 + 611 * 2 + 1285) * m:
    case 9821 * 1 + -28 * 95 + -7102:
    case 7696 * -1 + -1456 + -104 * -88:
      switch (W) {
        case 0:
        case 438 * 7 + 1 * 1481 + 4422 * -1:
          A = 7175 + 2627 * -2 + -1921;
        case 3 * -179 + 22 * 158 + -2880 + d:
          l == -(-4413 + 1 * -245 + 4659) && (H = j(H, /\f/g, "")), u > -191 * -6 + -5509 + 4363 && At(H) - g && ln(u > 9981 + -5 * 652 + -6689 ? ba(H + ";", e, t, g - 1, s) : ba(j(H, " ", "") + ";", e, t, g - (-9031 * -1 + -6990 + -2039), s), s);
          break;
        case 2296 + 1 * -8943 + 2 * 3353:
          H += ";";
        default:
          if (ln(_ = ma(H, i, t, c, d, n, a, k, D = [], Y = [], g, o), o), W === -5065 + 3 * -1903 + 10897)
            if (d === 5459 * 1 + 734 * -8 + 413) vx(H, i, _, _, D, o, g, a, Y);
            else switch (C === 8305 * 1 + 4773 + -12979 && me(H, 3) === 80 * -71 + 4098 + 1692 ? -7 * -1349 + -8681 * -1 + -18024 : C) {
              case 6 * -745 + 6373 + -1803 * 1:
              case 8449 + 259 * -23 + -2384:
              case 109:
              case 115:
                vx(x, _, _, e && ln(ma(x, _, _, -6687 * 1 + -8067 + 1 * 14754, -2 * 1124 + 346 * 16 + 1 * -3288, n, a, k, n, D = [], g, Y), Y), n, Y, g, a, e ? D : Y);
                break;
              default:
                vx(H, _, _, _, [""], Y, -677 + 1 * 677, a, Y);
            }
      }
      c = d = u = 6361 + 8 * -193 + -4817 * 1, m = l = -13603 + 76 * 179, k = H = "", g = r;
      break;
    case -5 * 1354 + 8312 + -1484:
      g = 2127 + -8 * -113 + -3030 + At(H), u = p;
    default:
      if (m < 6505 + 1626 * -4) {
        if (W == -1 * 9057 + 2884 + 6296) --m;
        else if (W == 125 && m++ == 0 && qd() == 21 * 292 + -547 * 3 + 2183 * -2) continue;
      }
      switch (H += or(W), W * m) {
        case 38:
          l = d > 105 * -3 + 794 * -2 + 1903 ? 1012 + -1 * 3461 + -2450 * -1 : (H += "\f", -1);
          break;
        case 44:
          a[c++] = (At(H) - (-85 * -21 + 3622 + -5406)) * l, l = -9119 + 40 * 228;
          break;
        case 64:
          u0() === 1 * 3923 + -4821 * 2 + 5764 && (H += Di(lt())), C = u0(), d = g = At(k = H += iu(Wx())), W++;
          break;
        case 4463 * 2 + 7371 + -2 * 8126:
          p === 56 * -131 + 8879 * 1 + -1498 * 1 && At(H) == 5 * 593 + 807 * 2 + -4577 && (m = -4399 + 1 * 4399);
      }
  }
  return o;
}
function ma(x, i, t, e, n, o, r, a, s, c, d, g) {
  for (var C = n - 1, u = n === -665 * 6 + 67 * 137 + 1 * -5189 ? o : [""], p = Us(u), m = -1 * -8105 + 2099 * -2 + -3907, A = 34 * 18 + -4991 + -1 * -4379, l = -8750 + -2 * -1322 + 1 * 6106; m < e; ++m) for (var W = 2 * -4318 + -1678 + -2 * -5157, k = Y0(x, C + (844 * 6 + -8800 + -101 * -37), C = _s(A = r[m])), D = x; W < p; ++W) (D = Js(A > -1 * -6007 + -582 + 775 * -7 ? u[W] + " " + k : j(k, /&\f/g, u[W]))) && (s[l++] = D);
  return Ci(x, i, t, n === -3 * -2858 + -9194 + -620 * -1 ? Ii : a, s, c, d, g);
}
function ru(x, i, t, e) {
  return Ci(x, i, t, js, or(zd()), Y0(x, -65 * 121 + 6759 + -554 * -2, -(-886 * -11 + 218 * -45 + -2 * -33)), 1 * 6537 + -7784 + 1247, e);
}
function ba(x, i, t, e, n) {
  return Ci(x, i, t, ir, Y0(x, 0, e), Y0(x, e + (-20 * -377 + 8925 + 784 * -21), -(-181 * -24 + -8e3 + -159 * -23)), e, n);
}
function zs(x, i, t) {
  switch (Ud(x, i)) {
    case -8446 + -797 * -17:
      return ee + "print-" + x + x;
    case 5737:
    case 8 * -981 + -6442 + -18491 * -1:
    case -13 * 39 + 61 * 7 + 3257:
    case 1808 + 12 * -293 + -53 * -97:
    case 2741 * -2 + -9789 + -1 * -16912:
    case -97 * 71 + 4509 * -1 + 15853:
    case 303 * -11 + 6973 * -1 + 13227:
    case 2936 + 6 * -1612 + 724 * 17:
    case 86 * 67 + 4 * 2479 + -9322:
    case -17 * 526 + 8421 + 1273 * 5:
    case 3205 + 13 * -461 + -3 * -1993:
    case 22 * -242 + -1976 * 1 + 13945:
    case -3 * -1821 + 7403 + 9861 * -1:
    case -1034 + -4 * -1797 + 237:
    case 685 + -1 * -3617 + 19 * 83:
    case -822 + 4 * 1559 + 209:
    case -4324 * -1 + -51 * -149 + -1 * 5788:
    case 2297 * -3 + 8592 + 2898:
    case 7324 + 1514 * -5 + 1 * 5101:
    case -5419 * 1 + -7783 + 17417:
    case 1779 * -2 + 1 * 3779 + 1 * 6168:
    case 33 * 43 + -2997 + 1 * 6687:
    case 6936 + -49 * 177 + 3551 * 2:
    case -7048 + -309 * -41:
    case 1186 + -41 * 167 + 9490:
      return ee + x + x;
    case 53 * -5 + 3015 + -2039 * -1:
      return bn + x + x;
    case 1193 * 1 + -2971 + 7127 * 1:
    case 4246:
    case -1 * 7603 + -5 * -1959 + 7 * 374:
    case 6968:
    case -35 * 202 + -4799 * -2 + -76 * -3:
      return ee + x + bn + x + ae + x + x;
    case 163 * -31 + -8 * -52 + 10573:
      switch (me(x, i + (29 * 202 + 21 * -362 + 1755))) {
        case -6097 + -1 * -6211:
          return ee + x + ae + j(x, /[svh]\w+-[tblr]{2}/, "tb") + x;
        case -9926 + -58 * -173:
          return ee + x + ae + j(x, /[svh]\w+-[tblr]{2}/, "tb-rl") + x;
        case -1 * -4549 + 5194 * -1 + 690:
          return ee + x + ae + j(x, /[svh]\w+-[tblr]{2}/, "lr") + x;
      }
    case 2 * 6763 + -1 * -1163 + -7861:
    case -4044 * -1 + -2621 + 2845:
    case -1792 + -1 * 9993 + 14688:
      return ee + x + ae + x + x;
    case -6 * -100 + 7950 + -15 * 159:
      return ee + x + ae + "flex-" + x + x;
    case 1 * 10144 + 2888 + -1569 * 5:
      return ee + x + j(x, /(\w+).+(:[^]+)/, ee + "box-$1$2" + ae + "flex-$1$2") + x;
    case 5443:
      return ee + x + ae + "flex-item-" + j(x, /flex-|-self/g, "") + (Zt(x, /flex-|baseline/) ? "" : ae + "grid-row-" + j(x, /flex-|-self/g, "")) + x;
    case 2665 + -1 * 3273 + 9 * 587:
      return ee + x + ae + "flex-line-pack" + j(x, /align-content|flex-|-self/g, "") + x;
    case 1 * 5683 + -728 * 15 + 10785:
      return ee + x + ae + j(x, "shrink", "negative") + x;
    case 5737 * 1 + -4 * 843 + 2927:
      return ee + x + ae + j(x, "basis", "preferred-size") + x;
    case 687 * 17 + -26 * 141 + -1953:
      return ee + "box-" + j(x, "-grow", "") + ee + x + ae + j(x, "grow", "positive") + x;
    case -8243 + 4528 * -2 + -1 * -21853:
      return ee + j(x, /([^-])(transform)/g, "$1" + ee + "$2") + x;
    case 6187:
      return j(j(j(x, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), x, "") + x;
    case 8481 + -2986 * 1:
    case -14 * -431 + 7050 + 25 * -365:
      return j(x, /(image-set\([^]*)/, ee + "$1$`$1");
    case -3835 + -5689 * -1 + -3114 * -1:
      return j(j(x, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + ae + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + x + x;
    case 4200:
      if (!Zt(x, /flex-|baseline/)) return ae + "grid-column-align" + Y0(x, i) + x;
      break;
    case 8 * 211 + -9523 + 10427:
    case 1432 * -4 + 6714 + 1187 * 2:
      return ae + j(x, "template-", "") + x;
    case 1 * -1082 + 4902 + 564:
    case -587 * 11 + 3700 + 6373:
      return t && t.some(function(e, n) {
        return i = n, Zt(e.props, /grid-\w+-end/);
      }) ? ~yx(x + (t = t[i].value), "span", 4629 * -1 + -6307 + 10936) ? x : ae + j(x, "-start", "") + x + ae + "grid-row-span:" + (~yx(t, "span", -9897 + -311 * -2 + 1325 * 7) ? Zt(t, /\d+/) : +Zt(t, /\d+/) - +Zt(x, /\d+/)) + ";" : ae + j(x, "-start", "") + x;
    case 7683 + 2787 * -1:
    case 6 * 1259 + -7146 + 3720:
      return t && t.some(function(e) {
        return Zt(e.props, /grid-\w+-start/);
      }) ? x : ae + j(j(x, "-end", "-span"), "span ", "") + x;
    case 3170 + -25 * -37:
    case 3583:
    case 3980 + 4 * 22:
    case -12513 + -3 * -5015:
      return j(x, /(.+)-inline(.+)/, ee + "$1$2") + x;
    case -2091 + 383 * -41 + 10 * 2591:
    case -7515 + -1 * 4603 + 19177:
    case 5211 * 1 + -2681 + 3223 * 1:
    case 1889 * -2 + 149 * 37 + -40 * -95:
    case -3835 + -20 * -464:
    case 731 * 12 + 8043 + 1 * -11114:
    case 149 * 21 + -1159 + 2963:
    case 6274 + -102 * 29 + 1361:
    case 8579 * 1 + 53 * -30 + 56 * -26:
    case 1698 * -1 + -1 * -7289 + 198:
    case -7054 + 75 * 161:
    case -4758 + 486 * 5 + 7093:
      if (At(x) - (-18 * -417 + -1619 * 6 + -2209 * -1) - i > -1 * 2323 + -2 * 2903 + -1 * -8135) switch (me(x, i + (14766 + 5 * -2953))) {
        case -2017 * 1 + -4615 + 963 * 7:
          if (me(x, i + (-14422 + 14426 * 1)) !== -9230 * -1 + 1746 + -10931) break;
        case 3257 * 1 + 1 * -5041 + -23 * -82:
          return j(x, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + bn + (me(x, i + (4 * 1742 + 3969 + -10934)) == 108 ? "$3" : "$2-$3")) + x;
        case -1093 + -24 * -157 + -80 * 32:
          return ~yx(x, "stretch", 3539 * 1 + 197 * -19 + 204) ? zs(j(x, "stretch", "fill-available"), i, t) + x : x;
      }
      break;
    case -1 * 7996 + -2 * 237 + -139 * -98:
    case -7291 + 1489 * 2 + -27 * -379:
      return j(x, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, o, r, a, s, c) {
        return ae + n + ":" + o + c + (r ? ae + n + "-span:" + (a ? s : +s - +o) + c : "") + x;
      });
    case -5853 + 982 * 11:
      if (me(x, i + (-559 * 1 + 3002 * 2 + -5439)) === 8793 + -111 * -76 + 52 * -329) return j(x, ":", ":" + ee) + x;
      break;
    case 1 * 9464 + 13 * 421 + 57 * -149:
      switch (me(x, me(x, -251 * 15 + -23 * 346 + 11737) === 1877 * -3 + -20 * 145 + 8576 ? -7755 + -7773 * -1 : 4096 + -6 * 932 + 137 * 11)) {
        case -1 * -43 + 2578 + -2501:
          return j(x, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (me(x, -7146 + -7786 * -1 + -626) === 45 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + ae + "$2box$3") + x;
        case -11543 + 1 * 11643:
          return j(x, ":", ":" + ae) + x;
      }
      break;
    case 942 * -3 + -1501 * -1 + 1174 * 6:
    case -156 * 1 + 443 + 2360:
    case -6 * -1107 + 5 * -890 + -57:
    case -7901 * 1 + -2186 + 77 * 182:
    case -5 * -13 + -9290 + 66 * 176:
      return j(x, "scroll-", "scroll-snap-") + x;
  }
  return x;
}
function Tx(x, i) {
  for (var t = "", e = 0; e < x.length; e++) t += i(x[e], e, x, i) || "";
  return t;
}
function au(x, i, t, e) {
  switch (x.type) {
    case Jd:
      if (x.children.length) break;
    case _d:
    case ir:
      return x.return = x.return || x.value;
    case js:
      return "";
    case Xs:
      return x.return = x.value + "{" + Tx(x.children, e) + "}";
    case Ii:
      if (!At(x.value = x.props.join(","))) return "";
  }
  return At(t = Tx(x.children, e)) ? x.return = x.value + "{" + t + "}" : "";
}
function su(x) {
  var i = Us(x);
  return function(t, e, n, o) {
    for (var r = "", a = -763 * -7 + 1 * 7240 + -1 * 12581; a < i; a++) r += x[a](t, e, n, o) || "";
    return r;
  };
}
function cu(x) {
  return function(i) {
    i.root || (i = i.return) && x(i);
  };
}
function gu(x, i, t, e) {
  if (x.length > -(-1 * 3908 + -1 * 5277 + 6 * 1531) && !x.return)
    switch (x.type) {
      case ir:
        x.return = zs(x.value, x.length, t);
        return;
      case Xs:
        return Tx([Nt(x, { value: j(x.value, "@", "@" + ee) })], e);
      case Ii:
        if (x.length) return Qd(t = x.props, function(n) {
          switch (Zt(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              Z0(Nt(x, { props: [j(n, /:(read-\w+)/, ":" + bn + "$1")] }));
              var o = {};
              o.props = [n], Z0(Nt(x, o)), lo(x, { props: ha(t, e) });
              break;
            case "::placeholder":
              Z0(Nt(x, { props: [j(n, /:(plac\w+)/, ":" + ee + "input-$1")] })), Z0(Nt(x, { props: [j(n, /:(plac\w+)/, ":" + bn + "$1")] })), Z0(Nt(x, { props: [j(n, /:(plac\w+)/, ae + "input-$1")] }));
              var r = {};
              r.props = [n], Z0(Nt(x, r)), lo(x, { props: ha(t, e) });
              break;
          }
          return "";
        });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var du = N, z = {}, C0 = typeof process < "u" && z !== void 0 && (z.REACT_APP_SC_ATTR || z.SC_ATTR) || "data-styled", qs = "active", $s = "data-styled-version", hi = "6.1.11", rr = `/*!sc*/
`, ar = typeof window < "u" && "HTMLElement" in window, uu = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (1382 + -369 * 3 + 11 * -25) !== z && void (29 * 67 + -8997 + 3527 * 2) !== z.REACT_APP_SC_DISABLE_SPEEDY && z.REACT_APP_SC_DISABLE_SPEEDY !== "" ? z.REACT_APP_SC_DISABLE_SPEEDY !== "false" && z.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (4938 + -3 * 1646) !== z && z.SC_DISABLE_SPEEDY !== void 0 && z.SC_DISABLE_SPEEDY !== "" ? z.SC_DISABLE_SPEEDY !== "false" && z.SC_DISABLE_SPEEDY : z.NODE_ENV !== "production"), Aa = /invalid hook call/i, gx = /* @__PURE__ */ new Set(), lu = function(x, i) {
  if (z.NODE_ENV !== "production") {
    var t = i ? ' with the id of "'.concat(i, '"') : "", e = "The component ".concat(x).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var a = [], s = 8049 + 1 * -8048; s < arguments.length; s++) a[s - (481 + -2614 * -2 + -5708)] = arguments[s];
        Aa.test(r) ? (o = !1, gx.delete(e)) : n.apply(void 0, N0([r], a, !1));
      }, It(), o && !gx.has(e) && (console.warn(e), gx.add(e));
    } catch (r) {
      Aa.test(r.message) && gx.delete(e);
    } finally {
      console.error = n;
    }
  }
}, mi = Object.freeze([]), j0 = Object.freeze({});
function Iu(x, i, t) {
  return void (3958 * 2 + -4527 * -2 + 8485 * -2) === t && (t = j0), x.theme !== t.theme && x.theme || i || t.theme;
}
var Co = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), fu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Cu = /(^-|-$)/g;
function ya(x) {
  return x.replace(fu, "-").replace(Cu, "");
}
var pu = /(a)(d)/gi, dx = -1 * -5302 + 4520 + 4885 * -2, Wa = function(x) {
  return String.fromCharCode(x + (x > 6512 + 110 * 23 + 9017 * -1 ? -9263 * 1 + 302 * 24 + 2054 : 97));
};
function po(x) {
  var i, t = "";
  for (i = Math.abs(x); i > dx; i = i / dx | 3 * 1078 + 6131 * 1 + 5 * -1873) t = Wa(i % dx) + t;
  return (Wa(i % dx) + t).replace(pu, "$1-$2");
}
var Ni, ec = -8271 + 9 * -34 + 13958, x0 = function(x, i) {
  for (var t = i.length; t; ) x = (7 * -381 + -9847 + -12547 * -1) * x ^ i.charCodeAt(--t);
  return x;
}, tc = function(x) {
  return x0(ec, x);
};
function hu(x) {
  return po(tc(x) >>> -260 + -4 * -65);
}
function nc(x) {
  return z.NODE_ENV !== "production" && typeof x == "string" && x || x.displayName || x.name || "Component";
}
function Fi(x) {
  return typeof x == "string" && (z.NODE_ENV === "production" || x.charAt(-557 * 3 + -1126 + 2797) === x.charAt(2 * 3959 + -6209 * -1 + -14127).toLowerCase());
}
var tt = {};
tt.childContextTypes = !0, tt.contextType = !0, tt.contextTypes = !0, tt.defaultProps = !0, tt.displayName = !0, tt.getDefaultProps = !0, tt.getDerivedStateFromError = !0, tt.getDerivedStateFromProps = !0, tt.mixins = !0, tt.propTypes = !0, tt.type = !0;
var Ft = {};
Ft.name = !0, Ft.length = !0, Ft.prototype = !0, Ft.caller = !0, Ft.callee = !0, Ft.arguments = !0, Ft.arity = !0;
var t0 = {};
t0.$$typeof = !0, t0.compare = !0, t0.defaultProps = !0, t0.displayName = !0, t0.propTypes = !0, t0.type = !0;
var K0 = {};
K0.$$typeof = !0, K0.render = !0, K0.defaultProps = !0, K0.displayName = !0, K0.propTypes = !0;
var xc = typeof Symbol == "function" && Symbol.for, ic = xc ? Symbol.for("react.memo") : -77265 + -13 * 5955 + 214795, mu = xc ? Symbol.for("react.forward_ref") : -62489 * -1 + -36 * -3143 + 25 * -4621, bu = tt, Au = Ft, oc = t0, yu = ((Ni = {})[mu] = K0, Ni[ic] = oc, Ni);
function va(x) {
  return ("type" in (i = x) && i.type.$$typeof) === ic ? oc : "$$typeof" in x ? yu[x.$$typeof] : bu;
  var i;
}
var Wu = Object.defineProperty, vu = Object.getOwnPropertyNames, Sa = Object.getOwnPropertySymbols, Su = Object.getOwnPropertyDescriptor, wu = Object.getPrototypeOf, wa = Object.prototype;
function rc(x, i, t) {
  if (typeof i != "string") {
    if (wa) {
      var e = wu(i);
      e && e !== wa && rc(x, e, t);
    }
    var n = vu(i);
    Sa && (n = n.concat(Sa(i)));
    for (var o = va(x), r = va(i), a = 0; a < n.length; ++a) {
      var s = n[a];
      if (!(s in Au || t && t[s] || r && s in r || o && s in o)) {
        var c = Su(i, s);
        try {
          Wu(x, s, c);
        } catch {
        }
      }
    }
  }
  return x;
}
function X0(x) {
  return typeof x == "function";
}
function sr(x) {
  return typeof x == "object" && "styledComponentId" in x;
}
function o0(x, i) {
  return x && i ? "".concat(x, " ").concat(i) : x || i || "";
}
function Ba(x, i) {
  if (-7740 + 7085 * 1 + -1 * -655 === x.length) return "";
  for (var t = x[0], e = 3045 + 2 * -1465 + -114; e < x.length; e++) t += x[e];
  return t;
}
function _0(x) {
  return x !== null && typeof x == "object" && x.constructor.name === Object.name && !("props" in x && x.$$typeof);
}
function ho(x, i, t) {
  if (void (9331 * -1 + 1924 + 823 * 9) === t && (t = !1), !t && !_0(x) && !Array.isArray(x)) return i;
  if (Array.isArray(i))
    for (var e = 1 * -3011 + 2 * 3119 + 3227 * -1; e < i.length; e++) x[e] = ho(x[e], i[e]);
  else if (_0(i))
    for (var e in i) x[e] = ho(x[e], i[e]);
  return x;
}
function cr(x, i) {
  var t = {};
  t.value = i, Object.defineProperty(x, "toString", t);
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
var Bu = z.NODE_ENV !== "production" ? pe : {};
function Gu() {
  for (var x = [], i = -1 * 4477 + 5857 + -1380; i < arguments.length; i++) x[i] = arguments[i];
  for (var t = x[3608 + -11 * 328], e = [], n = 1, o = x.length; n < o; n += -1 * -3970 + 4802 + -8771) e.push(x[n]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function z0(x) {
  for (var i = [], t = 1; t < arguments.length; t++) i[t - (-7 * -431 + 9769 * -1 + 2251 * 3)] = arguments[t];
  return z.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(x, " for more information.").concat(i.length > 0 ? " Args: ".concat(i.join(", ")) : "")) : new Error(Gu.apply(void (7248 + 437 * 15 + -321 * 43), N0([Bu[x]], i, !1)).trim());
}
var ku = function() {
  function x(i) {
    this.groupSizes = new Uint32Array(829 * 1 + 5612 + 11 * -539), this.length = 9079 * 1 + 6246 + 14813 * -1, this.tag = i;
  }
  return x.prototype.indexOfGroup = function(i) {
    for (var t = 403 * 3 + -1 * -3011 + -4220, e = 2 * 3803 + -8647 + 1041; e < i; e++) t += this.groupSizes[e];
    return t;
  }, x.prototype.insertRules = function(i, t) {
    if (i >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, o = n; i >= o; ) if ((o <<= -1 * 3415 + -934 * -8 + 13 * -312) < -8565 + -1 * 3387 + -996 * -12) throw z0(-1658 * 1 + -548 + 2222, "".concat(i));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = n; r < o; r++) this.groupSizes[r] = 4596 + -54 * -26 + -6e3;
    }
    for (var a = this.indexOfGroup(i + 1), s = (r = -149 * 37 + 4106 + 1407, t.length); r < s; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[i]++, a++);
  }, x.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var t = this.groupSizes[i], e = this.indexOfGroup(i), n = e + t;
      this.groupSizes[i] = 68 * -130 + -4817 * 2 + 1 * 18474;
      for (var o = e; o < n; o++) this.tag.deleteRule(e);
    }
  }, x.prototype.getGroup = function(i) {
    var t = "";
    if (i >= this.length || 8749 + -8087 * 1 + -662 === this.groupSizes[i]) return t;
    for (var e = this.groupSizes[i], n = this.indexOfGroup(i), o = n + e, r = n; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(rr);
    return t;
  }, x;
}(), Ou = -14747 + 6 * 2458 << 3 * -3089 + 2113 * -1 + -70 * -163, Sx = /* @__PURE__ */ new Map(), Ex = /* @__PURE__ */ new Map(), wx = 1, ux = function(x) {
  if (Sx.has(x)) return Sx.get(x);
  for (; Ex.has(wx); ) wx++;
  var i = wx++;
  if (z.NODE_ENV !== "production" && ((2071 + 1 * -5868 + -1 * -3797 | i) < 22 * -341 + 2742 + 340 * 14 || i > Ou)) throw z0(-71 * -59 + -1 * -3977 + -8150, "".concat(i));
  return Sx.set(x, i), Ex.set(i, x), i;
}, Zu = function(x, i) {
  wx = i + 1, Sx.set(x, i), Ex.set(i, x);
}, Hu = "style[".concat(C0, "][").concat($s, '="').concat(hi, '"]'), Ru = new RegExp("^".concat(C0, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ku = function(x, i, t) {
  for (var e, n = t.split(","), o = 1977 * 1 + 7771 * 1 + 4874 * -2, r = n.length; o < r; o++) (e = n[o]) && x.registerName(i, e);
}, Pu = function(x, i) {
  for (var t, e = ((t = i.textContent) !== null && void (324 * 3 + 7 * -401 + -1835 * -1) !== t ? t : "").split(rr), n = [], o = 0, r = e.length; o < r; o++) {
    var a = e[o].trim();
    if (a) {
      var s = a.match(Ru);
      if (s) {
        var c = 0 | parseInt(s[1], 10), d = s[1 * -6037 + -36 * 79 + 8883];
        -5618 + 911 * 1 + 4707 !== c && (Zu(d, c), Ku(x, d, s[-12463 + 6233 * 2]), x.getTag().insertRules(c, n)), n.length = 0;
      } else n.push(a);
    }
  }
};
function Tu() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ac = function(x) {
  var i = document.head, t = x || i, e = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(C0, "]")));
    return s[s.length - (1 * 2874 + 123 * 5 + -3488)];
  }(t), o = void (-425 * 2 + -6875 + -1545 * -5) !== n ? n.nextSibling : null;
  e.setAttribute(C0, qs), e.setAttribute($s, hi);
  var r = Tu();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, Eu = function() {
  function x(i) {
    this.element = ac(i), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = 0, o = e.length; n < o; n++) {
        var r = e[n];
        if (r.ownerNode === t) return r;
      }
      throw z0(4024 + -4007 * 1);
    }(this.element), this.length = 13 * -315 + -8 * 877 + -11111 * -1;
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
}(), Vu = function() {
  function x(i) {
    this.element = ac(i), this.nodes = this.element.childNodes, this.length = 0;
  }
  return x.prototype.insertRule = function(i, t) {
    if (i <= this.length && i >= 31 * 61 + -1 * 8828 + 6937) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }, x.prototype.deleteRule = function(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }, x.prototype.getRule = function(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }, x;
}(), Lu = function() {
  function x(i) {
    this.rules = [], this.length = 6961 * -1 + 3830 * 1 + 3131;
  }
  return x.prototype.insertRule = function(i, t) {
    return i <= this.length && (this.rules.splice(i, 1027 * -5 + -9626 + 14761, t), this.length++, !0);
  }, x.prototype.deleteRule = function(i) {
    this.rules.splice(i, 2441 * 2 + 1670 * 4 + -11561), this.length--;
  }, x.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, x;
}(), Ga = ar, Du = { isServer: !ar, useCSSOMInjection: !uu }, sc = function() {
  function x(i, t, e) {
    void (9164 + 79 * -116) === i && (i = j0), void (-3492 + -1 * -3492) === t && (t = {});
    var n = this;
    this.options = Ye(Ye({}, Du), i), this.gs = t, this.names = new Map(e), this.server = !!i.isServer, !this.server && ar && Ga && (Ga = !1, function(o) {
      for (var r = document.querySelectorAll(Hu), a = -1 * 1091 + -9767 + -1 * -10858, s = r.length; a < s; a++) {
        var c = r[a];
        c && c.getAttribute(C0) !== qs && (Pu(o, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), cr(this, function() {
      return function(o) {
        for (var r = o.getTag(), a = r.length, s = "", c = function(g) {
          var C = function(l) {
            return Ex.get(l);
          }(g);
          if (void (-1843 * 1 + 17 * 537 + -7286) === C) return "continue";
          var u = o.names.get(C), p = r.getGroup(g);
          if (void (-36 * -91 + -29 * -61 + -5045 * 1) === u || -62 * 122 + 5358 + 2206 === p.length) return "continue";
          var m = "".concat(C0, ".g").concat(g, '[id="').concat(C, '"]'), A = "";
          void (-89 * 93 + 5163 + 3114) !== u && u.forEach(function(l) {
            l.length > 41 * -59 + 2605 * -2 + -2543 * -3 && (A += "".concat(l, ","));
          }), s += "".concat(p).concat(m, '{content:"').concat(A, '"}').concat(rr);
        }, d = 0; d < a; d++) c(d);
        return s;
      }(n);
    });
  }
  return x.registerId = function(i) {
    return ux(i);
  }, x.prototype.reconstructWithOptions = function(i, t) {
    return t === void 0 && (t = !0), new x(Ye(Ye({}, this.options), i), this.gs, t && this.names || void (-3894 * 2 + -1 * -7843 + -55));
  }, x.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || 4711 * -1 + -2205 + -266 * -26) + (2776 + -298 * -3 + -3 * 1223);
  }, x.prototype.getTag = function() {
    return this.tag || (this.tag = (i = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new Lu(n) : e ? new Eu(n) : new Vu(n);
    }(this.options), new ku(i)));
    var i;
  }, x.prototype.hasNameForId = function(i, t) {
    return this.names.has(i) && this.names.get(i).has(t);
  }, x.prototype.registerName = function(i, t) {
    if (ux(i), this.names.has(i)) this.names.get(i).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(i, e);
    }
  }, x.prototype.insertRules = function(i, t, e) {
    this.registerName(i, t), this.getTag().insertRules(ux(i), e);
  }, x.prototype.clearNames = function(i) {
    this.names.has(i) && this.names.get(i).clear();
  }, x.prototype.clearRules = function(i) {
    this.getTag().clearGroup(ux(i)), this.clearNames(i);
  }, x.prototype.clearTag = function() {
    this.tag = void (9343 + 46 * -108 + -4375);
  }, x;
}(), Nu = /&/g, Fu = /^\s*\/\/.*$/gm;
function cc(x, i) {
  return x.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(i, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(i, " ")), t.props = t.props.map(function(e) {
      return "".concat(i, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = cc(t.children, i)), t;
  });
}
function gc(x) {
  var i, t, e, n = x === void 0 ? j0 : x, o = n.options, r = void (71 + -71 * 1) === o ? j0 : o, a = n.plugins, s = void (-7214 * -1 + -4149 + 3065 * -1) === a ? mi : a, c = function(C, u, p) {
    return p.startsWith(t) && p.endsWith(t) && p.replaceAll(t, "").length > -5178 + -7602 * 1 + 12780 ? ".".concat(i) : C;
  }, d = s.slice();
  d.push(function(C) {
    C.type === Ii && C.value.includes("&") && (C.props[-3244 + 137 * -62 + 11738] = C.props[-6074 + 5 * 478 + 3684].replace(Nu, t).replace(e, c));
  }), r.prefix && d.push(gu), d.push(au);
  var g = function(C, u, p, m) {
    void (-106 * 86 + -7314 + 16430) === u && (u = ""), void (-1 * -1556 + 3188 * 2 + 4 * -1983) === p && (p = ""), void (6064 * -1 + -1 * 2485 + 8549 * 1) === m && (m = "&"), i = m, t = u, e = new RegExp("\\".concat(t, "\\b"), "g");
    var A = C.replace(Fu, ""), l = ou(p || u ? "".concat(p, " ").concat(u, " { ").concat(A, " }") : A);
    r.namespace && (l = cc(l, r.namespace));
    var W = [];
    return Tx(l, su(d.concat(cu(function(k) {
      return W.push(k);
    })))), W;
  };
  return g.hash = s.length ? s.reduce(function(C, u) {
    return u.name || z0(-9533 * -1 + -2222 * -3 + -16184), x0(C, u.name);
  }, ec).toString() : "", g;
}
var Yu = new sc(), mo = gc(), gr = f0.createContext({ shouldForwardProp: void (-458 + -2 * 4166 + 1758 * 5), styleSheet: Yu, stylis: mo });
gr.Consumer;
var Mu = f0.createContext(void (299 * -11 + 2455 + 3 * 278));
function bo() {
  return m0(gr);
}
function ju(x) {
  var i = Me(x.stylisPlugins), t = i[0], e = i[8814 + -2 * -4631 + -18075], n = bo().styleSheet, o = Qe(function() {
    var d = n, g = {};
    return g.useCSSOMInjection = !1, x.sheet ? d = x.sheet : x.target && (d = d.reconstructWithOptions({ target: x.target }, !1)), x.disableCSSOMInjection && (d = d.reconstructWithOptions(g)), d;
  }, [x.disableCSSOMInjection, x.sheet, x.target, n]), r = Qe(function() {
    var d = {};
    d.namespace = x.namespace, d.prefix = x.enableVendorPrefixes;
    var g = {};
    return g.options = d, g.plugins = t, gc(g);
  }, [x.enableVendorPrefixes, x.namespace, t]);
  ge(function() {
    Xd(t, x.stylisPlugins) || e(x.stylisPlugins);
  }, [x.stylisPlugins]);
  var a = Qe(function() {
    var d = {};
    return d.shouldForwardProp = x.shouldForwardProp, d.styleSheet = o, d.stylis = r, d;
  }, [x.shouldForwardProp, o, r]), s = {};
  s.value = a;
  var c = {};
  return c.value = r, f0.createElement(gr.Provider, s, f0.createElement(Mu.Provider, c, x.children));
}
var ka = function() {
  function x(i, t) {
    var e = this;
    this.inject = function(n, o) {
      void (2505 * -1 + -4600 + 7105) === o && (o = mo);
      var r = e.name + o.hash;
      n.hasNameForId(e.id, r) || n.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = t, cr(this, function() {
      throw z0(-45 * 29 + 1542 * 2 + -19 * 93, String(e.name));
    });
  }
  return x.prototype.getName = function(i) {
    return void (-31 * 271 + 9383 + -982) === i && (i = mo), this.name + i.hash;
  }, x;
}(), Xu = function(x) {
  return x >= "A" && x <= "Z";
};
function Oa(x) {
  for (var i = "", t = -10756 + -5378 * -2; t < x.length; t++) {
    var e = x[t];
    if (1560 + -1 * 1559 === t && e === "-" && x[-7023 + 677 * 1 + 6346] === "-") return x;
    Xu(e) ? i += "-" + e.toLowerCase() : i += e;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var dc = function(x) {
  return x == null || x === !1 || x === "";
}, uc = function(x) {
  var i, t, e = [];
  for (var n in x) {
    var o = x[n];
    x.hasOwnProperty(n) && !dc(o) && (Array.isArray(o) && o.isCss || X0(o) ? e.push("".concat(Oa(n), ":"), o, ";") : _0(o) ? e.push.apply(e, N0(N0(["".concat(n, " {")], uc(o), !1), ["}"], !1)) : e.push("".concat(Oa(n), ": ").concat((i = n, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -7742 + -26 * 70 + 9562 === t || i in du || i.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function l0(x, i, t, e) {
  if (dc(x)) return [];
  if (sr(x)) return [".".concat(x.styledComponentId)];
  if (X0(x)) {
    if (!X0(o = x) || o.prototype && o.prototype.isReactComponent || !i) return [x];
    var n = x(i);
    return z.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof ka || _0(n) || n === null || console.error("".concat(nc(x), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), l0(n, i, t, e);
  }
  var o;
  return x instanceof ka ? t ? (x.inject(t, e), [x.getName(e)]) : [x] : _0(x) ? uc(x) : Array.isArray(x) ? Array.prototype.concat.apply(mi, x.map(function(r) {
    return l0(r, i, t, e);
  })) : [x.toString()];
}
function _u(x) {
  for (var i = -1 * -1205 + -6758 + 1851 * 3; i < x.length; i += 8201 + -1151 * 2 + -5898) {
    var t = x[i];
    if (X0(t) && !sr(t)) return !1;
  }
  return !0;
}
var Ju = tc(hi), Uu = function() {
  function x(i, t, e) {
    this.rules = i, this.staticRulesId = "", this.isStatic = z.NODE_ENV === "production" && (e === void 0 || e.isStatic) && _u(i), this.componentId = t, this.baseHash = x0(Ju, t), this.baseStyle = e, sc.registerId(t);
  }
  return x.prototype.generateAndInjectStyles = function(i, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = o0(n, this.staticRulesId);
      else {
        var o = Ba(l0(this.rules, i, t, e)), r = po(x0(this.baseHash, o) >>> 0);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        n = o0(n, r), this.staticRulesId = r;
      }
    else {
      for (var s = x0(this.baseHash, e.hash), c = "", d = 2634 * -1 + -8795 + 11429; d < this.rules.length; d++) {
        var g = this.rules[d];
        if (typeof g == "string") c += g, z.NODE_ENV !== "production" && (s = x0(s, g));
        else if (g) {
          var C = Ba(l0(g, i, t, e));
          s = x0(s, C + d), c += C;
        }
      }
      if (c) {
        var u = po(s >>> 0);
        t.hasNameForId(this.componentId, u) || t.insertRules(this.componentId, u, e(c, ".".concat(u), void (954 + -576 * 7 + 3078), this.componentId)), n = o0(n, u);
      }
    }
    return n;
  }, x;
}(), lc = f0.createContext(void (118 * -74 + 515 * -11 + 3 * 4799));
lc.Consumer;
var Yi = {}, Za = /* @__PURE__ */ new Set();
function Qu(x, i, t) {
  var e = sr(x), n = x, o = !Fi(x), r = i.attrs, a = void (-844 * 2 + -6053 + 7741) === r ? mi : r, s = i.componentId, c = void (-529 * -13 + 2017 + -8894) === s ? function(Y, _) {
    var H = typeof Y != "string" ? "sc" : ya(Y);
    Yi[H] = (Yi[H] || 2100 + -2 * 1437 + -2 * -387) + (-5802 + 1 * 5803);
    var re = "".concat(H, "-").concat(hu(hi + H + Yi[H]));
    return _ ? "".concat(_, "-").concat(re) : re;
  }(i.displayName, i.parentComponentId) : s, d = i.displayName, g = d === void 0 ? function(Y) {
    return Fi(Y) ? "styled.".concat(Y) : "Styled(".concat(nc(Y), ")");
  }(x) : d, C = i.displayName && i.componentId ? "".concat(ya(i.displayName), "-").concat(i.componentId) : i.componentId || c, u = e && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, p = i.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var m = n.shouldForwardProp;
    if (i.shouldForwardProp) {
      var A = i.shouldForwardProp;
      p = function(Y, _) {
        return m(Y, _) && A(Y, _);
      };
    } else p = m;
  }
  var l = new Uu(t, C, e ? n.componentStyle : void (-4229 + -4229 * -1));
  function W(Y, _) {
    return function(H, re, U) {
      var te = H.attrs, Ve = H.componentStyle, Ze = H.defaultProps, Et = H.foldedComponentIds, Ut = H.styledComponentId, ke = H.target, st = f0.useContext(lc), zn = bo(), A0 = H.shouldForwardProp || zn.shouldForwardProp;
      z.NODE_ENV !== "production" && Px(Ut);
      var nn = Iu(re, st, Ze) || j0, qe = function(W0, je, Ct) {
        var $e = {};
        $e.className = void (-3036 + 4927 * -1 + 7963), $e.theme = Ct;
        for (var Qt, pt = Ye(Ye({}, je), $e), ct = -69 * -125 + 4679 + -13304; ct < W0.length; ct += -1 * 915 + 8738 + -7822) {
          var zt = X0(Qt = W0[ct]) ? Qt(pt) : Qt;
          for (var gt in zt) pt[gt] = gt === "className" ? o0(pt[gt], zt[gt]) : gt === "style" ? Ye(Ye({}, pt[gt]), zt[gt]) : zt[gt];
        }
        return je.className && (pt.className = o0(pt.className, je.className)), pt;
      }(te, re, nn), wt = qe.as || ke, Vt = {};
      for (var He in qe) qe[He] === void 0 || He[-1373 * -5 + 3129 * -2 + -607] === "$" || He === "as" || He === "theme" && qe.theme === nn || (He === "forwardedAs" ? Vt.as = qe.forwardedAs : A0 && !A0(He, wt) || (Vt[He] = qe[He], A0 || z.NODE_ENV !== "development" || rd(He) || Za.has(He) || !Co.has(wt) || (Za.add(He), console.warn('styled-components: it looks like an unknown prop "'.concat(He, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var xn = function(W0, je) {
        var Ct = bo(), $e = W0.generateAndInjectStyles(je, Ct.styleSheet, Ct.stylis);
        return z.NODE_ENV !== "production" && Px($e), $e;
      }(Ve, qe);
      z.NODE_ENV !== "production" && H.warnTooManyClasses && H.warnTooManyClasses(xn);
      var y0 = o0(Et, Ut);
      return xn && (y0 += " " + xn), qe.className && (y0 += " " + qe.className), Vt[Fi(wt) && !Co.has(wt) ? "class" : "className"] = y0, Vt.ref = U, Ee(wt, Vt);
    }(k, Y, _);
  }
  W.displayName = g;
  var k = f0.forwardRef(W), D = {};
  return D.attrs = !0, D.componentStyle = !0, D.displayName = !0, D.foldedComponentIds = !0, D.shouldForwardProp = !0, D.styledComponentId = !0, D.target = !0, k.attrs = u, k.componentStyle = l, k.displayName = g, k.shouldForwardProp = p, k.foldedComponentIds = e ? o0(n.foldedComponentIds, n.styledComponentId) : "", k.styledComponentId = C, k.target = e ? n.target : x, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(Y) {
    this._foldedDefaultProps = e ? function(_) {
      for (var H = [], re = 15 * 25 + -7 * -1199 + -1 * 8767; re < arguments.length; re++) H[re - (30 * -85 + -1 * -290 + -119 * -19)] = arguments[re];
      for (var U = -393 * -1 + 405 * -3 + -274 * -3, te = H; U < te.length; U++) ho(_, te[U], !0);
      return _;
    }({}, n.defaultProps, Y) : Y;
  } }), z.NODE_ENV !== "production" && (lu(g, C), k.warnTooManyClasses = /* @__PURE__ */ function(Y, _) {
    var H = {}, re = !1;
    return function(U) {
      if (!re && (H[U] = !0, Object.keys(H).length >= 4733 + 1511 * -3)) {
        var te = _ ? ' with the id of "'.concat(_, '"') : "";
        console.warn("Over ".concat(-5958 + 6158 * 1, " classes were generated for component ").concat(Y).concat(te, `.
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
  }(g, C)), cr(k, function() {
    return ".".concat(k.styledComponentId);
  }), o && rc(k, x, D), k;
}
function Ha(x, i) {
  for (var t = [x[0]], e = -3233 + -830 * -4 + 29 * -3, n = i.length; e < n; e += 220 * -25 + -3719 + 9220) t.push(i[e], x[e + (-31 * 293 + -9202 + 18286)]);
  return t;
}
var Ra = function(x) {
  var i = {};
  return i.isCss = !0, Object.assign(x, i);
};
function Ic(x) {
  for (var i = [], t = 3 * 1441 + -1 * 2311 + -2011; t < arguments.length; t++) i[t - (-5696 + -3 * -1879 + -60 * -1)] = arguments[t];
  if (X0(x) || _0(x)) return Ra(l0(Ha(mi, N0([x], i, !0))));
  var e = x;
  return i.length === 0 && -67 * 104 + -4 * -1821 + -7 * 45 === e.length && typeof e[3873 * -2 + 499 + 7247] == "string" ? l0(e) : Ra(l0(Ha(e, i)));
}
function Ao(x, i, t) {
  if (void (127 + 4486 * -1 + 4359) === t && (t = j0), !i) throw z0(-1 * 641 + 4570 + 982 * -4, i);
  var e = function(n) {
    for (var o = [], r = 579 * 7 + 459 + 1 * -4511; r < arguments.length; r++) o[r - (-5434 + -5435 * -1)] = arguments[r];
    return x(i, t, Ic.apply(void (43 * -45 + 2957 + -14 * 73), N0([n], o, !1)));
  };
  return e.attrs = function(n) {
    return Ao(x, i, Ye(Ye({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return Ao(x, i, Ye(Ye({}, t), n));
  }, e;
}
var fc = function(x) {
  return Ao(Qu, x);
}, q0 = fc;
Co.forEach(function(x) {
  q0[x] = fc(x);
});
z.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var lx = "__sc-".concat(C0, "__");
z.NODE_ENV !== "production" && z.NODE_ENV !== "test" && typeof window < "u" && (window[lx] || (window[lx] = 0), -85 * 69 + -4 * -2399 + -3730 === window[lx] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[lx] += 1);
const zu = q0.div`
  position: relative;
`, qu = q0.video`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(x) => x.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class xe extends Error {
  constructor(t, e) {
    super(t);
    E(this, "cause");
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
const Bx = {};
Bx.CONTINUE_DETECTION = "continue-detection", Bx.SWITCH_CAMERA = "switch-camera", Bx.TOGGLE_MIRROR = "toggle-mirror";
const Mi = Bx, yo = {};
yo.FIRST_FRAME = "first-frame", yo.FIRST_VALID_FRAME = "first-valid-frame";
const ji = yo, Cc = {};
Cc.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Ka = Cc;
var pc = ((x) => (x.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", x.CONTROL = "document-auto-capture:control", x.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", x.DOCUMENT_DETECTION = "document-auto-capture:document-detection", x.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", x.STATE_CHANGED = "document-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", x))(pc || {}), jt = ((x) => (x.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", x.CONTROL = "face-auto-capture:control", x.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", x.FACE_DETECTION = "face-auto-capture:face-detection", x.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", x.STATE_CHANGED = "face-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", x))(jt || {}), wn = ((x) => (x.ANIMATION_END = "magnifeye-auto-capture:animation-end", x.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", x))(wn || {}), $u = ((x) => (x.STATUS_CHANGED = "smile-auto-capture:status-changed", x))($u || {}), el = ((x) => (x.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", x.CONTROL = "palm-capture:control", x.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", x.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", x.STATE_CHANGED = "palm-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", x))(el || {}), tl = ((x) => (x.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", x))(tl || {});
const hc = {};
hc.EYE_NOT_PRESENT = "eye_not_present";
const Pa = hc, Te = {};
Te.CANDIDATE_SELECTION = "candidate_selection", Te.FACE_TOO_CLOSE = "face_too_close", Te.FACE_TOO_FAR = "face_too_far", Te.FACE_CENTERING = "face_centering", Te.FACE_NOT_PRESENT = "face_not_present", Te.SHARPNESS_TOO_LOW = "sharpness_too_low", Te.BRIGHTNESS_TOO_LOW = "brightness_too_low", Te.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Te.DEVICE_PITCHED = "device_pitched", Te.LEFT_EYE_NOT_PRESENT = "left_" + Pa.EYE_NOT_PRESENT, Te.RIGHT_EYE_NOT_PRESENT = "right_" + Pa.EYE_NOT_PRESENT, Te.MOUTH_NOT_PRESENT = "mouth_not_present", Te.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", Te.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const he = Te, Ne = {};
Ne.isPresent = he.FACE_NOT_PRESENT, Ne.isNotPitched = he.DEVICE_PITCHED, Ne.isNotSmall = he.FACE_TOO_FAR, Ne.isNotLarge = he.FACE_TOO_CLOSE, Ne.isNotOutOfBounds = he.FACE_CENTERING, Ne.isNotDim = he.BRIGHTNESS_TOO_LOW, Ne.isNotBright = he.BRIGHTNESS_TOO_HIGH, Ne.isSharp = he.SHARPNESS_TOO_LOW, Ne.isLeftEyePresent = he.LEFT_EYE_NOT_PRESENT, Ne.isRightEyePresent = he.RIGHT_EYE_NOT_PRESENT, Ne.isMouthPresent = he.MOUTH_NOT_PRESENT, Ne.isMouthScoreNotTooHigh = he.MOUTH_SCORE_TOO_HIGH, Ne.isMouthScoreNotTooLow = he.MOUTH_SCORE_TOO_LOW;
const nl = Ne, Wo = {};
Wo.FRONT = "user", Wo.REAR = "environment";
const dr = Wo, vo = {};
vo.AUTO_CAPTURE = "AUTO_CAPTURE", vo.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const mc = vo, In = {};
In.LOADING = "LOADING", In.ERROR = "ERROR", In.WAITING = "WAITING", In.RUNNING = "RUNNING";
const yt = In;
({ ...he });
var Ue = ((x) => (x.CLOSEUP = "CLOSEUP", x.DISTANT = "DISTANT", x.MIDDLE = "MIDDLE", x))(Ue || {});
const bc = { ...yt };
bc.DONE = "DONE";
const r0 = bc;
({ ...he });
({ ...he });
const bi = _n(void 0);
bi.displayName = "AppStateContext";
function $0() {
  const x = m0(bi);
  if (x === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return x;
}
const xl = bi.Provider, il = $0;
class Ac extends it {
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
    return ((i = this.context) == null ? void 0 : i.appState) === yt.ERROR ? null : this.props.children;
  }
}
E(Ac, "contextType", bi);
const ol = q0.canvas`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, rl = q0.div`
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
function al() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const sl = Rs(
  ({ detectionDetails: x, isImageMirror: i }, t) => al() ? (console.log(x), /* @__PURE__ */ O(rt, { children: [
    /* @__PURE__ */ O(ol, { ref: t, $isImageMirror: i }),
    /* @__PURE__ */ O(rl, { children: Object.entries(x).map(([e, n]) => /* @__PURE__ */ O("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ O("strong", { children: n })
    ] }, e)) })
  ] })) : null
), Vx = _n(void 0);
Vx.displayName = "AnalyticsContext";
function yc() {
  const x = m0(Vx);
  if (x === void 0)
    throw new Error(`${Vx.displayName} must be used within a AnalyticsProvider`);
  return x;
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return Be(s - -309, c);
  }
  function e(s, c, d, g, C) {
    return Be(c - 314, C);
  }
  function n(s, c, d, g, C) {
    return Be(C - 998, c);
  }
  function o(s, c, d, g, C) {
    return Be(C - -928, s);
  }
  const r = x();
  function a(s, c, d, g, C) {
    return Be(s - -427, c);
  }
  for (; ; )
    try {
      if (-parseInt(t(58, "4xy!", 69, 52, 57)) / 1 * (parseInt(t(43, "bbwh", 45, 28, 51)) / 2) + parseInt(n(1341, "4xy!", 1344, 1351, 1356)) / 3 + parseInt(n(1367, "kUPg", 1391, 1391, 1379)) / 4 * (-parseInt(e(670, 668, 667, 684, "vGIm")) / 5) + parseInt(t(69, "e9VL", 53, 64, 79)) / 6 * (-parseInt(e(671, 686, 675, 701, "]Gi2")) / 7) + -parseInt(o("8^sj", -568, -587, -595, -577)) / 8 * (-parseInt(a(-58, "l%ek", -38, -68, -62)) / 9) + -parseInt(o("^zl4", -571, -576, -570, -558)) / 10 + -parseInt(a(-40, "!0RS", -23, -39, -60)) / 11 * (-parseInt(t(53, "d9t$", 73, 37, 72)) / 12) === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Dx, 285559 * 1 + 6 * 94887 + -515991);
function Lx(x, i, t, e, n) {
  return Be(x - -930, n);
}
function cl(x, i, t, e, n) {
  return Be(e - 559, n);
}
function Ta(x, i, t, e, n) {
  return Be(e - -503, i);
}
function Dx() {
  const x = ["yhrMeSo/W4BdTIG", "s8oEW4BcPCkf", "BLXTmmo+", "W7u5fSkchKFdOmkwWR3cMdP9", "W7NdHCo4WRVdO8obsCoy", "W7DFE8kTW4LMWOpdPq", "jIDMFSoF", "ku19WPlcOcSsASo8DSoRoW", "W7NdHSk7W4RcM8kdbCoveWFdOCoVW6q", "WR/dMmk3WRFdMcNcQvi", "o0qEWPnczCkEemoOvIxcKSojWRW", "W7iiFqtdMrm7WPWLFJhdRa", "W7rCx8k+W6nMWRZdKa", "WPiYvJ5lWQ0gWONcHmoyWRRcV1G", "W4JdHX0mrG", "W55iW4LFrwRdMfpcSSojW41vW5C", "W4CVp8o2WRNcKSoXW44gyWW", "WQtcOHzoWOD/WPO", "bImq", "u3vBjvRcKNPhW5ZcG8o9WPlcK8kA", "BH5uW5iF", "W7CgEq7dNHfGWPGKyZ/dI8kZ", "DsbNFSoD", "WONcJx8f", "W5TiW4PEqJFcOLpcTSo3W4S", "u3pcUavifGy", "WPJdMH8xqmoNWOq", "W63cPKxdNCozoe/cNCoagCkReg4", "WO4jWRimhG", "W7FdSKZcTSkVgSkYia", "W61NE8kciq", "WRJdU0pdOhC", "W6ZcK8kPWOtdKW", "DwFdS8kpWP0", "stVcMSoDvq", "WORdPmkFWQvfrSocWQ3dK8o7iKa", "WQhcOuBcICkD", "W7CmEWZdNb5SWPCqqsddV8kr", "W4DfyCkDW77cS8oy"];
  return Dx = function() {
    return x;
  }, Dx();
}
function Be(x, i) {
  const t = Dx();
  return Be = function(e, n) {
    e = e - (-3 * 7 + -3339 + 3710);
    let o = t[e];
    if (Be.WtnHvZ === void 0) {
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
      Be.KQkrIE = d, x = arguments, Be.WtnHvZ = !0;
    }
    const a = t[-3739 * -1 + -5439 + 17 * 100], s = e + a, c = x[s];
    return c ? o = c : (Be.kXMcId === void 0 && (Be.kXMcId = !0), o = Be.KQkrIE(o, n), x[s] = o), o;
  }, Be(x, i);
}
const Nx = _n(void (53 * 127 + -3480 + -3251));
function Wc(x, i, t, e, n) {
  return Be(t - 209, e);
}
Nx[Wc(572, 563, 572, "AB!n") + Ta(-109, "bbwh", -126, -128) + "e"] = Ta(-120, "jA8q", -129, -127) + Lx(-553, -550, -571, -559, "%4iZ") + Lx(-564, -578, -557, -548, "XFHN");
function Jn() {
  function x(o, r, a, s, c) {
    return Lx(a - 412, r - 335, a - 182, s - 124, c);
  }
  const i = m0(Nx);
  function t(o, r, a, s, c) {
    return Lx(c - -28, r - 133, a - 169, s - 75, o);
  }
  function e(o, r, a, s, c) {
    return Wc(o - 274, r - 369, o - 391, a);
  }
  if (i === void (10 * 893 + -7958 + -972 * 1)) throw new Error(Nx[t("wNgX", -556, -570, -565, -574) + e(971, 955, "4xy!") + "e"] + (t("JHXY", -571, -580, -558, -575) + x(-135, -157, -153, -136, "v5V4") + t("v5V4", -555, -578, -583, -570) + e(957, 951, "l%ek") + x(-145, -142, -145, -150, "qEvx") + n(1350, 1358, 1350, 1334, "]Gi2") + e(974, 972, "n9DO") + n(1332, 1330, 1337, 1324, "d9t$")));
  function n(o, r, a, s, c) {
    return cl(o - 169, r - 355, a - 291, o - 412, c);
  }
  return i;
}
(function(x, i) {
  function t(a, s, c, d, g) {
    return be(d - -248, s);
  }
  function e(a, s, c, d, g) {
    return be(g - -920, d);
  }
  function n(a, s, c, d, g) {
    return be(c - 626, g);
  }
  const o = x();
  function r(a, s, c, d, g) {
    return be(a - 17, d);
  }
  for (; ; )
    try {
      if (parseInt(r(343, 353, 349, "HFq(", 338)) / 1 * (parseInt(r(352, 341, 342, "G^R%", 341)) / 2) + parseInt(t(88, "fBtK", 88, 83, 74)) / 3 + parseInt(e(-604, -602, -605, "FLkB", -599)) / 4 + parseInt(r(359, 360, 349, "G^R%", 367)) / 5 * (parseInt(e(-599, -607, -593, "1t9s", -601)) / 6) + parseInt(t(86, "FLkB", 94, 82, 91)) / 7 + -parseInt(n(961, 957, 962, 954, "GCh0")) / 8 + -parseInt(n(952, 951, 946, 949, "WzKw")) / 9 === i) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Fx, 372120 + 877 * 233);
function be(x, i) {
  const t = Fx();
  return be = function(e, n) {
    e = e - (-11 * -289 + -5479 + 27 * 97);
    let o = t[e];
    if (be.OSwbxp === void 0) {
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
      be.AYygTT = d, x = arguments, be.OSwbxp = !0;
    }
    const a = t[1 * -8147 + -2 * 4804 + 17755], s = e + a, c = x[s];
    return c ? o = c : (be.VyUaee === void 0 && (be.VyUaee = !0), o = be.AYygTT(o, n), x[s] = o), o;
  }, be(x, i);
}
function gl({ licensePath: x, bramble: i, wasmDirectoryPath: t }) {
  const [e, n] = Me();
  function o(d, g, C, u, p) {
    return be(g - 77, p);
  }
  function r(d, g, C, u, p) {
    return be(C - 174, u);
  }
  const a = e !== void (3 * -2344 + -17 * 23 + 7423);
  ge(() => {
    async function d() {
      function g(p, m, A, l, W) {
        return be(A - 548, l);
      }
      await i[g(875, 879, 873, "Gv](")](t, x);
      function C(p, m, A, l, W) {
        return be(l - 449, m);
      }
      function u(p, m, A, l, W) {
        return be(m - -146, W);
      }
      n(i[g(860, 870, 871, "CvZi") + C(778, "xV$3", 793, 787) + u(186, 182, 180, 181, "fBtK") + "t"]());
    }
    d();
  }, [i, t, x, n]);
  const s = {};
  s[r(508, 511, 506, "&uls") + c("fBtK", 931, 934, 937, 926)] = e;
  function c(d, g, C, u, p) {
    return be(p - 599, d);
  }
  return s[o(403, 406, 416, 403, "9#qv") + "sh"] = a, s;
}
function Fx() {
  const x = ["BSk8gSo8WRhcLgRcTM1vjmkv", "mmoCg8o4W70", "W47dICoDFxtdLCkH", "W5CNW78s", "mmkvyCoIW6G6WONdM8kzWOT7ga", "W6ieWQ/cTHq", "W5GaWQJcOba", "W6axWQeXda", "yCkNW4xcVCkBtConehZdQCoWtMm", "WR9rW67dP03dQmkkfmkzrtBcHa", "e8ohaCoSWRy", "zMhcMWaYrmoMW4S", "lJrUWRBcJCkrWQ3dQCkEfCkTWQzZ", "WRaodCoCoYxcSW", "WPyqtX7cISoWf8k1u8o/WRjxW40", "zSkOW4lcVmkEr8ojD1RdNCoqyNlcGq", "BGPiWRPE", "zwFdOuXqoCohW7ZdHSooWR/dJa", "jqPLW67dOCokWOPagHu8g3i", "WQzwW7PLvbNdIeaLWOtcOgu", "WRjsg8oJbIVcGr4", "mCofW63cR8o1WQ7cGHBcIt8lW4i", "W7rkbdb6kCoSWRpcOmkHWR/dNfSP", "ymkPW4pcVSkzrSk6ng7dJmoDxa"];
  return Fx = function() {
    return x;
  }, Fx();
}
var vc = ((x) => (x.DOCUMENT = "document-auto-capture:dev", x.FACE = "face-auto-capture:dev", x.PALM = "palm-capture:dev", x))(vc || {});
const So = {};
So.SIMD = "simd", So.NO_SIMD = "no-simd";
const Ea = So, wo = {};
wo.Lower = "Lower", wo.Higher = "Higher";
const Bo = wo, Gx = {};
Gx.VISIBLE = "VISIBLE", Gx.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", Gx.HIDDEN = "HIDDEN";
const An = Gx;
function _e(x, i) {
  var t = Yx();
  return _e = function(e, n) {
    e = e - (-2993 + 206 * -23 + -4 * -2051);
    var o = t[e];
    if (_e.retvXw === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (var k = 0, D = u.length; k < D; k++)
          p += "%" + ("00" + u.charCodeAt(k).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, C) {
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
      _e.JiDNdw = a, x = arguments, _e.retvXw = !0;
    }
    var s = t[0], c = e + s, d = x[c];
    return d ? o = d : (_e.hZjCht === void 0 && (_e.hZjCht = !0), o = _e.JiDNdw(o, n), x[c] = o), o;
  }, _e(x, i);
}
(function(x, i) {
  function t(a, s, c, d, g) {
    return _e(c - 651, d);
  }
  function e(a, s, c, d, g) {
    return _e(c - -91, g);
  }
  function n(a, s, c, d, g) {
    return _e(g - 254, a);
  }
  for (var o = x(); ; )
    try {
      var r = parseInt(t(1135, 1138, 1132, "hqMV", 1123)) / 1 + -parseInt(t(1132, 1141, 1138, "EStu", 1144)) / 2 + -parseInt(t(1137, 1122, 1131, "hqMV", 1131)) / 3 + -parseInt(n("ZQm9", 743, 741, 737, 737)) / 4 + parseInt(e(398, 386, 395, 389, "mTKv")) / 5 + parseInt(n("qae5", 737, 741, 744, 739)) / 6 * (-parseInt(t(1137, 1120, 1129, "zkNZ", 1125)) / 7) + parseInt(e(374, 394, 384, 375, "8GZ@")) / 8;
      if (r === i) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Yx, 787739);
function dl({ crosshatch: x }) {
  function i(e, n, o, r, a) {
    return _e(e - -123, r);
  }
  function t(e, n, o, r, a) {
    return _e(o - -831, r);
  }
  return x != null && x[i(353, 352, 349, "j2eN") + "id"] ? Bo[i(350, 342, 343, "!NHV") + "r"] : Bo[t(-341, -338, -347, "U0nE")];
}
function Yx() {
  var x = ["W6NdL8kKg8kmnxzz", "pCkLeKNdOCoZW43cQd/dSbRcJW", "xcznd03dLahcNCoeW7qXWPmJ", "vYbhauZdKNxcO8oDW6KBWRu", "kJ7dL8kSFL/dQxpcHqvTha", "r8kqW5L2WPTsWRNcHmoRWOe1WOlcRq", "j8kKCCo8pq", "W5FcGraZWOFcNMZcMCk0jmkNqG", "WOJcICoqkSo9W7DClmoqqSoyWOC", "CMvEW5FcOCo5WQ9osstdImoxW7i", "wmkMfCk+oxNcGJOfW4qKm1i", "xgP7WODYstFdNSkqWQbIWPNcGW", "uSoHWOzKf8o1eSoPWPb7jwe", "W6RcPZTGdbZcU1epA8kMbxZcKG", "W6tdNhvZkW", "W63cRtTNdbRcTbqNqmk9j2K", "x2TWWOfXqtJcGSkGWObeWPhcHty", "fCo2bY9d", "wSo/rmo7amovW6dcTW"];
  return Yx = function() {
    return x;
  }, Yx();
}
(function(x, i) {
  const t = x();
  function e(s, c, d, g, C) {
    return Ae(d - 239, c);
  }
  function n(s, c, d, g, C) {
    return Ae(g - -896, c);
  }
  function o(s, c, d, g, C) {
    return Ae(c - -716, d);
  }
  function r(s, c, d, g, C) {
    return Ae(g - -667, s);
  }
  function a(s, c, d, g, C) {
    return Ae(g - 367, d);
  }
  for (; ; )
    try {
      if (parseInt(n(-394, "kHQq", -410, -395, -389)) / 1 + parseInt(n(-403, "acJk", -398, -405, -396)) / 2 + parseInt(a(887, 884, "Eo5a", 873, 863)) / 3 + parseInt(e(731, "1s@a", 746, 745, 760)) / 4 + -parseInt(r("(e89", -166, -182, -170, -184)) / 5 * (parseInt(o(-243, -234, "Cj*f", -243, -234)) / 6) + -parseInt(n(-391, "E3j9", -411, -398, -411)) / 7 * (-parseInt(n(-377, "kHQq", -391, -388, -391)) / 8) + -parseInt(a(860, 869, "L8q0", 855, 857)) / 9 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Mx, 1647407 + 3 * -227426);
function Ae(x, i) {
  const t = Mx();
  return Ae = function(e, n) {
    e = e - (7 * 913 + 1 * 893 + -6803 * 1);
    let o = t[e];
    if (Ae.wgPdjI === void 0) {
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
      Ae.lKwqIJ = d, x = arguments, Ae.wgPdjI = !0;
    }
    const a = t[2 * -2959 + 48 * 11 + 49 * 110], s = e + a, c = x[s];
    return c ? o = c : (Ae.wOJpEg === void 0 && (Ae.wOJpEg = !0), o = Ae.lKwqIJ(o, n), x[s] = o), o;
  }, Ae(x, i);
}
function Mx() {
  const x = ["W6/cU8oCW6/dS8kPW5LNkSk2W7ZcK0e", "DSkWCLZdHf3cU8ohW7JcMa8", "W64DW57dVLK", "W4fEWRK", "nq/dRmo/wa", "W6ldR8krq0fPWOTbW4xcJa9tdG", "W609WPdcSmkKmSkNsqdcGHuwoa", "W6VcTSoDW6VdS8kUW5LdpmkKW6dcHuq", "vXC8", "yrypyIC", "WQX8WPtcQCow", "gSo8gqtcPb94b8o0", "m39Imfm", "W40kW6hdQuq", "FmovWQrSWP0", "gmoPWRJcSCkOxea", "W7VcLSoGqZe", "g8kkW6tdO8o7hqKEcSkEdmk5WQP+", "WRrJW4FdPmo7", "yHVdR8oTCmoaruBdKrqnW78", "CNWZv8kVF0hcHSkeW7ldKCoc", "W5eDW4JdMfe", "DSkZDqJcPmkAW4FdPYuRvZ9kW4y", "DSoGWO5DW6e", "lKqzB8kKWQulW6JdQ8kiW706WQK", "WQWuW6hcTmoMW7VcN8kfWP3cMsiJWRO", "BvqgW4HMWR4sBXrIpq", "W4xcLc/dGgHxW5a", "W6ftuLeZwapdJCoG", "ovXCnwBcMSo3suP8WRhdK8kF"];
  return Mx = function() {
    return x;
  }, Mx();
}
function ul({ children: x, licensePath: i, bramble: t, wasmDirectoryPath: e }) {
  const n = {};
  function o(m, A, l, W, k) {
    return Ae(W - -674, k);
  }
  function r(m, A, l, W, k) {
    return Ae(m - -158, W);
  }
  n[a(-331, -344, -334, "$ry#") + "le"] = t;
  function a(m, A, l, W, k) {
    return Ae(l - -828, W);
  }
  n[r(331, 322, 325, "1s@a") + a(-356, -329, -344, "SvI8") + "h"] = i;
  function s(m, A, l, W, k) {
    return Ae(m - -111, l);
  }
  function c(m, A, l, W, k) {
    return Ae(k - -728, l);
  }
  n[c(-225, -230, "pYa)", -213, -223) + r(352, 354, 347, "wL0!") + r(334, 334, 327, "SvI8") + "th"] = e;
  const { sunfish: d, crosshatch: g } = gl(n), C = {};
  C[o(-197, -187, -176, -189, "qny6") + r(325, 323, 323, "xv@0")] = g;
  const u = Qe(() => ({ redfin: dl(C), sunfish: d, crosshatch: g, bramble: t }), [d, g, t]), p = {};
  return p[s(370, 382, "oaz]")] = u, p[r(329, 336, 330, "HraX") + o(-177, -162, -184, -170, "wz#j")] = x, O(Nx[s(392, 388, "SvI8") + r(351, 355, 337, "ypmf")], p);
}
function nt(x, i) {
  var t = jx();
  return nt = function(e, n) {
    e = e - (4811 + 4649 * -1);
    var o = t[e];
    if (nt.nlkuHE === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (var k = 0, D = u.length; k < D; k++)
          p += "%" + ("00" + u.charCodeAt(k).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, C) {
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
      nt.RMPHYa = a, x = arguments, nt.nlkuHE = !0;
    }
    var s = t[141 * 26 + 3670 + 56 * -131], c = e + s, d = x[c];
    return d ? o = d : (nt.RdtdJV === void 0 && (nt.RdtdJV = !0), o = nt.RMPHYa(o, n), x[c] = o), o;
  }, nt(x, i);
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return nt(s - 945, g);
  }
  function e(s, c, d, g, C) {
    return nt(g - -420, d);
  }
  function n(s, c, d, g, C) {
    return nt(c - 393, g);
  }
  var o = x();
  function r(s, c, d, g, C) {
    return nt(g - 731, C);
  }
  for (; ; )
    try {
      var a = parseInt(n(555, 561, 560, "p^CR", 571)) / 1 + -parseInt(r(903, 909, 909, 912, "0o1p")) / 2 * (-parseInt(n(564, 567, 570, "j&BK", 572)) / 3) + -parseInt(t(1125, 1115, 1122, "1x0W", 1129)) / 4 + parseInt(e(-252, -255, "YpNg", -249, -243)) / 5 * (parseInt(e(-256, -257, "t#*F", -255, -257)) / 6) + parseInt(e(-242, -231, "1x0W", -241, -232)) / 7 * (parseInt(n(560, 556, 565, "9uUN", 563)) / 8) + -parseInt(r(889, 888, 894, 897, "A$E1")) / 9 + -parseInt(e(-241, -252, "kiCK", -244, -244)) / 10;
      if (a === i) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(jx, -18 * -77281 + 11 * -145217 + -510316 * -2);
function jx() {
  var x = ["g8ksjmorW6CnWOddKJvQW6lcHSo3W4e", "W48ts0BdKmk+nHBcIIGRW5JcNW", "W58xW63dHr0qWRGmDGbFwa", "ECo0WOLDkIG/FNxcOCkfea", "ir5xW4FdVX1tdCklbgrEyCoN", "W4pdNbShWPfwWRNdRLZcVmoxBG", "WPtdJSo/cxnZia", "WQrQDmkixdJcVmkFW6qAvIC", "ASo3w0NcPxyeWQvmrrKhW6a", "nmowWPWcWQvHoSk7", "WQpcVW9XWRVcM2yUxW/cGSk5W5Kg", "W53cTbldU8kkeLNcKc7dOtpdGG", "fqldPmoFBt5XW6GTiee9WOC", "W7LtxCknoqrtCCoVj8oeW4Xk", "W7XrxSkcnaS3xmolpCo5W4q", "WPqSmmkjWOGLnW", "WOm3W67dM8oOW6tdKa", "hCo4FSkEWPz+W5i", "WP3cKmkOuqSjw8k3W5SuACocWPip", "jrGkWQlcR1yoyG"];
  return jx = function() {
    return x;
  }, jx();
}
function ll({ analytics: x, crosshatch: i }) {
  return i !== void (-15 * -577 + -13 * 701 + 458) && !i.isAnalyticsDisabled ? x : void (-2323 + -1 * -2323);
}
function Il({ analytics: x, appKey: i, redfin: t, crosshatch: e, bramble: n }) {
  const o = {};
  o.analytics = x, o.crosshatch = e;
  const r = ll(o);
  return ge(() => {
    r && r.init(i);
  }, [r, i]), ge(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), r && r.walleye(t, n.getCustomerName()));
  }, [r, n, e, t]), ge(() => {
    if (r)
      return window.addEventListener("beforeunload", r.endSession), () => {
        r.endSession(), window.removeEventListener("beforeunload", r.endSession);
      };
  }, [r]), r;
}
function fl({
  analytics: x,
  appKey: i,
  children: t
}) {
  const { redfin: e, crosshatch: n, bramble: o } = Jn(), r = Il({ analytics: x, redfin: e, appKey: i, crosshatch: n, bramble: o }), a = Qe(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ O(Vx.Provider, { value: a, children: t });
}
const Cl = -2644 * 2 + 5e3 + -8 * -36 + 0.4, pl = 3 * -2332 + 9448 + -2452 + 0.16, hl = -1977 * -5 + -4 * 1334 + -4549 * 1 + 0.2, ml = 7933 + -1 * 7933 + 0.05, bl = 1 * 6435 + 106 * 79 + -14809, Go = {};
Go.min = -1, Go.max = 1;
const Va = Go, La = 1688 * -2 + -2401 + 5777, Al = 0 + 0.3, yl = 0 + 0.2, Wl = 289 * 23 + -2299 + -4 * 1087 + 0.85, vl = -9158 + -1 * 8411 + -1 * -17599, Sl = 7762 + -8 * -211 + -1049 * 9 + 0.8100000000000005, kx = {};
kx.minDuration = 1e3, kx.maxDuration = 2500, kx.minFrames = 10;
const Xi = kx, ko = {};
ko.max = 100, ko.min = 10;
const Da = ko, wl = 5208 + 3525 * 2 + 5769 * -2, Bl = 9091 * 1 + 9974 + 1 * -18865, Gl = 4, Sc = "AES-CBC", wc = "RSA-OAEP", kl = "SHA-256", Ol = "image/jpeg", Zl = -1138 * 3 + 4746 + 4 * -331, Hl = -339 * -22 + 1 * -5452 + -1 * 1966, Rl = "SAM v1.40.4 for idcards", Kl = "dot_embedded_bg.wasm";
let X;
const Rt = new Array(-2 * -4547 + 9122 + -18088).fill(void 0);
Rt.push(void 0, null, !0, !1);
function Oo(x) {
  return Rt[x];
}
let Wt = -1261 * 4 + -40 * -22 + 4164, fn = null;
function Ox() {
  return (fn === null || fn.byteLength === 3 * 1045 + -2362 + 1 * -773) && (fn = new Uint8Array(X.memory.buffer)), fn;
}
const Zx = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Pl = typeof Zx.encodeInto == "function" ? function(x, i) {
  return Zx.encodeInto(x, i);
} : function(x, i) {
  const t = Zx.encode(x);
  i.set(t);
  const e = {};
  return e.read = x.length, e.written = t.length, e;
};
function Bn(x, i, t) {
  if (t === void 0) {
    const a = Zx.encode(x), s = i(a.length, -7846 + 2 * -1297 + 10441) >>> -3681 + -3 * -1227;
    return Ox().subarray(s, s + a.length).set(a), Wt = a.length, s;
  }
  let e = x.length, n = i(e, -8991 + 8992 * 1) >>> -299 * 4 + -5669 * 1 + 6865;
  const o = Ox();
  let r = -6 * 708 + -2358 * 3 + 1887 * 6;
  for (; r < e; r++) {
    const a = x.charCodeAt(r);
    if (a > 127) break;
    o[n + r] = a;
  }
  if (r !== e) {
    r !== 3424 + -4 * 856 && (x = x.slice(r)), n = t(n, e, e = r + x.length * (7635 * -1 + -9429 + 17067), 11339 + 11338 * -1) >>> 717 * -2 + 58 * 106 + -4714;
    const a = Ox().subarray(n + r, n + e), s = Pl(x, a);
    r += s.written, n = t(n, e, r, 1) >>> -3250 * 2 + 9 * 47 + 103 * 59;
  }
  return Wt = r, n;
}
function Bc(x) {
  return x == null;
}
let Cn = null;
function bt() {
  return (Cn === null || Cn.byteLength === -3854 + -8521 * -1 + -359 * 13) && (Cn = new Int32Array(X.memory.buffer)), Cn;
}
let yn = Rt.length;
function Tl(x) {
  x < -11425 + 7 * 1651 || (Rt[x] = yn, yn = x);
}
function Gc(x) {
  const i = Oo(x);
  return Tl(x), i;
}
const Zo = {};
Zo.ignoreBOM = !0, Zo.fatal = !0;
const kc = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Zo) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && kc.decode();
function Xx(x, i) {
  return x = x >>> 0, kc.decode(Ox().subarray(x, x + i));
}
function Ho(x) {
  yn === Rt.length && Rt.push(Rt.length + 1);
  const i = yn;
  return yn = Rt[i], Rt[i] = x, i;
}
let pn = null;
function Oc() {
  return (pn === null || pn.byteLength === 0) && (pn = new Uint32Array(X.memory.buffer)), pn;
}
function Na(x, i) {
  const t = i(x.length * 4, 4) >>> 0, e = Oc();
  for (let n = 0; n < x.length; n++)
    e[t / (-6792 + -1217 * 1 + 8013) + n] = Ho(x[n]);
  return Wt = x.length, t;
}
function Fa(x, i) {
  x = x >>> 3 * -1112 + 3 * -2553 + 10995 * 1;
  const t = Oc(), e = t.subarray(x / (-4173 + -1 * 1397 + 2787 * 2), x / (2450 + 1 * -2038 + -3 * 136) + i), n = [];
  for (let o = -11 * -91 + -5414 * -1 + -5 * 1283; o < e.length; o++)
    n.push(Gc(e[o]));
  return n;
}
function El(x, i) {
  const t = Bn(x, X.__wbindgen_malloc, X.__wbindgen_realloc), e = Wt, n = Bn(i, X.__wbindgen_malloc, X.__wbindgen_realloc), o = Wt, r = X.is_mobile_supported(t, e, n, o);
  return ur.__wrap(r);
}
const Ro = {};
Ro.register = () => {
}, Ro.unregister = () => {
};
const Ya = typeof FinalizationRegistry > "u" ? Ro : new FinalizationRegistry((x) => X.__wbg_licensevalidationresult_free(x >>> -2993 * -3 + -4132 + 4847 * -1));
class ur {
  static __wrap(i) {
    i = i >>> 3 * 2911 + 1 * 6085 + -14818 * 1;
    const t = Object.create(ur.prototype);
    return t.__wbg_ptr = i, Ya.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const i = this.__wbg_ptr;
    return this.__wbg_ptr = -4409 + -2149 * -4 + 1 * -4187, Ya.unregister(this), i;
  }
  free() {
    const i = this.__destroy_into_raw();
    X.__wbg_licensevalidationresult_free(i);
  }
  constructor(i, t, e, n, o) {
    var r = Bc(t) ? 0 : Bn(t, X.__wbindgen_malloc, X.__wbindgen_realloc), a = Wt;
    const s = Na(e, X.__wbindgen_malloc), c = Wt, d = Na(n, X.__wbindgen_malloc), g = Wt, C = Bn(o, X.__wbindgen_malloc, X.__wbindgen_realloc), u = Wt, p = X.licensevalidationresult_new(i, r, a, s, c, d, g, C, u);
    return this.__wbg_ptr = p >>> 7466 + -7466 * 1, this;
  }
  get is_valid() {
    return X.licensevalidationresult_is_valid(this.__wbg_ptr) !== 13363 + -1 * 13363;
  }
  get features_json() {
    try {
      const e = X.__wbindgen_add_to_stack_pointer(-16);
      X.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var i = bt()[e / (-269 * -27 + 1642 + -8901) + (-5069 + -1 * -8906 + -3837)], t = bt()[e / (1 * -7723 + -2657 * -3 + -244 * 1) + (1 * -1153 + 3307 * -1 + 4461)];
      let n;
      return i !== 0 && (n = Xx(i, t).slice(), X.__wbindgen_free(i, t * (-1 * 6689 + -1373 + 733 * 11), 1087 + -6 * -481 + -3972)), n;
    } finally {
      X.__wbindgen_add_to_stack_pointer(878 + -449 * 13 + 4975);
    }
  }
  get errors() {
    try {
      const n = X.__wbindgen_add_to_stack_pointer(-16);
      X.licensevalidationresult_errors(n, this.__wbg_ptr);
      var i = bt()[n / 4 + (-5590 + 1 * 4499 + 1091)], t = bt()[n / 4 + (7838 * -1 + -7 * 1093 + 1549 * 10)], e = Fa(i, t).slice();
      return X.__wbindgen_free(i, t * (-6989 * 1 + -18 * 171 + -27 * -373), 2285 + -1 * 2281), e;
    } finally {
      X.__wbindgen_add_to_stack_pointer(-1 * 6257 + -1935 * 4 + 14013);
    }
  }
  get warnings() {
    try {
      const n = X.__wbindgen_add_to_stack_pointer(-16);
      X.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var i = bt()[n / 4 + 0], t = bt()[n / (11131 + 11127 * -1) + (32 * -149 + 677 + 4092)], e = Fa(i, t).slice();
      return X.__wbindgen_free(i, t * (-1 * 8252 + -7 * 911 + 14633), -6191 + -2 * -2884 + 427), e;
    } finally {
      X.__wbindgen_add_to_stack_pointer(2495 * 3 + 3475 + -38 * 288);
    }
  }
  get customer() {
    let i, t;
    try {
      const o = X.__wbindgen_add_to_stack_pointer(-16);
      X.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = bt()[o / (-1579 * 2 + -879 + 4041) + (71 * 45 + 6899 * -1 + 3704)], n = bt()[o / (2 * -2051 + -89 * -20 + 2 * 1163) + (-5 * 1453 + 8111 + -65 * 13)];
      return i = e, t = n, Xx(e, n);
    } finally {
      X.__wbindgen_add_to_stack_pointer(1229 * 7 + -10 * -40 + -8987), X.__wbindgen_free(i, t, -5 * 881 + -1 * 1489 + -1 * -5895);
    }
  }
}
async function Vl(x, i) {
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
function Ll() {
  const x = {};
  return x.wbg = {}, x.wbg.__wbindgen_string_get = function(i, t) {
    const e = Oo(t), n = typeof e == "string" ? e : void 0;
    var o = Bc(n) ? -8145 + -2 * -769 + -6607 * -1 : Bn(n, X.__wbindgen_malloc, X.__wbindgen_realloc), r = Wt;
    bt()[i / 4 + (6 * 1331 + -1459 + -1 * 6526)] = r, bt()[i / (-3137 + 3141 * 1) + (-6723 + -27 * -249)] = o;
  }, x.wbg.__wbindgen_object_drop_ref = function(i) {
    Gc(i);
  }, x.wbg.__wbindgen_string_new = function(i, t) {
    const e = Xx(i, t);
    return Ho(e);
  }, x.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Ho(/* @__PURE__ */ new Date());
  }, x.wbg.__wbg_getTime_2bc4375165f02d15 = function(i) {
    return Oo(i).getTime();
  }, x.wbg.__wbindgen_throw = function(i, t) {
    throw new Error(Xx(i, t));
  }, x;
}
function Dl(x, i) {
  return X = x.exports, Zc.__wbindgen_wasm_module = i, Cn = null, pn = null, fn = null, X;
}
async function Zc(x) {
  if (X !== void 0) return X;
  typeof x > "u" && (x = new URL("dot_embedded_bg.wasm", import.meta.url));
  const i = Ll();
  (typeof x == "string" || typeof Request == "function" && x instanceof Request || typeof URL == "function" && x instanceof URL) && (x = fetch(x));
  const { instance: t, module: e } = await Vl(await x, i);
  return Dl(t, e);
}
(function(x, i) {
  function t(a, s, c, d, g) {
    return Oe(s - 905, c);
  }
  function e(a, s, c, d, g) {
    return Oe(d - -904, c);
  }
  function n(a, s, c, d, g) {
    return Oe(g - -979, s);
  }
  function o(a, s, c, d, g) {
    return Oe(a - 949, c);
  }
  const r = x();
  for (; ; )
    try {
      if (-parseInt(n(-758, "k!s2", -763, -793, -784)) / 1 * (parseInt(n(-820, "Loe3", -837, -830, -834)) / 2) + parseInt(e(-723, -739, "t6TW", -740, -722)) / 3 + -parseInt(n(-812, "Y8If", -797, -814, -796)) / 4 + -parseInt(n(-832, "Lkru", -843, -813, -831)) / 5 + parseInt(t(1061, 1085, "Eb#3", 1105, 1090)) / 6 * (parseInt(n(-805, "29nZ", -812, -842, -816)) / 7) + parseInt(e(-743, -737, "QjHg", -722, -741)) / 8 + parseInt(t(1061, 1086, "OiOY", 1101, 1083)) / 9 * (parseInt(o(1128, 1151, "i(h[", 1141, 1151)) / 10) === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(_x, -827317 + -2 * -410477 + 1 * 429256);
function _i(x, i, t, e, n) {
  return Oe(x - 852, t);
}
function Ix(x, i, t, e, n) {
  return Oe(x - 865, e);
}
function Ji(x, i, t, e, n) {
  return Oe(t - 299, e);
}
function _x() {
  const x = ["mmkmsmkzWPy", "W6nCbCo6", "W6RdMSkfW5xdRW", "swVcVSo2WQ7dVN7dSxXLWPeN", "W4pcTmoCW44jWOfxDSkaEtFdMLG", "WPtdQdnoW4HbWRBdR8ouW5j7", "W7bwjmoGoG", "tCkJWR/cM8kPWP/dJs4", "CKTJW53dHmojbgpdICoTD24P", "tCowh2JdQq", "xtVcISkkWQi", "FCoytb4", "e8o5WOVcRCkQ", "gtNdLCkTW70", "WO4Av2VcHW", "eCo5WOxcOCkV", "WQ5GDfldRG", "xrBcUSolWOW", "W5/cIX/cHGFcH8kTWP8", "gmkMtmkNWRi", "WOxdNSkYWRD4", "hYFdL1aL", "W4DGsmo3qa", "W5borg/cObZcP1i", "tSkLW4NdSCo2W77cNthdPSk5W5Ovtq", "W6DOFu/cVa", "W5XOqCo/Bq", "x8kPW4jegM/cLCkrffFdKG", "pMuCWQHRleS6W73dH0W", "lXiJWOpcNa", "truEWQub", "W6hdL8oqWPZdNG", "W4j9W69kW4y", "kfyXW5tcGq", "hYNdJqFdSq", "W4JdMmkUWRSS", "W5rUt8ofBa", "gwpdJmoEW53cTmorWQtdSYLzkw4", "x8kUW4jhAupcSSkLb3C", "WR8XkHdcIqe5gCkIDW", "W4xcSSoCW4aeWOWOCSk8xGpdNq", "hmoaxMybomkGW4tcLCkffq", "pJDWWO/dKmocfSk2hJmAW5Cf", "W5BdIba/W6nOFSo2W5yPxM8", "hmofv2WnzSoFW5dcGmkqnSotuG", "W6nNB0NcOq", "fqmmWRSL", "pJ7dHSk0W6K", "W5pdSXlcJ8oT", "y8oyuHKI", "zSoqrbu8", "rdpcJCkoWOO", "z8kou8krWRW", "pJtcL8oSWQaCWOVdJSkVW6JcIX8", "rZJcNmkdWO8", "pZBdQmkiW7r6WQZdOG"];
  return _x = function() {
    return x;
  }, _x();
}
function Oe(x, i) {
  const t = _x();
  return Oe = function(e, n) {
    e = e - (6157 + 602 * -3 + -4206);
    let o = t[e];
    if (Oe.hQERty === void 0) {
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
      Oe.zYLXgk = d, x = arguments, Oe.hQERty = !0;
    }
    const a = t[-9166 + 14 * -182 + 11714], s = e + a, c = x[s];
    return c ? o = c : (Oe.uxsfvW === void 0 && (Oe.uxsfvW = !0), o = Oe.zYLXgk(o, n), x[s] = o), o;
  }, Oe(x, i);
}
function gn(x, i, t, e, n) {
  return Oe(x - -632, n);
}
var ls;
class Nl {
  constructor() {
    E(this, ls, !1);
  }
  async [(ls = gn(-470, -492, -480, -450, "aIFQ") + Ix(1034, 1041, 1056, "Lkru") + Ix(1038, 1029, 1064, "1Znd"), gn(-435, -410, -408, -455, "rhMA"))](i = Ji(460, 444, 469, "PY@E")) {
    function t(a, s, c, d, g) {
      return Ix(d - -164, s - 423, c - 432, a);
    }
    function e(a, s, c, d, g) {
      return _i(g - -620, s - 87, a);
    }
    function n(a, s, c, d, g) {
      return Ji(a - 141, s - 102, d - 459, c);
    }
    function o(a, s, c, d, g) {
      return Ji(a - 347, s - 22, g - 129, s);
    }
    function r(a, s, c, d, g) {
      return Ix(a - 65, s - 500, c - 255, c);
    }
    try {
      const a = i + "/" + Kl;
      await Zc(a), this[r(1122, 1126, "]uS7", 1130, 1119) + e("ea%1", 389, 430, 403, 403) + e("aIFQ", 393, 412, 418, 398)] = !0;
    } catch {
      this[r(1080, 1053, "V1KV") + n(939, 919, "t6TW", 913) + t("0k3R", 907, 902, 891)] = !1, console[o(584, "0k3R", 556, 604, 579)](n(911, 951, "aIFQ", 934) + n(950, 975, "V1KV", 952) + e("]gns", 388, 384, 385, 385) + e("MjXM", 397, 371, 398, 391) + o(602, "m%2$", 630, 591, 603) + o(549, "cqU#", 555, 547, 574) + o(600, "%GY#", 586, 583, 589) + n(950, 968, "5aC1", 946) + n(972, 974, "ea%1", 956) + t("29nZ", 853, 849, 855) + o(624, "]uS7", 596, 638, 624) + r(1117, 1106, "@sXi") + t("Rlk1", 871, 845, 873) + n(910, 922, "01ao", 915) + t("i(h[", 876, 867, 857) + n(919, 909, "m%2$", 918) + t("i(h[", 894, 841, 866) + o(610, "i(h[", 606, 622, 613) + "n.");
    }
  }
  [gn(-458, -447, -430, -441, "X$0(") + _i(1001, 994, "IFGg") + gn(-443, -447, -470, -454, "0k3R") + "ed"]() {
    function i(e, n, o, r, a) {
      return gn(o - -302, n - 308, o - 408, r - 152, e);
    }
    function t(e, n, o, r, a) {
      return _i(n - 142, n - 116, r);
    }
    return this[t(1204, 1180, 1170, "PY@E") + i("V1KV", -734, -743, -744) + t(1135, 1146, 1159, "t6TW")];
  }
}
class Ui extends Error {
  constructor() {
    super(...arguments);
    E(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function ue(x, i) {
  var t = Jx();
  return ue = function(e, n) {
    e = e - 100;
    var o = t[e];
    if (ue.WPxnhf === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (var k = 0, D = u.length; k < D; k++)
          p += "%" + ("00" + u.charCodeAt(k).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, C) {
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
      ue.UYEgHk = a, x = arguments, ue.WPxnhf = !0;
    }
    var s = t[2 * 449 + -2785 + -111 * -17], c = e + s, d = x[c];
    return d ? o = d : (ue.ayuSMT === void 0 && (ue.ayuSMT = !0), o = ue.UYEgHk(o, n), x[c] = o), o;
  }, ue(x, i);
}
function mt(x, i, t, e, n) {
  return ue(i - 732, x);
}
function Ot(x, i, t, e, n) {
  return ue(x - 765, n);
}
function Ma(x, i, t, e, n) {
  return ue(i - 400, e);
}
(function(x, i) {
  function t(c, d, g, C, u) {
    return ue(c - 342, C);
  }
  function e(c, d, g, C, u) {
    return ue(u - 410, d);
  }
  function n(c, d, g, C, u) {
    return ue(C - -110, c);
  }
  function o(c, d, g, C, u) {
    return ue(c - 897, u);
  }
  var r = x();
  function a(c, d, g, C, u) {
    return ue(C - -700, g);
  }
  for (; ; )
    try {
      var s = parseInt(o(1053, 1031, 1025, 1026, "aIBp")) / 1 + parseInt(n("KESo", 40, 5, 21, -7)) / 2 + -parseInt(n("Pdtl", -26, -31, 1, -29)) / 3 * (-parseInt(o(1016, 988, 1014, 997, "bHIc")) / 4) + parseInt(t(504, 502, 516, "OSbp", 524)) / 5 + parseInt(e(528, "OSbp", 568, 551, 553)) / 6 * (-parseInt(a(-558, -559, "WsMW", -571, -585)) / 7) + -parseInt(e(523, "7bcF", 560, 581, 554)) / 8 * (-parseInt(e(533, "Bjcj", 582, 546, 565)) / 9) + -parseInt(t(452, 463, 436, "PRs5", 468)) / 10;
      if (s === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Jx, 190363 + -332881 * 2 + 926754);
function Qi(x, i, t, e, n) {
  return ue(t - -764, i);
}
function Jx() {
  var x = ["uCoeWOS", "nZSp", "bmkOyCoyFq", "pXC3jsK", "ECoFq8oUW4e", "wCkZqLRcNG", "W4NdNSoAW600", "W5ivW6u5WRmgWPNdPSohW7a3WRvGDW", "wCoen1lcT8oHdGVdSq", "WPGlW4tdTXy", "eCksW5hdUCosumo7W6m3W5hdLa", "bmoYr8kDcmoJdSohyHPVWQW", "fSoWySk7WOu", "sLZdOq", "a8kfWRNdMq", "WP0pW4xdHHu", "WPRdPmkKWRFcNq", "W41uWQpdMbNdLsqGrw5OlLO", "nXeN", "vCk3dmoCvG", "vWiwWPdcGa", "fWlcPSk9qCkvBgv1pgG", "W4pdGSosW5OU", "sGyw", "gSkABNBcOG", "cmkwygZcHq", "W7ZcRG3dOmoA", "WRxdG2ddUCkG", "Ag9jW7r3u1LnWRivW4G1sw4", "WQy9te9ACSkkuCo6", "kbCT", "WRvhkSkzDG", "WR/dN2NdPq", "W452WQddSCo/", "WRddO0aysSkdW4eKtSooW6ZcQXe", "WRVdLh0", "WOThWQrRW64", "FedcQbPUuqRdHLn2qa", "WRWcpXqF", "zHNcOCk3WQa5h8kptvzy", "dGDAjSo2aCoGxa", "WQygocGD", "nNtcICovWOC", "dCkqWQJdLfy", "W7dcSHvhkW", "W7WQW4aRAG", "W7OQW503AW", "W5eEWODnW7j4W4tcKG", "W609W5W", "WO7cKwupW7TgWPBdGKtcGmoaW5aX", "WQhcONCFWQu", "s8oyWRpcQSkh", "f8krW5rDBG", "ca7dI8kOnspdTa4j", "AgTkW7D7uvS4WPaiW44swG", "W41qWQ/dNH3dN3WfDvX+bW", "cCkiWQJdNL0", "u8o+mmkEpmooW4lcL2zfhvu3", "ANjQiu4", "WQCueZ0u", "qL7dS8o7dq", "W45tWQFdMrJdMYaiFunLjhK", "W4tcOmotWPpcU8ksWRSxBW"];
  return Jx = function() {
    return x;
  }, Jx();
}
var L0, On;
class ja {
  constructor(i) {
    ne(this, L0);
    ne(this, On);
    this[r(-345, -333, -351, "yGc!") + t(-334, "]jOU", -335)] = i;
    function t(a, s, c, d, g) {
      return ue(c - -467, s);
    }
    function e(a, s, c, d, g) {
      return ue(d - 281, g);
    }
    function n(a, s, c, d, g) {
      return ue(a - 72, g);
    }
    function o(a, s, c, d, g) {
      return ue(s - 199, c);
    }
    function r(a, s, c, d, g) {
      return ue(c - -491, d);
    }
    try {
      $(this, L0, i[n(179, 206, 210, 189, "(6W4") + n(192, 223, 189, 203, "M[]Z") + t(-358, "m&GV", -355, -327, -364)] && JSON[n(174, 177, 189, 147, "S(OG")](i[e(447, 437, 412, 423, ")akT") + n(226, 249, 237, 253, "y4c7") + o(318, 344, "Bjcj", 345, 365)])), $(this, On, i[e(370, 413, 377, 389, "hL*j") + t(-334, "S(OG", -362, -343, -346)]);
    } catch (a) {
      console[r(-371, -361, -377, "DhcC")](a);
    }
  }
  get [mt("Bjcj", 865) + "id"]() {
    function i(n, o, r, a, s) {
      return mt(a, s - -1406);
    }
    function t(n, o, r, a, s) {
      return mt(n, a - -419);
    }
    function e(n, o, r, a, s) {
      return mt(a, o - 226);
    }
    return this[t("!^&N", 472, 467, 464) + e(1070, 1076, 1066, "WsMW")][e(1086, 1099, 1120, "M[]Z") + i(-574, -592, -564, "m&GV", -574)];
  }
  get [Ot(889, 874, 892, 907, "EyUD") + "s"]() {
    function i(e, n, o, r, a) {
      return Ot(r - -1449, n - 140, o - 410, r - 397, a);
    }
    function t(e, n, o, r, a) {
      return mt(r, n - -986);
    }
    return this[i(-579, -560, -597, -575, "DhcC") + t(-111, -131, -101, "M[]Z")][t(-131, -126, -133, "QGou") + "s"];
  }
  get [Ma(525, 515, 545, "(z5s") + Ot(911, 910, 931, 929, "PRs5")]() {
    function i(n, o, r, a, s) {
      return Ot(s - -44, o - 267, r - 301, a - 48, r);
    }
    function t(n, o, r, a, s) {
      return Ot(r - -78, o - 115, r - 381, a - 344, s);
    }
    function e(n, o, r, a, s) {
      return mt(o, n - -703);
    }
    return this[i(878, 875, "QGou", 855, 848) + i(827, 842, "EfXT", 864, 859)][t(834, 861, 847, 853, "y4c7") + e(187, ")akT")];
  }
  get [mt("m&GV", 880) + "b"]() {
    return L(this, L0);
  }
  get [Ot(866, 855, 848, 858, "aIBp") + Qi(-676, "DhcC", -647)]() {
    return L(this, On);
  }
  get [Ot(926, 908, 937, 899, "7bcF") + mt("EfXT", 857) + Ot(915, 945, 884, 914, "c)@C") + Ot(924, 917, 924, 952, "EfXT")]() {
    var r, a;
    function i(s, c, d, g, C) {
      return Qi(s - 256, c, s - 646);
    }
    function t(s, c, d, g, C) {
      return Ma(s - 492, g - -873, d - 239, C);
    }
    function e(s, c, d, g, C) {
      return mt(g, s - -1081);
    }
    function n(s, c, d, g, C) {
      return mt(s, d - -1235);
    }
    function o(s, c, d, g, C) {
      return Qi(s - 402, g, c - 90);
    }
    return !!((a = (r = L(this, L0)) == null ? void 0 : r[i(29, "JCXS") + i(12, "QGou")]) != null && a[o(-570, -548, -577, "mn%X") + o(-509, -517, -543, "K%UV") + e(-215, -224, -203, "X]N0") + t(-354, -346, -362, -367, "(6W4") + n("TD)O", -361, -354) + n("!^&N", -394, -399) + i(-5, "sro8") + "d"]);
  }
}
L0 = new WeakMap(), On = new WeakMap();
function dt(x, i, t, e, n) {
  return ye(n - -83, i);
}
function Ke(x, i, t, e, n) {
  return ye(n - 240, t);
}
function ve(x, i, t, e, n) {
  return ye(x - -116, t);
}
(function(x, i) {
  function t(a, s, c, d, g) {
    return ye(s - -817, a);
  }
  function e(a, s, c, d, g) {
    return ye(s - 178, a);
  }
  function n(a, s, c, d, g) {
    return ye(c - -925, g);
  }
  function o(a, s, c, d, g) {
    return ye(s - -954, a);
  }
  const r = x();
  for (; ; )
    try {
      if (-parseInt(e("UI28", 352, 392, 344, 238)) / 1 + parseInt(e("JZY8", 371, 345, 423, 496)) / 2 * (-parseInt(e("x6rr", 291, 191, 217, 155)) / 3) + parseInt(n(-614, -798, -717, -752, "bs8U")) / 4 + -parseInt(t("9G17", -644, -518, -624, -739)) / 5 * (-parseInt(n(-816, -766, -820, -909, "vx3^")) / 6) + -parseInt(e("2OdL", 469, 469, 536, 531)) / 7 + -parseInt(o("k01o", -798, -694, -840, -683)) / 8 + parseInt(e("JZY8", 433, 406, 459, 491)) / 9 * (parseInt(o("bs8U", -739, -707, -834, -827)) / 10) === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ux, -685356 + 421457 * 1 + 1248812);
function De(x, i, t, e, n) {
  return ye(i - 365, x);
}
function Pe(x, i, t, e, n) {
  return ye(x - 565, n);
}
function ye(x, i) {
  const t = Ux();
  return ye = function(e, n) {
    e = e - (-16720 + -701 * -24);
    let o = t[e];
    if (ye.QTqVtj === void 0) {
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
      ye.bvcJZe = d, x = arguments, ye.QTqVtj = !0;
    }
    const a = t[9396 + -4754 * -1 + -14150 * 1], s = e + a, c = x[s];
    return c ? o = c : (ye.BczPej === void 0 && (ye.BczPej = !0), o = ye.bvcJZe(o, n), x[s] = o), o;
  }, ye(x, i);
}
function Ux() {
  const x = ["A8oMWR5wdW", "WPVcPedcJ8kA", "wmkrWOFcHmoB", "W5pdHN0zea", "WQ02CmkEdW", "W6xcLCoFwmoV", "lmo4W7RdH8oZ", "WOiVW4OnW58", "W7q5gNaS", "WO5mta", "WQtcOmkGFSo5", "WO1asJJdMW", "W6dcN8oau8o4", "W5OhW41LAa", "nSkRACkAaHpdVmk5", "W654hSo2W5m", "W4pcVdlcV8kx", "WOXlFIqc", "xfZdKGGl", "WQaJBa", "Ef4blIa", "waFcOmkq", "W5Cqd2pcJtimsxOwWQldUa", "WRmvW6zbsq", "WPiQfmkAW6NcTMTo", "W4WAW5zoFq", "WQm/pmokWQS", "f8kHfCkBWO0", "W4hdSGxdLmkDv2tdOmomW5u", "u8oxW4e5eG", "WOVdVCk7xSoi", "WQ8WESkHfq", "WONcQSoUsCot", "tXedmZe", "WRyzW6rQsa", "W49Xpq", "WOqTzqtcPa", "WQzEsd0t", "WQfduWSn", "W7mPd2u2", "WPeJW48kmq", "vCkwtW", "urxdRG", "WQKTyq", "uadcN8kcW6O", "WPNdOwddPSouFH3cN8kGCJ3dJq", "WQHNimo0W4u", "ub/dUW", "WQlcT8k8ySoU", "rmoqW7VdImox", "WOHGp8osW6m", "mSo/qSkwEq", "WQ4+pmoBW6u", "WPCSBCo7WQpdTdHYW597tCkHWRi", "WQfjqs8v", "k8o6W5ZdOW", "hCoyW7ldJ8ou", "W5pdMNWtmG", "uSkaWPZcRCoj", "WO3dPSk7t8kh", "FJlcRmkcW5O", "wGhcP8kqW6O", "zfTxo8o3juf5gcvN", "W7RcL8owx8o4", "WPKZkmoeWRm", "x8klWQNcNSkjFmobtSoGg0tcOSkJ", "zCo2smoT", "BSkBWPBcPSot", "W7yGbvCM", "pmoWW5y", "WRnXbmokW5W", "WPVcVCkgWORdPa", "xCoYW7eEbq", "h1pcLqtdVW", "WRv/wdBdNa", "WOa6FJVcVG", "bSoyW7FdIa", "WO88xshcRG", "WQD7aSo7W5i", "WQOZoW", "W5ddG3Otbq", "aSoxW7FdKG", "tWRdL1ZcRCo9cLhcJSkUW4hcKG", "eHpdVSkkBuO3W5VcHfzCW4W", "WRlcPSkxWOddUa", "WPBcKLqtWOa", "uxBdHmoUpq", "WRdcSCkrWQVdPq", "umkqw2TD", "WRDdvq", "xmkbWQ3cN8kiFmojtmold07cO8k2", "WQO9kG", "W5n/kmkWW78", "urpdQSkGhG", "WP8tE8ktW68", "W6dcN8ozu8oY", "WQFdPvJcHCkr", "WPemsYCd", "DSo4W7ecla", "rb8zjcS", "zmoHmmoiW68", "pqKs", "WQz4j10WjSkWoW", "W6VdQ8o4g0i", "W6ipfSoxW4C", "WQamsseu", "paudACkP", "rq0Ymsi", "WPlcSvZcNW", "WQyLA8kofa", "vrZcR8kMW6S", "WQG2ESki", "W7aBmmoPW5u", "ug3dMq", "WQtcT8kHFSoV", "vqFcHmkkW7O", "WPBdOmoQW6tcOa", "WPRdOgldRCoBF1xcHSkGDqtdM8o+", "tuRcPCorlW", "WP7cImkOvCo9", "WRNcU8krW4/dOW", "WPnXbmoGW5O", "vXRcVmkkW7G", "WPBcT0BcG8ka", "WPNdR2BdO8otldpcS8kDCqq", "fcm0lmkl", "W6/cHmovrCoV", "rhJdKYSF", "ymkMFmktW4u", "vrVdVCkMga", "W4nSbw0G", "tWWcnda", "WQzBtd7dIa", "E8kdC8kkW6O", "AmoGlq", "tSkJvSkUW5S", "vwpdMCoTmq", "hmoyW6ZdImoz", "WQ8Mp8oMWRm", "WQpcPedcHa", "WRjAqCkgWPPVrsxdSCk4lmkt", "WQ19fmoWW5G", "WO/dJ13cLH8", "wxZdHZy", "lmoTW5FcVSoH", "WOi8EtS", "W6qAWOrpuW", "W4iuW5bODa", "W4hcRb3cVCka", "xH/dP8k2fq", "WRFcT8kHE8o1", "BCoGimomWRS", "W7ZdSMWybq", "W6JcQIpcU8kr", "WOGJW50lW5K", "WORdGCkaWPPt", "vmoMWRLyrW", "WOqTzqZcOG", "W60paa", "WPq4W5CaW4m", "WOFdMfdcIW", "WP/dPSouW6lcSq", "WRjnvsaj", "WRSIW6PRyG", "WQv7wdWSfmkElSk/W7m", "hKJcIXRdPG", "dSoxW63dG8kq", "WQzjst0f", "W63dRCo/", "W7K/dcOV", "WRNcS8kw", "r2lcR04b", "n8o4rmoDEW", "WOuTCdZcUa", "WOWZiCoTWR4", "hfNcKa", "iuRcQNmz", "WR9IyCk/W5q", "WRVcVCkb", "eG3dQmk2hq", "W7tdQ8o+fKm", "fSkXaSklWOC", "c23cO14b", "W44fuSo3W60", "WPBcP0ulWRW", "WO05W6eyW5y", "W5xdS8k0W5tcHa", "WPtdS8ov", "W6xdPCo5fK4", "W5ZcUmo8e8kEWOjGFSkOssuwvG", "hL/cIHRdSa", "W5hcLh3cOty+eui", "WOdcUCoSWPxdJ0/cNunVC8kKnW", "WO7dJuZcMWq", "xCknsx0", "FCkyC8kBW5u", "WPjGfSowW74", "WRxcSCkbWOVdRW", "WQzXa8orW5K", "e8kRbmkrWOW", "WOlcMdPfECkfW5reWROpW6S7gW", "WPNcU8ofWQVdHq", "WQLfrcSo", "W7alamoaW4C", "WQOWymkMW4K", "W7uhi8oAW44", "CCoHrCkTla", "FCkFB8kCW4K", "hmkFtNTx", "WQrMbCo6W4q", "WQX1hSo7", "WQ7cQ8kOyG", "WPWSW4Gmcq", "qHKE", "WO0KW5Gb", "WQGRBCkOhq", "A8kMyCktW5K", "WRmRW40dWPC", "fvVcKaRdVq", "W646W7aRua", "evpcGa", "xSo3W7yuea", "WRK/pq", "WQzXa8ozW58", "WR8WFCk/W5i", "WOtdP8kRs8ot", "wCkxuMSz", "orb3WRJdKa", "W4aTg2OQ", "qbCoiI0", "WPdcOfRcN8kx", "W6/dO8oVhuq", "WRfMhSo7W4i", "uSo6W6aFmW", "WOlcSeOeWR0", "DCo4wSkZaa", "AXKJerC", "xCo8W6qfnq", "WQHLssCu", "B8oOWQ1Wfq", "Amo9rCk3", "o3tcJIhdOW", "WOpdNKRcLX4", "qCk9r8kGW74", "WPnyFaVdJq", "W58yW7vICa", "WQRcJmkGzmoO", "suRcOmow", "AGFcQCkGW5e", "WP4IoCoRWRi", "W6lcKCoj", "W4qAW5aRDq", "W4vSp8kM", "zSo2wmkalq", "r1NcPSoljG", "EaJdU8kQaG", "WP/dQCk6ra", "W73cUsxcVa", "CaVcPCornG", "WRZdTmkBWRbI", "WPOIkCoSWR8", "WOrfa8owW7K", "tM3dJa", "wbtdUSkGia", "kmo6W4ZcGCo7", "WQb5eG", "BmkME8kIW4y", "xrBcRSkcW6W", "v8o2W6qvda", "WPqOlmoSWPy", "W4yCW4DUCG", "W5fqo8kUW78", "W6FdPCo4puC", "W6uPgLSP", "oq1yWRtdNq", "WOOMDYC"];
  return Ux = function() {
    return x;
  }, Ux();
}
var Is, fs, Cs;
class Fl {
  constructor(i) {
    E(this, Cs);
    E(this, fs, [Pe(705, 574, 656, 836, "k01o") + ve(147, 82, "RivV") + "ic", ve(-10, 8, "eda]") + ve(144, 25, "JZY8") + "ic"]);
    E(this, Is);
    function t(e, n, o, r, a) {
      return ye(r - -156, o);
    }
    this[t(130, 281, "jTyF", 201) + t(-13, 58, "89mS", 39) + "d"] = i;
  }
  async [(Cs = Ke(562, 351, "FqN#", 436, 424) + "se", fs = Pe(695, 788, 671, 775, "JZY8") + Pe(771, 695, 872, 828, "L7Yy") + dt(92, "m)pM", 26, 147, 141) + De("[Tp6", 616), Is = De("*A2b", 587) + Ke(698, 561, "nK33", 480, 608), De("vx3^", 696))](i = De("FqN#", 635), t) {
    const e = await this[o(1347, 1142, "$(N[", 1277) + o(1362, 1283, "nK33", 1243) + o(1238, 1240, "bs8U", 1270)](t);
    function n(s, c, d, g, C) {
      return Ke(s - 52, c - 240, g, g - 346, s - -566);
    }
    function o(s, c, d, g, C) {
      return ve(g - 1038, c - 306, d);
    }
    function r(s, c, d, g, C) {
      return ve(c - -763, c - 109, s);
    }
    await Promise[n(-167, -186, -47, "JZY8") + a(457, 534, 404, 516, "N*ln")]([this[n(37, 143, 139, "CVlp") + a(513, 445, 518, 539, "^jkC") + "d"][n(-154, -182, -177, "k01o")](i), this[n(33, 132, 130, "fzmO") + a(536, 395, 540, 484, "[Tp6") + "e"](e)]);
    function a(s, c, d, g, C) {
      return Ke(s - 373, c - 491, C, g - 228, g - 11);
    }
    this[r("VZ*5", -725) + a(517, 464, 460, 406, "N*ln") + a(530, 421, 375, 509, "L$AB")]();
  }
  async [dt(263, "N*ln", 125, 224, 257) + Pe(727, 805, 859, 674, "^jkC") + "se"](i) {
    function t(a, s, c, d, g) {
      return Pe(g - -226, s - 70, c - 127, d - 253, a);
    }
    function e(a, s, c, d, g) {
      return ve(d - -842, s - 254, c);
    }
    function n(a, s, c, d, g) {
      return ve(c - 646, s - 27, s);
    }
    function o(a, s, c, d, g) {
      return Ke(a - 310, s - 370, s, d - 168, d - 697);
    }
    function r(a, s, c, d, g) {
      return dt(a - 248, s, c - 62, d - 258, a - -767);
    }
    try {
      if (o(1387, "%4z2", 1277, 1306, 1277) !== t("*A2b", 685, 586, 638, 666)) {
        const a = await fetch(i);
        if (!a.ok)
          if (o(1327, "x6rr", 1400, 1272, 1168) !== t("89mS", 448, 665, 679, 542)) {
            _0x4905fc instanceof _0x3ff895 ? _0x4d7071[o(957, "FqN#", 995, 1070, 1117)]() : _0x5f026c instanceof _0x11032d && _0x3def6c[n(687, "nK33", 744, 637, 636)](_0x1b39b8);
            const s = {};
            s[o(1334, "p$Zp", 1209, 1213, 1230) + e(-785, -715, "9G17", -647, -737)] = !1, s[r(-535, "BdY*", -574, -483, -449) + "s"] = [], s[t("L$AB", 572, 636, 657, 592) + t("^jkC", 480, 540, 612, 600)] = [], s[t("fzmO", 641, 601, 581, 667) + n(820, "eda]", 691, 721, 660) + o(1215, "$(N[", 1134, 1097, 1094)] = void (-353 * 6 + -3662 + 5780), s[r(-648, "1)9L", -572, -691, -729)] = function() {
            }, s[t("m)pM", 638, 625, 584, 625) + t("6gl1", 551, 461, 657, 531)] = "", this[t("m)pM", 705, 624, 716, 637) + e(-771, -547, "9G17", -649, -679)] = new _0x50a4c9(s);
          } else throw new Error(t("PvMi", 666, 568, 760, 649) + e(-541, -715, "VZ*5", -586, -547) + o(1246, "L$AB", 1199, 1133, 1208) + e(-596, -733, "4plE", -659, -697) + "d.");
        this[e(-675, -663, "*A2b", -638, -687) + "se"] = await a[o(1100, "vJHk", 1047, 1171, 1102)]();
      } else return _0x2b3f05;
    } catch (a) {
      e(-782, -887, "BdY*", -773) !== n(877, "eda]", 882) ? (this[o(1175, "E#^A", 1321, 1210) + "se"] = void (-2920 * 1 + -1 * -7341 + -4421 * 1), _0x5cc929[e(-792, -905, "a3p@", -819)](_0x38ca42)) : (this[n(771, "p$Zp", 775) + "se"] = void 0, console[n(786, "[Tp6", 863)](a));
    }
  }
  async [Ke(492, 539, "N*ln", 531, 600) + Pe(679, 768, 761, 762, "wcHR") + "e"](i) {
    function t(a, s, c, d, g) {
      return ve(s - 984, s - 119, g);
    }
    this[n(949, 1066, 1017, 973, "L7Yy") + t(1219, 1088, 1076, 1146, "FqN#")] = void 0;
    function e(a, s, c, d, g) {
      return Ke(a - 479, s - 381, g, d - 32, d - -233);
    }
    function n(a, s, c, d, g) {
      return Pe(d - 256, s - 484, c - 429, d - 273, g);
    }
    if (!i)
      if (t(1154, 1135, 1005, 1255, "E#^A") !== o(-479, "9G17", -484, -424)) {
        if (!this[n(1191, 1038, 1113, 1114, "L$AB") + "se"]) throw new _0x31144e(n(1212, 1236, 1095, 1113, "^jkC") + t(1076, 1056, 1134, 1162, "L$AB") + o(-554, "k01o", -612, -647) + e(104, 134, 274, 176, "eda]") + ".");
        if (!this[r(545, "CVlp", 555, 656) + o(-460, "N*ln", -353, -588) + "d"][r(444, "L7Yy", 300, 428) + t(1087, 1197, 1168, 1206, "L$AB") + r(408, "UI28", 606, 502) + "ed"]()) throw new _0x1f2be0(o(-564, "xi7r", -525, -441) + r(699, "PvMi", 553, 635) + t(1009, 1081, 970, 1074, "L7Yy") + o(-632, "4plE", -602, -684) + ".");
        this[t(1255, 1145, 1277, 1251, "Dlp&") + n(1146, 1003, 1158, 1021, "1)9L")] = new _0x2439c2(_0x5cb811(this[e(148, 261, 178, 193, "VZ*5") + "se"], this[t(1006, 1046, 1029, 1090, "^jkC") + e(182, 191, 83, 174, "k01o")]())), this[r(673, "vx3^", 476, 590) + e(113, 217, 166, 251, "bs8U") + "s"](this[n(1071, 1275, 1303, 1192, "1)9L") + n(1057, 1079, 942, 1015, "CVlp")][o(-559, "]8bd", -626, -452) + "s"]), this[e(149, 317, 374, 257, "p$Zp") + r(465, "N*ln", 549, 522) + t(1125, 1172, 1063, 1239, "*A2b")](this[t(1333, 1213, 1147, 1118, "UI28") + r(709, "xi7r", 610, 660)][n(1156, 999, 1179, 1092, "CVlp") + o(-470, "VZ*5", -364, -402)]);
      } else {
        console[n(1128, 996, 1166, 1126, "p$Zp")](o(-574, "PvMi", -668, -689) + e(229, 153, 362, 228, "JZY8") + t(1087, 1018, 1035, 898, "y##O") + o(-570, "a3p@", -471, -537) + t(1106, 1014, 1126, 1105, "$(N[")), this[e(347, 280, 334, 280, "E#^A") + "se"] = void (-5585 + 1117 * 5);
        return;
      }
    function o(a, s, c, d, g) {
      return Ke(a - 469, s - 39, s, d - 467, a - -1051);
    }
    function r(a, s, c, d, g) {
      return dt(a - 374, s, c - 217, d - 440, d - 376);
    }
    await this[o(-437, "p$Zp", -542, -474) + t(1065, 1026, 1148, 1109, "%4z2") + "se"](i);
  }
  async [Pe(692, 731, 638, 682, "5&&Q") + dt(287, "9G17", 137, 286, 198) + Pe(795, 773, 696, 669, "nK33")](i) {
    if (i) {
      if (r(153, 271, 266, 168, "89mS") !== r(173, 311, 392, 394, "PvMi")) throw new _0x363f1d(n(288, "6gl1", 347, 266) + r(184, 299, 369, 227, "fzmO") + a(760, 626, 736, "BdY*") + o(1295, 1227, "E#^A", 1299) + "d.");
      return i;
    }
    const t = await fetch(this[o(1174, 1110, "L$AB", 974) + r(98, 214, 215, 175, "bs8U") + a(804, 894, 707, "fzmO") + o(1056, 1077, "L7Yy", 1180)][1 * -4918 + -572 + 5490]);
    function e(s, c, d, g, C) {
      return Pe(c - 159, c - 91, d - 126, g - 89, C);
    }
    function n(s, c, d, g, C) {
      return De(c, g - -315);
    }
    function o(s, c, d, g, C) {
      return dt(s - 63, d, d - 242, g - 346, c - 1048);
    }
    if (t.ok) return a(818, 942, 891, "vx3^") !== a(735, 649, 739, "2OdL") ? this[n(239, "QLp9", 289, 325) + o(1024, 1133, "5&&Q", 1153) + e(1103, 1027, 1087, 1e3, "$NGo") + e(922, 960, 1083, 999, "5&&Q")][4612 + -116 * 86 + 5364] : this[o(1031, 1110, "L$AB", 1067) + e(1120, 1042, 1008, 1164, "VuM8") + n(498, "FqN#", 530, 404) + a(691, 605, 727, "nK33")][-2701 + 1 * -1167 + 3868];
    function r(s, c, d, g, C) {
      return dt(s - 405, C, d - 163, g - 499, c - 58);
    }
    function a(s, c, d, g, C) {
      return De(g, s - 127);
    }
    return this[r(378, 333, 248, 413, "L7Yy") + n(336, "]8bd", 150, 257) + r(458, 345, 457, 292, "2OdL") + o(1165, 1250, "4plE", 1187)][-7043 + 14 * 24 + -516 * -13];
  }
  [ve(207, 331, "eda]") + ve(107, -18, "x6rr") + "s"](i) {
    function t(e, n, o, r, a) {
      return Pe(n - 337, n - 340, o - 331, r - 30, a);
    }
    i[t(1204, 1208, 1260, 1335, "1)9L") + "ch"]((e) => console[t(1222, 1249, 1201, 1216, "y##O")](e));
  }
  [De("%4z2", 514) + Ke(464, 546, "JZY8", 541, 559) + ve(188, 262, "*A2b")](i) {
    function t(n, o, r, a, s) {
      return De(a, n - -569);
    }
    function e(n, o, r, a, s) {
      return ve(s - 947, o - 394, n);
    }
    i[e("PvMi", 1053, 838, 816, 947) + "ch"]((n) => console[t(162, 106, 44, "5&&Q")](n));
  }
  [Pe(854, 846, 804, 899, "eda]") + Pe(866, 805, 789, 877, "eda]")]() {
    function i(e, n, o, r, a) {
      return dt(e - 330, r, o - 50, r - 100, o - 634);
    }
    function t(e, n, o, r, a) {
      return De(e, n - -995);
    }
    return window[t("y##O", -314) + t("tP1q", -405)][i(533, 663, 668, "zlU5") + i(917, 847, 907, "eda]")];
  }
  [De("k01o", 512) + dt(74, "1)9L", -34, 100, 39) + De("a3p@", 742)]() {
    var r;
    function i(a, s, c, d, g) {
      return Pe(d - -404, s - 130, c - 466, d - 479, a);
    }
    function t(a, s, c, d, g) {
      return Ke(a - 338, s - 6, d, d - 81, c - 433);
    }
    function e(a, s, c, d, g) {
      return dt(a - 436, d, c - 435, d - 320, s - -382);
    }
    function n(a, s, c, d, g) {
      return ve(s - -25, s - 96, a);
    }
    function o(a, s, c, d, g) {
      return ve(a - 171, s - 271, s);
    }
    try {
      if (n("bs8U", -34, -69, 75, -128) !== n("m)pM", 85, 70, -5, 68)) {
        if (!this[t(812, 1025, 905, "eda]", 842) + "se"]) {
          if (t(969, 928, 883, "a3p@", 969) !== t(875, 988, 862, "fzmO", 986)) throw new Ui(t(934, 813, 796, "a3p@", 769) + n("UI28", 208, 215, 87, 341) + n("zlU5", 2, 73, -93, -57) + o(334, "CVlp", 400, 272, 297) + ".");
          {
            const a = _0x24e252[e(-277, -282, -254, "Hh5L", -347)](this[o(252, "6gl1", 248, 308, 283) + "se"]);
            return (r = a == null ? void 0 : a[e(-405, -341, -368, "*A2b", -433) + t(779, 871, 843, "zlU5", 948)]) == null ? void 0 : r[i("y##O", 175, 382, 282, 199) + i("89mS", 351, 430, 410, 310)];
          }
        }
        if (!this[o(184, "L$AB", 216, 199, 205) + t(730, 695, 791, "&Ryv", 689) + "d"][n("eda]", -4, -48, -77, -48) + o(392, "a3p@", 477, 310, 488) + n("vJHk", 77, 166, 15, -11) + "ed"]())
          throw i("jTyF", 500, 384, 495, 412) !== e(-205, -324, -344, "eda]", -283) ? new _0x50f192(i("a3p@", 162, 420, 284, 365) + e(-245, -278, -409, "nK33", -241) + n("4plE", 176, 293, 309, 60) + t(847, 952, 963, "&Ryv", 1098) + ".") : new Ui(o(363, "p$Zp", 249, 470, 359) + t(911, 757, 884, "^jkC", 1010) + o(433, "x6rr", 406, 446, 485) + i("VZ*5", 490, 449, 540, 604) + ".");
        this[e(-273, -248, -314, "VZ*5", -340) + e(-121, -98, -107, "xi7r", 21)] = new ja(El(this[i("PvMi", 396, 389, 522, 554) + "se"], this[t(912, 838, 921, "5&&Q", 914) + n("UI28", 197, 331, 140, 228)]())), this[o(159, "PvMi", 144, 137, 32) + n("FqN#", 205, 79, 234, 109) + "s"](this[n("L$AB", -13, -29, -55, -83) + n("$NGo", -10, -111, -77, 115)][n("^jkC", 34, -59, 160, -94) + "s"]), this[i("QLp9", 614, 569, 486, 367) + o(405, "9wZP", 499, 307, 379) + t(937, 950, 951, "]8bd", 995)](this[n("9G17", 115, 17, 82, 253) + t(1156, 1062, 1041, "nK33", 938)][t(874, 1007, 901, "k01o", 885) + t(750, 879, 783, "1)9L", 827)]);
      } else _0x5de337[i("wcHR", 414, 197, 286, 229) + i("L$AB", 245, 212, 341, 435)](_0x1d6698);
    } catch (a) {
      if (i("QLp9", 344, 414, 337) !== e(-378, -300, -274, "x6rr")) {
        if (a instanceof Ui) t(1170, 1073, 1046, "k01o") === n("L7Yy", 10) ? a[o(181, "Hh5L")]() : _0x771758[t(923, 793, 821, "2OdL")](_0x4895c5);
        else if (a instanceof Error)
          if (e(-451, -356, -223, "vJHk") !== e(-166, -301, -163, "9G17")) console[i("eda]", 509, 486, 461)](a);
          else return _0x1705d0[n("tP1q", 101) + n("4plE", -9)][t(944, 939, 892, "jTyF") + i("zlU5", 337, 365, 343)];
        const s = {};
        s[e(-143, -267, -379, "*A2b") + o(324, "^jkC")] = !1, s[n("BdY*", 174) + "s"] = [], s[n("kdK1", 86) + t(852, 846, 932, "CVlp")] = [], s[n("5&&Q", 123) + o(419, "JZY8") + t(704, 894, 807, "BdY*")] = void (7548 + 148 * -51), s[n("Hh5L", 202)] = function() {
        }, s[e(-68, -193, -226, "&Ryv") + t(673, 761, 811, "FqN#")] = "", this[i("5&&Q", 366, 432, 327) + o(339, "[Tp6")] = new ja(s);
      } else {
        _0x764a21[e(-278, -163, -297, "a3p@")](t(846, 863, 947, "89mS") + n("*A2b", -30) + n("tP1q", 50) + t(947, 948, 968, "BdY*") + n("vx3^", 16)), this[n("VuM8", 224) + "se"] = void (6 * 509 + -323 * -7 + -5315);
        return;
      }
    }
  }
  [ve(198, 72, "eda]") + Ke(501, 613, "FqN#", 440, 480) + ve(96, 157, "eda]") + "t"]() {
    function i(e, n, o, r, a) {
      return Ke(e - 126, n - 368, o, r - 98, e - -88);
    }
    function t(e, n, o, r, a) {
      return dt(e - 399, r, o - 229, r - 74, e - 823);
    }
    return this[i(387, 433, "$(N[", 277) + t(930, 837, 1001, "*A2b")];
  }
  [Ke(452, 658, "vx3^", 629, 584) + De("kdK1", 542) + De("Hh5L", 727)]() {
    var r;
    function i(a, s, c, d, g) {
      return Pe(a - -1239, s - 49, c - 347, d - 474, c);
    }
    function t(a, s, c, d, g) {
      return Ke(a - 201, s - 324, g, d - 89, a - -279);
    }
    function e(a, s, c, d, g) {
      return Ke(a - 131, s - 354, a, d - 489, c - 82);
    }
    function n(a, s, c, d, g) {
      return De(d, a - -805);
    }
    function o(a, s, c, d, g) {
      return ve(g - -392, s - 53, c);
    }
    if (!this[i(-532, -623, "RivV", -565) + "se"]) {
      if (n(-186, -263, -49, "wcHR") === o(-137, -159, "9wZP", -376, -262)) return;
      _0x505456[n(-87, -49, -126, "kdK1")]();
    }
    try {
      if (i(-554, -502, "fzmO", -654, -568) === i(-566, -541, "L$AB", -695, -513)) {
        _0x1f4aba instanceof _0x307320 && _0x26c83c[o(-271, -444, "L7Yy", -433, -307) + e("zlU5", 527, 635, 733, 588)](_0x5ec68d);
        return;
      } else {
        const a = JSON[n(-146, -162, -220, "89mS", -215)](this[i(-352, -489, "CVlp", -243, -254) + "se"]);
        return (r = a == null ? void 0 : a[e("jTyF", 631, 629, 695, 523) + n(-174, -124, -49, "9G17", -149)]) == null ? void 0 : r[e("JZY8", 560, 697, 701, 727) + e("x6rr", 740, 698, 650, 611)];
      }
    } catch (a) {
      if (i(-503, -534, "2OdL", -636) === i(-511, -572, "fzmO", -424)) {
        if (a instanceof Error) {
          if (e("eda]", 491, 609, 623) !== t(300, 363, 302, 410, "L7Yy")) return this[n(-235, -168, -188, "a3p@") + t(199, 97, 101, 151, "PvMi")];
          xe[n(-110, -216, -8, "xi7r") + o(-219, -188, "kdK1", -327, -304)](a);
        }
        return;
      } else return;
    }
  }
}
const si = class si extends Fl {
  static getInstance() {
    if (!this._instance) {
      const i = new Nl();
      this._instance = new si(i);
    }
    return this._instance;
  }
};
E(si, "_instance");
let Ko = si;
var Yl = Symbol.for("preact-signals");
function lr() {
  if (V0 > 1 * -1614 + 9547 + -7932)
    V0--;
  else {
    for (var x, i = !1; void (4 * 137 + -7304 + 2252 * 3) !== Wn; ) {
      var t = Wn;
      for (Wn = void (-6 * 763 + 1469 + 3109), Po++; void (-7229 * -1 + -5188 + -2041) !== t; ) {
        var e = t.o;
        if (t.o = void (-2344 * -2 + -3 * 2727 + 3493), t.f &= -(-770 + -3803 * -2 + -6833), !(-2424 + 1737 * -1 + 4169 & t.f) && Kc(t)) try {
          t.c();
        } catch (n) {
          !i && (x = n, i = !0);
        }
        t = e;
      }
    }
    if (Po = -2387 * -1 + 853 * -1 + -1534, V0--, i) throw x;
  }
}
var oe = void (7013 * 1 + -8568 + 1555), Wn = void (-2223 + -18 * -356 + -4185), V0 = -9001 + -16 * 278 + 13449, Po = 2506 * -2 + -7 * 998 + 11998, Qx = -1 * 1786 + -1 * 4167 + 1 * 5953;
function Hc(x) {
  if (void (-2890 + -1 * -2890) !== oe) {
    var i = x.n;
    if (void (-1103 * -5 + -613 * 6 + 1 * -1837) === i || i.t !== oe)
      return i = { i: 0, S: x, p: oe.s, n: void (2001 + 1781 * 5 + 266 * -41), t: oe, e: void (-683 * -3 + -926 + -1 * 1123), x: void (-7051 + -86 * 12 + 8083 * 1), r: i }, void (-2129 * -3 + -1377 + -5010) !== oe.s && (oe.s.n = i), oe.s = i, x.n = i, -35 * 265 + -5028 + 14335 & oe.f && x.S(i), i;
    if (-(-3644 + -6 * -1043 + -39 * 67) === i.i)
      return i.i = 7 * -187 + -3069 * 1 + 4378, void (-4742 + 2371 * 2) !== i.n && (i.n.p = i.p, void (-7354 + 67 * -4 + 74 * 103) !== i.p && (i.p.n = i.n), i.p = oe.s, i.n = void (-1123 * 2 + 2447 * -2 + 7140), oe.s.n = i, oe.s = i), i;
  }
}
function we(x) {
  this.v = x, this.i = 0, this.n = void 0, this.t = void (-1990 + 1 * 8904 + -6914 * 1);
}
we.prototype.brand = Yl, we.prototype.h = function() {
  return !0;
}, we.prototype.S = function(x) {
  this.t !== x && void (-66 * 13 + -808 * 4 + 4090) === x.e && (x.x = this.t, void (-3730 + -223 * 18 + 7744) !== this.t && (this.t.e = x), this.t = x);
}, we.prototype.U = function(x) {
  if (void (-48 * 58 + -5251 + 8035) !== this.t) {
    var i = x.e, t = x.x;
    void (-5 * 1066 + 1488 * 4 + -622) !== i && (i.x = t, x.e = void (-1 * -6558 + 10 * -130 + -5258)), void (5914 * 1 + -1 * -1402 + 3658 * -2) !== t && (t.e = i, x.x = void 0), x === this.t && (this.t = t);
  }
}, we.prototype.subscribe = function(x) {
  var i = this;
  return fr(function() {
    var t = i.value, e = oe;
    oe = void (-7702 * 1 + 8260 + -558);
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
  oe = void (46 * 185 + -6541 + -1969);
  try {
    return this.value;
  } finally {
    oe = x;
  }
}, Object.defineProperty(we.prototype, "value", { get: function() {
  var x = Hc(this);
  return x !== void 0 && (x.i = this.i), this.v;
}, set: function(x) {
  if (x !== this.v) {
    if (Po > 1195 * -2 + -13 * -25 + 2165 * 1) throw new Error("Cycle detected");
    this.v = x, this.i++, Qx++, V0++;
    try {
      for (var i = this.t; void (-4 * -1183 + 263 * -9 + -5 * 473) !== i; i = i.x) i.t.N();
    } finally {
      lr();
    }
  }
} });
function Rc(x) {
  return new we(x);
}
function Kc(x) {
  for (var i = x.s; void (-8473 + 1942 * 4 + -705 * -1) !== i; i = i.n) if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return !(-1481 * -2 + 5265 + 8227 * -1);
  return !(7973 + 7 * -1212 + 512);
}
function Pc(x) {
  for (var i = x.s; void (1 * -9333 + -5494 + 14827) !== i; i = i.n) {
    var t = i.S.n;
    if (void (1804 + 4 * -451) !== t && (i.r = t), i.S.n = i, i.i = -1, i.n === void 0) {
      x.s = i;
      break;
    }
  }
}
function Tc(x) {
  for (var i = x.s, t = void (6216 + -524 * -18 + -15648); void (-378 + -9 * -817 + 31 * -225) !== i; ) {
    var e = i.p;
    -(1 * -8909 + -7035 + 15945) === i.i ? (i.S.U(i), void (-34 * -34 + 9382 + -10538) !== e && (e.n = i.n), void (-7617 + 3 * 3089 + -66 * 25) !== i.n && (i.n.p = e)) : t = i, i.S.n = i.r, void (21 * 293 + -3813 + -2 * 1170) !== i.r && (i.r = void 0), i = e;
  }
  x.s = t;
}
function P0(x) {
  we.call(this, void (1445 + -198 * 3 + -23 * 37)), this.x = x, this.s = void (-42 * 194 + 4618 * -1 + 12766), this.g = Qx - (4 * 69 + 7983 * 1 + 2 * -4129), this.f = 1919 * 5 + 113 * 86 + -19309;
}
(P0.prototype = new we()).h = function() {
  if (this.f &= -(-11 * 488 + -3179 + 8550), 1 & this.f) return !(-1630 + 7 * -503 + 5152);
  if (9435 + -1 * -1352 + -1195 * 9 == (-3431 * -2 + 998 + -7824 & this.f)) return !(-3 * 1993 + -2980 + -17 * -527);
  if (this.f &= -5, this.g === Qx) return !0;
  if (this.g = Qx, this.f |= 1, this.i > 4188 + 1 * -4021 + 167 * -1 && !Kc(this)) return this.f &= -(-20 * 83 + 10 * -537 + 7032), !(523 * -15 + -91 * 58 + 13123);
  var x = oe;
  try {
    Pc(this), oe = this;
    var i = this.x();
    (-8014 + 1283 * 1 + 6747 & this.f || this.v !== i || this.i === 0) && (this.v = i, this.f &= -(214 * 1 + 301 + -498), this.i++);
  } catch (t) {
    this.v = t, this.f |= 1 * -6651 + 3 * 797 + -1 * -4276, this.i++;
  }
  return oe = x, Tc(this), this.f &= -(1735 * 4 + 6164 + -1 * 13102), !(-8497 * 1 + 3223 + 5274);
}, P0.prototype.S = function(x) {
  if (void (-3070 + 1 * 9701 + -6631) === this.t) {
    this.f |= -3611 * 1 + -7592 + -1 * -11239;
    for (var i = this.s; void (8427 + 4932 * 1 + -13359) !== i; i = i.n) i.S.S(i);
  }
  we.prototype.S.call(this, x);
}, P0.prototype.U = function(x) {
  if (void (-149 * 25 + 137 * 37 + -1344) !== this.t && (we.prototype.U.call(this, x), void (-15 * 509 + 8241 + -6 * 101) === this.t)) {
    this.f &= -(-2692 + 5 * 545);
    for (var i = this.s; i !== void 0; i = i.n) i.S.U(i);
  }
}, P0.prototype.N = function() {
  if (!(97 * -38 + 5851 + 2163 * -1 & this.f)) {
    this.f |= -6774 + -135 * 25 + 10155;
    for (var x = this.t; void (-4243 * 2 + 1201 * 4 + 2 * 1841) !== x; x = x.x) x.t.N();
  }
}, Object.defineProperty(P0.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var x = Hc(this);
  if (this.h(), void (-504 + -1873 * -5 + 8861 * -1) !== x && (x.i = this.i), -2294 + -1 * 6146 + 8456 & this.f) throw this.v;
  return this.v;
} });
function Ml(x) {
  return new P0(x);
}
function Ec(x) {
  var i = x.u;
  if (x.u = void (-6220 + -41 * 119 + 11099), typeof i == "function") {
    V0++;
    var t = oe;
    oe = void (-180 + -3 * 2268 + 6984);
    try {
      i();
    } catch (e) {
      throw x.f &= -(9 * 299 + -5 * -1271 + -9044), x.f |= 4183 * 1 + 12 * 54 + -1 * 4823, Ir(x), e;
    } finally {
      oe = t, lr();
    }
  }
}
function Ir(x) {
  for (var i = x.s; void (299 * 27 + -58 * 118 + -1229 * 1) !== i; i = i.n) i.S.U(i);
  x.x = void (-799 * -5 + 3 * 3209 + 973 * -14), x.s = void (-178 * 48 + 531 * -7 + 4087 * 3), Ec(x);
}
function jl(x) {
  if (oe !== this) throw new Error("Out-of-order effect");
  Tc(this), oe = x, this.f &= -(-458 * -17 + 3900 + -11684), 9006 + -4091 * -2 + -17180 & this.f && Ir(this), lr();
}
function hn(x) {
  this.x = x, this.u = void (-12975 + 4325 * 3), this.s = void (-22 * 4 + -1124 * -6 + -2 * 3328), this.o = void (-1 * 2360 + 1 * -2686 + 1682 * 3), this.f = -1101 * 1 + 6112 + 383 * -13;
}
hn.prototype.c = function() {
  var x = this.S();
  try {
    if (-9366 + -423 * -17 + 59 * 37 & this.f || this.x === void 0) return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    x();
  }
}, hn.prototype.S = function() {
  if (6429 + -7331 * 1 + 903 & this.f) throw new Error("Cycle detected");
  this.f |= 1 * 5273 + 2326 + -2 * 3799, this.f &= -9, Ec(this), Pc(this), V0++;
  var x = oe;
  return oe = this, jl.bind(this, x);
}, hn.prototype.N = function() {
  !(-2 * 3644 + -6111 + 13401 & this.f) && (this.f |= 223 * -6 + -879 * 9 + 9251, this.o = Wn, Wn = this);
}, hn.prototype.d = function() {
  this.f |= 2582 * 1 + -2734 * 1 + -40 * -4, 5816 + 2893 * 1 + 1244 * -7 & this.f || Ir(this);
};
function fr(x) {
  var i = new hn(x);
  try {
    i.c();
  } catch (t) {
    throw i.d(), t;
  }
  return i.d.bind(i);
}
var zi;
function E0(x, i) {
  M[x] = i.bind(null, M[x] || function() {
  });
}
function fx(x) {
  zi && zi(), zi = x && x.S();
}
function Vc(x) {
  var i = this, t = x.data, e = en(t);
  e.value = t;
  var n = Qe(function() {
    for (var o = i.__v; o = o.__; ) if (o.__c) {
      o.__c.__$f |= 3610 * 1 + 2857 * -2 + 2108;
      break;
    }
    return i.__$u.c = function() {
      var r;
      !hs(n.peek()) && -139 * 32 + -1 * -183 + 4268 === ((r = i.base) == null ? void 0 : r.nodeType) ? i.base.data = n.peek() : (i.__$f |= 29 + -4 * 7, i.setState({}));
    }, Ml(function() {
      var r = e.value.value;
      return -19 * -23 + -3588 + 3151 === r ? 8232 + -7 * -43 + -8533 : r === !0 ? "" : r || "";
    });
  }, []);
  return n.value;
}
Vc.displayName = "_st";
var To = {};
To.configurable = !(1041 * -8 + 1 * -1312 + -4820 * -2), To.value = void (1423 * 5 + -173 * 47 + 8 * 127);
var Eo = {};
Eo.configurable = !(-6250 * 1 + -994 + 7244), Eo.value = Vc;
var Vo = {};
Vo.configurable = !(266 * -1 + 7412 + -7146), Vo.get = function() {
  var x = {};
  return x.data = this, x;
};
var Lo = {};
Lo.configurable = !(2653 + 205 * 1 + -2858 * 1), Lo.value = 1;
var dn = {};
dn.constructor = To, dn.type = Eo, dn.props = Vo, dn.__b = Lo, Object.defineProperties(we.prototype, dn), E0("__b", function(x, i) {
  if (typeof i.type == "string") {
    var t, e = i.props;
    for (var n in e) if (n !== "children") {
      var o = e[n];
      o instanceof we && (t || (i.__np = t = {}), t[n] = o, e[n] = o.peek());
    }
  }
  x(i);
}), E0("__r", function(x, i) {
  fx();
  var t, e = i.__c;
  e && (e.__$f &= -(-1 * -9103 + -5098 + 4003 * -1), void (1389 * 1 + -8429 + 7040 * 1) === (t = e.__$u) && (e.__$u = t = function(n) {
    var o;
    return fr(function() {
      o = this;
    }), o.c = function() {
      e.__$f |= -1951 * -5 + -7005 + -1 * 2749, e.setState({});
    }, o;
  }())), fx(t), x(i);
}), E0("__e", function(x, i, t, e) {
  fx(), x(i, t, e);
}), E0("diffed", function(x, i) {
  fx();
  var t;
  if (typeof i.type == "string" && (t = i.__e)) {
    var e = i.__np, n = i.props;
    if (e) {
      var o = t.U;
      if (o) for (var r in o) {
        var a = o[r];
        void (-7274 + 7274 * 1) !== a && !(r in e) && (a.d(), o[r] = void (1268 * -1 + -1001 + 2269 * 1));
      }
      else t.U = o = {};
      for (var s in e) {
        var c = o[s], d = e[s];
        void (688 + 8 * 212 + -4 * 596) === c ? (c = Xl(t, s, d, n), o[s] = c) : c.o(d, n);
      }
    }
  }
  x(i);
});
function Xl(x, i, t, e) {
  var n = i in x && x.ownerSVGElement === void 0, o = Rc(t);
  return { o: function(r, a) {
    o.value = r, e = a;
  }, d: fr(function() {
    var r = o.value.value;
    e[i] !== r && (e[i] = r, n ? x[i] = r : r ? x.setAttribute(i, r) : x.removeAttribute(i));
  }) };
}
E0("unmount", function(x, i) {
  if (typeof i.type == "string") {
    var t = i.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (-33 * 2 + -5311 + 19 * 283);
        for (var n in e) {
          var o = e[n];
          o && o.d();
        }
      }
    }
  } else {
    var r = i.__c;
    if (r) {
      var a = r.__$u;
      a && (r.__$u = void (163 * -31 + 6637 * 1 + -1584), a.d());
    }
  }
  x(i);
}), E0("__h", function(x, i, t, e) {
  (e < -8 * -631 + -57 * -57 + -1 * 8294 || -411 * -3 + 9032 + -10256 === e) && (i.__$f |= 3913 * -2 + -10 * -423 + 3598), x(i, t, e);
}), it.prototype.shouldComponentUpdate = function(x, i) {
  var t = this.__$u;
  if (!(t && t.s !== void 0 || -3 * -1577 + 6001 + -10728 & this.__$f)) return !(5657 + 5657 * -1);
  if (-3965 * -1 + -4357 * -2 + -12676 & this.__$f) return !0;
  for (var e in i) return !(-116 + -2 * -58);
  for (var n in x) if (n !== "__source" && x[n] !== this.props[n]) return !0;
  for (var o in this.props) if (!(o in x)) return !(8950 + -1 * 4141 + 1603 * -3);
  return !1;
};
function en(x) {
  return Qe(function() {
    return Rc(x);
  }, []);
}
function _l(x, i) {
  if (!x) return i;
  const { detectionRecord: t, hashedDetectedImages: e } = x;
  i.hashedDetectedImages && (e == null || e.push(...i.hashedDetectedImages)), i.detectionRecord && (t == null || t.push(...i.detectionRecord));
  const n = { ...x };
  return n.hashedDetectedImages = e, n.detectionRecord = t, n;
}
function Jl() {
  const x = en(null);
  function i({ cameraProperties: e }) {
    x.value = _l(x.value, e);
  }
  const t = {};
  return t.cameraProperties = x, t.mergeCameraProperties = i, t;
}
const Lc = (x, i) => {
  const t = It(i);
  ge(() => {
    t.current = i;
  }, [i]), ge(() => {
    const e = (n) => t.current(n);
    return document.addEventListener(x, e), () => {
      document.removeEventListener(x, e);
    };
  }, [x]);
}, Ul = (x) => {
  const i = en(!1);
  return Lc(x, (e) => {
    e.detail && (i.value = e.detail.animationEnd);
  }), i;
}, Ql = (x, i, t = Ol) => new Promise((e) => {
  x.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, i);
}), Dc = async (x) => Ql(x, -8959 + -2 * -2023 + -5003 * -1), zl = (x, i) => {
  const t = document.createElement("canvas");
  t.width = i.width, t.height = i.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(x, i.shiftX, i.shiftY, i.width, i.height, 3616 + 1 * -9909 + 6293, -79 * 101 + 54 * -164 + 16835 * 1, t.width, t.height), t;
}, ql = (x) => {
  const i = x.getContext("2d");
  if (!i) throw new Error("getImageDataForSam ctx error");
  const { data: t } = i.getImageData(-5 * -613 + 4358 * 2 + -11781, -8583 + 7043 * 1 + 14 * 110, x.width, x.height);
  return t;
}, Nc = (x, i, t, e) => {
  const n = x.getContext("2d");
  n && (n.beginPath(), e ? (n.fillStyle = t, n.fillRect(i.topLeft.x, i.topLeft.y, i.width, i.height)) : (n.strokeStyle = t, n.rect(i.topLeft.x, i.topLeft.y, i.width, i.height)), n.stroke());
}, qi = (x, i, t) => {
  const { height: e, shiftX: n, shiftY: o, width: r } = i, a = {};
  a.x = n, a.y = o;
  const s = {};
  s.topLeft = a, s.width = r, s.height = e, s.color = t, Nc(x, s, t);
}, vn = (x, i, t, e = 17 * -263 + 73 * -106 + 12209 * 1) => {
  const n = x.getContext("2d");
  n && (n.fillStyle = t, n.fillRect(i.x + e, i.y + e, -6806 + 2 * -3629 + 14071, -1606 * -3 + 839 * -11 + 2 * 2209), n.beginPath());
}, Fc = _n(null), Cr = () => {
  const x = m0(Fc);
  if (!x)
    throw new Error("Missing provider for CameraOptionsContext");
  return x;
}, $l = ({
  cameraFacing: x,
  captureMode: i,
  licensePath: t,
  onPhotoTaken: e,
  sessionToken: n,
  thresholds: o,
  wasmDirectoryPath: r
}) => {
  var a, s, c;
  return {
    onPhotoTaken: e,
    cameraFacing: x ?? dr.FRONT,
    captureMode: i ?? mc.AUTO_CAPTURE,
    wasmDirectoryPath: r,
    licensePath: t,
    sessionToken: n,
    thresholds: {
      faceConfidence: (o == null ? void 0 : o.faceConfidence) ?? Cl,
      minFaceSizeRatio: (o == null ? void 0 : o.minFaceSizeRatio) ?? pl,
      maxFaceSizeRatio: (o == null ? void 0 : o.maxFaceSizeRatio) ?? hl,
      sharpnessThreshold: (o == null ? void 0 : o.sharpnessThreshold) ?? Al,
      brightnessLowThreshold: (o == null ? void 0 : o.brightnessLowThreshold) ?? yl,
      brightnessHighThreshold: (o == null ? void 0 : o.brightnessHighThreshold) ?? Wl,
      outOfBoundsThreshold: (o == null ? void 0 : o.outOfBoundsThreshold) ?? ml,
      devicePitchAngleThreshold: (o == null ? void 0 : o.devicePitchAngleThreshold) ?? vl,
      mouth: {
        confidence: ((a = o == null ? void 0 : o.mouth) == null ? void 0 : a.confidence) ?? bl,
        status: {
          min: ((s = o == null ? void 0 : o.mouth) == null ? void 0 : s.status.min) ?? Va.min,
          max: ((c = o == null ? void 0 : o.mouth) == null ? void 0 : c.status.max) ?? Va.max
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
}, e1 = ({
  cameraOptions: x,
  children: i
}) => {
  const t = Qe(() => $l(x), [x]);
  return /* @__PURE__ */ O(Fc.Provider, { value: t, children: i });
}, Yc = 2 * -264 + -8834 + 9362 + 0.75, t1 = 314 * -2 + 7698 + -3 * 2356, n1 = 5 * 990 + -293 * 1 + -4057, x1 = 0, i1 = "dot-auto-capture-video", Mc = (x) => x.length < 7907 + -59 * 134 ? -839 * 11 + 2768 * -1 + 11997 : x.reduce((t, e) => t + e, 9052 + 146 * -62) / x.length, tn = (x) => Number.parseFloat(x.toFixed(3)), o1 = (x) => {
  const i = x.getContext("2d");
  i && i.clearRect(2285 * 3 + 28 * -30 + -6015, -2100 + -50 * -42, i.canvas.width, i.canvas.height);
}, Ai = (x, i) => Math.min(x, i), jc = ({ height: x, width: i }, t) => {
  const e = Ai(i, x) * t, n = (i - e) / 2, o = (x - e) / (6323 + 6331 * -1 + 10), r = {};
  return r.shiftX = n, r.shiftY = o, r.width = e, r.height = e, r;
}, r1 = (x, i) => {
  const { height: t, shiftX: e, shiftY: n, width: o } = jc(x, i), r = {};
  return r.shiftX = e / x.width, r.shiftY = n / x.height, r.width = o / x.width, r.height = t / x.height, r;
}, a1 = ({ height: x, width: i }) => {
  const t = Ai(i, x), e = t / (4413 + -3217 * -1 + -7627) * (190 * -8 + -1523 * 6 + 10662);
  if (i > x) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const n = {};
  return n.width = t, n.height = e, n;
}, s1 = (x, i) => {
  const t = Ai(i.width, i.height);
  return tn(x * t);
}, c1 = ({ height: x, width: i }) => {
  const t = {};
  return t.height = x, t.width = i, jc(t, Yc);
}, g1 = (x) => r1(x, Yc), d1 = (x, i) => s1(x, i) * t1, u1 = "@innovatrics/dot-common-auto-capture", l1 = "6.2.0", I1 = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, f1 = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, C1 = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, p1 = {
  name: u1,
  private: !0,
  version: l1,
  scripts: I1,
  dependencies: f1,
  devDependencies: C1
}, Xc = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Xa = () => {
  const x = /Android/i.test(navigator.userAgent), i = /Firefox/i.test(navigator.userAgent);
  return x && i;
}, h1 = () => {
  const x = navigator.userAgent.includes("Chrome"), i = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return x && i ? !1 : i;
}, Do = (x) => new Promise((i) => {
  setTimeout(i, x);
}), _c = (x) => JSON.parse(JSON.stringify(x, (i, t) => typeof t == "number" ? tn(t) : t)), Jc = () => p1.version, Uc = (x) => new URL(x).hostname.replace("www.", ""), m1 = () => Uc(window.location.href) === "localhost", Cx = (x) => Object.entries(x).map(([i, t]) => encodeURIComponent(i) + "=" + encodeURIComponent(t)).join("&"), b1 = (x, i) => JSON.stringify(x) === JSON.stringify(i) ? i : x, _a = (x, i) => Math.abs(x - i);
function A1(x, i) {
  let t;
  return (...e) => {
    const n = () => {
      clearTimeout(t), t = void 0, x(...e);
    };
    t === void (-2361 * -3 + -3 * 923 + -4314) && (t = setTimeout(n, i));
  };
}
const y1 = () => "prod".toLowerCase() === "dev";
class pr extends Array {
  constructor(t) {
    super();
    E(this, "size");
    this.size = t;
  }
  pushFixed(...t) {
    if (t.length > this.size) {
      const e = t.slice(-this.size);
      this.push(...e);
      return;
    }
    this.length === this.size && this.splice(-1 * -7823 + -1251 + 53 * -124, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-6 * -717 + -4970 + 668);
  }
}
const W1 = (x, i) => {
  const { height: t, shiftX: e, shiftY: n, width: o } = i;
  return !(x.x < e || x.x > e + o || x.y < n || x.y > n + t);
}, v1 = (x, i) => Object.values(x).every((t) => W1(t, i));
function zx(x) {
  const { height: i, width: t } = a1(x), e = (x.width - t) / (-8330 + -649 * 15 + -18067 * -1), n = (x.height - i) / (-3542 * 2 + 4126 + -1 * -2960), o = {};
  return o.shiftX = e, o.shiftY = n, o.width = t, o.height = i, o;
}
function Qc(x, i, t) {
  const { height: e, width: n } = t, o = Ai(x.width, x.height), r = n - o * i * (115 * -61 + -5984 + 13001), a = e - o * i * (-6808 + -149 * -57 + -17 * 99), s = (x.width - r) / (-4138 + -60 * -69), c = (x.height - a) / 2, d = {};
  return d.shiftX = s, d.shiftY = c, d.width = r, d.height = a, d;
}
function H0(x, i) {
  const { shiftX: t, shiftY: e } = i, n = {};
  return n.x = x.x + t, n.y = x.y + e, n;
}
const S1 = (x, i) => ({ ...x, leftEye: { ...x.leftEye, center: H0(x.leftEye.center, i) }, rightEye: { ...x.rightEye, center: H0(x.rightEye.center, i) }, mouth: { ...x.mouth, center: H0(x.mouth.center, i) }, topLeft: H0(x.topLeft, i), bottomRight: H0(x.bottomRight, i), faceCenter: H0(x.faceCenter, i) }), zc = (x, i) => {
  const { faceCenter: t, faceSize: e } = x, n = d1(e, i), o = {};
  o.x = t.x, o.y = t.y - n;
  const r = {};
  r.x = t.x + n, r.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + n;
  const s = {};
  s.x = t.x - n, s.y = t.y;
  const c = {};
  return c.top = o, c.right = r, c.bottom = a, c.left = s, _c(c);
}, w1 = (x, i) => {
  const { bottomRight: t, faceCenter: e, topLeft: n } = i, o = {
    topLeft: n,
    width: t.x - n.x,
    height: t.y - n.y
  };
  Nc(x, o, "rgba(255, 0, 0, 0.3)", !0), vn(x, e, "lime");
}, B1 = (x, i, t) => {
  const e = zc(i, t);
  Object.values(e).map((n) => vn(x, n, "orange"));
}, G1 = ({ cameraResolution: x, detectionDetails: i, isImageMirror: t }) => {
  const { thresholds: e } = Cr(), { redfin: n } = Jn(), o = It(null);
  if (ge(() => {
    if (!o.current)
      return;
    o.current.width = x.width, o.current.height = x.height, o1(o.current);
    const p = zx(x), m = Qc(
      x,
      e.outOfBoundsThreshold,
      p
    ), A = c1(x);
    i.value && (w1(o.current, i.value.processedImage.detection), B1(
      o.current,
      i.value.processedImage.detection,
      x
    ), qi(o.current, p, "lime"), qi(o.current, m, "yellow"), qi(o.current, A, "blue"), vn(o.current, i.value.processedImage.detection.leftEye.center, "cyan"), vn(o.current, i.value.processedImage.detection.rightEye.center, "cyan"), vn(o.current, i.value.processedImage.detection.mouth.center, "cyan"));
  }, [x, e, i.value]), !i.value)
    return null;
  const {
    detectionTime: r,
    fps: a,
    processedImage: { detection: s, instructionCode: c, invalidValidators: d },
    resolution: g,
    samVersion: C
  } = i.value, u = {
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
    "Detection time": r,
    FPS: a,
    Tier: n,
    Instruction: c,
    Resolution: JSON.stringify(g),
    "Component version": "6.2.0"
  };
  return C && (u["SAM version"] = C), d.length > 0 && (u["Invalid validators"] = d.join(", ")), /* @__PURE__ */ O(
    sl,
    {
      ref: o,
      cameraResolution: x,
      detectionDetails: u,
      isImageMirror: t
    }
  );
};
function k1(x) {
  return /* @__PURE__ */ O("rect", { fill: "#000", ...x, rx: "50%" });
}
function O1(x) {
  const [i, t] = Me(!1), e = () => t((r) => !r), n = "" + i;
  U0(() => {
    function r() {
      if (!x.current) return;
      const d = new MutationObserver(() => {
        e();
      }), g = {};
      return g.childList = !0, g.subtree = !0, g.attributes = !0, d.observe(x.current, g), d;
    }
    function a() {
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
    const s = r(), c = a();
    return () => {
      c == null || c.disconnect(), s == null || s.disconnect();
    };
  });
  const o = {};
  return o.key = n, o;
}
const Z1 = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function H1({ cutOut: x, height: i, width: t }) {
  const e = It(null), { key: n } = O1(e);
  return /* @__PURE__ */ O("div", { ref: e, style: Z1, children: /* @__PURE__ */ O("svg", { viewBox: `0 0 ${t} ${i}`, children: [
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
function R1({ fullOverlay: x, resolution: i }) {
  const t = g1(i), e = `${t.height * 100}%`, n = `${t.width * 100}%`, o = `${t.shiftX * 100}%`, r = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ O(
    H1,
    {
      cutOut: x || /* @__PURE__ */ O(k1, { height: e, width: n, x: o, y: r }),
      height: i.height,
      width: i.width
    }
  );
}
function K1({ cameraResolution: x, children: i, detectionDetails: t, shouldMirror: e }) {
  const { redfin: n, sunfish: o } = Jn(), { appState: r, freemiumOverlayState: a } = $0(), s = a !== An.HIDDEN && n !== Bo.Higher && x, c = a === An.VISIBLE, d = x && o && r === yt.RUNNING;
  return /* @__PURE__ */ O(rt, { children: [
    s && /* @__PURE__ */ O(R1, { fullOverlay: c, resolution: x }),
    i,
    d && /* @__PURE__ */ O(
      G1,
      {
        cameraResolution: x,
        detectionDetails: t,
        isImageMirror: e
      }
    )
  ] });
}
const qc = (x, i) => {
  const t = {};
  t.detail = i, document.dispatchEvent(new CustomEvent(x, t));
}, ci = class ci {
  constructor() {
    E(this, "lastDetails", {});
    E(this, "delayedTime", 7269 * 1 + 5 * -1403 + -254);
  }
  static getInstance() {
    return !this._instance && (this._instance = new ci()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 8762 + -8762 * 1;
  }
  isDetailChanged(i, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[i]) ? (this.lastDetails[i] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(i, t) {
    this.isDetailChanged(i, t) && qc(i, t);
  }
  dispatchDelayedCustomEventOnChange(i, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(i, t), this.delayedTime = n);
  }
};
E(ci, "_instance");
let Gn = ci;
const Un = Gn.getInstance(), $c = (x, i, t = n1) => {
  const e = {};
  e.instructionCode = i;
  const n = e;
  Un.dispatchDelayedCustomEventOnChange(x, n, t);
}, P1 = (x, i) => {
  Un.dispatchCustomEventOnChange(x, i);
}, T1 = (x, i) => {
  const t = {};
  t.size = i;
  const e = t;
  Un.dispatchCustomEventOnChange(x, e);
}, E1 = (x, i, t) => {
  const e = i.confidence < t ? void 0 : i, n = {};
  n.detectedObject = e;
  const o = n;
  Un.dispatchCustomEventOnChange(x, o);
}, V1 = (x, { detection: i, fps: t, image: e, invalidValidators: n, isInCandidateSelection: o }) => {
  const r = {};
  r.image = e, r.data = {}, r.data.detection = i, r.data.fps = t, r.data.isInCandidateSelection = o, r.data.invalidValidators = n, r.data.imageResolution = {}, r.data.imageResolution.width = e.width, r.data.imageResolution.height = e.height;
  const a = r;
  Un.dispatchCustomEventOnChange(x, a);
}, No = (x, i) => {
  qc(x, i);
}, L1 = (x, i) => {
  if (y1()) {
    const t = {};
    t.candidateSelectionImages = i;
    const e = t;
    Gn.getInstance().dispatchCustomEventOnChange(x, e);
  }
}, D1 = (x, i) => {
  const { cameraResolution: t, shouldCameraMirror: e } = i;
  ge(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, P1(x, n);
  }, [t, e, x]);
}, N1 = (x) => x === pc.CONTROL ? !Xc() : !0, F1 = (x, i) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: o } = $0(), [r, a] = Me(), s = Qe(() => {
    const d = o && i && i.isStreaming && i.getCameraSettings().facingMode;
    return d ? r ?? d === "user" : r ?? N1(x);
  }, [i, r, x, o]);
  ge(() => {
    const d = () => {
      t !== yt.LOADING && e(yt.RUNNING);
    }, g = () => {
      a(r === void 0 ? !s : !r);
    }, C = async () => {
      if (i) {
        e(yt.LOADING);
        try {
          await i.switchCamera(), e(yt.RUNNING);
        } catch (p) {
          if (p instanceof Error) {
            n(xe.fromCameraError(p));
            return;
          }
        }
        a(void 0);
      }
    }, u = (p) => {
      var m;
      switch ((m = p.detail) == null ? void 0 : m["instruction"]) {
        case Mi.CONTINUE_DETECTION:
          d();
          break;
        case Mi.TOGGLE_MIRROR:
          g();
          break;
        case Mi.SWITCH_CAMERA:
          C();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(x, u), () => {
      document.removeEventListener(x, u);
    };
  }, [t, i, n, r, e, s, x]);
  const c = {};
  return c.shouldCameraMirror = s, c;
};
async function eg() {
  return navigator.mediaDevices.enumerateDevices();
}
async function $i() {
  return (await eg()).filter((i) => i.kind === "videoinput");
}
function eo(x) {
  x.getTracks().forEach((t) => t.stop());
}
function Ja(x) {
  return x.getVideoTracks()[7091 * 1 + 1366 + -8457];
}
const Hx = {};
Hx.width = 1920, Hx.height = 1080, Hx.facingMode = dr.FRONT;
const Y1 = Hx;
var ut;
class tg {
  constructor({ defaultVideoConstrains: i = Y1, minCameraShorterSide: t = wl } = {}) {
    E(this, "options");
    E(this, "availableCameraProperties", []);
    ne(this, ut, null);
    const e = {};
    e.defaultVideoConstrains = i, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return L(this, ut);
  }
  get videoTrack() {
    return L(this, ut) ? Ja(L(this, ut)) : void (13536 + 188 * -72);
  }
  get isCameraActive() {
    var i;
    return !!((i = L(this, ut)) != null && i.active);
  }
  static async requestPermission() {
    const i = {};
    i.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(i);
    eo(t);
  }
  async open(i = {}) {
    Xa() && await Do(1832 * 4 + -7543 * 1 + 5 * 133), $(this, ut, await navigator.mediaDevices.getUserMedia(i)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const i = await $i();
    if (i.length <= 1 * 4839 + 6638 * -1 + 3 * 600) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = i.findIndex((a) => a.deviceId === e.deviceId), o = i[n + (-250 * -33 + -2055 + -3097 * 2)] ?? i[12873 + -3 * 4291], r = this.getConstraints(t, o);
    this.close(), await this.open(r);
  }
  close() {
    L(this, ut) && (eo(L(this, ut)), $(this, ut, null));
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
    const i = this.getSettings(), t = await eg(), e = t.find((n) => n.deviceId === i.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(i) {
    return i === dr.FRONT ? void (-474 * -13 + -4903 * -1 + -1 * 11065) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return Xc() ? (await $i()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (6003 + -509 * 2 + -4985);
  }
  async collectAvailableCamerasInfo() {
    const i = await $i();
    for (const t of i) {
      Xa() && await Do(1 * 1907 + -511 + -946);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const o = await navigator.mediaDevices.getUserMedia(n), r = Ja(o);
        if (!r) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = r.getSettings(), s = { ...a };
        s.deviceName = r.label;
        const c = {};
        c.cameraProperties = s;
        const d = c;
        this.availableCameraProperties.push(d), eo(o);
      } catch (e) {
        e instanceof Error && xe.logError(e);
      }
    }
  }
  getConstraints(i, t) {
    const e = { ...this.options.defaultVideoConstrains, ...i };
    e.deviceId = t ? { exact: t.deviceId } : void (-8353 * -1 + -6847 * 1 + -502 * 3);
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
ut = new WeakMap();
class M1 {
  constructor(i, t) {
    this.videoHandler = i, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(i = {}) {
    await tg.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(i.facingMode), e = this.cameraHandler.getConstraints(i, t);
    await this.cameraHandler.open(e), h1() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
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
    return e.drawImage(this.videoHandler.videoElement, 0, 0), { image: t, timestamp: Date.now() };
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
class j1 {
  constructor(i) {
    ne(this, Ht);
    $(this, Ht, i);
  }
  get videoElement() {
    return L(this, Ht);
  }
  async play(i) {
    L(this, Ht).srcObject = i, await L(this, Ht).play();
  }
  stop() {
    L(this, Ht).srcObject = null;
  }
  hasSrcObject() {
    return !!L(this, Ht).srcObject;
  }
}
Ht = new WeakMap();
function X1(x) {
  const i = It(null), t = It(), { handleError: e, setIsCameraReady: n } = $0(), [o, r] = Me(), a = Tt((c) => {
    r((d) => b1(c, d));
  }, []);
  ge(() => ((async () => {
    if (!i.current) {
      e(new xe("Something went wrong during video initialization"));
      return;
    }
    const d = new j1(i.current), g = new tg(), C = new M1(d, g);
    try {
      const u = {};
      u.facingMode = x, await C.startVideoStream(u);
    } catch (u) {
      if (u instanceof Error) {
        e(xe.fromCameraError(u));
        return;
      }
    }
    n(!0), a(C.getCameraResolution()), t.current = C;
  })(), function() {
    t.current && t.current.stopStreaming(), n(!1);
  }), [x, e, n, i, a]);
  const s = {};
  return s.cameraService = t.current, s.cameraResolution = o, s.onCameraResolutionChange = a, s.videoRef = i, s;
}
function _1(x, i) {
  ge(() => {
    if (!x.current) return;
    const t = new ResizeObserver((e) => {
      const [n] = e;
      T1(i, n.contentRect);
    });
    return t.observe(x.current), () => {
      t.disconnect();
    };
  }, [x, i]);
}
function J1(x) {
  return tn(Math.abs(x));
}
const U1 = () => {
  const [x, i] = Me(null), t = It(new pr(229 * 9 + -3882 + 22 * 83));
  function e(o) {
    const { z: r } = o.accelerationIncludingGravity || {};
    if (!r) return;
    t.current.pushFixed(J1(r));
    const a = tn(Mc(t.current)), s = {};
    s.z = a, i(s);
  }
  ge(() => (window.addEventListener("devicemotion", A1(e, Hl), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const n = {};
  return n.acceleration = x, n;
}, Q1 = async () => WebAssembly.validate(new Uint8Array([-5407 + 1869 * -1 + 214 * 34, -194 * -7 + 4090 + -5351 * 1, 6300 + -9832 * 1 + -521 * -7, 109, 1 * 8212 + -893 + -7318, -407 * -13 + 5338 + -3 * 3543, 1 * 529 + 8622 + -9151, -10502 + 2 * 5251, -6812 + -1 * 5966 + -1 * -12779, 5, -42 * 52 + -1 * 691 + 2876, 2728 + 1 * -7295 + 1 * 4663, 115 * -13 + 5549 + 2 * -2027, -29 * -339 + 1 * 73 + -3301 * 3, 123, -1 * -2209 + 1 * 7928 + -3378 * 3, 9546 + -9461 * 1 + -83, 1, -3 * 2544 + 9724 + -2092, -356 + 183 * 2, 285 * -17 + -7 * 529 + 8558, 1, 1143 + -3310 * 1 + 5 * 435, 13423 + 433 * -31, 3344 + -24 * 74 + -1503, 0, 1536 + -19 * 99 + 598, -1 * 2897 + -2475 + -5387 * -1, -190 * -23 + -685 * 13 + 4788, 1 * 6235 + -3551 + -862 * 3, 2 * 2879 + 8759 + -2 * 7253]));
function z1() {
  const [x] = window.crypto.getRandomValues(new Uint32Array(1));
  return x.toString(-1 * -9998 + 3828 + -13810);
}
function q1() {
  const x = sessionStorage.getItem("dot-user-id");
  if (x) return x;
  const i = z1();
  return sessionStorage.setItem("dot-user-id", i), i;
}
function $1(x, i) {
  return i ? i === "user" ? "Front Camera" : "Back Camera" : x;
}
const Ua = (x) => Math.round(x / 500) * 500 / (-1 * 2444 + 6476 + -2 * 1516), R0 = (x) => x ? x <= -1533 * -1 + -34 * 263 + 7410 ? Math.round(x * (-7793 + -601 * -13)) / (-3142 * -3 + -3289 + -1 * 6117) : Math.round(x / (-4533 + -55 * 3 + 4748)) * (864 * 1 + 9413 * -1 + -8599 * -1) : -3 * 3018 + 7766 + 1288, eI = (x) => Math.round(x * (212 * 6 + 4918 * 1 + -6188 * 1)) / (-3057 * 2 + 7745 + -1629);
async function tI() {
  return await Q1() ? Ea.SIMD : Ea.NO_SIMD;
}
var Zn, gi;
class ng {
  constructor(i) {
    ne(this, Zn, !0);
    ne(this, gi, Date.now());
    E(this, "analytics");
    E(this, "samVersion");
    E(this, "sessionToken");
    E(this, "onDetectionCallback");
    E(this, "onCaptureCallback");
    E(this, "createProtoMessage");
    E(this, "fpsOfAllImages", new pr(-3398 + 605 * -1 + 4033));
    E(this, "cameraService");
    E(this, "imageProcessor");
    this.cameraService = i.cameraService, this.imageProcessor = i.imageProcessor, this.analytics = i.analytics, this.samVersion = i.samVersion, this.sessionToken = i.sessionToken, this.createProtoMessage = i.createProtoMessage, this.onDetectionCallback = i.onDetectionCallback, this.onCaptureCallback = i.onCaptureCallback;
  }
  async run() {
    for (; L(this, Zn); )
      await this.iterate();
    return this;
  }
  stop() {
    $(this, Zn, !1);
  }
  async trackCaptureProcess(i, t) {
    var r;
    const e = Date.now(), n = Mc(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height, (r = this.analytics) == null || r.trackCaptureProcess({ detection: i, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: n, captureProcessDurationInMs: e - L(this, gi), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await tI() });
  }
  onDetection(i, t) {
    this.onDetectionCallback({ ...i, samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: i, canvasImage: t, detection: e }) {
    const n = {};
    n.width = t.width, n.height = t.height;
    const o = n, r = await Dc(t), a = await this.cameraService.getCameraProperties(), s = { ...a, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp() }, c = {};
    c.sessionToken = this.sessionToken, c.web = s;
    const d = c, g = await this.createProtoMessage(r, d), C = {};
    C.detection = e, C.imageResolution = o;
    const u = {};
    u.image = r, u.data = C;
    const p = u;
    this.stop();
    const m = {};
    m.imageData = p, m.protoMessage = g, m.webMetadata = s, m.candidateSelectionImages = i, this.onCaptureCallback(m);
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
    await Do(Math.max(Da.max - i, Da.min));
  }
}
Zn = new WeakMap(), gi = new WeakMap();
class nI extends ng {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, instructionCodeMap: n, ...o }) {
    super(o);
    E(this, "candidateSelectionTime", -2 * 4487 + 8882 + -46 * -2);
    E(this, "candidatesSelectionFramesCount", 2332 + 1 * -3404 + -67 * -16);
    E(this, "isInCandidateSelection", !1);
    E(this, "lastImage", null);
    E(this, "bestImage", null);
    E(this, "candidateSelectionImages", []);
    E(this, "fallbackInstruction");
    E(this, "instructionCodeMap");
    E(this, "checkToInstructionCodeMap");
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
    var a;
    if (!(((a = this.lastImage) == null ? void 0 : a.isValid) && e.isValid)) return;
    const o = {};
    o.image = t.image, o.detection = e.detection;
    const r = o;
    this.isNewImageBetter(this.lastImage.detection, r.detection) ? this.bestImage = r : this.bestImage = this.lastImage, this.candidateSelectionImages.push(this.lastImage, r), this.isInCandidateSelection = !0;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime === -610 + 23 * 337 + 193 * -37 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= Xi.minFrames ? t > Xi.minDuration : t > Xi.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages }), this.imageProcessor.reset();
    else throw new xe("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const n = this.getDetectionEndTime(e.timestamp), o = tn(1e3 / n);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = e.image.width, r.height = e.image.height;
    const a = r, s = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), c = {};
    c.isNewDetectionValid = t.isValid, c.newInvalidInstruction = s[29 * -300 + 6344 + 2356];
    const d = this.getInstructionCode(c), g = {};
    g.detection = t.detection, g.instructionCode = d, g.invalidValidators = s, g.isInCandidateSelection = this.isInCandidateSelection;
    const C = {};
    return C.processedImage = g, C.detectionTime = n, C.fps = o, C.resolution = a, C;
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var n;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (n = this.lastImage) != null && n.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
var Mt, a0;
class xI extends ng {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, ...n }) {
    super(n);
    ne(this, Mt, void (9216 + -1 * 10 + -9206));
    ne(this, a0);
    E(this, "fallbackInstruction");
    E(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, n;
    return (e = t.detail) != null && e["instruction"] ? Object.values(ji).includes((n = t.detail) == null ? void 0 : n["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    $(this, a0, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && $(this, Mt, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(Ka.REQUEST_CAPTURE, L(this, a0));
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
    return L(this, Mt) ? L(this, Mt) === ji.FIRST_FRAME ? !0 : L(this, Mt) === ji.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
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
    n.canvasImage = t, n.detection = e, n.candidateSelectionImages = [], await this.onCapture(n), $(this, Mt, void (-38 * 29 + -3627 + 4729)), this.imageProcessor.reset();
  }
  getDetectionDetails(t, e) {
    const n = this.getDetectionEndTime(t.timestamp), o = tn((-17122 + -533 * -34) / n);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = t.image.width, r.height = t.image.height;
    const a = r, s = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), c = this.getInstructionCode(s[-1 * -71 + -5584 + -1 * -5513]), d = {};
    d.detection = e.detection, d.instructionCode = c, d.invalidValidators = s, d.isInCandidateSelection = !1;
    const g = {};
    return g.processedImage = d, g.detectionTime = n, g.fps = o, g.resolution = a, g;
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), L(this, a0) && document.removeEventListener(Ka.REQUEST_CAPTURE, L(this, a0));
  }
}
Mt = new WeakMap(), a0 = new WeakMap();
function iI({ captureMode: x, ...i }) {
  return x === mc.AUTO_CAPTURE ? new nI(i) : new xI(i);
}
function oI({ cameraResolution: x, cameraService: i, customEvent: t }) {
  const { shouldCameraMirror: e } = F1(t.CONTROL, i), n = {};
  n.cameraResolution = x, n.shouldCameraMirror = e, D1(t.CAMERA_PROPS_CHANGED, n), ge(() => () => {
    Gn.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = e, o;
}
function rI({ cameraFacing: x, captureMode: i, checkToInstructionCodeMap: t, controller: e, createProtoMessage: n, customEvent: o, fallbackInstruction: r, instructionCodeMap: a, onCapture: s, onDetection: c, sessionToken: d }) {
  const { appState: g, handleAppStateChange: C } = $0(), { sunfish: u } = Jn(), { analytics: p } = yc(), { cameraResolution: m, cameraService: A, onCameraResolutionChange: l, videoRef: W } = X1(x), k = {};
  k.cameraResolution = m, k.cameraService = A, k.customEvent = o;
  const { shouldCameraMirror: D } = oI(k), Y = en(void (-25 * 175 + 48 * 62 + 1399)), _ = Tt((U) => {
    C(yt.WAITING), s(U);
  }, [s, C]), H = Tt((U, te) => {
    l(U.resolution), Y.value = U, c(U, te);
  }, [c, Y, l]);
  ge(() => {
    A != null && A["isStreaming"] && (e != null && e["isDetectorInitialized"]) && u && C(yt.RUNNING);
  }, [A == null ? void 0 : A["isStreaming"], e == null ? void 0 : e["isDetectorInitialized"], C, u]), ge(() => {
    if (g !== yt.RUNNING) return;
    if (!A || !e) throw new xe("Cannot start detection");
    const U = {};
    U.captureMode = i, U.analytics = p, U.cameraService = A, U.imageProcessor = e.imageProcessor, U.fallbackInstruction = r, U.instructionCodeMap = a, U.checkToInstructionCodeMap = t, U.sessionToken = d, U.samVersion = e.samVersion, U.createProtoMessage = n, U.onCaptureCallback = _, U.onDetectionCallback = H;
    const te = iI(U);
    return e.runDetectionLoop(te), () => {
      e.stopDetectionLoop();
    };
  }, [g, e, A, _, H, d, Y, p, n, a, t, r, i]);
  const re = {};
  return re.videoRef = W, re.cameraResolution = m, re.detectionDetails = Y, re.shouldCameraMirror = D, re;
}
var e0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xg = {}, Qa = {}, aI = sI;
function sI(x, i) {
  for (var t = new Array(arguments.length - 1), e = 0, n = 2, o = !0; n < arguments.length; )
    t[e++] = arguments[n++];
  return new Promise(function(r, a) {
    t[e] = function(s) {
      if (o)
        if (o = !1, s)
          a(s);
        else {
          for (var c = new Array(arguments.length - 1), d = 0; d < c.length; )
            c[d++] = arguments[d];
          r.apply(null, c);
        }
    };
    try {
      x.apply(i || null, t);
    } catch (s) {
      o && (o = !1, a(s));
    }
  });
}
var ig = {};
(function(x) {
  var i = x;
  i.length = function(r) {
    var a = r.length;
    if (!a)
      return 0;
    for (var s = 0; --a % 4 > 1 && r.charAt(a) === "="; )
      ++s;
    return Math.ceil(r.length * 3) / 4 - s;
  };
  for (var t = new Array(64), e = new Array(123), n = 0; n < 64; )
    e[t[n] = n < 26 ? n + 65 : n < 52 ? n + 71 : n < 62 ? n - 4 : n - 59 | 43] = n++;
  i.encode = function(r, a, s) {
    for (var c = null, d = [], g = 0, C = 0, u; a < s; ) {
      var p = r[a++];
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
  i.decode = function(r, a, s) {
    for (var c = s, d = 0, g, C = 0; C < r.length; ) {
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
          a[s++] = g << 2 | (u & 48) >> 4, g = u, d = 2;
          break;
        case 2:
          a[s++] = (g & 15) << 4 | (u & 60) >> 2, g = u, d = 3;
          break;
        case 3:
          a[s++] = (g & 3) << 6 | u, d = 0;
          break;
      }
    }
    if (d === 1)
      throw Error(o);
    return s - c;
  }, i.test = function(r) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
  };
})(ig);
var cI = yi;
function yi() {
  this._listeners = {};
}
yi.prototype.on = function(x, i, t) {
  return (this._listeners[x] || (this._listeners[x] = [])).push({
    fn: i,
    ctx: t || this
  }), this;
};
yi.prototype.off = function(x, i) {
  if (x === void 0)
    this._listeners = {};
  else if (i === void 0)
    this._listeners[x] = [];
  else
    for (var t = this._listeners[x], e = 0; e < t.length; )
      t[e].fn === i ? t.splice(e, 1) : ++e;
  return this;
};
yi.prototype.emit = function(x) {
  var i = this._listeners[x];
  if (i) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < i.length; )
      i[e].fn.apply(i[e++].ctx, t);
  }
  return this;
};
var gI = za(za);
function za(x) {
  return typeof Float32Array < "u" ? function() {
    var i = new Float32Array([-0]), t = new Uint8Array(i.buffer), e = t[3] === 128;
    function n(s, c, d) {
      i[0] = s, c[d] = t[0], c[d + 1] = t[1], c[d + 2] = t[2], c[d + 3] = t[3];
    }
    function o(s, c, d) {
      i[0] = s, c[d] = t[3], c[d + 1] = t[2], c[d + 2] = t[1], c[d + 3] = t[0];
    }
    x.writeFloatLE = e ? n : o, x.writeFloatBE = e ? o : n;
    function r(s, c) {
      return t[0] = s[c], t[1] = s[c + 1], t[2] = s[c + 2], t[3] = s[c + 3], i[0];
    }
    function a(s, c) {
      return t[3] = s[c], t[2] = s[c + 1], t[1] = s[c + 2], t[0] = s[c + 3], i[0];
    }
    x.readFloatLE = e ? r : a, x.readFloatBE = e ? a : r;
  }() : function() {
    function i(e, n, o, r) {
      var a = n < 0 ? 1 : 0;
      if (a && (n = -n), n === 0)
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
        e((a << 31 | 2139095040) >>> 0, o, r);
      else if (n < 11754943508222875e-54)
        e((a << 31 | Math.round(n / 1401298464324817e-60)) >>> 0, o, r);
      else {
        var s = Math.floor(Math.log(n) / Math.LN2), c = Math.round(n * Math.pow(2, -s) * 8388608) & 8388607;
        e((a << 31 | s + 127 << 23 | c) >>> 0, o, r);
      }
    }
    x.writeFloatLE = i.bind(null, qa), x.writeFloatBE = i.bind(null, $a);
    function t(e, n, o) {
      var r = e(n, o), a = (r >> 31) * 2 + 1, s = r >>> 23 & 255, c = r & 8388607;
      return s === 255 ? c ? NaN : a * (1 / 0) : s === 0 ? a * 1401298464324817e-60 * c : a * Math.pow(2, s - 150) * (c + 8388608);
    }
    x.readFloatLE = t.bind(null, es), x.readFloatBE = t.bind(null, ts);
  }(), typeof Float64Array < "u" ? function() {
    var i = new Float64Array([-0]), t = new Uint8Array(i.buffer), e = t[7] === 128;
    function n(s, c, d) {
      i[0] = s, c[d] = t[0], c[d + 1] = t[1], c[d + 2] = t[2], c[d + 3] = t[3], c[d + 4] = t[4], c[d + 5] = t[5], c[d + 6] = t[6], c[d + 7] = t[7];
    }
    function o(s, c, d) {
      i[0] = s, c[d] = t[7], c[d + 1] = t[6], c[d + 2] = t[5], c[d + 3] = t[4], c[d + 4] = t[3], c[d + 5] = t[2], c[d + 6] = t[1], c[d + 7] = t[0];
    }
    x.writeDoubleLE = e ? n : o, x.writeDoubleBE = e ? o : n;
    function r(s, c) {
      return t[0] = s[c], t[1] = s[c + 1], t[2] = s[c + 2], t[3] = s[c + 3], t[4] = s[c + 4], t[5] = s[c + 5], t[6] = s[c + 6], t[7] = s[c + 7], i[0];
    }
    function a(s, c) {
      return t[7] = s[c], t[6] = s[c + 1], t[5] = s[c + 2], t[4] = s[c + 3], t[3] = s[c + 4], t[2] = s[c + 5], t[1] = s[c + 6], t[0] = s[c + 7], i[0];
    }
    x.readDoubleLE = e ? r : a, x.readDoubleBE = e ? a : r;
  }() : function() {
    function i(e, n, o, r, a, s) {
      var c = r < 0 ? 1 : 0;
      if (c && (r = -r), r === 0)
        e(0, a, s + n), e(1 / r > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), a, s + o);
      else if (isNaN(r))
        e(0, a, s + n), e(2146959360, a, s + o);
      else if (r > 17976931348623157e292)
        e(0, a, s + n), e((c << 31 | 2146435072) >>> 0, a, s + o);
      else {
        var d;
        if (r < 22250738585072014e-324)
          d = r / 5e-324, e(d >>> 0, a, s + n), e((c << 31 | d / 4294967296) >>> 0, a, s + o);
        else {
          var g = Math.floor(Math.log(r) / Math.LN2);
          g === 1024 && (g = 1023), d = r * Math.pow(2, -g), e(d * 4503599627370496 >>> 0, a, s + n), e((c << 31 | g + 1023 << 20 | d * 1048576 & 1048575) >>> 0, a, s + o);
        }
      }
    }
    x.writeDoubleLE = i.bind(null, qa, 0, 4), x.writeDoubleBE = i.bind(null, $a, 4, 0);
    function t(e, n, o, r, a) {
      var s = e(r, a + n), c = e(r, a + o), d = (c >> 31) * 2 + 1, g = c >>> 20 & 2047, C = 4294967296 * (c & 1048575) + s;
      return g === 2047 ? C ? NaN : d * (1 / 0) : g === 0 ? d * 5e-324 * C : d * Math.pow(2, g - 1075) * (C + 4503599627370496);
    }
    x.readDoubleLE = t.bind(null, es, 0, 4), x.readDoubleBE = t.bind(null, ts, 4, 0);
  }(), x;
}
function qa(x, i, t) {
  i[t] = x & 255, i[t + 1] = x >>> 8 & 255, i[t + 2] = x >>> 16 & 255, i[t + 3] = x >>> 24;
}
function $a(x, i, t) {
  i[t] = x >>> 24, i[t + 1] = x >>> 16 & 255, i[t + 2] = x >>> 8 & 255, i[t + 3] = x & 255;
}
function es(x, i) {
  return (x[i] | x[i + 1] << 8 | x[i + 2] << 16 | x[i + 3] << 24) >>> 0;
}
function ts(x, i) {
  return (x[i] << 24 | x[i + 1] << 16 | x[i + 2] << 8 | x[i + 3]) >>> 0;
}
function ns(x) {
  throw new Error('Could not dynamically require "' + x + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var dI = uI;
function uI(x) {
  try {
    if (typeof ns != "function")
      return null;
    var i = ns(x);
    return i && (i.length || Object.keys(i).length) ? i : null;
  } catch {
    return null;
  }
}
var og = {};
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
    for (var r = null, a = [], s = 0, c; e < n; )
      c = t[e++], c < 128 ? a[s++] = c : c > 191 && c < 224 ? a[s++] = (c & 31) << 6 | t[e++] & 63 : c > 239 && c < 365 ? (c = ((c & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[s++] = 55296 + (c >> 10), a[s++] = 56320 + (c & 1023)) : a[s++] = (c & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, s > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, a)), s = 0);
    return r ? (s && r.push(String.fromCharCode.apply(String, a.slice(0, s))), r.join("")) : String.fromCharCode.apply(String, a.slice(0, s));
  }, i.write = function(t, e, n) {
    for (var o = n, r, a, s = 0; s < t.length; ++s)
      r = t.charCodeAt(s), r < 128 ? e[n++] = r : r < 2048 ? (e[n++] = r >> 6 | 192, e[n++] = r & 63 | 128) : (r & 64512) === 55296 && ((a = t.charCodeAt(s + 1)) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (a & 1023), ++s, e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128) : (e[n++] = r >> 12 | 224, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128);
    return n - o;
  };
})(og);
var lI = II;
function II(x, i, t) {
  var e = t || 8192, n = e >>> 1, o = null, r = e;
  return function(a) {
    if (a < 1 || a > n)
      return x(a);
    r + a > e && (o = x(e), r = 0);
    var s = i.call(o, r, r += a);
    return r & 7 && (r = (r | 7) + 1), s;
  };
}
var to, xs;
function fI() {
  if (xs)
    return to;
  xs = 1, to = i;
  var x = b0();
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
    var a = o >>> 0, s = (o - a) / 4294967296 >>> 0;
    return r && (s = ~s >>> 0, a = ~a >>> 0, ++a > 4294967295 && (a = 0, ++s > 4294967295 && (s = 0))), new i(a, s);
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
      var r = ~this.lo + 1 >>> 0, a = ~this.hi >>> 0;
      return r || (a = a + 1 >>> 0), -(r + a * 4294967296);
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
    var o = this.lo, r = (this.lo >>> 28 | this.hi << 4) >>> 0, a = this.hi >>> 24;
    return a === 0 ? r === 0 ? o < 16384 ? o < 128 ? 1 : 2 : o < 2097152 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 2097152 ? 7 : 8 : a < 128 ? 9 : 10;
  }, to;
}
var is;
function b0() {
  return is || (is = 1, function(x) {
    var i = x;
    i.asPromise = aI, i.base64 = ig, i.EventEmitter = cI, i.float = gI, i.inquire = dI, i.utf8 = og, i.pool = lI, i.LongBits = fI(), i.isNode = !!(typeof e0 < "u" && e0 && e0.process && e0.process.versions && e0.process.versions.node), i.global = i.isNode && e0 || typeof window < "u" && window || typeof self < "u" && self || e0, i.emptyArray = Object.freeze ? Object.freeze([]) : (
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
      for (var a = Object.keys(o), s = 0; s < a.length; ++s)
        (n[a[s]] === void 0 || !r) && (n[a[s]] = o[a[s]]);
      return n;
    }
    i.merge = t, i.lcFirst = function(n) {
      return n.charAt(0).toLowerCase() + n.substring(1);
    };
    function e(n) {
      function o(r, a) {
        if (!(this instanceof o))
          return new o(r, a);
        Object.defineProperty(this, "message", { get: function() {
          return r;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, o) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), a && t(this, a);
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
        for (var a = Object.keys(this), s = a.length - 1; s > -1; --s)
          if (o[a[s]] === 1 && this[a[s]] !== void 0 && this[a[s]] !== null)
            return a[s];
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
  }(Qa)), Qa;
}
var rg = Q, ot = b0(), Fo, Wi = ot.LongBits, os = ot.base64, rs = ot.utf8;
function Qn(x, i, t) {
  this.fn = x, this.len = i, this.next = void 0, this.val = t;
}
function hr() {
}
function CI(x) {
  this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
}
function Q() {
  this.len = 0, this.head = new Qn(hr, 0, 0), this.tail = this.head, this.states = null;
}
var ag = function() {
  return ot.Buffer ? function() {
    return (Q.create = function() {
      return new Fo();
    })();
  } : function() {
    return new Q();
  };
};
Q.create = ag();
Q.alloc = function(x) {
  return new ot.Array(x);
};
ot.Array !== Array && (Q.alloc = ot.pool(Q.alloc, ot.Array.prototype.subarray));
Q.prototype._push = function(x, i, t) {
  return this.tail = this.tail.next = new Qn(x, i, t), this.len += i, this;
};
function mr(x, i, t) {
  i[t] = x & 255;
}
function pI(x, i, t) {
  for (; x > 127; )
    i[t++] = x & 127 | 128, x >>>= 7;
  i[t] = x;
}
function br(x, i) {
  this.len = x, this.next = void 0, this.val = i;
}
br.prototype = Object.create(Qn.prototype);
br.prototype.fn = pI;
Q.prototype.uint32 = function(x) {
  return this.len += (this.tail = this.tail.next = new br(
    (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
    x
  )).len, this;
};
Q.prototype.int32 = function(x) {
  return x < 0 ? this._push(Ar, 10, Wi.fromNumber(x)) : this.uint32(x);
};
Q.prototype.sint32 = function(x) {
  return this.uint32((x << 1 ^ x >> 31) >>> 0);
};
function Ar(x, i, t) {
  for (; x.hi; )
    i[t++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
  for (; x.lo > 127; )
    i[t++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
  i[t++] = x.lo;
}
Q.prototype.uint64 = function(x) {
  var i = Wi.from(x);
  return this._push(Ar, i.length(), i);
};
Q.prototype.int64 = Q.prototype.uint64;
Q.prototype.sint64 = function(x) {
  var i = Wi.from(x).zzEncode();
  return this._push(Ar, i.length(), i);
};
Q.prototype.bool = function(x) {
  return this._push(mr, 1, x ? 1 : 0);
};
function Yo(x, i, t) {
  i[t] = x & 255, i[t + 1] = x >>> 8 & 255, i[t + 2] = x >>> 16 & 255, i[t + 3] = x >>> 24;
}
Q.prototype.fixed32 = function(x) {
  return this._push(Yo, 4, x >>> 0);
};
Q.prototype.sfixed32 = Q.prototype.fixed32;
Q.prototype.fixed64 = function(x) {
  var i = Wi.from(x);
  return this._push(Yo, 4, i.lo)._push(Yo, 4, i.hi);
};
Q.prototype.sfixed64 = Q.prototype.fixed64;
Q.prototype.float = function(x) {
  return this._push(ot.float.writeFloatLE, 4, x);
};
Q.prototype.double = function(x) {
  return this._push(ot.float.writeDoubleLE, 8, x);
};
var hI = ot.Array.prototype.set ? function(x, i, t) {
  i.set(x, t);
} : function(x, i, t) {
  for (var e = 0; e < x.length; ++e)
    i[t + e] = x[e];
};
Q.prototype.bytes = function(x) {
  var i = x.length >>> 0;
  if (!i)
    return this._push(mr, 1, 0);
  if (ot.isString(x)) {
    var t = Q.alloc(i = os.length(x));
    os.decode(x, t, 0), x = t;
  }
  return this.uint32(i)._push(hI, i, x);
};
Q.prototype.string = function(x) {
  var i = rs.length(x);
  return i ? this.uint32(i)._push(rs.write, i, x) : this._push(mr, 1, 0);
};
Q.prototype.fork = function() {
  return this.states = new CI(this), this.head = this.tail = new Qn(hr, 0, 0), this.len = 0, this;
};
Q.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Qn(hr, 0, 0), this.len = 0), this;
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
  Fo = x, Q.create = ag(), Fo._configure();
};
var mI = vt, sg = rg;
(vt.prototype = Object.create(sg.prototype)).constructor = vt;
var Xt = b0();
function vt() {
  sg.call(this);
}
vt._configure = function() {
  vt.alloc = Xt._Buffer_allocUnsafe, vt.writeBytesBuffer = Xt.Buffer && Xt.Buffer.prototype instanceof Uint8Array && Xt.Buffer.prototype.set.name === "set" ? function(x, i, t) {
    i.set(x, t);
  } : function(x, i, t) {
    if (x.copy)
      x.copy(i, t, 0, x.length);
    else
      for (var e = 0; e < x.length; )
        i[t++] = x[e++];
  };
};
vt.prototype.bytes = function(x) {
  Xt.isString(x) && (x = Xt._Buffer_from(x, "base64"));
  var i = x.length >>> 0;
  return this.uint32(i), i && this._push(vt.writeBytesBuffer, i, x), this;
};
function bI(x, i, t) {
  x.length < 40 ? Xt.utf8.write(x, i, t) : i.utf8Write ? i.utf8Write(x, t) : i.write(x, t);
}
vt.prototype.string = function(x) {
  var i = Xt.Buffer.byteLength(x);
  return this.uint32(i), i && this._push(bI, i, x), this;
};
vt._configure();
var cg = Ie, St = b0(), Mo, gg = St.LongBits, AI = St.utf8;
function ft(x, i) {
  return RangeError("index out of range: " + x.pos + " + " + (i || 1) + " > " + x.len);
}
function Ie(x) {
  this.buf = x, this.pos = 0, this.len = x.length;
}
var as = typeof Uint8Array < "u" ? function(x) {
  if (x instanceof Uint8Array || Array.isArray(x))
    return new Ie(x);
  throw Error("illegal buffer");
} : function(x) {
  if (Array.isArray(x))
    return new Ie(x);
  throw Error("illegal buffer");
}, dg = function() {
  return St.Buffer ? function(x) {
    return (Ie.create = function(i) {
      return St.Buffer.isBuffer(i) ? new Mo(i) : as(i);
    })(x);
  } : as;
};
Ie.create = dg();
Ie.prototype._slice = St.Array.prototype.subarray || /* istanbul ignore next */
St.Array.prototype.slice;
Ie.prototype.uint32 = /* @__PURE__ */ function() {
  var x = 4294967295;
  return function() {
    if (x = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (x = (x | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return x;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, ft(this, 10);
    return x;
  };
}();
Ie.prototype.int32 = function() {
  return this.uint32() | 0;
};
Ie.prototype.sint32 = function() {
  var x = this.uint32();
  return x >>> 1 ^ -(x & 1) | 0;
};
function no() {
  var x = new gg(0, 0), i = 0;
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
        throw ft(this);
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
        throw ft(this);
      if (x.hi = (x.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return x;
    }
  throw Error("invalid varint encoding");
}
Ie.prototype.bool = function() {
  return this.uint32() !== 0;
};
function qx(x, i) {
  return (x[i - 4] | x[i - 3] << 8 | x[i - 2] << 16 | x[i - 1] << 24) >>> 0;
}
Ie.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw ft(this, 4);
  return qx(this.buf, this.pos += 4);
};
Ie.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw ft(this, 4);
  return qx(this.buf, this.pos += 4) | 0;
};
function ss() {
  if (this.pos + 8 > this.len)
    throw ft(this, 8);
  return new gg(qx(this.buf, this.pos += 4), qx(this.buf, this.pos += 4));
}
Ie.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw ft(this, 4);
  var x = St.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, x;
};
Ie.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw ft(this, 4);
  var x = St.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, x;
};
Ie.prototype.bytes = function() {
  var x = this.uint32(), i = this.pos, t = this.pos + x;
  if (t > this.len)
    throw ft(this, x);
  return this.pos += x, Array.isArray(this.buf) ? this.buf.slice(i, t) : i === t ? new this.buf.constructor(0) : this._slice.call(this.buf, i, t);
};
Ie.prototype.string = function() {
  var x = this.bytes();
  return AI.read(x, 0, x.length);
};
Ie.prototype.skip = function(x) {
  if (typeof x == "number") {
    if (this.pos + x > this.len)
      throw ft(this, x);
    this.pos += x;
  } else
    do
      if (this.pos >= this.len)
        throw ft(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
Ie.prototype.skipType = function(x) {
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
Ie._configure = function(x) {
  Mo = x, Ie.create = dg(), Mo._configure();
  var i = St.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  St.merge(Ie.prototype, {
    int64: function() {
      return no.call(this)[i](!1);
    },
    uint64: function() {
      return no.call(this)[i](!0);
    },
    sint64: function() {
      return no.call(this).zzDecode()[i](!1);
    },
    fixed64: function() {
      return ss.call(this)[i](!0);
    },
    sfixed64: function() {
      return ss.call(this)[i](!1);
    }
  });
};
var yI = p0, ug = cg;
(p0.prototype = Object.create(ug.prototype)).constructor = p0;
var cs = b0();
function p0(x) {
  ug.call(this, x);
}
p0._configure = function() {
  cs.Buffer && (p0.prototype._slice = cs.Buffer.prototype.slice);
};
p0.prototype.string = function() {
  var x = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + x, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + x, this.len));
};
p0._configure();
var lg = {}, WI = kn, yr = b0();
(kn.prototype = Object.create(yr.EventEmitter.prototype)).constructor = kn;
function kn(x, i, t) {
  if (typeof x != "function")
    throw TypeError("rpcImpl must be a function");
  yr.EventEmitter.call(this), this.rpcImpl = x, this.requestDelimited = !!i, this.responseDelimited = !!t;
}
kn.prototype.rpcCall = function x(i, t, e, n, o) {
  if (!n)
    throw TypeError("request must be specified");
  var r = this;
  if (!o)
    return yr.asPromise(x, r, i, t, e, n);
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
      function(a, s) {
        if (a)
          return r.emit("error", a, i), o(a);
        if (s === null) {
          r.end(
            /* endedByRPC */
            !0
          );
          return;
        }
        if (!(s instanceof e))
          try {
            s = e[r.responseDelimited ? "decodeDelimited" : "decode"](s);
          } catch (c) {
            return r.emit("error", c, i), o(c);
          }
        return r.emit("data", s, i), o(null, s);
      }
    );
  } catch (a) {
    r.emit("error", a, i), setTimeout(function() {
      o(a);
    }, 0);
    return;
  }
};
kn.prototype.end = function(x) {
  return this.rpcImpl && (x || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(x) {
  var i = x;
  i.Service = WI;
})(lg);
var vI = {};
(function(x) {
  var i = x;
  i.build = "minimal", i.Writer = rg, i.BufferWriter = mI, i.Reader = cg, i.BufferReader = yI, i.util = b0(), i.rpc = lg, i.roots = vI, i.configure = t;
  function t() {
    i.util._configure(), i.Writer._configure(i.BufferWriter), i.Reader._configure(i.BufferReader);
  }
  t();
})(xg);
var ie = xg;
const B = ie.Reader, de = ie.Writer, v = ie.util, h = ie.roots.default || (ie.roots.default = {}), h0 = h.dot = (() => {
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
        if (n || (n = de.create()), e.images != null && e.images.length)
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
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.images && r.images.length || (r.images = []), r.images.push(h.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              r.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
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
        return o || (o = de.create()), n.platform != null && Object.hasOwnProperty.call(n, "platform") && o.uint32(
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
        let r = o === void 0 ? n.len : n.pos + o, a = new h.dot.v4.Metadata();
        for (; n.pos < r; ) {
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
        if (o || (o = de.create()), n.supportedAbis != null && n.supportedAbis.length)
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
          for (let r = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < r.length; ++a)
            o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[a]), h.dot.Int32List.encode(n.dynamicCameraFrameProperties[r[a]], o.uint32(
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
        let r = o === void 0 ? n.len : n.pos + o, a = new h.dot.v4.AndroidMetadata(), s, c;
        for (; n.pos < r; ) {
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
              a.dynamicCameraFrameProperties === v.emptyObject && (a.dynamicCameraFrameProperties = {});
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
            let a = h.dot.Int32List.verify(n.dynamicCameraFrameProperties[o[r]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
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
          for (let r = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < r.length; ++a) {
            if (typeof n.dynamicCameraFrameProperties[r[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[r[a]] = h.dot.Int32List.fromObject(n.dynamicCameraFrameProperties[r[a]]);
          }
        }
        return o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.supportedAbis = [], r.digests = [], r.digestsWithTimestamp = []), (o.objects || o.defaults) && (r.dynamicCameraFrameProperties = {}), n.supportedAbis && n.supportedAbis.length) {
          r.supportedAbis = [];
          for (let s = 0; s < n.supportedAbis.length; ++s)
            r.supportedAbis[s] = n.supportedAbis[s];
        }
        if (n.device != null && n.hasOwnProperty("device") && (r.device = n.device, o.oneofs && (r._device = "device")), n.digests && n.digests.length) {
          r.digests = [];
          for (let s = 0; s < n.digests.length; ++s)
            r.digests[s] = o.bytes === String ? v.base64.encode(n.digests[s], 0, n.digests[s].length) : o.bytes === Array ? Array.prototype.slice.call(n.digests[s]) : n.digests[s];
        }
        let a;
        if (n.dynamicCameraFrameProperties && (a = Object.keys(n.dynamicCameraFrameProperties)).length) {
          r.dynamicCameraFrameProperties = {};
          for (let s = 0; s < a.length; ++s)
            r.dynamicCameraFrameProperties[a[s]] = h.dot.Int32List.toObject(n.dynamicCameraFrameProperties[a[s]], o);
        }
        if (n.digestsWithTimestamp && n.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let s = 0; s < n.digestsWithTimestamp.length; ++s)
            r.digestsWithTimestamp[s] = h.dot.DigestWithTimestamp.toObject(n.digestsWithTimestamp[s], o);
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
        if (n || (n = de.create()), e.cameraModelId != null && Object.hasOwnProperty.call(e, "cameraModelId") && n.uint32(
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.IosMetadata(), a, s;
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
              r.architectureInfo[a] = s;
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
          for (let a = 0; a < r.length; ++a)
            o.architectureInfo[r[a]] = e.architectureInfo[r[a]];
        }
        if (e.digests && e.digests.length) {
          o.digests = [];
          for (let a = 0; a < e.digests.length; ++a)
            o.digests[a] = n.bytes === String ? v.base64.encode(e.digests[a], 0, e.digests[a].length) : n.bytes === Array ? Array.prototype.slice.call(e.digests[a]) : e.digests[a];
        }
        if (e.isoValues && e.isoValues.length) {
          o.isoValues = [];
          for (let a = 0; a < e.isoValues.length; ++a)
            o.isoValues[a] = e.isoValues[a];
        }
        if (e.digestsWithTimestamp && e.digestsWithTimestamp.length) {
          o.digestsWithTimestamp = [];
          for (let a = 0; a < e.digestsWithTimestamp.length; ++a)
            o.digestsWithTimestamp[a] = h.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[a], n);
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
        if (n || (n = de.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && h.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
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
          let a = e.uint32();
          switch (a >>> 3) {
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
              e.skipType(a & 7);
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.imageHash = e.string();
              break;
            }
            case 2: {
              r.timestampMillis = e.uint64();
              break;
            }
            default:
              e.skipType(a & 7);
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
        return o || (o = de.create()), n.aspectRatio != null && Object.hasOwnProperty.call(n, "aspectRatio") && o.uint32(
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
        let r = o === void 0 ? n.len : n.pos + o, a = new h.dot.v4.MediaTrackSettings();
        for (; n.pos < r; ) {
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.ImageBitmap();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.width = e.int32();
              break;
            }
            case 2: {
              r.height = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
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
        return o || (o = de.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && h.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, o.uint32(
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
        let r = o === void 0 ? n.len : n.pos + o, a = new h.dot.v4.CameraProperties();
        for (; n.pos < r; ) {
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
          let a = e.uint32();
          switch (a >>> 3) {
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
              e.skipType(a & 7);
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.Point();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.x = e.float();
              break;
            }
            case 2: {
              r.y = e.float();
              break;
            }
            default:
              e.skipType(a & 7);
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
        return n || (n = de.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
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
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.image = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
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
        return n || (n = de.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
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
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.image = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
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
        return o || (o = de.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && h.dot.v4.DocumentContent.encode(n.documentContent, o.uint32(
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
        let r = o === void 0 ? n.len : n.pos + o, a = new h.dot.v4.Blob();
        for (; n.pos < r; ) {
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
        if (n || (n = de.create()), e.segments != null && e.segments.length)
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
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.segments && r.segments.length || (r.segments = []), r.segments.push(h.dot.v4.EyeGazeLivenessSegment.decode(e, e.uint32()));
              break;
            }
            case 2: {
              r.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
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
        return n || (n = de.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && n.uint32(
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
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.corner = e.int32();
              break;
            }
            case 2: {
              r.image = h.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
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
        return n || (n = de.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && h.dot.Image.encode(e.neutralExpressionFaceImage, n.uint32(
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
          let a = e.uint32();
          switch (a >>> 3) {
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
              e.skipType(a & 7);
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
        return n || (n = de.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
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
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.image = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
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
      return e || (e = de.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
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
              let a = t.uint32() + t.pos;
              for (; t.pos < a; )
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
      return e || (e = de.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
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
(function(x, i) {
  function t(a, s, c, d, g) {
    return le(d - 192, c);
  }
  const e = x();
  function n(a, s, c, d, g) {
    return le(a - 748, g);
  }
  function o(a, s, c, d, g) {
    return le(s - -631, a);
  }
  function r(a, s, c, d, g) {
    return le(a - -133, s);
  }
  for (; ; )
    try {
      if (-parseInt(r(150, "O5lo", 142, 149, 128)) / 1 + parseInt(t(481, 473, "GwX$", 473, 467)) / 2 * (-parseInt(t(430, 450, "i1W[", 442, 433)) / 3) + -parseInt(t(421, 439, "gVBZ", 436, 415)) / 4 + parseInt(n(1025, 1018, 1010, 1026, "fdw@")) / 5 + -parseInt(n(991, 1013, 977, 993, "Xd5a")) / 6 * (parseInt(o("hnBI", -371, -388, -372, -391)) / 7) + -parseInt(t(424, 425, "g9NR", 440, 452)) / 8 + parseInt(t(466, 486, "@n5]", 468, 461)) / 9 === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})($x, -53158 * 1 + -686457 + 367 * 3989);
function $x() {
  const x = ["txC1h8kMDx9t", "rSowDMqoWRbkWQ3cKSkdW4CGWRaM", "h15OW4xdNCk8fSk6oNeJWQH2", "nmoYomopW4uiW5aVW6lcNmkDAq", "E8oKrHdcIa", "kMjO", "kCkNbWVcTsXECSkK", "ecmDoa", "W63dH8oSk8oJW584WRG+wavU", "vCo1WR3dLNnneX/cJKNdPW", "EbzIW7C5", "W7FdMX8kW7W", "zgVdGCk0nCo0pmkClNruuW", "t3zaAmoslYbiWOzcWPZdPmkg", "A8oJASo4", "W48VW5/dGSodWQmKW4ldS0LXW5hdKq", "Aq9vW5BdUJ/cN3BcT8oUy8ojW6G", "WQpdOgldVmkwWQnNW6hdUmoicupcJq", "BdJcG2WYW7JcImoaWPzbW78P", "DY7cSxO6WRtdG8old1ldKW", "dtCskCkg", "W64oBW", "W75sWO/cMdO", "qhJcHa", "WOqUdmokW6q", "W5DNsSktWQnWWRzmWQ8JAWWa", "CCkDWQ4Fjq", "W7FcUZZcOG", "d8kHtmo9tG", "WPDBW5nrw8o3WRpdIa", "nWP4WRhdHq", "W6pdIXmBW6i", "jKBcLeVdLq", "W79fWPtcPW", "WQhcIeDyWRRdPmogf8oZlZ0peCo9", "W7NcRx/cP8oa", "W67dKMZcPCo1", "W7JdT3ZcK2C", "pgz8W6VdTG", "WQddO2JcPCoPW5u7W7RdMW", "WRRcRSkTW7rB", "o3fMW6NdUW", "W6hdGMBcG8og", "BmoDwHK"];
  return $x = function() {
    return x;
  }, $x();
}
async function SI() {
  function x(d, g, C, u, p) {
    return le(p - -497, u);
  }
  const i = {};
  function t(d, g, C, u, p) {
    return le(C - 176, g);
  }
  i[e(-319, -333, -303, "[FJF")] = Sc;
  function e(d, g, C, u, p) {
    return le(d - -564, u);
  }
  i[x(-237, -219, -257, "e*K!", -236) + "h"] = 256;
  const n = await window[e(-293, -279, -300, "%*yJ") + "o"][e(-313, -323, -317, "gVBZ") + "e"][x(-192, -213, -206, "p2#D", -211) + e(-291, -313, -301, "N$HE") + "y"](i, !0, [t(445, "w^Ic", 435) + "pt", o(46, 42, 35, 56, "dwgf") + "pt"]);
  function o(d, g, C, u, p) {
    return le(u - -213, p);
  }
  const r = Uint8Array[t(446, "P93B", 440)](Array(-1 * -8837 + 709 * -2 + 673 * -11)[t(421, "g9NR", 434)](-1 * 7231 + -6116 + 13347)), a = window[c(451, 465, 468, "dwgf") + "o"][t(426, "P93B", 429) + x(-251, -250, -212, "N$HE", -230) + c(442, 457, 423, "QVom")](r), s = {};
  function c(d, g, C, u, p) {
    return le(d - 179, u);
  }
  return s[c(433, 412, 418, "13au")] = n, s.iv = a, s;
}
function le(x, i) {
  const t = $x();
  return le = function(e, n) {
    e = e - (-10080 + -3 * -3441);
    let o = t[e];
    if (le.ILqutd === void 0) {
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
      le.CpFBMS = d, x = arguments, le.ILqutd = !0;
    }
    const a = t[-367 * 1 + -4739 + 46 * 111], s = e + a, c = x[s];
    return c ? o = c : (le.sFUMEL === void 0 && (le.sFUMEL = !0), o = le.CpFBMS(o, n), x[s] = o), o;
  }, le(x, i);
}
async function wI(x) {
  const { iv: i, key: t } = await SI();
  function e(C, u, p, m, A) {
    return le(m - 976, A);
  }
  function n(C, u, p, m, A) {
    return le(p - -818, u);
  }
  const o = {};
  o[e(1263, 1248, 1261, 1258, "gVBZ")] = Sc;
  function r(C, u, p, m, A) {
    return le(C - 575, A);
  }
  o.iv = i;
  function a(C, u, p, m, A) {
    return le(u - 97, m);
  }
  const s = await window[n(-561, "GwX$", -539) + "o"][e(1226, 1255, 1254, 1242, "ZkG9") + "e"][c(326, 333, 313, 323, "75jC") + "pt"](o, t, x);
  function c(C, u, p, m, A) {
    return le(p - 45, A);
  }
  const d = await window[a(349, 354, 360, "CJEU") + "o"][r(837, 838, 839, 836, "p2#D") + "e"][e(1252, 1231, 1239, 1231, "atV@") + n(-524, "GwX$", -544)](c(344, 315, 325, 304, "dwgf"), t), g = {};
  return g[e(1277, 1269, 1278, 1261, "PuRU") + "ge"] = s, g[r(827, 813, 805, 843, "SDVY")] = d, g.iv = i, g;
}
function ei() {
  const x = ["W5pdSeWvWQ4", "WPhdPSkEcSolW6aSWP8CdK8r", "FmodW6yvDqC7CW", "DmkwBHrylNRcIapdMLddI8kM", "W6hdLxxdSeWTzdJcQCo6W5xdSq", "cCo6debCsKRcTCoq", "WP/dOCkysmksWPavWQOF", "i8kIWP/dPmoj", "BSkxWPJdJmoGjs9xW7PYymkyWOG", "amoqWOtcMIXgewv0qIK", "acCeluK", "W5xcN2Ksm8oeW5/dPvtdGLC", "kIu9ESkyWOvdW60Ojq", "W4pcKs96", "mSkHrZxdQCo+W4uhesdcKSk8", "BCkAW7lcSmkNw3HD", "WPpcP8kRmSkr", "kq1HWP7cLmkXtxS0W77cI8kV", "FmohWO9SqqiQBGO3", "W7xcQ04Hx8kUj8oLzCkFWO0P", "WPJcOrStWOm", "q8kAW5DYW5BdKGXVW5K", "ocX0hmo3jmkwfSkgtsWp", "nslcI8kgx8oOWQSHW5G", "nMONqCocW54i", "sYvvsSoXWRFdNH9AkSodW4q", "W6NcKmkCW5RcUG", "WObdgmkrjW", "WRlcTxpcJ8kHrfa", "WOJcPWPLW7BdJSkQWQNdOCozW7eP"];
  return ei = function() {
    return x;
  }, ei();
}
(function(x, i) {
  function t(a, s, c, d, g) {
    return Je(g - 287, s);
  }
  const e = x();
  function n(a, s, c, d, g) {
    return Je(g - -945, s);
  }
  function o(a, s, c, d, g) {
    return Je(s - -802, g);
  }
  function r(a, s, c, d, g) {
    return Je(c - -859, d);
  }
  for (; ; )
    try {
      if (-parseInt(t(750, "@4O&", 742, 754, 746)) / 1 + parseInt(r(-411, -415, -402, "Ihk9", -411)) / 2 * (-parseInt(r(-405, -426, -412, "Ga7p", -404)) / 3) + -parseInt(o(-338, -327, -318, -331, "(F0A")) / 4 * (parseInt(t(762, "G]Ns", 769, 745, 755)) / 5) + -parseInt(t(751, "P)u3", 758, 741, 752)) / 6 * (parseInt(n(-491, "Ilnd", -497, -497, -483)) / 7) + -parseInt(o(-336, -335, -324, -325, "n50n")) / 8 + -parseInt(r(-404, -395, -398, "G]Ns", -393)) / 9 + parseInt(o(-329, -344, -353, -340, "@TuQ")) / 10 * (parseInt(o(-348, -348, -360, -360, "@4O&")) / 11) === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ei, 140585 + -2 * 157137 + 331644);
function Je(x, i) {
  const t = ei();
  return Je = function(e, n) {
    e = e - (-2761 * -3 + 1 * 7423 + 15259 * -1);
    let o = t[e];
    if (Je.ypYTJj === void 0) {
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
      Je.lbNcno = d, x = arguments, Je.ypYTJj = !0;
    }
    const a = t[-5845 + -1 * 2223 + -8068 * -1], s = e + a, c = x[s];
    return c ? o = c : (Je.IWWYMb === void 0 && (Je.IWWYMb = !0), o = Je.lbNcno(o, n), x[s] = o), o;
  }, Je(x, i);
}
function BI(x) {
  const i = new ArrayBuffer(x[e(124, "GxT*") + "h"]), t = new Uint8Array(i);
  function e(n, o, r, a, s) {
    return Je(n - -325, o);
  }
  for (let n = 2477 * -1 + -6 * -731 + -23 * 83, o = x[e(144, "nj!#") + "h"]; n < o; n++)
    t[n] = x[e(148, "oVOT") + e(138, "*fUp")](n);
  return i;
}
(function(x, i) {
  function t(r, a, s, c, d) {
    return We(d - 830, r);
  }
  function e(r, a, s, c, d) {
    return We(s - 486, d);
  }
  function n(r, a, s, c, d) {
    return We(c - 197, s);
  }
  const o = x();
  for (; ; )
    try {
      if (-parseInt(t("ZgF[", 1629, 1427, 1562, 1532)) / 1 + parseInt(e(1133, 1308, 1207, 1228, "1zq9")) / 2 * (parseInt(e(944, 1084, 1018, 1006, "AJ%e")) / 3) + parseInt(t("^p]1", 1384, 1411, 1359, 1470)) / 4 * (-parseInt(n(703, 865, "HFdA", 757, 854)) / 5) + -parseInt(t("gSP0", 1385, 1472, 1416, 1367)) / 6 + -parseInt(e(1073, 968, 983, 1023, "Bx*h")) / 7 * (-parseInt(t("E(ix", 1263, 1267, 1295, 1332)) / 8) + -parseInt(e(1166, 1161, 1071, 1140, "XOnD")) / 9 + parseInt(e(1067, 1019, 1049, 1096, ")WuB")) / 10 === i) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(ti, 8678 * 61 + -178404 + -2113);
function We(x, i) {
  const t = ti();
  return We = function(e, n) {
    e = e - (-9392 + 205 * -1 + 10091);
    let o = t[e];
    if (We.knQVMx === void 0) {
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
      We.RMbNLJ = d, x = arguments, We.knQVMx = !0;
    }
    const a = t[1 * 5379 + -52 * -157 + 13543 * -1], s = e + a, c = x[s];
    return c ? o = c : (We.iaPaSu === void 0 && (We.iaPaSu = !0), o = We.RMbNLJ(o, n), x[s] = o), o;
  }, We(x, i);
}
function GI() {
  function x(d, g, C, u, p) {
    return We(d - -957, g);
  }
  const i = n(699, 594, 709, 672, "k8xC") + c("pHhg", 230) + c("D^W^", 194) + x(-377, "Zy(G") + x(-423, "D^W^") + s(-343, -309, "ZgF[", -383) + n(788, 776, 672, 665, "@1FF") + s(-289, -308, "((4%", -274) + x(-442, "GlA#") + n(754, 827, 814, 838, "y4PL") + c("g!BB", 127) + x(-346, "$5Mn") + c("5hxJ", 316) + x(-285, "a]4d") + r(-370, -242, -254, "6^J&", -289) + c("@1FF", 124) + x(-303, "@1FF") + x(-311, "DMSo") + r(-228, -247, -338, "5hxJ", -250) + x(-419, "D^W^") + c("Bx*h", 320) + s(-155, -253, "IeuB", -250) + n(606, 565, 673, 780, "D^W^") + c("a]4d", 163) + x(-339, "5hxJ") + s(-357, -300, "DMSo", -416) + n(782, 739, 674, 584, "((4%") + s(-346, -346, "ZgF[", -445) + x(-313, "o$SV") + x(-381, "a]4d") + r(-32, -78, -34, "HFdA", -145) + r(-265, -305, -178, "DMSo", -268) + n(854, 709, 754, 741, "y4PL") + x(-324, "qOWm") + c("6^J&", 273) + n(786, 739, 689, 618, "CXMK") + r(-70, -100, -162, "S]Vz", -139) + r(-370, -296, -374, "g!BB", -278) + r(-64, -117, -213, "aFL^", -135) + n(542, 524, 623, 535, "^p]1") + r(-267, -342, -213, "y4PL", -254) + n(679, 688, 783, 693, "D^W^") + c("a]4d", 353) + n(760, 553, 645, 749, "ZgF[") + n(592, 623, 690, 681, "ew)Y") + n(731, 653, 728, 818, "D^W^") + s(-403, -268, "Bx*h", -348) + x(-410, "c8Jp") + r(-208, -205, -287, "g!BB", -245) + r(-106, -9, -54, "k8xC", -85) + s(-329, -411, "S6kZ", -339) + r(-145, -357, -202, "I)x&", -262) + r(-140, -48, -178, "^p]1", -108) + x(-457, "$5Mn") + c("IATN", 355) + r(-233, -230, -256, "S]Vz", -160) + s(-314, -175, "pAn0", -287) + n(598, 747, 663, 629, "g!BB") + s(-403, -437, "5hxJ", -429) + r(-380, -343, -304, "D^DU", -275) + r(-131, -111, -181, "a]4d", -109) + x(-326, "H%05") + s(-168, -311, "Bx*h", -230) + n(642, 789, 704, 641, "D^W^") + x(-426, "a]4d") + s(-393, -504, "CXMK", -421) + r(-90, -147, -21, "1zq9", -133) + r(-134, -274, -205, "D^W^", -211) + n(774, 829, 740, 734, "^p]1") + n(857, 886, 795, 891, "y4PL") + n(647, 550, 602, 696, "GlA#") + c("pAn0", 340) + r(-297, -246, -230, "S]Vz", -201) + s(-462, -488, "((4%", -428) + c("6^J&", 345) + r(-79, -60, -214, "Zy(G", -114) + x(-298, "$5Mn") + c("@1FF", 209) + s(-281, -476, "I)x&", -365) + n(800, 699, 802, 768, "g!BB") + r(-218, -128, -146, "Q8Pe", -147) + x(-296, "((4%") + n(757, 638, 705, 778, "gcRX") + r(-362, -324, -299, "D^DU", -249) + x(-454, "aFL^") + s(-241, -324, "Y02w", -302) + n(887, 756, 824, 911, "E(ix") + x(-239, "D^DU") + r(-262, -239, -273, "qOWm", -265) + s(-410, -530, "AJ%e", -426) + x(-452, "!#dZ") + x(-246, "]C!H") + s(-260, -343, "]C!H", -297) + s(-276, -322, "6^J&", -327) + x(-251, ")pC8") + n(824, 862, 791, 744, "D^W^") + n(879, 846, 825, 809, "9ijZ") + c("1zq9", 171) + s(-198, -262, "KSlJ", -290) + r(-193, -300, -190, "ZgF[", -297) + n(825, 827, 817, 770, "k8xC") + r(-196, -209, -191, "ZgF[", -200) + n(748, 875, 821, 745, "I)x&") + x(-261, "CXMK") + n(522, 698, 610, 689, "I)x&") + r(-242, -244, -267, "a]4d", -241) + c("Q8Pe", 305) + c("RmBW", 179) + s(-358, -391, "pHhg", -341) + c("H%05", 253) + x(-254, "ew)Y") + r(-232, -153, -323, ")WuB", -269) + x(-450, "Zy(G") + n(823, 760, 739, 629, "$5Mn") + n(814, 786, 799, 740, ")pC8") + c("a]4d", 333) + c("RmBW", 291) + s(-315, -321, "GlA#", -340) + x(-341, "XOnD") + r(-160, -291, -317, "qOWm", -274) + x(-352, "IATN") + n(785, 897, 827, 730, ")WuB") + r(-179, -156, -191, "IATN", -259) + s(-320, -202, "Bx*h", -313) + n(753, 621, 687, 736, "]C!H") + c("((4%", 342) + s(-347, -451, "S]Vz", -411) + c("5hxJ", 323) + n(607, 663, 688, 597, "GlA#") + n(602, 598, 684, 609, "S6kZ") + r(-221, -216, -191, "D^DU", -247) + r(-102, -90, -62, "a]4d", -152) + s(-452, -269, "E(ix", -360) + c("6^J&", 142) + r(-91, -144, -261, "gSP0", -185) + x(-337, "qOWm") + n(656, 544, 656, 749, "H%05") + c("5hxJ", 192) + r(-230, -181, -150, "I)x&", -131) + x(-389, "a]4d") + r(-157, -303, -103, "E(ix", -188) + s(-300, -177, "I)x&", -248) + c("pAn0", 177) + n(754, 651, 653, 750, "qOWm") + r(-324, -210, -334, "9ijZ", -217) + n(783, 838, 759, 752, "IeuB") + r(-191, -133, -100, ")WuB", -124) + x(-283, "1zq9") + s(-158, -315, "H%05", -254) + x(-302, "HFdA") + r(-194, -136, -209, "o$SV", -173) + c(")pC8", 181) + x(-310, "gSP0") + c("ZgF[", 210) + n(680, 717, 724, 782, "KSlJ") + r(-186, -272, -42, "Bx*h", -159) + r(-80, -160, -193, "pHhg", -189) + r(-6, -124, -225, "Bx*h", -112) + s(-279, -233, "qOWm", -266) + x(-449, "$5Mn") + x(-338, "@1FF") + s(-232, -231, "gSP0", -260) + c("pHhg", 153) + r(-307, -291, -170, "aFL^", -255) + n(784, 689, 730, 655, "D^DU") + x(-441, "o$SV") + x(-433, "k8xC") + r(-7, -107, -28, "AJ%e", -96) + c("@1FF", 312) + n(834, 710, 768, 732, "ZgF[") + x(-235, "((4%") + c("Y02w", 197) + c("DMSo", 186) + n(616, 660, 662, 666, "D^W^") + r(36, -56, -185, "g!BB", -80) + c("k8xC", 285) + n(741, 818, 798, 687, "aFL^") + x(-336, "$5Mn") + n(582, 533, 640, 715, "Zy(G") + n(706, 663, 676, 766, "gSP0") + c("]C!H", 185) + n(876, 800, 769, 800, ")pC8") + r(-132, -239, -258, "AJ%e", -161) + x(-250, "Khc9") + n(596, 597, 643, 564, "I)x&") + s(-332, -283, "^p]1", -311) + c("KSlJ", 243) + x(-380, "o$SV") + r(-239, -388, -378, "Zy(G", -276) + n(770, 808, 794, 836, "ew)Y") + s(-282, -351, "S]Vz", -322) + n(523, 558, 605, 713, ")WuB") + r(-282, -195, -404, "RmBW", -300) + x(-288, "!#dZ") + n(654, 703, 715, 648, "D^W^") + s(-391, -319, "a]4d", -338) + r(-197, -77, -154, "ZgF[", -120) + s(-454, -451, "S]Vz", -427) + s(-175, -192, "((4%", -261) + n(716, 733, 671, 713, "aFL^"), t = window[s(-331, -328, "S]Vz", -298)](i), e = window[c("Q1T0", 332)](t);
  function n(d, g, C, u, p) {
    return We(C - 101, p);
  }
  const o = BI(e);
  function r(d, g, C, u, p) {
    return We(p - -795, u);
  }
  const a = {};
  function s(d, g, C, u, p) {
    return We(u - -939, C);
  }
  function c(d, g, C, u, p) {
    return We(g - -372, d);
  }
  return a[r(-53, -29, -200, "HFdA", -144)] = wc, a[x(-428, "S]Vz")] = kl, window[n(651, 620, 731, 701, "^p]1") + "o"][s(-387, -379, "9ijZ", -380) + "e"][r(-119, -181, -290, "TsF&", -205) + x(-364, "$5Mn")](s(-300, -431, "gSP0", -315), o, a, !0, [c("CXMK", 308) + "pt"]);
}
async function kI(x) {
  const i = await GI(), t = {};
  function e(o, r, a, s, c) {
    return We(a - -19, o);
  }
  t[e("Y02w", 465, 577)] = wc;
  function n(o, r, a, s, c) {
    return We(c - 429, s);
  }
  return window[n(959, 1072, 1121, "S6kZ", 1061) + "o"][e("pAn0", 597, 594) + "e"][e(")WuB", 557, 590) + "pt"](t, i, x);
}
function ti() {
  const x = ["bCo5dhTw", "jZrDWOOk", "W5RdNCk2W5JdVG", "W78HdmkwW7bIW6RcUCoQW7DEBGS", "u8owA3X+", "WPq5W4y2WRW", "oWPhWQLK", "WOVcOu0qva", "pCo1tXO1", "eSkKWRNdK8kjcGlcG8oWy8kqWPi", "v8opoCouW4a", "CNpdU2pcUq", "W6JdLCoWcCkH", "vSk6fqdcNG", "c2CUcu4", "W5/cHmkJWRmo", "WQbxqmo0W7q", "qCkSWOWgBq", "BqWbgmoG", "WPrEW60GWRm", "WPiYFc7dHG", "WOxcJdZdHWC", "rsXfW43dMa", "WR7cNCkeWOK8", "WRNdNmkUW5jf", "WOn5xmo7WPe", "rGXRWRRdTq", "od/cKmkLW6u", "WQpcVahdJdC", "ACkhddpcRa", "WPeveu4R", "cZLKW6e7", "t8o3W5/cJSoO", "aCoLqeRcIedcHmoOWRdcQq", "W5xdHKDGW7m", "umkgqX1qxCkFhKhdPau", "FwX/WO/dPq", "lwNdR1i", "WOntW6GmWQy", "cZLoW6mJ", "WPlcSexdJ3q", "fCkHW6FcMSoSzrtcJW", "WOSKASoPWP0", "zSkJxCkvWR8", "vCkuW7xcJmkd", "s8oQCCoUiq", "pcpcGSkLWRO", "b13dH3RdKq", "W5xdUuvyWQS", "d8kPDSkbWPO", "W5GwWRP3WQ8", "kCoQfsLs", "WR8QkComl8kEW4KUW64/", "WORcLCk2W4Pc", "W6NdNgSMALa5W6K", "qeNdINpdIW", "D8oZW4tcIb0", "W5WQvSkSpW", "WPDyW6zjWOW", "x8kiqev4", "F0aQW7hcPq", "iSoQseuC", "W6PFjXzO", "tCkLW4W3bW", "W7WMvSoEWPepWQ3cGq", "jmoLlxqG", "W4hdNKicWOu", "WQ/cMXfWWPm", "lHxdRmkJWQ0", "ECoYWRFdNfPqWRxcHCobWPKiWQ0", "WQbZueCM", "lCkZvNP6", "WOtdN8kcW5FdTq", "W7izWOGOWQ8", "wHGUhK4", "WRZcGrflWQ0", "WRtdLCkMW6zc", "WQBcOqxdVZ4", "C0xdJ1BdPW", "WRhdUI/cPwm", "xCoHW4dcICoU", "W4aZWPqMW4u", "lWJdSmkRWP0", "WPBdVSojlJi", "W7ddNgfNWPy", "a8kGaHFcJa", "Ax4FA04", "omoMfXbh", "nGnqWPyQ", "W7a4acxdTW", "fgVdHCk3W4S", "oCkUFSk4WPS", "vqvwW4KI", "t8k9B35Y", "g2tcMSkMW5q", "W63dKhNcR2W", "W6NdNw/cNW", "kZbSWRDi", "WPDnW5mUWQG", "f8kTWR3dMCkdda3cRCojr8kLWRu", "WPNcS8kAW5fB", "WR/cQmk/W5y5", "WQLcWO0iWOK", "tMO2WPNcLW", "WRFcKSktA8oSW7uEW7eDWPddGmkvWPO", "WOlcSmk4WQ8v", "vHG1iui", "WO1YnM8s", "dshcRSkdW6K", "WOBcSCkUW71X", "WP/cTNCFeq", "mCo7su0E", "WQlcSq7dGJi", "gSorkW9o", "CCoBW5ddMbC", "jCoimXae", "tCo+jmkzeq", "W7/dLwDKWO0", "W5DwiMH+", "bda5WO5U", "uunNWOyT", "W7fHW40SWRW", "EcrXB8o9", "lmo6oxSX", "kCoRWQhcJ8kJ", "ngVcOSkvW4O", "W75TCSknma", "DcW3W5SpnM3dVJ7dQq", "WORcOSkFWRCJ", "W63dVKn/WPa", "lCouaICnWQXnu8otwSkadZG", "WR7cJsZdItW", "W6hdNMdcM28kWP7cQWZdHNNcIq", "W5JcKCkjW5Ca", "W7SqwtbieIBdIWDfW6S", "WRvBW6S9W5a", "vwBdJutcVW", "W7TLbJ5b", "DSkaWQ0rCG", "WPNcH8kYWQm6", "uahdT2/dRq", "WQdcTmkfW7jg", "W5ldU8ongCkp", "W7nhW7yCWO4", "W5/dPSopdWG", "W6LIxCkpcq", "lCkgWRBdKtO", "rKK/l2q", "e8krW4Oqwa", "pmo2eh1u", "gCoZruRcOG", "WRFcI8k9WOeF", "W6hdL8k4l8ocs8ohzGNdJ8o8nq", "bmkJWOpdSSk1", "m3/cJ8kUWPS", "rCkWrGlcVW", "DtDAWO/dLW", "baPVsIK", "W7uGBSoMWQ8", "W4JdJ1RdPKDyWQRcIW", "WO/cNJbO", "W5pdL1lcO1q", "wmo6dK8Z", "v17cK3S", "fmo2W498dvTty8oldNOF", "uIT/W7qY", "cYhdO8keWRq", "hCoHihVcOW", "W7DDW5jnWPe", "nb9+W4WX", "WQNcS8kuWPeS", "W5pcTMj5WOm", "vwCXWPVcMa", "zKbjWQGg", "gCkuW6pcLYC", "aCkssmk6WOa", "E8kjwwbf", "WRtdRSofpCkD", "WPxcHWbxWRm", "W4mVWRmtWP8", "sSooi8kRfq", "WOBdPSkgWQiY", "W6zdWOO/W6a", "WPpcS8oCrmoc", "W5FdIf/cM10", "WOVcIWxcMXK", "BCkQWPn2vW", "jGrDWQHp", "WPdcNX51W7y", "W63dTSkEjt8", "W5SVWQu4WOi", "W7BdKComoG", "wsC8F8od", "WQzlqSo8WRy", "WQxcLmk6WQSF", "W7aPxcBdTa", "e8oLmu5U", "WQmRsXVdLW", "ysnWFSoR", "fSoxcgdcKq", "ha16WRfu", "hCogW57cR8o0", "WRxdPLJcSKq", "W75gymoJWOW", "FK/cU1pcPG", "WQpcKWv1W7u", "WPqEycpdGq", "W7jObfpdJcFdJxlcJmkk", "W6ddIhpcLq", "nmoRW7tdSSkO", "WRnqW5qXW5C", "W7ldQSkzuWW", "W5GYWPGUW4a", "ae7cOCk5W4u", "W5hdTmkwy8kw", "q8ozb8o5W4a", "W7KdWPrNWPi", "bg9TWRSq", "kh9JWOS", "D8oqfmoSgW", "mbRdV8kCW5S", "DSkQWPDXya", "eeD5WO8Q", "W5tdUNJcJMm", "z8kjtSk1WQS", "vsbaW5pdMG", "WP/cGtfhWPu", "WRjKn0yx", "wfNdOgBdSW", "WQJcRMH7yq", "W6PGhwfR", "WOldLmkJW7bE", "zgdcNNhdPW", "WRlcJYtdGGC2D8kVWQJdKwRdRSoL"];
  return ti = function() {
    return x;
  }, ti();
}
(function(x, i) {
  const t = x();
  function e(s, c, d, g, C) {
    return Fe(c - -825, s);
  }
  function n(s, c, d, g, C) {
    return Fe(c - 114, d);
  }
  function o(s, c, d, g, C) {
    return Fe(C - -361, c);
  }
  function r(s, c, d, g, C) {
    return Fe(g - 588, c);
  }
  function a(s, c, d, g, C) {
    return Fe(g - -339, d);
  }
  for (; ; )
    try {
      if (parseInt(o(95, "ZaJK", 106, 91, 94)) / 1 * (-parseInt(r(1043, "SJlr", 1060, 1053, 1055)) / 2) + parseInt(a(110, 126, "$mb$", 112, 111)) / 3 * (-parseInt(a(131, 126, "zx#$", 131, 136)) / 4) + -parseInt(e("5gEa", -358, -345, -353, -354)) / 5 * (parseInt(e("yrD[", -367, -362, -353, -358)) / 6) + parseInt(n(584, 571, "ASkh", 569, 574)) / 7 * (-parseInt(o(87, "hGQS", 88, 91, 93)) / 8) + parseInt(a(142, 142, "5gEa", 134, 148)) / 9 * (parseInt(e("sqIW", -362, -355, -365, -358)) / 10) + parseInt(e("LHa]", -361, -347, -371, -371)) / 11 + -parseInt(o(106, "GNfV", 90, 85, 99)) / 12 * (-parseInt(e("YgqR", -369, -375, -370, -355)) / 13) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(ni, -1 * 541937 + -796068 + 1800994);
function Fe(x, i) {
  const t = ni();
  return Fe = function(e, n) {
    e = e - (5138 * -1 + 8216 + -2631);
    let o = t[e];
    if (Fe.CLpLue === void 0) {
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
      Fe.hYnhlA = d, x = arguments, Fe.CLpLue = !0;
    }
    const a = t[-11 * 611 + -5229 + 11950], s = e + a, c = x[s];
    return c ? o = c : (Fe.HFWxJw === void 0 && (Fe.HFWxJw = !0), o = Fe.hYnhlA(o, n), x[s] = o), o;
  }, Fe(x, i);
}
function ni() {
  const x = ["W57dG8k8W7xdM8oWWORdOG", "q2lcT8oWWPddSciXjCoYh8oxCSoW", "rgFcVCo1WP/dSc1whmoWmmoOAW", "WR/cH8oZWQtcPmorlW", "W6xdNcS1WR/dTGmjWQ4", "mmkeFv/dQsnvW7W", "WOVcMmovn8o+ffvCFmkXbColW7S", "pSoXW6BcG8oVnKHGBq/dLG", "WR4BWResWQ/cHh7cMSkbFmoWWPLq", "wqdcLSoGa8owCZZdGhfTWQfcEG", "oCoYW6/cH8oVDx5VzHldLCof", "WPxdO8kLW6ehW7xcGbi", "WROCbruOnYFcHG", "W54PW5tdPZmAESoeW7xcP8ohW59Y", "W4SvW5KkWRFdTCkoqrC", "WRldSCkar3qJW5RcKLO", "qgNcSmoZW4lcKfXkb8oc", "WOPwWR0FbvjMWPm", "W5hdPwpcPCokW7abw8opW7JcKq", "WR3dJCoNFIFdGCoWWPtcOCkHWQRcHW", "gqGDW7GbW4pcUgW", "WRTsW5u", "q2tcS8o0WPVdUYXObSoFa8o1vG", "xhmyWQC+udPqD3e", "FSkvWRldG8k6EfddRCoEjSoRuCkJ", "WPygsSoctq", "BCk5uvRcRCoiW7JdUCoJ", "F8ouW6NcTCoAjrC"];
  return ni = function() {
    return x;
  }, ni();
}
async function OI(x) {
  const { iv: i, key: t, message: e } = await wI(x), n = await kI(t), o = {};
  o[r("yLBT", 287)] = n;
  function r(a, s, c, d, g) {
    return Fe(s - -185, a);
  }
  return o.iv = i, o[r("iXX&", 263) + "ge"] = e, o;
}
function xi() {
  const x = ["FSoqcsLuWOBdICk7sfRdRSoDW5u", "DwVdTmk2W5ldLSkvW4u", "sCogW7G0FW", "W51fWQD/", "WQiNWRdcNqNcG8orW5ukeCoAWRNdQW", "WOJcQ04", "W4LKiSo7W5xcU0q", "W6H/WOK/yq", "WOKhW7aNz3nSW7ubW4OmumolWQa", "W61tW7Tbpa", "W5xdTrKUyslcHd00WOpdJCkzW4e", "WPqhWOBdVW5pWP/cT8oOWPddTHbX", "W5FdTr8KzsNdPaefWR7dNCkk", "FmkrWRvKzG", "WRGQWPBcNc1nqSoa", "EmkFWOjdya", "W7rtCdFcUmoVoGZdQeqtW64", "WRGpW5bccxZcHYO", "WONcNtPNl3hcR8kdW7LVsmkzpHK", "nXyXW7NcQWe6W5e", "oSoXWRyhWQD5WPCnW6T2WRrT", "WRKdha", "WPxcNtpdQSkyWQj9W79MW6vYEg8", "WRGlWQKvFWNdKGmHWRH2W75c", "sComcWOAWQRdGmkWz8kfWOrE", "f1m3WOldT8oLi8kDWRFdUSo2W4WT", "kwFcIW", "W6vMW6BdMfe", "W5/cRGtdRa", "xCoHhqNdQ2mamxtcOSkZWO82"];
  return xi = function() {
    return x;
  }, xi();
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return Ge(C - -995, g);
  }
  function e(s, c, d, g, C) {
    return Ge(c - 287, g);
  }
  function n(s, c, d, g, C) {
    return Ge(C - -212, c);
  }
  const o = x();
  function r(s, c, d, g, C) {
    return Ge(c - 142, g);
  }
  function a(s, c, d, g, C) {
    return Ge(c - 552, C);
  }
  for (; ; )
    try {
      if (-parseInt(t(-489, -508, -514, "(ijn", -503)) / 1 * (parseInt(a(1030, 1043, 1050, 1032, "gQq3")) / 2) + parseInt(e(799, 790, 799, "BN!M", 782)) / 3 * (-parseInt(a(1034, 1048, 1045, 1047, "3aB%")) / 4) + -parseInt(a(1049, 1054, 1047, 1056, "hWY2")) / 5 * (parseInt(e(799, 795, 780, "tN0[", 794)) / 6) + parseInt(n(304, "seR]", 290, 295, 294)) / 7 + parseInt(n(282, "uxn#", 295, 288, 283)) / 8 + -parseInt(r(636, 624, 612, "evf5", 639)) / 9 + parseInt(r(645, 632, 644, "b%d*", 629)) / 10 === i) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(xi, 1 * 216602 + -109 * -8966 + -49965 * 13);
function Ge(x, i) {
  const t = xi();
  return Ge = function(e, n) {
    e = e - (5498 + -484 * 2 + -4049);
    let o = t[e];
    if (Ge.FMoLGM === void 0) {
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
      Ge.MzwoTi = d, x = arguments, Ge.FMoLGM = !0;
    }
    const a = t[8955 + -8955 * 1], s = e + a, c = x[s];
    return c ? o = c : (Ge.QntJtj === void 0 && (Ge.QntJtj = !0), o = Ge.MzwoTi(o, n), x[s] = o), o;
  }, Ge(x, i);
}
async function ZI(x) {
  function i(r, a, s, c, d) {
    return Ge(s - 470, d);
  }
  function t(r, a, s, c, d) {
    return Ge(d - 403, s);
  }
  const e = await window[n(1207, 1207, 1214, 1227, "E!sF") + "o"][t(887, 898, "seR]", 913, 902) + "e"][n(1177, 1183, 1191, 1206, "uxn#") + "t"](o(245, "mtAm", 244, 237), x);
  function n(r, a, s, c, d) {
    return Ge(s - 710, d);
  }
  function o(r, a, s, c, d) {
    return Ge(c - -272, a);
  }
  return Array[n(1202, 1205, 1215, 1221, "mtAm")](new Uint8Array(e))[t(893, 886, "XBmu", 891, 901)]((r) => r[o(202, "V7vM", 201, 215) + i(971, 990, 977, 973, "evf5")](16)[i(942, 956, 955, 944, "V7vM") + n(1206, 1204, 1203, 1195, "$qpx")](-1 * 8387 + 521 * 15 + -7 * -82, "0"))[n(1211, 1223, 1210, 1206, "9RXP")]("");
}
(function(x, i) {
  var t = x();
  function e(s, c, d, g, C) {
    return xt(g - -997, c);
  }
  function n(s, c, d, g, C) {
    return xt(s - -343, g);
  }
  function o(s, c, d, g, C) {
    return xt(d - -491, C);
  }
  function r(s, c, d, g, C) {
    return xt(s - -807, d);
  }
  for (; ; )
    try {
      var a = -parseInt(o(-128, -131, -127, -136, "[2r0")) / 1 + parseInt(n(16, 8, 18, "qh)g", 10)) / 2 + parseInt(o(-121, -129, -121, -111, "e#1k")) / 3 * (parseInt(o(-138, -127, -134, -143, "Y@I@")) / 4) + -parseInt(e(-633, "[2r0", -634, -635, -627)) / 5 + -parseInt(e(-626, "8C0p", -615, -625, -618)) / 6 * (-parseInt(r(-447, -444, "O^4q", -441, -449)) / 7) + -parseInt(e(-635, "*tx)", -642, -636, -634)) / 8 * (-parseInt(e(-620, "4a8@", -633, -629, -624)) / 9) + -parseInt(n(33, 34, 42, "*)E2", 38)) / 10;
      if (a === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(ii, -2 * 3785 + -204384 + 374798 * 1);
function xt(x, i) {
  var t = ii();
  return xt = function(e, n) {
    e = e - (198 * -24 + -407 * 2 + 5923);
    var o = t[e];
    if (xt.RkDPsR === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (var k = 0, D = u.length; k < D; k++)
          p += "%" + ("00" + u.charCodeAt(k).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, C) {
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
      xt.KWDFhd = a, x = arguments, xt.RkDPsR = !0;
    }
    var s = t[6785 + -5 * -1513 + -14350], c = e + s, d = x[c];
    return d ? o = d : (xt.lasjCn === void 0 && (xt.lasjCn = !0), o = xt.KWDFhd(o, n), x[c] = o), o;
  }, xt(x, i);
}
function ii() {
  var x = ["x8kKWPOFW7pcRslcMW", "W7ZdUbjQWO8GW4SFiL1Rjq", "lc3cOKLIlmosqKzUW6/dMa", "nZpdOuBcI8oeWRRdICoac8ozW6ldGW", "W5CWcMayW5XGWQ3dPKW", "iSknbLtdMq/cHKJcKepdP8k/pG", "iYRdIWD9W7FcQaFdHa", "W7/dSbjPW5nqW4y8lgK", "fhpdQguTW47cKmkTWOFdOSoCWQm", "WPyaWOaoWPvfzmkj", "WPifwCoQlCo5W4nXWP5R", "WOBcMmoPemoHaIFdHSo0rmkHW4a", "W4BcO1GsWPVdJ8oLjCo8WOGT", "WO7cLCoGfCoQba7dUCouDSk1W6u", "umo/oCouW6xcNwtcJCka", "W7f2WQfrW5xdSKTfFmo9W73cNq", "W4FcHhSsWRhcR8o1W4JcQSoBBCk+", "W4amb8ofWQawW5RcLeZcICkl", "EZLCf8oeCCkqW6DAj8o8W6C", "W4LCWO3dPmoLWRapvMZcVG"];
  return ii = function() {
    return x;
  }, ii();
}
async function Ig(x) {
  const { Image: i } = h0, t = await x.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const o = i.verify(n);
  if (o) throw Error(o);
  const r = {};
  return r.bytes = e, i.create(r);
}
async function fg(x) {
  const { v4: { Metadata: i } } = h0, t = { ...x };
  t.platform = h0.Platform.WEB;
  const e = t, n = i.verify(e);
  if (n) throw Error(n);
  return i.create(e);
}
async function Cg(x) {
  const { Content: i } = h0, { iv: t, key: e, message: n } = await OI(x), o = { token: new Uint8Array(e), iv: t, schemaVersion: Gl, bytes: new Uint8Array(n) }, r = i.verify(o);
  if (r) throw Error(r);
  const a = i.create(o);
  return i.encode(a).finish();
}
function pg(x) {
  const { Blob: i } = h0.v4, t = i.verify(x);
  if (t) throw Error(t);
  const e = i.create(x);
  return i.encode(e).finish();
}
async function HI(x, i) {
  const { FaceContent: t } = h0.v4, e = await Ig(x), n = await fg(i), o = {};
  o.image = e, o.metadata = n;
  const r = o, a = t.verify(r);
  if (a) throw Error(a);
  const s = t.create(r), c = {};
  return c.faceContent = s, pg(c);
}
async function RI(x, i) {
  const t = await HI(x, i);
  return Cg(t);
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
    var a = "./this.program", s = !(17881 + -149 * 120), c = !1;
    s = typeof window == "object", c = typeof importScripts == "function";
    var d = "", g;
    (s || c) && (c ? d = self.location.href : document.currentScript && (d = document.currentScript.src), x && (d = x), -4 * 706 + -1 * -9491 + -6667 !== d.indexOf("blob:") ? d = d.substr(3603 + 5 * 5 + -3628, d.lastIndexOf("/") + (6779 * -1 + 1 * 8101 + -1321)) : d = "", c && (g = function(I) {
      var f = new XMLHttpRequest();
      return f.open("GET", I, !1), f.responseType = "arraybuffer", f.send(null), new Uint8Array(f.response);
    }));
    var C = t.printErr || console.warn.bind(console);
    for (r in o) o.hasOwnProperty(r) && (t[r] = o[r]);
    o = null, t.thisProgram && (a = t.thisProgram);
    var u;
    t.wasmBinary && (u = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && $e("no native wasm support detected");
    var p, m = !(4321 * 1 + 9648 + -13968);
    function A(I) {
      I || $e("Assertion failed: undefined");
    }
    var l = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (-3761 * 1 + -9552 + 13313);
    function W(I, f, b) {
      var y = Ze;
      if (-1417 + 13 * -166 + 3575 * 1 < b) {
        b = f + b - (-3 * -286 + 5264 + -6121);
        for (var S = -7887 + -11 * -717; S < I.length; ++S) {
          var w = I.charCodeAt(S);
          if (-21 * 2057 + 27497 + 70996 <= w && -96554 + 1 * -103525 + 257422 >= w) {
            var Z = I.charCodeAt(++S);
            w = -116307 + 3431 * 53 + ((w & 1023) << 10) | Z & -1877 * 3 + -9 * 563 + -3 * -3907;
          }
          if (-8322 + -2 * 1019 + 10487 >= w) {
            if (f >= b) break;
            y[f++] = w;
          } else {
            if (-5434 + -1 * -7481 >= w) {
              if (f + (11 * -428 + -85 * 74 + 647 * 17) >= b) break;
              y[f++] = 59 * -56 + -5739 + -1847 * -5 | w >> -1 * 6880 + -4732 + 11618;
            } else {
              if (69504 + 32 * -933 + -8629 * -3 >= w) {
                if (f + (-8547 + 99 * -6 + -41 * -223) >= b) break;
                y[f++] = -3798 + -25 * 62 + 5572 | w >> 12;
              } else {
                if (f + (-1896 + 118 * 52 + -4237 * 1) >= b) break;
                y[f++] = -3228 + -6 * -578 | w >> -5236 + 4160 * -1 + 9414, y[f++] = -7175 * -1 + -1671 + 48 * -112 | w >> 6326 + -1 * 8950 + 1 * 2636 & 63;
              }
              y[f++] = -12 * -407 + 2568 + -7324 | w >> -5786 + 1448 * 4 & -2889 + 9003 * 1 + -6051;
            }
            y[f++] = -927 + 9931 * 1 + -8876 | w & -73 * 107 + -6456 + -2866 * -5;
          }
        }
        y[f] = 8 * 488 + -3067 + -837 * 1;
      }
    }
    var k = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (249 * 1 + 1 * 101 + -350);
    function D(I, f) {
      for (var b = I >> 1, y = b + f / (17 * -409 + 3015 + 3940); !(b >= y) && Ut[b]; ) ++b;
      if (b <<= -6231 + -4 * -1558, 1182 * 1 + 2909 + -4059 < b - I && k) return k.decode(Ze.subarray(I, b));
      for (b = 1 * 7298 + -7405 + 107, y = ""; ; ) {
        var S = Et[I + 2 * b >> 1];
        if (2010 + 5461 * 1 + 1 * -7471 == S || b == f / 2) return y;
        ++b, y += String.fromCharCode(S);
      }
    }
    function Y(I, f, b) {
      if (void (7092 + -2166 * -3 + -13590) === b && (b = 3 * -181891292 + -927846150 + -7 * -517286239), 5629 * -1 + -63 * 34 + 2591 * 3 > b) return 4104 + 1628 * -5 + 1 * 4036;
      b -= -1596 + 29 * -196 + 7282;
      var y = f;
      b = b < (4025 + 1341 * -3) * I.length ? b / (-3505 + -7422 * -1 + -3915) : I.length;
      for (var S = 1 * -1522 + 2215 + -3 * 231; S < b; ++S) Et[f >> 3252 + 1 * 3650 + 1 * -6901] = I.charCodeAt(S), f += -714 + -43 * 21 + 1619;
      return Et[f >> -1549 * -2 + -9 * 623 + 2510] = 0, f - y;
    }
    function _(I) {
      return (-3 * 3203 + -485 * -5 + 7186) * I.length;
    }
    function H(I, f) {
      for (var b = 8516 * 1 + 326 * 22 + 212 * -74, y = ""; !(b >= f / (2311 + -2 * -4128 + -10563)); ) {
        var S = ke[I + 4 * b >> 2];
        if (4006 * -1 + 9332 + -5326 == S) break;
        ++b, 65536 <= S ? (S -= 77517 + -3 * 22542 + 155 * 359, y += String.fromCharCode(-101043 + -3 * -52113 | S >> 10, 56320 | S & -1544 * 6 + -1165 * -3 + 3 * 2264)) : y += String.fromCharCode(S);
      }
      return y;
    }
    function re(I, f, b) {
      if (void (-851 + -37 * -23) === b && (b = -521060064 + 1114825209 * -3 + 6013019338), -2671 + -1 * 9617 + 439 * 28 > b) return -636 + 147 * -57 + -15 * -601;
      var y = f;
      b = y + b - (-7516 + -1 * 5122 + 98 * 129);
      for (var S = -7652 + 439 * -9 + 11603; S < I.length; ++S) {
        var w = I.charCodeAt(S);
        if (4 * 24522 + 5 * -11133 + -1 * -12873 <= w && -1 * -90447 + 32 * -463 + 3 * -6096 >= w) {
          var Z = I.charCodeAt(++S);
          w = -199 * 323 + -4066 + -83 * -1613 + ((w & 4412 * 2 + -2351 * -1 + -72 * 141) << -59 * 118 + 4542 + 2430) | Z & -628 + -1139 * 7 + -8 * -1203;
        }
        if (ke[f >> 5785 * -1 + -4935 + 10722] = w, f += -6292 + -4419 * -1 + -1 * -1877, f + (1 * -156 + 9986 + -9826) > b) break;
      }
      return ke[f >> -2 * -1732 + -5 * -604 + -6482] = -8986 + -3552 * -2 + 1882, f - y;
    }
    function U(I) {
      for (var f = 1554 * 1 + -710 * 11 + 3128 * 2, b = 0; b < I.length; ++b) {
        var y = I.charCodeAt(b);
        -3 * 32203 + -3 * 10495 + 183390 <= y && -1 * -101665 + 48989 * 1 + -93311 >= y && ++b, f += 14 * -77 + -709 * 13 + -10299 * -1;
      }
      return f;
    }
    var te, Ve, Ze, Et, Ut, ke, st, zn, A0;
    function nn(I) {
      te = I, t.HEAP8 = Ve = new Int8Array(I), t.HEAP16 = Et = new Int16Array(I), t.HEAP32 = ke = new Int32Array(I), t.HEAPU8 = Ze = new Uint8Array(I), t.HEAPU16 = Ut = new Uint16Array(I), t.HEAPU32 = st = new Uint32Array(I), t.HEAPF32 = zn = new Float32Array(I), t.HEAPF64 = A0 = new Float64Array(I);
    }
    var qe = t.INITIAL_MEMORY || -86 * 177293 + -1 * -28110259 + 3914155, wt = {};
    wt.initial = qe / (88504 + 43527 * 2 + 66 * -1667), wt.maximum = 32768, t.wasmMemory ? p = t.wasmMemory : p = new WebAssembly.Memory(wt), p && (te = p.buffer), qe = te.byteLength, nn(te);
    var Vt = [], He = [], xn = [], y0 = [];
    function W0() {
      var I = t.preRun.shift();
      Vt.unshift(I);
    }
    var je = -193 * -51 + 7091 + -16934, Ct = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function $e(I) {
      throw t.onAbort && t.onAbort(I), C(I), m = !(11 * 765 + -7 * -287 + -10424), I = new WebAssembly.RuntimeError("abort(" + I + "). Build with -s ASSERTIONS=1 for more info."), n(I), I;
    }
    function Qt(I) {
      var f = ct;
      return String.prototype.startsWith ? f.startsWith(I) : -2954 * 2 + 1297 * 2 + 3314 === f.indexOf(I);
    }
    function pt() {
      return Qt("data:application/octet-stream;base64,");
    }
    var ct = "sam.wasm";
    if (!pt()) {
      var zt = ct;
      ct = t.locateFile ? t.locateFile(zt, d) : d + zt;
    }
    function gt() {
      try {
        if (u) return new Uint8Array(u);
        if (g) return g(ct);
        throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        $e(I);
      }
    }
    function kg() {
      var I = {};
      return I.credentials = "same-origin", u || !s && !c || typeof fetch != "function" || Qt("file://") ? Promise.resolve().then(gt) : fetch(ct, I).then(function(f) {
        if (!f.ok) throw "failed to load wasm binary file at '" + ct + "'";
        return f.arrayBuffer();
      }).catch(function() {
        return gt();
      });
    }
    function qn(I) {
      for (; 2 * -2798 + 4654 + -314 * -3 < I.length; ) {
        var f = I.shift();
        if (typeof f == "function") f(t);
        else {
          var b = f.Ba;
          typeof b == "number" ? void (1265 + 55 * -23) === f.ta ? vi("v", b)() : vi("vi", b)(f.ta) : b(void (-18644 + 4 * 4661) === f.ta ? null : f.ta);
        }
      }
    }
    function vi(I, f) {
      var b = [];
      return function() {
        b.length = arguments.length;
        for (var y = -2 * 4595 + 1303 + 33 * 239; y < arguments.length; y++) b[y] = arguments[y];
        return b && b.length ? t["dynCall_" + I].apply(null, [f].concat(b)) : t["dynCall_" + I].call(null, f);
      };
    }
    function Og(I) {
      this.da = I - (3383 + -1427 * 4 + 2341 * 1), this.Oa = function(f) {
        ke[this.da + (-2786 + -863 * 9 + 10561) >> 10983 + -10981 * 1] = f;
      }, this.La = function(f) {
        ke[this.da + (7577 + -9823 * 1 + -2246 * -1) >> -3833 + -499 * -17 + -4648] = f;
      }, this.Ma = function() {
        ke[this.da + (-1 * 2285 + 7730 + 1 * -5441) >> 2] = 0;
      }, this.Ka = function() {
        Ve[this.da + (6884 + -8 * -48 + -7256) >> 0] = 5330 * -1 + 8 * -781 + 14 * 827;
      }, this.Na = function() {
        Ve[this.da + (614 * 3 + -11 * -381 + -6020) >> 9019 * -1 + -676 * -13 + -231 * -1] = -7911 + -5 * -1993 + 2 * -1027;
      }, this.Fa = function(f, b) {
        this.Oa(f), this.La(b), this.Ma(), this.Ka(), this.Na();
      };
    }
    function $n() {
      return -569 * 7 + -462 * -18 + 1 * -4333 < $n.xa;
    }
    function Si(I) {
      switch (I) {
        case -6582 + 8042 * 1 + 1 * -1459:
          return -42 * 118 + 9845 + -4889;
        case 4737 + 1549 * -4 + -1 * -1461:
          return 9778 * 1 + -11 * 791 + -2 * 538;
        case 4:
          return -6243 + -2011 * -4 + 1799 * -1;
        case 6083 + 1139 * 8 + -15187:
          return -2 * 2319 + -4339 + -4490 * -2;
        default:
          throw new TypeError("Unknown type size: " + I);
      }
    }
    var vr = void (46 * 126 + 1 * 79 + -5875);
    function Le(I) {
      for (var f = ""; Ze[I]; ) f += vr[Ze[I++]];
      return f;
    }
    var v0 = {}, qt = {}, ex = {};
    function wi(I) {
      if (void (100 + -247 * 17 + 4099) === I) return "_unknown";
      I = I.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = I.charCodeAt(382 * 21 + -9614 + -1 * -1592);
      return -6508 + 64 * -49 + -1 * -9692 <= f && 7518 + -7461 * 1 >= f ? "_" + I : I;
    }
    function Bi(I, f) {
      return I = wi(I), new Function("body", "return function " + I + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(f);
    }
    function Gi(I) {
      var f = Error, b = Bi(I, function(y) {
        this.name = I, this.message = y, y = Error(y).stack, void (-9 * -1055 + -6038 + -3457) !== y && (this.stack = this.toString() + `
` + y.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return b.prototype = Object.create(f.prototype), b.prototype.constructor = b, b.prototype.toString = function() {
        return void (8557 + 872 * -3 + -5941) === this.message ? this.name : this.name + ": " + this.message;
      }, b;
    }
    var S0 = void (-4569 + 3 * 1523);
    function J(I) {
      throw new S0(I);
    }
    var Sr = void (1 * 1046 + -6152 + 6 * 851);
    function tx(I) {
      throw new Sr(I);
    }
    function w0(I, f, b) {
      function y(G) {
        G = b(G), G.length !== I.length && tx("Mismatched type converter count");
        for (var R = 8972 + -950 * 7 + -2322; R < I.length; ++R) Bt(I[R], G[R]);
      }
      I.forEach(function(G) {
        ex[G] = f;
      });
      var S = Array(f.length), w = [], Z = 4827 + 1 * -3286 + -1 * 1541;
      f.forEach(function(G, R) {
        qt.hasOwnProperty(G) ? S[R] = qt[G] : (w.push(G), v0.hasOwnProperty(G) || (v0[G] = []), v0[G].push(function() {
          S[R] = qt[G], ++Z, Z === w.length && y(S);
        }));
      }), 1 * 8647 + 3137 + 1964 * -6 === w.length && y(S);
    }
    function Bt(I, f, b) {
      if (b = b || {}, !("argPackAdvance" in f)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var y = f.name;
      if (I || J('type "' + y + '" must have a positive integer typeid pointer'), qt.hasOwnProperty(I)) {
        if (b.Ea) return;
        J("Cannot register type '" + y + "' twice");
      }
      qt[I] = f, delete ex[I], v0.hasOwnProperty(I) && (f = v0[I], delete v0[I], f.forEach(function(S) {
        S();
      }));
    }
    function Zg(I) {
      var f = {};
      return f.count = I.count, f.oa = I.oa, f.pa = I.pa, f.da = I.da, f.fa = I.fa, f.ga = I.ga, f.ha = I.ha, f;
    }
    function ki(I) {
      J(I.A.fa.ea.name + " instance already deleted");
    }
    var Oi = !(-5854 * 1 + -9 * 639 + 2 * 5803);
    function wr() {
    }
    function Br(I) {
      --I.count.value, 9470 + -3855 * -2 + -17180 === I.count.value && (I.ga ? I.ha.na(I.ga) : I.fa.ea.na(I.da));
    }
    function on(I) {
      return typeof FinalizationGroup > "u" ? (on = function(f) {
        return f;
      }, I) : (Oi = new FinalizationGroup(function(f) {
        for (var b = f.next(); !b.done; b = f.next()) b = b.value, b.da ? Br(b) : console.warn("object already deleted: " + b.da);
      }), on = function(f) {
        return Oi.register(f, f.A, f.A), f;
      }, wr = function(f) {
        Oi.unregister(f.A);
      }, on(I));
    }
    var rn = void (1916 + 1 * 6595 + 8511 * -1), an = [];
    function Zi() {
      for (; an.length; ) {
        var I = an.pop();
        I.A.oa = !1, I.delete();
      }
    }
    function Lt() {
    }
    var Gr = {};
    function Hg(I, f) {
      var b = t;
      if (void (1166 + 3511 * 2 + -356 * 23) === b[I].ja) {
        var y = b[I];
        b[I] = function() {
          return b[I].ja.hasOwnProperty(arguments.length) || J("Function '" + f + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + b[I].ja + ")!"), b[I].ja[arguments.length].apply(this, arguments);
        }, b[I].ja = [], b[I].ja[y.ya] = y;
      }
    }
    function kr(I, f, b) {
      t.hasOwnProperty(I) ? ((void (-695 * 4 + -1367 * -6 + 2 * -2711) === b || void (-28 * -38 + 7507 * -1 + 6443) !== t[I].ja && void (-51 * -193 + -51 * 77 + 1479 * -4) !== t[I].ja[b]) && J("Cannot register public name '" + I + "' twice"), Hg(I, I), t.hasOwnProperty(b) && J("Cannot register multiple overloads of a function with the same number of arguments (" + b + ")!"), t[I].ja[b] = f) : (t[I] = f, void (-193 * -10 + 9012 + -10942) !== b && (t[I].Ra = b));
    }
    function Rg(I, f, b, y, S, w, Z, G) {
      this.name = I, this.constructor = f, this.ma = b, this.na = y, this.ia = S, this.Ca = w, this.qa = Z, this.Aa = G;
    }
    function nx(I, f, b) {
      for (; f !== b; ) f.qa || J("Expected null or instance of " + b.name + ", got an instance of " + f.name), I = f.qa(I), f = f.ia;
      return I;
    }
    function Kg(I, f) {
      return f === null ? (this.ua && J("null is not a valid " + this.name), 3805 + -16 * -216 + -7261) : (f.A || J('Cannot pass "' + G0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), nx(f.A.da, f.A.fa.ea, this.ea));
    }
    function Pg(I, f) {
      if (f === null) {
        if (this.ua && J("null is not a valid " + this.name), this.sa) {
          var b = this.Ha();
          return I !== null && I.push(this.na, b), b;
        }
        return -155 * -39 + 9267 * -1 + -1 * -3222;
      }
      if (f.A || J('Cannot pass "' + G0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && f.A.fa.ra && J("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name), b = nx(f.A.da, f.A.fa.ea, this.ea), this.sa) switch (f.A.ga === void 0 && J("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case -4117 * -1 + -15 * 311 + 548:
          f.A.ha === this ? b = f.A.ga : J("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name);
          break;
        case -1545 * 1 + -4698 + -28 * -223:
          b = f.A.ga;
          break;
        case -1 * 2062 + 1 * 337 + 157 * 11:
          if (f.A.ha === this) b = f.A.ga;
          else {
            var y = f.clone();
            b = this.Ia(b, B0(function() {
              y.delete();
            })), I !== null && I.push(this.na, b);
          }
          break;
        default:
          J("Unsupporting sharing policy");
      }
      return b;
    }
    function Tg(I, f) {
      return f === null ? (this.ua && J("null is not a valid " + this.name), 8149 + 1 * 7679 + 12 * -1319) : (f.A || J('Cannot pass "' + G0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), f.A.fa.ra && J("Cannot convert argument of type " + f.A.fa.name + " to parameter type " + this.name), nx(f.A.da, f.A.fa.ea, this.ea));
    }
    function xx(I) {
      return this.fromWireType(st[I >> 2 * -1873 + -451 * 13 + 9611]);
    }
    function Or(I, f, b) {
      return f === b ? I : void (-2 * -239 + 1 * 2402 + -2880) === b.ia ? null : (I = Or(I, f, b.ia), I === null ? null : b.Aa(I));
    }
    var sn = {};
    function Eg(I, f) {
      for (void (-13 * 420 + 5 * 313 + 779 * 5) === f && J("ptr should not be undefined"); I.ia; ) f = I.qa(f), I = I.ia;
      return sn[f];
    }
    function ix(I, f) {
      f.fa && f.da || tx("makeClassHandle requires ptr and ptrType"), !!f.ha != !!f.ga && tx("Both smartPtrType and smartPtr must be specified");
      var b = {};
      b.value = 1, f.count = b;
      var y = {};
      y.value = f;
      var S = {};
      return S.A = y, on(Object.create(I, S));
    }
    function Gt(I, f, b, y) {
      this.name = I, this.ea = f, this.ua = b, this.ra = y, this.sa = !(-17 * -557 + -6 * -309 + 9 * -1258), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (82 * 4 + -5 * -1279 + -6723), void (-6780 + 691 * 13 + -1 * 2203) !== f.ia ? this.toWireType = Pg : (this.toWireType = y ? Kg : Tg, this.ka = null);
    }
    function Zr(I, f, b) {
      t.hasOwnProperty(I) || tx("Replacing nonexistant public symbol"), t[I].ja !== void 0 && void (7 * 1371 + 4841 + -2 * 7219) !== b ? t[I].ja[b] = f : (t[I] = f, t[I].ya = b);
    }
    function Dt(I, f) {
      I = Le(I);
      var b = vi(I, f);
      return typeof b != "function" && J("unknown function pointer with signature " + I + ": " + f), b;
    }
    var Hr = void (349 * -19 + 3083 * -1 + 6 * 1619);
    function Rr(I) {
      I = _r(I);
      var f = Le(I);
      return kt(I), f;
    }
    function cn(I, f) {
      function b(w) {
        S[w] || qt[w] || (ex[w] ? ex[w].forEach(b) : (y.push(w), S[w] = !(1 * -9257 + 5607 + 25 * 146)));
      }
      var y = [], S = {};
      throw f.forEach(b), new Hr(I + ": " + y.map(Rr).join([", "]));
    }
    function Kr(I, f) {
      for (var b = [], y = -377 * 21 + -7462 + 15379; y < I; y++) b.push(ke[(f >> 2) + y]);
      return b;
    }
    function ox(I) {
      for (; I.length; ) {
        var f = I.pop();
        I.pop()(f);
      }
    }
    function Pr(I, f, b) {
      return I instanceof Object || J(b + ' with invalid "this": ' + I), I instanceof f.ea.constructor || J(b + ' incompatible with "this" of type ' + I.constructor.name), I.A.da || J("cannot call emscripten binding method " + b + " on deleted object"), nx(I.A.da, I.A.fa.ea, f.ea);
    }
    var Tr = {};
    Tr.value = void (-274 * -15 + -3319 + -791);
    var Er = {};
    Er.value = null;
    var Vr = {};
    Vr.value = !(-649 * 11 + 3540 + 3599);
    var Lr = {};
    Lr.value = !1;
    var Hi = [], et = [{}, Tr, Er, Vr, Lr];
    function Ri(I) {
      -11500 + -5752 * -2 < I && 1 * 41 + -7503 + 7462 === --et[I].Ja && (et[I] = void (7303 + -4 * 425 + -5603), Hi.push(I));
    }
    function B0(I) {
      switch (I) {
        case void 0:
          return -349 * -13 + -1051 * -3 + -7689;
        case null:
          return -5569 * -1 + 1295 * -2 + -2977 * 1;
        case !(1486 + 1 * -1486):
          return -9193 + 1 * 7305 + 1891;
        case !(-125 * -79 + -240 + 9634 * -1):
          return 4;
        default:
          var f = Hi.length ? Hi.pop() : et.length, b = {};
          return b.Ja = 1, b.value = I, et[f] = b, f;
      }
    }
    function G0(I) {
      if (I === null) return "null";
      var f = typeof I;
      return f === "object" || f === "array" || f === "function" ? I.toString() : "" + I;
    }
    function Vg(I, f) {
      switch (f) {
        case -4241 + -1 * -899 + 4 * 836:
          return function(b) {
            return this.fromWireType(zn[b >> 2]);
          };
        case 1296 + -3 * 431:
          return function(b) {
            return this.fromWireType(A0[b >> 16963 + 2120 * -8]);
          };
        default:
          throw new TypeError("Unknown float type: " + I);
      }
    }
    function Lg(I) {
      var f = Function;
      if (!(f instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof f + " which is not a function");
      var b = Bi(f.name || "unknownFunctionName", function() {
      });
      return b.prototype = f.prototype, b = new b(), I = f.apply(b, I), I instanceof Object ? I : b;
    }
    function Dg(I, f, b) {
      switch (f) {
        case -8825 + 5 * -661 + 6065 * 2:
          return b ? function(y) {
            return Ve[y];
          } : function(y) {
            return Ze[y];
          };
        case -866 * -11 + -4171 * 2 + -1183:
          return b ? function(y) {
            return Et[y >> 3347 + 31 * -109 + 33];
          } : function(y) {
            return Ut[y >> -6935 + 204 * 34];
          };
        case 9578 + -1 * -8317 + -17893:
          return b ? function(y) {
            return ke[y >> -522 * 16 + -1 * 3788 + -26 * -467];
          } : function(y) {
            return st[y >> 12 * -641 + 8245 + -551];
          };
        default:
          throw new TypeError("Unknown integer type: " + I);
      }
    }
    function Ki(I) {
      return I || J("Cannot use deleted val. handle = " + I), et[I].value;
    }
    function Dr(I, f) {
      var b = qt[I];
      return void (592 + 2319 * -1 + 1727) === b && J(f + " has unknown type " + Rr(I)), b;
    }
    var Ng = {}, Nr = {};
    function Fr() {
      if (!Pi) {
        var I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: a || "./this.program" }, f;
        for (f in Nr) I[f] = Nr[f];
        var b = [];
        for (f in I) b.push(f + "=" + I[f]);
        Pi = b;
      }
      return Pi;
    }
    var Pi, Yr = [];
    function Mr(I) {
      var f = {}, b;
      for (b in I) (function(y) {
        var S = I[y];
        f[y] = typeof S == "function" ? function() {
          Yr.push(y);
          try {
            return S.apply(null, arguments);
          } finally {
            if (m) return;
            var w = Yr.pop();
            A(w === y);
          }
        } : S;
      })(b);
      return f;
    }
    for (var jr = Array(727 * 3 + -3299 * -1 + 653 * -8), rx = -5180 + 1 * -4357 + 289 * 33; 8895 + 1 * -5289 + -3350 > rx; ++rx) jr[rx] = String.fromCharCode(rx);
    vr = jr, S0 = t.BindingError = Gi("BindingError"), Sr = t.InternalError = Gi("InternalError"), Lt.prototype.isAliasOf = function(I) {
      if (!(this instanceof Lt && I instanceof Lt)) return !(-3936 * -1 + -3343 * -2 + -559 * 19);
      var f = this.A.fa.ea, b = this.A.da, y = I.A.fa.ea;
      for (I = I.A.da; f.ia; ) b = f.qa(b), f = f.ia;
      for (; y.ia; ) I = y.qa(I), y = y.ia;
      return f === y && b === I;
    }, Lt.prototype.clone = function() {
      if (this.A.da || ki(this), this.A.pa) return this.A.count.value += 1919 * 5 + 6868 + 2 * -8231, this;
      var I = on(Object.create(Object.getPrototypeOf(this), { A: { value: Zg(this.A) } }));
      return I.A.count.value += -908 * 1 + -167 * -57 + -8610, I.A.oa = !(3093 + -7 * 993 + 3859 * 1), I;
    }, Lt.prototype.delete = function() {
      this.A.da || ki(this), this.A.oa && !this.A.pa && J("Object already scheduled for deletion"), wr(this), Br(this.A), this.A.pa || (this.A.ga = void (40 * -89 + 8202 + -4642), this.A.da = void (5323 + 27 * -83 + -3082));
    }, Lt.prototype.isDeleted = function() {
      return !this.A.da;
    }, Lt.prototype.deleteLater = function() {
      return this.A.da || ki(this), this.A.oa && !this.A.pa && J("Object already scheduled for deletion"), an.push(this), 3 * -2485 + -268 * 23 + 13620 === an.length && rn && rn(Zi), this.A.oa = !(580 + -2 * -3480 + 3770 * -2), this;
    }, Gt.prototype.Da = function(I) {
      return this.wa && (I = this.wa(I)), I;
    }, Gt.prototype.va = function(I) {
      this.na && this.na(I);
    }, Gt.prototype.argPackAdvance = -1 * 1452 + -14 * 553 + 9202, Gt.prototype.readValueFromPointer = xx, Gt.prototype.deleteObject = function(I) {
      I !== null && I.delete();
    }, Gt.prototype.fromWireType = function(I) {
      function f() {
        return this.sa ? ix(this.ea.ma, { fa: this.Ga, da: b, ha: this, ga: I }) : ix(this.ea.ma, { fa: this, da: I });
      }
      var b = this.Da(I);
      if (!b) return this.va(I), null;
      var y = Eg(this.ea, b);
      if (void (2 * -3833 + -5 * -329 + 6021) !== y)
        return -3288 + -3 * -881 + 15 * 43 === y.A.count.value ? (y.A.da = b, y.A.ga = I, y.clone()) : (y = y.clone(), this.va(I), y);
      if (y = this.ea.Ca(b), y = Gr[y], !y) return f.call(this);
      y = this.ra ? y.za : y.pointerType;
      var S = Or(b, this.ea, y.ea);
      return S === null ? f.call(this) : this.sa ? ix(y.ea.ma, { fa: y, da: S, ha: this, ga: I }) : ix(y.ea.ma, { fa: y, da: S });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(sn).length;
    }, t.getLiveInheritedInstances = function() {
      var I = [], f;
      for (f in sn) sn.hasOwnProperty(f) && I.push(sn[f]);
      return I;
    }, t.flushPendingDeletes = Zi, t.setDelayFunction = function(I) {
      rn = I, an.length && rn && rn(Zi);
    }, Hr = t.UnboundTypeError = Gi("UnboundTypeError"), t.count_emval_handles = function() {
      for (var I = 31 * 180 + 3 * 623 + 3 * -2483, f = -1 * 6427 + 3 * 2677 + -1599; f < et.length; ++f) void (7 * -253 + -6801 * 1 + 8572) !== et[f] && ++I;
      return I;
    }, t.get_first_emval = function() {
      for (var I = 8026 + 617 * -13; I < et.length; ++I) if (void (17 * -103 + 8921 + 15 * -478) !== et[I]) return et[I];
      return null;
    }, He.push({ Ba: function() {
      Xr();
    } });
    var Fg = { z: function(I) {
      return ax(I + 16) + (11761 + -5 * 2349);
    }, u: function(I, f, b) {
      throw new Og(I).Fa(f, b), "uncaught_exception" in $n ? $n.xa++ : $n.xa = 1892 + -49 * 37 + -78, I;
    }, w: function(I, f, b, y, S) {
      var w = Si(b);
      f = Le(f), Bt(I, { name: f, fromWireType: function(Z) {
        return !!Z;
      }, toWireType: function(Z, G) {
        return G ? y : S;
      }, argPackAdvance: 8, readValueFromPointer: function(Z) {
        if (1571 * 1 + 6376 + -3973 * 2 === b) var G = Ve;
        else if (-179 * 31 + 95 * -15 + 6976 === b) G = Et;
        else if (-4444 + -4448 * -1 === b) G = ke;
        else throw new TypeError("Unknown boolean type size: " + f);
        return this.fromWireType(G[Z >> w]);
      }, ka: null });
    }, h: function(I, f, b, y, S, w, Z, G, R, K, P, T, q) {
      P = Le(P), w = Dt(S, w), G && (G = Dt(Z, G)), K && (K = Dt(R, K)), q = Dt(T, q);
      var Ce = wi(P);
      kr(Ce, function() {
        cn("Cannot construct " + P + " due to unbound types", [y]);
      }), w0([I, f, b], y ? [y] : [], function(V) {
        if (V = V[-1 * 6327 + 4727 + 1600], y) var ht = V.ea, Re = ht.ma;
        else Re = Lt.prototype;
        V = Bi(Ce, function() {
          if (Object.getPrototypeOf(this) !== k0) throw new S0("Use 'new' to construct " + P);
          if (void (-1897 + -7 * 671 + -14 * -471) === O0.la) throw new S0(P + " has no accessible constructor");
          var Ur = O0.la[arguments.length];
          if (void (-2 * -1589 + -2248 + -465 * 2) === Ur) throw new S0("Tried to invoke ctor of " + P + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(O0.la).toString() + ") parameters instead!");
          return Ur.apply(this, arguments);
        });
        var Xe = {};
        Xe.value = V;
        var $t = {};
        $t.constructor = Xe;
        var k0 = Object.create(Re, $t);
        V.prototype = k0;
        var O0 = new Rg(P, V, k0, q, ht, w, G, K);
        ht = new Gt(P, O0, !(2614 + 8 * 289 + 4926 * -1), !(-11 * 10 + -6039 + 6150)), Re = new Gt(P + "*", O0, !(7282 * -1 + -7477 * 1 + 14760), !(485 * 2 + -514 * -8 + -5081));
        var Jr = new Gt(P + " const*", O0, !(-17 * 547 + -359 * 6 + -5727 * -2), !(-5978 + 122 * 49)), Ei = {};
        return Ei.pointerType = Re, Ei.za = Jr, Gr[I] = Ei, Zr(Ce, V), [ht, Re, Jr];
      });
    }, g: function(I, f, b, y, S, w) {
      A(-2 * 251 + 5057 + -4555 < f);
      var Z = Kr(f, b);
      S = Dt(y, S);
      var G = [w], R = [];
      w0([], [I], function(K) {
        K = K[0];
        var P = "constructor " + K.name;
        if (void (507 * 10 + 3863 + -8933) === K.ea.la && (K.ea.la = []), K.ea.la[f - (-7051 + -82 * -86)] !== void 0) throw new S0("Cannot register multiple constructors with identical number of parameters (" + (f - (8194 + 534 * 9 + 12999 * -1)) + ") for class '" + K.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return K.ea.la[f - 1] = function() {
          cn("Cannot construct " + K.name + " due to unbound types", Z);
        }, w0([], Z, function(T) {
          return K.ea.la[f - (4366 + -4365 * 1)] = function() {
            arguments.length !== f - (-1112 + 10 * -110 + 2213 * 1) && J(P + " called with " + arguments.length + " arguments, expected " + (f - (1931 * 3 + -5746 + 46 * -1))), R.length = 4117 + 1 * -4117, G.length = f;
            for (var q = 331 + -1 * -9979 + -10309; q < f; ++q) G[q] = T[q].toWireType(R, arguments[q - 1]);
            return q = S.apply(null, G), ox(R), T[20 * 405 + -44 * 5 + -40 * 197].fromWireType(q);
          }, [];
        }), [];
      });
    }, b: function(I, f, b, y, S, w, Z, G, R, K) {
      f = Le(f), S = Dt(y, S), w0([], [I], function(P) {
        P = P[4288 + -5956 * -1 + 10244 * -1];
        var T = P.name + "." + f, q = { get: function() {
          cn("Cannot access " + T + " due to unbound types", [b, Z]);
        }, enumerable: !(-757 * -8 + -1882 * 1 + 4174 * -1), configurable: !(-2 * -827 + 6999 + -1 * 8653) };
        return R ? q.set = function() {
          cn("Cannot access " + T + " due to unbound types", [b, Z]);
        } : q.set = function() {
          J(T + " is a read-only property");
        }, Object.defineProperty(P.ea.ma, f, q), w0([], R ? [b, Z] : [b], function(Ce) {
          var V = Ce[0], ht = { get: function() {
            var Xe = Pr(this, P, T + " getter");
            return V.fromWireType(S(w, Xe));
          }, enumerable: !0 };
          if (R) {
            R = Dt(G, R);
            var Re = Ce[3 * 646 + 1 * 3573 + 190 * -29];
            ht.set = function(Xe) {
              var $t = Pr(this, P, T + " setter"), k0 = [];
              R(K, $t, Re.toWireType(k0, Xe)), ox(k0);
            };
          }
          return Object.defineProperty(P.ea.ma, f, ht), [];
        }), [];
      });
    }, v: function(I, f) {
      f = Le(f), Bt(I, { name: f, fromWireType: function(b) {
        var y = et[b].value;
        return Ri(b), y;
      }, toWireType: function(b, y) {
        return B0(y);
      }, argPackAdvance: 8, readValueFromPointer: xx, ka: null });
    }, m: function(I, f, b) {
      b = Si(b), f = Le(f), Bt(I, { name: f, fromWireType: function(y) {
        return y;
      }, toWireType: function(y, S) {
        if (typeof S != "number" && typeof S != "boolean") throw new TypeError('Cannot convert "' + G0(S) + '" to ' + this.name);
        return S;
      }, argPackAdvance: 8, readValueFromPointer: Vg(f, b), ka: null });
    }, c: function(I, f, b, y, S, w) {
      var Z = Kr(f, b);
      I = Le(I), S = Dt(y, S), kr(I, function() {
        cn("Cannot call " + I + " due to unbound types", Z);
      }, f - (54 * -29 + 2 * -4138 + 579 * 17)), w0([], Z, function(G) {
        var R = I, K = I;
        G = [G[-322 * -31 + -2570 + -109 * 68], null].concat(G.slice(-11 * 293 + -1241 * -1 + 3 * 661));
        var P = S, T = G.length;
        2 > T && J("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var q = G[-6583 + -3878 * -1 + 2706] !== null && !(-1021 * -9 + -5 * 721 + -5583), Ce = !(867 * -1 + 1 * 4153 + -3285), V = -3705 + -2 * 107 + 56 * 70; V < G.length; ++V) if (G[V] !== null && void (3322 + -151 * 22) === G[V].ka) {
          Ce = !(-12739 + 1 * 12739);
          break;
        }
        var ht = G[-1 * 2843 + 4 * -1490 + 8803].name !== "void", Re = "", Xe = "";
        for (V = -27 * -9 + -1931 + 422 * 4; V < T - (899 * -1 + 8323 + -2474 * 3); ++V) Re += (V !== 0 ? ", " : "") + "arg" + V, Xe += (-972 + 4493 * -1 + 1 * 5465 !== V ? ", " : "") + "arg" + V + "Wired";
        K = "return function " + wi(K) + "(" + Re + `) {
if (arguments.length !== ` + (T - 2) + `) {
throwBindingError('function ` + K + " called with ' + arguments.length + ' arguments, expected " + (T - (-5516 + -2386 * -3 + -1640)) + ` args!');
}
`, Ce && (K += `var destructors = [];
`);
        var $t = Ce ? "destructors" : "null";
        for (Re = "throwBindingError invoker fn runDestructors retType classParam".split(" "), P = [J, P, w, ox, G[7844 + -17 * -61 + -8881], G[350 + -1 * 349]], q && (K += "var thisWired = classParam.toWireType(" + $t + `, this);
`), V = -13729 + 1 * 13729; V < T - (-103 * -5 + -1 * 165 + -348); ++V) K += "var arg" + V + "Wired = argType" + V + ".toWireType(" + $t + ", arg" + V + "); // " + G[V + (-1141 + 219 * -3 + 1800)].name + `
`, Re.push("argType" + V), P.push(G[V + (-5379 + 2181 * 2 + 1019)]);
        if (q && (Xe = "thisWired" + (-8536 + 388 * 22 < Xe.length ? ", " : "") + Xe), K += (ht ? "var rv = " : "") + "invoker(fn" + (0 < Xe.length ? ", " : "") + Xe + `);
`, Ce) K += `runDestructors(destructors);
`;
        else
          for (V = q ? 1 : 95 * 64 + 4949 * 2 + -15976; V < G.length; ++V) T = -4480 + -4481 * -1 === V ? "thisWired" : "arg" + (V - (-8146 + 5 * 1873 + -1 * 1217)) + "Wired", G[V].ka !== null && (K += T + "_dtor(" + T + "); // " + G[V].name + `
`, Re.push(T + "_dtor"), P.push(G[V].ka));
        return ht && (K += `var ret = retType.fromWireType(rv);
return ret;
`), Re.push(K + `}
`), G = Lg(Re).apply(null, P), Zr(R, G, f - (-1812 + 4271 * -1 + 338 * 18)), [];
      });
    }, e: function(I, f, b, y, S) {
      function w(K) {
        return K;
      }
      f = Le(f), -(5 * 1317 + 4637 + -11221) === S && (S = 6290095811 + 3856729463 * 1 + -1 * 5851857979);
      var Z = Si(b);
      if (-521 * 7 + -18 * 268 + 8471 === y) {
        var G = 32 - 8 * b;
        w = function(K) {
          return K << G >>> G;
        };
      }
      var R = -(3523 * -2 + -1963 + 9010) != f.indexOf("unsigned");
      Bt(I, { name: f, fromWireType: w, toWireType: function(K, P) {
        if (typeof P != "number" && typeof P != "boolean") throw new TypeError('Cannot convert "' + G0(P) + '" to ' + this.name);
        if (P < y || P > S) throw new TypeError('Passing a number "' + G0(P) + '" from JS side to C/C++ side to an argument of type "' + f + '", which is outside the valid range [' + y + ", " + S + "]!");
        return R ? P >>> -9537 + 8 * 1051 + -1129 * -1 : P | -1978 + 2 * 989;
      }, argPackAdvance: 8, readValueFromPointer: Dg(f, Z, 4007 * -1 + -863 * -7 + 2034 * -1 !== y), ka: null });
    }, d: function(I, f, b) {
      function y(G) {
        G >>= 2;
        var R = st;
        return new S(te, R[G + (-2 * -4747 + -6694 + 2799 * -1)], R[G]);
      }
      var S = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][f];
      b = Le(b);
      var w = {};
      w.name = b, w.fromWireType = y, w.argPackAdvance = 8, w.readValueFromPointer = y;
      var Z = {};
      Z.Ea = !(3715 + -1 * -9199 + -12914), Bt(I, w, Z);
    }, n: function(I, f) {
      f = Le(f);
      var b = f === "std::string";
      Bt(I, { name: f, fromWireType: function(y) {
        var S = st[y >> 2];
        if (b) for (var w = y + 4, Z = -423 + -1 * -4664 + -4241 * 1; Z <= S; ++Z) {
          var G = y + 4 + Z;
          if (Z == S || -381 * -11 + -57 * 149 + -717 * -6 == Ze[G]) {
            if (w) {
              var R = w, K = Ze, P = R + (G - w);
              for (w = R; K[w] && !(w >= P); ) ++w;
              if (-9866 + -18 * -549 < w - R && K.subarray && l) R = l.decode(K.subarray(R, w));
              else {
                for (P = ""; R < w; ) {
                  var T = K[R++];
                  if (T & -4418 + -7 * 1343 + 1 * 13947) {
                    var q = K[R++] & 63;
                    if (5342 + 7151 * -1 + 2001 == (T & -7036 + -47 * -23 + -1 * -6179)) P += String.fromCharCode((T & 31) << 3 * -39 + -2367 + 249 * 10 | q);
                    else {
                      var Ce = K[R++] & 63;
                      T = 367 * -18 + 1653 * -5 + 15095 == (T & 897 + 173 * 2 + -1003) ? (T & -31 * 243 + -50 * 3 + 6 * 1283) << 12 | q << 6 | Ce : (T & 523 * -19 + -1742 * -3 + 4718) << -6179 * 1 + -499 * -7 + 2704 | q << 5867 + -9829 * -1 + -15684 | Ce << -5288 * 1 + -2988 + 202 * 41 | K[R++] & -7836 + 1 * -4484 + -427 * -29, -11518 * 1 + 1715 * 41 + 6739 > T ? P += String.fromCharCode(T) : (T -= -1 * -59281 + -18267 + 24522, P += String.fromCharCode(-6570 * -3 + -5 * 3819 + 33 * 1657 | T >> -4880 + -190 * 15 + 7740, -39450 + -1 * -13849 + 81921 | T & 61 + -37 * -26));
                    }
                  } else P += String.fromCharCode(T);
                }
                R = P;
              }
            } else R = "";
            if (void (3698 * -2 + 7328 + 1 * 68) === V) var V = R;
            else V += String.fromCharCode(-2067 + -43 * -215 + -3589 * 2), V += R;
            w = G + (-4364 * -1 + 3417 + 3890 * -2);
          }
        }
        else {
          for (V = Array(S), Z = 0; Z < S; ++Z) V[Z] = String.fromCharCode(Ze[y + (-1195 * 5 + 9295 + -3316) + Z]);
          V = V.join("");
        }
        return kt(y), V;
      }, toWireType: function(y, S) {
        S instanceof ArrayBuffer && (S = new Uint8Array(S));
        var w = typeof S == "string";
        w || S instanceof Uint8Array || S instanceof Uint8ClampedArray || S instanceof Int8Array || J("Cannot pass non-string to std::string");
        var Z = (b && w ? function() {
          for (var K = -4349 + 11 * 151 + 2688, P = -5889 + 1963 * 3; P < S.length; ++P) {
            var T = S.charCodeAt(P);
            -55666 + 1 * 31442 + 79520 <= T && -1 * -3856 + -24701 * 1 + 78188 >= T && (T = 65536 + ((T & 4887 + 539 * 2 + -4942) << 10) | S.charCodeAt(++P) & 2627 * -1 + 367 * 13 + -1121), 127 >= T ? ++K : K = -6898 * -1 + -887 * 6 + 157 * 3 >= T ? K + (-1 * 7855 + -7739 + 7 * 2228) : 109860 + 125 * 804 + -144825 >= T ? K + (10574 + 341 * -31) : K + (23 * 81 + 7741 * 1 + -9600);
          }
          return K;
        } : function() {
          return S.length;
        })(), G = ax(4 + Z + (-1 * -8030 + -4267 + -3762));
        if (st[G >> 2 * 4293 + -4478 + -4106] = Z, b && w) W(S, G + 4, Z + 1);
        else if (w) for (w = 0; w < Z; ++w) {
          var R = S.charCodeAt(w);
          -65 * -7 + -51 * 59 + 2809 * 1 < R && (kt(G), J("String has UTF-16 code units that do not fit in 8 bits")), Ze[G + (3658 + 4437 * 1 + 2697 * -3) + w] = R;
        }
        else
          for (w = -202 * 16 + 38 * 173 + -3342; w < Z; ++w) Ze[G + (-2892 + 5557 * 1 + -1 * 2661) + w] = S[w];
        return y !== null && y.push(kt, G), G;
      }, argPackAdvance: 8, readValueFromPointer: xx, ka: function(y) {
        kt(y);
      } });
    }, j: function(I, f, b) {
      if (b = Le(b), -1 * -7237 + 1 * 2999 + -14 * 731 === f) var y = D, S = Y, w = _, Z = function() {
        return Ut;
      }, G = 1;
      else -2549 * -1 + -4 * 1222 + 2343 === f && (y = H, S = re, w = U, Z = function() {
        return st;
      }, G = 1 * 5533 + 4702 + -27 * 379);
      Bt(I, { name: b, fromWireType: function(R) {
        for (var K = st[R >> 3358 + -3e3 * -3 + 3089 * -4], P = Z(), T, q = R + (-1422 * -1 + -4539 + -3121 * -1), Ce = 2 * 4522 + -8 * -324 + -11636; Ce <= K; ++Ce) {
          var V = R + 4 + Ce * f;
          (Ce == K || 3934 * 1 + -8 * -496 + -9 * 878 == P[V >> G]) && (q = y(q, V - q), void (-19480 + -5 * -3896) === T ? T = q : (T += String.fromCharCode(1731 * 2 + 4337 + -7799), T += q), q = V + f);
        }
        return kt(R), T;
      }, toWireType: function(R, K) {
        typeof K != "string" && J("Cannot pass non-string to C++ string type " + b);
        var P = w(K), T = ax(3110 + -1 * 3278 + -86 * -2 + P + f);
        return st[T >> -22 * -167 + -8582 + 4910] = P >> G, S(K, T + (7753 * -1 + -3969 + 11726 * 1), P + f), R !== null && R.push(kt, T), T;
      }, argPackAdvance: 8, readValueFromPointer: xx, ka: function(R) {
        kt(R);
      } });
    }, x: function(I, f) {
      f = Le(f);
      var b = {};
      b.Qa = !(-925 + 37 * 25), b.name = f, b.argPackAdvance = 0, b.fromWireType = function() {
      }, b.toWireType = function() {
      }, Bt(I, b);
    }, k: function(I, f, b) {
      I = Ki(I), f = Dr(f, "emval::as");
      var y = [], S = B0(y);
      return ke[b >> 6577 * -1 + -991 * -1 + -1 * -5588] = S, f.toWireType(y, I);
    }, i: Ri, l: function(I, f) {
      return I = Ki(I), f = Ki(f), B0(I[f]);
    }, p: function(I) {
      var f = Ng[I];
      return B0(f === void 0 ? Le(I) : f);
    }, o: function(I) {
      ox(et[I].value), Ri(I);
    }, y: function(I, f) {
      return I = Dr(I, "_emval_take_value"), I = I.readValueFromPointer(f), B0(I);
    }, f: function() {
      $e();
    }, q: function(I, f, b) {
      Ze.copyWithin(I, f, f + b);
    }, r: function(I) {
      I >>>= -3 * -1371 + 7072 + -11185;
      var f = Ze.length;
      if (720029412 + -11276 * -59978 + 751142308 < I) return !(2111 + 5395 * 1 + -7505);
      for (var b = -10 * 268 + -1832 + 4513; 548 * 11 + -80 * -27 + -4 * 2046 >= b; b *= 5 * -1515 + -5197 + -4258 * -3) {
        var y = f * (1 + 0.2 / b);
        y = Math.min(y, I + (-128003875 + 79479 * -1162 + 300301 * 1069)), y = Math.max(-3518654 + -26021 * 131 + 23704621, I, y), 5208 + 24 * 358 + -13800 < y % (2 * 29279 + -79125 + 86103 * 1) && (y += -113461 + 4863 * 1 + 83 * 2098 - y % (-9 * 5480 + -25683 * -5 + -149 * 91));
        e: {
          try {
            p.grow(Math.min(-90437 * 43466 + -2 * 1255947437 + -7902772 * -1087, y) - te.byteLength + (-4721 + -77 * -1621 + -54561) >>> -1609 + 22 * -217 + 6399), nn(p.buffer);
            var S = -7268 + 14 * -13 + 7451;
            break e;
          } catch {
          }
          S = void (2 * -2159 + -15 * -349 + -917);
        }
        if (S) return !(338 * 22 + 7787 + 1 * -15223);
      }
      return !(8264 + -2 * 2215 + 3833 * -1);
    }, s: function(I, f) {
      var b = 0;
      return Fr().forEach(function(y, S) {
        var w = f + b;
        for (S = ke[I + 4 * S >> 1380 * -2 + -1712 * -1 + 1050] = w, w = -2874 * 2 + -2 * 34 + 5816; w < y.length; ++w) Ve[S++ >> 8353 + 1 * -1160 + -7193] = y.charCodeAt(w);
        Ve[S >> 2 * 709 + -1192 + -1 * 226] = 1 * -862 + -9324 + 463 * 22, b += y.length + (-89 * -7 + 2 * -149 + -324);
      }), -3549 + -2 * 3347 + 10243 * 1;
    }, t: function(I, f) {
      var b = Fr();
      ke[I >> -1 * -7327 + -103 * 56 + -3 * 519] = b.length;
      var y = 9774 + 1 * 9267 + -19041;
      return b.forEach(function(S) {
        y += S.length + (6395 + 5098 * -1 + 162 * -8);
      }), ke[f >> 8460 + -8458 * 1] = y, -8 * -1149 + -4817 + -4375 * 1;
    }, a: p };
    (function() {
      function I(Z) {
        Z = Z.exports, Z = Mr(Z), t.asm = Z, je--, t.monitorRunDependencies && t.monitorRunDependencies(je), je == 0 && Ct && (Z = Ct, Ct = null, Z());
      }
      function f(Z) {
        I(Z.instance);
      }
      function b(Z) {
        return kg().then(function(G) {
          return WebAssembly.instantiate(G, S);
        }).then(Z, function(G) {
          C("failed to asynchronously prepare wasm: " + G), $e(G);
        });
      }
      var y = {};
      y.a = Fg;
      var S = y;
      if (je++, t.monitorRunDependencies && t.monitorRunDependencies(je), t.instantiateWasm) try {
        var w = t.instantiateWasm(S, I);
        return w = Mr(w);
      } catch (Z) {
        return C("Module.instantiateWasm callback failed with error: " + Z), !1;
      }
      return function() {
        if (u || typeof WebAssembly.instantiateStreaming != "function" || pt() || Qt("file://") || typeof fetch != "function") return b(f);
        var Z = {};
        Z.credentials = "same-origin", fetch(ct, Z).then(function(G) {
          return WebAssembly.instantiateStreaming(G, S).then(f, function(R) {
            return C("wasm streaming compile failed: " + R), C("falling back to ArrayBuffer instantiation"), b(f);
          });
        });
      }(), {};
    })();
    var Xr = t.___wasm_call_ctors = function() {
      return (Xr = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, ax = t._malloc = function() {
      return (ax = t._malloc = t.asm.C).apply(null, arguments);
    }, kt = t._free = function() {
      return (kt = t._free = t.asm.D).apply(null, arguments);
    }, _r = t.___getTypeName = function() {
      return (_r = t.___getTypeName = t.asm.E).apply(null, arguments);
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
    var sx;
    Ct = function I() {
      sx || Ti(), sx || (Ct = I);
    };
    function Ti() {
      function I() {
        if (!sx && (sx = !(6777 + 6777 * -1), t.calledRun = !(1 * -1567 + 5 * 931 + 4 * -772), !m)) {
          if (qn(He), qn(xn), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var f = t.postRun.shift();
            y0.unshift(f);
          }
          qn(y0);
        }
      }
      if (!(-9340 + -5 * -1667 + 1005 < je)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) W0();
        qn(Vt), -6615 + 147 * -5 + 21 * 350 < je || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, 1), I();
        }, 3514 + 49 * -130 + 2857)) : I());
      }
    }
    if (t.run = Ti, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); 9335 + 9335 * -1 < t.preInit.length; ) t.preInit.pop()();
    return Ti(), i.ready;
  };
})();
class KI {
  constructor(i, t) {
    E(this, "isDetectorInitialized", !1);
    E(this, "samVersion", null);
    E(this, "detection");
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
    return i === Rl;
  }
  setThresholds(i) {
    this.imageProcessor.validationService.thresholds = i;
  }
}
class PI {
  constructor() {
    E(this, "detectionRecord", []);
    E(this, "imagesWithTimestampForDuplicateDetection", new pr(Bl));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: i, timestamp: t }) {
    const e = i.length / Zl, n = e / (4450 + 278 * -16), o = i.length / (4323 + -35 * -285 + -14296), r = await ZI(i.slice(o - n, o + n)), a = {};
    a.imageHash = r, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(i) {
    return { data: ql(i), resolution: { width: i.width, height: i.height } };
  }
  async processDetectedObject({ detectedObject: i, image: t, imageData: e, timestamp: n }) {
    const o = _c(i), r = this.validationService.validateDetectedObject(o, t);
    if (r.result.get("isPresent")) {
      const a = {};
      a.image = e, a.timestamp = n, this.collectImagesForDuplicateDetection(a);
    }
    return this.detectionRecord.push(i), { detection: o, validationResult: r.result, isValid: r.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class TI {
  constructor() {
    E(this, "thresholds", null);
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
const hg = Symbol("Comlink.proxy"), EI = Symbol("Comlink.endpoint"), VI = Symbol("Comlink.releaseProxy"), xo = Symbol("Comlink.finalizer"), Rx = Symbol("Comlink.thrown"), mg = (x) => typeof x == "object" && x !== null || typeof x == "function", LI = {
  canHandle: (x) => mg(x) && x[hg],
  serialize(x) {
    const { port1: i, port2: t } = new MessageChannel();
    return Ag(x, i), [t, [t]];
  },
  deserialize(x) {
    return x.start(), Wg(x);
  }
}, DI = {
  canHandle: (x) => mg(x) && Rx in x,
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
}, bg = /* @__PURE__ */ new Map([
  ["proxy", LI],
  ["throw", DI]
]);
function NI(x, i) {
  for (const t of x)
    if (i === t || t === "*" || t instanceof RegExp && t.test(i))
      return !0;
  return !1;
}
function Ag(x, i = globalThis, t = ["*"]) {
  i.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!NI(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: a } = Object.assign({ path: [] }, n.data), s = (n.data.argumentList || []).map(i0);
    let c;
    try {
      const d = a.slice(0, -1).reduce((C, u) => C[u], x), g = a.reduce((C, u) => C[u], x);
      switch (r) {
        case "GET":
          c = g;
          break;
        case "SET":
          d[a.slice(-1)[0]] = i0(n.data.value), c = !0;
          break;
        case "APPLY":
          c = g.apply(d, s);
          break;
        case "CONSTRUCT":
          {
            const C = new g(...s);
            c = _I(C);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: C, port2: u } = new MessageChannel();
            Ag(x, u), c = XI(C, [C]);
          }
          break;
        case "RELEASE":
          c = void 0;
          break;
        default:
          return;
      }
    } catch (d) {
      c = { value: d, [Rx]: 0 };
    }
    Promise.resolve(c).catch((d) => ({ value: d, [Rx]: 0 })).then((d) => {
      const [g, C] = ai(d);
      i.postMessage(Object.assign(Object.assign({}, g), { id: o }), C), r === "RELEASE" && (i.removeEventListener("message", e), yg(i), xo in x && typeof x[xo] == "function" && x[xo]());
    }).catch((d) => {
      const [g, C] = ai({
        value: new TypeError("Unserializable return value"),
        [Rx]: 0
      });
      i.postMessage(Object.assign(Object.assign({}, g), { id: o }), C);
    });
  }), i.start && i.start();
}
function FI(x) {
  return x.constructor.name === "MessagePort";
}
function yg(x) {
  FI(x) && x.close();
}
function Wg(x, i) {
  return jo(x, [], i);
}
function px(x) {
  if (x)
    throw new Error("Proxy has been released and is not useable");
}
function vg(x) {
  return T0(x, {
    type: "RELEASE"
  }).then(() => {
    yg(x);
  });
}
const oi = /* @__PURE__ */ new WeakMap(), ri = "FinalizationRegistry" in globalThis && new FinalizationRegistry((x) => {
  const i = (oi.get(x) || 0) - 1;
  oi.set(x, i), i === 0 && vg(x);
});
function YI(x, i) {
  const t = (oi.get(i) || 0) + 1;
  oi.set(i, t), ri && ri.register(x, i, x);
}
function MI(x) {
  ri && ri.unregister(x);
}
function jo(x, i = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(o, r) {
      if (px(e), r === VI)
        return () => {
          MI(n), vg(x), e = !0;
        };
      if (r === "then") {
        if (i.length === 0)
          return { then: () => n };
        const a = T0(x, {
          type: "GET",
          path: i.map((s) => s.toString())
        }).then(i0);
        return a.then.bind(a);
      }
      return jo(x, [...i, r]);
    },
    set(o, r, a) {
      px(e);
      const [s, c] = ai(a);
      return T0(x, {
        type: "SET",
        path: [...i, r].map((d) => d.toString()),
        value: s
      }, c).then(i0);
    },
    apply(o, r, a) {
      px(e);
      const s = i[i.length - 1];
      if (s === EI)
        return T0(x, {
          type: "ENDPOINT"
        }).then(i0);
      if (s === "bind")
        return jo(x, i.slice(0, -1));
      const [c, d] = gs(a);
      return T0(x, {
        type: "APPLY",
        path: i.map((g) => g.toString()),
        argumentList: c
      }, d).then(i0);
    },
    construct(o, r) {
      px(e);
      const [a, s] = gs(r);
      return T0(x, {
        type: "CONSTRUCT",
        path: i.map((c) => c.toString()),
        argumentList: a
      }, s).then(i0);
    }
  });
  return YI(n, x), n;
}
function jI(x) {
  return Array.prototype.concat.apply([], x);
}
function gs(x) {
  const i = x.map(ai);
  return [i.map((t) => t[0]), jI(i.map((t) => t[1]))];
}
const Sg = /* @__PURE__ */ new WeakMap();
function XI(x, i) {
  return Sg.set(x, i), x;
}
function _I(x) {
  return Object.assign(x, { [hg]: !0 });
}
function ai(x) {
  for (const [i, t] of bg)
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
    Sg.get(x) || []
  ];
}
function i0(x) {
  switch (x.type) {
    case "HANDLER":
      return bg.get(x.name).deserialize(x.value);
    case "RAW":
      return x.value;
  }
}
function T0(x, i, t) {
  return new Promise((e) => {
    const n = JI();
    x.addEventListener("message", function o(r) {
      !r.data || !r.data.id || r.data.id !== n || (x.removeEventListener("message", o), e(r.data));
    }), x.start && x.start(), x.postMessage(Object.assign({ id: n }, i), t);
  });
}
function JI() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const wg = "dmFyIHZlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgTHQgPSAoYSkgPT4gewogIHRocm93IFR5cGVFcnJvcihhKTsKfTsKdmFyIGdlID0gKGEsIG8sIGUpID0+IG8gaW4gYSA/IHZlKGEsIG8sIHsgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCwgdmFsdWU6IGUgfSkgOiBhW29dID0gZTsKdmFyIFFuID0gKGEsIG8sIGUpID0+IGdlKGEsIHR5cGVvZiBvICE9ICJzeW1ib2wiID8gbyArICIiIDogbywgZSksIE50ID0gKGEsIG8sIGUpID0+IG8uaGFzKGEpIHx8IEx0KCJDYW5ub3QgIiArIGUpOwp2YXIgSCA9IChhLCBvLCBlKSA9PiAoTnQoYSwgbywgInJlYWQgZnJvbSBwcml2YXRlIGZpZWxkIiksIGUgPyBlLmNhbGwoYSkgOiBvLmdldChhKSksIFduID0gKGEsIG8sIGUpID0+IG8uaGFzKGEpID8gTHQoIkNhbm5vdCBhZGQgdGhlIHNhbWUgcHJpdmF0ZSBtZW1iZXIgbW9yZSB0aGFuIG9uY2UiKSA6IG8gaW5zdGFuY2VvZiBXZWFrU2V0ID8gby5hZGQoYSkgOiBvLnNldChhLCBlKSwga24gPSAoYSwgbywgZSwgaCkgPT4gKE50KGEsIG8sICJ3cml0ZSB0byBwcml2YXRlIGZpZWxkIiksIGggPyBoLmNhbGwoYSwgZSkgOiBvLnNldChhLCBlKSwgZSk7CmNvbnN0IEh0ID0gewogIHNpbWQ6ICJzYW1fc2ltZC53YXNtIiwKICBzYW06ICJzYW0ud2FzbSIKfSwgd2UgPSBhc3luYyAoKSA9PiBXZWJBc3NlbWJseS52YWxpZGF0ZShuZXcgVWludDhBcnJheShbMCwgOTcsIDExNSwgMTA5LCAxLCAwLCAwLCAwLCAxLCA1LCAxLCA5NiwgMCwgMSwgMTIzLCAzLCAyLCAxLCAwLCAxMCwgMTAsIDEsIDgsIDAsIDY1LCAwLCAyNTMsIDE1LCAyNTMsIDk4LCAxMV0pKTsKdmFyIEFlID0gZnVuY3Rpb24oKSB7CiAgdmFyIGEgPSB0eXBlb2YgZG9jdW1lbnQgPCAidSIgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdCA/IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjIDogdm9pZCAwOwogIHJldHVybiBmdW5jdGlvbihvKSB7CiAgICBvID0gbyB8fCB7fTsKICAgIHZhciBlOwogICAgZSB8fCAoZSA9IHR5cGVvZiBvIDwgInUiID8gbyA6IHt9KTsKICAgIHZhciBoLCBnOwogICAgZS5yZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgaCA9IG4sIGcgPSB0OwogICAgfSk7CiAgICB2YXIgQyA9IHt9LCBBOwogICAgZm9yIChBIGluIGUpIGUuaGFzT3duUHJvcGVydHkoQSkgJiYgKENbQV0gPSBlW0FdKTsKICAgIHZhciBPID0gIi4vdGhpcy5wcm9ncmFtIiwgYiA9ICExLCBUID0gITE7CiAgICBiID0gdHlwZW9mIHdpbmRvdyA9PSAib2JqZWN0IiwgVCA9IHR5cGVvZiBpbXBvcnRTY3JpcHRzID09ICJmdW5jdGlvbiI7CiAgICB2YXIgXyA9ICIiLCBTOwogICAgKGIgfHwgVCkgJiYgKFQgPyBfID0gc2VsZi5sb2NhdGlvbi5ocmVmIDogZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiAoXyA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjKSwgYSAmJiAoXyA9IGEpLCBfLmluZGV4T2YoImJsb2I6IikgIT09IDAgPyBfID0gXy5zdWJzdHIoMCwgXy5sYXN0SW5kZXhPZigiLyIpICsgMSkgOiBfID0gIiIsIFQgJiYgKFMgPSBmdW5jdGlvbihuKSB7CiAgICAgIHZhciB0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7CiAgICAgIHJldHVybiB0Lm9wZW4oIkdFVCIsIG4sICExKSwgdC5yZXNwb25zZVR5cGUgPSAiYXJyYXlidWZmZXIiLCB0LnNlbmQobnVsbCksIG5ldyBVaW50OEFycmF5KHQucmVzcG9uc2UpOwogICAgfSkpOwogICAgdmFyIEUgPSBlLnByaW50RXJyIHx8IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpOwogICAgZm9yIChBIGluIEMpIEMuaGFzT3duUHJvcGVydHkoQSkgJiYgKGVbQV0gPSBDW0FdKTsKICAgIEMgPSBudWxsLCBlLnRoaXNQcm9ncmFtICYmIChPID0gZS50aGlzUHJvZ3JhbSk7CiAgICB2YXIgTTsKICAgIGUud2FzbUJpbmFyeSAmJiAoTSA9IGUud2FzbUJpbmFyeSksIGUubm9FeGl0UnVudGltZSAmJiBlLm5vRXhpdFJ1bnRpbWUsIHR5cGVvZiBXZWJBc3NlbWJseSAhPSAib2JqZWN0IiAmJiBmbigibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZCIpOwogICAgdmFyIFUsIExuID0gITE7CiAgICBmdW5jdGlvbiBydChuKSB7CiAgICAgIG4gfHwgZm4oIkFzc2VydGlvbiBmYWlsZWQ6IHVuZGVmaW5lZCIpOwogICAgfQogICAgdmFyIGl0ID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGY4IikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiAkdChuLCB0LCByKSB7CiAgICAgIHZhciBpID0geDsKICAgICAgaWYgKDAgPCByKSB7CiAgICAgICAgciA9IHQgKyByIC0gMTsKICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IG4ubGVuZ3RoOyArK3MpIHsKICAgICAgICAgIHZhciB1ID0gbi5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgaWYgKDU1Mjk2IDw9IHUgJiYgNTczNDMgPj0gdSkgewogICAgICAgICAgICB2YXIgbCA9IG4uY2hhckNvZGVBdCgrK3MpOwogICAgICAgICAgICB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCBsICYgMTAyMzsKICAgICAgICAgIH0KICAgICAgICAgIGlmICgxMjcgPj0gdSkgewogICAgICAgICAgICBpZiAodCA+PSByKSBicmVhazsKICAgICAgICAgICAgaVt0KytdID0gdTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGlmICgyMDQ3ID49IHUpIHsKICAgICAgICAgICAgICBpZiAodCArIDEgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgaVt0KytdID0gMTkyIHwgdSA+PiA2OwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgIGlmICg2NTUzNSA+PSB1KSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDIgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyMjQgfCB1ID4+IDEyOwogICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDMgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyNDAgfCB1ID4+IDE4LCBpW3QrK10gPSAxMjggfCB1ID4+IDEyICYgNjM7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IHUgPj4gNiAmIDYzOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IHUgJiA2MzsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgaVt0XSA9IDA7CiAgICAgIH0KICAgIH0KICAgIHZhciBhdCA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmLTE2bGUiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFh0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IG4gPj4gMSwgaSA9IHIgKyB0IC8gMjsgIShyID49IGkpICYmIGduW3JdOyApICsrcjsKICAgICAgaWYgKHIgPDw9IDEsIDMyIDwgciAtIG4gJiYgYXQpIHJldHVybiBhdC5kZWNvZGUoeC5zdWJhcnJheShuLCByKSk7CiAgICAgIGZvciAociA9IDAsIGkgPSAiIjsgOyApIHsKICAgICAgICB2YXIgcyA9IHRuW24gKyAyICogciA+PiAxXTsKICAgICAgICBpZiAocyA9PSAwIHx8IHIgPT0gdCAvIDIpIHJldHVybiBpOwogICAgICAgICsrciwgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHMpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBKdChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgMiA+IHIpIHJldHVybiAwOwogICAgICByIC09IDI7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IHIgPCAyICogbi5sZW5ndGggPyByIC8gMiA6IG4ubGVuZ3RoOwogICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHI7ICsrcykgdG5bdCA+PiAxXSA9IG4uY2hhckNvZGVBdChzKSwgdCArPSAyOwogICAgICByZXR1cm4gdG5bdCA+PiAxXSA9IDAsIHQgLSBpOwogICAgfQogICAgZnVuY3Rpb24gS3QobikgewogICAgICByZXR1cm4gMiAqIG4ubGVuZ3RoOwogICAgfQogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gMCwgaSA9ICIiOyAhKHIgPj0gdCAvIDQpOyApIHsKICAgICAgICB2YXIgcyA9IGtbbiArIDQgKiByID4+IDJdOwogICAgICAgIGlmIChzID09IDApIGJyZWFrOwogICAgICAgICsrciwgNjU1MzYgPD0gcyA/IChzIC09IDY1NTM2LCBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBzID4+IDEwLCA1NjMyMCB8IHMgJiAxMDIzKSkgOiBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocyk7CiAgICAgIH0KICAgICAgcmV0dXJuIGk7CiAgICB9CiAgICBmdW5jdGlvbiBxdChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgNCA+IHIpIHJldHVybiAwOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSBpICsgciAtIDQ7CiAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgbi5sZW5ndGg7ICsrcykgewogICAgICAgIHZhciB1ID0gbi5jaGFyQ29kZUF0KHMpOwogICAgICAgIGlmICg1NTI5NiA8PSB1ICYmIDU3MzQzID49IHUpIHsKICAgICAgICAgIHZhciBsID0gbi5jaGFyQ29kZUF0KCsrcyk7CiAgICAgICAgICB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCBsICYgMTAyMzsKICAgICAgICB9CiAgICAgICAgaWYgKGtbdCA+PiAyXSA9IHUsIHQgKz0gNCwgdCArIDQgPiByKSBicmVhazsKICAgICAgfQogICAgICByZXR1cm4ga1t0ID4+IDJdID0gMCwgdCAtIGk7CiAgICB9CiAgICBmdW5jdGlvbiBuZShuKSB7CiAgICAgIGZvciAodmFyIHQgPSAwLCByID0gMDsgciA8IG4ubGVuZ3RoOyArK3IpIHsKICAgICAgICB2YXIgaSA9IG4uY2hhckNvZGVBdChyKTsKICAgICAgICA1NTI5NiA8PSBpICYmIDU3MzQzID49IGkgJiYgKytyLCB0ICs9IDQ7CiAgICAgIH0KICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICB2YXIgbm4sICQsIHgsIHRuLCBnbiwgaywgRCwgb3QsIHN0OwogICAgZnVuY3Rpb24gdXQobikgewogICAgICBubiA9IG4sIGUuSEVBUDggPSAkID0gbmV3IEludDhBcnJheShuKSwgZS5IRUFQMTYgPSB0biA9IG5ldyBJbnQxNkFycmF5KG4pLCBlLkhFQVAzMiA9IGsgPSBuZXcgSW50MzJBcnJheShuKSwgZS5IRUFQVTggPSB4ID0gbmV3IFVpbnQ4QXJyYXkobiksIGUuSEVBUFUxNiA9IGduID0gbmV3IFVpbnQxNkFycmF5KG4pLCBlLkhFQVBVMzIgPSBEID0gbmV3IFVpbnQzMkFycmF5KG4pLCBlLkhFQVBGMzIgPSBvdCA9IG5ldyBGbG9hdDMyQXJyYXkobiksIGUuSEVBUEY2NCA9IHN0ID0gbmV3IEZsb2F0NjRBcnJheShuKTsKICAgIH0KICAgIHZhciBjdCA9IGUuSU5JVElBTF9NRU1PUlkgfHwgMTY3NzcyMTY7CiAgICBlLndhc21NZW1vcnkgPyBVID0gZS53YXNtTWVtb3J5IDogVSA9IG5ldyBXZWJBc3NlbWJseS5NZW1vcnkoeyBpbml0aWFsOiBjdCAvIDY1NTM2LCBtYXhpbXVtOiAzMjc2OCB9KSwgVSAmJiAobm4gPSBVLmJ1ZmZlciksIGN0ID0gbm4uYnl0ZUxlbmd0aCwgdXQobm4pOwogICAgdmFyIGx0ID0gW10sIGZ0ID0gW10sIHRlID0gW10sIGR0ID0gW107CiAgICBmdW5jdGlvbiBlZSgpIHsKICAgICAgdmFyIG4gPSBlLnByZVJ1bi5zaGlmdCgpOwogICAgICBsdC51bnNoaWZ0KG4pOwogICAgfQogICAgdmFyIFggPSAwLCBsbiA9IG51bGw7CiAgICBlLnByZWxvYWRlZEltYWdlcyA9IHt9LCBlLnByZWxvYWRlZEF1ZGlvcyA9IHt9OwogICAgZnVuY3Rpb24gZm4obikgewogICAgICB0aHJvdyBlLm9uQWJvcnQgJiYgZS5vbkFib3J0KG4pLCBFKG4pLCBMbiA9ICEwLCBuID0gbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcigiYWJvcnQoIiArIG4gKyAiKS4gQnVpbGQgd2l0aCAtcyBBU1NFUlRJT05TPTEgZm9yIG1vcmUgaW5mby4iKSwgZyhuKSwgbjsKICAgIH0KICAgIGZ1bmN0aW9uIE5uKG4pIHsKICAgICAgdmFyIHQgPSBKOwogICAgICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID8gdC5zdGFydHNXaXRoKG4pIDogdC5pbmRleE9mKG4pID09PSAwOwogICAgfQogICAgZnVuY3Rpb24gaHQoKSB7CiAgICAgIHJldHVybiBObigiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LCIpOwogICAgfQogICAgdmFyIEogPSAic2FtLndhc20iOwogICAgaWYgKCFodCgpKSB7CiAgICAgIHZhciBtdCA9IEo7CiAgICAgIEogPSBlLmxvY2F0ZUZpbGUgPyBlLmxvY2F0ZUZpbGUobXQsIF8pIDogXyArIG10OwogICAgfQogICAgZnVuY3Rpb24geXQoKSB7CiAgICAgIHRyeSB7CiAgICAgICAgaWYgKE0pIHJldHVybiBuZXcgVWludDhBcnJheShNKTsKICAgICAgICBpZiAoUykgcmV0dXJuIFMoSik7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIGZuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiByZSgpIHsKICAgICAgcmV0dXJuIE0gfHwgIWIgJiYgIVQgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgTm4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oeXQpIDogZmV0Y2goSiwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spIHRocm93ICJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICciICsgSiArICInIjsKICAgICAgICByZXR1cm4gbi5hcnJheUJ1ZmZlcigpOwogICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4geXQoKTsKICAgICAgfSk7CiAgICB9CiAgICBmdW5jdGlvbiB3bihuKSB7CiAgICAgIGZvciAoOyAwIDwgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5zaGlmdCgpOwogICAgICAgIGlmICh0eXBlb2YgdCA9PSAiZnVuY3Rpb24iKSB0KGUpOwogICAgICAgIGVsc2UgewogICAgICAgICAgdmFyIHIgPSB0LkJhOwogICAgICAgICAgdHlwZW9mIHIgPT0gIm51bWJlciIgPyB0LnRhID09PSB2b2lkIDAgPyBIbigidiIsIHIpKCkgOiBIbigidmkiLCByKSh0LnRhKSA6IHIodC50YSA9PT0gdm9pZCAwID8gbnVsbCA6IHQudGEpOwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gSG4obiwgdCkgewogICAgICB2YXIgciA9IFtdOwogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgci5sZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOwogICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gaWUobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIGtbdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIGtbdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAga1t0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKCkgewogICAgICByZXR1cm4gMCA8IEFuLnhhOwogICAgfQogICAgZnVuY3Rpb24gVW4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIHB0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gUihuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgeFtuXTsgKSB0ICs9IHB0W3hbbisrXV07CiAgICAgIHJldHVybiB0OwogICAgfQogICAgdmFyIGVuID0ge30sIEsgPSB7fSwgX24gPSB7fTsKICAgIGZ1bmN0aW9uIERuKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIEJuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBEbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gem4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gQm4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIHJuID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBybihuKTsKICAgIH0KICAgIHZhciB2dCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgdGhyb3cgbmV3IHZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gYW4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGMpIHsKICAgICAgICBjID0gcihjKSwgYy5sZW5ndGggIT09IG4ubGVuZ3RoICYmIENuKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBuLmxlbmd0aDsgKyt5KSBCKG5beV0sIGNbeV0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihjKSB7CiAgICAgICAgX25bY10gPSB0OwogICAgICB9KTsKICAgICAgdmFyIHMgPSBBcnJheSh0Lmxlbmd0aCksIHUgPSBbXSwgbCA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihjLCB5KSB7CiAgICAgICAgSy5oYXNPd25Qcm9wZXJ0eShjKSA/IHNbeV0gPSBLW2NdIDogKHUucHVzaChjKSwgZW4uaGFzT3duUHJvcGVydHkoYykgfHwgKGVuW2NdID0gW10pLCBlbltjXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgc1t5XSA9IEtbY10sICsrbCwgbCA9PT0gdS5sZW5ndGggJiYgaShzKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCB1Lmxlbmd0aCA9PT0gMCAmJiBpKHMpOwogICAgfQogICAgZnVuY3Rpb24gQihuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgSy5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKSByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBLW25dID0gdCwgZGVsZXRlIF9uW25dLCBlbi5oYXNPd25Qcm9wZXJ0eShuKSAmJiAodCA9IGVuW25dLCBkZWxldGUgZW5bbl0sIHQuZm9yRWFjaChmdW5jdGlvbihzKSB7CiAgICAgICAgcygpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBhZShuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBWbihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIEduID0gITE7CiAgICBmdW5jdGlvbiBndCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIHd0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gZG4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKGRuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChHbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpIHIgPSByLnZhbHVlLCByLmRhID8gd3QocikgOiBjb25zb2xlLndhcm4oIm9iamVjdCBhbHJlYWR5IGRlbGV0ZWQ6ICIgKyByLmRhKTsKICAgICAgfSksIGRuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiBHbi5yZWdpc3Rlcih0LCB0LkEsIHQuQSksIHQ7CiAgICAgIH0sIGd0ID0gZnVuY3Rpb24odCkgewogICAgICAgIEduLnVucmVnaXN0ZXIodC5BKTsKICAgICAgfSwgZG4obikpOwogICAgfQogICAgdmFyIGhuID0gdm9pZCAwLCBtbiA9IFtdOwogICAgZnVuY3Rpb24gWW4oKSB7CiAgICAgIGZvciAoOyBtbi5sZW5ndGg7ICkgewogICAgICAgIHZhciBuID0gbW4ucG9wKCk7CiAgICAgICAgbi5BLm9hID0gITEsIG4uZGVsZXRlKCk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIEcoKSB7CiAgICB9CiAgICB2YXIgQXQgPSB7fTsKICAgIGZ1bmN0aW9uIG9lKG4sIHQpIHsKICAgICAgdmFyIHIgPSBlOwogICAgICBpZiAocltuXS5qYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdmFyIGkgPSByW25dOwogICAgICAgIHJbbl0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiByW25dLmphLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpIHx8IHYoIkZ1bmN0aW9uICciICsgdCArICInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdHMgb25lIG9mICgiICsgcltuXS5qYSArICIpISIpLCByW25dLmphW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfSwgcltuXS5qYSA9IFtdLCByW25dLmphW2kueWFdID0gaTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pID8gKChyID09PSB2b2lkIDAgfHwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIGVbbl0uamFbcl0gIT09IHZvaWQgMCkgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICciICsgbiArICInIHR3aWNlIiksIG9lKG4sIG4pLCBlLmhhc093blByb3BlcnR5KHIpICYmIHYoIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyByICsgIikhIiksIGVbbl0uamFbcl0gPSB0KSA6IChlW25dID0gdCwgciAhPT0gdm9pZCAwICYmIChlW25dLlJhID0gcikpOwogICAgfQogICAgZnVuY3Rpb24gc2UobiwgdCwgciwgaSwgcywgdSwgbCwgYykgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmNvbnN0cnVjdG9yID0gdCwgdGhpcy5tYSA9IHIsIHRoaXMubmEgPSBpLCB0aGlzLmlhID0gcywgdGhpcy5DYSA9IHUsIHRoaXMucWEgPSBsLCB0aGlzLkFhID0gYzsKICAgIH0KICAgIGZ1bmN0aW9uIFRuKG4sIHQsIHIpIHsKICAgICAgZm9yICg7IHQgIT09IHI7ICkgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiB1ZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgc24odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIFRuKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBjZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBzbih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSBUbih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpIHIgPSB0LkEuZ2E7CiAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIG9uKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGkuZGVsZXRlKCk7CiAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgIH0KICAgICAgcmV0dXJuIHI7CiAgICB9CiAgICBmdW5jdGlvbiBsZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgc24odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyB0LkEuZmEubmFtZSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIFRuKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBFbihuKSB7CiAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShEW24gPj4gMl0pOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCwgcikgewogICAgICByZXR1cm4gdCA9PT0gciA/IG4gOiByLmlhID09PSB2b2lkIDAgPyBudWxsIDogKG4gPSBDdChuLCB0LCByLmlhKSwgbiA9PT0gbnVsbCA/IG51bGwgOiByLkFhKG4pKTsKICAgIH0KICAgIHZhciB5biA9IHt9OwogICAgZnVuY3Rpb24gZmUobiwgdCkgewogICAgICBmb3IgKHQgPT09IHZvaWQgMCAmJiB2KCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsgbi5pYTsgKSB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiB5blt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIFBuKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBDbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIENuKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgZG4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiB6KG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IGNlIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyB1ZSA6IGxlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiBUdChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgQ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gWShuLCB0KSB7CiAgICAgIG4gPSBSKG4pOwogICAgICB2YXIgciA9IEhuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgRXQgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiBQdChuKSB7CiAgICAgIG4gPSBGdChuKTsKICAgICAgdmFyIHQgPSBSKG4pOwogICAgICByZXR1cm4gVihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIHBuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcih1KSB7CiAgICAgICAgc1t1XSB8fCBLW3VdIHx8IChfblt1XSA/IF9uW3VdLmZvckVhY2gocikgOiAoaS5wdXNoKHUpLCBzW3VdID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBzID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IEV0KG4gKyAiOiAiICsgaS5tYXAoUHQpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBPdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspIHIucHVzaChrWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIE9uKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gYnQobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIFRuKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBabiA9IFtdLCBGID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uICRuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1GW25dLkphID09PSAwICYmIChGW25dID0gdm9pZCAwLCBabi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIG9uKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IFpuLmxlbmd0aCA/IFpuLnBvcCgpIDogRi5sZW5ndGg7CiAgICAgICAgICByZXR1cm4gRlt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpIHJldHVybiAibnVsbCI7CiAgICAgIHZhciB0ID0gdHlwZW9mIG47CiAgICAgIHJldHVybiB0ID09PSAib2JqZWN0IiB8fCB0ID09PSAiYXJyYXkiIHx8IHQgPT09ICJmdW5jdGlvbiIgPyBuLnRvU3RyaW5nKCkgOiAiIiArIG47CiAgICB9CiAgICBmdW5jdGlvbiBkZShuLCB0KSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShvdFtyID4+IDJdKTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHN0W3IgPj4gM10pOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBmbG9hdCB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGhlKG4pIHsKICAgICAgdmFyIHQgPSBGdW5jdGlvbjsKICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBCbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIG1lKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiAkW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHhbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gdG5baSA+PiAxXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBnbltpID4+IDFdOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIGtbaSA+PiAyXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBEW2kgPj4gMl07CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGludGVnZXIgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBYbihuKSB7CiAgICAgIHJldHVybiBuIHx8IHYoIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9ICIgKyBuKSwgRltuXS52YWx1ZTsKICAgIH0KICAgIGZ1bmN0aW9uIFN0KG4sIHQpIHsKICAgICAgdmFyIHIgPSBLW25dOwogICAgICByZXR1cm4gciA9PT0gdm9pZCAwICYmIHYodCArICIgaGFzIHVua25vd24gdHlwZSAiICsgUHQobikpLCByOwogICAgfQogICAgdmFyIHllID0ge30sIE10ID0ge307CiAgICBmdW5jdGlvbiBXdCgpIHsKICAgICAgaWYgKCFKbikgewogICAgICAgIHZhciBuID0geyBVU0VSOiAid2ViX3VzZXIiLCBMT0dOQU1FOiAid2ViX3VzZXIiLCBQQVRIOiAiLyIsIFBXRDogIi8iLCBIT01FOiAiL2hvbWUvd2ViX3VzZXIiLCBMQU5HOiAodHlwZW9mIG5hdmlnYXRvciA9PSAib2JqZWN0IiAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gfHwgIkMiKS5yZXBsYWNlKCItIiwgIl8iKSArICIuVVRGLTgiLCBfOiBPIHx8ICIuL3RoaXMucHJvZ3JhbSIgfSwgdDsKICAgICAgICBmb3IgKHQgaW4gTXQpIG5bdF0gPSBNdFt0XTsKICAgICAgICB2YXIgciA9IFtdOwogICAgICAgIGZvciAodCBpbiBuKSByLnB1c2godCArICI9IiArIG5bdF0pOwogICAgICAgIEpuID0gcjsKICAgICAgfQogICAgICByZXR1cm4gSm47CiAgICB9CiAgICB2YXIgSm4sIGt0ID0gW107CiAgICBmdW5jdGlvbiBSdChuKSB7CiAgICAgIHZhciB0ID0ge30sIHI7CiAgICAgIGZvciAociBpbiBuKSAoZnVuY3Rpb24oaSkgewogICAgICAgIHZhciBzID0gbltpXTsKICAgICAgICB0W2ldID0gdHlwZW9mIHMgPT0gImZ1bmN0aW9uIiA/IGZ1bmN0aW9uKCkgewogICAgICAgICAga3QucHVzaChpKTsKICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgIHJldHVybiBzLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9IGZpbmFsbHkgewogICAgICAgICAgICBpZiAoTG4pIHJldHVybjsKICAgICAgICAgICAgdmFyIHUgPSBrdC5wb3AoKTsKICAgICAgICAgICAgcnQodSA9PT0gaSk7CiAgICAgICAgICB9CiAgICAgICAgfSA6IHM7CiAgICAgIH0pKHIpOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIGZvciAodmFyIEl0ID0gQXJyYXkoMjU2KSwgYm4gPSAwOyAyNTYgPiBibjsgKytibikgSXRbYm5dID0gU3RyaW5nLmZyb21DaGFyQ29kZShibik7CiAgICBwdCA9IEl0LCBybiA9IGUuQmluZGluZ0Vycm9yID0gem4oIkJpbmRpbmdFcnJvciIpLCB2dCA9IGUuSW50ZXJuYWxFcnJvciA9IHpuKCJJbnRlcm5hbEVycm9yIiksIEcucHJvdG90eXBlLmlzQWxpYXNPZiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEcgJiYgbiBpbnN0YW5jZW9mIEcpKSByZXR1cm4gITE7CiAgICAgIHZhciB0ID0gdGhpcy5BLmZhLmVhLCByID0gdGhpcy5BLmRhLCBpID0gbi5BLmZhLmVhOwogICAgICBmb3IgKG4gPSBuLkEuZGE7IHQuaWE7ICkgciA9IHQucWEociksIHQgPSB0LmlhOwogICAgICBmb3IgKDsgaS5pYTsgKSBuID0gaS5xYShuKSwgaSA9IGkuaWE7CiAgICAgIHJldHVybiB0ID09PSBpICYmIHIgPT09IG47CiAgICB9LCBHLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkgewogICAgICBpZiAodGhpcy5BLmRhIHx8IFZuKHRoaXMpLCB0aGlzLkEucGEpIHJldHVybiB0aGlzLkEuY291bnQudmFsdWUgKz0gMSwgdGhpczsKICAgICAgdmFyIG4gPSBkbihPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSwgeyBBOiB7IHZhbHVlOiBhZSh0aGlzLkEpIH0gfSkpOwogICAgICByZXR1cm4gbi5BLmNvdW50LnZhbHVlICs9IDEsIG4uQS5vYSA9ICExLCBuOwogICAgfSwgRy5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24oKSB7CiAgICAgIHRoaXMuQS5kYSB8fCBWbih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBndCh0aGlzKSwgd3QodGhpcy5BKSwgdGhpcy5BLnBhIHx8ICh0aGlzLkEuZ2EgPSB2b2lkIDAsIHRoaXMuQS5kYSA9IHZvaWQgMCk7CiAgICB9LCBHLnByb3RvdHlwZS5pc0RlbGV0ZWQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICF0aGlzLkEuZGE7CiAgICB9LCBHLnByb3RvdHlwZS5kZWxldGVMYXRlciA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gdGhpcy5BLmRhIHx8IFZuKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIG1uLnB1c2godGhpcyksIG1uLmxlbmd0aCA9PT0gMSAmJiBobiAmJiBobihZbiksIHRoaXMuQS5vYSA9ICEwLCB0aGlzOwogICAgfSwgei5wcm90b3R5cGUuRGEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHJldHVybiB0aGlzLndhICYmIChuID0gdGhpcy53YShuKSksIG47CiAgICB9LCB6LnByb3RvdHlwZS52YSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdGhpcy5uYSAmJiB0aGlzLm5hKG4pOwogICAgfSwgei5wcm90b3R5cGUuYXJnUGFja0FkdmFuY2UgPSA4LCB6LnByb3RvdHlwZS5yZWFkVmFsdWVGcm9tUG9pbnRlciA9IEVuLCB6LnByb3RvdHlwZS5kZWxldGVPYmplY3QgPSBmdW5jdGlvbihuKSB7CiAgICAgIG4gIT09IG51bGwgJiYgbi5kZWxldGUoKTsKICAgIH0sIHoucHJvdG90eXBlLmZyb21XaXJlVHlwZSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgZnVuY3Rpb24gdCgpIHsKICAgICAgICByZXR1cm4gdGhpcy5zYSA/IFBuKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMuR2EsIGRhOiByLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBQbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLCBkYTogbiB9KTsKICAgICAgfQogICAgICB2YXIgciA9IHRoaXMuRGEobik7CiAgICAgIGlmICghcikgcmV0dXJuIHRoaXMudmEobiksIG51bGw7CiAgICAgIHZhciBpID0gZmUodGhpcy5lYSwgcik7CiAgICAgIGlmIChpICE9PSB2b2lkIDApCiAgICAgICAgcmV0dXJuIGkuQS5jb3VudC52YWx1ZSA9PT0gMCA/IChpLkEuZGEgPSByLCBpLkEuZ2EgPSBuLCBpLmNsb25lKCkpIDogKGkgPSBpLmNsb25lKCksIHRoaXMudmEobiksIGkpOwogICAgICBpZiAoaSA9IHRoaXMuZWEuQ2EociksIGkgPSBBdFtpXSwgIWkpIHJldHVybiB0LmNhbGwodGhpcyk7CiAgICAgIGkgPSB0aGlzLnJhID8gaS56YSA6IGkucG9pbnRlclR5cGU7CiAgICAgIHZhciBzID0gQ3QociwgdGhpcy5lYSwgaS5lYSk7CiAgICAgIHJldHVybiBzID09PSBudWxsID8gdC5jYWxsKHRoaXMpIDogdGhpcy5zYSA/IFBuKGkuZWEubWEsIHsgZmE6IGksIGRhOiBzLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBQbigKICAgICAgICBpLmVhLm1hLAogICAgICAgIHsgZmE6IGksIGRhOiBzIH0KICAgICAgKTsKICAgIH0sIGUuZ2V0SW5oZXJpdGVkSW5zdGFuY2VDb3VudCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gT2JqZWN0LmtleXMoeW4pLmxlbmd0aDsKICAgIH0sIGUuZ2V0TGl2ZUluaGVyaXRlZEluc3RhbmNlcyA9IGZ1bmN0aW9uKCkgewogICAgICB2YXIgbiA9IFtdLCB0OwogICAgICBmb3IgKHQgaW4geW4pIHluLmhhc093blByb3BlcnR5KHQpICYmIG4ucHVzaCh5blt0XSk7CiAgICAgIHJldHVybiBuOwogICAgfSwgZS5mbHVzaFBlbmRpbmdEZWxldGVzID0gWW4sIGUuc2V0RGVsYXlGdW5jdGlvbiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgaG4gPSBuLCBtbi5sZW5ndGggJiYgaG4gJiYgaG4oWW4pOwogICAgfSwgRXQgPSBlLlVuYm91bmRUeXBlRXJyb3IgPSB6bigiVW5ib3VuZFR5cGVFcnJvciIpLCBlLmNvdW50X2VtdmFsX2hhbmRsZXMgPSBmdW5jdGlvbigpIHsKICAgICAgZm9yICh2YXIgbiA9IDAsIHQgPSA1OyB0IDwgRi5sZW5ndGg7ICsrdCkgRlt0XSAhPT0gdm9pZCAwICYmICsrbjsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmdldF9maXJzdF9lbXZhbCA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gNTsgbiA8IEYubGVuZ3RoOyArK24pIGlmIChGW25dICE9PSB2b2lkIDApIHJldHVybiBGW25dOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0sIGZ0LnB1c2goeyBCYTogZnVuY3Rpb24oKSB7CiAgICAgIHh0KCk7CiAgICB9IH0pOwogICAgdmFyIHBlID0gewogICAgICB6OiBmdW5jdGlvbihuKSB7CiAgICAgICAgcmV0dXJuIFNuKG4gKyAxNikgKyAxNjsKICAgICAgfSwKICAgICAgdTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHRocm93IG5ldyBpZShuKS5GYSh0LCByKSwgInVuY2F1Z2h0X2V4Y2VwdGlvbiIgaW4gQW4gPyBBbi54YSsrIDogQW4ueGEgPSAxLCBuOwogICAgICB9LAogICAgICB3OiBmdW5jdGlvbihuLCB0LCByLCBpLCBzKSB7CiAgICAgICAgdmFyIHUgPSBVbihyKTsKICAgICAgICB0ID0gUih0KSwgQihuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24obCkgewogICAgICAgICAgcmV0dXJuICEhbDsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihsLCBjKSB7CiAgICAgICAgICByZXR1cm4gYyA/IGkgOiBzOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24obCkgewogICAgICAgICAgaWYgKHIgPT09IDEpIHZhciBjID0gJDsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDIpIGMgPSB0bjsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDQpIGMgPSBrOwogICAgICAgICAgZWxzZSB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGJvb2xlYW4gdHlwZSBzaXplOiAiICsgdCk7CiAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUoY1tsID4+IHVdKTsKICAgICAgICB9LCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgaDogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSwgbCwgYywgeSwgZiwgZCwgbSwgdykgewogICAgICAgIGQgPSBSKGQpLCB1ID0gWShzLCB1KSwgYyAmJiAoYyA9IFkobCwgYykpLCBmICYmIChmID0gWSh5LCBmKSksIHcgPSBZKG0sIHcpOwogICAgICAgIHZhciBQID0gRG4oZCk7CiAgICAgICAgX3QoUCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBwbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbaV0pOwogICAgICAgIH0pLCBhbihbbiwgdCwgcl0sIGkgPyBbaV0gOiBbXSwgZnVuY3Rpb24ocCkgewogICAgICAgICAgaWYgKHAgPSBwWzBdLCBpKQogICAgICAgICAgICB2YXIgTiA9IHAuZWEsIFcgPSBOLm1hOwogICAgICAgICAgZWxzZSBXID0gRy5wcm90b3R5cGU7CiAgICAgICAgICBwID0gQm4oUCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykgIT09IEkpIHRocm93IG5ldyBybigiVXNlICduZXcnIHRvIGNvbnN0cnVjdCAiICsgZCk7CiAgICAgICAgICAgIGlmIChMLmxhID09PSB2b2lkIDApIHRocm93IG5ldyBybihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIganQgPSBMLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoanQgPT09IHZvaWQgMCkgdGhyb3cgbmV3IHJuKCJUcmllZCB0byBpbnZva2UgY3RvciBvZiAiICsgZCArICIgd2l0aCBpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0ZWQgKCIgKyBPYmplY3Qua2V5cyhMLmxhKS50b1N0cmluZygpICsgIikgcGFyYW1ldGVycyBpbnN0ZWFkISIpOwogICAgICAgICAgICByZXR1cm4ganQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICAgIH0pOwogICAgICAgICAgdmFyIEkgPSBPYmplY3QuY3JlYXRlKFcsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHAgfSB9KTsKICAgICAgICAgIHAucHJvdG90eXBlID0gSTsKICAgICAgICAgIHZhciBMID0gbmV3IHNlKGQsIHAsIEksIHcsIE4sIHUsIGMsIGYpOwogICAgICAgICAgTiA9IG5ldyB6KGQsIEwsICEwLCAhMSksIFcgPSBuZXcgeihkICsgIioiLCBMLCAhMSwgITEpOwogICAgICAgICAgdmFyIHZuID0gbmV3IHooZCArICIgY29uc3QqIiwgTCwgITEsICEwKTsKICAgICAgICAgIHJldHVybiBBdFtuXSA9IHsgcG9pbnRlclR5cGU6IFcsIHphOiB2biB9LCBUdChQLCBwKSwgW04sIFcsIHZuXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgZzogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSkgewogICAgICAgIHJ0KDAgPCB0KTsKICAgICAgICB2YXIgbCA9IE90KHQsIHIpOwogICAgICAgIHMgPSBZKGksIHMpOwogICAgICAgIHZhciBjID0gW3VdLCB5ID0gW107CiAgICAgICAgYW4oW10sIFtuXSwgZnVuY3Rpb24oZikgewogICAgICAgICAgZiA9IGZbMF07CiAgICAgICAgICB2YXIgZCA9ICJjb25zdHJ1Y3RvciAiICsgZi5uYW1lOwogICAgICAgICAgaWYgKGYuZWEubGEgPT09IHZvaWQgMCAmJiAoZi5lYS5sYSA9IFtdKSwgZi5lYS5sYVt0IC0gMV0gIT09IHZvaWQgMCkgdGhyb3cgbmV3IHJuKCJDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgY29uc3RydWN0b3JzIHdpdGggaWRlbnRpY2FsIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgKHQgLSAxKSArICIpIGZvciBjbGFzcyAnIiArIGYubmFtZSArICInISBPdmVybG9hZCByZXNvbHV0aW9uIGlzIGN1cnJlbnRseSBvbmx5IHBlcmZvcm1lZCB1c2luZyB0aGUgcGFyYW1ldGVyIGNvdW50LCBub3QgYWN0dWFsIHR5cGUgaW5mbyEiKTsKICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBwbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZi5uYW1lICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGwpOwogICAgICAgICAgfSwgYW4oW10sIGwsIGZ1bmN0aW9uKG0pIHsKICAgICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCAhPT0gdCAtIDEgJiYgdihkICsgIiBjYWxsZWQgd2l0aCAiICsgYXJndW1lbnRzLmxlbmd0aCArICIgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKHQgLSAxKSksIHkubGVuZ3RoID0gMCwgYy5sZW5ndGggPSB0OwogICAgICAgICAgICAgIGZvciAodmFyIHcgPSAxOyB3IDwgdDsgKyt3KSBjW3ddID0gbVt3XS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgeSwKICAgICAgICAgICAgICAgIGFyZ3VtZW50c1t3IC0gMV0KICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiB3ID0gcy5hcHBseShudWxsLCBjKSwgT24oeSksIG1bMF0uZnJvbVdpcmVUeXBlKHcpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSwgbCwgYywgeSwgZikgewogICAgICAgIHQgPSBSKHQpLCBzID0gWShpLCBzKSwgYW4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgbSA9IGQubmFtZSArICIuIiArIHQsIHcgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHBuKCJDYW5ub3QgYWNjZXNzICIgKyBtICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBsXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHkgPyB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBwbigiQ2Fubm90IGFjY2VzcyAiICsgbSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgbF0pOwogICAgICAgICAgfSA6IHcuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYobSArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCB3KSwgYW4oW10sIHkgPyBbciwgbF0gOiBbcl0sIGZ1bmN0aW9uKFApIHsKICAgICAgICAgICAgdmFyIHAgPSBQWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciBJID0gYnQodGhpcywgZCwgbSArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIHAuZnJvbVdpcmVUeXBlKHModSwgSSkpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAoeSkgewogICAgICAgICAgICAgIHkgPSBZKGMsIHkpOwogICAgICAgICAgICAgIHZhciBXID0gUFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKEkpIHsKICAgICAgICAgICAgICAgIHZhciBMID0gYnQodGhpcywgZCwgbSArICIgc2V0dGVyIiksIHZuID0gW107CiAgICAgICAgICAgICAgICB5KGYsIEwsIFcudG9XaXJlVHlwZSh2biwgSSkpLCBPbih2bik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBSKHQpLCBCKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IEZbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gJG4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIG9uKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogRW4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IFVuKHIpLCB0ID0gUih0KSwgQihuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIHMpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBzICE9ICJudW1iZXIiICYmIHR5cGVvZiBzICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBzbihzKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgICByZXR1cm4gczsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBkZSh0LCByKSwKICAgICAgICAgIGthOiBudWxsCiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGM6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIHMsIHUpIHsKICAgICAgICB2YXIgbCA9IE90KHQsIHIpOwogICAgICAgIG4gPSBSKG4pLCBzID0gWShpLCBzKSwgX3QobiwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBwbigiQ2Fubm90IGNhbGwgIiArIG4gKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgbCk7CiAgICAgICAgfSwgdCAtIDEpLCBhbihbXSwgbCwgZnVuY3Rpb24oYykgewogICAgICAgICAgdmFyIHkgPSBuLCBmID0gbjsKICAgICAgICAgIGMgPSBbY1swXSwgbnVsbF0uY29uY2F0KGMuc2xpY2UoMSkpOwogICAgICAgICAgdmFyIGQgPSBzLCBtID0gYy5sZW5ndGg7CiAgICAgICAgICAyID4gbSAmJiB2KCJhcmdUeXBlcyBhcnJheSBzaXplIG1pc21hdGNoISBNdXN0IGF0IGxlYXN0IGdldCByZXR1cm4gdmFsdWUgYW5kICd0aGlzJyB0eXBlcyEiKTsKICAgICAgICAgIGZvciAodmFyIHcgPSBjWzFdICE9PSBudWxsICYmICExLCBQID0gITEsIHAgPSAxOyBwIDwgYy5sZW5ndGg7ICsrcCkgaWYgKGNbcF0gIT09IG51bGwgJiYgY1twXS5rYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgICAgIFAgPSAhMDsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICB9CiAgICAgICAgICB2YXIgTiA9IGNbMF0ubmFtZSAhPT0gInZvaWQiLCBXID0gIiIsIEkgPSAiIjsKICAgICAgICAgIGZvciAocCA9IDA7IHAgPCBtIC0gMjsgKytwKSBXICs9IChwICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgcCwgSSArPSAocCAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHAgKyAiV2lyZWQiOwogICAgICAgICAgZiA9ICJyZXR1cm4gZnVuY3Rpb24gIiArIERuKGYpICsgIigiICsgVyArIGApIHsKaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IGAgKyAobSAtIDIpICsgYCkgewp0aHJvd0JpbmRpbmdFcnJvcignZnVuY3Rpb24gYCArIGYgKyAiIGNhbGxlZCB3aXRoICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAobSAtIDIpICsgYCBhcmdzIScpOwp9CmAsIFAgJiYgKGYgKz0gYHZhciBkZXN0cnVjdG9ycyA9IFtdOwpgKTsKICAgICAgICAgIHZhciBMID0gUCA/ICJkZXN0cnVjdG9ycyIgOiAibnVsbCI7CiAgICAgICAgICBmb3IgKFcgPSAidGhyb3dCaW5kaW5nRXJyb3IgaW52b2tlciBmbiBydW5EZXN0cnVjdG9ycyByZXRUeXBlIGNsYXNzUGFyYW0iLnNwbGl0KCIgIiksIGQgPSBbdiwgZCwgdSwgT24sIGNbMF0sIGNbMV1dLCB3ICYmIChmICs9ICJ2YXIgdGhpc1dpcmVkID0gY2xhc3NQYXJhbS50b1dpcmVUeXBlKCIgKyBMICsgYCwgdGhpcyk7CmApLCBwID0gMDsgcCA8IG0gLSAyOyArK3ApIGYgKz0gInZhciBhcmciICsgcCArICJXaXJlZCA9IGFyZ1R5cGUiICsgcCArICIudG9XaXJlVHlwZSgiICsgTCArICIsIGFyZyIgKyBwICsgIik7IC8vICIgKyBjW3AgKyAyXS5uYW1lICsgYApgLCBXLnB1c2goImFyZ1R5cGUiICsgcCksIGQucHVzaChjW3AgKyAyXSk7CiAgICAgICAgICBpZiAodyAmJiAoSSA9ICJ0aGlzV2lyZWQiICsgKDAgPCBJLmxlbmd0aCA/ICIsICIgOiAiIikgKyBJKSwgZiArPSAoTiA/ICJ2YXIgcnYgPSAiIDogIiIpICsgImludm9rZXIoZm4iICsgKDAgPCBJLmxlbmd0aCA/ICIsICIgOiAiIikgKyBJICsgYCk7CmAsIFApIGYgKz0gYHJ1bkRlc3RydWN0b3JzKGRlc3RydWN0b3JzKTsKYDsKICAgICAgICAgIGVsc2UgZm9yIChwID0gdyA/IDEgOiAyOyBwIDwgYy5sZW5ndGg7ICsrcCkgbSA9IHAgPT09IDEgPyAidGhpc1dpcmVkIiA6ICJhcmciICsgKHAgLSAyKSArICJXaXJlZCIsIGNbcF0ua2EgIT09IG51bGwgJiYgKGYgKz0gbSArICJfZHRvcigiICsgbSArICIpOyAvLyAiICsgY1twXS5uYW1lICsgYApgLCBXLnB1c2gobSArICJfZHRvciIpLCBkLnB1c2goY1twXS5rYSkpOwogICAgICAgICAgcmV0dXJuIE4gJiYgKGYgKz0gYHZhciByZXQgPSByZXRUeXBlLmZyb21XaXJlVHlwZShydik7CnJldHVybiByZXQ7CmApLCBXLnB1c2goZiArIGB9CmApLCBjID0gaGUoVykuYXBwbHkobnVsbCwgZCksIFR0KHksIGMsIHQgLSAxKSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGU6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIHMpIHsKICAgICAgICBmdW5jdGlvbiB1KGYpIHsKICAgICAgICAgIHJldHVybiBmOwogICAgICAgIH0KICAgICAgICB0ID0gUih0KSwgcyA9PT0gLTEgJiYgKHMgPSA0Mjk0OTY3Mjk1KTsKICAgICAgICB2YXIgbCA9IFVuKHIpOwogICAgICAgIGlmIChpID09PSAwKSB7CiAgICAgICAgICB2YXIgYyA9IDMyIC0gOCAqIHI7CiAgICAgICAgICB1ID0gZnVuY3Rpb24oZikgewogICAgICAgICAgICByZXR1cm4gZiA8PCBjID4+PiBjOwogICAgICAgICAgfTsKICAgICAgICB9CiAgICAgICAgdmFyIHkgPSB0LmluZGV4T2YoInVuc2lnbmVkIikgIT0gLTE7CiAgICAgICAgQihuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogdSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oZiwgZCkgewogICAgICAgICAgaWYgKHR5cGVvZiBkICE9ICJudW1iZXIiICYmIHR5cGVvZiBkICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBzbihkKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgaWYgKGQgPCBpIHx8IGQgPiBzKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXNzaW5nIGEgbnVtYmVyICInICsgc24oZCkgKyAnIiBmcm9tIEpTIHNpZGUgdG8gQy9DKysgc2lkZSB0byBhbiBhcmd1bWVudCBvZiB0eXBlICInICsgdCArICciLCB3aGljaCBpcyBvdXRzaWRlIHRoZSB2YWxpZCByYW5nZSBbJyArIGkgKyAiLCAiICsgcyArICJdISIpOwogICAgICAgICAgcmV0dXJuIHkgPyBkID4+PiAwIDogZCB8IDA7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBtZSh0LCBsLCBpICE9PSAwKSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGQ6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBmdW5jdGlvbiBpKHUpIHsKICAgICAgICAgIHUgPj49IDI7CiAgICAgICAgICB2YXIgbCA9IEQ7CiAgICAgICAgICByZXR1cm4gbmV3IHMobm4sIGxbdSArIDFdLCBsW3VdKTsKICAgICAgICB9CiAgICAgICAgdmFyIHMgPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gUihyKSwgQihuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFIodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEIobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgcyA9IERbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpIGZvciAodmFyIHUgPSBpICsgNCwgbCA9IDA7IGwgPD0gczsgKytsKSB7CiAgICAgICAgICAgICAgdmFyIGMgPSBpICsgNCArIGw7CiAgICAgICAgICAgICAgaWYgKGwgPT0gcyB8fCB4W2NdID09IDApIHsKICAgICAgICAgICAgICAgIGlmICh1KSB7CiAgICAgICAgICAgICAgICAgIHZhciB5ID0gdSwgZiA9IHgsIGQgPSB5ICsgKGMgLSB1KTsKICAgICAgICAgICAgICAgICAgZm9yICh1ID0geTsgZlt1XSAmJiAhKHUgPj0gZCk7ICkgKyt1OwogICAgICAgICAgICAgICAgICBpZiAoMTYgPCB1IC0geSAmJiBmLnN1YmFycmF5ICYmIGl0KSB5ID0gaXQuZGVjb2RlKGYuc3ViYXJyYXkoeSwgdSkpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAiIjsgeSA8IHU7ICkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBmW3krK107CiAgICAgICAgICAgICAgICAgICAgICBpZiAobSAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZbeSsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG0gJiAyMjQpID09IDE5MikgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChtICYgMzEpIDw8IDYgfCB3KTsKICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3krK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBtID0gKG0gJiAyNDApID09IDIyNCA/IChtICYgMTUpIDw8IDEyIHwgdyA8PCA2IHwgUCA6IChtICYgNykgPDwgMTggfCB3IDw8IDEyIHwgUCA8PCA2IHwgZlt5KytdICYgNjMsIDY1NTM2ID4gbSA/IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShtKSA6IChtIC09IDY1NTM2LCBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBtID4+IDEwLCA1NjMyMCB8IG0gJiAxMDIzKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobSk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHkgPSBkOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgeSA9ICIiOwogICAgICAgICAgICAgICAgaWYgKHAgPT09IHZvaWQgMCkgdmFyIHAgPSB5OwogICAgICAgICAgICAgICAgZWxzZSBwICs9ICJcMCIsIHAgKz0geTsKICAgICAgICAgICAgICAgIHUgPSBjICsgMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgZm9yIChwID0gQXJyYXkocyksIGwgPSAwOyBsIDwgczsgKytsKSBwW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZSh4W2kgKyA0ICsgbF0pOwogICAgICAgICAgICAgIHAgPSBwLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBWKGkpLCBwOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIHMpIHsKICAgICAgICAgICAgcyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChzID0gbmV3IFVpbnQ4QXJyYXkocykpOwogICAgICAgICAgICB2YXIgdSA9IHR5cGVvZiBzID09ICJzdHJpbmciOwogICAgICAgICAgICB1IHx8IHMgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IHMgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBzIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGwgPSAociAmJiB1ID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgcy5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIG0gPSBzLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBtICYmIDU3MzQzID49IG0gJiYgKG0gPSA2NTUzNiArICgobSAmIDEwMjMpIDw8IDEwKSB8IHMuY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBtID8gKytmIDogZiA9IDIwNDcgPj0gbSA/IGYgKyAyIDogNjU1MzUgPj0gbSA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIHMubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBjID0gU24oNCArIGwgKyAxKTsKICAgICAgICAgICAgaWYgKERbYyA+PiAyXSA9IGwsIHIgJiYgdSkgJHQocywgYyArIDQsIGwgKyAxKTsKICAgICAgICAgICAgZWxzZSBpZiAodSkgZm9yICh1ID0gMDsgdSA8IGw7ICsrdSkgewogICAgICAgICAgICAgIHZhciB5ID0gcy5jaGFyQ29kZUF0KHUpOwogICAgICAgICAgICAgIDI1NSA8IHkgJiYgKFYoYyksIHYoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpKSwgeFtjICsgNCArIHVdID0geTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGZvciAodSA9IDA7IHUgPCBsOyArK3UpIHhbYyArIDQgKyB1XSA9IHNbdV07CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaChWLCBjKSwgYzsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBFbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIFYoaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFIociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IFh0LCBzID0gSnQsIHUgPSBLdCwgbCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gZ247CiAgICAgICAgICB9LCBjID0gMTsKICAgICAgICBlbHNlIHQgPT09IDQgJiYgKGkgPSBRdCwgcyA9IHF0LCB1ID0gbmUsIGwgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiBEOwogICAgICAgIH0sIGMgPSAyKTsKICAgICAgICBCKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gRFt5ID4+IDJdLCBkID0gbCgpLCBtLCB3ID0geSArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgcCA9IHkgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFtwID4+IGNdID09IDApICYmICh3ID0gaSh3LCBwIC0gdyksIG0gPT09IHZvaWQgMCA/IG0gPSB3IDogKG0gKz0gIlwwIiwgbSArPSB3KSwgdyA9IHAgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiBWKHkpLCBtOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHksIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gdShmKSwgbSA9IFNuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gRFttID4+IDJdID0gZCA+PiBjLCBzKGYsIG0gKyA0LCBkICsgdCksIHkgIT09IG51bGwgJiYgeS5wdXNoKFYsIG0pLCBtOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogRW4sIGthOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBWKHkpOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgQihuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSBYbihuKSwgdCA9IFN0KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBzID0gb24oaSk7CiAgICAgICAgcmV0dXJuIGtbciA+PiAyXSA9IHMsIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogJG4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IFhuKG4pLCB0ID0gWG4odCksIG9uKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSB5ZVtuXTsKICAgICAgICByZXR1cm4gb24odCA9PT0gdm9pZCAwID8gUihuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgT24oRltuXS52YWx1ZSksICRuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBTdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIG9uKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBmbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgeC5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0geC5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKSByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBVLmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBubi5ieXRlTGVuZ3RoICsgNjU1MzUgPj4+IDE2KSwgdXQoVS5idWZmZXIpOwogICAgICAgICAgICAgIHZhciBzID0gMTsKICAgICAgICAgICAgICBicmVhayBuOwogICAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgfQogICAgICAgICAgICBzID0gdm9pZCAwOwogICAgICAgICAgfQogICAgICAgICAgaWYgKHMpIHJldHVybiAhMDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuICExOwogICAgICB9LAogICAgICBzOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSAwOwogICAgICAgIHJldHVybiBXdCgpLmZvckVhY2goZnVuY3Rpb24oaSwgcykgewogICAgICAgICAgdmFyIHUgPSB0ICsgcjsKICAgICAgICAgIGZvciAocyA9IGtbbiArIDQgKiBzID4+IDJdID0gdSwgdSA9IDA7IHUgPCBpLmxlbmd0aDsgKyt1KSAkW3MrKyA+PiAwXSA9IGkuY2hhckNvZGVBdCh1KTsKICAgICAgICAgICRbcyA+PiAwXSA9IDAsIHIgKz0gaS5sZW5ndGggKyAxOwogICAgICAgIH0pLCAwOwogICAgICB9LAogICAgICB0OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSBXdCgpOwogICAgICAgIGtbbiA+PiAyXSA9IHIubGVuZ3RoOwogICAgICAgIHZhciBpID0gMDsKICAgICAgICByZXR1cm4gci5mb3JFYWNoKGZ1bmN0aW9uKHMpIHsKICAgICAgICAgIGkgKz0gcy5sZW5ndGggKyAxOwogICAgICAgIH0pLCBrW3QgPj4gMl0gPSBpLCAwOwogICAgICB9LAogICAgICBhOiBVCiAgICB9OwogICAgKGZ1bmN0aW9uKCkgewogICAgICBmdW5jdGlvbiBuKHUpIHsKICAgICAgICB1ID0gdS5leHBvcnRzLCB1ID0gUnQodSksIGUuYXNtID0gdSwgWC0tLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFgpLCBYID09IDAgJiYgbG4gJiYgKHUgPSBsbiwgbG4gPSBudWxsLCB1KCkpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHQodSkgewogICAgICAgIG4odS5pbnN0YW5jZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcih1KSB7CiAgICAgICAgcmV0dXJuIHJlKCkudGhlbihmdW5jdGlvbihsKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUobCwgaSk7CiAgICAgICAgfSkudGhlbih1LCBmdW5jdGlvbihsKSB7CiAgICAgICAgICBFKCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAiICsgbCksIGZuKGwpOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIHZhciBpID0geyBhOiBwZSB9OwogICAgICBpZiAoWCsrLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFgpLCBlLmluc3RhbnRpYXRlV2FzbSkgdHJ5IHsKICAgICAgICB2YXIgcyA9IGUuaW5zdGFudGlhdGVXYXNtKGksIG4pOwogICAgICAgIHJldHVybiBzID0gUnQocyk7CiAgICAgIH0gY2F0Y2ggKHUpIHsKICAgICAgICByZXR1cm4gRSgiTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogIiArIHUpLCAhMTsKICAgICAgfQogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKE0gfHwgdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nICE9ICJmdW5jdGlvbiIgfHwgaHQoKSB8fCBObigiZmlsZTovLyIpIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iKSByZXR1cm4gcih0KTsKICAgICAgICBmZXRjaChKLCB7IGNyZWRlbnRpYWxzOiAic2FtZS1vcmlnaW4iIH0pLnRoZW4oZnVuY3Rpb24odSkgewogICAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHUsIGkpLnRoZW4odCwgZnVuY3Rpb24obCkgewogICAgICAgICAgICByZXR1cm4gRSgid2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6ICIgKyBsKSwgRSgiZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb24iKSwgcih0KTsKICAgICAgICAgIH0pOwogICAgICAgIH0pOwogICAgICB9KCksIHt9OwogICAgfSkoKTsKICAgIHZhciB4dCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoeHQgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGUuYXNtLkIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBTbiA9IGUuX21hbGxvYyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFNuID0gZS5fbWFsbG9jID0gZS5hc20uQykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIFYgPSBlLl9mcmVlID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoViA9IGUuX2ZyZWUgPSBlLmFzbS5EKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgRnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZS5hc20uRSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICBlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBlLmFzbS5GKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpID0gZS5hc20uRykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aSA9IGUuYXNtLkgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9pID0gZS5hc20uSSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpID0gZS5hc20uSikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWkgPSBlLmFzbS5LKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2ZpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9maWkgPSBlLmFzbS5MKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWYgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpZiA9IGUuYXNtLk0pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWkgPSBlLmFzbS5OKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaSA9IGUuYXNtLk8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaSA9IGUuYXNtLlApLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaSA9IGUuYXNtLlEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaWkgPSBlLmFzbS5SKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpID0gZS5hc20uUykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZS5hc20uVCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGUuYXNtLlUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBlLmFzbS5WKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGUuYXNtLlcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGUuYXNtLlgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpID0gZS5hc20uWSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaSA9IGUuYXNtLlopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpID0gZS5hc20uXykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGUuYXNtLiQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZS5hc20uYWEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBlLmFzbS5iYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBlLmFzbS5jYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICB2YXIgTW47CiAgICBsbiA9IGZ1bmN0aW9uIG4oKSB7CiAgICAgIE1uIHx8IEtuKCksIE1uIHx8IChsbiA9IG4pOwogICAgfTsKICAgIGZ1bmN0aW9uIEtuKCkgewogICAgICBmdW5jdGlvbiBuKCkgewogICAgICAgIGlmICghTW4gJiYgKE1uID0gITAsIGUuY2FsbGVkUnVuID0gITAsICFMbikpIHsKICAgICAgICAgIGlmICh3bihmdCksIHduKHRlKSwgaChlKSwgZS5vblJ1bnRpbWVJbml0aWFsaXplZCAmJiBlLm9uUnVudGltZUluaXRpYWxpemVkKCksIGUucG9zdFJ1bikgZm9yICh0eXBlb2YgZS5wb3N0UnVuID09ICJmdW5jdGlvbiIgJiYgKGUucG9zdFJ1biA9IFtlLnBvc3RSdW5dKTsgZS5wb3N0UnVuLmxlbmd0aDsgKSB7CiAgICAgICAgICAgIHZhciB0ID0gZS5wb3N0UnVuLnNoaWZ0KCk7CiAgICAgICAgICAgIGR0LnVuc2hpZnQodCk7CiAgICAgICAgICB9CiAgICAgICAgICB3bihkdCk7CiAgICAgICAgfQogICAgICB9CiAgICAgIGlmICghKDAgPCBYKSkgewogICAgICAgIGlmIChlLnByZVJ1bikgZm9yICh0eXBlb2YgZS5wcmVSdW4gPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVSdW4gPSBbZS5wcmVSdW5dKTsgZS5wcmVSdW4ubGVuZ3RoOyApIGVlKCk7CiAgICAgICAgd24obHQpLCAwIDwgWCB8fCAoZS5zZXRTdGF0dXMgPyAoZS5zZXRTdGF0dXMoIlJ1bm5pbmcuLi4iKSwgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGUuc2V0U3RhdHVzKCIiKTsKICAgICAgICAgIH0sIDEpLCBuKCk7CiAgICAgICAgfSwgMSkpIDogbigpKTsKICAgICAgfQogICAgfQogICAgaWYgKGUucnVuID0gS24sIGUucHJlSW5pdCkgZm9yICh0eXBlb2YgZS5wcmVJbml0ID09ICJmdW5jdGlvbiIgJiYgKGUucHJlSW5pdCA9IFtlLnByZUluaXRdKTsgMCA8IGUucHJlSW5pdC5sZW5ndGg7ICkgZS5wcmVJbml0LnBvcCgpKCk7CiAgICByZXR1cm4gS24oKSwgby5yZWFkeTsKICB9Owp9KCk7CmNsYXNzIGogZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgaCkgewogICAgc3VwZXIoZSk7CiAgICBRbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IGg7CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiBqKQogICAgICByZXR1cm4gZTsKICAgIGxldCBoOwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIGggPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICBoID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgaCA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgaCA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgaCA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyBqKGgsIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgaikKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCBoID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgaihoKTsKICB9Cn0KY29uc3QgX2UgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfTsKdmFyIFosIHEsIGNuOwpjbGFzcyBDZSB7CiAgY29uc3RydWN0b3IobywgZSkgewogICAgV24odGhpcywgWik7CiAgICBXbih0aGlzLCBxKTsKICAgIFduKHRoaXMsIGNuKTsKICAgIGtuKHRoaXMsIFosIG8pLCBrbih0aGlzLCBxLCB0aGlzLmFsbG9jYXRlKGUubGVuZ3RoICogZS5CWVRFU19QRVJfRUxFTUVOVCkpLCBrbih0aGlzLCBjbiwgdGhpcy5hbGxvY2F0ZShlLmxlbmd0aCAqIGUuQllURVNfUEVSX0VMRU1FTlQpKTsKICB9CiAgZ2V0IHJnYmFJbWFnZVBvaW50ZXIoKSB7CiAgICByZXR1cm4gSCh0aGlzLCBxKTsKICB9CiAgZ2V0IGJncjBJbWFnZVBvaW50ZXIoKSB7CiAgICByZXR1cm4gSCh0aGlzLCBjbik7CiAgfQogIGFsbG9jYXRlKG8pIHsKICAgIHJldHVybiBIKHRoaXMsIFopLl9tYWxsb2Mobyk7CiAgfQogIGZyZWUoKSB7CiAgICBIKHRoaXMsIFopLl9mcmVlKEgodGhpcywgcSkpLCBIKHRoaXMsIFopLl9mcmVlKEgodGhpcywgY24pKTsKICB9CiAgd3JpdGVEYXRhVG9NZW1vcnkobykgewogICAgSCh0aGlzLCBaKS5IRUFQVTguc2V0KG8sIEgodGhpcywgcSkpOwogIH0KfQpaID0gbmV3IFdlYWtNYXAoKSwgcSA9IG5ldyBXZWFrTWFwKCksIGNuID0gbmV3IFdlYWtNYXAoKTsKY2xhc3MgVGUgewogIGNvbnN0cnVjdG9yKCkgewogICAgUW4odGhpcywgInNhbVdhc21Nb2R1bGUiKTsKICB9CiAgZ2V0T3ZlcnJpZGRlbk1vZHVsZXMobywgZSkgewogICAgcmV0dXJuIHsKICAgICAgbG9jYXRlRmlsZTogKGgpID0+IG5ldyBVUkwoZSB8fCBoLCBvKS5ocmVmCiAgICB9OwogIH0KICBhc3luYyBoYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKG8sIGUpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IGggPSBhd2FpdCBmZXRjaChvKTsKICAgICAgaWYgKCFoLm9rKQogICAgICAgIHRocm93IG5ldyBqKAogICAgICAgICAgYFRoZSBwYXRoIHRvICR7ZX0gaXMgaW5jb3JyZWN0IG9yIHRoZSBtb2R1bGUgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7b31gCiAgICAgICAgKTsKICAgICAgY29uc3QgZyA9IGF3YWl0IGguYXJyYXlCdWZmZXIoKTsKICAgICAgaWYgKCFXZWJBc3NlbWJseS52YWxpZGF0ZShnKSkKICAgICAgICB0aHJvdyBuZXcgaigKICAgICAgICAgIGBUaGUgcHJvdmlkZWQgJHtlfSBpcyBub3QgYSB2YWxpZCBXQVNNIG1vZHVsZS4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7b31gCiAgICAgICAgKTsKICAgIH0gY2F0Y2ggKGgpIHsKICAgICAgaWYgKGggaW5zdGFuY2VvZiBqKQogICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICAgICAiWW91IGNhbiBmaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIGhvc3Qgd2FzbSBmaWxlcyBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuaW5ub3ZhdHJpY3MuY29tL2RpZ2l0YWwtb25ib2FyZGluZy90ZWNobmljYWwvcmVtb3RlL2RvdC13ZWItZG9jdW1lbnQvbGF0ZXN0L2RvY3VtZW50YXRpb24vI19ob3N0aW5nX3NhbV93YXNtIgogICAgICAgICksIGg7CiAgICB9CiAgfQogIGFzeW5jIGdldFdhc21GaWxlTmFtZSgpIHsKICAgIHJldHVybiBhd2FpdCB3ZSgpID8gSHQuc2ltZCA6IEh0LnNhbTsKICB9CiAgYXN5bmMgaW5pdFNhbU1vZHVsZShvLCBlID0gIi93YXNtIikgewogICAgaWYgKHRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgcmV0dXJuOwogICAgY29uc3QgaCA9IGF3YWl0IHRoaXMuZ2V0V2FzbUZpbGVOYW1lKCksIGcgPSBgJHtlfS8ke2h9YDsKICAgIHRyeSB7CiAgICAgIHRoaXMuc2FtV2FzbU1vZHVsZSA9IGF3YWl0IEFlKHRoaXMuZ2V0T3ZlcnJpZGRlbk1vZHVsZXMobywgZykpOwogICAgfSBjYXRjaCB7CiAgICAgIHRocm93IGF3YWl0IHRoaXMuaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZShnLCBoKSwgbmV3IGooIkNvdWxkIG5vdCBpbml0IGRldGVjdG9yLiIpOwogICAgfQogIH0KICBhc3luYyBnZXRTYW1WZXJzaW9uKCkgewogICAgdmFyIGU7CiAgICBjb25zdCBvID0gYXdhaXQgKChlID0gdGhpcy5zYW1XYXNtTW9kdWxlKSA9PSBudWxsID8gdm9pZCAwIDogZS5nZXRJbmZvU3RyaW5nKCkpOwogICAgcmV0dXJuIG8gPT0gbnVsbCA/IHZvaWQgMCA6IG8udHJpbSgpOwogIH0KICAvKgogICAqIEluIFRTIDUuMi4wIHdhcyBhZGRlZCBzcGVjaWFsIGtleXdvcmQgInVzaW5nIiB3aGljaCBjb3VsZCBiZSBwZXJmZWN0IGZvciB0aGlzIGNhc2UuCiAgICogVW5mb3J0dW5hdGVseSwgdml0ZSBwcmVhY3QgcGx1Z2luIGRvZXMgbm90IHN1cHBvcnQgdGhpcyB2ZXJzaW9uIG9mIFRTIHlldC4KICAgKiBDaGVjayBwb3NzaWJpbGl0eSBvZiB1c2luZyAidXNpbmciIGtleXdvcmQgd2hlbiB2aXRlIHByZWFjdCBwbHVnaW4gdXBkYXRlcwogICAqLwogIHdyaXRlSW1hZ2VUb01lbW9yeShvKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IGooIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIGNvbnN0IGUgPSBuZXcgQ2UodGhpcy5zYW1XYXNtTW9kdWxlLCBvKTsKICAgIHJldHVybiBlLndyaXRlRGF0YVRvTWVtb3J5KG8pLCBlOwogIH0KICBjb252ZXJ0VG9TYW1Db2xvckltYWdlKG8sIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgaigiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgY29uc3QgaCA9IHRoaXMud3JpdGVJbWFnZVRvTWVtb3J5KG8pOwogICAgcmV0dXJuIHRoaXMuc2FtV2FzbU1vZHVsZS5jb252ZXJ0VG9TYW1Db2xvckltYWdlKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgaC5yZ2JhSW1hZ2VQb2ludGVyLAogICAgICBfZS5SR0JBLAogICAgICBoLmJncjBJbWFnZVBvaW50ZXIKICAgICksIGg7CiAgfQp9CmNvbnN0IEVlID0gKGEpID0+IE51bWJlci5wYXJzZUZsb2F0KGEudG9GaXhlZCgzKSksIFBlID0gKGEsIG8pID0+IE1hdGgubWluKGEsIG8pOwovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQwogKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMAogKi8KY29uc3QgRHQgPSBTeW1ib2woIkNvbWxpbmsucHJveHkiKSwgT2UgPSBTeW1ib2woIkNvbWxpbmsuZW5kcG9pbnQiKSwgYmUgPSBTeW1ib2woIkNvbWxpbmsucmVsZWFzZVByb3h5IiksIHFuID0gU3ltYm9sKCJDb21saW5rLmZpbmFsaXplciIpLCBJbiA9IFN5bWJvbCgiQ29tbGluay50aHJvd24iKSwgQnQgPSAoYSkgPT4gdHlwZW9mIGEgPT0gIm9iamVjdCIgJiYgYSAhPT0gbnVsbCB8fCB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iLCBTZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBCdChhKSAmJiBhW0R0XSwKICBzZXJpYWxpemUoYSkgewogICAgY29uc3QgeyBwb3J0MTogbywgcG9ydDI6IGUgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgcmV0dXJuIGV0KGEsIG8pLCBbZSwgW2VdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHJldHVybiBhLnN0YXJ0KCksIFJlKGEpOwogIH0KfSwgTWUgPSB7CiAgY2FuSGFuZGxlOiAoYSkgPT4gQnQoYSkgJiYgSW4gaW4gYSwKICBzZXJpYWxpemUoeyB2YWx1ZTogYSB9KSB7CiAgICBsZXQgbzsKICAgIHJldHVybiBhIGluc3RhbmNlb2YgRXJyb3IgPyBvID0gewogICAgICBpc0Vycm9yOiAhMCwKICAgICAgdmFsdWU6IHsKICAgICAgICBtZXNzYWdlOiBhLm1lc3NhZ2UsCiAgICAgICAgbmFtZTogYS5uYW1lLAogICAgICAgIHN0YWNrOiBhLnN0YWNrCiAgICAgIH0KICAgIH0gOiBvID0geyBpc0Vycm9yOiAhMSwgdmFsdWU6IGEgfSwgW28sIFtdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHRocm93IGEuaXNFcnJvciA/IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGEudmFsdWUubWVzc2FnZSksIGEudmFsdWUpIDogYS52YWx1ZTsKICB9Cn0sIHp0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoWwogIFsicHJveHkiLCBTZV0sCiAgWyJ0aHJvdyIsIE1lXQpdKTsKZnVuY3Rpb24gV2UoYSwgbykgewogIGZvciAoY29uc3QgZSBvZiBhKQogICAgaWYgKG8gPT09IGUgfHwgZSA9PT0gIioiIHx8IGUgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZS50ZXN0KG8pKQogICAgICByZXR1cm4gITA7CiAgcmV0dXJuICExOwp9CmZ1bmN0aW9uIGV0KGEsIG8gPSBnbG9iYWxUaGlzLCBlID0gWyIqIl0pIHsKICBvLmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBoKGcpIHsKICAgIGlmICghZyB8fCAhZy5kYXRhKQogICAgICByZXR1cm47CiAgICBpZiAoIVdlKGUsIGcub3JpZ2luKSkgewogICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgb3JpZ2luICcke2cub3JpZ2lufScgZm9yIGNvbWxpbmsgcHJveHlgKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgY29uc3QgeyBpZDogQywgdHlwZTogQSwgcGF0aDogTyB9ID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFtdIH0sIGcuZGF0YSksIGIgPSAoZy5kYXRhLmFyZ3VtZW50TGlzdCB8fCBbXSkubWFwKFEpOwogICAgbGV0IFQ7CiAgICB0cnkgewogICAgICBjb25zdCBfID0gTy5zbGljZSgwLCAtMSkucmVkdWNlKChFLCBNKSA9PiBFW01dLCBhKSwgUyA9IE8ucmVkdWNlKChFLCBNKSA9PiBFW01dLCBhKTsKICAgICAgc3dpdGNoIChBKSB7CiAgICAgICAgY2FzZSAiR0VUIjoKICAgICAgICAgIFQgPSBTOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiU0VUIjoKICAgICAgICAgIF9bTy5zbGljZSgtMSlbMF1dID0gUShnLmRhdGEudmFsdWUpLCBUID0gITA7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJBUFBMWSI6CiAgICAgICAgICBUID0gUy5hcHBseShfLCBiKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkNPTlNUUlVDVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IEUgPSBuZXcgUyguLi5iKTsKICAgICAgICAgICAgVCA9IExlKEUpOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiRU5EUE9JTlQiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCB7IHBvcnQxOiBFLCBwb3J0MjogTSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICAgICAgICAgIGV0KGEsIE0pLCBUID0gamUoRSwgW0VdKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlJFTEVBU0UiOgogICAgICAgICAgVCA9IHZvaWQgMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICByZXR1cm47CiAgICAgIH0KICAgIH0gY2F0Y2ggKF8pIHsKICAgICAgVCA9IHsgdmFsdWU6IF8sIFtJbl06IDAgfTsKICAgIH0KICAgIFByb21pc2UucmVzb2x2ZShUKS5jYXRjaCgoXykgPT4gKHsgdmFsdWU6IF8sIFtJbl06IDAgfSkpLnRoZW4oKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gam4oXyk7CiAgICAgIG8ucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBTKSwgeyBpZDogQyB9KSwgRSksIEEgPT09ICJSRUxFQVNFIiAmJiAoby5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgaCksIFZ0KG8pLCBxbiBpbiBhICYmIHR5cGVvZiBhW3FuXSA9PSAiZnVuY3Rpb24iICYmIGFbcW5dKCkpOwogICAgfSkuY2F0Y2goKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gam4oewogICAgICAgIHZhbHVlOiBuZXcgVHlwZUVycm9yKCJVbnNlcmlhbGl6YWJsZSByZXR1cm4gdmFsdWUiKSwKICAgICAgICBbSW5dOiAwCiAgICAgIH0pOwogICAgICBvLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUyksIHsgaWQ6IEMgfSksIEUpOwogICAgfSk7CiAgfSksIG8uc3RhcnQgJiYgby5zdGFydCgpOwp9CmZ1bmN0aW9uIGtlKGEpIHsKICByZXR1cm4gYS5jb25zdHJ1Y3Rvci5uYW1lID09PSAiTWVzc2FnZVBvcnQiOwp9CmZ1bmN0aW9uIFZ0KGEpIHsKICBrZShhKSAmJiBhLmNsb3NlKCk7Cn0KZnVuY3Rpb24gUmUoYSwgbykgewogIHJldHVybiB0dChhLCBbXSwgbyk7Cn0KZnVuY3Rpb24gUm4oYSkgewogIGlmIChhKQogICAgdGhyb3cgbmV3IEVycm9yKCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGUiKTsKfQpmdW5jdGlvbiBHdChhKSB7CiAgcmV0dXJuIHVuKGEsIHsKICAgIHR5cGU6ICJSRUxFQVNFIgogIH0pLnRoZW4oKCkgPT4gewogICAgVnQoYSk7CiAgfSk7Cn0KY29uc3QgeG4gPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgRm4gPSAiRmluYWxpemF0aW9uUmVnaXN0cnkiIGluIGdsb2JhbFRoaXMgJiYgbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChhKSA9PiB7CiAgY29uc3QgbyA9ICh4bi5nZXQoYSkgfHwgMCkgLSAxOwogIHhuLnNldChhLCBvKSwgbyA9PT0gMCAmJiBHdChhKTsKfSk7CmZ1bmN0aW9uIEllKGEsIG8pIHsKICBjb25zdCBlID0gKHhuLmdldChvKSB8fCAwKSArIDE7CiAgeG4uc2V0KG8sIGUpLCBGbiAmJiBGbi5yZWdpc3RlcihhLCBvLCBhKTsKfQpmdW5jdGlvbiB4ZShhKSB7CiAgRm4gJiYgRm4udW5yZWdpc3RlcihhKTsKfQpmdW5jdGlvbiB0dChhLCBvID0gW10sIGUgPSBmdW5jdGlvbigpIHsKfSkgewogIGxldCBoID0gITE7CiAgY29uc3QgZyA9IG5ldyBQcm94eShlLCB7CiAgICBnZXQoQywgQSkgewogICAgICBpZiAoUm4oaCksIEEgPT09IGJlKQogICAgICAgIHJldHVybiAoKSA9PiB7CiAgICAgICAgICB4ZShnKSwgR3QoYSksIGggPSAhMDsKICAgICAgICB9OwogICAgICBpZiAoQSA9PT0gInRoZW4iKSB7CiAgICAgICAgaWYgKG8ubGVuZ3RoID09PSAwKQogICAgICAgICAgcmV0dXJuIHsgdGhlbjogKCkgPT4gZyB9OwogICAgICAgIGNvbnN0IE8gPSB1bihhLCB7CiAgICAgICAgICB0eXBlOiAiR0VUIiwKICAgICAgICAgIHBhdGg6IG8ubWFwKChiKSA9PiBiLnRvU3RyaW5nKCkpCiAgICAgICAgfSkudGhlbihRKTsKICAgICAgICByZXR1cm4gTy50aGVuLmJpbmQoTyk7CiAgICAgIH0KICAgICAgcmV0dXJuIHR0KGEsIFsuLi5vLCBBXSk7CiAgICB9LAogICAgc2V0KEMsIEEsIE8pIHsKICAgICAgUm4oaCk7CiAgICAgIGNvbnN0IFtiLCBUXSA9IGpuKE8pOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJTRVQiLAogICAgICAgIHBhdGg6IFsuLi5vLCBBXS5tYXAoKF8pID0+IF8udG9TdHJpbmcoKSksCiAgICAgICAgdmFsdWU6IGIKICAgICAgfSwgVCkudGhlbihRKTsKICAgIH0sCiAgICBhcHBseShDLCBBLCBPKSB7CiAgICAgIFJuKGgpOwogICAgICBjb25zdCBiID0gb1tvLmxlbmd0aCAtIDFdOwogICAgICBpZiAoYiA9PT0gT2UpCiAgICAgICAgcmV0dXJuIHVuKGEsIHsKICAgICAgICAgIHR5cGU6ICJFTkRQT0lOVCIKICAgICAgICB9KS50aGVuKFEpOwogICAgICBpZiAoYiA9PT0gImJpbmQiKQogICAgICAgIHJldHVybiB0dChhLCBvLnNsaWNlKDAsIC0xKSk7CiAgICAgIGNvbnN0IFtULCBfXSA9IFV0KE8pOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJBUFBMWSIsCiAgICAgICAgcGF0aDogby5tYXAoKFMpID0+IFMudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIF8pLnRoZW4oUSk7CiAgICB9LAogICAgY29uc3RydWN0KEMsIEEpIHsKICAgICAgUm4oaCk7CiAgICAgIGNvbnN0IFtPLCBiXSA9IFV0KEEpOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJDT05TVFJVQ1QiLAogICAgICAgIHBhdGg6IG8ubWFwKChUKSA9PiBULnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogTwogICAgICB9LCBiKS50aGVuKFEpOwogICAgfQogIH0pOwogIHJldHVybiBJZShnLCBhKSwgZzsKfQpmdW5jdGlvbiBGZShhKSB7CiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGEpOwp9CmZ1bmN0aW9uIFV0KGEpIHsKICBjb25zdCBvID0gYS5tYXAoam4pOwogIHJldHVybiBbby5tYXAoKGUpID0+IGVbMF0pLCBGZShvLm1hcCgoZSkgPT4gZVsxXSkpXTsKfQpjb25zdCBZdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpOwpmdW5jdGlvbiBqZShhLCBvKSB7CiAgcmV0dXJuIFl0LnNldChhLCBvKSwgYTsKfQpmdW5jdGlvbiBMZShhKSB7CiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYSwgeyBbRHRdOiAhMCB9KTsKfQpmdW5jdGlvbiBqbihhKSB7CiAgZm9yIChjb25zdCBbbywgZV0gb2YgenQpCiAgICBpZiAoZS5jYW5IYW5kbGUoYSkpIHsKICAgICAgY29uc3QgW2gsIGddID0gZS5zZXJpYWxpemUoYSk7CiAgICAgIHJldHVybiBbCiAgICAgICAgewogICAgICAgICAgdHlwZTogIkhBTkRMRVIiLAogICAgICAgICAgbmFtZTogbywKICAgICAgICAgIHZhbHVlOiBoCiAgICAgICAgfSwKICAgICAgICBnCiAgICAgIF07CiAgICB9CiAgcmV0dXJuIFsKICAgIHsKICAgICAgdHlwZTogIlJBVyIsCiAgICAgIHZhbHVlOiBhCiAgICB9LAogICAgWXQuZ2V0KGEpIHx8IFtdCiAgXTsKfQpmdW5jdGlvbiBRKGEpIHsKICBzd2l0Y2ggKGEudHlwZSkgewogICAgY2FzZSAiSEFORExFUiI6CiAgICAgIHJldHVybiB6dC5nZXQoYS5uYW1lKS5kZXNlcmlhbGl6ZShhLnZhbHVlKTsKICAgIGNhc2UgIlJBVyI6CiAgICAgIHJldHVybiBhLnZhbHVlOwogIH0KfQpmdW5jdGlvbiB1bihhLCBvLCBlKSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChoKSA9PiB7CiAgICBjb25zdCBnID0gTmUoKTsKICAgIGEuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIEMoQSkgewogICAgICAhQS5kYXRhIHx8ICFBLmRhdGEuaWQgfHwgQS5kYXRhLmlkICE9PSBnIHx8IChhLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBDKSwgaChBLmRhdGEpKTsKICAgIH0pLCBhLnN0YXJ0ICYmIGEuc3RhcnQoKSwgYS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHsgaWQ6IGcgfSwgbyksIGUpOwogIH0pOwp9CmZ1bmN0aW9uIE5lKCkgewogIHJldHVybiBuZXcgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpLnRvU3RyaW5nKDE2KSkuam9pbigiLSIpOwp9CmZ1bmN0aW9uIFp0KGEsIG8pIHsKICByZXR1cm4gTWF0aC5zcXJ0KChhLnggLSBvLngpICoqIDIgKyAoYS55IC0gby55KSAqKiAyKTsKfQpmdW5jdGlvbiBIZShhLCBvKSB7CiAgcmV0dXJuIHsKICAgIHg6IChhLnggKyBvLngpIC8gMiwKICAgIHk6IChhLnkgKyBvLnkpIC8gMgogIH07Cn0KZnVuY3Rpb24gVWUoYSwgbykgewogIGlmIChhLmNvbmZpZGVuY2UgPD0gMCB8fCBvLmNvbmZpZGVuY2UgPD0gMCkKICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTsKICBjb25zdCBlID0gWnQoYS5jZW50ZXIsIG8uY2VudGVyKSwgaCA9IEhlKGEuY2VudGVyLCBvLmNlbnRlcik7CiAgcmV0dXJuIHsKICAgIHg6IGgueCwKICAgIHk6IGgueSArIGUgLyA0CiAgICAvLyBjYWxjdWxhdGlvbiBpcyB0YWtlbiBmcm9tIG1vYmlsZSB0ZWFtCiAgfTsKfQpmdW5jdGlvbiBEZShhLCBvLCBlKSB7CiAgaWYgKGEuY29uZmlkZW5jZSA8PSAwIHx8IG8uY29uZmlkZW5jZSA8PSAwKQogICAgcmV0dXJuIDA7CiAgY29uc3QgaCA9IFp0KGEuY2VudGVyLCBvLmNlbnRlciksIGcgPSBQZShlLndpZHRoLCBlLmhlaWdodCk7CiAgcmV0dXJuIEVlKGggLyBnKTsKfQpmdW5jdGlvbiBudChhKSB7CiAgY29uc3QgeyBjZW50ZXJYOiBvLCBjZW50ZXJZOiBlLCBjb25maWRlbmNlOiBoLCBzaXplOiBnLCBzdGF0dXM6IEMgfSA9IGE7CiAgcmV0dXJuIHsKICAgIGNlbnRlcjogewogICAgICB4OiBvLAogICAgICB5OiBlCiAgICB9LAogICAgY29uZmlkZW5jZTogaCAvIDFlMywKICAgIHN0YXR1czogQyAvIDFlMywKICAgIHNpemU6IGcKICB9Owp9CmNsYXNzIEJlIGV4dGVuZHMgVGUgewogIHBhcnNlUmF3RGF0YShvLCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IGgsIHNoYXJwbmVzczogZyB9ID0gby5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBDLCBib3R0b21SaWdodFk6IEEsIGxlZnRFeWU6IE8sIG1vdXRoOiBiLCByaWdodEV5ZTogVCwgdG9wTGVmdFg6IF8sIHRvcExlZnRZOiBTIH0gPSBvLCBFID0gbnQoTyksIE0gPSBudChUKSwgVSA9IG50KGIpOwogICAgcmV0dXJuIHsKICAgICAgY29uZmlkZW5jZTogby5jb25maWRlbmNlIC8gMWUzLAogICAgICB0b3BMZWZ0OiB7CiAgICAgICAgeDogXywKICAgICAgICB5OiBTCiAgICAgIH0sCiAgICAgIGJvdHRvbVJpZ2h0OiB7CiAgICAgICAgeDogQywKICAgICAgICB5OiBBCiAgICAgIH0sCiAgICAgIGZhY2VDZW50ZXI6IFVlKEUsIE0pLAogICAgICBmYWNlU2l6ZTogRGUoRSwgTSwgZSksCiAgICAgIGxlZnRFeWU6IEUsCiAgICAgIHJpZ2h0RXllOiBNLAogICAgICBtb3V0aDogVSwKICAgICAgYnJpZ2h0bmVzczogaCAvIDFlMywKICAgICAgc2hhcnBuZXNzOiBnIC8gMWUzCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QobywgZSwgaCkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBqKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBnID0gdGhpcy5jb252ZXJ0VG9TYW1Db2xvckltYWdlKG8sIGUpLCBDID0gdGhpcy5zYW1XYXNtTW9kdWxlLmRldGVjdEZhY2VQYXJ0c1dpdGhJbWFnZVBhcmFtZXRlcnMoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLmJncjBJbWFnZVBvaW50ZXIsCiAgICAgIDAsCiAgICAgIDAsCiAgICAgIC8vIHBhcmFtV2lkdGggc2hvdWxkIGJlIDAgKGRlZmF1bHQgdmFsdWUpCiAgICAgIDAKICAgICAgLy8gcGFyYW1IZWlnaHQgc2hvdWxkIGJlIDAgKGRlZmF1bHQgdmFsdWUpCiAgICApOwogICAgcmV0dXJuIGcuZnJlZSgpLCB0aGlzLnBhcnNlUmF3RGF0YShDLCBoKTsKICB9Cn0KZXQoQmUpOwo=", UI = (x) => Uint8Array.from(atob(x), (i) => i.charCodeAt(0)), ds = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", UI(wg)], { type: "text/javascript;charset=utf-8" });
function QI(x) {
  let i;
  try {
    if (i = ds && (window.URL || window.webkitURL).createObjectURL(ds), !i) throw "";
    const t = new Worker(i, {
      type: "module",
      name: x == null ? void 0 : x.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(i);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + wg,
      {
        type: "module",
        name: x == null ? void 0 : x.name
      }
    );
  }
}
class zI extends PI {
  constructor(t, e) {
    super();
    E(this, "className", "FaceImageProcessor");
    E(this, "detector");
    E(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = zx(t), n = zl(t, e);
    return super.optimizeImageBeforeDetection(n);
  }
  async process({ image: t, timestamp: e }) {
    const n = this.optimizeImageBeforeDetection(t), o = {};
    o.height = t.height, o.width = t.width;
    let r = await this.detector.detect(n.data, n.resolution, o);
    r = S1(r, zx(t));
    const a = {};
    return a.detectedObject = r, a.image = t, a.imageData = n.data, a.timestamp = e, this.processDetectedObject(a);
  }
}
var D0, s0, c0;
class qI {
  constructor(i) {
    ne(this, D0);
    ne(this, s0);
    ne(this, c0);
    $(this, D0, i), $(this, s0, /* @__PURE__ */ new Map());
  }
  validate() {
    L(this, D0).forEach((i) => {
      L(this, s0).set(i.name, i.evaluate());
    }), $(this, c0, void (-453 * 13 + -2180 + 1 * 8069));
  }
  isValid() {
    return L(this, c0) === void 0 && $(this, c0, Array.from(L(this, s0).values()).every((i) => i)), L(this, c0);
  }
  get result() {
    return L(this, s0);
  }
  get validators() {
    return L(this, D0);
  }
}
D0 = new WeakMap(), s0 = new WeakMap(), c0 = new WeakMap();
var Hn, g0;
class ze {
  constructor(i, t) {
    ne(this, Hn);
    ne(this, g0);
    $(this, Hn, i), $(this, g0, t);
  }
  get threshold() {
    return L(this, g0);
  }
  get name() {
    return L(this, Hn);
  }
  isValueBelowThreshold(i) {
    return i < L(this, g0);
  }
  isValueAboveThreshold(i) {
    return i > L(this, g0);
  }
}
Hn = new WeakMap(), g0 = new WeakMap();
const $I = "isNotDim";
var Rn;
class e2 extends ze {
  constructor(t, e) {
    super($I, t);
    ne(this, Rn);
    $(this, Rn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Rn));
  }
}
Rn = new WeakMap();
const t2 = "isNotSmall";
var Kn;
class n2 extends ze {
  constructor(t, e) {
    super(t2, t);
    ne(this, Kn);
    $(this, Kn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Kn));
  }
}
Kn = new WeakMap();
const x2 = "isNotBright";
var Pn;
class i2 extends ze {
  constructor(t, e) {
    super(x2, t);
    ne(this, Pn);
    $(this, Pn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, Pn));
  }
}
Pn = new WeakMap();
const o2 = "isPresent";
var Tn;
class r2 extends ze {
  constructor(t, e) {
    super(o2, t);
    ne(this, Tn);
    $(this, Tn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Tn));
  }
}
Tn = new WeakMap();
const a2 = "isSharp";
var En;
class s2 extends ze {
  constructor(t, e) {
    super(a2, t);
    ne(this, En);
    $(this, En, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, En));
  }
}
En = new WeakMap();
const c2 = "isLeftEyePresent";
var Vn;
class g2 extends ze {
  constructor(t, e) {
    super(c2, t);
    ne(this, Vn);
    $(this, Vn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Vn));
  }
}
Vn = new WeakMap();
const d2 = "isMouthPresent";
var Ln;
class u2 extends ze {
  constructor(t, e) {
    super(d2, t);
    ne(this, Ln);
    $(this, Ln, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Ln));
  }
}
Ln = new WeakMap();
const l2 = "isMouthScoreNotTooLow";
var Dn;
class I2 extends ze {
  constructor(t, e) {
    super(l2, t);
    ne(this, Dn);
    $(this, Dn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Dn));
  }
}
Dn = new WeakMap();
const f2 = "isMouthScoreNotTooHigh";
var Nn;
class C2 extends ze {
  constructor(t, e) {
    super(f2, t);
    ne(this, Nn);
    $(this, Nn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, Nn));
  }
}
Nn = new WeakMap();
const p2 = "isNotLarge";
var Fn;
class h2 extends ze {
  constructor(t, e) {
    super(p2, t);
    ne(this, Fn);
    $(this, Fn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, Fn));
  }
}
Fn = new WeakMap();
const m2 = "isNotPitched";
var Yn;
const Wr = class Wr extends ze {
  constructor(t, e) {
    super(m2, Wr.calculatePitchAngleAccelerationThreshold(t));
    ne(this, Yn);
    $(this, Yn, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return Sl * Math.sin(t * (Math.PI / (2302 * 2 + -1664 + -30 * 92)));
  }
  evaluate() {
    const { z: t } = L(this, Yn) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
Yn = new WeakMap();
let Xo = Wr;
const b2 = "isRightEyePresent";
var Mn;
class A2 extends ze {
  constructor(t, e) {
    super(b2, t);
    ne(this, Mn);
    $(this, Mn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Mn));
  }
}
Mn = new WeakMap();
const y2 = "isNotOutOfBounds";
var jn, d0;
class W2 extends ze {
  constructor(t, e, n) {
    super(y2, t);
    ne(this, jn);
    ne(this, d0);
    $(this, jn, e), $(this, d0, n);
  }
  evaluate() {
    const t = Qc(L(this, d0), this.threshold, zx(L(this, d0))), e = zc(L(this, jn), L(this, d0));
    return v1(e, t);
  }
}
jn = new WeakMap(), d0 = new WeakMap();
class v2 {
  static getFaceValidationInstance(i, t, e, n) {
    return new qI([new r2(i.faceConfidence, t.confidence), new g2(i.leftEye.confidence, t.leftEye.confidence), new A2(i.rightEye.confidence, t.rightEye.confidence), new n2(i.minFaceSizeRatio, t.faceSize), new h2(i.maxFaceSizeRatio, t.faceSize), new s2(i.sharpnessThreshold, t.sharpness), new e2(i.brightnessLowThreshold, t.brightness), new i2(i.brightnessHighThreshold, t.brightness), new W2(i.outOfBoundsThreshold, t, e), new Xo(i.devicePitchAngleThreshold, n), new u2(i.mouth.confidence, t.mouth.confidence), new C2(i.mouth.status.max, t.mouth.status), new I2(i.mouth.status.min, t.mouth.status)]);
  }
}
class S2 extends TI {
  constructor() {
    super(...arguments);
    E(this, "className", "FaceValidationService");
    E(this, "acceleration", null);
  }
  validateDetectedObject(t, e) {
    const n = v2.getFaceValidationInstance(this.getThresholds(), t, e, this.acceleration);
    return n.validate(), n;
  }
}
const di = class di extends KI {
  constructor(t, e, n, o) {
    super(n, o);
    E(this, "detector");
    E(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  static async createInstance(t) {
    const e = new QI(), n = Wg(e), o = await new n(), r = new S2(), a = new zI(o, r), s = new di(o, r, a, t);
    this._instance = s;
  }
  static async getInstance(t) {
    return !this._instance && await this.createInstance(t), this._instance;
  }
  stopDetectionLoop() {
    var t;
    super.stopDetectionLoop(), $c(jt.INSTRUCTION_CHANGED, (t = this.detection) == null ? void 0 : t["fallbackInstruction"], x1);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
};
E(di, "_instance");
let _o = di;
const w2 = () => {
  const { handleError: x } = $0(), { acceleration: i } = U1(), { thresholds: t, wasmDirectoryPath: e } = Cr(), [n, o] = Me();
  ge(() => {
    (async () => {
      const s = await _o.getInstance(e);
      try {
        await s.init(), o(s);
      } catch (c) {
        if (c instanceof Error) {
          x(xe.fromError(c));
          return;
        }
      }
    })();
  }, [x, e]), ge(() => {
    n && n.setThresholds(t);
  }, [n, t]), ge(() => {
    n && n.setAcceleration(i);
  }, [i, n]);
  const r = {};
  return r.controller = n, r;
};
function B2({ onPhotoTakenInternal: x }) {
  const { cameraFacing: i, captureMode: t, onPhotoTaken: e, sessionToken: n } = Cr(), { controller: o } = w2(), r = Tt(({ candidateSelectionImages: c, imageData: d, protoMessage: g, webMetadata: C }) => {
    L1(vc.FACE, c), e(d, g);
    const u = {};
    u.cameraProperties = C, x == null || x(u);
  }, [x, e]), a = Tt(({ fps: c, processedImage: d }, g) => {
    $c(jt.INSTRUCTION_CHANGED, d.instructionCode), o && E1(jt.DETECTED_FACE_CHANGED, d.detection, o.imageProcessor.validationService.getThresholds().faceConfidence);
    const C = {};
    C.detection = d.detection, C.fps = c, C.image = g, C.isInCandidateSelection = d.isInCandidateSelection, C.invalidValidators = d.invalidValidators, V1(jt.FACE_DETECTION, C);
  }, [o]), s = {};
  return s.captureMode = t, s.cameraFacing = i, s.controller = o, s.createProtoMessage = RI, s.onCapture = r, s.onDetection = a, s.sessionToken = n, s.customEvent = jt, s.fallbackInstruction = he.FACE_NOT_PRESENT, s.instructionCodeMap = he, s.checkToInstructionCodeMap = nl, rI(s);
}
const G2 = ({ onPhotoTakenInternal: x }) => {
  const { sunfish: i } = Jn(), { cameraResolution: t, detectionDetails: e, shouldCameraMirror: n, videoRef: o } = B2({
    onPhotoTakenInternal: x
  });
  return /* @__PURE__ */ O(rt, { children: /* @__PURE__ */ O(
    K1,
    {
      cameraResolution: t,
      detectionDetails: e,
      shouldMirror: n,
      children: /* @__PURE__ */ O(
        qu,
        {
          ref: o,
          $isImageMirror: n,
          $isVisible: i,
          autoPlay: !0,
          id: i1,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}, k2 = ({ onPhotoTakenInternal: x, ...i }) => /* @__PURE__ */ O(e1, { cameraOptions: i, children: /* @__PURE__ */ O(G2, { onPhotoTakenInternal: x }) }), O2 = ({ children: x }) => {
  const i = It(null);
  return _1(i, jt.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ O(zu, { ref: i, children: x });
}, Jo = {};
Jo.minFaceSizeRatio = 0.135, Jo.maxFaceSizeRatio = 0.21;
const Bg = {};
Bg.faceConfidence = 1;
const Yt = {};
Yt.minFaceSizeRatio = 0.3, Yt.maxFaceSizeRatio = 1, Yt.brightnessHighThreshold = 1, Yt.brightnessLowThreshold = -(-4817 + -1 * 4766 + 9584), Yt.faceConfidence = 0.15, Yt.sharpnessThreshold = -(565 * -10 + -1 * 9197 + 14848), Yt.outOfBoundsThreshold = -(-18064 + 1 * 18065);
const Z2 = { [Ue.DISTANT]: Jo, [Ue.MIDDLE]: Bg, [Ue.CLOSEUP]: Yt }, H2 = Z2, us = -1 * 5205 + 3231 + 1974 + 0.255;
async function R2(x, i) {
  const { MagnifEyeLivenessContent: t } = h0.v4, e = await Promise.all(x.map(async (d) => Ig(d))), n = await fg(i), o = {};
  o.images = e, o.metadata = n;
  const r = o, a = t.verify(r);
  if (a) throw Error(a);
  const s = t.create(r), c = {};
  return c.magnifeyeLivenessContent = s, pg(c);
}
async function K2(x, i) {
  const t = x.map((n) => n.image), e = await R2(t, i);
  return Cg(e);
}
function P2(x, i) {
  const t = _a(x.faceSize, us);
  return _a(i.faceSize, us) < t;
}
const T2 = (x, i) => {
  const t = en(void 0), e = (o) => {
    if (!(!o.detail || x !== r0.RUNNING || i !== Ue.CLOSEUP)) {
      if (!t.value) {
        t.value = o.detail;
        return;
      }
      P2(t.value.data.detection, o.detail.data.detection) && (t.value = o.detail);
    }
  };
  Lc(jt.FACE_DETECTION, e);
  const n = {};
  return n.middleImageBestCandidate = t, n;
}, E2 = q0.div`
  ${(x) => x.$isSecondStep && Ic`
      transition: all 1.5s ease-in-out;
      transform: translate(16%, 5%) scale(2);
      transition-delay: 1.5s;
    `}
`, V2 = ({
  licensePath: x,
  onComplete: i,
  sessionToken: t,
  wasmDirectoryPath: e
}) => {
  const { analytics: n } = yc(), { appState: o, handleAppStateChange: r, handleError: a, magnifEyePhase: s, setMagnifEyePhase: c } = il(), { cameraProperties: d, mergeCameraProperties: g } = Jl(), C = en([]), { middleImageBestCandidate: u } = T2(o, s), p = Ul(wn.ANIMATION_END);
  function m(D) {
    C.value = [...C.value, D];
  }
  function A(D) {
    c(D), No(wn.STATUS_CHANGED, { phase: D });
  }
  function l(D) {
    m(D), A(Ue.MIDDLE);
  }
  p.value && A(Ue.CLOSEUP);
  async function W(D) {
    if (u.value) {
      const _ = { image: await Dc(u.value.image), data: u.value.data };
      m(_);
    }
    m(D);
    try {
      const Y = {
        sessionToken: t,
        web: d.value
      }, _ = await K2(C.value, Y), [H] = C.value;
      i(H, _), n == null || n.trackLivenessProcess(C.value);
    } catch (Y) {
      Y instanceof Error && a(xe.fromError(Y));
      return;
    }
    r(r0.DONE);
  }
  const k = {
    [Ue.DISTANT]: l,
    /**
     * we don't care about onPhotoTaken in MIDDLE phase, because faceConfidence = 1
     */
    [Ue.MIDDLE]: () => {
    },
    [Ue.CLOSEUP]: W
  };
  return /* @__PURE__ */ O(O2, { children: /* @__PURE__ */ O(E2, { $isSecondStep: s !== Ue.DISTANT, children: /* @__PURE__ */ O(
    k2,
    {
      licensePath: x,
      onPhotoTaken: k[s],
      onPhotoTakenInternal: g,
      thresholds: H2[s],
      wasmDirectoryPath: e
    }
  ) }) });
};
function L2({ initAppState: x, onError: i }) {
  const [t, e] = Me(x), [n, o] = Me(), [r, a] = Me(!1), s = It(i);
  ge(() => {
    s.current = i;
  }, [i]);
  const c = {};
  return c.appState = t, c.setAppState = e, c.error = n, c.setError = o, c.isCameraReady = r, c.setIsCameraReady = a, c.onErrorRef = s, c;
}
function D2(x, i) {
  return i !== Ue.DISTANT ? An.HIDDEN : x !== r0.RUNNING ? An.VISIBLE : An.VISIBLE_WITH_MASK;
}
function N2({
  onError: x
}) {
  const { appState: i, error: t, isCameraReady: e, onErrorRef: n, setAppState: o, setError: r, setIsCameraReady: a } = L2({
    initAppState: r0.LOADING,
    onError: x
  }), [s, c] = Me(Ue.DISTANT), d = D2(i, s), g = Tt(
    (u) => {
      No(wn.STATUS_CHANGED, { state: r0.ERROR, error: u }), a(!1), n.current(u), r(u), o(r0.ERROR);
    },
    [a, n, r, o]
  ), C = Tt(
    (u) => {
      u !== r0.WAITING && (o(u), No(wn.STATUS_CHANGED, { state: u }));
    },
    [o]
  );
  return {
    appState: i,
    magnifEyePhase: s,
    setMagnifEyePhase: c,
    freemiumOverlayState: d,
    isCameraReady: e,
    setIsCameraReady: a,
    handleAppStateChange: C,
    handleError: g,
    error: t
  };
}
var Gg = ((x) => (x.AUTO_CAPTURE = "auto-capture", x.LONG_CAPTURE_SMILE = "long-capture-smile", x))(Gg || {});
class F2 {
  constructor() {
    E(this, "appKey", "");
    E(this, "deviceId", "");
  }
  async countlyFetch(i) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const n = e, o = "https://innovatrics.count.ly/i?", r = {};
    r.app_key = this.appKey, r.device_id = this.deviceId;
    const a = Cx(r);
    await fetch("" + o + a + "&" + i, n);
  }
  async init(i, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = i;
    const e = { _app_version: Jc() }, n = { organization: Uc(window.location.href) }, o = Cx({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(o);
  }
  async endSession() {
    const i = {};
    i.end_session = "1";
    const t = Cx(i);
    await this.countlyFetch(t);
  }
  async sendEvent(i, t, e) {
    const n = {};
    n.key = i, n.count = 1, n.dur = e, n.segmentation = t;
    const o = [n], r = Cx({ events: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
  async sendAutoCaptureEvent(i, t) {
    await this.sendEvent(Gg.AUTO_CAPTURE, i, t);
  }
}
const hx = new F2();
class Y2 {
  constructor() {
    E(this, "countly", hx);
  }
  createSegmentation(i) {
    return { appVersion: Jc(), ...i };
  }
  init(i) {
    if (m1()) return;
    const t = q1();
    hx.init(t, i);
  }
  endSession() {
    hx.endSession();
  }
  walleye(i, t) {
    const e = {};
    e.nocturne = i, e.customer = t;
    const n = this.createSegmentation(e);
    hx.sendAutoCaptureEvent(n);
  }
}
class M2 extends Y2 {
  constructor() {
    super(...arguments);
    E(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(t) {
    this.captureProcessAnalytics.push(t);
  }
  reset() {
    this.captureProcessAnalytics = [];
  }
}
class j2 extends M2 {
  trackLivenessProcess(i) {
    var g, C, u, p, m, A, l, W, k, D;
    if (!i.length || !this.captureProcessAnalytics.length) return;
    const [t, e, n] = i, [o, r] = this.captureProcessAnalytics, a = eI(o.averageFps + (r == null ? void 0 : r.averageFps)) / 2, s = Ua(o.captureProcessDurationInMs), c = Ua(r == null ? void 0 : r["captureProcessDurationInMs"]), d = this.createSegmentation({ faceSizeDistant: R0((g = t.data.detection) == null ? void 0 : g.faceSize), faceSizeCloseup: R0((C = n == null ? void 0 : n.data.detection) == null ? void 0 : C.faceSize), faceSizeMiddle: R0((u = e.data.detection) == null ? void 0 : u.faceSize), confidenceDistant: R0((p = t.data.detection) == null ? void 0 : p.confidence), confidenceCloseup: R0((m = n == null ? void 0 : n.data.detection) == null ? void 0 : m.confidence), confidenceMiddle: R0((A = e.data.detection) == null ? void 0 : A.confidence), imageResolution: ((W = (l = t.data) == null ? void 0 : l["imageResolution"]) == null ? void 0 : W.width) + "x" + ((D = (k = t.data) == null ? void 0 : k["imageResolution"]) == null ? void 0 : D.height), averageFps: a, captureTimeCloseup: c > 7949 * 1 + -909 + -6995 * 1 ? ">45" : "" + c, captureTimeDistant: s > -977 * 9 + 3569 + 5254 ? ">30" : "" + s, camera: $1(o == null ? void 0 : o.deviceName, o == null ? void 0 : o.facingMode), instructionSet: o.instructionSet });
    this.countly.sendAutoCaptureEvent(d, s + c), this.reset();
  }
}
const X2 = new j2(), _2 = ({ props: x }) => x ? /* @__PURE__ */ O(ju, { target: x.styleTarget, children: /* @__PURE__ */ O(
  ul,
  {
    licensePath: x.licensePath,
    bramble: Ko.getInstance(),
    wasmDirectoryPath: x.wasmDirectoryPath,
    children: /* @__PURE__ */ O(fl, { analytics: X2, appKey: "d5ca54dabfb1a2c72d7090c9c8980252a879da44", children: /* @__PURE__ */ O(
      xl,
      {
        value: N2({
          onError: x.onError
        }),
        children: /* @__PURE__ */ O(Ac, { children: /* @__PURE__ */ O(V2, { ...x }) })
      }
    ) })
  }
) }) : null;
nd(_2, "x-dot-magnifeye-liveness", ["props"]);
