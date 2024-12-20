var Ug = Object.defineProperty;
var aa = (x) => {
  throw TypeError(x);
};
var zg = (x, i, t) => i in x ? Ug(x, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[i] = t;
var T = (x, i, t) => zg(x, typeof i != "symbol" ? i + "" : i, t), sa = (x, i, t) => i.has(x) || aa("Cannot " + t);
var L = (x, i, t) => (sa(x, i, "read from private field"), t ? t.call(x) : i.get(x)), ie = (x, i, t) => i.has(x) ? aa("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(x) : i.set(x, t), te = (x, i, t, e) => (sa(x, i, "write to private field"), e ? e.call(x, t) : i.set(x, t), t);
var Yn, F, Gs, ks, n0, ca, Os, ro, ir, ao, so, Hs, yn = {}, Zs = [], qg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, fi = Array.isArray;
function Kt(x, i) {
  for (var t in i) x[t] = i[t];
  return x;
}
function Rs(x) {
  var i = x.parentNode;
  i && i.removeChild(x);
}
function Le(x, i, t) {
  var e, n, o, r = {};
  for (o in i) o == "key" ? e = i[o] : o == "ref" ? n = i[o] : r[o] = i[o];
  if (arguments.length > 1009 + -53 * 19 && (r.children = arguments.length > -9213 + 2 * 2384 + 4448 ? Yn.call(arguments, -5594 + 101 * 69 + -1373 * 1) : t), typeof x == "function" && x.defaultProps != null)
    for (o in x.defaultProps) void (-95 * -86 + 7945 + -16115) === r[o] && (r[o] = x.defaultProps[o]);
  return pn(x, r, e, n, null);
}
function pn(x, i, t, e, n) {
  var o = {};
  o.type = x, o.props = i, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__d = void (-5861 * 1 + -2802 + 8663), o.__c = null, o.constructor = void 0, o.__v = n ?? ++Gs, o.__i = -(330 + 34 * 170 + -6109), o.__u = 0;
  var r = o;
  return n == null && F.vnode != null && F.vnode(r), r;
}
function $g() {
  var x = {};
  return x.current = null, x;
}
function rt(x) {
  return x.children;
}
function it(x, i) {
  this.props = x, this.context = i;
}
function l0(x, i) {
  if (i == null) return x.__ ? l0(x.__, x.__i + (58 * 86 + -1 * 4275 + -8 * 89)) : null;
  for (var t; i < x.__k.length; i++) if ((t = x.__k[i]) != null && t.__e != null) return t.__e;
  return typeof x.type == "function" ? l0(x) : null;
}
function Ks(x) {
  var i, t;
  if ((x = x.__) != null && x.__c != null) {
    for (x.__e = x.__c.base = null, i = 0; i < x.__k.length; i++) if ((t = x.__k[i]) != null && t.__e != null) {
      x.__e = x.__c.base = t.__e;
      break;
    }
    return Ks(x);
  }
}
function co(x) {
  (!x.__d && (x.__d = !(7 * -1231 + 1559 * -3 + -782 * -17)) && n0.push(x) && !Kx.__r++ || ca !== F.debounceRendering) && ((ca = F.debounceRendering) || Os)(Kx);
}
function Kx() {
  var x, i, t, e, n, o, r, a;
  for (n0.sort(ro); x = n0.shift(); ) x.__d && (i = n0.length, e = void (-305 * 4 + -9198 + 10418), o = (n = (t = x).__v).__e, r = [], a = [], t.__P && ((e = Kt({}, n)).__v = n.__v + (-9439 * 1 + -1 * -1297 + 8143), F.vnode && F.vnode(e), or(t.__P, e, n, t.__n, t.__P.namespaceURI, 6 * -951 + 3597 + 2141 & n.__u ? [o] : null, r, o ?? l0(n), !!(-64 * 153 + 4456 + 5368 & n.__u), a), e.__v = n.__v, e.__.__k[e.__i] = e, Ts(r, e, a), e.__e != o && Ks(e)), n0.length > i && n0.sort(ro));
  Kx.__r = -68 * 64 + 2022 + 2330;
}
function Ps(x, i, t, e, n, o, r, a, s, c, d) {
  var g, C, u, p, m, A = e && e.__k || Zs, l = i.length;
  for (t.__d = s, ed(t, i, A), s = t.__d, g = 712 * 1 + 859 * 4 + 61 * -68; g < l; g++) (u = t.__k[g]) != null && typeof u != "boolean" && typeof u != "function" && (C = u.__i === -1 ? yn : A[u.__i] || yn, u.__i = g, or(x, u, C, n, o, r, a, s, c, d), p = u.__e, u.ref && C.ref != u.ref && (C.ref && rr(C.ref, null, u), d.push(u.ref, u.__c || p, u)), m == null && p != null && (m = p), 1 * 112251 + 92696 * -1 + 45981 & u.__u || C.__k === u.__k ? (s && typeof u.type == "string" && !x.contains(s) && (s = l0(C)), s = Vs(u, s, x)) : typeof u.type == "function" && void (-2 * -875 + 242 * -3 + 1 * -1024) !== u.__d ? s = u.__d : p && (s = p.nextSibling), u.__d = void 0, u.__u &= -(-177725 + -23234 * 13 + 676376));
  t.__d = s, t.__e = m;
}
function ed(x, i, t) {
  var e, n, o, r, a, s = i.length, c = t.length, d = c, g = -1356 + 47 * -73 + 4787 * 1;
  for (x.__k = [], e = 332 + 2 * -166; e < s; e++) r = e + g, (n = x.__k[e] = (n = i[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? pn(null, n, null, null, null) : fi(n) ? pn(rt, { children: n }, null, null, null) : void (-2443 + 85 * -34 + 1 * 5333) === n.constructor && n.__b > 21 * 296 + -669 * 11 + 1143 ? pn(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = x, n.__b = x.__b + (3835 + 185 * 31 + -9569), a = td(n, t, r, d), n.__i = a, o = null, -(50 * 127 + -637 + -5712) !== a && (d--, (o = t[a]) && (o.__u |= -1 * -23902 + -162373 + -269543 * -1)), o == null || o.__v === null ? (-(-3305 + 19 * 174) == a && g--, typeof n.type != "function" && (n.__u |= 811 * 122 + -116 * -372 + -76558)) : a !== r && (a == r - 1 ? g = a - r : a == r + (-1 * 7097 + 9 * -571 + -12237 * -1) ? g++ : a > r ? d > s - r ? g += a - r : g-- : a < r && g++, a !== e + g && (n.__u |= 70681 + -3 * 9354 + 22917))) : (o = t[r]) && o.key == null && o.__e && -1 * -2086 + 8175 + -10261 * 1 == (-303623 + -1 * -434695 & o.__u) && (o.__e == x.__d && (x.__d = l0(o)), go(o, o, !(-2 * 766 + 1 * 5137 + 901 * -4)), t[r] = null, d--);
  if (d)
    for (e = -28 * 120 + 5662 + -1 * 2302; e < c; e++) (o = t[e]) != null && 2816 + -22 * 128 == (-252614 + 22624 * -6 + 519430 & o.__u) && (o.__e == x.__d && (x.__d = l0(o)), go(o, o));
}
function Vs(x, i, t) {
  var e, n;
  if (typeof x.type == "function") {
    for (e = x.__k, n = -133 * 75 + -267 * 37 + 3309 * 6; e && n < e.length; n++) e[n] && (e[n].__ = x, i = Vs(e[n], i, t));
    return i;
  }
  x.__e != i && (t.insertBefore(x.__e, i || null), i = x.__e);
  do
    i = i && i.nextSibling;
  while (i != null && -1 * 520 + -6935 + -439 * -17 === i.nodeType);
  return i;
}
function Vt(x, i) {
  return i = i || [], x == null || typeof x == "boolean" || (fi(x) ? x.some(function(t) {
    Vt(t, i);
  }) : i.push(x)), i;
}
function td(x, i, t, e) {
  var n = x.key, o = x.type, r = t - (-4 * 2102 + 7222 + 1187), a = t + (8856 + -8399 * 1 + -456), s = i[t];
  if (s === null || s && n == s.key && o === s.type && -3092 + 1 * 3092 == (-334427 + -1 * -465499 & s.__u)) return t;
  if (e > (s != null && -25 * 277 + 1739 * -2 + -103 * -101 == (190509 * -1 + 247332 + 74249 * 1 & s.__u) ? 1942 * 5 + -1 * -3491 + -220 * 60 : -1 * 7286 + -5525 + -1 * -12811)) for (; r >= -121 * -61 + 16 * -254 + -3317 || a < i.length; ) {
    if (r >= -6778 * 1 + -9364 + 7 * 2306) {
      if ((s = i[r]) && -6073 + 11 * 138 + 4555 == (182942 + 1 * -207505 + 5 * 31127 & s.__u) && n == s.key && o === s.type) return r;
      r--;
    }
    if (a < i.length) {
      if ((s = i[a]) && 630 + 63 * -10 == (-345622 + -18 * -26483 & s.__u) && n == s.key && o === s.type) return a;
      a++;
    }
  }
  return -(134 * 38 + 599 * -1 + -4492);
}
function ga(x, i, t) {
  i[0] === "-" ? x.setProperty(i, t ?? "") : x[i] = t == null ? "" : typeof t != "number" || qg.test(i) ? t : t + "px";
}
function rx(x, i, t, e, n) {
  var o;
  e: if (i === "style")
    if (typeof t == "string") x.style.cssText = t;
    else {
      if (typeof e == "string" && (x.style.cssText = e = ""), e)
        for (i in e) t && i in t || ga(x.style, i, "");
      if (t)
        for (i in t) e && t[i] === e[i] || ga(x.style, i, t[i]);
    }
  else if (i[-11267 + 19 * 593] === "o" && i[4371 + 23 * -190] === "n") o = i !== (i = i.replace(/(PointerCapture)$|Capture$/i, "$1")), i = i.toLowerCase() in x || i === "onFocusOut" || i === "onFocusIn" ? i.toLowerCase().slice(6 * -38 + -441 + 671) : i.slice(-1484 + -2 * -743), x.l || (x.l = {}), x.l[i + o] = t, t ? e ? t.u = e.u : (t.u = ir, x.addEventListener(i, o ? so : ao, o)) : x.removeEventListener(i, o ? so : ao, o);
  else {
    if (n == "http://www.w3.org/2000/svg") i = i.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (i != "width" && i != "height" && i != "href" && i != "list" && i != "form" && i != "tabIndex" && i != "download" && i != "rowSpan" && i != "colSpan" && i != "role" && i != "popover" && i in x) try {
      x[i] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || !(-6875 + -764 * -9) === t && i[-7702 + -7706 * -1] !== "-" ? x.removeAttribute(i) : x.setAttribute(i, i == "popover" && t == 1 ? "" : t));
  }
}
function da(x) {
  return function(i) {
    if (this.l) {
      var t = this.l[i.type + x];
      if (i.t == null) i.t = ir++;
      else if (i.t < t.u) return;
      return t(F.event ? F.event(i) : i);
    }
  };
}
function or(x, i, t, e, n, o, r, a, s, c) {
  var d, g, C, u, p, m, A, l, W, Z, M, _, X, H, z, Q, q = i.type;
  if (void (163 * -2 + 1 * -4761 + 1 * 5087) !== i.constructor) return null;
  128 & t.__u && (s = !!(391 * 9 + 1 * 4786 + 1 * -8273 & t.__u), o = [a = i.__e = t.__e]), (d = F.__b) && d(i);
  e: if (typeof q == "function") try {
    if (l = i.props, W = "prototype" in q && q.prototype.render, Z = (d = q.contextType) && e[d.__c], M = d ? Z ? Z.props.value : d.__ : e, t.__c ? A = (g = i.__c = t.__c).__ = g.__E : (W ? i.__c = g = new q(l, M) : (i.__c = g = new it(l, M), g.constructor = q, g.render = xd), Z && Z.sub(g), g.props = l, g.state || (g.state = {}), g.context = M, g.__n = e, C = g.__d = !(272 + -136 * 2), g.__h = [], g._sb = []), W && g.__s == null && (g.__s = g.state), W && q.getDerivedStateFromProps != null && (g.__s == g.state && (g.__s = Kt({}, g.__s)), Kt(g.__s, q.getDerivedStateFromProps(l, g.__s))), u = g.props, p = g.state, g.__v = i, C) W && q.getDerivedStateFromProps == null && g.componentWillMount != null && g.componentWillMount(), W && g.componentDidMount != null && g.__h.push(g.componentDidMount);
    else {
      if (W && q.getDerivedStateFromProps == null && l !== u && g.componentWillReceiveProps != null && g.componentWillReceiveProps(l, M), !g.__e && (g.shouldComponentUpdate != null && !(1 * -9907 + -2 * 18 + -44 * -226) === g.shouldComponentUpdate(l, g.__s, M) || i.__v === t.__v)) {
        for (i.__v !== t.__v && (g.props = l, g.state = g.__s, g.__d = !(-193 * 7 + 101 + 1 * 1251)), i.__e = t.__e, i.__k = t.__k, i.__k.forEach(function(Ne) {
          Ne && (Ne.__ = i);
        }), _ = 11686 + -2 * 5843; _ < g._sb.length; _++) g.__h.push(g._sb[_]);
        g._sb = [], g.__h.length && r.push(g);
        break e;
      }
      g.componentWillUpdate != null && g.componentWillUpdate(l, g.__s, M), W && g.componentDidUpdate != null && g.__h.push(function() {
        g.componentDidUpdate(u, p, m);
      });
    }
    if (g.context = M, g.props = l, g.__P = x, g.__e = !(-995 * -2 + 3800 + -5789), X = F.__r, H = 8667 + 7 * -505 + -1 * 5132, W) {
      for (g.state = g.__s, g.__d = !(8252 * -1 + 283 + 7970), X && X(i), d = g.render(g.props, g.state, g.context), z = -151 * -33 + -4971 + -12; z < g._sb.length; z++) g.__h.push(g._sb[z]);
      g._sb = [];
    } else do
      g.__d = !(5748 * 1 + -4858 + 1 * -889), X && X(i), d = g.render(g.props, g.state, g.context), g.state = g.__s;
    while (g.__d && ++H < 25);
    g.state = g.__s, g.getChildContext != null && (e = Kt(Kt({}, e), g.getChildContext())), W && !C && g.getSnapshotBeforeUpdate != null && (m = g.getSnapshotBeforeUpdate(u, p)), Ps(x, fi(Q = d != null && d.type === rt && d.key == null ? d.props.children : d) ? Q : [Q], i, t, e, n, o, r, a, s, c), g.base = i.__e, i.__u &= -(-9844 * 1 + 6125 + 776 * 5), g.__h.length && r.push(g), A && (g.__E = g.__ = null);
  } catch (Ne) {
    i.__v = null, s || o != null ? (i.__e = a, i.__u |= s ? 2929 + 25 * 185 + -7394 * 1 : -8968 * -1 + 3792 + -12728, o[o.indexOf(a)] = null) : (i.__e = t.__e, i.__k = t.__k), F.__e(Ne, i, t);
  }
  else o == null && i.__v === t.__v ? (i.__k = t.__k, i.__e = t.__e) : i.__e = nd(t.__e, i, t, e, n, o, r, s, c);
  (d = F.diffed) && d(i);
}
function Ts(x, i, t) {
  i.__d = void (1 * 9748 + 2082 * 3 + -15994);
  for (var e = -1 * -5311 + 1741 * -4 + 1653; e < t.length; e++) rr(t[e], t[++e], t[++e]);
  F.__c && F.__c(i, x), x.some(function(n) {
    try {
      x = n.__h, n.__h = [], x.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      F.__e(o, n.__v);
    }
  });
}
function nd(x, i, t, e, n, o, r, a, s) {
  var c, d, g, C, u, p, m, A = t.props, l = i.props, W = i.type;
  if (W === "svg" ? n = "http://www.w3.org/2000/svg" : W === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), o != null) {
    for (c = -5665 + 2351 * -2 + -1481 * -7; c < o.length; c++) if ((u = o[c]) && "setAttribute" in u == !!W && (W ? u.localName === W : -5264 + -50 * 6 + 5567 === u.nodeType)) {
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
    if (o = o && Yn.call(x.childNodes), A = t.props || yn, !a && o != null)
      for (A = {}, c = -6285 + 23 * -293 + -1184 * -11; c < x.attributes.length; c++) A[(u = x.attributes[c]).name] = u.value;
    for (c in A) if (u = A[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") g = u;
      else if (c !== "key" && !(c in l)) {
        if (c == "value" && "defaultValue" in l || c == "checked" && "defaultChecked" in l) continue;
        rx(x, c, null, u, n);
      }
    }
    for (c in l) u = l[c], c == "children" ? C = u : c == "dangerouslySetInnerHTML" ? d = u : c == "value" ? p = u : c == "checked" ? m = u : c === "key" || a && typeof u != "function" || A[c] === u || rx(x, c, u, A[c], n);
    if (d) a || g && (d.__html === g.__html || d.__html === x.innerHTML) || (x.innerHTML = d.__html), i.__k = [];
    else if (g && (x.innerHTML = ""), Ps(x, fi(C) ? C : [C], i, t, e, W === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, o, r, o ? o[1425 + 1 * -5759 + 4334] : t.__k && l0(t, -1483 + 2 * 4261 + -7039), a, s), o != null)
      for (c = o.length; c--; ) o[c] != null && Rs(o[c]);
    a || (c = "value", void (2129 * -4 + -5062 + 13578) !== p && (p !== x[c] || W === "progress" && !p || W === "option" && p !== A[c]) && rx(x, c, p, A[c], n), c = "checked", void (2 * 3647 + 6 * -946 + -1 * 1618) !== m && m !== x[c] && rx(x, c, m, A[c], n));
  }
  return x;
}
function rr(x, i, t) {
  try {
    typeof x == "function" ? x(i) : x.current = i;
  } catch (e) {
    F.__e(e, t);
  }
}
function go(x, i, t) {
  var e, n;
  if (F.unmount && F.unmount(x), (e = x.ref) && (e.current && e.current !== x.__e || rr(e, null, i)), (e = x.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      F.__e(o, i);
    }
    e.base = e.__P = null;
  }
  if (e = x.__k)
    for (n = 0; n < e.length; n++) e[n] && go(e[n], i, t || typeof x.type != "function");
  t || x.__e == null || Rs(x.__e), x.__c = x.__ = x.__e = x.__d = void (10141 + 1 * -10141);
}
function xd(x, i, t) {
  return this.constructor(x, t);
}
function _t(x, i, t) {
  var e, n, o, r;
  F.__ && F.__(x, i), n = (e = typeof t == "function") ? null : t && t.__k || i.__k, o = [], r = [], or(i, x = (!e && t || i).__k = Le(rt, null, [x]), n || yn, yn, i.namespaceURI, !e && t ? [t] : n ? null : i.firstChild ? Yn.call(i.childNodes) : null, o, !e && t ? t : n ? n.__e : i.firstChild, e, r), Ts(o, x, r);
}
function ar(x, i) {
  _t(x, i, ar);
}
function sr(x, i, t) {
  var e, n, o, r, a = Kt({}, x.props);
  for (o in x.type && x.type.defaultProps && (r = x.type.defaultProps), i) o == "key" ? e = i[o] : o == "ref" ? n = i[o] : a[o] = void (16 * -149 + -26 * -2 + 2332) === i[o] && r !== void 0 ? r[o] : i[o];
  return arguments.length > 4388 + 17 * -258 && (a.children = arguments.length > 3 ? Yn.call(arguments, 1 * -5393 + 1297 + 4098) : t), pn(x.type, a, e || x.key, n || x.ref, null);
}
function jn(x, i) {
  var t = { __c: i = "__cC" + Hs++, __: x, Consumer: function(e, n) {
    return e.children(n);
  }, Provider: function(e) {
    var n, o;
    return this.getChildContext || (n = [], (o = {})[i] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value !== r.value && n.some(function(a) {
        a.__e = !0, co(a);
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
Yn = Zs.slice, F = { __e: function(x, i, t, e) {
  for (var n, o, r; i = i.__; ) if ((n = i.__c) && !n.__) try {
    if ((o = n.constructor) && o.getDerivedStateFromError != null && (n.setState(o.getDerivedStateFromError(x)), r = n.__d), n.componentDidCatch != null && (n.componentDidCatch(x, e || {}), r = n.__d), r) return n.__E = n;
  } catch (a) {
    x = a;
  }
  throw x;
} }, Gs = -1303 * 3 + 194 + -3715 * -1, ks = function(x) {
  return x != null && x.constructor == null;
}, it.prototype.setState = function(x, i) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Kt({}, this.state), typeof x == "function" && (x = x(Kt({}, t), this.props)), x && Kt(t, x), x != null && this.__v && (i && this._sb.push(i), co(this));
}, it.prototype.forceUpdate = function(x) {
  this.__v && (this.__e = !(11 * -754 + -9 * -300 + 1 * 5594), x && this.__h.push(x), co(this));
}, it.prototype.render = rt, n0 = [], Os = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ro = function(x, i) {
  return x.__v.__b - i.__v.__b;
}, Kx.__r = 954 + 3 * -546 + 684, ir = -9181 * -1 + -7911 + -1270, ao = da(!(-270 + 4994 * -1 + 5265)), so = da(!(3731 + -533 * 7)), Hs = 8223 * -1 + -5069 * 1 + 13292;
function cr() {
  return (cr = Object.assign ? Object.assign.bind() : function(x) {
    for (var i = -276 * -4 + -20 * 401 + 6917; i < arguments.length; i++) {
      var t = arguments[i];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (x[e] = t[e]);
    }
    return x;
  }).apply(this, arguments);
}
var id = ["context", "children"];
function od(x) {
  this.getChildContext = function() {
    return x.context;
  };
  var i = x.children, t = function(e, n) {
    if (e == null) return {};
    var o, r, a = {}, s = Object.keys(e);
    for (r = 2 * -3134 + 1367 * -5 + 13103; r < s.length; r++) n.indexOf(o = s[r]) >= 7386 + -170 * -39 + 6 * -2336 || (a[o] = e[o]);
    return a;
  }(x, id);
  return sr(i, t);
}
function rd() {
  var x = {};
  x.detail = {}, x.bubbles = !(1 * -6236 + 9794 + -1779 * 2), x.cancelable = !(-69 * 89 + -5645 + 11786);
  var i = new CustomEvent("_preact", x);
  this.dispatchEvent(i), this._vdom = Le(od, cr({}, this._props, { context: i.detail.context }), function t(e, n) {
    if (-271 * 5 + 2048 * 4 + -6834 === e.nodeType) return e.data;
    if (e.nodeType !== 1) return null;
    var o = [], r = {}, a = -73 * -115 + -386 + 1 * -8009, s = e.attributes, c = e.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (r[s[a].name] = s[a].value, r[Es(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var d = t(c[a], null), g = c[a].slot;
      g ? r[g] = Le(ua, { name: g }, d) : o[a] = d;
    }
    var C = n ? Le(ua, null, o) : o;
    return Le(n || e.nodeName.toLowerCase(), r, C);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? ar : _t)(this._vdom, this._root);
}
function Es(x) {
  return x.replace(/-(\w)/g, function(i, t) {
    return t ? t.toUpperCase() : "";
  });
}
function ad(x, i, t) {
  if (this._vdom) {
    var e = {};
    e[x] = t = t ?? void (-1 * 4001 + -137 * 29 + 7974), e[Es(x)] = t, this._vdom = sr(this._vdom, e), _t(this._vdom, this._root);
  }
}
function sd() {
  _t(this._vdom = null, this._root);
}
function ua(x, i) {
  var t = this;
  return Le("slot", cr({}, x, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = i;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function cd(x, i, t, e) {
  function n() {
    var o = Reflect.construct(HTMLElement, [], n);
    return o._vdomComponent = x, o._root = o, o;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = rd, n.prototype.attributeChangedCallback = ad, n.prototype.disconnectedCallback = sd, t = t || x.observedAttributes || Object.keys(x.propTypes || {}), n.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(n.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r, this.connectedCallback());
      var a = typeof r;
      r != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(i, n);
}
var gd = -1 * -3273 + -3 * -2845 + -11808;
function O(x, i, t, e, n, o) {
  i || (i = {});
  var r, a, s = i;
  if ("ref" in s)
    for (a in s = {}, i) a == "ref" ? r = i[a] : s[a] = i[a];
  var c = {};
  c.type = x, c.props = s, c.key = t, c.ref = r, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__d = void (7996 + -3611 * -2 + 14 * -1087), c.__c = null, c.constructor = void 0, c.__v = --gd, c.__i = -1, c.__u = 0, c.__source = n, c.__self = o;
  var d = c;
  if (typeof x == "function" && (r = x.defaultProps))
    for (a in r) void (3557 + 11 * -412 + 15 * 65) === s[a] && (s[a] = r[a]);
  return F.vnode && F.vnode(d), d;
}
var _e = function() {
  return _e = Object.assign || function(i) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (i[o] = t[o]);
    }
    return i;
  }, _e.apply(this, arguments);
};
function D0(x, i, t) {
  if (t || arguments.length === 2) for (var e = 0, n = i.length, o; e < n; e++)
    (o || !(e in i)) && (o || (o = Array.prototype.slice.call(i, 0, e)), o[e] = i[e]);
  return x.concat(o || Array.prototype.slice.call(i));
}
function dd(x) {
  var i = Object.create(null);
  return function(t) {
    return i[t] === void 0 && (i[t] = x(t)), i[t];
  };
}
var ud = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ld = dd(function(x) {
  return ud.test(x) || x.charCodeAt(-5781 + -41 * -141) === -481 + 296 * 2 && x.charCodeAt(-6133 + -5 * -1781 + -2771) === 110 && x.charCodeAt(517 * 15 + 2686 + 143 * -73) < 85 * 74 + -1037 + -178 * 29;
}), Xt, ce, Ni, la, N0 = 0, Ls = [], ge = F, Ia = ge.__b, fa = ge.__r, Ca = ge.diffed, pa = ge.__c, ha = ge.unmount, ma = ge.__;
function X0(x, i) {
  ge.__h && ge.__h(ce, x, N0 || i), N0 = 1 * -4412 + -2 * -4507 + -4602;
  var t = {};
  t.__ = [], t.__h = [];
  var e = ce.__H || (ce.__H = t);
  return x >= e.__.length && e.__.push({}), e.__[x];
}
function De(x) {
  return N0 = 1, gr(Fs, x);
}
function gr(x, i, t) {
  var e = X0(Xt++, 2);
  if (e.t = x, !e.__c && (e.__ = [t ? t(i) : Fs(void (2547 * -3 + -9 * -262 + 5283), i), function(a) {
    var s = e.__N ? e.__N[0] : e.__[0], c = e.t(s, a);
    s !== c && (e.__N = [c, e.__[-1999 * 1 + 6106 + 2 * -2053]], e.__c.setState({}));
  }], e.__c = ce, !ce.u)) {
    var n = function(a, s, c) {
      if (!e.__c.__H) return !0;
      var d = e.__c.__H.__.filter(function(C) {
        return !!C.__c;
      });
      if (d.every(function(C) {
        return !C.__N;
      })) return !o || o.call(this, a, s, c);
      var g = !(8 * -990 + 5659 * -1 + -35 * -388);
      return d.forEach(function(C) {
        if (C.__N) {
          var u = C.__[0];
          C.__ = C.__N, C.__N = void 0, u !== C.__[0] && (g = !0);
        }
      }), !(!g && e.__c.props === a) && (!o || o.call(this, a, s, c));
    };
    ce.u = !(-34 * -48 + -7290 + -5658 * -1);
    var o = ce.shouldComponentUpdate, r = ce.componentWillUpdate;
    ce.componentWillUpdate = function(a, s, c) {
      if (this.__e) {
        var d = o;
        o = void (-89 * 29 + -1 * -347 + 2234), n(a, s, c), o = d;
      }
      r && r.call(this, a, s, c);
    }, ce.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function ae(x, i) {
  var t = X0(Xt++, 3);
  !ge.__s && dr(t.__H, i) && (t.__ = x, t.i = i, ce.__H.__h.push(t));
}
function J0(x, i) {
  var t = X0(Xt++, 4);
  !ge.__s && dr(t.__H, i) && (t.__ = x, t.i = i, ce.__h.push(t));
}
function ke(x) {
  return N0 = 9401 + 1 * 121 + -9517 * 1, Ue(function() {
    var i = {};
    return i.current = x, i;
  }, []);
}
function Ds(x, i, t) {
  N0 = -16596 + -3 * -5534, J0(function() {
    return typeof x == "function" ? (x(i()), function() {
      return x(null);
    }) : x ? (x.current = i(), function() {
      return x.current = null;
    }) : void (348 * -4 + -1 * 4479 + 5871);
  }, t == null ? t : t.concat(x));
}
function Ue(x, i) {
  var t = X0(Xt++, 7);
  return dr(t.__H, i) && (t.__ = x(), t.__H = i, t.__h = x), t.__;
}
function ze(x, i) {
  return N0 = 1 * -9766 + 6647 + 53 * 59, Ue(function() {
    return x;
  }, i);
}
function h0(x) {
  var i = ce.context[x.__c], t = X0(Xt++, -182 * -43 + 9453 * -1 + -1 * -1636);
  return t.c = x, i ? (t.__ == null && (t.__ = !(8866 + 31 * -286), i.sub(ce)), i.props.value) : x.__;
}
function Px(x, i) {
  ge.useDebugValue && ge.useDebugValue(i ? i(x) : x);
}
function Ns() {
  var x = X0(Xt++, 11);
  if (!x.__) {
    for (var i = ce.__v; i !== null && !i.__m && i.__ !== null; ) i = i.__;
    var t = i.__m || (i.__m = [1064 + -1 * 9811 + -1 * -8747, 9400 + 1 * -614 + 2 * -4393]);
    x.__ = "P" + t[-8550 + -1710 * -5] + "-" + t[-2665 + 545 * 15 + 5509 * -1]++;
  }
  return x.__;
}
function Id() {
  for (var x; x = Ls.shift(); ) if (x.__P && x.__H) try {
    x.__H.__h.forEach(hx), x.__H.__h.forEach(uo), x.__H.__h = [];
  } catch (i) {
    x.__H.__h = [], ge.__e(i, x.__v);
  }
}
ge.__b = function(x) {
  ce = null, Ia && Ia(x);
}, ge.__ = function(x, i) {
  x && i.__k && i.__k.__m && (x.__m = i.__k.__m), ma && ma(x, i);
}, ge.__r = function(x) {
  fa && fa(x), Xt = -3 * -260 + 998 + -1778;
  var i = (ce = x.__c).__H;
  i && (Ni === ce ? (i.__h = [], ce.__h = [], i.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (277 * -17 + 8153 + 2 * -1722);
  })) : (i.__h.forEach(hx), i.__h.forEach(uo), i.__h = [], Xt = -4108 + 3037 * 1 + 1071)), Ni = ce;
}, ge.diffed = function(x) {
  Ca && Ca(x);
  var i = x.__c;
  i && i.__H && (i.__H.__h.length && (16 * -239 + 1790 + 2035 !== Ls.push(i) && la === ge.requestAnimationFrame || ((la = ge.requestAnimationFrame) || fd)(Id)), i.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-5435 + 1 * 5435);
  })), Ni = ce = null;
}, ge.__c = function(x, i) {
  i.some(function(t) {
    try {
      t.__h.forEach(hx), t.__h = t.__h.filter(function(e) {
        return !e.__ || uo(e);
      });
    } catch (e) {
      i.some(function(n) {
        n.__h && (n.__h = []);
      }), i = [], ge.__e(e, t.__v);
    }
  }), pa && pa(x, i);
}, ge.unmount = function(x) {
  ha && ha(x);
  var i, t = x.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      hx(e);
    } catch (n) {
      i = n;
    }
  }), t.__H = void (25 * 149 + -5637 + -1 * -1912), i && ge.__e(i, t.__v));
};
var ba = typeof requestAnimationFrame == "function";
function fd(x) {
  var i, t = function() {
    clearTimeout(e), ba && cancelAnimationFrame(i), setTimeout(x);
  }, e = setTimeout(t, 100);
  ba && (i = requestAnimationFrame(t));
}
function hx(x) {
  var i = ce, t = x.__c;
  typeof t == "function" && (x.__c = void (-1 * -3146 + -3 * -351 + -19 * 221), t()), ce = i;
}
function uo(x) {
  var i = ce;
  x.__c = x.__(), ce = i;
}
function dr(x, i) {
  return !x || x.length !== i.length || i.some(function(t, e) {
    return t !== x[e];
  });
}
function Fs(x, i) {
  return typeof i == "function" ? i(x) : i;
}
function Ys(x, i) {
  for (var t in i) x[t] = i[t];
  return x;
}
function lo(x, i) {
  for (var t in x) if (t !== "__source" && !(t in i)) return !(-1877 + 42 * -214 + 10865);
  for (var e in i) if (e !== "__source" && x[e] !== i[e]) return !(7072 + 9523 * 1 + 16595 * -1);
  return !(-3713 + 3714 * 1);
}
function Io(x, i) {
  this.props = x, this.context = i;
}
function Cd(x, i) {
  function t(n) {
    var o = this.props.ref, r = o == n.ref;
    return !r && o && (o.call ? o(null) : o.current = null), i ? !i(this.props, n) || !r : lo(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, Le(x, n);
  }
  return e.displayName = "Memo(" + (x.displayName || x.name) + ")", e.prototype.isReactComponent = !(8035 * -1 + 6425 + 1610), e.__f = !(-9412 + -4903 * 2 + 19218), e;
}
(Io.prototype = new it()).isPureReactComponent = !(-2564 * -3 + 2398 + -10090), Io.prototype.shouldComponentUpdate = function(x, i) {
  return lo(this.props, x) || lo(this.state, i);
};
var Aa = F.__b;
F.__b = function(x) {
  x.type && x.type.__f && x.ref && (x.props.ref = x.ref, x.ref = null), Aa && Aa(x);
};
var pd = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function js(x) {
  function i(t) {
    var e = Ys({}, t);
    return delete e.ref, x(e, t.ref || null);
  }
  return i.$$typeof = pd, i.render = i, i.prototype.isReactComponent = i.__f = !(596 * -4 + -6021 + 8405), i.displayName = "ForwardRef(" + (x.displayName || x.name) + ")", i;
}
var ya = function(x, i) {
  return x == null ? null : Vt(Vt(x).map(i));
}, hd = { map: ya, forEach: ya, count: function(x) {
  return x ? Vt(x).length : 1 * 1563 + -6068 + 17 * 265;
}, only: function(x) {
  var i = Vt(x);
  if (-9463 * 1 + -25 * 38 + 41 * 254 !== i.length) throw "Children.only";
  return i[-2 * -2669 + -1068 + -14 * 305];
}, toArray: Vt }, md = F.__e;
F.__e = function(x, i, t, e) {
  if (x.then) {
    for (var n, o = i; o = o.__; ) if ((n = o.__c) && n.__c) return i.__e == null && (i.__e = t.__e, i.__k = t.__k), n.__c(x, i);
  }
  md(x, i, t, e);
};
var va = F.unmount;
function Ms(x, i, t) {
  return x && (x.__c && x.__c.__H && (x.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), x.__c.__H = null), (x = Ys({}, x)).__c != null && (x.__c.__P === t && (x.__c.__P = i), x.__c = null), x.__k = x.__k && x.__k.map(function(e) {
    return Ms(e, i, t);
  })), x;
}
function _s(x, i, t) {
  return x && t && (x.__v = null, x.__k = x.__k && x.__k.map(function(e) {
    return _s(e, i, t);
  }), x.__c && x.__c.__P === i && (x.__e && t.appendChild(x.__e), x.__c.__e = !(-10892 + -7 * -1556), x.__c.__P = t)), x;
}
function mx() {
  this.__u = -2841 + 3 * 947, this.t = null, this.__b = null;
}
function Xs(x) {
  var i = x.__.__c;
  return i && i.__a && i.__a(x);
}
function bd(x) {
  var i, t, e;
  function n(o) {
    if (i || (i = x()).then(function(r) {
      t = r.default || r;
    }, function(r) {
      e = r;
    }), e) throw e;
    if (!t) throw i;
    return Le(t, o);
  }
  return n.displayName = "Lazy", n.__f = !(10 * -219 + -8161 + 10351), n;
}
function gn() {
  this.u = null, this.o = null;
}
F.unmount = function(x) {
  var i = x.__c;
  i && i.__R && i.__R(), i && -1 * -4267 + -3713 + -1 * 522 & x.__u && (x.type = null), va && va(x);
}, (mx.prototype = new it()).__c = function(x, i) {
  var t = i.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = Xs(e.__v), o = !(-151 * -38 + 1 * 4 + -5741), r = function() {
    o || (o = !(1194 * 5 + -262 * -27 + -13044), t.__R = null, n ? n(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var s = e.state.__a;
        e.__v.__k[1 * 9922 + 1293 * 5 + -1 * 16387] = _s(s, s.__c.__P, s.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.t.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || 7825 * -1 + 1649 + 6208 & i.__u || e.setState({ __a: e.__b = e.__v.__k[8733 + -635 * -10 + 1 * -15083] }), x.then(r, r);
}, mx.prototype.componentWillUnmount = function() {
  this.t = [];
}, mx.prototype.render = function(x, i) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-4056 + 101 * 55 + -1499].__c;
      this.__v.__k[2994 + -4 * -971 + -6878] = Ms(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = i.__a && Le(rt, null, x.fallback);
  return n && (n.__u &= -(2 * 3796 + 16 * -294 + 571 * -5)), [Le(rt, null, i.__a ? null : x.children), n];
};
var Wa = function(x, i, t) {
  if (++t[1 * 6065 + -179 * -31 + -7 * 1659] === t[-7260 + -25 * 110 + -7 * -1430] && x.o.delete(i), x.props.revealOrder && (x.props.revealOrder[-10 * -21 + 3963 + -4173] !== "t" || !x.o.size)) for (t = x.u; t; ) {
    for (; t.length > -1940 + 1943 * 1; ) t.pop()();
    if (t[-7831 + 337 * 1 + 7495] < t[-6470 + -3 * 541 + -1 * -8093]) break;
    x.u = t = t[1 * -8691 + 28 * -71 + -1 * -10681];
  }
};
function Ad(x) {
  return this.getChildContext = function() {
    return x.context;
  }, x.children;
}
function yd(x) {
  var i = this, t = x.i;
  i.componentWillUnmount = function() {
    _t(null, i.l), i.l = null, i.i = null;
  }, i.i && i.i !== t && i.componentWillUnmount(), i.l || (i.i = t, i.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(-2064 + 12 * 172);
  }, appendChild: function(e) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> -557 * -2 + -2 * 3092 + -461 * -11, 169 * 46 + 7478 + -1 * 15251), i.i.removeChild(e);
  } }), _t(Le(Ad, { context: i.context }, x.__v), i.l);
}
function vd(x, i) {
  var t = {};
  t.__v = x, t.i = i;
  var e = Le(yd, t);
  return e.containerInfo = i, e;
}
(gn.prototype = new it()).__a = function(x) {
  var i = this, t = Xs(i.__v), e = i.o.get(x);
  return e[-1 * 331 + -2278 + 2609 * 1]++, function(n) {
    var o = function() {
      i.props.revealOrder ? (e.push(n), Wa(i, x, e)) : n();
    };
    t ? t(o) : o();
  };
}, gn.prototype.render = function(x) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var i = Vt(x.children);
  x.revealOrder && x.revealOrder[-7607 * -1 + 127 * -37 + 1 * -2908] === "b" && i.reverse();
  for (var t = i.length; t--; ) this.o.set(i[t], this.u = [7229 * 1 + -7286 + -1 * -58, 0, this.u]);
  return x.children;
}, gn.prototype.componentDidUpdate = gn.prototype.componentDidMount = function() {
  var x = this;
  this.o.forEach(function(i, t) {
    Wa(x, t, i);
  });
};
var Js = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 67630 + 13 * -579, Wd = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Sd = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, wd = /[A-Z0-9]/g, Bd = typeof document < "u", Gd = function(x) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(x);
};
function kd(x, i, t) {
  return i.__k == null && (i.textContent = ""), _t(x, i), typeof t == "function" && t(), x ? x.__c : null;
}
function Od(x, i, t) {
  return ar(x, i), typeof t == "function" && t(), x ? x.__c : null;
}
it.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(x) {
  Object.defineProperty(it.prototype, x, { configurable: !(3 * 3263 + -8284 + 1505 * -1), get: function() {
    return this["UNSAFE_" + x];
  }, set: function(i) {
    var t = {};
    t.configurable = !(4785 + 1977 * -3 + 1146), t.writable = !(38 * -89 + -7897 + 11279), t.value = i, Object.defineProperty(this, x, t);
  } });
});
var Sa = F.event;
function Hd() {
}
function Zd() {
  return this.cancelBubble;
}
function Rd() {
  return this.defaultPrevented;
}
F.event = function(x) {
  return Sa && (x = Sa(x)), x.persist = Hd, x.isPropagationStopped = Zd, x.isDefaultPrevented = Rd, x.nativeEvent = x;
};
var bx = {};
bx.enumerable = !(-7994 + 148 * 42 + 1779), bx.configurable = !(7052 + 439 * 8 + -10564), bx.get = function() {
  return this.class;
};
var ur, Kd = bx, wa = F.vnode;
F.vnode = function(x) {
  typeof x.type == "string" && function(i) {
    var t = i.props, e = i.type, n = {};
    for (var o in t) {
      var r = t[o];
      if (!(o === "value" && "defaultValue" in t && r == null || Bd && o === "children" && e === "noscript" || o === "class" || o === "className")) {
        var a = o.toLowerCase();
        o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && !(-2 * 764 + -6187 + 7715) === r ? r = "" : a === "translate" && r === "no" ? r = !(-4677 * 1 + 8617 + 3939 * -1) : a === "ondoubleclick" ? o = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || Gd(t.type) ? a === "onfocus" ? o = "onfocusin" : a === "onblur" ? o = "onfocusout" : Sd.test(o) ? o = a : -(-7205 + 3 * -895 + 1413 * 7) === e.indexOf("-") && Wd.test(o) ? o = o.replace(wd, "-$&").toLowerCase() : r === null && (r = void (1955 + 8213 * -1 + 6258)) : a = o = "oninput", a === "oninput" && n[o = a] && (o = "oninputCapture"), n[o] = r;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Vt(t.children).forEach(function(s) {
      s.props.selected = n.value.indexOf(s.props.value) != -1;
    })), e == "select" && n.defaultValue != null && (n.value = Vt(t.children).forEach(function(s) {
      s.props.selected = n.multiple ? -(-904 * -5 + -1 * -173 + 23 * -204) != n.defaultValue.indexOf(s.props.value) : n.defaultValue == s.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", Kd)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), i.props = n;
  }(x), x.$$typeof = Js, wa && wa(x);
};
var Ba = F.__r;
F.__r = function(x) {
  Ba && Ba(x), ur = x.__c;
};
var Ga = F.diffed;
F.diffed = function(x) {
  Ga && Ga(x);
  var i = x.props, t = x.__e;
  t != null && x.type === "textarea" && "value" in i && i.value !== t.value && (t.value = i.value == null ? "" : i.value), ur = null;
};
var Se = {};
Se.readContext = function(x) {
  return ur.__n[x.__c].props.value;
}, Se.useCallback = ze, Se.useContext = h0, Se.useDebugValue = Px, Se.useDeferredValue = qs, Se.useEffect = ae, Se.useId = Ns, Se.useImperativeHandle = Ds, Se.useInsertionEffect = ec, Se.useLayoutEffect = J0, Se.useMemo = Ue, Se.useReducer = gr, Se.useRef = ke, Se.useState = De, Se.useSyncExternalStore = tc, Se.useTransition = $s;
var Qs = {};
Qs.current = Se;
var Us = {};
Us.ReactCurrentDispatcher = Qs;
var Pd = Us;
function Vd(x) {
  return Le.bind(null, x);
}
function Ci(x) {
  return !!x && x.$$typeof === Js;
}
function Td(x) {
  return Ci(x) && x.type === rt;
}
function Ed(x) {
  return !!x && !!x.displayName && (typeof x.displayName == "string" || x.displayName instanceof String) && x.displayName.startsWith("Memo(");
}
function Ld(x) {
  return Ci(x) ? sr.apply(null, arguments) : x;
}
function Dd(x) {
  return !!x.__k && (_t(null, x), !0);
}
function Nd(x) {
  return x && (x.base || -157 * 54 + 4990 + 3489 === x.nodeType && x) || null;
}
var Fd = function(x, i) {
  return x(i);
}, Yd = function(x, i) {
  return x(i);
}, jd = rt;
function zs(x) {
  x();
}
function qs(x) {
  return x;
}
function $s() {
  return [!(739 * -4 + -17 * 313 + -4139 * -2), zs];
}
var ec = J0, Md = Ci;
function tc(x, i) {
  var t = i(), e = De({ h: { __: t, v: i } }), n = e[0].h, o = e[-1 * 1261 + -1 * -8577 + -7315];
  return J0(function() {
    n.__ = t, n.v = i, Fi(n) && o({ h: n });
  }, [x, t, i]), ae(function() {
    return Fi(n) && o({ h: n }), x(function() {
      Fi(n) && o({ h: n });
    });
  }, [x]), t;
}
function Fi(x) {
  var i, t, e = x.v, n = x.__;
  try {
    var o = e();
    return !((i = n) === (t = o) && (-4168 + -5228 * 1 + 9396 !== i || (2908 + -9 * 808 + 4365) / i == (-7027 * 1 + -1 * -9669 + -1 * 2641) / t) || i != i && t != t);
  } catch {
    return !0;
  }
}
var N = {};
N.useState = De, N.useId = Ns, N.useReducer = gr, N.useEffect = ae, N.useLayoutEffect = J0, N.useInsertionEffect = ec, N.useTransition = $s, N.useDeferredValue = qs, N.useSyncExternalStore = tc, N.startTransition = zs, N.useRef = ke, N.useImperativeHandle = Ds, N.useMemo = Ue, N.useCallback = ze, N.useContext = h0, N.useDebugValue = Px, N.version = "17.0.2", N.Children = hd, N.render = kd, N.hydrate = Od, N.unmountComponentAtNode = Dd, N.createPortal = vd, N.createElement = Le, N.createContext = jn, N.createFactory = Vd, N.cloneElement = Ld, N.createRef = $g, N.Fragment = rt, N.isValidElement = Ci, N.isElement = Md, N.isFragment = Td, N.isMemo = Ed, N.findDOMNode = Nd, N.Component = it, N.PureComponent = Io, N.memo = Cd, N.forwardRef = js, N.flushSync = Yd, N.unstable_batchedUpdates = Fd, N.StrictMode = jd, N.Suspense = mx, N.SuspenseList = gn, N.lazy = bd, N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pd;
var I0 = N, _d = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xd(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Jd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Qd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") && Object.keys(x).length === 1 ? x.default : x;
}
function Ud(x) {
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
const zd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: _d,
  getAugmentedNamespace: Ud,
  getDefaultExportFromCjs: Xd,
  getDefaultExportFromNamespaceIfNotNamed: Qd,
  getDefaultExportFromNamespaceIfPresent: Jd
}, Symbol.toStringTag, { value: "Module" }));
var qd = function(i, t, e, n) {
  var o = e ? e.call(n, i, t) : void 0;
  if (o !== void 0) return !!o;
  if (i === t) return !0;
  if (typeof i != "object" || !i || typeof t != "object" || !t) return !1;
  var r = Object.keys(i), a = Object.keys(t);
  if (r.length !== a.length) return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = 2869 * -1 + -11 * -262 + -13; c < r.length; c++) {
    var d = r[c];
    if (!s(d)) return !1;
    var g = i[d], C = t[d];
    if (o = e ? e.call(n, g, C, d) : void 0, o === !1 || o === void (-7335 + 9 * 815) && g !== C) return !1;
  }
  return !0;
};
const $d = zd.getDefaultExportFromCjs(qd);
var se = "-ms-", hn = "-moz-", ne = "-webkit-", nc = "comm", pi = "rule", lr = "decl", eu = "@import", xc = "@keyframes", tu = "@layer", ic = Math.abs, Ir = String.fromCharCode, fo = Object.assign;
function nu(x, i) {
  return ve(x, -20 * 326 + -5 * 85 + 6945) ^ -3929 + 1751 * 3 + 1 * -1279 ? (((i << -1 * -5293 + -94 * 52 + -403 * 1 ^ ve(x, -1 * 5089 + 241 * -4 + 6053 * 1)) << 4 * -2479 + 877 + 9041 * 1 ^ ve(x, 8804 * -1 + 9452 * 1 + -647)) << -6414 + -6416 * -1 ^ ve(x, -814 + 2 * 1714 + -2 * 1306)) << -4657 + 1 * 4659 ^ ve(x, -9199 + -43 * -214) : -2 * 556 + -1103 * 1 + -5 * -443;
}
function oc(x) {
  return x.trim();
}
function Ht(x, i) {
  return (x = i.exec(x)) ? x[0] : x;
}
function Y(x, i, t) {
  return x.replace(i, t);
}
function Ax(x, i, t) {
  return x.indexOf(i, t);
}
function ve(x, i) {
  return x.charCodeAt(i) | 0;
}
function F0(x, i, t) {
  return x.slice(i, t);
}
function bt(x) {
  return x.length;
}
function rc(x) {
  return x.length;
}
function dn(x, i) {
  return i.push(x), x;
}
function xu(x, i) {
  return x.map(i).join("");
}
function ka(x, i) {
  return x.filter(function(t) {
    return !Ht(t, i);
  });
}
var hi = -535 + -1 * -536, Y0 = 102 + -76 * -83 + -6409 * 1, ac = 7510 + 297 * -11 + -4243, at = -1 * 9843 + 726 + 3 * 3039, Ce = -4652 + 171 * 18 + 1574, Q0 = "";
function mi(x, i, t, e, n, o, r, a) {
  var s = {};
  return s.value = x, s.root = i, s.parent = t, s.type = e, s.props = n, s.children = o, s.line = hi, s.column = Y0, s.length = r, s.return = "", s.siblings = a, s;
}
function Ft(x, i) {
  return fo(mi("", null, null, "", null, null, -4167 + 463 * 9, x.siblings), x, { length: -x.length }, i);
}
function O0(x) {
  for (; x.root; ) x = Ft(x.root, { children: [x] });
  dn(x, x.siblings);
}
function iu() {
  return Ce;
}
function ou() {
  return Ce = at > -2713 + -36 * 69 + 5197 * 1 ? ve(Q0, --at) : -32 * -156 + -4033 + 137 * -7, Y0--, Ce === -11302 + 1 * 11312 && (Y0 = -9631 * -1 + -8200 + -1430 * 1, hi--), Ce;
}
function lt() {
  return Ce = at < ac ? ve(Q0, at++) : 1015 * 2 + 1 * -6893 + 4863, Y0++, Ce === -1 * 70 + -123 * -41 + 7 * -709 && (Y0 = 1, hi++), Ce;
}
function d0() {
  return ve(Q0, at);
}
function yx() {
  return at;
}
function bi(x, i) {
  return F0(Q0, x, i);
}
function Co(x) {
  switch (x) {
    case 2 * 3412 + -877 * -2 + -8578:
    case 1 * 5254 + 7737 + -12982:
    case 2120 + 9246 * 1 + -11356 * 1:
    case 1 * 7399 + -9 * -601 + -2559 * 5:
    case 1462 + -174 * -11 + 19 * -176:
      return 4 * 733 + 9343 * 1 + -6135 * 2;
    case -8088 + -147 * 15 + 10326:
    case 43:
    case 113 * 4 + 6672 + -7080:
    case 3500 * -1 + -1481 + 5028:
    case -6834 + 65 * -74 + 11706:
    case 64:
    case 11 * 101 + 4 * -1945 + 6795:
    case 2 * 826 + -3006 + 1413:
    case 123:
    case -2075 * 2 + -4631 + 8906:
      return -5320 + -331 * 5 + 6979;
    case -2 * 399 + 8238 + 1 * -7382:
      return 449 * 18 + 137 * 15 + -2 * 5067;
    case -1 * -6982 + 188 + -32 * 223:
    case -436 * 6 + 6227 * -1 + 8882:
    case 17153 + 17113 * -1:
    case -1779 + 1294 * -1 + 3164:
      return 2;
    case 6057 + -13 * -563 + -13335:
    case -6 * 69 + -5 * -1891 + 2237 * -4:
      return 5893 + 4 * -1749 + 1104;
  }
  return 598 * -8 + 8981 + -4197;
}
function ru(x) {
  return hi = Y0 = -3767 * -2 + -9101 * -1 + -16634, ac = bt(Q0 = x), at = 232 * 12 + -5 * 618 + 306, [];
}
function au(x) {
  return Q0 = "", x;
}
function Yi(x) {
  return oc(bi(at - (-2531 + -8490 * 1 + 3674 * 3), po(x === 91 ? x + (23 * 277 + 9 * -747 + -2 * -177) : x === 40 ? x + (10729 + 9 * -1192) : x)));
}
function su(x) {
  for (; (Ce = d0()) && Ce < 153 * 11 + 4286 * 1 + 8 * -742; ) lt();
  return Co(x) > 55 * 93 + -5623 * -1 + -2684 * 4 || Co(Ce) > 3 ? "" : " ";
}
function cu(x, i) {
  for (; --i && lt() && !(Ce < -2474 * -4 + 877 * -1 + -1 * 8971 || Ce > 89 * -103 + -3540 + 12809 * 1 || Ce > -418 * -13 + 11 * -45 + -1 * 4882 && Ce < -219 + -6553 * 1 + -43 * -159 || Ce > 8087 * 1 + -9871 * 1 + 6 * 309 && Ce < 97); ) ;
  return bi(x, yx() + (i < -1237 * -3 + -3142 + -563 && d0() == -453 * 5 + 1580 * 2 + 1 * -863 && lt() == -9212 + -2 * 527 + 10298));
}
function po(x) {
  for (; lt(); ) switch (Ce) {
    case x:
      return at;
    case -57 * -134 + 2782 + -10386:
    case 1 * -8461 + 1997 * -1 + 10497:
      x !== -1 * 8197 + 6538 + 1 * 1693 && x !== 7182 + 1145 * 7 + -15158 && po(Ce);
      break;
    case -5463 + 139 * 55 + 18 * -119:
      x === 4847 * 1 + 2233 + -7039 && po(x);
      break;
    case 13 + 61 * 104 + -6265:
      lt();
      break;
  }
  return at;
}
function gu(x, i) {
  for (; lt() && x + Ce !== 47 + (1847 * -2 + -8736 + 12440); ) if (x + Ce === 42 + (6370 * 1 + 8317 + -14645) && d0() === -5434 * -1 + -13 * 631 + 2816) break;
  return "/*" + bi(i, at - (8463 + 793 * -5 + -1499 * 3)) + "*" + Ir(x === -7430 * -1 + 478 + -1123 * 7 ? x : lt());
}
function du(x) {
  for (; !Co(d0()); ) lt();
  return bi(x, at);
}
function uu(x) {
  return au(vx("", null, null, null, [""], x = ru(x), 868 * -4 + 1 * -6465 + 9937, [7331 * -1 + -663 * 6 + 11309], x));
}
function vx(x, i, t, e, n, o, r, a, s) {
  for (var c = 0, d = 1064 + -2 * 532, g = r, C = 0, u = -1 * -4076 + -42 * -2 + -104 * 40, p = -6659 * 1 + 6915 + 128 * -2, m = -9866 + 143 * 69, A = 9671 * -1 + 6 * 761 + 5106, l = -41 * 86 + 8 * -646 + 8695 * 1, W = -3851 + 4343 * -1 + 8194, Z = "", M = n, _ = o, X = e, H = Z; A; ) switch (p = W, W = lt()) {
    case 40:
      if (p != 108 && ve(H, g - (6041 * -1 + 2276 * -1 + 8318)) == 1 * -4007 + -5285 + -1870 * -5) {
        Ax(H += Y(Yi(W), "&", "&\f"), "&\f", ic(c ? a[c - (-47 * 157 + 1713 * 1 + 5667)] : 5406 + 159 * -34)) != -(-11 * 725 + 6528 + 1448) && (l = -1);
        break;
      }
    case -1105 + 1 * -4913 + 6052:
    case -1346 * -2 + -6258 + 103 * 35:
    case 1 * 7599 + -4667 + -947 * 3:
      H += Yi(W);
      break;
    case -8620 + -8629 * -1:
    case 10:
    case 13:
    case 7 * -541 + -1 * 4327 + 8146:
      H += su(p);
      break;
    case -5263 + 1 * 5355:
      H += cu(yx() - (-10 * 347 + 1 * -177 + 3648), -7933 + 1027 * -4 + 12048);
      continue;
    case -1 * 1082 + 1675 + 1 * -546:
      switch (d0()) {
        case -9267 + -1 * 1602 + 1 * 10911:
        case 1737 * -3 + 9781 * -1 + -557 * -27:
          dn(lu(gu(lt(), yx()), i, t, s), s);
          break;
        default:
          H += "/";
      }
      break;
    case 123 * m:
      a[c++] = bt(H) * l;
    case (-1300 + 1 * -2693 + 58 * 71) * m:
    case 27 * 278 + -1979 * -2 + 2281 * -5:
    case -1895 * 3 + 1 * 2323 + 1 * 3362:
      switch (W) {
        case -1901 + -9083 * 1 + 10984:
        case 125:
          A = -1 * 1093 + -359 * -2 + 375;
        case -2844 + 6 * 1641 + -6943 + d:
          l == -(-2207 + 95 * -69 + 8763) && (H = Y(H, /\f/g, "")), u > -727 + 3299 * 3 + -1834 * 5 && bt(H) - g && dn(u > 292 + 130 * -2 ? Ha(H + ";", e, t, g - (8 * -641 + -5219 + 10348), s) : Ha(Y(H, " ", "") + ";", e, t, g - (2443 + 1 * -2441), s), s);
          break;
        case 3686 * -2 + -1277 + -1244 * -7:
          H += ";";
        default:
          if (dn(X = Oa(H, i, t, c, d, n, a, Z, M = [], _ = [], g, o), o), W === 765 + -2 * -3343 + -7328)
            if (d === 4483 * 1 + -8709 + 4226) vx(H, i, X, X, M, o, g, a, _);
            else switch (C === 3045 + -43 * 3 + 2817 * -1 && ve(H, -2123 + 4831 * -2 + 11788 * 1) === 4 * -2005 + 9224 + 547 * -2 ? -172 * -3 + 8788 + -118 * 78 : C) {
              case -4117 + -126 * 54 + -103 * -107:
              case 108:
              case -9479 * -1 + 2525 + -11895:
              case 1335 + -1 * -499 + 3 * -573:
                vx(x, X, X, e && dn(Oa(x, X, X, -7 * -153 + -4273 * 1 + 2 * 1601, -705 * 7 + -9243 + 14178, n, a, Z, n, M = [], g, _), _), n, _, g, a, e ? M : _);
                break;
              default:
                vx(H, X, X, X, [""], _, 903 * 4 + -8826 + 5214, a, _);
            }
      }
      c = d = u = -23 * -127 + 7848 + -979 * 11, m = l = -197 * 31 + 8616 + 627 * -4, Z = H = "", g = r;
      break;
    case -4896 + -5321 * 1 + -15 * -685:
      g = -6823 * 1 + 3477 * -1 + 1 * 10301 + bt(H), u = p;
    default:
      if (m < 2271 * -3 + -10 * -900 + 2 * -1093) {
        if (W == 6159 * -1 + -1 * 4495 + 10777) --m;
        else if (W == -2625 * 3 + 1 * 743 + 7257 && m++ == 4957 + 124 * -54 + 1739 && ou() == 125) continue;
      }
      switch (H += Ir(W), W * m) {
        case -1 * -743 + 1 * 3911 + -1154 * 4:
          l = d > -6328 + -3 * -1201 + 2725 ? -2 * -2577 + -4 * 1347 + 235 : (H += "\f", -(26 * -272 + -3558 + -1 * -10631));
          break;
        case -4836 * 1 + -3596 + 8476:
          a[c++] = (bt(H) - (3084 + -1486 * -6 + -11999)) * l, l = -251 * -5 + 2e3 + 3254 * -1;
          break;
        case -292 * -13 + -6779 + 3047:
          d0() === -1 * -9079 + 6427 + -15461 * 1 && (H += Yi(lt())), C = d0(), d = g = bt(Z = H += du(yx())), W++;
          break;
        case -224 * -30 + 7290 + 285 * -49:
          p === -1415 + 3 * 1032 + -2 * 818 && bt(H) == -16391 + 1261 * 13 && (m = 13718 + -1 * 13718);
      }
  }
  return o;
}
function Oa(x, i, t, e, n, o, r, a, s, c, d, g) {
  for (var C = n - 1, u = n === -1940 + 10 * 194 ? o : [""], p = rc(u), m = -10 * 701 + -5822 + 12832, A = 0, l = 6456 + -203 * -2 + -6862; m < e; ++m) for (var W = -5244 + 9 * 201 + 3435, Z = F0(x, C + 1, C = ic(A = r[m])), M = x; W < p; ++W) (M = oc(A > -5113 + 587 * 7 + 1004 ? u[W] + " " + Z : Y(Z, /&\f/g, u[W]))) && (s[l++] = M);
  return mi(x, i, t, n === 9 * 293 + -1598 + 1 * -1039 ? pi : a, s, c, d, g);
}
function lu(x, i, t, e) {
  return mi(x, i, t, nc, Ir(iu()), F0(x, 7383 * 1 + -363 + 58 * -121, -(-3839 + 8771 * -1 + 2102 * 6)), -9509 + 1 * -2259 + 11768, e);
}
function Ha(x, i, t, e, n) {
  return mi(x, i, t, lr, F0(x, -1 * 9677 + 199 * 3 + 9080, e), F0(x, e + (-4938 + 13 * 501 + -1 * 1574), -(-1228 + 1229 * 1)), e, n);
}
function sc(x, i, t) {
  switch (nu(x, i)) {
    case -3419 + 5107 * 1 + -3415 * -1:
      return ne + "print-" + x + x;
    case 11362 + -1901 * 2 + -1823:
    case -1464 + 1 * -9346 + 15011:
    case 693 + 5 * 83 + -2069 * -1:
    case 3433:
    case -9705 + 121 * 57 + -3 * -1483:
    case -1276 + -57 * 145 + 4666 * 3:
    case -1744 + -4665 * -1:
    case 3094 + -813 * -3 + 3 * 13:
    case 1 * 2807 + 5502 + 651 * -3:
    case 6711 + -9 * 1251 + 3464 * 3:
    case -1485 * -3 + -730 * 13 + 8226 * 1:
    case 8722 + -1 * -7243 + -1864 * 5:
    case 6 * -331 + -5681 + 10672:
    case 10348 + -2215 * -2 + -1 * 8387:
    case -7961 * 1 + -8162 + 22002:
    case -2 * -3509 + -9485 + 8090:
    case -11418 + 8 * 111 + 1 * 16665:
    case -9231 * -1 + 1576 * -3 + -4 * -24:
    case -8036 + 4701 * 1 + -39 * -210:
    case 34 * 215 + 2 * -3632 + 4169:
    case 6389:
    case 1866 + 1081 * 3:
    case 869 * -2 + 11 * -865 + -2374 * -7:
    case 4745 + -20 * 107 + 8 * 377:
    case 2 * 167 + -1 * 9446 + -12941 * -1:
      return ne + x + x;
    case -1 * -283 + -5841 + 3 * 3449:
      return hn + x + x;
    case 4 * -1973 + -14 * -362 + 8173 * 1:
    case -10021 + -14267 * -1:
    case 4810:
    case -206 * -35 + -12864 + -1 * -12622:
    case 2756:
      return ne + x + hn + x + se + x + x;
    case -165 + -6101 * -1:
      switch (ve(x, i + 11)) {
        case 114:
          return ne + x + se + Y(x, /[svh]\w+-[tblr]{2}/, "tb") + x;
        case 10 * 362 + 4313 + -7825:
          return ne + x + se + Y(x, /[svh]\w+-[tblr]{2}/, "tb-rl") + x;
        case -14 * 326 + 5574 + 965 * -1:
          return ne + x + se + Y(x, /[svh]\w+-[tblr]{2}/, "lr") + x;
      }
    case -855 * 9 + 7 * -1341 + 23910:
    case -12674 + -8471 * -2:
    case -1129 * -3 + 348 * 12 + -4660:
      return ne + x + se + x + x;
    case -1 * -373 + -1 * 1283 + 7075:
      return ne + x + se + "flex-" + x + x;
    case 5187:
      return ne + x + Y(x, /(\w+).+(:[^]+)/, ne + "box-$1$2" + se + "flex-$1$2") + x;
    case 567 + -981 * -4 + 952:
      return ne + x + se + "flex-item-" + Y(x, /flex-|-self/g, "") + (Ht(x, /flex-|baseline/) ? "" : se + "grid-row-" + Y(x, /flex-|-self/g, "")) + x;
    case -2 * 1481 + 2644 + 4993 * 1:
      return ne + x + se + "flex-line-pack" + Y(x, /align-content|flex-|-self/g, "") + x;
    case -5532 + 2 * 3561 + -1 * -3958:
      return ne + x + se + Y(x, "shrink", "negative") + x;
    case -2444 + -7797 * 1 + 15533:
      return ne + x + se + Y(x, "basis", "preferred-size") + x;
    case 4677 * 1 + 1 * 151 + -22 * -56:
      return ne + "box-" + Y(x, "-grow", "") + ne + x + se + Y(x, "grow", "positive") + x;
    case -4969 + -397 * 17 + 16272:
      return ne + Y(x, /([^-])(transform)/g, "$1" + ne + "$2") + x;
    case 43 * 55 + -99 * 6 + -4416 * -1:
      return Y(Y(Y(x, /(zoom-|grab)/, ne + "$1"), /(image-set)/, ne + "$1"), x, "") + x;
    case -5180 + -817 * 9 + -4 * -4507:
    case -3105 + 835 * 5 + 9 * 321:
      return Y(x, /(image-set\([^]*)/, ne + "$1$`$1");
    case 4968:
      return Y(Y(x, /(.+:)(flex-)?(.*)/, ne + "box-pack:$3" + se + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ne + x + x;
    case 9990 + 33 * -292 + -1923 * -2:
      if (!Ht(x, /flex-|baseline/)) return se + "grid-column-align" + F0(x, i) + x;
      break;
    case -4449 + 18 * -203 + 1 * 10695:
    case 6846 + 5823 * -1 + 1 * 2337:
      return se + Y(x, "template-", "") + x;
    case 1 * 8337 + 2599 + 546 * -12:
    case 1088 + -8259 * -1 + -5731:
      return t && t.some(function(e, n) {
        return i = n, Ht(e.props, /grid-\w+-end/);
      }) ? ~Ax(x + (t = t[i].value), "span", -61 * 163 + 2489 + 7454 * 1) ? x : se + Y(x, "-start", "") + x + se + "grid-row-span:" + (~Ax(t, "span", 6105 + 2171 * -3 + 408) ? Ht(t, /\d+/) : +Ht(t, /\d+/) - +Ht(x, /\d+/)) + ";" : se + Y(x, "-start", "") + x;
    case 6620 + 3583 * -2 + 1814 * 3:
    case -6416 * 1 + 789 + 9755:
      return t && t.some(function(e) {
        return Ht(e.props, /grid-\w+-start/);
      }) ? x : se + Y(Y(x, "-end", "-span"), "span ", "") + x;
    case -18312 + -22407 * -1:
    case 379 * 23 + -3784 + -1350:
    case -3109 * 1 + 2789 + -4 * -1097:
    case -11185 + -13717 * -1:
      return Y(x, /(.+)-inline(.+)/, ne + "$1$2") + x;
    case -2629 + -2149 * -5:
    case 7 * -713 + 7524 + 4526:
    case 5469 + 341 * -2 + 966:
    case 6690 + -1 * 1155:
    case -23 * -311 + 3076 + -4784:
    case 11790 + 1 * -6089:
    case -9663 * -1 + 5 * 1316 + 2262 * -5:
    case 2 * 2983 + 2009 + -3298:
    case 1823 * -6 + -1412 + 17883:
    case 11101 * 1 + -4049 * -1 + 11 * -851:
    case 3169 * -1 + 10019 + -31 * 59:
    case -22 * 242 + 1617 * -6 + 19791:
      if (bt(x) - (2 * -2395 + 9388 * -1 + 14179 * 1) - i > -3149 + -59 * 119 + 10176) switch (ve(x, i + (-1 * -3033 + -9887 * -1 + 12919 * -1))) {
        case -3264 + -778 * -2 + 1817:
          if (ve(x, i + (-307 * 5 + -49 * -191 + 20 * -391)) !== -733 + 791 * -8 + 7106) break;
        case -430 * 17 + 34 * -254 + 16048:
          return Y(x, /(.+:)(.+)-([^]+)/, "$1" + ne + "$2-$3$1" + hn + (ve(x, i + (1 * -1489 + 2188 + -696)) == 108 ? "$3" : "$2-$3")) + x;
        case 389 * 4 + 4929 + 182 * -35:
          return ~Ax(x, "stretch", 4473 + -343 * 19 + 2044) ? sc(Y(x, "stretch", "fill-available"), i, t) + x : x;
      }
      break;
    case 1121 * -1 + -44 + 6317:
    case -46 * 163 + 10564 + 2854:
      return Y(x, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, o, r, a, s, c) {
        return se + n + ":" + o + c + (r ? se + n + "-span:" + (a ? s : +s - +o) + c : "") + x;
      });
    case 10800 + -5851 * 1:
      if (ve(x, i + (651 + 43 * -15)) === 121) return Y(x, ":", ":" + ne) + x;
      break;
    case 1 * 5793 + 12663 + 1001 * -12:
      switch (ve(x, ve(x, 8078 * 1 + 2 * -2484 + 3096 * -1) === -6696 + -1 * 8083 + 14824 ? 18 : -6564 + 3 * 1228 + 2891)) {
        case 969 + 2092 * 1 + -2941 * 1:
          return Y(x, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ne + (ve(x, 4422 + -2 * 1013 + 2382 * -1) === -31 * 319 + -119 * -4 + 9458 ? "inline-" : "") + "box$3$1" + ne + "$2$3$1" + se + "$2box$3") + x;
        case 1 * 7984 + -9169 + 1285:
          return Y(x, ":", ":" + se) + x;
      }
      break;
    case 3947 * 1 + -2 * 2780 + 7332:
    case 3911 + 79 * -16:
    case 2135:
    case 8446 + -7187 * 1 + 46 * 58:
    case -2167 + 38 * 68 + 1974:
      return Y(x, "scroll-", "scroll-snap-") + x;
  }
  return x;
}
function Vx(x, i) {
  for (var t = "", e = -6689 + -1 * -6689; e < x.length; e++) t += i(x[e], e, x, i) || "";
  return t;
}
function Iu(x, i, t, e) {
  switch (x.type) {
    case tu:
      if (x.children.length) break;
    case eu:
    case lr:
      return x.return = x.return || x.value;
    case nc:
      return "";
    case xc:
      return x.return = x.value + "{" + Vx(x.children, e) + "}";
    case pi:
      if (!bt(x.value = x.props.join(","))) return "";
  }
  return bt(t = Vx(x.children, e)) ? x.return = x.value + "{" + t + "}" : "";
}
function fu(x) {
  var i = rc(x);
  return function(t, e, n, o) {
    for (var r = "", a = -3343 * 2 + -7451 * 1 + 14137; a < i; a++) r += x[a](t, e, n, o) || "";
    return r;
  };
}
function Cu(x) {
  return function(i) {
    i.root || (i = i.return) && x(i);
  };
}
function pu(x, i, t, e) {
  if (x.length > -(9155 + 1879 * 1 + -11 * 1003) && !x.return)
    switch (x.type) {
      case lr:
        x.return = sc(x.value, x.length, t);
        return;
      case xc:
        return Vx([Ft(x, { value: Y(x.value, "@", "@" + ne) })], e);
      case pi:
        if (x.length) return xu(t = x.props, function(n) {
          switch (Ht(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              O0(Ft(x, { props: [Y(n, /:(read-\w+)/, ":" + hn + "$1")] }));
              var o = {};
              o.props = [n], O0(Ft(x, o)), fo(x, { props: ka(t, e) });
              break;
            case "::placeholder":
              O0(Ft(x, { props: [Y(n, /:(plac\w+)/, ":" + ne + "input-$1")] })), O0(Ft(x, { props: [Y(n, /:(plac\w+)/, ":" + hn + "$1")] })), O0(Ft(x, { props: [Y(n, /:(plac\w+)/, se + "input-$1")] }));
              var r = {};
              r.props = [n], O0(Ft(x, r)), fo(x, { props: ka(t, e) });
              break;
          }
          return "";
        });
    }
}
var D = {};
D.animationIterationCount = 1, D.aspectRatio = 1, D.borderImageOutset = 1, D.borderImageSlice = 1, D.borderImageWidth = 1, D.boxFlex = 1, D.boxFlexGroup = 1, D.boxOrdinalGroup = 1, D.columnCount = 1, D.columns = 1, D.flex = 1, D.flexGrow = 1, D.flexPositive = 1, D.flexShrink = 1, D.flexNegative = 1, D.flexOrder = 1, D.gridRow = 1, D.gridRowEnd = 1, D.gridRowSpan = 1, D.gridRowStart = 1, D.gridColumn = 1, D.gridColumnEnd = 1, D.gridColumnSpan = 1, D.gridColumnStart = 1, D.msGridRow = 1, D.msGridRowSpan = 1, D.msGridColumn = 1, D.msGridColumnSpan = 1, D.fontWeight = 1, D.lineHeight = 1, D.opacity = 1, D.order = 1, D.orphans = 1, D.tabSize = 1, D.widows = 1, D.zIndex = 1, D.zoom = 1, D.WebkitLineClamp = 1, D.fillOpacity = 1, D.floodOpacity = 1, D.stopOpacity = 1, D.strokeDasharray = 1, D.strokeDashoffset = 1, D.strokeMiterlimit = 1, D.strokeOpacity = 1, D.strokeWidth = 1;
var hu = D, $ = {}, f0 = typeof process < "u" && void (77 * 13 + -6468 + -781 * -7) !== $ && ($.REACT_APP_SC_ATTR || $.SC_ATTR) || "data-styled", cc = "active", gc = "data-styled-version", Ai = "6.1.11", fr = `/*!sc*/
`, Cr = typeof window < "u" && "HTMLElement" in window, mu = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-1726 * 2 + -523 * -9 + -1255) !== $ && $.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== "" ? $.REACT_APP_SC_DISABLE_SPEEDY !== "false" && $.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (6115 + -1329 * -3 + -10102) !== $ && void (-820 * -6 + -7293 + 3 * 791) !== $.SC_DISABLE_SPEEDY && $.SC_DISABLE_SPEEDY !== "" ? $.SC_DISABLE_SPEEDY !== "false" && $.SC_DISABLE_SPEEDY : $.NODE_ENV !== "production"), Za = /invalid hook call/i, ax = /* @__PURE__ */ new Set(), bu = function(x, i) {
  if ($.NODE_ENV !== "production") {
    var t = i ? ' with the id of "'.concat(i, '"') : "", e = "The component ".concat(x).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var a = [], s = 7025 + 1 * -1138 + 54 * -109; s < arguments.length; s++) a[s - (14636 + 2927 * -5)] = arguments[s];
        Za.test(r) ? (o = !1, ax.delete(e)) : n.apply(void (7989 + -4772 * 1 + 3217 * -1), D0([r], a, !1));
      }, ke(), o && !ax.has(e) && (console.warn(e), ax.add(e));
    } catch (r) {
      Za.test(r.message) && ax.delete(e);
    } finally {
      console.error = n;
    }
  }
}, yi = Object.freeze([]), j0 = Object.freeze({});
function Au(x, i, t) {
  return void (22 * -15 + 8432 + -8102) === t && (t = j0), x.theme !== t.theme && x.theme || i || t.theme;
}
var ho = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), yu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, vu = /(^-|-$)/g;
function Ra(x) {
  return x.replace(yu, "-").replace(vu, "");
}
var Wu = /(a)(d)/gi, sx = 5242 + -10 * 519, Ka = function(x) {
  return String.fromCharCode(x + (x > 3286 + -1087 * 3 ? 1539 + 100 * -15 : 5156 + -14 * 121 + -673 * 5));
};
function mo(x) {
  var i, t = "";
  for (i = Math.abs(x); i > sx; i = i / sx | -5483 + -6 * 183 + -6581 * -1) t = Ka(i % sx) + t;
  return (Ka(i % sx) + t).replace(Wu, "$1-$2");
}
var ji, dc = 5381, x0 = function(x, i) {
  for (var t = i.length; t; ) x = (-1 * 7006 + 1132 + 5907) * x ^ i.charCodeAt(--t);
  return x;
}, uc = function(x) {
  return x0(dc, x);
};
function Su(x) {
  return mo(uc(x) >>> 4 * -2113 + 554 * -1 + 9006);
}
function lc(x) {
  return $.NODE_ENV !== "production" && typeof x == "string" && x || x.displayName || x.name || "Component";
}
function Mi(x) {
  return typeof x == "string" && ($.NODE_ENV === "production" || x.charAt(0) === x.charAt(3150 + -47 * -186 + -11892).toLowerCase());
}
var nt = {};
nt.childContextTypes = !0, nt.contextType = !0, nt.contextTypes = !0, nt.defaultProps = !0, nt.displayName = !0, nt.getDefaultProps = !0, nt.getDerivedStateFromError = !0, nt.getDerivedStateFromProps = !0, nt.mixins = !0, nt.propTypes = !0, nt.type = !0;
var Yt = {};
Yt.name = !0, Yt.length = !0, Yt.prototype = !0, Yt.caller = !0, Yt.callee = !0, Yt.arguments = !0, Yt.arity = !0;
var e0 = {};
e0.$$typeof = !0, e0.compare = !0, e0.defaultProps = !0, e0.displayName = !0, e0.propTypes = !0, e0.type = !0;
var Z0 = {};
Z0.$$typeof = !0, Z0.render = !0, Z0.defaultProps = !0, Z0.displayName = !0, Z0.propTypes = !0;
var Ic = typeof Symbol == "function" && Symbol.for, fc = Ic ? Symbol.for("react.memo") : 44761 * -1 + 137 * 457 + -219 * -193, wu = Ic ? Symbol.for("react.forward_ref") : -1 * 38104 + -21 * -3041 + 34355, Bu = nt, Gu = Yt, Cc = e0, ku = ((ji = {})[wu] = Z0, ji[fc] = Cc, ji);
function Pa(x) {
  return ("type" in (i = x) && i.type.$$typeof) === fc ? Cc : "$$typeof" in x ? ku[x.$$typeof] : Bu;
  var i;
}
var Ou = Object.defineProperty, Hu = Object.getOwnPropertyNames, Va = Object.getOwnPropertySymbols, Zu = Object.getOwnPropertyDescriptor, Ru = Object.getPrototypeOf, Ta = Object.prototype;
function pc(x, i, t) {
  if (typeof i != "string") {
    if (Ta) {
      var e = Ru(i);
      e && e !== Ta && pc(x, e, t);
    }
    var n = Hu(i);
    Va && (n = n.concat(Va(i)));
    for (var o = Pa(x), r = Pa(i), a = -16 * -484 + 6957 + -14701; a < n.length; ++a) {
      var s = n[a];
      if (!(s in Gu || t && t[s] || r && s in r || o && s in o)) {
        var c = Zu(i, s);
        try {
          Ou(x, s, c);
        } catch {
        }
      }
    }
  }
  return x;
}
function M0(x) {
  return typeof x == "function";
}
function pr(x) {
  return typeof x == "object" && "styledComponentId" in x;
}
function o0(x, i) {
  return x && i ? "".concat(x, " ").concat(i) : x || i || "";
}
function Ea(x, i) {
  if (x.length === 0) return "";
  for (var t = x[229 * 36 + -2025 + -6219], e = 635 * -5 + 269 * -5 + 4521; e < x.length; e++) t += x[e];
  return t;
}
function _0(x) {
  return x !== null && typeof x == "object" && x.constructor.name === Object.name && !("props" in x && x.$$typeof);
}
function bo(x, i, t) {
  if (void (5 * 1893 + 818 + 7 * -1469) === t && (t = !1), !t && !_0(x) && !Array.isArray(x)) return i;
  if (Array.isArray(i))
    for (var e = -6199 + 6199 * 1; e < i.length; e++) x[e] = bo(x[e], i[e]);
  else if (_0(i))
    for (var e in i) x[e] = bo(x[e], i[e]);
  return x;
}
function hr(x, i) {
  var t = {};
  t.value = i, Object.defineProperty(x, "toString", t);
}
var be = {};
be[1] = `Cannot create styled-component for component: %s.

`, be[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, be[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, be[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, be[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, be[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, be[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', be[8] = `ThemeProvider: Please make your "theme" prop an object.

`, be[9] = "Missing document `<head>`\n\n", be[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, be[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, be[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", be[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, be[14] = `ThemeProvider: "theme" prop is required.

`, be[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", be[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, be[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, be[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var Ku = $.NODE_ENV !== "production" ? be : {};
function Pu() {
  for (var x = [], i = -3028 + -71 * 9 + 193 * 19; i < arguments.length; i++) x[i] = arguments[i];
  for (var t = x[-329 * 23 + -2668 + -10235 * -1], e = [], n = 2 * 417 + -23 * 419 + 8804, o = x.length; n < o; n += 1 * 1339 + 7214 + -8552) e.push(x[n]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function U0(x) {
  for (var i = [], t = -9246 + 3 * -267 + 157 * 64; t < arguments.length; t++) i[t - (-131 * 62 + 9860 + -579 * 3)] = arguments[t];
  return $.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(x, " for more information.").concat(i.length > -3425 * -2 + -1 * -9322 + -16172 ? " Args: ".concat(i.join(", ")) : "")) : new Error(Pu.apply(void (77 * 97 + -74 * 84 + -1253), D0([Ku[x]], i, !1)).trim());
}
var Vu = function() {
  function x(i) {
    this.groupSizes = new Uint32Array(7469 * 1 + 5304 + -12261), this.length = -7823 + 2 * -2569 + 13473, this.tag = i;
  }
  return x.prototype.indexOfGroup = function(i) {
    for (var t = -5 * -1966 + -5724 + -1 * 4106, e = -8119 + -1 * 7336 + 15455; e < i; e++) t += this.groupSizes[e];
    return t;
  }, x.prototype.insertRules = function(i, t) {
    if (i >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, o = n; i >= o; ) if ((o <<= 1627 * -4 + -86 * -19 + -5 * -975) < 11507 + -311 * 37) throw U0(3 * -1991 + 6535 * -1 + 12524, "".concat(i));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = n; r < o; r++) this.groupSizes[r] = 0;
    }
    for (var a = this.indexOfGroup(i + (-10005 + 1 * 10006)), s = (r = 287 * 2 + -7 * -46 + -896, t.length); r < s; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[i]++, a++);
  }, x.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var t = this.groupSizes[i], e = this.indexOfGroup(i), n = e + t;
      this.groupSizes[i] = -4786 + -5019 * -1 + -233 * 1;
      for (var o = e; o < n; o++) this.tag.deleteRule(e);
    }
  }, x.prototype.getGroup = function(i) {
    var t = "";
    if (i >= this.length || -2371 * -1 + 1817 + -4188 === this.groupSizes[i]) return t;
    for (var e = this.groupSizes[i], n = this.indexOfGroup(i), o = n + e, r = n; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(fr);
    return t;
  }, x;
}(), Tu = -1 * 2685 + 3 * -3303 + 12595 << 310 + -1 * 1967 + -1 * -1687, Wx = /* @__PURE__ */ new Map(), Tx = /* @__PURE__ */ new Map(), Sx = 1, cx = function(x) {
  if (Wx.has(x)) return Wx.get(x);
  for (; Tx.has(Sx); ) Sx++;
  var i = Sx++;
  if ($.NODE_ENV !== "production" && ((335 + 1963 * 1 + 1149 * -2 | i) < 133 + -67 * -97 + -6632 || i > Tu)) throw U0(-1050 + -1 * -1066, "".concat(i));
  return Wx.set(x, i), Tx.set(i, x), i;
}, Eu = function(x, i) {
  Sx = i + (1289 * -3 + -8194 + 12062), Wx.set(x, i), Tx.set(i, x);
}, Lu = "style[".concat(f0, "][").concat(gc, '="').concat(Ai, '"]'), Du = new RegExp("^".concat(f0, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Nu = function(x, i, t) {
  for (var e, n = t.split(","), o = 6 * 1504 + 7441 + -16465, r = n.length; o < r; o++) (e = n[o]) && x.registerName(i, e);
}, Fu = function(x, i) {
  for (var t, e = ((t = i.textContent) !== null && t !== void 0 ? t : "").split(fr), n = [], o = 553 * 2 + 116 * 4 + -5 * 314, r = e.length; o < r; o++) {
    var a = e[o].trim();
    if (a) {
      var s = a.match(Du);
      if (s) {
        var c = 0 | parseInt(s[1], 10), d = s[-907 * -1 + 2717 * 1 + 1 * -3622];
        -349 * 19 + 329 * 30 + -3239 !== c && (Eu(d, c), Nu(x, d, s[3]), x.getTag().insertRules(c, n)), n.length = 0;
      } else n.push(a);
    }
  }
};
function Yu() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var hc = function(x) {
  var i = document.head, t = x || i, e = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(f0, "]")));
    return s[s.length - (-1 * -7529 + -3 * 2797 + -863 * -1)];
  }(t), o = void (-3262 + 319 * -1 + -3581 * -1) !== n ? n.nextSibling : null;
  e.setAttribute(f0, cc), e.setAttribute(gc, Ai);
  var r = Yu();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, ju = function() {
  function x(i) {
    this.element = hc(i), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = 1 * 1130 + -6679 + -31 * -179, o = e.length; n < o; n++) {
        var r = e[n];
        if (r.ownerNode === t) return r;
      }
      throw U0(1397 * -1 + -2629 * 1 + -4043 * -1);
    }(this.element), this.length = -4165 * -1 + -3116 + -1049;
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
}(), Mu = function() {
  function x(i) {
    this.element = hc(i), this.nodes = this.element.childNodes, this.length = -1339 + 1039 * -5 + 6534;
  }
  return x.prototype.insertRule = function(i, t) {
    if (i <= this.length && i >= -3736 + 8 * 467) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }, x.prototype.deleteRule = function(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }, x.prototype.getRule = function(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }, x;
}(), _u = function() {
  function x(i) {
    this.rules = [], this.length = 233 * 31 + -1 * -2741 + -9964;
  }
  return x.prototype.insertRule = function(i, t) {
    return i <= this.length && (this.rules.splice(i, -531 * -7 + -2714 + 59 * -17, t), this.length++, !0);
  }, x.prototype.deleteRule = function(i) {
    this.rules.splice(i, -23 * 310 + -6260 + -1 * -13391), this.length--;
  }, x.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, x;
}(), La = Cr, Xu = { isServer: !Cr, useCSSOMInjection: !mu }, mc = function() {
  function x(i, t, e) {
    void (-7468 + 1428 * 3 + 8 * 398) === i && (i = j0), void (9 * 993 + -2 * -75 + -233 * 39) === t && (t = {});
    var n = this;
    this.options = _e(_e({}, Xu), i), this.gs = t, this.names = new Map(e), this.server = !!i.isServer, !this.server && Cr && La && (La = !1, function(o) {
      for (var r = document.querySelectorAll(Lu), a = -4642 * -1 + -270 * -22 + -143 * 74, s = r.length; a < s; a++) {
        var c = r[a];
        c && c.getAttribute(f0) !== cc && (Fu(o, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), hr(this, function() {
      return function(o) {
        for (var r = o.getTag(), a = r.length, s = "", c = function(g) {
          var C = function(l) {
            return Tx.get(l);
          }(g);
          if (void (-25 * 263 + 3 * -2238 + 13289) === C) return "continue";
          var u = o.names.get(C), p = r.getGroup(g);
          if (void (-1225 + 1 * -9593 + 18 * 601) === u || 6296 + 1 * -9458 + 3162 === p.length) return "continue";
          var m = "".concat(f0, ".g").concat(g, '[id="').concat(C, '"]'), A = "";
          void (7 * -889 + 11 * -337 + 9930) !== u && u.forEach(function(l) {
            l.length > 0 && (A += "".concat(l, ","));
          }), s += "".concat(p).concat(m, '{content:"').concat(A, '"}').concat(fr);
        }, d = -2747 * 3 + 4159 * 2 + 7 * -11; d < a; d++) c(d);
        return s;
      }(n);
    });
  }
  return x.registerId = function(i) {
    return cx(i);
  }, x.prototype.reconstructWithOptions = function(i, t) {
    return void (-5796 + 2218 * -2 + 2558 * 4) === t && (t = !0), new x(_e(_e({}, this.options), i), this.gs, t && this.names || void (19 * -103 + -18 * 223 + 7 * 853));
  }, x.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || 0) + (1187 + -1186 * 1);
  }, x.prototype.getTag = function() {
    return this.tag || (this.tag = (i = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new _u(n) : e ? new ju(n) : new Mu(n);
    }(this.options), new Vu(i)));
    var i;
  }, x.prototype.hasNameForId = function(i, t) {
    return this.names.has(i) && this.names.get(i).has(t);
  }, x.prototype.registerName = function(i, t) {
    if (cx(i), this.names.has(i)) this.names.get(i).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(i, e);
    }
  }, x.prototype.insertRules = function(i, t, e) {
    this.registerName(i, t), this.getTag().insertRules(cx(i), e);
  }, x.prototype.clearNames = function(i) {
    this.names.has(i) && this.names.get(i).clear();
  }, x.prototype.clearRules = function(i) {
    this.getTag().clearGroup(cx(i)), this.clearNames(i);
  }, x.prototype.clearTag = function() {
    this.tag = void (2392 * -4 + -2565 + -11 * -1103);
  }, x;
}(), Ju = /&/g, Qu = /^\s*\/\/.*$/gm;
function bc(x, i) {
  return x.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(i, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(i, " ")), t.props = t.props.map(function(e) {
      return "".concat(i, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = bc(t.children, i)), t;
  });
}
function Ac(x) {
  var i, t, e, n = x === void 0 ? j0 : x, o = n.options, r = void (-4444 + -101 * -44) === o ? j0 : o, a = n.plugins, s = void (3026 + -26 * -214 + 4295 * -2) === a ? yi : a, c = function(C, u, p) {
    return p.startsWith(t) && p.endsWith(t) && p.replaceAll(t, "").length > 13086 + -9 * 1454 ? ".".concat(i) : C;
  }, d = s.slice();
  d.push(function(C) {
    C.type === pi && C.value.includes("&") && (C.props[-5381 + 2 * -1353 + 8087] = C.props[2 * -4586 + 527 + 8645].replace(Ju, t).replace(e, c));
  }), r.prefix && d.push(pu), d.push(Iu);
  var g = function(C, u, p, m) {
    void (-354 * -7 + 1 * -9397 + 6919) === u && (u = ""), void (-3832 + -7 * -367 + 1263) === p && (p = ""), void (5069 + 143 * -31 + -636) === m && (m = "&"), i = m, t = u, e = new RegExp("\\".concat(t, "\\b"), "g");
    var A = C.replace(Qu, ""), l = uu(p || u ? "".concat(p, " ").concat(u, " { ").concat(A, " }") : A);
    r.namespace && (l = bc(l, r.namespace));
    var W = [];
    return Vx(l, fu(d.concat(Cu(function(Z) {
      return W.push(Z);
    })))), W;
  };
  return g.hash = s.length ? s.reduce(function(C, u) {
    return u.name || U0(-14 * -56 + 523 + -1292), x0(C, u.name);
  }, dc).toString() : "", g;
}
var Uu = new mc(), Ao = Ac(), mr = I0.createContext({ shouldForwardProp: void 0, styleSheet: Uu, stylis: Ao });
mr.Consumer;
var zu = I0.createContext(void (23 * -277 + 4201 * 1 + -310 * -7));
function yo() {
  return h0(mr);
}
function qu(x) {
  var i = De(x.stylisPlugins), t = i[0], e = i[43 * 67 + 115 * 21 + -5295], n = yo().styleSheet, o = Ue(function() {
    var d = n, g = {};
    return g.useCSSOMInjection = !1, x.sheet ? d = x.sheet : x.target && (d = d.reconstructWithOptions({ target: x.target }, !1)), x.disableCSSOMInjection && (d = d.reconstructWithOptions(g)), d;
  }, [x.disableCSSOMInjection, x.sheet, x.target, n]), r = Ue(function() {
    var d = {};
    d.namespace = x.namespace, d.prefix = x.enableVendorPrefixes;
    var g = {};
    return g.options = d, g.plugins = t, Ac(g);
  }, [x.enableVendorPrefixes, x.namespace, t]);
  ae(function() {
    $d(t, x.stylisPlugins) || e(x.stylisPlugins);
  }, [x.stylisPlugins]);
  var a = Ue(function() {
    var d = {};
    return d.shouldForwardProp = x.shouldForwardProp, d.styleSheet = o, d.stylis = r, d;
  }, [x.shouldForwardProp, o, r]), s = {};
  s.value = a;
  var c = {};
  return c.value = r, I0.createElement(mr.Provider, s, I0.createElement(zu.Provider, c, x.children));
}
var Da = function() {
  function x(i, t) {
    var e = this;
    this.inject = function(n, o) {
      void (-7 * -593 + 1 * -5889 + 1738) === o && (o = Ao);
      var r = e.name + o.hash;
      n.hasNameForId(e.id, r) || n.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = t, hr(this, function() {
      throw U0(-59 * 141 + -1043 + 9374 * 1, String(e.name));
    });
  }
  return x.prototype.getName = function(i) {
    return void (8526 * -1 + -9853 * -1 + -1327) === i && (i = Ao), this.name + i.hash;
  }, x;
}(), $u = function(x) {
  return x >= "A" && x <= "Z";
};
function Na(x) {
  for (var i = "", t = 128 + 2 * -2737 + 22 * 243; t < x.length; t++) {
    var e = x[t];
    if (-5610 + -1 * -5611 === t && e === "-" && x[5095 + 5095 * -1] === "-") return x;
    $u(e) ? i += "-" + e.toLowerCase() : i += e;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var yc = function(x) {
  return x == null || x === !1 || x === "";
}, vc = function(x) {
  var i, t, e = [];
  for (var n in x) {
    var o = x[n];
    x.hasOwnProperty(n) && !yc(o) && (Array.isArray(o) && o.isCss || M0(o) ? e.push("".concat(Na(n), ":"), o, ";") : _0(o) ? e.push.apply(e, D0(D0(["".concat(n, " {")], vc(o), !1), ["}"], !1)) : e.push("".concat(Na(n), ": ").concat((i = n, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -16129 + -1 * -16129 === t || i in hu || i.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function u0(x, i, t, e) {
  if (yc(x)) return [];
  if (pr(x)) return [".".concat(x.styledComponentId)];
  if (M0(x)) {
    if (!M0(o = x) || o.prototype && o.prototype.isReactComponent || !i) return [x];
    var n = x(i);
    return $.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof Da || _0(n) || n === null || console.error("".concat(lc(x), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), u0(n, i, t, e);
  }
  var o;
  return x instanceof Da ? t ? (x.inject(t, e), [x.getName(e)]) : [x] : _0(x) ? vc(x) : Array.isArray(x) ? Array.prototype.concat.apply(yi, x.map(function(r) {
    return u0(r, i, t, e);
  })) : [x.toString()];
}
function el(x) {
  for (var i = 1071 * 3 + -9940 + 6727; i < x.length; i += 1) {
    var t = x[i];
    if (M0(t) && !pr(t)) return !1;
  }
  return !0;
}
var tl = uc(Ai), nl = function() {
  function x(i, t, e) {
    this.rules = i, this.staticRulesId = "", this.isStatic = $.NODE_ENV === "production" && (void (1 * -8207 + -1 * -8469 + -2 * 131) === e || e.isStatic) && el(i), this.componentId = t, this.baseHash = x0(tl, t), this.baseStyle = e, mc.registerId(t);
  }
  return x.prototype.generateAndInjectStyles = function(i, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = o0(n, this.staticRulesId);
      else {
        var o = Ea(u0(this.rules, i, t, e)), r = mo(x0(this.baseHash, o) >>> 97 * -47 + -4185 + 2186 * 4);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        n = o0(n, r), this.staticRulesId = r;
      }
    else {
      for (var s = x0(this.baseHash, e.hash), c = "", d = -8 * -157 + 1 * -1905 + -649 * -1; d < this.rules.length; d++) {
        var g = this.rules[d];
        if (typeof g == "string") c += g, $.NODE_ENV !== "production" && (s = x0(s, g));
        else if (g) {
          var C = Ea(u0(g, i, t, e));
          s = x0(s, C + d), c += C;
        }
      }
      if (c) {
        var u = mo(s >>> 0);
        t.hasNameForId(this.componentId, u) || t.insertRules(this.componentId, u, e(c, ".".concat(u), void (15711 + 15711 * -1), this.componentId)), n = o0(n, u);
      }
    }
    return n;
  }, x;
}(), Wc = I0.createContext(void (7456 + -1 * -8899 + -16355));
Wc.Consumer;
var _i = {}, Fa = /* @__PURE__ */ new Set();
function xl(x, i, t) {
  var e = pr(x), n = x, o = !Mi(x), r = i.attrs, a = void (9826 + -54 * -158 + 134 * -137) === r ? yi : r, s = i.componentId, c = void (-1 * 4889 + 170 * 8 + 1 * 3529) === s ? function(_, X) {
    var H = typeof _ != "string" ? "sc" : Ra(_);
    _i[H] = (_i[H] || 1234 * -7 + -1 * 6095 + 9 * 1637) + (-1 * -7333 + 3314 + 5323 * -2);
    var z = "".concat(H, "-").concat(Su(Ai + H + _i[H]));
    return X ? "".concat(X, "-").concat(z) : z;
  }(i.displayName, i.parentComponentId) : s, d = i.displayName, g = void (-2 * 4021 + 2370 + 5672) === d ? function(_) {
    return Mi(_) ? "styled.".concat(_) : "Styled(".concat(lc(_), ")");
  }(x) : d, C = i.displayName && i.componentId ? "".concat(Ra(i.displayName), "-").concat(i.componentId) : i.componentId || c, u = e && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, p = i.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var m = n.shouldForwardProp;
    if (i.shouldForwardProp) {
      var A = i.shouldForwardProp;
      p = function(_, X) {
        return m(_, X) && A(_, X);
      };
    } else p = m;
  }
  var l = new nl(t, C, e ? n.componentStyle : void (1 * -7273 + 34 * 273 + 287 * -7));
  function W(_, X) {
    return function(H, z, Q) {
      var q = H.attrs, Ne = H.componentStyle, Re = H.defaultProps, Tt = H.foldedComponentIds, Jt = H.styledComponentId, Oe = H.target, st = I0.useContext(Wc), Jn = yo(), b0 = H.shouldForwardProp || Jn.shouldForwardProp;
      $.NODE_ENV !== "production" && Px(Jt);
      var en = Au(z, st, Re) || j0, $e = function(y0, Xe, ft) {
        var et = {};
        et.className = void (-1 * -1609 + -9 * -479 + 40 * -148), et.theme = ft;
        for (var Qt, Ct = _e(_e({}, Xe), et), ct = -3 * -2551 + -5744 + -1909 * 1; ct < y0.length; ct += 3 * -1217 + -8462 + 12114) {
          var Ut = M0(Qt = y0[ct]) ? Qt(Ct) : Qt;
          for (var gt in Ut) Ct[gt] = gt === "className" ? o0(Ct[gt], Ut[gt]) : gt === "style" ? _e(_e({}, Ct[gt]), Ut[gt]) : Ut[gt];
        }
        return Xe.className && (Ct.className = o0(Ct.className, Xe.className)), Ct;
      }(q, z, en), wt = $e.as || Oe, Et = {};
      for (var Ke in $e) void (-19 * -431 + -8365 + 4 * 44) === $e[Ke] || Ke[437 + -27 * 13 + -86] === "$" || Ke === "as" || Ke === "theme" && $e.theme === en || (Ke === "forwardedAs" ? Et.as = $e.forwardedAs : b0 && !b0(Ke, wt) || (Et[Ke] = $e[Ke], b0 || $.NODE_ENV !== "development" || ld(Ke) || Fa.has(Ke) || !ho.has(wt) || (Fa.add(Ke), console.warn('styled-components: it looks like an unknown prop "'.concat(Ke, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var tn = function(y0, Xe) {
        var ft = yo(), et = y0.generateAndInjectStyles(Xe, ft.styleSheet, ft.stylis);
        return $.NODE_ENV !== "production" && Px(et), et;
      }(Ne, $e);
      $.NODE_ENV !== "production" && H.warnTooManyClasses && H.warnTooManyClasses(tn);
      var A0 = o0(Tt, Jt);
      return tn && (A0 += " " + tn), $e.className && (A0 += " " + $e.className), Et[Mi(wt) && !ho.has(wt) ? "class" : "className"] = A0, Et.ref = Q, Le(wt, Et);
    }(Z, _, X);
  }
  W.displayName = g;
  var Z = I0.forwardRef(W), M = {};
  return M.attrs = !0, M.componentStyle = !0, M.displayName = !0, M.foldedComponentIds = !0, M.shouldForwardProp = !0, M.styledComponentId = !0, M.target = !0, Z.attrs = u, Z.componentStyle = l, Z.displayName = g, Z.shouldForwardProp = p, Z.foldedComponentIds = e ? o0(n.foldedComponentIds, n.styledComponentId) : "", Z.styledComponentId = C, Z.target = e ? n.target : x, Object.defineProperty(Z, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(_) {
    this._foldedDefaultProps = e ? function(X) {
      for (var H = [], z = -2 * -2087 + 3 * -1571 + 30 * 18; z < arguments.length; z++) H[z - (236 * 1 + -2434 + 2199)] = arguments[z];
      for (var Q = 741 * -13 + -2979 + 12612, q = H; Q < q.length; Q++) bo(X, q[Q], !0);
      return X;
    }({}, n.defaultProps, _) : _;
  } }), $.NODE_ENV !== "production" && (bu(g, C), Z.warnTooManyClasses = /* @__PURE__ */ function(_, X) {
    var H = {}, z = !1;
    return function(Q) {
      if (!z && (H[Q] = !0, Object.keys(H).length >= -8895 + -2 * 2061 + -13217 * -1)) {
        var q = X ? ' with the id of "'.concat(X, '"') : "";
        console.warn("Over ".concat(-7309 + 3 * 2503, " classes were generated for component ").concat(_).concat(q, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), z = !0, H = {};
      }
    };
  }(g, C)), hr(Z, function() {
    return ".".concat(Z.styledComponentId);
  }), o && pc(Z, x, M), Z;
}
function Ya(x, i) {
  for (var t = [x[-2709 + 4 * -1451 + 8513]], e = 9592 + 17 * 6 + -262 * 37, n = i.length; e < n; e += 6361 * 1 + 11 * -766 + 1033 * 2) t.push(i[e], x[e + 1]);
  return t;
}
var ja = function(x) {
  var i = {};
  return i.isCss = !0, Object.assign(x, i);
};
function il(x) {
  for (var i = [], t = -4419 + 22 * -219 + 9238; t < arguments.length; t++) i[t - (8353 + -1 * 7408 + 2 * -472)] = arguments[t];
  if (M0(x) || _0(x)) return ja(u0(Ya(yi, D0([x], i, !0))));
  var e = x;
  return -4021 * -2 + -4327 + -3715 === i.length && -1 * -7087 + 5528 + -901 * 14 === e.length && typeof e[-3697 * 2 + -1400 + 8794] == "string" ? u0(e) : ja(u0(Ya(e, i)));
}
function vo(x, i, t) {
  if (void (-590 + -5 * -1951 + 15 * -611) === t && (t = j0), !i) throw U0(1787 * -2 + 4352 + -21 * 37, i);
  var e = function(n) {
    for (var o = [], r = 3579 * 1 + 2087 + -11 * 515; r < arguments.length; r++) o[r - (-3 * 107 + -4406 * -1 + -4084)] = arguments[r];
    return x(i, t, il.apply(void (3967 * 1 + 9659 * -1 + 5692), D0([n], o, !1)));
  };
  return e.attrs = function(n) {
    return vo(x, i, _e(_e({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return vo(x, i, _e(_e({}, t), n));
  }, e;
}
var Sc = function(x) {
  return vo(xl, x);
}, Mn = Sc;
ho.forEach(function(x) {
  Mn[x] = Sc(x);
});
$.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var gx = "__sc-".concat(f0, "__");
$.NODE_ENV !== "production" && $.NODE_ENV !== "test" && typeof window < "u" && (window[gx] || (window[gx] = 733 * -4 + -5227 + 8159), window[gx] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[gx] += 651 * 11 + 20 * 166 + 20 * -524);
const ol = Mn.div`
  position: relative;
`, rl = Mn.video`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(x) => x.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class xe extends Error {
  constructor(t, e) {
    super(t);
    T(this, "cause");
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
const Xi = wx, Wo = {};
Wo.FIRST_FRAME = "first-frame", Wo.FIRST_VALID_FRAME = "first-valid-frame";
const Bx = Wo, wc = {};
wc.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const So = wc;
var Bc = ((x) => (x.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", x.CONTROL = "document-auto-capture:control", x.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", x.DOCUMENT_DETECTION = "document-auto-capture:document-detection", x.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", x.STATE_CHANGED = "document-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", x))(Bc || {}), Pt = ((x) => (x.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", x.CONTROL = "face-auto-capture:control", x.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", x.FACE_DETECTION = "face-auto-capture:face-detection", x.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", x.STATE_CHANGED = "face-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", x))(Pt || {}), al = ((x) => (x.ANIMATION_END = "magnifeye-auto-capture:animation-end", x.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", x))(al || {}), Ex = ((x) => (x.STATUS_CHANGED = "smile-auto-capture:status-changed", x))(Ex || {}), sl = ((x) => (x.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", x.CONTROL = "palm-capture:control", x.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", x.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", x.STATE_CHANGED = "palm-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", x))(sl || {}), cl = ((x) => (x.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", x))(cl || {});
const Gc = {};
Gc.EYE_NOT_PRESENT = "eye_not_present";
const Ma = Gc, Ve = {};
Ve.CANDIDATE_SELECTION = "candidate_selection", Ve.FACE_TOO_CLOSE = "face_too_close", Ve.FACE_TOO_FAR = "face_too_far", Ve.FACE_CENTERING = "face_centering", Ve.FACE_NOT_PRESENT = "face_not_present", Ve.SHARPNESS_TOO_LOW = "sharpness_too_low", Ve.BRIGHTNESS_TOO_LOW = "brightness_too_low", Ve.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Ve.DEVICE_PITCHED = "device_pitched", Ve.LEFT_EYE_NOT_PRESENT = "left_" + Ma.EYE_NOT_PRESENT, Ve.RIGHT_EYE_NOT_PRESENT = "right_" + Ma.EYE_NOT_PRESENT, Ve.MOUTH_NOT_PRESENT = "mouth_not_present", Ve.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", Ve.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const Ae = Ve, Ye = {};
Ye.isPresent = Ae.FACE_NOT_PRESENT, Ye.isNotPitched = Ae.DEVICE_PITCHED, Ye.isNotSmall = Ae.FACE_TOO_FAR, Ye.isNotLarge = Ae.FACE_TOO_CLOSE, Ye.isNotOutOfBounds = Ae.FACE_CENTERING, Ye.isNotDim = Ae.BRIGHTNESS_TOO_LOW, Ye.isNotBright = Ae.BRIGHTNESS_TOO_HIGH, Ye.isSharp = Ae.SHARPNESS_TOO_LOW, Ye.isLeftEyePresent = Ae.LEFT_EYE_NOT_PRESENT, Ye.isRightEyePresent = Ae.RIGHT_EYE_NOT_PRESENT, Ye.isMouthPresent = Ae.MOUTH_NOT_PRESENT, Ye.isMouthScoreNotTooHigh = Ae.MOUTH_SCORE_TOO_HIGH, Ye.isMouthScoreNotTooLow = Ae.MOUTH_SCORE_TOO_LOW;
const gl = Ye, wo = {};
wo.FRONT = "user", wo.REAR = "environment";
const br = wo, Bo = {};
Bo.AUTO_CAPTURE = "AUTO_CAPTURE", Bo.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const Lx = Bo, un = {};
un.LOADING = "LOADING", un.ERROR = "ERROR", un.WAITING = "WAITING", un.RUNNING = "RUNNING";
const yt = un;
({ ...Ae });
var dl = ((x) => (x.CLOSEUP = "CLOSEUP", x.DISTANT = "DISTANT", x.MIDDLE = "MIDDLE", x))(dl || {});
({ ...Ae });
const Go = {};
Go.NEUTRAL = "NEUTRAL", Go.SMILE = "SMILE";
const mt = Go, kc = { ...yt };
kc.DONE = "DONE";
const At = kc;
({ ...Ae });
const vi = jn(void 0);
vi.displayName = "AppStateContext";
function z0() {
  const x = h0(vi);
  if (x === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return x;
}
const ul = vi.Provider, ll = z0;
class Oc extends it {
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
T(Oc, "contextType", vi);
const Il = Mn.canvas`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, fl = Mn.div`
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
function Cl() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const pl = js(
  ({ detectionDetails: x, isImageMirror: i }, t) => Cl() ? (console.log(x), /* @__PURE__ */ O(rt, { children: [
    /* @__PURE__ */ O(Il, { ref: t, $isImageMirror: i }),
    /* @__PURE__ */ O(fl, { children: Object.entries(x).map(([e, n]) => /* @__PURE__ */ O("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ O("strong", { children: n })
    ] }, e)) })
  ] })) : null
), Dx = jn(void 0);
Dx.displayName = "AnalyticsContext";
function Ar() {
  const x = h0(Dx);
  if (x === void 0)
    throw new Error(`${Dx.displayName} must be used within a AnalyticsProvider`);
  return x;
}
function Ji(x, i, t, e, n) {
  return Be(e - -15, n);
}
(function(x, i) {
  function t(a, s, c, d, g) {
    return Be(d - -435, c);
  }
  function e(a, s, c, d, g) {
    return Be(d - 356, a);
  }
  function n(a, s, c, d, g) {
    return Be(s - 949, a);
  }
  function o(a, s, c, d, g) {
    return Be(a - -310, d);
  }
  const r = x();
  for (; ; )
    try {
      if (parseInt(e("fq3E", 724, 736, 731, 740)) / 1 * (parseInt(t(-43, -43, "gcaZ", -40, -59)) / 2) + parseInt(o(87, 102, 97, "]HH%", 92)) / 3 + parseInt(n("#Jj(", 1336, 1333, 1340, 1332)) / 4 * (parseInt(o(55, 38, 52, "]HH%", 62)) / 5) + parseInt(o(81, 70, 63, "e!g[", 80)) / 6 * (-parseInt(n("7DA*", 1318, 1317, 1310, 1310)) / 7) + parseInt(n("gcaZ", 1341, 1324, 1328, 1322)) / 8 * (-parseInt(n("E$rt", 1351, 1341, 1362, 1332)) / 9) + parseInt(e("s8cg", 740, 731, 722, 733)) / 10 * (-parseInt(n("oo1#", 1327, 1329, 1328, 1321)) / 11) + -parseInt(e("FgCW", 769, 738, 750, 745)) / 12 === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Fx, 488714);
function _a(x, i, t, e, n) {
  return Be(i - 792, t);
}
const Nx = jn(void (-2306 * 1 + 6694 + -4388));
function hl(x, i, t, e, n) {
  return Be(n - 46, x);
}
function Xa(x, i, t, e, n) {
  return Be(n - -334, t);
}
function Be(x, i) {
  const t = Fx();
  return Be = function(e, n) {
    e = e - (10557 + 13 * -784);
    let o = t[e];
    if (Be.NFAAjT === void 0) {
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
      Be.wjukoz = d, x = arguments, Be.NFAAjT = !0;
    }
    const a = t[9478 * -1 + -703 + 10181], s = e + a, c = x[s];
    return c ? o = c : (Be.iClefx === void 0 && (Be.iClefx = !0), o = Be.wjukoz(o, n), x[s] = o), o;
  }, Be(x, i);
}
Nx[_a(1182, 1165, "FgCW") + Ji(356, 351, 350, 364, "yG!G") + "e"] = _a(1183, 1192, "s8cg") + Ji(385, 363, 383, 370, "N8ja") + Ji(371, 383, 377, 381, "GpU!");
function ml(x, i, t, e, n) {
  return Be(x - -854, e);
}
function Fx() {
  const x = ["W4jnW7FdJSkIWO8JpG", "W5tdOSkvWO3dHW", "pSoirCoUWP/cSv50WQfWW5ddHmoq", "W4boWQFcICoqW6aJa8o2pua9", "W7jsdmoW", "hCkqBmoXW7NdTYfVW4hcUKL/fq", "W4BcJmk5zmocgSkonCo9W4dcSa", "iCo/W4dcUSk/imofxtxcUKvUWPC", "lY9qnLe", "W67dS3BcK8oVW5ev", "W4VcH8kWzmocCCkCp8okW6NcUCke", "hSkxz8o7W7NdSsjJW6dcQMDacW", "v3ideNHMW5SbW44", "zmkNe8kyCq", "nvhdPWz9", "WOHKgmkpcCoIcxO", "zmkReG", "W6nWnYy5ogVdNtOvaq", "vSkMWQFcNmk9", "B8ksa8kRW4q", "prmGW5/dNd7dPdCBW6NdNmoe", "W79gcSo0W7DYWQm", "W4FdR8obcCo2jg4", "vmkcWPDhla", "nuLcnSkNeCkrW5NdHGhcUa", "h8oGzCk2W6S", "W4mVWOeRp17dRHP9kmkKCmkt", "gXTlFSkM", "W7PkW59EsGtcHGS", "n0bfn8kGCmk3W7BdRZdcVCks", "qmoxWODkaSk6jSoapW", "tSkXW4tcUSkh", "tCodWQSWDq", "W4hdICoPfCoDbMO", "z8k1zeFdRa", "WRm3W5WWFCopW7ldGa", "W5D8W6ipBa", "p8k8EdldTItdQ1fwW6qr"];
  return Fx = function() {
    return x;
  }, Fx();
}
function q0() {
  function x(o, r, a, s, c) {
    return ml(r - 42, r - 217, a - 213, o);
  }
  const i = h0(Nx);
  function t(o, r, a, s, c) {
    return Xa(o - 301, r - 483, o, s - 269, c - 1255);
  }
  function e(o, r, a, s, c) {
    return hl(a, r - 291, a - 217, s - 387, c - 31);
  }
  if (i === void (-1398 + 1 * 128 + 10 * 127)) throw new Error(Nx[x("l4hJ", -445, -454) + n(191, 187, 187, "$oEO") + "e"] + (x("M81%", -440, -429) + e(449, 473, "&dIv", 451, 463) + t("q6$0", 1333, 1332, 1311, 1314) + n(184, 159, 167, "9l3w") + e(454, 459, "LekM", 437, 454) + n(184, 191, 180, "aLC$") + e(472, 477, "wil@", 473, 467) + x("l4hJ", -442, -461)));
  function n(o, r, a, s, c) {
    return Xa(o - 220, r - 277, s, s - 129, a - 133);
  }
  return i;
}
(function(x, i) {
  function t(a, s, c, d, g) {
    return Ze(c - 611, d);
  }
  function e(a, s, c, d, g) {
    return Ze(c - -343, d);
  }
  function n(a, s, c, d, g) {
    return Ze(d - -580, c);
  }
  const o = x();
  function r(a, s, c, d, g) {
    return Ze(c - -181, a);
  }
  for (; ; )
    try {
      if (-parseInt(e(54, 57, 49, "hMA^", 46)) / 1 + parseInt(e(33, 30, 42, "fRz8", 47)) / 2 * (parseInt(e(49, 59, 55, "kfHZ", 45)) / 3) + parseInt(n(-194, -190, "6dMu", -201, -194)) / 4 + parseInt(t(998, 984, 989, "utZ9", 996)) / 5 + parseInt(n(-188, -198, "UT^A", -187, -181)) / 6 + -parseInt(r("5FIR", 202, 214, 217, 219)) / 7 * (parseInt(t(1011, 1003, 1007, "6k)U", 1013)) / 8) + -parseInt(t(1003, 984, 994, "xEJ6", 1002)) / 9 === i) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Yx, 4306 * -205 + 1 * -1429390 + 3287623);
function Ze(x, i) {
  const t = Yx();
  return Ze = function(e, n) {
    e = e - (7 * 719 + -3130 + 1 * -1527);
    let o = t[e];
    if (Ze.VGgmKk === void 0) {
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
      Ze.LejOyh = d, x = arguments, Ze.VGgmKk = !0;
    }
    const a = t[-6 * -732 + -2 * 1370 + -1652], s = e + a, c = x[s];
    return c ? o = c : (Ze.xWDNER === void 0 && (Ze.xWDNER = !0), o = Ze.LejOyh(o, n), x[s] = o), o;
  }, Ze(x, i);
}
function Yx() {
  const x = ["AtpdNGe9WQrGvhmFCmoFW60", "C34jbSk9WQlcJZVcGuJcMq7cMW", "W5FdVsGFW5bZW5RcLmkyW5CQeM0", "W6PZy3JdISoJW4nj", "zmo+WRFdGrO", "W4XdW543WP3cG8kmhSkJWOKdWPn/xa", "WQxdReldPu4haSkZWRDBzSk1", "W651ccZcPmkZW6rDthVcLCoN", "W74uw8kKlq", "eZODycu", "WPqvWOr3", "W4xcT2P2EuTMqmoQgGNcRZe", "e8krW6tcTCk7", "q2TEnx1eWP43W6ntWQX8ja", "o0OVWQxdIu7dGHRcIuylja", "cwv9wWRdSffZW6SElSkWta", "W5hdVs4tW5vZW5lcVCkXW7yyaf0", "gdddOdVdOtrFWRq", "WRBcPSo0W5KCWO1+lmooWQFcLsrm", "WOC2W7VcHs8", "euSIW4pdHXi1pW", "WRVdQMhcMKmSmWC", "CuKPySkXW60BW7rxtCk0W4W", "W4uaWP/dNCko"];
  return Yx = function() {
    return x;
  }, Yx();
}
function bl({ licensePath: x, bramble: i, wasmDirectoryPath: t }) {
  const [e, n] = De(), o = e !== void (2 * -4207 + -1 * 4733 + 13147);
  function r(s, c, d, g, C) {
    return Ze(C - -101, d);
  }
  ae(() => {
    async function s() {
      await i[g("xEJ6", -480)](t, x);
      function c(C, u, p, m, A) {
        return Ze(p - -624, A);
      }
      function d(C, u, p, m, A) {
        return Ze(p - -223, m);
      }
      function g(C, u, p, m, A) {
        return Ze(u - -868, C);
      }
      n(i[g("OGL[", -478) + d(168, 162, 163, "nC$A") + c(-245, -249, -247, -236, "4wdu") + "t"]());
    }
    s();
  }, [i, t, x, n]);
  const a = {};
  return a[r(283, 280, "gN]#", 270, 281) + r(293, 276, "hfb#", 290, 286)] = e, a[r(300, 290, "8crG", 284, 296) + "sh"] = o, a;
}
var Hc = ((x) => (x.DOCUMENT = "document-auto-capture:dev", x.FACE = "face-auto-capture:dev", x.PALM = "palm-capture:dev", x))(Hc || {});
const ko = {};
ko.SIMD = "simd", ko.NO_SIMD = "no-simd";
const Ja = ko, Oo = {};
Oo.Lower = "Lower", Oo.Higher = "Higher";
const Ho = Oo, Gx = {};
Gx.VISIBLE = "VISIBLE", Gx.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", Gx.HIDDEN = "HIDDEN";
const jx = Gx;
(function(x, i) {
  function t(s, c, d, g, C) {
    return je(d - -652, c);
  }
  function e(s, c, d, g, C) {
    return je(C - -515, g);
  }
  function n(s, c, d, g, C) {
    return je(s - -273, g);
  }
  function o(s, c, d, g, C) {
    return je(c - 545, d);
  }
  for (var r = x(); ; )
    try {
      var a = parseInt(o(784, 790, "P@Go", 791, 791)) / 1 + -parseInt(o(770, 783, "ElF)", 794, 792)) / 2 * (parseInt(o(758, 769, "J!g^", 759, 760)) / 3) + parseInt(e(-278, -282, -285, "P@Go", -274)) / 4 + parseInt(t(-421, "7h5M", -430, -419, -417)) / 5 + -parseInt(e(-289, -281, -271, "VWfV", -281)) / 6 * (parseInt(t(-403, "WR#n", -415, -406, -403)) / 7) + -parseInt(t(-413, "$oQp", -412, -408, -410)) / 8 * (-parseInt(t(-429, "vUg0", -417, -417, -415)) / 9) + parseInt(n(-41, -37, -49, "h*Ro", -47)) / 10 * (-parseInt(n(-45, -57, -45, "WR#n", -50)) / 11);
      if (a === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Mx, 108746);
function Al({ crosshatch: x }) {
  function i(e, n, o, r, a) {
    return je(e - -132, r);
  }
  function t(e, n, o, r, a) {
    return je(r - -586, a);
  }
  return x != null && x[t(-331, -332, -343, -340, "J!g^") + "id"] ? Ho[i(110, 117, 119, "CDHk") + "r"] : Ho[t(-350, -343, -348, -342, "Lk4d")];
}
function je(x, i) {
  var t = Mx();
  return je = function(e, n) {
    e = e - (-11367 + -1 * -11589);
    var o = t[e];
    if (je.IUIScV === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (var Z = 0, M = u.length; Z < M; Z++)
          p += "%" + ("00" + u.charCodeAt(Z).toString(16)).slice(-2);
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
      je.hvGCCq = a, x = arguments, je.IUIScV = !0;
    }
    var s = t[0], c = e + s, d = x[c];
    return d ? o = d : (je.XYSfve === void 0 && (je.XYSfve = !0), o = je.hvGCCq(o, n), x[c] = o), o;
  }, je(x, i);
}
function Mx() {
  var x = ["tCo7ielcSCoRW6afWOf/WOyj", "yCorWQ7dISoI", "WRGSWQiZWQzWeSoIWPDmfxe", "xSoRkmoEWRzQW4dcGY8", "o8krWPVdHSoLW53cKs0", "W47cGSk7mCkhxJbiW7K", "WPTwe8kfW7XbgSkbsmkoqa", "tZ1aySoHAdJcU2NdKCkb", "E8kBW7FcLCkGdCo9dCox", "WRBcQIDLFG5+DYy4fCoJ", "W4hcNepdNCo9W71Ol8kF", "hIZdOKvefcRcRG", "pb8DCYRdUgSKW4NcO8kf", "WPKXF8okASk1W7WAWRdcJM0", "hc7cTwTNdZFcPqi", "W5CBA3jAW4NcL2hcLgC", "W7flymkhWOGoW5dcMdi9", "FCktW7ddHSogk8oHnCoUW5Gw", "WPZdSmkfW4hdHSk8W51Yu8k6Bq", "W7pcOmkQFdVdTMRdVCoDWPjcWOO", "W7HiymoDWRKSW4ZcUYW", "t8o2jexcVCoLW5SvWO5DWQ4I", "W6bVkmkrpW", "F8oAymoZxSoLW5tdMN3dStnx", "irOShSoC"];
  return Mx = function() {
    return x;
  }, Mx();
}
(function(x, i) {
  function t(r, a, s, c, d) {
    return Te(c - -880, r);
  }
  function e(r, a, s, c, d) {
    return Te(c - 870, r);
  }
  function n(r, a, s, c, d) {
    return Te(c - -186, r);
  }
  const o = x();
  for (; ; )
    try {
      if (parseInt(n("yh0r", 163, 153, 169, 175)) / 1 + -parseInt(n("yh0r", 159, 142, 158, 153)) / 2 + parseInt(n("m8Y&", 139, 164, 152, 158)) / 3 + -parseInt(n("oRPP", 157, 131, 145, 156)) / 4 * (parseInt(e("p*(X", 1209, 1207, 1209, 1218)) / 5) + parseInt(t("yE6c", -533, -513, -527, -521)) / 6 + -parseInt(n("BNvY", 135, 137, 147, 145)) / 7 * (-parseInt(e("xRFn", 1219, 1240, 1227, 1213)) / 8) + -parseInt(t("yh0r", -542, -528, -531, -545)) / 9 === i) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(_x, -475427 * 1 + 43226 * 29 + 233 * 342);
function Te(x, i) {
  const t = _x();
  return Te = function(e, n) {
    e = e - (-5760 + 6089 * 1);
    let o = t[e];
    if (Te.IRPgRM === void 0) {
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
      Te.LiOiFN = d, x = arguments, Te.IRPgRM = !0;
    }
    const a = t[-5 * -1 + 5206 + -3 * 1737], s = e + a, c = x[s];
    return c ? o = c : (Te.adPRXN === void 0 && (Te.adPRXN = !0), o = Te.LiOiFN(o, n), x[s] = o), o;
  }, Te(x, i);
}
function _x() {
  const x = ["WQGcnCo5WOtdMCoov8kgWP/dIai6", "ESkOWO7dQ2hcV8o4W4H7W6e", "ze4RoXnHeCojcK/dGH7cQf8", "qNlcRwhcRG", "yNvSW5HAWQLCtmoxWRddTuS", "W5NcMmoj", "D8kxiJrVv19UWOddJZvBW48", "W7zeDCkDW50", "z0GKpH9GhmkxmLRdKHhcTa", "WPdcNSkTBsS", "W7JdRWPnW4rHW6/dNmk3W6JcSW", "WRVcON0", "WONcL8o1WRjsk8oR", "t1tcGeRdLa", "WQH0lmkBDG", "W5FcSN3dQCkAWOJcQq", "W7hdTcPyWO4xoSkCWRNdPSkNmdS", "WQWgnmo0W7dcNmkDD8kFWQy", "WO/dJ8knW5isCmkgsZNcS3H2mSkn", "W5rvy8kjW4O", "gsbLlGG", "W4FdNSkSW4y3", "WONdHmkdW5SwCCknbbdcGx5qhW", "WRBdO8oCW4/cMmkFW5/dOZ0/aSkqka", "l8oBW5Stqa", "f2FdLmosWQ4okSoCqCkLcKVdJq", "p8omW6qbrW", "zN5JW5DEW4PpvCofWQtdHW", "y0qLprDJE8kQfxVdQIK", "WROuWO5qimoSWRxdQwNcU1m5uW", "W6BcSCkrWPRdIa"];
  return _x = function() {
    return x;
  }, _x();
}
function yl({ children: x, licensePath: i, bramble: t, wasmDirectoryPath: e }) {
  function n(p, m, A, l, W) {
    return Te(l - 551, m);
  }
  const o = {};
  o[r(599, "ORcT", 603, 609) + "le"] = t, o[r(630, "k907", 611, 617) + C(1158, "U%!1", 1157) + "h"] = i;
  function r(p, m, A, l, W) {
    return Te(l - 280, m);
  }
  function a(p, m, A, l, W) {
    return Te(A - 700, l);
  }
  o[r(640, "J]c*", 620, 630) + a(1039, 1044, 1035, "b%b1") + n(897, "BNvY", 918, 905) + "th"] = e;
  const { sunfish: s, crosshatch: c } = bl(o), d = {};
  d[a(1051, 1049, 1042, "U%!1") + a(1046, 1046, 1046, "p*(X")] = c;
  const g = Ue(() => ({ redfin: Al(d), sunfish: s, crosshatch: c, bramble: t }), [s, c, t]);
  function C(p, m, A, l, W) {
    return Te(A - 817, m);
  }
  const u = {};
  return u[r(642, "hcqA", 625, 636)] = g, u[n(884, "F5NJ", 896, 887) + n(902, "DxqK", 905, 909)] = x, O(Nx[a(1020, 1026, 1030, "2zsz") + a(1041, 1058, 1052, "m8Y&")], u);
}
(function(x, i) {
  function t(c, d, g, C, u) {
    return Qe(g - 339, u);
  }
  function e(c, d, g, C, u) {
    return Qe(d - -264, c);
  }
  function n(c, d, g, C, u) {
    return Qe(c - 387, u);
  }
  function o(c, d, g, C, u) {
    return Qe(g - 714, c);
  }
  function r(c, d, g, C, u) {
    return Qe(g - -319, C);
  }
  for (var a = x(); ; )
    try {
      var s = parseInt(r(-28, -35, -28, "vmND", -37)) / 1 + -parseInt(r(-25, -25, -19, "EuKz", -15)) / 2 * (-parseInt(n(684, 682, 694, 676, "VEkc")) / 3) + parseInt(r(-40, -25, -35, "aj5*", -30)) / 4 * (parseInt(e("rwP@", 39, 36, 49, 31)) / 5) + -parseInt(o("jMsz", 1e3, 1006, 995, 1012)) / 6 * (-parseInt(e("rwP@", 19, 18, 10, 23)) / 7) + -parseInt(n(673, 679, 682, 665, "gM63")) / 8 + parseInt(o("b*mu", 1009, 1012, 1023, 1020)) / 9 * (-parseInt(t(638, 634, 629, 633, "DqsX")) / 10) + parseInt(n(689, 680, 681, 683, "(W@3")) / 11;
      if (s === i) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Xx, -918140 + 178023 * -2 + 887459 * 2);
function Xx() {
  var x = ["WRpcMmkZW41zfbtdO1StW5HdAG", "W4KTW6GKWOhdMXn6iN3cKmouW5y", "v8oqWOmmWRddSSkRr2f0WOKA", "WObVW57dH8ozWRTbWOn6W6ePWPJcTW", "W6VdPG3cQmk3WRrUh1BdVYjY", "l8k2cGPGnGi", "ccRdNc5xdMldM8ocWO8rlW", "WPXPWO9OomoQgCoqfcu2sq", "WOGMheaPWRtdPmkaaMf2fG", "WPXhWP7cQHddO8oW", "uCoAW7TDW7tcNSkuEq", "W4rOWOLuW4dcJui", "FuTjW4hdUCk+wYpcVhNcG04s", "WP0aW6JdHLlcO8oeWOmOCSoZwW", "W6blW7ddIwtdI8kQ", "uYuRW5aqfZFcTe8GkmkG", "rCo5a8oXiCoZua", "rmk+FCkxzSk1oMZdLSkEvuPe", "WQTcEmkiFMVdQmkcustcOCkZ", "WOtcTCo6W7/cHdemWRG", "ymkQbCo3WPqjamkNWQ/dHffJW5e"];
  return Xx = function() {
    return x;
  }, Xx();
}
function Qe(x, i) {
  var t = Xx();
  return Qe = function(e, n) {
    e = e - (-5 * -10 + -22 * 297 + -6767 * -1);
    var o = t[e];
    if (Qe.VYWPQx === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (var Z = 0, M = u.length; Z < M; Z++)
          p += "%" + ("00" + u.charCodeAt(Z).toString(16)).slice(-2);
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
      Qe.yYksnP = a, x = arguments, Qe.VYWPQx = !0;
    }
    var s = t[-4909 + -4858 * -1 + 3 * 17], c = e + s, d = x[c];
    return d ? o = d : (Qe.SsgSet === void 0 && (Qe.SsgSet = !0), o = Qe.yYksnP(o, n), x[c] = o), o;
  }, Qe(x, i);
}
function vl({ analytics: x, crosshatch: i }) {
  return i !== void (-9835 + -1453 * -1 + 8382) && !i.isAnalyticsDisabled ? x : void (-2560 + 4836 * -2 + -278 * -44);
}
function Wl({ analytics: x, appKey: i, redfin: t, crosshatch: e, bramble: n }) {
  const o = {};
  o.analytics = x, o.crosshatch = e;
  const r = vl(o);
  return ae(() => {
    r && r.init(i);
  }, [r, i]), ae(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), r && r.walleye(t, n.getCustomerName()));
  }, [r, n, e, t]), ae(() => {
    if (r)
      return window.addEventListener("beforeunload", r.endSession), () => {
        r.endSession(), window.removeEventListener("beforeunload", r.endSession);
      };
  }, [r]), r;
}
function Sl({
  analytics: x,
  appKey: i,
  children: t
}) {
  const { redfin: e, crosshatch: n, bramble: o } = q0(), r = Wl({ analytics: x, redfin: e, appKey: i, crosshatch: n, bramble: o }), a = Ue(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ O(Dx.Provider, { value: a, children: t });
}
const wl = 0 + 0.4, Bl = 0 + 0.16, Gl = 2805 + 33 * -85 + 0.2, kl = 1594 + -1 * 1594 + 0.05, Ol = -9822 + -1 * 7357 + 17179, Zo = {};
Zo.min = -(38 * -85 + -4822 * 1 + 8053 * 1), Zo.max = 1;
const Qa = Zo, Ua = -3480 + 2243 * 1 + -1 * -1237, Hl = -5865 + 2144 * -2 + 10153 + 0.3, Zl = -526 + -1702 * -2 + 2878 * -1 + 0.2, Rl = 14537 + -14537 * 1 + 0.85, Kl = -541 * -5 + -167 * -29 + -7518, Pl = -2 * -3319 + -655 * 15 + 1 * 3196 + 0.8100000000000005, kx = {};
kx.minDuration = 1e3, kx.maxDuration = 2500, kx.minFrames = 10;
const Qi = kx, Ro = {};
Ro.max = 100, Ro.min = 10;
const za = Ro, Vl = 720, Tl = 9700 + -174 * -29 + -14546, El = 4, Zc = "AES-CBC", Rc = "RSA-OAEP", Ll = "SHA-256", Dl = "image/jpeg", Nl = 8, Fl = -9732 + 3 * 9 + 9745, Yl = "SAM v1.40.4 for idcards", jl = "dot_embedded_bg.wasm";
let j;
const Rt = new Array(8475 + 4423 * 1 + -10 * 1277).fill(void 0);
Rt.push(void 0, null, !0, !1);
function Ko(x) {
  return Rt[x];
}
let vt = 11 * 811 + 4132 + 57 * -229, ln = null;
function Ox() {
  return (ln === null || ln.byteLength === 1943 * 2 + -4536 + 10 * 65) && (ln = new Uint8Array(j.memory.buffer)), ln;
}
const Hx = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Ml = typeof Hx.encodeInto == "function" ? function(x, i) {
  return Hx.encodeInto(x, i);
} : function(x, i) {
  const t = Hx.encode(x);
  i.set(t);
  const e = {};
  return e.read = x.length, e.written = t.length, e;
};
function vn(x, i, t) {
  if (t === void 0) {
    const a = Hx.encode(x), s = i(a.length, 1 * 2737 + -1 * -4778 + -7514) >>> 0;
    return Ox().subarray(s, s + a.length).set(a), vt = a.length, s;
  }
  let e = x.length, n = i(e, -5 * 361 + -96 * 43 + 6 * 989) >>> 4 * -21 + 2787 + -2703 * 1;
  const o = Ox();
  let r = -3576 + 6 * 596;
  for (; r < e; r++) {
    const a = x.charCodeAt(r);
    if (a > 7836 + 1798 * -5 + 1281) break;
    o[n + r] = a;
  }
  if (r !== e) {
    r !== 2773 + -47 * 59 && (x = x.slice(r)), n = t(n, e, e = r + x.length * (10 * -249 + -9004 + -1 * -11497), 1 * 2939 + 8289 + -11227) >>> 2 * 56 + 2075 + 81 * -27;
    const a = Ox().subarray(n + r, n + e), s = Ml(x, a);
    r += s.written, n = t(n, e, r, 6356 + -41 * 155) >>> -1922 + -1 * -6617 + -4695;
  }
  return vt = r, n;
}
function Kc(x) {
  return x == null;
}
let In = null;
function ht() {
  return (In === null || In.byteLength === -7 * 1091 + -9463 + 12 * 1425) && (In = new Int32Array(j.memory.buffer)), In;
}
let mn = Rt.length;
function _l(x) {
  x < -4 * -2243 + 4321 + -13161 || (Rt[x] = mn, mn = x);
}
function Pc(x) {
  const i = Ko(x);
  return _l(x), i;
}
const Po = {};
Po.ignoreBOM = !0, Po.fatal = !0;
const Vc = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Po) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Vc.decode();
function Jx(x, i) {
  return x = x >>> 3497 + 2293 * -2 + 1089, Vc.decode(Ox().subarray(x, x + i));
}
function Vo(x) {
  mn === Rt.length && Rt.push(Rt.length + (2285 + -7911 * -1 + 2039 * -5));
  const i = mn;
  return mn = Rt[i], Rt[i] = x, i;
}
let fn = null;
function Tc() {
  return (fn === null || fn.byteLength === -6572 + 167 * 55 + 67 * -39) && (fn = new Uint32Array(j.memory.buffer)), fn;
}
function qa(x, i) {
  const t = i(x.length * 4, 4) >>> 0, e = Tc();
  for (let n = 577 * -10 + 8412 + -2642; n < x.length; n++)
    e[t / (-3 * 2331 + -9502 + 7 * 2357) + n] = Vo(x[n]);
  return vt = x.length, t;
}
function $a(x, i) {
  x = x >>> 13 * 191 + -2432 + 51 * -1;
  const t = Tc(), e = t.subarray(x / (3559 + 1 * 9787 + -1906 * 7), x / (-6129 + 6133 * 1) + i), n = [];
  for (let o = -349 * -7 + -2060 + 383 * -1; o < e.length; o++)
    n.push(Pc(e[o]));
  return n;
}
function Xl(x, i) {
  const t = vn(x, j.__wbindgen_malloc, j.__wbindgen_realloc), e = vt, n = vn(i, j.__wbindgen_malloc, j.__wbindgen_realloc), o = vt, r = j.is_mobile_supported(t, e, n, o);
  return yr.__wrap(r);
}
const To = {};
To.register = () => {
}, To.unregister = () => {
};
const es = typeof FinalizationRegistry > "u" ? To : new FinalizationRegistry((x) => j.__wbg_licensevalidationresult_free(x >>> -2347 + -2347 * -1));
class yr {
  static __wrap(i) {
    i = i >>> 4562 + -2914 * -1 + 21 * -356;
    const t = Object.create(yr.prototype);
    return t.__wbg_ptr = i, es.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const i = this.__wbg_ptr;
    return this.__wbg_ptr = 7863 + 6694 * -1 + -1169, es.unregister(this), i;
  }
  free() {
    const i = this.__destroy_into_raw();
    j.__wbg_licensevalidationresult_free(i);
  }
  constructor(i, t, e, n, o) {
    var r = Kc(t) ? 0 : vn(t, j.__wbindgen_malloc, j.__wbindgen_realloc), a = vt;
    const s = qa(e, j.__wbindgen_malloc), c = vt, d = qa(n, j.__wbindgen_malloc), g = vt, C = vn(o, j.__wbindgen_malloc, j.__wbindgen_realloc), u = vt, p = j.licensevalidationresult_new(i, r, a, s, c, d, g, C, u);
    return this.__wbg_ptr = p >>> -114 * 85 + -1 * -2283 + 7407, this;
  }
  get is_valid() {
    return j.licensevalidationresult_is_valid(this.__wbg_ptr) !== -1 * -3899 + 631 * -8 + 1149;
  }
  get features_json() {
    try {
      const e = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var i = ht()[e / (2 * -2603 + 6938 + -1728 * 1) + (29 * -137 + -7033 + 11006)], t = ht()[e / (-5949 + -2 * -3797 + -1641) + (-12114 + 5 * 2423)];
      let n;
      return i !== -5 * 1011 + 1 * -3217 + 8272 && (n = Jx(i, t).slice(), j.__wbindgen_free(i, t * (-8313 + 3 * 817 + 533 * 11), 1)), n;
    } finally {
      j.__wbindgen_add_to_stack_pointer(-8181 * 1 + 6907 * -1 + -2 * -7552);
    }
  }
  get errors() {
    try {
      const n = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_errors(n, this.__wbg_ptr);
      var i = ht()[n / (-1 * -3851 + 6162 + 1 * -10009) + (6087 + 2 * -2634 + -819 * 1)], t = ht()[n / (-1 * 4962 + 13 * -243 + 8125) + (-535 * 5 + 1641 + 1035 * 1)], e = $a(i, t).slice();
      return j.__wbindgen_free(i, t * (-5 * -137 + -2498 * 1 + 79 * 23), -127 * 49 + -7263 + 5 * 2698), e;
    } finally {
      j.__wbindgen_add_to_stack_pointer(3 * 491 + 1 * -7895 + 6438);
    }
  }
  get warnings() {
    try {
      const n = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var i = ht()[n / (4 * 80 + 5 * 593 + -1 * 3281) + 0], t = ht()[n / (-961 + 1 * 965) + (-10795 + -2 * -5398)], e = $a(i, t).slice();
      return j.__wbindgen_free(i, t * (730 * -1 + -8492 + 9226), 4262 + -1162 * 4 + 5 * 78), e;
    } finally {
      j.__wbindgen_add_to_stack_pointer(788 + 1 * -6553 + -123 * -47);
    }
  }
  get customer() {
    let i, t;
    try {
      const o = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = ht()[o / (3 * -2517 + -1447 * -3 + 3214) + (8752 * -1 + -2801 + 11553)], n = ht()[o / 4 + (-1 * -3847 + 6805 + -10651)];
      return i = e, t = n, Jx(e, n);
    } finally {
      j.__wbindgen_add_to_stack_pointer(-427 + -443 * -1), j.__wbindgen_free(i, t, -8314 + -204 * -48 + -1477 * 1);
    }
  }
}
async function Jl(x, i) {
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
function Ql() {
  const x = {};
  return x.wbg = {}, x.wbg.__wbindgen_string_get = function(i, t) {
    const e = Ko(t), n = typeof e == "string" ? e : void 0;
    var o = Kc(n) ? 5654 + 1 * -5654 : vn(n, j.__wbindgen_malloc, j.__wbindgen_realloc), r = vt;
    ht()[i / (1 * -6177 + 1429 + -88 * -54) + (1 * -2459 + -9754 + 12214)] = r, ht()[i / (-53 + 1 * -7757 + -7814 * -1) + (8022 + -21 * 382)] = o;
  }, x.wbg.__wbindgen_object_drop_ref = function(i) {
    Pc(i);
  }, x.wbg.__wbindgen_string_new = function(i, t) {
    const e = Jx(i, t);
    return Vo(e);
  }, x.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Vo(/* @__PURE__ */ new Date());
  }, x.wbg.__wbg_getTime_2bc4375165f02d15 = function(i) {
    return Ko(i).getTime();
  }, x.wbg.__wbindgen_throw = function(i, t) {
    throw new Error(Jx(i, t));
  }, x;
}
function Ul(x, i) {
  return j = x.exports, Ec.__wbindgen_wasm_module = i, In = null, fn = null, ln = null, j;
}
async function Ec(x) {
  if (j !== void 0) return j;
  typeof x > "u" && (x = new URL("dot_embedded_bg.wasm", import.meta.url));
  const i = Ql();
  (typeof x == "string" || typeof Request == "function" && x instanceof Request || typeof URL == "function" && x instanceof URL) && (x = fetch(x));
  const { instance: t, module: e } = await Jl(await x, i);
  return Ul(t, e);
}
function dx(x, i, t, e, n) {
  return We(t - 207, n);
}
function sn(x, i, t, e, n) {
  return We(x - 956, e);
}
function Qx() {
  const x = ["WOXNrCowiW", "xSkfW5eBxCkzicBdGwO", "lLldJmkkW6a", "W4RcSfCV", "zv8GW53cMG", "dCogWO9ewG", "W4tcJLBcPsO", "WQZcMXXeW5q", "qCo/W73dUh3dSCoCW4ZcSSoaWRbz", "thNdTCoPxW", "dCkAW6pdSYO", "W67cKgiVAa", "WQWLW7ZcMtS", "jee1W4FcLG", "fYpcSCk0depcNmolbSk5W43cSW", "WRxdGZ94Dmk4yCoVvmkC", "WRHIW7pcO8kHqSotECo2zs0Qjq", "nCkuW6xdMqa", "WRrqWQ4ZW7FcLq/cQmoslG", "WOrXtmoPW6S", "s8kBWPtdPCoppZ5Jq00FnCoP", "pvRcSSk4WPu", "ymkiWQJcUXO", "dmksW63dVYe", "W4ahBJCB", "WQ7cLWTe", "WOvQhSktfW", "WPFcOxqgh8kCDSo6WOehW7G", "e8koWRbXWOW", "wSkgW55DEmk2irVdRa", "W47cPmktj2iwFSknW4qlksC", "tmkBWPldO8ktBvXHuMi", "WQneCfqoW4NcIKpdMgT6WOW", "WQ02WQRdSmo3", "WPldGWBdVNWOxSk2F8o8WRxdLq", "W4hcLuVcLse", "W5ZdHmogW47dNG", "rdmoWPtdHa", "WR5NW7xcOmkItSouDCoDFsi8ma", "W7dcPSowgN8PW50", "v8oIWOCmhb7dIa", "m0DZASk7", "WPPXu8oTW5G", "mZVdJ8oxWOLwW4a", "W5WWvmocqCklWP/dMCkApmktW6S", "f8oFW7lcSSkj", "zb8tWP3cJG", "s37dP8oVta", "qSoBWRGNdW", "lCo7omoWzq", "W5JdNIDihW", "lL7dL8kCW6e", "cConW5BcVSkZ", "h8kOWPegW5BcNmkjW5tcVJRdV3VdVq", "sIioWO7dHq", "W6ZcPIHOW4CdW7G", "WOZcJKaAtSosWR1al8o9W6C", "krLoW47cRGeZWOvq"];
  return Qx = function() {
    return x;
  }, Qx();
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return We(c - 42, g);
  }
  function e(s, c, d, g, C) {
    return We(d - 855, c);
  }
  function n(s, c, d, g, C) {
    return We(g - 416, C);
  }
  const o = x();
  function r(s, c, d, g, C) {
    return We(c - 24, d);
  }
  function a(s, c, d, g, C) {
    return We(c - 239, s);
  }
  for (; ; )
    try {
      if (parseInt(a("b]mZ", 645, 648, 626, 663)) / 1 + -parseInt(t(455, 455, 483, "Q4wx", 480)) / 2 * (-parseInt(t(470, 460, 473, "d(G9", 473)) / 3) + -parseInt(e(1264, "H3#4", 1282, 1279, 1287)) / 4 * (-parseInt(n(821, 852, 851, 830, "IQbb")) / 5) + -parseInt(n(810, 846, 828, 820, "cTW$")) / 6 + -parseInt(e(1225, "Cuk3", 1249, 1225, 1221)) / 7 + parseInt(a("5$N8", 670, 699, 678, 686)) / 8 * (-parseInt(e(1219, "Qv2w", 1247, 1242, 1241)) / 9) + -parseInt(r(428, 399, "Kmb7", 385, 386)) / 10 * (parseInt(e(1272, "AsYs", 1285, 1297, 1267)) / 11) === i) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Qx, 411586);
function Ui(x, i, t, e, n) {
  return We(i - 355, e);
}
function We(x, i) {
  const t = Qx();
  return We = function(e, n) {
    e = e - (9316 + 263 * -34);
    let o = t[e];
    if (We.AvaqLV === void 0) {
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
      We.RIfNaD = d, x = arguments, We.AvaqLV = !0;
    }
    const a = t[-9825 + 1 * -174 + 33 * 303], s = e + a, c = x[s];
    return c ? o = c : (We.jaNcNe === void 0 && (We.jaNcNe = !0), o = We.RIfNaD(o, n), x[s] = o), o;
  }, We(x, i);
}
function ts(x, i, t, e, n) {
  return We(x - 271, e);
}
function zl(x, i, t, e, n) {
  return We(x - 933, t);
}
var Ws;
class ql {
  constructor() {
    T(this, Ws, !1);
  }
  async [(Ws = sn(1347, 1340, 1319, "eFJ1") + dx(616, 611, 594, 568, "anYv") + sn(1356, 1330, 1369, "d(G9"), dx(581, 592, 584, 589, "DIvW"))](i = ts(649, 642, 655, "anYv")) {
    function t(a, s, c, d, g) {
      return sn(g - -498, s - 21, c - 79, d);
    }
    function e(a, s, c, d, g) {
      return Ui(a - 208, c - -130, c - 216, a);
    }
    function n(a, s, c, d, g) {
      return Ui(a - 63, a - -19, c - 117, d);
    }
    function o(a, s, c, d, g) {
      return ts(s - -57, s - 266, c - 98, a);
    }
    function r(a, s, c, d, g) {
      return sn(c - -204, s - 42, c - 425, g);
    }
    try {
      const a = i + "/" + jl;
      await Ec(a), this[n(762, 773, 755, "Cuk3", 762) + t(845, 889, 834, "f%Wb", 860) + n(720, 700, 727, "]hx0", 705)] = !0;
    } catch {
      this[n(752, 764, 728, "[nfx") + e("BJ8M", 631, 608) + r(1188, 1159, 1167, 1181, "lOKw")] = !1, console[o("8MtW", 613, 624)](e("gK3^", 617, 634) + e("pyDS", 634, 610) + o("AsYs", 638, 620) + e("VrTT", 629, 636) + n(758, 779, 745, "IQbb") + o("[nfx", 607, 581) + n(715, 697, 744, "Kmb7") + e("VrTT", 633, 653) + e("d(G9", 618, 599) + o("Eaah", 590, 599) + n(743, 772, 762, "DGxB") + t(853, 850, 878, "x1L*", 868) + t(844, 845, 822, "8MtW", 839) + e("gK3^", 613, 605) + e("XSrP", 667, 648) + n(734, 749, 739, "6Piy") + n(757, 768, 780, "BJ8M") + e("]hx0", 646, 622) + "n.");
    }
  }
  [zl(1352, 1336, "Cuk3") + dx(595, 620, 603, 627, "9MSV") + dx(618, 606, 627, 633, "Ke7*") + "ed"]() {
    function i(e, n, o, r, a) {
      return sn(a - -1069, n - 408, o - 363, n);
    }
    function t(e, n, o, r, a) {
      return Ui(e - 281, r - 267, o - 80, n);
    }
    return this[i(273, "bFxx", 297, 295, 273) + t(992, "BlJ]", 1005, 1017) + t(1048, "Eaah", 1061, 1047)];
  }
}
class zi extends Error {
  constructor() {
    super(...arguments);
    T(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return le(C - -474, c);
  }
  var e = x();
  function n(s, c, d, g, C) {
    return le(s - -454, C);
  }
  function o(s, c, d, g, C) {
    return le(s - -932, C);
  }
  function r(s, c, d, g, C) {
    return le(s - -990, C);
  }
  for (; ; )
    try {
      var a = -parseInt(o(-630, -631, -619, -605, "Coab")) / 1 * (-parseInt(o(-652, -638, -674, -648, "x0tn")) / 2) + parseInt(r(-678, -679, -666, -666, "4Aeb")) / 3 + parseInt(r(-732, -729, -719, -703, "Pb0R")) / 4 * (parseInt(o(-634, -648, -638, -603, "VZGF")) / 5) + -parseInt(t(-175, "i4sl", -186, -180, -158)) / 6 + -parseInt(r(-715, -700, -730, -690, "xL(K")) / 7 + parseInt(o(-632, -635, -644, -644, "plZN")) / 8 * (-parseInt(t(-158, "VUDF", -171, -142, -168)) / 9) + parseInt(t(-167, "[Dx2", -160, -130, -160)) / 10 * (parseInt(n(-134, -155, -104, -162, "wjpO")) / 11);
      if (a === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ux, 179 * -7247 + 360363 + 2 * 794359);
function ns(x, i, t, e, n) {
  return le(n - 680, x);
}
function qi(x, i, t, e, n) {
  return le(n - -692, x);
}
function ux(x, i, t, e, n) {
  return le(n - -970, i);
}
function Nt(x, i, t, e, n) {
  return le(n - 568, e);
}
function le(x, i) {
  var t = Ux();
  return le = function(e, n) {
    e = e - (-13 * 228 + -3533 * -1 + -311);
    var o = t[e];
    if (le.ImkCMa === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (var Z = 0, M = u.length; Z < M; Z++)
          p += "%" + ("00" + u.charCodeAt(Z).toString(16)).slice(-2);
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
      le.zWCkax = a, x = arguments, le.ImkCMa = !0;
    }
    var s = t[7 * 375 + 2 * -3625 + -4625 * -1], c = e + s, d = x[c];
    return d ? o = d : (le.HwOlWF === void 0 && (le.HwOlWF = !0), o = le.zWCkax(o, n), x[c] = o), o;
  }, le(x, i);
}
function lx(x, i, t, e, n) {
  return le(n - -304, i);
}
var E0, Bn;
class xs {
  constructor(i) {
    ie(this, E0);
    ie(this, Bn);
    function t(a, s, c, d, g) {
      return le(a - -464, s);
    }
    function e(a, s, c, d, g) {
      return le(g - 947, d);
    }
    function n(a, s, c, d, g) {
      return le(c - -313, d);
    }
    function o(a, s, c, d, g) {
      return le(c - 576, s);
    }
    function r(a, s, c, d, g) {
      return le(c - 407, d);
    }
    this[t(-163, "VZGF") + t(-147, "wjpO")] = i;
    try {
      te(this, E0, i[o(878, "xL(K", 875, 904, 893) + e(1272, 1231, 1231, "U^z7", 1262) + t(-176, "N[zL", -189, -182, -184)] && JSON[n(-32, 9, -20, "rE89", -6)](i[t(-183, "[Dx2", -184, -154, -155) + t(-161, "rE89", -154, -149, -143) + n(16, 26, -6, "m1P8", 8)])), te(this, Bn, i[o(843, "UvLs", 847, 864, 824) + n(-14, -16, -40, "!1qw", -12)]);
    } catch (a) {
      console[r(712, 690, 717, "U^z7")](a);
    }
  }
  get [ux(-686, "MxzY", -681, -705, -710) + "id"]() {
    function i(e, n, o, r, a) {
      return ux(e - 70, r, o - 278, r - 289, a - 1228);
    }
    function t(e, n, o, r, a) {
      return ux(e - 394, a, o - 399, r - 98, o - 1379);
    }
    return this[i(520, 503, 525, "AaMh", 520) + t(702, 700, 677, 653, "VUDF")][i(564, 589, 572, "[c#K", 577) + i(568, 576, 561, "x0tn", 553)];
  }
  get [ux(-649, "wjpO", -642, -639, -657) + "s"]() {
    function i(e, n, o, r, a) {
      return Nt(e - 66, n - 26, o - 287, a, o - -1434);
    }
    function t(e, n, o, r, a) {
      return Nt(e - 284, n - 469, o - 22, o, e - -1336);
    }
    return this[i(-586, -578, -596, -570, "RzkD") + t(-476, -451, "nopY")][t(-463, -457, "4Aeb") + "s"];
  }
  get [Nt(857, 856, 841, "$faS", 846) + Nt(875, 846, 874, "Pb0R", 876)]() {
    function i(n, o, r, a, s) {
      return qi(a, o - 471, r - 295, a - 440, n - 944);
    }
    function t(n, o, r, a, s) {
      return lx(n - 300, o, r - 313, a - 296, r - -306);
    }
    function e(n, o, r, a, s) {
      return lx(n - 150, s, r - 68, a - 242, o - 978);
    }
    return this[t(-324, "4Aeb", -336, -359) + i(511, 482, 530, "MxzY")][i(536, 510, 537, "IC#R") + e(936, 956, 972, 936, "AaMh")];
  }
  get [Nt(865, 873, 831, "s#&g", 855) + "b"]() {
    return L(this, E0);
  }
  get [Nt(849, 893, 874, "IC#R", 864) + lx(22, "997Y", 23, -18, -7)]() {
    return L(this, Bn);
  }
  get [ns("Pb0R", 959, 924, 974, 947) + lx(-25, "!OGH", -18, -63, -40) + qi("i4sl", -383, -365, -376, -383) + Nt(837, 834, 838, "m1P8", 845)]() {
    var n, o;
    function i(r, a, s, c, d) {
      return ns(r, a - 282, s - 388, c - 404, c - -1638);
    }
    function t(r, a, s, c, d) {
      return qi(s, a - 165, s - 154, c - 276, a - 953);
    }
    function e(r, a, s, c, d) {
      return Nt(r - 78, a - 138, s - 231, r, c - -700);
    }
    return !!((o = (n = L(this, E0)) == null ? void 0 : n[e("OGlm", 169, 170, 162) + e("i4sl", 138, 133, 153)]) != null && o[e("IC#R", 121, 152, 137) + e("yQjy", 102, 160, 133) + t(589, 572, "UvLs", 556) + t(506, 537, "997Y", 506) + e("#l(n", 170, 170, 159) + i("i4sl", -664, -654, -668) + i("IC#R", -637, -671, -640) + "d"]);
  }
}
E0 = new WeakMap(), Bn = new WeakMap();
function Ux() {
  var x = ["WRlcTIVcMta", "WRJcS1pcK2m", "W6ZcO8oe", "uCo9cmkZCq", "g10y", "bmkJomkeCCofWOFcM8o1", "W5ipW73dH8oy", "WQVcGLhdL8oFhYqJWO0IW6W", "vCoGz8k7va", "WPPoirZcJSk8WOWNsZCV", "WRdcSIRcTt8", "zI3dKeJcJu1NksbqWRi", "phxdL8kfWOO", "d1LzfIuXWOhdQg0", "hHhdIq", "jvdcOq", "amked2pcGG", "iSkOWOi/", "WRRcM8kAu8oV", "AdBcKmoDW4/dHdfgDNqgcYu", "bSkKW40jW7y", "W718WOr+WOzomxbYtxfTWQa", "oCkJWPCpra", "rSoZvsNdKeXEaIhcUIlcQWy", "c8k3W4SfW6W", "qCoPgCkREW", "fCoHWOGJWQK", "umoLW7ubW7ZdJYNdGa", "FW/dQSoGW6fDW7ONCSkX", "l3hcVSk8WPa", "lMpcNmk+WPq", "EmoiWROnwblcN8kQhZJdKIBdJG", "deBcMM/cSq", "vJfKbLldGmoBDmor", "W7TEDCkQW5W", "icBcHmoBuq", "W6RdRGRdL0jiimkDd8o1", "iKtcK8k+W5q", "xGOAgam", "qmoTgSkRsG", "b3i7oxC", "WRJcGmkArSoJ", "wuRdOs/cOmoxBmoy", "e3KC", "oNxdISkzWOS", "WObCWQxcGmkDdvmgmM/cNgRcVa", "aLefk1i", "dXldGIi", "WQNcQKNdKCkM", "W5lcQ8k9W6xdGmkxchaQW57cJa", "WRtdVSoMW6RcUHxcUmoc", "WQGSW5m8W4e", "avpcHG", "WQldT8kMW4xdK0S5WPC2WPFcOCoqhq", "rCoPcCkPDW", "aCkLfq", "WQBdTCkGW4VdL048WPCvWRFcMCoena", "z8ohW7VdICoi", "h10l", "xahdGYRdSmkRW6fVWOzIW4BcGde", "gSkUavtcIG", "tCoAW5RdU8oa", "WR9wWPerWQO"];
  return Ux = function() {
    return x;
  }, Ux();
}
function he(x, i, t, e, n) {
  return ye(x - 791, t);
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return ye(c - 912, s);
  }
  function e(s, c, d, g, C) {
    return ye(d - -929, c);
  }
  const n = x();
  function o(s, c, d, g, C) {
    return ye(s - -640, g);
  }
  function r(s, c, d, g, C) {
    return ye(g - -179, c);
  }
  function a(s, c, d, g, C) {
    return ye(C - 531, c);
  }
  for (; ; )
    try {
      if (parseInt(e(-670, "(C1s", -577, -595, -514)) / 1 + parseInt(e(-773, "g5e]", -663, -656, -742)) / 2 * (-parseInt(t("6mDo", 1148, 1257, 1185, 1246)) / 3) + -parseInt(e(-668, "6iLe", -687, -783, -677)) / 4 * (parseInt(r(45, "8kcH", -24, 68, 77)) / 5) + -parseInt(a(910, "U(Rj", 789, 789, 795)) / 6 * (parseInt(r(-94, "BV#i", -110, -60, 6)) / 7) + parseInt(a(851, "I4tm", 826, 904, 873)) / 8 + parseInt(t("I4tm", 1139, 1136, 1247, 1193)) / 9 + parseInt(o(-443, -339, -477, "6iLe", -492)) / 10 === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(zx, 1499619 * 1 + 3 * -66189 + -390389);
function dt(x, i, t, e, n) {
  return ye(n - -819, e);
}
function zx() {
  const x = ["yCodd8k/Ba", "WO9Db3JcKG", "W5yzW7BdUqi", "uHpcO8otzvxdKSk0FgFdKxS", "WPzuW6ZcTfa", "W6mscSkVWQy", "W4WRW5C1ta", "W6/dK8kMW6i", "eCoTW4jWuq", "jmo9WQ4Huq", "WRfFW5xcNLC", "WQFcGetcSYK", "o8kpv3tcOq", "WPaVDJ7cUa", "W4uKgvj2", "WQpcQrdcNmkB", "W4yUgvTY", "d8kmWQ3dQYO", "mCoUWQ07rG", "lCkiAxhcPq", "WQ3cPCkLWOW", "WPJdQSkccSkI", "WQVcSZxcTSk4", "AHymWRzx", "WONcSSkzta8", "WOnzxmoUqG", "cLyR", "dCogW55HzG", "eSoYvq", "WQi9WQ1xWPa", "maVdV8kcpG", "i2uXBW8", "WQdcRSkLWOig", "W7apW5mkCW", "auxdOmkoFq", "hCo4xaZcJq", "W6JdMY3dJW", "W7tdLSoOeIa", "eL4UxcO", "eSo0sbRcJa", "WO/dTcSYdq", "WOySWRz6WPy", "WOVcISkvWRew", "cCoXW4S1WRO", "WORdVCkfzHO", "eemqsXW", "W7ldKbxdPhuOyCk7WPxcGCoQECo7", "W6mucmkUWOq", "W7pcSmkxy8kH", "W4ndfeZdRG", "W48KhW", "W4/dRbxcR8oU", "W4aKcxP6", "W7iaxSocWPm", "W6r/W7ukW5BcTmkWWOZdM0/cPSkjna", "WP/dPSkytH4", "WPrbkG", "WOJdH8kJxY0", "DG0aWQvq", "WQ5uDmoKsG", "WQToqmoGvW", "W5pcR09VrSo9WRKdWQzCW7xdQW", "W4yEW6tdTYW/W6uodSku", "eCo3W7GscG", "W7O9W47dMai", "WOiNaMTX", "jePWcmkY", "AvRcJmk7Aq", "kNfXeSk1", "W4jce2ZdKW", "WQbyC8oLqq", "WOldPmkKomkF", "aLaqsGC", "WQJcRYpcTG", "WQOHCSoYWPW", "W5zFcf/dLW", "WOrAWRtcQXu", "CGuxWQnw", "W4pdSt4Coq", "cCoMW4O1WQW", "WRNdU8k9omk7", "W5aEAt3dGCkVW4FdPrW6Etn9", "WPnuW7dcHum", "omoEW4vSDG", "WOSyWPDPW7G", "W6NcTCkDWRmF", "kCoOWRi", "W5yKfwO", "EreqWRrr", "WPvbnG", "WRJcPWO", "d8oXW5yPWRS", "oSoeW6bUxa", "W4BdVCkBWQX6", "WONdVHWYea", "WQBcJfu", "WOnCkMhcGq", "W5C3WOddRYG", "mX/dUCoIB1dcTSoEcXO", "zKVcRSkHBW", "W6VdSwS2eG", "WR4ykmoNW60", "W7CXW5tdGGy", "WRZcQNpcKqW", "hSoRW5uHcG", "WRCtWOibW54", "WQOwtCoFWPC", "uNNdUSkVdGpdTa", "WOe4AHlcOq", "WOmyWPyNW7u", "WQVcRZtcVmoQ", "W4KcWQZdGWpcN3ldHCoMWQfmtmos", "WRfpk2pdKW", "W6xdHIe", "pSkCAhBcRW", "W5SmnCo9W7e", "W7jGda", "jLTR", "W6tdIJC", "WO7cM1xcUtu", "W5jeW5r+W59Cr8o/dYK", "WORdSIiroa", "yfZcSSk9Ea", "fSkJWR3dOYS", "WOddTSkyp8kZ", "WQ5uCW", "W5qyytZcVSoAWO/dPr8G", "D0VcS8knya", "A0hcTmoYyW", "aKtdOCkUpa", "yedcS8k3wG", "bCkbW49WW6XuWRFdVM3cOG", "WQBcQq3cKq", "dv8+ra", "WPvCWRxcTG", "W4FdIIldQSom", "W697dKVcOa", "cKZdOa", "v8ovWPjU", "W6VdIIhdMmoa", "WRNdH8kHwtO", "WQZcQ8kBy8kY", "W4jJnuRcTW", "WQJcOSkGWOyD", "W7RcPSkdWRuj", "cmk5WOhdQXm", "WRGztmouWQ4", "W4bgmM3dRG", "qCokW6mtodDP", "g1yr", "d0r5bSorBrdcSCkF", "WRZcV2RcLsu", "wSolhSk0AW", "WRe9WQTkWPC", "WQWLjsxcNq", "WQRcVaZcJa", "WP7dVCkf", "k8ktAwdcMG", "W4SVbgO", "WO9npwdcGa", "W6/dJdxdISop", "FqexWOrr", "WONdVCkRvq", "WPHAW6RcKLK", "WOhdR8kJpSox", "W7atW5iauq", "hSkCBM0", "W4WMhG", "xHG1kmo6", "W70lnmoMW6W", "mmopW69Kya", "W7WtW4rlBq", "W6RcRmkyyG", "cvC/p8ko", "WQRcHuVcHsi", "xruucmo0", "b0m3wmkA", "WQ02wKZcHSoZzdHf", "W6xdGci", "WQlcRSk3WOaB", "i115gSk0", "W5VdGJxdPW", "WRBcPmkX", "W49dauy", "vJe0WOLv", "x8oeWROPW6O", "WOnjWQ/cQW", "W7irimoxW7e", "WQBcVdlcSmoW", "emo9W74uhG", "W7KuW4iaBW", "guuUtq0", "WOJdTSk8hSoP", "zfRcQmkH", "W4JcTCkdWRqs", "l8kjF0NcOW", "WOldSGSteq", "cf45t8kL", "bSopW7PWEq", "a8oIW4GVWRm", "evqerrS", "W67dIJhdSmom", "dutdVq", "celdSmkomW", "lSoHWQGM", "amkkW6vSDG", "bZ0cWQZdMG", "sSo4W6ZcTKZcTCo7WRi+WORdSG4", "W6xdGcBdNCor", "WOVdVGS+hW", "W4OUhMPX", "WONdUbG", "DGSeWOvm", "WPpcRxLeBSojW4epWR7cSc7dTmk9", "bvW9", "e1aQrCka", "W4mNWQnqW7G", "imkoFYVcPG", "W4tdQI4+na", "WRHbWR7cOa8", "W4NdSsGtkq", "WOBdPraKdq", "vsqwfSoH", "femXrCkD", "W7xdOCoOjcG", "wbaK", "W4yiWQZdHWlcKNJdICoTWOfdymow", "W70sW5irBW", "vrq7aCo3", "aSoIW5aLWQe", "WO5plg3cMW", "g8kTWRBdSHK", "W5VcOCoafdxcGJf1WRrj", "wSongSkuDW", "aLq5x8kC", "W4ddLa8Lrq", "W5b6mvBdOSkqWRT1W4FdMmogW54", "W6RcOCkBy8kM", "WORdOmksrG", "W5ldVZKC", "tKqpWQLD", "duJdTSkflG", "W7qvpLv+", "WPZcQrFcKSot", "W5pdSJ0dEW", "W6tdL8kUW7Hd", "WONdOmkftaK", "WQ85xSoCWPS"];
  return zx = function() {
    return x;
  }, zx();
}
function ye(x, i) {
  const t = zx();
  return ye = function(e, n) {
    e = e - (1703 * 1 + -3474 + 1 * 1889);
    let o = t[e];
    if (ye.bwQgzv === void 0) {
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
      ye.yLZLpx = d, x = arguments, ye.bwQgzv = !0;
    }
    const a = t[-1 * 2889 + 8885 + 1499 * -4], s = e + a, c = x[s];
    return c ? o = c : (ye.YwIvVf === void 0 && (ye.YwIvVf = !0), o = ye.yLZLpx(o, n), x[s] = o), o;
  }, ye(x, i);
}
function Ot(x, i, t, e, n) {
  return ye(t - 971, n);
}
function He(x, i, t, e, n) {
  return ye(e - -815, i);
}
function me(x, i, t, e, n) {
  return ye(n - 758, e);
}
var Ss, ws, Bs;
class $l {
  constructor(i) {
    T(this, Bs);
    T(this, ws, [me(1109, 891, 937, "!DP7", 1015) + me(1093, 1147, 1113, "Md7m", 1045) + "ic", dt(-641, -533, -544, "CQRE", -582) + he(1124, 1149, "^!O%") + "ic"]);
    T(this, Ss);
    function t(e, n, o, r, a) {
      return ye(n - 71, o);
    }
    this[t(433, 347, "N6W@") + t(388, 326, "@G^d") + "d"] = i;
  }
  async [(Bs = he(918, 984, "ogiG") + "se", ws = Ot(1099, 1185, 1119, 1195, "j#kH") + Ot(1360, 1395, 1278, 1162, "PLEZ") + He(-497, "dKYu", -448, -553) + he(1041, 1090, "9m!g"), Ss = he(1060, 1015, "Lb$P") + me(965, 952, 956, "D@1H", 1062), He(-518, "qdh9", -385, -495))](i = me(1028, 984, 948, "dKYu", 927), t) {
    function e(c, d, g, C, u) {
      return dt(c - 186, d - 119, g - 250, c, u - 1004);
    }
    function n(c, d, g, C, u) {
      return me(c - 245, d - 458, g - 331, g, d - -678);
    }
    const o = await this[s("@G^d", 460, 456, 463) + s("K1sN", 403, 560, 493) + s("^!O%", 494, 399, 428)](t);
    function r(c, d, g, C, u) {
      return dt(c - 62, d - 246, g - 253, C, c - 1566);
    }
    await Promise[e("ogiG", 564, 414, 424, 475) + n(398, 332, ")%n2")]([this[a("yWNs", 94, 60) + a("rWdi", 77, 64) + "d"][n(409, 354, "rWdi")](i), this[a("(D5p", 222, 261) + a("6iLe", 184, 71) + "e"](o)]);
    function a(c, d, g, C, u) {
      return He(c - 118, c, g - 244, d - 724);
    }
    function s(c, d, g, C, u) {
      return he(C - -645, d - 497, c);
    }
    this[r(948, 901, 921, "s2!7") + n(336, 414, "CQRE") + n(229, 275, "lov(")]();
  }
  async [he(1086, 1189, "j#kH") + he(1126, 1206, "9m!g") + "se"](i) {
    function t(a, s, c, d, g) {
      return dt(a - 331, s - 209, c - 342, d, g - 1301);
    }
    function e(a, s, c, d, g) {
      return he(g - -201, s - 342, d);
    }
    function n(a, s, c, d, g) {
      return me(a - 337, s - 217, c - 372, c, s - -1066);
    }
    function o(a, s, c, d, g) {
      return He(a - 101, g, c - 212, s - 288);
    }
    function r(a, s, c, d, g) {
      return Ot(a - 107, s - 133, g - -1759, d - 275, a);
    }
    try {
      if (n(-51, -167, "qCp9", -122, -52) === n(-282, -182, "I4tm", -178, -220)) {
        const a = await fetch(i);
        if (!a.ok) {
          if (n(-17, -100, "!c@C", -136, -101) !== e(837, 726, 828, "K1sN", 829)) throw new Error(o(-291, -318, -365, -252, "3m6d") + t(735, 875, 860, "!DP7", 835) + n(-59, -135, "YQHK", -148, -199) + r("NPaV", -537, -554, -449, -571) + "d.");
          _0x3c6e3e[r("lov(", -512, -511, -547, -581)](_0x4c3dc4);
        }
        this[o(-100, -221, -124, -99, "Md7m") + "se"] = await a[o(-220, -324, -333, -387, "rWdi")]();
      } else return _0x399f52;
    } catch (a) {
      if (t(678, 503, 646, "Md7m", 604) === t(625, 800, 778, "6mDo", 703)) {
        _0xb41618[n(74, -9, "yWNs")](n(-14, -92, "CQRE") + e(948, 869, 873, "!c@C", 911) + t(589, 647, 673, "D@1H", 620) + e(764, 767, 882, "yWNs", 781) + e(846, 923, 781, "8kcH", 844)), this[n(-41, -49, "j#kH") + "se"] = void (1 * 4052 + -876 * 5 + 2 * 164);
        return;
      } else this[o(-210, -208, -283, -110, "BV#i") + "se"] = void (-7382 + -2 * 3217 + 13816), console[e(870, 766, 750, "6iLe", 802)](a);
    }
  }
  async [he(912, 952, "xX1y") + he(1148, 1244, "BV#i") + "e"](i) {
    function t(a, s, c, d, g) {
      return Ot(a - 99, s - 388, s - -888, d - 223, d);
    }
    function e(a, s, c, d, g) {
      return me(a - 177, s - 426, c - 319, c, g - -218);
    }
    function n(a, s, c, d, g) {
      return he(s - -1372, s - 14, g);
    }
    this[r("lov(", 105, 217) + t(404, 362, 437, "I4tm")] = void 0;
    function o(a, s, c, d, g) {
      return me(a - 371, s - 475, c - 39, s, g - -970);
    }
    function r(a, s, c, d, g) {
      return me(a - 395, s - 435, c - 358, a, s - -812);
    }
    if (!i)
      if (r("g5e]", 284, 326) !== t(306, 423, 452, "Wlvd")) _0x2bf1dd[r("giHR", 295, 376) + e(658, 734, "6iLe", 785, 712)](_0x1711cb);
      else {
        console[o(57, "(D5p", -81, 60, 37)](r("8Sdc", 159, 97) + o(100, "#*F@", 255, 256, 144) + r("BV#i", 96, 91) + n(-496, -442, -508, -475, "#*F@") + t(368, 361, 285, "]$^a")), this[t(380, 293, 237, "sL4F") + "se"] = void (5378 * 1 + 1 * 6318 + 5848 * -2);
        return;
      }
    await this[t(290, 363, 479, "qE@7") + e(723, 850, "N6W@", 731, 791) + "se"](i);
  }
  async [He(-568, "g5e]", -545, -531) + me(976, 958, 1010, "8Sdc", 938) + me(1015, 993, 987, "N6W@", 1055)](i) {
    function t(s, c, d, g, C) {
      return He(s - 382, d, d - 475, C - 1082);
    }
    function e(s, c, d, g, C) {
      return me(s - 134, c - 411, d - 179, d, s - -807);
    }
    function n(s, c, d, g, C) {
      return He(s - 478, C, d - 34, d - 639);
    }
    if (i) {
      if (n(46, -154, -58, -181, "8Sdc") !== n(39, 99, -18, 99, "j#kH")) throw new _0x482d9b(r(950, "N6W@", 970, 851) + n(195, 102, 156, 153, "8k$k") + o("bmbR", -301, -476, -421) + r(949, "rWdi", 914, 865) + "d.");
      return i;
    }
    function o(s, c, d, g, C) {
      return He(s - 219, s, d - 70, g - 254);
    }
    function r(s, c, d, g, C) {
      return dt(s - 252, c - 29, d - 477, c, g - 1503);
    }
    if ((await fetch(this[n(191, 232, 120, 13, "3p5C") + e(252, 227, "8kcH") + r(952, "3%vU", 940, 930) + e(260, 373, "3%vU")][-1767 + 93 * 19])).ok) {
      if (o("yWNs", -306, -316, -298) !== n(17, -66, -20, -114, "sL4F")) return this[n(244, 211, 140, 243, "PLEZ") + t(494, 469, "!c@C", 515, 466) + r(1041, "^!O%", 950, 957) + e(260, 279, "3%vU")][0];
      _0x502014[o("I4tm", -424, -354, -441) + "ch"]((s) => _0x36513f[o("9m!g", -272, -255, -259)](s));
    }
    return this[n(9, 163, 110, 96, "!c@C") + e(134, 156, "3%vU") + o("yWNs", -295, -393, -396) + o("flwc", -241, -170, -290)][9919 + -839 * -3 + -4145 * 3];
  }
  [dt(-673, -741, -525, "9m!g", -627) + dt(-657, -466, -656, "NPaV", -588) + "s"](i) {
    function t(n, o, r, a, s) {
      return Ot(n - 477, o - 248, a - -1222, a - 478, n);
    }
    function e(n, o, r, a, s) {
      return me(n - 172, o - 124, r - 95, r, n - -226);
    }
    i[t("bmbR", 3, -58, -91) + "ch"]((n) => console[e(887, 786, "CQRE")](n));
  }
  [Ot(1091, 1181, 1135, 1019, "!DP7") + me(1096, 1168, 1035, "giHR", 1122) + me(1027, 1107, 1079, "PLEZ", 1023)](i) {
    function t(e, n, o, r, a) {
      return He(e - 106, o, o - 215, a - -151);
    }
    i[t(-700, -713, "U(Rj", -897, -787) + "ch"]((e) => console[t(-708, -868, "j#kH", -713, -830)](e));
  }
  [dt(-640, -550, -636, "#*F@", -542) + He(-807, "3m6d", -741, -692)]() {
    function i(o, r, a, s, c) {
      return me(o - 424, r - 94, a - 427, s, r - -983);
    }
    function t(o, r, a, s, c) {
      return He(o - 272, c, a - 269, a - 1295);
    }
    function e(o, r, a, s, c) {
      return me(o - 105, r - 304, a - 0, s, c - -1391);
    }
    function n(o, r, a, s, c) {
      return He(o - 245, r, a - 173, a - 211);
    }
    return window[n(-343, "CQRE", -268) + e(-298, -354, -425, "BV#i", -315)][t(751, 830, 806, 831, "rWdi") + i(118, 105, 41, "(D5p")];
  }
  [he(925, 911, "qdh9") + Ot(1208, 1330, 1282, 1287, "^!O%") + dt(-713, -704, -785, "$ttW", -668)]() {
    function i(r, a, s, c, d) {
      return he(s - -1377, a - 271, a);
    }
    function t(r, a, s, c, d) {
      return dt(r - 377, a - 318, s - 399, a, c - 571);
    }
    function e(r, a, s, c, d) {
      return He(r - 491, c, s - 381, a - 761);
    }
    function n(r, a, s, c, d) {
      return me(r - 166, a - 161, s - 204, r, s - -1313);
    }
    function o(r, a, s, c, d) {
      return he(a - -319, a - 177, s);
    }
    try {
      if (o(652, 605, "K1sN", 563, 485) !== o(609, 626, "PLEZ", 543, 514)) {
        if (!this[i(-323, "#*F@", -412, -348, -480) + "se"]) {
          if (t(0, "ogiG", 13, 19, 27) !== i(-335, "dKYu", -396, -518, -387)) return;
          throw new zi(i(-432, "(C1s", -316, -214, -407) + e(137, 92, -28, "BV#i", -20) + o(564, 659, "qE@7", 733, 618) + i(-336, "CQRE", -392, -310, -377) + ".");
        }
        if (!this[i(-435, "rWdi", -454, -483, -367) + e(224, 132, 233, "qCp9", 217) + "d"][n("qCp9", -384, -379, -369, -385) + e(240, 130, 227, "3p5C", 226) + i(-351, "lov(", -271, -163, -326) + "ed"]())
          if (e(151, 93, -30, "PLEZ", 141) !== o(867, 830, "rWdi", 836, 847)) this[t(5, "qCp9", -50, -73, -135) + "se"] = void (7998 + 3265 * 3 + -1 * 17793), _0x27c56e[t(-27, "Md7m", -209, -99, -128)](_0x2c8731);
          else throw new zi(n("flwc", -131, -196, -226, -233) + t(-61, "3%vU", 69, -4, -34) + i(-312, "sL4F", -261, -299, -378) + n("g5e]", -180, -211, -227, -324) + ".");
        this[n("3p5C", -440, -373, -293, -354) + o(645, 603, "flwc", 701, 608)] = new xs(Xl(this[t(-161, "ogiG", -10, -121, -232) + "se"], this[n("sL4F", -269, -243, -241, -224) + n("flwc", -310, -307, -216, -278)]())), this[n("Lb$P", -533, -410, -527, -434) + o(696, 707, "ogiG", 785, 707) + "s"](this[n("sL4F", -179, -218, -276, -228) + i(-155, "6iLe", -240, -300, -343)][o(896, 834, "bmbR", 810, 805) + "s"]), this[t(60, "(D5p", 75, 91, 30) + o(667, 782, "s2!7", 844, 761) + e(115, 88, 6, "(D5p", 62)](this[e(235, 268, 166, "X^hD", 281) + e(190, 225, 233, "I4tm", 272)][n("dKYu", -246, -333, -269, -266) + o(646, 674, "qdh9", 595, 599)]);
      } else throw new _0xc19f54(o(670, 700, "6iLe", 693, 819) + e(67, 146, 127, "6mDo", 63) + t(47, "8Sdc", 14, -30, 93) + i(-477, "$ttW", -431, -554, -423) + ".");
    } catch (r) {
      if (e(213, 99, 170, "Wlvd") !== o(589, 712, "]$^a")) return this[i(-352, "80qI", -235) + e(26, 145, 65, "!c@C") + e(159, 227, 274, "Md7m") + o(679, 624, "@G^d")][0];
      {
        if (r instanceof zi) o(652, 596, "!c@C") === n("g5e]", -320, -264) ? _0xc9b5a0[i(-226, "@G^d", -292)]() : r[o(782, 799, "sL4F")]();
        else if (r instanceof Error)
          if (t(-113, "!c@C", -116, -105) === e(81, 204, 223, ")%n2")) console[t(18, "3%vU", -124, -10)](r);
          else return _0x5d327b[n("@G^d", -223, -231) + e(191, 178, 203, ")%n2")][n("Md7m", -177, -212) + n("g5e]", -150, -214)];
        const a = {};
        a[t(11, "6iLe", 99, 117) + e(264, 175, 182, "@G^d")] = !1, a[e(89, 107, -13, "PLEZ") + "s"] = [], a[o(632, 660, "PLEZ") + i(-344, "BV#i", -333)] = [], a[i(-222, "3m6d", -225) + o(742, 715, "3%vU") + e(97, 151, 41, "6iLe")] = void (2 * 4486 + 29 * -123 + -5405), a[n("D@1H", -349, -366)] = function() {
        }, a[n("NPaV", -209, -270) + e(126, 157, 134, "ogiG")] = "", this[n("qdh9", -352, -430) + o(665, 665, "#*F@")] = new xs(a);
      }
    }
  }
  [He(-655, "rWdi", -644, -685) + he(1006, 1103, "3%vU") + he(1105, 1031, "!c@C") + "t"]() {
    function i(t, e, n, o, r) {
      return Ot(t - 397, e - 9, n - -625, o - 164, e);
    }
    return this[i(543, "(D5p", 638, 627) + i(598, "D@1H", 650, 545)];
  }
  [He(-522, "U(Rj", -515, -510) + he(962, 1049, "bmbR") + He(-350, "dKYu", -566, -452)]() {
    var r;
    function i(a, s, c, d, g) {
      return he(g - -1657, s - 250, c);
    }
    if (!this[o(599, "giHR", 628, 573, 578) + "se"]) {
      if (o(727, "80qI", 757, 700, 670) === e(691, 643, "ogiG")) return;
      {
        _0x5ebf8e instanceof _0x3659e8 ? _0x54c517[t(-630, "$ttW", -622, -644)]() : _0x55c93c instanceof _0x51dd30 && _0x45076[o(605, "D@1H", 582, 644, 536)](_0x305875);
        const a = {};
        a[e(595, 644, "U(Rj") + e(700, 665, "qCp9")] = !1, a[e(807, 684, "s2!7") + "s"] = [], a[e(874, 755, "(D5p") + e(818, 707, "rWdi")] = [], a[i(-444, -420, "(D5p", -562, -516) + o(417, "(C1s", 438, 533, 439) + i(-724, -671, "flwc", -707, -660)] = void (-7970 + -67 * 5 + -1661 * -5), a[i(-423, -502, "bmbR", -624, -512)] = function() {
        }, a[o(380, "^!O%", 460, 546, 445) + o(500, "@G^d", 472, 433, 544)] = "", this[o(606, "(C1s", 522, 492, 534) + o(579, "lov(", 633, 597, 655)] = new _0x1bf87e(a);
      }
    }
    function t(a, s, c, d, g) {
      return dt(a - 456, s - 5, c - 461, s, d - 31);
    }
    function e(a, s, c, d, g) {
      return he(s - -367, s - 385, c);
    }
    function n(a, s, c, d, g) {
      return Ot(a - 147, s - 417, s - -1295, d - 233, d);
    }
    function o(a, s, c, d, g) {
      return me(a - 192, s - 390, c - 346, s, g - -448);
    }
    try {
      if (e(531, 561, "]$^a", 673, 508) === o(455, "^!O%", 473, 426, 438)) {
        const a = JSON[n(-40, -94, -166, "^!O%", -7)](this[i(-580, -678, "xX1y", -787, -703) + "se"]);
        return (r = a == null ? void 0 : a[i(-760, -585, "I4tm", -641, -668) + o(426, "3p5C", 653, 491, 543)]) == null ? void 0 : r[e(660, 628, "#*F@", 588, 598) + o(366, "rWdi", 589, 565, 476)];
      } else throw new _0x96057e(t(-402, "3p5C", -405, -499, -414) + i(-617, -504, "YQHK", -705, -610) + t(-519, "]$^a", -577, -480, -452) + n(-109, -99, -46, "6mDo", -108) + ".");
    } catch (a) {
      if (t(-589, "K1sN", -637, -527) === i(-550, -612, "#*F@", -450, -566)) _0x345a0d[t(-455, "BV#i", -572, -543) + "ch"]((s) => _0xc4bc68[t(-615, "!DP7", -436, -500)](s));
      else {
        if (a instanceof Error)
          if (n(-169, -167, -128, "Lb$P") !== t(-496, "]$^a", -696, -592)) {
            _0x2fec4f instanceof _0x188221 && _0x10304c[n(113, 4, -67, "#*F@") + o(566, "j#kH", 673, 535, 608)](_0x3e7cdc);
            return;
          } else xe[i(-521, -597, "NPaV", -526, -563) + n(-159, -52, 20, "bmbR")](a);
        return;
      }
    }
  }
}
const di = class di extends $l {
  static getInstance() {
    if (!this._instance) {
      const i = new ql();
      this._instance = new di(i);
    }
    return this._instance;
  }
};
T(di, "_instance");
let Eo = di;
const Lc = 0 + 0.75, e1 = -3 * 503 + 4480 + -1 * 2969, t1 = 773 * -4 + 13 * -381 + 8645, n1 = -6662 + -1013 * -1 + 5649, x1 = "dot-auto-capture-video", vr = (x, i) => {
  const t = {};
  t.detail = i, document.dispatchEvent(new CustomEvent(x, t));
}, ui = class ui {
  constructor() {
    T(this, "lastDetails", {});
    T(this, "delayedTime", 5080 + 1 * 1225 + -6305);
  }
  static getInstance() {
    return !this._instance && (this._instance = new ui()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 6517 + -6 * 566 + -3121;
  }
  isDetailChanged(i, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[i]) ? (this.lastDetails[i] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(i, t) {
    this.isDetailChanged(i, t) && vr(i, t);
  }
  dispatchDelayedCustomEventOnChange(i, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(i, t), this.delayedTime = n);
  }
};
T(ui, "_instance");
let Wn = ui;
const _n = Wn.getInstance(), Dc = (x, i, t = t1) => {
  const e = {};
  e.instructionCode = i;
  const n = e;
  _n.dispatchDelayedCustomEventOnChange(x, n, t);
}, i1 = (x, i) => {
  _n.dispatchCustomEventOnChange(x, i);
}, o1 = (x, i) => {
  const t = {};
  t.size = i;
  const e = t;
  _n.dispatchCustomEventOnChange(x, e);
}, r1 = (x, i, t) => {
  const e = i.confidence < t ? void 0 : i, n = {};
  n.detectedObject = e;
  const o = n;
  _n.dispatchCustomEventOnChange(x, o);
}, a1 = (x, { detection: i, fps: t, image: e, invalidValidators: n, isInCandidateSelection: o }) => {
  const r = {};
  r.image = e, r.data = {}, r.data.detection = i, r.data.fps = t, r.data.isInCandidateSelection = o, r.data.invalidValidators = n, r.data.imageResolution = {}, r.data.imageResolution.width = e.width, r.data.imageResolution.height = e.height;
  const a = r;
  _n.dispatchCustomEventOnChange(x, a);
};
function s1(x) {
  const i = {};
  i.instruction = x;
  const t = i;
  vr(So.REQUEST_CAPTURE, t);
}
const Lo = (x, i) => {
  vr(x, i);
}, c1 = (x, i) => {
  const { cameraResolution: t, shouldCameraMirror: e } = i;
  ae(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, i1(x, n);
  }, [t, e, x]);
}, qx = (x) => x.length < 1 ? -2 * -747 + -8400 + -6 * -1151 : x.reduce((t, e) => t + e, 4899 + 25 * 200 + -1 * 9899) / x.length, $0 = (x) => Number.parseFloat(x.toFixed(3 * -2591 + 2122 * -3 + 2357 * 6)), g1 = (x) => {
  const i = x.getContext("2d");
  i && i.clearRect(-5800 + -3268 * 1 + 9068, 2 * 1480 + 427 * 23 + -12781, i.canvas.width, i.canvas.height);
}, Wi = (x, i) => Math.min(x, i), Nc = ({ height: x, width: i }, t) => {
  const e = Wi(i, x) * t, n = (i - e) / (-1 * 871 + -2507 + 3380), o = (x - e) / (4 * 1167 + -8929 * -1 + -13595), r = {};
  return r.shiftX = n, r.shiftY = o, r.width = e, r.height = e, r;
}, d1 = (x, i) => {
  const { height: t, shiftX: e, shiftY: n, width: o } = Nc(x, i), r = {};
  return r.shiftX = e / x.width, r.shiftY = n / x.height, r.width = o / x.width, r.height = t / x.height, r;
}, u1 = ({ height: x, width: i }) => {
  const t = Wi(i, x), e = t / (46 * 62 + 3983 + -7 * 976) * (2909 + -2558 * -3 + -10579);
  if (i > x) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const n = {};
  return n.width = t, n.height = e, n;
}, l1 = (x, i) => {
  const t = Wi(i.width, i.height);
  return $0(x * t);
}, I1 = ({ height: x, width: i }) => {
  const t = {};
  return t.height = x, t.width = i, Nc(t, Lc);
}, f1 = (x) => d1(x, Lc), C1 = (x, i) => l1(x, i) * e1, p1 = "@innovatrics/dot-common-auto-capture", h1 = "6.2.1", m1 = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, b1 = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, A1 = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, y1 = {
  name: p1,
  private: !0,
  version: h1,
  scripts: m1,
  dependencies: b1,
  devDependencies: A1
}, Fc = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), is = () => {
  const x = /Android/i.test(navigator.userAgent), i = /Firefox/i.test(navigator.userAgent);
  return x && i;
}, v1 = () => {
  const x = navigator.userAgent.includes("Chrome"), i = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return x && i ? !1 : i;
}, Do = (x) => new Promise((i) => {
  setTimeout(i, x);
}), Yc = (x) => JSON.parse(JSON.stringify(x, (i, t) => typeof t == "number" ? $0(t) : t)), jc = () => y1.version, Mc = (x) => new URL(x).hostname.replace("www.", ""), W1 = () => Mc(window.location.href) === "localhost", Ix = (x) => Object.entries(x).map(([i, t]) => encodeURIComponent(i) + "=" + encodeURIComponent(t)).join("&"), S1 = (x, i) => JSON.stringify(x) === JSON.stringify(i) ? i : x;
function w1(x, i) {
  let t;
  return (...e) => {
    const n = () => {
      clearTimeout(t), t = void 0, x(...e);
    };
    t === void (-9868 + 1 * -6663 + -16531 * -1) && (t = setTimeout(n, i));
  };
}
const B1 = (x) => x === Bc.CONTROL ? !Fc() : !0, G1 = (x, i) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: o } = z0(), [r, a] = De(), s = Ue(() => {
    const d = o && i && i.isStreaming && i.getCameraSettings().facingMode;
    return d ? r ?? d === "user" : r ?? B1(x);
  }, [i, r, x, o]);
  ae(() => {
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
        case Xi.CONTINUE_DETECTION:
          d();
          break;
        case Xi.TOGGLE_MIRROR:
          g();
          break;
        case Xi.SWITCH_CAMERA:
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
async function _c() {
  return navigator.mediaDevices.enumerateDevices();
}
async function $i() {
  return (await _c()).filter((i) => i.kind === "videoinput");
}
function eo(x) {
  x.getTracks().forEach((t) => t.stop());
}
function os(x) {
  return x.getVideoTracks()[101 * -79 + -4385 + -11 * -1124];
}
const Zx = {};
Zx.width = 1920, Zx.height = 1080, Zx.facingMode = br.FRONT;
const k1 = Zx;
var ut;
class Xc {
  constructor({ defaultVideoConstrains: i = k1, minCameraShorterSide: t = Vl } = {}) {
    T(this, "options");
    T(this, "availableCameraProperties", []);
    ie(this, ut, null);
    const e = {};
    e.defaultVideoConstrains = i, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return L(this, ut);
  }
  get videoTrack() {
    return L(this, ut) ? os(L(this, ut)) : void (-8536 + 388 * 22);
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
    is() && await Do(38 * 35 + 277 * -17 + 3829), te(this, ut, await navigator.mediaDevices.getUserMedia(i)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const i = await $i();
    if (i.length <= 3 * -1471 + -8543 + 12957) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = i.findIndex((a) => a.deviceId === e.deviceId), o = i[n + (3959 + 808 * -6 + -10 * -89)] ?? i[-3506 * -2 + 3 * -809 + -131 * 35], r = this.getConstraints(t, o);
    this.close(), await this.open(r);
  }
  close() {
    L(this, ut) && (eo(L(this, ut)), te(this, ut, null));
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
    const i = this.getSettings(), t = await _c(), e = t.find((n) => n.deviceId === i.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(i) {
    return i === br.FRONT ? void (8159 + -359 * 7 + -5646) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return Fc() ? (await $i()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (-1 * 5873 + -5455 * 1 + 11328);
  }
  async collectAvailableCamerasInfo() {
    const i = await $i();
    for (const t of i) {
      is() && await Do(-1 * -3099 + -2281 * -2 + 1 * -7211);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const o = await navigator.mediaDevices.getUserMedia(n), r = os(o);
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
    e.deviceId = t ? { exact: t.deviceId } : void (-45 * 103 + -9176 + 13811);
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
class O1 {
  constructor(i, t) {
    this.videoHandler = i, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(i = {}) {
    await Xc.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(i.facingMode), e = this.cameraHandler.getConstraints(i, t);
    await this.cameraHandler.open(e), v1() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
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
    return e.drawImage(this.videoHandler.videoElement, 0, 1 * 5919 + -3964 + -1955), { image: t, timestamp: Date.now() };
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
class H1 {
  constructor(i) {
    ie(this, Zt);
    te(this, Zt, i);
  }
  get videoElement() {
    return L(this, Zt);
  }
  async play(i) {
    L(this, Zt).srcObject = i, await L(this, Zt).play();
  }
  stop() {
    L(this, Zt).srcObject = null;
  }
  hasSrcObject() {
    return !!L(this, Zt).srcObject;
  }
}
Zt = new WeakMap();
function Z1(x) {
  const i = ke(null), t = ke(), { handleError: e, setIsCameraReady: n } = z0(), [o, r] = De(), a = ze((c) => {
    r((d) => S1(c, d));
  }, []);
  ae(() => ((async () => {
    if (!i.current) {
      e(new xe("Something went wrong during video initialization"));
      return;
    }
    const d = new H1(i.current), g = new Xc(), C = new O1(d, g);
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
function R1(x, i) {
  ae(() => {
    if (!x.current) return;
    const t = new ResizeObserver((e) => {
      const [n] = e;
      o1(i, n.contentRect);
    });
    return t.observe(x.current), () => {
      t.disconnect();
    };
  }, [x, i]);
}
const K1 = () => "prod".toLowerCase() === "dev";
class Sn extends Array {
  constructor(t) {
    super();
    T(this, "size");
    this.size = t;
  }
  pushFixed(...t) {
    if (t.length > this.size) {
      const e = t.slice(-this.size);
      this.push(...e);
      return;
    }
    this.length === this.size && this.splice(-790 * -10 + -1 * -4921 + -1 * 12821, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-2863 + 8 * 210 + 1183);
  }
}
const P1 = (x, i, t = Dl) => new Promise((e) => {
  x.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, i);
}), V1 = async (x) => P1(x, -1 * -5773 + 1173 + -6856), T1 = (x, i) => {
  const t = document.createElement("canvas");
  t.width = i.width, t.height = i.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(x, i.shiftX, i.shiftY, i.width, i.height, -941 * -2 + 7335 + -9217, 8599 * -1 + -5578 + -14177 * -1, t.width, t.height), t;
}, E1 = (x) => {
  const i = x.getContext("2d");
  if (!i) throw new Error("getImageDataForSam ctx error");
  const { data: t } = i.getImageData(-1 * -5097 + 5552 + -23 * 463, -46 * 181 + -1 * -9783 + 31 * -47, x.width, x.height);
  return t;
}, Jc = (x, i, t, e) => {
  const n = x.getContext("2d");
  n && (n.beginPath(), e ? (n.fillStyle = t, n.fillRect(i.topLeft.x, i.topLeft.y, i.width, i.height)) : (n.strokeStyle = t, n.rect(i.topLeft.x, i.topLeft.y, i.width, i.height)), n.stroke());
}, to = (x, i, t) => {
  const { height: e, shiftX: n, shiftY: o, width: r } = i, a = {};
  a.x = n, a.y = o;
  const s = {};
  s.topLeft = a, s.width = r, s.height = e, s.color = t, Jc(x, s, t);
}, bn = (x, i, t, e = -6527 + -8627 * 1 + -1 * -15154) => {
  const n = x.getContext("2d");
  n && (n.fillStyle = t, n.fillRect(i.x + e, i.y + e, -1 * 9527 + 7791 + 1743, 3962 + 113 * -35), n.beginPath());
}, L1 = (x, i) => {
  const { height: t, shiftX: e, shiftY: n, width: o } = i;
  return !(x.x < e || x.x > e + o || x.y < n || x.y > n + t);
}, D1 = (x, i) => Object.values(x).every((t) => L1(t, i));
function $x(x) {
  const { height: i, width: t } = u1(x), e = (x.width - t) / (-1746 + -6645 * 1 + 1 * 8393), n = (x.height - i) / (-6 * 803 + 1 * -8458 + -6639 * -2), o = {};
  return o.shiftX = e, o.shiftY = n, o.width = t, o.height = i, o;
}
function Qc(x, i, t) {
  const { height: e, width: n } = t, o = Wi(x.width, x.height), r = n - o * i * (-3851 * 1 + 9343 + 5490 * -1), a = e - o * i * 2, s = (x.width - r) / (-8791 + -4387 * 1 + 1318 * 10), c = (x.height - a) / (-43 * -211 + -9007 + -64 * 1), d = {};
  return d.shiftX = s, d.shiftY = c, d.width = r, d.height = a, d;
}
function H0(x, i) {
  const { shiftX: t, shiftY: e } = i, n = {};
  return n.x = x.x + t, n.y = x.y + e, n;
}
function N1(x) {
  return $0(Math.abs(x));
}
const F1 = () => {
  const [x, i] = De(null), t = ke(new Sn(-4158 + -181 * -23));
  function e(o) {
    const { z: r } = o.accelerationIncludingGravity || {};
    if (!r) return;
    t.current.pushFixed(N1(r));
    const a = $0(qx(t.current)), s = {};
    s.z = a, i(s);
  }
  ae(() => (window.addEventListener("devicemotion", w1(e, Fl), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const n = {};
  return n.acceleration = x, n;
}, Uc = (x, i) => {
  const t = ke(i);
  ae(() => {
    t.current = i;
  }, [i]), ae(() => {
    const e = (n) => t.current(n);
    return document.addEventListener(x, e), () => {
      document.removeEventListener(x, e);
    };
  }, [x]);
};
var Y1 = Symbol.for("preact-signals");
function Wr() {
  if (V0 > -9279 + 1966 * 4 + -6 * -236)
    V0--;
  else {
    for (var x, i = !1; void (628 + 3 * 531 + -2221) !== An; ) {
      var t = An;
      for (An = void (2131 * 1 + -6974 + -29 * -167), No++; void (-3274 * -2 + -540 * 2 + -5468) !== t; ) {
        var e = t.o;
        if (t.o = void (-9824 + 116 * -46 + 7580 * 2), t.f &= -(1266 + -11 * -558 + -7401), !(-9922 + 1 * 9930 & t.f) && $c(t)) try {
          t.c();
        } catch (n) {
          !i && (x = n, i = !0);
        }
        t = e;
      }
    }
    if (No = -1006 * 3 + -1 * 9767 + -1 * -12785, V0--, i) throw x;
  }
}
var re = void 0, An = void (-5 * 1907 + -482 * -16 + 1 * 1823), V0 = -3363 + 1121 * 3, No = -125 * -31 + -1 * 688 + 1 * -3187, ei = 2189 + -21 * 23 + -1706;
function zc(x) {
  if (void (4 * -507 + 8442 + -6414) !== re) {
    var i = x.n;
    if (void (74 * -105 + -2892 + 10662) === i || i.t !== re)
      return i = { i: 0, S: x, p: re.s, n: void (-6505 + -1 * -6505), t: re, e: void (6 + 7403 * 1 + 31 * -239), x: void (-1690 + 22 * -7 + 1844), r: i }, void (2341 * 1 + 203 + -2544) !== re.s && (re.s.n = i), re.s = i, x.n = i, -1996 + 13 * 156 & re.f && x.S(i), i;
    if (-(-1147 * -1 + 3596 + -1 * 4742) === i.i)
      return i.i = 26 * 139 + -523 * 6 + -476, void (3397 + 12 * -73 + -2521) !== i.n && (i.n.p = i.p, void (-5 * -1889 + -2454 + -6991 * 1) !== i.p && (i.p.n = i.n), i.p = re.s, i.n = void 0, re.s.n = i, re.s = i), i;
  }
}
function we(x) {
  this.v = x, this.i = 0, this.n = void (61 * 67 + -8804 + 1 * 4717), this.t = void (5241 + -47 * -19 + -6134);
}
we.prototype.brand = Y1, we.prototype.h = function() {
  return !(1141 + -2 * -2168 + 1 * -5477);
}, we.prototype.S = function(x) {
  this.t !== x && void (15608 + -15608 * 1) === x.e && (x.x = this.t, void (1130 + 69 * 25 + -2855) !== this.t && (this.t.e = x), this.t = x);
}, we.prototype.U = function(x) {
  if (void (3775 + -25 * 151) !== this.t) {
    var i = x.e, t = x.x;
    void (2 * 4569 + -4211 + -4927) !== i && (i.x = t, x.e = void (5142 * 1 + -785 + -4357)), void (-7122 + -83 * -103 + -1 * 1427) !== t && (t.e = i, x.x = void (9227 * -1 + -140 + 9367)), x === this.t && (this.t = t);
  }
}, we.prototype.subscribe = function(x) {
  var i = this;
  return wr(function() {
    var t = i.value, e = re;
    re = void 0;
    try {
      x(t);
    } finally {
      re = e;
    }
  });
}, we.prototype.valueOf = function() {
  return this.value;
}, we.prototype.toString = function() {
  return this.value + "";
}, we.prototype.toJSON = function() {
  return this.value;
}, we.prototype.peek = function() {
  var x = re;
  re = void (-1 * -7321 + 724 + -8045);
  try {
    return this.value;
  } finally {
    re = x;
  }
}, Object.defineProperty(we.prototype, "value", { get: function() {
  var x = zc(this);
  return void (-157 * 14 + -459 * 10 + 2 * 3394) !== x && (x.i = this.i), this.v;
}, set: function(x) {
  if (x !== this.v) {
    if (No > 1649 * 4 + 8199 + 2939 * -5) throw new Error("Cycle detected");
    this.v = x, this.i++, ei++, V0++;
    try {
      for (var i = this.t; void (-1075 + 215 * 5) !== i; i = i.x) i.t.N();
    } finally {
      Wr();
    }
  }
} });
function qc(x) {
  return new we(x);
}
function $c(x) {
  for (var i = x.s; void (-1664 + 12 * 43 + 14 * 82) !== i; i = i.n) if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return !(3077 * -2 + -8558 * 1 + 4904 * 3);
  return !(-15 * 35 + -4 * -2332 + -978 * 9);
}
function eg(x) {
  for (var i = x.s; void (-1077 * -5 + 1276 * -5 + -995 * -1) !== i; i = i.n) {
    var t = i.S.n;
    if (void (28 * -111 + -50 * -73 + -542) !== t && (i.r = t), i.S.n = i, i.i = -(4 * 571 + -673 + -70 * 23), void (-365 * -1 + -9020 + 8655) === i.n) {
      x.s = i;
      break;
    }
  }
}
function tg(x) {
  for (var i = x.s, t = void (-3529 + 10 * 116 + -2369 * -1); i !== void 0; ) {
    var e = i.p;
    -(-53 * 186 + 8445 + 1414) === i.i ? (i.S.U(i), void (-1 * 4983 + 4640 * -1 + -9623 * -1) !== e && (e.n = i.n), void (-890 * -11 + -1 * -929 + -1 * 10719) !== i.n && (i.n.p = e)) : t = i, i.S.n = i.r, i.r !== void 0 && (i.r = void (-219 * -31 + 1 * -7671 + -7 * -126)), i = e;
  }
  x.s = t;
}
function R0(x) {
  we.call(this, void (-516 + 1 * -8844 + 78 * 120)), this.x = x, this.s = void (-3109 + -274 * 22 + 9137), this.g = ei - 1, this.f = -3 * 987 + 4373 * 1 + 88 * -16;
}
(R0.prototype = new we()).h = function() {
  if (this.f &= -(-3875 + 11 * 61 + -3207 * -1), -13378 + -1 * -13379 & this.f) return !(8465 + 23 * -368);
  if (-2 * -2381 + -1 * 5936 + 1206 == (36 & this.f)) return !(3418 * 2 + -7078 + -121 * -2);
  if (this.f &= -(4432 + -223 * -34 + -12009), this.g === ei) return !(-592 * 12 + 8713 * -1 + -1 * -15817);
  if (this.g = ei, this.f |= -21 * -193 + -7484 + 3432, this.i > 0 && !$c(this)) return this.f &= -(4 * 701 + -6957 + -277 * -15), !(4625 + -20 * 478 + 15 * 329);
  var x = re;
  try {
    eg(this), re = this;
    var i = this.x();
    (1 * 6978 + 7679 + 11 * -1331 & this.f || this.v !== i || -4 * 1373 + 4314 * 1 + 1178 === this.i) && (this.v = i, this.f &= -(-1 * -9161 + -1 * 2818 + -6326 * 1), this.i++);
  } catch (t) {
    this.v = t, this.f |= -3 * 617 + -1 * 6932 + -2933 * -3, this.i++;
  }
  return re = x, tg(this), this.f &= -(7017 + 1403 * -5), !(-3951 + 1 * 877 + -1 * -3074);
}, R0.prototype.S = function(x) {
  if (void (-2957 * -1 + 8190 + 11147 * -1) === this.t) {
    this.f |= 1351 * 5 + -247 * 1 + -1 * 6472;
    for (var i = this.s; void (3431 + 2 * -4565 + 5699) !== i; i = i.n) i.S.S(i);
  }
  we.prototype.S.call(this, x);
}, R0.prototype.U = function(x) {
  if (void (-33 + -4 * 955 + 3853) !== this.t && (we.prototype.U.call(this, x), void (-941 * 1 + 7388 * -1 + 1 * 8329) === this.t)) {
    this.f &= -33;
    for (var i = this.s; void (-33 * 298 + -3930 + 13764) !== i; i = i.n) i.S.U(i);
  }
}, R0.prototype.N = function() {
  if (!(-1 * 2049 + -1 * 4174 + -1 * -6225 & this.f)) {
    this.f |= 1320 * 7 + 1 * -3751 + -5483;
    for (var x = this.t; void (11060 + -1 * 11060) !== x; x = x.x) x.t.N();
  }
}, Object.defineProperty(R0.prototype, "value", { get: function() {
  if (-1693 + -403 * -19 + -89 * 67 & this.f) throw new Error("Cycle detected");
  var x = zc(this);
  if (this.h(), void (-8096 + 1 * 3134 + 6 * 827) !== x && (x.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function j1(x) {
  return new R0(x);
}
function ng(x) {
  var i = x.u;
  if (x.u = void (-1 * -6562 + 409 * 11 + -11061), typeof i == "function") {
    V0++;
    var t = re;
    re = void (-6526 + -26 * -251);
    try {
      i();
    } catch (e) {
      throw x.f &= -(1 * -460 + -58 * -61 + -3076), x.f |= 5549 + -8 * -718 + -11285, Sr(x), e;
    } finally {
      re = t, Wr();
    }
  }
}
function Sr(x) {
  for (var i = x.s; void (5760 * -1 + 1 * -8537 + 17 * 841) !== i; i = i.n) i.S.U(i);
  x.x = void 0, x.s = void (128 * -13 + -4985 + 1 * 6649), ng(x);
}
function M1(x) {
  if (re !== this) throw new Error("Out-of-order effect");
  tg(this), re = x, this.f &= -(-8169 + -107 * -59 + -1 * -1858), 5297 + -337 * 8 + -2593 & this.f && Sr(this), Wr();
}
function Cn(x) {
  this.x = x, this.u = void (25 * 211 + 1 * 9515 + -14790), this.s = void (-3249 + 615 * -6 + 6939 * 1), this.o = void (1 * -7234 + 4 * 758 + -1 * -4202), this.f = 77 * -9 + -29 * 7 + 928;
}
Cn.prototype.c = function() {
  var x = this.S();
  try {
    if (-2 * -2971 + 8939 * 1 + -14873 & this.f || void (-1 * 2372 + 6219 + 3847 * -1) === this.x) return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    x();
  }
}, Cn.prototype.S = function() {
  if (761 * 1 + -9873 + 9113 & this.f) throw new Error("Cycle detected");
  this.f |= -9307 + 459 * -7 + -1 * -12521, this.f &= -(-18 * -83 + 6398 + -7883), ng(this), eg(this), V0++;
  var x = re;
  return re = this, M1.bind(this, x);
}, Cn.prototype.N = function() {
  !(1 * 7e3 + 8476 + 1 * -15474 & this.f) && (this.f |= 6959 + 773 * -9, this.o = An, An = this);
}, Cn.prototype.d = function() {
  this.f |= 22 * -46 + 801 * -5 + 5025, 13519 + 9 * -1502 & this.f || Sr(this);
};
function wr(x) {
  var i = new Cn(x);
  try {
    i.c();
  } catch (t) {
    throw i.d(), t;
  }
  return i.d.bind(i);
}
var no;
function P0(x, i) {
  F[x] = i.bind(null, F[x] || function() {
  });
}
function fx(x) {
  no && no(), no = x && x.S();
}
function xg(x) {
  var i = this, t = x.data, e = T0(t);
  e.value = t;
  var n = Ue(function() {
    for (var o = i.__v; o = o.__; ) if (o.__c) {
      o.__c.__$f |= 1 * 1141 + -12 * -139 + -2805;
      break;
    }
    return i.__$u.c = function() {
      var r;
      !ks(n.peek()) && 6901 + 7 * 445 + -17 * 589 === ((r = i.base) == null ? void (55 * 83 + 8492 + 1 * -13057) : r.nodeType) ? i.base.data = n.peek() : (i.__$f |= -6353 + -169 * 44 + 13790, i.setState({}));
    }, j1(function() {
      var r = e.value.value;
      return -6 * 1577 + 1 * -4069 + 13531 === r ? 5322 + 177 * -34 + 3 * 232 : !(-1 * 9187 + 5412 + -151 * -25) === r ? "" : r || "";
    });
  }, []);
  return n.value;
}
xg.displayName = "_st";
var Fo = {};
Fo.configurable = !(763 * -11 + 4280 + 4113), Fo.value = void (-7984 + -2 * -3496 + -62 * -16);
var Yo = {};
Yo.configurable = !(-587 * 11 + 1 * -8293 + 14750), Yo.value = xg;
var jo = {};
jo.configurable = !0, jo.get = function() {
  var x = {};
  return x.data = this, x;
};
var Mo = {};
Mo.configurable = !(3799 * 2 + -7847 + 249), Mo.value = 1;
var cn = {};
cn.constructor = Fo, cn.type = Yo, cn.props = jo, cn.__b = Mo, Object.defineProperties(we.prototype, cn), P0("__b", function(x, i) {
  if (typeof i.type == "string") {
    var t, e = i.props;
    for (var n in e) if (n !== "children") {
      var o = e[n];
      o instanceof we && (t || (i.__np = t = {}), t[n] = o, e[n] = o.peek());
    }
  }
  x(i);
}), P0("__r", function(x, i) {
  fx();
  var t, e = i.__c;
  e && (e.__$f &= -(-947 * 2 + 2675 + -779 * 1), void (7528 + -2 * 3764) === (t = e.__$u) && (e.__$u = t = function(n) {
    var o;
    return wr(function() {
      o = this;
    }), o.c = function() {
      e.__$f |= -143 * -59 + -2892 + -9 * 616, e.setState({});
    }, o;
  }())), fx(t), x(i);
}), P0("__e", function(x, i, t, e) {
  fx(), x(i, t, e);
}), P0("diffed", function(x, i) {
  fx();
  var t;
  if (typeof i.type == "string" && (t = i.__e)) {
    var e = i.__np, n = i.props;
    if (e) {
      var o = t.U;
      if (o) for (var r in o) {
        var a = o[r];
        void (1297 + 1 * -8188 + -2297 * -3) !== a && !(r in e) && (a.d(), o[r] = void (4985 + -3323 * -1 + 62 * -134));
      }
      else t.U = o = {};
      for (var s in e) {
        var c = o[s], d = e[s];
        void (6503 + 929 * -7) === c ? (c = _1(t, s, d, n), o[s] = c) : c.o(d, n);
      }
    }
  }
  x(i);
});
function _1(x, i, t, e) {
  var n = i in x && x.ownerSVGElement === void 0, o = qc(t);
  return { o: function(r, a) {
    o.value = r, e = a;
  }, d: wr(function() {
    var r = o.value.value;
    e[i] !== r && (e[i] = r, n ? x[i] = r : r ? x.setAttribute(i, r) : x.removeAttribute(i));
  }) };
}
P0("unmount", function(x, i) {
  if (typeof i.type == "string") {
    var t = i.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (2880 * -1 + -1683 + -13 * -351);
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
      a && (r.__$u = void 0, a.d());
    }
  }
  x(i);
}), P0("__h", function(x, i, t, e) {
  (e < -5157 * -1 + -3912 + -1242 || e === 9) && (i.__$f |= 2), x(i, t, e);
}), it.prototype.shouldComponentUpdate = function(x, i) {
  var t = this.__$u;
  if (!(t && void (-1067 + -3 * -1117 + 2 * -1142) !== t.s || -91 * 79 + -1698 * -5 + -1297 & this.__$f)) return !(685 * 1 + -3729 + -1 * -3044);
  if (-3 * -2045 + 4322 + -10454 & this.__$f) return !0;
  for (var e in i) return !(-6480 + -1 * 2783 + 9263);
  for (var n in x) if (n !== "__source" && x[n] !== this.props[n]) return !(21 * 101 + 2 * 4969 + -12059);
  for (var o in this.props) if (!(o in x)) return !(1 * 3671 + 5862 + -9533);
  return !(-227 * 34 + -6810 + 14529);
};
function T0(x) {
  return Ue(function() {
    return qc(x);
  }, []);
}
const X1 = async () => WebAssembly.validate(new Uint8Array([-2342 * 3 + 1541 + 1097 * 5, -5193 + 5 * 1058, 4075 * -2 + -3876 + -171 * -71, -3639 + -55 * -125 + -1 * 3127, -2861 * -3 + -2822 + -5760, 0, -129 * 46 + 915 + -5019 * -1, -14 * 557 + 1801 * -5 + 16803, 1, 6027 + 394 * -1 + -5628, -1 * -3137 + -802 + -389 * 6, -8593 + -5 * 1626 + 16819, 0, 3918 + 1613 * 2 + 3 * -2381, 4248 + -14 * -1 + -1 * 4139, -9990 + 9 * -820 + 17373, -3677 + -326 * 19 + -1 * -9873, -1963 + -3898 * 2 + 9760, -1384 * 7 + 695 + 8993 * 1, 3076 + 10 * 260 + -5666, -10 * 219 + -9646 + 11846, 1, -6893 * 1 + 4544 + -2357 * -1, 36 * 195 + 6224 + 301 * -44, -19 * 108 + 3793 * -2 + 9703, 1398 * 2 + 58 * 48 + -2790 * 2, -3251 * 2 + -6456 + 11 * 1201, 646 * -1 + 976 + -315, -11 * 454 + -107 * 69 + 12630, -4694 + -11 * -85 + -1 * -3857, 1827 + -2 * 908]));
function J1() {
  const [x] = window.crypto.getRandomValues(new Uint32Array(1));
  return x.toString(965 * 3 + -8518 * -1 + 29 * -393);
}
function Q1() {
  const x = sessionStorage.getItem("dot-user-id");
  if (x) return x;
  const i = J1();
  return sessionStorage.setItem("dot-user-id", i), i;
}
function U1(x, i) {
  return i ? i === "user" ? "Front Camera" : "Back Camera" : x;
}
const _o = {};
_o.label = ">1m", _o.time = 60;
const Xo = {};
Xo.label = ">45", Xo.time = 45;
const Jo = {};
Jo.label = ">30", Jo.time = 30;
function z1(x, i = [_o, Xo, Jo]) {
  const t = i.sort((e, n) => n.time - e.time);
  for (const e of t)
    if (x > e.time) return e.label;
  return "" + x;
}
const q1 = (x) => Math.round(x / 500) * 500 / (-2195 * -1 + -84 * -110 + -1 * 10435), rs = (x) => x ? x <= 6730 + -409 * -4 + 5 * -1673 ? Math.round(x * (-183 + 1 * -1148 + 1351)) / (-4773 + -19 * 389 + 12184) : Math.round(x / (2 * -2469 + -23 * -223 + -1 * 141)) * (3373 * -1 + -889 + 4312) : 1 * 5558 + -288 * -28 + -13622, $1 = (x) => Math.round(x * (2 * -2643 + -1 * -5024 + 264)) / 2;
async function ig() {
  return await X1() ? Ja.SIMD : Ja.NO_SIMD;
}
var Gn, li;
class og {
  constructor(i) {
    ie(this, Gn, !0);
    ie(this, li, Date.now());
    T(this, "analytics");
    T(this, "samVersion");
    T(this, "sessionToken");
    T(this, "onDetectionCallback");
    T(this, "onCaptureCallback");
    T(this, "createProtoMessage");
    T(this, "fpsOfAllImages", new Sn(2325 * -3 + 353 * -4 + 8417));
    T(this, "cameraService");
    T(this, "imageProcessor");
    this.cameraService = i.cameraService, this.imageProcessor = i.imageProcessor, this.analytics = i.analytics, this.samVersion = i.samVersion, this.sessionToken = i.sessionToken, this.createProtoMessage = i.createProtoMessage, this.onDetectionCallback = i.onDetectionCallback, this.onCaptureCallback = i.onCaptureCallback;
  }
  async run() {
    for (; L(this, Gn); )
      await this.iterate();
    return this;
  }
  stop() {
    te(this, Gn, !1);
  }
  async trackCaptureProcess(i, t) {
    var r;
    const e = Date.now(), n = qx(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height, (r = this.analytics) == null || r.trackCaptureProcess({ detection: i, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: n, captureProcessDurationInMs: e - L(this, li), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await ig() });
  }
  onDetection(i, t) {
    this.onDetectionCallback({ ...i, samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: i, canvasImage: t, detection: e }) {
    const n = {};
    n.width = t.width, n.height = t.height;
    const o = n, r = await V1(t), a = await this.cameraService.getCameraProperties(), s = { ...a, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp() }, c = {};
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
    await Do(Math.max(za.max - i, za.min));
  }
}
Gn = new WeakMap(), li = new WeakMap();
class eI extends og {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, instructionCodeMap: n, ...o }) {
    super(o);
    T(this, "candidateSelectionTime", -7165 + 760 * -8 + 13245);
    T(this, "candidatesSelectionFramesCount", 910 * 8 + -8986 + 1706);
    T(this, "isInCandidateSelection", !1);
    T(this, "lastImage", null);
    T(this, "bestImage", null);
    T(this, "candidateSelectionImages", []);
    T(this, "fallbackInstruction");
    T(this, "instructionCodeMap");
    T(this, "checkToInstructionCodeMap");
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
    this.candidateSelectionTime === -567 * -8 + -9862 + 2663 * 2 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= Qi.minFrames ? t > Qi.minDuration : t > Qi.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages }), this.imageProcessor.reset();
    else throw new xe("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const n = this.getDetectionEndTime(e.timestamp), o = $0((1 * 7523 + 10 * -439 + -2133) / n);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = e.image.width, r.height = e.image.height;
    const a = r, s = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), c = {};
    c.isNewDetectionValid = t.isValid, c.newInvalidInstruction = s[-121 * -16 + -7926 * 1 + 1198 * 5];
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
var jt, r0;
class tI extends og {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, ...n }) {
    super(n);
    ie(this, jt, void (-4805 * -1 + -83 * 37 + -1734));
    ie(this, r0);
    T(this, "fallbackInstruction");
    T(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, n;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Bx).includes((n = t.detail) == null ? void 0 : n["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    te(this, r0, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && te(this, jt, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(So.REQUEST_CAPTURE, L(this, r0));
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
    return L(this, jt) ? L(this, jt) === Bx.FIRST_FRAME ? !0 : L(this, jt) === Bx.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
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
    n.canvasImage = t, n.detection = e, n.candidateSelectionImages = [], await this.onCapture(n), te(this, jt, void (-15164 + -3791 * -4)), this.imageProcessor.reset();
  }
  getDetectionDetails(t, e) {
    const n = this.getDetectionEndTime(t.timestamp), o = $0((1276 + 6 * -46) / n);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = t.image.width, r.height = t.image.height;
    const a = r, s = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), c = this.getInstructionCode(s[-1007 * 2 + -4946 + -174 * -40]), d = {};
    d.detection = e.detection, d.instructionCode = c, d.invalidValidators = s, d.isInCandidateSelection = !1;
    const g = {};
    return g.processedImage = d, g.detectionTime = n, g.fps = o, g.resolution = a, g;
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), L(this, r0) && document.removeEventListener(So.REQUEST_CAPTURE, L(this, r0));
  }
}
jt = new WeakMap(), r0 = new WeakMap();
function nI({ captureMode: x, ...i }) {
  return x === Lx.AUTO_CAPTURE ? new eI(i) : new tI(i);
}
function xI({ cameraResolution: x, cameraService: i, customEvent: t }) {
  const { shouldCameraMirror: e } = G1(t.CONTROL, i), n = {};
  n.cameraResolution = x, n.shouldCameraMirror = e, c1(t.CAMERA_PROPS_CHANGED, n), ae(() => () => {
    Wn.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = e, o;
}
function iI({ cameraFacing: x, captureMode: i, checkToInstructionCodeMap: t, controller: e, createProtoMessage: n, customEvent: o, fallbackInstruction: r, instructionCodeMap: a, onCapture: s, onDetection: c, sessionToken: d }) {
  const { appState: g, handleAppStateChange: C } = z0(), { sunfish: u } = q0(), { analytics: p } = Ar(), { cameraResolution: m, cameraService: A, onCameraResolutionChange: l, videoRef: W } = Z1(x), Z = {};
  Z.cameraResolution = m, Z.cameraService = A, Z.customEvent = o;
  const { shouldCameraMirror: M } = xI(Z), _ = T0(void (4771 + -4771 * 1)), X = ze((Q) => {
    C(yt.WAITING), s(Q);
  }, [s, C]), H = ze((Q, q) => {
    l(Q.resolution), _.value = Q, c(Q, q);
  }, [c, _, l]);
  ae(() => {
    A != null && A["isStreaming"] && (e != null && e["isDetectorInitialized"]) && u && C(yt.RUNNING);
  }, [A == null ? void 0 : A["isStreaming"], e == null ? void 0 : e["isDetectorInitialized"], C, u]), ae(() => {
    if (g !== yt.RUNNING) return;
    if (!A || !e) throw new xe("Cannot start detection");
    const Q = {};
    Q.captureMode = i, Q.analytics = p, Q.cameraService = A, Q.imageProcessor = e.imageProcessor, Q.fallbackInstruction = r, Q.instructionCodeMap = a, Q.checkToInstructionCodeMap = t, Q.sessionToken = d, Q.samVersion = e.samVersion, Q.createProtoMessage = n, Q.onCaptureCallback = X, Q.onDetectionCallback = H;
    const q = nI(Q);
    return e.runDetectionLoop(q), () => {
      e.stopDetectionLoop();
    };
  }, [g, e, A, X, H, d, _, p, n, a, t, r, i]);
  const z = {};
  return z.videoRef = W, z.cameraResolution = m, z.detectionDetails = _, z.shouldCameraMirror = M, z;
}
function rg({ callback: x, delay: i, skip: t = !1 }) {
  const [e, n] = De(!1), o = ke(x), r = ke(null);
  ae(() => {
    o.current = x;
  }, [x]);
  const a = ze(() => {
    r.current && (clearTimeout(r.current), r.current = null), n(!1);
  }, []), s = ze(() => {
    t || (a(), n(!0), r.current = setTimeout(() => {
      o.current(), n(!1);
    }, i));
  }, [i, a, t]);
  ae(() => {
    s();
  }, [i, a, s]);
  const c = {};
  return c.isActive = e, c.reset = s, c.clear = a, c;
}
function ag(x) {
  const i = ke([]);
  return ae(() => {
    i.current.forEach((t) => t()), i.current = [];
  }, [x]), (t) => {
    i.current.push(t);
  };
}
function oI(x, i) {
  if (!x) return i;
  const { detectionRecord: t, hashedDetectedImages: e } = x;
  i.hashedDetectedImages && (e == null || e.push(...i.hashedDetectedImages)), i.detectionRecord && (t == null || t.push(...i.detectionRecord));
  const n = { ...x };
  return n.hashedDetectedImages = e, n.detectionRecord = t, n;
}
function rI() {
  const x = T0(null);
  function i({ cameraProperties: e }) {
    x.value = oI(x.value, e);
  }
  const t = {};
  return t.cameraProperties = x, t.mergeCameraProperties = i, t;
}
const sg = jn(null), Br = () => {
  const x = h0(sg);
  if (!x)
    throw new Error("Missing provider for CameraOptionsContext");
  return x;
}, aI = ({
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
    cameraFacing: x ?? br.FRONT,
    captureMode: i ?? Lx.AUTO_CAPTURE,
    wasmDirectoryPath: r,
    licensePath: t,
    sessionToken: n,
    thresholds: {
      faceConfidence: (o == null ? void 0 : o.faceConfidence) ?? wl,
      minFaceSizeRatio: (o == null ? void 0 : o.minFaceSizeRatio) ?? Bl,
      maxFaceSizeRatio: (o == null ? void 0 : o.maxFaceSizeRatio) ?? Gl,
      sharpnessThreshold: (o == null ? void 0 : o.sharpnessThreshold) ?? Hl,
      brightnessLowThreshold: (o == null ? void 0 : o.brightnessLowThreshold) ?? Zl,
      brightnessHighThreshold: (o == null ? void 0 : o.brightnessHighThreshold) ?? Rl,
      outOfBoundsThreshold: (o == null ? void 0 : o.outOfBoundsThreshold) ?? kl,
      devicePitchAngleThreshold: (o == null ? void 0 : o.devicePitchAngleThreshold) ?? Kl,
      mouth: {
        confidence: ((a = o == null ? void 0 : o.mouth) == null ? void 0 : a.confidence) ?? Ol,
        status: {
          min: ((s = o == null ? void 0 : o.mouth) == null ? void 0 : s.status.min) ?? Qa.min,
          max: ((c = o == null ? void 0 : o.mouth) == null ? void 0 : c.status.max) ?? Qa.max
        }
      },
      leftEye: (o == null ? void 0 : o.leftEye) ?? {
        confidence: Ua
      },
      rightEye: (o == null ? void 0 : o.rightEye) ?? {
        confidence: Ua
      }
    }
  };
}, sI = ({
  cameraOptions: x,
  children: i
}) => {
  const t = Ue(() => aI(x), [x]);
  return /* @__PURE__ */ O(sg.Provider, { value: t, children: i });
}, cI = (x, i) => ({ ...x, leftEye: { ...x.leftEye, center: H0(x.leftEye.center, i) }, rightEye: { ...x.rightEye, center: H0(x.rightEye.center, i) }, mouth: { ...x.mouth, center: H0(x.mouth.center, i) }, topLeft: H0(x.topLeft, i), bottomRight: H0(x.bottomRight, i), faceCenter: H0(x.faceCenter, i) }), cg = (x, i) => {
  const { faceCenter: t, faceSize: e } = x, n = C1(e, i), o = {};
  o.x = t.x, o.y = t.y - n;
  const r = {};
  r.x = t.x + n, r.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + n;
  const s = {};
  s.x = t.x - n, s.y = t.y;
  const c = {};
  return c.top = o, c.right = r, c.bottom = a, c.left = s, Yc(c);
}, gI = (x, i) => {
  const { bottomRight: t, faceCenter: e, topLeft: n } = i, o = {
    topLeft: n,
    width: t.x - n.x,
    height: t.y - n.y
  };
  Jc(x, o, "rgba(255, 0, 0, 0.3)", !0), bn(x, e, "lime");
}, dI = (x, i, t) => {
  const e = cg(i, t);
  Object.values(e).map((n) => bn(x, n, "orange"));
}, uI = ({ cameraResolution: x, detectionDetails: i, isImageMirror: t }) => {
  const { thresholds: e } = Br(), { redfin: n } = q0(), o = ke(null);
  if (ae(() => {
    if (!o.current)
      return;
    o.current.width = x.width, o.current.height = x.height, g1(o.current);
    const p = $x(x), m = Qc(
      x,
      e.outOfBoundsThreshold,
      p
    ), A = I1(x);
    i.value && (gI(o.current, i.value.processedImage.detection), dI(
      o.current,
      i.value.processedImage.detection,
      x
    ), to(o.current, p, "lime"), to(o.current, m, "yellow"), to(o.current, A, "blue"), bn(o.current, i.value.processedImage.detection.leftEye.center, "cyan"), bn(o.current, i.value.processedImage.detection.rightEye.center, "cyan"), bn(o.current, i.value.processedImage.detection.mouth.center, "cyan"));
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
    "Component version": "6.2.1"
  };
  return C && (u["SAM version"] = C), d.length > 0 && (u["Invalid validators"] = d.join(", ")), /* @__PURE__ */ O(
    pl,
    {
      ref: o,
      cameraResolution: x,
      detectionDetails: u,
      isImageMirror: t
    }
  );
};
function lI(x) {
  return /* @__PURE__ */ O("rect", { fill: "#000", ...x, rx: "50%" });
}
function II(x) {
  const [i, t] = De(!1), e = () => t((r) => !r), n = "" + i;
  J0(() => {
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
const fI = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function CI({ cutOut: x, height: i, width: t }) {
  const e = ke(null), { key: n } = II(e);
  return /* @__PURE__ */ O("div", { ref: e, style: fI, children: /* @__PURE__ */ O("svg", { viewBox: `0 0 ${t} ${i}`, children: [
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
function pI({ fullOverlay: x, resolution: i }) {
  const t = f1(i), e = `${t.height * 100}%`, n = `${t.width * 100}%`, o = `${t.shiftX * 100}%`, r = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ O(
    CI,
    {
      cutOut: x || /* @__PURE__ */ O(lI, { height: e, width: n, x: o, y: r }),
      height: i.height,
      width: i.width
    }
  );
}
function hI({ cameraResolution: x, children: i, detectionDetails: t, shouldMirror: e }) {
  const { redfin: n, sunfish: o } = q0(), { appState: r, freemiumOverlayState: a } = z0(), s = a !== jx.HIDDEN && n !== Ho.Higher && x, c = a === jx.VISIBLE, d = x && o && r === yt.RUNNING;
  return /* @__PURE__ */ O(rt, { children: [
    s && /* @__PURE__ */ O(pI, { fullOverlay: c, resolution: x }),
    i,
    d && /* @__PURE__ */ O(
      uI,
      {
        cameraResolution: x,
        detectionDetails: t,
        isImageMirror: e
      }
    )
  ] });
}
const mI = (x, i) => {
  if (K1()) {
    const t = {};
    t.candidateSelectionImages = i;
    const e = t;
    Wn.getInstance().dispatchCustomEventOnChange(x, e);
  }
};
var $t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, gg = {}, as = {}, bI = AI;
function AI(x, i) {
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
var dg = {};
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
})(dg);
var yI = Si;
function Si() {
  this._listeners = {};
}
Si.prototype.on = function(x, i, t) {
  return (this._listeners[x] || (this._listeners[x] = [])).push({
    fn: i,
    ctx: t || this
  }), this;
};
Si.prototype.off = function(x, i) {
  if (x === void 0)
    this._listeners = {};
  else if (i === void 0)
    this._listeners[x] = [];
  else
    for (var t = this._listeners[x], e = 0; e < t.length; )
      t[e].fn === i ? t.splice(e, 1) : ++e;
  return this;
};
Si.prototype.emit = function(x) {
  var i = this._listeners[x];
  if (i) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < i.length; )
      i[e].fn.apply(i[e++].ctx, t);
  }
  return this;
};
var vI = ss(ss);
function ss(x) {
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
    x.writeFloatLE = i.bind(null, cs), x.writeFloatBE = i.bind(null, gs);
    function t(e, n, o) {
      var r = e(n, o), a = (r >> 31) * 2 + 1, s = r >>> 23 & 255, c = r & 8388607;
      return s === 255 ? c ? NaN : a * (1 / 0) : s === 0 ? a * 1401298464324817e-60 * c : a * Math.pow(2, s - 150) * (c + 8388608);
    }
    x.readFloatLE = t.bind(null, ds), x.readFloatBE = t.bind(null, us);
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
    x.writeDoubleLE = i.bind(null, cs, 0, 4), x.writeDoubleBE = i.bind(null, gs, 4, 0);
    function t(e, n, o, r, a) {
      var s = e(r, a + n), c = e(r, a + o), d = (c >> 31) * 2 + 1, g = c >>> 20 & 2047, C = 4294967296 * (c & 1048575) + s;
      return g === 2047 ? C ? NaN : d * (1 / 0) : g === 0 ? d * 5e-324 * C : d * Math.pow(2, g - 1075) * (C + 4503599627370496);
    }
    x.readDoubleLE = t.bind(null, ds, 0, 4), x.readDoubleBE = t.bind(null, us, 4, 0);
  }(), x;
}
function cs(x, i, t) {
  i[t] = x & 255, i[t + 1] = x >>> 8 & 255, i[t + 2] = x >>> 16 & 255, i[t + 3] = x >>> 24;
}
function gs(x, i, t) {
  i[t] = x >>> 24, i[t + 1] = x >>> 16 & 255, i[t + 2] = x >>> 8 & 255, i[t + 3] = x & 255;
}
function ds(x, i) {
  return (x[i] | x[i + 1] << 8 | x[i + 2] << 16 | x[i + 3] << 24) >>> 0;
}
function us(x, i) {
  return (x[i] << 24 | x[i + 1] << 16 | x[i + 2] << 8 | x[i + 3]) >>> 0;
}
function ls(x) {
  throw new Error('Could not dynamically require "' + x + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var WI = SI;
function SI(x) {
  try {
    if (typeof ls != "function")
      return null;
    var i = ls(x);
    return i && (i.length || Object.keys(i).length) ? i : null;
  } catch {
    return null;
  }
}
var ug = {};
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
})(ug);
var wI = BI;
function BI(x, i, t) {
  var e = t || 8192, n = e >>> 1, o = null, r = e;
  return function(a) {
    if (a < 1 || a > n)
      return x(a);
    r + a > e && (o = x(e), r = 0);
    var s = i.call(o, r, r += a);
    return r & 7 && (r = (r | 7) + 1), s;
  };
}
var xo, Is;
function GI() {
  if (Is)
    return xo;
  Is = 1, xo = i;
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
  }, xo;
}
var fs;
function m0() {
  return fs || (fs = 1, function(x) {
    var i = x;
    i.asPromise = bI, i.base64 = dg, i.EventEmitter = yI, i.float = vI, i.inquire = WI, i.utf8 = ug, i.pool = wI, i.LongBits = GI(), i.isNode = !!(typeof $t < "u" && $t && $t.process && $t.process.versions && $t.process.versions.node), i.global = i.isNode && $t || typeof window < "u" && window || typeof self < "u" && self || $t, i.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(as)), as;
}
var lg = U, ot = m0(), Qo, wi = ot.LongBits, Cs = ot.base64, ps = ot.utf8;
function Xn(x, i, t) {
  this.fn = x, this.len = i, this.next = void 0, this.val = t;
}
function Gr() {
}
function kI(x) {
  this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
}
function U() {
  this.len = 0, this.head = new Xn(Gr, 0, 0), this.tail = this.head, this.states = null;
}
var Ig = function() {
  return ot.Buffer ? function() {
    return (U.create = function() {
      return new Qo();
    })();
  } : function() {
    return new U();
  };
};
U.create = Ig();
U.alloc = function(x) {
  return new ot.Array(x);
};
ot.Array !== Array && (U.alloc = ot.pool(U.alloc, ot.Array.prototype.subarray));
U.prototype._push = function(x, i, t) {
  return this.tail = this.tail.next = new Xn(x, i, t), this.len += i, this;
};
function kr(x, i, t) {
  i[t] = x & 255;
}
function OI(x, i, t) {
  for (; x > 127; )
    i[t++] = x & 127 | 128, x >>>= 7;
  i[t] = x;
}
function Or(x, i) {
  this.len = x, this.next = void 0, this.val = i;
}
Or.prototype = Object.create(Xn.prototype);
Or.prototype.fn = OI;
U.prototype.uint32 = function(x) {
  return this.len += (this.tail = this.tail.next = new Or(
    (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
    x
  )).len, this;
};
U.prototype.int32 = function(x) {
  return x < 0 ? this._push(Hr, 10, wi.fromNumber(x)) : this.uint32(x);
};
U.prototype.sint32 = function(x) {
  return this.uint32((x << 1 ^ x >> 31) >>> 0);
};
function Hr(x, i, t) {
  for (; x.hi; )
    i[t++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
  for (; x.lo > 127; )
    i[t++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
  i[t++] = x.lo;
}
U.prototype.uint64 = function(x) {
  var i = wi.from(x);
  return this._push(Hr, i.length(), i);
};
U.prototype.int64 = U.prototype.uint64;
U.prototype.sint64 = function(x) {
  var i = wi.from(x).zzEncode();
  return this._push(Hr, i.length(), i);
};
U.prototype.bool = function(x) {
  return this._push(kr, 1, x ? 1 : 0);
};
function Uo(x, i, t) {
  i[t] = x & 255, i[t + 1] = x >>> 8 & 255, i[t + 2] = x >>> 16 & 255, i[t + 3] = x >>> 24;
}
U.prototype.fixed32 = function(x) {
  return this._push(Uo, 4, x >>> 0);
};
U.prototype.sfixed32 = U.prototype.fixed32;
U.prototype.fixed64 = function(x) {
  var i = wi.from(x);
  return this._push(Uo, 4, i.lo)._push(Uo, 4, i.hi);
};
U.prototype.sfixed64 = U.prototype.fixed64;
U.prototype.float = function(x) {
  return this._push(ot.float.writeFloatLE, 4, x);
};
U.prototype.double = function(x) {
  return this._push(ot.float.writeDoubleLE, 8, x);
};
var HI = ot.Array.prototype.set ? function(x, i, t) {
  i.set(x, t);
} : function(x, i, t) {
  for (var e = 0; e < x.length; ++e)
    i[t + e] = x[e];
};
U.prototype.bytes = function(x) {
  var i = x.length >>> 0;
  if (!i)
    return this._push(kr, 1, 0);
  if (ot.isString(x)) {
    var t = U.alloc(i = Cs.length(x));
    Cs.decode(x, t, 0), x = t;
  }
  return this.uint32(i)._push(HI, i, x);
};
U.prototype.string = function(x) {
  var i = ps.length(x);
  return i ? this.uint32(i)._push(ps.write, i, x) : this._push(kr, 1, 0);
};
U.prototype.fork = function() {
  return this.states = new kI(this), this.head = this.tail = new Xn(Gr, 0, 0), this.len = 0, this;
};
U.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Xn(Gr, 0, 0), this.len = 0), this;
};
U.prototype.ldelim = function() {
  var x = this.head, i = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = x.next, this.tail = i, this.len += t), this;
};
U.prototype.finish = function() {
  for (var x = this.head.next, i = this.constructor.alloc(this.len), t = 0; x; )
    x.fn(x.val, i, t), t += x.len, x = x.next;
  return i;
};
U._configure = function(x) {
  Qo = x, U.create = Ig(), Qo._configure();
};
var ZI = Wt, fg = lg;
(Wt.prototype = Object.create(fg.prototype)).constructor = Wt;
var Mt = m0();
function Wt() {
  fg.call(this);
}
Wt._configure = function() {
  Wt.alloc = Mt._Buffer_allocUnsafe, Wt.writeBytesBuffer = Mt.Buffer && Mt.Buffer.prototype instanceof Uint8Array && Mt.Buffer.prototype.set.name === "set" ? function(x, i, t) {
    i.set(x, t);
  } : function(x, i, t) {
    if (x.copy)
      x.copy(i, t, 0, x.length);
    else
      for (var e = 0; e < x.length; )
        i[t++] = x[e++];
  };
};
Wt.prototype.bytes = function(x) {
  Mt.isString(x) && (x = Mt._Buffer_from(x, "base64"));
  var i = x.length >>> 0;
  return this.uint32(i), i && this._push(Wt.writeBytesBuffer, i, x), this;
};
function RI(x, i, t) {
  x.length < 40 ? Mt.utf8.write(x, i, t) : i.utf8Write ? i.utf8Write(x, t) : i.write(x, t);
}
Wt.prototype.string = function(x) {
  var i = Mt.Buffer.byteLength(x);
  return this.uint32(i), i && this._push(RI, i, x), this;
};
Wt._configure();
var Cg = fe, St = m0(), zo, pg = St.LongBits, KI = St.utf8;
function It(x, i) {
  return RangeError("index out of range: " + x.pos + " + " + (i || 1) + " > " + x.len);
}
function fe(x) {
  this.buf = x, this.pos = 0, this.len = x.length;
}
var hs = typeof Uint8Array < "u" ? function(x) {
  if (x instanceof Uint8Array || Array.isArray(x))
    return new fe(x);
  throw Error("illegal buffer");
} : function(x) {
  if (Array.isArray(x))
    return new fe(x);
  throw Error("illegal buffer");
}, hg = function() {
  return St.Buffer ? function(x) {
    return (fe.create = function(i) {
      return St.Buffer.isBuffer(i) ? new zo(i) : hs(i);
    })(x);
  } : hs;
};
fe.create = hg();
fe.prototype._slice = St.Array.prototype.subarray || /* istanbul ignore next */
St.Array.prototype.slice;
fe.prototype.uint32 = /* @__PURE__ */ function() {
  var x = 4294967295;
  return function() {
    if (x = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (x = (x | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return x;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, It(this, 10);
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
function io() {
  var x = new pg(0, 0), i = 0;
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
        throw It(this);
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
        throw It(this);
      if (x.hi = (x.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return x;
    }
  throw Error("invalid varint encoding");
}
fe.prototype.bool = function() {
  return this.uint32() !== 0;
};
function ti(x, i) {
  return (x[i - 4] | x[i - 3] << 8 | x[i - 2] << 16 | x[i - 1] << 24) >>> 0;
}
fe.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw It(this, 4);
  return ti(this.buf, this.pos += 4);
};
fe.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw It(this, 4);
  return ti(this.buf, this.pos += 4) | 0;
};
function ms() {
  if (this.pos + 8 > this.len)
    throw It(this, 8);
  return new pg(ti(this.buf, this.pos += 4), ti(this.buf, this.pos += 4));
}
fe.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw It(this, 4);
  var x = St.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, x;
};
fe.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw It(this, 4);
  var x = St.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, x;
};
fe.prototype.bytes = function() {
  var x = this.uint32(), i = this.pos, t = this.pos + x;
  if (t > this.len)
    throw It(this, x);
  return this.pos += x, Array.isArray(this.buf) ? this.buf.slice(i, t) : i === t ? new this.buf.constructor(0) : this._slice.call(this.buf, i, t);
};
fe.prototype.string = function() {
  var x = this.bytes();
  return KI.read(x, 0, x.length);
};
fe.prototype.skip = function(x) {
  if (typeof x == "number") {
    if (this.pos + x > this.len)
      throw It(this, x);
    this.pos += x;
  } else
    do
      if (this.pos >= this.len)
        throw It(this);
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
  zo = x, fe.create = hg(), zo._configure();
  var i = St.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  St.merge(fe.prototype, {
    int64: function() {
      return io.call(this)[i](!1);
    },
    uint64: function() {
      return io.call(this)[i](!0);
    },
    sint64: function() {
      return io.call(this).zzDecode()[i](!1);
    },
    fixed64: function() {
      return ms.call(this)[i](!0);
    },
    sfixed64: function() {
      return ms.call(this)[i](!1);
    }
  });
};
var PI = C0, mg = Cg;
(C0.prototype = Object.create(mg.prototype)).constructor = C0;
var bs = m0();
function C0(x) {
  mg.call(this, x);
}
C0._configure = function() {
  bs.Buffer && (C0.prototype._slice = bs.Buffer.prototype.slice);
};
C0.prototype.string = function() {
  var x = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + x, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + x, this.len));
};
C0._configure();
var bg = {}, VI = wn, Zr = m0();
(wn.prototype = Object.create(Zr.EventEmitter.prototype)).constructor = wn;
function wn(x, i, t) {
  if (typeof x != "function")
    throw TypeError("rpcImpl must be a function");
  Zr.EventEmitter.call(this), this.rpcImpl = x, this.requestDelimited = !!i, this.responseDelimited = !!t;
}
wn.prototype.rpcCall = function x(i, t, e, n, o) {
  if (!n)
    throw TypeError("request must be specified");
  var r = this;
  if (!o)
    return Zr.asPromise(x, r, i, t, e, n);
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
wn.prototype.end = function(x) {
  return this.rpcImpl && (x || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(x) {
  var i = x;
  i.Service = VI;
})(bg);
var TI = {};
(function(x) {
  var i = x;
  i.build = "minimal", i.Writer = lg, i.BufferWriter = ZI, i.Reader = Cg, i.BufferReader = PI, i.util = m0(), i.rpc = bg, i.roots = TI, i.configure = t;
  function t() {
    i.util._configure(), i.Writer._configure(i.BufferWriter), i.Reader._configure(i.BufferReader);
  }
  t();
})(gg);
var oe = gg;
const B = oe.Reader, ue = oe.Writer, v = oe.util, h = oe.roots.default || (oe.roots.default = {}), p0 = h.dot = (() => {
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
      return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
        return this.constructor.toObject(this, oe.util.toJSONOptions);
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
      return this.constructor.toObject(this, oe.util.toJSONOptions);
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
      return this.constructor.toObject(this, oe.util.toJSONOptions);
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
      return this.constructor.toObject(this, oe.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, i;
  }(), x;
})();
function de(x, i) {
  const t = ni();
  return de = function(e, n) {
    e = e - (304 * 20 + 2 * 1928 + 2 * -4882);
    let o = t[e];
    if (de.mEGLpi === void 0) {
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
      de.gRuuTB = d, x = arguments, de.mEGLpi = !0;
    }
    const a = t[-4998 + 1001 * 2 + 2996], s = e + a, c = x[s];
    return c ? o = c : (de.kBCMpl === void 0 && (de.kBCMpl = !0), o = de.gRuuTB(o, n), x[s] = o), o;
  }, de(x, i);
}
function ni() {
  const x = ["cSojrWbg", "wW9oWRy", "WQldI8owW4Kki1RdPq", "W7b1q1ZcISktW6aRWRhcOhPHdmo4", "b1XsWOvIySosoa", "WRFdGmoEW7JcUq", "WPFdV8kQ", "hXxcVIRcHuuBWQhcLCoZW7LPW5i", "W7BcLCowW7Cy", "W6lcLSkyWPZdQNeHrmkdWOa5WQ06vq", "W5DcpYNcOSkoWR9JW77cJG", "WQq/o8kdWPS", "zNvfW4K", "dmoRWOjVWRu", "WQ3dTLn1WR8", "WQVdTYlcVmoyden7nCkSW6BdSa", "bhBdIx/cLriCW5VcJSofWRlcRYBcTa", "WOPEW7bM", "uCkVbdW1CwHdW7a", "bhddIx7cKXqsWRVcGCojWRVcUqC", "WQeRW6hdHCoRWRZdOmojW5SqWOhdSG", "W5ryW4ngDYBdJSkEa8ku", "W7isgaaL", "WQpcPf/cUxW", "WRrosW", "ewdcPtG", "ehVcIJZdHSo0gxFcMd8jW67cKa", "lCkYEbJdQ8knrq", "mtdcSSooW5O", "s13dVNBdGW", "WP9lW6LoW5JdVIbRWPZdPmkEiW", "zMJcO8oWW5tdPSoOWQtcVmowvq", "WRZdGmoeW43cRa", "nIRdQSkWWPG", "tYldV2ddUCoVoCk2W7vnFri", "W5qoWR4pWOW", "wM7dQ2a", "AsKyWQfMWR7dIbHTW6xcKcddRN8", "xvddRg3dNq", "v8kDgf0OWO8IW5XUqCoW", "zgJdSmkmWOFdUmoyWRm", "mmozkvb6", "W4WEWQu", "WQ0GWRxdQXFcI8kV", "WQaGr3JdJG", "o21rW6mG", "bgFcQchcRq", "zmkdF2fMcNb7WPS"];
  return ni = function() {
    return x;
  }, ni();
}
(function(x, i) {
  const t = x();
  function e(s, c, d, g, C) {
    return de(g - -825, s);
  }
  function n(s, c, d, g, C) {
    return de(s - 780, C);
  }
  function o(s, c, d, g, C) {
    return de(C - -597, g);
  }
  function r(s, c, d, g, C) {
    return de(g - 541, C);
  }
  function a(s, c, d, g, C) {
    return de(s - 456, g);
  }
  for (; ; )
    try {
      if (-parseInt(e("HBoP", -602, -616, -614, -631)) / 1 + -parseInt(a(643, 646, 635, ")EAy", 632)) / 2 * (parseInt(e("4rN8", -663, -670, -647, -644)) / 3) + parseInt(o(-369, -387, -407, "Arce", -390)) / 4 * (parseInt(o(-371, -399, -395, "8%&7", -387)) / 5) + -parseInt(n(998, 1006, 994, 1013, "kmpg")) / 6 + -parseInt(o(-394, -366, -366, "QpyM", -384)) / 7 * (-parseInt(r(734, 733, 737, 724, "N5bV")) / 8) + parseInt(r(714, 698, 740, 722, "fUDT")) / 9 * (-parseInt(n(964, 966, 971, 966, "TfHC")) / 10) + parseInt(n(976, 991, 987, 985, "1sc)")) / 11 * (parseInt(n(975, 952, 981, 979, "OITA")) / 12) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(ni, 453 * 807 + -51870 + 678363);
async function EI() {
  const x = {};
  x[o(-359, -323, "d(Hk", -336, -343)] = Zc, x[o(-382, -377, "kkCg", -357, -376) + "h"] = 256;
  function i(d, g, C, u, p) {
    return de(C - 819, p);
  }
  function t(d, g, C, u, p) {
    return de(g - -600, C);
  }
  const e = await window[t(-412, -428, "KXKL") + "o"][t(-414, -418, "H0hk") + "e"][o(-367, -369, "c3S[", -328, -346) + o(-355, -355, "58&X", -341, -349) + "y"](x, !0, [c(775, 755, 749, "TqQ*") + "pt", s(-777, "3Yg1", -781, -759) + "pt"]), n = Uint8Array[o(-328, -320, "4rN8", -349, -335)](Array(10710 + -1 * 10694)[o(-350, -330, "efWa", -360, -348)](10707 + 1 * -10707));
  function o(d, g, C, u, p) {
    return de(p - -552, C);
  }
  const r = window[c(752, 759, 737, "fUDT") + "o"][i(1010, 1013, 1016, 1040, "kkCg") + o(-341, -373, "N5bV", -359, -360) + o(-342, -315, "(*&B", -342, -338)](n), a = {};
  a[o(-357, -384, "WXw5", -377, -366)] = e, a.iv = r;
  function s(d, g, C, u, p) {
    return de(u - -974, g);
  }
  function c(d, g, C, u, p) {
    return de(g - 570, u);
  }
  return a;
}
async function LI(x) {
  const { iv: i, key: t } = await EI(), e = {};
  e[g(590, 600, "1sc)")] = Zc;
  function n(C, u, p, m, A) {
    return de(A - -581, u);
  }
  e.iv = i;
  function o(C, u, p, m, A) {
    return de(C - 209, A);
  }
  const r = await window[d(832, "TfHC", 878, 855, 855) + "o"][n(-393, "WXw5", -407, -387, -402) + "e"][n(-367, "u9nL", -363, -373, -381) + "pt"](e, t, x), a = await window[o(414, 397, 427, 431, "mNgH") + "o"][g(587, 589, "4rN8") + "e"][o(382, 382, 375, 382, "H0hk") + s(76, 48, "H0hk", 29, 53)](n(-389, "ZdRv", -401, -368, -383), t);
  function s(C, u, p, m, A) {
    return de(A - -127, p);
  }
  const c = {};
  c[d(881, "%FA&", 849, 843, 866) + "ge"] = r;
  function d(C, u, p, m, A) {
    return de(A - 678, u);
  }
  c[n(-348, "kD&K", -368, -352, -365)] = a, c.iv = i;
  function g(C, u, p, m, A) {
    return de(C - 397, p);
  }
  return c;
}
function xi() {
  const x = ["rduHDSo0", "W7fZeZ/dQ03cUJ3cImobW6JdHa", "fGtcJSkxwmovW5tdTXDC", "rttcVt7cTIFcHSkSmrzCkq", "W4BcPSkJW4G5", "WQlcGmoAx8o/W6OgDd3dHW", "c8k4W6u9AfpcLSocca", "AvZcRhBdS2fnW68gxa", "qCobWQenW6rbvSkQW5HRWQtcVCo/", "wuhdIYNdSdixWR3dK8o8l2md", "WQ0bd2H2W5bYnCkD", "W5pcN8kzWOlcUq", "qCogWQigW6zauCk6W4noWOtcG8oN", "AHhcO8kNAq", "W4bzb1m", "dCk2W7fbWP4", "ldRcLCoKW5KVysRdJG", "W4RcO8kahhXhWPldP8kzwW", "WPSAW7ZdHSkmW4SpW43cH1lcJG", "n8k4WRxcNmoD", "rSohWQqlW6WHc8k/W4vkWQG", "m8k1j8oFvG", "cmk6W6rEnG/cNSoenbxdT8oX", "lbiRimo+aYJcS8k7W5OqWP50", "WRpdMgZcLCk8W7ddQufk"];
  return xi = function() {
    return x;
  }, xi();
}
function Me(x, i) {
  const t = xi();
  return Me = function(e, n) {
    e = e - (543 * 12 + -1 * 3851 + -2423);
    let o = t[e];
    if (Me.bpHHRV === void 0) {
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
      Me.eiiNcO = d, x = arguments, Me.bpHHRV = !0;
    }
    const a = t[-8498 + -1 * 5631 + 14129], s = e + a, c = x[s];
    return c ? o = c : (Me.OGHkjH === void 0 && (Me.OGHkjH = !0), o = Me.eiiNcO(o, n), x[s] = o), o;
  }, Me(x, i);
}
(function(x, i) {
  const t = x();
  function e(r, a, s, c, d) {
    return Me(s - 379, a);
  }
  function n(r, a, s, c, d) {
    return Me(s - -524, a);
  }
  function o(r, a, s, c, d) {
    return Me(c - 299, d);
  }
  for (; ; )
    try {
      if (parseInt(e(619, "p[jW", 625, 636, 624)) / 1 * (-parseInt(e(643, "470W", 642, 643, 631)) / 2) + parseInt(o(559, 568, 557, 557, "O3ay")) / 3 + parseInt(e(624, "hoDJ", 622, 625, 612)) / 4 * (parseInt(o(532, 534, 551, 541, "O3ay")) / 5) + -parseInt(n(-290, "&XX1", -280, -283, -286)) / 6 + parseInt(o(569, 549, 560, 558, "$LeN")) / 7 + -parseInt(n(-271, "&XX1", -268, -262, -256)) / 8 + -parseInt(o(558, 563, 570, 561, "^($D")) / 9 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(xi, -1 * 283527 + 1 * 361906 + 110415);
function DI(x) {
  function i(r, a, s, c, d) {
    return Me(a - 267, r);
  }
  const t = new ArrayBuffer(x[n("dU)3", -371, -382, -380, -378) + "h"]), e = new Uint8Array(t);
  for (let r = -7645 + -1 * 5889 + 13534, a = x[n("hSXm", -359, -363, -374, -364) + "h"]; r < a; r++)
    e[r] = x[i("4mcj", 514) + o(1142, "$Bz^", 1123, 1135, 1132)](r);
  function n(r, a, s, c, d) {
    return Me(d - -629, r);
  }
  function o(r, a, s, c, d) {
    return Me(d - 877, a);
  }
  return t;
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return Ie(C - 823, d);
  }
  function e(s, c, d, g, C) {
    return Ie(d - 995, C);
  }
  const n = x();
  function o(s, c, d, g, C) {
    return Ie(c - 194, s);
  }
  function r(s, c, d, g, C) {
    return Ie(d - 528, g);
  }
  function a(s, c, d, g, C) {
    return Ie(g - -414, d);
  }
  for (; ; )
    try {
      if (-parseInt(t(1176, 1343, "Vd]H", 1387, 1292)) / 1 + -parseInt(t(1375, 1261, "j$85", 1325, 1334)) / 2 + parseInt(e(1564, 1663, 1594, 1659, "m[kS")) / 3 * (parseInt(a(184, 185, "lR1g", 95, 110)) / 4) + parseInt(o("MZWD", 620, 714, 726, 652)) / 5 + parseInt(r(1141, 1038, 1098, "pv%x", 1101)) / 6 * (-parseInt(t(1362, 1278, "T@5e", 1437, 1330)) / 7) + parseInt(r(943, 1006, 973, "&%v[", 865)) / 8 + parseInt(a(46, 97, "vIce", 62, 125)) / 9 === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ii, 615493);
function ii() {
  const x = ["WRCbaXpcHW", "WPTuWOb9cG", "sqPHe10", "WOHus8ogpG", "amk5WPyutG", "pYtcG8ktjG", "W7hcI8kPW7zh", "WQhdO1JdSt0", "qSoole7cJa", "ySkjWRNcRmoK", "W4hdPc/cRutdVNTcW6DaWPtdTCoB", "W5zfW4BdPSke", "W4XtW4VdVdW", "usefW541", "jGpcPmkOda", "W6WUWQ5bWR8", "eIWDWRFcV8orWQ/cQYHOBCkJwa", "WR7dO0RdSZe", "s8obW4HqW6i", "mmotWRddT0K", "W4SXWPrEW7W", "W4bRW7ldQ8kK", "iGrJW7pcPW", "W4zWW6NdNCko", "W6pdGSo/aeu", "wGaZW64v", "sx5oW4tdPW", "uCkrWPmkhW", "W7PjWQlcN8o/", "sWeYWPaj", "bSknW5nGW4C", "s8ohW4bDW7W", "eIXKW7JcIW", "wCoEs2tcRG", "WOhdTZ3cO1C", "o8oIWQ7cPmke", "A8kJW4JcJGe", "sfFdUmoSW70", "W5ZdGCozqxi", "fY8sWRZcT8osW4ZcMqrNC8kr", "W6jkW4hdV8kD", "WOZdRmoGax8", "xemjAWm", "W7jBW5Hndq", "hCkotcldHsrBW6vkW7pcTbXZgW", "pSoFW7BcLIG", "gIa3W7NdGq", "tCoiW43cLSk/", "g2tdO8kahG", "lZeIW50G", "kmo5W7TbW54", "CCoUW6TwW5u", "g8o4W451CG", "AgVcTCkftW", "W6u1WQrsWPW", "uCk3yCkQwq", "fCoTWQ7cS8kT", "WO9KWQ1Yva", "zSkaW4K0W6q", "C8oAW6fRW5y", "BJSjgmkH", "AJ/dPLvn", "W7FdHmoVagK", "fSoFWRfNyG", "WPDjWOjplq", "W5S5WQ/dU8oE", "WRi9jbJcTG", "WRrlW7/dOSkm", "rCoxWRnCea", "uSomW6nZEq", "ih7dUmkUDq", "fsWBW7eJ", "v2RdJ8kpW4O", "mSoPWOzBjG", "W7xdMSoXW7BcIa", "sIu9sf0", "W647WRddTSoz", "v8oIW4DEW6a", "CHpdU8o6W5y", "gJpdS8kymW", "t8oGW4nCW7m", "F0LVW5tdKW", "W5rCsCofpW", "W5ldJCoSv1K", "W5PhWQVdUdy", "W5VcScJdIJW", "f8oaW7tdIqm", "xKtcJ8kcEW", "WOJdIbVcT0W", "Eb7dJ1tdVW", "l8ocWRhcNCko", "W7DlW4FdMmo6", "W6v9W70Lvq", "mZWqW44b", "W5FcVSkGWQ9f", "WPzxWOrtnq", "W7fAW7P/EW", "DCktW7WaW6C", "gfTQz8o7W65qhrtcUHVcJW", "W4ZdNa7cOLS", "W4VdOLJdSaC", "W48dAbvf", "W6L5WPddNSoj", "WQxdRmk8W6hcNa", "W7ldIcxcSwe", "nCoOWOv3FW", "rmoWmhddHa", "W7L+WOVdMSor", "relcHMj6", "rcpdVsOO", "WPOuW67dPSoR", "FuulAc0", "W5DZWPHavG", "tCkuFZddVW", "WPvdWQP4nG", "mmo0WPmrmG", "AbBcHXXN", "uuT5WQj+uq4bAbtcQaVcHa", "owVdHCkeDa", "DCoPavxcVq", "r2HkW6W", "chFcS8oLEa", "sYlcRMHR", "W5LOsmoHjG", "w33dUCojW5i", "WRyVWQhcUCo+W5VdLHVdNCk2AmkPWOO", "W6/cIJxdVq", "W7jzWRzukG", "W6LnW4BdJmk9", "fcCLoCknWP5M", "WRiZW5dcL8keWO0Ay0qxEZi", "W5BcTwJdVbm", "W4pcKZxcRqO", "W4NcH8kVWQy", "cSoVWOmoEW", "W5qpWPv6WRi", "W6aHrsHv", "nGumec0", "qmkBW6GqW5K", "abvrW67cVW", "WOpcG37dSYu", "m8ksW5f0FmkhWQFcGxqIWOygrG", "WPFcJSkWWPDl", "W5/dLcBcTe4", "WPncaXJcIa", "tSoNW5z5Aq", "eIZcKSkjuG", "WQmUDd7cJG", "W7ZcL8oCWPldLCkkWRSpWPJcSmkGBmk4WO0", "DCo3W6a4ja", "CuBdNCov", "pCoGWOhdRtC", "WPnPWPBdQYm", "nc4IWQ4u", "WQqIW4ZcJCob", "WRrBW59PeW", "FhJdTIS4", "mSkyWOj6sq", "l8kyWRCYrq", "W5DMW4HNxq", "atKsW7yD", "FSoIW6SHsG", "qcZcMx16", "WRRdPmk6W7pcJG", "W65YWQFcN8oz", "W4pdLSkuWOzj", "l8obiCo8W5i", "FSkYW5OaW6q", "uCooWP9Qta", "Bg/cN8kdya", "W44mWPxcG1unBSk3yKDptG", "shupdhu", "hsfZW7Cx", "W7LqW6THyW", "o8oIWQBdIui", "y8kwWPzZlG", "nmocWQLSeG", "W5uJvY9b", "W5tdJXlcH3m", "i1G3W4utW7vxDa", "BmksWRe6pG", "bmkDW4GYW73cLmkX", "W5nyW4hdGSkO", "BbJdPmoHgmkQuH07k8onemog", "BsNdIbe4", "E8k4WRZcJSoC", "W4hdKcpcHu0", "W4jkWQBdNCkC", "CJpdKwtcRa", "WRTbWPZdJ8oQ", "BCkUWPpdHc5qwG8", "EaiQkSkX", "AmokpLNcPq", "y8kIWPVdVLy", "WQRdJCkdW5pcHW", "WQTQWPpcGsK", "h3jkW7dcPa", "w8ooWPmVeG", "WOqbW4VdT8k/", "l8kyW5ChqG", "WQ9SWOn8", "W49lW5BdLa8", "mI0MWQSD", "rCoAW6jjqG", "x1GUW4HY", "W4KRWRxdQaW", "W78RW6JdPGC", "FchdJ2hdVa", "E8ktDWNdVG", "vcG2jW", "W74Jzbv+", "zJyedCo7", "WQRcU2/dPXC", "W4pcONxdKcq", "i8k6W7RdL10", "yCkrWR7cKCk9", "kmoJW5CdiW", "W73dUCkpW5RcLW", "smkXFSkFW5xcUfdcIGJdI8kiqmoU", "xMzQhIS", "wJJdPaW", "qGJcNmo2csRcMmkPhvFdHxBcKG", "nb3cTSkEoq", "mgtcR8kphW", "E8knCY7dPW", "W4blW5FdKmkJ", "Fr7dL0FdJa", "WQJdJmkGW4lcHa", "k8o4WQBdQCkd", "CCoTW5zwW4S", "rrhcJe0w", "bmk4W5/dMMO"];
  return ii = function() {
    return x;
  }, ii();
}
function NI() {
  function x(d, g, C, u, p) {
    return Ie(g - -286, u);
  }
  function i(d, g, C, u, p) {
    return Ie(g - 531, d);
  }
  const t = x(280, 247, 173, "cJcH") + x(365, 362, 419, "4$yT") + s(92, 167, 147, "8YZJ") + s(102, -32, 47, "Z!E$") + x(110, 196, 81, "ve^3") + c(-225, -285, -339, -362, "lR1g") + r(239, 155, 190, 254, "&%v[") + i("[OuC", 1078) + r(263, 247, 169, 242, "Tmbu") + x(255, 257, 277, "Tmbu") + x(244, 134, 237, "Z!E$") + r(186, 190, 137, 288, "QohP") + x(438, 349, 453, "$71*") + r(298, 218, 102, 201, "sPCl") + i("&%v[", 1019) + x(419, 320, 265, "]jM!") + r(251, 300, 354, 378, "yIOh") + s(42, 173, 137, "e%GB") + c(-60, -33, -133, -105, "&%v[") + x(333, 300, 354, "m[kS") + i("lR1g", 1026) + r(293, 278, 166, 217, "rJ$5") + c(-100, -43, -141, -138, "vwCH") + r(361, 355, 248, 245, "qm[[") + x(254, 303, 294, "T@5e") + s(159, 58, 61, "QohP") + i("%Ns8", 1167) + r(370, 380, 401, 362, "q#KO") + c(-351, -382, -315, -410, "j$85") + x(316, 326, 228, "7o4p") + i("Wn^p", 1159) + i("!%^0", 977) + s(-18, -12, 21, "#6)8") + i("sPCl", 968) + x(231, 331, 332, "@%v5") + i("I6!D", 1124) + i("]jM!", 1113) + r(390, 379, 424, 459, "lczD") + r(194, 200, 258, 314, "lR1g") + i("Df[v", 1138) + i("vIce", 1053) + r(62, 177, 170, 143, "Vd]H") + i("Df[v", 1087) + c(-414, -218, -305, -247, "lczD") + c(-268, -337, -224, -244, "pv%x") + c(-180, -22, -138, -90, "#6)8") + i("[OuC", 996) + i("]jM!", 998) + s(263, 67, 159, "[Q(%") + c(-172, -205, -260, -165, "Wn^p") + r(275, 350, 294, 404, "Df[v") + x(90, 164, 55, "qm[[") + r(77, 152, 108, 90, "Df[v") + s(70, -119, -12, "@%v5") + x(178, 153, 257, "[OuC") + x(334, 287, 246, "&%v[") + c(-200, -86, -142, -196, "8YZJ") + i("T@5e", 1116) + i("vIce", 1022) + c(-194, -372, -300, -261, "kQak") + c(-191, -135, -124, -160, "e%GB") + i("Z!E$", 971) + c(-367, -215, -328, -307, "qm[[") + s(93, 9, 58, "sPCl") + s(107, 143, 170, "@%v5") + x(225, 243, 342, "UO0@") + i("%Ns8", 1119) + x(206, 275, 325, "@%v5") + s(-8, -21, 56, "QohP") + i("tYz3", 1128) + i("MZWD", 1151) + i("Wn^p", 1008) + x(69, 131, 202, "kbVp") + s(16, 131, 127, "QohP") + s(238, 282, 178, "tYz3") + c(-62, -161, -131, -162, "Wn^p") + i("kQak", 1069) + i("@%v5", 1134) + c(-335, -322, -296, -180, "pv%x") + x(211, 133, 17, "QohP") + x(233, 239, 168, "Vd]H") + i("[Q(%", 1178) + x(247, 206, 156, "%Ns8") + x(190, 233, 174, "MZWD") + r(302, 268, 213, 375, "cJcH") + i("I6!D", 1051) + x(251, 142, 73, "pv%x") + x(188, 271, 330, "e%GB") + i("!98P", 1145) + s(84, -27, 60, "4$yT") + r(223, 172, 224, 266, "ve^3") + x(135, 187, 125, "rJ$5") + s(57, -34, 73, "rJ$5") + r(261, 163, 255, 192, "kQak") + r(282, 242, 284, 241, "Wn^p") + c(-45, -220, -134, -179, "!%^0") + s(253, 92, 171, "%Ns8") + i("et4g", 1005) + s(170, 215, 148, "[OuC") + i("e%GB", 1168) + s(185, 146, 82, "JDdA") + x(213, 231, 164, "%Ns8") + s(-14, 123, 98, "JDdA") + s(-99, -48, -7, "I6!D") + i("Wn^p", 1034) + s(44, -40, 16, "yIOh") + i("#6)8", 1091) + s(-118, -4, -10, "qm[[") + r(394, 293, 333, 323, "A^ET") + s(256, 125, 188, "NXK(") + r(223, 220, 215, 146, "rJ$5") + r(413, 305, 327, 388, "QohP") + i("yIOh", 1024) + r(257, 250, 157, 224, "kbVp") + r(322, 349, 318, 383, "GhN$") + c(-249, -407, -312, -368, "tYz3") + x(101, 203, 268, "7o4p") + c(-307, -403, -301, -270, "!98P") + s(140, 122, 85, "MZWD") + s(-7, 158, 104, "qm[[") + x(415, 355, 356, "m[kS") + c(-172, -254, -181, -137, "QohP") + i("qm[[", 1021) + s(216, 120, 157, "e%GB") + i("q#KO", 1010) + c(-283, -122, -192, -195, "UO0@") + c(-198, -314, -233, -162, "7o4p") + r(210, 276, 184, 175, "A^ET") + s(184, 200, 141, "gsg&") + s(110, 43, 26, "UO0@") + x(305, 216, 231, "q#KO") + c(-243, -171, -238, -234, "ve^3") + s(149, 88, 151, "q#KO") + i("Wn^p", 1027) + c(-112, -320, -209, -121, "5$Fk") + i("vwCH", 964) + x(405, 353, 260, "et4g") + i("4$yT", 1037) + x(358, 281, 256, "pv%x") + s(213, 75, 126, "!98P") + c(-173, -189, -277, -236, "Z!E$") + r(207, 206, 121, 101, "#6)8") + c(-319, -394, -302, -237, "rJ$5") + s(44, 121, 29, "@%v5") + s(61, 123, 91, "5$Fk") + i("j$85", 1139) + i("pv%x", 1108) + i("!98P", 1106) + c(-273, -112, -180, -252, "8YZJ") + i("lR1g", 1149) + i("&%v[", 1140) + r(183, 231, 312, 267, "j$85") + c(-294, -185, -241, -167, "UO0@") + x(270, 208, 154, "UX2A") + x(168, 136, 245, "yIOh") + s(69, -27, 1, "@%v5") + s(48, 168, 110, "vwCH") + c(-180, -190, -213, -157, "j$85") + r(240, 166, 267, 123, "4$yT") + c(-182, -196, -211, -166, "QohP") + c(-240, -368, -304, -223, "lczD") + c(-172, -234, -196, -274, "I6!D") + r(197, 312, 271, 310, "e%GB") + i("kQak", 1036) + r(220, 215, 294, 105, "&%v[") + s(45, 144, 67, "A^ET") + s(26, -127, -13, "JDdA") + s(90, 203, 189, "8YZJ") + r(204, 284, 304, 306, "et4g") + r(365, 313, 229, 200, "q#KO") + s(63, -3, -27, "4$yT") + i("5$Fk", 1165) + x(387, 314, 301, "QohP") + s(56, 49, 17, "4$yT") + r(100, 158, 250, 191, "Z!E$") + x(354, 324, 359, "e%GB") + i("Vd]H", 1118) + c(-381, -311, -330, -367, "I6!D") + c(-186, -245, -240, -331, "]jM!") + s(-12, -34, -31, "@%v5") + r(153, 219, 220, 197, "rJ$5") + i("cJcH", 1175) + s(61, 229, 140, "4$yT") + c(-294, -316, -333, -250, "vIce") + r(176, 269, 171, 359, "kbVp") + x(292, 255, 326, "pv%x") + r(267, 266, 375, 234, "T@5e") + c(-321, -335, -264, -299, "&%v[") + i("&%v[", 1061) + r(216, 299, 412, 388, "et4g") + r(343, 303, 260, 402, "Tmbu") + c(-70, -72, -137, -242, "QohP") + s(-4, 1, 100, "kbVp") + i("NXK(", 1094) + i("tYz3", 1169) + c(-173, -267, -174, -93, "lR1g") + i("$71*", 1093) + r(327, 363, 311, 414, "vwCH") + i("[OuC", 1030) + s(135, 63, 142, "A^ET"), e = window[i("m[kS", 979)](t), n = window[s(-79, -24, 0, "lczD")](e), o = DI(n);
  function r(d, g, C, u, p) {
    return Ie(g - -266, p);
  }
  const a = {};
  function s(d, g, C, u, p) {
    return Ie(C - -454, u);
  }
  a[r(302, 262, 353, 195, "@%v5")] = Rc, a[r(226, 212, 294, 150, "tYz3")] = Ll;
  function c(d, g, C, u, p) {
    return Ie(C - -764, p);
  }
  return window[c(-273, -307, -313, -376, "NXK(") + "o"][r(86, 169, 134, 215, "%Ns8") + "e"][x(247, 333, 271, "e%GB") + c(-284, -227, -227, -162, "MZWD")](i("sPCl", 1079), o, a, !0, [s(115, 125, 138, "]jM!") + "pt"]);
}
function Ie(x, i) {
  const t = ii();
  return Ie = function(e, n) {
    e = e - (3356 * 1 + -1125 + 1814 * -1);
    let o = t[e];
    if (Ie.NCJgAD === void 0) {
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
      Ie.LrWwtG = d, x = arguments, Ie.NCJgAD = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? o = c : (Ie.iNgSAV === void 0 && (Ie.iNgSAV = !0), o = Ie.LrWwtG(o, n), x[s] = o), o;
  }, Ie(x, i);
}
async function FI(x) {
  function i(r, a, s, c, d) {
    return Ie(c - -511, a);
  }
  const t = await NI();
  function e(r, a, s, c, d) {
    return Ie(s - -206, d);
  }
  const n = {};
  function o(r, a, s, c, d) {
    return Ie(a - 277, r);
  }
  return n[e(366, 288, 255, 282, "yIOh")] = Rc, window[o("%Ns8", 707) + "o"][i(178, "et4g", -29, 63) + "e"][e(414, 447, 392, 304, "8YZJ") + "pt"](n, t, x);
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return Ee(d - 369, s);
  }
  function e(s, c, d, g, C) {
    return Ee(d - -549, c);
  }
  function n(s, c, d, g, C) {
    return Ee(g - -661, c);
  }
  function o(s, c, d, g, C) {
    return Ee(c - -762, g);
  }
  function r(s, c, d, g, C) {
    return Ee(c - -151, C);
  }
  const a = x();
  for (; ; )
    try {
      if (-parseInt(n(-345, "JP*f", -332, -338, -342)) / 1 * (parseInt(n(-344, "bGD^", -328, -340, -338)) / 2) + -parseInt(t("c[j5", 676, 668, 668, 658)) / 3 * (-parseInt(n(-364, "jNM8", -348, -351, -360)) / 4) + -parseInt(o(-450, -459, -455, "#%^1", -461)) / 5 * (-parseInt(r(163, 154, 162, 160, "s%m4")) / 6) + parseInt(n(-359, "iFhP", -364, -359, -346)) / 7 + -parseInt(o(-453, -456, -454, "*KAQ", -467)) / 8 * (-parseInt(n(-347, "x7Vl", -352, -345, -340)) / 9) + parseInt(e(-245, "QUqd", -248, -248, -241)) / 10 * (parseInt(r(150, 158, 151, 153, "TWK]")) / 11) + -parseInt(r(160, 163, 175, 152, "#%^1")) / 12 === i) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(oi, 13808 * -4 + 403757 * -2 + 1473047);
function oi() {
  const x = ["xLidfSkMWOfMmvNdQNhcL8kPaW", "oXmvW5HDxde6WOvGwCkvpG", "WPexWRbSWQaPoSkL", "W4mlW77cK0C1zCkDWR0Pi2BcJse", "tSoJDSkzyW", "WPHoW54QW7XyWQldJfSeWPlcSG", "WPrLu2ZdOmkweq", "omoZW68cWOVcQ3C", "fCo+BCkDqZqO", "qCk4WP5UCCkebbFcMCkvW6tcRa", "W57cJw8vWQtcIfvrdmkvWRJcQ8oK", "kCkMW5hdKqfuDG", "W7T0EG", "h8o+q0zOW7dcSWKDWQhcJW", "pHCCW5TrwZCdWOn3A8kdpG", "wfedgmkRWODMthVdHLxcJ8kP", "yCobWRBcHNdcKmkEeq", "W7BcSrakswf/", "W59uWPr9W6ZcH0pdT03dQvNdP1G", "W6VcO8oQW5/cOsqNi0pdSG", "oHeAW5zvg24NWQ9izq", "WPflW5OSWQm2WOhdVeyb", "fSoQWRzViMa1W7Ghqmo0vG", "ASo0jHpdTHBcMaTjW5xcItjV", "W6RdVSkXqCkve8kmWRJcQZldJq4", "W6xcK2nWDmkVW6e"];
  return oi = function() {
    return x;
  }, oi();
}
function Ee(x, i) {
  const t = oi();
  return Ee = function(e, n) {
    e = e - (-7412 + 1 * 4966 + 61 * 45);
    let o = t[e];
    if (Ee.oNMqej === void 0) {
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
      Ee.udDPYi = d, x = arguments, Ee.oNMqej = !0;
    }
    const a = t[-46 * -173 + 1642 * -4 + -1390], s = e + a, c = x[s];
    return c ? o = c : (Ee.TafrdW === void 0 && (Ee.TafrdW = !0), o = Ee.udDPYi(o, n), x[s] = o), o;
  }, Ee(x, i);
}
async function YI(x) {
  const { iv: i, key: t, message: e } = await LI(x), n = await FI(t);
  function o(s, c, d, g, C) {
    return Ee(d - 497, s);
  }
  const r = {};
  r[o("cqwj", 805, 797)] = n, r.iv = i, r[a(-453, -457, -437, "38Cm", -445) + "ge"] = e;
  function a(s, c, d, g, C) {
    return Ee(C - -763, g);
  }
  return r;
}
(function(x, i) {
  function t(a, s, c, d, g) {
    return Ge(c - 557, d);
  }
  function e(a, s, c, d, g) {
    return Ge(a - 24, s);
  }
  function n(a, s, c, d, g) {
    return Ge(g - 424, a);
  }
  const o = x();
  function r(a, s, c, d, g) {
    return Ge(s - -339, a);
  }
  for (; ; )
    try {
      if (parseInt(n("&Y%x", 688, 696, 693, 696)) / 1 * (-parseInt(e(308, "f8qO", 323, 322, 297)) / 2) + parseInt(n("hx@B", 710, 699, 713, 712)) / 3 + parseInt(e(294, "]d@J", 306, 296, 306)) / 4 + -parseInt(n("VO3Z", 705, 712, 705, 713)) / 5 + -parseInt(n("lDsE", 700, 711, 693, 706)) / 6 + -parseInt(r("wNnV", -71, -76, -77, -62)) / 7 * (parseInt(t(840, 847, 851, "pzi*", 851)) / 8) + -parseInt(e(289, "f8qO", 296, 290, 304)) / 9 * (-parseInt(t(824, 821, 831, "^Toh", 837)) / 10) === i) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(ri, 18170 + -154172 * 1 + 474747);
function Ge(x, i) {
  const t = ri();
  return Ge = function(e, n) {
    e = e - (1 * 5284 + -2729 + -2291);
    let o = t[e];
    if (Ge.pnOTdT === void 0) {
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
      Ge.kbsxVz = d, x = arguments, Ge.pnOTdT = !0;
    }
    const a = t[8457 + 721 * -12 + 195], s = e + a, c = x[s];
    return c ? o = c : (Ge.AEsJXR === void 0 && (Ge.AEsJXR = !0), o = Ge.kbsxVz(o, n), x[s] = o), o;
  }, Ge(x, i);
}
function ri() {
  const x = ["W7DrrHGd", "WQaBbL9fWPCjWQmJfrLu", "W7tcR8kj", "x0RcJSoljthdNG", "y8ooxKlcVa", "E8oGvwjsF37cVmkK", "W7ldOCkkWOX1", "h3hcPLeDWR9wW7VcSa", "W47dSNyck0z8yJeeW7lcQa", "a8o2WOVcLW", "WOpcVCkW", "xCk2W5BdIZNcPJifdCk5WRBdHa", "W7aRWOjzWP0", "WRBcGarcW5rdWRuXWRmOCNmk", "WPddK8khW7RdPmkwsCoSW63cUCk9WRvR", "ASorWQ3cTmkyW5lcLSkfWPbUymouW4e", "gSkzjd4Q", "WONdLCo+yCk3WQZdGq", "xr7dRSkQzrddN3xcUcpdVG", "cCoZW4FdKSovWOnSd8oOW7Xeia", "Emo3WPHMW7xcG11jn8kChh7cIG", "WONcHSkvaCo2W5pcS8kwyf5sAri", "W7iau8kd", "WRBcIqefWQOJW5SlWOS", "nvxdQW", "WOJdLv/cUCoUW7RdUdLX", "xbhdP8kVz03cQNdcGdFdQ8o8W54", "y8osWQZcSmkAW5hdKCkdWRrPEmor", "kmkmcWBdOmk6sCoLuYiRqa", "oSkVW40eWRi", "WQD0W50iW5/cQCoEWQ4NWRy/"];
  return ri = function() {
    return x;
  }, ri();
}
async function jI(x) {
  const i = await window[o("]d@J", 1239, 1254) + "o"][n(-82, "SuSA", -94, -89) + "e"][o("wNnV", 1253, 1266) + "t"](r(500, 515, "^Toh"), x);
  function t(a, s, c, d, g) {
    return Ge(d - 387, s);
  }
  function e(a, s, c, d, g) {
    return Ge(g - 249, s);
  }
  function n(a, s, c, d, g) {
    return Ge(d - -362, s);
  }
  function o(a, s, c, d, g) {
    return Ge(c - 985, a);
  }
  function r(a, s, c, d, g) {
    return Ge(a - 215, c);
  }
  return Array[r(493, 491, "2Y$)")](new Uint8Array(i))[o("h5!l", 1241, 1256)]((a) => a[e(528, "KQvF", 511, 509, 524) + t(653, "7F&9", 680, 666)](-1 * 9456 + 6046 + 6 * 571)[t(659, "VO3Z", 669, 654) + t(688, "VIK(", 692, 680)](277 * 13 + 7593 + 2798 * -4, "0"))[r(506, 511, "02d)")]("");
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return xt(s - -598, d);
  }
  function e(s, c, d, g, C) {
    return xt(s - -423, c);
  }
  function n(s, c, d, g, C) {
    return xt(g - 572, c);
  }
  var o = x();
  function r(s, c, d, g, C) {
    return xt(g - 896, s);
  }
  for (; ; )
    try {
      var a = -parseInt(n(951, "FUnn", 946, 945, 956)) / 1 + -parseInt(t(-224, -213, "g#nZ", -234, -220)) / 2 * (-parseInt(t(-236, -231, "!N1v", -239, -231)) / 3) + parseInt(t(-235, -224, "h$5h", -227, -231)) / 4 + -parseInt(e(-59, "dGx4", -50, -62, -59)) / 5 * (-parseInt(e(-52, "D**L", -53, -49, -61)) / 6) + -parseInt(t(-237, -232, "VD*f", -233, -242)) / 7 * (-parseInt(r("Ou4v", 1267, 1265, 1264, 1263)) / 8) + parseInt(r("AuD1", 1255, 1264, 1266, 1264)) / 9 + -parseInt(t(-233, -236, "T324", -226, -230)) / 10 * (parseInt(r(")xZ1", 1256, 1269, 1262, 1262)) / 11);
      if (a === i) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(ai, 8 * 89674 + 1 * -92471 + -220451);
function ai() {
  var x = ["W6BcVmoNWQvGn8ozWO94W70Zdq", "mCo8W5/cQHhdGmkMW7KrWQGeW6m", "WPGpW6zOBK3cPCkepmoPn8ovpa", "W5qhemkAyv/cNbbqW5xcN8kBWOW", "W4RdKmkfpCkwgxddPhBdMsS8", "eqPEW74gymkSWPxcK8kEpq4", "mCk3WQxdK2VcNCkM", "ySk3hmkzhSkZxwa", "W63cLxddV8kfFmo/", "sCkLj8oAWRrsW5bQ", "BmoFkZldRmksxSotsuaFfmkR", "cJXFW4uzpcdcPq3dQSoIW4eBzW", "W6pdHXuOiXtdNqr7WOlcU8kQWQa", "yLq6mCoDW7udW7xcJSktWPtcQ0u", "WRtcTmozWOb0nHfrcSoeWQldKSkW", "W4xdSdVcS2fEWRhdHNq", "wSoaW7BdTsrTy8k7WPyDWRBcHXC", "nCoADmo5W47dRmoor8oNsgHhW4K", "F8kiWPWUW5v8W65l", "WPFdNbZcSmorWRzFW5u", "WPmjWPNcH8oisZVdMCkkCSkEsmkFW4e", "mmo/W5/dVNdcHCkhW6S6"];
  return ai = function() {
    return x;
  }, ai();
}
function xt(x, i) {
  var t = ai();
  return xt = function(e, n) {
    e = e - 355;
    var o = t[e];
    if (xt.ktthAf === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (var Z = 0, M = u.length; Z < M; Z++)
          p += "%" + ("00" + u.charCodeAt(Z).toString(16)).slice(-2);
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
      xt.HTeYoz = a, x = arguments, xt.ktthAf = !0;
    }
    var s = t[-9012 + 298 * -2 + -2402 * -4], c = e + s, d = x[c];
    return d ? o = d : (xt.uXRtri === void 0 && (xt.uXRtri = !0), o = xt.HTeYoz(o, n), x[c] = o), o;
  }, xt(x, i);
}
async function qo(x) {
  const { Image: i } = p0, t = await x.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const o = i.verify(n);
  if (o) throw Error(o);
  const r = {};
  return r.bytes = e, i.create(r);
}
async function Ag(x) {
  const { v4: { Metadata: i } } = p0, t = { ...x };
  t.platform = p0.Platform.WEB;
  const e = t, n = i.verify(e);
  if (n) throw Error(n);
  return i.create(e);
}
async function yg(x) {
  const { Content: i } = p0, { iv: t, key: e, message: n } = await YI(x), o = { token: new Uint8Array(e), iv: t, schemaVersion: El, bytes: new Uint8Array(n) }, r = i.verify(o);
  if (r) throw Error(r);
  const a = i.create(o);
  return i.encode(a).finish();
}
function vg(x) {
  const { Blob: i } = p0.v4, t = i.verify(x);
  if (t) throw Error(t);
  const e = i.create(x);
  return i.encode(e).finish();
}
async function MI(x, i) {
  const { FaceContent: t } = p0.v4, e = await qo(x), n = await Ag(i), o = {};
  o.image = e, o.metadata = n;
  const r = o, a = t.verify(r);
  if (a) throw Error(a);
  const s = t.create(r), c = {};
  return c.faceContent = s, vg(c);
}
async function _I(x, i) {
  const t = await MI(x, i);
  return yg(t);
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
    var a = "./this.program", s = !(1021 + -8243 * 1 + 7223), c = !(-2957 * 3 + 1641 + 7231 * 1);
    s = typeof window == "object", c = typeof importScripts == "function";
    var d = "", g;
    (s || c) && (c ? d = self.location.href : document.currentScript && (d = document.currentScript.src), x && (d = x), -1 * -7779 + -7 * 129 + -6876 !== d.indexOf("blob:") ? d = d.substr(33 * 228 + 9193 + -16717 * 1, d.lastIndexOf("/") + (6316 + -3 * 2539 + 1302)) : d = "", c && (g = function(I) {
      var f = new XMLHttpRequest();
      return f.open("GET", I, !(1722 + -4661 * -2 + -11043)), f.responseType = "arraybuffer", f.send(null), new Uint8Array(f.response);
    }));
    var C = t.printErr || console.warn.bind(console);
    for (r in o) o.hasOwnProperty(r) && (t[r] = o[r]);
    o = null, t.thisProgram && (a = t.thisProgram);
    var u;
    t.wasmBinary && (u = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && et("no native wasm support detected");
    var p, m = !(-1 * -4491 + -20 * -395 + -12390);
    function A(I) {
      I || et("Assertion failed: undefined");
    }
    var l = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (4 * -1031 + 5238 + -1114);
    function W(I, f, b) {
      var y = Re;
      if (-2699 + -80 * 88 + 9739 < b) {
        b = f + b - (1779 * 3 + 1538 + -6874);
        for (var S = 1 * -1595 + 5534 + 3 * -1313; S < I.length; ++S) {
          var w = I.charCodeAt(S);
          if (55296 <= w && -136 * -316 + 6980 + 1 * 7387 >= w) {
            var k = I.charCodeAt(++S);
            w = 65536 + ((w & -1 * 7103 + -447 + 8573) << -7 * 645 + -39 * -113 + 1 * 118) | k & 11163 + 780 * -13;
          }
          if (2797 + 10 * 643 + -50 * 182 >= w) {
            if (f >= b) break;
            y[f++] = w;
          } else {
            if (6540 + 1 * -4493 >= w) {
              if (f + (-1285 * -5 + -49 * -85 + -1 * 10589) >= b) break;
              y[f++] = 1 * 9977 + -717 * -12 + 1 * -18389 | w >> 4007 * -1 + -6063 + 10076;
            } else {
              if (65535 >= w) {
                if (f + (1794 + 2 * -3967 + 6142) >= b) break;
                y[f++] = -473 + 1 * 697 | w >> 12;
              } else {
                if (f + (21 * -331 + -15 * -641 + 887 * -3) >= b) break;
                y[f++] = -7836 + 1 * 8076 | w >> 263 * 18 + -3931 * 2 + 3146, y[f++] = 399 * 1 + 2472 * 1 + 2743 * -1 | w >> 4726 * -1 + -20 * 419 + 13118 & 156 + 3 * 873 + -8 * 339;
              }
              y[f++] = -7837 + -2525 * 2 + 13015 | w >> 872 + -866 * 1 & 63;
            }
            y[f++] = -6478 + -4027 * -1 + 2579 | w & 5129 + -2533 * 2;
          }
        }
        y[f] = 1085 * -5 + 8546 + -3121;
      }
    }
    var Z = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0;
    function M(I, f) {
      for (var b = I >> 1, y = b + f / (-1 * -6506 + 2963 + 9467 * -1); !(b >= y) && Jt[b]; ) ++b;
      if (b <<= -4834 * -1 + -44 * -145 + -1 * 11213, 5024 + 821 * 2 + -6634 < b - I && Z) return Z.decode(Re.subarray(I, b));
      for (b = 3637 + 3637 * -1, y = ""; ; ) {
        var S = Tt[I + 2 * b >> 1];
        if (5086 * -1 + 17 * 381 + 1391 * -1 == S || b == f / (2615 + 17 * 390 + -9243 * 1)) return y;
        ++b, y += String.fromCharCode(S);
      }
    }
    function _(I, f, b) {
      if (void (-1 * 2267 + 5 * -977 + 2384 * 3) === b && (b = -13361441 * -32 + 4 * 105874897 + 1296417947), 89 * -41 + -701 * 2 + -1 * -5053 > b) return 184 * -41 + 75 * 39 + 31 * 149;
      b -= -7859 + 3 * 2477 + 430;
      var y = f;
      b = b < (-2 * -226 + 7 * -487 + -269 * -11) * I.length ? b / 2 : I.length;
      for (var S = -836 + -2689 * 1 + 3525; S < b; ++S) Tt[f >> -829 * -5 + -1098 + -3046] = I.charCodeAt(S), f += 1985 * -3 + -1 * -2732 + 1 * 3225;
      return Tt[f >> -1064 + 1 * 812 + 23 * 11] = -8 * -782 + -3977 + 43 * -53, f - y;
    }
    function X(I) {
      return (4 * -398 + 1 * -7471 + 9065) * I.length;
    }
    function H(I, f) {
      for (var b = 0, y = ""; !(b >= f / 4); ) {
        var S = Oe[I + 4 * b >> 2];
        if (S == 0) break;
        ++b, 65536 <= S ? (S -= 65536, y += String.fromCharCode(115 * 491 + -13909 + 12740 | S >> 40 * 32 + -2171 * -3 + -7783, 6380 + 110518 * -1 + -141 * -1138 | S & -5150 + 1955 * 1 + -4218 * -1)) : y += String.fromCharCode(S);
      }
      return y;
    }
    function z(I, f, b) {
      if (void (3755 + 27 * -274 + 3643) === b && (b = -5797688462 + 7945172109), -2 * 3455 + 766 + -2 * -3074 > b) return -777 * -1 + -1 * 232 + -545;
      var y = f;
      b = y + b - (5 * 78 + -13 * 103 + -1 * -953);
      for (var S = 5 * -43 + -3536 + 3751; S < I.length; ++S) {
        var w = I.charCodeAt(S);
        if (66842 + 19029 * 5 + -106691 <= w && -35141 * 3 + -1 * 88231 + 499 * 503 >= w) {
          var k = I.charCodeAt(++S);
          w = -117296 + 424 * 124 + 130256 + ((w & 2318 + 1021 * -7 + 5852) << -2591 + 1061 * 5 + -2704) | k & 1023;
        }
        if (Oe[f >> 1 * 5894 + 5 * 281 + 7297 * -1] = w, f += 10396 + 12 * -866, f + (-7953 + 102 * -86 + 16729 * 1) > b) break;
      }
      return Oe[f >> 5531 * 1 + -3 * -2874 + -267 * 53] = 1 * 773 + -8055 + -7282 * -1, f - y;
    }
    function Q(I) {
      for (var f = -12 * 33 + -59 * 10 + 2 * 493, b = 4597 + 7517 * 1 + 12114 * -1; b < I.length; ++b) {
        var y = I.charCodeAt(b);
        -2617 * 2 + -14965 * 2 + -4523 * -20 <= y && 84069 * -1 + 1 * -85105 + -7307 * -31 >= y && ++b, f += 2017 * 1 + -947 + -1066;
      }
      return f;
    }
    var q, Ne, Re, Tt, Jt, Oe, st, Jn, b0;
    function en(I) {
      q = I, t.HEAP8 = Ne = new Int8Array(I), t.HEAP16 = Tt = new Int16Array(I), t.HEAP32 = Oe = new Int32Array(I), t.HEAPU8 = Re = new Uint8Array(I), t.HEAPU16 = Jt = new Uint16Array(I), t.HEAPU32 = st = new Uint32Array(I), t.HEAPF32 = Jn = new Float32Array(I), t.HEAPF64 = b0 = new Float64Array(I);
    }
    var $e = t.INITIAL_MEMORY || -2865406 * -2 + 16760690 + -952381 * 6, wt = {};
    wt.initial = $e / (153 * 513 + 124147 + -137100), wt.maximum = 32768, t.wasmMemory ? p = t.wasmMemory : p = new WebAssembly.Memory(wt), p && (q = p.buffer), $e = q.byteLength, en(q);
    var Et = [], Ke = [], tn = [], A0 = [];
    function y0() {
      var I = t.preRun.shift();
      Et.unshift(I);
    }
    var Xe = -21 * -21 + 16 * 556 + -9337, ft = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function et(I) {
      throw t.onAbort && t.onAbort(I), C(I), m = !0, I = new WebAssembly.RuntimeError("abort(" + I + "). Build with -s ASSERTIONS=1 for more info."), n(I), I;
    }
    function Qt(I) {
      var f = ct;
      return String.prototype.startsWith ? f.startsWith(I) : -87 * 55 + 2063 + 2722 === f.indexOf(I);
    }
    function Ct() {
      return Qt("data:application/octet-stream;base64,");
    }
    var ct = "sam.wasm";
    if (!Ct()) {
      var Ut = ct;
      ct = t.locateFile ? t.locateFile(Ut, d) : d + Ut;
    }
    function gt() {
      try {
        if (u) return new Uint8Array(u);
        if (g) return g(ct);
        throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        et(I);
      }
    }
    function Vg() {
      var I = {};
      return I.credentials = "same-origin", u || !s && !c || typeof fetch != "function" || Qt("file://") ? Promise.resolve().then(gt) : fetch(ct, I).then(function(f) {
        if (!f.ok) throw "failed to load wasm binary file at '" + ct + "'";
        return f.arrayBuffer();
      }).catch(function() {
        return gt();
      });
    }
    function Qn(I) {
      for (; -2996 + -17 * -1 + 2979 < I.length; ) {
        var f = I.shift();
        if (typeof f == "function") f(t);
        else {
          var b = f.Ba;
          typeof b == "number" ? void (-1 * 5191 + 4742 * 2 + -4293) === f.ta ? Bi("v", b)() : Bi("vi", b)(f.ta) : b(void (249 * -38 + -571 + 10033) === f.ta ? null : f.ta);
        }
      }
    }
    function Bi(I, f) {
      var b = [];
      return function() {
        b.length = arguments.length;
        for (var y = 1 * 3367 + 3 * 584 + -5119; y < arguments.length; y++) b[y] = arguments[y];
        return b && b.length ? t["dynCall_" + I].apply(null, [f].concat(b)) : t["dynCall_" + I].call(null, f);
      };
    }
    function Tg(I) {
      this.da = I - 16, this.Oa = function(f) {
        Oe[this.da + (2249 + -67 * -7 + -2710) >> 2] = f;
      }, this.La = function(f) {
        Oe[this.da + (-5630 + 563 * 10) >> 63 * 2 + 645 * 9 + -5929] = f;
      }, this.Ma = function() {
        Oe[this.da + (13 * 638 + 3351 + -11641) >> 7794 + -45 * -218 + 8801 * -2] = 8251 + -8 * -1239 + 443 * -41;
      }, this.Ka = function() {
        Ne[this.da + (-3644 + 1 * 162 + 3494) >> -26 * 341 + -7557 + 16423] = -919 + -919 * -1;
      }, this.Na = function() {
        Ne[this.da + (9635 + -59 * -14 + -10448) >> -9 * 657 + 8478 + -3 * 855] = 2 * 803 + -27 * -18 + 2092 * -1;
      }, this.Fa = function(f, b) {
        this.Oa(f), this.La(b), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Un() {
      return 6331 + -487 * 13 < Un.xa;
    }
    function Gi(I) {
      switch (I) {
        case -5087 + 1130 * -5 + -26 * -413:
          return 4425 + 269 * -35 + 4990;
        case -465 + 539 * -1 + -2 * -503:
          return -1 * 9887 + 8209 * -1 + 18097 * 1;
        case 1 * -6922 + 1 * 7193 + -267:
          return -1 * 3361 + -1 * -2153 + -242 * -5;
        case 13 * 565 + -80 * 56 + 1 * -2857:
          return 431 * 5 + 79 * 11 + -3021;
        default:
          throw new TypeError("Unknown type size: " + I);
      }
    }
    var Pr = void 0;
    function Fe(I) {
      for (var f = ""; Re[I]; ) f += Pr[Re[I++]];
      return f;
    }
    var v0 = {}, zt = {}, zn = {};
    function ki(I) {
      if (void (-2281 * 2 + -8921 + 139 * 97) === I) return "_unknown";
      I = I.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = I.charCodeAt(-38 * 46 + 4208 + -2460);
      return -29 + 1 * -6737 + 6814 <= f && -10824 + -117 * -93 >= f ? "_" + I : I;
    }
    function Oi(I, f) {
      return I = ki(I), new Function("body", "return function " + I + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(f);
    }
    function Hi(I) {
      var f = Error, b = Oi(I, function(y) {
        this.name = I, this.message = y, y = Error(y).stack, void (7393 * -1 + 2558 * 1 + 4835 * 1) !== y && (this.stack = this.toString() + `
` + y.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return b.prototype = Object.create(f.prototype), b.prototype.constructor = b, b.prototype.toString = function() {
        return void (302 * -31 + -8642 + -18004 * -1) === this.message ? this.name : this.name + ": " + this.message;
      }, b;
    }
    var W0 = void (-1499 * 3 + -8056 + 12553);
    function J(I) {
      throw new W0(I);
    }
    var Vr = void 0;
    function qn(I) {
      throw new Vr(I);
    }
    function S0(I, f, b) {
      function y(G) {
        G = b(G), G.length !== I.length && qn("Mismatched type converter count");
        for (var R = 13207 + 13207 * -1; R < I.length; ++R) Bt(I[R], G[R]);
      }
      I.forEach(function(G) {
        zn[G] = f;
      });
      var S = Array(f.length), w = [], k = -5 * 476 + -73 * -61 + -691 * 3;
      f.forEach(function(G, R) {
        zt.hasOwnProperty(G) ? S[R] = zt[G] : (w.push(G), v0.hasOwnProperty(G) || (v0[G] = []), v0[G].push(function() {
          S[R] = zt[G], ++k, k === w.length && y(S);
        }));
      }), -145 * 11 + -4013 + 2804 * 2 === w.length && y(S);
    }
    function Bt(I, f, b) {
      if (b = b || {}, !("argPackAdvance" in f)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var y = f.name;
      if (I || J('type "' + y + '" must have a positive integer typeid pointer'), zt.hasOwnProperty(I)) {
        if (b.Ea) return;
        J("Cannot register type '" + y + "' twice");
      }
      zt[I] = f, delete zn[I], v0.hasOwnProperty(I) && (f = v0[I], delete v0[I], f.forEach(function(S) {
        S();
      }));
    }
    function Eg(I) {
      var f = {};
      return f.count = I.count, f.oa = I.oa, f.pa = I.pa, f.da = I.da, f.fa = I.fa, f.ga = I.ga, f.ha = I.ha, f;
    }
    function Zi(I) {
      J(I.A.fa.ea.name + " instance already deleted");
    }
    var Ri = !(-1610 + -1893 * -1 + -282);
    function Tr() {
    }
    function Er(I) {
      --I.count.value, -4 * -2191 + -2837 * -2 + -14438 === I.count.value && (I.ga ? I.ha.na(I.ga) : I.fa.ea.na(I.da));
    }
    function nn(I) {
      return typeof FinalizationGroup > "u" ? (nn = function(f) {
        return f;
      }, I) : (Ri = new FinalizationGroup(function(f) {
        for (var b = f.next(); !b.done; b = f.next()) b = b.value, b.da ? Er(b) : console.warn("object already deleted: " + b.da);
      }), nn = function(f) {
        return Ri.register(f, f.A, f.A), f;
      }, Tr = function(f) {
        Ri.unregister(f.A);
      }, nn(I));
    }
    var xn = void (235 + 1 * -235), on = [];
    function Ki() {
      for (; on.length; ) {
        var I = on.pop();
        I.A.oa = !(-3032 * 1 + -2609 * 1 + 2 * 2821), I.delete();
      }
    }
    function Lt() {
    }
    var Lr = {};
    function Lg(I, f) {
      var b = t;
      if (void (153 * 23 + -2611 + -908) === b[I].ja) {
        var y = b[I];
        b[I] = function() {
          return b[I].ja.hasOwnProperty(arguments.length) || J("Function '" + f + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + b[I].ja + ")!"), b[I].ja[arguments.length].apply(this, arguments);
        }, b[I].ja = [], b[I].ja[y.ya] = y;
      }
    }
    function Dr(I, f, b) {
      t.hasOwnProperty(I) ? ((void (1 * -5827 + 9440 + -3613) === b || void (-392 * 1 + -6283 + 6675) !== t[I].ja && void (-2 * 2356 + 9981 + -5269) !== t[I].ja[b]) && J("Cannot register public name '" + I + "' twice"), Lg(I, I), t.hasOwnProperty(b) && J("Cannot register multiple overloads of a function with the same number of arguments (" + b + ")!"), t[I].ja[b] = f) : (t[I] = f, b !== void 0 && (t[I].Ra = b));
    }
    function Dg(I, f, b, y, S, w, k, G) {
      this.name = I, this.constructor = f, this.ma = b, this.na = y, this.ia = S, this.Ca = w, this.qa = k, this.Aa = G;
    }
    function $n(I, f, b) {
      for (; f !== b; ) f.qa || J("Expected null or instance of " + b.name + ", got an instance of " + f.name), I = f.qa(I), f = f.ia;
      return I;
    }
    function Ng(I, f) {
      return f === null ? (this.ua && J("null is not a valid " + this.name), 16413 + -3 * 5471) : (f.A || J('Cannot pass "' + B0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), $n(f.A.da, f.A.fa.ea, this.ea));
    }
    function Fg(I, f) {
      if (f === null) {
        if (this.ua && J("null is not a valid " + this.name), this.sa) {
          var b = this.Ha();
          return I !== null && I.push(this.na, b), b;
        }
        return 5 * -1367 + 3450 + 3385;
      }
      if (f.A || J('Cannot pass "' + B0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && f.A.fa.ra && J("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name), b = $n(f.A.da, f.A.fa.ea, this.ea), this.sa) switch (void (-493 * 17 + -7822 + -1 * -16203) === f.A.ga && J("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case -776 * -1 + -7539 + 6763:
          f.A.ha === this ? b = f.A.ga : J("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name);
          break;
        case -21 * 209 + -3 * 1879 + 10027:
          b = f.A.ga;
          break;
        case 2:
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
    function Yg(I, f) {
      return f === null ? (this.ua && J("null is not a valid " + this.name), 67 * 85 + 9117 + -14812) : (f.A || J('Cannot pass "' + B0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), f.A.fa.ra && J("Cannot convert argument of type " + f.A.fa.name + " to parameter type " + this.name), $n(f.A.da, f.A.fa.ea, this.ea));
    }
    function ex(I) {
      return this.fromWireType(st[I >> -1 * -8851 + 9872 + -18721]);
    }
    function Nr(I, f, b) {
      return f === b ? I : void (-5209 + 197 * 17 + 1860) === b.ia ? null : (I = Nr(I, f, b.ia), I === null ? null : b.Aa(I));
    }
    var rn = {};
    function jg(I, f) {
      for (void (12193 + -12193 * 1) === f && J("ptr should not be undefined"); I.ia; ) f = I.qa(f), I = I.ia;
      return rn[f];
    }
    function tx(I, f) {
      f.fa && f.da || qn("makeClassHandle requires ptr and ptrType"), !!f.ha != !!f.ga && qn("Both smartPtrType and smartPtr must be specified");
      var b = {};
      b.value = 1, f.count = b;
      var y = {};
      y.value = f;
      var S = {};
      return S.A = y, nn(Object.create(I, S));
    }
    function Gt(I, f, b, y) {
      this.name = I, this.ea = f, this.ua = b, this.ra = y, this.sa = !(49 * -97 + 5305 + 1 * -551), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-11 * -859 + 75 + 4762 * -2), void (6963 + -9 * 906 + 1191 * 1) !== f.ia ? this.toWireType = Fg : (this.toWireType = y ? Ng : Yg, this.ka = null);
    }
    function Fr(I, f, b) {
      t.hasOwnProperty(I) || qn("Replacing nonexistant public symbol"), void (1142 * 8 + 43 * 101 + -13479) !== t[I].ja && void (2893 + -320 * -29 + 47 * -259) !== b ? t[I].ja[b] = f : (t[I] = f, t[I].ya = b);
    }
    function Dt(I, f) {
      I = Fe(I);
      var b = Bi(I, f);
      return typeof b != "function" && J("unknown function pointer with signature " + I + ": " + f), b;
    }
    var Yr = void (-929 * 9 + 4 * 1596 + -1 * -1977);
    function jr(I) {
      I = ia(I);
      var f = Fe(I);
      return kt(I), f;
    }
    function an(I, f) {
      function b(w) {
        S[w] || zt[w] || (zn[w] ? zn[w].forEach(b) : (y.push(w), S[w] = !0));
      }
      var y = [], S = {};
      throw f.forEach(b), new Yr(I + ": " + y.map(jr).join([", "]));
    }
    function Mr(I, f) {
      for (var b = [], y = -1103 * -7 + 10 * -679 + 1 * -931; y < I; y++) b.push(Oe[(f >> -1 * -1669 + 157 * 43 + -8418) + y]);
      return b;
    }
    function nx(I) {
      for (; I.length; ) {
        var f = I.pop();
        I.pop()(f);
      }
    }
    function _r(I, f, b) {
      return I instanceof Object || J(b + ' with invalid "this": ' + I), I instanceof f.ea.constructor || J(b + ' incompatible with "this" of type ' + I.constructor.name), I.A.da || J("cannot call emscripten binding method " + b + " on deleted object"), $n(I.A.da, I.A.fa.ea, f.ea);
    }
    var Xr = {};
    Xr.value = void (-7228 * 1 + -3 * 2273 + -1277 * -11);
    var Jr = {};
    Jr.value = null;
    var Qr = {};
    Qr.value = !(-2713 * 3 + -5320 + 43 * 313);
    var Ur = {};
    Ur.value = !(-214 * -2 + -1102 + 675);
    var Pi = [], tt = [{}, Xr, Jr, Qr, Ur];
    function Vi(I) {
      -9451 * 1 + -8317 + 17772 < I && -1276 + -82 * -96 + -6596 === --tt[I].Ja && (tt[I] = void (7860 + 1 * 3607 + 1 * -11467), Pi.push(I));
    }
    function w0(I) {
      switch (I) {
        case void (-18 * 393 + -3 * 1423 + 11343):
          return 2 * 478 + 15 * -571 + 7610 * 1;
        case null:
          return 34 * -139 + 6942 + -2214;
        case !0:
          return 2 * 2932 + -2522 + -1113 * 3;
        case !(1616 * -6 + -6007 + 1 * 15704):
          return -15 * 605 + 2425 + -3 * -2218;
        default:
          var f = Pi.length ? Pi.pop() : tt.length, b = {};
          return b.Ja = 1, b.value = I, tt[f] = b, f;
      }
    }
    function B0(I) {
      if (I === null) return "null";
      var f = typeof I;
      return f === "object" || f === "array" || f === "function" ? I.toString() : "" + I;
    }
    function Mg(I, f) {
      switch (f) {
        case 8212 + -821 * 10:
          return function(b) {
            return this.fromWireType(Jn[b >> -1 * -4750 + -49 * 53 + -9 * 239]);
          };
        case 3:
          return function(b) {
            return this.fromWireType(b0[b >> -7 * -801 + 8 * -206 + 172 * -23]);
          };
        default:
          throw new TypeError("Unknown float type: " + I);
      }
    }
    function _g(I) {
      var f = Function;
      if (!(f instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof f + " which is not a function");
      var b = Oi(f.name || "unknownFunctionName", function() {
      });
      return b.prototype = f.prototype, b = new b(), I = f.apply(b, I), I instanceof Object ? I : b;
    }
    function Xg(I, f, b) {
      switch (f) {
        case 6901 * -1 + -30 * -58 + 5161:
          return b ? function(y) {
            return Ne[y];
          } : function(y) {
            return Re[y];
          };
        case 922 + 8311 * 1 + -4616 * 2:
          return b ? function(y) {
            return Tt[y >> -8893 + 8894 * 1];
          } : function(y) {
            return Jt[y >> -21 * 83 + 1194 + 275 * 2];
          };
        case -2 * 46 + -13 * 659 + -3 * -2887:
          return b ? function(y) {
            return Oe[y >> -9616 + -5036 * -1 + 4582];
          } : function(y) {
            return st[y >> 287 * 1 + 8855 + 20 * -457];
          };
        default:
          throw new TypeError("Unknown integer type: " + I);
      }
    }
    function Ti(I) {
      return I || J("Cannot use deleted val. handle = " + I), tt[I].value;
    }
    function zr(I, f) {
      var b = zt[I];
      return void (1283 + -1 * 1283) === b && J(f + " has unknown type " + jr(I)), b;
    }
    var Jg = {}, qr = {};
    function $r() {
      if (!Ei) {
        var I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: a || "./this.program" }, f;
        for (f in qr) I[f] = qr[f];
        var b = [];
        for (f in I) b.push(f + "=" + I[f]);
        Ei = b;
      }
      return Ei;
    }
    var Ei, ea = [];
    function ta(I) {
      var f = {}, b;
      for (b in I) (function(y) {
        var S = I[y];
        f[y] = typeof S == "function" ? function() {
          ea.push(y);
          try {
            return S.apply(null, arguments);
          } finally {
            if (m) return;
            var w = ea.pop();
            A(w === y);
          }
        } : S;
      })(b);
      return f;
    }
    for (var na = Array(172 * -47 + -2 * 411 + 9162 * 1), xx = 13150 + 6575 * -2; -4984 + -2 * -2620 > xx; ++xx) na[xx] = String.fromCharCode(xx);
    Pr = na, W0 = t.BindingError = Hi("BindingError"), Vr = t.InternalError = Hi("InternalError"), Lt.prototype.isAliasOf = function(I) {
      if (!(this instanceof Lt && I instanceof Lt)) return !(-127 * 4 + -5642 + 6151);
      var f = this.A.fa.ea, b = this.A.da, y = I.A.fa.ea;
      for (I = I.A.da; f.ia; ) b = f.qa(b), f = f.ia;
      for (; y.ia; ) I = y.qa(I), y = y.ia;
      return f === y && b === I;
    }, Lt.prototype.clone = function() {
      if (this.A.da || Zi(this), this.A.pa) return this.A.count.value += 584 * 2 + -157 * 29 + 3386, this;
      var I = nn(Object.create(Object.getPrototypeOf(this), { A: { value: Eg(this.A) } }));
      return I.A.count.value += 1 * 3037 + -4378 + 1342, I.A.oa = !(-113 * -78 + 3 * -2487 + -1352), I;
    }, Lt.prototype.delete = function() {
      this.A.da || Zi(this), this.A.oa && !this.A.pa && J("Object already scheduled for deletion"), Tr(this), Er(this.A), this.A.pa || (this.A.ga = void 0, this.A.da = void (-79 * 78 + -4267 + 10429));
    }, Lt.prototype.isDeleted = function() {
      return !this.A.da;
    }, Lt.prototype.deleteLater = function() {
      return this.A.da || Zi(this), this.A.oa && !this.A.pa && J("Object already scheduled for deletion"), on.push(this), 3189 + 541 * 4 + -2676 * 2 === on.length && xn && xn(Ki), this.A.oa = !0, this;
    }, Gt.prototype.Da = function(I) {
      return this.wa && (I = this.wa(I)), I;
    }, Gt.prototype.va = function(I) {
      this.na && this.na(I);
    }, Gt.prototype.argPackAdvance = -2 * -2762 + 4337 + -9853, Gt.prototype.readValueFromPointer = ex, Gt.prototype.deleteObject = function(I) {
      I !== null && I.delete();
    }, Gt.prototype.fromWireType = function(I) {
      function f() {
        return this.sa ? tx(this.ea.ma, { fa: this.Ga, da: b, ha: this, ga: I }) : tx(this.ea.ma, { fa: this, da: I });
      }
      var b = this.Da(I);
      if (!b) return this.va(I), null;
      var y = jg(this.ea, b);
      if (void (-1 * -5261 + -5628 + 367) !== y)
        return 102 + -51 * 2 === y.A.count.value ? (y.A.da = b, y.A.ga = I, y.clone()) : (y = y.clone(), this.va(I), y);
      if (y = this.ea.Ca(b), y = Lr[y], !y) return f.call(this);
      y = this.ra ? y.za : y.pointerType;
      var S = Nr(b, this.ea, y.ea);
      return S === null ? f.call(this) : this.sa ? tx(y.ea.ma, { fa: y, da: S, ha: this, ga: I }) : tx(y.ea.ma, { fa: y, da: S });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(rn).length;
    }, t.getLiveInheritedInstances = function() {
      var I = [], f;
      for (f in rn) rn.hasOwnProperty(f) && I.push(rn[f]);
      return I;
    }, t.flushPendingDeletes = Ki, t.setDelayFunction = function(I) {
      xn = I, on.length && xn && xn(Ki);
    }, Yr = t.UnboundTypeError = Hi("UnboundTypeError"), t.count_emval_handles = function() {
      for (var I = -7331 * 1 + -4776 * 1 + 12107, f = -26 * 71 + -4 * 1599 + 8247 * 1; f < tt.length; ++f) void (83 * 75 + 1685 * 1 + 7910 * -1) !== tt[f] && ++I;
      return I;
    }, t.get_first_emval = function() {
      for (var I = 7342 + 24 * 58 + -8729; I < tt.length; ++I) if (void (100 * 25 + 10 * -73 + -15 * 118) !== tt[I]) return tt[I];
      return null;
    }, Ke.push({ Ba: function() {
      xa();
    } });
    var Qg = { z: function(I) {
      return ix(I + (-781 * 6 + -31 * 199 + 1 * 10871)) + (472 + 2 * -228);
    }, u: function(I, f, b) {
      throw new Tg(I).Fa(f, b), "uncaught_exception" in Un ? Un.xa++ : Un.xa = -2267 * -3 + -511 * 9 + -1 * 2201, I;
    }, w: function(I, f, b, y, S) {
      var w = Gi(b);
      f = Fe(f), Bt(I, { name: f, fromWireType: function(k) {
        return !!k;
      }, toWireType: function(k, G) {
        return G ? y : S;
      }, argPackAdvance: 8, readValueFromPointer: function(k) {
        if (-98 * 21 + -6719 * 1 + -1254 * -7 === b) var G = Ne;
        else if (3014 + -6 * 502 === b) G = Tt;
        else if (4950 * -1 + 754 + 2 * 2100 === b) G = Oe;
        else throw new TypeError("Unknown boolean type size: " + f);
        return this.fromWireType(G[k >> w]);
      }, ka: null });
    }, h: function(I, f, b, y, S, w, k, G, R, K, P, V, ee) {
      P = Fe(P), w = Dt(S, w), G && (G = Dt(k, G)), K && (K = Dt(R, K)), ee = Dt(V, ee);
      var pe = ki(P);
      Dr(pe, function() {
        an("Cannot construct " + P + " due to unbound types", [y]);
      }), S0([I, f, b], y ? [y] : [], function(E) {
        if (E = E[6 * -657 + 8 * 998 + -47 * 86], y) var pt = E.ea, Pe = pt.ma;
        else Pe = Lt.prototype;
        E = Oi(pe, function() {
          if (Object.getPrototypeOf(this) !== G0) throw new W0("Use 'new' to construct " + P);
          if (k0.la === void 0) throw new W0(P + " has no accessible constructor");
          var ra = k0.la[arguments.length];
          if (void (9645 + 1 * 8603 + -18248) === ra) throw new W0("Tried to invoke ctor of " + P + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(k0.la).toString() + ") parameters instead!");
          return ra.apply(this, arguments);
        });
        var Je = {};
        Je.value = E;
        var qt = {};
        qt.constructor = Je;
        var G0 = Object.create(Pe, qt);
        E.prototype = G0;
        var k0 = new Dg(P, E, G0, ee, pt, w, G, K);
        pt = new Gt(P, k0, !(-6010 + -19 * -167 + 1 * 2837), !(-3954 + 1 * 3955)), Pe = new Gt(P + "*", k0, !(1 * -2916 + 1 * 5209 + -764 * 3), !1);
        var oa = new Gt(P + " const*", k0, !(6531 + -1 * -519 + 1 * -7049), !(-2857 * 2 + -6285 + 71 * 169)), Di = {};
        return Di.pointerType = Pe, Di.za = oa, Lr[I] = Di, Fr(pe, E), [pt, Pe, oa];
      });
    }, g: function(I, f, b, y, S, w) {
      A(-7573 + 7550 * -1 + -15123 * -1 < f);
      var k = Mr(f, b);
      S = Dt(y, S);
      var G = [w], R = [];
      S0([], [I], function(K) {
        K = K[14126 + -1009 * 14];
        var P = "constructor " + K.name;
        if (void (-1 * 6069 + 1 * 8848 + -2779) === K.ea.la && (K.ea.la = []), K.ea.la[f - (-3022 + 1621 * 2 + 1 * -219)] !== void 0) throw new W0("Cannot register multiple constructors with identical number of parameters (" + (f - 1) + ") for class '" + K.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return K.ea.la[f - (3 * 3239 + 7894 + -17610)] = function() {
          an("Cannot construct " + K.name + " due to unbound types", k);
        }, S0([], k, function(V) {
          return K.ea.la[f - (1905 + 14 * -136)] = function() {
            arguments.length !== f - (-1619 + -1 * 7537 + -1 * -9157) && J(P + " called with " + arguments.length + " arguments, expected " + (f - 1)), R.length = 0, G.length = f;
            for (var ee = -4211 + 6803 * 1 + -2591; ee < f; ++ee) G[ee] = V[ee].toWireType(R, arguments[ee - 1]);
            return ee = S.apply(null, G), nx(R), V[1 * 2846 + -403 * -20 + 7 * -1558].fromWireType(ee);
          }, [];
        }), [];
      });
    }, b: function(I, f, b, y, S, w, k, G, R, K) {
      f = Fe(f), S = Dt(y, S), S0([], [I], function(P) {
        P = P[2758 * -3 + -1759 + 10033];
        var V = P.name + "." + f, ee = { get: function() {
          an("Cannot access " + V + " due to unbound types", [b, k]);
        }, enumerable: !(7290 * -1 + -1 * -9692 + 1201 * -2), configurable: !(-9268 + 1 * 9268) };
        return R ? ee.set = function() {
          an("Cannot access " + V + " due to unbound types", [b, k]);
        } : ee.set = function() {
          J(V + " is a read-only property");
        }, Object.defineProperty(P.ea.ma, f, ee), S0([], R ? [b, k] : [b], function(pe) {
          var E = pe[0], pt = { get: function() {
            var Je = _r(this, P, V + " getter");
            return E.fromWireType(S(w, Je));
          }, enumerable: !(2851 * 1 + 914 * -5 + -9 * -191) };
          if (R) {
            R = Dt(G, R);
            var Pe = pe[-1835 * 5 + 5 * 1949 + -569 * 1];
            pt.set = function(Je) {
              var qt = _r(this, P, V + " setter"), G0 = [];
              R(K, qt, Pe.toWireType(G0, Je)), nx(G0);
            };
          }
          return Object.defineProperty(P.ea.ma, f, pt), [];
        }), [];
      });
    }, v: function(I, f) {
      f = Fe(f), Bt(I, { name: f, fromWireType: function(b) {
        var y = tt[b].value;
        return Vi(b), y;
      }, toWireType: function(b, y) {
        return w0(y);
      }, argPackAdvance: 8, readValueFromPointer: ex, ka: null });
    }, m: function(I, f, b) {
      b = Gi(b), f = Fe(f), Bt(I, { name: f, fromWireType: function(y) {
        return y;
      }, toWireType: function(y, S) {
        if (typeof S != "number" && typeof S != "boolean") throw new TypeError('Cannot convert "' + B0(S) + '" to ' + this.name);
        return S;
      }, argPackAdvance: 8, readValueFromPointer: Mg(f, b), ka: null });
    }, c: function(I, f, b, y, S, w) {
      var k = Mr(f, b);
      I = Fe(I), S = Dt(y, S), Dr(I, function() {
        an("Cannot call " + I + " due to unbound types", k);
      }, f - (15966 + 103 * -155)), S0([], k, function(G) {
        var R = I, K = I;
        G = [G[-6465 + 8668 * -1 + 15133], null].concat(G.slice(1));
        var P = S, V = G.length;
        7343 * 1 + 39 * -61 + -4962 > V && J("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var ee = G[4439 * 1 + 6645 + -11083] !== null && !(3 * -379 + -1 * -7197 + -6059), pe = !(1205 + 5 * -157 + -419), E = 8979 + 1 * -8978; E < G.length; ++E) if (G[E] !== null && void (3705 + -741 * 5) === G[E].ka) {
          pe = !(-2075 * -1 + -1483 + -592);
          break;
        }
        var pt = G[-2986 * -1 + 55 * -73 + 1029].name !== "void", Pe = "", Je = "";
        for (E = 626 * 3 + -8618 + 6740; E < V - 2; ++E) Pe += (-409 * 22 + 5303 + 3695 !== E ? ", " : "") + "arg" + E, Je += (8521 * -1 + -2853 + -11 * -1034 !== E ? ", " : "") + "arg" + E + "Wired";
        K = "return function " + ki(K) + "(" + Pe + `) {
if (arguments.length !== ` + (V - (1171 * 1 + -9543 + 8374)) + `) {
throwBindingError('function ` + K + " called with ' + arguments.length + ' arguments, expected " + (V - (-187 * -19 + -4694 + 1143)) + ` args!');
}
`, pe && (K += `var destructors = [];
`);
        var qt = pe ? "destructors" : "null";
        for (Pe = "throwBindingError invoker fn runDestructors retType classParam".split(" "), P = [J, P, w, nx, G[1 * 5077 + -5984 + -907 * -1], G[4342 + 8513 * 1 + -12854]], ee && (K += "var thisWired = classParam.toWireType(" + qt + `, this);
`), E = 0; E < V - (-10908 + 5 * 2182); ++E) K += "var arg" + E + "Wired = argType" + E + ".toWireType(" + qt + ", arg" + E + "); // " + G[E + (2 * -4696 + -4 * -16 + -1555 * -6)].name + `
`, Pe.push("argType" + E), P.push(G[E + (300 + -298 * 1)]);
        if (ee && (Je = "thisWired" + (-5171 + -1 * 2822 + 7993 < Je.length ? ", " : "") + Je), K += (pt ? "var rv = " : "") + "invoker(fn" + (7775 + 233 * 3 + -38 * 223 < Je.length ? ", " : "") + Je + `);
`, pe) K += `runDestructors(destructors);
`;
        else
          for (E = ee ? -49 * 173 + 7501 + 977 : -1838 * 4 + -4058 + 9 * 1268; E < G.length; ++E) V = 2 * -3311 + 5122 + 1 * 1501 === E ? "thisWired" : "arg" + (E - (-2 * 2111 + 2644 + 1580)) + "Wired", G[E].ka !== null && (K += V + "_dtor(" + V + "); // " + G[E].name + `
`, Pe.push(V + "_dtor"), P.push(G[E].ka));
        return pt && (K += `var ret = retType.fromWireType(rv);
return ret;
`), Pe.push(K + `}
`), G = _g(Pe).apply(null, P), Fr(R, G, f - (9609 + -434 * -1 + -10042)), [];
      });
    }, e: function(I, f, b, y, S) {
      function w(K) {
        return K;
      }
      f = Fe(f), -(-5788 * -1 + 275 + 3031 * -2) === S && (S = -43 * -29136516 + -16 * -11312346 + -260099961 * -11);
      var k = Gi(b);
      if (1 * -7167 + -6111 + 13278 === y) {
        var G = 32 - 8 * b;
        w = function(K) {
          return K << G >>> G;
        };
      }
      var R = -(1 * -7065 + 103 * 2 + -10 * -686) != f.indexOf("unsigned");
      Bt(I, { name: f, fromWireType: w, toWireType: function(K, P) {
        if (typeof P != "number" && typeof P != "boolean") throw new TypeError('Cannot convert "' + B0(P) + '" to ' + this.name);
        if (P < y || P > S) throw new TypeError('Passing a number "' + B0(P) + '" from JS side to C/C++ side to an argument of type "' + f + '", which is outside the valid range [' + y + ", " + S + "]!");
        return R ? P >>> -359 * -23 + 1039 * 7 + -2 * 7765 : P | 4936 + 3 * -2757 + -3335 * -1;
      }, argPackAdvance: 8, readValueFromPointer: Xg(f, k, -5060 + 23 * 220 !== y), ka: null });
    }, d: function(I, f, b) {
      function y(G) {
        G >>= -3 * 1879 + -172 * -15 + 3059;
        var R = st;
        return new S(q, R[G + 1], R[G]);
      }
      var S = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][f];
      b = Fe(b);
      var w = {};
      w.name = b, w.fromWireType = y, w.argPackAdvance = 8, w.readValueFromPointer = y;
      var k = {};
      k.Ea = !(-15 * 585 + -1193 + 9968), Bt(I, w, k);
    }, n: function(I, f) {
      f = Fe(f);
      var b = f === "std::string";
      Bt(I, { name: f, fromWireType: function(y) {
        var S = st[y >> 2];
        if (b) for (var w = y + (-6995 + 3866 * 1 + 241 * 13), k = 2 * -3011 + -8061 + 14083; k <= S; ++k) {
          var G = y + 4 + k;
          if (k == S || 7603 + 1253 * 5 + -13868 == Re[G]) {
            if (w) {
              var R = w, K = Re, P = R + (G - w);
              for (w = R; K[w] && !(w >= P); ) ++w;
              if (7387 + -4463 * -1 + 122 * -97 < w - R && K.subarray && l) R = l.decode(K.subarray(R, w));
              else {
                for (P = ""; R < w; ) {
                  var V = K[R++];
                  if (V & -334 + -6 * -77) {
                    var ee = K[R++] & 63;
                    if (-5 * -1649 + 8746 + 16799 * -1 == (V & 193 * -25 + -1 * 5543 + 10592)) P += String.fromCharCode((V & 719 + -344 * 2) << -7806 + 36 * 217 | ee);
                    else {
                      var pe = K[R++] & 63;
                      V = 1 * -2138 + 8919 + 1 * -6557 == (V & 11804 + -7 * 1652) ? (V & 2573 * -2 + -1 * -5507 + -346 * 1) << 2673 + 6102 * 1 + -8763 | ee << -2828 + 149 * -59 + 11625 | pe : (V & 879 * -11 + -4132 + -3452 * -4) << -3495 + -3513 * -1 | ee << 8871 * 1 + -1093 + -11 * 706 | pe << -1 * -4886 + -6594 + 1714 | K[R++] & 63, -313 * -229 + 41901 + -48042 > V ? P += String.fromCharCode(V) : (V -= -74709 + 1 * 9643 + 65301 * 2, P += String.fromCharCode(122466 + 5 * -13434 | V >> 10, 187 * -278 + -29 * -1926 + 52452 | V & 6030 + 16 * -511 + -1 * -3169));
                    }
                  } else P += String.fromCharCode(V);
                }
                R = P;
              }
            } else R = "";
            if (void (5 * 895 + 1 * -7793 + 3318) === E) var E = R;
            else E += String.fromCharCode(1 * -5779 + 1393 + -2 * -2193), E += R;
            w = G + (830 + 7413 * -1 + 6584);
          }
        }
        else {
          for (E = Array(S), k = 0; k < S; ++k) E[k] = String.fromCharCode(Re[y + (-7 * 933 + -29 * -47 + -431 * -12) + k]);
          E = E.join("");
        }
        return kt(y), E;
      }, toWireType: function(y, S) {
        S instanceof ArrayBuffer && (S = new Uint8Array(S));
        var w = typeof S == "string";
        w || S instanceof Uint8Array || S instanceof Uint8ClampedArray || S instanceof Int8Array || J("Cannot pass non-string to std::string");
        var k = (b && w ? function() {
          for (var K = 0, P = -7694 + -1 * -7694; P < S.length; ++P) {
            var V = S.charCodeAt(P);
            55296 <= V && 2 * 49565 + -46 * -1157 + -95009 * 1 >= V && (V = -30242 * -3 + -89868 + -2 * -32339 + ((V & 8374 + -36 * -139 + -12355) << -5873 + 113 * -51 + 5823 * 2) | S.charCodeAt(++P) & 3 * -194 + 6943 + -157 * 34), 7197 + -14 * 505 >= V ? ++K : K = -3066 + 143 * -58 + -123 * -109 >= V ? K + (-41 * -151 + 64 * 1 + -13 * 481) : 65535 >= V ? K + (9 * -856 + -6620 + 14327 * 1) : K + (1 * -7522 + -1194 + -1090 * -8);
          }
          return K;
        } : function() {
          return S.length;
        })(), G = ix(-7 * 592 + -1211 * 3 + 7781 + k + (1 * -5972 + -8396 + 14369));
        if (st[G >> 1 * 4679 + -1 * 4729 + 52] = k, b && w) W(S, G + 4, k + 1);
        else if (w) for (w = -3956 + 8 * -37 + -4252 * -1; w < k; ++w) {
          var R = S.charCodeAt(w);
          3755 + -33 * -141 + -263 * 31 < R && (kt(G), J("String has UTF-16 code units that do not fit in 8 bits")), Re[G + 4 + w] = R;
        }
        else
          for (w = 42 + -6 * 7; w < k; ++w) Re[G + (4025 + 887 * -10 + 4849) + w] = S[w];
        return y !== null && y.push(kt, G), G;
      }, argPackAdvance: 8, readValueFromPointer: ex, ka: function(y) {
        kt(y);
      } });
    }, j: function(I, f, b) {
      if (b = Fe(b), -1079 + -47 * -23 === f) var y = M, S = _, w = X, k = function() {
        return Jt;
      }, G = -7127 + 419 * -20 + 15508;
      else 1678 * -2 + -5840 + 9200 === f && (y = H, S = z, w = Q, k = function() {
        return st;
      }, G = -7930 + 661 * 12);
      Bt(I, { name: b, fromWireType: function(R) {
        for (var K = st[R >> 24 * -13 + -5 * -1436 + 3433 * -2], P = k(), V, ee = R + 4, pe = -1097 + 1 * 6753 + -404 * 14; pe <= K; ++pe) {
          var E = R + 4 + pe * f;
          (pe == K || 8609 + -1 * -2551 + -6 * 1860 == P[E >> G]) && (ee = y(ee, E - ee), void (-1 * -5560 + 2952 + -8512) === V ? V = ee : (V += String.fromCharCode(5306 + 98 * -98 + 4298 * 1), V += ee), ee = E + f);
        }
        return kt(R), V;
      }, toWireType: function(R, K) {
        typeof K != "string" && J("Cannot pass non-string to C++ string type " + b);
        var P = w(K), V = ix(-1 * 5408 + -1051 * 4 + 9616 + P + f);
        return st[V >> 1047 + 29 * -167 + 3798] = P >> G, S(K, V + (-7495 + 27 * -281 + 397 * 38), P + f), R !== null && R.push(kt, V), V;
      }, argPackAdvance: 8, readValueFromPointer: ex, ka: function(R) {
        kt(R);
      } });
    }, x: function(I, f) {
      f = Fe(f);
      var b = {};
      b.Qa = !(5876 + -26 * 159 + 871 * -2), b.name = f, b.argPackAdvance = 0, b.fromWireType = function() {
      }, b.toWireType = function() {
      }, Bt(I, b);
    }, k: function(I, f, b) {
      I = Ti(I), f = zr(f, "emval::as");
      var y = [], S = w0(y);
      return Oe[b >> 2] = S, f.toWireType(y, I);
    }, i: Vi, l: function(I, f) {
      return I = Ti(I), f = Ti(f), w0(I[f]);
    }, p: function(I) {
      var f = Jg[I];
      return w0(void (-1366 * -7 + 3793 + 13355 * -1) === f ? Fe(I) : f);
    }, o: function(I) {
      nx(tt[I].value), Vi(I);
    }, y: function(I, f) {
      return I = zr(I, "_emval_take_value"), I = I.readValueFromPointer(f), w0(I);
    }, f: function() {
      et();
    }, q: function(I, f, b) {
      Re.copyWithin(I, f, f + b);
    }, r: function(I) {
      I >>>= 1 * -1983 + -1 * -5233 + 50 * -65;
      var f = Re.length;
      if (2147483648 < I) return !(-30 * 71 + 9921 * 1 + -7790);
      for (var b = 1607 * 1 + -1910 + 304; -12 * -137 + 1 * 5153 + -1 * 6793 >= b; b *= -3 * -1291 + 32 * 293 + -13247 * 1) {
        var y = f * (1 + 0.2 / b);
        y = Math.min(y, I + (7977547 * 1 + -37133944 * 4 + 25 * 9648861)), y = Math.max(-850647 * -36 + 1 * 4870163 + 1 * -18716239, I, y), 7 * 983 + 3484 + -10365 < y % (-114201 + -14392 * -4 + -579 * -211) && (y += -2 * 13545 + 1 * 68014 + 24612 - y % 65536);
        e: {
          try {
            p.grow(Math.min(2136086228 + 2936 * -909654 + 6 * 447023594, y) - q.byteLength + (3 * 14523 + 65683 + -43717) >>> 1 * -6971 + -8919 + 15906), en(p.buffer);
            var S = 2174 + 1 * -8576 + 6403;
            break e;
          } catch {
          }
          S = void (-5391 + 1797 * 3);
        }
        if (S) return !(-1 * 5728 + -7608 + -6668 * -2);
      }
      return !(-4193 + 1561 * 1 + 2633);
    }, s: function(I, f) {
      var b = 0;
      return $r().forEach(function(y, S) {
        var w = f + b;
        for (S = Oe[I + (-2753 + 6 * 1514 + 333 * -19) * S >> -320 * 13 + 7291 * -1 + 11453] = w, w = 7979 * -1 + 254 * -38 + -17631 * -1; w < y.length; ++w) Ne[S++ >> -5425 + 775 * 7] = y.charCodeAt(w);
        Ne[S >> 1450 * -5 + -8363 * -1 + -1113] = 15 * 183 + 1 * 139 + -103 * 28, b += y.length + (-1 * 6813 + -11 * 649 + -1 * -13953);
      }), 0;
    }, t: function(I, f) {
      var b = $r();
      Oe[I >> -41 * 152 + 982 * 10 + 1793 * -2] = b.length;
      var y = 4108 * 2 + -9407 + 1191;
      return b.forEach(function(S) {
        y += S.length + 1;
      }), Oe[f >> -5591 * -1 + -1613 * -1 + -7202] = y, 347 * 14 + 2097 + -13 * 535;
    }, a: p };
    (function() {
      function I(k) {
        k = k.exports, k = ta(k), t.asm = k, Xe--, t.monitorRunDependencies && t.monitorRunDependencies(Xe), 1 * 6941 + 164 * 11 + -8745 == Xe && ft && (k = ft, ft = null, k());
      }
      function f(k) {
        I(k.instance);
      }
      function b(k) {
        return Vg().then(function(G) {
          return WebAssembly.instantiate(G, S);
        }).then(k, function(G) {
          C("failed to asynchronously prepare wasm: " + G), et(G);
        });
      }
      var y = {};
      y.a = Qg;
      var S = y;
      if (Xe++, t.monitorRunDependencies && t.monitorRunDependencies(Xe), t.instantiateWasm) try {
        var w = t.instantiateWasm(S, I);
        return w = ta(w);
      } catch (k) {
        return C("Module.instantiateWasm callback failed with error: " + k), !(1 * 7495 + 10 * -538 + -2114);
      }
      return function() {
        if (u || typeof WebAssembly.instantiateStreaming != "function" || Ct() || Qt("file://") || typeof fetch != "function") return b(f);
        var k = {};
        k.credentials = "same-origin", fetch(ct, k).then(function(G) {
          return WebAssembly.instantiateStreaming(G, S).then(f, function(R) {
            return C("wasm streaming compile failed: " + R), C("falling back to ArrayBuffer instantiation"), b(f);
          });
        });
      }(), {};
    })();
    var xa = t.___wasm_call_ctors = function() {
      return (xa = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, ix = t._malloc = function() {
      return (ix = t._malloc = t.asm.C).apply(null, arguments);
    }, kt = t._free = function() {
      return (kt = t._free = t.asm.D).apply(null, arguments);
    }, ia = t.___getTypeName = function() {
      return (ia = t.___getTypeName = t.asm.E).apply(null, arguments);
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
    var ox;
    ft = function I() {
      ox || Li(), ox || (ft = I);
    };
    function Li() {
      function I() {
        if (!ox && (ox = !(2 * 3459 + 7969 * -1 + 1051), t.calledRun = !(7762 + -3257 * 2 + -96 * 13), !m)) {
          if (Qn(Ke), Qn(tn), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var f = t.postRun.shift();
            A0.unshift(f);
          }
          Qn(A0);
        }
      }
      if (!(-8624 + -5 * -589 + 5679 < Xe)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) y0();
        Qn(Et), 7507 * 1 + -2 * 4339 + -1171 * -1 < Xe || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, -1507 + 9293 * 1 + -5 * 1557), I();
        }, 2564 + 1 * -2563)) : I());
      }
    }
    if (t.run = Li, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); -5015 + 3404 * 2 + 1 * -1793 < t.preInit.length; ) t.preInit.pop()();
    return Li(), i.ready;
  };
})();
class XI {
  constructor(i, t) {
    T(this, "isDetectorInitialized", !1);
    T(this, "samVersion", null);
    T(this, "detection");
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
    return i === Yl;
  }
  setThresholds(i) {
    this.imageProcessor.validationService.thresholds = i;
  }
}
class JI {
  constructor() {
    T(this, "detectionRecord", []);
    T(this, "imagesWithTimestampForDuplicateDetection", new Sn(Tl));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: i, timestamp: t }) {
    const e = i.length / Nl, n = e / (3127 + 13 * -767 + 42 * 163), o = i.length / (-4054 + 3721 * -1 + 7777), r = await jI(i.slice(o - n, o + n)), a = {};
    a.imageHash = r, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(i) {
    return { data: E1(i), resolution: { width: i.width, height: i.height } };
  }
  async processDetectedObject({ detectedObject: i, image: t, imageData: e, timestamp: n }) {
    const o = Yc(i), r = this.validationService.validateDetectedObject(o, t);
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
class QI {
  constructor() {
    T(this, "thresholds", null);
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
const Wg = Symbol("Comlink.proxy"), UI = Symbol("Comlink.endpoint"), zI = Symbol("Comlink.releaseProxy"), oo = Symbol("Comlink.finalizer"), Rx = Symbol("Comlink.thrown"), Sg = (x) => typeof x == "object" && x !== null || typeof x == "function", qI = {
  canHandle: (x) => Sg(x) && x[Wg],
  serialize(x) {
    const { port1: i, port2: t } = new MessageChannel();
    return Bg(x, i), [t, [t]];
  },
  deserialize(x) {
    return x.start(), kg(x);
  }
}, $I = {
  canHandle: (x) => Sg(x) && Rx in x,
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
}, wg = /* @__PURE__ */ new Map([
  ["proxy", qI],
  ["throw", $I]
]);
function ef(x, i) {
  for (const t of x)
    if (i === t || t === "*" || t instanceof RegExp && t.test(i))
      return !0;
  return !1;
}
function Bg(x, i = globalThis, t = ["*"]) {
  i.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!ef(t, n.origin)) {
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
            c = af(C);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: C, port2: u } = new MessageChannel();
            Bg(x, u), c = rf(C, [C]);
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
      const [g, C] = gi(d);
      i.postMessage(Object.assign(Object.assign({}, g), { id: o }), C), r === "RELEASE" && (i.removeEventListener("message", e), Gg(i), oo in x && typeof x[oo] == "function" && x[oo]());
    }).catch((d) => {
      const [g, C] = gi({
        value: new TypeError("Unserializable return value"),
        [Rx]: 0
      });
      i.postMessage(Object.assign(Object.assign({}, g), { id: o }), C);
    });
  }), i.start && i.start();
}
function tf(x) {
  return x.constructor.name === "MessagePort";
}
function Gg(x) {
  tf(x) && x.close();
}
function kg(x, i) {
  return $o(x, [], i);
}
function Cx(x) {
  if (x)
    throw new Error("Proxy has been released and is not useable");
}
function Og(x) {
  return K0(x, {
    type: "RELEASE"
  }).then(() => {
    Gg(x);
  });
}
const si = /* @__PURE__ */ new WeakMap(), ci = "FinalizationRegistry" in globalThis && new FinalizationRegistry((x) => {
  const i = (si.get(x) || 0) - 1;
  si.set(x, i), i === 0 && Og(x);
});
function nf(x, i) {
  const t = (si.get(i) || 0) + 1;
  si.set(i, t), ci && ci.register(x, i, x);
}
function xf(x) {
  ci && ci.unregister(x);
}
function $o(x, i = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(o, r) {
      if (Cx(e), r === zI)
        return () => {
          xf(n), Og(x), e = !0;
        };
      if (r === "then") {
        if (i.length === 0)
          return { then: () => n };
        const a = K0(x, {
          type: "GET",
          path: i.map((s) => s.toString())
        }).then(i0);
        return a.then.bind(a);
      }
      return $o(x, [...i, r]);
    },
    set(o, r, a) {
      Cx(e);
      const [s, c] = gi(a);
      return K0(x, {
        type: "SET",
        path: [...i, r].map((d) => d.toString()),
        value: s
      }, c).then(i0);
    },
    apply(o, r, a) {
      Cx(e);
      const s = i[i.length - 1];
      if (s === UI)
        return K0(x, {
          type: "ENDPOINT"
        }).then(i0);
      if (s === "bind")
        return $o(x, i.slice(0, -1));
      const [c, d] = As(a);
      return K0(x, {
        type: "APPLY",
        path: i.map((g) => g.toString()),
        argumentList: c
      }, d).then(i0);
    },
    construct(o, r) {
      Cx(e);
      const [a, s] = As(r);
      return K0(x, {
        type: "CONSTRUCT",
        path: i.map((c) => c.toString()),
        argumentList: a
      }, s).then(i0);
    }
  });
  return nf(n, x), n;
}
function of(x) {
  return Array.prototype.concat.apply([], x);
}
function As(x) {
  const i = x.map(gi);
  return [i.map((t) => t[0]), of(i.map((t) => t[1]))];
}
const Hg = /* @__PURE__ */ new WeakMap();
function rf(x, i) {
  return Hg.set(x, i), x;
}
function af(x) {
  return Object.assign(x, { [Wg]: !0 });
}
function gi(x) {
  for (const [i, t] of wg)
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
    Hg.get(x) || []
  ];
}
function i0(x) {
  switch (x.type) {
    case "HANDLER":
      return wg.get(x.name).deserialize(x.value);
    case "RAW":
      return x.value;
  }
}
function K0(x, i, t) {
  return new Promise((e) => {
    const n = sf();
    x.addEventListener("message", function o(r) {
      !r.data || !r.data.id || r.data.id !== n || (x.removeEventListener("message", o), e(r.data));
    }), x.start && x.start(), x.postMessage(Object.assign({ id: n }, i), t);
  });
}
function sf() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const Zg = "dmFyIHZlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgTHQgPSAoYSkgPT4gewogIHRocm93IFR5cGVFcnJvcihhKTsKfTsKdmFyIGdlID0gKGEsIG8sIGUpID0+IG8gaW4gYSA/IHZlKGEsIG8sIHsgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCwgdmFsdWU6IGUgfSkgOiBhW29dID0gZTsKdmFyIFFuID0gKGEsIG8sIGUpID0+IGdlKGEsIHR5cGVvZiBvICE9ICJzeW1ib2wiID8gbyArICIiIDogbywgZSksIE50ID0gKGEsIG8sIGUpID0+IG8uaGFzKGEpIHx8IEx0KCJDYW5ub3QgIiArIGUpOwp2YXIgSCA9IChhLCBvLCBlKSA9PiAoTnQoYSwgbywgInJlYWQgZnJvbSBwcml2YXRlIGZpZWxkIiksIGUgPyBlLmNhbGwoYSkgOiBvLmdldChhKSksIFduID0gKGEsIG8sIGUpID0+IG8uaGFzKGEpID8gTHQoIkNhbm5vdCBhZGQgdGhlIHNhbWUgcHJpdmF0ZSBtZW1iZXIgbW9yZSB0aGFuIG9uY2UiKSA6IG8gaW5zdGFuY2VvZiBXZWFrU2V0ID8gby5hZGQoYSkgOiBvLnNldChhLCBlKSwga24gPSAoYSwgbywgZSwgaCkgPT4gKE50KGEsIG8sICJ3cml0ZSB0byBwcml2YXRlIGZpZWxkIiksIGggPyBoLmNhbGwoYSwgZSkgOiBvLnNldChhLCBlKSwgZSk7CmNvbnN0IEh0ID0gewogIHNpbWQ6ICJzYW1fc2ltZC53YXNtIiwKICBzYW06ICJzYW0ud2FzbSIKfSwgd2UgPSBhc3luYyAoKSA9PiBXZWJBc3NlbWJseS52YWxpZGF0ZShuZXcgVWludDhBcnJheShbMCwgOTcsIDExNSwgMTA5LCAxLCAwLCAwLCAwLCAxLCA1LCAxLCA5NiwgMCwgMSwgMTIzLCAzLCAyLCAxLCAwLCAxMCwgMTAsIDEsIDgsIDAsIDY1LCAwLCAyNTMsIDE1LCAyNTMsIDk4LCAxMV0pKTsKdmFyIEFlID0gZnVuY3Rpb24oKSB7CiAgdmFyIGEgPSB0eXBlb2YgZG9jdW1lbnQgPCAidSIgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdCA/IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjIDogdm9pZCAwOwogIHJldHVybiBmdW5jdGlvbihvKSB7CiAgICBvID0gbyB8fCB7fTsKICAgIHZhciBlOwogICAgZSB8fCAoZSA9IHR5cGVvZiBvIDwgInUiID8gbyA6IHt9KTsKICAgIHZhciBoLCBnOwogICAgZS5yZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgaCA9IG4sIGcgPSB0OwogICAgfSk7CiAgICB2YXIgQyA9IHt9LCBBOwogICAgZm9yIChBIGluIGUpIGUuaGFzT3duUHJvcGVydHkoQSkgJiYgKENbQV0gPSBlW0FdKTsKICAgIHZhciBPID0gIi4vdGhpcy5wcm9ncmFtIiwgYiA9ICExLCBUID0gITE7CiAgICBiID0gdHlwZW9mIHdpbmRvdyA9PSAib2JqZWN0IiwgVCA9IHR5cGVvZiBpbXBvcnRTY3JpcHRzID09ICJmdW5jdGlvbiI7CiAgICB2YXIgXyA9ICIiLCBTOwogICAgKGIgfHwgVCkgJiYgKFQgPyBfID0gc2VsZi5sb2NhdGlvbi5ocmVmIDogZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiAoXyA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjKSwgYSAmJiAoXyA9IGEpLCBfLmluZGV4T2YoImJsb2I6IikgIT09IDAgPyBfID0gXy5zdWJzdHIoMCwgXy5sYXN0SW5kZXhPZigiLyIpICsgMSkgOiBfID0gIiIsIFQgJiYgKFMgPSBmdW5jdGlvbihuKSB7CiAgICAgIHZhciB0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7CiAgICAgIHJldHVybiB0Lm9wZW4oIkdFVCIsIG4sICExKSwgdC5yZXNwb25zZVR5cGUgPSAiYXJyYXlidWZmZXIiLCB0LnNlbmQobnVsbCksIG5ldyBVaW50OEFycmF5KHQucmVzcG9uc2UpOwogICAgfSkpOwogICAgdmFyIEUgPSBlLnByaW50RXJyIHx8IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpOwogICAgZm9yIChBIGluIEMpIEMuaGFzT3duUHJvcGVydHkoQSkgJiYgKGVbQV0gPSBDW0FdKTsKICAgIEMgPSBudWxsLCBlLnRoaXNQcm9ncmFtICYmIChPID0gZS50aGlzUHJvZ3JhbSk7CiAgICB2YXIgTTsKICAgIGUud2FzbUJpbmFyeSAmJiAoTSA9IGUud2FzbUJpbmFyeSksIGUubm9FeGl0UnVudGltZSAmJiBlLm5vRXhpdFJ1bnRpbWUsIHR5cGVvZiBXZWJBc3NlbWJseSAhPSAib2JqZWN0IiAmJiBmbigibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZCIpOwogICAgdmFyIFUsIExuID0gITE7CiAgICBmdW5jdGlvbiBydChuKSB7CiAgICAgIG4gfHwgZm4oIkFzc2VydGlvbiBmYWlsZWQ6IHVuZGVmaW5lZCIpOwogICAgfQogICAgdmFyIGl0ID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGY4IikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiAkdChuLCB0LCByKSB7CiAgICAgIHZhciBpID0geDsKICAgICAgaWYgKDAgPCByKSB7CiAgICAgICAgciA9IHQgKyByIC0gMTsKICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IG4ubGVuZ3RoOyArK3MpIHsKICAgICAgICAgIHZhciB1ID0gbi5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgaWYgKDU1Mjk2IDw9IHUgJiYgNTczNDMgPj0gdSkgewogICAgICAgICAgICB2YXIgbCA9IG4uY2hhckNvZGVBdCgrK3MpOwogICAgICAgICAgICB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCBsICYgMTAyMzsKICAgICAgICAgIH0KICAgICAgICAgIGlmICgxMjcgPj0gdSkgewogICAgICAgICAgICBpZiAodCA+PSByKSBicmVhazsKICAgICAgICAgICAgaVt0KytdID0gdTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGlmICgyMDQ3ID49IHUpIHsKICAgICAgICAgICAgICBpZiAodCArIDEgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgaVt0KytdID0gMTkyIHwgdSA+PiA2OwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgIGlmICg2NTUzNSA+PSB1KSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDIgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyMjQgfCB1ID4+IDEyOwogICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDMgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyNDAgfCB1ID4+IDE4LCBpW3QrK10gPSAxMjggfCB1ID4+IDEyICYgNjM7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IHUgPj4gNiAmIDYzOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IHUgJiA2MzsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgaVt0XSA9IDA7CiAgICAgIH0KICAgIH0KICAgIHZhciBhdCA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmLTE2bGUiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFh0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IG4gPj4gMSwgaSA9IHIgKyB0IC8gMjsgIShyID49IGkpICYmIGduW3JdOyApICsrcjsKICAgICAgaWYgKHIgPDw9IDEsIDMyIDwgciAtIG4gJiYgYXQpIHJldHVybiBhdC5kZWNvZGUoeC5zdWJhcnJheShuLCByKSk7CiAgICAgIGZvciAociA9IDAsIGkgPSAiIjsgOyApIHsKICAgICAgICB2YXIgcyA9IHRuW24gKyAyICogciA+PiAxXTsKICAgICAgICBpZiAocyA9PSAwIHx8IHIgPT0gdCAvIDIpIHJldHVybiBpOwogICAgICAgICsrciwgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHMpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBKdChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgMiA+IHIpIHJldHVybiAwOwogICAgICByIC09IDI7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IHIgPCAyICogbi5sZW5ndGggPyByIC8gMiA6IG4ubGVuZ3RoOwogICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHI7ICsrcykgdG5bdCA+PiAxXSA9IG4uY2hhckNvZGVBdChzKSwgdCArPSAyOwogICAgICByZXR1cm4gdG5bdCA+PiAxXSA9IDAsIHQgLSBpOwogICAgfQogICAgZnVuY3Rpb24gS3QobikgewogICAgICByZXR1cm4gMiAqIG4ubGVuZ3RoOwogICAgfQogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gMCwgaSA9ICIiOyAhKHIgPj0gdCAvIDQpOyApIHsKICAgICAgICB2YXIgcyA9IGtbbiArIDQgKiByID4+IDJdOwogICAgICAgIGlmIChzID09IDApIGJyZWFrOwogICAgICAgICsrciwgNjU1MzYgPD0gcyA/IChzIC09IDY1NTM2LCBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBzID4+IDEwLCA1NjMyMCB8IHMgJiAxMDIzKSkgOiBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocyk7CiAgICAgIH0KICAgICAgcmV0dXJuIGk7CiAgICB9CiAgICBmdW5jdGlvbiBxdChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgNCA+IHIpIHJldHVybiAwOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSBpICsgciAtIDQ7CiAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgbi5sZW5ndGg7ICsrcykgewogICAgICAgIHZhciB1ID0gbi5jaGFyQ29kZUF0KHMpOwogICAgICAgIGlmICg1NTI5NiA8PSB1ICYmIDU3MzQzID49IHUpIHsKICAgICAgICAgIHZhciBsID0gbi5jaGFyQ29kZUF0KCsrcyk7CiAgICAgICAgICB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCBsICYgMTAyMzsKICAgICAgICB9CiAgICAgICAgaWYgKGtbdCA+PiAyXSA9IHUsIHQgKz0gNCwgdCArIDQgPiByKSBicmVhazsKICAgICAgfQogICAgICByZXR1cm4ga1t0ID4+IDJdID0gMCwgdCAtIGk7CiAgICB9CiAgICBmdW5jdGlvbiBuZShuKSB7CiAgICAgIGZvciAodmFyIHQgPSAwLCByID0gMDsgciA8IG4ubGVuZ3RoOyArK3IpIHsKICAgICAgICB2YXIgaSA9IG4uY2hhckNvZGVBdChyKTsKICAgICAgICA1NTI5NiA8PSBpICYmIDU3MzQzID49IGkgJiYgKytyLCB0ICs9IDQ7CiAgICAgIH0KICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICB2YXIgbm4sICQsIHgsIHRuLCBnbiwgaywgRCwgb3QsIHN0OwogICAgZnVuY3Rpb24gdXQobikgewogICAgICBubiA9IG4sIGUuSEVBUDggPSAkID0gbmV3IEludDhBcnJheShuKSwgZS5IRUFQMTYgPSB0biA9IG5ldyBJbnQxNkFycmF5KG4pLCBlLkhFQVAzMiA9IGsgPSBuZXcgSW50MzJBcnJheShuKSwgZS5IRUFQVTggPSB4ID0gbmV3IFVpbnQ4QXJyYXkobiksIGUuSEVBUFUxNiA9IGduID0gbmV3IFVpbnQxNkFycmF5KG4pLCBlLkhFQVBVMzIgPSBEID0gbmV3IFVpbnQzMkFycmF5KG4pLCBlLkhFQVBGMzIgPSBvdCA9IG5ldyBGbG9hdDMyQXJyYXkobiksIGUuSEVBUEY2NCA9IHN0ID0gbmV3IEZsb2F0NjRBcnJheShuKTsKICAgIH0KICAgIHZhciBjdCA9IGUuSU5JVElBTF9NRU1PUlkgfHwgMTY3NzcyMTY7CiAgICBlLndhc21NZW1vcnkgPyBVID0gZS53YXNtTWVtb3J5IDogVSA9IG5ldyBXZWJBc3NlbWJseS5NZW1vcnkoeyBpbml0aWFsOiBjdCAvIDY1NTM2LCBtYXhpbXVtOiAzMjc2OCB9KSwgVSAmJiAobm4gPSBVLmJ1ZmZlciksIGN0ID0gbm4uYnl0ZUxlbmd0aCwgdXQobm4pOwogICAgdmFyIGx0ID0gW10sIGZ0ID0gW10sIHRlID0gW10sIGR0ID0gW107CiAgICBmdW5jdGlvbiBlZSgpIHsKICAgICAgdmFyIG4gPSBlLnByZVJ1bi5zaGlmdCgpOwogICAgICBsdC51bnNoaWZ0KG4pOwogICAgfQogICAgdmFyIFggPSAwLCBsbiA9IG51bGw7CiAgICBlLnByZWxvYWRlZEltYWdlcyA9IHt9LCBlLnByZWxvYWRlZEF1ZGlvcyA9IHt9OwogICAgZnVuY3Rpb24gZm4obikgewogICAgICB0aHJvdyBlLm9uQWJvcnQgJiYgZS5vbkFib3J0KG4pLCBFKG4pLCBMbiA9ICEwLCBuID0gbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcigiYWJvcnQoIiArIG4gKyAiKS4gQnVpbGQgd2l0aCAtcyBBU1NFUlRJT05TPTEgZm9yIG1vcmUgaW5mby4iKSwgZyhuKSwgbjsKICAgIH0KICAgIGZ1bmN0aW9uIE5uKG4pIHsKICAgICAgdmFyIHQgPSBKOwogICAgICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID8gdC5zdGFydHNXaXRoKG4pIDogdC5pbmRleE9mKG4pID09PSAwOwogICAgfQogICAgZnVuY3Rpb24gaHQoKSB7CiAgICAgIHJldHVybiBObigiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LCIpOwogICAgfQogICAgdmFyIEogPSAic2FtLndhc20iOwogICAgaWYgKCFodCgpKSB7CiAgICAgIHZhciBtdCA9IEo7CiAgICAgIEogPSBlLmxvY2F0ZUZpbGUgPyBlLmxvY2F0ZUZpbGUobXQsIF8pIDogXyArIG10OwogICAgfQogICAgZnVuY3Rpb24geXQoKSB7CiAgICAgIHRyeSB7CiAgICAgICAgaWYgKE0pIHJldHVybiBuZXcgVWludDhBcnJheShNKTsKICAgICAgICBpZiAoUykgcmV0dXJuIFMoSik7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIGZuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiByZSgpIHsKICAgICAgcmV0dXJuIE0gfHwgIWIgJiYgIVQgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgTm4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oeXQpIDogZmV0Y2goSiwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spIHRocm93ICJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICciICsgSiArICInIjsKICAgICAgICByZXR1cm4gbi5hcnJheUJ1ZmZlcigpOwogICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4geXQoKTsKICAgICAgfSk7CiAgICB9CiAgICBmdW5jdGlvbiB3bihuKSB7CiAgICAgIGZvciAoOyAwIDwgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5zaGlmdCgpOwogICAgICAgIGlmICh0eXBlb2YgdCA9PSAiZnVuY3Rpb24iKSB0KGUpOwogICAgICAgIGVsc2UgewogICAgICAgICAgdmFyIHIgPSB0LkJhOwogICAgICAgICAgdHlwZW9mIHIgPT0gIm51bWJlciIgPyB0LnRhID09PSB2b2lkIDAgPyBIbigidiIsIHIpKCkgOiBIbigidmkiLCByKSh0LnRhKSA6IHIodC50YSA9PT0gdm9pZCAwID8gbnVsbCA6IHQudGEpOwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gSG4obiwgdCkgewogICAgICB2YXIgciA9IFtdOwogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgci5sZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOwogICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gaWUobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIGtbdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIGtbdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAga1t0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKCkgewogICAgICByZXR1cm4gMCA8IEFuLnhhOwogICAgfQogICAgZnVuY3Rpb24gVW4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIHB0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gUihuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgeFtuXTsgKSB0ICs9IHB0W3hbbisrXV07CiAgICAgIHJldHVybiB0OwogICAgfQogICAgdmFyIGVuID0ge30sIEsgPSB7fSwgX24gPSB7fTsKICAgIGZ1bmN0aW9uIERuKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIEJuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBEbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gem4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gQm4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIHJuID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBybihuKTsKICAgIH0KICAgIHZhciB2dCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgdGhyb3cgbmV3IHZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gYW4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGMpIHsKICAgICAgICBjID0gcihjKSwgYy5sZW5ndGggIT09IG4ubGVuZ3RoICYmIENuKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBuLmxlbmd0aDsgKyt5KSBCKG5beV0sIGNbeV0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihjKSB7CiAgICAgICAgX25bY10gPSB0OwogICAgICB9KTsKICAgICAgdmFyIHMgPSBBcnJheSh0Lmxlbmd0aCksIHUgPSBbXSwgbCA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihjLCB5KSB7CiAgICAgICAgSy5oYXNPd25Qcm9wZXJ0eShjKSA/IHNbeV0gPSBLW2NdIDogKHUucHVzaChjKSwgZW4uaGFzT3duUHJvcGVydHkoYykgfHwgKGVuW2NdID0gW10pLCBlbltjXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgc1t5XSA9IEtbY10sICsrbCwgbCA9PT0gdS5sZW5ndGggJiYgaShzKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCB1Lmxlbmd0aCA9PT0gMCAmJiBpKHMpOwogICAgfQogICAgZnVuY3Rpb24gQihuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgSy5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKSByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBLW25dID0gdCwgZGVsZXRlIF9uW25dLCBlbi5oYXNPd25Qcm9wZXJ0eShuKSAmJiAodCA9IGVuW25dLCBkZWxldGUgZW5bbl0sIHQuZm9yRWFjaChmdW5jdGlvbihzKSB7CiAgICAgICAgcygpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBhZShuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBWbihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIEduID0gITE7CiAgICBmdW5jdGlvbiBndCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIHd0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gZG4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKGRuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChHbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpIHIgPSByLnZhbHVlLCByLmRhID8gd3QocikgOiBjb25zb2xlLndhcm4oIm9iamVjdCBhbHJlYWR5IGRlbGV0ZWQ6ICIgKyByLmRhKTsKICAgICAgfSksIGRuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiBHbi5yZWdpc3Rlcih0LCB0LkEsIHQuQSksIHQ7CiAgICAgIH0sIGd0ID0gZnVuY3Rpb24odCkgewogICAgICAgIEduLnVucmVnaXN0ZXIodC5BKTsKICAgICAgfSwgZG4obikpOwogICAgfQogICAgdmFyIGhuID0gdm9pZCAwLCBtbiA9IFtdOwogICAgZnVuY3Rpb24gWW4oKSB7CiAgICAgIGZvciAoOyBtbi5sZW5ndGg7ICkgewogICAgICAgIHZhciBuID0gbW4ucG9wKCk7CiAgICAgICAgbi5BLm9hID0gITEsIG4uZGVsZXRlKCk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIEcoKSB7CiAgICB9CiAgICB2YXIgQXQgPSB7fTsKICAgIGZ1bmN0aW9uIG9lKG4sIHQpIHsKICAgICAgdmFyIHIgPSBlOwogICAgICBpZiAocltuXS5qYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdmFyIGkgPSByW25dOwogICAgICAgIHJbbl0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiByW25dLmphLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpIHx8IHYoIkZ1bmN0aW9uICciICsgdCArICInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdHMgb25lIG9mICgiICsgcltuXS5qYSArICIpISIpLCByW25dLmphW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfSwgcltuXS5qYSA9IFtdLCByW25dLmphW2kueWFdID0gaTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pID8gKChyID09PSB2b2lkIDAgfHwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIGVbbl0uamFbcl0gIT09IHZvaWQgMCkgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICciICsgbiArICInIHR3aWNlIiksIG9lKG4sIG4pLCBlLmhhc093blByb3BlcnR5KHIpICYmIHYoIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyByICsgIikhIiksIGVbbl0uamFbcl0gPSB0KSA6IChlW25dID0gdCwgciAhPT0gdm9pZCAwICYmIChlW25dLlJhID0gcikpOwogICAgfQogICAgZnVuY3Rpb24gc2UobiwgdCwgciwgaSwgcywgdSwgbCwgYykgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmNvbnN0cnVjdG9yID0gdCwgdGhpcy5tYSA9IHIsIHRoaXMubmEgPSBpLCB0aGlzLmlhID0gcywgdGhpcy5DYSA9IHUsIHRoaXMucWEgPSBsLCB0aGlzLkFhID0gYzsKICAgIH0KICAgIGZ1bmN0aW9uIFRuKG4sIHQsIHIpIHsKICAgICAgZm9yICg7IHQgIT09IHI7ICkgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiB1ZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgc24odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIFRuKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBjZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBzbih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSBUbih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpIHIgPSB0LkEuZ2E7CiAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIG9uKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGkuZGVsZXRlKCk7CiAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgIH0KICAgICAgcmV0dXJuIHI7CiAgICB9CiAgICBmdW5jdGlvbiBsZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgc24odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyB0LkEuZmEubmFtZSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIFRuKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBFbihuKSB7CiAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShEW24gPj4gMl0pOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCwgcikgewogICAgICByZXR1cm4gdCA9PT0gciA/IG4gOiByLmlhID09PSB2b2lkIDAgPyBudWxsIDogKG4gPSBDdChuLCB0LCByLmlhKSwgbiA9PT0gbnVsbCA/IG51bGwgOiByLkFhKG4pKTsKICAgIH0KICAgIHZhciB5biA9IHt9OwogICAgZnVuY3Rpb24gZmUobiwgdCkgewogICAgICBmb3IgKHQgPT09IHZvaWQgMCAmJiB2KCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsgbi5pYTsgKSB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiB5blt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIFBuKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBDbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIENuKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgZG4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiB6KG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IGNlIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyB1ZSA6IGxlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiBUdChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgQ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gWShuLCB0KSB7CiAgICAgIG4gPSBSKG4pOwogICAgICB2YXIgciA9IEhuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgRXQgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiBQdChuKSB7CiAgICAgIG4gPSBGdChuKTsKICAgICAgdmFyIHQgPSBSKG4pOwogICAgICByZXR1cm4gVihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIHBuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcih1KSB7CiAgICAgICAgc1t1XSB8fCBLW3VdIHx8IChfblt1XSA/IF9uW3VdLmZvckVhY2gocikgOiAoaS5wdXNoKHUpLCBzW3VdID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBzID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IEV0KG4gKyAiOiAiICsgaS5tYXAoUHQpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBPdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspIHIucHVzaChrWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIE9uKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gYnQobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIFRuKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBabiA9IFtdLCBGID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uICRuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1GW25dLkphID09PSAwICYmIChGW25dID0gdm9pZCAwLCBabi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIG9uKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IFpuLmxlbmd0aCA/IFpuLnBvcCgpIDogRi5sZW5ndGg7CiAgICAgICAgICByZXR1cm4gRlt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpIHJldHVybiAibnVsbCI7CiAgICAgIHZhciB0ID0gdHlwZW9mIG47CiAgICAgIHJldHVybiB0ID09PSAib2JqZWN0IiB8fCB0ID09PSAiYXJyYXkiIHx8IHQgPT09ICJmdW5jdGlvbiIgPyBuLnRvU3RyaW5nKCkgOiAiIiArIG47CiAgICB9CiAgICBmdW5jdGlvbiBkZShuLCB0KSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShvdFtyID4+IDJdKTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHN0W3IgPj4gM10pOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBmbG9hdCB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGhlKG4pIHsKICAgICAgdmFyIHQgPSBGdW5jdGlvbjsKICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBCbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIG1lKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiAkW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHhbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gdG5baSA+PiAxXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBnbltpID4+IDFdOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIGtbaSA+PiAyXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBEW2kgPj4gMl07CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGludGVnZXIgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBYbihuKSB7CiAgICAgIHJldHVybiBuIHx8IHYoIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9ICIgKyBuKSwgRltuXS52YWx1ZTsKICAgIH0KICAgIGZ1bmN0aW9uIFN0KG4sIHQpIHsKICAgICAgdmFyIHIgPSBLW25dOwogICAgICByZXR1cm4gciA9PT0gdm9pZCAwICYmIHYodCArICIgaGFzIHVua25vd24gdHlwZSAiICsgUHQobikpLCByOwogICAgfQogICAgdmFyIHllID0ge30sIE10ID0ge307CiAgICBmdW5jdGlvbiBXdCgpIHsKICAgICAgaWYgKCFKbikgewogICAgICAgIHZhciBuID0geyBVU0VSOiAid2ViX3VzZXIiLCBMT0dOQU1FOiAid2ViX3VzZXIiLCBQQVRIOiAiLyIsIFBXRDogIi8iLCBIT01FOiAiL2hvbWUvd2ViX3VzZXIiLCBMQU5HOiAodHlwZW9mIG5hdmlnYXRvciA9PSAib2JqZWN0IiAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gfHwgIkMiKS5yZXBsYWNlKCItIiwgIl8iKSArICIuVVRGLTgiLCBfOiBPIHx8ICIuL3RoaXMucHJvZ3JhbSIgfSwgdDsKICAgICAgICBmb3IgKHQgaW4gTXQpIG5bdF0gPSBNdFt0XTsKICAgICAgICB2YXIgciA9IFtdOwogICAgICAgIGZvciAodCBpbiBuKSByLnB1c2godCArICI9IiArIG5bdF0pOwogICAgICAgIEpuID0gcjsKICAgICAgfQogICAgICByZXR1cm4gSm47CiAgICB9CiAgICB2YXIgSm4sIGt0ID0gW107CiAgICBmdW5jdGlvbiBSdChuKSB7CiAgICAgIHZhciB0ID0ge30sIHI7CiAgICAgIGZvciAociBpbiBuKSAoZnVuY3Rpb24oaSkgewogICAgICAgIHZhciBzID0gbltpXTsKICAgICAgICB0W2ldID0gdHlwZW9mIHMgPT0gImZ1bmN0aW9uIiA/IGZ1bmN0aW9uKCkgewogICAgICAgICAga3QucHVzaChpKTsKICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgIHJldHVybiBzLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9IGZpbmFsbHkgewogICAgICAgICAgICBpZiAoTG4pIHJldHVybjsKICAgICAgICAgICAgdmFyIHUgPSBrdC5wb3AoKTsKICAgICAgICAgICAgcnQodSA9PT0gaSk7CiAgICAgICAgICB9CiAgICAgICAgfSA6IHM7CiAgICAgIH0pKHIpOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIGZvciAodmFyIEl0ID0gQXJyYXkoMjU2KSwgYm4gPSAwOyAyNTYgPiBibjsgKytibikgSXRbYm5dID0gU3RyaW5nLmZyb21DaGFyQ29kZShibik7CiAgICBwdCA9IEl0LCBybiA9IGUuQmluZGluZ0Vycm9yID0gem4oIkJpbmRpbmdFcnJvciIpLCB2dCA9IGUuSW50ZXJuYWxFcnJvciA9IHpuKCJJbnRlcm5hbEVycm9yIiksIEcucHJvdG90eXBlLmlzQWxpYXNPZiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEcgJiYgbiBpbnN0YW5jZW9mIEcpKSByZXR1cm4gITE7CiAgICAgIHZhciB0ID0gdGhpcy5BLmZhLmVhLCByID0gdGhpcy5BLmRhLCBpID0gbi5BLmZhLmVhOwogICAgICBmb3IgKG4gPSBuLkEuZGE7IHQuaWE7ICkgciA9IHQucWEociksIHQgPSB0LmlhOwogICAgICBmb3IgKDsgaS5pYTsgKSBuID0gaS5xYShuKSwgaSA9IGkuaWE7CiAgICAgIHJldHVybiB0ID09PSBpICYmIHIgPT09IG47CiAgICB9LCBHLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkgewogICAgICBpZiAodGhpcy5BLmRhIHx8IFZuKHRoaXMpLCB0aGlzLkEucGEpIHJldHVybiB0aGlzLkEuY291bnQudmFsdWUgKz0gMSwgdGhpczsKICAgICAgdmFyIG4gPSBkbihPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSwgeyBBOiB7IHZhbHVlOiBhZSh0aGlzLkEpIH0gfSkpOwogICAgICByZXR1cm4gbi5BLmNvdW50LnZhbHVlICs9IDEsIG4uQS5vYSA9ICExLCBuOwogICAgfSwgRy5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24oKSB7CiAgICAgIHRoaXMuQS5kYSB8fCBWbih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBndCh0aGlzKSwgd3QodGhpcy5BKSwgdGhpcy5BLnBhIHx8ICh0aGlzLkEuZ2EgPSB2b2lkIDAsIHRoaXMuQS5kYSA9IHZvaWQgMCk7CiAgICB9LCBHLnByb3RvdHlwZS5pc0RlbGV0ZWQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICF0aGlzLkEuZGE7CiAgICB9LCBHLnByb3RvdHlwZS5kZWxldGVMYXRlciA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gdGhpcy5BLmRhIHx8IFZuKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIG1uLnB1c2godGhpcyksIG1uLmxlbmd0aCA9PT0gMSAmJiBobiAmJiBobihZbiksIHRoaXMuQS5vYSA9ICEwLCB0aGlzOwogICAgfSwgei5wcm90b3R5cGUuRGEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHJldHVybiB0aGlzLndhICYmIChuID0gdGhpcy53YShuKSksIG47CiAgICB9LCB6LnByb3RvdHlwZS52YSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdGhpcy5uYSAmJiB0aGlzLm5hKG4pOwogICAgfSwgei5wcm90b3R5cGUuYXJnUGFja0FkdmFuY2UgPSA4LCB6LnByb3RvdHlwZS5yZWFkVmFsdWVGcm9tUG9pbnRlciA9IEVuLCB6LnByb3RvdHlwZS5kZWxldGVPYmplY3QgPSBmdW5jdGlvbihuKSB7CiAgICAgIG4gIT09IG51bGwgJiYgbi5kZWxldGUoKTsKICAgIH0sIHoucHJvdG90eXBlLmZyb21XaXJlVHlwZSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgZnVuY3Rpb24gdCgpIHsKICAgICAgICByZXR1cm4gdGhpcy5zYSA/IFBuKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMuR2EsIGRhOiByLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBQbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLCBkYTogbiB9KTsKICAgICAgfQogICAgICB2YXIgciA9IHRoaXMuRGEobik7CiAgICAgIGlmICghcikgcmV0dXJuIHRoaXMudmEobiksIG51bGw7CiAgICAgIHZhciBpID0gZmUodGhpcy5lYSwgcik7CiAgICAgIGlmIChpICE9PSB2b2lkIDApCiAgICAgICAgcmV0dXJuIGkuQS5jb3VudC52YWx1ZSA9PT0gMCA/IChpLkEuZGEgPSByLCBpLkEuZ2EgPSBuLCBpLmNsb25lKCkpIDogKGkgPSBpLmNsb25lKCksIHRoaXMudmEobiksIGkpOwogICAgICBpZiAoaSA9IHRoaXMuZWEuQ2EociksIGkgPSBBdFtpXSwgIWkpIHJldHVybiB0LmNhbGwodGhpcyk7CiAgICAgIGkgPSB0aGlzLnJhID8gaS56YSA6IGkucG9pbnRlclR5cGU7CiAgICAgIHZhciBzID0gQ3QociwgdGhpcy5lYSwgaS5lYSk7CiAgICAgIHJldHVybiBzID09PSBudWxsID8gdC5jYWxsKHRoaXMpIDogdGhpcy5zYSA/IFBuKGkuZWEubWEsIHsgZmE6IGksIGRhOiBzLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBQbigKICAgICAgICBpLmVhLm1hLAogICAgICAgIHsgZmE6IGksIGRhOiBzIH0KICAgICAgKTsKICAgIH0sIGUuZ2V0SW5oZXJpdGVkSW5zdGFuY2VDb3VudCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gT2JqZWN0LmtleXMoeW4pLmxlbmd0aDsKICAgIH0sIGUuZ2V0TGl2ZUluaGVyaXRlZEluc3RhbmNlcyA9IGZ1bmN0aW9uKCkgewogICAgICB2YXIgbiA9IFtdLCB0OwogICAgICBmb3IgKHQgaW4geW4pIHluLmhhc093blByb3BlcnR5KHQpICYmIG4ucHVzaCh5blt0XSk7CiAgICAgIHJldHVybiBuOwogICAgfSwgZS5mbHVzaFBlbmRpbmdEZWxldGVzID0gWW4sIGUuc2V0RGVsYXlGdW5jdGlvbiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgaG4gPSBuLCBtbi5sZW5ndGggJiYgaG4gJiYgaG4oWW4pOwogICAgfSwgRXQgPSBlLlVuYm91bmRUeXBlRXJyb3IgPSB6bigiVW5ib3VuZFR5cGVFcnJvciIpLCBlLmNvdW50X2VtdmFsX2hhbmRsZXMgPSBmdW5jdGlvbigpIHsKICAgICAgZm9yICh2YXIgbiA9IDAsIHQgPSA1OyB0IDwgRi5sZW5ndGg7ICsrdCkgRlt0XSAhPT0gdm9pZCAwICYmICsrbjsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmdldF9maXJzdF9lbXZhbCA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gNTsgbiA8IEYubGVuZ3RoOyArK24pIGlmIChGW25dICE9PSB2b2lkIDApIHJldHVybiBGW25dOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0sIGZ0LnB1c2goeyBCYTogZnVuY3Rpb24oKSB7CiAgICAgIHh0KCk7CiAgICB9IH0pOwogICAgdmFyIHBlID0gewogICAgICB6OiBmdW5jdGlvbihuKSB7CiAgICAgICAgcmV0dXJuIFNuKG4gKyAxNikgKyAxNjsKICAgICAgfSwKICAgICAgdTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHRocm93IG5ldyBpZShuKS5GYSh0LCByKSwgInVuY2F1Z2h0X2V4Y2VwdGlvbiIgaW4gQW4gPyBBbi54YSsrIDogQW4ueGEgPSAxLCBuOwogICAgICB9LAogICAgICB3OiBmdW5jdGlvbihuLCB0LCByLCBpLCBzKSB7CiAgICAgICAgdmFyIHUgPSBVbihyKTsKICAgICAgICB0ID0gUih0KSwgQihuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24obCkgewogICAgICAgICAgcmV0dXJuICEhbDsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihsLCBjKSB7CiAgICAgICAgICByZXR1cm4gYyA/IGkgOiBzOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24obCkgewogICAgICAgICAgaWYgKHIgPT09IDEpIHZhciBjID0gJDsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDIpIGMgPSB0bjsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDQpIGMgPSBrOwogICAgICAgICAgZWxzZSB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGJvb2xlYW4gdHlwZSBzaXplOiAiICsgdCk7CiAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUoY1tsID4+IHVdKTsKICAgICAgICB9LCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgaDogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSwgbCwgYywgeSwgZiwgZCwgbSwgdykgewogICAgICAgIGQgPSBSKGQpLCB1ID0gWShzLCB1KSwgYyAmJiAoYyA9IFkobCwgYykpLCBmICYmIChmID0gWSh5LCBmKSksIHcgPSBZKG0sIHcpOwogICAgICAgIHZhciBQID0gRG4oZCk7CiAgICAgICAgX3QoUCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBwbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbaV0pOwogICAgICAgIH0pLCBhbihbbiwgdCwgcl0sIGkgPyBbaV0gOiBbXSwgZnVuY3Rpb24ocCkgewogICAgICAgICAgaWYgKHAgPSBwWzBdLCBpKQogICAgICAgICAgICB2YXIgTiA9IHAuZWEsIFcgPSBOLm1hOwogICAgICAgICAgZWxzZSBXID0gRy5wcm90b3R5cGU7CiAgICAgICAgICBwID0gQm4oUCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykgIT09IEkpIHRocm93IG5ldyBybigiVXNlICduZXcnIHRvIGNvbnN0cnVjdCAiICsgZCk7CiAgICAgICAgICAgIGlmIChMLmxhID09PSB2b2lkIDApIHRocm93IG5ldyBybihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIganQgPSBMLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoanQgPT09IHZvaWQgMCkgdGhyb3cgbmV3IHJuKCJUcmllZCB0byBpbnZva2UgY3RvciBvZiAiICsgZCArICIgd2l0aCBpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0ZWQgKCIgKyBPYmplY3Qua2V5cyhMLmxhKS50b1N0cmluZygpICsgIikgcGFyYW1ldGVycyBpbnN0ZWFkISIpOwogICAgICAgICAgICByZXR1cm4ganQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICAgIH0pOwogICAgICAgICAgdmFyIEkgPSBPYmplY3QuY3JlYXRlKFcsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHAgfSB9KTsKICAgICAgICAgIHAucHJvdG90eXBlID0gSTsKICAgICAgICAgIHZhciBMID0gbmV3IHNlKGQsIHAsIEksIHcsIE4sIHUsIGMsIGYpOwogICAgICAgICAgTiA9IG5ldyB6KGQsIEwsICEwLCAhMSksIFcgPSBuZXcgeihkICsgIioiLCBMLCAhMSwgITEpOwogICAgICAgICAgdmFyIHZuID0gbmV3IHooZCArICIgY29uc3QqIiwgTCwgITEsICEwKTsKICAgICAgICAgIHJldHVybiBBdFtuXSA9IHsgcG9pbnRlclR5cGU6IFcsIHphOiB2biB9LCBUdChQLCBwKSwgW04sIFcsIHZuXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgZzogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSkgewogICAgICAgIHJ0KDAgPCB0KTsKICAgICAgICB2YXIgbCA9IE90KHQsIHIpOwogICAgICAgIHMgPSBZKGksIHMpOwogICAgICAgIHZhciBjID0gW3VdLCB5ID0gW107CiAgICAgICAgYW4oW10sIFtuXSwgZnVuY3Rpb24oZikgewogICAgICAgICAgZiA9IGZbMF07CiAgICAgICAgICB2YXIgZCA9ICJjb25zdHJ1Y3RvciAiICsgZi5uYW1lOwogICAgICAgICAgaWYgKGYuZWEubGEgPT09IHZvaWQgMCAmJiAoZi5lYS5sYSA9IFtdKSwgZi5lYS5sYVt0IC0gMV0gIT09IHZvaWQgMCkgdGhyb3cgbmV3IHJuKCJDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgY29uc3RydWN0b3JzIHdpdGggaWRlbnRpY2FsIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgKHQgLSAxKSArICIpIGZvciBjbGFzcyAnIiArIGYubmFtZSArICInISBPdmVybG9hZCByZXNvbHV0aW9uIGlzIGN1cnJlbnRseSBvbmx5IHBlcmZvcm1lZCB1c2luZyB0aGUgcGFyYW1ldGVyIGNvdW50LCBub3QgYWN0dWFsIHR5cGUgaW5mbyEiKTsKICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBwbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZi5uYW1lICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGwpOwogICAgICAgICAgfSwgYW4oW10sIGwsIGZ1bmN0aW9uKG0pIHsKICAgICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCAhPT0gdCAtIDEgJiYgdihkICsgIiBjYWxsZWQgd2l0aCAiICsgYXJndW1lbnRzLmxlbmd0aCArICIgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKHQgLSAxKSksIHkubGVuZ3RoID0gMCwgYy5sZW5ndGggPSB0OwogICAgICAgICAgICAgIGZvciAodmFyIHcgPSAxOyB3IDwgdDsgKyt3KSBjW3ddID0gbVt3XS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgeSwKICAgICAgICAgICAgICAgIGFyZ3VtZW50c1t3IC0gMV0KICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiB3ID0gcy5hcHBseShudWxsLCBjKSwgT24oeSksIG1bMF0uZnJvbVdpcmVUeXBlKHcpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSwgbCwgYywgeSwgZikgewogICAgICAgIHQgPSBSKHQpLCBzID0gWShpLCBzKSwgYW4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgbSA9IGQubmFtZSArICIuIiArIHQsIHcgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHBuKCJDYW5ub3QgYWNjZXNzICIgKyBtICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBsXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHkgPyB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBwbigiQ2Fubm90IGFjY2VzcyAiICsgbSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgbF0pOwogICAgICAgICAgfSA6IHcuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYobSArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCB3KSwgYW4oW10sIHkgPyBbciwgbF0gOiBbcl0sIGZ1bmN0aW9uKFApIHsKICAgICAgICAgICAgdmFyIHAgPSBQWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciBJID0gYnQodGhpcywgZCwgbSArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIHAuZnJvbVdpcmVUeXBlKHModSwgSSkpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAoeSkgewogICAgICAgICAgICAgIHkgPSBZKGMsIHkpOwogICAgICAgICAgICAgIHZhciBXID0gUFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKEkpIHsKICAgICAgICAgICAgICAgIHZhciBMID0gYnQodGhpcywgZCwgbSArICIgc2V0dGVyIiksIHZuID0gW107CiAgICAgICAgICAgICAgICB5KGYsIEwsIFcudG9XaXJlVHlwZSh2biwgSSkpLCBPbih2bik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBSKHQpLCBCKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IEZbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gJG4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIG9uKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogRW4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IFVuKHIpLCB0ID0gUih0KSwgQihuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIHMpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBzICE9ICJudW1iZXIiICYmIHR5cGVvZiBzICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBzbihzKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgICByZXR1cm4gczsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBkZSh0LCByKSwKICAgICAgICAgIGthOiBudWxsCiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGM6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIHMsIHUpIHsKICAgICAgICB2YXIgbCA9IE90KHQsIHIpOwogICAgICAgIG4gPSBSKG4pLCBzID0gWShpLCBzKSwgX3QobiwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBwbigiQ2Fubm90IGNhbGwgIiArIG4gKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgbCk7CiAgICAgICAgfSwgdCAtIDEpLCBhbihbXSwgbCwgZnVuY3Rpb24oYykgewogICAgICAgICAgdmFyIHkgPSBuLCBmID0gbjsKICAgICAgICAgIGMgPSBbY1swXSwgbnVsbF0uY29uY2F0KGMuc2xpY2UoMSkpOwogICAgICAgICAgdmFyIGQgPSBzLCBtID0gYy5sZW5ndGg7CiAgICAgICAgICAyID4gbSAmJiB2KCJhcmdUeXBlcyBhcnJheSBzaXplIG1pc21hdGNoISBNdXN0IGF0IGxlYXN0IGdldCByZXR1cm4gdmFsdWUgYW5kICd0aGlzJyB0eXBlcyEiKTsKICAgICAgICAgIGZvciAodmFyIHcgPSBjWzFdICE9PSBudWxsICYmICExLCBQID0gITEsIHAgPSAxOyBwIDwgYy5sZW5ndGg7ICsrcCkgaWYgKGNbcF0gIT09IG51bGwgJiYgY1twXS5rYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgICAgIFAgPSAhMDsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICB9CiAgICAgICAgICB2YXIgTiA9IGNbMF0ubmFtZSAhPT0gInZvaWQiLCBXID0gIiIsIEkgPSAiIjsKICAgICAgICAgIGZvciAocCA9IDA7IHAgPCBtIC0gMjsgKytwKSBXICs9IChwICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgcCwgSSArPSAocCAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHAgKyAiV2lyZWQiOwogICAgICAgICAgZiA9ICJyZXR1cm4gZnVuY3Rpb24gIiArIERuKGYpICsgIigiICsgVyArIGApIHsKaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IGAgKyAobSAtIDIpICsgYCkgewp0aHJvd0JpbmRpbmdFcnJvcignZnVuY3Rpb24gYCArIGYgKyAiIGNhbGxlZCB3aXRoICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAobSAtIDIpICsgYCBhcmdzIScpOwp9CmAsIFAgJiYgKGYgKz0gYHZhciBkZXN0cnVjdG9ycyA9IFtdOwpgKTsKICAgICAgICAgIHZhciBMID0gUCA/ICJkZXN0cnVjdG9ycyIgOiAibnVsbCI7CiAgICAgICAgICBmb3IgKFcgPSAidGhyb3dCaW5kaW5nRXJyb3IgaW52b2tlciBmbiBydW5EZXN0cnVjdG9ycyByZXRUeXBlIGNsYXNzUGFyYW0iLnNwbGl0KCIgIiksIGQgPSBbdiwgZCwgdSwgT24sIGNbMF0sIGNbMV1dLCB3ICYmIChmICs9ICJ2YXIgdGhpc1dpcmVkID0gY2xhc3NQYXJhbS50b1dpcmVUeXBlKCIgKyBMICsgYCwgdGhpcyk7CmApLCBwID0gMDsgcCA8IG0gLSAyOyArK3ApIGYgKz0gInZhciBhcmciICsgcCArICJXaXJlZCA9IGFyZ1R5cGUiICsgcCArICIudG9XaXJlVHlwZSgiICsgTCArICIsIGFyZyIgKyBwICsgIik7IC8vICIgKyBjW3AgKyAyXS5uYW1lICsgYApgLCBXLnB1c2goImFyZ1R5cGUiICsgcCksIGQucHVzaChjW3AgKyAyXSk7CiAgICAgICAgICBpZiAodyAmJiAoSSA9ICJ0aGlzV2lyZWQiICsgKDAgPCBJLmxlbmd0aCA/ICIsICIgOiAiIikgKyBJKSwgZiArPSAoTiA/ICJ2YXIgcnYgPSAiIDogIiIpICsgImludm9rZXIoZm4iICsgKDAgPCBJLmxlbmd0aCA/ICIsICIgOiAiIikgKyBJICsgYCk7CmAsIFApIGYgKz0gYHJ1bkRlc3RydWN0b3JzKGRlc3RydWN0b3JzKTsKYDsKICAgICAgICAgIGVsc2UgZm9yIChwID0gdyA/IDEgOiAyOyBwIDwgYy5sZW5ndGg7ICsrcCkgbSA9IHAgPT09IDEgPyAidGhpc1dpcmVkIiA6ICJhcmciICsgKHAgLSAyKSArICJXaXJlZCIsIGNbcF0ua2EgIT09IG51bGwgJiYgKGYgKz0gbSArICJfZHRvcigiICsgbSArICIpOyAvLyAiICsgY1twXS5uYW1lICsgYApgLCBXLnB1c2gobSArICJfZHRvciIpLCBkLnB1c2goY1twXS5rYSkpOwogICAgICAgICAgcmV0dXJuIE4gJiYgKGYgKz0gYHZhciByZXQgPSByZXRUeXBlLmZyb21XaXJlVHlwZShydik7CnJldHVybiByZXQ7CmApLCBXLnB1c2goZiArIGB9CmApLCBjID0gaGUoVykuYXBwbHkobnVsbCwgZCksIFR0KHksIGMsIHQgLSAxKSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGU6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIHMpIHsKICAgICAgICBmdW5jdGlvbiB1KGYpIHsKICAgICAgICAgIHJldHVybiBmOwogICAgICAgIH0KICAgICAgICB0ID0gUih0KSwgcyA9PT0gLTEgJiYgKHMgPSA0Mjk0OTY3Mjk1KTsKICAgICAgICB2YXIgbCA9IFVuKHIpOwogICAgICAgIGlmIChpID09PSAwKSB7CiAgICAgICAgICB2YXIgYyA9IDMyIC0gOCAqIHI7CiAgICAgICAgICB1ID0gZnVuY3Rpb24oZikgewogICAgICAgICAgICByZXR1cm4gZiA8PCBjID4+PiBjOwogICAgICAgICAgfTsKICAgICAgICB9CiAgICAgICAgdmFyIHkgPSB0LmluZGV4T2YoInVuc2lnbmVkIikgIT0gLTE7CiAgICAgICAgQihuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogdSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oZiwgZCkgewogICAgICAgICAgaWYgKHR5cGVvZiBkICE9ICJudW1iZXIiICYmIHR5cGVvZiBkICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBzbihkKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgaWYgKGQgPCBpIHx8IGQgPiBzKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXNzaW5nIGEgbnVtYmVyICInICsgc24oZCkgKyAnIiBmcm9tIEpTIHNpZGUgdG8gQy9DKysgc2lkZSB0byBhbiBhcmd1bWVudCBvZiB0eXBlICInICsgdCArICciLCB3aGljaCBpcyBvdXRzaWRlIHRoZSB2YWxpZCByYW5nZSBbJyArIGkgKyAiLCAiICsgcyArICJdISIpOwogICAgICAgICAgcmV0dXJuIHkgPyBkID4+PiAwIDogZCB8IDA7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBtZSh0LCBsLCBpICE9PSAwKSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGQ6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBmdW5jdGlvbiBpKHUpIHsKICAgICAgICAgIHUgPj49IDI7CiAgICAgICAgICB2YXIgbCA9IEQ7CiAgICAgICAgICByZXR1cm4gbmV3IHMobm4sIGxbdSArIDFdLCBsW3VdKTsKICAgICAgICB9CiAgICAgICAgdmFyIHMgPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gUihyKSwgQihuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFIodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEIobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgcyA9IERbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpIGZvciAodmFyIHUgPSBpICsgNCwgbCA9IDA7IGwgPD0gczsgKytsKSB7CiAgICAgICAgICAgICAgdmFyIGMgPSBpICsgNCArIGw7CiAgICAgICAgICAgICAgaWYgKGwgPT0gcyB8fCB4W2NdID09IDApIHsKICAgICAgICAgICAgICAgIGlmICh1KSB7CiAgICAgICAgICAgICAgICAgIHZhciB5ID0gdSwgZiA9IHgsIGQgPSB5ICsgKGMgLSB1KTsKICAgICAgICAgICAgICAgICAgZm9yICh1ID0geTsgZlt1XSAmJiAhKHUgPj0gZCk7ICkgKyt1OwogICAgICAgICAgICAgICAgICBpZiAoMTYgPCB1IC0geSAmJiBmLnN1YmFycmF5ICYmIGl0KSB5ID0gaXQuZGVjb2RlKGYuc3ViYXJyYXkoeSwgdSkpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAiIjsgeSA8IHU7ICkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBmW3krK107CiAgICAgICAgICAgICAgICAgICAgICBpZiAobSAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZbeSsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG0gJiAyMjQpID09IDE5MikgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChtICYgMzEpIDw8IDYgfCB3KTsKICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3krK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBtID0gKG0gJiAyNDApID09IDIyNCA/IChtICYgMTUpIDw8IDEyIHwgdyA8PCA2IHwgUCA6IChtICYgNykgPDwgMTggfCB3IDw8IDEyIHwgUCA8PCA2IHwgZlt5KytdICYgNjMsIDY1NTM2ID4gbSA/IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShtKSA6IChtIC09IDY1NTM2LCBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBtID4+IDEwLCA1NjMyMCB8IG0gJiAxMDIzKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobSk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHkgPSBkOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgeSA9ICIiOwogICAgICAgICAgICAgICAgaWYgKHAgPT09IHZvaWQgMCkgdmFyIHAgPSB5OwogICAgICAgICAgICAgICAgZWxzZSBwICs9ICJcMCIsIHAgKz0geTsKICAgICAgICAgICAgICAgIHUgPSBjICsgMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgZm9yIChwID0gQXJyYXkocyksIGwgPSAwOyBsIDwgczsgKytsKSBwW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZSh4W2kgKyA0ICsgbF0pOwogICAgICAgICAgICAgIHAgPSBwLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBWKGkpLCBwOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIHMpIHsKICAgICAgICAgICAgcyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChzID0gbmV3IFVpbnQ4QXJyYXkocykpOwogICAgICAgICAgICB2YXIgdSA9IHR5cGVvZiBzID09ICJzdHJpbmciOwogICAgICAgICAgICB1IHx8IHMgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IHMgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBzIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGwgPSAociAmJiB1ID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgcy5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIG0gPSBzLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBtICYmIDU3MzQzID49IG0gJiYgKG0gPSA2NTUzNiArICgobSAmIDEwMjMpIDw8IDEwKSB8IHMuY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBtID8gKytmIDogZiA9IDIwNDcgPj0gbSA/IGYgKyAyIDogNjU1MzUgPj0gbSA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIHMubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBjID0gU24oNCArIGwgKyAxKTsKICAgICAgICAgICAgaWYgKERbYyA+PiAyXSA9IGwsIHIgJiYgdSkgJHQocywgYyArIDQsIGwgKyAxKTsKICAgICAgICAgICAgZWxzZSBpZiAodSkgZm9yICh1ID0gMDsgdSA8IGw7ICsrdSkgewogICAgICAgICAgICAgIHZhciB5ID0gcy5jaGFyQ29kZUF0KHUpOwogICAgICAgICAgICAgIDI1NSA8IHkgJiYgKFYoYyksIHYoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpKSwgeFtjICsgNCArIHVdID0geTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGZvciAodSA9IDA7IHUgPCBsOyArK3UpIHhbYyArIDQgKyB1XSA9IHNbdV07CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaChWLCBjKSwgYzsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBFbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIFYoaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFIociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IFh0LCBzID0gSnQsIHUgPSBLdCwgbCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gZ247CiAgICAgICAgICB9LCBjID0gMTsKICAgICAgICBlbHNlIHQgPT09IDQgJiYgKGkgPSBRdCwgcyA9IHF0LCB1ID0gbmUsIGwgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiBEOwogICAgICAgIH0sIGMgPSAyKTsKICAgICAgICBCKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gRFt5ID4+IDJdLCBkID0gbCgpLCBtLCB3ID0geSArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgcCA9IHkgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFtwID4+IGNdID09IDApICYmICh3ID0gaSh3LCBwIC0gdyksIG0gPT09IHZvaWQgMCA/IG0gPSB3IDogKG0gKz0gIlwwIiwgbSArPSB3KSwgdyA9IHAgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiBWKHkpLCBtOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHksIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gdShmKSwgbSA9IFNuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gRFttID4+IDJdID0gZCA+PiBjLCBzKGYsIG0gKyA0LCBkICsgdCksIHkgIT09IG51bGwgJiYgeS5wdXNoKFYsIG0pLCBtOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogRW4sIGthOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBWKHkpOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgQihuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSBYbihuKSwgdCA9IFN0KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBzID0gb24oaSk7CiAgICAgICAgcmV0dXJuIGtbciA+PiAyXSA9IHMsIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogJG4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IFhuKG4pLCB0ID0gWG4odCksIG9uKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSB5ZVtuXTsKICAgICAgICByZXR1cm4gb24odCA9PT0gdm9pZCAwID8gUihuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgT24oRltuXS52YWx1ZSksICRuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBTdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIG9uKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBmbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgeC5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0geC5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKSByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBVLmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBubi5ieXRlTGVuZ3RoICsgNjU1MzUgPj4+IDE2KSwgdXQoVS5idWZmZXIpOwogICAgICAgICAgICAgIHZhciBzID0gMTsKICAgICAgICAgICAgICBicmVhayBuOwogICAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgfQogICAgICAgICAgICBzID0gdm9pZCAwOwogICAgICAgICAgfQogICAgICAgICAgaWYgKHMpIHJldHVybiAhMDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuICExOwogICAgICB9LAogICAgICBzOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSAwOwogICAgICAgIHJldHVybiBXdCgpLmZvckVhY2goZnVuY3Rpb24oaSwgcykgewogICAgICAgICAgdmFyIHUgPSB0ICsgcjsKICAgICAgICAgIGZvciAocyA9IGtbbiArIDQgKiBzID4+IDJdID0gdSwgdSA9IDA7IHUgPCBpLmxlbmd0aDsgKyt1KSAkW3MrKyA+PiAwXSA9IGkuY2hhckNvZGVBdCh1KTsKICAgICAgICAgICRbcyA+PiAwXSA9IDAsIHIgKz0gaS5sZW5ndGggKyAxOwogICAgICAgIH0pLCAwOwogICAgICB9LAogICAgICB0OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSBXdCgpOwogICAgICAgIGtbbiA+PiAyXSA9IHIubGVuZ3RoOwogICAgICAgIHZhciBpID0gMDsKICAgICAgICByZXR1cm4gci5mb3JFYWNoKGZ1bmN0aW9uKHMpIHsKICAgICAgICAgIGkgKz0gcy5sZW5ndGggKyAxOwogICAgICAgIH0pLCBrW3QgPj4gMl0gPSBpLCAwOwogICAgICB9LAogICAgICBhOiBVCiAgICB9OwogICAgKGZ1bmN0aW9uKCkgewogICAgICBmdW5jdGlvbiBuKHUpIHsKICAgICAgICB1ID0gdS5leHBvcnRzLCB1ID0gUnQodSksIGUuYXNtID0gdSwgWC0tLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFgpLCBYID09IDAgJiYgbG4gJiYgKHUgPSBsbiwgbG4gPSBudWxsLCB1KCkpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHQodSkgewogICAgICAgIG4odS5pbnN0YW5jZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcih1KSB7CiAgICAgICAgcmV0dXJuIHJlKCkudGhlbihmdW5jdGlvbihsKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUobCwgaSk7CiAgICAgICAgfSkudGhlbih1LCBmdW5jdGlvbihsKSB7CiAgICAgICAgICBFKCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAiICsgbCksIGZuKGwpOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIHZhciBpID0geyBhOiBwZSB9OwogICAgICBpZiAoWCsrLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFgpLCBlLmluc3RhbnRpYXRlV2FzbSkgdHJ5IHsKICAgICAgICB2YXIgcyA9IGUuaW5zdGFudGlhdGVXYXNtKGksIG4pOwogICAgICAgIHJldHVybiBzID0gUnQocyk7CiAgICAgIH0gY2F0Y2ggKHUpIHsKICAgICAgICByZXR1cm4gRSgiTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogIiArIHUpLCAhMTsKICAgICAgfQogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKE0gfHwgdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nICE9ICJmdW5jdGlvbiIgfHwgaHQoKSB8fCBObigiZmlsZTovLyIpIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iKSByZXR1cm4gcih0KTsKICAgICAgICBmZXRjaChKLCB7IGNyZWRlbnRpYWxzOiAic2FtZS1vcmlnaW4iIH0pLnRoZW4oZnVuY3Rpb24odSkgewogICAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHUsIGkpLnRoZW4odCwgZnVuY3Rpb24obCkgewogICAgICAgICAgICByZXR1cm4gRSgid2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6ICIgKyBsKSwgRSgiZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb24iKSwgcih0KTsKICAgICAgICAgIH0pOwogICAgICAgIH0pOwogICAgICB9KCksIHt9OwogICAgfSkoKTsKICAgIHZhciB4dCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoeHQgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGUuYXNtLkIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBTbiA9IGUuX21hbGxvYyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFNuID0gZS5fbWFsbG9jID0gZS5hc20uQykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIFYgPSBlLl9mcmVlID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoViA9IGUuX2ZyZWUgPSBlLmFzbS5EKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgRnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZS5hc20uRSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICBlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBlLmFzbS5GKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpID0gZS5hc20uRykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aSA9IGUuYXNtLkgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9pID0gZS5hc20uSSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpID0gZS5hc20uSikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWkgPSBlLmFzbS5LKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2ZpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9maWkgPSBlLmFzbS5MKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWYgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpZiA9IGUuYXNtLk0pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWkgPSBlLmFzbS5OKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaSA9IGUuYXNtLk8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaSA9IGUuYXNtLlApLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaSA9IGUuYXNtLlEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaWkgPSBlLmFzbS5SKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpID0gZS5hc20uUykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZS5hc20uVCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGUuYXNtLlUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBlLmFzbS5WKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGUuYXNtLlcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGUuYXNtLlgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpID0gZS5hc20uWSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaSA9IGUuYXNtLlopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpID0gZS5hc20uXykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGUuYXNtLiQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZS5hc20uYWEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBlLmFzbS5iYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBlLmFzbS5jYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICB2YXIgTW47CiAgICBsbiA9IGZ1bmN0aW9uIG4oKSB7CiAgICAgIE1uIHx8IEtuKCksIE1uIHx8IChsbiA9IG4pOwogICAgfTsKICAgIGZ1bmN0aW9uIEtuKCkgewogICAgICBmdW5jdGlvbiBuKCkgewogICAgICAgIGlmICghTW4gJiYgKE1uID0gITAsIGUuY2FsbGVkUnVuID0gITAsICFMbikpIHsKICAgICAgICAgIGlmICh3bihmdCksIHduKHRlKSwgaChlKSwgZS5vblJ1bnRpbWVJbml0aWFsaXplZCAmJiBlLm9uUnVudGltZUluaXRpYWxpemVkKCksIGUucG9zdFJ1bikgZm9yICh0eXBlb2YgZS5wb3N0UnVuID09ICJmdW5jdGlvbiIgJiYgKGUucG9zdFJ1biA9IFtlLnBvc3RSdW5dKTsgZS5wb3N0UnVuLmxlbmd0aDsgKSB7CiAgICAgICAgICAgIHZhciB0ID0gZS5wb3N0UnVuLnNoaWZ0KCk7CiAgICAgICAgICAgIGR0LnVuc2hpZnQodCk7CiAgICAgICAgICB9CiAgICAgICAgICB3bihkdCk7CiAgICAgICAgfQogICAgICB9CiAgICAgIGlmICghKDAgPCBYKSkgewogICAgICAgIGlmIChlLnByZVJ1bikgZm9yICh0eXBlb2YgZS5wcmVSdW4gPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVSdW4gPSBbZS5wcmVSdW5dKTsgZS5wcmVSdW4ubGVuZ3RoOyApIGVlKCk7CiAgICAgICAgd24obHQpLCAwIDwgWCB8fCAoZS5zZXRTdGF0dXMgPyAoZS5zZXRTdGF0dXMoIlJ1bm5pbmcuLi4iKSwgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGUuc2V0U3RhdHVzKCIiKTsKICAgICAgICAgIH0sIDEpLCBuKCk7CiAgICAgICAgfSwgMSkpIDogbigpKTsKICAgICAgfQogICAgfQogICAgaWYgKGUucnVuID0gS24sIGUucHJlSW5pdCkgZm9yICh0eXBlb2YgZS5wcmVJbml0ID09ICJmdW5jdGlvbiIgJiYgKGUucHJlSW5pdCA9IFtlLnByZUluaXRdKTsgMCA8IGUucHJlSW5pdC5sZW5ndGg7ICkgZS5wcmVJbml0LnBvcCgpKCk7CiAgICByZXR1cm4gS24oKSwgby5yZWFkeTsKICB9Owp9KCk7CmNsYXNzIGogZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgaCkgewogICAgc3VwZXIoZSk7CiAgICBRbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IGg7CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiBqKQogICAgICByZXR1cm4gZTsKICAgIGxldCBoOwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIGggPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICBoID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgaCA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgaCA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgaCA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyBqKGgsIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgaikKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCBoID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgaihoKTsKICB9Cn0KY29uc3QgX2UgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfTsKdmFyIFosIHEsIGNuOwpjbGFzcyBDZSB7CiAgY29uc3RydWN0b3IobywgZSkgewogICAgV24odGhpcywgWik7CiAgICBXbih0aGlzLCBxKTsKICAgIFduKHRoaXMsIGNuKTsKICAgIGtuKHRoaXMsIFosIG8pLCBrbih0aGlzLCBxLCB0aGlzLmFsbG9jYXRlKGUubGVuZ3RoICogZS5CWVRFU19QRVJfRUxFTUVOVCkpLCBrbih0aGlzLCBjbiwgdGhpcy5hbGxvY2F0ZShlLmxlbmd0aCAqIGUuQllURVNfUEVSX0VMRU1FTlQpKTsKICB9CiAgZ2V0IHJnYmFJbWFnZVBvaW50ZXIoKSB7CiAgICByZXR1cm4gSCh0aGlzLCBxKTsKICB9CiAgZ2V0IGJncjBJbWFnZVBvaW50ZXIoKSB7CiAgICByZXR1cm4gSCh0aGlzLCBjbik7CiAgfQogIGFsbG9jYXRlKG8pIHsKICAgIHJldHVybiBIKHRoaXMsIFopLl9tYWxsb2Mobyk7CiAgfQogIGZyZWUoKSB7CiAgICBIKHRoaXMsIFopLl9mcmVlKEgodGhpcywgcSkpLCBIKHRoaXMsIFopLl9mcmVlKEgodGhpcywgY24pKTsKICB9CiAgd3JpdGVEYXRhVG9NZW1vcnkobykgewogICAgSCh0aGlzLCBaKS5IRUFQVTguc2V0KG8sIEgodGhpcywgcSkpOwogIH0KfQpaID0gbmV3IFdlYWtNYXAoKSwgcSA9IG5ldyBXZWFrTWFwKCksIGNuID0gbmV3IFdlYWtNYXAoKTsKY2xhc3MgVGUgewogIGNvbnN0cnVjdG9yKCkgewogICAgUW4odGhpcywgInNhbVdhc21Nb2R1bGUiKTsKICB9CiAgZ2V0T3ZlcnJpZGRlbk1vZHVsZXMobywgZSkgewogICAgcmV0dXJuIHsKICAgICAgbG9jYXRlRmlsZTogKGgpID0+IG5ldyBVUkwoZSB8fCBoLCBvKS5ocmVmCiAgICB9OwogIH0KICBhc3luYyBoYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKG8sIGUpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IGggPSBhd2FpdCBmZXRjaChvKTsKICAgICAgaWYgKCFoLm9rKQogICAgICAgIHRocm93IG5ldyBqKAogICAgICAgICAgYFRoZSBwYXRoIHRvICR7ZX0gaXMgaW5jb3JyZWN0IG9yIHRoZSBtb2R1bGUgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7b31gCiAgICAgICAgKTsKICAgICAgY29uc3QgZyA9IGF3YWl0IGguYXJyYXlCdWZmZXIoKTsKICAgICAgaWYgKCFXZWJBc3NlbWJseS52YWxpZGF0ZShnKSkKICAgICAgICB0aHJvdyBuZXcgaigKICAgICAgICAgIGBUaGUgcHJvdmlkZWQgJHtlfSBpcyBub3QgYSB2YWxpZCBXQVNNIG1vZHVsZS4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7b31gCiAgICAgICAgKTsKICAgIH0gY2F0Y2ggKGgpIHsKICAgICAgaWYgKGggaW5zdGFuY2VvZiBqKQogICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICAgICAiWW91IGNhbiBmaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIGhvc3Qgd2FzbSBmaWxlcyBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuaW5ub3ZhdHJpY3MuY29tL2RpZ2l0YWwtb25ib2FyZGluZy90ZWNobmljYWwvcmVtb3RlL2RvdC13ZWItZG9jdW1lbnQvbGF0ZXN0L2RvY3VtZW50YXRpb24vI19ob3N0aW5nX3NhbV93YXNtIgogICAgICAgICksIGg7CiAgICB9CiAgfQogIGFzeW5jIGdldFdhc21GaWxlTmFtZSgpIHsKICAgIHJldHVybiBhd2FpdCB3ZSgpID8gSHQuc2ltZCA6IEh0LnNhbTsKICB9CiAgYXN5bmMgaW5pdFNhbU1vZHVsZShvLCBlID0gIi93YXNtIikgewogICAgaWYgKHRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgcmV0dXJuOwogICAgY29uc3QgaCA9IGF3YWl0IHRoaXMuZ2V0V2FzbUZpbGVOYW1lKCksIGcgPSBgJHtlfS8ke2h9YDsKICAgIHRyeSB7CiAgICAgIHRoaXMuc2FtV2FzbU1vZHVsZSA9IGF3YWl0IEFlKHRoaXMuZ2V0T3ZlcnJpZGRlbk1vZHVsZXMobywgZykpOwogICAgfSBjYXRjaCB7CiAgICAgIHRocm93IGF3YWl0IHRoaXMuaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZShnLCBoKSwgbmV3IGooIkNvdWxkIG5vdCBpbml0IGRldGVjdG9yLiIpOwogICAgfQogIH0KICBhc3luYyBnZXRTYW1WZXJzaW9uKCkgewogICAgdmFyIGU7CiAgICBjb25zdCBvID0gYXdhaXQgKChlID0gdGhpcy5zYW1XYXNtTW9kdWxlKSA9PSBudWxsID8gdm9pZCAwIDogZS5nZXRJbmZvU3RyaW5nKCkpOwogICAgcmV0dXJuIG8gPT0gbnVsbCA/IHZvaWQgMCA6IG8udHJpbSgpOwogIH0KICAvKgogICAqIEluIFRTIDUuMi4wIHdhcyBhZGRlZCBzcGVjaWFsIGtleXdvcmQgInVzaW5nIiB3aGljaCBjb3VsZCBiZSBwZXJmZWN0IGZvciB0aGlzIGNhc2UuCiAgICogVW5mb3J0dW5hdGVseSwgdml0ZSBwcmVhY3QgcGx1Z2luIGRvZXMgbm90IHN1cHBvcnQgdGhpcyB2ZXJzaW9uIG9mIFRTIHlldC4KICAgKiBDaGVjayBwb3NzaWJpbGl0eSBvZiB1c2luZyAidXNpbmciIGtleXdvcmQgd2hlbiB2aXRlIHByZWFjdCBwbHVnaW4gdXBkYXRlcwogICAqLwogIHdyaXRlSW1hZ2VUb01lbW9yeShvKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IGooIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIGNvbnN0IGUgPSBuZXcgQ2UodGhpcy5zYW1XYXNtTW9kdWxlLCBvKTsKICAgIHJldHVybiBlLndyaXRlRGF0YVRvTWVtb3J5KG8pLCBlOwogIH0KICBjb252ZXJ0VG9TYW1Db2xvckltYWdlKG8sIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgaigiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgY29uc3QgaCA9IHRoaXMud3JpdGVJbWFnZVRvTWVtb3J5KG8pOwogICAgcmV0dXJuIHRoaXMuc2FtV2FzbU1vZHVsZS5jb252ZXJ0VG9TYW1Db2xvckltYWdlKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgaC5yZ2JhSW1hZ2VQb2ludGVyLAogICAgICBfZS5SR0JBLAogICAgICBoLmJncjBJbWFnZVBvaW50ZXIKICAgICksIGg7CiAgfQp9CmNvbnN0IEVlID0gKGEpID0+IE51bWJlci5wYXJzZUZsb2F0KGEudG9GaXhlZCgzKSksIFBlID0gKGEsIG8pID0+IE1hdGgubWluKGEsIG8pOwovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQwogKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMAogKi8KY29uc3QgRHQgPSBTeW1ib2woIkNvbWxpbmsucHJveHkiKSwgT2UgPSBTeW1ib2woIkNvbWxpbmsuZW5kcG9pbnQiKSwgYmUgPSBTeW1ib2woIkNvbWxpbmsucmVsZWFzZVByb3h5IiksIHFuID0gU3ltYm9sKCJDb21saW5rLmZpbmFsaXplciIpLCBJbiA9IFN5bWJvbCgiQ29tbGluay50aHJvd24iKSwgQnQgPSAoYSkgPT4gdHlwZW9mIGEgPT0gIm9iamVjdCIgJiYgYSAhPT0gbnVsbCB8fCB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iLCBTZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBCdChhKSAmJiBhW0R0XSwKICBzZXJpYWxpemUoYSkgewogICAgY29uc3QgeyBwb3J0MTogbywgcG9ydDI6IGUgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgcmV0dXJuIGV0KGEsIG8pLCBbZSwgW2VdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHJldHVybiBhLnN0YXJ0KCksIFJlKGEpOwogIH0KfSwgTWUgPSB7CiAgY2FuSGFuZGxlOiAoYSkgPT4gQnQoYSkgJiYgSW4gaW4gYSwKICBzZXJpYWxpemUoeyB2YWx1ZTogYSB9KSB7CiAgICBsZXQgbzsKICAgIHJldHVybiBhIGluc3RhbmNlb2YgRXJyb3IgPyBvID0gewogICAgICBpc0Vycm9yOiAhMCwKICAgICAgdmFsdWU6IHsKICAgICAgICBtZXNzYWdlOiBhLm1lc3NhZ2UsCiAgICAgICAgbmFtZTogYS5uYW1lLAogICAgICAgIHN0YWNrOiBhLnN0YWNrCiAgICAgIH0KICAgIH0gOiBvID0geyBpc0Vycm9yOiAhMSwgdmFsdWU6IGEgfSwgW28sIFtdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHRocm93IGEuaXNFcnJvciA/IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGEudmFsdWUubWVzc2FnZSksIGEudmFsdWUpIDogYS52YWx1ZTsKICB9Cn0sIHp0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoWwogIFsicHJveHkiLCBTZV0sCiAgWyJ0aHJvdyIsIE1lXQpdKTsKZnVuY3Rpb24gV2UoYSwgbykgewogIGZvciAoY29uc3QgZSBvZiBhKQogICAgaWYgKG8gPT09IGUgfHwgZSA9PT0gIioiIHx8IGUgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZS50ZXN0KG8pKQogICAgICByZXR1cm4gITA7CiAgcmV0dXJuICExOwp9CmZ1bmN0aW9uIGV0KGEsIG8gPSBnbG9iYWxUaGlzLCBlID0gWyIqIl0pIHsKICBvLmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBoKGcpIHsKICAgIGlmICghZyB8fCAhZy5kYXRhKQogICAgICByZXR1cm47CiAgICBpZiAoIVdlKGUsIGcub3JpZ2luKSkgewogICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgb3JpZ2luICcke2cub3JpZ2lufScgZm9yIGNvbWxpbmsgcHJveHlgKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgY29uc3QgeyBpZDogQywgdHlwZTogQSwgcGF0aDogTyB9ID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFtdIH0sIGcuZGF0YSksIGIgPSAoZy5kYXRhLmFyZ3VtZW50TGlzdCB8fCBbXSkubWFwKFEpOwogICAgbGV0IFQ7CiAgICB0cnkgewogICAgICBjb25zdCBfID0gTy5zbGljZSgwLCAtMSkucmVkdWNlKChFLCBNKSA9PiBFW01dLCBhKSwgUyA9IE8ucmVkdWNlKChFLCBNKSA9PiBFW01dLCBhKTsKICAgICAgc3dpdGNoIChBKSB7CiAgICAgICAgY2FzZSAiR0VUIjoKICAgICAgICAgIFQgPSBTOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiU0VUIjoKICAgICAgICAgIF9bTy5zbGljZSgtMSlbMF1dID0gUShnLmRhdGEudmFsdWUpLCBUID0gITA7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJBUFBMWSI6CiAgICAgICAgICBUID0gUy5hcHBseShfLCBiKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkNPTlNUUlVDVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IEUgPSBuZXcgUyguLi5iKTsKICAgICAgICAgICAgVCA9IExlKEUpOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiRU5EUE9JTlQiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCB7IHBvcnQxOiBFLCBwb3J0MjogTSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICAgICAgICAgIGV0KGEsIE0pLCBUID0gamUoRSwgW0VdKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlJFTEVBU0UiOgogICAgICAgICAgVCA9IHZvaWQgMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICByZXR1cm47CiAgICAgIH0KICAgIH0gY2F0Y2ggKF8pIHsKICAgICAgVCA9IHsgdmFsdWU6IF8sIFtJbl06IDAgfTsKICAgIH0KICAgIFByb21pc2UucmVzb2x2ZShUKS5jYXRjaCgoXykgPT4gKHsgdmFsdWU6IF8sIFtJbl06IDAgfSkpLnRoZW4oKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gam4oXyk7CiAgICAgIG8ucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBTKSwgeyBpZDogQyB9KSwgRSksIEEgPT09ICJSRUxFQVNFIiAmJiAoby5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgaCksIFZ0KG8pLCBxbiBpbiBhICYmIHR5cGVvZiBhW3FuXSA9PSAiZnVuY3Rpb24iICYmIGFbcW5dKCkpOwogICAgfSkuY2F0Y2goKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gam4oewogICAgICAgIHZhbHVlOiBuZXcgVHlwZUVycm9yKCJVbnNlcmlhbGl6YWJsZSByZXR1cm4gdmFsdWUiKSwKICAgICAgICBbSW5dOiAwCiAgICAgIH0pOwogICAgICBvLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUyksIHsgaWQ6IEMgfSksIEUpOwogICAgfSk7CiAgfSksIG8uc3RhcnQgJiYgby5zdGFydCgpOwp9CmZ1bmN0aW9uIGtlKGEpIHsKICByZXR1cm4gYS5jb25zdHJ1Y3Rvci5uYW1lID09PSAiTWVzc2FnZVBvcnQiOwp9CmZ1bmN0aW9uIFZ0KGEpIHsKICBrZShhKSAmJiBhLmNsb3NlKCk7Cn0KZnVuY3Rpb24gUmUoYSwgbykgewogIHJldHVybiB0dChhLCBbXSwgbyk7Cn0KZnVuY3Rpb24gUm4oYSkgewogIGlmIChhKQogICAgdGhyb3cgbmV3IEVycm9yKCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGUiKTsKfQpmdW5jdGlvbiBHdChhKSB7CiAgcmV0dXJuIHVuKGEsIHsKICAgIHR5cGU6ICJSRUxFQVNFIgogIH0pLnRoZW4oKCkgPT4gewogICAgVnQoYSk7CiAgfSk7Cn0KY29uc3QgeG4gPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgRm4gPSAiRmluYWxpemF0aW9uUmVnaXN0cnkiIGluIGdsb2JhbFRoaXMgJiYgbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChhKSA9PiB7CiAgY29uc3QgbyA9ICh4bi5nZXQoYSkgfHwgMCkgLSAxOwogIHhuLnNldChhLCBvKSwgbyA9PT0gMCAmJiBHdChhKTsKfSk7CmZ1bmN0aW9uIEllKGEsIG8pIHsKICBjb25zdCBlID0gKHhuLmdldChvKSB8fCAwKSArIDE7CiAgeG4uc2V0KG8sIGUpLCBGbiAmJiBGbi5yZWdpc3RlcihhLCBvLCBhKTsKfQpmdW5jdGlvbiB4ZShhKSB7CiAgRm4gJiYgRm4udW5yZWdpc3RlcihhKTsKfQpmdW5jdGlvbiB0dChhLCBvID0gW10sIGUgPSBmdW5jdGlvbigpIHsKfSkgewogIGxldCBoID0gITE7CiAgY29uc3QgZyA9IG5ldyBQcm94eShlLCB7CiAgICBnZXQoQywgQSkgewogICAgICBpZiAoUm4oaCksIEEgPT09IGJlKQogICAgICAgIHJldHVybiAoKSA9PiB7CiAgICAgICAgICB4ZShnKSwgR3QoYSksIGggPSAhMDsKICAgICAgICB9OwogICAgICBpZiAoQSA9PT0gInRoZW4iKSB7CiAgICAgICAgaWYgKG8ubGVuZ3RoID09PSAwKQogICAgICAgICAgcmV0dXJuIHsgdGhlbjogKCkgPT4gZyB9OwogICAgICAgIGNvbnN0IE8gPSB1bihhLCB7CiAgICAgICAgICB0eXBlOiAiR0VUIiwKICAgICAgICAgIHBhdGg6IG8ubWFwKChiKSA9PiBiLnRvU3RyaW5nKCkpCiAgICAgICAgfSkudGhlbihRKTsKICAgICAgICByZXR1cm4gTy50aGVuLmJpbmQoTyk7CiAgICAgIH0KICAgICAgcmV0dXJuIHR0KGEsIFsuLi5vLCBBXSk7CiAgICB9LAogICAgc2V0KEMsIEEsIE8pIHsKICAgICAgUm4oaCk7CiAgICAgIGNvbnN0IFtiLCBUXSA9IGpuKE8pOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJTRVQiLAogICAgICAgIHBhdGg6IFsuLi5vLCBBXS5tYXAoKF8pID0+IF8udG9TdHJpbmcoKSksCiAgICAgICAgdmFsdWU6IGIKICAgICAgfSwgVCkudGhlbihRKTsKICAgIH0sCiAgICBhcHBseShDLCBBLCBPKSB7CiAgICAgIFJuKGgpOwogICAgICBjb25zdCBiID0gb1tvLmxlbmd0aCAtIDFdOwogICAgICBpZiAoYiA9PT0gT2UpCiAgICAgICAgcmV0dXJuIHVuKGEsIHsKICAgICAgICAgIHR5cGU6ICJFTkRQT0lOVCIKICAgICAgICB9KS50aGVuKFEpOwogICAgICBpZiAoYiA9PT0gImJpbmQiKQogICAgICAgIHJldHVybiB0dChhLCBvLnNsaWNlKDAsIC0xKSk7CiAgICAgIGNvbnN0IFtULCBfXSA9IFV0KE8pOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJBUFBMWSIsCiAgICAgICAgcGF0aDogby5tYXAoKFMpID0+IFMudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIF8pLnRoZW4oUSk7CiAgICB9LAogICAgY29uc3RydWN0KEMsIEEpIHsKICAgICAgUm4oaCk7CiAgICAgIGNvbnN0IFtPLCBiXSA9IFV0KEEpOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJDT05TVFJVQ1QiLAogICAgICAgIHBhdGg6IG8ubWFwKChUKSA9PiBULnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogTwogICAgICB9LCBiKS50aGVuKFEpOwogICAgfQogIH0pOwogIHJldHVybiBJZShnLCBhKSwgZzsKfQpmdW5jdGlvbiBGZShhKSB7CiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGEpOwp9CmZ1bmN0aW9uIFV0KGEpIHsKICBjb25zdCBvID0gYS5tYXAoam4pOwogIHJldHVybiBbby5tYXAoKGUpID0+IGVbMF0pLCBGZShvLm1hcCgoZSkgPT4gZVsxXSkpXTsKfQpjb25zdCBZdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpOwpmdW5jdGlvbiBqZShhLCBvKSB7CiAgcmV0dXJuIFl0LnNldChhLCBvKSwgYTsKfQpmdW5jdGlvbiBMZShhKSB7CiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYSwgeyBbRHRdOiAhMCB9KTsKfQpmdW5jdGlvbiBqbihhKSB7CiAgZm9yIChjb25zdCBbbywgZV0gb2YgenQpCiAgICBpZiAoZS5jYW5IYW5kbGUoYSkpIHsKICAgICAgY29uc3QgW2gsIGddID0gZS5zZXJpYWxpemUoYSk7CiAgICAgIHJldHVybiBbCiAgICAgICAgewogICAgICAgICAgdHlwZTogIkhBTkRMRVIiLAogICAgICAgICAgbmFtZTogbywKICAgICAgICAgIHZhbHVlOiBoCiAgICAgICAgfSwKICAgICAgICBnCiAgICAgIF07CiAgICB9CiAgcmV0dXJuIFsKICAgIHsKICAgICAgdHlwZTogIlJBVyIsCiAgICAgIHZhbHVlOiBhCiAgICB9LAogICAgWXQuZ2V0KGEpIHx8IFtdCiAgXTsKfQpmdW5jdGlvbiBRKGEpIHsKICBzd2l0Y2ggKGEudHlwZSkgewogICAgY2FzZSAiSEFORExFUiI6CiAgICAgIHJldHVybiB6dC5nZXQoYS5uYW1lKS5kZXNlcmlhbGl6ZShhLnZhbHVlKTsKICAgIGNhc2UgIlJBVyI6CiAgICAgIHJldHVybiBhLnZhbHVlOwogIH0KfQpmdW5jdGlvbiB1bihhLCBvLCBlKSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChoKSA9PiB7CiAgICBjb25zdCBnID0gTmUoKTsKICAgIGEuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIEMoQSkgewogICAgICAhQS5kYXRhIHx8ICFBLmRhdGEuaWQgfHwgQS5kYXRhLmlkICE9PSBnIHx8IChhLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBDKSwgaChBLmRhdGEpKTsKICAgIH0pLCBhLnN0YXJ0ICYmIGEuc3RhcnQoKSwgYS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHsgaWQ6IGcgfSwgbyksIGUpOwogIH0pOwp9CmZ1bmN0aW9uIE5lKCkgewogIHJldHVybiBuZXcgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpLnRvU3RyaW5nKDE2KSkuam9pbigiLSIpOwp9CmZ1bmN0aW9uIFp0KGEsIG8pIHsKICByZXR1cm4gTWF0aC5zcXJ0KChhLnggLSBvLngpICoqIDIgKyAoYS55IC0gby55KSAqKiAyKTsKfQpmdW5jdGlvbiBIZShhLCBvKSB7CiAgcmV0dXJuIHsKICAgIHg6IChhLnggKyBvLngpIC8gMiwKICAgIHk6IChhLnkgKyBvLnkpIC8gMgogIH07Cn0KZnVuY3Rpb24gVWUoYSwgbykgewogIGlmIChhLmNvbmZpZGVuY2UgPD0gMCB8fCBvLmNvbmZpZGVuY2UgPD0gMCkKICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTsKICBjb25zdCBlID0gWnQoYS5jZW50ZXIsIG8uY2VudGVyKSwgaCA9IEhlKGEuY2VudGVyLCBvLmNlbnRlcik7CiAgcmV0dXJuIHsKICAgIHg6IGgueCwKICAgIHk6IGgueSArIGUgLyA0CiAgICAvLyBjYWxjdWxhdGlvbiBpcyB0YWtlbiBmcm9tIG1vYmlsZSB0ZWFtCiAgfTsKfQpmdW5jdGlvbiBEZShhLCBvLCBlKSB7CiAgaWYgKGEuY29uZmlkZW5jZSA8PSAwIHx8IG8uY29uZmlkZW5jZSA8PSAwKQogICAgcmV0dXJuIDA7CiAgY29uc3QgaCA9IFp0KGEuY2VudGVyLCBvLmNlbnRlciksIGcgPSBQZShlLndpZHRoLCBlLmhlaWdodCk7CiAgcmV0dXJuIEVlKGggLyBnKTsKfQpmdW5jdGlvbiBudChhKSB7CiAgY29uc3QgeyBjZW50ZXJYOiBvLCBjZW50ZXJZOiBlLCBjb25maWRlbmNlOiBoLCBzaXplOiBnLCBzdGF0dXM6IEMgfSA9IGE7CiAgcmV0dXJuIHsKICAgIGNlbnRlcjogewogICAgICB4OiBvLAogICAgICB5OiBlCiAgICB9LAogICAgY29uZmlkZW5jZTogaCAvIDFlMywKICAgIHN0YXR1czogQyAvIDFlMywKICAgIHNpemU6IGcKICB9Owp9CmNsYXNzIEJlIGV4dGVuZHMgVGUgewogIHBhcnNlUmF3RGF0YShvLCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IGgsIHNoYXJwbmVzczogZyB9ID0gby5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBDLCBib3R0b21SaWdodFk6IEEsIGxlZnRFeWU6IE8sIG1vdXRoOiBiLCByaWdodEV5ZTogVCwgdG9wTGVmdFg6IF8sIHRvcExlZnRZOiBTIH0gPSBvLCBFID0gbnQoTyksIE0gPSBudChUKSwgVSA9IG50KGIpOwogICAgcmV0dXJuIHsKICAgICAgY29uZmlkZW5jZTogby5jb25maWRlbmNlIC8gMWUzLAogICAgICB0b3BMZWZ0OiB7CiAgICAgICAgeDogXywKICAgICAgICB5OiBTCiAgICAgIH0sCiAgICAgIGJvdHRvbVJpZ2h0OiB7CiAgICAgICAgeDogQywKICAgICAgICB5OiBBCiAgICAgIH0sCiAgICAgIGZhY2VDZW50ZXI6IFVlKEUsIE0pLAogICAgICBmYWNlU2l6ZTogRGUoRSwgTSwgZSksCiAgICAgIGxlZnRFeWU6IEUsCiAgICAgIHJpZ2h0RXllOiBNLAogICAgICBtb3V0aDogVSwKICAgICAgYnJpZ2h0bmVzczogaCAvIDFlMywKICAgICAgc2hhcnBuZXNzOiBnIC8gMWUzCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QobywgZSwgaCkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBqKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBnID0gdGhpcy5jb252ZXJ0VG9TYW1Db2xvckltYWdlKG8sIGUpLCBDID0gdGhpcy5zYW1XYXNtTW9kdWxlLmRldGVjdEZhY2VQYXJ0c1dpdGhJbWFnZVBhcmFtZXRlcnMoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLmJncjBJbWFnZVBvaW50ZXIsCiAgICAgIDAsCiAgICAgIDAsCiAgICAgIC8vIHBhcmFtV2lkdGggc2hvdWxkIGJlIDAgKGRlZmF1bHQgdmFsdWUpCiAgICAgIDAKICAgICAgLy8gcGFyYW1IZWlnaHQgc2hvdWxkIGJlIDAgKGRlZmF1bHQgdmFsdWUpCiAgICApOwogICAgcmV0dXJuIGcuZnJlZSgpLCB0aGlzLnBhcnNlUmF3RGF0YShDLCBoKTsKICB9Cn0KZXQoQmUpOwo=", cf = (x) => Uint8Array.from(atob(x), (i) => i.charCodeAt(0)), ys = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", cf(Zg)], { type: "text/javascript;charset=utf-8" });
function gf(x) {
  let i;
  try {
    if (i = ys && (window.URL || window.webkitURL).createObjectURL(ys), !i) throw "";
    const t = new Worker(i, {
      type: "module",
      name: x == null ? void 0 : x.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(i);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Zg,
      {
        type: "module",
        name: x == null ? void 0 : x.name
      }
    );
  }
}
class df extends JI {
  constructor(t, e) {
    super();
    T(this, "className", "FaceImageProcessor");
    T(this, "detector");
    T(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = $x(t), n = T1(t, e);
    return super.optimizeImageBeforeDetection(n);
  }
  async process({ image: t, timestamp: e }) {
    const n = this.optimizeImageBeforeDetection(t), o = {};
    o.height = t.height, o.width = t.width;
    let r = await this.detector.detect(n.data, n.resolution, o);
    r = cI(r, $x(t));
    const a = {};
    return a.detectedObject = r, a.image = t, a.imageData = n.data, a.timestamp = e, this.processDetectedObject(a);
  }
}
var L0, a0, s0;
class uf {
  constructor(i) {
    ie(this, L0);
    ie(this, a0);
    ie(this, s0);
    te(this, L0, i), te(this, a0, /* @__PURE__ */ new Map());
  }
  validate() {
    L(this, L0).forEach((i) => {
      L(this, a0).set(i.name, i.evaluate());
    }), te(this, s0, void (91 * -63 + -1 * 6577 + 1231 * 10));
  }
  isValid() {
    return L(this, s0) === void (-1 * 5320 + -1381 + 6701) && te(this, s0, Array.from(L(this, a0).values()).every((i) => i)), L(this, s0);
  }
  get result() {
    return L(this, a0);
  }
  get validators() {
    return L(this, L0);
  }
}
L0 = new WeakMap(), a0 = new WeakMap(), s0 = new WeakMap();
var kn, c0;
class qe {
  constructor(i, t) {
    ie(this, kn);
    ie(this, c0);
    te(this, kn, i), te(this, c0, t);
  }
  get threshold() {
    return L(this, c0);
  }
  get name() {
    return L(this, kn);
  }
  isValueBelowThreshold(i) {
    return i < L(this, c0);
  }
  isValueAboveThreshold(i) {
    return i > L(this, c0);
  }
}
kn = new WeakMap(), c0 = new WeakMap();
const lf = "isNotDim";
var On;
class If extends qe {
  constructor(t, e) {
    super(lf, t);
    ie(this, On);
    te(this, On, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, On));
  }
}
On = new WeakMap();
const ff = "isNotSmall";
var Hn;
class Cf extends qe {
  constructor(t, e) {
    super(ff, t);
    ie(this, Hn);
    te(this, Hn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Hn));
  }
}
Hn = new WeakMap();
const pf = "isNotBright";
var Zn;
class hf extends qe {
  constructor(t, e) {
    super(pf, t);
    ie(this, Zn);
    te(this, Zn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, Zn));
  }
}
Zn = new WeakMap();
const mf = "isPresent";
var Rn;
class bf extends qe {
  constructor(t, e) {
    super(mf, t);
    ie(this, Rn);
    te(this, Rn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Rn));
  }
}
Rn = new WeakMap();
const Af = "isSharp";
var Kn;
class yf extends qe {
  constructor(t, e) {
    super(Af, t);
    ie(this, Kn);
    te(this, Kn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Kn));
  }
}
Kn = new WeakMap();
const vf = "isLeftEyePresent";
var Pn;
class Wf extends qe {
  constructor(t, e) {
    super(vf, t);
    ie(this, Pn);
    te(this, Pn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Pn));
  }
}
Pn = new WeakMap();
const Sf = "isMouthPresent";
var Vn;
class wf extends qe {
  constructor(t, e) {
    super(Sf, t);
    ie(this, Vn);
    te(this, Vn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Vn));
  }
}
Vn = new WeakMap();
const Bf = "isMouthScoreNotTooLow";
var Tn;
class Gf extends qe {
  constructor(t, e) {
    super(Bf, t);
    ie(this, Tn);
    te(this, Tn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Tn));
  }
}
Tn = new WeakMap();
const kf = "isMouthScoreNotTooHigh";
var En;
class Of extends qe {
  constructor(t, e) {
    super(kf, t);
    ie(this, En);
    te(this, En, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, En));
  }
}
En = new WeakMap();
const Hf = "isNotLarge";
var Ln;
class Zf extends qe {
  constructor(t, e) {
    super(Hf, t);
    ie(this, Ln);
    te(this, Ln, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, Ln));
  }
}
Ln = new WeakMap();
const Rf = "isNotPitched";
var Dn;
const Kr = class Kr extends qe {
  constructor(t, e) {
    super(Rf, Kr.calculatePitchAngleAccelerationThreshold(t));
    ie(this, Dn);
    te(this, Dn, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return Pl * Math.sin(t * (Math.PI / (13344 + 2194 * -6)));
  }
  evaluate() {
    const { z: t } = L(this, Dn) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
Dn = new WeakMap();
let er = Kr;
const Kf = "isRightEyePresent";
var Nn;
class Pf extends qe {
  constructor(t, e) {
    super(Kf, t);
    ie(this, Nn);
    te(this, Nn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Nn));
  }
}
Nn = new WeakMap();
const Vf = "isNotOutOfBounds";
var Fn, g0;
class Tf extends qe {
  constructor(t, e, n) {
    super(Vf, t);
    ie(this, Fn);
    ie(this, g0);
    te(this, Fn, e), te(this, g0, n);
  }
  evaluate() {
    const t = Qc(L(this, g0), this.threshold, $x(L(this, g0))), e = cg(L(this, Fn), L(this, g0));
    return D1(e, t);
  }
}
Fn = new WeakMap(), g0 = new WeakMap();
class Ef {
  static getFaceValidationInstance(i, t, e, n) {
    return new uf([new bf(i.faceConfidence, t.confidence), new Wf(i.leftEye.confidence, t.leftEye.confidence), new Pf(i.rightEye.confidence, t.rightEye.confidence), new Cf(i.minFaceSizeRatio, t.faceSize), new Zf(i.maxFaceSizeRatio, t.faceSize), new yf(i.sharpnessThreshold, t.sharpness), new If(i.brightnessLowThreshold, t.brightness), new hf(i.brightnessHighThreshold, t.brightness), new Tf(i.outOfBoundsThreshold, t, e), new er(i.devicePitchAngleThreshold, n), new wf(i.mouth.confidence, t.mouth.confidence), new Of(i.mouth.status.max, t.mouth.status), new Gf(i.mouth.status.min, t.mouth.status)]);
  }
}
class Lf extends QI {
  constructor() {
    super(...arguments);
    T(this, "className", "FaceValidationService");
    T(this, "acceleration", null);
  }
  validateDetectedObject(t, e) {
    const n = Ef.getFaceValidationInstance(this.getThresholds(), t, e, this.acceleration);
    return n.validate(), n;
  }
}
const Ii = class Ii extends XI {
  constructor(t, e, n, o) {
    super(n, o);
    T(this, "detector");
    T(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  static async createInstance(t) {
    const e = new gf(), n = kg(e), o = await new n(), r = new Lf(), a = new df(o, r), s = new Ii(o, r, a, t);
    this._instance = s;
  }
  static async getInstance(t) {
    return !this._instance && await this.createInstance(t), this._instance;
  }
  stopDetectionLoop() {
    var t;
    super.stopDetectionLoop(), Dc(Pt.INSTRUCTION_CHANGED, (t = this.detection) == null ? void 0 : t["fallbackInstruction"], n1);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
};
T(Ii, "_instance");
let tr = Ii;
const Df = () => {
  const { handleError: x } = z0(), { acceleration: i } = F1(), { thresholds: t, wasmDirectoryPath: e } = Br(), [n, o] = De();
  ae(() => {
    (async () => {
      const s = await tr.getInstance(e);
      try {
        await s.init(), o(s);
      } catch (c) {
        if (c instanceof Error) {
          x(xe.fromError(c));
          return;
        }
      }
    })();
  }, [x, e]), ae(() => {
    n && n.setThresholds(t);
  }, [n, t]), ae(() => {
    n && n.setAcceleration(i);
  }, [i, n]);
  const r = {};
  return r.controller = n, r;
};
function Nf({ onPhotoTakenInternal: x }) {
  const { cameraFacing: i, captureMode: t, onPhotoTaken: e, sessionToken: n } = Br(), { controller: o } = Df(), r = ze(({ candidateSelectionImages: c, imageData: d, protoMessage: g, webMetadata: C }) => {
    mI(Hc.FACE, c), e(d, g);
    const u = {};
    u.cameraProperties = C, x == null || x(u);
  }, [x, e]), a = ze(({ fps: c, processedImage: d }, g) => {
    Dc(Pt.INSTRUCTION_CHANGED, d.instructionCode), o && r1(Pt.DETECTED_FACE_CHANGED, d.detection, o.imageProcessor.validationService.getThresholds().faceConfidence);
    const C = {};
    C.detection = d.detection, C.fps = c, C.image = g, C.isInCandidateSelection = d.isInCandidateSelection, C.invalidValidators = d.invalidValidators, a1(Pt.FACE_DETECTION, C);
  }, [o]), s = {};
  return s.captureMode = t, s.cameraFacing = i, s.controller = o, s.createProtoMessage = _I, s.onCapture = r, s.onDetection = a, s.sessionToken = n, s.customEvent = Pt, s.fallbackInstruction = Ae.FACE_NOT_PRESENT, s.instructionCodeMap = Ae, s.checkToInstructionCodeMap = gl, iI(s);
}
const Ff = ({ onPhotoTakenInternal: x }) => {
  const { sunfish: i } = q0(), { cameraResolution: t, detectionDetails: e, shouldCameraMirror: n, videoRef: o } = Nf({
    onPhotoTakenInternal: x
  });
  return /* @__PURE__ */ O(rt, { children: /* @__PURE__ */ O(
    hI,
    {
      cameraResolution: t,
      detectionDetails: e,
      shouldMirror: n,
      children: /* @__PURE__ */ O(
        rl,
        {
          ref: o,
          $isImageMirror: n,
          $isVisible: i,
          autoPlay: !0,
          id: x1,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}, Yf = ({ onPhotoTakenInternal: x, ...i }) => /* @__PURE__ */ O(sI, { cameraOptions: i, children: /* @__PURE__ */ O(Ff, { onPhotoTakenInternal: x }) });
function jf({ onFaceTrackingLost: x, skipOutsideOfCandidateSelection: i }) {
  const t = ke(x);
  ae(() => {
    t.current = x;
  }, [x]);
  const e = ze((o) => {
    if (!o.detail) return;
    const { data: r } = o.detail;
    i && !r.isInCandidateSelection || r.invalidValidators.includes(Ae.FACE_NOT_PRESENT) && t.current();
  }, [i]), n = {};
  return n.handleFaceDetection = e, n;
}
function Mf(x) {
  return function(t) {
    const { handleFaceDetection: e } = x(t);
    Uc(Pt.FACE_DETECTION, e);
  };
}
const _f = ({ children: x }) => {
  const i = ke(null);
  return R1(i, Pt.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ O(ol, { ref: i, children: x });
};
async function Xf(x, i, t) {
  const { SmileLivenessContent: e } = p0.v4, n = await qo(x), o = await qo(i), r = await Ag(t), a = {};
  a.neutralExpressionFaceImage = n, a.smileExpressionFaceImage = o, a.metadata = r;
  const s = a, c = e.verify(s);
  if (c) throw Error(c);
  const d = e.create(s), g = {};
  return g.smileLivenessContent = d, vg(g);
}
async function Jf(x, i, t) {
  const e = await Xf(x, i, t);
  return yg(e);
}
const Rg = {};
Rg.max = 0.4;
const nr = {};
nr.confidence = 0.3, nr.status = Rg;
const Kg = {};
Kg.mouth = nr;
const Pg = {};
Pg.min = 0.35;
const xr = {};
xr.confidence = 0.3, xr.status = Pg;
const t0 = {};
t0.brightnessHighThreshold = 1, t0.brightnessLowThreshold = -(-2374 * -1 + -1741 * 1 + 2 * -316), t0.sharpnessThreshold = -(6236 + 2 * -4183 + 2131), t0.outOfBoundsThreshold = -(-1 * 2281 + 3314 + -1032), t0.minFaceSizeRatio = 0.1, t0.mouth = xr;
const Qf = { [mt.NEUTRAL]: Kg, [mt.SMILE]: t0 }, Uf = Qf, zf = -1018 * -1 + 4311 + -7 * 47, vs = 9088 + 353 * 9 + -12250;
function qf() {
  return { images: { fps: new Sn(-162 * 54 + -108 * -74 + 786), mouthStatus: new Sn(-545 * 9 + 2070 + 2840) }, imageResolution: void (-41 * -25 + -10 * -661 + -7635) };
}
function $f({ skip: x }) {
  const i = ke(qf()), { analytics: t } = Ar(), { crosshatch: e } = q0(), n = ke(!1);
  function o() {
    const c = i.current, d = qx(c.images.fps), g = qx(c.images.mouthStatus);
    n.current = !0;
    const C = {};
    C.customer = e == null ? void 0 : e.customer, C.duration = vs, C.averageFps = d, C.imageResolution = c.imageResolution, C.averageExpressionScore = g, t == null || t.trackLongCapture(C);
  }
  const r = {};
  r.callback = o, r.delay = vs * (-74 * 127 + 1312 * 7 + -1 * -1214), r.skip = x || n.current, rg(r);
  const a = ze((c) => {
    if (!c.detail) return;
    const { data: d } = c.detail;
    i.current.images.fps.pushFixed(d.fps), i.current.images.mouthStatus.pushFixed(d.detection.mouth.status), i.current.imageResolution = d.imageResolution;
  }, []);
  Uc(Pt.FACE_DETECTION, a);
  const s = {};
  return s.wasEventTriggered = n, s;
}
function e2({ phase: x }) {
  const [i, t] = De(Lx.AUTO_CAPTURE), e = ag(i);
  function n() {
    t(Lx.WAIT_FOR_REQUEST), e(() => s1(Bx.FIRST_FRAME));
  }
  const o = {};
  o.callback = n, o.delay = zf, o.skip = x === mt.NEUTRAL;
  const { clear: r, isActive: a, reset: s } = rg(o), c = {};
  return c.captureMode = i, c.restart = s, c.stop = r, c.isActive = a, c;
}
function t2(x, i) {
  var t = { ...Uf[x.value], ...i };
  return t;
}
const n2 = ({
  licensePath: x,
  onComplete: i,
  sessionToken: t,
  thresholds: e,
  wasmDirectoryPath: n
}) => {
  const { analytics: o } = Ar(), { appState: r, handleAppStateChange: a, handleError: s } = ll(), { cameraProperties: c, mergeCameraProperties: d } = rI(), g = ag(r), C = T0(mt.NEUTRAL), u = T0(null), p = T0(null), { captureMode: m, stop: A } = e2({ phase: C.value });
  $f({
    skip: C.value !== mt.NEUTRAL || r !== At.RUNNING
  });
  function l(H) {
    C.value = H, Lo(Ex.STATUS_CHANGED, { phase: H });
  }
  function W() {
    a(At.WAITING), g(() => a(At.RUNNING));
  }
  function Z() {
    A(), W(), l(mt.NEUTRAL), u.value = null, p.value = null, o == null || o.reset();
  }
  Mf(jf)({
    onFaceTrackingLost: Z,
    skipOutsideOfCandidateSelection: C.value === mt.NEUTRAL
  });
  function M(H) {
    u.value = H, l(mt.SMILE), a(At.RUNNING);
  }
  async function _(H) {
    A(), p.value = H;
    try {
      if (!u.value || !p.value)
        throw new xe("Missing face data");
      const z = {
        sessionToken: t,
        web: c.value
      }, Q = await Jf(
        u.value.image,
        p.value.image,
        z
      ), q = [u.value, p.value];
      i(q, Q), o == null || o.trackLivenessProcess(q), a(At.DONE);
    } catch (z) {
      z instanceof Error && s(xe.fromError(z));
      return;
    }
  }
  const X = {
    [mt.NEUTRAL]: M,
    [mt.SMILE]: _
  };
  return /* @__PURE__ */ O(_f, { children: /* @__PURE__ */ O(
    Yf,
    {
      captureMode: m,
      licensePath: x,
      onPhotoTaken: X[C.value],
      onPhotoTakenInternal: d,
      thresholds: t2(C, e),
      wasmDirectoryPath: n
    }
  ) });
};
function x2({ initAppState: x, onError: i }) {
  const [t, e] = De(x), [n, o] = De(), [r, a] = De(!1), s = ke(i);
  ae(() => {
    s.current = i;
  }, [i]);
  const c = {};
  return c.appState = t, c.setAppState = e, c.error = n, c.setError = o, c.isCameraReady = r, c.setIsCameraReady = a, c.onErrorRef = s, c;
}
function i2(x) {
  return x !== At.RUNNING && x !== At.WAITING ? jx.VISIBLE : jx.VISIBLE_WITH_MASK;
}
function o2({ onError: x }) {
  const { appState: i, error: t, isCameraReady: e, onErrorRef: n, setAppState: o, setError: r, setIsCameraReady: a } = x2({
    initAppState: At.LOADING,
    onError: x
  }), s = i2(i), c = ze(
    (g) => {
      Lo(Ex.STATUS_CHANGED, { state: At.ERROR, error: g }), a(!1), n.current(g), r(g), o(At.ERROR);
    },
    [a, n, r, o]
  ), d = ze(
    (g) => {
      o(g), Lo(Ex.STATUS_CHANGED, { state: g });
    },
    [o]
  );
  return {
    appState: i,
    freemiumOverlayState: s,
    isCameraReady: e,
    setIsCameraReady: a,
    handleAppStateChange: d,
    handleError: c,
    error: t
  };
}
var Rr = ((x) => (x.AUTO_CAPTURE = "auto-capture", x.LONG_CAPTURE_SMILE = "long-capture-smile", x))(Rr || {});
class r2 {
  constructor() {
    T(this, "appKey", "");
    T(this, "deviceId", "");
  }
  async countlyFetch(i) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const n = e, o = "https://innovatrics.count.ly/i?", r = {};
    r.app_key = this.appKey, r.device_id = this.deviceId;
    const a = Ix(r);
    try {
      await fetch("" + o + a + "&" + i, n);
    } catch (s) {
      console.error("Countly Error", s);
    }
  }
  async init(i, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = i;
    const e = { _app_version: jc() }, n = { organization: Mc(window.location.href) }, o = Ix({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(o);
  }
  async endSession() {
    const i = {};
    i.end_session = "1";
    const t = Ix(i);
    await this.countlyFetch(t);
  }
  async sendEvent(i, t, e) {
    const n = {};
    n.key = i, n.count = 1, n.dur = e, n.segmentation = t;
    const o = [n], r = Ix({ events: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
  async sendAutoCaptureEvent(i, t) {
    await this.sendEvent(Rr.AUTO_CAPTURE, i, t);
  }
}
const px = new r2();
class a2 {
  constructor() {
    T(this, "countly", px);
  }
  createSegmentation(i) {
    return { appVersion: jc(), ...i };
  }
  init(i) {
    if (W1()) return;
    const t = Q1();
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
class s2 extends a2 {
  constructor() {
    super(...arguments);
    T(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(t) {
    this.captureProcessAnalytics.push(t);
  }
  reset() {
    this.captureProcessAnalytics = [];
  }
}
class c2 extends s2 {
  trackLivenessProcess(i) {
    var d, g, C, u, p, m;
    if (!i.length || !this.captureProcessAnalytics.length) return;
    const [t, e] = i, [n, o] = this.captureProcessAnalytics, r = $1(n.averageFps + (o == null ? void 0 : o.averageFps)) / (277 + 275 * -1), a = q1(n.captureProcessDurationInMs), s = -10 * -344 + 1008 + -4445, c = this.createSegmentation({ faceSize: rs((d = e.data.detection) == null ? void 0 : d.faceSize), confidence: rs((g = t.data.detection) == null ? void 0 : g.confidence), imageResolution: ((u = (C = t.data) == null ? void 0 : C["imageResolution"]) == null ? void 0 : u.width) + "x" + ((m = (p = t.data) == null ? void 0 : p["imageResolution"]) == null ? void 0 : m.height), averageFps: r, captureTimeNeutral: z1(a), captureTimeSmile: "" + s, camera: U1(n == null ? void 0 : n.deviceName, n.facingMode), instructionSet: n.instructionSet });
    this.countly.sendAutoCaptureEvent(c, a + s), this.reset();
  }
  async trackLongCapture(i) {
    const { averageExpressionScore: t, averageFps: e, customer: n, duration: o, imageResolution: r } = i, a = this.createSegmentation({ imageResolution: r, averageFps: e, instructionSet: await ig(), expressionScore: t, ...n && { customer: n } });
    this.countly.sendEvent(Rr.LONG_CAPTURE_SMILE, a, o);
  }
}
const g2 = new c2(), d2 = ({ props: x }) => x ? /* @__PURE__ */ O(qu, { target: x.styleTarget, children: /* @__PURE__ */ O(
  yl,
  {
    licensePath: x.licensePath,
    bramble: Eo.getInstance(),
    wasmDirectoryPath: x.wasmDirectoryPath,
    children: /* @__PURE__ */ O(Sl, { analytics: g2, appKey: "d64319129bb0ee02eccfab418edba9629a97d6b6", children: /* @__PURE__ */ O(
      ul,
      {
        value: o2({
          onError: x.onError
        }),
        children: /* @__PURE__ */ O(Oc, { children: /* @__PURE__ */ O(n2, { ...x }) })
      }
    ) })
  }
) }) : null;
cd(d2, "x-dot-smile-liveness", ["props"]);
