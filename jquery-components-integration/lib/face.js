var rg = Object.defineProperty;
var Gi = (x) => {
  throw TypeError(x);
};
var ig = (x, o, t) => o in x ? rg(x, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[o] = t;
var _ = (x, o, t) => ig(x, typeof o != "symbol" ? o + "" : o, t), ki = (x, o, t) => o.has(x) || Gi("Cannot " + t);
var X = (x, o, t) => (ki(x, o, "read from private field"), t ? t.call(x) : o.get(x)), ce = (x, o, t) => o.has(x) ? Gi("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(x) : o.set(x, t), ae = (x, o, t, e) => (ki(x, o, "write to private field"), e ? e.call(x, t) : o.set(x, t), t);
var Pn, N, Ma, Ja, x0, Hi, _a, Do, Gr, Yo, Xo, Qa, pn = {}, Ua = [], ag = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, qx = Array.isArray;
function Tt(x, o) {
  for (var t in o) x[t] = o[t];
  return x;
}
function za(x) {
  var o = x.parentNode;
  o && o.removeChild(x);
}
function Ye(x, o, t) {
  var e, n, r, i = {};
  for (r in o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : i[r] = o[r];
  if (arguments.length > 9553 + -4 * -1213 + -14403 && (i.children = arguments.length > -1 * 9166 + -511 * 18 + -1 * -18367 ? Pn.call(arguments, 170 * 2 + 7941 * -1 + -1 * -7603) : t), typeof x == "function" && x.defaultProps != null)
    for (r in x.defaultProps) void (6547 + -1 * -2571 + -97 * 94) === i[r] && (i[r] = x.defaultProps[r]);
  return ln(x, i, e, n, null);
}
function ln(x, o, t, e, n) {
  var r = {};
  r.type = x, r.props = o, r.key = t, r.ref = e, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void 0, r.__c = null, r.constructor = void (-6956 * 1 + 2047 + 4909 * 1), r.__v = n ?? ++Ma, r.__i = -(-167 + 3919 * 1 + -341 * 11), r.__u = 0;
  var i = r;
  return n == null && N.vnode != null && N.vnode(i), i;
}
function sg() {
  var x = {};
  return x.current = null, x;
}
function mt(x) {
  return x.children;
}
function gt(x, o) {
  this.props = x, this.context = o;
}
function d0(x, o) {
  if (o == null) return x.__ ? d0(x.__, x.__i + (-131 * -41 + -6378 + 1008 * 1)) : null;
  for (var t; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) return t.__e;
  return typeof x.type == "function" ? d0(x) : null;
}
function qa(x) {
  var o, t;
  if ((x = x.__) != null && x.__c != null) {
    for (x.__e = x.__c.base = null, o = -86 * 103 + -523 * 16 + 17226; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) {
      x.__e = x.__c.base = t.__e;
      break;
    }
    return qa(x);
  }
}
function jo(x) {
  (!x.__d && (x.__d = !0) && x0.push(x) && !yx.__r++ || Hi !== N.debounceRendering) && ((Hi = N.debounceRendering) || _a)(yx);
}
function yx() {
  var x, o, t, e, n, r, i, a;
  for (x0.sort(Do); x = x0.shift(); ) x.__d && (o = x0.length, e = void (-29 * -193 + -1 * -3583 + -9180), r = (n = (t = x).__v).__e, i = [], a = [], t.__P && ((e = Tt({}, n)).__v = n.__v + (-4601 * 2 + 5454 + 163 * 23), N.vnode && N.vnode(e), kr(t.__P, e, n, t.__n, t.__P.namespaceURI, -4487 + 10 * -22 + 4739 & n.__u ? [r] : null, i, r ?? d0(n), !!(1532 * 2 + 253 * 5 + -4297 * 1 & n.__u), a), e.__v = n.__v, e.__.__k[e.__i] = e, ts(i, e, a), e.__e != r && qa(e)), x0.length > o && x0.sort(Do));
  yx.__r = -1 * -534 + -2831 + 1 * 2297;
}
function $a(x, o, t, e, n, r, i, a, s, c, u) {
  var g, h, l, C, m, A = e && e.__k || Ua, d = o.length;
  for (t.__d = s, cg(t, o, A), s = t.__d, g = 0; g < d; g++) (l = t.__k[g]) != null && typeof l != "boolean" && typeof l != "function" && (h = -(-5077 + 1 * 3187 + -61 * -31) === l.__i ? pn : A[l.__i] || pn, l.__i = g, kr(x, l, h, n, r, i, a, s, c, u), C = l.__e, l.ref && h.ref != l.ref && (h.ref && Hr(h.ref, null, l), u.push(l.ref, l.__c || C, l)), m == null && C != null && (m = C), 15632 + -5841 * -21 + -1 * 72757 & l.__u || h.__k === l.__k ? (s && typeof l.type == "string" && !x.contains(s) && (s = d0(h)), s = es(l, s, x)) : typeof l.type == "function" && void (1 * -7789 + 6879 + 910) !== l.__d ? s = l.__d : C && (s = C.nextSibling), l.__d = void (1637 * -2 + -4 * -607 + 846), l.__u &= -(1 * -196246 + -357322 + 750177));
  t.__d = s, t.__e = m;
}
function cg(x, o, t) {
  var e, n, r, i, a, s = o.length, c = t.length, u = c, g = 0;
  for (x.__k = [], e = -8895 + 1 * -4322 + -13217 * -1; e < s; e++) i = e + g, (n = x.__k[e] = (n = o[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? ln(null, n, null, null, null) : qx(n) ? ln(mt, { children: n }, null, null, null) : void (-6094 + 2 * 3047) === n.constructor && n.__b > -10678 + 5339 * 2 ? ln(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = x, n.__b = x.__b + (-412 * 2 + 7122 + -6297 * 1), a = gg(n, t, i, u), n.__i = a, r = null, -(43 * -78 + 1933 + 1422) !== a && (u--, (r = t[a]) && (r.__u |= -178775 + -5 * -44503 + -12476 * -7)), r == null || r.__v === null ? (-(78 * 81 + -2122 + 4195 * -1) == a && g--, typeof n.type != "function" && (n.__u |= -46845 * 1 + -71064 + -1 * -183445)) : a !== i && (a == i - 1 ? g = a - i : a == i + (-4364 * 2 + 6646 + 2083 * 1) ? g++ : a > i ? u > s - i ? g += a - i : g-- : a < i && g++, a !== e + g && (n.__u |= 76185 * -1 + -87832 + 229553))) : (r = t[i]) && r.key == null && r.__e && 395 * -21 + 5721 + 2574 == (-96770 + 461 * -421 + 421923 & r.__u) && (r.__e == x.__d && (x.__d = d0(r)), Mo(r, r, !(-43 * 10 + -6531 + -2 * -3481)), t[i] = null, u--);
  if (u)
    for (e = 0; e < c; e++) (r = t[e]) != null && -3787 + -541 * -7 == (1 * -179315 + 181198 + -1 * -129189 & r.__u) && (r.__e == x.__d && (x.__d = d0(r)), Mo(r, r));
}
function es(x, o, t) {
  var e, n;
  if (typeof x.type == "function") {
    for (e = x.__k, n = -79 * 22 + 8315 + 6577 * -1; e && n < e.length; n++) e[n] && (e[n].__ = x, o = es(e[n], o, t));
    return o;
  }
  x.__e != o && (t.insertBefore(x.__e, o || null), o = x.__e);
  do
    o = o && o.nextSibling;
  while (o != null && o.nodeType === 8);
  return o;
}
function Vt(x, o) {
  return o = o || [], x == null || typeof x == "boolean" || (qx(x) ? x.some(function(t) {
    Vt(t, o);
  }) : o.push(x)), o;
}
function gg(x, o, t, e) {
  var n = x.key, r = x.type, i = t - (3018 + 1 * -3017), a = t + (-860 * -2 + -1 * -4147 + -5866 * 1), s = o[t];
  if (s === null || s && n == s.key && r === s.type && 9777 + 3 * -3259 == (1 * -6776 + 1 * -201953 + -21 * -16181 & s.__u)) return t;
  if (e > (s != null && 2 * 2983 + 4347 + 10313 * -1 == (191096 + 488 * -123 & s.__u) ? -415 * -1 + -6267 + 5853 : 0)) for (; i >= 0 || a < o.length; ) {
    if (i >= -6557 * 1 + 1 * -7873 + 962 * 15) {
      if ((s = o[i]) && -7087 + -257 * -16 + 7 * 425 == (-241299 + 39839 * -4 + 531727 & s.__u) && n == s.key && r === s.type) return i;
      i--;
    }
    if (a < o.length) {
      if ((s = o[a]) && -11929 + 151 * 79 == (-200216 + -1 * 87067 + -1 * -418355 & s.__u) && n == s.key && r === s.type) return a;
      a++;
    }
  }
  return -(-27 * 194 + -541 + 5780);
}
function Oi(x, o, t) {
  o[114 * -83 + 1059 + 8403] === "-" ? x.setProperty(o, t ?? "") : x[o] = t == null ? "" : typeof t != "number" || ag.test(o) ? t : t + "px";
}
function qn(x, o, t, e, n) {
  var r;
  e: if (o === "style")
    if (typeof t == "string") x.style.cssText = t;
    else {
      if (typeof e == "string" && (x.style.cssText = e = ""), e)
        for (o in e) t && o in t || Oi(x.style, o, "");
      if (t)
        for (o in t) e && t[o] === e[o] || Oi(x.style, o, t[o]);
    }
  else if (o[0] === "o" && o[5662 + 1 * -1671 + -570 * 7] === "n") r = o !== (o = o.replace(/(PointerCapture)$|Capture$/i, "$1")), o = o.toLowerCase() in x || o === "onFocusOut" || o === "onFocusIn" ? o.toLowerCase().slice(-65 * -98 + 2 * 2364 + -5548 * 2) : o.slice(-1197 * 3 + 2733 + 860), x.l || (x.l = {}), x.l[o + r] = t, t ? e ? t.u = e.u : (t.u = Gr, x.addEventListener(o, r ? Xo : Yo, r)) : x.removeEventListener(o, r ? Xo : Yo, r);
  else {
    if (n == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in x) try {
      x[o] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && o[3297 * 3 + 17 * 297 + 2 * -7468] !== "-" ? x.removeAttribute(o) : x.setAttribute(o, o == "popover" && 6679 * 1 + -29 * 337 + 3095 * 1 == t ? "" : t));
  }
}
function Zi(x) {
  return function(o) {
    if (this.l) {
      var t = this.l[o.type + x];
      if (o.t == null) o.t = Gr++;
      else if (o.t < t.u) return;
      return t(N.event ? N.event(o) : o);
    }
  };
}
function kr(x, o, t, e, n, r, i, a, s, c) {
  var u, g, h, l, C, m, A, d, v, k, D, M, Y, O, J, Ie, U = o.type;
  if (void (-279 + 1 * -4241 + 4520) !== o.constructor) return null;
  -3 * -254 + 6406 + 128 * -55 & t.__u && (s = !!(5819 + -5631 * 1 + -3 * 52 & t.__u), r = [a = o.__e = t.__e]), (u = N.__b) && u(o);
  e: if (typeof U == "function") try {
    if (d = o.props, v = "prototype" in U && U.prototype.render, k = (u = U.contextType) && e[u.__c], D = u ? k ? k.props.value : u.__ : e, t.__c ? A = (g = o.__c = t.__c).__ = g.__E : (v ? o.__c = g = new U(d, D) : (o.__c = g = new gt(d, D), g.constructor = U, g.render = ug), k && k.sub(g), g.props = d, g.state || (g.state = {}), g.context = D, g.__n = e, h = g.__d = !(-5 * 248 + -153 * 40 + 320 * 23), g.__h = [], g._sb = []), v && g.__s == null && (g.__s = g.state), v && U.getDerivedStateFromProps != null && (g.__s == g.state && (g.__s = Tt({}, g.__s)), Tt(g.__s, U.getDerivedStateFromProps(d, g.__s))), l = g.props, C = g.state, g.__v = o, h) v && U.getDerivedStateFromProps == null && g.componentWillMount != null && g.componentWillMount(), v && g.componentDidMount != null && g.__h.push(g.componentDidMount);
    else {
      if (v && U.getDerivedStateFromProps == null && d !== l && g.componentWillReceiveProps != null && g.componentWillReceiveProps(d, D), !g.__e && (g.shouldComponentUpdate != null && g.shouldComponentUpdate(d, g.__s, D) === !1 || o.__v === t.__v)) {
        for (o.__v !== t.__v && (g.props = d, g.state = g.__s, g.__d = !1), o.__e = t.__e, o.__k = t.__k, o.__k.forEach(function(fe) {
          fe && (fe.__ = o);
        }), M = 5430 + 905 * -6; M < g._sb.length; M++) g.__h.push(g._sb[M]);
        g._sb = [], g.__h.length && i.push(g);
        break e;
      }
      g.componentWillUpdate != null && g.componentWillUpdate(d, g.__s, D), v && g.componentDidUpdate != null && g.__h.push(function() {
        g.componentDidUpdate(l, C, m);
      });
    }
    if (g.context = D, g.props = d, g.__P = x, g.__e = !(-301 + 3 * -3138 + -4858 * -2), Y = N.__r, O = 59 * -119 + 3898 * 1 + -3123 * -1, v) {
      for (g.state = g.__s, g.__d = !1, Y && Y(o), u = g.render(g.props, g.state, g.context), J = 143 * -26 + -1345 + 5063; J < g._sb.length; J++) g.__h.push(g._sb[J]);
      g._sb = [];
    } else do
      g.__d = !(-7493 + -43 * -49 + -5387 * -1), Y && Y(o), u = g.render(g.props, g.state, g.context), g.state = g.__s;
    while (g.__d && ++O < 25);
    g.state = g.__s, g.getChildContext != null && (e = Tt(Tt({}, e), g.getChildContext())), v && !h && g.getSnapshotBeforeUpdate != null && (m = g.getSnapshotBeforeUpdate(l, C)), $a(x, qx(Ie = u != null && u.type === mt && u.key == null ? u.props.children : u) ? Ie : [Ie], o, t, e, n, r, i, a, s, c), g.base = o.__e, o.__u &= -161, g.__h.length && i.push(g), A && (g.__E = g.__ = null);
  } catch (fe) {
    o.__v = null, s || r != null ? (o.__e = a, o.__u |= s ? 160 : 8355 + 135 * -1 + -8188, r[r.indexOf(a)] = null) : (o.__e = t.__e, o.__k = t.__k), N.__e(fe, o, t);
  }
  else r == null && o.__v === t.__v ? (o.__k = t.__k, o.__e = t.__e) : o.__e = dg(t.__e, o, t, e, n, r, i, s, c);
  (u = N.diffed) && u(o);
}
function ts(x, o, t) {
  o.__d = void (-3723 * -1 + -1 * -3401 + -7124);
  for (var e = 3347 + -1 * 3347; e < t.length; e++) Hr(t[e], t[++e], t[++e]);
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
function dg(x, o, t, e, n, r, i, a, s) {
  var c, u, g, h, l, C, m, A = t.props, d = o.props, v = o.type;
  if (v === "svg" ? n = "http://www.w3.org/2000/svg" : v === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), r != null) {
    for (c = 73 * -101 + 4783 + -2590 * -1; c < r.length; c++) if ((l = r[c]) && "setAttribute" in l == !!v && (v ? l.localName === v : -6463 + -61 * -106 === l.nodeType)) {
      x = l, r[c] = null;
      break;
    }
  }
  if (x == null) {
    if (v === null) return document.createTextNode(d);
    x = document.createElementNS(n, v, d.is && d), r = null, a = !1;
  }
  if (v === null) A === d || a && x.data === d || (x.data = d);
  else {
    if (r = r && Pn.call(x.childNodes), A = t.props || pn, !a && r != null)
      for (A = {}, c = 267 * -3 + -2383 * 1 + 3184; c < x.attributes.length; c++) A[(l = x.attributes[c]).name] = l.value;
    for (c in A) if (l = A[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") g = l;
      else if (c !== "key" && !(c in d)) {
        if (c == "value" && "defaultValue" in d || c == "checked" && "defaultChecked" in d) continue;
        qn(x, c, null, l, n);
      }
    }
    for (c in d) l = d[c], c == "children" ? h = l : c == "dangerouslySetInnerHTML" ? u = l : c == "value" ? C = l : c == "checked" ? m = l : c === "key" || a && typeof l != "function" || A[c] === l || qn(x, c, l, A[c], n);
    if (u) a || g && (u.__html === g.__html || u.__html === x.innerHTML) || (x.innerHTML = u.__html), o.__k = [];
    else if (g && (x.innerHTML = ""), $a(x, qx(h) ? h : [h], o, t, e, v === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, r, i, r ? r[2066 + -1 * 2066] : t.__k && d0(t, -566 * -8 + 7063 + -67 * 173), a, s), r != null)
      for (c = r.length; c--; ) r[c] != null && za(r[c]);
    a || (c = "value", void (58 * 142 + -1130 * -1 + 2 * -4683) !== C && (C !== x[c] || v === "progress" && !C || v === "option" && C !== A[c]) && qn(x, c, C, A[c], n), c = "checked", void (-2727 * 2 + -1 * 2497 + 7951) !== m && m !== x[c] && qn(x, c, m, A[c], n));
  }
  return x;
}
function Hr(x, o, t) {
  try {
    typeof x == "function" ? x(o) : x.current = o;
  } catch (e) {
    N.__e(e, t);
  }
}
function Mo(x, o, t) {
  var e, n;
  if (N.unmount && N.unmount(x), (e = x.ref) && (e.current && e.current !== x.__e || Hr(e, null, o)), (e = x.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (r) {
      N.__e(r, o);
    }
    e.base = e.__P = null;
  }
  if (e = x.__k)
    for (n = -7742 + 49 * 158; n < e.length; n++) e[n] && Mo(e[n], o, t || typeof x.type != "function");
  t || x.__e == null || za(x.__e), x.__c = x.__ = x.__e = x.__d = void (1621 * -1 + -4753 * -1 + -3 * 1044);
}
function ug(x, o, t) {
  return this.constructor(x, t);
}
function _t(x, o, t) {
  var e, n, r, i;
  N.__ && N.__(x, o), n = (e = typeof t == "function") ? null : t && t.__k || o.__k, r = [], i = [], kr(o, x = (!e && t || o).__k = Ye(mt, null, [x]), n || pn, pn, o.namespaceURI, !e && t ? [t] : n ? null : o.firstChild ? Pn.call(o.childNodes) : null, r, !e && t ? t : n ? n.__e : o.firstChild, e, i), ts(r, x, i);
}
function Or(x, o) {
  _t(x, o, Or);
}
function Zr(x, o, t) {
  var e, n, r, i, a = Tt({}, x.props);
  for (r in x.type && x.type.defaultProps && (i = x.type.defaultProps), o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : a[r] = void (-1404 + 351 * 4) === o[r] && void (-18061 + -1 * -18061) !== i ? i[r] : o[r];
  return arguments.length > -1597 + -4663 * -1 + -3064 && (a.children = arguments.length > -1 * 1555 + -2940 + 4498 ? Pn.call(arguments, 9914 + -1 * -2971 + -12883) : t), ln(x.type, a, e || x.key, n || x.ref, null);
}
function Tn(x, o) {
  var t = { __c: o = "__cC" + Qa++, __: x, Consumer: function(e, n) {
    return e.children(n);
  }, Provider: function(e) {
    var n, r;
    return this.getChildContext || (n = [], (r = {})[o] = this, this.getChildContext = function() {
      return r;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && n.some(function(a) {
        a.__e = !0, jo(a);
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
Pn = Ua.slice, N = { __e: function(x, o, t, e) {
  for (var n, r, i; o = o.__; ) if ((n = o.__c) && !n.__) try {
    if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(x)), i = n.__d), n.componentDidCatch != null && (n.componentDidCatch(x, e || {}), i = n.__d), i) return n.__E = n;
  } catch (a) {
    x = a;
  }
  throw x;
} }, Ma = 4313 + -227 * 19, Ja = function(x) {
  return x != null && x.constructor == null;
}, gt.prototype.setState = function(x, o) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Tt({}, this.state), typeof x == "function" && (x = x(Tt({}, t), this.props)), x && Tt(t, x), x != null && this.__v && (o && this._sb.push(o), jo(this));
}, gt.prototype.forceUpdate = function(x) {
  this.__v && (this.__e = !(-1 * -5905 + -4588 + -1317), x && this.__h.push(x), jo(this));
}, gt.prototype.render = mt, x0 = [], _a = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Do = function(x, o) {
  return x.__v.__b - o.__v.__b;
}, yx.__r = 0, Gr = -22 * 322 + 149 * -1 + 7233, Yo = Zi(!(-1543 * 6 + -9948 + 19207)), Xo = Zi(!(991 * 5 + 4 * 443 + -6727)), Qa = -6424 + -11 * -584;
function Kr() {
  return (Kr = Object.assign ? Object.assign.bind() : function(x) {
    for (var o = -10725 + -31 * -346; o < arguments.length; o++) {
      var t = arguments[o];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (x[e] = t[e]);
    }
    return x;
  }).apply(this, arguments);
}
var lg = ["context", "children"];
function Ig(x) {
  this.getChildContext = function() {
    return x.context;
  };
  var o = x.children, t = function(e, n) {
    if (e == null) return {};
    var r, i, a = {}, s = Object.keys(e);
    for (i = 11816 + 11816 * -1; i < s.length; i++) n.indexOf(r = s[i]) >= -10537 + -41 * -257 || (a[r] = e[r]);
    return a;
  }(x, lg);
  return Zr(o, t);
}
function fg() {
  var x = {};
  x.detail = {}, x.bubbles = !(-9132 + 1 * 1213 + 7919), x.cancelable = !(-22 * 398 + 2105 + 6651);
  var o = new CustomEvent("_preact", x);
  this.dispatchEvent(o), this._vdom = Ye(Ig, Kr({}, this._props, { context: o.detail.context }), function t(e, n) {
    if (1 * 9298 + -8700 + -5 * 119 === e.nodeType) return e.data;
    if (5176 + 5 * -1035 !== e.nodeType) return null;
    var r = [], i = {}, a = 4353 + -2 * -2498 + -9349 * 1, s = e.attributes, c = e.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[ns(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var u = t(c[a], null), g = c[a].slot;
      g ? i[g] = Ye(Ki, { name: g }, u) : r[a] = u;
    }
    var h = n ? Ye(Ki, null, r) : r;
    return Ye(n || e.nodeName.toLowerCase(), i, h);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Or : _t)(this._vdom, this._root);
}
function ns(x) {
  return x.replace(/-(\w)/g, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Cg(x, o, t) {
  if (this._vdom) {
    var e = {};
    e[x] = t = t ?? void (-1439 + 687 * -13 + 10370), e[ns(x)] = t, this._vdom = Zr(this._vdom, e), _t(this._vdom, this._root);
  }
}
function hg() {
  _t(this._vdom = null, this._root);
}
function Ki(x, o) {
  var t = this;
  return Ye("slot", Kr({}, x, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = o;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function pg(x, o, t, e) {
  function n() {
    var r = Reflect.construct(HTMLElement, [], n);
    return r._vdomComponent = x, r._root = r, r;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = fg, n.prototype.attributeChangedCallback = Cg, n.prototype.disconnectedCallback = hg, t = t || x.observedAttributes || Object.keys(x.propTypes || {}), n.observedAttributes = t, t.forEach(function(r) {
    Object.defineProperty(n.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(i) {
      this._vdom ? this.attributeChangedCallback(r, null, i) : (this._props || (this._props = {}), this._props[r] = i, this.connectedCallback());
      var a = typeof i;
      i != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(r, i);
    } });
  }), customElements.define(o, n);
}
var mg = 0;
function Z(x, o, t, e, n, r) {
  o || (o = {});
  var i, a, s = o;
  if ("ref" in s)
    for (a in s = {}, o) a == "ref" ? i = o[a] : s[a] = o[a];
  var c = {};
  c.type = x, c.props = s, c.key = t, c.ref = i, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__d = void (-2 * -4361 + -1 * -1277 + -9999), c.__c = null, c.constructor = void (1 * -7606 + 5 * -1228 + 13746 * 1), c.__v = --mg, c.__i = -(886 + -295 * 3), c.__u = 0, c.__source = n, c.__self = r;
  var u = c;
  if (typeof x == "function" && (i = x.defaultProps))
    for (a in i) void (-6726 + -86 * -103 + 52 * -41) === s[a] && (s[a] = i[a]);
  return N.vnode && N.vnode(u), u;
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
function E0(x, o, t) {
  if (t || arguments.length === 2) for (var e = 0, n = o.length, r; e < n; e++)
    (r || !(e in o)) && (r || (r = Array.prototype.slice.call(o, 0, e)), r[e] = o[e]);
  return x.concat(r || Array.prototype.slice.call(o));
}
function bg(x) {
  var o = Object.create(null);
  return function(t) {
    return o[t] === void 0 && (o[t] = x(t)), o[t];
  };
}
var Ag = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, yg = bg(function(x) {
  return Ag.test(x) || x.charCodeAt(3638 + 293 * -13 + 171) === -3391 + 16 * -193 + 6590 && x.charCodeAt(1) === 8650 + 7 * 431 + -91 * 127 && x.charCodeAt(-76 * 66 + -1390 + 712 * 9) < 91;
}), Qt, oe, wo, Ri, L0 = -9412 + 34 * -61 + -11486 * -1, xs = [], se = N, Pi = se.__b, Ti = se.__r, Vi = se.diffed, Ei = se.__c, Li = se.unmount, Ni = se.__;
function J0(x, o) {
  se.__h && se.__h(oe, x, L0 || o), L0 = -1163 * 8 + 1 * -3413 + 27 * 471;
  var t = {};
  t.__ = [], t.__h = [];
  var e = oe.__H || (oe.__H = t);
  return x >= e.__.length && e.__.push({}), e.__[x];
}
function nt(x) {
  return L0 = 4187 + -13 * 322, Rr(is, x);
}
function Rr(x, o, t) {
  var e = J0(Qt++, 2);
  if (e.t = x, !e.__c && (e.__ = [t ? t(o) : is(void (421 * 6 + 9 * -521 + -1 * -2163), o), function(a) {
    var s = e.__N ? e.__N[0] : e.__[0], c = e.t(s, a);
    s !== c && (e.__N = [c, e.__[3860 + -1 * 3859]], e.__c.setState({}));
  }], e.__c = oe, !oe.u)) {
    var n = function(a, s, c) {
      if (!e.__c.__H) return !0;
      var u = e.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (u.every(function(h) {
        return !h.__N;
      })) return !r || r.call(this, a, s, c);
      var g = !(-5273 + 3025 * -2 + 596 * 19);
      return u.forEach(function(h) {
        if (h.__N) {
          var l = h.__[0];
          h.__ = h.__N, h.__N = void 0, l !== h.__[0] && (g = !0);
        }
      }), !(!g && e.__c.props === a) && (!r || r.call(this, a, s, c));
    };
    oe.u = !(1 * 1823 + -7666 * 1 + -1 * -5843);
    var r = oe.shouldComponentUpdate, i = oe.componentWillUpdate;
    oe.componentWillUpdate = function(a, s, c) {
      if (this.__e) {
        var u = r;
        r = void (3607 + -3607 * 1), n(a, s, c), r = u;
      }
      i && i.call(this, a, s, c);
    }, oe.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function Se(x, o) {
  var t = J0(Qt++, 3);
  !se.__s && Pr(t.__H, o) && (t.__ = x, t.i = o, oe.__H.__h.push(t));
}
function _0(x, o) {
  var t = J0(Qt++, 4);
  !se.__s && Pr(t.__H, o) && (t.__ = x, t.i = o, oe.__h.push(t));
}
function Lt(x) {
  return L0 = -1472 + 1477 * 1, xt(function() {
    var o = {};
    return o.current = x, o;
  }, []);
}
function os(x, o, t) {
  L0 = 4891 + 41 * -145 + 4 * 265, _0(function() {
    return typeof x == "function" ? (x(o()), function() {
      return x(null);
    }) : x ? (x.current = o(), function() {
      return x.current = null;
    }) : void (-23 * 394 + 12 * 516 + -7 * -410);
  }, t == null ? t : t.concat(x));
}
function xt(x, o) {
  var t = J0(Qt++, 7);
  return Pr(t.__H, o) && (t.__ = x(), t.__H = o, t.__h = x), t.__;
}
function N0(x, o) {
  return L0 = 67 * 70 + -982 + 5 * -740, xt(function() {
    return x;
  }, o);
}
function f0(x) {
  var o = oe.context[x.__c], t = J0(Qt++, 109 * 2 + -938 * -7 + -6775);
  return t.c = x, o ? (t.__ == null && (t.__ = !(-1 * -559 + 1 * 1588 + -2147), o.sub(oe)), o.props.value) : x.__;
}
function Wx(x, o) {
  se.useDebugValue && se.useDebugValue(o ? o(x) : x);
}
function rs() {
  var x = J0(Qt++, 11);
  if (!x.__) {
    for (var o = oe.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [-781 + -610 * 2 + 2001, 1223 * 2 + -9 * -727 + -8989]);
    x.__ = "P" + t[5 * -636 + -456 * -13 + -2 * 1374] + "-" + t[1]++;
  }
  return x.__;
}
function Wg() {
  for (var x; x = xs.shift(); ) if (x.__P && x.__H) try {
    x.__H.__h.forEach(ax), x.__H.__h.forEach(Jo), x.__H.__h = [];
  } catch (o) {
    x.__H.__h = [], se.__e(o, x.__v);
  }
}
se.__b = function(x) {
  oe = null, Pi && Pi(x);
}, se.__ = function(x, o) {
  x && o.__k && o.__k.__m && (x.__m = o.__k.__m), Ni && Ni(x, o);
}, se.__r = function(x) {
  Ti && Ti(x), Qt = -189 * 45 + 3 * -69 + 99 * 88;
  var o = (oe = x.__c).__H;
  o && (wo === oe ? (o.__h = [], oe.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (551 * -5 + 3263 + -508);
  })) : (o.__h.forEach(ax), o.__h.forEach(Jo), o.__h = [], Qt = -241 * -27 + -3 * 435 + 6 * -867)), wo = oe;
}, se.diffed = function(x) {
  Vi && Vi(x);
  var o = x.__c;
  o && o.__H && (o.__H.__h.length && (653 * -4 + -1 * -4201 + -397 * 4 !== xs.push(o) && Ri === se.requestAnimationFrame || ((Ri = se.requestAnimationFrame) || vg)(Wg)), o.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-3750 + -10 * -375);
  })), wo = oe = null;
}, se.__c = function(x, o) {
  o.some(function(t) {
    try {
      t.__h.forEach(ax), t.__h = t.__h.filter(function(e) {
        return !e.__ || Jo(e);
      });
    } catch (e) {
      o.some(function(n) {
        n.__h && (n.__h = []);
      }), o = [], se.__e(e, t.__v);
    }
  }), Ei && Ei(x, o);
}, se.unmount = function(x) {
  Li && Li(x);
  var o, t = x.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      ax(e);
    } catch (n) {
      o = n;
    }
  }), t.__H = void (-1496 + -214 * -5 + -2 * -213), o && se.__e(o, t.__v));
};
var Fi = typeof requestAnimationFrame == "function";
function vg(x) {
  var o, t = function() {
    clearTimeout(e), Fi && cancelAnimationFrame(o), setTimeout(x);
  }, e = setTimeout(t, 100);
  Fi && (o = requestAnimationFrame(t));
}
function ax(x) {
  var o = oe, t = x.__c;
  typeof t == "function" && (x.__c = void (-3 * 2217 + 4206 + 2445), t()), oe = o;
}
function Jo(x) {
  var o = oe;
  x.__c = x.__(), oe = o;
}
function Pr(x, o) {
  return !x || x.length !== o.length || o.some(function(t, e) {
    return t !== x[e];
  });
}
function is(x, o) {
  return typeof o == "function" ? o(x) : o;
}
function as(x, o) {
  for (var t in o) x[t] = o[t];
  return x;
}
function _o(x, o) {
  for (var t in x) if (t !== "__source" && !(t in o)) return !(3 * -2598 + -5233 + 13027);
  for (var e in o) if (e !== "__source" && x[e] !== o[e]) return !(7735 + -221 * 35);
  return !(-409 * -1 + 1607 * 1 + -2015);
}
function Qo(x, o) {
  this.props = x, this.context = o;
}
function wg(x, o) {
  function t(n) {
    var r = this.props.ref, i = r == n.ref;
    return !i && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, n) || !i : _o(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, Ye(x, n);
  }
  return e.displayName = "Memo(" + (x.displayName || x.name) + ")", e.prototype.isReactComponent = !(-6690 + -7 * -85 + 6095), e.__f = !(-2822 + 8 * -853 + 742 * 13), e;
}
(Qo.prototype = new gt()).isPureReactComponent = !0, Qo.prototype.shouldComponentUpdate = function(x, o) {
  return _o(this.props, x) || _o(this.state, o);
};
var Di = N.__b;
N.__b = function(x) {
  x.type && x.type.__f && x.ref && (x.props.ref = x.ref, x.ref = null), Di && Di(x);
};
var Sg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 1 * -4877 + 6937 + 3 * 617;
function ss(x) {
  function o(t) {
    var e = as({}, t);
    return delete e.ref, x(e, t.ref || null);
  }
  return o.$$typeof = Sg, o.render = o, o.prototype.isReactComponent = o.__f = !(-6 * 314 + -1 * 7289 + 9173 * 1), o.displayName = "ForwardRef(" + (x.displayName || x.name) + ")", o;
}
var Yi = function(x, o) {
  return x == null ? null : Vt(Vt(x).map(o));
}, Bg = { map: Yi, forEach: Yi, count: function(x) {
  return x ? Vt(x).length : -3 * -949 + 4522 + 1 * -7369;
}, only: function(x) {
  var o = Vt(x);
  if (6908 + -6907 * 1 !== o.length) throw "Children.only";
  return o[1907 * -1 + -1 * 937 + 12 * 237];
}, toArray: Vt }, Gg = N.__e;
N.__e = function(x, o, t, e) {
  if (x.then) {
    for (var n, r = o; r = r.__; ) if ((n = r.__c) && n.__c) return o.__e == null && (o.__e = t.__e, o.__k = t.__k), n.__c(x, o);
  }
  Gg(x, o, t, e);
};
var Xi = N.unmount;
function cs(x, o, t) {
  return x && (x.__c && x.__c.__H && (x.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), x.__c.__H = null), (x = as({}, x)).__c != null && (x.__c.__P === t && (x.__c.__P = o), x.__c = null), x.__k = x.__k && x.__k.map(function(e) {
    return cs(e, o, t);
  })), x;
}
function gs(x, o, t) {
  return x && t && (x.__v = null, x.__k = x.__k && x.__k.map(function(e) {
    return gs(e, o, t);
  }), x.__c && x.__c.__P === o && (x.__e && t.appendChild(x.__e), x.__c.__e = !(15522 + -2587 * 6), x.__c.__P = t)), x;
}
function sx() {
  this.__u = 0, this.t = null, this.__b = null;
}
function ds(x) {
  var o = x.__.__c;
  return o && o.__a && o.__a(x);
}
function kg(x) {
  var o, t, e;
  function n(r) {
    if (o || (o = x()).then(function(i) {
      t = i.default || i;
    }, function(i) {
      e = i;
    }), e) throw e;
    if (!t) throw o;
    return Ye(t, r);
  }
  return n.displayName = "Lazy", n.__f = !0, n;
}
function rn() {
  this.u = null, this.o = null;
}
N.unmount = function(x) {
  var o = x.__c;
  o && o.__R && o.__R(), o && -158 * -13 + 9580 + 11602 * -1 & x.__u && (x.type = null), Xi && Xi(x);
}, (sx.prototype = new gt()).__c = function(x, o) {
  var t = o.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = ds(e.__v), r = !(8330 + -1 * -9677 + -18006), i = function() {
    r || (r = !(8477 * 1 + -8908 + 431), t.__R = null, n ? n(a) : a());
  };
  t.__R = i;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var s = e.state.__a;
        e.__v.__k[-7281 * -1 + -2771 + -4510] = gs(s, s.__c.__P, s.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.t.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || 10289 + 3419 * -3 & o.__u || e.setState({ __a: e.__b = e.__v.__k[14525 + 2905 * -5] }), x.then(i, i);
}, sx.prototype.componentWillUnmount = function() {
  this.t = [];
}, sx.prototype.render = function(x, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[5587 + 1758 * 1 + 5 * -1469].__c;
      this.__v.__k[24 * -39 + 523 + 413] = cs(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = o.__a && Ye(mt, null, x.fallback);
  return n && (n.__u &= -(661 * 3 + 3390 + -5340)), [Ye(mt, null, o.__a ? null : x.children), n];
};
var ji = function(x, o, t) {
  if (++t[2242 * -1 + 263 * 12 + -11 * 83] === t[-8950 + 1 * 5721 + -1 * -3229] && x.o.delete(o), x.props.revealOrder && (x.props.revealOrder[4159 + -7633 * -1 + -11792] !== "t" || !x.o.size)) for (t = x.u; t; ) {
    for (; t.length > -7 * -1394 + 17 * -113 + -7834; ) t.pop()();
    if (t[-1 * -2428 + -654 + -1773] < t[-1 * 8933 + -1155 + 10088]) break;
    x.u = t = t[9502 * -1 + -7325 + 1 * 16829];
  }
};
function Hg(x) {
  return this.getChildContext = function() {
    return x.context;
  }, x.children;
}
function Og(x) {
  var o = this, t = x.i;
  o.componentWillUnmount = function() {
    _t(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== t && o.componentWillUnmount(), o.l || (o.i = t, o.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(8 * -321 + -8076 + 887 * 12);
  }, appendChild: function(e) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> 1381 * 6 + 2798 + -11083, -5632 * 1 + -2050 + 7683), o.i.removeChild(e);
  } }), _t(Ye(Hg, { context: o.context }, x.__v), o.l);
}
function Zg(x, o) {
  var t = {};
  t.__v = x, t.i = o;
  var e = Ye(Og, t);
  return e.containerInfo = o, e;
}
(rn.prototype = new gt()).__a = function(x) {
  var o = this, t = ds(o.__v), e = o.o.get(x);
  return e[-865 * 2 + -1473 * 3 + -6149 * -1]++, function(n) {
    var r = function() {
      o.props.revealOrder ? (e.push(n), ji(o, x, e)) : n();
    };
    t ? t(r) : r();
  };
}, rn.prototype.render = function(x) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = Vt(x.children);
  x.revealOrder && x.revealOrder[3849 * 1 + -5488 + 1639] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.o.set(o[t], this.u = [-3 * -1614 + -6265 + -356 * -4, -3246 + 541 * 6, this.u]);
  return x.children;
}, rn.prototype.componentDidUpdate = rn.prototype.componentDidMount = function() {
  var x = this;
  this.o.forEach(function(o, t) {
    ji(x, t, o);
  });
};
var us = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -87101 * -1 + -80923 + 53925, Kg = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Rg = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Pg = /[A-Z0-9]/g, Tg = typeof document < "u", Vg = function(x) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(x);
};
function Eg(x, o, t) {
  return o.__k == null && (o.textContent = ""), _t(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
function Lg(x, o, t) {
  return Or(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
gt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(x) {
  Object.defineProperty(gt.prototype, x, { configurable: !(1 * 101 + -887 * 1 + -2 * -393), get: function() {
    return this["UNSAFE_" + x];
  }, set: function(o) {
    var t = {};
    t.configurable = !(1217 * 5 + 1933 + 19 * -422), t.writable = !(-2 * -2206 + -3981 + -431), t.value = o, Object.defineProperty(this, x, t);
  } });
});
var Mi = N.event;
function Ng() {
}
function Fg() {
  return this.cancelBubble;
}
function Dg() {
  return this.defaultPrevented;
}
N.event = function(x) {
  return Mi && (x = Mi(x)), x.persist = Ng, x.isPropagationStopped = Fg, x.isDefaultPrevented = Dg, x.nativeEvent = x;
};
var cx = {};
cx.enumerable = !(-32 * -236 + -392 + -1 * 7159), cx.configurable = !(5 * 1287 + 8022 * -1 + 1587), cx.get = function() {
  return this.class;
};
var Tr, Yg = cx, Ji = N.vnode;
N.vnode = function(x) {
  typeof x.type == "string" && function(o) {
    var t = o.props, e = o.type, n = {};
    for (var r in t) {
      var i = t[r];
      if (!(r === "value" && "defaultValue" in t && i == null || Tg && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var a = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && !(1 * -5347 + 5547 + -200) === i ? i = "" : a === "translate" && i === "no" ? i = !(-1724 * -1 + 794 * 3 + -4105) : a === "ondoubleclick" ? r = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || Vg(t.type) ? a === "onfocus" ? r = "onfocusin" : a === "onblur" ? r = "onfocusout" : Rg.test(r) ? r = a : e.indexOf("-") === -1 && Kg.test(r) ? r = r.replace(Pg, "-$&").toLowerCase() : i === null && (i = void (-6737 + 6337 * 1 + -400 * -1)) : a = r = "oninput", a === "oninput" && n[r = a] && (r = "oninputCapture"), n[r] = i;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Vt(t.children).forEach(function(s) {
      s.props.selected = -(2229 * -1 + -7944 + 5087 * 2) != n.value.indexOf(s.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = Vt(t.children).forEach(function(s) {
      s.props.selected = n.multiple ? -(5287 + -5286 * 1) != n.defaultValue.indexOf(s.props.value) : n.defaultValue == s.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", Yg)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), o.props = n;
  }(x), x.$$typeof = us, Ji && Ji(x);
};
var _i = N.__r;
N.__r = function(x) {
  _i && _i(x), Tr = x.__c;
};
var Qi = N.diffed;
N.diffed = function(x) {
  Qi && Qi(x);
  var o = x.props, t = x.__e;
  t != null && x.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), Tr = null;
};
var Be = {};
Be.readContext = function(x) {
  return Tr.__n[x.__c].props.value;
}, Be.useCallback = N0, Be.useContext = f0, Be.useDebugValue = Wx, Be.useDeferredValue = Cs, Be.useEffect = Se, Be.useId = rs, Be.useImperativeHandle = os, Be.useInsertionEffect = ps, Be.useLayoutEffect = _0, Be.useMemo = xt, Be.useReducer = Rr, Be.useRef = Lt, Be.useState = nt, Be.useSyncExternalStore = ms, Be.useTransition = hs;
var ls = {};
ls.current = Be;
var Is = {};
Is.ReactCurrentDispatcher = ls;
var Xg = Is;
function jg(x) {
  return Ye.bind(null, x);
}
function $x(x) {
  return !!x && x.$$typeof === us;
}
function Mg(x) {
  return $x(x) && x.type === mt;
}
function Jg(x) {
  return !!x && !!x.displayName && (typeof x.displayName == "string" || x.displayName instanceof String) && x.displayName.startsWith("Memo(");
}
function _g(x) {
  return $x(x) ? Zr.apply(null, arguments) : x;
}
function Qg(x) {
  return !!x.__k && (_t(null, x), !(-13325 + 5 * 2665));
}
function Ug(x) {
  return x && (x.base || 1 * 4293 + 1909 * -1 + -2383 === x.nodeType && x) || null;
}
var zg = function(x, o) {
  return x(o);
}, qg = function(x, o) {
  return x(o);
}, $g = mt;
function fs(x) {
  x();
}
function Cs(x) {
  return x;
}
function hs() {
  return [!(-219 + -969 * 1 + 1189), fs];
}
var ps = _0, ed = $x;
function ms(x, o) {
  var t = o(), e = nt({ h: { __: t, v: o } }), n = e[10 * 256 + 9 * -365 + -725 * -1].h, r = e[1];
  return _0(function() {
    n.__ = t, n.v = o, So(n) && r({ h: n });
  }, [x, t, o]), Se(function() {
    return So(n) && r({ h: n }), x(function() {
      So(n) && r({ h: n });
    });
  }, [x]), t;
}
function So(x) {
  var o, t, e = x.v, n = x.__;
  try {
    var r = e();
    return !((o = n) === (t = r) && (-9 * -99 + 9890 + -10781 !== o || (9704 + 239 * -29 + -2772) / o == (15230 + 97 * -157) / t) || o != o && t != t);
  } catch {
    return !0;
  }
}
var L = {};
L.useState = nt, L.useId = rs, L.useReducer = Rr, L.useEffect = Se, L.useLayoutEffect = _0, L.useInsertionEffect = ps, L.useTransition = hs, L.useDeferredValue = Cs, L.useSyncExternalStore = ms, L.startTransition = fs, L.useRef = Lt, L.useImperativeHandle = os, L.useMemo = xt, L.useCallback = N0, L.useContext = f0, L.useDebugValue = Wx, L.version = "17.0.2", L.Children = Bg, L.render = Eg, L.hydrate = Lg, L.unmountComponentAtNode = Qg, L.createPortal = Zg, L.createElement = Ye, L.createContext = Tn, L.createFactory = jg, L.cloneElement = _g, L.createRef = sg, L.Fragment = mt, L.isValidElement = $x, L.isElement = ed, L.isFragment = Mg, L.isMemo = Jg, L.findDOMNode = Ug, L.Component = gt, L.PureComponent = Qo, L.memo = wg, L.forwardRef = ss, L.flushSync = qg, L.unstable_batchedUpdates = zg, L.StrictMode = $g, L.Suspense = sx, L.SuspenseList = rn, L.lazy = kg, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xg;
var u0 = L, td = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nd(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function xd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function od(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") && Object.keys(x).length === 1 ? x.default : x;
}
function rd(x) {
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
const id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: td,
  getAugmentedNamespace: rd,
  getDefaultExportFromCjs: nd,
  getDefaultExportFromNamespaceIfNotNamed: od,
  getDefaultExportFromNamespaceIfPresent: xd
}, Symbol.toStringTag, { value: "Module" }));
var ad = function(o, t, e, n) {
  var r = e ? e.call(n, o, t) : void 0;
  if (r !== void (1 * 3503 + -4980 + -7 * -211)) return !!r;
  if (o === t) return !0;
  if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
  var i = Object.keys(o), a = Object.keys(t);
  if (i.length !== a.length) return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = 0; c < i.length; c++) {
    var u = i[c];
    if (!s(u)) return !1;
    var g = o[u], h = t[u];
    if (r = e ? e.call(n, g, h, u) : void (-4017 + 13 * 309), r === !1 || r === void (-694 + -694 * -1) && g !== h) return !1;
  }
  return !0;
};
const sd = id.getDefaultExportFromCjs(ad);
var xe = "-ms-", In = "-moz-", ee = "-webkit-", bs = "comm", eo = "rule", Vr = "decl", cd = "@import", As = "@keyframes", gd = "@layer", ys = Math.abs, Er = String.fromCharCode, Uo = Object.assign;
function dd(x, o) {
  return ve(x, -39 * 78 + 3295 + 23 * -11) ^ 8 * -712 + 5625 + 116 ? (((o << -1579 * 1 + -9193 + 10774 ^ ve(x, 0)) << 9377 * 1 + -13 * -349 + -2 * 6956 ^ ve(x, -48 * -14 + 4415 * -2 + 8159)) << -4429 + 457 * -17 + 6100 * 2 ^ ve(x, -736 * 11 + 554 * -5 + 11 * 988)) << 1 * 7911 + -1 * 4518 + -1 * 3391 ^ ve(x, 3) : -698 * 11 + 3235 * -2 + 14148;
}
function Ws(x) {
  return x.trim();
}
function Kt(x, o) {
  return (x = o.exec(x)) ? x[-5 * 227 + 1779 + -644] : x;
}
function F(x, o, t) {
  return x.replace(o, t);
}
function gx(x, o, t) {
  return x.indexOf(o, t);
}
function ve(x, o) {
  return x.charCodeAt(o) | 7618 + -206 * -17 + -5560 * 2;
}
function F0(x, o, t) {
  return x.slice(o, t);
}
function wt(x) {
  return x.length;
}
function vs(x) {
  return x.length;
}
function an(x, o) {
  return o.push(x), x;
}
function ud(x, o) {
  return x.map(o).join("");
}
function Ui(x, o) {
  return x.filter(function(t) {
    return !Kt(t, o);
  });
}
var to = 7578 + -1 * 1321 + -6256, D0 = 5657 * 1 + 5633 + -11289, ws = -3052 + 28 * 109, ut = 0, pe = -6833 + -4721 * 1 + 5777 * 2, Q0 = "";
function no(x, o, t, e, n, r, i, a) {
  var s = {};
  return s.value = x, s.root = o, s.parent = t, s.type = e, s.props = n, s.children = r, s.line = to, s.column = D0, s.length = i, s.return = "", s.siblings = a, s;
}
function Xt(x, o) {
  return Uo(no("", null, null, "", null, null, -3 * 554 + 1 * -4244 + 5906, x.siblings), x, { length: -x.length }, o);
}
function w0(x) {
  for (; x.root; ) x = Xt(x.root, { children: [x] });
  an(x, x.siblings);
}
function ld() {
  return pe;
}
function Id() {
  return pe = ut > 78 + 6223 * -1 + 5 * 1229 ? ve(Q0, --ut) : -1 * -8063 + 8661 + -8362 * 2, D0--, pe === 6885 + -275 * 35 + 55 * 50 && (D0 = -11871 + 2968 * 4, to--), pe;
}
function pt() {
  return pe = ut < ws ? ve(Q0, ut++) : -1923 + -7 * -754 + -5 * 671, D0++, pe === 7231 * -1 + -8053 + 15294 && (D0 = 118 * 9 + 933 * -2 + 805, to++), pe;
}
function c0() {
  return ve(Q0, ut);
}
function dx() {
  return ut;
}
function xo(x, o) {
  return F0(Q0, x, o);
}
function zo(x) {
  switch (x) {
    case -94 * -13 + -29 * 285 + 7043:
    case 9864 + -3 * 103 + 3182 * -3:
    case -64 * -22 + 7440 + 8838 * -1:
    case -211 * -41 + -9618 + -5 * -196:
    case -6 * 231 + 7377 + 101 * -59:
      return 227 * 5 + -4 * -1021 + -5214;
    case -106 * -79 + 193 * 49 + -2 * 8899:
    case -8056 + -1 * -2729 + 5370:
    case 4878 + 177 * 3 + -5365:
    case -4 * 20 + -616 + 743:
    case 1 * -9689 + 4673 + 1 * 5078:
    case 64:
    case 126:
    case 59:
    case 1315 + -1601 * 3 + 23 * 157:
    case 73 * -104 + 7168 + -183 * -3:
      return 1 * -4605 + 29 * -325 + -4678 * -3;
    case 152 * 25 + -6867 + 3125:
      return 1 * -11 + 4099 * -1 + -9 * -457;
    case 2931 + -1557 * -3 + 172 * -44:
    case -3353 * 1 + 4641 + -1249:
    case -8 * -778 + -659 * -15 + -16069:
    case -4341 + 172 * -36 + 10624:
      return 2;
    case 719 * -8 + -6214 + -1 * -12007:
    case -19 * -143 + 5853 + -8477 * 1:
      return 385 + -4 * 96;
  }
  return -3039 + -3039 * -1;
}
function fd(x) {
  return to = D0 = -2701 + 1351 * 2, ws = wt(Q0 = x), ut = 6377 + 1 * -6377, [];
}
function Cd(x) {
  return Q0 = "", x;
}
function Bo(x) {
  return Ws(xo(ut - (-354 * 15 + 5229 + 82), qo(x === 7014 + -178 * -16 + -9771 ? x + (185 + -2707 * 1 + 2524) : x === 1034 * 8 + 5929 + -14161 ? x + (5609 * 1 + 4163 + 3257 * -3) : x)));
}
function hd(x) {
  for (; (pe = c0()) && pe < -211 * 43 + -724 * 3 + 11278; ) pt();
  return zo(x) > -1 * 6195 + -4587 + 10784 || zo(pe) > -1547 * 1 + 3817 + -2267 * 1 ? "" : " ";
}
function pd(x, o) {
  for (; --o && pt() && !(pe < 16277 + -16229 * 1 || pe > 102 || pe > 14 * 211 + -8941 * 1 + 1 * 6044 && pe < 3 * -2766 + 1 * 2498 + 1 * 5865 || pe > -344 * 8 + -8068 + -2 * -5445 && pe < 49 * 7 + -5077 * 1 + 4831 * 1); ) ;
  return xo(x, dx() + (o < 6 && c0() == -1 * 2271 + -11 * 50 + 2853 && pt() == 932 + -6 * 150));
}
function qo(x) {
  for (; pt(); ) switch (pe) {
    case x:
      return ut;
    case -1911 + 2185 * -1 + 4130:
    case -649 + -1 * 1489 + 7 * 311:
      x !== -803 * 4 + 5060 + 2 * -907 && x !== 7888 + 1 * -7849 && qo(pe);
      break;
    case -1 * 3548 + -38 * 106 + -1904 * -4:
      x === 6 * 631 + -8935 + 5190 && qo(x);
      break;
    case 69 * -20 + -7 * -5 + 1437:
      pt();
      break;
  }
  return ut;
}
function md(x, o) {
  for (; pt() && x + pe !== 4838 * 2 + -103 * 3 + -9320 + (29 * -157 + 3842 + -103 * -7); ) if (x + pe === -1 * -7259 + -9968 + -393 * -7 + (-6459 + 4258 * -2 + 15017) && c0() === -119 + 13 * -423 + 5 * 1133) break;
  return "/*" + xo(o, ut - (8 * 259 + 15 * -114 + 19 * -19)) + "*" + Er(x === -1995 + -5471 * -1 + -27 * 127 ? x : pt());
}
function bd(x) {
  for (; !zo(c0()); ) pt();
  return xo(x, ut);
}
function Ad(x) {
  return Cd(ux("", null, null, null, [""], x = fd(x), 8862 + -1346 * -2 + -11554, [-3879 + -3 * -1293], x));
}
function ux(x, o, t, e, n, r, i, a, s) {
  for (var c = 0, u = -1 * 7402 + 761 + 229 * 29, g = i, h = 933 + -212 * 3 + 3 * -99, l = 2353 * 2 + -4 * 559 + -2470, C = -689 * 10 + -2383 + -33 * -281, m = -1714 * 1 + 1389 + 326, A = -1446 + 1447 * 1, d = -7 * -203 + 13 * 331 + -1 * 5723, v = 10 * -653 + -1 * 1289 + -7819 * -1, k = "", D = n, M = r, Y = e, O = k; A; ) switch (C = v, v = pt()) {
    case 40:
      if (C != 3381 + 163 * 53 + -11912 * 1 && ve(O, g - (-4832 + -3 * -1611)) == -3973 + -6013 * 1 + 4 * 2511) {
        gx(O += F(Bo(v), "&", "&\f"), "&\f", ys(c ? a[c - (-5 * 151 + -5535 + -699 * -9)] : 2767 * -3 + 9516 + -1215 * 1)) != -(8 * 641 + 32 * 173 + -10663 * 1) && (d = -(-8079 * -1 + -2669 * 1 + -5409));
        break;
      }
    case -548 + -2 * -291:
    case -61 * 67 + -205 * 11 + 2127 * 3:
    case -3940 + -1837 * -2 + 7 * 51:
      O += Bo(v);
      break;
    case 3603 + 3 * -1198:
    case -7052 + 4 * -1054 + 2 * 5639:
    case -1 * -2030 + -1628 + -389 * 1:
    case -10147 + -3393 * -3:
      O += hd(C);
      break;
    case -1037 + 51 * 167 + -7388:
      O += pd(dx() - (10285 + -4 * 2571), -38 * 255 + -1 * -4909 + 4788);
      continue;
    case 5817 + -884 * 3 + -2 * 1559:
      switch (c0()) {
        case 7802 + 2919 * 1 + -10679:
        case -3515 * 1 + 42 * -163 + 5204 * 2:
          an(yd(md(pt(), dx()), o, t, s), s);
          break;
        default:
          O += "/";
      }
      break;
    case (7943 + 3607 * 2 + -15034) * m:
      a[c++] = wt(O) * d;
    case 125 * m:
    case 109 * 22 + -355 + -496 * 4:
    case -3869 + 165 * -59 + 13604:
      switch (v) {
        case -611 * -3 + 9728 + 1051 * -11:
        case -1892 * 2 + -96 * -29 + 1125:
          A = -4049 + 104 * 49 + -3 * 349;
        case 1 * 5374 + -8977 + 1 * 3662 + u:
          d == -(8569 + -1 * -1613 + -10181) && (O = F(O, /\f/g, "")), l > 9630 + -1348 * 1 + -8282 && wt(O) - g && an(l > 2 * -2764 + -5451 + 11011 ? qi(O + ";", e, t, g - (-7214 + -185 * -39), s) : qi(F(O, " ", "") + ";", e, t, g - (2539 * 1 + 4530 * 2 + -11597 * 1), s), s);
          break;
        case 2601 + 2 * -1271:
          O += ";";
        default:
          if (an(Y = zi(O, o, t, c, u, n, a, k, D = [], M = [], g, r), r), v === 8224 * 1 + 7 * 50 + -8451)
            if (u === 2777 + -1019 * 1 + -1758) ux(O, o, Y, Y, D, r, g, a, M);
            else switch (h === -5955 + -3361 * -2 + -668 && ve(O, -8518 + 1 * -9671 + -379 * -48) === 110 ? 46 * 7 + -5 * 33 + -57 : h) {
              case 1663 * 3 + 1 * 5887 + -10776:
              case 3914 + 1 * -3350 + -456:
              case 6540 + -1 * 6583 + 152:
              case 6443 + 13 * -394 + 18 * -67:
                ux(x, Y, Y, e && an(zi(x, Y, Y, -3461 * -1 + -15 * -463 + -946 * 11, 5047 * -1 + 8536 + -3489, n, a, k, n, D = [], g, M), M), n, M, g, a, e ? D : M);
                break;
              default:
                ux(O, Y, Y, Y, [""], M, -205 * -41 + 5420 + -1 * 13825, a, M);
            }
      }
      c = u = l = 1410 + 1461 * -1 + 51, m = d = -6669 + -46 * -145, k = O = "", g = i;
      break;
    case -1663 * 4 + -6717 * 1 + 13427:
      g = 1 * 4117 + 3314 * -2 + -4 * -628 + wt(O), l = C;
    default:
      if (m < 1) {
        if (v == 123) --m;
        else if (v == 1 * 3805 + -65 * 7 + -75 * 43 && m++ == -2 * 1325 + 9754 + -7104 && Id() == -1013 + -311 * 13 + 3 * 1727) continue;
      }
      switch (O += Er(v), v * m) {
        case -3175 * -2 + -2 * -3631 + -13574:
          d = u > -17722 + 1 * 17722 ? -1 * -300 + -7609 + 731 * 10 : (O += "\f", -(3446 * 2 + 326 * -26 + 1585));
          break;
        case -3 * 2053 + -171 * -26 + 1757:
          a[c++] = (wt(O) - (2 * -1533 + -4505 + 7572)) * d, d = 1 * 1274 + -4664 + -1 * -3391;
          break;
        case -6310 + 545 * -10 + 11824:
          c0() === -110 * -23 + 5463 + -7948 && (O += Bo(pt())), h = c0(), u = g = wt(k = O += bd(dx())), v++;
          break;
        case -1671 * -4 + 1837 + 163 * -52:
          C === -6005 + 25 * 242 && wt(O) == 2 && (m = -7954 + -2 * -3977);
      }
  }
  return r;
}
function zi(x, o, t, e, n, r, i, a, s, c, u, g) {
  for (var h = n - 1, l = n === 2105 + 5 * -211 + -1050 ? r : [""], C = vs(l), m = -2 * 3837 + -25 * 104 + -22 * -467, A = 953 + 10 * -248 + 1527, d = 5331 + -2 * 1910 + -1511; m < e; ++m) for (var v = -3 * 916 + 5987 * 1 + -3239, k = F0(x, h + (17 * -275 + -7153 + 3943 * 3), h = ys(A = i[m])), D = x; v < C; ++v) (D = Ws(A > -3104 * -3 + 1 * 2758 + -12070 ? l[v] + " " + k : F(k, /&\f/g, l[v]))) && (s[d++] = D);
  return no(x, o, t, n === -55 * 83 + -2514 + 7079 ? eo : a, s, c, u, g);
}
function yd(x, o, t, e) {
  return no(x, o, t, bs, Er(ld()), F0(x, 2, -(891 * 3 + 9049 + -11720)), -33 * 113 + -1823 * -1 + -1906 * -1, e);
}
function qi(x, o, t, e, n) {
  return no(x, o, t, Vr, F0(x, 0, e), F0(x, e + (-431 * -13 + 1 * -159 + 1 * -5443), -(1 * -1367 + 5297 + -3929)), e, n);
}
function Ss(x, o, t) {
  switch (dd(x, o)) {
    case -9182 + -14285 * -1:
      return ee + "print-" + x + x;
    case -1 * -2305 + -8618 + 12050:
    case 4201:
    case -4215 + -1506 * -1 + 5886:
    case 16 * -591 + -875 * 1 + 4588 * 3:
    case 9445 + -1 * -4145 + -11949:
    case -4 * 1450 + -1 * -5794 + 1 * 4463:
    case 120 * 42 + -5487 + 1 * 3368:
    case 2344 * -1 + -478 * 7 + 2 * 5631:
    case 970 * -3 + 9030 + -4 * -59:
    case 149 * -71 + 4210 + 12213:
    case -6999 * -1 + 892 * 8 + -10944:
    case 639 * 2 + -735 + 6102:
    case 2368 + 2909 * 1 + -2272:
    case -6 * 1623 + -12209 + -14169 * -2:
    case -6490 + 4123 * 3:
    case 21 * 497 + 2314 * 1 + -7128:
    case -5847 + 11982 * 1:
    case -7315 + 74 * 161:
    case -24 * -270 + -58 * 164 + 7887:
    case 4215:
    case -1872 + -1 * 658 + -1 * -8919:
    case -5550 + -2 * 143 + -2189 * -5:
    case 5365:
    case 77 * 106 + 7499 * -1 + 4958:
    case -7236 + -5 * -2213:
      return ee + x + x;
    case 4789:
      return In + x + x;
    case -2505 + -33 * -238:
    case 2858 + -3869 * -2 + -1 * 6350:
    case -7 * 1277 + 1 * -9750 + 23499:
    case -787 * 9 + 6234 + 7817:
    case 10 * -790 + 4255 * 2 + 2146:
      return ee + x + In + x + xe + x + x;
    case -9 * -529 + -10454 + 11629:
      switch (ve(x, o + 11)) {
        case -7684 * 1 + -43 * -141 + 1735:
          return ee + x + xe + F(x, /[svh]\w+-[tblr]{2}/, "tb") + x;
        case 13 * 454 + -11 * -508 + 42 * -271:
          return ee + x + xe + F(x, /[svh]\w+-[tblr]{2}/, "tb-rl") + x;
        case 7283 + -75 * 6 + -2 * 3394:
          return ee + x + xe + F(x, /[svh]\w+-[tblr]{2}/, "lr") + x;
      }
    case -19 * 77 + 5 * -5 + 8316:
    case -1852 + 12 * 510:
    case 8996 + 1 * 4993 + -11086:
      return ee + x + xe + x + x;
    case 6165:
      return ee + x + xe + "flex-" + x + x;
    case -4113 + 124 * -56 + 16244:
      return ee + x + F(x, /(\w+).+(:[^]+)/, ee + "box-$1$2" + xe + "flex-$1$2") + x;
    case 393 * 17 + 9392 + 5315 * -2:
      return ee + x + xe + "flex-item-" + F(x, /flex-|-self/g, "") + (Kt(x, /flex-|baseline/) ? "" : xe + "grid-row-" + F(x, /flex-|-self/g, "")) + x;
    case 7073 + 1 * 499 + 2897 * -1:
      return ee + x + xe + "flex-line-pack" + F(x, /align-content|flex-|-self/g, "") + x;
    case -9871 * -1 + 2 * 2089 + 8501 * -1:
      return ee + x + xe + F(x, "shrink", "negative") + x;
    case 5292:
      return ee + x + xe + F(x, "basis", "preferred-size") + x;
    case 1579 + 1 * 4481:
      return ee + "box-" + F(x, "-grow", "") + ee + x + xe + F(x, "grow", "positive") + x;
    case 7413 + 8222 * -1 + 5363:
      return ee + F(x, /([^-])(transform)/g, "$1" + ee + "$2") + x;
    case -8809 + -1444 * -8 + 3 * 1148:
      return F(F(F(x, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), x, "") + x;
    case 12708 + 7213 * -1:
    case 3959:
      return F(x, /(image-set\([^]*)/, ee + "$1$`$1");
    case 808 * 8 + 4488 + -5984:
      return F(F(x, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + xe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + x + x;
    case -9723 + -91 * -153:
      if (!Kt(x, /flex-|baseline/)) return xe + "grid-column-align" + F0(x, o) + x;
      break;
    case 16 * 106 + -5604 + -260 * -25:
    case -1315 + -935 * -5:
      return xe + F(x, "template-", "") + x;
    case 1 * -5497 + -5 * -971 + 2 * 2513:
    case 1 * -6827 + 1518 + 8925:
      return t && t.some(function(e, n) {
        return o = n, Kt(e.props, /grid-\w+-end/);
      }) ? ~gx(x + (t = t[o].value), "span", -1059 + -2 * 4635 + 939 * 11) ? x : xe + F(x, "-start", "") + x + xe + "grid-row-span:" + (~gx(t, "span", -1 * 4077 + 1844 + 319 * 7) ? Kt(t, /\d+/) : +Kt(t, /\d+/) - +Kt(x, /\d+/)) + ";" : xe + F(x, "-start", "") + x;
    case 4896:
    case 7298 + -121 * -29 + -6679 * 1:
      return t && t.some(function(e) {
        return Kt(e.props, /grid-\w+-start/);
      }) ? x : xe + F(F(x, "-end", "-span"), "span ", "") + x;
    case 2531 * 3 + -2 * -3218 + -2 * 4967:
    case -10532 + 941 * 15:
    case 1058 + 7 * -451 + -6167 * -1:
    case 5087 * -1 + -3327 + 26 * 421:
      return F(x, /(.+)-inline(.+)/, ee + "$1$2") + x;
    case 353 * -44 + 1657 * 7 + 12049:
    case 4 * 234 + 8 * -1618 + -829 * -23:
    case -1 * 2725 + 4153 * 1 + 865 * 5:
    case 5535:
    case 7412 + -10462 * -1 + 3 * -4143:
    case -5313 + 5507 * 2:
    case -3381 + 2 * 152 + -3 * -2670:
    case -3333 + -17 * -359 + 1907:
    case -22 * -339 + 7024 + -8949:
    case -1 * 8277 + -9698 * -1 + 104 * 42:
    case -41 * -169 + -1755 + 17 * -9:
    case 4765:
      if (wt(x) - (3150 + 67 * -47) - o > -6775 * 1 + -11 * -132 + 73 * 73) switch (ve(x, o + (8587 + 2 * -509 + -7568))) {
        case 7724 + 1114 * 5 + 2637 * -5:
          if (ve(x, o + (6527 * -1 + 3858 * -2 + -4749 * -3)) !== 2825 + 32 * -282 + 6244) break;
        case 2 * -3442 + -1 * 2269 + -3 * -3085:
          return F(x, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + In + (ve(x, o + (104 * 1 + -2045 + 1944)) == -1541 * -4 + -35 * -169 + -11971 ? "$3" : "$2-$3")) + x;
        case -233 * 28 + -3 * -1989 + 672:
          return ~gx(x, "stretch", 0) ? Ss(F(x, "stretch", "fill-available"), o, t) + x : x;
      }
      break;
    case -4984 + -22 * -2 + -1682 * -6:
    case 4317 * 1 + -7861 + 182 * 52:
      return F(x, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, r, i, a, s, c) {
        return xe + n + ":" + r + c + (i ? xe + n + "-span:" + (a ? s : +s - +r) + c : "") + x;
      });
    case -3078 + 1225 * 7 + -548:
      if (ve(x, o + (-6992 + -2 * -2259 + 2480)) === -14 * -551 + 370 * 18 + -14253) return F(x, ":", ":" + ee) + x;
      break;
    case 6444:
      switch (ve(x, ve(x, -43 * 5 + -1503 * -1 + -1274) === 155 * -15 + -5943 + 8313 ? -49 * -199 + 5 * 809 + -166 * 83 : -1 * -6460 + -1493 * -1 + -7942)) {
        case -33 * 261 + 877 * 8 + 1 * 1717:
          return F(x, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (ve(x, 401 * -23 + -5551 + 7394 * 2) === -1574 + -151 * 17 + 182 * 23 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + xe + "$2box$3") + x;
        case -5339 + 2981 * -1 + 8420:
          return F(x, ":", ":" + xe) + x;
      }
      break;
    case -1 * -10515 + -3241 * -1 + 893 * -9:
    case 2647:
    case -3408 + 18 * -74 + 6875:
    case 3927:
    case 6 * -54 + 1013 + 1702 * 1:
      return F(x, "scroll-", "scroll-snap-") + x;
  }
  return x;
}
function vx(x, o) {
  for (var t = "", e = 1912 + -1 * 8103 + 6191 * 1; e < x.length; e++) t += o(x[e], e, x, o) || "";
  return t;
}
function Wd(x, o, t, e) {
  switch (x.type) {
    case gd:
      if (x.children.length) break;
    case cd:
    case Vr:
      return x.return = x.return || x.value;
    case bs:
      return "";
    case As:
      return x.return = x.value + "{" + vx(x.children, e) + "}";
    case eo:
      if (!wt(x.value = x.props.join(","))) return "";
  }
  return wt(t = vx(x.children, e)) ? x.return = x.value + "{" + t + "}" : "";
}
function vd(x) {
  var o = vs(x);
  return function(t, e, n, r) {
    for (var i = "", a = 8 * -13 + -6747 + 6851; a < o; a++) i += x[a](t, e, n, r) || "";
    return i;
  };
}
function wd(x) {
  return function(o) {
    o.root || (o = o.return) && x(o);
  };
}
function Sd(x, o, t, e) {
  if (x.length > -(-2274 + 3 * -2956 + 11143) && !x.return)
    switch (x.type) {
      case Vr:
        x.return = Ss(x.value, x.length, t);
        return;
      case As:
        return vx([Xt(x, { value: F(x.value, "@", "@" + ee) })], e);
      case eo:
        if (x.length) return ud(t = x.props, function(n) {
          switch (Kt(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              w0(Xt(x, { props: [F(n, /:(read-\w+)/, ":" + In + "$1")] }));
              var r = {};
              r.props = [n], w0(Xt(x, r)), Uo(x, { props: Ui(t, e) });
              break;
            case "::placeholder":
              w0(Xt(x, { props: [F(n, /:(plac\w+)/, ":" + ee + "input-$1")] })), w0(Xt(x, { props: [F(n, /:(plac\w+)/, ":" + In + "$1")] })), w0(Xt(x, { props: [F(n, /:(plac\w+)/, xe + "input-$1")] }));
              var i = {};
              i.props = [n], w0(Xt(x, i)), Uo(x, { props: Ui(t, e) });
              break;
          }
          return "";
        });
    }
}
var E = {};
E.animationIterationCount = 1, E.aspectRatio = 1, E.borderImageOutset = 1, E.borderImageSlice = 1, E.borderImageWidth = 1, E.boxFlex = 1, E.boxFlexGroup = 1, E.boxOrdinalGroup = 1, E.columnCount = 1, E.columns = 1, E.flex = 1, E.flexGrow = 1, E.flexPositive = 1, E.flexShrink = 1, E.flexNegative = 1, E.flexOrder = 1, E.gridRow = 1, E.gridRowEnd = 1, E.gridRowSpan = 1, E.gridRowStart = 1, E.gridColumn = 1, E.gridColumnEnd = 1, E.gridColumnSpan = 1, E.gridColumnStart = 1, E.msGridRow = 1, E.msGridRowSpan = 1, E.msGridColumn = 1, E.msGridColumnSpan = 1, E.fontWeight = 1, E.lineHeight = 1, E.opacity = 1, E.order = 1, E.orphans = 1, E.tabSize = 1, E.widows = 1, E.zIndex = 1, E.zoom = 1, E.WebkitLineClamp = 1, E.fillOpacity = 1, E.floodOpacity = 1, E.stopOpacity = 1, E.strokeDasharray = 1, E.strokeDashoffset = 1, E.strokeMiterlimit = 1, E.strokeOpacity = 1, E.strokeWidth = 1;
var Bd = E, q = {}, l0 = typeof process < "u" && void (7111 + -19 * -439 + -4 * 3863) !== q && (q.REACT_APP_SC_ATTR || q.SC_ATTR) || "data-styled", Bs = "active", Gs = "data-styled-version", oo = "6.1.11", Lr = `/*!sc*/
`, Nr = typeof window < "u" && "HTMLElement" in window, Gd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (2196 * -2 + -1375 + 5767) !== q && void (-3 * -943 + -43 * -141 + -684 * 13) !== q.REACT_APP_SC_DISABLE_SPEEDY && q.REACT_APP_SC_DISABLE_SPEEDY !== "" ? q.REACT_APP_SC_DISABLE_SPEEDY !== "false" && q.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (11102 + -26 * 427) !== q && void (-1 * 1446 + 2551 * 3 + 3 * -2069) !== q.SC_DISABLE_SPEEDY && q.SC_DISABLE_SPEEDY !== "" ? q.SC_DISABLE_SPEEDY !== "false" && q.SC_DISABLE_SPEEDY : q.NODE_ENV !== "production"), $i = /invalid hook call/i, $n = /* @__PURE__ */ new Set(), kd = function(x, o) {
  if (q.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(x).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var r = !0;
      console.error = function(i) {
        for (var a = [], s = 118 * 16 + -2 * -3029 + -7945; s < arguments.length; s++) a[s - (-1 * -9631 + -9386 + -61 * 4)] = arguments[s];
        $i.test(i) ? (r = !1, $n.delete(e)) : n.apply(void (9003 * -1 + -5136 + 14139), E0([i], a, !1));
      }, Lt(), r && !$n.has(e) && (console.warn(e), $n.add(e));
    } catch (i) {
      $i.test(i.message) && $n.delete(e);
    } finally {
      console.error = n;
    }
  }
}, ro = Object.freeze([]), Y0 = Object.freeze({});
function Hd(x, o, t) {
  return t === void 0 && (t = Y0), x.theme !== t.theme && x.theme || o || t.theme;
}
var $o = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Od = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Zd = /(^-|-$)/g;
function ea(x) {
  return x.replace(Od, "-").replace(Zd, "");
}
var Kd = /(a)(d)/gi, ex = -2467 + 11 * 229, ta = function(x) {
  return String.fromCharCode(x + (x > 1 * 4459 + 6417 + -10851 ? 39 : -6622 + 1 * 6719));
};
function er(x) {
  var o, t = "";
  for (o = Math.abs(x); o > ex; o = o / ex | 6517 + -6517 * 1) t = ta(o % ex) + t;
  return (ta(o % ex) + t).replace(Kd, "$1-$2");
}
var Go, ks = -3855 * -1 + 1 * 3558 + -2032, o0 = function(x, o) {
  for (var t = o.length; t; ) x = (8772 + 9 * -971) * x ^ o.charCodeAt(--t);
  return x;
}, Hs = function(x) {
  return o0(ks, x);
};
function Rd(x) {
  return er(Hs(x) >>> 5707 + -11 * -797 + -7237 * 2);
}
function Os(x) {
  return q.NODE_ENV !== "production" && typeof x == "string" && x || x.displayName || x.name || "Component";
}
function ko(x) {
  return typeof x == "string" && (q.NODE_ENV === "production" || x.charAt(-5500 + 5500 * 1) === x.charAt(-64 * -25 + 7337 + 8937 * -1).toLowerCase());
}
var st = {};
st.childContextTypes = !0, st.contextType = !0, st.contextTypes = !0, st.defaultProps = !0, st.displayName = !0, st.getDefaultProps = !0, st.getDerivedStateFromError = !0, st.getDerivedStateFromProps = !0, st.mixins = !0, st.propTypes = !0, st.type = !0;
var jt = {};
jt.name = !0, jt.length = !0, jt.prototype = !0, jt.caller = !0, jt.callee = !0, jt.arguments = !0, jt.arity = !0;
var n0 = {};
n0.$$typeof = !0, n0.compare = !0, n0.defaultProps = !0, n0.displayName = !0, n0.propTypes = !0, n0.type = !0;
var G0 = {};
G0.$$typeof = !0, G0.render = !0, G0.defaultProps = !0, G0.displayName = !0, G0.propTypes = !0;
var Zs = typeof Symbol == "function" && Symbol.for, Ks = Zs ? Symbol.for("react.memo") : -1 * 85025 + -4267 + -2819 * -53, Pd = Zs ? Symbol.for("react.forward_ref") : 23730 + 28625 * -3 + -1 * -122257, Td = st, Vd = jt, Rs = n0, Ed = ((Go = {})[Pd] = G0, Go[Ks] = Rs, Go);
function na(x) {
  return ("type" in (o = x) && o.type.$$typeof) === Ks ? Rs : "$$typeof" in x ? Ed[x.$$typeof] : Td;
  var o;
}
var Ld = Object.defineProperty, Nd = Object.getOwnPropertyNames, xa = Object.getOwnPropertySymbols, Fd = Object.getOwnPropertyDescriptor, Dd = Object.getPrototypeOf, oa = Object.prototype;
function Ps(x, o, t) {
  if (typeof o != "string") {
    if (oa) {
      var e = Dd(o);
      e && e !== oa && Ps(x, e, t);
    }
    var n = Nd(o);
    xa && (n = n.concat(xa(o)));
    for (var r = na(x), i = na(o), a = -5 * -839 + -612 * -16 + 197 * -71; a < n.length; ++a) {
      var s = n[a];
      if (!(s in Vd || t && t[s] || i && s in i || r && s in r)) {
        var c = Fd(o, s);
        try {
          Ld(x, s, c);
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
function Fr(x) {
  return typeof x == "object" && "styledComponentId" in x;
}
function i0(x, o) {
  return x && o ? "".concat(x, " ").concat(o) : x || o || "";
}
function ra(x, o) {
  if (-6647 + 17 * 391 === x.length) return "";
  for (var t = x[123 * -41 + 9182 + -1 * 4139], e = 67 * 13 + -894 + 24; e < x.length; e++) t += x[e];
  return t;
}
function j0(x) {
  return x !== null && typeof x == "object" && x.constructor.name === Object.name && !("props" in x && x.$$typeof);
}
function tr(x, o, t) {
  if (void (12 * 491 + 3995 + -9887 * 1) === t && (t = !1), !t && !j0(x) && !Array.isArray(x)) return o;
  if (Array.isArray(o))
    for (var e = 31 * -311 + 1939 * -1 + -965 * -12; e < o.length; e++) x[e] = tr(x[e], o[e]);
  else if (j0(o))
    for (var e in o) x[e] = tr(x[e], o[e]);
  return x;
}
function Dr(x, o) {
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
var Yd = q.NODE_ENV !== "production" ? ye : {};
function Xd() {
  for (var x = [], o = -6307 + -319 * -29 + 16 * -184; o < arguments.length; o++) x[o] = arguments[o];
  for (var t = x[0], e = [], n = 3997 + 1 * 8662 + -12658, r = x.length; n < r; n += 6627 + -1 * 9803 + 3177) e.push(x[n]);
  return e.forEach(function(i) {
    t = t.replace(/%[a-z]/, i);
  }), t;
}
function U0(x) {
  for (var o = [], t = 445 * 7 + 1 * 8249 + -1 * 11363; t < arguments.length; t++) o[t - (-13618 + 13619 * 1)] = arguments[t];
  return q.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(x, " for more information.").concat(o.length > -7013 * 1 + 5 * -1427 + 14148 ? " Args: ".concat(o.join(", ")) : "")) : new Error(Xd.apply(void (587 * 7 + -2938 + 1 * -1171), E0([Yd[x]], o, !1)).trim());
}
var jd = function() {
  function x(o) {
    this.groupSizes = new Uint32Array(2837 * -1 + 167 * -33 + 8860), this.length = 4013 * -2 + 71 * 61 + 7 * 601, this.tag = o;
  }
  return x.prototype.indexOfGroup = function(o) {
    for (var t = -732 + -1 * -8626 + -7894, e = 5459 + -1 * 890 + -4569; e < o; e++) t += this.groupSizes[e];
    return t;
  }, x.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, r = n; o >= r; ) if ((r <<= 613 * 3 + -71 * -52 + -35 * 158) < -769 * -1 + 5621 + 426 * -15) throw U0(3 * -198 + -3622 + 4232, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(e), this.length = r;
      for (var i = n; i < r; i++) this.groupSizes[i] = -7118 * -1 + -1 * 5233 + -1885;
    }
    for (var a = this.indexOfGroup(o + (2807 + 3 * -254 + -2044)), s = (i = 273 + -21 * 345 + 6972, t.length); i < s; i++) this.tag.insertRule(a, t[i]) && (this.groupSizes[o]++, a++);
  }, x.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), n = e + t;
      this.groupSizes[o] = -2258 * -2 + 1 * -291 + -4225;
      for (var r = e; r < n; r++) this.tag.deleteRule(e);
    }
  }, x.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || 97 * 89 + 1 * 5432 + -14065 === this.groupSizes[o]) return t;
    for (var e = this.groupSizes[o], n = this.indexOfGroup(o), r = n + e, i = n; i < r; i++) t += "".concat(this.tag.getRule(i)).concat(Lr);
    return t;
  }, x;
}(), Md = 4159 + -7303 * 1 + 3145 << -2633 + 1 * 2999 + 14 * -24, lx = /* @__PURE__ */ new Map(), wx = /* @__PURE__ */ new Map(), Ix = 1 * 405 + 3 * -2129 + -1 * -5983, tx = function(x) {
  if (lx.has(x)) return lx.get(x);
  for (; wx.has(Ix); ) Ix++;
  var o = Ix++;
  if (q.NODE_ENV !== "production" && ((0 | o) < -32 * 134 + -207 * 31 + 10705 || o > Md)) throw U0(9869 + -1 * 4184 + -5669, "".concat(o));
  return lx.set(x, o), wx.set(o, x), o;
}, Jd = function(x, o) {
  Ix = o + (-7773 * 1 + -1 * 3433 + 11207), lx.set(x, o), wx.set(o, x);
}, _d = "style[".concat(l0, "][").concat(Gs, '="').concat(oo, '"]'), Qd = new RegExp("^".concat(l0, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ud = function(x, o, t) {
  for (var e, n = t.split(","), r = -1 * -2524 + 3 * -869 + -1 * -83, i = n.length; r < i; r++) (e = n[r]) && x.registerName(o, e);
}, zd = function(x, o) {
  for (var t, e = ((t = o.textContent) !== null && void (-4504 + 563 * 8) !== t ? t : "").split(Lr), n = [], r = -2 * -43 + 217 * 38 + 2 * -4166, i = e.length; r < i; r++) {
    var a = e[r].trim();
    if (a) {
      var s = a.match(Qd);
      if (s) {
        var c = 0 | parseInt(s[1], 10), u = s[4 * -703 + -6150 * 1 + 83 * 108];
        -9962 + 4981 * 2 !== c && (Jd(u, c), Ud(x, u, s[503 * 8 + 2 * 755 + -5531]), x.getTag().insertRules(c, n)), n.length = 2969 + 1 * -7614 + -929 * -5;
      } else n.push(a);
    }
  }
};
function qd() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ts = function(x) {
  var o = document.head, t = x || o, e = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(l0, "]")));
    return s[s.length - (2218 * 2 + -4826 + 391)];
  }(t), r = void (-2 * 428 + 4572 + 929 * -4) !== n ? n.nextSibling : null;
  e.setAttribute(l0, Bs), e.setAttribute(Gs, oo);
  var i = qd();
  return i && e.setAttribute("nonce", i), t.insertBefore(e, r), e;
}, $d = function() {
  function x(o) {
    this.element = Ts(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = 1843 * -3 + -3539 + 9068, r = e.length; n < r; n++) {
        var i = e[n];
        if (i.ownerNode === t) return i;
      }
      throw U0(-2 * -3349 + -8769 + -1 * -2088);
    }(this.element), this.length = -139 + 46 * -79 + -3773 * -1;
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
}(), eu = function() {
  function x(o) {
    this.element = Ts(o), this.nodes = this.element.childNodes, this.length = 6958 * -1 + -1 * 6743 + -13701 * -1;
  }
  return x.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= 43 * 25 + 4518 + -17 * 329) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, x.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, x;
}(), tu = function() {
  function x(o) {
    this.rules = [], this.length = -48 * -18 + -6980 + -6116 * -1;
  }
  return x.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, 0, t), this.length++, !0);
  }, x.prototype.deleteRule = function(o) {
    this.rules.splice(o, 2853 + -92 * 31), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, x;
}(), ia = Nr, nu = { isServer: !Nr, useCSSOMInjection: !Gd }, Vs = function() {
  function x(o, t, e) {
    void (330 * 15 + 3265 * -2 + -10 * -158) === o && (o = Y0), void (-1 * -7617 + -1558 + 73 * -83) === t && (t = {});
    var n = this;
    this.options = ze(ze({}, nu), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && Nr && ia && (ia = !1, function(r) {
      for (var i = document.querySelectorAll(_d), a = -1740 + 20 * 87, s = i.length; a < s; a++) {
        var c = i[a];
        c && c.getAttribute(l0) !== Bs && (zd(r, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), Dr(this, function() {
      return function(r) {
        for (var i = r.getTag(), a = i.length, s = "", c = function(g) {
          var h = function(d) {
            return wx.get(d);
          }(g);
          if (void (1 * -4057 + 1347 + 2710) === h) return "continue";
          var l = r.names.get(h), C = i.getGroup(g);
          if (void (673 * -13 + -6066 + -14815 * -1) === l || -3221 + -1831 * -4 + -373 * 11 === C.length) return "continue";
          var m = "".concat(l0, ".g").concat(g, '[id="').concat(h, '"]'), A = "";
          void (891 * -11 + -401 * 5 + 11806) !== l && l.forEach(function(d) {
            d.length > -1828 + 1 * -8299 + -533 * -19 && (A += "".concat(d, ","));
          }), s += "".concat(C).concat(m, '{content:"').concat(A, '"}').concat(Lr);
        }, u = -3280 + -5 * -614 + 210; u < a; u++) c(u);
        return s;
      }(n);
    });
  }
  return x.registerId = function(o) {
    return tx(o);
  }, x.prototype.reconstructWithOptions = function(o, t) {
    return t === void 0 && (t = !0), new x(ze(ze({}, this.options), o), this.gs, t && this.names || void 0);
  }, x.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || 1 * 8860 + 1031 * 5 + -14015) + 1;
  }, x.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new tu(n) : e ? new $d(n) : new eu(n);
    }(this.options), new jd(o)));
    var o;
  }, x.prototype.hasNameForId = function(o, t) {
    return this.names.has(o) && this.names.get(o).has(t);
  }, x.prototype.registerName = function(o, t) {
    if (tx(o), this.names.has(o)) this.names.get(o).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(o, e);
    }
  }, x.prototype.insertRules = function(o, t, e) {
    this.registerName(o, t), this.getTag().insertRules(tx(o), e);
  }, x.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, x.prototype.clearRules = function(o) {
    this.getTag().clearGroup(tx(o)), this.clearNames(o);
  }, x.prototype.clearTag = function() {
    this.tag = void (-918 + -1 * -918);
  }, x;
}(), xu = /&/g, ou = /^\s*\/\/.*$/gm;
function Es(x, o) {
  return x.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(o, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(o, " ")), t.props = t.props.map(function(e) {
      return "".concat(o, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Es(t.children, o)), t;
  });
}
function Ls(x) {
  var o, t, e, n = x === void 0 ? Y0 : x, r = n.options, i = void (-37 * -103 + 1 * 2053 + -5864) === r ? Y0 : r, a = n.plugins, s = void (13 * 444 + 4 * 669 + -128 * 66) === a ? ro : a, c = function(h, l, C) {
    return C.startsWith(t) && C.endsWith(t) && C.replaceAll(t, "").length > 341 * 25 + 7886 + -16411 * 1 ? ".".concat(o) : h;
  }, u = s.slice();
  u.push(function(h) {
    h.type === eo && h.value.includes("&") && (h.props[7575 + 6 * -1128 + 269 * -3] = h.props[-3748 + -13 * -226 + -27 * -30].replace(xu, t).replace(e, c));
  }), i.prefix && u.push(Sd), u.push(Wd);
  var g = function(h, l, C, m) {
    void (5842 + -1709 * 2 + -2424) === l && (l = ""), void (-5062 * 1 + -1 * 6317 + 11379) === C && (C = ""), void (23 * 266 + 4205 + 333 * -31) === m && (m = "&"), o = m, t = l, e = new RegExp("\\".concat(t, "\\b"), "g");
    var A = h.replace(ou, ""), d = Ad(C || l ? "".concat(C, " ").concat(l, " { ").concat(A, " }") : A);
    i.namespace && (d = Es(d, i.namespace));
    var v = [];
    return vx(d, vd(u.concat(wd(function(k) {
      return v.push(k);
    })))), v;
  };
  return g.hash = s.length ? s.reduce(function(h, l) {
    return l.name || U0(2 * -3481 + 9674 + -2697), o0(h, l.name);
  }, ks).toString() : "", g;
}
var ru = new Vs(), nr = Ls(), Yr = u0.createContext({ shouldForwardProp: void (-3 * 1993 + -3 * -1939 + -27 * -6), styleSheet: ru, stylis: nr });
Yr.Consumer;
var iu = u0.createContext(void 0);
function xr() {
  return f0(Yr);
}
function au(x) {
  var o = nt(x.stylisPlugins), t = o[-9675 + 3 * -2593 + 17454], e = o[-15437 + -7719 * -2], n = xr().styleSheet, r = xt(function() {
    var u = n, g = {};
    return g.useCSSOMInjection = !1, x.sheet ? u = x.sheet : x.target && (u = u.reconstructWithOptions({ target: x.target }, !1)), x.disableCSSOMInjection && (u = u.reconstructWithOptions(g)), u;
  }, [x.disableCSSOMInjection, x.sheet, x.target, n]), i = xt(function() {
    var u = {};
    u.namespace = x.namespace, u.prefix = x.enableVendorPrefixes;
    var g = {};
    return g.options = u, g.plugins = t, Ls(g);
  }, [x.enableVendorPrefixes, x.namespace, t]);
  Se(function() {
    sd(t, x.stylisPlugins) || e(x.stylisPlugins);
  }, [x.stylisPlugins]);
  var a = xt(function() {
    var u = {};
    return u.shouldForwardProp = x.shouldForwardProp, u.styleSheet = r, u.stylis = i, u;
  }, [x.shouldForwardProp, r, i]), s = {};
  s.value = a;
  var c = {};
  return c.value = i, u0.createElement(Yr.Provider, s, u0.createElement(iu.Provider, c, x.children));
}
var aa = function() {
  function x(o, t) {
    var e = this;
    this.inject = function(n, r) {
      void (-2 * -2567 + -2647 * 2 + -40 * -4) === r && (r = nr);
      var i = e.name + r.hash;
      n.hasNameForId(e.id, i) || n.insertRules(e.id, i, r(e.rules, i, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, Dr(this, function() {
      throw U0(-3760 + -17 * -534 + -5306, String(e.name));
    });
  }
  return x.prototype.getName = function(o) {
    return void (-1234 + 691 * -6 + 5380) === o && (o = nr), this.name + o.hash;
  }, x;
}(), su = function(x) {
  return x >= "A" && x <= "Z";
};
function sa(x) {
  for (var o = "", t = -1 * 5741 + -5883 + -5812 * -2; t < x.length; t++) {
    var e = x[t];
    if (-3 * 1460 + 777 * 1 + 3604 === t && e === "-" && x[-46 + 712 * 1 + -666] === "-") return x;
    su(e) ? o += "-" + e.toLowerCase() : o += e;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var Ns = function(x) {
  return x == null || x === !1 || x === "";
}, Fs = function(x) {
  var o, t, e = [];
  for (var n in x) {
    var r = x[n];
    x.hasOwnProperty(n) && !Ns(r) && (Array.isArray(r) && r.isCss || X0(r) ? e.push("".concat(sa(n), ":"), r, ";") : j0(r) ? e.push.apply(e, E0(E0(["".concat(n, " {")], Fs(r), !1), ["}"], !1)) : e.push("".concat(sa(n), ": ").concat((o = n, (t = r) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 33 * 286 + -49 * 167 + -1255 === t || o in Bd || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function g0(x, o, t, e) {
  if (Ns(x)) return [];
  if (Fr(x)) return [".".concat(x.styledComponentId)];
  if (X0(x)) {
    if (!X0(r = x) || r.prototype && r.prototype.isReactComponent || !o) return [x];
    var n = x(o);
    return q.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof aa || j0(n) || n === null || console.error("".concat(Os(x), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), g0(n, o, t, e);
  }
  var r;
  return x instanceof aa ? t ? (x.inject(t, e), [x.getName(e)]) : [x] : j0(x) ? Fs(x) : Array.isArray(x) ? Array.prototype.concat.apply(ro, x.map(function(i) {
    return g0(i, o, t, e);
  })) : [x.toString()];
}
function cu(x) {
  for (var o = -1 * 3861 + -2 * -3277 + -2693; o < x.length; o += 1) {
    var t = x[o];
    if (X0(t) && !Fr(t)) return !1;
  }
  return !0;
}
var gu = Hs(oo), du = function() {
  function x(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = q.NODE_ENV === "production" && (e === void 0 || e.isStatic) && cu(o), this.componentId = t, this.baseHash = o0(gu, t), this.baseStyle = e, Vs.registerId(t);
  }
  return x.prototype.generateAndInjectStyles = function(o, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = i0(n, this.staticRulesId);
      else {
        var r = ra(g0(this.rules, o, t, e)), i = er(o0(this.baseHash, r) >>> 311 * -15 + -9761 + 14426);
        if (!t.hasNameForId(this.componentId, i)) {
          var a = e(r, ".".concat(i), void 0, this.componentId);
          t.insertRules(this.componentId, i, a);
        }
        n = i0(n, i), this.staticRulesId = i;
      }
    else {
      for (var s = o0(this.baseHash, e.hash), c = "", u = -3453 * 1 + -1975 * -3 + -2472; u < this.rules.length; u++) {
        var g = this.rules[u];
        if (typeof g == "string") c += g, q.NODE_ENV !== "production" && (s = o0(s, g));
        else if (g) {
          var h = ra(g0(g, o, t, e));
          s = o0(s, h + u), c += h;
        }
      }
      if (c) {
        var l = er(s >>> 0);
        t.hasNameForId(this.componentId, l) || t.insertRules(this.componentId, l, e(c, ".".concat(l), void (-3064 + 331 * 4 + 4 * 435), this.componentId)), n = i0(n, l);
      }
    }
    return n;
  }, x;
}(), Ds = u0.createContext(void (17 * 167 + -68 * -134 + 11951 * -1));
Ds.Consumer;
var Ho = {}, ca = /* @__PURE__ */ new Set();
function uu(x, o, t) {
  var e = Fr(x), n = x, r = !ko(x), i = o.attrs, a = void (2 * 872 + -3527 * 1 + 1783) === i ? ro : i, s = o.componentId, c = void (7850 + 37 * 150 + -10 * 1340) === s ? function(M, Y) {
    var O = typeof M != "string" ? "sc" : ea(M);
    Ho[O] = (Ho[O] || 438 * -8 + 6927 + -1 * 3423) + (1 * 3826 + -1 * 4547 + -1 * -722);
    var J = "".concat(O, "-").concat(Rd(oo + O + Ho[O]));
    return Y ? "".concat(Y, "-").concat(J) : J;
  }(o.displayName, o.parentComponentId) : s, u = o.displayName, g = void (4672 + 32 * -146) === u ? function(M) {
    return ko(M) ? "styled.".concat(M) : "Styled(".concat(Os(M), ")");
  }(x) : u, h = o.displayName && o.componentId ? "".concat(ea(o.displayName), "-").concat(o.componentId) : o.componentId || c, l = e && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, C = o.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var m = n.shouldForwardProp;
    if (o.shouldForwardProp) {
      var A = o.shouldForwardProp;
      C = function(M, Y) {
        return m(M, Y) && A(M, Y);
      };
    } else C = m;
  }
  var d = new du(t, h, e ? n.componentStyle : void 0);
  function v(M, Y) {
    return function(O, J, Ie) {
      var U = O.attrs, fe = O.componentStyle, Ce = O.defaultProps, Oe = O.foldedComponentIds, lt = O.styledComponentId, ie = O.target, Ze = u0.useContext(Ds), Xe = xr(), rt = O.shouldForwardProp || Xe.shouldForwardProp;
      q.NODE_ENV !== "production" && Wx(lt);
      var je = Hd(J, Ze, Ce) || Y0, me = function(h0, qe, At) {
        var it = {};
        it.className = void (6027 * -1 + 4288 * 1 + -1 * -1739), it.theme = At;
        for (var Ut, yt = ze(ze({}, qe), it), It = -164 * 24 + 241 + -739 * -5; It < h0.length; It += 3 * -685 + -50 * -124 + -4144) {
          var zt = X0(Ut = h0[It]) ? Ut(yt) : Ut;
          for (var ft in zt) yt[ft] = ft === "className" ? i0(yt[ft], zt[ft]) : ft === "style" ? ze(ze({}, yt[ft]), zt[ft]) : zt[ft];
        }
        return qe.className && (yt.className = i0(yt.className, qe.className)), yt;
      }(U, J, je), Ve = me.as || ie, Me = {};
      for (var be in me) void (3923 + -107 * -49 + -1 * 9166) === me[be] || be[15952 + -15952 * 1] === "$" || be === "as" || be === "theme" && me.theme === je || (be === "forwardedAs" ? Me.as = me.forwardedAs : rt && !rt(be, Ve) || (Me[be] = me[be], rt || q.NODE_ENV !== "development" || yg(be) || ca.has(be) || !$o.has(Ve) || (ca.add(be), console.warn('styled-components: it looks like an unknown prop "'.concat(be, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ee = function(h0, qe) {
        var At = xr(), it = h0.generateAndInjectStyles(qe, At.styleSheet, At.stylis);
        return q.NODE_ENV !== "production" && Wx(it), it;
      }(fe, me);
      q.NODE_ENV !== "production" && O.warnTooManyClasses && O.warnTooManyClasses(Ee);
      var Je = i0(Oe, lt);
      return Ee && (Je += " " + Ee), me.className && (Je += " " + me.className), Me[ko(Ve) && !$o.has(Ve) ? "class" : "className"] = Je, Me.ref = Ie, Ye(Ve, Me);
    }(k, M, Y);
  }
  v.displayName = g;
  var k = u0.forwardRef(v), D = {};
  return D.attrs = !0, D.componentStyle = !0, D.displayName = !0, D.foldedComponentIds = !0, D.shouldForwardProp = !0, D.styledComponentId = !0, D.target = !0, k.attrs = l, k.componentStyle = d, k.displayName = g, k.shouldForwardProp = C, k.foldedComponentIds = e ? i0(n.foldedComponentIds, n.styledComponentId) : "", k.styledComponentId = h, k.target = e ? n.target : x, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(M) {
    this._foldedDefaultProps = e ? function(Y) {
      for (var O = [], J = -1359 + 10 * 136; J < arguments.length; J++) O[J - (-17 * 431 + 2983 + -79 * -55)] = arguments[J];
      for (var Ie = -1728 * -3 + -1 * 5605 + 421, U = O; Ie < U.length; Ie++) tr(Y, U[Ie], !0);
      return Y;
    }({}, n.defaultProps, M) : M;
  } }), q.NODE_ENV !== "production" && (kd(g, h), k.warnTooManyClasses = /* @__PURE__ */ function(M, Y) {
    var O = {}, J = !1;
    return function(Ie) {
      if (!J && (O[Ie] = !0, Object.keys(O).length >= -82 * 116 + 9307 + 405)) {
        var U = Y ? ' with the id of "'.concat(Y, '"') : "";
        console.warn("Over ".concat(-5092 + 27 * 196, " classes were generated for component ").concat(M).concat(U, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), J = !0, O = {};
      }
    };
  }(g, h)), Dr(k, function() {
    return ".".concat(k.styledComponentId);
  }), r && Ps(k, x, D), k;
}
function ga(x, o) {
  for (var t = [x[8777 + 203 * -14 + -1 * 5935]], e = -771 * 5 + 8257 + -4402, n = o.length; e < n; e += 1 * 1565 + 156 * -55 + -1754 * -4) t.push(o[e], x[e + (3488 + 1 * -4697 + 1210)]);
  return t;
}
var da = function(x) {
  var o = {};
  return o.isCss = !0, Object.assign(x, o);
};
function lu(x) {
  for (var o = [], t = 1 * -9046 + -9500 + 18547; t < arguments.length; t++) o[t - (3867 + 1 * -3866)] = arguments[t];
  if (X0(x) || j0(x)) return da(g0(ga(ro, E0([x], o, !0))));
  var e = x;
  return 8065 * -1 + -106 * 2 + 8277 === o.length && 127 * -41 + -6169 + 11377 === e.length && typeof e[-106 * 51 + -5345 + 10751 * 1] == "string" ? g0(e) : da(g0(ga(e, o)));
}
function or(x, o, t) {
  if (void (-1 * -556 + 184 * -1 + 62 * -6) === t && (t = Y0), !o) throw U0(3253 * 1 + -8199 + 4947, o);
  var e = function(n) {
    for (var r = [], i = 1594 + 8 * -409 + -1679 * -1; i < arguments.length; i++) r[i - (3 * 641 + 1231 + -3153 * 1)] = arguments[i];
    return x(o, t, lu.apply(void (15596 + 3899 * -4), E0([n], r, !1)));
  };
  return e.attrs = function(n) {
    return or(x, o, ze(ze({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return or(x, o, ze(ze({}, t), n));
  }, e;
}
var Ys = function(x) {
  return or(uu, x);
}, Vn = Ys;
$o.forEach(function(x) {
  Vn[x] = Ys(x);
});
q.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var nx = "__sc-".concat(l0, "__");
q.NODE_ENV !== "production" && q.NODE_ENV !== "test" && typeof window < "u" && (window[nx] || (window[nx] = -4 * 1363 + -3778 + -1846 * -5), 1 * -1569 + 9070 + -7500 === window[nx] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[nx] += -8877 + -46 * -193);
const Iu = Vn.div`
  position: relative;
`, fu = Vn.video`
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
var fx = ((x) => (x.CONTINUE_DETECTION = "continue-detection", x.SWITCH_CAMERA = "switch-camera", x.TOGGLE_MIRROR = "toggle-mirror", x))(fx || {}), Xs = ((x) => (x.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", x.CONTROL = "document-auto-capture:control", x.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", x.DOCUMENT_DETECTION = "document-auto-capture:document-detection", x.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", x.STATE_CHANGED = "document-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", x))(Xs || {}), St = ((x) => (x.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", x.CONTROL = "face-auto-capture:control", x.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", x.FACE_DETECTION = "face-auto-capture:face-detection", x.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", x.STATE_CHANGED = "face-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", x))(St || {}), Cu = ((x) => (x.ANIMATION_END = "magnifeye-auto-capture:animation-end", x.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", x))(Cu || {}), hu = ((x) => (x.STATUS_CHANGED = "smile-auto-capture:status-changed", x))(hu || {});
const js = {};
js.EYE_NOT_PRESENT = "eye_not_present";
const ua = js, Ne = {};
Ne.CANDIDATE_SELECTION = "candidate_selection", Ne.FACE_TOO_CLOSE = "face_too_close", Ne.FACE_TOO_FAR = "face_too_far", Ne.FACE_CENTERING = "face_centering", Ne.FACE_NOT_PRESENT = "face_not_present", Ne.SHARPNESS_TOO_LOW = "sharpness_too_low", Ne.BRIGHTNESS_TOO_LOW = "brightness_too_low", Ne.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Ne.DEVICE_PITCHED = "device_pitched", Ne.LEFT_EYE_NOT_PRESENT = "left_" + ua.EYE_NOT_PRESENT, Ne.RIGHT_EYE_NOT_PRESENT = "right_" + ua.EYE_NOT_PRESENT, Ne.MOUTH_NOT_PRESENT = "mouth_not_present", Ne.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", Ne.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const Re = Ne, Ue = {};
Ue.isPresent = Re.FACE_NOT_PRESENT, Ue.isNotPitched = Re.DEVICE_PITCHED, Ue.isNotSmall = Re.FACE_TOO_FAR, Ue.isNotLarge = Re.FACE_TOO_CLOSE, Ue.isNotOutOfBounds = Re.FACE_CENTERING, Ue.isNotDim = Re.BRIGHTNESS_TOO_LOW, Ue.isNotBright = Re.BRIGHTNESS_TOO_HIGH, Ue.isSharp = Re.SHARPNESS_TOO_LOW, Ue.isLeftEyePresent = Re.LEFT_EYE_NOT_PRESENT, Ue.isRightEyePresent = Re.RIGHT_EYE_NOT_PRESENT, Ue.isMouthPresent = Re.MOUTH_NOT_PRESENT, Ue.isMouthScoreNotTooHigh = Re.MOUTH_SCORE_TOO_HIGH, Ue.isMouthScoreNotTooLow = Re.MOUTH_SCORE_TOO_LOW;
const pu = Ue, rr = {};
rr.FRONT = "user", rr.REAR = "environment";
const Ms = rr, sn = {};
sn.LOADING = "LOADING", sn.ERROR = "ERROR", sn.WAITING = "WAITING", sn.RUNNING = "RUNNING";
const tt = sn;
var mu = ((x) => (x.CLOSEUP = "CLOSEUP", x.DISTANT = "DISTANT", x.MIDDLE = "MIDDLE", x))(mu || {});
const io = Tn(void 0);
io.displayName = "AppStateContext";
function En() {
  const x = f0(io);
  if (x === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return x;
}
const bu = io.Provider;
class Js extends gt {
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
    return ((o = this.context) == null ? void 0 : o.appState) === tt.ERROR ? null : this.props.children;
  }
}
_(Js, "contextType", io);
const Au = Vn.canvas`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, yu = Vn.div`
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
function Wu() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const vu = ss(
  ({ detectionDetails: x, isImageMirror: o }, t) => Wu() ? (console.log(x), /* @__PURE__ */ Z(mt, { children: [
    /* @__PURE__ */ Z(Au, { ref: t, $isImageMirror: o }),
    /* @__PURE__ */ Z(yu, { children: Object.entries(x).map(([e, n]) => /* @__PURE__ */ Z("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ Z("strong", { children: n })
    ] }, e)) })
  ] })) : null
), Sx = Tn(void 0);
Sx.displayName = "AnalyticsContext";
function wu() {
  const x = f0(Sx);
  if (x === void 0)
    throw new Error(`${Sx.displayName} must be used within a AnalyticsProvider`);
  return x;
}
function Bx() {
  const x = ["WODYW5ZcJru", "jCohb1hdLq", "WPyRW43dUeNdTwWgW6BcK0/cNG", "pbpcQWzSW43cTCotc8oCWQW", "AvnDWQxcRq", "wvtdTeCY", "E8k+vSkaWP7dNGtcQSo4cmkFcG", "WRDAW5pdHCoL", "WPO/WQyAfmkWp2riC8kKWRKs", "WPeflqhdTG", "AvxdNSoX", "w1ZdNq", "W4fKjHahjaRcKee", "W4fNW7ucWOe", "pv3dK8o2Aa", "W4DPiM1JyrRcINlcSmkLna", "sSoWocpdPmk7WQC9x8kdWRtdTW", "uSkJoqfn", "WRTvsmo2y8kOySoGyM5+", "oW8gW6/dVGGZBehcUmkX", "kcr9W4ldLZFcNq", "WQFdUmo4iw3dUYlcPCkFa1SinW", "CujRsd3cTamCWQ8", "Amkpfmozjq", "W4rPW7FcQ1rEW4OIj3uXW4NcLG", "W7i0B8kDhmkbW4C", "D09UoLZdTMu7WPBdOCobhXe", "A099WRFcPq", "W7DMgCo+E8k9W6jjmSkAyG", "WPeSWOnvW5OjDCkDWQzOwmkBya", "cMldS2i3BWRcOtNcSCoqcsO", "nri6lbS", "WOSjqSkhW7i"];
  return Bx = function() {
    return x;
  }, Bx();
}
(function(x, o) {
  function t(s, c, u, g, h) {
    return ke(u - -899, s);
  }
  function e(s, c, u, g, h) {
    return ke(h - -498, c);
  }
  function n(s, c, u, g, h) {
    return ke(h - -237, s);
  }
  function r(s, c, u, g, h) {
    return ke(c - 16, h);
  }
  function i(s, c, u, g, h) {
    return ke(c - 413, g);
  }
  const a = x();
  for (; ; )
    try {
      if (-parseInt(e(-113, "4hAm", -95, -117, -107)) / 1 + parseInt(n("D]QW", 143, 138, 149, 145)) / 2 + parseInt(e(-91, "U89[", -114, -103, -104)) / 3 * (-parseInt(t("Ln%B", -518, -531, -545, -538)) / 4) + -parseInt(r(405, 404, 403, 393, "4hAm")) / 5 * (parseInt(i(769, 784, 788, "Ln%B", 770)) / 6) + parseInt(r(399, 388, 384, 385, "l47!")) / 7 + parseInt(i(767, 777, 762, "TVpq", 781)) / 8 + parseInt(n("Uk5P", 136, 163, 130, 147)) / 9 === o) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Bx, 1219 * 189 + -261471 + 295059);
const Gx = Tn(void (-377 * 14 + -10 * -460 + 339 * 2));
Gx[K0(-405, -419, -405, -410, "2cag") + Su(604, 605, 617, "l47!", 608) + "e"] = K0(-413, -430, -444, -435, "TfTm") + K0(-425, -421, -410, -411, "r45C") + _s(1088, 1095, 1093, "fM6k");
function Su(x, o, t, e, n) {
  return ke(n - 219, e);
}
function ke(x, o) {
  const t = Bx();
  return ke = function(e, n) {
    e = e - (6681 + -54 * 117);
    let r = t[e];
    if (ke.SIePkg === void 0) {
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
      ke.oSezCh = u, x = arguments, ke.SIePkg = !0;
    }
    const a = t[-566 + 1091 * 4 + -3798], s = e + a, c = x[s];
    return c ? r = c : (ke.kGsCOE === void 0 && (ke.kGsCOE = !0), r = ke.oSezCh(r, n), x[s] = r), r;
  }, ke(x, o);
}
function Bu(x, o, t, e, n) {
  return ke(n - 250, x);
}
function _s(x, o, t, e, n) {
  return ke(o - 709, e);
}
function K0(x, o, t, e, n) {
  return ke(o - -796, n);
}
function Xr() {
  const x = f0(Gx);
  function o(i, a, s, c, u) {
    return K0(i - 317, s - 799, s - 272, c - 261, i);
  }
  function t(i, a, s, c, u) {
    return _s(i - 241, s - -475, s - 353, i);
  }
  if (x === void (7 * -641 + -6 * 794 + 9251 * 1)) throw new Error(Gx[n(335, 333, "eDJD", 328) + t("j9V#", 597, 604) + "e"] + (t("fM6k", 614, 624) + n(350, 341, "zarq", 357) + o("@Yk(", 365, 377, 378) + r(159, 150, 170, "hs[1") + n(338, 324, "GDQN", 325) + e("j9V#", 24, 26, 27, 33) + e("Vqqv", 28, 28, 27, 34) + r(163, 151, 177, "W51w")));
  function e(i, a, s, c, u) {
    return Bu(i, a - 97, s - 21, c - 143, u - -597);
  }
  function n(i, a, s, c, u) {
    return K0(i - 234, a - 744, s - 418, c - 282, s);
  }
  function r(i, a, s, c, u) {
    return K0(i - 463, i - 572, s - 428, c - 307, c);
  }
  return x;
}
(function(x, o) {
  function t(s, c, u, g, h) {
    return we(g - 163, s);
  }
  function e(s, c, u, g, h) {
    return we(u - 97, c);
  }
  function n(s, c, u, g, h) {
    return we(s - 795, c);
  }
  function r(s, c, u, g, h) {
    return we(g - -199, s);
  }
  const i = x();
  function a(s, c, u, g, h) {
    return we(s - 933, g);
  }
  for (; ; )
    try {
      if (-parseInt(r("Fo01", 168, 190, 178, 181)) / 1 + -parseInt(r("h7kj", 173, 161, 173, 163)) / 2 + parseInt(e(483, "h7kj", 489, 497, 479)) / 3 * (-parseInt(a(1326, 1333, 1319, "rHiO", 1314)) / 4) + parseInt(a(1321, 1317, 1334, "]zA@", 1328)) / 5 * (parseInt(n(1181, "KC1]", 1173, 1174, 1178)) / 6) + parseInt(r("nflw", 187, 182, 191, 201)) / 7 + -parseInt(t("worV", 540, 535, 539, 540)) / 8 + parseInt(a(1320, 1322, 1332, "YNOF", 1331)) / 9 === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(kx, 244160 + 4989 * 19 + -196274);
function we(x, o) {
  const t = kx();
  return we = function(e, n) {
    e = e - 371;
    let r = t[e];
    if (we.nAGaIK === void 0) {
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
      we.zABJFC = u, x = arguments, we.nAGaIK = !0;
    }
    const a = t[302 * -17 + 1 * -7218 + 12352], s = e + a, c = x[s];
    return c ? r = c : (we.vWgMqY === void 0 && (we.vWgMqY = !0), r = we.zABJFC(r, n), x[s] = r), r;
  }, we(x, o);
}
function kx() {
  const x = ["W606smkfWPtdNGLaWRu4", "tt/dTSkwWQu", "rmoHWOiuCCoRWPVcHCkCW6zUWOew", "A8oKW6aQWR/cKmkim2HAWPRcNG", "WQP6h8owWQG", "CK/cGSoRW47cPSkiEdz/WP44W4a", "seroE8onjYnQtmooesq", "imk+ibVcOW", "kSk1jXW", "WQhcSmkyW4BdISkvW5CCW7GWCrtcQa", "W5lcMSkylZNcOG/dVSkNe2LRxa", "A8oQW6mHW5RdSmk4ahXM", "W54xECkdcmkHW5TnW7hdHW", "W5NcTN3dNeFdGYZdSCoYW7xdOCk9W4e", "d8oYaHrkwNWBWQ5s", "kXFdJ8k5WPu", "WRFdTCoXWO/cOvJdUsdcMK7dSCkmW7e", "W7tdVrVcKMe", "tKhdTI/cSdTU", "cWHIW5nJWQm+g8koWPySuG", "jSkeW48xWOxcTxhcICk2W74bpG", "WQeOfmk4tmovpIr2W67dKSoZ", "wmkoosTVgmkT", "tdxcIeZdOKLhW4ZdKHZcU8k0", "W6pdS0FcNmol"];
  return kx = function() {
    return x;
  }, kx();
}
function Gu({ licensePath: x, bramble: o, wasmDirectoryPath: t }) {
  const [e, n] = nt(), r = e !== void (-2 * 423 + 163 + 683);
  Se(() => {
    async function c() {
      await o[h(689, 690, "FnCu", 693, 688)](t, x);
      function u(l, C, m, A, d) {
        return we(l - 927, m);
      }
      function g(l, C, m, A, d) {
        return we(l - -398, C);
      }
      function h(l, C, m, A, d) {
        return we(d - 306, m);
      }
      n(o[h(673, 668, "plL$", 679, 679) + u(1308, 1308, "FnCu") + g(-7, "^2up") + "t"]());
    }
    c();
  }, [o, t, x, n]);
  const i = {};
  function a(c, u, g, h, l) {
    return we(g - -753, u);
  }
  i[s(603, 608, 598, "3ipB") + a(-359, "@#I&", -364)] = e;
  function s(c, u, g, h, l) {
    return we(u - 233, h);
  }
  return i[s(613, 611, 612, "FX12") + "sh"] = r, i;
}
var Qs = ((x) => (x.DOCUMENT = "document-auto-capture:dev", x.FACE = "face-auto-capture:dev", x))(Qs || {});
const ir = {};
ir.SIMD = "simd", ir.NO_SIMD = "no-simd";
const la = ir, ar = {};
ar.Lower = "Lower", ar.Higher = "Higher";
const sr = ar, Cx = {};
Cx.VISIBLE = "VISIBLE", Cx.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", Cx.HIDDEN = "HIDDEN";
const Hx = Cx;
(function(x, o) {
  function t(s, c, u, g, h) {
    return Fe(h - -457, c);
  }
  function e(s, c, u, g, h) {
    return Fe(s - 218, h);
  }
  var n = x();
  function r(s, c, u, g, h) {
    return Fe(c - 612, g);
  }
  function i(s, c, u, g, h) {
    return Fe(g - -998, c);
  }
  for (; ; )
    try {
      var a = parseInt(r(968, 976, 972, "3J8#", 975)) / 1 * (-parseInt(r(979, 973, 975, "fZxT", 971)) / 2) + parseInt(i(-606, "[(C%", -604, -616, -608)) / 3 * (parseInt(t(-85, "IcR6", -80, -83, -74)) / 4) + -parseInt(e(595, 601, 596, 586, "WjR]")) / 5 + parseInt(t(-102, "6eSC", -98, -102, -95)) / 6 * (parseInt(e(583, 591, 593, 572, "zWw1")) / 7) + parseInt(i(-637, "[(C%", -637, -627, -629)) / 8 + parseInt(e(587, 599, 590, 582, "Gs9!")) / 9 + parseInt(t(-98, "VuoZ", -107, -109, -98)) / 10 * (parseInt(i(-617, "fZxT", -635, -623, -632)) / 11);
      if (a === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ox, 524070 + 6058 * -117 + 636089);
function Fe(x, o) {
  var t = Ox();
  return Fe = function(e, n) {
    e = e - (-631 * -13 + 1938 + -4891 * 2);
    var r = t[e];
    if (Fe.aTRByn === void 0) {
      var i = function(g) {
        for (var h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", C = "", m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (var k = 0, D = l.length; k < D; k++)
          C += "%" + ("00" + l.charCodeAt(k).toString(16)).slice(-2);
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
      Fe.hcNCiG = a, x = arguments, Fe.aTRByn = !0;
    }
    var s = t[9249 * -1 + -9248 + -18497 * -1], c = e + s, u = x[c];
    return u ? r = u : (Fe.LjYOoT === void 0 && (Fe.LjYOoT = !0), r = Fe.hcNCiG(r, n), x[c] = r), r;
  }, Fe(x, o);
}
function Ox() {
  var x = ["gSkLWP7cLWvYW7vWxmo+nGCe", "wSkdW4BcPmkKmSoS", "mhFcI2FcTmoTd8k/", "gdyhW4tdMHjVktbekq", "W77dJZS/W47dPce", "WO/cQNVcT8oOyXaHW68b", "WO7dQGtdVCoKuty", "xGHGttBcGmk5kCkFAmkx", "kxeeWP/dSmoOea", "W7ddGSkcwSomlZmsW7LDaSorpW", "W6L3d8o8W7LnoG", "EmkVWQRdI8kbW7nLECkDWP1OW5tcQq", "wZb+WRaCWPxdJmoTeHGeCSow", "W6dcGSoOWO9BW7vgdmoRoa", "hmkHWP/cLGv2WPHuwmoGitO", "wxZdMmoRWOJcPsRcNmoXkmk1v8kD", "aKWgh2G", "i1y3fMe", "W7lcQ218WPlcJ3pdPJldQ8k7W5ldKa", "lSkkox/dRuRcOKi", "WPyzWQFdK8kmeCkosmoMgSkrBZm", "WO3cRhNcTSk8fIOjW6KSW5RcTq", "W6ayWP7dHCoYCCoIsSobxKbqBW", "W5RdGmkQW70jzcS", "WPZdLSoEu8kN"];
  return Ox = function() {
    return x;
  }, Ox();
}
function ku({ crosshatch: x }) {
  function o(n, r, i, a, s) {
    return Fe(n - 783, s);
  }
  function t(n, r, i, a, s) {
    return Fe(i - 114, r);
  }
  function e(n, r, i, a, s) {
    return Fe(i - -439, a);
  }
  return x != null && x[t(491, "3J8#", 487) + "id"] ? sr[o(1157, 1160, 1150, 1145, "3J8#") + "r"] : sr[e(-64, -68, -58, "bmw[")];
}
function Pe(x, o) {
  const t = Zx();
  return Pe = function(e, n) {
    e = e - (-5273 * -1 + -113 * -17 + -995 * 7);
    let r = t[e];
    if (Pe.JmQmxZ === void 0) {
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
      Pe.TMgsjQ = u, x = arguments, Pe.JmQmxZ = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? r = c : (Pe.DvciXU === void 0 && (Pe.DvciXU = !0), r = Pe.TMgsjQ(r, n), x[s] = r), r;
  }, Pe(x, o);
}
(function(x, o) {
  function t(i, a, s, c, u) {
    return Pe(u - 637, a);
  }
  function e(i, a, s, c, u) {
    return Pe(s - -809, i);
  }
  const n = x();
  function r(i, a, s, c, u) {
    return Pe(i - -597, a);
  }
  for (; ; )
    try {
      if (parseInt(t(889, "aXIU", 882, 895, 880)) / 1 + -parseInt(r(-349, "6(jw", -358, -362, -363)) / 2 + -parseInt(r(-366, "f6ed", -358, -368, -375)) / 3 + parseInt(t(877, "PztZ", 883, 860, 869)) / 4 + -parseInt(e("0AF6", -545, -552, -555, -546)) / 5 * (-parseInt(r(-351, "W7[B", -351, -338, -355)) / 6) + -parseInt(e("ecxp", -566, -556, -570, -551)) / 7 + parseInt(e("aXIU", -556, -570, -566, -556)) / 8 === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Zx, 742860);
function Zx() {
  const x = ["cSoPWO/cQmkS", "vmkDdSo7W4KQWOayW5r8o0G", "bSoisq", "ECkoW7hdVmki", "ys4cpSoluKtdJXHqtmkgWP8", "WOSVWOftWOW", "WQ4sW4mNBW", "W4KOW51KoSk6W4xcQmk3FSoAe8kN", "zIWao8oluG7dTYzWqSko", "WO40WODvWPy", "edJdIG", "vSkuc8o4W44KW4WAW5zFk2RdOq", "C2BcIgvE", "W6OJW60PFhldHCoQsq/dUCkk", "WRJcUaraW4y", "W6uGW6qMFhBcOmoPxsFdPmkpWOq", "W6BcN8o8BSoFWQzKWQZdNZ/cLwS", "D2lcQ2LU", "W5FcU3hcOmkkf8kBWOxcSrL1WRZdUG", "WR3dLcDiamoprq", "W4KEW5CEvsLwWRpdRYFdVf8", "tmkiW7JcTdPXW4uNWRFdO3m3kG", "W5aRW6znd8oiWQy", "WPTOWOuGFq", "eSo7ymoMW6XTWOldG8krWRVdImk6eq", "W5qBi3VdTSkjAuHqWRldS8oi", "WRVcOKCdtSklbv/dKmowWRDyFa", "WPTYWOm/AG", "AmoOaYNdLW"];
  return Zx = function() {
    return x;
  }, Zx();
}
function Hu({ children: x, licensePath: o, bramble: t, wasmDirectoryPath: e }) {
  const n = {};
  function r(m, A, d, v, k) {
    return Pe(d - -639, m);
  }
  function i(m, A, d, v, k) {
    return Pe(k - 739, d);
  }
  n[C(-236, -234, "X[6G") + "le"] = t, n[r("fv^0", -388, -395) + C(-218, -225, "Qt!z") + "h"] = o;
  function a(m, A, d, v, k) {
    return Pe(d - -113, A);
  }
  n[a(135, "Qt!z", 134) + g(14, -14, "fv^0", 2, 0) + i(963, 975, "NH1v", 983, 974) + "th"] = e;
  const { sunfish: s, crosshatch: c } = Gu(n), u = {};
  function g(m, A, d, v, k) {
    return Pe(k - -240, d);
  }
  u[a(101, "Xo2L", 116) + r("T8Ar", -402, -398)] = c;
  const h = xt(() => ({ redfin: ku(u), sunfish: s, crosshatch: c, bramble: t }), [s, c, t]), l = {};
  l[i(1002, 985, "W@v)", 1002, 988)] = h, l[C(-237, -245, "Xo2L") + r("4$Zl", -395, -394)] = x;
  function C(m, A, d, v, k) {
    return Pe(m - -470, d);
  }
  return Z(Gx[a(132, "Vldz", 125) + C(-233, -248, "W7[B")], l);
}
function Ct(x, o) {
  var t = Kx();
  return Ct = function(e, n) {
    e = e - 340;
    var r = t[e];
    if (Ct.ybXOmO === void 0) {
      var i = function(g) {
        for (var h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", C = "", m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (var k = 0, D = l.length; k < D; k++)
          C += "%" + ("00" + l.charCodeAt(k).toString(16)).slice(-2);
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
      Ct.YPhhzc = a, x = arguments, Ct.ybXOmO = !0;
    }
    var s = t[8141 * 1 + 1229 + 5 * -1874], c = e + s, u = x[c];
    return u ? r = u : (Ct.sYzEvP === void 0 && (Ct.sYzEvP = !0), r = Ct.YPhhzc(r, n), x[c] = r), r;
  }, Ct(x, o);
}
(function(x, o) {
  var t = x();
  function e(a, s, c, u, g) {
    return Ct(g - 451, c);
  }
  function n(a, s, c, u, g) {
    return Ct(g - -527, a);
  }
  function r(a, s, c, u, g) {
    return Ct(u - 221, a);
  }
  for (; ; )
    try {
      var i = parseInt(n("#xrH", -180, -176, -186, -179)) / 1 + -parseInt(n("NAEM", -192, -188, -193, -186)) / 2 + -parseInt(e(800, 802, "Vc!H", 796, 804)) / 3 + parseInt(r("[T&u", 565, 555, 563, 568)) / 4 + parseInt(e(792, 787, "[T&u", 785, 791)) / 5 + -parseInt(n("Vc!H", -181, -187, -176, -184)) / 6 + parseInt(r("NAEM", 568, 572, 573, 579)) / 7 * (parseInt(n("ttWT", -182, -180, -170, -177)) / 8);
      if (i === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Kx, -1 * -313295 + 181599 + -675 * 362);
function Kx() {
  var x = ["DSoiW5mfW6BcNCkWwCkRWQhdU8oT", "WQ7cVfpcTSocWQ7dMvSoW4PAWQS", "FSktW6JcTtZcV8okWRbgzuJcI8oq", "W5XOW5ddKCkbWOtcG8k4W7ZcKSkCqW", "ECkqW6VcTZ7cTSkqWP1AENNcPG", "WQflW70Zl8ofWOZcKSoMkYdcIG", "W7KEmCosjrtcJwFcKWJcLXfv", "jgmyCxa7pG", "W7aFnmosjr/dMKxcGsZcPru", "WQNdLXZcUComWPZdJ8kjAh7cQmk7", "W7OEpSoBjbFdTMhcJGZcUXK", "gCk8WQm2cSo+W4ldQ0FcU8kGCva", "f0/cSCotW6yCWRG", "W7SEpSoqjrBdOLJcRHBcNJ4", "W5vSW5ddMCkeWONcHmkyW6VcSmk8xG", "WQnlW7iXl8ohW6pcRCoBnsNcPCo7"];
  return Kx = function() {
    return x;
  }, Kx();
}
function Ou({ analytics: x, crosshatch: o }) {
  return o !== void (238 * 27 + 8309 + -2105 * 7) && !o.isAnalyticsDisabled ? x : void (372 * 12 + -3705 + 253 * -3);
}
function Zu({ analytics: x, appKey: o, redfin: t, crosshatch: e, bramble: n }) {
  const r = {};
  r.analytics = x, r.crosshatch = e;
  const i = Ou(r);
  return Se(() => {
    i && i.init(o);
  }, [i, o]), Se(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), i && i.walleye(t, n.getCustomerName()));
  }, [i, n, e, t]), Se(() => {
    if (i)
      return window.addEventListener("beforeunload", i.endSession), () => {
        i.endSession(), window.removeEventListener("beforeunload", i.endSession);
      };
  }, [i]), i;
}
function Ku({
  analytics: x,
  appKey: o,
  children: t
}) {
  const { redfin: e, crosshatch: n, bramble: r } = Xr(), i = Zu({ analytics: x, redfin: e, appKey: o, crosshatch: n, bramble: r }), a = xt(
    () => ({
      analytics: i
    }),
    [i]
  );
  return /* @__PURE__ */ Z(Sx.Provider, { value: a, children: t });
}
const Ru = 4343 + -3616 * -2 + -2315 * 5 + 0.4, Pu = 0 + 0.16, Tu = 1502 * -1 + -718 * -12 + 2 * -3557 + 0.2, Vu = 0 + 0.05, Eu = 1 * -2801 + -1666 * -3 + 2197 * -1, cr = {};
cr.min = -(-8303 + -2076 * -4), cr.max = 1;
const Ia = cr, fa = 2 * 1435 + 4945 + -521 * 15, Lu = 7419 + 3 * -2473 + 0.3, Nu = -4484 + 35 * 47 + 2839 + 0.2, Fu = 1 * 3931 + 6075 + -5003 * 2 + 0.85, Du = 30, Yu = -464 + -473 * -1 + 0.8100000000000005, hx = {};
hx.minDuration = 1e3, hx.maxDuration = 2500, hx.minFrames = 10;
const Oo = hx, gr = {};
gr.max = 100, gr.min = 10;
const Ca = gr, Xu = 5968 + 4 * -1835 + -1 * -2092, ju = 3004 + -2 * 1402, Mu = 7326 + -1187 * 2 + -4948, Us = "AES-CBC", zs = "RSA-OAEP", Ju = "SHA-256", _u = "image/jpeg", Qu = -489 * 7 + -3302 + 6733, Uu = -1009 + -1 * 2397 + -1 * -3446, zu = "SAM v1.39.3 for idcards", qu = "dot_embedded_bg.wasm", qs = Tn(null), $s = () => {
  const x = f0(qs);
  if (!x)
    throw new Error("Missing provider for CameraOptionsContext");
  return x;
}, $u = (x) => {
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
      faceConfidence: (i == null ? void 0 : i.faceConfidence) ?? Ru,
      minFaceSizeRatio: (i == null ? void 0 : i.minFaceSizeRatio) ?? Pu,
      maxFaceSizeRatio: (i == null ? void 0 : i.maxFaceSizeRatio) ?? Tu,
      sharpnessThreshold: (i == null ? void 0 : i.sharpnessThreshold) ?? Lu,
      brightnessLowThreshold: (i == null ? void 0 : i.brightnessLowThreshold) ?? Nu,
      brightnessHighThreshold: (i == null ? void 0 : i.brightnessHighThreshold) ?? Fu,
      outOfBoundsThreshold: (i == null ? void 0 : i.outOfBoundsThreshold) ?? Vu,
      devicePitchAngleThreshold: (i == null ? void 0 : i.devicePitchAngleThreshold) ?? Du,
      mouth: {
        confidence: ((s = i == null ? void 0 : i.mouth) == null ? void 0 : s.confidence) ?? Eu,
        status: {
          min: ((c = i == null ? void 0 : i.mouth) == null ? void 0 : c.status.min) ?? Ia.min,
          max: ((u = i == null ? void 0 : i.mouth) == null ? void 0 : u.status.max) ?? Ia.max
        }
      },
      leftEye: (i == null ? void 0 : i.leftEye) ?? {
        confidence: fa
      },
      rightEye: (i == null ? void 0 : i.rightEye) ?? {
        confidence: fa
      }
    }
  };
}, el = ({ cameraOptions: x, children: o }) => {
  const t = xt(() => ({
    faceCameraOptions: $u(x)
  }), [x]);
  return /* @__PURE__ */ Z(qs.Provider, { value: t, children: o });
}, tl = 0 + 0.75, nl = 2, xl = -23 * 233 + 3683 + 2276, ol = 4799 * 2 + -271 + -9327, rl = (x, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(x, t));
}, Qx = class Qx {
  constructor() {
    _(this, "lastDetails", {});
    _(this, "delayedTime", 1 * 657 + -1901 + 1244);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Qx()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 0;
  }
  isDetailChanged(o, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(o, t) {
    this.isDetailChanged(o, t) && rl(o, t);
  }
  dispatchDelayedCustomEventOnChange(o, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(o, t), this.delayedTime = n);
  }
};
_(Qx, "_instance");
let mn = Qx;
const z0 = mn.getInstance(), ha = (x, o, t = xl) => {
  const e = {};
  e.instructionCode = o;
  const n = e;
  z0.dispatchDelayedCustomEventOnChange(x, n, t);
}, pa = (x, o) => {
  z0.dispatchCustomEventOnChange(x, o);
}, il = (x, o) => {
  z0.dispatchCustomEventOnChange(x, o);
}, al = (x, o) => {
  const t = {};
  t.size = o;
  const e = t;
  z0.dispatchCustomEventOnChange(x, e);
}, sl = (x, o, t) => {
  const e = o.confidence < t ? void 0 : o, n = {};
  n.detectedObject = e;
  const r = n;
  z0.dispatchCustomEventOnChange(x, r);
}, cl = (x, o, t) => {
  const e = {};
  e.image = t, e.data = {}, e.data.detection = o, e.data.imageResolution = {}, e.data.imageResolution.width = t.width, e.data.imageResolution.height = t.height;
  const n = e;
  z0.dispatchCustomEventOnChange(x, n);
}, gl = () => "prod".toLowerCase() === "dev", dl = (x, o, t = _u) => new Promise((e) => {
  x.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, o);
}), ul = async (x) => dl(x, 5817 * -1 + 1 * -3261 + 8 * 1146), ll = (x, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(x, o.shiftX, o.shiftY, o.width, o.height, -3 * 353 + 4618 * -1 + 5677, -8266 + 2 * 4133, t.width, t.height), t;
}, Il = (x) => {
  const o = x.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(-458 + -217 * 30 + 6968, 5 * 1055 + -4653 * 2 + 4031, x.width, x.height);
  return t;
}, ec = (x, o, t, e) => {
  const n = x.getContext("2d");
  n && (n.beginPath(), e ? (n.fillStyle = t, n.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (n.strokeStyle = t, n.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), n.stroke());
}, Zo = (x, o, t) => {
  const { height: e, shiftX: n, shiftY: r, width: i } = o, a = {};
  a.x = n, a.y = r;
  const s = {};
  s.topLeft = a, s.width = i, s.height = e, s.color = t, ec(x, s, t);
}, fn = (x, o, t, e = 155 * -43 + 9783 + 1559 * -2) => {
  const n = x.getContext("2d");
  n && (n.fillStyle = t, n.fillRect(o.x + e, o.y + e, 3 * 1639 + -9729 + 4819, 7), n.beginPath());
}, fl = (x, o) => {
  if (gl()) {
    const t = {};
    t.candidateSelectionImages = o;
    const e = t;
    mn.getInstance().dispatchCustomEventOnChange(x, e);
  }
}, Cl = (x, o) => {
  const { cameraResolution: t, shouldMirror: e } = o;
  Se(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, il(x, n);
  }, [t, e, x]);
}, tc = (x) => x.length < -4686 + -1 * -4687 ? 12226 + 12226 * -1 : x.reduce((t, e) => t + e, -1 * 841 + 922 * -10 + 10061) / x.length, Ln = (x) => Number.parseFloat(x.toFixed(3)), hl = (x) => {
  const o = x.getContext("2d");
  o && o.clearRect(-24 * -183 + -4979 + 587, -137 * 26 + 1357 + 2205, o.canvas.width, o.canvas.height);
}, ao = (x, o) => Math.min(x, o), pl = (x, o) => {
  const t = ao(o.width, o.height);
  return Ln(x * t);
}, nc = ({ height: x, width: o }) => {
  const t = ao(o, x), e = t / (9403 + 1 * -93 + -9307) * (69 * -20 + -654 * -9 + -4502 * 1);
  if (o > x) {
    const r = {};
    return r.width = e, r.height = t, r;
  }
  const n = {};
  return n.width = t, n.height = e, n;
}, xc = ({ height: x, width: o }) => {
  const t = ao(o, x) * tl, e = (o - t) / (-8885 + -3187 * -1 + 5700), n = (x - t) / (6716 + 746 * -9), r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = t, r;
}, ml = (x) => {
  const { height: o, shiftX: t, shiftY: e, width: n } = xc(x), r = {};
  return r.shiftX = t / x.width, r.shiftY = e / x.height, r.width = n / x.width, r.height = o / x.height, r;
}, bl = (x, o) => pl(x, o) * nl, Al = "@innovatrics/dot-common-auto-capture", yl = "6.1.8", Wl = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, vl = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, wl = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.1"
}, Sl = {
  name: Al,
  private: !0,
  version: yl,
  scripts: Wl,
  dependencies: vl,
  devDependencies: wl
}, oc = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), ma = () => {
  const x = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return x && o;
}, Bl = () => {
  const x = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return x && o ? !1 : o;
}, dr = (x) => new Promise((o) => {
  setTimeout(o, x);
}), k0 = (x) => JSON.parse(JSON.stringify(x, (o, t) => typeof t == "number" ? Ln(t) : t)), rc = () => Sl.version, ic = (x) => new URL(x).hostname.replace("www.", ""), Gl = () => ic(window.location.href) === "localhost", xx = (x) => Object.entries(x).map(([o, t]) => encodeURIComponent(o) + "=" + encodeURIComponent(t)).join("&"), kl = (x, o) => {
  const t = x && performance.now() - x;
  return o >= Oo.minFrames ? t > Oo.minDuration : t > Oo.maxDuration;
}, Hl = (x, o) => JSON.stringify(x) === JSON.stringify(o) ? o : x;
function Ol(x, o) {
  let t;
  return (...e) => {
    const n = () => {
      clearTimeout(t), t = void 0, x(...e);
    };
    t === void (-4027 * 1 + -9900 + -1 * -13927) && (t = setTimeout(n, o));
  };
}
const Zl = (x) => x === Xs.CONTROL ? !oc() : !0, Kl = (x, o) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: r } = En(), [i, a] = nt(), s = xt(() => {
    const u = r && o && o.isStreaming && o.getCameraSettings().facingMode;
    return u ? i ?? u === "user" : i ?? Zl(x);
  }, [o, i, x, r]);
  Se(() => {
    const u = () => {
      t !== tt.LOADING && e(tt.RUNNING);
    }, g = () => {
      a(i === void 0 ? !s : !i);
    }, h = async () => {
      if (o) {
        e(tt.LOADING);
        try {
          await o.switchCamera(), e(tt.RUNNING);
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
        case fx.CONTINUE_DETECTION:
          u();
          break;
        case fx.TOGGLE_MIRROR:
          g();
          break;
        case fx.SWITCH_CAMERA:
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
async function ac() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Ko() {
  return (await ac()).filter((o) => o.kind === "videoinput");
}
function Ro(x) {
  x.getTracks().forEach((t) => t.stop());
}
function ba(x) {
  return x.getVideoTracks()[7469 + -2575 * 3 + -8 * -32];
}
const px = {};
px.width = 1920, px.height = 1080, px.facingMode = Ms.FRONT;
const Rl = px;
var ht;
class sc {
  constructor({ defaultVideoConstrains: o = Rl, minCameraShorterSide: t = Xu } = {}) {
    _(this, "options");
    _(this, "availableCameraProperties", []);
    ce(this, ht, null);
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return X(this, ht);
  }
  get videoTrack() {
    return X(this, ht) ? ba(X(this, ht)) : void (11 * 677 + -3639 * -1 + -11086);
  }
  get isCameraActive() {
    var o;
    return !!((o = X(this, ht)) != null && o.active);
  }
  static async requestPermission() {
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    Ro(t);
  }
  async open(o = {}) {
    ma() && await dr(7057 * -1 + 1927 + 5580), ae(this, ht, await navigator.mediaDevices.getUserMedia(o)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const o = await Ko();
    if (o.length <= 9786 + 7 * -265 + -130 * 61) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = o.findIndex((a) => a.deviceId === e.deviceId), r = o[n + (6874 + 14 * 341 + -1 * 11647)] ?? o[4 * 1722 + -6702 + -2 * 93], i = this.getConstraints(t, r);
    this.close(), await this.open(i);
  }
  close() {
    X(this, ht) && (Ro(X(this, ht)), ae(this, ht, null));
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
    const o = this.getSettings(), t = await ac(), e = t.find((n) => n.deviceId === o.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(o) {
    return o === Ms.FRONT ? void (6790 + 1 * -6341 + -449) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return oc() ? (await Ko()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (4744 + -2 * 2372);
  }
  async collectAvailableCamerasInfo() {
    const o = await Ko();
    for (const t of o) {
      ma() && await dr(-258 + 354 * 2);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const r = await navigator.mediaDevices.getUserMedia(n), i = ba(r);
        if (!i) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = i.getSettings(), s = { ...a };
        s.deviceName = i.label;
        const c = {};
        c.cameraProperties = s;
        const u = c;
        this.availableCameraProperties.push(u), Ro(r);
      } catch (e) {
        e instanceof Error && re.logError(e);
      }
    }
  }
  getConstraints(o, t) {
    const e = { ...this.options.defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t.deviceId } : void (-16263 + -1807 * -9);
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
ht = new WeakMap();
class Pl {
  constructor(o, t) {
    this.videoHandler = o, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(o = {}) {
    await sc.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(o.facingMode), e = this.cameraHandler.getConstraints(o, t);
    await this.cameraHandler.open(e), Bl() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
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
    return e.drawImage(this.videoHandler.videoElement, 7121 + 617 * 9 + -6337 * 2, -9299 + -58 * -162 + -1 * 97), { image: t, timestamp: Date.now() };
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
var Rt;
class Tl {
  constructor(o) {
    ce(this, Rt);
    ae(this, Rt, o);
  }
  get videoElement() {
    return X(this, Rt);
  }
  async play(o) {
    X(this, Rt).srcObject = o, await X(this, Rt).play();
  }
  stop() {
    X(this, Rt).srcObject = null;
  }
  hasSrcObject() {
    return !!X(this, Rt).srcObject;
  }
}
Rt = new WeakMap();
function Vl(x, o) {
  const t = Lt(), { handleError: e, setIsCameraReady: n } = En(), [r, i] = nt(), a = N0((c) => {
    i((u) => Hl(c, u));
  }, []);
  Se(() => ((async () => {
    if (!x.current) {
      e(new re("Something went wrong during video initialization"));
      return;
    }
    const u = new Tl(x.current), g = new sc(), h = new Pl(u, g);
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
function El(x, o) {
  Se(() => {
    function t() {
      x.current && al(o, x.current.getBoundingClientRect());
    }
    return t(), window.addEventListener("resize", t), () => {
      window.removeEventListener("resize", t);
    };
  }, [x, o]);
}
class jr extends Array {
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
    this.length === this.size && this.splice(-9888 + 949 * 1 + 7 * 1277, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-211 * 41 + 8 * 532 + 4395);
  }
}
const Ll = (x, o) => {
  const { height: t, shiftX: e, shiftY: n, width: r } = o;
  return !(x.x < e || x.x > e + r || x.y < n || x.y > n + t);
}, Nl = (x, o) => Object.values(x).every((t) => Ll(t, o));
function Fl(x) {
  return Ln(Math.abs(x));
}
const Dl = () => {
  const [x, o] = nt(null), t = Lt(new jr(2 * 4673 + 2 * 3838 + -17017));
  function e(r) {
    const { z: i } = r.accelerationIncludingGravity || {};
    if (!i) return;
    t.current.pushFixed(Fl(i));
    const a = Ln(tc(t.current)), s = {};
    s.z = a, o(s);
  }
  Se(() => (window.addEventListener("devicemotion", Ol(e, Uu), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const n = {};
  return n.acceleration = x, n;
};
var Yl = Symbol.for("preact-signals");
function Mr() {
  if (R0 > 1638 + -1507 * -1 + -3144)
    R0--;
  else {
    for (var x, o = !1; void (1 * -5199 + 843 + 4356) !== Cn; ) {
      var t = Cn;
      for (Cn = void (11 * 461 + -9557 + -4486 * -1), ur++; void (-5947 + 19 * 313) !== t; ) {
        var e = t.o;
        if (t.o = void (383 * 9 + -121 * 67 + 4660), t.f &= -(-6978 + -537 * -13), !(8 & t.f) && dc(t)) try {
          t.c();
        } catch (n) {
          !o && (x = n, o = !(-47 * 123 + 3 * 179 + -4 * -1311));
        }
        t = e;
      }
    }
    if (ur = -1 * -4972 + 9 * 477 + -9265, R0--, o) throw x;
  }
}
var ne = void (-7837 + 419 * -5 + 1 * 9932), Cn = void (-8842 * 1 + 11 * 866 + 2 * -342), R0 = 381 * -25 + -1489 * -2 + 6547, ur = 0, Rx = 4369 * -1 + -37 * 127 + 9068;
function cc(x) {
  if (ne !== void 0) {
    var o = x.n;
    if (void (-1 * 6337 + 7 * -1189 + 14660) === o || o.t !== ne)
      return o = { i: 0, S: x, p: ne.s, n: void (-4287 + 3 * 1429), t: ne, e: void (-102 * 37 + -3554 * 1 + 2 * 3664), x: void (1 * -5729 + 283 * 28 + -2195), r: o }, void (1277 * -3 + 53 * -129 + 10668) !== ne.s && (ne.s.n = o), ne.s = o, x.n = o, -9708 + -2 * -4870 & ne.f && x.S(o), o;
    if (-(3645 + 976 * -2 + -12 * 141) === o.i)
      return o.i = -1 * -3430 + -1 * 4373 + 1 * 943, void (-7773 + 62 * -19 + -8951 * -1) !== o.n && (o.n.p = o.p, void (-4294 + 1187 * -2 + 6668) !== o.p && (o.p.n = o.n), o.p = ne.s, o.n = void (-53 * 10 + -1 * 2270 + -16 * -175), ne.s.n = o, ne.s = o), o;
  }
}
function Ge(x) {
  this.v = x, this.i = -6027 + -1 * 2459 + 8486 * 1, this.n = void (1250 + 1 * -1250), this.t = void (911 + 1 * -9907 + 4498 * 2);
}
Ge.prototype.brand = Yl, Ge.prototype.h = function() {
  return !(-5593 + -17 * -329);
}, Ge.prototype.S = function(x) {
  this.t !== x && void (-5403 * 1 + 3 * 91 + 5130) === x.e && (x.x = this.t, void (11585 + 2317 * -5) !== this.t && (this.t.e = x), this.t = x);
}, Ge.prototype.U = function(x) {
  if (void (1 * -5657 + 4 * -2368 + 15129) !== this.t) {
    var o = x.e, t = x.x;
    o !== void 0 && (o.x = t, x.e = void (4 * -1983 + 2073 + 31 * 189)), void (-385 * -25 + -1 * 43 + -2 * 4791) !== t && (t.e = o, x.x = void (-7539 + 2 * 4932 + 775 * -3)), x === this.t && (this.t = t);
  }
}, Ge.prototype.subscribe = function(x) {
  var o = this;
  return _r(function() {
    var t = o.value, e = ne;
    ne = void (-949 * 7 + 5 * -921 + -2 * -5624);
    try {
      x(t);
    } finally {
      ne = e;
    }
  });
}, Ge.prototype.valueOf = function() {
  return this.value;
}, Ge.prototype.toString = function() {
  return this.value + "";
}, Ge.prototype.toJSON = function() {
  return this.value;
}, Ge.prototype.peek = function() {
  var x = ne;
  ne = void (-67 * -11 + 9777 + -10514);
  try {
    return this.value;
  } finally {
    ne = x;
  }
}, Object.defineProperty(Ge.prototype, "value", { get: function() {
  var x = cc(this);
  return void (11 * 206 + 5 * 1239 + -8461) !== x && (x.i = this.i), this.v;
}, set: function(x) {
  if (x !== this.v) {
    if (ur > -466 * -5 + 555 * 17 + -11665) throw new Error("Cycle detected");
    this.v = x, this.i++, Rx++, R0++;
    try {
      for (var o = this.t; void (-1 * 1279 + 5455 * 1 + -4176) !== o; o = o.x) o.t.N();
    } finally {
      Mr();
    }
  }
} });
function gc(x) {
  return new Ge(x);
}
function dc(x) {
  for (var o = x.s; void (2162 * 1 + 8158 + -258 * 40) !== o; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !(-230 * 11 + 5 * 45 + 2305);
  return !(-4049 * 2 + -2 * 1559 + 3739 * 3);
}
function uc(x) {
  for (var o = x.s; void (9372 + -5503 * 1 + -3869) !== o; o = o.n) {
    var t = o.S.n;
    if (t !== void 0 && (o.r = t), o.S.n = o, o.i = -(-4523 + -29 * -156), void (7970 + -2 * -1479 + -10928) === o.n) {
      x.s = o;
      break;
    }
  }
}
function lc(x) {
  for (var o = x.s, t = void (-8111 + -34 * 113 + 1 * 11953); void (7979 + -2579 * -1 + -10558) !== o; ) {
    var e = o.p;
    -(-7 * 985 + -1255 + 8151) === o.i ? (o.S.U(o), void (-647 * -15 + 4452 + 117 * -121) !== e && (e.n = o.n), void (-7944 + 5 * 335 + -6269 * -1) !== o.n && (o.n.p = e)) : t = o, o.S.n = o.r, void (1 * -2037 + -8361 + 10398) !== o.r && (o.r = void 0), o = e;
  }
  x.s = t;
}
function H0(x) {
  Ge.call(this, void (-1579 * 3 + -3279 + 8016)), this.x = x, this.s = void (-387 * -13 + -4722 + -309), this.g = Rx - (1 * -4567 + -4815 + -9383 * -1), this.f = 49 * -79 + -95 * -79 + -1 * 3630;
}
(H0.prototype = new Ge()).h = function() {
  if (this.f &= -(5677 * -1 + 3273 + 2407), 1 & this.f) return !(5701 + 3905 * -2 + 211 * 10);
  if (8477 + -1689 * 5 == (14750 + -14 * 1051 & this.f)) return !(14816 + -14816 * 1);
  if (this.f &= -(38 * 132 + 175 + -5186), this.g === Rx) return !(-9011 + 1 * -8683 + 17694);
  if (this.g = Rx, this.f |= -9012 + -1 * -9013, this.i > -1920 + -8817 * 1 + 9 * 1193 && !dc(this)) return this.f &= -(2652 + -1 * -1966 + -4616), !(5743 * 1 + 1 * -6922 + 1179);
  var x = ne;
  try {
    uc(this), ne = this;
    var o = this.x();
    (-3839 + -61 * 8 + -4343 * -1 & this.f || this.v !== o || 6604 + -9 * 22 + -6406 === this.i) && (this.v = o, this.f &= -(1 * 8171 + -1868 + -6286), this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return ne = x, lc(this), this.f &= -(-1713 * -5 + 5 * 199 + -9558), !(-1229 * -4 + 1102 * 1 + -6018);
}, H0.prototype.S = function(x) {
  if (void (-5802 * 1 + -4699 + 10501) === this.t) {
    this.f |= 4728 + 204 * -23;
    for (var o = this.s; void (2201 + -31 * 71) !== o; o = o.n) o.S.S(o);
  }
  Ge.prototype.S.call(this, x);
}, H0.prototype.U = function(x) {
  if (this.t !== void 0 && (Ge.prototype.U.call(this, x), void (-6210 + -4 * 167 + 362 * 19) === this.t)) {
    this.f &= -(1226 + -1 * 1193);
    for (var o = this.s; void (-6514 + -9 * -734 + -92) !== o; o = o.n) o.S.U(o);
  }
}, H0.prototype.N = function() {
  if (!(1 * 9941 + 38 * 141 + 15297 * -1 & this.f)) {
    this.f |= 794 * 1 + -2206 + 1418;
    for (var x = this.t; void (7962 + 2 * 3623 + -15208) !== x; x = x.x) x.t.N();
  }
}, Object.defineProperty(H0.prototype, "value", { get: function() {
  if (-2755 * 1 + 8356 + 70 * -80 & this.f) throw new Error("Cycle detected");
  var x = cc(this);
  if (this.h(), void (-5615 * 1 + 6479 + -864) !== x && (x.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function Xl(x) {
  return new H0(x);
}
function Ic(x) {
  var o = x.u;
  if (x.u = void (-517 + 47 * 11), typeof o == "function") {
    R0++;
    var t = ne;
    ne = void (-12624 + -4208 * -3);
    try {
      o();
    } catch (e) {
      throw x.f &= -(537 * 18 + -3129 + -6535), x.f |= -3 * 1409 + -1 * 1958 + 6193, Jr(x), e;
    } finally {
      ne = t, Mr();
    }
  }
}
function Jr(x) {
  for (var o = x.s; void (1307 * 6 + -4077 * 2 + 1 * 312) !== o; o = o.n) o.S.U(o);
  x.x = void (-3 * -362 + 12 * 268 + 239 * -18), x.s = void (-6809 + 6809 * 1), Ic(x);
}
function jl(x) {
  if (ne !== this) throw new Error("Out-of-order effect");
  lc(this), ne = x, this.f &= -(-6645 + -1 * -3681 + 2966), -7074 + 9 * 538 + 2240 & this.f && Jr(this), Mr();
}
function cn(x) {
  this.x = x, this.u = void (-8192 + 1 * 6218 + 1974), this.s = void (-7195 * 1 + 944 * 5 + 2475), this.o = void (-9 * 1083 + -9 * 712 + 9 * 1795), this.f = 5 * -659 + 9169 + -5842;
}
cn.prototype.c = function() {
  var x = this.S();
  try {
    if (-13 * -596 + -1298 + -6442 * 1 & this.f || void (6097 + 26 * 329 + -7 * 2093) === this.x) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    x();
  }
}, cn.prototype.S = function() {
  if (-7394 * -1 + -7581 + -94 * -2 & this.f) throw new Error("Cycle detected");
  this.f |= -716 * 5 + -7290 + 10871, this.f &= -(-6293 + 10 * 719 + -888), Ic(this), uc(this), R0++;
  var x = ne;
  return ne = this, jl.bind(this, x);
}, cn.prototype.N = function() {
  !(3513 * 2 + -3815 + -3209 & this.f) && (this.f |= -8439 + -3 * 772 + 10757, this.o = Cn, Cn = this);
}, cn.prototype.d = function() {
  this.f |= 6325 + -1 * 137 + -6180, 1 & this.f || Jr(this);
};
function _r(x) {
  var o = new cn(x);
  try {
    o.c();
  } catch (t) {
    throw o.d(), t;
  }
  return o.d.bind(o);
}
var Po;
function Z0(x, o) {
  N[x] = o.bind(null, N[x] || function() {
  });
}
function ox(x) {
  Po && Po(), Po = x && x.S();
}
function fc(x) {
  var o = this, t = x.data, e = Cc(t);
  e.value = t;
  var n = xt(function() {
    for (var r = o.__v; r = r.__; ) if (r.__c) {
      r.__c.__$f |= 4228 + 26 * 1 + -4250;
      break;
    }
    return o.__$u.c = function() {
      var i;
      !Ja(n.peek()) && -1693 * 1 + 5049 + -3353 === ((i = o.base) == null ? void (-5831 * -1 + -1067 + -4764) : i.nodeType) ? o.base.data = n.peek() : (o.__$f |= 498 * 6 + 2007 + -4994 * 1, o.setState({}));
    }, Xl(function() {
      var i = e.value.value;
      return i === 0 ? -2887 + -1 * -6917 + -62 * 65 : !(-3812 * -1 + 9279 + -13091) === i ? "" : i || "";
    });
  }, []);
  return n.value;
}
fc.displayName = "_st";
var lr = {};
lr.configurable = !(180 + 6 * -1465 + 8610), lr.value = void (-1267 * -3 + 6695 + -10496);
var Ir = {};
Ir.configurable = !(-5226 * -1 + 4344 + -9570), Ir.value = fc;
var fr = {};
fr.configurable = !(5355 + -4101 * 2 + 2847), fr.get = function() {
  var x = {};
  return x.data = this, x;
};
var Cr = {};
Cr.configurable = !(-191 * -28 + -1903 * 1 + 53 * -65), Cr.value = 1;
var xn = {};
xn.constructor = lr, xn.type = Ir, xn.props = fr, xn.__b = Cr, Object.defineProperties(Ge.prototype, xn), Z0("__b", function(x, o) {
  if (typeof o.type == "string") {
    var t, e = o.props;
    for (var n in e) if (n !== "children") {
      var r = e[n];
      r instanceof Ge && (t || (o.__np = t = {}), t[n] = r, e[n] = r.peek());
    }
  }
  x(o);
}), Z0("__r", function(x, o) {
  ox();
  var t, e = o.__c;
  e && (e.__$f &= -(-2037 + -4995 * -1 + 4 * -739), void (10431 + -171 * 61) === (t = e.__$u) && (e.__$u = t = function(n) {
    var r;
    return _r(function() {
      r = this;
    }), r.c = function() {
      e.__$f |= -16092 + -77 * -209, e.setState({});
    }, r;
  }())), ox(t), x(o);
}), Z0("__e", function(x, o, t, e) {
  ox(), x(o, t, e);
}), Z0("diffed", function(x, o) {
  ox();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, n = o.props;
    if (e) {
      var r = t.U;
      if (r) for (var i in r) {
        var a = r[i];
        void (1 * -7753 + -3435 + 11188) !== a && !(i in e) && (a.d(), r[i] = void (7516 + -1 * -3505 + -11021));
      }
      else t.U = r = {};
      for (var s in e) {
        var c = r[s], u = e[s];
        void (1174 * 5 + -1773 * 3 + -19 * 29) === c ? (c = Ml(t, s, u, n), r[s] = c) : c.o(u, n);
      }
    }
  }
  x(o);
});
function Ml(x, o, t, e) {
  var n = o in x && x.ownerSVGElement === void 0, r = gc(t);
  return { o: function(i, a) {
    r.value = i, e = a;
  }, d: _r(function() {
    var i = r.value.value;
    e[o] !== i && (e[o] = i, n ? x[o] = i : i ? x.setAttribute(o, i) : x.removeAttribute(o));
  }) };
}
Z0("unmount", function(x, o) {
  if (typeof o.type == "string") {
    var t = o.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (-8550 + -95 * -90);
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
      a && (i.__$u = void (-1257 + -2 * 3109 + -65 * -115), a.d());
    }
  }
  x(o);
}), Z0("__h", function(x, o, t, e) {
  (e < -2018 * -2 + 7111 + -11144 || -3643 * -1 + 8384 + -12018 === e) && (o.__$f |= -5524 + 83 * 37 + 2455), x(o, t, e);
}), gt.prototype.shouldComponentUpdate = function(x, o) {
  var t = this.__$u;
  if (!(t && void (37 * 53 + -4975 + 2 * 1507) !== t.s || 41 * 52 + -7636 + 324 * 17 & this.__$f)) return !0;
  if (2 * 2215 + -8880 + 1 * 4453 & this.__$f) return !(-5039 * 1 + 5 * -289 + 6484);
  for (var e in o) return !0;
  for (var n in x) if (n !== "__source" && x[n] !== this.props[n]) return !(-325 * -28 + -8110 + -495 * 2);
  for (var r in this.props) if (!(r in x)) return !(9582 + -1 * 9582);
  return !(6558 * -1 + -67 * -41 + 2 * 1906);
};
function Cc(x) {
  return xt(function() {
    return gc(x);
  }, []);
}
function Jl({ analytics: x, cameraFacing: o, controller: t, createProtoMessage: e, onPhotoTaken: n, sessionToken: r }) {
  const i = Lt(null), { sunfish: a } = Xr(), { appState: s, handleAppStateChange: c, handleError: u } = En(), { cameraResolution: g, cameraService: h, onCameraResolutionChange: l } = Vl(i, o), C = Cc(void (-41 * 236 + 5587 + 4089));
  Se(() => {
    h != null && h["isStreaming"] && (t != null && t["isDetectorInitialized"]) && a && c(tt.RUNNING);
  }, [h == null ? void 0 : h["isStreaming"], t == null ? void 0 : t["isDetectorInitialized"], c, a]), Se(() => {
    if (s !== tt.RUNNING) return;
    if (!h || !t) throw new re("Cannot start detection");
    let A = -101 * -2 + 2202 + -2404, d = !1, v = 1 * 3316 + -211 * 17 + -271 * -1;
    const k = new jr(11060 + 5 * -2206);
    t.clearImagesForDuplicateDetection();
    async function D({ cameraService: O, canvasImage: J, controller: Ie, detection: U, detectionRecord: fe, onPhotoTaken: Ce }) {
      const Oe = {};
      Oe.width = J.width, Oe.height = J.height;
      const lt = Oe, ie = await ul(J), Ze = await O.getCameraProperties(), Xe = { ...Ze, detectionRecord: fe, hashedDetectedImagesWithTimestamp: Ie.getImagesForDuplicateDetection() }, rt = {};
      rt.sessionToken = r, rt.web = Xe;
      const je = rt, me = await e(ie, je), Ve = {};
      Ve.detection = U, Ve.imageResolution = lt;
      const Me = {};
      Me.image = ie, Me.data = Ve;
      const be = Me, Ee = {};
      Ee.imageData = be, Ee.content = me, Ee.webMetadata = Xe, Ee.controller = Ie, Ce(Ee);
    }
    async function M({ cameraService: O, controller: J }) {
      const Ie = Date.now();
      for (; O.isStreaming && !d; ) {
        if (kl(A, v)) {
          const { detection: je, image: me } = J.getBestImage() || {}, Ve = J.getDetectionRecord();
          if (me && je) {
            const Me = Date.now(), be = tc(k), Ee = {};
            Ee.width = me.width, Ee.height = me.height, x == null || x.trackCaptureProcess({ detection: je, imageResolution: Ee, deviceName: await O.getDeviceName(), averageFps: be, captureProcessDurationInMs: Me - Ie, facingMode: O.getCameraSettings().facingMode, instructionSet: await J.getInstructionSet() }), c(tt.WAITING);
            const Je = {};
            Je.cameraService = O, Je.controller = J, Je.canvasImage = me, Je.detection = je, Je.detectionRecord = Ve, Je.onPhotoTaken = n, await D(Je), J.restart();
          } else u(new re("Something went wrong during capturing an image"));
          return;
        }
        const U = O.takePhoto(), fe = {};
        fe.width = U.image.width, fe.height = U.image.height;
        const Ce = fe;
        let Oe;
        try {
          Oe = await J.processImage(U);
        } catch (je) {
          je instanceof Error && u(re.fromCameraError(je));
          return;
        }
        const lt = Date.now(), ie = lt - U.timestamp, Ze = Ln((-7468 + 4234 * 2) / ie);
        k.pushFixed(Ze);
        const Xe = {};
        Xe.processedImage = Oe, Xe.detectionTime = ie, Xe.fps = Ze, Xe.resolution = Ce, Xe.samVersion = J.samVersion;
        const rt = Xe;
        C.value = rt, Oe.isInCandidateSelection && (A === 59 + 12 * 167 + -2063 && (A = performance.now()), v++), l(Ce), await dr(Math.max(Ca.max - ie, Ca.min));
      }
    }
    const Y = {};
    return Y.controller = t, Y.cameraService = h, M(Y), () => {
      d = !0;
    };
  }, [x, e, s, h, t, c, u, n, l, C, r]);
  const m = {};
  return m.videoRef = i, m.cameraResolution = g, m.cameraService = h, m.detectionDetails = C, m;
}
const Qr = (x) => {
  const { height: o, width: t } = nc(x), e = (x.width - t) / 2, n = (x.height - o) / (10507 + 1 * -10505), r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = o, r;
}, hc = (x, o) => {
  const { height: t, width: e } = nc(x), n = ao(x.width, x.height), r = e - n * o * (-2844 + -197 * 11 + -1 * -5013), i = t - n * o * (-2 * 1347 + 14 + 298 * 9), a = (x.width - r) / (-6390 + 4 * 1598), s = (x.height - i) / (-2391 * 4 + 2 * -1607 + 12780), c = {};
  return c.shiftX = a, c.shiftY = s, c.width = r, c.height = i, c;
}, S0 = (x, o) => {
  const { shiftX: t, shiftY: e } = Qr(x), n = {};
  return n.x = o.x + t, n.y = o.y + e, n;
}, _l = (x, o) => ({ ...o, leftEye: { ...o.leftEye, center: S0(x, o.leftEye.center) }, rightEye: { ...o.rightEye, center: S0(x, o.rightEye.center) }, mouth: { ...o.mouth, center: S0(x, o.mouth.center) }, topLeft: S0(x, o.topLeft), bottomRight: S0(x, o.bottomRight), faceCenter: S0(x, o.faceCenter) }), pc = (x, o) => {
  const { faceCenter: t, faceSize: e } = x, n = bl(e, o), r = {};
  r.x = t.x, r.y = t.y - n;
  const i = {};
  i.x = t.x + n, i.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + n;
  const s = {};
  s.x = t.x - n, s.y = t.y;
  const c = {};
  return c.top = r, c.right = i, c.bottom = a, c.left = s, k0(c);
}, Ql = (x, o) => {
  const { bottomRight: t, faceCenter: e, topLeft: n } = o, r = {
    topLeft: n,
    width: t.x - n.x,
    height: t.y - n.y
  };
  ec(x, r, "rgba(255, 0, 0, 0.3)", !0), fn(x, e, "lime");
}, Ul = (x, o, t) => {
  const e = pc(o, t);
  Object.values(e).map((n) => fn(x, n, "orange"));
}, zl = ({ redfin: x, cameraResolution: o, detectionDetails: t, isImageMirror: e }) => {
  const {
    faceCameraOptions: { thresholds: n }
  } = $s(), r = Lt(null);
  if (Se(() => {
    if (!r.current)
      return;
    r.current.width = o.width, r.current.height = o.height, hl(r.current);
    const C = Qr(o), m = hc(o, n.outOfBoundsThreshold), A = xc(o);
    t.value && (Ql(r.current, t.value.processedImage.detectedFace), Ul(
      r.current,
      t.value.processedImage.detectedFace,
      o
    ), Zo(r.current, C, "lime"), Zo(r.current, m, "yellow"), Zo(r.current, A, "blue"), fn(r.current, t.value.processedImage.detectedFace.leftEye.center, "cyan"), fn(r.current, t.value.processedImage.detectedFace.rightEye.center, "cyan"), fn(r.current, t.value.processedImage.detectedFace.mouth.center, "cyan"));
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
  return h && (l["SAM version"] = h), u.length > 0 && (l["Invalid validators"] = u.join(", ")), /* @__PURE__ */ Z(
    vu,
    {
      ref: r,
      cameraResolution: o,
      detectionDetails: l,
      isImageMirror: e
    }
  );
};
function ql(x) {
  return /* @__PURE__ */ Z("rect", { fill: "#000", ...x, rx: "50%" });
}
function $l(x) {
  const [o, t] = nt(!1), e = () => t((i) => !i), n = "" + o;
  _0(() => {
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
const e1 = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function t1({ cutOut: x, height: o, width: t }) {
  const e = Lt(null), { key: n } = $l(e);
  return /* @__PURE__ */ Z("div", { ref: e, style: e1, children: /* @__PURE__ */ Z("svg", { viewBox: `0 0 ${t} ${o}`, children: [
    /* @__PURE__ */ Z("defs", { children: [
      /* @__PURE__ */ Z("mask", { id: "placeholder", children: [
        /* @__PURE__ */ Z("rect", { fill: "#fff", height: "100%", width: "100%" }),
        x
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
function n1({ fullOverlay: x, resolution: o }) {
  const t = ml(o), e = `${t.height * 100}%`, n = `${t.width * 100}%`, r = `${t.shiftX * 100}%`, i = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ Z(
    t1,
    {
      cutOut: x || /* @__PURE__ */ Z(ql, { height: e, width: n, x: r, y: i }),
      height: o.height,
      width: o.width
    }
  );
}
const x1 = async () => WebAssembly.validate(new Uint8Array([-16697 + -283 * -59, -1816 + 1 * -131 + 2044, -1 * -5407 + -679 * -11 + -12761, 3698 * 2 + -7950 + 663, 8135 + 15 * 367 + -13639 * 1, 0, 0, -9561 * 1 + 4284 + -1759 * -3, 706 + 27 * -105 + 2130, -8526 + 2 * -2739 + -14009 * -1, 4642 + 1546 * -4 + 1543, 9266 + -1092 * 4 + -1 * 4802, 5 * 1803 + 5 * 1427 + -16150, -4612 * 2 + -2099 + 596 * 19, -1 * 8867 + 3779 + 5211, -2 * -1112 + 6478 + 1 * -8699, 17995 + -947 * 19, -9577 + -3500 * 1 + 13078, -239 * 37 + -4897 + 229 * 60, -3789 + 131 * 29, 8090 + 971 * 10 + -17790, 4336 + -653 * -2 + -5641, 3609 + 3601 * -1, -2 * -1405 + 1 * 7027 + 9837 * -1, 1 * -814 + -1549 + 2428, -3819 + 1 * -7102 + 163 * 67, 253, 6743 + -3364 * 2, 7 * -1217 + -3669 + 12441, 3709 + -43 * -129 + -4579 * 2, -6203 * -1 + -7291 + 1099]));
(function(x, o) {
  function t(a, s, c, u, g) {
    return ue(c - 276, a);
  }
  function e(a, s, c, u, g) {
    return ue(g - 399, c);
  }
  function n(a, s, c, u, g) {
    return ue(a - 680, c);
  }
  const r = x();
  function i(a, s, c, u, g) {
    return ue(s - -108, c);
  }
  for (; ; )
    try {
      if (-parseInt(e(809, 803, "YK$j", 801, 792)) / 1 + parseInt(e(762, 787, "oDSp", 754, 765)) / 2 + -parseInt(n(1053, 1040, "Dto$", 1073, 1030)) / 3 + parseInt(n(1067, 1064, ")y]#", 1065, 1065)) / 4 * (-parseInt(n(1060, 1041, "A8O[", 1062, 1046)) / 5) + -parseInt(t("Oa)h", 684, 679, 698, 661)) / 6 + parseInt(e(770, 781, "l^!l", 787, 791)) / 7 * (-parseInt(e(796, 789, "44S8", 785, 796)) / 8) + parseInt(i(280, 288, "iTjl", 284, 298)) / 9 * (parseInt(n(1078, 1075, "qMs!", 1092, 1078)) / 10) === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Px, 866778);
function ue(x, o) {
  const t = Px();
  return ue = function(e, n) {
    e = e - (14061 + 13697 * -1);
    let r = t[e];
    if (ue.TISIWO === void 0) {
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
      ue.YbWwwf = u, x = arguments, ue.TISIWO = !0;
    }
    const a = t[3911 + 5099 * -1 + -297 * -4], s = e + a, c = x[s];
    return c ? r = c : (ue.GeaXmS === void 0 && (ue.GeaXmS = !0), r = ue.YbWwwf(r, n), x[s] = r), r;
  }, ue(x, o);
}
async function o1() {
  function x(u, g, h, l, C) {
    return ue(C - 406, l);
  }
  const o = {};
  function t(u, g, h, l, C) {
    return ue(g - -282, l);
  }
  o[c(-359, "m(&X", -369, -378)] = Us, o[e(43, "M9(A") + "h"] = 256;
  function e(u, g, h, l, C) {
    return ue(u - -340, g);
  }
  const n = await window[x(800, 786, 779, "E!^D", 790) + "o"][s(-482, -460, "(DZO", -475, -476) + "e"][x(778, 766, 767, "M9(A", 773) + c(-368, "%6IB", -390, -371) + "y"](o, !0, [t(131, 112, 129, "VC&f") + "pt", e(28, "5CNF") + "pt"]), r = Uint8Array[c(-407, "3^BW", -404, -393)](Array(16)[s(-434, -442, "Dto$", -436, -446)](-1787 + 24 * 83 + -205)), i = window[c(-389, "YK$j", -382, -375) + "o"][t(82, 88, 75, "hFQI") + x(790, 826, 797, "hFQI", 810) + s(-461, -472, "eJLg", -491, -481)](r), a = {};
  a[x(769, 768, 801, "FH@2", 787)] = n;
  function s(u, g, h, l, C) {
    return ue(C - -853, h);
  }
  function c(u, g, h, l, C) {
    return ue(l - -757, g);
  }
  return a.iv = i, a;
}
function Px() {
  const x = ["mWBcICkocG", "EmovFrxcIq", "eMqOW41IWQddTSklimoByvZdNa", "e3xdMMDP", "EYLOWRWBsIZdVSokjgRcGuJdKa", "WOVdOSoYWRNdGq", "lrBcMmkjbW", "WPZcL0xcLGq", "pSkltCk+", "W5xcTSozWRtcSa", "hSkPsmoDnmkqxKmSjSoRWQhdQW", "rsz3WPe", "hSoieSk+z8oahW", "jCk8WRNdQSoyWOFcSdGpkbOycG", "mGVcK2xcKW", "EConWRTkpa", "W7JdKCobWRDNxM0MW453WP4", "WOldO8oPWOBdTG", "rf7cLa", "sKBdPJXE", "BmoqfmoRWOvleSooxCoqz8oSnG", "WRLLWQHgAW", "jSk+WRlcVCkDW5JdNGec", "WOCPlW", "WROzs8o9W6C", "WQnnwaZcQ8kgW48Aya", "W71st8oq", "FCosnYniW4pcKmk9W7dcLSo9W7K", "o8kffa", "WR95WRjezG", "oqVcK2FcLq", "WQpcL8kmW7uN", "yCoux8kjW51tWRfslgZdKmo0W50", "q0tcKmotW4W", "BCosWQJcGCk+WQdcVa", "WRBdVmo8BeJdVLlcRSoXW4ldMmow", "ruVdVJW", "lCokWQlcOG", "i8oUa8o6cmkBu8kbC3erW5Chhq", "kSk7WQFdI8o/W6e1jtq", "W60/W7KbjCoCWRW/Ea/cMfpcGq", "WPaMo8oGwq", "EcPQWR8rsIRcM8ofk1tcU20", "eCoTrYJcGIBdIwlcIdZcKKJdVq", "W47cGMbFs8kqqr3dR8oTWQK", "WRxdTmo8calcM1hcP8oT"];
  return Px = function() {
    return x;
  }, Px();
}
async function r1(x) {
  const { iv: o, key: t } = await o1(), e = {};
  function n(g, h, l, C, m) {
    return ue(C - -503, g);
  }
  e[s("eJLg", -311, -311)] = Us, e.iv = o;
  const r = await window[c(894, 882, "Ecny", 915, 899) + "o"][s("qXaK", -278, -301) + "e"][n("YK$j", -123, -109, -129) + "pt"](e, t, x), i = await window[u(761, 747, 769, 778, "cV8#") + "o"][n("S[(4", -86, -102, -101) + "e"][u(769, 759, 766, 788, "zWes") + u(751, 728, 741, 738, ")y]#")](u(737, 730, 746, 738, "VC&f"), t), a = {};
  a[c(905, 894, "qXaK", 886, 898) + "ge"] = r, a[c(871, 845, "[Eqi", 857, 864)] = i, a.iv = o;
  function s(g, h, l, C, m) {
    return ue(l - -700, g);
  }
  function c(g, h, l, C, m) {
    return ue(m - 493, l);
  }
  function u(g, h, l, C, m) {
    return ue(g - 361, m);
  }
  return a;
}
(function(x, o) {
  function t(a, s, c, u, g) {
    return De(s - -539, u);
  }
  function e(a, s, c, u, g) {
    return De(c - 863, u);
  }
  function n(a, s, c, u, g) {
    return De(c - -337, s);
  }
  const r = x();
  function i(a, s, c, u, g) {
    return De(s - 992, g);
  }
  for (; ; )
    try {
      if (parseInt(e(1141, 1156, 1146, "#kFU", 1141)) / 1 * (-parseInt(e(1133, 1156, 1144, "n0dL", 1157)) / 2) + parseInt(i(1262, 1268, 1258, 1260, "nB1)")) / 3 + parseInt(i(1252, 1259, 1261, 1271, "!IoE")) / 4 + -parseInt(t(-277, -276, -270, "#pfs", -278)) / 5 + -parseInt(n(-56, "*J5%", -66, -66, -59)) / 6 + parseInt(e(1135, 1137, 1145, "nB1)", 1133)) / 7 + parseInt(i(1250, 1252, 1262, 1254, "8^H3")) / 8 * (parseInt(t(-276, -280, -269, "#pfs", -268)) / 9) === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Tx, -268313 + -27861 * 2 + 532785);
function De(x, o) {
  const t = Tx();
  return De = function(e, n) {
    e = e - (-220 + -478 * -1);
    let r = t[e];
    if (De.bgMYni === void 0) {
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
      De.xMOqPB = u, x = arguments, De.bgMYni = !0;
    }
    const a = t[-2 * 3680 + -4244 + 11604], s = e + a, c = x[s];
    return c ? r = c : (De.mwYuBa === void 0 && (De.mwYuBa = !0), r = De.xMOqPB(r, n), x[s] = r), r;
  }, De(x, o);
}
function Tx() {
  const x = ["WRFcMCkNW4q", "W4ldT8k9FCoXWPZdHsZcI8oPW5JdTa", "zCobb1Oxe8opW7fNW4JdHh4s", "W7NdS8oOW6NdUmkcxq", "EgnDFwG", "WRxcICoqW48vo8kxWPjcW4q", "sgnOEmkQyuTvWPddRW", "W71ftCksW4FdVM1hwLbuW5/dHW", "WRKmlrZcNmktW53cR8oUnq", "WRNcGSouW4PGwSk/WPvTW47cHwq", "W7ddHfxdKZq", "eCk7WOtcSCoCW5jK", "jmoBW68EW4S", "oSoxuCohWPldHmoHW53dOmoJma", "WRtcImosW4HMjmk4WPrlW73cJG", "zf0TrCov", "W6a4y1SQ", "jxDGW45xxSo2bSoknSoJ", "WOmegCkunIGBEmkLW6pdN8o1", "WOaFWRrXdtBcKHq5W67cUCoP", "WPJcRvxcUSk2W5fEW4NcH8kyWRqH", "W55uW68QEa", "zCoabL4remkwW5DAW4VdTeu", "iYWjW5uoW7vqW4epFa", "D25sAf8", "AWn1cSonW7lcHZGuvSoH"];
  return Tx = function() {
    return x;
  }, Tx();
}
function i1(x) {
  const o = new ArrayBuffer(x[n(256, 247, 249, 250, "*887") + "h"]), t = new Uint8Array(o);
  for (let i = 4111 + 1 * 8493 + -12604, a = x[e(1111, 1109, 1109, 1104, "Q@@h") + "h"]; i < a; i++)
    t[i] = x[r(1044, 1043, "Q@@h") + e(1109, 1109, 1101, 1108, "aGd3")](i);
  function e(i, a, s, c, u) {
    return De(s - 831, u);
  }
  function n(i, a, s, c, u) {
    return De(a - -22, u);
  }
  function r(i, a, s, c, u) {
    return De(i - 786, s);
  }
  return o;
}
(function(x, o) {
  function t(s, c, u, g, h) {
    return he(u - 943, s);
  }
  const e = x();
  function n(s, c, u, g, h) {
    return he(g - 966, c);
  }
  function r(s, c, u, g, h) {
    return he(c - 921, h);
  }
  function i(s, c, u, g, h) {
    return he(s - -732, g);
  }
  function a(s, c, u, g, h) {
    return he(g - 58, s);
  }
  for (; ; )
    try {
      if (-parseInt(n(1665, "lrJg", 1584, 1608, 1615)) / 1 * (parseInt(a("TteR", 726, 555, 658, 583)) / 2) + -parseInt(r(1432, 1524, 1460, 1627, "eQ2C")) / 3 * (parseInt(n(1685, "N2)1", 1492, 1571, 1590)) / 4) + parseInt(r(1453, 1461, 1493, 1523, "lrJg")) / 5 + parseInt(t("!4TB", 1443, 1501, 1595, 1579)) / 6 * (-parseInt(n(1566, "MG#v", 1673, 1600, 1518)) / 7) + -parseInt(n(1477, "MG#v", 1359, 1447, 1409)) / 8 * (-parseInt(i(-71, -178, -159, "hWyh", -72)) / 9) + -parseInt(a("w$5[", 744, 786, 681, 741)) / 10 + parseInt(a("hg$D", 586, 653, 612, 632)) / 11 === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Vx, -174550 + -73303 * -1 + 266061);
function Vx() {
  const x = ["WQRcRCoVWQlcHa", "ttpcTb7cQa", "ogr9WRWT", "WRldRmoSW6xcQG", "s8kKkSknW4O", "nmkVzYtcPa", "WOxdMCkwW4NdGG", "WOP6A8ogca", "aIFcLCknvW", "W58gqmoMjG", "W7hdUb3dT8oO", "W6m0WQxcJ8oV", "BmkfC0Ch", "idtdUqdcOSk7j8ogrCk3wSoT", "WQBdTbDKDW", "WOZdHXdcICob", "FM1wWRWP", "W4z8lSkokG", "cCorW7bvCa", "Fx9Vdda", "e8oXuKa", "W5zun8k9sW", "w8oXWOLsWPC", "WQWdBvFdQG", "W7PbkrhdPW", "WRWOpSoSnG", "W7lcUmkuWRNcKq", "kSkcySo4Dq", "jmk3W4XIAq", "wtpcQIFcHG", "lXJdPxnd", "buJdOwT9", "pepdNMW2WO/dTq", "bCkoDsJcHa", "BSoUF8kgW5K", "kCoSECkjW7PXuq", "xCkSWOyEwa", "qCk3brBdK8knW5SlW7dcJSo+WO4", "Fe9DWROq", "vgtdKXyE", "jeNcV8otlW", "W6pcLJCzaW", "FdRdPxLB", "B0NdOwPh", "asJdUZzB", "wHpcQSka", "WOFdJ8o8W6RdGG", "BxpcRI/dPG", "B8k9WPKiW6K", "DYxcTHlcGq", "W4jSlmkoDq", "WPVcUCooFrG", "W6WPld7cGW", "W6XxpCkqW6m", "u8owWQq1WQe", "W4xcThelhSk1W4BdKJSYW5i/WOW", "FMBcUNVdNW", "iSkIg0ZcSW", "W7xdUxpcLgq", "WQrusbtcMW", "WRVdJmoWW6ldGq", "W7PckSkgtq", "WO0Ywmoeja", "v2ddOL80", "DSoFW7Lcmq", "WRWkw0m", "WOmDtSo/z3tcGCo1sSkO", "WOFdHG0mBq", "jSoacrBcTa", "bCosA0BcQa", "W6NdS8oknSk0", "sMJdKvei", "WQbwWPJcQSoV", "WQJcOColD8kcWRhdI8kUhrW", "W7xcMNtcI8onmCoAEK53", "gmoNBHVcOG", "y1ZcRvRdGq", "WP3dM8kMWPxdTG", "WQxcSmo9qtC", "W78kqmoSCq", "dKZdTtVcUW", "sCkfCtqA", "W5tcQ8krWR7dPW", "jvNcPqhdOG", "W4pcJmo7CWmvzq", "tvpcJvZcRW", "WOhcNSoDWRldMq", "W4tdQc9WDW", "W5XeW5RcISkk", "WOjAWOZcNu0", "WP3dISk3WRFdIW", "dSkTgbdcRG", "mWddRdzx", "W5i9jghcTSkwWRz+AfW", "W6Sth8oiW5e", "xIdcGSkQpW", "y8k3nW/cHG", "W448iKOv", "W7Kls1VdPW", "wN/cQSkJwq", "oMtdGSoSWRq", "WPrRemkcW6K", "W5qPqtG/", "aSkGxbxcLa", "BN8RW7OG", "W6/cGvnRjW", "rhFcUHZcTG", "hCkSWQFdLrG", "v3ldICkBW5G", "W7FdNmoinSkb", "W5FcH0Hmmq", "tmobWQC0WO8", "W7Psl8kOW7y", "WP3cLmkPs1e", "pCkWWOzPta", "s8oxWO9wW7a", "gSkWW5JdQ20", "WRXiFGtcTa", "W7FdK8kRlCkQ", "WQ18vX/cQW", "u0KkW4O", "WQJcGSoyWRlcIq", "W44FbvqW", "W7pcN3hcJSoAhSoeDKPQ", "W60Py8oakG", "fZ/cPwj/", "j8kwWRRdOeC", "WP8kDSoXW4ldOWldGCocW5m", "W63cV2n1cG", "W5DJwmo5WPW", "kSoqkmkqW44", "zSoxWOCHW5u", "dmkWWQNdMLa", "WQqydwddUG", "WOPlv8oldq", "FwZcPve", "bSoGW5nZnW", "Aum3W7yv", "WPlcN3RcJey", "WQxdOSowW4/cMG", "WORdRSkiWO3dQW", "f8kdrr4", "jgRcK8oenG", "WR7dP8k/WQJdOG", "vSkDCZmt", "WOdcRSo7vdq", "WPtcUCkJWR7dGG", "WQBcTGbOta", "WOaCs8o9E1tcNSoBE8kc", "WQ9QWQBcSCoo", "W6JdJCkHW57cJq", "W7iSvcCn", "WOnfWRBcPmog", "B2ldPMCj", "WQmBEwJdNW", "pmoZWObsW7q", "W5tcLmktWOBcVW", "WRPnwCoTnG", "nSk4zJpcQW", "zt3dG2iw", "qmk1cHtdLmkpWQCzW5FcI8oQWR04", "W4hdGmorW6xdJmoZkq", "W5L1ftpcTa", "W5LpgrlcHa", "vM0bW7He", "hSktW6CFsG", "WRNdLSklWQVdQq", "v2tdHXyF", "WPxdQSkPWPhcRG", "j8kRW5vPrq", "nmkTFqJcVa", "WQFdHmoDW43dVq", "jCkDpmkRxq", "bxxcS8k9ya", "W5ldOt9Mbq", "xCkrW5HIDq", "W6fHvCoaW4e", "wfOaW5id", "amkqo8ospa", "WOeFtmo+ls7dV8olAmkCWPxdOCoO", "ohpcMSoZWQa", "WPPCWOpdVu8", "lHbQW54N", "gGpdRejP", "W4BdU8kklSk2", "imoUC2FcGa", "p2VdU8okWQS", "n8oKW5jsnW", "W5qYB8ovEa", "BLWrW7qD", "WOuPkWZcVq", "WOGKEmojoG", "xSk3WOb7tG", "bqxdPCkxWR8", "W63cGSojWPpcMG", "F0DvWO4R", "gKJdS2LX", "W6lcOx9Dja", "WRtdNSoDW7BdGW", "oCoiWQjLW4u", "e3xdM3ddPmkgn8owWQJdVmkUfq", "WRhdGxjOhq", "kmo6W4Hhmq", "WPH2WRRcGhK", "FM1gWQ4/", "hCk/rIRdPW", "W70fjuOI", "W7hcLxtcJSkwqSoUsxjMW7fi", "smoIsmoXW50", "WPhdOsVdOmou", "u8kkiwOX", "oCkJW5NdTxK", "W4ynW7/cRq", "j8k7W5XPAW", "WOxcLtFdOmoi", "pbxdT2zj", "cCkayqJcHG", "WQqisw/cGG", "eZ7dIX1H", "ohVcVmortq", "W6eRA8oxsG", "WPFdJSoZW5NdPmosWOHrW6KKpJ8l", "WPxcO8olttu", "fCo1CxdcSG", "WOZcLSo/WOpcVq", "W6Pfo8kqh8oQW6T3lCkI", "W5xcNZVcQK4", "k8ozECkSW50", "pbVdTgnH", "kmoRB1pcRG", "qur7uXy", "W7rTFSkVW7q", "WOFdUxddRCo1", "rSk9crRcLSoqW7S4W7FcIW", "t8oqCmkrWQS"];
  return Vx = function() {
    return x;
  }, Vx();
}
function he(x, o) {
  const t = Vx();
  return he = function(e, n) {
    e = e - (979 * -5 + -2 * 1764 + 8872);
    let r = t[e];
    if (he.PMyMuf === void 0) {
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
      he.dfdsQL = u, x = arguments, he.PMyMuf = !0;
    }
    const a = t[7879 + -3788 * -1 + -11667], s = e + a, c = x[s];
    return c ? r = c : (he.TIyJsR === void 0 && (he.TIyJsR = !0), r = he.dfdsQL(r, n), x[s] = r), r;
  }, he(x, o);
}
function a1() {
  function x(u, g, h, l, C) {
    return he(h - 895, l);
  }
  const o = a(1308, 1341, 1227, "U7Tx", 1336) + i(636, 634, 687, 572, "x43*") + i(581, 611, 494, 581, "w^^A") + r(-18, "aYFZ", 155, 38) + r(69, "@%Jg", 102, 119) + a(1169, 1284, 1325, "@%Jg", 1258) + i(624, 592, 570, 565, "hg$D") + x(1490, 1642, 1577, "a$uP") + a(1236, 1404, 1390, "#3Is", 1326) + r(75, "@%Jg", 183, 123) + x(1617, 1561, 1557, "qwm@") + r(39, "rp15", 68, 113) + r(12, "ih]6", 39, 120) + i(656, 708, 614, 601, "BbvA") + a(1377, 1202, 1315, ")^Yo", 1259) + x(1500, 1472, 1576, "Lnc!") + s(454, 554, 463, 447, "2^3g") + x(1372, 1414, 1477, "w$5[") + x(1303, 1344, 1404, "LhZn") + s(412, 337, 455, 535, "WHwe") + i(687, 576, 726, 785, "2^3g") + i(609, 502, 708, 671, "soae") + x(1541, 1367, 1475, "1Da0") + a(1426, 1411, 1292, "!bGO", 1345) + r(-156, "TteR", -61, -60) + i(595, 608, 527, 590, "lrJg") + x(1534, 1463, 1569, "Fk3b") + s(430, 466, 492, 454, "1Da0") + a(1218, 1147, 1153, "$jVj", 1231) + a(1217, 1305, 1283, "h]^O", 1300) + a(1238, 1046, 1129, "h]^O", 1137) + r(-10, "a$uP", -127, -14) + r(67, "ih]6", 4, 4) + s(497, 674, 573, 636, "(eit") + s(395, 443, 487, 458, "3jRK") + x(1583, 1562, 1533, "!bGO") + x(1449, 1471, 1541, "Lnc!") + x(1489, 1527, 1452, "L6^%") + r(-31, "MG#v", 70, 58) + a(1432, 1343, 1237, "3jRK", 1332) + s(517, 363, 444, 490, "xHco") + x(1323, 1282, 1366, "BbvA") + i(642, 702, 620, 726, "aYFZ") + r(-22, "^BZ(", -41, 35) + r(-20, "TteR", 97, 71) + a(1371, 1371, 1377, "Eg[i", 1296) + x(1377, 1390, 1418, "xHco") + x(1503, 1643, 1532, "N2)1") + s(525, 476, 559, 553, "w^^A") + r(74, "x43*", -60, -32) + x(1241, 1238, 1346, "!bGO") + a(1211, 1259, 1185, "a$uP", 1264) + x(1438, 1337, 1413, "N2)1") + x(1327, 1338, 1399, "Eg[i") + x(1410, 1446, 1393, "a$uP") + a(1100, 1310, 1214, "L6^%", 1195) + s(583, 638, 532, 467, "lrJg") + s(653, 569, 578, 574, "MG#v") + i(600, 512, 520, 504, "x43*") + x(1289, 1432, 1360, "$9Rg") + r(86, "Qcwa", 117, 112) + x(1377, 1361, 1408, "U7Tx") + r(4, "#3Is", -129, -81) + x(1560, 1448, 1534, "TteR") + s(464, 375, 399, 498, "hWyh") + r(-145, "6!x5", 0, -72) + x(1647, 1554, 1530, "w$5[") + a(1198, 1326, 1182, "EBLZ", 1284) + a(1209, 1138, 1161, "2^3g", 1204) + i(489, 558, 572, 605, "$9Rg") + a(1200, 1377, 1241, "hWyh", 1295) + s(494, 678, 602, 714, "bYX6") + r(-140, "Qcwa", -51, -90) + s(710, 652, 596, 570, "DNKc") + i(507, 429, 520, 392, "1Da0") + a(1139, 1213, 1260, "6!x5", 1200) + x(1279, 1431, 1391, "xHco") + r(7, "a$uP", -123, -35) + i(674, 628, 706, 758, "(eit") + r(-9, "hg$D", 192, 90) + a(1136, 1155, 1140, "!bGO", 1185) + r(-76, "#3Is", 15, -84) + a(1309, 1441, 1429, "aYFZ", 1328) + i(503, 589, 520, 439, "#3Is") + r(-43, "!4TB", -61, 33) + x(1429, 1339, 1347, "hWyh") + x(1423, 1562, 1506, "aYFZ") + x(1289, 1351, 1382, ")^Yo") + r(30, "3jRK", -47, -11) + a(1374, 1201, 1205, "Fk3b", 1265) + a(1077, 1206, 1294, "DNKc", 1189) + r(-19, "a$uP", -59, 44) + s(464, 507, 521, 559, "eQ2C") + s(573, 456, 471, 503, "Qcwa") + x(1498, 1506, 1466, "L6^%") + i(660, 640, 660, 731, "!4TB") + x(1391, 1272, 1375, "w$5[") + i(622, 505, 681, 620, "xHco") + a(1272, 1264, 1200, "eQ2C", 1209) + x(1322, 1284, 1380, "c#@a") + a(1210, 1197, 1213, "N2)1", 1230) + i(696, 657, 705, 595, ")^Yo") + i(638, 683, 567, 609, "B13D") + r(-160, "B13D", -47, -85) + x(1569, 1447, 1481, "a$uP") + x(1676, 1658, 1562, "WHwe") + a(1183, 1179, 1183, "aYFZ", 1184) + i(673, 638, 778, 712, "N2)1") + s(658, 605, 550, 524, "3jRK") + i(670, 664, 580, 608, "c#@a") + i(650, 667, 568, 687, "xHco") + r(-92, "U7Tx", -7, -41) + a(1268, 1215, 1085, "!4TB", 1158) + s(555, 667, 603, 671, "L6^%") + i(556, 657, 508, 663, "U7Tx") + i(533, 600, 649, 583, "Z*%i") + s(360, 537, 454, 433, "^BZ(") + x(1465, 1496, 1443, "aYFZ") + a(1076, 1118, 1187, "LhZn", 1130) + s(481, 387, 450, 447, "#3Is") + a(1278, 1308, 1172, "DNKc", 1221) + x(1487, 1598, 1516, "ih]6") + s(424, 530, 522, 505, "Z*%i") + x(1364, 1483, 1394, "#3Is") + s(512, 321, 431, 461, "c#@a") + i(685, 613, 624, 606, "w$5[") + r(-89, "rp15", -99, -99) + r(-4, "L6^%", -171, -106) + s(516, 500, 456, 414, "rp15") + x(1360, 1413, 1344, "$9Rg") + x(1548, 1374, 1472, "DNKc") + x(1449, 1414, 1406, "^BZ(") + r(145, "rp15", 71, 49) + r(29, "Eg[i", -95, -88) + x(1497, 1420, 1455, "eQ2C") + r(152, "Fk3b", 103, 57) + i(574, 609, 627, 669, "$9Rg") + r(83, "h]^O", -17, -25) + i(629, 723, 669, 570, "aYFZ") + s(534, 551, 534, 537, "MG#v") + s(723, 711, 614, 499, "NgKy") + s(606, 507, 605, 684, "soae") + s(604, 568, 563, 561, "Eg[i") + a(1275, 1338, 1170, "BbvA", 1227) + x(1470, 1524, 1484, "MG#v") + r(-95, "w$5[", 39, -26) + i(559, 607, 504, 592, "aYFZ") + r(67, "lrJg", -60, -18) + s(526, 667, 556, 610, "TteR") + r(-111, "!4TB", -139, -36) + a(1177, 1065, 1201, "a$uP", 1170) + a(1324, 1216, 1213, "bYX6", 1316) + a(1261, 1211, 1383, "Z*%i", 1293) + s(556, 496, 516, 487, "eQ2C") + s(445, 366, 427, 431, "Lnc!") + x(1568, 1477, 1473, "lrJg") + s(497, 519, 464, 516, "x43*") + i(527, 503, 489, 502, "Qcwa") + r(-106, "XpR)", -53, -76) + a(1115, 1222, 1314, "Eg[i", 1199) + i(652, 766, 737, 684, "@%Jg") + a(1175, 1319, 1231, "Fk3b", 1237) + s(567, 518, 620, 621, "3jRK") + i(675, 790, 587, 728, "#3Is") + a(1263, 1217, 1275, "1Da0", 1317) + r(-11, "w^^A", -164, -102) + i(700, 596, 670, 690, "XpR)") + a(1154, 1164, 1276, "aYFZ", 1229) + a(1267, 1200, 1053, "TteR", 1154) + r(-38, ")^Yo", -15, -10) + x(1410, 1495, 1497, "eQ2C") + a(1082, 1026, 1242, ")^Yo", 1134) + s(403, 610, 504, 605, "Lnc!") + a(1299, 1181, 1235, "N2)1", 1224) + x(1384, 1427, 1384, "hg$D") + x(1496, 1497, 1432, "x43*") + r(-165, "EBLZ", -111, -96) + i(705, 666, 652, 779, "$9Rg") + s(433, 469, 525, 451, "WHwe") + a(1125, 1088, 1140, "pEkP", 1135) + i(513, 414, 460, 575, "hg$D") + s(577, 552, 496, 604, "lrJg") + r(60, "ih]6", 128, 109) + r(42, "Lnc!", 147, 59) + i(708, 661, 809, 655, "rp15") + x(1306, 1475, 1403, "a$uP") + i(645, 587, 689, 734, "Fk3b") + r(207, "Z*%i", 39, 99) + x(1466, 1363, 1469, "#3Is") + s(505, 623, 612, 645, "lEw*") + a(1201, 1059, 1013, "NgKy", 1123) + s(481, 362, 406, 360, "!4TB") + i(605, 639, 696, 626, "pEkP") + x(1422, 1408, 1479, "x43*") + r(16, "TteR", -45, -68) + s(653, 586, 600, 488, "(eit") + i(666, 658, 717, 644, "N2)1") + x(1445, 1422, 1358, "eQ2C") + r(53, "B13D", -82, -8) + i(706, 668, 628, 766, "U7Tx"), t = window[i(504, 396, 525, 462, "Z*%i")](o), e = window[r(108, "N2)1", 92, 28)](t), n = i1(e);
  function r(u, g, h, l, C) {
    return he(l - -560, g);
  }
  function i(u, g, h, l, C) {
    return he(u - 30, C);
  }
  function a(u, g, h, l, C) {
    return he(C - 668, l);
  }
  function s(u, g, h, l, C) {
    return he(h - -51, C);
  }
  const c = {};
  return c[i(498, 436, 544, 543, "(eit")] = zs, c[a(1185, 1046, 1019, "Qcwa", 1121)] = Ju, window[s(404, 559, 479, 579, "rp15") + "o"][r(-108, "h]^O", 20, -40) + "e"][x(1594, 1583, 1482, "$jVj") + i(663, 634, 616, 558, ")^Yo")](r(59, "soae", -102, -15), n, c, !0, [x(1427, 1463, 1386, "3jRK") + "pt"]);
}
async function s1(x) {
  function o(r, i, a, s, c) {
    return he(c - 46, i);
  }
  function t(r, i, a, s, c) {
    return he(r - 85, i);
  }
  const e = await a1(), n = {};
  return n[t(698, "lEw*")] = zs, window[o(655, "Qcwa", 593, 485, 556) + "o"][t(653, "L6^%") + "e"][o(548, "NgKy", 541, 634, 585) + "pt"](n, e, x);
}
function Ex() {
  const x = ["AuaYW7VcLvz+WOvGF8oBWPVdSa", "jZGuxSkqW7dcRq3dOmoxD8ohtSoQ", "WOmYW6FcISkyWRpdMW", "a8o5WQhdQSkCW4ddQN7dICkNrGCwhG", "c8k9wG", "zY3dMhJdNSkwxxuGW4pcJCkic8oE", "xSo/Eu9JWRddQSoJ", "dXFdVmoEkJGJW60", "WRm/d8oSfv4i", "WR5+xCkevKGXW60lWPxdPG", "arK/jSo9mSk3WRRdTCo0W7VdTCoP", "WP/dLwDbW7XkWO3cUSkJF8oEEZW", "W4GfruiCW67cJYVcRSoFz2P7", "jtWrwCkxW7tcO2JdS8ojvSoBCG", "WPpcK8omWQnjqKy3WRX6W6bZFG", "W6RdMhX/zZLmW6m", "WONdO3LBW4dcOCkvW60", "aSoAWOegpCkVW6NcMSk1WRVcUq", "WPBdGmkjW70Dea0", "W6RdV8ocWONcGa", "Bxm1pe3dVdVcH8kqi8kIWQnjW4m", "WPqMyCk0WQBcH8kL", "WOL1WRZdOmoFW6FcSXeNWPmKu3u", "qJFcKCo/W73dUZ7cHaq2WRy0Dq"];
  return Ex = function() {
    return x;
  }, Ex();
}
(function(x, o) {
  function t(a, s, c, u, g) {
    return et(u - -997, g);
  }
  function e(a, s, c, u, g) {
    return et(u - -228, c);
  }
  const n = x();
  function r(a, s, c, u, g) {
    return et(a - -564, c);
  }
  function i(a, s, c, u, g) {
    return et(c - -198, s);
  }
  for (; ; )
    try {
      if (parseInt(t(-520, -517, -500, -510, "g3Uu")) / 1 * (parseInt(t(-520, -507, -520, -512, "qMk^")) / 2) + -parseInt(i(305, "90JA", 293, 298, 281)) / 3 * (parseInt(i(281, "LNtd", 286, 293, 298)) / 4) + parseInt(t(-495, -500, -506, -505, "$!yc")) / 5 + parseInt(i(315, "QGsa", 308, 296, 320)) / 6 + -parseInt(e(263, 274, "nQw]", 267, 267)) / 7 + parseInt(r(-68, -80, "$!yc", -74, -64)) / 8 * (parseInt(i(306, "Lxu6", 306, 304, 295)) / 9) + -parseInt(r(-63, -72, "RZJY", -63, -73)) / 10 * (-parseInt(t(-494, -504, -507, -498, "vqI2")) / 11) === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ex, 700892 + 22297 * -5 + 268321);
function et(x, o) {
  const t = Ex();
  return et = function(e, n) {
    e = e - (-53 * -149 + 6446 + -13859);
    let r = t[e];
    if (et.ZuavAs === void 0) {
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
      et.zdCWNH = u, x = arguments, et.ZuavAs = !0;
    }
    const a = t[-10 * -887 + -9958 + -2 * -544], s = e + a, c = x[s];
    return c ? r = c : (et.QYEgML === void 0 && (et.QYEgML = !0), r = et.zdCWNH(r, n), x[s] = r), r;
  }, et(x, o);
}
async function c1(x) {
  const { iv: o, key: t, message: e } = await r1(x), n = await s1(t), r = {};
  r[i(932, 923, 935, 927, "gnky")] = n, r.iv = o;
  function i(a, s, c, u, g) {
    return et(a - 434, g);
  }
  return r[i(923, 921, 916, 932, "cntP") + "ge"] = e, r;
}
function Lx() {
  const x = ["WPJcJ8ogWQZdQCkoW4LRxJtdOCoh", "W64aWOldHYhdKCkkWOmXza", "pCkFeSkQ", "W5/cU1jQWRvRW6yaWRPb", "kuvlFmkQxq4B", "WP3dUWaSWPy", "WQOcWRdcJSo6ggHJhmoNtWW", "nM4+f8of", "WRe3d8krcZfFCmkH", "W5fedW", "kx0AW7icWPlcOCk3WOPh", "sLu4", "EKZcJmoyucXMW7pdUW", "W7tcV8o1WOtdH8oCWPNcPH7cICoYW70", "W6bXW4e", "kmk2WQtdV2NcQJ40WOa", "WOtdGxFcNCk+W7udqSkGW5BcT8kqdG", "ig3cQZ/dHmowW7z3Cfzlne8", "zSofs8o2WPdcV8oqigvy", "W6VdKGzhBrqtWRm", "ECoVW7xdOh4", "WOtdG3xcKSk+W7Obv8klW4BcMSkyeq", "WOTsbJtdMCo/WPTGybi8dW", "W5ZdL8krW4RcQW", "gHj/W5vZs8oGW6yBW7GrWQldRq", "WQdcLCk2WPlcPK0AWRlcPW", "Cu4rAWpdQrr2WQ8", "W5awe8kFuWtcTX3dTG", "WPNcHmoaWQ/dRSkbW5rXusddSmoC", "WOPzadFdNSoWWOz6BWyTfa", "W71bW6/dLa", "eSoQWR3cImof", "q8kqcN0C"];
  return Lx = function() {
    return x;
  }, Lx();
}
(function(x, o) {
  function t(a, s, c, u, g) {
    return He(c - 899, a);
  }
  function e(a, s, c, u, g) {
    return He(g - 21, s);
  }
  function n(a, s, c, u, g) {
    return He(u - 781, a);
  }
  function r(a, s, c, u, g) {
    return He(a - 303, s);
  }
  const i = x();
  for (; ; )
    try {
      if (parseInt(r(753, "F@o^", 755, 755, 742)) / 1 + parseInt(r(771, "og2@", 783, 764, 782)) / 2 * (-parseInt(r(747, "GQj5", 741, 754, 733)) / 3) + -parseInt(r(754, "oQ^)", 758, 753, 759)) / 4 * (-parseInt(e(469, "ya8u", 453, 449, 464)) / 5) + -parseInt(r(769, "qZeb", 762, 781, 782)) / 6 + parseInt(t("SLa]", 1352, 1340, 1343, 1334)) / 7 + -parseInt(r(757, "GH*q", 768, 761, 774)) / 8 * (parseInt(r(748, "F@o^", 740, 748, 764)) / 9) + parseInt(n("YO[e", 1225, 1225, 1237, 1238)) / 10 * (parseInt(r(745, "j**r", 745, 733, 742)) / 11) === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Lx, 1 * -449249 + 439524 + 382960);
function He(x, o) {
  const t = Lx();
  return He = function(e, n) {
    e = e - (-3 * -1174 + 5327 + -3 * 2803);
    let r = t[e];
    if (He.ACWjZO === void 0) {
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
      He.kCjHTN = u, x = arguments, He.ACWjZO = !0;
    }
    const a = t[7264 + -799 * 5 + 3269 * -1], s = e + a, c = x[s];
    return c ? r = c : (He.vJQgUT === void 0 && (He.vJQgUT = !0), r = He.kCjHTN(r, n), x[s] = r), r;
  }, He(x, o);
}
async function g1(x) {
  const o = await window[i(265, 273, 281, 275, "DJg&") + "o"][n(-524, "j%wH") + "e"][i(294, 286, 290, 302, "5$fI") + "t"](r(-125, -125, -130, "R$l2"), x);
  function t(a, s, c, u, g) {
    return He(c - 833, a);
  }
  function e(a, s, c, u, g) {
    return He(g - 234, s);
  }
  function n(a, s, c, u, g) {
    return He(a - -979, s);
  }
  function r(a, s, c, u, g) {
    return He(s - -574, u);
  }
  function i(a, s, c, u, g) {
    return He(s - -184, g);
  }
  return Array[i(261, 263, 279, 253, "YO[e")](new Uint8Array(o))[t("Mb1)", 1298, 1292)]((a) => a[r(-141, -126, -137, "w!&M") + e(694, "xC08", 697, 700, 698)](2731 * -3 + 1 * 4765 + 21 * 164)[t("F@o^", 1279, 1273) + n(-518, "SLa]")](8405 + 1 * -5675 + -2728, "0"))[e(674, "og2@", 675, 672, 686)]("");
}
function ct(x, o) {
  var t = Nx();
  return ct = function(e, n) {
    e = e - (-379 * 4 + 20 * -35 + 2457);
    var r = t[e];
    if (ct.EZbytg === void 0) {
      var i = function(g) {
        for (var h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", C = "", m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (var k = 0, D = l.length; k < D; k++)
          C += "%" + ("00" + l.charCodeAt(k).toString(16)).slice(-2);
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
      ct.sAXXBH = a, x = arguments, ct.EZbytg = !0;
    }
    var s = t[0], c = e + s, u = x[c];
    return u ? r = u : (ct.JaZAnZ === void 0 && (ct.JaZAnZ = !0), r = ct.sAXXBH(r, n), x[c] = r), r;
  }, ct(x, o);
}
function Nx() {
  var x = ["BbBdOSktx1dcO0rcWR4Hd8kY", "CL7cOdekW4pdN8k0b8oR", "W6BdL1bUwCkMxmkIW5ZcU1vwFq", "W6tdLLrLuCkUpCklW5ZcKxng", "oCkUWQBdNKrTWQFdSmo5W4xdTq", "AX/dGmo1WQaYWRpdUSompIC", "WOT9WRjeo8kuWR8", "WP4QBgavWQvOF8kOW6FcIqddVq", "W5OUtbjXuI4aB8oCB3u", "W4uMu8kDxSocCt81EZ4G", "W7ONaSoSyCoApctcUmk4W6BcJW", "dSoXWP3cGCohcu/dHh1rW7KLnG", "W6hcTxNcMSkdtmkHWOyanW", "oCkRWQNdMuejW5BdRmoaW5hdLSogoa", "wNeCWOVdGCoPvCoQqSo4W5JcLg4", "W6RcHmkqrSoJW6aXth5hWOpdVH0", "WP0QyMqqWQbTsCkeW6dcKGtdHa", "W7ldS8oIu0rrlq"];
  return Nx = function() {
    return x;
  }, Nx();
}
(function(x, o) {
  var t = x();
  function e(s, c, u, g, h) {
    return ct(u - 809, g);
  }
  function n(s, c, u, g, h) {
    return ct(s - 543, g);
  }
  function r(s, c, u, g, h) {
    return ct(s - 38, u);
  }
  function i(s, c, u, g, h) {
    return ct(s - -620, h);
  }
  for (; ; )
    try {
      var a = parseInt(r(294, 299, "%TgY", 300, 301)) / 1 + -parseInt(r(290, 288, "2OI$", 290, 297)) / 2 * (parseInt(i(-367, -363, -375, -361, "rpu5")) / 3) + -parseInt(n(786, 778, 792, "T@#q", 781)) / 4 + parseInt(e(1068, 1073, 1064, "0i*w", 1061)) / 5 + -parseInt(n(784, 782, 791, "kwxT", 793)) / 6 + -parseInt(e(1057, 1058, 1066, "&1^S", 1075)) / 7 + -parseInt(n(793, 786, 796, "kwxT", 798)) / 8 * (-parseInt(n(801, 807, 810, "08bJ", 803)) / 9);
      if (a === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Nx, 205651);
class d1 {
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
    _(this, "imagesWithTimestampForDuplicateDetection", new jr(ju));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await x1() ? la.SIMD : la.NO_SIMD;
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
    return o === zu;
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
    const e = o.length / Qu, n = e / (283 + 281 * -1), r = o.length / (-9187 + 271 * -32 + -17861 * -1), i = await g1(o.slice(r - n, r + n)), a = {};
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
    var a = "./this.program", s = !(-232 * -3 + -7996 + -1 * -7301), c = !(542 * 16 + -23 * 163 + -4922);
    s = typeof window == "object", c = typeof importScripts == "function";
    var u = "", g;
    (s || c) && (c ? u = self.location.href : document.currentScript && (u = document.currentScript.src), x && (u = x), -1 * 8743 + 7 * 1307 + -406 !== u.indexOf("blob:") ? u = u.substr(-3466 + -5439 * -1 + -1973, u.lastIndexOf("/") + (21 * 13 + -4985 + 4713)) : u = "", c && (g = function(I) {
      var f = new XMLHttpRequest();
      return f.open("GET", I, !(-7883 * -1 + -5910 + 493 * -4)), f.responseType = "arraybuffer", f.send(null), new Uint8Array(f.response);
    }));
    var h = t.printErr || console.warn.bind(console);
    for (i in r) r.hasOwnProperty(i) && (t[i] = r[i]);
    r = null, t.thisProgram && (a = t.thisProgram);
    var l;
    t.wasmBinary && (l = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && it("no native wasm support detected");
    var C, m = !(-128 * -76 + -6394 + -3333);
    function A(I) {
      I || it("Assertion failed: undefined");
    }
    var d = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (4003 + -44 * 71 + 3 * -293);
    function v(I, f, b) {
      var y = Ce;
      if (53 * 68 + 2077 + -437 * 13 < b) {
        b = f + b - 1;
        for (var w = -180 + 60 * 3; w < I.length; ++w) {
          var S = I.charCodeAt(w);
          if (55296 <= S && 17445 + 24 * -3578 + 125770 >= S) {
            var H = I.charCodeAt(++w);
            S = -1 * -68311 + 58331 + 61106 * -1 + ((S & 13 * -51 + 9998 * 1 + -2078 * 4) << -1597 * 1 + -1621 * 6 + 11333) | H & -1396 * 2 + -1313 + 4 * 1282;
          }
          if (-9071 + -109 * 61 + 15847 >= S) {
            if (f >= b) break;
            y[f++] = S;
          } else {
            if (-3685 + -2 * -136 + 5460 >= S) {
              if (f + (-8407 + 2 * -4469 + -2 * -8673) >= b) break;
              y[f++] = -1187 * 2 + 709 + 1857 | S >> -31 + -326 * 22 + 7209;
            } else {
              if (-6 * -6013 + 58641 * -1 + 88098 >= S) {
                if (f + (-1 * -2707 + -8 + -2697) >= b) break;
                y[f++] = 224 | S >> 29 * 102 + -2329 + -1 * 617;
              } else {
                if (f + (4 * -398 + 8803 + -7208) >= b) break;
                y[f++] = -9187 * 1 + -4591 + 14018 | S >> -747 * 5 + 24 * -106 + -2099 * -3, y[f++] = 61 * -20 + 3141 * 1 + -163 * 11 | S >> -1306 * 5 + -8988 + 15530 * 1 & 63;
              }
              y[f++] = 4944 * 2 + 1721 + 129 * -89 | S >> 1641 * 6 + -9067 + -773 & 10364 + -10301 * 1;
            }
            y[f++] = -1 * 3957 + 6424 + 1 * -2339 | S & 9575 + 1 * 6818 + -16330;
          }
        }
        y[f] = 9548 * -1 + 2 * 4468 + -12 * -51;
      }
    }
    var k = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-2933 + -5 * 87 + -2 * -1684);
    function D(I, f) {
      for (var b = I >> 1, y = b + f / (1 * 4119 + -1 * -1969 + -6086); !(b >= y) && lt[b]; ) ++b;
      if (b <<= -4193 + -167 * -2 + 5 * 772, 9654 + 1 * -9622 < b - I && k) return k.decode(Ce.subarray(I, b));
      for (b = -8189 * 1 + 1946 + 6243, y = ""; ; ) {
        var w = Oe[I + 2 * b >> 1];
        if (-8 * 1183 + -9 * 961 + 18113 == w || b == f / (4959 + -4231 * 1 + -726)) return y;
        ++b, y += String.fromCharCode(w);
      }
    }
    function M(I, f, b) {
      if (void (-2 * 1255 + 9085 + -6575) === b && (b = 2311624877 + 5352311 * -74 + 18 * 12884988), -1 * 4147 + -1 * 8176 + -5 * -2465 > b) return -177 + -177 * -1;
      b -= 942 + -1415 * -7 + -3 * 3615;
      var y = f;
      b = b < (193 * 27 + 31 * 59 + 138 * -51) * I.length ? b / (5821 + -11 * 529) : I.length;
      for (var w = 4799 * 1 + -7 * 406 + -103 * 19; w < b; ++w) Oe[f >> 1 * 3428 + 2 * 622 + 9 * -519] = I.charCodeAt(w), f += 1848 + 26 * -71;
      return Oe[f >> 1487 * -1 + -76 * -54 + 2616 * -1] = 913 * -7 + 487 * -2 + 7365, f - y;
    }
    function Y(I) {
      return 2 * I.length;
    }
    function O(I, f) {
      for (var b = -1 * -2029 + 248 * -30 + 7 * 773, y = ""; !(b >= f / (1 * -5087 + -4689 + 9780)); ) {
        var w = ie[I + 4 * b >> 2];
        if (-7149 * 1 + -192 * -50 + -817 * 3 == w) break;
        ++b, -91873 + 18 * -1897 + -2105 * -91 <= w ? (w -= 58662 + 5132 * 19 + -1 * 90634, y += String.fromCharCode(214698 + 159402 * -1 | w >> 6813 * 1 + 6471 + -6637 * 2, 56320 | w & -439 + -86 * -17)) : y += String.fromCharCode(w);
      }
      return y;
    }
    function J(I, f, b) {
      if (void (291 * -27 + 1009 * -1 + 8866) === b && (b = -548787 * -5717 + -347062 * -725 + -514313 * 2414), 258 + 982 * -7 + 6620 > b) return 9407 + 1 * 6057 + -4 * 3866;
      var y = f;
      b = y + b - (5401 + -3323 * 1 + -2074);
      for (var w = 52 * -184 + 161 * -29 + 1 * 14237; w < I.length; ++w) {
        var S = I.charCodeAt(w);
        if (-177 * 202 + 27643 + 63407 <= S && 19029 + 466 * 205 + -57216 >= S) {
          var H = I.charCodeAt(++w);
          S = -41812 + -1 * -107348 + ((S & 1023) << 83 * -59 + -20 * 226 + 9427) | H & 5376 + 1 * 281 + -4634;
        }
        if (ie[f >> -2787 + -2789 * -1] = S, f += -1873 * 2 + 3 * -1607 + 8571, f + (-2 * 2971 + -1 * -4475 + -1 * -1471) > b) break;
      }
      return ie[f >> 101 * -42 + 137 * -7 + 5203] = -21 * 299 + 4476 + 1803, f - y;
    }
    function Ie(I) {
      for (var f = 1299 + 4 * -1523 + 4793, b = 2 * -30 + -4010 + -185 * -22; b < I.length; ++b) {
        var y = I.charCodeAt(b);
        1 * 71311 + -96101 * -1 + -112116 <= y && 91760 + -22 * 4958 + 74659 >= y && ++b, f += -2331 * 3 + 359 * -6 + 9151 * 1;
      }
      return f;
    }
    var U, fe, Ce, Oe, lt, ie, Ze, Xe, rt;
    function je(I) {
      U = I, t.HEAP8 = fe = new Int8Array(I), t.HEAP16 = Oe = new Int16Array(I), t.HEAP32 = ie = new Int32Array(I), t.HEAPU8 = Ce = new Uint8Array(I), t.HEAPU16 = lt = new Uint16Array(I), t.HEAPU32 = Ze = new Uint32Array(I), t.HEAPF32 = Xe = new Float32Array(I), t.HEAPF64 = rt = new Float64Array(I);
    }
    var me = t.INITIAL_MEMORY || 16777216, Ve = {};
    Ve.initial = me / (77347 + -1 * 39641 + 27830), Ve.maximum = 32768, t.wasmMemory ? C = t.wasmMemory : C = new WebAssembly.Memory(Ve), C && (U = C.buffer), me = U.byteLength, je(U);
    var Me = [], be = [], Ee = [], Je = [];
    function h0() {
      var I = t.preRun.shift();
      Me.unshift(I);
    }
    var qe = -995 * 1 + -7 * -13 + 904, At = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function it(I) {
      throw t.onAbort && t.onAbort(I), h(I), m = !(-1 * -2249 + 292 * -5 + -789), I = new WebAssembly.RuntimeError("abort(" + I + "). Build with -s ASSERTIONS=1 for more info."), n(I), I;
    }
    function Ut(I) {
      var f = It;
      return String.prototype.startsWith ? f.startsWith(I) : 3 * -2754 + -4152 + 3 * 4138 === f.indexOf(I);
    }
    function yt() {
      return Ut("data:application/octet-stream;base64,");
    }
    var It = "sam.wasm";
    if (!yt()) {
      var zt = It;
      It = t.locateFile ? t.locateFile(zt, u) : u + zt;
    }
    function ft() {
      try {
        if (l) return new Uint8Array(l);
        if (g) return g(It);
        throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        it(I);
      }
    }
    function jc() {
      var I = {};
      return I.credentials = "same-origin", l || !s && !c || typeof fetch != "function" || Ut("file://") ? Promise.resolve().then(ft) : fetch(It, I).then(function(f) {
        if (!f.ok) throw "failed to load wasm binary file at '" + It + "'";
        return f.arrayBuffer();
      }).catch(function() {
        return ft();
      });
    }
    function Fn(I) {
      for (; -1 * 6729 + 4351 + 2378 < I.length; ) {
        var f = I.shift();
        if (typeof f == "function") f(t);
        else {
          var b = f.Ba;
          typeof b == "number" ? void (246 * -7 + 4925 + -3203) === f.ta ? go("v", b)() : go("vi", b)(f.ta) : b(void (3 * -2011 + -9076 + -29 * -521) === f.ta ? null : f.ta);
        }
      }
    }
    function go(I, f) {
      var b = [];
      return function() {
        b.length = arguments.length;
        for (var y = -7631 + -33 * 179 + 13538; y < arguments.length; y++) b[y] = arguments[y];
        return b && b.length ? t["dynCall_" + I].apply(null, [f].concat(b)) : t["dynCall_" + I].call(null, f);
      };
    }
    function Mc(I) {
      this.da = I - (2 * 3893 + 3526 * 2 + 14822 * -1), this.Oa = function(f) {
        ie[this.da + (-106 * -72 + 3100 + 2681 * -4) >> 2] = f;
      }, this.La = function(f) {
        ie[this.da + (-820 + -8059 * -1 + 7239 * -1) >> -2 * 3106 + -626 + 6840] = f;
      }, this.Ma = function() {
        ie[this.da + 4 >> -49 * -201 + 7608 + -3491 * 5] = -190 + 10 * 19;
      }, this.Ka = function() {
        fe[this.da + (1 * -809 + -1 * -6933 + -6112) >> 1 * 2271 + 1 * 9097 + -4 * 2842] = 0;
      }, this.Na = function() {
        fe[this.da + (-23 * -184 + -1748 * 3 + 41 * 25) >> 3996 * -2 + 23 * 197 + 3461 * 1] = 4 * 1451 + -697 + -5107 * 1;
      }, this.Fa = function(f, b) {
        this.Oa(f), this.La(b), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Dn() {
      return 0 < Dn.xa;
    }
    function uo(I) {
      switch (I) {
        case 1:
          return -6 * -1361 + -7349 + 19 * -43;
        case -8511 + 1 * 8722 + 19 * -11:
          return -4693 + -7841 * -1 + -1 * 3147;
        case 4:
          return -1713 + -187 * -23 + -2586;
        case -2194 * -2 + -440 * -20 + -1318 * 10:
          return 2603 + 3 * 955 + -5465;
        default:
          throw new TypeError("Unknown type size: " + I);
      }
    }
    var ni = void (1 * 9755 + -9 * -900 + -17855);
    function _e(I) {
      for (var f = ""; Ce[I]; ) f += ni[Ce[I++]];
      return f;
    }
    var p0 = {}, qt = {}, Yn = {};
    function lo(I) {
      if (void (1961 * 4 + -6 * 1221 + 259 * -2) === I) return "_unknown";
      I = I.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = I.charCodeAt(153 * -49 + -3582 + 11079);
      return 12 * -13 + 21 * 292 + -5928 <= f && -5381 * 1 + -9598 + 3 * 5012 >= f ? "_" + I : I;
    }
    function Io(I, f) {
      return I = lo(I), new Function("body", "return function " + I + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(f);
    }
    function fo(I) {
      var f = Error, b = Io(I, function(y) {
        this.name = I, this.message = y, y = Error(y).stack, void (-445 * 9 + 16 * -281 + 8501) !== y && (this.stack = this.toString() + `
` + y.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return b.prototype = Object.create(f.prototype), b.prototype.constructor = b, b.prototype.toString = function() {
        return void (2 * -1658 + -93 * -11 + 1 * 2293) === this.message ? this.name : this.name + ": " + this.message;
      }, b;
    }
    var m0 = void (-8239 + -906 * -11 + -1727 * 1);
    function j(I) {
      throw new m0(I);
    }
    var xi = void (-6727 + -7715 * 1 + -3 * -4814);
    function Xn(I) {
      throw new xi(I);
    }
    function b0(I, f, b) {
      function y(G) {
        G = b(G), G.length !== I.length && Xn("Mismatched type converter count");
        for (var K = 4362 * -1 + -1 * 173 + 4535 * 1; K < I.length; ++K) kt(I[K], G[K]);
      }
      I.forEach(function(G) {
        Yn[G] = f;
      });
      var w = Array(f.length), S = [], H = -2117 * 1 + -1547 * 3 + -62 * -109;
      f.forEach(function(G, K) {
        qt.hasOwnProperty(G) ? w[K] = qt[G] : (S.push(G), p0.hasOwnProperty(G) || (p0[G] = []), p0[G].push(function() {
          w[K] = qt[G], ++H, H === S.length && y(w);
        }));
      }), -35 * 58 + 1473 + 557 * 1 === S.length && y(w);
    }
    function kt(I, f, b) {
      if (b = b || {}, !("argPackAdvance" in f)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var y = f.name;
      if (I || j('type "' + y + '" must have a positive integer typeid pointer'), qt.hasOwnProperty(I)) {
        if (b.Ea) return;
        j("Cannot register type '" + y + "' twice");
      }
      qt[I] = f, delete Yn[I], p0.hasOwnProperty(I) && (f = p0[I], delete p0[I], f.forEach(function(w) {
        w();
      }));
    }
    function Jc(I) {
      var f = {};
      return f.count = I.count, f.oa = I.oa, f.pa = I.pa, f.da = I.da, f.fa = I.fa, f.ga = I.ga, f.ha = I.ha, f;
    }
    function Co(I) {
      j(I.A.fa.ea.name + " instance already deleted");
    }
    var ho = !(1 * -5903 + 4433 + 1471);
    function oi() {
    }
    function ri(I) {
      --I.count.value, 8177 + -409 * -11 + -3169 * 4 === I.count.value && (I.ga ? I.ha.na(I.ga) : I.fa.ea.na(I.da));
    }
    function q0(I) {
      return typeof FinalizationGroup > "u" ? (q0 = function(f) {
        return f;
      }, I) : (ho = new FinalizationGroup(function(f) {
        for (var b = f.next(); !b.done; b = f.next()) b = b.value, b.da ? ri(b) : console.warn("object already deleted: " + b.da);
      }), q0 = function(f) {
        return ho.register(f, f.A, f.A), f;
      }, oi = function(f) {
        ho.unregister(f.A);
      }, q0(I));
    }
    var $0 = void (205 * 41 + -23 * -55 + -9670), en = [];
    function po() {
      for (; en.length; ) {
        var I = en.pop();
        I.A.oa = !(-45 * -165 + 3857 + -11281), I.delete();
      }
    }
    function Nt() {
    }
    var ii = {};
    function _c(I, f) {
      var b = t;
      if (b[I].ja === void 0) {
        var y = b[I];
        b[I] = function() {
          return b[I].ja.hasOwnProperty(arguments.length) || j("Function '" + f + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + b[I].ja + ")!"), b[I].ja[arguments.length].apply(this, arguments);
        }, b[I].ja = [], b[I].ja[y.ya] = y;
      }
    }
    function ai(I, f, b) {
      t.hasOwnProperty(I) ? ((void (-1300 + 41 * 158 + 863 * -6) === b || void (4 * 1106 + 1808 + -6232) !== t[I].ja && void (1 * 9955 + 3700 + 5 * -2731) !== t[I].ja[b]) && j("Cannot register public name '" + I + "' twice"), _c(I, I), t.hasOwnProperty(b) && j("Cannot register multiple overloads of a function with the same number of arguments (" + b + ")!"), t[I].ja[b] = f) : (t[I] = f, void (-824 * 2 + -2 * 297 + -38 * -59) !== b && (t[I].Ra = b));
    }
    function Qc(I, f, b, y, w, S, H, G) {
      this.name = I, this.constructor = f, this.ma = b, this.na = y, this.ia = w, this.Ca = S, this.qa = H, this.Aa = G;
    }
    function jn(I, f, b) {
      for (; f !== b; ) f.qa || j("Expected null or instance of " + b.name + ", got an instance of " + f.name), I = f.qa(I), f = f.ia;
      return I;
    }
    function Uc(I, f) {
      return f === null ? (this.ua && j("null is not a valid " + this.name), -338 * 1 + 6470 + -14 * 438) : (f.A || j('Cannot pass "' + y0(f) + '" as a ' + this.name), f.A.da || j("Cannot pass deleted object as a pointer of type " + this.name), jn(f.A.da, f.A.fa.ea, this.ea));
    }
    function zc(I, f) {
      if (f === null) {
        if (this.ua && j("null is not a valid " + this.name), this.sa) {
          var b = this.Ha();
          return I !== null && I.push(this.na, b), b;
        }
        return -2961 * 3 + 6947 + 1936;
      }
      if (f.A || j('Cannot pass "' + y0(f) + '" as a ' + this.name), f.A.da || j("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && f.A.fa.ra && j("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name), b = jn(f.A.da, f.A.fa.ea, this.ea), this.sa) switch (void (9313 + -2 * 73 + -9167) === f.A.ga && j("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case 4678 + -3 * -367 + -5779:
          f.A.ha === this ? b = f.A.ga : j("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name);
          break;
        case -2903 + -121 * -24:
          b = f.A.ga;
          break;
        case 13792 + -7 * 1970:
          if (f.A.ha === this) b = f.A.ga;
          else {
            var y = f.clone();
            b = this.Ia(b, A0(function() {
              y.delete();
            })), I !== null && I.push(this.na, b);
          }
          break;
        default:
          j("Unsupporting sharing policy");
      }
      return b;
    }
    function qc(I, f) {
      return f === null ? (this.ua && j("null is not a valid " + this.name), 5 * -139 + 83 * 18 + -799) : (f.A || j('Cannot pass "' + y0(f) + '" as a ' + this.name), f.A.da || j("Cannot pass deleted object as a pointer of type " + this.name), f.A.fa.ra && j("Cannot convert argument of type " + f.A.fa.name + " to parameter type " + this.name), jn(f.A.da, f.A.fa.ea, this.ea));
    }
    function Mn(I) {
      return this.fromWireType(Ze[I >> 2]);
    }
    function si(I, f, b) {
      return f === b ? I : void (-8261 + -1 * 2866 + 11127) === b.ia ? null : (I = si(I, f, b.ia), I === null ? null : b.Aa(I));
    }
    var tn = {};
    function $c(I, f) {
      for (void (-15 * -149 + 57 * 67 + -6054) === f && j("ptr should not be undefined"); I.ia; ) f = I.qa(f), I = I.ia;
      return tn[f];
    }
    function Jn(I, f) {
      f.fa && f.da || Xn("makeClassHandle requires ptr and ptrType"), !!f.ha != !!f.ga && Xn("Both smartPtrType and smartPtr must be specified");
      var b = {};
      b.value = 1, f.count = b;
      var y = {};
      y.value = f;
      var w = {};
      return w.A = y, q0(Object.create(I, w));
    }
    function Ht(I, f, b, y) {
      this.name = I, this.ea = f, this.ua = b, this.ra = y, this.sa = !(3889 * -2 + -7886 + -3133 * -5), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (1083 + -3 * 361), void (-3560 + -1212 * -7 + 1231 * -4) !== f.ia ? this.toWireType = zc : (this.toWireType = y ? Uc : qc, this.ka = null);
    }
    function ci(I, f, b) {
      t.hasOwnProperty(I) || Xn("Replacing nonexistant public symbol"), void (2 * 2211 + 6095 + -13 * 809) !== t[I].ja && void (6436 + -2 * 1966 + -2504) !== b ? t[I].ja[b] = f : (t[I] = f, t[I].ya = b);
    }
    function Ft(I, f) {
      I = _e(I);
      var b = go(I, f);
      return typeof b != "function" && j("unknown function pointer with signature " + I + ": " + f), b;
    }
    var gi = void 0;
    function di(I) {
      I = wi(I);
      var f = _e(I);
      return Ot(I), f;
    }
    function nn(I, f) {
      function b(S) {
        w[S] || qt[S] || (Yn[S] ? Yn[S].forEach(b) : (y.push(S), w[S] = !(-8502 + 3147 * -1 + 11649)));
      }
      var y = [], w = {};
      throw f.forEach(b), new gi(I + ": " + y.map(di).join([", "]));
    }
    function ui(I, f) {
      for (var b = [], y = 97 * -94 + 120 + 8998; y < I; y++) b.push(ie[(f >> -1 * 7493 + -200 * 8 + 9095) + y]);
      return b;
    }
    function _n(I) {
      for (; I.length; ) {
        var f = I.pop();
        I.pop()(f);
      }
    }
    function li(I, f, b) {
      return I instanceof Object || j(b + ' with invalid "this": ' + I), I instanceof f.ea.constructor || j(b + ' incompatible with "this" of type ' + I.constructor.name), I.A.da || j("cannot call emscripten binding method " + b + " on deleted object"), jn(I.A.da, I.A.fa.ea, f.ea);
    }
    var Ii = {};
    Ii.value = void (-887 * -4 + 421 + 9 * -441);
    var fi = {};
    fi.value = null;
    var Ci = {};
    Ci.value = !(-75 * -57 + 79 * -69 + 1176);
    var hi = {};
    hi.value = !1;
    var mo = [], at = [{}, Ii, fi, Ci, hi];
    function bo(I) {
      -7137 + 41 * -59 + 9560 < I && -591 * -11 + -3385 + -3116 === --at[I].Ja && (at[I] = void (-1174 * -7 + 5526 * 1 + -13744), mo.push(I));
    }
    function A0(I) {
      switch (I) {
        case void (-1 * 1283 + 3233 + -1950):
          return 7801 + 3349 * 1 + 1 * -11149;
        case null:
          return -4 * 1574 + -8886 + 15184;
        case !(-4476 + -1871 * 1 + 11 * 577):
          return -5941 + -4 * -1486;
        case !(1114 * -5 + -7331 + 12902):
          return 4;
        default:
          var f = mo.length ? mo.pop() : at.length, b = {};
          return b.Ja = 1, b.value = I, at[f] = b, f;
      }
    }
    function y0(I) {
      if (I === null) return "null";
      var f = typeof I;
      return f === "object" || f === "array" || f === "function" ? I.toString() : "" + I;
    }
    function eg(I, f) {
      switch (f) {
        case 2:
          return function(b) {
            return this.fromWireType(Xe[b >> 37 * -88 + 31 * -296 + -12434 * -1]);
          };
        case 1 * 3124 + -4551 + 2 * 715:
          return function(b) {
            return this.fromWireType(rt[b >> -4343 + -419 * -4 + 2670]);
          };
        default:
          throw new TypeError("Unknown float type: " + I);
      }
    }
    function tg(I) {
      var f = Function;
      if (!(f instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof f + " which is not a function");
      var b = Io(f.name || "unknownFunctionName", function() {
      });
      return b.prototype = f.prototype, b = new b(), I = f.apply(b, I), I instanceof Object ? I : b;
    }
    function ng(I, f, b) {
      switch (f) {
        case -1873 * -4 + -1581 + 257 * -23:
          return b ? function(y) {
            return fe[y];
          } : function(y) {
            return Ce[y];
          };
        case -1 * 4385 + 8 * -661 + 9674:
          return b ? function(y) {
            return Oe[y >> 167 * 31 + -2586 + -2590];
          } : function(y) {
            return lt[y >> 6723 + 122 * 62 + -14286];
          };
        case -3 * 479 + 1327 * -4 + -6747 * -1:
          return b ? function(y) {
            return ie[y >> 272 + 2 * -135];
          } : function(y) {
            return Ze[y >> 1 * -83 + 3 * 1999 + -5912];
          };
        default:
          throw new TypeError("Unknown integer type: " + I);
      }
    }
    function Ao(I) {
      return I || j("Cannot use deleted val. handle = " + I), at[I].value;
    }
    function pi(I, f) {
      var b = qt[I];
      return void (2435 + 1 * -808 + -1627) === b && j(f + " has unknown type " + di(I)), b;
    }
    var xg = {}, mi = {};
    function bi() {
      if (!yo) {
        var I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: a || "./this.program" }, f;
        for (f in mi) I[f] = mi[f];
        var b = [];
        for (f in I) b.push(f + "=" + I[f]);
        yo = b;
      }
      return yo;
    }
    var yo, Ai = [];
    function yi(I) {
      var f = {}, b;
      for (b in I) (function(y) {
        var w = I[y];
        f[y] = typeof w == "function" ? function() {
          Ai.push(y);
          try {
            return w.apply(null, arguments);
          } finally {
            if (m) return;
            var S = Ai.pop();
            A(S === y);
          }
        } : w;
      })(b);
      return f;
    }
    for (var Wi = Array(256), Qn = 0; -3788 * 2 + -191 * 47 + -1293 * -13 > Qn; ++Qn) Wi[Qn] = String.fromCharCode(Qn);
    ni = Wi, m0 = t.BindingError = fo("BindingError"), xi = t.InternalError = fo("InternalError"), Nt.prototype.isAliasOf = function(I) {
      if (!(this instanceof Nt && I instanceof Nt)) return !(11921 + 16 * -745);
      var f = this.A.fa.ea, b = this.A.da, y = I.A.fa.ea;
      for (I = I.A.da; f.ia; ) b = f.qa(b), f = f.ia;
      for (; y.ia; ) I = y.qa(I), y = y.ia;
      return f === y && b === I;
    }, Nt.prototype.clone = function() {
      if (this.A.da || Co(this), this.A.pa) return this.A.count.value += -1 * -7330 + -107 * -72 + -15033, this;
      var I = q0(Object.create(Object.getPrototypeOf(this), { A: { value: Jc(this.A) } }));
      return I.A.count.value += 3236 + 5 * -647, I.A.oa = !(-201 * 11 + -3262 + -161 * -34), I;
    }, Nt.prototype.delete = function() {
      this.A.da || Co(this), this.A.oa && !this.A.pa && j("Object already scheduled for deletion"), oi(this), ri(this.A), this.A.pa || (this.A.ga = void (-3430 * 1 + -22 * 272 + -523 * -18), this.A.da = void 0);
    }, Nt.prototype.isDeleted = function() {
      return !this.A.da;
    }, Nt.prototype.deleteLater = function() {
      return this.A.da || Co(this), this.A.oa && !this.A.pa && j("Object already scheduled for deletion"), en.push(this), en.length === 1 && $0 && $0(po), this.A.oa = !(2041 * 1 + 8003 + 6 * -1674), this;
    }, Ht.prototype.Da = function(I) {
      return this.wa && (I = this.wa(I)), I;
    }, Ht.prototype.va = function(I) {
      this.na && this.na(I);
    }, Ht.prototype.argPackAdvance = -23 * 49 + 8774 + -1 * 7639, Ht.prototype.readValueFromPointer = Mn, Ht.prototype.deleteObject = function(I) {
      I !== null && I.delete();
    }, Ht.prototype.fromWireType = function(I) {
      function f() {
        return this.sa ? Jn(this.ea.ma, { fa: this.Ga, da: b, ha: this, ga: I }) : Jn(this.ea.ma, { fa: this, da: I });
      }
      var b = this.Da(I);
      if (!b) return this.va(I), null;
      var y = $c(this.ea, b);
      if (void (8603 + 19 * 128 + 5 * -2207) !== y)
        return 4771 + 263 * -3 + -3982 === y.A.count.value ? (y.A.da = b, y.A.ga = I, y.clone()) : (y = y.clone(), this.va(I), y);
      if (y = this.ea.Ca(b), y = ii[y], !y) return f.call(this);
      y = this.ra ? y.za : y.pointerType;
      var w = si(b, this.ea, y.ea);
      return w === null ? f.call(this) : this.sa ? Jn(y.ea.ma, { fa: y, da: w, ha: this, ga: I }) : Jn(y.ea.ma, { fa: y, da: w });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(tn).length;
    }, t.getLiveInheritedInstances = function() {
      var I = [], f;
      for (f in tn) tn.hasOwnProperty(f) && I.push(tn[f]);
      return I;
    }, t.flushPendingDeletes = po, t.setDelayFunction = function(I) {
      $0 = I, en.length && $0 && $0(po);
    }, gi = t.UnboundTypeError = fo("UnboundTypeError"), t.count_emval_handles = function() {
      for (var I = 7145 * 1 + 38 * 137 + -537 * 23, f = -8654 + -1 * -8659; f < at.length; ++f) void (44 * 174 + -4889 * -1 + -1 * 12545) !== at[f] && ++I;
      return I;
    }, t.get_first_emval = function() {
      for (var I = 1690 + 739 * 11 + -9814; I < at.length; ++I) if (at[I] !== void 0) return at[I];
      return null;
    }, be.push({ Ba: function() {
      vi();
    } });
    var og = { z: function(I) {
      return Un(I + (-13 * -415 + 5923 * -1 + 544)) + (-1 * -8749 + 4750 + -13483 * 1);
    }, u: function(I, f, b) {
      throw new Mc(I).Fa(f, b), "uncaught_exception" in Dn ? Dn.xa++ : Dn.xa = 6207 + -8 * 419 + -2854, I;
    }, w: function(I, f, b, y, w) {
      var S = uo(b);
      f = _e(f), kt(I, { name: f, fromWireType: function(H) {
        return !!H;
      }, toWireType: function(H, G) {
        return G ? y : w;
      }, argPackAdvance: 8, readValueFromPointer: function(H) {
        if (8982 + -11 * -219 + 11390 * -1 === b) var G = fe;
        else if (-1414 + 1 * -4053 + -5469 * -1 === b) G = Oe;
        else if (b === 4) G = ie;
        else throw new TypeError("Unknown boolean type size: " + f);
        return this.fromWireType(G[H >> S]);
      }, ka: null });
    }, h: function(I, f, b, y, w, S, H, G, K, R, P, T, $) {
      P = _e(P), S = Ft(w, S), G && (G = Ft(H, G)), R && (R = Ft(K, R)), $ = Ft(T, $);
      var Ae = lo(P);
      ai(Ae, function() {
        nn("Cannot construct " + P + " due to unbound types", [y]);
      }), b0([I, f, b], y ? [y] : [], function(V) {
        if (V = V[6131 + 2351 * -1 + -3780], y) var Wt = V.ea, Le = Wt.ma;
        else Le = Nt.prototype;
        V = Io(Ae, function() {
          if (Object.getPrototypeOf(this) !== W0) throw new m0("Use 'new' to construct " + P);
          if (v0.la === void 0) throw new m0(P + " has no accessible constructor");
          var Bi = v0.la[arguments.length];
          if (void (64 * 11 + 3923 * 1 + -1 * 4627) === Bi) throw new m0("Tried to invoke ctor of " + P + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(v0.la).toString() + ") parameters instead!");
          return Bi.apply(this, arguments);
        });
        var $e = {};
        $e.value = V;
        var $t = {};
        $t.constructor = $e;
        var W0 = Object.create(Le, $t);
        V.prototype = W0;
        var v0 = new Qc(P, V, W0, $, Wt, S, G, R);
        Wt = new Ht(P, v0, !(-6191 + -5801 * 1 + 11992), !(-1655 + -1 * -9743 + -8087)), Le = new Ht(P + "*", v0, !(2358 + -683 * -1 + -3040), !(653 * 5 + 1817 * -1 + -1447));
        var Si = new Ht(P + " const*", v0, !(-5274 + -3314 * -2 + -11 * 123), !(2 * -229 + 3050 + 9 * -288)), vo = {};
        return vo.pointerType = Le, vo.za = Si, ii[I] = vo, ci(Ae, V), [Wt, Le, Si];
      });
    }, g: function(I, f, b, y, w, S) {
      A(0 < f);
      var H = ui(f, b);
      w = Ft(y, w);
      var G = [S], K = [];
      b0([], [I], function(R) {
        R = R[5041 + -1 * -9587 + -14628];
        var P = "constructor " + R.name;
        if (void (-6796 + 447 * 8 + 35 * 92) === R.ea.la && (R.ea.la = []), void (-387 + 2 * -3570 + -39 * -193) !== R.ea.la[f - (-491 * -1 + 14 * -641 + 7 * 1212)]) throw new m0("Cannot register multiple constructors with identical number of parameters (" + (f - 1) + ") for class '" + R.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return R.ea.la[f - (3507 + -3506 * 1)] = function() {
          nn("Cannot construct " + R.name + " due to unbound types", H);
        }, b0([], H, function(T) {
          return R.ea.la[f - (-4807 + -2895 * -3 + -3877)] = function() {
            arguments.length !== f - (-3871 + -197 * -5 + -1 * -2887) && j(P + " called with " + arguments.length + " arguments, expected " + (f - (-1544 + -7 * -371 + 4 * -263))), K.length = -68 * 43 + 1596 + 1328, G.length = f;
            for (var $ = 1; $ < f; ++$) G[$] = T[$].toWireType(K, arguments[$ - 1]);
            return $ = w.apply(null, G), _n(K), T[-2351 * -3 + -6413 + -64 * 10].fromWireType($);
          }, [];
        }), [];
      });
    }, b: function(I, f, b, y, w, S, H, G, K, R) {
      f = _e(f), w = Ft(y, w), b0([], [I], function(P) {
        P = P[-1632 + 2 * 816];
        var T = P.name + "." + f, $ = { get: function() {
          nn("Cannot access " + T + " due to unbound types", [b, H]);
        }, enumerable: !(44 * -145 + 8924 + 2544 * -1), configurable: !0 };
        return K ? $.set = function() {
          nn("Cannot access " + T + " due to unbound types", [b, H]);
        } : $.set = function() {
          j(T + " is a read-only property");
        }, Object.defineProperty(P.ea.ma, f, $), b0([], K ? [b, H] : [b], function(Ae) {
          var V = Ae[0], Wt = { get: function() {
            var $e = li(this, P, T + " getter");
            return V.fromWireType(w(S, $e));
          }, enumerable: !(-1 * -5139 + 6600 + -559 * 21) };
          if (K) {
            K = Ft(G, K);
            var Le = Ae[9628 + -1 * 9627];
            Wt.set = function($e) {
              var $t = li(this, P, T + " setter"), W0 = [];
              K(R, $t, Le.toWireType(W0, $e)), _n(W0);
            };
          }
          return Object.defineProperty(P.ea.ma, f, Wt), [];
        }), [];
      });
    }, v: function(I, f) {
      f = _e(f), kt(I, { name: f, fromWireType: function(b) {
        var y = at[b].value;
        return bo(b), y;
      }, toWireType: function(b, y) {
        return A0(y);
      }, argPackAdvance: 8, readValueFromPointer: Mn, ka: null });
    }, m: function(I, f, b) {
      b = uo(b), f = _e(f), kt(I, { name: f, fromWireType: function(y) {
        return y;
      }, toWireType: function(y, w) {
        if (typeof w != "number" && typeof w != "boolean") throw new TypeError('Cannot convert "' + y0(w) + '" to ' + this.name);
        return w;
      }, argPackAdvance: 8, readValueFromPointer: eg(f, b), ka: null });
    }, c: function(I, f, b, y, w, S) {
      var H = ui(f, b);
      I = _e(I), w = Ft(y, w), ai(I, function() {
        nn("Cannot call " + I + " due to unbound types", H);
      }, f - (-5 * 164 + -13 * 511 + 8 * 933)), b0([], H, function(G) {
        var K = I, R = I;
        G = [G[6425 + 1018 * -7 + -701 * -1], null].concat(G.slice(2943 * 1 + -3712 + -55 * -14));
        var P = w, T = G.length;
        -7196 + -340 * -5 + 5498 > T && j("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var $ = G[-3 * 3167 + 37 * -183 + 16273] !== null && !(6671 * -1 + -6723 + 13395), Ae = !(4682 * 2 + -233 * -19 + -13790), V = 7506 + 1 * 917 + 8422 * -1; V < G.length; ++V) if (G[V] !== null && void (1402 * 2 + 12 * 420 + 74 * -106) === G[V].ka) {
          Ae = !(2072 + 37 * -56);
          break;
        }
        var Wt = G[-3714 * -2 + -720 + -86 * 78].name !== "void", Le = "", $e = "";
        for (V = 0; V < T - (1142 * -4 + 2 * -1663 + -3 * -2632); ++V) Le += (149 * -39 + -2764 + 8575 !== V ? ", " : "") + "arg" + V, $e += (12306 + 7 * -1758 !== V ? ", " : "") + "arg" + V + "Wired";
        R = "return function " + lo(R) + "(" + Le + `) {
if (arguments.length !== ` + (T - (67 * 137 + -14 * 496 + -2233)) + `) {
throwBindingError('function ` + R + " called with ' + arguments.length + ' arguments, expected " + (T - 2) + ` args!');
}
`, Ae && (R += `var destructors = [];
`);
        var $t = Ae ? "destructors" : "null";
        for (Le = "throwBindingError invoker fn runDestructors retType classParam".split(" "), P = [j, P, S, _n, G[10 * -761 + 3282 * -2 + 19 * 746], G[8845 + -3 * 2948]], $ && (R += "var thisWired = classParam.toWireType(" + $t + `, this);
`), V = -1867 * -1 + 1 * 4957 + -6824; V < T - (1918 + -2 * -827 + -3570); ++V) R += "var arg" + V + "Wired = argType" + V + ".toWireType(" + $t + ", arg" + V + "); // " + G[V + 2].name + `
`, Le.push("argType" + V), P.push(G[V + (-943 + -293 * 33 + 10614)]);
        if ($ && ($e = "thisWired" + (-149 * 46 + 811 * 3 + -1 * -4421 < $e.length ? ", " : "") + $e), R += (Wt ? "var rv = " : "") + "invoker(fn" + (-1324 + -4 * -331 < $e.length ? ", " : "") + $e + `);
`, Ae) R += `runDestructors(destructors);
`;
        else
          for (V = $ ? -4127 * 1 + 751 * -5 + -7883 * -1 : 565 * -12 + -2 * 1821 + 1 * 10424; V < G.length; ++V) T = -3352 + -479 * -7 === V ? "thisWired" : "arg" + (V - (-151 * 61 + 17 * 359 + -10 * -311)) + "Wired", G[V].ka !== null && (R += T + "_dtor(" + T + "); // " + G[V].name + `
`, Le.push(T + "_dtor"), P.push(G[V].ka));
        return Wt && (R += `var ret = retType.fromWireType(rv);
return ret;
`), Le.push(R + `}
`), G = tg(Le).apply(null, P), ci(K, G, f - (2 * -1811 + -727 * 8 + 9439)), [];
      });
    }, e: function(I, f, b, y, w) {
      function S(R) {
        return R;
      }
      f = _e(f), w === -1 && (w = 26 * -85680658 + 7596033819 + 8218 * -130612);
      var H = uo(b);
      if (-8204 + 14 * 336 + -35 * -100 === y) {
        var G = 32 - 8 * b;
        S = function(R) {
          return R << G >>> G;
        };
      }
      var K = -(2973 + 35 * 227 + -10917 * 1) != f.indexOf("unsigned");
      kt(I, { name: f, fromWireType: S, toWireType: function(R, P) {
        if (typeof P != "number" && typeof P != "boolean") throw new TypeError('Cannot convert "' + y0(P) + '" to ' + this.name);
        if (P < y || P > w) throw new TypeError('Passing a number "' + y0(P) + '" from JS side to C/C++ side to an argument of type "' + f + '", which is outside the valid range [' + y + ", " + w + "]!");
        return K ? P >>> -3 * -2269 + -6769 + -38 : P | -1 * -1933 + -5486 + 3553;
      }, argPackAdvance: 8, readValueFromPointer: ng(f, H, -3155 * -2 + -7817 + -1 * -1507 !== y), ka: null });
    }, d: function(I, f, b) {
      function y(G) {
        G >>= 2 * -895 + -854 + 2646;
        var K = Ze;
        return new w(U, K[G + (1 * 4051 + 7359 + -11409 * 1)], K[G]);
      }
      var w = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][f];
      b = _e(b);
      var S = {};
      S.name = b, S.fromWireType = y, S.argPackAdvance = 8, S.readValueFromPointer = y;
      var H = {};
      H.Ea = !(-4989 + 4 * -1525 + -13 * -853), kt(I, S, H);
    }, n: function(I, f) {
      f = _e(f);
      var b = f === "std::string";
      kt(I, { name: f, fromWireType: function(y) {
        var w = Ze[y >> 2];
        if (b) for (var S = y + (7910 * -1 + -41 * -167 + 1067), H = -302 * 20 + 2754 + -1 * -3286; H <= w; ++H) {
          var G = y + 4 + H;
          if (H == w || -6466 + -127 * 51 + 12943 == Ce[G]) {
            if (S) {
              var K = S, R = Ce, P = K + (G - S);
              for (S = K; R[S] && !(S >= P); ) ++S;
              if (-1 * 3359 + 215 + 3160 < S - K && R.subarray && d) K = d.decode(R.subarray(K, S));
              else {
                for (P = ""; K < S; ) {
                  var T = R[K++];
                  if (T & 6505 + 57 * -17 + -1352 * 4) {
                    var $ = R[K++] & 63;
                    if (-555 + -113 * -67 + -1706 * 4 == (T & -707 * 3 + 3 * 793 + -34)) P += String.fromCharCode((T & 841 * 2 + -5503 + -4 * -963) << -10225 + -787 * -13 | $);
                    else {
                      var Ae = R[K++] & 63;
                      T = 8249 + 3 * -1094 + 93 * -51 == (T & 685 * 11 + 1 * 1977 + -9272) ? (T & -1 * -4882 + -4 * 207 + -4039 * 1) << -5209 * 1 + 598 * -12 + 12397 | $ << 7397 + -13 * -333 + -11720 | Ae : (T & 7) << 2314 + -1 * 8669 + 6373 * 1 | $ << -8133 + 181 * 45 | Ae << -7904 + 8 * 156 + -6662 * -1 | R[K++] & -8092 + -24 * -179 + 3859, 81027 + 9293 * -7 + 49560 > T ? P += String.fromCharCode(T) : (T -= -58537 + -7 * 15845 + -58747 * -4, P += String.fromCharCode(133975 + 101 * -779 | T >> -1 * 793 + 41 * -138 + 923 * 7, 56320 | T & 1023));
                    }
                  } else P += String.fromCharCode(T);
                }
                K = P;
              }
            } else K = "";
            if (void (-1226 * -1 + -772 * -11 + -113 * 86) === V) var V = K;
            else V += String.fromCharCode(8475 + 4 * 349 + -1 * 9871), V += K;
            S = G + (-3723 + -1366 * -5 + -3106);
          }
        }
        else {
          for (V = Array(w), H = -3582 * 2 + 1984 + 5180; H < w; ++H) V[H] = String.fromCharCode(Ce[y + (4 * -83 + -9244 + -479 * -20) + H]);
          V = V.join("");
        }
        return Ot(y), V;
      }, toWireType: function(y, w) {
        w instanceof ArrayBuffer && (w = new Uint8Array(w));
        var S = typeof w == "string";
        S || w instanceof Uint8Array || w instanceof Uint8ClampedArray || w instanceof Int8Array || j("Cannot pass non-string to std::string");
        var H = (b && S ? function() {
          for (var R = 0, P = -7945 + -227 * -35; P < w.length; ++P) {
            var T = w.charCodeAt(P);
            55296 <= T && -6 * -11008 + 60407 + 212 * -326 >= T && (T = 8197 + -237 * 373 + 145740 + ((T & -2286 + -183 * 28 + 3 * 2811) << 7 * 1149 + 4 * -2 + -8025) | w.charCodeAt(++P) & -4691 + 1 * 5626 + 4 * 22), -1566 + -3 * 3326 + 11671 >= T ? ++R : R = 117 * -46 + 9786 + -2357 >= T ? R + (-3236 * -1 + 3519 + -1 * 6753) : 65535 >= T ? R + (-6 * 547 + -4723 + 8008) : R + (7 * -173 + -9489 * 1 + 10704);
          }
          return R;
        } : function() {
          return w.length;
        })(), G = Un(62 * 83 + -3476 + -1666 + H + (-899 * -9 + -2121 + -5969));
        if (Ze[G >> 6301 + 2158 * -3 + 175] = H, b && S) v(w, G + (7555 + -7551 * 1), H + (358 * 5 + 2 * -3257 + -1575 * -3));
        else if (S) for (S = 8615 + 3 * -939 + 446 * -13; S < H; ++S) {
          var K = w.charCodeAt(S);
          1613 * 2 + 1197 + -4168 < K && (Ot(G), j("String has UTF-16 code units that do not fit in 8 bits")), Ce[G + 4 + S] = K;
        }
        else
          for (S = -575 * 14 + 193 * -43 + 16349; S < H; ++S) Ce[G + (17 * 277 + -5501 + 1 * 796) + S] = w[S];
        return y !== null && y.push(Ot, G), G;
      }, argPackAdvance: 8, readValueFromPointer: Mn, ka: function(y) {
        Ot(y);
      } });
    }, j: function(I, f, b) {
      if (b = _e(b), 751 * -13 + 4185 + 5580 === f) var y = D, w = M, S = Y, H = function() {
        return lt;
      }, G = 1952 + -2011 * 2 + 1 * 2071;
      else f === 4 && (y = O, w = J, S = Ie, H = function() {
        return Ze;
      }, G = -12762 + 2 * 6382);
      kt(I, { name: b, fromWireType: function(K) {
        for (var R = Ze[K >> -3521 * -2 + -5783 * 1 + -1 * 1257], P = H(), T, $ = K + 4, Ae = 2 * -2839 + 7 * -181 + 6945; Ae <= R; ++Ae) {
          var V = K + 4 + Ae * f;
          (Ae == R || -9150 + -38 * 231 + -2241 * -8 == P[V >> G]) && ($ = y($, V - $), T === void 0 ? T = $ : (T += String.fromCharCode(-1 * -8369 + -3558 * -2 + 1 * -15485), T += $), $ = V + f);
        }
        return Ot(K), T;
      }, toWireType: function(K, R) {
        typeof R != "string" && j("Cannot pass non-string to C++ string type " + b);
        var P = S(R), T = Un(-46 * 46 + -6497 * 1 + 7 * 1231 + P + f);
        return Ze[T >> 4281 + -9187 * -1 + -13466 * 1] = P >> G, w(R, T + (6806 + 1307 * 3 + -10723), P + f), K !== null && K.push(Ot, T), T;
      }, argPackAdvance: 8, readValueFromPointer: Mn, ka: function(K) {
        Ot(K);
      } });
    }, x: function(I, f) {
      f = _e(f);
      var b = {};
      b.Qa = !(3 * -1557 + -1 * 7535 + -1 * -12206), b.name = f, b.argPackAdvance = 0, b.fromWireType = function() {
      }, b.toWireType = function() {
      }, kt(I, b);
    }, k: function(I, f, b) {
      I = Ao(I), f = pi(f, "emval::as");
      var y = [], w = A0(y);
      return ie[b >> 7483 * -1 + 571 + 6914] = w, f.toWireType(y, I);
    }, i: bo, l: function(I, f) {
      return I = Ao(I), f = Ao(f), A0(I[f]);
    }, p: function(I) {
      var f = xg[I];
      return A0(void (-1 * 266 + 8023 + -7757) === f ? _e(I) : f);
    }, o: function(I) {
      _n(at[I].value), bo(I);
    }, y: function(I, f) {
      return I = pi(I, "_emval_take_value"), I = I.readValueFromPointer(f), A0(I);
    }, f: function() {
      it();
    }, q: function(I, f, b) {
      Ce.copyWithin(I, f, f + b);
    }, r: function(I) {
      I >>>= 4 * -2479 + 8153 + 1763;
      var f = Ce.length;
      if (3098634204 + 1334012 * -713 < I) return !(-1 * -7434 + -561 * 1 + 1 * -6872);
      for (var b = 12 * 223 + -8790 + 6115; 4 >= b; b *= 3 * -639 + -8 * -796 + -4449) {
        var y = f * (1 + 0.2 / b);
        y = Math.min(y, I + (-152797968 + 2 * 28566847 + -19632757 * -10)), y = Math.max(4 * 4606900 + 1 * -1608806 + -41578, I, y), 2 * 2869 + 6399 + -12137 < y % (-11826 + 104543 * -1 + 181905) && (y += -7512 + 1 * 102148 + 97 * -300 - y % (58139 + 100 * -430 + 50397));
        e: {
          try {
            C.grow(Math.min(198205704 * 20 + 983265935 * 2 + -1 * 3783162302, y) - U.byteLength + (20866 * -2 + 25030 * -1 + -6963 * -19) >>> 8013 + 1 * -7997), je(C.buffer);
            var w = 12305 + -4 * 3076;
            break e;
          } catch {
          }
          w = void (7020 + 270 * -26);
        }
        if (w) return !(-1470 + 14 * 658 + 49 * -158);
      }
      return !(-3 * 2381 + -6289 * -1 + 855);
    }, s: function(I, f) {
      var b = 0;
      return bi().forEach(function(y, w) {
        var S = f + b;
        for (w = ie[I + 4 * w >> -9 * -71 + 30 * -47 + 773] = S, S = 0; S < y.length; ++S) fe[w++ >> -1 * 3452 + -1252 * -2 + 948] = y.charCodeAt(S);
        fe[w >> 0] = -43 + 3275 * 3 + -9782, b += y.length + (1104 * 1 + 7390 + -1 * 8493);
      }), 1 * -5999 + -253 * 10 + 8529;
    }, t: function(I, f) {
      var b = bi();
      ie[I >> -7861 + -1 * 3011 + -1 * -10874] = b.length;
      var y = 4057 + 1691 * -1 + -2366;
      return b.forEach(function(w) {
        y += w.length + 1;
      }), ie[f >> 17868 + 17866 * -1] = y, -977 * 2 + 5918 + -2 * 1982;
    }, a: C };
    (function() {
      function I(H) {
        H = H.exports, H = yi(H), t.asm = H, qe--, t.monitorRunDependencies && t.monitorRunDependencies(qe), 29 * 255 + -125 * -44 + -1 * 12895 == qe && At && (H = At, At = null, H());
      }
      function f(H) {
        I(H.instance);
      }
      function b(H) {
        return jc().then(function(G) {
          return WebAssembly.instantiate(G, w);
        }).then(H, function(G) {
          h("failed to asynchronously prepare wasm: " + G), it(G);
        });
      }
      var y = {};
      y.a = og;
      var w = y;
      if (qe++, t.monitorRunDependencies && t.monitorRunDependencies(qe), t.instantiateWasm) try {
        var S = t.instantiateWasm(w, I);
        return S = yi(S);
      } catch (H) {
        return h("Module.instantiateWasm callback failed with error: " + H), !1;
      }
      return function() {
        if (l || typeof WebAssembly.instantiateStreaming != "function" || yt() || Ut("file://") || typeof fetch != "function") return b(f);
        var H = {};
        H.credentials = "same-origin", fetch(It, H).then(function(G) {
          return WebAssembly.instantiateStreaming(G, w).then(f, function(K) {
            return h("wasm streaming compile failed: " + K), h("falling back to ArrayBuffer instantiation"), b(f);
          });
        });
      }(), {};
    })();
    var vi = t.___wasm_call_ctors = function() {
      return (vi = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, Un = t._malloc = function() {
      return (Un = t._malloc = t.asm.C).apply(null, arguments);
    }, Ot = t._free = function() {
      return (Ot = t._free = t.asm.D).apply(null, arguments);
    }, wi = t.___getTypeName = function() {
      return (wi = t.___getTypeName = t.asm.E).apply(null, arguments);
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
    var zn;
    At = function I() {
      zn || Wo(), zn || (At = I);
    };
    function Wo() {
      function I() {
        if (!zn && (zn = !0, t.calledRun = !(8171 + 8171 * -1), !m)) {
          if (Fn(be), Fn(Ee), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var f = t.postRun.shift();
            Je.unshift(f);
          }
          Fn(Je);
        }
      }
      if (!(17 * -439 + 1 * -2815 + 10278 < qe)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) h0();
        Fn(Me), 1 * 475 + 7969 + -8444 < qe || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, 1), I();
        }, -1 * -3037 + -31 * 58 + -1238)) : I());
      }
    }
    if (t.run = Wo, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); 59 * -109 + -2955 + 9386 < t.preInit.length; ) t.preInit.pop()();
    return Wo(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const mc = Symbol("Comlink.proxy"), u1 = Symbol("Comlink.endpoint"), l1 = Symbol("Comlink.releaseProxy"), To = Symbol("Comlink.finalizer"), mx = Symbol("Comlink.thrown"), bc = (x) => typeof x == "object" && x !== null || typeof x == "function", I1 = {
  canHandle: (x) => bc(x) && x[mc],
  serialize(x) {
    const { port1: o, port2: t } = new MessageChannel();
    return yc(x, o), [t, [t]];
  },
  deserialize(x) {
    return x.start(), vc(x);
  }
}, f1 = {
  canHandle: (x) => bc(x) && mx in x,
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
}, Ac = /* @__PURE__ */ new Map([
  ["proxy", I1],
  ["throw", f1]
]);
function C1(x, o) {
  for (const t of x)
    if (o === t || t === "*" || t instanceof RegExp && t.test(o))
      return !0;
  return !1;
}
function yc(x, o = globalThis, t = ["*"]) {
  o.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!C1(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: i, path: a } = Object.assign({ path: [] }, n.data), s = (n.data.argumentList || []).map(r0);
    let c;
    try {
      const u = a.slice(0, -1).reduce((h, l) => h[l], x), g = a.reduce((h, l) => h[l], x);
      switch (i) {
        case "GET":
          c = g;
          break;
        case "SET":
          u[a.slice(-1)[0]] = r0(n.data.value), c = !0;
          break;
        case "APPLY":
          c = g.apply(u, s);
          break;
        case "CONSTRUCT":
          {
            const h = new g(...s);
            c = y1(h);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: h, port2: l } = new MessageChannel();
            yc(x, l), c = A1(h, [h]);
          }
          break;
        case "RELEASE":
          c = void 0;
          break;
        default:
          return;
      }
    } catch (u) {
      c = { value: u, [mx]: 0 };
    }
    Promise.resolve(c).catch((u) => ({ value: u, [mx]: 0 })).then((u) => {
      const [g, h] = Yx(u);
      o.postMessage(Object.assign(Object.assign({}, g), { id: r }), h), i === "RELEASE" && (o.removeEventListener("message", e), Wc(o), To in x && typeof x[To] == "function" && x[To]());
    }).catch((u) => {
      const [g, h] = Yx({
        value: new TypeError("Unserializable return value"),
        [mx]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, g), { id: r }), h);
    });
  }), o.start && o.start();
}
function h1(x) {
  return x.constructor.name === "MessagePort";
}
function Wc(x) {
  h1(x) && x.close();
}
function vc(x, o) {
  return hr(x, [], o);
}
function rx(x) {
  if (x)
    throw new Error("Proxy has been released and is not useable");
}
function wc(x) {
  return O0(x, {
    type: "RELEASE"
  }).then(() => {
    Wc(x);
  });
}
const Fx = /* @__PURE__ */ new WeakMap(), Dx = "FinalizationRegistry" in globalThis && new FinalizationRegistry((x) => {
  const o = (Fx.get(x) || 0) - 1;
  Fx.set(x, o), o === 0 && wc(x);
});
function p1(x, o) {
  const t = (Fx.get(o) || 0) + 1;
  Fx.set(o, t), Dx && Dx.register(x, o, x);
}
function m1(x) {
  Dx && Dx.unregister(x);
}
function hr(x, o = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(r, i) {
      if (rx(e), i === l1)
        return () => {
          m1(n), wc(x), e = !0;
        };
      if (i === "then") {
        if (o.length === 0)
          return { then: () => n };
        const a = O0(x, {
          type: "GET",
          path: o.map((s) => s.toString())
        }).then(r0);
        return a.then.bind(a);
      }
      return hr(x, [...o, i]);
    },
    set(r, i, a) {
      rx(e);
      const [s, c] = Yx(a);
      return O0(x, {
        type: "SET",
        path: [...o, i].map((u) => u.toString()),
        value: s
      }, c).then(r0);
    },
    apply(r, i, a) {
      rx(e);
      const s = o[o.length - 1];
      if (s === u1)
        return O0(x, {
          type: "ENDPOINT"
        }).then(r0);
      if (s === "bind")
        return hr(x, o.slice(0, -1));
      const [c, u] = Aa(a);
      return O0(x, {
        type: "APPLY",
        path: o.map((g) => g.toString()),
        argumentList: c
      }, u).then(r0);
    },
    construct(r, i) {
      rx(e);
      const [a, s] = Aa(i);
      return O0(x, {
        type: "CONSTRUCT",
        path: o.map((c) => c.toString()),
        argumentList: a
      }, s).then(r0);
    }
  });
  return p1(n, x), n;
}
function b1(x) {
  return Array.prototype.concat.apply([], x);
}
function Aa(x) {
  const o = x.map(Yx);
  return [o.map((t) => t[0]), b1(o.map((t) => t[1]))];
}
const Sc = /* @__PURE__ */ new WeakMap();
function A1(x, o) {
  return Sc.set(x, o), x;
}
function y1(x) {
  return Object.assign(x, { [mc]: !0 });
}
function Yx(x) {
  for (const [o, t] of Ac)
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
    Sc.get(x) || []
  ];
}
function r0(x) {
  switch (x.type) {
    case "HANDLER":
      return Ac.get(x.name).deserialize(x.value);
    case "RAW":
      return x.value;
  }
}
function O0(x, o, t) {
  return new Promise((e) => {
    const n = W1();
    x.addEventListener("message", function r(i) {
      !i.data || !i.data.id || i.data.id !== n || (x.removeEventListener("message", r), e(i.data));
    }), x.start && x.start(), x.postMessage(Object.assign({ id: n }, o), t);
  });
}
function W1() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const Bc = "dmFyIGNlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgbGUgPSAoYSwgdSwgZSkgPT4gdSBpbiBhID8gY2UoYSwgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IGFbdV0gPSBlOwp2YXIgWW4gPSAoYSwgdSwgZSkgPT4gbGUoYSwgdHlwZW9mIHUgIT0gInN5bWJvbCIgPyB1ICsgIiIgOiB1LCBlKTsKY29uc3Qga3QgPSB7CiAgc2ltZDogInNhbV9zaW1kLndhc20iLAogIHNhbTogInNhbS53YXNtIgp9LCBmZSA9IGFzeW5jICgpID0+IFdlYkFzc2VtYmx5LnZhbGlkYXRlKG5ldyBVaW50OEFycmF5KFswLCA5NywgMTE1LCAxMDksIDEsIDAsIDAsIDAsIDEsIDUsIDEsIDk2LCAwLCAxLCAxMjMsIDMsIDIsIDEsIDAsIDEwLCAxMCwgMSwgOCwgMCwgNjUsIDAsIDI1MywgMTUsIDI1MywgOTgsIDExXSkpOwpjbGFzcyBJIGV4dGVuZHMgRXJyb3IgewogIGNvbnN0cnVjdG9yKGUsIG0pIHsKICAgIHN1cGVyKGUpOwogICAgWW4odGhpcywgImNhdXNlIik7CiAgICB0aGlzLm5hbWUgPSAiQXV0b0NhcHR1cmVFcnJvciIsIHRoaXMuY2F1c2UgPSBtOwogIH0KICAvLyBDaGFuZ2UgdGhpcyB0byBEZWNvcmF0b3Igd2hlbiB0aGV5IHdpbGwgYmUgaW4gc3RhYmxlIHJlbGVhc2UKICBzdGF0aWMgbG9nRXJyb3IoZSkgewogIH0KICBzdGF0aWMgZnJvbUNhbWVyYUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgSSkKICAgICAgcmV0dXJuIGU7CiAgICBsZXQgbTsKICAgIHN3aXRjaCAoZS5uYW1lKSB7CiAgICAgIGNhc2UgIk92ZXJjb25zdHJhaW5lZEVycm9yIjoKICAgICAgICBtID0gIk1pbmltdW0gcXVhbGl0eSByZXF1aXJlbWVudHMgYXJlIG5vdCBtZXQgYnkgeW91ciBjYW1lcmEiOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RSZWFkYWJsZUVycm9yIjoKICAgICAgY2FzZSAiQWJvcnRFcnJvciI6CiAgICAgICAgbSA9ICJUaGUgd2ViY2FtIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYXBwbGljYXRpb24iOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RBbGxvd2VkRXJyb3IiOgogICAgICAgIG0gPSAiVG8gdXNlIHlvdXIgY2FtZXJhLCB5b3UgbXVzdCBhbGxvdyBwZXJtaXNzaW9ucyI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEZvdW5kRXJyb3IiOgogICAgICAgIG0gPSAiVGhlcmUgaXMgbm8gY2FtZXJhIGF2YWlsYWJsZSB0byB5b3UiOwogICAgICAgIGJyZWFrOwogICAgICBkZWZhdWx0OgogICAgICAgIG0gPSAiQW4gdW5rbm93biBjYW1lcmEgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgICAgICBicmVhazsKICAgIH0KICAgIHJldHVybiBuZXcgSShtLCBlKTsKICB9CiAgc3RhdGljIGZyb21FcnJvcihlKSB7CiAgICBpZiAodGhpcy5sb2dFcnJvcihlKSwgZSBpbnN0YW5jZW9mIEkpCiAgICAgIHJldHVybiBlOwogICAgY29uc3QgbSA9ICJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCI7CiAgICByZXR1cm4gbmV3IEkobSk7CiAgfQp9CmNvbnN0IGRlID0gewogIFJHQjogIlJHQiIsCiAgUkdCQTogIlJHQkEiCn0sIGhlID0gKGEpID0+IE51bWJlci5wYXJzZUZsb2F0KGEudG9GaXhlZCgzKSksIHllID0gKGEsIHUpID0+IE1hdGgubWluKGEsIHUpOwp2YXIgcGUgPSBmdW5jdGlvbigpIHsKICB2YXIgYSA9IHR5cGVvZiBkb2N1bWVudCA8ICJ1IiAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ID8gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMgOiB2b2lkIDA7CiAgcmV0dXJuIGZ1bmN0aW9uKHUpIHsKICAgIHUgPSB1IHx8IHt9OwogICAgdmFyIGU7CiAgICBlIHx8IChlID0gdHlwZW9mIHUgPCAidSIgPyB1IDoge30pOwogICAgdmFyIG0sIGc7CiAgICBlLnJlYWR5ID0gbmV3IFByb21pc2UoZnVuY3Rpb24obiwgdCkgewogICAgICBtID0gbiwgZyA9IHQ7CiAgICB9KTsKICAgIHZhciBDID0ge30sIEE7CiAgICBmb3IgKEEgaW4gZSkgZS5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoQ1tBXSA9IGVbQV0pOwogICAgdmFyIE0gPSAiLi90aGlzLnByb2dyYW0iLCBPID0gITEsIFQgPSAhMTsKICAgIE8gPSB0eXBlb2Ygd2luZG93ID09ICJvYmplY3QiLCBUID0gdHlwZW9mIGltcG9ydFNjcmlwdHMgPT0gImZ1bmN0aW9uIjsKICAgIHZhciBfID0gIiIsIFM7CiAgICAoTyB8fCBUKSAmJiAoVCA/IF8gPSBzZWxmLmxvY2F0aW9uLmhyZWYgOiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIChfID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpLCBhICYmIChfID0gYSksIF8uaW5kZXhPZigiYmxvYjoiKSAhPT0gMCA/IF8gPSBfLnN1YnN0cigwLCBfLmxhc3RJbmRleE9mKCIvIikgKyAxKSA6IF8gPSAiIiwgVCAmJiAoUyA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdmFyIHQgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsKICAgICAgcmV0dXJuIHQub3BlbigiR0VUIiwgbiwgITEpLCB0LnJlc3BvbnNlVHlwZSA9ICJhcnJheWJ1ZmZlciIsIHQuc2VuZChudWxsKSwgbmV3IFVpbnQ4QXJyYXkodC5yZXNwb25zZSk7CiAgICB9KSk7CiAgICB2YXIgRSA9IGUucHJpbnRFcnIgfHwgY29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7CiAgICBmb3IgKEEgaW4gQykgQy5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoZVtBXSA9IENbQV0pOwogICAgQyA9IG51bGwsIGUudGhpc1Byb2dyYW0gJiYgKE0gPSBlLnRoaXNQcm9ncmFtKTsKICAgIHZhciBXOwogICAgZS53YXNtQmluYXJ5ICYmIChXID0gZS53YXNtQmluYXJ5KSwgZS5ub0V4aXRSdW50aW1lICYmIGUubm9FeGl0UnVudGltZSwgdHlwZW9mIFdlYkFzc2VtYmx5ICE9ICJvYmplY3QiICYmIHNuKCJubyBuYXRpdmUgd2FzbSBzdXBwb3J0IGRldGVjdGVkIik7CiAgICB2YXIgSCwga24gPSAhMTsKICAgIGZ1bmN0aW9uIEtuKG4pIHsKICAgICAgbiB8fCBzbigiQXNzZXJ0aW9uIGZhaWxlZDogdW5kZWZpbmVkIik7CiAgICB9CiAgICB2YXIgUW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0ZjgiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFV0KG4sIHQsIHIpIHsKICAgICAgdmFyIGkgPSBGOwogICAgICBpZiAoMCA8IHIpIHsKICAgICAgICByID0gdCArIHIgLSAxOwogICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgbi5sZW5ndGg7ICsrbykgewogICAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICBpZiAoNTUyOTYgPD0gcyAmJiA1NzM0MyA+PSBzKSB7CiAgICAgICAgICAgIHZhciBsID0gbi5jaGFyQ29kZUF0KCsrbyk7CiAgICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgICAgfQogICAgICAgICAgaWYgKDEyNyA+PSBzKSB7CiAgICAgICAgICAgIGlmICh0ID49IHIpIGJyZWFrOwogICAgICAgICAgICBpW3QrK10gPSBzOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgaWYgKDIwNDcgPj0gcykgewogICAgICAgICAgICAgIGlmICh0ICsgMSA+PSByKSBicmVhazsKICAgICAgICAgICAgICBpW3QrK10gPSAxOTIgfCBzID4+IDY7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgaWYgKDY1NTM1ID49IHMpIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMiA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDIyNCB8IHMgPj4gMTI7CiAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMyA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDI0MCB8IHMgPj4gMTgsIGlbdCsrXSA9IDEyOCB8IHMgPj4gMTIgJiA2MzsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyA+PiA2ICYgNjM7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyAmIDYzOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBpW3RdID0gMDsKICAgICAgfQogICAgfQogICAgdmFyIHFuID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGYtMTZsZSIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gRHQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gbiA+PiAxLCBpID0gciArIHQgLyAyOyAhKHIgPj0gaSkgJiYgeW5bcl07ICkgKytyOwogICAgICBpZiAociA8PD0gMSwgMzIgPCByIC0gbiAmJiBxbikgcmV0dXJuIHFuLmRlY29kZShGLnN1YmFycmF5KG4sIHIpKTsKICAgICAgZm9yIChyID0gMCwgaSA9ICIiOyA7ICkgewogICAgICAgIHZhciBvID0gUVtuICsgMiAqIHIgPj4gMV07CiAgICAgICAgaWYgKG8gPT0gMCB8fCByID09IHQgLyAyKSByZXR1cm4gaTsKICAgICAgICArK3IsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQnQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDIgPiByKSByZXR1cm4gMDsKICAgICAgciAtPSAyOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSByIDwgMiAqIG4ubGVuZ3RoID8gciAvIDIgOiBuLmxlbmd0aDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCByOyArK28pIFFbdCA+PiAxXSA9IG4uY2hhckNvZGVBdChvKSwgdCArPSAyOwogICAgICByZXR1cm4gUVt0ID4+IDFdID0gMCwgdCAtIGk7CiAgICB9CiAgICBmdW5jdGlvbiB6dChuKSB7CiAgICAgIHJldHVybiAyICogbi5sZW5ndGg7CiAgICB9CiAgICBmdW5jdGlvbiBWdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSAwLCBpID0gIiI7ICEociA+PSB0IC8gNCk7ICkgewogICAgICAgIHZhciBvID0ga1tuICsgNCAqIHIgPj4gMl07CiAgICAgICAgaWYgKG8gPT0gMCkgYnJlYWs7CiAgICAgICAgKytyLCA2NTUzNiA8PSBvID8gKG8gLT0gNjU1MzYsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IG8gPj4gMTAsIDU2MzIwIHwgbyAmIDEwMjMpKSA6IGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgICByZXR1cm4gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEd0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCA0ID4gcikgcmV0dXJuIDA7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IGkgKyByIC0gNDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBuLmxlbmd0aDsgKytvKSB7CiAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgaWYgKDU1Mjk2IDw9IHMgJiYgNTczNDMgPj0gcykgewogICAgICAgICAgdmFyIGwgPSBuLmNoYXJDb2RlQXQoKytvKTsKICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgIH0KICAgICAgICBpZiAoa1t0ID4+IDJdID0gcywgdCArPSA0LCB0ICsgNCA+IHIpIGJyZWFrOwogICAgICB9CiAgICAgIHJldHVybiBrW3QgPj4gMl0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIFl0KG4pIHsKICAgICAgZm9yICh2YXIgdCA9IDAsIHIgPSAwOyByIDwgbi5sZW5ndGg7ICsrcikgewogICAgICAgIHZhciBpID0gbi5jaGFyQ29kZUF0KHIpOwogICAgICAgIDU1Mjk2IDw9IGkgJiYgNTczNDMgPj0gaSAmJiArK3IsIHQgKz0gNDsKICAgICAgfQogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBLLCBZLCBGLCBRLCB5biwgaywgVSwgbnQsIHR0OwogICAgZnVuY3Rpb24gZXQobikgewogICAgICBLID0gbiwgZS5IRUFQOCA9IFkgPSBuZXcgSW50OEFycmF5KG4pLCBlLkhFQVAxNiA9IFEgPSBuZXcgSW50MTZBcnJheShuKSwgZS5IRUFQMzIgPSBrID0gbmV3IEludDMyQXJyYXkobiksIGUuSEVBUFU4ID0gRiA9IG5ldyBVaW50OEFycmF5KG4pLCBlLkhFQVBVMTYgPSB5biA9IG5ldyBVaW50MTZBcnJheShuKSwgZS5IRUFQVTMyID0gVSA9IG5ldyBVaW50MzJBcnJheShuKSwgZS5IRUFQRjMyID0gbnQgPSBuZXcgRmxvYXQzMkFycmF5KG4pLCBlLkhFQVBGNjQgPSB0dCA9IG5ldyBGbG9hdDY0QXJyYXkobik7CiAgICB9CiAgICB2YXIgcnQgPSBlLklOSVRJQUxfTUVNT1JZIHx8IDE2Nzc3MjE2OwogICAgZS53YXNtTWVtb3J5ID8gSCA9IGUud2FzbU1lbW9yeSA6IEggPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogcnQgLyA2NTUzNiwgbWF4aW11bTogMzI3NjggfSksIEggJiYgKEsgPSBILmJ1ZmZlciksIHJ0ID0gSy5ieXRlTGVuZ3RoLCBldChLKTsKICAgIHZhciBpdCA9IFtdLCBhdCA9IFtdLCBadCA9IFtdLCBvdCA9IFtdOwogICAgZnVuY3Rpb24gJHQoKSB7CiAgICAgIHZhciBuID0gZS5wcmVSdW4uc2hpZnQoKTsKICAgICAgaXQudW5zaGlmdChuKTsKICAgIH0KICAgIHZhciBaID0gMCwgb24gPSBudWxsOwogICAgZS5wcmVsb2FkZWRJbWFnZXMgPSB7fSwgZS5wcmVsb2FkZWRBdWRpb3MgPSB7fTsKICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgdGhyb3cgZS5vbkFib3J0ICYmIGUub25BYm9ydChuKSwgRShuKSwga24gPSAhMCwgbiA9IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoImFib3J0KCIgKyBuICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIiksIGcobiksIG47CiAgICB9CiAgICBmdW5jdGlvbiBSbihuKSB7CiAgICAgIHZhciB0ID0gJDsKICAgICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/IHQuc3RhcnRzV2l0aChuKSA6IHQuaW5kZXhPZihuKSA9PT0gMDsKICAgIH0KICAgIGZ1bmN0aW9uIHN0KCkgewogICAgICByZXR1cm4gUm4oImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKTsKICAgIH0KICAgIHZhciAkID0gInNhbS53YXNtIjsKICAgIGlmICghc3QoKSkgewogICAgICB2YXIgdXQgPSAkOwogICAgICAkID0gZS5sb2NhdGVGaWxlID8gZS5sb2NhdGVGaWxlKHV0LCBfKSA6IF8gKyB1dDsKICAgIH0KICAgIGZ1bmN0aW9uIGN0KCkgewogICAgICB0cnkgewogICAgICAgIGlmIChXKSByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoVyk7CiAgICAgICAgaWYgKFMpIHJldHVybiBTKCQpOwogICAgICAgIHRocm93ICJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZCI7CiAgICAgIH0gY2F0Y2ggKG4pIHsKICAgICAgICBzbihuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gWHQoKSB7CiAgICAgIHJldHVybiBXIHx8ICFPICYmICFUIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iIHx8IFJuKCJmaWxlOi8vIikgPyBQcm9taXNlLnJlc29sdmUoKS50aGVuKGN0KSA6IGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihuKSB7CiAgICAgICAgaWYgKCFuLm9rKSB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArICQgKyAiJyI7CiAgICAgICAgcmV0dXJuIG4uYXJyYXlCdWZmZXIoKTsKICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7CiAgICAgICAgcmV0dXJuIGN0KCk7CiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24gcG4obikgewogICAgICBmb3IgKDsgMCA8IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4uc2hpZnQoKTsKICAgICAgICBpZiAodHlwZW9mIHQgPT0gImZ1bmN0aW9uIikgdChlKTsKICAgICAgICBlbHNlIHsKICAgICAgICAgIHZhciByID0gdC5CYTsKICAgICAgICAgIHR5cGVvZiByID09ICJudW1iZXIiID8gdC50YSA9PT0gdm9pZCAwID8geG4oInYiLCByKSgpIDogeG4oInZpIiwgcikodC50YSkgOiByKHQudGEgPT09IHZvaWQgMCA/IG51bGwgOiB0LnRhKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHhuKG4sIHQpIHsKICAgICAgdmFyIHIgPSBbXTsKICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgewogICAgICAgIHIubGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsKICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgcltpXSA9IGFyZ3VtZW50c1tpXTsKICAgICAgICByZXR1cm4gciAmJiByLmxlbmd0aCA/IGVbImR5bkNhbGxfIiArIG5dLmFwcGx5KG51bGwsIFt0XS5jb25jYXQocikpIDogZVsiZHluQ2FsbF8iICsgbl0uY2FsbChudWxsLCB0KTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEp0KG4pIHsKICAgICAgdGhpcy5kYSA9IG4gLSAxNiwgdGhpcy5PYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyA4ID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5MYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyAwID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5NYSA9IGZ1bmN0aW9uKCkgewogICAgICAgIGtbdGhpcy5kYSArIDQgPj4gMl0gPSAwOwogICAgICB9LCB0aGlzLkthID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTIgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLk5hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTMgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLkZhID0gZnVuY3Rpb24odCwgcikgewogICAgICAgIHRoaXMuT2EodCksIHRoaXMuTGEociksIHRoaXMuTWEoKSwgdGhpcy5LYSgpLCB0aGlzLk5hKCk7CiAgICAgIH07CiAgICB9CiAgICBmdW5jdGlvbiBtbigpIHsKICAgICAgcmV0dXJuIDAgPCBtbi54YTsKICAgIH0KICAgIGZ1bmN0aW9uIEZuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIDE7CiAgICAgICAgY2FzZSA0OgogICAgICAgICAgcmV0dXJuIDI7CiAgICAgICAgY2FzZSA4OgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gdHlwZSBzaXplOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIHZhciBsdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFIobikgewogICAgICBmb3IgKHZhciB0ID0gIiI7IEZbbl07ICkgdCArPSBsdFtGW24rK11dOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBxID0ge30sIFggPSB7fSwgdm4gPSB7fTsKICAgIGZ1bmN0aW9uIEluKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIGpuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBJbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gTG4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gam4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIG5uID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBubihuKTsKICAgIH0KICAgIHZhciBmdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIGduKG4pIHsKICAgICAgdGhyb3cgbmV3IGZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gdG4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGMpIHsKICAgICAgICBjID0gcihjKSwgYy5sZW5ndGggIT09IG4ubGVuZ3RoICYmIGduKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBuLmxlbmd0aDsgKyt5KSBEKG5beV0sIGNbeV0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihjKSB7CiAgICAgICAgdm5bY10gPSB0OwogICAgICB9KTsKICAgICAgdmFyIG8gPSBBcnJheSh0Lmxlbmd0aCksIHMgPSBbXSwgbCA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihjLCB5KSB7CiAgICAgICAgWC5oYXNPd25Qcm9wZXJ0eShjKSA/IG9beV0gPSBYW2NdIDogKHMucHVzaChjKSwgcS5oYXNPd25Qcm9wZXJ0eShjKSB8fCAocVtjXSA9IFtdKSwgcVtjXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgb1t5XSA9IFhbY10sICsrbCwgbCA9PT0gcy5sZW5ndGggJiYgaShvKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCBzLmxlbmd0aCA9PT0gMCAmJiBpKG8pOwogICAgfQogICAgZnVuY3Rpb24gRChuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgWC5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKSByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBYW25dID0gdCwgZGVsZXRlIHZuW25dLCBxLmhhc093blByb3BlcnR5KG4pICYmICh0ID0gcVtuXSwgZGVsZXRlIHFbbl0sIHQuZm9yRWFjaChmdW5jdGlvbihvKSB7CiAgICAgICAgbygpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBObihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIEhuID0gITE7CiAgICBmdW5jdGlvbiBkdCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIGh0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gdW4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChIbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpIHIgPSByLnZhbHVlLCByLmRhID8gaHQocikgOiBjb25zb2xlLndhcm4oIm9iamVjdCBhbHJlYWR5IGRlbGV0ZWQ6ICIgKyByLmRhKTsKICAgICAgfSksIHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiBIbi5yZWdpc3Rlcih0LCB0LkEsIHQuQSksIHQ7CiAgICAgIH0sIGR0ID0gZnVuY3Rpb24odCkgewogICAgICAgIEhuLnVucmVnaXN0ZXIodC5BKTsKICAgICAgfSwgdW4obikpOwogICAgfQogICAgdmFyIGNuID0gdm9pZCAwLCBsbiA9IFtdOwogICAgZnVuY3Rpb24gVW4oKSB7CiAgICAgIGZvciAoOyBsbi5sZW5ndGg7ICkgewogICAgICAgIHZhciBuID0gbG4ucG9wKCk7CiAgICAgICAgbi5BLm9hID0gITEsIG4uZGVsZXRlKCk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIFYoKSB7CiAgICB9CiAgICB2YXIgeXQgPSB7fTsKICAgIGZ1bmN0aW9uIFF0KG4sIHQpIHsKICAgICAgdmFyIHIgPSBlOwogICAgICBpZiAocltuXS5qYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdmFyIGkgPSByW25dOwogICAgICAgIHJbbl0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiByW25dLmphLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpIHx8IHYoIkZ1bmN0aW9uICciICsgdCArICInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdHMgb25lIG9mICgiICsgcltuXS5qYSArICIpISIpLCByW25dLmphW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfSwgcltuXS5qYSA9IFtdLCByW25dLmphW2kueWFdID0gaTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcHQobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pID8gKChyID09PSB2b2lkIDAgfHwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIGVbbl0uamFbcl0gIT09IHZvaWQgMCkgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICciICsgbiArICInIHR3aWNlIiksIFF0KG4sIG4pLCBlLmhhc093blByb3BlcnR5KHIpICYmIHYoIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyByICsgIikhIiksIGVbbl0uamFbcl0gPSB0KSA6IChlW25dID0gdCwgciAhPT0gdm9pZCAwICYmIChlW25dLlJhID0gcikpOwogICAgfQogICAgZnVuY3Rpb24gcXQobiwgdCwgciwgaSwgbywgcywgbCwgYykgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmNvbnN0cnVjdG9yID0gdCwgdGhpcy5tYSA9IHIsIHRoaXMubmEgPSBpLCB0aGlzLmlhID0gbywgdGhpcy5DYSA9IHMsIHRoaXMucWEgPSBsLCB0aGlzLkFhID0gYzsKICAgIH0KICAgIGZ1bmN0aW9uIHduKG4sIHQsIHIpIHsKICAgICAgZm9yICg7IHQgIT09IHI7ICkgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiBuZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiB0ZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpIHIgPSB0LkEuZ2E7CiAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIGVuKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGkuZGVsZXRlKCk7CiAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgIH0KICAgICAgcmV0dXJuIHI7CiAgICB9CiAgICBmdW5jdGlvbiBlZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyB0LkEuZmEubmFtZSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBbihuKSB7CiAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShVW24gPj4gMl0pOwogICAgfQogICAgZnVuY3Rpb24gbXQobiwgdCwgcikgewogICAgICByZXR1cm4gdCA9PT0gciA/IG4gOiByLmlhID09PSB2b2lkIDAgPyBudWxsIDogKG4gPSBtdChuLCB0LCByLmlhKSwgbiA9PT0gbnVsbCA/IG51bGwgOiByLkFhKG4pKTsKICAgIH0KICAgIHZhciBmbiA9IHt9OwogICAgZnVuY3Rpb24gcmUobiwgdCkgewogICAgICBmb3IgKHQgPT09IHZvaWQgMCAmJiB2KCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsgbi5pYTsgKSB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiBmblt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIF9uKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBnbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIGduKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgdW4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBCKG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IHRlIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyBuZSA6IGVlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiB2dChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgZ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gRyhuLCB0KSB7CiAgICAgIG4gPSBSKG4pOwogICAgICB2YXIgciA9IHhuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgZ3QgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB3dChuKSB7CiAgICAgIG4gPSBXdChuKTsKICAgICAgdmFyIHQgPSBSKG4pOwogICAgICByZXR1cm4geihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIGRuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcihzKSB7CiAgICAgICAgb1tzXSB8fCBYW3NdIHx8ICh2bltzXSA/IHZuW3NdLmZvckVhY2gocikgOiAoaS5wdXNoKHMpLCBvW3NdID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBvID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IGd0KG4gKyAiOiAiICsgaS5tYXAod3QpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspIHIucHVzaChrWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIHduKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBEbiA9IFtdLCBqID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIEJuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1qW25dLkphID09PSAwICYmIChqW25dID0gdm9pZCAwLCBEbi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIGVuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IERuLmxlbmd0aCA/IERuLnBvcCgpIDogai5sZW5ndGg7CiAgICAgICAgICByZXR1cm4galt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHJuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpIHJldHVybiAibnVsbCI7CiAgICAgIHZhciB0ID0gdHlwZW9mIG47CiAgICAgIHJldHVybiB0ID09PSAib2JqZWN0IiB8fCB0ID09PSAiYXJyYXkiIHx8IHQgPT09ICJmdW5jdGlvbiIgPyBuLnRvU3RyaW5nKCkgOiAiIiArIG47CiAgICB9CiAgICBmdW5jdGlvbiBpZShuLCB0KSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShudFtyID4+IDJdKTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHR0W3IgPj4gM10pOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBmbG9hdCB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGFlKG4pIHsKICAgICAgdmFyIHQgPSBGdW5jdGlvbjsKICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBqbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIG9lKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBZW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIEZbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gUVtpID4+IDFdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHluW2kgPj4gMV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4ga1tpID4+IDJdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFVbaSA+PiAyXTsKICAgICAgICAgIH07CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gaW50ZWdlciB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHpuKG4pIHsKICAgICAgcmV0dXJuIG4gfHwgdigiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gIiArIG4pLCBqW25dLnZhbHVlOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCkgewogICAgICB2YXIgciA9IFhbbl07CiAgICAgIHJldHVybiByID09PSB2b2lkIDAgJiYgdih0ICsgIiBoYXMgdW5rbm93biB0eXBlICIgKyB3dChuKSksIHI7CiAgICB9CiAgICB2YXIgc2UgPSB7fSwgVHQgPSB7fTsKICAgIGZ1bmN0aW9uIEV0KCkgewogICAgICBpZiAoIVZuKSB7CiAgICAgICAgdmFyIG4gPSB7IFVTRVI6ICJ3ZWJfdXNlciIsIExPR05BTUU6ICJ3ZWJfdXNlciIsIFBBVEg6ICIvIiwgUFdEOiAiLyIsIEhPTUU6ICIvaG9tZS93ZWJfdXNlciIsIExBTkc6ICh0eXBlb2YgbmF2aWdhdG9yID09ICJvYmplY3QiICYmIG5hdmlnYXRvci5sYW5ndWFnZXMgJiYgbmF2aWdhdG9yLmxhbmd1YWdlc1swXSB8fCAiQyIpLnJlcGxhY2UoIi0iLCAiXyIpICsgIi5VVEYtOCIsIF86IE0gfHwgIi4vdGhpcy5wcm9ncmFtIiB9LCB0OwogICAgICAgIGZvciAodCBpbiBUdCkgblt0XSA9IFR0W3RdOwogICAgICAgIHZhciByID0gW107CiAgICAgICAgZm9yICh0IGluIG4pIHIucHVzaCh0ICsgIj0iICsgblt0XSk7CiAgICAgICAgVm4gPSByOwogICAgICB9CiAgICAgIHJldHVybiBWbjsKICAgIH0KICAgIHZhciBWbiwgUHQgPSBbXTsKICAgIGZ1bmN0aW9uIE10KG4pIHsKICAgICAgdmFyIHQgPSB7fSwgcjsKICAgICAgZm9yIChyIGluIG4pIChmdW5jdGlvbihpKSB7CiAgICAgICAgdmFyIG8gPSBuW2ldOwogICAgICAgIHRbaV0gPSB0eXBlb2YgbyA9PSAiZnVuY3Rpb24iID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICBQdC5wdXNoKGkpOwogICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgcmV0dXJuIG8uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgICAgICAgIH0gZmluYWxseSB7CiAgICAgICAgICAgIGlmIChrbikgcmV0dXJuOwogICAgICAgICAgICB2YXIgcyA9IFB0LnBvcCgpOwogICAgICAgICAgICBLbihzID09PSBpKTsKICAgICAgICAgIH0KICAgICAgICB9IDogbzsKICAgICAgfSkocik7CiAgICAgIHJldHVybiB0OwogICAgfQogICAgZm9yICh2YXIgT3QgPSBBcnJheSgyNTYpLCBUbiA9IDA7IDI1NiA+IFRuOyArK1RuKSBPdFtUbl0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFRuKTsKICAgIGx0ID0gT3QsIG5uID0gZS5CaW5kaW5nRXJyb3IgPSBMbigiQmluZGluZ0Vycm9yIiksIGZ0ID0gZS5JbnRlcm5hbEVycm9yID0gTG4oIkludGVybmFsRXJyb3IiKSwgVi5wcm90b3R5cGUuaXNBbGlhc09mID0gZnVuY3Rpb24obikgewogICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgViAmJiBuIGluc3RhbmNlb2YgVikpIHJldHVybiAhMTsKICAgICAgdmFyIHQgPSB0aGlzLkEuZmEuZWEsIHIgPSB0aGlzLkEuZGEsIGkgPSBuLkEuZmEuZWE7CiAgICAgIGZvciAobiA9IG4uQS5kYTsgdC5pYTsgKSByID0gdC5xYShyKSwgdCA9IHQuaWE7CiAgICAgIGZvciAoOyBpLmlhOyApIG4gPSBpLnFhKG4pLCBpID0gaS5pYTsKICAgICAgcmV0dXJuIHQgPT09IGkgJiYgciA9PT0gbjsKICAgIH0sIFYucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7CiAgICAgIGlmICh0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5wYSkgcmV0dXJuIHRoaXMuQS5jb3VudC52YWx1ZSArPSAxLCB0aGlzOwogICAgICB2YXIgbiA9IHVuKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLCB7IEE6IHsgdmFsdWU6IEt0KHRoaXMuQSkgfSB9KSk7CiAgICAgIHJldHVybiBuLkEuY291bnQudmFsdWUgKz0gMSwgbi5BLm9hID0gITEsIG47CiAgICB9LCBWLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbigpIHsKICAgICAgdGhpcy5BLmRhIHx8IE5uKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIGR0KHRoaXMpLCBodCh0aGlzLkEpLCB0aGlzLkEucGEgfHwgKHRoaXMuQS5nYSA9IHZvaWQgMCwgdGhpcy5BLmRhID0gdm9pZCAwKTsKICAgIH0sIFYucHJvdG90eXBlLmlzRGVsZXRlZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gIXRoaXMuQS5kYTsKICAgIH0sIFYucHJvdG90eXBlLmRlbGV0ZUxhdGVyID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiB0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgbG4ucHVzaCh0aGlzKSwgbG4ubGVuZ3RoID09PSAxICYmIGNuICYmIGNuKFVuKSwgdGhpcy5BLm9hID0gITAsIHRoaXM7CiAgICB9LCBCLnByb3RvdHlwZS5EYSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgcmV0dXJuIHRoaXMud2EgJiYgKG4gPSB0aGlzLndhKG4pKSwgbjsKICAgIH0sIEIucHJvdG90eXBlLnZhID0gZnVuY3Rpb24obikgewogICAgICB0aGlzLm5hICYmIHRoaXMubmEobik7CiAgICB9LCBCLnByb3RvdHlwZS5hcmdQYWNrQWR2YW5jZSA9IDgsIEIucHJvdG90eXBlLnJlYWRWYWx1ZUZyb21Qb2ludGVyID0gQW4sIEIucHJvdG90eXBlLmRlbGV0ZU9iamVjdCA9IGZ1bmN0aW9uKG4pIHsKICAgICAgbiAhPT0gbnVsbCAmJiBuLmRlbGV0ZSgpOwogICAgfSwgQi5wcm90b3R5cGUuZnJvbVdpcmVUeXBlID0gZnVuY3Rpb24obikgewogICAgICBmdW5jdGlvbiB0KCkgewogICAgICAgIHJldHVybiB0aGlzLnNhID8gX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcy5HYSwgZGE6IHIsIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMsIGRhOiBuIH0pOwogICAgICB9CiAgICAgIHZhciByID0gdGhpcy5EYShuKTsKICAgICAgaWYgKCFyKSByZXR1cm4gdGhpcy52YShuKSwgbnVsbDsKICAgICAgdmFyIGkgPSByZSh0aGlzLmVhLCByKTsKICAgICAgaWYgKGkgIT09IHZvaWQgMCkKICAgICAgICByZXR1cm4gaS5BLmNvdW50LnZhbHVlID09PSAwID8gKGkuQS5kYSA9IHIsIGkuQS5nYSA9IG4sIGkuY2xvbmUoKSkgOiAoaSA9IGkuY2xvbmUoKSwgdGhpcy52YShuKSwgaSk7CiAgICAgIGlmIChpID0gdGhpcy5lYS5DYShyKSwgaSA9IHl0W2ldLCAhaSkgcmV0dXJuIHQuY2FsbCh0aGlzKTsKICAgICAgaSA9IHRoaXMucmEgPyBpLnphIDogaS5wb2ludGVyVHlwZTsKICAgICAgdmFyIG8gPSBtdChyLCB0aGlzLmVhLCBpLmVhKTsKICAgICAgcmV0dXJuIG8gPT09IG51bGwgPyB0LmNhbGwodGhpcykgOiB0aGlzLnNhID8gX24oaS5lYS5tYSwgeyBmYTogaSwgZGE6IG8sIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKAogICAgICAgIGkuZWEubWEsCiAgICAgICAgeyBmYTogaSwgZGE6IG8gfQogICAgICApOwogICAgfSwgZS5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmbikubGVuZ3RoOwogICAgfSwgZS5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gZnVuY3Rpb24oKSB7CiAgICAgIHZhciBuID0gW10sIHQ7CiAgICAgIGZvciAodCBpbiBmbikgZm4uaGFzT3duUHJvcGVydHkodCkgJiYgbi5wdXNoKGZuW3RdKTsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmZsdXNoUGVuZGluZ0RlbGV0ZXMgPSBVbiwgZS5zZXREZWxheUZ1bmN0aW9uID0gZnVuY3Rpb24obikgewogICAgICBjbiA9IG4sIGxuLmxlbmd0aCAmJiBjbiAmJiBjbihVbik7CiAgICB9LCBndCA9IGUuVW5ib3VuZFR5cGVFcnJvciA9IExuKCJVbmJvdW5kVHlwZUVycm9yIiksIGUuY291bnRfZW12YWxfaGFuZGxlcyA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gMCwgdCA9IDU7IHQgPCBqLmxlbmd0aDsgKyt0KSBqW3RdICE9PSB2b2lkIDAgJiYgKytuOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZ2V0X2ZpcnN0X2VtdmFsID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSA1OyBuIDwgai5sZW5ndGg7ICsrbikgaWYgKGpbbl0gIT09IHZvaWQgMCkgcmV0dXJuIGpbbl07CiAgICAgIHJldHVybiBudWxsOwogICAgfSwgYXQucHVzaCh7IEJhOiBmdW5jdGlvbigpIHsKICAgICAgU3QoKTsKICAgIH0gfSk7CiAgICB2YXIgdWUgPSB7CiAgICAgIHo6IGZ1bmN0aW9uKG4pIHsKICAgICAgICByZXR1cm4gRW4obiArIDE2KSArIDE2OwogICAgICB9LAogICAgICB1OiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgdGhyb3cgbmV3IEp0KG4pLkZhKHQsIHIpLCAidW5jYXVnaHRfZXhjZXB0aW9uIiBpbiBtbiA/IG1uLnhhKysgOiBtbi54YSA9IDEsIG47CiAgICAgIH0sCiAgICAgIHc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8pIHsKICAgICAgICB2YXIgcyA9IEZuKHIpOwogICAgICAgIHQgPSBSKHQpLCBEKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICByZXR1cm4gISFsOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGwsIGMpIHsKICAgICAgICAgIHJldHVybiBjID8gaSA6IG87CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICBpZiAociA9PT0gMSkgdmFyIGMgPSBZOwogICAgICAgICAgZWxzZSBpZiAociA9PT0gMikgYyA9IFE7CiAgICAgICAgICBlbHNlIGlmIChyID09PSA0KSBjID0gazsKICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBib29sZWFuIHR5cGUgc2l6ZTogIiArIHQpOwogICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKGNbbCA+PiBzXSk7CiAgICAgICAgfSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGg6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYsIGQsIGgsIHcpIHsKICAgICAgICBkID0gUihkKSwgcyA9IEcobywgcyksIGMgJiYgKGMgPSBHKGwsIGMpKSwgZiAmJiAoZiA9IEcoeSwgZikpLCB3ID0gRyhoLCB3KTsKICAgICAgICB2YXIgUCA9IEluKGQpOwogICAgICAgIHB0KFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGQgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW2ldKTsKICAgICAgICB9KSwgdG4oW24sIHQsIHJdLCBpID8gW2ldIDogW10sIGZ1bmN0aW9uKHApIHsKICAgICAgICAgIGlmIChwID0gcFswXSwgaSkKICAgICAgICAgICAgdmFyIE4gPSBwLmVhLCBiID0gTi5tYTsKICAgICAgICAgIGVsc2UgYiA9IFYucHJvdG90eXBlOwogICAgICAgICAgcCA9IGpuKFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSB4KSB0aHJvdyBuZXcgbm4oIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgIiArIGQpOwogICAgICAgICAgICBpZiAoTC5sYSA9PT0gdm9pZCAwKSB0aHJvdyBuZXcgbm4oZCArICIgaGFzIG5vIGFjY2Vzc2libGUgY29uc3RydWN0b3IiKTsKICAgICAgICAgICAgdmFyIGJ0ID0gTC5sYVthcmd1bWVudHMubGVuZ3RoXTsKICAgICAgICAgICAgaWYgKGJ0ID09PSB2b2lkIDApIHRocm93IG5ldyBubigiVHJpZWQgdG8gaW52b2tlIGN0b3Igb2YgIiArIGQgKyAiIHdpdGggaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdGVkICgiICsgT2JqZWN0LmtleXMoTC5sYSkudG9TdHJpbmcoKSArICIpIHBhcmFtZXRlcnMgaW5zdGVhZCEiKTsKICAgICAgICAgICAgcmV0dXJuIGJ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9KTsKICAgICAgICAgIHZhciB4ID0gT2JqZWN0LmNyZWF0ZShiLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBwIH0gfSk7CiAgICAgICAgICBwLnByb3RvdHlwZSA9IHg7CiAgICAgICAgICB2YXIgTCA9IG5ldyBxdChkLCBwLCB4LCB3LCBOLCBzLCBjLCBmKTsKICAgICAgICAgIE4gPSBuZXcgQihkLCBMLCAhMCwgITEpLCBiID0gbmV3IEIoZCArICIqIiwgTCwgITEsICExKTsKICAgICAgICAgIHZhciBobiA9IG5ldyBCKGQgKyAiIGNvbnN0KiIsIEwsICExLCAhMCk7CiAgICAgICAgICByZXR1cm4geXRbbl0gPSB7IHBvaW50ZXJUeXBlOiBiLCB6YTogaG4gfSwgdnQoUCwgcCksIFtOLCBiLCBobl07CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMpIHsKICAgICAgICBLbigwIDwgdCk7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBvID0gRyhpLCBvKTsKICAgICAgICB2YXIgYyA9IFtzXSwgeSA9IFtdOwogICAgICAgIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGYpIHsKICAgICAgICAgIGYgPSBmWzBdOwogICAgICAgICAgdmFyIGQgPSAiY29uc3RydWN0b3IgIiArIGYubmFtZTsKICAgICAgICAgIGlmIChmLmVhLmxhID09PSB2b2lkIDAgJiYgKGYuZWEubGEgPSBbXSksIGYuZWEubGFbdCAtIDFdICE9PSB2b2lkIDApIHRocm93IG5ldyBubigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIGNvbnN0cnVjdG9ycyB3aXRoIGlkZW50aWNhbCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArICh0IC0gMSkgKyAiKSBmb3IgY2xhc3MgJyIgKyBmLm5hbWUgKyAiJyEgT3ZlcmxvYWQgcmVzb2x1dGlvbiBpcyBjdXJyZW50bHkgb25seSBwZXJmb3JtZWQgdXNpbmcgdGhlIHBhcmFtZXRlciBjb3VudCwgbm90IGFjdHVhbCB0eXBlIGluZm8hIik7CiAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGYubmFtZSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBsKTsKICAgICAgICAgIH0sIHRuKFtdLCBsLCBmdW5jdGlvbihoKSB7CiAgICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggIT09IHQgLSAxICYmIHYoZCArICIgY2FsbGVkIHdpdGggIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArICh0IC0gMSkpLCB5Lmxlbmd0aCA9IDAsIGMubGVuZ3RoID0gdDsKICAgICAgICAgICAgICBmb3IgKHZhciB3ID0gMTsgdyA8IHQ7ICsrdykgY1t3XSA9IGhbd10udG9XaXJlVHlwZSgKICAgICAgICAgICAgICAgIHksCiAgICAgICAgICAgICAgICBhcmd1bWVudHNbdyAtIDFdCiAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICByZXR1cm4gdyA9IG8uYXBwbHkobnVsbCwgYyksIENuKHkpLCBoWzBdLmZyb21XaXJlVHlwZSh3KTsKICAgICAgICAgICAgfSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGI6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYpIHsKICAgICAgICB0ID0gUih0KSwgbyA9IEcoaSwgbyksIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGQpIHsKICAgICAgICAgIGQgPSBkWzBdOwogICAgICAgICAgdmFyIGggPSBkLm5hbWUgKyAiLiIgKyB0LCB3ID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgbF0pOwogICAgICAgICAgfSwgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAgfTsKICAgICAgICAgIHJldHVybiB5ID8gdy5zZXQgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBhY2Nlc3MgIiArIGggKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW3IsIGxdKTsKICAgICAgICAgIH0gOiB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICB2KGggKyAiIGlzIGEgcmVhZC1vbmx5IHByb3BlcnR5Iik7CiAgICAgICAgICB9LCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZC5lYS5tYSwgdCwgdyksIHRuKFtdLCB5ID8gW3IsIGxdIDogW3JdLCBmdW5jdGlvbihQKSB7CiAgICAgICAgICAgIHZhciBwID0gUFswXSwgTiA9IHsgZ2V0OiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICB2YXIgeCA9IF90KHRoaXMsIGQsIGggKyAiIGdldHRlciIpOwogICAgICAgICAgICAgIHJldHVybiBwLmZyb21XaXJlVHlwZShvKHMsIHgpKTsKICAgICAgICAgICAgfSwgZW51bWVyYWJsZTogITAgfTsKICAgICAgICAgICAgaWYgKHkpIHsKICAgICAgICAgICAgICB5ID0gRyhjLCB5KTsKICAgICAgICAgICAgICB2YXIgYiA9IFBbMV07CiAgICAgICAgICAgICAgTi5zZXQgPSBmdW5jdGlvbih4KSB7CiAgICAgICAgICAgICAgICB2YXIgTCA9IF90KHRoaXMsIGQsIGggKyAiIHNldHRlciIpLCBobiA9IFtdOwogICAgICAgICAgICAgICAgeShmLCBMLCBiLnRvV2lyZVR5cGUoaG4sIHgpKSwgQ24oaG4pOwogICAgICAgICAgICAgIH07CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCBOKSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIHY6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24ocikgewogICAgICAgICAgdmFyIGkgPSBqW3JdLnZhbHVlOwogICAgICAgICAgcmV0dXJuIEJuKHIpLCBpOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHIsIGkpIHsKICAgICAgICAgIHJldHVybiBlbihpKTsKICAgICAgICB9LCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IEFuLCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgbTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHIgPSBGbihyKSwgdCA9IFIodCksIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gaTsKICAgICAgICAgIH0sCiAgICAgICAgICB0b1dpcmVUeXBlOiBmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICAgIGlmICh0eXBlb2YgbyAhPSAibnVtYmVyIiAmJiB0eXBlb2YgbyAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4obykgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgcmV0dXJuIG87CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogaWUodCwgciksCiAgICAgICAgICBrYTogbnVsbAogICAgICAgIH0pOwogICAgICB9LAogICAgICBjOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvLCBzKSB7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBuID0gUihuKSwgbyA9IEcoaSwgbyksIHB0KG4sIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjYWxsICIgKyBuICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGwpOwogICAgICAgIH0sIHQgLSAxKSwgdG4oW10sIGwsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIHZhciB5ID0gbiwgZiA9IG47CiAgICAgICAgICBjID0gW2NbMF0sIG51bGxdLmNvbmNhdChjLnNsaWNlKDEpKTsKICAgICAgICAgIHZhciBkID0gbywgaCA9IGMubGVuZ3RoOwogICAgICAgICAgMiA+IGggJiYgdigiYXJnVHlwZXMgYXJyYXkgc2l6ZSBtaXNtYXRjaCEgTXVzdCBhdCBsZWFzdCBnZXQgcmV0dXJuIHZhbHVlIGFuZCAndGhpcycgdHlwZXMhIik7CiAgICAgICAgICBmb3IgKHZhciB3ID0gY1sxXSAhPT0gbnVsbCAmJiAhMSwgUCA9ICExLCBwID0gMTsgcCA8IGMubGVuZ3RoOyArK3ApIGlmIChjW3BdICE9PSBudWxsICYmIGNbcF0ua2EgPT09IHZvaWQgMCkgewogICAgICAgICAgICBQID0gITA7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgfQogICAgICAgICAgdmFyIE4gPSBjWzBdLm5hbWUgIT09ICJ2b2lkIiwgYiA9ICIiLCB4ID0gIiI7CiAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgaCAtIDI7ICsrcCkgYiArPSAocCAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHAsIHggKz0gKHAgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyBwICsgIldpcmVkIjsKICAgICAgICAgIGYgPSAicmV0dXJuIGZ1bmN0aW9uICIgKyBJbihmKSArICIoIiArIGIgKyBgKSB7CmlmIChhcmd1bWVudHMubGVuZ3RoICE9PSBgICsgKGggLSAyKSArIGApIHsKdGhyb3dCaW5kaW5nRXJyb3IoJ2Z1bmN0aW9uIGAgKyBmICsgIiBjYWxsZWQgd2l0aCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKGggLSAyKSArIGAgYXJncyEnKTsKfQpgLCBQICYmIChmICs9IGB2YXIgZGVzdHJ1Y3RvcnMgPSBbXTsKYCk7CiAgICAgICAgICB2YXIgTCA9IFAgPyAiZGVzdHJ1Y3RvcnMiIDogIm51bGwiOwogICAgICAgICAgZm9yIChiID0gInRocm93QmluZGluZ0Vycm9yIGludm9rZXIgZm4gcnVuRGVzdHJ1Y3RvcnMgcmV0VHlwZSBjbGFzc1BhcmFtIi5zcGxpdCgiICIpLCBkID0gW3YsIGQsIHMsIENuLCBjWzBdLCBjWzFdXSwgdyAmJiAoZiArPSAidmFyIHRoaXNXaXJlZCA9IGNsYXNzUGFyYW0udG9XaXJlVHlwZSgiICsgTCArIGAsIHRoaXMpOwpgKSwgcCA9IDA7IHAgPCBoIC0gMjsgKytwKSBmICs9ICJ2YXIgYXJnIiArIHAgKyAiV2lyZWQgPSBhcmdUeXBlIiArIHAgKyAiLnRvV2lyZVR5cGUoIiArIEwgKyAiLCBhcmciICsgcCArICIpOyAvLyAiICsgY1twICsgMl0ubmFtZSArIGAKYCwgYi5wdXNoKCJhcmdUeXBlIiArIHApLCBkLnB1c2goY1twICsgMl0pOwogICAgICAgICAgaWYgKHcgJiYgKHggPSAidGhpc1dpcmVkIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCksIGYgKz0gKE4gPyAidmFyIHJ2ID0gIiA6ICIiKSArICJpbnZva2VyKGZuIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCArIGApOwpgLCBQKSBmICs9IGBydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyk7CmA7CiAgICAgICAgICBlbHNlIGZvciAocCA9IHcgPyAxIDogMjsgcCA8IGMubGVuZ3RoOyArK3ApIGggPSBwID09PSAxID8gInRoaXNXaXJlZCIgOiAiYXJnIiArIChwIC0gMikgKyAiV2lyZWQiLCBjW3BdLmthICE9PSBudWxsICYmIChmICs9IGggKyAiX2R0b3IoIiArIGggKyAiKTsgLy8gIiArIGNbcF0ubmFtZSArIGAKYCwgYi5wdXNoKGggKyAiX2R0b3IiKSwgZC5wdXNoKGNbcF0ua2EpKTsKICAgICAgICAgIHJldHVybiBOICYmIChmICs9IGB2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpOwpyZXR1cm4gcmV0OwpgKSwgYi5wdXNoKGYgKyBgfQpgKSwgYyA9IGFlKGIpLmFwcGx5KG51bGwsIGQpLCB2dCh5LCBjLCB0IC0gMSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBlOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvKSB7CiAgICAgICAgZnVuY3Rpb24gcyhmKSB7CiAgICAgICAgICByZXR1cm4gZjsKICAgICAgICB9CiAgICAgICAgdCA9IFIodCksIG8gPT09IC0xICYmIChvID0gNDI5NDk2NzI5NSk7CiAgICAgICAgdmFyIGwgPSBGbihyKTsKICAgICAgICBpZiAoaSA9PT0gMCkgewogICAgICAgICAgdmFyIGMgPSAzMiAtIDggKiByOwogICAgICAgICAgcyA9IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgcmV0dXJuIGYgPDwgYyA+Pj4gYzsKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICAgIHZhciB5ID0gdC5pbmRleE9mKCJ1bnNpZ25lZCIpICE9IC0xOwogICAgICAgIEQobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IHMsIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGYsIGQpIHsKICAgICAgICAgIGlmICh0eXBlb2YgZCAhPSAibnVtYmVyIiAmJiB0eXBlb2YgZCAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oZCkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgIGlmIChkIDwgaSB8fCBkID4gbykgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciAiJyArIHJuKGQpICsgJyIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSAiJyArIHQgKyAnIiwgd2hpY2ggaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UgWycgKyBpICsgIiwgIiArIG8gKyAiXSEiKTsKICAgICAgICAgIHJldHVybiB5ID8gZCA+Pj4gMCA6IGQgfCAwOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogb2UodCwgbCwgaSAhPT0gMCksIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBkOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgZnVuY3Rpb24gaShzKSB7CiAgICAgICAgICBzID4+PSAyOwogICAgICAgICAgdmFyIGwgPSBVOwogICAgICAgICAgcmV0dXJuIG5ldyBvKEssIGxbcyArIDFdLCBsW3NdKTsKICAgICAgICB9CiAgICAgICAgdmFyIG8gPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gUihyKSwgRChuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFIodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgbyA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpIGZvciAodmFyIHMgPSBpICsgNCwgbCA9IDA7IGwgPD0gbzsgKytsKSB7CiAgICAgICAgICAgICAgdmFyIGMgPSBpICsgNCArIGw7CiAgICAgICAgICAgICAgaWYgKGwgPT0gbyB8fCBGW2NdID09IDApIHsKICAgICAgICAgICAgICAgIGlmIChzKSB7CiAgICAgICAgICAgICAgICAgIHZhciB5ID0gcywgZiA9IEYsIGQgPSB5ICsgKGMgLSBzKTsKICAgICAgICAgICAgICAgICAgZm9yIChzID0geTsgZltzXSAmJiAhKHMgPj0gZCk7ICkgKytzOwogICAgICAgICAgICAgICAgICBpZiAoMTYgPCBzIC0geSAmJiBmLnN1YmFycmF5ICYmIFFuKSB5ID0gUW4uZGVjb2RlKGYuc3ViYXJyYXkoeSwgcykpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAiIjsgeSA8IHM7ICkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBmW3krK107CiAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZbeSsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGggJiAyMjQpID09IDE5MikgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChoICYgMzEpIDw8IDYgfCB3KTsKICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3krK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gKGggJiAyNDApID09IDIyNCA/IChoICYgMTUpIDw8IDEyIHwgdyA8PCA2IHwgUCA6IChoICYgNykgPDwgMTggfCB3IDw8IDEyIHwgUCA8PCA2IHwgZlt5KytdICYgNjMsIDY1NTM2ID4gaCA/IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKSA6IChoIC09IDY1NTM2LCBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBoID4+IDEwLCA1NjMyMCB8IGggJiAxMDIzKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoaCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHkgPSBkOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgeSA9ICIiOwogICAgICAgICAgICAgICAgaWYgKHAgPT09IHZvaWQgMCkgdmFyIHAgPSB5OwogICAgICAgICAgICAgICAgZWxzZSBwICs9ICJcMCIsIHAgKz0geTsKICAgICAgICAgICAgICAgIHMgPSBjICsgMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgZm9yIChwID0gQXJyYXkobyksIGwgPSAwOyBsIDwgbzsgKytsKSBwW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZShGW2kgKyA0ICsgbF0pOwogICAgICAgICAgICAgIHAgPSBwLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiB6KGkpLCBwOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIG8pIHsKICAgICAgICAgICAgbyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChvID0gbmV3IFVpbnQ4QXJyYXkobykpOwogICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiBvID09ICJzdHJpbmciOwogICAgICAgICAgICBzIHx8IG8gaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IG8gaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBvIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGwgPSAociAmJiBzID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgby5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBvLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IG8uY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIG8ubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBjID0gRW4oNCArIGwgKyAxKTsKICAgICAgICAgICAgaWYgKFVbYyA+PiAyXSA9IGwsIHIgJiYgcykgVXQobywgYyArIDQsIGwgKyAxKTsKICAgICAgICAgICAgZWxzZSBpZiAocykgZm9yIChzID0gMDsgcyA8IGw7ICsrcykgewogICAgICAgICAgICAgIHZhciB5ID0gby5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgICAgIDI1NSA8IHkgJiYgKHooYyksIHYoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpKSwgRltjICsgNCArIHNdID0geTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGZvciAocyA9IDA7IHMgPCBsOyArK3MpIEZbYyArIDQgKyBzXSA9IG9bc107CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaCh6LCBjKSwgYzsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHooaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFIociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IER0LCBvID0gQnQsIHMgPSB6dCwgbCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4geW47CiAgICAgICAgICB9LCBjID0gMTsKICAgICAgICBlbHNlIHQgPT09IDQgJiYgKGkgPSBWdCwgbyA9IEd0LCBzID0gWXQsIGwgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiBVOwogICAgICAgIH0sIGMgPSAyKTsKICAgICAgICBEKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVt5ID4+IDJdLCBkID0gbCgpLCBoLCB3ID0geSArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgcCA9IHkgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFtwID4+IGNdID09IDApICYmICh3ID0gaSh3LCBwIC0gdyksIGggPT09IHZvaWQgMCA/IGggPSB3IDogKGggKz0gIlwwIiwgaCArPSB3KSwgdyA9IHAgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiB6KHkpLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHksIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gcyhmKSwgaCA9IEVuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBjLCBvKGYsIGggKyA0LCBkICsgdCksIHkgIT09IG51bGwgJiYgeS5wdXNoKHosIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICB6KHkpOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSB6bihuKSwgdCA9IEN0KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBvID0gZW4oaSk7CiAgICAgICAgcmV0dXJuIGtbciA+PiAyXSA9IG8sIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogQm4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IHpuKG4pLCB0ID0gem4odCksIGVuKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBzZVtuXTsKICAgICAgICByZXR1cm4gZW4odCA9PT0gdm9pZCAwID8gUihuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgQ24oaltuXS52YWx1ZSksIEJuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBDdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIGVuKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBzbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgRi5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gRi5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKSByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBILmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBLLmJ5dGVMZW5ndGggKyA2NTUzNSA+Pj4gMTYpLCBldChILmJ1ZmZlcik7CiAgICAgICAgICAgICAgdmFyIG8gPSAxOwogICAgICAgICAgICAgIGJyZWFrIG47CiAgICAgICAgICAgIH0gY2F0Y2ggewogICAgICAgICAgICB9CiAgICAgICAgICAgIG8gPSB2b2lkIDA7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAobykgcmV0dXJuICEwOwogICAgICAgIH0KICAgICAgICByZXR1cm4gITE7CiAgICAgIH0sCiAgICAgIHM6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IDA7CiAgICAgICAgcmV0dXJuIEV0KCkuZm9yRWFjaChmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICB2YXIgcyA9IHQgKyByOwogICAgICAgICAgZm9yIChvID0ga1tuICsgNCAqIG8gPj4gMl0gPSBzLCBzID0gMDsgcyA8IGkubGVuZ3RoOyArK3MpIFlbbysrID4+IDBdID0gaS5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgWVtvID4+IDBdID0gMCwgciArPSBpLmxlbmd0aCArIDE7CiAgICAgICAgfSksIDA7CiAgICAgIH0sCiAgICAgIHQ6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IEV0KCk7CiAgICAgICAga1tuID4+IDJdID0gci5sZW5ndGg7CiAgICAgICAgdmFyIGkgPSAwOwogICAgICAgIHJldHVybiByLmZvckVhY2goZnVuY3Rpb24obykgewogICAgICAgICAgaSArPSBvLmxlbmd0aCArIDE7CiAgICAgICAgfSksIGtbdCA+PiAyXSA9IGksIDA7CiAgICAgIH0sCiAgICAgIGE6IEgKICAgIH07CiAgICAoZnVuY3Rpb24oKSB7CiAgICAgIGZ1bmN0aW9uIG4ocykgewogICAgICAgIHMgPSBzLmV4cG9ydHMsIHMgPSBNdChzKSwgZS5hc20gPSBzLCBaLS0sIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIFogPT0gMCAmJiBvbiAmJiAocyA9IG9uLCBvbiA9IG51bGwsIHMoKSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gdChzKSB7CiAgICAgICAgbihzLmluc3RhbmNlKTsKICAgICAgfQogICAgICBmdW5jdGlvbiByKHMpIHsKICAgICAgICByZXR1cm4gWHQoKS50aGVuKGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShsLCBpKTsKICAgICAgICB9KS50aGVuKHMsIGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIEUoImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206ICIgKyBsKSwgc24obCk7CiAgICAgICAgfSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSB7IGE6IHVlIH07CiAgICAgIGlmIChaKyssIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIGUuaW5zdGFudGlhdGVXYXNtKSB0cnkgewogICAgICAgIHZhciBvID0gZS5pbnN0YW50aWF0ZVdhc20oaSwgbik7CiAgICAgICAgcmV0dXJuIG8gPSBNdChvKTsKICAgICAgfSBjYXRjaCAocykgewogICAgICAgIHJldHVybiBFKCJNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiAiICsgcyksICExOwogICAgICB9CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICBpZiAoVyB8fCB0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgIT0gImZ1bmN0aW9uIiB8fCBzdCgpIHx8IFJuKCJmaWxlOi8vIikgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIpIHJldHVybiByKHQpOwogICAgICAgIGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihzKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocywgaSkudGhlbih0LCBmdW5jdGlvbihsKSB7CiAgICAgICAgICAgIHJldHVybiBFKCJ3YXNtIHN0cmVhbWluZyBjb21waWxlIGZhaWxlZDogIiArIGwpLCBFKCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvbiIpLCByKHQpOwogICAgICAgICAgfSk7CiAgICAgICAgfSk7CiAgICAgIH0oKSwge307CiAgICB9KSgpOwogICAgdmFyIFN0ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChTdCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZS5hc20uQikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIEVuID0gZS5fbWFsbG9jID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRW4gPSBlLl9tYWxsb2MgPSBlLmFzbS5DKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgeiA9IGUuX2ZyZWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICh6ID0gZS5fZnJlZSA9IGUuYXNtLkQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBlLmFzbS5FKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGUuYXNtLkYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWkgPSBlLmFzbS5HKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpID0gZS5hc20uSCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9pID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2kgPSBlLmFzbS5JKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWkgPSBlLmFzbS5KKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaSA9IGUuYXNtLkspLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfZmlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2ZpaSA9IGUuYXNtLkwpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpZiA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlmID0gZS5hc20uTSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaSA9IGUuYXNtLk4pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpID0gZS5hc20uTykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpID0gZS5hc20uUCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpID0gZS5hc20uUSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpaSA9IGUuYXNtLlIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWkgPSBlLmFzbS5TKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBlLmFzbS5UKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZS5hc20uVSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGUuYXNtLlYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZS5hc20uVykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpID0gZS5hc20uWCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaWkgPSBlLmFzbS5ZKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpID0gZS5hc20uWikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWkgPSBlLmFzbS5fKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZS5hc20uJCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBlLmFzbS5hYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGUuYXNtLmJhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGUuYXNtLmNhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIHZhciBQbjsKICAgIG9uID0gZnVuY3Rpb24gbigpIHsKICAgICAgUG4gfHwgR24oKSwgUG4gfHwgKG9uID0gbik7CiAgICB9OwogICAgZnVuY3Rpb24gR24oKSB7CiAgICAgIGZ1bmN0aW9uIG4oKSB7CiAgICAgICAgaWYgKCFQbiAmJiAoUG4gPSAhMCwgZS5jYWxsZWRSdW4gPSAhMCwgIWtuKSkgewogICAgICAgICAgaWYgKHBuKGF0KSwgcG4oWnQpLCBtKGUpLCBlLm9uUnVudGltZUluaXRpYWxpemVkICYmIGUub25SdW50aW1lSW5pdGlhbGl6ZWQoKSwgZS5wb3N0UnVuKSBmb3IgKHR5cGVvZiBlLnBvc3RSdW4gPT0gImZ1bmN0aW9uIiAmJiAoZS5wb3N0UnVuID0gW2UucG9zdFJ1bl0pOyBlLnBvc3RSdW4ubGVuZ3RoOyApIHsKICAgICAgICAgICAgdmFyIHQgPSBlLnBvc3RSdW4uc2hpZnQoKTsKICAgICAgICAgICAgb3QudW5zaGlmdCh0KTsKICAgICAgICAgIH0KICAgICAgICAgIHBuKG90KTsKICAgICAgICB9CiAgICAgIH0KICAgICAgaWYgKCEoMCA8IFopKSB7CiAgICAgICAgaWYgKGUucHJlUnVuKSBmb3IgKHR5cGVvZiBlLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnByZVJ1biA9IFtlLnByZVJ1bl0pOyBlLnByZVJ1bi5sZW5ndGg7ICkgJHQoKTsKICAgICAgICBwbihpdCksIDAgPCBaIHx8IChlLnNldFN0YXR1cyA/IChlLnNldFN0YXR1cygiUnVubmluZy4uLiIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgICAgZS5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgfSwgMSksIG4oKTsKICAgICAgICB9LCAxKSkgOiBuKCkpOwogICAgICB9CiAgICB9CiAgICBpZiAoZS5ydW4gPSBHbiwgZS5wcmVJbml0KSBmb3IgKHR5cGVvZiBlLnByZUluaXQgPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVJbml0ID0gW2UucHJlSW5pdF0pOyAwIDwgZS5wcmVJbml0Lmxlbmd0aDsgKSBlLnByZUluaXQucG9wKCkoKTsKICAgIHJldHVybiBHbigpLCB1LnJlYWR5OwogIH07Cn0oKTsKY2xhc3MgbWUgewogIGNvbnN0cnVjdG9yKCkgewogICAgWW4odGhpcywgInNhbVdhc21Nb2R1bGUiKTsKICB9CiAgZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZSkgewogICAgcmV0dXJuIHsKICAgICAgbG9jYXRlRmlsZTogKG0pID0+IG5ldyBVUkwoZSB8fCBtLCB1KS5ocmVmCiAgICB9OwogIH0KICBhc3luYyBoYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKHUsIGUpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IG0gPSBhd2FpdCBmZXRjaCh1KTsKICAgICAgaWYgKCFtLm9rKQogICAgICAgIHRocm93IG5ldyBJKAogICAgICAgICAgYFRoZSBwYXRoIHRvICR7ZX0gaXMgaW5jb3JyZWN0IG9yIHRoZSBtb2R1bGUgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgICAgY29uc3QgZyA9IGF3YWl0IG0uYXJyYXlCdWZmZXIoKTsKICAgICAgaWYgKCFXZWJBc3NlbWJseS52YWxpZGF0ZShnKSkKICAgICAgICB0aHJvdyBuZXcgSSgKICAgICAgICAgIGBUaGUgcHJvdmlkZWQgJHtlfSBpcyBub3QgYSB2YWxpZCBXQVNNIG1vZHVsZS4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgIH0gY2F0Y2ggKG0pIHsKICAgICAgaWYgKG0gaW5zdGFuY2VvZiBJKQogICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICAgICAiWW91IGNhbiBmaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIGhvc3Qgd2FzbSBmaWxlcyBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuaW5ub3ZhdHJpY3MuY29tL2RpZ2l0YWwtb25ib2FyZGluZy90ZWNobmljYWwvcmVtb3RlL2RvdC13ZWItZG9jdW1lbnQvbGF0ZXN0L2RvY3VtZW50YXRpb24vI19ob3N0aW5nX3NhbV93YXNtIgogICAgICAgICksIG07CiAgICB9CiAgfQogIGFzeW5jIGdldFdhc21GaWxlTmFtZSgpIHsKICAgIHJldHVybiBhd2FpdCBmZSgpID8ga3Quc2ltZCA6IGt0LnNhbTsKICB9CiAgYXN5bmMgaW5pdFNhbU1vZHVsZSh1LCBlID0gIi93YXNtIikgewogICAgaWYgKHRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgcmV0dXJuOwogICAgY29uc3QgbSA9IGF3YWl0IHRoaXMuZ2V0V2FzbUZpbGVOYW1lKCksIGcgPSBgJHtlfS8ke219YDsKICAgIHRyeSB7CiAgICAgIHRoaXMuc2FtV2FzbU1vZHVsZSA9IGF3YWl0IHBlKHRoaXMuZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZykpOwogICAgfSBjYXRjaCB7CiAgICAgIHRocm93IGF3YWl0IHRoaXMuaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZShnLCBtKSwgbmV3IEkoIkNvdWxkIG5vdCBpbml0IGRldGVjdG9yLiIpOwogICAgfQogIH0KICBhc3luYyBnZXRTYW1WZXJzaW9uKCkgewogICAgdmFyIGU7CiAgICBjb25zdCB1ID0gYXdhaXQgKChlID0gdGhpcy5zYW1XYXNtTW9kdWxlKSA9PSBudWxsID8gdm9pZCAwIDogZS5nZXRJbmZvU3RyaW5nKCkpOwogICAgcmV0dXJuIHUgPT0gbnVsbCA/IHZvaWQgMCA6IHUudHJpbSgpOwogIH0KICAvKgogICAqIEluIFRTIDUuMi4wIHdhcyBhZGRlZCBzcGVjaWFsIGtleXdvcmQgInVzaW5nIiB3aGljaCBjb3VsZCBiZSBwZXJmZWN0IGZvciB0aGlzIGNhc2UuCiAgICogVW5mb3J0dW5hdGVseSwgdml0ZSBwcmVhY3QgcGx1Z2luIGRvZXMgbm90IHN1cHBvcnQgdGhpcyB2ZXJzaW9uIG9mIFRTIHlldC4KICAgKiBDaGVjayBwb3NzaWJpbGl0eSBvZiB1c2luZyAidXNpbmciIGtleXdvcmQgd2hlbiB2aXRlIHByZWFjdCBwbHVnaW4gdXBkYXRlcwogICAqLwogIGFsbG9jYXRlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgcmV0dXJuIHRoaXMuc2FtV2FzbU1vZHVsZS5fbWFsbG9jKHUpOwogIH0KICByZWxlYXNlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLl9mcmVlKHUpOwogIH0KICB3cml0ZURhdGFUb01lbW9yeSh1LCBlKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEkoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIHRoaXMuc2FtV2FzbU1vZHVsZS5IRUFQVTguc2V0KHUsIGUpOwogIH0KfQovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQwogKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMAogKi8KY29uc3QgeHQgPSBTeW1ib2woIkNvbWxpbmsucHJveHkiKSwgdmUgPSBTeW1ib2woIkNvbWxpbmsuZW5kcG9pbnQiKSwgZ2UgPSBTeW1ib2woIkNvbWxpbmsucmVsZWFzZVByb3h5IiksIFpuID0gU3ltYm9sKCJDb21saW5rLmZpbmFsaXplciIpLCBPbiA9IFN5bWJvbCgiQ29tbGluay50aHJvd24iKSwgRnQgPSAoYSkgPT4gdHlwZW9mIGEgPT0gIm9iamVjdCIgJiYgYSAhPT0gbnVsbCB8fCB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iLCB3ZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBGdChhKSAmJiBhW3h0XSwKICBzZXJpYWxpemUoYSkgewogICAgY29uc3QgeyBwb3J0MTogdSwgcG9ydDI6IGUgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgcmV0dXJuIEpuKGEsIHUpLCBbZSwgW2VdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHJldHVybiBhLnN0YXJ0KCksIFRlKGEpOwogIH0KfSwgQWUgPSB7CiAgY2FuSGFuZGxlOiAoYSkgPT4gRnQoYSkgJiYgT24gaW4gYSwKICBzZXJpYWxpemUoeyB2YWx1ZTogYSB9KSB7CiAgICBsZXQgdTsKICAgIHJldHVybiBhIGluc3RhbmNlb2YgRXJyb3IgPyB1ID0gewogICAgICBpc0Vycm9yOiAhMCwKICAgICAgdmFsdWU6IHsKICAgICAgICBtZXNzYWdlOiBhLm1lc3NhZ2UsCiAgICAgICAgbmFtZTogYS5uYW1lLAogICAgICAgIHN0YWNrOiBhLnN0YWNrCiAgICAgIH0KICAgIH0gOiB1ID0geyBpc0Vycm9yOiAhMSwgdmFsdWU6IGEgfSwgW3UsIFtdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHRocm93IGEuaXNFcnJvciA/IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGEudmFsdWUubWVzc2FnZSksIGEudmFsdWUpIDogYS52YWx1ZTsKICB9Cn0sIEl0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoWwogIFsicHJveHkiLCB3ZV0sCiAgWyJ0aHJvdyIsIEFlXQpdKTsKZnVuY3Rpb24gX2UoYSwgdSkgewogIGZvciAoY29uc3QgZSBvZiBhKQogICAgaWYgKHUgPT09IGUgfHwgZSA9PT0gIioiIHx8IGUgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZS50ZXN0KHUpKQogICAgICByZXR1cm4gITA7CiAgcmV0dXJuICExOwp9CmZ1bmN0aW9uIEpuKGEsIHUgPSBnbG9iYWxUaGlzLCBlID0gWyIqIl0pIHsKICB1LmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBtKGcpIHsKICAgIGlmICghZyB8fCAhZy5kYXRhKQogICAgICByZXR1cm47CiAgICBpZiAoIV9lKGUsIGcub3JpZ2luKSkgewogICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgb3JpZ2luICcke2cub3JpZ2lufScgZm9yIGNvbWxpbmsgcHJveHlgKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgY29uc3QgeyBpZDogQywgdHlwZTogQSwgcGF0aDogTSB9ID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFtdIH0sIGcuZGF0YSksIE8gPSAoZy5kYXRhLmFyZ3VtZW50TGlzdCB8fCBbXSkubWFwKEopOwogICAgbGV0IFQ7CiAgICB0cnkgewogICAgICBjb25zdCBfID0gTS5zbGljZSgwLCAtMSkucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKSwgUyA9IE0ucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKTsKICAgICAgc3dpdGNoIChBKSB7CiAgICAgICAgY2FzZSAiR0VUIjoKICAgICAgICAgIFQgPSBTOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiU0VUIjoKICAgICAgICAgIF9bTS5zbGljZSgtMSlbMF1dID0gSihnLmRhdGEudmFsdWUpLCBUID0gITA7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJBUFBMWSI6CiAgICAgICAgICBUID0gUy5hcHBseShfLCBPKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkNPTlNUUlVDVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IEUgPSBuZXcgUyguLi5PKTsKICAgICAgICAgICAgVCA9IFNlKEUpOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiRU5EUE9JTlQiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCB7IHBvcnQxOiBFLCBwb3J0MjogVyB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICAgICAgICAgIEpuKGEsIFcpLCBUID0gT2UoRSwgW0VdKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlJFTEVBU0UiOgogICAgICAgICAgVCA9IHZvaWQgMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICByZXR1cm47CiAgICAgIH0KICAgIH0gY2F0Y2ggKF8pIHsKICAgICAgVCA9IHsgdmFsdWU6IF8sIFtPbl06IDAgfTsKICAgIH0KICAgIFByb21pc2UucmVzb2x2ZShUKS5jYXRjaCgoXykgPT4gKHsgdmFsdWU6IF8sIFtPbl06IDAgfSkpLnRoZW4oKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oXyk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBTKSwgeyBpZDogQyB9KSwgRSksIEEgPT09ICJSRUxFQVNFIiAmJiAodS5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgbSksIGp0KHUpLCBabiBpbiBhICYmIHR5cGVvZiBhW1puXSA9PSAiZnVuY3Rpb24iICYmIGFbWm5dKCkpOwogICAgfSkuY2F0Y2goKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oewogICAgICAgIHZhbHVlOiBuZXcgVHlwZUVycm9yKCJVbnNlcmlhbGl6YWJsZSByZXR1cm4gdmFsdWUiKSwKICAgICAgICBbT25dOiAwCiAgICAgIH0pOwogICAgICB1LnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUyksIHsgaWQ6IEMgfSksIEUpOwogICAgfSk7CiAgfSksIHUuc3RhcnQgJiYgdS5zdGFydCgpOwp9CmZ1bmN0aW9uIENlKGEpIHsKICByZXR1cm4gYS5jb25zdHJ1Y3Rvci5uYW1lID09PSAiTWVzc2FnZVBvcnQiOwp9CmZ1bmN0aW9uIGp0KGEpIHsKICBDZShhKSAmJiBhLmNsb3NlKCk7Cn0KZnVuY3Rpb24gVGUoYSwgdSkgewogIHJldHVybiBYbihhLCBbXSwgdSk7Cn0KZnVuY3Rpb24gTW4oYSkgewogIGlmIChhKQogICAgdGhyb3cgbmV3IEVycm9yKCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGUiKTsKfQpmdW5jdGlvbiBMdChhKSB7CiAgcmV0dXJuIGFuKGEsIHsKICAgIHR5cGU6ICJSRUxFQVNFIgogIH0pLnRoZW4oKCkgPT4gewogICAganQoYSk7CiAgfSk7Cn0KY29uc3QgU24gPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgV24gPSAiRmluYWxpemF0aW9uUmVnaXN0cnkiIGluIGdsb2JhbFRoaXMgJiYgbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChhKSA9PiB7CiAgY29uc3QgdSA9IChTbi5nZXQoYSkgfHwgMCkgLSAxOwogIFNuLnNldChhLCB1KSwgdSA9PT0gMCAmJiBMdChhKTsKfSk7CmZ1bmN0aW9uIEVlKGEsIHUpIHsKICBjb25zdCBlID0gKFNuLmdldCh1KSB8fCAwKSArIDE7CiAgU24uc2V0KHUsIGUpLCBXbiAmJiBXbi5yZWdpc3RlcihhLCB1LCBhKTsKfQpmdW5jdGlvbiBQZShhKSB7CiAgV24gJiYgV24udW5yZWdpc3RlcihhKTsKfQpmdW5jdGlvbiBYbihhLCB1ID0gW10sIGUgPSBmdW5jdGlvbigpIHsKfSkgewogIGxldCBtID0gITE7CiAgY29uc3QgZyA9IG5ldyBQcm94eShlLCB7CiAgICBnZXQoQywgQSkgewogICAgICBpZiAoTW4obSksIEEgPT09IGdlKQogICAgICAgIHJldHVybiAoKSA9PiB7CiAgICAgICAgICBQZShnKSwgTHQoYSksIG0gPSAhMDsKICAgICAgICB9OwogICAgICBpZiAoQSA9PT0gInRoZW4iKSB7CiAgICAgICAgaWYgKHUubGVuZ3RoID09PSAwKQogICAgICAgICAgcmV0dXJuIHsgdGhlbjogKCkgPT4gZyB9OwogICAgICAgIGNvbnN0IE0gPSBhbihhLCB7CiAgICAgICAgICB0eXBlOiAiR0VUIiwKICAgICAgICAgIHBhdGg6IHUubWFwKChPKSA9PiBPLnRvU3RyaW5nKCkpCiAgICAgICAgfSkudGhlbihKKTsKICAgICAgICByZXR1cm4gTS50aGVuLmJpbmQoTSk7CiAgICAgIH0KICAgICAgcmV0dXJuIFhuKGEsIFsuLi51LCBBXSk7CiAgICB9LAogICAgc2V0KEMsIEEsIE0pIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtPLCBUXSA9IGJuKE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJTRVQiLAogICAgICAgIHBhdGg6IFsuLi51LCBBXS5tYXAoKF8pID0+IF8udG9TdHJpbmcoKSksCiAgICAgICAgdmFsdWU6IE8KICAgICAgfSwgVCkudGhlbihKKTsKICAgIH0sCiAgICBhcHBseShDLCBBLCBNKSB7CiAgICAgIE1uKG0pOwogICAgICBjb25zdCBPID0gdVt1Lmxlbmd0aCAtIDFdOwogICAgICBpZiAoTyA9PT0gdmUpCiAgICAgICAgcmV0dXJuIGFuKGEsIHsKICAgICAgICAgIHR5cGU6ICJFTkRQT0lOVCIKICAgICAgICB9KS50aGVuKEopOwogICAgICBpZiAoTyA9PT0gImJpbmQiKQogICAgICAgIHJldHVybiBYbihhLCB1LnNsaWNlKDAsIC0xKSk7CiAgICAgIGNvbnN0IFtULCBfXSA9IFJ0KE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJBUFBMWSIsCiAgICAgICAgcGF0aDogdS5tYXAoKFMpID0+IFMudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIF8pLnRoZW4oSik7CiAgICB9LAogICAgY29uc3RydWN0KEMsIEEpIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtNLCBPXSA9IFJ0KEEpOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJDT05TVFJVQ1QiLAogICAgICAgIHBhdGg6IHUubWFwKChUKSA9PiBULnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogTQogICAgICB9LCBPKS50aGVuKEopOwogICAgfQogIH0pOwogIHJldHVybiBFZShnLCBhKSwgZzsKfQpmdW5jdGlvbiBNZShhKSB7CiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGEpOwp9CmZ1bmN0aW9uIFJ0KGEpIHsKICBjb25zdCB1ID0gYS5tYXAoYm4pOwogIHJldHVybiBbdS5tYXAoKGUpID0+IGVbMF0pLCBNZSh1Lm1hcCgoZSkgPT4gZVsxXSkpXTsKfQpjb25zdCBOdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpOwpmdW5jdGlvbiBPZShhLCB1KSB7CiAgcmV0dXJuIE50LnNldChhLCB1KSwgYTsKfQpmdW5jdGlvbiBTZShhKSB7CiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYSwgeyBbeHRdOiAhMCB9KTsKfQpmdW5jdGlvbiBibihhKSB7CiAgZm9yIChjb25zdCBbdSwgZV0gb2YgSXQpCiAgICBpZiAoZS5jYW5IYW5kbGUoYSkpIHsKICAgICAgY29uc3QgW20sIGddID0gZS5zZXJpYWxpemUoYSk7CiAgICAgIHJldHVybiBbCiAgICAgICAgewogICAgICAgICAgdHlwZTogIkhBTkRMRVIiLAogICAgICAgICAgbmFtZTogdSwKICAgICAgICAgIHZhbHVlOiBtCiAgICAgICAgfSwKICAgICAgICBnCiAgICAgIF07CiAgICB9CiAgcmV0dXJuIFsKICAgIHsKICAgICAgdHlwZTogIlJBVyIsCiAgICAgIHZhbHVlOiBhCiAgICB9LAogICAgTnQuZ2V0KGEpIHx8IFtdCiAgXTsKfQpmdW5jdGlvbiBKKGEpIHsKICBzd2l0Y2ggKGEudHlwZSkgewogICAgY2FzZSAiSEFORExFUiI6CiAgICAgIHJldHVybiBJdC5nZXQoYS5uYW1lKS5kZXNlcmlhbGl6ZShhLnZhbHVlKTsKICAgIGNhc2UgIlJBVyI6CiAgICAgIHJldHVybiBhLnZhbHVlOwogIH0KfQpmdW5jdGlvbiBhbihhLCB1LCBlKSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChtKSA9PiB7CiAgICBjb25zdCBnID0gV2UoKTsKICAgIGEuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIEMoQSkgewogICAgICAhQS5kYXRhIHx8ICFBLmRhdGEuaWQgfHwgQS5kYXRhLmlkICE9PSBnIHx8IChhLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBDKSwgbShBLmRhdGEpKTsKICAgIH0pLCBhLnN0YXJ0ICYmIGEuc3RhcnQoKSwgYS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHsgaWQ6IGcgfSwgdSksIGUpOwogIH0pOwp9CmZ1bmN0aW9uIFdlKCkgewogIHJldHVybiBuZXcgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpLnRvU3RyaW5nKDE2KSkuam9pbigiLSIpOwp9CmZ1bmN0aW9uIEh0KGEsIHUpIHsKICByZXR1cm4gTWF0aC5zcXJ0KChhLnggLSB1LngpICoqIDIgKyAoYS55IC0gdS55KSAqKiAyKTsKfQpmdW5jdGlvbiBiZShhLCB1KSB7CiAgcmV0dXJuIHsKICAgIHg6IChhLnggKyB1LngpIC8gMiwKICAgIHk6IChhLnkgKyB1LnkpIC8gMgogIH07Cn0KZnVuY3Rpb24ga2UoYSwgdSkgewogIGlmIChhLmNvbmZpZGVuY2UgPD0gMCB8fCB1LmNvbmZpZGVuY2UgPD0gMCkKICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTsKICBjb25zdCBlID0gSHQoYS5jZW50ZXIsIHUuY2VudGVyKSwgbSA9IGJlKGEuY2VudGVyLCB1LmNlbnRlcik7CiAgcmV0dXJuIHsKICAgIHg6IG0ueCwKICAgIHk6IG0ueSArIGUgLyA0CiAgICAvLyBjYWxjdWxhdGlvbiBpcyB0YWtlbiBmcm9tIG1vYmlsZSB0ZWFtCiAgfTsKfQpmdW5jdGlvbiBSZShhLCB1LCBlKSB7CiAgaWYgKGEuY29uZmlkZW5jZSA8PSAwIHx8IHUuY29uZmlkZW5jZSA8PSAwKQogICAgcmV0dXJuIDA7CiAgY29uc3QgbSA9IEh0KGEuY2VudGVyLCB1LmNlbnRlciksIGcgPSB5ZShlLndpZHRoLCBlLmhlaWdodCk7CiAgcmV0dXJuIGhlKG0gLyBnKTsKfQpmdW5jdGlvbiAkbihhKSB7CiAgY29uc3QgeyBjZW50ZXJYOiB1LCBjZW50ZXJZOiBlLCBjb25maWRlbmNlOiBtLCBzaXplOiBnLCBzdGF0dXM6IEMgfSA9IGE7CiAgcmV0dXJuIHsKICAgIGNlbnRlcjogewogICAgICB4OiB1LAogICAgICB5OiBlCiAgICB9LAogICAgY29uZmlkZW5jZTogbSAvIDFlMywKICAgIHN0YXR1czogQyAvIDFlMywKICAgIHNpemU6IGcKICB9Owp9CmNsYXNzIHhlIGV4dGVuZHMgbWUgewogIHBhcnNlUmF3RGF0YSh1LCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBDLCBib3R0b21SaWdodFk6IEEsIGxlZnRFeWU6IE0sIG1vdXRoOiBPLCByaWdodEV5ZTogVCwgdG9wTGVmdFg6IF8sIHRvcExlZnRZOiBTIH0gPSB1LCBFID0gJG4oTSksIFcgPSAkbihUKSwgSCA9ICRuKE8pOwogICAgcmV0dXJuIHsKICAgICAgY29uZmlkZW5jZTogdS5jb25maWRlbmNlIC8gMWUzLAogICAgICB0b3BMZWZ0OiB7CiAgICAgICAgeDogXywKICAgICAgICB5OiBTCiAgICAgIH0sCiAgICAgIGJvdHRvbVJpZ2h0OiB7CiAgICAgICAgeDogQywKICAgICAgICB5OiBBCiAgICAgIH0sCiAgICAgIGZhY2VDZW50ZXI6IGtlKEUsIFcpLAogICAgICBmYWNlU2l6ZTogUmUoRSwgVywgZSksCiAgICAgIGxlZnRFeWU6IEUsCiAgICAgIHJpZ2h0RXllOiBXLAogICAgICBtb3V0aDogSCwKICAgICAgYnJpZ2h0bmVzczogbSAvIDFlMywKICAgICAgc2hhcnBuZXNzOiBnIC8gMWUzCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QodSwgZSwgbSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBJKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBnID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpLCBDID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpOwogICAgdGhpcy53cml0ZURhdGFUb01lbW9yeSh1LCBnKSwgdGhpcy5zYW1XYXNtTW9kdWxlLmNvbnZlcnRUb1NhbUNvbG9ySW1hZ2UoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLAogICAgICBkZS5SR0JBLAogICAgICBDCiAgICApOwogICAgY29uc3QgQSA9IHRoaXMuc2FtV2FzbU1vZHVsZS5kZXRlY3RGYWNlUGFydHNXaXRoSW1hZ2VQYXJhbWV0ZXJzKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgQywKICAgICAgMCwKICAgICAgMCwKICAgICAgLy8gcGFyYW1XaWR0aCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICk7CiAgICByZXR1cm4gdGhpcy5yZWxlYXNlTWVtb3J5KGcpLCB0aGlzLnJlbGVhc2VNZW1vcnkoQyksIHRoaXMucGFyc2VSYXdEYXRhKEEsIG0pOwogIH0KfQpKbih4ZSk7Cg==", v1 = (x) => Uint8Array.from(atob(x), (o) => o.charCodeAt(0)), ya = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", v1(Bc)], { type: "text/javascript;charset=utf-8" });
function w1(x) {
  let o;
  try {
    if (o = ya && (window.URL || window.webkitURL).createObjectURL(ya), !o) throw "";
    const t = new Worker(o, {
      type: "module",
      name: x == null ? void 0 : x.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(o);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Bc,
      {
        type: "module",
        name: x == null ? void 0 : x.name
      }
    );
  }
}
var P0, a0;
class S1 {
  constructor(o) {
    ce(this, P0);
    ce(this, a0);
    ae(this, P0, o), ae(this, a0, /* @__PURE__ */ new Map());
  }
  validate() {
    X(this, P0).forEach((o) => {
      X(this, a0).set(o.name, o.evaluate());
    });
  }
  isValid() {
    return Array.from(X(this, a0).values()).every((o) => o);
  }
  get result() {
    return X(this, a0);
  }
  get validators() {
    return X(this, P0);
  }
}
P0 = new WeakMap(), a0 = new WeakMap();
var An, s0;
class ot {
  constructor(o, t) {
    ce(this, An);
    ce(this, s0);
    ae(this, An, o), ae(this, s0, t);
  }
  get threshold() {
    return X(this, s0);
  }
  get name() {
    return X(this, An);
  }
  isValueBelowThreshold(o) {
    return o < X(this, s0);
  }
  isValueAboveThreshold(o) {
    return o > X(this, s0);
  }
}
An = new WeakMap(), s0 = new WeakMap();
var yn;
class B1 extends ot {
  constructor(t, e) {
    super("isNotDim", t);
    ce(this, yn);
    ae(this, yn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, yn));
  }
}
yn = new WeakMap();
var Wn;
class G1 extends ot {
  constructor(t, e) {
    super("isNotSmall", t);
    ce(this, Wn);
    ae(this, Wn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, Wn));
  }
}
Wn = new WeakMap();
var vn;
class k1 extends ot {
  constructor(t, e) {
    super("isNotBright", t);
    ce(this, vn);
    ae(this, vn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(X(this, vn));
  }
}
vn = new WeakMap();
var wn;
class H1 extends ot {
  constructor(t, e) {
    super("isPresent", t);
    ce(this, wn);
    ae(this, wn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, wn));
  }
}
wn = new WeakMap();
var Sn;
class O1 extends ot {
  constructor(t, e) {
    super("isSharp", t);
    ce(this, Sn);
    ae(this, Sn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, Sn));
  }
}
Sn = new WeakMap();
var Bn;
class Z1 extends ot {
  constructor(t, e) {
    super("isLeftEyePresent", t);
    ce(this, Bn);
    ae(this, Bn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, Bn));
  }
}
Bn = new WeakMap();
var Gn;
class K1 extends ot {
  constructor(t, e) {
    super("isMouthPresent", t);
    ce(this, Gn);
    ae(this, Gn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, Gn));
  }
}
Gn = new WeakMap();
var kn;
class R1 extends ot {
  constructor(t, e) {
    super("isMouthScoreNotTooLow", t);
    ce(this, kn);
    ae(this, kn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, kn));
  }
}
kn = new WeakMap();
var Hn;
class P1 extends ot {
  constructor(t, e) {
    super("isMouthScoreNotTooHigh", t);
    ce(this, Hn);
    ae(this, Hn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(X(this, Hn));
  }
}
Hn = new WeakMap();
var On;
class T1 extends ot {
  constructor(t, e) {
    super("isNotLarge", t);
    ce(this, On);
    ae(this, On, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(X(this, On));
  }
}
On = new WeakMap();
var Zn;
class V1 extends ot {
  constructor(t, e) {
    super("isNotPitched", t || -1321 + 46 * -89 + 1 * 5515);
    ce(this, Zn);
    ae(this, Zn, e);
  }
  evaluate() {
    const { z: t } = X(this, Zn) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
}
Zn = new WeakMap();
var Kn;
class E1 extends ot {
  constructor(t, e) {
    super("isRightEyePresent", t);
    ce(this, Kn);
    ae(this, Kn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, Kn));
  }
}
Kn = new WeakMap();
var Rn, T0;
class L1 extends ot {
  constructor(t, e, n) {
    super("isNotOutOfBounds", t);
    ce(this, Rn);
    ce(this, T0);
    ae(this, Rn, e), ae(this, T0, n);
  }
  evaluate() {
    const t = hc(X(this, T0), this.threshold), e = pc(X(this, Rn), X(this, T0));
    return Nl(e, t);
  }
}
Rn = new WeakMap(), T0 = new WeakMap();
class N1 {
  static getFaceValidationInstance(o, t, e, n) {
    return new S1([new H1(o.faceConfidence, t.confidence), new Z1(o.leftEye.confidence, t.leftEye.confidence), new E1(o.rightEye.confidence, t.rightEye.confidence), new G1(o.minFaceSizeRatio, t.faceSize), new T1(o.maxFaceSizeRatio, t.faceSize), new O1(o.sharpnessThreshold, t.sharpness), new B1(o.brightnessLowThreshold, t.brightness), new k1(o.brightnessHighThreshold, t.brightness), new L1(o.outOfBoundsThreshold, t, e), new V1(o.pitchAngleAccelerationThreshold, n), new K1(o.mouth.confidence, t.mouth.confidence), new P1(o.mouth.status.max, t.mouth.status), new R1(o.mouth.status.min, t.mouth.status)]);
  }
}
const Ux = class Ux extends d1 {
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
        !r && e.push(pu[n]);
      }), e;
    });
  }
  static async init() {
    const t = new w1(), e = vc(t), n = new Ux(), r = await new e();
    this._instance = n, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  setThresholds(t) {
    super.setThresholds(t);
    const { devicePitchAngleThreshold: e } = t;
    this.pitchAngleAccelerationThreshold = Yu * Math.sin(e * (Math.PI / (3 * -2853 + -11 * 425 + 13414)));
  }
  restart() {
    super.restart(), ha(St.INSTRUCTION_CHANGED, void (-1165 + -1315 * 5 + 3870 * 2), ol);
  }
  validateDetectedObject(t, e) {
    const n = N1.getFaceValidationInstance({ ...this.getThresholds(), pitchAngleAccelerationThreshold: this.pitchAngleAccelerationThreshold }, t, e, this.acceleration);
    return n.validate(), n;
  }
  async processImage({ image: t, timestamp: e }) {
    var A;
    const n = {};
    n.width = t.width, n.height = t.height;
    const r = n, i = Qr(r), a = ll(t, i), s = Il(a), c = {};
    c.width = a.width, c.height = a.height;
    const u = c;
    let g = await this.detector.detect(s, u, r);
    g = _l(r, g);
    const h = this.validateDetectedObject(g, r), { result: l } = h, C = this.getInstructionCode(l, h.isValid());
    if (l.get("isPresent")) {
      const d = {};
      d.image = s, d.timestamp = e, this.collectImagesForDuplicateDetection(d);
    }
    if (this.isInCandidateSelection) {
      if (this.bestImage && h.isValid() && this.isNewImageBetter(this.bestImage.detection, g)) {
        const d = { image: t, detection: k0(g) };
        this.bestImage = d, this.candidateSelectionImages.push(d);
      }
    } else if ((A = this.lastImage) != null && A.isValid && h.isValid()) {
      const d = { image: t, detection: k0(g) }, v = {};
      v.image = this.lastImage.image, v.detection = this.lastImage.detection;
      const k = v;
      this.isNewImageBetter(k.detection, d.detection) ? this.bestImage = d : this.bestImage = k, this.candidateSelectionImages.push(k, d), this.isInCandidateSelection = !0;
    } else h.isValid() ? this.lastImage = { instructionCode: C, isValid: !0, image: t, detection: k0(g) } : this.lastImage = { instructionCode: C, isValid: !1, image: t, detection: k0(g) };
    const m = { detectedFace: k0(g), instructionCode: C, invalidValidators: this.getInstructionCodesForValidators(l), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(m.detectedFace), ha(St.INSTRUCTION_CHANGED, C), sl(St.DETECTED_FACE_CHANGED, m.detectedFace, this.getThresholds().faceConfidence), cl(St.FACE_DETECTION, m.detectedFace, t), m;
  }
};
_(Ux, "_instance");
let pr = Ux;
const F1 = (x, o) => {
  const { handleError: t } = En(), [e, n] = nt(), { acceleration: r } = Dl();
  e && e.setAcceleration(r), Se(() => {
    (async () => {
      const s = await pr.getInstance();
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
var e0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gc = {}, Wa = {}, D1 = Y1;
function Y1(x, o) {
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
var kc = {};
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
})(kc);
var X1 = so;
function so() {
  this._listeners = {};
}
so.prototype.on = function(x, o, t) {
  return (this._listeners[x] || (this._listeners[x] = [])).push({
    fn: o,
    ctx: t || this
  }), this;
};
so.prototype.off = function(x, o) {
  if (x === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[x] = [];
  else
    for (var t = this._listeners[x], e = 0; e < t.length; )
      t[e].fn === o ? t.splice(e, 1) : ++e;
  return this;
};
so.prototype.emit = function(x) {
  var o = this._listeners[x];
  if (o) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < o.length; )
      o[e].fn.apply(o[e++].ctx, t);
  }
  return this;
};
var j1 = va(va);
function va(x) {
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
    x.writeFloatLE = o.bind(null, wa), x.writeFloatBE = o.bind(null, Sa);
    function t(e, n, r) {
      var i = e(n, r), a = (i >> 31) * 2 + 1, s = i >>> 23 & 255, c = i & 8388607;
      return s === 255 ? c ? NaN : a * (1 / 0) : s === 0 ? a * 1401298464324817e-60 * c : a * Math.pow(2, s - 150) * (c + 8388608);
    }
    x.readFloatLE = t.bind(null, Ba), x.readFloatBE = t.bind(null, Ga);
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
    x.writeDoubleLE = o.bind(null, wa, 0, 4), x.writeDoubleBE = o.bind(null, Sa, 4, 0);
    function t(e, n, r, i, a) {
      var s = e(i, a + n), c = e(i, a + r), u = (c >> 31) * 2 + 1, g = c >>> 20 & 2047, h = 4294967296 * (c & 1048575) + s;
      return g === 2047 ? h ? NaN : u * (1 / 0) : g === 0 ? u * 5e-324 * h : u * Math.pow(2, g - 1075) * (h + 4503599627370496);
    }
    x.readDoubleLE = t.bind(null, Ba, 0, 4), x.readDoubleBE = t.bind(null, Ga, 4, 0);
  }(), x;
}
function wa(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
function Sa(x, o, t) {
  o[t] = x >>> 24, o[t + 1] = x >>> 16 & 255, o[t + 2] = x >>> 8 & 255, o[t + 3] = x & 255;
}
function Ba(x, o) {
  return (x[o] | x[o + 1] << 8 | x[o + 2] << 16 | x[o + 3] << 24) >>> 0;
}
function Ga(x, o) {
  return (x[o] << 24 | x[o + 1] << 16 | x[o + 2] << 8 | x[o + 3]) >>> 0;
}
function ka(x) {
  throw new Error('Could not dynamically require "' + x + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var M1 = J1;
function J1(x) {
  try {
    if (typeof ka != "function")
      return null;
    var o = ka(x);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var Hc = {};
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
})(Hc);
var _1 = Q1;
function Q1(x, o, t) {
  var e = t || 8192, n = e >>> 1, r = null, i = e;
  return function(a) {
    if (a < 1 || a > n)
      return x(a);
    i + a > e && (r = x(e), i = 0);
    var s = o.call(r, i, i += a);
    return i & 7 && (i = (i | 7) + 1), s;
  };
}
var Vo, Ha;
function U1() {
  if (Ha)
    return Vo;
  Ha = 1, Vo = o;
  var x = C0();
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
  }, Vo;
}
var Oa;
function C0() {
  return Oa || (Oa = 1, function(x) {
    var o = x;
    o.asPromise = D1, o.base64 = kc, o.EventEmitter = X1, o.float = j1, o.inquire = M1, o.utf8 = Hc, o.pool = _1, o.LongBits = U1(), o.isNode = !!(typeof e0 < "u" && e0 && e0.process && e0.process.versions && e0.process.versions.node), o.global = o.isNode && e0 || typeof window < "u" && window || typeof self < "u" && self || e0, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(Wa)), Wa;
}
var Oc = z, dt = C0(), mr, co = dt.LongBits, Za = dt.base64, Ka = dt.utf8;
function Nn(x, o, t) {
  this.fn = x, this.len = o, this.next = void 0, this.val = t;
}
function Ur() {
}
function z1(x) {
  this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
}
function z() {
  this.len = 0, this.head = new Nn(Ur, 0, 0), this.tail = this.head, this.states = null;
}
var Zc = function() {
  return dt.Buffer ? function() {
    return (z.create = function() {
      return new mr();
    })();
  } : function() {
    return new z();
  };
};
z.create = Zc();
z.alloc = function(x) {
  return new dt.Array(x);
};
dt.Array !== Array && (z.alloc = dt.pool(z.alloc, dt.Array.prototype.subarray));
z.prototype._push = function(x, o, t) {
  return this.tail = this.tail.next = new Nn(x, o, t), this.len += o, this;
};
function zr(x, o, t) {
  o[t] = x & 255;
}
function q1(x, o, t) {
  for (; x > 127; )
    o[t++] = x & 127 | 128, x >>>= 7;
  o[t] = x;
}
function qr(x, o) {
  this.len = x, this.next = void 0, this.val = o;
}
qr.prototype = Object.create(Nn.prototype);
qr.prototype.fn = q1;
z.prototype.uint32 = function(x) {
  return this.len += (this.tail = this.tail.next = new qr(
    (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
    x
  )).len, this;
};
z.prototype.int32 = function(x) {
  return x < 0 ? this._push($r, 10, co.fromNumber(x)) : this.uint32(x);
};
z.prototype.sint32 = function(x) {
  return this.uint32((x << 1 ^ x >> 31) >>> 0);
};
function $r(x, o, t) {
  for (; x.hi; )
    o[t++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
  for (; x.lo > 127; )
    o[t++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
  o[t++] = x.lo;
}
z.prototype.uint64 = function(x) {
  var o = co.from(x);
  return this._push($r, o.length(), o);
};
z.prototype.int64 = z.prototype.uint64;
z.prototype.sint64 = function(x) {
  var o = co.from(x).zzEncode();
  return this._push($r, o.length(), o);
};
z.prototype.bool = function(x) {
  return this._push(zr, 1, x ? 1 : 0);
};
function br(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
z.prototype.fixed32 = function(x) {
  return this._push(br, 4, x >>> 0);
};
z.prototype.sfixed32 = z.prototype.fixed32;
z.prototype.fixed64 = function(x) {
  var o = co.from(x);
  return this._push(br, 4, o.lo)._push(br, 4, o.hi);
};
z.prototype.sfixed64 = z.prototype.fixed64;
z.prototype.float = function(x) {
  return this._push(dt.float.writeFloatLE, 4, x);
};
z.prototype.double = function(x) {
  return this._push(dt.float.writeDoubleLE, 8, x);
};
var $1 = dt.Array.prototype.set ? function(x, o, t) {
  o.set(x, t);
} : function(x, o, t) {
  for (var e = 0; e < x.length; ++e)
    o[t + e] = x[e];
};
z.prototype.bytes = function(x) {
  var o = x.length >>> 0;
  if (!o)
    return this._push(zr, 1, 0);
  if (dt.isString(x)) {
    var t = z.alloc(o = Za.length(x));
    Za.decode(x, t, 0), x = t;
  }
  return this.uint32(o)._push($1, o, x);
};
z.prototype.string = function(x) {
  var o = Ka.length(x);
  return o ? this.uint32(o)._push(Ka.write, o, x) : this._push(zr, 1, 0);
};
z.prototype.fork = function() {
  return this.states = new z1(this), this.head = this.tail = new Nn(Ur, 0, 0), this.len = 0, this;
};
z.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Nn(Ur, 0, 0), this.len = 0), this;
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
  mr = x, z.create = Zc(), mr._configure();
};
var eI = Bt, Kc = Oc;
(Bt.prototype = Object.create(Kc.prototype)).constructor = Bt;
var Jt = C0();
function Bt() {
  Kc.call(this);
}
Bt._configure = function() {
  Bt.alloc = Jt._Buffer_allocUnsafe, Bt.writeBytesBuffer = Jt.Buffer && Jt.Buffer.prototype instanceof Uint8Array && Jt.Buffer.prototype.set.name === "set" ? function(x, o, t) {
    o.set(x, t);
  } : function(x, o, t) {
    if (x.copy)
      x.copy(o, t, 0, x.length);
    else
      for (var e = 0; e < x.length; )
        o[t++] = x[e++];
  };
};
Bt.prototype.bytes = function(x) {
  Jt.isString(x) && (x = Jt._Buffer_from(x, "base64"));
  var o = x.length >>> 0;
  return this.uint32(o), o && this._push(Bt.writeBytesBuffer, o, x), this;
};
function tI(x, o, t) {
  x.length < 40 ? Jt.utf8.write(x, o, t) : o.utf8Write ? o.utf8Write(x, t) : o.write(x, t);
}
Bt.prototype.string = function(x) {
  var o = Jt.Buffer.byteLength(x);
  return this.uint32(o), o && this._push(tI, o, x), this;
};
Bt._configure();
var Rc = le, Gt = C0(), Ar, Pc = Gt.LongBits, nI = Gt.utf8;
function bt(x, o) {
  return RangeError("index out of range: " + x.pos + " + " + (o || 1) + " > " + x.len);
}
function le(x) {
  this.buf = x, this.pos = 0, this.len = x.length;
}
var Ra = typeof Uint8Array < "u" ? function(x) {
  if (x instanceof Uint8Array || Array.isArray(x))
    return new le(x);
  throw Error("illegal buffer");
} : function(x) {
  if (Array.isArray(x))
    return new le(x);
  throw Error("illegal buffer");
}, Tc = function() {
  return Gt.Buffer ? function(x) {
    return (le.create = function(o) {
      return Gt.Buffer.isBuffer(o) ? new Ar(o) : Ra(o);
    })(x);
  } : Ra;
};
le.create = Tc();
le.prototype._slice = Gt.Array.prototype.subarray || /* istanbul ignore next */
Gt.Array.prototype.slice;
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
function Eo() {
  var x = new Pc(0, 0), o = 0;
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
function Xx(x, o) {
  return (x[o - 4] | x[o - 3] << 8 | x[o - 2] << 16 | x[o - 1] << 24) >>> 0;
}
le.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw bt(this, 4);
  return Xx(this.buf, this.pos += 4);
};
le.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw bt(this, 4);
  return Xx(this.buf, this.pos += 4) | 0;
};
function Pa() {
  if (this.pos + 8 > this.len)
    throw bt(this, 8);
  return new Pc(Xx(this.buf, this.pos += 4), Xx(this.buf, this.pos += 4));
}
le.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw bt(this, 4);
  var x = Gt.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, x;
};
le.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw bt(this, 4);
  var x = Gt.float.readDoubleLE(this.buf, this.pos);
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
  return nI.read(x, 0, x.length);
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
  Ar = x, le.create = Tc(), Ar._configure();
  var o = Gt.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  Gt.merge(le.prototype, {
    int64: function() {
      return Eo.call(this)[o](!1);
    },
    uint64: function() {
      return Eo.call(this)[o](!0);
    },
    sint64: function() {
      return Eo.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return Pa.call(this)[o](!0);
    },
    sfixed64: function() {
      return Pa.call(this)[o](!1);
    }
  });
};
var xI = I0, Vc = Rc;
(I0.prototype = Object.create(Vc.prototype)).constructor = I0;
var Ta = C0();
function I0(x) {
  Vc.call(this, x);
}
I0._configure = function() {
  Ta.Buffer && (I0.prototype._slice = Ta.Buffer.prototype.slice);
};
I0.prototype.string = function() {
  var x = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + x, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + x, this.len));
};
I0._configure();
var Ec = {}, oI = bn, ei = C0();
(bn.prototype = Object.create(ei.EventEmitter.prototype)).constructor = bn;
function bn(x, o, t) {
  if (typeof x != "function")
    throw TypeError("rpcImpl must be a function");
  ei.EventEmitter.call(this), this.rpcImpl = x, this.requestDelimited = !!o, this.responseDelimited = !!t;
}
bn.prototype.rpcCall = function x(o, t, e, n, r) {
  if (!n)
    throw TypeError("request must be specified");
  var i = this;
  if (!r)
    return ei.asPromise(x, i, o, t, e, n);
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
bn.prototype.end = function(x) {
  return this.rpcImpl && (x || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(x) {
  var o = x;
  o.Service = oI;
})(Ec);
var rI = {};
(function(x) {
  var o = x;
  o.build = "minimal", o.Writer = Oc, o.BufferWriter = eI, o.Reader = Rc, o.BufferReader = xI, o.util = C0(), o.rpc = Ec, o.roots = rI, o.configure = t;
  function t() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  t();
})(Gc);
var te = Gc;
const B = te.Reader, ge = te.Writer, W = te.util, p = te.roots.default || (te.roots.default = {}), M0 = p.dot = (() => {
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
async function iI(x) {
  const { Image: o } = M0, t = await x.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const r = o.verify(n);
  if (r) throw Error(r);
  const i = {};
  return i.bytes = e, o.create(i);
}
async function aI(x) {
  const { v4: { Metadata: o } } = M0, t = { ...x };
  t.platform = M0.Platform.WEB;
  const e = t, n = o.verify(e);
  if (n) throw Error(n);
  return o.create(e);
}
async function sI(x) {
  const { Content: o } = M0, { iv: t, key: e, message: n } = await c1(x), r = { token: new Uint8Array(e), iv: t, schemaVersion: Mu, bytes: new Uint8Array(n) }, i = o.verify(r);
  if (i) throw Error(i);
  const a = o.create(r);
  return o.encode(a).finish();
}
function cI({ documentContent: x, faceContent: o, magnifeyeLivenessContent: t, smileLivenessContent: e }) {
  const { Blob: n } = M0.v4, r = {};
  r.documentContent = x, r.faceContent = o, r.magnifeyeLivenessContent = t, r.smileLivenessContent = e;
  const i = r, a = n.verify(i);
  if (a) throw Error(a);
  const s = n.create(i);
  return n.encode(s).finish();
}
async function gI(x, o) {
  const { FaceContent: t } = M0.v4, e = await iI(x), n = await aI(o), r = {};
  r.image = e, r.metadata = n;
  const i = r, a = t.verify(i);
  if (a) throw Error(a);
  const s = t.create(i), c = {};
  return c.faceContent = s, cI(c);
}
async function dI(x, o) {
  const t = await gI(x, o);
  return sI(t);
}
const uI = ({ onPhotoTakenInternal: x }) => {
  const { redfin: o, sunfish: t } = Xr(), { analytics: e } = wu(), { appState: n, freemiumOverlayState: r } = En(), { faceCameraOptions: i } = $s(), { cameraFacing: a, onPhotoTaken: s, sessionToken: c, thresholds: u, wasmDirectoryPath: g } = i, { controller: h } = F1(u, g), l = N0(
    ({ content: O, controller: J, imageData: Ie, webMetadata: U }) => {
      fl(Qs.FACE, J.getCandidateSelectionImages()), x == null || x({ cameraProperties: U }), s(Ie, O);
    },
    [x, s]
  ), { cameraResolution: C, cameraService: m, detectionDetails: A, videoRef: d } = Jl({
    analytics: e,
    cameraFacing: a,
    controller: h,
    sessionToken: c,
    createProtoMessage: dI,
    onPhotoTaken: l
  }), { shouldMirror: v } = Kl(St.CONTROL, m);
  Cl(St.CAMERA_PROPS_CHANGED, {
    cameraResolution: C,
    shouldMirror: v
  }), Se(() => () => {
    mn.getInstance().restart();
  }, []);
  const k = r !== Hx.HIDDEN && o !== sr.Higher && C, D = r === Hx.VISIBLE, M = t, Y = C && t && n === tt.RUNNING;
  return /* @__PURE__ */ Z(mt, { children: [
    k && /* @__PURE__ */ Z(n1, { fullOverlay: D, resolution: C }),
    /* @__PURE__ */ Z(fu, { ref: d, $isImageMirror: v, $isVisible: M, autoPlay: !0, muted: !0, playsInline: !0 }),
    Y && /* @__PURE__ */ Z(
      zl,
      {
        redfin: o,
        cameraResolution: C,
        detectionDetails: A,
        isImageMirror: v
      }
    )
  ] });
}, lI = ({
  onPhotoTakenInternal: x,
  ...o
}) => /* @__PURE__ */ Z(el, { cameraOptions: o, children: /* @__PURE__ */ Z(uI, { onPhotoTakenInternal: x }) });
function II({ initAppState: x }) {
  const [o, t] = nt(x), [e, n] = nt(), [r, i] = nt(!1), a = {};
  return a.appState = o, a.setAppState = t, a.error = e, a.setError = n, a.isCameraReady = r, a.setIsCameraReady = i, a;
}
function fI() {
  const [x] = window.crypto.getRandomValues(new Uint32Array(1));
  return x.toString(-1 * 4993 + -6887 * 1 + 11896);
}
function CI() {
  const x = sessionStorage.getItem("dot-user-id");
  if (x) return x;
  const o = fI();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function hI(x, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : x;
}
function pI(x) {
  return x > -7 * 673 + -7931 * 1 + -146 * -87 ? ">1m" : x > 2599 * 1 + -2119 + -435 ? ">45" : x > 3638 + -41 * 88 ? ">30" : "" + x;
}
const mI = (x) => Math.round(x / 500) * 500 / (-2791 + 43 * -119 + 262 * 34), Va = (x) => x ? x <= -2999 * 2 + -181 * 29 + 1 * 11248 ? Math.round(x * (-4793 * -1 + -52 * -49 + -7321)) / (-6847 + 3907 * -1 + 10774 * 1) : Math.round(x / (4261 * -1 + -812 + -47 * -109)) * (-22 * -14 + -1 * -4871 + -5129) : 2 * -2287 + 4168 + -14 * -29, bI = (x) => Math.round(x * (6510 + -305 * -8 + -4 * 2237)) / (5277 * -1 + 3343 * 1 + -121 * -16);
function AI(x) {
  return x !== tt.RUNNING ? Hx.VISIBLE : Hx.VISIBLE_WITH_MASK;
}
function yI({ onError: x }) {
  const { appState: o, error: t, isCameraReady: e, setAppState: n, setError: r, setIsCameraReady: i } = II({
    initAppState: tt.LOADING
  }), a = AI(o), s = N0(
    (u) => {
      pa(St.STATE_CHANGED, { appState: tt.ERROR, error: u }), i(!1), x(u), r(u), n(tt.ERROR);
    },
    [x, i, r, n]
  ), c = N0(
    (u) => {
      pa(St.STATE_CHANGED, { appState: u }), n(u);
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
var Lc = ((x) => (x.AUTO_CAPTURE = "auto-capture", x))(Lc || {});
class WI {
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
    const a = xx(i);
    await fetch("" + r + a + "&" + o, n);
  }
  async init(o, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = o;
    const e = { _app_version: rc() }, n = { organization: ic(window.location.href) }, r = xx({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const t = xx(o);
    await this.countlyFetch(t);
  }
  async sendAutoCaptureEvent(o, t) {
    const e = {};
    e.key = Lc.AUTO_CAPTURE, e.count = 1, e.dur = t, e.segmentation = o;
    const n = [e], r = xx({ events: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
}
const ix = new WI();
class vI {
  constructor() {
    _(this, "countly", ix);
  }
  createSegmentation(o) {
    return { appVersion: rc(), ...o };
  }
  init(o) {
    if (Gl()) return;
    const t = CI();
    ix.init(t, o);
  }
  endSession() {
    ix.endSession();
  }
  walleye(o, t) {
    const e = {};
    e.nocturne = o, e.customer = t;
    const n = this.createSegmentation(e);
    ix.sendAutoCaptureEvent(n);
  }
}
class wI extends vI {
  trackCaptureProcess({ averageFps: o, captureProcessDurationInMs: t, detection: e, deviceName: n, facingMode: r, imageResolution: i, instructionSet: a }) {
    if (!e) return;
    const s = mI(t), c = this.createSegmentation({ faceSize: Va(e.faceSize), confidence: Va(e.confidence), camera: hI(n, r), imageResolution: i.width + "x" + i.height, averageFps: bI(o), captureTime: pI(s), instructionSet: a });
    this.countly.sendAutoCaptureEvent(c, s);
  }
}
const SI = new wI();
let Q;
const Pt = new Array(9479 + 1 * 8609 + -2 * 8980).fill(void 0);
Pt.push(void 0, null, !0, !1);
function yr(x) {
  return Pt[x];
}
let hn = Pt.length;
function BI(x) {
  x < 132 || (Pt[x] = hn, hn = x);
}
function Nc(x) {
  const o = yr(x);
  return BI(x), o;
}
let Et = -5031 + -201 * 10 + 3 * 2347, gn = null;
function bx() {
  return (gn === null || gn.byteLength === 829 + 1 * -829) && (gn = new Uint8Array(Q.memory.buffer)), gn;
}
const Ax = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, GI = typeof Ax.encodeInto == "function" ? function(x, o) {
  return Ax.encodeInto(x, o);
} : function(x, o) {
  const t = Ax.encode(x);
  o.set(t);
  const e = {};
  return e.read = x.length, e.written = t.length, e;
};
function jx(x, o, t) {
  if (t === void 0) {
    const a = Ax.encode(x), s = o(a.length, -6359 * 1 + 9725 + -3365) >>> 3 * 479 + -6294 + 4857;
    return bx().subarray(s, s + a.length).set(a), Et = a.length, s;
  }
  let e = x.length, n = o(e, -2334 * -3 + -7109 * -1 + -14110) >>> -262 + 131 * 2;
  const r = bx();
  let i = -1911 + 1 * 586 + 1325;
  for (; i < e; i++) {
    const a = x.charCodeAt(i);
    if (a > 2203 + -1 * 169 + -1907) break;
    r[n + i] = a;
  }
  if (i !== e) {
    i !== 0 && (x = x.slice(i)), n = t(n, e, e = i + x.length * 3, -5400 + -445 * -21 + -3944) >>> -23 * 179 + -354 * -7 + 1639;
    const a = bx().subarray(n + i, n + e), s = GI(x, a);
    i += s.written, n = t(n, e, i, -573 + 210 * 45 + 317 * -28) >>> -2087 * -1 + -2449 + 362;
  }
  return Et = i, n;
}
function Fc(x) {
  return x == null;
}
let dn = null;
function Mt() {
  return (dn === null || dn.byteLength === -7 * -1271 + 467 * 17 + 5612 * -3) && (dn = new Int32Array(Q.memory.buffer)), dn;
}
const Wr = {};
Wr.ignoreBOM = !0, Wr.fatal = !0;
const Dc = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Wr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Dc.decode();
function vr(x, o) {
  return x = x >>> -1882 + -1 * 4309 + 6191, Dc.decode(bx().subarray(x, x + o));
}
function wr(x) {
  hn === Pt.length && Pt.push(Pt.length + (9527 + -1 * 9526));
  const o = hn;
  return hn = Pt[o], Pt[o] = x, o;
}
let un = null;
function Yc() {
  return (un === null || un.byteLength === 4303 + -1598 * -5 + -12293) && (un = new Uint32Array(Q.memory.buffer)), un;
}
function Ea(x, o) {
  const t = o(x.length * 4, 4) >>> 0, e = Yc();
  for (let n = -9145 + -35 * -203 + 102 * 20; n < x.length; n++)
    e[t / 4 + n] = wr(x[n]);
  return Et = x.length, t;
}
function La(x, o) {
  x = x >>> -1 * -6385 + 1673 + 3 * -2686;
  const t = Yc(), e = t.subarray(x / (4701 + 4901 * -1 + 204), x / (17911 + 17907 * -1) + o), n = [];
  for (let r = 0; r < e.length; r++)
    n.push(Nc(e[r]));
  return n;
}
function kI(x, o) {
  const t = jx(x, Q.__wbindgen_malloc, Q.__wbindgen_realloc), e = Et, n = jx(o, Q.__wbindgen_malloc, Q.__wbindgen_realloc), r = Et, i = Q.is_mobile_supported(t, e, n, r);
  return ti.__wrap(i);
}
const Sr = {};
Sr.register = () => {
}, Sr.unregister = () => {
};
const Na = typeof FinalizationRegistry > "u" ? Sr : new FinalizationRegistry((x) => Q.__wbg_licensevalidationresult_free(x >>> 37 * -64 + -1 * 7807 + 10175));
class ti {
  static __wrap(o) {
    o = o >>> 557 + -2 * -3163 + -6883;
    const t = Object.create(ti.prototype);
    return t.__wbg_ptr = o, Na.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = -3244 * 2 + -3308 + -2 * -4898, Na.unregister(this), o;
  }
  free() {
    const o = this.__destroy_into_raw();
    Q.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, n) {
    var r = Fc(t) ? 0 : jx(t, Q.__wbindgen_malloc, Q.__wbindgen_realloc), i = Et;
    const a = Ea(e, Q.__wbindgen_malloc), s = Et, c = Ea(n, Q.__wbindgen_malloc), u = Et, g = Q.licensevalidationresult_new(o, r, i, a, s, c, u);
    return this.__wbg_ptr = g >>> -965 + -4436 * 1 + 5401, this;
  }
  get is_valid() {
    return Q.licensevalidationresult_is_valid(this.__wbg_ptr) !== -63 * -42 + 9 * -311 + 153;
  }
  get features_json() {
    try {
      const e = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = Mt()[e / (1 * -1115 + -293 * 27 + 430 * 21) + (7994 + -1 * 7459 + -535 * 1)], t = Mt()[e / (1 * 9353 + -8204 + -1145 * 1) + (197 * -1 + -2406 + -124 * -21)];
      let n;
      return o !== 0 && (n = vr(o, t).slice(), Q.__wbindgen_free(o, t * (4 * 830 + -5693 + 1187 * 2), -47 * 109 + -593 * -5 + 2159)), n;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(-4110 + -4167 * 1 + -8293 * -1);
    }
  }
  get errors() {
    try {
      const n = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_errors(n, this.__wbg_ptr);
      var o = Mt()[n / (-6553 * -1 + -9826 + 1 * 3277) + (-47 * -194 + 7703 + -63 * 267)], t = Mt()[n / (-1 * -6761 + 1 * -7419 + 662) + (1 * -2965 + -6622 + 9588)], e = La(o, t).slice();
      return Q.__wbindgen_free(o, t * (486 * -6 + -3795 + 6715), 6382 * 1 + -688 + -5690), e;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(-5 * 1547 + -19 * 106 + 9765);
    }
  }
  get warnings() {
    try {
      const n = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var o = Mt()[n / (4778 + 349 * 1 + -1 * 5123) + (216 * 34 + 58 * -44 + -4792)], t = Mt()[n / (369 + 3 * 7 + -1 * 386) + (-9 * 289 + -3813 + 6415)], e = La(o, t).slice();
      return Q.__wbindgen_free(o, t * (-1612 + 404 * 4), -1 * 5479 + 5048 + 435), e;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(7204 + -7 * 346 + -4766);
    }
  }
}
async function HI(x, o) {
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
function OI() {
  const x = {};
  return x.wbg = {}, x.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return wr(/* @__PURE__ */ new Date());
  }, x.wbg.__wbg_getTime_2bc4375165f02d15 = function(o) {
    return yr(o).getTime();
  }, x.wbg.__wbindgen_object_drop_ref = function(o) {
    Nc(o);
  }, x.wbg.__wbindgen_string_get = function(o, t) {
    const e = yr(t), n = typeof e == "string" ? e : void 0;
    var r = Fc(n) ? -16 * 359 + 1820 + -327 * -12 : jx(n, Q.__wbindgen_malloc, Q.__wbindgen_realloc), i = Et;
    Mt()[o / (-13 * 73 + 7790 + -159 * 43) + (-9218 + 4 * -1834 + 16555)] = i, Mt()[o / (-131 * 13 + -4198 + 5905 * 1) + (-981 + -109 * -9)] = r;
  }, x.wbg.__wbindgen_string_new = function(o, t) {
    const e = vr(o, t);
    return wr(e);
  }, x.wbg.__wbindgen_throw = function(o, t) {
    throw new Error(vr(o, t));
  }, x;
}
function ZI(x, o) {
  return Q = x.exports, Xc.__wbindgen_wasm_module = o, dn = null, un = null, gn = null, Q;
}
async function Xc(x) {
  if (Q !== void 0) return Q;
  typeof x > "u" && (x = new URL("dot_embedded_bg.wasm", import.meta.url));
  const o = OI();
  (typeof x == "string" || typeof Request == "function" && x instanceof Request || typeof URL == "function" && x instanceof URL) && (x = fetch(x));
  const { instance: t, module: e } = await HI(await x, o);
  return ZI(t, e);
}
function Dt(x, o, t, e, n) {
  return Te(n - 885, o);
}
function KI(x, o, t, e, n) {
  return Te(o - -704, t);
}
function Lo(x, o, t, e, n) {
  return Te(n - 187, x);
}
function No(x, o, t, e, n) {
  return Te(o - -639, x);
}
function RI(x, o, t, e, n) {
  return Te(o - 837, n);
}
(function(x, o) {
  function t(i, a, s, c, u) {
    return Te(c - -820, i);
  }
  function e(i, a, s, c, u) {
    return Te(u - 885, i);
  }
  function n(i, a, s, c, u) {
    return Te(i - 483, c);
  }
  const r = x();
  for (; ; )
    try {
      if (-parseInt(t("FK2U", -450, -462, -450, -434)) / 1 + parseInt(n(814, 792, 837, "w#(G", 828)) / 2 + -parseInt(t("8(Tp", -455, -459, -451, -434)) / 3 + -parseInt(n(821, 842, 810, "moVN", 828)) / 4 + -parseInt(e(")af6", 1222, 1198, 1221, 1221)) / 5 * (-parseInt(t("erkb", -450, -488, -477, -466)) / 6) + parseInt(t("7Llo", -481, -463, -453, -460)) / 7 * (parseInt(n(832, 835, 806, "8(Tp", 827)) / 8) + parseInt(n(844, 870, 846, "J(j9", 819)) / 9 * (parseInt(n(815, 797, 825, "]960", 831)) / 10) === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Mx, -105037 + -2022 * 166 + 663769);
function Mx() {
  const x = ["WPxdHmkpW73dKG", "zaHmW7jusCo4WOZcJqKVWPK", "W5xcVbL3ernYW78ljmkdWRe", "W57cKXC1W6KvWRLFWOVcVg0UWRe", "BcxdSmkBoCoUW7hcUGddMCopvge", "ih18uZbhyCoq", "ba4Bg8oi", "gSk0W6ZcSmkO", "m8oAW5BdTmoXAmkK", "WR86m17dLG", "WQfzACoiW7K", "yqVdR39Y", "BbdcO8kbxG", "bmo9W7/cRXldMCkmWOTYDrDgkq", "yufQWPS+xSkkdWuHcSk6", "W5xcUXP0hXTNW4i1c8kQWPe", "gSoIW53cGI8", "WOKxo8k+kq", "qX9CWONcSmkOW57cPG", "mvSyWQqj", "e1TXWQdcSW", "W5ddRJxcKf0", "vXZdV1/dIYpdL8okW6NdTfOy", "CSoaWRdcKGG", "WOSxnCkYla", "E3RcLCkAW7K", "bSo7W7VcPbhdNCkjWRn7AYHvbq", "W6Huz8ocW6G", "W5OGcSkepW", "iSkuBmo3Ca", "cmowWPZdSdW", "FfatWQKz", "F0pcTmkYASojDJ8", "W417cmoXWQy", "zevOWPuWwSk6isuFkCko", "WPGLtCkzW7PBpSoMW5aXW7tdOa", "W59pFSoLCxJdK8ogW4FdRG0S", "h2z2WQBcQq", "W7PTWRusWPW", "W5TRgGq", "td3dSbJdHW", "W5BdNmkCW6VcNW", "WPSMtCkwW7vCbSokW5abW6FdPG", "h0vhrSk3", "FmkeW7xdNtS", "WPaFpmk6aq", "bGingmo1", "ibNdMLrUcSko", "FSokW7JdHG", "gCoxW5zXbq", "FSoxW4BdKYS", "urZdVL3dHcJdISo1W7FdLumk", "prCks1uFW5Xi", "pu0uWQ8d", "oHi3W4PY"];
  return Mx = function() {
    return x;
  }, Mx();
}
function Te(x, o) {
  const t = Mx();
  return Te = function(e, n) {
    e = e - 331;
    let r = t[e];
    if (Te.LrxKJb === void 0) {
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
      Te.XQfvcV = u, x = arguments, Te.LrxKJb = !0;
    }
    const a = t[-4483 + -1 * 6719 + -11202 * -1], s = e + a, c = x[s];
    return c ? r = c : (Te.kvSMGj === void 0 && (Te.kvSMGj = !0), r = Te.XQfvcV(r, n), x[s] = r), r;
  }, Te(x, o);
}
var Ya;
class PI {
  constructor() {
    _(this, Ya, !1);
  }
  async [(Ya = Dt(1221, "phpI", 1235, 1207, 1226) + Dt(1291, "(ZqT", 1253, 1278, 1269) + Dt(1236, "]21T", 1269, 1237, 1241), Lo("yy$r", 598, 560, 584, 570))](o = Dt(1226, "mGRD", 1234, 1222, 1236)) {
    function t(a, s, c, u, g) {
      return RI(a - 188, c - -634, c - 477, u - 40, s);
    }
    function e(a, s, c, u, g) {
      return No(u, g - 962);
    }
    function n(a, s, c, u, g) {
      return Lo(g, s - 230, c - 466, u - 218, a - -195);
    }
    function r(a, s, c, u, g) {
      return Dt(a - 181, c, c - 234, u - 315, s - -1100);
    }
    function i(a, s, c, u, g) {
      return No(u, g - 367);
    }
    try {
      const a = o + "/" + qu;
      await Xc(a), this[t(581, "xPSt", 583, 569, 571) + t(567, "Yz2m", 581, 601, 587) + i(109, 115, 97, "@rgW", 101)] = !0;
    } catch {
      this[i(60, 67, 53, "(&ps", 74) + r(152, 150, "C#N!", 147) + r(126, 144, "xPSt", 137)] = !1, console[r(175, 159, "Y&O%", 144)](i(81, 69, 99, "FK2U", 96) + e(663, 677, 675, ")af6", 677) + r(128, 148, "l!1#", 168) + e(690, 716, 673, "x(GV", 699) + e(697, 670, 703, ")af6", 689) + r(150, 127, "Q%R1", 127) + t(546, ")af6", 536, 509) + i(70, 89, 61, "7Llo", 75) + t(534, "yy$r", 561, 542) + t(567, "J2K1", 578, 603) + t(566, "IkKd", 565, 571) + e(714, 714, 684, "yy$r", 702) + e(696, 725, 688, "phpI", 704) + n(347, 340, 360, 330, "(R55") + i(78, 108, 110, "xiSG", 92) + i(68, 58, 43, "x(GV", 63) + n(337, 360, 321, 350, "IkKd") + t(544, "DLB$", 563, 578) + "n.");
    }
  }
  [Dt(1285, "yy$r", 1280, 1283, 1270) + KI(-343, -332, "(R55") + Dt(1230, "8(Tp", 1213, 1212, 1219) + "ed"]() {
    function o(n, r, i, a, s) {
      return No(n, i - 1405);
    }
    function t(n, r, i, a, s) {
      return Lo(n, r - 160, i - 216, a - 2, r - 765);
    }
    function e(n, r, i, a, s) {
      return Dt(n - 211, i, i - 409, a - 429, r - -1377);
    }
    return this[o("(&ps", 1130, 1112) + t("xPSt", 1304, 1298, 1307) + e(-133, -148, "muPm", -149)];
  }
}
class Fo extends Error {
  constructor() {
    super(...arguments);
    _(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function B0(x, o, t, e, n) {
  return de(o - -432, n);
}
(function(x, o) {
  function t(s, c, u, g, h) {
    return de(g - -572, s);
  }
  function e(s, c, u, g, h) {
    return de(c - -3, g);
  }
  function n(s, c, u, g, h) {
    return de(h - 227, c);
  }
  function r(s, c, u, g, h) {
    return de(g - 766, u);
  }
  for (var i = x(); ; )
    try {
      var a = -parseInt(e(381, 391, 400, "h73N", 376)) / 1 * (-parseInt(e(378, 382, 385, "Y2Zc", 378)) / 2) + -parseInt(n(636, "D1)W", 652, 623, 637)) / 3 + parseInt(t("E1#O", -193, -192, -204, -206)) / 4 * (parseInt(e(409, 397, 387, "4wD6", 418)) / 5) + parseInt(r(1205, 1168, "XwVJ", 1181, 1173)) / 6 + parseInt(e(434, 406, 410, "n)F0", 432)) / 7 + -parseInt(t("E1#O", -186, -185, -182, -176)) / 8 * (parseInt(e(424, 402, 382, "h73N", 383)) / 9) + parseInt(r(1148, 1129, "t2&b", 1150, 1123)) / 10 * (-parseInt(t("$^(n", -162, -145, -164, -153)) / 11);
      if (a === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Jx, -311367 + 35396 * 25);
function Jx() {
  var x = ["nGSS", "hfOkW4nB", "WPqDWPldR8o8cCokkG", "oKCkaIG", "WPqvW6VcHmohmSoBnwtdPq", "FWCAWRlcVgRcR8ouW5xdOCokqq", "WRlcM8oYWR/dMG", "WOZcQmk0WPr7", "W6bNW5KKW5C", "l8k4W4LqWPy", "cfOkW5T6", "icZcTW", "W5eJdSk+W5G", "qCkUzLip", "ECkIaWXYW67dGvfDW5VcQv7cTq", "x8oLjZeY", "CSoxW5tdOM0", "jCkNW4n3WPC", "wCoNjZa1", "bSo/nqHCCafqWQCWAtq", "W6zHW54", "l3xcUmkidmk8W4FdTa", "WPbZrW1OrCkmymk0", "W6T0W4i0W4W", "Bff2WRv0", "BCoPW7bLW6r1W6WE", "qSkUDK0p", "C21/W4ldGsVcRG", "l3ldICkMf8kmW5VdGmkT", "w8oMWOVcVrq", "lComWQRdR04", "BrPBrYVdQCosWQjPWQS", "WQFdQmoo", "W6fOW4SO", "qGjEe8kR", "W7/dGmofyGa", "WOX5W4/cJqjFrW", "W5hdGSkZW7eqWPVcUhG", "mfSFhZ4", "W6f1W7SMW5m", "sW1AWOiyjq7dQCoKW78jW5WLnW", "nWJcGCoXFSo1m8oeCb/cRxT8", "AbzDqwNcMSksWOfxWPWLiCkr", "WRhcK8oVWR/dOq", "l3pdImoLDCoYWPFdTSkjW6tdP8kEWPi", "b8oJwCk/WRC2W67cKCkWWQldISkiWQag", "u8krqHNcQ0hdU0pdPCk0ySoIWO0", "WQWKcCogW4RcV8kCBmoEpmotWO4W", "bmoqbKBdQW", "WOZcLSkHW7C+", "pmkUW5avkW", "nwZdOq", "n1WJWRlcU3OEbXnIWONdQJS", "iG5ies3dOCoMW6rsvxjSEq", "sSoXWPFcKq0", "WR3dRmojnSkz", "wmoxW73dR2i", "DLhdGmkSjG", "u8kHD18j", "BSovW5q", "W5xcLSk/ea"];
  return Jx = function() {
    return x;
  }, Jx();
}
function de(x, o) {
  var t = Jx();
  return de = function(e, n) {
    e = e - (-6343 * -1 + -8415 + -46 * -53);
    var r = t[e];
    if (de.VSRXCh === void 0) {
      var i = function(g) {
        for (var h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", C = "", m = 0, A, d, v = 0; d = g.charAt(v++); ~d && (A = m % 4 ? A * 64 + d : d, m++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * m & 6)) : 0)
          d = h.indexOf(d);
        for (var k = 0, D = l.length; k < D; k++)
          C += "%" + ("00" + l.charCodeAt(k).toString(16)).slice(-2);
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
      de.ySxwIm = a, x = arguments, de.VSRXCh = !0;
    }
    var s = t[-8759 + -71 * -51 + 5138], c = e + s, u = x[c];
    return u ? r = u : (de.VqkSbb === void 0 && (de.VqkSbb = !0), r = de.ySxwIm(r, n), x[c] = r), r;
  }, de(x, o);
}
function TI(x, o, t, e, n) {
  return de(n - 996, t);
}
function t0(x, o, t, e, n) {
  return de(n - -721, o);
}
function Fa(x, o, t, e, n) {
  return de(n - 938, e);
}
function on(x, o, t, e, n) {
  return de(t - 20, n);
}
var V0;
class Da {
  constructor(o) {
    ce(this, V0);
    function t(a, s, c, u, g) {
      return de(a - -435, s);
    }
    function e(a, s, c, u, g) {
      return de(c - 561, a);
    }
    function n(a, s, c, u, g) {
      return de(s - 695, u);
    }
    function r(a, s, c, u, g) {
      return de(s - 927, a);
    }
    this[e("bDLG", 943, 941) + e("4wD6", 961, 973)] = o;
    function i(a, s, c, u, g) {
      return de(a - 729, s);
    }
    try {
      ae(this, V0, o[e("@WHX", 924, 936, 908, 911) + e("YC(]", 952, 940, 968, 929) + i(1103, "yRcm", 1113, 1112, 1087)] && JSON[i(1118, "UhKc", 1134, 1125, 1119)](o[i(1154, "#Wzm", 1130, 1161, 1126) + t(-18, "KgE6", -19, -16, -1) + r("it!N", 1341, 1318, 1339, 1330)]));
    } catch (a) {
      console[n(1063, 1091, 1088, "cfFl")](a);
    }
  }
  get [t0(-334, "cfFl", -306, -296, -319) + "id"]() {
    function o(n, r, i, a, s) {
      return t0(n - 300, r, i - 0, a - 215, i - 1304);
    }
    function t(n, r, i, a, s) {
      return t0(n - 291, a, i - 177, a - 395, r - 914);
    }
    function e(n, r, i, a, s) {
      return t0(n - 322, r, i - 493, a - 328, s - 1368);
    }
    return this[e(1021, "KgE6", 1048, 1066, 1039) + o(974, "Ci#f", 976, 1002)][o(1004, "jbPO", 996, 980) + t(616, 617, 603, "OVS3")];
  }
  get [B0(-14, -21, -25, -37, "n)F0") + "s"]() {
    function o(e, n, r, i, a) {
      return B0(e - 397, a - 495, r - 268, i - 294, e);
    }
    function t(e, n, r, i, a) {
      return B0(e - 1, i - 118, r - 38, i - 343, a);
    }
    return this[o("cfFl", 465, 463, 465, 449) + o("cfFl", 437, 437, 434, 434)][t(56, 35, 57, 56, "jDI@") + "s"];
  }
  get [t0(-343, "sRC6", -309, -300, -315) + on(428, 443, 442, 414, "YC(]")]() {
    function o(e, n, r, i, a) {
      return t0(e - 160, e, r - 318, i - 476, i - 652);
    }
    function t(e, n, r, i, a) {
      return B0(e - 497, n - 859, r - 11, i - 10, a);
    }
    return this[o("zxDv", 323, 303, 309) + o("6aID", 368, 347, 349)][o("sb4$", 358, 353, 351) + t(838, 810, 792, 796, "cfFl")];
  }
  get [on(407, 392, 407, 376, "TFXG") + "b"]() {
    return X(this, V0);
  }
  get [t0(-307, "s[3Z", -328, -293, -323) + B0(-62, -31, -21, -7, "h73N") + on(431, 442, 439, 451, "$jF]") + on(436, 456, 443, 431, "1V%c")]() {
    var i, a;
    function o(s, c, u, g, h) {
      return Fa(s - 353, c - 13, u - 191, c, h - 47);
    }
    function t(s, c, u, g, h) {
      return TI(s - 427, c - 189, c, g - 173, s - -784);
    }
    function e(s, c, u, g, h) {
      return Fa(s - 279, c - 352, u - 271, g, c - -1879);
    }
    function n(s, c, u, g, h) {
      return B0(s - 308, h - -313, u - 81, g - 418, g);
    }
    function r(s, c, u, g, h) {
      return on(s - 104, c - 221, g - -238, g - 123, s);
    }
    return !!((a = (i = X(this, V0)) == null ? void 0 : i[e(-546, -575, -603, "h73N") + e(-576, -546, -572, "6aID")]) != null && a[r("#Wzm", 135, 164, 155) + t(584, "bDLG", 592, 590) + o(1428, "UhKc", 1425, 1407, 1406) + t(581, "sRC6", 581, 576) + n(-379, -355, -393, "zxDv", -364) + t(609, "o)&3", 632, 617) + o(1342, "UhKc", 1364, 1378, 1361) + "d"]);
  }
}
V0 = new WeakMap();
(function(x, o) {
  function t(s, c, u, g, h) {
    return We(s - 338, g);
  }
  function e(s, c, u, g, h) {
    return We(g - -261, s);
  }
  function n(s, c, u, g, h) {
    return We(g - -601, s);
  }
  function r(s, c, u, g, h) {
    return We(h - 486, c);
  }
  const i = x();
  function a(s, c, u, g, h) {
    return We(u - -415, h);
  }
  for (; ; )
    try {
      if (parseInt(n("!vb(", -369, -353, -284, -366)) / 1 * (parseInt(a(-68, -33, -22, -110, "W3Vz")) / 2) + parseInt(n("BYD$", -383, -348, -317, -245)) / 3 * (-parseInt(r(779, "j17d", 872, 685, 775)) / 4) + parseInt(a(8, 8, -6, -45, "u@M4")) / 5 + parseInt(a(-21, -21, 19, -6, "$P6T")) / 6 + -parseInt(r(785, "z$vT", 801, 772, 787)) / 7 * (-parseInt(e("&KaF", 247, 197, 179, 277)) / 8) + parseInt(t(663, 765, 560, "!bge", 632)) / 9 * (parseInt(n("z$vT", -231, -289, -222, -193)) / 10) + -parseInt(n("3KqW", -306, -189, -241, -279)) / 11 === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(_x, 798060 + -118163 * 1 + 17 * 12439);
function We(x, o) {
  const t = _x();
  return We = function(e, n) {
    e = e - (440 + 207 * -1);
    let r = t[e];
    if (We.tWliAt === void 0) {
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
      We.qUMyfg = u, x = arguments, We.tWliAt = !0;
    }
    const a = t[7651 + 331 * 6 + -9637], s = e + a, c = x[s];
    return c ? r = c : (We.vAJvZL === void 0 && (We.vAJvZL = !0), r = We.qUMyfg(r, n), x[s] = r), r;
  }, We(x, o);
}
function Yt(x, o, t, e, n) {
  return We(e - -884, x);
}
function vt(x, o, t, e, n) {
  return We(x - 482, n);
}
function Zt(x, o, t, e, n) {
  return We(x - 875, n);
}
function _x() {
  const x = ["jSoOexfv", "WRL3W4W", "WQ5RWQa3WQi", "W6nFW4WBW7m", "esldUCoVxW", "W5ddRmoRWRJdLW", "j8o3WRiiW5W", "W7BcGKSGhq", "jXaNW4Hs", "oCoXWQm", "kCooWObPDCk5hCoWW7pcHdm", "vCkqeXG", "ec/cTv85", "W4XkW5ixW5q", "W6uCWQ5yW7G", "rHtdICogW5tdL8kal8kZEIRdOa", "WQldHKG0WRG", "EhSyWQj9", "imo9wWJcTW", "k8k/W4/cVqq", "ySkoW4SoWROOavK", "WRRdKSoRW4GUWRFcJmoRaq", "W6awWQfyW78", "WPT5W5XDWPa", "m8kSW5lcSbG", "W67cUSolmmo/", "FgOE", "jCokW7SVWOS", "WO0WBa", "x8kjW6yHrG", "gttcPfuL", "qqO8", "Fx5SWO7dHa", "W63dN07dPgK", "WRKhW6byza", "hCkdF1bl", "oSkLvLLS", "uXhdPtuL", "xSk1W5yNW7S", "E8oDW40CW4W", "WRL/W4SyWPC", "ecNcTvSJ", "W6OAWQnjW6q", "C8kcW6G3", "W4VdN1pdUgG", "WQ9PWRyNWQS", "hrjMW6Pp", "j8kgWObdWPxcPulcRYnuWQ7cRq", "W7SGW4e0W4S", "kSkWW53cSq", "jSoxW7W", "vCkcW6m2W7u", "zCogW5aBW5K", "mCoqWQvWWQGzW7ybEmkYW6GUna", "ivn+W6be", "W7DNW407W7a", "o8o/WQmEW5C", "t8keW68CrG", "W6VcU8omoW", "W5FdQSoX", "bCk0W5xcVmov", "dYVcHg0w", "hrtcLgGg", "WPJcINhcTmkQ", "umkgW6mUWRK", "WOZcGLFcOmkE", "eCofo2Tq", "f2uoWQW", "amo/CbNcJW", "qxTWF8ka", "lHe1W4K+", "lSk/W5lcSa", "W4XVW5WWW7C", "WQ7cLvhcMSkA", "qCkcafbW", "kCoqk8kasq", "WOaLCaZdLG", "dINcPa", "A8oLabWNbCoSyCoRxmoBpG", "aSozW6aVWPy", "hSozla", "WRFdG009WQi", "WRddPCktzSkcjSoruCoCgSk4", "W4JdMvZcUmkAqNpdMW", "W6dcG8k4W5q1", "tmoLqCkT", "u8kgW68", "WR9XW4TBWPy", "WRxdT3CEWRa", "WPPaW7jhW58", "WPXkW6jMW5C", "WO9OWOegWQi", "a8owoSkGrG", "pmkLs0vT", "WRf1W55mWOS", "FSkjB8o3hCkeWRZdKI8iW74", "C0vTWPtdGW", "W4NdV37dMuO", "WOHgWR9pWRW", "valdUc0L", "fSoFpfPs", "WRyAW6G", "WP7dSKHQbG", "WOi/WPHHW70", "x8kuW6uViq", "fSkoW5hcNCoz", "W4RdIfJdR34", "W7KUlXef", "WQWhhbSDW4ldNCk0DW", "dmkHW4tcK8ou", "WQD7WRy", "kCoIWQBcV07cKahdSXv/WRm", "WP3cIMhcK8k6", "qmkaEYWji8knkCk0b2uIwq", "BwGyWR5Q", "WO84EdRdLW", "ucapWQFdLG", "FCkkW4q0mG", "emk0W5ZcLCoy", "W6HcW71Zu8oaWOXY", "bqf7W6Dt", "bfBcKCkaWOO", "gxyFWQRcOG", "W4hdG1RdPa", "W5W8WR4gW6u", "wCkua1vW", "WPpdR05daq", "ecNcSx8L", "rWldUcG/", "tdRdQG", "vmkBbfm4", "WQrTWRexWQ0", "oXWYW41O", "W7LAqHen", "s3DNECkg", "nSonW6e1WPa", "i8owi8kGta", "hCkhW7m2qG", "W4BdIK8", "C8kRW6GBW6G", "WQBdMv8", "smoRrG", "h8k+WR0eW5e", "WO8PWPm8W7q", "W7pcMhG", "qxf2wCkj", "w8ktW7KM", "W7S9W7GT", "WPNdO1LfbW", "WQbXW41wWPC", "guNcGmkjta", "WQ7dL181WRK", "g8oPxddcHa", "W6uGWOGiW4LtCCkDW4pdGtuj", "amoetGuHW4z5oSkJACojW4dcRY4", "pNZcJmkXEG", "WRP1W40", "W47dNJ3cPCkXrhxdGCoL", "WOnBWQniWQe", "W5VdT8oTWR7dHa", "FmovW5uCW5C", "W5BdPmoRWRldNG", "W53dQSoXWQxdHa", "kH8GW44A", "omk0tq", "WRnnWQ9IWP0", "W7JcLgGfaq", "vmkpW7u3", "xCkCffn2", "sMGzWQaV", "FCk9W6RdOXS", "jHSWWOm", "fI89l8orW5xcRarbcWumW6FdNq", "FCkpASo2hSo3W4VdOJqIW6JdUSon", "WPi1WPG", "hCkyBqPt", "y8kbW5NdMbG", "WPjaW6vJW4y", "WReNmJ4j", "qaaP", "W5VcPCoXWR7dGG", "mxBcHCkhBq", "daRcIwfT", "W5JdP0tdM2e", "hbb3W6Du", "WRhdLvyYWQ4", "nguzWQBcUa", "BcJdMSkqCx1gW57dQG", "bCoLvqRcIG", "W7RcI8k3W5G/", "W5DNW407W7a", "WP7dQ0G", "W45HW4W", "e3BdGSkgua", "cmkPW5pcLCos", "W6JcHCkVW7q2", "DqRdGZyj", "WRSzW6n4CG", "gYpcON44", "jSkSW4NcSr4", "W7vUW7O+W6S", "erXMW4Xk", "WPBcJgdcMCkS", "suNdKZ85wePegNTHWRGy", "zGtdNSoyFq", "u8koW6HJrq", "W4n0W5aMW6O", "W5JdISk3W5G4", "lmkNx1L5", "raSYDq", "nCoqW6iBW516WPm+", "W43dG0/dRJS", "W7xcTmoyoG"];
  return _x = function() {
    return x;
  }, _x();
}
function Qe(x, o, t, e, n) {
  return We(n - -378, t);
}
function Ke(x, o, t, e, n) {
  return We(o - 74, e);
}
var Xa, ja;
class VI {
  constructor(o) {
    _(this, ja);
    _(this, Xa);
    function t(e, n, r, i, a) {
      return We(e - -275, r);
    }
    this[t(31, 132, "hNYb") + t(37, 94, "I)9#") + "d"] = o;
  }
  async [(ja = vt(882, 946, 778, 811, "EtJf") + "se", Xa = Qe(-88, -25, "V)2B", 14, -44) + Ke(303, 367, 310, "!^4w"), Ke(432, 489, 426, "G$u4"))](o = Ke(450, 497, 473, "51[["), t = Qe(-93, -50, "Rv3V", -51, 6) + Yt("EvT[", -450, -431, -535) + "ic") {
    function e(a, s, c, u, g) {
      return Yt(g, s - 280, c - 99, s - 1159);
    }
    function n(a, s, c, u, g) {
      return Qe(a - 148, s - 194, c, u - 183, a - -115);
    }
    function r(a, s, c, u, g) {
      return Ke(a - 382, s - -586, c - 292, a);
    }
    function i(a, s, c, u, g) {
      return Ke(a - 440, a - -151, c - 396, c);
    }
    await Promise[i(326, 288, "!bge") + i(247, 319, "EtJf")]([this[r("0%Hb", -105, -179) + i(241, 278, "j17d") + "d"][r("uIJp", -139, -40)](o), this[n(-217, -156, "nBLV", -205) + e(721, 632, 550, 635, "yyL[") + "e"](t)]), this[r("yyL[", -121, -223) + r("Mkpm", -204, -216) + e(536, 636, 668, 698, "W3Vz")]();
  }
  async [Ke(321, 349, 367, "#3Dm") + Zt(1317, 1217, 1293, 1402, "!^4w") + "se"](o) {
    function t(a, s, c, u, g) {
      return Qe(a - 271, s - 153, u, u - 168, c - 533);
    }
    function e(a, s, c, u, g) {
      return Qe(a - 77, s - 425, u, u - 332, g - 962);
    }
    function n(a, s, c, u, g) {
      return vt(s - 17, s - 65, c - 232, u - 286, c);
    }
    function r(a, s, c, u, g) {
      return Qe(a - 181, s - 165, g, u - 241, c - 1238);
    }
    function i(a, s, c, u, g) {
      return Ke(a - 162, a - -76, c - 462, g);
    }
    try {
      if (t(465, 579, 544, "I)9#", 477) !== n(883, 905, "pY@#", 908, 909)) {
        const a = await fetch(o);
        if (!a.ok) {
          if (t(350, 521, 422, "5j1F", 505) === i(269, 369, 234, 354, "j17d")) throw new Error(t(545, 434, 536, "BYD$", 487) + n(889, 907, "j17d", 892, 968) + i(384, 394, 363, 415, "^V6%") + e(881, 857, 821, "uIJp", 927) + "d.");
          _0x2909b2[i(327, 300, 376, 376, "I)9#")](e(822, 943, 981, "dAv2", 914) + n(924, 847, "Hab6", 935, 914) + i(415, 411, 396, 419, "I)9#") + t(526, 423, 460, "V)2B", 525) + r(1383, 1355, 1290, 1291, "3KqW")), this[n(986, 899, "EtJf", 1003, 810) + "se"] = void (17 * -111 + 13 * -534 + -2943 * -3);
          return;
        }
        this[e(1028, 960, 1085, "Hab6", 1009) + "se"] = await a[i(247, 190, 263, 314, "yv%8")]();
      } else _0x565f0e[r(1175, 1111, 1141, 1075, "z$vT") + "ch"]((a) => _0x9a522c[n(799, 763, "ZuyJ", 666, 783)](a));
    } catch (a) {
      t(465, 539, 452, "AFki") === i(308, 413, 263, 332, "QD09") ? (this[n(674, 777, "pY@#", 702) + "se"] = void (9587 + 1 * 3225 + -3203 * 4), console[t(527, 666, 591, "s8M!")](a)) : _0x6c331f[e(833, 859, 717, "G$u4", 821)]();
    }
  }
  async [vt(926, 1021, 913, 938, "ZuyJ") + Qe(21, 79, "0%Hb", -94, 12) + "e"](o) {
    function t(i, a, s, c, u) {
      return Yt(s, a - 260, s - 230, i - 1072);
    }
    function e(i, a, s, c, u) {
      return vt(i - -430, a - 470, s - 480, c - 119, s);
    }
    if (this[n(-261, "!bge", -239, -267) + t(516, 428, "fC4Y")] = void (869 * 11 + -5349 + -421 * 10), !o)
      if (n(-246, "j17d", -168, -228) !== e(454, 370, "V)2B", 556)) {
        _0x2b70ca instanceof _0x249e97 && _0x3694a3[e(385, 290, "5j1F", 290) + r(921, 974, "51[[", 989)](_0x3fcd1a);
        return;
      } else {
        console[e(405, 440, "dAv2", 500)](e(390, 388, "0%Hb", 461) + t(601, 562, "&KaF") + t(615, 629, "nBLV") + t(515, 470, "$P6T") + t(565, 648, "nBLV")), this[t(562, 575, "3KqW") + "se"] = void 0;
        return;
      }
    function n(i, a, s, c, u) {
      return vt(c - -989, a - 130, s - 114, c - 76, a);
    }
    function r(i, a, s, c, u) {
      return vt(a - 157, a - 118, s - 403, c - 253, s);
    }
    await this[e(406, 498, "Mkpm", 440) + e(350, 425, "z$vT", 341) + "se"](o);
  }
  [vt(715, 738, 733, 632, "WyGZ") + Zt(1267, 1295, 1208, 1194, "fC4Y") + "s"](o) {
    function t(e, n, r, i, a) {
      return Yt(n, n - 401, r - 62, r - 1109);
    }
    o[t(732, "AFki", 646) + "ch"]((e) => console[t(641, "ZuyJ", 643)](e));
  }
  [Ke(325, 400, 484, "0%Hb") + Ke(389, 359, 259, "WyGZ") + Qe(-88, -135, "I)9#", 31, -34)](o) {
    function t(n, r, i, a, s) {
      return Ke(n - 432, n - 67, i - 340, r);
    }
    function e(n, r, i, a, s) {
      return Zt(a - -1679, r - 141, i - 485, a - 12, r);
    }
    o[e(-379, "#3Dm", -371, -453) + "ch"]((n) => console[t(396, "&8!L", 349)](n));
  }
  [Yt("5j1F", -474, -563, -480) + Zt(1152, 1113, 1115, 1149, "&8!L")]() {
    function o(e, n, r, i, a) {
      return Ke(e - 15, i - -318, r - 297, a);
    }
    function t(e, n, r, i, a) {
      return Qe(e - 421, n - 427, r, i - 99, a - 681);
    }
    return window[o(-21, -45, -91, 3, "5j1F") + o(121, -2, 209, 103, "pAf)")][t(559, 514, "4rXf", 651, 607) + t(748, 730, "yyL[", 722, 649)];
  }
  [vt(877, 889, 858, 861, "&KaF") + Zt(1141, 1123, 1248, 1171, "EtJf") + vt(821, 913, 882, 854, "w^qM")]() {
    function o(i, a, s, c, u) {
      return Zt(a - -1663, a - 145, s - 441, c - 379, i);
    }
    function t(i, a, s, c, u) {
      return Ke(i - 13, u - -41, s - 138, i);
    }
    function e(i, a, s, c, u) {
      return Qe(i - 177, a - 406, u, c - 246, s - 926);
    }
    function n(i, a, s, c, u) {
      return vt(c - 394, a - 448, s - 49, c - 455, u);
    }
    function r(i, a, s, c, u) {
      return Qe(i - 257, a - 310, i, c - 425, c - 376);
    }
    try {
      if (t("51[[", 489, 457, 391, 443) === t("BYD$", 208, 172, 245, 274)) throw new _0x2e2738(t("s8M!", 332, 413, 470, 408) + n(1173, 1130, 1131, 1122, "!^4w") + o("(exP", -543, -558, -568, -496) + n(1192, 1188, 1194, 1270, "YAVm") + ".");
      if (!this[e(990, 870, 888, 863, "#3Dm") + "se"]) {
        if (n(1183, 1239, 1222, 1232, "W3Vz") === o("W3Vz", -432, -528, -367, -350)) throw new Fo(o("W3Vz", -389, -451, -306, -378) + o("0%Hb", -528, -624, -581, -598) + n(1259, 1120, 1120, 1212, "3KqW") + e(914, 946, 924, 857, "!vb(") + ".");
        {
          _0x1080d7 instanceof _0x1b15eb ? _0x2ffbb4[r("!bge", 348, 231, 305, 294)]() : _0x558973 instanceof _0x1bc0e8 && _0x46d79a[n(1284, 1225, 1327, 1312, "s8M!")](_0x3fdcc4);
          const i = {};
          i[o("dAv2", -534, -577, -535, -625) + o("hNYb", -502, -542, -516, -543)] = !1, i[t("&8!L", 505, 342, 414, 438) + "s"] = [], i[r("!^4w", 391, 449, 353, 283) + n(1071, 1043, 1096, 1110, "!P%!")] = [], i[t("!^4w", 412, 310, 401, 333) + r("uIJp", 248, 238, 261, 159) + t("WyGZ", 182, 257, 223, 289)] = void (2 * -1845 + 4706 + 508 * -2), i[r("fC4Y", 359, 221, 271, 287)] = function() {
          }, this[n(1100, 1026, 1111, 1126, "I)9#") + r("nBLV", 389, 472, 367, 397)] = new _0x30369f(i);
        }
      }
      if (!this[e(982, 951, 949, 935, "&KaF") + e(750, 809, 844, 876, "%59A") + "d"][o("rEWh", -362, -442, -449, -411) + n(1203, 1211, 1205, 1178, "T%Qz") + n(1271, 1287, 1179, 1242, "(exP") + "ed"]()) {
        if (r("uIJp", 327, 173, 233, 255) !== e(1008, 853, 919, 838, "4rXf")) throw new Fo(t("yv%8", 389, 324, 407, 303) + e(935, 964, 959, 1003, "uIJp") + o("^V6%", -364, -388, -341, -442) + e(909, 987, 890, 923, "z$vT") + ".");
        return;
      }
      this[n(1167, 1020, 1120, 1114, "T%Qz") + o("3KqW", -457, -360, -396, -481)] = new Da(kI(this[n(1107, 1113, 1168, 1213, "AFki") + "se"], this[o("rEWh", -416, -502, -325, -477) + n(1175, 1231, 1206, 1167, "pAf)")]())), this[r("(exP", 268, 303, 256, 206) + r("I)9#", 170, 153, 237, 220) + "s"](this[t("pY@#", 383, 449, 515, 445) + r("EtJf", 278, 311, 313, 266)][t("QD09", 329, 258, 323, 356) + "s"]), this[r("&8!L", 345, 395, 441, 362) + t("pY@#", 230, 229, 356, 294) + n(1162, 1107, 1208, 1168, "uIJp")](this[e(691, 799, 788, 716, "!bge") + t("0%Hb", 325, 240, 280, 285)][n(1051, 1102, 1087, 1119, "V)2B") + n(1360, 1285, 1220, 1274, "pY@#")]);
    } catch (i) {
      if (e(809, 783, 842, 796, "yyL[") === o("!vb(", -406, -392, -469)) return this[o("BYD$", -546, -494, -584) + r("&8!L", 367, 475, 436)];
      {
        i instanceof Fo ? o("AFki", -537, -541, -438) !== r("yv%8", 306, 201, 242) ? i[o("Y]$d", -472, -436, -428)]() : this[r("%59A", 236, 365, 293) + o("j17d", -470, -501, -525) + "d"] = _0x354f4c : i instanceof Error && (r("yyL[", 237, 378, 285) === e(884, 757, 828, 825, "3KqW") ? console[t("5j1F", 175, 235, 234, 269)](i) : _0x5bd084[t("W3Vz", 415, 480, 399, 420) + n(1059, 1090, 1209, 1159, "5j1F")](_0x5b5b96));
        const a = {};
        a[o("YAVm", -514, -419, -519) + o("rEWh", -438, -462, -542)] = !1, a[e(852, 949, 847, 869, "BYD$") + "s"] = [], a[r("pY@#", 479, 350, 394) + o("!^4w", -368, -413, -384)] = [], a[o("od33", -347, -329, -283) + e(978, 1008, 906, 915, "YAVm") + t("EvT[", 387, 449, 323, 413)] = void (7693 * 1 + 9135 + -16828), a[e(869, 816, 900, 956, "uIJp")] = function() {
        }, this[e(869, 823, 830, 754, "!P%!") + e(885, 947, 863, 825, "EtJf")] = new Da(a);
      }
    }
  }
  [Ke(489, 387, 345, "Rv3V") + Yt("EvT[", -593, -599, -575) + Qe(-227, -24, "yv%8", -88, -121) + "t"]() {
    function o(e, n, r, i, a) {
      return Yt(r, n - 367, r - 7, n - 695);
    }
    function t(e, n, r, i, a) {
      return Ke(e - 265, e - 231, r - 65, r);
    }
    return this[o(210, 175, "4rXf") + t(672, 653, "^V6%")];
  }
  [Qe(-27, -153, "j17d", -86, -109) + Qe(-36, 78, "u@M4", -69, 10) + Ke(422, 385, 295, "EtJf")]() {
    var i, a;
    function o(s, c, u, g, h) {
      return Ke(s - 173, s - -596, u - 90, c);
    }
    function t(s, c, u, g, h) {
      return Zt(u - -1623, c - 89, u - 11, g - 275, c);
    }
    function e(s, c, u, g, h) {
      return Zt(h - -1491, c - 153, u - 136, g - 420, s);
    }
    function n(s, c, u, g, h) {
      return Zt(g - -1658, c - 284, u - 431, g - 460, u);
    }
    function r(s, c, u, g, h) {
      return Yt(c, c - 291, u - 344, u - 1278);
    }
    if (!this[n(-425, -369, "Mkpm", -451) + "se"])
      return e("pY@#", -279, -102, -187, -194) !== e("hNYb", -189, -190, -112, -197) ? void 0 : _0x4c75c9[n(-358, -299, "%59A", -400) + o(-257, "^V6%", -230)][o(-200, "n*N2", -161) + o(-125, "Mkpm", -97)];
    try {
      if (e("yv%8", -302, -248, -323, -271) !== r(767, "pY@#", 826, 810, 796)) {
        const s = JSON[o(-202, "s8M!", -208, -242, -283)](this[n(-520, -447, "od33", -535, -591) + "se"]);
        return (i = s == null ? void 0 : s[e("od33", -113, -141, -143, -183) + n(-332, -349, "BYD$", -413, -434)]) == null ? void 0 : i[t(-429, "WyGZ", -407, -500, -306) + e("G$u4", -200, -172, -160, -231)];
      } else _0x188022[n(-435, -326, "yyL[", -348, -247)](_0x3ede3c);
    } catch (s) {
      if (o(-254, "5j1F", -206) !== r(787, "I)9#", 697)) this[t(-557, "&KaF", -458, -418) + "se"] = void (-1 * 8579 + 3293 + 2 * 2643), _0x4cc2d6[e("^V6%", -284, -318, -185, -251)](_0x409661);
      else {
        if (s instanceof Error)
          if (e("BYD$", -299, -145, -305, -202) !== n(-376, -448, "YAVm", -346)) re[o(-201, "!P%!", -98) + t(-403, "Hab6", -320, -288)](s);
          else {
            const c = _0x3e3f60[o(-260, "Hab6", -177)](this[r(795, "5j1F", 825) + "se"]);
            return (a = c == null ? void 0 : c[n(-383, -515, "^V6%", -415) + r(940, "s8M!", 839)]) == null ? void 0 : a[n(-423, -521, "hNYb", -511) + o(-160, "!^4w", -114)];
          }
        return;
      }
    }
  }
}
const zx = class zx extends VI {
  static getInstance() {
    if (!this._instance) {
      const o = new PI();
      this._instance = new zx(o);
    }
    return this._instance;
  }
};
_(zx, "_instance");
let Br = zx;
const EI = ({ children: x }) => {
  const o = Lt(null);
  return El(o, St.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ Z(Iu, { ref: o, children: x });
}, LI = ({ cameraOptions: x }) => x ? /* @__PURE__ */ Z(au, { target: x.styleTarget, children: /* @__PURE__ */ Z(
  Hu,
  {
    licensePath: x.licensePath,
    bramble: Br.getInstance(),
    wasmDirectoryPath: x.wasmDirectoryPath,
    children: /* @__PURE__ */ Z(Ku, { analytics: SI, appKey: "5f83e83ee4cee1ab6e5bbf86e215644473299675", children: /* @__PURE__ */ Z(
      bu,
      {
        value: yI({
          onError: x.onError
        }),
        children: /* @__PURE__ */ Z(Js, { children: /* @__PURE__ */ Z(EI, { children: /* @__PURE__ */ Z(lI, { ...x }) }) })
      }
    ) })
  }
) }) : null;
pg(LI, "x-dot-face-auto-capture", ["cameraOptions"]);
