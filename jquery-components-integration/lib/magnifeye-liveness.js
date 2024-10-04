var Sg = Object.defineProperty;
var Ti = (x) => {
  throw TypeError(x);
};
var wg = (x, o, t) => o in x ? Sg(x, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[o] = t;
var _ = (x, o, t) => wg(x, typeof o != "symbol" ? o + "" : o, t), Ei = (x, o, t) => o.has(x) || Ti("Cannot " + t);
var j = (x, o, t) => (Ei(x, o, "read from private field"), t ? t.call(x) : o.get(x)), ce = (x, o, t) => o.has(x) ? Ti("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(x) : o.set(x, t), ae = (x, o, t, e) => (Ei(x, o, "write to private field"), e ? e.call(x, t) : o.set(x, t), t);
var Ln, Y, xs, os, o0, Ni, rs, Qo, Tr, Uo, zo, is, yn = {}, as = [], Bg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, oo = Array.isArray;
function Et(x, o) {
  for (var t in o) x[t] = o[t];
  return x;
}
function ss(x) {
  var o = x.parentNode;
  o && o.removeChild(x);
}
function De(x, o, t) {
  var e, n, r, i = {};
  for (r in o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : i[r] = o[r];
  if (arguments.length > -21 * -213 + 726 + -5197 && (i.children = arguments.length > -37 * 51 + 8961 + -7071 ? Ln.call(arguments, 2) : t), typeof x == "function" && x.defaultProps != null)
    for (r in x.defaultProps) void (-1275 + -1 * 7435 + 8710) === i[r] && (i[r] = x.defaultProps[r]);
  return Cn(x, i, e, n, null);
}
function Cn(x, o, t, e, n) {
  var r = {};
  r.type = x, r.props = o, r.key = t, r.ref = e, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (-1 * -1901 + -200 + -1701), r.__c = null, r.constructor = void (-1 * -5934 + -5734 + -200), r.__v = n ?? ++xs, r.__i = -(-1 * 2435 + 5250 + -2814), r.__u = 0;
  var i = r;
  return n == null && Y.vnode != null && Y.vnode(i), i;
}
function Gg() {
  var x = {};
  return x.current = null, x;
}
function At(x) {
  return x.children;
}
function lt(x, o) {
  this.props = x, this.context = o;
}
function l0(x, o) {
  if (o == null) return x.__ ? l0(x.__, x.__i + (1958 * -3 + -3004 + 8879)) : null;
  for (var t; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) return t.__e;
  return typeof x.type == "function" ? l0(x) : null;
}
function cs(x) {
  var o, t;
  if ((x = x.__) != null && x.__c != null) {
    for (x.__e = x.__c.base = null, o = -1 * 3831 + -844 * -5 + 389 * -1; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) {
      x.__e = x.__c.base = t.__e;
      break;
    }
    return cs(x);
  }
}
function qo(x) {
  (!x.__d && (x.__d = !(-1 * -4011 + -1884 + -2127)) && o0.push(x) && !kx.__r++ || Ni !== Y.debounceRendering) && ((Ni = Y.debounceRendering) || rs)(kx);
}
function kx() {
  var x, o, t, e, n, r, i, a;
  for (o0.sort(Qo); x = o0.shift(); ) x.__d && (o = o0.length, e = void (-1 * 316 + 3406 + -1 * 3090), r = (n = (t = x).__v).__e, i = [], a = [], t.__P && ((e = Et({}, n)).__v = n.__v + (9683 + -17 * -343 + -15513), Y.vnode && Y.vnode(e), Er(t.__P, e, n, t.__n, t.__P.namespaceURI, -10 * 191 + -3278 * -1 + 1336 * -1 & n.__u ? [r] : null, i, r ?? l0(n), !!(4 * -8 + -14 * -313 + -2159 * 2 & n.__u), a), e.__v = n.__v, e.__.__k[e.__i] = e, us(i, e, a), e.__e != r && cs(e)), o0.length > o && o0.sort(Qo));
  kx.__r = 1108 + 4 * -277;
}
function gs(x, o, t, e, n, r, i, a, s, c, u) {
  var g, h, l, C, m, A = e && e.__k || as, d = o.length;
  for (t.__d = s, kg(t, o, A), s = t.__d, g = 110 + 2 * -1610 + 311 * 10; g < d; g++) (l = t.__k[g]) != null && typeof l != "boolean" && typeof l != "function" && (h = -(-8330 * -1 + 7 * -883 + 3 * -716) === l.__i ? yn : A[l.__i] || yn, l.__i = g, Er(x, l, h, n, r, i, a, s, c, u), C = l.__e, l.ref && h.ref != l.ref && (h.ref && Nr(h.ref, null, l), u.push(l.ref, l.__c || C, l)), m == null && C != null && (m = C), -80837 + -1 * -83987 + 62386 & l.__u || h.__k === l.__k ? (s && typeof l.type == "string" && !x.contains(s) && (s = l0(h)), s = ds(l, s, x)) : typeof l.type == "function" && l.__d !== void 0 ? s = l.__d : C && (s = C.nextSibling), l.__d = void 0, l.__u &= -(363887 + -24 * 7791 + 334 * 59));
  t.__d = s, t.__e = m;
}
function kg(x, o, t) {
  var e, n, r, i, a, s = o.length, c = t.length, u = c, g = 7338 * 1 + 1 * -3383 + -3955;
  for (x.__k = [], e = 1 * -3581 + 1 * -3434 + 7015; e < s; e++) i = e + g, (n = x.__k[e] = (n = o[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? Cn(null, n, null, null, null) : oo(n) ? Cn(At, { children: n }, null, null, null) : void (-1606 * -5 + 4010 + -12040) === n.constructor && n.__b > -1669 * 4 + 10 * -476 + 11436 ? Cn(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = x, n.__b = x.__b + (-9135 + -4568 * -2), a = Hg(n, t, i, u), n.__i = a, r = null, -(-1 * -167 + 3570 + 4 * -934) !== a && (u--, (r = t[a]) && (r.__u |= 1 * 154715 + -3 * -55465 + -95019 * 2)), r == null || r.__v === null ? (a == -1 && g--, typeof n.type != "function" && (n.__u |= 95 * 24 + -109 * -1063 + 1 * -52611)) : a !== i && (a == i - (-2 * 3323 + -9953 + 25 * 664) ? g = a - i : a == i + (150 + 629 * 4 + 205 * -13) ? g++ : a > i ? u > s - i ? g += a - i : g-- : a < i && g++, a !== e + g && (n.__u |= 121 * -563 + 2 * 43974 + 45711))) : (r = t[i]) && r.key == null && r.__e && 9906 + -1 * 7873 + -2033 == (53849 * 2 + 247917 + -11 * 20413 & r.__u) && (r.__e == x.__d && (x.__d = l0(r)), $o(r, r, !(-1226 + 1 * 1227)), t[i] = null, u--);
  if (u)
    for (e = -7961 + 9305 * -1 + -194 * -89; e < c; e++) (r = t[e]) != null && -3802 + -3802 * -1 == (131072 & r.__u) && (r.__e == x.__d && (x.__d = l0(r)), $o(r, r));
}
function ds(x, o, t) {
  var e, n;
  if (typeof x.type == "function") {
    for (e = x.__k, n = 0; e && n < e.length; n++) e[n] && (e[n].__ = x, o = ds(e[n], o, t));
    return o;
  }
  x.__e != o && (t.insertBefore(x.__e, o || null), o = x.__e);
  do
    o = o && o.nextSibling;
  while (o != null && 1111 * -4 + 4329 + 123 === o.nodeType);
  return o;
}
function Lt(x, o) {
  return o = o || [], x == null || typeof x == "boolean" || (oo(x) ? x.some(function(t) {
    Lt(t, o);
  }) : o.push(x)), o;
}
function Hg(x, o, t, e) {
  var n = x.key, r = x.type, i = t - (7256 + -8389 * -1 + -15644), a = t + (-68 * -136 + -304 * -4 + -10463), s = o[t];
  if (s === null || s && n == s.key && r === s.type && 1408 + 4 * 1710 + -8248 == (131072 & s.__u)) return t;
  if (e > (s != null && 4011 * -2 + -3833 * 1 + 11855 == (234741 * 1 + 1 * 64687 + -168356 & s.__u) ? -1 * -5393 + -8350 + 2958 : 7903 + -559 * -3 + -9580)) for (; i >= 2 * 3719 + 8002 + 772 * -20 || a < o.length; ) {
    if (i >= 8988 + 1 * -8988) {
      if ((s = o[i]) && !(17387 * -8 + 242531 * 1 + 27637 & s.__u) && n == s.key && r === s.type) return i;
      i--;
    }
    if (a < o.length) {
      if ((s = o[a]) && -232 * 35 + -4194 + 12314 == (38 * -6569 + 238 * 581 + -278 * -872 & s.__u) && n == s.key && r === s.type) return a;
      a++;
    }
  }
  return -(5745 + 1 * 3601 + 1 * -9345);
}
function Li(x, o, t) {
  o[-270 * 5 + -5325 + 6675] === "-" ? x.setProperty(o, t ?? "") : x[o] = t == null ? "" : typeof t != "number" || Bg.test(o) ? t : t + "px";
}
function nx(x, o, t, e, n) {
  var r;
  e: if (o === "style")
    if (typeof t == "string") x.style.cssText = t;
    else {
      if (typeof e == "string" && (x.style.cssText = e = ""), e)
        for (o in e) t && o in t || Li(x.style, o, "");
      if (t)
        for (o in t) e && t[o] === e[o] || Li(x.style, o, t[o]);
    }
  else if (o[-2 * -1445 + -607 + -2283] === "o" && o[1 * -549 + -5890 + 115 * 56] === "n") r = o !== (o = o.replace(/(PointerCapture)$|Capture$/i, "$1")), o = o.toLowerCase() in x || o === "onFocusOut" || o === "onFocusIn" ? o.toLowerCase().slice(4937 * -2 + 5615 + 4261) : o.slice(-9459 + -7466 * 1 + 16927), x.l || (x.l = {}), x.l[o + r] = t, t ? e ? t.u = e.u : (t.u = Tr, x.addEventListener(o, r ? zo : Uo, r)) : x.removeEventListener(o, r ? zo : Uo, r);
  else {
    if (n == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in x) try {
      x[o] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || !(82 * 113 + 5329 + 2 * -7297) === t && o[2567 + -233 * 11] !== "-" ? x.removeAttribute(o) : x.setAttribute(o, o == "popover" && -2494 + -1 * -2495 == t ? "" : t));
  }
}
function Di(x) {
  return function(o) {
    if (this.l) {
      var t = this.l[o.type + x];
      if (o.t == null) o.t = Tr++;
      else if (o.t < t.u) return;
      return t(Y.event ? Y.event(o) : o);
    }
  };
}
function Er(x, o, t, e, n, r, i, a, s, c) {
  var u, g, h, l, C, m, A, d, v, K, D, E, F, k, J, le, U = o.type;
  if (void (1423 * -2 + 1627 * -3 + 1 * 7727) !== o.constructor) return null;
  685 * 14 + -8528 + -934 * 1 & t.__u && (s = !!(379 * -3 + -1978 + -1049 * -3 & t.__u), r = [a = o.__e = t.__e]), (u = Y.__b) && u(o);
  e: if (typeof U == "function") try {
    if (d = o.props, v = "prototype" in U && U.prototype.render, K = (u = U.contextType) && e[u.__c], D = u ? K ? K.props.value : u.__ : e, t.__c ? A = (g = o.__c = t.__c).__ = g.__E : (v ? o.__c = g = new U(d, D) : (o.__c = g = new lt(d, D), g.constructor = U, g.render = Kg), K && K.sub(g), g.props = d, g.state || (g.state = {}), g.context = D, g.__n = e, h = g.__d = !(5272 * 1 + 4317 + -9589 * 1), g.__h = [], g._sb = []), v && g.__s == null && (g.__s = g.state), v && U.getDerivedStateFromProps != null && (g.__s == g.state && (g.__s = Et({}, g.__s)), Et(g.__s, U.getDerivedStateFromProps(d, g.__s))), l = g.props, C = g.state, g.__v = o, h) v && U.getDerivedStateFromProps == null && g.componentWillMount != null && g.componentWillMount(), v && g.componentDidMount != null && g.__h.push(g.componentDidMount);
    else {
      if (v && U.getDerivedStateFromProps == null && d !== l && g.componentWillReceiveProps != null && g.componentWillReceiveProps(d, D), !g.__e && (g.shouldComponentUpdate != null && !(-5855 + 100 * -6 + 1076 * 6) === g.shouldComponentUpdate(d, g.__s, D) || o.__v === t.__v)) {
        for (o.__v !== t.__v && (g.props = d, g.state = g.__s, g.__d = !(662 * 11 + -1 * -9637 + -2 * 8459)), o.__e = t.__e, o.__k = t.__k, o.__k.forEach(function(Ie) {
          Ie && (Ie.__ = o);
        }), E = -731 * 6 + 6865 + -2479; E < g._sb.length; E++) g.__h.push(g._sb[E]);
        g._sb = [], g.__h.length && i.push(g);
        break e;
      }
      g.componentWillUpdate != null && g.componentWillUpdate(d, g.__s, D), v && g.componentDidUpdate != null && g.__h.push(function() {
        g.componentDidUpdate(l, C, m);
      });
    }
    if (g.context = D, g.props = d, g.__P = x, g.__e = !(-3086 * -2 + -571 + -5600), F = Y.__r, k = -8939 + -1 * 4441 + 669 * 20, v) {
      for (g.state = g.__s, g.__d = !(5507 * 1 + 9252 + -2 * 7379), F && F(o), u = g.render(g.props, g.state, g.context), J = 58 * 30 + 4497 + -6237; J < g._sb.length; J++) g.__h.push(g._sb[J]);
      g._sb = [];
    } else do
      g.__d = !(1 * 2897 + 86 * -73 + 3382), F && F(o), u = g.render(g.props, g.state, g.context), g.state = g.__s;
    while (g.__d && ++k < 25);
    g.state = g.__s, g.getChildContext != null && (e = Et(Et({}, e), g.getChildContext())), v && !h && g.getSnapshotBeforeUpdate != null && (m = g.getSnapshotBeforeUpdate(l, C)), gs(x, oo(le = u != null && u.type === At && u.key == null ? u.props.children : u) ? le : [le], o, t, e, n, r, i, a, s, c), g.base = o.__e, o.__u &= -(-3575 * -1 + 3930 + 4 * -1836), g.__h.length && i.push(g), A && (g.__E = g.__ = null);
  } catch (Ie) {
    o.__v = null, s || r != null ? (o.__e = a, o.__u |= s ? 2 * -4739 + -2642 + 12280 : -2 * -3335 + -5 * 803 + -1 * 2623, r[r.indexOf(a)] = null) : (o.__e = t.__e, o.__k = t.__k), Y.__e(Ie, o, t);
  }
  else r == null && o.__v === t.__v ? (o.__k = t.__k, o.__e = t.__e) : o.__e = Og(t.__e, o, t, e, n, r, i, s, c);
  (u = Y.diffed) && u(o);
}
function us(x, o, t) {
  o.__d = void (-1 * 5485 + -442 * 16 + 12557);
  for (var e = 0; e < t.length; e++) Nr(t[e], t[++e], t[++e]);
  Y.__c && Y.__c(o, x), x.some(function(n) {
    try {
      x = n.__h, n.__h = [], x.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      Y.__e(r, n.__v);
    }
  });
}
function Og(x, o, t, e, n, r, i, a, s) {
  var c, u, g, h, l, C, m, A = t.props, d = o.props, v = o.type;
  if (v === "svg" ? n = "http://www.w3.org/2000/svg" : v === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), r != null) {
    for (c = -444 + 2 * 222; c < r.length; c++) if ((l = r[c]) && "setAttribute" in l == !!v && (v ? l.localName === v : 2887 * -1 + -1 * 2958 + 5848 === l.nodeType)) {
      x = l, r[c] = null;
      break;
    }
  }
  if (x == null) {
    if (v === null) return document.createTextNode(d);
    x = document.createElementNS(n, v, d.is && d), r = null, a = !(4934 + 1 * -4933);
  }
  if (v === null) A === d || a && x.data === d || (x.data = d);
  else {
    if (r = r && Ln.call(x.childNodes), A = t.props || yn, !a && r != null)
      for (A = {}, c = 8095 + 113 * 38 + -953 * 13; c < x.attributes.length; c++) A[(l = x.attributes[c]).name] = l.value;
    for (c in A) if (l = A[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") g = l;
      else if (c !== "key" && !(c in d)) {
        if (c == "value" && "defaultValue" in d || c == "checked" && "defaultChecked" in d) continue;
        nx(x, c, null, l, n);
      }
    }
    for (c in d) l = d[c], c == "children" ? h = l : c == "dangerouslySetInnerHTML" ? u = l : c == "value" ? C = l : c == "checked" ? m = l : c === "key" || a && typeof l != "function" || A[c] === l || nx(x, c, l, A[c], n);
    if (u) a || g && (u.__html === g.__html || u.__html === x.innerHTML) || (x.innerHTML = u.__html), o.__k = [];
    else if (g && (x.innerHTML = ""), gs(x, oo(h) ? h : [h], o, t, e, v === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, r, i, r ? r[1730 + 3 * -961 + 1153] : t.__k && l0(t, 14 + -1 * 14), a, s), r != null)
      for (c = r.length; c--; ) r[c] != null && ss(r[c]);
    a || (c = "value", C !== void 0 && (C !== x[c] || v === "progress" && !C || v === "option" && C !== A[c]) && nx(x, c, C, A[c], n), c = "checked", void (7177 + -4 * -2378 + -16689) !== m && m !== x[c] && nx(x, c, m, A[c], n));
  }
  return x;
}
function Nr(x, o, t) {
  try {
    typeof x == "function" ? x(o) : x.current = o;
  } catch (e) {
    Y.__e(e, t);
  }
}
function $o(x, o, t) {
  var e, n;
  if (Y.unmount && Y.unmount(x), (e = x.ref) && (e.current && e.current !== x.__e || Nr(e, null, o)), (e = x.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (r) {
      Y.__e(r, o);
    }
    e.base = e.__P = null;
  }
  if (e = x.__k)
    for (n = 1 * -5387 + 1809 + 3578; n < e.length; n++) e[n] && $o(e[n], o, t || typeof x.type != "function");
  t || x.__e == null || ss(x.__e), x.__c = x.__ = x.__e = x.__d = void (86 * 23 + 9075 + -1 * 11053);
}
function Kg(x, o, t) {
  return this.constructor(x, t);
}
function Qt(x, o, t) {
  var e, n, r, i;
  Y.__ && Y.__(x, o), n = (e = typeof t == "function") ? null : t && t.__k || o.__k, r = [], i = [], Er(o, x = (!e && t || o).__k = De(At, null, [x]), n || yn, yn, o.namespaceURI, !e && t ? [t] : n ? null : o.firstChild ? Ln.call(o.childNodes) : null, r, !e && t ? t : n ? n.__e : o.firstChild, e, i), us(r, x, i);
}
function Lr(x, o) {
  Qt(x, o, Lr);
}
function Dr(x, o, t) {
  var e, n, r, i, a = Et({}, x.props);
  for (r in x.type && x.type.defaultProps && (i = x.type.defaultProps), o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : a[r] = o[r] === void 0 && void (-1 * -8063 + 121 * -44 + -2739) !== i ? i[r] : o[r];
  return arguments.length > 21 * -47 + 2104 + 223 * -5 && (a.children = arguments.length > 818 * 3 + -104 * 83 + 1 * 6181 ? Ln.call(arguments, -4640 + -2321 * -2) : t), Cn(x.type, a, e || x.key, n || x.ref, null);
}
function Dn(x, o) {
  var t = { __c: o = "__cC" + is++, __: x, Consumer: function(e, n) {
    return e.children(n);
  }, Provider: function(e) {
    var n, r;
    return this.getChildContext || (n = [], (r = {})[o] = this, this.getChildContext = function() {
      return r;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && n.some(function(a) {
        a.__e = !0, qo(a);
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
Ln = as.slice, Y = { __e: function(x, o, t, e) {
  for (var n, r, i; o = o.__; ) if ((n = o.__c) && !n.__) try {
    if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(x)), i = n.__d), n.componentDidCatch != null && (n.componentDidCatch(x, e || {}), i = n.__d), i) return n.__E = n;
  } catch (a) {
    x = a;
  }
  throw x;
} }, xs = 1703 * 1 + 1423 * -1 + -280, os = function(x) {
  return x != null && x.constructor == null;
}, lt.prototype.setState = function(x, o) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Et({}, this.state), typeof x == "function" && (x = x(Et({}, t), this.props)), x && Et(t, x), x != null && this.__v && (o && this._sb.push(o), qo(this));
}, lt.prototype.forceUpdate = function(x) {
  this.__v && (this.__e = !(-9883 + -6 * 1451 + 18589), x && this.__h.push(x), qo(this));
}, lt.prototype.render = At, o0 = [], rs = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Qo = function(x, o) {
  return x.__v.__b - o.__v.__b;
}, kx.__r = -8192 + -1237 * 4 + 13140, Tr = -3 * -1 + -19 * -307 + -5836, Uo = Di(!1), zo = Di(!(710 * 10 + -100 * 71 + 0)), is = -13666 + 2 * 6833;
function Fr() {
  return (Fr = Object.assign ? Object.assign.bind() : function(x) {
    for (var o = -4901 + 116 * 82 + -4610 * 1; o < arguments.length; o++) {
      var t = arguments[o];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (x[e] = t[e]);
    }
    return x;
  }).apply(this, arguments);
}
var Zg = ["context", "children"];
function Rg(x) {
  this.getChildContext = function() {
    return x.context;
  };
  var o = x.children, t = function(e, n) {
    if (e == null) return {};
    var r, i, a = {}, s = Object.keys(e);
    for (i = 0; i < s.length; i++) n.indexOf(r = s[i]) >= 72 * 76 + 3 * -3046 + 26 * 141 || (a[r] = e[r]);
    return a;
  }(x, Zg);
  return Dr(o, t);
}
function Pg() {
  var x = {};
  x.detail = {}, x.bubbles = !(-31 * -241 + 2827 + -542 * 19), x.cancelable = !(1 * -1976 + -8407 + -1 * -10383);
  var o = new CustomEvent("_preact", x);
  this.dispatchEvent(o), this._vdom = De(Rg, Fr({}, this._props, { context: o.detail.context }), function t(e, n) {
    if (-7574 + -78 * 3 + 7811 === e.nodeType) return e.data;
    if (e.nodeType !== 1) return null;
    var r = [], i = {}, a = 0, s = e.attributes, c = e.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[ls(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var u = t(c[a], null), g = c[a].slot;
      g ? i[g] = De(Fi, { name: g }, u) : r[a] = u;
    }
    var h = n ? De(Fi, null, r) : r;
    return De(n || e.nodeName.toLowerCase(), i, h);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Lr : Qt)(this._vdom, this._root);
}
function ls(x) {
  return x.replace(/-(\w)/g, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Vg(x, o, t) {
  if (this._vdom) {
    var e = {};
    e[x] = t = t ?? void (-2051 * -4 + 50 + -8254), e[ls(x)] = t, this._vdom = Dr(this._vdom, e), Qt(this._vdom, this._root);
  }
}
function Tg() {
  Qt(this._vdom = null, this._root);
}
function Fi(x, o) {
  var t = this;
  return De("slot", Fr({}, x, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = o;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Eg(x, o, t, e) {
  function n() {
    var r = Reflect.construct(HTMLElement, [], n);
    return r._vdomComponent = x, r._root = r, r;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = Pg, n.prototype.attributeChangedCallback = Vg, n.prototype.disconnectedCallback = Tg, t = t || x.observedAttributes || Object.keys(x.propTypes || {}), n.observedAttributes = t, t.forEach(function(r) {
    Object.defineProperty(n.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(i) {
      this._vdom ? this.attributeChangedCallback(r, null, i) : (this._props || (this._props = {}), this._props[r] = i, this.connectedCallback());
      var a = typeof i;
      i != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(r, i);
    } });
  }), customElements.define(o, n);
}
var Ng = 831 * -5 + -3509 + -3832 * -2;
function O(x, o, t, e, n, r) {
  o || (o = {});
  var i, a, s = o;
  if ("ref" in s)
    for (a in s = {}, o) a == "ref" ? i = o[a] : s[a] = o[a];
  var c = {};
  c.type = x, c.props = s, c.key = t, c.ref = i, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__d = void (3866 * -1 + 1811 * 5 + -5189 * 1), c.__c = null, c.constructor = void (1 * 8054 + -8353 + 23 * 13), c.__v = --Ng, c.__i = -(-8139 * -1 + 1 * 2297 + -2087 * 5), c.__u = 0, c.__source = n, c.__self = r;
  var u = c;
  if (typeof x == "function" && (i = x.defaultProps))
    for (a in i) void (2423 + 1 * -2423) === s[a] && (s[a] = i[a]);
  return Y.vnode && Y.vnode(u), u;
}
var Ue = function() {
  return Ue = Object.assign || function(o) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (o[r] = t[r]);
    }
    return o;
  }, Ue.apply(this, arguments);
};
function L0(x, o, t) {
  if (t || arguments.length === 2) for (var e = 0, n = o.length, r; e < n; e++)
    (r || !(e in o)) && (r || (r = Array.prototype.slice.call(o, 0, e)), r[e] = o[e]);
  return x.concat(r || Array.prototype.slice.call(o));
}
function Lg(x) {
  var o = Object.create(null);
  return function(t) {
    return o[t] === void 0 && (o[t] = x(t)), o[t];
  };
}
var Dg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Fg = Lg(function(x) {
  return Dg.test(x) || x.charCodeAt(-1253 + 1 * -1777 + 3030) === -2049 + -2160 * -1 && x.charCodeAt(-573 * -16 + -6637 + 23 * -110) === -6367 + 17 * 381 && x.charCodeAt(7359 + 7357 * -1) < -673 * 9 + -23 * -48 + 5044;
}), Ut, oe, Oo, Yi, D0 = -2790 + -47 * 36 + 4482, Is = [], se = Y, Xi = se.__b, ji = se.__r, Mi = se.diffed, Ji = se.__c, _i = se.unmount, Qi = se.__;
function Q0(x, o) {
  se.__h && se.__h(oe, x, D0 || o), D0 = 4231 + -4231 * 1;
  var t = {};
  t.__ = [], t.__h = [];
  var e = oe.__H || (oe.__H = t);
  return x >= e.__.length && e.__.push({}), e.__[x];
}
function ze(x) {
  return D0 = -8065 + -6389 * 1 + -35 * -413, Yr(hs, x);
}
function Yr(x, o, t) {
  var e = Q0(Ut++, 2);
  if (e.t = x, !e.__c && (e.__ = [t ? t(o) : hs(void (2358 + -4645 * 1 + 2287), o), function(a) {
    var s = e.__N ? e.__N[0] : e.__[0], c = e.t(s, a);
    s !== c && (e.__N = [c, e.__[-89 * -49 + 4995 + -5 * 1871]], e.__c.setState({}));
  }], e.__c = oe, !oe.u)) {
    var n = function(a, s, c) {
      if (!e.__c.__H) return !0;
      var u = e.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (u.every(function(h) {
        return !h.__N;
      })) return !r || r.call(this, a, s, c);
      var g = !1;
      return u.forEach(function(h) {
        if (h.__N) {
          var l = h.__[0];
          h.__ = h.__N, h.__N = void 0, l !== h.__[0] && (g = !0);
        }
      }), !(!g && e.__c.props === a) && (!r || r.call(this, a, s, c));
    };
    oe.u = !(-5 * 1228 + 365 * -4 + 100 * 76);
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
function he(x, o) {
  var t = Q0(Ut++, 3);
  !se.__s && Xr(t.__H, o) && (t.__ = x, t.i = o, oe.__H.__h.push(t));
}
function U0(x, o) {
  var t = Q0(Ut++, 4);
  !se.__s && Xr(t.__H, o) && (t.__ = x, t.i = o, oe.__h.push(t));
}
function Ht(x) {
  return D0 = -36 * -20 + -9045 + 8330, xt(function() {
    var o = {};
    return o.current = x, o;
  }, []);
}
function fs(x, o, t) {
  D0 = 6, U0(function() {
    return typeof x == "function" ? (x(o()), function() {
      return x(null);
    }) : x ? (x.current = o(), function() {
      return x.current = null;
    }) : void (1 * -4338 + 3916 + 422);
  }, t == null ? t : t.concat(x));
}
function xt(x, o) {
  var t = Q0(Ut++, 7);
  return Xr(t.__H, o) && (t.__ = x(), t.__H = o, t.__h = x), t.__;
}
function F0(x, o) {
  return D0 = 9217 * -1 + -2081 + 2 * 5653, xt(function() {
    return x;
  }, o);
}
function p0(x) {
  var o = oe.context[x.__c], t = Q0(Ut++, 9);
  return t.c = x, o ? (t.__ == null && (t.__ = !(-1799 + -6983 * 1 + -1 * -8782), o.sub(oe)), o.props.value) : x.__;
}
function Hx(x, o) {
  se.useDebugValue && se.useDebugValue(o ? o(x) : x);
}
function Cs() {
  var x = Q0(Ut++, 11);
  if (!x.__) {
    for (var o = oe.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [-3 * -1487 + -297 * 24 + -7 * -381, -5 * 1882 + -2152 + 11562]);
    x.__ = "P" + t[407 * 13 + -3070 + -1 * 2221] + "-" + t[-8496 + -69 * 19 + 9808]++;
  }
  return x.__;
}
function Yg() {
  for (var x; x = Is.shift(); ) if (x.__P && x.__H) try {
    x.__H.__h.forEach(Ix), x.__H.__h.forEach(er), x.__H.__h = [];
  } catch (o) {
    x.__H.__h = [], se.__e(o, x.__v);
  }
}
se.__b = function(x) {
  oe = null, Xi && Xi(x);
}, se.__ = function(x, o) {
  x && o.__k && o.__k.__m && (x.__m = o.__k.__m), Qi && Qi(x, o);
}, se.__r = function(x) {
  ji && ji(x), Ut = -4409 + -1 * -4409;
  var o = (oe = x.__c).__H;
  o && (Oo === oe ? (o.__h = [], oe.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (-461 * 4 + 939 * 5 + -2851);
  })) : (o.__h.forEach(Ix), o.__h.forEach(er), o.__h = [], Ut = 4132 * 1 + -7365 + 3233)), Oo = oe;
}, se.diffed = function(x) {
  Mi && Mi(x);
  var o = x.__c;
  o && o.__H && (o.__H.__h.length && (3173 + -61 * 52 !== Is.push(o) && Yi === se.requestAnimationFrame || ((Yi = se.requestAnimationFrame) || Xg)(Yg)), o.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-874 * 9 + -2329 + 2039 * 5);
  })), Oo = oe = null;
}, se.__c = function(x, o) {
  o.some(function(t) {
    try {
      t.__h.forEach(Ix), t.__h = t.__h.filter(function(e) {
        return !e.__ || er(e);
      });
    } catch (e) {
      o.some(function(n) {
        n.__h && (n.__h = []);
      }), o = [], se.__e(e, t.__v);
    }
  }), Ji && Ji(x, o);
}, se.unmount = function(x) {
  _i && _i(x);
  var o, t = x.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      Ix(e);
    } catch (n) {
      o = n;
    }
  }), t.__H = void (1090 + -40 * 197 + -679 * -10), o && se.__e(o, t.__v));
};
var Ui = typeof requestAnimationFrame == "function";
function Xg(x) {
  var o, t = function() {
    clearTimeout(e), Ui && cancelAnimationFrame(o), setTimeout(x);
  }, e = setTimeout(t, 100);
  Ui && (o = requestAnimationFrame(t));
}
function Ix(x) {
  var o = oe, t = x.__c;
  typeof t == "function" && (x.__c = void (2161 * 2 + -30 * -43 + -5612), t()), oe = o;
}
function er(x) {
  var o = oe;
  x.__c = x.__(), oe = o;
}
function Xr(x, o) {
  return !x || x.length !== o.length || o.some(function(t, e) {
    return t !== x[e];
  });
}
function hs(x, o) {
  return typeof o == "function" ? o(x) : o;
}
function ps(x, o) {
  for (var t in o) x[t] = o[t];
  return x;
}
function tr(x, o) {
  for (var t in x) if (t !== "__source" && !(t in o)) return !0;
  for (var e in o) if (e !== "__source" && x[e] !== o[e]) return !(-1739 + -1408 * 5 + -8779 * -1);
  return !(7 * 1018 + -2909 + -4216);
}
function nr(x, o) {
  this.props = x, this.context = o;
}
function jg(x, o) {
  function t(n) {
    var r = this.props.ref, i = r == n.ref;
    return !i && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, n) || !i : tr(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, De(x, n);
  }
  return e.displayName = "Memo(" + (x.displayName || x.name) + ")", e.prototype.isReactComponent = !(1484 * 6 + 5622 + -2421 * 6), e.__f = !(-1349 * -7 + -1 * -789 + -10232), e;
}
(nr.prototype = new lt()).isPureReactComponent = !(-5333 + -1 * -5333), nr.prototype.shouldComponentUpdate = function(x, o) {
  return tr(this.props, x) || tr(this.state, o);
};
var zi = Y.__b;
Y.__b = function(x) {
  x.type && x.type.__f && x.ref && (x.props.ref = x.ref, x.ref = null), zi && zi(x);
};
var Mg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 8369 * 1 + 8763 + -3 * 4407;
function ms(x) {
  function o(t) {
    var e = ps({}, t);
    return delete e.ref, x(e, t.ref || null);
  }
  return o.$$typeof = Mg, o.render = o, o.prototype.isReactComponent = o.__f = !(-5349 + 1783 * 3), o.displayName = "ForwardRef(" + (x.displayName || x.name) + ")", o;
}
var qi = function(x, o) {
  return x == null ? null : Lt(Lt(x).map(o));
}, Jg = { map: qi, forEach: qi, count: function(x) {
  return x ? Lt(x).length : 659 * -13 + 6046 + 2521;
}, only: function(x) {
  var o = Lt(x);
  if (o.length !== 1) throw "Children.only";
  return o[-994 + 4679 * -2 + 10352];
}, toArray: Lt }, _g = Y.__e;
Y.__e = function(x, o, t, e) {
  if (x.then) {
    for (var n, r = o; r = r.__; ) if ((n = r.__c) && n.__c) return o.__e == null && (o.__e = t.__e, o.__k = t.__k), n.__c(x, o);
  }
  _g(x, o, t, e);
};
var $i = Y.unmount;
function bs(x, o, t) {
  return x && (x.__c && x.__c.__H && (x.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), x.__c.__H = null), (x = ps({}, x)).__c != null && (x.__c.__P === t && (x.__c.__P = o), x.__c = null), x.__k = x.__k && x.__k.map(function(e) {
    return bs(e, o, t);
  })), x;
}
function As(x, o, t) {
  return x && t && (x.__v = null, x.__k = x.__k && x.__k.map(function(e) {
    return As(e, o, t);
  }), x.__c && x.__c.__P === o && (x.__e && t.appendChild(x.__e), x.__c.__e = !(-2443 + -1315 * 3 + 6388), x.__c.__P = t)), x;
}
function fx() {
  this.__u = 0, this.t = null, this.__b = null;
}
function ys(x) {
  var o = x.__.__c;
  return o && o.__a && o.__a(x);
}
function Qg(x) {
  var o, t, e;
  function n(r) {
    if (o || (o = x()).then(function(i) {
      t = i.default || i;
    }, function(i) {
      e = i;
    }), e) throw e;
    if (!t) throw o;
    return De(t, r);
  }
  return n.displayName = "Lazy", n.__f = !(5912 + -739 * 8), n;
}
function cn() {
  this.u = null, this.o = null;
}
Y.unmount = function(x) {
  var o = x.__c;
  o && o.__R && o.__R(), o && 32 & x.__u && (x.type = null), $i && $i(x);
}, (fx.prototype = new lt()).__c = function(x, o) {
  var t = o.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = ys(e.__v), r = !(7211 + 1109 * -4 + -2774), i = function() {
    r || (r = !(8376 + 3 * -963 + -5487), t.__R = null, n ? n(a) : a());
  };
  t.__R = i;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var s = e.state.__a;
        e.__v.__k[6738 + 17 * 94 + 16 * -521] = As(s, s.__c.__P, s.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.t.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || -4391 * 1 + -2220 + 13 * 511 & o.__u || e.setState({ __a: e.__b = e.__v.__k[577 + -1 * 577] }), x.then(i, i);
}, fx.prototype.componentWillUnmount = function() {
  this.t = [];
}, fx.prototype.render = function(x, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-17 * 252 + -3784 + 4034 * 2].__c;
      this.__v.__k[93 + 3 * -31] = bs(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = o.__a && De(At, null, x.fallback);
  return n && (n.__u &= -(1879 * -1 + -365 + 1 * 2277)), [De(At, null, o.__a ? null : x.children), n];
};
var ea = function(x, o, t) {
  if (++t[3 * -742 + -3830 + 6057] === t[23 * 172 + -11 * -557 + -3361 * 3] && x.o.delete(o), x.props.revealOrder && (x.props.revealOrder[-3326 + 2 * -376 + 1 * 4078] !== "t" || !x.o.size)) for (t = x.u; t; ) {
    for (; t.length > 10998 + 3 * -3665; ) t.pop()();
    if (t[1 * -1892 + -3142 * 1 + 95 * 53] < t[-1318 * 3 + 4830 * 2 + -5706]) break;
    x.u = t = t[-134 * 57 + -8545 * 1 + 1245 * 13];
  }
};
function Ug(x) {
  return this.getChildContext = function() {
    return x.context;
  }, x.children;
}
function zg(x) {
  var o = this, t = x.i;
  o.componentWillUnmount = function() {
    Qt(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== t && o.componentWillUnmount(), o.l || (o.i = t, o.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(-1 * -3917 + 2388 + -6305);
  }, appendChild: function(e) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> -4827 * 1 + -1069 + -1 * -5897, -1117 + -8537 * 1 + 9655), o.i.removeChild(e);
  } }), Qt(De(Ug, { context: o.context }, x.__v), o.l);
}
function qg(x, o) {
  var t = {};
  t.__v = x, t.i = o;
  var e = De(zg, t);
  return e.containerInfo = o, e;
}
(cn.prototype = new lt()).__a = function(x) {
  var o = this, t = ys(o.__v), e = o.o.get(x);
  return e[9717 + -1 * 3863 + -5854]++, function(n) {
    var r = function() {
      o.props.revealOrder ? (e.push(n), ea(o, x, e)) : n();
    };
    t ? t(r) : r();
  };
}, cn.prototype.render = function(x) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = Lt(x.children);
  x.revealOrder && x.revealOrder[21 * -357 + -1 * -6073 + 1424] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.o.set(o[t], this.u = [-1 * 79 + 510 + 86 * -5, 784 + -9 * -735 + -7399, this.u]);
  return x.children;
}, cn.prototype.componentDidUpdate = cn.prototype.componentDidMount = function() {
  var x = this;
  this.o.forEach(function(o, t) {
    ea(x, t, o);
  });
};
var vs = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, $g = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ed = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, td = /[A-Z0-9]/g, nd = typeof document < "u", xd = function(x) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(x);
};
function od(x, o, t) {
  return o.__k == null && (o.textContent = ""), Qt(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
function rd(x, o, t) {
  return Lr(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
lt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(x) {
  Object.defineProperty(lt.prototype, x, { configurable: !(442 + -3768 * -1 + 2 * -2105), get: function() {
    return this["UNSAFE_" + x];
  }, set: function(o) {
    var t = {};
    t.configurable = !(-3365 * 2 + -8300 + -334 * -45), t.writable = !(5388 + 673 * -13 + 3361), t.value = o, Object.defineProperty(this, x, t);
  } });
});
var ta = Y.event;
function id() {
}
function ad() {
  return this.cancelBubble;
}
function sd() {
  return this.defaultPrevented;
}
Y.event = function(x) {
  return ta && (x = ta(x)), x.persist = id, x.isPropagationStopped = ad, x.isDefaultPrevented = sd, x.nativeEvent = x;
};
var Cx = {};
Cx.enumerable = !(-1454 + -1318 * -7 + 1 * -7771), Cx.configurable = !(-9522 + -479 * -4 + 7606), Cx.get = function() {
  return this.class;
};
var jr, cd = Cx, na = Y.vnode;
Y.vnode = function(x) {
  typeof x.type == "string" && function(o) {
    var t = o.props, e = o.type, n = {};
    for (var r in t) {
      var i = t[r];
      if (!(r === "value" && "defaultValue" in t && i == null || nd && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var a = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && !(-182 * 25 + 3880 + 1 * 670) === i ? i = "" : a === "translate" && i === "no" ? i = !(-79 * -13 + -2760 + 1734) : a === "ondoubleclick" ? r = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || xd(t.type) ? a === "onfocus" ? r = "onfocusin" : a === "onblur" ? r = "onfocusout" : ed.test(r) ? r = a : -(-4 * -887 + 4237 * 2 + -1 * 12021) === e.indexOf("-") && $g.test(r) ? r = r.replace(td, "-$&").toLowerCase() : i === null && (i = void (11 * -701 + 9420 + -1 * 1709)) : a = r = "oninput", a === "oninput" && n[r = a] && (r = "oninputCapture"), n[r] = i;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Lt(t.children).forEach(function(s) {
      s.props.selected = -(-6556 + -51 * -104 + 1253) != n.value.indexOf(s.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = Lt(t.children).forEach(function(s) {
      s.props.selected = n.multiple ? -(54 * 28 + -1079 * 8 + 7121) != n.defaultValue.indexOf(s.props.value) : n.defaultValue == s.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", cd)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), o.props = n;
  }(x), x.$$typeof = vs, na && na(x);
};
var xa = Y.__r;
Y.__r = function(x) {
  xa && xa(x), jr = x.__c;
};
var oa = Y.diffed;
Y.diffed = function(x) {
  oa && oa(x);
  var o = x.props, t = x.__e;
  t != null && x.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), jr = null;
};
var Ge = {};
Ge.readContext = function(x) {
  return jr.__n[x.__c].props.value;
}, Ge.useCallback = F0, Ge.useContext = p0, Ge.useDebugValue = Hx, Ge.useDeferredValue = Bs, Ge.useEffect = he, Ge.useId = Cs, Ge.useImperativeHandle = fs, Ge.useInsertionEffect = ks, Ge.useLayoutEffect = U0, Ge.useMemo = xt, Ge.useReducer = Yr, Ge.useRef = Ht, Ge.useState = ze, Ge.useSyncExternalStore = Hs, Ge.useTransition = Gs;
var Ws = {};
Ws.current = Ge;
var Ss = {};
Ss.ReactCurrentDispatcher = Ws;
var gd = Ss;
function dd(x) {
  return De.bind(null, x);
}
function ro(x) {
  return !!x && x.$$typeof === vs;
}
function ud(x) {
  return ro(x) && x.type === At;
}
function ld(x) {
  return !!x && !!x.displayName && (typeof x.displayName == "string" || x.displayName instanceof String) && x.displayName.startsWith("Memo(");
}
function Id(x) {
  return ro(x) ? Dr.apply(null, arguments) : x;
}
function fd(x) {
  return !!x.__k && (Qt(null, x), !(-4807 + 2801 * 2 + -795));
}
function Cd(x) {
  return x && (x.base || -6140 + 1 * -2237 + 8378 * 1 === x.nodeType && x) || null;
}
var hd = function(x, o) {
  return x(o);
}, pd = function(x, o) {
  return x(o);
}, md = At;
function ws(x) {
  x();
}
function Bs(x) {
  return x;
}
function Gs() {
  return [!(-12069 + -34 * -355), ws];
}
var ks = U0, bd = ro;
function Hs(x, o) {
  var t = o(), e = ze({ h: { __: t, v: o } }), n = e[3353 + 2 * -166 + -19 * 159].h, r = e[1784 + 1 * -4769 + 2986];
  return U0(function() {
    n.__ = t, n.v = o, Ko(n) && r({ h: n });
  }, [x, t, o]), he(function() {
    return Ko(n) && r({ h: n }), x(function() {
      Ko(n) && r({ h: n });
    });
  }, [x]), t;
}
function Ko(x) {
  var o, t, e = x.v, n = x.__;
  try {
    var r = e();
    return !((o = n) === (t = r) && (2 * -3165 + -2022 + 12 * 696 !== o || (-18 * -95 + 9323 + -11032) / o == (7500 + 19 * 57 + 2 * -4291) / t) || o != o && t != t);
  } catch {
    return !(-3094 + 479 * -12 + -2 * -4421);
  }
}
var L = {};
L.useState = ze, L.useId = Cs, L.useReducer = Yr, L.useEffect = he, L.useLayoutEffect = U0, L.useInsertionEffect = ks, L.useTransition = Gs, L.useDeferredValue = Bs, L.useSyncExternalStore = Hs, L.startTransition = ws, L.useRef = Ht, L.useImperativeHandle = fs, L.useMemo = xt, L.useCallback = F0, L.useContext = p0, L.useDebugValue = Hx, L.version = "17.0.2", L.Children = Jg, L.render = od, L.hydrate = rd, L.unmountComponentAtNode = fd, L.createPortal = qg, L.createElement = De, L.createContext = Dn, L.createFactory = dd, L.cloneElement = Id, L.createRef = Gg, L.Fragment = At, L.isValidElement = ro, L.isElement = bd, L.isFragment = ud, L.isMemo = ld, L.findDOMNode = Cd, L.Component = lt, L.PureComponent = nr, L.memo = jg, L.forwardRef = ms, L.flushSync = pd, L.unstable_batchedUpdates = hd, L.StrictMode = md, L.Suspense = fx, L.SuspenseList = cn, L.lazy = Qg, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gd;
var I0 = L, Ad = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yd(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function vd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Wd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") && Object.keys(x).length === 1 ? x.default : x;
}
function Sd(x) {
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
const wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Ad,
  getAugmentedNamespace: Sd,
  getDefaultExportFromCjs: yd,
  getDefaultExportFromNamespaceIfNotNamed: Wd,
  getDefaultExportFromNamespaceIfPresent: vd
}, Symbol.toStringTag, { value: "Module" }));
var Bd = function(o, t, e, n) {
  var r = e ? e.call(n, o, t) : void 0;
  if (r !== void (-3785 + 2 * 3599 + 1 * -3413)) return !!r;
  if (o === t) return !0;
  if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
  var i = Object.keys(o), a = Object.keys(t);
  if (i.length !== a.length) return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = 0; c < i.length; c++) {
    var u = i[c];
    if (!s(u)) return !1;
    var g = o[u], h = t[u];
    if (r = e ? e.call(n, g, h, u) : void (-4030 + -7 * 494 + 4 * 1872), r === !1 || r === void (1 * 7460 + -406 * -19 + -15174) && g !== h) return !1;
  }
  return !0;
};
const Gd = wd.getDefaultExportFromCjs(Bd);
var xe = "-ms-", hn = "-moz-", ee = "-webkit-", Os = "comm", io = "rule", Mr = "decl", kd = "@import", Ks = "@keyframes", Hd = "@layer", Zs = Math.abs, Jr = String.fromCharCode, xr = Object.assign;
function Od(x, o) {
  return We(x, -1 * 9686 + 1 * 4259 + 81 * 67) ^ 1073 * 7 + -6336 + 226 * -5 ? (((o << -7387 + -2463 * -3 ^ We(x, -2461 + -3414 * 1 + 5875)) << 4630 + -2 * 2183 + -262 ^ We(x, -9995 * 1 + 6716 + -1 * -3280)) << -5377 + 1 * -6927 + 21 * 586 ^ We(x, 389 * 23 + -1 * 4021 + -4924)) << 1 * 5153 + -2 * -1277 + -7705 * 1 ^ We(x, 7408 * 1 + -2186 + -5219 * 1) : 1 * -611 + -2 * 439 + 1489;
}
function Rs(x) {
  return x.trim();
}
function Pt(x, o) {
  return (x = o.exec(x)) ? x[0] : x;
}
function X(x, o, t) {
  return x.replace(o, t);
}
function hx(x, o, t) {
  return x.indexOf(o, t);
}
function We(x, o) {
  return x.charCodeAt(o) | 129 + -43 * 3;
}
function Y0(x, o, t) {
  return x.slice(o, t);
}
function wt(x) {
  return x.length;
}
function Ps(x) {
  return x.length;
}
function gn(x, o) {
  return o.push(x), x;
}
function Kd(x, o) {
  return x.map(o).join("");
}
function ra(x, o) {
  return x.filter(function(t) {
    return !Pt(t, o);
  });
}
var ao = 164 + -47 * 7 + 2 * 83, X0 = 34 * 93 + 4 * -2483 + 111 * 61, Vs = -6736 + 1 * -8665 + 15401 * 1, ft = 1 * -5006 + 6938 + -21 * 92, Ce = 5 * -691 + -1890 + 1 * 5345, z0 = "";
function so(x, o, t, e, n, r, i, a) {
  var s = {};
  return s.value = x, s.root = o, s.parent = t, s.type = e, s.props = n, s.children = r, s.line = ao, s.column = X0, s.length = i, s.return = "", s.siblings = a, s;
}
function Xt(x, o) {
  return xr(so("", null, null, "", null, null, -1 * -4999 + 1848 + -6847 * 1, x.siblings), x, { length: -x.length }, o);
}
function G0(x) {
  for (; x.root; ) x = Xt(x.root, { children: [x] });
  gn(x, x.siblings);
}
function Zd() {
  return Ce;
}
function Rd() {
  return Ce = ft > 61 * 61 + -4631 + -26 * -35 ? We(z0, --ft) : -16085 + 3217 * 5, X0--, Ce === -2 * 4307 + -8653 + -443 * -39 && (X0 = -11 * 865 + 2757 * 1 + 6759, ao--), Ce;
}
function bt() {
  return Ce = ft < Vs ? We(z0, ft++) : 7795 + 1 * -7795, X0++, Ce === 3 * -366 + -2221 * 1 + 3329 && (X0 = 8131 * 1 + 9415 + -17545, ao++), Ce;
}
function d0() {
  return We(z0, ft);
}
function px() {
  return ft;
}
function co(x, o) {
  return Y0(z0, x, o);
}
function or(x) {
  switch (x) {
    case 0:
    case -9316 + 1907 * 5 + -30 * 7:
    case -2007 * 1 + 9 * 919 + 6254 * -1:
    case -6074 + 69 * 59 + -16 * -126:
    case 32:
      return 1051 * 5 + -3527 + -1723;
    case 1596 + -28 * 160 + 2917:
    case 1 * 7153 + 8119 * -1 + 1009:
    case 3040 + -41 * 89 + 653:
    case -9247 * -1 + -1 * 5653 + -3547:
    case -3037 * -2 + 8925 + -14937:
    case 3 * 2612 + 9931 + -17703:
    case 18 * -212 + 4978 + 4 * -259:
    case -14 * -415 + -417 * -17 + -12840:
    case 2159 * 1 + -850 + 1186 * -1:
    case 5747 + -219 * 1 + -1 * 5403:
      return 13 * -617 + 548 * 5 + -151 * -35;
    case 1 * -8615 + 1 * 2693 + 2 * 2990:
      return -12341 + 3086 * 4;
    case 727 * -4 + -7698 + 10640:
    case 9389 + -1 * -1698 + -11048:
    case 431 * 17 + 6068 + -13355:
    case -2 * 1983 + -4130 * 1 + 8187:
      return -4160 + 58 * -137 + 12108;
    case -6007 + -1 * -6048:
    case -1 * 8161 + -9493 + 17747:
      return -9 * 250 + -2035 + -2143 * -2;
  }
  return -4062 + -43 * 78 + 7416;
}
function Pd(x) {
  return ao = X0 = 1, Vs = wt(z0 = x), ft = 31 * 168 + -18 * 436 + 132 * 20, [];
}
function Vd(x) {
  return z0 = "", x;
}
function Zo(x) {
  return Rs(co(ft - (-1 * 5259 + -41 * -159 + 1259 * -1), rr(x === 825 + -2 * -4597 + -9928 ? x + (8 * 352 + -2825 + 11) : x === 1 * 5953 + 27 * -193 + -702 ? x + 1 : x)));
}
function Td(x) {
  for (; (Ce = d0()) && Ce < -1 * 6791 + -4768 * -2 + -2712; ) bt();
  return or(x) > 8249 * 1 + 7049 + -15296 || or(Ce) > -8886 * 1 + 2431 * -4 + 18613 ? "" : " ";
}
function Ed(x, o) {
  for (; --o && bt() && !(Ce < -779 * -11 + -8867 * 1 + 346 || Ce > 7169 + -2 * -1541 + -10149 || Ce > 4 * 1676 + 8773 + -15420 && Ce < 2948 + -2883 * 1 || Ce > -422 + -22 * -241 + -4810 && Ce < -393 * -7 + -2588 + -66); ) ;
  return co(x, px() + (o < -15158 + -3791 * -4 && d0() == -617 * 7 + 67 * 36 + 277 * 7 && bt() == 1680 + 27 * 326 + -10450 * 1));
}
function rr(x) {
  for (; bt(); ) switch (Ce) {
    case x:
      return ft;
    case -5939 + 1 * -6286 + -12259 * -1:
    case 7339 + 2 * -3650:
      x !== -75 * -41 + -271 * 6 + -283 * 5 && x !== 2167 + -53 * 155 + 6087 && rr(Ce);
      break;
    case 260 * 13 + -203 + 3137 * -1:
      x === 95 + -2 * -2850 + -5754 && rr(x);
      break;
    case 9849 + 1 * 8423 + -18180:
      bt();
      break;
  }
  return ft;
}
function Nd(x, o) {
  for (; bt() && x + Ce !== 1183 * -2 + 6708 + -4295 + (2743 + -1 * 9833 + 4 * 1775); ) if (x + Ce === -224 * 11 + 3769 * 1 + -421 * 3 + (7706 + -231 * 38 + 1114) && d0() === 397 * 1 + -12 * -446 + -5702) break;
  return "/*" + co(o, ft - (-6888 + 1 * 9623 + 2 * -1367)) + "*" + Jr(x === -4 * -2096 + -33 * 303 + 1662 ? x : bt());
}
function Ld(x) {
  for (; !or(d0()); ) bt();
  return co(x, ft);
}
function Dd(x) {
  return Vd(mx("", null, null, null, [""], x = Pd(x), 1917 * 2 + -209 + -3625, [-3346 * -1 + 1912 + -5258], x));
}
function mx(x, o, t, e, n, r, i, a, s) {
  for (var c = 0, u = -5355 + -3 * -2714 + -2787, g = i, h = 8756 + -7 * 1038 + -2 * 745, l = -1688 + -3 * -1885 + -3967, C = 365 * -27 + 64 * -62 + -13823 * -1, m = -4 * -1353 + -8452 + 3041, A = 1356 + -6 * -148 + -2243 * 1, d = 11 * -679 + -1097 + 13 * 659, v = 0, K = "", D = n, E = r, F = e, k = K; A; ) switch (C = v, v = bt()) {
    case 43 * -228 + 1 * 2091 + 7753:
      if (C != -1175 * -3 + -5305 * -1 + -178 * 49 && We(k, g - (8263 * -1 + -1 * 5678 + -2 * -6971)) == 58) {
        hx(k += X(Zo(v), "&", "&\f"), "&\f", Zs(c ? a[c - (1 * 1129 + 3119 + -4247)] : 20 * 451 + 7267 + -16287)) != -(2 * -4583 + -289 + -591 * -16) && (d = -(-797 * 2 + -3303 * 2 + 8201));
        break;
      }
    case 7762 * -1 + 142 + 2 * 3827:
    case 39:
    case -7669 * 1 + 106 * 33 + 1 * 4262:
      k += Zo(v);
      break;
    case 7 * -606 + -2583 + 6834:
    case 1023 + 5853 * 1 + 3433 * -2:
    case -300 + -991 * 9 + 9232:
    case 673 * 10 + -927 + -5771 * 1:
      k += Td(C);
      break;
    case 89 * 57 + -468 + 4513 * -1:
      k += Ed(px() - 1, 7);
      continue;
    case 289 * 1 + 41 * 215 + -9057:
      switch (d0()) {
        case -8985 + 9027 * 1:
        case 3868 + -1 * -6507 + -10328:
          gn(Fd(Nd(bt(), px()), o, t, s), s);
          break;
        default:
          k += "/";
      }
      break;
    case (5052 + 1 * -4929) * m:
      a[c++] = wt(k) * d;
    case (-65 * 40 + -55 * -178 + 45 * -157) * m:
    case -6765 * 1 + 3 * 933 + -1 * -4025:
    case 1 * 5396 + -1748 * 1 + -3648:
      switch (v) {
        case -9883 + 647 * -15 + 19588:
        case 5 * 563 + 6858 + -9548:
          A = 1 * 3371 + -4903 * -1 + -394 * 21;
        case -3518 + 3577 * 1 + u:
          d == -(3359 + -1679 * 2) && (k = X(k, /\f/g, "")), l > -2779 + 397 * 7 && wt(k) - g && gn(l > 7579 + -1 * 1327 + 20 * -311 ? aa(k + ";", e, t, g - (65 * 30 + -2228 + 279), s) : aa(X(k, " ", "") + ";", e, t, g - (92 * -94 + -563 * 17 + 18221), s), s);
          break;
        case -2309 * -1 + -11 * -347 + -6067:
          k += ";";
        default:
          if (gn(F = ia(k, o, t, c, u, n, a, K, D = [], E = [], g, r), r), v === -9 * -482 + -1585 * -2 + 211 * -35)
            if (u === -4236 + 2118 * 2) mx(k, o, F, F, D, r, g, a, E);
            else switch (h === 95 * -53 + -6193 + 11327 && We(k, 6092 + -6089 * 1) === -743 * 1 + 1 * 4261 + -1 * 3408 ? 78 * 34 + 3114 + 2 * -2833 : h) {
              case 41 * 9 + 6493 * -1 + 6224 * 1:
              case -1 * 6913 + 124 + 6897:
              case -6082 + 2458 * 1 + -3733 * -1:
              case 6689 * 1 + -8149 * 1 + 1575:
                mx(x, F, F, e && gn(ia(x, F, F, 2 * 1091 + 2997 + 5179 * -1, 16879 + -16879 * 1, n, a, K, n, D = [], g, E), E), n, E, g, a, e ? D : E);
                break;
              default:
                mx(k, F, F, F, [""], E, 7361 + 393 * 5 + -9326, a, E);
            }
      }
      c = u = l = 0, m = d = 9045 + -12 * 601 + -1832, K = k = "", g = i;
      break;
    case -5877 + -365 * 21 + 13600:
      g = -186 + -2 * 982 + -2151 * -1 + wt(k), l = C;
    default:
      if (m < -4742 * -2 + 8884 * -1 + -599) {
        if (v == -2 * -4098 + 1 * 7592 + -15665) --m;
        else if (v == 4784 + -3891 * 2 + 3123 && m++ == 8014 + 2 * 1555 + -11124 && Rd() == 7639 * 1 + -59 * 145 + 1041) continue;
      }
      switch (k += Jr(v), v * m) {
        case 1 * 1291 + 772 + 25 * -81:
          d = u > -1 * -4018 + -5346 + 1328 ? 2 * 2481 + -5253 + 4 * 73 : (k += "\f", -(1 * 1171 + -1 * 7617 + 21 * 307));
          break;
        case 44:
          a[c++] = (wt(k) - (-5 * 1107 + 5 * -436 + -1929 * -4)) * d, d = -5 * -53 + -6 * 155 + 666;
          break;
        case 1 * -1902 + 7878 + 5912 * -1:
          d0() === -1956 + 50 * 163 + 473 * -13 && (k += Zo(bt())), h = d0(), u = g = wt(K = k += Ld(px())), v++;
          break;
        case -8462 + 181 * 47:
          C === -13 * 675 + 1133 * 2 + -29 * -226 && wt(k) == 1163 + 1161 * -1 && (m = 0);
      }
  }
  return r;
}
function ia(x, o, t, e, n, r, i, a, s, c, u, g) {
  for (var h = n - 1, l = n === 710 * -3 + -1436 + 3566 ? r : [""], C = Ps(l), m = 4237 + 102 * 76 + -11989, A = 940 + -13 * -593 + -8649, d = -8374 + -2 * -4187; m < e; ++m) for (var v = 469 * -5 + 6180 + -3835, K = Y0(x, h + (-25 * -347 + -3 * -1269 + -12481), h = Zs(A = i[m])), D = x; v < C; ++v) (D = Rs(A > 10720 + -32 * 335 ? l[v] + " " + K : X(K, /&\f/g, l[v]))) && (s[d++] = D);
  return so(x, o, t, n === 5642 + -2708 * -3 + -6883 * 2 ? io : a, s, c, u, g);
}
function Fd(x, o, t, e) {
  return so(x, o, t, Os, Jr(Zd()), Y0(x, -12253 + 43 * 285, -(-30 * -58 + -5264 + 1763 * 2)), 0, e);
}
function aa(x, o, t, e, n) {
  return so(x, o, t, Mr, Y0(x, 0, e), Y0(x, e + 1, -(-1 * 5430 + 991 * -6 + 31 * 367)), e, n);
}
function Ts(x, o, t) {
  switch (Od(x, o)) {
    case 293 + -8 * 399 + 1 * 8002:
      return ee + "print-" + x + x;
    case 1397 * -1 + 9807 + -2673:
    case 2 * -3545 + -1259 * 7 + 5026 * 4:
    case -1 * 1111 + -2633 * -1 + 1655:
    case -385 * -11 + -4251 + 3449:
    case -929 * 5 + 157 * 41 + 1 * -151:
    case 5453 + 498 * -2:
    case -1 * 9509 + 3910 + -24 * -355:
    case -2 * -2973 + -1 * -7114 + -2496 * 3:
    case -7673 + -2081 * -4 + -5705 * -1:
    case 2 * 5656 + -964 + -4504:
    case -4787 * 2 + -5 * -523 + -10 * -1015:
    case 1 * -8293 + 530 * -7 + -1036 * -18:
    case -2 * 4393 + -1948 + -11 * -1249:
    case 6391:
    case -12068 + 131 * 137:
    case 5623:
    case -1546 * 3 + 707 + 10066:
    case -1 * -7441 + -2467 * -3 + 10243 * -1:
    case -1 * 2012 + -410 + -7277 * -1:
    case -1 * 6851 + 7854 + 3212:
    case 677 * 14 + 2646 * -2 + 2203:
    case -1033 * -2 + 4346 + -1303:
    case 2 * -787 + 321 * 1 + -2206 * -3:
    case 5621:
    case 8 * -941 + -2 * 2723 + 16803:
      return ee + x + x;
    case 6160 + 115 * -41 + 11 * 304:
      return hn + x + x;
    case -13001 + 1835 * 10:
    case 206 * 14 + 219 * -41 + 3 * 3447:
    case 4810:
    case -8115 + 1 * 3954 + -359 * -31:
    case 116 * 17 + -3273 * -2 + 1 * -5762:
      return ee + x + hn + x + xe + x + x;
    case -8 * 173 + 3287 + -4033 * -1:
      switch (We(x, o + (-4986 + -38 * -61 + 57 * 47))) {
        case -3517 * -1 + -1 * -7127 + -10530:
          return ee + x + xe + X(x, /[svh]\w+-[tblr]{2}/, "tb") + x;
        case -8201 + -311 * -12 + 4577 * 1:
          return ee + x + xe + X(x, /[svh]\w+-[tblr]{2}/, "tb-rl") + x;
        case 45:
          return ee + x + xe + X(x, /[svh]\w+-[tblr]{2}/, "lr") + x;
      }
    case -158 * -20 + -1 * 4359 + -1 * -8027:
    case -8697 + -3709 * -1 + 712 * 13:
    case 8583 + 4 * -1420:
      return ee + x + xe + x + x;
    case -21 * -502 + -8765 + 4388:
      return ee + x + xe + "flex-" + x + x;
    case -11 * 416 + -6891 + 757 * 22:
      return ee + x + X(x, /(\w+).+(:[^]+)/, ee + "box-$1$2" + xe + "flex-$1$2") + x;
    case -1078 + 9700 * 1 + -1 * 3179:
      return ee + x + xe + "flex-item-" + X(x, /flex-|-self/g, "") + (Pt(x, /flex-|baseline/) ? "" : xe + "grid-row-" + X(x, /flex-|-self/g, "")) + x;
    case -9985 + -19 * 407 + 22393:
      return ee + x + xe + "flex-line-pack" + X(x, /align-content|flex-|-self/g, "") + x;
    case -4437 + -1 * -8240 + 1745:
      return ee + x + xe + X(x, "shrink", "negative") + x;
    case -2014 + 9115 * -1 + 1 * 16421:
      return ee + x + xe + X(x, "basis", "preferred-size") + x;
    case 7041 + 1 * -981:
      return ee + "box-" + X(x, "-grow", "") + ee + x + xe + X(x, "grow", "positive") + x;
    case -9190 + 43 * -16 + 16 * 902:
      return ee + X(x, /([^-])(transform)/g, "$1" + ee + "$2") + x;
    case 14900 + -8713 * 1:
      return X(X(X(x, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), x, "") + x;
    case -1 * 631 + -3393 + 501 * 19:
    case 3959:
      return X(x, /(image-set\([^]*)/, ee + "$1$`$1");
    case 215 * -39 + -202 * -21 + 9111:
      return X(X(x, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + xe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + x + x;
    case -1 * -2818 + 1970 * -2 + 5322:
      if (!Pt(x, /flex-|baseline/)) return xe + "grid-column-align" + Y0(x, o) + x;
      break;
    case 2995 * 3 + 3 * -1886 + -735:
    case 8616 + 3 * 1822 + 2 * -5361:
      return xe + X(x, "template-", "") + x;
    case 2721 + -223 * -26 + -4135:
    case 3616:
      return t && t.some(function(e, n) {
        return o = n, Pt(e.props, /grid-\w+-end/);
      }) ? ~hx(x + (t = t[o].value), "span", 0) ? x : xe + X(x, "-start", "") + x + xe + "grid-row-span:" + (~hx(t, "span", 480 + 2089 * 3 + -6747) ? Pt(t, /\d+/) : +Pt(t, /\d+/) - +Pt(x, /\d+/)) + ";" : xe + X(x, "-start", "") + x;
    case 1 * -3626 + -314 * 19 + 14488:
    case -1 * -977 + 9188 + 1 * -6037:
      return t && t.some(function(e) {
        return Pt(e.props, /grid-\w+-start/);
      }) ? x : xe + X(X(x, "-end", "-span"), "span ", "") + x;
    case 4095:
    case -8049 + 8989 * -1 + 20621:
    case -1587 + 173 * 19 + 16 * 148:
    case -141 * 31 + 8 * 471 + -3 * -1045:
      return X(x, /(.+)-inline(.+)/, ee + "$1$2") + x;
    case -50 * -66 + 1 * -2357 + 7173:
    case 937 * 14 + 3 * 1614 + -1 * 10901:
    case 6149 + -2279 * 1 + 1883:
    case 5535:
    case -6315 + 1 * -1560 + 13320:
    case -521 + 1 * 10886 + -4664:
    case 2144 + 2418 * 4 + -6883:
    case 4677:
    case 3 * -1161 + 1 * -509 + 9525:
    case -10243 * -1 + 6527 + -10981:
    case 10 * -951 + -587 + 15118:
    case -7149 + -49 * -7 + 11571:
      if (wt(x) - (9535 + 1 * -2264 + 10 * -727) - o > -5357 + -1 * -5363) switch (We(x, o + (-29 * -38 + 9519 + -10620))) {
        case 1 * 7899 + 1 * 5442 + -8 * 1654:
          if (We(x, o + (-899 + -3 * -301)) !== 946 * -10 + -5682 + 1 * 15187) break;
        case 102:
          return X(x, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + hn + (We(x, o + (-1 * -8759 + -1085 + -2557 * 3)) == -8065 + 3135 * 1 + -458 * -11 ? "$3" : "$2-$3")) + x;
        case 131 * 67 + -16 * 370 + 1 * -2742:
          return ~hx(x, "stretch", -3298 + 1 * 3298) ? Ts(X(x, "stretch", "fill-available"), o, t) + x : x;
      }
      break;
    case 34 * -132 + -1952 + 11592:
    case -4037 + -1471 * 3 + 14370:
      return X(x, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, r, i, a, s, c) {
        return xe + n + ":" + r + c + (i ? xe + n + "-span:" + (a ? s : +s - +r) + c : "") + x;
      });
    case -1 * 167 + 6092 + 8 * -122:
      if (We(x, o + (-102 * -93 + -2 * 4331 + -818)) === 121) return X(x, ":", ":" + ee) + x;
      break;
    case -1 * -5399 + -11801 + -1 * -12846:
      switch (We(x, We(x, 14) === 45 ? 1 * -559 + -607 + 148 * 8 : 601 * -1 + -1307 + 101 * 19)) {
        case -7 * -698 + -506 * -7 + -8308:
          return X(x, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (We(x, 9688 + -84 * -54 + 290 * -49) === -2 * -2053 + -9332 + 5271 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + xe + "$2box$3") + x;
        case -347 * 14 + 328 * 26 + -3570:
          return X(x, ":", ":" + xe) + x;
      }
      break;
    case -2693 * -4 + -4517 * -1 + 15 * -638:
    case -5 * 1289 + 9649 + -1 * 557:
    case 2881 + -217 * -3 + -1397:
    case 3414 + -1 * 3781 + -2 * -2147:
    case -13139 + -1553 * -10:
      return X(x, "scroll-", "scroll-snap-") + x;
  }
  return x;
}
function Ox(x, o) {
  for (var t = "", e = 11180 + 5 * -2236; e < x.length; e++) t += o(x[e], e, x, o) || "";
  return t;
}
function Yd(x, o, t, e) {
  switch (x.type) {
    case Hd:
      if (x.children.length) break;
    case kd:
    case Mr:
      return x.return = x.return || x.value;
    case Os:
      return "";
    case Ks:
      return x.return = x.value + "{" + Ox(x.children, e) + "}";
    case io:
      if (!wt(x.value = x.props.join(","))) return "";
  }
  return wt(t = Ox(x.children, e)) ? x.return = x.value + "{" + t + "}" : "";
}
function Xd(x) {
  var o = Ps(x);
  return function(t, e, n, r) {
    for (var i = "", a = 1 * 6738 + 1721 * 3 + -11901; a < o; a++) i += x[a](t, e, n, r) || "";
    return i;
  };
}
function jd(x) {
  return function(o) {
    o.root || (o = o.return) && x(o);
  };
}
function Md(x, o, t, e) {
  if (x.length > -(-3369 * 2 + -59 * -136 + -1285) && !x.return)
    switch (x.type) {
      case Mr:
        x.return = Ts(x.value, x.length, t);
        return;
      case Ks:
        return Ox([Xt(x, { value: X(x.value, "@", "@" + ee) })], e);
      case io:
        if (x.length) return Kd(t = x.props, function(n) {
          switch (Pt(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              G0(Xt(x, { props: [X(n, /:(read-\w+)/, ":" + hn + "$1")] }));
              var r = {};
              r.props = [n], G0(Xt(x, r)), xr(x, { props: ra(t, e) });
              break;
            case "::placeholder":
              G0(Xt(x, { props: [X(n, /:(plac\w+)/, ":" + ee + "input-$1")] })), G0(Xt(x, { props: [X(n, /:(plac\w+)/, ":" + hn + "$1")] })), G0(Xt(x, { props: [X(n, /:(plac\w+)/, xe + "input-$1")] }));
              var i = {};
              i.props = [n], G0(Xt(x, i)), xr(x, { props: ra(t, e) });
              break;
          }
          return "";
        });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var Jd = N, q = {}, f0 = typeof process < "u" && void (-4928 + 24 * -182 + 2 * 4648) !== q && (q.REACT_APP_SC_ATTR || q.SC_ATTR) || "data-styled", Es = "active", Ns = "data-styled-version", go = "6.1.11", _r = `/*!sc*/
`, Qr = typeof window < "u" && "HTMLElement" in window, _d = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-1122 + -41 * 43 + -5 * -577) !== q && void (6 * -675 + 1236 + 2814) !== q.REACT_APP_SC_DISABLE_SPEEDY && q.REACT_APP_SC_DISABLE_SPEEDY !== "" ? q.REACT_APP_SC_DISABLE_SPEEDY !== "false" && q.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (7668 + 21 * 91 + -9579) !== q && void (-3452 + 4 * 863) !== q.SC_DISABLE_SPEEDY && q.SC_DISABLE_SPEEDY !== "" ? q.SC_DISABLE_SPEEDY !== "false" && q.SC_DISABLE_SPEEDY : q.NODE_ENV !== "production"), sa = /invalid hook call/i, xx = /* @__PURE__ */ new Set(), Qd = function(x, o) {
  if (q.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(x).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var r = !0;
      console.error = function(i) {
        for (var a = [], s = 1; s < arguments.length; s++) a[s - (-544 + 5 * 109)] = arguments[s];
        sa.test(i) ? (r = !1, xx.delete(e)) : n.apply(void (-5640 + -10 * -564), L0([i], a, !1));
      }, Ht(), r && !xx.has(e) && (console.warn(e), xx.add(e));
    } catch (i) {
      sa.test(i.message) && xx.delete(e);
    } finally {
      console.error = n;
    }
  }
}, uo = Object.freeze([]), j0 = Object.freeze({});
function Ud(x, o, t) {
  return void (9 * 472 + -2095 + -2153) === t && (t = j0), x.theme !== t.theme && x.theme || o || t.theme;
}
var ir = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), zd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, qd = /(^-|-$)/g;
function ca(x) {
  return x.replace(zd, "-").replace(qd, "");
}
var $d = /(a)(d)/gi, ox = -5372 + 633 * -7 + 9855, ga = function(x) {
  return String.fromCharCode(x + (x > -539 + 7 * -1343 + -1993 * -5 ? -3875 + -10 * 929 + 13204 : -8364 + 8461 * 1));
};
function ar(x) {
  var o, t = "";
  for (o = Math.abs(x); o > ox; o = o / ox | 2 * -4247 + 6181 + 2313) t = ga(o % ox) + t;
  return (ga(o % ox) + t).replace($d, "$1-$2");
}
var Ro, Ls = 5381, r0 = function(x, o) {
  for (var t = o.length; t; ) x = (-3319 * -1 + 4 * -412 + 78 * -21) * x ^ o.charCodeAt(--t);
  return x;
}, Ds = function(x) {
  return r0(Ls, x);
};
function eu(x) {
  return ar(Ds(x) >>> -5252 + -52 * -101);
}
function Fs(x) {
  return q.NODE_ENV !== "production" && typeof x == "string" && x || x.displayName || x.name || "Component";
}
function Po(x) {
  return typeof x == "string" && (q.NODE_ENV === "production" || x.charAt(-6942 + -145 * -59 + -1613 * 1) === x.charAt(-7849 + 1 * -8452 + -16301 * -1).toLowerCase());
}
var gt = {};
gt.childContextTypes = !0, gt.contextType = !0, gt.contextTypes = !0, gt.defaultProps = !0, gt.displayName = !0, gt.getDefaultProps = !0, gt.getDerivedStateFromError = !0, gt.getDerivedStateFromProps = !0, gt.mixins = !0, gt.propTypes = !0, gt.type = !0;
var jt = {};
jt.name = !0, jt.length = !0, jt.prototype = !0, jt.caller = !0, jt.callee = !0, jt.arguments = !0, jt.arity = !0;
var x0 = {};
x0.$$typeof = !0, x0.compare = !0, x0.defaultProps = !0, x0.displayName = !0, x0.propTypes = !0, x0.type = !0;
var O0 = {};
O0.$$typeof = !0, O0.render = !0, O0.defaultProps = !0, O0.displayName = !0, O0.propTypes = !0;
var Ys = typeof Symbol == "function" && Symbol.for, Xs = Ys ? Symbol.for("react.memo") : 13 * 3067 + -99446 + 119690, tu = Ys ? Symbol.for("react.forward_ref") : 54897 + -5 * -1043, nu = gt, xu = jt, js = x0, ou = ((Ro = {})[tu] = O0, Ro[Xs] = js, Ro);
function da(x) {
  return ("type" in (o = x) && o.type.$$typeof) === Xs ? js : "$$typeof" in x ? ou[x.$$typeof] : nu;
  var o;
}
var ru = Object.defineProperty, iu = Object.getOwnPropertyNames, ua = Object.getOwnPropertySymbols, au = Object.getOwnPropertyDescriptor, su = Object.getPrototypeOf, la = Object.prototype;
function Ms(x, o, t) {
  if (typeof o != "string") {
    if (la) {
      var e = su(o);
      e && e !== la && Ms(x, e, t);
    }
    var n = iu(o);
    ua && (n = n.concat(ua(o)));
    for (var r = da(x), i = da(o), a = 92 + 14 * 629 + -6 * 1483; a < n.length; ++a) {
      var s = n[a];
      if (!(s in xu || t && t[s] || i && s in i || r && s in r)) {
        var c = au(o, s);
        try {
          ru(x, s, c);
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
function Ur(x) {
  return typeof x == "object" && "styledComponentId" in x;
}
function a0(x, o) {
  return x && o ? "".concat(x, " ").concat(o) : x || o || "";
}
function Ia(x, o) {
  if (-4172 + 4 * 1043 === x.length) return "";
  for (var t = x[1352 + 5045 * -1 + 3693], e = 535 + 4207 * 2 + -8948; e < x.length; e++) t += x[e];
  return t;
}
function J0(x) {
  return x !== null && typeof x == "object" && x.constructor.name === Object.name && !("props" in x && x.$$typeof);
}
function sr(x, o, t) {
  if (void (2674 * -2 + 9493 * -1 + 14841) === t && (t = !1), !t && !J0(x) && !Array.isArray(x)) return o;
  if (Array.isArray(o))
    for (var e = 7986 + 13 * 117 + -9507; e < o.length; e++) x[e] = sr(x[e], o[e]);
  else if (J0(o))
    for (var e in o) x[e] = sr(x[e], o[e]);
  return x;
}
function zr(x, o) {
  var t = {};
  t.value = o, Object.defineProperty(x, "toString", t);
}
var Ae = {};
Ae[1] = `Cannot create styled-component for component: %s.

`, Ae[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, Ae[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, Ae[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, Ae[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, Ae[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, Ae[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', Ae[8] = `ThemeProvider: Please make your "theme" prop an object.

`, Ae[9] = "Missing document `<head>`\n\n", Ae[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, Ae[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, Ae[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", Ae[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, Ae[14] = `ThemeProvider: "theme" prop is required.

`, Ae[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", Ae[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, Ae[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, Ae[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var cu = q.NODE_ENV !== "production" ? Ae : {};
function gu() {
  for (var x = [], o = 1 * 1279 + -15 * -491 + -8644; o < arguments.length; o++) x[o] = arguments[o];
  for (var t = x[-3943 * 1 + 6 * -645 + 7813], e = [], n = 7386 * 1 + -75 + -7310, r = x.length; n < r; n += -9913 * -1 + 1334 + -2 * 5623) e.push(x[n]);
  return e.forEach(function(i) {
    t = t.replace(/%[a-z]/, i);
  }), t;
}
function q0(x) {
  for (var o = [], t = -8280 + -7 * -1183; t < arguments.length; t++) o[t - (-150 * 34 + -9287 + -327 * -44)] = arguments[t];
  return q.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(x, " for more information.").concat(o.length > 8244 + -2194 * 3 + -1662 ? " Args: ".concat(o.join(", ")) : "")) : new Error(gu.apply(void (-5 * -877 + 269 * 5 + -955 * 6), L0([cu[x]], o, !1)).trim());
}
var du = function() {
  function x(o) {
    this.groupSizes = new Uint32Array(-8042 + -94 * -91), this.length = 5581 * 1 + -8235 + -1 * -3166, this.tag = o;
  }
  return x.prototype.indexOfGroup = function(o) {
    for (var t = 1028 * 1 + -1 * -6672 + -7700, e = -1083 + -1 * -3298 + 5 * -443; e < o; e++) t += this.groupSizes[e];
    return t;
  }, x.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, r = n; o >= r; ) if ((r <<= 155 + -16 * -589 + -9578) < 12840 + -2 * 6420) throw q0(-1815 + 593 * -6 + 5389, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(e), this.length = r;
      for (var i = n; i < r; i++) this.groupSizes[i] = -1 * -6755 + -1 * -4823 + 1 * -11578;
    }
    for (var a = this.indexOfGroup(o + 1), s = (i = 9497 * 1 + 113 * -64 + 3 * -755, t.length); i < s; i++) this.tag.insertRule(a, t[i]) && (this.groupSizes[o]++, a++);
  }, x.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), n = e + t;
      this.groupSizes[o] = 110 * 4 + -7187 * -1 + -1 * 7627;
      for (var r = e; r < n; r++) this.tag.deleteRule(e);
    }
  }, x.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || this.groupSizes[o] === 0) return t;
    for (var e = this.groupSizes[o], n = this.indexOfGroup(o), r = n + e, i = n; i < r; i++) t += "".concat(this.tag.getRule(i)).concat(_r);
    return t;
  }, x;
}(), uu = 9137 * -1 + -7 * -709 + 4175 << 919 + 1165 * -1 + 276, bx = /* @__PURE__ */ new Map(), Kx = /* @__PURE__ */ new Map(), Ax = 1259 * -3 + 6524 + -2746, rx = function(x) {
  if (bx.has(x)) return bx.get(x);
  for (; Kx.has(Ax); ) Ax++;
  var o = Ax++;
  if (q.NODE_ENV !== "production" && ((-2177 + -5659 * 1 + 7836 | o) < 4637 + -206 * -43 + -13495 || o > uu)) throw q0(3460 + -49 * 73 + 133 * 1, "".concat(o));
  return bx.set(x, o), Kx.set(o, x), o;
}, lu = function(x, o) {
  Ax = o + (1 * -998 + -3838 + 4837 * 1), bx.set(x, o), Kx.set(o, x);
}, Iu = "style[".concat(f0, "][").concat(Ns, '="').concat(go, '"]'), fu = new RegExp("^".concat(f0, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Cu = function(x, o, t) {
  for (var e, n = t.split(","), r = -1 * 3979 + -1401 * -3 + -7 * 32, i = n.length; r < i; r++) (e = n[r]) && x.registerName(o, e);
}, hu = function(x, o) {
  for (var t, e = ((t = o.textContent) !== null && void (-9 * 1069 + -57 * 89 + -79 * -186) !== t ? t : "").split(_r), n = [], r = -2 * 1070 + 1349 + 791, i = e.length; r < i; r++) {
    var a = e[r].trim();
    if (a) {
      var s = a.match(fu);
      if (s) {
        var c = 0 | parseInt(s[1], 10), u = s[-3277 * -2 + 4660 + -11212];
        c !== 0 && (lu(u, c), Cu(x, u, s[29 + 2 * -13]), x.getTag().insertRules(c, n)), n.length = 4247 * 2 + 1 * -6677 + -1817 * 1;
      } else n.push(a);
    }
  }
};
function pu() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Js = function(x) {
  var o = document.head, t = x || o, e = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(f0, "]")));
    return s[s.length - (2953 * -1 + 245 * 7 + 1239)];
  }(t), r = n !== void 0 ? n.nextSibling : null;
  e.setAttribute(f0, Es), e.setAttribute(Ns, go);
  var i = pu();
  return i && e.setAttribute("nonce", i), t.insertBefore(e, r), e;
}, mu = function() {
  function x(o) {
    this.element = Js(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = 1 * 7375 + -8897 + -1 * -1522, r = e.length; n < r; n++) {
        var i = e[n];
        if (i.ownerNode === t) return i;
      }
      throw q0(-393 + -2 * 1854 + 4118);
    }(this.element), this.length = 845 * 5 + 5445 + -9670;
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
}(), bu = function() {
  function x(o) {
    this.element = Js(o), this.nodes = this.element.childNodes, this.length = 3 * -141 + -6542 + -995 * -7;
  }
  return x.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= 143 * 37 + -19 * -301 + -11010) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, x.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, x;
}(), Au = function() {
  function x(o) {
    this.rules = [], this.length = -10404 + -5202 * -2;
  }
  return x.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, -2908 + -2 * -1454, t), this.length++, !0);
  }, x.prototype.deleteRule = function(o) {
    this.rules.splice(o, -110 * 12 + 9696 + -8375), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, x;
}(), fa = Qr, yu = { isServer: !Qr, useCSSOMInjection: !_d }, _s = function() {
  function x(o, t, e) {
    void (2 * -4501 + 10 * 69 + 8312) === o && (o = j0), void (-3654 + 87 * -55 + 1 * 8439) === t && (t = {});
    var n = this;
    this.options = Ue(Ue({}, yu), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && Qr && fa && (fa = !1, function(r) {
      for (var i = document.querySelectorAll(Iu), a = -1458 + -687 * 9 + 7641, s = i.length; a < s; a++) {
        var c = i[a];
        c && c.getAttribute(f0) !== Es && (hu(r, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), zr(this, function() {
      return function(r) {
        for (var i = r.getTag(), a = i.length, s = "", c = function(g) {
          var h = function(d) {
            return Kx.get(d);
          }(g);
          if (void (-9244 + 2 * 4622) === h) return "continue";
          var l = r.names.get(h), C = i.getGroup(g);
          if (void (6082 + -6082 * 1) === l || C.length === 0) return "continue";
          var m = "".concat(f0, ".g").concat(g, '[id="').concat(h, '"]'), A = "";
          l !== void 0 && l.forEach(function(d) {
            d.length > 16698 + -69 * 242 && (A += "".concat(d, ","));
          }), s += "".concat(C).concat(m, '{content:"').concat(A, '"}').concat(_r);
        }, u = 0; u < a; u++) c(u);
        return s;
      }(n);
    });
  }
  return x.registerId = function(o) {
    return rx(o);
  }, x.prototype.reconstructWithOptions = function(o, t) {
    return void (-2297 * -1 + -5 * 1541 + 5408) === t && (t = !0), new x(Ue(Ue({}, this.options), o), this.gs, t && this.names || void 0);
  }, x.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || 8960 + 5713 * 1 + -14673) + (6055 + -3 * 2018);
  }, x.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new Au(n) : e ? new mu(n) : new bu(n);
    }(this.options), new du(o)));
    var o;
  }, x.prototype.hasNameForId = function(o, t) {
    return this.names.has(o) && this.names.get(o).has(t);
  }, x.prototype.registerName = function(o, t) {
    if (rx(o), this.names.has(o)) this.names.get(o).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(o, e);
    }
  }, x.prototype.insertRules = function(o, t, e) {
    this.registerName(o, t), this.getTag().insertRules(rx(o), e);
  }, x.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, x.prototype.clearRules = function(o) {
    this.getTag().clearGroup(rx(o)), this.clearNames(o);
  }, x.prototype.clearTag = function() {
    this.tag = void (-7442 + -6647 * -1 + -15 * -53);
  }, x;
}(), vu = /&/g, Wu = /^\s*\/\/.*$/gm;
function Qs(x, o) {
  return x.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(o, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(o, " ")), t.props = t.props.map(function(e) {
      return "".concat(o, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Qs(t.children, o)), t;
  });
}
function Us(x) {
  var o, t, e, n = x === void 0 ? j0 : x, r = n.options, i = void (3 * -709 + -7171 + 9298) === r ? j0 : r, a = n.plugins, s = void (-9077 * -1 + 21 * 137 + 43 * -278) === a ? uo : a, c = function(h, l, C) {
    return C.startsWith(t) && C.endsWith(t) && C.replaceAll(t, "").length > 0 ? ".".concat(o) : h;
  }, u = s.slice();
  u.push(function(h) {
    h.type === io && h.value.includes("&") && (h.props[16 * 172 + -412 * 11 + 1780] = h.props[6525 + 5 * -1305].replace(vu, t).replace(e, c));
  }), i.prefix && u.push(Md), u.push(Yd);
  var g = function(h, l, C, m) {
    void (11993 + -179 * 67) === l && (l = ""), void (2 * 122 + -3008 + 2764 * 1) === C && (C = ""), void (-7864 + -2 * -3932) === m && (m = "&"), o = m, t = l, e = new RegExp("\\".concat(t, "\\b"), "g");
    var A = h.replace(Wu, ""), d = Dd(C || l ? "".concat(C, " ").concat(l, " { ").concat(A, " }") : A);
    i.namespace && (d = Qs(d, i.namespace));
    var v = [];
    return Ox(d, Xd(u.concat(jd(function(K) {
      return v.push(K);
    })))), v;
  };
  return g.hash = s.length ? s.reduce(function(h, l) {
    return l.name || q0(786 + 8084 * -1 + 7313), r0(h, l.name);
  }, Ls).toString() : "", g;
}
var Su = new _s(), cr = Us(), qr = I0.createContext({ shouldForwardProp: void 0, styleSheet: Su, stylis: cr });
qr.Consumer;
var wu = I0.createContext(void (-1 * 974 + -3 * 577 + 2705));
function gr() {
  return p0(qr);
}
function Bu(x) {
  var o = ze(x.stylisPlugins), t = o[-9364 + -2 * -4682], e = o[-1813 + 1104 * 3 + -1498], n = gr().styleSheet, r = xt(function() {
    var u = n, g = {};
    return g.useCSSOMInjection = !1, x.sheet ? u = x.sheet : x.target && (u = u.reconstructWithOptions({ target: x.target }, !1)), x.disableCSSOMInjection && (u = u.reconstructWithOptions(g)), u;
  }, [x.disableCSSOMInjection, x.sheet, x.target, n]), i = xt(function() {
    var u = {};
    u.namespace = x.namespace, u.prefix = x.enableVendorPrefixes;
    var g = {};
    return g.options = u, g.plugins = t, Us(g);
  }, [x.enableVendorPrefixes, x.namespace, t]);
  he(function() {
    Gd(t, x.stylisPlugins) || e(x.stylisPlugins);
  }, [x.stylisPlugins]);
  var a = xt(function() {
    var u = {};
    return u.shouldForwardProp = x.shouldForwardProp, u.styleSheet = r, u.stylis = i, u;
  }, [x.shouldForwardProp, r, i]), s = {};
  s.value = a;
  var c = {};
  return c.value = i, I0.createElement(qr.Provider, s, I0.createElement(wu.Provider, c, x.children));
}
var Ca = function() {
  function x(o, t) {
    var e = this;
    this.inject = function(n, r) {
      void (-13069 + 1 * 13069) === r && (r = cr);
      var i = e.name + r.hash;
      n.hasNameForId(e.id, i) || n.insertRules(e.id, i, r(e.rules, i, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, zr(this, function() {
      throw q0(1164 + 4 * -288, String(e.name));
    });
  }
  return x.prototype.getName = function(o) {
    return void (2914 * 1 + 7444 + -10358) === o && (o = cr), this.name + o.hash;
  }, x;
}(), Gu = function(x) {
  return x >= "A" && x <= "Z";
};
function ha(x) {
  for (var o = "", t = -13211 + 1 * 13211; t < x.length; t++) {
    var e = x[t];
    if (-4917 + 13 * 185 + 1 * 2513 === t && e === "-" && x[9224 * 1 + -15 * 206 + -6134] === "-") return x;
    Gu(e) ? o += "-" + e.toLowerCase() : o += e;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var zs = function(x) {
  return x == null || x === !1 || x === "";
}, qs = function(x) {
  var o, t, e = [];
  for (var n in x) {
    var r = x[n];
    x.hasOwnProperty(n) && !zs(r) && (Array.isArray(r) && r.isCss || M0(r) ? e.push("".concat(ha(n), ":"), r, ";") : J0(r) ? e.push.apply(e, L0(L0(["".concat(n, " {")], qs(r), !1), ["}"], !1)) : e.push("".concat(ha(n), ": ").concat((o = n, (t = r) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || o in Jd || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function u0(x, o, t, e) {
  if (zs(x)) return [];
  if (Ur(x)) return [".".concat(x.styledComponentId)];
  if (M0(x)) {
    if (!M0(r = x) || r.prototype && r.prototype.isReactComponent || !o) return [x];
    var n = x(o);
    return q.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof Ca || J0(n) || n === null || console.error("".concat(Fs(x), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), u0(n, o, t, e);
  }
  var r;
  return x instanceof Ca ? t ? (x.inject(t, e), [x.getName(e)]) : [x] : J0(x) ? qs(x) : Array.isArray(x) ? Array.prototype.concat.apply(uo, x.map(function(i) {
    return u0(i, o, t, e);
  })) : [x.toString()];
}
function ku(x) {
  for (var o = 3942 + -5899 * -1 + 757 * -13; o < x.length; o += 1 * -5121 + -8964 + 14086) {
    var t = x[o];
    if (M0(t) && !Ur(t)) return !1;
  }
  return !0;
}
var Hu = Ds(go), Ou = function() {
  function x(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = q.NODE_ENV === "production" && (e === void 0 || e.isStatic) && ku(o), this.componentId = t, this.baseHash = r0(Hu, t), this.baseStyle = e, _s.registerId(t);
  }
  return x.prototype.generateAndInjectStyles = function(o, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = a0(n, this.staticRulesId);
      else {
        var r = Ia(u0(this.rules, o, t, e)), i = ar(r0(this.baseHash, r) >>> 0);
        if (!t.hasNameForId(this.componentId, i)) {
          var a = e(r, ".".concat(i), void 0, this.componentId);
          t.insertRules(this.componentId, i, a);
        }
        n = a0(n, i), this.staticRulesId = i;
      }
    else {
      for (var s = r0(this.baseHash, e.hash), c = "", u = 0; u < this.rules.length; u++) {
        var g = this.rules[u];
        if (typeof g == "string") c += g, q.NODE_ENV !== "production" && (s = r0(s, g));
        else if (g) {
          var h = Ia(u0(g, o, t, e));
          s = r0(s, h + u), c += h;
        }
      }
      if (c) {
        var l = ar(s >>> 0);
        t.hasNameForId(this.componentId, l) || t.insertRules(this.componentId, l, e(c, ".".concat(l), void (-1 * -8823 + -1358 + -7465), this.componentId)), n = a0(n, l);
      }
    }
    return n;
  }, x;
}(), $s = I0.createContext(void (1 * -5097 + -8243 + 2 * 6670));
$s.Consumer;
var Vo = {}, pa = /* @__PURE__ */ new Set();
function Ku(x, o, t) {
  var e = Ur(x), n = x, r = !Po(x), i = o.attrs, a = void (1 * 2753 + 6715 + -9468) === i ? uo : i, s = o.componentId, c = void (-179 * 23 + 1 * 1886 + 23 * 97) === s ? function(E, F) {
    var k = typeof E != "string" ? "sc" : ca(E);
    Vo[k] = (Vo[k] || -9165 + -2 * -733 + 7699 * 1) + (1488 + -1487 * 1);
    var J = "".concat(k, "-").concat(eu(go + k + Vo[k]));
    return F ? "".concat(F, "-").concat(J) : J;
  }(o.displayName, o.parentComponentId) : s, u = o.displayName, g = void (-73 * 91 + -1574 * 1 + 8217) === u ? function(E) {
    return Po(E) ? "styled.".concat(E) : "Styled(".concat(Fs(E), ")");
  }(x) : u, h = o.displayName && o.componentId ? "".concat(ca(o.displayName), "-").concat(o.componentId) : o.componentId || c, l = e && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, C = o.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var m = n.shouldForwardProp;
    if (o.shouldForwardProp) {
      var A = o.shouldForwardProp;
      C = function(E, F) {
        return m(E, F) && A(E, F);
      };
    } else C = m;
  }
  var d = new Ou(t, h, e ? n.componentStyle : void (-36 * -96 + -3 * 323 + -829 * 3));
  function v(E, F) {
    return function(k, J, le) {
      var U = k.attrs, Ie = k.componentStyle, fe = k.defaultProps, Ke = k.foldedComponentIds, Ct = k.styledComponentId, ie = k.target, Ze = I0.useContext($s), Fe = gr(), rt = k.shouldForwardProp || Fe.shouldForwardProp;
      q.NODE_ENV !== "production" && Hx(Ct);
      var Ye = Ud(J, Ze, fe) || j0, pe = function(b0, qe, vt) {
        var it = {};
        it.className = void (-6751 + -2270 * -1 + -1 * -4481), it.theme = vt;
        for (var zt, Wt = Ue(Ue({}, qe), it), ht = -1 * -6217 + -6016 + -201 * 1; ht < b0.length; ht += 16246 + 5 * -3249) {
          var qt = M0(zt = b0[ht]) ? zt(Wt) : zt;
          for (var pt in qt) Wt[pt] = pt === "className" ? a0(Wt[pt], qt[pt]) : pt === "style" ? Ue(Ue({}, Wt[pt]), qt[pt]) : qt[pt];
        }
        return qe.className && (Wt.className = a0(Wt.className, qe.className)), Wt;
      }(U, J, Ye), Ve = pe.as || ie, Xe = {};
      for (var me in pe) void (6406 + -2 * -4903 + 3 * -5404) === pe[me] || me[31 * 163 + -3374 + -1679] === "$" || me === "as" || me === "theme" && pe.theme === Ye || (me === "forwardedAs" ? Xe.as = pe.forwardedAs : rt && !rt(me, Ve) || (Xe[me] = pe[me], rt || q.NODE_ENV !== "development" || Fg(me) || pa.has(me) || !ir.has(Ve) || (pa.add(me), console.warn('styled-components: it looks like an unknown prop "'.concat(me, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Te = function(b0, qe) {
        var vt = gr(), it = b0.generateAndInjectStyles(qe, vt.styleSheet, vt.stylis);
        return q.NODE_ENV !== "production" && Hx(it), it;
      }(Ie, pe);
      q.NODE_ENV !== "production" && k.warnTooManyClasses && k.warnTooManyClasses(Te);
      var je = a0(Ke, Ct);
      return Te && (je += " " + Te), pe.className && (je += " " + pe.className), Xe[Po(Ve) && !ir.has(Ve) ? "class" : "className"] = je, Xe.ref = le, De(Ve, Xe);
    }(K, E, F);
  }
  v.displayName = g;
  var K = I0.forwardRef(v), D = {};
  return D.attrs = !0, D.componentStyle = !0, D.displayName = !0, D.foldedComponentIds = !0, D.shouldForwardProp = !0, D.styledComponentId = !0, D.target = !0, K.attrs = l, K.componentStyle = d, K.displayName = g, K.shouldForwardProp = C, K.foldedComponentIds = e ? a0(n.foldedComponentIds, n.styledComponentId) : "", K.styledComponentId = h, K.target = e ? n.target : x, Object.defineProperty(K, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = e ? function(F) {
      for (var k = [], J = -5596 + 572 * 12 + 7 * -181; J < arguments.length; J++) k[J - (1825 * 1 + -40 * 3 + 568 * -3)] = arguments[J];
      for (var le = -1 * 5854 + 4433 + -1 * -1421, U = k; le < U.length; le++) sr(F, U[le], !0);
      return F;
    }({}, n.defaultProps, E) : E;
  } }), q.NODE_ENV !== "production" && (Qd(g, h), K.warnTooManyClasses = /* @__PURE__ */ function(E, F) {
    var k = {}, J = !1;
    return function(le) {
      if (!J && (k[le] = !0, Object.keys(k).length >= -7625 + -6255 * -1 + 1570)) {
        var U = F ? ' with the id of "'.concat(F, '"') : "";
        console.warn("Over ".concat(4402 + 1013 * 4 + -8254, " classes were generated for component ").concat(E).concat(U, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), J = !0, k = {};
      }
    };
  }(g, h)), zr(K, function() {
    return ".".concat(K.styledComponentId);
  }), r && Ms(K, x, D), K;
}
function ma(x, o) {
  for (var t = [x[0]], e = -2818 + 1 * 4889 + -1 * 2071, n = o.length; e < n; e += 1) t.push(o[e], x[e + (-626 + -955 * -4 + -3193)]);
  return t;
}
var ba = function(x) {
  var o = {};
  return o.isCss = !0, Object.assign(x, o);
};
function ec(x) {
  for (var o = [], t = 1 * -3394 + -3261 + 6656; t < arguments.length; t++) o[t - (-959 * 2 + -2784 + 4703)] = arguments[t];
  if (M0(x) || J0(x)) return ba(u0(ma(uo, L0([x], o, !0))));
  var e = x;
  return -3841 + 167 * 23 === o.length && -1611 + 806 * 2 === e.length && typeof e[11868 + -258 * 46] == "string" ? u0(e) : ba(u0(ma(e, o)));
}
function dr(x, o, t) {
  if (void (2537 * -2 + -123 * 14 + 6796) === t && (t = j0), !o) throw q0(2483 * -3 + -9337 + -16787 * -1, o);
  var e = function(n) {
    for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
    return x(o, t, ec.apply(void (2 * 4741 + 2306 * -3 + -1282 * 2), L0([n], r, !1)));
  };
  return e.attrs = function(n) {
    return dr(x, o, Ue(Ue({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return dr(x, o, Ue(Ue({}, t), n));
  }, e;
}
var tc = function(x) {
  return dr(Ku, x);
}, $0 = tc;
ir.forEach(function(x) {
  $0[x] = tc(x);
});
q.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ix = "__sc-".concat(f0, "__");
q.NODE_ENV !== "production" && q.NODE_ENV !== "test" && typeof window < "u" && (window[ix] || (window[ix] = -1041 + 226 * -13 + 3979), 6087 + -1 * 941 + -5145 === window[ix] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ix] += 9960 + -1 * -4005 + 13964 * -1);
const Zu = $0.div`
  position: relative;
`, Ru = $0.video`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(x) => x.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class re extends Error {
  constructor(t, e) {
    super(t);
    _(this, "cause");
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
var yx = ((x) => (x.CONTINUE_DETECTION = "continue-detection", x.SWITCH_CAMERA = "switch-camera", x.TOGGLE_MIRROR = "toggle-mirror", x))(yx || {}), nc = ((x) => (x.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", x.CONTROL = "document-auto-capture:control", x.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", x.DOCUMENT_DETECTION = "document-auto-capture:document-detection", x.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", x.STATE_CHANGED = "document-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", x))(nc || {}), Nt = ((x) => (x.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", x.CONTROL = "face-auto-capture:control", x.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", x.FACE_DETECTION = "face-auto-capture:face-detection", x.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", x.STATE_CHANGED = "face-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", x))(Nt || {}), vn = ((x) => (x.ANIMATION_END = "magnifeye-auto-capture:animation-end", x.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", x))(vn || {}), Pu = ((x) => (x.STATUS_CHANGED = "smile-auto-capture:status-changed", x))(Pu || {});
const xc = {};
xc.EYE_NOT_PRESENT = "eye_not_present";
const Aa = xc, Ne = {};
Ne.CANDIDATE_SELECTION = "candidate_selection", Ne.FACE_TOO_CLOSE = "face_too_close", Ne.FACE_TOO_FAR = "face_too_far", Ne.FACE_CENTERING = "face_centering", Ne.FACE_NOT_PRESENT = "face_not_present", Ne.SHARPNESS_TOO_LOW = "sharpness_too_low", Ne.BRIGHTNESS_TOO_LOW = "brightness_too_low", Ne.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Ne.DEVICE_PITCHED = "device_pitched", Ne.LEFT_EYE_NOT_PRESENT = "left_" + Aa.EYE_NOT_PRESENT, Ne.RIGHT_EYE_NOT_PRESENT = "right_" + Aa.EYE_NOT_PRESENT, Ne.MOUTH_NOT_PRESENT = "mouth_not_present", Ne.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", Ne.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const Re = Ne, Qe = {};
Qe.isPresent = Re.FACE_NOT_PRESENT, Qe.isNotPitched = Re.DEVICE_PITCHED, Qe.isNotSmall = Re.FACE_TOO_FAR, Qe.isNotLarge = Re.FACE_TOO_CLOSE, Qe.isNotOutOfBounds = Re.FACE_CENTERING, Qe.isNotDim = Re.BRIGHTNESS_TOO_LOW, Qe.isNotBright = Re.BRIGHTNESS_TOO_HIGH, Qe.isSharp = Re.SHARPNESS_TOO_LOW, Qe.isLeftEyePresent = Re.LEFT_EYE_NOT_PRESENT, Qe.isRightEyePresent = Re.RIGHT_EYE_NOT_PRESENT, Qe.isMouthPresent = Re.MOUTH_NOT_PRESENT, Qe.isMouthScoreNotTooHigh = Re.MOUTH_SCORE_TOO_HIGH, Qe.isMouthScoreNotTooLow = Re.MOUTH_SCORE_TOO_LOW;
const Vu = Qe, ur = {};
ur.FRONT = "user", ur.REAR = "environment";
const oc = ur, dn = {};
dn.LOADING = "LOADING", dn.ERROR = "ERROR", dn.WAITING = "WAITING", dn.RUNNING = "RUNNING";
const Bt = dn;
var nt = ((x) => (x.CLOSEUP = "CLOSEUP", x.DISTANT = "DISTANT", x.MIDDLE = "MIDDLE", x))(nt || {});
const rc = { ...Bt };
rc.DONE = "DONE";
const s0 = rc, lo = Dn(void 0);
lo.displayName = "AppStateContext";
function en() {
  const x = p0(lo);
  if (x === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return x;
}
const Tu = lo.Provider, Eu = en;
class ic extends lt {
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
    return ((o = this.context) == null ? void 0 : o.appState) === Bt.ERROR ? null : this.props.children;
  }
}
_(ic, "contextType", lo);
const Nu = $0.canvas`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Lu = $0.div`
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
function Du() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Fu = ms(
  ({ detectionDetails: x, isImageMirror: o }, t) => Du() ? (console.log(x), /* @__PURE__ */ O(At, { children: [
    /* @__PURE__ */ O(Nu, { ref: t, $isImageMirror: o }),
    /* @__PURE__ */ O(Lu, { children: Object.entries(x).map(([e, n]) => /* @__PURE__ */ O("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ O("strong", { children: n })
    ] }, e)) })
  ] })) : null
), Zx = Dn(void 0);
Zx.displayName = "AnalyticsContext";
function ac() {
  const x = p0(Zx);
  if (x === void 0)
    throw new Error(`${Zx.displayName} must be used within a AnalyticsProvider`);
  return x;
}
function He(x, o) {
  const t = Rx();
  return He = function(e, n) {
    e = e - (1324 + -1 * -8458 + -9652);
    let r = t[e];
    if (He.ZelkxQ === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, h) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + h.charCodeAt(d % h.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      He.dHvNXW = u, x = arguments, He.ZelkxQ = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? r = c : (He.rBxZFJ === void 0 && (He.rBxZFJ = !0), r = He.dHvNXW(r, n), x[s] = r), r;
  }, He(x, o);
}
function Yu(x, o, t, e, n) {
  return He(t - 955, x);
}
(function(x, o) {
  function t(s, c, u, g, h) {
    return He(s - 960, h);
  }
  function e(s, c, u, g, h) {
    return He(c - 542, u);
  }
  function n(s, c, u, g, h) {
    return He(h - 516, g);
  }
  function r(s, c, u, g, h) {
    return He(s - 615, g);
  }
  const i = x();
  function a(s, c, u, g, h) {
    return He(h - 432, c);
  }
  for (; ; )
    try {
      if (-parseInt(e(705, 692, "OOs@", 695, 695)) / 1 * (-parseInt(e(693, 693, "]Q&c", 696, 713)) / 2) + parseInt(t(1114, 1120, 1117, 1114, "LUso")) / 3 * (parseInt(a(583, "j@ZE", 579, 605, 595)) / 4) + -parseInt(t(1101, 1085, 1086, 1103, "Qqp%")) / 5 + -parseInt(e(717, 701, "loEL", 706, 704)) / 6 + parseInt(e(703, 700, "$bwl", 707, 712)) / 7 * (-parseInt(r(781, 766, 765, "5dse", 790)) / 8) + -parseInt(t(1121, 1128, 1128, 1128, "GwFx")) / 9 * (parseInt(n(650, 665, 661, "%lOm", 649)) / 10) + -parseInt(a(599, "K1aE", 611, 600, 596)) / 11 * (-parseInt(e(674, 688, "B&SU", 676, 705)) / 12) === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Rx, 1222027 + 378254 * -1);
function Rx() {
  const x = ["W5PsWRSDFq", "sqLvW6qw", "W7jsWQSiFW", "cthdG8ocW4X8wGCR", "W67dTmknzCoH", "u8kGWQWNuW", "WQ/cPCkTkmo7WQ0bzG", "z2bdW4tcRJPbDvPQW58", "BmkqWPjxW6TubGddVCoiBJ9L", "WQtdJ8oibajGgSkzW5G", "WQJdGCknW6OUWPpdRmksWOxcKLhcHY0", "ggz0W5CUvbZcJG1JECktWQe", "vxGUCNe", "w1HdWPejWQL0aIFcJq", "dteJW4bJ", "fvFcGWy/W57cKJqefW", "W7tdQIvPggNcG3X+bCklm1G", "qvCC", "wNhcVCoHW6m", "W4nDduNdSW", "mCoIW7vOtdJcUmkkWPVdRG", "dCodWPeGW6xdLbPirdi", "iqtcQ2hdKCk6v8olW5S", "xXunFG4", "WPasWR7cMSkqWP4wWOVcS8kdW4G", "dtCcW6bkedy", "W59cWOymFa", "W67cIthcOa", "cCoRWPNcOgNdHCoQAmoOWPj/rqnw", "oSoCW70mWQ9TdWhdISo2DxXF", "b8oboa7dVG", "fGjDW4bsdSoDWOLka3zn", "afj9WPf9WQWtlY/cRLzV", "fcKPChjdWOFcGq", "W4rgpGldUCkuBqaF", "FCofW5pcGSkbWRtdQCoOs8krCKWBW5W", "W7mpESogbxir", "au9JWOOwvMZcMSouW5vrahC", "W4rreeRdUG"];
  return Rx = function() {
    return x;
  }, Rx();
}
function Xu(x, o, t, e, n) {
  return He(x - 488, t);
}
function To(x, o, t, e, n) {
  return He(o - -60, x);
}
const Px = Dn(void (5170 + 1 * 6523 + 11 * -1063));
function Eo(x, o, t, e, n) {
  return He(x - -807, o);
}
Px[To(")%Tl", 89) + To("!IDG", 96) + "e"] = To("!IDG", 72) + Xu(630, 623, "j@ZE") + Yu("HeXZ", 1102, 1112);
function $r() {
  const x = p0(Px);
  function o(n, r, i, a, s) {
    return Eo(i - 1658, s);
  }
  if (x === void (-3016 * 1 + -78 * -104 + -5096)) throw new Error(Px[t(216, 217, 198, 214, "!IDG") + t(234, 224, 219, 235, "%lOm") + "e"] + (o(1022, 1e3, 1004, 988, ")t9!") + o(996, 980, 995, 991, "Qqp%") + t(220, 232, 229, 218, "6c[j") + e(-200, -205, -194, -196, "Fqi$") + t(217, 217, 210, 197, "wMt)") + t(254, 245, 264, 239, ")%Tl") + e(-228, -230, -246, -232, "OOs@") + e(-226, -218, -214, -214, "GwFx")));
  function t(n, r, i, a, s) {
    return Eo(n - 893, s);
  }
  function e(n, r, i, a, s) {
    return Eo(r - 442, s);
  }
  return x;
}
function Vx() {
  const x = ["wCkiWQ8ctxJdGadcOGRcS8oG", "oYJcICo/kb/cQSkW", "d8kQFI3cRCkfWPL8WQddS8ormq", "tSkuW5NcGCkaa8k2kq", "W4ldQ8khqtldQmo6ASoZW7vYEW", "WQ8po0ZdOW", "dmkOFcJcQSkdWOr5WPBdJmoPcq", "tSkmpqy", "W610WQSEW6lcLmk/e8oUW605aLK", "W6NcJCkSWRTFqreTWQBcJmovW70", "uwldIvec", "W5mzWQldLCkYkIVcV8k1cbPp", "uIflamolW5KCWOtcNvxdUmkV", "dXJdU8o6WP9kA8ouomkWja0", "axJdLCknW6nJW4tcKG", "tLJcNx8L", "o8oDW7NcVCk+", "achdSgGIW7ugWPO", "d8kPEI3cRCkhW6zOWRNdOSoBmCki", "WPtcJJdcVSo2", "zmoZtaXX", "emovltKdWQxcSKa", "vIPjcSokW50JWQxcN3BdQ8kB", "b8k4WRqMFmoRumoVW6hcHCkFWPK", "CdldSNOajc3cICohe8oaWPu", "DZRcNqfIFXxcMq", "cmkNDINcQ8kcWOjHWRddL8okfW"];
  return Vx = function() {
    return x;
  }, Vx();
}
function Oe(x, o) {
  const t = Vx();
  return Oe = function(e, n) {
    e = e - (-103 * 47 + 8485 * -1 + -14 * -982);
    let r = t[e];
    if (Oe.FnvioT === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, h) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + h.charCodeAt(d % h.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      Oe.ymUZRv = u, x = arguments, Oe.FnvioT = !0;
    }
    const a = t[10078 + -2 * 5039], s = e + a, c = x[s];
    return c ? r = c : (Oe.iyrscm === void 0 && (Oe.iyrscm = !0), r = Oe.ymUZRv(r, n), x[s] = r), r;
  }, Oe(x, o);
}
(function(x, o) {
  const t = x();
  function e(a, s, c, u, g) {
    return Oe(u - -503, c);
  }
  function n(a, s, c, u, g) {
    return Oe(s - -157, g);
  }
  function r(a, s, c, u, g) {
    return Oe(s - -866, u);
  }
  function i(a, s, c, u, g) {
    return Oe(a - -209, c);
  }
  for (; ; )
    try {
      if (parseInt(n(298, 289, 288, 298, "zxnV")) / 1 + parseInt(n(277, 288, 281, 290, "]*uX")) / 2 + -parseInt(i(222, 226, "@dk3", 223, 225)) / 3 * (-parseInt(n(285, 271, 264, 266, "]*uX")) / 4) + -parseInt(e(-74, -73, "J7N0", -71, -82)) / 5 + parseInt(e(-66, -78, "J7N0", -68, -69)) / 6 * (parseInt(i(225, 234, "kMOe", 229, 229)) / 7) + -parseInt(n(254, 267, 254, 268, "J7N0")) / 8 + -parseInt(r(-421, -429, -434, "q1sN", -424)) / 9 * (parseInt(i(227, 229, "(vB]", 216, 235)) / 10) === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Vx, 512447 + -31 * 8329);
function ju({ licensePath: x, bramble: o, wasmDirectoryPath: t }) {
  const [e, n] = ze(), r = e !== void (1038 * -2 + -9310 + 11386);
  he(() => {
    async function c() {
      function u(l, C, m, A, d) {
        return Oe(l - -155, C);
      }
      function g(l, C, m, A, d) {
        return Oe(d - -847, A);
      }
      function h(l, C, m, A, d) {
        return Oe(m - 796, d);
      }
      await o[h(1238, 1242, 1236, 1236, "#LNY")](t, x), n(o[h(1220, 1212, 1218, 1217, "q^QV") + g(-413, -408, -419, "Whm5", -421) + u(293, "[P5^") + "t"]());
    }
    c();
  }, [o, t, x, n]);
  function i(c, u, g, h, l) {
    return Oe(l - 663, c);
  }
  function a(c, u, g, h, l) {
    return Oe(l - -266, c);
  }
  const s = {};
  return s[a("ocgp", 169, 171, 169, 177) + a("3tS@", 185, 184, 176, 172)] = e, s[i("DvK9", 1084, 1101, 1098, 1088) + "sh"] = r, s;
}
var sc = ((x) => (x.DOCUMENT = "document-auto-capture:dev", x.FACE = "face-auto-capture:dev", x))(sc || {});
const lr = {};
lr.SIMD = "simd", lr.NO_SIMD = "no-simd";
const ya = lr, Ir = {};
Ir.Lower = "Lower", Ir.Higher = "Higher";
const fr = Ir, vx = {};
vx.VISIBLE = "VISIBLE", vx.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", vx.HIDDEN = "HIDDEN";
const pn = vx;
function Tx() {
  var x = ["hmk+ywbCECo0", "W7NdMSkpW6K6EY4rWRhcLNjHga", "kbestmk8BgldRZPHv8kk", "cG9humoLW6OYvW", "sItcOCopDCkGkCkZW6TEDxhdIW", "AM3dRKq2", "W4VdP8oaCCksWPG1W7VcRvFdLZXi", "WRBdShFdSr9mW6aJeSo1WOJdGSoQ", "hSkLbCowWQycCCkPquhdPmoZW7m", "W4RcPCk3jCoUW5bG", "jCoJE8ohW6S", "W5hcU8oPW6P0WPBdOSkIdSkNDG8/", "WR/dShddTX5kWRy/pSofWQJdJW", "FSofWP7dK0XADCkgW6xdV8kuA8om", "WO7dH8kRkqy", "bGe8bSklWO0JymkddCktda", "etpcUH9JWRmcW6TIWOJcTLzT", "W5z/WRiyWRJcSGRdVqGNW77cUW", "tCkicCoWW69eyxngvcCzWPa", "WP7cPmoWW43dMv8DWQC", "jCoMAmoCWQpcJ8o0lxOYWRBcPIy"];
  return Tx = function() {
    return x;
  }, Tx();
}
function et(x, o) {
  var t = Tx();
  return et = function(e, n) {
    e = e - (5140 + 3217 * -1 + -2 * 719);
    var r = t[e];
    if (et.ThadRD === void 0) {
      var i = function(g) {
        for (var h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", C = "", m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (var K = 0, D = l.length; K < D; K++)
          C += "%" + ("00" + l.charCodeAt(K).toString(16)).slice(-2);
        return decodeURIComponent(C);
      }, a = function(g, h) {
        var l = [], C = 0, m, A = "";
        g = i(g);
        var d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + h.charCodeAt(d % h.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (var v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      et.GGskXE = a, x = arguments, et.ThadRD = !0;
    }
    var s = t[-433 * 1 + 1235 * -2 + 2903], c = e + s, u = x[c];
    return u ? r = u : (et.RWzxHe === void 0 && (et.RWzxHe = !0), r = et.GGskXE(r, n), x[c] = r), r;
  }, et(x, o);
}
(function(x, o) {
  var t = x();
  function e(a, s, c, u, g) {
    return et(u - -296, s);
  }
  function n(a, s, c, u, g) {
    return et(c - -162, g);
  }
  function r(a, s, c, u, g) {
    return et(c - 241, u);
  }
  for (; ; )
    try {
      var i = parseInt(r(741, 752, 743, "fq(s", 751)) / 1 + -parseInt(r(740, 745, 739, "iWFu", 744)) / 2 + -parseInt(r(737, 722, 727, "KoSz", 720)) / 3 + -parseInt(r(725, 719, 728, "ay9[", 721)) / 4 * (parseInt(e(206, "V^k&", 194, 203, 198)) / 5) + parseInt(e(194, "gKiQ", 206, 198, 191)) / 6 + parseInt(r(721, 732, 729, "Lr]X", 730)) / 7 * (parseInt(n(348, 347, 341, 346, "SBPN")) / 8) + parseInt(r(736, 730, 738, "fq(s", 733)) / 9;
      if (i === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Tx, -4700 * 223 + 31546 * 35 + 645734);
function Mu({ crosshatch: x }) {
  function o(e, n, r, i, a) {
    return et(r - 623, n);
  }
  function t(e, n, r, i, a) {
    return et(i - -714, n);
  }
  return x != null && x[t(-218, "yOLV", -208, -214) + "id"] ? fr[o(1117, "sqRw", 1118) + "r"] : fr[t(-206, "1aJA", -205, -210)];
}
(function(x, o) {
  function t(i, a, s, c, u) {
    return Le(s - 340, u);
  }
  function e(i, a, s, c, u) {
    return Le(a - 761, s);
  }
  function n(i, a, s, c, u) {
    return Le(s - 511, i);
  }
  const r = x();
  for (; ; )
    try {
      if (-parseInt(n("WY3C", 800, 786, 786, 783)) / 1 + -parseInt(n("%vby", 784, 788, 779, 800)) / 2 * (-parseInt(t(618, 601, 616, 602, "1XRO")) / 3) + parseInt(n("L(AI", 775, 758, 762, 755)) / 4 * (parseInt(n("Y(LW", 752, 762, 771, 746)) / 5) + -parseInt(n("%vby", 786, 774, 772, 758)) / 6 + parseInt(e(1050, 1040, "%vby", 1038, 1024)) / 7 * (-parseInt(n("F)jF", 784, 773, 764, 775)) / 8) + -parseInt(n("nSW^", 795, 778, 774, 764)) / 9 + -parseInt(e(1055, 1039, "E(LQ", 1045, 1056)) / 10 * (-parseInt(e(1051, 1041, "wEt5", 1058, 1041)) / 11) === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ex, -149514 + 3 * 129677 + 103679);
function Ex() {
  const x = ["WQSlW5y", "W4ntW5RdP8ow", "W6uohSkSja", "lmoDdCk7afZdJgf8EG", "W5ilcSo/pa", "W4zZWPrBWOG", "W7DyWO8iW4hcNNqSu8kqWQBdVq", "lSk6ySkUn8kCmSoTgCkl", "n8oIW4XsyrNdSb88oq", "WPBcTwRcG8oRWQnAmW", "pCoKWQ4fBd3dIsC", "vCk0WRy3Fmo/WPdcQMtcKmkCnGW", "DmkgaGDyWQvKW7NdRuRdTmo2", "WQrijmoqWO7cJCk4W4X7W6vSAG", "WO1hBCoCvdOxeCoQhmovWOm", "F8ktkuPUFNf8wr0", "WP4sWPxcGSkgDComzmoYmvTkuq", "sXfoW4aav8ofgq", "r8oRe8o5WQW", "dSoWW6fHpa", "WOTCrSkSBfeirSkngmk0W5m", "WOHCtmkPyfHVEmkGj8kJW7iI", "j8o6xsNcGCoaWPxdUW", "e8k2iCo7WOS6WOhdUq", "CWbFW7rKCw4VWPmVmKC/", "v8owWPm", "jNO+bcK", "BmoSamo5bq", "WQHGW43cVmoYWP/cLvBdV8k9i8kZ", "n8oOW4LAe3FcTXSfd8oFgx4", "W4T1W742W58", "WPKrW6FdOSoVh8kdBW", "WPPremkuW7K", "mSo5WP1/WQJcKGKvW4GHWRdcH28", "avldHSokcG"];
  return Ex = function() {
    return x;
  }, Ex();
}
function Le(x, o) {
  const t = Ex();
  return Le = function(e, n) {
    e = e - (-4087 + 13 * -646 + 12732);
    let r = t[e];
    if (Le.FDbyaV === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, h) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + h.charCodeAt(d % h.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      Le.SRHAgB = u, x = arguments, Le.FDbyaV = !0;
    }
    const a = t[-1 * -359 + -502 + 13 * 11], s = e + a, c = x[s];
    return c ? r = c : (Le.dJWwgd === void 0 && (Le.dJWwgd = !0), r = Le.SRHAgB(r, n), x[s] = r), r;
  }, Le(x, o);
}
function Ju({ children: x, licensePath: o, bramble: t, wasmDirectoryPath: e }) {
  const n = {};
  n[l(-307, "MH#H", -299) + "le"] = t, n[l(-322, "emJN", -318) + l(-303, "1XRO", -309) + "h"] = o, n[s(542, 544, "]sdD") + c(520, "wEt5", 506) + c(509, "YUpQ", 523) + "th"] = e;
  const { sunfish: r, crosshatch: i } = ju(n), a = {};
  function s(C, m, A, d, v) {
    return Le(m - 280, A);
  }
  a[c(519, "p)9^", 513) + c(508, "U[g9", 526)] = i;
  function c(C, m, A, d, v) {
    return Le(A - 253, m);
  }
  function u(C, m, A, d, v) {
    return Le(m - 185, A);
  }
  const g = xt(() => ({ redfin: Mu(a), sunfish: r, crosshatch: i, bramble: t }), [r, i, t]), h = {};
  function l(C, m, A, d, v) {
    return Le(A - -570, m);
  }
  return h[l(-307, "z%RB", -302)] = g, h[c(511, "LHP@", 527) + l(-317, "i[r3", -311)] = x, O(Px[u(466, 451, "M!um") + u(454, 454, "RCBC")], h);
}
(function(x, o) {
  function t(s, c, u, g, h) {
    return dt(c - -587, h);
  }
  var e = x();
  function n(s, c, u, g, h) {
    return dt(u - -559, g);
  }
  function r(s, c, u, g, h) {
    return dt(s - -18, u);
  }
  function i(s, c, u, g, h) {
    return dt(h - 311, g);
  }
  for (; ; )
    try {
      var a = -parseInt(n(-371, -357, -359, "UjEB", -352)) / 1 * (-parseInt(i(527, 529, 531, "qhxF", 530)) / 2) + parseInt(n(-358, -357, -347, "o))n", -342)) / 3 * (-parseInt(t(-391, -382, -376, -382, "i5uV")) / 4) + parseInt(t(-387, -389, -379, -376, "RQXo")) / 5 * (-parseInt(r(189, 193, "fyWY", 191, 180)) / 6) + parseInt(n(-341, -343, -344, "P0nw", -350)) / 7 * (parseInt(n(-348, -346, -356, "Fm*Z", -348)) / 8) + parseInt(n(-348, -358, -357, "M%lI", -345)) / 9 + -parseInt(i(528, 520, 514, "]X&U", 525)) / 10 * (-parseInt(r(179, 182, "EODk", 185, 169)) / 11) + parseInt(i(531, 530, 519, "LEdz", 521)) / 12 * (parseInt(i(527, 510, 506, "x0PP", 517)) / 13);
      if (a === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Nx, 111608 + 247 * 173);
function dt(x, o) {
  var t = Nx();
  return dt = function(e, n) {
    e = e - (-9277 + 283 * -34 + 67 * 285);
    var r = t[e];
    if (dt.ckrvYc === void 0) {
      var i = function(g) {
        for (var h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", C = "", m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (var K = 0, D = l.length; K < D; K++)
          C += "%" + ("00" + l.charCodeAt(K).toString(16)).slice(-2);
        return decodeURIComponent(C);
      }, a = function(g, h) {
        var l = [], C = 0, m, A = "";
        g = i(g);
        var d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + h.charCodeAt(d % h.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (var v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      dt.OgXpJo = a, x = arguments, dt.ckrvYc = !0;
    }
    var s = t[-5443 * -1 + 5953 + 77 * -148], c = e + s, u = x[c];
    return u ? r = u : (dt.aUBSRY === void 0 && (dt.aUBSRY = !0), r = dt.OgXpJo(r, n), x[c] = r), r;
  }, dt(x, o);
}
function Nx() {
  var x = ["vCkGWPBcSIifW4hdLHG", "wWKpW6b+fuHxWQtcJmkv", "cJxdK1BcNmoitSkWia", "WOPiWQ7dKmoSW4BcPSktWRVdH8ot", "q23cNI/dPSoyWPuuaH7cSW", "hsnfeSkuWPZdRSoXpCoKkG", "WORcKaZcR1RcIdbtW6ZcU8kylG", "yXrRaSkEWR/dUSoMbttdNa", "W5VcOmoSW5GJWQFcS2nUD8kVhq", "cCkYcXpcU1FcRG", "W7/cNLr5W4VdKdFcMW", "zSoOWQGOW5ldL8k5WR4noHa", "WOJcKqNcPf/cH2n3W7NcQmknguS", "obZdUCkHW4ddJxXY", "rd0LjSkeW5xdTmkTdJ3cQMtcHq", "cZxcUuJcLmoEz8kx", "rwnIn1HfW5/cU8k/W4tcSSk9", "WQbeW6RcRmoVu8o0W455", "WQaFW4tdRmoxWO3dKSkUW6a", "qSoJW5BcTX0FqZm", "WRRdL0roaSkhl8k8W6RdVhq", "WQKbW69vW4efk8omr8odW4u", "W4FdNw4QbCkUW5K", "W7/dRrNdSCkNW4rY", "h0qQrrqLWRK5yJ3cQ04", "W7FdLX3cO8o1s8o7"];
  return Nx = function() {
    return x;
  }, Nx();
}
function _u({ analytics: x, crosshatch: o }) {
  return o !== void (2009 + -60 * -73 + 6389 * -1) && !o.isAnalyticsDisabled ? x : void (-7060 + -706 * -10);
}
function Qu({ analytics: x, appKey: o, redfin: t, crosshatch: e, bramble: n }) {
  const r = {};
  r.analytics = x, r.crosshatch = e;
  const i = _u(r);
  return he(() => {
    i && i.init(o);
  }, [i, o]), he(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), i && i.walleye(t, n.getCustomerName()));
  }, [i, n, e, t]), he(() => {
    if (i)
      return window.addEventListener("beforeunload", i.endSession), () => {
        i.endSession(), window.removeEventListener("beforeunload", i.endSession);
      };
  }, [i]), i;
}
function Uu({
  analytics: x,
  appKey: o,
  children: t
}) {
  const { redfin: e, crosshatch: n, bramble: r } = $r(), i = Qu({ analytics: x, redfin: e, appKey: o, crosshatch: n, bramble: r }), a = xt(
    () => ({
      analytics: i
    }),
    [i]
  );
  return /* @__PURE__ */ O(Zx.Provider, { value: a, children: t });
}
const zu = -206 + 4723 * 1 + -4517 + 0.4, qu = -6796 + -101 * 39 + 10735 + 0.16, $u = -5950 + 79 * -55 + 10295 * 1 + 0.2, el = -5107 * -1 + -59 * 73 + -800 + 0.05, tl = 8288 + 7 * 1193 + 1 * -16639, Cr = {};
Cr.min = -(-1 * 9170 + 1471 * -1 + 10642), Cr.max = 1;
const va = Cr, Wa = 5333 + 107 * -73 + -59 * -42, nl = 0 + 0.3, xl = 0 + 0.2, ol = 1243 * 7 + -10 * 724 + -3 * 487 + 0.85, rl = 2 * -244 + 3479 + -2961, il = 1138 * -8 + -6828 + -1 * -15941 + 0.8100000000000005, Wx = {};
Wx.minDuration = 1e3, Wx.maxDuration = 2500, Wx.minFrames = 10;
const No = Wx, hr = {};
hr.max = 100, hr.min = 10;
const Sa = hr, al = -2562 + -1094 * -3, sl = -36 * -139 + 7641 * -1 + 1 * 2837, cl = 6 * 549 + 3232 + 6 * -1087, cc = "AES-CBC", gc = "RSA-OAEP", gl = "SHA-256", dl = "image/jpeg", ul = -1385 + 7 * 199, ll = -4057 * -1 + 147 + -4164, Il = "SAM v1.39.3 for idcards", fl = "dot_embedded_bg.wasm";
let Q;
const Tt = new Array(4264 + -2 * -795 + -5726).fill(void 0);
Tt.push(void 0, null, !0, !1);
function pr(x) {
  return Tt[x];
}
let mn = Tt.length;
function Cl(x) {
  x < 3247 * 3 + -9093 + -516 || (Tt[x] = mn, mn = x);
}
function dc(x) {
  const o = pr(x);
  return Cl(x), o;
}
let Dt = -2960 + 862 * 3 + 374, un = null;
function Sx() {
  return (un === null || un.byteLength === 3051 + -199 * 29 + 32 * 85) && (un = new Uint8Array(Q.memory.buffer)), un;
}
const wx = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, hl = typeof wx.encodeInto == "function" ? function(x, o) {
  return wx.encodeInto(x, o);
} : function(x, o) {
  const t = wx.encode(x);
  o.set(t);
  const e = {};
  return e.read = x.length, e.written = t.length, e;
};
function Lx(x, o, t) {
  if (t === void 0) {
    const a = wx.encode(x), s = o(a.length, 4993 * -1 + -2416 + 7410) >>> 3 * -1899 + 4502 * -2 + 14701;
    return Sx().subarray(s, s + a.length).set(a), Dt = a.length, s;
  }
  let e = x.length, n = o(e, -1 * 4387 + -1268 + 5656) >>> 26 * 21 + -2219 * 1 + 1 * 1673;
  const r = Sx();
  let i = -3814 * -1 + 6367 + 1 * -10181;
  for (; i < e; i++) {
    const a = x.charCodeAt(i);
    if (a > 31 * 106 + -2267 * 1 + 1 * -892) break;
    r[n + i] = a;
  }
  if (i !== e) {
    i !== 4895 * 1 + -746 * 8 + 37 * 29 && (x = x.slice(i)), n = t(n, e, e = i + x.length * (-8423 + -6 * 1198 + 15614), 1 * -6 + -531 + 538) >>> 0;
    const a = Sx().subarray(n + i, n + e), s = hl(x, a);
    i += s.written, n = t(n, e, i, -2177 * -3 + -4614 * 1 + -1 * 1916) >>> 2148 * -3 + -9128 + 458 * 34;
  }
  return Dt = i, n;
}
function uc(x) {
  return x == null;
}
let ln = null;
function Jt() {
  return (ln === null || ln.byteLength === -9905 + 7 * 1415) && (ln = new Int32Array(Q.memory.buffer)), ln;
}
const mr = {};
mr.ignoreBOM = !0, mr.fatal = !0;
const lc = typeof TextDecoder < "u" ? new TextDecoder("utf-8", mr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && lc.decode();
function br(x, o) {
  return x = x >>> 0, lc.decode(Sx().subarray(x, x + o));
}
function Ar(x) {
  mn === Tt.length && Tt.push(Tt.length + (-2313 + 3 * -350 + -58 * -58));
  const o = mn;
  return mn = Tt[o], Tt[o] = x, o;
}
let In = null;
function Ic() {
  return (In === null || In.byteLength === -1 * 6829 + 9001 * 1 + -2172) && (In = new Uint32Array(Q.memory.buffer)), In;
}
function wa(x, o) {
  const t = o(x.length * 4, 4) >>> 0, e = Ic();
  for (let n = 1 * 5199 + -9205 + 2003 * 2; n < x.length; n++)
    e[t / (10 * 727 + 1 * 2027 + -9293) + n] = Ar(x[n]);
  return Dt = x.length, t;
}
function Ba(x, o) {
  x = x >>> 4371 * -1 + 3267 + 1104;
  const t = Ic(), e = t.subarray(x / (-4 * -2038 + 208 + -8356), x / (861 + 746 * 2 + -2349) + o), n = [];
  for (let r = -1 * -2084 + 3432 + -394 * 14; r < e.length; r++)
    n.push(dc(e[r]));
  return n;
}
function pl(x, o) {
  const t = Lx(x, Q.__wbindgen_malloc, Q.__wbindgen_realloc), e = Dt, n = Lx(o, Q.__wbindgen_malloc, Q.__wbindgen_realloc), r = Dt, i = Q.is_mobile_supported(t, e, n, r);
  return ei.__wrap(i);
}
const yr = {};
yr.register = () => {
}, yr.unregister = () => {
};
const Ga = typeof FinalizationRegistry > "u" ? yr : new FinalizationRegistry((x) => Q.__wbg_licensevalidationresult_free(x >>> 0));
class ei {
  static __wrap(o) {
    o = o >>> -6239 + 9938 * 1 + 9 * -411;
    const t = Object.create(ei.prototype);
    return t.__wbg_ptr = o, Ga.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = 11517 + 1047 * -11, Ga.unregister(this), o;
  }
  free() {
    const o = this.__destroy_into_raw();
    Q.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, n) {
    var r = uc(t) ? 0 : Lx(t, Q.__wbindgen_malloc, Q.__wbindgen_realloc), i = Dt;
    const a = wa(e, Q.__wbindgen_malloc), s = Dt, c = wa(n, Q.__wbindgen_malloc), u = Dt, g = Q.licensevalidationresult_new(o, r, i, a, s, c, u);
    return this.__wbg_ptr = g >>> 0, this;
  }
  get is_valid() {
    return Q.licensevalidationresult_is_valid(this.__wbg_ptr) !== 0;
  }
  get features_json() {
    try {
      const e = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = Jt()[e / (-27 * -251 + 2320 + -433 * 21) + (354 * -24 + -8831 + 1 * 17327)], t = Jt()[e / (89 * -31 + 97 * 35 + 632 * -1) + (-1 * -2612 + 308 * 5 + -4151)];
      let n;
      return o !== 5048 + 1 * -8644 + -3596 * -1 && (n = br(o, t).slice(), Q.__wbindgen_free(o, t * (1 * 2663 + -4 * -2186 + 1 * -11406), -15005 + -1 * -15006)), n;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(-443 * 17 + 5141 + 802 * 3);
    }
  }
  get errors() {
    try {
      const n = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_errors(n, this.__wbg_ptr);
      var o = Jt()[n / (-4713 + 68 * 10 + -1 * -4037) + (-2607 * 2 + -3681 * 1 + 8895)], t = Jt()[n / (4521 + 1 * -4517) + (50 + 4155 * 1 + -1051 * 4)], e = Ba(o, t).slice();
      return Q.__wbindgen_free(o, t * 4, -43 * 77 + -337 * -25 + -5110), e;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(2200 * 3 + -9528 + -16 * -184);
    }
  }
  get warnings() {
    try {
      const n = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var o = Jt()[n / (6269 + 2501 * -3 + -2 * -619) + (10366 + -5183 * 2)], t = Jt()[n / (8342 + -4 * -437 + -10086) + (139 * 13 + -322 * -11 + -5348)], e = Ba(o, t).slice();
      return Q.__wbindgen_free(o, t * (1 * 5941 + -141 * 3 + -5514), 1 * 2733 + 9 * -422 + 1069), e;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(9565 + 7417 * 1 + -499 * 34);
    }
  }
}
async function ml(x, o) {
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
function bl() {
  const x = {};
  return x.wbg = {}, x.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Ar(/* @__PURE__ */ new Date());
  }, x.wbg.__wbg_getTime_2bc4375165f02d15 = function(o) {
    return pr(o).getTime();
  }, x.wbg.__wbindgen_object_drop_ref = function(o) {
    dc(o);
  }, x.wbg.__wbindgen_string_get = function(o, t) {
    const e = pr(t), n = typeof e == "string" ? e : void 0;
    var r = uc(n) ? 4874 + -727 * -3 + -7055 : Lx(n, Q.__wbindgen_malloc, Q.__wbindgen_realloc), i = Dt;
    Jt()[o / (-5029 * -1 + -1872 + -1 * 3153) + (-4336 * -1 + -7963 * 1 + 3628)] = i, Jt()[o / (-1184 + -127 * 57 + 8427) + (-1 * 6911 + -755 + 1 * 7666)] = r;
  }, x.wbg.__wbindgen_string_new = function(o, t) {
    const e = br(o, t);
    return Ar(e);
  }, x.wbg.__wbindgen_throw = function(o, t) {
    throw new Error(br(o, t));
  }, x;
}
function Al(x, o) {
  return Q = x.exports, fc.__wbindgen_wasm_module = o, ln = null, In = null, un = null, Q;
}
async function fc(x) {
  if (Q !== void 0) return Q;
  typeof x > "u" && (x = new URL("dot_embedded_bg.wasm", import.meta.url));
  const o = bl();
  (typeof x == "string" || typeof Request == "function" && x instanceof Request || typeof URL == "function" && x instanceof URL) && (x = fetch(x));
  const { instance: t, module: e } = await ml(await x, o);
  return Al(t, e);
}
(function(x, o) {
  function t(s, c, u, g, h) {
    return Se(u - 732, g);
  }
  const e = x();
  function n(s, c, u, g, h) {
    return Se(u - -578, g);
  }
  function r(s, c, u, g, h) {
    return Se(g - 10, u);
  }
  function i(s, c, u, g, h) {
    return Se(u - 973, s);
  }
  function a(s, c, u, g, h) {
    return Se(s - -396, u);
  }
  for (; ; )
    try {
      if (-parseInt(a(-198, -189, "bu[W", -212, -218)) / 1 + -parseInt(r(199, 235, "SQbq", 226, 201)) / 2 * (parseInt(a(-188, -172, "zE(o", -192, -162)) / 3) + parseInt(n(-333, -354, -335, "JMV&", -352)) / 4 * (-parseInt(a(-197, -190, "%]v$", -204, -196)) / 5) + -parseInt(n(-349, -348, -333, "qI[F", -315)) / 6 + parseInt(i("n#L7", 1224, 1207, 1209, 1192)) / 7 + parseInt(t(940, 981, 965, "G8*l", 977)) / 8 + parseInt(n(-373, -379, -371, "5SIm", -361)) / 9 === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Dx, 18468 + -74477 * 4 + 636897);
function ax(x, o, t, e, n) {
  return Se(o - -863, x);
}
function sx(x, o, t, e, n) {
  return Se(e - 403, t);
}
function Se(x, o) {
  const t = Dx();
  return Se = function(e, n) {
    e = e - (-2335 * -4 + 7819 + -16964);
    let r = t[e];
    if (Se.hGkzqE === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, h) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + h.charCodeAt(d % h.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      Se.thijka = u, x = arguments, Se.hGkzqE = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? r = c : (Se.ZOjOlN === void 0 && (Se.ZOjOlN = !0), r = Se.thijka(r, n), x[s] = r), r;
  }, Se(x, o);
}
function Dx() {
  const x = ["FbLiW4bs", "w8kiCaVdJW", "fGyrWQaV", "uSkjtHRdJq", "iCkaWOxcJCoB", "h8o8W7xdSseltspcLJ8", "W7LnW4VcK8kN", "sqldNCkrW4u", "FSouWOtcHwa", "WRddNJ3dGCotagCGWOvB", "mMxcQSoYpW", "DICAgfq", "WPldNGpcOq", "CmojF8koW6VdLSo9j17dOCkiW5v8", "pctcMCokWRJcVIWWDCkmW7G", "xbpcHSoyW5FdPCkTWRldISoSywNdSW", "WO7cHSkdW4VdN8kfWQ0FuSozW5VcOuiV", "At7dPSkUBtG/W6eMhte", "jrbsWR1y", "W6O4WO8sCG", "iwTtBGW", "aCkMAMdcGG", "W5Ckamo2W6RdQ8oToCkrW5Wf", "W7PfW4VcK8kP", "Bd7dPSkNmGyRW7aCoW", "ySkEimoiW7K", "WORdSSo7W6ybqr8YoSorW6zqWOS", "j8kxW6vl", "w8keAX3dJG", "nqSShtK", "gmoSE8kuW6q", "W5voW77dV8oUWRbwWPO", "W55eu2ZdH8osrKZcHYbgWPu", "be3dVSoDW4xdONFdT8o5WOm", "hZCex3e", "W5riWOhcQ8kOW7mLWPDzqmo8WQqd", "W75fW5pcK8k8", "WRBcHSk8W7Dz", "W73dJ8owaCo+", "WQ7cV8ocW4pcRq", "mryyW53cHq", "WRVcNmkrxSkeb8kom8kOW50tW6tdMGm", "WQ8rWORdJCo0WOlcPCkvWPpdGSoy", "z3/dLCkwW6O", "iX42hX4", "WQ/cJSk7W7nX", "WRjZiX8y", "DmkeWO7cISoB", "WQ8aW73dIqa", "W6pdJ8ojbCon", "v8o7ufNcLhxcGaK", "f8klCbhdHG", "WOuDbtdcHW"];
  return Dx = function() {
    return x;
  }, Dx();
}
function Lo(x, o, t, e, n) {
  return Se(n - 232, e);
}
function ka(x, o, t, e, n) {
  return Se(t - -888, x);
}
function Ha(x, o, t, e, n) {
  return Se(t - 214, e);
}
var es;
class yl {
  constructor() {
    _(this, es, !1);
  }
  async [(es = ka("%jae", -625, -651) + Ha(423, 461, 440, ")r6E") + Lo(468, 464, 451, "nXAS", 453), ka("UAa$", -642, -657))](o = ax("Hc^A", -651)) {
    function t(a, s, c, u, g) {
      return ax(g, c - 605);
    }
    function e(a, s, c, u, g) {
      return sx(a - 119, s - 25, u, g - -1037);
    }
    function n(a, s, c, u, g) {
      return sx(a - 389, s - 382, c, u - -508);
    }
    function r(a, s, c, u, g) {
      return sx(a - 400, s - 284, c, g - 258);
    }
    function i(a, s, c, u, g) {
      return sx(a - 208, s - 447, g, c - -1301);
    }
    try {
      const a = o + "/" + fl;
      await fc(a), this[i(-672, -719, -694, -675, "5SIm") + r(898, 895, "w5dy", 851, 875) + r(866, 906, "JMV&", 902, 890)] = !0;
    } catch {
      this[n(119, 99, "xsfV", 106) + i(-683, -671, -695, -685, "xsfV") + n(140, 162, "aW8j", 142)] = !1, console[e(-404, -368, -386, "GciA", -388)](i(-659, -635, -658, -639, "SQbq") + i(-704, -708, -702, -709, "@bOm") + r(860, 859, "aW8j", 874, 883) + r(890, 885, "w4BN", 885, 900) + n(102, 132, "K]iB", 108) + t(-57, -26, -43, -41, "5SIm") + t(-22, -29, -20, -44, "Js5e") + t(-60, -45, -41, -40, "aW8j") + t(-18, -26, -39, -65, "mHn(") + e(-431, -410, -392, "aW8j", -414) + n(101, 82, "EP)v", 100) + e(-429, -419, -428, "0dx0", -428) + n(114, 142, "K]iB", 118) + n(93, 80, "hbVb", 105) + r(918, 915, "kroy", 909, 905) + r(864, 884, "n%k!", 897, 888) + i(-662, -662, -680, -688, "bu[W") + n(158, 118, "zE(o", 137) + "n.");
    }
  }
  [Lo(455, 440, 455, "oNh(", 432) + ax("@9Dc", -633) + Ha(396, 390, 416, "zE(o") + "ed"]() {
    function o(e, n, r, i, a) {
      return Lo(e - 33, n - 128, r - 493, i, r - -559);
    }
    function t(e, n, r, i, a) {
      return ax(a, n - 786);
    }
    return this[o(-153, -137, -132, "hbVb") + t(142, 148, 140, 146, "zE(o") + o(-107, -135, -118, "G8*l")];
  }
}
class Do extends Error {
  constructor() {
    super(...arguments);
    _(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
(function(x, o) {
  function t(s, c, u, g, h) {
    return ye(s - 287, h);
  }
  function e(s, c, u, g, h) {
    return ye(h - 755, c);
  }
  function n(s, c, u, g, h) {
    return ye(h - -149, s);
  }
  function r(s, c, u, g, h) {
    return ye(u - 996, c);
  }
  for (var i = x(); ; )
    try {
      var a = parseInt(t(399, 375, 402, 372, "5m^t")) / 1 + -parseInt(e(875, "9mMw", 881, 850, 875)) / 2 + -parseInt(e(936, ")erf", 943, 916, 919)) / 3 * (parseInt(e(883, "%hfM", 929, 889, 898)) / 4) + -parseInt(t(438, 465, 435, 469, ")erf")) / 5 * (parseInt(r(1083, "U$dT", 1102, 1073, 1104)) / 6) + parseInt(t(422, 391, 410, 453, "gb04")) / 7 + -parseInt(r(1155, "*wq!", 1133, 1103, 1118)) / 8 * (-parseInt(e(885, "pTj9", 885, 877, 863)) / 9) + -parseInt(n("2nAa", -13, -17, -12, 7)) / 10 * (-parseInt(t(433, 441, 422, 429, "uwF0")) / 11);
      if (a === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Fx, -92201 + -314409 * -2 + -159 * -237);
function ye(x, o) {
  var t = Fx();
  return ye = function(e, n) {
    e = e - (-829 + -5 * -187);
    var r = t[e];
    if (ye.sBQtSW === void 0) {
      var i = function(g) {
        for (var h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", C = "", m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (var K = 0, D = l.length; K < D; K++)
          C += "%" + ("00" + l.charCodeAt(K).toString(16)).slice(-2);
        return decodeURIComponent(C);
      }, a = function(g, h) {
        var l = [], C = 0, m, A = "";
        g = i(g);
        var d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + h.charCodeAt(d % h.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (var v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      ye.LQPRNR = a, x = arguments, ye.sBQtSW = !0;
    }
    var s = t[151 * 38 + -2061 * -4 + -13982 * 1], c = e + s, u = x[c];
    return u ? r = u : (ye.RuMnmO === void 0 && (ye.RuMnmO = !0), r = ye.LQPRNR(r, n), x[c] = r), r;
  }, ye(x, o);
}
function vl(x, o, t, e, n) {
  return ye(n - -858, o);
}
function cx(x, o, t, e, n) {
  return ye(n - 600, x);
}
function an(x, o, t, e, n) {
  return ye(x - -787, t);
}
function Rt(x, o, t, e, n) {
  return ye(t - -223, n);
}
var T0;
class Oa {
  constructor(o) {
    ce(this, T0);
    this[n(-579, -594, -605, -587, "1!c7") + t(-835, -842, "Q^&&")] = o;
    function t(r, i, a, s, c) {
      return ye(i - -963, a);
    }
    function e(r, i, a, s, c) {
      return ye(a - 697, i);
    }
    function n(r, i, a, s, c) {
      return ye(a - -765, c);
    }
    try {
      ae(this, T0, o[t(-783, -804, "tTGJ", -807, -790) + n(-619, -601, -599, -597, "2nAa") + e(865, "cnK&", 842, 835, 816)] && JSON[t(-867, -840, "LQ*z", -814, -862)](o[t(-815, -837, "%qDD", -862, -828) + e(816, "olBu", 824, 817, 836) + n(-602, -597, -600, -616, "5m^t")]));
    } catch (r) {
      console[e(848, "X1rw", 829)](r);
    }
  }
  get [Rt(-97, -105, -95, -65, "olBu") + "id"]() {
    function o(e, n, r, i, a) {
      return Rt(e - 259, n - 135, e - -731, i - 326, n);
    }
    function t(e, n, r, i, a) {
      return Rt(e - 347, n - 380, r - 56, i - 180, e);
    }
    return this[t("JUkm", -19, -25, -41) + o(-797, "olBu", -787, -793)][t("*wq!", -24, -14, -10) + t("X1rw", -34, -51, -46)];
  }
  get [Rt(-100, -99, -98, -125, "qs99") + "s"]() {
    function o(e, n, r, i, a) {
      return Rt(e - 63, n - 455, a - 369, i - 388, e);
    }
    function t(e, n, r, i, a) {
      return Rt(e - 432, n - 265, n - -611, i - 26, e);
    }
    return this[t("[u%8", -700, -724, -711) + o("jq@G", 247, 305, 301, 276)][t("y#hP", -716, -700, -713) + "s"];
  }
  get [an(-624, -617, "qs99") + an(-643, -614, "JUkm")]() {
    function o(e, n, r, i, a) {
      return Rt(e - 465, n - 411, n - 89, i - 436, i);
    }
    function t(e, n, r, i, a) {
      return cx(r, n - 438, r - 374, i - 314, n - 150);
    }
    return this[o(41, 24, 54, "2nAa") + t(876, 900, "zB2Y", 905)][o(-1, 2, 0, "zB2Y") + o(-47, -19, 8, "$Gg3")];
  }
  get [cx("1!c7", 721, 749, 732, 722) + "b"]() {
    return j(this, T0);
  }
  get [vl(-684, "%hfM", -697, -688, -709) + an(-677, -652, "tTGJ") + cx("gb04", 753, 737, 732, 762) + Rt(-93, -117, -90, -64, "jq@G")]() {
    var r, i;
    function o(a, s, c, u, g) {
      return Rt(a - 88, s - 482, g - 764, u - 337, c);
    }
    function t(a, s, c, u, g) {
      return an(a - -154, s - 148, u);
    }
    function e(a, s, c, u, g) {
      return an(c - 1115, s - 30, u);
    }
    function n(a, s, c, u, g) {
      return cx(a, s - 323, c - 145, u - 246, u - -1299);
    }
    return !!((i = (r = j(this, T0)) == null ? void 0 : r[o(707, 665, "#61Y", 665, 679) + o(686, 683, "SHJd", 684, 688)]) != null && i[e(446, 459, 437, "gH5r") + t(-786, -766, -785, "8gYg") + e(472, 451, 480, "gH5r") + n("&rQ&", -577, -573, -558) + o(651, 701, "gb04", 684, 681) + t(-824, -840, -796, "ny%s") + e(422, 466, 452, "^vQB") + "d"]);
  }
}
T0 = new WeakMap();
function Fx() {
  var x = ["WOaDr1ZcHW", "WPSlyMlcGq", "WPeiWOZcUfpcIKzUpwKVWQvA", "WPlcI8oVkZi", "lgBcOmkYwCkjWPzcgGC", "t050Da", "WPJcHSo+la", "W7TdW4JcQW4", "BKFcU8oJlLJdMSoWyCoNdmoeW5S", "W7ykENnk", "g8otl8ousCk5A8k3WOi+ASoMxW", "WPJdU8omrfK", "WQOgW6ZcGbH5W78q", "pqxdPSkHBa", "W5ntW5hdPJC", "ruhdKb7dGq", "E8oupZ4SbfBdLq", "sftdJa", "WRVdJCoZ", "iJZcVINcSZmflCo/W4O", "xCkyWPy", "WPBcGLRcR8osmNzYWPmEWQuiaq", "kSktkdiC", "W6KkFh5l", "W7JcHmohk3adWQG", "WQfPWRxcICoT", "qmkwqCkwgG", "hmkXDmkokCoZja", "b8kpW6JdJCoh", "bq9wAeBcJM7dJxNcMW", "WPOzqgdcHq", "ue4ik20", "fGH3W6NdIW", "WQhcG0qDW6W", "DCoyxM9ll2tdGW7cKYa", "kZhdOmkGEq", "WOBdJSk7tXu", "W7VdQmkADHqDWPu+qSomWQq", "WR0brW", "qvKub3q", "W7JcGspcPwhdVrTEW4WdW6ZcVhC", "kwtcQmk1m8oCW4zdhq/dRmovWQS", "W7e1h1RcN8kkpCkn", "WRjIWQFcHmoA", "hbrIW7tdNq", "W7ddIb1xWQNcOSojWOXrvSkHtG", "W7Xxh8oiyu/dRXCwW43dSSki", "WPehW6tcHgzgWPvU", "W7e0ztBdImoFv8kpWPtcRYtcP8oH", "gZbX", "sKL2", "bH5MdmkO", "C8okgW4u", "W57dP1xdVmoJxSoUc8oAda", "qSkGB8kwaej8jCkqWPVdMCoVW5O", "W7uAxmobW7u", "WQBcNL85W7O", "mghcNCkutq", "t2RcPZ3dVW", "WPtdNCk7tG4", "W4XMDmoBW6m"];
  return Fx = function() {
    return x;
  }, Fx();
}
function ve(x, o) {
  const t = Yx();
  return ve = function(e, n) {
    e = e - (4767 + -1997 * 1 + -2299);
    let r = t[e];
    if (ve.MAYOqs === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, h) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + h.charCodeAt(d % h.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      ve.fxkocC = u, x = arguments, ve.MAYOqs = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? r = c : (ve.YIBvza === void 0 && (ve.YIBvza = !0), r = ve.fxkocC(r, n), x[s] = r), r;
  }, ve(x, o);
}
function Je(x, o, t, e, n) {
  return ve(e - -564, x);
}
(function(x, o) {
  function t(s, c, u, g, h) {
    return ve(s - 929, c);
  }
  function e(s, c, u, g, h) {
    return ve(g - -96, u);
  }
  const n = x();
  function r(s, c, u, g, h) {
    return ve(c - 363, u);
  }
  function i(s, c, u, g, h) {
    return ve(u - -793, h);
  }
  function a(s, c, u, g, h) {
    return ve(h - -456, g);
  }
  for (; ; )
    try {
      if (parseInt(e(432, 520, "LTX5", 516, 400)) / 1 + parseInt(e(507, 293, "[xre", 405, 351)) / 2 + -parseInt(t(1530, "lvKV", 1497, 1565, 1588)) / 3 + parseInt(t(1617, "9b7V", 1545, 1638, 1649)) / 4 + -parseInt(t(1527, "]VXJ", 1636, 1479, 1519)) / 5 * (parseInt(i(-50, -97, -141, -217, "A#zB")) / 6) + parseInt(a(31, 253, 92, "Yt[z", 140)) / 7 * (-parseInt(r(935, 994, "t#%V", 1108, 1006)) / 8) + parseInt(r(849, 858, "X5PP", 953, 901)) / 9 === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Yx, -2 * -450028 + -3 * 411088 + 479 * 2194);
function Yx() {
  const x = ["BSkiWOGd", "W5HtWRBdHve", "ngGvWOGW", "b8o5xs9O", "rvtcJqBdJq", "rtFdHv9O", "wmkmmbdcMa", "ymkdWPOOwW", "DXRdTmoFtW", "E0hcLt4fzSk+WPpdKSo9DcaD", "D3JdNfHV", "F3JdNrzI", "t8kKWQC+tq", "uhBcPCkRW44", "uCo9e0/cMq", "rbBdN0hcIW", "CaXozKK", "W5ZdJmkOWORdHG", "bL3cVCkg", "cGpcGrSW", "WQFdJmknaWq", "nmkpiCkAW4K", "EGPfE18", "lWhdKgvp", "l0ddO0xcPq", "cqPDAK0", "rH7dJW", "dMddRKNcVW", "wLJcV20NWQ16W47cVuldUv/cGbu", "sGJdKNyg", "p0/cGse2", "uCknja", "pbldJMnz", "W402CWVdVa", "c8kQzcfV", "FLpdUKXP", "rXhcNCovWRi", "D8kuWOCcqa", "aSogW7fWW5W", "amoTEq", "saZdPYLX", "WPi5W7Hi", "cL/cOa", "WQKnW4xcKSop", "CmkOu8oCbG", "cSkimIZdJ2WY", "DWJdKeea", "icBcNWa4vXT5W4ZcI8onWPi", "tHBcJCovW7W", "uCklibddLG", "xCk9pxWRWOlcT8oTC8ozW58DW7a", "dmoVBIP+", "aGzks0W", "yCkdWPOpxa", "n0ZcGW", "CmkhWPWcxq", "WQenW4tdNmoc", "a8kFa8klW4a", "qSoSW5zqaa", "lrhdHbZcHa", "aSoaW7vqW4a", "bt3dIfRdP8olW4ZcVSoOBXOT", "BWFdU8oFrq", "deVcL8kTW6O", "vCo7a17cMq", "y3ldMMLH", "lmoKv8k/W4a", "WQpdJ8kB", "cCkMW4OFW6G", "W5lcIYjwWRS", "W5NdNmkVWP3dGq", "WRVdQSoQt8kT", "EahdUmojuG", "W5iKsapdQW", "m8kfmmkDW5S", "yq/dLvlcTG", "hmovACkOW6u", "WPn6WR3dR8k3", "ASkVWOafqa", "DHTsEL4", "WQrajMbfW6i/W5G0WP7cT8k3fq", "W5jDWRtdMfK", "lSoYua", "twhcPCkXea", "W7WwCJWW", "W4KGvG", "oCkuoSkaW5S", "WQFdKmkmcvy", "FbNcJmoEWRu", "umo1guq", "gGxdUG", "lmo0sSk4W4O", "tfGfAYC9EW", "W6VcMCk3WPFdIG", "W64tW4NcSmki", "kwe1", "h03dISkbW6OgndqkWRNcLSob", "rSoKW4fwbG", "rrpdH2ar", "jbZdLIPu", "rH7cK8kLW7C", "Ad9/WO0gamkMlu0", "hH1aqfy", "fSoOCSkZW4C", "qSkuWPWdrG", "sGJdI3ym", "W53cJYjXWRW", "tSoWe2VcRq", "zCo2hKdcOa", "W4u3uq", "tSoOW4yD", "nwFdV8o0WP7cTmonvSoHeqlcJW", "WOrqjJ92", "W59BWQ7dHuO", "A8khWPGzqq", "W58RycFdHa", "irpdKW", "dCoVzd1+", "WPCKW7nzWPq", "CMxdHKv4", "W7KADJyp", "ASkqWPmovW", "wX3dN2hcPq", "daPnsKC", "W4faWRpdGL8", "zCklWOyyqa", "zxtcRwpdRa", "WPKVxIldIa", "rbddN0xcKq", "mmoPg0e9", "W6VdVSoSvmk3", "W545sZldJq", "gum/WQCF", "W5zfWPNdQvO", "mKZcIJCH", "W5n4ut7dKq", "F2FdNc/cNG", "ySoqzmofWP/dIIGhbSknW4/dNa", "DrRdO8otqa", "iX3dGX3cJW", "WOtdL8kjcG", "pwe1WQmP", "W5euwKldIG", "vCkdnXBdKa", "d8o+BWjY", "xSoOW5Ph", "WPNdVmkl", "F8k1w8oQbW", "daxdVbLY", "W5a9xIxdKa", "nWNdReNcQa", "WObymtLW", "kqhdJxLo", "WQtdJCklcea", "mSkhiCkqW4a", "pCk1dmk7W6C", "lSotE8kYya", "r8knW5W5AW", "WOPEibL/", "AdLWW5r4u8oToe9JWPdcQYe", "wgBcLr8", "W74Eya", "ydNcVCkhW4a", "jJZdJu9X", "W699oa", "yCkjWPWPvq", "W4e3vGxdVq", "qXpdMNWq", "eGRdGsJdRSkxzCkzDG", "W7iTW57cPq", "DdFcU8kXW4G", "DM/cT8k4Fa", "W40MqqtdVa", "EGHmFfy", "bSoRFI1Z", "vmknlq", "j3tcJZW7", "W7dcKmojvXWQWO7cNSkEg3HOWPPL", "p8oTg248", "rWBdOt96", "W5CXsWFdQG", "WPaKW6LOWOS", "ASo1aKtcNG", "W4NcO8ozWOWTmeTPlmoNWQBcTmo2", "WORdN8kpW5vW", "AdNcRG", "cGbDA08", "q07cSqdcPW", "iaVdRbji", "m8kUW5qj", "e07dJ8kgW6ShpdKCWRNcK8os", "WP57WR3dVSo5", "iaajAM0", "dmoviCktsW", "hf3cPSkgW7i", "BSocW7ytja", "WQJdSmkKDGm", "qKNcLJddKW", "wSo/W4TDha", "m0lcHbW", "WPGIW75iWOG", "aSkeo8kzW78", "WQRdG8kkbuW", "iGzks0W", "pKagxsi", "iCo2vW", "zMNcJWBdSq", "zNBdM1G", "WOq5W7jBWO8", "AbNcPSkhW6e", "fwfNWQih", "sSkdmrVdKq", "bmoiiM4E", "WOVcGmoUW4BcKdldKLFcTmkLWQ0WWRa", "W6rXkmkSqq", "EWHuDKq", "vCkdWP0zwa", "W6JdMmkOWPpcIq", "pvhcGGeG", "a8oonmkfxa", "vmo6fKu", "vSkOtSoabW", "tCkqlapdKq", "cKJcSCkKW7i", "W7WqCd0s", "tvtcMIldLa", "habB", "W4y5tsldGa", "uuNcKc3dLa", "WRhcP8oOW4G", "m0BcNW", "WP3dV8kDW501", "W61NoCobwa"];
  return Yx = function() {
    return x;
  }, Yx();
}
function st(x, o, t, e, n) {
  return ve(x - -519, n);
}
function ct(x, o, t, e, n) {
  return ve(x - -240, n);
}
function _e(x, o, t, e, n) {
  return ve(e - -737, n);
}
function t0(x, o, t, e, n) {
  return ve(t - 374, e);
}
var ts, ns;
class Wl {
  constructor(o) {
    _(this, ns);
    _(this, ts);
    function t(e, n, r, i, a) {
      return ve(r - -952, n);
    }
    this[t(-436, "G6vS", -453) + t(-301, "hAAM", -342) + "d"] = o;
  }
  async [(ns = ct(371, 300, 355, 399, "LJ*P") + "se", ts = _e(-41, -182, -244, -142, "fNsY") + ct(442, 520, 446, 418, "mR%K"), st(-41, 28, -38, -23, "LTX5"))](o = _e(-88, -102, 51, -59, "mR%K"), t = _e(-222, -224, -339, -240, "raza") + ct(310, 218, 310, 224, "spSP") + "ic") {
    function e(a, s, c, u, g) {
      return st(u - 665, s - 497, c - 480, u - 381, g);
    }
    function n(a, s, c, u, g) {
      return t0(a - 475, s - 383, s - 13, u);
    }
    function r(a, s, c, u, g) {
      return st(g - 806, s - 238, c - 419, u - 41, u);
    }
    await Promise[i(596, "118#", 542, 651) + n(931, 1e3, 1064, "!5L!")]([this[n(750, 867, 781, "[HP]") + e(893, 796, 868, 811, "Ng30") + "d"][e(676, 687, 681, 653, "2V@s")](o), this[e(784, 733, 858, 780, "5YOx") + i(581, "9b7V", 586, 693) + "e"](t)]);
    function i(a, s, c, u, g) {
      return ct(c - 201, s - 283, c - 491, u - 199, s);
    }
    this[e(640, 678, 807, 729, "*Jgm") + r(898, 936, 1056, "lvKV", 982) + i(596, "Xh7h", 603, 597)]();
  }
  async [ct(364, 429, 292, 334, "XVvp") + Je("$Ne$", -66, 105, 11) + "se"](o) {
    var a;
    function t(s, c, u, g, h) {
      return _e(s - 438, c - 166, u - 234, c - 450, h);
    }
    function e(s, c, u, g, h) {
      return t0(s - 65, c - 320, h - -56, u);
    }
    function n(s, c, u, g, h) {
      return t0(s - 192, c - 267, g - 209, h);
    }
    function r(s, c, u, g, h) {
      return st(g - 238, c - 317, u - 304, g - 53, u);
    }
    function i(s, c, u, g, h) {
      return _e(s - 78, c - 88, u - 435, g - -148, h);
    }
    try {
      if (i(-257, -311, -238, -212, "C9aw") !== i(-130, -333, -294, -227, "%hGF")) _0x502bc5[i(-390, -351, -264, -303, "Yt[z")]();
      else {
        const s = await fetch(o);
        if (!s.ok) {
          if (e(911, 799, "*Jgm", 905, 799) === i(-245, -463, -389, -358, "[HP]")) throw new Error(t(117, 226, 334, 305, ")lxx") + t(115, 203, 182, 244, "zva*") + e(1064, 952, "mR%K", 1099, 1004) + r(342, 480, "3^5P", 400, 467) + "d.");
          if (!this[t(321, 313, 218, 335, "Yt[z") + "se"]) throw new _0x26593a(t(258, 241, 236, 274, "A#zB") + r(391, 271, "[HP]", 283, 315) + i(-285, -350, -338, -314, "X5PP") + i(-344, -398, -383, -414, "X5PP") + ".");
          if (!this[r(300, 229, "[SQI", 274, 204) + r(475, 437, "C]EN", 393, 462) + "d"][n(1062, 1280, 1125, 1167, "zva*") + n(1165, 1158, 1187, 1212, "XVvp") + r(330, 294, "QcGv", 271, 301) + "ed"]()) throw new _0x239889(i(-273, -377, -434, -350, "SU]4") + r(222, 170, "]VXJ", 281, 198) + e(952, 802, "9b7V", 914, 890) + i(-305, -308, -156, -209, "Ng30") + ".");
          this[t(342, 250, 281, 139, "13Z[") + t(101, 205, 265, 218, "lvKV")] = new _0x2d4d57(_0x95f3f(this[n(1205, 1345, 1285, 1285, "[Q#&") + "se"], this[i(-167, -214, -327, -265, "o9q&") + n(1180, 1062, 1116, 1100, "118#")]())), this[t(307, 229, 219, 288, ")lxx") + e(806, 755, "i6oE", 823, 840) + "s"](this[i(-278, -264, -144, -236, "OwJF") + i(-204, -185, -131, -222, "[Q#&")][e(755, 715, "zva*", 811, 802) + "s"]), this[t(350, 259, 299, 332, "[SQI") + t(267, 213, 265, 165, "%hGF") + i(-248, -398, -205, -308, "C9aw")](this[i(-225, -305, -308, -213, "Ng30") + e(702, 775, "$#jQ", 919, 814)][n(1094, 1270, 1135, 1189, "XVvp") + r(404, 363, "lvKV", 309, 255)]);
        }
        this[i(-442, -329, -375, -326, "!5L!") + "se"] = await s[i(-251, -173, -208, -189, ")lxx")]();
      }
    } catch (s) {
      if (e(1095, 1078, "QcGv", 988, 1002) === n(1263, 1292, 1227, 1197, "EG(s")) this[n(1069, 1245, 1261, 1148, "%hGF") + "se"] = void (1858 * 4 + -59 * -72 + -5840 * 2), console[n(1312, 1124, 1251, 1221, "X5PP")](s);
      else {
        const c = _0x3c9f5c[t(95, 201, 311, 259, "[HP]")](this[t(135, 231, 237, 195, "G6vS") + "se"]);
        return (a = c == null ? void 0 : c[e(1033, 883, "G6vS", 1028, 987) + t(409, 306, 383, 289, "EG(s")]) == null ? void 0 : a[e(964, 901, "SU]4", 974, 886) + i(-138, -340, -217, -249, "zva*")];
      }
    }
  }
  async [_e(-117, -176, -196, -102, "t#%V") + Je("t#%V", 174, 95, 107) + "e"](o) {
    this[i(-65, "!5L!", -135, -42) + i(-145, "9b7V", -299, -193)] = void (-9608 * 1 + 1 * -8543 + 7 * 2593);
    function t(a, s, c, u, g) {
      return st(u - 849, s - 187, c - 256, u - 143, a);
    }
    function e(a, s, c, u, g) {
      return st(a - -288, s - 331, c - 69, u - 151, c);
    }
    function n(a, s, c, u, g) {
      return Je(c, s - 446, c - 454, g - 1479);
    }
    if (!o)
      if (r("9b7V", 839, 746, 729) !== t("]VXJ", 1023, 919, 916)) {
        console[i(-46, "dz2^", -15, -118)](t("Ng30", 874, 856, 805) + t("118#", 910, 956, 900) + t("QAhr", 867, 831, 839) + i(-73, "G6vS", -196, -139) + r("r96N", 861, 933, 947)), this[i(-20, "BqL0", -195, -78) + "se"] = void (4114 + -4580 * -2 + -13274);
        return;
      } else {
        _0x429127[r("XVvp", 786, 797, 807)](e(-120, -157, "LTX5", -234) + t("$Ne$", 1066, 1116, 1031) + r("BqL0", 865, 741, 855) + r("Yt[z", 707, 699, 796) + e(-146, -159, ")lxx", -166)), this[n(1569, 1581, "hAAM", 1670, 1605) + "se"] = void (4488 + 4 * -148 + -3896);
        return;
      }
    function r(a, s, c, u, g) {
      return _e(a - 386, s - 379, c - 113, u - 993, a);
    }
    function i(a, s, c, u, g) {
      return t0(a - 183, s - 430, u - -1039, s);
    }
    await this[r("SU]4", 811, 920, 877) + e(-286, -232, "C]EN", -300) + "se"](o);
  }
  [st(103, 214, 132, 214, "3^5P") + _e(-119, -255, -258, -198, "fNsY") + "s"](o) {
    function t(e, n, r, i, a) {
      return st(e - 1381, n - 136, r - 243, i - 118, n);
    }
    o[t(1338, "[Q#&", 1425, 1436) + "ch"]((e) => console[t(1387, "]VXJ", 1352, 1479)](e));
  }
  [st(134, 21, 33, 20, "C]EN") + st(174, 259, 183, 61, "&Gyh") + Je("t#%V", -171, 25, -85)](o) {
    function t(n, r, i, a, s) {
      return Je(i, r - 481, i - 73, a - 1054);
    }
    function e(n, r, i, a, s) {
      return Je(n, r - 140, i - 449, r - -142);
    }
    o[e("XVvp", -223, -179) + "ch"]((n) => console[t(1021, 974, "%hGF", 1028)](n));
  }
  [_e(-208, -271, -75, -161, "C]EN") + Je("EG(s", 41, 2, 5)]() {
    function o(n, r, i, a, s) {
      return t0(n - 463, r - 160, r - -434, a);
    }
    function t(n, r, i, a, s) {
      return _e(n - 236, r - 70, i - 298, s - 804, a);
    }
    function e(n, r, i, a, s) {
      return _e(n - 446, r - 321, i - 113, n - 652, a);
    }
    return window[t(699, 535, 596, "[SQI", 610) + t(542, 481, 516, "Yt[z", 560)][o(653, 568, 647, "QAhr") + e(533, 416, 608, "X5PP")];
  }
  [t0(935, 1012, 998, "zva*") + Je("EG(s", 24, -12, -23) + st(149, 175, 105, 257, "lvKV")]() {
    function o(i, a, s, c, u) {
      return Je(s, a - 136, s - 267, c - -298);
    }
    function t(i, a, s, c, u) {
      return t0(i - 228, a - 468, i - 205, u);
    }
    function e(i, a, s, c, u) {
      return Je(c, a - 141, s - 240, a - 1279);
    }
    function n(i, a, s, c, u) {
      return _e(i - 419, a - 6, s - 204, i - 1283, c);
    }
    function r(i, a, s, c, u) {
      return ct(u - 809, a - 224, s - 111, c - 434, a);
    }
    try {
      if (n(1040, 951, 1133, "118#", 1046) !== n(1099, 1075, 1019, "A#zB", 1198)) {
        if (!this[r(1259, "C9aw", 1237, 1273, 1248) + "se"])
          throw e(1315, 1323, 1250, "9b7V", 1377) !== n(1200, 1259, 1309, "Xh7h", 1089) ? new _0xcbb49c(t(1256, 1284, 1328, 1222, "[SQI") + t(1152, 1212, 1041, 1221, "Fpob") + r(1183, "lvKV", 1112, 1192, 1154) + t(1170, 1139, 1226, 1104, "raza") + "d.") : new Do(o(-497, -375, "13Z[", -388, -407) + e(1329, 1359, 1465, "SU]4", 1458) + o(-305, -290, "[xre", -313, -402) + n(1153, 1233, 1253, "Uf3[", 1097) + ".");
        if (!this[o(-242, -79, "raza", -163, -83) + o(-241, -325, "lvKV", -260, -150) + "d"][r(1029, "lvKV", 1037, 1038, 1123) + o(-397, -354, "$Ne$", -284, -386) + r(1167, "Fpob", 960, 1097, 1060) + "ed"]()) {
          if (o(-200, -245, "[HP]", -211, -232) !== t(1230, 1178, 1161, 1261, "[HP]")) return _0x14eec9[o(-196, -389, "C9aw", -296, -223) + r(1208, "118#", 1287, 1286, 1174)][n(1161, 1061, 1089, "%hGF", 1131) + r(1168, "[xre", 1245, 1312, 1266)];
          throw new Do(n(1035, 1130, 1100, "5YOx", 1147) + e(1466, 1365, 1352, "*Jgm", 1307) + r(1134, "QcGv", 1132, 1199, 1233) + t(1090, 1059, 1134, 1131, "13Z[") + ".");
        }
        this[r(1192, "118#", 1216, 1159, 1105) + t(1273, 1169, 1334, 1257, "Yt[z")] = new Oa(pl(this[t(1121, 1066, 1087, 1166, "t#%V") + "se"], this[n(1104, 1067, 1187, "XVvp", 1220) + e(1260, 1355, 1274, "%hGF", 1385)]())), this[t(1254, 1251, 1332, 1185, "QcGv") + t(1234, 1166, 1234, 1329, "XVvp") + "s"](this[r(1355, "]VXJ", 1317, 1177, 1239) + e(1235, 1235, 1134, "X5PP", 1198)][o(-296, -316, "Fpob", -232, -302) + "s"]), this[r(1149, "XVvp", 1176, 1136, 1157) + n(1185, 1098, 1286, "BqL0", 1113) + o(-255, -277, "Xh7h", -339, -436)](this[t(1216, 1290, 1168, 1152, "9b7V") + r(1323, "o9q&", 1341, 1250, 1226)][r(1097, "EG(s", 1019, 1192, 1081) + r(1323, "hAAM", 1223, 1309, 1236)]);
      } else {
        _0x1086eb instanceof _0x25383b && _0x3b5594[r(1243, "fNsY", 1259, 1217, 1267) + e(1346, 1361, 1389, "A#zB", 1383)](_0x4fa8fd);
        return;
      }
    } catch (i) {
      if (r(1082, "$#jQ", 1214, 1049, 1099) === o(-167, -350, "Xh7h", -235)) {
        i instanceof Do ? o(-252, -445, "raza", -356) !== t(1205, 1229, 1155, 1218, "C9aw") ? i[r(1055, "[HP]", 1135, 975, 1072)]() : this[n(1050, 1124, 1070, "C]EN") + o(-357, -160, "lvKV", -260) + "d"] = _0x29afc4 : i instanceof Error && (e(1292, 1220, 1133, "LTX5") !== r(1102, "2V@s", 1099, 1189, 1188) ? console[t(1153, 1137, 1208, 1169, "*Jgm")](i) : (this[r(1075, "C]EN", 1269, 1228, 1172) + "se"] = void (-5167 * -1 + -163 + -5004), _0x585604[n(1030, 968, 1122, "zva*")](_0x804a43)));
        const a = {};
        a[t(1245, 1246, 1134, 1141, "mR%K") + n(1028, 916, 940, "spSP")] = !1, a[o(-301, -473, "OwJF", -377) + "s"] = [], a[r(1173, "Yt[z", 1190, 1183, 1098) + e(1246, 1305, 1202, "lvKV")] = [], a[e(1421, 1415, 1334, "mR%K") + t(1195, 1109, 1214, 1213, "]VXJ") + r(1190, "mR%K", 1114, 1201, 1229)] = void (4043 * 2 + 1350 + -9436), a[o(-268, -163, "G6vS", -270)] = function() {
        }, this[n(1249, 1295, 1281, "*Jgm") + t(1188, 1250, 1278, 1279, ")lxx")] = new Oa(a);
      } else return;
    }
  }
  [Je("$#jQ", 79, 147, 116) + Je("Fpob", -16, 59, 3) + Je("XVvp", -30, -12, -30) + "t"]() {
    function o(e, n, r, i, a) {
      return ct(i - 925, n - 347, r - 106, i - 295, e);
    }
    function t(e, n, r, i, a) {
      return _e(e - 266, n - 494, r - 156, e - 1668, a);
    }
    return this[t(1446, 1408, 1538, 1491, "[SQI") + o("Fpob", 1181, 1272, 1218)];
  }
  [ct(292, 364, 375, 212, "spSP") + ct(258, 231, 363, 303, "zva*") + ct(262, 377, 240, 187, "[xre")]() {
    var i;
    function o(a, s, c, u, g) {
      return Je(u, s - 372, c - 279, c - -364);
    }
    if (!this[t(543, "OwJF", 503, 619) + "se"]) {
      if (n(-11, -43, "XVvp", -162, -123) === r(425, 320, 507, 432, "r96N")) return;
      _0x30d803[r(541, 616, 657, 610, "A#zB") + "ch"]((a) => _0x2b87c3[o(-329, -526, -441, "wSqk")](a));
    }
    function t(a, s, c, u, g) {
      return ct(c - 87, s - 10, c - 353, u - 235, s);
    }
    function e(a, s, c, u, g) {
      return _e(a - 243, s - 97, c - 187, s - -83, u);
    }
    function n(a, s, c, u, g) {
      return st(g - -167, s - 52, c - 416, u - 211, c);
    }
    function r(a, s, c, u, g) {
      return ct(u - 158, s - 181, c - 164, u - 230, g);
    }
    try {
      if (n(-6, 30, "A#zB", 9, -3) === t(625, "A#zB", 530, 450, 559)) {
        const a = JSON[o(-400, -289, -383, "mR%K", -347)](this[r(460, 567, 626, 566, ")lxx") + "se"]);
        return (i = a == null ? void 0 : a[o(-249, -321, -296, "QcGv", -369) + n(7, -107, "Xh7h", -26, -53)]) == null ? void 0 : i[e(-262, -203, -307, "Xh7h", -140) + r(402, 493, 367, 466, "118#")];
      } else throw new _0x4d5d57(o(-513, -343, -418, "C]EN", -329) + t(422, "]VXJ", 403, 402, 445) + o(-317, -335, -371, "Yt[z", -272) + t(523, "]VXJ", 408, 304, 335) + ".");
    } catch (a) {
      if (o(-265, -262, -283, "wSqk") === t(480, "OwJF", 444, 354)) _0x366966[r(498, 484, 612, 507, "LJ*P") + o(-406, -428, -384, "C]EN")](_0x140224);
      else {
        if (a instanceof Error) {
          if (r(579, 639, 523, 577, "%hGF") !== r(514, 459, 510, 437, "9b7V")) throw new _0x37809c(r(343, 542, 398, 442, "LTX5") + r(494, 542, 520, 512, "Uf3[") + r(582, 548, 719, 607, "!5L!") + e(-279, -240, -304, "OwJF") + ".");
          re[r(559, 709, 681, 603, "118#") + e(-185, -179, -231, "raza")](a);
        }
        return;
      }
    }
  }
}
const to = class to extends Wl {
  static getInstance() {
    if (!this._instance) {
      const o = new yl();
      this._instance = new to(o);
    }
    return this._instance;
  }
};
_(to, "_instance");
let vr = to;
const Cc = (x, o) => {
  const t = Ht(o);
  he(() => {
    t.current = o;
  }, [o]), he(() => {
    const e = (n) => t.current(n);
    return document.addEventListener(x, e), () => {
      document.removeEventListener(x, e);
    };
  }, [x]);
};
var Sl = Symbol.for("preact-signals");
function ti() {
  if (V0 > 1348 + -1 * -5622 + 6969 * -1)
    V0--;
  else {
    for (var x, o = !1; void (856 + 1 * -5851 + 5 * 999) !== bn; ) {
      var t = bn;
      for (bn = void (9045 + -2172 * -3 + -171 * 91), Wr++; void (-11335 + -5 * -2267) !== t; ) {
        var e = t.o;
        if (t.o = void (-1033 * 2 + -4 * -1327 + -3242), t.f &= -(-4e3 + -65 * -123 + -499 * 8), !(-142 * -29 + -7117 + 3007 & t.f) && mc(t)) try {
          t.c();
        } catch (n) {
          !o && (x = n, o = !(4287 + -1 * 6922 + 2635));
        }
        t = e;
      }
    }
    if (Wr = 0, V0--, o) throw x;
  }
}
var ne = void (-1418 + -709 * -2), bn = void (-7881 + -37 * -81 + 4884), V0 = 4172 + -2086 * 2, Wr = 4 * 1766 + 47 * -11 + -6547, Xx = -399 * 3 + 356 * 14 + 3787 * -1;
function hc(x) {
  if (void (1427 + 1 * -181 + -1 * 1246) !== ne) {
    var o = x.n;
    if (void (7785 + 409 * -10 + -3695) === o || o.t !== ne)
      return o = { i: 0, S: x, p: ne.s, n: void (-9076 + 8 * 1046 + 708), t: ne, e: void (22 * 118 + -8587 + -1 * -5991), x: void (-214 + 1 * -9371 + -27 * -355), r: o }, ne.s !== void 0 && (ne.s.n = o), ne.s = o, x.n = o, 2 * 3418 + -1 * -6691 + -1 * 13495 & ne.f && x.S(o), o;
    if (-(9726 + -5 * -867 + -14060) === o.i)
      return o.i = 6112 + -6 * 358 + -4 * 991, void (-7817 + -78 * 48 + 11561) !== o.n && (o.n.p = o.p, void (-8922 + -1 * -7917 + 1005) !== o.p && (o.p.n = o.n), o.p = ne.s, o.n = void (269 * -15 + 2116 + -1 * -1919), ne.s.n = o, ne.s = o), o;
  }
}
function ke(x) {
  this.v = x, this.i = 640 * -1 + -15 * -275 + -205 * 17, this.n = void (-4051 * -1 + -1 * -7356 + -11407), this.t = void (-6105 + 165 * 37);
}
ke.prototype.brand = Sl, ke.prototype.h = function() {
  return !0;
}, ke.prototype.S = function(x) {
  this.t !== x && void (4 * 1585 + -2 * -2654 + -56 * 208) === x.e && (x.x = this.t, void (1326 + 221 * -6) !== this.t && (this.t.e = x), this.t = x);
}, ke.prototype.U = function(x) {
  if (void (-7549 * -1 + 29 * -317 + 1644) !== this.t) {
    var o = x.e, t = x.x;
    void (-1101 * 6 + -6550 + 13156) !== o && (o.x = t, x.e = void (-6397 + -7 * -122 + -241 * -23)), void (-1346 + -3 * 1164 + 59 * 82) !== t && (t.e = o, x.x = void (9286 + -340 * -8 + -12006)), x === this.t && (this.t = t);
  }
}, ke.prototype.subscribe = function(x) {
  var o = this;
  return xi(function() {
    var t = o.value, e = ne;
    ne = void (7487 + -1 * -3001 + -10488);
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
  ne = void (-1 * -7559 + -8725 + -106 * -11);
  try {
    return this.value;
  } finally {
    ne = x;
  }
}, Object.defineProperty(ke.prototype, "value", { get: function() {
  var x = hc(this);
  return void (-67 * -30 + 9895 + 1 * -11905) !== x && (x.i = this.i), this.v;
}, set: function(x) {
  if (x !== this.v) {
    if (Wr > 2 * 185 + -3673 + 3403) throw new Error("Cycle detected");
    this.v = x, this.i++, Xx++, V0++;
    try {
      for (var o = this.t; o !== void 0; o = o.x) o.t.N();
    } finally {
      ti();
    }
  }
} });
function pc(x) {
  return new ke(x);
}
function mc(x) {
  for (var o = x.s; void (5297 + 1 * 9004 + 1589 * -9) !== o; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !(-10 * 694 + -5 * 307 + 113 * 75);
  return !(-305 * -19 + 8753 * -1 + 2959);
}
function bc(x) {
  for (var o = x.s; void (-1152 + -4125 * 1 + 5277) !== o; o = o.n) {
    var t = o.S.n;
    if (void (1 * -4679 + 7738 + -3059) !== t && (o.r = t), o.S.n = o, o.i = -(-6740 + 2498 * -2 + -11737 * -1), o.n === void 0) {
      x.s = o;
      break;
    }
  }
}
function Ac(x) {
  for (var o = x.s, t = void (532 + 4457 * -1 + -785 * -5); void (-1471 * 6 + 1 * 1049 + -1 * -7777) !== o; ) {
    var e = o.p;
    -(-5 * 1992 + -1 * -5594 + 4367) === o.i ? (o.S.U(o), void (4325 + 101 * -39 + -386) !== e && (e.n = o.n), void (-3004 * 1 + -70 * 130 + 12104) !== o.n && (o.n.p = e)) : t = o, o.S.n = o.r, void (-6355 + -3 * -1951 + 2 * 251) !== o.r && (o.r = void (3399 + -1 * -2521 + 5 * -1184)), o = e;
  }
  x.s = t;
}
function K0(x) {
  ke.call(this, void (1989 * -5 + -2670 + 12615)), this.x = x, this.s = void (-645 * -6 + -550 + -3320), this.g = Xx - (-1814 + -55 * -33), this.f = -1221 + -3151 * -1 + -3 * 642;
}
(K0.prototype = new ke()).h = function() {
  if (this.f &= -(9845 + -3 * -2702 + -17948), -7390 + 7391 * 1 & this.f) return !(-2 * -4837 + -5551 + -4122);
  if (1636 * 6 + -1 * -9388 + 4 * -4793 == (2962 + 9205 * 1 + -1733 * 7 & this.f)) return !0;
  if (this.f &= -(317 + 1 * -8069 + 7757), this.g === Xx) return !(-8358 + -5365 * 1 + 13723);
  if (this.g = Xx, this.f |= 74 * 103 + 29 * 199 + -27 * 496, this.i > -16359 + 16359 * 1 && !mc(this)) return this.f &= -(2373 + 1 * -2371), !(-4 * 50 + 3935 + -83 * 45);
  var x = ne;
  try {
    bc(this), ne = this;
    var o = this.x();
    (9791 * 1 + 1 * -6244 + -3531 & this.f || this.v !== o || -301 * -1 + -13 * 197 + 2260 === this.i) && (this.v = o, this.f &= -(118 * 31 + -2906 + 5 * -147), this.i++);
  } catch (t) {
    this.v = t, this.f |= -1 * 8613 + 146 * 7 + -7607 * -1, this.i++;
  }
  return ne = x, Ac(this), this.f &= -(-34 * 38 + 4834 + -3540), !(-2820 * 1 + -1313 * -5 + -3745);
}, K0.prototype.S = function(x) {
  if (void (6400 + -1 * 6400) === this.t) {
    this.f |= 23 * 31 + -7917 + -40 * -181;
    for (var o = this.s; o !== void 0; o = o.n) o.S.S(o);
  }
  ke.prototype.S.call(this, x);
}, K0.prototype.U = function(x) {
  if (void (7206 + -3826 * -1 + 4 * -2758) !== this.t && (ke.prototype.U.call(this, x), void (43 * -230 + -398 + 16 * 643) === this.t)) {
    this.f &= -(1201 + 101 * 95 + 10763 * -1);
    for (var o = this.s; void (677 + 58 * 142 + -1 * 8913) !== o; o = o.n) o.S.U(o);
  }
}, K0.prototype.N = function() {
  if (!(-9181 + -5477 * -1 + 3706 & this.f)) {
    this.f |= -11 * -112 + 7012 + -8238;
    for (var x = this.t; void (3 * 2318 + 17 * 55 + -7889) !== x; x = x.x) x.t.N();
  }
}, Object.defineProperty(K0.prototype, "value", { get: function() {
  if (7743 + 654 * -1 + -443 * 16 & this.f) throw new Error("Cycle detected");
  var x = hc(this);
  if (this.h(), void (7226 * 1 + -5547 + 73 * -23) !== x && (x.i = this.i), -3 * -621 + -8836 + 6989 & this.f) throw this.v;
  return this.v;
} });
function wl(x) {
  return new K0(x);
}
function yc(x) {
  var o = x.u;
  if (x.u = void (333 * -1 + -4073 + 4406), typeof o == "function") {
    V0++;
    var t = ne;
    ne = void (457 * 19 + 2194 + -10877);
    try {
      o();
    } catch (e) {
      throw x.f &= -(8122 + -1307 * -2 + -6 * 1789), x.f |= -9477 + -82 * -47 + 5631 * 1, ni(x), e;
    } finally {
      ne = t, ti();
    }
  }
}
function ni(x) {
  for (var o = x.s; o !== void 0; o = o.n) o.S.U(o);
  x.x = void (599 + -1 * 599), x.s = void (107 * -11 + 1702 * -5 + 9687 * 1), yc(x);
}
function Bl(x) {
  if (ne !== this) throw new Error("Out-of-order effect");
  Ac(this), ne = x, this.f &= -(199 * 50 + -6677 * -1 + 2375 * -7), -9786 + 118 * 83 & this.f && ni(this), ti();
}
function fn(x) {
  this.x = x, this.u = void (-8488 + -12 * 197 + 10852), this.s = void (-5977 + -5977 * -1), this.o = void (3 * 714 + 5839 + -7981 * 1), this.f = -1195 * 1 + 1 * 3305 + -2078;
}
fn.prototype.c = function() {
  var x = this.S();
  try {
    if (-2152 + -5303 * 1 + -7463 * -1 & this.f || void (15628 + 3907 * -4) === this.x) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    x();
  }
}, fn.prototype.S = function() {
  if (-13 * -317 + -6812 + -2692 * -1 & this.f) throw new Error("Cycle detected");
  this.f |= 1 * 6557 + -4549 + -669 * 3, this.f &= -(1 * 7991 + 1 * 8469 + -16451), yc(this), bc(this), V0++;
  var x = ne;
  return ne = this, Bl.bind(this, x);
}, fn.prototype.N = function() {
  !(234 * -34 + 1 * 1063 + -7 * -985 & this.f) && (this.f |= -5539 + -6359 * -1 + -818, this.o = bn, bn = this);
}, fn.prototype.d = function() {
  this.f |= -11 * 382 + -9244 + 2 * 6727, -4510 * -1 + 35 * 276 + -1 * 14169 & this.f || ni(this);
};
function xi(x) {
  var o = new fn(x);
  try {
    o.c();
  } catch (t) {
    throw o.d(), t;
  }
  return o.d.bind(o);
}
var Fo;
function P0(x, o) {
  Y[x] = o.bind(null, Y[x] || function() {
  });
}
function gx(x) {
  Fo && Fo(), Fo = x && x.S();
}
function vc(x) {
  var o = this, t = x.data, e = _0(t);
  e.value = t;
  var n = xt(function() {
    for (var r = o.__v; r = r.__; ) if (r.__c) {
      r.__c.__$f |= -3165 * 3 + 6885 + 2614;
      break;
    }
    return o.__$u.c = function() {
      var i;
      !os(n.peek()) && 345 + 3 * -3049 + 8805 === ((i = o.base) == null ? void (-19 * 181 + -4645 * -2 + -5851) : i.nodeType) ? o.base.data = n.peek() : (o.__$f |= 9 * 241 + 223 * 28 + 2103 * -4, o.setState({}));
    }, wl(function() {
      var i = e.value.value;
      return -5759 * -1 + -323 * -5 + 1229 * -6 === i ? -256 * -38 + -1 * -145 + -9873 : !(-7245 + -107 * -31 + 1964 * 2) === i ? "" : i || "";
    });
  }, []);
  return n.value;
}
vc.displayName = "_st";
var Sr = {};
Sr.configurable = !(3277 + -1 * 1707 + -1570), Sr.value = void (-5530 + -18 * -293 + 256);
var wr = {};
wr.configurable = !(-5347 + 167 * 53 + -8 * 438), wr.value = vc;
var Br = {};
Br.configurable = !(3503 + -2 * -2707 + -8917), Br.get = function() {
  var x = {};
  return x.data = this, x;
};
var Gr = {};
Gr.configurable = !(2639 + 203 * -13), Gr.value = 1;
var sn = {};
sn.constructor = Sr, sn.type = wr, sn.props = Br, sn.__b = Gr, Object.defineProperties(ke.prototype, sn), P0("__b", function(x, o) {
  if (typeof o.type == "string") {
    var t, e = o.props;
    for (var n in e) if (n !== "children") {
      var r = e[n];
      r instanceof ke && (t || (o.__np = t = {}), t[n] = r, e[n] = r.peek());
    }
  }
  x(o);
}), P0("__r", function(x, o) {
  gx();
  var t, e = o.__c;
  e && (e.__$f &= -(2 * -3004 + 3596 + -2 * -1207), void (1 * -5636 + -1 * -5979 + 7 * -49) === (t = e.__$u) && (e.__$u = t = function(n) {
    var r;
    return xi(function() {
      r = this;
    }), r.c = function() {
      e.__$f |= -23 * -75 + -1301 + 9 * -47, e.setState({});
    }, r;
  }())), gx(t), x(o);
}), P0("__e", function(x, o, t, e) {
  gx(), x(o, t, e);
}), P0("diffed", function(x, o) {
  gx();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, n = o.props;
    if (e) {
      var r = t.U;
      if (r) for (var i in r) {
        var a = r[i];
        void (-187 * -22 + 2 * 1127 + 199 * -32) !== a && !(i in e) && (a.d(), r[i] = void (-3101 + 1 * 3101));
      }
      else t.U = r = {};
      for (var s in e) {
        var c = r[s], u = e[s];
        void (1964 * 3 + -15 * -577 + 1119 * -13) === c ? (c = Gl(t, s, u, n), r[s] = c) : c.o(u, n);
      }
    }
  }
  x(o);
});
function Gl(x, o, t, e) {
  var n = o in x && x.ownerSVGElement === void 0, r = pc(t);
  return { o: function(i, a) {
    r.value = i, e = a;
  }, d: xi(function() {
    var i = r.value.value;
    e[o] !== i && (e[o] = i, n ? x[o] = i : i ? x.setAttribute(o, i) : x.removeAttribute(o));
  }) };
}
P0("unmount", function(x, o) {
  if (typeof o.type == "string") {
    var t = o.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (-2 * -100 + -6782 + 6582);
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
      a && (i.__$u = void (-1752 + 2198 * 1 + 223 * -2), a.d());
    }
  }
  x(o);
}), P0("__h", function(x, o, t, e) {
  (e < 3 || e === 9) && (o.__$f |= -5273 * 1 + -9202 + 14477), x(o, t, e);
}), lt.prototype.shouldComponentUpdate = function(x, o) {
  var t = this.__$u;
  if (!(t && void (3165 + -10 * -749 + -10655) !== t.s || -12310 + -262 * -47 & this.__$f)) return !(-1492 * 3 + 2184 + 2292);
  if (124 * -78 + 8423 * 1 + 626 * 2 & this.__$f) return !(-1268 + 1 * 2948 + -1680);
  for (var e in o) return !0;
  for (var n in x) if (n !== "__source" && x[n] !== this.props[n]) return !(2081 * -3 + 6083 + 160);
  for (var r in this.props) if (!(r in x)) return !(6329 * 1 + 199 * 9 + -232 * 35);
  return !(5613 + -1403 * 4);
};
function _0(x) {
  return xt(function() {
    return pc(x);
  }, []);
}
const kl = (x) => {
  const o = _0(!1);
  return Cc(x, (e) => {
    e.detail && (o.value = e.detail.animationEnd);
  }), o;
};
function Hl(x, o) {
  if (!x) return o;
  const { detectionRecord: t, hashedDetectedImages: e } = x;
  o.hashedDetectedImages && (e == null || e.push(...o.hashedDetectedImages)), o.detectionRecord && (t == null || t.push(...o.detectionRecord));
  const n = { ...x };
  return n.hashedDetectedImages = e, n.detectionRecord = t, n;
}
const Ol = (x, o, t = dl) => new Promise((e) => {
  x.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, o);
}), Wc = async (x) => Ol(x, -5062 + -1 * -4051 + 1101), Kl = (x, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(x, o.shiftX, o.shiftY, o.width, o.height, -10 * 988 + 2203 + -2559 * -3, -7334 + 17 * 501 + -1183, t.width, t.height), t;
}, Zl = (x) => {
  const o = x.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(-2015 + 322 * 21 + -4747, 1 * 3155 + 305 * -31 + 45 * 140, x.width, x.height);
  return t;
}, Sc = (x, o, t, e) => {
  const n = x.getContext("2d");
  n && (n.beginPath(), e ? (n.fillStyle = t, n.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (n.strokeStyle = t, n.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), n.stroke());
}, Yo = (x, o, t) => {
  const { height: e, shiftX: n, shiftY: r, width: i } = o, a = {};
  a.x = n, a.y = r;
  const s = {};
  s.topLeft = a, s.width = i, s.height = e, s.color = t, Sc(x, s, t);
}, An = (x, o, t, e = 303 * 16 + -3846 + -1002) => {
  const n = x.getContext("2d");
  n && (n.fillStyle = t, n.fillRect(o.x + e, o.y + e, -77 * 7 + -2413 + 2959 * 1, -3701 + -5234 * -1 + -1526), n.beginPath());
}, wc = Dn(null), Bc = () => {
  const x = p0(wc);
  if (!x)
    throw new Error("Missing provider for CameraOptionsContext");
  return x;
}, Rl = (x) => {
  var s, c, u;
  const { cameraFacing: o, licensePath: t, onError: e, onPhotoTaken: n, sessionToken: r, thresholds: i, wasmDirectoryPath: a } = x;
  return {
    onPhotoTaken: n,
    onError: e,
    cameraFacing: o ?? "user",
    wasmDirectoryPath: a,
    licensePath: t,
    sessionToken: r,
    thresholds: {
      faceConfidence: (i == null ? void 0 : i.faceConfidence) ?? zu,
      minFaceSizeRatio: (i == null ? void 0 : i.minFaceSizeRatio) ?? qu,
      maxFaceSizeRatio: (i == null ? void 0 : i.maxFaceSizeRatio) ?? $u,
      sharpnessThreshold: (i == null ? void 0 : i.sharpnessThreshold) ?? nl,
      brightnessLowThreshold: (i == null ? void 0 : i.brightnessLowThreshold) ?? xl,
      brightnessHighThreshold: (i == null ? void 0 : i.brightnessHighThreshold) ?? ol,
      outOfBoundsThreshold: (i == null ? void 0 : i.outOfBoundsThreshold) ?? el,
      devicePitchAngleThreshold: (i == null ? void 0 : i.devicePitchAngleThreshold) ?? rl,
      mouth: {
        confidence: ((s = i == null ? void 0 : i.mouth) == null ? void 0 : s.confidence) ?? tl,
        status: {
          min: ((c = i == null ? void 0 : i.mouth) == null ? void 0 : c.status.min) ?? va.min,
          max: ((u = i == null ? void 0 : i.mouth) == null ? void 0 : u.status.max) ?? va.max
        }
      },
      leftEye: (i == null ? void 0 : i.leftEye) ?? {
        confidence: Wa
      },
      rightEye: (i == null ? void 0 : i.rightEye) ?? {
        confidence: Wa
      }
    }
  };
}, Pl = ({ cameraOptions: x, children: o }) => {
  const t = xt(() => ({
    faceCameraOptions: Rl(x)
  }), [x]);
  return /* @__PURE__ */ O(wc.Provider, { value: t, children: o });
}, Vl = 2939 * -1 + 7432 + 4493 * -1 + 0.75, Tl = -6 * 584 + -149 * -48 + -1823 * 2, El = 1 * -454 + 3532 * -2 + 8118, Nl = -4108 + -6 * -607 + 466, Gc = (x, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(x, t));
}, no = class no {
  constructor() {
    _(this, "lastDetails", {});
    _(this, "delayedTime", -2061 * -4 + 3520 + 34 * -346);
  }
  static getInstance() {
    return !this._instance && (this._instance = new no()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -1 * 7213 + -1 * 5774 + -1443 * -9;
  }
  isDetailChanged(o, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(o, t) {
    this.isDetailChanged(o, t) && Gc(o, t);
  }
  dispatchDelayedCustomEventOnChange(o, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(o, t), this.delayedTime = n);
  }
};
_(no, "_instance");
let Wn = no;
const Fn = Wn.getInstance(), Ka = (x, o, t = El) => {
  const e = {};
  e.instructionCode = o;
  const n = e;
  Fn.dispatchDelayedCustomEventOnChange(x, n, t);
}, Ll = (x, o) => {
  Fn.dispatchCustomEventOnChange(x, o);
}, Dl = (x, o) => {
  const t = {};
  t.size = o;
  const e = t;
  Fn.dispatchCustomEventOnChange(x, e);
}, Fl = (x, o, t) => {
  const e = o.confidence < t ? void 0 : o, n = {};
  n.detectedObject = e;
  const r = n;
  Fn.dispatchCustomEventOnChange(x, r);
}, Yl = (x, o, t) => {
  const e = {};
  e.image = t, e.data = {}, e.data.detection = o, e.data.imageResolution = {}, e.data.imageResolution.width = t.width, e.data.imageResolution.height = t.height;
  const n = e;
  Fn.dispatchCustomEventOnChange(x, n);
}, kr = (x, o) => {
  Gc(x, o);
}, Xl = () => "prod".toLowerCase() === "dev", jl = (x, o) => {
  if (Xl()) {
    const t = {};
    t.candidateSelectionImages = o;
    const e = t;
    Wn.getInstance().dispatchCustomEventOnChange(x, e);
  }
}, Ml = (x, o) => {
  const { cameraResolution: t, shouldMirror: e } = o;
  he(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, Ll(x, n);
  }, [t, e, x]);
}, kc = (x) => x.length < -6 * -753 + -671 + -3846 ? 0 : x.reduce((t, e) => t + e, -1 * -2038 + -1307 + 731 * -1) / x.length, Yn = (x) => Number.parseFloat(x.toFixed(-9161 * 1 + -3933 + 13097)), Jl = (x) => {
  const o = x.getContext("2d");
  o && o.clearRect(1 * 5081 + -105 + -4976, 0, o.canvas.width, o.canvas.height);
}, Io = (x, o) => Math.min(x, o), _l = (x, o) => {
  const t = Io(o.width, o.height);
  return Yn(x * t);
}, Hc = ({ height: x, width: o }) => {
  const t = Io(o, x), e = t / (-8959 + 15 * 587 + 1 * 157) * (-17 * 83 + 8 * 348 + -37 * 37);
  if (o > x) {
    const r = {};
    return r.width = e, r.height = t, r;
  }
  const n = {};
  return n.width = t, n.height = e, n;
}, Oc = ({ height: x, width: o }) => {
  const t = Io(o, x) * Vl, e = (o - t) / (-1 * -5602 + -7688 + 72 * 29), n = (x - t) / (1 * -7322 + 2 * 476 + 236 * 27), r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = t, r;
}, Ql = (x) => {
  const { height: o, shiftX: t, shiftY: e, width: n } = Oc(x), r = {};
  return r.shiftX = t / x.width, r.shiftY = e / x.height, r.width = n / x.width, r.height = o / x.height, r;
}, Ul = (x, o) => _l(x, o) * Tl, zl = "@innovatrics/dot-common-auto-capture", ql = "6.1.8", $l = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, e1 = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, t1 = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.1"
}, n1 = {
  name: zl,
  private: !0,
  version: ql,
  scripts: $l,
  dependencies: e1,
  devDependencies: t1
}, Kc = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Za = () => {
  const x = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return x && o;
}, x1 = () => {
  const x = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return x && o ? !1 : o;
}, Hr = (x) => new Promise((o) => {
  setTimeout(o, x);
}), Z0 = (x) => JSON.parse(JSON.stringify(x, (o, t) => typeof t == "number" ? Yn(t) : t)), Zc = () => n1.version, Rc = (x) => new URL(x).hostname.replace("www.", ""), o1 = () => Rc(window.location.href) === "localhost", dx = (x) => Object.entries(x).map(([o, t]) => encodeURIComponent(o) + "=" + encodeURIComponent(t)).join("&"), r1 = (x, o) => {
  const t = x && performance.now() - x;
  return o >= No.minFrames ? t > No.minDuration : t > No.maxDuration;
}, i1 = (x, o) => JSON.stringify(x) === JSON.stringify(o) ? o : x, Ra = (x, o) => Math.abs(x - o);
function a1(x, o) {
  let t;
  return (...e) => {
    const n = () => {
      clearTimeout(t), t = void 0, x(...e);
    };
    t === void (-2985 * 2 + -5625 + 2319 * 5) && (t = setTimeout(n, o));
  };
}
const s1 = (x) => x === nc.CONTROL ? !Kc() : !0, c1 = (x, o) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: r } = en(), [i, a] = ze(), s = xt(() => {
    const u = r && o && o.isStreaming && o.getCameraSettings().facingMode;
    return u ? i ?? u === "user" : i ?? s1(x);
  }, [o, i, x, r]);
  he(() => {
    const u = () => {
      t !== Bt.LOADING && e(Bt.RUNNING);
    }, g = () => {
      a(i === void 0 ? !s : !i);
    }, h = async () => {
      if (o) {
        e(Bt.LOADING);
        try {
          await o.switchCamera(), e(Bt.RUNNING);
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
        case yx.CONTINUE_DETECTION:
          u();
          break;
        case yx.TOGGLE_MIRROR:
          g();
          break;
        case yx.SWITCH_CAMERA:
          h();
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
async function Pc() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Xo() {
  return (await Pc()).filter((o) => o.kind === "videoinput");
}
function jo(x) {
  x.getTracks().forEach((t) => t.stop());
}
function Pa(x) {
  return x.getVideoTracks()[614 + -3 * 1411 + 3619];
}
const Bx = {};
Bx.width = 1920, Bx.height = 1080, Bx.facingMode = oc.FRONT;
const g1 = Bx;
var mt;
class Vc {
  constructor({ defaultVideoConstrains: o = g1, minCameraShorterSide: t = al } = {}) {
    _(this, "options");
    _(this, "availableCameraProperties", []);
    ce(this, mt, null);
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return j(this, mt);
  }
  get videoTrack() {
    return j(this, mt) ? Pa(j(this, mt)) : void (3406 + -202 * -13 + -6032);
  }
  get isCameraActive() {
    var o;
    return !!((o = j(this, mt)) != null && o.active);
  }
  static async requestPermission() {
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    jo(t);
  }
  async open(o = {}) {
    Za() && await Hr(8551 + -8101 * 1), ae(this, mt, await navigator.mediaDevices.getUserMedia(o)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const o = await Xo();
    if (o.length <= 5147 + 521 * 13 + -11919) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = o.findIndex((a) => a.deviceId === e.deviceId), r = o[n + (54 * -64 + -5657 + 9114)] ?? o[6987 + 1 * -2937 + -675 * 6], i = this.getConstraints(t, r);
    this.close(), await this.open(i);
  }
  close() {
    j(this, mt) && (jo(j(this, mt)), ae(this, mt, null));
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
    const o = this.getSettings(), t = await Pc(), e = t.find((n) => n.deviceId === o.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(o) {
    return o === oc.FRONT ? void (1577 + -1 * 3849 + 2272) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return Kc() ? (await Xo()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (1 * -1537 + -4177 + 5714);
  }
  async collectAvailableCamerasInfo() {
    const o = await Xo();
    for (const t of o) {
      Za() && await Hr(-545 * 12 + 9 * 186 + 5316);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const r = await navigator.mediaDevices.getUserMedia(n), i = Pa(r);
        if (!i) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = i.getSettings(), s = { ...a };
        s.deviceName = i.label;
        const c = {};
        c.cameraProperties = s;
        const u = c;
        this.availableCameraProperties.push(u), jo(r);
      } catch (e) {
        e instanceof Error && re.logError(e);
      }
    }
  }
  getConstraints(o, t) {
    const e = { ...this.options.defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t.deviceId } : void (6593 * -1 + 240 * 38 + -2527);
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
mt = new WeakMap();
class d1 {
  constructor(o, t) {
    this.videoHandler = o, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(o = {}) {
    await Vc.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(o.facingMode), e = this.cameraHandler.getConstraints(o, t);
    await this.cameraHandler.open(e), x1() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
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
    return e.drawImage(this.videoHandler.videoElement, 1 * -9706 + -2604 + 10 * 1231, -35 * 86 + -3 * 3043 + 12139), { image: t, timestamp: Date.now() };
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
var Vt;
class u1 {
  constructor(o) {
    ce(this, Vt);
    ae(this, Vt, o);
  }
  get videoElement() {
    return j(this, Vt);
  }
  async play(o) {
    j(this, Vt).srcObject = o, await j(this, Vt).play();
  }
  stop() {
    j(this, Vt).srcObject = null;
  }
  hasSrcObject() {
    return !!j(this, Vt).srcObject;
  }
}
Vt = new WeakMap();
function l1(x, o) {
  const t = Ht(), { handleError: e, setIsCameraReady: n } = en(), [r, i] = ze(), a = F0((c) => {
    i((u) => i1(c, u));
  }, []);
  he(() => ((async () => {
    if (!x.current) {
      e(new re("Something went wrong during video initialization"));
      return;
    }
    const u = new u1(x.current), g = new Vc(), h = new d1(u, g);
    try {
      const l = {};
      l.facingMode = o, await h.startVideoStream(l);
    } catch (l) {
      if (l instanceof Error) {
        e(re.fromCameraError(l));
        return;
      }
    }
    n(!0), a(h.getCameraResolution()), t.current = h;
  })(), function() {
    t.current && t.current.stopStreaming(), n(!1);
  }), [o, e, n, x, a]);
  const s = {};
  return s.cameraService = t.current, s.cameraResolution = r, s.onCameraResolutionChange = a, s;
}
function I1(x, o) {
  he(() => {
    function t() {
      x.current && Dl(o, x.current.getBoundingClientRect());
    }
    return t(), window.addEventListener("resize", t), () => {
      window.removeEventListener("resize", t);
    };
  }, [x, o]);
}
class oi extends Array {
  constructor(t) {
    super();
    _(this, "size");
    this.size = t;
  }
  pushFixed(...t) {
    if (t.length > this.size) {
      const e = t.slice(-this.size);
      this.push(...e);
      return;
    }
    this.length === this.size && this.splice(232 * 32 + 2939 * 1 + -10363, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-53 * 1 + 1793 * 3 + -5326);
  }
}
const f1 = (x, o) => {
  const { height: t, shiftX: e, shiftY: n, width: r } = o;
  return !(x.x < e || x.x > e + r || x.y < n || x.y > n + t);
}, C1 = (x, o) => Object.values(x).every((t) => f1(t, o));
function h1(x) {
  return Yn(Math.abs(x));
}
const p1 = () => {
  const [x, o] = ze(null), t = Ht(new oi(1 * 8963 + -8 * -775 + 286 * -53));
  function e(r) {
    const { z: i } = r.accelerationIncludingGravity || {};
    if (!i) return;
    t.current.pushFixed(h1(i));
    const a = Yn(kc(t.current)), s = {};
    s.z = a, o(s);
  }
  he(() => (window.addEventListener("devicemotion", a1(e, ll), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const n = {};
  return n.acceleration = x, n;
};
function m1({ analytics: x, cameraFacing: o, controller: t, createProtoMessage: e, onPhotoTaken: n, sessionToken: r }) {
  const i = Ht(null), { sunfish: a } = $r(), { appState: s, handleAppStateChange: c, handleError: u } = en(), { cameraResolution: g, cameraService: h, onCameraResolutionChange: l } = l1(i, o), C = _0(void (-1028 + 514 * 2));
  he(() => {
    h != null && h["isStreaming"] && (t != null && t["isDetectorInitialized"]) && a && c(Bt.RUNNING);
  }, [h == null ? void 0 : h["isStreaming"], t == null ? void 0 : t["isDetectorInitialized"], c, a]), he(() => {
    if (s !== Bt.RUNNING) return;
    if (!h || !t) throw new re("Cannot start detection");
    let A = 866 * 1 + -4354 + 3488, d = !1, v = 3412 + -2 * 1706;
    const K = new oi(7790 + 3170 * -1 + -4590);
    t.clearImagesForDuplicateDetection();
    async function D({ cameraService: k, canvasImage: J, controller: le, detection: U, detectionRecord: Ie, onPhotoTaken: fe }) {
      const Ke = {};
      Ke.width = J.width, Ke.height = J.height;
      const Ct = Ke, ie = await Wc(J), Ze = await k.getCameraProperties(), Fe = { ...Ze, detectionRecord: Ie, hashedDetectedImagesWithTimestamp: le.getImagesForDuplicateDetection() }, rt = {};
      rt.sessionToken = r, rt.web = Fe;
      const Ye = rt, pe = await e(ie, Ye), Ve = {};
      Ve.detection = U, Ve.imageResolution = Ct;
      const Xe = {};
      Xe.image = ie, Xe.data = Ve;
      const me = Xe, Te = {};
      Te.imageData = me, Te.content = pe, Te.webMetadata = Fe, Te.controller = le, fe(Te);
    }
    async function E({ cameraService: k, controller: J }) {
      const le = Date.now();
      for (; k.isStreaming && !d; ) {
        if (r1(A, v)) {
          const { detection: Ye, image: pe } = J.getBestImage() || {}, Ve = J.getDetectionRecord();
          if (pe && Ye) {
            const Xe = Date.now(), me = kc(K), Te = {};
            Te.width = pe.width, Te.height = pe.height, x == null || x.trackCaptureProcess({ detection: Ye, imageResolution: Te, deviceName: await k.getDeviceName(), averageFps: me, captureProcessDurationInMs: Xe - le, facingMode: k.getCameraSettings().facingMode, instructionSet: await J.getInstructionSet() }), c(Bt.WAITING);
            const je = {};
            je.cameraService = k, je.controller = J, je.canvasImage = pe, je.detection = Ye, je.detectionRecord = Ve, je.onPhotoTaken = n, await D(je), J.restart();
          } else u(new re("Something went wrong during capturing an image"));
          return;
        }
        const U = k.takePhoto(), Ie = {};
        Ie.width = U.image.width, Ie.height = U.image.height;
        const fe = Ie;
        let Ke;
        try {
          Ke = await J.processImage(U);
        } catch (Ye) {
          Ye instanceof Error && u(re.fromCameraError(Ye));
          return;
        }
        const Ct = Date.now(), ie = Ct - U.timestamp, Ze = Yn((5767 * 1 + -669 + -2049 * 2) / ie);
        K.pushFixed(Ze);
        const Fe = {};
        Fe.processedImage = Ke, Fe.detectionTime = ie, Fe.fps = Ze, Fe.resolution = fe, Fe.samVersion = J.samVersion;
        const rt = Fe;
        C.value = rt, Ke.isInCandidateSelection && (A === -5334 + 5 * 1543 + -2381 && (A = performance.now()), v++), l(fe), await Hr(Math.max(Sa.max - ie, Sa.min));
      }
    }
    const F = {};
    return F.controller = t, F.cameraService = h, E(F), () => {
      d = !0;
    };
  }, [x, e, s, h, t, c, u, n, l, C, r]);
  const m = {};
  return m.videoRef = i, m.cameraResolution = g, m.cameraService = h, m.detectionDetails = C, m;
}
const ri = (x) => {
  const { height: o, width: t } = Hc(x), e = (x.width - t) / (1756 + -877 * 2), n = (x.height - o) / (-1 * 6147 + 2319 + 766 * 5), r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = o, r;
}, Tc = (x, o) => {
  const { height: t, width: e } = Hc(x), n = Io(x.width, x.height), r = e - n * o * (-263 * -8 + -690 * 3 + -32), i = t - n * o * (-7562 + -250 * -10 + 5064), a = (x.width - r) / (2570 + 1 * 42 + 30 * -87), s = (x.height - i) / (29 * 121 + -3444 + -9 * 7), c = {};
  return c.shiftX = a, c.shiftY = s, c.width = r, c.height = i, c;
}, k0 = (x, o) => {
  const { shiftX: t, shiftY: e } = ri(x), n = {};
  return n.x = o.x + t, n.y = o.y + e, n;
}, b1 = (x, o) => ({ ...o, leftEye: { ...o.leftEye, center: k0(x, o.leftEye.center) }, rightEye: { ...o.rightEye, center: k0(x, o.rightEye.center) }, mouth: { ...o.mouth, center: k0(x, o.mouth.center) }, topLeft: k0(x, o.topLeft), bottomRight: k0(x, o.bottomRight), faceCenter: k0(x, o.faceCenter) }), Ec = (x, o) => {
  const { faceCenter: t, faceSize: e } = x, n = Ul(e, o), r = {};
  r.x = t.x, r.y = t.y - n;
  const i = {};
  i.x = t.x + n, i.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + n;
  const s = {};
  s.x = t.x - n, s.y = t.y;
  const c = {};
  return c.top = r, c.right = i, c.bottom = a, c.left = s, Z0(c);
}, A1 = (x, o) => {
  const { bottomRight: t, faceCenter: e, topLeft: n } = o, r = {
    topLeft: n,
    width: t.x - n.x,
    height: t.y - n.y
  };
  Sc(x, r, "rgba(255, 0, 0, 0.3)", !0), An(x, e, "lime");
}, y1 = (x, o, t) => {
  const e = Ec(o, t);
  Object.values(e).map((n) => An(x, n, "orange"));
}, v1 = ({ redfin: x, cameraResolution: o, detectionDetails: t, isImageMirror: e }) => {
  const {
    faceCameraOptions: { thresholds: n }
  } = Bc(), r = Ht(null);
  if (he(() => {
    if (!r.current)
      return;
    r.current.width = o.width, r.current.height = o.height, Jl(r.current);
    const C = ri(o), m = Tc(o, n.outOfBoundsThreshold), A = Oc(o);
    t.value && (A1(r.current, t.value.processedImage.detectedFace), y1(
      r.current,
      t.value.processedImage.detectedFace,
      o
    ), Yo(r.current, C, "lime"), Yo(r.current, m, "yellow"), Yo(r.current, A, "blue"), An(r.current, t.value.processedImage.detectedFace.leftEye.center, "cyan"), An(r.current, t.value.processedImage.detectedFace.rightEye.center, "cyan"), An(r.current, t.value.processedImage.detectedFace.mouth.center, "cyan"));
  }, [o, n, t.value]), !t.value)
    return null;
  const {
    detectionTime: i,
    fps: a,
    processedImage: { detectedFace: s, instructionCode: c, invalidValidators: u },
    resolution: g,
    samVersion: h
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
  return h && (l["SAM version"] = h), u.length > 0 && (l["Invalid validators"] = u.join(", ")), /* @__PURE__ */ O(
    Fu,
    {
      ref: r,
      cameraResolution: o,
      detectionDetails: l,
      isImageMirror: e
    }
  );
};
function W1(x) {
  return /* @__PURE__ */ O("rect", { fill: "#000", ...x, rx: "50%" });
}
function S1(x) {
  const [o, t] = ze(!1), e = () => t((i) => !i), n = "" + o;
  U0(() => {
    function i() {
      if (!x.current) return;
      const u = new MutationObserver(() => {
        e();
      }), g = {};
      return g.childList = !0, g.subtree = !0, g.attributes = !0, u.observe(x.current, g), u;
    }
    function a() {
      var h;
      if (!((h = x.current) != null && h["parentElement"])) return;
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
const w1 = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function B1({ cutOut: x, height: o, width: t }) {
  const e = Ht(null), { key: n } = S1(e);
  return /* @__PURE__ */ O("div", { ref: e, style: w1, children: /* @__PURE__ */ O("svg", { viewBox: `0 0 ${t} ${o}`, children: [
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
function G1({ fullOverlay: x, resolution: o }) {
  const t = Ql(o), e = `${t.height * 100}%`, n = `${t.width * 100}%`, r = `${t.shiftX * 100}%`, i = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ O(
    B1,
    {
      cutOut: x || /* @__PURE__ */ O(W1, { height: e, width: n, x: r, y: i }),
      height: o.height,
      width: o.width
    }
  );
}
const k1 = async () => WebAssembly.validate(new Uint8Array([0, 97, 669 * -3 + 1091 * -1 + -7 * -459, 1218 + 1061 * 5 + -6414, 7650 + 7649 * -1, -10942 + 1 * 10942, 4 * -1567 + -1307 * -1 + -121 * -41, 1991 + 60 * -129 + 5749, 1, 9361 + -1 * 3915 + -5441, 1, -9880 * -1 + 3763 + 713 * -19, 3181 * 3 + -4827 + 524 * -9, -3194 + 1 * 9041 + 5846 * -1, -17153 + -17276 * -1, 8605 * -1 + -2420 + 11028, 2, 3290 + 67 * -139 + 6024, 0, -690 + -2 * 3373 + 7446, -3870 + 3880 * 1, 1 * 4483 + -2110 * -2 + 4351 * -2, 4967 * 2 + 1 * 5369 + -805 * 19, 7329 + 3 * -2443, -1 * -4463 + 2435 + -6833, -2329 + 5 * 29 + 168 * 13, 9439 * 1 + -5434 + -3752, -4 * -422 + 8621 + -10294 * 1, 13932 + 1 * -13679, 98, 1 * -8237 + -6067 + 14315]));
function de(x, o) {
  const t = jx();
  return de = function(e, n) {
    e = e - 382;
    let r = t[e];
    if (de.gPkVSC === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, h) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + h.charCodeAt(d % h.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      de.QTnaYy = u, x = arguments, de.gPkVSC = !0;
    }
    const a = t[1549 + -31 * 69 + 2 * 295], s = e + a, c = x[s];
    return c ? r = c : (de.kGXLuQ === void 0 && (de.kGXLuQ = !0), r = de.QTnaYy(r, n), x[s] = r), r;
  }, de(x, o);
}
function jx() {
  const x = ["bmkuBW", "f8k2WQtcQNpcU8o2b1GyASojW4S", "W7KiW7G", "WRVcNSk3WPDZiCo1sSoPWQaAWQNdMG", "WQrYWPVdVCo9", "W6eqWP3dJSk+", "WRNdRfxcIXRdS18", "cGrMo0a", "cCkebSoL", "WRvcs1i0WRddTSk6tXJcNdHq", "aSouW7NcJXNcOCosW5XPvSkdCt4", "WReOWQaC", "WR5mbSk6WPm", "amoqW7VcIbVcOCowW6zRwSkjtGK", "W7yqca", "W63dGYagdG", "W4nbW5qiW7G", "aCkxbmoT", "Fx9ZzuldLe8", "WPtdLr0d", "WRRdMrJdNSkN", "WPtcTmkxpgdcKWNdJMqNqx7cKa", "W5XiWPD6la", "da5Vjey", "WRbIWO3dM8oW", "p0VcGXRdMa", "WRqkgq90", "WQpdTW7dLa", "umkXwCk4W7S", "C8oTESkuqa", "WP/cLvXOjSkLWRDqBwddLSkTsSkS", "qfFcJmkpuCksaSo3WOXZgsddNW", "a8kacmoYCa", "WRvhs1uZWRhdSmk4rrlcKav5", "mmkVAdhdJCkdWRRdPre0ASoKWQ8", "CGi3aWJcRcFcPfxdPh/cKd0", "W6BcJ1VcNCo/WQb5FavLW7BdMaa", "W4fzWPPJfG", "W6fze8oLnxlcQSkAWRmehSksW7RcVG", "kL5Zv0K", "bSoQBSkKW4FdSt3dOW", "i8oKnCkmgbxdMmoU", "haL0if4", "AqCdWRmNf0KMW40Bn14q"];
  return jx = function() {
    return x;
  }, jx();
}
(function(x, o) {
  function t(a, s, c, u, g) {
    return de(u - -754, c);
  }
  function e(a, s, c, u, g) {
    return de(s - 601, a);
  }
  function n(a, s, c, u, g) {
    return de(a - -35, s);
  }
  function r(a, s, c, u, g) {
    return de(a - 262, s);
  }
  const i = x();
  for (; ; )
    try {
      if (-parseInt(t(-334, -366, "5C1)", -348, -355)) / 1 + -parseInt(r(648, "(T[y", 634, 648, 632)) / 2 + -parseInt(n(356, "Vk9o", 342, 362, 371)) / 3 * (-parseInt(e("0oms", 995, 979, 982, 976)) / 4) + -parseInt(n(353, "EkJ&", 351, 356, 372)) / 5 + -parseInt(r(682, "0Oyb", 698, 700, 668)) / 6 + -parseInt(n(347, "aq63", 368, 339, 335)) / 7 * (-parseInt(t(-318, -358, "0oms", -336, -347)) / 8) + parseInt(t(-334, -309, "8Xc2", -331, -313)) / 9 === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(jx, -1809820 + -9 * -3133 + 22933 * 119);
async function H1() {
  const x = {};
  x[c(-90, "i(#a", -87, -79, -79)] = cc, x[c(-72, "(2!7", -92, -63, -85) + "h"] = 256;
  function o(u, g, h, l, C) {
    return de(h - -156, C);
  }
  const t = await window[c(-67, "ju76", -52, -67, -67) + "o"][e(206, 217, "HZG#", 220) + "e"][i("OUOt", 525, 547, 546) + o(261, 246, 241, 238, "YPNw") + "y"](x, !0, [i("QxN^", 569, 578, 559) + "pt", e(226, 237, "kvXj", 230) + "pt"]);
  function e(u, g, h, l, C) {
    return de(l - -187, h);
  }
  const n = Uint8Array[s("kvXj", 1309, 1296)](Array(5 * 979 + -8909 + 4030)[c(-74, "Bg2a", -79, -82, -71)](5784 + -3 * 1928)), r = window[o(249, 260, 245, 264, "6c(b") + "o"][e(215, 220, "]obv", 222) + i("HZG#", 548, 579, 568) + o(262, 286, 268, 269, "0Oyb")](n);
  function i(u, g, h, l, C) {
    return de(l - 146, u);
  }
  const a = {};
  function s(u, g, h, l, C) {
    return de(h - 894, u);
  }
  a[e(184, 205, "xymU", 200)] = t, a.iv = r;
  function c(u, g, h, l, C) {
    return de(C - -475, g);
  }
  return a;
}
async function O1(x) {
  function o(h, l, C, m, A) {
    return de(C - 390, h);
  }
  const { iv: t, key: e } = await H1(), n = {};
  function r(h, l, C, m, A) {
    return de(A - -518, C);
  }
  n[g("kvXj", 1351)] = cc, n.iv = t;
  const i = await window[u("qy7C", -583, -563, -574, -571) + "o"][u("]obv", -615, -580, -610, -596) + "e"][o("!z&O", 821, 801) + "pt"](n, e, x), a = await window[s(1045, 1025, "5xPo") + "o"][o("ju76", 761, 773) + "e"][r(-108, -135, "ju76", -113, -126) + s(1027, 1027, "CxK%")](s(1019, 1014, "0oms"), e);
  function s(h, l, C, m, A) {
    return de(l - 615, C);
  }
  const c = {};
  function u(h, l, C, m, A) {
    return de(A - -985, h);
  }
  function g(h, l, C, m, A) {
    return de(l - 958, h);
  }
  return c[g("CxK%", 1363) + "ge"] = i, c[u("PGoN", -612, -619, -602, -600)] = a, c.iv = t, c;
}
(function(x, o) {
  function t(s, c, u, g, h) {
    return Pe(g - 474, s);
  }
  const e = x();
  function n(s, c, u, g, h) {
    return Pe(g - -815, h);
  }
  function r(s, c, u, g, h) {
    return Pe(g - -435, c);
  }
  function i(s, c, u, g, h) {
    return Pe(s - 344, g);
  }
  function a(s, c, u, g, h) {
    return Pe(h - 370, c);
  }
  for (; ; )
    try {
      if (parseInt(t("R@i&", 754, 756, 749, 746)) / 1 * (-parseInt(t("dVmO", 777, 768, 766, 764)) / 2) + -parseInt(r(-146, "g2t4", -155, -146, -146)) / 3 + -parseInt(a(655, "fE$X", 640, 644, 647)) / 4 + -parseInt(n(-533, -540, -539, -528, "&yds")) / 5 + parseInt(t("&X#R", 748, 739, 748, 737)) / 6 + -parseInt(t("W#l%", 765, 743, 755, 755)) / 7 + parseInt(i(628, 622, 618, "vnZR", 626)) / 8 === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Mx, 5 * 37795 + 488489 + -66067);
function Pe(x, o) {
  const t = Mx();
  return Pe = function(e, n) {
    e = e - (1 * 4547 + -1116 + 39 * -81);
    let r = t[e];
    if (Pe.idiQhT === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, h) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + h.charCodeAt(d % h.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      Pe.BzkCtg = u, x = arguments, Pe.idiQhT = !0;
    }
    const a = t[-335 * -22 + -9491 * 1 + 2121], s = e + a, c = x[s];
    return c ? r = c : (Pe.YjqKiv === void 0 && (Pe.YjqKiv = !0), r = Pe.BzkCtg(r, n), x[s] = r), r;
  }, Pe(x, o);
}
function Mx() {
  const x = ["W4xcQSk7x8ov", "rZpdPdWn", "W4qLo8kFWONdGb8UW71VoCo6WPG", "BdfvW4ngW5XPWPJdHIVcUSo8", "W69bWRGb", "W47cJCkIW4HVDr3dVhddN2BcOmo7", "hwG8W6i1WRurF8oqW6PuWONdUG", "WRdcUJ56W4pdNgS1WPyPxcu", "W69oW6jccG", "g2W6W6G9WRiuzSobW5T8WPhdJG", "WRdcVtfXW4BdMWqvWQKorbKW", "W6BcPCoCyYFdJwlcJCkFWPrUsai", "W7P6tuCmWRJcQ2vKmrqwqrq", "m8ogh8oqWRldISkSWOZcKCoLW6C7WPBdQG", "W6GSWOpdNmkP", "i1Dds8kQW7JcOKPzWQ3cKdqS", "W4hcRSkNE8oo", "BLPZkM85WOrsWRiPWPCZ", "WR9SW5xcHSosW6bMWQ0lW6Kjj2a", "AZrCW4niW5zTWOFdGXRcI8oA", "W6pdLSkDgfpcGW4", "vfivWP7cNG", "B2rIFSog", "WPldPmkVm8kNW6hcTa"];
  return Mx = function() {
    return x;
  }, Mx();
}
function K1(x) {
  const o = new ArrayBuffer(x[r(850, 861, 858, 859, "Cxci") + "h"]);
  function t(i, a, s, c, u) {
    return Pe(i - 307, a);
  }
  const e = new Uint8Array(o);
  function n(i, a, s, c, u) {
    return Pe(s - 666, a);
  }
  for (let i = 0, a = x[r(829, 839, 840, 836, "@mLw") + "h"]; i < a; i++)
    e[i] = x[t(580, "]nEE") + n(956, "8h3(", 959)](i);
  function r(i, a, s, c, u) {
    return Pe(a - 567, u);
  }
  return o;
}
(function(x, o) {
  function t(i, a, s, c, u) {
    return we(s - -725, i);
  }
  function e(i, a, s, c, u) {
    return we(u - -728, c);
  }
  function n(i, a, s, c, u) {
    return we(c - 95, a);
  }
  const r = x();
  for (; ; )
    try {
      if (parseInt(n(517, "cqn6", 666, 555, 620)) / 1 + parseInt(t("$ptm", -222, -187, -271, -275)) / 2 * (parseInt(e(-46, -43, -27, "PeME", -129)) / 3) + parseInt(t("Spc3", -16, -133, -35, -122)) / 4 + -parseInt(e(-386, -460, -315, "&[m$", -361)) / 5 * (parseInt(e(-355, -397, -378, "btc$", -280)) / 6) + parseInt(e(-384, -212, -298, "T7t*", -276)) / 7 * (-parseInt(e(-355, -301, -290, "1D6k", -243)) / 8) + -parseInt(e(-285, -156, -102, "1D6k", -203)) / 9 + parseInt(n(641, "0Ew[", 493, 548, 617)) / 10 * (parseInt(e(-225, -399, -314, "QC[1", -285)) / 11) === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Jx, -306560 * 2 + 3259 + 1009169);
function we(x, o) {
  const t = Jx();
  return we = function(e, n) {
    e = e - (-4636 * 1 + -5064 + -10066 * -1);
    let r = t[e];
    if (we.dQJCGC === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, h) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + h.charCodeAt(d % h.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      we.NCYwIB = u, x = arguments, we.dQJCGC = !0;
    }
    const a = t[-1 * 1791 + 124 * -75 + -3 * -3697], s = e + a, c = x[s];
    return c ? r = c : (we.ogfRuV === void 0 && (we.ogfRuV = !0), r = we.NCYwIB(r, n), x[s] = r), r;
  }, we(x, o);
}
function Jx() {
  const x = ["DL0Zchi", "WOpdQmkiW5ddUW", "W7/cMaLeW6W", "WOFcUqxcQtu", "WOxdICkZW4/dLq", "WOxcLSkxWRhdNq", "cHBdPmoYdG", "WPRdHCkxWO0aWPyFiCkmBJu", "WQxdOmkAW5/dUW", "ix8lDhm", "kSkEeSk1qW", "W6PlBtFcVW", "W7KcjLGx", "WRFdH8kWW6NcPW", "aJj3bNu", "W5DMC8kXEG", "p8o2gmkFuG", "omkSWRdcTSo+", "WRRdKKFdSwK", "WPnFWQ19", "cCoPWOlcLCkH", "dmosW5RdP8oB", "zKa3W5VdUa", "g0SlW4ldHW", "WQJcK8kar8kV", "mSocW4ldIdu", "WONcSmkbWPldHq", "WOPmDryH", "WRRcPb3dO2FdHSo6WPhcRa", "W50lwmosW48", "W43dHCo+W6nC", "WQnnyGiX", "W73cSJa5W5O", "WPhcNSkkWO3dPW", "dCk3WOdcKCoW", "y8o3W4H2fa", "imkJcLu", "W5zOjSkAeW", "W6NdQeldLG", "WPTBWOLmba", "WPiTlNtcGW", "xdxdI8o4hG", "eKT5W5NcPG", "EM7cNIdcKq", "FthcRxdcOq", "cSomW7FcJ8kJ", "W6iZxG8q", "FWJcGfFcVa", "W6tdUSkIW7ddGq", "WPjCWQTsrW", "WPlcJSkxCSom", "kmo9e2hdOG", "W518iSkPCa", "amkSWRdcN8om", "WOCmW6pcPYa", "WQldI8kaWQ3cVW", "k8kia8k7gG", "BColWO7cKSoF", "W7tdH8kWWPZdNW", "W6ZdKhZcHfu", "WR7cRKtcPIO", "ymoBW5BdGCk8mfinfblcOW", "dCo6lSk7Ea", "aNCshbO", "WPBdRmk/W4VdUG", "WQRcRCk6WO/dUq", "WQekW5RdGsi", "WPbnW4FdLh4", "Cv3cTeJdShbrW4/cIW", "W73dQ8klWRVdKG", "oh8wAcG", "WPNdKCkPW4xcGG", "phBcQCkrcZr5W5RcM3q", "WPm5WRbHaq", "uCk8zCkbvG", "W5HrCSkgeW", "oxldNSkhbG", "mhCdWR3dSa", "hmo5nCoeFW", "W5OMDYKb", "teldTSoPjW", "BmodW7xcLSog", "WOdcI8oGW4/cICkvDepcRCoTWQq", "cCoGiSkR", "W79oaCkxha", "W7D+dCkheW", "W5RcJmkpkCk8", "W6KBh1qX", "WP87wSkTW4m", "WOpdN8kGWQZdPa", "bSk0WRxcQ8ot", "f8oIne/cGq", "rX7cUuFcHW", "W5TVm8kaea", "W7pcMZaaW7m", "W7ddImkoemoF", "W4JcV8kjp8kf", "WPNcUfjaW4i", "WPDOpSkRW78", "ixLoymov", "bqNcUSkHjG", "c8kVW4ZcGCkR", "W4OkWRGUWRq", "W4GSWRP8WRu", "mGFcLcC", "W5VdUmoJWO3dNa", "WQvFWRLSvq", "CSkfz8kdmW", "WOFcTGlcQtG", "gSoElh/cTa", "W7udbSkhW7W", "WO9lfCkqeW", "W54VbIRcJa", "W4iUiMmz", "WPCnWRn3WOy", "W7WYeCkfeW", "Amk1AKrP", "W5eWfSkfdW", "WQ0+WQ52gW", "gmobWP/dNSk5", "FGTdh3hdVmkTW7a4W7CreG", "n8kNe8oCza", "W6GIWQysWOO", "DSkvzCkdBa", "W6NdMCk3WQldMq", "W6BcSmksW79R", "gH3dMN3dLq", "BCkepxPh", "W7JdT3VdNNS", "WPzKWODksq", "W7W/eYxdHW", "sgZdLmk7cW", "yCkIW5nzoW", "i8k/ouJcSa", "WQ/cImkbl8o8", "W7boimkelG", "WRVdTmkKW7BdKa", "Fr3dUmonea", "W7lcOCkaj8kR", "W4fQiCkhuG", "W458j8kgcW", "W59ma1LdWQjuW7tdI8kouq", "W4X6x8oPvG", "amkKamkZvW", "hSk2WRhcQCoa", "jfSarG", "BCk7ogNcSW", "CCk0zN5U", "W4FcRmoxWQZdLfeUW7pdJYdcQCoo", "WRRdIL3dOMK", "W7RcU8kPg8k3", "WPxcKJXHbq", "W57dJxtcHxS", "W4WoW7aTfJLnC8omW5hdMq", "W5tcNW9LFq", "WP0/W7SqbW", "W5RcGaafW5q", "W7TsW7P3pSklWQxdIYO", "WPn+WQybWQRcTSkrva", "WPBcKqjmvW", "WPJdQCkWW4FcNW", "WR4KW5JdKqe", "pCo/WOdcI8oF", "WPi6WP0GWPK", "W5uWbgHZ", "W5NdR8kmWRmhWQjMmSkrFeKz", "WOhdImkgW5VcQW", "WOHiutFcHq", "W4GAp3yq", "W415d8kKuG", "WQ0aWPxdL8oz", "rW3cSwpcHq", "WR3cP2FcPJK", "y8klo0zP", "nSoZW6ldKCoz", "W5RdKhNcTYFcLCokW4i", "h8orWOpdGCoE", "D8kew31X", "WPGwW7ZdHJi", "fmodWQ/cISo4", "W7TfW5hdRhy", "WOLql8kQdW", "WPONWQr6pq", "huOLFY0", "W4pdPmklWPFdLq", "wGyxnKS", "W7fjoG/cRG", "W6hcHSk3W6VdGa", "jMvFz8oa", "hSoWFCk5wq", "p8o5WReiDsddGxumqei", "W4fjWOxcP3ZcSX3dU8outYS", "WQtcOSoPWQ3dVG", "xNFcO8oQeW", "WOTgD8kpiW", "mCoqWQhdHSoM", "W43cJY8hW60", "W4Smg8kqua", "W70+WOxcUGJcUCoHWOVdISo/pIK", "W4tcNSovW7rW", "W6qBWR4wW4S", "qsyky1S", "tgldU8oKlq", "WRJcG8okW6jP", "kCoLhuRcLG", "WO/cRSo/CSk4", "W67cHCoIW7zR", "W4FcSXOLW5u", "CWNdTu7dQq", "W6ZcL8kKgSod", "W4BcISoZdCoz", "WQJcOCk0W7xdUq", "WR7dLmkcWOZdJG", "WPNcHCojW7zV", "WRFdRmkeW4JcIq", "B8k1W7BdSSkRW4/dN8kXW5jfW4m", "WOvEW6tdRL4", "W6/cI8o4u8k3", "eHNdNXJdGq", "aNj+F8kc", "WOlcHCoKW43cGSoIc3tcQmonWRxcNmkX", "W5eJda4q", "W78lwmkLW7K", "W4BdT3JcH3e", "pmoAiCoDFq", "oCoRWQxcTSoQ", "zmkVW6TD", "WPJdNCkTWQWRWPNdQSoBm8oh", "z8kXDez7", "wCoEomkOvG", "o8o4WRmiCMRcI1Clth5Aza", "WOpdMmkpW5ZdJG", "W4hdUSo2f8on", "mXJdRL/dQW", "gJVdQgldKW", "W5RdKa7cKaJcVCo9W7rm"];
  return Jx = function() {
    return x;
  }, Jx();
}
function Z1() {
  const x = t(1096, "9$jf", 1160, 1096) + t(1128, "r7jh", 983, 1094) + c(-166, -167, -274, "0Ew[") + t(1330, "!Qll", 1195, 1246) + a(-413, -324, "A4rO", -331) + e(167, 99, 224, "XNjS") + e(255, 218, 250, "Ko]m") + i(-371, -415, "0Rc4", -485, -457) + i(-433, -460, "8xSn", -356, -420) + c(68, -25, 49, "X0yU") + c(42, 14, -51, "(nIH") + a(-252, -225, "oZjc", -179) + t(1266, "$Yp3", 1201, 1152) + a(-313, -383, "XeWu", -276) + c(-92, -57, -131, "yhGm") + t(1164, "XNjS", 1233, 1256) + a(-131, -298, "l[BY", -224) + e(360, 334, 276, "&[m$") + t(1197, "r7jh", 1147, 1189) + a(-224, -76, "btc$", -177) + t(1237, "$Yp3", 1038, 1121) + t(1254, "X0yU", 1358, 1286) + a(-257, -297, "QC[1", -296) + e(188, 304, 175, "r7jh") + c(-79, -157, -192, "h@SR") + a(-234, -188, "$Yp3", -289) + i(-314, -337, "$ptm", -455, -413) + t(1187, "$Yp3", 1108, 1132) + i(-549, -370, "!Qll", -515, -468) + e(300, 244, 382, "7ZB*") + e(297, 323, 394, "QC[1") + c(-11, -120, -156, "ORMw") + a(-361, -294, "!Qll", -270) + c(-146, -82, -166, "$ptm") + e(219, 239, 330, "QC[1") + a(-208, -321, "FQpS", -273) + t(1286, "UUMS", 1196, 1174) + t(1361, "Ko]m", 1375, 1301) + a(-305, -438, "Tb%7", -339) + e(171, 217, 282, "0Rc4") + t(1206, "pN6M", 1064, 1104) + i(-478, -637, "(nIH", -630, -530) + t(1112, "(nIH", 1109, 1157) + t(1098, "vSnC", 1086, 1105) + e(192, 161, 170, "9$jf") + e(262, 170, 284, "X0yU") + e(181, 121, 101, "0Rc4") + i(-534, -600, "&P01", -639, -546) + t(1320, "4IT%", 1372, 1308) + t(1145, "PeME", 1272, 1213) + c(-219, -179, -257, "0Ew[") + c(-109, -111, -46, "C(Qa") + t(1145, "7ZB*", 1213, 1210) + i(-325, -282, "h@SR", -363, -395) + e(373, 438, 268, "ORMw") + c(-90, -202, -103, "bnJh") + c(-11, -58, -27, "(nIH") + e(251, 255, 213, "pH($") + c(0, -19, 64, "!Qll") + e(195, 154, 131, "XeWu") + e(173, 209, 216, "Spc3") + a(-180, -310, "6NE&", -230) + e(198, 288, 95, "XNjS") + i(-500, -614, "yhGm", -512, -601) + i(-563, -626, "oZjc", -603, -587) + i(-502, -632, "0Ew[", -425, -516) + e(284, 243, 340, "(*%x") + e(193, 114, 185, "0Rc4") + e(351, 280, 432, "l[BY") + t(1218, "HqgA", 1214, 1188) + t(1302, "r7jh", 1353, 1310) + t(1179, "0Rc4", 1285, 1270) + c(-177, -114, -174, "pksH") + a(-200, -241, "r7jh", -168) + e(382, 367, 353, "HqgA") + c(-229, -170, -247, "XNjS") + i(-502, -518, "T7t*", -473, -561) + a(-252, -157, "(*%x", -212) + t(1340, "B(Tl", 1290, 1242) + c(-2, -41, -58, "QC[1") + i(-617, -471, "2fmc", -457, -541) + t(1153, "ORMw", 1111, 1183) + t(1083, "8xSn", 1044, 1082) + e(189, 79, 191, "btc$") + t(1076, "XNjS", 987, 1080) + i(-528, -443, "$ptm", -385, -473) + a(-333, -333, "6NE&", -328) + e(212, 249, 319, "btc$") + a(-162, -111, "PeME", -228) + a(-163, -273, "pH($", -214) + c(-268, -210, -206, "QC[1") + a(-445, -291, "l[BY", -365) + e(293, 216, 348, "6NE&") + e(385, 488, 377, "ORMw") + c(-286, -180, -147, "jHw]") + e(372, 376, 287, "Spc3") + e(353, 437, 342, "X0yU") + a(-280, -227, "2fmc", -253) + c(16, -63, -150, "PeME") + a(-285, -393, "Spc3", -318) + e(177, 245, 200, "l[BY") + t(1302, "FQpS", 1180, 1234) + e(209, 278, 256, "PeME") + i(-630, -600, "T7t*", -494, -606) + i(-451, -452, "bnJh", -379, -416) + a(-324, -129, "pksH", -215) + t(1197, "XNjS", 1105, 1090) + e(186, 292, 125, "0Ew[") + a(-235, -219, "cqn6", -259) + a(-177, -159, "l[BY", -255) + i(-586, -535, "h@SR", -392, -492) + c(-85, -104, -112, "$Yp3") + e(159, 228, 206, "vSnC") + t(1040, "XeWu", 1236, 1135) + c(-119, -2, 70, "oZjc") + t(1292, "QC[1", 1175, 1254) + t(1172, "vSnC", 1210, 1247) + i(-641, -557, "1D6k", -448, -547) + t(1113, "0Ew[", 1290, 1205) + t(1205, "pN6M", 1143, 1224) + t(1086, "UUMS", 1204, 1144) + c(54, -53, -146, "$Yp3") + c(-109, -168, -146, "pH($") + t(1298, "ee]5", 1187, 1266) + a(-192, -272, "X0yU", -300) + t(1280, "h@SR", 1165, 1236) + c(-33, -8, 18, "XNjS") + t(1247, "TOCw", 1243, 1164) + c(-200, -88, -111, "&[m$") + a(-292, -299, "Ko]m", -354) + t(1202, "XNjS", 1209, 1293) + t(1054, "TOCw", 1229, 1156) + t(1311, "pH($", 1300, 1287) + i(-429, -422, "jHw]", -616, -505) + i(-534, -583, "4IT%", -407, -499) + i(-310, -413, "FQpS", -410, -427) + a(-393, -276, "$ptm", -337) + e(363, 432, 301, "oZjc") + e(358, 332, 445, "T7t*") + a(-364, -283, "Tb%7", -355) + i(-429, -506, "oZjc", -562, -508) + i(-299, -370, "1D6k", -381, -408) + a(-172, -132, "HqgA", -156) + c(2, -21, -69, "7ZB*") + c(-173, -85, -41, "l[BY") + a(-201, -95, "8xSn", -184) + t(1323, "bnJh", 1213, 1272) + i(-563, -506, "T7t*", -607, -497) + c(-199, -160, -78, "HtNL") + t(1299, "B(Tl", 1158, 1249) + i(-543, -436, "XNjS", -534, -544) + e(376, 409, 369, "X0yU") + t(1150, "T7t*", 1094, 1160) + a(-255, -255, "pH($", -298) + t(1200, "&[m$", 1056, 1142) + c(-229, -127, -225, "TOCw") + a(-202, -288, "Spc3", -267) + e(328, 390, 432, "HqgA") + t(1239, "0Ew[", 1180, 1127) + t(1246, "HtNL", 1331, 1251) + i(-484, -364, "B(Tl", -524, -467) + c(-60, -121, -35, "QC[1") + c(-34, -131, -65, "2fmc") + i(-574, -555, "4IT%", -378, -463) + a(-258, -250, "pH($", -241) + i(-536, -388, "XNjS", -551, -485) + c(-128, -12, -63, "!Qll") + e(268, 303, 254, "(*%x") + a(-428, -342, "XNjS", -369) + e(340, 442, 255, "jHw]") + c(-205, -141, -130, "XNjS") + c(-44, -42, -147, "Ko]m") + i(-295, -270, "B(Tl", -357, -379) + c(-152, -186, -230, "6NE&") + e(211, 278, 327, "(nIH") + i(-416, -515, "(nIH", -531, -425) + t(1282, "UUMS", 1284, 1202) + e(370, 462, 254, "9$jf") + c(-201, -138, -138, "FQpS") + a(-84, -56, "!Qll", -161) + i(-385, -560, "Spc3", -546, -503) + i(-328, -537, "(*%x", -556, -443) + a(-329, -334, "&P01", -316) + i(-383, -390, "Spc3", -379, -426) + a(-451, -347, "A4rO", -382) + t(1298, "$ptm", 1247, 1218) + a(-268, -483, "6NE&", -376) + a(-313, -279, "jHw]", -343) + a(-151, -158, "QC[1", -171) + a(-335, -305, "9$jf", -258) + i(-402, -361, "A4rO", -422, -477) + a(-363, -315, "XNjS", -281) + a(-349, -367, "Tb%7", -388) + i(-379, -498, "8xSn", -521, -421) + i(-523, -631, "XNjS", -643, -562) + e(359, 402, 322, "XeWu") + a(-268, -272, "UUMS", -320) + c(-88, -200, -278, "X0yU") + t(1389, "HtNL", 1409, 1297) + a(-168, -65, "2fmc", -176), o = window[t(1006, "FQpS", 1093, 1088)](x);
  function t(u, g, h, l, C) {
    return we(l - 710, g);
  }
  function e(u, g, h, l, C) {
    return we(u - -212, l);
  }
  const n = window[i(-345, -488, "(nIH", -454, -405)](o), r = K1(n);
  function i(u, g, h, l, C) {
    return we(C - -974, h);
  }
  function a(u, g, h, l, C) {
    return we(l - -757, h);
  }
  const s = {};
  s[a(-239, -108, "btc$", -207)] = gc, s[a(-395, -265, "HqgA", -317)] = gl;
  function c(u, g, h, l, C) {
    return we(g - -576, l);
  }
  return window[i(-552, -477, "pN6M", -577, -491) + "o"][c(-203, -125, -181, "l[BY") + "e"][e(170, 224, 114, "pH($") + c(-43, -9, -110, "&P01")](i(-553, -541, "N4QE", -509, -575), r, s, !0, [e(381, 319, 293, "FQpS") + "pt"]);
}
async function R1(x) {
  const o = await Z1();
  function t(r, i, a, s, c) {
    return we(r - -30, a);
  }
  const e = {};
  e[n("1D6k", 1099, 981)] = gc;
  function n(r, i, a, s, c) {
    return we(a - 460, r);
  }
  return window[t(361, 404, "2fmc") + "o"][t(498, 415, "PeME") + "e"][n("X0yU", 921, 980) + "pt"](e, o, x);
}
function _x() {
  const x = ["W7WWW5u9eXZdHmoxlCowWQNcLdy", "WRRcG8kenSo7imkBW5XkW4O7na", "W7ZcICkaWQtcHubPemo9", "je8R", "W4ddNu7dGCkCnCoLq8oNhJ1e", "WQ7cT8kbWRhcUcX5W6ldTf8", "q8oxA2Gz", "Fr9QhCkwqSoTnmkAWOa", "mCkuWOtcHYpdLCk5WPqgWRWh", "W7uXW5vczhlcKSoSba", "x8kcWQHThtVdNW", "FM9bW5/cRq7cHG", "W4NdQSoNffpcMSoLW4xdS8kIWO4", "W4/dQ8oKf1FdUSoQW6VdMCk1WRhdKq", "c8k/W4/cNMRdLeJdLmkQxq", "WRRcHCknmSkrE8kOW41KW5C", "W4ldNuBcP8oGzCoTySog", "k8oNW5CbW47cJa0m", "WR7cJSkmm8o5j8ktW4LeW5Kefa", "W47dOCoJfLFcQSo7W5JdM8k6WQK", "WR1WW7KRySoOu8kruSkk", "W5faW7qXp8kux8o5FCkaWQ3dJH8", "WRJcJ8kymSoqW7KyWR/cUgm5", "h8kct0iQW7eAxa", "hmkhicGDW60bxNJcOW", "W4ZdOSoLefpdSCkKW57dN8k4WRFdMSoo", "l8oniSokW6/cOCoMw8oTWQxcOSo7ya", "gGeIWPZcOmkFW4BcMXa"];
  return _x = function() {
    return x;
  }, _x();
}
function tt(x, o) {
  const t = _x();
  return tt = function(e, n) {
    e = e - (3379 + 1 * 9973 + -12915);
    let r = t[e];
    if (tt.BhhLwm === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, h) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + h.charCodeAt(d % h.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      tt.RkcCtJ = u, x = arguments, tt.BhhLwm = !0;
    }
    const a = t[-7350 + -2 * 1371 + 3364 * 3], s = e + a, c = x[s];
    return c ? r = c : (tt.BlGEPl === void 0 && (tt.BlGEPl = !0), r = tt.RkcCtJ(r, n), x[s] = r), r;
  }, tt(x, o);
}
(function(x, o) {
  const t = x();
  function e(a, s, c, u, g) {
    return tt(a - -832, u);
  }
  function n(a, s, c, u, g) {
    return tt(c - 419, g);
  }
  function r(a, s, c, u, g) {
    return tt(g - -721, u);
  }
  function i(a, s, c, u, g) {
    return tt(u - 989, s);
  }
  for (; ; )
    try {
      if (parseInt(r(-288, -260, -270, "NuCm", -274)) / 1 * (-parseInt(r(-269, -297, -280, "6]gW", -283)) / 2) + -parseInt(e(-373, -379, -360, "b(Kj", -359)) / 3 * (parseInt(e(-386, -383, -392, "qF@R", -398)) / 4) + -parseInt(e(-378, -386, -373, "^[(Z", -388)) / 5 * (parseInt(n(887, 882, 881, 894, "#a@]")) / 6) + parseInt(n(875, 882, 880, 879, "(95a")) / 7 * (parseInt(r(-273, -263, -260, "*7]o", -264)) / 8) + -parseInt(e(-369, -382, -357, "*gK)", -357)) / 9 + parseInt(i(1431, "D^vJ", 1455, 1442, 1430)) / 10 * (parseInt(n(875, 869, 869, 855, "#a@]")) / 11) + -parseInt(n(869, 856, 861, 871, "Y7!r")) / 12 * (-parseInt(e(-376, -369, -383, "#a@]", -375)) / 13) === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(_x, 325903 * 1 + 3 * -1214 + 317617);
async function P1(x) {
  const { iv: o, key: t, message: e } = await O1(x), n = await R1(t), r = {};
  r[i(1324, 1333, "DSvS", 1326)] = n, r.iv = o, r[i(1337, 1317, "(95a", 1329) + "ge"] = e;
  function i(a, s, c, u, g) {
    return tt(u - 886, c);
  }
  return r;
}
function Be(x, o) {
  const t = Qx();
  return Be = function(e, n) {
    e = e - (-4182 * 1 + 1 * -8159 + 12562);
    let r = t[e];
    if (Be.BNIpgG === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", C = "";
        for (let m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (let m = 0, A = l.length; m < A; m++)
          C += "%" + ("00" + l.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const u = function(g, h) {
        let l = [], C = 0, m, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + h.charCodeAt(d % h.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      Be.PIrgTb = u, x = arguments, Be.BNIpgG = !0;
    }
    const a = t[-89 * -87 + 2 * 536 + 8815 * -1], s = e + a, c = x[s];
    return c ? r = c : (Be.Rwzfya === void 0 && (Be.Rwzfya = !0), r = Be.PIrgTb(r, n), x[s] = r), r;
  }, Be(x, o);
}
(function(x, o) {
  function t(s, c, u, g, h) {
    return Be(c - -520, g);
  }
  function e(s, c, u, g, h) {
    return Be(u - 509, s);
  }
  function n(s, c, u, g, h) {
    return Be(s - -695, h);
  }
  function r(s, c, u, g, h) {
    return Be(c - 504, s);
  }
  const i = x();
  function a(s, c, u, g, h) {
    return Be(h - -787, u);
  }
  for (; ; )
    try {
      if (-parseInt(r("WJFs", 737, 723, 727, 733)) / 1 * (parseInt(t(-296, -294, -305, "jI7*", -300)) / 2) + -parseInt(t(-265, -268, -252, "WU)[", -276)) / 3 * (parseInt(n(-450, -445, -458, -462, "peYf")) / 4) + parseInt(a(-572, -551, "peYf", -550, -559)) / 5 + parseInt(e("WX4R", 754, 746, 753, 748)) / 6 * (-parseInt(a(-552, -534, "4CD9", -561, -547)) / 7) + -parseInt(t(-293, -289, -285, "KoKq", -279)) / 8 + -parseInt(r("uI7)", 748, 738, 762, 749)) / 9 * (-parseInt(t(-289, -298, -312, "718b", -290)) / 10) + parseInt(e("%!iO", 725, 741, 725, 747)) / 11 === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Qx, 15 * -28853 + 652687 + 6836 * 32);
async function V1(x) {
  function o(a, s, c, u, g) {
    return Be(s - 404, c);
  }
  function t(a, s, c, u, g) {
    return Be(u - 513, g);
  }
  const e = await window[r(1200, 1203, "peYf", 1201, 1207) + "o"][r(1201, 1197, "4CD9", 1206, 1205) + "e"][t(758, 750, 757, 756, "YjX&") + "t"](o(623, 625, "M0Vv"), x);
  function n(a, s, c, u, g) {
    return Be(c - 233, s);
  }
  function r(a, s, c, u, g) {
    return Be(g - 969, c);
  }
  function i(a, s, c, u, g) {
    return Be(a - 697, c);
  }
  return Array[i(926, 935, "Od&&")](new Uint8Array(e))[r(1195, 1206, "718b", 1219, 1208)]((a) => a[t(756, 754, 747, 761, "F1oF") + r(1176, 1209, "JRWN", 1198, 1192)](5954 + 2969 * -2)[n(498, "pU8u", 482) + n(463, "mEDm", 460)](201 * -12 + 222 * -1 + 2636, "0"))[i(943, 942, "uI7)")]("");
}
function Qx() {
  const x = ["WPpdU8otW5Hv", "WQeaWOW", "W7ZdI8kewCkEzmklW6lcLcxdV2q", "exBdRmkIs8oqhG", "xJFcVNPHW4X+W7rSrwVcTNK", "W51tyN5O", "W6tcHCkkeCo+WOJcTY0", "W4tdMmotW4PNW58L", "WR/dKSkwjW", "W7RcI1BcSmkmWQlcPwzQWPVdG8odfq", "W7hcRttcQCo7", "WQXjtaSv", "WP3dVSk8dv7cSCoTWP8GmSopdq", "WPNdT8oECW/dTSo9WRW", "WQydWPnndmo+WQldMbZcSNldGCkF", "ymkuWOnCe8oKWQmQWOddHCo7WO/cOXC", "WPlcUuFcSSkv", "W79uW43dHNFdKXW/pt7cHI82", "W6NdNaW", "mmk5W7ygjeqHpSkDW5KjmG", "hCkoW4NdNueKW4xdTW", "WQtcQqNcM8kJWRniFmksWQRcUHS", "jSoBW68", "W4lcU8kBWP4xWQHmW59sFSoOz8ok", "nh9YWQe", "W7VdI8khwSkwySozW7FcSH7dQKiz", "fZBcJ8orm8kSyYXQWQmMW7tdPa", "CaZcNLhdPJJdRexcThjoWRxdMmoR", "emkOpWCaW7nb", "CW7cL1tdPZNdRJZcPwfWWQpdQa", "xJZdOZ3cTXpcSG", "WR3cH8oshSol", "WP58WOHLWOZcUdxcGa"];
  return Qx = function() {
    return x;
  }, Qx();
}
function ut(x, o) {
  var t = Ux();
  return ut = function(e, n) {
    e = e - (-1 * -9637 + 5832 + -14969);
    var r = t[e];
    if (ut.gsHaXs === void 0) {
      var i = function(g) {
        for (var h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", C = "", m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (var K = 0, D = l.length; K < D; K++)
          C += "%" + ("00" + l.charCodeAt(K).toString(16)).slice(-2);
        return decodeURIComponent(C);
      }, a = function(g, h) {
        var l = [], C = 0, m, A = "";
        g = i(g);
        var d;
        for (d = 0; d < 256; d++)
          l[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + l[d] + h.charCodeAt(d % h.length)) % 256, m = l[d], l[d] = l[C], l[C] = m;
        d = 0, C = 0;
        for (var v = 0; v < g.length; v++)
          d = (d + 1) % 256, C = (C + l[d]) % 256, m = l[d], l[d] = l[C], l[C] = m, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[d] + l[C]) % 256]);
        return A;
      };
      ut.uvCfzC = a, x = arguments, ut.gsHaXs = !0;
    }
    var s = t[4165 + 1 * -6573 + -86 * -28], c = e + s, u = x[c];
    return u ? r = u : (ut.qNfnbd === void 0 && (ut.qNfnbd = !0), r = ut.uvCfzC(r, n), x[c] = r), r;
  }, ut(x, o);
}
(function(x, o) {
  function t(s, c, u, g, h) {
    return ut(h - 143, s);
  }
  function e(s, c, u, g, h) {
    return ut(u - -75, c);
  }
  var n = x();
  function r(s, c, u, g, h) {
    return ut(c - 927, u);
  }
  function i(s, c, u, g, h) {
    return ut(u - 843, s);
  }
  for (; ; )
    try {
      var a = parseInt(e(433, "Svah", 425, 433, 420)) / 1 + -parseInt(e(435, "Mg@u", 439, 436, 449)) / 2 * (-parseInt(r(1450, 1448, "Qt$]", 1437, 1451)) / 3) + -parseInt(t("*t4[", 667, 657, 670, 662)) / 4 + parseInt(e(435, "(nDN", 427, 426, 427)) / 5 * (-parseInt(t("5]a$", 647, 650, 648, 644)) / 6) + -parseInt(i("cyT5", 1350, 1354, 1344, 1346)) / 7 + -parseInt(r(1449, 1442, "5]a$", 1445, 1436)) / 8 * (parseInt(t("Rk[A", 650, 665, 648, 656)) / 9) + -parseInt(e(428, "fCmO", 429, 440, 423)) / 10 * (-parseInt(e(436, "5I05", 433, 431, 444)) / 11);
      if (a === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ux, 1140514 + 147 * -5013 + 1 * 530227);
function Ux() {
  var x = ["jHaiW41mu1z8cSooW7vdrW", "W7GFW4pcUedcJh3dLSkE", "W4tdTwVcOZCpwCk5", "WQVdQqjJW4xcNmoXz8ovueC2", "c3NcISktWRKUjSoOw8ko", "F8oVpSolFSo7W6eLW6/dLq", "E8k0WOrMduVcLG", "AwPaWQyKqmkhdSkLWRKaWRy", "ASoBWQZcVCkJW659jSorymkoWO8", "ug7cQmkaWRxdOSopBmopWRBcKmou", "rfVdN8kEW7CTWRNdK10exSohka", "W6vlxtuzWQpcKmouW60", "krCjW48UaabniSos", "WRZcKmohB8kKWPZdV2RdICkIDSobW54", "W6DpWQ4OtCobESkVa8oMf8kgWRS", "W7mLDCkldmoKnsxcOmkR", "WOpcS8kGdSkIyCo6", "W7tdQmkZa8kTWQxdGh4ti8ovWRu", "d3ZcImksW49TrSkYCSkXwmo7WQpdHW", "bLTdW4VcLJe2WR3dHSkqbCklW4ac", "W65kiJaAWRxcKmoS", "jralW4HnuYX7cmoWW51N"];
  return Ux = function() {
    return x;
  }, Ux();
}
class T1 {
  constructor() {
    _(this, "samVersion", null);
    _(this, "isDetectorInitialized", !1);
    _(this, "isInCandidateSelection", !1);
    _(this, "lastImage", null);
    _(this, "bestImage", null);
    _(this, "detectionRecord", []);
    _(this, "candidateSelectionImages", []);
    _(this, "thresholds", null);
    _(this, "acceleration", null);
    _(this, "imagesWithTimestampForDuplicateDetection", new oi(sl));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await k1() ? ya.SIMD : ya.NO_SIMD;
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
    return o === Il;
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
    const e = o.length / ul, n = e / (9523 * -1 + -9579 + 1 * 19104), r = o.length / (-2168 * 3 + 1843 + 1 * 4663), i = await V1(o.slice(r - n, r + n)), a = {};
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
    var a = "./this.program", s = !(-7090 + -1 * 1658 + 8749), c = !(-1164 + 1 * 2543 + -689 * 2);
    s = typeof window == "object", c = typeof importScripts == "function";
    var u = "", g;
    (s || c) && (c ? u = self.location.href : document.currentScript && (u = document.currentScript.src), x && (u = x), 3235 * 3 + -1 * 348 + -9357 !== u.indexOf("blob:") ? u = u.substr(-1 * 3107 + -9525 + -2 * -6316, u.lastIndexOf("/") + (167 * -7 + 7295 + -6125)) : u = "", c && (g = function(I) {
      var f = new XMLHttpRequest();
      return f.open("GET", I, !(7382 * 1 + -1409 + -5972)), f.responseType = "arraybuffer", f.send(null), new Uint8Array(f.response);
    }));
    var h = t.printErr || console.warn.bind(console);
    for (i in r) r.hasOwnProperty(i) && (t[i] = r[i]);
    r = null, t.thisProgram && (a = t.thisProgram);
    var l;
    t.wasmBinary && (l = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && it("no native wasm support detected");
    var C, m = !(4713 + -1178 * 4);
    function A(I) {
      I || it("Assertion failed: undefined");
    }
    var d = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (919 * -4 + 2496 + 1180);
    function v(I, f, b) {
      var y = fe;
      if (-1 * 5651 + -132 * 8 + -1 * -6707 < b) {
        b = f + b - (-62 * 34 + -7686 + 1 * 9795);
        for (var S = -47 * 67 + -1 * -7156 + 1 * -4007; S < I.length; ++S) {
          var w = I.charCodeAt(S);
          if (-15905 + 2 * -45133 + -1 * -161467 <= w && 61945 + 29137 * 1 + -33739 >= w) {
            var H = I.charCodeAt(++S);
            w = 6562 + -109189 * 1 + 168163 + ((w & 1023) << -1518 + 4591 * 2 + 2 * -3827) | H & -8700 + 4586 * -2 + 18895;
          }
          if (-206 + 4413 * 1 + 24 * -170 >= w) {
            if (f >= b) break;
            y[f++] = w;
          } else {
            if (343 + -8868 * -1 + -7164 >= w) {
              if (f + (-9080 + -447 * 7 + 12210) >= b) break;
              y[f++] = 1 * 6379 + -51 * 151 + 1514 | w >> 3081 + -4 * 718 + -203;
            } else {
              if (1 * 113968 + 68 * -593 + 8109 * -1 >= w) {
                if (f + (4417 + 5 * -883) >= b) break;
                y[f++] = 224 | w >> 7 * 618 + 5013 + 3109 * -3;
              } else {
                if (f + (-7540 + 8597 * -1 + -5 * -3228) >= b) break;
                y[f++] = -1618 + 4380 * 1 + -2522 | w >> 5527 + 4201 * 1 + -2 * 4855, y[f++] = 1193 * 3 + 3325 + 88 * -77 | w >> -7 * -538 + 5704 + -2 * 4729 & 63;
              }
              y[f++] = 16 * -417 + 8513 + -571 * 3 | w >> 6 & 1 * -7783 + 1 * 314 + 7532;
            }
            y[f++] = -33 * -207 + 6925 + 3407 * -4 | w & 7004 + 12 * 331 + 1 * -10913;
          }
        }
        y[f] = 0;
      }
    }
    var K = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-19 * 258 + -1 * -4551 + 351);
    function D(I, f) {
      for (var b = I >> 1, y = b + f / (8496 + -361 * 11 + -4523 * 1); !(b >= y) && Ct[b]; ) ++b;
      if (b <<= 6637 + 9 * 306 + -9390, -991 * -7 + -3031 + -3874 < b - I && K) return K.decode(fe.subarray(I, b));
      for (b = 2490 + 3177 * -2 + -46 * -84, y = ""; ; ) {
        var S = Ke[I + 2 * b >> 1];
        if (2 * -4811 + 2744 + 19 * 362 == S || b == f / (-1678 + -1057 * -4 + -2548)) return y;
        ++b, y += String.fromCharCode(S);
      }
    }
    function E(I, f, b) {
      if (void (8740 + -1 * -3218 + 2 * -5979) === b && (b = 112686732 * 1 + -2264144961 + 4298941876), 8 * -671 + 4060 + -1310 * -1 > b) return 0;
      b -= -125 * 55 + -1 * 8454 + -15331 * -1;
      var y = f;
      b = b < 2 * I.length ? b / (4118 + 77 * -96 + 3276) : I.length;
      for (var S = 1 * 498 + -7413 + 6915; S < b; ++S) Ke[f >> 1] = I.charCodeAt(S), f += -4462 * -1 + 4785 + 9245 * -1;
      return Ke[f >> 1 * 569 + -1499 + 931] = 3 * 3273 + -6803 + -104 * 29, f - y;
    }
    function F(I) {
      return (7262 + -9599 * 1 + 2339) * I.length;
    }
    function k(I, f) {
      for (var b = -8749 + 25 * 187 + 97 * 42, y = ""; !(b >= f / (-5667 + -2421 * 3 + 12934)); ) {
        var S = ie[I + 4 * b >> 2];
        if (-5794 + -3341 * -2 + -888 == S) break;
        ++b, 21078 + -121787 * 1 + 1 * 166245 <= S ? (S -= -11154 + -3607 * 23 + 159651, y += String.fromCharCode(-4756 * -22 + 16766 + -138 * 479 | S >> -3521 + -3186 * -1 + -3 * -115, 80832 + -8287 * -2 + -41086 | S & -3617 + -1 * -3415 + 1225)) : y += String.fromCharCode(S);
      }
      return y;
    }
    function J(I, f, b) {
      if (void (-1202 * 3 + -8426 + 12032) === b && (b = 2147483647), -9514 * 1 + 1070 * -2 + 11658 > b) return 934 * 4 + 2337 * 3 + 11 * -977;
      var y = f;
      b = y + b - (-1 * -1814 + 25 * 386 + 1910 * -6);
      for (var S = 0; S < I.length; ++S) {
        var w = I.charCodeAt(S);
        if (-85244 + -4 * -35135 <= w && -33403 * -1 + -10145 * -4 + -16640 >= w) {
          var H = I.charCodeAt(++S);
          w = 30717 + 34819 * 1 + ((w & 1 * -5282 + 8238 + -1933) << -8957 + 9883 * -1 + 18850) | H & -507 * 7 + 11 * -689 + -12151 * -1;
        }
        if (ie[f >> 111 * -18 + 603 + 1397 * 1] = w, f += 6302 + -134 * 47, f + (-7 * -543 + 4837 + -8634) > b) break;
      }
      return ie[f >> 2] = 2887 * -2 + -944 * -5 + -2 * -527, f - y;
    }
    function le(I) {
      for (var f = 12742 + 1 * -12742, b = -9355 * -1 + -3933 + 1 * -5422; b < I.length; ++b) {
        var y = I.charCodeAt(b);
        1 * 102542 + 10565 + -57811 <= y && -20399 * -3 + -219 * 188 + 47 * 794 >= y && ++b, f += 19414 + 1294 * -15;
      }
      return f;
    }
    var U, Ie, fe, Ke, Ct, ie, Ze, Fe, rt;
    function Ye(I) {
      U = I, t.HEAP8 = Ie = new Int8Array(I), t.HEAP16 = Ke = new Int16Array(I), t.HEAP32 = ie = new Int32Array(I), t.HEAPU8 = fe = new Uint8Array(I), t.HEAPU16 = Ct = new Uint16Array(I), t.HEAPU32 = Ze = new Uint32Array(I), t.HEAPF32 = Fe = new Float32Array(I), t.HEAPF64 = rt = new Float64Array(I);
    }
    var pe = t.INITIAL_MEMORY || -16660907 * -1 + 23195610 + -23079301 * 1, Ve = {};
    Ve.initial = pe / (47921 + 1 * 125504 + -107889), Ve.maximum = 32768, t.wasmMemory ? C = t.wasmMemory : C = new WebAssembly.Memory(Ve), C && (U = C.buffer), pe = U.byteLength, Ye(U);
    var Xe = [], me = [], Te = [], je = [];
    function b0() {
      var I = t.preRun.shift();
      Xe.unshift(I);
    }
    var qe = 863 + 4 * 2398 + -51 * 205, vt = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function it(I) {
      throw t.onAbort && t.onAbort(I), h(I), m = !(-3237 * -3 + -1 * 7054 + 2657 * -1), I = new WebAssembly.RuntimeError("abort(" + I + "). Build with -s ASSERTIONS=1 for more info."), n(I), I;
    }
    function zt(I) {
      var f = ht;
      return String.prototype.startsWith ? f.startsWith(I) : -33 * -181 + 5931 + 3968 * -3 === f.indexOf(I);
    }
    function Wt() {
      return zt("data:application/octet-stream;base64,");
    }
    var ht = "sam.wasm";
    if (!Wt()) {
      var qt = ht;
      ht = t.locateFile ? t.locateFile(qt, u) : u + qt;
    }
    function pt() {
      try {
        if (l) return new Uint8Array(l);
        if (g) return g(ht);
        throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        it(I);
      }
    }
    function dg() {
      var I = {};
      return I.credentials = "same-origin", l || !s && !c || typeof fetch != "function" || zt("file://") ? Promise.resolve().then(pt) : fetch(ht, I).then(function(f) {
        if (!f.ok) throw "failed to load wasm binary file at '" + ht + "'";
        return f.arrayBuffer();
      }).catch(function() {
        return pt();
      });
    }
    function jn(I) {
      for (; -532 * -12 + -1 * 859 + 221 * -25 < I.length; ) {
        var f = I.shift();
        if (typeof f == "function") f(t);
        else {
          var b = f.Ba;
          typeof b == "number" ? f.ta === void 0 ? ho("v", b)() : ho("vi", b)(f.ta) : b(void (9461 + 1 * -9461) === f.ta ? null : f.ta);
        }
      }
    }
    function ho(I, f) {
      var b = [];
      return function() {
        b.length = arguments.length;
        for (var y = 1 * 9757 + -7827 + 1 * -1930; y < arguments.length; y++) b[y] = arguments[y];
        return b && b.length ? t["dynCall_" + I].apply(null, [f].concat(b)) : t["dynCall_" + I].call(null, f);
      };
    }
    function ug(I) {
      this.da = I - (-4685 + 1 * 4701), this.Oa = function(f) {
        ie[this.da + (-4213 + -7 * -603) >> 229 * 31 + 4073 * -2 + 1 * 1049] = f;
      }, this.La = function(f) {
        ie[this.da + (34 * -247 + -6537 + 14935) >> -1 * -7168 + 1095 + 11 * -751] = f;
      }, this.Ma = function() {
        ie[this.da + (-158 + 357 * 25 + -8763) >> -46 * 20 + 6 * 838 + -1 * 4106] = -1 * -4427 + 9804 + 133 * -107;
      }, this.Ka = function() {
        Ie[this.da + (19 * -227 + 9032 + 1 * -4707) >> 2672 * -3 + 401 * -18 + 7617 * 2] = 4136 + -47 * 102 + 7 * 94;
      }, this.Na = function() {
        Ie[this.da + (1 * -3679 + -191 * 5 + -3 * -1549) >> 329 * -1 + 5142 + -4813] = 0;
      }, this.Fa = function(f, b) {
        this.Oa(f), this.La(b), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Mn() {
      return 26 * -76 + 6017 * 1 + -4041 < Mn.xa;
    }
    function po(I) {
      switch (I) {
        case 17 * 573 + 3 * 1923 + 1 * -15509:
          return 3117 + 47 * -42 + -1143;
        case -359 * 1 + -3015 + 3376:
          return -3629 + 2 * -2225 + 8080;
        case 3504 + -3539 * 2 + 3578:
          return 1 * 7103 + 5977 + -13078;
        case 737 * -8 + 2 * -4675 + -1 * -15254:
          return 2951 + -268 * 11;
        default:
          throw new TypeError("Unknown type size: " + I);
      }
    }
    var di = void (1 * 3099 + -1 * -5495 + -8594 * 1);
    function Me(I) {
      for (var f = ""; fe[I]; ) f += di[fe[I++]];
      return f;
    }
    var A0 = {}, $t = {}, Jn = {};
    function mo(I) {
      if (void (-8885 * -1 + 6181 + 279 * -54) === I) return "_unknown";
      I = I.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = I.charCodeAt(0);
      return 3181 * 2 + 2 * 2286 + -10886 <= f && 57 >= f ? "_" + I : I;
    }
    function bo(I, f) {
      return I = mo(I), new Function("body", "return function " + I + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(f);
    }
    function Ao(I) {
      var f = Error, b = bo(I, function(y) {
        this.name = I, this.message = y, y = Error(y).stack, void (29 * -67 + 6063 + -4120) !== y && (this.stack = this.toString() + `
` + y.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return b.prototype = Object.create(f.prototype), b.prototype.constructor = b, b.prototype.toString = function() {
        return void (1839 + 142 * 12 + -1 * 3543) === this.message ? this.name : this.name + ": " + this.message;
      }, b;
    }
    var y0 = void (-3261 + 3065 * 1 + -49 * -4);
    function M(I) {
      throw new y0(I);
    }
    var ui = void 0;
    function _n(I) {
      throw new ui(I);
    }
    function v0(I, f, b) {
      function y(G) {
        G = b(G), G.length !== I.length && _n("Mismatched type converter count");
        for (var Z = 2946 + -1473 * 2; Z < I.length; ++Z) Ot(I[Z], G[Z]);
      }
      I.forEach(function(G) {
        Jn[G] = f;
      });
      var S = Array(f.length), w = [], H = -4308 + 186 * 39 + 491 * -6;
      f.forEach(function(G, Z) {
        $t.hasOwnProperty(G) ? S[Z] = $t[G] : (w.push(G), A0.hasOwnProperty(G) || (A0[G] = []), A0[G].push(function() {
          S[Z] = $t[G], ++H, H === w.length && y(S);
        }));
      }), 432 + -5 * 943 + -1 * -4283 === w.length && y(S);
    }
    function Ot(I, f, b) {
      if (b = b || {}, !("argPackAdvance" in f)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var y = f.name;
      if (I || M('type "' + y + '" must have a positive integer typeid pointer'), $t.hasOwnProperty(I)) {
        if (b.Ea) return;
        M("Cannot register type '" + y + "' twice");
      }
      $t[I] = f, delete Jn[I], A0.hasOwnProperty(I) && (f = A0[I], delete A0[I], f.forEach(function(S) {
        S();
      }));
    }
    function lg(I) {
      var f = {};
      return f.count = I.count, f.oa = I.oa, f.pa = I.pa, f.da = I.da, f.fa = I.fa, f.ga = I.ga, f.ha = I.ha, f;
    }
    function yo(I) {
      M(I.A.fa.ea.name + " instance already deleted");
    }
    var vo = !(6073 * -1 + 6780 + -706);
    function li() {
    }
    function Ii(I) {
      --I.count.value, -9550 + 11 * -546 + 15556 === I.count.value && (I.ga ? I.ha.na(I.ga) : I.fa.ea.na(I.da));
    }
    function tn(I) {
      return typeof FinalizationGroup > "u" ? (tn = function(f) {
        return f;
      }, I) : (vo = new FinalizationGroup(function(f) {
        for (var b = f.next(); !b.done; b = f.next()) b = b.value, b.da ? Ii(b) : console.warn("object already deleted: " + b.da);
      }), tn = function(f) {
        return vo.register(f, f.A, f.A), f;
      }, li = function(f) {
        vo.unregister(f.A);
      }, tn(I));
    }
    var nn = void (2725 + -25 * 109), xn = [];
    function Wo() {
      for (; xn.length; ) {
        var I = xn.pop();
        I.A.oa = !(1184 + -4347 * -1 + -5530), I.delete();
      }
    }
    function Ft() {
    }
    var fi = {};
    function Ig(I, f) {
      var b = t;
      if (void (99 * -101 + 137 * 11 + 8492) === b[I].ja) {
        var y = b[I];
        b[I] = function() {
          return b[I].ja.hasOwnProperty(arguments.length) || M("Function '" + f + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + b[I].ja + ")!"), b[I].ja[arguments.length].apply(this, arguments);
        }, b[I].ja = [], b[I].ja[y.ya] = y;
      }
    }
    function Ci(I, f, b) {
      t.hasOwnProperty(I) ? ((void (-2 * 2757 + 6545 + -1031) === b || void (-6 * -483 + 5416 + -8314) !== t[I].ja && void (-4763 * 2 + -9783 + 1 * 19309) !== t[I].ja[b]) && M("Cannot register public name '" + I + "' twice"), Ig(I, I), t.hasOwnProperty(b) && M("Cannot register multiple overloads of a function with the same number of arguments (" + b + ")!"), t[I].ja[b] = f) : (t[I] = f, b !== void 0 && (t[I].Ra = b));
    }
    function fg(I, f, b, y, S, w, H, G) {
      this.name = I, this.constructor = f, this.ma = b, this.na = y, this.ia = S, this.Ca = w, this.qa = H, this.Aa = G;
    }
    function Qn(I, f, b) {
      for (; f !== b; ) f.qa || M("Expected null or instance of " + b.name + ", got an instance of " + f.name), I = f.qa(I), f = f.ia;
      return I;
    }
    function Cg(I, f) {
      return f === null ? (this.ua && M("null is not a valid " + this.name), 4107 + -1 * 9687 + -4 * -1395) : (f.A || M('Cannot pass "' + S0(f) + '" as a ' + this.name), f.A.da || M("Cannot pass deleted object as a pointer of type " + this.name), Qn(f.A.da, f.A.fa.ea, this.ea));
    }
    function hg(I, f) {
      if (f === null) {
        if (this.ua && M("null is not a valid " + this.name), this.sa) {
          var b = this.Ha();
          return I !== null && I.push(this.na, b), b;
        }
        return 550 + -771 * 11 + 7931;
      }
      if (f.A || M('Cannot pass "' + S0(f) + '" as a ' + this.name), f.A.da || M("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && f.A.fa.ra && M("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name), b = Qn(f.A.da, f.A.fa.ea, this.ea), this.sa) switch (void (-1563 + -625 * -12 + 1 * -5937) === f.A.ga && M("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case 0:
          f.A.ha === this ? b = f.A.ga : M("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name);
          break;
        case 4004 * -1 + 318 * 13 + 3 * -43:
          b = f.A.ga;
          break;
        case -2819 + 2 * -2296 + 353 * 21:
          if (f.A.ha === this) b = f.A.ga;
          else {
            var y = f.clone();
            b = this.Ia(b, W0(function() {
              y.delete();
            })), I !== null && I.push(this.na, b);
          }
          break;
        default:
          M("Unsupporting sharing policy");
      }
      return b;
    }
    function pg(I, f) {
      return f === null ? (this.ua && M("null is not a valid " + this.name), 0) : (f.A || M('Cannot pass "' + S0(f) + '" as a ' + this.name), f.A.da || M("Cannot pass deleted object as a pointer of type " + this.name), f.A.fa.ra && M("Cannot convert argument of type " + f.A.fa.name + " to parameter type " + this.name), Qn(f.A.da, f.A.fa.ea, this.ea));
    }
    function Un(I) {
      return this.fromWireType(Ze[I >> 7 * -287 + -3325 + 5336]);
    }
    function hi(I, f, b) {
      return f === b ? I : b.ia === void 0 ? null : (I = hi(I, f, b.ia), I === null ? null : b.Aa(I));
    }
    var on = {};
    function mg(I, f) {
      for (void (-5541 * 1 + -7416 + -617 * -21) === f && M("ptr should not be undefined"); I.ia; ) f = I.qa(f), I = I.ia;
      return on[f];
    }
    function zn(I, f) {
      f.fa && f.da || _n("makeClassHandle requires ptr and ptrType"), !!f.ha != !!f.ga && _n("Both smartPtrType and smartPtr must be specified");
      var b = {};
      b.value = 1, f.count = b;
      var y = {};
      y.value = f;
      var S = {};
      return S.A = y, tn(Object.create(I, S));
    }
    function Kt(I, f, b, y) {
      this.name = I, this.ea = f, this.ua = b, this.ra = y, this.sa = !(-5134 + -1 * 6979 + 12114), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-9014 + -9358 * 1 + -6124 * -3), void (1 * -2659 + -5392 + 8051 * 1) !== f.ia ? this.toWireType = hg : (this.toWireType = y ? Cg : pg, this.ka = null);
    }
    function pi(I, f, b) {
      t.hasOwnProperty(I) || _n("Replacing nonexistant public symbol"), void (-4423 * 1 + -3 * -535 + 2818) !== t[I].ja && void (341 + 1 * 5799 + -2 * 3070) !== b ? t[I].ja[b] = f : (t[I] = f, t[I].ya = b);
    }
    function Yt(I, f) {
      I = Me(I);
      var b = ho(I, f);
      return typeof b != "function" && M("unknown function pointer with signature " + I + ": " + f), b;
    }
    var mi = void (-20 * 251 + 530 + -1 * -4490);
    function bi(I) {
      I = Ri(I);
      var f = Me(I);
      return Zt(I), f;
    }
    function rn(I, f) {
      function b(w) {
        S[w] || $t[w] || (Jn[w] ? Jn[w].forEach(b) : (y.push(w), S[w] = !(-3470 + 2 * 449 + 4 * 643)));
      }
      var y = [], S = {};
      throw f.forEach(b), new mi(I + ": " + y.map(bi).join([", "]));
    }
    function Ai(I, f) {
      for (var b = [], y = -6018 * 1 + 8729 + -1 * 2711; y < I; y++) b.push(ie[(f >> 1 * -2855 + -3726 + 6583) + y]);
      return b;
    }
    function qn(I) {
      for (; I.length; ) {
        var f = I.pop();
        I.pop()(f);
      }
    }
    function yi(I, f, b) {
      return I instanceof Object || M(b + ' with invalid "this": ' + I), I instanceof f.ea.constructor || M(b + ' incompatible with "this" of type ' + I.constructor.name), I.A.da || M("cannot call emscripten binding method " + b + " on deleted object"), Qn(I.A.da, I.A.fa.ea, f.ea);
    }
    var vi = {};
    vi.value = void (-147 + -21 * -7);
    var Wi = {};
    Wi.value = null;
    var Si = {};
    Si.value = !(-9226 + -813 * 1 + 1 * 10039);
    var wi = {};
    wi.value = !(4227 * 2 + 199 * -1 + -2 * 4127);
    var So = [], at = [{}, vi, Wi, Si, wi];
    function wo(I) {
      202 * 49 + 2958 + -12852 < I && -7414 * -1 + -7496 + 82 === --at[I].Ja && (at[I] = void (-3 * -1114 + -1187 * 4 + 38 * 37), So.push(I));
    }
    function W0(I) {
      switch (I) {
        case void (-8 * -1114 + -35 * 211 + 1527 * -1):
          return 3940 + 1 * -3939;
        case null:
          return 7094 + -1524 * -1 + -1436 * 6;
        case !(-431 * -2 + -4503 + 3641):
          return -779 * 8 + -2059 + 8294;
        case !(-4959 + 1 * -4360 + 2330 * 4):
          return 7681 + -1747 * 5 + 46 * 23;
        default:
          var f = So.length ? So.pop() : at.length, b = {};
          return b.Ja = 1, b.value = I, at[f] = b, f;
      }
    }
    function S0(I) {
      if (I === null) return "null";
      var f = typeof I;
      return f === "object" || f === "array" || f === "function" ? I.toString() : "" + I;
    }
    function bg(I, f) {
      switch (f) {
        case -578 + -19 * 173 + 1289 * 3:
          return function(b) {
            return this.fromWireType(Fe[b >> 14 * 403 + -2 * 3048 + 1 * 456]);
          };
        case -1675 + -9658 * -1 + -95 * 84:
          return function(b) {
            return this.fromWireType(rt[b >> -1e3 * 4 + 9178 + -5175]);
          };
        default:
          throw new TypeError("Unknown float type: " + I);
      }
    }
    function Ag(I) {
      var f = Function;
      if (!(f instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof f + " which is not a function");
      var b = bo(f.name || "unknownFunctionName", function() {
      });
      return b.prototype = f.prototype, b = new b(), I = f.apply(b, I), I instanceof Object ? I : b;
    }
    function yg(I, f, b) {
      switch (f) {
        case 4 * -33 + -51 * 107 + 5589:
          return b ? function(y) {
            return Ie[y];
          } : function(y) {
            return fe[y];
          };
        case 1:
          return b ? function(y) {
            return Ke[y >> -14132 + -14133 * -1];
          } : function(y) {
            return Ct[y >> -1 * 5849 + 149 * 53 + -2047];
          };
        case -73 * -55 + -8734 + 4721:
          return b ? function(y) {
            return ie[y >> -1 * 7893 + -407 * 13 + 13186];
          } : function(y) {
            return Ze[y >> 8011 + 8009 * -1];
          };
        default:
          throw new TypeError("Unknown integer type: " + I);
      }
    }
    function Bo(I) {
      return I || M("Cannot use deleted val. handle = " + I), at[I].value;
    }
    function Bi(I, f) {
      var b = $t[I];
      return void (-571 * 15 + -1724 + 1 * 10289) === b && M(f + " has unknown type " + bi(I)), b;
    }
    var vg = {}, Gi = {};
    function ki() {
      if (!Go) {
        var I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: a || "./this.program" }, f;
        for (f in Gi) I[f] = Gi[f];
        var b = [];
        for (f in I) b.push(f + "=" + I[f]);
        Go = b;
      }
      return Go;
    }
    var Go, Hi = [];
    function Oi(I) {
      var f = {}, b;
      for (b in I) (function(y) {
        var S = I[y];
        f[y] = typeof S == "function" ? function() {
          Hi.push(y);
          try {
            return S.apply(null, arguments);
          } finally {
            if (m) return;
            var w = Hi.pop();
            A(w === y);
          }
        } : S;
      })(b);
      return f;
    }
    for (var Ki = Array(7689 + 1 * -7433), $n = 9049 + 1197 * 8 + -149 * 125; 256 > $n; ++$n) Ki[$n] = String.fromCharCode($n);
    di = Ki, y0 = t.BindingError = Ao("BindingError"), ui = t.InternalError = Ao("InternalError"), Ft.prototype.isAliasOf = function(I) {
      if (!(this instanceof Ft && I instanceof Ft)) return !(1062 * -1 + -1946 + 1003 * 3);
      var f = this.A.fa.ea, b = this.A.da, y = I.A.fa.ea;
      for (I = I.A.da; f.ia; ) b = f.qa(b), f = f.ia;
      for (; y.ia; ) I = y.qa(I), y = y.ia;
      return f === y && b === I;
    }, Ft.prototype.clone = function() {
      if (this.A.da || yo(this), this.A.pa) return this.A.count.value += 1 * 3443 + 2 * 1197 + -5836, this;
      var I = tn(Object.create(Object.getPrototypeOf(this), { A: { value: lg(this.A) } }));
      return I.A.count.value += 73 * -1 + -6396 + 6470, I.A.oa = !(4215 * -1 + 2927 + 1289), I;
    }, Ft.prototype.delete = function() {
      this.A.da || yo(this), this.A.oa && !this.A.pa && M("Object already scheduled for deletion"), li(this), Ii(this.A), this.A.pa || (this.A.ga = void (-6609 + -2 * -3713 + -817 * 1), this.A.da = void (599 * 1 + -1 * -4301 + -4900));
    }, Ft.prototype.isDeleted = function() {
      return !this.A.da;
    }, Ft.prototype.deleteLater = function() {
      return this.A.da || yo(this), this.A.oa && !this.A.pa && M("Object already scheduled for deletion"), xn.push(this), 6333 + -2 * 3166 === xn.length && nn && nn(Wo), this.A.oa = !(9962 * -1 + 563 + -9399 * -1), this;
    }, Kt.prototype.Da = function(I) {
      return this.wa && (I = this.wa(I)), I;
    }, Kt.prototype.va = function(I) {
      this.na && this.na(I);
    }, Kt.prototype.argPackAdvance = -8541 + -5 * 962 + 13359, Kt.prototype.readValueFromPointer = Un, Kt.prototype.deleteObject = function(I) {
      I !== null && I.delete();
    }, Kt.prototype.fromWireType = function(I) {
      function f() {
        return this.sa ? zn(this.ea.ma, { fa: this.Ga, da: b, ha: this, ga: I }) : zn(this.ea.ma, { fa: this, da: I });
      }
      var b = this.Da(I);
      if (!b) return this.va(I), null;
      var y = mg(this.ea, b);
      if (void (9246 + -6586 * 1 + 76 * -35) !== y)
        return -6988 + -2 * -3494 === y.A.count.value ? (y.A.da = b, y.A.ga = I, y.clone()) : (y = y.clone(), this.va(I), y);
      if (y = this.ea.Ca(b), y = fi[y], !y) return f.call(this);
      y = this.ra ? y.za : y.pointerType;
      var S = hi(b, this.ea, y.ea);
      return S === null ? f.call(this) : this.sa ? zn(y.ea.ma, { fa: y, da: S, ha: this, ga: I }) : zn(y.ea.ma, { fa: y, da: S });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(on).length;
    }, t.getLiveInheritedInstances = function() {
      var I = [], f;
      for (f in on) on.hasOwnProperty(f) && I.push(on[f]);
      return I;
    }, t.flushPendingDeletes = Wo, t.setDelayFunction = function(I) {
      nn = I, xn.length && nn && nn(Wo);
    }, mi = t.UnboundTypeError = Ao("UnboundTypeError"), t.count_emval_handles = function() {
      for (var I = 2212 + 14 * -158, f = 5; f < at.length; ++f) void (8567 * 1 + -1 * -3683 + -12250) !== at[f] && ++I;
      return I;
    }, t.get_first_emval = function() {
      for (var I = -2900 + 1663 * -4 + 9557; I < at.length; ++I) if (void (2105 + -2105 * 1) !== at[I]) return at[I];
      return null;
    }, me.push({ Ba: function() {
      Zi();
    } });
    var Wg = { z: function(I) {
      return ex(I + (818 * -7 + -4895 + 10637)) + (-7994 + 4 * 22 + 7922);
    }, u: function(I, f, b) {
      throw new ug(I).Fa(f, b), "uncaught_exception" in Mn ? Mn.xa++ : Mn.xa = 1572 * -5 + 78 * -75 + 1 * 13711, I;
    }, w: function(I, f, b, y, S) {
      var w = po(b);
      f = Me(f), Ot(I, { name: f, fromWireType: function(H) {
        return !!H;
      }, toWireType: function(H, G) {
        return G ? y : S;
      }, argPackAdvance: 8, readValueFromPointer: function(H) {
        if (-1146 + 1 * -6918 + 8065 * 1 === b) var G = Ie;
        else if (449 * 3 + -1 * 6277 + 4932 === b) G = Ke;
        else if (9359 + 21 * 187 + -458 * 29 === b) G = ie;
        else throw new TypeError("Unknown boolean type size: " + f);
        return this.fromWireType(G[H >> w]);
      }, ka: null });
    }, h: function(I, f, b, y, S, w, H, G, Z, R, P, V, $) {
      P = Me(P), w = Yt(S, w), G && (G = Yt(H, G)), R && (R = Yt(Z, R)), $ = Yt(V, $);
      var be = mo(P);
      Ci(be, function() {
        rn("Cannot construct " + P + " due to unbound types", [y]);
      }), v0([I, f, b], y ? [y] : [], function(T) {
        if (T = T[36 * 17 + -9094 + 8482], y) var St = T.ea, Ee = St.ma;
        else Ee = Ft.prototype;
        T = bo(be, function() {
          if (Object.getPrototypeOf(this) !== w0) throw new y0("Use 'new' to construct " + P);
          if (void (1 * -4612 + -3765 + 8377) === B0.la) throw new y0(P + " has no accessible constructor");
          var Vi = B0.la[arguments.length];
          if (void (4564 * -1 + -2250 + 2 * 3407) === Vi) throw new y0("Tried to invoke ctor of " + P + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(B0.la).toString() + ") parameters instead!");
          return Vi.apply(this, arguments);
        });
        var $e = {};
        $e.value = T;
        var e0 = {};
        e0.constructor = $e;
        var w0 = Object.create(Ee, e0);
        T.prototype = w0;
        var B0 = new fg(P, T, w0, $, St, w, G, R);
        St = new Kt(P, B0, !(-132 + 137 * -44 + 6160), !(4247 * -1 + 1 * -1117 + 5365)), Ee = new Kt(P + "*", B0, !(-7820 + 1 * 7821), !(273 * -12 + 11 * -831 + 12418));
        var Pi = new Kt(P + " const*", B0, !(-1917 * 5 + -29 + 9615), !(8626 * -1 + -59 * -163 + -1 * 991)), Ho = {};
        return Ho.pointerType = Ee, Ho.za = Pi, fi[I] = Ho, pi(be, T), [St, Ee, Pi];
      });
    }, g: function(I, f, b, y, S, w) {
      A(4833 + 27 * -179 < f);
      var H = Ai(f, b);
      S = Yt(y, S);
      var G = [w], Z = [];
      v0([], [I], function(R) {
        R = R[4523 + -13 * 599 + -3 * -1088];
        var P = "constructor " + R.name;
        if (void (48 * 95 + -9774 + 5214) === R.ea.la && (R.ea.la = []), void (-5059 * 1 + -2448 + 7507) !== R.ea.la[f - (-557 * 1 + 1644 + -1086)]) throw new y0("Cannot register multiple constructors with identical number of parameters (" + (f - (-37 * 2 + 7317 + -2414 * 3)) + ") for class '" + R.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return R.ea.la[f - 1] = function() {
          rn("Cannot construct " + R.name + " due to unbound types", H);
        }, v0([], H, function(V) {
          return R.ea.la[f - (115 * 31 + 1474 + -22 * 229)] = function() {
            arguments.length !== f - (6310 + -1 * 2071 + -2119 * 2) && M(P + " called with " + arguments.length + " arguments, expected " + (f - (-1052 * 7 + -2669 * 1 + -1 * -10034))), Z.length = -1678 * -5 + -5438 * 1 + -2952, G.length = f;
            for (var $ = -4284 + -747 * -6 + 197 * -1; $ < f; ++$) G[$] = V[$].toWireType(Z, arguments[$ - (-1332 + 43 * 31)]);
            return $ = S.apply(null, G), qn(Z), V[2 * -1046 + 3730 + -1638].fromWireType($);
          }, [];
        }), [];
      });
    }, b: function(I, f, b, y, S, w, H, G, Z, R) {
      f = Me(f), S = Yt(y, S), v0([], [I], function(P) {
        P = P[4799 + 4799 * -1];
        var V = P.name + "." + f, $ = { get: function() {
          rn("Cannot access " + V + " due to unbound types", [b, H]);
        }, enumerable: !(-13 * 143 + -1036 + -965 * -3), configurable: !(-11830 + 338 * 35) };
        return Z ? $.set = function() {
          rn("Cannot access " + V + " due to unbound types", [b, H]);
        } : $.set = function() {
          M(V + " is a read-only property");
        }, Object.defineProperty(P.ea.ma, f, $), v0([], Z ? [b, H] : [b], function(be) {
          var T = be[0], St = { get: function() {
            var $e = yi(this, P, V + " getter");
            return T.fromWireType(S(w, $e));
          }, enumerable: !(-9947 + -933 * -4 + -55 * -113) };
          if (Z) {
            Z = Yt(G, Z);
            var Ee = be[8686 + -3457 * -2 + -15599];
            St.set = function($e) {
              var e0 = yi(this, P, V + " setter"), w0 = [];
              Z(R, e0, Ee.toWireType(w0, $e)), qn(w0);
            };
          }
          return Object.defineProperty(P.ea.ma, f, St), [];
        }), [];
      });
    }, v: function(I, f) {
      f = Me(f), Ot(I, { name: f, fromWireType: function(b) {
        var y = at[b].value;
        return wo(b), y;
      }, toWireType: function(b, y) {
        return W0(y);
      }, argPackAdvance: 8, readValueFromPointer: Un, ka: null });
    }, m: function(I, f, b) {
      b = po(b), f = Me(f), Ot(I, { name: f, fromWireType: function(y) {
        return y;
      }, toWireType: function(y, S) {
        if (typeof S != "number" && typeof S != "boolean") throw new TypeError('Cannot convert "' + S0(S) + '" to ' + this.name);
        return S;
      }, argPackAdvance: 8, readValueFromPointer: bg(f, b), ka: null });
    }, c: function(I, f, b, y, S, w) {
      var H = Ai(f, b);
      I = Me(I), S = Yt(y, S), Ci(I, function() {
        rn("Cannot call " + I + " due to unbound types", H);
      }, f - (-3537 + 1294 * -6 + 11302)), v0([], H, function(G) {
        var Z = I, R = I;
        G = [G[-674 * -3 + -1451 * 5 + 1 * 5233], null].concat(G.slice(-2272 + 541 * -10 + 7683));
        var P = S, V = G.length;
        1603 + 8 * 1189 + -11113 > V && M("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var $ = G[5353 + -39 * -69 + -8043] !== null && !(-8126 + -3 * -2709), be = !(-6961 * 1 + 1 * 8955 + -1993), T = 4877 + -382 * 24 + 4292; T < G.length; ++T) if (G[T] !== null && void (1955 + 31 * 77 + 26 * -167) === G[T].ka) {
          be = !(-2044 + 3788 * -1 + 5832);
          break;
        }
        var St = G[-29 * 35 + -177 * -1 + 838].name !== "void", Ee = "", $e = "";
        for (T = 197 * -45 + -326 * -22 + -1693 * -1; T < V - 2; ++T) Ee += (-4541 + 4 * -477 + 6449 * 1 !== T ? ", " : "") + "arg" + T, $e += (-61 * 161 + 96 + 9725 !== T ? ", " : "") + "arg" + T + "Wired";
        R = "return function " + mo(R) + "(" + Ee + `) {
if (arguments.length !== ` + (V - (-1479 * -5 + 2 * -692 + 3 * -2003)) + `) {
throwBindingError('function ` + R + " called with ' + arguments.length + ' arguments, expected " + (V - (-19 * 145 + 7724 + -4967)) + ` args!');
}
`, be && (R += `var destructors = [];
`);
        var e0 = be ? "destructors" : "null";
        for (Ee = "throwBindingError invoker fn runDestructors retType classParam".split(" "), P = [M, P, w, qn, G[79 * 59 + -6852 + 2191 * 1], G[-5 * 213 + -3121 * 1 + 4187]], $ && (R += "var thisWired = classParam.toWireType(" + e0 + `, this);
`), T = -2762 * 1 + -3853 * 1 + -735 * -9; T < V - (-5 * -857 + -9838 * -1 + -9 * 1569); ++T) R += "var arg" + T + "Wired = argType" + T + ".toWireType(" + e0 + ", arg" + T + "); // " + G[T + (-3368 + 2 * -2423 + 8216)].name + `
`, Ee.push("argType" + T), P.push(G[T + (-919 + 1 * 345 + 576)]);
        if ($ && ($e = "thisWired" + (-5664 + 944 * 6 < $e.length ? ", " : "") + $e), R += (St ? "var rv = " : "") + "invoker(fn" + (173 * 14 + 73 * -29 + -1 * 305 < $e.length ? ", " : "") + $e + `);
`, be) R += `runDestructors(destructors);
`;
        else
          for (T = $ ? 14987 + 7493 * -2 : 6566 + -1094 * 6; T < G.length; ++T) V = 3505 + -1168 * 3 === T ? "thisWired" : "arg" + (T - 2) + "Wired", G[T].ka !== null && (R += V + "_dtor(" + V + "); // " + G[T].name + `
`, Ee.push(V + "_dtor"), P.push(G[T].ka));
        return St && (R += `var ret = retType.fromWireType(rv);
return ret;
`), Ee.push(R + `}
`), G = Ag(Ee).apply(null, P), pi(Z, G, f - (-19 * -474 + -173 * -37 + -15406)), [];
      });
    }, e: function(I, f, b, y, S) {
      function w(R) {
        return R;
      }
      f = Me(f), -(-2 * 4052 + -934 + 3 * 3013) === S && (S = -574089736 + -6555758855 + -12666093 * -902);
      var H = po(b);
      if (11 * -113 + 2377 * 3 + -2 * 2944 === y) {
        var G = 32 - 8 * b;
        w = function(R) {
          return R << G >>> G;
        };
      }
      var Z = -(1 * -1126 + -401 * -19 + -6492) != f.indexOf("unsigned");
      Ot(I, { name: f, fromWireType: w, toWireType: function(R, P) {
        if (typeof P != "number" && typeof P != "boolean") throw new TypeError('Cannot convert "' + S0(P) + '" to ' + this.name);
        if (P < y || P > S) throw new TypeError('Passing a number "' + S0(P) + '" from JS side to C/C++ side to an argument of type "' + f + '", which is outside the valid range [' + y + ", " + S + "]!");
        return Z ? P >>> -4363 * 2 + -7678 + 16404 : P | 0;
      }, argPackAdvance: 8, readValueFromPointer: yg(f, H, 1 * -7109 + -1 * -5266 + 1843 !== y), ka: null });
    }, d: function(I, f, b) {
      function y(G) {
        G >>= 2001 + 6 * 709 + 481 * -13;
        var Z = Ze;
        return new S(U, Z[G + (5 * 463 + -7597 + -9 * -587)], Z[G]);
      }
      var S = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][f];
      b = Me(b);
      var w = {};
      w.name = b, w.fromWireType = y, w.argPackAdvance = 8, w.readValueFromPointer = y;
      var H = {};
      H.Ea = !(-1 * 8558 + -2 * -3623 + 1312), Ot(I, w, H);
    }, n: function(I, f) {
      f = Me(f);
      var b = f === "std::string";
      Ot(I, { name: f, fromWireType: function(y) {
        var S = Ze[y >> 2];
        if (b) for (var w = y + (4 * -1117 + -7837 + -12309 * -1), H = 309 + -3 * 2242 + 6417; H <= S; ++H) {
          var G = y + 4 + H;
          if (H == S || 5 * -138 + 845 + -5 * 31 == fe[G]) {
            if (w) {
              var Z = w, R = fe, P = Z + (G - w);
              for (w = Z; R[w] && !(w >= P); ) ++w;
              if (1 * 8956 + -166 * 2 + -8608 < w - Z && R.subarray && d) Z = d.decode(R.subarray(Z, w));
              else {
                for (P = ""; Z < w; ) {
                  var V = R[Z++];
                  if (V & 1459 + -1 * -9782 + 11113 * -1) {
                    var $ = R[Z++] & 63;
                    if (-10 * 832 + 7533 + 979 == (V & -92 * -8 + -1 * 7094 + 6582)) P += String.fromCharCode((V & 1 * -5383 + 6458 + 348 * -3) << -6146 + -2 * -4799 + 1 * -3446 | $);
                    else {
                      var be = R[Z++] & 63;
                      V = -14 * -289 + -9898 + 6076 == (V & 8811 + 4121 * -1 + -4450) ? (V & -8369 + -3 * -776 + 4 * 1514) << -2214 + -2226 * -1 | $ << 6 | be : (V & -49 * 153 + -7207 + 14711) << 634 + 22 * -28 | $ << 12 | be << 7737 * -1 + 149 * -23 + 11170 | R[Z++] & 8298 + 45 * -183, -3274 * 14 + 151 * 151 + 7 * 12653 > V ? P += String.fromCharCode(V) : (V -= 95295 + 29759 * -1, P += String.fromCharCode(-21358 * 2 + 170 * 295 + 47862 | V >> 907 * -6 + 4689 + 763, 56320 | V & 744 * 11 + 2357 * 1 + 2 * -4759));
                    }
                  } else P += String.fromCharCode(V);
                }
                Z = P;
              }
            } else Z = "";
            if (void (4764 + -4764 * 1) === T) var T = Z;
            else T += String.fromCharCode(1 * 2936 + 1 * 4675 + 43 * -177), T += Z;
            w = G + 1;
          }
        }
        else {
          for (T = Array(S), H = -6593 + 74 * 6 + 6149; H < S; ++H) T[H] = String.fromCharCode(fe[y + (5653 * -1 + 5489 + 6 * 28) + H]);
          T = T.join("");
        }
        return Zt(y), T;
      }, toWireType: function(y, S) {
        S instanceof ArrayBuffer && (S = new Uint8Array(S));
        var w = typeof S == "string";
        w || S instanceof Uint8Array || S instanceof Uint8ClampedArray || S instanceof Int8Array || M("Cannot pass non-string to std::string");
        var H = (b && w ? function() {
          for (var R = 4608 + -1 * 4608, P = 15654 + 2 * -7827; P < S.length; ++P) {
            var V = S.charCodeAt(P);
            -13583 * 2 + 2409 + -4709 * -17 <= V && -8 * 2648 + -44341 + 4 * 30717 >= V && (V = -71256 * -1 + 112073 + -117793 + ((V & 1023) << 10) | S.charCodeAt(++P) & 1023), 3 * 349 + -7157 + 6237 >= V ? ++R : R = -15574 + -1 * -17621 >= V ? R + (5845 * -1 + 787 * 8 + -449) : -211 * -564 + -88 * 864 + 22563 >= V ? R + (-547 * -11 + 7969 + -13983) : R + (35 * 172 + -1544 + -4472);
          }
          return R;
        } : function() {
          return S.length;
        })(), G = ex(-4 * -831 + -1421 * 1 + -1899 + H + (-1231 * 5 + 98 * -20 + -4 * -2029));
        if (Ze[G >> 8102 * -1 + -9655 + -2537 * -7] = H, b && w) v(S, G + (-1416 + 3 * -777 + 3751), H + (2834 * 3 + 223 * -25 + -2926));
        else if (w) for (w = 823 + -8802 * -1 + -9625; w < H; ++w) {
          var Z = S.charCodeAt(w);
          255 < Z && (Zt(G), M("String has UTF-16 code units that do not fit in 8 bits")), fe[G + (12530 + 1 * -12526) + w] = Z;
        }
        else
          for (w = -43 * 19 + 27 * -1 + -422 * -2; w < H; ++w) fe[G + (-2 * -2164 + -1531 * 1 + 133 * -21) + w] = S[w];
        return y !== null && y.push(Zt, G), G;
      }, argPackAdvance: 8, readValueFromPointer: Un, ka: function(y) {
        Zt(y);
      } });
    }, j: function(I, f, b) {
      if (b = Me(b), -67 * 5 + -8715 + 9052 === f) var y = D, S = E, w = F, H = function() {
        return Ct;
      }, G = 6280 + 1 * 3759 + -10038;
      else -5536 + -1 * 7082 + 12622 === f && (y = k, S = J, w = le, H = function() {
        return Ze;
      }, G = 370 + -23 * 7 + -207);
      Ot(I, { name: b, fromWireType: function(Z) {
        for (var R = Ze[Z >> 958 * -2 + -1 * -6962 + -5044], P = H(), V, $ = Z + (-6046 + -243 * -11 + 11 * 307), be = 982 * -6 + -3759 + -1 * -9651; be <= R; ++be) {
          var T = Z + 4 + be * f;
          (be == R || P[T >> G] == 0) && ($ = y($, T - $), void (5975 + -1 * 6051 + 76) === V ? V = $ : (V += String.fromCharCode(-5020 * -1 + 1361 + 709 * -9), V += $), $ = T + f);
        }
        return Zt(Z), V;
      }, toWireType: function(Z, R) {
        typeof R != "string" && M("Cannot pass non-string to C++ string type " + b);
        var P = w(R), V = ex(1143 * -8 + 1343 + 7805 + P + f);
        return Ze[V >> 1 * -7833 + -4019 + 11854] = P >> G, S(R, V + (4 * 361 + 25 * -10 + -1190), P + f), Z !== null && Z.push(Zt, V), V;
      }, argPackAdvance: 8, readValueFromPointer: Un, ka: function(Z) {
        Zt(Z);
      } });
    }, x: function(I, f) {
      f = Me(f);
      var b = {};
      b.Qa = !(-629 + -17 * -37), b.name = f, b.argPackAdvance = 0, b.fromWireType = function() {
      }, b.toWireType = function() {
      }, Ot(I, b);
    }, k: function(I, f, b) {
      I = Bo(I), f = Bi(f, "emval::as");
      var y = [], S = W0(y);
      return ie[b >> 2186 + 2 * -1092] = S, f.toWireType(y, I);
    }, i: wo, l: function(I, f) {
      return I = Bo(I), f = Bo(f), W0(I[f]);
    }, p: function(I) {
      var f = vg[I];
      return W0(void (-11 * 544 + 289 * 3 + 5117) === f ? Me(I) : f);
    }, o: function(I) {
      qn(at[I].value), wo(I);
    }, y: function(I, f) {
      return I = Bi(I, "_emval_take_value"), I = I.readValueFromPointer(f), W0(I);
    }, f: function() {
      it();
    }, q: function(I, f, b) {
      fe.copyWithin(I, f, f + b);
    }, r: function(I) {
      I >>>= 0;
      var f = fe.length;
      if (142656096 + 12272 * 163366 < I) return !(-1 * 12 + 71 * -79 + 5622);
      for (var b = -3117 * 1 + -1 * 959 + 4077; 1287 + -71 * 9 + 7 * -92 >= b; b *= -5 * 1713 + -135 * 4 + -1301 * -7) {
        var y = f * (1 + 0.2 / b);
        y = Math.min(y, I + (-128161757 * -1 + 11696027 + 19597244 * -2)), y = Math.max(16777216, I, y), 1 * 2963 + 9712 + -12675 < y % 65536 && (y += -115102 + 3279 * 34 + 69152 - y % (117984 + -33 * -244 + -60500));
        e: {
          try {
            C.grow(Math.min(-3083113852 + 2740474 * -1222 + -4 * -2144864182, y) - U.byteLength + (4061 + -7 * -8782) >>> 16), Ye(C.buffer);
            var S = -12381 + 41 * 302;
            break e;
          } catch {
          }
          S = void (241 * 13 + 412 * 4 + 683 * -7);
        }
        if (S) return !(3120 + 52 * -60);
      }
      return !(4189 + 1 * 7577 + -11765);
    }, s: function(I, f) {
      var b = 0;
      return ki().forEach(function(y, S) {
        var w = f + b;
        for (S = ie[I + (-383 + 145 * 1 + 242) * S >> 2846 + -78 * 41 + 354] = w, w = 8006 + 2 * -1626 + -2 * 2377; w < y.length; ++w) Ie[S++ >> -4899 + -1633 * -3] = y.charCodeAt(w);
        Ie[S >> 0] = -4847 * 1 + -9877 + 14724, b += y.length + (1 * 3160 + -5249 + -2 * -1045);
      }), 1579 * 5 + 1122 + -71 * 127;
    }, t: function(I, f) {
      var b = ki();
      ie[I >> 2] = b.length;
      var y = 9513 * -1 + 7290 + 2223;
      return b.forEach(function(S) {
        y += S.length + (-528 + -7694 * -1 + -7165);
      }), ie[f >> -1381 + 3 * 461] = y, -1 * -7346 + -13 * 553 + -157;
    }, a: C };
    (function() {
      function I(H) {
        H = H.exports, H = Oi(H), t.asm = H, qe--, t.monitorRunDependencies && t.monitorRunDependencies(qe), qe == 0 && vt && (H = vt, vt = null, H());
      }
      function f(H) {
        I(H.instance);
      }
      function b(H) {
        return dg().then(function(G) {
          return WebAssembly.instantiate(G, S);
        }).then(H, function(G) {
          h("failed to asynchronously prepare wasm: " + G), it(G);
        });
      }
      var y = {};
      y.a = Wg;
      var S = y;
      if (qe++, t.monitorRunDependencies && t.monitorRunDependencies(qe), t.instantiateWasm) try {
        var w = t.instantiateWasm(S, I);
        return w = Oi(w);
      } catch (H) {
        return h("Module.instantiateWasm callback failed with error: " + H), !1;
      }
      return function() {
        if (l || typeof WebAssembly.instantiateStreaming != "function" || Wt() || zt("file://") || typeof fetch != "function") return b(f);
        var H = {};
        H.credentials = "same-origin", fetch(ht, H).then(function(G) {
          return WebAssembly.instantiateStreaming(G, S).then(f, function(Z) {
            return h("wasm streaming compile failed: " + Z), h("falling back to ArrayBuffer instantiation"), b(f);
          });
        });
      }(), {};
    })();
    var Zi = t.___wasm_call_ctors = function() {
      return (Zi = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, ex = t._malloc = function() {
      return (ex = t._malloc = t.asm.C).apply(null, arguments);
    }, Zt = t._free = function() {
      return (Zt = t._free = t.asm.D).apply(null, arguments);
    }, Ri = t.___getTypeName = function() {
      return (Ri = t.___getTypeName = t.asm.E).apply(null, arguments);
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
    vt = function I() {
      tx || ko(), tx || (vt = I);
    };
    function ko() {
      function I() {
        if (!tx && (tx = !(1 * 8057 + 6746 + -14803), t.calledRun = !(4705 + 941 * -5), !m)) {
          if (jn(me), jn(Te), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var f = t.postRun.shift();
            je.unshift(f);
          }
          jn(je);
        }
      }
      if (!(-3 * 1259 + -2778 + 15 * 437 < qe)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) b0();
        jn(Xe), 1262 + 2 * -1352 + -103 * -14 < qe || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, -1240 + 23 * -124 + -1 * -4093), I();
        }, 7810 + 22 * 287 + -14123)) : I());
      }
    }
    if (t.run = ko, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); 0 < t.preInit.length; ) t.preInit.pop()();
    return ko(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Nc = Symbol("Comlink.proxy"), E1 = Symbol("Comlink.endpoint"), N1 = Symbol("Comlink.releaseProxy"), Mo = Symbol("Comlink.finalizer"), Gx = Symbol("Comlink.thrown"), Lc = (x) => typeof x == "object" && x !== null || typeof x == "function", L1 = {
  canHandle: (x) => Lc(x) && x[Nc],
  serialize(x) {
    const { port1: o, port2: t } = new MessageChannel();
    return Fc(x, o), [t, [t]];
  },
  deserialize(x) {
    return x.start(), Xc(x);
  }
}, D1 = {
  canHandle: (x) => Lc(x) && Gx in x,
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
  ["proxy", L1],
  ["throw", D1]
]);
function F1(x, o) {
  for (const t of x)
    if (o === t || t === "*" || t instanceof RegExp && t.test(o))
      return !0;
  return !1;
}
function Fc(x, o = globalThis, t = ["*"]) {
  o.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!F1(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: i, path: a } = Object.assign({ path: [] }, n.data), s = (n.data.argumentList || []).map(i0);
    let c;
    try {
      const u = a.slice(0, -1).reduce((h, l) => h[l], x), g = a.reduce((h, l) => h[l], x);
      switch (i) {
        case "GET":
          c = g;
          break;
        case "SET":
          u[a.slice(-1)[0]] = i0(n.data.value), c = !0;
          break;
        case "APPLY":
          c = g.apply(u, s);
          break;
        case "CONSTRUCT":
          {
            const h = new g(...s);
            c = _1(h);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: h, port2: l } = new MessageChannel();
            Fc(x, l), c = J1(h, [h]);
          }
          break;
        case "RELEASE":
          c = void 0;
          break;
        default:
          return;
      }
    } catch (u) {
      c = { value: u, [Gx]: 0 };
    }
    Promise.resolve(c).catch((u) => ({ value: u, [Gx]: 0 })).then((u) => {
      const [g, h] = $x(u);
      o.postMessage(Object.assign(Object.assign({}, g), { id: r }), h), i === "RELEASE" && (o.removeEventListener("message", e), Yc(o), Mo in x && typeof x[Mo] == "function" && x[Mo]());
    }).catch((u) => {
      const [g, h] = $x({
        value: new TypeError("Unserializable return value"),
        [Gx]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, g), { id: r }), h);
    });
  }), o.start && o.start();
}
function Y1(x) {
  return x.constructor.name === "MessagePort";
}
function Yc(x) {
  Y1(x) && x.close();
}
function Xc(x, o) {
  return Or(x, [], o);
}
function ux(x) {
  if (x)
    throw new Error("Proxy has been released and is not useable");
}
function jc(x) {
  return R0(x, {
    type: "RELEASE"
  }).then(() => {
    Yc(x);
  });
}
const zx = /* @__PURE__ */ new WeakMap(), qx = "FinalizationRegistry" in globalThis && new FinalizationRegistry((x) => {
  const o = (zx.get(x) || 0) - 1;
  zx.set(x, o), o === 0 && jc(x);
});
function X1(x, o) {
  const t = (zx.get(o) || 0) + 1;
  zx.set(o, t), qx && qx.register(x, o, x);
}
function j1(x) {
  qx && qx.unregister(x);
}
function Or(x, o = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(r, i) {
      if (ux(e), i === N1)
        return () => {
          j1(n), jc(x), e = !0;
        };
      if (i === "then") {
        if (o.length === 0)
          return { then: () => n };
        const a = R0(x, {
          type: "GET",
          path: o.map((s) => s.toString())
        }).then(i0);
        return a.then.bind(a);
      }
      return Or(x, [...o, i]);
    },
    set(r, i, a) {
      ux(e);
      const [s, c] = $x(a);
      return R0(x, {
        type: "SET",
        path: [...o, i].map((u) => u.toString()),
        value: s
      }, c).then(i0);
    },
    apply(r, i, a) {
      ux(e);
      const s = o[o.length - 1];
      if (s === E1)
        return R0(x, {
          type: "ENDPOINT"
        }).then(i0);
      if (s === "bind")
        return Or(x, o.slice(0, -1));
      const [c, u] = Va(a);
      return R0(x, {
        type: "APPLY",
        path: o.map((g) => g.toString()),
        argumentList: c
      }, u).then(i0);
    },
    construct(r, i) {
      ux(e);
      const [a, s] = Va(i);
      return R0(x, {
        type: "CONSTRUCT",
        path: o.map((c) => c.toString()),
        argumentList: a
      }, s).then(i0);
    }
  });
  return X1(n, x), n;
}
function M1(x) {
  return Array.prototype.concat.apply([], x);
}
function Va(x) {
  const o = x.map($x);
  return [o.map((t) => t[0]), M1(o.map((t) => t[1]))];
}
const Mc = /* @__PURE__ */ new WeakMap();
function J1(x, o) {
  return Mc.set(x, o), x;
}
function _1(x) {
  return Object.assign(x, { [Nc]: !0 });
}
function $x(x) {
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
    Mc.get(x) || []
  ];
}
function i0(x) {
  switch (x.type) {
    case "HANDLER":
      return Dc.get(x.name).deserialize(x.value);
    case "RAW":
      return x.value;
  }
}
function R0(x, o, t) {
  return new Promise((e) => {
    const n = Q1();
    x.addEventListener("message", function r(i) {
      !i.data || !i.data.id || i.data.id !== n || (x.removeEventListener("message", r), e(i.data));
    }), x.start && x.start(), x.postMessage(Object.assign({ id: n }, o), t);
  });
}
function Q1() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const Jc = "dmFyIGNlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgbGUgPSAoYSwgdSwgZSkgPT4gdSBpbiBhID8gY2UoYSwgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IGFbdV0gPSBlOwp2YXIgWW4gPSAoYSwgdSwgZSkgPT4gbGUoYSwgdHlwZW9mIHUgIT0gInN5bWJvbCIgPyB1ICsgIiIgOiB1LCBlKTsKY29uc3Qga3QgPSB7CiAgc2ltZDogInNhbV9zaW1kLndhc20iLAogIHNhbTogInNhbS53YXNtIgp9LCBmZSA9IGFzeW5jICgpID0+IFdlYkFzc2VtYmx5LnZhbGlkYXRlKG5ldyBVaW50OEFycmF5KFswLCA5NywgMTE1LCAxMDksIDEsIDAsIDAsIDAsIDEsIDUsIDEsIDk2LCAwLCAxLCAxMjMsIDMsIDIsIDEsIDAsIDEwLCAxMCwgMSwgOCwgMCwgNjUsIDAsIDI1MywgMTUsIDI1MywgOTgsIDExXSkpOwpjbGFzcyBJIGV4dGVuZHMgRXJyb3IgewogIGNvbnN0cnVjdG9yKGUsIG0pIHsKICAgIHN1cGVyKGUpOwogICAgWW4odGhpcywgImNhdXNlIik7CiAgICB0aGlzLm5hbWUgPSAiQXV0b0NhcHR1cmVFcnJvciIsIHRoaXMuY2F1c2UgPSBtOwogIH0KICAvLyBDaGFuZ2UgdGhpcyB0byBEZWNvcmF0b3Igd2hlbiB0aGV5IHdpbGwgYmUgaW4gc3RhYmxlIHJlbGVhc2UKICBzdGF0aWMgbG9nRXJyb3IoZSkgewogIH0KICBzdGF0aWMgZnJvbUNhbWVyYUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgSSkKICAgICAgcmV0dXJuIGU7CiAgICBsZXQgbTsKICAgIHN3aXRjaCAoZS5uYW1lKSB7CiAgICAgIGNhc2UgIk92ZXJjb25zdHJhaW5lZEVycm9yIjoKICAgICAgICBtID0gIk1pbmltdW0gcXVhbGl0eSByZXF1aXJlbWVudHMgYXJlIG5vdCBtZXQgYnkgeW91ciBjYW1lcmEiOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RSZWFkYWJsZUVycm9yIjoKICAgICAgY2FzZSAiQWJvcnRFcnJvciI6CiAgICAgICAgbSA9ICJUaGUgd2ViY2FtIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYXBwbGljYXRpb24iOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RBbGxvd2VkRXJyb3IiOgogICAgICAgIG0gPSAiVG8gdXNlIHlvdXIgY2FtZXJhLCB5b3UgbXVzdCBhbGxvdyBwZXJtaXNzaW9ucyI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEZvdW5kRXJyb3IiOgogICAgICAgIG0gPSAiVGhlcmUgaXMgbm8gY2FtZXJhIGF2YWlsYWJsZSB0byB5b3UiOwogICAgICAgIGJyZWFrOwogICAgICBkZWZhdWx0OgogICAgICAgIG0gPSAiQW4gdW5rbm93biBjYW1lcmEgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgICAgICBicmVhazsKICAgIH0KICAgIHJldHVybiBuZXcgSShtLCBlKTsKICB9CiAgc3RhdGljIGZyb21FcnJvcihlKSB7CiAgICBpZiAodGhpcy5sb2dFcnJvcihlKSwgZSBpbnN0YW5jZW9mIEkpCiAgICAgIHJldHVybiBlOwogICAgY29uc3QgbSA9ICJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCI7CiAgICByZXR1cm4gbmV3IEkobSk7CiAgfQp9CmNvbnN0IGRlID0gewogIFJHQjogIlJHQiIsCiAgUkdCQTogIlJHQkEiCn0sIGhlID0gKGEpID0+IE51bWJlci5wYXJzZUZsb2F0KGEudG9GaXhlZCgzKSksIHllID0gKGEsIHUpID0+IE1hdGgubWluKGEsIHUpOwp2YXIgcGUgPSBmdW5jdGlvbigpIHsKICB2YXIgYSA9IHR5cGVvZiBkb2N1bWVudCA8ICJ1IiAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ID8gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMgOiB2b2lkIDA7CiAgcmV0dXJuIGZ1bmN0aW9uKHUpIHsKICAgIHUgPSB1IHx8IHt9OwogICAgdmFyIGU7CiAgICBlIHx8IChlID0gdHlwZW9mIHUgPCAidSIgPyB1IDoge30pOwogICAgdmFyIG0sIGc7CiAgICBlLnJlYWR5ID0gbmV3IFByb21pc2UoZnVuY3Rpb24obiwgdCkgewogICAgICBtID0gbiwgZyA9IHQ7CiAgICB9KTsKICAgIHZhciBDID0ge30sIEE7CiAgICBmb3IgKEEgaW4gZSkgZS5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoQ1tBXSA9IGVbQV0pOwogICAgdmFyIE0gPSAiLi90aGlzLnByb2dyYW0iLCBPID0gITEsIFQgPSAhMTsKICAgIE8gPSB0eXBlb2Ygd2luZG93ID09ICJvYmplY3QiLCBUID0gdHlwZW9mIGltcG9ydFNjcmlwdHMgPT0gImZ1bmN0aW9uIjsKICAgIHZhciBfID0gIiIsIFM7CiAgICAoTyB8fCBUKSAmJiAoVCA/IF8gPSBzZWxmLmxvY2F0aW9uLmhyZWYgOiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIChfID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpLCBhICYmIChfID0gYSksIF8uaW5kZXhPZigiYmxvYjoiKSAhPT0gMCA/IF8gPSBfLnN1YnN0cigwLCBfLmxhc3RJbmRleE9mKCIvIikgKyAxKSA6IF8gPSAiIiwgVCAmJiAoUyA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdmFyIHQgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsKICAgICAgcmV0dXJuIHQub3BlbigiR0VUIiwgbiwgITEpLCB0LnJlc3BvbnNlVHlwZSA9ICJhcnJheWJ1ZmZlciIsIHQuc2VuZChudWxsKSwgbmV3IFVpbnQ4QXJyYXkodC5yZXNwb25zZSk7CiAgICB9KSk7CiAgICB2YXIgRSA9IGUucHJpbnRFcnIgfHwgY29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7CiAgICBmb3IgKEEgaW4gQykgQy5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoZVtBXSA9IENbQV0pOwogICAgQyA9IG51bGwsIGUudGhpc1Byb2dyYW0gJiYgKE0gPSBlLnRoaXNQcm9ncmFtKTsKICAgIHZhciBXOwogICAgZS53YXNtQmluYXJ5ICYmIChXID0gZS53YXNtQmluYXJ5KSwgZS5ub0V4aXRSdW50aW1lICYmIGUubm9FeGl0UnVudGltZSwgdHlwZW9mIFdlYkFzc2VtYmx5ICE9ICJvYmplY3QiICYmIHNuKCJubyBuYXRpdmUgd2FzbSBzdXBwb3J0IGRldGVjdGVkIik7CiAgICB2YXIgSCwga24gPSAhMTsKICAgIGZ1bmN0aW9uIEtuKG4pIHsKICAgICAgbiB8fCBzbigiQXNzZXJ0aW9uIGZhaWxlZDogdW5kZWZpbmVkIik7CiAgICB9CiAgICB2YXIgUW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0ZjgiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFV0KG4sIHQsIHIpIHsKICAgICAgdmFyIGkgPSBGOwogICAgICBpZiAoMCA8IHIpIHsKICAgICAgICByID0gdCArIHIgLSAxOwogICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgbi5sZW5ndGg7ICsrbykgewogICAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICBpZiAoNTUyOTYgPD0gcyAmJiA1NzM0MyA+PSBzKSB7CiAgICAgICAgICAgIHZhciBsID0gbi5jaGFyQ29kZUF0KCsrbyk7CiAgICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgICAgfQogICAgICAgICAgaWYgKDEyNyA+PSBzKSB7CiAgICAgICAgICAgIGlmICh0ID49IHIpIGJyZWFrOwogICAgICAgICAgICBpW3QrK10gPSBzOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgaWYgKDIwNDcgPj0gcykgewogICAgICAgICAgICAgIGlmICh0ICsgMSA+PSByKSBicmVhazsKICAgICAgICAgICAgICBpW3QrK10gPSAxOTIgfCBzID4+IDY7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgaWYgKDY1NTM1ID49IHMpIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMiA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDIyNCB8IHMgPj4gMTI7CiAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMyA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDI0MCB8IHMgPj4gMTgsIGlbdCsrXSA9IDEyOCB8IHMgPj4gMTIgJiA2MzsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyA+PiA2ICYgNjM7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyAmIDYzOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBpW3RdID0gMDsKICAgICAgfQogICAgfQogICAgdmFyIHFuID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGYtMTZsZSIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gRHQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gbiA+PiAxLCBpID0gciArIHQgLyAyOyAhKHIgPj0gaSkgJiYgeW5bcl07ICkgKytyOwogICAgICBpZiAociA8PD0gMSwgMzIgPCByIC0gbiAmJiBxbikgcmV0dXJuIHFuLmRlY29kZShGLnN1YmFycmF5KG4sIHIpKTsKICAgICAgZm9yIChyID0gMCwgaSA9ICIiOyA7ICkgewogICAgICAgIHZhciBvID0gUVtuICsgMiAqIHIgPj4gMV07CiAgICAgICAgaWYgKG8gPT0gMCB8fCByID09IHQgLyAyKSByZXR1cm4gaTsKICAgICAgICArK3IsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQnQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDIgPiByKSByZXR1cm4gMDsKICAgICAgciAtPSAyOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSByIDwgMiAqIG4ubGVuZ3RoID8gciAvIDIgOiBuLmxlbmd0aDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCByOyArK28pIFFbdCA+PiAxXSA9IG4uY2hhckNvZGVBdChvKSwgdCArPSAyOwogICAgICByZXR1cm4gUVt0ID4+IDFdID0gMCwgdCAtIGk7CiAgICB9CiAgICBmdW5jdGlvbiB6dChuKSB7CiAgICAgIHJldHVybiAyICogbi5sZW5ndGg7CiAgICB9CiAgICBmdW5jdGlvbiBWdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSAwLCBpID0gIiI7ICEociA+PSB0IC8gNCk7ICkgewogICAgICAgIHZhciBvID0ga1tuICsgNCAqIHIgPj4gMl07CiAgICAgICAgaWYgKG8gPT0gMCkgYnJlYWs7CiAgICAgICAgKytyLCA2NTUzNiA8PSBvID8gKG8gLT0gNjU1MzYsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IG8gPj4gMTAsIDU2MzIwIHwgbyAmIDEwMjMpKSA6IGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgICByZXR1cm4gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEd0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCA0ID4gcikgcmV0dXJuIDA7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IGkgKyByIC0gNDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBuLmxlbmd0aDsgKytvKSB7CiAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgaWYgKDU1Mjk2IDw9IHMgJiYgNTczNDMgPj0gcykgewogICAgICAgICAgdmFyIGwgPSBuLmNoYXJDb2RlQXQoKytvKTsKICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgIH0KICAgICAgICBpZiAoa1t0ID4+IDJdID0gcywgdCArPSA0LCB0ICsgNCA+IHIpIGJyZWFrOwogICAgICB9CiAgICAgIHJldHVybiBrW3QgPj4gMl0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIFl0KG4pIHsKICAgICAgZm9yICh2YXIgdCA9IDAsIHIgPSAwOyByIDwgbi5sZW5ndGg7ICsrcikgewogICAgICAgIHZhciBpID0gbi5jaGFyQ29kZUF0KHIpOwogICAgICAgIDU1Mjk2IDw9IGkgJiYgNTczNDMgPj0gaSAmJiArK3IsIHQgKz0gNDsKICAgICAgfQogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBLLCBZLCBGLCBRLCB5biwgaywgVSwgbnQsIHR0OwogICAgZnVuY3Rpb24gZXQobikgewogICAgICBLID0gbiwgZS5IRUFQOCA9IFkgPSBuZXcgSW50OEFycmF5KG4pLCBlLkhFQVAxNiA9IFEgPSBuZXcgSW50MTZBcnJheShuKSwgZS5IRUFQMzIgPSBrID0gbmV3IEludDMyQXJyYXkobiksIGUuSEVBUFU4ID0gRiA9IG5ldyBVaW50OEFycmF5KG4pLCBlLkhFQVBVMTYgPSB5biA9IG5ldyBVaW50MTZBcnJheShuKSwgZS5IRUFQVTMyID0gVSA9IG5ldyBVaW50MzJBcnJheShuKSwgZS5IRUFQRjMyID0gbnQgPSBuZXcgRmxvYXQzMkFycmF5KG4pLCBlLkhFQVBGNjQgPSB0dCA9IG5ldyBGbG9hdDY0QXJyYXkobik7CiAgICB9CiAgICB2YXIgcnQgPSBlLklOSVRJQUxfTUVNT1JZIHx8IDE2Nzc3MjE2OwogICAgZS53YXNtTWVtb3J5ID8gSCA9IGUud2FzbU1lbW9yeSA6IEggPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogcnQgLyA2NTUzNiwgbWF4aW11bTogMzI3NjggfSksIEggJiYgKEsgPSBILmJ1ZmZlciksIHJ0ID0gSy5ieXRlTGVuZ3RoLCBldChLKTsKICAgIHZhciBpdCA9IFtdLCBhdCA9IFtdLCBadCA9IFtdLCBvdCA9IFtdOwogICAgZnVuY3Rpb24gJHQoKSB7CiAgICAgIHZhciBuID0gZS5wcmVSdW4uc2hpZnQoKTsKICAgICAgaXQudW5zaGlmdChuKTsKICAgIH0KICAgIHZhciBaID0gMCwgb24gPSBudWxsOwogICAgZS5wcmVsb2FkZWRJbWFnZXMgPSB7fSwgZS5wcmVsb2FkZWRBdWRpb3MgPSB7fTsKICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgdGhyb3cgZS5vbkFib3J0ICYmIGUub25BYm9ydChuKSwgRShuKSwga24gPSAhMCwgbiA9IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoImFib3J0KCIgKyBuICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIiksIGcobiksIG47CiAgICB9CiAgICBmdW5jdGlvbiBSbihuKSB7CiAgICAgIHZhciB0ID0gJDsKICAgICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/IHQuc3RhcnRzV2l0aChuKSA6IHQuaW5kZXhPZihuKSA9PT0gMDsKICAgIH0KICAgIGZ1bmN0aW9uIHN0KCkgewogICAgICByZXR1cm4gUm4oImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKTsKICAgIH0KICAgIHZhciAkID0gInNhbS53YXNtIjsKICAgIGlmICghc3QoKSkgewogICAgICB2YXIgdXQgPSAkOwogICAgICAkID0gZS5sb2NhdGVGaWxlID8gZS5sb2NhdGVGaWxlKHV0LCBfKSA6IF8gKyB1dDsKICAgIH0KICAgIGZ1bmN0aW9uIGN0KCkgewogICAgICB0cnkgewogICAgICAgIGlmIChXKSByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoVyk7CiAgICAgICAgaWYgKFMpIHJldHVybiBTKCQpOwogICAgICAgIHRocm93ICJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZCI7CiAgICAgIH0gY2F0Y2ggKG4pIHsKICAgICAgICBzbihuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gWHQoKSB7CiAgICAgIHJldHVybiBXIHx8ICFPICYmICFUIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iIHx8IFJuKCJmaWxlOi8vIikgPyBQcm9taXNlLnJlc29sdmUoKS50aGVuKGN0KSA6IGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihuKSB7CiAgICAgICAgaWYgKCFuLm9rKSB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArICQgKyAiJyI7CiAgICAgICAgcmV0dXJuIG4uYXJyYXlCdWZmZXIoKTsKICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7CiAgICAgICAgcmV0dXJuIGN0KCk7CiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24gcG4obikgewogICAgICBmb3IgKDsgMCA8IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4uc2hpZnQoKTsKICAgICAgICBpZiAodHlwZW9mIHQgPT0gImZ1bmN0aW9uIikgdChlKTsKICAgICAgICBlbHNlIHsKICAgICAgICAgIHZhciByID0gdC5CYTsKICAgICAgICAgIHR5cGVvZiByID09ICJudW1iZXIiID8gdC50YSA9PT0gdm9pZCAwID8geG4oInYiLCByKSgpIDogeG4oInZpIiwgcikodC50YSkgOiByKHQudGEgPT09IHZvaWQgMCA/IG51bGwgOiB0LnRhKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHhuKG4sIHQpIHsKICAgICAgdmFyIHIgPSBbXTsKICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgewogICAgICAgIHIubGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsKICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgcltpXSA9IGFyZ3VtZW50c1tpXTsKICAgICAgICByZXR1cm4gciAmJiByLmxlbmd0aCA/IGVbImR5bkNhbGxfIiArIG5dLmFwcGx5KG51bGwsIFt0XS5jb25jYXQocikpIDogZVsiZHluQ2FsbF8iICsgbl0uY2FsbChudWxsLCB0KTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEp0KG4pIHsKICAgICAgdGhpcy5kYSA9IG4gLSAxNiwgdGhpcy5PYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyA4ID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5MYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyAwID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5NYSA9IGZ1bmN0aW9uKCkgewogICAgICAgIGtbdGhpcy5kYSArIDQgPj4gMl0gPSAwOwogICAgICB9LCB0aGlzLkthID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTIgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLk5hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTMgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLkZhID0gZnVuY3Rpb24odCwgcikgewogICAgICAgIHRoaXMuT2EodCksIHRoaXMuTGEociksIHRoaXMuTWEoKSwgdGhpcy5LYSgpLCB0aGlzLk5hKCk7CiAgICAgIH07CiAgICB9CiAgICBmdW5jdGlvbiBtbigpIHsKICAgICAgcmV0dXJuIDAgPCBtbi54YTsKICAgIH0KICAgIGZ1bmN0aW9uIEZuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIDE7CiAgICAgICAgY2FzZSA0OgogICAgICAgICAgcmV0dXJuIDI7CiAgICAgICAgY2FzZSA4OgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gdHlwZSBzaXplOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIHZhciBsdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFIobikgewogICAgICBmb3IgKHZhciB0ID0gIiI7IEZbbl07ICkgdCArPSBsdFtGW24rK11dOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBxID0ge30sIFggPSB7fSwgdm4gPSB7fTsKICAgIGZ1bmN0aW9uIEluKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIGpuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBJbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gTG4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gam4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIG5uID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBubihuKTsKICAgIH0KICAgIHZhciBmdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIGduKG4pIHsKICAgICAgdGhyb3cgbmV3IGZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gdG4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGMpIHsKICAgICAgICBjID0gcihjKSwgYy5sZW5ndGggIT09IG4ubGVuZ3RoICYmIGduKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBuLmxlbmd0aDsgKyt5KSBEKG5beV0sIGNbeV0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihjKSB7CiAgICAgICAgdm5bY10gPSB0OwogICAgICB9KTsKICAgICAgdmFyIG8gPSBBcnJheSh0Lmxlbmd0aCksIHMgPSBbXSwgbCA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihjLCB5KSB7CiAgICAgICAgWC5oYXNPd25Qcm9wZXJ0eShjKSA/IG9beV0gPSBYW2NdIDogKHMucHVzaChjKSwgcS5oYXNPd25Qcm9wZXJ0eShjKSB8fCAocVtjXSA9IFtdKSwgcVtjXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgb1t5XSA9IFhbY10sICsrbCwgbCA9PT0gcy5sZW5ndGggJiYgaShvKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCBzLmxlbmd0aCA9PT0gMCAmJiBpKG8pOwogICAgfQogICAgZnVuY3Rpb24gRChuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgWC5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKSByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBYW25dID0gdCwgZGVsZXRlIHZuW25dLCBxLmhhc093blByb3BlcnR5KG4pICYmICh0ID0gcVtuXSwgZGVsZXRlIHFbbl0sIHQuZm9yRWFjaChmdW5jdGlvbihvKSB7CiAgICAgICAgbygpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBObihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIEhuID0gITE7CiAgICBmdW5jdGlvbiBkdCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIGh0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gdW4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChIbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpIHIgPSByLnZhbHVlLCByLmRhID8gaHQocikgOiBjb25zb2xlLndhcm4oIm9iamVjdCBhbHJlYWR5IGRlbGV0ZWQ6ICIgKyByLmRhKTsKICAgICAgfSksIHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiBIbi5yZWdpc3Rlcih0LCB0LkEsIHQuQSksIHQ7CiAgICAgIH0sIGR0ID0gZnVuY3Rpb24odCkgewogICAgICAgIEhuLnVucmVnaXN0ZXIodC5BKTsKICAgICAgfSwgdW4obikpOwogICAgfQogICAgdmFyIGNuID0gdm9pZCAwLCBsbiA9IFtdOwogICAgZnVuY3Rpb24gVW4oKSB7CiAgICAgIGZvciAoOyBsbi5sZW5ndGg7ICkgewogICAgICAgIHZhciBuID0gbG4ucG9wKCk7CiAgICAgICAgbi5BLm9hID0gITEsIG4uZGVsZXRlKCk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIFYoKSB7CiAgICB9CiAgICB2YXIgeXQgPSB7fTsKICAgIGZ1bmN0aW9uIFF0KG4sIHQpIHsKICAgICAgdmFyIHIgPSBlOwogICAgICBpZiAocltuXS5qYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdmFyIGkgPSByW25dOwogICAgICAgIHJbbl0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiByW25dLmphLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpIHx8IHYoIkZ1bmN0aW9uICciICsgdCArICInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdHMgb25lIG9mICgiICsgcltuXS5qYSArICIpISIpLCByW25dLmphW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfSwgcltuXS5qYSA9IFtdLCByW25dLmphW2kueWFdID0gaTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcHQobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pID8gKChyID09PSB2b2lkIDAgfHwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIGVbbl0uamFbcl0gIT09IHZvaWQgMCkgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICciICsgbiArICInIHR3aWNlIiksIFF0KG4sIG4pLCBlLmhhc093blByb3BlcnR5KHIpICYmIHYoIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyByICsgIikhIiksIGVbbl0uamFbcl0gPSB0KSA6IChlW25dID0gdCwgciAhPT0gdm9pZCAwICYmIChlW25dLlJhID0gcikpOwogICAgfQogICAgZnVuY3Rpb24gcXQobiwgdCwgciwgaSwgbywgcywgbCwgYykgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmNvbnN0cnVjdG9yID0gdCwgdGhpcy5tYSA9IHIsIHRoaXMubmEgPSBpLCB0aGlzLmlhID0gbywgdGhpcy5DYSA9IHMsIHRoaXMucWEgPSBsLCB0aGlzLkFhID0gYzsKICAgIH0KICAgIGZ1bmN0aW9uIHduKG4sIHQsIHIpIHsKICAgICAgZm9yICg7IHQgIT09IHI7ICkgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiBuZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiB0ZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpIHIgPSB0LkEuZ2E7CiAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIGVuKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGkuZGVsZXRlKCk7CiAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgIH0KICAgICAgcmV0dXJuIHI7CiAgICB9CiAgICBmdW5jdGlvbiBlZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyB0LkEuZmEubmFtZSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBbihuKSB7CiAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShVW24gPj4gMl0pOwogICAgfQogICAgZnVuY3Rpb24gbXQobiwgdCwgcikgewogICAgICByZXR1cm4gdCA9PT0gciA/IG4gOiByLmlhID09PSB2b2lkIDAgPyBudWxsIDogKG4gPSBtdChuLCB0LCByLmlhKSwgbiA9PT0gbnVsbCA/IG51bGwgOiByLkFhKG4pKTsKICAgIH0KICAgIHZhciBmbiA9IHt9OwogICAgZnVuY3Rpb24gcmUobiwgdCkgewogICAgICBmb3IgKHQgPT09IHZvaWQgMCAmJiB2KCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsgbi5pYTsgKSB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiBmblt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIF9uKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBnbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIGduKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgdW4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBCKG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IHRlIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyBuZSA6IGVlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiB2dChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgZ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gRyhuLCB0KSB7CiAgICAgIG4gPSBSKG4pOwogICAgICB2YXIgciA9IHhuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgZ3QgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB3dChuKSB7CiAgICAgIG4gPSBXdChuKTsKICAgICAgdmFyIHQgPSBSKG4pOwogICAgICByZXR1cm4geihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIGRuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcihzKSB7CiAgICAgICAgb1tzXSB8fCBYW3NdIHx8ICh2bltzXSA/IHZuW3NdLmZvckVhY2gocikgOiAoaS5wdXNoKHMpLCBvW3NdID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBvID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IGd0KG4gKyAiOiAiICsgaS5tYXAod3QpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspIHIucHVzaChrWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIHduKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBEbiA9IFtdLCBqID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIEJuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1qW25dLkphID09PSAwICYmIChqW25dID0gdm9pZCAwLCBEbi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIGVuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IERuLmxlbmd0aCA/IERuLnBvcCgpIDogai5sZW5ndGg7CiAgICAgICAgICByZXR1cm4galt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHJuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpIHJldHVybiAibnVsbCI7CiAgICAgIHZhciB0ID0gdHlwZW9mIG47CiAgICAgIHJldHVybiB0ID09PSAib2JqZWN0IiB8fCB0ID09PSAiYXJyYXkiIHx8IHQgPT09ICJmdW5jdGlvbiIgPyBuLnRvU3RyaW5nKCkgOiAiIiArIG47CiAgICB9CiAgICBmdW5jdGlvbiBpZShuLCB0KSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShudFtyID4+IDJdKTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHR0W3IgPj4gM10pOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBmbG9hdCB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGFlKG4pIHsKICAgICAgdmFyIHQgPSBGdW5jdGlvbjsKICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBqbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIG9lKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBZW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIEZbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gUVtpID4+IDFdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHluW2kgPj4gMV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4ga1tpID4+IDJdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFVbaSA+PiAyXTsKICAgICAgICAgIH07CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gaW50ZWdlciB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHpuKG4pIHsKICAgICAgcmV0dXJuIG4gfHwgdigiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gIiArIG4pLCBqW25dLnZhbHVlOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCkgewogICAgICB2YXIgciA9IFhbbl07CiAgICAgIHJldHVybiByID09PSB2b2lkIDAgJiYgdih0ICsgIiBoYXMgdW5rbm93biB0eXBlICIgKyB3dChuKSksIHI7CiAgICB9CiAgICB2YXIgc2UgPSB7fSwgVHQgPSB7fTsKICAgIGZ1bmN0aW9uIEV0KCkgewogICAgICBpZiAoIVZuKSB7CiAgICAgICAgdmFyIG4gPSB7IFVTRVI6ICJ3ZWJfdXNlciIsIExPR05BTUU6ICJ3ZWJfdXNlciIsIFBBVEg6ICIvIiwgUFdEOiAiLyIsIEhPTUU6ICIvaG9tZS93ZWJfdXNlciIsIExBTkc6ICh0eXBlb2YgbmF2aWdhdG9yID09ICJvYmplY3QiICYmIG5hdmlnYXRvci5sYW5ndWFnZXMgJiYgbmF2aWdhdG9yLmxhbmd1YWdlc1swXSB8fCAiQyIpLnJlcGxhY2UoIi0iLCAiXyIpICsgIi5VVEYtOCIsIF86IE0gfHwgIi4vdGhpcy5wcm9ncmFtIiB9LCB0OwogICAgICAgIGZvciAodCBpbiBUdCkgblt0XSA9IFR0W3RdOwogICAgICAgIHZhciByID0gW107CiAgICAgICAgZm9yICh0IGluIG4pIHIucHVzaCh0ICsgIj0iICsgblt0XSk7CiAgICAgICAgVm4gPSByOwogICAgICB9CiAgICAgIHJldHVybiBWbjsKICAgIH0KICAgIHZhciBWbiwgUHQgPSBbXTsKICAgIGZ1bmN0aW9uIE10KG4pIHsKICAgICAgdmFyIHQgPSB7fSwgcjsKICAgICAgZm9yIChyIGluIG4pIChmdW5jdGlvbihpKSB7CiAgICAgICAgdmFyIG8gPSBuW2ldOwogICAgICAgIHRbaV0gPSB0eXBlb2YgbyA9PSAiZnVuY3Rpb24iID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICBQdC5wdXNoKGkpOwogICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgcmV0dXJuIG8uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgICAgICAgIH0gZmluYWxseSB7CiAgICAgICAgICAgIGlmIChrbikgcmV0dXJuOwogICAgICAgICAgICB2YXIgcyA9IFB0LnBvcCgpOwogICAgICAgICAgICBLbihzID09PSBpKTsKICAgICAgICAgIH0KICAgICAgICB9IDogbzsKICAgICAgfSkocik7CiAgICAgIHJldHVybiB0OwogICAgfQogICAgZm9yICh2YXIgT3QgPSBBcnJheSgyNTYpLCBUbiA9IDA7IDI1NiA+IFRuOyArK1RuKSBPdFtUbl0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFRuKTsKICAgIGx0ID0gT3QsIG5uID0gZS5CaW5kaW5nRXJyb3IgPSBMbigiQmluZGluZ0Vycm9yIiksIGZ0ID0gZS5JbnRlcm5hbEVycm9yID0gTG4oIkludGVybmFsRXJyb3IiKSwgVi5wcm90b3R5cGUuaXNBbGlhc09mID0gZnVuY3Rpb24obikgewogICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgViAmJiBuIGluc3RhbmNlb2YgVikpIHJldHVybiAhMTsKICAgICAgdmFyIHQgPSB0aGlzLkEuZmEuZWEsIHIgPSB0aGlzLkEuZGEsIGkgPSBuLkEuZmEuZWE7CiAgICAgIGZvciAobiA9IG4uQS5kYTsgdC5pYTsgKSByID0gdC5xYShyKSwgdCA9IHQuaWE7CiAgICAgIGZvciAoOyBpLmlhOyApIG4gPSBpLnFhKG4pLCBpID0gaS5pYTsKICAgICAgcmV0dXJuIHQgPT09IGkgJiYgciA9PT0gbjsKICAgIH0sIFYucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7CiAgICAgIGlmICh0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5wYSkgcmV0dXJuIHRoaXMuQS5jb3VudC52YWx1ZSArPSAxLCB0aGlzOwogICAgICB2YXIgbiA9IHVuKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLCB7IEE6IHsgdmFsdWU6IEt0KHRoaXMuQSkgfSB9KSk7CiAgICAgIHJldHVybiBuLkEuY291bnQudmFsdWUgKz0gMSwgbi5BLm9hID0gITEsIG47CiAgICB9LCBWLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbigpIHsKICAgICAgdGhpcy5BLmRhIHx8IE5uKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIGR0KHRoaXMpLCBodCh0aGlzLkEpLCB0aGlzLkEucGEgfHwgKHRoaXMuQS5nYSA9IHZvaWQgMCwgdGhpcy5BLmRhID0gdm9pZCAwKTsKICAgIH0sIFYucHJvdG90eXBlLmlzRGVsZXRlZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gIXRoaXMuQS5kYTsKICAgIH0sIFYucHJvdG90eXBlLmRlbGV0ZUxhdGVyID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiB0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgbG4ucHVzaCh0aGlzKSwgbG4ubGVuZ3RoID09PSAxICYmIGNuICYmIGNuKFVuKSwgdGhpcy5BLm9hID0gITAsIHRoaXM7CiAgICB9LCBCLnByb3RvdHlwZS5EYSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgcmV0dXJuIHRoaXMud2EgJiYgKG4gPSB0aGlzLndhKG4pKSwgbjsKICAgIH0sIEIucHJvdG90eXBlLnZhID0gZnVuY3Rpb24obikgewogICAgICB0aGlzLm5hICYmIHRoaXMubmEobik7CiAgICB9LCBCLnByb3RvdHlwZS5hcmdQYWNrQWR2YW5jZSA9IDgsIEIucHJvdG90eXBlLnJlYWRWYWx1ZUZyb21Qb2ludGVyID0gQW4sIEIucHJvdG90eXBlLmRlbGV0ZU9iamVjdCA9IGZ1bmN0aW9uKG4pIHsKICAgICAgbiAhPT0gbnVsbCAmJiBuLmRlbGV0ZSgpOwogICAgfSwgQi5wcm90b3R5cGUuZnJvbVdpcmVUeXBlID0gZnVuY3Rpb24obikgewogICAgICBmdW5jdGlvbiB0KCkgewogICAgICAgIHJldHVybiB0aGlzLnNhID8gX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcy5HYSwgZGE6IHIsIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMsIGRhOiBuIH0pOwogICAgICB9CiAgICAgIHZhciByID0gdGhpcy5EYShuKTsKICAgICAgaWYgKCFyKSByZXR1cm4gdGhpcy52YShuKSwgbnVsbDsKICAgICAgdmFyIGkgPSByZSh0aGlzLmVhLCByKTsKICAgICAgaWYgKGkgIT09IHZvaWQgMCkKICAgICAgICByZXR1cm4gaS5BLmNvdW50LnZhbHVlID09PSAwID8gKGkuQS5kYSA9IHIsIGkuQS5nYSA9IG4sIGkuY2xvbmUoKSkgOiAoaSA9IGkuY2xvbmUoKSwgdGhpcy52YShuKSwgaSk7CiAgICAgIGlmIChpID0gdGhpcy5lYS5DYShyKSwgaSA9IHl0W2ldLCAhaSkgcmV0dXJuIHQuY2FsbCh0aGlzKTsKICAgICAgaSA9IHRoaXMucmEgPyBpLnphIDogaS5wb2ludGVyVHlwZTsKICAgICAgdmFyIG8gPSBtdChyLCB0aGlzLmVhLCBpLmVhKTsKICAgICAgcmV0dXJuIG8gPT09IG51bGwgPyB0LmNhbGwodGhpcykgOiB0aGlzLnNhID8gX24oaS5lYS5tYSwgeyBmYTogaSwgZGE6IG8sIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKAogICAgICAgIGkuZWEubWEsCiAgICAgICAgeyBmYTogaSwgZGE6IG8gfQogICAgICApOwogICAgfSwgZS5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmbikubGVuZ3RoOwogICAgfSwgZS5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gZnVuY3Rpb24oKSB7CiAgICAgIHZhciBuID0gW10sIHQ7CiAgICAgIGZvciAodCBpbiBmbikgZm4uaGFzT3duUHJvcGVydHkodCkgJiYgbi5wdXNoKGZuW3RdKTsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmZsdXNoUGVuZGluZ0RlbGV0ZXMgPSBVbiwgZS5zZXREZWxheUZ1bmN0aW9uID0gZnVuY3Rpb24obikgewogICAgICBjbiA9IG4sIGxuLmxlbmd0aCAmJiBjbiAmJiBjbihVbik7CiAgICB9LCBndCA9IGUuVW5ib3VuZFR5cGVFcnJvciA9IExuKCJVbmJvdW5kVHlwZUVycm9yIiksIGUuY291bnRfZW12YWxfaGFuZGxlcyA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gMCwgdCA9IDU7IHQgPCBqLmxlbmd0aDsgKyt0KSBqW3RdICE9PSB2b2lkIDAgJiYgKytuOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZ2V0X2ZpcnN0X2VtdmFsID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSA1OyBuIDwgai5sZW5ndGg7ICsrbikgaWYgKGpbbl0gIT09IHZvaWQgMCkgcmV0dXJuIGpbbl07CiAgICAgIHJldHVybiBudWxsOwogICAgfSwgYXQucHVzaCh7IEJhOiBmdW5jdGlvbigpIHsKICAgICAgU3QoKTsKICAgIH0gfSk7CiAgICB2YXIgdWUgPSB7CiAgICAgIHo6IGZ1bmN0aW9uKG4pIHsKICAgICAgICByZXR1cm4gRW4obiArIDE2KSArIDE2OwogICAgICB9LAogICAgICB1OiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgdGhyb3cgbmV3IEp0KG4pLkZhKHQsIHIpLCAidW5jYXVnaHRfZXhjZXB0aW9uIiBpbiBtbiA/IG1uLnhhKysgOiBtbi54YSA9IDEsIG47CiAgICAgIH0sCiAgICAgIHc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8pIHsKICAgICAgICB2YXIgcyA9IEZuKHIpOwogICAgICAgIHQgPSBSKHQpLCBEKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICByZXR1cm4gISFsOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGwsIGMpIHsKICAgICAgICAgIHJldHVybiBjID8gaSA6IG87CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICBpZiAociA9PT0gMSkgdmFyIGMgPSBZOwogICAgICAgICAgZWxzZSBpZiAociA9PT0gMikgYyA9IFE7CiAgICAgICAgICBlbHNlIGlmIChyID09PSA0KSBjID0gazsKICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBib29sZWFuIHR5cGUgc2l6ZTogIiArIHQpOwogICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKGNbbCA+PiBzXSk7CiAgICAgICAgfSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGg6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYsIGQsIGgsIHcpIHsKICAgICAgICBkID0gUihkKSwgcyA9IEcobywgcyksIGMgJiYgKGMgPSBHKGwsIGMpKSwgZiAmJiAoZiA9IEcoeSwgZikpLCB3ID0gRyhoLCB3KTsKICAgICAgICB2YXIgUCA9IEluKGQpOwogICAgICAgIHB0KFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGQgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW2ldKTsKICAgICAgICB9KSwgdG4oW24sIHQsIHJdLCBpID8gW2ldIDogW10sIGZ1bmN0aW9uKHApIHsKICAgICAgICAgIGlmIChwID0gcFswXSwgaSkKICAgICAgICAgICAgdmFyIE4gPSBwLmVhLCBiID0gTi5tYTsKICAgICAgICAgIGVsc2UgYiA9IFYucHJvdG90eXBlOwogICAgICAgICAgcCA9IGpuKFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSB4KSB0aHJvdyBuZXcgbm4oIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgIiArIGQpOwogICAgICAgICAgICBpZiAoTC5sYSA9PT0gdm9pZCAwKSB0aHJvdyBuZXcgbm4oZCArICIgaGFzIG5vIGFjY2Vzc2libGUgY29uc3RydWN0b3IiKTsKICAgICAgICAgICAgdmFyIGJ0ID0gTC5sYVthcmd1bWVudHMubGVuZ3RoXTsKICAgICAgICAgICAgaWYgKGJ0ID09PSB2b2lkIDApIHRocm93IG5ldyBubigiVHJpZWQgdG8gaW52b2tlIGN0b3Igb2YgIiArIGQgKyAiIHdpdGggaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdGVkICgiICsgT2JqZWN0LmtleXMoTC5sYSkudG9TdHJpbmcoKSArICIpIHBhcmFtZXRlcnMgaW5zdGVhZCEiKTsKICAgICAgICAgICAgcmV0dXJuIGJ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9KTsKICAgICAgICAgIHZhciB4ID0gT2JqZWN0LmNyZWF0ZShiLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBwIH0gfSk7CiAgICAgICAgICBwLnByb3RvdHlwZSA9IHg7CiAgICAgICAgICB2YXIgTCA9IG5ldyBxdChkLCBwLCB4LCB3LCBOLCBzLCBjLCBmKTsKICAgICAgICAgIE4gPSBuZXcgQihkLCBMLCAhMCwgITEpLCBiID0gbmV3IEIoZCArICIqIiwgTCwgITEsICExKTsKICAgICAgICAgIHZhciBobiA9IG5ldyBCKGQgKyAiIGNvbnN0KiIsIEwsICExLCAhMCk7CiAgICAgICAgICByZXR1cm4geXRbbl0gPSB7IHBvaW50ZXJUeXBlOiBiLCB6YTogaG4gfSwgdnQoUCwgcCksIFtOLCBiLCBobl07CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMpIHsKICAgICAgICBLbigwIDwgdCk7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBvID0gRyhpLCBvKTsKICAgICAgICB2YXIgYyA9IFtzXSwgeSA9IFtdOwogICAgICAgIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGYpIHsKICAgICAgICAgIGYgPSBmWzBdOwogICAgICAgICAgdmFyIGQgPSAiY29uc3RydWN0b3IgIiArIGYubmFtZTsKICAgICAgICAgIGlmIChmLmVhLmxhID09PSB2b2lkIDAgJiYgKGYuZWEubGEgPSBbXSksIGYuZWEubGFbdCAtIDFdICE9PSB2b2lkIDApIHRocm93IG5ldyBubigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIGNvbnN0cnVjdG9ycyB3aXRoIGlkZW50aWNhbCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArICh0IC0gMSkgKyAiKSBmb3IgY2xhc3MgJyIgKyBmLm5hbWUgKyAiJyEgT3ZlcmxvYWQgcmVzb2x1dGlvbiBpcyBjdXJyZW50bHkgb25seSBwZXJmb3JtZWQgdXNpbmcgdGhlIHBhcmFtZXRlciBjb3VudCwgbm90IGFjdHVhbCB0eXBlIGluZm8hIik7CiAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGYubmFtZSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBsKTsKICAgICAgICAgIH0sIHRuKFtdLCBsLCBmdW5jdGlvbihoKSB7CiAgICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggIT09IHQgLSAxICYmIHYoZCArICIgY2FsbGVkIHdpdGggIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArICh0IC0gMSkpLCB5Lmxlbmd0aCA9IDAsIGMubGVuZ3RoID0gdDsKICAgICAgICAgICAgICBmb3IgKHZhciB3ID0gMTsgdyA8IHQ7ICsrdykgY1t3XSA9IGhbd10udG9XaXJlVHlwZSgKICAgICAgICAgICAgICAgIHksCiAgICAgICAgICAgICAgICBhcmd1bWVudHNbdyAtIDFdCiAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICByZXR1cm4gdyA9IG8uYXBwbHkobnVsbCwgYyksIENuKHkpLCBoWzBdLmZyb21XaXJlVHlwZSh3KTsKICAgICAgICAgICAgfSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGI6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYpIHsKICAgICAgICB0ID0gUih0KSwgbyA9IEcoaSwgbyksIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGQpIHsKICAgICAgICAgIGQgPSBkWzBdOwogICAgICAgICAgdmFyIGggPSBkLm5hbWUgKyAiLiIgKyB0LCB3ID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgbF0pOwogICAgICAgICAgfSwgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAgfTsKICAgICAgICAgIHJldHVybiB5ID8gdy5zZXQgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBhY2Nlc3MgIiArIGggKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW3IsIGxdKTsKICAgICAgICAgIH0gOiB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICB2KGggKyAiIGlzIGEgcmVhZC1vbmx5IHByb3BlcnR5Iik7CiAgICAgICAgICB9LCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZC5lYS5tYSwgdCwgdyksIHRuKFtdLCB5ID8gW3IsIGxdIDogW3JdLCBmdW5jdGlvbihQKSB7CiAgICAgICAgICAgIHZhciBwID0gUFswXSwgTiA9IHsgZ2V0OiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICB2YXIgeCA9IF90KHRoaXMsIGQsIGggKyAiIGdldHRlciIpOwogICAgICAgICAgICAgIHJldHVybiBwLmZyb21XaXJlVHlwZShvKHMsIHgpKTsKICAgICAgICAgICAgfSwgZW51bWVyYWJsZTogITAgfTsKICAgICAgICAgICAgaWYgKHkpIHsKICAgICAgICAgICAgICB5ID0gRyhjLCB5KTsKICAgICAgICAgICAgICB2YXIgYiA9IFBbMV07CiAgICAgICAgICAgICAgTi5zZXQgPSBmdW5jdGlvbih4KSB7CiAgICAgICAgICAgICAgICB2YXIgTCA9IF90KHRoaXMsIGQsIGggKyAiIHNldHRlciIpLCBobiA9IFtdOwogICAgICAgICAgICAgICAgeShmLCBMLCBiLnRvV2lyZVR5cGUoaG4sIHgpKSwgQ24oaG4pOwogICAgICAgICAgICAgIH07CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCBOKSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIHY6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24ocikgewogICAgICAgICAgdmFyIGkgPSBqW3JdLnZhbHVlOwogICAgICAgICAgcmV0dXJuIEJuKHIpLCBpOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHIsIGkpIHsKICAgICAgICAgIHJldHVybiBlbihpKTsKICAgICAgICB9LCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IEFuLCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgbTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHIgPSBGbihyKSwgdCA9IFIodCksIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gaTsKICAgICAgICAgIH0sCiAgICAgICAgICB0b1dpcmVUeXBlOiBmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICAgIGlmICh0eXBlb2YgbyAhPSAibnVtYmVyIiAmJiB0eXBlb2YgbyAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4obykgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgcmV0dXJuIG87CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogaWUodCwgciksCiAgICAgICAgICBrYTogbnVsbAogICAgICAgIH0pOwogICAgICB9LAogICAgICBjOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvLCBzKSB7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBuID0gUihuKSwgbyA9IEcoaSwgbyksIHB0KG4sIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjYWxsICIgKyBuICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGwpOwogICAgICAgIH0sIHQgLSAxKSwgdG4oW10sIGwsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIHZhciB5ID0gbiwgZiA9IG47CiAgICAgICAgICBjID0gW2NbMF0sIG51bGxdLmNvbmNhdChjLnNsaWNlKDEpKTsKICAgICAgICAgIHZhciBkID0gbywgaCA9IGMubGVuZ3RoOwogICAgICAgICAgMiA+IGggJiYgdigiYXJnVHlwZXMgYXJyYXkgc2l6ZSBtaXNtYXRjaCEgTXVzdCBhdCBsZWFzdCBnZXQgcmV0dXJuIHZhbHVlIGFuZCAndGhpcycgdHlwZXMhIik7CiAgICAgICAgICBmb3IgKHZhciB3ID0gY1sxXSAhPT0gbnVsbCAmJiAhMSwgUCA9ICExLCBwID0gMTsgcCA8IGMubGVuZ3RoOyArK3ApIGlmIChjW3BdICE9PSBudWxsICYmIGNbcF0ua2EgPT09IHZvaWQgMCkgewogICAgICAgICAgICBQID0gITA7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgfQogICAgICAgICAgdmFyIE4gPSBjWzBdLm5hbWUgIT09ICJ2b2lkIiwgYiA9ICIiLCB4ID0gIiI7CiAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgaCAtIDI7ICsrcCkgYiArPSAocCAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHAsIHggKz0gKHAgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyBwICsgIldpcmVkIjsKICAgICAgICAgIGYgPSAicmV0dXJuIGZ1bmN0aW9uICIgKyBJbihmKSArICIoIiArIGIgKyBgKSB7CmlmIChhcmd1bWVudHMubGVuZ3RoICE9PSBgICsgKGggLSAyKSArIGApIHsKdGhyb3dCaW5kaW5nRXJyb3IoJ2Z1bmN0aW9uIGAgKyBmICsgIiBjYWxsZWQgd2l0aCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKGggLSAyKSArIGAgYXJncyEnKTsKfQpgLCBQICYmIChmICs9IGB2YXIgZGVzdHJ1Y3RvcnMgPSBbXTsKYCk7CiAgICAgICAgICB2YXIgTCA9IFAgPyAiZGVzdHJ1Y3RvcnMiIDogIm51bGwiOwogICAgICAgICAgZm9yIChiID0gInRocm93QmluZGluZ0Vycm9yIGludm9rZXIgZm4gcnVuRGVzdHJ1Y3RvcnMgcmV0VHlwZSBjbGFzc1BhcmFtIi5zcGxpdCgiICIpLCBkID0gW3YsIGQsIHMsIENuLCBjWzBdLCBjWzFdXSwgdyAmJiAoZiArPSAidmFyIHRoaXNXaXJlZCA9IGNsYXNzUGFyYW0udG9XaXJlVHlwZSgiICsgTCArIGAsIHRoaXMpOwpgKSwgcCA9IDA7IHAgPCBoIC0gMjsgKytwKSBmICs9ICJ2YXIgYXJnIiArIHAgKyAiV2lyZWQgPSBhcmdUeXBlIiArIHAgKyAiLnRvV2lyZVR5cGUoIiArIEwgKyAiLCBhcmciICsgcCArICIpOyAvLyAiICsgY1twICsgMl0ubmFtZSArIGAKYCwgYi5wdXNoKCJhcmdUeXBlIiArIHApLCBkLnB1c2goY1twICsgMl0pOwogICAgICAgICAgaWYgKHcgJiYgKHggPSAidGhpc1dpcmVkIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCksIGYgKz0gKE4gPyAidmFyIHJ2ID0gIiA6ICIiKSArICJpbnZva2VyKGZuIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCArIGApOwpgLCBQKSBmICs9IGBydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyk7CmA7CiAgICAgICAgICBlbHNlIGZvciAocCA9IHcgPyAxIDogMjsgcCA8IGMubGVuZ3RoOyArK3ApIGggPSBwID09PSAxID8gInRoaXNXaXJlZCIgOiAiYXJnIiArIChwIC0gMikgKyAiV2lyZWQiLCBjW3BdLmthICE9PSBudWxsICYmIChmICs9IGggKyAiX2R0b3IoIiArIGggKyAiKTsgLy8gIiArIGNbcF0ubmFtZSArIGAKYCwgYi5wdXNoKGggKyAiX2R0b3IiKSwgZC5wdXNoKGNbcF0ua2EpKTsKICAgICAgICAgIHJldHVybiBOICYmIChmICs9IGB2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpOwpyZXR1cm4gcmV0OwpgKSwgYi5wdXNoKGYgKyBgfQpgKSwgYyA9IGFlKGIpLmFwcGx5KG51bGwsIGQpLCB2dCh5LCBjLCB0IC0gMSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBlOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvKSB7CiAgICAgICAgZnVuY3Rpb24gcyhmKSB7CiAgICAgICAgICByZXR1cm4gZjsKICAgICAgICB9CiAgICAgICAgdCA9IFIodCksIG8gPT09IC0xICYmIChvID0gNDI5NDk2NzI5NSk7CiAgICAgICAgdmFyIGwgPSBGbihyKTsKICAgICAgICBpZiAoaSA9PT0gMCkgewogICAgICAgICAgdmFyIGMgPSAzMiAtIDggKiByOwogICAgICAgICAgcyA9IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgcmV0dXJuIGYgPDwgYyA+Pj4gYzsKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICAgIHZhciB5ID0gdC5pbmRleE9mKCJ1bnNpZ25lZCIpICE9IC0xOwogICAgICAgIEQobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IHMsIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGYsIGQpIHsKICAgICAgICAgIGlmICh0eXBlb2YgZCAhPSAibnVtYmVyIiAmJiB0eXBlb2YgZCAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oZCkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgIGlmIChkIDwgaSB8fCBkID4gbykgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciAiJyArIHJuKGQpICsgJyIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSAiJyArIHQgKyAnIiwgd2hpY2ggaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UgWycgKyBpICsgIiwgIiArIG8gKyAiXSEiKTsKICAgICAgICAgIHJldHVybiB5ID8gZCA+Pj4gMCA6IGQgfCAwOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogb2UodCwgbCwgaSAhPT0gMCksIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBkOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgZnVuY3Rpb24gaShzKSB7CiAgICAgICAgICBzID4+PSAyOwogICAgICAgICAgdmFyIGwgPSBVOwogICAgICAgICAgcmV0dXJuIG5ldyBvKEssIGxbcyArIDFdLCBsW3NdKTsKICAgICAgICB9CiAgICAgICAgdmFyIG8gPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gUihyKSwgRChuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFIodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgbyA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpIGZvciAodmFyIHMgPSBpICsgNCwgbCA9IDA7IGwgPD0gbzsgKytsKSB7CiAgICAgICAgICAgICAgdmFyIGMgPSBpICsgNCArIGw7CiAgICAgICAgICAgICAgaWYgKGwgPT0gbyB8fCBGW2NdID09IDApIHsKICAgICAgICAgICAgICAgIGlmIChzKSB7CiAgICAgICAgICAgICAgICAgIHZhciB5ID0gcywgZiA9IEYsIGQgPSB5ICsgKGMgLSBzKTsKICAgICAgICAgICAgICAgICAgZm9yIChzID0geTsgZltzXSAmJiAhKHMgPj0gZCk7ICkgKytzOwogICAgICAgICAgICAgICAgICBpZiAoMTYgPCBzIC0geSAmJiBmLnN1YmFycmF5ICYmIFFuKSB5ID0gUW4uZGVjb2RlKGYuc3ViYXJyYXkoeSwgcykpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAiIjsgeSA8IHM7ICkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBmW3krK107CiAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZbeSsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGggJiAyMjQpID09IDE5MikgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChoICYgMzEpIDw8IDYgfCB3KTsKICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3krK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gKGggJiAyNDApID09IDIyNCA/IChoICYgMTUpIDw8IDEyIHwgdyA8PCA2IHwgUCA6IChoICYgNykgPDwgMTggfCB3IDw8IDEyIHwgUCA8PCA2IHwgZlt5KytdICYgNjMsIDY1NTM2ID4gaCA/IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKSA6IChoIC09IDY1NTM2LCBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBoID4+IDEwLCA1NjMyMCB8IGggJiAxMDIzKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoaCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHkgPSBkOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgeSA9ICIiOwogICAgICAgICAgICAgICAgaWYgKHAgPT09IHZvaWQgMCkgdmFyIHAgPSB5OwogICAgICAgICAgICAgICAgZWxzZSBwICs9ICJcMCIsIHAgKz0geTsKICAgICAgICAgICAgICAgIHMgPSBjICsgMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgZm9yIChwID0gQXJyYXkobyksIGwgPSAwOyBsIDwgbzsgKytsKSBwW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZShGW2kgKyA0ICsgbF0pOwogICAgICAgICAgICAgIHAgPSBwLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiB6KGkpLCBwOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIG8pIHsKICAgICAgICAgICAgbyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChvID0gbmV3IFVpbnQ4QXJyYXkobykpOwogICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiBvID09ICJzdHJpbmciOwogICAgICAgICAgICBzIHx8IG8gaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IG8gaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBvIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGwgPSAociAmJiBzID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgby5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBvLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IG8uY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIG8ubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBjID0gRW4oNCArIGwgKyAxKTsKICAgICAgICAgICAgaWYgKFVbYyA+PiAyXSA9IGwsIHIgJiYgcykgVXQobywgYyArIDQsIGwgKyAxKTsKICAgICAgICAgICAgZWxzZSBpZiAocykgZm9yIChzID0gMDsgcyA8IGw7ICsrcykgewogICAgICAgICAgICAgIHZhciB5ID0gby5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgICAgIDI1NSA8IHkgJiYgKHooYyksIHYoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpKSwgRltjICsgNCArIHNdID0geTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGZvciAocyA9IDA7IHMgPCBsOyArK3MpIEZbYyArIDQgKyBzXSA9IG9bc107CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaCh6LCBjKSwgYzsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHooaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFIociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IER0LCBvID0gQnQsIHMgPSB6dCwgbCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4geW47CiAgICAgICAgICB9LCBjID0gMTsKICAgICAgICBlbHNlIHQgPT09IDQgJiYgKGkgPSBWdCwgbyA9IEd0LCBzID0gWXQsIGwgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiBVOwogICAgICAgIH0sIGMgPSAyKTsKICAgICAgICBEKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVt5ID4+IDJdLCBkID0gbCgpLCBoLCB3ID0geSArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgcCA9IHkgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFtwID4+IGNdID09IDApICYmICh3ID0gaSh3LCBwIC0gdyksIGggPT09IHZvaWQgMCA/IGggPSB3IDogKGggKz0gIlwwIiwgaCArPSB3KSwgdyA9IHAgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiB6KHkpLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHksIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gcyhmKSwgaCA9IEVuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBjLCBvKGYsIGggKyA0LCBkICsgdCksIHkgIT09IG51bGwgJiYgeS5wdXNoKHosIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICB6KHkpOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSB6bihuKSwgdCA9IEN0KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBvID0gZW4oaSk7CiAgICAgICAgcmV0dXJuIGtbciA+PiAyXSA9IG8sIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogQm4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IHpuKG4pLCB0ID0gem4odCksIGVuKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBzZVtuXTsKICAgICAgICByZXR1cm4gZW4odCA9PT0gdm9pZCAwID8gUihuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgQ24oaltuXS52YWx1ZSksIEJuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBDdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIGVuKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBzbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgRi5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gRi5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKSByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBILmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBLLmJ5dGVMZW5ndGggKyA2NTUzNSA+Pj4gMTYpLCBldChILmJ1ZmZlcik7CiAgICAgICAgICAgICAgdmFyIG8gPSAxOwogICAgICAgICAgICAgIGJyZWFrIG47CiAgICAgICAgICAgIH0gY2F0Y2ggewogICAgICAgICAgICB9CiAgICAgICAgICAgIG8gPSB2b2lkIDA7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAobykgcmV0dXJuICEwOwogICAgICAgIH0KICAgICAgICByZXR1cm4gITE7CiAgICAgIH0sCiAgICAgIHM6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IDA7CiAgICAgICAgcmV0dXJuIEV0KCkuZm9yRWFjaChmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICB2YXIgcyA9IHQgKyByOwogICAgICAgICAgZm9yIChvID0ga1tuICsgNCAqIG8gPj4gMl0gPSBzLCBzID0gMDsgcyA8IGkubGVuZ3RoOyArK3MpIFlbbysrID4+IDBdID0gaS5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgWVtvID4+IDBdID0gMCwgciArPSBpLmxlbmd0aCArIDE7CiAgICAgICAgfSksIDA7CiAgICAgIH0sCiAgICAgIHQ6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IEV0KCk7CiAgICAgICAga1tuID4+IDJdID0gci5sZW5ndGg7CiAgICAgICAgdmFyIGkgPSAwOwogICAgICAgIHJldHVybiByLmZvckVhY2goZnVuY3Rpb24obykgewogICAgICAgICAgaSArPSBvLmxlbmd0aCArIDE7CiAgICAgICAgfSksIGtbdCA+PiAyXSA9IGksIDA7CiAgICAgIH0sCiAgICAgIGE6IEgKICAgIH07CiAgICAoZnVuY3Rpb24oKSB7CiAgICAgIGZ1bmN0aW9uIG4ocykgewogICAgICAgIHMgPSBzLmV4cG9ydHMsIHMgPSBNdChzKSwgZS5hc20gPSBzLCBaLS0sIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIFogPT0gMCAmJiBvbiAmJiAocyA9IG9uLCBvbiA9IG51bGwsIHMoKSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gdChzKSB7CiAgICAgICAgbihzLmluc3RhbmNlKTsKICAgICAgfQogICAgICBmdW5jdGlvbiByKHMpIHsKICAgICAgICByZXR1cm4gWHQoKS50aGVuKGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShsLCBpKTsKICAgICAgICB9KS50aGVuKHMsIGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIEUoImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206ICIgKyBsKSwgc24obCk7CiAgICAgICAgfSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSB7IGE6IHVlIH07CiAgICAgIGlmIChaKyssIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIGUuaW5zdGFudGlhdGVXYXNtKSB0cnkgewogICAgICAgIHZhciBvID0gZS5pbnN0YW50aWF0ZVdhc20oaSwgbik7CiAgICAgICAgcmV0dXJuIG8gPSBNdChvKTsKICAgICAgfSBjYXRjaCAocykgewogICAgICAgIHJldHVybiBFKCJNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiAiICsgcyksICExOwogICAgICB9CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICBpZiAoVyB8fCB0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgIT0gImZ1bmN0aW9uIiB8fCBzdCgpIHx8IFJuKCJmaWxlOi8vIikgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIpIHJldHVybiByKHQpOwogICAgICAgIGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihzKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocywgaSkudGhlbih0LCBmdW5jdGlvbihsKSB7CiAgICAgICAgICAgIHJldHVybiBFKCJ3YXNtIHN0cmVhbWluZyBjb21waWxlIGZhaWxlZDogIiArIGwpLCBFKCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvbiIpLCByKHQpOwogICAgICAgICAgfSk7CiAgICAgICAgfSk7CiAgICAgIH0oKSwge307CiAgICB9KSgpOwogICAgdmFyIFN0ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChTdCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZS5hc20uQikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIEVuID0gZS5fbWFsbG9jID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRW4gPSBlLl9tYWxsb2MgPSBlLmFzbS5DKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgeiA9IGUuX2ZyZWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICh6ID0gZS5fZnJlZSA9IGUuYXNtLkQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBlLmFzbS5FKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGUuYXNtLkYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWkgPSBlLmFzbS5HKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpID0gZS5hc20uSCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9pID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2kgPSBlLmFzbS5JKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWkgPSBlLmFzbS5KKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaSA9IGUuYXNtLkspLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfZmlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2ZpaSA9IGUuYXNtLkwpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpZiA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlmID0gZS5hc20uTSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaSA9IGUuYXNtLk4pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpID0gZS5hc20uTykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpID0gZS5hc20uUCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpID0gZS5hc20uUSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpaSA9IGUuYXNtLlIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWkgPSBlLmFzbS5TKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBlLmFzbS5UKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZS5hc20uVSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGUuYXNtLlYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZS5hc20uVykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpID0gZS5hc20uWCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaWkgPSBlLmFzbS5ZKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpID0gZS5hc20uWikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWkgPSBlLmFzbS5fKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZS5hc20uJCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBlLmFzbS5hYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGUuYXNtLmJhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGUuYXNtLmNhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIHZhciBQbjsKICAgIG9uID0gZnVuY3Rpb24gbigpIHsKICAgICAgUG4gfHwgR24oKSwgUG4gfHwgKG9uID0gbik7CiAgICB9OwogICAgZnVuY3Rpb24gR24oKSB7CiAgICAgIGZ1bmN0aW9uIG4oKSB7CiAgICAgICAgaWYgKCFQbiAmJiAoUG4gPSAhMCwgZS5jYWxsZWRSdW4gPSAhMCwgIWtuKSkgewogICAgICAgICAgaWYgKHBuKGF0KSwgcG4oWnQpLCBtKGUpLCBlLm9uUnVudGltZUluaXRpYWxpemVkICYmIGUub25SdW50aW1lSW5pdGlhbGl6ZWQoKSwgZS5wb3N0UnVuKSBmb3IgKHR5cGVvZiBlLnBvc3RSdW4gPT0gImZ1bmN0aW9uIiAmJiAoZS5wb3N0UnVuID0gW2UucG9zdFJ1bl0pOyBlLnBvc3RSdW4ubGVuZ3RoOyApIHsKICAgICAgICAgICAgdmFyIHQgPSBlLnBvc3RSdW4uc2hpZnQoKTsKICAgICAgICAgICAgb3QudW5zaGlmdCh0KTsKICAgICAgICAgIH0KICAgICAgICAgIHBuKG90KTsKICAgICAgICB9CiAgICAgIH0KICAgICAgaWYgKCEoMCA8IFopKSB7CiAgICAgICAgaWYgKGUucHJlUnVuKSBmb3IgKHR5cGVvZiBlLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnByZVJ1biA9IFtlLnByZVJ1bl0pOyBlLnByZVJ1bi5sZW5ndGg7ICkgJHQoKTsKICAgICAgICBwbihpdCksIDAgPCBaIHx8IChlLnNldFN0YXR1cyA/IChlLnNldFN0YXR1cygiUnVubmluZy4uLiIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgICAgZS5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgfSwgMSksIG4oKTsKICAgICAgICB9LCAxKSkgOiBuKCkpOwogICAgICB9CiAgICB9CiAgICBpZiAoZS5ydW4gPSBHbiwgZS5wcmVJbml0KSBmb3IgKHR5cGVvZiBlLnByZUluaXQgPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVJbml0ID0gW2UucHJlSW5pdF0pOyAwIDwgZS5wcmVJbml0Lmxlbmd0aDsgKSBlLnByZUluaXQucG9wKCkoKTsKICAgIHJldHVybiBHbigpLCB1LnJlYWR5OwogIH07Cn0oKTsKY2xhc3MgbWUgewogIGNvbnN0cnVjdG9yKCkgewogICAgWW4odGhpcywgInNhbVdhc21Nb2R1bGUiKTsKICB9CiAgZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZSkgewogICAgcmV0dXJuIHsKICAgICAgbG9jYXRlRmlsZTogKG0pID0+IG5ldyBVUkwoZSB8fCBtLCB1KS5ocmVmCiAgICB9OwogIH0KICBhc3luYyBoYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKHUsIGUpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IG0gPSBhd2FpdCBmZXRjaCh1KTsKICAgICAgaWYgKCFtLm9rKQogICAgICAgIHRocm93IG5ldyBJKAogICAgICAgICAgYFRoZSBwYXRoIHRvICR7ZX0gaXMgaW5jb3JyZWN0IG9yIHRoZSBtb2R1bGUgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgICAgY29uc3QgZyA9IGF3YWl0IG0uYXJyYXlCdWZmZXIoKTsKICAgICAgaWYgKCFXZWJBc3NlbWJseS52YWxpZGF0ZShnKSkKICAgICAgICB0aHJvdyBuZXcgSSgKICAgICAgICAgIGBUaGUgcHJvdmlkZWQgJHtlfSBpcyBub3QgYSB2YWxpZCBXQVNNIG1vZHVsZS4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgIH0gY2F0Y2ggKG0pIHsKICAgICAgaWYgKG0gaW5zdGFuY2VvZiBJKQogICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICAgICAiWW91IGNhbiBmaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIGhvc3Qgd2FzbSBmaWxlcyBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuaW5ub3ZhdHJpY3MuY29tL2RpZ2l0YWwtb25ib2FyZGluZy90ZWNobmljYWwvcmVtb3RlL2RvdC13ZWItZG9jdW1lbnQvbGF0ZXN0L2RvY3VtZW50YXRpb24vI19ob3N0aW5nX3NhbV93YXNtIgogICAgICAgICksIG07CiAgICB9CiAgfQogIGFzeW5jIGdldFdhc21GaWxlTmFtZSgpIHsKICAgIHJldHVybiBhd2FpdCBmZSgpID8ga3Quc2ltZCA6IGt0LnNhbTsKICB9CiAgYXN5bmMgaW5pdFNhbU1vZHVsZSh1LCBlID0gIi93YXNtIikgewogICAgaWYgKHRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgcmV0dXJuOwogICAgY29uc3QgbSA9IGF3YWl0IHRoaXMuZ2V0V2FzbUZpbGVOYW1lKCksIGcgPSBgJHtlfS8ke219YDsKICAgIHRyeSB7CiAgICAgIHRoaXMuc2FtV2FzbU1vZHVsZSA9IGF3YWl0IHBlKHRoaXMuZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZykpOwogICAgfSBjYXRjaCB7CiAgICAgIHRocm93IGF3YWl0IHRoaXMuaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZShnLCBtKSwgbmV3IEkoIkNvdWxkIG5vdCBpbml0IGRldGVjdG9yLiIpOwogICAgfQogIH0KICBhc3luYyBnZXRTYW1WZXJzaW9uKCkgewogICAgdmFyIGU7CiAgICBjb25zdCB1ID0gYXdhaXQgKChlID0gdGhpcy5zYW1XYXNtTW9kdWxlKSA9PSBudWxsID8gdm9pZCAwIDogZS5nZXRJbmZvU3RyaW5nKCkpOwogICAgcmV0dXJuIHUgPT0gbnVsbCA/IHZvaWQgMCA6IHUudHJpbSgpOwogIH0KICAvKgogICAqIEluIFRTIDUuMi4wIHdhcyBhZGRlZCBzcGVjaWFsIGtleXdvcmQgInVzaW5nIiB3aGljaCBjb3VsZCBiZSBwZXJmZWN0IGZvciB0aGlzIGNhc2UuCiAgICogVW5mb3J0dW5hdGVseSwgdml0ZSBwcmVhY3QgcGx1Z2luIGRvZXMgbm90IHN1cHBvcnQgdGhpcyB2ZXJzaW9uIG9mIFRTIHlldC4KICAgKiBDaGVjayBwb3NzaWJpbGl0eSBvZiB1c2luZyAidXNpbmciIGtleXdvcmQgd2hlbiB2aXRlIHByZWFjdCBwbHVnaW4gdXBkYXRlcwogICAqLwogIGFsbG9jYXRlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgcmV0dXJuIHRoaXMuc2FtV2FzbU1vZHVsZS5fbWFsbG9jKHUpOwogIH0KICByZWxlYXNlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLl9mcmVlKHUpOwogIH0KICB3cml0ZURhdGFUb01lbW9yeSh1LCBlKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEkoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIHRoaXMuc2FtV2FzbU1vZHVsZS5IRUFQVTguc2V0KHUsIGUpOwogIH0KfQovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQwogKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMAogKi8KY29uc3QgeHQgPSBTeW1ib2woIkNvbWxpbmsucHJveHkiKSwgdmUgPSBTeW1ib2woIkNvbWxpbmsuZW5kcG9pbnQiKSwgZ2UgPSBTeW1ib2woIkNvbWxpbmsucmVsZWFzZVByb3h5IiksIFpuID0gU3ltYm9sKCJDb21saW5rLmZpbmFsaXplciIpLCBPbiA9IFN5bWJvbCgiQ29tbGluay50aHJvd24iKSwgRnQgPSAoYSkgPT4gdHlwZW9mIGEgPT0gIm9iamVjdCIgJiYgYSAhPT0gbnVsbCB8fCB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iLCB3ZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBGdChhKSAmJiBhW3h0XSwKICBzZXJpYWxpemUoYSkgewogICAgY29uc3QgeyBwb3J0MTogdSwgcG9ydDI6IGUgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgcmV0dXJuIEpuKGEsIHUpLCBbZSwgW2VdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHJldHVybiBhLnN0YXJ0KCksIFRlKGEpOwogIH0KfSwgQWUgPSB7CiAgY2FuSGFuZGxlOiAoYSkgPT4gRnQoYSkgJiYgT24gaW4gYSwKICBzZXJpYWxpemUoeyB2YWx1ZTogYSB9KSB7CiAgICBsZXQgdTsKICAgIHJldHVybiBhIGluc3RhbmNlb2YgRXJyb3IgPyB1ID0gewogICAgICBpc0Vycm9yOiAhMCwKICAgICAgdmFsdWU6IHsKICAgICAgICBtZXNzYWdlOiBhLm1lc3NhZ2UsCiAgICAgICAgbmFtZTogYS5uYW1lLAogICAgICAgIHN0YWNrOiBhLnN0YWNrCiAgICAgIH0KICAgIH0gOiB1ID0geyBpc0Vycm9yOiAhMSwgdmFsdWU6IGEgfSwgW3UsIFtdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHRocm93IGEuaXNFcnJvciA/IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGEudmFsdWUubWVzc2FnZSksIGEudmFsdWUpIDogYS52YWx1ZTsKICB9Cn0sIEl0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoWwogIFsicHJveHkiLCB3ZV0sCiAgWyJ0aHJvdyIsIEFlXQpdKTsKZnVuY3Rpb24gX2UoYSwgdSkgewogIGZvciAoY29uc3QgZSBvZiBhKQogICAgaWYgKHUgPT09IGUgfHwgZSA9PT0gIioiIHx8IGUgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZS50ZXN0KHUpKQogICAgICByZXR1cm4gITA7CiAgcmV0dXJuICExOwp9CmZ1bmN0aW9uIEpuKGEsIHUgPSBnbG9iYWxUaGlzLCBlID0gWyIqIl0pIHsKICB1LmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBtKGcpIHsKICAgIGlmICghZyB8fCAhZy5kYXRhKQogICAgICByZXR1cm47CiAgICBpZiAoIV9lKGUsIGcub3JpZ2luKSkgewogICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgb3JpZ2luICcke2cub3JpZ2lufScgZm9yIGNvbWxpbmsgcHJveHlgKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgY29uc3QgeyBpZDogQywgdHlwZTogQSwgcGF0aDogTSB9ID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFtdIH0sIGcuZGF0YSksIE8gPSAoZy5kYXRhLmFyZ3VtZW50TGlzdCB8fCBbXSkubWFwKEopOwogICAgbGV0IFQ7CiAgICB0cnkgewogICAgICBjb25zdCBfID0gTS5zbGljZSgwLCAtMSkucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKSwgUyA9IE0ucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKTsKICAgICAgc3dpdGNoIChBKSB7CiAgICAgICAgY2FzZSAiR0VUIjoKICAgICAgICAgIFQgPSBTOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiU0VUIjoKICAgICAgICAgIF9bTS5zbGljZSgtMSlbMF1dID0gSihnLmRhdGEudmFsdWUpLCBUID0gITA7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJBUFBMWSI6CiAgICAgICAgICBUID0gUy5hcHBseShfLCBPKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkNPTlNUUlVDVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IEUgPSBuZXcgUyguLi5PKTsKICAgICAgICAgICAgVCA9IFNlKEUpOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiRU5EUE9JTlQiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCB7IHBvcnQxOiBFLCBwb3J0MjogVyB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICAgICAgICAgIEpuKGEsIFcpLCBUID0gT2UoRSwgW0VdKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlJFTEVBU0UiOgogICAgICAgICAgVCA9IHZvaWQgMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICByZXR1cm47CiAgICAgIH0KICAgIH0gY2F0Y2ggKF8pIHsKICAgICAgVCA9IHsgdmFsdWU6IF8sIFtPbl06IDAgfTsKICAgIH0KICAgIFByb21pc2UucmVzb2x2ZShUKS5jYXRjaCgoXykgPT4gKHsgdmFsdWU6IF8sIFtPbl06IDAgfSkpLnRoZW4oKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oXyk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBTKSwgeyBpZDogQyB9KSwgRSksIEEgPT09ICJSRUxFQVNFIiAmJiAodS5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgbSksIGp0KHUpLCBabiBpbiBhICYmIHR5cGVvZiBhW1puXSA9PSAiZnVuY3Rpb24iICYmIGFbWm5dKCkpOwogICAgfSkuY2F0Y2goKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oewogICAgICAgIHZhbHVlOiBuZXcgVHlwZUVycm9yKCJVbnNlcmlhbGl6YWJsZSByZXR1cm4gdmFsdWUiKSwKICAgICAgICBbT25dOiAwCiAgICAgIH0pOwogICAgICB1LnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUyksIHsgaWQ6IEMgfSksIEUpOwogICAgfSk7CiAgfSksIHUuc3RhcnQgJiYgdS5zdGFydCgpOwp9CmZ1bmN0aW9uIENlKGEpIHsKICByZXR1cm4gYS5jb25zdHJ1Y3Rvci5uYW1lID09PSAiTWVzc2FnZVBvcnQiOwp9CmZ1bmN0aW9uIGp0KGEpIHsKICBDZShhKSAmJiBhLmNsb3NlKCk7Cn0KZnVuY3Rpb24gVGUoYSwgdSkgewogIHJldHVybiBYbihhLCBbXSwgdSk7Cn0KZnVuY3Rpb24gTW4oYSkgewogIGlmIChhKQogICAgdGhyb3cgbmV3IEVycm9yKCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGUiKTsKfQpmdW5jdGlvbiBMdChhKSB7CiAgcmV0dXJuIGFuKGEsIHsKICAgIHR5cGU6ICJSRUxFQVNFIgogIH0pLnRoZW4oKCkgPT4gewogICAganQoYSk7CiAgfSk7Cn0KY29uc3QgU24gPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgV24gPSAiRmluYWxpemF0aW9uUmVnaXN0cnkiIGluIGdsb2JhbFRoaXMgJiYgbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChhKSA9PiB7CiAgY29uc3QgdSA9IChTbi5nZXQoYSkgfHwgMCkgLSAxOwogIFNuLnNldChhLCB1KSwgdSA9PT0gMCAmJiBMdChhKTsKfSk7CmZ1bmN0aW9uIEVlKGEsIHUpIHsKICBjb25zdCBlID0gKFNuLmdldCh1KSB8fCAwKSArIDE7CiAgU24uc2V0KHUsIGUpLCBXbiAmJiBXbi5yZWdpc3RlcihhLCB1LCBhKTsKfQpmdW5jdGlvbiBQZShhKSB7CiAgV24gJiYgV24udW5yZWdpc3RlcihhKTsKfQpmdW5jdGlvbiBYbihhLCB1ID0gW10sIGUgPSBmdW5jdGlvbigpIHsKfSkgewogIGxldCBtID0gITE7CiAgY29uc3QgZyA9IG5ldyBQcm94eShlLCB7CiAgICBnZXQoQywgQSkgewogICAgICBpZiAoTW4obSksIEEgPT09IGdlKQogICAgICAgIHJldHVybiAoKSA9PiB7CiAgICAgICAgICBQZShnKSwgTHQoYSksIG0gPSAhMDsKICAgICAgICB9OwogICAgICBpZiAoQSA9PT0gInRoZW4iKSB7CiAgICAgICAgaWYgKHUubGVuZ3RoID09PSAwKQogICAgICAgICAgcmV0dXJuIHsgdGhlbjogKCkgPT4gZyB9OwogICAgICAgIGNvbnN0IE0gPSBhbihhLCB7CiAgICAgICAgICB0eXBlOiAiR0VUIiwKICAgICAgICAgIHBhdGg6IHUubWFwKChPKSA9PiBPLnRvU3RyaW5nKCkpCiAgICAgICAgfSkudGhlbihKKTsKICAgICAgICByZXR1cm4gTS50aGVuLmJpbmQoTSk7CiAgICAgIH0KICAgICAgcmV0dXJuIFhuKGEsIFsuLi51LCBBXSk7CiAgICB9LAogICAgc2V0KEMsIEEsIE0pIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtPLCBUXSA9IGJuKE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJTRVQiLAogICAgICAgIHBhdGg6IFsuLi51LCBBXS5tYXAoKF8pID0+IF8udG9TdHJpbmcoKSksCiAgICAgICAgdmFsdWU6IE8KICAgICAgfSwgVCkudGhlbihKKTsKICAgIH0sCiAgICBhcHBseShDLCBBLCBNKSB7CiAgICAgIE1uKG0pOwogICAgICBjb25zdCBPID0gdVt1Lmxlbmd0aCAtIDFdOwogICAgICBpZiAoTyA9PT0gdmUpCiAgICAgICAgcmV0dXJuIGFuKGEsIHsKICAgICAgICAgIHR5cGU6ICJFTkRQT0lOVCIKICAgICAgICB9KS50aGVuKEopOwogICAgICBpZiAoTyA9PT0gImJpbmQiKQogICAgICAgIHJldHVybiBYbihhLCB1LnNsaWNlKDAsIC0xKSk7CiAgICAgIGNvbnN0IFtULCBfXSA9IFJ0KE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJBUFBMWSIsCiAgICAgICAgcGF0aDogdS5tYXAoKFMpID0+IFMudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIF8pLnRoZW4oSik7CiAgICB9LAogICAgY29uc3RydWN0KEMsIEEpIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtNLCBPXSA9IFJ0KEEpOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJDT05TVFJVQ1QiLAogICAgICAgIHBhdGg6IHUubWFwKChUKSA9PiBULnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogTQogICAgICB9LCBPKS50aGVuKEopOwogICAgfQogIH0pOwogIHJldHVybiBFZShnLCBhKSwgZzsKfQpmdW5jdGlvbiBNZShhKSB7CiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGEpOwp9CmZ1bmN0aW9uIFJ0KGEpIHsKICBjb25zdCB1ID0gYS5tYXAoYm4pOwogIHJldHVybiBbdS5tYXAoKGUpID0+IGVbMF0pLCBNZSh1Lm1hcCgoZSkgPT4gZVsxXSkpXTsKfQpjb25zdCBOdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpOwpmdW5jdGlvbiBPZShhLCB1KSB7CiAgcmV0dXJuIE50LnNldChhLCB1KSwgYTsKfQpmdW5jdGlvbiBTZShhKSB7CiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYSwgeyBbeHRdOiAhMCB9KTsKfQpmdW5jdGlvbiBibihhKSB7CiAgZm9yIChjb25zdCBbdSwgZV0gb2YgSXQpCiAgICBpZiAoZS5jYW5IYW5kbGUoYSkpIHsKICAgICAgY29uc3QgW20sIGddID0gZS5zZXJpYWxpemUoYSk7CiAgICAgIHJldHVybiBbCiAgICAgICAgewogICAgICAgICAgdHlwZTogIkhBTkRMRVIiLAogICAgICAgICAgbmFtZTogdSwKICAgICAgICAgIHZhbHVlOiBtCiAgICAgICAgfSwKICAgICAgICBnCiAgICAgIF07CiAgICB9CiAgcmV0dXJuIFsKICAgIHsKICAgICAgdHlwZTogIlJBVyIsCiAgICAgIHZhbHVlOiBhCiAgICB9LAogICAgTnQuZ2V0KGEpIHx8IFtdCiAgXTsKfQpmdW5jdGlvbiBKKGEpIHsKICBzd2l0Y2ggKGEudHlwZSkgewogICAgY2FzZSAiSEFORExFUiI6CiAgICAgIHJldHVybiBJdC5nZXQoYS5uYW1lKS5kZXNlcmlhbGl6ZShhLnZhbHVlKTsKICAgIGNhc2UgIlJBVyI6CiAgICAgIHJldHVybiBhLnZhbHVlOwogIH0KfQpmdW5jdGlvbiBhbihhLCB1LCBlKSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChtKSA9PiB7CiAgICBjb25zdCBnID0gV2UoKTsKICAgIGEuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIEMoQSkgewogICAgICAhQS5kYXRhIHx8ICFBLmRhdGEuaWQgfHwgQS5kYXRhLmlkICE9PSBnIHx8IChhLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBDKSwgbShBLmRhdGEpKTsKICAgIH0pLCBhLnN0YXJ0ICYmIGEuc3RhcnQoKSwgYS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHsgaWQ6IGcgfSwgdSksIGUpOwogIH0pOwp9CmZ1bmN0aW9uIFdlKCkgewogIHJldHVybiBuZXcgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpLnRvU3RyaW5nKDE2KSkuam9pbigiLSIpOwp9CmZ1bmN0aW9uIEh0KGEsIHUpIHsKICByZXR1cm4gTWF0aC5zcXJ0KChhLnggLSB1LngpICoqIDIgKyAoYS55IC0gdS55KSAqKiAyKTsKfQpmdW5jdGlvbiBiZShhLCB1KSB7CiAgcmV0dXJuIHsKICAgIHg6IChhLnggKyB1LngpIC8gMiwKICAgIHk6IChhLnkgKyB1LnkpIC8gMgogIH07Cn0KZnVuY3Rpb24ga2UoYSwgdSkgewogIGlmIChhLmNvbmZpZGVuY2UgPD0gMCB8fCB1LmNvbmZpZGVuY2UgPD0gMCkKICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTsKICBjb25zdCBlID0gSHQoYS5jZW50ZXIsIHUuY2VudGVyKSwgbSA9IGJlKGEuY2VudGVyLCB1LmNlbnRlcik7CiAgcmV0dXJuIHsKICAgIHg6IG0ueCwKICAgIHk6IG0ueSArIGUgLyA0CiAgICAvLyBjYWxjdWxhdGlvbiBpcyB0YWtlbiBmcm9tIG1vYmlsZSB0ZWFtCiAgfTsKfQpmdW5jdGlvbiBSZShhLCB1LCBlKSB7CiAgaWYgKGEuY29uZmlkZW5jZSA8PSAwIHx8IHUuY29uZmlkZW5jZSA8PSAwKQogICAgcmV0dXJuIDA7CiAgY29uc3QgbSA9IEh0KGEuY2VudGVyLCB1LmNlbnRlciksIGcgPSB5ZShlLndpZHRoLCBlLmhlaWdodCk7CiAgcmV0dXJuIGhlKG0gLyBnKTsKfQpmdW5jdGlvbiAkbihhKSB7CiAgY29uc3QgeyBjZW50ZXJYOiB1LCBjZW50ZXJZOiBlLCBjb25maWRlbmNlOiBtLCBzaXplOiBnLCBzdGF0dXM6IEMgfSA9IGE7CiAgcmV0dXJuIHsKICAgIGNlbnRlcjogewogICAgICB4OiB1LAogICAgICB5OiBlCiAgICB9LAogICAgY29uZmlkZW5jZTogbSAvIDFlMywKICAgIHN0YXR1czogQyAvIDFlMywKICAgIHNpemU6IGcKICB9Owp9CmNsYXNzIHhlIGV4dGVuZHMgbWUgewogIHBhcnNlUmF3RGF0YSh1LCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBDLCBib3R0b21SaWdodFk6IEEsIGxlZnRFeWU6IE0sIG1vdXRoOiBPLCByaWdodEV5ZTogVCwgdG9wTGVmdFg6IF8sIHRvcExlZnRZOiBTIH0gPSB1LCBFID0gJG4oTSksIFcgPSAkbihUKSwgSCA9ICRuKE8pOwogICAgcmV0dXJuIHsKICAgICAgY29uZmlkZW5jZTogdS5jb25maWRlbmNlIC8gMWUzLAogICAgICB0b3BMZWZ0OiB7CiAgICAgICAgeDogXywKICAgICAgICB5OiBTCiAgICAgIH0sCiAgICAgIGJvdHRvbVJpZ2h0OiB7CiAgICAgICAgeDogQywKICAgICAgICB5OiBBCiAgICAgIH0sCiAgICAgIGZhY2VDZW50ZXI6IGtlKEUsIFcpLAogICAgICBmYWNlU2l6ZTogUmUoRSwgVywgZSksCiAgICAgIGxlZnRFeWU6IEUsCiAgICAgIHJpZ2h0RXllOiBXLAogICAgICBtb3V0aDogSCwKICAgICAgYnJpZ2h0bmVzczogbSAvIDFlMywKICAgICAgc2hhcnBuZXNzOiBnIC8gMWUzCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QodSwgZSwgbSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBJKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBnID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpLCBDID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpOwogICAgdGhpcy53cml0ZURhdGFUb01lbW9yeSh1LCBnKSwgdGhpcy5zYW1XYXNtTW9kdWxlLmNvbnZlcnRUb1NhbUNvbG9ySW1hZ2UoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLAogICAgICBkZS5SR0JBLAogICAgICBDCiAgICApOwogICAgY29uc3QgQSA9IHRoaXMuc2FtV2FzbU1vZHVsZS5kZXRlY3RGYWNlUGFydHNXaXRoSW1hZ2VQYXJhbWV0ZXJzKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgQywKICAgICAgMCwKICAgICAgMCwKICAgICAgLy8gcGFyYW1XaWR0aCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICk7CiAgICByZXR1cm4gdGhpcy5yZWxlYXNlTWVtb3J5KGcpLCB0aGlzLnJlbGVhc2VNZW1vcnkoQyksIHRoaXMucGFyc2VSYXdEYXRhKEEsIG0pOwogIH0KfQpKbih4ZSk7Cg==", U1 = (x) => Uint8Array.from(atob(x), (o) => o.charCodeAt(0)), Ta = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", U1(Jc)], { type: "text/javascript;charset=utf-8" });
function z1(x) {
  let o;
  try {
    if (o = Ta && (window.URL || window.webkitURL).createObjectURL(Ta), !o) throw "";
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
var E0, c0;
class q1 {
  constructor(o) {
    ce(this, E0);
    ce(this, c0);
    ae(this, E0, o), ae(this, c0, /* @__PURE__ */ new Map());
  }
  validate() {
    j(this, E0).forEach((o) => {
      j(this, c0).set(o.name, o.evaluate());
    });
  }
  isValid() {
    return Array.from(j(this, c0).values()).every((o) => o);
  }
  get result() {
    return j(this, c0);
  }
  get validators() {
    return j(this, E0);
  }
}
E0 = new WeakMap(), c0 = new WeakMap();
var wn, g0;
class ot {
  constructor(o, t) {
    ce(this, wn);
    ce(this, g0);
    ae(this, wn, o), ae(this, g0, t);
  }
  get threshold() {
    return j(this, g0);
  }
  get name() {
    return j(this, wn);
  }
  isValueBelowThreshold(o) {
    return o < j(this, g0);
  }
  isValueAboveThreshold(o) {
    return o > j(this, g0);
  }
}
wn = new WeakMap(), g0 = new WeakMap();
var Bn;
class $1 extends ot {
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
class eI extends ot {
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
class tI extends ot {
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
class nI extends ot {
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
class xI extends ot {
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
var Kn;
class oI extends ot {
  constructor(t, e) {
    super("isLeftEyePresent", t);
    ce(this, Kn);
    ae(this, Kn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, Kn));
  }
}
Kn = new WeakMap();
var Zn;
class rI extends ot {
  constructor(t, e) {
    super("isMouthPresent", t);
    ce(this, Zn);
    ae(this, Zn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, Zn));
  }
}
Zn = new WeakMap();
var Rn;
class iI extends ot {
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
class aI extends ot {
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
class sI extends ot {
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
class cI extends ot {
  constructor(t, e) {
    super("isNotPitched", t || -12 * -632 + 1 * 2207 + 1 * -9691);
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
class gI extends ot {
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
var Nn, N0;
class dI extends ot {
  constructor(t, e, n) {
    super("isNotOutOfBounds", t);
    ce(this, Nn);
    ce(this, N0);
    ae(this, Nn, e), ae(this, N0, n);
  }
  evaluate() {
    const t = Tc(j(this, N0), this.threshold), e = Ec(j(this, Nn), j(this, N0));
    return C1(e, t);
  }
}
Nn = new WeakMap(), N0 = new WeakMap();
class uI {
  static getFaceValidationInstance(o, t, e, n) {
    return new q1([new nI(o.faceConfidence, t.confidence), new oI(o.leftEye.confidence, t.leftEye.confidence), new gI(o.rightEye.confidence, t.rightEye.confidence), new eI(o.minFaceSizeRatio, t.faceSize), new sI(o.maxFaceSizeRatio, t.faceSize), new xI(o.sharpnessThreshold, t.sharpness), new $1(o.brightnessLowThreshold, t.brightness), new tI(o.brightnessHighThreshold, t.brightness), new dI(o.outOfBoundsThreshold, t, e), new cI(o.pitchAngleAccelerationThreshold, n), new rI(o.mouth.confidence, t.mouth.confidence), new aI(o.mouth.status.max, t.mouth.status), new iI(o.mouth.status.min, t.mouth.status)]);
  }
}
const xo = class xo extends T1 {
  constructor() {
    super(...arguments);
    _(this, "detector");
    _(this, "className", "FaceController");
    _(this, "fallbackInstruction", Re.FACE_NOT_PRESENT);
    _(this, "pitchAngleAccelerationThreshold", null);
    _(this, "getInstructionCode", (t, e) => {
      var r;
      if (this.isInCandidateSelection) return Re.CANDIDATE_SELECTION;
      if ((r = this.lastImage) != null && r.isValid && e) return Re.CANDIDATE_SELECTION;
      if (this.lastImage && e) return this.lastImage.instructionCode;
      const [n] = this.getInstructionCodesForValidators(t);
      return n ?? this.fallbackInstruction;
    });
    _(this, "getInstructionCodesForValidators", (t) => {
      const e = [];
      return Array.from(t).forEach(([n, r]) => {
        !r && e.push(Vu[n]);
      }), e;
    });
  }
  static async init() {
    const t = new z1(), e = Xc(t), n = new xo(), r = await new e();
    this._instance = n, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  setThresholds(t) {
    super.setThresholds(t);
    const { devicePitchAngleThreshold: e } = t;
    this.pitchAngleAccelerationThreshold = il * Math.sin(e * (Math.PI / (15907 + 15727 * -1)));
  }
  restart() {
    super.restart(), Ka(Nt.INSTRUCTION_CHANGED, void (-2 * 3937 + -6412 + 14286), Nl);
  }
  validateDetectedObject(t, e) {
    const n = uI.getFaceValidationInstance({ ...this.getThresholds(), pitchAngleAccelerationThreshold: this.pitchAngleAccelerationThreshold }, t, e, this.acceleration);
    return n.validate(), n;
  }
  async processImage({ image: t, timestamp: e }) {
    var A;
    const n = {};
    n.width = t.width, n.height = t.height;
    const r = n, i = ri(r), a = Kl(t, i), s = Zl(a), c = {};
    c.width = a.width, c.height = a.height;
    const u = c;
    let g = await this.detector.detect(s, u, r);
    g = b1(r, g);
    const h = this.validateDetectedObject(g, r), { result: l } = h, C = this.getInstructionCode(l, h.isValid());
    if (l.get("isPresent")) {
      const d = {};
      d.image = s, d.timestamp = e, this.collectImagesForDuplicateDetection(d);
    }
    if (this.isInCandidateSelection) {
      if (this.bestImage && h.isValid() && this.isNewImageBetter(this.bestImage.detection, g)) {
        const d = { image: t, detection: Z0(g) };
        this.bestImage = d, this.candidateSelectionImages.push(d);
      }
    } else if ((A = this.lastImage) != null && A.isValid && h.isValid()) {
      const d = { image: t, detection: Z0(g) }, v = {};
      v.image = this.lastImage.image, v.detection = this.lastImage.detection;
      const K = v;
      this.isNewImageBetter(K.detection, d.detection) ? this.bestImage = d : this.bestImage = K, this.candidateSelectionImages.push(K, d), this.isInCandidateSelection = !0;
    } else h.isValid() ? this.lastImage = { instructionCode: C, isValid: !0, image: t, detection: Z0(g) } : this.lastImage = { instructionCode: C, isValid: !1, image: t, detection: Z0(g) };
    const m = { detectedFace: Z0(g), instructionCode: C, invalidValidators: this.getInstructionCodesForValidators(l), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(m.detectedFace), Ka(Nt.INSTRUCTION_CHANGED, C), Fl(Nt.DETECTED_FACE_CHANGED, m.detectedFace, this.getThresholds().faceConfidence), Yl(Nt.FACE_DETECTION, m.detectedFace, t), m;
  }
};
_(xo, "_instance");
let Kr = xo;
const lI = (x, o) => {
  const { handleError: t } = en(), [e, n] = ze(), { acceleration: r } = p1();
  e && e.setAcceleration(r), he(() => {
    (async () => {
      const s = await Kr.getInstance();
      try {
        const c = {};
        c.wasmDirectoryPath = o, c.thresholds = x, await s.init(c);
      } catch (c) {
        if (c instanceof Error) {
          t(re.fromError(c));
          return;
        }
      }
      n(s);
    })();
  }, [t, x, o]);
  const i = {};
  return i.controller = e, i;
};
var n0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _c = {}, Ea = {}, II = fI;
function fI(x, o) {
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
    for (var c = null, u = [], g = 0, h = 0, l; a < s; ) {
      var C = i[a++];
      switch (h) {
        case 0:
          u[g++] = t[C >> 2], l = (C & 3) << 4, h = 1;
          break;
        case 1:
          u[g++] = t[l | C >> 4], l = (C & 15) << 2, h = 2;
          break;
        case 2:
          u[g++] = t[l | C >> 6], u[g++] = t[C & 63], h = 0;
          break;
      }
      g > 8191 && ((c || (c = [])).push(String.fromCharCode.apply(String, u)), g = 0);
    }
    return h && (u[g++] = t[l], u[g++] = 61, h === 1 && (u[g++] = 61)), c ? (g && c.push(String.fromCharCode.apply(String, u.slice(0, g))), c.join("")) : String.fromCharCode.apply(String, u.slice(0, g));
  };
  var r = "invalid encoding";
  o.decode = function(i, a, s) {
    for (var c = s, u = 0, g, h = 0; h < i.length; ) {
      var l = i.charCodeAt(h++);
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
})(Qc);
var CI = fo;
function fo() {
  this._listeners = {};
}
fo.prototype.on = function(x, o, t) {
  return (this._listeners[x] || (this._listeners[x] = [])).push({
    fn: o,
    ctx: t || this
  }), this;
};
fo.prototype.off = function(x, o) {
  if (x === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[x] = [];
  else
    for (var t = this._listeners[x], e = 0; e < t.length; )
      t[e].fn === o ? t.splice(e, 1) : ++e;
  return this;
};
fo.prototype.emit = function(x) {
  var o = this._listeners[x];
  if (o) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < o.length; )
      o[e].fn.apply(o[e++].ctx, t);
  }
  return this;
};
var hI = Na(Na);
function Na(x) {
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
    x.writeFloatLE = o.bind(null, La), x.writeFloatBE = o.bind(null, Da);
    function t(e, n, r) {
      var i = e(n, r), a = (i >> 31) * 2 + 1, s = i >>> 23 & 255, c = i & 8388607;
      return s === 255 ? c ? NaN : a * (1 / 0) : s === 0 ? a * 1401298464324817e-60 * c : a * Math.pow(2, s - 150) * (c + 8388608);
    }
    x.readFloatLE = t.bind(null, Fa), x.readFloatBE = t.bind(null, Ya);
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
    x.writeDoubleLE = o.bind(null, La, 0, 4), x.writeDoubleBE = o.bind(null, Da, 4, 0);
    function t(e, n, r, i, a) {
      var s = e(i, a + n), c = e(i, a + r), u = (c >> 31) * 2 + 1, g = c >>> 20 & 2047, h = 4294967296 * (c & 1048575) + s;
      return g === 2047 ? h ? NaN : u * (1 / 0) : g === 0 ? u * 5e-324 * h : u * Math.pow(2, g - 1075) * (h + 4503599627370496);
    }
    x.readDoubleLE = t.bind(null, Fa, 0, 4), x.readDoubleBE = t.bind(null, Ya, 4, 0);
  }(), x;
}
function La(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
function Da(x, o, t) {
  o[t] = x >>> 24, o[t + 1] = x >>> 16 & 255, o[t + 2] = x >>> 8 & 255, o[t + 3] = x & 255;
}
function Fa(x, o) {
  return (x[o] | x[o + 1] << 8 | x[o + 2] << 16 | x[o + 3] << 24) >>> 0;
}
function Ya(x, o) {
  return (x[o] << 24 | x[o + 1] << 16 | x[o + 2] << 8 | x[o + 3]) >>> 0;
}
function Xa(x) {
  throw new Error('Could not dynamically require "' + x + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var pI = mI;
function mI(x) {
  try {
    if (typeof Xa != "function")
      return null;
    var o = Xa(x);
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
var bI = AI;
function AI(x, o, t) {
  var e = t || 8192, n = e >>> 1, r = null, i = e;
  return function(a) {
    if (a < 1 || a > n)
      return x(a);
    i + a > e && (r = x(e), i = 0);
    var s = o.call(r, i, i += a);
    return i & 7 && (i = (i | 7) + 1), s;
  };
}
var Jo, ja;
function yI() {
  if (ja)
    return Jo;
  ja = 1, Jo = o;
  var x = m0();
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
  }, Jo;
}
var Ma;
function m0() {
  return Ma || (Ma = 1, function(x) {
    var o = x;
    o.asPromise = II, o.base64 = Qc, o.EventEmitter = CI, o.float = hI, o.inquire = pI, o.utf8 = Uc, o.pool = bI, o.LongBits = yI(), o.isNode = !!(typeof n0 < "u" && n0 && n0.process && n0.process.versions && n0.process.versions.node), o.global = o.isNode && n0 || typeof window < "u" && window || typeof self < "u" && self || n0, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(Ea)), Ea;
}
var zc = z, It = m0(), Zr, Co = It.LongBits, Ja = It.base64, _a = It.utf8;
function Xn(x, o, t) {
  this.fn = x, this.len = o, this.next = void 0, this.val = t;
}
function ii() {
}
function vI(x) {
  this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
}
function z() {
  this.len = 0, this.head = new Xn(ii, 0, 0), this.tail = this.head, this.states = null;
}
var qc = function() {
  return It.Buffer ? function() {
    return (z.create = function() {
      return new Zr();
    })();
  } : function() {
    return new z();
  };
};
z.create = qc();
z.alloc = function(x) {
  return new It.Array(x);
};
It.Array !== Array && (z.alloc = It.pool(z.alloc, It.Array.prototype.subarray));
z.prototype._push = function(x, o, t) {
  return this.tail = this.tail.next = new Xn(x, o, t), this.len += o, this;
};
function ai(x, o, t) {
  o[t] = x & 255;
}
function WI(x, o, t) {
  for (; x > 127; )
    o[t++] = x & 127 | 128, x >>>= 7;
  o[t] = x;
}
function si(x, o) {
  this.len = x, this.next = void 0, this.val = o;
}
si.prototype = Object.create(Xn.prototype);
si.prototype.fn = WI;
z.prototype.uint32 = function(x) {
  return this.len += (this.tail = this.tail.next = new si(
    (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
    x
  )).len, this;
};
z.prototype.int32 = function(x) {
  return x < 0 ? this._push(ci, 10, Co.fromNumber(x)) : this.uint32(x);
};
z.prototype.sint32 = function(x) {
  return this.uint32((x << 1 ^ x >> 31) >>> 0);
};
function ci(x, o, t) {
  for (; x.hi; )
    o[t++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
  for (; x.lo > 127; )
    o[t++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
  o[t++] = x.lo;
}
z.prototype.uint64 = function(x) {
  var o = Co.from(x);
  return this._push(ci, o.length(), o);
};
z.prototype.int64 = z.prototype.uint64;
z.prototype.sint64 = function(x) {
  var o = Co.from(x).zzEncode();
  return this._push(ci, o.length(), o);
};
z.prototype.bool = function(x) {
  return this._push(ai, 1, x ? 1 : 0);
};
function Rr(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
z.prototype.fixed32 = function(x) {
  return this._push(Rr, 4, x >>> 0);
};
z.prototype.sfixed32 = z.prototype.fixed32;
z.prototype.fixed64 = function(x) {
  var o = Co.from(x);
  return this._push(Rr, 4, o.lo)._push(Rr, 4, o.hi);
};
z.prototype.sfixed64 = z.prototype.fixed64;
z.prototype.float = function(x) {
  return this._push(It.float.writeFloatLE, 4, x);
};
z.prototype.double = function(x) {
  return this._push(It.float.writeDoubleLE, 8, x);
};
var SI = It.Array.prototype.set ? function(x, o, t) {
  o.set(x, t);
} : function(x, o, t) {
  for (var e = 0; e < x.length; ++e)
    o[t + e] = x[e];
};
z.prototype.bytes = function(x) {
  var o = x.length >>> 0;
  if (!o)
    return this._push(ai, 1, 0);
  if (It.isString(x)) {
    var t = z.alloc(o = Ja.length(x));
    Ja.decode(x, t, 0), x = t;
  }
  return this.uint32(o)._push(SI, o, x);
};
z.prototype.string = function(x) {
  var o = _a.length(x);
  return o ? this.uint32(o)._push(_a.write, o, x) : this._push(ai, 1, 0);
};
z.prototype.fork = function() {
  return this.states = new vI(this), this.head = this.tail = new Xn(ii, 0, 0), this.len = 0, this;
};
z.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Xn(ii, 0, 0), this.len = 0), this;
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
  Zr = x, z.create = qc(), Zr._configure();
};
var wI = Gt, $c = zc;
(Gt.prototype = Object.create($c.prototype)).constructor = Gt;
var _t = m0();
function Gt() {
  $c.call(this);
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
function BI(x, o, t) {
  x.length < 40 ? _t.utf8.write(x, o, t) : o.utf8Write ? o.utf8Write(x, t) : o.write(x, t);
}
Gt.prototype.string = function(x) {
  var o = _t.Buffer.byteLength(x);
  return this.uint32(o), o && this._push(BI, o, x), this;
};
Gt._configure();
var eg = ue, kt = m0(), Pr, tg = kt.LongBits, GI = kt.utf8;
function yt(x, o) {
  return RangeError("index out of range: " + x.pos + " + " + (o || 1) + " > " + x.len);
}
function ue(x) {
  this.buf = x, this.pos = 0, this.len = x.length;
}
var Qa = typeof Uint8Array < "u" ? function(x) {
  if (x instanceof Uint8Array || Array.isArray(x))
    return new ue(x);
  throw Error("illegal buffer");
} : function(x) {
  if (Array.isArray(x))
    return new ue(x);
  throw Error("illegal buffer");
}, ng = function() {
  return kt.Buffer ? function(x) {
    return (ue.create = function(o) {
      return kt.Buffer.isBuffer(o) ? new Pr(o) : Qa(o);
    })(x);
  } : Qa;
};
ue.create = ng();
ue.prototype._slice = kt.Array.prototype.subarray || /* istanbul ignore next */
kt.Array.prototype.slice;
ue.prototype.uint32 = /* @__PURE__ */ function() {
  var x = 4294967295;
  return function() {
    if (x = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (x = (x | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return x;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, yt(this, 10);
    return x;
  };
}();
ue.prototype.int32 = function() {
  return this.uint32() | 0;
};
ue.prototype.sint32 = function() {
  var x = this.uint32();
  return x >>> 1 ^ -(x & 1) | 0;
};
function _o() {
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
        throw yt(this);
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
        throw yt(this);
      if (x.hi = (x.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return x;
    }
  throw Error("invalid varint encoding");
}
ue.prototype.bool = function() {
  return this.uint32() !== 0;
};
function eo(x, o) {
  return (x[o - 4] | x[o - 3] << 8 | x[o - 2] << 16 | x[o - 1] << 24) >>> 0;
}
ue.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw yt(this, 4);
  return eo(this.buf, this.pos += 4);
};
ue.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw yt(this, 4);
  return eo(this.buf, this.pos += 4) | 0;
};
function Ua() {
  if (this.pos + 8 > this.len)
    throw yt(this, 8);
  return new tg(eo(this.buf, this.pos += 4), eo(this.buf, this.pos += 4));
}
ue.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw yt(this, 4);
  var x = kt.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, x;
};
ue.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw yt(this, 4);
  var x = kt.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, x;
};
ue.prototype.bytes = function() {
  var x = this.uint32(), o = this.pos, t = this.pos + x;
  if (t > this.len)
    throw yt(this, x);
  return this.pos += x, Array.isArray(this.buf) ? this.buf.slice(o, t) : o === t ? new this.buf.constructor(0) : this._slice.call(this.buf, o, t);
};
ue.prototype.string = function() {
  var x = this.bytes();
  return GI.read(x, 0, x.length);
};
ue.prototype.skip = function(x) {
  if (typeof x == "number") {
    if (this.pos + x > this.len)
      throw yt(this, x);
    this.pos += x;
  } else
    do
      if (this.pos >= this.len)
        throw yt(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
ue.prototype.skipType = function(x) {
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
ue._configure = function(x) {
  Pr = x, ue.create = ng(), Pr._configure();
  var o = kt.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  kt.merge(ue.prototype, {
    int64: function() {
      return _o.call(this)[o](!1);
    },
    uint64: function() {
      return _o.call(this)[o](!0);
    },
    sint64: function() {
      return _o.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return Ua.call(this)[o](!0);
    },
    sfixed64: function() {
      return Ua.call(this)[o](!1);
    }
  });
};
var kI = C0, xg = eg;
(C0.prototype = Object.create(xg.prototype)).constructor = C0;
var za = m0();
function C0(x) {
  xg.call(this, x);
}
C0._configure = function() {
  za.Buffer && (C0.prototype._slice = za.Buffer.prototype.slice);
};
C0.prototype.string = function() {
  var x = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + x, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + x, this.len));
};
C0._configure();
var og = {}, HI = Sn, gi = m0();
(Sn.prototype = Object.create(gi.EventEmitter.prototype)).constructor = Sn;
function Sn(x, o, t) {
  if (typeof x != "function")
    throw TypeError("rpcImpl must be a function");
  gi.EventEmitter.call(this), this.rpcImpl = x, this.requestDelimited = !!o, this.responseDelimited = !!t;
}
Sn.prototype.rpcCall = function x(o, t, e, n, r) {
  if (!n)
    throw TypeError("request must be specified");
  var i = this;
  if (!r)
    return gi.asPromise(x, i, o, t, e, n);
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
Sn.prototype.end = function(x) {
  return this.rpcImpl && (x || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(x) {
  var o = x;
  o.Service = HI;
})(og);
var OI = {};
(function(x) {
  var o = x;
  o.build = "minimal", o.Writer = zc, o.BufferWriter = wI, o.Reader = eg, o.BufferReader = kI, o.util = m0(), o.rpc = og, o.roots = OI, o.configure = t;
  function t() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  t();
})(_c);
var te = _c;
const B = te.Reader, ge = te.Writer, W = te.util, p = te.roots.default || (te.roots.default = {}), h0 = p.dot = (() => {
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
      let n = e === void 0 ? t.len : t.pos + e, r = new p.dot.Content();
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
      if (t instanceof p.dot.Content)
        return t;
      let e = new p.dot.Content();
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
        if (n || (n = ge.create()), e.images != null && e.images.length)
          for (let r = 0; r < e.images.length; ++r)
            p.dot.Image.encode(e.images[r], n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new p.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.images && i.images.length || (i.images = []), i.images.push(p.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              i.metadata = p.dot.v4.Metadata.decode(e, e.uint32());
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
            let r = p.dot.Image.verify(e.images[n]);
            if (r)
              return "images." + r;
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
          for (let r = 0; r < e.images.length; ++r) {
            if (typeof e.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            n.images[r] = p.dot.Image.fromObject(e.images[r]);
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
        let r = {};
        if ((n.arrays || n.defaults) && (r.images = []), n.defaults && (r.metadata = null), e.images && e.images.length) {
          r.images = [];
          for (let i = 0; i < e.images.length; ++i)
            r.images[i] = p.dot.Image.toObject(e.images[i], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = p.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        return r || (r = ge.create()), n.platform != null && Object.hasOwnProperty.call(n, "platform") && r.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.platform), n.web != null && Object.hasOwnProperty.call(n, "web") && p.dot.v4.WebMetadata.encode(n.web, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.android != null && Object.hasOwnProperty.call(n, "android") && p.dot.v4.AndroidMetadata.encode(n.android, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.ios != null && Object.hasOwnProperty.call(n, "ios") && p.dot.v4.IosMetadata.encode(n.ios, r.uint32(
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
        let i = r === void 0 ? n.len : n.pos + r, a = new p.dot.v4.Metadata();
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
            let i = p.dot.v4.WebMetadata.verify(n.web);
            if (i)
              return "web." + i;
          }
        }
        if (n.android != null && n.hasOwnProperty("android")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let i = p.dot.v4.AndroidMetadata.verify(n.android);
            if (i)
              return "android." + i;
          }
        }
        if (n.ios != null && n.hasOwnProperty("ios")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let i = p.dot.v4.IosMetadata.verify(n.ios);
            if (i)
              return "ios." + i;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof p.dot.v4.Metadata)
          return n;
        let r = new p.dot.v4.Metadata();
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
          r.web = p.dot.v4.WebMetadata.fromObject(n.web);
        }
        if (n.android != null) {
          if (typeof n.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          r.android = p.dot.v4.AndroidMetadata.fromObject(n.android);
        }
        if (n.ios != null) {
          if (typeof n.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          r.ios = p.dot.v4.IosMetadata.fromObject(n.ios);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return r.defaults && (i.platform = r.enums === String ? "WEB" : 0, i.componentVersion = ""), n.platform != null && n.hasOwnProperty("platform") && (i.platform = r.enums === String ? p.dot.Platform[n.platform] === void 0 ? n.platform : p.dot.Platform[n.platform] : n.platform), n.web != null && n.hasOwnProperty("web") && (i.web = p.dot.v4.WebMetadata.toObject(n.web, r), r.oneofs && (i.metadata = "web")), n.android != null && n.hasOwnProperty("android") && (i.android = p.dot.v4.AndroidMetadata.toObject(n.android, r), r.oneofs && (i.metadata = "android")), n.ios != null && n.hasOwnProperty("ios") && (i.ios = p.dot.v4.IosMetadata.toObject(n.ios, r), r.oneofs && (i.metadata = "ios")), n.sessionToken != null && n.hasOwnProperty("sessionToken") && (i.sessionToken = n.sessionToken, r.oneofs && (i._sessionToken = "sessionToken")), n.componentVersion != null && n.hasOwnProperty("componentVersion") && (i.componentVersion = n.componentVersion), i;
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
            ).string(i[a]), p.dot.Int32List.encode(n.dynamicCameraFrameProperties[i[a]], r.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (n.digestsWithTimestamp != null && n.digestsWithTimestamp.length)
          for (let i = 0; i < n.digestsWithTimestamp.length; ++i)
            p.dot.DigestWithTimestamp.encode(n.digestsWithTimestamp[i], r.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new p.dot.v4.AndroidMetadata(), s, c;
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
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(p.dot.DigestWithTimestamp.decode(n, n.uint32()));
              break;
            }
            case 4: {
              a.dynamicCameraFrameProperties === W.emptyObject && (a.dynamicCameraFrameProperties = {});
              let g = n.uint32() + n.pos;
              for (s = "", c = null; n.pos < g; ) {
                let h = n.uint32();
                switch (h >>> 3) {
                  case 1:
                    s = n.string();
                    break;
                  case 2:
                    c = p.dot.Int32List.decode(n, n.uint32());
                    break;
                  default:
                    n.skipType(h & 7);
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
            let i = p.dot.DigestWithTimestamp.verify(n.digestsWithTimestamp[r]);
            if (i)
              return "digestsWithTimestamp." + i;
          }
        }
        if (n.dynamicCameraFrameProperties != null && n.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!W.isObject(n.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let r = Object.keys(n.dynamicCameraFrameProperties);
          for (let i = 0; i < r.length; ++i) {
            let a = p.dot.Int32List.verify(n.dynamicCameraFrameProperties[r[i]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof p.dot.v4.AndroidMetadata)
          return n;
        let r = new p.dot.v4.AndroidMetadata();
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
            r.digestsWithTimestamp[i] = p.dot.DigestWithTimestamp.fromObject(n.digestsWithTimestamp[i]);
          }
        }
        if (n.dynamicCameraFrameProperties) {
          if (typeof n.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          r.dynamicCameraFrameProperties = {};
          for (let i = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < i.length; ++a) {
            if (typeof n.dynamicCameraFrameProperties[i[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            r.dynamicCameraFrameProperties[i[a]] = p.dot.Int32List.fromObject(n.dynamicCameraFrameProperties[i[a]]);
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
            i.dynamicCameraFrameProperties[a[s]] = p.dot.Int32List.toObject(n.dynamicCameraFrameProperties[a[s]], r);
        }
        if (n.digestsWithTimestamp && n.digestsWithTimestamp.length) {
          i.digestsWithTimestamp = [];
          for (let s = 0; s < n.digestsWithTimestamp.length; ++s)
            i.digestsWithTimestamp[s] = p.dot.DigestWithTimestamp.toObject(n.digestsWithTimestamp[s], r);
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
            p.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new p.dot.v4.IosMetadata(), a, s;
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
              i.digestsWithTimestamp && i.digestsWithTimestamp.length || (i.digestsWithTimestamp = []), i.digestsWithTimestamp.push(p.dot.DigestWithTimestamp.decode(e, e.uint32()));
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
            let r = p.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[n]);
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
        if (e instanceof p.dot.v4.IosMetadata)
          return e;
        let n = new p.dot.v4.IosMetadata();
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
            n.digestsWithTimestamp[r] = p.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[r]);
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
            r.digestsWithTimestamp[a] = p.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[a], n);
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
        if (n || (n = ge.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && p.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.availableCameraProperties != null && e.availableCameraProperties.length)
          for (let r = 0; r < e.availableCameraProperties.length; ++r)
            p.dot.v4.CameraProperties.encode(e.availableCameraProperties[r], n.uint32(
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
            p.dot.v4.DetectedObject.encode(e.detectionRecord[r], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (e.hashedDetectedImagesWithTimestamp != null && e.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < e.hashedDetectedImagesWithTimestamp.length; ++r)
            p.dot.v4.HashedDetectedImageWithTimestamp.encode(e.hashedDetectedImagesWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new p.dot.v4.WebMetadata();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.currentCameraProperties = p.dot.v4.MediaTrackSettings.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.availableCameraProperties && i.availableCameraProperties.length || (i.availableCameraProperties = []), i.availableCameraProperties.push(p.dot.v4.CameraProperties.decode(e, e.uint32()));
              break;
            }
            case 3: {
              i.hashedDetectedImages && i.hashedDetectedImages.length || (i.hashedDetectedImages = []), i.hashedDetectedImages.push(e.string());
              break;
            }
            case 5: {
              i.hashedDetectedImagesWithTimestamp && i.hashedDetectedImagesWithTimestamp.length || (i.hashedDetectedImagesWithTimestamp = []), i.hashedDetectedImagesWithTimestamp.push(p.dot.v4.HashedDetectedImageWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              i.detectionRecord && i.detectionRecord.length || (i.detectionRecord = []), i.detectionRecord.push(p.dot.v4.DetectedObject.decode(e, e.uint32()));
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
          let n = p.dot.v4.MediaTrackSettings.verify(e.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (e.availableCameraProperties != null && e.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(e.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < e.availableCameraProperties.length; ++n) {
            let r = p.dot.v4.CameraProperties.verify(e.availableCameraProperties[n]);
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
            let r = p.dot.v4.HashedDetectedImageWithTimestamp.verify(e.hashedDetectedImagesWithTimestamp[n]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (e.detectionRecord != null && e.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(e.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < e.detectionRecord.length; ++n) {
            let r = p.dot.v4.DetectedObject.verify(e.detectionRecord[n]);
            if (r)
              return "detectionRecord." + r;
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
          for (let r = 0; r < e.availableCameraProperties.length; ++r) {
            if (typeof e.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[r] = p.dot.v4.CameraProperties.fromObject(e.availableCameraProperties[r]);
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
            n.hashedDetectedImagesWithTimestamp[r] = p.dot.v4.HashedDetectedImageWithTimestamp.fromObject(e.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (e.detectionRecord) {
          if (!Array.isArray(e.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let r = 0; r < e.detectionRecord.length; ++r) {
            if (typeof e.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[r] = p.dot.v4.DetectedObject.fromObject(e.detectionRecord[r]);
          }
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), n.defaults && (r.currentCameraProperties = null), e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = p.dot.v4.MediaTrackSettings.toObject(e.currentCameraProperties, n)), e.availableCameraProperties && e.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let i = 0; i < e.availableCameraProperties.length; ++i)
            r.availableCameraProperties[i] = p.dot.v4.CameraProperties.toObject(e.availableCameraProperties[i], n);
        }
        if (e.hashedDetectedImages && e.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let i = 0; i < e.hashedDetectedImages.length; ++i)
            r.hashedDetectedImages[i] = e.hashedDetectedImages[i];
        }
        if (e.detectionRecord && e.detectionRecord.length) {
          r.detectionRecord = [];
          for (let i = 0; i < e.detectionRecord.length; ++i)
            r.detectionRecord[i] = p.dot.v4.DetectedObject.toObject(e.detectionRecord[i], n);
        }
        if (e.hashedDetectedImagesWithTimestamp && e.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let i = 0; i < e.hashedDetectedImagesWithTimestamp.length; ++i)
            r.hashedDetectedImagesWithTimestamp[i] = p.dot.v4.HashedDetectedImageWithTimestamp.toObject(e.hashedDetectedImagesWithTimestamp[i], n);
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
        let r = n === void 0 ? e.len : e.pos + n, i = new p.dot.v4.HashedDetectedImageWithTimestamp();
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
        if (e instanceof p.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let n = new p.dot.v4.HashedDetectedImageWithTimestamp();
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
        let i = r === void 0 ? n.len : n.pos + r, a = new p.dot.v4.MediaTrackSettings();
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
        if (n instanceof p.dot.v4.MediaTrackSettings)
          return n;
        let r = new p.dot.v4.MediaTrackSettings();
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
        let r = n === void 0 ? e.len : e.pos + n, i = new p.dot.v4.ImageBitmap();
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
        if (e instanceof p.dot.v4.ImageBitmap)
          return e;
        let n = new p.dot.v4.ImageBitmap();
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
        return r || (r = ge.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && p.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.cameraProperties != null && Object.hasOwnProperty.call(n, "cameraProperties") && p.dot.v4.MediaTrackSettings.encode(n.cameraProperties, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new p.dot.v4.CameraProperties();
        for (; n.pos < i; ) {
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
          let r = p.dot.v4.ImageBitmap.verify(n.cameraInitFrameResolution);
          if (r)
            return "cameraInitFrameResolution." + r;
        }
        if (n.cameraProperties != null && n.hasOwnProperty("cameraProperties")) {
          let r = p.dot.v4.MediaTrackSettings.verify(n.cameraProperties);
          if (r)
            return "cameraProperties." + r;
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof p.dot.v4.CameraProperties)
          return n;
        let r = new p.dot.v4.CameraProperties();
        if (n.cameraInitFrameResolution != null) {
          if (typeof n.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          r.cameraInitFrameResolution = p.dot.v4.ImageBitmap.fromObject(n.cameraInitFrameResolution);
        }
        if (n.cameraProperties != null) {
          if (typeof n.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          r.cameraProperties = p.dot.v4.MediaTrackSettings.fromObject(n.cameraProperties);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return r.defaults && (i.cameraProperties = null), n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution") && (i.cameraInitFrameResolution = p.dot.v4.ImageBitmap.toObject(n.cameraInitFrameResolution, r), r.oneofs && (i._cameraInitFrameResolution = "cameraInitFrameResolution")), n.cameraProperties != null && n.hasOwnProperty("cameraProperties") && (i.cameraProperties = p.dot.v4.MediaTrackSettings.toObject(n.cameraProperties, r)), i;
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
        let r = n === void 0 ? e.len : e.pos + n, i = new p.dot.v4.DetectedObject();
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
              i.faceCenter = p.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              i.smallestEdge = e.float();
              break;
            }
            case 8: {
              i.bottomLeft = p.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              i.bottomRight = p.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              i.topLeft = p.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              i.topRight = p.dot.v4.Point.decode(e, e.uint32());
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
        let r = {};
        return n.defaults && (r.brightness = 0, r.sharpness = 0, r.hotspots = 0, r.confidence = 0, r.faceSize = 0, r.faceCenter = null, r.smallestEdge = 0, r.bottomLeft = null, r.bottomRight = null, r.topLeft = null, r.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (r.brightness = n.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (r.sharpness = n.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (r.hotspots = n.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (r.confidence = n.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (r.faceSize = n.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (r.faceCenter = p.dot.v4.Point.toObject(e.faceCenter, n)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (r.smallestEdge = n.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (r.bottomLeft = p.dot.v4.Point.toObject(e.bottomLeft, n)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (r.bottomRight = p.dot.v4.Point.toObject(e.bottomRight, n)), e.topLeft != null && e.hasOwnProperty("topLeft") && (r.topLeft = p.dot.v4.Point.toObject(e.topLeft, n)), e.topRight != null && e.hasOwnProperty("topRight") && (r.topRight = p.dot.v4.Point.toObject(e.topRight, n)), r;
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
        let r = n === void 0 ? e.len : e.pos + n, i = new p.dot.v4.Point();
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
        if (e instanceof p.dot.v4.Point)
          return e;
        let n = new p.dot.v4.Point();
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
        return n || (n = ge.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && p.dot.Image.encode(e.image, n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new p.dot.v4.FaceContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.image = p.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.metadata = p.dot.v4.Metadata.decode(e, e.uint32());
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
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = p.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = p.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        return n || (n = ge.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && p.dot.Image.encode(e.image, n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new p.dot.v4.DocumentContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.image = p.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.metadata = p.dot.v4.Metadata.decode(e, e.uint32());
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
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = p.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = p.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        return r || (r = ge.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && p.dot.v4.DocumentContent.encode(n.documentContent, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.faceContent != null && Object.hasOwnProperty.call(n, "faceContent") && p.dot.v4.FaceContent.encode(n.faceContent, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(n, "magnifeyeLivenessContent") && p.dot.v4.MagnifEyeLivenessContent.encode(n.magnifeyeLivenessContent, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.smileLivenessContent != null && Object.hasOwnProperty.call(n, "smileLivenessContent") && p.dot.v4.SmileLivenessContent.encode(n.smileLivenessContent, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(n, "eyeGazeLivenessContent") && p.dot.v4.EyeGazeLivenessContent.encode(n.eyeGazeLivenessContent, r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), n.palmContent != null && Object.hasOwnProperty.call(n, "palmContent") && p.dot.v4.PalmContent.encode(n.palmContent, r.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new p.dot.v4.Blob();
        for (; n.pos < i; ) {
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
        let r = {};
        if (n.documentContent != null && n.hasOwnProperty("documentContent")) {
          r.blob = 1;
          {
            let i = p.dot.v4.DocumentContent.verify(n.documentContent);
            if (i)
              return "documentContent." + i;
          }
        }
        if (n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = p.dot.v4.EyeGazeLivenessContent.verify(n.eyeGazeLivenessContent);
            if (i)
              return "eyeGazeLivenessContent." + i;
          }
        }
        if (n.faceContent != null && n.hasOwnProperty("faceContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = p.dot.v4.FaceContent.verify(n.faceContent);
            if (i)
              return "faceContent." + i;
          }
        }
        if (n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = p.dot.v4.MagnifEyeLivenessContent.verify(n.magnifeyeLivenessContent);
            if (i)
              return "magnifeyeLivenessContent." + i;
          }
        }
        if (n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = p.dot.v4.SmileLivenessContent.verify(n.smileLivenessContent);
            if (i)
              return "smileLivenessContent." + i;
          }
        }
        if (n.palmContent != null && n.hasOwnProperty("palmContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = p.dot.v4.PalmContent.verify(n.palmContent);
            if (i)
              return "palmContent." + i;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof p.dot.v4.Blob)
          return n;
        let r = new p.dot.v4.Blob();
        if (n.documentContent != null) {
          if (typeof n.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          r.documentContent = p.dot.v4.DocumentContent.fromObject(n.documentContent);
        }
        if (n.eyeGazeLivenessContent != null) {
          if (typeof n.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          r.eyeGazeLivenessContent = p.dot.v4.EyeGazeLivenessContent.fromObject(n.eyeGazeLivenessContent);
        }
        if (n.faceContent != null) {
          if (typeof n.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          r.faceContent = p.dot.v4.FaceContent.fromObject(n.faceContent);
        }
        if (n.magnifeyeLivenessContent != null) {
          if (typeof n.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          r.magnifeyeLivenessContent = p.dot.v4.MagnifEyeLivenessContent.fromObject(n.magnifeyeLivenessContent);
        }
        if (n.smileLivenessContent != null) {
          if (typeof n.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          r.smileLivenessContent = p.dot.v4.SmileLivenessContent.fromObject(n.smileLivenessContent);
        }
        if (n.palmContent != null) {
          if (typeof n.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          r.palmContent = p.dot.v4.PalmContent.fromObject(n.palmContent);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return n.documentContent != null && n.hasOwnProperty("documentContent") && (i.documentContent = p.dot.v4.DocumentContent.toObject(n.documentContent, r), r.oneofs && (i.blob = "documentContent")), n.faceContent != null && n.hasOwnProperty("faceContent") && (i.faceContent = p.dot.v4.FaceContent.toObject(n.faceContent, r), r.oneofs && (i.blob = "faceContent")), n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent") && (i.magnifeyeLivenessContent = p.dot.v4.MagnifEyeLivenessContent.toObject(n.magnifeyeLivenessContent, r), r.oneofs && (i.blob = "magnifeyeLivenessContent")), n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent") && (i.smileLivenessContent = p.dot.v4.SmileLivenessContent.toObject(n.smileLivenessContent, r), r.oneofs && (i.blob = "smileLivenessContent")), n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent") && (i.eyeGazeLivenessContent = p.dot.v4.EyeGazeLivenessContent.toObject(n.eyeGazeLivenessContent, r), r.oneofs && (i.blob = "eyeGazeLivenessContent")), n.palmContent != null && n.hasOwnProperty("palmContent") && (i.palmContent = p.dot.v4.PalmContent.toObject(n.palmContent, r), r.oneofs && (i.blob = "palmContent")), i;
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
        if (n || (n = ge.create()), e.segments != null && e.segments.length)
          for (let r = 0; r < e.segments.length; ++r)
            p.dot.v4.EyeGazeLivenessSegment.encode(e.segments[r], n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new p.dot.v4.EyeGazeLivenessContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.segments && i.segments.length || (i.segments = []), i.segments.push(p.dot.v4.EyeGazeLivenessSegment.decode(e, e.uint32()));
              break;
            }
            case 2: {
              i.metadata = p.dot.v4.Metadata.decode(e, e.uint32());
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
            let r = p.dot.v4.EyeGazeLivenessSegment.verify(e.segments[n]);
            if (r)
              return "segments." + r;
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
          for (let r = 0; r < e.segments.length; ++r) {
            if (typeof e.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[r] = p.dot.v4.EyeGazeLivenessSegment.fromObject(e.segments[r]);
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
        let r = {};
        if ((n.arrays || n.defaults) && (r.segments = []), n.defaults && (r.metadata = null), e.segments && e.segments.length) {
          r.segments = [];
          for (let i = 0; i < e.segments.length; ++i)
            r.segments[i] = p.dot.v4.EyeGazeLivenessSegment.toObject(e.segments[i], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = p.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        return n || (n = ge.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new p.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.corner = e.int32();
              break;
            }
            case 2: {
              i.image = p.dot.Image.decode(e, e.uint32());
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
        let r = {};
        return n.defaults && (r.corner = n.enums === String ? "TOP_LEFT" : 0, r.image = null), e.corner != null && e.hasOwnProperty("corner") && (r.corner = n.enums === String ? p.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : p.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (r.image = p.dot.Image.toObject(e.image, n)), r;
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
        return n || (n = ge.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && p.dot.Image.encode(e.neutralExpressionFaceImage, n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new p.dot.v4.SmileLivenessContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.neutralExpressionFaceImage = p.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.smileExpressionFaceImage = p.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              i.metadata = p.dot.v4.Metadata.decode(e, e.uint32());
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
        let r = {};
        return n.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = p.dot.Image.toObject(e.neutralExpressionFaceImage, n)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = p.dot.Image.toObject(e.smileExpressionFaceImage, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = p.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        return n || (n = ge.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && p.dot.Image.encode(e.image, n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new p.dot.v4.PalmContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.image = p.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.metadata = p.dot.v4.Metadata.decode(e, e.uint32());
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
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = p.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = p.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
      return e || (e = ge.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new p.dot.Image();
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
      if (t instanceof p.dot.Image)
        return t;
      let e = new p.dot.Image();
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
      let n = e === void 0 ? t.len : t.pos + e, r = new p.dot.Int32List();
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
      let n = e === void 0 ? t.len : t.pos + e, r = new p.dot.DigestWithTimestamp();
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
      if (t instanceof p.dot.DigestWithTimestamp)
        return t;
      let e = new p.dot.DigestWithTimestamp();
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
async function rg(x) {
  const { Image: o } = h0, t = await x.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const r = o.verify(n);
  if (r) throw Error(r);
  const i = {};
  return i.bytes = e, o.create(i);
}
async function ig(x) {
  const { v4: { Metadata: o } } = h0, t = { ...x };
  t.platform = h0.Platform.WEB;
  const e = t, n = o.verify(e);
  if (n) throw Error(n);
  return o.create(e);
}
async function ag(x) {
  const { Content: o } = h0, { iv: t, key: e, message: n } = await P1(x), r = { token: new Uint8Array(e), iv: t, schemaVersion: cl, bytes: new Uint8Array(n) }, i = o.verify(r);
  if (i) throw Error(i);
  const a = o.create(r);
  return o.encode(a).finish();
}
function sg({ documentContent: x, faceContent: o, magnifeyeLivenessContent: t, smileLivenessContent: e }) {
  const { Blob: n } = h0.v4, r = {};
  r.documentContent = x, r.faceContent = o, r.magnifeyeLivenessContent = t, r.smileLivenessContent = e;
  const i = r, a = n.verify(i);
  if (a) throw Error(a);
  const s = n.create(i);
  return n.encode(s).finish();
}
async function KI(x, o) {
  const { FaceContent: t } = h0.v4, e = await rg(x), n = await ig(o), r = {};
  r.image = e, r.metadata = n;
  const i = r, a = t.verify(i);
  if (a) throw Error(a);
  const s = t.create(i), c = {};
  return c.faceContent = s, sg(c);
}
async function ZI(x, o) {
  const t = await KI(x, o);
  return ag(t);
}
const RI = ({ onPhotoTakenInternal: x }) => {
  const { redfin: o, sunfish: t } = $r(), { analytics: e } = ac(), { appState: n, freemiumOverlayState: r } = en(), { faceCameraOptions: i } = Bc(), { cameraFacing: a, onPhotoTaken: s, sessionToken: c, thresholds: u, wasmDirectoryPath: g } = i, { controller: h } = lI(u, g), l = F0(
    ({ content: k, controller: J, imageData: le, webMetadata: U }) => {
      jl(sc.FACE, J.getCandidateSelectionImages()), x == null || x({ cameraProperties: U }), s(le, k);
    },
    [x, s]
  ), { cameraResolution: C, cameraService: m, detectionDetails: A, videoRef: d } = m1({
    analytics: e,
    cameraFacing: a,
    controller: h,
    sessionToken: c,
    createProtoMessage: ZI,
    onPhotoTaken: l
  }), { shouldMirror: v } = c1(Nt.CONTROL, m);
  Ml(Nt.CAMERA_PROPS_CHANGED, {
    cameraResolution: C,
    shouldMirror: v
  }), he(() => () => {
    Wn.getInstance().restart();
  }, []);
  const K = r !== pn.HIDDEN && o !== fr.Higher && C, D = r === pn.VISIBLE, E = t, F = C && t && n === Bt.RUNNING;
  return /* @__PURE__ */ O(At, { children: [
    K && /* @__PURE__ */ O(G1, { fullOverlay: D, resolution: C }),
    /* @__PURE__ */ O(Ru, { ref: d, $isImageMirror: v, $isVisible: E, autoPlay: !0, muted: !0, playsInline: !0 }),
    F && /* @__PURE__ */ O(
      v1,
      {
        redfin: o,
        cameraResolution: C,
        detectionDetails: A,
        isImageMirror: v
      }
    )
  ] });
}, PI = ({
  onPhotoTakenInternal: x,
  ...o
}) => /* @__PURE__ */ O(Pl, { cameraOptions: o, children: /* @__PURE__ */ O(RI, { onPhotoTakenInternal: x }) }), VI = ({ children: x }) => {
  const o = Ht(null);
  return I1(o, Nt.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ O(Zu, { ref: o, children: x });
}, Vr = {};
Vr.minFaceSizeRatio = 0.135, Vr.maxFaceSizeRatio = 0.21;
const cg = {};
cg.faceConfidence = 1;
const Mt = {};
Mt.minFaceSizeRatio = 0.3, Mt.maxFaceSizeRatio = 1, Mt.brightnessHighThreshold = 1, Mt.brightnessLowThreshold = -(1493 * -1 + 1 * -3673 + 5167), Mt.faceConfidence = 0.15, Mt.sharpnessThreshold = -(-665 * 7 + -43 * 194 + 134 * 97), Mt.outOfBoundsThreshold = -(12636 + 133 * -95);
const TI = { [nt.DISTANT]: Vr, [nt.MIDDLE]: cg, [nt.CLOSEUP]: Mt }, EI = TI, qa = 2 * 2519 + 7811 + -12849 + 0.255;
async function NI(x, o) {
  const { MagnifEyeLivenessContent: t } = h0.v4, e = await Promise.all(x.map(async (u) => rg(u))), n = await ig(o), r = {};
  r.images = e, r.metadata = n;
  const i = r, a = t.verify(i);
  if (a) throw Error(a);
  const s = t.create(i), c = {};
  return c.magnifeyeLivenessContent = s, sg(c);
}
async function LI(x, o) {
  const t = x.map((n) => n.image), e = await NI(t, o);
  return ag(e);
}
function DI(x, o) {
  const t = Ra(x.faceSize, qa);
  return Ra(o.faceSize, qa) < t;
}
const FI = (x, o) => {
  const t = _0(void 0), e = (r) => {
    if (!(!r.detail || x !== s0.RUNNING || o !== nt.CLOSEUP)) {
      if (!t.value) {
        t.value = r.detail;
        return;
      }
      DI(t.value.data.detection, r.detail.data.detection) && (t.value = r.detail);
    }
  };
  Cc(Nt.FACE_DETECTION, e);
  const n = {};
  return n.middleImageBestCandidate = t, n;
}, YI = $0.div`
  ${(x) => x.$isSecondStep && ec`
      transition: all 1.5s ease-in-out;
      transform: translate(16%, 5%) scale(2);
      transition-delay: 1.5s;
    `}
`, XI = ({
  licensePath: x,
  onComplete: o,
  onError: t,
  sessionToken: e,
  wasmDirectoryPath: n
}) => {
  const { analytics: r } = ac(), { appState: i, handleAppStateChange: a, handleError: s, magnifEyePhase: c, setMagnifEyePhase: u } = Eu(), g = _0([]), h = _0(null), { middleImageBestCandidate: l } = FI(i, c), C = kl(vn.ANIMATION_END);
  function m(E) {
    g.value = [...g.value, E];
  }
  function A(E) {
    u(E), kr(vn.STATUS_CHANGED, { phase: E });
  }
  function d(E) {
    m(E), A(nt.MIDDLE);
  }
  C.value && A(nt.CLOSEUP);
  async function v(E) {
    if (l.value) {
      const k = { image: await Wc(l.value.image), data: l.value.data };
      m(k);
    }
    m(E);
    try {
      const F = {
        sessionToken: e,
        web: h.value
      }, k = await LI(g.value, F), [J] = g.value;
      o(J, k), r == null || r.trackLivenessProcess(g.value);
    } catch (F) {
      F instanceof Error && s(re.fromError(F));
      return;
    }
    a(s0.DONE);
  }
  function K(E) {
    h.value = Hl(h.value, E.cameraProperties);
  }
  const D = {
    [nt.DISTANT]: d,
    /**
     * we don't care about onPhotoTaken in MIDDLE phase, because faceConfidence = 1
     */
    [nt.MIDDLE]: () => {
    },
    [nt.CLOSEUP]: v
  };
  return /* @__PURE__ */ O(VI, { children: /* @__PURE__ */ O(YI, { $isSecondStep: c !== nt.DISTANT, children: /* @__PURE__ */ O(
    PI,
    {
      licensePath: x,
      onError: t,
      onPhotoTaken: D[c],
      onPhotoTakenInternal: K,
      thresholds: EI[c],
      wasmDirectoryPath: n
    }
  ) }) });
};
function jI({ initAppState: x }) {
  const [o, t] = ze(x), [e, n] = ze(), [r, i] = ze(!1), a = {};
  return a.appState = o, a.setAppState = t, a.error = e, a.setError = n, a.isCameraReady = r, a.setIsCameraReady = i, a;
}
function MI(x, o) {
  return o !== nt.DISTANT ? pn.HIDDEN : x !== s0.RUNNING ? pn.VISIBLE : pn.VISIBLE_WITH_MASK;
}
function JI({
  onError: x
}) {
  const { appState: o, error: t, isCameraReady: e, setAppState: n, setError: r, setIsCameraReady: i } = jI({
    initAppState: s0.LOADING
  }), [a, s] = ze(nt.DISTANT), c = MI(o, a), u = F0(
    (h) => {
      kr(vn.STATUS_CHANGED, { state: s0.ERROR, error: h }), i(!1), x(h), r(h), n(s0.ERROR);
    },
    [x, i, r, n]
  ), g = F0(
    (h) => {
      h !== s0.WAITING && (n(h), kr(vn.STATUS_CHANGED, { state: h }));
    },
    [n]
  );
  return {
    appState: o,
    magnifEyePhase: a,
    setMagnifEyePhase: s,
    freemiumOverlayState: c,
    isCameraReady: e,
    setIsCameraReady: i,
    handleAppStateChange: g,
    handleError: u,
    error: t
  };
}
var gg = ((x) => (x.AUTO_CAPTURE = "auto-capture", x))(gg || {});
class _I {
  constructor() {
    _(this, "appKey", "");
    _(this, "deviceId", "");
  }
  async countlyFetch(o) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const n = e, r = "https://innovatrics.count.ly/i?", i = {};
    i.app_key = this.appKey, i.device_id = this.deviceId;
    const a = dx(i);
    await fetch("" + r + a + "&" + o, n);
  }
  async init(o, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = o;
    const e = { _app_version: Zc() }, n = { organization: Rc(window.location.href) }, r = dx({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const t = dx(o);
    await this.countlyFetch(t);
  }
  async sendAutoCaptureEvent(o, t) {
    const e = {};
    e.key = gg.AUTO_CAPTURE, e.count = 1, e.dur = t, e.segmentation = o;
    const n = [e], r = dx({ events: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
}
const lx = new _I();
function QI() {
  const [x] = window.crypto.getRandomValues(new Uint32Array(1));
  return x.toString(-1 * 182 + -6128 + 6326);
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
const $a = (x) => Math.round(x / 500) * 500 / (-1 * 9750 + 5098 * -1 + 15848), H0 = (x) => x ? x <= -65 * 69 + 6749 + -2263 ? Math.round(x * 20) / (-7 * -30 + -7 * 293 + 1861) : Math.round(x / (-1693 * 3 + -3938 + 1 * 9067)) * (-991 * -9 + -5895 + 1 * -2974) : 15147 + 1 * -15147, qI = (x) => Math.round(x * (2 * -3373 + 1533 * -3 + 11347)) / (-9939 * 1 + 4739 * -2 + -1 * -19419);
class $I {
  constructor() {
    _(this, "countly", lx);
  }
  createSegmentation(o) {
    return { appVersion: Zc(), ...o };
  }
  init(o) {
    if (o1()) return;
    const t = UI();
    lx.init(t, o);
  }
  endSession() {
    lx.endSession();
  }
  walleye(o, t) {
    const e = {};
    e.nocturne = o, e.customer = t;
    const n = this.createSegmentation(e);
    lx.sendAutoCaptureEvent(n);
  }
}
class ef extends $I {
  constructor() {
    super(...arguments);
    _(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(t) {
    this.captureProcessAnalytics.push(t);
  }
}
class tf extends ef {
  trackLivenessProcess(o) {
    var g, h, l, C, m, A, d, v, K, D;
    if (!o.length || !this.captureProcessAnalytics.length) return;
    const [t, e, n] = o, [r, i] = this.captureProcessAnalytics, a = qI(r.averageFps + (i == null ? void 0 : i.averageFps)) / (-3 * -33 + -8370 + 8273), s = $a(r.captureProcessDurationInMs), c = $a(i == null ? void 0 : i["captureProcessDurationInMs"]), u = this.createSegmentation({ faceSizeDistant: H0((g = t.data.detection) == null ? void 0 : g.faceSize), faceSizeCloseup: H0((h = n == null ? void 0 : n.data.detection) == null ? void 0 : h.faceSize), faceSizeMiddle: H0((l = e.data.detection) == null ? void 0 : l.faceSize), confidenceDistant: H0((C = t.data.detection) == null ? void 0 : C.confidence), confidenceCloseup: H0((m = n == null ? void 0 : n.data.detection) == null ? void 0 : m.confidence), confidenceMiddle: H0((A = e.data.detection) == null ? void 0 : A.confidence), imageResolution: ((v = (d = t.data) == null ? void 0 : d["imageResolution"]) == null ? void 0 : v.width) + "x" + ((D = (K = t.data) == null ? void 0 : K["imageResolution"]) == null ? void 0 : D.height), averageFps: a, captureTimeCloseup: c > -9 * -827 + 7844 + 2 * -7621 ? ">45" : "" + c, captureTimeDistant: s > 4049 * -2 + 2598 + 5530 ? ">30" : "" + s, camera: zI(r == null ? void 0 : r.deviceName, r == null ? void 0 : r.facingMode), instructionSet: r.instructionSet });
    this.countly.sendAutoCaptureEvent(u, s + c);
  }
}
const nf = new tf(), xf = ({ props: x }) => x ? /* @__PURE__ */ O(Bu, { target: x.styleTarget, children: /* @__PURE__ */ O(
  Ju,
  {
    licensePath: x.licensePath,
    bramble: vr.getInstance(),
    wasmDirectoryPath: x.wasmDirectoryPath,
    children: /* @__PURE__ */ O(Uu, { analytics: nf, appKey: "d5ca54dabfb1a2c72d7090c9c8980252a879da44", children: /* @__PURE__ */ O(
      Tu,
      {
        value: JI({
          onError: x.onError
        }),
        children: /* @__PURE__ */ O(ic, { children: /* @__PURE__ */ O(XI, { ...x }) })
      }
    ) })
  }
) }) : null;
Eg(xf, "x-dot-magnifeye-liveness", ["props"]);
