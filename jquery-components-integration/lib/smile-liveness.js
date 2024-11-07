var Qg = Object.defineProperty;
var aa = (x) => {
  throw TypeError(x);
};
var zg = (x, i, t) => i in x ? Qg(x, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[i] = t;
var V = (x, i, t) => zg(x, typeof i != "symbol" ? i + "" : i, t), sa = (x, i, t) => i.has(x) || aa("Cannot " + t);
var L = (x, i, t) => (sa(x, i, "read from private field"), t ? t.call(x) : i.get(x)), ie = (x, i, t) => i.has(x) ? aa("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(x) : i.set(x, t), te = (x, i, t, e) => (sa(x, i, "write to private field"), e ? e.call(x, t) : i.set(x, t), t);
var Yn, F, Bs, Gs, x0, ca, ks, ro, ir, ao, so, Os, yn = {}, Zs = [], qg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, hi = Array.isArray;
function Kt(x, i) {
  for (var t in i) x[t] = i[t];
  return x;
}
function Hs(x) {
  var i = x.parentNode;
  i && i.removeChild(x);
}
function Ee(x, i, t) {
  var e, n, o, r = {};
  for (o in i) o == "key" ? e = i[o] : o == "ref" ? n = i[o] : r[o] = i[o];
  if (arguments.length > -2306 * 2 + -3466 * 2 + 11546 * 1 && (r.children = arguments.length > -3059 * 1 + 4 * 517 + 994 ? Yn.call(arguments, 2) : t), typeof x == "function" && x.defaultProps != null)
    for (o in x.defaultProps) void (-9 * -634 + -41 * 39 + -4107) === r[o] && (r[o] = x.defaultProps[o]);
  return hn(x, r, e, n, null);
}
function hn(x, i, t, e, n) {
  var o = {};
  o.type = x, o.props = i, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__d = void (-2305 + 5 * 461), o.__c = null, o.constructor = void (-3238 * -1 + 1274 + -47 * 96), o.__v = n ?? ++Bs, o.__i = -(10 * 655 + -2852 + -1 * 3697), o.__u = 0;
  var r = o;
  return n == null && F.vnode != null && F.vnode(r), r;
}
function $g() {
  var x = {};
  return x.current = null, x;
}
function at(x) {
  return x.children;
}
function ot(x, i) {
  this.props = x, this.context = i;
}
function I0(x, i) {
  if (i == null) return x.__ ? I0(x.__, x.__i + (14617 + 63 * -232)) : null;
  for (var t; i < x.__k.length; i++) if ((t = x.__k[i]) != null && t.__e != null) return t.__e;
  return typeof x.type == "function" ? I0(x) : null;
}
function Rs(x) {
  var i, t;
  if ((x = x.__) != null && x.__c != null) {
    for (x.__e = x.__c.base = null, i = -2110 + -2110 * -1; i < x.__k.length; i++) if ((t = x.__k[i]) != null && t.__e != null) {
      x.__e = x.__c.base = t.__e;
      break;
    }
    return Rs(x);
  }
}
function co(x) {
  (!x.__d && (x.__d = !0) && x0.push(x) && !Tx.__r++ || ca !== F.debounceRendering) && ((ca = F.debounceRendering) || ks)(Tx);
}
function Tx() {
  var x, i, t, e, n, o, r, a;
  for (x0.sort(ro); x = x0.shift(); ) x.__d && (i = x0.length, e = void (1559 * 1 + 809 + 32 * -74), o = (n = (t = x).__v).__e, r = [], a = [], t.__P && ((e = Kt({}, n)).__v = n.__v + (6854 + -5 * 1076 + 3 * -491), F.vnode && F.vnode(e), or(t.__P, e, n, t.__n, t.__P.namespaceURI, -7868 * 1 + 3688 + 4212 & n.__u ? [o] : null, r, o ?? I0(n), !!(-5562 * -1 + -1 * -2239 + 1 * -7769 & n.__u), a), e.__v = n.__v, e.__.__k[e.__i] = e, Ts(r, e, a), e.__e != o && Rs(e)), x0.length > i && x0.sort(ro));
  Tx.__r = -5390 + -8848 * 1 + 2 * 7119;
}
function Ks(x, i, t, e, n, o, r, a, s, c, d) {
  var g, C, u, h, m, A = e && e.__k || Zs, l = i.length;
  for (t.__d = s, ed(t, i, A), s = t.__d, g = -499 * 13 + 2131 + 4356; g < l; g++) (u = t.__k[g]) != null && typeof u != "boolean" && typeof u != "function" && (C = -(-4416 * 2 + 211 * -3 + 9466) === u.__i ? yn : A[u.__i] || yn, u.__i = g, or(x, u, C, n, o, r, a, s, c, d), h = u.__e, u.ref && C.ref != u.ref && (C.ref && rr(C.ref, null, u), d.push(u.ref, u.__c || h, u)), m == null && h != null && (m = h), 65536 & u.__u || C.__k === u.__k ? (s && typeof u.type == "string" && !x.contains(s) && (s = I0(C)), s = Ps(u, s, x)) : typeof u.type == "function" && u.__d !== void 0 ? s = u.__d : h && (s = h.nextSibling), u.__d = void (-7157 * 1 + 4275 + 2882), u.__u &= -(1 * 194459 + 288225 + 25 * -11443));
  t.__d = s, t.__e = m;
}
function ed(x, i, t) {
  var e, n, o, r, a, s = i.length, c = t.length, d = c, g = 9364 + -2 * -1469 + 6151 * -2;
  for (x.__k = [], e = -3455 * -1 + 9718 + -3 * 4391; e < s; e++) r = e + g, (n = x.__k[e] = (n = i[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? hn(null, n, null, null, null) : hi(n) ? hn(at, { children: n }, null, null, null) : void (-2 * -511 + 44 * -34 + 474) === n.constructor && n.__b > 22 * 183 + -262 * 17 + 428 ? hn(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = x, n.__b = x.__b + (-17 * 121 + -7 * 1163 + -329 * -31), a = td(n, t, r, d), n.__i = a, o = null, -(-3 * -2059 + -5164 + -1012) !== a && (d--, (o = t[a]) && (o.__u |= 26008 * -7 + -1 * -252974 + 2 * 30077)), o == null || o.__v === null ? (-(-3039 + 5 * 608) == a && g--, typeof n.type != "function" && (n.__u |= -182 * 80 + -19666 + 2 * 49881)) : a !== r && (a == r - (-3282 + 7 * 469) ? g = a - r : a == r + (-2922 + 199 * -5 + 3918) ? g++ : a > r ? d > s - r ? g += a - r : g-- : a < r && g++, a !== e + g && (n.__u |= 65536))) : (o = t[r]) && o.key == null && o.__e && -9 * -809 + -7655 + 374 == (-1 * 11833 + -1011 * 9 + 106 * 1434 & o.__u) && (o.__e == x.__d && (x.__d = I0(o)), go(o, o, !1), t[r] = null, d--);
  if (d)
    for (e = 1158 * -3 + 2450 + 1024; e < c; e++) (o = t[e]) != null && -1 * 803 + -3 * -682 + -1243 == (-5 * 25722 + -224171 * -1 + 35511 & o.__u) && (o.__e == x.__d && (x.__d = I0(o)), go(o, o));
}
function Ps(x, i, t) {
  var e, n;
  if (typeof x.type == "function") {
    for (e = x.__k, n = 0; e && n < e.length; n++) e[n] && (e[n].__ = x, i = Ps(e[n], i, t));
    return i;
  }
  x.__e != i && (t.insertBefore(x.__e, i || null), i = x.__e);
  do
    i = i && i.nextSibling;
  while (i != null && 1 * -4003 + -1539 + 1850 * 3 === i.nodeType);
  return i;
}
function Tt(x, i) {
  return i = i || [], x == null || typeof x == "boolean" || (hi(x) ? x.some(function(t) {
    Tt(t, i);
  }) : i.push(x)), i;
}
function td(x, i, t, e) {
  var n = x.key, o = x.type, r = t - 1, a = t + (9948 + -3 * 1070 + 6737 * -1), s = i[t];
  if (s === null || s && n == s.key && o === s.type && -1217 + 287 * -21 + 1811 * 4 == (94222 + -9 * 24455 + 256945 & s.__u)) return t;
  if (e > (s != null && 1739 + -1 * 5816 + 1359 * 3 == (-1219 * -159 + 199845 + 1 * -262594 & s.__u) ? 2 * -1913 + 4 * 623 + 1335 : 0)) for (; r >= -1 * 8297 + 1 * 8419 + -61 * 2 || a < i.length; ) {
    if (r >= 5589 + 69 * -18 + 1449 * -3) {
      if ((s = i[r]) && 7079 + 5 * -99 + -6584 == (-1 * 102565 + 5 * -38290 + 425087 & s.__u) && n == s.key && o === s.type) return r;
      r--;
    }
    if (a < i.length) {
      if ((s = i[a]) && -3432 + 17 * -526 + 12374 == (12252 + 241 * 26 + 112554 & s.__u) && n == s.key && o === s.type) return a;
      a++;
    }
  }
  return -(9960 + 3510 * -1 + -6449);
}
function ga(x, i, t) {
  i[-2606 + -1303 * -2] === "-" ? x.setProperty(i, t ?? "") : x[i] = t == null ? "" : typeof t != "number" || qg.test(i) ? t : t + "px";
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
  else if (i[2 * 4649 + -3334 + -5964] === "o" && i[2973 * -1 + 1 * -9141 + 12115] === "n") o = i !== (i = i.replace(/(PointerCapture)$|Capture$/i, "$1")), i = i.toLowerCase() in x || i === "onFocusOut" || i === "onFocusIn" ? i.toLowerCase().slice(-3154 + -1418 * -4 + -2516) : i.slice(-10003 + 145 * 69), x.l || (x.l = {}), x.l[i + o] = t, t ? e ? t.u = e.u : (t.u = ir, x.addEventListener(i, o ? so : ao, o)) : x.removeEventListener(i, o ? so : ao, o);
  else {
    if (n == "http://www.w3.org/2000/svg") i = i.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (i != "width" && i != "height" && i != "href" && i != "list" && i != "form" && i != "tabIndex" && i != "download" && i != "rowSpan" && i != "colSpan" && i != "role" && i != "popover" && i in x) try {
      x[i] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || !(-99 * 5 + -1319 * -5 + 3 * -2033) === t && i[763 * 9 + -37 * -87 + -10082] !== "-" ? x.removeAttribute(i) : x.setAttribute(i, i == "popover" && 3529 + 15 * 599 + -12513 == t ? "" : t));
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
  var d, g, C, u, h, m, A, l, W, H, X, _, j, Z, z, U, q = i.type;
  if (void (-3127 * 1 + 87 * 11 + -14 * -155) !== i.constructor) return null;
  8878 + 7 * -1250 & t.__u && (s = !!(-511 * 17 + 7797 + 922 & t.__u), o = [a = i.__e = t.__e]), (d = F.__b) && d(i);
  e: if (typeof q == "function") try {
    if (l = i.props, W = "prototype" in q && q.prototype.render, H = (d = q.contextType) && e[d.__c], X = d ? H ? H.props.value : d.__ : e, t.__c ? A = (g = i.__c = t.__c).__ = g.__E : (W ? i.__c = g = new q(l, X) : (i.__c = g = new ot(l, X), g.constructor = q, g.render = xd), H && H.sub(g), g.props = l, g.state || (g.state = {}), g.context = X, g.__n = e, C = g.__d = !(3 * -202 + -4039 + 1 * 4645), g.__h = [], g._sb = []), W && g.__s == null && (g.__s = g.state), W && q.getDerivedStateFromProps != null && (g.__s == g.state && (g.__s = Kt({}, g.__s)), Kt(g.__s, q.getDerivedStateFromProps(l, g.__s))), u = g.props, h = g.state, g.__v = i, C) W && q.getDerivedStateFromProps == null && g.componentWillMount != null && g.componentWillMount(), W && g.componentDidMount != null && g.__h.push(g.componentDidMount);
    else {
      if (W && q.getDerivedStateFromProps == null && l !== u && g.componentWillReceiveProps != null && g.componentWillReceiveProps(l, X), !g.__e && (g.shouldComponentUpdate != null && !(14 * -398 + 1831 * 4 + -1751) === g.shouldComponentUpdate(l, g.__s, X) || i.__v === t.__v)) {
        for (i.__v !== t.__v && (g.props = l, g.state = g.__s, g.__d = !1), i.__e = t.__e, i.__k = t.__k, i.__k.forEach(function(Ne) {
          Ne && (Ne.__ = i);
        }), _ = -412 + 5 * 1709 + -8133; _ < g._sb.length; _++) g.__h.push(g._sb[_]);
        g._sb = [], g.__h.length && r.push(g);
        break e;
      }
      g.componentWillUpdate != null && g.componentWillUpdate(l, g.__s, X), W && g.componentDidUpdate != null && g.__h.push(function() {
        g.componentDidUpdate(u, h, m);
      });
    }
    if (g.context = X, g.props = l, g.__P = x, g.__e = !(134 * 74 + -2 * 2907 + 4101 * -1), j = F.__r, Z = 19 * 87 + -8206 + 6553, W) {
      for (g.state = g.__s, g.__d = !(1 * 1796 + -7459 + 2 * 2832), j && j(i), d = g.render(g.props, g.state, g.context), z = -9001 * -1 + -8570 + -1 * 431; z < g._sb.length; z++) g.__h.push(g._sb[z]);
      g._sb = [];
    } else do
      g.__d = !(-1515 + -4 * -379), j && j(i), d = g.render(g.props, g.state, g.context), g.state = g.__s;
    while (g.__d && ++Z < 476 + -573 * 4 + 1841);
    g.state = g.__s, g.getChildContext != null && (e = Kt(Kt({}, e), g.getChildContext())), W && !C && g.getSnapshotBeforeUpdate != null && (m = g.getSnapshotBeforeUpdate(u, h)), Ks(x, hi(U = d != null && d.type === at && d.key == null ? d.props.children : d) ? U : [U], i, t, e, n, o, r, a, s, c), g.base = i.__e, i.__u &= -(6470 + -1 * -9509 + 1438 * -11), g.__h.length && r.push(g), A && (g.__E = g.__ = null);
  } catch (Ne) {
    i.__v = null, s || o != null ? (i.__e = a, i.__u |= s ? 8649 + 154 * -36 + -2945 : 565 * -2 + 1 * -1977 + 3139, o[o.indexOf(a)] = null) : (i.__e = t.__e, i.__k = t.__k), F.__e(Ne, i, t);
  }
  else o == null && i.__v === t.__v ? (i.__k = t.__k, i.__e = t.__e) : i.__e = nd(t.__e, i, t, e, n, o, r, s, c);
  (d = F.diffed) && d(i);
}
function Ts(x, i, t) {
  i.__d = void (-59 * -159 + 4953 * -1 + -4428);
  for (var e = 17 * -379 + -743 * 2 + 7929; e < t.length; e++) rr(t[e], t[++e], t[++e]);
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
  var c, d, g, C, u, h, m, A = t.props, l = i.props, W = i.type;
  if (W === "svg" ? n = "http://www.w3.org/2000/svg" : W === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), o != null) {
    for (c = -8681 + -1 * -8681; c < o.length; c++) if ((u = o[c]) && "setAttribute" in u == !!W && (W ? u.localName === W : -19 * -51 + 5834 + -6800 === u.nodeType)) {
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
      for (A = {}, c = 5 * -386 + -9838 + 11768; c < x.attributes.length; c++) A[(u = x.attributes[c]).name] = u.value;
    for (c in A) if (u = A[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") g = u;
      else if (c !== "key" && !(c in l)) {
        if (c == "value" && "defaultValue" in l || c == "checked" && "defaultChecked" in l) continue;
        rx(x, c, null, u, n);
      }
    }
    for (c in l) u = l[c], c == "children" ? C = u : c == "dangerouslySetInnerHTML" ? d = u : c == "value" ? h = u : c == "checked" ? m = u : c === "key" || a && typeof u != "function" || A[c] === u || rx(x, c, u, A[c], n);
    if (d) a || g && (d.__html === g.__html || d.__html === x.innerHTML) || (x.innerHTML = d.__html), i.__k = [];
    else if (g && (x.innerHTML = ""), Ks(x, hi(C) ? C : [C], i, t, e, W === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, o, r, o ? o[-1684 + 421 * 4] : t.__k && I0(t, -12523 + 1789 * 7), a, s), o != null)
      for (c = o.length; c--; ) o[c] != null && Hs(o[c]);
    a || (c = "value", void (-6189 + -2 * -2837 + 515) !== h && (h !== x[c] || W === "progress" && !h || W === "option" && h !== A[c]) && rx(x, c, h, A[c], n), c = "checked", void (-1305 + -2 * 4843 + 10991) !== m && m !== x[c] && rx(x, c, m, A[c], n));
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
    for (n = -3863 + -3863 * -1; n < e.length; n++) e[n] && go(e[n], i, t || typeof x.type != "function");
  t || x.__e == null || Hs(x.__e), x.__c = x.__ = x.__e = x.__d = void (1309 * -1 + 730 + 579);
}
function xd(x, i, t) {
  return this.constructor(x, t);
}
function _t(x, i, t) {
  var e, n, o, r;
  F.__ && F.__(x, i), n = (e = typeof t == "function") ? null : t && t.__k || i.__k, o = [], r = [], or(i, x = (!e && t || i).__k = Ee(at, null, [x]), n || yn, yn, i.namespaceURI, !e && t ? [t] : n ? null : i.firstChild ? Yn.call(i.childNodes) : null, o, !e && t ? t : n ? n.__e : i.firstChild, e, r), Ts(o, x, r);
}
function ar(x, i) {
  _t(x, i, ar);
}
function sr(x, i, t) {
  var e, n, o, r, a = Kt({}, x.props);
  for (o in x.type && x.type.defaultProps && (r = x.type.defaultProps), i) o == "key" ? e = i[o] : o == "ref" ? n = i[o] : a[o] = void (4689 * 2 + 109 * 45 + -14283) === i[o] && void (-823 * 2 + 1 * -1037 + 2683) !== r ? r[o] : i[o];
  return arguments.length > -4232 * 2 + 5388 * -1 + -6 * -2309 && (a.children = arguments.length > -74 * 79 + 2652 + 3197 ? Yn.call(arguments, 2) : t), hn(x.type, a, e || x.key, n || x.ref, null);
}
function Mn(x, i) {
  var t = { __c: i = "__cC" + Os++, __: x, Consumer: function(e, n) {
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
} }, Bs = -5 * -525 + 1 * 7715 + -2585 * 4, Gs = function(x) {
  return x != null && x.constructor == null;
}, ot.prototype.setState = function(x, i) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Kt({}, this.state), typeof x == "function" && (x = x(Kt({}, t), this.props)), x && Kt(t, x), x != null && this.__v && (i && this._sb.push(i), co(this));
}, ot.prototype.forceUpdate = function(x) {
  this.__v && (this.__e = !(1 * -709 + -1 * 6163 + -6872 * -1), x && this.__h.push(x), co(this));
}, ot.prototype.render = at, x0 = [], ks = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ro = function(x, i) {
  return x.__v.__b - i.__v.__b;
}, Tx.__r = -7303 + -37 * 5 + -234 * -32, ir = 2868 + -1434 * 2, ao = da(!(580 * 7 + 4663 + 49 * -178)), so = da(!(-9949 * 1 + -5981 * -1 + -1984 * -2)), Os = -4072 + -3 * 2643 + 12001;
function cr() {
  return (cr = Object.assign ? Object.assign.bind() : function(x) {
    for (var i = -4984 + 59 * 29 + 3274; i < arguments.length; i++) {
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
    for (r = -4299 + -461 * -5 + -997 * -2; r < s.length; r++) n.indexOf(o = s[r]) >= 0 || (a[o] = e[o]);
    return a;
  }(x, id);
  return sr(i, t);
}
function rd() {
  var x = {};
  x.detail = {}, x.bubbles = !(-7138 + 58 * -87 + 12184), x.cancelable = !(-30 * 179 + 5979 + 21 * -29);
  var i = new CustomEvent("_preact", x);
  this.dispatchEvent(i), this._vdom = Ee(od, cr({}, this._props, { context: i.detail.context }), function t(e, n) {
    if (-23 * -278 + 1878 + -1 * 8269 === e.nodeType) return e.data;
    if (4860 + 927 * -3 + -1039 * 2 !== e.nodeType) return null;
    var o = [], r = {}, a = 0, s = e.attributes, c = e.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (r[s[a].name] = s[a].value, r[Vs(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var d = t(c[a], null), g = c[a].slot;
      g ? r[g] = Ee(ua, { name: g }, d) : o[a] = d;
    }
    var C = n ? Ee(ua, null, o) : o;
    return Ee(n || e.nodeName.toLowerCase(), r, C);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? ar : _t)(this._vdom, this._root);
}
function Vs(x) {
  return x.replace(/-(\w)/g, function(i, t) {
    return t ? t.toUpperCase() : "";
  });
}
function ad(x, i, t) {
  if (this._vdom) {
    var e = {};
    e[x] = t = t ?? void (6063 + 3 * 2791 + -401 * 36), e[Vs(x)] = t, this._vdom = sr(this._vdom, e), _t(this._vdom, this._root);
  }
}
function sd() {
  _t(this._vdom = null, this._root);
}
function ua(x, i) {
  var t = this;
  return Ee("slot", cr({}, x, { ref: function(e) {
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
var gd = 310 * -25 + 3 * -133 + 8149;
function O(x, i, t, e, n, o) {
  i || (i = {});
  var r, a, s = i;
  if ("ref" in s)
    for (a in s = {}, i) a == "ref" ? r = i[a] : s[a] = i[a];
  var c = {};
  c.type = x, c.props = s, c.key = t, c.ref = r, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__d = void (-4152 * -1 + 2 * 3911 + -11974), c.__c = null, c.constructor = void (1 * -9764 + 3195 * 1 + 1 * 6569), c.__v = --gd, c.__i = -1, c.__u = 0, c.__source = n, c.__self = o;
  var d = c;
  if (typeof x == "function" && (r = x.defaultProps))
    for (a in r) s[a] === void 0 && (s[a] = r[a]);
  return F.vnode && F.vnode(d), d;
}
var Xe = function() {
  return Xe = Object.assign || function(i) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (i[o] = t[o]);
    }
    return i;
  }, Xe.apply(this, arguments);
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
  return ud.test(x) || x.charCodeAt(-484 + 3823 * -2 + 8130) === 5 * -1338 + 1 * 8341 + -1540 && x.charCodeAt(488 * -1 + -3843 + 4332) === -875 * -1 + 2762 + -3527 && x.charCodeAt(-1 * 834 + 758 + 78) < -5001 * 1 + -6322 + 11414;
}), jt, ce, Yi, la, F0 = -178 * -46 + -1 * 3679 + -4509, Es = [], ge = F, Ia = ge.__b, fa = ge.__r, Ca = ge.diffed, ha = ge.__c, pa = ge.unmount, ma = ge.__;
function J0(x, i) {
  ge.__h && ge.__h(ce, x, F0 || i), F0 = 0;
  var t = {};
  t.__ = [], t.__h = [];
  var e = ce.__H || (ce.__H = t);
  return x >= e.__.length && e.__.push({}), e.__[x];
}
function Le(x) {
  return F0 = -371 + 7421 * -1 + -7793 * -1, gr(Ds, x);
}
function gr(x, i, t) {
  var e = J0(jt++, 2);
  if (e.t = x, !e.__c && (e.__ = [t ? t(i) : Ds(void (-2652 + -7982 * 1 + 10634), i), function(a) {
    var s = e.__N ? e.__N[0] : e.__[0], c = e.t(s, a);
    s !== c && (e.__N = [c, e.__[3 * 2081 + -5164 * -1 + -3 * 3802]], e.__c.setState({}));
  }], e.__c = ce, !ce.u)) {
    var n = function(a, s, c) {
      if (!e.__c.__H) return !0;
      var d = e.__c.__H.__.filter(function(C) {
        return !!C.__c;
      });
      if (d.every(function(C) {
        return !C.__N;
      })) return !o || o.call(this, a, s, c);
      var g = !(-2533 + 4 * -2333 + -34 * -349);
      return d.forEach(function(C) {
        if (C.__N) {
          var u = C.__[0];
          C.__ = C.__N, C.__N = void 0, u !== C.__[0] && (g = !0);
        }
      }), !(!g && e.__c.props === a) && (!o || o.call(this, a, s, c));
    };
    ce.u = !(2066 * -1 + 3273 * -1 + 5339);
    var o = ce.shouldComponentUpdate, r = ce.componentWillUpdate;
    ce.componentWillUpdate = function(a, s, c) {
      if (this.__e) {
        var d = o;
        o = void (5897 * -1 + 1879 + 4018), n(a, s, c), o = d;
      }
      r && r.call(this, a, s, c);
    }, ce.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function ae(x, i) {
  var t = J0(jt++, 3);
  !ge.__s && dr(t.__H, i) && (t.__ = x, t.i = i, ce.__H.__h.push(t));
}
function U0(x, i) {
  var t = J0(jt++, 4);
  !ge.__s && dr(t.__H, i) && (t.__ = x, t.i = i, ce.__h.push(t));
}
function Ge(x) {
  return F0 = -1 * 1301 + -1794 * -1 + -488, ze(function() {
    var i = {};
    return i.current = x, i;
  }, []);
}
function Ls(x, i, t) {
  F0 = -7394 * 1 + 1 * 965 + 429 * 15, U0(function() {
    return typeof x == "function" ? (x(i()), function() {
      return x(null);
    }) : x ? (x.current = i(), function() {
      return x.current = null;
    }) : void (-1921 * 5 + -4767 + 14372);
  }, t == null ? t : t.concat(x));
}
function ze(x, i) {
  var t = J0(jt++, 7);
  return dr(t.__H, i) && (t.__ = x(), t.__H = i, t.__h = x), t.__;
}
function qe(x, i) {
  return F0 = -127 * 5 + -8379 + 26 * 347, ze(function() {
    return x;
  }, i);
}
function m0(x) {
  var i = ce.context[x.__c], t = J0(jt++, 9);
  return t.c = x, i ? (t.__ == null && (t.__ = !(4611 + -82 * -13 + 1 * -5677), i.sub(ce)), i.props.value) : x.__;
}
function Vx(x, i) {
  ge.useDebugValue && ge.useDebugValue(i ? i(x) : x);
}
function Ns() {
  var x = J0(jt++, 11);
  if (!x.__) {
    for (var i = ce.__v; i !== null && !i.__m && i.__ !== null; ) i = i.__;
    var t = i.__m || (i.__m = [-59 * -138 + 681 * 7 + -331 * 39, 1 * -6543 + 1 * -5970 + 97 * 129]);
    x.__ = "P" + t[-329 * 13 + -34 * -13 + 3835] + "-" + t[265 * 15 + -18 * 11 + -118 * 32]++;
  }
  return x.__;
}
function Id() {
  for (var x; x = Es.shift(); ) if (x.__P && x.__H) try {
    x.__H.__h.forEach(bx), x.__H.__h.forEach(uo), x.__H.__h = [];
  } catch (i) {
    x.__H.__h = [], ge.__e(i, x.__v);
  }
}
ge.__b = function(x) {
  ce = null, Ia && Ia(x);
}, ge.__ = function(x, i) {
  x && i.__k && i.__k.__m && (x.__m = i.__k.__m), ma && ma(x, i);
}, ge.__r = function(x) {
  fa && fa(x), jt = 2 * -4431 + 163 * 55 + 103 * -1;
  var i = (ce = x.__c).__H;
  i && (Yi === ce ? (i.__h = [], ce.__h = [], i.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (-1 * -334 + -7687 + -43 * -171);
  })) : (i.__h.forEach(bx), i.__h.forEach(uo), i.__h = [], jt = 59 * 18 + -1 * -5591 + -1 * 6653)), Yi = ce;
}, ge.diffed = function(x) {
  Ca && Ca(x);
  var i = x.__c;
  i && i.__H && (i.__H.__h.length && (-1669 * 1 + -2551 + 603 * 7 !== Es.push(i) && la === ge.requestAnimationFrame || ((la = ge.requestAnimationFrame) || fd)(Id)), i.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (2203 * 1 + 5286 + -7489);
  })), Yi = ce = null;
}, ge.__c = function(x, i) {
  i.some(function(t) {
    try {
      t.__h.forEach(bx), t.__h = t.__h.filter(function(e) {
        return !e.__ || uo(e);
      });
    } catch (e) {
      i.some(function(n) {
        n.__h && (n.__h = []);
      }), i = [], ge.__e(e, t.__v);
    }
  }), ha && ha(x, i);
}, ge.unmount = function(x) {
  pa && pa(x);
  var i, t = x.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      bx(e);
    } catch (n) {
      i = n;
    }
  }), t.__H = void (-2 * 1625 + -1 * 4889 + -2713 * -3), i && ge.__e(i, t.__v));
};
var ba = typeof requestAnimationFrame == "function";
function fd(x) {
  var i, t = function() {
    clearTimeout(e), ba && cancelAnimationFrame(i), setTimeout(x);
  }, e = setTimeout(t, 100);
  ba && (i = requestAnimationFrame(t));
}
function bx(x) {
  var i = ce, t = x.__c;
  typeof t == "function" && (x.__c = void (-1 * 8812 + 6786 + 2026), t()), ce = i;
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
function Ds(x, i) {
  return typeof i == "function" ? i(x) : i;
}
function Fs(x, i) {
  for (var t in i) x[t] = i[t];
  return x;
}
function lo(x, i) {
  for (var t in x) if (t !== "__source" && !(t in i)) return !(4 * 21 + 1510 * -2 + 2936);
  for (var e in i) if (e !== "__source" && x[e] !== i[e]) return !(-4816 * -1 + -2861 * 1 + 1 * -1955);
  return !(-382 * 19 + -713 * -10 + -1 * -129);
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
    return this.shouldComponentUpdate = t, Ee(x, n);
  }
  return e.displayName = "Memo(" + (x.displayName || x.name) + ")", e.prototype.isReactComponent = !(-7 * 11 + 258 * 1 + -181), e.__f = !(1 * -2791 + 4431 + -1640), e;
}
(Io.prototype = new ot()).isPureReactComponent = !(1 * -5277 + -6743 * -1 + -1466), Io.prototype.shouldComponentUpdate = function(x, i) {
  return lo(this.props, x) || lo(this.state, i);
};
var Aa = F.__b;
F.__b = function(x) {
  x.type && x.type.__f && x.ref && (x.props.ref = x.ref, x.ref = null), Aa && Aa(x);
};
var hd = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -3143 * 1 + 6691 * 1 + -1 * -363;
function Ys(x) {
  function i(t) {
    var e = Fs({}, t);
    return delete e.ref, x(e, t.ref || null);
  }
  return i.$$typeof = hd, i.render = i, i.prototype.isReactComponent = i.__f = !(-9871 + 9871 * 1), i.displayName = "ForwardRef(" + (x.displayName || x.name) + ")", i;
}
var ya = function(x, i) {
  return x == null ? null : Tt(Tt(x).map(i));
}, pd = { map: ya, forEach: ya, count: function(x) {
  return x ? Tt(x).length : 929 + 1 * -8367 + 7438;
}, only: function(x) {
  var i = Tt(x);
  if (3471 * -2 + 1 * -5935 + 274 * 47 !== i.length) throw "Children.only";
  return i[-8693 * -1 + -1 * 6989 + -71 * 24];
}, toArray: Tt }, md = F.__e;
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
  }), x.__c.__H = null), (x = Fs({}, x)).__c != null && (x.__c.__P === t && (x.__c.__P = i), x.__c = null), x.__k = x.__k && x.__k.map(function(e) {
    return Ms(e, i, t);
  })), x;
}
function Xs(x, i, t) {
  return x && t && (x.__v = null, x.__k = x.__k && x.__k.map(function(e) {
    return Xs(e, i, t);
  }), x.__c && x.__c.__P === i && (x.__e && t.appendChild(x.__e), x.__c.__e = !(-3 * -389 + -216 * 26 + -1483 * -3), x.__c.__P = t)), x;
}
function Ax() {
  this.__u = 9219 + 3 * 731 + -317 * 36, this.t = null, this.__b = null;
}
function _s(x) {
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
    return Ee(t, o);
  }
  return n.displayName = "Lazy", n.__f = !(1251 + 9 * -139), n;
}
function gn() {
  this.u = null, this.o = null;
}
F.unmount = function(x) {
  var i = x.__c;
  i && i.__R && i.__R(), i && -3252 + -2 * -1642 & x.__u && (x.type = null), va && va(x);
}, (Ax.prototype = new ot()).__c = function(x, i) {
  var t = i.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = _s(e.__v), o = !(-5293 * -1 + -2172 + -3120), r = function() {
    o || (o = !(-12694 + 2 * 6347), t.__R = null, n ? n(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var s = e.state.__a;
        e.__v.__k[6599 + 1 * -6599] = Xs(s, s.__c.__P, s.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.t.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || -6 * 807 + 3561 + -13 * -101 & i.__u || e.setState({ __a: e.__b = e.__v.__k[-233 * 13 + -11 * -611 + -3692] }), x.then(r, r);
}, Ax.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ax.prototype.render = function(x, i) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-13 * -425 + -6859 + 1334].__c;
      this.__v.__k[-5057 + 19 * -41 + -1 * -5836] = Ms(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = i.__a && Ee(at, null, x.fallback);
  return n && (n.__u &= -(337 * -11 + -3280 + 7020 * 1)), [Ee(at, null, i.__a ? null : x.children), n];
};
var Wa = function(x, i, t) {
  if (++t[1] === t[0] && x.o.delete(i), x.props.revealOrder && (x.props.revealOrder[-7864 + 1 * -26 + 7890] !== "t" || !x.o.size)) for (t = x.u; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[1383 * -6 + -4843 * -1 + -16 * -216] < t[1015 * 1 + 417 + -358 * 4]) break;
    x.u = t = t[43 * -25 + 5177 + -4100];
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
    return !0;
  }, appendChild: function(e) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> 1157 * -4 + 1789 * 5 + -2 * 2158, 96 * 76 + -8646 + 1351), i.i.removeChild(e);
  } }), _t(Ee(Ad, { context: i.context }, x.__v), i.l);
}
function vd(x, i) {
  var t = {};
  t.__v = x, t.i = i;
  var e = Ee(yd, t);
  return e.containerInfo = i, e;
}
(gn.prototype = new ot()).__a = function(x) {
  var i = this, t = _s(i.__v), e = i.o.get(x);
  return e[-97 * -31 + -111 + -2896 * 1]++, function(n) {
    var o = function() {
      i.props.revealOrder ? (e.push(n), Wa(i, x, e)) : n();
    };
    t ? t(o) : o();
  };
}, gn.prototype.render = function(x) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var i = Tt(x.children);
  x.revealOrder && x.revealOrder[-228 + 1 * -7034 + 7262] === "b" && i.reverse();
  for (var t = i.length; t--; ) this.o.set(i[t], this.u = [-4502 * 2 + -1305 + 10310, -1814 + 95 * -84 + -9794 * -1, this.u]);
  return x.children;
}, gn.prototype.componentDidUpdate = gn.prototype.componentDidMount = function() {
  var x = this;
  this.o.forEach(function(i, t) {
    Wa(x, t, i);
  });
};
var js = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 2877 * 11 + -14186 + -6 * -7107, Wd = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, wd = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Sd = /[A-Z0-9]/g, Bd = typeof document < "u", Gd = function(x) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(x);
};
function kd(x, i, t) {
  return i.__k == null && (i.textContent = ""), _t(x, i), typeof t == "function" && t(), x ? x.__c : null;
}
function Od(x, i, t) {
  return ar(x, i), typeof t == "function" && t(), x ? x.__c : null;
}
ot.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(x) {
  Object.defineProperty(ot.prototype, x, { configurable: !(3487 * -1 + -2615 + -27 * -226), get: function() {
    return this["UNSAFE_" + x];
  }, set: function(i) {
    var t = {};
    t.configurable = !(-875 * -5 + -837 * -5 + -535 * 16), t.writable = !(2845 * -3 + 6726 + 1809), t.value = i, Object.defineProperty(this, x, t);
  } });
});
var wa = F.event;
function Zd() {
}
function Hd() {
  return this.cancelBubble;
}
function Rd() {
  return this.defaultPrevented;
}
F.event = function(x) {
  return wa && (x = wa(x)), x.persist = Zd, x.isPropagationStopped = Hd, x.isDefaultPrevented = Rd, x.nativeEvent = x;
};
var yx = {};
yx.enumerable = !(-244 * -11 + 13 * 337 + -7064), yx.configurable = !(2449 + -2449 * 1), yx.get = function() {
  return this.class;
};
var ur, Kd = yx, Sa = F.vnode;
F.vnode = function(x) {
  typeof x.type == "string" && function(i) {
    var t = i.props, e = i.type, n = {};
    for (var o in t) {
      var r = t[o];
      if (!(o === "value" && "defaultValue" in t && r == null || Bd && o === "children" && e === "noscript" || o === "class" || o === "className")) {
        var a = o.toLowerCase();
        o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && !(-9 * -386 + -8742 + 5268) === r ? r = "" : a === "translate" && r === "no" ? r = !(-278 * -24 + -296 * 8 + -4303 * 1) : a === "ondoubleclick" ? o = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || Gd(t.type) ? a === "onfocus" ? o = "onfocusin" : a === "onblur" ? o = "onfocusout" : wd.test(o) ? o = a : -(-3 * -905 + 6771 + -1355 * 7) === e.indexOf("-") && Wd.test(o) ? o = o.replace(Sd, "-$&").toLowerCase() : r === null && (r = void 0) : a = o = "oninput", a === "oninput" && n[o = a] && (o = "oninputCapture"), n[o] = r;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Tt(t.children).forEach(function(s) {
      s.props.selected = -(268 + 2743 * -1 + 2476) != n.value.indexOf(s.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = Tt(t.children).forEach(function(s) {
      s.props.selected = n.multiple ? -(-1343 * -7 + -9 * -1103 + -19327) != n.defaultValue.indexOf(s.props.value) : n.defaultValue == s.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", Kd)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), i.props = n;
  }(x), x.$$typeof = js, Sa && Sa(x);
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
var ve = {};
ve.readContext = function(x) {
  return ur.__n[x.__c].props.value;
}, ve.useCallback = qe, ve.useContext = m0, ve.useDebugValue = Vx, ve.useDeferredValue = zs, ve.useEffect = ae, ve.useId = Ns, ve.useImperativeHandle = Ls, ve.useInsertionEffect = $s, ve.useLayoutEffect = U0, ve.useMemo = ze, ve.useReducer = gr, ve.useRef = Ge, ve.useState = Le, ve.useSyncExternalStore = ec, ve.useTransition = qs;
var Js = {};
Js.current = ve;
var Us = {};
Us.ReactCurrentDispatcher = Js;
var Pd = Us;
function Td(x) {
  return Ee.bind(null, x);
}
function pi(x) {
  return !!x && x.$$typeof === js;
}
function Vd(x) {
  return pi(x) && x.type === at;
}
function Ed(x) {
  return !!x && !!x.displayName && (typeof x.displayName == "string" || x.displayName instanceof String) && x.displayName.startsWith("Memo(");
}
function Ld(x) {
  return pi(x) ? sr.apply(null, arguments) : x;
}
function Nd(x) {
  return !!x.__k && (_t(null, x), !(-168 * 37 + 1284 + 4932));
}
function Dd(x) {
  return x && (x.base || -2 * 1105 + -3826 + 6037 === x.nodeType && x) || null;
}
var Fd = function(x, i) {
  return x(i);
}, Yd = function(x, i) {
  return x(i);
}, Md = at;
function Qs(x) {
  x();
}
function zs(x) {
  return x;
}
function qs() {
  return [!1, Qs];
}
var $s = U0, Xd = pi;
function ec(x, i) {
  var t = i(), e = Le({ h: { __: t, v: i } }), n = e[-6663 + 100 * -64 + -13063 * -1].h, o = e[-104 * 4 + -4449 + 4866];
  return U0(function() {
    n.__ = t, n.v = i, Mi(n) && o({ h: n });
  }, [x, t, i]), ae(function() {
    return Mi(n) && o({ h: n }), x(function() {
      Mi(n) && o({ h: n });
    });
  }, [x]), t;
}
function Mi(x) {
  var i, t, e = x.v, n = x.__;
  try {
    var o = e();
    return !((i = n) === (t = o) && (i !== 0 || 1 / i == (9612 + 255 * 39 + 2 * -9778) / t) || i != i && t != t);
  } catch {
    return !(-10735 + -19 * -565);
  }
}
var D = {};
D.useState = Le, D.useId = Ns, D.useReducer = gr, D.useEffect = ae, D.useLayoutEffect = U0, D.useInsertionEffect = $s, D.useTransition = qs, D.useDeferredValue = zs, D.useSyncExternalStore = ec, D.startTransition = Qs, D.useRef = Ge, D.useImperativeHandle = Ls, D.useMemo = ze, D.useCallback = qe, D.useContext = m0, D.useDebugValue = Vx, D.version = "17.0.2", D.Children = pd, D.render = kd, D.hydrate = Od, D.unmountComponentAtNode = Nd, D.createPortal = vd, D.createElement = Ee, D.createContext = Mn, D.createFactory = Td, D.cloneElement = Ld, D.createRef = $g, D.Fragment = at, D.isValidElement = pi, D.isElement = Xd, D.isFragment = Vd, D.isMemo = Ed, D.findDOMNode = Dd, D.Component = ot, D.PureComponent = Io, D.memo = Cd, D.forwardRef = Ys, D.flushSync = Yd, D.unstable_batchedUpdates = Fd, D.StrictMode = Md, D.Suspense = Ax, D.SuspenseList = gn, D.lazy = bd, D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pd;
var f0 = D, _d = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function jd(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Jd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Ud(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") && Object.keys(x).length === 1 ? x.default : x;
}
function Qd(x) {
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
  getAugmentedNamespace: Qd,
  getDefaultExportFromCjs: jd,
  getDefaultExportFromNamespaceIfNotNamed: Ud,
  getDefaultExportFromNamespaceIfPresent: Jd
}, Symbol.toStringTag, { value: "Module" }));
var qd = function(i, t, e, n) {
  var o = e ? e.call(n, i, t) : void 0;
  if (o !== void (2971 * 1 + -5537 * -1 + 2836 * -3)) return !!o;
  if (i === t) return !0;
  if (typeof i != "object" || !i || typeof t != "object" || !t) return !1;
  var r = Object.keys(i), a = Object.keys(t);
  if (r.length !== a.length) return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = 6939 + 1 * -6939; c < r.length; c++) {
    var d = r[c];
    if (!s(d)) return !1;
    var g = i[d], C = t[d];
    if (o = e ? e.call(n, g, C, d) : void (820 + -122 * 8 + 156), o === !1 || o === void (-2847 + -949 * -3) && g !== C) return !1;
  }
  return !0;
};
const $d = zd.getDefaultExportFromCjs(qd);
var se = "-ms-", pn = "-moz-", ne = "-webkit-", tc = "comm", mi = "rule", lr = "decl", eu = "@import", nc = "@keyframes", tu = "@layer", xc = Math.abs, Ir = String.fromCharCode, fo = Object.assign;
function nu(x, i) {
  return Ae(x, -19 * -508 + 7099 * -1 + -2553) ^ 45 ? (((i << -7 * 1318 + 41 * -153 + 5167 * 3 ^ Ae(x, 5139 + -4325 * -1 + -91 * 104)) << -2 * 1430 + 6165 + 1101 * -3 ^ Ae(x, -7064 + 53 * 1 + 7012)) << 2602 * 1 + -8982 + 6382 ^ Ae(x, -17591 + 241 * 73)) << 2 * -4729 + 739 * 5 + 1153 * 5 ^ Ae(x, -5386 + -1 * 4651 + 502 * 20) : 0;
}
function ic(x) {
  return x.trim();
}
function Zt(x, i) {
  return (x = i.exec(x)) ? x[3008 + 1 * -591 + 2417 * -1] : x;
}
function Y(x, i, t) {
  return x.replace(i, t);
}
function vx(x, i, t) {
  return x.indexOf(i, t);
}
function Ae(x, i) {
  return x.charCodeAt(i) | 5310 + -3 * -39 + 1 * -5427;
}
function Y0(x, i, t) {
  return x.slice(i, t);
}
function At(x) {
  return x.length;
}
function oc(x) {
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
    return !Zt(t, i);
  });
}
var bi = -3699 + 1 * 3700, M0 = 1, rc = 307 * 7 + -61 * -107 + 4 * -2169, st = 9161 + -6299 * 1 + -2862, fe = 913 * -7 + -3983 + -10374 * -1, Q0 = "";
function Ai(x, i, t, e, n, o, r, a) {
  var s = {};
  return s.value = x, s.root = i, s.parent = t, s.type = e, s.props = n, s.children = o, s.line = bi, s.column = M0, s.length = r, s.return = "", s.siblings = a, s;
}
function Ft(x, i) {
  return fo(Ai("", null, null, "", null, null, 447 + 149 * -3, x.siblings), x, { length: -x.length }, i);
}
function Z0(x) {
  for (; x.root; ) x = Ft(x.root, { children: [x] });
  dn(x, x.siblings);
}
function iu() {
  return fe;
}
function ou() {
  return fe = st > 5265 + -316 * 14 + -841 ? Ae(Q0, --st) : 0, M0--, fe === 113 * 68 + 47 * 191 + -16651 && (M0 = 41 * -121 + -6665 + -11 * -1057, bi--), fe;
}
function It() {
  return fe = st < rc ? Ae(Q0, st++) : 39 * -9 + 496 + -145, M0++, fe === 4248 + 901 * -7 + 2069 && (M0 = -16 * 334 + 1468 + 1 * 3877, bi++), fe;
}
function u0() {
  return Ae(Q0, st);
}
function Wx() {
  return st;
}
function yi(x, i) {
  return Y0(Q0, x, i);
}
function Co(x) {
  switch (x) {
    case 6667 + -414 * -3 + -7909:
    case -2 * 2714 + -2217 * 1 + 7654:
    case 68 + 58 * -1:
    case -1 * -779 + -1 * -4286 + -5052:
    case 2 * -1963 + -1773 * 1 + -1 * -5731:
      return 7318 + -71 * 1 + -7242 * 1;
    case 1018 * -5 + 85 * -106 + 14133:
    case 33 * -69 + -1 * -2649 + 7 * -47:
    case 1479 + 1435 * -1:
    case -9558 + -10 * -899 + 615:
    case -1 * 4042 + 1 * 1447 + 2657 * 1:
    case -6708 + 1837 * -1 + 8609:
    case -2 * -3701 + -1 * 4461 + -2815:
    case -3500 + -1522 * 5 + -3723 * -3:
    case -2812 + -5 * -587:
    case -283 * 33 + 890 + 8574:
      return 13 * -267 + -1 * -7873 + -4398;
    case 17341 + -823 * 21:
      return 143 * -8 + 3526 * 2 + -5905;
    case 16 + 4 * 719 + -2858:
    case 34 * -101 + 7669 + 1049 * -4:
    case 4177 + 1 * -7247 + -3110 * -1:
    case 11 * -17 + 5447 + 5169 * -1:
      return 1 * -5205 + 4847 + 360;
    case -4385 + -607 * -2 + 3212:
    case -2 * -3571 + -936 + -6113:
      return 206 * 38 + -59 * 26 + -6293;
  }
  return -1 * -431 + 553 * -1 + 1 * 122;
}
function ru(x) {
  return bi = M0 = -12362 + -12363 * -1, rc = At(Q0 = x), st = 9403 * 1 + -5209 + -4194, [];
}
function au(x) {
  return Q0 = "", x;
}
function Xi(x) {
  return ic(yi(st - (1591 + -991 * -1 + -2581), ho(x === -7856 + -7 * 259 + 16 * 610 ? x + (-39 * 197 + -7 * -499 + 4192 * 1) : x === -1 * 369 + -25 * -270 + 1 * -6341 ? x + (12 * 226 + 5950 + -1 * 8661) : x)));
}
function su(x) {
  for (; (fe = u0()) && fe < 1 * 5563 + 9295 + -14825; ) It();
  return Co(x) > 9008 + 51 * -17 + 1 * -8139 || Co(fe) > -4894 * -1 + -1018 * 2 + -2855 ? "" : " ";
}
function cu(x, i) {
  for (; --i && It() && !(fe < 9135 + -3294 * 3 + -795 * -1 || fe > -17 * 487 + -4480 + 12861 || fe > -894 + -157 * 55 + 9586 && fe < 7931 + 1343 * 5 + 2083 * -7 || fe > -6206 + -4 * -1569 && fe < 8186 + 1 * -4482 + -3607); ) ;
  return yi(x, Wx() + (i < -4699 + -421 * 15 + 11020 && u0() == 32 && It() == 33 * 223 + 5911 + -13238));
}
function ho(x) {
  for (; It(); ) switch (fe) {
    case x:
      return st;
    case -1017 * -4 + -3983 + -51:
    case -3201 + -69 * 70 + 8070:
      x !== 34 && x !== 39 && ho(fe);
      break;
    case 2 * -2040 + 8290 + 3 * -1390:
      x === 1 * -2837 + -933 * 3 + 5677 * 1 && ho(x);
      break;
    case 6167 + -51 * -94 + -10869 * 1:
      It();
      break;
  }
  return st;
}
function gu(x, i) {
  for (; It() && x + fe !== 9099 + -1 * -3097 + -12149 + (-684 + -1461 * -4 + -5150); ) if (x + fe === 9891 + 3 * -3283 + (-198 * 11 + -6032 + -2063 * -4) && u0() === -5771 + 727 * 1 + 5091) break;
  return "/*" + yi(i, st - (-5308 + -3 * -2263 + 148 * -10)) + "*" + Ir(x === -5937 + -2 * 888 + 7760 ? x : It());
}
function du(x) {
  for (; !Co(u0()); ) It();
  return yi(x, st);
}
function uu(x) {
  return au(wx("", null, null, null, [""], x = ru(x), 0, [-5 * -921 + -9249 + 4644], x));
}
function wx(x, i, t, e, n, o, r, a, s) {
  for (var c = 0, d = -9159 + -46 * -65 + 6169, g = r, C = -8641 * 1 + -3 * 2633 + 16540, u = 0, h = 61 * 158 + 252 + -230 * 43, m = 3920 * -1 + 1495 * 1 + 2426, A = -2611 + -175 * -29 + -2463, l = -4 * -2477 + 103 * 31 + -50 * 262, W = -39 * -187 + -8788 + 1495, H = "", X = n, _ = o, j = e, Z = H; A; ) switch (h = W, W = It()) {
    case 6302 + 31 * -202:
      if (h != -526 * -12 + -3 * 2831 + -763 * -3 && Ae(Z, g - (2162 * -4 + -5671 + 14320)) == -9022 + -9 * -1015 + -55) {
        vx(Z += Y(Xi(W), "&", "&\f"), "&\f", xc(c ? a[c - (4 * 602 + 1 * 1447 + -3854)] : -8283 + 849 * -11 + 17622)) != -(-3 * 802 + 1649 * 2 + 1 * -891) && (l = -(12913 + -1 * 12912));
        break;
      }
    case 2676 + -2 * -40 + -1361 * 2:
    case -3 * 2283 + 1 * -3364 + 10252:
    case 91:
      Z += Xi(W);
      break;
    case 5924 + 66 * -53 + -2417:
    case 10:
    case 89 * 91 + 2 * -932 + 3 * -2074:
    case 479 * -9 + 40 * 146 + -3 * 499:
      Z += su(h);
      break;
    case -4986 + -1 * -5078:
      Z += cu(Wx() - (9638 + -757 * 1 + -8880), -1915 + -1922 * -1);
      continue;
    case -6137 * -1 + -7901 + 1811:
      switch (u0()) {
        case -20 * -224 + 1 * -145 + 3 * -1431:
        case 47:
          dn(lu(gu(It(), Wx()), i, t, s), s);
          break;
        default:
          Z += "/";
      }
      break;
    case (3574 + -1 * 3451) * m:
      a[c++] = At(Z) * l;
    case (1028 + 931 * 2 + -2765) * m:
    case 9551 + 282 * -1 + -921 * 10:
    case 10138 + -137 * 74:
      switch (W) {
        case -6828 + -3414 * -2:
        case -7 * 1266 + -3459 + 127 * 98:
          A = 234 + 8235 * -1 + -1 * -8001;
        case 2515 * -3 + -3073 + -3 * -3559 + d:
          l == -(2321 + -288 * 18 + 2864) && (Z = Y(Z, /\f/g, "")), u > 0 && At(Z) - g && dn(u > 3767 + 229 * 4 + -4651 ? Za(Z + ";", e, t, g - (-2 * 2149 + -607 * -7 + 50), s) : Za(Y(Z, " ", "") + ";", e, t, g - (-392 * 7 + -385 * -14 + -2644), s), s);
          break;
        case 59:
          Z += ";";
        default:
          if (dn(j = Oa(Z, i, t, c, d, n, a, H, X = [], _ = [], g, o), o), W === 1585 * 3 + 1061 + 5693 * -1)
            if (d === 162 * -34 + 5 * -29 + 5653) wx(Z, i, j, j, X, o, g, a, _);
            else switch (C === 3122 * -2 + 748 * 9 + -1 * 389 && Ae(Z, 171 * -8 + -9905 + -11276 * -1) === 48 * -26 + 751 * 3 + -895 ? -101 * -16 + -3879 + 2363 : C) {
              case 7618 + -467 * -3 + 1 * -8919:
              case -389 * -8 + 3430 + -6434:
              case -643 * -2 + 4329 + -5506:
              case 1 * -1447 + -51 + -1 * -1613:
                wx(x, j, j, e && dn(Oa(x, j, j, 8437 + -605 * 11 + 54 * -33, 2635 + 1 * -2635, n, a, H, n, X = [], g, _), _), n, _, g, a, e ? X : _);
                break;
              default:
                wx(Z, j, j, j, [""], _, 6462 + -773 * -11 + 14965 * -1, a, _);
            }
      }
      c = d = u = -75 + 23 * -178 + 4169, m = l = -11 * 602 + 8334 + -59 * 29, H = Z = "", g = r;
      break;
    case 8649 + 11 * -781:
      g = -13 * 290 + 4951 + -1180 + At(Z), u = h;
    default:
      if (m < 2741 + 268 * -20 + 2620) {
        if (W == 9377 * -1 + -5 * 1172 + 15360) --m;
        else if (W == 5 * -1493 + -76 * 44 + 14 * 781 && m++ == 3811 * 1 + -3756 + -11 * 5 && ou() == 125) continue;
      }
      switch (Z += Ir(W), W * m) {
        case 1 * -8238 + -2494 + -3590 * -3:
          l = d > -8423 * 1 + -11 * -640 + 1383 ? 2966 + -2965 * 1 : (Z += "\f", -(2959 + -596 * -3 + -42 * 113));
          break;
        case 315 + 6 * -80 + 209:
          a[c++] = (At(Z) - 1) * l, l = -14212 + 233 * 61;
          break;
        case -294 + -8455 * -1 + -8097:
          u0() === -5472 + 214 * 5 + 4447 * 1 && (Z += Xi(It())), C = u0(), d = g = At(H = Z += du(Wx())), W++;
          break;
        case 1 * -619 + 105 * 1 + 1 * 559:
          h === -7884 + 1 * 7929 && At(Z) == -1823 * 1 + -4768 + 6593 && (m = -115 * 29 + -9005 * -1 + -5670);
      }
  }
  return o;
}
function Oa(x, i, t, e, n, o, r, a, s, c, d, g) {
  for (var C = n - 1, u = n === -2577 + -859 * -3 ? o : [""], h = oc(u), m = -9 * 489 + -4568 * -1 + -167, A = 0, l = 0; m < e; ++m) for (var W = 167 * 19 + 71 * -134 + 6341, H = Y0(x, C + (17 * 167 + -395 + -2443), C = xc(A = r[m])), X = x; W < h; ++W) (X = ic(A > 1607 * 5 + 7 * -908 + 73 * -23 ? u[W] + " " + H : Y(H, /&\f/g, u[W]))) && (s[l++] = X);
  return Ai(x, i, t, n === -21 * -428 + -3435 + 3 * -1851 ? mi : a, s, c, d, g);
}
function lu(x, i, t, e) {
  return Ai(x, i, t, tc, Ir(iu()), Y0(x, -993 + 1 * 4799 + -3804, -(-494 + 87 * -83 + 1 * 7717)), 5921 + -5921 * 1, e);
}
function Za(x, i, t, e, n) {
  return Ai(x, i, t, lr, Y0(x, 9781 * 1 + 11 * -348 + -5953, e), Y0(x, e + (1 * 2587 + 1655 + -4241), -(8730 + 1766 * 3 + -14027)), e, n);
}
function ac(x, i, t) {
  switch (nu(x, i)) {
    case 257 + 4846 * 1:
      return ne + "print-" + x + x;
    case 5737:
    case 8 * 317 + 8675 + 5 * -1402:
    case 8850 + -75 * -11 + -2 * 3249:
    case 654 * -2 + -405 + 5146:
    case 1879 * -1 + -1 * -5319 + 257 * -7:
    case -5349 + 237 * -3 + 10517:
    case -8 * -402 + 3430 + -1 * 3725:
    case -9608 + -30 * -506:
    case 2796 + -2 * -1780:
    case 3 * 34 + -3093 * 1 + -465 * -19:
    case -113 * -19 + 339 * 22 + -1 * 6414:
    case 5996 + 38 * -155 + -6539 * -1:
    case -391 * -13 + 8064 + -10142:
    case 6391:
    case 953 + 6 * 821:
    case -7888 + 156 * -49 + 21155:
    case 1476 * 1 + -1 * -4823 + -164:
    case -1465 + 1 * 5163 + 901:
    case -816 + -349 * 7 + -2 * -4057:
    case -1 * 3672 + 4368 + 3519:
    case -1 * -10063 + -1 * -3868 + -1 * 7542:
    case -3080 + 852 * -5 + 12449 * 1:
    case 3 * 1029 + 5953 + 35 * -105:
    case 1599 + 1 * -6635 + 10657:
    case -738 + 2233 * 1 + 2334:
      return ne + x + x;
    case 7 * 647 + -837 * -2 + 202 * -7:
      return pn + x + x;
    case -1803 * -1 + 467 * -8 + 7282:
    case 1386 + -3273 * -1 + -413:
    case -34 * 229 + -8791 * -1 + -5 * -761:
    case -2 * 5844 + -135 + 18791:
    case -1553 + -1 * 7225 + -73 * -158:
      return ne + x + pn + x + se + x + x;
    case 317 * -8 + -1 * -5883 + 2589:
      switch (Ae(x, i + (46 * 64 + 4481 + 22 * -337))) {
        case -12 * 481 + -1 * -5509 + -13 * -29:
          return ne + x + se + Y(x, /[svh]\w+-[tblr]{2}/, "tb") + x;
        case -16602 + -5 * -3342:
          return ne + x + se + Y(x, /[svh]\w+-[tblr]{2}/, "tb-rl") + x;
        case 1562 + 357 * -4 + 1 * -89:
          return ne + x + se + Y(x, /[svh]\w+-[tblr]{2}/, "lr") + x;
      }
    case 54 * -4 + 6050 + 994:
    case -1 * -7142 + -93 * 97 + 6147 * 1:
    case 3405 + 2 * 510 + -1522:
      return ne + x + se + x + x;
    case -5964 + -2 * -5847 + 435:
      return ne + x + se + "flex-" + x + x;
    case 6640 + 562 * -1 + -1 * 891:
      return ne + x + Y(x, /(\w+).+(:[^]+)/, ne + "box-$1$2" + se + "flex-$1$2") + x;
    case 8332 * -1 + -3095 + 16870:
      return ne + x + se + "flex-item-" + Y(x, /flex-|-self/g, "") + (Zt(x, /flex-|baseline/) ? "" : se + "grid-row-" + Y(x, /flex-|-self/g, "")) + x;
    case -5 * -103 + 8527 + -4367 * 1:
      return ne + x + se + "flex-line-pack" + Y(x, /align-content|flex-|-self/g, "") + x;
    case -37 * -91 + 11056 + 25 * -355:
      return ne + x + se + Y(x, "shrink", "negative") + x;
    case -31 * 16 + -5113 + -11 * -991:
      return ne + x + se + Y(x, "basis", "preferred-size") + x;
    case -1243 + 7303 * 1:
      return ne + "box-" + Y(x, "-grow", "") + ne + x + se + Y(x, "grow", "positive") + x;
    case -4461 * -2 + -2 * -1689 + 7746 * -1:
      return ne + Y(x, /([^-])(transform)/g, "$1" + ne + "$2") + x;
    case 10351 * 1 + 1382 + -5546:
      return Y(Y(Y(x, /(zoom-|grab)/, ne + "$1"), /(image-set)/, ne + "$1"), x, "") + x;
    case -9866 + -1 * -15361:
    case 5971 * -1 + -5 * 1380 + 16830:
      return Y(x, /(image-set\([^]*)/, ne + "$1$`$1");
    case -1 * 4483 + -7712 + 9 * 1907:
      return Y(Y(x, /(.+:)(flex-)?(.*)/, ne + "box-pack:$3" + se + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ne + x + x;
    case -4016 + 13 * 632:
      if (!Zt(x, /flex-|baseline/)) return se + "grid-column-align" + Y0(x, i) + x;
      break;
    case -23 * 271 + 5749 + 3076:
    case 3360:
      return se + Y(x, "template-", "") + x;
    case 3810 + -3 * 1922 + 1585 * 4:
    case -1 * 6580 + 9353 + -281 * -3:
      return t && t.some(function(e, n) {
        return i = n, Zt(e.props, /grid-\w+-end/);
      }) ? ~vx(x + (t = t[i].value), "span", 1 * 9617 + 3355 + -276 * 47) ? x : se + Y(x, "-start", "") + x + se + "grid-row-span:" + (~vx(t, "span", 0) ? Zt(t, /\d+/) : +Zt(t, /\d+/) - +Zt(x, /\d+/)) + ";" : se + Y(x, "-start", "") + x;
    case -1 * -7247 + -34 * 110 + 463 * 3:
    case -9674 + -29 * 3 + 13889:
      return t && t.some(function(e) {
        return Zt(e.props, /grid-\w+-start/);
      }) ? x : se + Y(Y(x, "-end", "-span"), "span ", "") + x;
    case 4095:
    case -19 * 269 + -806 + 9500:
    case -36 * 58 + -2 * 1304 + 8764:
    case -7849 + -1 * 9663 + -10022 * -2:
      return Y(x, /(.+)-inline(.+)/, ne + "$1$2") + x;
    case -4551 + -2 * 1594 + 15855:
    case -5945 + -361 * 11 + 16975:
    case 5753:
    case 5146 + 6 * 202 + 823 * -1:
    case 5445:
    case 114 * 2 + -10448 + -29 * -549:
    case 4018 + 127 * 62 + -6959 * 1:
    case 2096 + 5705 * 1 + -1 * 3124:
    case -1 * 1982 + 11023 + -3508:
    case 193 * -16 + 1199 + 7678:
    case -2994 + 6243 * 1 + 1772:
    case -382 * 1 + 1 * 3047 + 2 * 1050:
      if (At(x) - (-423 * -4 + -333 + -1358 * 1) - i > 3743 + -101 * 37) switch (Ae(x, i + (-3 * -788 + 2005 * -4 + 5657 * 1))) {
        case 5136 + 6844 * -1 + 1 * 1817:
          if (Ae(x, i + (49 * -41 + 404 + 1 * 1609)) !== 2881 * -1 + 961 * -1 + -13 * -299) break;
        case -1351 * 1 + 9174 + -7721:
          return Y(x, /(.+:)(.+)-([^]+)/, "$1" + ne + "$2-$3$1" + pn + (Ae(x, i + (-3485 + 218 * 16)) == 1143 * -6 + 360 * 10 + 3366 ? "$3" : "$2-$3")) + x;
        case 280 + -191 * 47 + 8812:
          return ~vx(x, "stretch", -5 * -1371 + 298 * 2 + -7451) ? ac(Y(x, "stretch", "fill-available"), i, t) + x : x;
      }
      break;
    case 5251 + -1 * 9346 + 9247:
    case 10 * 432 + -1 * 6253 + 7853:
      return Y(x, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, o, r, a, s, c) {
        return se + n + ":" + o + c + (r ? se + n + "-span:" + (a ? s : +s - +o) + c : "") + x;
      });
    case 4949:
      if (Ae(x, i + (178 * -22 + -4774 + 8696 * 1)) === 228 * 32 + 3938 + -11113) return Y(x, ":", ":" + ne) + x;
      break;
    case 1251 * -9 + -3180 + 6961 * 3:
      switch (Ae(x, Ae(x, -109 * -9 + -1 * -9769 + 671 * -16) === 5968 + -5923 * 1 ? -3801 + -19 * -201 : -5278 + -3 * -607 + 3468)) {
        case -262 * 3 + -4091 + 4997:
          return Y(x, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ne + (Ae(x, 4 * 1028 + -2831 + -1267) === -8962 + -9007 * -1 ? "inline-" : "") + "box$3$1" + ne + "$2$3$1" + se + "$2box$3") + x;
        case 8678 * 1 + -2 * 398 + -1 * 7782:
          return Y(x, ":", ":" + se) + x;
      }
      break;
    case -4481 + 1438 * -1 + 22 * 529:
    case 8161 * -1 + 3848 + -60 * -116:
    case 17 * -244 + -1 * -5303 + 980:
    case -98 * 13 + 1 * 3 + 1 * 5198:
    case -6692 + -1 * -9083:
      return Y(x, "scroll-", "scroll-snap-") + x;
  }
  return x;
}
function Ex(x, i) {
  for (var t = "", e = 9858 + -134 * -10 + 5599 * -2; e < x.length; e++) t += i(x[e], e, x, i) || "";
  return t;
}
function Iu(x, i, t, e) {
  switch (x.type) {
    case tu:
      if (x.children.length) break;
    case eu:
    case lr:
      return x.return = x.return || x.value;
    case tc:
      return "";
    case nc:
      return x.return = x.value + "{" + Ex(x.children, e) + "}";
    case mi:
      if (!At(x.value = x.props.join(","))) return "";
  }
  return At(t = Ex(x.children, e)) ? x.return = x.value + "{" + t + "}" : "";
}
function fu(x) {
  var i = oc(x);
  return function(t, e, n, o) {
    for (var r = "", a = -3611 + 11 * -34 + 5 * 797; a < i; a++) r += x[a](t, e, n, o) || "";
    return r;
  };
}
function Cu(x) {
  return function(i) {
    i.root || (i = i.return) && x(i);
  };
}
function hu(x, i, t, e) {
  if (x.length > -(-2361 + -1 * 21 + 2383) && !x.return)
    switch (x.type) {
      case lr:
        x.return = ac(x.value, x.length, t);
        return;
      case nc:
        return Ex([Ft(x, { value: Y(x.value, "@", "@" + ne) })], e);
      case mi:
        if (x.length) return xu(t = x.props, function(n) {
          switch (Zt(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              Z0(Ft(x, { props: [Y(n, /:(read-\w+)/, ":" + pn + "$1")] }));
              var o = {};
              o.props = [n], Z0(Ft(x, o)), fo(x, { props: ka(t, e) });
              break;
            case "::placeholder":
              Z0(Ft(x, { props: [Y(n, /:(plac\w+)/, ":" + ne + "input-$1")] })), Z0(Ft(x, { props: [Y(n, /:(plac\w+)/, ":" + pn + "$1")] })), Z0(Ft(x, { props: [Y(n, /:(plac\w+)/, se + "input-$1")] }));
              var r = {};
              r.props = [n], Z0(Ft(x, r)), fo(x, { props: ka(t, e) });
              break;
          }
          return "";
        });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var pu = N, $ = {}, C0 = typeof process < "u" && void (2368 + 3287 * 1 + 5 * -1131) !== $ && ($.REACT_APP_SC_ATTR || $.SC_ATTR) || "data-styled", sc = "active", cc = "data-styled-version", vi = "6.1.11", fr = `/*!sc*/
`, Cr = typeof window < "u" && "HTMLElement" in window, mu = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-7996 + 14 * 165 + -2 * -2843) !== $ && $.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== "" ? $.REACT_APP_SC_DISABLE_SPEEDY !== "false" && $.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-1 * 183 + -3 * 137 + 594) !== $ && $.SC_DISABLE_SPEEDY !== void 0 && $.SC_DISABLE_SPEEDY !== "" ? $.SC_DISABLE_SPEEDY !== "false" && $.SC_DISABLE_SPEEDY : $.NODE_ENV !== "production"), Ha = /invalid hook call/i, ax = /* @__PURE__ */ new Set(), bu = function(x, i) {
  if ($.NODE_ENV !== "production") {
    var t = i ? ' with the id of "'.concat(i, '"') : "", e = "The component ".concat(x).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var a = [], s = 8402 * -1 + 92 * -86 + -16315 * -1; s < arguments.length; s++) a[s - (23 * -331 + 34 * -52 + -4691 * -2)] = arguments[s];
        Ha.test(r) ? (o = !1, ax.delete(e)) : n.apply(void (3557 + 3557 * -1), D0([r], a, !1));
      }, Ge(), o && !ax.has(e) && (console.warn(e), ax.add(e));
    } catch (r) {
      Ha.test(r.message) && ax.delete(e);
    } finally {
      console.error = n;
    }
  }
}, Wi = Object.freeze([]), X0 = Object.freeze({});
function Au(x, i, t) {
  return void (-1082 + -6115 * 1 + -7197 * -1) === t && (t = X0), x.theme !== t.theme && x.theme || i || t.theme;
}
var po = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), yu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, vu = /(^-|-$)/g;
function Ra(x) {
  return x.replace(yu, "-").replace(vu, "");
}
var Wu = /(a)(d)/gi, sx = -8784 + -56 * -111 + -262 * -10, Ka = function(x) {
  return String.fromCharCode(x + (x > 25 ? 39 : -1 * -4649 + -3 * -1149 + -7999));
};
function mo(x) {
  var i, t = "";
  for (i = Math.abs(x); i > sx; i = i / sx | 7671 * -1 + 164 * -9 + 9147 * 1) t = Ka(i % sx) + t;
  return (Ka(i % sx) + t).replace(Wu, "$1-$2");
}
var _i, gc = 3 * 185 + -10120 + 14946, i0 = function(x, i) {
  for (var t = i.length; t; ) x = (8886 + -3824 * -2 + -16501) * x ^ i.charCodeAt(--t);
  return x;
}, dc = function(x) {
  return i0(gc, x);
};
function wu(x) {
  return mo(dc(x) >>> 8490 + 2 * -4245);
}
function uc(x) {
  return $.NODE_ENV !== "production" && typeof x == "string" && x || x.displayName || x.name || "Component";
}
function ji(x) {
  return typeof x == "string" && ($.NODE_ENV === "production" || x.charAt(1 * 1291 + -5320 + 4029) === x.charAt(0).toLowerCase());
}
var xt = {};
xt.childContextTypes = !0, xt.contextType = !0, xt.contextTypes = !0, xt.defaultProps = !0, xt.displayName = !0, xt.getDefaultProps = !0, xt.getDerivedStateFromError = !0, xt.getDerivedStateFromProps = !0, xt.mixins = !0, xt.propTypes = !0, xt.type = !0;
var Yt = {};
Yt.name = !0, Yt.length = !0, Yt.prototype = !0, Yt.caller = !0, Yt.callee = !0, Yt.arguments = !0, Yt.arity = !0;
var t0 = {};
t0.$$typeof = !0, t0.compare = !0, t0.defaultProps = !0, t0.displayName = !0, t0.propTypes = !0, t0.type = !0;
var R0 = {};
R0.$$typeof = !0, R0.render = !0, R0.defaultProps = !0, R0.displayName = !0, R0.propTypes = !0;
var lc = typeof Symbol == "function" && Symbol.for, Ic = lc ? Symbol.for("react.memo") : -156 * 257 + -55949 * 1 + -1014 * -154, Su = lc ? Symbol.for("react.forward_ref") : -43704 + 91 * -257 + -389 * -327, Bu = xt, Gu = Yt, fc = t0, ku = ((_i = {})[Su] = R0, _i[Ic] = fc, _i);
function Pa(x) {
  return ("type" in (i = x) && i.type.$$typeof) === Ic ? fc : "$$typeof" in x ? ku[x.$$typeof] : Bu;
  var i;
}
var Ou = Object.defineProperty, Zu = Object.getOwnPropertyNames, Ta = Object.getOwnPropertySymbols, Hu = Object.getOwnPropertyDescriptor, Ru = Object.getPrototypeOf, Va = Object.prototype;
function Cc(x, i, t) {
  if (typeof i != "string") {
    if (Va) {
      var e = Ru(i);
      e && e !== Va && Cc(x, e, t);
    }
    var n = Zu(i);
    Ta && (n = n.concat(Ta(i)));
    for (var o = Pa(x), r = Pa(i), a = 9846 + 1 * -7066 + -2780; a < n.length; ++a) {
      var s = n[a];
      if (!(s in Gu || t && t[s] || r && s in r || o && s in o)) {
        var c = Hu(i, s);
        try {
          Ou(x, s, c);
        } catch {
        }
      }
    }
  }
  return x;
}
function _0(x) {
  return typeof x == "function";
}
function hr(x) {
  return typeof x == "object" && "styledComponentId" in x;
}
function r0(x, i) {
  return x && i ? "".concat(x, " ").concat(i) : x || i || "";
}
function Ea(x, i) {
  if (-4810 + 39 * -179 + 1 * 11791 === x.length) return "";
  for (var t = x[9364 + -151 * -56 + -17820], e = 4625 + -1 * -8006 + -12630; e < x.length; e++) t += x[e];
  return t;
}
function j0(x) {
  return x !== null && typeof x == "object" && x.constructor.name === Object.name && !("props" in x && x.$$typeof);
}
function bo(x, i, t) {
  if (void (8610 + -72 * 99 + -1482) === t && (t = !1), !t && !j0(x) && !Array.isArray(x)) return i;
  if (Array.isArray(i))
    for (var e = -3969 + 2 * 2994 + 3 * -673; e < i.length; e++) x[e] = bo(x[e], i[e]);
  else if (j0(i))
    for (var e in i) x[e] = bo(x[e], i[e]);
  return x;
}
function pr(x, i) {
  var t = {};
  t.value = i, Object.defineProperty(x, "toString", t);
}
var he = {};
he[1] = `Cannot create styled-component for component: %s.

`, he[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, he[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, he[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, he[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, he[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, he[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', he[8] = `ThemeProvider: Please make your "theme" prop an object.

`, he[9] = "Missing document `<head>`\n\n", he[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, he[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, he[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", he[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, he[14] = `ThemeProvider: "theme" prop is required.

`, he[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", he[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, he[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, he[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var Ku = $.NODE_ENV !== "production" ? he : {};
function Pu() {
  for (var x = [], i = 1 * -4947 + -7411 + 12358; i < arguments.length; i++) x[i] = arguments[i];
  for (var t = x[2 * -4281 + 25 * -2 + 8612], e = [], n = -1 * -6917 + -9508 + 324 * 8, o = x.length; n < o; n += 3338 + -3337 * 1) e.push(x[n]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function z0(x) {
  for (var i = [], t = -1 * 9590 + -6871 * -1 + 2720; t < arguments.length; t++) i[t - (-3324 + 665 * 5)] = arguments[t];
  return $.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(x, " for more information.").concat(i.length > 3842 + -2 * 1921 ? " Args: ".concat(i.join(", ")) : "")) : new Error(Pu.apply(void 0, D0([Ku[x]], i, !1)).trim());
}
var Tu = function() {
  function x(i) {
    this.groupSizes = new Uint32Array(-4146 + 1 * 9986 + -48 * 111), this.length = 1 * -7288 + 149 * -11 + 9439 * 1, this.tag = i;
  }
  return x.prototype.indexOfGroup = function(i) {
    for (var t = -2963 * -2 + 6353 + -12279, e = 0; e < i; e++) t += this.groupSizes[e];
    return t;
  }, x.prototype.insertRules = function(i, t) {
    if (i >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, o = n; i >= o; ) if ((o <<= 1) < 10 * -533 + 54 * 99 + 8 * -2) throw z0(-11918 + 234 * 51, "".concat(i));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = n; r < o; r++) this.groupSizes[r] = 197 * -11 + 242 * 7 + 473;
    }
    for (var a = this.indexOfGroup(i + (4208 + 2 * 3067 + -10341)), s = (r = 0, t.length); r < s; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[i]++, a++);
  }, x.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var t = this.groupSizes[i], e = this.indexOfGroup(i), n = e + t;
      this.groupSizes[i] = 1028 * 9 + -1 * -5763 + -15015;
      for (var o = e; o < n; o++) this.tag.deleteRule(e);
    }
  }, x.prototype.getGroup = function(i) {
    var t = "";
    if (i >= this.length || -9925 + 12 * -469 + 151 * 103 === this.groupSizes[i]) return t;
    for (var e = this.groupSizes[i], n = this.indexOfGroup(i), o = n + e, r = n; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(fr);
    return t;
  }, x;
}(), Vu = -3907 * 1 + -3707 + 7615 << -2 * -4382 + -1 * 2217 + 49 * -133, Sx = /* @__PURE__ */ new Map(), Lx = /* @__PURE__ */ new Map(), Bx = 1, cx = function(x) {
  if (Sx.has(x)) return Sx.get(x);
  for (; Lx.has(Bx); ) Bx++;
  var i = Bx++;
  if ($.NODE_ENV !== "production" && ((376 + 1598 * 3 + -5170 | i) < -3090 + -2298 * 1 + 6 * 898 || i > Vu)) throw z0(-395 * 3 + 2021 + -820, "".concat(i));
  return Sx.set(x, i), Lx.set(i, x), i;
}, Eu = function(x, i) {
  Bx = i + (-6 * 299 + -3373 + 68 * 76), Sx.set(x, i), Lx.set(i, x);
}, Lu = "style[".concat(C0, "][").concat(cc, '="').concat(vi, '"]'), Nu = new RegExp("^".concat(C0, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Du = function(x, i, t) {
  for (var e, n = t.split(","), o = 0, r = n.length; o < r; o++) (e = n[o]) && x.registerName(i, e);
}, Fu = function(x, i) {
  for (var t, e = ((t = i.textContent) !== null && t !== void 0 ? t : "").split(fr), n = [], o = 9529 + 35 * -220 + -59 * 31, r = e.length; o < r; o++) {
    var a = e[o].trim();
    if (a) {
      var s = a.match(Nu);
      if (s) {
        var c = 0 | parseInt(s[1], 10), d = s[2];
        1961 + 6833 * 1 + -8794 !== c && (Eu(d, c), Du(x, d, s[-3158 + 3161 * 1]), x.getTag().insertRules(c, n)), n.length = -5903 + -1 * 2465 + 8368;
      } else n.push(a);
    }
  }
};
function Yu() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var hc = function(x) {
  var i = document.head, t = x || i, e = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(C0, "]")));
    return s[s.length - (-1266 + 1267 * 1)];
  }(t), o = void (-1 * -4592 + -3752 + -840) !== n ? n.nextSibling : null;
  e.setAttribute(C0, sc), e.setAttribute(cc, vi);
  var r = Yu();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, Mu = function() {
  function x(i) {
    this.element = hc(i), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = 43 * 162 + -1536 + -905 * 6, o = e.length; n < o; n++) {
        var r = e[n];
        if (r.ownerNode === t) return r;
      }
      throw z0(6191 * -1 + 3091 + 3117);
    }(this.element), this.length = 2455 + -433 * -1 + 2 * -1444;
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
}(), Xu = function() {
  function x(i) {
    this.element = hc(i), this.nodes = this.element.childNodes, this.length = -370 * -5 + -1 * 5953 + 4103;
  }
  return x.prototype.insertRule = function(i, t) {
    if (i <= this.length && i >= -1 * 2311 + 1 * -2309 + 7 * 660) {
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
    this.rules = [], this.length = 0;
  }
  return x.prototype.insertRule = function(i, t) {
    return i <= this.length && (this.rules.splice(i, -5 * 1304 + -1951 + 197 * 43, t), this.length++, !0);
  }, x.prototype.deleteRule = function(i) {
    this.rules.splice(i, -2066 + 3 * 2901 + -1 * 6636), this.length--;
  }, x.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, x;
}(), La = Cr, ju = { isServer: !Cr, useCSSOMInjection: !mu }, pc = function() {
  function x(i, t, e) {
    void (-2 * -577 + -7183 + 6029) === i && (i = X0), void (-1388 * -7 + 6076 + -15792) === t && (t = {});
    var n = this;
    this.options = Xe(Xe({}, ju), i), this.gs = t, this.names = new Map(e), this.server = !!i.isServer, !this.server && Cr && La && (La = !1, function(o) {
      for (var r = document.querySelectorAll(Lu), a = -2 * -2379 + 58 * 137 + -6352 * 2, s = r.length; a < s; a++) {
        var c = r[a];
        c && c.getAttribute(C0) !== sc && (Fu(o, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), pr(this, function() {
      return function(o) {
        for (var r = o.getTag(), a = r.length, s = "", c = function(g) {
          var C = function(l) {
            return Lx.get(l);
          }(g);
          if (void (-1 * -7661 + 3869 + -5 * 2306) === C) return "continue";
          var u = o.names.get(C), h = r.getGroup(g);
          if (void (1425 + -3859 * -2 + -9143) === u || 5649 + -1 * -8247 + -13896 === h.length) return "continue";
          var m = "".concat(C0, ".g").concat(g, '[id="').concat(C, '"]'), A = "";
          void (101 + -3052 * -2 + -6205) !== u && u.forEach(function(l) {
            l.length > 7363 + -44 * -185 + -15503 && (A += "".concat(l, ","));
          }), s += "".concat(h).concat(m, '{content:"').concat(A, '"}').concat(fr);
        }, d = 1 * -8233 + -1 * 7237 + -7735 * -2; d < a; d++) c(d);
        return s;
      }(n);
    });
  }
  return x.registerId = function(i) {
    return cx(i);
  }, x.prototype.reconstructWithOptions = function(i, t) {
    return void (-2 * -1174 + -9213 + 6865) === t && (t = !0), new x(Xe(Xe({}, this.options), i), this.gs, t && this.names || void (-1 * -7918 + 5428 + 6673 * -2));
  }, x.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || -3517 + 4321 * -1 + 7838) + (2 * -2571 + -1307 + 6450);
  }, x.prototype.getTag = function() {
    return this.tag || (this.tag = (i = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new _u(n) : e ? new Mu(n) : new Xu(n);
    }(this.options), new Tu(i)));
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
    this.tag = void (7760 + 3967 * -1 + -3793);
  }, x;
}(), Ju = /&/g, Uu = /^\s*\/\/.*$/gm;
function mc(x, i) {
  return x.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(i, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(i, " ")), t.props = t.props.map(function(e) {
      return "".concat(i, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = mc(t.children, i)), t;
  });
}
function bc(x) {
  var i, t, e, n = x === void 0 ? X0 : x, o = n.options, r = void (-346 + -2 * 2563 + 5472) === o ? X0 : o, a = n.plugins, s = void (3 * 1114 + 9071 + -12413) === a ? Wi : a, c = function(C, u, h) {
    return h.startsWith(t) && h.endsWith(t) && h.replaceAll(t, "").length > -3419 + 51 * 191 + -6322 ? ".".concat(i) : C;
  }, d = s.slice();
  d.push(function(C) {
    C.type === mi && C.value.includes("&") && (C.props[1617 + 469 * 20 + -10997] = C.props[9769 + 9769 * -1].replace(Ju, t).replace(e, c));
  }), r.prefix && d.push(hu), d.push(Iu);
  var g = function(C, u, h, m) {
    void (9993 + 1 * -662 + -1333 * 7) === u && (u = ""), h === void 0 && (h = ""), void (4979 * -1 + 89 * -67 + 1 * 10942) === m && (m = "&"), i = m, t = u, e = new RegExp("\\".concat(t, "\\b"), "g");
    var A = C.replace(Uu, ""), l = uu(h || u ? "".concat(h, " ").concat(u, " { ").concat(A, " }") : A);
    r.namespace && (l = mc(l, r.namespace));
    var W = [];
    return Ex(l, fu(d.concat(Cu(function(H) {
      return W.push(H);
    })))), W;
  };
  return g.hash = s.length ? s.reduce(function(C, u) {
    return u.name || z0(3 * -2963 + 8521 + 383 * 1), i0(C, u.name);
  }, gc).toString() : "", g;
}
var Qu = new pc(), Ao = bc(), mr = f0.createContext({ shouldForwardProp: void (-1 * 3469 + 2217 + 1252), styleSheet: Qu, stylis: Ao });
mr.Consumer;
var zu = f0.createContext(void (-3 * 1207 + 156 * 21 + 345));
function yo() {
  return m0(mr);
}
function qu(x) {
  var i = Le(x.stylisPlugins), t = i[-49 * 13 + 2 * -655 + 1 * 1947], e = i[1], n = yo().styleSheet, o = ze(function() {
    var d = n, g = {};
    return g.useCSSOMInjection = !1, x.sheet ? d = x.sheet : x.target && (d = d.reconstructWithOptions({ target: x.target }, !1)), x.disableCSSOMInjection && (d = d.reconstructWithOptions(g)), d;
  }, [x.disableCSSOMInjection, x.sheet, x.target, n]), r = ze(function() {
    var d = {};
    d.namespace = x.namespace, d.prefix = x.enableVendorPrefixes;
    var g = {};
    return g.options = d, g.plugins = t, bc(g);
  }, [x.enableVendorPrefixes, x.namespace, t]);
  ae(function() {
    $d(t, x.stylisPlugins) || e(x.stylisPlugins);
  }, [x.stylisPlugins]);
  var a = ze(function() {
    var d = {};
    return d.shouldForwardProp = x.shouldForwardProp, d.styleSheet = o, d.stylis = r, d;
  }, [x.shouldForwardProp, o, r]), s = {};
  s.value = a;
  var c = {};
  return c.value = r, f0.createElement(mr.Provider, s, f0.createElement(zu.Provider, c, x.children));
}
var Na = function() {
  function x(i, t) {
    var e = this;
    this.inject = function(n, o) {
      void (-369 * 27 + 3032 + 6931 * 1) === o && (o = Ao);
      var r = e.name + o.hash;
      n.hasNameForId(e.id, r) || n.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = t, pr(this, function() {
      throw z0(-7 * 548 + -13 * 27 + 4199 * 1, String(e.name));
    });
  }
  return x.prototype.getName = function(i) {
    return void (-13102 + -1 * -13102) === i && (i = Ao), this.name + i.hash;
  }, x;
}(), $u = function(x) {
  return x >= "A" && x <= "Z";
};
function Da(x) {
  for (var i = "", t = -1 * -5116 + 701 * -13 + 571 * 7; t < x.length; t++) {
    var e = x[t];
    if (-7740 * 1 + 718 + 7023 === t && e === "-" && x[5879 * 1 + 8678 * 1 + -14557] === "-") return x;
    $u(e) ? i += "-" + e.toLowerCase() : i += e;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var Ac = function(x) {
  return x == null || x === !1 || x === "";
}, yc = function(x) {
  var i, t, e = [];
  for (var n in x) {
    var o = x[n];
    x.hasOwnProperty(n) && !Ac(o) && (Array.isArray(o) && o.isCss || _0(o) ? e.push("".concat(Da(n), ":"), o, ";") : j0(o) ? e.push.apply(e, D0(D0(["".concat(n, " {")], yc(o), !1), ["}"], !1)) : e.push("".concat(Da(n), ": ").concat((i = n, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -94 * -99 + 2943 + -12249 === t || i in pu || i.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function l0(x, i, t, e) {
  if (Ac(x)) return [];
  if (hr(x)) return [".".concat(x.styledComponentId)];
  if (_0(x)) {
    if (!_0(o = x) || o.prototype && o.prototype.isReactComponent || !i) return [x];
    var n = x(i);
    return $.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof Na || j0(n) || n === null || console.error("".concat(uc(x), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), l0(n, i, t, e);
  }
  var o;
  return x instanceof Na ? t ? (x.inject(t, e), [x.getName(e)]) : [x] : j0(x) ? yc(x) : Array.isArray(x) ? Array.prototype.concat.apply(Wi, x.map(function(r) {
    return l0(r, i, t, e);
  })) : [x.toString()];
}
function el(x) {
  for (var i = 9859 * 1 + -5565 + -4294; i < x.length; i += -2595 + 1333 * -1 + 1 * 3929) {
    var t = x[i];
    if (_0(t) && !hr(t)) return !1;
  }
  return !0;
}
var tl = dc(vi), nl = function() {
  function x(i, t, e) {
    this.rules = i, this.staticRulesId = "", this.isStatic = $.NODE_ENV === "production" && (e === void 0 || e.isStatic) && el(i), this.componentId = t, this.baseHash = i0(tl, t), this.baseStyle = e, pc.registerId(t);
  }
  return x.prototype.generateAndInjectStyles = function(i, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = r0(n, this.staticRulesId);
      else {
        var o = Ea(l0(this.rules, i, t, e)), r = mo(i0(this.baseHash, o) >>> -1 * -9179 + -56 * 139 + 1 * -1395);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        n = r0(n, r), this.staticRulesId = r;
      }
    else {
      for (var s = i0(this.baseHash, e.hash), c = "", d = -2038 * -3 + -11 * 607 + 563; d < this.rules.length; d++) {
        var g = this.rules[d];
        if (typeof g == "string") c += g, $.NODE_ENV !== "production" && (s = i0(s, g));
        else if (g) {
          var C = Ea(l0(g, i, t, e));
          s = i0(s, C + d), c += C;
        }
      }
      if (c) {
        var u = mo(s >>> 0);
        t.hasNameForId(this.componentId, u) || t.insertRules(this.componentId, u, e(c, ".".concat(u), void (6302 + -5037 * -1 + -11339), this.componentId)), n = r0(n, u);
      }
    }
    return n;
  }, x;
}(), vc = f0.createContext(void 0);
vc.Consumer;
var Ji = {}, Fa = /* @__PURE__ */ new Set();
function xl(x, i, t) {
  var e = hr(x), n = x, o = !ji(x), r = i.attrs, a = void (237 + -19 * 343 + 6280) === r ? Wi : r, s = i.componentId, c = void (1291 * -7 + -6427 + 15464) === s ? function(_, j) {
    var Z = typeof _ != "string" ? "sc" : Ra(_);
    Ji[Z] = (Ji[Z] || 0) + 1;
    var z = "".concat(Z, "-").concat(wu(vi + Z + Ji[Z]));
    return j ? "".concat(j, "-").concat(z) : z;
  }(i.displayName, i.parentComponentId) : s, d = i.displayName, g = void (-46 * 31 + -2 * 4524 + 10474) === d ? function(_) {
    return ji(_) ? "styled.".concat(_) : "Styled(".concat(uc(_), ")");
  }(x) : d, C = i.displayName && i.componentId ? "".concat(Ra(i.displayName), "-").concat(i.componentId) : i.componentId || c, u = e && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, h = i.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var m = n.shouldForwardProp;
    if (i.shouldForwardProp) {
      var A = i.shouldForwardProp;
      h = function(_, j) {
        return m(_, j) && A(_, j);
      };
    } else h = m;
  }
  var l = new nl(t, C, e ? n.componentStyle : void (1437 * -6 + 145 + 8477));
  function W(_, j) {
    return function(Z, z, U) {
      var q = Z.attrs, Ne = Z.componentStyle, Re = Z.defaultProps, Vt = Z.foldedComponentIds, Jt = Z.styledComponentId, ke = Z.target, ct = f0.useContext(vc), Jn = yo(), A0 = Z.shouldForwardProp || Jn.shouldForwardProp;
      $.NODE_ENV !== "production" && Vx(Jt);
      var tn = Au(z, ct, Re) || X0, et = function(v0, _e, Ct) {
        var tt = {};
        tt.className = void (1 * -8963 + -7735 + 69 * 242), tt.theme = Ct;
        for (var Ut, ht = Xe(Xe({}, _e), tt), gt = -4 * -1273 + 5102 + -10194; gt < v0.length; gt += -71 + 1 * -8363 + -5 * -1687) {
          var Qt = _0(Ut = v0[gt]) ? Ut(ht) : Ut;
          for (var dt in Qt) ht[dt] = dt === "className" ? r0(ht[dt], Qt[dt]) : dt === "style" ? Xe(Xe({}, ht[dt]), Qt[dt]) : Qt[dt];
        }
        return _e.className && (ht.className = r0(ht.className, _e.className)), ht;
      }(q, z, tn), Bt = et.as || ke, Et = {};
      for (var Ke in et) void (-1 * 4750 + 1 * -7391 + -639 * -19) === et[Ke] || Ke[-202 * 5 + -19 * -42 + 212] === "$" || Ke === "as" || Ke === "theme" && et.theme === tn || (Ke === "forwardedAs" ? Et.as = et.forwardedAs : A0 && !A0(Ke, Bt) || (Et[Ke] = et[Ke], A0 || $.NODE_ENV !== "development" || ld(Ke) || Fa.has(Ke) || !po.has(Bt) || (Fa.add(Ke), console.warn('styled-components: it looks like an unknown prop "'.concat(Ke, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var nn = function(v0, _e) {
        var Ct = yo(), tt = v0.generateAndInjectStyles(_e, Ct.styleSheet, Ct.stylis);
        return $.NODE_ENV !== "production" && Vx(tt), tt;
      }(Ne, et);
      $.NODE_ENV !== "production" && Z.warnTooManyClasses && Z.warnTooManyClasses(nn);
      var y0 = r0(Vt, Jt);
      return nn && (y0 += " " + nn), et.className && (y0 += " " + et.className), Et[ji(Bt) && !po.has(Bt) ? "class" : "className"] = y0, Et.ref = U, Ee(Bt, Et);
    }(H, _, j);
  }
  W.displayName = g;
  var H = f0.forwardRef(W), X = {};
  return X.attrs = !0, X.componentStyle = !0, X.displayName = !0, X.foldedComponentIds = !0, X.shouldForwardProp = !0, X.styledComponentId = !0, X.target = !0, H.attrs = u, H.componentStyle = l, H.displayName = g, H.shouldForwardProp = h, H.foldedComponentIds = e ? r0(n.foldedComponentIds, n.styledComponentId) : "", H.styledComponentId = C, H.target = e ? n.target : x, Object.defineProperty(H, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(_) {
    this._foldedDefaultProps = e ? function(j) {
      for (var Z = [], z = 14851 + -10 * 1485; z < arguments.length; z++) Z[z - 1] = arguments[z];
      for (var U = 34 * 179 + 6344 + -12430, q = Z; U < q.length; U++) bo(j, q[U], !0);
      return j;
    }({}, n.defaultProps, _) : _;
  } }), $.NODE_ENV !== "production" && (bu(g, C), H.warnTooManyClasses = /* @__PURE__ */ function(_, j) {
    var Z = {}, z = !1;
    return function(U) {
      if (!z && (Z[U] = !0, Object.keys(Z).length >= 3339 + 43 * -73)) {
        var q = j ? ' with the id of "'.concat(j, '"') : "";
        console.warn("Over ".concat(-3046 + -25 * -51 + -73 * -27, " classes were generated for component ").concat(_).concat(q, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), z = !0, Z = {};
      }
    };
  }(g, C)), pr(H, function() {
    return ".".concat(H.styledComponentId);
  }), o && Cc(H, x, X), H;
}
function Ya(x, i) {
  for (var t = [x[-7685 * 1 + -9 * 1091 + 17504]], e = 507 * 12 + 8441 * -1 + 2357, n = i.length; e < n; e += 7 * -503 + 7845 + 131 * -33) t.push(i[e], x[e + (149 * -53 + 6005 + -3 * -631)]);
  return t;
}
var Ma = function(x) {
  var i = {};
  return i.isCss = !0, Object.assign(x, i);
};
function il(x) {
  for (var i = [], t = 2 * -2813 + -9289 + -1356 * -11; t < arguments.length; t++) i[t - 1] = arguments[t];
  if (_0(x) || j0(x)) return Ma(l0(Ya(Wi, D0([x], i, !0))));
  var e = x;
  return -30 * 262 + 53 * 173 + -1309 === i.length && -11554 + -5 * -2311 === e.length && typeof e[-541 * -11 + -1879 + 1 * -4072] == "string" ? l0(e) : Ma(l0(Ya(e, i)));
}
function vo(x, i, t) {
  if (void (-1 * 5475 + 2671 + 2804) === t && (t = X0), !i) throw z0(1 * -2627 + -1831 + -1 * -4459, i);
  var e = function(n) {
    for (var o = [], r = 7851 * -1 + 1 * -7377 + 15229; r < arguments.length; r++) o[r - (2345 + -145 * 61 + 6501)] = arguments[r];
    return x(i, t, il.apply(void 0, D0([n], o, !1)));
  };
  return e.attrs = function(n) {
    return vo(x, i, Xe(Xe({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return vo(x, i, Xe(Xe({}, t), n));
  }, e;
}
var Wc = function(x) {
  return vo(xl, x);
}, Xn = Wc;
po.forEach(function(x) {
  Xn[x] = Wc(x);
});
$.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var gx = "__sc-".concat(C0, "__");
$.NODE_ENV !== "production" && $.NODE_ENV !== "test" && typeof window < "u" && (window[gx] || (window[gx] = 1725 + -10 * 487 + 3145), -2353 + 2354 * 1 === window[gx] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[gx] += 5840 + -5 * -710 + -9389);
const ol = Xn.div`
  position: relative;
`, rl = Xn.video`
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
const Gx = {};
Gx.CONTINUE_DETECTION = "continue-detection", Gx.SWITCH_CAMERA = "switch-camera", Gx.TOGGLE_MIRROR = "toggle-mirror";
const Ui = Gx, Wo = {};
Wo.FIRST_FRAME = "first-frame", Wo.FIRST_VALID_FRAME = "first-valid-frame";
const kx = Wo, wc = {};
wc.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const wo = wc;
var Sc = ((x) => (x.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", x.CONTROL = "document-auto-capture:control", x.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", x.DOCUMENT_DETECTION = "document-auto-capture:document-detection", x.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", x.STATE_CHANGED = "document-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", x))(Sc || {}), Pt = ((x) => (x.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", x.CONTROL = "face-auto-capture:control", x.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", x.FACE_DETECTION = "face-auto-capture:face-detection", x.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", x.STATE_CHANGED = "face-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", x))(Pt || {}), al = ((x) => (x.ANIMATION_END = "magnifeye-auto-capture:animation-end", x.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", x))(al || {}), Nx = ((x) => (x.STATUS_CHANGED = "smile-auto-capture:status-changed", x))(Nx || {}), sl = ((x) => (x.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", x.CONTROL = "palm-capture:control", x.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", x.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", x.STATE_CHANGED = "palm-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", x))(sl || {}), cl = ((x) => (x.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", x))(cl || {});
const Bc = {};
Bc.EYE_NOT_PRESENT = "eye_not_present";
const Xa = Bc, Ve = {};
Ve.CANDIDATE_SELECTION = "candidate_selection", Ve.FACE_TOO_CLOSE = "face_too_close", Ve.FACE_TOO_FAR = "face_too_far", Ve.FACE_CENTERING = "face_centering", Ve.FACE_NOT_PRESENT = "face_not_present", Ve.SHARPNESS_TOO_LOW = "sharpness_too_low", Ve.BRIGHTNESS_TOO_LOW = "brightness_too_low", Ve.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Ve.DEVICE_PITCHED = "device_pitched", Ve.LEFT_EYE_NOT_PRESENT = "left_" + Xa.EYE_NOT_PRESENT, Ve.RIGHT_EYE_NOT_PRESENT = "right_" + Xa.EYE_NOT_PRESENT, Ve.MOUTH_NOT_PRESENT = "mouth_not_present", Ve.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", Ve.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const pe = Ve, Fe = {};
Fe.isPresent = pe.FACE_NOT_PRESENT, Fe.isNotPitched = pe.DEVICE_PITCHED, Fe.isNotSmall = pe.FACE_TOO_FAR, Fe.isNotLarge = pe.FACE_TOO_CLOSE, Fe.isNotOutOfBounds = pe.FACE_CENTERING, Fe.isNotDim = pe.BRIGHTNESS_TOO_LOW, Fe.isNotBright = pe.BRIGHTNESS_TOO_HIGH, Fe.isSharp = pe.SHARPNESS_TOO_LOW, Fe.isLeftEyePresent = pe.LEFT_EYE_NOT_PRESENT, Fe.isRightEyePresent = pe.RIGHT_EYE_NOT_PRESENT, Fe.isMouthPresent = pe.MOUTH_NOT_PRESENT, Fe.isMouthScoreNotTooHigh = pe.MOUTH_SCORE_TOO_HIGH, Fe.isMouthScoreNotTooLow = pe.MOUTH_SCORE_TOO_LOW;
const gl = Fe, So = {};
So.FRONT = "user", So.REAR = "environment";
const br = So, Bo = {};
Bo.AUTO_CAPTURE = "AUTO_CAPTURE", Bo.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const Dx = Bo, un = {};
un.LOADING = "LOADING", un.ERROR = "ERROR", un.WAITING = "WAITING", un.RUNNING = "RUNNING";
const vt = un;
({ ...pe });
var dl = ((x) => (x.CLOSEUP = "CLOSEUP", x.DISTANT = "DISTANT", x.MIDDLE = "MIDDLE", x))(dl || {});
({ ...pe });
const Go = {};
Go.NEUTRAL = "NEUTRAL", Go.SMILE = "SMILE";
const bt = Go, Gc = { ...vt };
Gc.DONE = "DONE";
const yt = Gc;
({ ...pe });
const wi = Mn(void 0);
wi.displayName = "AppStateContext";
function q0() {
  const x = m0(wi);
  if (x === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return x;
}
const ul = wi.Provider, ll = q0;
class kc extends ot {
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
    return ((i = this.context) == null ? void 0 : i.appState) === vt.ERROR ? null : this.props.children;
  }
}
V(kc, "contextType", wi);
const Il = Xn.canvas`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, fl = Xn.div`
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
const hl = Ys(
  ({ detectionDetails: x, isImageMirror: i }, t) => Cl() ? (console.log(x), /* @__PURE__ */ O(at, { children: [
    /* @__PURE__ */ O(Il, { ref: t, $isImageMirror: i }),
    /* @__PURE__ */ O(fl, { children: Object.entries(x).map(([e, n]) => /* @__PURE__ */ O("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ O("strong", { children: n })
    ] }, e)) })
  ] })) : null
), Fx = Mn(void 0);
Fx.displayName = "AnalyticsContext";
function Ar() {
  const x = m0(Fx);
  if (x === void 0)
    throw new Error(`${Fx.displayName} must be used within a AnalyticsProvider`);
  return x;
}
(function(x, i) {
  const t = x();
  function e(a, s, c, d, g) {
    return He(a - 216, c);
  }
  function n(a, s, c, d, g) {
    return He(g - 580, a);
  }
  function o(a, s, c, d, g) {
    return He(g - 272, a);
  }
  function r(a, s, c, d, g) {
    return He(a - -475, c);
  }
  for (; ; )
    try {
      if (parseInt(e(655, 640, "z&@V", 656, 662)) / 1 + parseInt(n("]a#3", 1023, 1007, 1007, 1016)) / 2 * (parseInt(n("gOXC", 1034, 1013, 1014, 1022)) / 3) + parseInt(r(-56, -67, "IAk!", -48, -67)) / 4 * (parseInt(e(625, 624, "vDc[", 620, 631)) / 5) + parseInt(o(")hP(", 685, 671, 698, 682)) / 6 * (parseInt(n("KSRx", 1004, 1019, 1028, 1012)) / 7) + parseInt(o("DlVz", 669, 672, 703, 685)) / 8 + -parseInt(r(-35, -24, "myoO", -38, -28)) / 9 + -parseInt(o("Tsfu", 713, 700, 723, 710)) / 10 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Mx, -496703 * -1 + 100938 * 3 + -533053);
function _a(x, i, t, e, n) {
  return He(n - 42, i);
}
function dx(x, i, t, e, n) {
  return He(e - 155, t);
}
function Oc(x, i, t, e, n) {
  return He(n - 536, i);
}
function ja(x, i, t, e, n) {
  return He(x - -992, i);
}
const Yx = Mn(void (-1 * 9253 + -4549 * 1 + 13802));
function He(x, i) {
  const t = Mx();
  return He = function(e, n) {
    e = e - (9361 * -1 + 3 * -2167 + 1 * 16270);
    let o = t[e];
    if (He.JCuYmg === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", h = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          h += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let u = [], h = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          h = (h + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[h], u[h] = m;
        l = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, h = (h + u[l]) % 256, m = u[l], u[l] = u[h], u[h] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[h]) % 256]);
        return A;
      };
      He.dSggcH = d, x = arguments, He.JCuYmg = !0;
    }
    const a = t[10150 + 14 * -725], s = e + a, c = x[s];
    return c ? o = c : (He.Magkew === void 0 && (He.Magkew = !0), o = He.dSggcH(o, n), x[s] = o), o;
  }, He(x, i);
}
function Mx() {
  const x = ["wCoikbyXW63dK8osuWm6", "bfLmr8kOzYdcLXhcJftdSse", "W4NdHSkCWOHH", "rCoqEmkVhSkgrSoGW4FdHSowW7q", "W4CFc3pcILLLW7eFjmkNga", "gvdcL8oBW6fSW7vl", "fCkTWPRcPZjvWQWbWPXWWPNcL8kq", "vbeZemo1", "WOJcV8oxcSk5", "WRZdGgq5W7NcJCkdW7njW7/dIM4", "WRlcIHKpWPq", "BsmFW49Jw8oaWRm", "W6jxvCkqW4tcMva", "W4dcKuxcQSoUd2JcPConW4ldPtK", "CSkazmohW5K", "WQDtWRBcT8odWPXsm2Tdeay", "BJBcJZRdIW", "bmkfkCk8xG", "qCkxzCocW5u", "W53dP8kvtmoLlxRdUCkGW4WdjCkk", "WPJcTSoxWOTR", "C8oDw2y", "C8ktnSklha", "wSkbhCkxxexdSCoTWORdHrKdWQG", "W4nKBIBdRsHK", "FSkUemkcdCoTWORcRaZcI0ex", "rCkHiW", "WRpdQmk/aSkl", "E8osD8owBmkDWQu", "EKe5ymklnun0dCkMrmoHDa", "WR/cLWiwWPy", "WRxcPSo6WO9O", "g8kquCozsWPK", "W6hcUqDzWOtcVJmMW6OgW68", "xSkbemkrwu3dTCouWQddMciwWQO"];
  return Mx = function() {
    return x;
  }, Mx();
}
Yx[dx(558, 563, "gOqn", 567) + dx(581, 562, "@JPc", 579) + "e"] = Oc(961, "@JPc", 977, 959, 971) + dx(575, 569, "*bn&", 581) + dx(587, 580, "4yTu", 580);
function $0() {
  function x(r, a, s, c, d) {
    return ja(r - 210, c);
  }
  function i(r, a, s, c, d) {
    return Oc(r - 399, c, s - 63, c - 96, d - -515);
  }
  const t = m0(Yx);
  function e(r, a, s, c, d) {
    return _a(r - 393, r, s - 405, c - 74, c - 280);
  }
  if (t === void (-7 * -1010 + 4409 + -1 * 11479)) throw new Error(Yx[n(22, 32, 38, 34, "lYKp") + n(19, 28, 10, 28, "myoO") + "e"] + (i(456, 465, 451, "V3(2", 462) + e("#QIz", 767, 735, 753) + i(439, 446, 443, "gOXC", 442) + x(-348, -349, -337, "lYKp") + n(28, 32, 11, 18, "lW1j") + i(455, 437, 442, "r[Yu", 443) + e("r[Yu", 734, 749, 740) + o(1018, 1024, 1016, 1010, "2D]U")));
  function n(r, a, s, c, d) {
    return _a(r - 266, d, s - 265, c - 86, r - -434);
  }
  function o(r, a, s, c, d) {
    return ja(a - 1586, d);
  }
  return t;
}
function we(x, i) {
  const t = Xx();
  return we = function(e, n) {
    e = e - (-2524 * -2 + 5028 + -260 * 37);
    let o = t[e];
    if (we.tAhUjy === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", h = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          h += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let u = [], h = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          h = (h + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[h], u[h] = m;
        l = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, h = (h + u[l]) % 256, m = u[l], u[l] = u[h], u[h] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[h]) % 256]);
        return A;
      };
      we.Tgrpog = d, x = arguments, we.tAhUjy = !0;
    }
    const a = t[95 * 3 + -2875 + 2590], s = e + a, c = x[s];
    return c ? o = c : (we.XWRblJ === void 0 && (we.XWRblJ = !0), o = we.Tgrpog(o, n), x[s] = o), o;
  }, we(x, i);
}
function Xx() {
  const x = ["BmkjWPpcUNK", "q1HsnXxcIx1ZW5O", "mCkbushcN8ktcmkfzZdcMG", "W6GxkGq0D8odoq", "pmoyW5ddRcJcIX9mWOxdOmk6zG", "EbTkW4agmMddLW", "rf1AtexdLwTsW6XRmXq", "bu3cLmofBmoqfwamd3e", "vgpdGCoTpSokcanr", "W4hcLmosWQnkW515a8k7W5ddGr0", "iCkofKRdOM4MWO0", "vM7dGmkDF8kUhXrjWOa/W50", "WQzUACk2WOK4laRdNxJcOSkw", "ratdV8k2WRBcNLOXmSoLWRZdKG", "WQRcOdFcQSk6", "W5vWztTK", "W7fHmgWMWR7dN8oBvG", "WPZcISoaW6RcT8kfWRD4WQNcMqpdGW", "z8olWPfhWRNdVmoNySkrCZ1p", "W6PuWPJdOmkW", "fH8ncWq", "yIxcUcbSsHxcHNamWQLp", "WQtcMu/dM8oLCMtcUConWOqdWO8", "eGZcVfukWQJdOY/cImoQuLe", "v2JdICkwDSkSpHjzWP0tW60", "W4FcN8orea", "omkAjIZcNgyeqa", "c03cL8k+n8o1fuef", "W7FdGX/cU8oM"];
  return Xx = function() {
    return x;
  }, Xx();
}
(function(x, i) {
  const t = x();
  function e(s, c, d, g, C) {
    return we(s - 769, g);
  }
  function n(s, c, d, g, C) {
    return we(s - 13, d);
  }
  function o(s, c, d, g, C) {
    return we(d - 356, g);
  }
  function r(s, c, d, g, C) {
    return we(d - 409, s);
  }
  function a(s, c, d, g, C) {
    return we(d - 931, c);
  }
  for (; ; )
    try {
      if (-parseInt(e(1233, 1243, 1242, "7PLA", 1219)) / 1 + parseInt(e(1252, 1240, 1258, "kWu#", 1239)) / 2 + parseInt(o(815, 809, 814, "F546", 811)) / 3 + -parseInt(o(838, 841, 835, "4nBz", 844)) / 4 * (-parseInt(e(1244, 1240, 1257, "F2DD", 1248)) / 5) + parseInt(o(833, 825, 830, "%7xP", 828)) / 6 * (-parseInt(n(493, 485, "0hn4", 480, 486)) / 7) + parseInt(o(809, 802, 813, "1SZa", 811)) / 8 * (parseInt(a(1399, "3Kjo", 1407, 1419, 1408)) / 9) + parseInt(e(1240, 1243, 1252, "3Kjo", 1248)) / 10 * (-parseInt(r("u3bP", 882, 881, 880, 892)) / 11) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Xx, 278537 + -91 * 1533 + -1 * -290443);
function pl({ licensePath: x, bramble: i, wasmDirectoryPath: t }) {
  const [e, n] = Le(), o = e !== void (-43 * 64 + -31 * 310 + 12362);
  ae(() => {
    async function s() {
      function c(C, u, h, m, A) {
        return we(A - 302, h);
      }
      function d(C, u, h, m, A) {
        return we(m - -3, C);
      }
      function g(C, u, h, m, A) {
        return we(A - 826, C);
      }
      await i[g("87gA", 1286, 1297, 1306, 1292)](t, x), n(i[c(798, 794, "mKiI", 775, 786) + g("QX[y", 1307, 1308, 1294, 1295) + d("15Ew", 443, 453, 453) + "t"]());
    }
    s();
  }, [i, t, x, n]);
  const r = {};
  function a(s, c, d, g, C) {
    return we(C - -161, d);
  }
  return r[a(302, 305, "3Kjo", 306, 300) + a(322, 300, "%7xP", 321, 309)] = e, r[a(296, 287, "a!@z", 291, 299) + "sh"] = o, r;
}
var Zc = ((x) => (x.DOCUMENT = "document-auto-capture:dev", x.FACE = "face-auto-capture:dev", x.PALM = "palm-capture:dev", x))(Zc || {});
const ko = {};
ko.SIMD = "simd", ko.NO_SIMD = "no-simd";
const Ja = ko, Oo = {};
Oo.Lower = "Lower", Oo.Higher = "Higher";
const Zo = Oo, Ox = {};
Ox.VISIBLE = "VISIBLE", Ox.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", Ox.HIDDEN = "HIDDEN";
const _x = Ox;
function jx() {
  var x = ["W4dcHNRdPtm", "WQrJhmkUW5SnW7VdUa", "WOldGmoOWQL+osX8BfvRgspdTW", "kfO+DLiVWO8WWOXOWO0", "W7r4nZv+gmoxW7pdGCkIwmo1kW", "WRVcKHJcQ8ksWQxcGSofqZRcJLGb", "emoacSojWQZcKXddKW", "W44PWROJW4NdQxxdTg96W5aLW4C", "W7ZcSCkyeKu", "W63cKCk8W4ldO8o+FmowtSoVWO7cQq", "kSkvnSkwWP/cTJddPI7cRa", "WPxdNYpcOSotECkOWRWnW4FdRLCz", "W5VdRSoeiHlcUJa", "exVcM8kturNdJSo8", "WPZcJc3cRmoeWQRdOxa+WOJcO8kNmG", "WRVdPmoBWPNdLq", "e3RdI8o2bLJdLCoZWQS4W6vm", "WRWFBsZdTvNdImk6WQddLbOmmq", "W4hcU8kuW4tcLHRdQdeosmoqF2W", "BvJcKgVdPCoRwa", "fdDiW4rCb17dTG", "fSobzSk/W6RdHLlcOIaqWRbNW5BcKq", "WP7cLSo6vM/dNmohh8kFsG", "WPZcJYJcQ8obWQxdQLeTWR/cRSkFmG"];
  return jx = function() {
    return x;
  }, jx();
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return Ye(s - 430, d);
  }
  function e(s, c, d, g, C) {
    return Ye(C - 600, s);
  }
  function n(s, c, d, g, C) {
    return Ye(g - -683, s);
  }
  function o(s, c, d, g, C) {
    return Ye(C - -184, d);
  }
  for (var r = x(); ; )
    try {
      var a = -parseInt(n("yWSB", -236, -242, -244, -245)) / 1 + parseInt(o(258, 261, "5WEp", 245, 254)) / 2 + -parseInt(t(876, 882, ")k4f", 869, 881)) / 3 * (-parseInt(o(267, 280, "^D4a", 264, 268)) / 4) + -parseInt(e("T]Yf", 1041, 1050, 1048, 1050)) / 5 * (-parseInt(t(884, 875, "7^sK", 891, 886)) / 6) + -parseInt(o(276, 268, "fcX1", 260, 272)) / 7 * (-parseInt(n("x3[t", -249, -254, -246, -235)) / 8) + -parseInt(t(887, 878, "Gr92", 875, 886)) / 9 * (parseInt(t(889, 878, "TBy9", 892, 893)) / 10) + -parseInt(o(269, 274, ")pDN", 279, 276)) / 11;
      if (a === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jx, 1256019 + -1 * 276778);
function Ye(x, i) {
  var t = jx();
  return Ye = function(e, n) {
    e = e - (667 * -7 + -8025 + 13131);
    var o = t[e];
    if (Ye.cMsatd === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", h = "", m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (var H = 0, X = u.length; H < X; H++)
          h += "%" + ("00" + u.charCodeAt(H).toString(16)).slice(-2);
        return decodeURIComponent(h);
      }, a = function(g, C) {
        var u = [], h = 0, m, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          h = (h + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[h], u[h] = m;
        l = 0, h = 0;
        for (var W = 0; W < g.length; W++)
          l = (l + 1) % 256, h = (h + u[l]) % 256, m = u[l], u[l] = u[h], u[h] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[h]) % 256]);
        return A;
      };
      Ye.JKfhVm = a, x = arguments, Ye.cMsatd = !0;
    }
    var s = t[-662 * -7 + -8681 + 4047], c = e + s, d = x[c];
    return d ? o = d : (Ye.rGuuXs === void 0 && (Ye.rGuuXs = !0), o = Ye.JKfhVm(o, n), x[c] = o), o;
  }, Ye(x, i);
}
function ml({ crosshatch: x }) {
  function i(e, n, o, r, a) {
    return Ye(e - 368, a);
  }
  function t(e, n, o, r, a) {
    return Ye(o - 636, n);
  }
  return x != null && x[i(826, 820, 828, 838, "IkBR") + "id"] ? Zo[t(1084, "ru*8", 1078) + "r"] : Zo[i(817, 824, 823, 815, "^D4a")];
}
(function(x, i) {
  function t(a, s, c, d, g) {
    return Se(a - 22, d);
  }
  function e(a, s, c, d, g) {
    return Se(a - 244, c);
  }
  function n(a, s, c, d, g) {
    return Se(c - 38, d);
  }
  const o = x();
  function r(a, s, c, d, g) {
    return Se(g - -916, c);
  }
  for (; ; )
    try {
      if (parseInt(e(515, 513, "x(qi", 504, 505)) / 1 + parseInt(t(303, 316, 308, "DxBW", 300)) / 2 * (-parseInt(r(-652, -623, "n*d%", -623, -638)) / 3) + parseInt(e(533, 526, "&jJj", 524, 523)) / 4 + -parseInt(t(319, 305, 317, "afZQ", 322)) / 5 * (-parseInt(n(335, 333, 329, "Jg]4", 322)) / 6) + -parseInt(r(-629, -644, "fz1N", -630, -641)) / 7 + -parseInt(r(-626, -638, "%hW#", -637, -628)) / 8 + parseInt(e(523, 525, "m8Uf", 526, 522)) / 9 === i) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Jx, -37665 * 3 + -1 * -7177 + 477652);
function Jx() {
  const x = ["nmkFxHBdLf1AW5pcSCoBWPddKW", "yv/dOqbtyLGrW7LYhrq/", "CmomaamV", "x1qGiSkgW6JdSSow", "WQxdGSkrWPnIWQXwsCo7kXNdJCoP", "W5RdKqfoWQu", "WRdcSCoGWQTqfmkAx8orW4XxWPW", "WP8EECkNW4P9mmo6kMJcSmobvq", "pmkOWR/dIhy", "zKT7W7iDzxbqucn+WORdLW", "WPnhENBdI8oZW4fmeSkwW7nOmG", "CCkGh03cJd5exLS2W7JcIa", "W7jYW6u", "d2XdW7ZdO8ocrG5kW7u", "W77cVmoBW6pdLmo9W4Oa", "dG4agCkj", "WRVdR8oHW5NdUW", "nCoiWRZcRSobFLdcGaWw", "W5Pgi8oJWPy", "WQhdGSkrWPivW7a7smoMha", "W4dcSCkCW7NdSa", "WORcOdC", "WQ7dVmoZW5NdNq", "W7BdPCkiW74t", "WPvngfhcRvWqAX8jtSoP", "Aq5Nk2S", "W7eWCCkOWRbywSojv8oa", "a8kOWQNdRN4", "W7/cUCkRWOFcImkhWRGSFNzzW5bZ", "W4FdOGLkW5HNtJ9YW5OJWRC", "rHldGszdesPzeNVdHaK"];
  return Jx = function() {
    return x;
  }, Jx();
}
function Se(x, i) {
  const t = Jx();
  return Se = function(e, n) {
    e = e - (7 * 308 + -1 * -4586 + -37 * 175);
    let o = t[e];
    if (Se.wqPVyW === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", h = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          h += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let u = [], h = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          h = (h + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[h], u[h] = m;
        l = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, h = (h + u[l]) % 256, m = u[l], u[l] = u[h], u[h] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[h]) % 256]);
        return A;
      };
      Se.mGzXBa = d, x = arguments, Se.wqPVyW = !0;
    }
    const a = t[-2 * 283 + -6682 + -3624 * -2], s = e + a, c = x[s];
    return c ? o = c : (Se.uhhBdy === void 0 && (Se.uhhBdy = !0), o = Se.mGzXBa(o, n), x[s] = o), o;
  }, Se(x, i);
}
function bl({ children: x, licensePath: i, bramble: t, wasmDirectoryPath: e }) {
  const n = {};
  n[h(-325, -338, -329, "fz1N") + "le"] = t, n[h(-322, -315, -320, "JBMZ") + d("7yn(", 751, 751) + "h"] = i;
  function o(m, A, l, W, H) {
    return Se(m - -512, A);
  }
  n[g(845, "fz1N") + s(-163, -157, -173, "TIS2") + o(-226, "Hu(N") + "th"] = e;
  const { sunfish: r, crosshatch: a } = pl(n);
  function s(m, A, l, W, H) {
    return Se(m - -443, W);
  }
  const c = {};
  c[s(-160, -163, -159, "]2W@") + h(-327, -337, -318, "oRWb")] = a;
  function d(m, A, l, W, H) {
    return Se(l - 481, m);
  }
  function g(m, A, l, W, H) {
    return Se(m - 551, A);
  }
  const C = ze(() => ({ redfin: ml(c), sunfish: r, crosshatch: a, bramble: t }), [r, a, t]), u = {};
  u[g(847, "1$3S")] = C;
  function h(m, A, l, W, H) {
    return Se(m - -594, W);
  }
  return u[d("DxBW", 789, 774) + g(841, "So^H")] = x, O(Yx[s(-169, -168, -183, "Hu(N") + d("nc5v", 762, 749)], u);
}
function it(x, i) {
  var t = Ux();
  return it = function(e, n) {
    e = e - (4442 + -1 * -6750 + -10788);
    var o = t[e];
    if (it.Prpqwo === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", h = "", m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (var H = 0, X = u.length; H < X; H++)
          h += "%" + ("00" + u.charCodeAt(H).toString(16)).slice(-2);
        return decodeURIComponent(h);
      }, a = function(g, C) {
        var u = [], h = 0, m, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          h = (h + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[h], u[h] = m;
        l = 0, h = 0;
        for (var W = 0; W < g.length; W++)
          l = (l + 1) % 256, h = (h + u[l]) % 256, m = u[l], u[l] = u[h], u[h] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[h]) % 256]);
        return A;
      };
      it.Icfoen = a, x = arguments, it.Prpqwo = !0;
    }
    var s = t[-5 * 1666 + 3540 * 2 + 1250], c = e + s, d = x[c];
    return d ? o = d : (it.MWpGar === void 0 && (it.MWpGar = !0), o = it.Icfoen(o, n), x[c] = o), o;
  }, it(x, i);
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return it(C - -677, s);
  }
  var e = x();
  function n(s, c, d, g, C) {
    return it(s - 145, d);
  }
  function o(s, c, d, g, C) {
    return it(C - 776, g);
  }
  function r(s, c, d, g, C) {
    return it(c - 755, s);
  }
  for (; ; )
    try {
      var a = -parseInt(t("xopT", -265, -262, -263, -259)) / 1 * (parseInt(o(1201, 1207, 1206, "1nQ7", 1200)) / 2) + -parseInt(t("6eqO", -262, -251, -259, -255)) / 3 + parseInt(o(1196, 1194, 1202, "!yvQ", 1190)) / 4 * (-parseInt(n(555, 561, "VoWM", 545, 550)) / 5) + parseInt(r("7Ax]", 1160, 1171, 1161, 1167)) / 6 * (-parseInt(o(1188, 1184, 1181, "K[5M", 1184)) / 7) + -parseInt(t("!yvQ", -255, -263, -252, -261)) / 8 * (parseInt(n(554, 545, "x0lK", 558, 557)) / 9) + -parseInt(r("T@L2", 1175, 1175, 1173, 1178)) / 10 * (-parseInt(r("m24F", 1166, 1166, 1158, 1164)) / 11) + parseInt(r("5nk)", 1180, 1188, 1190, 1180)) / 12;
      if (a === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ux, 238235 * 1 + -35303 + 4153 * -17);
function Ux() {
  var x = ["WR7cO8kCW6xcT01ToG", "WQ8MW4xdOeb+cue", "sSocWPpdTmkcn09mW7vXmSooFW", "b8oyW7xdKmkbW47cHmoRW6i", "W4JcRmovW4xdMf7dNq", "WO7dH8k8gHFcPGDzpmo7W5G", "WQpcQCoJW6CuFmkXW69sW6i", "W59lWPtdJqFdVColdYK", "W5DrWRaNW6ZcNhG", "C3hdRsKRW4HGobpcUCoTja", "t8ocWPFdSmkhDIDmW6H2oG", "WQddKvxcNG1qWQFdMmo5jG", "WOxdUr/cOColWRtcKCkbW5xdLJa", "W7FdOtFcVgNcJCk5Emk0W60", "WOBdVXVcPmk3WOZcKmkBW7FdIa", "WQNcJ1xcUxlcUmoJAci", "WQ/dVKmpW73cVZyuW4KFoG", "smk0WQiZuSkyW5tcLgRdR1dcUW", "WOBdHmoAW5hcPmoDW6FcJW", "WOhdGCkjW4hcHmoIW4pcL3W", "WOiuD8krW49fifmBWONcRSo6", "W6hcLmk7W6tdL1ddIL8VEgzK", "aMv0umkBWO3cNs4", "W7FdRYtdImkhWRBdVSofW5hcGNFcH8kT"];
  return Ux = function() {
    return x;
  }, Ux();
}
function Al({ analytics: x, crosshatch: i }) {
  return i !== void (-841 * 6 + -2913 + 7959) && !i.isAnalyticsDisabled ? x : void (138 * 47 + 6917 + -13403);
}
function yl({ analytics: x, appKey: i, redfin: t, crosshatch: e, bramble: n }) {
  const o = {};
  o.analytics = x, o.crosshatch = e;
  const r = Al(o);
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
function vl({
  analytics: x,
  appKey: i,
  children: t
}) {
  const { redfin: e, crosshatch: n, bramble: o } = $0(), r = yl({ analytics: x, redfin: e, appKey: i, crosshatch: n, bramble: o }), a = ze(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ O(Fx.Provider, { value: a, children: t });
}
const Wl = 6395 * 1 + -1 * 2472 + -3923 + 0.4, wl = 688 * -2 + 43 * -226 + -1849 * -6 + 0.16, Sl = 737 + 10 * -94 + 203 + 0.2, Bl = 179 * -50 + 9278 * 1 + -1 * 328 + 0.05, Gl = 0, Ho = {};
Ho.min = -(-2833 * 1 + 4479 + -1645), Ho.max = 1;
const Ua = Ho, Qa = 963 * -8 + -2634 + 10338, kl = 5622 + 5622 * -1 + 0.3, Ol = -1 * 5754 + 7792 + 2038 * -1 + 0.2, Zl = 619 * -2 + -5618 + 6856 + 0.85, Hl = -5074 + 16 * 319, Rl = -541 * 3 + -228 + 930 * 2 + 0.8100000000000005, Zx = {};
Zx.minDuration = 1e3, Zx.maxDuration = 2500, Zx.minFrames = 10;
const Qi = Zx, Ro = {};
Ro.max = 100, Ro.min = 10;
const za = Ro, Kl = 3945 + -4 * 84 + -27 * 107, Pl = 7 * -94 + -6106 + 6964, Tl = 1347 + -1 * 5107 + -3764 * -1, Hc = "AES-CBC", Rc = "RSA-OAEP", Vl = "SHA-256", El = "image/jpeg", Ll = -6329 * -1 + -279 * 7 + -12 * 364, Nl = 409 * -14 + -3186 + -2984 * -3, Dl = "SAM v1.40.4 for idcards", Fl = "dot_embedded_bg.wasm";
let M;
const Rt = new Array(9831 + -11 * -815 + -18668).fill(void 0);
Rt.push(void 0, null, !0, !1);
function Ko(x) {
  return Rt[x];
}
let Wt = 0, ln = null;
function Hx() {
  return (ln === null || ln.byteLength === -5754 + 2 * -4517 + 14788) && (ln = new Uint8Array(M.memory.buffer)), ln;
}
const Rx = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Yl = typeof Rx.encodeInto == "function" ? function(x, i) {
  return Rx.encodeInto(x, i);
} : function(x, i) {
  const t = Rx.encode(x);
  i.set(t);
  const e = {};
  return e.read = x.length, e.written = t.length, e;
};
function vn(x, i, t) {
  if (t === void 0) {
    const a = Rx.encode(x), s = i(a.length, -8 * -933 + -39 * 181 + -101 * 4) >>> 1 * -5752 + -1901 * -1 + -1 * -3851;
    return Hx().subarray(s, s + a.length).set(a), Wt = a.length, s;
  }
  let e = x.length, n = i(e, -2 * 706 + 6554 + -53 * 97) >>> -9850 + 11 * 299 + 1 * 6561;
  const o = Hx();
  let r = 1421 + 6941 * -1 + 5520;
  for (; r < e; r++) {
    const a = x.charCodeAt(r);
    if (a > 1051 * 8 + -9667 + 9 * 154) break;
    o[n + r] = a;
  }
  if (r !== e) {
    r !== 7179 * -1 + -6036 + 13215 && (x = x.slice(r)), n = t(n, e, e = r + x.length * (-74 * -119 + -86 * 82 + -103 * 17), -4328 + -1 * -6662 + -1 * 2333) >>> 5767 + 7223 * -1 + 1456;
    const a = Hx().subarray(n + r, n + e), s = Yl(x, a);
    r += s.written, n = t(n, e, r, -1 * -3595 + 8122 + -11716) >>> -397 * 7 + 2 * 4637 + -6495;
  }
  return Wt = r, n;
}
function Kc(x) {
  return x == null;
}
let In = null;
function mt() {
  return (In === null || In.byteLength === -17341 + -17341 * -1) && (In = new Int32Array(M.memory.buffer)), In;
}
let mn = Rt.length;
function Ml(x) {
  x < 2 * 4075 + 3154 + -11172 || (Rt[x] = mn, mn = x);
}
function Pc(x) {
  const i = Ko(x);
  return Ml(x), i;
}
const Po = {};
Po.ignoreBOM = !0, Po.fatal = !0;
const Tc = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Po) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Tc.decode();
function Qx(x, i) {
  return x = x >>> 1 * 2127 + 8262 + -10389, Tc.decode(Hx().subarray(x, x + i));
}
function To(x) {
  mn === Rt.length && Rt.push(Rt.length + (-4 * -962 + 5731 + -9578));
  const i = mn;
  return mn = Rt[i], Rt[i] = x, i;
}
let fn = null;
function Vc() {
  return (fn === null || fn.byteLength === -916 * 2 + 5844 + -4012) && (fn = new Uint32Array(M.memory.buffer)), fn;
}
function qa(x, i) {
  const t = i(x.length * 4, 4) >>> 0, e = Vc();
  for (let n = -42 * 112 + -3195 + 7899; n < x.length; n++)
    e[t / (195 + 1761 * 3 + -5474) + n] = To(x[n]);
  return Wt = x.length, t;
}
function $a(x, i) {
  x = x >>> 3 * 2811 + -3774 + -4659;
  const t = Vc(), e = t.subarray(x / 4, x / (197 * -37 + 9553 + -2260) + i), n = [];
  for (let o = 202 * 33 + -4403 + -2263 * 1; o < e.length; o++)
    n.push(Pc(e[o]));
  return n;
}
function Xl(x, i) {
  const t = vn(x, M.__wbindgen_malloc, M.__wbindgen_realloc), e = Wt, n = vn(i, M.__wbindgen_malloc, M.__wbindgen_realloc), o = Wt, r = M.is_mobile_supported(t, e, n, o);
  return yr.__wrap(r);
}
const Vo = {};
Vo.register = () => {
}, Vo.unregister = () => {
};
const es = typeof FinalizationRegistry > "u" ? Vo : new FinalizationRegistry((x) => M.__wbg_licensevalidationresult_free(x >>> -7859 + -14 * -379 + -1 * -2553));
class yr {
  static __wrap(i) {
    i = i >>> -9777 + 2 * 237 + 1329 * 7;
    const t = Object.create(yr.prototype);
    return t.__wbg_ptr = i, es.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const i = this.__wbg_ptr;
    return this.__wbg_ptr = 1 * -1749 + -241 * -2 + 1267, es.unregister(this), i;
  }
  free() {
    const i = this.__destroy_into_raw();
    M.__wbg_licensevalidationresult_free(i);
  }
  constructor(i, t, e, n, o) {
    var r = Kc(t) ? 0 : vn(t, M.__wbindgen_malloc, M.__wbindgen_realloc), a = Wt;
    const s = qa(e, M.__wbindgen_malloc), c = Wt, d = qa(n, M.__wbindgen_malloc), g = Wt, C = vn(o, M.__wbindgen_malloc, M.__wbindgen_realloc), u = Wt, h = M.licensevalidationresult_new(i, r, a, s, c, d, g, C, u);
    return this.__wbg_ptr = h >>> 6608 + 1 * 3465 + -1439 * 7, this;
  }
  get is_valid() {
    return M.licensevalidationresult_is_valid(this.__wbg_ptr) !== -6741 + -4813 * -1 + -964 * -2;
  }
  get features_json() {
    try {
      const e = M.__wbindgen_add_to_stack_pointer(-16);
      M.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var i = mt()[e / (3305 * -1 + -3 * 1681 + 8352) + 0], t = mt()[e / (2 * 2917 + 6120 + -11950) + (-181 * -51 + -9519 + 289)];
      let n;
      return i !== -1655 * -5 + -4121 + -4154 && (n = Qx(i, t).slice(), M.__wbindgen_free(i, t * (1 * -5249 + 8 * 482 + 1394), -88 + 475 * -11 + 5314)), n;
    } finally {
      M.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get errors() {
    try {
      const n = M.__wbindgen_add_to_stack_pointer(-16);
      M.licensevalidationresult_errors(n, this.__wbg_ptr);
      var i = mt()[n / (1 * 4183 + 95 * -94 + 4751) + (-1435 * -5 + -8171 * -1 + -15346)], t = mt()[n / (7020 + 4 * 1047 + -11204) + 1], e = $a(i, t).slice();
      return M.__wbindgen_free(i, t * (2612 + 13 * 479 + -8835), -107 + 1 * 4289 + -4178), e;
    } finally {
      M.__wbindgen_add_to_stack_pointer(-3115 + -4351 * 1 + 7482);
    }
  }
  get warnings() {
    try {
      const n = M.__wbindgen_add_to_stack_pointer(-16);
      M.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var i = mt()[n / 4 + (1126 + -2 * -3646 + -6 * 1403)], t = mt()[n / (13 * 337 + -6675 + -766 * -3) + (-88 * 73 + -1878 + 361 * 23)], e = $a(i, t).slice();
      return M.__wbindgen_free(i, t * (3665 + 1444 * 2 + 59 * -111), 12791 + -1 * 12787), e;
    } finally {
      M.__wbindgen_add_to_stack_pointer(515 * -8 + 20 * -172 + -1 * -7576);
    }
  }
  get customer() {
    let i, t;
    try {
      const o = M.__wbindgen_add_to_stack_pointer(-16);
      M.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = mt()[o / 4 + 0], n = mt()[o / 4 + (9520 + 65 * 87 + -15174)];
      return i = e, t = n, Qx(e, n);
    } finally {
      M.__wbindgen_add_to_stack_pointer(4202 + 2 * -2305 + -106 * -4), M.__wbindgen_free(i, t, -2718 + 13 * -543 + 9778);
    }
  }
}
async function _l(x, i) {
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
function jl() {
  const x = {};
  return x.wbg = {}, x.wbg.__wbindgen_string_get = function(i, t) {
    const e = Ko(t), n = typeof e == "string" ? e : void 0;
    var o = Kc(n) ? 6537 * -1 + -5884 + 12421 * 1 : vn(n, M.__wbindgen_malloc, M.__wbindgen_realloc), r = Wt;
    mt()[i / (845 + 2 * 3553 + -7947) + (3643 + 5 * 302 + 14 * -368)] = r, mt()[i / (-3213 + -3217 * -1) + (-9866 + 5263 * 1 + 4603)] = o;
  }, x.wbg.__wbindgen_object_drop_ref = function(i) {
    Pc(i);
  }, x.wbg.__wbindgen_string_new = function(i, t) {
    const e = Qx(i, t);
    return To(e);
  }, x.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return To(/* @__PURE__ */ new Date());
  }, x.wbg.__wbg_getTime_2bc4375165f02d15 = function(i) {
    return Ko(i).getTime();
  }, x.wbg.__wbindgen_throw = function(i, t) {
    throw new Error(Qx(i, t));
  }, x;
}
function Jl(x, i) {
  return M = x.exports, Ec.__wbindgen_wasm_module = i, In = null, fn = null, ln = null, M;
}
async function Ec(x) {
  if (M !== void 0) return M;
  typeof x > "u" && (x = new URL("dot_embedded_bg.wasm", import.meta.url));
  const i = jl();
  (typeof x == "string" || typeof Request == "function" && x instanceof Request || typeof URL == "function" && x instanceof URL) && (x = fetch(x));
  const { instance: t, module: e } = await _l(await x, i);
  return Jl(t, e);
}
function ux(x, i, t, e, n) {
  return ye(n - -483, x);
}
function ye(x, i) {
  const t = zx();
  return ye = function(e, n) {
    e = e - (-4822 * -1 + 8800 + -13513 * 1);
    let o = t[e];
    if (ye.JHViVO === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", h = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          h += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let u = [], h = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          h = (h + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[h], u[h] = m;
        l = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, h = (h + u[l]) % 256, m = u[l], u[l] = u[h], u[h] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[h]) % 256]);
        return A;
      };
      ye.CHIEQw = d, x = arguments, ye.JHViVO = !0;
    }
    const a = t[8915 * -1 + 4215 + 5 * 940], s = e + a, c = x[s];
    return c ? o = c : (ye.aUTtLH === void 0 && (ye.aUTtLH = !0), o = ye.CHIEQw(o, n), x[s] = o), o;
  }, ye(x, i);
}
function ts(x, i, t, e, n) {
  return ye(n - 506, x);
}
function lx(x, i, t, e, n) {
  return ye(e - -736, n);
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return ye(s - -97, g);
  }
  function e(s, c, d, g, C) {
    return ye(s - 173, g);
  }
  function n(s, c, d, g, C) {
    return ye(C - -297, g);
  }
  function o(s, c, d, g, C) {
    return ye(g - -367, d);
  }
  function r(s, c, d, g, C) {
    return ye(s - 997, g);
  }
  const a = x();
  for (; ; )
    try {
      if (-parseInt(e(313, 317, 331, "78OO", 326)) / 1 + -parseInt(t(40, 23, 24, "Txi9", 28)) / 2 * (parseInt(n(-184, -201, -165, "jq@8", -185)) / 3) + -parseInt(o(-241, -217, "O3m&", -245, -238)) / 4 + -parseInt(o(-243, -212, "I)(v", -229, -233)) / 5 + parseInt(e(323, 342, 313, "G%[B", 346)) / 6 + parseInt(t(60, 33, 43, "I)(v", 68)) / 7 * (parseInt(o(-195, -220, "!h![", -221, -233)) / 8) + parseInt(t(52, 64, 54, "XTEb", 74)) / 9 * (parseInt(r(1116, 1135, 1089, "Txi9", 1141)) / 10) === i) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(zx, -1135395 + 7 * 248991);
function Ul(x, i, t, e, n) {
  return ye(t - 809, n);
}
function Ix(x, i, t, e, n) {
  return ye(x - 912, n);
}
var vs;
class Ql {
  constructor() {
    V(this, vs, !1);
  }
  async [(vs = lx(-625, -602, -604, -603, "ha9$") + lx(-618, -606, -644, -627, "nmqm") + Ix(1053, 1071, 1033, 1035, "x*Ng"), ts("QGEx", 633, 612, 637, 638))](i = lx(-626, -596, -618, -616, "!h![")) {
    function t(a, s, c, d, g) {
      return Ix(s - -977, s - 20, c - 176, d - 314, g);
    }
    function e(a, s, c, d, g) {
      return lx(a - 165, s - 325, c - 269, d - 836, s);
    }
    function n(a, s, c, d, g) {
      return Ix(g - -1030, s - 470, c - 284, d - 406, a);
    }
    function o(a, s, c, d, g) {
      return ux(g, s - 347, c - 179, d - 435, d - 299);
    }
    function r(a, s, c, d, g) {
      return ux(a, s - 455, c - 337, d - 99, g - -484);
    }
    try {
      const a = i + "/" + Fl;
      await Ec(a), this[t(71, 87, 114, 80, "K)1T") + t(88, 86, 91, 95, "vDQp") + o(-36, -41, -53, -49, "ONlJ")] = !0;
    } catch {
      this[o(-65, -98, -49, -73, "78OO") + o(0, -28, -22, -26, "(mWM") + o(-72, -63, -47, -59, "2TKO")] = !1, console[n("K)1T", 26, 32, 65, 41)](o(-26, -36, -44, -48, "a(UY") + o(-33, -42, -13, -21, "EU5h") + r("$r3p", -822, -803, -840, -812) + t(58, 56, 66, 53, "EU5h") + n("jcNb", 32, 39, 42, 44) + n("7^S)", -13, -6, -2, -1) + t(80, 83, 71, 97, "78OO") + t(25, 48, 72, 67, "$*5L") + e(229, "TLcn", 186, 214) + r("pnT0", -869, -839, -860, -851) + e(231, "vDQp", 216, 215) + e(250, "XTEb", 232, 234) + e(267, "I[uA", 223, 245) + o(-83, -75, -34, -55, "a(UY") + t(34, 61, 36, 75, "!h![") + o(-14, -51, -59, -41, "K)1T") + e(269, "I)(v", 216, 244) + e(219, "]Uq7", 223, 242) + "n.");
    }
  }
  [Ix(1066, 1077, 1045, 1087, "QsGn") + ts("Zk0b", 683, 670, 646, 667) + ux("7^S)", -374, -340, -383, -366) + "ed"]() {
    function i(e, n, o, r, a) {
      return ux(o, n - 94, o - 355, r - 218, a - 994);
    }
    function t(e, n, o, r, a) {
      return Ul(e - 81, n - 431, e - -116, r - 228, n);
    }
    return this[i(664, 653, "(mWM", 654, 671) + i(648, 643, "Y7E3", 677, 667) + t(803, "(mWM", 817, 795)];
  }
}
function zx() {
  const x = ["k8olWOFdPHVdR3a", "n8ocfanM", "W69Hr8oniW", "W4FdOCo2W4je", "WQ/cPYZcRSkLA8oZbG1lgCoV", "W6FcQCoRCMa", "vSo3WO/dGW", "W77cOCoSDKG", "A2/cPmo5oW", "d8k4jqXb", "W5ldK8oQvmkU", "CCk8nfS0", "W6xcQCoLFMu", "h8osALyd", "qvpcI3ddQSkUBW", "WRJcUH7cLCkc", "WRj9g8kRW6C", "zJmZexG", "ahVdRSotuq", "oJ9VhCoD", "FMHJqI3dOuNcN8o7WOhcOa", "xSk2lSknW5mZrmoXiCo/", "WO/cGmk4zcm", "WPhdHSoUq8kN", "ChxdUSodW7dcNe9HW4KHWQbQbq", "rttdUYBcQmoKarSjCqhcN8kh", "emoiW63cK1tdTsRcVmo3WRxdTIW", "rSkWWOe/wq", "WOdcKCk2zw4", "W6/dPSoUkCkpW7tcSZHwW5SVaa", "WPNdHmoSl3RcRJ7dPmkmW7pdK2y", "W4uAu8ooW7q", "WQhdL0BdK8ognSon", "W4HUEmkRsqJdQwVdOXa", "WPi1j8oV", "lmoAWOL4vG", "W7RcNeXaW6y", "W5BcOCoaDhO", "W4abtSo+W78", "vmkWlCkfWPvNr8ovgSozWPhcNq", "WQZcQINcOmkHy8kFer9TlCoOWQa", "WQlcJH0AWRiHW6NcM3ddQcm0zW", "xCkalqH/ESkEgSktx8obla", "yweOWRDN", "WOnJW4Clva", "tmo5WO/dImkF", "W7ddVhJdTSoI", "yaZdKmkHwG", "WPJcSSkbxrJdSt4", "C8odWQ3dVJRcJqP/jvNcHmkTW7i", "cCohCfqK", "WQNcHbazWRnxWQhcMxddGGW", "ihNdGSoWzSo5WOeBxCkbW4ypW7i", "kdKVhxO", "vSo3WO7dGmo2"];
  return zx = function() {
    return x;
  }, zx();
}
class zi extends Error {
  constructor() {
    super(...arguments);
    V(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function fx(x, i, t, e, n) {
  return ue(x - -431, t);
}
function Dt(x, i, t, e, n) {
  return ue(t - -938, x);
}
function zl(x, i, t, e, n) {
  return ue(t - 488, n);
}
function $t(x, i, t, e, n) {
  return ue(t - 904, i);
}
function ue(x, i) {
  var t = qx();
  return ue = function(e, n) {
    e = e - (1 * 6457 + 163 * -53 + -1285 * -2);
    var o = t[e];
    if (ue.TVskNN === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", h = "", m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (var H = 0, X = u.length; H < X; H++)
          h += "%" + ("00" + u.charCodeAt(H).toString(16)).slice(-2);
        return decodeURIComponent(h);
      }, a = function(g, C) {
        var u = [], h = 0, m, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          h = (h + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[h], u[h] = m;
        l = 0, h = 0;
        for (var W = 0; W < g.length; W++)
          l = (l + 1) % 256, h = (h + u[l]) % 256, m = u[l], u[l] = u[h], u[h] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[h]) % 256]);
        return A;
      };
      ue.OpvHyM = a, x = arguments, ue.TVskNN = !0;
    }
    var s = t[-6927 + 863 * -1 + 7790], c = e + s, d = x[c];
    return d ? o = d : (ue.bMuEbl === void 0 && (ue.bMuEbl = !0), o = ue.OpvHyM(o, n), x[c] = o), o;
  }, ue(x, i);
}
function qi(x, i, t, e, n) {
  return ue(x - 929, i);
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return ue(c - 985, g);
  }
  function e(s, c, d, g, C) {
    return ue(c - -946, C);
  }
  var n = x();
  function o(s, c, d, g, C) {
    return ue(s - -171, C);
  }
  function r(s, c, d, g, C) {
    return ue(C - 325, c);
  }
  for (; ; )
    try {
      var a = -parseInt(e(-518, -541, -509, -516, "xolh")) / 1 * (-parseInt(r(752, "$an%", 787, 756, 758)) / 2) + -parseInt(t(1409, 1414, 1446, "$MIW", 1443)) / 3 * (-parseInt(r(758, "$WR^", 759, 765, 772)) / 4) + -parseInt(r(691, "stgX", 743, 725, 715)) / 5 + -parseInt(r(756, "LtMG", 704, 723, 727)) / 6 * (-parseInt(e(-530, -515, -512, -533, "RsS[")) / 7) + parseInt(o(226, 226, 255, 217, "bgi(")) / 8 + -parseInt(t(1418, 1391, 1376, "$WR^", 1377)) / 9 + -parseInt(o(223, 253, 253, 252, "AQKo")) / 10;
      if (a === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(qx, -2 * -37668 + 186383 + -107210);
var L0, Bn;
class ns {
  constructor(i) {
    ie(this, L0);
    ie(this, Bn);
    function t(a, s, c, d, g) {
      return ue(a - 556, d);
    }
    function e(a, s, c, d, g) {
      return ue(d - 575, s);
    }
    this[t(986, 992, 986, "IY)0") + e(962, "u)&T", 986, 968)] = i;
    function n(a, s, c, d, g) {
      return ue(s - -859, g);
    }
    function o(a, s, c, d, g) {
      return ue(d - -844, g);
    }
    function r(a, s, c, d, g) {
      return ue(a - -877, s);
    }
    try {
      te(this, L0, i[t(997, 967, 1016, "$an%", 1008) + e(999, "I9a&", 1038, 1023, 1007) + n(-448, -463, -452, -432, "M8%u")] && JSON[o(-437, -393, -416, -424, "]ebg")](i[r(-461, "]ebg", -459, -453, -449) + n(-411, -413, -399, -387, "H[hF") + e(967, "N$4P", 1003, 976, 947)])), te(this, Bn, i[r(-427, "MQW2", -452, -453, -445) + o(-426, -417, -441, -419, "LtMG")]);
    } catch (a) {
      console[n(-439, -415, -445, -424, "N$4P")](a);
    }
  }
  get [$t(1284, "8V^F", 1292) + "id"]() {
    function i(e, n, o, r, a) {
      return $t(e - 156, n, e - -1879);
    }
    function t(e, n, o, r, a) {
      return $t(e - 356, n, e - -64);
    }
    return this[t(1276, "#sfl") + t(1240, "stgX")][t(1258, "y479") + i(-558, "uEp0")];
  }
  get [$t(1302, "bYT@", 1308) + "s"]() {
    function i(n, o, r, a, s) {
      return Dt(a, o - 37, n - 1788);
    }
    function t(n, o, r, a, s) {
      return $t(n - 220, o, r - -1316);
    }
    function e(n, o, r, a, s) {
      return $t(n - 240, n, a - -781);
    }
    return this[e("^X](", 539, 578, 555) + t(-2, ")%9l", 9)][i(1249, 1266, 1261, "$WR^") + "s"];
  }
  get [fx(-7, 23, "u)&T") + Dt("M8%u", -495, -523)]() {
    function i(n, o, r, a, s) {
      return Dt(r, o - 29, a - -55);
    }
    function t(n, o, r, a, s) {
      return Dt(n, o - 51, a - 782);
    }
    function e(n, o, r, a, s) {
      return Dt(o, o - 361, a - 380);
    }
    return this[e(-114, "uEp0", -145, -136) + i(-552, -579, "$LWY", -574)][i(-563, -555, "RsS[", -583) + t("8V^F", 264, 305, 282)];
  }
  get [fx(18, -8, "7Fzd") + "b"]() {
    return L(this, L0);
  }
  get [zl(871, 912, 897, 880, "Tnnw") + fx(-40, -67, "Ocgf")]() {
    return L(this, Bn);
  }
  get [qi(1369, "7Fzd") + Dt("vW[1", -573, -546) + qi(1327, "H@xR") + qi(1343, "uHjY")]() {
    var o, r;
    function i(a, s, c, d, g) {
      return $t(a - 232, s, c - -124);
    }
    function t(a, s, c, d, g) {
      return fx(a - 146, s - 253, s);
    }
    function e(a, s, c, d, g) {
      return Dt(g, s - 362, c - 1593);
    }
    function n(a, s, c, d, g) {
      return Dt(c, s - 348, s - 268);
    }
    return !!((r = (o = L(this, L0)) == null ? void 0 : o[e(1061, 1029, 1044, 1071, "I9a&") + e(1093, 1100, 1092, 1064, "uEp0")]) != null && r[e(1069, 1118, 1098, 1083, "AQKo") + t(122, "$an%") + t(150, "$MIW") + t(154, "t)FL") + n(-288, -275, "I9a&") + i(1199, "Ocgf", 1203) + n(-230, -262, "Ocgf") + "d"]);
  }
}
L0 = new WeakMap(), Bn = new WeakMap();
function qx() {
  var x = ["W5XoWRaUWRdcLSoYmmkPladdOCke", "C8k0WP7cJmkWlCorWQBdI8k3W4lcSCop", "bmopbxKwvmovqW", "W6jAcH47", "W746W6dcN2pdRbNcM8oofCkkySkn", "W79Rs1hcTW", "WPXnDHpcG8omyq", "vgmjyYZdQMD7", "vSkyh0WG", "oSooW48eW44", "i8kZEa", "aGeQ", "WQ/cKmk/zLO", "CmkbehLq", "W4HeqsJcMG", "W7vpWQZdJstdJSocC8oPmMKaW4C", "vtD6WQZdTa", "FL7cG8oy", "rZnbW7RcVg7cVmkDv1xcLW", "kSoqWO0bfG", "W7RcK0BcNKZcHt/dNKf6W6a", "WRyCW63cQ38", "FCkDjubu", "WR3dVZ0NxG", "bruptWq", "WQiCW7/cGga", "W4/cUCkbWOKyWOb3WRRdUCouhhuE", "W69KWPe", "WO/dOSkHzd0", "nu3cPCkdda", "e2iOW7hcL17cUSojiSkSkSk0bq", "WQejW7hcHMe", "mmoQWRK", "DSkYWP/cHmk2iSozWPhdU8kaW67cVCoH", "WOSivXVcTa", "WQ3dKGddGW4", "WPBdQmofW5Xj", "zf/cIW", "sCkPW61qwSk1W6u", "W7hcRmoizCoLB8k5", "dI/dGCooW6W", "W4vUWR3cIvWKW7ZdOgbyW5JcLa", "W73cKepcMK7dOYRdRNbTW5RdKW", "W4DmrqJcNq", "W7fGWOhdTtW", "xLFdNZNdLG", "WRHIWQVdId4", "rdLmW7hcUaZdRmksrx7cQ2tdHq", "W6NcLCkgr2tdJmk5", "xqyDWPBdL8oPFI/dTfBcM0G", "pWpdPti", "lCoIWQq", "WPhdNmkwEI0", "pCk/BW", "AI9zkCkj", "xSk+WOdcSmkv", "WOFdMmkfFt0", "W7Ccq3JdSW", "mSkKzc7dSq", "W6TVWOtdNta", "kK3cO8kodq", "eSklW7m", "W7ldM8kvpSkYgSkJDdGVWOpcIq"];
  return qx = function() {
    return x;
  }, qx();
}
function me(x, i) {
  const t = $x();
  return me = function(e, n) {
    e = e - (-1 * 9124 + -2 * -139 + -99 * -94);
    let o = t[e];
    if (me.TvpXnX === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", h = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          h += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let u = [], h = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          h = (h + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[h], u[h] = m;
        l = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, h = (h + u[l]) % 256, m = u[l], u[l] = u[h], u[h] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[h]) % 256]);
        return A;
      };
      me.GIvRAl = d, x = arguments, me.TvpXnX = !0;
    }
    const a = t[-881 * -3 + 8457 + -2220 * 5], s = e + a, c = x[s];
    return c ? o = c : (me.krLqGr === void 0 && (me.krLqGr = !0), o = me.GIvRAl(o, n), x[s] = o), o;
  }, me(x, i);
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return me(c - -874, g);
  }
  function e(s, c, d, g, C) {
    return me(d - -744, g);
  }
  function n(s, c, d, g, C) {
    return me(g - 947, c);
  }
  function o(s, c, d, g, C) {
    return me(s - 335, C);
  }
  function r(s, c, d, g, C) {
    return me(c - 631, C);
  }
  const a = x();
  for (; ; )
    try {
      if (parseInt(r(1364, 1236, 1238, 1237, "Uc8J")) / 1 * (-parseInt(n(1363, "a&Jj", 1378, 1451, 1451)) / 2) + -parseInt(n(1612, "qY1O", 1623, 1592, 1546)) / 3 * (parseInt(e(-207, -104, -239, "0!)o", -131)) / 4) + parseInt(t(-120, -138, -28, "nUzL", -105)) / 5 + parseInt(t(-240, -151, -157, "B6mz", -75)) / 6 + parseInt(t(-373, -363, -354, "XXG&", -458)) / 7 * (parseInt(e(-9, -212, -125, "^vaS", -171)) / 8) + -parseInt(o(820, 931, 941, 689, "7)D5")) / 9 * (-parseInt(r(1124, 1220, 1239, 1256, "IY9l")) / 10) + -parseInt(t(-362, -377, -322, "]Rw&", -466)) / 11 * (parseInt(r(1308, 1188, 1177, 1201, "Uc8J")) / 12) === i) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})($x, 43599 * 9 + 1 * 764031 + -726863);
function Je(x, i, t, e, n) {
  return me(n - 24, t);
}
function Oe(x, i, t, e, n) {
  return me(n - 510, x);
}
function Ue(x, i, t, e, n) {
  return me(t - -335, x);
}
function $x() {
  const x = ["gSofWPKWWQm", "A1aXstS", "EmkdwNf7", "nvbMWOhdMW", "mrHom8kb", "au3cNHe", "WQCqW5hcSW", "W7D3W65Jqq", "WRRdJ8oUgh0", "gtH9vSk/", "W5BdVaykBW", "W6VdLrlcIdC", "AmkQWPjmWPK", "W5ldKWX7W64", "WQqyW4ZcTe0", "W5RcImk4lmkHBCoOpG", "rmkAwG", "t8kPfCoZWRO", "cSo2WRBdSe/dICoKW6HapSkKnG", "tMddKmobWPG", "d8ozWOm7WOC", "W6hdMCoV", "W48BWPddTSo/", "WPSPW77dPW", "W73dHw11qW", "W6VdHGNcLsy", "W7HBDCozWQy", "W7BdKri", "W7GxW4JcMq", "r8kLemo3WQe", "j1W6vdK", "WR7dNmogiSkQWPVcVW", "W7ClW4VcKW", "WOxcJb0ofq", "rNldUXFdJq", "j8krWObpWOK", "WOFdN8k/", "WQGuW5ZcUuK", "sNRdHSoOWQe", "WOxdKCkVdmkD", "rhldUJZdHa", "W6NdM8o9nmkh", "wSoTW5HmWP8", "WO3cGaGtaq", "W7JdQCk0vhHQW7akfCoOmmkoW6O", "W7JdPCombc8oWPGk", "zCk2WPvrWPC", "F8kGwCoBW5G", "uMpdImoD", "qwpdHmoTeW", "sM/dISomga", "jWJdQhFdRq", "iCkdWPecWO0", "WOddNXrGWOK", "W7DVW6D8tq", "t8kqsCogW5O", "fIVcVgpcLCoqW5pcINddVmoJa0i", "W5xcVrKola", "qCk0WQneWOS", "vxZdVtZdIq", "cCocWOmQWRG", "W63dQhLZW5i", "WPFcGLejea", "W4KAWQldKCo0", "WQxdKCkVdmkD", "ySkSWPjGWPu", "lGBdTvW", "FuhcRa", "WQhcOCkoySkU", "WQJcI8oZbay", "umkJW6NcQau", "CbhdNNVdSICQ", "WOdcTmoGaIa", "W4n2W5/dOLldOmkhWOu", "orjpf8kg", "W67cOaRdIZi", "yCo3WPXgda", "m1bKWOtdIW", "W6tdSWychW", "WR/dMmo1cgy", "xgJdLYSA", "WPi3W4VcT1S", "WQpdU8kLoSkL", "WQNdUGTeWOe", "W4f6W7bEtq", "D1/dT8oRjG", "ovlcQ8oIW7W", "zeetuZ0", "WPCPW6VdRt0", "WRKEW5y", "WRZcSa02hW", "W7jrxmobWPO", "WONcGa0deq", "CZbyW7Gg", "w8oSWPjKWPC", "sCkGWP1vxW", "q33dKq", "W6ddNhrXDa", "mefOWPm", "W7LID8ogWRS", "u8kuW6iaBq", "W7BdPxnqW5W", "smkIWOXyra", "W6ldHmoPmmoVlun2WQVdUba9", "W6BdJCodnSkt", "EeNcR8kjDW", "WQq3W5pdHMC", "Fq5tWROn", "sSkVga", "ybLo", "B1aRFJe", "neDYWO/dNa", "WRJcN8kEsmkK", "E8k0W5e", "tMFdHmokfa", "W5ddKX8EW7u", "eexdI8k0", "W7ddHuLV", "wr1MWPSk", "CSoTWOPnWRe", "FcTuW64B", "W6OoWRldIG", "aSoyWOmQWRK", "h1BdKa", "WQmFW5hcQq", "WQ/cUmoTfcS", "BSkJW7FcRXy", "wM/dLJah", "sCkywa", "W6qfWQ/dUIW", "s3hdKCkJ", "baeYWQ7dIW", "dJr9WPbQ", "tgJdQYRdLW", "oavBgCkb", "W68lWRFdVqG", "WQyyW4lcUeG", "W4tcL8o8WORdNa", "nCo0W5yxW47dPcLBWOhdG8oeW4XP", "u3tdHZOB", "CIBdNmoahW", "qmkVgmoIWQy", "WR4xW5xcUfy", "BCkVvSosWPS", "WRhcGSkTB8kL", "WPpdIXKOW6O", "W6ldTxDKW60", "WR/dJ8o0cha", "W7xdMXtdMZS", "FCouW5zqW5b4DCoxWRNcJur4qG", "W67cOaRdHc4", "WRNcISo0fge", "yrvFWQKk", "hK3cMbXo", "ECoJWPfM", "zSkAhCooW7W", "W5nPW7bFvG", "W5xcK8o6WOFdNq", "WQuKW7hcPvG", "WQuMW6VdPt0", "tSkAt8opW5i", "CCkGWP1E", "WQJcG1ddIwtcLmkMoSosW41dDSo0", "jaldQh7dQq", "xCkNW6pcOaO", "umkHW6dcRWW", "o2lcImoUW6W", "t2FdNmoabG", "W5/dJHCOW7q", "W5RdKW01W6m", "BemAqSohnrpcJhLGkvRcVW", "W4yyW53cM1C", "W7/cQ8oblJWRWRq", "WQGYW6dcMKu", "W4mSWPtdTSoF", "CCkIWPrlWPe", "W64/WPldUSof", "cZjW", "nvbKW44", "WRhcNSkSzCkh", "xmkeW4nOW6mzW71nWPraWQa", "CmkIWOPmWPW", "sSk2zConW5O", "W5ddLrS+W6K", "WP3dJmkGdmkx", "WOJcGaCueq", "WQdcTmoGaIa", "CZzyW7WC", "WRddHCoBm2y", "W7NdNLjOtG", "oWfSc27cUCoHWQnLaCkIW6W", "qCkgySo8W5i", "EL7cRmkn", "l3hcLCoZW7y", "ySklvx1X", "lXHB", "mIVdUmowdW", "qKtdLmo3WOi", "W78wW5RdLH4", "WP7dMCk+bW", "s3VdGCoiWPW", "W794W6DEvW", "rX3cQXvPWO3cNCku", "WRRcL8kS", "rmkAwSopW4e", "aGeVWRldIG", "Dmk+W5Htra", "q3tdGSogdG", "vuSpWQldMmoVW7tcUW", "lM0iWQLClgPOlXeDW5FdMa", "WPtdHSk+W5NcJmkhW43dGLe5W4fI", "q8kXWPrkWOO", "WO3cNSoHWORdKq", "W4f3W6ZdJu/dLmkNWRG", "WRhdKmkXB8kJ", "EeC2vcO", "o08pW7PqsCojW4OdW7JcPq", "WOxdGGLwWPS", "WQmgWRtdIY0", "WOxdJmkaamkq", "phhcLCo2W6W", "e17cNHbu", "cJXQWPzS", "CCoSWOTTW7a", "mXbA", "sNRdHSoOW5e", "W63dS1r+W70", "i1bZWR/dHa", "rmoJWOXG", "W7pdLev4rq", "WORdISkJgSka", "mI/dT8o0ma", "W7BdKSoKWOddLW", "W6jlW5baBa", "WOFdKXi", "ymkfrq", "W7tcLSkWDCk5", "WPmZW7ddUW", "ihFcTSoPW6y", "bSoyWPC", "WPe1W7FdU24", "W7JdHG/cIce", "Du/cRmkgCq", "FI1tW64", "W6SbWQ/dNsS", "BSkIWPjgWPa", "sCkWW6ZcRWS", "qmoAWOi", "jxdcRCoHW7y", "uLtdIJyb", "W6pdL8o4", "W6mwW5W", "WOddLSkPr8kF", "zSomWPLLWRu", "CuNcUW", "g8khWPyuWOK", "gKpcJrTQ", "WPBdGG9lWPW", "pvXJWOxdGa", "s8otWOjcrq", "tNtdTtFdHa", "W5KOWPpdISoD", "WRVcISkRC8oeW5JdImomq3NdLIbR", "ECoCWOnjda", "W4FcGmo6WOBdHG", "kWBdQfhdQa", "oSkwWOOmWOa", "W7KyW5RcLr8", "WRdcN8kRrCk6", "i1PY", "qfpdUCkLnhD4", "nvmSWQJdMG", "WOqEWPJcMwm", "WOVdNCkOdCkw", "jw3cNmoV", "B0pcPW", "zSkdqNT3", "W6ZdLGVcVba", "nfTZWOxdVG"];
  return $x = function() {
    return x;
  }, $x();
}
function Ze(x, i, t, e, n) {
  return me(x - 164, i);
}
function Te(x, i, t, e, n) {
  return me(n - -244, e);
}
var Ws, ws, Ss;
class ql {
  constructor(i) {
    V(this, Ss);
    V(this, ws, [Je(505, 510, "7)D5", 505, 628) + Te(268, 197, 300, "IY9l", 303) + "ic", Ue("0!)o", 85, 172) + Te(379, 416, 233, "B6mz", 365) + "ic"]);
    V(this, Ws);
    function t(e, n, o, r, a) {
      return me(e - -295, r);
    }
    this[t(344, 229, 359, "%MH9") + t(316, 323, 192, "kNzk") + "d"] = i;
  }
  async [(Ss = Je(619, 701, "EFf$", 584, 697) + "se", ws = Je(714, 790, "L9c*", 760, 762) + Ze(762, "I3Gj") + Te(272, 330, 95, "d)7k", 230) + Te(576, 574, 570, "lSK)", 446), Ws = Je(686, 673, "a&Jj", 793, 718) + Te(296, 437, 400, "B6mz", 382), Ue("kNzk", 369, 363))](i = Oe("L!jr", 1161, 1323, 1270, 1229), t) {
    function e(c, d, g, C, u) {
      return Te(c - 321, d - 186, g - 311, d, u - 562);
    }
    function n(c, d, g, C, u) {
      return Ue(d, d - 194, c - -572);
    }
    function o(c, d, g, C, u) {
      return Oe(C, d - 34, g - 55, C - 28, u - -1321);
    }
    const r = await this[s(336, 337, 182, "#CUO", 311) + s(217, 55, 173, "7)D5", 162) + a(788, 744, "K%2b", 689)](t);
    await Promise[s(113, 271, 128, "t@CG", 168) + o(-363, -276, -456, "IY9l", -332)]([this[e(989, "lfdv", 836, 899, 926) + s(270, 331, 304, "IP^I", 238) + "d"][n(-212, "mCf$")](i), this[s(9, 149, 39, "]Rw&", 138) + n(-370, "nJo9") + "e"](r)]);
    function a(c, d, g, C, u) {
      return Je(c - 395, d - 327, g, C - 63, c - 29);
    }
    function s(c, d, g, C, u) {
      return Ue(C, d - 281, u - -78);
    }
    this[s(145, 121, 87, "%MH9", 63) + e(981, "t@CG", 1016, 808, 946) + n(-406, "%rE&")]();
  }
  async [Oe("jjFJ", 1092, 1024, 992, 1092) + Oe("^vaS", 1222, 1021, 1216, 1156) + "se"](i) {
    function t(a, s, c, d, g) {
      return Te(a - 497, s - 105, c - 108, s, c - -483);
    }
    function e(a, s, c, d, g) {
      return Ze(a - -203, g);
    }
    function n(a, s, c, d, g) {
      return Ze(g - 522, a);
    }
    function o(a, s, c, d, g) {
      return Ue(s, s - 477, a - 514);
    }
    function r(a, s, c, d, g) {
      return Te(a - 221, s - 324, c - 346, a, g - 423);
    }
    try {
      if (r("[veA", 846, 706, 875, 838) !== r("Y[@k", 788, 803, 797, 816)) {
        const a = await fetch(i);
        if (!a.ok) {
          if (e(611, 718, 731, 629, "H35i") === r("JWr!", 767, 954, 967, 836)) throw new Error(r("K)c7", 857, 792, 625, 762) + r("K%2b", 959, 778, 810, 855) + o(688, "d)7k", 592, 796, 772) + e(474, 579, 450, 562, "mCf$") + "d.");
          if (!this[o(660, "^vaS", 536, 646, 772) + "se"]) throw new _0x562542(n("kNzk", 1273, 1160, 1317, 1253) + e(488, 590, 572, 390, "0!)o") + n("$Glp", 1089, 1073, 1096, 1206) + e(575, 650, 515, 670, "lfdv") + ".");
          if (!this[r("qY1O", 933, 941, 878, 804) + t(-113, "IY9l", -159, -76, -270) + "d"][n("Dm7$", 1290, 1181, 1355, 1229) + e(505, 470, 573, 408, "GM!O") + o(641, "[veA", 693, 690, 553) + "ed"]()) throw new _0x334c8f(t(-63, "Jwq5", 6, -9, -47) + e(683, 589, 656, 821, "nUzL") + r("kNzk", 776, 779, 667, 767) + e(585, 596, 695, 472, "[veA") + ".");
          this[o(714, "Jwq5", 696, 663, 584) + r("K%2b", 842, 716, 917, 848)] = new _0x5a6e5f(_0x362d73(this[t(-72, "XXG&", -1, 50, -22) + "se"], this[n("[veA", 1195, 1290, 1285, 1309) + o(819, "qY1O", 734, 816, 958)]())), this[r("7)D5", 636, 557, 650, 689) + r("t@CG", 897, 816, 991, 909) + "s"](this[e(614, 690, 649, 621, "jjFJ") + t(-72, "qY1O", -167, -251, -61)][r("d)7k", 810, 922, 991, 897) + "s"]), this[r("nUzL", 699, 725, 794, 778) + e(619, 727, 707, 705, "t@CG") + o(721, "H35i", 673, 774, 601)](this[r("Dm7$", 793, 593, 679, 667) + t(-295, "Y[@k", -258, -362, -155)][e(422, 408, 502, 288, "Dm7$") + r("d)7k", 629, 808, 767, 677)]);
        }
        this[e(450, 561, 477, 538, "&KnR") + "se"] = await a[o(801, "[veA", 834, 821, 933)]();
      } else return _0x3d3078;
    } catch (a) {
      if (r("mCf$", 1024, 843, 790, 888) !== r("gGyN", 742, 674, 545, 670)) throw new _0x3296d1(n("%rE&", 1283, 1373, 1412, 1360) + t(-383, "L9c*", -267) + t(58, "jjFJ", -2) + t(-129, "d)7k", -196) + "d.");
      this[e(674, 737, 604, 744, "GM!O") + "se"] = void (18 * -117 + 5 * -1469 + 13 * 727), console[o(695, "]Rw&")](a);
    }
  }
  async [Oe("pG$w", 1053, 1017, 1243, 1145) + Ze(660, "t@CG") + "e"](i) {
    function t(a, s, c, d, g) {
      return Te(a - 385, s - 27, c - 338, a, d - -410);
    }
    function e(a, s, c, d, g) {
      return Te(a - 210, s - 131, c - 223, s, c - 268);
    }
    function n(a, s, c, d, g) {
      return Oe(c, s - 492, c - 360, d - 319, a - -923);
    }
    function o(a, s, c, d, g) {
      return Je(a - 471, s - 366, g, d - 406, s - 629);
    }
    this[r(1426, 1359, 1284, "WIf1") + r(1448, 1398, 1520, "mCf$")] = void (588 * -1 + 6845 * -1 + -1 * -7433);
    function r(a, s, c, d, g) {
      return Je(a - 439, s - 445, d, d - 436, s - 835);
    }
    if (!i)
      if (e(693, "kNzk", 756) === e(867, "kNzk", 740)) {
        _0x456178[t("Jwq5", 0, -44, -57)](r(1627, 1588, 1569, "pi2q") + t("L)fH", 92, 6, -23) + r(1580, 1521, 1594, "Jwq5") + r(1654, 1540, 1495, "XXG&") + t("$Glp", 156, 93, 50)), this[n(293, 386, "a[qv", 228) + "se"] = void (-2104 * 4 + 94 * -19 + -1 * -10202);
        return;
      } else {
        console[o(1239, 1255, 1342, 1385, "tx$N")](n(304, 413, "&Q@M", 312) + r(1317, 1425, 1409, "WIf1") + t("H35i", -51, -104, -100) + o(1095, 1168, 1148, 1256, "Dm7$") + o(1141, 1126, 1013, 1076, "IP^I")), this[t("L!jr", -207, -168, -176) + "se"] = void 0;
        return;
      }
    await this[o(1404, 1364, 1233, 1371, "0!)o") + o(1419, 1291, 1258, 1268, "IY9l") + "se"](i);
  }
  async [Je(646, 666, "qY1O", 641, 761) + Oe("1c$Z", 889, 947, 986, 990) + Ue("4nGl", 59, 188)](i) {
    if (i)
      if (r(314, "jjFJ", 368) !== o(5, "d)7k", -44, -81)) this[a(1144, 1177, 1211, 1284, "&Q@M") + "se"] = void (-6062 * 1 + -636 + 6698), _0x5d7ca4[t(702, 617, "0!)o", 568, 646)](_0x51a2d3);
      else return i;
    function t(s, c, d, g, C) {
      return Te(s - 329, c - 327, d - 499, d, C - 331);
    }
    function e(s, c, d, g, C) {
      return Ze(s - 159, c);
    }
    if ((await fetch(this[t(849, 806, "K)c7", 598, 735) + a(1241, 1119, 1186, 1063, "Dm7$") + t(621, 655, "$Glp", 675, 699) + r(690, "I3Gj", 576)][1 * -7433 + -643 * 15 + 2 * 8539])).ok) return t(606, 658, "kNzk", 742, 742) === r(653, "lfdv", 592) ? this[a(1086, 1189, 1268, 1157, "&Q@M") + t(684, 788, "7)D5", 842, 748) + r(357, "DD32", 479) + a(1133, 1124, 1201, 1098, "a&Jj")][-546 * 2 + -6113 * 1 + 7205] : this[a(1350, 1265, 1378, 1398, "nJo9") + t(681, 606, "pG$w", 640, 608) + a(1206, 1238, 1289, 1228, "L)fH") + a(1118, 1118, 1042, 1046, "Jwq5")][2 * 2423 + -8971 + 4125];
    function o(s, c, d, g, C) {
      return Je(s - 32, c - 40, c, g - 361, g - -791);
    }
    function r(s, c, d, g, C) {
      return Ue(c, c - 132, d - 220);
    }
    function a(s, c, d, g, C) {
      return Ue(C, c - 230, c - 921);
    }
    return this[e(900, "IP^I") + r(531, "IY9l", 399) + a(1049, 1159, 1208, 1256, "IP^I") + o(-127, "IP^I", -156, -95)][2 * -835 + -5753 + 32 * 232];
  }
  [Te(275, 224, 398, "DD32", 330) + Ze(635, "Y[@k") + "s"](i) {
    function t(e, n, o, r, a) {
      return Je(e - 282, n - 79, e, r - 410, a - -158);
    }
    i[t("4nGl", 662, 623, 434, 559) + "ch"]((e) => console[t("IY9l", 418, 420, 401, 360)](e));
  }
  [Ze(705, "L9c*") + Ze(722, "H35i") + Je(675, 443, "K)c7", 523, 543)](i) {
    function t(e, n, o, r, a) {
      return Ze(a - 627, r);
    }
    i[t(1487, 1503, 1500, "JWr!", 1418) + "ch"]((e) => console[t(1415, 1448, 1490, "Dm7$", 1360)](e));
  }
  [Te(574, 410, 598, "mCf$", 459) + Je(581, 707, "kNzk", 634, 604)]() {
    function i(n, o, r, a, s) {
      return Oe(n, o - 355, r - 370, a - 429, s - 338);
    }
    function t(n, o, r, a, s) {
      return Ue(o, o - 125, s - -118);
    }
    function e(n, o, r, a, s) {
      return Oe(a, o - 369, r - 64, a - 257, r - -1405);
    }
    return window[e(-451, -499, -369, "gGyN") + i("&Q@M", 1591, 1597, 1580, 1530)][t(-30, "I3Gj", -96, 98, 31) + t(310, "pi2q", 256, 377, 249)];
  }
  [Ue("&KnR", 141, 241) + Je(498, 682, "$Glp", 600, 617) + Oe("^vaS", 1223, 1347, 1069, 1209)]() {
    function i(r, a, s, c, d) {
      return Ue(r, a - 190, c - 240);
    }
    function t(r, a, s, c, d) {
      return Te(r - 212, a - 313, s - 416, a, s - 1110);
    }
    function e(r, a, s, c, d) {
      return Ze(c - 7, r);
    }
    function n(r, a, s, c, d) {
      return Ue(s, a - 441, d - 381);
    }
    function o(r, a, s, c, d) {
      return Ze(s - -686, a);
    }
    try {
      if (e("IY9l", 954, 863, 827, 950) === n(658, 637, "t@CG", 500, 574)) return;
      if (!this[e("IY9l", 846, 753, 784, 656) + "se"]) {
        if (i("^vaS", 620, 434, 548, 494) !== o(182, "Y[@k", 74, 151, -16)) return _0x51f322[n(420, 546, "a&Jj", 554, 528) + t(1221, "a[qv", 1338, 1322, 1377)][t(1695, "DD32", 1562, 1532, 1693) + t(1635, "nJo9", 1507, 1542, 1576)];
        throw new zi(e("4nGl", 738, 648, 787, 920) + o(251, "[veA", 192, 190, 181) + i("4nGl", 477, 306, 423, 448) + t(1448, "L!jr", 1330, 1192, 1262) + ".");
      }
      if (!this[o(88, "d)7k", 41, 69, -50) + t(1436, "I3Gj", 1390, 1449, 1266) + "d"][i("Dm7$", 400, 560, 448, 408) + e("GM!O", 628, 717, 715, 712) + o(133, "L9c*", 122, 186, -2) + "ed"]())
        if (o(95, "EFf$", 143, 183, 118) === o(21, "I3Gj", 149, 105, 233)) _0x422e85[i("L!jr", 695, 705, 594, 675) + e("K)c7", 570, 607, 661, 574)](_0x2e912b);
        else throw new zi(n(518, 549, "L)fH", 760, 630) + i("L!jr", 389, 442, 492, 417) + t(1490, "%MH9", 1452, 1361, 1480) + i("lfdv", 476, 359, 460, 345) + ".");
      this[i("nUzL", 383, 460, 441, 398) + i("[veA", 715, 573, 593, 644)] = new ns(Xl(this[o(-68, "IP^I", 31, -96, 170) + "se"], this[n(829, 670, "7)D5", 603, 730) + o(108, "4nGl", 206, 178, 284)]())), this[i("JWr!", 389, 409, 457, 434) + e("%MH9", 708, 552, 677, 597) + "s"](this[i("JWr!", 464, 284, 417, 305) + t(1338, "a[qv", 1383, 1353, 1272)][e("GM!O", 834, 950, 872, 823) + "s"]), this[e("DD32", 682, 632, 745, 609) + t(1531, "L9c*", 1566, 1670, 1539) + i("IY9l", 474, 430, 515, 471)](this[i("L!jr", 492, 289, 368, 464) + e("tx$N", 627, 836, 733, 854)][i("0!)o", 548, 718, 636, 543) + e("lSK)", 933, 745, 868, 775)]);
    } catch (r) {
      if (t(1552, "1c$Z", 1530) === t(1382, "pi2q", 1487)) {
        if (r instanceof zi)
          if (e("d)7k", 682, 823, 813) === o(53, "Dm7$", 138)) r[e("DD32", 745, 837, 705)]();
          else {
            _0xc89af6 instanceof _0x43d99b ? _0x2244b9[e("pi2q", 874, 876, 761)]() : _0x1bfa82 instanceof _0x484621 && _0x2e6f85[n(516, 594, "[veA", 680, 548)](_0x270f80);
            const s = {};
            s[n(646, 788, "Uc8J", 625, 724) + o(-26, "Uc8J", 23)] = !1, s[i("K)c7", 528, 521, 613) + "s"] = [], s[n(494, 377, "%MH9", 556, 516) + o(-25, "Uc8J", 73)] = [], s[e("Uc8J", 680, 817, 786) + e("Y[@k", 756, 741, 727) + e("kNzk", 875, 970, 834)] = void (-9433 * -1 + 5636 * -1 + -3797), s[o(6, "nJo9", -35)] = function() {
            }, s[n(791, 576, "GM!O", 760, 700) + t(1459, "nJo9", 1415)] = "", this[t(1467, "Jwq5", 1401) + t(1486, "%MH9", 1406)] = new _0x52af53(s);
          }
        else if (r instanceof Error)
          if (n(434, 425, "$Glp", 465, 538) !== e("EFf$", 753, 854, 771)) {
            _0x330f54 instanceof _0x2c3beb && _0x19e2e2[o(7, "pi2q", -23) + t(1511, "tx$N", 1412)](_0x57a390);
            return;
          } else console[i("zU$w", 544, 593, 541)](r);
        const a = {};
        a[t(1295, "pi2q", 1352) + t(1545, "$Glp", 1536)] = !1, a[e("IP^I", 796, 949, 856) + "s"] = [], a[t(1473, "lfdv", 1499) + e("&KnR", 760, 660, 701)] = [], a[i("1c$Z", 395, 658, 522) + i("IP^I", 506, 448, 427) + t(1483, "nJo9", 1436)] = void (-5556 + 5556 * 1), a[n(662, 665, "tx$N", 673, 652)] = function() {
        }, a[e("%MH9", 654, 659, 791) + n(722, 567, "nUzL", 699, 647)] = "", this[i("IY9l", 513, 541, 430) + t(1679, "]Rw&", 1593)] = new ns(a);
      } else throw new _0x5c0265(o(-176, "tx$N", -56) + t(1252, "tx$N", 1359) + o(201, "1c$Z", 85) + i("kNzk", 522, 557, 615) + ".");
    }
  }
  [Te(382, 430, 344, "pi2q", 385) + Oe("jjFJ", 1105, 1341, 1317, 1231) + Ze(714, "B6mz") + "t"]() {
    function i(e, n, o, r, a) {
      return Oe(o, n - 392, o - 91, r - 203, r - 322);
    }
    function t(e, n, o, r, a) {
      return Oe(r, n - 125, o - 23, r - 232, o - -336);
    }
    return this[i(1480, 1452, "pG$w", 1552) + t(756, 821, 745, "&KnR")];
  }
  [Ze(813, "#CUO") + Ze(725, "B6mz") + Oe("4nGl", 1004, 951, 1194, 1058)]() {
    var r;
    function i(a, s, c, d, g) {
      return Oe(d, s - 166, c - 445, d - 124, a - -548);
    }
    if (!this[n("^vaS", 1472, 1407, 1465) + "se"]) {
      if (i(594, 594, 715, "%MH9") !== i(654, 630, 649, "XXG&")) return;
      _0x193f31[n("WIf1", 1555, 1754, 1689)](_0x57b335);
    }
    function t(a, s, c, d, g) {
      return Ze(g - -847, d);
    }
    function e(a, s, c, d, g) {
      return Oe(a, s - 215, c - 473, d - 77, d - -533);
    }
    function n(a, s, c, d, g) {
      return Ue(a, s - 460, d - 1319);
    }
    function o(a, s, c, d, g) {
      return Ze(c - -409, a);
    }
    try {
      if (e("nUzL", 501, 643, 549, 485) === e("pG$w", 606, 548, 652, 712)) {
        const a = JSON[e("nUzL", 458, 590, 562, 552)](this[i(629, 636, 764, "a&Jj", 721) + "se"]);
        return (r = a == null ? void 0 : a[n("&Q@M", 1753, 1667, 1699, 1774) + o("JWr!", 191, 284, 173, 366)]) == null ? void 0 : r[e("DD32", 712, 551, 611, 705) + o("XXG&", 555, 438, 417, 412)];
      } else _0x2c7094[t(-97, 46, -11, "%rE&", 4)]();
    } catch (a) {
      if (e("Jwq5", 727, 680, 657) === t(-103, -49, -92, "4nGl", -15)) this[e("$Glp", 396, 506, 472) + n("1c$Z", 1718, 1709, 1650) + "d"] = _0x347584;
      else {
        a instanceof Error && (i(430, 438, 413, "kNzk") === n("pi2q", 1449, 1527, 1461) ? xe[t(-107, -106, -135, "K)c7", -105) + n("IP^I", 1445, 1489, 1548)](a) : _0x17ec82[n("pi2q", 1583, 1794, 1718) + "ch"]((s) => _0x4d28d2[o("]Rw&", 442, 334)](s)));
        return;
      }
    }
  }
}
const li = class li extends ql {
  static getInstance() {
    if (!this._instance) {
      const i = new Ql();
      this._instance = new li(i);
    }
    return this._instance;
  }
};
V(li, "_instance");
let Eo = li;
const Lc = 7341 + -1 * 9949 + -326 * -8 + 0.75, $l = -9961 * 1 + -1 * -9377 + 1 * 586, e1 = 600, t1 = 1 * 2717 + -7274 + 49 * 93, n1 = "dot-auto-capture-video", vr = (x, i) => {
  const t = {};
  t.detail = i, document.dispatchEvent(new CustomEvent(x, t));
}, Ii = class Ii {
  constructor() {
    V(this, "lastDetails", {});
    V(this, "delayedTime", 1447 * 2 + 7700 + -5297 * 2);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Ii()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -691 * -1 + 6916 + -1 * 7607;
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
V(Ii, "_instance");
let Wn = Ii;
const _n = Wn.getInstance(), Nc = (x, i, t = e1) => {
  const e = {};
  e.instructionCode = i;
  const n = e;
  _n.dispatchDelayedCustomEventOnChange(x, n, t);
}, x1 = (x, i) => {
  _n.dispatchCustomEventOnChange(x, i);
}, i1 = (x, i) => {
  const t = {};
  t.size = i;
  const e = t;
  _n.dispatchCustomEventOnChange(x, e);
}, o1 = (x, i, t) => {
  const e = i.confidence < t ? void 0 : i, n = {};
  n.detectedObject = e;
  const o = n;
  _n.dispatchCustomEventOnChange(x, o);
}, r1 = (x, { detection: i, fps: t, image: e, invalidValidators: n, isInCandidateSelection: o }) => {
  const r = {};
  r.image = e, r.data = {}, r.data.detection = i, r.data.fps = t, r.data.isInCandidateSelection = o, r.data.invalidValidators = n, r.data.imageResolution = {}, r.data.imageResolution.width = e.width, r.data.imageResolution.height = e.height;
  const a = r;
  _n.dispatchCustomEventOnChange(x, a);
};
function a1(x) {
  const i = {};
  i.instruction = x;
  const t = i;
  vr(wo.REQUEST_CAPTURE, t);
}
const Lo = (x, i) => {
  vr(x, i);
}, s1 = (x, i) => {
  const { cameraResolution: t, shouldCameraMirror: e } = i;
  ae(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, x1(x, n);
  }, [t, e, x]);
}, ei = (x) => x.length < -7129 * -1 + -2949 * 1 + 1393 * -3 ? 0 : x.reduce((t, e) => t + e, 1968 + -321 * -10 + -5178) / x.length, en = (x) => Number.parseFloat(x.toFixed(1 * 428 + -2935 + 2510)), c1 = (x) => {
  const i = x.getContext("2d");
  i && i.clearRect(-2108 + -68 * -31, 35 * -57 + -5945 + 7940, i.canvas.width, i.canvas.height);
}, Si = (x, i) => Math.min(x, i), Dc = ({ height: x, width: i }, t) => {
  const e = Si(i, x) * t, n = (i - e) / (6067 + -2298 * -1 + 8363 * -1), o = (x - e) / (-58 * -163 + 3037 + 4163 * -3), r = {};
  return r.shiftX = n, r.shiftY = o, r.width = e, r.height = e, r;
}, g1 = (x, i) => {
  const { height: t, shiftX: e, shiftY: n, width: o } = Dc(x, i), r = {};
  return r.shiftX = e / x.width, r.shiftY = n / x.height, r.width = o / x.width, r.height = t / x.height, r;
}, d1 = ({ height: x, width: i }) => {
  const t = Si(i, x), e = t / (1 * -2656 + 4189 * -2 + -11037 * -1) * (8538 + -17 * 502);
  if (i > x) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const n = {};
  return n.width = t, n.height = e, n;
}, u1 = (x, i) => {
  const t = Si(i.width, i.height);
  return en(x * t);
}, l1 = ({ height: x, width: i }) => {
  const t = {};
  return t.height = x, t.width = i, Dc(t, Lc);
}, I1 = (x) => g1(x, Lc), f1 = (x, i) => u1(x, i) * $l, C1 = "@innovatrics/dot-common-auto-capture", h1 = "6.2.0", p1 = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, m1 = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, b1 = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, A1 = {
  name: C1,
  private: !0,
  version: h1,
  scripts: p1,
  dependencies: m1,
  devDependencies: b1
}, Fc = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), xs = () => {
  const x = /Android/i.test(navigator.userAgent), i = /Firefox/i.test(navigator.userAgent);
  return x && i;
}, y1 = () => {
  const x = navigator.userAgent.includes("Chrome"), i = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return x && i ? !1 : i;
}, No = (x) => new Promise((i) => {
  setTimeout(i, x);
}), Yc = (x) => JSON.parse(JSON.stringify(x, (i, t) => typeof t == "number" ? en(t) : t)), Mc = () => A1.version, Xc = (x) => new URL(x).hostname.replace("www.", ""), v1 = () => Xc(window.location.href) === "localhost", Cx = (x) => Object.entries(x).map(([i, t]) => encodeURIComponent(i) + "=" + encodeURIComponent(t)).join("&"), W1 = (x, i) => JSON.stringify(x) === JSON.stringify(i) ? i : x;
function w1(x, i) {
  let t;
  return (...e) => {
    const n = () => {
      clearTimeout(t), t = void 0, x(...e);
    };
    t === void (-7 * -647 + 7417 * 1 + -543 * 22) && (t = setTimeout(n, i));
  };
}
const S1 = (x) => x === Sc.CONTROL ? !Fc() : !0, B1 = (x, i) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: o } = q0(), [r, a] = Le(), s = ze(() => {
    const d = o && i && i.isStreaming && i.getCameraSettings().facingMode;
    return d ? r ?? d === "user" : r ?? S1(x);
  }, [i, r, x, o]);
  ae(() => {
    const d = () => {
      t !== vt.LOADING && e(vt.RUNNING);
    }, g = () => {
      a(r === void 0 ? !s : !r);
    }, C = async () => {
      if (i) {
        e(vt.LOADING);
        try {
          await i.switchCamera(), e(vt.RUNNING);
        } catch (h) {
          if (h instanceof Error) {
            n(xe.fromCameraError(h));
            return;
          }
        }
        a(void 0);
      }
    }, u = (h) => {
      var m;
      switch ((m = h.detail) == null ? void 0 : m["instruction"]) {
        case Ui.CONTINUE_DETECTION:
          d();
          break;
        case Ui.TOGGLE_MIRROR:
          g();
          break;
        case Ui.SWITCH_CAMERA:
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
function is(x) {
  return x.getVideoTracks()[11 * -847 + -9725 + 19042];
}
const Kx = {};
Kx.width = 1920, Kx.height = 1080, Kx.facingMode = br.FRONT;
const G1 = Kx;
var lt;
class jc {
  constructor({ defaultVideoConstrains: i = G1, minCameraShorterSide: t = Kl } = {}) {
    V(this, "options");
    V(this, "availableCameraProperties", []);
    ie(this, lt, null);
    const e = {};
    e.defaultVideoConstrains = i, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return L(this, lt);
  }
  get videoTrack() {
    return L(this, lt) ? is(L(this, lt)) : void (8 * 866 + 1 * 1083 + -1 * 8011);
  }
  get isCameraActive() {
    var i;
    return !!((i = L(this, lt)) != null && i.active);
  }
  static async requestPermission() {
    const i = {};
    i.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(i);
    eo(t);
  }
  async open(i = {}) {
    xs() && await No(450), te(this, lt, await navigator.mediaDevices.getUserMedia(i)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const i = await $i();
    if (i.length <= 7421 + 915 * -3 + -187 * 25) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = i.findIndex((a) => a.deviceId === e.deviceId), o = i[n + (425 * 11 + 5088 + 1627 * -6)] ?? i[-4856 + -7768 * 1 + 12624], r = this.getConstraints(t, o);
    this.close(), await this.open(r);
  }
  close() {
    L(this, lt) && (eo(L(this, lt)), te(this, lt, null));
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
    if (i !== br.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (Fc())
      return (await $i()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const i = await $i();
    for (const t of i) {
      xs() && await No(-8805 + -617 * -15);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const o = await navigator.mediaDevices.getUserMedia(n), r = is(o);
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
    e.deviceId = t ? { exact: t.deviceId } : void (-1 * -7741 + 5636 + -13377);
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
lt = new WeakMap();
class k1 {
  constructor(i, t) {
    this.videoHandler = i, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(i = {}) {
    await jc.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(i.facingMode), e = this.cameraHandler.getConstraints(i, t);
    await this.cameraHandler.open(e), y1() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
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
    return e.drawImage(this.videoHandler.videoElement, -195 * -9 + -13 * 118 + -13 * 17, -1 * -5462 + 1229 + -1 * 6691), { image: t, timestamp: Date.now() };
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
class O1 {
  constructor(i) {
    ie(this, Ht);
    te(this, Ht, i);
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
function Z1(x) {
  const i = Ge(null), t = Ge(), { handleError: e, setIsCameraReady: n } = q0(), [o, r] = Le(), a = qe((c) => {
    r((d) => W1(c, d));
  }, []);
  ae(() => ((async () => {
    if (!i.current) {
      e(new xe("Something went wrong during video initialization"));
      return;
    }
    const d = new O1(i.current), g = new jc(), C = new k1(d, g);
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
function H1(x, i) {
  ae(() => {
    if (!x.current) return;
    const t = new ResizeObserver((e) => {
      const [n] = e;
      i1(i, n.contentRect);
    });
    return t.observe(x.current), () => {
      t.disconnect();
    };
  }, [x, i]);
}
const R1 = () => "prod".toLowerCase() === "dev";
class wn extends Array {
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
    this.length === this.size && this.splice(0, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-5407 + -16 * -271 + 1071);
  }
}
const K1 = (x, i, t = El) => new Promise((e) => {
  x.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, i);
}), P1 = async (x) => K1(x, 90), T1 = (x, i) => {
  const t = document.createElement("canvas");
  t.width = i.width, t.height = i.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(x, i.shiftX, i.shiftY, i.width, i.height, 0 + 124 * 46 + -5704, 1 * -12 + -421 * 11 + 4643 * 1, t.width, t.height), t;
}, V1 = (x) => {
  const i = x.getContext("2d");
  if (!i) throw new Error("getImageDataForSam ctx error");
  const { data: t } = i.getImageData(6203 + -1 * -2731 + 2 * -4467, -47 + 3775 * -2 + 71 * 107, x.width, x.height);
  return t;
}, Jc = (x, i, t, e) => {
  const n = x.getContext("2d");
  n && (n.beginPath(), e ? (n.fillStyle = t, n.fillRect(i.topLeft.x, i.topLeft.y, i.width, i.height)) : (n.strokeStyle = t, n.rect(i.topLeft.x, i.topLeft.y, i.width, i.height)), n.stroke());
}, to = (x, i, t) => {
  const { height: e, shiftX: n, shiftY: o, width: r } = i, a = {};
  a.x = n, a.y = o;
  const s = {};
  s.topLeft = a, s.width = r, s.height = e, s.color = t, Jc(x, s, t);
}, bn = (x, i, t, e = 2 * 4154 + 2855 + -11163) => {
  const n = x.getContext("2d");
  n && (n.fillStyle = t, n.fillRect(i.x + e, i.y + e, 10804 + -183 * 59, -9446 + 9453 * 1), n.beginPath());
}, E1 = (x, i) => {
  const { height: t, shiftX: e, shiftY: n, width: o } = i;
  return !(x.x < e || x.x > e + o || x.y < n || x.y > n + t);
}, L1 = (x, i) => Object.values(x).every((t) => E1(t, i));
function ti(x) {
  const { height: i, width: t } = d1(x), e = (x.width - t) / (-2915 + 1 * 4170 + -1253), n = (x.height - i) / (-1103 * -8 + 607 * 13 + -16713), o = {};
  return o.shiftX = e, o.shiftY = n, o.width = t, o.height = i, o;
}
function Uc(x, i, t) {
  const { height: e, width: n } = t, o = Si(x.width, x.height), r = n - o * i * (9813 + -581 * -12 + -16783), a = e - o * i * (-4967 + 4969 * 1), s = (x.width - r) / 2, c = (x.height - a) / (1936 + 8153 * -1 + 6219 * 1), d = {};
  return d.shiftX = s, d.shiftY = c, d.width = r, d.height = a, d;
}
function H0(x, i) {
  const { shiftX: t, shiftY: e } = i, n = {};
  return n.x = x.x + t, n.y = x.y + e, n;
}
function N1(x) {
  return en(Math.abs(x));
}
const D1 = () => {
  const [x, i] = Le(null), t = Ge(new wn(-983 + 988 * 1));
  function e(o) {
    const { z: r } = o.accelerationIncludingGravity || {};
    if (!r) return;
    t.current.pushFixed(N1(r));
    const a = en(ei(t.current)), s = {};
    s.z = a, i(s);
  }
  ae(() => (window.addEventListener("devicemotion", w1(e, Nl), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const n = {};
  return n.acceleration = x, n;
}, Qc = (x, i) => {
  const t = Ge(i);
  ae(() => {
    t.current = i;
  }, [i]), ae(() => {
    const e = (n) => t.current(n);
    return document.addEventListener(x, e), () => {
      document.removeEventListener(x, e);
    };
  }, [x]);
};
var F1 = Symbol.for("preact-signals");
function Wr() {
  if (V0 > -7490 + -903 * -10 + -171 * 9)
    V0--;
  else {
    for (var x, i = !1; void (8474 + -1 * -6828 + -15302) !== An; ) {
      var t = An;
      for (An = void (5266 + -1821 * -5 + -7 * 2053), Do++; void (1 * -2691 + -1234 * 4 + 7627) !== t; ) {
        var e = t.o;
        if (t.o = void (8400 + 2 * -481 + -7438), t.f &= -(414 * 20 + -3457 + -4820), !(8 & t.f) && $c(t)) try {
          t.c();
        } catch (n) {
          !i && (x = n, i = !(-1909 + -1 * 6730 + 8639));
        }
        t = e;
      }
    }
    if (Do = 0, V0--, i) throw x;
  }
}
var re = void (860 + -1 * -5987 + -41 * 167), An = void (-68 * 47 + 1885 + 1 * 1311), V0 = -13 * -508 + -6080 + -524, Do = -16 * 277 + 5987 + -311 * 5, ni = -6690 + 1 * 5893 + 1 * 797;
function zc(x) {
  if (void (-4875 + -5 * -975) !== re) {
    var i = x.n;
    if (void (-9177 + 1803 * 1 + 7374) === i || i.t !== re)
      return i = { i: 0, S: x, p: re.s, n: void (533 * 10 + 266 * -35 + -1990 * -2), t: re, e: void 0, x: void (-45 * -183 + -3226 * 1 + -5009), r: i }, void (4338 + 2 * 4478 + -13294) !== re.s && (re.s.n = i), re.s = i, x.n = i, 757 * -1 + -1986 * -4 + -7155 & re.f && x.S(i), i;
    if (-(7948 * 1 + -2 * -1369 + -10685) === i.i)
      return i.i = -1 * 5347 + 1 * -4712 + -21 * -479, i.n !== void 0 && (i.n.p = i.p, void (-4472 * 1 + -70 * 123 + 211 * 62) !== i.p && (i.p.n = i.n), i.p = re.s, i.n = void (-172 * 12 + 3883 + -17 * 107), re.s.n = i, re.s = i), i;
  }
}
function We(x) {
  this.v = x, this.i = -337 * -29 + 241 * 7 + 15 * -764, this.n = void (-2 * -306 + 1 * -8997 + -65 * -129), this.t = void (-1 * 1623 + 217 * -22 + 6397);
}
We.prototype.brand = F1, We.prototype.h = function() {
  return !(-6212 * 1 + -1805 * -4 + -1008);
}, We.prototype.S = function(x) {
  this.t !== x && void (57 * 151 + -1 * 5353 + -3254) === x.e && (x.x = this.t, void (-3 * 2339 + 269 * -25 + 13742) !== this.t && (this.t.e = x), this.t = x);
}, We.prototype.U = function(x) {
  if (void (2779 + -1 * 2779) !== this.t) {
    var i = x.e, t = x.x;
    void (2 * 578 + -33 * 257 + 7325) !== i && (i.x = t, x.e = void (-6205 + 1 * 6205)), void (-6019 + 38 * 18 + 5335) !== t && (t.e = i, x.x = void (-241 * -13 + 5 * -1933 + -6532 * -1)), x === this.t && (this.t = t);
  }
}, We.prototype.subscribe = function(x) {
  var i = this;
  return Sr(function() {
    var t = i.value, e = re;
    re = void (-2504 + -3029 * -1 + 175 * -3);
    try {
      x(t);
    } finally {
      re = e;
    }
  });
}, We.prototype.valueOf = function() {
  return this.value;
}, We.prototype.toString = function() {
  return this.value + "";
}, We.prototype.toJSON = function() {
  return this.value;
}, We.prototype.peek = function() {
  var x = re;
  re = void 0;
  try {
    return this.value;
  } finally {
    re = x;
  }
}, Object.defineProperty(We.prototype, "value", { get: function() {
  var x = zc(this);
  return void (-1983 + -213 * -37 + -1 * 5898) !== x && (x.i = this.i), this.v;
}, set: function(x) {
  if (x !== this.v) {
    if (Do > 5554 * -1 + -3744 + 1 * 9398) throw new Error("Cycle detected");
    this.v = x, this.i++, ni++, V0++;
    try {
      for (var i = this.t; void (-14 * -403 + 1467 + -1 * 7109) !== i; i = i.x) i.t.N();
    } finally {
      Wr();
    }
  }
} });
function qc(x) {
  return new We(x);
}
function $c(x) {
  for (var i = x.s; void (-123 * 7 + 5241 + 292 * -15) !== i; i = i.n) if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return !(2 * 1 + -7966 + 4 * 1991);
  return !(-4214 + 1 * 4215);
}
function eg(x) {
  for (var i = x.s; void (-6060 + 2050 * -1 + 10 * 811) !== i; i = i.n) {
    var t = i.S.n;
    if (void (-7311 + 9206 * -1 + 16517) !== t && (i.r = t), i.S.n = i, i.i = -1, void (-3 * 2999 + -7971 + 16968) === i.n) {
      x.s = i;
      break;
    }
  }
}
function tg(x) {
  for (var i = x.s, t = void (845 + -3 * 2699 + 7252); void (-5803 + 251 * -3 + 6556) !== i; ) {
    var e = i.p;
    -(5156 + 18 * 49 + -6037) === i.i ? (i.S.U(i), void (-9291 + 21 * 353 + 1878 * 1) !== e && (e.n = i.n), void (4559 * 2 + -1061 + 1151 * -7) !== i.n && (i.n.p = e)) : t = i, i.S.n = i.r, void (5655 + -1 * -1055 + 2 * -3355) !== i.r && (i.r = void (-67 * -140 + 2273 * -1 + -309 * 23)), i = e;
  }
  x.s = t;
}
function K0(x) {
  We.call(this, void 0), this.x = x, this.s = void (93 * 81 + -3341 + -4192), this.g = ni - (-7232 + 1 * 7233), this.f = 4;
}
(K0.prototype = new We()).h = function() {
  if (this.f &= -(19 * 22 + -219 * -9 + -2386), -80 * -28 + 1 * 8207 + -10446 & this.f) return !1;
  if (3394 * 1 + -2 * -3062 + -9486 == (-4465 + 9351 * 1 + 970 * -5 & this.f)) return !(2724 + 3117 * -2 + -15 * -234);
  if (this.f &= -(-7054 * -1 + -41 + 4 * -1752), this.g === ni) return !0;
  if (this.g = ni, this.f |= -1009 + -2 * -505, this.i > 1114 * -4 + -7994 + 12450 && !$c(this)) return this.f &= -(-1 * -874 + 8743 * 1 + -9615), !(-16 * 345 + 473 + 5047);
  var x = re;
  try {
    eg(this), re = this;
    var i = this.x();
    (9798 + -25 * 398 + 3 * 56 & this.f || this.v !== i || 7549 + 1 * -7549 === this.i) && (this.v = i, this.f &= -(-403 + 5 * 84), this.i++);
  } catch (t) {
    this.v = t, this.f |= -6 * -403 + -3 * 1774 + 2920, this.i++;
  }
  return re = x, tg(this), this.f &= -(-5115 + -6 * -1660 + -29 * 167), !(8223 + 7 * 277 + -10162);
}, K0.prototype.S = function(x) {
  if (void (2222 + 1994 * 1 + -527 * 8) === this.t) {
    this.f |= 2795 + 1 * 787 + -3546;
    for (var i = this.s; void (-630 * -3 + 6361 + 37 * -223) !== i; i = i.n) i.S.S(i);
  }
  We.prototype.S.call(this, x);
}, K0.prototype.U = function(x) {
  if (void (2658 * 3 + 11 * 335 + 131 * -89) !== this.t && (We.prototype.U.call(this, x), void (-1 * -6233 + -315 + -5918) === this.t)) {
    this.f &= -(2716 + 2683 * -1);
    for (var i = this.s; void (-6 * -633 + 5500 + -2 * 4649) !== i; i = i.n) i.S.U(i);
  }
}, K0.prototype.N = function() {
  if (!(4313 + -3 * 1437 & this.f)) {
    this.f |= 967 * -3 + 542 * 11 + -235 * 13;
    for (var x = this.t; void (5 * -103 + 6734 + -6219) !== x; x = x.x) x.t.N();
  }
}, Object.defineProperty(K0.prototype, "value", { get: function() {
  if (-4742 * 2 + 2 * -281 + 1 * 10047 & this.f) throw new Error("Cycle detected");
  var x = zc(this);
  if (this.h(), void (-198 + -1 * -1918 + 5 * -344) !== x && (x.i = this.i), -142 * 40 + -3 * 79 + 17 * 349 & this.f) throw this.v;
  return this.v;
} });
function Y1(x) {
  return new K0(x);
}
function ng(x) {
  var i = x.u;
  if (x.u = void (-76 * 128 + -2515 + 12243), typeof i == "function") {
    V0++;
    var t = re;
    re = void (7 * 343 + -7223 + 2411 * 2);
    try {
      i();
    } catch (e) {
      throw x.f &= -(1134 + -2 * -1517 + -4166), x.f |= -4995 * 2 + -8 * 382 + 13054, wr(x), e;
    } finally {
      re = t, Wr();
    }
  }
}
function wr(x) {
  for (var i = x.s; void (219 * 6 + -173 * 17 + 1627 * 1) !== i; i = i.n) i.S.U(i);
  x.x = void (-6 * 59 + -6646 + -175 * -40), x.s = void (1569 + 2654 * -1 + -155 * -7), ng(x);
}
function M1(x) {
  if (re !== this) throw new Error("Out-of-order effect");
  tg(this), re = x, this.f &= -2, 2677 * -1 + -547 * 15 + 10890 & this.f && wr(this), Wr();
}
function Cn(x) {
  this.x = x, this.u = void (1 * -9340 + 2350 + -233 * -30), this.s = void 0, this.o = void (9634 + -1 * 9634), this.f = -7 * -440 + 3 * -874 + -1 * 426;
}
Cn.prototype.c = function() {
  var x = this.S();
  try {
    if (4390 + -2 * 2191 & this.f || void (2 * 2734 + 2728 * -1 + 10 * -274) === this.x) return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    x();
  }
}, Cn.prototype.S = function() {
  if (-2038 * 1 + -1 * -241 + 1798 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, ng(this), eg(this), V0++;
  var x = re;
  return re = this, M1.bind(this, x);
}, Cn.prototype.N = function() {
  !(2 & this.f) && (this.f |= 2, this.o = An, An = this);
}, Cn.prototype.d = function() {
  this.f |= 769 * -12 + -3915 + 13151, -9333 + 7 * -617 + 1517 * 9 & this.f || wr(this);
};
function Sr(x) {
  var i = new Cn(x);
  try {
    i.c();
  } catch (t) {
    throw i.d(), t;
  }
  return i.d.bind(i);
}
var no;
function T0(x, i) {
  F[x] = i.bind(null, F[x] || function() {
  });
}
function hx(x) {
  no && no(), no = x && x.S();
}
function xg(x) {
  var i = this, t = x.data, e = E0(t);
  e.value = t;
  var n = ze(function() {
    for (var o = i.__v; o = o.__; ) if (o.__c) {
      o.__c.__$f |= -3306 + -331 * -10;
      break;
    }
    return i.__$u.c = function() {
      var r;
      !Gs(n.peek()) && 5414 + -7419 * 1 + 2008 === ((r = i.base) == null ? void (2344 * -4 + 150 * -17 + 11926) : r.nodeType) ? i.base.data = n.peek() : (i.__$f |= -982 * 7 + -1 * 9543 + -8209 * -2, i.setState({}));
    }, Y1(function() {
      var r = e.value.value;
      return 5233 * 1 + -444 + 1 * -4789 === r ? 1873 * -1 + -1 * 281 + -3 * -718 : r === !0 ? "" : r || "";
    });
  }, []);
  return n.value;
}
xg.displayName = "_st";
var Fo = {};
Fo.configurable = !(-3 * 3257 + -900 + 3557 * 3), Fo.value = void (127 * 67 + 8903 + -4353 * 4);
var Yo = {};
Yo.configurable = !(4474 + -4052 * -1 + -6 * 1421), Yo.value = xg;
var Mo = {};
Mo.configurable = !0, Mo.get = function() {
  var x = {};
  return x.data = this, x;
};
var Xo = {};
Xo.configurable = !(2 * -2471 + -1153 * -1 + 3789), Xo.value = 1;
var cn = {};
cn.constructor = Fo, cn.type = Yo, cn.props = Mo, cn.__b = Xo, Object.defineProperties(We.prototype, cn), T0("__b", function(x, i) {
  if (typeof i.type == "string") {
    var t, e = i.props;
    for (var n in e) if (n !== "children") {
      var o = e[n];
      o instanceof We && (t || (i.__np = t = {}), t[n] = o, e[n] = o.peek());
    }
  }
  x(i);
}), T0("__r", function(x, i) {
  hx();
  var t, e = i.__c;
  e && (e.__$f &= -(-6 * -258 + 1955 + 389 * -9), void (-5431 * 1 + 8 * 857 + -1425) === (t = e.__$u) && (e.__$u = t = function(n) {
    var o;
    return Sr(function() {
      o = this;
    }), o.c = function() {
      e.__$f |= 73 * 18 + -3446 + 2133, e.setState({});
    }, o;
  }())), hx(t), x(i);
}), T0("__e", function(x, i, t, e) {
  hx(), x(i, t, e);
}), T0("diffed", function(x, i) {
  hx();
  var t;
  if (typeof i.type == "string" && (t = i.__e)) {
    var e = i.__np, n = i.props;
    if (e) {
      var o = t.U;
      if (o) for (var r in o) {
        var a = o[r];
        a !== void 0 && !(r in e) && (a.d(), o[r] = void (5914 + -1 * 5914));
      }
      else t.U = o = {};
      for (var s in e) {
        var c = o[s], d = e[s];
        void (1678 + 1 * -3113 + -1 * -1435) === c ? (c = X1(t, s, d, n), o[s] = c) : c.o(d, n);
      }
    }
  }
  x(i);
});
function X1(x, i, t, e) {
  var n = i in x && x.ownerSVGElement === void 0, o = qc(t);
  return { o: function(r, a) {
    o.value = r, e = a;
  }, d: Sr(function() {
    var r = o.value.value;
    e[i] !== r && (e[i] = r, n ? x[i] = r : r ? x.setAttribute(i, r) : x.removeAttribute(i));
  }) };
}
T0("unmount", function(x, i) {
  if (typeof i.type == "string") {
    var t = i.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (907 * 10 + 6588 + -15658 * 1);
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
      a && (r.__$u = void (-1 * 7457 + -1 * 2449 + 26 * 381), a.d());
    }
  }
  x(i);
}), T0("__h", function(x, i, t, e) {
  (e < 1779 * -1 + 5903 * -1 + 7685 || -13 * -643 + -304 * 19 + -2574 === e) && (i.__$f |= -16520 + -2 * -8261), x(i, t, e);
}), ot.prototype.shouldComponentUpdate = function(x, i) {
  var t = this.__$u;
  if (!(t && void (553 * 13 + 5177 + -12366) !== t.s || 4 & this.__$f)) return !(8380 + -5134 * 1 + 3 * -1082);
  if (-1037 + -20 * -52 & this.__$f) return !(-2919 + 3 * 973);
  for (var e in i) return !(-1 * -1041 + 8629 * -1 + 7588);
  for (var n in x) if (n !== "__source" && x[n] !== this.props[n]) return !(14 * 283 + -6163 * 1 + 31 * 71);
  for (var o in this.props) if (!(o in x)) return !(-2309 * -1 + 9124 + 111 * -103);
  return !(-2 * 1070 + -8137 * 1 + 10278);
};
function E0(x) {
  return ze(function() {
    return qc(x);
  }, []);
}
const _1 = async () => WebAssembly.validate(new Uint8Array([-3666 + -1222 * -3, 97, 4757 + -1 * 825 + -3817 * 1, 13885 + 164 * -84, 10 * 415 + 4133 + 202 * -41, 557 + -317 * 29 + 8636, -6 * 1643 + 8663 + 1195 * 1, -3 * -2656 + -5 * 1710 + 97 * 6, 1, -321 * -11 + 8495 + -12021, 8869 + 1 * -8868, 96, -7697 + 1 * 7697, 1 * 5861 + 1 * 1307 + -7167, 612 + 3389 * -1 + 25 * 116, 5848 + 11 * 320 + 1873 * -5, -9344 + 6449 * -1 + 15795, 1 * -6381 + -2 * -1847 + 128 * 21, 0, 1596 + -1 * -9753 + -11339, 4371 + 1 * 8509 + -12870, -1115 * -1 + 9797 + 10911 * -1, -24 * -281 + 5334 + -85 * 142, -2 * -4447 + -2 * 4517 + -140 * -1, 1500 + 7 * -277 + -6 * -84, -11 * 857 + 4708 * -2 + -18843 * -1, -3 * 1291 + 19 * -379 + -241 * -47, -5554 + -85 * 58 + 10499 * 1, 542 * 11 + 1923 * 2 + -49 * 195, -7585 + 25 * 125 + 2 * 2279, -2917 + -7 * -676 + 902 * -2]));
function j1() {
  const [x] = window.crypto.getRandomValues(new Uint32Array(1));
  return x.toString(-214 * -26 + 217 * -9 + -3595 * 1);
}
function J1() {
  const x = sessionStorage.getItem("dot-user-id");
  if (x) return x;
  const i = j1();
  return sessionStorage.setItem("dot-user-id", i), i;
}
function U1(x, i) {
  return i ? i === "user" ? "Front Camera" : "Back Camera" : x;
}
const _o = {};
_o.label = ">1m", _o.time = 60;
const jo = {};
jo.label = ">45", jo.time = 45;
const Jo = {};
Jo.label = ">30", Jo.time = 30;
function Q1(x, i = [_o, jo, Jo]) {
  const t = i.sort((e, n) => n.time - e.time);
  for (const e of t)
    if (x > e.time) return e.label;
  return "" + x;
}
const z1 = (x) => Math.round(x / 500) * 500 / (-257 * 18 + -6869 + 12495), os = (x) => x ? x <= -226 * -1 + 3854 + 1 * -4079 ? Math.round(x * (-6548 * -1 + -3094 + -3434)) / (-7933 * 1 + -433 * -13 + 2324) : Math.round(x / (28 * 2 + 1 * -4788 + -1594 * -3)) * (539 * 6 + 6098 * 1 + 1547 * -6) : -1773 * -1 + -14 * 11 + -1619 * 1, q1 = (x) => Math.round(x * (1108 * 7 + -2736 + 193 * -26)) / (-7257 + 427 * 17);
async function ig() {
  return await _1() ? Ja.SIMD : Ja.NO_SIMD;
}
var Gn, fi;
class og {
  constructor(i) {
    ie(this, Gn, !0);
    ie(this, fi, Date.now());
    V(this, "analytics");
    V(this, "samVersion");
    V(this, "sessionToken");
    V(this, "onDetectionCallback");
    V(this, "onCaptureCallback");
    V(this, "createProtoMessage");
    V(this, "fpsOfAllImages", new wn(8 * 239 + 1 * 5269 + -7151));
    V(this, "cameraService");
    V(this, "imageProcessor");
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
    const e = Date.now(), n = ei(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height, (r = this.analytics) == null || r.trackCaptureProcess({ detection: i, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: n, captureProcessDurationInMs: e - L(this, fi), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await ig() });
  }
  onDetection(i, t) {
    this.onDetectionCallback({ ...i, samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: i, canvasImage: t, detection: e }) {
    const n = {};
    n.width = t.width, n.height = t.height;
    const o = n, r = await P1(t), a = await this.cameraService.getCameraProperties(), s = { ...a, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp() }, c = {};
    c.sessionToken = this.sessionToken, c.web = s;
    const d = c, g = await this.createProtoMessage(r, d), C = {};
    C.detection = e, C.imageResolution = o;
    const u = {};
    u.image = r, u.data = C;
    const h = u;
    this.stop();
    const m = {};
    m.imageData = h, m.protoMessage = g, m.webMetadata = s, m.candidateSelectionImages = i, this.onCaptureCallback(m);
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
    await No(Math.max(za.max - i, za.min));
  }
}
Gn = new WeakMap(), fi = new WeakMap();
class $1 extends og {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, instructionCodeMap: n, ...o }) {
    super(o);
    V(this, "candidateSelectionTime", 6928 + 2 * 809 + -4273 * 2);
    V(this, "candidatesSelectionFramesCount", -3965 + -305 * -13);
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
    var a;
    if (!(((a = this.lastImage) == null ? void 0 : a.isValid) && e.isValid)) return;
    const o = {};
    o.image = t.image, o.detection = e.detection;
    const r = o;
    this.isNewImageBetter(this.lastImage.detection, r.detection) ? this.bestImage = r : this.bestImage = this.lastImage, this.candidateSelectionImages.push(this.lastImage, r), this.isInCandidateSelection = !0;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime === -3 * 1027 + 31 + 3050 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
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
    const n = this.getDetectionEndTime(e.timestamp), o = en((2753 * -1 + 2 * -3824 + 877 * 13) / n);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = e.image.width, r.height = e.image.height;
    const a = r, s = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), c = {};
    c.isNewDetectionValid = t.isValid, c.newInvalidInstruction = s[7919 * -1 + 7490 + 429];
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
class eI extends og {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, ...n }) {
    super(n);
    ie(this, Mt, void (5380 + -2690 * 2));
    ie(this, a0);
    V(this, "fallbackInstruction");
    V(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, n;
    return (e = t.detail) != null && e["instruction"] ? Object.values(kx).includes((n = t.detail) == null ? void 0 : n["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    te(this, a0, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && te(this, Mt, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(wo.REQUEST_CAPTURE, L(this, a0));
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
    return L(this, Mt) ? L(this, Mt) === kx.FIRST_FRAME ? !0 : L(this, Mt) === kx.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
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
    n.canvasImage = t, n.detection = e, n.candidateSelectionImages = [], await this.onCapture(n), te(this, Mt, void 0), this.imageProcessor.reset();
  }
  getDetectionDetails(t, e) {
    const n = this.getDetectionEndTime(t.timestamp), o = en((-7235 + 5826 * 1 + 219 * 11) / n);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = t.image.width, r.height = t.image.height;
    const a = r, s = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), c = this.getInstructionCode(s[-1 * 6186 + 3 * 2641 + -1 * 1737]), d = {};
    d.detection = e.detection, d.instructionCode = c, d.invalidValidators = s, d.isInCandidateSelection = !1;
    const g = {};
    return g.processedImage = d, g.detectionTime = n, g.fps = o, g.resolution = a, g;
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), L(this, a0) && document.removeEventListener(wo.REQUEST_CAPTURE, L(this, a0));
  }
}
Mt = new WeakMap(), a0 = new WeakMap();
function tI({ captureMode: x, ...i }) {
  return x === Dx.AUTO_CAPTURE ? new $1(i) : new eI(i);
}
function nI({ cameraResolution: x, cameraService: i, customEvent: t }) {
  const { shouldCameraMirror: e } = B1(t.CONTROL, i), n = {};
  n.cameraResolution = x, n.shouldCameraMirror = e, s1(t.CAMERA_PROPS_CHANGED, n), ae(() => () => {
    Wn.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = e, o;
}
function xI({ cameraFacing: x, captureMode: i, checkToInstructionCodeMap: t, controller: e, createProtoMessage: n, customEvent: o, fallbackInstruction: r, instructionCodeMap: a, onCapture: s, onDetection: c, sessionToken: d }) {
  const { appState: g, handleAppStateChange: C } = q0(), { sunfish: u } = $0(), { analytics: h } = Ar(), { cameraResolution: m, cameraService: A, onCameraResolutionChange: l, videoRef: W } = Z1(x), H = {};
  H.cameraResolution = m, H.cameraService = A, H.customEvent = o;
  const { shouldCameraMirror: X } = nI(H), _ = E0(void (1 * -4071 + 9511 + -320 * 17)), j = qe((U) => {
    C(vt.WAITING), s(U);
  }, [s, C]), Z = qe((U, q) => {
    l(U.resolution), _.value = U, c(U, q);
  }, [c, _, l]);
  ae(() => {
    A != null && A["isStreaming"] && (e != null && e["isDetectorInitialized"]) && u && C(vt.RUNNING);
  }, [A == null ? void 0 : A["isStreaming"], e == null ? void 0 : e["isDetectorInitialized"], C, u]), ae(() => {
    if (g !== vt.RUNNING) return;
    if (!A || !e) throw new xe("Cannot start detection");
    const U = {};
    U.captureMode = i, U.analytics = h, U.cameraService = A, U.imageProcessor = e.imageProcessor, U.fallbackInstruction = r, U.instructionCodeMap = a, U.checkToInstructionCodeMap = t, U.sessionToken = d, U.samVersion = e.samVersion, U.createProtoMessage = n, U.onCaptureCallback = j, U.onDetectionCallback = Z;
    const q = tI(U);
    return e.runDetectionLoop(q), () => {
      e.stopDetectionLoop();
    };
  }, [g, e, A, j, Z, d, _, h, n, a, t, r, i]);
  const z = {};
  return z.videoRef = W, z.cameraResolution = m, z.detectionDetails = _, z.shouldCameraMirror = X, z;
}
function rg({ callback: x, delay: i, skip: t = !1 }) {
  const [e, n] = Le(!1), o = Ge(x), r = Ge(null);
  ae(() => {
    o.current = x;
  }, [x]);
  const a = qe(() => {
    r.current && (clearTimeout(r.current), r.current = null), n(!1);
  }, []), s = qe(() => {
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
  const i = Ge([]);
  return ae(() => {
    i.current.forEach((t) => t()), i.current = [];
  }, [x]), (t) => {
    i.current.push(t);
  };
}
function iI(x, i) {
  if (!x) return i;
  const { detectionRecord: t, hashedDetectedImages: e } = x;
  i.hashedDetectedImages && (e == null || e.push(...i.hashedDetectedImages)), i.detectionRecord && (t == null || t.push(...i.detectionRecord));
  const n = { ...x };
  return n.hashedDetectedImages = e, n.detectionRecord = t, n;
}
function oI() {
  const x = E0(null);
  function i({ cameraProperties: e }) {
    x.value = iI(x.value, e);
  }
  const t = {};
  return t.cameraProperties = x, t.mergeCameraProperties = i, t;
}
const sg = Mn(null), Br = () => {
  const x = m0(sg);
  if (!x)
    throw new Error("Missing provider for CameraOptionsContext");
  return x;
}, rI = ({
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
    captureMode: i ?? Dx.AUTO_CAPTURE,
    wasmDirectoryPath: r,
    licensePath: t,
    sessionToken: n,
    thresholds: {
      faceConfidence: (o == null ? void 0 : o.faceConfidence) ?? Wl,
      minFaceSizeRatio: (o == null ? void 0 : o.minFaceSizeRatio) ?? wl,
      maxFaceSizeRatio: (o == null ? void 0 : o.maxFaceSizeRatio) ?? Sl,
      sharpnessThreshold: (o == null ? void 0 : o.sharpnessThreshold) ?? kl,
      brightnessLowThreshold: (o == null ? void 0 : o.brightnessLowThreshold) ?? Ol,
      brightnessHighThreshold: (o == null ? void 0 : o.brightnessHighThreshold) ?? Zl,
      outOfBoundsThreshold: (o == null ? void 0 : o.outOfBoundsThreshold) ?? Bl,
      devicePitchAngleThreshold: (o == null ? void 0 : o.devicePitchAngleThreshold) ?? Hl,
      mouth: {
        confidence: ((a = o == null ? void 0 : o.mouth) == null ? void 0 : a.confidence) ?? Gl,
        status: {
          min: ((s = o == null ? void 0 : o.mouth) == null ? void 0 : s.status.min) ?? Ua.min,
          max: ((c = o == null ? void 0 : o.mouth) == null ? void 0 : c.status.max) ?? Ua.max
        }
      },
      leftEye: (o == null ? void 0 : o.leftEye) ?? {
        confidence: Qa
      },
      rightEye: (o == null ? void 0 : o.rightEye) ?? {
        confidence: Qa
      }
    }
  };
}, aI = ({
  cameraOptions: x,
  children: i
}) => {
  const t = ze(() => rI(x), [x]);
  return /* @__PURE__ */ O(sg.Provider, { value: t, children: i });
}, sI = (x, i) => ({ ...x, leftEye: { ...x.leftEye, center: H0(x.leftEye.center, i) }, rightEye: { ...x.rightEye, center: H0(x.rightEye.center, i) }, mouth: { ...x.mouth, center: H0(x.mouth.center, i) }, topLeft: H0(x.topLeft, i), bottomRight: H0(x.bottomRight, i), faceCenter: H0(x.faceCenter, i) }), cg = (x, i) => {
  const { faceCenter: t, faceSize: e } = x, n = f1(e, i), o = {};
  o.x = t.x, o.y = t.y - n;
  const r = {};
  r.x = t.x + n, r.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + n;
  const s = {};
  s.x = t.x - n, s.y = t.y;
  const c = {};
  return c.top = o, c.right = r, c.bottom = a, c.left = s, Yc(c);
}, cI = (x, i) => {
  const { bottomRight: t, faceCenter: e, topLeft: n } = i, o = {
    topLeft: n,
    width: t.x - n.x,
    height: t.y - n.y
  };
  Jc(x, o, "rgba(255, 0, 0, 0.3)", !0), bn(x, e, "lime");
}, gI = (x, i, t) => {
  const e = cg(i, t);
  Object.values(e).map((n) => bn(x, n, "orange"));
}, dI = ({ cameraResolution: x, detectionDetails: i, isImageMirror: t }) => {
  const { thresholds: e } = Br(), { redfin: n } = $0(), o = Ge(null);
  if (ae(() => {
    if (!o.current)
      return;
    o.current.width = x.width, o.current.height = x.height, c1(o.current);
    const h = ti(x), m = Uc(
      x,
      e.outOfBoundsThreshold,
      h
    ), A = l1(x);
    i.value && (cI(o.current, i.value.processedImage.detection), gI(
      o.current,
      i.value.processedImage.detection,
      x
    ), to(o.current, h, "lime"), to(o.current, m, "yellow"), to(o.current, A, "blue"), bn(o.current, i.value.processedImage.detection.leftEye.center, "cyan"), bn(o.current, i.value.processedImage.detection.rightEye.center, "cyan"), bn(o.current, i.value.processedImage.detection.mouth.center, "cyan"));
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
    hl,
    {
      ref: o,
      cameraResolution: x,
      detectionDetails: u,
      isImageMirror: t
    }
  );
};
function uI(x) {
  return /* @__PURE__ */ O("rect", { fill: "#000", ...x, rx: "50%" });
}
function lI(x) {
  const [i, t] = Le(!1), e = () => t((r) => !r), n = "" + i;
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
const II = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function fI({ cutOut: x, height: i, width: t }) {
  const e = Ge(null), { key: n } = lI(e);
  return /* @__PURE__ */ O("div", { ref: e, style: II, children: /* @__PURE__ */ O("svg", { viewBox: `0 0 ${t} ${i}`, children: [
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
function CI({ fullOverlay: x, resolution: i }) {
  const t = I1(i), e = `${t.height * 100}%`, n = `${t.width * 100}%`, o = `${t.shiftX * 100}%`, r = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ O(
    fI,
    {
      cutOut: x || /* @__PURE__ */ O(uI, { height: e, width: n, x: o, y: r }),
      height: i.height,
      width: i.width
    }
  );
}
function hI({ cameraResolution: x, children: i, detectionDetails: t, shouldMirror: e }) {
  const { redfin: n, sunfish: o } = $0(), { appState: r, freemiumOverlayState: a } = q0(), s = a !== _x.HIDDEN && n !== Zo.Higher && x, c = a === _x.VISIBLE, d = x && o && r === vt.RUNNING;
  return /* @__PURE__ */ O(at, { children: [
    s && /* @__PURE__ */ O(CI, { fullOverlay: c, resolution: x }),
    i,
    d && /* @__PURE__ */ O(
      dI,
      {
        cameraResolution: x,
        detectionDetails: t,
        isImageMirror: e
      }
    )
  ] });
}
const pI = (x, i) => {
  if (R1()) {
    const t = {};
    t.candidateSelectionImages = i;
    const e = t;
    Wn.getInstance().dispatchCustomEventOnChange(x, e);
  }
};
var e0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, gg = {}, rs = {}, mI = bI;
function bI(x, i) {
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
      var h = r[a++];
      switch (C) {
        case 0:
          d[g++] = t[h >> 2], u = (h & 3) << 4, C = 1;
          break;
        case 1:
          d[g++] = t[u | h >> 4], u = (h & 15) << 2, C = 2;
          break;
        case 2:
          d[g++] = t[u | h >> 6], d[g++] = t[h & 63], C = 0;
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
var AI = Bi;
function Bi() {
  this._listeners = {};
}
Bi.prototype.on = function(x, i, t) {
  return (this._listeners[x] || (this._listeners[x] = [])).push({
    fn: i,
    ctx: t || this
  }), this;
};
Bi.prototype.off = function(x, i) {
  if (x === void 0)
    this._listeners = {};
  else if (i === void 0)
    this._listeners[x] = [];
  else
    for (var t = this._listeners[x], e = 0; e < t.length; )
      t[e].fn === i ? t.splice(e, 1) : ++e;
  return this;
};
Bi.prototype.emit = function(x) {
  var i = this._listeners[x];
  if (i) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < i.length; )
      i[e].fn.apply(i[e++].ctx, t);
  }
  return this;
};
var yI = as(as);
function as(x) {
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
    x.writeFloatLE = i.bind(null, ss), x.writeFloatBE = i.bind(null, cs);
    function t(e, n, o) {
      var r = e(n, o), a = (r >> 31) * 2 + 1, s = r >>> 23 & 255, c = r & 8388607;
      return s === 255 ? c ? NaN : a * (1 / 0) : s === 0 ? a * 1401298464324817e-60 * c : a * Math.pow(2, s - 150) * (c + 8388608);
    }
    x.readFloatLE = t.bind(null, gs), x.readFloatBE = t.bind(null, ds);
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
    x.writeDoubleLE = i.bind(null, ss, 0, 4), x.writeDoubleBE = i.bind(null, cs, 4, 0);
    function t(e, n, o, r, a) {
      var s = e(r, a + n), c = e(r, a + o), d = (c >> 31) * 2 + 1, g = c >>> 20 & 2047, C = 4294967296 * (c & 1048575) + s;
      return g === 2047 ? C ? NaN : d * (1 / 0) : g === 0 ? d * 5e-324 * C : d * Math.pow(2, g - 1075) * (C + 4503599627370496);
    }
    x.readDoubleLE = t.bind(null, gs, 0, 4), x.readDoubleBE = t.bind(null, ds, 4, 0);
  }(), x;
}
function ss(x, i, t) {
  i[t] = x & 255, i[t + 1] = x >>> 8 & 255, i[t + 2] = x >>> 16 & 255, i[t + 3] = x >>> 24;
}
function cs(x, i, t) {
  i[t] = x >>> 24, i[t + 1] = x >>> 16 & 255, i[t + 2] = x >>> 8 & 255, i[t + 3] = x & 255;
}
function gs(x, i) {
  return (x[i] | x[i + 1] << 8 | x[i + 2] << 16 | x[i + 3] << 24) >>> 0;
}
function ds(x, i) {
  return (x[i] << 24 | x[i + 1] << 16 | x[i + 2] << 8 | x[i + 3]) >>> 0;
}
function us(x) {
  throw new Error('Could not dynamically require "' + x + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var vI = WI;
function WI(x) {
  try {
    if (typeof us != "function")
      return null;
    var i = us(x);
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
var wI = SI;
function SI(x, i, t) {
  var e = t || 8192, n = e >>> 1, o = null, r = e;
  return function(a) {
    if (a < 1 || a > n)
      return x(a);
    r + a > e && (o = x(e), r = 0);
    var s = i.call(o, r, r += a);
    return r & 7 && (r = (r | 7) + 1), s;
  };
}
var xo, ls;
function BI() {
  if (ls)
    return xo;
  ls = 1, xo = i;
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
  }, xo;
}
var Is;
function b0() {
  return Is || (Is = 1, function(x) {
    var i = x;
    i.asPromise = mI, i.base64 = dg, i.EventEmitter = AI, i.float = yI, i.inquire = vI, i.utf8 = ug, i.pool = wI, i.LongBits = BI(), i.isNode = !!(typeof e0 < "u" && e0 && e0.process && e0.process.versions && e0.process.versions.node), i.global = i.isNode && e0 || typeof window < "u" && window || typeof self < "u" && self || e0, i.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(rs)), rs;
}
var lg = Q, rt = b0(), Uo, Gi = rt.LongBits, fs = rt.base64, Cs = rt.utf8;
function jn(x, i, t) {
  this.fn = x, this.len = i, this.next = void 0, this.val = t;
}
function Gr() {
}
function GI(x) {
  this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
}
function Q() {
  this.len = 0, this.head = new jn(Gr, 0, 0), this.tail = this.head, this.states = null;
}
var Ig = function() {
  return rt.Buffer ? function() {
    return (Q.create = function() {
      return new Uo();
    })();
  } : function() {
    return new Q();
  };
};
Q.create = Ig();
Q.alloc = function(x) {
  return new rt.Array(x);
};
rt.Array !== Array && (Q.alloc = rt.pool(Q.alloc, rt.Array.prototype.subarray));
Q.prototype._push = function(x, i, t) {
  return this.tail = this.tail.next = new jn(x, i, t), this.len += i, this;
};
function kr(x, i, t) {
  i[t] = x & 255;
}
function kI(x, i, t) {
  for (; x > 127; )
    i[t++] = x & 127 | 128, x >>>= 7;
  i[t] = x;
}
function Or(x, i) {
  this.len = x, this.next = void 0, this.val = i;
}
Or.prototype = Object.create(jn.prototype);
Or.prototype.fn = kI;
Q.prototype.uint32 = function(x) {
  return this.len += (this.tail = this.tail.next = new Or(
    (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
    x
  )).len, this;
};
Q.prototype.int32 = function(x) {
  return x < 0 ? this._push(Zr, 10, Gi.fromNumber(x)) : this.uint32(x);
};
Q.prototype.sint32 = function(x) {
  return this.uint32((x << 1 ^ x >> 31) >>> 0);
};
function Zr(x, i, t) {
  for (; x.hi; )
    i[t++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
  for (; x.lo > 127; )
    i[t++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
  i[t++] = x.lo;
}
Q.prototype.uint64 = function(x) {
  var i = Gi.from(x);
  return this._push(Zr, i.length(), i);
};
Q.prototype.int64 = Q.prototype.uint64;
Q.prototype.sint64 = function(x) {
  var i = Gi.from(x).zzEncode();
  return this._push(Zr, i.length(), i);
};
Q.prototype.bool = function(x) {
  return this._push(kr, 1, x ? 1 : 0);
};
function Qo(x, i, t) {
  i[t] = x & 255, i[t + 1] = x >>> 8 & 255, i[t + 2] = x >>> 16 & 255, i[t + 3] = x >>> 24;
}
Q.prototype.fixed32 = function(x) {
  return this._push(Qo, 4, x >>> 0);
};
Q.prototype.sfixed32 = Q.prototype.fixed32;
Q.prototype.fixed64 = function(x) {
  var i = Gi.from(x);
  return this._push(Qo, 4, i.lo)._push(Qo, 4, i.hi);
};
Q.prototype.sfixed64 = Q.prototype.fixed64;
Q.prototype.float = function(x) {
  return this._push(rt.float.writeFloatLE, 4, x);
};
Q.prototype.double = function(x) {
  return this._push(rt.float.writeDoubleLE, 8, x);
};
var OI = rt.Array.prototype.set ? function(x, i, t) {
  i.set(x, t);
} : function(x, i, t) {
  for (var e = 0; e < x.length; ++e)
    i[t + e] = x[e];
};
Q.prototype.bytes = function(x) {
  var i = x.length >>> 0;
  if (!i)
    return this._push(kr, 1, 0);
  if (rt.isString(x)) {
    var t = Q.alloc(i = fs.length(x));
    fs.decode(x, t, 0), x = t;
  }
  return this.uint32(i)._push(OI, i, x);
};
Q.prototype.string = function(x) {
  var i = Cs.length(x);
  return i ? this.uint32(i)._push(Cs.write, i, x) : this._push(kr, 1, 0);
};
Q.prototype.fork = function() {
  return this.states = new GI(this), this.head = this.tail = new jn(Gr, 0, 0), this.len = 0, this;
};
Q.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new jn(Gr, 0, 0), this.len = 0), this;
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
  Uo = x, Q.create = Ig(), Uo._configure();
};
var ZI = wt, fg = lg;
(wt.prototype = Object.create(fg.prototype)).constructor = wt;
var Xt = b0();
function wt() {
  fg.call(this);
}
wt._configure = function() {
  wt.alloc = Xt._Buffer_allocUnsafe, wt.writeBytesBuffer = Xt.Buffer && Xt.Buffer.prototype instanceof Uint8Array && Xt.Buffer.prototype.set.name === "set" ? function(x, i, t) {
    i.set(x, t);
  } : function(x, i, t) {
    if (x.copy)
      x.copy(i, t, 0, x.length);
    else
      for (var e = 0; e < x.length; )
        i[t++] = x[e++];
  };
};
wt.prototype.bytes = function(x) {
  Xt.isString(x) && (x = Xt._Buffer_from(x, "base64"));
  var i = x.length >>> 0;
  return this.uint32(i), i && this._push(wt.writeBytesBuffer, i, x), this;
};
function HI(x, i, t) {
  x.length < 40 ? Xt.utf8.write(x, i, t) : i.utf8Write ? i.utf8Write(x, t) : i.write(x, t);
}
wt.prototype.string = function(x) {
  var i = Xt.Buffer.byteLength(x);
  return this.uint32(i), i && this._push(HI, i, x), this;
};
wt._configure();
var Cg = Ie, St = b0(), zo, hg = St.LongBits, RI = St.utf8;
function ft(x, i) {
  return RangeError("index out of range: " + x.pos + " + " + (i || 1) + " > " + x.len);
}
function Ie(x) {
  this.buf = x, this.pos = 0, this.len = x.length;
}
var hs = typeof Uint8Array < "u" ? function(x) {
  if (x instanceof Uint8Array || Array.isArray(x))
    return new Ie(x);
  throw Error("illegal buffer");
} : function(x) {
  if (Array.isArray(x))
    return new Ie(x);
  throw Error("illegal buffer");
}, pg = function() {
  return St.Buffer ? function(x) {
    return (Ie.create = function(i) {
      return St.Buffer.isBuffer(i) ? new zo(i) : hs(i);
    })(x);
  } : hs;
};
Ie.create = pg();
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
function io() {
  var x = new hg(0, 0), i = 0;
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
function xi(x, i) {
  return (x[i - 4] | x[i - 3] << 8 | x[i - 2] << 16 | x[i - 1] << 24) >>> 0;
}
Ie.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw ft(this, 4);
  return xi(this.buf, this.pos += 4);
};
Ie.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw ft(this, 4);
  return xi(this.buf, this.pos += 4) | 0;
};
function ps() {
  if (this.pos + 8 > this.len)
    throw ft(this, 8);
  return new hg(xi(this.buf, this.pos += 4), xi(this.buf, this.pos += 4));
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
  return RI.read(x, 0, x.length);
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
  zo = x, Ie.create = pg(), zo._configure();
  var i = St.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  St.merge(Ie.prototype, {
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
      return ps.call(this)[i](!0);
    },
    sfixed64: function() {
      return ps.call(this)[i](!1);
    }
  });
};
var KI = h0, mg = Cg;
(h0.prototype = Object.create(mg.prototype)).constructor = h0;
var ms = b0();
function h0(x) {
  mg.call(this, x);
}
h0._configure = function() {
  ms.Buffer && (h0.prototype._slice = ms.Buffer.prototype.slice);
};
h0.prototype.string = function() {
  var x = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + x, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + x, this.len));
};
h0._configure();
var bg = {}, PI = Sn, Hr = b0();
(Sn.prototype = Object.create(Hr.EventEmitter.prototype)).constructor = Sn;
function Sn(x, i, t) {
  if (typeof x != "function")
    throw TypeError("rpcImpl must be a function");
  Hr.EventEmitter.call(this), this.rpcImpl = x, this.requestDelimited = !!i, this.responseDelimited = !!t;
}
Sn.prototype.rpcCall = function x(i, t, e, n, o) {
  if (!n)
    throw TypeError("request must be specified");
  var r = this;
  if (!o)
    return Hr.asPromise(x, r, i, t, e, n);
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
Sn.prototype.end = function(x) {
  return this.rpcImpl && (x || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(x) {
  var i = x;
  i.Service = PI;
})(bg);
var TI = {};
(function(x) {
  var i = x;
  i.build = "minimal", i.Writer = lg, i.BufferWriter = ZI, i.Reader = Cg, i.BufferReader = KI, i.util = b0(), i.rpc = bg, i.roots = TI, i.configure = t;
  function t() {
    i.util._configure(), i.Writer._configure(i.BufferWriter), i.Reader._configure(i.BufferReader);
  }
  t();
})(gg);
var oe = gg;
const B = oe.Reader, de = oe.Writer, v = oe.util, p = oe.roots.default || (oe.roots.default = {}), p0 = p.dot = (() => {
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
      let n = e === void 0 ? t.len : t.pos + e, o = new p.dot.Content();
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
      if (t instanceof p.dot.Content)
        return t;
      let e = new p.dot.Content();
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
        if (n || (n = de.create()), e.images != null && e.images.length)
          for (let o = 0; o < e.images.length; ++o)
            p.dot.Image.encode(e.images[o], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && p.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, r = new p.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.images && r.images.length || (r.images = []), r.images.push(p.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              r.metadata = p.dot.v4.Metadata.decode(e, e.uint32());
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
            let o = p.dot.Image.verify(e.images[n]);
            if (o)
              return "images." + o;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = p.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof p.dot.v4.MagnifEyeLivenessContent)
          return e;
        let n = new p.dot.v4.MagnifEyeLivenessContent();
        if (e.images) {
          if (!Array.isArray(e.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          n.images = [];
          for (let o = 0; o < e.images.length; ++o) {
            if (typeof e.images[o] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            n.images[o] = p.dot.Image.fromObject(e.images[o]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          n.metadata = p.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        if ((n.arrays || n.defaults) && (o.images = []), n.defaults && (o.metadata = null), e.images && e.images.length) {
          o.images = [];
          for (let r = 0; r < e.images.length; ++r)
            o.images[r] = p.dot.Image.toObject(e.images[r], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = p.dot.v4.Metadata.toObject(e.metadata, n)), o;
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
        return o || (o = de.create()), n.platform != null && Object.hasOwnProperty.call(n, "platform") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.platform), n.web != null && Object.hasOwnProperty.call(n, "web") && p.dot.v4.WebMetadata.encode(n.web, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.android != null && Object.hasOwnProperty.call(n, "android") && p.dot.v4.AndroidMetadata.encode(n.android, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.ios != null && Object.hasOwnProperty.call(n, "ios") && p.dot.v4.IosMetadata.encode(n.ios, o.uint32(
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
        let r = o === void 0 ? n.len : n.pos + o, a = new p.dot.v4.Metadata();
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
              a.web = p.dot.v4.WebMetadata.decode(n, n.uint32());
              break;
            }
            case 3: {
              a.android = p.dot.v4.AndroidMetadata.decode(n, n.uint32());
              break;
            }
            case 4: {
              a.ios = p.dot.v4.IosMetadata.decode(n, n.uint32());
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
            let r = p.dot.v4.WebMetadata.verify(n.web);
            if (r)
              return "web." + r;
          }
        }
        if (n.android != null && n.hasOwnProperty("android")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = p.dot.v4.AndroidMetadata.verify(n.android);
            if (r)
              return "android." + r;
          }
        }
        if (n.ios != null && n.hasOwnProperty("ios")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = p.dot.v4.IosMetadata.verify(n.ios);
            if (r)
              return "ios." + r;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof p.dot.v4.Metadata)
          return n;
        let o = new p.dot.v4.Metadata();
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
          o.web = p.dot.v4.WebMetadata.fromObject(n.web);
        }
        if (n.android != null) {
          if (typeof n.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          o.android = p.dot.v4.AndroidMetadata.fromObject(n.android);
        }
        if (n.ios != null) {
          if (typeof n.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          o.ios = p.dot.v4.IosMetadata.fromObject(n.ios);
        }
        return o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.platform = o.enums === String ? "WEB" : 0, r.componentVersion = ""), n.platform != null && n.hasOwnProperty("platform") && (r.platform = o.enums === String ? p.dot.Platform[n.platform] === void 0 ? n.platform : p.dot.Platform[n.platform] : n.platform), n.web != null && n.hasOwnProperty("web") && (r.web = p.dot.v4.WebMetadata.toObject(n.web, o), o.oneofs && (r.metadata = "web")), n.android != null && n.hasOwnProperty("android") && (r.android = p.dot.v4.AndroidMetadata.toObject(n.android, o), o.oneofs && (r.metadata = "android")), n.ios != null && n.hasOwnProperty("ios") && (r.ios = p.dot.v4.IosMetadata.toObject(n.ios, o), o.oneofs && (r.metadata = "ios")), n.sessionToken != null && n.hasOwnProperty("sessionToken") && (r.sessionToken = n.sessionToken, o.oneofs && (r._sessionToken = "sessionToken")), n.componentVersion != null && n.hasOwnProperty("componentVersion") && (r.componentVersion = n.componentVersion), r;
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
            ).string(r[a]), p.dot.Int32List.encode(n.dynamicCameraFrameProperties[r[a]], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (n.digestsWithTimestamp != null && n.digestsWithTimestamp.length)
          for (let r = 0; r < n.digestsWithTimestamp.length; ++r)
            p.dot.DigestWithTimestamp.encode(n.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return o;
      }, t.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, t.decode = function(n, o) {
        n instanceof B || (n = B.create(n));
        let r = o === void 0 ? n.len : n.pos + o, a = new p.dot.v4.AndroidMetadata(), s, c;
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
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(p.dot.DigestWithTimestamp.decode(n, n.uint32()));
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
                    c = p.dot.Int32List.decode(n, n.uint32());
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
            let r = p.dot.DigestWithTimestamp.verify(n.digestsWithTimestamp[o]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (n.dynamicCameraFrameProperties != null && n.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!v.isObject(n.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(n.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let a = p.dot.Int32List.verify(n.dynamicCameraFrameProperties[o[r]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof p.dot.v4.AndroidMetadata)
          return n;
        let o = new p.dot.v4.AndroidMetadata();
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
            o.digestsWithTimestamp[r] = p.dot.DigestWithTimestamp.fromObject(n.digestsWithTimestamp[r]);
          }
        }
        if (n.dynamicCameraFrameProperties) {
          if (typeof n.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          o.dynamicCameraFrameProperties = {};
          for (let r = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < r.length; ++a) {
            if (typeof n.dynamicCameraFrameProperties[r[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[r[a]] = p.dot.Int32List.fromObject(n.dynamicCameraFrameProperties[r[a]]);
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
            r.dynamicCameraFrameProperties[a[s]] = p.dot.Int32List.toObject(n.dynamicCameraFrameProperties[a[s]], o);
        }
        if (n.digestsWithTimestamp && n.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let s = 0; s < n.digestsWithTimestamp.length; ++s)
            r.digestsWithTimestamp[s] = p.dot.DigestWithTimestamp.toObject(n.digestsWithTimestamp[s], o);
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
            p.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[o], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, r = new p.dot.v4.IosMetadata(), a, s;
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
              r.digestsWithTimestamp && r.digestsWithTimestamp.length || (r.digestsWithTimestamp = []), r.digestsWithTimestamp.push(p.dot.DigestWithTimestamp.decode(e, e.uint32()));
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
            let o = p.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[n]);
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
        if (e instanceof p.dot.v4.IosMetadata)
          return e;
        let n = new p.dot.v4.IosMetadata();
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
            n.digestsWithTimestamp[o] = p.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[o]);
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
            o.digestsWithTimestamp[a] = p.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[a], n);
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
        if (n || (n = de.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && p.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.availableCameraProperties != null && e.availableCameraProperties.length)
          for (let o = 0; o < e.availableCameraProperties.length; ++o)
            p.dot.v4.CameraProperties.encode(e.availableCameraProperties[o], n.uint32(
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
            p.dot.v4.DetectedObject.encode(e.detectionRecord[o], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (e.hashedDetectedImagesWithTimestamp != null && e.hashedDetectedImagesWithTimestamp.length)
          for (let o = 0; o < e.hashedDetectedImagesWithTimestamp.length; ++o)
            p.dot.v4.HashedDetectedImageWithTimestamp.encode(e.hashedDetectedImagesWithTimestamp[o], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, r = new p.dot.v4.WebMetadata();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.currentCameraProperties = p.dot.v4.MediaTrackSettings.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.availableCameraProperties && r.availableCameraProperties.length || (r.availableCameraProperties = []), r.availableCameraProperties.push(p.dot.v4.CameraProperties.decode(e, e.uint32()));
              break;
            }
            case 3: {
              r.hashedDetectedImages && r.hashedDetectedImages.length || (r.hashedDetectedImages = []), r.hashedDetectedImages.push(e.string());
              break;
            }
            case 5: {
              r.hashedDetectedImagesWithTimestamp && r.hashedDetectedImagesWithTimestamp.length || (r.hashedDetectedImagesWithTimestamp = []), r.hashedDetectedImagesWithTimestamp.push(p.dot.v4.HashedDetectedImageWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              r.detectionRecord && r.detectionRecord.length || (r.detectionRecord = []), r.detectionRecord.push(p.dot.v4.DetectedObject.decode(e, e.uint32()));
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
          let n = p.dot.v4.MediaTrackSettings.verify(e.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (e.availableCameraProperties != null && e.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(e.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < e.availableCameraProperties.length; ++n) {
            let o = p.dot.v4.CameraProperties.verify(e.availableCameraProperties[n]);
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
            let o = p.dot.v4.HashedDetectedImageWithTimestamp.verify(e.hashedDetectedImagesWithTimestamp[n]);
            if (o)
              return "hashedDetectedImagesWithTimestamp." + o;
          }
        }
        if (e.detectionRecord != null && e.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(e.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < e.detectionRecord.length; ++n) {
            let o = p.dot.v4.DetectedObject.verify(e.detectionRecord[n]);
            if (o)
              return "detectionRecord." + o;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof p.dot.v4.WebMetadata)
          return e;
        let n = new p.dot.v4.WebMetadata();
        if (e.currentCameraProperties != null) {
          if (typeof e.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          n.currentCameraProperties = p.dot.v4.MediaTrackSettings.fromObject(e.currentCameraProperties);
        }
        if (e.availableCameraProperties) {
          if (!Array.isArray(e.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          n.availableCameraProperties = [];
          for (let o = 0; o < e.availableCameraProperties.length; ++o) {
            if (typeof e.availableCameraProperties[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[o] = p.dot.v4.CameraProperties.fromObject(e.availableCameraProperties[o]);
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
            n.hashedDetectedImagesWithTimestamp[o] = p.dot.v4.HashedDetectedImageWithTimestamp.fromObject(e.hashedDetectedImagesWithTimestamp[o]);
          }
        }
        if (e.detectionRecord) {
          if (!Array.isArray(e.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let o = 0; o < e.detectionRecord.length; ++o) {
            if (typeof e.detectionRecord[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[o] = p.dot.v4.DetectedObject.fromObject(e.detectionRecord[o]);
          }
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        if ((n.arrays || n.defaults) && (o.availableCameraProperties = [], o.hashedDetectedImages = [], o.detectionRecord = [], o.hashedDetectedImagesWithTimestamp = []), n.defaults && (o.currentCameraProperties = null), e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties") && (o.currentCameraProperties = p.dot.v4.MediaTrackSettings.toObject(e.currentCameraProperties, n)), e.availableCameraProperties && e.availableCameraProperties.length) {
          o.availableCameraProperties = [];
          for (let r = 0; r < e.availableCameraProperties.length; ++r)
            o.availableCameraProperties[r] = p.dot.v4.CameraProperties.toObject(e.availableCameraProperties[r], n);
        }
        if (e.hashedDetectedImages && e.hashedDetectedImages.length) {
          o.hashedDetectedImages = [];
          for (let r = 0; r < e.hashedDetectedImages.length; ++r)
            o.hashedDetectedImages[r] = e.hashedDetectedImages[r];
        }
        if (e.detectionRecord && e.detectionRecord.length) {
          o.detectionRecord = [];
          for (let r = 0; r < e.detectionRecord.length; ++r)
            o.detectionRecord[r] = p.dot.v4.DetectedObject.toObject(e.detectionRecord[r], n);
        }
        if (e.hashedDetectedImagesWithTimestamp && e.hashedDetectedImagesWithTimestamp.length) {
          o.hashedDetectedImagesWithTimestamp = [];
          for (let r = 0; r < e.hashedDetectedImagesWithTimestamp.length; ++r)
            o.hashedDetectedImagesWithTimestamp[r] = p.dot.v4.HashedDetectedImageWithTimestamp.toObject(e.hashedDetectedImagesWithTimestamp[r], n);
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
        let o = n === void 0 ? e.len : e.pos + n, r = new p.dot.v4.HashedDetectedImageWithTimestamp();
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
        if (e instanceof p.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let n = new p.dot.v4.HashedDetectedImageWithTimestamp();
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
        let r = o === void 0 ? n.len : n.pos + o, a = new p.dot.v4.MediaTrackSettings();
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
        if (n instanceof p.dot.v4.MediaTrackSettings)
          return n;
        let o = new p.dot.v4.MediaTrackSettings();
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
        let o = n === void 0 ? e.len : e.pos + n, r = new p.dot.v4.ImageBitmap();
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
        if (e instanceof p.dot.v4.ImageBitmap)
          return e;
        let n = new p.dot.v4.ImageBitmap();
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
        return o || (o = de.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && p.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.cameraProperties != null && Object.hasOwnProperty.call(n, "cameraProperties") && p.dot.v4.MediaTrackSettings.encode(n.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, t.decode = function(n, o) {
        n instanceof B || (n = B.create(n));
        let r = o === void 0 ? n.len : n.pos + o, a = new p.dot.v4.CameraProperties();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = p.dot.v4.ImageBitmap.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = p.dot.v4.MediaTrackSettings.decode(n, n.uint32());
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
          let o = p.dot.v4.ImageBitmap.verify(n.cameraInitFrameResolution);
          if (o)
            return "cameraInitFrameResolution." + o;
        }
        if (n.cameraProperties != null && n.hasOwnProperty("cameraProperties")) {
          let o = p.dot.v4.MediaTrackSettings.verify(n.cameraProperties);
          if (o)
            return "cameraProperties." + o;
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof p.dot.v4.CameraProperties)
          return n;
        let o = new p.dot.v4.CameraProperties();
        if (n.cameraInitFrameResolution != null) {
          if (typeof n.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          o.cameraInitFrameResolution = p.dot.v4.ImageBitmap.fromObject(n.cameraInitFrameResolution);
        }
        if (n.cameraProperties != null) {
          if (typeof n.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          o.cameraProperties = p.dot.v4.MediaTrackSettings.fromObject(n.cameraProperties);
        }
        return o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.cameraProperties = null), n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution") && (r.cameraInitFrameResolution = p.dot.v4.ImageBitmap.toObject(n.cameraInitFrameResolution, o), o.oneofs && (r._cameraInitFrameResolution = "cameraInitFrameResolution")), n.cameraProperties != null && n.hasOwnProperty("cameraProperties") && (r.cameraProperties = p.dot.v4.MediaTrackSettings.toObject(n.cameraProperties, o)), r;
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && p.dot.v4.Point.encode(e.faceCenter, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && n.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && p.dot.v4.Point.encode(e.bottomLeft, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && p.dot.v4.Point.encode(e.bottomRight, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && p.dot.v4.Point.encode(e.topLeft, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && p.dot.v4.Point.encode(e.topRight, n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, r = new p.dot.v4.DetectedObject();
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
              r.faceCenter = p.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              r.smallestEdge = e.float();
              break;
            }
            case 8: {
              r.bottomLeft = p.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              r.bottomRight = p.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              r.topLeft = p.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              r.topRight = p.dot.v4.Point.decode(e, e.uint32());
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
          let n = p.dot.v4.Point.verify(e.faceCenter);
          if (n)
            return "faceCenter." + n;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let n = p.dot.v4.Point.verify(e.bottomLeft);
          if (n)
            return "bottomLeft." + n;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let n = p.dot.v4.Point.verify(e.bottomRight);
          if (n)
            return "bottomRight." + n;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let n = p.dot.v4.Point.verify(e.topLeft);
          if (n)
            return "topLeft." + n;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let n = p.dot.v4.Point.verify(e.topRight);
          if (n)
            return "topRight." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof p.dot.v4.DetectedObject)
          return e;
        let n = new p.dot.v4.DetectedObject();
        if (e.brightness != null && (n.brightness = Number(e.brightness)), e.sharpness != null && (n.sharpness = Number(e.sharpness)), e.hotspots != null && (n.hotspots = Number(e.hotspots)), e.confidence != null && (n.confidence = Number(e.confidence)), e.faceSize != null && (n.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          n.faceCenter = p.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (n.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          n.bottomLeft = p.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          n.bottomRight = p.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          n.topLeft = p.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          n.topRight = p.dot.v4.Point.fromObject(e.topRight);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        return n.defaults && (o.brightness = 0, o.sharpness = 0, o.hotspots = 0, o.confidence = 0, o.faceSize = 0, o.faceCenter = null, o.smallestEdge = 0, o.bottomLeft = null, o.bottomRight = null, o.topLeft = null, o.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (o.brightness = n.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (o.sharpness = n.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (o.hotspots = n.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (o.confidence = n.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (o.faceSize = n.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (o.faceCenter = p.dot.v4.Point.toObject(e.faceCenter, n)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (o.smallestEdge = n.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (o.bottomLeft = p.dot.v4.Point.toObject(e.bottomLeft, n)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (o.bottomRight = p.dot.v4.Point.toObject(e.bottomRight, n)), e.topLeft != null && e.hasOwnProperty("topLeft") && (o.topLeft = p.dot.v4.Point.toObject(e.topLeft, n)), e.topRight != null && e.hasOwnProperty("topRight") && (o.topRight = p.dot.v4.Point.toObject(e.topRight, n)), o;
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
        let o = n === void 0 ? e.len : e.pos + n, r = new p.dot.v4.Point();
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
        if (e instanceof p.dot.v4.Point)
          return e;
        let n = new p.dot.v4.Point();
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
        return n || (n = de.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && p.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && p.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, r = new p.dot.v4.FaceContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.image = p.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = p.dot.v4.Metadata.decode(e, e.uint32());
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
          let n = p.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = p.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof p.dot.v4.FaceContent)
          return e;
        let n = new p.dot.v4.FaceContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          n.image = p.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          n.metadata = p.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        return n.defaults && (o.image = null, o.metadata = null), e.image != null && e.hasOwnProperty("image") && (o.image = p.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = p.dot.v4.Metadata.toObject(e.metadata, n)), o;
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
        return n || (n = de.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && p.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && p.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, r = new p.dot.v4.DocumentContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.image = p.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = p.dot.v4.Metadata.decode(e, e.uint32());
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
          let n = p.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = p.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof p.dot.v4.DocumentContent)
          return e;
        let n = new p.dot.v4.DocumentContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          n.image = p.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          n.metadata = p.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        return n.defaults && (o.image = null, o.metadata = null), e.image != null && e.hasOwnProperty("image") && (o.image = p.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = p.dot.v4.Metadata.toObject(e.metadata, n)), o;
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
        return o || (o = de.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && p.dot.v4.DocumentContent.encode(n.documentContent, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.faceContent != null && Object.hasOwnProperty.call(n, "faceContent") && p.dot.v4.FaceContent.encode(n.faceContent, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(n, "magnifeyeLivenessContent") && p.dot.v4.MagnifEyeLivenessContent.encode(n.magnifeyeLivenessContent, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.smileLivenessContent != null && Object.hasOwnProperty.call(n, "smileLivenessContent") && p.dot.v4.SmileLivenessContent.encode(n.smileLivenessContent, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(n, "eyeGazeLivenessContent") && p.dot.v4.EyeGazeLivenessContent.encode(n.eyeGazeLivenessContent, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), n.palmContent != null && Object.hasOwnProperty.call(n, "palmContent") && p.dot.v4.PalmContent.encode(n.palmContent, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, t.decode = function(n, o) {
        n instanceof B || (n = B.create(n));
        let r = o === void 0 ? n.len : n.pos + o, a = new p.dot.v4.Blob();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.documentContent = p.dot.v4.DocumentContent.decode(n, n.uint32());
              break;
            }
            case 5: {
              a.eyeGazeLivenessContent = p.dot.v4.EyeGazeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.faceContent = p.dot.v4.FaceContent.decode(n, n.uint32());
              break;
            }
            case 3: {
              a.magnifeyeLivenessContent = p.dot.v4.MagnifEyeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 4: {
              a.smileLivenessContent = p.dot.v4.SmileLivenessContent.decode(n, n.uint32());
              break;
            }
            case 6: {
              a.palmContent = p.dot.v4.PalmContent.decode(n, n.uint32());
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
            let r = p.dot.v4.DocumentContent.verify(n.documentContent);
            if (r)
              return "documentContent." + r;
          }
        }
        if (n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = p.dot.v4.EyeGazeLivenessContent.verify(n.eyeGazeLivenessContent);
            if (r)
              return "eyeGazeLivenessContent." + r;
          }
        }
        if (n.faceContent != null && n.hasOwnProperty("faceContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = p.dot.v4.FaceContent.verify(n.faceContent);
            if (r)
              return "faceContent." + r;
          }
        }
        if (n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = p.dot.v4.MagnifEyeLivenessContent.verify(n.magnifeyeLivenessContent);
            if (r)
              return "magnifeyeLivenessContent." + r;
          }
        }
        if (n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = p.dot.v4.SmileLivenessContent.verify(n.smileLivenessContent);
            if (r)
              return "smileLivenessContent." + r;
          }
        }
        if (n.palmContent != null && n.hasOwnProperty("palmContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = p.dot.v4.PalmContent.verify(n.palmContent);
            if (r)
              return "palmContent." + r;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof p.dot.v4.Blob)
          return n;
        let o = new p.dot.v4.Blob();
        if (n.documentContent != null) {
          if (typeof n.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          o.documentContent = p.dot.v4.DocumentContent.fromObject(n.documentContent);
        }
        if (n.eyeGazeLivenessContent != null) {
          if (typeof n.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          o.eyeGazeLivenessContent = p.dot.v4.EyeGazeLivenessContent.fromObject(n.eyeGazeLivenessContent);
        }
        if (n.faceContent != null) {
          if (typeof n.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          o.faceContent = p.dot.v4.FaceContent.fromObject(n.faceContent);
        }
        if (n.magnifeyeLivenessContent != null) {
          if (typeof n.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          o.magnifeyeLivenessContent = p.dot.v4.MagnifEyeLivenessContent.fromObject(n.magnifeyeLivenessContent);
        }
        if (n.smileLivenessContent != null) {
          if (typeof n.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          o.smileLivenessContent = p.dot.v4.SmileLivenessContent.fromObject(n.smileLivenessContent);
        }
        if (n.palmContent != null) {
          if (typeof n.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          o.palmContent = p.dot.v4.PalmContent.fromObject(n.palmContent);
        }
        return o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        return n.documentContent != null && n.hasOwnProperty("documentContent") && (r.documentContent = p.dot.v4.DocumentContent.toObject(n.documentContent, o), o.oneofs && (r.blob = "documentContent")), n.faceContent != null && n.hasOwnProperty("faceContent") && (r.faceContent = p.dot.v4.FaceContent.toObject(n.faceContent, o), o.oneofs && (r.blob = "faceContent")), n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent") && (r.magnifeyeLivenessContent = p.dot.v4.MagnifEyeLivenessContent.toObject(n.magnifeyeLivenessContent, o), o.oneofs && (r.blob = "magnifeyeLivenessContent")), n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent") && (r.smileLivenessContent = p.dot.v4.SmileLivenessContent.toObject(n.smileLivenessContent, o), o.oneofs && (r.blob = "smileLivenessContent")), n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent") && (r.eyeGazeLivenessContent = p.dot.v4.EyeGazeLivenessContent.toObject(n.eyeGazeLivenessContent, o), o.oneofs && (r.blob = "eyeGazeLivenessContent")), n.palmContent != null && n.hasOwnProperty("palmContent") && (r.palmContent = p.dot.v4.PalmContent.toObject(n.palmContent, o), o.oneofs && (r.blob = "palmContent")), r;
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
        if (n || (n = de.create()), e.segments != null && e.segments.length)
          for (let o = 0; o < e.segments.length; ++o)
            p.dot.v4.EyeGazeLivenessSegment.encode(e.segments[o], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && p.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, r = new p.dot.v4.EyeGazeLivenessContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.segments && r.segments.length || (r.segments = []), r.segments.push(p.dot.v4.EyeGazeLivenessSegment.decode(e, e.uint32()));
              break;
            }
            case 2: {
              r.metadata = p.dot.v4.Metadata.decode(e, e.uint32());
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
            let o = p.dot.v4.EyeGazeLivenessSegment.verify(e.segments[n]);
            if (o)
              return "segments." + o;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = p.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof p.dot.v4.EyeGazeLivenessContent)
          return e;
        let n = new p.dot.v4.EyeGazeLivenessContent();
        if (e.segments) {
          if (!Array.isArray(e.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          n.segments = [];
          for (let o = 0; o < e.segments.length; ++o) {
            if (typeof e.segments[o] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[o] = p.dot.v4.EyeGazeLivenessSegment.fromObject(e.segments[o]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          n.metadata = p.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        if ((n.arrays || n.defaults) && (o.segments = []), n.defaults && (o.metadata = null), e.segments && e.segments.length) {
          o.segments = [];
          for (let r = 0; r < e.segments.length; ++r)
            o.segments[r] = p.dot.v4.EyeGazeLivenessSegment.toObject(e.segments[r], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = p.dot.v4.Metadata.toObject(e.metadata, n)), o;
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
        return n || (n = de.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && p.dot.Image.encode(e.image, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, r = new p.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.corner = e.int32();
              break;
            }
            case 2: {
              r.image = p.dot.Image.decode(e, e.uint32());
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
          let n = p.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof p.dot.v4.EyeGazeLivenessSegment)
          return e;
        let n = new p.dot.v4.EyeGazeLivenessSegment();
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
          n.image = p.dot.Image.fromObject(e.image);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        return n.defaults && (o.corner = n.enums === String ? "TOP_LEFT" : 0, o.image = null), e.corner != null && e.hasOwnProperty("corner") && (o.corner = n.enums === String ? p.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : p.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (o.image = p.dot.Image.toObject(e.image, n)), o;
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
        return n || (n = de.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && p.dot.Image.encode(e.neutralExpressionFaceImage, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.smileExpressionFaceImage != null && Object.hasOwnProperty.call(e, "smileExpressionFaceImage") && p.dot.Image.encode(e.smileExpressionFaceImage, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && p.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, r = new p.dot.v4.SmileLivenessContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.neutralExpressionFaceImage = p.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.smileExpressionFaceImage = p.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              r.metadata = p.dot.v4.Metadata.decode(e, e.uint32());
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
          let n = p.dot.Image.verify(e.neutralExpressionFaceImage);
          if (n)
            return "neutralExpressionFaceImage." + n;
        }
        if (e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage")) {
          let n = p.dot.Image.verify(e.smileExpressionFaceImage);
          if (n)
            return "smileExpressionFaceImage." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = p.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof p.dot.v4.SmileLivenessContent)
          return e;
        let n = new p.dot.v4.SmileLivenessContent();
        if (e.neutralExpressionFaceImage != null) {
          if (typeof e.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          n.neutralExpressionFaceImage = p.dot.Image.fromObject(e.neutralExpressionFaceImage);
        }
        if (e.smileExpressionFaceImage != null) {
          if (typeof e.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          n.smileExpressionFaceImage = p.dot.Image.fromObject(e.smileExpressionFaceImage);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          n.metadata = p.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        return n.defaults && (o.neutralExpressionFaceImage = null, o.smileExpressionFaceImage = null, o.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (o.neutralExpressionFaceImage = p.dot.Image.toObject(e.neutralExpressionFaceImage, n)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (o.smileExpressionFaceImage = p.dot.Image.toObject(e.smileExpressionFaceImage, n)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = p.dot.v4.Metadata.toObject(e.metadata, n)), o;
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
        return n || (n = de.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && p.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && p.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, r = new p.dot.v4.PalmContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.image = p.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = p.dot.v4.Metadata.decode(e, e.uint32());
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
          let n = p.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = p.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof p.dot.v4.PalmContent)
          return e;
        let n = new p.dot.v4.PalmContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          n.image = p.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          n.metadata = p.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        return n.defaults && (o.image = null, o.metadata = null), e.image != null && e.hasOwnProperty("image") && (o.image = p.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = p.dot.v4.Metadata.toObject(e.metadata, n)), o;
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
      return e || (e = de.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, o = new p.dot.Image();
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
      if (t instanceof p.dot.Image)
        return t;
      let e = new p.dot.Image();
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
      let n = e === void 0 ? t.len : t.pos + e, o = new p.dot.Int32List();
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
      if (t instanceof p.dot.Int32List)
        return t;
      let e = new p.dot.Int32List();
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
      let n = e === void 0 ? t.len : t.pos + e, o = new p.dot.DigestWithTimestamp();
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
      if (t instanceof p.dot.DigestWithTimestamp)
        return t;
      let e = new p.dot.DigestWithTimestamp();
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
function ii() {
  const x = ["W4HGDKBdNJrDWPlcLaCTWOBdONK", "z8kRW6ZcTSor", "WQhcGxtcQSkp", "W6XqlmodW5iFW6xcRCoXqmkqW6jKWOu", "WQi/W71Fzmkvt0jh", "WRP3eqtcMW", "oCowESk6", "W6tcKu89dZbxbSkPW7O", "WQpcN3JcV8ki", "WR/dGrHKnq", "WODairVcQXZdICk2lW", "WRhcHM/cRSkx", "yIZdKCo2mG", "WO0Ajq0", "WOakWRe", "W5KwgdnNBSk+WQPSW60", "dCoSqgddQmo2uSk3kXldUwa3", "W6G0xutdMsP5W4rYw8kVyW", "jbieW4lcMXfeo8k6Ax/cTq", "WPZdSmkGz8o0", "W7rVWQLF", "WRxdGbr7gG", "cJSiW49s", "qSo3W5NcJa", "FWBcISkYWP4OWQeqW6O+W547qW", "W4fjix0p", "WQ45W7Wnfmo8derTW5FcQCo7AG", "WRC3W5q9mq", "fSkOW4tcTmk3WOX4WPW", "W7NcUSk4W4dcOq/cIxxdUCovcmkw", "WQ7dUCoIWP0", "hmkXW58", "CfPbWP/dMG", "WQShWRXQW5VdHZtdTSkweq", "x2XsW4ngWRyxmNi", "W5b8wCoelCkMDSosla", "WQOxBa", "WRJdNmobBCoJ", "DSkuW5HsWRBdVtNcV8oiW5RdTmouWO0", "WRtdIXr7gG", "W4XykLeE", "WPSAEcGiW4rQDYzF", "W6dcLui7ugDOaSkpW4LBW4i", "oHNdP8kaya", "W7DeiLGPW5CQBW0l", "j8onW6DAWQhdGGaL", "ibyjW4tdHez7p8kCwG"];
  return ii = function() {
    return x;
  }, ii();
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return le(c - 157, g);
  }
  function e(s, c, d, g, C) {
    return le(g - -402, C);
  }
  const n = x();
  function o(s, c, d, g, C) {
    return le(d - 927, s);
  }
  function r(s, c, d, g, C) {
    return le(g - 319, s);
  }
  function a(s, c, d, g, C) {
    return le(g - -833, d);
  }
  for (; ; )
    try {
      if (parseInt(t(467, 462, 485, "D[N8", 443)) / 1 * (-parseInt(t(480, 463, 483, "9Qny", 472)) / 2) + parseInt(o("n@8Y", 1220, 1237, 1227, 1250)) / 3 * (-parseInt(r("($am", 640, 660, 642, 618)) / 4) + parseInt(o("1!PK", 1251, 1242, 1261, 1254)) / 5 + parseInt(a(-496, -495, "47BL", -515, -498)) / 6 * (-parseInt(e(-71, -113, -102, -91, "nX&w")) / 7) + parseInt(o("($am", 1278, 1269, 1278, 1292)) / 8 * (parseInt(a(-491, -490, "zkYf", -505, -504)) / 9) + parseInt(a(-527, -518, "T[c[", -509, -509)) / 10 + parseInt(a(-520, -530, "zkYf", -530, -516)) / 11 === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ii, -94223 * -13 + 1491450 + -161429 * 12);
async function VI() {
  function x(d, g, C, u, h) {
    return le(h - 756, d);
  }
  const i = {};
  i[x("ppZX", 1102, 1089, 1075, 1086)] = Hc;
  function t(d, g, C, u, h) {
    return le(u - 985, g);
  }
  i[x("47BL", 1059, 1054, 1045, 1058) + "h"] = 256;
  const e = await window[c("a90M", 132, 138) + "o"][x("%pt#", 1081, 1096, 1096, 1081) + "e"][c("nX&w", 125, 141) + s(-216, "47BL", -227) + "y"](i, !0, [s(-227, "O]&a", -228) + "pt", t(1299, "O]&a", 1292, 1283) + "pt"]), n = Uint8Array[o("9Qny", 316, 333)](Array(8691 + -127 * -64 + -3 * 5601)[c("D[N8", 158, 142)](-2447 * -2 + 2569 + -1 * 7463));
  function o(d, g, C, u, h) {
    return le(C - 26, d);
  }
  const r = window[x("pg0y", 1103, 1108, 1088, 1085) + "o"][o("VhhM", 333, 346) + t(1326, "O]&a", 1339, 1318) + t(1328, "9vNS", 1300, 1317)](n), a = {};
  function s(d, g, C, u, h) {
    return le(C - -544, g);
  }
  a[s(-237, "g#ie", -231)] = e, a.iv = r;
  function c(d, g, C, u, h) {
    return le(C - -158, d);
  }
  return a;
}
function le(x, i) {
  const t = ii();
  return le = function(e, n) {
    e = e - (98 * -74 + 1 * -4789 + -13 * -949);
    let o = t[e];
    if (le.tbboMX === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", h = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          h += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let u = [], h = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          h = (h + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[h], u[h] = m;
        l = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, h = (h + u[l]) % 256, m = u[l], u[l] = u[h], u[h] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[h]) % 256]);
        return A;
      };
      le.JuHYWc = d, x = arguments, le.tbboMX = !0;
    }
    const a = t[6928 * 1 + 661 + -7589], s = e + a, c = x[s];
    return c ? o = c : (le.KUHKsO === void 0 && (le.KUHKsO = !0), o = le.JuHYWc(o, n), x[s] = o), o;
  }, le(x, i);
}
async function EI(x) {
  const { iv: i, key: t } = await VI();
  function e(g, C, u, h, m) {
    return le(g - -59, m);
  }
  const n = {};
  n[d(-168, "zkYf", -169, -157, -175)] = Hc, n.iv = i;
  function o(g, C, u, h, m) {
    return le(u - -184, g);
  }
  const r = await window[d(-178, "A[iX", -158, -171, -168) + "o"][a(843, 840, "3962", 855) + "e"][e(257, 270, 241, 257, "O]&a") + "pt"](n, t, x);
  function a(g, C, u, h, m) {
    return le(h - 519, u);
  }
  const s = await window[o("9vNS", 133, 142) + "o"][a(851, 865, "9vNS", 854) + "e"][o("($am", 143, 125) + a(857, 871, "T[c[", 856)](e(249, 239, 234, 236, "A)mf"), t), c = {};
  c[e(255, 256, 275, 235, "g5Xl") + "ge"] = r, c[e(279, 276, 292, 288, "5i*v")] = s, c.iv = i;
  function d(g, C, u, h, m) {
    return le(m - -472, C);
  }
  return c;
}
(function(x, i) {
  function t(r, a, s, c, d) {
    return Qe(c - 544, a);
  }
  const e = x();
  function n(r, a, s, c, d) {
    return Qe(r - 831, a);
  }
  function o(r, a, s, c, d) {
    return Qe(c - -184, r);
  }
  for (; ; )
    try {
      if (parseInt(o("cVJH", 68, 85, 80, 74)) / 1 + -parseInt(t(800, "GJd#", 801, 793, 785)) / 2 + parseInt(o("H^Cq", 68, 68, 76, 72)) / 3 * (parseInt(t(783, "nl*7", 800, 789, 798)) / 4) + parseInt(o("fK9w", 64, 68, 70, 65)) / 5 + parseInt(n(1071, "x@x]", 1081, 1069, 1074)) / 6 * (-parseInt(n(1087, ")Sv2", 1078, 1096, 1098)) / 7) + -parseInt(n(1070, "B2hi", 1071, 1062, 1065)) / 8 + -parseInt(t(782, "ufo$", 783, 788, 784)) / 9 * (parseInt(t(786, "(HE^", 781, 792, 801)) / 10) === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(oi, 1 * 996313 + -25671 * -5 + -525041 * 1);
function Qe(x, i) {
  const t = oi();
  return Qe = function(e, n) {
    e = e - (-5393 + -975 * -1 + 12 * 388);
    let o = t[e];
    if (Qe.gltGhc === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", h = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          h += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let u = [], h = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          h = (h + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[h], u[h] = m;
        l = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, h = (h + u[l]) % 256, m = u[l], u[l] = u[h], u[h] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[h]) % 256]);
        return A;
      };
      Qe.fvRJGg = d, x = arguments, Qe.gltGhc = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? o = c : (Qe.jvxRiB === void 0 && (Qe.jvxRiB = !0), o = Qe.fvRJGg(o, n), x[s] = o), o;
  }, Qe(x, i);
}
function LI(x) {
  function i(o, r, a, s, c) {
    return Qe(c - -444, o);
  }
  const t = new ArrayBuffer(x[n(-539, -535, -524, -524, "#p5p") + "h"]), e = new Uint8Array(t);
  for (let o = 89 * 1 + 1624 + 1 * -1713, r = x[i("xVZP", -189, -178, -198, -187) + "h"]; o < r; o++)
    e[o] = x[n(-543, -532, -536, -540, "GZhY") + i("$hm3", -207, -189, -192, -201)](o);
  function n(o, r, a, s, c) {
    return Qe(r - -794, c);
  }
  return t;
}
function oi() {
  const x = ["W6PxW7dcKZVcP05ocIa", "W78LtZ3cNW", "W63dGmk/EGiRW73cPJ7cMX9hDG", "WR3cTCork8oM", "iMq0WQe8bSkwW78qrq", "W7JdSr3dN8k2", "i8oUWQnQaG", "nmo9wmoDW57dRqLzlmknwCobtq", "WPVdK8kvCCkDq2NdJf1FxCkVAa", "W6ddOmkpFSkQgMHGW7hcVvmnW6u", "W5NdUsldGqj7EwS9j8kNl8oQ", "WQRcHSolmWvBaCkyW7O/", "xI7cVmkzW7O4WQ/dSCkgpG", "WQDZf2RdNSk8ySkFoCo/da", "emk3WPVdIfC", "sxVdL8o2WOZcLcVcK8kXWO4P", "W51Eww3cLs3dKmkPbtu", "WO1MW6Lky8o3cSk9WQFcPsWcCq", "W7pdK8knrIy", "W6JdH8k4FLPuWPxcLctcQW", "W4mOWPNdSKzXWPGrnLmyW5VdIW", "igeYWQGyaSklW5GSCa", "WQxdUgCRwxXQye7cGW", "hZZcJSkN", "EKiLgmka", "AWdcVCkkW6RcNSk5CIpdTCkZWQnG", "W6ZdG8k4DM1nWP/cIaFcOq"];
  return oi = function() {
    return x;
  }, oi();
}
(function(x, i) {
  function t(a, s, c, d, g) {
    return be(s - 574, g);
  }
  function e(a, s, c, d, g) {
    return be(a - 188, c);
  }
  function n(a, s, c, d, g) {
    return be(a - -115, s);
  }
  function o(a, s, c, d, g) {
    return be(g - -76, s);
  }
  const r = x();
  for (; ; )
    try {
      if (-parseInt(o(339, "FDWx", 225, 241, 258)) / 1 + parseInt(o(143, "vtNY", 179, 109, 199)) / 2 + -parseInt(o(143, "3]iJ", -41, 138, 69)) / 3 * (-parseInt(t(786, 781, 793, 676, "Mrzu")) / 4) + parseInt(n(216, "d*59", 320, 254, 312)) / 5 * (-parseInt(e(360, 356, "ulzS", 281, 470)) / 6) + parseInt(e(413, 498, "tPpA", 339, 321)) / 7 + -parseInt(t(779, 721, 822, 806, "mxIl")) / 8 + parseInt(e(352, 385, "bMD0", 325, 417)) / 9 === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ri, -182181 + -12091 * 43 + 44321 * 25);
function NI() {
  function x(d, g, C, u, h) {
    return be(u - 360, d);
  }
  const i = a(-5, 77, 193, ")%SN", 87) + a(81, -36, -116, "zogw", -20) + a(91, 67, 87, "xlA[", 58) + r(564, 439, "eIq*", 488, 519) + r(676, 457, "ulzS", 562, 565) + r(612, 673, "i0r@", 570, 579) + n(-376, "%KlF", -246, -309, -279) + r(562, 467, "*Qg5", 570, 525) + r(316, 476, "SM8h", 451, 413) + n(-68, "bMD0", -4, -194, -91) + x("tm1l", 409, 444, 494) + o(-5, -143, -71, "ZVkT") + n(-242, "G6*m", -212, -194, -293) + r(625, 575, "%KlF", 521, 573) + n(-141, "tm1l", -119, -165, -221) + a(90, 119, 111, "NhPz", 24) + o(-64, -82, -20, "SM8h") + n(-213, "B]1V", -150, -234, -119) + a(131, 199, 93, "i0r@", 85) + a(-65, -76, -125, "G(q]", -15) + x("xlA[", 615, 519, 506) + n(-198, "h%%u", -104, -152, -156) + n(-162, "zogw", -125, -128, -148) + a(91, 110, 111, ")BgD", 148) + o(-134, 71, -26, "Gzw9") + a(128, -91, 7, "(PFs", 20) + o(-206, -155, -114, "h%%u") + o(-31, -45, -108, "xlA[") + r(397, 474, "bMD0", 346, 435) + a(135, -4, 146, "ulzS", 93) + a(252, 65, 131, "e1Y]", 142) + a(109, 86, -17, "GXWk", 38) + x("SM8h", 655, 475, 584) + a(48, 174, 131, "fDL^", 120) + o(11, -84, 8, "nc3m") + a(91, 169, 40, "Mrzu", 62) + x("vtNY", 529, 597, 618) + r(526, 676, "tPpA", 540, 575) + o(-146, -70, -50, "h%%u") + r(555, 507, "B]1V", 507, 564) + x("eIq*", 605, 532, 569) + a(38, -46, 78, "ZVkT", -4) + n(-130, "FDWx", -162, -270, -166) + n(-334, "xlA[", -265, -270, -251) + r(513, 486, "ZPx%", 483, 547) + o(57, 43, -37, "GXWk") + x("tPpA", 522, 613, 624) + x("@QeP", 572, 594, 580) + n(-78, "[o$r", -110, -159, -109) + x("SM8h", 564, 385, 466) + x("fDL^", 418, 509, 480) + a(-53, 68, 21, "dzwv", 34) + o(-76, -30, -72, "hIr4") + o(-238, -91, -158, "3R@a") + a(246, 165, 205, "ucES", 184) + n(-173, ")BgD", -313, -289, -280) + x("hIr4", 644, 589, 529) + n(-358, "pA2e", -180, -209, -273) + r(398, 413, "iPsx", 484, 423) + o(1, -114, -76, "@QeP") + o(-158, -60, -172, "iPsx") + r(393, 497, ")%SN", 347, 394) + n(-255, "ZVkT", -161, -225, -181) + x("ZVkT", 682, 587, 680) + x(")BgD", 628, 569, 513) + a(43, 12, 151, "bMD0", 53) + o(-80, 13, -99, "3]iJ") + o(-37, 19, 17, "e1Y]") + a(215, 132, 143, "tm1l", 204) + a(-130, 2, 48, "[o$r", -18) + r(527, 524, "mxIl", 587, 577) + o(-139, -161, -199, "P08g") + x("i0r@", 616, 704, 592) + n(-313, "s5Nv", -329, -181, -256) + n(-336, "RGhh", -169, -235, -220) + a(145, 182, 46, "fUpM", 119) + n(-109, "d*59", -128, -131, -100) + a(-8, 88, 62, "ZFzZ", -3) + x("mxIl", 692, 684, 613) + o(-61, -110, -162, "GXWk") + n(-155, "zogw", -152, -147, -182) + a(80, 127, 221, "P08g", 109) + r(446, 349, "vtNY", 327, 400) + o(47, 77, -38, "dzwv") + x("zogw", 377, 561, 465) + x("*Qg5", 519, 653, 598) + r(612, 453, "vtNY", 498, 555) + n(-228, "i0r@", -364, -347, -300) + r(344, 331, "RGhh", 292, 369) + o(-147, -37, -122, "ZVkT") + a(85, 204, 131, "xlA[", 156) + x("*Qg5", 487, 529, 463) + n(-210, ")%SN", -373, -341, -302) + r(283, 416, "vtNY", 428, 390) + x("3R@a", 591, 569, 629) + n(-206, "J7$i", -228, -152, -229) + a(206, 269, 114, "Mrzu", 191) + x("ucES", 764, 635, 670) + x("P08g", 649, 570, 560) + r(584, 630, "J7$i", 639, 563) + o(-124, -142, -128, "J7$i") + n(-343, "FDWx", -215, -297, -239) + x("zogw", 392, 382, 471) + r(494, 444, "vJNt", 469, 549) + a(41, 8, -29, "FDWx", 82) + r(282, 469, "zogw", 440, 380) + n(-34, "vtNY", -168, -13, -110) + x(")BgD", 603, 507, 559) + x("P08g", 559, 617, 643) + r(457, 482, "FDWx", 316, 383) + a(124, 150, 209, "P08g", 176) + o(-70, -172, -74, "s5Nv") + r(532, 549, "vtNY", 480, 442) + x("*Qg5", 492, 660, 544) + r(535, 572, "vtNY", 502, 591) + o(4, 23, -44, "d*59") + a(206, -12, 41, "zogw", 103) + n(-37, "NhPz", -121, -184, -149) + r(384, 473, "@QeP", 511, 467) + r(460, 469, "(PFs", 390, 440) + r(418, 427, "Y2tE", 583, 498) + n(-167, "zogw", -182, -242, -175) + o(-175, -297, -183, "GXWk") + r(481, 554, "P08g", 511, 571) + a(98, -39, 24, "dzwv", 2) + o(-48, 32, -21, "NhPz") + r(428, 526, "ulzS", 511, 476) + a(203, 279, 271, "RGhh", 198) + x("%KlF", 687, 603, 621) + o(84, -111, -17, "3R@a") + a(157, 207, 132, "G6*m", 186) + x("e1Y]", 709, 707, 687) + r(490, 646, "SM8h", 508, 560) + x("B]1V", 584, 524, 609) + x("dzwv", 595, 500, 491) + r(507, 488, "(PFs", 649, 550) + x("vJNt", 745, 714, 641) + x("G6*m", 438, 569, 530) + n(-256, "J7$i", -215, -255, -289) + a(204, 188, 264, "iPsx", 152) + a(212, 42, 42, "Mrzu", 98) + r(549, 589, ")%SN", 698, 584) + x("Gzw9", 670, 670, 634) + a(-33, 131, 170, "B]1V", 64) + r(425, 481, "tm1l", 518, 480) + r(574, 588, "i0r@", 583, 514) + a(36, 56, 188, "G6*m", 123) + x("s5Nv", 510, 613, 593) + r(392, 544, "tPpA", 487, 451) + a(-57, -61, 136, "G6*m", 22) + o(-61, -23, -125, "s5Nv") + x("B]1V", 406, 516, 495) + o(-181, -293, -194, "SM8h") + x("hIr4", 426, 581, 523) + n(-362, "zogw", -387, -405, -307) + x("ZPx%", 633, 685, 576) + o(-243, -265, -197, "dzwv") + r(477, 440, "bMD0", 594, 548) + x("[o$r", 545, 683, 652) + n(-211, "%KlF", -241, -121, -234) + n(-285, "vZnQ", -355, -189, -261) + r(536, 409, "eIq*", 321, 421) + n(-326, "ulzS", -177, -162, -215) + n(-132, "vtNY", -212, -251, -193) + o(-121, -172, -112, "zogw") + a(86, 236, 177, "ZPx%", 128) + x("B]1V", 494, 552, 489) + o(43, -35, -61, "GXWk") + a(162, 276, 141, "[o$r", 190) + x("J7$i", 693, 611, 579) + o(-213, -224, -148, "3]iJ") + x("Gzw9", 465, 539, 563) + n(-137, "RGhh", -253, -178, -231) + x("mxIl", 561, 483, 501) + o(-138, 33, -73, "dzwv") + a(193, 7, 119, "GXWk", 78) + o(-42, -18, -27, ")%SN") + x("(PFs", 703, 740, 625) + r(419, 446, "nc3m", 648, 533) + n(-287, "nc3m", -198, -140, -186) + a(20, 126, 169, "tm1l", 70) + o(-11, -158, -87, "*Qg5") + o(-149, -232, -137, "vZnQ") + n(-217, "SM8h", -280, -211, -274) + x("mxIl", 580, 501, 571) + x("xlA[", 709, 675, 683) + o(-209, -245, -133, "mxIl") + a(50, -31, -19, "GXWk", 11) + o(-221, -45, -149, "bMD0") + o(-61, -105, -145, ")BgD") + o(-212, -45, -159, "*Qg5") + r(451, 586, "tPpA", 602, 553) + x("mxIl", 613, 530, 588) + r(272, 420, "hIr4", 334, 374) + o(-150, -102, -43, ")BgD") + n(-84, "ZPx%", -102, -273, -170) + o(-47, -110, -8, "3]iJ") + r(521, 423, "mxIl", 559, 455) + r(427, 387, "tPpA", 476, 402) + r(506, 480, "3R@a", 414, 524), t = window[a(2, 139, -43, "hIr4", 48)](i), e = window[a(96, 285, 121, "bMD0", 177)](t);
  function n(d, g, C, u, h) {
    return be(h - -416, g);
  }
  function o(d, g, C, u, h) {
    return be(C - -316, u);
  }
  function r(d, g, C, u, h) {
    return be(h - 262, C);
  }
  function a(d, g, C, u, h) {
    return be(h - -128, u);
  }
  const s = LI(e), c = {};
  return c[r(496, 648, "3R@a", 585, 556)] = Rc, c[x("fDL^", 614, 524, 509)] = Vl, window[o(27, -1, -89, "nc3m") + "o"][r(304, 380, "Mrzu", 273, 377) + "e"][o(-92, -71, 12, "vZnQ") + x("GXWk", 570, 604, 599)](r(479, 490, "B]1V", 381, 459), s, c, !0, [x("J7$i", 558, 584, 582) + "pt"]);
}
function be(x, i) {
  const t = ri();
  return be = function(e, n) {
    e = e - (-8527 + 89 * -12 + -373 * -26);
    let o = t[e];
    if (be.DSYJTx === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", h = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          h += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let u = [], h = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          h = (h + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[h], u[h] = m;
        l = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, h = (h + u[l]) % 256, m = u[l], u[l] = u[h], u[h] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[h]) % 256]);
        return A;
      };
      be.SDzuWG = d, x = arguments, be.DSYJTx = !0;
    }
    const a = t[6180 + 1109 * 3 + 3169 * -3], s = e + a, c = x[s];
    return c ? o = c : (be.LCpCRE === void 0 && (be.LCpCRE = !0), o = be.SDzuWG(o, n), x[s] = o), o;
  }, be(x, i);
}
async function DI(x) {
  function i(o, r, a, s, c) {
    return be(r - 751, a);
  }
  const t = await NI(), e = {};
  e[i(859, 926, "RGhh")] = Rc;
  function n(o, r, a, s, c) {
    return be(o - -938, r);
  }
  return window[i(844, 925, "G(q]") + "o"][i(1011, 1081, "J7$i") + "e"][n(-684, "vJNt") + "pt"](e, t, x);
}
function ri() {
  const x = ["q2VdRaBcJW", "gmofw0VdGq", "bgXJEae", "vCk1lCk7rq", "W4e+W7aTwa", "b3JcNCkNda", "a8oSoCoGvW", "W77dNdr+iq", "schdK8kdqG", "WP8yW4ldQMu", "W55jWQhcIxS", "c8kAW7pdTIG", "WPyRWPOzW7e", "B1bMmJW", "CMu1BSkLFbJdOCkEWP4Spa", "W59HbqRcKa", "W7pdNalcKCoj", "napcGCkSW5G", "W73cLtqedW", "WQ3cObaLbq", "aXXMyHu", "WORdP0z3qW", "W7KDW5OeW4m", "AstcK8kYW54", "W5awW53cICkK", "WRBdMMZdICkn", "W4ldKstdTSoh", "WRddPtLdsq", "j0xcU8olW7m", "WR1yWR7dS8k/", "W6ftW4FdVeW", "nGdcN8oxCW", "hmkEW6CJdW", "W77cTHJdN34gW7W", "WQD8W63dRSkW", "W6GqW4tcL8oCW7nceuVcPLTbqW", "aGu4dSod", "satdSCka", "cSkPW6ZdUc8", "W4vzW5BdT2u", "W5i0o8o5WRq", "WRiiW7xcMSkA", "WRJdQ199kq", "WR/cRCksW6dcUq", "W5ldUMFcKmkKb3pcPa01WR3dMmoh", "WRGpWO9eW48", "W54+W483WQq", "WO3cUaNdU8oR", "WOtcMCkbWQr5", "pCkoW6qSma", "W5xcUqGgca", "jgpdVqldKW", "WPpdVKHwumoDi8oJW67cJCoWWRFcGG", "WRfCWRVdMmkC", "WOldPwfPua", "W7xcMbzumW", "WRNcVXFdRgK", "p07dG2lcGq", "mmkBW6pdUbm", "WO4EW5ZcG8kq", "W6lcMxhcPWKxWO7cSY5mWQFdUa", "W7FcMbvupq", "fmovsxhdLa", "hfPmWRO", "efhdUtm", "W4auW4/dN18", "advvmCkJ", "W4VcK8kQWPFcLa", "W4lcMdZcGSo5", "WPlcUGubaG", "WQFdIxNdHSkI", "WPCCWR/dISoC", "WRy9WPXmWPu", "f25ZWQRcIG", "W5XuW5pcICks", "W54FeqRcLG", "W5C+fbFcLq", "o2RcQ8kSWO0", "umkKF8k/Cq", "WONcP8kdWOnW", "ltZdQSkuW6a", "W6PUW4hdS8k9", "W50jWQmSW58", "W7KtW5HzW58", "phzaW63cHW", "kXRcSmkn", "W5fJW68gW58", "WO4UW4RdTCkr", "j13dVSkLeG", "WOBdMHddHh8", "W7BdGr/dSCkm", "WOhcGtjcW4i", "ySorkmkbxa", "W7eBWPfQWOi", "W7RdSwfQyW", "eCoYE8o4gCopAt7cK1m3WQO", "WQjnWRRdKmkE", "WOtcOJBdLSoW", "WPvUW7ZdHfO", "WOX8WRZdGmkj", "evxcU8oApq7dUdZcMd1En8kr", "W5OZW60vuW", "WRVdGcZdIgm", "aqS+Fqe", "zs/dLmoIWR8", "WR3cHtJcMwK", "W7KRW4zcW5a", "W6ezmtpdRa", "W4azWPbDW7y", "W6xdOGddTfm", "W6G+jrtcPW", "W6NdVd3cQ8on", "W5njWQNdKwu", "uZhdL8kUW7BdVftcRSk4W6SHCCkz", "Cmkxk8k9zW", "cXeVoSol", "WO1dWQtdPSk5", "WQLcWR5YW48", "pZK8amoR", "zmoqj8kexq", "W7GpW7KRvq", "WPdcOmkoWP9G", "ASoOo8oCvq", "W6jlWRGiW5e", "WO7cL8kGW4VdTG", "guhdO8ohlG", "WQKlWOLLW7C", "WRZdTg5w", "W40yWOnsW4e", "CSoRmCoJsW", "WPlcT8k1WQLz", "W6ZcHcqHkW", "i07dMbtcHG", "W4OVWR8jW7W", "yc/dOCkAWOe", "ge3cOSkHxa", "tq7dSmkNta", "dGlcLmkhWQi", "WQCpW6pcJ2a", "eCobW4RdTZS", "W6WHWOmQbq", "WQP5WPFdJ8k+", "W5ZdHCkDdMm", "WQpdNv1lsW", "zZNcUmoIWP4", "WPJcRrNdLCoH", "W7pdRG7cVSo2", "WPhcML7dSmktWOPtsCoHWORdPNq", "W4tcUhFdOSoy", "WRpcRWtdL8kE", "WRmZW6XRW44", "WR4QW7XUW4O", "wtxcUmoxWQS", "lbPgpCkN", "W6lcSXddRmkd", "W5q6xSoRW70", "r8orkSoYqq", "W6feW6PLWRe", "W4xcUxJdNW0", "afmBmmoP", "WO57WOPTlG", "WO94W4ZcI8kq", "WPNcNwrEW6a", "WPpcKfVdTSkxWOHNu8oeWQFdPeK", "WOWhWQVcVmk7", "W6tdNsldP2XmWPy", "W4tcJGS/ma", "WOddUwjHCG", "pCkBW6e+Ba", "W7BdRSoloeK", "BdSEWP/dLcn6nG", "i3hdNCo/aG", "WOvBW4FdO8kb", "dXldUmovWPa", "W4/cIWK+wG", "W6pdUmkepve", "edjyd8og", "bM0IEGC", "WRtcTvaRW4C", "uLpcGSo3WOu", "WO1JW4S6WOi", "WP7cMcNcQSox", "W6qrW6yZ", "WOW6ySohW58", "W5XXW7VcJgi", "crRcISk9W4O", "W6HzWQhcJwu", "W6yMWR8mWRq", "E8o+WODjBg7dVM54W6tdGW", "W4afedZcMG", "AaVdQCkQW4y", "WOxdLIxcO3q", "jbVdVmoSaG", "W4pcUH4g", "W6VdKItcGSo5", "WP1iW7a7WRq", "WPNcGKFcNhO", "hNddL8oejq", "WOmMW7BdKCox", "WRxcRutdKSkt", "WRCoW7pcTmkn", "neNcNmokWPy", "o8kiW7RdSKa", "WPrWWQJdP8kl", "WQH1WRLppq", "W68UW7uQyG", "WQzKW7qVWQm", "D8oYcCkAsG", "W6aCWQ07W5m", "qbhcNmkNyeNcImovcmocW6hcNG", "pgCCEqu", "W5LNW6FdTSkX", "jGOviCkk", "W7FcOJu1wW", "a2f0WRVcVa", "W7xcKxddG1i", "WPVcRCknWR3cQa", "W43cNchdTSo5", "W74LjblcSG", "W70rWPHndSolW6zy", "W4KwW5L8W6C", "W53cKxxdRGO", "W4nPWOJcJdW2adudW6qA", "W542W7WzW54", "WOVcK8oisI4XcJddI0dcTmoBW7a", "uCorESoWvq", "WRL4W6NdNfG", "kg1fWPBcIq", "a8oOoSoLwG", "q8oCkCoywq", "WPz/W5i8WPC", "ACo0hCoIxq"];
  return ri = function() {
    return x;
  }, ri();
}
(function(x, i) {
  function t(a, s, c, d, g) {
    return Me(g - 582, c);
  }
  function e(a, s, c, d, g) {
    return Me(g - 103, s);
  }
  function n(a, s, c, d, g) {
    return Me(c - 662, a);
  }
  const o = x();
  function r(a, s, c, d, g) {
    return Me(c - 447, g);
  }
  for (; ; )
    try {
      if (-parseInt(r(792, 791, 800, 804, "R&AJ")) / 1 + -parseInt(r(800, 796, 797, 789, "Ctux")) / 2 + parseInt(r(802, 806, 807, 803, "4ip7")) / 3 + -parseInt(r(800, 792, 796, 791, "QF@#")) / 4 + parseInt(r(800, 806, 809, 803, "Ctux")) / 5 + parseInt(n("cKKa", 1030, 1023, 1029, 1029)) / 6 * (parseInt(e(456, "on1Z", 442, 446, 451)) / 7) + parseInt(t(924, 932, "WwFW", 938, 933)) / 8 === i) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(ai, -522900 + -15014 * -98);
function Me(x, i) {
  const t = ai();
  return Me = function(e, n) {
    e = e - 348;
    let o = t[e];
    if (Me.wiQJlo === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", h = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          h += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let u = [], h = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          h = (h + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[h], u[h] = m;
        l = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, h = (h + u[l]) % 256, m = u[l], u[l] = u[h], u[h] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[h]) % 256]);
        return A;
      };
      Me.obGLEI = d, x = arguments, Me.wiQJlo = !0;
    }
    const a = t[-2 * 227 + 2 * -3455 + -7364 * -1], s = e + a, c = x[s];
    return c ? o = c : (Me.pbfdFz === void 0 && (Me.pbfdFz = !0), o = Me.obGLEI(o, n), x[s] = o), o;
  }, Me(x, i);
}
function ai() {
  const x = ["W4/cTYjofH1WWOX1DWboWQi", "D8ouW7WjpCk8kIeYWQhdG8ok", "W4BcJmkM", "BsFdQmocFttdMmoIW6Xccq", "WRG9W5HdW5VcGci2WPO", "WOGcWOBcQSkjW5/dIuFcMmkskszV", "W4ZcTYrpgbn9WPzIzaDWWRm", "WPRdI8o3hSo+cu5CW5FcKmkSwq4/", "CSoXaW3dJmkTtSosWOm", "W4K4tSkFjMT6WR9WzmoEW55Y", "cmolW73dSthdL8ktWQjHW6acW4ZdIq", "W5NdKY95WR9+FsSpiCo+WP4w", "w0VcRCkenqzuWP5PW6ePiGa", "WPyyW41YW60JW6rti34aW77cUN8", "vvSggmkT", "WRZcHKLRcSkyW49DvLtdJCkZW7W", "WQeosmkmWO7cJrldSSk8WRno", "n8kdDCoNW5tdHxbHvszvW5q"];
  return ai = function() {
    return x;
  }, ai();
}
async function FI(x) {
  const { iv: i, key: t, message: e } = await EI(x), n = await DI(t);
  function o(s, c, d, g, C) {
    return Me(g - 96, C);
  }
  const r = {};
  function a(s, c, d, g, C) {
    return Me(C - -369, c);
  }
  return r[o(457, 464, 454, 460, "Z%d4")] = n, r.iv = i, r[a(-13, "k(9C", -3, -11, -11) + "ge"] = e, r;
}
(function(x, i) {
  function t(a, s, c, d, g) {
    return Be(s - -158, a);
  }
  function e(a, s, c, d, g) {
    return Be(c - 353, g);
  }
  function n(a, s, c, d, g) {
    return Be(g - 436, a);
  }
  function o(a, s, c, d, g) {
    return Be(c - -766, d);
  }
  const r = x();
  for (; ; )
    try {
      if (parseInt(e(698, 700, 712, 720, "0mF9")) / 1 * (parseInt(o(-410, -403, -409, "XFZL", -398)) / 2) + parseInt(n("@D80", 796, 800, 788, 798)) / 3 + -parseInt(n("MP@Q", 788, 800, 799, 796)) / 4 + parseInt(o(-433, -427, -427, "MP@Q", -435)) / 5 + parseInt(o(-409, -415, -422, "P]BB", -424)) / 6 + -parseInt(t("3cZ3", 182, 180, 174, 173)) / 7 * (-parseInt(e(723, 717, 716, 709, "XFZL")) / 8) + -parseInt(o(-421, -411, -416, "jr@i", -408)) / 9 === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(si, -163263 + -243717 * -1 + 135257);
function Be(x, i) {
  const t = si();
  return Be = function(e, n) {
    e = e - (-7764 * -1 + -3656 + -10 * 377);
    let o = t[e];
    if (Be.CbThnV === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", h = "";
        for (let m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (let m = 0, A = u.length; m < A; m++)
          h += "%" + ("00" + u.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let u = [], h = 0, m, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          h = (h + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[h], u[h] = m;
        l = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, h = (h + u[l]) % 256, m = u[l], u[l] = u[h], u[h] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[h]) % 256]);
        return A;
      };
      Be.yCCGIK = d, x = arguments, Be.CbThnV = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? o = c : (Be.oubaPp === void 0 && (Be.oubaPp = !0), o = Be.yCCGIK(o, n), x[s] = o), o;
  }, Be(x, i);
}
async function YI(x) {
  function i(a, s, c, d, g) {
    return Be(a - 418, d);
  }
  const t = await window[e("oXn3", 666) + "o"][r(1334, 1339, 1339, "kf5L") + "e"][o(105, 103, 95, "usDK") + "t"](o(102, 96, 112, "kf5L"), x);
  function e(a, s, c, d, g) {
    return Be(s - 310, a);
  }
  function n(a, s, c, d, g) {
    return Be(a - 524, d);
  }
  function o(a, s, c, d, g) {
    return Be(a - -243, d);
  }
  function r(a, s, c, d, g) {
    return Be(c - 997, d);
  }
  return Array[r(1360, 1351, 1348, "S^F2")](new Uint8Array(t))[i(784, 782, 773, "Go28")]((a) => a[o(112, 117, 100, "2uY[") + i(779, 778, 780, "8Ndj")](5855 + 5839 * -1)[o(109, 104, 99, "5eCB") + n(889, 897, 891, "GRG2")](-7488 + 3 * 425 + -55 * -113, "0"))[e("Go28", 664)]("");
}
function si() {
  const x = ["gCoIW43cUG8", "W6lcHCokW6ZcJSkEwG", "EmktWRxcOaPaW5RdNColW7dcImo6sG", "bCkiWP0sta", "E8oMxCoaW5ZdP8o1W4JcR2ZdUq", "F8k+DCotWRpcN8o3W4dcMCkKWQOgwq", "W57dSHHW", "dv3cKmkqWPa", "j8o2omk8W6qtdH/cLG", "v3RcHtC", "hCksbSojma", "W4KpW6KZW5O", "jSo0vSk/W50ygtS", "WQfKW7NdMfBdLgNcUW", "nvhdVCoWg3jkW65k", "WQnJWPBcMaZcLuZcMmosWOlcSXu", "hmkiwW", "zblcTSoBW75OtSoousjR", "lCkfy8k+W5ezgG", "W6VdSCkwWQFdKSoBewPbE8oTWR9N", "WRJcLCkh", "uhtcNa", "w8kGCWXVWQX4WR7cPgBdPZrT", "WQnNWPJcNa3cNINcHSodWQxcJIa0", "CwiyW4RcOZxcP8kbkCkwWOfKga", "WOaWWOCkW6/cI8kqWRK/qJqx", "oCoFW67dO1i", "iYjcbmkNWRxcQ0RdJSkin1FcLG", "nCkQWOy5ESkSmHGbtSoDWQzn"];
  return si = function() {
    return x;
  }, si();
}
function ut(x, i) {
  var t = ci();
  return ut = function(e, n) {
    e = e - (-115 * 27 + -1 * 8747 + 12328);
    var o = t[e];
    if (ut.xwVXym === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", h = "", m = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = m % 4 ? A * 64 + l : l, m++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          l = C.indexOf(l);
        for (var H = 0, X = u.length; H < X; H++)
          h += "%" + ("00" + u.charCodeAt(H).toString(16)).slice(-2);
        return decodeURIComponent(h);
      }, a = function(g, C) {
        var u = [], h = 0, m, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          h = (h + u[l] + C.charCodeAt(l % C.length)) % 256, m = u[l], u[l] = u[h], u[h] = m;
        l = 0, h = 0;
        for (var W = 0; W < g.length; W++)
          l = (l + 1) % 256, h = (h + u[l]) % 256, m = u[l], u[l] = u[h], u[h] = m, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[h]) % 256]);
        return A;
      };
      ut.spGBNt = a, x = arguments, ut.xwVXym = !0;
    }
    var s = t[-9526 + -22 * -433], c = e + s, d = x[c];
    return d ? o = d : (ut.TYqkmw === void 0 && (ut.TYqkmw = !0), o = ut.spGBNt(o, n), x[c] = o), o;
  }, ut(x, i);
}
(function(x, i) {
  var t = x();
  function e(a, s, c, d, g) {
    return ut(c - -649, a);
  }
  function n(a, s, c, d, g) {
    return ut(g - -577, a);
  }
  function o(a, s, c, d, g) {
    return ut(g - -710, c);
  }
  for (; ; )
    try {
      var r = parseInt(o(-241, -241, "7@c)", -234, -233)) / 1 + -parseInt(n("p^qy", -84, -80, -85, -89)) / 2 * (-parseInt(n("Zz#l", -95, -91, -89, -95)) / 3) + -parseInt(e("FE%2", -181, -173, -165, -165)) / 4 + parseInt(e("x!l4", -170, -165, -166, -167)) / 5 * (parseInt(e("(T[X", -173, -168, -165, -175)) / 6) + -parseInt(o(-222, -219, "(T[X", -219, -227)) / 7 + -parseInt(n("qITp", -87, -82, -89, -86)) / 8 + parseInt(o(-218, -225, "GBmH", -217, -220)) / 9;
      if (r === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(ci, 195993 + 3058 * -55 + -3324 * -46);
function ci() {
  var x = ["W6hcNSojWRddKCkXW5mMoSobW4BcLXS", "gKRcP8oAWRFcTrxdKq", "W7FcOSkMWOddVhhcStNdHq", "eKJdHCkwW4ldNK3dHvLunv3cUq", "f8oxWPRcTSo+W4ldUmkdW4/cUgO", "q8k7BCoVuZFcIwq", "gSoswCoCcmoDWPddLmkMW5m", "W6PRvSoxWRnMW7VdJYiQW4S", "WQq0omkPdb48W5dcGai", "kHTgWPpdVCkglMdcSYVcJSk1gq", "e8owWQ7dVSkuhY3dPtWRW4zazW", "WOhcO8kkWRHqW4S/WOZcQSk1WRVcGsW", "a31yj2NcMYhdPCkHfGm", "CNfygcVcHCoGWRxcLLpcOmooWPC", "W4mtWQqCW44SW6/dGLebWQC", "cmk5gq7dNmoBqXPG", "ASoTW6xdOYlcGISfWOncyZ/cIq"];
  return ci = function() {
    return x;
  }, ci();
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
  const { Content: i } = p0, { iv: t, key: e, message: n } = await FI(x), o = { token: new Uint8Array(e), iv: t, schemaVersion: Tl, bytes: new Uint8Array(n) }, r = i.verify(o);
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
async function XI(x, i) {
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
    var a = "./this.program", s = !(-1 * 2549 + -1174 * -6 + 14 * -321), c = !(5 * 543 + -6273 + 3559 * 1);
    s = typeof window == "object", c = typeof importScripts == "function";
    var d = "", g;
    (s || c) && (c ? d = self.location.href : document.currentScript && (d = document.currentScript.src), x && (d = x), 505 * -11 + 5 * 578 + 2665 !== d.indexOf("blob:") ? d = d.substr(0, d.lastIndexOf("/") + (-8167 * -1 + -5431 * 1 + -2735)) : d = "", c && (g = function(I) {
      var f = new XMLHttpRequest();
      return f.open("GET", I, !(2 * -4111 + -8010 + 16233 * 1)), f.responseType = "arraybuffer", f.send(null), new Uint8Array(f.response);
    }));
    var C = t.printErr || console.warn.bind(console);
    for (r in o) o.hasOwnProperty(r) && (t[r] = o[r]);
    o = null, t.thisProgram && (a = t.thisProgram);
    var u;
    t.wasmBinary && (u = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && tt("no native wasm support detected");
    var h, m = !(202 * -24 + -47 * 101 + 4 * 2399);
    function A(I) {
      I || tt("Assertion failed: undefined");
    }
    var l = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (-12130 + 1 * 12130);
    function W(I, f, b) {
      var y = Re;
      if (0 < b) {
        b = f + b - (7087 * 1 + 6906 + -13992);
        for (var w = 0; w < I.length; ++w) {
          var S = I.charCodeAt(w);
          if (27279 + -283 * -99 <= S && 84022 + 3 * -8893 >= S) {
            var k = I.charCodeAt(++w);
            S = 43207 + -9876 * -6 + 33 * -1119 + ((S & -4922 + -12 * 799 + -2219 * -7) << 535 * 7 + 7692 + -11427) | k & 359 * 26 + -1476 + -1367 * 5;
          }
          if (127 >= S) {
            if (f >= b) break;
            y[f++] = S;
          } else {
            if (2292 + -1 * 245 >= S) {
              if (f + (3 * 1949 + -277 * -13 + 1 * -9447) >= b) break;
              y[f++] = -12 * -149 + 3483 + -5079 | S >> 910 + -16 * -24 + -1288;
            } else {
              if (5 * -16505 + 22233 * -1 + 1 * 170293 >= S) {
                if (f + (-921 * -2 + 10 * -259 + -30 * -25) >= b) break;
                y[f++] = 3866 + -1214 * 3 | S >> -5 * -1203 + -1 * -8117 + -14120;
              } else {
                if (f + (-4326 + -111 * -39) >= b) break;
                y[f++] = 59 + -181 * -1 | S >> 18, y[f++] = 2138 + -1 * -9857 + -11867 * 1 | S >> -13 * -761 + 879 + -10760 & 2360 + 6 * 1173 + 9335 * -1;
              }
              y[f++] = -599 * -14 + -9916 + 1658 | S >> -307 * -13 + 2 * -4199 + -1 * -4413 & 63;
            }
            y[f++] = -41 * -239 + 3 * -2133 + 1636 * -2 | S & 63;
          }
        }
        y[f] = 14 * -609 + 10 * -194 + 5233 * 2;
      }
    }
    var H = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-1 * 5983 + -669 + -4 * -1663);
    function X(I, f) {
      for (var b = I >> 1, y = b + f / (4 * -1205 + 6184 * -1 + 11006); !(b >= y) && Jt[b]; ) ++b;
      if (b <<= -9 * 357 + -51 * -161 + -19 * 263, -7894 * -1 + 2074 + -9936 < b - I && H) return H.decode(Re.subarray(I, b));
      for (b = -8061 + -3 * -2687, y = ""; ; ) {
        var w = Vt[I + 2 * b >> 1];
        if (1 * -5013 + -1667 * -1 + 239 * 14 == w || b == f / (-1550 + -8 * -194)) return y;
        ++b, y += String.fromCharCode(w);
      }
    }
    function _(I, f, b) {
      if (b === void 0 && (b = -2508059178 + -1 * -4655542825), -365 * 4 + 2295 + -833 > b) return 2006 + -1 * 2006;
      b -= 55 * -31 + 2870 + -1163 * 1;
      var y = f;
      b = b < 2 * I.length ? b / (4374 + -1 * -2341 + -6713) : I.length;
      for (var w = -34 * 251 + 1621 * -1 + 3 * 3385; w < b; ++w) Vt[f >> -949 + -2 * 4252 + 9454] = I.charCodeAt(w), f += -5082 + 1 * -3083 + 8167;
      return Vt[f >> -515 * 4 + 1 * 5739 + -3678] = 0, f - y;
    }
    function j(I) {
      return (-1 * 8344 + 1 * 7297 + -1 * -1049) * I.length;
    }
    function Z(I, f) {
      for (var b = -1910 + -5 * -382, y = ""; !(b >= f / (-4703 * -2 + -6147 + -3255)); ) {
        var w = ke[I + 4 * b >> 2];
        if (w == 0) break;
        ++b, -3 * 7051 + 29907 + 28391 * 2 <= w ? (w -= 114872 + 1093 * 83 + -140055, y += String.fromCharCode(-1 * -39773 + -258 * -55 + 1333 | w >> -59 * -116 + -8243 + 1409 * 1, 163 * -439 + 2 * -466 + 128809 * 1 | w & -2078 * -4 + 7572 * -1 + 1 * 283)) : y += String.fromCharCode(w);
      }
      return y;
    }
    function z(I, f, b) {
      if (void (21 * -103 + -3 * 1527 + -4 * -1686) === b && (b = -207 * -13609563 + 33 * -112017651 + 3026886589), -529 * -1 + 3435 * 1 + -3960 > b) return 162 * 16 + -5229 + 879 * 3;
      var y = f;
      b = y + b - (-8539 * -1 + -8125 + -410);
      for (var w = 0; w < I.length; ++w) {
        var S = I.charCodeAt(w);
        if (38426 * -1 + -1 * 105836 + 199558 <= S && -43896 + 29 * 3491 >= S) {
          var k = I.charCodeAt(++w);
          S = -1 * -2749 + 2 * -47282 + 157351 + ((S & -5184 + -3 * -2069) << -556 * 17 + 698 + 2191 * 4) | k & -2749 + -2 * -3785 + -3798;
        }
        if (ke[f >> 2532 + -1 * -9767 + -12297] = S, f += 1 * 1555 + 1131 * -1 + -420, f + (5 * -262 + 1 * 4723 + -3409) > b) break;
      }
      return ke[f >> -5421 + -762 * 12 + 14567] = 0, f - y;
    }
    function U(I) {
      for (var f = -2265 * -1 + -1500 + -765, b = 433 * -1 + -1632 * 6 + -25 * -409; b < I.length; ++b) {
        var y = I.charCodeAt(b);
        1423 * 5 + -53 * -136 + 1 * 40973 <= y && 57343 >= y && ++b, f += 4;
      }
      return f;
    }
    var q, Ne, Re, Vt, Jt, ke, ct, Jn, A0;
    function tn(I) {
      q = I, t.HEAP8 = Ne = new Int8Array(I), t.HEAP16 = Vt = new Int16Array(I), t.HEAP32 = ke = new Int32Array(I), t.HEAPU8 = Re = new Uint8Array(I), t.HEAPU16 = Jt = new Uint16Array(I), t.HEAPU32 = ct = new Uint32Array(I), t.HEAPF32 = Jn = new Float32Array(I), t.HEAPF64 = A0 = new Float64Array(I);
    }
    var et = t.INITIAL_MEMORY || 399 * 58531 + 2 * -8967059 + 1057 * 10745, Bt = {};
    Bt.initial = et / (-37077 + 8 * -1646 + -1 * -115781), Bt.maximum = 32768, t.wasmMemory ? h = t.wasmMemory : h = new WebAssembly.Memory(Bt), h && (q = h.buffer), et = q.byteLength, tn(q);
    var Et = [], Ke = [], nn = [], y0 = [];
    function v0() {
      var I = t.preRun.shift();
      Et.unshift(I);
    }
    var _e = -499 * 19 + 8217 + 1264, Ct = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function tt(I) {
      throw t.onAbort && t.onAbort(I), C(I), m = !(-127 * 1 + -6356 + 6483), I = new WebAssembly.RuntimeError("abort(" + I + "). Build with -s ASSERTIONS=1 for more info."), n(I), I;
    }
    function Ut(I) {
      var f = gt;
      return String.prototype.startsWith ? f.startsWith(I) : 4578 + -7 * 654 === f.indexOf(I);
    }
    function ht() {
      return Ut("data:application/octet-stream;base64,");
    }
    var gt = "sam.wasm";
    if (!ht()) {
      var Qt = gt;
      gt = t.locateFile ? t.locateFile(Qt, d) : d + Qt;
    }
    function dt() {
      try {
        if (u) return new Uint8Array(u);
        if (g) return g(gt);
        throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        tt(I);
      }
    }
    function Tg() {
      var I = {};
      return I.credentials = "same-origin", u || !s && !c || typeof fetch != "function" || Ut("file://") ? Promise.resolve().then(dt) : fetch(gt, I).then(function(f) {
        if (!f.ok) throw "failed to load wasm binary file at '" + gt + "'";
        return f.arrayBuffer();
      }).catch(function() {
        return dt();
      });
    }
    function Un(I) {
      for (; -631 * -10 + 8723 + -15033 < I.length; ) {
        var f = I.shift();
        if (typeof f == "function") f(t);
        else {
          var b = f.Ba;
          typeof b == "number" ? f.ta === void 0 ? ki("v", b)() : ki("vi", b)(f.ta) : b(void (-1066 + 5 * 81 + -1 * -661) === f.ta ? null : f.ta);
        }
      }
    }
    function ki(I, f) {
      var b = [];
      return function() {
        b.length = arguments.length;
        for (var y = -1 * 7468 + -3 * 2569 + -5 * -3035; y < arguments.length; y++) b[y] = arguments[y];
        return b && b.length ? t["dynCall_" + I].apply(null, [f].concat(b)) : t["dynCall_" + I].call(null, f);
      };
    }
    function Vg(I) {
      this.da = I - (-2528 + -3371 * -1 + -827), this.Oa = function(f) {
        ke[this.da + (133 + 80 * -125 + 9875) >> -4429 * 2 + -5 * 1137 + 14545] = f;
      }, this.La = function(f) {
        ke[this.da + (967 + -1 * 967) >> 3880 + 2 * -3036 + 2194] = f;
      }, this.Ma = function() {
        ke[this.da + (4919 + 88 * -15 + -3595) >> 47 * -57 + 1 * -8431 + 11112] = 0;
      }, this.Ka = function() {
        Ne[this.da + (8653 + -8641 * 1) >> -1545 + -3 * -515] = -1 * 2697 + 4343 * 2 + -5989 * 1;
      }, this.Na = function() {
        Ne[this.da + (-1 * -6337 + 879 + -21 * 343) >> -947 * 8 + -2005 + 1 * 9581] = 571 * -13 + 44 * 43 + 5531;
      }, this.Fa = function(f, b) {
        this.Oa(f), this.La(b), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Qn() {
      return -125 * 25 + -2859 * -3 + -5452 < Qn.xa;
    }
    function Oi(I) {
      switch (I) {
        case -4329 * -1 + 69 * 5 + -4673 * 1:
          return 0;
        case 1051 * -9 + 9 * 116 + 8417:
          return 7393 + -2464 * 3;
        case 6103 + -53 * 113 + -110:
          return 1232 + -123 * 10;
        case 1628 + 1 * -731 + -7 * 127:
          return 3 * -471 + 8053 + -6637 * 1;
        default:
          throw new TypeError("Unknown type size: " + I);
      }
    }
    var Pr = void (-1238 + -1877 * 2 + 832 * 6);
    function De(I) {
      for (var f = ""; Re[I]; ) f += Pr[Re[I++]];
      return f;
    }
    var W0 = {}, zt = {}, zn = {};
    function Zi(I) {
      if (void (-13 * 621 + 8959 + -886 * 1) === I) return "_unknown";
      I = I.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = I.charCodeAt(-7300 + -41 * -239 + -2499);
      return 48 <= f && -61 * 19 + 401 * 5 + 789 * -1 >= f ? "_" + I : I;
    }
    function Hi(I, f) {
      return I = Zi(I), new Function("body", "return function " + I + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(f);
    }
    function Ri(I) {
      var f = Error, b = Hi(I, function(y) {
        this.name = I, this.message = y, y = Error(y).stack, y !== void 0 && (this.stack = this.toString() + `
` + y.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return b.prototype = Object.create(f.prototype), b.prototype.constructor = b, b.prototype.toString = function() {
        return void (-1 * 3259 + -17 * -507 + -335 * 16) === this.message ? this.name : this.name + ": " + this.message;
      }, b;
    }
    var w0 = void (67 * -73 + -3175 * -2 + -1459 * 1);
    function J(I) {
      throw new w0(I);
    }
    var Tr = void (-8914 + -19 * -521 + -985 * 1);
    function qn(I) {
      throw new Tr(I);
    }
    function S0(I, f, b) {
      function y(G) {
        G = b(G), G.length !== I.length && qn("Mismatched type converter count");
        for (var R = 0; R < I.length; ++R) Gt(I[R], G[R]);
      }
      I.forEach(function(G) {
        zn[G] = f;
      });
      var w = Array(f.length), S = [], k = 0;
      f.forEach(function(G, R) {
        zt.hasOwnProperty(G) ? w[R] = zt[G] : (S.push(G), W0.hasOwnProperty(G) || (W0[G] = []), W0[G].push(function() {
          w[R] = zt[G], ++k, k === S.length && y(w);
        }));
      }), 77 * -46 + -6825 + 10367 === S.length && y(w);
    }
    function Gt(I, f, b) {
      if (b = b || {}, !("argPackAdvance" in f)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var y = f.name;
      if (I || J('type "' + y + '" must have a positive integer typeid pointer'), zt.hasOwnProperty(I)) {
        if (b.Ea) return;
        J("Cannot register type '" + y + "' twice");
      }
      zt[I] = f, delete zn[I], W0.hasOwnProperty(I) && (f = W0[I], delete W0[I], f.forEach(function(w) {
        w();
      }));
    }
    function Eg(I) {
      var f = {};
      return f.count = I.count, f.oa = I.oa, f.pa = I.pa, f.da = I.da, f.fa = I.fa, f.ga = I.ga, f.ha = I.ha, f;
    }
    function Ki(I) {
      J(I.A.fa.ea.name + " instance already deleted");
    }
    var Pi = !(175 * 36 + -1105 * 8 + 2541);
    function Vr() {
    }
    function Er(I) {
      --I.count.value, -443 * 6 + 541 * -8 + 6986 === I.count.value && (I.ga ? I.ha.na(I.ga) : I.fa.ea.na(I.da));
    }
    function xn(I) {
      return typeof FinalizationGroup > "u" ? (xn = function(f) {
        return f;
      }, I) : (Pi = new FinalizationGroup(function(f) {
        for (var b = f.next(); !b.done; b = f.next()) b = b.value, b.da ? Er(b) : console.warn("object already deleted: " + b.da);
      }), xn = function(f) {
        return Pi.register(f, f.A, f.A), f;
      }, Vr = function(f) {
        Pi.unregister(f.A);
      }, xn(I));
    }
    var on = void (118 * -9 + 5323 + -4261), rn = [];
    function Ti() {
      for (; rn.length; ) {
        var I = rn.pop();
        I.A.oa = !1, I.delete();
      }
    }
    function Lt() {
    }
    var Lr = {};
    function Lg(I, f) {
      var b = t;
      if (void (-2364 * -1 + 1416 + 1890 * -2) === b[I].ja) {
        var y = b[I];
        b[I] = function() {
          return b[I].ja.hasOwnProperty(arguments.length) || J("Function '" + f + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + b[I].ja + ")!"), b[I].ja[arguments.length].apply(this, arguments);
        }, b[I].ja = [], b[I].ja[y.ya] = y;
      }
    }
    function Nr(I, f, b) {
      t.hasOwnProperty(I) ? ((void (2513 + -617 * -8 + 2483 * -3) === b || void (-193 * 35 + 1 * 3253 + 3502) !== t[I].ja && void (-4 * 1542 + 53 * -169 + 15125) !== t[I].ja[b]) && J("Cannot register public name '" + I + "' twice"), Lg(I, I), t.hasOwnProperty(b) && J("Cannot register multiple overloads of a function with the same number of arguments (" + b + ")!"), t[I].ja[b] = f) : (t[I] = f, void (-775 * -4 + -1541 + -1559) !== b && (t[I].Ra = b));
    }
    function Ng(I, f, b, y, w, S, k, G) {
      this.name = I, this.constructor = f, this.ma = b, this.na = y, this.ia = w, this.Ca = S, this.qa = k, this.Aa = G;
    }
    function $n(I, f, b) {
      for (; f !== b; ) f.qa || J("Expected null or instance of " + b.name + ", got an instance of " + f.name), I = f.qa(I), f = f.ia;
      return I;
    }
    function Dg(I, f) {
      return f === null ? (this.ua && J("null is not a valid " + this.name), 19 * -57 + 1107 + -8 * 3) : (f.A || J('Cannot pass "' + G0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), $n(f.A.da, f.A.fa.ea, this.ea));
    }
    function Fg(I, f) {
      if (f === null) {
        if (this.ua && J("null is not a valid " + this.name), this.sa) {
          var b = this.Ha();
          return I !== null && I.push(this.na, b), b;
        }
        return 4467 + 1 * -4467;
      }
      if (f.A || J('Cannot pass "' + G0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && f.A.fa.ra && J("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name), b = $n(f.A.da, f.A.fa.ea, this.ea), this.sa) switch (f.A.ga === void 0 && J("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case 1 * -4892 + 255 + 1 * 4637:
          f.A.ha === this ? b = f.A.ga : J("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name);
          break;
        case -1 * -1114 + -8626 + -1 * -7513:
          b = f.A.ga;
          break;
        case 2:
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
    function Yg(I, f) {
      return f === null ? (this.ua && J("null is not a valid " + this.name), 907 * 2 + 5 * 1408 + -8854) : (f.A || J('Cannot pass "' + G0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), f.A.fa.ra && J("Cannot convert argument of type " + f.A.fa.name + " to parameter type " + this.name), $n(f.A.da, f.A.fa.ea, this.ea));
    }
    function ex(I) {
      return this.fromWireType(ct[I >> 2]);
    }
    function Dr(I, f, b) {
      return f === b ? I : void (-1799 * -1 + 1 * 2497 + 1 * -4296) === b.ia ? null : (I = Dr(I, f, b.ia), I === null ? null : b.Aa(I));
    }
    var an = {};
    function Mg(I, f) {
      for (void (4617 + 513 * -9) === f && J("ptr should not be undefined"); I.ia; ) f = I.qa(f), I = I.ia;
      return an[f];
    }
    function tx(I, f) {
      f.fa && f.da || qn("makeClassHandle requires ptr and ptrType"), !!f.ha != !!f.ga && qn("Both smartPtrType and smartPtr must be specified");
      var b = {};
      b.value = 1, f.count = b;
      var y = {};
      y.value = f;
      var w = {};
      return w.A = y, xn(Object.create(I, w));
    }
    function kt(I, f, b, y) {
      this.name = I, this.ea = f, this.ua = b, this.ra = y, this.sa = !(9927 + -2245 * 1 + -7681), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-1 * 7211 + -7289 + 14500), void (1306 * -1 + -1 * -3818 + -2512) !== f.ia ? this.toWireType = Fg : (this.toWireType = y ? Dg : Yg, this.ka = null);
    }
    function Fr(I, f, b) {
      t.hasOwnProperty(I) || qn("Replacing nonexistant public symbol"), void (-320 + 1 * 320) !== t[I].ja && b !== void 0 ? t[I].ja[b] = f : (t[I] = f, t[I].ya = b);
    }
    function Nt(I, f) {
      I = De(I);
      var b = ki(I, f);
      return typeof b != "function" && J("unknown function pointer with signature " + I + ": " + f), b;
    }
    var Yr = void (7347 * 1 + 4025 + -11372);
    function Mr(I) {
      I = ia(I);
      var f = De(I);
      return Ot(I), f;
    }
    function sn(I, f) {
      function b(S) {
        w[S] || zt[S] || (zn[S] ? zn[S].forEach(b) : (y.push(S), w[S] = !(7262 + -4 * -1156 + -11886)));
      }
      var y = [], w = {};
      throw f.forEach(b), new Yr(I + ": " + y.map(Mr).join([", "]));
    }
    function Xr(I, f) {
      for (var b = [], y = 7956 + 68 * -117; y < I; y++) b.push(ke[(f >> 4516 * -2 + -6319 + -1 * -15353) + y]);
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
    var jr = {};
    jr.value = void (2281 + 3896 * -1 + 1615);
    var Jr = {};
    Jr.value = null;
    var Ur = {};
    Ur.value = !(159 + -125 * -73 + 844 * -11);
    var Qr = {};
    Qr.value = !(-4827 + 71 * 68);
    var Vi = [], nt = [{}, jr, Jr, Ur, Qr];
    function Ei(I) {
      -749 * -2 + -40 * 26 + -454 * 1 < I && -3155 + 1479 * -3 + 13 * 584 === --nt[I].Ja && (nt[I] = void (5551 + 1 * 9134 + -14685), Vi.push(I));
    }
    function B0(I) {
      switch (I) {
        case void 0:
          return 1;
        case null:
          return 7439 + -334 * 10 + -4097;
        case !(-3 * -1307 + -19 * 82 + -1 * 2363):
          return -452 * -2 + 4035 * -1 + -2 * -1567;
        case !(-25 * 72 + -2 * 3170 + 8141):
          return 3919 + 2 * -4195 + 4475;
        default:
          var f = Vi.length ? Vi.pop() : nt.length, b = {};
          return b.Ja = 1, b.value = I, nt[f] = b, f;
      }
    }
    function G0(I) {
      if (I === null) return "null";
      var f = typeof I;
      return f === "object" || f === "array" || f === "function" ? I.toString() : "" + I;
    }
    function Xg(I, f) {
      switch (f) {
        case 11 * -305 + 2473 + 884:
          return function(b) {
            return this.fromWireType(Jn[b >> -1 * -8749 + -6 * 1291 + -1001]);
          };
        case 8322 + -3576 * 2 + -1167:
          return function(b) {
            return this.fromWireType(A0[b >> 1186 + -1183 * 1]);
          };
        default:
          throw new TypeError("Unknown float type: " + I);
      }
    }
    function _g(I) {
      var f = Function;
      if (!(f instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof f + " which is not a function");
      var b = Hi(f.name || "unknownFunctionName", function() {
      });
      return b.prototype = f.prototype, b = new b(), I = f.apply(b, I), I instanceof Object ? I : b;
    }
    function jg(I, f, b) {
      switch (f) {
        case 5180 + -11 * 238 + 42 * -61:
          return b ? function(y) {
            return Ne[y];
          } : function(y) {
            return Re[y];
          };
        case 7487 * 1 + -1 * -9484 + 5 * -3394:
          return b ? function(y) {
            return Vt[y >> 1 * 9734 + -1 * 656 + -1 * 9077];
          } : function(y) {
            return Jt[y >> -2 * 3244 + -4 * 1457 + 12317];
          };
        case -5 * 561 + 5549 * 1 + -457 * 6:
          return b ? function(y) {
            return ke[y >> 7611 * 1 + 6289 + -13898];
          } : function(y) {
            return ct[y >> 2];
          };
        default:
          throw new TypeError("Unknown integer type: " + I);
      }
    }
    function Li(I) {
      return I || J("Cannot use deleted val. handle = " + I), nt[I].value;
    }
    function zr(I, f) {
      var b = zt[I];
      return void (-10 * -43 + 1 * 3147 + -3577) === b && J(f + " has unknown type " + Mr(I)), b;
    }
    var Jg = {}, qr = {};
    function $r() {
      if (!Ni) {
        var I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: a || "./this.program" }, f;
        for (f in qr) I[f] = qr[f];
        var b = [];
        for (f in I) b.push(f + "=" + I[f]);
        Ni = b;
      }
      return Ni;
    }
    var Ni, ea = [];
    function ta(I) {
      var f = {}, b;
      for (b in I) (function(y) {
        var w = I[y];
        f[y] = typeof w == "function" ? function() {
          ea.push(y);
          try {
            return w.apply(null, arguments);
          } finally {
            if (m) return;
            var S = ea.pop();
            A(S === y);
          }
        } : w;
      })(b);
      return f;
    }
    for (var na = Array(-34 * 52 + 9935 + 293 * -27), xx = -863 * -11 + 4 * -419 + -7817; 12601 + -823 * 15 > xx; ++xx) na[xx] = String.fromCharCode(xx);
    Pr = na, w0 = t.BindingError = Ri("BindingError"), Tr = t.InternalError = Ri("InternalError"), Lt.prototype.isAliasOf = function(I) {
      if (!(this instanceof Lt && I instanceof Lt)) return !(-7786 + 1 * 2943 + 4844);
      var f = this.A.fa.ea, b = this.A.da, y = I.A.fa.ea;
      for (I = I.A.da; f.ia; ) b = f.qa(b), f = f.ia;
      for (; y.ia; ) I = y.qa(I), y = y.ia;
      return f === y && b === I;
    }, Lt.prototype.clone = function() {
      if (this.A.da || Ki(this), this.A.pa) return this.A.count.value += 1, this;
      var I = xn(Object.create(Object.getPrototypeOf(this), { A: { value: Eg(this.A) } }));
      return I.A.count.value += -2 * -3835 + -9 * 465 + -268 * 13, I.A.oa = !(-41 * -228 + 2889 + -12236), I;
    }, Lt.prototype.delete = function() {
      this.A.da || Ki(this), this.A.oa && !this.A.pa && J("Object already scheduled for deletion"), Vr(this), Er(this.A), this.A.pa || (this.A.ga = void (1 * 1181 + -5789 + 2 * 2304), this.A.da = void (9 * -549 + 3 * 79 + 49 * 96));
    }, Lt.prototype.isDeleted = function() {
      return !this.A.da;
    }, Lt.prototype.deleteLater = function() {
      return this.A.da || Ki(this), this.A.oa && !this.A.pa && J("Object already scheduled for deletion"), rn.push(this), -4689 + -353 * -16 + 479 * -2 === rn.length && on && on(Ti), this.A.oa = !(-8873 + 467 * 19), this;
    }, kt.prototype.Da = function(I) {
      return this.wa && (I = this.wa(I)), I;
    }, kt.prototype.va = function(I) {
      this.na && this.na(I);
    }, kt.prototype.argPackAdvance = 1294 * -5 + -1 * -7643 + -233 * 5, kt.prototype.readValueFromPointer = ex, kt.prototype.deleteObject = function(I) {
      I !== null && I.delete();
    }, kt.prototype.fromWireType = function(I) {
      function f() {
        return this.sa ? tx(this.ea.ma, { fa: this.Ga, da: b, ha: this, ga: I }) : tx(this.ea.ma, { fa: this, da: I });
      }
      var b = this.Da(I);
      if (!b) return this.va(I), null;
      var y = Mg(this.ea, b);
      if (void (-8665 + 9767 * 1 + -38 * 29) !== y)
        return -9364 * -1 + 141 * 29 + -13453 === y.A.count.value ? (y.A.da = b, y.A.ga = I, y.clone()) : (y = y.clone(), this.va(I), y);
      if (y = this.ea.Ca(b), y = Lr[y], !y) return f.call(this);
      y = this.ra ? y.za : y.pointerType;
      var w = Dr(b, this.ea, y.ea);
      return w === null ? f.call(this) : this.sa ? tx(y.ea.ma, { fa: y, da: w, ha: this, ga: I }) : tx(y.ea.ma, { fa: y, da: w });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(an).length;
    }, t.getLiveInheritedInstances = function() {
      var I = [], f;
      for (f in an) an.hasOwnProperty(f) && I.push(an[f]);
      return I;
    }, t.flushPendingDeletes = Ti, t.setDelayFunction = function(I) {
      on = I, rn.length && on && on(Ti);
    }, Yr = t.UnboundTypeError = Ri("UnboundTypeError"), t.count_emval_handles = function() {
      for (var I = 0, f = -1 * 2713 + 839 * -1 + 3557 * 1; f < nt.length; ++f) void (3467 * -1 + -104 + 3571) !== nt[f] && ++I;
      return I;
    }, t.get_first_emval = function() {
      for (var I = 5; I < nt.length; ++I) if (void (-10 * 127 + -7078 + 8348) !== nt[I]) return nt[I];
      return null;
    }, Ke.push({ Ba: function() {
      xa();
    } });
    var Ug = { z: function(I) {
      return ix(I + (389 + -373 * 1)) + (2 + 1 * -3243 + 3257);
    }, u: function(I, f, b) {
      throw new Vg(I).Fa(f, b), "uncaught_exception" in Qn ? Qn.xa++ : Qn.xa = -6881 + -1502 * -3 + -11 * -216, I;
    }, w: function(I, f, b, y, w) {
      var S = Oi(b);
      f = De(f), Gt(I, { name: f, fromWireType: function(k) {
        return !!k;
      }, toWireType: function(k, G) {
        return G ? y : w;
      }, argPackAdvance: 8, readValueFromPointer: function(k) {
        if (b === 1) var G = Ne;
        else if (-7 * 1321 + 5693 + 3556 === b) G = Vt;
        else if (31 * -211 + -1 * 881 + 7426 === b) G = ke;
        else throw new TypeError("Unknown boolean type size: " + f);
        return this.fromWireType(G[k >> S]);
      }, ka: null });
    }, h: function(I, f, b, y, w, S, k, G, R, K, P, T, ee) {
      P = De(P), S = Nt(w, S), G && (G = Nt(k, G)), K && (K = Nt(R, K)), ee = Nt(T, ee);
      var Ce = Zi(P);
      Nr(Ce, function() {
        sn("Cannot construct " + P + " due to unbound types", [y]);
      }), S0([I, f, b], y ? [y] : [], function(E) {
        if (E = E[-2766 + -1 * -1361 + -1405 * -1], y) var pt = E.ea, Pe = pt.ma;
        else Pe = Lt.prototype;
        E = Hi(Ce, function() {
          if (Object.getPrototypeOf(this) !== k0) throw new w0("Use 'new' to construct " + P);
          if (void (-7417 + 7417 * 1) === O0.la) throw new w0(P + " has no accessible constructor");
          var ra = O0.la[arguments.length];
          if (void (1750 * -2 + -5427 + 8927) === ra) throw new w0("Tried to invoke ctor of " + P + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(O0.la).toString() + ") parameters instead!");
          return ra.apply(this, arguments);
        });
        var je = {};
        je.value = E;
        var qt = {};
        qt.constructor = je;
        var k0 = Object.create(Pe, qt);
        E.prototype = k0;
        var O0 = new Ng(P, E, k0, ee, pt, S, G, K);
        pt = new kt(P, O0, !(5 * -1546 + -14 * 423 + 13652), !(-1 * 6185 + -5379 + 11565)), Pe = new kt(P + "*", O0, !1, !(-2546 + -1 * -1511 + 1036));
        var oa = new kt(P + " const*", O0, !(86 * 73 + -5881 * 1 + -12 * 33), !(-4764 + 4430 * 2 + 256 * -16)), Fi = {};
        return Fi.pointerType = Pe, Fi.za = oa, Lr[I] = Fi, Fr(Ce, E), [pt, Pe, oa];
      });
    }, g: function(I, f, b, y, w, S) {
      A(2447 * 3 + -2407 + -2 * 2467 < f);
      var k = Xr(f, b);
      w = Nt(y, w);
      var G = [S], R = [];
      S0([], [I], function(K) {
        K = K[1603 * -5 + -1299 * -4 + 2819];
        var P = "constructor " + K.name;
        if (void (-6720 + -280 * -24) === K.ea.la && (K.ea.la = []), void (3115 * -2 + -2029 * 2 + -1286 * -8) !== K.ea.la[f - (2067 + 2066 * -1)]) throw new w0("Cannot register multiple constructors with identical number of parameters (" + (f - (1 * -3911 + -8205 + 3 * 4039)) + ") for class '" + K.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return K.ea.la[f - (8778 + 8777 * -1)] = function() {
          sn("Cannot construct " + K.name + " due to unbound types", k);
        }, S0([], k, function(T) {
          return K.ea.la[f - (685 + -1 * -613 + -1 * 1297)] = function() {
            arguments.length !== f - (6 * 1541 + 3545 + 10 * -1279) && J(P + " called with " + arguments.length + " arguments, expected " + (f - (587 * 16 + -8469 * -1 + -17860))), R.length = 3227 * -1 + 4443 + -1216, G.length = f;
            for (var ee = -9974 + 844 * 2 + 8287; ee < f; ++ee) G[ee] = T[ee].toWireType(R, arguments[ee - (7159 * 1 + 8465 * 1 + -15623)]);
            return ee = w.apply(null, G), nx(R), T[3662 * -2 + -1 * 6991 + -7 * -2045].fromWireType(ee);
          }, [];
        }), [];
      });
    }, b: function(I, f, b, y, w, S, k, G, R, K) {
      f = De(f), w = Nt(y, w), S0([], [I], function(P) {
        P = P[-9323 + -1 * 6533 + 2 * 7928];
        var T = P.name + "." + f, ee = { get: function() {
          sn("Cannot access " + T + " due to unbound types", [b, k]);
        }, enumerable: !(-8255 + 5 * 1651), configurable: !(-1 * 9664 + 1477 + 8187) };
        return R ? ee.set = function() {
          sn("Cannot access " + T + " due to unbound types", [b, k]);
        } : ee.set = function() {
          J(T + " is a read-only property");
        }, Object.defineProperty(P.ea.ma, f, ee), S0([], R ? [b, k] : [b], function(Ce) {
          var E = Ce[0], pt = { get: function() {
            var je = _r(this, P, T + " getter");
            return E.fromWireType(w(S, je));
          }, enumerable: !(-1700 + -50 * -34) };
          if (R) {
            R = Nt(G, R);
            var Pe = Ce[1];
            pt.set = function(je) {
              var qt = _r(this, P, T + " setter"), k0 = [];
              R(K, qt, Pe.toWireType(k0, je)), nx(k0);
            };
          }
          return Object.defineProperty(P.ea.ma, f, pt), [];
        }), [];
      });
    }, v: function(I, f) {
      f = De(f), Gt(I, { name: f, fromWireType: function(b) {
        var y = nt[b].value;
        return Ei(b), y;
      }, toWireType: function(b, y) {
        return B0(y);
      }, argPackAdvance: 8, readValueFromPointer: ex, ka: null });
    }, m: function(I, f, b) {
      b = Oi(b), f = De(f), Gt(I, { name: f, fromWireType: function(y) {
        return y;
      }, toWireType: function(y, w) {
        if (typeof w != "number" && typeof w != "boolean") throw new TypeError('Cannot convert "' + G0(w) + '" to ' + this.name);
        return w;
      }, argPackAdvance: 8, readValueFromPointer: Xg(f, b), ka: null });
    }, c: function(I, f, b, y, w, S) {
      var k = Xr(f, b);
      I = De(I), w = Nt(y, w), Nr(I, function() {
        sn("Cannot call " + I + " due to unbound types", k);
      }, f - (2543 + 1271 * -2)), S0([], k, function(G) {
        var R = I, K = I;
        G = [G[2141 * 3 + 2289 + 726 * -12], null].concat(G.slice(-173 * 51 + 62 * -19 + 6 * 1667));
        var P = w, T = G.length;
        4367 + 1 * -4365 > T && J("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var ee = G[3617 + -1775 * 1 + -1841] !== null && !(-3 * -238 + 11 * 121 + -2044), Ce = !1, E = 16 * 482 + -7206 + -505; E < G.length; ++E) if (G[E] !== null && void (-7954 + 1 * -9348 + 17302) === G[E].ka) {
          Ce = !(42 * -109 + -2848 + -3713 * -2);
          break;
        }
        var pt = G[-1 * -8663 + -1971 + -6692].name !== "void", Pe = "", je = "";
        for (E = 0; E < T - 2; ++E) Pe += (4 * -1416 + -4935 + 10599 * 1 !== E ? ", " : "") + "arg" + E, je += (3043 * 2 + 24 * 270 + 2 * -6283 !== E ? ", " : "") + "arg" + E + "Wired";
        K = "return function " + Zi(K) + "(" + Pe + `) {
if (arguments.length !== ` + (T - (3 * -467 + 8126 + 249 * -27)) + `) {
throwBindingError('function ` + K + " called with ' + arguments.length + ' arguments, expected " + (T - (68 * 40 + -7 * 1191 + 5619)) + ` args!');
}
`, Ce && (K += `var destructors = [];
`);
        var qt = Ce ? "destructors" : "null";
        for (Pe = "throwBindingError invoker fn runDestructors retType classParam".split(" "), P = [J, P, S, nx, G[2 * 4269 + 181 * -28 + 2 * -1735], G[-719 * 13 + 3800 + 5548]], ee && (K += "var thisWired = classParam.toWireType(" + qt + `, this);
`), E = 9307 + 9307 * -1; E < T - (1 * -1171 + -1 * -1846 + -673); ++E) K += "var arg" + E + "Wired = argType" + E + ".toWireType(" + qt + ", arg" + E + "); // " + G[E + (6998 * -1 + -4660 + 11660)].name + `
`, Pe.push("argType" + E), P.push(G[E + (2465 + 15 * -276 + 559 * 3)]);
        if (ee && (je = "thisWired" + (-5 * -1271 + -7821 + 1466 < je.length ? ", " : "") + je), K += (pt ? "var rv = " : "") + "invoker(fn" + (-2400 + 3121 * -1 + -5521 * -1 < je.length ? ", " : "") + je + `);
`, Ce) K += `runDestructors(destructors);
`;
        else
          for (E = ee ? 4432 + 446 * 22 + -14243 : 403 * -13 + -2197 + 7438; E < G.length; ++E) T = 1291 + -43 * 30 === E ? "thisWired" : "arg" + (E - (4 * -1817 + -5159 + 12429)) + "Wired", G[E].ka !== null && (K += T + "_dtor(" + T + "); // " + G[E].name + `
`, Pe.push(T + "_dtor"), P.push(G[E].ka));
        return pt && (K += `var ret = retType.fromWireType(rv);
return ret;
`), Pe.push(K + `}
`), G = _g(Pe).apply(null, P), Fr(R, G, f - (7 * 389 + -16 * -10 + -2882)), [];
      });
    }, e: function(I, f, b, y, w) {
      function S(K) {
        return K;
      }
      f = De(f), -(2 * -3471 + 5149 + -1794 * -1) === w && (w = 24912124 * -38 + 873657272 + 4367970735);
      var k = Oi(b);
      if (-6375 + -491 * -18 + -2463 === y) {
        var G = 32 - 8 * b;
        S = function(K) {
          return K << G >>> G;
        };
      }
      var R = -(-2 * 4478 + 2 * 4405 + 147) != f.indexOf("unsigned");
      Gt(I, { name: f, fromWireType: S, toWireType: function(K, P) {
        if (typeof P != "number" && typeof P != "boolean") throw new TypeError('Cannot convert "' + G0(P) + '" to ' + this.name);
        if (P < y || P > w) throw new TypeError('Passing a number "' + G0(P) + '" from JS side to C/C++ side to an argument of type "' + f + '", which is outside the valid range [' + y + ", " + w + "]!");
        return R ? P >>> 3103 + 1 * -3103 : P | 11 * -571 + -10 * 465 + 10931 * 1;
      }, argPackAdvance: 8, readValueFromPointer: jg(f, k, 1078 + -154 * 7 !== y), ka: null });
    }, d: function(I, f, b) {
      function y(G) {
        G >>= -1 * -485 + -9 * 877 + 7410;
        var R = ct;
        return new w(q, R[G + (-7695 * 1 + 3004 + 138 * 34)], R[G]);
      }
      var w = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][f];
      b = De(b);
      var S = {};
      S.name = b, S.fromWireType = y, S.argPackAdvance = 8, S.readValueFromPointer = y;
      var k = {};
      k.Ea = !0, Gt(I, S, k);
    }, n: function(I, f) {
      f = De(f);
      var b = f === "std::string";
      Gt(I, { name: f, fromWireType: function(y) {
        var w = ct[y >> 2];
        if (b) for (var S = y + (2 * 1637 + 1 * 1508 + -4778), k = -1 * 1111 + -1812 + 37 * 79; k <= w; ++k) {
          var G = y + 4 + k;
          if (k == w || -2522 + 1 * -3079 + 5601 == Re[G]) {
            if (S) {
              var R = S, K = Re, P = R + (G - S);
              for (S = R; K[S] && !(S >= P); ) ++S;
              if (-3286 * 2 + 6418 + 170 < S - R && K.subarray && l) R = l.decode(K.subarray(R, S));
              else {
                for (P = ""; R < S; ) {
                  var T = K[R++];
                  if (T & 2 * 1865 + -9896 + 6294) {
                    var ee = K[R++] & 63;
                    if (-8 * 323 + 157 * -7 + -25 * -155 == (T & 1 * -3869 + -1 + 4094)) P += String.fromCharCode((T & -5 * -1429 + -4088 + -3026) << 505 * -9 + -1 * -1596 + -197 * -15 | ee);
                    else {
                      var Ce = K[R++] & 63;
                      T = -5538 * -1 + 199 * 38 + 348 * -37 == (T & 4947 + 5 * -739 + 1 * -1012) ? (T & -3199 * 1 + -2531 + 15 * 383) << 1678 * 5 + -1 * -3284 + 17 * -686 | ee << 17 * -73 + -2680 + 3927 | Ce : (T & -1 * -9819 + -7914 + 1898 * -1) << 18 | ee << -2294 + -2306 * -1 | Ce << 4961 + -244 * -2 + -5443 | K[R++] & -7950 + -803 * -12 + -1623, 8 * 8992 + -122 * 686 + 678 * 114 > T ? P += String.fromCharCode(T) : (T -= -734 * 118 + -32449 * -2 + 87250, P += String.fromCharCode(-4 * 7747 + 2812 + -1739 * -48 | T >> 2 * -368 + -7939 * 1 + 2895 * 3, 31122 + -4804 * -1 + 20394 | T & -8 * -1229 + -9980 + 1 * 1171));
                    }
                  } else P += String.fromCharCode(T);
                }
                R = P;
              }
            } else R = "";
            if (void (-5629 + 523 * -3 + 7198) === E) var E = R;
            else E += String.fromCharCode(2683 * -1 + 7522 + -4839), E += R;
            S = G + (-270 * -7 + 2144 + -4033);
          }
        }
        else {
          for (E = Array(w), k = 5091 + 19 * -353 + 1616; k < w; ++k) E[k] = String.fromCharCode(Re[y + (-7032 * 1 + 1 * -7250 + -2 * -7143) + k]);
          E = E.join("");
        }
        return Ot(y), E;
      }, toWireType: function(y, w) {
        w instanceof ArrayBuffer && (w = new Uint8Array(w));
        var S = typeof w == "string";
        S || w instanceof Uint8Array || w instanceof Uint8ClampedArray || w instanceof Int8Array || J("Cannot pass non-string to std::string");
        var k = (b && S ? function() {
          for (var K = 0, P = -2 * 2690 + 4355 + 1025; P < w.length; ++P) {
            var T = w.charCodeAt(P);
            -18339 * 1 + -108359 * -1 + -34724 <= T && -56590 + 153 * 343 + 61454 >= T && (T = -1 * 97599 + -4211 * 2 + 171557 + ((T & -8 * -16 + -7061 + 7956) << -9105 + -1823 * -5) | w.charCodeAt(++P) & 3179 * 2 + -8282 * 1 + 2947 * 1), -4833 * -1 + -1676 * -4 + 70 * -163 >= T ? ++K : K = -1 * -5383 + -7784 + 4448 >= T ? K + (-2429 + 1 * 2431) : 5339 + 149 * 404 >= T ? K + (1845 + -7635 * -1 + -9477) : K + (5093 + 23 * -153 + -1 * 1570);
          }
          return K;
        } : function() {
          return w.length;
        })(), G = ix(59 * 1 + -5372 + 409 * 13 + k + (-9 * -93 + -6253 + 5417));
        if (ct[G >> 1 * 2572 + -9999 * 1 + 7429] = k, b && S) W(w, G + 4, k + (8399 + 1 * 8161 + 571 * -29));
        else if (S) for (S = 0; S < k; ++S) {
          var R = w.charCodeAt(S);
          2912 + 5 * -971 + 2198 < R && (Ot(G), J("String has UTF-16 code units that do not fit in 8 bits")), Re[G + (2809 + -803 * 6 + 671 * 3) + S] = R;
        }
        else
          for (S = -1452 * -2 + -13 * 566 + -2227 * -2; S < k; ++S) Re[G + (-3 * 3291 + 61 * 22 + 8535) + S] = w[S];
        return y !== null && y.push(Ot, G), G;
      }, argPackAdvance: 8, readValueFromPointer: ex, ka: function(y) {
        Ot(y);
      } });
    }, j: function(I, f, b) {
      if (b = De(b), f === 2) var y = X, w = _, S = j, k = function() {
        return Jt;
      }, G = -1421 * -1 + -3533 + -1 * -2113;
      else -1 * 8051 + 6298 + 1757 * 1 === f && (y = Z, w = z, S = U, k = function() {
        return ct;
      }, G = 187 * 29 + -7146 + 1725);
      Gt(I, { name: b, fromWireType: function(R) {
        for (var K = ct[R >> 2], P = k(), T, ee = R + (5185 * 1 + -1 * -1871 + -7052), Ce = 8065 * 1 + -11 * -755 + -16370; Ce <= K; ++Ce) {
          var E = R + 4 + Ce * f;
          (Ce == K || 2 * 1268 + -9415 + -1 * -6879 == P[E >> G]) && (ee = y(ee, E - ee), void (-86 * -54 + -65 * -57 + -2783 * 3) === T ? T = ee : (T += String.fromCharCode(-42 * -131 + 6086 + -11588), T += ee), ee = E + f);
        }
        return Ot(R), T;
      }, toWireType: function(R, K) {
        typeof K != "string" && J("Cannot pass non-string to C++ string type " + b);
        var P = S(K), T = ix(-1196 * -8 + 40 * -40 + -7964 + P + f);
        return ct[T >> 2929 * 1 + -1 * -8802 + -1 * 11729] = P >> G, w(K, T + (-14 * -251 + -7338 + 3828), P + f), R !== null && R.push(Ot, T), T;
      }, argPackAdvance: 8, readValueFromPointer: ex, ka: function(R) {
        Ot(R);
      } });
    }, x: function(I, f) {
      f = De(f);
      var b = {};
      b.Qa = !(3543 + -568 * 1 + 425 * -7), b.name = f, b.argPackAdvance = 0, b.fromWireType = function() {
      }, b.toWireType = function() {
      }, Gt(I, b);
    }, k: function(I, f, b) {
      I = Li(I), f = zr(f, "emval::as");
      var y = [], w = B0(y);
      return ke[b >> 2] = w, f.toWireType(y, I);
    }, i: Ei, l: function(I, f) {
      return I = Li(I), f = Li(f), B0(I[f]);
    }, p: function(I) {
      var f = Jg[I];
      return B0(void (16585 + 1 * -16585) === f ? De(I) : f);
    }, o: function(I) {
      nx(nt[I].value), Ei(I);
    }, y: function(I, f) {
      return I = zr(I, "_emval_take_value"), I = I.readValueFromPointer(f), B0(I);
    }, f: function() {
      tt();
    }, q: function(I, f, b) {
      Re.copyWithin(I, f, f + b);
    }, r: function(I) {
      I >>>= -8014 * -1 + -4898 + -3116;
      var f = Re.length;
      if (4246645432 + -1414349054 * -1 + -3513510838 < I) return !(-7842 + 523 * -12 + 14119);
      for (var b = 3 * 3067 + 61 * -55 + 7 * -835; -274 * -5 + 3136 + -4502 >= b; b *= 6998 + -531 * 9 + -2217) {
        var y = f * (1 + 0.2 / b);
        y = Math.min(y, I + (-60958527 + -14692893 * -11)), y = Math.max(-22876 * -443 + 27605103 + -16415 * 1277, I, y), -553 * -8 + 3979 + -8403 < y % (-162 * -503 + 7607 * 1 + -23557 * 1) && (y += -50 * 2399 + 622 * 79 + 383 * 356 - y % (-98675 + -43 * 643 + -362 * -530));
        e: {
          try {
            h.grow(Math.min(-3086417030 + 5233900678, y) - q.byteLength + (57389 + 2 * 4073) >>> 16), tn(h.buffer);
            var w = 1;
            break e;
          } catch {
          }
          w = void (-9 * -313 + 3433 + 50 * -125);
        }
        if (w) return !(-1 * 2941 + 2651 + 29 * 10);
      }
      return !1;
    }, s: function(I, f) {
      var b = 0;
      return $r().forEach(function(y, w) {
        var S = f + b;
        for (w = ke[I + 4 * w >> 3 * -397 + 367 * 2 + 459] = S, S = 41 * 233 + 7660 + -7 * 2459; S < y.length; ++S) Ne[w++ >> -365 * 21 + -8421 + 6 * 2681] = y.charCodeAt(S);
        Ne[w >> 2183 + 2499 * 2 + 43 * -167] = 7529 * -1 + -1954 + -327 * -29, b += y.length + (-1213 + 2 * 4385 + -7556);
      }), 153 * -23 + -5411 * 1 + 470 * 19;
    }, t: function(I, f) {
      var b = $r();
      ke[I >> -7 * -799 + -5 * -1165 + -11416] = b.length;
      var y = -5623 * -1 + -5644 + 21;
      return b.forEach(function(w) {
        y += w.length + (4602 + 43 * -107);
      }), ke[f >> 3991 + -8768 * 1 + 4779] = y, 0;
    }, a: h };
    (function() {
      function I(k) {
        k = k.exports, k = ta(k), t.asm = k, _e--, t.monitorRunDependencies && t.monitorRunDependencies(_e), _e == 0 && Ct && (k = Ct, Ct = null, k());
      }
      function f(k) {
        I(k.instance);
      }
      function b(k) {
        return Tg().then(function(G) {
          return WebAssembly.instantiate(G, w);
        }).then(k, function(G) {
          C("failed to asynchronously prepare wasm: " + G), tt(G);
        });
      }
      var y = {};
      y.a = Ug;
      var w = y;
      if (_e++, t.monitorRunDependencies && t.monitorRunDependencies(_e), t.instantiateWasm) try {
        var S = t.instantiateWasm(w, I);
        return S = ta(S);
      } catch (k) {
        return C("Module.instantiateWasm callback failed with error: " + k), !(-9948 * -1 + -4726 * 2 + -15 * 33);
      }
      return function() {
        if (u || typeof WebAssembly.instantiateStreaming != "function" || ht() || Ut("file://") || typeof fetch != "function") return b(f);
        var k = {};
        k.credentials = "same-origin", fetch(gt, k).then(function(G) {
          return WebAssembly.instantiateStreaming(G, w).then(f, function(R) {
            return C("wasm streaming compile failed: " + R), C("falling back to ArrayBuffer instantiation"), b(f);
          });
        });
      }(), {};
    })();
    var xa = t.___wasm_call_ctors = function() {
      return (xa = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, ix = t._malloc = function() {
      return (ix = t._malloc = t.asm.C).apply(null, arguments);
    }, Ot = t._free = function() {
      return (Ot = t._free = t.asm.D).apply(null, arguments);
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
    Ct = function I() {
      ox || Di(), ox || (Ct = I);
    };
    function Di() {
      function I() {
        if (!ox && (ox = !(-2 * -1577 + -9017 * -1 + -4057 * 3), t.calledRun = !(-2155 + -1 * -2155), !m)) {
          if (Un(Ke), Un(nn), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var f = t.postRun.shift();
            y0.unshift(f);
          }
          Un(y0);
        }
      }
      if (!(0 < _e)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) v0();
        Un(Et), 6 * -291 + -9737 + -1 * -11483 < _e || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, -47 * -158 + -817 + -6608), I();
        }, 1)) : I());
      }
    }
    if (t.run = Di, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); -2759 + -89 * -31 < t.preInit.length; ) t.preInit.pop()();
    return Di(), i.ready;
  };
})();
class _I {
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
    return i === Dl;
  }
  setThresholds(i) {
    this.imageProcessor.validationService.thresholds = i;
  }
}
class jI {
  constructor() {
    V(this, "detectionRecord", []);
    V(this, "imagesWithTimestampForDuplicateDetection", new wn(Pl));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: i, timestamp: t }) {
    const e = i.length / Ll, n = e / (-33 * 130 + 8564 * 1 + 24 * -178), o = i.length / (-5833 + -8767 * -1 + 1466 * -2), r = await YI(i.slice(o - n, o + n)), a = {};
    a.imageHash = r, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(i) {
    return { data: V1(i), resolution: { width: i.width, height: i.height } };
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
class JI {
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
const Wg = Symbol("Comlink.proxy"), UI = Symbol("Comlink.endpoint"), QI = Symbol("Comlink.releaseProxy"), oo = Symbol("Comlink.finalizer"), Px = Symbol("Comlink.thrown"), wg = (x) => typeof x == "object" && x !== null || typeof x == "function", zI = {
  canHandle: (x) => wg(x) && x[Wg],
  serialize(x) {
    const { port1: i, port2: t } = new MessageChannel();
    return Bg(x, i), [t, [t]];
  },
  deserialize(x) {
    return x.start(), kg(x);
  }
}, qI = {
  canHandle: (x) => wg(x) && Px in x,
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
}, Sg = /* @__PURE__ */ new Map([
  ["proxy", zI],
  ["throw", qI]
]);
function $I(x, i) {
  for (const t of x)
    if (i === t || t === "*" || t instanceof RegExp && t.test(i))
      return !0;
  return !1;
}
function Bg(x, i = globalThis, t = ["*"]) {
  i.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!$I(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: a } = Object.assign({ path: [] }, n.data), s = (n.data.argumentList || []).map(o0);
    let c;
    try {
      const d = a.slice(0, -1).reduce((C, u) => C[u], x), g = a.reduce((C, u) => C[u], x);
      switch (r) {
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
            c = rf(C);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: C, port2: u } = new MessageChannel();
            Bg(x, u), c = of(C, [C]);
          }
          break;
        case "RELEASE":
          c = void 0;
          break;
        default:
          return;
      }
    } catch (d) {
      c = { value: d, [Px]: 0 };
    }
    Promise.resolve(c).catch((d) => ({ value: d, [Px]: 0 })).then((d) => {
      const [g, C] = ui(d);
      i.postMessage(Object.assign(Object.assign({}, g), { id: o }), C), r === "RELEASE" && (i.removeEventListener("message", e), Gg(i), oo in x && typeof x[oo] == "function" && x[oo]());
    }).catch((d) => {
      const [g, C] = ui({
        value: new TypeError("Unserializable return value"),
        [Px]: 0
      });
      i.postMessage(Object.assign(Object.assign({}, g), { id: o }), C);
    });
  }), i.start && i.start();
}
function ef(x) {
  return x.constructor.name === "MessagePort";
}
function Gg(x) {
  ef(x) && x.close();
}
function kg(x, i) {
  return $o(x, [], i);
}
function px(x) {
  if (x)
    throw new Error("Proxy has been released and is not useable");
}
function Og(x) {
  return P0(x, {
    type: "RELEASE"
  }).then(() => {
    Gg(x);
  });
}
const gi = /* @__PURE__ */ new WeakMap(), di = "FinalizationRegistry" in globalThis && new FinalizationRegistry((x) => {
  const i = (gi.get(x) || 0) - 1;
  gi.set(x, i), i === 0 && Og(x);
});
function tf(x, i) {
  const t = (gi.get(i) || 0) + 1;
  gi.set(i, t), di && di.register(x, i, x);
}
function nf(x) {
  di && di.unregister(x);
}
function $o(x, i = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(o, r) {
      if (px(e), r === QI)
        return () => {
          nf(n), Og(x), e = !0;
        };
      if (r === "then") {
        if (i.length === 0)
          return { then: () => n };
        const a = P0(x, {
          type: "GET",
          path: i.map((s) => s.toString())
        }).then(o0);
        return a.then.bind(a);
      }
      return $o(x, [...i, r]);
    },
    set(o, r, a) {
      px(e);
      const [s, c] = ui(a);
      return P0(x, {
        type: "SET",
        path: [...i, r].map((d) => d.toString()),
        value: s
      }, c).then(o0);
    },
    apply(o, r, a) {
      px(e);
      const s = i[i.length - 1];
      if (s === UI)
        return P0(x, {
          type: "ENDPOINT"
        }).then(o0);
      if (s === "bind")
        return $o(x, i.slice(0, -1));
      const [c, d] = bs(a);
      return P0(x, {
        type: "APPLY",
        path: i.map((g) => g.toString()),
        argumentList: c
      }, d).then(o0);
    },
    construct(o, r) {
      px(e);
      const [a, s] = bs(r);
      return P0(x, {
        type: "CONSTRUCT",
        path: i.map((c) => c.toString()),
        argumentList: a
      }, s).then(o0);
    }
  });
  return tf(n, x), n;
}
function xf(x) {
  return Array.prototype.concat.apply([], x);
}
function bs(x) {
  const i = x.map(ui);
  return [i.map((t) => t[0]), xf(i.map((t) => t[1]))];
}
const Zg = /* @__PURE__ */ new WeakMap();
function of(x, i) {
  return Zg.set(x, i), x;
}
function rf(x) {
  return Object.assign(x, { [Wg]: !0 });
}
function ui(x) {
  for (const [i, t] of Sg)
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
    Zg.get(x) || []
  ];
}
function o0(x) {
  switch (x.type) {
    case "HANDLER":
      return Sg.get(x.name).deserialize(x.value);
    case "RAW":
      return x.value;
  }
}
function P0(x, i, t) {
  return new Promise((e) => {
    const n = af();
    x.addEventListener("message", function o(r) {
      !r.data || !r.data.id || r.data.id !== n || (x.removeEventListener("message", o), e(r.data));
    }), x.start && x.start(), x.postMessage(Object.assign({ id: n }, i), t);
  });
}
function af() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const Hg = "dmFyIHZlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgTHQgPSAoYSkgPT4gewogIHRocm93IFR5cGVFcnJvcihhKTsKfTsKdmFyIGdlID0gKGEsIG8sIGUpID0+IG8gaW4gYSA/IHZlKGEsIG8sIHsgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCwgdmFsdWU6IGUgfSkgOiBhW29dID0gZTsKdmFyIFFuID0gKGEsIG8sIGUpID0+IGdlKGEsIHR5cGVvZiBvICE9ICJzeW1ib2wiID8gbyArICIiIDogbywgZSksIE50ID0gKGEsIG8sIGUpID0+IG8uaGFzKGEpIHx8IEx0KCJDYW5ub3QgIiArIGUpOwp2YXIgSCA9IChhLCBvLCBlKSA9PiAoTnQoYSwgbywgInJlYWQgZnJvbSBwcml2YXRlIGZpZWxkIiksIGUgPyBlLmNhbGwoYSkgOiBvLmdldChhKSksIFduID0gKGEsIG8sIGUpID0+IG8uaGFzKGEpID8gTHQoIkNhbm5vdCBhZGQgdGhlIHNhbWUgcHJpdmF0ZSBtZW1iZXIgbW9yZSB0aGFuIG9uY2UiKSA6IG8gaW5zdGFuY2VvZiBXZWFrU2V0ID8gby5hZGQoYSkgOiBvLnNldChhLCBlKSwga24gPSAoYSwgbywgZSwgaCkgPT4gKE50KGEsIG8sICJ3cml0ZSB0byBwcml2YXRlIGZpZWxkIiksIGggPyBoLmNhbGwoYSwgZSkgOiBvLnNldChhLCBlKSwgZSk7CmNvbnN0IEh0ID0gewogIHNpbWQ6ICJzYW1fc2ltZC53YXNtIiwKICBzYW06ICJzYW0ud2FzbSIKfSwgd2UgPSBhc3luYyAoKSA9PiBXZWJBc3NlbWJseS52YWxpZGF0ZShuZXcgVWludDhBcnJheShbMCwgOTcsIDExNSwgMTA5LCAxLCAwLCAwLCAwLCAxLCA1LCAxLCA5NiwgMCwgMSwgMTIzLCAzLCAyLCAxLCAwLCAxMCwgMTAsIDEsIDgsIDAsIDY1LCAwLCAyNTMsIDE1LCAyNTMsIDk4LCAxMV0pKTsKdmFyIEFlID0gZnVuY3Rpb24oKSB7CiAgdmFyIGEgPSB0eXBlb2YgZG9jdW1lbnQgPCAidSIgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdCA/IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjIDogdm9pZCAwOwogIHJldHVybiBmdW5jdGlvbihvKSB7CiAgICBvID0gbyB8fCB7fTsKICAgIHZhciBlOwogICAgZSB8fCAoZSA9IHR5cGVvZiBvIDwgInUiID8gbyA6IHt9KTsKICAgIHZhciBoLCBnOwogICAgZS5yZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgaCA9IG4sIGcgPSB0OwogICAgfSk7CiAgICB2YXIgQyA9IHt9LCBBOwogICAgZm9yIChBIGluIGUpIGUuaGFzT3duUHJvcGVydHkoQSkgJiYgKENbQV0gPSBlW0FdKTsKICAgIHZhciBPID0gIi4vdGhpcy5wcm9ncmFtIiwgYiA9ICExLCBUID0gITE7CiAgICBiID0gdHlwZW9mIHdpbmRvdyA9PSAib2JqZWN0IiwgVCA9IHR5cGVvZiBpbXBvcnRTY3JpcHRzID09ICJmdW5jdGlvbiI7CiAgICB2YXIgXyA9ICIiLCBTOwogICAgKGIgfHwgVCkgJiYgKFQgPyBfID0gc2VsZi5sb2NhdGlvbi5ocmVmIDogZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiAoXyA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjKSwgYSAmJiAoXyA9IGEpLCBfLmluZGV4T2YoImJsb2I6IikgIT09IDAgPyBfID0gXy5zdWJzdHIoMCwgXy5sYXN0SW5kZXhPZigiLyIpICsgMSkgOiBfID0gIiIsIFQgJiYgKFMgPSBmdW5jdGlvbihuKSB7CiAgICAgIHZhciB0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7CiAgICAgIHJldHVybiB0Lm9wZW4oIkdFVCIsIG4sICExKSwgdC5yZXNwb25zZVR5cGUgPSAiYXJyYXlidWZmZXIiLCB0LnNlbmQobnVsbCksIG5ldyBVaW50OEFycmF5KHQucmVzcG9uc2UpOwogICAgfSkpOwogICAgdmFyIEUgPSBlLnByaW50RXJyIHx8IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpOwogICAgZm9yIChBIGluIEMpIEMuaGFzT3duUHJvcGVydHkoQSkgJiYgKGVbQV0gPSBDW0FdKTsKICAgIEMgPSBudWxsLCBlLnRoaXNQcm9ncmFtICYmIChPID0gZS50aGlzUHJvZ3JhbSk7CiAgICB2YXIgTTsKICAgIGUud2FzbUJpbmFyeSAmJiAoTSA9IGUud2FzbUJpbmFyeSksIGUubm9FeGl0UnVudGltZSAmJiBlLm5vRXhpdFJ1bnRpbWUsIHR5cGVvZiBXZWJBc3NlbWJseSAhPSAib2JqZWN0IiAmJiBmbigibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZCIpOwogICAgdmFyIFUsIExuID0gITE7CiAgICBmdW5jdGlvbiBydChuKSB7CiAgICAgIG4gfHwgZm4oIkFzc2VydGlvbiBmYWlsZWQ6IHVuZGVmaW5lZCIpOwogICAgfQogICAgdmFyIGl0ID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGY4IikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiAkdChuLCB0LCByKSB7CiAgICAgIHZhciBpID0geDsKICAgICAgaWYgKDAgPCByKSB7CiAgICAgICAgciA9IHQgKyByIC0gMTsKICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IG4ubGVuZ3RoOyArK3MpIHsKICAgICAgICAgIHZhciB1ID0gbi5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgaWYgKDU1Mjk2IDw9IHUgJiYgNTczNDMgPj0gdSkgewogICAgICAgICAgICB2YXIgbCA9IG4uY2hhckNvZGVBdCgrK3MpOwogICAgICAgICAgICB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCBsICYgMTAyMzsKICAgICAgICAgIH0KICAgICAgICAgIGlmICgxMjcgPj0gdSkgewogICAgICAgICAgICBpZiAodCA+PSByKSBicmVhazsKICAgICAgICAgICAgaVt0KytdID0gdTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGlmICgyMDQ3ID49IHUpIHsKICAgICAgICAgICAgICBpZiAodCArIDEgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgaVt0KytdID0gMTkyIHwgdSA+PiA2OwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgIGlmICg2NTUzNSA+PSB1KSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDIgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyMjQgfCB1ID4+IDEyOwogICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDMgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyNDAgfCB1ID4+IDE4LCBpW3QrK10gPSAxMjggfCB1ID4+IDEyICYgNjM7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IHUgPj4gNiAmIDYzOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IHUgJiA2MzsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgaVt0XSA9IDA7CiAgICAgIH0KICAgIH0KICAgIHZhciBhdCA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmLTE2bGUiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFh0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IG4gPj4gMSwgaSA9IHIgKyB0IC8gMjsgIShyID49IGkpICYmIGduW3JdOyApICsrcjsKICAgICAgaWYgKHIgPDw9IDEsIDMyIDwgciAtIG4gJiYgYXQpIHJldHVybiBhdC5kZWNvZGUoeC5zdWJhcnJheShuLCByKSk7CiAgICAgIGZvciAociA9IDAsIGkgPSAiIjsgOyApIHsKICAgICAgICB2YXIgcyA9IHRuW24gKyAyICogciA+PiAxXTsKICAgICAgICBpZiAocyA9PSAwIHx8IHIgPT0gdCAvIDIpIHJldHVybiBpOwogICAgICAgICsrciwgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHMpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBKdChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgMiA+IHIpIHJldHVybiAwOwogICAgICByIC09IDI7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IHIgPCAyICogbi5sZW5ndGggPyByIC8gMiA6IG4ubGVuZ3RoOwogICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHI7ICsrcykgdG5bdCA+PiAxXSA9IG4uY2hhckNvZGVBdChzKSwgdCArPSAyOwogICAgICByZXR1cm4gdG5bdCA+PiAxXSA9IDAsIHQgLSBpOwogICAgfQogICAgZnVuY3Rpb24gS3QobikgewogICAgICByZXR1cm4gMiAqIG4ubGVuZ3RoOwogICAgfQogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gMCwgaSA9ICIiOyAhKHIgPj0gdCAvIDQpOyApIHsKICAgICAgICB2YXIgcyA9IGtbbiArIDQgKiByID4+IDJdOwogICAgICAgIGlmIChzID09IDApIGJyZWFrOwogICAgICAgICsrciwgNjU1MzYgPD0gcyA/IChzIC09IDY1NTM2LCBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBzID4+IDEwLCA1NjMyMCB8IHMgJiAxMDIzKSkgOiBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocyk7CiAgICAgIH0KICAgICAgcmV0dXJuIGk7CiAgICB9CiAgICBmdW5jdGlvbiBxdChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgNCA+IHIpIHJldHVybiAwOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSBpICsgciAtIDQ7CiAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgbi5sZW5ndGg7ICsrcykgewogICAgICAgIHZhciB1ID0gbi5jaGFyQ29kZUF0KHMpOwogICAgICAgIGlmICg1NTI5NiA8PSB1ICYmIDU3MzQzID49IHUpIHsKICAgICAgICAgIHZhciBsID0gbi5jaGFyQ29kZUF0KCsrcyk7CiAgICAgICAgICB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCBsICYgMTAyMzsKICAgICAgICB9CiAgICAgICAgaWYgKGtbdCA+PiAyXSA9IHUsIHQgKz0gNCwgdCArIDQgPiByKSBicmVhazsKICAgICAgfQogICAgICByZXR1cm4ga1t0ID4+IDJdID0gMCwgdCAtIGk7CiAgICB9CiAgICBmdW5jdGlvbiBuZShuKSB7CiAgICAgIGZvciAodmFyIHQgPSAwLCByID0gMDsgciA8IG4ubGVuZ3RoOyArK3IpIHsKICAgICAgICB2YXIgaSA9IG4uY2hhckNvZGVBdChyKTsKICAgICAgICA1NTI5NiA8PSBpICYmIDU3MzQzID49IGkgJiYgKytyLCB0ICs9IDQ7CiAgICAgIH0KICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICB2YXIgbm4sICQsIHgsIHRuLCBnbiwgaywgRCwgb3QsIHN0OwogICAgZnVuY3Rpb24gdXQobikgewogICAgICBubiA9IG4sIGUuSEVBUDggPSAkID0gbmV3IEludDhBcnJheShuKSwgZS5IRUFQMTYgPSB0biA9IG5ldyBJbnQxNkFycmF5KG4pLCBlLkhFQVAzMiA9IGsgPSBuZXcgSW50MzJBcnJheShuKSwgZS5IRUFQVTggPSB4ID0gbmV3IFVpbnQ4QXJyYXkobiksIGUuSEVBUFUxNiA9IGduID0gbmV3IFVpbnQxNkFycmF5KG4pLCBlLkhFQVBVMzIgPSBEID0gbmV3IFVpbnQzMkFycmF5KG4pLCBlLkhFQVBGMzIgPSBvdCA9IG5ldyBGbG9hdDMyQXJyYXkobiksIGUuSEVBUEY2NCA9IHN0ID0gbmV3IEZsb2F0NjRBcnJheShuKTsKICAgIH0KICAgIHZhciBjdCA9IGUuSU5JVElBTF9NRU1PUlkgfHwgMTY3NzcyMTY7CiAgICBlLndhc21NZW1vcnkgPyBVID0gZS53YXNtTWVtb3J5IDogVSA9IG5ldyBXZWJBc3NlbWJseS5NZW1vcnkoeyBpbml0aWFsOiBjdCAvIDY1NTM2LCBtYXhpbXVtOiAzMjc2OCB9KSwgVSAmJiAobm4gPSBVLmJ1ZmZlciksIGN0ID0gbm4uYnl0ZUxlbmd0aCwgdXQobm4pOwogICAgdmFyIGx0ID0gW10sIGZ0ID0gW10sIHRlID0gW10sIGR0ID0gW107CiAgICBmdW5jdGlvbiBlZSgpIHsKICAgICAgdmFyIG4gPSBlLnByZVJ1bi5zaGlmdCgpOwogICAgICBsdC51bnNoaWZ0KG4pOwogICAgfQogICAgdmFyIFggPSAwLCBsbiA9IG51bGw7CiAgICBlLnByZWxvYWRlZEltYWdlcyA9IHt9LCBlLnByZWxvYWRlZEF1ZGlvcyA9IHt9OwogICAgZnVuY3Rpb24gZm4obikgewogICAgICB0aHJvdyBlLm9uQWJvcnQgJiYgZS5vbkFib3J0KG4pLCBFKG4pLCBMbiA9ICEwLCBuID0gbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcigiYWJvcnQoIiArIG4gKyAiKS4gQnVpbGQgd2l0aCAtcyBBU1NFUlRJT05TPTEgZm9yIG1vcmUgaW5mby4iKSwgZyhuKSwgbjsKICAgIH0KICAgIGZ1bmN0aW9uIE5uKG4pIHsKICAgICAgdmFyIHQgPSBKOwogICAgICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID8gdC5zdGFydHNXaXRoKG4pIDogdC5pbmRleE9mKG4pID09PSAwOwogICAgfQogICAgZnVuY3Rpb24gaHQoKSB7CiAgICAgIHJldHVybiBObigiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LCIpOwogICAgfQogICAgdmFyIEogPSAic2FtLndhc20iOwogICAgaWYgKCFodCgpKSB7CiAgICAgIHZhciBtdCA9IEo7CiAgICAgIEogPSBlLmxvY2F0ZUZpbGUgPyBlLmxvY2F0ZUZpbGUobXQsIF8pIDogXyArIG10OwogICAgfQogICAgZnVuY3Rpb24geXQoKSB7CiAgICAgIHRyeSB7CiAgICAgICAgaWYgKE0pIHJldHVybiBuZXcgVWludDhBcnJheShNKTsKICAgICAgICBpZiAoUykgcmV0dXJuIFMoSik7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIGZuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiByZSgpIHsKICAgICAgcmV0dXJuIE0gfHwgIWIgJiYgIVQgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgTm4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oeXQpIDogZmV0Y2goSiwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spIHRocm93ICJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICciICsgSiArICInIjsKICAgICAgICByZXR1cm4gbi5hcnJheUJ1ZmZlcigpOwogICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4geXQoKTsKICAgICAgfSk7CiAgICB9CiAgICBmdW5jdGlvbiB3bihuKSB7CiAgICAgIGZvciAoOyAwIDwgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5zaGlmdCgpOwogICAgICAgIGlmICh0eXBlb2YgdCA9PSAiZnVuY3Rpb24iKSB0KGUpOwogICAgICAgIGVsc2UgewogICAgICAgICAgdmFyIHIgPSB0LkJhOwogICAgICAgICAgdHlwZW9mIHIgPT0gIm51bWJlciIgPyB0LnRhID09PSB2b2lkIDAgPyBIbigidiIsIHIpKCkgOiBIbigidmkiLCByKSh0LnRhKSA6IHIodC50YSA9PT0gdm9pZCAwID8gbnVsbCA6IHQudGEpOwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gSG4obiwgdCkgewogICAgICB2YXIgciA9IFtdOwogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgci5sZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOwogICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gaWUobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIGtbdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIGtbdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAga1t0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKCkgewogICAgICByZXR1cm4gMCA8IEFuLnhhOwogICAgfQogICAgZnVuY3Rpb24gVW4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIHB0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gUihuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgeFtuXTsgKSB0ICs9IHB0W3hbbisrXV07CiAgICAgIHJldHVybiB0OwogICAgfQogICAgdmFyIGVuID0ge30sIEsgPSB7fSwgX24gPSB7fTsKICAgIGZ1bmN0aW9uIERuKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIEJuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBEbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gem4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gQm4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIHJuID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBybihuKTsKICAgIH0KICAgIHZhciB2dCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgdGhyb3cgbmV3IHZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gYW4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGMpIHsKICAgICAgICBjID0gcihjKSwgYy5sZW5ndGggIT09IG4ubGVuZ3RoICYmIENuKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBuLmxlbmd0aDsgKyt5KSBCKG5beV0sIGNbeV0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihjKSB7CiAgICAgICAgX25bY10gPSB0OwogICAgICB9KTsKICAgICAgdmFyIHMgPSBBcnJheSh0Lmxlbmd0aCksIHUgPSBbXSwgbCA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihjLCB5KSB7CiAgICAgICAgSy5oYXNPd25Qcm9wZXJ0eShjKSA/IHNbeV0gPSBLW2NdIDogKHUucHVzaChjKSwgZW4uaGFzT3duUHJvcGVydHkoYykgfHwgKGVuW2NdID0gW10pLCBlbltjXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgc1t5XSA9IEtbY10sICsrbCwgbCA9PT0gdS5sZW5ndGggJiYgaShzKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCB1Lmxlbmd0aCA9PT0gMCAmJiBpKHMpOwogICAgfQogICAgZnVuY3Rpb24gQihuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgSy5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKSByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBLW25dID0gdCwgZGVsZXRlIF9uW25dLCBlbi5oYXNPd25Qcm9wZXJ0eShuKSAmJiAodCA9IGVuW25dLCBkZWxldGUgZW5bbl0sIHQuZm9yRWFjaChmdW5jdGlvbihzKSB7CiAgICAgICAgcygpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBhZShuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBWbihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIEduID0gITE7CiAgICBmdW5jdGlvbiBndCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIHd0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gZG4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKGRuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChHbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpIHIgPSByLnZhbHVlLCByLmRhID8gd3QocikgOiBjb25zb2xlLndhcm4oIm9iamVjdCBhbHJlYWR5IGRlbGV0ZWQ6ICIgKyByLmRhKTsKICAgICAgfSksIGRuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiBHbi5yZWdpc3Rlcih0LCB0LkEsIHQuQSksIHQ7CiAgICAgIH0sIGd0ID0gZnVuY3Rpb24odCkgewogICAgICAgIEduLnVucmVnaXN0ZXIodC5BKTsKICAgICAgfSwgZG4obikpOwogICAgfQogICAgdmFyIGhuID0gdm9pZCAwLCBtbiA9IFtdOwogICAgZnVuY3Rpb24gWW4oKSB7CiAgICAgIGZvciAoOyBtbi5sZW5ndGg7ICkgewogICAgICAgIHZhciBuID0gbW4ucG9wKCk7CiAgICAgICAgbi5BLm9hID0gITEsIG4uZGVsZXRlKCk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIEcoKSB7CiAgICB9CiAgICB2YXIgQXQgPSB7fTsKICAgIGZ1bmN0aW9uIG9lKG4sIHQpIHsKICAgICAgdmFyIHIgPSBlOwogICAgICBpZiAocltuXS5qYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdmFyIGkgPSByW25dOwogICAgICAgIHJbbl0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiByW25dLmphLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpIHx8IHYoIkZ1bmN0aW9uICciICsgdCArICInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdHMgb25lIG9mICgiICsgcltuXS5qYSArICIpISIpLCByW25dLmphW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfSwgcltuXS5qYSA9IFtdLCByW25dLmphW2kueWFdID0gaTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pID8gKChyID09PSB2b2lkIDAgfHwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIGVbbl0uamFbcl0gIT09IHZvaWQgMCkgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICciICsgbiArICInIHR3aWNlIiksIG9lKG4sIG4pLCBlLmhhc093blByb3BlcnR5KHIpICYmIHYoIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyByICsgIikhIiksIGVbbl0uamFbcl0gPSB0KSA6IChlW25dID0gdCwgciAhPT0gdm9pZCAwICYmIChlW25dLlJhID0gcikpOwogICAgfQogICAgZnVuY3Rpb24gc2UobiwgdCwgciwgaSwgcywgdSwgbCwgYykgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmNvbnN0cnVjdG9yID0gdCwgdGhpcy5tYSA9IHIsIHRoaXMubmEgPSBpLCB0aGlzLmlhID0gcywgdGhpcy5DYSA9IHUsIHRoaXMucWEgPSBsLCB0aGlzLkFhID0gYzsKICAgIH0KICAgIGZ1bmN0aW9uIFRuKG4sIHQsIHIpIHsKICAgICAgZm9yICg7IHQgIT09IHI7ICkgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiB1ZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgc24odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIFRuKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBjZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBzbih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSBUbih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpIHIgPSB0LkEuZ2E7CiAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIG9uKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGkuZGVsZXRlKCk7CiAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgIH0KICAgICAgcmV0dXJuIHI7CiAgICB9CiAgICBmdW5jdGlvbiBsZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgc24odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyB0LkEuZmEubmFtZSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIFRuKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBFbihuKSB7CiAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShEW24gPj4gMl0pOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCwgcikgewogICAgICByZXR1cm4gdCA9PT0gciA/IG4gOiByLmlhID09PSB2b2lkIDAgPyBudWxsIDogKG4gPSBDdChuLCB0LCByLmlhKSwgbiA9PT0gbnVsbCA/IG51bGwgOiByLkFhKG4pKTsKICAgIH0KICAgIHZhciB5biA9IHt9OwogICAgZnVuY3Rpb24gZmUobiwgdCkgewogICAgICBmb3IgKHQgPT09IHZvaWQgMCAmJiB2KCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsgbi5pYTsgKSB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiB5blt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIFBuKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBDbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIENuKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgZG4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiB6KG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IGNlIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyB1ZSA6IGxlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiBUdChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgQ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gWShuLCB0KSB7CiAgICAgIG4gPSBSKG4pOwogICAgICB2YXIgciA9IEhuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgRXQgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiBQdChuKSB7CiAgICAgIG4gPSBGdChuKTsKICAgICAgdmFyIHQgPSBSKG4pOwogICAgICByZXR1cm4gVihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIHBuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcih1KSB7CiAgICAgICAgc1t1XSB8fCBLW3VdIHx8IChfblt1XSA/IF9uW3VdLmZvckVhY2gocikgOiAoaS5wdXNoKHUpLCBzW3VdID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBzID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IEV0KG4gKyAiOiAiICsgaS5tYXAoUHQpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBPdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspIHIucHVzaChrWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIE9uKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gYnQobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIFRuKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBabiA9IFtdLCBGID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uICRuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1GW25dLkphID09PSAwICYmIChGW25dID0gdm9pZCAwLCBabi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIG9uKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IFpuLmxlbmd0aCA/IFpuLnBvcCgpIDogRi5sZW5ndGg7CiAgICAgICAgICByZXR1cm4gRlt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpIHJldHVybiAibnVsbCI7CiAgICAgIHZhciB0ID0gdHlwZW9mIG47CiAgICAgIHJldHVybiB0ID09PSAib2JqZWN0IiB8fCB0ID09PSAiYXJyYXkiIHx8IHQgPT09ICJmdW5jdGlvbiIgPyBuLnRvU3RyaW5nKCkgOiAiIiArIG47CiAgICB9CiAgICBmdW5jdGlvbiBkZShuLCB0KSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShvdFtyID4+IDJdKTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHN0W3IgPj4gM10pOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBmbG9hdCB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGhlKG4pIHsKICAgICAgdmFyIHQgPSBGdW5jdGlvbjsKICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBCbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIG1lKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiAkW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHhbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gdG5baSA+PiAxXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBnbltpID4+IDFdOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIGtbaSA+PiAyXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBEW2kgPj4gMl07CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGludGVnZXIgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBYbihuKSB7CiAgICAgIHJldHVybiBuIHx8IHYoIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9ICIgKyBuKSwgRltuXS52YWx1ZTsKICAgIH0KICAgIGZ1bmN0aW9uIFN0KG4sIHQpIHsKICAgICAgdmFyIHIgPSBLW25dOwogICAgICByZXR1cm4gciA9PT0gdm9pZCAwICYmIHYodCArICIgaGFzIHVua25vd24gdHlwZSAiICsgUHQobikpLCByOwogICAgfQogICAgdmFyIHllID0ge30sIE10ID0ge307CiAgICBmdW5jdGlvbiBXdCgpIHsKICAgICAgaWYgKCFKbikgewogICAgICAgIHZhciBuID0geyBVU0VSOiAid2ViX3VzZXIiLCBMT0dOQU1FOiAid2ViX3VzZXIiLCBQQVRIOiAiLyIsIFBXRDogIi8iLCBIT01FOiAiL2hvbWUvd2ViX3VzZXIiLCBMQU5HOiAodHlwZW9mIG5hdmlnYXRvciA9PSAib2JqZWN0IiAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gfHwgIkMiKS5yZXBsYWNlKCItIiwgIl8iKSArICIuVVRGLTgiLCBfOiBPIHx8ICIuL3RoaXMucHJvZ3JhbSIgfSwgdDsKICAgICAgICBmb3IgKHQgaW4gTXQpIG5bdF0gPSBNdFt0XTsKICAgICAgICB2YXIgciA9IFtdOwogICAgICAgIGZvciAodCBpbiBuKSByLnB1c2godCArICI9IiArIG5bdF0pOwogICAgICAgIEpuID0gcjsKICAgICAgfQogICAgICByZXR1cm4gSm47CiAgICB9CiAgICB2YXIgSm4sIGt0ID0gW107CiAgICBmdW5jdGlvbiBSdChuKSB7CiAgICAgIHZhciB0ID0ge30sIHI7CiAgICAgIGZvciAociBpbiBuKSAoZnVuY3Rpb24oaSkgewogICAgICAgIHZhciBzID0gbltpXTsKICAgICAgICB0W2ldID0gdHlwZW9mIHMgPT0gImZ1bmN0aW9uIiA/IGZ1bmN0aW9uKCkgewogICAgICAgICAga3QucHVzaChpKTsKICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgIHJldHVybiBzLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9IGZpbmFsbHkgewogICAgICAgICAgICBpZiAoTG4pIHJldHVybjsKICAgICAgICAgICAgdmFyIHUgPSBrdC5wb3AoKTsKICAgICAgICAgICAgcnQodSA9PT0gaSk7CiAgICAgICAgICB9CiAgICAgICAgfSA6IHM7CiAgICAgIH0pKHIpOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIGZvciAodmFyIEl0ID0gQXJyYXkoMjU2KSwgYm4gPSAwOyAyNTYgPiBibjsgKytibikgSXRbYm5dID0gU3RyaW5nLmZyb21DaGFyQ29kZShibik7CiAgICBwdCA9IEl0LCBybiA9IGUuQmluZGluZ0Vycm9yID0gem4oIkJpbmRpbmdFcnJvciIpLCB2dCA9IGUuSW50ZXJuYWxFcnJvciA9IHpuKCJJbnRlcm5hbEVycm9yIiksIEcucHJvdG90eXBlLmlzQWxpYXNPZiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEcgJiYgbiBpbnN0YW5jZW9mIEcpKSByZXR1cm4gITE7CiAgICAgIHZhciB0ID0gdGhpcy5BLmZhLmVhLCByID0gdGhpcy5BLmRhLCBpID0gbi5BLmZhLmVhOwogICAgICBmb3IgKG4gPSBuLkEuZGE7IHQuaWE7ICkgciA9IHQucWEociksIHQgPSB0LmlhOwogICAgICBmb3IgKDsgaS5pYTsgKSBuID0gaS5xYShuKSwgaSA9IGkuaWE7CiAgICAgIHJldHVybiB0ID09PSBpICYmIHIgPT09IG47CiAgICB9LCBHLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkgewogICAgICBpZiAodGhpcy5BLmRhIHx8IFZuKHRoaXMpLCB0aGlzLkEucGEpIHJldHVybiB0aGlzLkEuY291bnQudmFsdWUgKz0gMSwgdGhpczsKICAgICAgdmFyIG4gPSBkbihPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSwgeyBBOiB7IHZhbHVlOiBhZSh0aGlzLkEpIH0gfSkpOwogICAgICByZXR1cm4gbi5BLmNvdW50LnZhbHVlICs9IDEsIG4uQS5vYSA9ICExLCBuOwogICAgfSwgRy5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24oKSB7CiAgICAgIHRoaXMuQS5kYSB8fCBWbih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBndCh0aGlzKSwgd3QodGhpcy5BKSwgdGhpcy5BLnBhIHx8ICh0aGlzLkEuZ2EgPSB2b2lkIDAsIHRoaXMuQS5kYSA9IHZvaWQgMCk7CiAgICB9LCBHLnByb3RvdHlwZS5pc0RlbGV0ZWQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICF0aGlzLkEuZGE7CiAgICB9LCBHLnByb3RvdHlwZS5kZWxldGVMYXRlciA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gdGhpcy5BLmRhIHx8IFZuKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIG1uLnB1c2godGhpcyksIG1uLmxlbmd0aCA9PT0gMSAmJiBobiAmJiBobihZbiksIHRoaXMuQS5vYSA9ICEwLCB0aGlzOwogICAgfSwgei5wcm90b3R5cGUuRGEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHJldHVybiB0aGlzLndhICYmIChuID0gdGhpcy53YShuKSksIG47CiAgICB9LCB6LnByb3RvdHlwZS52YSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdGhpcy5uYSAmJiB0aGlzLm5hKG4pOwogICAgfSwgei5wcm90b3R5cGUuYXJnUGFja0FkdmFuY2UgPSA4LCB6LnByb3RvdHlwZS5yZWFkVmFsdWVGcm9tUG9pbnRlciA9IEVuLCB6LnByb3RvdHlwZS5kZWxldGVPYmplY3QgPSBmdW5jdGlvbihuKSB7CiAgICAgIG4gIT09IG51bGwgJiYgbi5kZWxldGUoKTsKICAgIH0sIHoucHJvdG90eXBlLmZyb21XaXJlVHlwZSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgZnVuY3Rpb24gdCgpIHsKICAgICAgICByZXR1cm4gdGhpcy5zYSA/IFBuKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMuR2EsIGRhOiByLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBQbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLCBkYTogbiB9KTsKICAgICAgfQogICAgICB2YXIgciA9IHRoaXMuRGEobik7CiAgICAgIGlmICghcikgcmV0dXJuIHRoaXMudmEobiksIG51bGw7CiAgICAgIHZhciBpID0gZmUodGhpcy5lYSwgcik7CiAgICAgIGlmIChpICE9PSB2b2lkIDApCiAgICAgICAgcmV0dXJuIGkuQS5jb3VudC52YWx1ZSA9PT0gMCA/IChpLkEuZGEgPSByLCBpLkEuZ2EgPSBuLCBpLmNsb25lKCkpIDogKGkgPSBpLmNsb25lKCksIHRoaXMudmEobiksIGkpOwogICAgICBpZiAoaSA9IHRoaXMuZWEuQ2EociksIGkgPSBBdFtpXSwgIWkpIHJldHVybiB0LmNhbGwodGhpcyk7CiAgICAgIGkgPSB0aGlzLnJhID8gaS56YSA6IGkucG9pbnRlclR5cGU7CiAgICAgIHZhciBzID0gQ3QociwgdGhpcy5lYSwgaS5lYSk7CiAgICAgIHJldHVybiBzID09PSBudWxsID8gdC5jYWxsKHRoaXMpIDogdGhpcy5zYSA/IFBuKGkuZWEubWEsIHsgZmE6IGksIGRhOiBzLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBQbigKICAgICAgICBpLmVhLm1hLAogICAgICAgIHsgZmE6IGksIGRhOiBzIH0KICAgICAgKTsKICAgIH0sIGUuZ2V0SW5oZXJpdGVkSW5zdGFuY2VDb3VudCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gT2JqZWN0LmtleXMoeW4pLmxlbmd0aDsKICAgIH0sIGUuZ2V0TGl2ZUluaGVyaXRlZEluc3RhbmNlcyA9IGZ1bmN0aW9uKCkgewogICAgICB2YXIgbiA9IFtdLCB0OwogICAgICBmb3IgKHQgaW4geW4pIHluLmhhc093blByb3BlcnR5KHQpICYmIG4ucHVzaCh5blt0XSk7CiAgICAgIHJldHVybiBuOwogICAgfSwgZS5mbHVzaFBlbmRpbmdEZWxldGVzID0gWW4sIGUuc2V0RGVsYXlGdW5jdGlvbiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgaG4gPSBuLCBtbi5sZW5ndGggJiYgaG4gJiYgaG4oWW4pOwogICAgfSwgRXQgPSBlLlVuYm91bmRUeXBlRXJyb3IgPSB6bigiVW5ib3VuZFR5cGVFcnJvciIpLCBlLmNvdW50X2VtdmFsX2hhbmRsZXMgPSBmdW5jdGlvbigpIHsKICAgICAgZm9yICh2YXIgbiA9IDAsIHQgPSA1OyB0IDwgRi5sZW5ndGg7ICsrdCkgRlt0XSAhPT0gdm9pZCAwICYmICsrbjsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmdldF9maXJzdF9lbXZhbCA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gNTsgbiA8IEYubGVuZ3RoOyArK24pIGlmIChGW25dICE9PSB2b2lkIDApIHJldHVybiBGW25dOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0sIGZ0LnB1c2goeyBCYTogZnVuY3Rpb24oKSB7CiAgICAgIHh0KCk7CiAgICB9IH0pOwogICAgdmFyIHBlID0gewogICAgICB6OiBmdW5jdGlvbihuKSB7CiAgICAgICAgcmV0dXJuIFNuKG4gKyAxNikgKyAxNjsKICAgICAgfSwKICAgICAgdTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHRocm93IG5ldyBpZShuKS5GYSh0LCByKSwgInVuY2F1Z2h0X2V4Y2VwdGlvbiIgaW4gQW4gPyBBbi54YSsrIDogQW4ueGEgPSAxLCBuOwogICAgICB9LAogICAgICB3OiBmdW5jdGlvbihuLCB0LCByLCBpLCBzKSB7CiAgICAgICAgdmFyIHUgPSBVbihyKTsKICAgICAgICB0ID0gUih0KSwgQihuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24obCkgewogICAgICAgICAgcmV0dXJuICEhbDsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihsLCBjKSB7CiAgICAgICAgICByZXR1cm4gYyA/IGkgOiBzOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24obCkgewogICAgICAgICAgaWYgKHIgPT09IDEpIHZhciBjID0gJDsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDIpIGMgPSB0bjsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDQpIGMgPSBrOwogICAgICAgICAgZWxzZSB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGJvb2xlYW4gdHlwZSBzaXplOiAiICsgdCk7CiAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUoY1tsID4+IHVdKTsKICAgICAgICB9LCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgaDogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSwgbCwgYywgeSwgZiwgZCwgbSwgdykgewogICAgICAgIGQgPSBSKGQpLCB1ID0gWShzLCB1KSwgYyAmJiAoYyA9IFkobCwgYykpLCBmICYmIChmID0gWSh5LCBmKSksIHcgPSBZKG0sIHcpOwogICAgICAgIHZhciBQID0gRG4oZCk7CiAgICAgICAgX3QoUCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBwbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbaV0pOwogICAgICAgIH0pLCBhbihbbiwgdCwgcl0sIGkgPyBbaV0gOiBbXSwgZnVuY3Rpb24ocCkgewogICAgICAgICAgaWYgKHAgPSBwWzBdLCBpKQogICAgICAgICAgICB2YXIgTiA9IHAuZWEsIFcgPSBOLm1hOwogICAgICAgICAgZWxzZSBXID0gRy5wcm90b3R5cGU7CiAgICAgICAgICBwID0gQm4oUCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykgIT09IEkpIHRocm93IG5ldyBybigiVXNlICduZXcnIHRvIGNvbnN0cnVjdCAiICsgZCk7CiAgICAgICAgICAgIGlmIChMLmxhID09PSB2b2lkIDApIHRocm93IG5ldyBybihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIganQgPSBMLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoanQgPT09IHZvaWQgMCkgdGhyb3cgbmV3IHJuKCJUcmllZCB0byBpbnZva2UgY3RvciBvZiAiICsgZCArICIgd2l0aCBpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0ZWQgKCIgKyBPYmplY3Qua2V5cyhMLmxhKS50b1N0cmluZygpICsgIikgcGFyYW1ldGVycyBpbnN0ZWFkISIpOwogICAgICAgICAgICByZXR1cm4ganQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICAgIH0pOwogICAgICAgICAgdmFyIEkgPSBPYmplY3QuY3JlYXRlKFcsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHAgfSB9KTsKICAgICAgICAgIHAucHJvdG90eXBlID0gSTsKICAgICAgICAgIHZhciBMID0gbmV3IHNlKGQsIHAsIEksIHcsIE4sIHUsIGMsIGYpOwogICAgICAgICAgTiA9IG5ldyB6KGQsIEwsICEwLCAhMSksIFcgPSBuZXcgeihkICsgIioiLCBMLCAhMSwgITEpOwogICAgICAgICAgdmFyIHZuID0gbmV3IHooZCArICIgY29uc3QqIiwgTCwgITEsICEwKTsKICAgICAgICAgIHJldHVybiBBdFtuXSA9IHsgcG9pbnRlclR5cGU6IFcsIHphOiB2biB9LCBUdChQLCBwKSwgW04sIFcsIHZuXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgZzogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSkgewogICAgICAgIHJ0KDAgPCB0KTsKICAgICAgICB2YXIgbCA9IE90KHQsIHIpOwogICAgICAgIHMgPSBZKGksIHMpOwogICAgICAgIHZhciBjID0gW3VdLCB5ID0gW107CiAgICAgICAgYW4oW10sIFtuXSwgZnVuY3Rpb24oZikgewogICAgICAgICAgZiA9IGZbMF07CiAgICAgICAgICB2YXIgZCA9ICJjb25zdHJ1Y3RvciAiICsgZi5uYW1lOwogICAgICAgICAgaWYgKGYuZWEubGEgPT09IHZvaWQgMCAmJiAoZi5lYS5sYSA9IFtdKSwgZi5lYS5sYVt0IC0gMV0gIT09IHZvaWQgMCkgdGhyb3cgbmV3IHJuKCJDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgY29uc3RydWN0b3JzIHdpdGggaWRlbnRpY2FsIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgKHQgLSAxKSArICIpIGZvciBjbGFzcyAnIiArIGYubmFtZSArICInISBPdmVybG9hZCByZXNvbHV0aW9uIGlzIGN1cnJlbnRseSBvbmx5IHBlcmZvcm1lZCB1c2luZyB0aGUgcGFyYW1ldGVyIGNvdW50LCBub3QgYWN0dWFsIHR5cGUgaW5mbyEiKTsKICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBwbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZi5uYW1lICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGwpOwogICAgICAgICAgfSwgYW4oW10sIGwsIGZ1bmN0aW9uKG0pIHsKICAgICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCAhPT0gdCAtIDEgJiYgdihkICsgIiBjYWxsZWQgd2l0aCAiICsgYXJndW1lbnRzLmxlbmd0aCArICIgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKHQgLSAxKSksIHkubGVuZ3RoID0gMCwgYy5sZW5ndGggPSB0OwogICAgICAgICAgICAgIGZvciAodmFyIHcgPSAxOyB3IDwgdDsgKyt3KSBjW3ddID0gbVt3XS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgeSwKICAgICAgICAgICAgICAgIGFyZ3VtZW50c1t3IC0gMV0KICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiB3ID0gcy5hcHBseShudWxsLCBjKSwgT24oeSksIG1bMF0uZnJvbVdpcmVUeXBlKHcpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSwgbCwgYywgeSwgZikgewogICAgICAgIHQgPSBSKHQpLCBzID0gWShpLCBzKSwgYW4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgbSA9IGQubmFtZSArICIuIiArIHQsIHcgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHBuKCJDYW5ub3QgYWNjZXNzICIgKyBtICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBsXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHkgPyB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBwbigiQ2Fubm90IGFjY2VzcyAiICsgbSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgbF0pOwogICAgICAgICAgfSA6IHcuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYobSArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCB3KSwgYW4oW10sIHkgPyBbciwgbF0gOiBbcl0sIGZ1bmN0aW9uKFApIHsKICAgICAgICAgICAgdmFyIHAgPSBQWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciBJID0gYnQodGhpcywgZCwgbSArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIHAuZnJvbVdpcmVUeXBlKHModSwgSSkpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAoeSkgewogICAgICAgICAgICAgIHkgPSBZKGMsIHkpOwogICAgICAgICAgICAgIHZhciBXID0gUFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKEkpIHsKICAgICAgICAgICAgICAgIHZhciBMID0gYnQodGhpcywgZCwgbSArICIgc2V0dGVyIiksIHZuID0gW107CiAgICAgICAgICAgICAgICB5KGYsIEwsIFcudG9XaXJlVHlwZSh2biwgSSkpLCBPbih2bik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBSKHQpLCBCKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IEZbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gJG4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIG9uKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogRW4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IFVuKHIpLCB0ID0gUih0KSwgQihuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIHMpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBzICE9ICJudW1iZXIiICYmIHR5cGVvZiBzICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBzbihzKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgICByZXR1cm4gczsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBkZSh0LCByKSwKICAgICAgICAgIGthOiBudWxsCiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGM6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIHMsIHUpIHsKICAgICAgICB2YXIgbCA9IE90KHQsIHIpOwogICAgICAgIG4gPSBSKG4pLCBzID0gWShpLCBzKSwgX3QobiwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBwbigiQ2Fubm90IGNhbGwgIiArIG4gKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgbCk7CiAgICAgICAgfSwgdCAtIDEpLCBhbihbXSwgbCwgZnVuY3Rpb24oYykgewogICAgICAgICAgdmFyIHkgPSBuLCBmID0gbjsKICAgICAgICAgIGMgPSBbY1swXSwgbnVsbF0uY29uY2F0KGMuc2xpY2UoMSkpOwogICAgICAgICAgdmFyIGQgPSBzLCBtID0gYy5sZW5ndGg7CiAgICAgICAgICAyID4gbSAmJiB2KCJhcmdUeXBlcyBhcnJheSBzaXplIG1pc21hdGNoISBNdXN0IGF0IGxlYXN0IGdldCByZXR1cm4gdmFsdWUgYW5kICd0aGlzJyB0eXBlcyEiKTsKICAgICAgICAgIGZvciAodmFyIHcgPSBjWzFdICE9PSBudWxsICYmICExLCBQID0gITEsIHAgPSAxOyBwIDwgYy5sZW5ndGg7ICsrcCkgaWYgKGNbcF0gIT09IG51bGwgJiYgY1twXS5rYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgICAgIFAgPSAhMDsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICB9CiAgICAgICAgICB2YXIgTiA9IGNbMF0ubmFtZSAhPT0gInZvaWQiLCBXID0gIiIsIEkgPSAiIjsKICAgICAgICAgIGZvciAocCA9IDA7IHAgPCBtIC0gMjsgKytwKSBXICs9IChwICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgcCwgSSArPSAocCAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHAgKyAiV2lyZWQiOwogICAgICAgICAgZiA9ICJyZXR1cm4gZnVuY3Rpb24gIiArIERuKGYpICsgIigiICsgVyArIGApIHsKaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IGAgKyAobSAtIDIpICsgYCkgewp0aHJvd0JpbmRpbmdFcnJvcignZnVuY3Rpb24gYCArIGYgKyAiIGNhbGxlZCB3aXRoICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAobSAtIDIpICsgYCBhcmdzIScpOwp9CmAsIFAgJiYgKGYgKz0gYHZhciBkZXN0cnVjdG9ycyA9IFtdOwpgKTsKICAgICAgICAgIHZhciBMID0gUCA/ICJkZXN0cnVjdG9ycyIgOiAibnVsbCI7CiAgICAgICAgICBmb3IgKFcgPSAidGhyb3dCaW5kaW5nRXJyb3IgaW52b2tlciBmbiBydW5EZXN0cnVjdG9ycyByZXRUeXBlIGNsYXNzUGFyYW0iLnNwbGl0KCIgIiksIGQgPSBbdiwgZCwgdSwgT24sIGNbMF0sIGNbMV1dLCB3ICYmIChmICs9ICJ2YXIgdGhpc1dpcmVkID0gY2xhc3NQYXJhbS50b1dpcmVUeXBlKCIgKyBMICsgYCwgdGhpcyk7CmApLCBwID0gMDsgcCA8IG0gLSAyOyArK3ApIGYgKz0gInZhciBhcmciICsgcCArICJXaXJlZCA9IGFyZ1R5cGUiICsgcCArICIudG9XaXJlVHlwZSgiICsgTCArICIsIGFyZyIgKyBwICsgIik7IC8vICIgKyBjW3AgKyAyXS5uYW1lICsgYApgLCBXLnB1c2goImFyZ1R5cGUiICsgcCksIGQucHVzaChjW3AgKyAyXSk7CiAgICAgICAgICBpZiAodyAmJiAoSSA9ICJ0aGlzV2lyZWQiICsgKDAgPCBJLmxlbmd0aCA/ICIsICIgOiAiIikgKyBJKSwgZiArPSAoTiA/ICJ2YXIgcnYgPSAiIDogIiIpICsgImludm9rZXIoZm4iICsgKDAgPCBJLmxlbmd0aCA/ICIsICIgOiAiIikgKyBJICsgYCk7CmAsIFApIGYgKz0gYHJ1bkRlc3RydWN0b3JzKGRlc3RydWN0b3JzKTsKYDsKICAgICAgICAgIGVsc2UgZm9yIChwID0gdyA/IDEgOiAyOyBwIDwgYy5sZW5ndGg7ICsrcCkgbSA9IHAgPT09IDEgPyAidGhpc1dpcmVkIiA6ICJhcmciICsgKHAgLSAyKSArICJXaXJlZCIsIGNbcF0ua2EgIT09IG51bGwgJiYgKGYgKz0gbSArICJfZHRvcigiICsgbSArICIpOyAvLyAiICsgY1twXS5uYW1lICsgYApgLCBXLnB1c2gobSArICJfZHRvciIpLCBkLnB1c2goY1twXS5rYSkpOwogICAgICAgICAgcmV0dXJuIE4gJiYgKGYgKz0gYHZhciByZXQgPSByZXRUeXBlLmZyb21XaXJlVHlwZShydik7CnJldHVybiByZXQ7CmApLCBXLnB1c2goZiArIGB9CmApLCBjID0gaGUoVykuYXBwbHkobnVsbCwgZCksIFR0KHksIGMsIHQgLSAxKSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGU6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIHMpIHsKICAgICAgICBmdW5jdGlvbiB1KGYpIHsKICAgICAgICAgIHJldHVybiBmOwogICAgICAgIH0KICAgICAgICB0ID0gUih0KSwgcyA9PT0gLTEgJiYgKHMgPSA0Mjk0OTY3Mjk1KTsKICAgICAgICB2YXIgbCA9IFVuKHIpOwogICAgICAgIGlmIChpID09PSAwKSB7CiAgICAgICAgICB2YXIgYyA9IDMyIC0gOCAqIHI7CiAgICAgICAgICB1ID0gZnVuY3Rpb24oZikgewogICAgICAgICAgICByZXR1cm4gZiA8PCBjID4+PiBjOwogICAgICAgICAgfTsKICAgICAgICB9CiAgICAgICAgdmFyIHkgPSB0LmluZGV4T2YoInVuc2lnbmVkIikgIT0gLTE7CiAgICAgICAgQihuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogdSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oZiwgZCkgewogICAgICAgICAgaWYgKHR5cGVvZiBkICE9ICJudW1iZXIiICYmIHR5cGVvZiBkICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBzbihkKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgaWYgKGQgPCBpIHx8IGQgPiBzKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXNzaW5nIGEgbnVtYmVyICInICsgc24oZCkgKyAnIiBmcm9tIEpTIHNpZGUgdG8gQy9DKysgc2lkZSB0byBhbiBhcmd1bWVudCBvZiB0eXBlICInICsgdCArICciLCB3aGljaCBpcyBvdXRzaWRlIHRoZSB2YWxpZCByYW5nZSBbJyArIGkgKyAiLCAiICsgcyArICJdISIpOwogICAgICAgICAgcmV0dXJuIHkgPyBkID4+PiAwIDogZCB8IDA7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBtZSh0LCBsLCBpICE9PSAwKSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGQ6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBmdW5jdGlvbiBpKHUpIHsKICAgICAgICAgIHUgPj49IDI7CiAgICAgICAgICB2YXIgbCA9IEQ7CiAgICAgICAgICByZXR1cm4gbmV3IHMobm4sIGxbdSArIDFdLCBsW3VdKTsKICAgICAgICB9CiAgICAgICAgdmFyIHMgPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gUihyKSwgQihuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFIodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEIobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgcyA9IERbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpIGZvciAodmFyIHUgPSBpICsgNCwgbCA9IDA7IGwgPD0gczsgKytsKSB7CiAgICAgICAgICAgICAgdmFyIGMgPSBpICsgNCArIGw7CiAgICAgICAgICAgICAgaWYgKGwgPT0gcyB8fCB4W2NdID09IDApIHsKICAgICAgICAgICAgICAgIGlmICh1KSB7CiAgICAgICAgICAgICAgICAgIHZhciB5ID0gdSwgZiA9IHgsIGQgPSB5ICsgKGMgLSB1KTsKICAgICAgICAgICAgICAgICAgZm9yICh1ID0geTsgZlt1XSAmJiAhKHUgPj0gZCk7ICkgKyt1OwogICAgICAgICAgICAgICAgICBpZiAoMTYgPCB1IC0geSAmJiBmLnN1YmFycmF5ICYmIGl0KSB5ID0gaXQuZGVjb2RlKGYuc3ViYXJyYXkoeSwgdSkpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAiIjsgeSA8IHU7ICkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBmW3krK107CiAgICAgICAgICAgICAgICAgICAgICBpZiAobSAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZbeSsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG0gJiAyMjQpID09IDE5MikgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChtICYgMzEpIDw8IDYgfCB3KTsKICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3krK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBtID0gKG0gJiAyNDApID09IDIyNCA/IChtICYgMTUpIDw8IDEyIHwgdyA8PCA2IHwgUCA6IChtICYgNykgPDwgMTggfCB3IDw8IDEyIHwgUCA8PCA2IHwgZlt5KytdICYgNjMsIDY1NTM2ID4gbSA/IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShtKSA6IChtIC09IDY1NTM2LCBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBtID4+IDEwLCA1NjMyMCB8IG0gJiAxMDIzKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobSk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHkgPSBkOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgeSA9ICIiOwogICAgICAgICAgICAgICAgaWYgKHAgPT09IHZvaWQgMCkgdmFyIHAgPSB5OwogICAgICAgICAgICAgICAgZWxzZSBwICs9ICJcMCIsIHAgKz0geTsKICAgICAgICAgICAgICAgIHUgPSBjICsgMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgZm9yIChwID0gQXJyYXkocyksIGwgPSAwOyBsIDwgczsgKytsKSBwW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZSh4W2kgKyA0ICsgbF0pOwogICAgICAgICAgICAgIHAgPSBwLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBWKGkpLCBwOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIHMpIHsKICAgICAgICAgICAgcyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChzID0gbmV3IFVpbnQ4QXJyYXkocykpOwogICAgICAgICAgICB2YXIgdSA9IHR5cGVvZiBzID09ICJzdHJpbmciOwogICAgICAgICAgICB1IHx8IHMgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IHMgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBzIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGwgPSAociAmJiB1ID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgcy5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIG0gPSBzLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBtICYmIDU3MzQzID49IG0gJiYgKG0gPSA2NTUzNiArICgobSAmIDEwMjMpIDw8IDEwKSB8IHMuY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBtID8gKytmIDogZiA9IDIwNDcgPj0gbSA/IGYgKyAyIDogNjU1MzUgPj0gbSA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIHMubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBjID0gU24oNCArIGwgKyAxKTsKICAgICAgICAgICAgaWYgKERbYyA+PiAyXSA9IGwsIHIgJiYgdSkgJHQocywgYyArIDQsIGwgKyAxKTsKICAgICAgICAgICAgZWxzZSBpZiAodSkgZm9yICh1ID0gMDsgdSA8IGw7ICsrdSkgewogICAgICAgICAgICAgIHZhciB5ID0gcy5jaGFyQ29kZUF0KHUpOwogICAgICAgICAgICAgIDI1NSA8IHkgJiYgKFYoYyksIHYoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpKSwgeFtjICsgNCArIHVdID0geTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGZvciAodSA9IDA7IHUgPCBsOyArK3UpIHhbYyArIDQgKyB1XSA9IHNbdV07CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaChWLCBjKSwgYzsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBFbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIFYoaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFIociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IFh0LCBzID0gSnQsIHUgPSBLdCwgbCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gZ247CiAgICAgICAgICB9LCBjID0gMTsKICAgICAgICBlbHNlIHQgPT09IDQgJiYgKGkgPSBRdCwgcyA9IHF0LCB1ID0gbmUsIGwgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiBEOwogICAgICAgIH0sIGMgPSAyKTsKICAgICAgICBCKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gRFt5ID4+IDJdLCBkID0gbCgpLCBtLCB3ID0geSArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgcCA9IHkgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFtwID4+IGNdID09IDApICYmICh3ID0gaSh3LCBwIC0gdyksIG0gPT09IHZvaWQgMCA/IG0gPSB3IDogKG0gKz0gIlwwIiwgbSArPSB3KSwgdyA9IHAgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiBWKHkpLCBtOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHksIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gdShmKSwgbSA9IFNuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gRFttID4+IDJdID0gZCA+PiBjLCBzKGYsIG0gKyA0LCBkICsgdCksIHkgIT09IG51bGwgJiYgeS5wdXNoKFYsIG0pLCBtOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogRW4sIGthOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBWKHkpOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgQihuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSBYbihuKSwgdCA9IFN0KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBzID0gb24oaSk7CiAgICAgICAgcmV0dXJuIGtbciA+PiAyXSA9IHMsIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogJG4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IFhuKG4pLCB0ID0gWG4odCksIG9uKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSB5ZVtuXTsKICAgICAgICByZXR1cm4gb24odCA9PT0gdm9pZCAwID8gUihuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgT24oRltuXS52YWx1ZSksICRuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBTdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIG9uKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBmbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgeC5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0geC5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKSByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBVLmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBubi5ieXRlTGVuZ3RoICsgNjU1MzUgPj4+IDE2KSwgdXQoVS5idWZmZXIpOwogICAgICAgICAgICAgIHZhciBzID0gMTsKICAgICAgICAgICAgICBicmVhayBuOwogICAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgfQogICAgICAgICAgICBzID0gdm9pZCAwOwogICAgICAgICAgfQogICAgICAgICAgaWYgKHMpIHJldHVybiAhMDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuICExOwogICAgICB9LAogICAgICBzOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSAwOwogICAgICAgIHJldHVybiBXdCgpLmZvckVhY2goZnVuY3Rpb24oaSwgcykgewogICAgICAgICAgdmFyIHUgPSB0ICsgcjsKICAgICAgICAgIGZvciAocyA9IGtbbiArIDQgKiBzID4+IDJdID0gdSwgdSA9IDA7IHUgPCBpLmxlbmd0aDsgKyt1KSAkW3MrKyA+PiAwXSA9IGkuY2hhckNvZGVBdCh1KTsKICAgICAgICAgICRbcyA+PiAwXSA9IDAsIHIgKz0gaS5sZW5ndGggKyAxOwogICAgICAgIH0pLCAwOwogICAgICB9LAogICAgICB0OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSBXdCgpOwogICAgICAgIGtbbiA+PiAyXSA9IHIubGVuZ3RoOwogICAgICAgIHZhciBpID0gMDsKICAgICAgICByZXR1cm4gci5mb3JFYWNoKGZ1bmN0aW9uKHMpIHsKICAgICAgICAgIGkgKz0gcy5sZW5ndGggKyAxOwogICAgICAgIH0pLCBrW3QgPj4gMl0gPSBpLCAwOwogICAgICB9LAogICAgICBhOiBVCiAgICB9OwogICAgKGZ1bmN0aW9uKCkgewogICAgICBmdW5jdGlvbiBuKHUpIHsKICAgICAgICB1ID0gdS5leHBvcnRzLCB1ID0gUnQodSksIGUuYXNtID0gdSwgWC0tLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFgpLCBYID09IDAgJiYgbG4gJiYgKHUgPSBsbiwgbG4gPSBudWxsLCB1KCkpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHQodSkgewogICAgICAgIG4odS5pbnN0YW5jZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcih1KSB7CiAgICAgICAgcmV0dXJuIHJlKCkudGhlbihmdW5jdGlvbihsKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUobCwgaSk7CiAgICAgICAgfSkudGhlbih1LCBmdW5jdGlvbihsKSB7CiAgICAgICAgICBFKCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAiICsgbCksIGZuKGwpOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIHZhciBpID0geyBhOiBwZSB9OwogICAgICBpZiAoWCsrLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFgpLCBlLmluc3RhbnRpYXRlV2FzbSkgdHJ5IHsKICAgICAgICB2YXIgcyA9IGUuaW5zdGFudGlhdGVXYXNtKGksIG4pOwogICAgICAgIHJldHVybiBzID0gUnQocyk7CiAgICAgIH0gY2F0Y2ggKHUpIHsKICAgICAgICByZXR1cm4gRSgiTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogIiArIHUpLCAhMTsKICAgICAgfQogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKE0gfHwgdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nICE9ICJmdW5jdGlvbiIgfHwgaHQoKSB8fCBObigiZmlsZTovLyIpIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iKSByZXR1cm4gcih0KTsKICAgICAgICBmZXRjaChKLCB7IGNyZWRlbnRpYWxzOiAic2FtZS1vcmlnaW4iIH0pLnRoZW4oZnVuY3Rpb24odSkgewogICAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHUsIGkpLnRoZW4odCwgZnVuY3Rpb24obCkgewogICAgICAgICAgICByZXR1cm4gRSgid2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6ICIgKyBsKSwgRSgiZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb24iKSwgcih0KTsKICAgICAgICAgIH0pOwogICAgICAgIH0pOwogICAgICB9KCksIHt9OwogICAgfSkoKTsKICAgIHZhciB4dCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoeHQgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGUuYXNtLkIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBTbiA9IGUuX21hbGxvYyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFNuID0gZS5fbWFsbG9jID0gZS5hc20uQykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIFYgPSBlLl9mcmVlID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoViA9IGUuX2ZyZWUgPSBlLmFzbS5EKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgRnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZS5hc20uRSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICBlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBlLmFzbS5GKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpID0gZS5hc20uRykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aSA9IGUuYXNtLkgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9pID0gZS5hc20uSSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpID0gZS5hc20uSikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWkgPSBlLmFzbS5LKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2ZpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9maWkgPSBlLmFzbS5MKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWYgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpZiA9IGUuYXNtLk0pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWkgPSBlLmFzbS5OKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaSA9IGUuYXNtLk8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaSA9IGUuYXNtLlApLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaSA9IGUuYXNtLlEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaWkgPSBlLmFzbS5SKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpID0gZS5hc20uUykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZS5hc20uVCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGUuYXNtLlUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBlLmFzbS5WKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGUuYXNtLlcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGUuYXNtLlgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpID0gZS5hc20uWSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaSA9IGUuYXNtLlopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpID0gZS5hc20uXykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGUuYXNtLiQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZS5hc20uYWEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBlLmFzbS5iYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBlLmFzbS5jYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICB2YXIgTW47CiAgICBsbiA9IGZ1bmN0aW9uIG4oKSB7CiAgICAgIE1uIHx8IEtuKCksIE1uIHx8IChsbiA9IG4pOwogICAgfTsKICAgIGZ1bmN0aW9uIEtuKCkgewogICAgICBmdW5jdGlvbiBuKCkgewogICAgICAgIGlmICghTW4gJiYgKE1uID0gITAsIGUuY2FsbGVkUnVuID0gITAsICFMbikpIHsKICAgICAgICAgIGlmICh3bihmdCksIHduKHRlKSwgaChlKSwgZS5vblJ1bnRpbWVJbml0aWFsaXplZCAmJiBlLm9uUnVudGltZUluaXRpYWxpemVkKCksIGUucG9zdFJ1bikgZm9yICh0eXBlb2YgZS5wb3N0UnVuID09ICJmdW5jdGlvbiIgJiYgKGUucG9zdFJ1biA9IFtlLnBvc3RSdW5dKTsgZS5wb3N0UnVuLmxlbmd0aDsgKSB7CiAgICAgICAgICAgIHZhciB0ID0gZS5wb3N0UnVuLnNoaWZ0KCk7CiAgICAgICAgICAgIGR0LnVuc2hpZnQodCk7CiAgICAgICAgICB9CiAgICAgICAgICB3bihkdCk7CiAgICAgICAgfQogICAgICB9CiAgICAgIGlmICghKDAgPCBYKSkgewogICAgICAgIGlmIChlLnByZVJ1bikgZm9yICh0eXBlb2YgZS5wcmVSdW4gPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVSdW4gPSBbZS5wcmVSdW5dKTsgZS5wcmVSdW4ubGVuZ3RoOyApIGVlKCk7CiAgICAgICAgd24obHQpLCAwIDwgWCB8fCAoZS5zZXRTdGF0dXMgPyAoZS5zZXRTdGF0dXMoIlJ1bm5pbmcuLi4iKSwgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGUuc2V0U3RhdHVzKCIiKTsKICAgICAgICAgIH0sIDEpLCBuKCk7CiAgICAgICAgfSwgMSkpIDogbigpKTsKICAgICAgfQogICAgfQogICAgaWYgKGUucnVuID0gS24sIGUucHJlSW5pdCkgZm9yICh0eXBlb2YgZS5wcmVJbml0ID09ICJmdW5jdGlvbiIgJiYgKGUucHJlSW5pdCA9IFtlLnByZUluaXRdKTsgMCA8IGUucHJlSW5pdC5sZW5ndGg7ICkgZS5wcmVJbml0LnBvcCgpKCk7CiAgICByZXR1cm4gS24oKSwgby5yZWFkeTsKICB9Owp9KCk7CmNsYXNzIGogZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgaCkgewogICAgc3VwZXIoZSk7CiAgICBRbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IGg7CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiBqKQogICAgICByZXR1cm4gZTsKICAgIGxldCBoOwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIGggPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICBoID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgaCA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgaCA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgaCA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyBqKGgsIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgaikKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCBoID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgaihoKTsKICB9Cn0KY29uc3QgX2UgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfTsKdmFyIFosIHEsIGNuOwpjbGFzcyBDZSB7CiAgY29uc3RydWN0b3IobywgZSkgewogICAgV24odGhpcywgWik7CiAgICBXbih0aGlzLCBxKTsKICAgIFduKHRoaXMsIGNuKTsKICAgIGtuKHRoaXMsIFosIG8pLCBrbih0aGlzLCBxLCB0aGlzLmFsbG9jYXRlKGUubGVuZ3RoICogZS5CWVRFU19QRVJfRUxFTUVOVCkpLCBrbih0aGlzLCBjbiwgdGhpcy5hbGxvY2F0ZShlLmxlbmd0aCAqIGUuQllURVNfUEVSX0VMRU1FTlQpKTsKICB9CiAgZ2V0IHJnYmFJbWFnZVBvaW50ZXIoKSB7CiAgICByZXR1cm4gSCh0aGlzLCBxKTsKICB9CiAgZ2V0IGJncjBJbWFnZVBvaW50ZXIoKSB7CiAgICByZXR1cm4gSCh0aGlzLCBjbik7CiAgfQogIGFsbG9jYXRlKG8pIHsKICAgIHJldHVybiBIKHRoaXMsIFopLl9tYWxsb2Mobyk7CiAgfQogIGZyZWUoKSB7CiAgICBIKHRoaXMsIFopLl9mcmVlKEgodGhpcywgcSkpLCBIKHRoaXMsIFopLl9mcmVlKEgodGhpcywgY24pKTsKICB9CiAgd3JpdGVEYXRhVG9NZW1vcnkobykgewogICAgSCh0aGlzLCBaKS5IRUFQVTguc2V0KG8sIEgodGhpcywgcSkpOwogIH0KfQpaID0gbmV3IFdlYWtNYXAoKSwgcSA9IG5ldyBXZWFrTWFwKCksIGNuID0gbmV3IFdlYWtNYXAoKTsKY2xhc3MgVGUgewogIGNvbnN0cnVjdG9yKCkgewogICAgUW4odGhpcywgInNhbVdhc21Nb2R1bGUiKTsKICB9CiAgZ2V0T3ZlcnJpZGRlbk1vZHVsZXMobywgZSkgewogICAgcmV0dXJuIHsKICAgICAgbG9jYXRlRmlsZTogKGgpID0+IG5ldyBVUkwoZSB8fCBoLCBvKS5ocmVmCiAgICB9OwogIH0KICBhc3luYyBoYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKG8sIGUpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IGggPSBhd2FpdCBmZXRjaChvKTsKICAgICAgaWYgKCFoLm9rKQogICAgICAgIHRocm93IG5ldyBqKAogICAgICAgICAgYFRoZSBwYXRoIHRvICR7ZX0gaXMgaW5jb3JyZWN0IG9yIHRoZSBtb2R1bGUgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7b31gCiAgICAgICAgKTsKICAgICAgY29uc3QgZyA9IGF3YWl0IGguYXJyYXlCdWZmZXIoKTsKICAgICAgaWYgKCFXZWJBc3NlbWJseS52YWxpZGF0ZShnKSkKICAgICAgICB0aHJvdyBuZXcgaigKICAgICAgICAgIGBUaGUgcHJvdmlkZWQgJHtlfSBpcyBub3QgYSB2YWxpZCBXQVNNIG1vZHVsZS4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7b31gCiAgICAgICAgKTsKICAgIH0gY2F0Y2ggKGgpIHsKICAgICAgaWYgKGggaW5zdGFuY2VvZiBqKQogICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICAgICAiWW91IGNhbiBmaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIGhvc3Qgd2FzbSBmaWxlcyBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuaW5ub3ZhdHJpY3MuY29tL2RpZ2l0YWwtb25ib2FyZGluZy90ZWNobmljYWwvcmVtb3RlL2RvdC13ZWItZG9jdW1lbnQvbGF0ZXN0L2RvY3VtZW50YXRpb24vI19ob3N0aW5nX3NhbV93YXNtIgogICAgICAgICksIGg7CiAgICB9CiAgfQogIGFzeW5jIGdldFdhc21GaWxlTmFtZSgpIHsKICAgIHJldHVybiBhd2FpdCB3ZSgpID8gSHQuc2ltZCA6IEh0LnNhbTsKICB9CiAgYXN5bmMgaW5pdFNhbU1vZHVsZShvLCBlID0gIi93YXNtIikgewogICAgaWYgKHRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgcmV0dXJuOwogICAgY29uc3QgaCA9IGF3YWl0IHRoaXMuZ2V0V2FzbUZpbGVOYW1lKCksIGcgPSBgJHtlfS8ke2h9YDsKICAgIHRyeSB7CiAgICAgIHRoaXMuc2FtV2FzbU1vZHVsZSA9IGF3YWl0IEFlKHRoaXMuZ2V0T3ZlcnJpZGRlbk1vZHVsZXMobywgZykpOwogICAgfSBjYXRjaCB7CiAgICAgIHRocm93IGF3YWl0IHRoaXMuaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZShnLCBoKSwgbmV3IGooIkNvdWxkIG5vdCBpbml0IGRldGVjdG9yLiIpOwogICAgfQogIH0KICBhc3luYyBnZXRTYW1WZXJzaW9uKCkgewogICAgdmFyIGU7CiAgICBjb25zdCBvID0gYXdhaXQgKChlID0gdGhpcy5zYW1XYXNtTW9kdWxlKSA9PSBudWxsID8gdm9pZCAwIDogZS5nZXRJbmZvU3RyaW5nKCkpOwogICAgcmV0dXJuIG8gPT0gbnVsbCA/IHZvaWQgMCA6IG8udHJpbSgpOwogIH0KICAvKgogICAqIEluIFRTIDUuMi4wIHdhcyBhZGRlZCBzcGVjaWFsIGtleXdvcmQgInVzaW5nIiB3aGljaCBjb3VsZCBiZSBwZXJmZWN0IGZvciB0aGlzIGNhc2UuCiAgICogVW5mb3J0dW5hdGVseSwgdml0ZSBwcmVhY3QgcGx1Z2luIGRvZXMgbm90IHN1cHBvcnQgdGhpcyB2ZXJzaW9uIG9mIFRTIHlldC4KICAgKiBDaGVjayBwb3NzaWJpbGl0eSBvZiB1c2luZyAidXNpbmciIGtleXdvcmQgd2hlbiB2aXRlIHByZWFjdCBwbHVnaW4gdXBkYXRlcwogICAqLwogIHdyaXRlSW1hZ2VUb01lbW9yeShvKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IGooIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIGNvbnN0IGUgPSBuZXcgQ2UodGhpcy5zYW1XYXNtTW9kdWxlLCBvKTsKICAgIHJldHVybiBlLndyaXRlRGF0YVRvTWVtb3J5KG8pLCBlOwogIH0KICBjb252ZXJ0VG9TYW1Db2xvckltYWdlKG8sIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgaigiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgY29uc3QgaCA9IHRoaXMud3JpdGVJbWFnZVRvTWVtb3J5KG8pOwogICAgcmV0dXJuIHRoaXMuc2FtV2FzbU1vZHVsZS5jb252ZXJ0VG9TYW1Db2xvckltYWdlKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgaC5yZ2JhSW1hZ2VQb2ludGVyLAogICAgICBfZS5SR0JBLAogICAgICBoLmJncjBJbWFnZVBvaW50ZXIKICAgICksIGg7CiAgfQp9CmNvbnN0IEVlID0gKGEpID0+IE51bWJlci5wYXJzZUZsb2F0KGEudG9GaXhlZCgzKSksIFBlID0gKGEsIG8pID0+IE1hdGgubWluKGEsIG8pOwovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQwogKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMAogKi8KY29uc3QgRHQgPSBTeW1ib2woIkNvbWxpbmsucHJveHkiKSwgT2UgPSBTeW1ib2woIkNvbWxpbmsuZW5kcG9pbnQiKSwgYmUgPSBTeW1ib2woIkNvbWxpbmsucmVsZWFzZVByb3h5IiksIHFuID0gU3ltYm9sKCJDb21saW5rLmZpbmFsaXplciIpLCBJbiA9IFN5bWJvbCgiQ29tbGluay50aHJvd24iKSwgQnQgPSAoYSkgPT4gdHlwZW9mIGEgPT0gIm9iamVjdCIgJiYgYSAhPT0gbnVsbCB8fCB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iLCBTZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBCdChhKSAmJiBhW0R0XSwKICBzZXJpYWxpemUoYSkgewogICAgY29uc3QgeyBwb3J0MTogbywgcG9ydDI6IGUgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgcmV0dXJuIGV0KGEsIG8pLCBbZSwgW2VdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHJldHVybiBhLnN0YXJ0KCksIFJlKGEpOwogIH0KfSwgTWUgPSB7CiAgY2FuSGFuZGxlOiAoYSkgPT4gQnQoYSkgJiYgSW4gaW4gYSwKICBzZXJpYWxpemUoeyB2YWx1ZTogYSB9KSB7CiAgICBsZXQgbzsKICAgIHJldHVybiBhIGluc3RhbmNlb2YgRXJyb3IgPyBvID0gewogICAgICBpc0Vycm9yOiAhMCwKICAgICAgdmFsdWU6IHsKICAgICAgICBtZXNzYWdlOiBhLm1lc3NhZ2UsCiAgICAgICAgbmFtZTogYS5uYW1lLAogICAgICAgIHN0YWNrOiBhLnN0YWNrCiAgICAgIH0KICAgIH0gOiBvID0geyBpc0Vycm9yOiAhMSwgdmFsdWU6IGEgfSwgW28sIFtdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHRocm93IGEuaXNFcnJvciA/IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGEudmFsdWUubWVzc2FnZSksIGEudmFsdWUpIDogYS52YWx1ZTsKICB9Cn0sIHp0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoWwogIFsicHJveHkiLCBTZV0sCiAgWyJ0aHJvdyIsIE1lXQpdKTsKZnVuY3Rpb24gV2UoYSwgbykgewogIGZvciAoY29uc3QgZSBvZiBhKQogICAgaWYgKG8gPT09IGUgfHwgZSA9PT0gIioiIHx8IGUgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZS50ZXN0KG8pKQogICAgICByZXR1cm4gITA7CiAgcmV0dXJuICExOwp9CmZ1bmN0aW9uIGV0KGEsIG8gPSBnbG9iYWxUaGlzLCBlID0gWyIqIl0pIHsKICBvLmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBoKGcpIHsKICAgIGlmICghZyB8fCAhZy5kYXRhKQogICAgICByZXR1cm47CiAgICBpZiAoIVdlKGUsIGcub3JpZ2luKSkgewogICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgb3JpZ2luICcke2cub3JpZ2lufScgZm9yIGNvbWxpbmsgcHJveHlgKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgY29uc3QgeyBpZDogQywgdHlwZTogQSwgcGF0aDogTyB9ID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFtdIH0sIGcuZGF0YSksIGIgPSAoZy5kYXRhLmFyZ3VtZW50TGlzdCB8fCBbXSkubWFwKFEpOwogICAgbGV0IFQ7CiAgICB0cnkgewogICAgICBjb25zdCBfID0gTy5zbGljZSgwLCAtMSkucmVkdWNlKChFLCBNKSA9PiBFW01dLCBhKSwgUyA9IE8ucmVkdWNlKChFLCBNKSA9PiBFW01dLCBhKTsKICAgICAgc3dpdGNoIChBKSB7CiAgICAgICAgY2FzZSAiR0VUIjoKICAgICAgICAgIFQgPSBTOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiU0VUIjoKICAgICAgICAgIF9bTy5zbGljZSgtMSlbMF1dID0gUShnLmRhdGEudmFsdWUpLCBUID0gITA7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJBUFBMWSI6CiAgICAgICAgICBUID0gUy5hcHBseShfLCBiKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkNPTlNUUlVDVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IEUgPSBuZXcgUyguLi5iKTsKICAgICAgICAgICAgVCA9IExlKEUpOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiRU5EUE9JTlQiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCB7IHBvcnQxOiBFLCBwb3J0MjogTSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICAgICAgICAgIGV0KGEsIE0pLCBUID0gamUoRSwgW0VdKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlJFTEVBU0UiOgogICAgICAgICAgVCA9IHZvaWQgMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICByZXR1cm47CiAgICAgIH0KICAgIH0gY2F0Y2ggKF8pIHsKICAgICAgVCA9IHsgdmFsdWU6IF8sIFtJbl06IDAgfTsKICAgIH0KICAgIFByb21pc2UucmVzb2x2ZShUKS5jYXRjaCgoXykgPT4gKHsgdmFsdWU6IF8sIFtJbl06IDAgfSkpLnRoZW4oKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gam4oXyk7CiAgICAgIG8ucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBTKSwgeyBpZDogQyB9KSwgRSksIEEgPT09ICJSRUxFQVNFIiAmJiAoby5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgaCksIFZ0KG8pLCBxbiBpbiBhICYmIHR5cGVvZiBhW3FuXSA9PSAiZnVuY3Rpb24iICYmIGFbcW5dKCkpOwogICAgfSkuY2F0Y2goKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gam4oewogICAgICAgIHZhbHVlOiBuZXcgVHlwZUVycm9yKCJVbnNlcmlhbGl6YWJsZSByZXR1cm4gdmFsdWUiKSwKICAgICAgICBbSW5dOiAwCiAgICAgIH0pOwogICAgICBvLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUyksIHsgaWQ6IEMgfSksIEUpOwogICAgfSk7CiAgfSksIG8uc3RhcnQgJiYgby5zdGFydCgpOwp9CmZ1bmN0aW9uIGtlKGEpIHsKICByZXR1cm4gYS5jb25zdHJ1Y3Rvci5uYW1lID09PSAiTWVzc2FnZVBvcnQiOwp9CmZ1bmN0aW9uIFZ0KGEpIHsKICBrZShhKSAmJiBhLmNsb3NlKCk7Cn0KZnVuY3Rpb24gUmUoYSwgbykgewogIHJldHVybiB0dChhLCBbXSwgbyk7Cn0KZnVuY3Rpb24gUm4oYSkgewogIGlmIChhKQogICAgdGhyb3cgbmV3IEVycm9yKCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGUiKTsKfQpmdW5jdGlvbiBHdChhKSB7CiAgcmV0dXJuIHVuKGEsIHsKICAgIHR5cGU6ICJSRUxFQVNFIgogIH0pLnRoZW4oKCkgPT4gewogICAgVnQoYSk7CiAgfSk7Cn0KY29uc3QgeG4gPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgRm4gPSAiRmluYWxpemF0aW9uUmVnaXN0cnkiIGluIGdsb2JhbFRoaXMgJiYgbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChhKSA9PiB7CiAgY29uc3QgbyA9ICh4bi5nZXQoYSkgfHwgMCkgLSAxOwogIHhuLnNldChhLCBvKSwgbyA9PT0gMCAmJiBHdChhKTsKfSk7CmZ1bmN0aW9uIEllKGEsIG8pIHsKICBjb25zdCBlID0gKHhuLmdldChvKSB8fCAwKSArIDE7CiAgeG4uc2V0KG8sIGUpLCBGbiAmJiBGbi5yZWdpc3RlcihhLCBvLCBhKTsKfQpmdW5jdGlvbiB4ZShhKSB7CiAgRm4gJiYgRm4udW5yZWdpc3RlcihhKTsKfQpmdW5jdGlvbiB0dChhLCBvID0gW10sIGUgPSBmdW5jdGlvbigpIHsKfSkgewogIGxldCBoID0gITE7CiAgY29uc3QgZyA9IG5ldyBQcm94eShlLCB7CiAgICBnZXQoQywgQSkgewogICAgICBpZiAoUm4oaCksIEEgPT09IGJlKQogICAgICAgIHJldHVybiAoKSA9PiB7CiAgICAgICAgICB4ZShnKSwgR3QoYSksIGggPSAhMDsKICAgICAgICB9OwogICAgICBpZiAoQSA9PT0gInRoZW4iKSB7CiAgICAgICAgaWYgKG8ubGVuZ3RoID09PSAwKQogICAgICAgICAgcmV0dXJuIHsgdGhlbjogKCkgPT4gZyB9OwogICAgICAgIGNvbnN0IE8gPSB1bihhLCB7CiAgICAgICAgICB0eXBlOiAiR0VUIiwKICAgICAgICAgIHBhdGg6IG8ubWFwKChiKSA9PiBiLnRvU3RyaW5nKCkpCiAgICAgICAgfSkudGhlbihRKTsKICAgICAgICByZXR1cm4gTy50aGVuLmJpbmQoTyk7CiAgICAgIH0KICAgICAgcmV0dXJuIHR0KGEsIFsuLi5vLCBBXSk7CiAgICB9LAogICAgc2V0KEMsIEEsIE8pIHsKICAgICAgUm4oaCk7CiAgICAgIGNvbnN0IFtiLCBUXSA9IGpuKE8pOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJTRVQiLAogICAgICAgIHBhdGg6IFsuLi5vLCBBXS5tYXAoKF8pID0+IF8udG9TdHJpbmcoKSksCiAgICAgICAgdmFsdWU6IGIKICAgICAgfSwgVCkudGhlbihRKTsKICAgIH0sCiAgICBhcHBseShDLCBBLCBPKSB7CiAgICAgIFJuKGgpOwogICAgICBjb25zdCBiID0gb1tvLmxlbmd0aCAtIDFdOwogICAgICBpZiAoYiA9PT0gT2UpCiAgICAgICAgcmV0dXJuIHVuKGEsIHsKICAgICAgICAgIHR5cGU6ICJFTkRQT0lOVCIKICAgICAgICB9KS50aGVuKFEpOwogICAgICBpZiAoYiA9PT0gImJpbmQiKQogICAgICAgIHJldHVybiB0dChhLCBvLnNsaWNlKDAsIC0xKSk7CiAgICAgIGNvbnN0IFtULCBfXSA9IFV0KE8pOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJBUFBMWSIsCiAgICAgICAgcGF0aDogby5tYXAoKFMpID0+IFMudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIF8pLnRoZW4oUSk7CiAgICB9LAogICAgY29uc3RydWN0KEMsIEEpIHsKICAgICAgUm4oaCk7CiAgICAgIGNvbnN0IFtPLCBiXSA9IFV0KEEpOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJDT05TVFJVQ1QiLAogICAgICAgIHBhdGg6IG8ubWFwKChUKSA9PiBULnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogTwogICAgICB9LCBiKS50aGVuKFEpOwogICAgfQogIH0pOwogIHJldHVybiBJZShnLCBhKSwgZzsKfQpmdW5jdGlvbiBGZShhKSB7CiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGEpOwp9CmZ1bmN0aW9uIFV0KGEpIHsKICBjb25zdCBvID0gYS5tYXAoam4pOwogIHJldHVybiBbby5tYXAoKGUpID0+IGVbMF0pLCBGZShvLm1hcCgoZSkgPT4gZVsxXSkpXTsKfQpjb25zdCBZdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpOwpmdW5jdGlvbiBqZShhLCBvKSB7CiAgcmV0dXJuIFl0LnNldChhLCBvKSwgYTsKfQpmdW5jdGlvbiBMZShhKSB7CiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYSwgeyBbRHRdOiAhMCB9KTsKfQpmdW5jdGlvbiBqbihhKSB7CiAgZm9yIChjb25zdCBbbywgZV0gb2YgenQpCiAgICBpZiAoZS5jYW5IYW5kbGUoYSkpIHsKICAgICAgY29uc3QgW2gsIGddID0gZS5zZXJpYWxpemUoYSk7CiAgICAgIHJldHVybiBbCiAgICAgICAgewogICAgICAgICAgdHlwZTogIkhBTkRMRVIiLAogICAgICAgICAgbmFtZTogbywKICAgICAgICAgIHZhbHVlOiBoCiAgICAgICAgfSwKICAgICAgICBnCiAgICAgIF07CiAgICB9CiAgcmV0dXJuIFsKICAgIHsKICAgICAgdHlwZTogIlJBVyIsCiAgICAgIHZhbHVlOiBhCiAgICB9LAogICAgWXQuZ2V0KGEpIHx8IFtdCiAgXTsKfQpmdW5jdGlvbiBRKGEpIHsKICBzd2l0Y2ggKGEudHlwZSkgewogICAgY2FzZSAiSEFORExFUiI6CiAgICAgIHJldHVybiB6dC5nZXQoYS5uYW1lKS5kZXNlcmlhbGl6ZShhLnZhbHVlKTsKICAgIGNhc2UgIlJBVyI6CiAgICAgIHJldHVybiBhLnZhbHVlOwogIH0KfQpmdW5jdGlvbiB1bihhLCBvLCBlKSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChoKSA9PiB7CiAgICBjb25zdCBnID0gTmUoKTsKICAgIGEuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIEMoQSkgewogICAgICAhQS5kYXRhIHx8ICFBLmRhdGEuaWQgfHwgQS5kYXRhLmlkICE9PSBnIHx8IChhLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBDKSwgaChBLmRhdGEpKTsKICAgIH0pLCBhLnN0YXJ0ICYmIGEuc3RhcnQoKSwgYS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHsgaWQ6IGcgfSwgbyksIGUpOwogIH0pOwp9CmZ1bmN0aW9uIE5lKCkgewogIHJldHVybiBuZXcgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpLnRvU3RyaW5nKDE2KSkuam9pbigiLSIpOwp9CmZ1bmN0aW9uIFp0KGEsIG8pIHsKICByZXR1cm4gTWF0aC5zcXJ0KChhLnggLSBvLngpICoqIDIgKyAoYS55IC0gby55KSAqKiAyKTsKfQpmdW5jdGlvbiBIZShhLCBvKSB7CiAgcmV0dXJuIHsKICAgIHg6IChhLnggKyBvLngpIC8gMiwKICAgIHk6IChhLnkgKyBvLnkpIC8gMgogIH07Cn0KZnVuY3Rpb24gVWUoYSwgbykgewogIGlmIChhLmNvbmZpZGVuY2UgPD0gMCB8fCBvLmNvbmZpZGVuY2UgPD0gMCkKICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTsKICBjb25zdCBlID0gWnQoYS5jZW50ZXIsIG8uY2VudGVyKSwgaCA9IEhlKGEuY2VudGVyLCBvLmNlbnRlcik7CiAgcmV0dXJuIHsKICAgIHg6IGgueCwKICAgIHk6IGgueSArIGUgLyA0CiAgICAvLyBjYWxjdWxhdGlvbiBpcyB0YWtlbiBmcm9tIG1vYmlsZSB0ZWFtCiAgfTsKfQpmdW5jdGlvbiBEZShhLCBvLCBlKSB7CiAgaWYgKGEuY29uZmlkZW5jZSA8PSAwIHx8IG8uY29uZmlkZW5jZSA8PSAwKQogICAgcmV0dXJuIDA7CiAgY29uc3QgaCA9IFp0KGEuY2VudGVyLCBvLmNlbnRlciksIGcgPSBQZShlLndpZHRoLCBlLmhlaWdodCk7CiAgcmV0dXJuIEVlKGggLyBnKTsKfQpmdW5jdGlvbiBudChhKSB7CiAgY29uc3QgeyBjZW50ZXJYOiBvLCBjZW50ZXJZOiBlLCBjb25maWRlbmNlOiBoLCBzaXplOiBnLCBzdGF0dXM6IEMgfSA9IGE7CiAgcmV0dXJuIHsKICAgIGNlbnRlcjogewogICAgICB4OiBvLAogICAgICB5OiBlCiAgICB9LAogICAgY29uZmlkZW5jZTogaCAvIDFlMywKICAgIHN0YXR1czogQyAvIDFlMywKICAgIHNpemU6IGcKICB9Owp9CmNsYXNzIEJlIGV4dGVuZHMgVGUgewogIHBhcnNlUmF3RGF0YShvLCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IGgsIHNoYXJwbmVzczogZyB9ID0gby5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBDLCBib3R0b21SaWdodFk6IEEsIGxlZnRFeWU6IE8sIG1vdXRoOiBiLCByaWdodEV5ZTogVCwgdG9wTGVmdFg6IF8sIHRvcExlZnRZOiBTIH0gPSBvLCBFID0gbnQoTyksIE0gPSBudChUKSwgVSA9IG50KGIpOwogICAgcmV0dXJuIHsKICAgICAgY29uZmlkZW5jZTogby5jb25maWRlbmNlIC8gMWUzLAogICAgICB0b3BMZWZ0OiB7CiAgICAgICAgeDogXywKICAgICAgICB5OiBTCiAgICAgIH0sCiAgICAgIGJvdHRvbVJpZ2h0OiB7CiAgICAgICAgeDogQywKICAgICAgICB5OiBBCiAgICAgIH0sCiAgICAgIGZhY2VDZW50ZXI6IFVlKEUsIE0pLAogICAgICBmYWNlU2l6ZTogRGUoRSwgTSwgZSksCiAgICAgIGxlZnRFeWU6IEUsCiAgICAgIHJpZ2h0RXllOiBNLAogICAgICBtb3V0aDogVSwKICAgICAgYnJpZ2h0bmVzczogaCAvIDFlMywKICAgICAgc2hhcnBuZXNzOiBnIC8gMWUzCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QobywgZSwgaCkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBqKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBnID0gdGhpcy5jb252ZXJ0VG9TYW1Db2xvckltYWdlKG8sIGUpLCBDID0gdGhpcy5zYW1XYXNtTW9kdWxlLmRldGVjdEZhY2VQYXJ0c1dpdGhJbWFnZVBhcmFtZXRlcnMoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLmJncjBJbWFnZVBvaW50ZXIsCiAgICAgIDAsCiAgICAgIDAsCiAgICAgIC8vIHBhcmFtV2lkdGggc2hvdWxkIGJlIDAgKGRlZmF1bHQgdmFsdWUpCiAgICAgIDAKICAgICAgLy8gcGFyYW1IZWlnaHQgc2hvdWxkIGJlIDAgKGRlZmF1bHQgdmFsdWUpCiAgICApOwogICAgcmV0dXJuIGcuZnJlZSgpLCB0aGlzLnBhcnNlUmF3RGF0YShDLCBoKTsKICB9Cn0KZXQoQmUpOwo=", sf = (x) => Uint8Array.from(atob(x), (i) => i.charCodeAt(0)), As = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", sf(Hg)], { type: "text/javascript;charset=utf-8" });
function cf(x) {
  let i;
  try {
    if (i = As && (window.URL || window.webkitURL).createObjectURL(As), !i) throw "";
    const t = new Worker(i, {
      type: "module",
      name: x == null ? void 0 : x.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(i);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Hg,
      {
        type: "module",
        name: x == null ? void 0 : x.name
      }
    );
  }
}
class gf extends jI {
  constructor(t, e) {
    super();
    V(this, "className", "FaceImageProcessor");
    V(this, "detector");
    V(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = ti(t), n = T1(t, e);
    return super.optimizeImageBeforeDetection(n);
  }
  async process({ image: t, timestamp: e }) {
    const n = this.optimizeImageBeforeDetection(t), o = {};
    o.height = t.height, o.width = t.width;
    let r = await this.detector.detect(n.data, n.resolution, o);
    r = sI(r, ti(t));
    const a = {};
    return a.detectedObject = r, a.image = t, a.imageData = n.data, a.timestamp = e, this.processDetectedObject(a);
  }
}
var N0, s0, c0;
class df {
  constructor(i) {
    ie(this, N0);
    ie(this, s0);
    ie(this, c0);
    te(this, N0, i), te(this, s0, /* @__PURE__ */ new Map());
  }
  validate() {
    L(this, N0).forEach((i) => {
      L(this, s0).set(i.name, i.evaluate());
    }), te(this, c0, void (1 * 6431 + -1292 + -5139));
  }
  isValid() {
    return L(this, c0) === void (-5860 + 9143 * 1 + 1 * -3283) && te(this, c0, Array.from(L(this, s0).values()).every((i) => i)), L(this, c0);
  }
  get result() {
    return L(this, s0);
  }
  get validators() {
    return L(this, N0);
  }
}
N0 = new WeakMap(), s0 = new WeakMap(), c0 = new WeakMap();
var kn, g0;
class $e {
  constructor(i, t) {
    ie(this, kn);
    ie(this, g0);
    te(this, kn, i), te(this, g0, t);
  }
  get threshold() {
    return L(this, g0);
  }
  get name() {
    return L(this, kn);
  }
  isValueBelowThreshold(i) {
    return i < L(this, g0);
  }
  isValueAboveThreshold(i) {
    return i > L(this, g0);
  }
}
kn = new WeakMap(), g0 = new WeakMap();
const uf = "isNotDim";
var On;
class lf extends $e {
  constructor(t, e) {
    super(uf, t);
    ie(this, On);
    te(this, On, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, On));
  }
}
On = new WeakMap();
const If = "isNotSmall";
var Zn;
class ff extends $e {
  constructor(t, e) {
    super(If, t);
    ie(this, Zn);
    te(this, Zn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Zn));
  }
}
Zn = new WeakMap();
const Cf = "isNotBright";
var Hn;
class hf extends $e {
  constructor(t, e) {
    super(Cf, t);
    ie(this, Hn);
    te(this, Hn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, Hn));
  }
}
Hn = new WeakMap();
const pf = "isPresent";
var Rn;
class mf extends $e {
  constructor(t, e) {
    super(pf, t);
    ie(this, Rn);
    te(this, Rn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Rn));
  }
}
Rn = new WeakMap();
const bf = "isSharp";
var Kn;
class Af extends $e {
  constructor(t, e) {
    super(bf, t);
    ie(this, Kn);
    te(this, Kn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Kn));
  }
}
Kn = new WeakMap();
const yf = "isLeftEyePresent";
var Pn;
class vf extends $e {
  constructor(t, e) {
    super(yf, t);
    ie(this, Pn);
    te(this, Pn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Pn));
  }
}
Pn = new WeakMap();
const Wf = "isMouthPresent";
var Tn;
class wf extends $e {
  constructor(t, e) {
    super(Wf, t);
    ie(this, Tn);
    te(this, Tn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Tn));
  }
}
Tn = new WeakMap();
const Sf = "isMouthScoreNotTooLow";
var Vn;
class Bf extends $e {
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
const Gf = "isMouthScoreNotTooHigh";
var En;
class kf extends $e {
  constructor(t, e) {
    super(Gf, t);
    ie(this, En);
    te(this, En, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, En));
  }
}
En = new WeakMap();
const Of = "isNotLarge";
var Ln;
class Zf extends $e {
  constructor(t, e) {
    super(Of, t);
    ie(this, Ln);
    te(this, Ln, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, Ln));
  }
}
Ln = new WeakMap();
const Hf = "isNotPitched";
var Nn;
const Kr = class Kr extends $e {
  constructor(t, e) {
    super(Hf, Kr.calculatePitchAngleAccelerationThreshold(t));
    ie(this, Nn);
    te(this, Nn, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return Rl * Math.sin(t * (Math.PI / (14505 + -573 * 25)));
  }
  evaluate() {
    const { z: t } = L(this, Nn) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
Nn = new WeakMap();
let er = Kr;
const Rf = "isRightEyePresent";
var Dn;
class Kf extends $e {
  constructor(t, e) {
    super(Rf, t);
    ie(this, Dn);
    te(this, Dn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Dn));
  }
}
Dn = new WeakMap();
const Pf = "isNotOutOfBounds";
var Fn, d0;
class Tf extends $e {
  constructor(t, e, n) {
    super(Pf, t);
    ie(this, Fn);
    ie(this, d0);
    te(this, Fn, e), te(this, d0, n);
  }
  evaluate() {
    const t = Uc(L(this, d0), this.threshold, ti(L(this, d0))), e = cg(L(this, Fn), L(this, d0));
    return L1(e, t);
  }
}
Fn = new WeakMap(), d0 = new WeakMap();
class Vf {
  static getFaceValidationInstance(i, t, e, n) {
    return new df([new mf(i.faceConfidence, t.confidence), new vf(i.leftEye.confidence, t.leftEye.confidence), new Kf(i.rightEye.confidence, t.rightEye.confidence), new ff(i.minFaceSizeRatio, t.faceSize), new Zf(i.maxFaceSizeRatio, t.faceSize), new Af(i.sharpnessThreshold, t.sharpness), new lf(i.brightnessLowThreshold, t.brightness), new hf(i.brightnessHighThreshold, t.brightness), new Tf(i.outOfBoundsThreshold, t, e), new er(i.devicePitchAngleThreshold, n), new wf(i.mouth.confidence, t.mouth.confidence), new kf(i.mouth.status.max, t.mouth.status), new Bf(i.mouth.status.min, t.mouth.status)]);
  }
}
class Ef extends JI {
  constructor() {
    super(...arguments);
    V(this, "className", "FaceValidationService");
    V(this, "acceleration", null);
  }
  validateDetectedObject(t, e) {
    const n = Vf.getFaceValidationInstance(this.getThresholds(), t, e, this.acceleration);
    return n.validate(), n;
  }
}
const Ci = class Ci extends _I {
  constructor(t, e, n, o) {
    super(n, o);
    V(this, "detector");
    V(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  static async createInstance(t) {
    const e = new cf(), n = kg(e), o = await new n(), r = new Ef(), a = new gf(o, r), s = new Ci(o, r, a, t);
    this._instance = s;
  }
  static async getInstance(t) {
    return !this._instance && await this.createInstance(t), this._instance;
  }
  stopDetectionLoop() {
    var t;
    super.stopDetectionLoop(), Nc(Pt.INSTRUCTION_CHANGED, (t = this.detection) == null ? void 0 : t["fallbackInstruction"], t1);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
};
V(Ci, "_instance");
let tr = Ci;
const Lf = () => {
  const { handleError: x } = q0(), { acceleration: i } = D1(), { thresholds: t, wasmDirectoryPath: e } = Br(), [n, o] = Le();
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
  const { cameraFacing: i, captureMode: t, onPhotoTaken: e, sessionToken: n } = Br(), { controller: o } = Lf(), r = qe(({ candidateSelectionImages: c, imageData: d, protoMessage: g, webMetadata: C }) => {
    pI(Zc.FACE, c), e(d, g);
    const u = {};
    u.cameraProperties = C, x == null || x(u);
  }, [x, e]), a = qe(({ fps: c, processedImage: d }, g) => {
    Nc(Pt.INSTRUCTION_CHANGED, d.instructionCode), o && o1(Pt.DETECTED_FACE_CHANGED, d.detection, o.imageProcessor.validationService.getThresholds().faceConfidence);
    const C = {};
    C.detection = d.detection, C.fps = c, C.image = g, C.isInCandidateSelection = d.isInCandidateSelection, C.invalidValidators = d.invalidValidators, r1(Pt.FACE_DETECTION, C);
  }, [o]), s = {};
  return s.captureMode = t, s.cameraFacing = i, s.controller = o, s.createProtoMessage = XI, s.onCapture = r, s.onDetection = a, s.sessionToken = n, s.customEvent = Pt, s.fallbackInstruction = pe.FACE_NOT_PRESENT, s.instructionCodeMap = pe, s.checkToInstructionCodeMap = gl, xI(s);
}
const Df = ({ onPhotoTakenInternal: x }) => {
  const { sunfish: i } = $0(), { cameraResolution: t, detectionDetails: e, shouldCameraMirror: n, videoRef: o } = Nf({
    onPhotoTakenInternal: x
  });
  return /* @__PURE__ */ O(at, { children: /* @__PURE__ */ O(
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
          id: n1,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}, Ff = ({ onPhotoTakenInternal: x, ...i }) => /* @__PURE__ */ O(aI, { cameraOptions: i, children: /* @__PURE__ */ O(Df, { onPhotoTakenInternal: x }) });
function Yf({ onFaceTrackingLost: x, skipOutsideOfCandidateSelection: i }) {
  const t = Ge(x);
  ae(() => {
    t.current = x;
  }, [x]);
  const e = qe((o) => {
    if (!o.detail) return;
    const { data: r } = o.detail;
    i && !r.isInCandidateSelection || r.invalidValidators.includes(pe.FACE_NOT_PRESENT) && t.current();
  }, [i]), n = {};
  return n.handleFaceDetection = e, n;
}
function Mf(x) {
  return function(t) {
    const { handleFaceDetection: e } = x(t);
    Qc(Pt.FACE_DETECTION, e);
  };
}
const Xf = ({ children: x }) => {
  const i = Ge(null);
  return H1(i, Pt.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ O(ol, { ref: i, children: x });
};
async function _f(x, i, t) {
  const { SmileLivenessContent: e } = p0.v4, n = await qo(x), o = await qo(i), r = await Ag(t), a = {};
  a.neutralExpressionFaceImage = n, a.smileExpressionFaceImage = o, a.metadata = r;
  const s = a, c = e.verify(s);
  if (c) throw Error(c);
  const d = e.create(s), g = {};
  return g.smileLivenessContent = d, vg(g);
}
async function jf(x, i, t) {
  const e = await _f(x, i, t);
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
const n0 = {};
n0.brightnessHighThreshold = 1, n0.brightnessLowThreshold = -(146 * -16 + 8036 + -1 * 5699), n0.sharpnessThreshold = -(-7484 * -1 + 6463 + 13946 * -1), n0.outOfBoundsThreshold = -(86 * -43 + -9397 * -1 + 11 * -518), n0.minFaceSizeRatio = 0.1, n0.mouth = xr;
const Jf = { [bt.NEUTRAL]: Kg, [bt.SMILE]: n0 }, Uf = Jf, Qf = 96 * 64 + -7 * -887 + 171 * -43, ys = 10 * 767 + -36 * 73 + -1 * 5027;
function zf() {
  return { images: { fps: new wn(-19 * -235 + 5137 * 1 + -9572), mouthStatus: new wn(6310 + -65 * 97) }, imageResolution: void (-1 * -1131 + 1402 + -149 * 17) };
}
function qf({ skip: x }) {
  const i = Ge(zf()), { analytics: t } = Ar(), { crosshatch: e } = $0(), n = Ge(!1);
  function o() {
    const c = i.current, d = ei(c.images.fps), g = ei(c.images.mouthStatus);
    n.current = !0;
    const C = {};
    C.customer = e == null ? void 0 : e.customer, C.duration = ys, C.averageFps = d, C.imageResolution = c.imageResolution, C.averageExpressionScore = g, t == null || t.trackLongCapture(C);
  }
  const r = {};
  r.callback = o, r.delay = ys * (681 + -2 * 4108 + 8535), r.skip = x || n.current, rg(r);
  const a = qe((c) => {
    if (!c.detail) return;
    const { data: d } = c.detail;
    i.current.images.fps.pushFixed(d.fps), i.current.images.mouthStatus.pushFixed(d.detection.mouth.status), i.current.imageResolution = d.imageResolution;
  }, []);
  Qc(Pt.FACE_DETECTION, a);
  const s = {};
  return s.wasEventTriggered = n, s;
}
function $f({ phase: x }) {
  const [i, t] = Le(Dx.AUTO_CAPTURE), e = ag(i);
  function n() {
    t(Dx.WAIT_FOR_REQUEST), e(() => a1(kx.FIRST_FRAME));
  }
  const o = {};
  o.callback = n, o.delay = Qf, o.skip = x === bt.NEUTRAL;
  const { clear: r, isActive: a, reset: s } = rg(o), c = {};
  return c.captureMode = i, c.restart = s, c.stop = r, c.isActive = a, c;
}
function e2(x, i) {
  var t = { ...Uf[x.value], ...i };
  return t;
}
const t2 = ({
  licensePath: x,
  onComplete: i,
  sessionToken: t,
  thresholds: e,
  wasmDirectoryPath: n
}) => {
  const { analytics: o } = Ar(), { appState: r, handleAppStateChange: a, handleError: s } = ll(), { cameraProperties: c, mergeCameraProperties: d } = oI(), g = ag(r), C = E0(bt.NEUTRAL), u = E0(null), h = E0(null), { captureMode: m, stop: A } = $f({ phase: C.value });
  qf({
    skip: C.value !== bt.NEUTRAL || r !== yt.RUNNING
  });
  function l(Z) {
    C.value = Z, Lo(Nx.STATUS_CHANGED, { phase: Z });
  }
  function W() {
    a(yt.WAITING), g(() => a(yt.RUNNING));
  }
  function H() {
    A(), W(), l(bt.NEUTRAL), u.value = null, h.value = null, o == null || o.reset();
  }
  Mf(Yf)({
    onFaceTrackingLost: H,
    skipOutsideOfCandidateSelection: C.value === bt.NEUTRAL
  });
  function X(Z) {
    u.value = Z, l(bt.SMILE), a(yt.RUNNING);
  }
  async function _(Z) {
    A(), h.value = Z;
    try {
      if (!u.value || !h.value)
        throw new xe("Missing face data");
      const z = {
        sessionToken: t,
        web: c.value
      }, U = await jf(
        u.value.image,
        h.value.image,
        z
      ), q = [u.value, h.value];
      i(q, U), o == null || o.trackLivenessProcess(q), a(yt.DONE);
    } catch (z) {
      z instanceof Error && s(xe.fromError(z));
      return;
    }
  }
  const j = {
    [bt.NEUTRAL]: X,
    [bt.SMILE]: _
  };
  return /* @__PURE__ */ O(Xf, { children: /* @__PURE__ */ O(
    Ff,
    {
      captureMode: m,
      licensePath: x,
      onPhotoTaken: j[C.value],
      onPhotoTakenInternal: d,
      thresholds: e2(C, e),
      wasmDirectoryPath: n
    }
  ) });
};
function n2({ initAppState: x, onError: i }) {
  const [t, e] = Le(x), [n, o] = Le(), [r, a] = Le(!1), s = Ge(i);
  ae(() => {
    s.current = i;
  }, [i]);
  const c = {};
  return c.appState = t, c.setAppState = e, c.error = n, c.setError = o, c.isCameraReady = r, c.setIsCameraReady = a, c.onErrorRef = s, c;
}
function x2(x) {
  return x !== yt.RUNNING && x !== yt.WAITING ? _x.VISIBLE : _x.VISIBLE_WITH_MASK;
}
function i2({ onError: x }) {
  const { appState: i, error: t, isCameraReady: e, onErrorRef: n, setAppState: o, setError: r, setIsCameraReady: a } = n2({
    initAppState: yt.LOADING,
    onError: x
  }), s = x2(i), c = qe(
    (g) => {
      Lo(Nx.STATUS_CHANGED, { state: yt.ERROR, error: g }), a(!1), n.current(g), r(g), o(yt.ERROR);
    },
    [a, n, r, o]
  ), d = qe(
    (g) => {
      o(g), Lo(Nx.STATUS_CHANGED, { state: g });
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
class o2 {
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
    const a = Cx(r);
    await fetch("" + o + a + "&" + i, n);
  }
  async init(i, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = i;
    const e = { _app_version: Mc() }, n = { organization: Xc(window.location.href) }, o = Cx({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
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
    await this.sendEvent(Rr.AUTO_CAPTURE, i, t);
  }
}
const mx = new o2();
class r2 {
  constructor() {
    V(this, "countly", mx);
  }
  createSegmentation(i) {
    return { appVersion: Mc(), ...i };
  }
  init(i) {
    if (v1()) return;
    const t = J1();
    mx.init(t, i);
  }
  endSession() {
    mx.endSession();
  }
  walleye(i, t) {
    const e = {};
    e.nocturne = i, e.customer = t;
    const n = this.createSegmentation(e);
    mx.sendAutoCaptureEvent(n);
  }
}
class a2 extends r2 {
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
class s2 extends a2 {
  trackLivenessProcess(i) {
    var d, g, C, u, h, m;
    if (!i.length || !this.captureProcessAnalytics.length) return;
    const [t, e] = i, [n, o] = this.captureProcessAnalytics, r = q1(n.averageFps + (o == null ? void 0 : o.averageFps)) / (3525 + 13 * 161 + 8 * -702), a = z1(n.captureProcessDurationInMs), s = 14869 + -7433 * 2, c = this.createSegmentation({ faceSize: os((d = e.data.detection) == null ? void 0 : d.faceSize), confidence: os((g = t.data.detection) == null ? void 0 : g.confidence), imageResolution: ((u = (C = t.data) == null ? void 0 : C["imageResolution"]) == null ? void 0 : u.width) + "x" + ((m = (h = t.data) == null ? void 0 : h["imageResolution"]) == null ? void 0 : m.height), averageFps: r, captureTimeNeutral: Q1(a), captureTimeSmile: "" + s, camera: U1(n == null ? void 0 : n.deviceName, n.facingMode), instructionSet: n.instructionSet });
    this.countly.sendAutoCaptureEvent(c, a + s), this.reset();
  }
  async trackLongCapture(i) {
    const { averageExpressionScore: t, averageFps: e, customer: n, duration: o, imageResolution: r } = i, a = this.createSegmentation({ imageResolution: r, averageFps: e, instructionSet: await ig(), expressionScore: t, ...n && { customer: n } });
    this.countly.sendEvent(Rr.LONG_CAPTURE_SMILE, a, o);
  }
}
const c2 = new s2(), g2 = ({ props: x }) => x ? /* @__PURE__ */ O(qu, { target: x.styleTarget, children: /* @__PURE__ */ O(
  bl,
  {
    licensePath: x.licensePath,
    bramble: Eo.getInstance(),
    wasmDirectoryPath: x.wasmDirectoryPath,
    children: /* @__PURE__ */ O(vl, { analytics: c2, appKey: "d64319129bb0ee02eccfab418edba9629a97d6b6", children: /* @__PURE__ */ O(
      ul,
      {
        value: i2({
          onError: x.onError
        }),
        children: /* @__PURE__ */ O(kc, { children: /* @__PURE__ */ O(t2, { ...x }) })
      }
    ) })
  }
) }) : null;
cd(g2, "x-dot-smile-liveness", ["props"]);
