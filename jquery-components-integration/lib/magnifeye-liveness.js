var Gg = Object.defineProperty;
var Er = (x) => {
  throw TypeError(x);
};
var kg = (x, o, t) => o in x ? Gg(x, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[o] = t;
var M = (x, o, t) => kg(x, typeof o != "symbol" ? o + "" : o, t), Nr = (x, o, t) => o.has(x) || Er("Cannot " + t);
var j = (x, o, t) => (Nr(x, o, "read from private field"), t ? t.call(x) : o.get(x)), ce = (x, o, t) => o.has(x) ? Er("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(x) : o.set(x, t), ae = (x, o, t, e) => (Nr(x, o, "write to private field"), e ? e.call(x, t) : o.set(x, t), t);
var Ln, Y, os, is, i0, Lr, rs, _o, Ei, Uo, Qo, as, yn = {}, ss = [], Hg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, xo = Array.isArray;
function Tt(x, o) {
  for (var t in o) x[t] = o[t];
  return x;
}
function cs(x) {
  var o = x.parentNode;
  o && o.removeChild(x);
}
function Xe(x, o, t) {
  var e, n, i, r = {};
  for (i in o) i == "key" ? e = o[i] : i == "ref" ? n = o[i] : r[i] = o[i];
  if (arguments.length > 9575 * -1 + 25 * 179 + 5102 && (r.children = arguments.length > 3 ? Ln.call(arguments, 2940 + -2938 * 1) : t), typeof x == "function" && x.defaultProps != null)
    for (i in x.defaultProps) r[i] === void 0 && (r[i] = x.defaultProps[i]);
  return Cn(x, r, e, n, null);
}
function Cn(x, o, t, e, n) {
  var i = {};
  i.type = x, i.props = o, i.key = t, i.ref = e, i.__k = null, i.__ = null, i.__b = 0, i.__e = null, i.__d = void (450 + 450 * -1), i.__c = null, i.constructor = void (-6120 + 9 * -747 + -3 * -4281), i.__v = n ?? ++os, i.__i = -1, i.__u = 0;
  var r = i;
  return n == null && Y.vnode != null && Y.vnode(r), r;
}
function Og() {
  var x = {};
  return x.current = null, x;
}
function mt(x) {
  return x.children;
}
function dt(x, o) {
  this.props = x, this.context = o;
}
function I0(x, o) {
  if (o == null) return x.__ ? I0(x.__, x.__i + (3719 + 8803 * -1 + 5085)) : null;
  for (var t; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) return t.__e;
  return typeof x.type == "function" ? I0(x) : null;
}
function gs(x) {
  var o, t;
  if ((x = x.__) != null && x.__c != null) {
    for (x.__e = x.__c.base = null, o = 10 * 298 + -4087 + -27 * -41; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) {
      x.__e = x.__c.base = t.__e;
      break;
    }
    return gs(x);
  }
}
function zo(x) {
  (!x.__d && (x.__d = !(9046 + -2 * 4523)) && i0.push(x) && !Gx.__r++ || Lr !== Y.debounceRendering) && ((Lr = Y.debounceRendering) || rs)(Gx);
}
function Gx() {
  var x, o, t, e, n, i, r, a;
  for (i0.sort(_o); x = i0.shift(); ) x.__d && (o = i0.length, e = void (-5430 + -5 * -1447 + -1805 * 1), i = (n = (t = x).__v).__e, r = [], a = [], t.__P && ((e = Tt({}, n)).__v = n.__v + (-6977 * -1 + -117 * 41 + -2179), Y.vnode && Y.vnode(e), Ni(t.__P, e, n, t.__n, t.__P.namespaceURI, -6491 + 23 * -84 + 8455 & n.__u ? [i] : null, r, i ?? I0(n), !!(-9676 + 1 * 9964 + -4 * 64 & n.__u), a), e.__v = n.__v, e.__.__k[e.__i] = e, ls(r, e, a), e.__e != i && gs(e)), i0.length > o && i0.sort(_o));
  Gx.__r = -8724 + -1214 * -4 + 3868;
}
function ds(x, o, t, e, n, i, r, a, s, c, u) {
  var g, C, l, h, p, A = e && e.__k || ss, d = o.length;
  for (t.__d = s, Zg(t, o, A), s = t.__d, g = -279 + -1 * 5669 + 5948; g < d; g++) (l = t.__k[g]) != null && typeof l != "boolean" && typeof l != "function" && (C = -(-8231 * 1 + 7 * 851 + -325 * -7) === l.__i ? yn : A[l.__i] || yn, l.__i = g, Ni(x, l, C, n, i, r, a, s, c, u), h = l.__e, l.ref && C.ref != l.ref && (C.ref && Li(C.ref, null, l), u.push(l.ref, l.__c || h, l)), p == null && h != null && (p = h), -1879 * 1 + -1 * 24465 + 91880 & l.__u || C.__k === l.__k ? (s && typeof l.type == "string" && !x.contains(s) && (s = I0(C)), s = us(l, s, x)) : typeof l.type == "function" && void (4274 + -3 * -1543 + -307 * 29) !== l.__d ? s = l.__d : h && (s = h.nextSibling), l.__d = void (-2826 + -18 * -157), l.__u &= -(1 * 348798 + 275772 + -23 * 18607));
  t.__d = s, t.__e = p;
}
function Zg(x, o, t) {
  var e, n, i, r, a, s = o.length, c = t.length, u = c, g = 659 * 12 + -9724 + 8 * 227;
  for (x.__k = [], e = -1 * -3311 + 1 * -2737 + -2 * 287; e < s; e++) r = e + g, (n = x.__k[e] = (n = o[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? Cn(null, n, null, null, null) : xo(n) ? Cn(mt, { children: n }, null, null, null) : void (397 * -8 + -441 * -15 + 19 * -181) === n.constructor && n.__b > 668 * 12 + 318 + -926 * 9 ? Cn(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = x, n.__b = x.__b + (-167 * -12 + 1 * -964 + -1039 * 1), a = Kg(n, t, r, u), n.__i = a, i = null, -(3559 + -4817 * -2 + -34 * 388) !== a && (u--, (i = t[a]) && (i.__u |= -80036 * -2 + 2 * 16039 + 61078 * -1)), i == null || i.__v === null ? (-(2153 + -9 * -607 + -7615) == a && g--, typeof n.type != "function" && (n.__u |= -88532 + 1282 * -87 + -132801 * -2)) : a !== r && (a == r - (14696 + -2939 * 5) ? g = a - r : a == r + (1 * 9031 + -15 * -571 + -17595) ? g++ : a > r ? u > s - r ? g += a - r : g-- : a < r && g++, a !== e + g && (n.__u |= 87012 + -364 * 59))) : (i = t[r]) && i.key == null && i.__e && 3471 + 13 * -267 == (-233764 + -1 * 209887 + 574723 & i.__u) && (i.__e == x.__d && (x.__d = I0(i)), qo(i, i, !(-10660 + 1 * 10661)), t[r] = null, u--);
  if (u)
    for (e = 3 * 351 + -111 * -4 + -1497; e < c; e++) (i = t[e]) != null && -481 + -52 * -173 + -8515 * 1 == (131072 & i.__u) && (i.__e == x.__d && (x.__d = I0(i)), qo(i, i));
}
function us(x, o, t) {
  var e, n;
  if (typeof x.type == "function") {
    for (e = x.__k, n = 277 * -13 + -338 + -101 * -39; e && n < e.length; n++) e[n] && (e[n].__ = x, o = us(e[n], o, t));
    return o;
  }
  x.__e != o && (t.insertBefore(x.__e, o || null), o = x.__e);
  do
    o = o && o.nextSibling;
  while (o != null && -5 * 933 + 40 + 4633 === o.nodeType);
  return o;
}
function Nt(x, o) {
  return o = o || [], x == null || typeof x == "boolean" || (xo(x) ? x.some(function(t) {
    Nt(t, o);
  }) : o.push(x)), o;
}
function Kg(x, o, t, e) {
  var n = x.key, i = x.type, r = t - 1, a = t + (2881 + -30 * 96), s = o[t];
  if (s === null || s && n == s.key && i === s.type && -6733 * 1 + -8033 + -7383 * -2 == (-87937 * 1 + 371 * -533 + 61 * 6832 & s.__u)) return t;
  if (e > (s != null && -1 * -7972 + -369 + 7603 * -1 == (1 * 125951 + 149285 * 1 + -1567 * 92 & s.__u) ? 1 : 0)) for (; r >= -361 * -17 + -84 * -71 + -12101 || a < o.length; ) {
    if (r >= 5944 + 2972 * -2) {
      if ((s = o[r]) && -1 * -2359 + -577 * -2 + -3513 == (35 * -352 + -240028 + -4036 * -95 & s.__u) && n == s.key && i === s.type) return r;
      r--;
    }
    if (a < o.length) {
      if ((s = o[a]) && 7815 + 1796 * 4 + 53 * -283 == (131072 & s.__u) && n == s.key && i === s.type) return a;
      a++;
    }
  }
  return -(-4 * 1173 + -97 * 56 + -135 * -75);
}
function Dr(x, o, t) {
  o[0] === "-" ? x.setProperty(o, t ?? "") : x[o] = t == null ? "" : typeof t != "number" || Hg.test(o) ? t : t + "px";
}
function nx(x, o, t, e, n) {
  var i;
  e: if (o === "style")
    if (typeof t == "string") x.style.cssText = t;
    else {
      if (typeof e == "string" && (x.style.cssText = e = ""), e)
        for (o in e) t && o in t || Dr(x.style, o, "");
      if (t)
        for (o in t) e && t[o] === e[o] || Dr(x.style, o, t[o]);
    }
  else if (o[-19 * 301 + -2276 + 7995] === "o" && o[-1 * 7171 + -3811 + 10983] === "n") i = o !== (o = o.replace(/(PointerCapture)$|Capture$/i, "$1")), o = o.toLowerCase() in x || o === "onFocusOut" || o === "onFocusIn" ? o.toLowerCase().slice(3328 + -1 * 3326) : o.slice(34 * -68 + 5 * -1249 + 2853 * 3), x.l || (x.l = {}), x.l[o + i] = t, t ? e ? t.u = e.u : (t.u = Ei, x.addEventListener(o, i ? Qo : Uo, i)) : x.removeEventListener(o, i ? Qo : Uo, i);
  else {
    if (n == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in x) try {
      x[o] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && o[-5773 + -8752 * -1 + 2975 * -1] !== "-" ? x.removeAttribute(o) : x.setAttribute(o, o == "popover" && 8118 + -8117 * 1 == t ? "" : t));
  }
}
function Fr(x) {
  return function(o) {
    if (this.l) {
      var t = this.l[o.type + x];
      if (o.t == null) o.t = Ei++;
      else if (o.t < t.u) return;
      return t(Y.event ? Y.event(o) : o);
    }
  };
}
function Ni(x, o, t, e, n, i, r, a, s, c) {
  var u, g, C, l, h, p, A, d, W, Z, D, E, F, k, _, fe, Q = o.type;
  if (void (-8 * -974 + -1 * -307 + -8099) !== o.constructor) return null;
  -1185 * -5 + 569 * -4 + -3521 & t.__u && (s = !!(-7617 * -1 + 1 * -4931 + -2654 * 1 & t.__u), i = [a = o.__e = t.__e]), (u = Y.__b) && u(o);
  e: if (typeof Q == "function") try {
    if (d = o.props, W = "prototype" in Q && Q.prototype.render, Z = (u = Q.contextType) && e[u.__c], D = u ? Z ? Z.props.value : u.__ : e, t.__c ? A = (g = o.__c = t.__c).__ = g.__E : (W ? o.__c = g = new Q(d, D) : (o.__c = g = new dt(d, D), g.constructor = Q, g.render = Pg), Z && Z.sub(g), g.props = d, g.state || (g.state = {}), g.context = D, g.__n = e, C = g.__d = !0, g.__h = [], g._sb = []), W && g.__s == null && (g.__s = g.state), W && Q.getDerivedStateFromProps != null && (g.__s == g.state && (g.__s = Tt({}, g.__s)), Tt(g.__s, Q.getDerivedStateFromProps(d, g.__s))), l = g.props, h = g.state, g.__v = o, C) W && Q.getDerivedStateFromProps == null && g.componentWillMount != null && g.componentWillMount(), W && g.componentDidMount != null && g.__h.push(g.componentDidMount);
    else {
      if (W && Q.getDerivedStateFromProps == null && d !== l && g.componentWillReceiveProps != null && g.componentWillReceiveProps(d, D), !g.__e && (g.shouldComponentUpdate != null && !(-4 * -1907 + -2 * -2274 + -12175) === g.shouldComponentUpdate(d, g.__s, D) || o.__v === t.__v)) {
        for (o.__v !== t.__v && (g.props = d, g.state = g.__s, g.__d = !1), o.__e = t.__e, o.__k = t.__k, o.__k.forEach(function(Ce) {
          Ce && (Ce.__ = o);
        }), E = 6642 + 7 * 546 + -4 * 2616; E < g._sb.length; E++) g.__h.push(g._sb[E]);
        g._sb = [], g.__h.length && r.push(g);
        break e;
      }
      g.componentWillUpdate != null && g.componentWillUpdate(d, g.__s, D), W && g.componentDidUpdate != null && g.__h.push(function() {
        g.componentDidUpdate(l, h, p);
      });
    }
    if (g.context = D, g.props = d, g.__P = x, g.__e = !(-5801 * 1 + -9980 + 7891 * 2), F = Y.__r, k = -2947 + -421 * -7, W) {
      for (g.state = g.__s, g.__d = !(-1704 + 155 * 11), F && F(o), u = g.render(g.props, g.state, g.context), _ = -5497 * -1 + -4799 + -698; _ < g._sb.length; _++) g.__h.push(g._sb[_]);
      g._sb = [];
    } else do
      g.__d = !1, F && F(o), u = g.render(g.props, g.state, g.context), g.state = g.__s;
    while (g.__d && ++k < -5228 + -527 * 4 + -17 * -433);
    g.state = g.__s, g.getChildContext != null && (e = Tt(Tt({}, e), g.getChildContext())), W && !C && g.getSnapshotBeforeUpdate != null && (p = g.getSnapshotBeforeUpdate(l, h)), ds(x, xo(fe = u != null && u.type === mt && u.key == null ? u.props.children : u) ? fe : [fe], o, t, e, n, i, r, a, s, c), g.base = o.__e, o.__u &= -(-764 * -1 + 230 + -833 * 1), g.__h.length && r.push(g), A && (g.__E = g.__ = null);
  } catch (Ce) {
    o.__v = null, s || i != null ? (o.__e = a, o.__u |= s ? 1 * 4157 + -3531 * -2 + -11059 * 1 : 4054 * 1 + -7561 + -3539 * -1, i[i.indexOf(a)] = null) : (o.__e = t.__e, o.__k = t.__k), Y.__e(Ce, o, t);
  }
  else i == null && o.__v === t.__v ? (o.__k = t.__k, o.__e = t.__e) : o.__e = Rg(t.__e, o, t, e, n, i, r, s, c);
  (u = Y.diffed) && u(o);
}
function ls(x, o, t) {
  o.__d = void (-2565 + -913 * -1 + 826 * 2);
  for (var e = -3 * -1789 + 248 * 1 + 1123 * -5; e < t.length; e++) Li(t[e], t[++e], t[++e]);
  Y.__c && Y.__c(o, x), x.some(function(n) {
    try {
      x = n.__h, n.__h = [], x.some(function(i) {
        i.call(n);
      });
    } catch (i) {
      Y.__e(i, n.__v);
    }
  });
}
function Rg(x, o, t, e, n, i, r, a, s) {
  var c, u, g, C, l, h, p, A = t.props, d = o.props, W = o.type;
  if (W === "svg" ? n = "http://www.w3.org/2000/svg" : W === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), i != null) {
    for (c = -9887 + 169 * 21 + 6338; c < i.length; c++) if ((l = i[c]) && "setAttribute" in l == !!W && (W ? l.localName === W : 4608 + 9061 * -1 + 1 * 4456 === l.nodeType)) {
      x = l, i[c] = null;
      break;
    }
  }
  if (x == null) {
    if (W === null) return document.createTextNode(d);
    x = document.createElementNS(n, W, d.is && d), i = null, a = !(9464 * -1 + 43 * 29 + -14 * -587);
  }
  if (W === null) A === d || a && x.data === d || (x.data = d);
  else {
    if (i = i && Ln.call(x.childNodes), A = t.props || yn, !a && i != null)
      for (A = {}, c = 1514 + -1031 * 1 + -69 * 7; c < x.attributes.length; c++) A[(l = x.attributes[c]).name] = l.value;
    for (c in A) if (l = A[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") g = l;
      else if (c !== "key" && !(c in d)) {
        if (c == "value" && "defaultValue" in d || c == "checked" && "defaultChecked" in d) continue;
        nx(x, c, null, l, n);
      }
    }
    for (c in d) l = d[c], c == "children" ? C = l : c == "dangerouslySetInnerHTML" ? u = l : c == "value" ? h = l : c == "checked" ? p = l : c === "key" || a && typeof l != "function" || A[c] === l || nx(x, c, l, A[c], n);
    if (u) a || g && (u.__html === g.__html || u.__html === x.innerHTML) || (x.innerHTML = u.__html), o.__k = [];
    else if (g && (x.innerHTML = ""), ds(x, xo(C) ? C : [C], o, t, e, W === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, i, r, i ? i[-3 * -3287 + -7886 * -1 + -17747] : t.__k && I0(t, 0), a, s), i != null)
      for (c = i.length; c--; ) i[c] != null && cs(i[c]);
    a || (c = "value", void (1 * -4801 + -5408 + -10209 * -1) !== h && (h !== x[c] || W === "progress" && !h || W === "option" && h !== A[c]) && nx(x, c, h, A[c], n), c = "checked", void (3 * -2386 + -2813 + 9971) !== p && p !== x[c] && nx(x, c, p, A[c], n));
  }
  return x;
}
function Li(x, o, t) {
  try {
    typeof x == "function" ? x(o) : x.current = o;
  } catch (e) {
    Y.__e(e, t);
  }
}
function qo(x, o, t) {
  var e, n;
  if (Y.unmount && Y.unmount(x), (e = x.ref) && (e.current && e.current !== x.__e || Li(e, null, o)), (e = x.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (i) {
      Y.__e(i, o);
    }
    e.base = e.__P = null;
  }
  if (e = x.__k)
    for (n = -6131 * 1 + 2 * -2211 + 10553; n < e.length; n++) e[n] && qo(e[n], o, t || typeof x.type != "function");
  t || x.__e == null || cs(x.__e), x.__c = x.__ = x.__e = x.__d = void (6771 + -1 * 6965 + 194);
}
function Pg(x, o, t) {
  return this.constructor(x, t);
}
function Ut(x, o, t) {
  var e, n, i, r;
  Y.__ && Y.__(x, o), n = (e = typeof t == "function") ? null : t && t.__k || o.__k, i = [], r = [], Ni(o, x = (!e && t || o).__k = Xe(mt, null, [x]), n || yn, yn, o.namespaceURI, !e && t ? [t] : n ? null : o.firstChild ? Ln.call(o.childNodes) : null, i, !e && t ? t : n ? n.__e : o.firstChild, e, r), ls(i, x, r);
}
function Di(x, o) {
  Ut(x, o, Di);
}
function Fi(x, o, t) {
  var e, n, i, r, a = Tt({}, x.props);
  for (i in x.type && x.type.defaultProps && (r = x.type.defaultProps), o) i == "key" ? e = o[i] : i == "ref" ? n = o[i] : a[i] = void (3999 + 2 * -1366 + -1267) === o[i] && void (6462 + 2 * -789 + -4884) !== r ? r[i] : o[i];
  return arguments.length > -3079 + -7556 * 1 + 11 * 967 && (a.children = arguments.length > -6649 + 3453 * 1 + 1 * 3199 ? Ln.call(arguments, 11692 + -334 * 35) : t), Cn(x.type, a, e || x.key, n || x.ref, null);
}
function Dn(x, o) {
  var t = { __c: o = "__cC" + as++, __: x, Consumer: function(e, n) {
    return e.children(n);
  }, Provider: function(e) {
    var n, i;
    return this.getChildContext || (n = [], (i = {})[o] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value !== r.value && n.some(function(a) {
        a.__e = !0, zo(a);
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
Ln = ss.slice, Y = { __e: function(x, o, t, e) {
  for (var n, i, r; o = o.__; ) if ((n = o.__c) && !n.__) try {
    if ((i = n.constructor) && i.getDerivedStateFromError != null && (n.setState(i.getDerivedStateFromError(x)), r = n.__d), n.componentDidCatch != null && (n.componentDidCatch(x, e || {}), r = n.__d), r) return n.__E = n;
  } catch (a) {
    x = a;
  }
  throw x;
} }, os = 78 + 238 * -12 + 2778, is = function(x) {
  return x != null && x.constructor == null;
}, dt.prototype.setState = function(x, o) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Tt({}, this.state), typeof x == "function" && (x = x(Tt({}, t), this.props)), x && Tt(t, x), x != null && this.__v && (o && this._sb.push(o), zo(this));
}, dt.prototype.forceUpdate = function(x) {
  this.__v && (this.__e = !(-10 * 701 + -13 * 673 + -17 * -927), x && this.__h.push(x), zo(this));
}, dt.prototype.render = mt, i0 = [], rs = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, _o = function(x, o) {
  return x.__v.__b - o.__v.__b;
}, Gx.__r = 8297 + -1 * -425 + -8722, Ei = -1 * -2115 + -2 * 2027 + -277 * -7, Uo = Fr(!1), Qo = Fr(!(-1322 * 3 + -404 + 4370)), as = 2 * -923 + -3461 + -87 * -61;
function Yi() {
  return (Yi = Object.assign ? Object.assign.bind() : function(x) {
    for (var o = -800 + -52 * 46 + 3193; o < arguments.length; o++) {
      var t = arguments[o];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (x[e] = t[e]);
    }
    return x;
  }).apply(this, arguments);
}
var Vg = ["context", "children"];
function Tg(x) {
  this.getChildContext = function() {
    return x.context;
  };
  var o = x.children, t = function(e, n) {
    if (e == null) return {};
    var i, r, a = {}, s = Object.keys(e);
    for (r = 6331 * 1 + 7 * -1226 + -1 * -2251; r < s.length; r++) n.indexOf(i = s[r]) >= 313 * -23 + -2231 + 9430 || (a[i] = e[i]);
    return a;
  }(x, Vg);
  return Fi(o, t);
}
function Eg() {
  var x = {};
  x.detail = {}, x.bubbles = !(-5389 + -317 * -17), x.cancelable = !(-2121 + -2 * 622 + 1 * 3365);
  var o = new CustomEvent("_preact", x);
  this.dispatchEvent(o), this._vdom = Xe(Tg, Yi({}, this._props, { context: o.detail.context }), function t(e, n) {
    if (8989 + -1 * -8697 + -17683 === e.nodeType) return e.data;
    if (2419 * 1 + -2732 + 314 !== e.nodeType) return null;
    var i = [], r = {}, a = -883 * -8 + 405 + -7469, s = e.attributes, c = e.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (r[s[a].name] = s[a].value, r[Is(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var u = t(c[a], null), g = c[a].slot;
      g ? r[g] = Xe(Yr, { name: g }, u) : i[a] = u;
    }
    var C = n ? Xe(Yr, null, i) : i;
    return Xe(n || e.nodeName.toLowerCase(), r, C);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Di : Ut)(this._vdom, this._root);
}
function Is(x) {
  return x.replace(/-(\w)/g, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Ng(x, o, t) {
  if (this._vdom) {
    var e = {};
    e[x] = t = t ?? void (2 * -1004 + -3 * -2758 + -6266 * 1), e[Is(x)] = t, this._vdom = Fi(this._vdom, e), Ut(this._vdom, this._root);
  }
}
function Lg() {
  Ut(this._vdom = null, this._root);
}
function Yr(x, o) {
  var t = this;
  return Xe("slot", Yi({}, x, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = o;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Dg(x, o, t, e) {
  function n() {
    var i = Reflect.construct(HTMLElement, [], n);
    return i._vdomComponent = x, i._root = i, i;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = Eg, n.prototype.attributeChangedCallback = Ng, n.prototype.disconnectedCallback = Lg, t = t || x.observedAttributes || Object.keys(x.propTypes || {}), n.observedAttributes = t, t.forEach(function(i) {
    Object.defineProperty(n.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(i, null, r) : (this._props || (this._props = {}), this._props[i] = r, this.connectedCallback());
      var a = typeof r;
      r != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(i, r);
    } });
  }), customElements.define(o, n);
}
var Fg = -49 * 133 + 219 * 20 + 2137;
function O(x, o, t, e, n, i) {
  o || (o = {});
  var r, a, s = o;
  if ("ref" in s)
    for (a in s = {}, o) a == "ref" ? r = o[a] : s[a] = o[a];
  var c = {};
  c.type = x, c.props = s, c.key = t, c.ref = r, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__d = void 0, c.__c = null, c.constructor = void (3929 * 1 + 4604 + -8533), c.__v = --Fg, c.__i = -(8518 * -1 + -425 * -1 + -426 * -19), c.__u = 0, c.__source = n, c.__self = i;
  var u = c;
  if (typeof x == "function" && (r = x.defaultProps))
    for (a in r) void (-32 * 293 + -6822 + 16198) === s[a] && (s[a] = r[a]);
  return Y.vnode && Y.vnode(u), u;
}
var qe = function() {
  return qe = Object.assign || function(o) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (o[i] = t[i]);
    }
    return o;
  }, qe.apply(this, arguments);
};
function D0(x, o, t) {
  if (t || arguments.length === 2) for (var e = 0, n = o.length, i; e < n; e++)
    (i || !(e in o)) && (i || (i = Array.prototype.slice.call(o, 0, e)), i[e] = o[e]);
  return x.concat(i || Array.prototype.slice.call(o));
}
function Yg(x) {
  var o = Object.create(null);
  return function(t) {
    return o[t] === void 0 && (o[t] = x(t)), o[t];
  };
}
var Xg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Mg = Yg(function(x) {
  return Xg.test(x) || x.charCodeAt(3 * 197 + 6953 + -7544) === 111 && x.charCodeAt(1) === -2 * 2384 + 5 * 1002 + 6 * -22 && x.charCodeAt(-2323 + -31 * -75) < 4380 + -4289 * 1;
}), Qt, oe, Ho, Xr, F0 = 4 * 82 + 1 * 2031 + -2359, fs = [], se = Y, Mr = se.__b, jr = se.__r, Jr = se.diffed, _r = se.__c, Ur = se.unmount, Qr = se.__;
function Q0(x, o) {
  se.__h && se.__h(oe, x, F0 || o), F0 = 68 * 122 + -6432 + -4 * 466;
  var t = {};
  t.__ = [], t.__h = [];
  var e = oe.__H || (oe.__H = t);
  return x >= e.__.length && e.__.push({}), e.__[x];
}
function $e(x) {
  return F0 = 1252 + -139 * 9, Xi(ps, x);
}
function Xi(x, o, t) {
  var e = Q0(Qt++, 2);
  if (e.t = x, !e.__c && (e.__ = [t ? t(o) : ps(void (-3257 + -51 * 19 + 4226), o), function(a) {
    var s = e.__N ? e.__N[0] : e.__[0], c = e.t(s, a);
    s !== c && (e.__N = [c, e.__[-5226 + 76 * 118 + -3741]], e.__c.setState({}));
  }], e.__c = oe, !oe.u)) {
    var n = function(a, s, c) {
      if (!e.__c.__H) return !0;
      var u = e.__c.__H.__.filter(function(C) {
        return !!C.__c;
      });
      if (u.every(function(C) {
        return !C.__N;
      })) return !i || i.call(this, a, s, c);
      var g = !(3023 + -1 * 3022);
      return u.forEach(function(C) {
        if (C.__N) {
          var l = C.__[0];
          C.__ = C.__N, C.__N = void 0, l !== C.__[0] && (g = !0);
        }
      }), !(!g && e.__c.props === a) && (!i || i.call(this, a, s, c));
    };
    oe.u = !0;
    var i = oe.shouldComponentUpdate, r = oe.componentWillUpdate;
    oe.componentWillUpdate = function(a, s, c) {
      if (this.__e) {
        var u = i;
        i = void (-6396 + -2 * -3198), n(a, s, c), i = u;
      }
      r && r.call(this, a, s, c);
    }, oe.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function be(x, o) {
  var t = Q0(Qt++, 3);
  !se.__s && Mi(t.__H, o) && (t.__ = x, t.i = o, oe.__H.__h.push(t));
}
function z0(x, o) {
  var t = Q0(Qt++, 4);
  !se.__s && Mi(t.__H, o) && (t.__ = x, t.i = o, oe.__h.push(t));
}
function At(x) {
  return F0 = -5659 + -521 * 19 + 15563, xt(function() {
    var o = {};
    return o.current = x, o;
  }, []);
}
function Cs(x, o, t) {
  F0 = 1 * -739 + -3442 * 1 + 4187, z0(function() {
    return typeof x == "function" ? (x(o()), function() {
      return x(null);
    }) : x ? (x.current = o(), function() {
      return x.current = null;
    }) : void (46 * 201 + 6319 + -11 * 1415);
  }, t == null ? t : t.concat(x));
}
function xt(x, o) {
  var t = Q0(Qt++, 7);
  return Mi(t.__H, o) && (t.__ = x(), t.__H = o, t.__h = x), t.__;
}
function Y0(x, o) {
  return F0 = 8, xt(function() {
    return x;
  }, o);
}
function m0(x) {
  var o = oe.context[x.__c], t = Q0(Qt++, -1 * -7193 + -134 * 26 + -3700);
  return t.c = x, o ? (t.__ == null && (t.__ = !(-2875 + 5 * 575), o.sub(oe)), o.props.value) : x.__;
}
function kx(x, o) {
  se.useDebugValue && se.useDebugValue(o ? o(x) : x);
}
function hs() {
  var x = Q0(Qt++, 11);
  if (!x.__) {
    for (var o = oe.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [-5278 + 488 * -11 + 10646, 9813 * 1 + -1311 + -8502]);
    x.__ = "P" + t[-25 * 177 + 3615 + 810] + "-" + t[3616 + 311 * -11 + -97 * 2]++;
  }
  return x.__;
}
function jg() {
  for (var x; x = fs.shift(); ) if (x.__P && x.__H) try {
    x.__H.__h.forEach(lx), x.__H.__h.forEach($o), x.__H.__h = [];
  } catch (o) {
    x.__H.__h = [], se.__e(o, x.__v);
  }
}
se.__b = function(x) {
  oe = null, Mr && Mr(x);
}, se.__ = function(x, o) {
  x && o.__k && o.__k.__m && (x.__m = o.__k.__m), Qr && Qr(x, o);
}, se.__r = function(x) {
  jr && jr(x), Qt = -6 * -230 + -9791 + 1 * 8411;
  var o = (oe = x.__c).__H;
  o && (Ho === oe ? (o.__h = [], oe.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (3 * 2923 + -4683 + -681 * 6);
  })) : (o.__h.forEach(lx), o.__h.forEach($o), o.__h = [], Qt = -13670 + 2734 * 5)), Ho = oe;
}, se.diffed = function(x) {
  Jr && Jr(x);
  var o = x.__c;
  o && o.__H && (o.__H.__h.length && (-2 * 2713 + -8556 + -59 * -237 !== fs.push(o) && Xr === se.requestAnimationFrame || ((Xr = se.requestAnimationFrame) || Jg)(jg)), o.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-229 + -1 * -229);
  })), Ho = oe = null;
}, se.__c = function(x, o) {
  o.some(function(t) {
    try {
      t.__h.forEach(lx), t.__h = t.__h.filter(function(e) {
        return !e.__ || $o(e);
      });
    } catch (e) {
      o.some(function(n) {
        n.__h && (n.__h = []);
      }), o = [], se.__e(e, t.__v);
    }
  }), _r && _r(x, o);
}, se.unmount = function(x) {
  Ur && Ur(x);
  var o, t = x.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      lx(e);
    } catch (n) {
      o = n;
    }
  }), t.__H = void (33 + 1 * -607 + 574), o && se.__e(o, t.__v));
};
var zr = typeof requestAnimationFrame == "function";
function Jg(x) {
  var o, t = function() {
    clearTimeout(e), zr && cancelAnimationFrame(o), setTimeout(x);
  }, e = setTimeout(t, 100);
  zr && (o = requestAnimationFrame(t));
}
function lx(x) {
  var o = oe, t = x.__c;
  typeof t == "function" && (x.__c = void (-1 * 154 + -6962 + 12 * 593), t()), oe = o;
}
function $o(x) {
  var o = oe;
  x.__c = x.__(), oe = o;
}
function Mi(x, o) {
  return !x || x.length !== o.length || o.some(function(t, e) {
    return t !== x[e];
  });
}
function ps(x, o) {
  return typeof o == "function" ? o(x) : o;
}
function ms(x, o) {
  for (var t in o) x[t] = o[t];
  return x;
}
function ei(x, o) {
  for (var t in x) if (t !== "__source" && !(t in o)) return !(-58 * 26 + 5990 + -3 * 1494);
  for (var e in o) if (e !== "__source" && x[e] !== o[e]) return !(9389 + -11 * -491 + -14790);
  return !(10 * -678 + 1396 * -1 + 8177);
}
function ti(x, o) {
  this.props = x, this.context = o;
}
function _g(x, o) {
  function t(n) {
    var i = this.props.ref, r = i == n.ref;
    return !r && i && (i.call ? i(null) : i.current = null), o ? !o(this.props, n) || !r : ei(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, Xe(x, n);
  }
  return e.displayName = "Memo(" + (x.displayName || x.name) + ")", e.prototype.isReactComponent = !(3 * 338 + -7369 + 6355), e.__f = !0, e;
}
(ti.prototype = new dt()).isPureReactComponent = !(1072 + -159 * -23 + 4729 * -1), ti.prototype.shouldComponentUpdate = function(x, o) {
  return ei(this.props, x) || ei(this.state, o);
};
var qr = Y.__b;
Y.__b = function(x) {
  x.type && x.type.__f && x.ref && (x.props.ref = x.ref, x.ref = null), qr && qr(x);
};
var Ug = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -4377 * -2 + 307 + 2 * -2575;
function bs(x) {
  function o(t) {
    var e = ms({}, t);
    return delete e.ref, x(e, t.ref || null);
  }
  return o.$$typeof = Ug, o.render = o, o.prototype.isReactComponent = o.__f = !(2864 + -16 * 179), o.displayName = "ForwardRef(" + (x.displayName || x.name) + ")", o;
}
var $r = function(x, o) {
  return x == null ? null : Nt(Nt(x).map(o));
}, Qg = { map: $r, forEach: $r, count: function(x) {
  return x ? Nt(x).length : -4341 * -1 + -4721 * 1 + 380;
}, only: function(x) {
  var o = Nt(x);
  if (o.length !== 1) throw "Children.only";
  return o[2273 * 2 + -8459 + 7 * 559];
}, toArray: Nt }, zg = Y.__e;
Y.__e = function(x, o, t, e) {
  if (x.then) {
    for (var n, i = o; i = i.__; ) if ((n = i.__c) && n.__c) return o.__e == null && (o.__e = t.__e, o.__k = t.__k), n.__c(x, o);
  }
  zg(x, o, t, e);
};
var ea = Y.unmount;
function As(x, o, t) {
  return x && (x.__c && x.__c.__H && (x.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), x.__c.__H = null), (x = ms({}, x)).__c != null && (x.__c.__P === t && (x.__c.__P = o), x.__c = null), x.__k = x.__k && x.__k.map(function(e) {
    return As(e, o, t);
  })), x;
}
function ys(x, o, t) {
  return x && t && (x.__v = null, x.__k = x.__k && x.__k.map(function(e) {
    return ys(e, o, t);
  }), x.__c && x.__c.__P === o && (x.__e && t.appendChild(x.__e), x.__c.__e = !0, x.__c.__P = t)), x;
}
function Ix() {
  this.__u = 1882 + 2 * -941, this.t = null, this.__b = null;
}
function Ws(x) {
  var o = x.__.__c;
  return o && o.__a && o.__a(x);
}
function qg(x) {
  var o, t, e;
  function n(i) {
    if (o || (o = x()).then(function(r) {
      t = r.default || r;
    }, function(r) {
      e = r;
    }), e) throw e;
    if (!t) throw o;
    return Xe(t, i);
  }
  return n.displayName = "Lazy", n.__f = !(-3 * 2731 + -1 * 3989 + 12182), n;
}
function cn() {
  this.u = null, this.o = null;
}
Y.unmount = function(x) {
  var o = x.__c;
  o && o.__R && o.__R(), o && -41 * -232 + 1 * 5866 + -15346 & x.__u && (x.type = null), ea && ea(x);
}, (Ix.prototype = new dt()).__c = function(x, o) {
  var t = o.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = Ws(e.__v), i = !(6042 + -2 * 3068 + 95), r = function() {
    i || (i = !(7661 * -1 + -245 + 67 * 118), t.__R = null, n ? n(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var s = e.state.__a;
        e.__v.__k[-3045 + 29 * 105] = ys(s, s.__c.__P, s.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.t.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || -6 * 957 + -13 * 484 + -6 * -2011 & o.__u || e.setState({ __a: e.__b = e.__v.__k[-3557 * -2 + -2771 + -101 * 43] }), x.then(r, r);
}, Ix.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ix.prototype.render = function(x, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-3 * 139 + -6640 + -1 * -7057].__c;
      this.__v.__k[-1 * -4421 + -5583 + -1 * -1162] = As(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = o.__a && Xe(mt, null, x.fallback);
  return n && (n.__u &= -(1 * -5471 + -9253 + 14757)), [Xe(mt, null, o.__a ? null : x.children), n];
};
var ta = function(x, o, t) {
  if (++t[2819 + 1409 * -2] === t[6984 + -1102 * 1 + -5882] && x.o.delete(o), x.props.revealOrder && (x.props.revealOrder[-2 * -3118 + -121 * -10 + -7446] !== "t" || !x.o.size)) for (t = x.u; t; ) {
    for (; t.length > -3256 + 2 * 2857 + -2455; ) t.pop()();
    if (t[694 * -5 + -1 * -5048 + 1577 * -1] < t[-7295 * -1 + 34 * 82 + -10083]) break;
    x.u = t = t[5067 + -14 * -457 + -1 * 11463];
  }
};
function $g(x) {
  return this.getChildContext = function() {
    return x.context;
  }, x.children;
}
function ed(x) {
  var o = this, t = x.i;
  o.componentWillUnmount = function() {
    Ut(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== t && o.componentWillUnmount(), o.l || (o.i = t, o.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(e) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> -1 * -4133 + 328 * 26 + 1266 * -10, 1447 * 3 + -383 * 19 + -979 * -3), o.i.removeChild(e);
  } }), Ut(Xe($g, { context: o.context }, x.__v), o.l);
}
function td(x, o) {
  var t = {};
  t.__v = x, t.i = o;
  var e = Xe(ed, t);
  return e.containerInfo = o, e;
}
(cn.prototype = new dt()).__a = function(x) {
  var o = this, t = Ws(o.__v), e = o.o.get(x);
  return e[1292 * -3 + 6832 + -2956]++, function(n) {
    var i = function() {
      o.props.revealOrder ? (e.push(n), ta(o, x, e)) : n();
    };
    t ? t(i) : i();
  };
}, cn.prototype.render = function(x) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = Nt(x.children);
  x.revealOrder && x.revealOrder[17 * -166 + 5809 * 1 + 29 * -103] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.o.set(o[t], this.u = [-33 * -161 + 1586 + -6898, 5430 + -3162 * 3 + 4056, this.u]);
  return x.children;
}, cn.prototype.componentDidUpdate = cn.prototype.componentDidMount = function() {
  var x = this;
  this.o.forEach(function(o, t) {
    ta(x, t, o);
  });
};
var vs = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -35007 + 5 * 22135 + -15565, nd = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, xd = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, od = /[A-Z0-9]/g, id = typeof document < "u", rd = function(x) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(x);
};
function ad(x, o, t) {
  return o.__k == null && (o.textContent = ""), Ut(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
function sd(x, o, t) {
  return Di(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
dt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(x) {
  Object.defineProperty(dt.prototype, x, { configurable: !(2664 + -1 * 2664), get: function() {
    return this["UNSAFE_" + x];
  }, set: function(o) {
    var t = {};
    t.configurable = !(7200 + -225 * 32), t.writable = !(4243 * -1 + 1 * -8468 + 12711 * 1), t.value = o, Object.defineProperty(this, x, t);
  } });
});
var na = Y.event;
function cd() {
}
function gd() {
  return this.cancelBubble;
}
function dd() {
  return this.defaultPrevented;
}
Y.event = function(x) {
  return na && (x = na(x)), x.persist = cd, x.isPropagationStopped = gd, x.isDefaultPrevented = dd, x.nativeEvent = x;
};
var fx = {};
fx.enumerable = !(389 * 22 + -6 * 1511 + 509), fx.configurable = !(2309 * 4 + -2695 + -6541), fx.get = function() {
  return this.class;
};
var ji, ud = fx, xa = Y.vnode;
Y.vnode = function(x) {
  typeof x.type == "string" && function(o) {
    var t = o.props, e = o.type, n = {};
    for (var i in t) {
      var r = t[i];
      if (!(i === "value" && "defaultValue" in t && r == null || id && i === "children" && e === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in t && t.value == null ? i = "value" : i === "download" && r === !0 ? r = "" : a === "translate" && r === "no" ? r = !(5263 + -609 * 2 + -4044) : a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || rd(t.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : xd.test(i) ? i = a : -(1 * 5765 + -14 * -4 + -582 * 10) === e.indexOf("-") && nd.test(i) ? i = i.replace(od, "-$&").toLowerCase() : r === null && (r = void (-2 * 4036 + 5994 + -1039 * -2)) : a = i = "oninput", a === "oninput" && n[i = a] && (i = "oninputCapture"), n[i] = r;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Nt(t.children).forEach(function(s) {
      s.props.selected = -(443 * 1 + -9891 + -859 * -11) != n.value.indexOf(s.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = Nt(t.children).forEach(function(s) {
      s.props.selected = n.multiple ? -(-47 + -1 * -48) != n.defaultValue.indexOf(s.props.value) : n.defaultValue == s.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", ud)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), o.props = n;
  }(x), x.$$typeof = vs, xa && xa(x);
};
var oa = Y.__r;
Y.__r = function(x) {
  oa && oa(x), ji = x.__c;
};
var ia = Y.diffed;
Y.diffed = function(x) {
  ia && ia(x);
  var o = x.props, t = x.__e;
  t != null && x.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), ji = null;
};
var Be = {};
Be.readContext = function(x) {
  return ji.__n[x.__c].props.value;
}, Be.useCallback = Y0, Be.useContext = m0, Be.useDebugValue = kx, Be.useDeferredValue = Gs, Be.useEffect = be, Be.useId = hs, Be.useImperativeHandle = Cs, Be.useInsertionEffect = Hs, Be.useLayoutEffect = z0, Be.useMemo = xt, Be.useReducer = Xi, Be.useRef = At, Be.useState = $e, Be.useSyncExternalStore = Os, Be.useTransition = ks;
var Ss = {};
Ss.current = Be;
var ws = {};
ws.ReactCurrentDispatcher = Ss;
var ld = ws;
function Id(x) {
  return Xe.bind(null, x);
}
function oo(x) {
  return !!x && x.$$typeof === vs;
}
function fd(x) {
  return oo(x) && x.type === mt;
}
function Cd(x) {
  return !!x && !!x.displayName && (typeof x.displayName == "string" || x.displayName instanceof String) && x.displayName.startsWith("Memo(");
}
function hd(x) {
  return oo(x) ? Fi.apply(null, arguments) : x;
}
function pd(x) {
  return !!x.__k && (Ut(null, x), !(-4507 + 1 * -6162 + 10669));
}
function md(x) {
  return x && (x.base || 2249 + -5 * -1082 + 7658 * -1 === x.nodeType && x) || null;
}
var bd = function(x, o) {
  return x(o);
}, Ad = function(x, o) {
  return x(o);
}, yd = mt;
function Bs(x) {
  x();
}
function Gs(x) {
  return x;
}
function ks() {
  return [!1, Bs];
}
var Hs = z0, Wd = oo;
function Os(x, o) {
  var t = o(), e = $e({ h: { __: t, v: o } }), n = e[0].h, i = e[3810 + -23 * 115 + -1164];
  return z0(function() {
    n.__ = t, n.v = o, Oo(n) && i({ h: n });
  }, [x, t, o]), be(function() {
    return Oo(n) && i({ h: n }), x(function() {
      Oo(n) && i({ h: n });
    });
  }, [x]), t;
}
function Oo(x) {
  var o, t, e = x.v, n = x.__;
  try {
    var i = e();
    return !((o = n) === (t = i) && (-371 * -21 + 6904 + -14695 !== o || (1919 * -3 + -3 * 2693 + 101 * 137) / o == (-8264 + 1 * 2597 + -5668 * -1) / t) || o != o && t != t);
  } catch {
    return !(4486 * -1 + -97 * -7 + -47 * -81);
  }
}
var L = {};
L.useState = $e, L.useId = hs, L.useReducer = Xi, L.useEffect = be, L.useLayoutEffect = z0, L.useInsertionEffect = Hs, L.useTransition = ks, L.useDeferredValue = Gs, L.useSyncExternalStore = Os, L.startTransition = Bs, L.useRef = At, L.useImperativeHandle = Cs, L.useMemo = xt, L.useCallback = Y0, L.useContext = m0, L.useDebugValue = kx, L.version = "17.0.2", L.Children = Qg, L.render = ad, L.hydrate = sd, L.unmountComponentAtNode = pd, L.createPortal = td, L.createElement = Xe, L.createContext = Dn, L.createFactory = Id, L.cloneElement = hd, L.createRef = Og, L.Fragment = mt, L.isValidElement = oo, L.isElement = Wd, L.isFragment = fd, L.isMemo = Cd, L.findDOMNode = md, L.Component = dt, L.PureComponent = ti, L.memo = _g, L.forwardRef = bs, L.flushSync = Ad, L.unstable_batchedUpdates = bd, L.StrictMode = yd, L.Suspense = Ix, L.SuspenseList = cn, L.lazy = qg, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ld;
var f0 = L, vd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sd(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function wd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Bd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") && Object.keys(x).length === 1 ? x.default : x;
}
function Gd(x) {
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
const kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: vd,
  getAugmentedNamespace: Gd,
  getDefaultExportFromCjs: Sd,
  getDefaultExportFromNamespaceIfNotNamed: Bd,
  getDefaultExportFromNamespaceIfPresent: wd
}, Symbol.toStringTag, { value: "Module" }));
var Hd = function(o, t, e, n) {
  var i = e ? e.call(n, o, t) : void 0;
  if (i !== void (-22 * -89 + -5354 + 3396)) return !!i;
  if (o === t) return !0;
  if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
  var r = Object.keys(o), a = Object.keys(t);
  if (r.length !== a.length) return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = -1 * 8390 + -7943 + -16333 * -1; c < r.length; c++) {
    var u = r[c];
    if (!s(u)) return !1;
    var g = o[u], C = t[u];
    if (i = e ? e.call(n, g, C, u) : void (-2 * 3345 + 7581 + 11 * -81), i === !1 || i === void (1 * -5051 + 62 * -101 + 11313) && g !== C) return !1;
  }
  return !0;
};
const Od = kd.getDefaultExportFromCjs(Hd);
var xe = "-ms-", hn = "-moz-", ee = "-webkit-", Zs = "comm", io = "rule", Ji = "decl", Zd = "@import", Ks = "@keyframes", Kd = "@layer", Rs = Math.abs, _i = String.fromCharCode, ni = Object.assign;
function Rd(x, o) {
  return Se(x, -1 * -7629 + 21 * 93 + -9582) ^ -10998 + 11043 * 1 ? (((o << -842 * 1 + 2 * 1351 + -1858 ^ Se(x, -271 * 17 + -8478 + 13085 * 1)) << 2544 * 1 + 5719 + -8261 ^ Se(x, -39 * 239 + -7429 + -1 * -16751)) << 3550 + -1486 * -4 + -452 * 21 ^ Se(x, 7393 * -1 + -2523 + -58 * -171)) << -13821 + -1 * -13823 ^ Se(x, -901 * -3 + 13 * 566 + -214 * 47) : 5962 + -2 * -2368 + 2 * -5349;
}
function Ps(x) {
  return x.trim();
}
function Rt(x, o) {
  return (x = o.exec(x)) ? x[8788 + 3 * -1808 + -3364] : x;
}
function X(x, o, t) {
  return x.replace(o, t);
}
function Cx(x, o, t) {
  return x.indexOf(o, t);
}
function Se(x, o) {
  return x.charCodeAt(o) | 7 * 851 + 3774 * -1 + 37 * -59;
}
function X0(x, o, t) {
  return x.slice(o, t);
}
function wt(x) {
  return x.length;
}
function Vs(x) {
  return x.length;
}
function gn(x, o) {
  return o.push(x), x;
}
function Pd(x, o) {
  return x.map(o).join("");
}
function ra(x, o) {
  return x.filter(function(t) {
    return !Rt(t, o);
  });
}
var ro = 43 * -101 + -14 * -632 + -4504, M0 = 1, Ts = -541 * -14 + 598 + 4086 * -2, lt = 2 * -166 + 3159 + -2827, me = -7020 + 111 * -70 + 14790, q0 = "";
function ao(x, o, t, e, n, i, r, a) {
  var s = {};
  return s.value = x, s.root = o, s.parent = t, s.type = e, s.props = n, s.children = i, s.line = ro, s.column = M0, s.length = r, s.return = "", s.siblings = a, s;
}
function Xt(x, o) {
  return ni(ao("", null, null, "", null, null, -2 * -3639 + -2 * 293 + 28 * -239, x.siblings), x, { length: -x.length }, o);
}
function k0(x) {
  for (; x.root; ) x = Xt(x.root, { children: [x] });
  gn(x, x.siblings);
}
function Vd() {
  return me;
}
function Td() {
  return me = lt > -26 * 283 + -4652 + -2402 * -5 ? Se(q0, --lt) : -1009 * 5 + -8168 + -73 * -181, M0--, me === -7 * -1096 + 1 * -9886 + 2 * 1112 && (M0 = -2671 * 2 + 1 * -9403 + 14746, ro--), me;
}
function pt() {
  return me = lt < Ts ? Se(q0, lt++) : -1 * 724 + 9370 + -8646, M0++, me === -3356 + 11 * 503 + 11 * -197 && (M0 = -3711 * 1 + 89 * -55 + 8607, ro++), me;
}
function u0() {
  return Se(q0, lt);
}
function hx() {
  return lt;
}
function so(x, o) {
  return X0(q0, x, o);
}
function xi(x) {
  switch (x) {
    case -1242 * 7 + 100 * -38 + 6247 * 2:
    case -2999 * 2 + 874 + 59 * 87:
    case -3 * -1378 + 4543 + -8667:
    case 17264 + 1 * -17251:
    case 1 * 3421 + -2600 + -789:
      return 9728 + 2243 * -1 + 40 * -187;
    case -1 * -1361 + -3904 + 2576:
    case -8393 + 37 * 228:
    case 1 * 7279 + 3407 + -10642:
    case -211 * 29 + -408 * 9 + -9838 * -1:
    case 7690 + 26 * 152 + -11580:
    case 4 * 99 + -11 * 562 + 5 * 1170:
    case 207 * -32 + -3 * 2591 + 14523:
    case 6204 + -5 * 1229:
    case 123:
    case -1 * 593 + 4231 * -1 + -707 * -7:
      return -9411 * 1 + 1 * -8945 + 408 * 45;
    case 4142 + 2042 * -2:
      return 1333 + 2 * 1857 + -4 * 1261;
    case -683 * -11 + -3404 + -4075:
    case -9133 + -307 * 9 + 11935:
    case -7079 + 1 * -6531 + 210 * 65:
    case -2936 * 2 + 5 * -797 + 12 * 829:
      return 7579 + -672 * -6 + -11609;
    case 129 * -11 + -203 + 1663:
    case 9 * -999 + 710 * 1 + 8374:
      return 3888 + 1 * -3887;
  }
  return 8656 + -7813 * 1 + 843 * -1;
}
function Ed(x) {
  return ro = M0 = -3822 + 1 * -1704 + 5527, Ts = wt(q0 = x), lt = 12317 + -109 * 113, [];
}
function Nd(x) {
  return q0 = "", x;
}
function Zo(x) {
  return Ps(so(lt - (-8801 + 2 * 4401), oi(x === -2918 + -1 * -3009 ? x + (-8387 + 668 * -2 + 9725) : x === 5413 + -5373 * 1 ? x + (-8968 + -8801 * -1 + -1 * -168) : x)));
}
function Ld(x) {
  for (; (me = u0()) && me < 33; ) pt();
  return xi(x) > -2 * 2252 + -1 * -6746 + -2240 || xi(me) > -2 * 2327 + 1 * 8391 + -1867 * 2 ? "" : " ";
}
function Dd(x, o) {
  for (; --o && pt() && !(me < 12876 + -4 * 3207 || me > 9231 + 1415 * -2 + -6299 * 1 || me > 5336 + -1 * 5279 && me < 1828 * -1 + -15 * 90 + 3243 || me > -2 * 3682 + -3627 + -11061 * -1 && me < -5792 + -5034 * 1 + 10923 * 1); ) ;
  return so(x, hx() + (o < 9976 + 12 * -53 + -9334 && u0() == 32 && pt() == -3448 * -1 + -3914 + 498));
}
function oi(x) {
  for (; pt(); ) switch (me) {
    case x:
      return lt;
    case 3 * -3077 + 1 * -9598 + 18863:
    case 39:
      x !== 34 && x !== -4314 + -606 * -9 + 367 * -3 && oi(me);
      break;
    case 972 + 2579 * 2 + 105 * -58:
      x === 1 * 4486 + 367 * 7 + -7014 && oi(x);
      break;
    case 1598 + 41 * 97 + -5483:
      pt();
      break;
  }
  return lt;
}
function Fd(x, o) {
  for (; pt() && x + me !== -1 * 149 + 101 * 67 + -6571 + (-7745 + 33 * 235); ) if (x + me === 2 * 4891 + 2 * 1171 + -12082 + (326 * 3 + 5718 + 6654 * -1) && u0() === -2101 + 1 * -8 + 2156) break;
  return "/*" + so(o, lt - (-475 * -2 + -622 + -327)) + "*" + _i(x === 9259 * -1 + -948 * 6 + 14994 ? x : pt());
}
function Yd(x) {
  for (; !xi(u0()); ) pt();
  return so(x, lt);
}
function Xd(x) {
  return Nd(px("", null, null, null, [""], x = Ed(x), -8 * -421 + 1 * 9631 + -12999, [-208 + -208 * -1], x));
}
function px(x, o, t, e, n, i, r, a, s) {
  for (var c = 0, u = 4117 + 4117 * -1, g = r, C = -1 * -4286 + -7 * -35 + 4531 * -1, l = -7756 + 1 * -5319 + 13075, h = 2 * -3929 + 1187 + -7 * -953, p = 9039 + 2571 * -1 + -1 * 6467, A = 1, d = 4 * -1526 + 293 * -33 + 5258 * 3, W = -8803 * -1 + 4542 + -13345, Z = "", D = n, E = i, F = e, k = Z; A; ) switch (h = W, W = pt()) {
    case -3226 + -155 * 53 + 43 * 267:
      if (h != -2012 + 1 * -2842 + 4962 && Se(k, g - 1) == 7594 + -24 * 314) {
        Cx(k += X(Zo(W), "&", "&\f"), "&\f", Rs(c ? a[c - (1070 + -2 * -4919 + 10907 * -1)] : -4727 * 1 + 5230 * 1 + 1 * -503)) != -(1634 + 1 * -9049 + 7416) && (d = -(8819 * 1 + -9967 + 1149));
        break;
      }
    case -13415 + -13449 * -1:
    case -2 * 3052 + -330 * 2 + -6803 * -1:
    case 4855 + 717 * 9 + -11217:
      k += Zo(W);
      break;
    case 9:
    case 5325 + -2613 * 3 + 2524:
    case -3826 * 1 + -3418 * -2 + -333 * 9:
    case -9194 + -73 * -1 + 9153:
      k += Ld(h);
      break;
    case -9542 + -1125 * -1 + 8509:
      k += Dd(hx() - (1 * 7717 + 9570 + -17286), -3276 + 7 * 469);
      continue;
    case -226 * 31 + 4766 * -1 + 53 * 223:
      switch (u0()) {
        case -413 * -1 + 5221 + 1864 * -3:
        case -5864 + -2 * 2671 + -1023 * -11:
          gn(Md(Fd(pt(), hx()), o, t, s), s);
          break;
        default:
          k += "/";
      }
      break;
    case (-1 * 9722 + -2296 + 171 * 71) * p:
      a[c++] = wt(k) * d;
    case (3506 + 1 * 5365 + -8746) * p:
    case 99 * -86 + -229 * -38 + 43 * -3:
    case -1390 + -2 * -695:
      switch (W) {
        case -2 * -3432 + -538 + -6326:
        case -10268 + -547 * -19:
          A = -5624 + -22 * 178 + -106 * -90;
        case 1 * 5339 + -4411 + -869 + u:
          d == -(-3041 * -1 + 1888 + 14 * -352) && (k = X(k, /\f/g, "")), l > 0 && wt(k) - g && gn(l > 1218 + -1186 * 1 ? sa(k + ";", e, t, g - (1274 + 188 * 37 + -8229), s) : sa(X(k, " ", "") + ";", e, t, g - (221 * 4 + -1669 * 1 + 787), s), s);
          break;
        case -2 * 3057 + -5519 * -1 + 654:
          k += ";";
        default:
          if (gn(F = aa(k, o, t, c, u, n, a, Z, D = [], E = [], g, i), i), W === -10127 + 1 * 10250)
            if (u === 8586 + 47 * -5 + -8351) px(k, o, F, F, D, i, g, a, E);
            else switch (C === 9811 * -1 + -82 * 38 + 13026 && Se(k, -2566 + -140 * 49 + 9429) === -4229 * 1 + -32 * 178 + 1115 * 9 ? -1497 + -1 * 907 + 2504 : C) {
              case -792 + 2 * 446:
              case -7 * 369 + 2322 + 369:
              case -24 * -61 + 7219 + -6 * 1429:
              case 115:
                px(x, F, F, e && gn(aa(x, F, F, 3423 * -2 + 4643 + 2203, -3 * 3097 + -4013 + -3326 * -4, n, a, Z, n, D = [], g, E), E), n, E, g, a, e ? D : E);
                break;
              default:
                px(k, F, F, F, [""], E, 0, a, E);
            }
      }
      c = u = l = -6510 + -1 * 2267 + -1 * -8777, p = d = 2 * -1693 + -705 + -2 * -2046, Z = k = "", g = r;
      break;
    case 58:
      g = -7 * 409 + 3908 + -1044 + wt(k), l = h;
    default:
      if (p < 2 * -4492 + 731 * 5 + 5330) {
        if (W == -2300 + -2423 * -1) --p;
        else if (W == -43 * -160 + 21 * -18 + -6377 && p++ == -1 * -2239 + 9655 + -11894 && Td() == 178 + -1 * 53) continue;
      }
      switch (k += _i(W), W * p) {
        case -140 + -65 * -19 + -1057:
          d = u > -3636 + -32 * -291 + -5676 ? 2437 + 127 * -1 + -2309 * 1 : (k += "\f", -(6 * 13 + -182 + -5 * -21));
          break;
        case 13 * -515 + 1116 + 5623:
          a[c++] = (wt(k) - (-1 * -2414 + 8373 + 2 * -5393)) * d, d = 114 * -41 + 2 * -2104 + 8883;
          break;
        case -7 * -1423 + -8446 + 1 * -1451:
          u0() === 45 && (k += Zo(pt())), C = u0(), u = g = wt(Z = k += Yd(hx())), W++;
          break;
        case 8 * 632 + -5140 * 1 + 129:
          h === -654 + -233 * -3 && wt(k) == 2950 + -3 * 1683 + 1 * 2101 && (p = -4 * -2026 + -13 * -379 + -13031);
      }
  }
  return i;
}
function aa(x, o, t, e, n, i, r, a, s, c, u, g) {
  for (var C = n - 1, l = n === -15 * -145 + -6825 + -2 * -2325 ? i : [""], h = Vs(l), p = -2221 * -2 + 8094 + -8 * 1567, A = -6073 * -1 + 439 * 12 + -11341, d = -6434 + 383 * 2 + 52 * 109; p < e; ++p) for (var W = 3091 * -2 + -1441 + 7623, Z = X0(x, C + (941 + -1 * -7941 + -8881), C = Rs(A = r[p])), D = x; W < h; ++W) (D = Ps(A > -10147 + 73 * 139 ? l[W] + " " + Z : X(Z, /&\f/g, l[W]))) && (s[d++] = D);
  return ao(x, o, t, n === 5 * 551 + -3053 + 298 ? io : a, s, c, u, g);
}
function Md(x, o, t, e) {
  return ao(x, o, t, Zs, _i(Vd()), X0(x, 8336 + 6 * -1389, -2), 8386 + -551 * -8 + -12794, e);
}
function sa(x, o, t, e, n) {
  return ao(x, o, t, Ji, X0(x, 86 * -4 + 3873 + -3529, e), X0(x, e + (6451 * -1 + -6642 + 13094), -(-8890 + -534 * -6 + 5687)), e, n);
}
function Es(x, o, t) {
  switch (Rd(x, o)) {
    case 3568 + 1 * 1535:
      return ee + "print-" + x + x;
    case 1435 + 2374 * -1 + 1669 * 4:
    case 1 * 5255 + -1013 * 2 + -162 * -6:
    case 2977 * -1 + -8012 * -1 + -1858:
    case -43 * 221 + 85 * 5 + -12511 * -1:
    case 4122 + -1 * 2481:
    case 909 * 7 + -7333 * 1 + 81 * 67:
    case -5878 + 1 * 8799:
    case 1 * -8036 + -10725 + 24333:
    case 859 + 91 * -10 + -149 * -43:
    case 597 * -17 + 6261 + 1 * 9732:
    case -8445 + -977 * -1 + 10659:
    case 6645:
    case 1682 + 1 * 7321 + 5998 * -1:
    case -3 * -3314 + -1735 + -1816:
    case 5879:
    case -724 * 1 + 9500 + -3153:
    case 82 * -139 + 6417 + -1588 * -7:
    case 2624 + 1975 * 1:
    case 1 * -1985 + 158 + 6682 * 1:
    case 1 * -6349 + -5907 + -181 * -91:
    case 1 * -3812 + 11792 + -1591:
    case 21 * 383 + -1 * 35 + -2899 * 1:
    case 2 * -593 + -4187 + 91 * 118:
    case 1 * -9013 + 1040 * 8 + 6314:
    case -7198 * 1 + 1934 + 9093:
      return ee + x + x;
    case -3018 + 1884 * 5 + -1613:
      return hn + x + x;
    case 15731 + 1 * -10382:
    case -12 * -290 + 2017 + -1 * 1251:
    case 7763 + 191 * 29 + -8492 * 1:
    case 13897 + -1 * -7894 + -14823:
    case 901 * -6 + -4 * -866 + 4698:
      return ee + x + hn + x + xe + x + x;
    case 1347 * 2 + 2939 + 303:
      switch (Se(x, o + 11)) {
        case 9868 * -1 + -855 + 10837:
          return ee + x + xe + X(x, /[svh]\w+-[tblr]{2}/, "tb") + x;
        case 23 * 1 + -9 * 61 + 634:
          return ee + x + xe + X(x, /[svh]\w+-[tblr]{2}/, "tb-rl") + x;
        case -2 * -698 + -1935 + -8 * -73:
          return ee + x + xe + X(x, /[svh]\w+-[tblr]{2}/, "lr") + x;
      }
    case -303 + -1 * 979 + -1 * -8110:
    case 4 * 517 + 1962 + 34 * 7:
    case 28 * -301 + -6 * -361 + 1 * 9165:
      return ee + x + xe + x + x;
    case -8 * -349 + 3 * 3401 + -3415 * 2:
      return ee + x + xe + "flex-" + x + x;
    case -133 * 22 + -2872 + 10985:
      return ee + x + X(x, /(\w+).+(:[^]+)/, ee + "box-$1$2" + xe + "flex-$1$2") + x;
    case -7433 + -17 * -144 + 10428:
      return ee + x + xe + "flex-item-" + X(x, /flex-|-self/g, "") + (Rt(x, /flex-|baseline/) ? "" : xe + "grid-row-" + X(x, /flex-|-self/g, "")) + x;
    case 7721 + -3046 * 1:
      return ee + x + xe + "flex-line-pack" + X(x, /align-content|flex-|-self/g, "") + x;
    case 1573 * 5 + -8238 * 1 + 5921:
      return ee + x + xe + X(x, "shrink", "negative") + x;
    case -1905 * -5 + 2 * -3898 + -509 * -7:
      return ee + x + xe + X(x, "basis", "preferred-size") + x;
    case -1103 * 5 + 11 * 636 + 4579:
      return ee + "box-" + X(x, "-grow", "") + ee + x + xe + X(x, "grow", "positive") + x;
    case 3409 * 1 + 420 + 725 * 1:
      return ee + X(x, /([^-])(transform)/g, "$1" + ee + "$2") + x;
    case 9569 + -38 * 89:
      return X(X(X(x, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), x, "") + x;
    case -10062 + -2 * 2287 + 20131:
    case -8554 + -878 * 11 + 1 * 22171:
      return X(x, /(image-set\([^]*)/, ee + "$1$`$1");
    case 365 + 1 * 4603:
      return X(X(x, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + xe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + x + x;
    case 8356 + -2811 * -1 + -1 * 6967:
      if (!Rt(x, /flex-|baseline/)) return xe + "grid-column-align" + X0(x, o) + x;
      break;
    case 2592:
    case -5669 * -1 + 918 * -2 + -473:
      return xe + X(x, "template-", "") + x;
    case 5570 + -2 * 1263 + -5 * -268:
    case -7837 + 1 * 2017 + 9436:
      return t && t.some(function(e, n) {
        return o = n, Rt(e.props, /grid-\w+-end/);
      }) ? ~Cx(x + (t = t[o].value), "span", 334 * -23 + 4006 * -1 + 11688) ? x : xe + X(x, "-start", "") + x + xe + "grid-row-span:" + (~Cx(t, "span", -172 * 19 + 9540 + -6272) ? Rt(t, /\d+/) : +Rt(t, /\d+/) - +Rt(x, /\d+/)) + ";" : xe + X(x, "-start", "") + x;
    case 19 * -54 + -1 * 4852 + 10774:
    case -3424 + 8737 * 1 + -1185:
      return t && t.some(function(e) {
        return Rt(e.props, /grid-\w+-start/);
      }) ? x : xe + X(X(x, "-end", "-span"), "span ", "") + x;
    case -1 * -4143 + 249 * 10 + 423 * -6:
    case 3583:
    case 4068:
    case 2532:
      return X(x, /(.+)-inline(.+)/, ee + "$1$2") + x;
    case -6308 + 1 * 8265 + 3 * 2053:
    case -177 * -7 + 1 * -8102 + 1 * 13922:
    case -1 * 10765 + 5101 * 1 + 11417 * 1:
    case 4465 + 10 * 107:
    case -590 * 1 + -2900 * 1 + 8935:
    case -7501 * -1 + -63 * -8 + 2 * -1152:
    case 1 * 411 + 3893 + 629:
    case 1 * -9937 + 2 * -4678 + 23970:
    case 731 * -2 + -1712 + 1 * 8707:
    case 17 * 419 + -1289 + 3 * -15:
    case -1 * 9157 + 254 * 16 + -26 * -389:
    case 17 * -177 + -2887 * -1 + -1 * -4887:
      if (wt(x) - 1 - o > 6) switch (Se(x, o + (3847 * 1 + -2889 + -957))) {
        case 109:
          if (Se(x, o + (-1 * 5281 + -19 * -151 + 604 * 4)) !== -397 * 1 + 2413 * -1 + -1 * -2855) break;
        case -1 * -1024 + 1 * 8068 + -8990:
          return X(x, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + hn + (Se(x, o + (10 * -625 + -2745 + 8998)) == 5504 + -6937 * 1 + 1541 ? "$3" : "$2-$3")) + x;
        case -1923 * -5 + 462 * -21 + 2 * 101:
          return ~Cx(x, "stretch", 10 * 358 + -246 * 21 + 1586) ? Es(X(x, "stretch", "fill-available"), o, t) + x : x;
      }
      break;
    case -2569 + 5866 * 1 + 1855:
    case -1 * -6947 + 4491 + -5518:
      return X(x, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, i, r, a, s, c) {
        return xe + n + ":" + i + c + (r ? xe + n + "-span:" + (a ? s : +s - +i) + c : "") + x;
      });
    case 4949:
      if (Se(x, o + 6) === -3225 * -1 + 1 * 5314 + -8418) return X(x, ":", ":" + ee) + x;
      break;
    case 5750 + 209 * 37 + 7039 * -1:
      switch (Se(x, Se(x, -8395 + 8409 * 1) === -2969 * 1 + 3963 + -949 ? 6552 + -838 * -8 + -13238 : -42 * -18 + 639 * -8 + 1 * 4367)) {
        case 120:
          return X(x, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (Se(x, -5928 + -23 * -169 + -685 * -3) === -7 * -694 + -427 + -4386 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + xe + "$2box$3") + x;
        case -13444 + 1693 * 8:
          return X(x, ":", ":" + xe) + x;
      }
      break;
    case -17717 + 378 * 62:
    case -16490 + 1 * 19137:
    case -90 * -26 + -7 * 1381 + 57 * 166:
    case 3726 + -139 * -53 + -7166:
    case 1450 * 1 + 788 + 153:
      return X(x, "scroll-", "scroll-snap-") + x;
  }
  return x;
}
function Hx(x, o) {
  for (var t = "", e = -976 * 3 + 3391 * 1 + -463; e < x.length; e++) t += o(x[e], e, x, o) || "";
  return t;
}
function jd(x, o, t, e) {
  switch (x.type) {
    case Kd:
      if (x.children.length) break;
    case Zd:
    case Ji:
      return x.return = x.return || x.value;
    case Zs:
      return "";
    case Ks:
      return x.return = x.value + "{" + Hx(x.children, e) + "}";
    case io:
      if (!wt(x.value = x.props.join(","))) return "";
  }
  return wt(t = Hx(x.children, e)) ? x.return = x.value + "{" + t + "}" : "";
}
function Jd(x) {
  var o = Vs(x);
  return function(t, e, n, i) {
    for (var r = "", a = -4026 * -2 + 3832 + -11884; a < o; a++) r += x[a](t, e, n, i) || "";
    return r;
  };
}
function _d(x) {
  return function(o) {
    o.root || (o = o.return) && x(o);
  };
}
function Ud(x, o, t, e) {
  if (x.length > -(-391 * 14 + 1 * 4117 + 1358) && !x.return)
    switch (x.type) {
      case Ji:
        x.return = Es(x.value, x.length, t);
        return;
      case Ks:
        return Hx([Xt(x, { value: X(x.value, "@", "@" + ee) })], e);
      case io:
        if (x.length) return Pd(t = x.props, function(n) {
          switch (Rt(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              k0(Xt(x, { props: [X(n, /:(read-\w+)/, ":" + hn + "$1")] }));
              var i = {};
              i.props = [n], k0(Xt(x, i)), ni(x, { props: ra(t, e) });
              break;
            case "::placeholder":
              k0(Xt(x, { props: [X(n, /:(plac\w+)/, ":" + ee + "input-$1")] })), k0(Xt(x, { props: [X(n, /:(plac\w+)/, ":" + hn + "$1")] })), k0(Xt(x, { props: [X(n, /:(plac\w+)/, xe + "input-$1")] }));
              var r = {};
              r.props = [n], k0(Xt(x, r)), ni(x, { props: ra(t, e) });
              break;
          }
          return "";
        });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var Qd = N, q = {}, C0 = typeof process < "u" && void (-1 * -2162 + 7978 + 10140 * -1) !== q && (q.REACT_APP_SC_ATTR || q.SC_ATTR) || "data-styled", Ns = "active", Ls = "data-styled-version", co = "6.1.11", Ui = `/*!sc*/
`, Qi = typeof window < "u" && "HTMLElement" in window, zd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (34 * 56 + 6641 * -1 + -4737 * -1) !== q && void (-5847 * -1 + 4114 + -9961) !== q.REACT_APP_SC_DISABLE_SPEEDY && q.REACT_APP_SC_DISABLE_SPEEDY !== "" ? q.REACT_APP_SC_DISABLE_SPEEDY !== "false" && q.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-4325 + -147 * -49 + -2878) !== q && q.SC_DISABLE_SPEEDY !== void 0 && q.SC_DISABLE_SPEEDY !== "" ? q.SC_DISABLE_SPEEDY !== "false" && q.SC_DISABLE_SPEEDY : q.NODE_ENV !== "production"), ca = /invalid hook call/i, xx = /* @__PURE__ */ new Set(), qd = function(x, o) {
  if (q.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(x).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var i = !0;
      console.error = function(r) {
        for (var a = [], s = 4277 * -1 + -4668 + -142 * -63; s < arguments.length; s++) a[s - (2 * 1945 + -8884 + 4995)] = arguments[s];
        ca.test(r) ? (i = !1, xx.delete(e)) : n.apply(void 0, D0([r], a, !1));
      }, At(), i && !xx.has(e) && (console.warn(e), xx.add(e));
    } catch (r) {
      ca.test(r.message) && xx.delete(e);
    } finally {
      console.error = n;
    }
  }
}, go = Object.freeze([]), j0 = Object.freeze({});
function $d(x, o, t) {
  return void (-652 * -8 + -3218 * -2 + -1942 * 6) === t && (t = j0), x.theme !== t.theme && x.theme || o || t.theme;
}
var ii = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), eu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, tu = /(^-|-$)/g;
function ga(x) {
  return x.replace(eu, "-").replace(tu, "");
}
var nu = /(a)(d)/gi, ox = -2629 * 1 + -43 * 151 + -139 * -66, da = function(x) {
  return String.fromCharCode(x + (x > 5473 + -2 * -3181 + -1 * 11810 ? -991 * 7 + 8040 + 2 * -532 : 101 * 14 + 121 * 49 + -2 * 3623));
};
function ri(x) {
  var o, t = "";
  for (o = Math.abs(x); o > ox; o = o / ox | 9216 + -5 * 68 + -8876) t = da(o % ox) + t;
  return (da(o % ox) + t).replace(nu, "$1-$2");
}
var Ko, Ds = 5381, r0 = function(x, o) {
  for (var t = o.length; t; ) x = (12624 + 4197 * -3) * x ^ o.charCodeAt(--t);
  return x;
}, Fs = function(x) {
  return r0(Ds, x);
};
function xu(x) {
  return ri(Fs(x) >>> -2934 + -8293 * -1 + -23 * 233);
}
function Ys(x) {
  return q.NODE_ENV !== "production" && typeof x == "string" && x || x.displayName || x.name || "Component";
}
function Ro(x) {
  return typeof x == "string" && (q.NODE_ENV === "production" || x.charAt(5387 + 1 * 6113 + -46 * 250) === x.charAt(0).toLowerCase());
}
var st = {};
st.childContextTypes = !0, st.contextType = !0, st.contextTypes = !0, st.defaultProps = !0, st.displayName = !0, st.getDefaultProps = !0, st.getDerivedStateFromError = !0, st.getDerivedStateFromProps = !0, st.mixins = !0, st.propTypes = !0, st.type = !0;
var Mt = {};
Mt.name = !0, Mt.length = !0, Mt.prototype = !0, Mt.caller = !0, Mt.callee = !0, Mt.arguments = !0, Mt.arity = !0;
var o0 = {};
o0.$$typeof = !0, o0.compare = !0, o0.defaultProps = !0, o0.displayName = !0, o0.propTypes = !0, o0.type = !0;
var Z0 = {};
Z0.$$typeof = !0, Z0.render = !0, Z0.defaultProps = !0, Z0.displayName = !0, Z0.propTypes = !0;
var Xs = typeof Symbol == "function" && Symbol.for, Ms = Xs ? Symbol.for("react.memo") : -95075 + -4767 * -19 + 64617, ou = Xs ? Symbol.for("react.forward_ref") : -93461 + 105666 * 1 + -15969 * -3, iu = st, ru = Mt, js = o0, au = ((Ko = {})[ou] = Z0, Ko[Ms] = js, Ko);
function ua(x) {
  return ("type" in (o = x) && o.type.$$typeof) === Ms ? js : "$$typeof" in x ? au[x.$$typeof] : iu;
  var o;
}
var su = Object.defineProperty, cu = Object.getOwnPropertyNames, la = Object.getOwnPropertySymbols, gu = Object.getOwnPropertyDescriptor, du = Object.getPrototypeOf, Ia = Object.prototype;
function Js(x, o, t) {
  if (typeof o != "string") {
    if (Ia) {
      var e = du(o);
      e && e !== Ia && Js(x, e, t);
    }
    var n = cu(o);
    la && (n = n.concat(la(o)));
    for (var i = ua(x), r = ua(o), a = 0; a < n.length; ++a) {
      var s = n[a];
      if (!(s in ru || t && t[s] || r && s in r || i && s in i)) {
        var c = gu(o, s);
        try {
          su(x, s, c);
        } catch {
        }
      }
    }
  }
  return x;
}
function J0(x) {
  return typeof x == "function";
}
function zi(x) {
  return typeof x == "object" && "styledComponentId" in x;
}
function s0(x, o) {
  return x && o ? "".concat(x, " ").concat(o) : x || o || "";
}
function fa(x, o) {
  if (7123 + 407 * 8 + -10379 === x.length) return "";
  for (var t = x[-693 * -3 + -5997 + 1 * 3918], e = -4 * 664 + 6 * -1479 + 887 * 13; e < x.length; e++) t += x[e];
  return t;
}
function _0(x) {
  return x !== null && typeof x == "object" && x.constructor.name === Object.name && !("props" in x && x.$$typeof);
}
function ai(x, o, t) {
  if (t === void 0 && (t = !1), !t && !_0(x) && !Array.isArray(x)) return o;
  if (Array.isArray(o))
    for (var e = -7302 * -1 + 868 + -8170; e < o.length; e++) x[e] = ai(x[e], o[e]);
  else if (_0(o))
    for (var e in o) x[e] = ai(x[e], o[e]);
  return x;
}
function qi(x, o) {
  var t = {};
  t.value = o, Object.defineProperty(x, "toString", t);
}
var ve = {};
ve[1] = `Cannot create styled-component for component: %s.

`, ve[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, ve[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, ve[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, ve[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, ve[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, ve[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', ve[8] = `ThemeProvider: Please make your "theme" prop an object.

`, ve[9] = "Missing document `<head>`\n\n", ve[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, ve[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, ve[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", ve[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, ve[14] = `ThemeProvider: "theme" prop is required.

`, ve[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", ve[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, ve[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, ve[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var uu = q.NODE_ENV !== "production" ? ve : {};
function lu() {
  for (var x = [], o = 0; o < arguments.length; o++) x[o] = arguments[o];
  for (var t = x[11845 + -5 * 2369], e = [], n = 5424 + -17 * 319, i = x.length; n < i; n += 3998 * 1 + -1848 + 1 * -2149) e.push(x[n]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function $0(x) {
  for (var o = [], t = -1 * 7289 + -6213 + 13503; t < arguments.length; t++) o[t - (-4 * -2341 + 2 * -4091 + -1181)] = arguments[t];
  return q.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(x, " for more information.").concat(o.length > 1 * -5871 + 6010 + -139 ? " Args: ".concat(o.join(", ")) : "")) : new Error(lu.apply(void (-10 * -654 + -1 * 317 + -127 * 49), D0([uu[x]], o, !1)).trim());
}
var Iu = function() {
  function x(o) {
    this.groupSizes = new Uint32Array(-6440 + -2 * 2270 + 11492), this.length = -4457 + -1 * -7413 + -2444, this.tag = o;
  }
  return x.prototype.indexOfGroup = function(o) {
    for (var t = 0, e = 0; e < o; e++) t += this.groupSizes[e];
    return t;
  }, x.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, i = n; o >= i; ) if ((i <<= -1 * 8569 + 7309 + -97 * -13) < 0) throw $0(16, "".concat(o));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(e), this.length = i;
      for (var r = n; r < i; r++) this.groupSizes[r] = 1546 + 3499 * 1 + -5045;
    }
    for (var a = this.indexOfGroup(o + 1), s = (r = 0, t.length); r < s; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[o]++, a++);
  }, x.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), n = e + t;
      this.groupSizes[o] = -1 * -2682 + 8949 * -1 + -2089 * -3;
      for (var i = e; i < n; i++) this.tag.deleteRule(e);
    }
  }, x.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || -3218 * -1 + 1663 + -1627 * 3 === this.groupSizes[o]) return t;
    for (var e = this.groupSizes[o], n = this.indexOfGroup(o), i = n + e, r = n; r < i; r++) t += "".concat(this.tag.getRule(r)).concat(Ui);
    return t;
  }, x;
}(), fu = 1 * 2273 + -10 * 215 + -122 << 1156 * -1 + 2 * -2437 + 1212 * 5, mx = /* @__PURE__ */ new Map(), Ox = /* @__PURE__ */ new Map(), bx = -5085 + -2543 * -2, ix = function(x) {
  if (mx.has(x)) return mx.get(x);
  for (; Ox.has(bx); ) bx++;
  var o = bx++;
  if (q.NODE_ENV !== "production" && ((-5 * -1648 + 620 + -8860 | o) < -10 * -958 + 3 * 1043 + -12709 || o > fu)) throw $0(8411 + -23 * 365, "".concat(o));
  return mx.set(x, o), Ox.set(o, x), o;
}, Cu = function(x, o) {
  bx = o + (3891 + 1565 * -2 + -190 * 4), mx.set(x, o), Ox.set(o, x);
}, hu = "style[".concat(C0, "][").concat(Ls, '="').concat(co, '"]'), pu = new RegExp("^".concat(C0, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), mu = function(x, o, t) {
  for (var e, n = t.split(","), i = 15380 + -4 * 3845, r = n.length; i < r; i++) (e = n[i]) && x.registerName(o, e);
}, bu = function(x, o) {
  for (var t, e = ((t = o.textContent) !== null && void (2 * 1793 + -7609 + 4023) !== t ? t : "").split(Ui), n = [], i = 2798 + 2798 * -1, r = e.length; i < r; i++) {
    var a = e[i].trim();
    if (a) {
      var s = a.match(pu);
      if (s) {
        var c = 0 | parseInt(s[1], 10), u = s[-6 * -379 + 9432 + 2 * -5852];
        -491 * 3 + 560 * -4 + 3713 !== c && (Cu(u, c), mu(x, u, s[12 * -538 + -7807 + 14266]), x.getTag().insertRules(c, n)), n.length = 0;
      } else n.push(a);
    }
  }
};
function Au() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var _s = function(x) {
  var o = document.head, t = x || o, e = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(C0, "]")));
    return s[s.length - (-17 * -65 + -2941 * -2 + 2 * -3493)];
  }(t), i = void (4457 * 1 + -1738 + -2719) !== n ? n.nextSibling : null;
  e.setAttribute(C0, Ns), e.setAttribute(Ls, co);
  var r = Au();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, i), e;
}, yu = function() {
  function x(o) {
    this.element = _s(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = 863 * -2 + -8183 + 9909, i = e.length; n < i; n++) {
        var r = e[n];
        if (r.ownerNode === t) return r;
      }
      throw $0(1613 * -4 + -6374 * -1 + 95);
    }(this.element), this.length = 6826 * 1 + 1954 + -8780;
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
}(), Wu = function() {
  function x(o) {
    this.element = _s(o), this.nodes = this.element.childNodes, this.length = 7 * 1061 + 9947 + 511 * -34;
  }
  return x.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= -1 * 5023 + -224 * 4 + -3 * -1973) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, x.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, x;
}(), vu = function() {
  function x(o) {
    this.rules = [], this.length = -377 * -25 + -1 * -8242 + -17667;
  }
  return x.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, 741 * 5 + 4055 + -7760, t), this.length++, !0);
  }, x.prototype.deleteRule = function(o) {
    this.rules.splice(o, 7 * 546 + -5191 + -274 * -5), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, x;
}(), Ca = Qi, Su = { isServer: !Qi, useCSSOMInjection: !zd }, Us = function() {
  function x(o, t, e) {
    void (11 * -859 + 1961 + 208 * 36) === o && (o = j0), void (-3871 + 3364 * 2 + -2857 * 1) === t && (t = {});
    var n = this;
    this.options = qe(qe({}, Su), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && Qi && Ca && (Ca = !1, function(i) {
      for (var r = document.querySelectorAll(hu), a = -1 * 6151 + -991 + -1 * -7142, s = r.length; a < s; a++) {
        var c = r[a];
        c && c.getAttribute(C0) !== Ns && (bu(i, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), qi(this, function() {
      return function(i) {
        for (var r = i.getTag(), a = r.length, s = "", c = function(g) {
          var C = function(d) {
            return Ox.get(d);
          }(g);
          if (void (-1 * -2749 + 3644 + -2131 * 3) === C) return "continue";
          var l = i.names.get(C), h = r.getGroup(g);
          if (void (3 * -177 + 167 * 26 + -3811) === l || h.length === 0) return "continue";
          var p = "".concat(C0, ".g").concat(g, '[id="').concat(C, '"]'), A = "";
          void (-480 + -1 * -4451 + 209 * -19) !== l && l.forEach(function(d) {
            d.length > 2281 * 3 + 1411 * 4 + 12487 * -1 && (A += "".concat(d, ","));
          }), s += "".concat(h).concat(p, '{content:"').concat(A, '"}').concat(Ui);
        }, u = -373 * 18 + 715 * -2 + 8144; u < a; u++) c(u);
        return s;
      }(n);
    });
  }
  return x.registerId = function(o) {
    return ix(o);
  }, x.prototype.reconstructWithOptions = function(o, t) {
    return void (-73 * 29 + 2084 + 33) === t && (t = !0), new x(qe(qe({}, this.options), o), this.gs, t && this.names || void (-7315 + 1733 * 1 + 5582));
  }, x.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || 0) + (-2354 + -286 * 14 + -1 * -6359);
  }, x.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new vu(n) : e ? new yu(n) : new Wu(n);
    }(this.options), new Iu(o)));
    var o;
  }, x.prototype.hasNameForId = function(o, t) {
    return this.names.has(o) && this.names.get(o).has(t);
  }, x.prototype.registerName = function(o, t) {
    if (ix(o), this.names.has(o)) this.names.get(o).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(o, e);
    }
  }, x.prototype.insertRules = function(o, t, e) {
    this.registerName(o, t), this.getTag().insertRules(ix(o), e);
  }, x.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, x.prototype.clearRules = function(o) {
    this.getTag().clearGroup(ix(o)), this.clearNames(o);
  }, x.prototype.clearTag = function() {
    this.tag = void (4 * -1933 + -1 * 6761 + 14493);
  }, x;
}(), wu = /&/g, Bu = /^\s*\/\/.*$/gm;
function Qs(x, o) {
  return x.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(o, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(o, " ")), t.props = t.props.map(function(e) {
      return "".concat(o, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Qs(t.children, o)), t;
  });
}
function zs(x) {
  var o, t, e, n = x === void 0 ? j0 : x, i = n.options, r = void (9 * 1097 + 4054 * 2 + 1 * -17981) === i ? j0 : i, a = n.plugins, s = void (-5738 * -1 + -1838 + -3900) === a ? go : a, c = function(C, l, h) {
    return h.startsWith(t) && h.endsWith(t) && h.replaceAll(t, "").length > -1407 + -7 * -201 ? ".".concat(o) : C;
  }, u = s.slice();
  u.push(function(C) {
    C.type === io && C.value.includes("&") && (C.props[-6113 * 1 + -3695 * -1 + 186 * 13] = C.props[-5 * -677 + -1 * -3489 + -3437 * 2].replace(wu, t).replace(e, c));
  }), r.prefix && u.push(Ud), u.push(jd);
  var g = function(C, l, h, p) {
    l === void 0 && (l = ""), void (-12 * 134 + -367 * -11 + -1 * 2429) === h && (h = ""), void (-1187 * -1 + -3363 + 2176) === p && (p = "&"), o = p, t = l, e = new RegExp("\\".concat(t, "\\b"), "g");
    var A = C.replace(Bu, ""), d = Xd(h || l ? "".concat(h, " ").concat(l, " { ").concat(A, " }") : A);
    r.namespace && (d = Qs(d, r.namespace));
    var W = [];
    return Hx(d, Jd(u.concat(_d(function(Z) {
      return W.push(Z);
    })))), W;
  };
  return g.hash = s.length ? s.reduce(function(C, l) {
    return l.name || $0(15), r0(C, l.name);
  }, Ds).toString() : "", g;
}
var Gu = new Us(), si = zs(), $i = f0.createContext({ shouldForwardProp: void (-1297 + 2377 * -3 + 8428), styleSheet: Gu, stylis: si });
$i.Consumer;
var ku = f0.createContext(void (-849 * 6 + 1 * 9769 + -4675));
function ci() {
  return m0($i);
}
function Hu(x) {
  var o = $e(x.stylisPlugins), t = o[38 * -237 + 22 * 17 + 8632], e = o[-1 * -3124 + 381 + 6 * -584], n = ci().styleSheet, i = xt(function() {
    var u = n, g = {};
    return g.useCSSOMInjection = !1, x.sheet ? u = x.sheet : x.target && (u = u.reconstructWithOptions({ target: x.target }, !1)), x.disableCSSOMInjection && (u = u.reconstructWithOptions(g)), u;
  }, [x.disableCSSOMInjection, x.sheet, x.target, n]), r = xt(function() {
    var u = {};
    u.namespace = x.namespace, u.prefix = x.enableVendorPrefixes;
    var g = {};
    return g.options = u, g.plugins = t, zs(g);
  }, [x.enableVendorPrefixes, x.namespace, t]);
  be(function() {
    Od(t, x.stylisPlugins) || e(x.stylisPlugins);
  }, [x.stylisPlugins]);
  var a = xt(function() {
    var u = {};
    return u.shouldForwardProp = x.shouldForwardProp, u.styleSheet = i, u.stylis = r, u;
  }, [x.shouldForwardProp, i, r]), s = {};
  s.value = a;
  var c = {};
  return c.value = r, f0.createElement($i.Provider, s, f0.createElement(ku.Provider, c, x.children));
}
var ha = function() {
  function x(o, t) {
    var e = this;
    this.inject = function(n, i) {
      void (-2593 * -1 + 2347 + -4940) === i && (i = si);
      var r = e.name + i.hash;
      n.hasNameForId(e.id, r) || n.insertRules(e.id, r, i(e.rules, r, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, qi(this, function() {
      throw $0(-3832 + 263 * 18 + -890, String(e.name));
    });
  }
  return x.prototype.getName = function(o) {
    return void (-9662 * -1 + -1848 + -7814) === o && (o = si), this.name + o.hash;
  }, x;
}(), Ou = function(x) {
  return x >= "A" && x <= "Z";
};
function pa(x) {
  for (var o = "", t = -197 * 17 + 3287 * 3 + -6512; t < x.length; t++) {
    var e = x[t];
    if (-263 * -1 + 2935 * 2 + 42 * -146 === t && e === "-" && x[-9057 + 141 * 61 + 456] === "-") return x;
    Ou(e) ? o += "-" + e.toLowerCase() : o += e;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var qs = function(x) {
  return x == null || x === !1 || x === "";
}, $s = function(x) {
  var o, t, e = [];
  for (var n in x) {
    var i = x[n];
    x.hasOwnProperty(n) && !qs(i) && (Array.isArray(i) && i.isCss || J0(i) ? e.push("".concat(pa(n), ":"), i, ";") : _0(i) ? e.push.apply(e, D0(D0(["".concat(n, " {")], $s(i), !1), ["}"], !1)) : e.push("".concat(pa(n), ": ").concat((o = n, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || o in Qd || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function l0(x, o, t, e) {
  if (qs(x)) return [];
  if (zi(x)) return [".".concat(x.styledComponentId)];
  if (J0(x)) {
    if (!J0(i = x) || i.prototype && i.prototype.isReactComponent || !o) return [x];
    var n = x(o);
    return q.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof ha || _0(n) || n === null || console.error("".concat(Ys(x), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), l0(n, o, t, e);
  }
  var i;
  return x instanceof ha ? t ? (x.inject(t, e), [x.getName(e)]) : [x] : _0(x) ? $s(x) : Array.isArray(x) ? Array.prototype.concat.apply(go, x.map(function(r) {
    return l0(r, o, t, e);
  })) : [x.toString()];
}
function Zu(x) {
  for (var o = -2 * -1578 + -8014 * 1 + 4858; o < x.length; o += 6646 + -9 * 78 + -5943) {
    var t = x[o];
    if (J0(t) && !zi(t)) return !1;
  }
  return !0;
}
var Ku = Fs(co), Ru = function() {
  function x(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = q.NODE_ENV === "production" && (void (21 * 225 + 9155 + -13880) === e || e.isStatic) && Zu(o), this.componentId = t, this.baseHash = r0(Ku, t), this.baseStyle = e, Us.registerId(t);
  }
  return x.prototype.generateAndInjectStyles = function(o, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = s0(n, this.staticRulesId);
      else {
        var i = fa(l0(this.rules, o, t, e)), r = ri(r0(this.baseHash, i) >>> 3525 * -1 + 807 * 4 + 297);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(i, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        n = s0(n, r), this.staticRulesId = r;
      }
    else {
      for (var s = r0(this.baseHash, e.hash), c = "", u = 7461 + 4132 * 1 + 1 * -11593; u < this.rules.length; u++) {
        var g = this.rules[u];
        if (typeof g == "string") c += g, q.NODE_ENV !== "production" && (s = r0(s, g));
        else if (g) {
          var C = fa(l0(g, o, t, e));
          s = r0(s, C + u), c += C;
        }
      }
      if (c) {
        var l = ri(s >>> 0);
        t.hasNameForId(this.componentId, l) || t.insertRules(this.componentId, l, e(c, ".".concat(l), void (-3019 * 1 + -6999 + 10018), this.componentId)), n = s0(n, l);
      }
    }
    return n;
  }, x;
}(), ec = f0.createContext(void (-355 * -25 + -8672 + -7 * 29));
ec.Consumer;
var Po = {}, ma = /* @__PURE__ */ new Set();
function Pu(x, o, t) {
  var e = zi(x), n = x, i = !Ro(x), r = o.attrs, a = void (9 * -397 + -4222 + 7795) === r ? go : r, s = o.componentId, c = s === void 0 ? function(E, F) {
    var k = typeof E != "string" ? "sc" : ga(E);
    Po[k] = (Po[k] || 54 * 175 + -5714 + 934 * -4) + (1 * 7352 + 1966 + -9317);
    var _ = "".concat(k, "-").concat(xu(co + k + Po[k]));
    return F ? "".concat(F, "-").concat(_) : _;
  }(o.displayName, o.parentComponentId) : s, u = o.displayName, g = void (-3920 + 87 * 3 + 3659) === u ? function(E) {
    return Ro(E) ? "styled.".concat(E) : "Styled(".concat(Ys(E), ")");
  }(x) : u, C = o.displayName && o.componentId ? "".concat(ga(o.displayName), "-").concat(o.componentId) : o.componentId || c, l = e && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, h = o.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var p = n.shouldForwardProp;
    if (o.shouldForwardProp) {
      var A = o.shouldForwardProp;
      h = function(E, F) {
        return p(E, F) && A(E, F);
      };
    } else h = p;
  }
  var d = new Ru(t, C, e ? n.componentStyle : void (8106 + 6232 * -1 + -1874));
  function W(E, F) {
    return function(k, _, fe) {
      var Q = k.attrs, Ce = k.componentStyle, he = k.defaultProps, Oe = k.foldedComponentIds, It = k.styledComponentId, re = k.target, Ze = f0.useContext(ec), Me = ci(), it = k.shouldForwardProp || Me.shouldForwardProp;
      q.NODE_ENV !== "production" && kx(It);
      var je = $d(_, Ze, he) || j0, Ae = function(A0, et, yt) {
        var rt = {};
        rt.className = void (-638 * -15 + -5604 + -3966), rt.theme = yt;
        for (var zt, Wt = qe(qe({}, et), rt), ft = -8864 + -1 * -8864; ft < A0.length; ft += -130 * -65 + 4754 * 2 + 17957 * -1) {
          var qt = J0(zt = A0[ft]) ? zt(Wt) : zt;
          for (var Ct in qt) Wt[Ct] = Ct === "className" ? s0(Wt[Ct], qt[Ct]) : Ct === "style" ? qe(qe({}, Wt[Ct]), qt[Ct]) : qt[Ct];
        }
        return et.className && (Wt.className = s0(Wt.className, et.className)), Wt;
      }(Q, _, je), Te = Ae.as || re, Je = {};
      for (var ye in Ae) Ae[ye] === void 0 || ye[1 * -5378 + 1190 + -2 * -2094] === "$" || ye === "as" || ye === "theme" && Ae.theme === je || (ye === "forwardedAs" ? Je.as = Ae.forwardedAs : it && !it(ye, Te) || (Je[ye] = Ae[ye], it || q.NODE_ENV !== "development" || Mg(ye) || ma.has(ye) || !ii.has(Te) || (ma.add(ye), console.warn('styled-components: it looks like an unknown prop "'.concat(ye, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ee = function(A0, et) {
        var yt = ci(), rt = A0.generateAndInjectStyles(et, yt.styleSheet, yt.stylis);
        return q.NODE_ENV !== "production" && kx(rt), rt;
      }(Ce, Ae);
      q.NODE_ENV !== "production" && k.warnTooManyClasses && k.warnTooManyClasses(Ee);
      var _e = s0(Oe, It);
      return Ee && (_e += " " + Ee), Ae.className && (_e += " " + Ae.className), Je[Ro(Te) && !ii.has(Te) ? "class" : "className"] = _e, Je.ref = fe, Xe(Te, Je);
    }(Z, E, F);
  }
  W.displayName = g;
  var Z = f0.forwardRef(W), D = {};
  return D.attrs = !0, D.componentStyle = !0, D.displayName = !0, D.foldedComponentIds = !0, D.shouldForwardProp = !0, D.styledComponentId = !0, D.target = !0, Z.attrs = l, Z.componentStyle = d, Z.displayName = g, Z.shouldForwardProp = h, Z.foldedComponentIds = e ? s0(n.foldedComponentIds, n.styledComponentId) : "", Z.styledComponentId = C, Z.target = e ? n.target : x, Object.defineProperty(Z, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = e ? function(F) {
      for (var k = [], _ = -6820 + 6821 * 1; _ < arguments.length; _++) k[_ - (7058 + -6590 * -1 + -13647)] = arguments[_];
      for (var fe = 705 * -5 + -13 * -573 + -3924, Q = k; fe < Q.length; fe++) ai(F, Q[fe], !0);
      return F;
    }({}, n.defaultProps, E) : E;
  } }), q.NODE_ENV !== "production" && (qd(g, C), Z.warnTooManyClasses = /* @__PURE__ */ function(E, F) {
    var k = {}, _ = !1;
    return function(fe) {
      if (!_ && (k[fe] = !0, Object.keys(k).length >= 2 * -737 + 468 + 1206)) {
        var Q = F ? ' with the id of "'.concat(F, '"') : "";
        console.warn("Over ".concat(283 * 15 + -2589 * 3 + 3722, " classes were generated for component ").concat(E).concat(Q, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), _ = !0, k = {};
      }
    };
  }(g, C)), qi(Z, function() {
    return ".".concat(Z.styledComponentId);
  }), i && Js(Z, x, D), Z;
}
function ba(x, o) {
  for (var t = [x[-4703 * -1 + -2122 + -2581]], e = -18268 + -1 * -18268, n = o.length; e < n; e += 302 * 4 + -6296 + 727 * 7) t.push(o[e], x[e + (2225 + 2063 * -1 + -161)]);
  return t;
}
var Aa = function(x) {
  var o = {};
  return o.isCss = !0, Object.assign(x, o);
};
function tc(x) {
  for (var o = [], t = -5063 + 62 * -27 + -2246 * -3; t < arguments.length; t++) o[t - (349 * 3 + 1 * 9873 + -61 * 179)] = arguments[t];
  if (J0(x) || _0(x)) return Aa(l0(ba(go, D0([x], o, !0))));
  var e = x;
  return -152 * 1 + -79 * -97 + 29 * -259 === o.length && 15 * -313 + 8877 + -4181 === e.length && typeof e[1806 * 5 + -2 * -1013 + -11056] == "string" ? l0(e) : Aa(l0(ba(e, o)));
}
function gi(x, o, t) {
  if (void (4505 + 2633 * 3 + -12404) === t && (t = j0), !o) throw $0(2 * 1484 + -138 * -2 + -3243, o);
  var e = function(n) {
    for (var i = [], r = 10705 + -48 * 223; r < arguments.length; r++) i[r - (1 * 6933 + 3660 + 5296 * -2)] = arguments[r];
    return x(o, t, tc.apply(void (23 * 183 + -4818 + 609), D0([n], i, !1)));
  };
  return e.attrs = function(n) {
    return gi(x, o, qe(qe({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return gi(x, o, qe(qe({}, t), n));
  }, e;
}
var nc = function(x) {
  return gi(Pu, x);
}, en = nc;
ii.forEach(function(x) {
  en[x] = nc(x);
});
q.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var rx = "__sc-".concat(C0, "__");
q.NODE_ENV !== "production" && q.NODE_ENV !== "test" && typeof window < "u" && (window[rx] || (window[rx] = 61 * 146 + -2650 + 272 * -23), 2583 + -586 * 12 + -2 * -2225 === window[rx] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[rx] += -62 * 96 + -4143 + 10096);
const Vu = en.div`
  position: relative;
`, Tu = en.video`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(x) => x.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class ie extends Error {
  constructor(t, e) {
    super(t);
    M(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof ie) return t;
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
    return new ie(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof ie) return t;
    const e = "An unexpected error has occurred";
    return new ie(e);
  }
}
var Ax = ((x) => (x.CONTINUE_DETECTION = "continue-detection", x.SWITCH_CAMERA = "switch-camera", x.TOGGLE_MIRROR = "toggle-mirror", x))(Ax || {}), xc = ((x) => (x.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", x.CONTROL = "document-auto-capture:control", x.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", x.DOCUMENT_DETECTION = "document-auto-capture:document-detection", x.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", x.STATE_CHANGED = "document-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", x))(xc || {}), Et = ((x) => (x.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", x.CONTROL = "face-auto-capture:control", x.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", x.FACE_DETECTION = "face-auto-capture:face-detection", x.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", x.STATE_CHANGED = "face-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", x))(Et || {}), Wn = ((x) => (x.ANIMATION_END = "magnifeye-auto-capture:animation-end", x.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", x))(Wn || {}), Eu = ((x) => (x.STATUS_CHANGED = "smile-auto-capture:status-changed", x))(Eu || {});
const oc = {};
oc.EYE_NOT_PRESENT = "eye_not_present";
const ya = oc, De = {};
De.CANDIDATE_SELECTION = "candidate_selection", De.FACE_TOO_CLOSE = "face_too_close", De.FACE_TOO_FAR = "face_too_far", De.FACE_CENTERING = "face_centering", De.FACE_NOT_PRESENT = "face_not_present", De.SHARPNESS_TOO_LOW = "sharpness_too_low", De.BRIGHTNESS_TOO_LOW = "brightness_too_low", De.BRIGHTNESS_TOO_HIGH = "brightness_too_high", De.DEVICE_PITCHED = "device_pitched", De.LEFT_EYE_NOT_PRESENT = "left_" + ya.EYE_NOT_PRESENT, De.RIGHT_EYE_NOT_PRESENT = "right_" + ya.EYE_NOT_PRESENT, De.MOUTH_NOT_PRESENT = "mouth_not_present", De.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", De.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const Re = De, Qe = {};
Qe.isPresent = Re.FACE_NOT_PRESENT, Qe.isNotPitched = Re.DEVICE_PITCHED, Qe.isNotSmall = Re.FACE_TOO_FAR, Qe.isNotLarge = Re.FACE_TOO_CLOSE, Qe.isNotOutOfBounds = Re.FACE_CENTERING, Qe.isNotDim = Re.BRIGHTNESS_TOO_LOW, Qe.isNotBright = Re.BRIGHTNESS_TOO_HIGH, Qe.isSharp = Re.SHARPNESS_TOO_LOW, Qe.isLeftEyePresent = Re.LEFT_EYE_NOT_PRESENT, Qe.isRightEyePresent = Re.RIGHT_EYE_NOT_PRESENT, Qe.isMouthPresent = Re.MOUTH_NOT_PRESENT, Qe.isMouthScoreNotTooHigh = Re.MOUTH_SCORE_TOO_HIGH, Qe.isMouthScoreNotTooLow = Re.MOUTH_SCORE_TOO_LOW;
const Nu = Qe, di = {};
di.FRONT = "user", di.REAR = "environment";
const ic = di, dn = {};
dn.LOADING = "LOADING", dn.ERROR = "ERROR", dn.WAITING = "WAITING", dn.RUNNING = "RUNNING";
const Bt = dn;
var nt = ((x) => (x.CLOSEUP = "CLOSEUP", x.DISTANT = "DISTANT", x.MIDDLE = "MIDDLE", x))(nt || {});
const rc = { ...Bt };
rc.DONE = "DONE";
const c0 = rc, uo = Dn(void 0);
uo.displayName = "AppStateContext";
function tn() {
  const x = m0(uo);
  if (x === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return x;
}
const Lu = uo.Provider, Du = tn;
class ac extends dt {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const o = new ie("An unknown error has occurred");
    (t = this.context) == null || t.handleError(o);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var o;
    return ((o = this.context) == null ? void 0 : o.appState) === Bt.ERROR ? null : this.props.children;
  }
}
M(ac, "contextType", uo);
const Fu = en.canvas`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Yu = en.div`
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
const Mu = bs(
  ({ detectionDetails: x, isImageMirror: o }, t) => Xu() ? (console.log(x), /* @__PURE__ */ O(mt, { children: [
    /* @__PURE__ */ O(Fu, { ref: t, $isImageMirror: o }),
    /* @__PURE__ */ O(Yu, { children: Object.entries(x).map(([e, n]) => /* @__PURE__ */ O("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ O("strong", { children: n })
    ] }, e)) })
  ] })) : null
), Zx = Dn(void 0);
Zx.displayName = "AnalyticsContext";
function sc() {
  const x = m0(Zx);
  if (x === void 0)
    throw new Error(`${Zx.displayName} must be used within a AnalyticsProvider`);
  return x;
}
function Pe(x, o) {
  const t = Kx();
  return Pe = function(e, n) {
    e = e - (-158 * -32 + -9296 + 4617);
    let i = t[e];
    if (Pe.wALGmk === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = C.indexOf(d);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const u = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = r(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          h = (h + l[d] + C.charCodeAt(d % C.length)) % 256, p = l[d], l[d] = l[h], l[h] = p;
        d = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, h = (h + l[d]) % 256, p = l[d], l[d] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[d] + l[h]) % 256]);
        return A;
      };
      Pe.UaRlxt = u, x = arguments, Pe.wALGmk = !0;
    }
    const a = t[181 * 2 + 2546 + -2908], s = e + a, c = x[s];
    return c ? i = c : (Pe.FkXgqO === void 0 && (Pe.FkXgqO = !0), i = Pe.UaRlxt(i, n), x[s] = i), i;
  }, Pe(x, o);
}
(function(x, o) {
  function t(a, s, c, u, g) {
    return Pe(a - -742, u);
  }
  function e(a, s, c, u, g) {
    return Pe(c - 450, s);
  }
  const n = x();
  function i(a, s, c, u, g) {
    return Pe(a - -96, s);
  }
  function r(a, s, c, u, g) {
    return Pe(g - 439, a);
  }
  for (; ; )
    try {
      if (-parseInt(i(307, "Z*8d", 323, 298, 303)) / 1 + parseInt(i(306, "Pa6A", 290, 322, 321)) / 2 + parseInt(i(311, "JZ]E", 330, 303, 293)) / 3 * (parseInt(r("(ATB", 855, 869, 840, 852)) / 4) + -parseInt(r("13q$", 807, 812, 825, 819)) / 5 * (parseInt(t(-337, -355, -341, "(ATB", -322)) / 6) + -parseInt(t(-333, -337, -330, "WZg^", -318)) / 7 + parseInt(i(297, "nRWk", 299, 305, 298)) / 8 * (parseInt(e(847, "g]k^", 860, 850, 855)) / 9) + parseInt(e(860, "6r]m", 842, 855, 846)) / 10 * (-parseInt(t(-347, -364, -336, "A541", -351)) / 11) === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Kx, -16594 * -5 + -76088 + 254480);
function Wa(x, o, t, e, n) {
  return Pe(n - -87, o);
}
function ui(x, o, t, e, n) {
  return Pe(e - 904, n);
}
function cc(x, o, t, e, n) {
  return Pe(o - -682, t);
}
function li(x, o, t, e, n) {
  return Pe(o - -21, e);
}
function Kx() {
  const x = ["W4BdSCk2hCk6CCoTWRHtkmk7WQO", "W5NdMgq", "k8o5mCobW7i", "WQyUW7CtFW", "WP3cSCofW6pdLq", "A8opmCoaWPFdMSodWPNcImkpWRxcPSk+", "WPxcR8oIE8oAW5FdM8k0W7pdK8kWoa", "W7BdMMVcJqxdISoJWQGSWPSmoq", "WRhdTrmShxFdTCkdosa", "WORdUCkqWOe0nd/cTg8P", "cwyDWRjzamk2WOzFyCkGwG", "WRldSHGOrX/dPSkJdWeavW", "W6fRWOtcRdJdKmo9W5/dONhdSua", "ps03rZLdxbOyl8oyWOa", "WR4zW7TBC0TG", "p8kbWOneoG", "WRJcK0jYc3FdQa", "W5b2WQBcQwJcGmowWPZcNdSpW5b5", "W75dW6vMdq", "gHnlWRu1", "W7NdOmoZWOrwz8kYe8oSfq", "pCkDWQnwmG", "ESoSWODdWPHnWO45sa", "pSo/g3aD", "W4ldTSkLoSkh", "A8kwwNX6ACkxo0tdPrhdGW", "ySk8sIKhvuZcU8kPWOm", "kSkIW79jWQy", "W4NcTaFdHSk9", "B8oXySo9W7C", "W7BdLgtdHLlcLSoMWPCx", "WQxcHcxcUq", "WRGrWRH2dN7dKsBdQ8o3", "WPOWWRrKWRNcSG7cMmoc", "WPqdjSoOpW", "W6LDC8oMaSkRWQFdGmo2", "WOT7rCofbSoCfHTUxa"];
  return Kx = function() {
    return x;
  }, Kx();
}
const Rx = Dn(void (-3800 + 3 * 1009 + 773));
Rx[Wa(316, "Z*8d", 308, 312, 297) + Wa(312, "Yz@C", 308, 318, 300) + "e"] = li(370, 373, 370, "A541") + ui(1285, 1280, 1303, 1292, "iCgP") + cc(-272, -291, "OOy3");
function er() {
  const x = m0(Rx);
  function o(r, a, s, c, u) {
    return li(r - 71, s - 567, s - 432, u);
  }
  function t(r, a, s, c, u) {
    return li(r - 44, r - -349, s - 433, s);
  }
  function e(r, a, s, c, u) {
    return ui(r - 255, a - 14, s - 178, r - 66, a);
  }
  function n(r, a, s, c, u) {
    return ui(r - 342, a - 288, s - 102, u - -254, r);
  }
  if (x === void (-215 * 1 + -2383 + 866 * 3)) throw new Error(Rx[e(1369, ")GCO", 1382) + e(1351, "YcwF", 1351) + "e"] + (n("pp0H", 1020, 1048, 1029, 1029) + n("XH4D", 1067, 1033, 1068, 1050) + n("6r]m", 1019, 1043, 1036, 1028) + i(-372, -366, -366, "W3#b") + n(")GCO", 1052, 1024, 1032, 1039) + e(1382, "YcwF", 1367) + t(31, 12, "4VEA") + o(944, 926, 944, 959, "c2P(")));
  function i(r, a, s, c, u) {
    return cc(r - 37, r - -73, c);
  }
  return x;
}
function Px() {
  const x = ["leldTrKPW73dIGS", "EIFdSHypW60OmvP7WOGi", "DYxdUXCaW6LQgg1XWRWuW4a", "WO7cMCkjW4O", "WPCRbci0WPr9WPC", "WOaRk8o0p8kAW7/dN20uW7C", "fmoSW4BcVSkK", "oCked1JcVa", "E8kwfSkMW7ZdICoYW4NdNM4nW5a", "B8orvXpdOxy3xf0SWP0TFa", "W67dNxNcHK4", "pJBcRfHfFCo3omkvWQ7dG8kY", "WOHAptfcW4DxxbpcPmkZW6S", "WOFcMSkCW4pdUJpcVYZdKsW2WQtdQa", "W6tcT8kFl8kv", "uGqoW6RdJSkQkmofm37dM8kW", "CI/cVIRcRCoJWOdcSSoEW6jQBG", "EgBdUhvuWOpcRmkBWPVcRSk+W6a", "W4HmWQpcHN3cNCoTkG", "urPTzcBdSXOYWOfBW4G", "W4afBSoNW6RcPSo9W4qsWQpdO8kbxW", "WO3cH8oxWO06cCkWwmoglqNdGa", "WORcH8kvW6zsxSkuAq", "kv7dUISrWOldUb4", "mcVcSCk+W58", "WRtdIs3dK20", "sqpdMSk1W5VdH8kPWRu"];
  return Px = function() {
    return x;
  }, Px();
}
function ke(x, o) {
  const t = Px();
  return ke = function(e, n) {
    e = e - (-6 * -1591 + -7264 + -1964 * 1);
    let i = t[e];
    if (ke.HADOwK === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = C.indexOf(d);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const u = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = r(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          h = (h + l[d] + C.charCodeAt(d % C.length)) % 256, p = l[d], l[d] = l[h], l[h] = p;
        d = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, h = (h + l[d]) % 256, p = l[d], l[d] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[d] + l[h]) % 256]);
        return A;
      };
      ke.fBxklv = u, x = arguments, ke.HADOwK = !0;
    }
    const a = t[-8338 * 1 + 19 * -511 + 1 * 18047], s = e + a, c = x[s];
    return c ? i = c : (ke.MtAiEG === void 0 && (ke.MtAiEG = !0), i = ke.fBxklv(i, n), x[s] = i), i;
  }, ke(x, o);
}
(function(x, o) {
  function t(s, c, u, g, C) {
    return ke(C - -515, s);
  }
  const e = x();
  function n(s, c, u, g, C) {
    return ke(C - 488, g);
  }
  function i(s, c, u, g, C) {
    return ke(u - 459, C);
  }
  function r(s, c, u, g, C) {
    return ke(c - -967, s);
  }
  function a(s, c, u, g, C) {
    return ke(u - -438, c);
  }
  for (; ; )
    try {
      if (-parseInt(i(780, 798, 790, 780, "!BjM")) / 1 + parseInt(r("ZHHG", -640, -650, -645, -631)) / 2 + -parseInt(i(807, 793, 797, 804, "Q3gh")) / 3 + parseInt(n(832, 814, 832, "($rN", 824)) / 4 * (parseInt(a(-120, "zyNJ", -109, -117, -120)) / 5) + parseInt(t("yZ6y", -191, -206, -180, -193)) / 6 * (parseInt(n(814, 822, 813, "!BjM", 820)) / 7) + -parseInt(r("pUhm", -644, -652, -636, -652)) / 8 + parseInt(n(838, 836, 833, "XxE^", 829)) / 9 * (parseInt(r("PS0R", -648, -653, -655, -653)) / 10) === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Px, 752068 + -392452 * 1);
function ju({ licensePath: x, bramble: o, wasmDirectoryPath: t }) {
  const [e, n] = $e(), i = e !== void (-9406 + 9406 * 1);
  function r(c, u, g, C, l) {
    return ke(l - -982, g);
  }
  function a(c, u, g, C, l) {
    return ke(C - 4, g);
  }
  be(() => {
    async function c() {
      await o[g("!d4V", 1052)](t, x);
      function u(C, l, h, p, A) {
        return ke(l - 16, A);
      }
      function g(C, l, h, p, A) {
        return ke(l - 712, C);
      }
      n(o[g("9E7R", 1036) + u(367, 360, 352, 370, "PS0R") + u(340, 350, 347, 357, "HT[x") + "t"]());
    }
    c();
  }, [o, t, x, n]);
  const s = {};
  return s[a(325, 335, "R9G3", 339) + a(314, 326, "AoL5", 324)] = e, s[r(-626, -629, "GuwI", -650, -639) + "sh"] = i, s;
}
var gc = ((x) => (x.DOCUMENT = "document-auto-capture:dev", x.FACE = "face-auto-capture:dev", x))(gc || {});
const Ii = {};
Ii.SIMD = "simd", Ii.NO_SIMD = "no-simd";
const va = Ii, fi = {};
fi.Lower = "Lower", fi.Higher = "Higher";
const Ci = fi, yx = {};
yx.VISIBLE = "VISIBLE", yx.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", yx.HIDDEN = "HIDDEN";
const pn = yx;
function Vx() {
  var x = ["W4bbW59HWO3cKubhWOCx", "lmoJaCokWRVdIeO", "WQxcRCkUFSkQ", "W5WHdfpcRSkiW5xdRmkmjaqt", "W4vaW5PKW7xdKhzAWOixfSkq", "FePOW67cT8oElr/cPSo8WPy1", "WOdcSCkpESk0", "W6xdRCkqWQ5hW53dMmotWONdVhO", "WR7cJGDIqq5xWRzFkq", "DKPQW67dL8kecbdcI8oi", "W6FcTmoKW642W6BdPW", "W4rjWO8fW4hcKmkRhmkeWRr3WOa", "WRuzW4NdV8kvW4DgrSoYWRZcUCkn", "WOqklsuq", "W53cUSkDiSkYcwNdVwK", "BGpcGSk2dsOXCftcSSoDWQeV", "gSkMgqpdQHddJG", "W6xdOSkyW7KGW5ddM8oBWR8", "WR7cIWfHuXX5WRbpcq", "W53cTCkvDCovbgRdTv/dTWW", "E8oHneNdGSodW7TPFaHMfCo/", "o0NdUM3cQXneWO/cRKZcGCo0"];
  return Vx = function() {
    return x;
  }, Vx();
}
(function(x, o) {
  function t(s, c, u, g, C) {
    return Fe(u - 717, s);
  }
  function e(s, c, u, g, C) {
    return Fe(c - -561, s);
  }
  function n(s, c, u, g, C) {
    return Fe(C - -758, c);
  }
  var i = x();
  function r(s, c, u, g, C) {
    return Fe(g - 947, C);
  }
  for (; ; )
    try {
      var a = -parseInt(r(1320, 1321, 1332, 1325, "u6R2")) / 1 * (-parseInt(r(1342, 1337, 1323, 1334, "MaaO")) / 2) + parseInt(t("fAqz", 1104, 1096, 1096, 1103)) / 3 * (parseInt(t("*z0&", 1094, 1089, 1085, 1093)) / 4) + -parseInt(n(-361, "u6R2", -362, -378, -370)) / 5 * (parseInt(r(1328, 1342, 1337, 1336, "fAqz")) / 6) + -parseInt(e("@v9m", -187, -196, -188, -192)) / 7 + parseInt(n(-384, "$XIM", -367, -379, -375)) / 8 + parseInt(e("]sQ!", -169, -170, -175, -160)) / 9 + parseInt(r(1339, 1334, 1332, 1338, "6r2S")) / 10;
      if (a === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Vx, -185241 * 1 + -2 * -107517 + -2327 * -82);
function Fe(x, o) {
  var t = Vx();
  return Fe = function(e, n) {
    e = e - (4877 * 1 + 5585 + -10091);
    var i = t[e];
    if (Fe.oHpGAg === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", h = "", p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = C.indexOf(d);
        for (var Z = 0, D = l.length; Z < D; Z++)
          h += "%" + ("00" + l.charCodeAt(Z).toString(16)).slice(-2);
        return decodeURIComponent(h);
      }, a = function(g, C) {
        var l = [], h = 0, p, A = "";
        g = r(g);
        var d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          h = (h + l[d] + C.charCodeAt(d % C.length)) % 256, p = l[d], l[d] = l[h], l[h] = p;
        d = 0, h = 0;
        for (var W = 0; W < g.length; W++)
          d = (d + 1) % 256, h = (h + l[d]) % 256, p = l[d], l[d] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[d] + l[h]) % 256]);
        return A;
      };
      Fe.lLHiqY = a, x = arguments, Fe.oHpGAg = !0;
    }
    var s = t[4147 + 63 * 31 + 4 * -1525], c = e + s, u = x[c];
    return u ? i = u : (Fe.evssJK === void 0 && (Fe.evssJK = !0), i = Fe.lLHiqY(i, n), x[c] = i), i;
  }, Fe(x, o);
}
function Ju({ crosshatch: x }) {
  function o(n, i, r, a, s) {
    return Fe(a - 456, n);
  }
  function t(n, i, r, a, s) {
    return Fe(i - -307, n);
  }
  function e(n, i, r, a, s) {
    return Fe(i - -173, a);
  }
  return x != null && x[e(195, 200, 195, "vhQ6") + "id"] ? Ci[o("H0)i", 844, 844, 840) + "r"] : Ci[t("vhQ6", 70)];
}
(function(x, o) {
  function t(a, s, c, u, g) {
    return Ve(a - -871, u);
  }
  function e(a, s, c, u, g) {
    return Ve(a - -315, u);
  }
  const n = x();
  function i(a, s, c, u, g) {
    return Ve(u - 489, g);
  }
  function r(a, s, c, u, g) {
    return Ve(s - -170, u);
  }
  for (; ; )
    try {
      if (parseInt(r(-44, -55, -38, "7rNk", -61)) / 1 + parseInt(r(-42, -31, -20, "WV9o", -17)) / 2 + parseInt(e(-201, -206, -203, "7Qf1", -197)) / 3 * (-parseInt(i(599, 597, 611, 612, "ibmC")) / 4) + -parseInt(e(-193, -208, -180, "(mx[", -208)) / 5 + -parseInt(r(-53, -37, -39, "7rNk", -38)) / 6 * (-parseInt(i(602, 610, 607, 613, "H$!^")) / 7) + -parseInt(t(-754, -768, -770, "H$!^", -765)) / 8 * (parseInt(i(637, 625, 639, 621, "%VoS")) / 9) + -parseInt(e(-185, -176, -171, "GIap", -196)) / 10 * (-parseInt(r(-49, -52, -34, ")V(!", -40)) / 11) === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Tx, 311359 * 1 + 396633 + -320236);
function Tx() {
  const x = ["WPFdVSo0WPNcIZvLq8o+mW", "W7TOWPbLWOfBoCk6gSkRth0", "WQGKoI90W5dcK8oZW6VcStldM1W", "W7VcS8ovsCoaWR8LAG", "etVdIfJcPa4lW5/dUG", "pdKn", "nmohdmkYWPT0W7BcMmkZWRe", "FWddV8ktArdcKa", "WQJdQxpdP2xcPmoqW55hWPHntvu", "WQSrWOHzWO1ErNCx", "W77dJmozzCo5WPq/", "gdNdHCkDDq", "FmkZBCo9wW", "WPhcO8kQWP4TW5NcGSkdaW", "pCozWOTsvW", "kmokWPLsCq", "CmocW4hdN8o0WQrEpcm", "E3VcMmozkLpdQaOpaCkzW6dcKq", "yZRdLtddS8k+W6eYW43dQWNdRJK", "W75TWPzHWOvFzCkSd8k2qenQ", "i8oCqCkZja", "W5xcQYH3WPW", "WPBdU8o6W7dcOtvps8oZ", "pZdcPCoGWPL7W4mRWQpdKmohW4m", "W7ldJbK8CglcISobW4O", "b8k4WRrRbeBdQblcNCo8w8obWQS", "W6P3w3C1", "WOddPCo0W5WpWP4gWOZcH8ktfmogqq", "WODgiCkhWOq", "jqXoi8oeE8oRW4e", "WRxdImk5WQhdIa", "W67cVGrYW6VcHmkqW5W0WQVdVaHB", "t0BdR8kEW4q", "W4/cOYDNWPC", "W4ddOmoH"];
  return Tx = function() {
    return x;
  }, Tx();
}
function Ve(x, o) {
  const t = Tx();
  return Ve = function(e, n) {
    e = e - (-8597 + 21 * 2 + 8663);
    let i = t[e];
    if (Ve.okSjpE === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = C.indexOf(d);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const u = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = r(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          h = (h + l[d] + C.charCodeAt(d % C.length)) % 256, p = l[d], l[d] = l[h], l[h] = p;
        d = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, h = (h + l[d]) % 256, p = l[d], l[d] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[d] + l[h]) % 256]);
        return A;
      };
      Ve.otbEdO = u, x = arguments, Ve.okSjpE = !0;
    }
    const a = t[907 * 1 + -8857 + 530 * 15], s = e + a, c = x[s];
    return c ? i = c : (Ve.sPtVyl === void 0 && (Ve.sPtVyl = !0), i = Ve.otbEdO(i, n), x[s] = i), i;
  }, Ve(x, o);
}
function _u({ children: x, licensePath: o, bramble: t, wasmDirectoryPath: e }) {
  const n = {};
  n[l(603, 613, 611, "]NpC") + "le"] = t, n[l(584, 597, 613, "Jv97") + C("Xo25", -808, -825) + "h"] = o;
  function i(h, p, A, d, W) {
    return Ve(p - 503, A);
  }
  n[i(619, 632, "]NpC") + C("4WZ*", -866, -856) + l(596, 611, 604, "7R5)") + "th"] = e;
  const { sunfish: r, crosshatch: a } = ju(n), s = {};
  s[C("5^e1", -845, -831) + i(633, 645, "7I%W")] = a;
  const c = xt(() => ({ redfin: Ju(s), sunfish: r, crosshatch: a, bramble: t }), [r, a, t]);
  function u(h, p, A, d, W) {
    return Ve(A - -849, h);
  }
  const g = {};
  g[C("Jv97", -836, -830)] = c, g[l(609, 596, 595, "7PY4") + C("mv7f", -859, -846)] = x;
  function C(h, p, A, d, W) {
    return Ve(A - -965, h);
  }
  function l(h, p, A, d, W) {
    return Ve(p - 485, d);
  }
  return O(Rx[l(608, 610, 614, "1Mnj") + u("mQso", -744, -736)], g);
}
(function(x, o) {
  function t(s, c, u, g, C) {
    return ct(g - -86, s);
  }
  function e(s, c, u, g, C) {
    return ct(s - 564, C);
  }
  var n = x();
  function i(s, c, u, g, C) {
    return ct(g - 398, C);
  }
  function r(s, c, u, g, C) {
    return ct(C - -958, g);
  }
  for (; ; )
    try {
      var a = -parseInt(e(748, 739, 750, 739, "0E5S")) / 1 + -parseInt(i(571, 584, 577, 575, "vf6V")) / 2 + parseInt(r(-767, -765, -771, "IgCl", -770)) / 3 * (-parseInt(r(-766, -762, -763, "0E5S", -767)) / 4) + -parseInt(i(579, 582, 578, 584, "OkrC")) / 5 + -parseInt(t("I$U&", 90, 93, 95, 87)) / 6 + parseInt(e(749, 756, 755, 749, "YE8I")) / 7 + parseInt(r(-778, -781, -792, "c4)F", -783)) / 8 * (parseInt(t("LpEf", 99, 105, 96, 94)) / 9);
      if (a === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ex, -224442 + 60020 * 7 + 120471 * 1);
function ct(x, o) {
  var t = Ex();
  return ct = function(e, n) {
    e = e - (2338 + -2 * 1082);
    var i = t[e];
    if (ct.CtRobV === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", h = "", p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = C.indexOf(d);
        for (var Z = 0, D = l.length; Z < D; Z++)
          h += "%" + ("00" + l.charCodeAt(Z).toString(16)).slice(-2);
        return decodeURIComponent(h);
      }, a = function(g, C) {
        var l = [], h = 0, p, A = "";
        g = r(g);
        var d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          h = (h + l[d] + C.charCodeAt(d % C.length)) % 256, p = l[d], l[d] = l[h], l[h] = p;
        d = 0, h = 0;
        for (var W = 0; W < g.length; W++)
          d = (d + 1) % 256, h = (h + l[d]) % 256, p = l[d], l[d] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[d] + l[h]) % 256]);
        return A;
      };
      ct.UwanYq = a, x = arguments, ct.CtRobV = !0;
    }
    var s = t[1522 + 5 * -1566 + -1 * -6308], c = e + s, u = x[c];
    return u ? i = u : (ct.YZigMb === void 0 && (ct.YZigMb = !0), i = ct.UwanYq(i, n), x[c] = i), i;
  }, ct(x, o);
}
function Ex() {
  var x = ["ctldJSo8iSkaEwfOW4ddMs40", "lmksW7P4W4KmWPG", "jH4pjSkaWR7dQq", "zmkqcCodo1xcT1yyr8oi", "W4aoyrjxvCo0gadcVCo7W53dQq", "CZubW7uTW57cICkDW7ldQSo+WRXq", "u8o2vYKOWR/cG3ZcIW5FWQldL8oC", "WQieW4lcP3jdWRPJFCkkWOVdICoDkW", "WQahW4xcPhXcWR4nvCkjWQ7dICo2", "WPzuWQbahb7dU3FcL8oAWPldTG", "W4bepuOKeSkU", "cmoYW4FcTSoYe8khE8kVWPZdMSk8WQ0", "WOXSW6FdKdjJW6LDBKvECG", "bKlcSvNcMaxcIrNdImoSWRRcSui", "w8kxcvniW6pdPa", "lmotDmopyqVdMhGkW5GCWOH8", "CticW7eOWQNdJCk/W5xdT8oa", "FJlcKd54WODtWOLJWRxcMSkMWPi"];
  return Ex = function() {
    return x;
  }, Ex();
}
function Uu({ analytics: x, crosshatch: o }) {
  return o !== void (-6510 + 29 * -73 + 8627 * 1) && !o.isAnalyticsDisabled ? x : void (194 * -8 + 1 * 1201 + 27 * 13);
}
function Qu({ analytics: x, appKey: o, redfin: t, crosshatch: e, bramble: n }) {
  const i = {};
  i.analytics = x, i.crosshatch = e;
  const r = Uu(i);
  return be(() => {
    r && r.init(o);
  }, [r, o]), be(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), r && r.walleye(t, n.getCustomerName()));
  }, [r, n, e, t]), be(() => {
    if (r)
      return window.addEventListener("beforeunload", r.endSession), () => {
        r.endSession(), window.removeEventListener("beforeunload", r.endSession);
      };
  }, [r]), r;
}
function zu({
  analytics: x,
  appKey: o,
  children: t
}) {
  const { redfin: e, crosshatch: n, bramble: i } = er(), r = Qu({ analytics: x, redfin: e, appKey: o, crosshatch: n, bramble: i }), a = xt(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ O(Zx.Provider, { value: a, children: t });
}
const qu = 1 * -4112 + 1651 + 107 * 23 + 0.4, $u = 9785 + 103 * -95 + 0.16, el = 3948 * -2 + 1 * 4609 + 3287 * 1 + 0.2, tl = 1 * -993 + -7041 + 8034 + 0.05, nl = -1 * 6542 + 3527 * -1 + 10069, hi = {};
hi.min = -(413 * 19 + 101 + 883 * -9), hi.max = 1;
const Sa = hi, wa = 1789 + -64 * -131 + 3391 * -3, xl = -4288 * 2 + -4899 + 539 * 25 + 0.3, ol = 194 * -28 + -4255 + 9687 + 0.2, il = 2815 + -2423 * -2 + -7661 + 0.85, rl = 30, al = -7407 * -1 + -6349 + -1 * 1049 + 0.8100000000000005, Wx = {};
Wx.minDuration = 1e3, Wx.maxDuration = 2500, Wx.minFrames = 10;
const Vo = Wx, pi = {};
pi.max = 100, pi.min = 10;
const Ba = pi, sl = 5492 * -1 + -17 * -488 + -2 * 1042, cl = 5218 + -2509 * 2, gl = -2818 + -3544 * -2 + -4266, dc = "AES-CBC", uc = "RSA-OAEP", dl = "SHA-256", ul = "image/jpeg", ll = -6368 + 2490 * -3 + 7 * 1978, Il = -749 + 3 * 1572 + -3927, fl = "SAM v1.39.3 for idcards", Cl = "dot_embedded_bg.wasm";
let U;
const Vt = new Array(3315 + -33 * -10 + -3517).fill(void 0);
Vt.push(void 0, null, !0, !1);
function mi(x) {
  return Vt[x];
}
let mn = Vt.length;
function hl(x) {
  x < -804 + 1 * -7951 + 1 * 8887 || (Vt[x] = mn, mn = x);
}
function lc(x) {
  const o = mi(x);
  return hl(x), o;
}
let Lt = 4194 + -1398 * 3, un = null;
function vx() {
  return (un === null || un.byteLength === -1 * -8971 + -3014 * 2 + -2943) && (un = new Uint8Array(U.memory.buffer)), un;
}
const Sx = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, pl = typeof Sx.encodeInto == "function" ? function(x, o) {
  return Sx.encodeInto(x, o);
} : function(x, o) {
  const t = Sx.encode(x);
  o.set(t);
  const e = {};
  return e.read = x.length, e.written = t.length, e;
};
function Nx(x, o, t) {
  if (t === void 0) {
    const a = Sx.encode(x), s = o(a.length, 1 * 2979 + 24 * 17 + 2 * -1693) >>> -10 * -447 + -9 * -877 + -3 * 4121;
    return vx().subarray(s, s + a.length).set(a), Lt = a.length, s;
  }
  let e = x.length, n = o(e, -563 * 9 + -13 * 580 + -32 * -394) >>> 0;
  const i = vx();
  let r = 0;
  for (; r < e; r++) {
    const a = x.charCodeAt(r);
    if (a > -4050 + -366 * -18 + -2411) break;
    i[n + r] = a;
  }
  if (r !== e) {
    r !== 5908 + 1 * -6679 + 3 * 257 && (x = x.slice(r)), n = t(n, e, e = r + x.length * (-15 * -143 + -11 * -145 + -3737), 3358 + 9 * -373) >>> 1 * 2207 + 6680 + -8887;
    const a = vx().subarray(n + r, n + e), s = pl(x, a);
    r += s.written, n = t(n, e, r, -1084 * 5 + 2642 + 7 * 397) >>> -3656 * -2 + -1159 + 2051 * -3;
  }
  return Lt = r, n;
}
function Ic(x) {
  return x == null;
}
let ln = null;
function Jt() {
  return (ln === null || ln.byteLength === 5398 + 2373 * 2 + -10144) && (ln = new Int32Array(U.memory.buffer)), ln;
}
const bi = {};
bi.ignoreBOM = !0, bi.fatal = !0;
const fc = typeof TextDecoder < "u" ? new TextDecoder("utf-8", bi) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && fc.decode();
function Ai(x, o) {
  return x = x >>> -9194 + 1 * -7796 + 5 * 3398, fc.decode(vx().subarray(x, x + o));
}
function yi(x) {
  mn === Vt.length && Vt.push(Vt.length + (8715 * -1 + 9188 + 4 * -118));
  const o = mn;
  return mn = Vt[o], Vt[o] = x, o;
}
let In = null;
function Cc() {
  return (In === null || In.byteLength === -991 * 1 + -73 * -29 + 2 * -563) && (In = new Uint32Array(U.memory.buffer)), In;
}
function Ga(x, o) {
  const t = o(x.length * 4, 4) >>> 0, e = Cc();
  for (let n = 0; n < x.length; n++)
    e[t / (7617 * 1 + -466 + -7147) + n] = yi(x[n]);
  return Lt = x.length, t;
}
function ka(x, o) {
  x = x >>> -2063 + 1 * 6181 + 71 * -58;
  const t = Cc(), e = t.subarray(x / 4, x / (4814 + 2 * -559 + -3692) + o), n = [];
  for (let i = -5309 + 5309 * 1; i < e.length; i++)
    n.push(lc(e[i]));
  return n;
}
function ml(x, o) {
  const t = Nx(x, U.__wbindgen_malloc, U.__wbindgen_realloc), e = Lt, n = Nx(o, U.__wbindgen_malloc, U.__wbindgen_realloc), i = Lt, r = U.is_mobile_supported(t, e, n, i);
  return tr.__wrap(r);
}
const Wi = {};
Wi.register = () => {
}, Wi.unregister = () => {
};
const Ha = typeof FinalizationRegistry > "u" ? Wi : new FinalizationRegistry((x) => U.__wbg_licensevalidationresult_free(x >>> -2 * -1697 + 8418 + -11812));
class tr {
  static __wrap(o) {
    o = o >>> 1 * 7684 + -1493 * 4 + -1712;
    const t = Object.create(tr.prototype);
    return t.__wbg_ptr = o, Ha.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = 76 * -21 + 6587 + 7 * -713, Ha.unregister(this), o;
  }
  free() {
    const o = this.__destroy_into_raw();
    U.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, n) {
    var i = Ic(t) ? 0 : Nx(t, U.__wbindgen_malloc, U.__wbindgen_realloc), r = Lt;
    const a = Ga(e, U.__wbindgen_malloc), s = Lt, c = Ga(n, U.__wbindgen_malloc), u = Lt, g = U.licensevalidationresult_new(o, i, r, a, s, c, u);
    return this.__wbg_ptr = g >>> -328 * 20 + -137 * -1 + -1 * -6423, this;
  }
  get is_valid() {
    return U.licensevalidationresult_is_valid(this.__wbg_ptr) !== -2 * -4430 + 9151 + -18011;
  }
  get features_json() {
    try {
      const e = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = Jt()[e / (2246 + -778 * -7 + -7688 * 1) + (22 * -282 + 8416 + 2212 * -1)], t = Jt()[e / (-143 + -978 * -5 + -31 * 153) + (3550 + -7 * 530 + 1 * 161)];
      let n;
      return o !== -1 * 6221 + 1 * -4274 + 10495 && (n = Ai(o, t).slice(), U.__wbindgen_free(o, t * (-5713 + -544 * 9 + 10610), 1952 * 2 + 6524 + -10427)), n;
    } finally {
      U.__wbindgen_add_to_stack_pointer(154 * -14 + 3240 + -4 * 267);
    }
  }
  get errors() {
    try {
      const n = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_errors(n, this.__wbg_ptr);
      var o = Jt()[n / (-3285 + 11 * 299) + (-4125 + -1 * 9215 + 92 * 145)], t = Jt()[n / (9 * 491 + -3 * -551 + -6068) + (-2018 + 1 * -6801 + 8820)], e = ka(o, t).slice();
      return U.__wbindgen_free(o, t * (-27 * 173 + 1598 + 3077), 2345 + 3469 * -1 + 1128), e;
    } finally {
      U.__wbindgen_add_to_stack_pointer(8719 * -1 + 9989 + 11 * -114);
    }
  }
  get warnings() {
    try {
      const n = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var o = Jt()[n / 4 + (7 * 919 + -3 * 2393 + 746)], t = Jt()[n / (74 * -24 + -2846 * -1 + -1066) + (7208 + 170 * -6 + 1 * -6187)], e = ka(o, t).slice();
      return U.__wbindgen_free(o, t * (-1 * 8002 + 5 * 59 + -1 * -7711), -3591 + 1 * -5885 + 9480 * 1), e;
    } finally {
      U.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
async function bl(x, o) {
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
function Al() {
  const x = {};
  return x.wbg = {}, x.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return yi(/* @__PURE__ */ new Date());
  }, x.wbg.__wbg_getTime_2bc4375165f02d15 = function(o) {
    return mi(o).getTime();
  }, x.wbg.__wbindgen_object_drop_ref = function(o) {
    lc(o);
  }, x.wbg.__wbindgen_string_get = function(o, t) {
    const e = mi(t), n = typeof e == "string" ? e : void 0;
    var i = Ic(n) ? 1 * 6133 + 69 * -131 + 2906 : Nx(n, U.__wbindgen_malloc, U.__wbindgen_realloc), r = Lt;
    Jt()[o / 4 + (-14709 + -1 * -14710)] = r, Jt()[o / (-3942 + -337 * 22 + 80 * 142) + (-4062 + 802 * 1 + 163 * 20)] = i;
  }, x.wbg.__wbindgen_string_new = function(o, t) {
    const e = Ai(o, t);
    return yi(e);
  }, x.wbg.__wbindgen_throw = function(o, t) {
    throw new Error(Ai(o, t));
  }, x;
}
function yl(x, o) {
  return U = x.exports, hc.__wbindgen_wasm_module = o, ln = null, In = null, un = null, U;
}
async function hc(x) {
  if (U !== void 0) return U;
  typeof x > "u" && (x = new URL("dot_embedded_bg.wasm", import.meta.url));
  const o = Al();
  (typeof x == "string" || typeof Request == "function" && x instanceof Request || typeof URL == "function" && x instanceof URL) && (x = fetch(x));
  const { instance: t, module: e } = await bl(await x, o);
  return yl(t, e);
}
function Lx() {
  const x = ["xCkrWQVcP8kXlJjiWRtdKWuQW5RcGW", "dJVcOJFdLtFdOW", "W6uCWPTNW4C", "W4GmhSotpZ0FWOCIW4JdOGTI", "d1RcH8ocW4X7W7i7W5LCpSkOn8oN", "W6zyW5zqW7VdSmoOdSklrJeu", "W6tcRHb3kq", "jg/dSW/dKW", "r8oYW4NcJsW", "amobW7ZdPCoL", "W5ftsmkpzG", "xc8lkmox", "BdezWOvEW7RcM8kQW7RcGSowWRC", "mxldRCoaW58", "WQzwW4ldMMy", "rSkYnSkLW5S", "dYTsW7NdRG", "at8fW7BcNG", "WQldULuRuCkeWQbkW7nIWOtdM8osW4u", "j8oYcmoJWOm9imkABSkrWR57W67cLW", "W5OiDYhdNW", "nMX/W5Xf", "WR/cMcK0WR1mW4OVAhX7qCk8", "WONdJmknW6vm", "W4RcUwpdSCkdW5ytW75FDvhdQa", "aSonW6NdV8oH", "fSkAysRdJa", "WPddHmkkW6fK", "EwToW5SE", "uqVdL8kvWPa", "mcpcOJS", "W4pdQmozoJRdL07cPHtcMaBdIq", "pSooWPBcGSkk", "fZtdG8o1WPKLW4HJ", "aw9PW7tdQG", "kIpcPdZcRG", "W5tcLSobWRSCW5TgWP/cOb7cGtBcLq", "wCkeW4WlWQXmid7dMCojWPJdMW", "q8oUW6ZcIx8", "vqJdNSkyWO4", "xwDAW7ZdNmoBwa", "WQRdTLqVvCkdWQqRW7PHWQhdOmoS", "WRpcRaT/aW", "lwr2W5rO", "amonW6FdS8oK", "WOrurdtdJYGBuG", "WPldVJJcQCov", "DCoDW5BdKCk3", "WR7cJehcJ8oMWPzbkCozirVdPW", "m2TSW40", "W6JdHgvCW6K", "DuTbW5RdMG", "htmmW7hcKa"];
  return Lx = function() {
    return x;
  }, Lx();
}
function To(x, o, t, e, n) {
  return He(e - -527, o);
}
function ax(x, o, t, e, n) {
  return He(t - -655, e);
}
function He(x, o) {
  const t = Lx();
  return He = function(e, n) {
    e = e - (-152 * -32 + -9571 + 13 * 388);
    let i = t[e];
    if (He.umgqUQ === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = C.indexOf(d);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const u = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = r(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          h = (h + l[d] + C.charCodeAt(d % C.length)) % 256, p = l[d], l[d] = l[h], l[h] = p;
        d = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, h = (h + l[d]) % 256, p = l[d], l[d] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[d] + l[h]) % 256]);
        return A;
      };
      He.UXpEAw = u, x = arguments, He.umgqUQ = !0;
    }
    const a = t[606 * 11 + -3 * 2543 + 963], s = e + a, c = x[s];
    return c ? i = c : (He.SCuyXY === void 0 && (He.SCuyXY = !0), i = He.UXpEAw(i, n), x[s] = i), i;
  }, He(x, o);
}
function sx(x, o, t, e, n) {
  return He(n - -148, x);
}
function Wl(x, o, t, e, n) {
  return He(o - -658, t);
}
(function(x, o) {
  function t(a, s, c, u, g) {
    return He(g - -571, u);
  }
  const e = x();
  function n(a, s, c, u, g) {
    return He(a - 937, s);
  }
  function i(a, s, c, u, g) {
    return He(s - 734, c);
  }
  function r(a, s, c, u, g) {
    return He(a - 198, s);
  }
  for (; ; )
    try {
      if (parseInt(i(1053, 1072, "EnGH", 1052, 1081)) / 1 + parseInt(i(1127, 1106, "$59Y", 1108, 1083)) / 2 * (parseInt(r(566, "o[sA", 543, 549, 541)) / 3) + -parseInt(r(587, "DUkG", 565, 591, 580)) / 4 + -parseInt(n(1296, "IS&C", 1280, 1318, 1318)) / 5 * (-parseInt(n(1299, "b4x&", 1325, 1313, 1306)) / 6) + parseInt(t(-240, -219, -213, "NPvj", -216)) / 7 + parseInt(r(565, "mO!%", 588, 589, 539)) / 8 + -parseInt(t(-210, -176, -186, "%Irb", -200)) / 9 === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Lx, 1504955 + 62241 * -12 + 236525);
function Eo(x, o, t, e, n) {
  return He(t - -124, x);
}
var ts;
class vl {
  constructor() {
    M(this, ts, !1);
  }
  async [(ts = sx("6@)5", 224, 192, 231, 209) + sx("YaDi", 217, 215, 235, 217) + Eo("IS&C", 276, 263), Eo("6@)5", 225, 239))](o = To(-164, "EQFF", -151, -158)) {
    function t(a, s, c, u, g) {
      return Eo(c, s - 17, g - 935);
    }
    function e(a, s, c, u, g) {
      return To(a - 183, u, c - 134, s - 47);
    }
    function n(a, s, c, u, g) {
      return ax(a - 405, s - 347, a - 1335, u);
    }
    function i(a, s, c, u, g) {
      return ax(a - 200, s - 319, u - -251, a);
    }
    function r(a, s, c, u, g) {
      return sx(g, s - 321, c - 299, u - 425, a - 267);
    }
    try {
      const a = o + "/" + Cl;
      await hc(a), this[i("Zjs^", -588, -550, -565, -590) + e(-127, -143, -158, "Zjs^", -121) + t(1171, 1164, "BNv1", 1160, 1185)] = !0;
    } catch {
      this[i("NPvj", -536, -519, -533) + e(-145, -141, -164, "mO!%") + r(507, 493, 486, 486, "6@)5")] = !1, console[e(-120, -136, -150, "kNI5")](n(1044, 1050, 1032, "DUkG") + r(462, 436, 463, 486, "%Irb") + r(467, 464, 462, 469, "N2k#") + r(465, 462, 485, 462, "D2P3") + e(-142, -138, -139, "J1P[") + n(1033, 1052, 1030, "%Irb") + t(1168, 1167, "zC^U", 1189, 1191) + t(1172, 1195, "chsl", 1204, 1188) + i("D2P3", -554, -544, -545) + r(495, 499, 518, 488, "mO!%") + n(1036, 1061, 1032, "NPvj") + i("N2k#", -538, -544, -523) + n(1046, 1053, 1051, "X*6h") + e(-144, -120, -135, "EnGH") + e(-123, -102, -96, "S&@C") + n(1055, 1064, 1077, "WM4D") + n(1020, 997, 1018, "JXKS") + e(-130, -131, -131, "kNI5") + "n.");
    }
  }
  [sx("WM4D", 215, 218, 180, 204) + To(-162, "3vHP", -137, -145) + ax(-290, -291, -271, "X*6h") + "ed"]() {
    function o(e, n, i, r, a) {
      return Wl(e - 435, a - -60, e);
    }
    function t(e, n, i, r, a) {
      return ax(e - 87, n - 388, n - 943, i);
    }
    return this[o("PoKP", -332, -311, -345, -337) + t(676, 653, "YaDi") + o("mO!%", -384, -378, -370, -360)];
  }
}
class No extends Error {
  constructor() {
    super(...arguments);
    M(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function Oa(x, o, t, e, n) {
  return ue(e - -429, n);
}
function Yt(x, o, t, e, n) {
  return ue(n - 299, x);
}
function ue(x, o) {
  var t = Dx();
  return ue = function(e, n) {
    e = e - (-7329 + -9979 * 1 + -1 * -17450);
    var i = t[e];
    if (ue.PKKBrl === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", h = "", p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = C.indexOf(d);
        for (var Z = 0, D = l.length; Z < D; Z++)
          h += "%" + ("00" + l.charCodeAt(Z).toString(16)).slice(-2);
        return decodeURIComponent(h);
      }, a = function(g, C) {
        var l = [], h = 0, p, A = "";
        g = r(g);
        var d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          h = (h + l[d] + C.charCodeAt(d % C.length)) % 256, p = l[d], l[d] = l[h], l[h] = p;
        d = 0, h = 0;
        for (var W = 0; W < g.length; W++)
          d = (d + 1) % 256, h = (h + l[d]) % 256, p = l[d], l[d] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[d] + l[h]) % 256]);
        return A;
      };
      ue.pZWpHL = a, x = arguments, ue.PKKBrl = !0;
    }
    var s = t[-6628 * 1 + -1719 * 4 + 13504], c = e + s, u = x[c];
    return u ? i = u : (ue.tlrGrr === void 0 && (ue.tlrGrr = !0), i = ue.pZWpHL(i, n), x[c] = i), i;
  }, ue(x, o);
}
function t0(x, o, t, e, n) {
  return ue(x - -488, t);
}
function Lo(x, o, t, e, n) {
  return ue(t - 61, o);
}
(function(x, o) {
  function t(s, c, u, g, C) {
    return ue(c - -420, s);
  }
  function e(s, c, u, g, C) {
    return ue(g - 679, c);
  }
  function n(s, c, u, g, C) {
    return ue(s - -295, c);
  }
  var i = x();
  function r(s, c, u, g, C) {
    return ue(C - -143, c);
  }
  for (; ; )
    try {
      var a = -parseInt(n(-110, "PVb8", -106, -114, -102)) / 1 + parseInt(n(-114, "v*&U", -142, -138, -99)) / 2 + parseInt(n(-99, "ZtE8", -96, -75, -126)) / 3 * (-parseInt(n(-133, "^WUT", -136, -137, -148)) / 4) + parseInt(t("zs@k", -236, -262, -249, -247)) / 5 * (-parseInt(n(-122, "K#UO", -122, -115, -119)) / 6) + -parseInt(e(859, "[hNJ", 872, 868, 862)) / 7 + -parseInt(r(28, "epAm", -16, 33, 5)) / 8 + parseInt(n(-124, "]i1p", -118, -140, -144)) / 9 * (parseInt(r(27, "lyoz", 35, 25, 52)) / 10);
      if (a === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Dx, -140602 + -70277 * -9);
function Dx() {
  var x = ["o0KCb8o/", "W6iIyCo4BW", "W4hdQSoErCkCwmobWP3dGrOWnG", "jbnFW5BcTW", "W5NdQ1SPgG", "W6ldTmkHWOO", "l0bOimowoXjEvIXQW7RcMW", "WQBdNrdcRSoM", "CH4O", "WRynW5BdKCkQ", "WOuRW7ySBa", "emoBxuZcOa", "Df9yl0W", "W7RcTCkZW5hdLW", "FwWUW6zMW57dVe3cOKe", "ELTnofe", "W5RcR8oWvcu", "amoTw0ZcSG", "WOhcTK/cSHK", "DqZdMmo9WO4", "lG4DFNZcI8olW4v9W7e", "W4TPW7O", "amogxa", "WQRdUCkdWOpdKaBcOSktW6pdNCkgW78o", "W6RdUCoVW6PE", "W6TuWOdcTCoPW7dcGSoWrfJdHsFdMa", "lNhcPXnTqSkjew5KWPVdItFdMW", "nf4hWRDC", "BHWOsmke", "f8kPnSk1W7mGva", "WPlcUSoFzCo2", "WOjKnsZdN05i", "EIjOAL7cNmo7dbhcVW", "W73cQCk5W4C", "WQVdRtDqWOO", "W5iQhKmWCdi", "WRytW6ZdS8k5", "W7NdV8k0", "kYBdUeq3pSoM", "nSkpFmo0jSoJhGRdJsO7WO8", "FvbFluC", "tSkswgKl", "oalcNSoZW7KQh8oRWRbHAmklW5O", "nLRdUSkMWQZcRZ7cL23cRCkyWRu", "BWDEwSkSW4ighmkuWPODWPS", "W5D1ntZdGa", "W63cKmoGr8oZ", "WPVcVX11rg3dMgPLi8kYWPhdOq", "AaJcRCoMW6K", "WPVcTSki", "W6RcLSoH", "EuXEi1y", "BstdPvq+", "WQZdUmkhWOxdKqhcOSo2W5hdSSkMW4mijG", "WOldRCksddNdGmokAWn/", "FLpdNSkCWQi", "W5bOlHJdLG"];
  return Dx = function() {
    return x;
  }, Dx();
}
var E0;
class Za {
  constructor(o) {
    ce(this, E0);
    this[i(624, "K#UO", 612, 596, 596) + e(-122, -106, -108, "^WUT")] = o;
    function t(a, s, c, u, g) {
      return ue(a - -518, c);
    }
    function e(a, s, c, u, g) {
      return ue(a - -276, u);
    }
    function n(a, s, c, u, g) {
      return ue(c - 668, u);
    }
    function i(a, s, c, u, g) {
      return ue(g - 409, s);
    }
    function r(a, s, c, u, g) {
      return ue(g - 218, a);
    }
    try {
      ae(this, E0, o[r("^WUT", 365, 360, 372, 375) + i(594, "epAm", 565, 576, 579) + e(-84, -73, -59, "IH%J", -106)] && JSON[t(-324, -298, "r7U&", -302, -342)](o[i(586, "PVb8", 620, 585, 599) + t(-321, -325, "zs@k", -310, -338) + r("OL#X", 377, 371, 411, 382)]));
    } catch (a) {
      console[n(786, 830, 815, "TdLE")](a);
    }
  }
  get [t0(-330, -303, "ZtE8") + "id"]() {
    function o(e, n, i, r, a) {
      return t0(a - 13, n - 43, i);
    }
    function t(e, n, i, r, a) {
      return t0(a - 88, n - 328, i);
    }
    return this[t(-230, -254, "qv6U", -283, -255) + o(-300, -316, "4md1", -333, -323)][t(-213, -240, "B!xU", -230, -222) + t(-218, -216, "RGpm", -180, -209)];
  }
  get [Yt("W7E6", 438, 453, 445, 442) + "s"]() {
    function o(n, i, r, a, s) {
      return t0(a - 147, i - 149, r);
    }
    function t(n, i, r, a, s) {
      return Yt(n, i - 72, r - 52, a - 1, r - -761);
    }
    function e(n, i, r, a, s) {
      return t0(i - -372, i - 18, s);
    }
    return this[t("X9Q@", -300, -313, -331) + e(-692, -700, -675, -673, "onbh")][o(-132, -136, "^WUT", -148) + "s"];
  }
  get [t0(-319, -307, "EFN&") + Lo(220, "Wju2", 224)]() {
    function o(e, n, i, r, a) {
      return Yt(a, n - 349, i - 200, r - 344, i - -1164);
    }
    function t(e, n, i, r, a) {
      return t0(a - -324, n - 404, e);
    }
    return this[o(-693, -716, -712, -716, "OL#X") + o(-685, -675, -693, -676, "AMo4")][t("[hNJ", -645, -657, -665, -666) + o(-692, -737, -715, -691, "epAm")];
  }
  get [Lo(239, "K#UO", 259) + "b"]() {
    return j(this, E0);
  }
  get [Oa(-241, -222, -231, -246, "NY@#") + Yt("axom", 446, 435, 463, 441) + Yt("OL#X", 441, 433, 463, 458) + Yt("mvNq", 479, 467, 479, 474)]() {
    var i, r;
    function o(a, s, c, u, g) {
      return Yt(u, s - 379, c - 265, u - 75, c - -246);
    }
    function t(a, s, c, u, g) {
      return Yt(c, s - 58, c - 213, u - 178, s - 683);
    }
    function e(a, s, c, u, g) {
      return Oa(a - 454, s - 355, c - 130, s - 243, u);
    }
    function n(a, s, c, u, g) {
      return Lo(a - 77, a, g - -550);
    }
    return !!((r = (i = j(this, E0)) == null ? void 0 : i[n("PVb8", -283, -317, -274, -299) + t(1166, 1161, "TdLE", 1188)]) != null && r[n("0)dn", -317, -304, -298, -313) + o(176, 180, 204, "B!xU") + e(-19, -4, -18, "^WUT") + t(1168, 1170, "IH%J", 1196) + e(-24, -31, -42, "mvNq") + o(227, 190, 214, "5[t6") + o(228, 193, 219, "wa^p") + "d"]);
  }
}
E0 = new WeakMap();
(function(x, o) {
  function t(s, c, u, g, C) {
    return pe(g - -702, C);
  }
  function e(s, c, u, g, C) {
    return pe(g - -640, s);
  }
  function n(s, c, u, g, C) {
    return pe(C - 538, u);
  }
  function i(s, c, u, g, C) {
    return pe(s - 82, u);
  }
  const r = x();
  function a(s, c, u, g, C) {
    return pe(u - 422, C);
  }
  for (; ; )
    try {
      if (parseInt(t(-233, -312, -341, -269, "K2y(")) / 1 * (-parseInt(n(1028, 1015, "VZO8", 1065, 967)) / 2) + parseInt(t(-443, -366, -398, -356, "HiLE")) / 3 * (-parseInt(i(401, 386, "t^N0", 442, 388)) / 4) + parseInt(t(-229, -327, -442, -334, "!SqO")) / 5 * (parseInt(e("998v", -313, -242, -338, -430)) / 6) + parseInt(e("c3Bi", -338, -286, -357, -313)) / 7 * (-parseInt(e("998v", -177, -355, -271, -331)) / 8) + parseInt(i(345, 257, "K2y(", 364, 395)) / 9 * (-parseInt(a(585, 648, 679, 646, "JvdV")) / 10) + parseInt(i(347, 423, "@eST", 436, 279)) / 11 + -parseInt(a(722, 680, 719, 696, "Zy3b")) / 12 * (-parseInt(t(-384, -449, -304, -342, "@YA1")) / 13) === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Fx, 821902);
function n0(x, o, t, e, n) {
  return pe(x - 360, e);
}
function St(x, o, t, e, n) {
  return pe(t - 522, n);
}
function Ke(x, o, t, e, n) {
  return pe(e - 804, n);
}
function Le(x, o, t, e, n) {
  return pe(t - -405, x);
}
function pe(x, o) {
  const t = Fx();
  return pe = function(e, n) {
    e = e - (-8 * -76 + 2 * 2662 + 26 * -219);
    let i = t[e];
    if (pe.PrTTuy === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = C.indexOf(d);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const u = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = r(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          h = (h + l[d] + C.charCodeAt(d % C.length)) % 256, p = l[d], l[d] = l[h], l[h] = p;
        d = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, h = (h + l[d]) % 256, p = l[d], l[d] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[d] + l[h]) % 256]);
        return A;
      };
      pe.IsgseB = u, x = arguments, pe.PrTTuy = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? i = c : (pe.pUsGfg === void 0 && (pe.pUsGfg = !0), i = pe.IsgseB(i, n), x[s] = i), i;
  }, pe(x, o);
}
function Fx() {
  const x = ["itjZFSkJ", "er/dNXbi", "psKKoCkt", "h8kQfa", "wIJdOYLB", "rIHfW4BdNq", "E8o5DJSQ", "maJdHZLS", "AwWkqgK", "W4ZdG1DJW40", "gbpdJG", "W43dSh0", "mvq5bMv9tNO", "WPlcQN3dRmkj", "fCkQavddPq", "ttuxW63dOa", "W7ddJLddTCoM", "W5fFWOHEW6W", "ymkFWQ8MCG", "sW9+c3G", "kSoLWRNdKh8", "hb94ka", "xsVdLmkaWQO", "lCoHW48", "hXhdMtzb", "ubdcRN5E", "W54TW6NdNmkl", "W4NdIvfOW5a", "W7tdKmksW5pcNG", "rcxcVmk+WPC", "er9Dqmkj", "CrqYkLm", "vqf0lKO", "WQldRmk9W5W", "zCkvWQKTBW", "zIHfW4BdNq", "lJz+y8kS", "WQ9AW4O", "W5NdLf3dNCoh", "WO7cPZ4+FsW9WQK4WQjQW6O", "W7RdVcTcCG", "W7D6WQv0", "aCkQaq", "kMRdG8kZWQe", "WPxcQK/cO8kw", "W4ruWOm6W7m", "WPnWfmky", "W4ykzSk6xq", "kmoKWQ/dQhK", "WRVdQSk8", "WQDxW5JcLa", "zSoFbMBcTW", "EdCta8k3", "WQfXWReaWQRdRmk+jG", "o1BdJCkTWRC", "zmkxWRGGDa", "W55cWOa", "W7HpW63cISk+WRmB", "WRPCW4BcJW", "WRS4WRBcG8oEWO80WRNdRhHiB8oLea", "WO98f8k+WO4", "WOyuW5mBWQD/WOlcRW9IWP0scW", "W4NdI8kYW5v+Ef7cTCknvbVcTCoZ", "WPJcK8o2WO4M", "DfxcKait", "frhdIbju", "W5ddOe9cDG", "Ctyhi8oL", "EtWesa", "W7JdSJS", "jdP8CSk3", "j8o+WRS", "r2hcHsie", "WQ9VW53cUSkL", "W68AW5VdLmoy", "D8k/WOHJldJdM2RcJxCsWPZdQa", "xJBdVrvm", "fWHV", "W4tcOSk9mCoPgmkBfq", "WOlcL8oXWRiK", "W6rQW7y", "W5OXWPeFWPi", "WPpdJNbtW4a", "W7/cIIVdICoXsCkV", "hmoRWPNdMX0", "Et7dICkdWQy", "WPZcM8oHWOGG", "wXtcTg5t", "lSo/WQ/dUty", "W7OOWPm", "W5pdQfzvDa", "W77dGCkyW47cNG", "wCkEbf8W", "W5hdKKRdVCoe", "W4hdH8kEWPvy", "DcO/emo2", "WOhcRCkJW5TC", "sMtdICoHW4u", "WPddPSkuaq", "vYVdRH5Y", "WO19j8oGk8k8W47cHG", "wKlcJr00", "WPpdJNzlW50", "WQTxW43cNSoj", "W7ddScLtAq", "W4FdHvzPW5S", "EZysi8o2", "W64vW4NdMa", "WRFdHmksW5xcGW", "zJlcOmk9WPi", "qeZcHJeI", "gaH5kuO", "fX/dPYnb", "W6ddG8kpW47cHa", "fSk3axRdTG", "fXFdNXPb", "WRBcM8oZWR0e", "W5FdShX4iq", "W4FdQN5Qba", "vCkgp1es", "WQLWd8kyWO8", "BZnuW4ZdGq", "W7WbW4NcNmkhWOKZdW", "pthdV1nS", "wHVcPMi", "EhKocCoJ", "ESkHW63cQc7cN3KlnCklzHa", "W5ffWQ9jW5O", "abdcHSoiDG", "WRNdOSkUW5zZ", "WQrbW5JcMmkO", "W7uOWOG7WRO", "m07dPmodW7S", "bMFdTmoWW6O", "W7tdH8ktW5pcIa", "W4pdGCkuWQPc", "rcnXW57dGa", "DG8W", "y3adxa", "W54OiCoZpW", "WRNdOSkei8o1", "W7CaWO7dG8ozW6b9pcldQ8oQySoM", "W7qIWOKwWQS", "lmo0WQJdKh8", "W4iiW4hdUSo/", "W5BdRfDKDW", "W7xdPYDuBW", "tCkviLWo", "W48HtmocW558WQ5LWRJcPSoRwW", "WPlcQNxdU8kB", "WP3cK8oRWOm", "W7pdUZTcpa", "vLxcRMjp", "W40eFmkTrW", "WORdN3XtW4C", "mM4eWPNcLSk7W7tcJqTJq0HWWOa", "W6/dOGvouq", "kSoPW5i", "oqtcRmoWya", "WQbwW4RdM8ka", "gXVdJXDf", "WP/cTL7dImkx", "WO7dTxDuW4a", "E8oQBsy7", "zYr+zmk0", "qSo1ewldTCk8W6DG", "lmk0AmoRFSoAi8oEAq7dUCoM", "W5pdMeRdM8ob", "W5ZdQKX5kG", "xYVdUZ9t", "cGZcGmop", "ESkLW6/cRc/cMJr4oCkwzcZdIqi", "W65OW6hcMW", "WPtcLqe7WOHbW53cR3OsWRGNrrm", "ASo1yq", "y2dcSHeS", "DY3dRb9q", "hrhdNZzn", "wcSscCoL", "qJBdNW", "W48MDYBcNG", "cqZdGH1u", "yddcM8kPWOa", "WOlcNCoW", "eXTNW7xdVa", "AqK9kLK", "l8oVW58WEG", "WPxcGmoWWOi8", "xtNcUSk8", "WPpcVruZk8olWPfRWQmyW5ZcQ8kszW", "cxZdUb1qW73cI8oF", "db7dVb5AW5pcUa", "ddLlqCk2", "wCoNWO7cGqq", "j8o+WR/dVwi", "W6KmA8kRqq", "W4tdHSoLWQqCdbhcPa", "W5NdShPIkW", "gGZdHabt", "W7eAW4pdNSou", "WP7dTCkfb8o1", "W47dNmksWOnf", "qZBcOCkMWPC", "WPJcNCoXWPKG", "xXZcUMHF", "l2Lqx8kIoHyLESkjW6ilcLa", "lsfTEmkR", "W6qEW4hdHmov", "W4pcGSkrW4NcJG", "uJlcP8kRWPy", "W4BcHmorWPWzkZG", "W4pdJ0biW58", "wSkcp3yv", "rSoTWRi", "c2ddLSkAWOC"];
  return Fx = function() {
    return x;
  }, Fx();
}
function Kt(x, o, t, e, n) {
  return pe(n - 585, e);
}
var ns, xs;
class Sl {
  constructor(o) {
    M(this, xs);
    M(this, ns);
    function t(n, i, r, a, s) {
      return pe(i - -215, r);
    }
    function e(n, i, r, a, s) {
      return pe(i - 532, a);
    }
    this[e(843, 801, 860, "CWIf") + t(236, 203, "V0(3") + "d"] = o;
  }
  async [(xs = Le("uH$m", 55, -28) + "se", ns = Le("h^V$", 31, -55) + Le("hBNw", -67, -113), Le("hY4K", -230, -143))](o = Kt(798, 838, 830, "uH$m", 841), t = Ke(1176, 1121, 1112, 1143, "V0(3") + Le("sDo&", 38, -54) + "ic") {
    function e(s, c, u, g, C) {
      return Le(u, c - 50, g - 780);
    }
    function n(s, c, u, g, C) {
      return Ke(s - 476, c - 353, u - 186, u - -1025, c);
    }
    await Promise[i(828, 819, 869, 837, "c3Bi") + i(904, 770, 918, 864, "t^N0")]([this[n(28, "c3Bi", 40) + i(826, 740, 863, 778, "CWIf") + "d"][r(354, 353, 431, "v3Jp")](o), this[a(555, 607, 461, "c3Bi") + a(465, 535, 492, "@eST") + "e"](t)]);
    function i(s, c, u, g, C) {
      return St(s - 359, c - 278, g - 4, g - 134, C);
    }
    function r(s, c, u, g, C) {
      return n0(c - -287, c - 38, u - 118, g);
    }
    function a(s, c, u, g, C) {
      return Ke(s - 418, c - 93, u - 200, s - -655, g);
    }
    this[r(509, 490, 551, "oWa(") + r(474, 400, 464, "K2y(") + e(652, 655, "Lg2#", 707)]();
  }
  async [Le("LrgL", -56, -146) + Ke(1084, 1043, 1086, 1091, "[o]o") + "se"](o) {
    function t(a, s, c, u, g) {
      return n0(a - -271, s - 249, c - 352, u);
    }
    function e(a, s, c, u, g) {
      return Le(u, s - 94, s - 1012);
    }
    function n(a, s, c, u, g) {
      return n0(u - 185, s - 374, c - 363, c);
    }
    function i(a, s, c, u, g) {
      return n0(a - -7, s - 143, c - 498, c);
    }
    function r(a, s, c, u, g) {
      return Ke(a - 89, s - 160, c - 318, a - -536, g);
    }
    try {
      if (n(856, 960, "uH$m", 882, 886) !== n(977, 923, "Z)7n", 984, 1058)) this[i(646, 642, "s89Y", 579, 559) + "se"] = void (1519 * -2 + 6222 + -3184), _0x3df48d[n(1033, 1016, "JvdV", 966, 969)](_0xc1c6ff);
      else {
        const a = await fetch(o);
        if (!a.ok) {
          if (t(523, 474, 475, "!SqO", 455) !== n(907, 875, "oWa(", 924, 870)) throw new Error(r(698, 799, 714, 612, "CWIf") + n(992, 915, "%k6#", 943, 1032) + t(333, 269, 373, "Lg2#", 365) + i(768, 814, "%k6#", 819, 822) + "d.");
          _0x3a3b73[e(917, 1020, 1072, "Zy3b", 1001) + "ch"]((s) => _0xbddcec[t(503, 431, 592, "LvX9", 448)](s));
        }
        this[r(696, 738, 774, 730, "MKd)") + "se"] = await a[e(1040, 972, 1048, "VZO8", 1066)]();
      }
    } catch (a) {
      r(591, 587, 621, 586, "LrgL") === t(540, 517, 524, "LvX9") ? (this[i(746, 761, "998v") + "se"] = void (2176 + 373 * 10 + -5906), console[n(866, 862, "c3Bi", 928)](a)) : _0x7db247[t(399, 355, 311, "JvdV")]();
    }
  }
  async [Kt(1050, 974, 1055, "yWJJ", 1021) + n0(701, 755, 797, "VA6k") + "e"](o) {
    function t(a, s, c, u, g) {
      return Le(a, s - 263, g - 904);
    }
    function e(a, s, c, u, g) {
      return Le(a, s - 96, c - 734);
    }
    function n(a, s, c, u, g) {
      return Ke(a - 436, s - 11, c - 292, c - -1089, u);
    }
    if (this[n(-34, -6, 5, "CWIf") + i(-533, -480, "[o]o", -579, -549)] = void 0, !o)
      if (n(13, 104, 103, "@YA1") === n(-69, -57, 29, "CWIf")) {
        console[t("Lg2#", 885, 835, 950, 930)](r("MKd)", 615, 666) + e("yWJJ", 751, 732) + t("@&eg", 808, 657, 743, 742) + r("v3Jp", 729, 680) + r("MSy^", 660, 608)), this[e("@eST", 764, 663) + "se"] = void (4762 * -1 + 2945 + 1817);
        return;
      } else _0x42dfb1[n(69, 170, 123, "oWa(") + t("JvdV", 901, 751, 780, 848)](_0x16a131);
    function i(a, s, c, u, g) {
      return Ke(a - 290, s - 229, c - 343, g - -1598, c);
    }
    function r(a, s, c, u, g) {
      return Le(a, s - 94, c - 749);
    }
    await this[e("v3Jp", 601, 630) + e("c3Bi", 608, 597) + "se"](o);
  }
  [St(839, 794, 777, 730, "RdeB") + Kt(867, 773, 879, "Zy3b", 855) + "s"](o) {
    function t(e, n, i, r, a) {
      return Ke(e - 283, n - 341, i - 229, i - 79, n);
    }
    o[t(1265, "CWIf", 1214) + "ch"]((e) => console[t(1215, "u3c7", 1231)](e));
  }
  [St(701, 695, 761, 862, "eHRw") + Ke(1298, 1218, 1203, 1196, "1HWl") + Le("MSy^", -80, -18)](o) {
    function t(e, n, i, r, a) {
      return Ke(e - 394, n - 423, i - 232, n - -23, i);
    }
    o[t(1075, 1084, "@eST") + "ch"]((e) => console[t(1086, 1138, "VZO8")](e));
  }
  [St(856, 909, 826, 803, "eHRw") + St(847, 825, 875, 816, "!]PU")]() {
    function o(e, n, i, r, a) {
      return St(e - 167, n - 198, a - 224, r - 5, r);
    }
    function t(e, n, i, r, a) {
      return St(e - 400, n - 13, e - -407, r - 44, a);
    }
    return window[o(1121, 1064, 1065, "K2y(", 1032) + o(1202, 1163, 1181, "@YA1", 1142)][o(1031, 949, 1096, "998v", 1041) + t(432, 484, 352, 328, "CWIf")];
  }
  [St(794, 900, 813, 719, "LvX9") + Kt(1113, 994, 970, "s89Y", 1027) + Le("%k6#", 103, 36)]() {
    function o(r, a, s, c, u) {
      return n0(r - 627, a - 412, s - 240, c);
    }
    function t(r, a, s, c, u) {
      return Ke(r - 424, a - 11, s - 275, c - -901, s);
    }
    function e(r, a, s, c, u) {
      return Ke(r - 289, a - 181, s - 42, s - -839, r);
    }
    function n(r, a, s, c, u) {
      return Ke(r - 370, a - 390, s - 375, u - -760, r);
    }
    function i(r, a, s, c, u) {
      return Ke(r - 199, a - 179, s - 192, s - -288, a);
    }
    try {
      if (i(862, "VZO8", 953, 983, 1060) !== i(927, "HiLE", 941, 845, 1046)) {
        if (!this[n("LrgL", 313, 458, 388, 389) + "se"])
          throw e("$gzZ", 316, 250, 159, 193) === i(906, "Z)7n", 956, 902, 925) ? new No(n("t^N0", 342, 411, 341, 370) + e("%k6#", 241, 265, 266, 209) + n("Zy3b", 302, 493, 331, 403) + n("HiLE", 432, 285, 418, 333) + ".") : new _0x3eba26(o(1261, 1193, 1323, "1HWl", 1326) + e("%k6#", 354, 265, 162, 368) + o(1382, 1405, 1337, "K2y(", 1398) + o(1425, 1424, 1431, "@YA1", 1329) + ".");
        if (!this[e("LrgL", 379, 365, 344, 340) + o(1433, 1333, 1371, "[DYT", 1363) + "d"][n("sDo&", 389, 282, 444, 364) + e("82eC", 164, 219, 255, 222) + o(1294, 1254, 1199, "uH$m", 1190) + "ed"]()) {
          if (i(807, "hY4K", 766, 661, 771) === n("HiLE", 325, 309, 219, 304)) return;
          throw new No(o(1263, 1284, 1332, "*Yt5", 1168) + n("VZO8", 288, 254, 272, 295) + t(421, 408, "CWIf", 325, 313) + e("Lg2#", 312, 261, 221, 315) + ".");
        }
        this[e("%k6#", 222, 300, 321, 355) + t(116, 240, "CWIf", 211, 162)] = new Za(ml(this[e("2e9B", 305, 243, 254, 146) + "se"], this[n("XXSD", 399, 353, 372, 435) + o(1229, 1287, 1153, "998v", 1300)]())), this[o(1376, 1268, 1275, "82eC", 1469) + i(858, "MKd)", 828, 767, 728) + "s"](this[t(174, 152, "czVU", 218, 297) + e("CWIf", 321, 273, 333, 272)][i(893, "MKd)", 858, 958, 858) + "s"]), this[o(1260, 1214, 1198, "CWIf", 1305) + o(1414, 1435, 1392, "!]PU", 1368) + o(1317, 1389, 1215, "2e9B", 1250)](this[t(117, 107, "@&eg", 141, 75) + n("998v", 485, 330, 429, 414)][o(1439, 1513, 1386, "Vg1z", 1475) + i(897, "yWJJ", 872, 894, 828)]);
      } else _0x2889d0[t(296, 262, "JvdV", 224, 134) + "ch"]((r) => _0x6c96e2[i(930, "yWJJ", 856, 951, 890)](r));
    } catch (r) {
      if (t(280, 177, "gVB)", 175) !== n("hBNw", 509, 587, 412, 491)) {
        if (r instanceof No) e("oWa(", 371, 336) === e("h^V$", 310, 271) ? r[e("K2y(", 446, 343)]() : this[o(1240, 1318, 1326, "sDo&") + e("@eST", 292, 377) + "d"] = _0x242aa3;
        else if (r instanceof Error) {
          if (t(273, 194, "Osa(", 212) === o(1406, 1386, 1449, "CWIf")) throw new _0x1840ad(e("u3c7", 338, 317) + o(1233, 1250, 1236, "82eC") + e("Zy3b", 429, 397) + e("Z)7n", 399, 369) + "d.");
          console[e("uH$m", 172, 263)](r);
        }
        const a = {};
        a[t(71, 116, "sDo&", 144) + n("1HWl", 231, 310, 229, 315)] = !1, a[e("Y*nr", 411, 323) + "s"] = [], a[n("%k6#", 463, 538, 518, 464) + n("@&eg", 501, 384, 315, 420)] = [], a[i(829, "@&eg", 927) + o(1373, 1335, 1474, "998v") + n("t^N0", 423, 576, 528, 488)] = void (-19 * -342 + -71 * 41 + -3587), a[n("V0(3", 321, 332, 276, 372)] = function() {
        }, this[o(1422, 1403, 1370, "hY4K") + o(1413, 1505, 1485, "eHRw")] = new Za(a);
      } else return _0x1c9856[t(222, 358, "CWIf", 275) + t(92, 99, "2e9B", 152)][e("HiLE", 394, 389) + e("RdeB", 175, 231)];
    }
  }
  [Kt(1011, 1e3, 1118, "K2y(", 1035) + Kt(896, 793, 929, "LvX9", 884) + Le("v3Jp", 10, 11) + "t"]() {
    function o(t, e, n, i, r) {
      return Kt(t - 404, e - 472, n - 68, e, n - -1116);
    }
    return this[o(-275, "%k6#", -196) + o(-237, "LvX9", -150)];
  }
  [St(1022, 996, 971, 1018, "@YA1") + Ke(1122, 1132, 1131, 1133, "1HWl") + Le("h^V$", -36, -44)]() {
    var r;
    if (!this[i(459, 523, 529, 587, "t^N0") + "se"]) {
      if (e(1276, "!]PU", 1313, 1218) === i(577, 704, 625, 640, "Vg1z")) return;
      _0x51d0f7[i(693, 744, 697, 700, "czVU")](e(1113, "Vg1z", 1135, 1099) + n(-636, "MSy^", -681, -739) + o("VZO8", 11, 91, 39, 108) + t(97, 118, "82eC") + i(594, 689, 627, 653, "Zy3b")), this[n(-622, "@&eg", -605, -677) + "se"] = void (-7062 + 6 * 1177);
      return;
    }
    function o(a, s, c, u, g) {
      return n0(g - -662, s - 53, c - 326, a);
    }
    function t(a, s, c, u, g) {
      return Ke(a - 159, s - 202, c - 226, a - -1116, c);
    }
    function e(a, s, c, u, g) {
      return Kt(a - 253, s - 297, c - 155, s, u - 266);
    }
    function n(a, s, c, u, g) {
      return St(a - 56, s - 326, a - -1491, u - 325, s);
    }
    function i(a, s, c, u, g) {
      return Kt(a - 341, s - 185, c - 359, g, c - -333);
    }
    try {
      if (n(-589, "VZO8", -482, -615, -501) === e(1067, "oWa(", 1099, 1118, 1189)) {
        _0x21a5bc instanceof _0x22f8e4 && _0x51489e[t(62, 32, "Zy3b", 41, 84) + n(-651, "HiLE", -757, -679, -663)](_0x3a24a0);
        return;
      } else {
        const a = JSON[o("RdeB", 10, -71, -1, 11)](this[i(635, 645, 577, 514, "VA6k") + "se"]);
        return (r = a == null ? void 0 : a[n(-615, "[o]o", -576, -622, -639) + t(32, 16, "VZO8", 51, 89)]) == null ? void 0 : r[e(1166, "K2y(", 1156, 1206, 1165) + i(593, 533, 636, 714, "V0(3")];
      }
    } catch (a) {
      if (n(-570, "eHRw", -642, -621) === o("998v", 146, 166, 122, 121)) {
        _0x177525 instanceof _0x192de9 ? _0x3c165e[i(508, 630, 615, 704, "!SqO")]() : _0x112cdb instanceof _0x3d54b1 && _0x510a69[o("998v", -127, 17, -129, -23)](_0x3d8ad2);
        const s = {};
        s[e(1351, "Zy3b", 1275, 1253) + o("1HWl", 14, -107, -86, -31)] = !1, s[n(-611, "Y*nr", -699, -647) + "s"] = [], s[o("v3Jp", -18, -20, 32, -8) + e(1289, "@&eg", 1119, 1227)] = [], s[o("uH$m", -57, 110, 14, 41) + o("Vg1z", 109, 196, 86, 95) + i(642, 630, 557, 658, "$gzZ")] = void 0, s[o("hBNw", 7, 197, 147, 103)] = function() {
        }, this[e(1188, "s89Y", 1213, 1252) + t(82, 104, "Lg2#")] = new _0x53a256(s);
      } else {
        if (a instanceof Error) {
          if (o("uH$m", 87, 70, -40, -18) === e(1205, "MKd)", 1310, 1294)) return this[o("!SqO", 18, -84, -10, 22) + t(50, 86, "VA6k")];
          ie[o("oWa(", 89, 150, 170, 106) + e(1132, "998v", 1130, 1126)](a);
        }
        return;
      }
    }
  }
}
const eo = class eo extends Sl {
  static getInstance() {
    if (!this._instance) {
      const o = new vl();
      this._instance = new eo(o);
    }
    return this._instance;
  }
};
M(eo, "_instance");
let vi = eo;
const pc = (x, o) => {
  const t = At(o);
  be(() => {
    t.current = o;
  }, [o]), be(() => {
    const e = (n) => t.current(n);
    return document.addEventListener(x, e), () => {
      document.removeEventListener(x, e);
    };
  }, [x]);
};
var wl = Symbol.for("preact-signals");
function nr() {
  if (T0 > -15 * 487 + 6930 + 8 * 47)
    T0--;
  else {
    for (var x, o = !1; void (1854 + 1 * 2373 + -4227 * 1) !== bn; ) {
      var t = bn;
      for (bn = void (-1814 + 1814 * 1), Si++; void (3124 * 2 + 2330 + 8578 * -1) !== t; ) {
        var e = t.o;
        if (t.o = void (8627 + -467 * -8 + -12363), t.f &= -(-1 * -1317 + 327 * 5 + -2949), !(1 * 7266 + 1 * -858 + -6400 & t.f) && Ac(t)) try {
          t.c();
        } catch (n) {
          !o && (x = n, o = !(7 * -669 + 2284 + 2399));
        }
        t = e;
      }
    }
    if (Si = -10387 + 1 * 10387, T0--, o) throw x;
  }
}
var te = void (-16564 + 404 * 41), bn = void (-15 * -78 + -5843 + 4673), T0 = -3 * -1141 + -1842 * -3 + 157 * -57, Si = -648 + -783 * 7 + 27 * 227, Yx = 0;
function mc(x) {
  if (void (383 * -6 + -53 * 139 + 5 * 1933) !== te) {
    var o = x.n;
    if (void (9682 + -81 * -89 + -16891) === o || o.t !== te)
      return o = { i: 0, S: x, p: te.s, n: void (163 * -37 + -1650 + 7681 * 1), t: te, e: void (254 * 29 + -5475 + 61 * -31), x: void (1 * 939 + 9066 + -10005), r: o }, te.s !== void 0 && (te.s.n = o), te.s = o, x.n = o, -4255 + 5938 * -1 + 25 * 409 & te.f && x.S(o), o;
    if (-(-1613 * -1 + -2 * 758 + 48 * -2) === o.i)
      return o.i = 1 * -5797 + -10 * 863 + -1 * -14427, void (1 * 4289 + 3527 * -1 + -762) !== o.n && (o.n.p = o.p, void (2551 * -1 + 6982 + -4431) !== o.p && (o.p.n = o.n), o.p = te.s, o.n = void (251 * 2 + 8431 * -1 + 7929), te.s.n = o, te.s = o), o;
  }
}
function Ge(x) {
  this.v = x, this.i = -6720 + -635 * -10 + -10 * -37, this.n = void (-211 * -43 + 8406 + -17479), this.t = void 0;
}
Ge.prototype.brand = wl, Ge.prototype.h = function() {
  return !(-5 * -655 + -5 * 1201 + 2730);
}, Ge.prototype.S = function(x) {
  this.t !== x && void (-1823 * -3 + -382 * 22 + -2935 * -1) === x.e && (x.x = this.t, this.t !== void 0 && (this.t.e = x), this.t = x);
}, Ge.prototype.U = function(x) {
  if (void (-57 * 29 + -5096 + -1 * -6749) !== this.t) {
    var o = x.e, t = x.x;
    void (-1609 + -1 * -1609) !== o && (o.x = t, x.e = void (-547 * -7 + -1 * 3893 + 64)), void (62 * -85 + -1074 + -26 * -244) !== t && (t.e = o, x.x = void (-4430 + 8926 * 1 + 2248 * -2)), x === this.t && (this.t = t);
  }
}, Ge.prototype.subscribe = function(x) {
  var o = this;
  return or(function() {
    var t = o.value, e = te;
    te = void (7329 + -1047 * 7);
    try {
      x(t);
    } finally {
      te = e;
    }
  });
}, Ge.prototype.valueOf = function() {
  return this.value;
}, Ge.prototype.toString = function() {
  return this.value + "";
}, Ge.prototype.toJSON = function() {
  return this.value;
}, Ge.prototype.peek = function() {
  var x = te;
  te = void (4237 + -3107 * 1 + -113 * 10);
  try {
    return this.value;
  } finally {
    te = x;
  }
}, Object.defineProperty(Ge.prototype, "value", { get: function() {
  var x = mc(this);
  return x !== void 0 && (x.i = this.i), this.v;
}, set: function(x) {
  if (x !== this.v) {
    if (Si > -1 * -1652 + -1 * 6953 + 5401) throw new Error("Cycle detected");
    this.v = x, this.i++, Yx++, T0++;
    try {
      for (var o = this.t; void (-226 * 8 + -3039 * 1 + 131 * 37) !== o; o = o.x) o.t.N();
    } finally {
      nr();
    }
  }
} });
function bc(x) {
  return new Ge(x);
}
function Ac(x) {
  for (var o = x.s; void (-5 * -197 + -6760 + 5 * 1155) !== o; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !0;
  return !(-5717 * -1 + -4349 + 1367 * -1);
}
function yc(x) {
  for (var o = x.s; void (4198 * 2 + 9216 + -17612) !== o; o = o.n) {
    var t = o.S.n;
    if (t !== void 0 && (o.r = t), o.S.n = o, o.i = -(-5106 + 4 * -1226 + -3 * -3337), void (-22 + 773 * -7 + 5433) === o.n) {
      x.s = o;
      break;
    }
  }
}
function Wc(x) {
  for (var o = x.s, t = void (-326 * -2 + -447 * -19 + 295 * -31); void (1161 + -27 * 43) !== o; ) {
    var e = o.p;
    -(-1725 + -3331 * 1 + 5057) === o.i ? (o.S.U(o), void (-2107 * -4 + 6 * -727 + -4066 * 1) !== e && (e.n = o.n), void (-31 * 145 + -150 * -1 + 4345) !== o.n && (o.n.p = e)) : t = o, o.S.n = o.r, void (2014 + -339 * -15 + -7099) !== o.r && (o.r = void (-238 + -173 * 3 + -757 * -1)), o = e;
  }
  x.s = t;
}
function K0(x) {
  Ge.call(this, void (-7356 + 2 * -1375 + 10106)), this.x = x, this.s = void (2050 + 3098 * 1 + -429 * 12), this.g = Yx - (-1 * 6287 + -2879 + 9167), this.f = 4;
}
(K0.prototype = new Ge()).h = function() {
  if (this.f &= -(2 * 4826 + 7632 + -17281), -15119 + -189 * -80 & this.f) return !(6245 + -2802 * -2 + 2962 * -4);
  if (-4421 + 1 * 5857 + 36 * -39 == (1 * 5677 + 4519 * -1 + 102 * -11 & this.f)) return !(911 * -9 + 1 * 8252 + -53);
  if (this.f &= -5, this.g === Yx) return !(1126 * 8 + 7280 + -16288);
  if (this.g = Yx, this.f |= 1653 * -2 + -8695 * -1 + 449 * -12, this.i > -761 + -11 * 319 + 4270 && !Ac(this)) return this.f &= -(-14392 + 4798 * 3), !(-2 * 71 + 575 * -2 + 1292);
  var x = te;
  try {
    yc(this), te = this;
    var o = this.x();
    (16 & this.f || this.v !== o || 1359 + -383 * 10 + 1 * 2471 === this.i) && (this.v = o, this.f &= -17, this.i++);
  } catch (t) {
    this.v = t, this.f |= -382 * 24 + 85 * 113 + -421 * 1, this.i++;
  }
  return te = x, Wc(this), this.f &= -(2 * 4446 + 2339 + 197 * -57), !(224 * -6 + 7773 * -1 + 9117);
}, K0.prototype.S = function(x) {
  if (this.t === void 0) {
    this.f |= 1178 * 3 + 1 * 8308 + -2 * 5903;
    for (var o = this.s; void (1352 * -1 + 7 * -1133 + 9283) !== o; o = o.n) o.S.S(o);
  }
  Ge.prototype.S.call(this, x);
}, K0.prototype.U = function(x) {
  if (void (-7019 + 7019 * 1) !== this.t && (Ge.prototype.U.call(this, x), void (2023 + 17 * -119) === this.t)) {
    this.f &= -(-2 * -685 + -9579 + 634 * 13);
    for (var o = this.s; void (6952 + 1 * -5354 + -1598) !== o; o = o.n) o.S.U(o);
  }
}, K0.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= -23 * -235 + -8183 + 2784;
    for (var x = this.t; void (-474 + -2 * -237) !== x; x = x.x) x.t.N();
  }
}, Object.defineProperty(K0.prototype, "value", { get: function() {
  if (2645 + -1029 * 5 + -2501 * -1 & this.f) throw new Error("Cycle detected");
  var x = mc(this);
  if (this.h(), void (5245 + -7223 * -1 + -4 * 3117) !== x && (x.i = this.i), 8438 + 376 * -23 + 1 * 226 & this.f) throw this.v;
  return this.v;
} });
function Bl(x) {
  return new K0(x);
}
function vc(x) {
  var o = x.u;
  if (x.u = void (1 * 6749 + 7940 + 37 * -397), typeof o == "function") {
    T0++;
    var t = te;
    te = void (7 * 1193 + 9425 + -17776);
    try {
      o();
    } catch (e) {
      throw x.f &= -(5758 + -3 * 2437 + -1555 * -1), x.f |= 8961 + 8953 * -1, xr(x), e;
    } finally {
      te = t, nr();
    }
  }
}
function xr(x) {
  for (var o = x.s; void (11494 + -1642 * 7) !== o; o = o.n) o.S.U(o);
  x.x = void (78 * -33 + 3675 + 3 * -367), x.s = void (3443 + 3443 * -1), vc(x);
}
function Gl(x) {
  if (te !== this) throw new Error("Out-of-order effect");
  Wc(this), te = x, this.f &= -(3 * 1843 + 2 * -2351 + -33 * 25), 8 & this.f && xr(this), nr();
}
function fn(x) {
  this.x = x, this.u = void (1 * 9949 + 14 + -41 * 243), this.s = void 0, this.o = void (859 * -5 + -2426 + 47 * 143), this.f = 6302 + 9332 * -1 + 3062;
}
fn.prototype.c = function() {
  var x = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    x();
  }
}, fn.prototype.S = function() {
  if (193 * -28 + -5 * -573 + -4 * -635 & this.f) throw new Error("Cycle detected");
  this.f |= -1 * -8051 + 622 + -1084 * 8, this.f &= -(7 * -1337 + 3960 + -16 * -338), vc(this), yc(this), T0++;
  var x = te;
  return te = this, Gl.bind(this, x);
}, fn.prototype.N = function() {
  !(-9991 + -3 * -3331 & this.f) && (this.f |= -8171 + 2 * -4633 + 3 * 5813, this.o = bn, bn = this);
}, fn.prototype.d = function() {
  this.f |= 3067 * -3 + 571 + 4319 * 2, 1 & this.f || xr(this);
};
function or(x) {
  var o = new fn(x);
  try {
    o.c();
  } catch (t) {
    throw o.d(), t;
  }
  return o.d.bind(o);
}
var Do;
function V0(x, o) {
  Y[x] = o.bind(null, Y[x] || function() {
  });
}
function cx(x) {
  Do && Do(), Do = x && x.S();
}
function Sc(x) {
  var o = this, t = x.data, e = U0(t);
  e.value = t;
  var n = xt(function() {
    for (var i = o.__v; i = i.__; ) if (i.__c) {
      i.__c.__$f |= 4173 * -1 + -1746 + -1 * -5923;
      break;
    }
    return o.__$u.c = function() {
      var r;
      !is(n.peek()) && 985 + -8581 * -1 + -73 * 131 === ((r = o.base) == null ? void (759 * -5 + -8068 + 11863) : r.nodeType) ? o.base.data = n.peek() : (o.__$f |= 1, o.setState({}));
    }, Bl(function() {
      var r = e.value.value;
      return -5342 * 1 + 5576 + -234 === r ? -144 * -58 + 9 * 491 + -12771 : !(1031 * -5 + 7946 * -1 + 13101) === r ? "" : r || "";
    });
  }, []);
  return n.value;
}
Sc.displayName = "_st";
var wi = {};
wi.configurable = !(1 * 611 + -5393 + 4782), wi.value = void (-4219 + -1 * -4219);
var Bi = {};
Bi.configurable = !(-193 * -21 + 5661 + -3238 * 3), Bi.value = Sc;
var Gi = {};
Gi.configurable = !(-408 * -19 + -1 * 5397 + -785 * 3), Gi.get = function() {
  var x = {};
  return x.data = this, x;
};
var ki = {};
ki.configurable = !(2 * -3191 + 6703 + -107 * 3), ki.value = 1;
var sn = {};
sn.constructor = wi, sn.type = Bi, sn.props = Gi, sn.__b = ki, Object.defineProperties(Ge.prototype, sn), V0("__b", function(x, o) {
  if (typeof o.type == "string") {
    var t, e = o.props;
    for (var n in e) if (n !== "children") {
      var i = e[n];
      i instanceof Ge && (t || (o.__np = t = {}), t[n] = i, e[n] = i.peek());
    }
  }
  x(o);
}), V0("__r", function(x, o) {
  cx();
  var t, e = o.__c;
  e && (e.__$f &= -(-5630 + 16 * 352), void (-7628 + -7628 * -1) === (t = e.__$u) && (e.__$u = t = function(n) {
    var i;
    return or(function() {
      i = this;
    }), i.c = function() {
      e.__$f |= 1, e.setState({});
    }, i;
  }())), cx(t), x(o);
}), V0("__e", function(x, o, t, e) {
  cx(), x(o, t, e);
}), V0("diffed", function(x, o) {
  cx();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, n = o.props;
    if (e) {
      var i = t.U;
      if (i) for (var r in i) {
        var a = i[r];
        void (-2935 + 359 * 17 + -12 * 264) !== a && !(r in e) && (a.d(), i[r] = void (4 * -1078 + 7164 + -2852));
      }
      else t.U = i = {};
      for (var s in e) {
        var c = i[s], u = e[s];
        void (-4786 * 1 + 4 * -2421 + 14470) === c ? (c = kl(t, s, u, n), i[s] = c) : c.o(u, n);
      }
    }
  }
  x(o);
});
function kl(x, o, t, e) {
  var n = o in x && x.ownerSVGElement === void 0, i = bc(t);
  return { o: function(r, a) {
    i.value = r, e = a;
  }, d: or(function() {
    var r = i.value.value;
    e[o] !== r && (e[o] = r, n ? x[o] = r : r ? x.setAttribute(o, r) : x.removeAttribute(o));
  }) };
}
V0("unmount", function(x, o) {
  if (typeof o.type == "string") {
    var t = o.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (-4262 + 1654 * -5 + 6266 * 2);
        for (var n in e) {
          var i = e[n];
          i && i.d();
        }
      }
    }
  } else {
    var r = o.__c;
    if (r) {
      var a = r.__$u;
      a && (r.__$u = void (1570 * 3 + 2328 + -7038), a.d());
    }
  }
  x(o);
}), V0("__h", function(x, o, t, e) {
  (e < 2737 + 2 * 3367 + 4 * -2367 || 2 * -1291 + -1347 * 1 + -358 * -11 === e) && (o.__$f |= -4558 + 197 * 41 + -3517), x(o, t, e);
}), dt.prototype.shouldComponentUpdate = function(x, o) {
  var t = this.__$u;
  if (!(t && void (5798 + -1 * -1623 + -41 * 181) !== t.s || -654 * -1 + -8128 + -2 * -3739 & this.__$f)) return !(-17 * 367 + 3833 * 1 + 2406);
  if (3 & this.__$f) return !(3992 * 2 + 2098 + -2 * 5041);
  for (var e in o) return !(7119 + -9327 * -1 + -16446);
  for (var n in x) if (n !== "__source" && x[n] !== this.props[n]) return !(-1 * 5839 + -67 * -53 + -11 * -208);
  for (var i in this.props) if (!(i in x)) return !(-6209 + -883 * -1 + 5326 * 1);
  return !(-353 * -7 + -5801 + -3331 * -1);
};
function U0(x) {
  return xt(function() {
    return bc(x);
  }, []);
}
const Hl = (x) => {
  const o = U0(!1);
  return pc(x, (e) => {
    e.detail && (o.value = e.detail.animationEnd);
  }), o;
};
function Ol(x, o) {
  if (!x) return o;
  const { detectionRecord: t, hashedDetectedImages: e } = x;
  o.hashedDetectedImages && (e == null || e.push(...o.hashedDetectedImages)), o.detectionRecord && (t == null || t.push(...o.detectionRecord));
  const n = { ...x };
  return n.hashedDetectedImages = e, n.detectionRecord = t, n;
}
const Zl = (x, o, t = ul) => new Promise((e) => {
  x.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, o);
}), wc = async (x) => Zl(x, 2 * -911 + 2380 + -468), Kl = (x, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(x, o.shiftX, o.shiftY, o.width, o.height, -2 * -3974 + 1 * -5682 + -2266, 2638 + 16 * -473 + 34 * 145, t.width, t.height), t;
}, Rl = (x) => {
  const o = x.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(9062 + -1 * 3594 + 5468 * -1, 7969 * 1 + -6410 + 1 * -1559, x.width, x.height);
  return t;
}, Bc = (x, o, t, e) => {
  const n = x.getContext("2d");
  n && (n.beginPath(), e ? (n.fillStyle = t, n.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (n.strokeStyle = t, n.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), n.stroke());
}, Fo = (x, o, t) => {
  const { height: e, shiftX: n, shiftY: i, width: r } = o, a = {};
  a.x = n, a.y = i;
  const s = {};
  s.topLeft = a, s.width = r, s.height = e, s.color = t, Bc(x, s, t);
}, An = (x, o, t, e = 4013 + -223 * 26 + 1785) => {
  const n = x.getContext("2d");
  n && (n.fillStyle = t, n.fillRect(o.x + e, o.y + e, -1 * 4145 + -3785 + -7937 * -1, -1 * -1730 + -21 * 369 + -131 * -46), n.beginPath());
}, Pl = (x, o) => {
  const t = x.getContext("2d");
  t && t.drawImage(o, -409 * 17 + 1568 + -359 * -15, 3043 + 1319 * 1 + -4362);
}, Gc = Dn(null), kc = () => {
  const x = m0(Gc);
  if (!x)
    throw new Error("Missing provider for CameraOptionsContext");
  return x;
}, Vl = (x) => {
  var s, c, u;
  const { cameraFacing: o, licensePath: t, onError: e, onPhotoTaken: n, sessionToken: i, thresholds: r, wasmDirectoryPath: a } = x;
  return {
    onPhotoTaken: n,
    onError: e,
    cameraFacing: o ?? "user",
    wasmDirectoryPath: a,
    licensePath: t,
    sessionToken: i,
    thresholds: {
      faceConfidence: (r == null ? void 0 : r.faceConfidence) ?? qu,
      minFaceSizeRatio: (r == null ? void 0 : r.minFaceSizeRatio) ?? $u,
      maxFaceSizeRatio: (r == null ? void 0 : r.maxFaceSizeRatio) ?? el,
      sharpnessThreshold: (r == null ? void 0 : r.sharpnessThreshold) ?? xl,
      brightnessLowThreshold: (r == null ? void 0 : r.brightnessLowThreshold) ?? ol,
      brightnessHighThreshold: (r == null ? void 0 : r.brightnessHighThreshold) ?? il,
      outOfBoundsThreshold: (r == null ? void 0 : r.outOfBoundsThreshold) ?? tl,
      devicePitchAngleThreshold: (r == null ? void 0 : r.devicePitchAngleThreshold) ?? rl,
      mouth: {
        confidence: ((s = r == null ? void 0 : r.mouth) == null ? void 0 : s.confidence) ?? nl,
        status: {
          min: ((c = r == null ? void 0 : r.mouth) == null ? void 0 : c.status.min) ?? Sa.min,
          max: ((u = r == null ? void 0 : r.mouth) == null ? void 0 : u.status.max) ?? Sa.max
        }
      },
      leftEye: (r == null ? void 0 : r.leftEye) ?? {
        confidence: wa
      },
      rightEye: (r == null ? void 0 : r.rightEye) ?? {
        confidence: wa
      }
    }
  };
}, Tl = ({ cameraOptions: x, children: o }) => {
  const t = xt(() => ({
    faceCameraOptions: Vl(x)
  }), [x]);
  return /* @__PURE__ */ O(Gc.Provider, { value: t, children: o });
}, El = -5779 + 1 * 5779 + 0.75, Nl = -4432 + 8003 * 1 + -3569 * 1, Ll = 8221 + -13 * 156 + -5593, Dl = 13 * -439 + -10 * -912 + -3413, Hc = (x, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(x, t));
}, to = class to {
  constructor() {
    M(this, "lastDetails", {});
    M(this, "delayedTime", -13454 + -1922 * -7);
  }
  static getInstance() {
    return !this._instance && (this._instance = new to()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 2336 + -16 * 146;
  }
  isDetailChanged(o, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(o, t) {
    this.isDetailChanged(o, t) && Hc(o, t);
  }
  dispatchDelayedCustomEventOnChange(o, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(o, t), this.delayedTime = n);
  }
};
M(to, "_instance");
let vn = to;
const Fn = vn.getInstance(), Ka = (x, o, t = Ll) => {
  const e = {};
  e.instructionCode = o;
  const n = e;
  Fn.dispatchDelayedCustomEventOnChange(x, n, t);
}, Fl = (x, o) => {
  Fn.dispatchCustomEventOnChange(x, o);
}, Yl = (x, o) => {
  const t = {};
  t.size = o;
  const e = t;
  Fn.dispatchCustomEventOnChange(x, e);
}, Xl = (x, o, t) => {
  const e = o.confidence < t ? void 0 : o, n = {};
  n.detectedObject = e;
  const i = n;
  Fn.dispatchCustomEventOnChange(x, i);
}, Ml = (x, o, t) => {
  const e = {};
  e.image = t, e.data = {}, e.data.detection = o, e.data.imageResolution = {}, e.data.imageResolution.width = t.width, e.data.imageResolution.height = t.height;
  const n = e;
  Fn.dispatchCustomEventOnChange(x, n);
}, Hi = (x, o) => {
  Hc(x, o);
}, jl = () => "prod".toLowerCase() === "dev", Jl = (x, o) => {
  if (jl()) {
    const t = {};
    t.candidateSelectionImages = o;
    const e = t;
    vn.getInstance().dispatchCustomEventOnChange(x, e);
  }
}, _l = (x, o) => {
  const { cameraResolution: t, shouldMirror: e } = o;
  be(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, Fl(x, n);
  }, [t, e, x]);
}, Oc = (x) => x.length < -45 * -19 + 3032 + -29 * 134 ? 301 + 7 * -43 : x.reduce((t, e) => t + e, -1 * 1128 + -1 * -8696 + -7568) / x.length, Yn = (x) => Number.parseFloat(x.toFixed(-8699 * -1 + -198 + -8498)), Ul = (x) => {
  const o = x.getContext("2d");
  o && o.clearRect(0, 0, o.canvas.width, o.canvas.height);
}, lo = (x, o) => Math.min(x, o), Ql = (x, o) => {
  const t = lo(o.width, o.height);
  return Yn(x * t);
}, Zc = ({ height: x, width: o }) => {
  const t = lo(o, x), e = t / (-9360 + -9 * 729 + -3981 * -4) * (-6005 + 833 * -10 + 14339);
  if (o > x) {
    const i = {};
    return i.width = e, i.height = t, i;
  }
  const n = {};
  return n.width = t, n.height = e, n;
}, Kc = ({ height: x, width: o }) => {
  const t = lo(o, x) * El, e = (o - t) / (-4 * 1709 + 9979 * 1 + 1047 * -3), n = (x - t) / (2017 * -3 + -506 * -1 + 5547), i = {};
  return i.shiftX = e, i.shiftY = n, i.width = t, i.height = t, i;
}, zl = (x) => {
  const { height: o, shiftX: t, shiftY: e, width: n } = Kc(x), i = {};
  return i.shiftX = t / x.width, i.shiftY = e / x.height, i.width = n / x.width, i.height = o / x.height, i;
}, ql = (x, o) => Ql(x, o) * Nl, $l = "@innovatrics/dot-common-auto-capture", e1 = "6.1.5", t1 = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, n1 = {
  "@dot/proto-files": "2.0.4",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, x1 = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.1"
}, o1 = {
  name: $l,
  private: !0,
  version: e1,
  scripts: t1,
  dependencies: n1,
  devDependencies: x1
}, Rc = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Ra = () => {
  const x = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return x && o;
}, i1 = () => {
  const x = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return x && o ? !1 : o;
}, Oi = (x) => new Promise((o) => {
  setTimeout(o, x);
}), R0 = (x) => JSON.parse(JSON.stringify(x, (o, t) => typeof t == "number" ? Yn(t) : t)), Pc = () => o1.version, Vc = (x) => new URL(x).hostname.replace("www.", ""), r1 = () => Vc(window.location.href) === "localhost", gx = (x) => Object.entries(x).map(([o, t]) => encodeURIComponent(o) + "=" + encodeURIComponent(t)).join("&"), a1 = (x, o) => {
  const t = x && performance.now() - x;
  return o >= Vo.minFrames ? t > Vo.minDuration : t > Vo.maxDuration;
}, s1 = (x, o) => JSON.stringify(x) === JSON.stringify(o) ? o : x, Pa = (x, o) => Math.abs(x - o);
function c1(x, o) {
  let t;
  return (...e) => {
    const n = () => {
      clearTimeout(t), t = void 0, x(...e);
    };
    t === void (5666 * 1 + 2884 + 95 * -90) && (t = setTimeout(n, o));
  };
}
const g1 = (x) => x === xc.CONTROL ? !Rc() : !0, d1 = (x, o) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: i } = tn(), [r, a] = $e(), s = xt(() => {
    const u = i && o && o.isStreaming && o.getCameraSettings().facingMode;
    return u ? r ?? u === "user" : r ?? g1(x);
  }, [o, r, x, i]);
  be(() => {
    const u = () => {
      t !== Bt.LOADING && e(Bt.RUNNING);
    }, g = () => {
      a(r === void 0 ? !s : !r);
    }, C = async () => {
      if (o) {
        e(Bt.LOADING);
        try {
          await o.switchCamera(), e(Bt.RUNNING);
        } catch (h) {
          if (h instanceof Error) {
            n(ie.fromCameraError(h));
            return;
          }
        }
        a(void 0);
      }
    }, l = (h) => {
      var p;
      switch ((p = h.detail) == null ? void 0 : p["instruction"]) {
        case Ax.CONTINUE_DETECTION:
          u();
          break;
        case Ax.TOGGLE_MIRROR:
          g();
          break;
        case Ax.SWITCH_CAMERA:
          C();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(x, l), () => {
      document.removeEventListener(x, l);
    };
  }, [t, o, n, r, e, s, x]);
  const c = {};
  return c.shouldMirror = s, c;
};
class Tc {
  constructor() {
    M(this, "canvasElement");
    M(this, "context");
    this.canvasElement = document.createElement("canvas"), this.context = this.canvasElement.getContext("2d");
  }
  cloneMutable(o) {
    this.canvasElement.width = o.width, this.canvasElement.height = o.height, Pl(this.canvasElement, o);
  }
}
async function Ec() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Yo() {
  return (await Ec()).filter((o) => o.kind === "videoinput");
}
function Xo(x) {
  x.getTracks().forEach((t) => t.stop());
}
function Va(x) {
  return x.getVideoTracks()[4320 + -7134 * 1 + 6 * 469];
}
const wx = {};
wx.width = 1920, wx.height = 1080, wx.facingMode = ic.FRONT;
const u1 = wx;
var ht;
class Nc {
  constructor({ defaultVideoConstrains: o = u1, minCameraShorterSide: t = sl } = {}) {
    M(this, "options");
    M(this, "availableCameraProperties", []);
    ce(this, ht, null);
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return j(this, ht);
  }
  get videoTrack() {
    return j(this, ht) ? Va(j(this, ht)) : void (31 * -116 + 3 * -2446 + 10934);
  }
  get isCameraActive() {
    var o;
    return !!((o = j(this, ht)) != null && o.active);
  }
  static async requestPermission() {
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    Xo(t);
  }
  async open(o = {}) {
    Ra() && await Oi(-2956 + 262 * 13), ae(this, ht, await navigator.mediaDevices.getUserMedia(o)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const o = await Yo();
    if (o.length <= 2690 + 1287 * -2 + -23 * 5) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = o.findIndex((a) => a.deviceId === e.deviceId), i = o[n + 1] ?? o[557 + 1 * -557], r = this.getConstraints(t, i);
    await this.open(r);
  }
  close() {
    j(this, ht) && (Xo(j(this, ht)), ae(this, ht, null));
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
    if (!o.width) throw new ie("Video width is undefined");
    if (!o.height) throw new ie("Video height is undefined");
    const t = {};
    return t.width = o.width, t.height = o.height, t;
  }
  async getDeviceName() {
    const o = this.getSettings(), t = await Ec(), e = t.find((n) => n.deviceId === o.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(o) {
    if (o !== ic.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return Rc() ? (await Yo()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (5355 + 4 * 1963 + -13207);
  }
  async collectAvailableCamerasInfo() {
    const o = await Yo();
    for (const t of o) {
      Ra() && await Oi(-1303 * 6 + 5504 + 2764);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const i = await navigator.mediaDevices.getUserMedia(n), r = Va(i);
        if (!r) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = r.getSettings(), s = { ...a };
        s.deviceName = r.label;
        const c = {};
        c.cameraProperties = s;
        const u = c;
        this.availableCameraProperties.push(u), Xo(i);
      } catch (e) {
        e instanceof Error && ie.logError(e);
      }
    }
  }
  getConstraints(o, t) {
    const e = { ...this.options.defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t.deviceId } : void (-201 * 42 + -1289 * -1 + 7153);
    const n = {};
    return n.video = e, n.audio = !1, n;
  }
  checkVideoTrackSettings() {
    var e;
    const o = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(o != null && o.height) || !(o != null && o.width))
      throw this.close(), new ie("Could not init camera settings");
    if (typeof this.options.minCameraShorterSide != "number") return;
    if (Math.min(o == null ? void 0 : o.width, o == null ? void 0 : o.height) < this.options.minCameraShorterSide)
      throw this.close(), new ie("Could not init video because of low camera resolution: " + o.width + "x" + o.height + ".");
  }
}
ht = new WeakMap();
class l1 {
  constructor(o, t) {
    M(this, "canvas");
    this.videoHandler = o, this.cameraHandler = t, this.canvas = new Tc();
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(o = {}) {
    await Nc.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(o.facingMode), e = this.cameraHandler.getConstraints(o, t);
    await this.cameraHandler.open(e), i1() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var t;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const o = (t = this.cameraHandler.videoTrack) == null ? void 0 : t.getSettings();
    if (!(o != null && o.width)) throw new ie("Cant take photo - video width is undefined");
    if (!(o != null && o.height)) throw new ie("Cant take photo - video height is undefined");
    if (!this.canvas.context) throw new ie("Cant take photo - cant create context");
    return this.canvas.canvasElement.width = o.width, this.canvas.canvasElement.height = o.height, this.canvas.context.drawImage(this.videoHandler.videoElement, 1 * 6654 + -2 * -141 + -6936, -147 + -701 * -5 + 3358 * -1), { image: this.canvas.canvasElement, timestamp: Date.now() };
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
var Pt;
class I1 {
  constructor(o) {
    ce(this, Pt);
    ae(this, Pt, o);
  }
  get videoElement() {
    return j(this, Pt);
  }
  async play(o) {
    j(this, Pt).srcObject = o, await j(this, Pt).play();
  }
  stop() {
    j(this, Pt).srcObject = null;
  }
  hasSrcObject() {
    return !!j(this, Pt).srcObject;
  }
}
Pt = new WeakMap();
function f1(x, o) {
  const t = At(), { handleError: e, setIsCameraReady: n } = tn(), [i, r] = $e(), a = Y0((c) => {
    r((u) => s1(c, u));
  }, []);
  be(() => ((async () => {
    if (!x.current) {
      e(new ie("Something went wrong during video initialization"));
      return;
    }
    const u = new I1(x.current), g = new Nc(), C = new l1(u, g);
    try {
      const l = {};
      l.facingMode = o, await C.startVideoStream(l);
    } catch (l) {
      if (l instanceof Error) {
        e(ie.fromCameraError(l));
        return;
      }
    }
    n(!0), a(C.getCameraResolution()), t.current = C;
  })(), function() {
    t.current && t.current.stopStreaming(), n(!1);
  }), [o, e, n, x, a]);
  const s = {};
  return s.cameraService = t.current, s.cameraResolution = i, s.onCameraResolutionChange = a, s;
}
function C1(x, o) {
  be(() => {
    function t() {
      x.current && Yl(o, x.current.getBoundingClientRect());
    }
    return t(), window.addEventListener("resize", t), () => {
      window.removeEventListener("resize", t);
    };
  }, [x, o]);
}
class ir extends Array {
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
    this.length === this.size && this.splice(37 * -32 + 405 + 779, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-4 * 1174 + 9426 + 430 * -11);
  }
}
const h1 = (x, o) => {
  const { height: t, shiftX: e, shiftY: n, width: i } = o;
  return !(x.x < e || x.x > e + i || x.y < n || x.y > n + t);
}, p1 = (x, o) => Object.values(x).every((t) => h1(t, o));
function m1(x) {
  return Yn(Math.abs(x));
}
const b1 = () => {
  const [x, o] = $e(null), t = At(new ir(-1180 + 1781 * -1 + -2966 * -1));
  function e(i) {
    const { z: r } = i.accelerationIncludingGravity || {};
    if (!r) return;
    t.current.pushFixed(m1(r));
    const a = Yn(Oc(t.current)), s = {};
    s.z = a, o(s);
  }
  be(() => (window.addEventListener("devicemotion", c1(e, Il), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const n = {};
  return n.acceleration = x, n;
};
function A1({ analytics: x, cameraFacing: o, controller: t, createProtoMessage: e, onPhotoTaken: n, sessionToken: i }) {
  const r = At(null), { sunfish: a } = er(), { appState: s, handleAppStateChange: c, handleError: u } = tn(), { cameraResolution: g, cameraService: C, onCameraResolutionChange: l } = f1(r, o), h = U0(void 0);
  be(() => {
    C != null && C["isStreaming"] && (t != null && t["isDetectorInitialized"]) && a && c(Bt.RUNNING);
  }, [C == null ? void 0 : C["isStreaming"], t == null ? void 0 : t["isDetectorInitialized"], c, a]), be(() => {
    if (s !== Bt.RUNNING) return;
    if (!C || !t) throw new ie("Cannot start detection");
    let A = 2496 + 40 * -201 + 5544, d = !1, W = 3240 + 101 * 46 + -7886;
    const Z = new ir(-5 * -277 + 2321 + -3676);
    t.clearImagesForDuplicateDetection();
    async function D({ cameraService: k, canvasImage: _, controller: fe, detection: Q, detectionRecord: Ce, onPhotoTaken: he }) {
      const Oe = {};
      Oe.width = _.width, Oe.height = _.height;
      const It = Oe, re = await wc(_), Ze = await k.getCameraProperties(), Me = { ...Ze, detectionRecord: Ce, hashedDetectedImagesWithTimestamp: fe.getImagesForDuplicateDetection() }, it = {};
      it.sessionToken = i, it.web = Me;
      const je = it, Ae = await e(re, je), Te = {};
      Te.detection = Q, Te.imageResolution = It;
      const Je = {};
      Je.image = re, Je.data = Te;
      const ye = Je, Ee = {};
      Ee.imageData = ye, Ee.content = Ae, Ee.webMetadata = Me, Ee.controller = fe, he(Ee);
    }
    async function E({ cameraService: k, controller: _ }) {
      const fe = Date.now();
      for (; k.isStreaming && !d; ) {
        if (a1(A, W)) {
          const { detection: je, image: Ae } = _.getBestImage() || {}, Te = _.getDetectionRecord();
          if (Ae && je) {
            const Je = Date.now(), ye = Oc(Z), Ee = {};
            Ee.width = Ae.width, Ee.height = Ae.height, x == null || x.trackCaptureProcess({ detection: je, imageResolution: Ee, deviceName: await k.getDeviceName(), averageFps: ye, captureProcessDurationInMs: Je - fe, facingMode: k.getCameraSettings().facingMode, instructionSet: await _.getInstructionSet() }), c(Bt.WAITING);
            const _e = {};
            _e.cameraService = k, _e.controller = _, _e.canvasImage = Ae, _e.detection = je, _e.detectionRecord = Te, _e.onPhotoTaken = n, await D(_e), _.restart();
          } else u(new ie("Something went wrong during capturing an image"));
          return;
        }
        const Q = k.takePhoto(), Ce = {};
        Ce.width = Q.image.width, Ce.height = Q.image.height;
        const he = Ce;
        let Oe;
        try {
          Oe = await _.processImage(Q);
        } catch (je) {
          je instanceof Error && u(ie.fromCameraError(je));
          return;
        }
        const It = Date.now(), re = It - Q.timestamp, Ze = Yn((1491 * 1 + -5 * 871 + 3864) / re);
        Z.pushFixed(Ze);
        const Me = {};
        Me.processedImage = Oe, Me.detectionTime = re, Me.fps = Ze, Me.resolution = he, Me.samVersion = _.samVersion;
        const it = Me;
        h.value = it, Oe.isInCandidateSelection && (A === 1698 + 1 * 622 + -2320 && (A = performance.now()), W++), l(he), await Oi(Math.max(Ba.max - re, Ba.min));
      }
    }
    const F = {};
    return F.controller = t, F.cameraService = C, E(F), () => {
      d = !0;
    };
  }, [x, e, s, C, t, c, u, n, l, h, i]);
  const p = {};
  return p.videoRef = r, p.cameraResolution = g, p.cameraService = C, p.detectionDetails = h, p;
}
const rr = (x) => {
  const { height: o, width: t } = Zc(x), e = (x.width - t) / (-5922 * -1 + 10 * 963 + 5 * -3110), n = (x.height - o) / (8886 + 2221 * -4), i = {};
  return i.shiftX = e, i.shiftY = n, i.width = t, i.height = o, i;
}, Lc = (x, o) => {
  const { height: t, width: e } = Zc(x), n = lo(x.width, x.height), i = e - n * o * (487 * -12 + 5218 + 628), r = t - n * o * (15 * -469 + -2 * 997 + 9031), a = (x.width - i) / 2, s = (x.height - r) / 2, c = {};
  return c.shiftX = a, c.shiftY = s, c.width = i, c.height = r, c;
}, H0 = (x, o) => {
  const { shiftX: t, shiftY: e } = rr(x), n = {};
  return n.x = o.x + t, n.y = o.y + e, n;
}, y1 = (x, o) => ({ ...o, leftEye: { ...o.leftEye, center: H0(x, o.leftEye.center) }, rightEye: { ...o.rightEye, center: H0(x, o.rightEye.center) }, mouth: { ...o.mouth, center: H0(x, o.mouth.center) }, topLeft: H0(x, o.topLeft), bottomRight: H0(x, o.bottomRight), faceCenter: H0(x, o.faceCenter) }), Dc = (x, o) => {
  const { faceCenter: t, faceSize: e } = x, n = ql(e, o), i = {};
  i.x = t.x, i.y = t.y - n;
  const r = {};
  r.x = t.x + n, r.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + n;
  const s = {};
  s.x = t.x - n, s.y = t.y;
  const c = {};
  return c.top = i, c.right = r, c.bottom = a, c.left = s, R0(c);
}, W1 = (x, o) => {
  const { bottomRight: t, faceCenter: e, topLeft: n } = o, i = {
    topLeft: n,
    width: t.x - n.x,
    height: t.y - n.y
  };
  Bc(x, i, "rgba(255, 0, 0, 0.3)", !0), An(x, e, "lime");
}, v1 = (x, o, t) => {
  const e = Dc(o, t);
  Object.values(e).map((n) => An(x, n, "orange"));
}, S1 = ({ redfin: x, cameraResolution: o, detectionDetails: t, isImageMirror: e }) => {
  const {
    faceCameraOptions: { thresholds: n }
  } = kc(), i = At(null);
  if (be(() => {
    if (!i.current)
      return;
    i.current.width = o.width, i.current.height = o.height, Ul(i.current);
    const h = rr(o), p = Lc(o, n.outOfBoundsThreshold), A = Kc(o);
    t.value && (W1(i.current, t.value.processedImage.detectedFace), v1(
      i.current,
      t.value.processedImage.detectedFace,
      o
    ), Fo(i.current, h, "lime"), Fo(i.current, p, "yellow"), Fo(i.current, A, "blue"), An(i.current, t.value.processedImage.detectedFace.leftEye.center, "cyan"), An(i.current, t.value.processedImage.detectedFace.rightEye.center, "cyan"), An(i.current, t.value.processedImage.detectedFace.mouth.center, "cyan"));
  }, [o, n, t.value]), !t.value)
    return null;
  const {
    detectionTime: r,
    fps: a,
    processedImage: { detectedFace: s, instructionCode: c, invalidValidators: u },
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
    "Detection time": r,
    FPS: a,
    Tier: x,
    Instruction: c,
    Resolution: JSON.stringify(g),
    "Component version": "6.1.5"
  };
  return C && (l["SAM version"] = C), u.length > 0 && (l["Invalid validators"] = u.join(", ")), /* @__PURE__ */ O(
    Mu,
    {
      ref: i,
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
  const [o, t] = $e(!1), e = () => t((r) => !r), n = "" + o;
  z0(() => {
    function r() {
      if (!x.current) return;
      const u = new MutationObserver(() => {
        e();
      }), g = {};
      return g.childList = !0, g.subtree = !0, g.attributes = !0, u.observe(x.current, g), u;
    }
    function a() {
      var C;
      if (!((C = x.current) != null && C["parentElement"])) return;
      const u = new MutationObserver((l) => {
        l.find((p) => {
          for (const A of p.removedNodes)
            if (A === x.current) return !0;
        }) && e(), l.forEach((p) => {
          p.addedNodes.forEach((A) => {
            var d;
            (d = A.parentElement) == null || d.removeChild(A);
          });
        });
      }), g = {};
      return g.childList = !0, u.observe(x.current.parentElement, g), u;
    }
    const s = r(), c = a();
    return () => {
      c == null || c.disconnect(), s == null || s.disconnect();
    };
  });
  const i = {};
  return i.key = n, i;
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
  const e = At(null), { key: n } = B1(e);
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
  const t = zl(o), e = `${t.height * 100}%`, n = `${t.width * 100}%`, i = `${t.shiftX * 100}%`, r = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ O(
    k1,
    {
      cutOut: x || /* @__PURE__ */ O(w1, { height: e, width: n, x: i, y: r }),
      height: o.height,
      width: o.width
    }
  );
}
const O1 = async () => WebAssembly.validate(new Uint8Array([1 * -1476 + -3 * -421 + 213, -7 * -156 + 5 * 92 + -1455, 1052 + 1 * -937, 2581 + -89 * 17 + -959, 1 * 7649 + 104 * 73 + -20 * 762, -71 + 71 * 1, -307 * -26 + 7010 * -1 + -36 * 27, -4622 + -2311 * -2, 1, 5407 + -76 * 58 + -994, 1, 4098 * -1 + 335 * -10 + 7544, -3754 * -1 + -8002 + 4248, -3063 + 6254 * -1 + 9318, 6996 + 293 * 33 + -16542, -595 + -2 * 199 + 1 * 996, -9791 + 2559 * -2 + 14911, -5 * 250 + -4978 + 6229, 3917 * -2 + 2 * 3023 + 1788, 1 * 4121 + -9 * 921 + 2089 * 2, -3251 * -2 + 1 * -4392 + -2100, 7080 + 163 * 58 + -16533, 5114 + 217 * 31 + 1 * -11833, 0, -2 * 56 + 2 * 1781 + -3385, -1 * 811 + 2 * -421 + -1653 * -1, -951 * 1 + 1 * 3628 + 2 * -1212, 92 * 98 + -2392 * 1 + 6609 * -1, 5413 + 4882 * 1 + -10042, 5003 + -545 * 9, 1 * 2231 + -1771 + -449]));
(function(x, o) {
  function t(s, c, u, g, C) {
    return ge(g - 385, c);
  }
  function e(s, c, u, g, C) {
    return ge(u - 317, C);
  }
  function n(s, c, u, g, C) {
    return ge(s - -953, c);
  }
  const i = x();
  function r(s, c, u, g, C) {
    return ge(s - -57, c);
  }
  function a(s, c, u, g, C) {
    return ge(g - 113, C);
  }
  for (; ; )
    try {
      if (parseInt(r(374, "or2O", 363, 373, 362)) / 1 + -parseInt(r(391, "me*1", 387, 402, 390)) / 2 * (parseInt(n(-528, "3SXx", -537, -547, -521)) / 3) + parseInt(t(817, "Ojt%", 827, 817, 801)) / 4 * (-parseInt(t(824, "zwjU", 809, 822, 830)) / 5) + -parseInt(t(843, "Ojt%", 854, 837, 818)) / 6 + -parseInt(r(392, "vTx@", 385, 405, 400)) / 7 + -parseInt(e(775, 777, 770, 769, "BL@B")) / 8 + parseInt(a(574, 552, 547, 559, "3SXx")) / 9 === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Xx, -683394 + -67 * -19638 + 112027);
function Xx() {
  const x = ["zJ/dNHlcGq", "WPXWWR4", "WQiRvCkTEG", "W6ZcMGRdIW", "nX4ywCkG", "BuGyyq", "kY3cPmkzW5xcNCo4cetcU8krfmk8WRu", "maGnlCod", "mwNcJftdI8klW5tcRSodn8keW7mVWQ8", "WQijwaZdGq", "WRRcLSkFW5tcJJddQZbVW4jH", "wuaBtWbeaKBdN8oaqmk4W5u", "WQi9rSkWCq", "gN8uW78IbCk+WRBdSs8oa8km", "ESoIWRNcUmkKAmksm8olW606wJi", "W6SpvGPGWOJdHCotm3hdP8oGyW", "aw0bwX3cPeKVWQtcJSoPWR/cNW", "F2OrDa", "j8kUlH4j", "W6/dMSo/", "WPhdVLTWWRi", "bg0kxb3cO005WOhcS8oqWPJcOW", "oGGkdmod", "W7ZdQI4", "WQNcLCkgzSobWR7cMG", "W63dNmoEWP3dGG", "g8kdWQeIexLXW78kW4NcRCk+", "rSo8x0ldGq", "dSoNW7ufoSkcj8ovlbZdOgtcTW", "W6ddJ8okWOG", "oMldTZdcMSorWOtdPG", "WQxdOSkFtmoMWPpcSZy", "oqKweSo0", "WRWWcmo9WPq", "ycpdHbdcJa", "mWKptmkM", "gSoWW77dMuZcICoEFvjjw8o+", "EmoHWRtcUSkUBCkEj8ohW5C3xd0", "tJPgWO13", "W73dM8ofWPNdMG", "weKutWGNC1hdOmoiFa", "W6JdMSoOW4dcTa", "zt8LrSkxDum"];
  return Xx = function() {
    return x;
  }, Xx();
}
function ge(x, o) {
  const t = Xx();
  return ge = function(e, n) {
    e = e - (9013 + 1 * -7616 + -487 * 2);
    let i = t[e];
    if (ge.aPFBEh === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = C.indexOf(d);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const u = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = r(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          h = (h + l[d] + C.charCodeAt(d % C.length)) % 256, p = l[d], l[d] = l[h], l[h] = p;
        d = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, h = (h + l[d]) % 256, p = l[d], l[d] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[d] + l[h]) % 256]);
        return A;
      };
      ge.YnARYy = u, x = arguments, ge.aPFBEh = !0;
    }
    const a = t[2803 * 1 + -9069 + -241 * -26], s = e + a, c = x[s];
    return c ? i = c : (ge.eDHPRZ === void 0 && (ge.eDHPRZ = !0), i = ge.YnARYy(i, n), x[s] = i), i;
  }, ge(x, o);
}
async function Z1() {
  const x = {};
  x[s(385, 402, 382, 360, "me*1")] = dc, x[s(407, 412, 394, 404, "[Cp9") + "h"] = 256;
  const o = await window[s(415, 436, 416, 431, "jSsY") + "o"][e(25, 44, 16, "me*1") + "e"][s(390, 399, 400, 411, "zwjU") + i(877, "UOA6", 889) + "y"](x, !0, [s(408, 383, 396, 397, "3SXx") + "pt", s(412, 414, 414, 413, "NjN@") + "pt"]), t = Uint8Array[s(391, 395, 399, 393, "w5Q6")](Array(16)[s(408, 400, 401, 387, "TFHT")](0));
  function e(c, u, g, C, l) {
    return ge(c - -409, C);
  }
  const n = window[a("3SXx", 1207, 1216, 1195, 1197) + "o"][e(36, 39, 21, "sU3t") + a("sU3t", 1175, 1177, 1193, 1195) + e(56, 35, 54, "K%@r")](t);
  function i(c, u, g, C, l) {
    return ge(g - 456, u);
  }
  const r = {};
  function a(c, u, g, C, l) {
    return ge(l - 768, c);
  }
  function s(c, u, g, C, l) {
    return ge(g - -42, l);
  }
  return r[s(399, 441, 419, 418, "W042")] = o, r.iv = n, r;
}
async function K1(x) {
  function o(C, l, h, p, A) {
    return ge(l - 782, A);
  }
  function t(C, l, h, p, A) {
    return ge(C - 929, A);
  }
  const { iv: e, key: n } = await Z1();
  function i(C, l, h, p, A) {
    return ge(l - 808, C);
  }
  function r(C, l, h, p, A) {
    return ge(h - 875, C);
  }
  const a = {};
  a[t(1353, 1361, 1369, 1363, "me*1")] = dc, a.iv = e;
  const s = await window[g(524, "me*1", 490, 507) + "o"][t(1357, 1370, 1378, 1336, "YWm1") + "e"][t(1379, 1391, 1360, 1361, "zFJ%") + "pt"](a, n, x), c = await window[o(1210, 1212, 1199, 1230, "zwjU") + "o"][i("pecS", 1255) + "e"][i("zFJ%", 1248) + o(1232, 1237, 1232, 1254, "TFHT")](r("QNsW", 1297, 1314), n), u = {};
  u[r("sU3t", 1354, 1335) + "ge"] = s, u[r("[Cp9", 1351, 1332)] = c;
  function g(C, l, h, p, A) {
    return ge(p - 44, l);
  }
  return u.iv = e, u;
}
function Ye(x, o) {
  const t = Mx();
  return Ye = function(e, n) {
    e = e - (1014 + -24 * 37 + -17);
    let i = t[e];
    if (Ye.VONErd === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = C.indexOf(d);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const u = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = r(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          h = (h + l[d] + C.charCodeAt(d % C.length)) % 256, p = l[d], l[d] = l[h], l[h] = p;
        d = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, h = (h + l[d]) % 256, p = l[d], l[d] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[d] + l[h]) % 256]);
        return A;
      };
      Ye.nBjIWt = u, x = arguments, Ye.VONErd = !0;
    }
    const a = t[65 * 44 + -7 * -350 + 5310 * -1], s = e + a, c = x[s];
    return c ? i = c : (Ye.NihovY === void 0 && (Ye.NihovY = !0), i = Ye.nBjIWt(i, n), x[s] = i), i;
  }, Ye(x, o);
}
(function(x, o) {
  function t(a, s, c, u, g) {
    return Ye(a - 348, c);
  }
  function e(a, s, c, u, g) {
    return Ye(s - -579, a);
  }
  const n = x();
  function i(a, s, c, u, g) {
    return Ye(c - -387, a);
  }
  function r(a, s, c, u, g) {
    return Ye(c - -146, a);
  }
  for (; ; )
    try {
      if (-parseInt(i("[VJ@", -276, -265, -272, -266)) / 1 * (-parseInt(i("kd&m", -273, -267, -260, -264)) / 2) + parseInt(t(472, 480, "AQ(i", 470, 479)) / 3 + parseInt(r("^OTN", -5, -19, -5, -10)) / 4 * (-parseInt(r("ff]H", -23, -34, -39, -34)) / 5) + parseInt(e("kd&m", -470, -460, -472, -478)) / 6 + -parseInt(i("kPlt", -258, -268, -259, -281)) / 7 + parseInt(e("kd&m", -448, -459, -437, -450)) / 8 * (-parseInt(i("O1Yl", -271, -276, -270, -268)) / 9) + -parseInt(t(471, 466, "wcDB", 471, 480)) / 10 === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Mx, 830994);
function Mx() {
  const x = ["W6hcU8oro8kWuKTkWOldUgJdG2m", "W6JdSCkAy8oefrG", "WRdcQSobw8k/WPy3pSkPqhS", "WP/dTSoRWOHqfmk+", "EmkuD8kPFgWTWRPpW5xcLsFdHG", "cmkPWPVcRYy5cSoDW4ddPbdcJq4", "W4VdQ8o9WO5G", "xCkkW4FdKSoh", "WP7cUmkJW5GTxmoLWOPnf8krWOXc", "tNNcPSoVhG", "WQ5gW6ldJXzDBmosW7ddRG7dTmou", "F8ksxYnIWO1bWQbDW4hdNxddIG", "WR7cLWvvna", "dHRdLmobWRJdHc/cRx7cM8o1D3u", "lmozW6BcMmk2", "WRyMWQPCEwVcMa", "W6RdMCoZWQ4M", "tSklWPJcLcXEDdldPNpcHSk9sq", "EmkuFSkLEwCPWOr0W5tcObVdNa", "WPdcUmoIWODMdSkmWQe", "yCksevfGkttcQq", "oeewW5lcON5nW71dW4SC", "i8k9jg9TW7rVtG3cUCkOfey", "DCkkWQFdOSoPWOlcPwifWOhdOs7dVG", "lwRcRCoDdW", "i3VcRmoB", "FSoYgmkdWQ/dKSkB"];
  return Mx = function() {
    return x;
  }, Mx();
}
function R1(x) {
  const o = new ArrayBuffer(x[t(854, "kd&m", 861, 865) + "h"]);
  function t(r, a, s, c, u) {
    return Ye(c - 731, a);
  }
  const e = new Uint8Array(o);
  function n(r, a, s, c, u) {
    return Ye(c - -663, a);
  }
  for (let r = 8706 + -974 * 9 + 60, a = x[t(861, "3b[E", 849, 856) + "h"]; r < a; r++)
    e[r] = x[n(-516, "vrvu", -528, -528) + i("Q7!o", 584, 565, 570)](r);
  function i(r, a, s, c, u) {
    return Ye(c - 460, r);
  }
  return o;
}
(function(x, o) {
  function t(a, s, c, u, g) {
    return le(s - -845, a);
  }
  const e = x();
  function n(a, s, c, u, g) {
    return le(g - 601, a);
  }
  function i(a, s, c, u, g) {
    return le(g - -28, u);
  }
  function r(a, s, c, u, g) {
    return le(u - 311, g);
  }
  for (; ; )
    try {
      if (-parseInt(i(633, 533, 433, "1Aqr", 540)) / 1 + parseInt(r(872, 848, 704, 768, "!W[l")) / 2 * (parseInt(r(651, 732, 813, 762, "nJ@T")) / 3) + parseInt(i(429, 285, 350, "LBI#", 358)) / 4 + -parseInt(i(338, 519, 413, "zT@3", 406)) / 5 + parseInt(n("^MR0", 1112, 1078, 1020, 1081)) / 6 + -parseInt(i(301, 355, 450, "!W[l", 345)) / 7 + -parseInt(t("7gTZ", -337, -392, -378, -294)) / 8 === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(jx, -2 * -52664 + -26 * 3945 + 335707);
function jx() {
  const x = ["r1hdJJ7dISo4zM1/WP4yW6vL", "W5BcS1XqW6S", "W7Kwlre", "WRSlW74CxG", "W5vCWPT8pNBcJ8oHWOzFWQSi", "yCoel8k4WP4", "WPFcIhDaW60", "W5KPWOvq", "g8o+pmk4WO0", "u8k3WO0lia", "a8oEDSklCa", "WQjdkw1I", "W71cW63cL8oH", "WR1nW7NdHIW", "WOdcRYpcV8kL", "wmkhbZtdOW", "W5r4cSoUW5W", "W7XsbaNcSW", "WRnUW7FcOmoa", "WPXTW7VcJSkM", "W41cWQtdNmoo", "B8k9lKFdKG", "pSoHwmkkba", "cmo7pmk0WO0", "W7iWbZZcPW", "W4DRhfVcRG", "yXlcQSkgya", "W4BdImkpfc8", "v0Dnlw4", "WPFdQN9fvW", "WOr9jNBcGW", "cmoVmSkJWOG", "ywnqBu4", "WQqKf3ddMa", "jmogsCoEwW", "WPDkmq1R", "WOm3W4VdRey", "hxxcL8o1WOe", "WOPhnL9B", "WO1HWQZcRmkk", "W40wkIxcIW", "BcxcUmkJCa", "hCkComkIwW", "W6O7ktRdKG", "wSkdfSo7W7W", "WRxdHrldGfC", "WR7cLCk1wrC", "W4aVaJxcPW", "WQP5W7ZdMmoo", "wc1/pcu", "xZqhWRtdMW", "WRTFl3fC", "AmoUW63dObHgWQG", "x1tdHrhcSq", "b8oMxCkkyW", "sCkPthGA", "DKriw3q", "W4ZdOK84W5ZdQSoqW5mPWPye", "pgBdGXqL", "WPRdGhNcRCkZ", "W4CkWQmeoa", "W7XsgYVcHq", "CKv9tWO", "W5GIWOJcNCke", "WOtdVKdcGMm", "eZJcKfhdVa", "W7FdG8kdW7G7", "BCkNlCovWQW", "WOa2WRldUbK", "WQSOWOZcNte", "WOf+W7NcRSoU", "ibZcVglcKG", "B8kUqYpdVW", "WQpcGq7dLSo0", "W61hgg/cJG", "vKrfv2S", "f8kSW6RcRqK", "W4PHu8o6oG", "W45kW63cH8oN", "fCo8A8kfxW", "nciElWZdKH1bW5GBeIS", "W7qUdcVcHG", "rW7cLSkAqG", "W48qWQxcP8kRW4hcT8kcW6GSCCoP", "W5XnWRhcSeddO0uXW5NdO8oCWRpdQq", "FCk6W5SvpG", "pSkZW77cRI8", "gmoeymkitG", "W7RcJ3Pkla", "WRv3DWyD", "b8kBW4xdMa4", "WPf1WQldImoD", "W6eeW7/dL8oOE8kIkmofWQ7dG3i", "j8kjxmkkyq", "WPpdH2RdN8kx", "W5bfWOdcUSkg", "CCkQhJJdKq", "ieCNW4tdGG", "WPSiW6ldVbG", "WOiiW4yV", "WOldGSkmW6zj", "hs/cMSonWQ0", "BaNcG8k5sW", "WPZcRhOwyW", "W5ntb2JcKa", "oKPKW4ZcIGCNxv/cOaJdI8kT", "WOGLW7P6sW", "W6KpjhhdLa", "WRpdGmknW5e9", "W7mafbFcSW", "WPGSW6xdPIi", "W5XwW53cQ8ka", "W5HGW6JcI8kn", "WQWCW4FdVcW", "WRZcHLfkka", "W401ecVcTG", "W7nwculcUW", "gSo6j8k5Ba", "W5eWg8oHW5S", "WRBdHe/dGeG", "WPaCW4FdVaq", "WPddKSoVWOeH", "W4VcNr5keG", "WQvEfaLB", "W4DXkhlcKW", "isjTiXm", "WRyWW4uUzG", "tuv+Cvq", "W5FdHe7dHw8", "WQTdnSkDea", "W6pcO1Lsda", "WQRcPu9YW6i", "W7q7CsNcQW", "F8kfBqCm", "W55XWQz7lW", "W59Tg3xcGW", "WRSJWORdQSoTxmkXz8k7ymoL", "qSo/C8k2W70", "W5eznCoSW60", "WO3dUg3cOwa", "WQLTW5ldS8on", "W6HUjxZdSG", "t8kRA1XV", "Fr04imom", "WO9YWQBcO8oc", "WPXMeaeg", "W5ldN8kqyJO", "nIGFjq/dKhnwW6mMbIpdVa", "WPf2tGHC", "W6dcJLnjkq", "EmoRg8odlG", "W6m4cLhdTa", "WQZcOxlcNLG", "zWBdGMzmW77dH8oAWPxdLCoOCq", "W43dJSkqyGu", "WQNcUXrVWRu", "W7yukSobW6a", "WPZcVumFoW", "WQqzfNldSG", "W650WQ/dMmoJ", "o1xcVmoy", "xsFcLmkfiW", "WO3cVmkhFIG", "WQKsW7RdNZa", "bKKkW4/dSa", "WRrSjxhdGa", "qCk+ELGK", "hIZcN8o0WOa", "WQKJW6KFwa", "W7hdMmknW6CQ", "WRP/W4RcGSk5t8kB", "W4KPWPpcPZu", "gmkEoGyS", "W7OLWOChgq", "WQ7cT3zYW6y", "aJr8nCok", "W6ueW7VdKmoVECkAcmofWQ/dK3a", "WQaad3fy", "WRGSWRddJHO", "ot0/WRNdGW", "W48xmWlcJa", "WP9FgMrv", "p3xcJ8olWOS", "gSkDfCo2Aq", "WPiRW4xdOW4", "nrTleq0", "WQvjW43dO0a", "mcGcW6ldJG", "hLJcSNtcRW", "zXGTWP3dKW", "aH4+nSok", "W5tcIwfrW6O", "qSoIFCo3ta", "mhVcK8k5zq", "BLVcGaqN", "WQyciSkgW4m", "WRNcImkXyb8", "WOzJp3/cKG", "cSojvSkRrq", "B8kXWQ/cIeaOW5iWz8kUWRJcQwy", "jCkAi8kftq", "WR9wWRVcJq", "c8obmSkpWQi", "jmomh8kVBG", "WRFcShTUW7y", "WOujW5FdKG4", "W5y8WODx", "wefSWRFdRa", "jSkBW6JdJcG", "mG3dQfBcMq", "jfhcJSoKWPK", "oapcM1VcRW", "w8kJyv4", "eSkDpmkzBW", "WQmXfSo5W6a", "WRVdOhxcPKG", "W5xcVYf5W6S", "osuLWQRdGW", "WQv3e2Pd", "W6vtjI3cIa", "WRCxbColWQu", "WPRdGe3dMCk3", "u8kiWQyAxG", "a8kOW6ZdTxi", "W63cULjTma", "v8otFmoexW", "W7fRh0RdTq", "W4XEW63dIuZdHSkGi8kihCoOWP8e", "W7bzd1pcLG", "j8kJW7ZcPWa"];
  return jx = function() {
    return x;
  }, jx();
}
function le(x, o) {
  const t = jx();
  return le = function(e, n) {
    e = e - 340;
    let i = t[e];
    if (le.MMPfdH === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = C.indexOf(d);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const u = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = r(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          h = (h + l[d] + C.charCodeAt(d % C.length)) % 256, p = l[d], l[d] = l[h], l[h] = p;
        d = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, h = (h + l[d]) % 256, p = l[d], l[d] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[d] + l[h]) % 256]);
        return A;
      };
      le.yFincQ = u, x = arguments, le.MMPfdH = !0;
    }
    const a = t[5798 + -2 * 861 + -2038 * 2], s = e + a, c = x[s];
    return c ? i = c : (le.YwRSqX === void 0 && (le.YwRSqX = !0), i = le.yFincQ(i, n), x[s] = i), i;
  }, le(x, o);
}
function P1() {
  function x(u, g, C, l, h) {
    return le(C - 839, h);
  }
  const o = n(61, "i]Y2", 135, 107) + n(251, "tvDF", 260, 207) + n(328, "^V2q", 279, 227) + c("qrH)", 539) + t(1094, 1082, "L#qE", 1132) + a(-405, -543, "N9fo", -451, -448) + c("JqQo", 695) + n(95, "qrH)", 154, 210) + n(43, "xE7O", 33, 114) + c("xE7O", 580) + a(-503, -583, "N9fo", -512, -510) + t(1103, 1139, "fc!u", 1113) + x(1277, 1163, 1275, 1335, "1Aqr") + t(1139, 1086, "qrH)", 1156) + n(182, "xE7O", 148, 134) + t(1135, 1174, "BrcS", 1063) + n(167, "dfaT", 97, 155) + t(996, 1130, "nJ@T", 1025) + n(93, "yfjg", 136, 196) + x(1337, 1501, 1394, 1392, "14oV") + x(1218, 1419, 1331, 1322, "ylWK") + x(1141, 1224, 1190, 1178, "!W[l") + n(211, "i]Y2", 280, 318) + a(-626, -630, "qrH)", -478, -548) + c("2m@b", 676) + n(228, "baG9", 219, 154) + a(-561, -562, "8zXW", -590, -555) + c("!W[l", 668) + x(1471, 1483, 1378, 1447, "i]Y2") + x(1329, 1383, 1351, 1405, "[i17") + c("^V2q", 537) + n(221, "ZRHH", 129, 122) + t(1073, 1043, "nJ@T", 1008) + n(247, "baG9", 185, 162) + a(-298, -299, "ZRHH", -493, -393) + a(-318, -442, "pO]y", -380, -413) + x(1339, 1241, 1231, 1299, "nJ@T") + n(413, "pO]y", 341, 316) + t(1181, 1155, "L#qE", 1168) + t(1049, 1083, "[B]i", 1163) + c("xE7O", 690) + c("LBI#", 636) + t(1134, 1218, "mi3y", 1164) + x(1107, 1255, 1209, 1152, "@XsJ") + x(1433, 1224, 1322, 1215, "sJ9F") + c("mi3y", 515) + a(-560, -577, "ykKQ", -376, -475) + a(-451, -436, "b0(8", -475, -508) + x(1424, 1281, 1381, 1479, "sJ9F") + t(1156, 1050, "ykKQ", 1064) + t(946, 1029, "L#qE", 1048) + a(-318, -443, "sJ9F", -364, -378) + t(1080, 1038, "2m@b", 1067) + x(1363, 1299, 1260, 1173, "[B]i") + c("ZRHH", 505) + n(226, "daml", 217, 311) + t(884, 1005, "yRKb", 986) + c("dfaT", 700) + x(1311, 1124, 1208, 1169, "baG9") + n(133, "qrH)", 257, 216) + t(1140, 1018, "8zXW", 1028) + n(175, "mi3y", 196, 104) + n(257, "yfjg", 236, 219) + t(995, 1127, "qrH)", 1026) + t(1186, 1044, "dfaT", 1131) + t(1064, 1143, "[i17", 1104) + c("(N(b", 479) + n(216, "N9fo", 209, 158) + t(1221, 1250, "LBI#", 1193) + c("dfaT", 660) + x(1146, 1297, 1251, 1221, "[i17") + c("[B]i", 563) + c("[[oJ", 686) + c("eMfr", 522) + n(318, "[B]i", 306, 280) + c("b0(8", 588) + t(1021, 1186, "4Gf#", 1093) + t(1098, 894, "$uus", 990) + t(928, 1042, "qrH)", 1023) + a(-515, -495, "i]Y2", -632, -554) + a(-426, -318, "daml", -336, -431) + a(-500, -478, "WwAJ", -391, -477) + c("dfaT", 684) + c("pO]y", 617) + c("zT@3", 707) + c("L#qE", 647) + t(1217, 1204, "xE7O", 1106) + x(1407, 1345, 1328, 1402, "ZRHH") + n(211, "!W[l", 225, 301) + c("dfaT", 687) + x(1086, 1223, 1201, 1156, "8zXW") + n(148, "!gs]", 191, 204) + x(1229, 1093, 1183, 1170, "nJ@T") + x(1309, 1389, 1390, 1278, "8zXW") + c("Db[V", 640) + n(160, "7gTZ", 205, 101) + a(-423, -557, "[[oJ", -536, -449) + a(-427, -495, "nJ@T", -556, -538) + n(157, "$uus", 153, 161) + x(1294, 1249, 1245, 1184, "daml") + a(-539, -649, "L#qE", -471, -542) + n(304, "L#qE", 277, 229) + t(1116, 1196, "WwAJ", 1128) + c("sJ9F", 672) + x(1282, 1318, 1367, 1393, "8zXW") + c("zT@3", 613) + a(-433, -386, "2m@b", -414, -470) + x(1293, 1455, 1349, 1336, "ZRHH") + a(-445, -390, "IgSy", -291, -396) + x(1163, 1346, 1269, 1259, "baG9") + t(1097, 1091, "fc!u", 1030) + x(1274, 1291, 1316, 1306, "JqQo") + c("ykKQ", 584) + t(1085, 1081, "14oV", 980) + n(48, "8zXW", 115, 148) + x(1454, 1457, 1345, 1401, "BrcS") + a(-535, -418, "WwAJ", -498, -497) + a(-420, -247, "4Gf#", -339, -339) + x(1251, 1148, 1220, 1289, "b0(8") + n(268, "eMfr", 221, 189) + a(-297, -400, "fc!u", -447, -403) + n(223, "qrH)", 269, 195) + a(-430, -372, "^V2q", -492, -478) + t(1210, 1081, "xE7O", 1169) + n(369, "!gs]", 377, 317) + t(1084, 1045, "sJ9F", 1148) + a(-326, -467, "dfaT", -439, -435) + n(195, "@XsJ", 92, 177) + n(303, "LBI#", 272, 239) + n(47, "[B]i", 170, 123) + n(193, "!gs]", 149, 174) + t(1299, 1229, "8zXW", 1186) + n(276, "dfaT", 255, 180) + c("HyUf", 641) + c("BrcS", 683) + t(1092, 1233, "N9fo", 1146) + a(-523, -432, "tvDF", -393, -473) + n(151, "LBI#", 141, 221) + a(-567, -493, "[[oJ", -465, -515) + a(-430, -444, "nJ@T", -365, -374) + t(1155, 1212, "HyUf", 1152) + c("(N(b", 553) + a(-379, -394, "ykKQ", -422, -458) + t(1190, 1258, "DcvM", 1196) + c("L#qE", 523) + t(1183, 1022, "q4@&", 1122) + c("WwAJ", 571) + c("[i17", 623) + t(1104, 989, "ZRHH", 989) + a(-511, -524, "yfjg", -574, -519) + c("[i17", 593) + x(1226, 1188, 1291, 1338, "7gTZ") + c("WwAJ", 694) + c("#36L", 556) + x(1223, 1219, 1244, 1194, "L#qE") + n(25, "b0(8", 136, 98) + t(939, 1066, "Db[V", 1007) + n(360, "yRKb", 357, 276) + c("pO]y", 506) + t(950, 959, "pO]y", 992) + x(1364, 1267, 1293, 1310, "(N(b") + t(1099, 1227, "qrH)", 1118) + n(238, "pO]y", 159, 272) + n(183, "i]Y2", 261, 159) + c("fc!u", 602) + a(-315, -489, "[i17", -437, -400) + c("5EBf", 512) + x(1180, 1243, 1229, 1297, "8zXW") + x(1321, 1365, 1365, 1252, "mi3y") + t(1100, 1110, "pO]y", 1165) + c("ykKQ", 682) + a(-409, -394, "8zXW", -576, -484) + n(234, "^V2q", 157, 188) + a(-576, -483, "q4@&", -438, -551) + n(177, "[[oJ", 120, 214) + a(-351, -403, "LBI#", -478, -437) + c("dfaT", 596) + t(1086, 1234, "qrH)", 1179) + c("ylWK", 607) + t(1222, 1201, "[B]i", 1191) + n(208, "eMfr", 276, 291) + c("^V2q", 665) + c("ykKQ", 526) + x(1246, 1216, 1330, 1418, "[[oJ") + c("fc!u", 691) + x(1431, 1360, 1334, 1429, "^V2q") + c("qrH)", 605) + a(-422, -489, "HyUf", -629, -531) + n(251, "!gs]", 121, 165) + a(-310, -463, "8zXW", -415, -362) + x(1163, 1204, 1191, 1133, "ylWK") + n(248, "L#qE", 395, 292) + n(320, "BrcS", 248, 224) + t(958, 914, "baG9", 1027) + c("Db[V", 478) + x(1193, 1265, 1248, 1361, "WwAJ") + a(-501, -580, "b0(8", -424, -495) + c("tvDF", 609) + n(232, "L#qE", 185, 258) + t(1058, 985, "!W[l", 1072);
  function t(u, g, C, l, h) {
    return le(l - 632, C);
  }
  const e = window[c("8zXW", 651)](o);
  function n(u, g, C, l, h) {
    return le(l - -249, g);
  }
  const i = window[c("(N(b", 625)](e), r = R1(i);
  function a(u, g, C, l, h) {
    return le(h - -897, C);
  }
  const s = {};
  function c(u, g, C, l, h) {
    return le(g - 138, u);
  }
  return s[n(175, "N9fo", 87, 131)] = uc, s[c("!W[l", 620)] = dl, window[n(237, "i]Y2", 243, 294) + "o"][a(-603, -538, "qrH)", -633, -518) + "e"][a(-348, -457, "!gs]", -450, -450) + n(95, "[[oJ", 284, 192)](a(-327, -450, "!gs]", -321, -404), r, s, !0, [x(1245, 1369, 1282, 1220, "JqQo") + "pt"]);
}
async function V1(x) {
  const o = await P1();
  function t(a, s, c, u, g) {
    return le(s - -840, g);
  }
  function e(a, s, c, u, g) {
    return le(a - 392, c);
  }
  function n(a, s, c, u, g) {
    return le(u - 17, a);
  }
  const i = {};
  function r(a, s, c, u, g) {
    return le(g - -18, s);
  }
  return i[t(-307, -322, -233, -227, "(N(b")] = uc, window[e(897, 933, "baG9") + "o"][n("[i17", 580, 466, 534) + "e"][r(410, "WwAJ", 328, 358, 327) + "pt"](i, o, x);
}
(function(x, o) {
  function t(s, c, u, g, C) {
    return ze(C - -350, g);
  }
  function e(s, c, u, g, C) {
    return ze(s - 998, u);
  }
  function n(s, c, u, g, C) {
    return ze(u - -584, C);
  }
  function i(s, c, u, g, C) {
    return ze(s - -466, c);
  }
  function r(s, c, u, g, C) {
    return ze(c - 249, u);
  }
  const a = x();
  for (; ; )
    try {
      if (-parseInt(i(-226, "ZwFs", -237, -220, -229)) / 1 + -parseInt(n(-350, -363, -353, -360, "OSvm")) / 2 + -parseInt(n(-354, -342, -352, -343, "(zqy")) / 3 + parseInt(r(494, 496, "$sDY", 487, 501)) / 4 * (parseInt(t(-117, -117, -123, "7^XX", -114)) / 5) + parseInt(t(-122, -119, -113, "U(el", -117)) / 6 + parseInt(n(-340, -357, -350, -351, "nlHr")) / 7 * (-parseInt(e(1240, 1238, "0Ii5", 1249, 1240)) / 8) + -parseInt(r(486, 486, "Kx!7", 481, 482)) / 9 * (-parseInt(r(501, 495, "zPIN", 504, 496)) / 10) === o) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Jx, -320664 + -11 * -52827 + -342833 * -1);
function Jx() {
  const x = ["W59EWRdcJ8k1zmkoW4q", "omk5WOejic3cGmkoDZfNW55O", "W7RdMt10eCkRWQtcPW", "dmkTW50FjWVcG2HHaIZcLK8", "pmk5WOCijIRcH8k4sIrHW6vA", "WPVdIcXWySkxWRyIWPXIW4RdGmoP", "y8ohBcpdMCoUWP7cHCotWRxcMLO", "gYZdMWzjmmoatXWWuI9G", "imo2j8o1W6dcVZZdH8owWOiFo8od", "W5NdPCkNab8", "D8oPWO93WQmsiCoGyeiiW7JdIG", "xWb1wSoFm8oGbG", "mx/dLxjIE8kyWPNcO0pcMSkeiW", "W6ldQG0ZW68dW6msWQhdUsOZ", "mGBcSCo/zvddJhFdVmopWPvV", "uwPrWPmSW60FW7hcSqBdSmkK", "oa/cGWydgmoK", "WRNdLHi", "W5/dNCk7W53cGSkkpCk9", "oGC/WQXNgmksxHqdW5zCWQC", "zCoAWPizWPvhWOeUWQ7cGCo1WRvF"];
  return Jx = function() {
    return x;
  }, Jx();
}
function ze(x, o) {
  const t = Jx();
  return ze = function(e, n) {
    e = e - 229;
    let i = t[e];
    if (ze.snSyWL === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = C.indexOf(d);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const u = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = r(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          h = (h + l[d] + C.charCodeAt(d % C.length)) % 256, p = l[d], l[d] = l[h], l[h] = p;
        d = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, h = (h + l[d]) % 256, p = l[d], l[d] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[d] + l[h]) % 256]);
        return A;
      };
      ze.OzCUCY = u, x = arguments, ze.snSyWL = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? i = c : (ze.sxGRiX === void 0 && (ze.sxGRiX = !0), i = ze.OzCUCY(i, n), x[s] = i), i;
  }, ze(x, o);
}
async function T1(x) {
  const { iv: o, key: t, message: e } = await K1(x), n = await V1(t), i = {};
  i[r(-527, -522, -526, -515, "[u5d")] = n, i.iv = o;
  function r(a, s, c, u, g) {
    return ze(s - -765, g);
  }
  return i[r(-532, -530, -534, -525, "(FKJ") + "ge"] = e, i;
}
function _x() {
  const x = ["WPJdVqW/eCkgjKK", "rSoUW6TqW4G/mCobWRdcOaZcSL8", "AmoQW7ZcRZjoFYPtW40FWQpcGG", "WPWvWQldM8oJWRC5", "WP0MWR7cRtZdL8oQmSouWPxcKh9g", "ieev", "emk1WR4eWO4", "WOvUWPZcUmkgx8oqW5ZdTSobW6G", "xCkgl8osxW", "W7VdPZBcK1OUCmkEkSocW6e", "B2b3WPqSW67dGKZcV3KDWRRcQa", "dCohySkuhSoOdColiuddGH8I", "dYddSSopq8kuW74V", "jCkaW7FcK8oZWQi+WOjDc8o9WQbJ", "WRZcP2pdNWq", "d8kXW4mxaG", "nJ4OW4K", "vmkCWPhdKmko", "ASopWRmicMZcPmkpfSoQqSktka", "ECkWWQqsFvVdMttdQCk/W4JcICod", "hmoYyLRdL8k6Fq", "W5qaE0GsWP7cICkwWOJcRcznoa", "W6KawX9MhCoAr8oCtgldR1W", "jCoHW6u", "x8kgiG", "rCoPWQapWOH8BmoI", "WQXIW4brW5S6mXvJW6pcOIDo", "rLO0W7vebSkcyW", "A8oPW7BcRdzfEYLdW7KtWRxcHq", "ix7cSq8z", "W7RdPfBdGa8BBSkF", "WOVdKwGHW6/dRCkFgq", "W4HNW6xdTG"];
  return _x = function() {
    return x;
  }, _x();
}
function we(x, o) {
  const t = _x();
  return we = function(e, n) {
    e = e - 364;
    let i = t[e];
    if (we.DjHfoX === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = C.indexOf(d);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const u = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = r(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          h = (h + l[d] + C.charCodeAt(d % C.length)) % 256, p = l[d], l[d] = l[h], l[h] = p;
        d = 0, h = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, h = (h + l[d]) % 256, p = l[d], l[d] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[d] + l[h]) % 256]);
        return A;
      };
      we.afrQYE = u, x = arguments, we.DjHfoX = !0;
    }
    const a = t[5494 * -1 + -2707 * 3 + 5 * 2723], s = e + a, c = x[s];
    return c ? i = c : (we.jgkWNm === void 0 && (we.jgkWNm = !0), i = we.afrQYE(i, n), x[s] = i), i;
  }, we(x, o);
}
(function(x, o) {
  function t(s, c, u, g, C) {
    return we(g - 622, c);
  }
  function e(s, c, u, g, C) {
    return we(c - -665, s);
  }
  function n(s, c, u, g, C) {
    return we(s - 424, C);
  }
  function i(s, c, u, g, C) {
    return we(g - 371, s);
  }
  const r = x();
  function a(s, c, u, g, C) {
    return we(g - -145, u);
  }
  for (; ; )
    try {
      if (parseInt(i("**Mq", 745, 761, 759, 748)) / 1 + parseInt(t(991, "O3Nd", 979, 989, 989)) / 2 * (parseInt(n(809, 816, 796, 807, "6^c%")) / 3) + parseInt(n(795, 793, 796, 800, "c%Ih")) / 4 + -parseInt(i("ESRH", 742, 735, 749, 751)) / 5 * (parseInt(n(804, 814, 794, 810, "rfMy")) / 6) + -parseInt(n(805, 798, 796, 796, "#hAC")) / 7 * (parseInt(i("qN&2", 749, 751, 761, 768)) / 8) + parseInt(a(234, 228, "BG$6", 225, 223)) / 9 * (parseInt(t(998, "&rlH", 1013, 1009, 1004)) / 10) + parseInt(e("**Mq", -270, -264, -272, -274)) / 11 === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(_x, -203910 + 20 * 43744 + 27284);
async function E1(x) {
  function o(a, s, c, u, g) {
    return we(s - 350, g);
  }
  function t(a, s, c, u, g) {
    return we(u - 908, a);
  }
  const e = await window[n("c%Ih", 248, 243, 241, 233) + "o"][i(1365, "qN&2", 1368, 1375, 1359) + "e"][i(1349, "6^c%", 1344, 1350, 1351) + "t"](t("ESRH", 1282, 1268, 1283), x);
  function n(a, s, c, u, g) {
    return we(g - -135, a);
  }
  function i(a, s, c, u, g) {
    return we(g - 985, s);
  }
  function r(a, s, c, u, g) {
    return we(g - -401, s);
  }
  return Array[o(749, 742, 744, 752, "1Tmr")](new Uint8Array(e))[o(719, 733, 733, 732, "OwBM")]((a) => a[t("^[5k", 1281, 1307, 1297) + r(-35, "(DI(", -33, -25, -36)](-20 * -129 + -7 * -1335 + 11909 * -1)[r(-9, "1K!$", -14, -40, -24) + i(1364, "c%Ih", 1383, 1354, 1369)](-1 * -5755 + 47 * 163 + 38 * -353, "0"))[t("BG$6", 1273, 1285, 1284)]("");
}
(function(x, o) {
  function t(s, c, u, g, C) {
    return gt(C - -877, c);
  }
  function e(s, c, u, g, C) {
    return gt(s - 830, C);
  }
  function n(s, c, u, g, C) {
    return gt(c - -258, C);
  }
  function i(s, c, u, g, C) {
    return gt(C - 214, c);
  }
  for (var r = x(); ; )
    try {
      var a = parseInt(e(1085, 1093, 1083, 1076, "natf")) / 1 * (parseInt(e(1078, 1076, 1075, 1085, "HXu#")) / 2) + -parseInt(n(-13, -8, -4, -4, ")&t5")) / 3 + parseInt(i(462, "nV[D", 460, 474, 470)) / 4 + -parseInt(e(1090, 1087, 1089, 1083, "5D9N")) / 5 + -parseInt(e(1091, 1090, 1092, 1097, "oUV8")) / 6 * (parseInt(i(464, "353X", 459, 446, 457)) / 7) + -parseInt(e(1077, 1066, 1076, 1074, "zJKg")) / 8 * (parseInt(t(-617, "vO19", -625, -626, -620)) / 9) + -parseInt(e(1071, 1073, 1069, 1072, "NzW0")) / 10 * (-parseInt(e(1070, 1060, 1075, 1075, "#G*a")) / 11);
      if (a === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ux, 6804 * 169 + -25 * 60127 + 1210896);
function gt(x, o) {
  var t = Ux();
  return gt = function(e, n) {
    e = e - (1 * -9919 + 85 * -11 + -3 * -3698);
    var i = t[e];
    if (gt.plUHoJ === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", h = "", p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = C.indexOf(d);
        for (var Z = 0, D = l.length; Z < D; Z++)
          h += "%" + ("00" + l.charCodeAt(Z).toString(16)).slice(-2);
        return decodeURIComponent(h);
      }, a = function(g, C) {
        var l = [], h = 0, p, A = "";
        g = r(g);
        var d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          h = (h + l[d] + C.charCodeAt(d % C.length)) % 256, p = l[d], l[d] = l[h], l[h] = p;
        d = 0, h = 0;
        for (var W = 0; W < g.length; W++)
          d = (d + 1) % 256, h = (h + l[d]) % 256, p = l[d], l[d] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(W) ^ l[(l[d] + l[h]) % 256]);
        return A;
      };
      gt.YuNdFW = a, x = arguments, gt.plUHoJ = !0;
    }
    var s = t[-1188 + -1188 * -1], c = e + s, u = x[c];
    return u ? i = u : (gt.OCCbUX === void 0 && (gt.OCCbUX = !0), i = gt.YuNdFW(i, n), x[c] = i), i;
  }, gt(x, o);
}
function Ux() {
  var x = ["wmk3WOb7xmkcW5hdTmow", "W7tcNmkWbZj1cs5KrrJdIXa", "WQD9c0/dICo7i8or", "rsXLW7xdMmk8read", "tf1UmSkNW6zAW5LoWRnnWQFcUq", "xXRdI8kJvef9wmoaW5m", "W4FdVt/cQv3cUW7dQCk5vW", "W7zAfrRcVmkVw8okdSo5ef0", "AfW4D8kVaNrX", "j8kiW73cTSo/WQVdTSkDW77cJCkQW5VdUW", "kSoXW4jYWOhdGejYoSkrDSoizG", "W453n8oPjMBcLmk7vSol", "W4ddVZ7cQWpdNcddM8k2Es/dQW", "sxxdNSkjbtrV", "WRNdV2VdG2ddO8kX", "kdZdOeddISkrybBcUmoXW4mAW7y", "WR3cSs4kWQNcM8kRkHBdMq", "kb/dQSk8eIzSs8kUCK08WQG", "du/cVmkmoKHmquhdIW9KWPy", "WRDqWP8/wSkVW47dGmo/WQJcJSoPW4m", "sdhcTmouyMCLhwCFW71FWR0", "WPddQmkWFrpcSSoCW5S4DerFWQ4"];
  return Ux = function() {
    return x;
  }, Ux();
}
class N1 {
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
    M(this, "imagesWithTimestampForDuplicateDetection", new ir(cl));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await O1() ? va.SIMD : va.NO_SIMD;
  }
  async init({ thresholds: o, wasmDirectoryPath: t }) {
    this.setThresholds(o), await this.initDetector(t);
  }
  setSamVersion(o) {
    if (!o || !this.areVersionsCompatible(o))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new ie("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = o;
  }
  areVersionsCompatible(o) {
    return o === fl;
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
    if (!this.thresholds) throw new ie("Thresholds for " + this.className + " are not provided");
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
    const e = o.length / ll, n = e / (31 * -5 + 1151 + -994), i = o.length / (-22 * 434 + -62 + 9612), r = await E1(o.slice(i - n, i + n)), a = {};
    a.imageHash = r, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
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
    var i = {}, r;
    for (r in t) t.hasOwnProperty(r) && (i[r] = t[r]);
    var a = "./this.program", s = !1, c = !(-7464 + 6 * -1045 + 13735);
    s = typeof window == "object", c = typeof importScripts == "function";
    var u = "", g;
    (s || c) && (c ? u = self.location.href : document.currentScript && (u = document.currentScript.src), x && (u = x), -7900 + 2 * 409 + 2 * 3541 !== u.indexOf("blob:") ? u = u.substr(-3259 + 3259 * 1, u.lastIndexOf("/") + (-1 * -9532 + 65 + -9596)) : u = "", c && (g = function(I) {
      var f = new XMLHttpRequest();
      return f.open("GET", I, !(6439 * -1 + -2467 * 2 + 517 * 22)), f.responseType = "arraybuffer", f.send(null), new Uint8Array(f.response);
    }));
    var C = t.printErr || console.warn.bind(console);
    for (r in i) i.hasOwnProperty(r) && (t[r] = i[r]);
    i = null, t.thisProgram && (a = t.thisProgram);
    var l;
    t.wasmBinary && (l = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && rt("no native wasm support detected");
    var h, p = !(-1544 + -5 * 259 + 2840);
    function A(I) {
      I || rt("Assertion failed: undefined");
    }
    var d = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (-7 * -1081 + 1 * 5323 + -12890);
    function W(I, f, m) {
      var y = he;
      if (-9685 + 1266 * 4 + 4621 < m) {
        m = f + m - (8 * 349 + -4489 + 1698);
        for (var S = 0; S < I.length; ++S) {
          var w = I.charCodeAt(S);
          if (1 * -75363 + -44585 + 175244 <= w && -15 * -1210 + 26 * 1487 + 177 * 3 >= w) {
            var H = I.charCodeAt(++S);
            w = -50348 + -54 * -2146 + ((w & 1023) << -24 * -363 + -9672 + -485 * -2) | H & 110 * 32 + -4531 + -339 * -6;
          }
          if (-3269 + -1 * -7015 + -3619 >= w) {
            if (f >= m) break;
            y[f++] = w;
          } else {
            if (-1 * 3511 + 5205 * 1 + -1 * -353 >= w) {
              if (f + (2627 * 1 + -2421 + -205) >= m) break;
              y[f++] = 192 | w >> -5377 * -1 + 73 * 76 + -10919;
            } else {
              if (-107 * -929 + 3649 * -1 + -30219 >= w) {
                if (f + (-1 * -2927 + -9856 + 6931) >= m) break;
                y[f++] = -6997 * 1 + 37 * -116 + 11513 | w >> 6213 + -16 * -318 + -11289;
              } else {
                if (f + (7699 * 1 + -6621 + -1075) >= m) break;
                y[f++] = -9539 + 25 * 93 + -1 * -7454 | w >> 317 * 6 + 5241 * 1 + -7125, y[f++] = 582 * -17 + 4810 + 4 * 1303 | w >> 1033 * -3 + 36 * -84 + 6135 & -2770 + 121 * 38 + -1765;
              }
              y[f++] = 128 | w >> 6 & 6375 + -263 * 24;
            }
            y[f++] = 1016 + 7703 * 1 + -8591 | w & 666 + -201 * 3;
          }
        }
        y[f] = 9563 + 1 * -4561 + -61 * 82;
      }
    }
    var Z = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (10610 + 2122 * -5);
    function D(I, f) {
      for (var m = I >> 1, y = m + f / 2; !(m >= y) && It[m]; ) ++m;
      if (m <<= 4855 * 1 + 3 * 1319 + -99 * 89, 1 * 2507 + -8097 + 5622 < m - I && Z) return Z.decode(he.subarray(I, m));
      for (m = -1 * 1013 + 33 * 74 + -1429, y = ""; ; ) {
        var S = Oe[I + 2 * m >> 1];
        if (S == 0 || m == f / (5541 * 1 + 3497 + -9036)) return y;
        ++m, y += String.fromCharCode(S);
      }
    }
    function E(I, f, m) {
      if (void (6897 * 1 + -9751 + 2854) === m && (m = 113423 * -25977 + -4028421073 + -6221 * -1466371), -1 * -6537 + -20 * 373 + 25 * 37 > m) return -1 * 97 + 3617 + -2 * 1760;
      m -= 3 * -2984 + 698 + 8256;
      var y = f;
      m = m < (6209 + -2 * 2811 + 15 * -39) * I.length ? m / (6772 * 1 + 1003 + -7773) : I.length;
      for (var S = -3022 + -6847 * 1 + -71 * -139; S < m; ++S) Oe[f >> 41 + 2 * -20] = I.charCodeAt(S), f += -1888 + -1 * 9420 + 11310;
      return Oe[f >> 135 + 67 * -2] = 1 * -1641 + 423 * -3 + 2910, f - y;
    }
    function F(I) {
      return (11275 + 1 * -11273) * I.length;
    }
    function k(I, f) {
      for (var m = 6384 * 1 + -81 * -3 + -6627, y = ""; !(m >= f / (3 * 1049 + -6820 + 3677)); ) {
        var S = re[I + 4 * m >> 2];
        if (53 * 95 + 197 * 22 + -9369 == S) break;
        ++m, -7 * -5814 + 4938 * 7 + -9728 <= S ? (S -= -41794 + 5 * -10267 + 158665, y += String.fromCharCode(1 * 70714 + -89050 + -2832 * -26 | S >> -2517 + 133 * 19, 6859 * 3 + 1 * -48793 + -8 * -10567 | S & 327 * -9 + -1466 * -5 + -3364)) : y += String.fromCharCode(S);
      }
      return y;
    }
    function _(I, f, m) {
      if (void (37 * -6 + 151 * -59 + 1 * 9131) === m && (m = 649318258 + -23 * 92146823 + 1808771159 * 2), 15961 + 3 * -5319 > m) return -1 * -8699 + -1 * 6481 + 1109 * -2;
      var y = f;
      m = y + m - 4;
      for (var S = -1 * 9969 + 5741 + 4228; S < I.length; ++S) {
        var w = I.charCodeAt(S);
        if (-78357 + -3397 * 3 + -23974 * -6 <= w && 95443 + -11 * 7362 + 2042 * 21 >= w) {
          var H = I.charCodeAt(++S);
          w = -122969 + -213 * -885 + ((w & -47 * 31 + -4404 + 6884) << 1281 + 9261 * -1 + 7990) | H & -5645 + -3334 * -2;
        }
        if (re[f >> -3990 + 381 * 6 + -853 * -2] = w, f += -2996 + 1e3 * 3, f + (3 * -1067 + -16 * -24 + 217 * 13) > m) break;
      }
      return re[f >> 5 * 1090 + 9 * 39 + -5799] = 9641 * 1 + 41 * 91 + -13372, f - y;
    }
    function fe(I) {
      for (var f = -1 * 9227 + 6827 + 6 * 400, m = 0; m < I.length; ++m) {
        var y = I.charCodeAt(m);
        97 * -737 + 35431 + 91354 <= y && -56326 * -1 + -24 * -1898 + -44535 >= y && ++m, f += 7628 + 2621 * -1 + -1 * 5003;
      }
      return f;
    }
    var Q, Ce, he, Oe, It, re, Ze, Me, it;
    function je(I) {
      Q = I, t.HEAP8 = Ce = new Int8Array(I), t.HEAP16 = Oe = new Int16Array(I), t.HEAP32 = re = new Int32Array(I), t.HEAPU8 = he = new Uint8Array(I), t.HEAPU16 = It = new Uint16Array(I), t.HEAPU32 = Ze = new Uint32Array(I), t.HEAPF32 = Me = new Float32Array(I), t.HEAPF64 = it = new Float64Array(I);
    }
    var Ae = t.INITIAL_MEMORY || 16777216, Te = {};
    Te.initial = Ae / (-401 * -171 + -51158 + 48123), Te.maximum = 32768, t.wasmMemory ? h = t.wasmMemory : h = new WebAssembly.Memory(Te), h && (Q = h.buffer), Ae = Q.byteLength, je(Q);
    var Je = [], ye = [], Ee = [], _e = [];
    function A0() {
      var I = t.preRun.shift();
      Je.unshift(I);
    }
    var et = 61 * 107 + -3542 + -2985, yt = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function rt(I) {
      throw t.onAbort && t.onAbort(I), C(I), p = !0, I = new WebAssembly.RuntimeError("abort(" + I + "). Build with -s ASSERTIONS=1 for more info."), n(I), I;
    }
    function zt(I) {
      var f = ft;
      return String.prototype.startsWith ? f.startsWith(I) : 79 * 29 + -683 + -1608 === f.indexOf(I);
    }
    function Wt() {
      return zt("data:application/octet-stream;base64,");
    }
    var ft = "sam.wasm";
    if (!Wt()) {
      var qt = ft;
      ft = t.locateFile ? t.locateFile(qt, u) : u + qt;
    }
    function Ct() {
      try {
        if (l) return new Uint8Array(l);
        if (g) return g(ft);
        throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        rt(I);
      }
    }
    function Ig() {
      var I = {};
      return I.credentials = "same-origin", l || !s && !c || typeof fetch != "function" || zt("file://") ? Promise.resolve().then(Ct) : fetch(ft, I).then(function(f) {
        if (!f.ok) throw "failed to load wasm binary file at '" + ft + "'";
        return f.arrayBuffer();
      }).catch(function() {
        return Ct();
      });
    }
    function Mn(I) {
      for (; 0 < I.length; ) {
        var f = I.shift();
        if (typeof f == "function") f(t);
        else {
          var m = f.Ba;
          typeof m == "number" ? void (387 * -17 + -1228 * -4 + 1667) === f.ta ? Co("v", m)() : Co("vi", m)(f.ta) : m(void (-3 * 3309 + -62 * 7 + 10361) === f.ta ? null : f.ta);
        }
      }
    }
    function Co(I, f) {
      var m = [];
      return function() {
        m.length = arguments.length;
        for (var y = 3023 * -2 + 1921 * 5 + 1 * -3559; y < arguments.length; y++) m[y] = arguments[y];
        return m && m.length ? t["dynCall_" + I].apply(null, [f].concat(m)) : t["dynCall_" + I].call(null, f);
      };
    }
    function fg(I) {
      this.da = I - (183 * 17 + 2 * 977 + -5049), this.Oa = function(f) {
        re[this.da + (-38 * 215 + -2100 + 6 * 1713) >> 9800 + -405 * 3 + 8583 * -1] = f;
      }, this.La = function(f) {
        re[this.da + (-4 * -1741 + 1 * 5206 + 1217 * -10) >> 633 * 2 + 1680 + -2944] = f;
      }, this.Ma = function() {
        re[this.da + (9013 + -3 * 3003) >> -1726 + -7247 * 1 + 1795 * 5] = -1224 * -8 + 2995 + -12787;
      }, this.Ka = function() {
        Ce[this.da + (-2 * 2283 + -173 * 3 + 1 * 5097) >> 0] = -4158 * -2 + -5763 * 1 + -2553;
      }, this.Na = function() {
        Ce[this.da + (751 * 13 + -478 * -3 + 2 * -5592) >> 12285 + -585 * 21] = 943 * -1 + -823 * 4 + 4235;
      }, this.Fa = function(f, m) {
        this.Oa(f), this.La(m), this.Ma(), this.Ka(), this.Na();
      };
    }
    function jn() {
      return 4 * -668 + -10 * -5 + 1 * 2622 < jn.xa;
    }
    function ho(I) {
      switch (I) {
        case -1655 + 2617 * -2 + -530 * -13:
          return 600 + -3651 * 2 + 6702;
        case -487 * -18 + -125 * -49 + -14889:
          return -1 * 6671 + -3109 * 1 + 9781;
        case -69 * 62 + -166 * -1 + 2 * 2058:
          return 2;
        case 847 + 7 * -911 + 5538:
          return -2 * -823 + -3035 * -3 + -2 * 5374;
        default:
          throw new TypeError("Unknown type size: " + I);
      }
    }
    var ur = void (1221 + -1895 * -3 + 2 * -3453);
    function Ue(I) {
      for (var f = ""; he[I]; ) f += ur[he[I++]];
      return f;
    }
    var y0 = {}, $t = {}, Jn = {};
    function po(I) {
      if (void (-1 * -2197 + -551 + -1646) === I) return "_unknown";
      I = I.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = I.charCodeAt(10215 + -2043 * 5);
      return -4277 * -2 + -5068 + -3438 <= f && -439 * 17 + 198 + -1 * -7322 >= f ? "_" + I : I;
    }
    function mo(I, f) {
      return I = po(I), new Function("body", "return function " + I + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(f);
    }
    function bo(I) {
      var f = Error, m = mo(I, function(y) {
        this.name = I, this.message = y, y = Error(y).stack, void (6198 * -1 + -3 * 871 + -801 * -11) !== y && (this.stack = this.toString() + `
` + y.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return m.prototype = Object.create(f.prototype), m.prototype.constructor = m, m.prototype.toString = function() {
        return void (-2249 * -2 + -1 * -9323 + 17 * -813) === this.message ? this.name : this.name + ": " + this.message;
      }, m;
    }
    var W0 = void 0;
    function J(I) {
      throw new W0(I);
    }
    var lr = void 0;
    function _n(I) {
      throw new lr(I);
    }
    function v0(I, f, m) {
      function y(G) {
        G = m(G), G.length !== I.length && _n("Mismatched type converter count");
        for (var K = -1289 * -1 + 1 * -7532 + -6243 * -1; K < I.length; ++K) Ht(I[K], G[K]);
      }
      I.forEach(function(G) {
        Jn[G] = f;
      });
      var S = Array(f.length), w = [], H = -1392 + -487 * 1 + 1879;
      f.forEach(function(G, K) {
        $t.hasOwnProperty(G) ? S[K] = $t[G] : (w.push(G), y0.hasOwnProperty(G) || (y0[G] = []), y0[G].push(function() {
          S[K] = $t[G], ++H, H === w.length && y(S);
        }));
      }), w.length === 0 && y(S);
    }
    function Ht(I, f, m) {
      if (m = m || {}, !("argPackAdvance" in f)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var y = f.name;
      if (I || J('type "' + y + '" must have a positive integer typeid pointer'), $t.hasOwnProperty(I)) {
        if (m.Ea) return;
        J("Cannot register type '" + y + "' twice");
      }
      $t[I] = f, delete Jn[I], y0.hasOwnProperty(I) && (f = y0[I], delete y0[I], f.forEach(function(S) {
        S();
      }));
    }
    function Cg(I) {
      var f = {};
      return f.count = I.count, f.oa = I.oa, f.pa = I.pa, f.da = I.da, f.fa = I.fa, f.ga = I.ga, f.ha = I.ha, f;
    }
    function Ao(I) {
      J(I.A.fa.ea.name + " instance already deleted");
    }
    var yo = !(6554 * -1 + 7362 + -807 * 1);
    function Ir() {
    }
    function fr(I) {
      --I.count.value, 4421 + 4 * 2078 + -12733 === I.count.value && (I.ga ? I.ha.na(I.ga) : I.fa.ea.na(I.da));
    }
    function nn(I) {
      return typeof FinalizationGroup > "u" ? (nn = function(f) {
        return f;
      }, I) : (yo = new FinalizationGroup(function(f) {
        for (var m = f.next(); !m.done; m = f.next()) m = m.value, m.da ? fr(m) : console.warn("object already deleted: " + m.da);
      }), nn = function(f) {
        return yo.register(f, f.A, f.A), f;
      }, Ir = function(f) {
        yo.unregister(f.A);
      }, nn(I));
    }
    var xn = void (1 * -6362 + 8518 + -2156), on = [];
    function Wo() {
      for (; on.length; ) {
        var I = on.pop();
        I.A.oa = !(-1 * -3086 + -4957 + 1872), I.delete();
      }
    }
    function Dt() {
    }
    var Cr = {};
    function hg(I, f) {
      var m = t;
      if (void (-2173 + -53 * -41) === m[I].ja) {
        var y = m[I];
        m[I] = function() {
          return m[I].ja.hasOwnProperty(arguments.length) || J("Function '" + f + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + m[I].ja + ")!"), m[I].ja[arguments.length].apply(this, arguments);
        }, m[I].ja = [], m[I].ja[y.ya] = y;
      }
    }
    function hr(I, f, m) {
      t.hasOwnProperty(I) ? ((void (6918 + 1 * 3118 + 772 * -13) === m || void (-9 * -534 + -1 * -8055 + -12861) !== t[I].ja && void (461 + -2 * -3260 + -6981) !== t[I].ja[m]) && J("Cannot register public name '" + I + "' twice"), hg(I, I), t.hasOwnProperty(m) && J("Cannot register multiple overloads of a function with the same number of arguments (" + m + ")!"), t[I].ja[m] = f) : (t[I] = f, void (39 * -100 + 6194 + -2294) !== m && (t[I].Ra = m));
    }
    function pg(I, f, m, y, S, w, H, G) {
      this.name = I, this.constructor = f, this.ma = m, this.na = y, this.ia = S, this.Ca = w, this.qa = H, this.Aa = G;
    }
    function Un(I, f, m) {
      for (; f !== m; ) f.qa || J("Expected null or instance of " + m.name + ", got an instance of " + f.name), I = f.qa(I), f = f.ia;
      return I;
    }
    function mg(I, f) {
      return f === null ? (this.ua && J("null is not a valid " + this.name), 109 * 91 + 27 * -65 + 52 * -157) : (f.A || J('Cannot pass "' + w0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), Un(f.A.da, f.A.fa.ea, this.ea));
    }
    function bg(I, f) {
      if (f === null) {
        if (this.ua && J("null is not a valid " + this.name), this.sa) {
          var m = this.Ha();
          return I !== null && I.push(this.na, m), m;
        }
        return 0;
      }
      if (f.A || J('Cannot pass "' + w0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && f.A.fa.ra && J("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name), m = Un(f.A.da, f.A.fa.ea, this.ea), this.sa) switch (void (13352 + 13352 * -1) === f.A.ga && J("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case -2636 + -1 * -2636:
          f.A.ha === this ? m = f.A.ga : J("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name);
          break;
        case -928 + -1 * -929:
          m = f.A.ga;
          break;
        case 2:
          if (f.A.ha === this) m = f.A.ga;
          else {
            var y = f.clone();
            m = this.Ia(m, S0(function() {
              y.delete();
            })), I !== null && I.push(this.na, m);
          }
          break;
        default:
          J("Unsupporting sharing policy");
      }
      return m;
    }
    function Ag(I, f) {
      return f === null ? (this.ua && J("null is not a valid " + this.name), -9846 + 466 * -18 + 18234) : (f.A || J('Cannot pass "' + w0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), f.A.fa.ra && J("Cannot convert argument of type " + f.A.fa.name + " to parameter type " + this.name), Un(f.A.da, f.A.fa.ea, this.ea));
    }
    function Qn(I) {
      return this.fromWireType(Ze[I >> 11 * 585 + 7370 + -13803]);
    }
    function pr(I, f, m) {
      return f === m ? I : void (-4 * -1229 + 1095 * 9 + -14771 * 1) === m.ia ? null : (I = pr(I, f, m.ia), I === null ? null : m.Aa(I));
    }
    var rn = {};
    function yg(I, f) {
      for (void (287 * 7 + -282 + -157 * 11) === f && J("ptr should not be undefined"); I.ia; ) f = I.qa(f), I = I.ia;
      return rn[f];
    }
    function zn(I, f) {
      f.fa && f.da || _n("makeClassHandle requires ptr and ptrType"), !!f.ha != !!f.ga && _n("Both smartPtrType and smartPtr must be specified");
      var m = {};
      m.value = 1, f.count = m;
      var y = {};
      y.value = f;
      var S = {};
      return S.A = y, nn(Object.create(I, S));
    }
    function Ot(I, f, m, y) {
      this.name = I, this.ea = f, this.ua = m, this.ra = y, this.sa = !(-9494 + -15 * -633), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-5246 + 1 * -7355 + 12601), void (5938 * -1 + 1 * -3165 + 9103) !== f.ia ? this.toWireType = bg : (this.toWireType = y ? mg : Ag, this.ka = null);
    }
    function mr(I, f, m) {
      t.hasOwnProperty(I) || _n("Replacing nonexistant public symbol"), void (-6093 + -641 * 14 + -1 * -15067) !== t[I].ja && m !== void 0 ? t[I].ja[m] = f : (t[I] = f, t[I].ya = m);
    }
    function Ft(I, f) {
      I = Ue(I);
      var m = Co(I, f);
      return typeof m != "function" && J("unknown function pointer with signature " + I + ": " + f), m;
    }
    var br = void (-14 * 317 + -7836 + 646 * 19);
    function Ar(I) {
      I = Pr(I);
      var f = Ue(I);
      return Zt(I), f;
    }
    function an(I, f) {
      function m(w) {
        S[w] || $t[w] || (Jn[w] ? Jn[w].forEach(m) : (y.push(w), S[w] = !(-4 * 1339 + -39 * 171 + 37 * 325)));
      }
      var y = [], S = {};
      throw f.forEach(m), new br(I + ": " + y.map(Ar).join([", "]));
    }
    function yr(I, f) {
      for (var m = [], y = 27 * -37 + 3277 * -3 + 19 * 570; y < I; y++) m.push(re[(f >> 1 * 5081 + -1 * 6875 + 1796) + y]);
      return m;
    }
    function qn(I) {
      for (; I.length; ) {
        var f = I.pop();
        I.pop()(f);
      }
    }
    function Wr(I, f, m) {
      return I instanceof Object || J(m + ' with invalid "this": ' + I), I instanceof f.ea.constructor || J(m + ' incompatible with "this" of type ' + I.constructor.name), I.A.da || J("cannot call emscripten binding method " + m + " on deleted object"), Un(I.A.da, I.A.fa.ea, f.ea);
    }
    var vr = {};
    vr.value = void (-591 * 15 + 2255 + 6610);
    var Sr = {};
    Sr.value = null;
    var wr = {};
    wr.value = !(-3759 + -3759 * -1);
    var Br = {};
    Br.value = !(3360 + 73 * -79 + 2408);
    var vo = [], at = [{}, vr, Sr, wr, Br];
    function So(I) {
      10702 + -10698 * 1 < I && -2758 + 2953 * 2 + -3148 === --at[I].Ja && (at[I] = void (2036 + -1018 * 2), vo.push(I));
    }
    function S0(I) {
      switch (I) {
        case void (-1977 + -2056 * -1 + 79 * -1):
          return 38 * -197 + -109 * 64 + 14463;
        case null:
          return -265 * 23 + -937 * -7 + -77 * 6;
        case !(1061 * 1 + 6400 + 1 * -7461):
          return 8 * -294 + 1902 + 453;
        case !(-14559 + -14 * -1040):
          return -8696 + -38 * -19 + 3989 * 2;
        default:
          var f = vo.length ? vo.pop() : at.length, m = {};
          return m.Ja = 1, m.value = I, at[f] = m, f;
      }
    }
    function w0(I) {
      if (I === null) return "null";
      var f = typeof I;
      return f === "object" || f === "array" || f === "function" ? I.toString() : "" + I;
    }
    function Wg(I, f) {
      switch (f) {
        case 9659 + -333 * 29:
          return function(m) {
            return this.fromWireType(Me[m >> 2]);
          };
        case 382 * 10 + -29 * 197 + -948 * -2:
          return function(m) {
            return this.fromWireType(it[m >> -7465 + 5 * -555 + -1 * -10243]);
          };
        default:
          throw new TypeError("Unknown float type: " + I);
      }
    }
    function vg(I) {
      var f = Function;
      if (!(f instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof f + " which is not a function");
      var m = mo(f.name || "unknownFunctionName", function() {
      });
      return m.prototype = f.prototype, m = new m(), I = f.apply(m, I), I instanceof Object ? I : m;
    }
    function Sg(I, f, m) {
      switch (f) {
        case 1774 + -37 * 155 + 233 * 17:
          return m ? function(y) {
            return Ce[y];
          } : function(y) {
            return he[y];
          };
        case 916 + 4898 * -1 + 3983:
          return m ? function(y) {
            return Oe[y >> 1 * -2149 + 9058 + -6908];
          } : function(y) {
            return It[y >> 1];
          };
        case 4621 + -149 * 31:
          return m ? function(y) {
            return re[y >> 149 * -4 + -2059 * -3 + 7 * -797];
          } : function(y) {
            return Ze[y >> 1 * -7088 + 1 * -5677 + -751 * -17];
          };
        default:
          throw new TypeError("Unknown integer type: " + I);
      }
    }
    function wo(I) {
      return I || J("Cannot use deleted val. handle = " + I), at[I].value;
    }
    function Gr(I, f) {
      var m = $t[I];
      return void (2 * 74 + 2 * 1819 + 3 * -1262) === m && J(f + " has unknown type " + Ar(I)), m;
    }
    var wg = {}, kr = {};
    function Hr() {
      if (!Bo) {
        var I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: a || "./this.program" }, f;
        for (f in kr) I[f] = kr[f];
        var m = [];
        for (f in I) m.push(f + "=" + I[f]);
        Bo = m;
      }
      return Bo;
    }
    var Bo, Or = [];
    function Zr(I) {
      var f = {}, m;
      for (m in I) (function(y) {
        var S = I[y];
        f[y] = typeof S == "function" ? function() {
          Or.push(y);
          try {
            return S.apply(null, arguments);
          } finally {
            if (p) return;
            var w = Or.pop();
            A(w === y);
          }
        } : S;
      })(m);
      return f;
    }
    for (var Kr = Array(-2953 * -1 + -1999 * 3 + 1 * 3300), $n = 1 * -6389 + -2 * 2693 + 785 * 15; -2986 * 1 + -71 * -69 + 1657 * -1 > $n; ++$n) Kr[$n] = String.fromCharCode($n);
    ur = Kr, W0 = t.BindingError = bo("BindingError"), lr = t.InternalError = bo("InternalError"), Dt.prototype.isAliasOf = function(I) {
      if (!(this instanceof Dt && I instanceof Dt)) return !(-1 * -2555 + 175 * 35 + -8679 * 1);
      var f = this.A.fa.ea, m = this.A.da, y = I.A.fa.ea;
      for (I = I.A.da; f.ia; ) m = f.qa(m), f = f.ia;
      for (; y.ia; ) I = y.qa(I), y = y.ia;
      return f === y && m === I;
    }, Dt.prototype.clone = function() {
      if (this.A.da || Ao(this), this.A.pa) return this.A.count.value += 1, this;
      var I = nn(Object.create(Object.getPrototypeOf(this), { A: { value: Cg(this.A) } }));
      return I.A.count.value += 9 * -927 + 148 * 22 + 848 * 6, I.A.oa = !(-11 * -809 + 57 * -65 + -5193), I;
    }, Dt.prototype.delete = function() {
      this.A.da || Ao(this), this.A.oa && !this.A.pa && J("Object already scheduled for deletion"), Ir(this), fr(this.A), this.A.pa || (this.A.ga = void (-3328 + 11 * -261 + 6199 * 1), this.A.da = void (1 * -8293 + 69 + 2 * 4112));
    }, Dt.prototype.isDeleted = function() {
      return !this.A.da;
    }, Dt.prototype.deleteLater = function() {
      return this.A.da || Ao(this), this.A.oa && !this.A.pa && J("Object already scheduled for deletion"), on.push(this), 1 * -7589 + -3083 + 1 * 10673 === on.length && xn && xn(Wo), this.A.oa = !(9 * 321 + 5575 + -8464), this;
    }, Ot.prototype.Da = function(I) {
      return this.wa && (I = this.wa(I)), I;
    }, Ot.prototype.va = function(I) {
      this.na && this.na(I);
    }, Ot.prototype.argPackAdvance = -105 * 38 + 5915 + -1917, Ot.prototype.readValueFromPointer = Qn, Ot.prototype.deleteObject = function(I) {
      I !== null && I.delete();
    }, Ot.prototype.fromWireType = function(I) {
      function f() {
        return this.sa ? zn(this.ea.ma, { fa: this.Ga, da: m, ha: this, ga: I }) : zn(this.ea.ma, { fa: this, da: I });
      }
      var m = this.Da(I);
      if (!m) return this.va(I), null;
      var y = yg(this.ea, m);
      if (void (541 * 15 + -7547 * -1 + -382 * 41) !== y)
        return -1177 + 1 * -1553 + 2730 === y.A.count.value ? (y.A.da = m, y.A.ga = I, y.clone()) : (y = y.clone(), this.va(I), y);
      if (y = this.ea.Ca(m), y = Cr[y], !y) return f.call(this);
      y = this.ra ? y.za : y.pointerType;
      var S = pr(m, this.ea, y.ea);
      return S === null ? f.call(this) : this.sa ? zn(y.ea.ma, { fa: y, da: S, ha: this, ga: I }) : zn(y.ea.ma, { fa: y, da: S });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(rn).length;
    }, t.getLiveInheritedInstances = function() {
      var I = [], f;
      for (f in rn) rn.hasOwnProperty(f) && I.push(rn[f]);
      return I;
    }, t.flushPendingDeletes = Wo, t.setDelayFunction = function(I) {
      xn = I, on.length && xn && xn(Wo);
    }, br = t.UnboundTypeError = bo("UnboundTypeError"), t.count_emval_handles = function() {
      for (var I = 8167 + 2 * 2050 + -423 * 29, f = -3840 + 14 * 56 + -1 * -3061; f < at.length; ++f) void (-9e3 + -20 * -450) !== at[f] && ++I;
      return I;
    }, t.get_first_emval = function() {
      for (var I = -7255 * -1 + 847 * 1 + 8097 * -1; I < at.length; ++I) if (void (281 * -11 + 6306 + -3215) !== at[I]) return at[I];
      return null;
    }, ye.push({ Ba: function() {
      Rr();
    } });
    var Bg = { z: function(I) {
      return ex(I + (-1594 + 70 * 23)) + (5657 + -5641 * 1);
    }, u: function(I, f, m) {
      throw new fg(I).Fa(f, m), "uncaught_exception" in jn ? jn.xa++ : jn.xa = 2559 * -1 + 2030 * -1 + 4590, I;
    }, w: function(I, f, m, y, S) {
      var w = ho(m);
      f = Ue(f), Ht(I, { name: f, fromWireType: function(H) {
        return !!H;
      }, toWireType: function(H, G) {
        return G ? y : S;
      }, argPackAdvance: 8, readValueFromPointer: function(H) {
        if (-4483 + -1 * 7255 + 11739 === m) var G = Ce;
        else if (-1 * 3546 + 7 * -211 + -335 * -15 === m) G = Oe;
        else if (m === 4) G = re;
        else throw new TypeError("Unknown boolean type size: " + f);
        return this.fromWireType(G[H >> w]);
      }, ka: null });
    }, h: function(I, f, m, y, S, w, H, G, K, R, P, V, $) {
      P = Ue(P), w = Ft(S, w), G && (G = Ft(H, G)), R && (R = Ft(K, R)), $ = Ft(V, $);
      var We = po(P);
      hr(We, function() {
        an("Cannot construct " + P + " due to unbound types", [y]);
      }), v0([I, f, m], y ? [y] : [], function(T) {
        if (T = T[123 * 12 + 59 * -139 + 5 * 1345], y) var vt = T.ea, Ne = vt.ma;
        else Ne = Dt.prototype;
        T = mo(We, function() {
          if (Object.getPrototypeOf(this) !== B0) throw new W0("Use 'new' to construct " + P);
          if (void (-5757 + 1747 * -1 + -134 * -56) === G0.la) throw new W0(P + " has no accessible constructor");
          var Tr = G0.la[arguments.length];
          if (void (1851 + -6 * -373 + -4089) === Tr) throw new W0("Tried to invoke ctor of " + P + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(G0.la).toString() + ") parameters instead!");
          return Tr.apply(this, arguments);
        });
        var tt = {};
        tt.value = T;
        var e0 = {};
        e0.constructor = tt;
        var B0 = Object.create(Ne, e0);
        T.prototype = B0;
        var G0 = new pg(P, T, B0, $, vt, w, G, R);
        vt = new Ot(P, G0, !(2 * -2115 + -1 * -4909 + -7 * 97), !(-6 * 97 + -12 * -202 + -1841)), Ne = new Ot(P + "*", G0, !(216 * -6 + -13 * -126 + -341), !(-58 * 22 + 4 * -1388 + 6829));
        var Vr = new Ot(P + " const*", G0, !(253 * 27 + -3 * -811 + -9263), !(6074 + 3271 * -2 + 468)), ko = {};
        return ko.pointerType = Ne, ko.za = Vr, Cr[I] = ko, mr(We, T), [vt, Ne, Vr];
      });
    }, g: function(I, f, m, y, S, w) {
      A(1241 + 17 * -73 < f);
      var H = yr(f, m);
      S = Ft(y, S);
      var G = [w], K = [];
      v0([], [I], function(R) {
        R = R[7667 + 5 * -1913 + 1898];
        var P = "constructor " + R.name;
        if (void (-6086 + 25 * -245 + 12211) === R.ea.la && (R.ea.la = []), R.ea.la[f - (-53 * 21 + 894 * -1 + 502 * 4)] !== void 0) throw new W0("Cannot register multiple constructors with identical number of parameters (" + (f - (3 * -656 + -46 * -74 + 1435 * -1)) + ") for class '" + R.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return R.ea.la[f - (4469 + 2 * -2234)] = function() {
          an("Cannot construct " + R.name + " due to unbound types", H);
        }, v0([], H, function(V) {
          return R.ea.la[f - (-6876 + -13 * -529)] = function() {
            arguments.length !== f - (-6424 + -1595 * -1 + 69 * 70) && J(P + " called with " + arguments.length + " arguments, expected " + (f - (-7933 + 44 * 216 + -1570))), K.length = 4 * 1319 + -9420 + 4144, G.length = f;
            for (var $ = -5 * 1394 + -1317 + -4144 * -2; $ < f; ++$) G[$] = V[$].toWireType(K, arguments[$ - (1468 * 1 + 155 * 8 + 2707 * -1)]);
            return $ = S.apply(null, G), qn(K), V[0].fromWireType($);
          }, [];
        }), [];
      });
    }, b: function(I, f, m, y, S, w, H, G, K, R) {
      f = Ue(f), S = Ft(y, S), v0([], [I], function(P) {
        P = P[-914 + -4757 * -1 + -3843];
        var V = P.name + "." + f, $ = { get: function() {
          an("Cannot access " + V + " due to unbound types", [m, H]);
        }, enumerable: !(18 * -485 + -6122 * 1 + 14852), configurable: !(-3453 + -2 * -209 + -1 * -3035) };
        return K ? $.set = function() {
          an("Cannot access " + V + " due to unbound types", [m, H]);
        } : $.set = function() {
          J(V + " is a read-only property");
        }, Object.defineProperty(P.ea.ma, f, $), v0([], K ? [m, H] : [m], function(We) {
          var T = We[0], vt = { get: function() {
            var tt = Wr(this, P, V + " getter");
            return T.fromWireType(S(w, tt));
          }, enumerable: !(1 * -4122 + -4346 + 8468) };
          if (K) {
            K = Ft(G, K);
            var Ne = We[-1141 + 2 * 571];
            vt.set = function(tt) {
              var e0 = Wr(this, P, V + " setter"), B0 = [];
              K(R, e0, Ne.toWireType(B0, tt)), qn(B0);
            };
          }
          return Object.defineProperty(P.ea.ma, f, vt), [];
        }), [];
      });
    }, v: function(I, f) {
      f = Ue(f), Ht(I, { name: f, fromWireType: function(m) {
        var y = at[m].value;
        return So(m), y;
      }, toWireType: function(m, y) {
        return S0(y);
      }, argPackAdvance: 8, readValueFromPointer: Qn, ka: null });
    }, m: function(I, f, m) {
      m = ho(m), f = Ue(f), Ht(I, { name: f, fromWireType: function(y) {
        return y;
      }, toWireType: function(y, S) {
        if (typeof S != "number" && typeof S != "boolean") throw new TypeError('Cannot convert "' + w0(S) + '" to ' + this.name);
        return S;
      }, argPackAdvance: 8, readValueFromPointer: Wg(f, m), ka: null });
    }, c: function(I, f, m, y, S, w) {
      var H = yr(f, m);
      I = Ue(I), S = Ft(y, S), hr(I, function() {
        an("Cannot call " + I + " due to unbound types", H);
      }, f - (-1 * 3919 + 4099 + -179)), v0([], H, function(G) {
        var K = I, R = I;
        G = [G[-9678 + -377 * 2 + 163 * 64], null].concat(G.slice(1));
        var P = S, V = G.length;
        5906 + 2 * 3983 + -13870 > V && J("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var $ = G[-1 * -466 + 217 + -341 * 2] !== null && !1, We = !1, T = 1 * -8597 + -8303 + 1 * 16901; T < G.length; ++T) if (G[T] !== null && void (-2407 + 83 * 29) === G[T].ka) {
          We = !(-4333 * -1 + -3414 + -919 * 1);
          break;
        }
        var vt = G[3911 + -263 * -1 + -4174].name !== "void", Ne = "", tt = "";
        for (T = -9976 + -4 * -2494; T < V - (173 * -43 + -6446 + -13887 * -1); ++T) Ne += (6213 + 1 * 1999 + -2053 * 4 !== T ? ", " : "") + "arg" + T, tt += (4711 * -1 + 28 * 298 + 519 * -7 !== T ? ", " : "") + "arg" + T + "Wired";
        R = "return function " + po(R) + "(" + Ne + `) {
if (arguments.length !== ` + (V - (3735 + 233 * 2 + -19 * 221)) + `) {
throwBindingError('function ` + R + " called with ' + arguments.length + ' arguments, expected " + (V - (-2518 + 180 * 14)) + ` args!');
}
`, We && (R += `var destructors = [];
`);
        var e0 = We ? "destructors" : "null";
        for (Ne = "throwBindingError invoker fn runDestructors retType classParam".split(" "), P = [J, P, w, qn, G[6837 + -807 * 7 + -108 * 11], G[34 * -107 + -4 * 932 + -139 * -53]], $ && (R += "var thisWired = classParam.toWireType(" + e0 + `, this);
`), T = 1631 * 5 + 2603 + -10758; T < V - (470 * -14 + -1642 * -1 + 4940); ++T) R += "var arg" + T + "Wired = argType" + T + ".toWireType(" + e0 + ", arg" + T + "); // " + G[T + (9626 * 1 + -1 * 3765 + -5859)].name + `
`, Ne.push("argType" + T), P.push(G[T + (8897 + 9122 * 1 + 1 * -18017)]);
        if ($ && (tt = "thisWired" + (-1 * 1282 + -3225 + 4507 < tt.length ? ", " : "") + tt), R += (vt ? "var rv = " : "") + "invoker(fn" + (13 * -359 + 4374 + 293 < tt.length ? ", " : "") + tt + `);
`, We) R += `runDestructors(destructors);
`;
        else
          for (T = $ ? -2 * 4242 + 5400 + 3085 : 5618 + -19 * 436 + -23 * -116; T < G.length; ++T) V = 1 * 7186 + 5305 + -12490 === T ? "thisWired" : "arg" + (T - (-1025 + 157 * -19 + -10 * -401)) + "Wired", G[T].ka !== null && (R += V + "_dtor(" + V + "); // " + G[T].name + `
`, Ne.push(V + "_dtor"), P.push(G[T].ka));
        return vt && (R += `var ret = retType.fromWireType(rv);
return ret;
`), Ne.push(R + `}
`), G = vg(Ne).apply(null, P), mr(K, G, f - 1), [];
      });
    }, e: function(I, f, m, y, S) {
      function w(R) {
        return R;
      }
      f = Ue(f), -(9135 + -1 * 3018 + -1529 * 4) === S && (S = 7419156027 + 3928274491 + -233363 * 30221);
      var H = ho(m);
      if (8650 + -77 * 23 + 3 * -2293 === y) {
        var G = 32 - 8 * m;
        w = function(R) {
          return R << G >>> G;
        };
      }
      var K = f.indexOf("unsigned") != -1;
      Ht(I, { name: f, fromWireType: w, toWireType: function(R, P) {
        if (typeof P != "number" && typeof P != "boolean") throw new TypeError('Cannot convert "' + w0(P) + '" to ' + this.name);
        if (P < y || P > S) throw new TypeError('Passing a number "' + w0(P) + '" from JS side to C/C++ side to an argument of type "' + f + '", which is outside the valid range [' + y + ", " + S + "]!");
        return K ? P >>> -302 * 3 + 26 * -197 + -2 * -3014 : P | 1 * -563 + 64 + 499;
      }, argPackAdvance: 8, readValueFromPointer: Sg(f, H, y !== 0), ka: null });
    }, d: function(I, f, m) {
      function y(G) {
        G >>= 3785 * 1 + 4131 + -6 * 1319;
        var K = Ze;
        return new S(Q, K[G + (1 * -725 + -233 * -3 + -27 * -1)], K[G]);
      }
      var S = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][f];
      m = Ue(m);
      var w = {};
      w.name = m, w.fromWireType = y, w.argPackAdvance = 8, w.readValueFromPointer = y;
      var H = {};
      H.Ea = !(2084 + -8 * 458 + 1580), Ht(I, w, H);
    }, n: function(I, f) {
      f = Ue(f);
      var m = f === "std::string";
      Ht(I, { name: f, fromWireType: function(y) {
        var S = Ze[y >> 2];
        if (m) for (var w = y + (2474 * 3 + 9160 + -16578), H = 0; H <= S; ++H) {
          var G = y + 4 + H;
          if (H == S || he[G] == 0) {
            if (w) {
              var K = w, R = he, P = K + (G - w);
              for (w = K; R[w] && !(w >= P); ) ++w;
              if (-1 * 1231 + 2 * -1493 + -17 * -249 < w - K && R.subarray && d) K = d.decode(R.subarray(K, w));
              else {
                for (P = ""; K < w; ) {
                  var V = R[K++];
                  if (V & -3842 + -2 * 1238 + 6446) {
                    var $ = R[K++] & 63;
                    if (-8683 + -71 * -125 == (V & -163 * -5 + 8653 * 1 + 1 * -9244)) P += String.fromCharCode((V & 8737 * 1 + -927 * -3 + -3829 * 3) << -3144 * 1 + -4293 + 7443 | $);
                    else {
                      var We = R[K++] & 63;
                      V = -3 * 274 + -2599 + 3645 == (V & -8205 + -109 * 17 + 10298) ? (V & 7201 + 3593 * -2) << 5959 + 313 * -19 | $ << 15 * 134 + -8998 + 6994 | We : (V & -4512 + -678 * -1 + 23 * 167) << 719 * -13 + 112 * 16 + 7573 | $ << 12 | We << -2460 + -3 * 2685 + 10521 | R[K++] & 2424 + -1 * 2361, 93966 + -1673 * -22 + -65236 > V ? P += String.fromCharCode(V) : (V -= 90822 + -57931 * -1 + 83217 * -1, P += String.fromCharCode(-22647 * 3 + -82414 + 1 * 205651 | V >> 3 * -1009 + 565 + 412 * 6, 94279 + -37959 * 1 | V & -7 * 623 + -1 * -6281 + -897));
                    }
                  } else P += String.fromCharCode(V);
                }
                K = P;
              }
            } else K = "";
            if (void (2342 * -4 + -4593 + -607 * -23) === T) var T = K;
            else T += String.fromCharCode(2 * -3235 + 9621 + 1 * -3151), T += K;
            w = G + 1;
          }
        }
        else {
          for (T = Array(S), H = -1 * -3629 + -110 + -3519; H < S; ++H) T[H] = String.fromCharCode(he[y + (31 * -211 + 248 * 20 + -317 * -5) + H]);
          T = T.join("");
        }
        return Zt(y), T;
      }, toWireType: function(y, S) {
        S instanceof ArrayBuffer && (S = new Uint8Array(S));
        var w = typeof S == "string";
        w || S instanceof Uint8Array || S instanceof Uint8ClampedArray || S instanceof Int8Array || J("Cannot pass non-string to std::string");
        var H = (m && w ? function() {
          for (var R = 4549 + 659 * 9 + -10480, P = -5 * 794 + 9036 * 1 + 2533 * -2; P < S.length; ++P) {
            var V = S.charCodeAt(P);
            -19381 * 4 + -64083 + 8561 * 23 <= V && 50876 * -1 + -53472 + -53897 * -3 >= V && (V = -1 * -12833 + -101667 + 86 * 1795 + ((V & -4171 * -2 + -4378 + -2941) << 10088 + 10078 * -1) | S.charCodeAt(++P) & -8201 * -1 + -1 * 7964 + 786), -9241 + 131 * -7 + 10285 >= V ? ++R : R = 4011 * -1 + -22 * -393 + -2588 >= V ? R + 2 : -1 * 29209 + -10896 * 1 + 105640 >= V ? R + (-5217 + 5377 * -1 + -10597 * -1) : R + (1964 + -87 * -95 + -10225);
          }
          return R;
        } : function() {
          return S.length;
        })(), G = ex(-477 * -1 + 5632 + -6105 + H + 1);
        if (Ze[G >> -30 * -321 + -2319 * -1 + 1 * -11947] = H, m && w) W(S, G + (9816 + 2234 * -1 + 2 * -3789), H + (-6166 + 86 * -87 + 1 * 13649));
        else if (w) for (w = 4 * -751 + -1649 * 3 + 7951; w < H; ++w) {
          var K = S.charCodeAt(w);
          2638 * 1 + 3945 * -1 + -1 * -1562 < K && (Zt(G), J("String has UTF-16 code units that do not fit in 8 bits")), he[G + 4 + w] = K;
        }
        else
          for (w = 6235 + -215 * 29; w < H; ++w) he[G + (569 * -13 + 7101 + 300) + w] = S[w];
        return y !== null && y.push(Zt, G), G;
      }, argPackAdvance: 8, readValueFromPointer: Qn, ka: function(y) {
        Zt(y);
      } });
    }, j: function(I, f, m) {
      if (m = Ue(m), 438 * 10 + -311 * 30 + 1 * 4952 === f) var y = D, S = E, w = F, H = function() {
        return It;
      }, G = 134 * -71 + 6092 + 3423;
      else f === 4 && (y = k, S = _, w = fe, H = function() {
        return Ze;
      }, G = -4220 + -4879 * 1 + -1 * -9101);
      Ht(I, { name: m, fromWireType: function(K) {
        for (var R = Ze[K >> 2], P = H(), V, $ = K + (3451 + -111 * 2 + -43 * 75), We = 7594 + 1 * -7594; We <= R; ++We) {
          var T = K + 4 + We * f;
          (We == R || 1 * -681 + -3 * -2039 + 9 * -604 == P[T >> G]) && ($ = y($, T - $), void (2141 + 1 * 3800 + -13 * 457) === V ? V = $ : (V += String.fromCharCode(-71 * 55 + -1 * 5006 + 8911), V += $), $ = T + f);
        }
        return Zt(K), V;
      }, toWireType: function(K, R) {
        typeof R != "string" && J("Cannot pass non-string to C++ string type " + m);
        var P = w(R), V = ex(-59 * 3 + -9477 + -11 * -878 + P + f);
        return Ze[V >> 2] = P >> G, S(R, V + 4, P + f), K !== null && K.push(Zt, V), V;
      }, argPackAdvance: 8, readValueFromPointer: Qn, ka: function(K) {
        Zt(K);
      } });
    }, x: function(I, f) {
      f = Ue(f);
      var m = {};
      m.Qa = !(-4 * 1839 + -2972 * -3 + -24 * 65), m.name = f, m.argPackAdvance = 0, m.fromWireType = function() {
      }, m.toWireType = function() {
      }, Ht(I, m);
    }, k: function(I, f, m) {
      I = wo(I), f = Gr(f, "emval::as");
      var y = [], S = S0(y);
      return re[m >> -158 * 61 + 1 * 4999 + 4641] = S, f.toWireType(y, I);
    }, i: So, l: function(I, f) {
      return I = wo(I), f = wo(f), S0(I[f]);
    }, p: function(I) {
      var f = wg[I];
      return S0(f === void 0 ? Ue(I) : f);
    }, o: function(I) {
      qn(at[I].value), So(I);
    }, y: function(I, f) {
      return I = Gr(I, "_emval_take_value"), I = I.readValueFromPointer(f), S0(I);
    }, f: function() {
      rt();
    }, q: function(I, f, m) {
      he.copyWithin(I, f, f + m);
    }, r: function(I) {
      I >>>= -2 * -691 + 9818 + 10 * -1120;
      var f = he.length;
      if (736627470 + -26 * -64448951 + -264816548 < I) return !1;
      for (var m = 2 * 3683 + 39 * 118 + 3989 * -3; -78 * 51 + 691 * -1 + 4673 >= m; m *= 2) {
        var y = f * (1 + 0.2 / m);
        y = Math.min(y, I + (199366569 + 2079169 * 43 + -188107540)), y = Math.max(-18645086 + -8635 * 2453 + 1 * 56603957, I, y), -1 * 7628 + 3044 * -1 + -232 * -46 < y % (37084 * -3 + 70076 + 106712) && (y += -104445 + 1 * -92860 + 262841 - y % (23550 + -19 * -5757 + 11 * -6127));
        e: {
          try {
            h.grow(Math.min(3880513524 + -1253105221 * -2 + 208809 * -20302, y) - Q.byteLength + (68204 + -1 * -44053 + 39 * -1198) >>> -7431 + -19 * 191 + 4 * 2769), je(h.buffer);
            var S = 1;
            break e;
          } catch {
          }
          S = void (4331 * -2 + 1 * -1061 + 9723);
        }
        if (S) return !0;
      }
      return !(-1 * -4214 + 8558 * 1 + -3 * 4257);
    }, s: function(I, f) {
      var m = 0;
      return Hr().forEach(function(y, S) {
        var w = f + m;
        for (S = re[I + (225 * 2 + 401 * 9 + -5 * 811) * S >> 9618 + 9011 * 1 + 21 * -887] = w, w = 0; w < y.length; ++w) Ce[S++ >> -7570 + -281 * 7 + 187 * 51] = y.charCodeAt(w);
        Ce[S >> 7677 * 1 + -1 * 1145 + 23 * -284] = 13 * -254 + -5472 + -4387 * -2, m += y.length + 1;
      }), -3233 + -3233 * -1;
    }, t: function(I, f) {
      var m = Hr();
      re[I >> -821 + -957 * 3 + 2 * 1847] = m.length;
      var y = 0;
      return m.forEach(function(S) {
        y += S.length + (-46 * 184 + 186 * -10 + 10325);
      }), re[f >> 2 * -37 + 3917 + -3841] = y, -1 * -1037 + -2006 + -323 * -3;
    }, a: h };
    (function() {
      function I(H) {
        H = H.exports, H = Zr(H), t.asm = H, et--, t.monitorRunDependencies && t.monitorRunDependencies(et), -1 * -956 + -3 * 1693 + -589 * -7 == et && yt && (H = yt, yt = null, H());
      }
      function f(H) {
        I(H.instance);
      }
      function m(H) {
        return Ig().then(function(G) {
          return WebAssembly.instantiate(G, S);
        }).then(H, function(G) {
          C("failed to asynchronously prepare wasm: " + G), rt(G);
        });
      }
      var y = {};
      y.a = Bg;
      var S = y;
      if (et++, t.monitorRunDependencies && t.monitorRunDependencies(et), t.instantiateWasm) try {
        var w = t.instantiateWasm(S, I);
        return w = Zr(w);
      } catch (H) {
        return C("Module.instantiateWasm callback failed with error: " + H), !(1 * 7977 + 9729 * 1 + -17705);
      }
      return function() {
        if (l || typeof WebAssembly.instantiateStreaming != "function" || Wt() || zt("file://") || typeof fetch != "function") return m(f);
        var H = {};
        H.credentials = "same-origin", fetch(ft, H).then(function(G) {
          return WebAssembly.instantiateStreaming(G, S).then(f, function(K) {
            return C("wasm streaming compile failed: " + K), C("falling back to ArrayBuffer instantiation"), m(f);
          });
        });
      }(), {};
    })();
    var Rr = t.___wasm_call_ctors = function() {
      return (Rr = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, ex = t._malloc = function() {
      return (ex = t._malloc = t.asm.C).apply(null, arguments);
    }, Zt = t._free = function() {
      return (Zt = t._free = t.asm.D).apply(null, arguments);
    }, Pr = t.___getTypeName = function() {
      return (Pr = t.___getTypeName = t.asm.E).apply(null, arguments);
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
    var tx;
    yt = function I() {
      tx || Go(), tx || (yt = I);
    };
    function Go() {
      function I() {
        if (!tx && (tx = !(-83 * -17 + 2 * 97 + 107 * -15), t.calledRun = !(-325 * -9 + -8999 * -1 + -4 * 2981), !p)) {
          if (Mn(ye), Mn(Ee), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var f = t.postRun.shift();
            _e.unshift(f);
          }
          Mn(_e);
        }
      }
      if (!(-654 + 1 * 2449 + -1795 * 1 < et)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) A0();
        Mn(Je), 7855 + -3 * -1685 + -12910 < et || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, 1 * -2273 + 1711 + 563), I();
        }, 1)) : I());
      }
    }
    if (t.run = Go, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); -2248 * 1 + 1264 + 984 < t.preInit.length; ) t.preInit.pop()();
    return Go(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Fc = Symbol("Comlink.proxy"), L1 = Symbol("Comlink.endpoint"), D1 = Symbol("Comlink.releaseProxy"), Mo = Symbol("Comlink.finalizer"), Bx = Symbol("Comlink.thrown"), Yc = (x) => typeof x == "object" && x !== null || typeof x == "function", F1 = {
  canHandle: (x) => Yc(x) && x[Fc],
  serialize(x) {
    const { port1: o, port2: t } = new MessageChannel();
    return Mc(x, o), [t, [t]];
  },
  deserialize(x) {
    return x.start(), Jc(x);
  }
}, Y1 = {
  canHandle: (x) => Yc(x) && Bx in x,
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
}, Xc = /* @__PURE__ */ new Map([
  ["proxy", F1],
  ["throw", Y1]
]);
function X1(x, o) {
  for (const t of x)
    if (o === t || t === "*" || t instanceof RegExp && t.test(o))
      return !0;
  return !1;
}
function Mc(x, o = globalThis, t = ["*"]) {
  o.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!X1(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: i, type: r, path: a } = Object.assign({ path: [] }, n.data), s = (n.data.argumentList || []).map(a0);
    let c;
    try {
      const u = a.slice(0, -1).reduce((C, l) => C[l], x), g = a.reduce((C, l) => C[l], x);
      switch (r) {
        case "GET":
          c = g;
          break;
        case "SET":
          u[a.slice(-1)[0]] = a0(n.data.value), c = !0;
          break;
        case "APPLY":
          c = g.apply(u, s);
          break;
        case "CONSTRUCT":
          {
            const C = new g(...s);
            c = Q1(C);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: C, port2: l } = new MessageChannel();
            Mc(x, l), c = U1(C, [C]);
          }
          break;
        case "RELEASE":
          c = void 0;
          break;
        default:
          return;
      }
    } catch (u) {
      c = { value: u, [Bx]: 0 };
    }
    Promise.resolve(c).catch((u) => ({ value: u, [Bx]: 0 })).then((u) => {
      const [g, C] = qx(u);
      o.postMessage(Object.assign(Object.assign({}, g), { id: i }), C), r === "RELEASE" && (o.removeEventListener("message", e), jc(o), Mo in x && typeof x[Mo] == "function" && x[Mo]());
    }).catch((u) => {
      const [g, C] = qx({
        value: new TypeError("Unserializable return value"),
        [Bx]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, g), { id: i }), C);
    });
  }), o.start && o.start();
}
function M1(x) {
  return x.constructor.name === "MessagePort";
}
function jc(x) {
  M1(x) && x.close();
}
function Jc(x, o) {
  return Zi(x, [], o);
}
function dx(x) {
  if (x)
    throw new Error("Proxy has been released and is not useable");
}
function _c(x) {
  return P0(x, {
    type: "RELEASE"
  }).then(() => {
    jc(x);
  });
}
const Qx = /* @__PURE__ */ new WeakMap(), zx = "FinalizationRegistry" in globalThis && new FinalizationRegistry((x) => {
  const o = (Qx.get(x) || 0) - 1;
  Qx.set(x, o), o === 0 && _c(x);
});
function j1(x, o) {
  const t = (Qx.get(o) || 0) + 1;
  Qx.set(o, t), zx && zx.register(x, o, x);
}
function J1(x) {
  zx && zx.unregister(x);
}
function Zi(x, o = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(i, r) {
      if (dx(e), r === D1)
        return () => {
          J1(n), _c(x), e = !0;
        };
      if (r === "then") {
        if (o.length === 0)
          return { then: () => n };
        const a = P0(x, {
          type: "GET",
          path: o.map((s) => s.toString())
        }).then(a0);
        return a.then.bind(a);
      }
      return Zi(x, [...o, r]);
    },
    set(i, r, a) {
      dx(e);
      const [s, c] = qx(a);
      return P0(x, {
        type: "SET",
        path: [...o, r].map((u) => u.toString()),
        value: s
      }, c).then(a0);
    },
    apply(i, r, a) {
      dx(e);
      const s = o[o.length - 1];
      if (s === L1)
        return P0(x, {
          type: "ENDPOINT"
        }).then(a0);
      if (s === "bind")
        return Zi(x, o.slice(0, -1));
      const [c, u] = Ta(a);
      return P0(x, {
        type: "APPLY",
        path: o.map((g) => g.toString()),
        argumentList: c
      }, u).then(a0);
    },
    construct(i, r) {
      dx(e);
      const [a, s] = Ta(r);
      return P0(x, {
        type: "CONSTRUCT",
        path: o.map((c) => c.toString()),
        argumentList: a
      }, s).then(a0);
    }
  });
  return j1(n, x), n;
}
function _1(x) {
  return Array.prototype.concat.apply([], x);
}
function Ta(x) {
  const o = x.map(qx);
  return [o.map((t) => t[0]), _1(o.map((t) => t[1]))];
}
const Uc = /* @__PURE__ */ new WeakMap();
function U1(x, o) {
  return Uc.set(x, o), x;
}
function Q1(x) {
  return Object.assign(x, { [Fc]: !0 });
}
function qx(x) {
  for (const [o, t] of Xc)
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
    Uc.get(x) || []
  ];
}
function a0(x) {
  switch (x.type) {
    case "HANDLER":
      return Xc.get(x.name).deserialize(x.value);
    case "RAW":
      return x.value;
  }
}
function P0(x, o, t) {
  return new Promise((e) => {
    const n = z1();
    x.addEventListener("message", function i(r) {
      !r.data || !r.data.id || r.data.id !== n || (x.removeEventListener("message", i), e(r.data));
    }), x.start && x.start(), x.postMessage(Object.assign({ id: n }, o), t);
  });
}
function z1() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const Qc = "dmFyIGNlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgbGUgPSAoYSwgdSwgZSkgPT4gdSBpbiBhID8gY2UoYSwgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IGFbdV0gPSBlOwp2YXIgWW4gPSAoYSwgdSwgZSkgPT4gbGUoYSwgdHlwZW9mIHUgIT0gInN5bWJvbCIgPyB1ICsgIiIgOiB1LCBlKTsKY29uc3Qga3QgPSB7CiAgc2ltZDogInNhbV9zaW1kLndhc20iLAogIHNhbTogInNhbS53YXNtIgp9LCBmZSA9IGFzeW5jICgpID0+IFdlYkFzc2VtYmx5LnZhbGlkYXRlKG5ldyBVaW50OEFycmF5KFswLCA5NywgMTE1LCAxMDksIDEsIDAsIDAsIDAsIDEsIDUsIDEsIDk2LCAwLCAxLCAxMjMsIDMsIDIsIDEsIDAsIDEwLCAxMCwgMSwgOCwgMCwgNjUsIDAsIDI1MywgMTUsIDI1MywgOTgsIDExXSkpOwpjbGFzcyBJIGV4dGVuZHMgRXJyb3IgewogIGNvbnN0cnVjdG9yKGUsIG0pIHsKICAgIHN1cGVyKGUpOwogICAgWW4odGhpcywgImNhdXNlIik7CiAgICB0aGlzLm5hbWUgPSAiQXV0b0NhcHR1cmVFcnJvciIsIHRoaXMuY2F1c2UgPSBtOwogIH0KICAvLyBDaGFuZ2UgdGhpcyB0byBEZWNvcmF0b3Igd2hlbiB0aGV5IHdpbGwgYmUgaW4gc3RhYmxlIHJlbGVhc2UKICBzdGF0aWMgbG9nRXJyb3IoZSkgewogIH0KICBzdGF0aWMgZnJvbUNhbWVyYUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgSSkKICAgICAgcmV0dXJuIGU7CiAgICBsZXQgbTsKICAgIHN3aXRjaCAoZS5uYW1lKSB7CiAgICAgIGNhc2UgIk92ZXJjb25zdHJhaW5lZEVycm9yIjoKICAgICAgICBtID0gIk1pbmltdW0gcXVhbGl0eSByZXF1aXJlbWVudHMgYXJlIG5vdCBtZXQgYnkgeW91ciBjYW1lcmEiOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RSZWFkYWJsZUVycm9yIjoKICAgICAgY2FzZSAiQWJvcnRFcnJvciI6CiAgICAgICAgbSA9ICJUaGUgd2ViY2FtIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYXBwbGljYXRpb24iOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RBbGxvd2VkRXJyb3IiOgogICAgICAgIG0gPSAiVG8gdXNlIHlvdXIgY2FtZXJhLCB5b3UgbXVzdCBhbGxvdyBwZXJtaXNzaW9ucyI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEZvdW5kRXJyb3IiOgogICAgICAgIG0gPSAiVGhlcmUgaXMgbm8gY2FtZXJhIGF2YWlsYWJsZSB0byB5b3UiOwogICAgICAgIGJyZWFrOwogICAgICBkZWZhdWx0OgogICAgICAgIG0gPSAiQW4gdW5rbm93biBjYW1lcmEgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgICAgICBicmVhazsKICAgIH0KICAgIHJldHVybiBuZXcgSShtLCBlKTsKICB9CiAgc3RhdGljIGZyb21FcnJvcihlKSB7CiAgICBpZiAodGhpcy5sb2dFcnJvcihlKSwgZSBpbnN0YW5jZW9mIEkpCiAgICAgIHJldHVybiBlOwogICAgY29uc3QgbSA9ICJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCI7CiAgICByZXR1cm4gbmV3IEkobSk7CiAgfQp9CmNvbnN0IGRlID0gewogIFJHQjogIlJHQiIsCiAgUkdCQTogIlJHQkEiCn0sIGhlID0gKGEpID0+IE51bWJlci5wYXJzZUZsb2F0KGEudG9GaXhlZCgzKSksIHllID0gKGEsIHUpID0+IE1hdGgubWluKGEsIHUpOwp2YXIgcGUgPSBmdW5jdGlvbigpIHsKICB2YXIgYSA9IHR5cGVvZiBkb2N1bWVudCA8ICJ1IiAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ID8gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMgOiB2b2lkIDA7CiAgcmV0dXJuIGZ1bmN0aW9uKHUpIHsKICAgIHUgPSB1IHx8IHt9OwogICAgdmFyIGU7CiAgICBlIHx8IChlID0gdHlwZW9mIHUgPCAidSIgPyB1IDoge30pOwogICAgdmFyIG0sIGc7CiAgICBlLnJlYWR5ID0gbmV3IFByb21pc2UoZnVuY3Rpb24obiwgdCkgewogICAgICBtID0gbiwgZyA9IHQ7CiAgICB9KTsKICAgIHZhciBDID0ge30sIEE7CiAgICBmb3IgKEEgaW4gZSkgZS5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoQ1tBXSA9IGVbQV0pOwogICAgdmFyIE0gPSAiLi90aGlzLnByb2dyYW0iLCBPID0gITEsIFQgPSAhMTsKICAgIE8gPSB0eXBlb2Ygd2luZG93ID09ICJvYmplY3QiLCBUID0gdHlwZW9mIGltcG9ydFNjcmlwdHMgPT0gImZ1bmN0aW9uIjsKICAgIHZhciBfID0gIiIsIFM7CiAgICAoTyB8fCBUKSAmJiAoVCA/IF8gPSBzZWxmLmxvY2F0aW9uLmhyZWYgOiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIChfID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpLCBhICYmIChfID0gYSksIF8uaW5kZXhPZigiYmxvYjoiKSAhPT0gMCA/IF8gPSBfLnN1YnN0cigwLCBfLmxhc3RJbmRleE9mKCIvIikgKyAxKSA6IF8gPSAiIiwgVCAmJiAoUyA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdmFyIHQgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsKICAgICAgcmV0dXJuIHQub3BlbigiR0VUIiwgbiwgITEpLCB0LnJlc3BvbnNlVHlwZSA9ICJhcnJheWJ1ZmZlciIsIHQuc2VuZChudWxsKSwgbmV3IFVpbnQ4QXJyYXkodC5yZXNwb25zZSk7CiAgICB9KSk7CiAgICB2YXIgRSA9IGUucHJpbnRFcnIgfHwgY29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7CiAgICBmb3IgKEEgaW4gQykgQy5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoZVtBXSA9IENbQV0pOwogICAgQyA9IG51bGwsIGUudGhpc1Byb2dyYW0gJiYgKE0gPSBlLnRoaXNQcm9ncmFtKTsKICAgIHZhciBXOwogICAgZS53YXNtQmluYXJ5ICYmIChXID0gZS53YXNtQmluYXJ5KSwgZS5ub0V4aXRSdW50aW1lICYmIGUubm9FeGl0UnVudGltZSwgdHlwZW9mIFdlYkFzc2VtYmx5ICE9ICJvYmplY3QiICYmIHNuKCJubyBuYXRpdmUgd2FzbSBzdXBwb3J0IGRldGVjdGVkIik7CiAgICB2YXIgSCwga24gPSAhMTsKICAgIGZ1bmN0aW9uIEtuKG4pIHsKICAgICAgbiB8fCBzbigiQXNzZXJ0aW9uIGZhaWxlZDogdW5kZWZpbmVkIik7CiAgICB9CiAgICB2YXIgUW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0ZjgiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFV0KG4sIHQsIHIpIHsKICAgICAgdmFyIGkgPSBGOwogICAgICBpZiAoMCA8IHIpIHsKICAgICAgICByID0gdCArIHIgLSAxOwogICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgbi5sZW5ndGg7ICsrbykgewogICAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICBpZiAoNTUyOTYgPD0gcyAmJiA1NzM0MyA+PSBzKSB7CiAgICAgICAgICAgIHZhciBsID0gbi5jaGFyQ29kZUF0KCsrbyk7CiAgICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgICAgfQogICAgICAgICAgaWYgKDEyNyA+PSBzKSB7CiAgICAgICAgICAgIGlmICh0ID49IHIpIGJyZWFrOwogICAgICAgICAgICBpW3QrK10gPSBzOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgaWYgKDIwNDcgPj0gcykgewogICAgICAgICAgICAgIGlmICh0ICsgMSA+PSByKSBicmVhazsKICAgICAgICAgICAgICBpW3QrK10gPSAxOTIgfCBzID4+IDY7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgaWYgKDY1NTM1ID49IHMpIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMiA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDIyNCB8IHMgPj4gMTI7CiAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMyA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDI0MCB8IHMgPj4gMTgsIGlbdCsrXSA9IDEyOCB8IHMgPj4gMTIgJiA2MzsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyA+PiA2ICYgNjM7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyAmIDYzOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBpW3RdID0gMDsKICAgICAgfQogICAgfQogICAgdmFyIHFuID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGYtMTZsZSIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gRHQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gbiA+PiAxLCBpID0gciArIHQgLyAyOyAhKHIgPj0gaSkgJiYgeW5bcl07ICkgKytyOwogICAgICBpZiAociA8PD0gMSwgMzIgPCByIC0gbiAmJiBxbikgcmV0dXJuIHFuLmRlY29kZShGLnN1YmFycmF5KG4sIHIpKTsKICAgICAgZm9yIChyID0gMCwgaSA9ICIiOyA7ICkgewogICAgICAgIHZhciBvID0gUVtuICsgMiAqIHIgPj4gMV07CiAgICAgICAgaWYgKG8gPT0gMCB8fCByID09IHQgLyAyKSByZXR1cm4gaTsKICAgICAgICArK3IsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQnQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDIgPiByKSByZXR1cm4gMDsKICAgICAgciAtPSAyOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSByIDwgMiAqIG4ubGVuZ3RoID8gciAvIDIgOiBuLmxlbmd0aDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCByOyArK28pIFFbdCA+PiAxXSA9IG4uY2hhckNvZGVBdChvKSwgdCArPSAyOwogICAgICByZXR1cm4gUVt0ID4+IDFdID0gMCwgdCAtIGk7CiAgICB9CiAgICBmdW5jdGlvbiB6dChuKSB7CiAgICAgIHJldHVybiAyICogbi5sZW5ndGg7CiAgICB9CiAgICBmdW5jdGlvbiBWdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSAwLCBpID0gIiI7ICEociA+PSB0IC8gNCk7ICkgewogICAgICAgIHZhciBvID0ga1tuICsgNCAqIHIgPj4gMl07CiAgICAgICAgaWYgKG8gPT0gMCkgYnJlYWs7CiAgICAgICAgKytyLCA2NTUzNiA8PSBvID8gKG8gLT0gNjU1MzYsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IG8gPj4gMTAsIDU2MzIwIHwgbyAmIDEwMjMpKSA6IGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgICByZXR1cm4gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEd0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCA0ID4gcikgcmV0dXJuIDA7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IGkgKyByIC0gNDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBuLmxlbmd0aDsgKytvKSB7CiAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgaWYgKDU1Mjk2IDw9IHMgJiYgNTczNDMgPj0gcykgewogICAgICAgICAgdmFyIGwgPSBuLmNoYXJDb2RlQXQoKytvKTsKICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgIH0KICAgICAgICBpZiAoa1t0ID4+IDJdID0gcywgdCArPSA0LCB0ICsgNCA+IHIpIGJyZWFrOwogICAgICB9CiAgICAgIHJldHVybiBrW3QgPj4gMl0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIFl0KG4pIHsKICAgICAgZm9yICh2YXIgdCA9IDAsIHIgPSAwOyByIDwgbi5sZW5ndGg7ICsrcikgewogICAgICAgIHZhciBpID0gbi5jaGFyQ29kZUF0KHIpOwogICAgICAgIDU1Mjk2IDw9IGkgJiYgNTczNDMgPj0gaSAmJiArK3IsIHQgKz0gNDsKICAgICAgfQogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBLLCBZLCBGLCBRLCB5biwgaywgVSwgbnQsIHR0OwogICAgZnVuY3Rpb24gZXQobikgewogICAgICBLID0gbiwgZS5IRUFQOCA9IFkgPSBuZXcgSW50OEFycmF5KG4pLCBlLkhFQVAxNiA9IFEgPSBuZXcgSW50MTZBcnJheShuKSwgZS5IRUFQMzIgPSBrID0gbmV3IEludDMyQXJyYXkobiksIGUuSEVBUFU4ID0gRiA9IG5ldyBVaW50OEFycmF5KG4pLCBlLkhFQVBVMTYgPSB5biA9IG5ldyBVaW50MTZBcnJheShuKSwgZS5IRUFQVTMyID0gVSA9IG5ldyBVaW50MzJBcnJheShuKSwgZS5IRUFQRjMyID0gbnQgPSBuZXcgRmxvYXQzMkFycmF5KG4pLCBlLkhFQVBGNjQgPSB0dCA9IG5ldyBGbG9hdDY0QXJyYXkobik7CiAgICB9CiAgICB2YXIgcnQgPSBlLklOSVRJQUxfTUVNT1JZIHx8IDE2Nzc3MjE2OwogICAgZS53YXNtTWVtb3J5ID8gSCA9IGUud2FzbU1lbW9yeSA6IEggPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogcnQgLyA2NTUzNiwgbWF4aW11bTogMzI3NjggfSksIEggJiYgKEsgPSBILmJ1ZmZlciksIHJ0ID0gSy5ieXRlTGVuZ3RoLCBldChLKTsKICAgIHZhciBpdCA9IFtdLCBhdCA9IFtdLCBadCA9IFtdLCBvdCA9IFtdOwogICAgZnVuY3Rpb24gJHQoKSB7CiAgICAgIHZhciBuID0gZS5wcmVSdW4uc2hpZnQoKTsKICAgICAgaXQudW5zaGlmdChuKTsKICAgIH0KICAgIHZhciBaID0gMCwgb24gPSBudWxsOwogICAgZS5wcmVsb2FkZWRJbWFnZXMgPSB7fSwgZS5wcmVsb2FkZWRBdWRpb3MgPSB7fTsKICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgdGhyb3cgZS5vbkFib3J0ICYmIGUub25BYm9ydChuKSwgRShuKSwga24gPSAhMCwgbiA9IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoImFib3J0KCIgKyBuICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIiksIGcobiksIG47CiAgICB9CiAgICBmdW5jdGlvbiBSbihuKSB7CiAgICAgIHZhciB0ID0gJDsKICAgICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/IHQuc3RhcnRzV2l0aChuKSA6IHQuaW5kZXhPZihuKSA9PT0gMDsKICAgIH0KICAgIGZ1bmN0aW9uIHN0KCkgewogICAgICByZXR1cm4gUm4oImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKTsKICAgIH0KICAgIHZhciAkID0gInNhbS53YXNtIjsKICAgIGlmICghc3QoKSkgewogICAgICB2YXIgdXQgPSAkOwogICAgICAkID0gZS5sb2NhdGVGaWxlID8gZS5sb2NhdGVGaWxlKHV0LCBfKSA6IF8gKyB1dDsKICAgIH0KICAgIGZ1bmN0aW9uIGN0KCkgewogICAgICB0cnkgewogICAgICAgIGlmIChXKSByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoVyk7CiAgICAgICAgaWYgKFMpIHJldHVybiBTKCQpOwogICAgICAgIHRocm93ICJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZCI7CiAgICAgIH0gY2F0Y2ggKG4pIHsKICAgICAgICBzbihuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gWHQoKSB7CiAgICAgIHJldHVybiBXIHx8ICFPICYmICFUIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iIHx8IFJuKCJmaWxlOi8vIikgPyBQcm9taXNlLnJlc29sdmUoKS50aGVuKGN0KSA6IGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihuKSB7CiAgICAgICAgaWYgKCFuLm9rKSB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArICQgKyAiJyI7CiAgICAgICAgcmV0dXJuIG4uYXJyYXlCdWZmZXIoKTsKICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7CiAgICAgICAgcmV0dXJuIGN0KCk7CiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24gcG4obikgewogICAgICBmb3IgKDsgMCA8IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4uc2hpZnQoKTsKICAgICAgICBpZiAodHlwZW9mIHQgPT0gImZ1bmN0aW9uIikgdChlKTsKICAgICAgICBlbHNlIHsKICAgICAgICAgIHZhciByID0gdC5CYTsKICAgICAgICAgIHR5cGVvZiByID09ICJudW1iZXIiID8gdC50YSA9PT0gdm9pZCAwID8geG4oInYiLCByKSgpIDogeG4oInZpIiwgcikodC50YSkgOiByKHQudGEgPT09IHZvaWQgMCA/IG51bGwgOiB0LnRhKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHhuKG4sIHQpIHsKICAgICAgdmFyIHIgPSBbXTsKICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgewogICAgICAgIHIubGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsKICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgcltpXSA9IGFyZ3VtZW50c1tpXTsKICAgICAgICByZXR1cm4gciAmJiByLmxlbmd0aCA/IGVbImR5bkNhbGxfIiArIG5dLmFwcGx5KG51bGwsIFt0XS5jb25jYXQocikpIDogZVsiZHluQ2FsbF8iICsgbl0uY2FsbChudWxsLCB0KTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEp0KG4pIHsKICAgICAgdGhpcy5kYSA9IG4gLSAxNiwgdGhpcy5PYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyA4ID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5MYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyAwID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5NYSA9IGZ1bmN0aW9uKCkgewogICAgICAgIGtbdGhpcy5kYSArIDQgPj4gMl0gPSAwOwogICAgICB9LCB0aGlzLkthID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTIgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLk5hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTMgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLkZhID0gZnVuY3Rpb24odCwgcikgewogICAgICAgIHRoaXMuT2EodCksIHRoaXMuTGEociksIHRoaXMuTWEoKSwgdGhpcy5LYSgpLCB0aGlzLk5hKCk7CiAgICAgIH07CiAgICB9CiAgICBmdW5jdGlvbiBtbigpIHsKICAgICAgcmV0dXJuIDAgPCBtbi54YTsKICAgIH0KICAgIGZ1bmN0aW9uIEZuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIDE7CiAgICAgICAgY2FzZSA0OgogICAgICAgICAgcmV0dXJuIDI7CiAgICAgICAgY2FzZSA4OgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gdHlwZSBzaXplOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIHZhciBsdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFIobikgewogICAgICBmb3IgKHZhciB0ID0gIiI7IEZbbl07ICkgdCArPSBsdFtGW24rK11dOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBxID0ge30sIFggPSB7fSwgdm4gPSB7fTsKICAgIGZ1bmN0aW9uIEluKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIGpuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBJbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gTG4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gam4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIG5uID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBubihuKTsKICAgIH0KICAgIHZhciBmdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIGduKG4pIHsKICAgICAgdGhyb3cgbmV3IGZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gdG4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGMpIHsKICAgICAgICBjID0gcihjKSwgYy5sZW5ndGggIT09IG4ubGVuZ3RoICYmIGduKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBuLmxlbmd0aDsgKyt5KSBEKG5beV0sIGNbeV0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihjKSB7CiAgICAgICAgdm5bY10gPSB0OwogICAgICB9KTsKICAgICAgdmFyIG8gPSBBcnJheSh0Lmxlbmd0aCksIHMgPSBbXSwgbCA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihjLCB5KSB7CiAgICAgICAgWC5oYXNPd25Qcm9wZXJ0eShjKSA/IG9beV0gPSBYW2NdIDogKHMucHVzaChjKSwgcS5oYXNPd25Qcm9wZXJ0eShjKSB8fCAocVtjXSA9IFtdKSwgcVtjXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgb1t5XSA9IFhbY10sICsrbCwgbCA9PT0gcy5sZW5ndGggJiYgaShvKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCBzLmxlbmd0aCA9PT0gMCAmJiBpKG8pOwogICAgfQogICAgZnVuY3Rpb24gRChuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgWC5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKSByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBYW25dID0gdCwgZGVsZXRlIHZuW25dLCBxLmhhc093blByb3BlcnR5KG4pICYmICh0ID0gcVtuXSwgZGVsZXRlIHFbbl0sIHQuZm9yRWFjaChmdW5jdGlvbihvKSB7CiAgICAgICAgbygpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBObihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIEhuID0gITE7CiAgICBmdW5jdGlvbiBkdCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIGh0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gdW4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChIbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpIHIgPSByLnZhbHVlLCByLmRhID8gaHQocikgOiBjb25zb2xlLndhcm4oIm9iamVjdCBhbHJlYWR5IGRlbGV0ZWQ6ICIgKyByLmRhKTsKICAgICAgfSksIHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiBIbi5yZWdpc3Rlcih0LCB0LkEsIHQuQSksIHQ7CiAgICAgIH0sIGR0ID0gZnVuY3Rpb24odCkgewogICAgICAgIEhuLnVucmVnaXN0ZXIodC5BKTsKICAgICAgfSwgdW4obikpOwogICAgfQogICAgdmFyIGNuID0gdm9pZCAwLCBsbiA9IFtdOwogICAgZnVuY3Rpb24gVW4oKSB7CiAgICAgIGZvciAoOyBsbi5sZW5ndGg7ICkgewogICAgICAgIHZhciBuID0gbG4ucG9wKCk7CiAgICAgICAgbi5BLm9hID0gITEsIG4uZGVsZXRlKCk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIFYoKSB7CiAgICB9CiAgICB2YXIgeXQgPSB7fTsKICAgIGZ1bmN0aW9uIFF0KG4sIHQpIHsKICAgICAgdmFyIHIgPSBlOwogICAgICBpZiAocltuXS5qYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdmFyIGkgPSByW25dOwogICAgICAgIHJbbl0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiByW25dLmphLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpIHx8IHYoIkZ1bmN0aW9uICciICsgdCArICInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdHMgb25lIG9mICgiICsgcltuXS5qYSArICIpISIpLCByW25dLmphW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfSwgcltuXS5qYSA9IFtdLCByW25dLmphW2kueWFdID0gaTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcHQobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pID8gKChyID09PSB2b2lkIDAgfHwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIGVbbl0uamFbcl0gIT09IHZvaWQgMCkgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICciICsgbiArICInIHR3aWNlIiksIFF0KG4sIG4pLCBlLmhhc093blByb3BlcnR5KHIpICYmIHYoIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyByICsgIikhIiksIGVbbl0uamFbcl0gPSB0KSA6IChlW25dID0gdCwgciAhPT0gdm9pZCAwICYmIChlW25dLlJhID0gcikpOwogICAgfQogICAgZnVuY3Rpb24gcXQobiwgdCwgciwgaSwgbywgcywgbCwgYykgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmNvbnN0cnVjdG9yID0gdCwgdGhpcy5tYSA9IHIsIHRoaXMubmEgPSBpLCB0aGlzLmlhID0gbywgdGhpcy5DYSA9IHMsIHRoaXMucWEgPSBsLCB0aGlzLkFhID0gYzsKICAgIH0KICAgIGZ1bmN0aW9uIHduKG4sIHQsIHIpIHsKICAgICAgZm9yICg7IHQgIT09IHI7ICkgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiBuZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiB0ZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpIHIgPSB0LkEuZ2E7CiAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIGVuKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGkuZGVsZXRlKCk7CiAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgIH0KICAgICAgcmV0dXJuIHI7CiAgICB9CiAgICBmdW5jdGlvbiBlZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyB0LkEuZmEubmFtZSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBbihuKSB7CiAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShVW24gPj4gMl0pOwogICAgfQogICAgZnVuY3Rpb24gbXQobiwgdCwgcikgewogICAgICByZXR1cm4gdCA9PT0gciA/IG4gOiByLmlhID09PSB2b2lkIDAgPyBudWxsIDogKG4gPSBtdChuLCB0LCByLmlhKSwgbiA9PT0gbnVsbCA/IG51bGwgOiByLkFhKG4pKTsKICAgIH0KICAgIHZhciBmbiA9IHt9OwogICAgZnVuY3Rpb24gcmUobiwgdCkgewogICAgICBmb3IgKHQgPT09IHZvaWQgMCAmJiB2KCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsgbi5pYTsgKSB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiBmblt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIF9uKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBnbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIGduKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgdW4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBCKG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IHRlIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyBuZSA6IGVlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiB2dChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgZ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gRyhuLCB0KSB7CiAgICAgIG4gPSBSKG4pOwogICAgICB2YXIgciA9IHhuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgZ3QgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB3dChuKSB7CiAgICAgIG4gPSBXdChuKTsKICAgICAgdmFyIHQgPSBSKG4pOwogICAgICByZXR1cm4geihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIGRuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcihzKSB7CiAgICAgICAgb1tzXSB8fCBYW3NdIHx8ICh2bltzXSA/IHZuW3NdLmZvckVhY2gocikgOiAoaS5wdXNoKHMpLCBvW3NdID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBvID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IGd0KG4gKyAiOiAiICsgaS5tYXAod3QpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspIHIucHVzaChrWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIHduKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBEbiA9IFtdLCBqID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIEJuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1qW25dLkphID09PSAwICYmIChqW25dID0gdm9pZCAwLCBEbi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIGVuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IERuLmxlbmd0aCA/IERuLnBvcCgpIDogai5sZW5ndGg7CiAgICAgICAgICByZXR1cm4galt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHJuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpIHJldHVybiAibnVsbCI7CiAgICAgIHZhciB0ID0gdHlwZW9mIG47CiAgICAgIHJldHVybiB0ID09PSAib2JqZWN0IiB8fCB0ID09PSAiYXJyYXkiIHx8IHQgPT09ICJmdW5jdGlvbiIgPyBuLnRvU3RyaW5nKCkgOiAiIiArIG47CiAgICB9CiAgICBmdW5jdGlvbiBpZShuLCB0KSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShudFtyID4+IDJdKTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHR0W3IgPj4gM10pOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBmbG9hdCB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGFlKG4pIHsKICAgICAgdmFyIHQgPSBGdW5jdGlvbjsKICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBqbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIG9lKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBZW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIEZbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gUVtpID4+IDFdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHluW2kgPj4gMV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4ga1tpID4+IDJdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFVbaSA+PiAyXTsKICAgICAgICAgIH07CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gaW50ZWdlciB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHpuKG4pIHsKICAgICAgcmV0dXJuIG4gfHwgdigiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gIiArIG4pLCBqW25dLnZhbHVlOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCkgewogICAgICB2YXIgciA9IFhbbl07CiAgICAgIHJldHVybiByID09PSB2b2lkIDAgJiYgdih0ICsgIiBoYXMgdW5rbm93biB0eXBlICIgKyB3dChuKSksIHI7CiAgICB9CiAgICB2YXIgc2UgPSB7fSwgVHQgPSB7fTsKICAgIGZ1bmN0aW9uIEV0KCkgewogICAgICBpZiAoIVZuKSB7CiAgICAgICAgdmFyIG4gPSB7IFVTRVI6ICJ3ZWJfdXNlciIsIExPR05BTUU6ICJ3ZWJfdXNlciIsIFBBVEg6ICIvIiwgUFdEOiAiLyIsIEhPTUU6ICIvaG9tZS93ZWJfdXNlciIsIExBTkc6ICh0eXBlb2YgbmF2aWdhdG9yID09ICJvYmplY3QiICYmIG5hdmlnYXRvci5sYW5ndWFnZXMgJiYgbmF2aWdhdG9yLmxhbmd1YWdlc1swXSB8fCAiQyIpLnJlcGxhY2UoIi0iLCAiXyIpICsgIi5VVEYtOCIsIF86IE0gfHwgIi4vdGhpcy5wcm9ncmFtIiB9LCB0OwogICAgICAgIGZvciAodCBpbiBUdCkgblt0XSA9IFR0W3RdOwogICAgICAgIHZhciByID0gW107CiAgICAgICAgZm9yICh0IGluIG4pIHIucHVzaCh0ICsgIj0iICsgblt0XSk7CiAgICAgICAgVm4gPSByOwogICAgICB9CiAgICAgIHJldHVybiBWbjsKICAgIH0KICAgIHZhciBWbiwgUHQgPSBbXTsKICAgIGZ1bmN0aW9uIE10KG4pIHsKICAgICAgdmFyIHQgPSB7fSwgcjsKICAgICAgZm9yIChyIGluIG4pIChmdW5jdGlvbihpKSB7CiAgICAgICAgdmFyIG8gPSBuW2ldOwogICAgICAgIHRbaV0gPSB0eXBlb2YgbyA9PSAiZnVuY3Rpb24iID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICBQdC5wdXNoKGkpOwogICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgcmV0dXJuIG8uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgICAgICAgIH0gZmluYWxseSB7CiAgICAgICAgICAgIGlmIChrbikgcmV0dXJuOwogICAgICAgICAgICB2YXIgcyA9IFB0LnBvcCgpOwogICAgICAgICAgICBLbihzID09PSBpKTsKICAgICAgICAgIH0KICAgICAgICB9IDogbzsKICAgICAgfSkocik7CiAgICAgIHJldHVybiB0OwogICAgfQogICAgZm9yICh2YXIgT3QgPSBBcnJheSgyNTYpLCBUbiA9IDA7IDI1NiA+IFRuOyArK1RuKSBPdFtUbl0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFRuKTsKICAgIGx0ID0gT3QsIG5uID0gZS5CaW5kaW5nRXJyb3IgPSBMbigiQmluZGluZ0Vycm9yIiksIGZ0ID0gZS5JbnRlcm5hbEVycm9yID0gTG4oIkludGVybmFsRXJyb3IiKSwgVi5wcm90b3R5cGUuaXNBbGlhc09mID0gZnVuY3Rpb24obikgewogICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgViAmJiBuIGluc3RhbmNlb2YgVikpIHJldHVybiAhMTsKICAgICAgdmFyIHQgPSB0aGlzLkEuZmEuZWEsIHIgPSB0aGlzLkEuZGEsIGkgPSBuLkEuZmEuZWE7CiAgICAgIGZvciAobiA9IG4uQS5kYTsgdC5pYTsgKSByID0gdC5xYShyKSwgdCA9IHQuaWE7CiAgICAgIGZvciAoOyBpLmlhOyApIG4gPSBpLnFhKG4pLCBpID0gaS5pYTsKICAgICAgcmV0dXJuIHQgPT09IGkgJiYgciA9PT0gbjsKICAgIH0sIFYucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7CiAgICAgIGlmICh0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5wYSkgcmV0dXJuIHRoaXMuQS5jb3VudC52YWx1ZSArPSAxLCB0aGlzOwogICAgICB2YXIgbiA9IHVuKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLCB7IEE6IHsgdmFsdWU6IEt0KHRoaXMuQSkgfSB9KSk7CiAgICAgIHJldHVybiBuLkEuY291bnQudmFsdWUgKz0gMSwgbi5BLm9hID0gITEsIG47CiAgICB9LCBWLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbigpIHsKICAgICAgdGhpcy5BLmRhIHx8IE5uKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIGR0KHRoaXMpLCBodCh0aGlzLkEpLCB0aGlzLkEucGEgfHwgKHRoaXMuQS5nYSA9IHZvaWQgMCwgdGhpcy5BLmRhID0gdm9pZCAwKTsKICAgIH0sIFYucHJvdG90eXBlLmlzRGVsZXRlZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gIXRoaXMuQS5kYTsKICAgIH0sIFYucHJvdG90eXBlLmRlbGV0ZUxhdGVyID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiB0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgbG4ucHVzaCh0aGlzKSwgbG4ubGVuZ3RoID09PSAxICYmIGNuICYmIGNuKFVuKSwgdGhpcy5BLm9hID0gITAsIHRoaXM7CiAgICB9LCBCLnByb3RvdHlwZS5EYSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgcmV0dXJuIHRoaXMud2EgJiYgKG4gPSB0aGlzLndhKG4pKSwgbjsKICAgIH0sIEIucHJvdG90eXBlLnZhID0gZnVuY3Rpb24obikgewogICAgICB0aGlzLm5hICYmIHRoaXMubmEobik7CiAgICB9LCBCLnByb3RvdHlwZS5hcmdQYWNrQWR2YW5jZSA9IDgsIEIucHJvdG90eXBlLnJlYWRWYWx1ZUZyb21Qb2ludGVyID0gQW4sIEIucHJvdG90eXBlLmRlbGV0ZU9iamVjdCA9IGZ1bmN0aW9uKG4pIHsKICAgICAgbiAhPT0gbnVsbCAmJiBuLmRlbGV0ZSgpOwogICAgfSwgQi5wcm90b3R5cGUuZnJvbVdpcmVUeXBlID0gZnVuY3Rpb24obikgewogICAgICBmdW5jdGlvbiB0KCkgewogICAgICAgIHJldHVybiB0aGlzLnNhID8gX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcy5HYSwgZGE6IHIsIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMsIGRhOiBuIH0pOwogICAgICB9CiAgICAgIHZhciByID0gdGhpcy5EYShuKTsKICAgICAgaWYgKCFyKSByZXR1cm4gdGhpcy52YShuKSwgbnVsbDsKICAgICAgdmFyIGkgPSByZSh0aGlzLmVhLCByKTsKICAgICAgaWYgKGkgIT09IHZvaWQgMCkKICAgICAgICByZXR1cm4gaS5BLmNvdW50LnZhbHVlID09PSAwID8gKGkuQS5kYSA9IHIsIGkuQS5nYSA9IG4sIGkuY2xvbmUoKSkgOiAoaSA9IGkuY2xvbmUoKSwgdGhpcy52YShuKSwgaSk7CiAgICAgIGlmIChpID0gdGhpcy5lYS5DYShyKSwgaSA9IHl0W2ldLCAhaSkgcmV0dXJuIHQuY2FsbCh0aGlzKTsKICAgICAgaSA9IHRoaXMucmEgPyBpLnphIDogaS5wb2ludGVyVHlwZTsKICAgICAgdmFyIG8gPSBtdChyLCB0aGlzLmVhLCBpLmVhKTsKICAgICAgcmV0dXJuIG8gPT09IG51bGwgPyB0LmNhbGwodGhpcykgOiB0aGlzLnNhID8gX24oaS5lYS5tYSwgeyBmYTogaSwgZGE6IG8sIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKAogICAgICAgIGkuZWEubWEsCiAgICAgICAgeyBmYTogaSwgZGE6IG8gfQogICAgICApOwogICAgfSwgZS5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmbikubGVuZ3RoOwogICAgfSwgZS5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gZnVuY3Rpb24oKSB7CiAgICAgIHZhciBuID0gW10sIHQ7CiAgICAgIGZvciAodCBpbiBmbikgZm4uaGFzT3duUHJvcGVydHkodCkgJiYgbi5wdXNoKGZuW3RdKTsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmZsdXNoUGVuZGluZ0RlbGV0ZXMgPSBVbiwgZS5zZXREZWxheUZ1bmN0aW9uID0gZnVuY3Rpb24obikgewogICAgICBjbiA9IG4sIGxuLmxlbmd0aCAmJiBjbiAmJiBjbihVbik7CiAgICB9LCBndCA9IGUuVW5ib3VuZFR5cGVFcnJvciA9IExuKCJVbmJvdW5kVHlwZUVycm9yIiksIGUuY291bnRfZW12YWxfaGFuZGxlcyA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gMCwgdCA9IDU7IHQgPCBqLmxlbmd0aDsgKyt0KSBqW3RdICE9PSB2b2lkIDAgJiYgKytuOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZ2V0X2ZpcnN0X2VtdmFsID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSA1OyBuIDwgai5sZW5ndGg7ICsrbikgaWYgKGpbbl0gIT09IHZvaWQgMCkgcmV0dXJuIGpbbl07CiAgICAgIHJldHVybiBudWxsOwogICAgfSwgYXQucHVzaCh7IEJhOiBmdW5jdGlvbigpIHsKICAgICAgU3QoKTsKICAgIH0gfSk7CiAgICB2YXIgdWUgPSB7CiAgICAgIHo6IGZ1bmN0aW9uKG4pIHsKICAgICAgICByZXR1cm4gRW4obiArIDE2KSArIDE2OwogICAgICB9LAogICAgICB1OiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgdGhyb3cgbmV3IEp0KG4pLkZhKHQsIHIpLCAidW5jYXVnaHRfZXhjZXB0aW9uIiBpbiBtbiA/IG1uLnhhKysgOiBtbi54YSA9IDEsIG47CiAgICAgIH0sCiAgICAgIHc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8pIHsKICAgICAgICB2YXIgcyA9IEZuKHIpOwogICAgICAgIHQgPSBSKHQpLCBEKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICByZXR1cm4gISFsOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGwsIGMpIHsKICAgICAgICAgIHJldHVybiBjID8gaSA6IG87CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICBpZiAociA9PT0gMSkgdmFyIGMgPSBZOwogICAgICAgICAgZWxzZSBpZiAociA9PT0gMikgYyA9IFE7CiAgICAgICAgICBlbHNlIGlmIChyID09PSA0KSBjID0gazsKICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBib29sZWFuIHR5cGUgc2l6ZTogIiArIHQpOwogICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKGNbbCA+PiBzXSk7CiAgICAgICAgfSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGg6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYsIGQsIGgsIHcpIHsKICAgICAgICBkID0gUihkKSwgcyA9IEcobywgcyksIGMgJiYgKGMgPSBHKGwsIGMpKSwgZiAmJiAoZiA9IEcoeSwgZikpLCB3ID0gRyhoLCB3KTsKICAgICAgICB2YXIgUCA9IEluKGQpOwogICAgICAgIHB0KFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGQgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW2ldKTsKICAgICAgICB9KSwgdG4oW24sIHQsIHJdLCBpID8gW2ldIDogW10sIGZ1bmN0aW9uKHApIHsKICAgICAgICAgIGlmIChwID0gcFswXSwgaSkKICAgICAgICAgICAgdmFyIE4gPSBwLmVhLCBiID0gTi5tYTsKICAgICAgICAgIGVsc2UgYiA9IFYucHJvdG90eXBlOwogICAgICAgICAgcCA9IGpuKFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSB4KSB0aHJvdyBuZXcgbm4oIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgIiArIGQpOwogICAgICAgICAgICBpZiAoTC5sYSA9PT0gdm9pZCAwKSB0aHJvdyBuZXcgbm4oZCArICIgaGFzIG5vIGFjY2Vzc2libGUgY29uc3RydWN0b3IiKTsKICAgICAgICAgICAgdmFyIGJ0ID0gTC5sYVthcmd1bWVudHMubGVuZ3RoXTsKICAgICAgICAgICAgaWYgKGJ0ID09PSB2b2lkIDApIHRocm93IG5ldyBubigiVHJpZWQgdG8gaW52b2tlIGN0b3Igb2YgIiArIGQgKyAiIHdpdGggaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdGVkICgiICsgT2JqZWN0LmtleXMoTC5sYSkudG9TdHJpbmcoKSArICIpIHBhcmFtZXRlcnMgaW5zdGVhZCEiKTsKICAgICAgICAgICAgcmV0dXJuIGJ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9KTsKICAgICAgICAgIHZhciB4ID0gT2JqZWN0LmNyZWF0ZShiLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBwIH0gfSk7CiAgICAgICAgICBwLnByb3RvdHlwZSA9IHg7CiAgICAgICAgICB2YXIgTCA9IG5ldyBxdChkLCBwLCB4LCB3LCBOLCBzLCBjLCBmKTsKICAgICAgICAgIE4gPSBuZXcgQihkLCBMLCAhMCwgITEpLCBiID0gbmV3IEIoZCArICIqIiwgTCwgITEsICExKTsKICAgICAgICAgIHZhciBobiA9IG5ldyBCKGQgKyAiIGNvbnN0KiIsIEwsICExLCAhMCk7CiAgICAgICAgICByZXR1cm4geXRbbl0gPSB7IHBvaW50ZXJUeXBlOiBiLCB6YTogaG4gfSwgdnQoUCwgcCksIFtOLCBiLCBobl07CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMpIHsKICAgICAgICBLbigwIDwgdCk7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBvID0gRyhpLCBvKTsKICAgICAgICB2YXIgYyA9IFtzXSwgeSA9IFtdOwogICAgICAgIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGYpIHsKICAgICAgICAgIGYgPSBmWzBdOwogICAgICAgICAgdmFyIGQgPSAiY29uc3RydWN0b3IgIiArIGYubmFtZTsKICAgICAgICAgIGlmIChmLmVhLmxhID09PSB2b2lkIDAgJiYgKGYuZWEubGEgPSBbXSksIGYuZWEubGFbdCAtIDFdICE9PSB2b2lkIDApIHRocm93IG5ldyBubigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIGNvbnN0cnVjdG9ycyB3aXRoIGlkZW50aWNhbCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArICh0IC0gMSkgKyAiKSBmb3IgY2xhc3MgJyIgKyBmLm5hbWUgKyAiJyEgT3ZlcmxvYWQgcmVzb2x1dGlvbiBpcyBjdXJyZW50bHkgb25seSBwZXJmb3JtZWQgdXNpbmcgdGhlIHBhcmFtZXRlciBjb3VudCwgbm90IGFjdHVhbCB0eXBlIGluZm8hIik7CiAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGYubmFtZSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBsKTsKICAgICAgICAgIH0sIHRuKFtdLCBsLCBmdW5jdGlvbihoKSB7CiAgICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggIT09IHQgLSAxICYmIHYoZCArICIgY2FsbGVkIHdpdGggIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArICh0IC0gMSkpLCB5Lmxlbmd0aCA9IDAsIGMubGVuZ3RoID0gdDsKICAgICAgICAgICAgICBmb3IgKHZhciB3ID0gMTsgdyA8IHQ7ICsrdykgY1t3XSA9IGhbd10udG9XaXJlVHlwZSgKICAgICAgICAgICAgICAgIHksCiAgICAgICAgICAgICAgICBhcmd1bWVudHNbdyAtIDFdCiAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICByZXR1cm4gdyA9IG8uYXBwbHkobnVsbCwgYyksIENuKHkpLCBoWzBdLmZyb21XaXJlVHlwZSh3KTsKICAgICAgICAgICAgfSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGI6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYpIHsKICAgICAgICB0ID0gUih0KSwgbyA9IEcoaSwgbyksIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGQpIHsKICAgICAgICAgIGQgPSBkWzBdOwogICAgICAgICAgdmFyIGggPSBkLm5hbWUgKyAiLiIgKyB0LCB3ID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgbF0pOwogICAgICAgICAgfSwgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAgfTsKICAgICAgICAgIHJldHVybiB5ID8gdy5zZXQgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBhY2Nlc3MgIiArIGggKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW3IsIGxdKTsKICAgICAgICAgIH0gOiB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICB2KGggKyAiIGlzIGEgcmVhZC1vbmx5IHByb3BlcnR5Iik7CiAgICAgICAgICB9LCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZC5lYS5tYSwgdCwgdyksIHRuKFtdLCB5ID8gW3IsIGxdIDogW3JdLCBmdW5jdGlvbihQKSB7CiAgICAgICAgICAgIHZhciBwID0gUFswXSwgTiA9IHsgZ2V0OiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICB2YXIgeCA9IF90KHRoaXMsIGQsIGggKyAiIGdldHRlciIpOwogICAgICAgICAgICAgIHJldHVybiBwLmZyb21XaXJlVHlwZShvKHMsIHgpKTsKICAgICAgICAgICAgfSwgZW51bWVyYWJsZTogITAgfTsKICAgICAgICAgICAgaWYgKHkpIHsKICAgICAgICAgICAgICB5ID0gRyhjLCB5KTsKICAgICAgICAgICAgICB2YXIgYiA9IFBbMV07CiAgICAgICAgICAgICAgTi5zZXQgPSBmdW5jdGlvbih4KSB7CiAgICAgICAgICAgICAgICB2YXIgTCA9IF90KHRoaXMsIGQsIGggKyAiIHNldHRlciIpLCBobiA9IFtdOwogICAgICAgICAgICAgICAgeShmLCBMLCBiLnRvV2lyZVR5cGUoaG4sIHgpKSwgQ24oaG4pOwogICAgICAgICAgICAgIH07CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCBOKSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIHY6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24ocikgewogICAgICAgICAgdmFyIGkgPSBqW3JdLnZhbHVlOwogICAgICAgICAgcmV0dXJuIEJuKHIpLCBpOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHIsIGkpIHsKICAgICAgICAgIHJldHVybiBlbihpKTsKICAgICAgICB9LCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IEFuLCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgbTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHIgPSBGbihyKSwgdCA9IFIodCksIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gaTsKICAgICAgICAgIH0sCiAgICAgICAgICB0b1dpcmVUeXBlOiBmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICAgIGlmICh0eXBlb2YgbyAhPSAibnVtYmVyIiAmJiB0eXBlb2YgbyAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4obykgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgcmV0dXJuIG87CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogaWUodCwgciksCiAgICAgICAgICBrYTogbnVsbAogICAgICAgIH0pOwogICAgICB9LAogICAgICBjOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvLCBzKSB7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBuID0gUihuKSwgbyA9IEcoaSwgbyksIHB0KG4sIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjYWxsICIgKyBuICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGwpOwogICAgICAgIH0sIHQgLSAxKSwgdG4oW10sIGwsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIHZhciB5ID0gbiwgZiA9IG47CiAgICAgICAgICBjID0gW2NbMF0sIG51bGxdLmNvbmNhdChjLnNsaWNlKDEpKTsKICAgICAgICAgIHZhciBkID0gbywgaCA9IGMubGVuZ3RoOwogICAgICAgICAgMiA+IGggJiYgdigiYXJnVHlwZXMgYXJyYXkgc2l6ZSBtaXNtYXRjaCEgTXVzdCBhdCBsZWFzdCBnZXQgcmV0dXJuIHZhbHVlIGFuZCAndGhpcycgdHlwZXMhIik7CiAgICAgICAgICBmb3IgKHZhciB3ID0gY1sxXSAhPT0gbnVsbCAmJiAhMSwgUCA9ICExLCBwID0gMTsgcCA8IGMubGVuZ3RoOyArK3ApIGlmIChjW3BdICE9PSBudWxsICYmIGNbcF0ua2EgPT09IHZvaWQgMCkgewogICAgICAgICAgICBQID0gITA7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgfQogICAgICAgICAgdmFyIE4gPSBjWzBdLm5hbWUgIT09ICJ2b2lkIiwgYiA9ICIiLCB4ID0gIiI7CiAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgaCAtIDI7ICsrcCkgYiArPSAocCAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHAsIHggKz0gKHAgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyBwICsgIldpcmVkIjsKICAgICAgICAgIGYgPSAicmV0dXJuIGZ1bmN0aW9uICIgKyBJbihmKSArICIoIiArIGIgKyBgKSB7CmlmIChhcmd1bWVudHMubGVuZ3RoICE9PSBgICsgKGggLSAyKSArIGApIHsKdGhyb3dCaW5kaW5nRXJyb3IoJ2Z1bmN0aW9uIGAgKyBmICsgIiBjYWxsZWQgd2l0aCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKGggLSAyKSArIGAgYXJncyEnKTsKfQpgLCBQICYmIChmICs9IGB2YXIgZGVzdHJ1Y3RvcnMgPSBbXTsKYCk7CiAgICAgICAgICB2YXIgTCA9IFAgPyAiZGVzdHJ1Y3RvcnMiIDogIm51bGwiOwogICAgICAgICAgZm9yIChiID0gInRocm93QmluZGluZ0Vycm9yIGludm9rZXIgZm4gcnVuRGVzdHJ1Y3RvcnMgcmV0VHlwZSBjbGFzc1BhcmFtIi5zcGxpdCgiICIpLCBkID0gW3YsIGQsIHMsIENuLCBjWzBdLCBjWzFdXSwgdyAmJiAoZiArPSAidmFyIHRoaXNXaXJlZCA9IGNsYXNzUGFyYW0udG9XaXJlVHlwZSgiICsgTCArIGAsIHRoaXMpOwpgKSwgcCA9IDA7IHAgPCBoIC0gMjsgKytwKSBmICs9ICJ2YXIgYXJnIiArIHAgKyAiV2lyZWQgPSBhcmdUeXBlIiArIHAgKyAiLnRvV2lyZVR5cGUoIiArIEwgKyAiLCBhcmciICsgcCArICIpOyAvLyAiICsgY1twICsgMl0ubmFtZSArIGAKYCwgYi5wdXNoKCJhcmdUeXBlIiArIHApLCBkLnB1c2goY1twICsgMl0pOwogICAgICAgICAgaWYgKHcgJiYgKHggPSAidGhpc1dpcmVkIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCksIGYgKz0gKE4gPyAidmFyIHJ2ID0gIiA6ICIiKSArICJpbnZva2VyKGZuIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCArIGApOwpgLCBQKSBmICs9IGBydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyk7CmA7CiAgICAgICAgICBlbHNlIGZvciAocCA9IHcgPyAxIDogMjsgcCA8IGMubGVuZ3RoOyArK3ApIGggPSBwID09PSAxID8gInRoaXNXaXJlZCIgOiAiYXJnIiArIChwIC0gMikgKyAiV2lyZWQiLCBjW3BdLmthICE9PSBudWxsICYmIChmICs9IGggKyAiX2R0b3IoIiArIGggKyAiKTsgLy8gIiArIGNbcF0ubmFtZSArIGAKYCwgYi5wdXNoKGggKyAiX2R0b3IiKSwgZC5wdXNoKGNbcF0ua2EpKTsKICAgICAgICAgIHJldHVybiBOICYmIChmICs9IGB2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpOwpyZXR1cm4gcmV0OwpgKSwgYi5wdXNoKGYgKyBgfQpgKSwgYyA9IGFlKGIpLmFwcGx5KG51bGwsIGQpLCB2dCh5LCBjLCB0IC0gMSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBlOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvKSB7CiAgICAgICAgZnVuY3Rpb24gcyhmKSB7CiAgICAgICAgICByZXR1cm4gZjsKICAgICAgICB9CiAgICAgICAgdCA9IFIodCksIG8gPT09IC0xICYmIChvID0gNDI5NDk2NzI5NSk7CiAgICAgICAgdmFyIGwgPSBGbihyKTsKICAgICAgICBpZiAoaSA9PT0gMCkgewogICAgICAgICAgdmFyIGMgPSAzMiAtIDggKiByOwogICAgICAgICAgcyA9IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgcmV0dXJuIGYgPDwgYyA+Pj4gYzsKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICAgIHZhciB5ID0gdC5pbmRleE9mKCJ1bnNpZ25lZCIpICE9IC0xOwogICAgICAgIEQobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IHMsIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGYsIGQpIHsKICAgICAgICAgIGlmICh0eXBlb2YgZCAhPSAibnVtYmVyIiAmJiB0eXBlb2YgZCAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oZCkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgIGlmIChkIDwgaSB8fCBkID4gbykgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciAiJyArIHJuKGQpICsgJyIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSAiJyArIHQgKyAnIiwgd2hpY2ggaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UgWycgKyBpICsgIiwgIiArIG8gKyAiXSEiKTsKICAgICAgICAgIHJldHVybiB5ID8gZCA+Pj4gMCA6IGQgfCAwOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogb2UodCwgbCwgaSAhPT0gMCksIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBkOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgZnVuY3Rpb24gaShzKSB7CiAgICAgICAgICBzID4+PSAyOwogICAgICAgICAgdmFyIGwgPSBVOwogICAgICAgICAgcmV0dXJuIG5ldyBvKEssIGxbcyArIDFdLCBsW3NdKTsKICAgICAgICB9CiAgICAgICAgdmFyIG8gPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gUihyKSwgRChuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFIodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgbyA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpIGZvciAodmFyIHMgPSBpICsgNCwgbCA9IDA7IGwgPD0gbzsgKytsKSB7CiAgICAgICAgICAgICAgdmFyIGMgPSBpICsgNCArIGw7CiAgICAgICAgICAgICAgaWYgKGwgPT0gbyB8fCBGW2NdID09IDApIHsKICAgICAgICAgICAgICAgIGlmIChzKSB7CiAgICAgICAgICAgICAgICAgIHZhciB5ID0gcywgZiA9IEYsIGQgPSB5ICsgKGMgLSBzKTsKICAgICAgICAgICAgICAgICAgZm9yIChzID0geTsgZltzXSAmJiAhKHMgPj0gZCk7ICkgKytzOwogICAgICAgICAgICAgICAgICBpZiAoMTYgPCBzIC0geSAmJiBmLnN1YmFycmF5ICYmIFFuKSB5ID0gUW4uZGVjb2RlKGYuc3ViYXJyYXkoeSwgcykpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAiIjsgeSA8IHM7ICkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBmW3krK107CiAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZbeSsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGggJiAyMjQpID09IDE5MikgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChoICYgMzEpIDw8IDYgfCB3KTsKICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3krK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gKGggJiAyNDApID09IDIyNCA/IChoICYgMTUpIDw8IDEyIHwgdyA8PCA2IHwgUCA6IChoICYgNykgPDwgMTggfCB3IDw8IDEyIHwgUCA8PCA2IHwgZlt5KytdICYgNjMsIDY1NTM2ID4gaCA/IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKSA6IChoIC09IDY1NTM2LCBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBoID4+IDEwLCA1NjMyMCB8IGggJiAxMDIzKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoaCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHkgPSBkOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgeSA9ICIiOwogICAgICAgICAgICAgICAgaWYgKHAgPT09IHZvaWQgMCkgdmFyIHAgPSB5OwogICAgICAgICAgICAgICAgZWxzZSBwICs9ICJcMCIsIHAgKz0geTsKICAgICAgICAgICAgICAgIHMgPSBjICsgMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgZm9yIChwID0gQXJyYXkobyksIGwgPSAwOyBsIDwgbzsgKytsKSBwW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZShGW2kgKyA0ICsgbF0pOwogICAgICAgICAgICAgIHAgPSBwLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiB6KGkpLCBwOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIG8pIHsKICAgICAgICAgICAgbyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChvID0gbmV3IFVpbnQ4QXJyYXkobykpOwogICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiBvID09ICJzdHJpbmciOwogICAgICAgICAgICBzIHx8IG8gaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IG8gaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBvIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGwgPSAociAmJiBzID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgby5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBvLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IG8uY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIG8ubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBjID0gRW4oNCArIGwgKyAxKTsKICAgICAgICAgICAgaWYgKFVbYyA+PiAyXSA9IGwsIHIgJiYgcykgVXQobywgYyArIDQsIGwgKyAxKTsKICAgICAgICAgICAgZWxzZSBpZiAocykgZm9yIChzID0gMDsgcyA8IGw7ICsrcykgewogICAgICAgICAgICAgIHZhciB5ID0gby5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgICAgIDI1NSA8IHkgJiYgKHooYyksIHYoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpKSwgRltjICsgNCArIHNdID0geTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGZvciAocyA9IDA7IHMgPCBsOyArK3MpIEZbYyArIDQgKyBzXSA9IG9bc107CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaCh6LCBjKSwgYzsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHooaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFIociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IER0LCBvID0gQnQsIHMgPSB6dCwgbCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4geW47CiAgICAgICAgICB9LCBjID0gMTsKICAgICAgICBlbHNlIHQgPT09IDQgJiYgKGkgPSBWdCwgbyA9IEd0LCBzID0gWXQsIGwgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiBVOwogICAgICAgIH0sIGMgPSAyKTsKICAgICAgICBEKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVt5ID4+IDJdLCBkID0gbCgpLCBoLCB3ID0geSArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgcCA9IHkgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFtwID4+IGNdID09IDApICYmICh3ID0gaSh3LCBwIC0gdyksIGggPT09IHZvaWQgMCA/IGggPSB3IDogKGggKz0gIlwwIiwgaCArPSB3KSwgdyA9IHAgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiB6KHkpLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHksIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gcyhmKSwgaCA9IEVuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBjLCBvKGYsIGggKyA0LCBkICsgdCksIHkgIT09IG51bGwgJiYgeS5wdXNoKHosIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICB6KHkpOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSB6bihuKSwgdCA9IEN0KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBvID0gZW4oaSk7CiAgICAgICAgcmV0dXJuIGtbciA+PiAyXSA9IG8sIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogQm4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IHpuKG4pLCB0ID0gem4odCksIGVuKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBzZVtuXTsKICAgICAgICByZXR1cm4gZW4odCA9PT0gdm9pZCAwID8gUihuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgQ24oaltuXS52YWx1ZSksIEJuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBDdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIGVuKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBzbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgRi5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gRi5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKSByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBILmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBLLmJ5dGVMZW5ndGggKyA2NTUzNSA+Pj4gMTYpLCBldChILmJ1ZmZlcik7CiAgICAgICAgICAgICAgdmFyIG8gPSAxOwogICAgICAgICAgICAgIGJyZWFrIG47CiAgICAgICAgICAgIH0gY2F0Y2ggewogICAgICAgICAgICB9CiAgICAgICAgICAgIG8gPSB2b2lkIDA7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAobykgcmV0dXJuICEwOwogICAgICAgIH0KICAgICAgICByZXR1cm4gITE7CiAgICAgIH0sCiAgICAgIHM6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IDA7CiAgICAgICAgcmV0dXJuIEV0KCkuZm9yRWFjaChmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICB2YXIgcyA9IHQgKyByOwogICAgICAgICAgZm9yIChvID0ga1tuICsgNCAqIG8gPj4gMl0gPSBzLCBzID0gMDsgcyA8IGkubGVuZ3RoOyArK3MpIFlbbysrID4+IDBdID0gaS5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgWVtvID4+IDBdID0gMCwgciArPSBpLmxlbmd0aCArIDE7CiAgICAgICAgfSksIDA7CiAgICAgIH0sCiAgICAgIHQ6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IEV0KCk7CiAgICAgICAga1tuID4+IDJdID0gci5sZW5ndGg7CiAgICAgICAgdmFyIGkgPSAwOwogICAgICAgIHJldHVybiByLmZvckVhY2goZnVuY3Rpb24obykgewogICAgICAgICAgaSArPSBvLmxlbmd0aCArIDE7CiAgICAgICAgfSksIGtbdCA+PiAyXSA9IGksIDA7CiAgICAgIH0sCiAgICAgIGE6IEgKICAgIH07CiAgICAoZnVuY3Rpb24oKSB7CiAgICAgIGZ1bmN0aW9uIG4ocykgewogICAgICAgIHMgPSBzLmV4cG9ydHMsIHMgPSBNdChzKSwgZS5hc20gPSBzLCBaLS0sIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIFogPT0gMCAmJiBvbiAmJiAocyA9IG9uLCBvbiA9IG51bGwsIHMoKSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gdChzKSB7CiAgICAgICAgbihzLmluc3RhbmNlKTsKICAgICAgfQogICAgICBmdW5jdGlvbiByKHMpIHsKICAgICAgICByZXR1cm4gWHQoKS50aGVuKGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShsLCBpKTsKICAgICAgICB9KS50aGVuKHMsIGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIEUoImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206ICIgKyBsKSwgc24obCk7CiAgICAgICAgfSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSB7IGE6IHVlIH07CiAgICAgIGlmIChaKyssIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIGUuaW5zdGFudGlhdGVXYXNtKSB0cnkgewogICAgICAgIHZhciBvID0gZS5pbnN0YW50aWF0ZVdhc20oaSwgbik7CiAgICAgICAgcmV0dXJuIG8gPSBNdChvKTsKICAgICAgfSBjYXRjaCAocykgewogICAgICAgIHJldHVybiBFKCJNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiAiICsgcyksICExOwogICAgICB9CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICBpZiAoVyB8fCB0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgIT0gImZ1bmN0aW9uIiB8fCBzdCgpIHx8IFJuKCJmaWxlOi8vIikgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIpIHJldHVybiByKHQpOwogICAgICAgIGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihzKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocywgaSkudGhlbih0LCBmdW5jdGlvbihsKSB7CiAgICAgICAgICAgIHJldHVybiBFKCJ3YXNtIHN0cmVhbWluZyBjb21waWxlIGZhaWxlZDogIiArIGwpLCBFKCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvbiIpLCByKHQpOwogICAgICAgICAgfSk7CiAgICAgICAgfSk7CiAgICAgIH0oKSwge307CiAgICB9KSgpOwogICAgdmFyIFN0ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChTdCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZS5hc20uQikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIEVuID0gZS5fbWFsbG9jID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRW4gPSBlLl9tYWxsb2MgPSBlLmFzbS5DKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgeiA9IGUuX2ZyZWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICh6ID0gZS5fZnJlZSA9IGUuYXNtLkQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBlLmFzbS5FKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGUuYXNtLkYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWkgPSBlLmFzbS5HKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpID0gZS5hc20uSCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9pID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2kgPSBlLmFzbS5JKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWkgPSBlLmFzbS5KKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaSA9IGUuYXNtLkspLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfZmlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2ZpaSA9IGUuYXNtLkwpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpZiA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlmID0gZS5hc20uTSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaSA9IGUuYXNtLk4pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpID0gZS5hc20uTykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpID0gZS5hc20uUCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpID0gZS5hc20uUSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpaSA9IGUuYXNtLlIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWkgPSBlLmFzbS5TKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBlLmFzbS5UKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZS5hc20uVSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGUuYXNtLlYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZS5hc20uVykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpID0gZS5hc20uWCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaWkgPSBlLmFzbS5ZKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpID0gZS5hc20uWikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWkgPSBlLmFzbS5fKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZS5hc20uJCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBlLmFzbS5hYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGUuYXNtLmJhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGUuYXNtLmNhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIHZhciBQbjsKICAgIG9uID0gZnVuY3Rpb24gbigpIHsKICAgICAgUG4gfHwgR24oKSwgUG4gfHwgKG9uID0gbik7CiAgICB9OwogICAgZnVuY3Rpb24gR24oKSB7CiAgICAgIGZ1bmN0aW9uIG4oKSB7CiAgICAgICAgaWYgKCFQbiAmJiAoUG4gPSAhMCwgZS5jYWxsZWRSdW4gPSAhMCwgIWtuKSkgewogICAgICAgICAgaWYgKHBuKGF0KSwgcG4oWnQpLCBtKGUpLCBlLm9uUnVudGltZUluaXRpYWxpemVkICYmIGUub25SdW50aW1lSW5pdGlhbGl6ZWQoKSwgZS5wb3N0UnVuKSBmb3IgKHR5cGVvZiBlLnBvc3RSdW4gPT0gImZ1bmN0aW9uIiAmJiAoZS5wb3N0UnVuID0gW2UucG9zdFJ1bl0pOyBlLnBvc3RSdW4ubGVuZ3RoOyApIHsKICAgICAgICAgICAgdmFyIHQgPSBlLnBvc3RSdW4uc2hpZnQoKTsKICAgICAgICAgICAgb3QudW5zaGlmdCh0KTsKICAgICAgICAgIH0KICAgICAgICAgIHBuKG90KTsKICAgICAgICB9CiAgICAgIH0KICAgICAgaWYgKCEoMCA8IFopKSB7CiAgICAgICAgaWYgKGUucHJlUnVuKSBmb3IgKHR5cGVvZiBlLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnByZVJ1biA9IFtlLnByZVJ1bl0pOyBlLnByZVJ1bi5sZW5ndGg7ICkgJHQoKTsKICAgICAgICBwbihpdCksIDAgPCBaIHx8IChlLnNldFN0YXR1cyA/IChlLnNldFN0YXR1cygiUnVubmluZy4uLiIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgICAgZS5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgfSwgMSksIG4oKTsKICAgICAgICB9LCAxKSkgOiBuKCkpOwogICAgICB9CiAgICB9CiAgICBpZiAoZS5ydW4gPSBHbiwgZS5wcmVJbml0KSBmb3IgKHR5cGVvZiBlLnByZUluaXQgPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVJbml0ID0gW2UucHJlSW5pdF0pOyAwIDwgZS5wcmVJbml0Lmxlbmd0aDsgKSBlLnByZUluaXQucG9wKCkoKTsKICAgIHJldHVybiBHbigpLCB1LnJlYWR5OwogIH07Cn0oKTsKY2xhc3MgbWUgewogIGNvbnN0cnVjdG9yKCkgewogICAgWW4odGhpcywgInNhbVdhc21Nb2R1bGUiKTsKICB9CiAgZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZSkgewogICAgcmV0dXJuIHsKICAgICAgbG9jYXRlRmlsZTogKG0pID0+IG5ldyBVUkwoZSB8fCBtLCB1KS5ocmVmCiAgICB9OwogIH0KICBhc3luYyBoYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKHUsIGUpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IG0gPSBhd2FpdCBmZXRjaCh1KTsKICAgICAgaWYgKCFtLm9rKQogICAgICAgIHRocm93IG5ldyBJKAogICAgICAgICAgYFRoZSBwYXRoIHRvICR7ZX0gaXMgaW5jb3JyZWN0IG9yIHRoZSBtb2R1bGUgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgICAgY29uc3QgZyA9IGF3YWl0IG0uYXJyYXlCdWZmZXIoKTsKICAgICAgaWYgKCFXZWJBc3NlbWJseS52YWxpZGF0ZShnKSkKICAgICAgICB0aHJvdyBuZXcgSSgKICAgICAgICAgIGBUaGUgcHJvdmlkZWQgJHtlfSBpcyBub3QgYSB2YWxpZCBXQVNNIG1vZHVsZS4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgIH0gY2F0Y2ggKG0pIHsKICAgICAgaWYgKG0gaW5zdGFuY2VvZiBJKQogICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICAgICAiWW91IGNhbiBmaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIGhvc3Qgd2FzbSBmaWxlcyBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuaW5ub3ZhdHJpY3MuY29tL2RpZ2l0YWwtb25ib2FyZGluZy90ZWNobmljYWwvcmVtb3RlL2RvdC13ZWItZG9jdW1lbnQvbGF0ZXN0L2RvY3VtZW50YXRpb24vI19ob3N0aW5nX3NhbV93YXNtIgogICAgICAgICksIG07CiAgICB9CiAgfQogIGFzeW5jIGdldFdhc21GaWxlTmFtZSgpIHsKICAgIHJldHVybiBhd2FpdCBmZSgpID8ga3Quc2ltZCA6IGt0LnNhbTsKICB9CiAgYXN5bmMgaW5pdFNhbU1vZHVsZSh1LCBlID0gIi93YXNtIikgewogICAgaWYgKHRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgcmV0dXJuOwogICAgY29uc3QgbSA9IGF3YWl0IHRoaXMuZ2V0V2FzbUZpbGVOYW1lKCksIGcgPSBgJHtlfS8ke219YDsKICAgIHRyeSB7CiAgICAgIHRoaXMuc2FtV2FzbU1vZHVsZSA9IGF3YWl0IHBlKHRoaXMuZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZykpOwogICAgfSBjYXRjaCB7CiAgICAgIHRocm93IGF3YWl0IHRoaXMuaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZShnLCBtKSwgbmV3IEkoIkNvdWxkIG5vdCBpbml0IGRldGVjdG9yLiIpOwogICAgfQogIH0KICBhc3luYyBnZXRTYW1WZXJzaW9uKCkgewogICAgdmFyIGU7CiAgICBjb25zdCB1ID0gYXdhaXQgKChlID0gdGhpcy5zYW1XYXNtTW9kdWxlKSA9PSBudWxsID8gdm9pZCAwIDogZS5nZXRJbmZvU3RyaW5nKCkpOwogICAgcmV0dXJuIHUgPT0gbnVsbCA/IHZvaWQgMCA6IHUudHJpbSgpOwogIH0KICAvKgogICAqIEluIFRTIDUuMi4wIHdhcyBhZGRlZCBzcGVjaWFsIGtleXdvcmQgInVzaW5nIiB3aGljaCBjb3VsZCBiZSBwZXJmZWN0IGZvciB0aGlzIGNhc2UuCiAgICogVW5mb3J0dW5hdGVseSwgdml0ZSBwcmVhY3QgcGx1Z2luIGRvZXMgbm90IHN1cHBvcnQgdGhpcyB2ZXJzaW9uIG9mIFRTIHlldC4KICAgKiBDaGVjayBwb3NzaWJpbGl0eSBvZiB1c2luZyAidXNpbmciIGtleXdvcmQgd2hlbiB2aXRlIHByZWFjdCBwbHVnaW4gdXBkYXRlcwogICAqLwogIGFsbG9jYXRlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgcmV0dXJuIHRoaXMuc2FtV2FzbU1vZHVsZS5fbWFsbG9jKHUpOwogIH0KICByZWxlYXNlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLl9mcmVlKHUpOwogIH0KICB3cml0ZURhdGFUb01lbW9yeSh1LCBlKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEkoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIHRoaXMuc2FtV2FzbU1vZHVsZS5IRUFQVTguc2V0KHUsIGUpOwogIH0KfQovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQwogKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMAogKi8KY29uc3QgeHQgPSBTeW1ib2woIkNvbWxpbmsucHJveHkiKSwgdmUgPSBTeW1ib2woIkNvbWxpbmsuZW5kcG9pbnQiKSwgZ2UgPSBTeW1ib2woIkNvbWxpbmsucmVsZWFzZVByb3h5IiksIFpuID0gU3ltYm9sKCJDb21saW5rLmZpbmFsaXplciIpLCBPbiA9IFN5bWJvbCgiQ29tbGluay50aHJvd24iKSwgRnQgPSAoYSkgPT4gdHlwZW9mIGEgPT0gIm9iamVjdCIgJiYgYSAhPT0gbnVsbCB8fCB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iLCB3ZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBGdChhKSAmJiBhW3h0XSwKICBzZXJpYWxpemUoYSkgewogICAgY29uc3QgeyBwb3J0MTogdSwgcG9ydDI6IGUgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgcmV0dXJuIEpuKGEsIHUpLCBbZSwgW2VdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHJldHVybiBhLnN0YXJ0KCksIFRlKGEpOwogIH0KfSwgQWUgPSB7CiAgY2FuSGFuZGxlOiAoYSkgPT4gRnQoYSkgJiYgT24gaW4gYSwKICBzZXJpYWxpemUoeyB2YWx1ZTogYSB9KSB7CiAgICBsZXQgdTsKICAgIHJldHVybiBhIGluc3RhbmNlb2YgRXJyb3IgPyB1ID0gewogICAgICBpc0Vycm9yOiAhMCwKICAgICAgdmFsdWU6IHsKICAgICAgICBtZXNzYWdlOiBhLm1lc3NhZ2UsCiAgICAgICAgbmFtZTogYS5uYW1lLAogICAgICAgIHN0YWNrOiBhLnN0YWNrCiAgICAgIH0KICAgIH0gOiB1ID0geyBpc0Vycm9yOiAhMSwgdmFsdWU6IGEgfSwgW3UsIFtdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHRocm93IGEuaXNFcnJvciA/IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGEudmFsdWUubWVzc2FnZSksIGEudmFsdWUpIDogYS52YWx1ZTsKICB9Cn0sIEl0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoWwogIFsicHJveHkiLCB3ZV0sCiAgWyJ0aHJvdyIsIEFlXQpdKTsKZnVuY3Rpb24gX2UoYSwgdSkgewogIGZvciAoY29uc3QgZSBvZiBhKQogICAgaWYgKHUgPT09IGUgfHwgZSA9PT0gIioiIHx8IGUgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZS50ZXN0KHUpKQogICAgICByZXR1cm4gITA7CiAgcmV0dXJuICExOwp9CmZ1bmN0aW9uIEpuKGEsIHUgPSBnbG9iYWxUaGlzLCBlID0gWyIqIl0pIHsKICB1LmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBtKGcpIHsKICAgIGlmICghZyB8fCAhZy5kYXRhKQogICAgICByZXR1cm47CiAgICBpZiAoIV9lKGUsIGcub3JpZ2luKSkgewogICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgb3JpZ2luICcke2cub3JpZ2lufScgZm9yIGNvbWxpbmsgcHJveHlgKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgY29uc3QgeyBpZDogQywgdHlwZTogQSwgcGF0aDogTSB9ID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFtdIH0sIGcuZGF0YSksIE8gPSAoZy5kYXRhLmFyZ3VtZW50TGlzdCB8fCBbXSkubWFwKEopOwogICAgbGV0IFQ7CiAgICB0cnkgewogICAgICBjb25zdCBfID0gTS5zbGljZSgwLCAtMSkucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKSwgUyA9IE0ucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKTsKICAgICAgc3dpdGNoIChBKSB7CiAgICAgICAgY2FzZSAiR0VUIjoKICAgICAgICAgIFQgPSBTOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiU0VUIjoKICAgICAgICAgIF9bTS5zbGljZSgtMSlbMF1dID0gSihnLmRhdGEudmFsdWUpLCBUID0gITA7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJBUFBMWSI6CiAgICAgICAgICBUID0gUy5hcHBseShfLCBPKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkNPTlNUUlVDVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IEUgPSBuZXcgUyguLi5PKTsKICAgICAgICAgICAgVCA9IFNlKEUpOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiRU5EUE9JTlQiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCB7IHBvcnQxOiBFLCBwb3J0MjogVyB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICAgICAgICAgIEpuKGEsIFcpLCBUID0gT2UoRSwgW0VdKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlJFTEVBU0UiOgogICAgICAgICAgVCA9IHZvaWQgMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICByZXR1cm47CiAgICAgIH0KICAgIH0gY2F0Y2ggKF8pIHsKICAgICAgVCA9IHsgdmFsdWU6IF8sIFtPbl06IDAgfTsKICAgIH0KICAgIFByb21pc2UucmVzb2x2ZShUKS5jYXRjaCgoXykgPT4gKHsgdmFsdWU6IF8sIFtPbl06IDAgfSkpLnRoZW4oKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oXyk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBTKSwgeyBpZDogQyB9KSwgRSksIEEgPT09ICJSRUxFQVNFIiAmJiAodS5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgbSksIGp0KHUpLCBabiBpbiBhICYmIHR5cGVvZiBhW1puXSA9PSAiZnVuY3Rpb24iICYmIGFbWm5dKCkpOwogICAgfSkuY2F0Y2goKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oewogICAgICAgIHZhbHVlOiBuZXcgVHlwZUVycm9yKCJVbnNlcmlhbGl6YWJsZSByZXR1cm4gdmFsdWUiKSwKICAgICAgICBbT25dOiAwCiAgICAgIH0pOwogICAgICB1LnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUyksIHsgaWQ6IEMgfSksIEUpOwogICAgfSk7CiAgfSksIHUuc3RhcnQgJiYgdS5zdGFydCgpOwp9CmZ1bmN0aW9uIENlKGEpIHsKICByZXR1cm4gYS5jb25zdHJ1Y3Rvci5uYW1lID09PSAiTWVzc2FnZVBvcnQiOwp9CmZ1bmN0aW9uIGp0KGEpIHsKICBDZShhKSAmJiBhLmNsb3NlKCk7Cn0KZnVuY3Rpb24gVGUoYSwgdSkgewogIHJldHVybiBYbihhLCBbXSwgdSk7Cn0KZnVuY3Rpb24gTW4oYSkgewogIGlmIChhKQogICAgdGhyb3cgbmV3IEVycm9yKCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGUiKTsKfQpmdW5jdGlvbiBMdChhKSB7CiAgcmV0dXJuIGFuKGEsIHsKICAgIHR5cGU6ICJSRUxFQVNFIgogIH0pLnRoZW4oKCkgPT4gewogICAganQoYSk7CiAgfSk7Cn0KY29uc3QgU24gPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgV24gPSAiRmluYWxpemF0aW9uUmVnaXN0cnkiIGluIGdsb2JhbFRoaXMgJiYgbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChhKSA9PiB7CiAgY29uc3QgdSA9IChTbi5nZXQoYSkgfHwgMCkgLSAxOwogIFNuLnNldChhLCB1KSwgdSA9PT0gMCAmJiBMdChhKTsKfSk7CmZ1bmN0aW9uIEVlKGEsIHUpIHsKICBjb25zdCBlID0gKFNuLmdldCh1KSB8fCAwKSArIDE7CiAgU24uc2V0KHUsIGUpLCBXbiAmJiBXbi5yZWdpc3RlcihhLCB1LCBhKTsKfQpmdW5jdGlvbiBQZShhKSB7CiAgV24gJiYgV24udW5yZWdpc3RlcihhKTsKfQpmdW5jdGlvbiBYbihhLCB1ID0gW10sIGUgPSBmdW5jdGlvbigpIHsKfSkgewogIGxldCBtID0gITE7CiAgY29uc3QgZyA9IG5ldyBQcm94eShlLCB7CiAgICBnZXQoQywgQSkgewogICAgICBpZiAoTW4obSksIEEgPT09IGdlKQogICAgICAgIHJldHVybiAoKSA9PiB7CiAgICAgICAgICBQZShnKSwgTHQoYSksIG0gPSAhMDsKICAgICAgICB9OwogICAgICBpZiAoQSA9PT0gInRoZW4iKSB7CiAgICAgICAgaWYgKHUubGVuZ3RoID09PSAwKQogICAgICAgICAgcmV0dXJuIHsgdGhlbjogKCkgPT4gZyB9OwogICAgICAgIGNvbnN0IE0gPSBhbihhLCB7CiAgICAgICAgICB0eXBlOiAiR0VUIiwKICAgICAgICAgIHBhdGg6IHUubWFwKChPKSA9PiBPLnRvU3RyaW5nKCkpCiAgICAgICAgfSkudGhlbihKKTsKICAgICAgICByZXR1cm4gTS50aGVuLmJpbmQoTSk7CiAgICAgIH0KICAgICAgcmV0dXJuIFhuKGEsIFsuLi51LCBBXSk7CiAgICB9LAogICAgc2V0KEMsIEEsIE0pIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtPLCBUXSA9IGJuKE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJTRVQiLAogICAgICAgIHBhdGg6IFsuLi51LCBBXS5tYXAoKF8pID0+IF8udG9TdHJpbmcoKSksCiAgICAgICAgdmFsdWU6IE8KICAgICAgfSwgVCkudGhlbihKKTsKICAgIH0sCiAgICBhcHBseShDLCBBLCBNKSB7CiAgICAgIE1uKG0pOwogICAgICBjb25zdCBPID0gdVt1Lmxlbmd0aCAtIDFdOwogICAgICBpZiAoTyA9PT0gdmUpCiAgICAgICAgcmV0dXJuIGFuKGEsIHsKICAgICAgICAgIHR5cGU6ICJFTkRQT0lOVCIKICAgICAgICB9KS50aGVuKEopOwogICAgICBpZiAoTyA9PT0gImJpbmQiKQogICAgICAgIHJldHVybiBYbihhLCB1LnNsaWNlKDAsIC0xKSk7CiAgICAgIGNvbnN0IFtULCBfXSA9IFJ0KE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJBUFBMWSIsCiAgICAgICAgcGF0aDogdS5tYXAoKFMpID0+IFMudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIF8pLnRoZW4oSik7CiAgICB9LAogICAgY29uc3RydWN0KEMsIEEpIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtNLCBPXSA9IFJ0KEEpOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJDT05TVFJVQ1QiLAogICAgICAgIHBhdGg6IHUubWFwKChUKSA9PiBULnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogTQogICAgICB9LCBPKS50aGVuKEopOwogICAgfQogIH0pOwogIHJldHVybiBFZShnLCBhKSwgZzsKfQpmdW5jdGlvbiBNZShhKSB7CiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGEpOwp9CmZ1bmN0aW9uIFJ0KGEpIHsKICBjb25zdCB1ID0gYS5tYXAoYm4pOwogIHJldHVybiBbdS5tYXAoKGUpID0+IGVbMF0pLCBNZSh1Lm1hcCgoZSkgPT4gZVsxXSkpXTsKfQpjb25zdCBOdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpOwpmdW5jdGlvbiBPZShhLCB1KSB7CiAgcmV0dXJuIE50LnNldChhLCB1KSwgYTsKfQpmdW5jdGlvbiBTZShhKSB7CiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYSwgeyBbeHRdOiAhMCB9KTsKfQpmdW5jdGlvbiBibihhKSB7CiAgZm9yIChjb25zdCBbdSwgZV0gb2YgSXQpCiAgICBpZiAoZS5jYW5IYW5kbGUoYSkpIHsKICAgICAgY29uc3QgW20sIGddID0gZS5zZXJpYWxpemUoYSk7CiAgICAgIHJldHVybiBbCiAgICAgICAgewogICAgICAgICAgdHlwZTogIkhBTkRMRVIiLAogICAgICAgICAgbmFtZTogdSwKICAgICAgICAgIHZhbHVlOiBtCiAgICAgICAgfSwKICAgICAgICBnCiAgICAgIF07CiAgICB9CiAgcmV0dXJuIFsKICAgIHsKICAgICAgdHlwZTogIlJBVyIsCiAgICAgIHZhbHVlOiBhCiAgICB9LAogICAgTnQuZ2V0KGEpIHx8IFtdCiAgXTsKfQpmdW5jdGlvbiBKKGEpIHsKICBzd2l0Y2ggKGEudHlwZSkgewogICAgY2FzZSAiSEFORExFUiI6CiAgICAgIHJldHVybiBJdC5nZXQoYS5uYW1lKS5kZXNlcmlhbGl6ZShhLnZhbHVlKTsKICAgIGNhc2UgIlJBVyI6CiAgICAgIHJldHVybiBhLnZhbHVlOwogIH0KfQpmdW5jdGlvbiBhbihhLCB1LCBlKSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChtKSA9PiB7CiAgICBjb25zdCBnID0gV2UoKTsKICAgIGEuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIEMoQSkgewogICAgICAhQS5kYXRhIHx8ICFBLmRhdGEuaWQgfHwgQS5kYXRhLmlkICE9PSBnIHx8IChhLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBDKSwgbShBLmRhdGEpKTsKICAgIH0pLCBhLnN0YXJ0ICYmIGEuc3RhcnQoKSwgYS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHsgaWQ6IGcgfSwgdSksIGUpOwogIH0pOwp9CmZ1bmN0aW9uIFdlKCkgewogIHJldHVybiBuZXcgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpLnRvU3RyaW5nKDE2KSkuam9pbigiLSIpOwp9CmZ1bmN0aW9uIEh0KGEsIHUpIHsKICByZXR1cm4gTWF0aC5zcXJ0KChhLnggLSB1LngpICoqIDIgKyAoYS55IC0gdS55KSAqKiAyKTsKfQpmdW5jdGlvbiBiZShhLCB1KSB7CiAgcmV0dXJuIHsKICAgIHg6IChhLnggKyB1LngpIC8gMiwKICAgIHk6IChhLnkgKyB1LnkpIC8gMgogIH07Cn0KZnVuY3Rpb24ga2UoYSwgdSkgewogIGlmIChhLmNvbmZpZGVuY2UgPD0gMCB8fCB1LmNvbmZpZGVuY2UgPD0gMCkKICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTsKICBjb25zdCBlID0gSHQoYS5jZW50ZXIsIHUuY2VudGVyKSwgbSA9IGJlKGEuY2VudGVyLCB1LmNlbnRlcik7CiAgcmV0dXJuIHsKICAgIHg6IG0ueCwKICAgIHk6IG0ueSArIGUgLyA0CiAgICAvLyBjYWxjdWxhdGlvbiBpcyB0YWtlbiBmcm9tIG1vYmlsZSB0ZWFtCiAgfTsKfQpmdW5jdGlvbiBSZShhLCB1LCBlKSB7CiAgaWYgKGEuY29uZmlkZW5jZSA8PSAwIHx8IHUuY29uZmlkZW5jZSA8PSAwKQogICAgcmV0dXJuIDA7CiAgY29uc3QgbSA9IEh0KGEuY2VudGVyLCB1LmNlbnRlciksIGcgPSB5ZShlLndpZHRoLCBlLmhlaWdodCk7CiAgcmV0dXJuIGhlKG0gLyBnKTsKfQpmdW5jdGlvbiAkbihhKSB7CiAgY29uc3QgeyBjZW50ZXJYOiB1LCBjZW50ZXJZOiBlLCBjb25maWRlbmNlOiBtLCBzaXplOiBnLCBzdGF0dXM6IEMgfSA9IGE7CiAgcmV0dXJuIHsKICAgIGNlbnRlcjogewogICAgICB4OiB1LAogICAgICB5OiBlCiAgICB9LAogICAgY29uZmlkZW5jZTogbSAvIDFlMywKICAgIHN0YXR1czogQyAvIDFlMywKICAgIHNpemU6IGcKICB9Owp9CmNsYXNzIHhlIGV4dGVuZHMgbWUgewogIHBhcnNlUmF3RGF0YSh1LCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBDLCBib3R0b21SaWdodFk6IEEsIGxlZnRFeWU6IE0sIG1vdXRoOiBPLCByaWdodEV5ZTogVCwgdG9wTGVmdFg6IF8sIHRvcExlZnRZOiBTIH0gPSB1LCBFID0gJG4oTSksIFcgPSAkbihUKSwgSCA9ICRuKE8pOwogICAgcmV0dXJuIHsKICAgICAgY29uZmlkZW5jZTogdS5jb25maWRlbmNlIC8gMWUzLAogICAgICB0b3BMZWZ0OiB7CiAgICAgICAgeDogXywKICAgICAgICB5OiBTCiAgICAgIH0sCiAgICAgIGJvdHRvbVJpZ2h0OiB7CiAgICAgICAgeDogQywKICAgICAgICB5OiBBCiAgICAgIH0sCiAgICAgIGZhY2VDZW50ZXI6IGtlKEUsIFcpLAogICAgICBmYWNlU2l6ZTogUmUoRSwgVywgZSksCiAgICAgIGxlZnRFeWU6IEUsCiAgICAgIHJpZ2h0RXllOiBXLAogICAgICBtb3V0aDogSCwKICAgICAgYnJpZ2h0bmVzczogbSAvIDFlMywKICAgICAgc2hhcnBuZXNzOiBnIC8gMWUzCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QodSwgZSwgbSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBJKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBnID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpLCBDID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpOwogICAgdGhpcy53cml0ZURhdGFUb01lbW9yeSh1LCBnKSwgdGhpcy5zYW1XYXNtTW9kdWxlLmNvbnZlcnRUb1NhbUNvbG9ySW1hZ2UoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLAogICAgICBkZS5SR0JBLAogICAgICBDCiAgICApOwogICAgY29uc3QgQSA9IHRoaXMuc2FtV2FzbU1vZHVsZS5kZXRlY3RGYWNlUGFydHNXaXRoSW1hZ2VQYXJhbWV0ZXJzKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgQywKICAgICAgMCwKICAgICAgMCwKICAgICAgLy8gcGFyYW1XaWR0aCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICk7CiAgICByZXR1cm4gdGhpcy5yZWxlYXNlTWVtb3J5KGcpLCB0aGlzLnJlbGVhc2VNZW1vcnkoQyksIHRoaXMucGFyc2VSYXdEYXRhKEEsIG0pOwogIH0KfQpKbih4ZSk7Cg==", q1 = (x) => Uint8Array.from(atob(x), (o) => o.charCodeAt(0)), Ea = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", q1(Qc)], { type: "text/javascript;charset=utf-8" });
function $1(x) {
  let o;
  try {
    if (o = Ea && (window.URL || window.webkitURL).createObjectURL(Ea), !o) throw "";
    const t = new Worker(o, {
      type: "module",
      name: x == null ? void 0 : x.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(o);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Qc,
      {
        type: "module",
        name: x == null ? void 0 : x.name
      }
    );
  }
}
var N0, g0;
class eI {
  constructor(o) {
    ce(this, N0);
    ce(this, g0);
    ae(this, N0, o), ae(this, g0, /* @__PURE__ */ new Map());
  }
  validate() {
    j(this, N0).forEach((o) => {
      j(this, g0).set(o.name, o.evaluate());
    });
  }
  isValid() {
    return Array.from(j(this, g0).values()).every((o) => o);
  }
  get result() {
    return j(this, g0);
  }
  get validators() {
    return j(this, N0);
  }
}
N0 = new WeakMap(), g0 = new WeakMap();
var wn, d0;
class ot {
  constructor(o, t) {
    ce(this, wn);
    ce(this, d0);
    ae(this, wn, o), ae(this, d0, t);
  }
  get threshold() {
    return j(this, d0);
  }
  get name() {
    return j(this, wn);
  }
  isValueBelowThreshold(o) {
    return o < j(this, d0);
  }
  isValueAboveThreshold(o) {
    return o > j(this, d0);
  }
}
wn = new WeakMap(), d0 = new WeakMap();
var Bn;
class tI extends ot {
  constructor(t, e) {
    super("isNotDim", t);
    ce(this, Bn);
    ae(this, Bn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, Bn));
  }
}
Bn = new WeakMap();
var Gn;
class nI extends ot {
  constructor(t, e) {
    super("isNotSmall", t);
    ce(this, Gn);
    ae(this, Gn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, Gn));
  }
}
Gn = new WeakMap();
var kn;
class xI extends ot {
  constructor(t, e) {
    super("isNotBright", t);
    ce(this, kn);
    ae(this, kn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(j(this, kn));
  }
}
kn = new WeakMap();
var Hn;
class oI extends ot {
  constructor(t, e) {
    super("isPresent", t);
    ce(this, Hn);
    ae(this, Hn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, Hn));
  }
}
Hn = new WeakMap();
var On;
class iI extends ot {
  constructor(t, e) {
    super("isSharp", t);
    ce(this, On);
    ae(this, On, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, On));
  }
}
On = new WeakMap();
var Zn;
class rI extends ot {
  constructor(t, e) {
    super("isLeftEyePresent", t);
    ce(this, Zn);
    ae(this, Zn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, Zn));
  }
}
Zn = new WeakMap();
var Kn;
class aI extends ot {
  constructor(t, e) {
    super("isMouthPresent", t);
    ce(this, Kn);
    ae(this, Kn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, Kn));
  }
}
Kn = new WeakMap();
var Rn;
class sI extends ot {
  constructor(t, e) {
    super("isMouthScoreNotTooLow", t);
    ce(this, Rn);
    ae(this, Rn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, Rn));
  }
}
Rn = new WeakMap();
var Pn;
class cI extends ot {
  constructor(t, e) {
    super("isMouthScoreNotTooHigh", t);
    ce(this, Pn);
    ae(this, Pn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(j(this, Pn));
  }
}
Pn = new WeakMap();
var Vn;
class gI extends ot {
  constructor(t, e) {
    super("isNotLarge", t);
    ce(this, Vn);
    ae(this, Vn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(j(this, Vn));
  }
}
Vn = new WeakMap();
var Tn;
class dI extends ot {
  constructor(t, e) {
    super("isNotPitched", t || 345 * -23 + 38 * 58 + 5831);
    ce(this, Tn);
    ae(this, Tn, e);
  }
  evaluate() {
    const { z: t } = j(this, Tn) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
}
Tn = new WeakMap();
var En;
class uI extends ot {
  constructor(t, e) {
    super("isRightEyePresent", t);
    ce(this, En);
    ae(this, En, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, En));
  }
}
En = new WeakMap();
var Nn, L0;
class lI extends ot {
  constructor(t, e, n) {
    super("isNotOutOfBounds", t);
    ce(this, Nn);
    ce(this, L0);
    ae(this, Nn, e), ae(this, L0, n);
  }
  evaluate() {
    const t = Lc(j(this, L0), this.threshold), e = Dc(j(this, Nn), j(this, L0));
    return p1(e, t);
  }
}
Nn = new WeakMap(), L0 = new WeakMap();
class II {
  static getFaceValidationInstance(o, t, e, n) {
    return new eI([new oI(o.faceConfidence, t.confidence), new rI(o.leftEye.confidence, t.leftEye.confidence), new uI(o.rightEye.confidence, t.rightEye.confidence), new nI(o.minFaceSizeRatio, t.faceSize), new gI(o.maxFaceSizeRatio, t.faceSize), new iI(o.sharpnessThreshold, t.sharpness), new tI(o.brightnessLowThreshold, t.brightness), new xI(o.brightnessHighThreshold, t.brightness), new lI(o.outOfBoundsThreshold, t, e), new dI(o.pitchAngleAccelerationThreshold, n), new aI(o.mouth.confidence, t.mouth.confidence), new cI(o.mouth.status.max, t.mouth.status), new sI(o.mouth.status.min, t.mouth.status)]);
  }
}
const no = class no extends N1 {
  constructor() {
    super(...arguments);
    M(this, "detector");
    M(this, "className", "FaceController");
    M(this, "fallbackInstruction", Re.FACE_NOT_PRESENT);
    M(this, "pitchAngleAccelerationThreshold", null);
    M(this, "getInstructionCode", (t, e) => {
      var i;
      if (this.isInCandidateSelection) return Re.CANDIDATE_SELECTION;
      if ((i = this.lastImage) != null && i.isValid && e) return Re.CANDIDATE_SELECTION;
      if (this.lastImage && e) return this.lastImage.instructionCode;
      const [n] = this.getInstructionCodesForValidators(t);
      return n ?? this.fallbackInstruction;
    });
    M(this, "getInstructionCodesForValidators", (t) => {
      const e = [];
      return Array.from(t).forEach(([n, i]) => {
        !i && e.push(Nu[n]);
      }), e;
    });
  }
  static async init() {
    const t = new $1(), e = Jc(t), n = new no(), i = await new e();
    this._instance = n, this._instance.detector = i;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  setThresholds(t) {
    super.setThresholds(t);
    const { devicePitchAngleThreshold: e } = t;
    this.pitchAngleAccelerationThreshold = al * Math.sin(e * (Math.PI / 180));
  }
  restart() {
    super.restart(), Ka(Et.INSTRUCTION_CHANGED, void (-4991 * -1 + 2735 + -7726 * 1), Dl);
  }
  validateDetectedObject(t, e) {
    const n = II.getFaceValidationInstance({ ...this.getThresholds(), pitchAngleAccelerationThreshold: this.pitchAngleAccelerationThreshold }, t, e, this.acceleration);
    return n.validate(), n;
  }
  async processImage({ image: t, timestamp: e }) {
    var A;
    const n = {};
    n.width = t.width, n.height = t.height;
    const i = n, r = rr(i), a = Kl(t, r), s = Rl(a), c = {};
    c.width = a.width, c.height = a.height;
    const u = c;
    let g = await this.detector.detect(s, u, i);
    g = y1(i, g);
    const C = this.validateDetectedObject(g, i), { result: l } = C, h = this.getInstructionCode(l, C.isValid());
    if (l.get("isPresent")) {
      const d = {};
      d.image = s, d.timestamp = e, this.collectImagesForDuplicateDetection(d);
    }
    if (this.isInCandidateSelection) {
      if (this.bestImage && C.isValid() && this.isNewImageBetter(this.bestImage.detection, g)) {
        const d = { image: t, detection: R0(g) };
        this.bestImage = d, this.candidateSelectionImages.push(d);
      }
    } else if ((A = this.lastImage) != null && A.isValid && C.isValid()) {
      const d = { image: t, detection: R0(g) }, W = {};
      W.image = this.lastImage.image, W.detection = this.lastImage.detection;
      const Z = W;
      this.isNewImageBetter(Z.detection, d.detection) ? this.bestImage = d : this.bestImage = Z, this.candidateSelectionImages.push(Z, d), this.isInCandidateSelection = !0;
    } else C.isValid() ? this.lastImage = { instructionCode: h, isValid: !0, image: t, detection: R0(g) } : this.lastImage = { instructionCode: h, isValid: !1, image: t, detection: R0(g) };
    const p = { detectedFace: R0(g), instructionCode: h, invalidValidators: this.getInstructionCodesForValidators(l), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(p.detectedFace), Ka(Et.INSTRUCTION_CHANGED, h), Xl(Et.DETECTED_FACE_CHANGED, p.detectedFace, this.getThresholds().faceConfidence), Ml(Et.FACE_DETECTION, p.detectedFace, t), p;
  }
};
M(no, "_instance");
let Ki = no;
const fI = (x, o) => {
  const { handleError: t } = tn(), [e, n] = $e(), { acceleration: i } = b1();
  e && e.setAcceleration(i), be(() => {
    (async () => {
      const s = await Ki.getInstance();
      try {
        const c = {};
        c.wasmDirectoryPath = o, c.thresholds = x, await s.init(c);
      } catch (c) {
        if (c instanceof Error) {
          t(ie.fromError(c));
          return;
        }
      }
      n(s);
    })();
  }, [t, x, o]);
  const r = {};
  return r.controller = e, r;
};
var x0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, zc = {}, Na = {}, CI = hI;
function hI(x, o) {
  for (var t = new Array(arguments.length - 1), e = 0, n = 2, i = !0; n < arguments.length; )
    t[e++] = arguments[n++];
  return new Promise(function(r, a) {
    t[e] = function(s) {
      if (i)
        if (i = !1, s)
          a(s);
        else {
          for (var c = new Array(arguments.length - 1), u = 0; u < c.length; )
            c[u++] = arguments[u];
          r.apply(null, c);
        }
    };
    try {
      x.apply(o || null, t);
    } catch (s) {
      i && (i = !1, a(s));
    }
  });
}
var qc = {};
(function(x) {
  var o = x;
  o.length = function(r) {
    var a = r.length;
    if (!a)
      return 0;
    for (var s = 0; --a % 4 > 1 && r.charAt(a) === "="; )
      ++s;
    return Math.ceil(r.length * 3) / 4 - s;
  };
  for (var t = new Array(64), e = new Array(123), n = 0; n < 64; )
    e[t[n] = n < 26 ? n + 65 : n < 52 ? n + 71 : n < 62 ? n - 4 : n - 59 | 43] = n++;
  o.encode = function(r, a, s) {
    for (var c = null, u = [], g = 0, C = 0, l; a < s; ) {
      var h = r[a++];
      switch (C) {
        case 0:
          u[g++] = t[h >> 2], l = (h & 3) << 4, C = 1;
          break;
        case 1:
          u[g++] = t[l | h >> 4], l = (h & 15) << 2, C = 2;
          break;
        case 2:
          u[g++] = t[l | h >> 6], u[g++] = t[h & 63], C = 0;
          break;
      }
      g > 8191 && ((c || (c = [])).push(String.fromCharCode.apply(String, u)), g = 0);
    }
    return C && (u[g++] = t[l], u[g++] = 61, C === 1 && (u[g++] = 61)), c ? (g && c.push(String.fromCharCode.apply(String, u.slice(0, g))), c.join("")) : String.fromCharCode.apply(String, u.slice(0, g));
  };
  var i = "invalid encoding";
  o.decode = function(r, a, s) {
    for (var c = s, u = 0, g, C = 0; C < r.length; ) {
      var l = r.charCodeAt(C++);
      if (l === 61 && u > 1)
        break;
      if ((l = e[l]) === void 0)
        throw Error(i);
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
      throw Error(i);
    return s - c;
  }, o.test = function(r) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
  };
})(qc);
var pI = Io;
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
var mI = La(La);
function La(x) {
  return typeof Float32Array < "u" ? function() {
    var o = new Float32Array([-0]), t = new Uint8Array(o.buffer), e = t[3] === 128;
    function n(s, c, u) {
      o[0] = s, c[u] = t[0], c[u + 1] = t[1], c[u + 2] = t[2], c[u + 3] = t[3];
    }
    function i(s, c, u) {
      o[0] = s, c[u] = t[3], c[u + 1] = t[2], c[u + 2] = t[1], c[u + 3] = t[0];
    }
    x.writeFloatLE = e ? n : i, x.writeFloatBE = e ? i : n;
    function r(s, c) {
      return t[0] = s[c], t[1] = s[c + 1], t[2] = s[c + 2], t[3] = s[c + 3], o[0];
    }
    function a(s, c) {
      return t[3] = s[c], t[2] = s[c + 1], t[1] = s[c + 2], t[0] = s[c + 3], o[0];
    }
    x.readFloatLE = e ? r : a, x.readFloatBE = e ? a : r;
  }() : function() {
    function o(e, n, i, r) {
      var a = n < 0 ? 1 : 0;
      if (a && (n = -n), n === 0)
        e(1 / n > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), i, r);
      else if (isNaN(n))
        e(2143289344, i, r);
      else if (n > 34028234663852886e22)
        e((a << 31 | 2139095040) >>> 0, i, r);
      else if (n < 11754943508222875e-54)
        e((a << 31 | Math.round(n / 1401298464324817e-60)) >>> 0, i, r);
      else {
        var s = Math.floor(Math.log(n) / Math.LN2), c = Math.round(n * Math.pow(2, -s) * 8388608) & 8388607;
        e((a << 31 | s + 127 << 23 | c) >>> 0, i, r);
      }
    }
    x.writeFloatLE = o.bind(null, Da), x.writeFloatBE = o.bind(null, Fa);
    function t(e, n, i) {
      var r = e(n, i), a = (r >> 31) * 2 + 1, s = r >>> 23 & 255, c = r & 8388607;
      return s === 255 ? c ? NaN : a * (1 / 0) : s === 0 ? a * 1401298464324817e-60 * c : a * Math.pow(2, s - 150) * (c + 8388608);
    }
    x.readFloatLE = t.bind(null, Ya), x.readFloatBE = t.bind(null, Xa);
  }(), typeof Float64Array < "u" ? function() {
    var o = new Float64Array([-0]), t = new Uint8Array(o.buffer), e = t[7] === 128;
    function n(s, c, u) {
      o[0] = s, c[u] = t[0], c[u + 1] = t[1], c[u + 2] = t[2], c[u + 3] = t[3], c[u + 4] = t[4], c[u + 5] = t[5], c[u + 6] = t[6], c[u + 7] = t[7];
    }
    function i(s, c, u) {
      o[0] = s, c[u] = t[7], c[u + 1] = t[6], c[u + 2] = t[5], c[u + 3] = t[4], c[u + 4] = t[3], c[u + 5] = t[2], c[u + 6] = t[1], c[u + 7] = t[0];
    }
    x.writeDoubleLE = e ? n : i, x.writeDoubleBE = e ? i : n;
    function r(s, c) {
      return t[0] = s[c], t[1] = s[c + 1], t[2] = s[c + 2], t[3] = s[c + 3], t[4] = s[c + 4], t[5] = s[c + 5], t[6] = s[c + 6], t[7] = s[c + 7], o[0];
    }
    function a(s, c) {
      return t[7] = s[c], t[6] = s[c + 1], t[5] = s[c + 2], t[4] = s[c + 3], t[3] = s[c + 4], t[2] = s[c + 5], t[1] = s[c + 6], t[0] = s[c + 7], o[0];
    }
    x.readDoubleLE = e ? r : a, x.readDoubleBE = e ? a : r;
  }() : function() {
    function o(e, n, i, r, a, s) {
      var c = r < 0 ? 1 : 0;
      if (c && (r = -r), r === 0)
        e(0, a, s + n), e(1 / r > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), a, s + i);
      else if (isNaN(r))
        e(0, a, s + n), e(2146959360, a, s + i);
      else if (r > 17976931348623157e292)
        e(0, a, s + n), e((c << 31 | 2146435072) >>> 0, a, s + i);
      else {
        var u;
        if (r < 22250738585072014e-324)
          u = r / 5e-324, e(u >>> 0, a, s + n), e((c << 31 | u / 4294967296) >>> 0, a, s + i);
        else {
          var g = Math.floor(Math.log(r) / Math.LN2);
          g === 1024 && (g = 1023), u = r * Math.pow(2, -g), e(u * 4503599627370496 >>> 0, a, s + n), e((c << 31 | g + 1023 << 20 | u * 1048576 & 1048575) >>> 0, a, s + i);
        }
      }
    }
    x.writeDoubleLE = o.bind(null, Da, 0, 4), x.writeDoubleBE = o.bind(null, Fa, 4, 0);
    function t(e, n, i, r, a) {
      var s = e(r, a + n), c = e(r, a + i), u = (c >> 31) * 2 + 1, g = c >>> 20 & 2047, C = 4294967296 * (c & 1048575) + s;
      return g === 2047 ? C ? NaN : u * (1 / 0) : g === 0 ? u * 5e-324 * C : u * Math.pow(2, g - 1075) * (C + 4503599627370496);
    }
    x.readDoubleLE = t.bind(null, Ya, 0, 4), x.readDoubleBE = t.bind(null, Xa, 4, 0);
  }(), x;
}
function Da(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
function Fa(x, o, t) {
  o[t] = x >>> 24, o[t + 1] = x >>> 16 & 255, o[t + 2] = x >>> 8 & 255, o[t + 3] = x & 255;
}
function Ya(x, o) {
  return (x[o] | x[o + 1] << 8 | x[o + 2] << 16 | x[o + 3] << 24) >>> 0;
}
function Xa(x, o) {
  return (x[o] << 24 | x[o + 1] << 16 | x[o + 2] << 8 | x[o + 3]) >>> 0;
}
function Ma(x) {
  throw new Error('Could not dynamically require "' + x + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var bI = AI;
function AI(x) {
  try {
    if (typeof Ma != "function")
      return null;
    var o = Ma(x);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var $c = {};
(function(x) {
  var o = x;
  o.length = function(t) {
    for (var e = 0, n = 0, i = 0; i < t.length; ++i)
      n = t.charCodeAt(i), n < 128 ? e += 1 : n < 2048 ? e += 2 : (n & 64512) === 55296 && (t.charCodeAt(i + 1) & 64512) === 56320 ? (++i, e += 4) : e += 3;
    return e;
  }, o.read = function(t, e, n) {
    var i = n - e;
    if (i < 1)
      return "";
    for (var r = null, a = [], s = 0, c; e < n; )
      c = t[e++], c < 128 ? a[s++] = c : c > 191 && c < 224 ? a[s++] = (c & 31) << 6 | t[e++] & 63 : c > 239 && c < 365 ? (c = ((c & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[s++] = 55296 + (c >> 10), a[s++] = 56320 + (c & 1023)) : a[s++] = (c & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, s > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, a)), s = 0);
    return r ? (s && r.push(String.fromCharCode.apply(String, a.slice(0, s))), r.join("")) : String.fromCharCode.apply(String, a.slice(0, s));
  }, o.write = function(t, e, n) {
    for (var i = n, r, a, s = 0; s < t.length; ++s)
      r = t.charCodeAt(s), r < 128 ? e[n++] = r : r < 2048 ? (e[n++] = r >> 6 | 192, e[n++] = r & 63 | 128) : (r & 64512) === 55296 && ((a = t.charCodeAt(s + 1)) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (a & 1023), ++s, e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128) : (e[n++] = r >> 12 | 224, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128);
    return n - i;
  };
})($c);
var yI = WI;
function WI(x, o, t) {
  var e = t || 8192, n = e >>> 1, i = null, r = e;
  return function(a) {
    if (a < 1 || a > n)
      return x(a);
    r + a > e && (i = x(e), r = 0);
    var s = o.call(i, r, r += a);
    return r & 7 && (r = (r | 7) + 1), s;
  };
}
var jo, ja;
function vI() {
  if (ja)
    return jo;
  ja = 1, jo = o;
  var x = b0();
  function o(i, r) {
    this.lo = i >>> 0, this.hi = r >>> 0;
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
  o.fromNumber = function(i) {
    if (i === 0)
      return t;
    var r = i < 0;
    r && (i = -i);
    var a = i >>> 0, s = (i - a) / 4294967296 >>> 0;
    return r && (s = ~s >>> 0, a = ~a >>> 0, ++a > 4294967295 && (a = 0, ++s > 4294967295 && (s = 0))), new o(a, s);
  }, o.from = function(i) {
    if (typeof i == "number")
      return o.fromNumber(i);
    if (x.isString(i))
      if (x.Long)
        i = x.Long.fromString(i);
      else
        return o.fromNumber(parseInt(i, 10));
    return i.low || i.high ? new o(i.low >>> 0, i.high >>> 0) : t;
  }, o.prototype.toNumber = function(i) {
    if (!i && this.hi >>> 31) {
      var r = ~this.lo + 1 >>> 0, a = ~this.hi >>> 0;
      return r || (a = a + 1 >>> 0), -(r + a * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, o.prototype.toLong = function(i) {
    return x.Long ? new x.Long(this.lo | 0, this.hi | 0, !!i) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!i };
  };
  var n = String.prototype.charCodeAt;
  return o.fromHash = function(i) {
    return i === e ? t : new o(
      (n.call(i, 0) | n.call(i, 1) << 8 | n.call(i, 2) << 16 | n.call(i, 3) << 24) >>> 0,
      (n.call(i, 4) | n.call(i, 5) << 8 | n.call(i, 6) << 16 | n.call(i, 7) << 24) >>> 0
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
    var i = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ i) >>> 0, this.lo = (this.lo << 1 ^ i) >>> 0, this;
  }, o.prototype.zzDecode = function() {
    var i = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ i) >>> 0, this.hi = (this.hi >>> 1 ^ i) >>> 0, this;
  }, o.prototype.length = function() {
    var i = this.lo, r = (this.lo >>> 28 | this.hi << 4) >>> 0, a = this.hi >>> 24;
    return a === 0 ? r === 0 ? i < 16384 ? i < 128 ? 1 : 2 : i < 2097152 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 2097152 ? 7 : 8 : a < 128 ? 9 : 10;
  }, jo;
}
var Ja;
function b0() {
  return Ja || (Ja = 1, function(x) {
    var o = x;
    o.asPromise = CI, o.base64 = qc, o.EventEmitter = pI, o.float = mI, o.inquire = bI, o.utf8 = $c, o.pool = yI, o.LongBits = vI(), o.isNode = !!(typeof x0 < "u" && x0 && x0.process && x0.process.versions && x0.process.versions.node), o.global = o.isNode && x0 || typeof window < "u" && window || typeof self < "u" && self || x0, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
    o.isSet = function(n, i) {
      var r = n[i];
      return r != null && n.hasOwnProperty(i) ? typeof r != "object" || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0 : !1;
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
    }, o.longFromHash = function(n, i) {
      var r = o.LongBits.fromHash(n);
      return o.Long ? o.Long.fromBits(r.lo, r.hi, i) : r.toNumber(!!i);
    };
    function t(n, i, r) {
      for (var a = Object.keys(i), s = 0; s < a.length; ++s)
        (n[a[s]] === void 0 || !r) && (n[a[s]] = i[a[s]]);
      return n;
    }
    o.merge = t, o.lcFirst = function(n) {
      return n.charAt(0).toLowerCase() + n.substring(1);
    };
    function e(n) {
      function i(r, a) {
        if (!(this instanceof i))
          return new i(r, a);
        Object.defineProperty(this, "message", { get: function() {
          return r;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, i) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), a && t(this, a);
      }
      return i.prototype = Object.create(Error.prototype, {
        constructor: {
          value: i,
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
      }), i;
    }
    o.newError = e, o.ProtocolError = e("ProtocolError"), o.oneOfGetter = function(n) {
      for (var i = {}, r = 0; r < n.length; ++r)
        i[n[r]] = 1;
      return function() {
        for (var a = Object.keys(this), s = a.length - 1; s > -1; --s)
          if (i[a[s]] === 1 && this[a[s]] !== void 0 && this[a[s]] !== null)
            return a[s];
      };
    }, o.oneOfSetter = function(n) {
      return function(i) {
        for (var r = 0; r < n.length; ++r)
          n[r] !== i && delete this[n[r]];
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
      function(i, r) {
        return new n(i, r);
      }, o._Buffer_allocUnsafe = n.allocUnsafe || /* istanbul ignore next */
      function(i) {
        return new n(i);
      };
    };
  }(Na)), Na;
}
var eg = z, ut = b0(), Ri, fo = ut.LongBits, _a = ut.base64, Ua = ut.utf8;
function Xn(x, o, t) {
  this.fn = x, this.len = o, this.next = void 0, this.val = t;
}
function ar() {
}
function SI(x) {
  this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
}
function z() {
  this.len = 0, this.head = new Xn(ar, 0, 0), this.tail = this.head, this.states = null;
}
var tg = function() {
  return ut.Buffer ? function() {
    return (z.create = function() {
      return new Ri();
    })();
  } : function() {
    return new z();
  };
};
z.create = tg();
z.alloc = function(x) {
  return new ut.Array(x);
};
ut.Array !== Array && (z.alloc = ut.pool(z.alloc, ut.Array.prototype.subarray));
z.prototype._push = function(x, o, t) {
  return this.tail = this.tail.next = new Xn(x, o, t), this.len += o, this;
};
function sr(x, o, t) {
  o[t] = x & 255;
}
function wI(x, o, t) {
  for (; x > 127; )
    o[t++] = x & 127 | 128, x >>>= 7;
  o[t] = x;
}
function cr(x, o) {
  this.len = x, this.next = void 0, this.val = o;
}
cr.prototype = Object.create(Xn.prototype);
cr.prototype.fn = wI;
z.prototype.uint32 = function(x) {
  return this.len += (this.tail = this.tail.next = new cr(
    (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
    x
  )).len, this;
};
z.prototype.int32 = function(x) {
  return x < 0 ? this._push(gr, 10, fo.fromNumber(x)) : this.uint32(x);
};
z.prototype.sint32 = function(x) {
  return this.uint32((x << 1 ^ x >> 31) >>> 0);
};
function gr(x, o, t) {
  for (; x.hi; )
    o[t++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
  for (; x.lo > 127; )
    o[t++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
  o[t++] = x.lo;
}
z.prototype.uint64 = function(x) {
  var o = fo.from(x);
  return this._push(gr, o.length(), o);
};
z.prototype.int64 = z.prototype.uint64;
z.prototype.sint64 = function(x) {
  var o = fo.from(x).zzEncode();
  return this._push(gr, o.length(), o);
};
z.prototype.bool = function(x) {
  return this._push(sr, 1, x ? 1 : 0);
};
function Pi(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
z.prototype.fixed32 = function(x) {
  return this._push(Pi, 4, x >>> 0);
};
z.prototype.sfixed32 = z.prototype.fixed32;
z.prototype.fixed64 = function(x) {
  var o = fo.from(x);
  return this._push(Pi, 4, o.lo)._push(Pi, 4, o.hi);
};
z.prototype.sfixed64 = z.prototype.fixed64;
z.prototype.float = function(x) {
  return this._push(ut.float.writeFloatLE, 4, x);
};
z.prototype.double = function(x) {
  return this._push(ut.float.writeDoubleLE, 8, x);
};
var BI = ut.Array.prototype.set ? function(x, o, t) {
  o.set(x, t);
} : function(x, o, t) {
  for (var e = 0; e < x.length; ++e)
    o[t + e] = x[e];
};
z.prototype.bytes = function(x) {
  var o = x.length >>> 0;
  if (!o)
    return this._push(sr, 1, 0);
  if (ut.isString(x)) {
    var t = z.alloc(o = _a.length(x));
    _a.decode(x, t, 0), x = t;
  }
  return this.uint32(o)._push(BI, o, x);
};
z.prototype.string = function(x) {
  var o = Ua.length(x);
  return o ? this.uint32(o)._push(Ua.write, o, x) : this._push(sr, 1, 0);
};
z.prototype.fork = function() {
  return this.states = new SI(this), this.head = this.tail = new Xn(ar, 0, 0), this.len = 0, this;
};
z.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Xn(ar, 0, 0), this.len = 0), this;
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
  Ri = x, z.create = tg(), Ri._configure();
};
var GI = Gt, ng = eg;
(Gt.prototype = Object.create(ng.prototype)).constructor = Gt;
var _t = b0();
function Gt() {
  ng.call(this);
}
Gt._configure = function() {
  Gt.alloc = _t._Buffer_allocUnsafe, Gt.writeBytesBuffer = _t.Buffer && _t.Buffer.prototype instanceof Uint8Array && _t.Buffer.prototype.set.name === "set" ? function(x, o, t) {
    o.set(x, t);
  } : function(x, o, t) {
    if (x.copy)
      x.copy(o, t, 0, x.length);
    else
      for (var e = 0; e < x.length; )
        o[t++] = x[e++];
  };
};
Gt.prototype.bytes = function(x) {
  _t.isString(x) && (x = _t._Buffer_from(x, "base64"));
  var o = x.length >>> 0;
  return this.uint32(o), o && this._push(Gt.writeBytesBuffer, o, x), this;
};
function kI(x, o, t) {
  x.length < 40 ? _t.utf8.write(x, o, t) : o.utf8Write ? o.utf8Write(x, t) : o.write(x, t);
}
Gt.prototype.string = function(x) {
  var o = _t.Buffer.byteLength(x);
  return this.uint32(o), o && this._push(kI, o, x), this;
};
Gt._configure();
var xg = Ie, kt = b0(), Vi, og = kt.LongBits, HI = kt.utf8;
function bt(x, o) {
  return RangeError("index out of range: " + x.pos + " + " + (o || 1) + " > " + x.len);
}
function Ie(x) {
  this.buf = x, this.pos = 0, this.len = x.length;
}
var Qa = typeof Uint8Array < "u" ? function(x) {
  if (x instanceof Uint8Array || Array.isArray(x))
    return new Ie(x);
  throw Error("illegal buffer");
} : function(x) {
  if (Array.isArray(x))
    return new Ie(x);
  throw Error("illegal buffer");
}, ig = function() {
  return kt.Buffer ? function(x) {
    return (Ie.create = function(o) {
      return kt.Buffer.isBuffer(o) ? new Vi(o) : Qa(o);
    })(x);
  } : Qa;
};
Ie.create = ig();
Ie.prototype._slice = kt.Array.prototype.subarray || /* istanbul ignore next */
kt.Array.prototype.slice;
Ie.prototype.uint32 = /* @__PURE__ */ function() {
  var x = 4294967295;
  return function() {
    if (x = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (x = (x | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return x;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, bt(this, 10);
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
function Jo() {
  var x = new og(0, 0), o = 0;
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
Ie.prototype.bool = function() {
  return this.uint32() !== 0;
};
function $x(x, o) {
  return (x[o - 4] | x[o - 3] << 8 | x[o - 2] << 16 | x[o - 1] << 24) >>> 0;
}
Ie.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw bt(this, 4);
  return $x(this.buf, this.pos += 4);
};
Ie.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw bt(this, 4);
  return $x(this.buf, this.pos += 4) | 0;
};
function za() {
  if (this.pos + 8 > this.len)
    throw bt(this, 8);
  return new og($x(this.buf, this.pos += 4), $x(this.buf, this.pos += 4));
}
Ie.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw bt(this, 4);
  var x = kt.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, x;
};
Ie.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw bt(this, 4);
  var x = kt.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, x;
};
Ie.prototype.bytes = function() {
  var x = this.uint32(), o = this.pos, t = this.pos + x;
  if (t > this.len)
    throw bt(this, x);
  return this.pos += x, Array.isArray(this.buf) ? this.buf.slice(o, t) : o === t ? new this.buf.constructor(0) : this._slice.call(this.buf, o, t);
};
Ie.prototype.string = function() {
  var x = this.bytes();
  return HI.read(x, 0, x.length);
};
Ie.prototype.skip = function(x) {
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
  Vi = x, Ie.create = ig(), Vi._configure();
  var o = kt.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  kt.merge(Ie.prototype, {
    int64: function() {
      return Jo.call(this)[o](!1);
    },
    uint64: function() {
      return Jo.call(this)[o](!0);
    },
    sint64: function() {
      return Jo.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return za.call(this)[o](!0);
    },
    sfixed64: function() {
      return za.call(this)[o](!1);
    }
  });
};
var OI = h0, rg = xg;
(h0.prototype = Object.create(rg.prototype)).constructor = h0;
var qa = b0();
function h0(x) {
  rg.call(this, x);
}
h0._configure = function() {
  qa.Buffer && (h0.prototype._slice = qa.Buffer.prototype.slice);
};
h0.prototype.string = function() {
  var x = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + x, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + x, this.len));
};
h0._configure();
var ag = {}, ZI = Sn, dr = b0();
(Sn.prototype = Object.create(dr.EventEmitter.prototype)).constructor = Sn;
function Sn(x, o, t) {
  if (typeof x != "function")
    throw TypeError("rpcImpl must be a function");
  dr.EventEmitter.call(this), this.rpcImpl = x, this.requestDelimited = !!o, this.responseDelimited = !!t;
}
Sn.prototype.rpcCall = function x(o, t, e, n, i) {
  if (!n)
    throw TypeError("request must be specified");
  var r = this;
  if (!i)
    return dr.asPromise(x, r, o, t, e, n);
  if (!r.rpcImpl) {
    setTimeout(function() {
      i(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return r.rpcImpl(
      o,
      t[r.requestDelimited ? "encodeDelimited" : "encode"](n).finish(),
      function(a, s) {
        if (a)
          return r.emit("error", a, o), i(a);
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
            return r.emit("error", c, o), i(c);
          }
        return r.emit("data", s, o), i(null, s);
      }
    );
  } catch (a) {
    r.emit("error", a, o), setTimeout(function() {
      i(a);
    }, 0);
    return;
  }
};
Sn.prototype.end = function(x) {
  return this.rpcImpl && (x || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(x) {
  var o = x;
  o.Service = ZI;
})(ag);
var KI = {};
(function(x) {
  var o = x;
  o.build = "minimal", o.Writer = eg, o.BufferWriter = GI, o.Reader = xg, o.BufferReader = OI, o.util = b0(), o.rpc = ag, o.roots = KI, o.configure = t;
  function t() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  t();
})(zc);
var ne = zc;
const B = ne.Reader, de = ne.Writer, v = ne.util, b = ne.roots.default || (ne.roots.default = {}), p0 = b.dot = (() => {
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
      let n = e === void 0 ? t.len : t.pos + e, i = new b.dot.Content();
      for (; t.pos < n; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            i.token = t.bytes();
            break;
          }
          case 2: {
            i.iv = t.bytes();
            break;
          }
          case 3: {
            i.schemaVersion = t.int32();
            break;
          }
          case 4: {
            i.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return i;
    }, o.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || v.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || v.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !v.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || v.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof b.dot.Content)
        return t;
      let e = new b.dot.Content();
      return t.token != null && (typeof t.token == "string" ? v.base64.decode(t.token, e.token = v.newBuffer(v.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? v.base64.decode(t.iv, e.iv = v.newBuffer(v.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? v.base64.decode(t.bytes, e.bytes = v.newBuffer(v.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.token = "" : (n.token = [], e.bytes !== Array && (n.token = v.newBuffer(n.token))), e.bytes === String ? n.iv = "" : (n.iv = [], e.bytes !== Array && (n.iv = v.newBuffer(n.iv))), n.schemaVersion = 0, e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = v.newBuffer(n.bytes)))), t.token != null && t.hasOwnProperty("token") && (n.token = e.bytes === String ? v.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (n.iv = e.bytes === String ? v.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (n.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? v.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
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
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.images = v.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.images != null && e.images.length)
          for (let i = 0; i < e.images.length; ++i)
            b.dot.Image.encode(e.images[i], n.uint32(
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
        let i = n === void 0 ? e.len : e.pos + n, r = new b.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.images && r.images.length || (r.images = []), r.images.push(b.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              r.metadata = b.dot.v4.Metadata.decode(e, e.uint32());
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
            let i = b.dot.Image.verify(e.images[n]);
            if (i)
              return "images." + i;
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
          for (let i = 0; i < e.images.length; ++i) {
            if (typeof e.images[i] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            n.images[i] = b.dot.Image.fromObject(e.images[i]);
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
        let i = {};
        if ((n.arrays || n.defaults) && (i.images = []), n.defaults && (i.metadata = null), e.images && e.images.length) {
          i.images = [];
          for (let r = 0; r < e.images.length; ++r)
            i.images[r] = b.dot.Image.toObject(e.images[r], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), o.Metadata = function() {
      function t(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
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
      }, t.encode = function(n, i) {
        return i || (i = de.create()), n.platform != null && Object.hasOwnProperty.call(n, "platform") && i.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.platform), n.web != null && Object.hasOwnProperty.call(n, "web") && b.dot.v4.WebMetadata.encode(n.web, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.android != null && Object.hasOwnProperty.call(n, "android") && b.dot.v4.AndroidMetadata.encode(n.android, i.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.ios != null && Object.hasOwnProperty.call(n, "ios") && b.dot.v4.IosMetadata.encode(n.ios, i.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.sessionToken != null && Object.hasOwnProperty.call(n, "sessionToken") && i.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(n.sessionToken), n.componentVersion != null && Object.hasOwnProperty.call(n, "componentVersion") && i.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(n.componentVersion), i;
      }, t.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, t.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new b.dot.v4.Metadata();
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
        let i = {};
        if (n.platform != null && n.hasOwnProperty("platform"))
          switch (n.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (n.sessionToken != null && n.hasOwnProperty("sessionToken") && (i._sessionToken = 1, !v.isString(n.sessionToken)))
          return "sessionToken: string expected";
        if (n.componentVersion != null && n.hasOwnProperty("componentVersion") && !v.isString(n.componentVersion))
          return "componentVersion: string expected";
        if (n.web != null && n.hasOwnProperty("web")) {
          i.metadata = 1;
          {
            let r = b.dot.v4.WebMetadata.verify(n.web);
            if (r)
              return "web." + r;
          }
        }
        if (n.android != null && n.hasOwnProperty("android")) {
          if (i.metadata === 1)
            return "metadata: multiple values";
          i.metadata = 1;
          {
            let r = b.dot.v4.AndroidMetadata.verify(n.android);
            if (r)
              return "android." + r;
          }
        }
        if (n.ios != null && n.hasOwnProperty("ios")) {
          if (i.metadata === 1)
            return "metadata: multiple values";
          i.metadata = 1;
          {
            let r = b.dot.v4.IosMetadata.verify(n.ios);
            if (r)
              return "ios." + r;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof b.dot.v4.Metadata)
          return n;
        let i = new b.dot.v4.Metadata();
        switch (n.platform) {
          default:
            if (typeof n.platform == "number") {
              i.platform = n.platform;
              break;
            }
            break;
          case "WEB":
          case 0:
            i.platform = 0;
            break;
          case "ANDROID":
          case 1:
            i.platform = 1;
            break;
          case "IOS":
          case 2:
            i.platform = 2;
            break;
        }
        if (n.sessionToken != null && (i.sessionToken = String(n.sessionToken)), n.componentVersion != null && (i.componentVersion = String(n.componentVersion)), n.web != null) {
          if (typeof n.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          i.web = b.dot.v4.WebMetadata.fromObject(n.web);
        }
        if (n.android != null) {
          if (typeof n.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          i.android = b.dot.v4.AndroidMetadata.fromObject(n.android);
        }
        if (n.ios != null) {
          if (typeof n.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          i.ios = b.dot.v4.IosMetadata.fromObject(n.ios);
        }
        return i;
      }, t.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return i.defaults && (r.platform = i.enums === String ? "WEB" : 0, r.componentVersion = ""), n.platform != null && n.hasOwnProperty("platform") && (r.platform = i.enums === String ? b.dot.Platform[n.platform] === void 0 ? n.platform : b.dot.Platform[n.platform] : n.platform), n.web != null && n.hasOwnProperty("web") && (r.web = b.dot.v4.WebMetadata.toObject(n.web, i), i.oneofs && (r.metadata = "web")), n.android != null && n.hasOwnProperty("android") && (r.android = b.dot.v4.AndroidMetadata.toObject(n.android, i), i.oneofs && (r.metadata = "android")), n.ios != null && n.hasOwnProperty("ios") && (r.ios = b.dot.v4.IosMetadata.toObject(n.ios, i), i.oneofs && (r.metadata = "ios")), n.sessionToken != null && n.hasOwnProperty("sessionToken") && (r.sessionToken = n.sessionToken, i.oneofs && (r._sessionToken = "sessionToken")), n.componentVersion != null && n.hasOwnProperty("componentVersion") && (r.componentVersion = n.componentVersion), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.Metadata";
      }, t;
    }(), o.AndroidMetadata = function() {
      function t(n) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      t.prototype.supportedAbis = v.emptyArray, t.prototype.device = null, t.prototype.digests = v.emptyArray, t.prototype.digestsWithTimestamp = v.emptyArray, t.prototype.dynamicCameraFrameProperties = v.emptyObject;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: v.oneOfGetter(e = ["device"]),
        set: v.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, i) {
        if (i || (i = de.create()), n.supportedAbis != null && n.supportedAbis.length)
          for (let r = 0; r < n.supportedAbis.length; ++r)
            i.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(n.supportedAbis[r]);
        if (n.device != null && Object.hasOwnProperty.call(n, "device") && i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(n.device), n.digests != null && n.digests.length)
          for (let r = 0; r < n.digests.length; ++r)
            i.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(n.digests[r]);
        if (n.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(n, "dynamicCameraFrameProperties"))
          for (let r = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < r.length; ++a)
            i.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[a]), b.dot.Int32List.encode(n.dynamicCameraFrameProperties[r[a]], i.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (n.digestsWithTimestamp != null && n.digestsWithTimestamp.length)
          for (let r = 0; r < n.digestsWithTimestamp.length; ++r)
            b.dot.DigestWithTimestamp.encode(n.digestsWithTimestamp[r], i.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return i;
      }, t.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, t.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new b.dot.v4.AndroidMetadata(), s, c;
        for (; n.pos < r; ) {
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
              a.dynamicCameraFrameProperties === v.emptyObject && (a.dynamicCameraFrameProperties = {});
              let g = n.uint32() + n.pos;
              for (s = "", c = null; n.pos < g; ) {
                let C = n.uint32();
                switch (C >>> 3) {
                  case 1:
                    s = n.string();
                    break;
                  case 2:
                    c = b.dot.Int32List.decode(n, n.uint32());
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
          for (let i = 0; i < n.supportedAbis.length; ++i)
            if (!v.isString(n.supportedAbis[i]))
              return "supportedAbis: string[] expected";
        }
        if (n.device != null && n.hasOwnProperty("device") && !v.isString(n.device))
          return "device: string expected";
        if (n.digests != null && n.hasOwnProperty("digests")) {
          if (!Array.isArray(n.digests))
            return "digests: array expected";
          for (let i = 0; i < n.digests.length; ++i)
            if (!(n.digests[i] && typeof n.digests[i].length == "number" || v.isString(n.digests[i])))
              return "digests: buffer[] expected";
        }
        if (n.digestsWithTimestamp != null && n.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(n.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let i = 0; i < n.digestsWithTimestamp.length; ++i) {
            let r = b.dot.DigestWithTimestamp.verify(n.digestsWithTimestamp[i]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (n.dynamicCameraFrameProperties != null && n.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!v.isObject(n.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let i = Object.keys(n.dynamicCameraFrameProperties);
          for (let r = 0; r < i.length; ++r) {
            let a = b.dot.Int32List.verify(n.dynamicCameraFrameProperties[i[r]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof b.dot.v4.AndroidMetadata)
          return n;
        let i = new b.dot.v4.AndroidMetadata();
        if (n.supportedAbis) {
          if (!Array.isArray(n.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          i.supportedAbis = [];
          for (let r = 0; r < n.supportedAbis.length; ++r)
            i.supportedAbis[r] = String(n.supportedAbis[r]);
        }
        if (n.device != null && (i.device = String(n.device)), n.digests) {
          if (!Array.isArray(n.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          i.digests = [];
          for (let r = 0; r < n.digests.length; ++r)
            typeof n.digests[r] == "string" ? v.base64.decode(n.digests[r], i.digests[r] = v.newBuffer(v.base64.length(n.digests[r])), 0) : n.digests[r].length >= 0 && (i.digests[r] = n.digests[r]);
        }
        if (n.digestsWithTimestamp) {
          if (!Array.isArray(n.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          i.digestsWithTimestamp = [];
          for (let r = 0; r < n.digestsWithTimestamp.length; ++r) {
            if (typeof n.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            i.digestsWithTimestamp[r] = b.dot.DigestWithTimestamp.fromObject(n.digestsWithTimestamp[r]);
          }
        }
        if (n.dynamicCameraFrameProperties) {
          if (typeof n.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          i.dynamicCameraFrameProperties = {};
          for (let r = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < r.length; ++a) {
            if (typeof n.dynamicCameraFrameProperties[r[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            i.dynamicCameraFrameProperties[r[a]] = b.dot.Int32List.fromObject(n.dynamicCameraFrameProperties[r[a]]);
          }
        }
        return i;
      }, t.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        if ((i.arrays || i.defaults) && (r.supportedAbis = [], r.digests = [], r.digestsWithTimestamp = []), (i.objects || i.defaults) && (r.dynamicCameraFrameProperties = {}), n.supportedAbis && n.supportedAbis.length) {
          r.supportedAbis = [];
          for (let s = 0; s < n.supportedAbis.length; ++s)
            r.supportedAbis[s] = n.supportedAbis[s];
        }
        if (n.device != null && n.hasOwnProperty("device") && (r.device = n.device, i.oneofs && (r._device = "device")), n.digests && n.digests.length) {
          r.digests = [];
          for (let s = 0; s < n.digests.length; ++s)
            r.digests[s] = i.bytes === String ? v.base64.encode(n.digests[s], 0, n.digests[s].length) : i.bytes === Array ? Array.prototype.slice.call(n.digests[s]) : n.digests[s];
        }
        let a;
        if (n.dynamicCameraFrameProperties && (a = Object.keys(n.dynamicCameraFrameProperties)).length) {
          r.dynamicCameraFrameProperties = {};
          for (let s = 0; s < a.length; ++s)
            r.dynamicCameraFrameProperties[a[s]] = b.dot.Int32List.toObject(n.dynamicCameraFrameProperties[a[s]], i);
        }
        if (n.digestsWithTimestamp && n.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let s = 0; s < n.digestsWithTimestamp.length; ++s)
            r.digestsWithTimestamp[s] = b.dot.DigestWithTimestamp.toObject(n.digestsWithTimestamp[s], i);
        }
        return r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.AndroidMetadata";
      }, t;
    }(), o.IosMetadata = function() {
      function t(e) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.cameraModelId = "", t.prototype.architectureInfo = v.emptyObject, t.prototype.digests = v.emptyArray, t.prototype.digestsWithTimestamp = v.emptyArray, t.prototype.isoValues = v.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.cameraModelId != null && Object.hasOwnProperty.call(e, "cameraModelId") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.cameraModelId), e.architectureInfo != null && Object.hasOwnProperty.call(e, "architectureInfo"))
          for (let i = Object.keys(e.architectureInfo), r = 0; r < i.length; ++r)
            n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(i[r]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(e.architectureInfo[i[r]]).ldelim();
        if (e.digests != null && e.digests.length)
          for (let i = 0; i < e.digests.length; ++i)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(e.digests[i]);
        if (e.isoValues != null && e.isoValues.length) {
          n.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let i = 0; i < e.isoValues.length; ++i)
            n.int32(e.isoValues[i]);
          n.ldelim();
        }
        if (e.digestsWithTimestamp != null && e.digestsWithTimestamp.length)
          for (let i = 0; i < e.digestsWithTimestamp.length; ++i)
            b.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[i], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let i = n === void 0 ? e.len : e.pos + n, r = new b.dot.v4.IosMetadata(), a, s;
        for (; e.pos < i; ) {
          let c = e.uint32();
          switch (c >>> 3) {
            case 1: {
              r.cameraModelId = e.string();
              break;
            }
            case 2: {
              r.architectureInfo === v.emptyObject && (r.architectureInfo = {});
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
              r.architectureInfo[a] = s;
              break;
            }
            case 3: {
              r.digests && r.digests.length || (r.digests = []), r.digests.push(e.bytes());
              break;
            }
            case 5: {
              r.digestsWithTimestamp && r.digestsWithTimestamp.length || (r.digestsWithTimestamp = []), r.digestsWithTimestamp.push(b.dot.DigestWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              if (r.isoValues && r.isoValues.length || (r.isoValues = []), (c & 7) === 2) {
                let u = e.uint32() + e.pos;
                for (; e.pos < u; )
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
          for (let i = 0; i < n.length; ++i)
            if (typeof e.architectureInfo[n[i]] != "boolean")
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
            let i = b.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[n]);
            if (i)
              return "digestsWithTimestamp." + i;
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
        if (e instanceof b.dot.v4.IosMetadata)
          return e;
        let n = new b.dot.v4.IosMetadata();
        if (e.cameraModelId != null && (n.cameraModelId = String(e.cameraModelId)), e.architectureInfo) {
          if (typeof e.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          n.architectureInfo = {};
          for (let i = Object.keys(e.architectureInfo), r = 0; r < i.length; ++r)
            n.architectureInfo[i[r]] = !!e.architectureInfo[i[r]];
        }
        if (e.digests) {
          if (!Array.isArray(e.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          n.digests = [];
          for (let i = 0; i < e.digests.length; ++i)
            typeof e.digests[i] == "string" ? v.base64.decode(e.digests[i], n.digests[i] = v.newBuffer(v.base64.length(e.digests[i])), 0) : e.digests[i].length >= 0 && (n.digests[i] = e.digests[i]);
        }
        if (e.digestsWithTimestamp) {
          if (!Array.isArray(e.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let i = 0; i < e.digestsWithTimestamp.length; ++i) {
            if (typeof e.digestsWithTimestamp[i] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[i] = b.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[i]);
          }
        }
        if (e.isoValues) {
          if (!Array.isArray(e.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          n.isoValues = [];
          for (let i = 0; i < e.isoValues.length; ++i)
            n.isoValues[i] = e.isoValues[i] | 0;
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        (n.arrays || n.defaults) && (i.digests = [], i.isoValues = [], i.digestsWithTimestamp = []), (n.objects || n.defaults) && (i.architectureInfo = {}), n.defaults && (i.cameraModelId = ""), e.cameraModelId != null && e.hasOwnProperty("cameraModelId") && (i.cameraModelId = e.cameraModelId);
        let r;
        if (e.architectureInfo && (r = Object.keys(e.architectureInfo)).length) {
          i.architectureInfo = {};
          for (let a = 0; a < r.length; ++a)
            i.architectureInfo[r[a]] = e.architectureInfo[r[a]];
        }
        if (e.digests && e.digests.length) {
          i.digests = [];
          for (let a = 0; a < e.digests.length; ++a)
            i.digests[a] = n.bytes === String ? v.base64.encode(e.digests[a], 0, e.digests[a].length) : n.bytes === Array ? Array.prototype.slice.call(e.digests[a]) : e.digests[a];
        }
        if (e.isoValues && e.isoValues.length) {
          i.isoValues = [];
          for (let a = 0; a < e.isoValues.length; ++a)
            i.isoValues[a] = e.isoValues[a];
        }
        if (e.digestsWithTimestamp && e.digestsWithTimestamp.length) {
          i.digestsWithTimestamp = [];
          for (let a = 0; a < e.digestsWithTimestamp.length; ++a)
            i.digestsWithTimestamp[a] = b.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[a], n);
        }
        return i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosMetadata";
      }, t;
    }(), o.WebMetadata = function() {
      function t(e) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = v.emptyArray, t.prototype.hashedDetectedImages = v.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = v.emptyArray, t.prototype.detectionRecord = v.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && b.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.availableCameraProperties != null && e.availableCameraProperties.length)
          for (let i = 0; i < e.availableCameraProperties.length; ++i)
            b.dot.v4.CameraProperties.encode(e.availableCameraProperties[i], n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (e.hashedDetectedImages != null && e.hashedDetectedImages.length)
          for (let i = 0; i < e.hashedDetectedImages.length; ++i)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(e.hashedDetectedImages[i]);
        if (e.detectionRecord != null && e.detectionRecord.length)
          for (let i = 0; i < e.detectionRecord.length; ++i)
            b.dot.v4.DetectedObject.encode(e.detectionRecord[i], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (e.hashedDetectedImagesWithTimestamp != null && e.hashedDetectedImagesWithTimestamp.length)
          for (let i = 0; i < e.hashedDetectedImagesWithTimestamp.length; ++i)
            b.dot.v4.HashedDetectedImageWithTimestamp.encode(e.hashedDetectedImagesWithTimestamp[i], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let i = n === void 0 ? e.len : e.pos + n, r = new b.dot.v4.WebMetadata();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.currentCameraProperties = b.dot.v4.MediaTrackSettings.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.availableCameraProperties && r.availableCameraProperties.length || (r.availableCameraProperties = []), r.availableCameraProperties.push(b.dot.v4.CameraProperties.decode(e, e.uint32()));
              break;
            }
            case 3: {
              r.hashedDetectedImages && r.hashedDetectedImages.length || (r.hashedDetectedImages = []), r.hashedDetectedImages.push(e.string());
              break;
            }
            case 5: {
              r.hashedDetectedImagesWithTimestamp && r.hashedDetectedImagesWithTimestamp.length || (r.hashedDetectedImagesWithTimestamp = []), r.hashedDetectedImagesWithTimestamp.push(b.dot.v4.HashedDetectedImageWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              r.detectionRecord && r.detectionRecord.length || (r.detectionRecord = []), r.detectionRecord.push(b.dot.v4.DetectedObject.decode(e, e.uint32()));
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
          let n = b.dot.v4.MediaTrackSettings.verify(e.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (e.availableCameraProperties != null && e.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(e.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < e.availableCameraProperties.length; ++n) {
            let i = b.dot.v4.CameraProperties.verify(e.availableCameraProperties[n]);
            if (i)
              return "availableCameraProperties." + i;
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
            let i = b.dot.v4.HashedDetectedImageWithTimestamp.verify(e.hashedDetectedImagesWithTimestamp[n]);
            if (i)
              return "hashedDetectedImagesWithTimestamp." + i;
          }
        }
        if (e.detectionRecord != null && e.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(e.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < e.detectionRecord.length; ++n) {
            let i = b.dot.v4.DetectedObject.verify(e.detectionRecord[n]);
            if (i)
              return "detectionRecord." + i;
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
          for (let i = 0; i < e.availableCameraProperties.length; ++i) {
            if (typeof e.availableCameraProperties[i] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[i] = b.dot.v4.CameraProperties.fromObject(e.availableCameraProperties[i]);
          }
        }
        if (e.hashedDetectedImages) {
          if (!Array.isArray(e.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          n.hashedDetectedImages = [];
          for (let i = 0; i < e.hashedDetectedImages.length; ++i)
            n.hashedDetectedImages[i] = String(e.hashedDetectedImages[i]);
        }
        if (e.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(e.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          n.hashedDetectedImagesWithTimestamp = [];
          for (let i = 0; i < e.hashedDetectedImagesWithTimestamp.length; ++i) {
            if (typeof e.hashedDetectedImagesWithTimestamp[i] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            n.hashedDetectedImagesWithTimestamp[i] = b.dot.v4.HashedDetectedImageWithTimestamp.fromObject(e.hashedDetectedImagesWithTimestamp[i]);
          }
        }
        if (e.detectionRecord) {
          if (!Array.isArray(e.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let i = 0; i < e.detectionRecord.length; ++i) {
            if (typeof e.detectionRecord[i] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[i] = b.dot.v4.DetectedObject.fromObject(e.detectionRecord[i]);
          }
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        if ((n.arrays || n.defaults) && (i.availableCameraProperties = [], i.hashedDetectedImages = [], i.detectionRecord = [], i.hashedDetectedImagesWithTimestamp = []), n.defaults && (i.currentCameraProperties = null), e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties") && (i.currentCameraProperties = b.dot.v4.MediaTrackSettings.toObject(e.currentCameraProperties, n)), e.availableCameraProperties && e.availableCameraProperties.length) {
          i.availableCameraProperties = [];
          for (let r = 0; r < e.availableCameraProperties.length; ++r)
            i.availableCameraProperties[r] = b.dot.v4.CameraProperties.toObject(e.availableCameraProperties[r], n);
        }
        if (e.hashedDetectedImages && e.hashedDetectedImages.length) {
          i.hashedDetectedImages = [];
          for (let r = 0; r < e.hashedDetectedImages.length; ++r)
            i.hashedDetectedImages[r] = e.hashedDetectedImages[r];
        }
        if (e.detectionRecord && e.detectionRecord.length) {
          i.detectionRecord = [];
          for (let r = 0; r < e.detectionRecord.length; ++r)
            i.detectionRecord[r] = b.dot.v4.DetectedObject.toObject(e.detectionRecord[r], n);
        }
        if (e.hashedDetectedImagesWithTimestamp && e.hashedDetectedImagesWithTimestamp.length) {
          i.hashedDetectedImagesWithTimestamp = [];
          for (let r = 0; r < e.hashedDetectedImagesWithTimestamp.length; ++r)
            i.hashedDetectedImagesWithTimestamp[r] = b.dot.v4.HashedDetectedImageWithTimestamp.toObject(e.hashedDetectedImagesWithTimestamp[r], n);
        }
        return i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.WebMetadata";
      }, t;
    }(), o.HashedDetectedImageWithTimestamp = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
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
        let i = n === void 0 ? e.len : e.pos + n, r = new b.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < i; ) {
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
        if (e instanceof b.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let n = new b.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (n.imageHash = String(e.imageHash)), e.timestampMillis != null && (v.Long ? (n.timestampMillis = v.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? n.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? n.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (n.timestampMillis = new v.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        if (n.defaults)
          if (i.imageHash = "", v.Long) {
            let r = new v.Long(0, 0, !0);
            i.timestampMillis = n.longs === String ? r.toString() : n.longs === Number ? r.toNumber() : r;
          } else
            i.timestampMillis = n.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (i.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? i.timestampMillis = n.longs === String ? String(e.timestampMillis) : e.timestampMillis : i.timestampMillis = n.longs === String ? v.Long.prototype.toString.call(e.timestampMillis) : n.longs === Number ? new v.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), o.MediaTrackSettings = function() {
      function t(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
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
      }, t.encode = function(n, i) {
        return i || (i = de.create()), n.aspectRatio != null && Object.hasOwnProperty.call(n, "aspectRatio") && i.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(n.aspectRatio), n.autoGainControl != null && Object.hasOwnProperty.call(n, "autoGainControl") && i.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(n.autoGainControl), n.channelCount != null && Object.hasOwnProperty.call(n, "channelCount") && i.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(n.channelCount), n.deviceId != null && Object.hasOwnProperty.call(n, "deviceId") && i.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(n.deviceId), n.displaySurface != null && Object.hasOwnProperty.call(n, "displaySurface") && i.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(n.displaySurface), n.echoCancellation != null && Object.hasOwnProperty.call(n, "echoCancellation") && i.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(n.echoCancellation), n.facingMode != null && Object.hasOwnProperty.call(n, "facingMode") && i.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(n.facingMode), n.frameRate != null && Object.hasOwnProperty.call(n, "frameRate") && i.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(n.frameRate), n.groupId != null && Object.hasOwnProperty.call(n, "groupId") && i.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(n.groupId), n.height != null && Object.hasOwnProperty.call(n, "height") && i.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(n.height), n.noiseSuppression != null && Object.hasOwnProperty.call(n, "noiseSuppression") && i.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(n.noiseSuppression), n.sampleRate != null && Object.hasOwnProperty.call(n, "sampleRate") && i.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(n.sampleRate), n.sampleSize != null && Object.hasOwnProperty.call(n, "sampleSize") && i.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(n.sampleSize), n.width != null && Object.hasOwnProperty.call(n, "width") && i.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(n.width), n.deviceName != null && Object.hasOwnProperty.call(n, "deviceName") && i.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(n.deviceName), i;
      }, t.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, t.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new b.dot.v4.MediaTrackSettings();
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
        if (n instanceof b.dot.v4.MediaTrackSettings)
          return n;
        let i = new b.dot.v4.MediaTrackSettings();
        return n.aspectRatio != null && (i.aspectRatio = Number(n.aspectRatio)), n.autoGainControl != null && (i.autoGainControl = !!n.autoGainControl), n.channelCount != null && (i.channelCount = n.channelCount | 0), n.deviceId != null && (i.deviceId = String(n.deviceId)), n.displaySurface != null && (i.displaySurface = String(n.displaySurface)), n.echoCancellation != null && (i.echoCancellation = !!n.echoCancellation), n.facingMode != null && (i.facingMode = String(n.facingMode)), n.frameRate != null && (i.frameRate = Number(n.frameRate)), n.groupId != null && (i.groupId = String(n.groupId)), n.height != null && (i.height = n.height | 0), n.noiseSuppression != null && (i.noiseSuppression = !!n.noiseSuppression), n.sampleRate != null && (i.sampleRate = n.sampleRate | 0), n.sampleSize != null && (i.sampleSize = n.sampleSize | 0), n.width != null && (i.width = n.width | 0), n.deviceName != null && (i.deviceName = String(n.deviceName)), i;
      }, t.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && (r.aspectRatio = i.json && !isFinite(n.aspectRatio) ? String(n.aspectRatio) : n.aspectRatio, i.oneofs && (r._aspectRatio = "aspectRatio")), n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && (r.autoGainControl = n.autoGainControl, i.oneofs && (r._autoGainControl = "autoGainControl")), n.channelCount != null && n.hasOwnProperty("channelCount") && (r.channelCount = n.channelCount, i.oneofs && (r._channelCount = "channelCount")), n.deviceId != null && n.hasOwnProperty("deviceId") && (r.deviceId = n.deviceId, i.oneofs && (r._deviceId = "deviceId")), n.displaySurface != null && n.hasOwnProperty("displaySurface") && (r.displaySurface = n.displaySurface, i.oneofs && (r._displaySurface = "displaySurface")), n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && (r.echoCancellation = n.echoCancellation, i.oneofs && (r._echoCancellation = "echoCancellation")), n.facingMode != null && n.hasOwnProperty("facingMode") && (r.facingMode = n.facingMode, i.oneofs && (r._facingMode = "facingMode")), n.frameRate != null && n.hasOwnProperty("frameRate") && (r.frameRate = i.json && !isFinite(n.frameRate) ? String(n.frameRate) : n.frameRate, i.oneofs && (r._frameRate = "frameRate")), n.groupId != null && n.hasOwnProperty("groupId") && (r.groupId = n.groupId, i.oneofs && (r._groupId = "groupId")), n.height != null && n.hasOwnProperty("height") && (r.height = n.height, i.oneofs && (r._height = "height")), n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && (r.noiseSuppression = n.noiseSuppression, i.oneofs && (r._noiseSuppression = "noiseSuppression")), n.sampleRate != null && n.hasOwnProperty("sampleRate") && (r.sampleRate = n.sampleRate, i.oneofs && (r._sampleRate = "sampleRate")), n.sampleSize != null && n.hasOwnProperty("sampleSize") && (r.sampleSize = n.sampleSize, i.oneofs && (r._sampleSize = "sampleSize")), n.width != null && n.hasOwnProperty("width") && (r.width = n.width, i.oneofs && (r._width = "width")), n.deviceName != null && n.hasOwnProperty("deviceName") && (r.deviceName = n.deviceName, i.oneofs && (r._deviceName = "deviceName")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.MediaTrackSettings";
      }, t;
    }(), o.ImageBitmap = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
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
        let i = n === void 0 ? e.len : e.pos + n, r = new b.dot.v4.ImageBitmap();
        for (; e.pos < i; ) {
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
        if (e instanceof b.dot.v4.ImageBitmap)
          return e;
        let n = new b.dot.v4.ImageBitmap();
        return e.width != null && (n.width = e.width | 0), e.height != null && (n.height = e.height | 0), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        return n.defaults && (i.width = 0, i.height = 0), e.width != null && e.hasOwnProperty("width") && (i.width = e.width), e.height != null && e.hasOwnProperty("height") && (i.height = e.height), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    }(), o.CameraProperties = function() {
      function t(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: v.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: v.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, i) {
        return i || (i = de.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && b.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.cameraProperties != null && Object.hasOwnProperty.call(n, "cameraProperties") && b.dot.v4.MediaTrackSettings.encode(n.cameraProperties, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, t.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new b.dot.v4.CameraProperties();
        for (; n.pos < r; ) {
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
          let i = b.dot.v4.ImageBitmap.verify(n.cameraInitFrameResolution);
          if (i)
            return "cameraInitFrameResolution." + i;
        }
        if (n.cameraProperties != null && n.hasOwnProperty("cameraProperties")) {
          let i = b.dot.v4.MediaTrackSettings.verify(n.cameraProperties);
          if (i)
            return "cameraProperties." + i;
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof b.dot.v4.CameraProperties)
          return n;
        let i = new b.dot.v4.CameraProperties();
        if (n.cameraInitFrameResolution != null) {
          if (typeof n.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          i.cameraInitFrameResolution = b.dot.v4.ImageBitmap.fromObject(n.cameraInitFrameResolution);
        }
        if (n.cameraProperties != null) {
          if (typeof n.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          i.cameraProperties = b.dot.v4.MediaTrackSettings.fromObject(n.cameraProperties);
        }
        return i;
      }, t.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return i.defaults && (r.cameraProperties = null), n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution") && (r.cameraInitFrameResolution = b.dot.v4.ImageBitmap.toObject(n.cameraInitFrameResolution, i), i.oneofs && (r._cameraInitFrameResolution = "cameraInitFrameResolution")), n.cameraProperties != null && n.hasOwnProperty("cameraProperties") && (r.cameraProperties = b.dot.v4.MediaTrackSettings.toObject(n.cameraProperties, i)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.CameraProperties";
      }, t;
    }(), o.DetectedObject = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
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
        let i = n === void 0 ? e.len : e.pos + n, r = new b.dot.v4.DetectedObject();
        for (; e.pos < i; ) {
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
              r.faceCenter = b.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              r.smallestEdge = e.float();
              break;
            }
            case 8: {
              r.bottomLeft = b.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              r.bottomRight = b.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              r.topLeft = b.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              r.topRight = b.dot.v4.Point.decode(e, e.uint32());
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
        let i = {};
        return n.defaults && (i.brightness = 0, i.sharpness = 0, i.hotspots = 0, i.confidence = 0, i.faceSize = 0, i.faceCenter = null, i.smallestEdge = 0, i.bottomLeft = null, i.bottomRight = null, i.topLeft = null, i.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (i.brightness = n.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (i.sharpness = n.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (i.hotspots = n.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (i.confidence = n.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (i.faceSize = n.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (i.faceCenter = b.dot.v4.Point.toObject(e.faceCenter, n)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (i.smallestEdge = n.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (i.bottomLeft = b.dot.v4.Point.toObject(e.bottomLeft, n)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (i.bottomRight = b.dot.v4.Point.toObject(e.bottomRight, n)), e.topLeft != null && e.hasOwnProperty("topLeft") && (i.topLeft = b.dot.v4.Point.toObject(e.topLeft, n)), e.topRight != null && e.hasOwnProperty("topRight") && (i.topRight = b.dot.v4.Point.toObject(e.topRight, n)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    }(), o.Point = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
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
        let i = n === void 0 ? e.len : e.pos + n, r = new b.dot.v4.Point();
        for (; e.pos < i; ) {
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
        if (e instanceof b.dot.v4.Point)
          return e;
        let n = new b.dot.v4.Point();
        return e.x != null && (n.x = Number(e.x)), e.y != null && (n.y = Number(e.y)), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        return n.defaults && (i.x = 0, i.y = 0), e.x != null && e.hasOwnProperty("x") && (i.x = n.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (i.y = n.json && !isFinite(e.y) ? String(e.y) : e.y), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    }(), o.FaceContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = de.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && b.dot.Image.encode(e.image, n.uint32(
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
        let i = n === void 0 ? e.len : e.pos + n, r = new b.dot.v4.FaceContent();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.image = b.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = b.dot.v4.Metadata.decode(e, e.uint32());
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
        let i = {};
        return n.defaults && (i.image = null, i.metadata = null), e.image != null && e.hasOwnProperty("image") && (i.image = b.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceContent";
      }, t;
    }(), o.DocumentContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = de.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && b.dot.Image.encode(e.image, n.uint32(
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
        let i = n === void 0 ? e.len : e.pos + n, r = new b.dot.v4.DocumentContent();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.image = b.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = b.dot.v4.Metadata.decode(e, e.uint32());
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
        let i = {};
        return n.defaults && (i.image = null, i.metadata = null), e.image != null && e.hasOwnProperty("image") && (i.image = b.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), o.Blob = function() {
      function t(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: v.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent"]),
        set: v.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, i) {
        return i || (i = de.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && b.dot.v4.DocumentContent.encode(n.documentContent, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.faceContent != null && Object.hasOwnProperty.call(n, "faceContent") && b.dot.v4.FaceContent.encode(n.faceContent, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(n, "magnifeyeLivenessContent") && b.dot.v4.MagnifEyeLivenessContent.encode(n.magnifeyeLivenessContent, i.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.smileLivenessContent != null && Object.hasOwnProperty.call(n, "smileLivenessContent") && b.dot.v4.SmileLivenessContent.encode(n.smileLivenessContent, i.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(n, "eyeGazeLivenessContent") && b.dot.v4.EyeGazeLivenessContent.encode(n.eyeGazeLivenessContent, i.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, t.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new b.dot.v4.Blob();
        for (; n.pos < r; ) {
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
        let i = {};
        if (n.documentContent != null && n.hasOwnProperty("documentContent")) {
          i.blob = 1;
          {
            let r = b.dot.v4.DocumentContent.verify(n.documentContent);
            if (r)
              return "documentContent." + r;
          }
        }
        if (n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let r = b.dot.v4.EyeGazeLivenessContent.verify(n.eyeGazeLivenessContent);
            if (r)
              return "eyeGazeLivenessContent." + r;
          }
        }
        if (n.faceContent != null && n.hasOwnProperty("faceContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let r = b.dot.v4.FaceContent.verify(n.faceContent);
            if (r)
              return "faceContent." + r;
          }
        }
        if (n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let r = b.dot.v4.MagnifEyeLivenessContent.verify(n.magnifeyeLivenessContent);
            if (r)
              return "magnifeyeLivenessContent." + r;
          }
        }
        if (n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let r = b.dot.v4.SmileLivenessContent.verify(n.smileLivenessContent);
            if (r)
              return "smileLivenessContent." + r;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof b.dot.v4.Blob)
          return n;
        let i = new b.dot.v4.Blob();
        if (n.documentContent != null) {
          if (typeof n.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          i.documentContent = b.dot.v4.DocumentContent.fromObject(n.documentContent);
        }
        if (n.eyeGazeLivenessContent != null) {
          if (typeof n.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          i.eyeGazeLivenessContent = b.dot.v4.EyeGazeLivenessContent.fromObject(n.eyeGazeLivenessContent);
        }
        if (n.faceContent != null) {
          if (typeof n.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          i.faceContent = b.dot.v4.FaceContent.fromObject(n.faceContent);
        }
        if (n.magnifeyeLivenessContent != null) {
          if (typeof n.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          i.magnifeyeLivenessContent = b.dot.v4.MagnifEyeLivenessContent.fromObject(n.magnifeyeLivenessContent);
        }
        if (n.smileLivenessContent != null) {
          if (typeof n.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          i.smileLivenessContent = b.dot.v4.SmileLivenessContent.fromObject(n.smileLivenessContent);
        }
        return i;
      }, t.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return n.documentContent != null && n.hasOwnProperty("documentContent") && (r.documentContent = b.dot.v4.DocumentContent.toObject(n.documentContent, i), i.oneofs && (r.blob = "documentContent")), n.faceContent != null && n.hasOwnProperty("faceContent") && (r.faceContent = b.dot.v4.FaceContent.toObject(n.faceContent, i), i.oneofs && (r.blob = "faceContent")), n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent") && (r.magnifeyeLivenessContent = b.dot.v4.MagnifEyeLivenessContent.toObject(n.magnifeyeLivenessContent, i), i.oneofs && (r.blob = "magnifeyeLivenessContent")), n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent") && (r.smileLivenessContent = b.dot.v4.SmileLivenessContent.toObject(n.smileLivenessContent, i), i.oneofs && (r.blob = "smileLivenessContent")), n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent") && (r.eyeGazeLivenessContent = b.dot.v4.EyeGazeLivenessContent.toObject(n.eyeGazeLivenessContent, i), i.oneofs && (r.blob = "eyeGazeLivenessContent")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.Blob";
      }, t;
    }(), o.EyeGazeLivenessContent = function() {
      function t(e) {
        if (this.segments = [], e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.segments = v.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.segments != null && e.segments.length)
          for (let i = 0; i < e.segments.length; ++i)
            b.dot.v4.EyeGazeLivenessSegment.encode(e.segments[i], n.uint32(
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
        let i = n === void 0 ? e.len : e.pos + n, r = new b.dot.v4.EyeGazeLivenessContent();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.segments && r.segments.length || (r.segments = []), r.segments.push(b.dot.v4.EyeGazeLivenessSegment.decode(e, e.uint32()));
              break;
            }
            case 2: {
              r.metadata = b.dot.v4.Metadata.decode(e, e.uint32());
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
            let i = b.dot.v4.EyeGazeLivenessSegment.verify(e.segments[n]);
            if (i)
              return "segments." + i;
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
          for (let i = 0; i < e.segments.length; ++i) {
            if (typeof e.segments[i] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[i] = b.dot.v4.EyeGazeLivenessSegment.fromObject(e.segments[i]);
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
        let i = {};
        if ((n.arrays || n.defaults) && (i.segments = []), n.defaults && (i.metadata = null), e.segments && e.segments.length) {
          i.segments = [];
          for (let r = 0; r < e.segments.length; ++r)
            i.segments[r] = b.dot.v4.EyeGazeLivenessSegment.toObject(e.segments[r], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), o.EyeGazeLivenessSegment = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = de.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && n.uint32(
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
        let i = n === void 0 ? e.len : e.pos + n, r = new b.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.corner = e.int32();
              break;
            }
            case 2: {
              r.image = b.dot.Image.decode(e, e.uint32());
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
        let i = {};
        return n.defaults && (i.corner = n.enums === String ? "TOP_LEFT" : 0, i.image = null), e.corner != null && e.hasOwnProperty("corner") && (i.corner = n.enums === String ? b.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : b.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (i.image = b.dot.Image.toObject(e.image, n)), i;
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
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = de.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && b.dot.Image.encode(e.neutralExpressionFaceImage, n.uint32(
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
        let i = n === void 0 ? e.len : e.pos + n, r = new b.dot.v4.SmileLivenessContent();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.neutralExpressionFaceImage = b.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.smileExpressionFaceImage = b.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              r.metadata = b.dot.v4.Metadata.decode(e, e.uint32());
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
        let i = {};
        return n.defaults && (i.neutralExpressionFaceImage = null, i.smileExpressionFaceImage = null, i.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (i.neutralExpressionFaceImage = b.dot.Image.toObject(e.neutralExpressionFaceImage, n)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (i.smileExpressionFaceImage = b.dot.Image.toObject(e.smileExpressionFaceImage, n)), e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), i;
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
      let n = e === void 0 ? t.len : t.pos + e, i = new b.dot.Image();
      for (; t.pos < n; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            i.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return i;
    }, o.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || v.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof b.dot.Image)
        return t;
      let e = new b.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? v.base64.decode(t.bytes, e.bytes = v.newBuffer(v.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = v.newBuffer(n.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? v.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
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
      let n = e === void 0 ? t.len : t.pos + e, i = new b.dot.Int32List();
      for (; t.pos < n; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            if (i.items && i.items.length || (i.items = []), (r & 7) === 2) {
              let a = t.uint32() + t.pos;
              for (; t.pos < a; )
                i.items.push(t.int32());
            } else
              i.items.push(t.int32());
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return i;
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
        for (let i = 0; i < t.items.length; ++i)
          n.items[i] = t.items[i];
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
      let n = e === void 0 ? t.len : t.pos + e, i = new b.dot.DigestWithTimestamp();
      for (; t.pos < n; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            i.digest = t.bytes();
            break;
          }
          case 2: {
            i.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return i;
    }, o.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || v.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !v.isInteger(t.timestampMillis) && !(t.timestampMillis && v.isInteger(t.timestampMillis.low) && v.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof b.dot.DigestWithTimestamp)
        return t;
      let e = new b.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? v.base64.decode(t.digest, e.digest = v.newBuffer(v.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (v.Long ? (e.timestampMillis = v.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new v.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      if (e.defaults)
        if (e.bytes === String ? n.digest = "" : (n.digest = [], e.bytes !== Array && (n.digest = v.newBuffer(n.digest))), v.Long) {
          let i = new v.Long(0, 0, !0);
          n.timestampMillis = e.longs === String ? i.toString() : e.longs === Number ? i.toNumber() : i;
        } else
          n.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (n.digest = e.bytes === String ? v.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? n.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : n.timestampMillis = e.longs === String ? v.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new v.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, o;
  }(), x;
})();
async function sg(x) {
  const { Image: o } = p0, t = await x.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const i = o.verify(n);
  if (i) throw Error(i);
  const r = {};
  return r.bytes = e, o.create(r);
}
async function cg(x) {
  const { v4: { Metadata: o } } = p0, t = { ...x };
  t.platform = p0.Platform.WEB;
  const e = t, n = o.verify(e);
  if (n) throw Error(n);
  return o.create(e);
}
async function gg(x) {
  const { Content: o } = p0, { iv: t, key: e, message: n } = await T1(x), i = { token: new Uint8Array(e), iv: t, schemaVersion: gl, bytes: new Uint8Array(n) }, r = o.verify(i);
  if (r) throw Error(r);
  const a = o.create(i);
  return o.encode(a).finish();
}
function dg({ documentContent: x, faceContent: o, magnifeyeLivenessContent: t, smileLivenessContent: e }) {
  const { Blob: n } = p0.v4, i = {};
  i.documentContent = x, i.faceContent = o, i.magnifeyeLivenessContent = t, i.smileLivenessContent = e;
  const r = i, a = n.verify(r);
  if (a) throw Error(a);
  const s = n.create(r);
  return n.encode(s).finish();
}
async function RI(x, o) {
  const { FaceContent: t } = p0.v4, e = await sg(x), n = await cg(o), i = {};
  i.image = e, i.metadata = n;
  const r = i, a = t.verify(r);
  if (a) throw Error(a);
  const s = t.create(r), c = {};
  return c.faceContent = s, dg(c);
}
async function PI(x, o) {
  const t = await RI(x, o);
  return gg(t);
}
const VI = ({ onPhotoTakenInternal: x }) => {
  const { redfin: o, sunfish: t } = er(), { analytics: e } = sc(), { appState: n, freemiumOverlayState: i } = tn(), { faceCameraOptions: r } = kc(), { cameraFacing: a, onPhotoTaken: s, sessionToken: c, thresholds: u, wasmDirectoryPath: g } = r, { controller: C } = fI(u, g), l = Y0(
    ({ content: k, controller: _, imageData: fe, webMetadata: Q }) => {
      Jl(gc.FACE, _.getCandidateSelectionImages()), x == null || x({ cameraProperties: Q }), s(fe, k);
    },
    [x, s]
  ), { cameraResolution: h, cameraService: p, detectionDetails: A, videoRef: d } = A1({
    analytics: e,
    cameraFacing: a,
    controller: C,
    sessionToken: c,
    createProtoMessage: PI,
    onPhotoTaken: l
  }), { shouldMirror: W } = d1(Et.CONTROL, p);
  _l(Et.CAMERA_PROPS_CHANGED, {
    cameraResolution: h,
    shouldMirror: W
  }), be(() => () => {
    vn.getInstance().restart();
  }, []);
  const Z = i !== pn.HIDDEN && o !== Ci.Higher && h, D = i === pn.VISIBLE, E = t, F = h && t && n === Bt.RUNNING;
  return /* @__PURE__ */ O(mt, { children: [
    Z && /* @__PURE__ */ O(H1, { fullOverlay: D, resolution: h }),
    /* @__PURE__ */ O(Tu, { ref: d, $isImageMirror: W, $isVisible: E, autoPlay: !0, muted: !0, playsInline: !0 }),
    F && /* @__PURE__ */ O(
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
}) => /* @__PURE__ */ O(Tl, { cameraOptions: o, children: /* @__PURE__ */ O(VI, { onPhotoTakenInternal: x }) }), EI = ({ children: x }) => {
  const o = At(null);
  return C1(o, Et.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ O(Vu, { ref: o, children: x });
}, Ti = {};
Ti.minFaceSizeRatio = 0.135, Ti.maxFaceSizeRatio = 0.21;
const ug = {};
ug.faceConfidence = 1;
const jt = {};
jt.minFaceSizeRatio = 0.3, jt.maxFaceSizeRatio = 1, jt.brightnessHighThreshold = 1, jt.brightnessLowThreshold = -(-1872 + 1873 * 1), jt.faceConfidence = 0.15, jt.sharpnessThreshold = -(10 * 889 + 3898 * 1 + -12787), jt.outOfBoundsThreshold = -(9806 + 1 * 2741 + -3 * 4182);
const NI = { [nt.DISTANT]: Ti, [nt.MIDDLE]: ug, [nt.CLOSEUP]: jt }, LI = NI, $a = 0 + 0.255;
async function DI(x, o) {
  const { MagnifEyeLivenessContent: t } = p0.v4, e = await Promise.all(x.map(async (u) => sg(u))), n = await cg(o), i = {};
  i.images = e, i.metadata = n;
  const r = i, a = t.verify(r);
  if (a) throw Error(a);
  const s = t.create(r), c = {};
  return c.magnifeyeLivenessContent = s, dg(c);
}
async function FI(x, o) {
  const t = x.map((n) => n.image), e = await DI(t, o);
  return gg(e);
}
function YI(x, o) {
  const t = Pa(x.faceSize, $a);
  return Pa(o.faceSize, $a) < t;
}
const XI = (x, o) => {
  const t = At(new Tc()), e = U0(void 0), n = (r) => {
    if (!r.detail || x !== c0.RUNNING || o !== nt.CLOSEUP) return;
    const a = t.current;
    if (!e.value) {
      a.cloneMutable(r.detail.image);
      const s = { ...r.detail };
      s.image = a.canvasElement, e.value = s;
      return;
    }
    if (YI(e.value.data.detection, r.detail.data.detection)) {
      a.cloneMutable(r.detail.image);
      const s = { ...r.detail };
      s.image = a.canvasElement, e.value = s;
    }
  };
  pc(Et.FACE_DETECTION, n);
  const i = {};
  return i.middleImageBestCandidate = e, i;
}, MI = en.div`
  ${(x) => x.$isSecondStep && tc`
      transition: all 1.5s ease-in-out;
      transform: translate(16%, 5%) scale(2);
      transition-delay: 1.5s;
    `}
`, jI = ({
  licensePath: x,
  onComplete: o,
  onError: t,
  sessionToken: e,
  wasmDirectoryPath: n
}) => {
  const { analytics: i } = sc(), { appState: r, handleAppStateChange: a, handleError: s, magnifEyePhase: c, setMagnifEyePhase: u } = Du(), g = U0([]), C = U0(null), { middleImageBestCandidate: l } = XI(r, c), h = Hl(Wn.ANIMATION_END);
  function p(E) {
    g.value = [...g.value, E];
  }
  function A(E) {
    u(E), Hi(Wn.STATUS_CHANGED, { phase: E });
  }
  function d(E) {
    p(E), A(nt.MIDDLE);
  }
  h.value && A(nt.CLOSEUP);
  async function W(E) {
    if (l.value) {
      const k = { image: await wc(l.value.image), data: l.value.data };
      p(k);
    }
    p(E);
    try {
      const F = {
        sessionToken: e,
        web: C.value
      }, k = await FI(g.value, F), [_] = g.value;
      o(_, k), i == null || i.trackLivenessProcess(g.value);
    } catch (F) {
      F instanceof Error && s(ie.fromError(F));
      return;
    }
    a(c0.DONE);
  }
  function Z(E) {
    C.value = Ol(C.value, E.cameraProperties);
  }
  const D = {
    [nt.DISTANT]: d,
    /**
     * we don't care about onPhotoTaken in MIDDLE phase, because faceConfidence = 1
     */
    [nt.MIDDLE]: () => {
    },
    [nt.CLOSEUP]: W
  };
  return /* @__PURE__ */ O(EI, { children: /* @__PURE__ */ O(MI, { $isSecondStep: c !== nt.DISTANT, children: /* @__PURE__ */ O(
    TI,
    {
      licensePath: x,
      onError: t,
      onPhotoTaken: D[c],
      onPhotoTakenInternal: Z,
      thresholds: LI[c],
      wasmDirectoryPath: n
    }
  ) }) });
};
function JI({ initAppState: x }) {
  const [o, t] = $e(x), [e, n] = $e(), [i, r] = $e(!1), a = {};
  return a.appState = o, a.setAppState = t, a.error = e, a.setError = n, a.isCameraReady = i, a.setIsCameraReady = r, a;
}
function _I(x, o) {
  return o !== nt.DISTANT ? pn.HIDDEN : x !== c0.RUNNING ? pn.VISIBLE : pn.VISIBLE_WITH_MASK;
}
function UI({
  onError: x
}) {
  const { appState: o, error: t, isCameraReady: e, setAppState: n, setError: i, setIsCameraReady: r } = JI({
    initAppState: c0.LOADING
  }), [a, s] = $e(nt.DISTANT), c = _I(o, a), u = Y0(
    (C) => {
      Hi(Wn.STATUS_CHANGED, { state: c0.ERROR, error: C }), r(!1), x(C), i(C), n(c0.ERROR);
    },
    [x, r, i, n]
  ), g = Y0(
    (C) => {
      C !== c0.WAITING && (n(C), Hi(Wn.STATUS_CHANGED, { state: C }));
    },
    [n]
  );
  return {
    appState: o,
    magnifEyePhase: a,
    setMagnifEyePhase: s,
    freemiumOverlayState: c,
    isCameraReady: e,
    setIsCameraReady: r,
    handleAppStateChange: g,
    handleError: u,
    error: t
  };
}
var lg = ((x) => (x.AUTO_CAPTURE = "auto-capture", x))(lg || {});
class QI {
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
    const n = e, i = "https://innovatrics.count.ly/i?", r = {};
    r.app_key = this.appKey, r.device_id = this.deviceId;
    const a = gx(r);
    await fetch("" + i + a + "&" + o, n);
  }
  async init(o, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = o;
    const e = { _app_version: Pc() }, n = { organization: Vc(window.location.href) }, i = gx({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(i);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const t = gx(o);
    await this.countlyFetch(t);
  }
  async sendAutoCaptureEvent(o, t) {
    const e = {};
    e.key = lg.AUTO_CAPTURE, e.count = 1, e.dur = t, e.segmentation = o;
    const n = [e], i = gx({ events: JSON.stringify(n) });
    await this.countlyFetch(i);
  }
}
const ux = new QI();
function zI() {
  const [x] = window.crypto.getRandomValues(new Uint32Array(1));
  return x.toString(-10 * 211 + 8194 + -6068);
}
function qI() {
  const x = sessionStorage.getItem("dot-user-id");
  if (x) return x;
  const o = zI();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function $I(x, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : x;
}
const es = (x) => Math.round(x / 500) * 500 / (5194 + -192 * -18 + -2 * 3825), O0 = (x) => x ? x <= 13 * -186 + -3543 + 2 * 2981 ? Math.round(x * (-5 * 461 + -1 * 7135 + -22 * -430)) / 20 : Math.round(x / (8664 + -818 * -1 + 131 * -72)) * (-3 * -291 + -3356 + -149 * -17) : 7388 * -1 + -6254 + 13642, ef = (x) => Math.round(x * (-7197 + 1 * -1523 + 8722)) / (2195 * -3 + 1 * 8644 + 121 * -17);
class tf {
  constructor() {
    M(this, "countly", ux);
  }
  createSegmentation(o) {
    return { appVersion: Pc(), ...o };
  }
  init(o) {
    if (r1()) return;
    const t = qI();
    ux.init(t, o);
  }
  endSession() {
    ux.endSession();
  }
  walleye(o, t) {
    const e = {};
    e.nocturne = o, e.customer = t;
    const n = this.createSegmentation(e);
    ux.sendAutoCaptureEvent(n);
  }
}
class nf extends tf {
  constructor() {
    super(...arguments);
    M(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(t) {
    this.captureProcessAnalytics.push(t);
  }
}
class xf extends nf {
  trackLivenessProcess(o) {
    var g, C, l, h, p, A, d, W, Z, D;
    if (!o.length || !this.captureProcessAnalytics.length) return;
    const [t, e, n] = o, [i, r] = this.captureProcessAnalytics, a = ef(i.averageFps + (r == null ? void 0 : r.averageFps)) / (-1275 + 6 * 1242 + -95 * 65), s = es(i.captureProcessDurationInMs), c = es(r == null ? void 0 : r["captureProcessDurationInMs"]), u = this.createSegmentation({ faceSizeDistant: O0((g = t.data.detection) == null ? void 0 : g.faceSize), faceSizeCloseup: O0((C = n == null ? void 0 : n.data.detection) == null ? void 0 : C.faceSize), faceSizeMiddle: O0((l = e.data.detection) == null ? void 0 : l.faceSize), confidenceDistant: O0((h = t.data.detection) == null ? void 0 : h.confidence), confidenceCloseup: O0((p = n == null ? void 0 : n.data.detection) == null ? void 0 : p.confidence), confidenceMiddle: O0((A = e.data.detection) == null ? void 0 : A.confidence), imageResolution: ((W = (d = t.data) == null ? void 0 : d["imageResolution"]) == null ? void 0 : W.width) + "x" + ((D = (Z = t.data) == null ? void 0 : Z["imageResolution"]) == null ? void 0 : D.height), averageFps: a, captureTimeCloseup: c > -796 * 3 + 2 * -1951 + -35 * -181 ? ">45" : "" + c, captureTimeDistant: s > 75 * -11 + 10 * -541 + 6265 ? ">30" : "" + s, camera: $I(i == null ? void 0 : i.deviceName, i == null ? void 0 : i.facingMode), instructionSet: i.instructionSet });
    this.countly.sendAutoCaptureEvent(u, s + c);
  }
}
const of = new xf(), rf = ({ props: x }) => x ? /* @__PURE__ */ O(Hu, { target: x.styleTarget, children: /* @__PURE__ */ O(
  _u,
  {
    licensePath: x.licensePath,
    bramble: vi.getInstance(),
    wasmDirectoryPath: x.wasmDirectoryPath,
    children: /* @__PURE__ */ O(zu, { analytics: of, appKey: "d5ca54dabfb1a2c72d7090c9c8980252a879da44", children: /* @__PURE__ */ O(
      Lu,
      {
        value: UI({
          onError: x.onError
        }),
        children: /* @__PURE__ */ O(ac, { children: /* @__PURE__ */ O(jI, { ...x }) })
      }
    ) })
  }
) }) : null;
Dg(rf, "x-dot-magnifeye-liveness", ["props"]);
