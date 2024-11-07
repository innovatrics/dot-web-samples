var Gg = Object.defineProperty;
var Mr = (x) => {
  throw TypeError(x);
};
var kg = (x, i, t) => i in x ? Gg(x, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[i] = t;
var E = (x, i, t) => kg(x, typeof i != "symbol" ? i + "" : i, t), _r = (x, i, t) => i.has(x) || Mr("Cannot " + t);
var L = (x, i, t) => (_r(x, i, "read from private field"), t ? t.call(x) : i.get(x)), ne = (x, i, t) => i.has(x) ? Mr("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(x) : i.set(x, t), $ = (x, i, t, e) => (_r(x, i, "write to private field"), e ? e.call(x, t) : i.set(x, t), t);
var En, Y, ls, Is, qt, Jr, fs, $i, Xo, eo, to, Cs, hn = {}, ps = [], Og = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, si = Array.isArray;
function Zt(x, i) {
  for (var t in i) x[t] = i[t];
  return x;
}
function hs(x) {
  var i = x.parentNode;
  i && i.removeChild(x);
}
function Ee(x, i, t) {
  var e, n, o, r = {};
  for (o in i) o == "key" ? e = i[o] : o == "ref" ? n = i[o] : r[o] = i[o];
  if (arguments.length > -4552 + 7 * -927 + 11043 && (r.children = arguments.length > 3 ? En.call(arguments, 3456 + 311 * 22 + -10296) : t), typeof x == "function" && x.defaultProps != null)
    for (o in x.defaultProps) void (-2 * -467 + -4720 + -1 * -3786) === r[o] && (r[o] = x.defaultProps[o]);
  return ln(x, r, e, n, null);
}
function ln(x, i, t, e, n) {
  var o = {};
  o.type = x, o.props = i, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__d = void (111 * -6 + 1775 * -1 + 2441), o.__c = null, o.constructor = void (-1277 * -5 + 3669 + 457 * -22), o.__v = n ?? ++ls, o.__i = -(-8493 * 1 + 3915 + -19 * -241), o.__u = 0;
  var r = o;
  return n == null && Y.vnode != null && Y.vnode(r), r;
}
function Zg() {
  var x = {};
  return x.current = null, x;
}
function it(x) {
  return x.children;
}
function nt(x, i) {
  this.props = x, this.context = i;
}
function c0(x, i) {
  if (i == null) return x.__ ? c0(x.__, x.__i + (-5 * 373 + 1 * -4934 + 6800)) : null;
  for (var t; i < x.__k.length; i++) if ((t = x.__k[i]) != null && t.__e != null) return t.__e;
  return typeof x.type == "function" ? c0(x) : null;
}
function ms(x) {
  var i, t;
  if ((x = x.__) != null && x.__c != null) {
    for (x.__e = x.__c.base = null, i = -4666 + -1 * 9186 + 1 * 13852; i < x.__k.length; i++) if ((t = x.__k[i]) != null && t.__e != null) {
      x.__e = x.__c.base = t.__e;
      break;
    }
    return ms(x);
  }
}
function no(x) {
  (!x.__d && (x.__d = !(-3 * 2695 + 2152 + 5933 * 1)) && qt.push(x) && !Ox.__r++ || Jr !== Y.debounceRendering) && ((Jr = Y.debounceRendering) || fs)(Ox);
}
function Ox() {
  var x, i, t, e, n, o, r, a;
  for (qt.sort($i); x = qt.shift(); ) x.__d && (i = qt.length, e = void (4 * 1021 + -7680 + -899 * -4), o = (n = (t = x).__v).__e, r = [], a = [], t.__P && ((e = Zt({}, n)).__v = n.__v + (7454 + 1 * 9218 + 3 * -5557), Y.vnode && Y.vnode(e), Mo(t.__P, e, n, t.__n, t.__P.namespaceURI, 32 & n.__u ? [o] : null, r, o ?? c0(n), !!(-1899 * -2 + -34 * -284 + 2237 * -6 & n.__u), a), e.__v = n.__v, e.__.__k[e.__i] = e, ys(r, e, a), e.__e != o && ms(e)), qt.length > i && qt.sort($i));
  Ox.__r = 1981 + 283 * -7;
}
function bs(x, i, t, e, n, o, r, a, s, c, d) {
  var g, C, u, p, b, A = e && e.__k || ps, l = i.length;
  for (t.__d = s, Hg(t, i, A), s = t.__d, g = 2 * -1285 + 4861 + 1 * -2291; g < l; g++) (u = t.__k[g]) != null && typeof u != "boolean" && typeof u != "function" && (C = u.__i === -1 ? hn : A[u.__i] || hn, u.__i = g, Mo(x, u, C, n, o, r, a, s, c, d), p = u.__e, u.ref && C.ref != u.ref && (C.ref && _o(C.ref, null, u), d.push(u.ref, u.__c || p, u)), b == null && p != null && (b = p), 74226 * 1 + -84138 + 9431 * 8 & u.__u || C.__k === u.__k ? (s && typeof u.type == "string" && !x.contains(s) && (s = c0(C)), s = As(u, s, x)) : typeof u.type == "function" && void (2722 * 2 + -7038 + 1 * 1594) !== u.__d ? s = u.__d : p && (s = p.nextSibling), u.__d = void 0, u.__u &= -(-156 * -1208 + 197164 + 189003 * -1));
  t.__d = s, t.__e = b;
}
function Hg(x, i, t) {
  var e, n, o, r, a, s = i.length, c = t.length, d = c, g = 217 * 7 + -7 * -267 + -3388;
  for (x.__k = [], e = 0; e < s; e++) r = e + g, (n = x.__k[e] = (n = i[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? ln(null, n, null, null, null) : si(n) ? ln(it, { children: n }, null, null, null) : n.constructor === void 0 && n.__b > -6298 + -67 * -94 ? ln(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = x, n.__b = x.__b + (-7249 * 1 + -3335 * -1 + 145 * 27), a = Rg(n, t, r, d), n.__i = a, o = null, a !== -1 && (d--, (o = t[a]) && (o.__u |= -232735 + -1 * 225537 + -24556 * -24)), o == null || o.__v === null ? (-(7091 * -1 + -8812 + -568 * -28) == a && g--, typeof n.type != "function" && (n.__u |= -1 * -23073 + 83963 + -41500)) : a !== r && (a == r - (-7867 * -1 + -3039 + -3 * 1609) ? g = a - r : a == r + (5623 * -1 + -2716 + 8340) ? g++ : a > r ? d > s - r ? g += a - r : g-- : a < r && g++, a !== e + g && (n.__u |= 34383 * -3 + 28385 + 140300))) : (o = t[r]) && o.key == null && o.__e && 25 * 167 + 1 * -3379 + -4 * 199 == (209997 + -36183 * 2 + -6559 & o.__u) && (o.__e == x.__d && (x.__d = c0(o)), xo(o, o, !(2 * -3468 + 1907 * -1 + 201 * 44)), t[r] = null, d--);
  if (d)
    for (e = 0; e < c; e++) (o = t[e]) != null && -530 + 106 * 5 == (-177771 + 119033 * 1 + 855 * 222 & o.__u) && (o.__e == x.__d && (x.__d = c0(o)), xo(o, o));
}
function As(x, i, t) {
  var e, n;
  if (typeof x.type == "function") {
    for (e = x.__k, n = -8 * -643 + -1606 + 61 * -58; e && n < e.length; n++) e[n] && (e[n].__ = x, i = As(e[n], i, t));
    return i;
  }
  x.__e != i && (t.insertBefore(x.__e, i || null), i = x.__e);
  do
    i = i && i.nextSibling;
  while (i != null && 9516 + -2 * 4754 === i.nodeType);
  return i;
}
function Rt(x, i) {
  return i = i || [], x == null || typeof x == "boolean" || (si(x) ? x.some(function(t) {
    Rt(t, i);
  }) : i.push(x)), i;
}
function Rg(x, i, t, e) {
  var n = x.key, o = x.type, r = t - (931 + 6891 * 1 + -9 * 869), a = t + (-257 * -27 + 4040 + 998 * -11), s = i[t];
  if (s === null || s && n == s.key && o === s.type && -5926 + 2963 * 2 == (149009 + 10340 * 1 + 28277 * -1 & s.__u)) return t;
  if (e > (s != null && 58 * 52 + 22 * 121 + -5678 == (197856 + -8 * 8348 & s.__u) ? -3 * 229 + 2 * 2894 + 30 * -170 : -8366 * 1 + 3 * -275 + -1 * -9191)) for (; r >= 7477 * 1 + -1371 + -6106 || a < i.length; ) {
    if (r >= -8 * -438 + 2 * -3031 + 2558) {
      if ((s = i[r]) && 3261 * 2 + 9870 + -16392 == (-72332 + -482 * -422 & s.__u) && n == s.key && o === s.type) return r;
      r--;
    }
    if (a < i.length) {
      if ((s = i[a]) && 3 * -1113 + 759 * 6 + -1215 == (1721 * 117 + 3 * 69205 + -39700 * 7 & s.__u) && n == s.key && o === s.type) return a;
      a++;
    }
  }
  return -(239 * 17 + -4 * -781 + -7186);
}
function Ur(x, i, t) {
  i[0] === "-" ? x.setProperty(i, t ?? "") : x[i] = t == null ? "" : typeof t != "number" || Og.test(i) ? t : t + "px";
}
function nx(x, i, t, e, n) {
  var o;
  e: if (i === "style")
    if (typeof t == "string") x.style.cssText = t;
    else {
      if (typeof e == "string" && (x.style.cssText = e = ""), e)
        for (i in e) t && i in t || Ur(x.style, i, "");
      if (t)
        for (i in t) e && t[i] === e[i] || Ur(x.style, i, t[i]);
    }
  else if (i[-3187 * 3 + -7726 + 1 * 17287] === "o" && i[4581 + 52 * -43 + -586 * 4] === "n") o = i !== (i = i.replace(/(PointerCapture)$|Capture$/i, "$1")), i = i.toLowerCase() in x || i === "onFocusOut" || i === "onFocusIn" ? i.toLowerCase().slice(2436 + 11 * -695 + 5211) : i.slice(2), x.l || (x.l = {}), x.l[i + o] = t, t ? e ? t.u = e.u : (t.u = Xo, x.addEventListener(i, o ? to : eo, o)) : x.removeEventListener(i, o ? to : eo, o);
  else {
    if (n == "http://www.w3.org/2000/svg") i = i.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (i != "width" && i != "height" && i != "href" && i != "list" && i != "form" && i != "tabIndex" && i != "download" && i != "rowSpan" && i != "colSpan" && i != "role" && i != "popover" && i in x) try {
      x[i] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && i[-810 + 814 * 1] !== "-" ? x.removeAttribute(i) : x.setAttribute(i, i == "popover" && -6120 + 122 * 80 + -3639 == t ? "" : t));
  }
}
function Qr(x) {
  return function(i) {
    if (this.l) {
      var t = this.l[i.type + x];
      if (i.t == null) i.t = Xo++;
      else if (i.t < t.u) return;
      return t(Y.event ? Y.event(i) : i);
    }
  };
}
function Mo(x, i, t, e, n, o, r, a, s, c) {
  var d, g, C, u, p, b, A, l, W, K, X, M, J, H, re, U, te = i.type;
  if (void (9159 + 4805 * 1 + 13964 * -1) !== i.constructor) return null;
  1221 * 3 + 14 * 646 + -12579 & t.__u && (s = !!(-1 * -8101 + -229 + 1568 * -5 & t.__u), o = [a = i.__e = t.__e]), (d = Y.__b) && d(i);
  e: if (typeof te == "function") try {
    if (l = i.props, W = "prototype" in te && te.prototype.render, K = (d = te.contextType) && e[d.__c], X = d ? K ? K.props.value : d.__ : e, t.__c ? A = (g = i.__c = t.__c).__ = g.__E : (W ? i.__c = g = new te(l, X) : (i.__c = g = new nt(l, X), g.constructor = te, g.render = Pg), K && K.sub(g), g.props = l, g.state || (g.state = {}), g.context = X, g.__n = e, C = g.__d = !0, g.__h = [], g._sb = []), W && g.__s == null && (g.__s = g.state), W && te.getDerivedStateFromProps != null && (g.__s == g.state && (g.__s = Zt({}, g.__s)), Zt(g.__s, te.getDerivedStateFromProps(l, g.__s))), u = g.props, p = g.state, g.__v = i, C) W && te.getDerivedStateFromProps == null && g.componentWillMount != null && g.componentWillMount(), W && g.componentDidMount != null && g.__h.push(g.componentDidMount);
    else {
      if (W && te.getDerivedStateFromProps == null && l !== u && g.componentWillReceiveProps != null && g.componentWillReceiveProps(l, X), !g.__e && (g.shouldComponentUpdate != null && !(16329 + 8164 * -2) === g.shouldComponentUpdate(l, g.__s, X) || i.__v === t.__v)) {
        for (i.__v !== t.__v && (g.props = l, g.state = g.__s, g.__d = !(-1473 + 9 * 293 + 1 * -1163)), i.__e = t.__e, i.__k = t.__k, i.__k.forEach(function(Le) {
          Le && (Le.__ = i);
        }), M = -47 * 122 + -19 * 179 + -9 * -1015; M < g._sb.length; M++) g.__h.push(g._sb[M]);
        g._sb = [], g.__h.length && r.push(g);
        break e;
      }
      g.componentWillUpdate != null && g.componentWillUpdate(l, g.__s, X), W && g.componentDidUpdate != null && g.__h.push(function() {
        g.componentDidUpdate(u, p, b);
      });
    }
    if (g.context = X, g.props = l, g.__P = x, g.__e = !(1 * 8077 + -1396 * 5 + 274 * -4), J = Y.__r, H = 1775 + -5 * 566 + 1055, W) {
      for (g.state = g.__s, g.__d = !(1 * -9749 + -546 * 17 + 19032), J && J(i), d = g.render(g.props, g.state, g.context), re = -7329 + 1 * 7329; re < g._sb.length; re++) g.__h.push(g._sb[re]);
      g._sb = [];
    } else do
      g.__d = !(8527 + 4 * -10 + 8486 * -1), J && J(i), d = g.render(g.props, g.state, g.context), g.state = g.__s;
    while (g.__d && ++H < 7468 + 355 * -11 + 3538 * -1);
    g.state = g.__s, g.getChildContext != null && (e = Zt(Zt({}, e), g.getChildContext())), W && !C && g.getSnapshotBeforeUpdate != null && (b = g.getSnapshotBeforeUpdate(u, p)), bs(x, si(U = d != null && d.type === it && d.key == null ? d.props.children : d) ? U : [U], i, t, e, n, o, r, a, s, c), g.base = i.__e, i.__u &= -(-2 * 4967 + 4761 + -7 * -762), g.__h.length && r.push(g), A && (g.__E = g.__ = null);
  } catch (Le) {
    i.__v = null, s || o != null ? (i.__e = a, i.__u |= s ? 8341 * 1 + -2766 * 2 + -883 * 3 : -9919 + 2965 * -1 + -3229 * -4, o[o.indexOf(a)] = null) : (i.__e = t.__e, i.__k = t.__k), Y.__e(Le, i, t);
  }
  else o == null && i.__v === t.__v ? (i.__k = t.__k, i.__e = t.__e) : i.__e = Kg(t.__e, i, t, e, n, o, r, s, c);
  (d = Y.diffed) && d(i);
}
function ys(x, i, t) {
  i.__d = void (-1916 + -2 * -958);
  for (var e = 0; e < t.length; e++) _o(t[e], t[++e], t[++e]);
  Y.__c && Y.__c(i, x), x.some(function(n) {
    try {
      x = n.__h, n.__h = [], x.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      Y.__e(o, n.__v);
    }
  });
}
function Kg(x, i, t, e, n, o, r, a, s) {
  var c, d, g, C, u, p, b, A = t.props, l = i.props, W = i.type;
  if (W === "svg" ? n = "http://www.w3.org/2000/svg" : W === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), o != null) {
    for (c = -8036 * 1 + -4754 + 1279 * 10; c < o.length; c++) if ((u = o[c]) && "setAttribute" in u == !!W && (W ? u.localName === W : -1 * -2005 + -179 * 43 + -67 * -85 === u.nodeType)) {
      x = u, o[c] = null;
      break;
    }
  }
  if (x == null) {
    if (W === null) return document.createTextNode(l);
    x = document.createElementNS(n, W, l.is && l), o = null, a = !(385 * -22 + -83 * 4 + 8803);
  }
  if (W === null) A === l || a && x.data === l || (x.data = l);
  else {
    if (o = o && En.call(x.childNodes), A = t.props || hn, !a && o != null)
      for (A = {}, c = 243 * 22 + 8583 + -3 * 4643; c < x.attributes.length; c++) A[(u = x.attributes[c]).name] = u.value;
    for (c in A) if (u = A[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") g = u;
      else if (c !== "key" && !(c in l)) {
        if (c == "value" && "defaultValue" in l || c == "checked" && "defaultChecked" in l) continue;
        nx(x, c, null, u, n);
      }
    }
    for (c in l) u = l[c], c == "children" ? C = u : c == "dangerouslySetInnerHTML" ? d = u : c == "value" ? p = u : c == "checked" ? b = u : c === "key" || a && typeof u != "function" || A[c] === u || nx(x, c, u, A[c], n);
    if (d) a || g && (d.__html === g.__html || d.__html === x.innerHTML) || (x.innerHTML = d.__html), i.__k = [];
    else if (g && (x.innerHTML = ""), bs(x, si(C) ? C : [C], i, t, e, W === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, o, r, o ? o[-1052 * 7 + 5185 + -2179 * -1] : t.__k && c0(t, 7247 * -1 + 8210 + -963), a, s), o != null)
      for (c = o.length; c--; ) o[c] != null && hs(o[c]);
    a || (c = "value", void (-8060 + -45 * 27 + 9275) !== p && (p !== x[c] || W === "progress" && !p || W === "option" && p !== A[c]) && nx(x, c, p, A[c], n), c = "checked", void (6555 + -6555 * 1) !== b && b !== x[c] && nx(x, c, b, A[c], n));
  }
  return x;
}
function _o(x, i, t) {
  try {
    typeof x == "function" ? x(i) : x.current = i;
  } catch (e) {
    Y.__e(e, t);
  }
}
function xo(x, i, t) {
  var e, n;
  if (Y.unmount && Y.unmount(x), (e = x.ref) && (e.current && e.current !== x.__e || _o(e, null, i)), (e = x.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      Y.__e(o, i);
    }
    e.base = e.__P = null;
  }
  if (e = x.__k)
    for (n = -7850 + -3937 * 1 + 3929 * 3; n < e.length; n++) e[n] && xo(e[n], i, t || typeof x.type != "function");
  t || x.__e == null || hs(x.__e), x.__c = x.__ = x.__e = x.__d = void (1 * 1309 + 11 * 313 + 54 * -88);
}
function Pg(x, i, t) {
  return this.constructor(x, t);
}
function Ft(x, i, t) {
  var e, n, o, r;
  Y.__ && Y.__(x, i), n = (e = typeof t == "function") ? null : t && t.__k || i.__k, o = [], r = [], Mo(i, x = (!e && t || i).__k = Ee(it, null, [x]), n || hn, hn, i.namespaceURI, !e && t ? [t] : n ? null : i.firstChild ? En.call(i.childNodes) : null, o, !e && t ? t : n ? n.__e : i.firstChild, e, r), ys(o, x, r);
}
function Jo(x, i) {
  Ft(x, i, Jo);
}
function Uo(x, i, t) {
  var e, n, o, r, a = Zt({}, x.props);
  for (o in x.type && x.type.defaultProps && (r = x.type.defaultProps), i) o == "key" ? e = i[o] : o == "ref" ? n = i[o] : a[o] = void (4 * -1499 + -4188 + 2 * 5092) === i[o] && void (643 * 3 + 6237 + 1 * -8166) !== r ? r[o] : i[o];
  return arguments.length > -5294 + -593 * 14 + -13 * -1046 && (a.children = arguments.length > -9083 + 155 * 13 + 7071 * 1 ? En.call(arguments, -1 * -3734 + -1316 * 3 + 216) : t), ln(x.type, a, e || x.key, n || x.ref, null);
}
function Ln(x, i) {
  var t = { __c: i = "__cC" + Cs++, __: x, Consumer: function(e, n) {
    return e.children(n);
  }, Provider: function(e) {
    var n, o;
    return this.getChildContext || (n = [], (o = {})[i] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value !== r.value && n.some(function(a) {
        a.__e = !0, no(a);
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
En = ps.slice, Y = { __e: function(x, i, t, e) {
  for (var n, o, r; i = i.__; ) if ((n = i.__c) && !n.__) try {
    if ((o = n.constructor) && o.getDerivedStateFromError != null && (n.setState(o.getDerivedStateFromError(x)), r = n.__d), n.componentDidCatch != null && (n.componentDidCatch(x, e || {}), r = n.__d), r) return n.__E = n;
  } catch (a) {
    x = a;
  }
  throw x;
} }, ls = 8198 + -185 * -23 + -12453, Is = function(x) {
  return x != null && x.constructor == null;
}, nt.prototype.setState = function(x, i) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Zt({}, this.state), typeof x == "function" && (x = x(Zt({}, t), this.props)), x && Zt(t, x), x != null && this.__v && (i && this._sb.push(i), no(this));
}, nt.prototype.forceUpdate = function(x) {
  this.__v && (this.__e = !(-1667 * -4 + -9558 + -5 * -578), x && this.__h.push(x), no(this));
}, nt.prototype.render = it, qt = [], fs = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $i = function(x, i) {
  return x.__v.__b - i.__v.__b;
}, Ox.__r = 0, Xo = 4154 + 227 * -25 + -3 * -507, eo = Qr(!(629 * -11 + 229 * -2 + 7378)), to = Qr(!(2164 + 1082 * -2)), Cs = -107 * 5 + -9245 + 6 * 1630;
function Qo() {
  return (Qo = Object.assign ? Object.assign.bind() : function(x) {
    for (var i = 1 * -6401 + 231 * 43 + -3531; i < arguments.length; i++) {
      var t = arguments[i];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (x[e] = t[e]);
    }
    return x;
  }).apply(this, arguments);
}
var Tg = ["context", "children"];
function Vg(x) {
  this.getChildContext = function() {
    return x.context;
  };
  var i = x.children, t = function(e, n) {
    if (e == null) return {};
    var o, r, a = {}, s = Object.keys(e);
    for (r = 557 * 9 + 8881 * 1 + -13894; r < s.length; r++) n.indexOf(o = s[r]) >= 2290 + -174 * -53 + -11512 || (a[o] = e[o]);
    return a;
  }(x, Tg);
  return Uo(i, t);
}
function Eg() {
  var x = {};
  x.detail = {}, x.bubbles = !(3257 + -1 * 3257), x.cancelable = !(1 * 7793 + 9632 + -85 * 205);
  var i = new CustomEvent("_preact", x);
  this.dispatchEvent(i), this._vdom = Ee(Vg, Qo({}, this._props, { context: i.detail.context }), function t(e, n) {
    if (1 * 3065 + -8425 + -31 * -173 === e.nodeType) return e.data;
    if (7957 + -11 * -156 + -744 * 13 !== e.nodeType) return null;
    var o = [], r = {}, a = 109 + -1 * -3272 + -3381, s = e.attributes, c = e.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (r[s[a].name] = s[a].value, r[vs(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var d = t(c[a], null), g = c[a].slot;
      g ? r[g] = Ee(zr, { name: g }, d) : o[a] = d;
    }
    var C = n ? Ee(zr, null, o) : o;
    return Ee(n || e.nodeName.toLowerCase(), r, C);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Jo : Ft)(this._vdom, this._root);
}
function vs(x) {
  return x.replace(/-(\w)/g, function(i, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Lg(x, i, t) {
  if (this._vdom) {
    var e = {};
    e[x] = t = t ?? void (1370 + -417 * 14 + -4 * -1117), e[vs(x)] = t, this._vdom = Uo(this._vdom, e), Ft(this._vdom, this._root);
  }
}
function Dg() {
  Ft(this._vdom = null, this._root);
}
function zr(x, i) {
  var t = this;
  return Ee("slot", Qo({}, x, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = i;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Ng(x, i, t, e) {
  function n() {
    var o = Reflect.construct(HTMLElement, [], n);
    return o._vdomComponent = x, o._root = o, o;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = Eg, n.prototype.attributeChangedCallback = Lg, n.prototype.disconnectedCallback = Dg, t = t || x.observedAttributes || Object.keys(x.propTypes || {}), n.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(n.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r, this.connectedCallback());
      var a = typeof r;
      r != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(i, n);
}
var Yg = 129 * 67 + 4363 * -1 + -4280;
function O(x, i, t, e, n, o) {
  i || (i = {});
  var r, a, s = i;
  if ("ref" in s)
    for (a in s = {}, i) a == "ref" ? r = i[a] : s[a] = i[a];
  var c = {};
  c.type = x, c.props = s, c.key = t, c.ref = r, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__d = void (3291 * -1 + 9433 * 1 + 1 * -6142), c.__c = null, c.constructor = void (3559 * -1 + -251 * 35 + -1543 * -8), c.__v = --Yg, c.__i = -(-3 * -2803 + -1 * -3988 + 6198 * -2), c.__u = 0, c.__source = n, c.__self = o;
  var d = c;
  if (typeof x == "function" && (r = x.defaultProps))
    for (a in r) void (8410 + -47 * -137 + -1 * 14849) === s[a] && (s[a] = r[a]);
  return Y.vnode && Y.vnode(d), d;
}
var je = function() {
  return je = Object.assign || function(i) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (i[o] = t[o]);
    }
    return i;
  }, je.apply(this, arguments);
};
function T0(x, i, t) {
  if (t || arguments.length === 2) for (var e = 0, n = i.length, o; e < n; e++)
    (o || !(e in i)) && (o || (o = Array.prototype.slice.call(i, 0, e)), o[e] = i[e]);
  return x.concat(o || Array.prototype.slice.call(i));
}
function Fg(x) {
  var i = Object.create(null);
  return function(t) {
    return i[t] === void 0 && (i[t] = x(t)), i[t];
  };
}
var jg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Xg = Fg(function(x) {
  return jg.test(x) || x.charCodeAt(7273 + 1 * 6311 + 24 * -566) === -6075 + -4623 * 1 + -3603 * -3 && x.charCodeAt(-3924 + 1 * 3925) === 3591 + 1 * 5231 + 968 * -9 && x.charCodeAt(9045 + 841 * 9 + -16612 * 1) < -1 * 8444 + 2070 + 6465;
}), jt, se, Ki, qr, V0 = -1 * -6644 + -4598 + -2046, Ws = [], ce = Y, $r = ce.__b, ea = ce.__r, ta = ce.diffed, na = ce.__c, xa = ce.unmount, ia = ce.__;
function j0(x, i) {
  ce.__h && ce.__h(se, x, V0 || i), V0 = 954 + 1 * -1730 + 1 * 776;
  var t = {};
  t.__ = [], t.__h = [];
  var e = se.__H || (se.__H = t);
  return x >= e.__.length && e.__.push({}), e.__[x];
}
function Ue(x) {
  return V0 = -1 * -7894 + -49 * 37 + -6080, zo(Bs, x);
}
function zo(x, i, t) {
  var e = j0(jt++, 2);
  if (e.t = x, !e.__c && (e.__ = [t ? t(i) : Bs(void (1 * 439 + -727 * -1 + 11 * -106), i), function(a) {
    var s = e.__N ? e.__N[0] : e.__[0], c = e.t(s, a);
    s !== c && (e.__N = [c, e.__[-44 * 155 + -4517 * 2 + -7 * -2265]], e.__c.setState({}));
  }], e.__c = se, !se.u)) {
    var n = function(a, s, c) {
      if (!e.__c.__H) return !0;
      var d = e.__c.__H.__.filter(function(C) {
        return !!C.__c;
      });
      if (d.every(function(C) {
        return !C.__N;
      })) return !o || o.call(this, a, s, c);
      var g = !(-2641 + 2 * 1321);
      return d.forEach(function(C) {
        if (C.__N) {
          var u = C.__[0];
          C.__ = C.__N, C.__N = void 0, u !== C.__[0] && (g = !0);
        }
      }), !(!g && e.__c.props === a) && (!o || o.call(this, a, s, c));
    };
    se.u = !(-1319 + 1 * 1319);
    var o = se.shouldComponentUpdate, r = se.componentWillUpdate;
    se.componentWillUpdate = function(a, s, c) {
      if (this.__e) {
        var d = o;
        o = void (-6186 * 1 + -9217 * -1 + -3031), n(a, s, c), o = d;
      }
      r && r.call(this, a, s, c);
    }, se.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function Ie(x, i) {
  var t = j0(jt++, 3);
  !ce.__s && qo(t.__H, i) && (t.__ = x, t.i = i, se.__H.__h.push(t));
}
function X0(x, i) {
  var t = j0(jt++, 4);
  !ce.__s && qo(t.__H, i) && (t.__ = x, t.i = i, se.__h.push(t));
}
function yt(x) {
  return V0 = 571 * -3 + -1955 + 3673, Qe(function() {
    var i = {};
    return i.current = x, i;
  }, []);
}
function Ss(x, i, t) {
  V0 = -3822 + -47 * 88 + 1 * 7964, X0(function() {
    return typeof x == "function" ? (x(i()), function() {
      return x(null);
    }) : x ? (x.current = i(), function() {
      return x.current = null;
    }) : void (-5323 + 419 * -1 + 99 * 58);
  }, t == null ? t : t.concat(x));
}
function Qe(x, i) {
  var t = j0(jt++, 7);
  return qo(t.__H, i) && (t.__ = x(), t.__H = i, t.__h = x), t.__;
}
function Kt(x, i) {
  return V0 = -967 * 6 + -8123 * -1 + -2313, Qe(function() {
    return x;
  }, i);
}
function l0(x) {
  var i = se.context[x.__c], t = j0(jt++, 426 * -8 + -6791 + 10208);
  return t.c = x, i ? (t.__ == null && (t.__ = !0, i.sub(se)), i.props.value) : x.__;
}
function Zx(x, i) {
  ce.useDebugValue && ce.useDebugValue(i ? i(x) : x);
}
function ws() {
  var x = j0(jt++, 11);
  if (!x.__) {
    for (var i = se.__v; i !== null && !i.__m && i.__ !== null; ) i = i.__;
    var t = i.__m || (i.__m = [-2475 + -33 * -75, -5 * -508 + 3 * 1966 + 1 * -8438]);
    x.__ = "P" + t[-3632 + 284 * 5 + -1106 * -2] + "-" + t[-8644 + 316 * -28 + 7 * 2499]++;
  }
  return x.__;
}
function Mg() {
  for (var x; x = Ws.shift(); ) if (x.__P && x.__H) try {
    x.__H.__h.forEach(fx), x.__H.__h.forEach(io), x.__H.__h = [];
  } catch (i) {
    x.__H.__h = [], ce.__e(i, x.__v);
  }
}
ce.__b = function(x) {
  se = null, $r && $r(x);
}, ce.__ = function(x, i) {
  x && i.__k && i.__k.__m && (x.__m = i.__k.__m), ia && ia(x, i);
}, ce.__r = function(x) {
  ea && ea(x), jt = 0;
  var i = (se = x.__c).__H;
  i && (Ki === se ? (i.__h = [], se.__h = [], i.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (8154 + -167 * -23 + -5 * 2399);
  })) : (i.__h.forEach(fx), i.__h.forEach(io), i.__h = [], jt = -9558 + -1 * 5263 + 1 * 14821)), Ki = se;
}, ce.diffed = function(x) {
  ta && ta(x);
  var i = x.__c;
  i && i.__H && (i.__H.__h.length && (1 * -936 + 8476 + -7539 * 1 !== Ws.push(i) && qr === ce.requestAnimationFrame || ((qr = ce.requestAnimationFrame) || _g)(Mg)), i.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (3866 * 1 + -1434 + -608 * 4);
  })), Ki = se = null;
}, ce.__c = function(x, i) {
  i.some(function(t) {
    try {
      t.__h.forEach(fx), t.__h = t.__h.filter(function(e) {
        return !e.__ || io(e);
      });
    } catch (e) {
      i.some(function(n) {
        n.__h && (n.__h = []);
      }), i = [], ce.__e(e, t.__v);
    }
  }), na && na(x, i);
}, ce.unmount = function(x) {
  xa && xa(x);
  var i, t = x.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      fx(e);
    } catch (n) {
      i = n;
    }
  }), t.__H = void (1165 + 7396 * -1 + 1 * 6231), i && ce.__e(i, t.__v));
};
var oa = typeof requestAnimationFrame == "function";
function _g(x) {
  var i, t = function() {
    clearTimeout(e), oa && cancelAnimationFrame(i), setTimeout(x);
  }, e = setTimeout(t, 100);
  oa && (i = requestAnimationFrame(t));
}
function fx(x) {
  var i = se, t = x.__c;
  typeof t == "function" && (x.__c = void (73 * -101 + -4047 + 11420), t()), se = i;
}
function io(x) {
  var i = se;
  x.__c = x.__(), se = i;
}
function qo(x, i) {
  return !x || x.length !== i.length || i.some(function(t, e) {
    return t !== x[e];
  });
}
function Bs(x, i) {
  return typeof i == "function" ? i(x) : i;
}
function Gs(x, i) {
  for (var t in i) x[t] = i[t];
  return x;
}
function oo(x, i) {
  for (var t in x) if (t !== "__source" && !(t in i)) return !(-6760 + -19 * -437 + 1543 * -1);
  for (var e in i) if (e !== "__source" && x[e] !== i[e]) return !(-415 + 642 * -7 + -1 * -4909);
  return !(930 * 10 + 4125 * -1 + -398 * 13);
}
function ro(x, i) {
  this.props = x, this.context = i;
}
function Jg(x, i) {
  function t(n) {
    var o = this.props.ref, r = o == n.ref;
    return !r && o && (o.call ? o(null) : o.current = null), i ? !i(this.props, n) || !r : oo(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, Ee(x, n);
  }
  return e.displayName = "Memo(" + (x.displayName || x.name) + ")", e.prototype.isReactComponent = !(-5247 + -1749 * -3), e.__f = !(9407 + 2129 * -4 + 99 * -9), e;
}
(ro.prototype = new nt()).isPureReactComponent = !(-5059 * 1 + 3250 + -27 * -67), ro.prototype.shouldComponentUpdate = function(x, i) {
  return oo(this.props, x) || oo(this.state, i);
};
var ra = Y.__b;
Y.__b = function(x) {
  x.type && x.type.__f && x.ref && (x.props.ref = x.ref, x.ref = null), ra && ra(x);
};
var Ug = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 4057 + 1813 * -2 + -174 * -20;
function ks(x) {
  function i(t) {
    var e = Gs({}, t);
    return delete e.ref, x(e, t.ref || null);
  }
  return i.$$typeof = Ug, i.render = i, i.prototype.isReactComponent = i.__f = !0, i.displayName = "ForwardRef(" + (x.displayName || x.name) + ")", i;
}
var aa = function(x, i) {
  return x == null ? null : Rt(Rt(x).map(i));
}, Qg = { map: aa, forEach: aa, count: function(x) {
  return x ? Rt(x).length : 0;
}, only: function(x) {
  var i = Rt(x);
  if (2 * 2726 + 5936 + -11387 !== i.length) throw "Children.only";
  return i[3259 * 1 + -1415 * -3 + -7504];
}, toArray: Rt }, zg = Y.__e;
Y.__e = function(x, i, t, e) {
  if (x.then) {
    for (var n, o = i; o = o.__; ) if ((n = o.__c) && n.__c) return i.__e == null && (i.__e = t.__e, i.__k = t.__k), n.__c(x, i);
  }
  zg(x, i, t, e);
};
var sa = Y.unmount;
function Os(x, i, t) {
  return x && (x.__c && x.__c.__H && (x.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), x.__c.__H = null), (x = Gs({}, x)).__c != null && (x.__c.__P === t && (x.__c.__P = i), x.__c = null), x.__k = x.__k && x.__k.map(function(e) {
    return Os(e, i, t);
  })), x;
}
function Zs(x, i, t) {
  return x && t && (x.__v = null, x.__k = x.__k && x.__k.map(function(e) {
    return Zs(e, i, t);
  }), x.__c && x.__c.__P === i && (x.__e && t.appendChild(x.__e), x.__c.__e = !(1 * 6194 + 4612 + -10806), x.__c.__P = t)), x;
}
function Cx() {
  this.__u = 8330 + -963 * 6 + 88 * -29, this.t = null, this.__b = null;
}
function Hs(x) {
  var i = x.__.__c;
  return i && i.__a && i.__a(x);
}
function qg(x) {
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
  return n.displayName = "Lazy", n.__f = !(-5631 + -2165 * 3 + 12126), n;
}
function rn() {
  this.u = null, this.o = null;
}
Y.unmount = function(x) {
  var i = x.__c;
  i && i.__R && i.__R(), i && 9983 * -1 + 1 * -8361 + 18376 & x.__u && (x.type = null), sa && sa(x);
}, (Cx.prototype = new nt()).__c = function(x, i) {
  var t = i.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = Hs(e.__v), o = !(6039 * 1 + 1888 + 2 * -3963), r = function() {
    o || (o = !(-1 * 4892 + 1 * 3896 + 3 * 332), t.__R = null, n ? n(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var s = e.state.__a;
        e.__v.__k[8539 * 1 + 408 + -8947 * 1] = Zs(s, s.__c.__P, s.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.t.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || -7e3 + 881 * -5 + 11437 * 1 & i.__u || e.setState({ __a: e.__b = e.__v.__k[-6595 + -1319 * -5] }), x.then(r, r);
}, Cx.prototype.componentWillUnmount = function() {
  this.t = [];
}, Cx.prototype.render = function(x, i) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[3073 + 255 * -11 + -268 * 1].__c;
      this.__v.__k[3398 * 2 + -8984 + 2188] = Os(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = i.__a && Ee(it, null, x.fallback);
  return n && (n.__u &= -(27 * 37 + 5580 + -3 * 2182)), [Ee(it, null, i.__a ? null : x.children), n];
};
var ca = function(x, i, t) {
  if (++t[2057 + -13 * -79 + 3083 * -1] === t[2726 + 6891 * 1 + -9617] && x.o.delete(i), x.props.revealOrder && (x.props.revealOrder[329 * 3 + 6690 + -7677] !== "t" || !x.o.size)) for (t = x.u; t; ) {
    for (; t.length > 15508 + -5 * 3101; ) t.pop()();
    if (t[3 * 142 + -8304 + 1 * 7879] < t[-6894 + -1 * 307 + 7201]) break;
    x.u = t = t[5 * -1941 + -1 * -2986 + 6721];
  }
};
function $g(x) {
  return this.getChildContext = function() {
    return x.context;
  }, x.children;
}
function ed(x) {
  var i = this, t = x.i;
  i.componentWillUnmount = function() {
    Ft(null, i.l), i.l = null, i.i = null;
  }, i.i && i.i !== t && i.componentWillUnmount(), i.l || (i.i = t, i.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(-1731 * 2 + 1 * 8002 + -4540);
  }, appendChild: function(e) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> -1451 + 3597 * 2 + -9 * 638, -1 * 1775 + 3409 * -1 + 5185), i.i.removeChild(e);
  } }), Ft(Ee($g, { context: i.context }, x.__v), i.l);
}
function td(x, i) {
  var t = {};
  t.__v = x, t.i = i;
  var e = Ee(ed, t);
  return e.containerInfo = i, e;
}
(rn.prototype = new nt()).__a = function(x) {
  var i = this, t = Hs(i.__v), e = i.o.get(x);
  return e[-7798 * -1 + -403 * 9 + -4171]++, function(n) {
    var o = function() {
      i.props.revealOrder ? (e.push(n), ca(i, x, e)) : n();
    };
    t ? t(o) : o();
  };
}, rn.prototype.render = function(x) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var i = Rt(x.children);
  x.revealOrder && x.revealOrder[142 * 59 + 7661 + -16039] === "b" && i.reverse();
  for (var t = i.length; t--; ) this.o.set(i[t], this.u = [-3262 * 2 + 7717 + 4 * -298, -5641 + 3489 * 2 + -1337 * 1, this.u]);
  return x.children;
}, rn.prototype.componentDidUpdate = rn.prototype.componentDidMount = function() {
  var x = this;
  this.o.forEach(function(i, t) {
    ca(x, t, i);
  });
};
var Rs = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 93816 + 4437 * 7 + -64772, nd = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, xd = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, id = /[A-Z0-9]/g, od = typeof document < "u", rd = function(x) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(x);
};
function ad(x, i, t) {
  return i.__k == null && (i.textContent = ""), Ft(x, i), typeof t == "function" && t(), x ? x.__c : null;
}
function sd(x, i, t) {
  return Jo(x, i), typeof t == "function" && t(), x ? x.__c : null;
}
nt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(x) {
  Object.defineProperty(nt.prototype, x, { configurable: !(-2663 + -29 * -297 + -5950), get: function() {
    return this["UNSAFE_" + x];
  }, set: function(i) {
    var t = {};
    t.configurable = !(-6308 + -332 * -19), t.writable = !(28 * 58 + 8356 + -5 * 1996), t.value = i, Object.defineProperty(this, x, t);
  } });
});
var ga = Y.event;
function cd() {
}
function gd() {
  return this.cancelBubble;
}
function dd() {
  return this.defaultPrevented;
}
Y.event = function(x) {
  return ga && (x = ga(x)), x.persist = cd, x.isPropagationStopped = gd, x.isDefaultPrevented = dd, x.nativeEvent = x;
};
var px = {};
px.enumerable = !(-4 * -1947 + 2229 * -3 + -1100), px.configurable = !(264 + 22 * -12), px.get = function() {
  return this.class;
};
var $o, ud = px, da = Y.vnode;
Y.vnode = function(x) {
  typeof x.type == "string" && function(i) {
    var t = i.props, e = i.type, n = {};
    for (var o in t) {
      var r = t[o];
      if (!(o === "value" && "defaultValue" in t && r == null || od && o === "children" && e === "noscript" || o === "class" || o === "className")) {
        var a = o.toLowerCase();
        o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && !(9379 + 113 * -83) === r ? r = "" : a === "translate" && r === "no" ? r = !(-21 * 435 + -8738 + 17874) : a === "ondoubleclick" ? o = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || rd(t.type) ? a === "onfocus" ? o = "onfocusin" : a === "onblur" ? o = "onfocusout" : xd.test(o) ? o = a : -(-8922 + 17 * -527 + 17882) === e.indexOf("-") && nd.test(o) ? o = o.replace(id, "-$&").toLowerCase() : r === null && (r = void (1 * 3499 + 1094 + -4593)) : a = o = "oninput", a === "oninput" && n[o = a] && (o = "oninputCapture"), n[o] = r;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Rt(t.children).forEach(function(s) {
      s.props.selected = -(118 + 1 * -117) != n.value.indexOf(s.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = Rt(t.children).forEach(function(s) {
      s.props.selected = n.multiple ? -(-4513 * -1 + -6542 + 2030) != n.defaultValue.indexOf(s.props.value) : n.defaultValue == s.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", ud)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), i.props = n;
  }(x), x.$$typeof = Rs, da && da(x);
};
var ua = Y.__r;
Y.__r = function(x) {
  ua && ua(x), $o = x.__c;
};
var la = Y.diffed;
Y.diffed = function(x) {
  la && la(x);
  var i = x.props, t = x.__e;
  t != null && x.type === "textarea" && "value" in i && i.value !== t.value && (t.value = i.value == null ? "" : i.value), $o = null;
};
var Se = {};
Se.readContext = function(x) {
  return $o.__n[x.__c].props.value;
}, Se.useCallback = Kt, Se.useContext = l0, Se.useDebugValue = Zx, Se.useDeferredValue = Vs, Se.useEffect = Ie, Se.useId = ws, Se.useImperativeHandle = Ss, Se.useInsertionEffect = Ls, Se.useLayoutEffect = X0, Se.useMemo = Qe, Se.useReducer = zo, Se.useRef = yt, Se.useState = Ue, Se.useSyncExternalStore = Ds, Se.useTransition = Es;
var Ks = {};
Ks.current = Se;
var Ps = {};
Ps.ReactCurrentDispatcher = Ks;
var ld = Ps;
function Id(x) {
  return Ee.bind(null, x);
}
function ci(x) {
  return !!x && x.$$typeof === Rs;
}
function fd(x) {
  return ci(x) && x.type === it;
}
function Cd(x) {
  return !!x && !!x.displayName && (typeof x.displayName == "string" || x.displayName instanceof String) && x.displayName.startsWith("Memo(");
}
function pd(x) {
  return ci(x) ? Uo.apply(null, arguments) : x;
}
function hd(x) {
  return !!x.__k && (Ft(null, x), !(4822 * -1 + -8190 + -2 * -6506));
}
function md(x) {
  return x && (x.base || 1703 * -2 + -1951 * -1 + 14 * 104 === x.nodeType && x) || null;
}
var bd = function(x, i) {
  return x(i);
}, Ad = function(x, i) {
  return x(i);
}, yd = it;
function Ts(x) {
  x();
}
function Vs(x) {
  return x;
}
function Es() {
  return [!(-1 * -4393 + -4940 + 548), Ts];
}
var Ls = X0, vd = ci;
function Ds(x, i) {
  var t = i(), e = Ue({ h: { __: t, v: i } }), n = e[0].h, o = e[-23 * 77 + -6157 + 881 * 9];
  return X0(function() {
    n.__ = t, n.v = i, Pi(n) && o({ h: n });
  }, [x, t, i]), Ie(function() {
    return Pi(n) && o({ h: n }), x(function() {
      Pi(n) && o({ h: n });
    });
  }, [x]), t;
}
function Pi(x) {
  var i, t, e = x.v, n = x.__;
  try {
    var o = e();
    return !((i = n) === (t = o) && (-4584 + 139 * 8 + 3472 !== i || (-766 + -569 * 14 + -8733 * -1) / i == 1 / t) || i != i && t != t);
  } catch {
    return !(2419 + -1 * 2419);
  }
}
var N = {};
N.useState = Ue, N.useId = ws, N.useReducer = zo, N.useEffect = Ie, N.useLayoutEffect = X0, N.useInsertionEffect = Ls, N.useTransition = Es, N.useDeferredValue = Vs, N.useSyncExternalStore = Ds, N.startTransition = Ts, N.useRef = yt, N.useImperativeHandle = Ss, N.useMemo = Qe, N.useCallback = Kt, N.useContext = l0, N.useDebugValue = Zx, N.version = "17.0.2", N.Children = Qg, N.render = ad, N.hydrate = sd, N.unmountComponentAtNode = hd, N.createPortal = td, N.createElement = Ee, N.createContext = Ln, N.createFactory = Id, N.cloneElement = pd, N.createRef = Zg, N.Fragment = it, N.isValidElement = ci, N.isElement = vd, N.isFragment = fd, N.isMemo = Cd, N.findDOMNode = md, N.Component = nt, N.PureComponent = ro, N.memo = Jg, N.forwardRef = ks, N.flushSync = Ad, N.unstable_batchedUpdates = bd, N.StrictMode = yd, N.Suspense = Cx, N.SuspenseList = rn, N.lazy = qg, N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ld;
var g0 = N, Wd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
const kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Wd,
  getAugmentedNamespace: Gd,
  getDefaultExportFromCjs: Sd,
  getDefaultExportFromNamespaceIfNotNamed: Bd,
  getDefaultExportFromNamespaceIfPresent: wd
}, Symbol.toStringTag, { value: "Module" }));
var Od = function(i, t, e, n) {
  var o = e ? e.call(n, i, t) : void 0;
  if (o !== void (-88 * 9 + 202 * -15 + 3822)) return !!o;
  if (i === t) return !0;
  if (typeof i != "object" || !i || typeof t != "object" || !t) return !1;
  var r = Object.keys(i), a = Object.keys(t);
  if (r.length !== a.length) return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = 3808 + 4831 * 1 + -53 * 163; c < r.length; c++) {
    var d = r[c];
    if (!s(d)) return !1;
    var g = i[d], C = t[d];
    if (o = e ? e.call(n, g, C, d) : void (2117 + 29 * -73), o === !1 || o === void (-2360 * 1 + 2288 + -12 * -6) && g !== C) return !1;
  }
  return !0;
};
const Zd = kd.getDefaultExportFromCjs(Od);
var ae = "-ms-", In = "-moz-", ee = "-webkit-", Ns = "comm", gi = "rule", er = "decl", Hd = "@import", Ys = "@keyframes", Rd = "@layer", Fs = Math.abs, tr = String.fromCharCode, ao = Object.assign;
function Kd(x, i) {
  return Ae(x, 0) ^ -7775 + -3 * 2717 + -15971 * -1 ? (((i << 886 + 47 * 47 + -3093 ^ Ae(x, -199 * 4 + -4709 + 5505)) << -2923 + 195 * 15 ^ Ae(x, 1)) << 7609 + -5509 * 1 + 2098 * -1 ^ Ae(x, -19 * 22 + 3102 * -3 + 9726)) << -16 * -495 + -4191 * 2 + 464 ^ Ae(x, 3) : 2544 + 90 * 66 + -8484;
}
function js(x) {
  return x.trim();
}
function Gt(x, i) {
  return (x = i.exec(x)) ? x[-6261 + 21 * 467 + 3546 * -1] : x;
}
function F(x, i, t) {
  return x.replace(i, t);
}
function hx(x, i, t) {
  return x.indexOf(i, t);
}
function Ae(x, i) {
  return x.charCodeAt(i) | 773 * 5 + 49 * -79 + 6;
}
function E0(x, i, t) {
  return x.slice(i, t);
}
function mt(x) {
  return x.length;
}
function Xs(x) {
  return x.length;
}
function an(x, i) {
  return i.push(x), x;
}
function Pd(x, i) {
  return x.map(i).join("");
}
function Ia(x, i) {
  return x.filter(function(t) {
    return !Gt(t, i);
  });
}
var di = 1, L0 = -7606 * -1 + -93 * -26 + -10023, Ms = -9123 * 1 + -3938 + 13061, ot = 9484 + -2371 * 4, Ce = -2 * 3061 + 788 * 10 + -1758, M0 = "";
function ui(x, i, t, e, n, o, r, a) {
  var s = {};
  return s.value = x, s.root = i, s.parent = t, s.type = e, s.props = n, s.children = o, s.line = di, s.column = L0, s.length = r, s.return = "", s.siblings = a, s;
}
function Lt(x, i) {
  return ao(ui("", null, null, "", null, null, 749 * 9 + -1 * -4100 + 1 * -10841, x.siblings), x, { length: -x.length }, i);
}
function S0(x) {
  for (; x.root; ) x = Lt(x.root, { children: [x] });
  an(x, x.siblings);
}
function Td() {
  return Ce;
}
function Vd() {
  return Ce = ot > -2 * -3639 + 112 * 56 + -13550 ? Ae(M0, --ot) : 0, L0--, Ce === 3691 * 2 + -497 + 275 * -25 && (L0 = -18 * -331 + -7591 + 86 * 19, di--), Ce;
}
function lt() {
  return Ce = ot < Ms ? Ae(M0, ot++) : 0, L0++, Ce === 8743 + -7 * -1040 + -1 * 16013 && (L0 = -1657 * -3 + 625 * -13 + -631 * -5, di++), Ce;
}
function a0() {
  return Ae(M0, ot);
}
function mx() {
  return ot;
}
function li(x, i) {
  return E0(M0, x, i);
}
function so(x) {
  switch (x) {
    case -4151 * 2 + 899 * -3 + 10999:
    case 9:
    case -4401 * -1 + 5573 + -9964:
    case 3137 * 1 + 1 * 4891 + -8015:
    case -5371 + -7079 * -1 + -1676:
      return -1104 + 1109 * 1;
    case 7723 * 1 + 1 * 3593 + -11283:
    case -1329 * 1 + 1188 + 184:
    case 6046 + 2 * -3463 + 924:
    case 52 * -76 + 7842 + -3843:
    case -1592 * -6 + 7025 + 5505 * -3:
    case 64:
    case 126:
    case 7582 + -1504 * 2 + -215 * 21:
    case 346 * -1 + 5237 + -4768:
    case 15 * -568 + -6197 + -362 * -41:
      return -3448 + 2 * 1726;
    case 112 * 49 + 25 * 313 + 11 * -1205:
      return -309 * 25 + 4036 + -1846 * -2;
    case 618 * 11 + -9360 + 2596:
    case 9351 + 139 * -21 + -3 * 2131:
    case 4457 * 2 + -1514 * -1 + -10388:
    case -4139 + -3 * -431 + 2937:
      return 9514 + -1 * 1889 + -7623;
    case -7273 + -167 * 9 + -3 * -2939:
    case 1079 + 7 * -941 + 1867 * 3:
      return -17 * -213 + -564 + -3056;
  }
  return 31 * 122 + 1 * 3351 + -7133;
}
function Ed(x) {
  return di = L0 = 1993 * -1 + 37 * -11 + 2401, Ms = mt(M0 = x), ot = -7879 * 1 + 8881 + 3 * -334, [];
}
function Ld(x) {
  return M0 = "", x;
}
function Ti(x) {
  return js(li(ot - 1, co(x === 521 * 4 + -629 + 2 * -682 ? x + (1994 + -293 * 34 + 10 * 797) : x === 8810 + 8770 * -1 ? x + (-1 * 5701 + -1352 + 7054) : x)));
}
function Dd(x) {
  for (; (Ce = a0()) && Ce < 33; ) lt();
  return so(x) > 2 || so(Ce) > 49 * -151 + 1 * -4279 + -11681 * -1 ? "" : " ";
}
function Nd(x, i) {
  for (; --i && lt() && !(Ce < -1092 + 13 * -569 + 8537 || Ce > -1771 + -15 * -28 + 1 * 1453 || Ce > 57 && Ce < 9415 + 374 * -25 || Ce > 2 * 1229 + -1 * 463 + -275 * 7 && Ce < -1469 + 54 * 29); ) ;
  return li(x, mx() + (i < 502 + -9469 * -1 + -9965 && a0() == -4787 + 4787 * -2 + 14393 && lt() == 108 * -55 + -5341 + 11313));
}
function co(x) {
  for (; lt(); ) switch (Ce) {
    case x:
      return ot;
    case -4735 * -1 + 1 * -8831 + -295 * -14:
    case -5582 + -1 * 7243 + 12864:
      x !== -1753 + 1 * 411 + 1376 && x !== 4501 * 2 + 1 * -7045 + -14 * 137 && co(Ce);
      break;
    case 40:
      x === -4251 + -3245 * 3 + 1079 * 13 && co(x);
      break;
    case 691 * 1 + 1802 + -2401 * 1:
      lt();
      break;
  }
  return ot;
}
function Yd(x, i) {
  for (; lt() && x + Ce !== 7118 * -1 + -5 * -58 + -275 * -25 + (-4389 + -3238 * -2 + -2077); ) if (x + Ce === -36 * 157 + 1 * 5637 + 57 + (-384 * -4 + 8939 + -10433) && a0() === -23 * -179 + 8363 + -12433) break;
  return "/*" + li(i, ot - (223 * -37 + 26 * 218 + 2584)) + "*" + tr(x === 47 ? x : lt());
}
function Fd(x) {
  for (; !so(a0()); ) lt();
  return li(x, ot);
}
function jd(x) {
  return Ld(bx("", null, null, null, [""], x = Ed(x), 0, [-4330 + 5 * 866], x));
}
function bx(x, i, t, e, n, o, r, a, s) {
  for (var c = 0, d = 5115 + -1 * -6793 + -11908, g = r, C = -94 * -71 + 1338 * 7 + -4 * 4010, u = 12894 + 6447 * -2, p = 977 * -7 + 1 * -8844 + 15683, b = 36 * -97 + -7581 + -226 * -49, A = -1039 * -5 + -18 * 222 + -1198, l = -6952 + 3178 * -1 + 10131, W = 3693 + -1 * 3693, K = "", X = n, M = o, J = e, H = K; A; ) switch (p = W, W = lt()) {
    case 1757 * -1 + 4300 + -2503:
      if (p != -6022 + 7266 * -1 + 13396 && Ae(H, g - (3012 + 3011 * -1)) == 58) {
        hx(H += F(Ti(W), "&", "&\f"), "&\f", Fs(c ? a[c - (10717 + 114 * -94)] : 237 * 7 + -5060 * -1 + -6719)) != -(1631 * 3 + -805 + 4087 * -1) && (l = -(1631 + -10 * 163));
        break;
      }
    case 1 * -4903 + -1 * -6087 + 23 * -50:
    case 681 + 4772 * -1 + 35 * 118:
    case 91:
      H += Ti(W);
      break;
    case 6427 + -14 * 5 + -6348:
    case -7019 * -1 + -5533 + -1476:
    case 5738 + -31 * 312 + -1 * -3947:
    case 32:
      H += Dd(p);
      break;
    case 6279 + -1 * 9091 + 2904:
      H += Nd(mx() - (1 * -2373 + 348 * 20 + -4586 * 1), 7);
      continue;
    case -4457 * -1 + 3013 + 571 * -13:
      switch (a0()) {
        case -1 * -958 + 7729 + 133 * -65:
        case -492 + 2 * 4227 + -1 * 7915:
          an(Xd(Yd(lt(), mx()), i, t, s), s);
          break;
        default:
          H += "/";
      }
      break;
    case (-3789 + 104 * -5 + 4432) * b:
      a[c++] = mt(H) * l;
    case (2 * -3559 + -1061 * 6 + 13609) * b:
    case -3 * 2771 + -1 * 953 + -373 * -25:
    case -31 * 58 + 8143 * 1 + -6345:
      switch (W) {
        case -17475 + 75 * 233:
        case -1 * 9466 + 1 * 5638 + -3953 * -1:
          A = 1 * -1097 + -3594 + 4691;
        case 82 * -40 + -1 * -1319 + -4 * -505 + d:
          l == -(-6509 + 1 * 1231 + -5279 * -1) && (H = F(H, /\f/g, "")), u > 2914 * -1 + -214 * -37 + 3 * -1668 && mt(H) - g && an(u > 9539 * -1 + 4492 + 3 * 1693 ? Ca(H + ";", e, t, g - (2 * 4463 + -4929 + -3996), s) : Ca(F(H, " ", "") + ";", e, t, g - (1657 * -6 + 9286 + 658), s), s);
          break;
        case 59:
          H += ";";
        default:
          if (an(J = fa(H, i, t, c, d, n, a, K, X = [], M = [], g, o), o), W === 4429 + 3 * -1939 + 1 * 1511)
            if (d === -3347 + -71 * 4 + 3631) bx(H, i, J, J, X, o, g, a, M);
            else switch (C === 2 * 1605 + 31 * 280 + -1 * 11791 && Ae(H, 3) === 110 ? -9987 + 101 * 39 + 6148 : C) {
              case 100:
              case 1902 + -69 * 26:
              case 7161 + -13 * -131 + -8755:
              case 4864 + -8072 * 1 + -1 * -3323:
                bx(x, J, J, e && an(fa(x, J, J, 0, -43 * -129 + -5015 + -532, n, a, K, n, X = [], g, M), M), n, M, g, a, e ? X : M);
                break;
              default:
                bx(H, J, J, J, [""], M, -1 * -5970 + 1 * -9416 + 3446, a, M);
            }
      }
      c = d = u = 0, b = l = 4 * -1261 + -4460 + 9505, K = H = "", g = r;
      break;
    case -24 * 79 + 1 * -3986 + 5940:
      g = 1741 * 5 + 5360 + -8 * 1758 + mt(H), u = p;
    default:
      if (b < -10709 + -51 * -210) {
        if (W == 1626 * -6 + 5 * 531 + 7224) --b;
        else if (W == 125 && b++ == 6835 + 354 * 23 + -14977 && Vd() == -1 * -9939 + -2592 + -7222) continue;
      }
      switch (H += tr(W), W * b) {
        case 157 + -1 * -1508 + -1627 * 1:
          l = d > 25 * -213 + 6779 + -1454 ? 653 * 8 + 8149 + -13372 : (H += "\f", -(-9572 * -1 + -171 * 34 + -3757));
          break;
        case -50 * -49 + 1924 + -4330:
          a[c++] = (mt(H) - (-5102 + 461 * 4 + 3259)) * l, l = 283 * -15 + 7 * -961 + 10973 * 1;
          break;
        case 8982 + -49 * 182:
          a0() === 245 * -12 + 289 * -19 + -13 * -652 && (H += Ti(lt())), C = a0(), d = g = mt(K = H += Fd(mx())), W++;
          break;
        case 1280 * -2 + 693 + -239 * -8:
          p === -824 * 9 + -2951 + 2603 * 4 && mt(H) == 1 * -8801 + -9450 + 18253 && (b = 0);
      }
  }
  return o;
}
function fa(x, i, t, e, n, o, r, a, s, c, d, g) {
  for (var C = n - 1, u = n === -230 * 26 + -337 * -13 + 1599 ? o : [""], p = Xs(u), b = -11066 + -1006 * -11, A = 4931 * -1 + 4492 + 439, l = 22 * 200 + -7712 + -2 * -1656; b < e; ++b) for (var W = 0, K = E0(x, C + (-5 * -1097 + -4723 + -761), C = Fs(A = r[b])), X = x; W < p; ++W) (X = js(A > -3 * 2007 + -7333 + -1 * -13354 ? u[W] + " " + K : F(K, /&\f/g, u[W]))) && (s[l++] = X);
  return ui(x, i, t, n === -4871 * 1 + 1703 * 1 + 792 * 4 ? gi : a, s, c, d, g);
}
function Xd(x, i, t, e) {
  return ui(x, i, t, Ns, tr(Td()), E0(x, -5711 * 1 + 1831 * 3 + -110 * -2, -2), 190 * 29 + 2205 + -7715, e);
}
function Ca(x, i, t, e, n) {
  return ui(x, i, t, er, E0(x, -5934 + -2 * -2967, e), E0(x, e + (2 * 574 + -1 * 9835 + 8688), -(-6438 + 6439 * 1)), e, n);
}
function _s(x, i, t) {
  switch (Kd(x, i)) {
    case 14 * -634 + 3086 + 10893:
      return ee + "print-" + x + x;
    case -3958 + -1 * -9695:
    case 1 * -431 + 8907 + 4275 * -1:
    case 25 * 239 + 11 * -237 + -191 * 1:
    case 533 * 9 + -8605 * -1 + -9969:
    case 1 * -3793 + 6852 + -1418:
    case -112 * 37 + 9899 * 1 + -11 * 118:
    case -8073 + -2 * -2735 + -4 * -1381:
    case 10403 + -2 * 5424 + -547 * -11:
    case 39 * 55 + 739 * 8 + -1701:
    case -2 * 3310 + -4537 + 17001:
    case -3545 + -2 * 4109 + 1 * 14954:
    case 11407 + -1 * 5449 + 687:
    case 9605 + -9581 * 1 + 2981 * 1:
    case 6391:
    case -11149 + -1 * 11339 + 28367:
    case -4378 + 1 * 10001:
    case 6135:
    case -1865 * 3 + 874 + 9320:
    case 8341 + -428 * 11 + 1222:
    case 1446 + 4009 * 2 + -5249:
    case 12298 + -3175 * -1 + -9084:
    case 4434 + 9 * 75:
    case -5103 + 417 * 16 + 3796:
    case -4420 + -217 * -9 + -6 * -1348:
    case -8729 * -1 + 2236 * -1 + -2664:
      return ee + x + x;
    case -6616 * 1 + -4 * 1567 + 17673:
      return In + x + x;
    case -13249 + -2 * -9299:
    case 4246:
    case 4810:
    case 6968:
    case -36 * -179 + -2908 * 1 + -390 * 2:
      return ee + x + In + x + ae + x + x;
    case -898 * -7 + -1 * 8614 + -8264 * -1:
      switch (Ae(x, i + (1 * 4357 + -9871 * 1 + -1105 * -5))) {
        case -1 * -4141 + -9911 + -4 * -1471:
          return ee + x + ae + F(x, /[svh]\w+-[tblr]{2}/, "tb") + x;
        case 353 * 8 + 5383 + -8099:
          return ee + x + ae + F(x, /[svh]\w+-[tblr]{2}/, "tb-rl") + x;
        case -1 * 3823 + -8674 + -2 * -6271:
          return ee + x + ae + F(x, /[svh]\w+-[tblr]{2}/, "lr") + x;
      }
    case -3870 * -3 + -12039 * 1 + 7257 * 1:
    case -499 + 939 * 5 + 1 * 72:
    case -5203 + 9 * -692 + -1 * -14334:
      return ee + x + ae + x + x;
    case 533 * -13 + 1 * -9167 + -1 * -22261:
      return ee + x + ae + "flex-" + x + x;
    case -632 * 16 + -9659 + -1 * -24958:
      return ee + x + F(x, /(\w+).+(:[^]+)/, ee + "box-$1$2" + ae + "flex-$1$2") + x;
    case 5443:
      return ee + x + ae + "flex-item-" + F(x, /flex-|-self/g, "") + (Gt(x, /flex-|baseline/) ? "" : ae + "grid-row-" + F(x, /flex-|-self/g, "")) + x;
    case -5093 * -1 + 690 + -1 * 1108:
      return ee + x + ae + "flex-line-pack" + F(x, /align-content|flex-|-self/g, "") + x;
    case -7991 + 1 * -1687 + 15226:
      return ee + x + ae + F(x, "shrink", "negative") + x;
    case 1037 + 2 * -217 + 4689:
      return ee + x + ae + F(x, "basis", "preferred-size") + x;
    case -16890 + 2295 * 10:
      return ee + "box-" + F(x, "-grow", "") + ee + x + ae + F(x, "grow", "positive") + x;
    case 36 * -37 + -2 * -337 + -2606 * -2:
      return ee + F(x, /([^-])(transform)/g, "$1" + ee + "$2") + x;
    case -9195 + 3329 * 3 + 5395 * 1:
      return F(F(F(x, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), x, "") + x;
    case 1255 + 24 * -297 + -116 * -98:
    case 3959:
      return F(x, /(image-set\([^]*)/, ee + "$1$`$1");
    case -5 * -427 + 628 + 2205:
      return F(F(x, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + ae + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + x + x;
    case 2162 * -2 + 3 * 13 + 8485:
      if (!Gt(x, /flex-|baseline/)) return ae + "grid-column-align" + E0(x, i) + x;
      break;
    case -1963 + 27 * 49 + 3232:
    case -2 * 1073 + -6278 * 1 + -11784 * -1:
      return ae + F(x, "template-", "") + x;
    case 4384:
    case -4341 * -2 + 6950 + 4 * -3004:
      return t && t.some(function(e, n) {
        return i = n, Gt(e.props, /grid-\w+-end/);
      }) ? ~hx(x + (t = t[i].value), "span", -8807 + -769 * -9 + 1 * 1886) ? x : ae + F(x, "-start", "") + x + ae + "grid-row-span:" + (~hx(t, "span", -3 * 2161 + 71 * -7 + 6980) ? Gt(t, /\d+/) : +Gt(t, /\d+/) - +Gt(x, /\d+/)) + ";" : ae + F(x, "-start", "") + x;
    case -45 * -185 + 66 * 48 + -6597:
    case 6586 + 144 * -65 + 58 * 119:
      return t && t.some(function(e) {
        return Gt(e.props, /grid-\w+-start/);
      }) ? x : ae + F(F(x, "-end", "-span"), "span ", "") + x;
    case 2 * 2679 + 1 * 525 + 3 * -596:
    case -38 * 238 + 8849 + 3778:
    case -4834 + 3 * -1093 + 13 * 937:
    case -204 * 3 + 7519 + -4375:
      return F(x, /(.+)-inline(.+)/, ee + "$1$2") + x;
    case -7751 * 1 + -5319 * 1 + 21186:
    case 7059:
    case 145 * -47 + -7623 + 20191:
    case 7079 * 1 + -8 * 845 + -2 * -2608:
    case -2739 + -66 * -124:
    case 1 * 3959 + 4125 + -2383:
    case 1 * -1553 + 4696 * -2 + 7939 * 2:
    case -5 * 491 + 1974 * -4 + 884 * 17:
    case 1596 + -4199 * -1 + -262:
    case 802 * 4 + -11029 + 2 * 6805:
    case -2759 + -5 * -1556:
    case 3698 * -2 + 2641 + 9520:
      if (mt(x) - (1952 + 1951 * -1) - i > -2808 * 3 + -1 * -3576 + 4854) switch (Ae(x, i + (-3301 + -9 * 383 + 6749 * 1))) {
        case 50 * 163 + -7563 + 478 * -1:
          if (Ae(x, i + (3718 + 1238 * -3)) !== 227 * -23 + -7374 + 12640) break;
        case 1893 + 19 * 407 + -2 * 4762:
          return F(x, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + In + (Ae(x, i + 3) == 58 * -19 + -8801 + 10011 ? "$3" : "$2-$3")) + x;
        case 7583 * -1 + 5030 + 2668:
          return ~hx(x, "stretch", 3603 + -3 * 1201) ? _s(F(x, "stretch", "fill-available"), i, t) + x : x;
      }
      break;
    case -1498 + -35 * -183 + 35 * 7:
    case 4027 * 1 + -7481 + -1 * -9374:
      return F(x, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, o, r, a, s, c) {
        return ae + n + ":" + o + c + (r ? ae + n + "-span:" + (a ? s : +s - +o) + c : "") + x;
      });
    case -6232 + -481 * 11 + 16472:
      if (Ae(x, i + (-1 * 5029 + 9465 + 443 * -10)) === 8552 + -1 * 5433 + 1499 * -2) return F(x, ":", ":" + ee) + x;
      break;
    case 2 * -5468 + 2190 * 4 + 8620:
      switch (Ae(x, Ae(x, -3832 + -3846 * -1) === 1 * 5237 + -2539 + 379 * -7 ? -4217 + 1229 * 1 + 3006 : 11)) {
        case -751 * 1 + -6287 + 7158:
          return F(x, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (Ae(x, 5 * -740 + 1 * -7593 + -3 * -3769) === -6962 + -1687 * -1 + 1330 * 4 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + ae + "$2box$3") + x;
        case -5073 + -1 * -7559 + -2 * 1193:
          return F(x, ":", ":" + ae) + x;
      }
      break;
    case 175 * 46 + 10333 + -12664:
    case 2647:
    case 4974 + -1 * 6749 + 3910:
    case 3927:
    case 1 * -9765 + -9788 + 21944:
      return F(x, "scroll-", "scroll-snap-") + x;
  }
  return x;
}
function Hx(x, i) {
  for (var t = "", e = -1164 + -2273 * -2 + -3382; e < x.length; e++) t += i(x[e], e, x, i) || "";
  return t;
}
function Md(x, i, t, e) {
  switch (x.type) {
    case Rd:
      if (x.children.length) break;
    case Hd:
    case er:
      return x.return = x.return || x.value;
    case Ns:
      return "";
    case Ys:
      return x.return = x.value + "{" + Hx(x.children, e) + "}";
    case gi:
      if (!mt(x.value = x.props.join(","))) return "";
  }
  return mt(t = Hx(x.children, e)) ? x.return = x.value + "{" + t + "}" : "";
}
function _d(x) {
  var i = Xs(x);
  return function(t, e, n, o) {
    for (var r = "", a = 3037 + 2 * -664 + -1709 * 1; a < i; a++) r += x[a](t, e, n, o) || "";
    return r;
  };
}
function Jd(x) {
  return function(i) {
    i.root || (i = i.return) && x(i);
  };
}
function Ud(x, i, t, e) {
  if (x.length > -(7331 * 1 + -9706 * -1 + -4259 * 4) && !x.return)
    switch (x.type) {
      case er:
        x.return = _s(x.value, x.length, t);
        return;
      case Ys:
        return Hx([Lt(x, { value: F(x.value, "@", "@" + ee) })], e);
      case gi:
        if (x.length) return Pd(t = x.props, function(n) {
          switch (Gt(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              S0(Lt(x, { props: [F(n, /:(read-\w+)/, ":" + In + "$1")] }));
              var o = {};
              o.props = [n], S0(Lt(x, o)), ao(x, { props: Ia(t, e) });
              break;
            case "::placeholder":
              S0(Lt(x, { props: [F(n, /:(plac\w+)/, ":" + ee + "input-$1")] })), S0(Lt(x, { props: [F(n, /:(plac\w+)/, ":" + In + "$1")] })), S0(Lt(x, { props: [F(n, /:(plac\w+)/, ae + "input-$1")] }));
              var r = {};
              r.props = [n], S0(Lt(x, r)), ao(x, { props: Ia(t, e) });
              break;
          }
          return "";
        });
    }
}
var D = {};
D.animationIterationCount = 1, D.aspectRatio = 1, D.borderImageOutset = 1, D.borderImageSlice = 1, D.borderImageWidth = 1, D.boxFlex = 1, D.boxFlexGroup = 1, D.boxOrdinalGroup = 1, D.columnCount = 1, D.columns = 1, D.flex = 1, D.flexGrow = 1, D.flexPositive = 1, D.flexShrink = 1, D.flexNegative = 1, D.flexOrder = 1, D.gridRow = 1, D.gridRowEnd = 1, D.gridRowSpan = 1, D.gridRowStart = 1, D.gridColumn = 1, D.gridColumnEnd = 1, D.gridColumnSpan = 1, D.gridColumnStart = 1, D.msGridRow = 1, D.msGridRowSpan = 1, D.msGridColumn = 1, D.msGridColumnSpan = 1, D.fontWeight = 1, D.lineHeight = 1, D.opacity = 1, D.order = 1, D.orphans = 1, D.tabSize = 1, D.widows = 1, D.zIndex = 1, D.zoom = 1, D.WebkitLineClamp = 1, D.fillOpacity = 1, D.floodOpacity = 1, D.stopOpacity = 1, D.strokeDasharray = 1, D.strokeDashoffset = 1, D.strokeMiterlimit = 1, D.strokeOpacity = 1, D.strokeWidth = 1;
var Qd = D, z = {}, d0 = typeof process < "u" && void (3 * -2309 + -6824 + 13751 * 1) !== z && (z.REACT_APP_SC_ATTR || z.SC_ATTR) || "data-styled", Js = "active", Us = "data-styled-version", Ii = "6.1.11", nr = `/*!sc*/
`, xr = typeof window < "u" && "HTMLElement" in window, zd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (6410 + 1282 * -5) !== z && void (1876 + -5817 * 1 + 3941) !== z.REACT_APP_SC_DISABLE_SPEEDY && z.REACT_APP_SC_DISABLE_SPEEDY !== "" ? z.REACT_APP_SC_DISABLE_SPEEDY !== "false" && z.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-3 * -2360 + -1 * -5613 + -12693) !== z && z.SC_DISABLE_SPEEDY !== void 0 && z.SC_DISABLE_SPEEDY !== "" ? z.SC_DISABLE_SPEEDY !== "false" && z.SC_DISABLE_SPEEDY : z.NODE_ENV !== "production"), pa = /invalid hook call/i, xx = /* @__PURE__ */ new Set(), qd = function(x, i) {
  if (z.NODE_ENV !== "production") {
    var t = i ? ' with the id of "'.concat(i, '"') : "", e = "The component ".concat(x).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var a = [], s = -7330 * -1 + -1 * -9116 + 115 * -143; s < arguments.length; s++) a[s - (7 * 794 + 1 * -845 + -248 * 19)] = arguments[s];
        pa.test(r) ? (o = !1, xx.delete(e)) : n.apply(void (-24 * -193 + -2 * -2996 + -2 * 5312), T0([r], a, !1));
      }, yt(), o && !xx.has(e) && (console.warn(e), xx.add(e));
    } catch (r) {
      pa.test(r.message) && xx.delete(e);
    } finally {
      console.error = n;
    }
  }
}, fi = Object.freeze([]), D0 = Object.freeze({});
function $d(x, i, t) {
  return void (-826 + -1325 * -5 + 1933 * -3) === t && (t = D0), x.theme !== t.theme && x.theme || i || t.theme;
}
var go = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), eu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, tu = /(^-|-$)/g;
function ha(x) {
  return x.replace(eu, "-").replace(tu, "");
}
var nu = /(a)(d)/gi, ix = -559 + -47 * -13, ma = function(x) {
  return String.fromCharCode(x + (x > -8453 * 1 + 8057 + -1 * -421 ? -4267 * 2 + -2227 + 10800 : -5 * 1436 + -1 * -7801 + 2 * -262));
};
function uo(x) {
  var i, t = "";
  for (i = Math.abs(x); i > ix; i = i / ix | -1 * 2341 + -238 * 7 + -4007 * -1) t = ma(i % ix) + t;
  return (ma(i % ix) + t).replace(nu, "$1-$2");
}
var Vi, Qs = -3213 * -3 + -1 * -8672 + -12930, $t = function(x, i) {
  for (var t = i.length; t; ) x = (-383 * -25 + -103 * -19 + -11499) * x ^ i.charCodeAt(--t);
  return x;
}, zs = function(x) {
  return $t(Qs, x);
};
function xu(x) {
  return uo(zs(x) >>> -1073 + 37 * 29);
}
function qs(x) {
  return z.NODE_ENV !== "production" && typeof x == "string" && x || x.displayName || x.name || "Component";
}
function Ei(x) {
  return typeof x == "string" && (z.NODE_ENV === "production" || x.charAt(8 * 601 + 2098 + -6906) === x.charAt(-2 * 4932 + -1 * -8467 + -1397 * -1).toLowerCase());
}
var tt = {};
tt.childContextTypes = !0, tt.contextType = !0, tt.contextTypes = !0, tt.defaultProps = !0, tt.displayName = !0, tt.getDefaultProps = !0, tt.getDerivedStateFromError = !0, tt.getDerivedStateFromProps = !0, tt.mixins = !0, tt.propTypes = !0, tt.type = !0;
var Dt = {};
Dt.name = !0, Dt.length = !0, Dt.prototype = !0, Dt.caller = !0, Dt.callee = !0, Dt.arguments = !0, Dt.arity = !0;
var zt = {};
zt.$$typeof = !0, zt.compare = !0, zt.defaultProps = !0, zt.displayName = !0, zt.propTypes = !0, zt.type = !0;
var k0 = {};
k0.$$typeof = !0, k0.render = !0, k0.defaultProps = !0, k0.displayName = !0, k0.propTypes = !0;
var $s = typeof Symbol == "function" && Symbol.for, ec = $s ? Symbol.for("react.memo") : -17 * 2617 + 3372 * 3 + 372 * 254, iu = $s ? Symbol.for("react.forward_ref") : -7 * -7044 + 56364 + -10 * 4556, ou = tt, ru = Dt, tc = zt, au = ((Vi = {})[iu] = k0, Vi[ec] = tc, Vi);
function ba(x) {
  return ("type" in (i = x) && i.type.$$typeof) === ec ? tc : "$$typeof" in x ? au[x.$$typeof] : ou;
  var i;
}
var su = Object.defineProperty, cu = Object.getOwnPropertyNames, Aa = Object.getOwnPropertySymbols, gu = Object.getOwnPropertyDescriptor, du = Object.getPrototypeOf, ya = Object.prototype;
function nc(x, i, t) {
  if (typeof i != "string") {
    if (ya) {
      var e = du(i);
      e && e !== ya && nc(x, e, t);
    }
    var n = cu(i);
    Aa && (n = n.concat(Aa(i)));
    for (var o = ba(x), r = ba(i), a = 167 * -5 + 3566 + 1 * -2731; a < n.length; ++a) {
      var s = n[a];
      if (!(s in ru || t && t[s] || r && s in r || o && s in o)) {
        var c = gu(i, s);
        try {
          su(x, s, c);
        } catch {
        }
      }
    }
  }
  return x;
}
function N0(x) {
  return typeof x == "function";
}
function ir(x) {
  return typeof x == "object" && "styledComponentId" in x;
}
function t0(x, i) {
  return x && i ? "".concat(x, " ").concat(i) : x || i || "";
}
function va(x, i) {
  if (3427 + -30 * -174 + -8647 === x.length) return "";
  for (var t = x[3 * 2621 + 1369 + -1 * 9232], e = -6632 * 1 + 2803 * 1 + -3830 * -1; e < x.length; e++) t += x[e];
  return t;
}
function Y0(x) {
  return x !== null && typeof x == "object" && x.constructor.name === Object.name && !("props" in x && x.$$typeof);
}
function lo(x, i, t) {
  if (void (1822 * 1 + 2725 + -4547) === t && (t = !1), !t && !Y0(x) && !Array.isArray(x)) return i;
  if (Array.isArray(i))
    for (var e = -1 * -9403 + -2 * -652 + -10707; e < i.length; e++) x[e] = lo(x[e], i[e]);
  else if (Y0(i))
    for (var e in i) x[e] = lo(x[e], i[e]);
  return x;
}
function or(x, i) {
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
var uu = z.NODE_ENV !== "production" ? me : {};
function lu() {
  for (var x = [], i = 0; i < arguments.length; i++) x[i] = arguments[i];
  for (var t = x[-1823 * 2 + -5 * 1861 + -9 * -1439], e = [], n = 8363 + -107 * 80 + 198, o = x.length; n < o; n += 6666 + 1 * 9451 + -16116) e.push(x[n]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function _0(x) {
  for (var i = [], t = 438 * 19 + 589 * -13 + -664; t < arguments.length; t++) i[t - (3816 + 1146 * -1 + -2669)] = arguments[t];
  return z.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(x, " for more information.").concat(i.length > -8665 + -2 * -2663 + -477 * -7 ? " Args: ".concat(i.join(", ")) : "")) : new Error(lu.apply(void 0, T0([uu[x]], i, !1)).trim());
}
var Iu = function() {
  function x(i) {
    this.groupSizes = new Uint32Array(512), this.length = -1 * -5458 + -4476 + 1 * -470, this.tag = i;
  }
  return x.prototype.indexOfGroup = function(i) {
    for (var t = -2013 * 3 + -3277 * -3 + -48 * 79, e = -2 * -21 + 5126 + -5168; e < i; e++) t += this.groupSizes[e];
    return t;
  }, x.prototype.insertRules = function(i, t) {
    if (i >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, o = n; i >= o; ) if ((o <<= 493 * 2 + 15 * 8 + -17 * 65) < -5103 + -7 * -729) throw _0(170 * -29 + 9982 + -4 * 1259, "".concat(i));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = n; r < o; r++) this.groupSizes[r] = 279 + 3782 * 2 + -11 * 713;
    }
    for (var a = this.indexOfGroup(i + (308 * 15 + 5092 + -9711)), s = (r = 0, t.length); r < s; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[i]++, a++);
  }, x.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var t = this.groupSizes[i], e = this.indexOfGroup(i), n = e + t;
      this.groupSizes[i] = 1669 + -552 * 9 + 1 * 3299;
      for (var o = e; o < n; o++) this.tag.deleteRule(e);
    }
  }, x.prototype.getGroup = function(i) {
    var t = "";
    if (i >= this.length || -11 * -632 + 5653 + 5 * -2521 === this.groupSizes[i]) return t;
    for (var e = this.groupSizes[i], n = this.indexOfGroup(i), o = n + e, r = n; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(nr);
    return t;
  }, x;
}(), fu = 13 * 629 + 3062 * 1 + 3746 * -3 << -2576 + 8 * 638 + -2498, Ax = /* @__PURE__ */ new Map(), Rx = /* @__PURE__ */ new Map(), yx = 4520 + -47 * 193 + 4552, ox = function(x) {
  if (Ax.has(x)) return Ax.get(x);
  for (; Rx.has(yx); ) yx++;
  var i = yx++;
  if (z.NODE_ENV !== "production" && ((8490 + -3 * -2413 + -15729 | i) < 14797 + 1 * -14797 || i > fu)) throw _0(-1 * -4722 + -4 * 303 + -3494, "".concat(i));
  return Ax.set(x, i), Rx.set(i, x), i;
}, Cu = function(x, i) {
  yx = i + (-7 * -115 + -6597 + 5793), Ax.set(x, i), Rx.set(i, x);
}, pu = "style[".concat(d0, "][").concat(Us, '="').concat(Ii, '"]'), hu = new RegExp("^".concat(d0, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), mu = function(x, i, t) {
  for (var e, n = t.split(","), o = 1655 + 1 * -3059 + -6 * -234, r = n.length; o < r; o++) (e = n[o]) && x.registerName(i, e);
}, bu = function(x, i) {
  for (var t, e = ((t = i.textContent) !== null && void (1369 * -4 + 907 * 1 + 4569) !== t ? t : "").split(nr), n = [], o = -3 * 3202 + 8390 + 608 * 2, r = e.length; o < r; o++) {
    var a = e[o].trim();
    if (a) {
      var s = a.match(hu);
      if (s) {
        var c = 0 | parseInt(s[1], 10), d = s[-12 * -719 + -9572 + 22 * 43];
        1 * 7877 + 9461 + -17338 * 1 !== c && (Cu(d, c), mu(x, d, s[-1515 * -2 + 5345 + -8372]), x.getTag().insertRules(c, n)), n.length = 9540 + -353 * -22 + -17306;
      } else n.push(a);
    }
  }
};
function Au() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var xc = function(x) {
  var i = document.head, t = x || i, e = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(d0, "]")));
    return s[s.length - (6508 + -3048 * 1 + -3459)];
  }(t), o = void (6164 + -134 * 46) !== n ? n.nextSibling : null;
  e.setAttribute(d0, Js), e.setAttribute(Us, Ii);
  var r = Au();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, yu = function() {
  function x(i) {
    this.element = xc(i), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = -2698 + -2353 * 2 + 7404, o = e.length; n < o; n++) {
        var r = e[n];
        if (r.ownerNode === t) return r;
      }
      throw _0(-1329 * -1 + -937 * -1 + 1 * -2249);
    }(this.element), this.length = -8260 + -35 * -236;
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
}(), vu = function() {
  function x(i) {
    this.element = xc(i), this.nodes = this.element.childNodes, this.length = 2837 * 3 + 6608 * 1 + -15119;
  }
  return x.prototype.insertRule = function(i, t) {
    if (i <= this.length && i >= -5672 * 1 + 1015 * -5 + 977 * 11) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }, x.prototype.deleteRule = function(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }, x.prototype.getRule = function(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }, x;
}(), Wu = function() {
  function x(i) {
    this.rules = [], this.length = -3014 * -3 + -17 * -538 + -2 * 9094;
  }
  return x.prototype.insertRule = function(i, t) {
    return i <= this.length && (this.rules.splice(i, -10349 + -1 * -10349, t), this.length++, !0);
  }, x.prototype.deleteRule = function(i) {
    this.rules.splice(i, -3266 + -1 * 9854 + 1 * 13121), this.length--;
  }, x.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, x;
}(), Wa = xr, Su = { isServer: !xr, useCSSOMInjection: !zd }, ic = function() {
  function x(i, t, e) {
    void (2 * -1759 + -31 * -10 + 3208) === i && (i = D0), void (13 * -743 + 236 * -33 + -239 * -73) === t && (t = {});
    var n = this;
    this.options = je(je({}, Su), i), this.gs = t, this.names = new Map(e), this.server = !!i.isServer, !this.server && xr && Wa && (Wa = !1, function(o) {
      for (var r = document.querySelectorAll(pu), a = -2739 + -249 * -11, s = r.length; a < s; a++) {
        var c = r[a];
        c && c.getAttribute(d0) !== Js && (bu(o, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), or(this, function() {
      return function(o) {
        for (var r = o.getTag(), a = r.length, s = "", c = function(g) {
          var C = function(l) {
            return Rx.get(l);
          }(g);
          if (void (1 * 3188 + -9149 * 1 + -1 * -5961) === C) return "continue";
          var u = o.names.get(C), p = r.getGroup(g);
          if (void (-10164 + -462 * -22) === u || 7 * -1211 + 409 * -18 + 15839 === p.length) return "continue";
          var b = "".concat(d0, ".g").concat(g, '[id="').concat(C, '"]'), A = "";
          void (-7 * 1159 + 10 * 471 + 3403) !== u && u.forEach(function(l) {
            l.length > -1034 * 9 + -3759 + 871 * 15 && (A += "".concat(l, ","));
          }), s += "".concat(p).concat(b, '{content:"').concat(A, '"}').concat(nr);
        }, d = -28 * -227 + -5558 + -266 * 3; d < a; d++) c(d);
        return s;
      }(n);
    });
  }
  return x.registerId = function(i) {
    return ox(i);
  }, x.prototype.reconstructWithOptions = function(i, t) {
    return void (-106 * 29 + 751 * 2 + -4 * -393) === t && (t = !0), new x(je(je({}, this.options), i), this.gs, t && this.names || void (-4119 + 23 * -342 + 3 * 3995));
  }, x.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || 9080 + -8 * -911 + -2 * 8184) + 1;
  }, x.prototype.getTag = function() {
    return this.tag || (this.tag = (i = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new Wu(n) : e ? new yu(n) : new vu(n);
    }(this.options), new Iu(i)));
    var i;
  }, x.prototype.hasNameForId = function(i, t) {
    return this.names.has(i) && this.names.get(i).has(t);
  }, x.prototype.registerName = function(i, t) {
    if (ox(i), this.names.has(i)) this.names.get(i).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(i, e);
    }
  }, x.prototype.insertRules = function(i, t, e) {
    this.registerName(i, t), this.getTag().insertRules(ox(i), e);
  }, x.prototype.clearNames = function(i) {
    this.names.has(i) && this.names.get(i).clear();
  }, x.prototype.clearRules = function(i) {
    this.getTag().clearGroup(ox(i)), this.clearNames(i);
  }, x.prototype.clearTag = function() {
    this.tag = void (1 * 3947 + -4769 + 137 * 6);
  }, x;
}(), wu = /&/g, Bu = /^\s*\/\/.*$/gm;
function oc(x, i) {
  return x.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(i, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(i, " ")), t.props = t.props.map(function(e) {
      return "".concat(i, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = oc(t.children, i)), t;
  });
}
function rc(x) {
  var i, t, e, n = x === void 0 ? D0 : x, o = n.options, r = void (2695 + 2633 * -1 + 62 * -1) === o ? D0 : o, a = n.plugins, s = void (-8551 + -2 * -4909 + 7 * -181) === a ? fi : a, c = function(C, u, p) {
    return p.startsWith(t) && p.endsWith(t) && p.replaceAll(t, "").length > 2225 * -3 + -5 * -1913 + -2890 ? ".".concat(i) : C;
  }, d = s.slice();
  d.push(function(C) {
    C.type === gi && C.value.includes("&") && (C.props[-47 * -89 + -6761 * 1 + 1289 * 2] = C.props[-3 * -1634 + -4513 * -1 + -1883 * 5].replace(wu, t).replace(e, c));
  }), r.prefix && d.push(Ud), d.push(Md);
  var g = function(C, u, p, b) {
    void (-2 * 2111 + -1588 * -1 + 2634) === u && (u = ""), void (71 * 2 + 2845 + -2987 * 1) === p && (p = ""), void (-2861 + -1 * 1027 + 3888) === b && (b = "&"), i = b, t = u, e = new RegExp("\\".concat(t, "\\b"), "g");
    var A = C.replace(Bu, ""), l = jd(p || u ? "".concat(p, " ").concat(u, " { ").concat(A, " }") : A);
    r.namespace && (l = oc(l, r.namespace));
    var W = [];
    return Hx(l, _d(d.concat(Jd(function(K) {
      return W.push(K);
    })))), W;
  };
  return g.hash = s.length ? s.reduce(function(C, u) {
    return u.name || _0(266 + 25 * 135 + -3626), $t(C, u.name);
  }, Qs).toString() : "", g;
}
var Gu = new ic(), Io = rc(), rr = g0.createContext({ shouldForwardProp: void (9307 * 1 + -6095 + 1606 * -2), styleSheet: Gu, stylis: Io });
rr.Consumer;
var ku = g0.createContext(void (-1 * -6623 + -4958 * -2 + -447 * 37));
function fo() {
  return l0(rr);
}
function Ou(x) {
  var i = Ue(x.stylisPlugins), t = i[-2643 * -2 + 2 * 371 + 548 * -11], e = i[-8669 + 3978 * -1 + 12648], n = fo().styleSheet, o = Qe(function() {
    var d = n, g = {};
    return g.useCSSOMInjection = !1, x.sheet ? d = x.sheet : x.target && (d = d.reconstructWithOptions({ target: x.target }, !1)), x.disableCSSOMInjection && (d = d.reconstructWithOptions(g)), d;
  }, [x.disableCSSOMInjection, x.sheet, x.target, n]), r = Qe(function() {
    var d = {};
    d.namespace = x.namespace, d.prefix = x.enableVendorPrefixes;
    var g = {};
    return g.options = d, g.plugins = t, rc(g);
  }, [x.enableVendorPrefixes, x.namespace, t]);
  Ie(function() {
    Zd(t, x.stylisPlugins) || e(x.stylisPlugins);
  }, [x.stylisPlugins]);
  var a = Qe(function() {
    var d = {};
    return d.shouldForwardProp = x.shouldForwardProp, d.styleSheet = o, d.stylis = r, d;
  }, [x.shouldForwardProp, o, r]), s = {};
  s.value = a;
  var c = {};
  return c.value = r, g0.createElement(rr.Provider, s, g0.createElement(ku.Provider, c, x.children));
}
var Sa = function() {
  function x(i, t) {
    var e = this;
    this.inject = function(n, o) {
      void (-5980 + 46 * 130) === o && (o = Io);
      var r = e.name + o.hash;
      n.hasNameForId(e.id, r) || n.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = t, or(this, function() {
      throw _0(149 + 1023 * -3 + 2932, String(e.name));
    });
  }
  return x.prototype.getName = function(i) {
    return void (828 + -227 * 23 + 4393) === i && (i = Io), this.name + i.hash;
  }, x;
}(), Zu = function(x) {
  return x >= "A" && x <= "Z";
};
function wa(x) {
  for (var i = "", t = 0; t < x.length; t++) {
    var e = x[t];
    if (3456 + 6129 * -1 + 2674 === t && e === "-" && x[-6443 + -1 * 3027 + -2 * -4735] === "-") return x;
    Zu(e) ? i += "-" + e.toLowerCase() : i += e;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var ac = function(x) {
  return x == null || x === !1 || x === "";
}, sc = function(x) {
  var i, t, e = [];
  for (var n in x) {
    var o = x[n];
    x.hasOwnProperty(n) && !ac(o) && (Array.isArray(o) && o.isCss || N0(o) ? e.push("".concat(wa(n), ":"), o, ";") : Y0(o) ? e.push.apply(e, T0(T0(["".concat(n, " {")], sc(o), !1), ["}"], !1)) : e.push("".concat(wa(n), ": ").concat((i = n, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || i in Qd || i.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function s0(x, i, t, e) {
  if (ac(x)) return [];
  if (ir(x)) return [".".concat(x.styledComponentId)];
  if (N0(x)) {
    if (!N0(o = x) || o.prototype && o.prototype.isReactComponent || !i) return [x];
    var n = x(i);
    return z.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof Sa || Y0(n) || n === null || console.error("".concat(qs(x), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), s0(n, i, t, e);
  }
  var o;
  return x instanceof Sa ? t ? (x.inject(t, e), [x.getName(e)]) : [x] : Y0(x) ? sc(x) : Array.isArray(x) ? Array.prototype.concat.apply(fi, x.map(function(r) {
    return s0(r, i, t, e);
  })) : [x.toString()];
}
function Hu(x) {
  for (var i = 0; i < x.length; i += -14735 + 614 * 24) {
    var t = x[i];
    if (N0(t) && !ir(t)) return !1;
  }
  return !0;
}
var Ru = zs(Ii), Ku = function() {
  function x(i, t, e) {
    this.rules = i, this.staticRulesId = "", this.isStatic = z.NODE_ENV === "production" && (void (4787 * -1 + -2707 * -1 + 2080) === e || e.isStatic) && Hu(i), this.componentId = t, this.baseHash = $t(Ru, t), this.baseStyle = e, ic.registerId(t);
  }
  return x.prototype.generateAndInjectStyles = function(i, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = t0(n, this.staticRulesId);
      else {
        var o = va(s0(this.rules, i, t, e)), r = uo($t(this.baseHash, o) >>> -2516 + -41 * -64 + -3 * 36);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        n = t0(n, r), this.staticRulesId = r;
      }
    else {
      for (var s = $t(this.baseHash, e.hash), c = "", d = 0; d < this.rules.length; d++) {
        var g = this.rules[d];
        if (typeof g == "string") c += g, z.NODE_ENV !== "production" && (s = $t(s, g));
        else if (g) {
          var C = va(s0(g, i, t, e));
          s = $t(s, C + d), c += C;
        }
      }
      if (c) {
        var u = uo(s >>> 0);
        t.hasNameForId(this.componentId, u) || t.insertRules(this.componentId, u, e(c, ".".concat(u), void (-9693 + 833 * -10 + 18023), this.componentId)), n = t0(n, u);
      }
    }
    return n;
  }, x;
}(), cc = g0.createContext(void 0);
cc.Consumer;
var Li = {}, Ba = /* @__PURE__ */ new Set();
function Pu(x, i, t) {
  var e = ir(x), n = x, o = !Ei(x), r = i.attrs, a = void (14 * -161 + 9049 + -6795) === r ? fi : r, s = i.componentId, c = void (2901 + 2447 * -1 + -2 * 227) === s ? function(M, J) {
    var H = typeof M != "string" ? "sc" : ha(M);
    Li[H] = (Li[H] || -1 * -8959 + -4439 * 2 + 27 * -3) + 1;
    var re = "".concat(H, "-").concat(xu(Ii + H + Li[H]));
    return J ? "".concat(J, "-").concat(re) : re;
  }(i.displayName, i.parentComponentId) : s, d = i.displayName, g = void (2949 * -1 + 4021 + 8 * -134) === d ? function(M) {
    return Ei(M) ? "styled.".concat(M) : "Styled(".concat(qs(M), ")");
  }(x) : d, C = i.displayName && i.componentId ? "".concat(ha(i.displayName), "-").concat(i.componentId) : i.componentId || c, u = e && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, p = i.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var b = n.shouldForwardProp;
    if (i.shouldForwardProp) {
      var A = i.shouldForwardProp;
      p = function(M, J) {
        return b(M, J) && A(M, J);
      };
    } else p = b;
  }
  var l = new Ku(t, C, e ? n.componentStyle : void 0);
  function W(M, J) {
    return function(H, re, U) {
      var te = H.attrs, Le = H.componentStyle, Ke = H.defaultProps, Pt = H.foldedComponentIds, Xt = H.styledComponentId, Ze = H.target, rt = g0.useContext(cc), jn = fo(), f0 = H.shouldForwardProp || jn.shouldForwardProp;
      z.NODE_ENV !== "production" && Zx(Xt);
      var Q0 = $d(re, rt, Ke) || D0, qe = function(p0, Xe, ft) {
        var $e = {};
        $e.className = void (6452 * -1 + 58 * -106 + 12600), $e.theme = ft;
        for (var Mt, Ct = je(je({}, Xe), $e), at = 172 * -1 + -55 * -91 + -4833; at < p0.length; at += -858 + -2 * -2582 + -7 * 615) {
          var _t = N0(Mt = p0[at]) ? Mt(Ct) : Mt;
          for (var st in _t) Ct[st] = st === "className" ? t0(Ct[st], _t[st]) : st === "style" ? je(je({}, Ct[st]), _t[st]) : _t[st];
        }
        return Xe.className && (Ct.className = t0(Ct.className, Xe.className)), Ct;
      }(te, re, Q0), Wt = qe.as || Ze, Tt = {};
      for (var Pe in qe) qe[Pe] === void 0 || Pe[-2074 * 4 + 9397 + -1101 * 1] === "$" || Pe === "as" || Pe === "theme" && qe.theme === Q0 || (Pe === "forwardedAs" ? Tt.as = qe.forwardedAs : f0 && !f0(Pe, Wt) || (Tt[Pe] = qe[Pe], f0 || z.NODE_ENV !== "development" || Xg(Pe) || Ba.has(Pe) || !go.has(Wt) || (Ba.add(Pe), console.warn('styled-components: it looks like an unknown prop "'.concat(Pe, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var z0 = function(p0, Xe) {
        var ft = fo(), $e = p0.generateAndInjectStyles(Xe, ft.styleSheet, ft.stylis);
        return z.NODE_ENV !== "production" && Zx($e), $e;
      }(Le, qe);
      z.NODE_ENV !== "production" && H.warnTooManyClasses && H.warnTooManyClasses(z0);
      var C0 = t0(Pt, Xt);
      return z0 && (C0 += " " + z0), qe.className && (C0 += " " + qe.className), Tt[Ei(Wt) && !go.has(Wt) ? "class" : "className"] = C0, Tt.ref = U, Ee(Wt, Tt);
    }(K, M, J);
  }
  W.displayName = g;
  var K = g0.forwardRef(W), X = {};
  return X.attrs = !0, X.componentStyle = !0, X.displayName = !0, X.foldedComponentIds = !0, X.shouldForwardProp = !0, X.styledComponentId = !0, X.target = !0, K.attrs = u, K.componentStyle = l, K.displayName = g, K.shouldForwardProp = p, K.foldedComponentIds = e ? t0(n.foldedComponentIds, n.styledComponentId) : "", K.styledComponentId = C, K.target = e ? n.target : x, Object.defineProperty(K, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(M) {
    this._foldedDefaultProps = e ? function(J) {
      for (var H = [], re = -6900 + 6901 * 1; re < arguments.length; re++) H[re - (-507 * -17 + 5586 + 67 * -212)] = arguments[re];
      for (var U = 4828 + 20 * 122 + -7268, te = H; U < te.length; U++) lo(J, te[U], !0);
      return J;
    }({}, n.defaultProps, M) : M;
  } }), z.NODE_ENV !== "production" && (qd(g, C), K.warnTooManyClasses = /* @__PURE__ */ function(M, J) {
    var H = {}, re = !1;
    return function(U) {
      if (!re && (H[U] = !0, Object.keys(H).length >= 7287 + -1 * -6201 + -13288)) {
        var te = J ? ' with the id of "'.concat(J, '"') : "";
        console.warn("Over ".concat(4456 + 94 * 57 + 209 * -46, " classes were generated for component ").concat(M).concat(te, `.
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
  }(g, C)), or(K, function() {
    return ".".concat(K.styledComponentId);
  }), o && nc(K, x, X), K;
}
function Ga(x, i) {
  for (var t = [x[-1626 + 1 * -3676 + 5302]], e = 1492 * 4 + 221 * -5 + 1 * -4863, n = i.length; e < n; e += -131 * 43 + 7967 + -2333) t.push(i[e], x[e + (1702 * 5 + -2730 + -5779)]);
  return t;
}
var ka = function(x) {
  var i = {};
  return i.isCss = !0, Object.assign(x, i);
};
function Tu(x) {
  for (var i = [], t = 18145 + -63 * 288; t < arguments.length; t++) i[t - (4847 + -8227 * 1 + 3381)] = arguments[t];
  if (N0(x) || Y0(x)) return ka(s0(Ga(fi, T0([x], i, !0))));
  var e = x;
  return -16761 + -111 * -151 === i.length && -1193 * 7 + -70 * -15 + 3651 * 2 === e.length && typeof e[1 * 2731 + -3 * 2421 + 4532] == "string" ? s0(e) : ka(s0(Ga(e, i)));
}
function Co(x, i, t) {
  if (void (10 * -942 + 5683 + 101 * 37) === t && (t = D0), !i) throw _0(11499 + -5749 * 2, i);
  var e = function(n) {
    for (var o = [], r = -5728 + 346 * -16 + 11265; r < arguments.length; r++) o[r - 1] = arguments[r];
    return x(i, t, Tu.apply(void (-33 * 92 + 109 * -86 + 12410), T0([n], o, !1)));
  };
  return e.attrs = function(n) {
    return Co(x, i, je(je({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return Co(x, i, je(je({}, t), n));
  }, e;
}
var gc = function(x) {
  return Co(Pu, x);
}, Dn = gc;
go.forEach(function(x) {
  Dn[x] = gc(x);
});
z.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var rx = "__sc-".concat(d0, "__");
z.NODE_ENV !== "production" && z.NODE_ENV !== "test" && typeof window < "u" && (window[rx] || (window[rx] = 1 * 7094 + -4115 + -2979), window[rx] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[rx] += -3269 + -3793 * -2 + 1079 * -4);
const Vu = Dn.div`
  position: relative;
`, Eu = Dn.video`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(x) => x.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class oe extends Error {
  constructor(t, e) {
    super(t);
    E(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof oe) return t;
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
    return new oe(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof oe) return t;
    const e = "An unexpected error has occurred";
    return new oe(e);
  }
}
const vx = {};
vx.CONTINUE_DETECTION = "continue-detection", vx.SWITCH_CAMERA = "switch-camera", vx.TOGGLE_MIRROR = "toggle-mirror";
const Di = vx, po = {};
po.FIRST_FRAME = "first-frame", po.FIRST_VALID_FRAME = "first-valid-frame";
const Ni = po, dc = {};
dc.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Oa = dc;
var uc = ((x) => (x.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", x.CONTROL = "document-auto-capture:control", x.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", x.DOCUMENT_DETECTION = "document-auto-capture:document-detection", x.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", x.STATE_CHANGED = "document-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", x))(uc || {}), Ht = ((x) => (x.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", x.CONTROL = "face-auto-capture:control", x.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", x.FACE_DETECTION = "face-auto-capture:face-detection", x.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", x.STATE_CHANGED = "face-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", x))(Ht || {}), Lu = ((x) => (x.ANIMATION_END = "magnifeye-auto-capture:animation-end", x.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", x))(Lu || {}), Du = ((x) => (x.STATUS_CHANGED = "smile-auto-capture:status-changed", x))(Du || {}), Nu = ((x) => (x.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", x.CONTROL = "palm-capture:control", x.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", x.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", x.STATE_CHANGED = "palm-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", x))(Nu || {}), Yu = ((x) => (x.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", x))(Yu || {});
const lc = {};
lc.EYE_NOT_PRESENT = "eye_not_present";
const Za = lc, Ve = {};
Ve.CANDIDATE_SELECTION = "candidate_selection", Ve.FACE_TOO_CLOSE = "face_too_close", Ve.FACE_TOO_FAR = "face_too_far", Ve.FACE_CENTERING = "face_centering", Ve.FACE_NOT_PRESENT = "face_not_present", Ve.SHARPNESS_TOO_LOW = "sharpness_too_low", Ve.BRIGHTNESS_TOO_LOW = "brightness_too_low", Ve.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Ve.DEVICE_PITCHED = "device_pitched", Ve.LEFT_EYE_NOT_PRESENT = "left_" + Za.EYE_NOT_PRESENT, Ve.RIGHT_EYE_NOT_PRESENT = "right_" + Za.EYE_NOT_PRESENT, Ve.MOUTH_NOT_PRESENT = "mouth_not_present", Ve.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", Ve.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const be = Ve, Ne = {};
Ne.isPresent = be.FACE_NOT_PRESENT, Ne.isNotPitched = be.DEVICE_PITCHED, Ne.isNotSmall = be.FACE_TOO_FAR, Ne.isNotLarge = be.FACE_TOO_CLOSE, Ne.isNotOutOfBounds = be.FACE_CENTERING, Ne.isNotDim = be.BRIGHTNESS_TOO_LOW, Ne.isNotBright = be.BRIGHTNESS_TOO_HIGH, Ne.isSharp = be.SHARPNESS_TOO_LOW, Ne.isLeftEyePresent = be.LEFT_EYE_NOT_PRESENT, Ne.isRightEyePresent = be.RIGHT_EYE_NOT_PRESENT, Ne.isMouthPresent = be.MOUTH_NOT_PRESENT, Ne.isMouthScoreNotTooHigh = be.MOUTH_SCORE_TOO_HIGH, Ne.isMouthScoreNotTooLow = be.MOUTH_SCORE_TOO_LOW;
const Fu = Ne, ho = {};
ho.FRONT = "user", ho.REAR = "environment";
const ar = ho, mo = {};
mo.AUTO_CAPTURE = "AUTO_CAPTURE", mo.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const Ic = mo, sn = {};
sn.LOADING = "LOADING", sn.ERROR = "ERROR", sn.WAITING = "WAITING", sn.RUNNING = "RUNNING";
const Je = sn;
({ ...be });
var ju = ((x) => (x.CLOSEUP = "CLOSEUP", x.DISTANT = "DISTANT", x.MIDDLE = "MIDDLE", x))(ju || {});
({ ...be });
({ ...be });
const Ci = Ln(void 0);
Ci.displayName = "AppStateContext";
function Nn() {
  const x = l0(Ci);
  if (x === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return x;
}
const Xu = Ci.Provider;
class fc extends nt {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const i = new oe("An unknown error has occurred");
    (t = this.context) == null || t.handleError(i);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var i;
    return ((i = this.context) == null ? void 0 : i.appState) === Je.ERROR ? null : this.props.children;
  }
}
E(fc, "contextType", Ci);
const Mu = Dn.canvas`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, _u = Dn.div`
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
function Ju() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Uu = ks(
  ({ detectionDetails: x, isImageMirror: i }, t) => Ju() ? (console.log(x), /* @__PURE__ */ O(it, { children: [
    /* @__PURE__ */ O(Mu, { ref: t, $isImageMirror: i }),
    /* @__PURE__ */ O(_u, { children: Object.entries(x).map(([e, n]) => /* @__PURE__ */ O("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ O("strong", { children: n })
    ] }, e)) })
  ] })) : null
), Kx = Ln(void 0);
Kx.displayName = "AnalyticsContext";
function Qu() {
  const x = l0(Kx);
  if (x === void 0)
    throw new Error(`${Kx.displayName} must be used within a AnalyticsProvider`);
  return x;
}
function zu(x, i, t, e, n) {
  return ye(t - -125, x);
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return ye(s - 72, d);
  }
  function e(s, c, d, g, C) {
    return ye(C - -9, s);
  }
  const n = x();
  function o(s, c, d, g, C) {
    return ye(d - 120, C);
  }
  function r(s, c, d, g, C) {
    return ye(C - 634, s);
  }
  function a(s, c, d, g, C) {
    return ye(c - -619, d);
  }
  for (; ; )
    try {
      if (parseInt(r("fxsV", 1052, 1048, 1043, 1047)) / 1 * (-parseInt(r("71xW", 1056, 1061, 1063, 1069)) / 2) + parseInt(t(502, 504, "a6op", 521, 507)) / 3 + -parseInt(a(-207, -205, "!Oko", -209, -212)) / 4 * (-parseInt(e("a6op", 419, 421, 424, 411)) / 5) + -parseInt(o(559, 535, 549, 555, "Z7zv")) / 6 * (-parseInt(r("(QBf", 1061, 1077, 1086, 1074)) / 7) + -parseInt(t(482, 477, "YN9t", 493, 475)) / 8 + parseInt(o(568, 570, 565, 547, "ewNa")) / 9 * (-parseInt(o(548, 551, 561, 544, "53H&")) / 10) + parseInt(a(-201, -197, "BOos", -192, -202)) / 11 === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Px, -1184173 + 51206 * 11 + 1 * 1289422);
function Px() {
  const x = ["imoldr5TWRX2WP/dL0/cHua8", "WP9BW7nJrq", "amkMW6vIytf3dmkfW73dNse", "d8kbydtdJq", "W5mJWRG8pdJdIt4", "dclcSW", "vajsW6ldHbxdRXblW7xdUsff", "yH1aCbRcOKZcUSkFvW", "o3RcN0/dO0ZcS3uj", "W4vxW4bBW4ddMCoFW5n1", "W4WfWRjsxGtcT1uE", "WO/dI8oCW4xcHq", "W5RdV8oYWP4QEc5jF8kCk8kGCq", "y8kiw8oaWQ0", "W7hcV8kLefG", "cmkFlM1A", "eCo5DYfeB1eJCmkpWRa", "W4ldUbldMSk1uSk0yaCgWR4", "DCoqW5SksCkck8oytCovaWBcJCou", "WR8gW7KQW5q", "x8oEWQiZWQm", "x8oahgBcKgmKWOxdTmk3rLO+W4G", "b8kCW6BdU8kzvNzamr13W7pdVa", "W7rDuZybfsRcUmkpWQpdM8okmq", "f8k/W7TGW5G", "v8kYcufEW6ZdOW", "eSo5DYbhadmZECkvWRXrW68", "AbDarZq", "WPmeWPX6W6a", "WRGlg3C", "ESkMWPtdLu1RW7FdTa", "W6ddKmoHfalcLctdJaS3", "oXbbrZy", "WRZcO0xcJmoU", "cI7dVMrUcmkq", "W4FdVrtcQmo3x8kUuWa", "W53dV8o6WPWJDh91umkPbSki"];
  return Px = function() {
    return x;
  }, Px();
}
function Ha(x, i, t, e, n) {
  return ye(e - 627, t);
}
function ye(x, i) {
  const t = Px();
  return ye = function(e, n) {
    e = e - (-394 + 11 * 73);
    let o = t[e];
    if (ye.XTXsun === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      ye.uZAwFN = d, x = arguments, ye.XTXsun = !0;
    }
    const a = t[-736 + -139 * 2 + -169 * -6], s = e + a, c = x[s];
    return c ? o = c : (ye.hMrAUu === void 0 && (ye.hMrAUu = !0), o = ye.uZAwFN(o, n), x[s] = o), o;
  }, ye(x, i);
}
const Tx = Ln(void (2 * -3068 + -8744 + -62 * -240));
function qu(x, i, t, e, n) {
  return ye(t - 463, i);
}
Tx[Ra(883, 912, "@^4A", 901) + Ra(901, 882, "A10A", 892) + "e"] = zu("zHZu", 314, 312) + Ha(1030, 1032, "Clvj", 1044) + Ha(1054, 1044, "zW(Z", 1060);
function Ra(x, i, t, e, n) {
  return ye(e - 477, t);
}
function ax(x, i, t, e, n) {
  return ye(i - 490, e);
}
function Yn() {
  function x(r, a, s, c, d) {
    return ax(r - 470, r - -1076, s - 141, a);
  }
  const i = l0(Tx);
  function t(r, a, s, c, d) {
    return ax(r - 26, s - -507, s - 180, d);
  }
  function e(r, a, s, c, d) {
    return ax(r - 240, r - -301, s - 162, d);
  }
  function n(r, a, s, c, d) {
    return ax(r - 497, r - 165, s - 490, d);
  }
  if (i === void (8273 * 1 + -7 * -1423 + -2 * 9117)) throw new Error(Tx[o(-363, "!Oko") + e(633, 616, 631, 641, "lXNB") + "e"] + (n(1078, 1088, 1066, 1091, "kR!h") + x(-150, "6cOT", -167) + n(1086, 1097, 1069, 1099, "6cOT") + t(399, 417, 402, 417, "Z7zv") + n(1083, 1077, 1073, 1075, "f(kH") + n(1087, 1077, 1075, 1099, "fxsV") + x(-168, "WD!D", -162) + x(-177, "xGx]", -160)));
  function o(r, a, s, c, d) {
    return qu(r - 204, a, r - -1268);
  }
  return i;
}
function Be(x, i) {
  const t = Vx();
  return Be = function(e, n) {
    e = e - (-1343 + -1726 * -1);
    let o = t[e];
    if (Be.pFrZFz === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Be.pLJcve = d, x = arguments, Be.pFrZFz = !0;
    }
    const a = t[-618 * -1 + 9806 + -10424], s = e + a, c = x[s];
    return c ? o = c : (Be.tcOGgJ === void 0 && (Be.tcOGgJ = !0), o = Be.pLJcve(o, n), x[s] = o), o;
  }, Be(x, i);
}
(function(x, i) {
  const t = x();
  function e(s, c, d, g, C) {
    return Be(d - 775, C);
  }
  function n(s, c, d, g, C) {
    return Be(s - -61, d);
  }
  function o(s, c, d, g, C) {
    return Be(C - -742, g);
  }
  function r(s, c, d, g, C) {
    return Be(d - 72, C);
  }
  function a(s, c, d, g, C) {
    return Be(g - -407, s);
  }
  for (; ; )
    try {
      if (parseInt(a("8q@y", -16, -26, -21, -20)) / 1 * (parseInt(a("TXIf", -6, -3, -16, -3)) / 2) + parseInt(r(476, 469, 481, 485, "Vqvg")) / 3 * (parseInt(e(1184, 1185, 1183, 1191, "5Eh]")) / 4) + parseInt(o(-349, -337, -340, "9)^s", -345)) / 5 + parseInt(a("#qYR", -31, -27, -24, -36)) / 6 + -parseInt(a("8q@y", -36, -28, -22, -27)) / 7 + -parseInt(n(327, 320, "s!nS", 331, 321)) / 8 + -parseInt(n(342, 334, "]fOP", 333, 332)) / 9 * (-parseInt(r(459, 477, 470, 471, "H37k")) / 10) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Vx, 781471);
function Vx() {
  const x = ["WPC0wg/cKmkyn2xcSdintq", "t8oUgSkuWO/dPrhcPwldKxG", "W67cNXxcHbNcJSoBWRi", "W6bqW4uGW55uW783dGldN8o1", "WQr4Ed9Z", "W7ePW7dcKmoSwSkRjwPp", "W6rupCk4W4CeWQFdM8ofggmr", "W4uge8kfW7BcTJhcJ0fW", "W70PowOJW6KZWRhdMmkFthJdHcS", "E1Sqn8ke", "vCkbz8kOWPDvjW", "DCk0W5n9WPtdHSoAg8o9bSoGW6X8", "lCoeWOmWysaBkNabW7y", "WQddN8opWPS9WPBcLCoEW7G2hSklWOu", "W4tdL8kPWRW", "WQT8EbbY", "W4esbSkSpG", "jSkdW7ekpYldU3K", "W77cNSouWOZdUM9NW7xcGmoAW6S", "WOVcN21XvmoQrmoVFmo8WPldNr0", "WQFdO8oOmgilWOBdLuNcT1Lo", "WPtcJvHKW7yNnxBdGKPKW5tcImkf", "WPFdVcuiWOLrya", "WPJdJ8kqW4NcPq", "W7OOW7lcMmkgnmoBhLrPWPFcVNG", "AIFcL8krfCoQnSo5W5tcTd8", "gmkOqSoxW48"];
  return Vx = function() {
    return x;
  }, Vx();
}
function $u({ licensePath: x, bramble: i, wasmDirectoryPath: t }) {
  const [e, n] = Ue();
  function o(c, d, g, C, u) {
    return Be(d - -589, c);
  }
  const r = e !== void (-165 * 53 + 1 * 2606 + -877 * -7);
  Ie(() => {
    async function c() {
      function d(C, u, p, b, A) {
        return Be(C - 898, u);
      }
      await i[g(202, 184, 185, 191, "MjHS")](t, x);
      function g(C, u, p, b, A) {
        return Be(b - -214, A);
      }
      n(i[g(203, 194, 196, 192, "dTY)") + g(206, 185, 201, 193, "$u16") + d(1285, "Vqvg") + "t"]());
    }
    c();
  }, [i, t, x, n]);
  const a = {};
  a[s(256, 249, 261, "OAOU") + o("dTY)", -194)] = e;
  function s(c, d, g, C, u) {
    return Be(d - -141, C);
  }
  return a[o("KAyW", -189) + "sh"] = r, a;
}
var Cc = ((x) => (x.DOCUMENT = "document-auto-capture:dev", x.FACE = "face-auto-capture:dev", x.PALM = "palm-capture:dev", x))(Cc || {});
const bo = {};
bo.SIMD = "simd", bo.NO_SIMD = "no-simd";
const Ka = bo, Ao = {};
Ao.Lower = "Lower", Ao.Higher = "Higher";
const yo = Ao, Wx = {};
Wx.VISIBLE = "VISIBLE", Wx.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", Wx.HIDDEN = "HIDDEN";
const Ex = Wx;
function Ye(x, i) {
  var t = Lx();
  return Ye = function(e, n) {
    e = e - (-2 * 3342 + 8231 + 5 * -274);
    var o = t[e];
    if (Ye.MtuDdE === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", b = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (var K = 0, X = u.length; K < X; K++)
          p += "%" + ("00" + u.charCodeAt(K).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, C) {
        var u = [], p = 0, b, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (var W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Ye.FfSMGR = a, x = arguments, Ye.MtuDdE = !0;
    }
    var s = t[33 * -299 + -1 * 2114 + 11981], c = e + s, d = x[c];
    return d ? o = d : (Ye.LtWWAl === void 0 && (Ye.LtWWAl = !0), o = Ye.FfSMGR(o, n), x[c] = o), o;
  }, Ye(x, i);
}
(function(x, i) {
  var t = x();
  function e(s, c, d, g, C) {
    return Ye(c - -930, s);
  }
  function n(s, c, d, g, C) {
    return Ye(d - 194, C);
  }
  function o(s, c, d, g, C) {
    return Ye(g - -477, C);
  }
  function r(s, c, d, g, C) {
    return Ye(g - -645, s);
  }
  for (; ; )
    try {
      var a = -parseInt(o(-279, -283, -301, -291, "#nAf")) / 1 + -parseInt(o(-274, -280, -286, -278, "J4L9")) / 2 + parseInt(e("XiQQ", -742, -733, -746, -752)) / 3 * (-parseInt(n(384, 394, 390, 380, "L0$S")) / 4) + -parseInt(e("v1IO", -743, -748, -734, -748)) / 5 * (parseInt(r("Zj[a", -449, -456, -451, -446)) / 6) + parseInt(n(373, 397, 385, 394, ")sMO")) / 7 * (-parseInt(n(385, 383, 376, 385, "XMy4")) / 8) + -parseInt(n(384, 370, 375, 376, "MpbF")) / 9 * (parseInt(e("FNrZ", -741, -731, -750, -734)) / 10) + parseInt(r("$Ef#", -454, -446, -453, -445)) / 11;
      if (a === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Lx, 1 * 76033 + 2 * 2270 + 4 * 13068);
function el({ crosshatch: x }) {
  function i(e, n, o, r, a) {
    return Ye(r - 416, o);
  }
  function t(e, n, o, r, a) {
    return Ye(o - 555, r);
  }
  return x != null && x[i(621, 612, "v1IO", 616) + "id"] ? yo[t(735, 732, 735, "N*n@") + "r"] : yo[i(603, 593, "Cs^t", 600)];
}
function Lx() {
  var x = ["WROeWQatDrDcc8o/rc4dyMa", "WRhcJmotW4NdJK1jx8kOFa", "mCkvW5a7WR/cQJNdIeDMExBcRW", "mCoxWR8phqLxBG", "vL7dNYy6WQZdTSkAW67dKCkSma", "WOtdMffCW6HtgG", "rGqyW5yVWQrHpCkSifu+", "gmkCWRbrWP1ZvSkgW7hcG8kWoq", "dZVcHSolAG", "qGyBW5GIWQ5zn8k4ffqH", "zSobW5xcPSkPW6dcMW", "W6dcHqtdGHxdVSkaWR3cIZC", "WQLOCSouWPS", "W7yco8oPW47dIwpdGW", "W4ZcML7cHJZcUcxcQSotWOi", "cWq8m8oXWPlcLCkfW6fIWOn6W4u", "odzRW5mv", "q8k7h8kyyCkNkHCmW5n7W7e", "W73cNSo3W73dQWddOc8/W4tcSHi", "uYhcSCoaqbNcGq", "WORdLsRdGWr/iq", "zSkCWOxdTCozWQxcKbDuc3ddLq", "rwOTWOfuW6rWW5tcPSoYvffOWOK", "WPqgW4rRW7GPhI3cJZu"];
  return Lx = function() {
    return x;
  }, Lx();
}
(function(x, i) {
  const t = x();
  function e(a, s, c, d, g) {
    return Re(a - -255, g);
  }
  function n(a, s, c, d, g) {
    return Re(g - -511, s);
  }
  function o(a, s, c, d, g) {
    return Re(d - -715, s);
  }
  function r(a, s, c, d, g) {
    return Re(a - 730, d);
  }
  for (; ; )
    try {
      if (parseInt(r(1150, 1157, 1151, "E$4z", 1150)) / 1 * (-parseInt(r(1154, 1153, 1145, "XLt7", 1155)) / 2) + -parseInt(n(-113, "a1&j", -111, -108, -97)) / 3 + parseInt(n(-114, "sfpM", -84, -112, -99)) / 4 + parseInt(e(160, 145, 149, 174, "E$4z")) / 5 + parseInt(r(1133, 1127, 1120, "x[tN", 1144)) / 6 + -parseInt(o(-304, "yPoZ", -299, -290, -289)) / 7 * (-parseInt(r(1140, 1146, 1148, "$qma", 1140)) / 8) + -parseInt(o(-327, "Ksnk", -321, -313, -303)) / 9 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Dx, -191102 + -327 * -1967 + -1777 * 1);
function Re(x, i) {
  const t = Dx();
  return Re = function(e, n) {
    e = e - 395;
    let o = t[e];
    if (Re.VlaYUh === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Re.jbEBxO = d, x = arguments, Re.VlaYUh = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? o = c : (Re.IctLNK === void 0 && (Re.IctLNK = !0), o = Re.jbEBxO(o, n), x[s] = o), o;
  }, Re(x, i);
}
function Dx() {
  const x = ["D8o0ytRdOq", "WONcRCkqWRftsha", "W7KVW65zmZelDW", "WQVcLmo5eqa", "tCoEWQdcUCok", "WOxdKMW6aa", "d3JdPsu+W7fM", "W6y2W74lWPGOwLqyW51PWOO", "wCk7mmkxiG", "WQ4wWPL6uG", "qCkWWQG1gmkhdmo/W4DdW4BdHtXj", "a3G+WO7dOCkpWQyYnmkqW4yZ", "DCkpnG", "m8osAXJdJvVdGIZdL3hcLsS", "WOGYWPTTWQy", "pmkom8owrmofy8kGW4RcRgtdHa", "y3fBFCoP", "emk3oxVcU8kbvbZcVSkjW7u", "WOLyDweJbdhcQ3X3WQvt", "W7nlW4KSdgpdKgyzW5tcQmoyW7D5", "W67dVSkLW4tdU1CSWPydWOZdQCotWQy", "WO9FFMaQbudcSg5LWPzNWRW", "g8kuW7ldRCkyWO7dMmoPW7lcTCoaAG", "bSkMWOTCtMtcJHbpW6RcMIRcIq", "e8oSW7jQta", "WQ3cSCoYE8oNFxhdTW", "yIddJNxdRG", "jCo2W7hcSSkY", "aSkIWO5stcldScjCW4xcKa", "W4xcUG4", "W7iPWOW3FKPaugqmhCoBW6q"];
  return Dx = function() {
    return x;
  }, Dx();
}
function tl({ children: x, licensePath: i, bramble: t, wasmDirectoryPath: e }) {
  const n = {};
  function o(p, b, A, l, W) {
    return Re(p - -988, l);
  }
  n[a(-72, -56, -49, -57, "a1&j") + "le"] = t;
  function r(p, b, A, l, W) {
    return Re(p - 219, W);
  }
  n[a(-65, -51, -57, -61, "Scks") + a(-59, -57, -65, -55, "33)U") + "h"] = i;
  function a(p, b, A, l, W) {
    return Re(b - -452, W);
  }
  n[a(-56, -52, -54, -42, "@5FG") + o(-570, -561, -556, "]jY&") + g(-280, -283, -299, "BE)T") + "th"] = e;
  const { sunfish: s, crosshatch: c } = $u(n), d = {};
  function g(p, b, A, l, W) {
    return Re(b - -689, l);
  }
  d[g(-273, -270, -266, "Ff53") + g(-299, -292, -286, "rDh%")] = c;
  const C = Qe(() => ({ redfin: el(d), sunfish: s, crosshatch: c, bramble: t }), [s, c, t]), u = {};
  return u[r(627, 630, 640, 634, "EQoE")] = C, u[g(-268, -273, -269, "Ksnk") + r(623, 628, 631, 635, "i)(J")] = x, O(Tx[g(-251, -266, -261, "lszE") + a(-22, -31, -38, -37, "Nfiu")], u);
}
function _e(x, i) {
  var t = Nx();
  return _e = function(e, n) {
    e = e - (-11 * -271 + -5413 + 2591);
    var o = t[e];
    if (_e.QSqUOg === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", b = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (var K = 0, X = u.length; K < X; K++)
          p += "%" + ("00" + u.charCodeAt(K).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, C) {
        var u = [], p = 0, b, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (var W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      _e.MqtHEF = a, x = arguments, _e.QSqUOg = !0;
    }
    var s = t[-3485 * -1 + -1794 + -1691], c = e + s, d = x[c];
    return d ? o = d : (_e.IRotgB === void 0 && (_e.IRotgB = !0), o = _e.MqtHEF(o, n), x[c] = o), o;
  }, _e(x, i);
}
function Nx() {
  var x = ["W4aMWQNcN8kHiwuTaGpdT8kjpW", "WRZcTwBcUrJcJSoYzrFdVCoXcq", "kSkyeCk5fLBdSaS", "W5SdW78FDSodWO8TBmooh8oi", "k8odW5SCvh/dUqy", "zSohxrFcTG0/eSkPWP/dT8k0", "W4uUWQBcM8kNiMqiaa/dR8kqaG", "WR7cTgpcVX7cISkoxc7dJSoWasG", "W5BcGbldPetcOmk0ra", "zK7dRvpcQwe4W4W8WRhdRhW", "kCkjlfFdVCoFjSk0E8kHWPLq", "W5frW4ZcQXiSWRabW6ubW5/cQG", "W6VcGc7cN8o3hhzemxilW7e", "pLiWW73dOLyUDtJcLgxcRmoA", "kmkflfFdUmoBFSkprmk5WOrYWPu", "zZdcTIpdOq0w", "hSkgrwlcMWJcK1i", "WP4Ql8oiW7ddOIfsiCk1WR1ukW", "Cs0ql8oJWPBdLG", "g8ojW4DuWQLGp3tcM8kSvSoD", "CLSnp8oaWORdKr0", "Bh1zW6NcKCoUyt4"];
  return Nx = function() {
    return x;
  }, Nx();
}
(function(x, i) {
  function t(c, d, g, C, u) {
    return _e(u - -361, d);
  }
  function e(c, d, g, C, u) {
    return _e(d - -666, g);
  }
  function n(c, d, g, C, u) {
    return _e(d - 668, C);
  }
  function o(c, d, g, C, u) {
    return _e(d - 883, g);
  }
  function r(c, d, g, C, u) {
    return _e(g - 253, c);
  }
  for (var a = x(); ; )
    try {
      var s = parseInt(n(831, 835, 827, "yqpX", 841)) / 1 * (-parseInt(t(-189, "5wgm", -186, -202, -195)) / 2) + -parseInt(t(-205, "Sdyu", -205, -207, -202)) / 3 * (-parseInt(o(1053, 1061, "tk0L", 1054, 1069)) / 4) + parseInt(r("*xYV", 431, 424, 422, 416)) / 5 * (-parseInt(o(1038, 1047, "f@E)", 1039, 1045)) / 6) + parseInt(r("*xYV", 437, 430, 441, 426)) / 7 + -parseInt(n(825, 833, 838, "d!js", 828)) / 8 + parseInt(e(-502, -504, ")Uxy", -513, -515)) / 9 + parseInt(n(831, 836, 826, "5wgm", 844)) / 10 * (-parseInt(o(1069, 1058, "qC6a", 1069, 1055)) / 11);
      if (s === i) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Nx, -244301 * -1 + -125745 + 231974);
function nl({ analytics: x, crosshatch: i }) {
  return i !== void (-37 * -59 + -3282 * 2 + 4381) && !i.isAnalyticsDisabled ? x : void 0;
}
function xl({ analytics: x, appKey: i, redfin: t, crosshatch: e, bramble: n }) {
  const o = {};
  o.analytics = x, o.crosshatch = e;
  const r = nl(o);
  return Ie(() => {
    r && r.init(i);
  }, [r, i]), Ie(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), r && r.walleye(t, n.getCustomerName()));
  }, [r, n, e, t]), Ie(() => {
    if (r)
      return window.addEventListener("beforeunload", r.endSession), () => {
        r.endSession(), window.removeEventListener("beforeunload", r.endSession);
      };
  }, [r]), r;
}
function il({
  analytics: x,
  appKey: i,
  children: t
}) {
  const { redfin: e, crosshatch: n, bramble: o } = Yn(), r = xl({ analytics: x, redfin: e, appKey: i, crosshatch: n, bramble: o }), a = Qe(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ O(Kx.Provider, { value: a, children: t });
}
const ol = 502 * 11 + 479 * -8 + -1690 + 0.4, rl = 6214 + 13 * -478 + 0.16, al = 2553 + -79 * -122 + -12191 * 1 + 0.2, sl = 5771 + -8 * 879 + 1261 + 0.05, cl = 9198 + -4 * 138 + -22 * 393, vo = {};
vo.min = -(-2506 + -1 * -2507), vo.max = 1;
const Pa = vo, Ta = 2691 + -299 * 9, gl = 0 + 0.3, dl = 134 * 20 + -8222 + 5542 + 0.2, ul = 8 * -463 + -4079 * -1 + -15 * 25 + 0.85, ll = -1 * -6122 + 3391 + -9483, Il = 1 * -5722 + -1402 + 7133 + 0.8100000000000005, Sx = {};
Sx.minDuration = 1e3, Sx.maxDuration = 2500, Sx.minFrames = 10;
const Yi = Sx, Wo = {};
Wo.max = 100, Wo.min = 10;
const Va = Wo, fl = 72 * -11 + 2 * -2003 + 62 * 89, Cl = 4959 + 253 * 25 + -4 * 2771, pl = -4478 + -37 * 205 + 12067, pc = "AES-CBC", hc = "RSA-OAEP", hl = "SHA-256", ml = "image/jpeg", bl = -2791 + -3 * -933, Al = -1239 + 1 * -157 + 1436, yl = "SAM v1.40.4 for idcards", vl = "dot_embedded_bg.wasm", mc = Ln(null), sr = () => {
  const x = l0(mc);
  if (!x)
    throw new Error("Missing provider for CameraOptionsContext");
  return x;
}, Wl = ({
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
    cameraFacing: x ?? ar.FRONT,
    captureMode: i ?? Ic.AUTO_CAPTURE,
    wasmDirectoryPath: r,
    licensePath: t,
    sessionToken: n,
    thresholds: {
      faceConfidence: (o == null ? void 0 : o.faceConfidence) ?? ol,
      minFaceSizeRatio: (o == null ? void 0 : o.minFaceSizeRatio) ?? rl,
      maxFaceSizeRatio: (o == null ? void 0 : o.maxFaceSizeRatio) ?? al,
      sharpnessThreshold: (o == null ? void 0 : o.sharpnessThreshold) ?? gl,
      brightnessLowThreshold: (o == null ? void 0 : o.brightnessLowThreshold) ?? dl,
      brightnessHighThreshold: (o == null ? void 0 : o.brightnessHighThreshold) ?? ul,
      outOfBoundsThreshold: (o == null ? void 0 : o.outOfBoundsThreshold) ?? sl,
      devicePitchAngleThreshold: (o == null ? void 0 : o.devicePitchAngleThreshold) ?? ll,
      mouth: {
        confidence: ((a = o == null ? void 0 : o.mouth) == null ? void 0 : a.confidence) ?? cl,
        status: {
          min: ((s = o == null ? void 0 : o.mouth) == null ? void 0 : s.status.min) ?? Pa.min,
          max: ((c = o == null ? void 0 : o.mouth) == null ? void 0 : c.status.max) ?? Pa.max
        }
      },
      leftEye: (o == null ? void 0 : o.leftEye) ?? {
        confidence: Ta
      },
      rightEye: (o == null ? void 0 : o.rightEye) ?? {
        confidence: Ta
      }
    }
  };
}, Sl = ({
  cameraOptions: x,
  children: i
}) => {
  const t = Qe(() => Wl(x), [x]);
  return /* @__PURE__ */ O(mc.Provider, { value: t, children: i });
}, bc = -9560 + 27 * -202 + -15014 * -1 + 0.75, wl = 2, Bl = -537 * 18 + -2447 * 1 + -1 * -12713, Gl = -4633 * 2 + 4016 * -1 + -13282 * -1, kl = "dot-auto-capture-video", Ac = (x) => x.length < -1921 * -1 + -8707 * 1 + 6787 ? -1 * -706 + -1 * 6788 + 2 * 3041 : x.reduce((t, e) => t + e, 0) / x.length, J0 = (x) => Number.parseFloat(x.toFixed(-539 * -3 + -1288 * 1 + -326)), Ol = (x) => {
  const i = x.getContext("2d");
  i && i.clearRect(665 + -1 * 194 + -471 * 1, 1 * 6827 + 2 * 502 + 7831 * -1, i.canvas.width, i.canvas.height);
}, pi = (x, i) => Math.min(x, i), yc = ({ height: x, width: i }, t) => {
  const e = pi(i, x) * t, n = (i - e) / (4142 * -1 + -183 * -13 + 5 * 353), o = (x - e) / (2 * -768 + -5234 + 6772), r = {};
  return r.shiftX = n, r.shiftY = o, r.width = e, r.height = e, r;
}, Zl = (x, i) => {
  const { height: t, shiftX: e, shiftY: n, width: o } = yc(x, i), r = {};
  return r.shiftX = e / x.width, r.shiftY = n / x.height, r.width = o / x.width, r.height = t / x.height, r;
}, Hl = ({ height: x, width: i }) => {
  const t = pi(i, x), e = t / (6740 + 905 * 11 + 2782 * -6) * (5014 + 2378 * -2 + -254);
  if (i > x) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const n = {};
  return n.width = t, n.height = e, n;
}, Rl = (x, i) => {
  const t = pi(i.width, i.height);
  return J0(x * t);
}, Kl = ({ height: x, width: i }) => {
  const t = {};
  return t.height = x, t.width = i, yc(t, bc);
}, Pl = (x) => Zl(x, bc), Tl = (x, i) => Rl(x, i) * wl, Vl = "@innovatrics/dot-common-auto-capture", El = "6.2.0", Ll = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, Dl = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, Nl = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, Yl = {
  name: Vl,
  private: !0,
  version: El,
  scripts: Ll,
  dependencies: Dl,
  devDependencies: Nl
}, vc = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Ea = () => {
  const x = /Android/i.test(navigator.userAgent), i = /Firefox/i.test(navigator.userAgent);
  return x && i;
}, Fl = () => {
  const x = navigator.userAgent.includes("Chrome"), i = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return x && i ? !1 : i;
}, So = (x) => new Promise((i) => {
  setTimeout(i, x);
}), Wc = (x) => JSON.parse(JSON.stringify(x, (i, t) => typeof t == "number" ? J0(t) : t)), Sc = () => Yl.version, wc = (x) => new URL(x).hostname.replace("www.", ""), jl = () => wc(window.location.href) === "localhost", sx = (x) => Object.entries(x).map(([i, t]) => encodeURIComponent(i) + "=" + encodeURIComponent(t)).join("&"), Xl = (x, i) => JSON.stringify(x) === JSON.stringify(i) ? i : x;
function Ml(x, i) {
  let t;
  return (...e) => {
    const n = () => {
      clearTimeout(t), t = void 0, x(...e);
    };
    t === void (-1043 * -1 + -7850 * -1 + -1 * 8893) && (t = setTimeout(n, i));
  };
}
const _l = () => "prod".toLowerCase() === "dev";
class cr extends Array {
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
    this.length === this.size && this.splice(-1 * -9077 + 2 * 1454 + 11985 * -1, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-34 * 139 + -569 * -2 + 3588);
  }
}
const Jl = (x, i, t = ml) => new Promise((e) => {
  x.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, i);
}), Ul = async (x) => Jl(x, 215 * 35 + -3088 + -4347), Ql = (x, i) => {
  const t = document.createElement("canvas");
  t.width = i.width, t.height = i.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(x, i.shiftX, i.shiftY, i.width, i.height, 6 * 1198 + -4363 + -2825, -5602 + 2 * 2801, t.width, t.height), t;
}, zl = (x) => {
  const i = x.getContext("2d");
  if (!i) throw new Error("getImageDataForSam ctx error");
  const { data: t } = i.getImageData(8778 + 2141 * 2 + -13060, 151 * 63 + -6587 * -1 + -16100, x.width, x.height);
  return t;
}, Bc = (x, i, t, e) => {
  const n = x.getContext("2d");
  n && (n.beginPath(), e ? (n.fillStyle = t, n.fillRect(i.topLeft.x, i.topLeft.y, i.width, i.height)) : (n.strokeStyle = t, n.rect(i.topLeft.x, i.topLeft.y, i.width, i.height)), n.stroke());
}, Fi = (x, i, t) => {
  const { height: e, shiftX: n, shiftY: o, width: r } = i, a = {};
  a.x = n, a.y = o;
  const s = {};
  s.topLeft = a, s.width = r, s.height = e, s.color = t, Bc(x, s, t);
}, fn = (x, i, t, e = 4338 * -2 + 8621 + -55 * -1) => {
  const n = x.getContext("2d");
  n && (n.fillStyle = t, n.fillRect(i.x + e, i.y + e, -6293 + -754 * 6 + 10824, -7535 + -2526 * -2 + 2490), n.beginPath());
}, ql = (x, i) => {
  const { height: t, shiftX: e, shiftY: n, width: o } = i;
  return !(x.x < e || x.x > e + o || x.y < n || x.y > n + t);
}, $l = (x, i) => Object.values(x).every((t) => ql(t, i));
function Yx(x) {
  const { height: i, width: t } = Hl(x), e = (x.width - t) / (1 * 3171 + 2143 + -5312), n = (x.height - i) / (-9989 + -103 * -97), o = {};
  return o.shiftX = e, o.shiftY = n, o.width = t, o.height = i, o;
}
function Gc(x, i, t) {
  const { height: e, width: n } = t, o = pi(x.width, x.height), r = n - o * i * (-2806 * -3 + -517 * 10 + 1 * -3246), a = e - o * i * (8172 + -71 * -37 + 59 * -183), s = (x.width - r) / (21 * -63 + -1 * 6467 + -4 * -1948), c = (x.height - a) / 2, d = {};
  return d.shiftX = s, d.shiftY = c, d.width = r, d.height = a, d;
}
function w0(x, i) {
  const { shiftX: t, shiftY: e } = i, n = {};
  return n.x = x.x + t, n.y = x.y + e, n;
}
const e1 = (x, i) => ({ ...x, leftEye: { ...x.leftEye, center: w0(x.leftEye.center, i) }, rightEye: { ...x.rightEye, center: w0(x.rightEye.center, i) }, mouth: { ...x.mouth, center: w0(x.mouth.center, i) }, topLeft: w0(x.topLeft, i), bottomRight: w0(x.bottomRight, i), faceCenter: w0(x.faceCenter, i) }), kc = (x, i) => {
  const { faceCenter: t, faceSize: e } = x, n = Tl(e, i), o = {};
  o.x = t.x, o.y = t.y - n;
  const r = {};
  r.x = t.x + n, r.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + n;
  const s = {};
  s.x = t.x - n, s.y = t.y;
  const c = {};
  return c.top = o, c.right = r, c.bottom = a, c.left = s, Wc(c);
}, t1 = (x, i) => {
  const { bottomRight: t, faceCenter: e, topLeft: n } = i, o = {
    topLeft: n,
    width: t.x - n.x,
    height: t.y - n.y
  };
  Bc(x, o, "rgba(255, 0, 0, 0.3)", !0), fn(x, e, "lime");
}, n1 = (x, i, t) => {
  const e = kc(i, t);
  Object.values(e).map((n) => fn(x, n, "orange"));
}, x1 = ({ cameraResolution: x, detectionDetails: i, isImageMirror: t }) => {
  const { thresholds: e } = sr(), { redfin: n } = Yn(), o = yt(null);
  if (Ie(() => {
    if (!o.current)
      return;
    o.current.width = x.width, o.current.height = x.height, Ol(o.current);
    const p = Yx(x), b = Gc(
      x,
      e.outOfBoundsThreshold,
      p
    ), A = Kl(x);
    i.value && (t1(o.current, i.value.processedImage.detection), n1(
      o.current,
      i.value.processedImage.detection,
      x
    ), Fi(o.current, p, "lime"), Fi(o.current, b, "yellow"), Fi(o.current, A, "blue"), fn(o.current, i.value.processedImage.detection.leftEye.center, "cyan"), fn(o.current, i.value.processedImage.detection.rightEye.center, "cyan"), fn(o.current, i.value.processedImage.detection.mouth.center, "cyan"));
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
    Uu,
    {
      ref: o,
      cameraResolution: x,
      detectionDetails: u,
      isImageMirror: t
    }
  );
};
function i1(x) {
  return /* @__PURE__ */ O("rect", { fill: "#000", ...x, rx: "50%" });
}
function o1(x) {
  const [i, t] = Ue(!1), e = () => t((r) => !r), n = "" + i;
  X0(() => {
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
        u.find((b) => {
          for (const A of b.removedNodes)
            if (A === x.current) return !0;
        }) && e(), u.forEach((b) => {
          b.addedNodes.forEach((A) => {
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
const r1 = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function a1({ cutOut: x, height: i, width: t }) {
  const e = yt(null), { key: n } = o1(e);
  return /* @__PURE__ */ O("div", { ref: e, style: r1, children: /* @__PURE__ */ O("svg", { viewBox: `0 0 ${t} ${i}`, children: [
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
function s1({ fullOverlay: x, resolution: i }) {
  const t = Pl(i), e = `${t.height * 100}%`, n = `${t.width * 100}%`, o = `${t.shiftX * 100}%`, r = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ O(
    a1,
    {
      cutOut: x || /* @__PURE__ */ O(i1, { height: e, width: n, x: o, y: r }),
      height: i.height,
      width: i.width
    }
  );
}
function c1({ cameraResolution: x, children: i, detectionDetails: t, shouldMirror: e }) {
  const { redfin: n, sunfish: o } = Yn(), { appState: r, freemiumOverlayState: a } = Nn(), s = a !== Ex.HIDDEN && n !== yo.Higher && x, c = a === Ex.VISIBLE, d = x && o && r === Je.RUNNING;
  return /* @__PURE__ */ O(it, { children: [
    s && /* @__PURE__ */ O(s1, { fullOverlay: c, resolution: x }),
    i,
    d && /* @__PURE__ */ O(
      x1,
      {
        cameraResolution: x,
        detectionDetails: t,
        isImageMirror: e
      }
    )
  ] });
}
const g1 = (x, i) => {
  const t = {};
  t.detail = i, document.dispatchEvent(new CustomEvent(x, t));
}, ii = class ii {
  constructor() {
    E(this, "lastDetails", {});
    E(this, "delayedTime", 0);
  }
  static getInstance() {
    return !this._instance && (this._instance = new ii()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -3501 * 1 + -3446 + 6947;
  }
  isDetailChanged(i, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[i]) ? (this.lastDetails[i] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(i, t) {
    this.isDetailChanged(i, t) && g1(i, t);
  }
  dispatchDelayedCustomEventOnChange(i, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(i, t), this.delayedTime = n);
  }
};
E(ii, "_instance");
let mn = ii;
const U0 = mn.getInstance(), Oc = (x, i, t = Bl) => {
  const e = {};
  e.instructionCode = i;
  const n = e;
  U0.dispatchDelayedCustomEventOnChange(x, n, t);
}, La = (x, i) => {
  U0.dispatchCustomEventOnChange(x, i);
}, d1 = (x, i) => {
  U0.dispatchCustomEventOnChange(x, i);
}, u1 = (x, i) => {
  const t = {};
  t.size = i;
  const e = t;
  U0.dispatchCustomEventOnChange(x, e);
}, l1 = (x, i, t) => {
  const e = i.confidence < t ? void 0 : i, n = {};
  n.detectedObject = e;
  const o = n;
  U0.dispatchCustomEventOnChange(x, o);
}, I1 = (x, { detection: i, fps: t, image: e, invalidValidators: n, isInCandidateSelection: o }) => {
  const r = {};
  r.image = e, r.data = {}, r.data.detection = i, r.data.fps = t, r.data.isInCandidateSelection = o, r.data.invalidValidators = n, r.data.imageResolution = {}, r.data.imageResolution.width = e.width, r.data.imageResolution.height = e.height;
  const a = r;
  U0.dispatchCustomEventOnChange(x, a);
}, f1 = (x, i) => {
  if (_l()) {
    const t = {};
    t.candidateSelectionImages = i;
    const e = t;
    mn.getInstance().dispatchCustomEventOnChange(x, e);
  }
}, C1 = (x, i) => {
  const { cameraResolution: t, shouldCameraMirror: e } = i;
  Ie(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, d1(x, n);
  }, [t, e, x]);
}, p1 = (x) => x === uc.CONTROL ? !vc() : !0, h1 = (x, i) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: o } = Nn(), [r, a] = Ue(), s = Qe(() => {
    const d = o && i && i.isStreaming && i.getCameraSettings().facingMode;
    return d ? r ?? d === "user" : r ?? p1(x);
  }, [i, r, x, o]);
  Ie(() => {
    const d = () => {
      t !== Je.LOADING && e(Je.RUNNING);
    }, g = () => {
      a(r === void 0 ? !s : !r);
    }, C = async () => {
      if (i) {
        e(Je.LOADING);
        try {
          await i.switchCamera(), e(Je.RUNNING);
        } catch (p) {
          if (p instanceof Error) {
            n(oe.fromCameraError(p));
            return;
          }
        }
        a(void 0);
      }
    }, u = (p) => {
      var b;
      switch ((b = p.detail) == null ? void 0 : b["instruction"]) {
        case Di.CONTINUE_DETECTION:
          d();
          break;
        case Di.TOGGLE_MIRROR:
          g();
          break;
        case Di.SWITCH_CAMERA:
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
async function Zc() {
  return navigator.mediaDevices.enumerateDevices();
}
async function ji() {
  return (await Zc()).filter((i) => i.kind === "videoinput");
}
function Xi(x) {
  x.getTracks().forEach((t) => t.stop());
}
function Da(x) {
  return x.getVideoTracks()[-8568 + -1 * -6784 + 1784];
}
const wx = {};
wx.width = 1920, wx.height = 1080, wx.facingMode = ar.FRONT;
const m1 = wx;
var ut;
class Hc {
  constructor({ defaultVideoConstrains: i = m1, minCameraShorterSide: t = fl } = {}) {
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
    return L(this, ut) ? Da(L(this, ut)) : void (-2 * 287 + -9549 + -10123 * -1);
  }
  get isCameraActive() {
    var i;
    return !!((i = L(this, ut)) != null && i.active);
  }
  static async requestPermission() {
    const i = {};
    i.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(i);
    Xi(t);
  }
  async open(i = {}) {
    Ea() && await So(7761 * 1 + -2623 * 2 + -2065), $(this, ut, await navigator.mediaDevices.getUserMedia(i)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const i = await ji();
    if (i.length <= 1) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = i.findIndex((a) => a.deviceId === e.deviceId), o = i[n + (-2666 + 8457 * -1 + -2 * -5562)] ?? i[25 * -205 + 1627 * 3 + 1 * 244], r = this.getConstraints(t, o);
    this.close(), await this.open(r);
  }
  close() {
    L(this, ut) && (Xi(L(this, ut)), $(this, ut, null));
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
    if (!i.width) throw new oe("Video width is undefined");
    if (!i.height) throw new oe("Video height is undefined");
    const t = {};
    return t.width = i.width, t.height = i.height, t;
  }
  async getDeviceName() {
    const i = this.getSettings(), t = await Zc(), e = t.find((n) => n.deviceId === i.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(i) {
    return i === ar.FRONT ? void (-1654 + 40 * -151 + -1 * -7694) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return vc() ? (await ji()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (-1159 * -5 + 54 * -178 + 11 * 347);
  }
  async collectAvailableCamerasInfo() {
    const i = await ji();
    for (const t of i) {
      Ea() && await So(450);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const o = await navigator.mediaDevices.getUserMedia(n), r = Da(o);
        if (!r) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = r.getSettings(), s = { ...a };
        s.deviceName = r.label;
        const c = {};
        c.cameraProperties = s;
        const d = c;
        this.availableCameraProperties.push(d), Xi(o);
      } catch (e) {
        e instanceof Error && oe.logError(e);
      }
    }
  }
  getConstraints(i, t) {
    const e = { ...this.options.defaultVideoConstrains, ...i };
    e.deviceId = t ? { exact: t.deviceId } : void (-5142 + 8527 * 1 + -3385);
    const n = {};
    return n.video = e, n.audio = !1, n;
  }
  checkVideoTrackSettings() {
    var e;
    const i = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(i != null && i.height) || !(i != null && i.width))
      throw this.close(), new oe("Could not init camera settings");
    if (typeof this.options.minCameraShorterSide != "number") return;
    if (Math.min(i == null ? void 0 : i.width, i == null ? void 0 : i.height) < this.options.minCameraShorterSide)
      throw this.close(), new oe("Could not init video because of low camera resolution: " + i.width + "x" + i.height + ".");
  }
}
ut = new WeakMap();
class b1 {
  constructor(i, t) {
    this.videoHandler = i, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(i = {}) {
    await Hc.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(i.facingMode), e = this.cameraHandler.getConstraints(i, t);
    await this.cameraHandler.open(e), Fl() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var n;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const i = (n = this.cameraHandler.videoTrack) == null ? void 0 : n.getSettings();
    if (!(i != null && i.width)) throw new oe("Cant take photo - video width is undefined");
    if (!(i != null && i.height)) throw new oe("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = i.width, t.height = i.height;
    const e = t.getContext("2d");
    if (!e) throw new oe("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 9072 + 1008 * -9, -2 * -1294 + -3112 * 2 + -202 * -18), { image: t, timestamp: Date.now() };
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
var kt;
class A1 {
  constructor(i) {
    ne(this, kt);
    $(this, kt, i);
  }
  get videoElement() {
    return L(this, kt);
  }
  async play(i) {
    L(this, kt).srcObject = i, await L(this, kt).play();
  }
  stop() {
    L(this, kt).srcObject = null;
  }
  hasSrcObject() {
    return !!L(this, kt).srcObject;
  }
}
kt = new WeakMap();
function y1(x) {
  const i = yt(null), t = yt(), { handleError: e, setIsCameraReady: n } = Nn(), [o, r] = Ue(), a = Kt((c) => {
    r((d) => Xl(c, d));
  }, []);
  Ie(() => ((async () => {
    if (!i.current) {
      e(new oe("Something went wrong during video initialization"));
      return;
    }
    const d = new A1(i.current), g = new Hc(), C = new b1(d, g);
    try {
      const u = {};
      u.facingMode = x, await C.startVideoStream(u);
    } catch (u) {
      if (u instanceof Error) {
        e(oe.fromCameraError(u));
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
function v1(x, i) {
  Ie(() => {
    if (!x.current) return;
    const t = new ResizeObserver((e) => {
      const [n] = e;
      u1(i, n.contentRect);
    });
    return t.observe(x.current), () => {
      t.disconnect();
    };
  }, [x, i]);
}
function W1(x) {
  return J0(Math.abs(x));
}
const S1 = () => {
  const [x, i] = Ue(null), t = yt(new cr(2269 * -3 + -6535 * 1 + 13347));
  function e(o) {
    const { z: r } = o.accelerationIncludingGravity || {};
    if (!r) return;
    t.current.pushFixed(W1(r));
    const a = J0(Ac(t.current)), s = {};
    s.z = a, i(s);
  }
  Ie(() => (window.addEventListener("devicemotion", Ml(e, Al), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const n = {};
  return n.acceleration = x, n;
};
var w1 = Symbol.for("preact-signals");
function gr() {
  if (R0 > 6337 + -2 * 3168)
    R0--;
  else {
    for (var x, i = !1; void (9801 + 4638 * 1 + -14439) !== Cn; ) {
      var t = Cn;
      for (Cn = void (-11 * -683 + 2413 + -9926), wo++; void (293 * 34 + 3 * 1322 + -6964 * 2) !== t; ) {
        var e = t.o;
        if (t.o = void (7864 + -8 * 983), t.f &= -(-8239 + 317 * 26), !(23 * 217 + -2 * 2069 + 13 * -65 & t.f) && Pc(t)) try {
          t.c();
        } catch (n) {
          !i && (x = n, i = !(202 * 1 + 156 * -47 + 7130));
        }
        t = e;
      }
    }
    if (wo = -9662 + -1 * 4691 + 14353, R0--, i) throw x;
  }
}
var ie = void 0, Cn = void (1492 + 17 * -37 + -863), R0 = -2653 * -1 + -1683 + -970, wo = 0, Fx = 12 * -762 + -8868 + 18012;
function Rc(x) {
  if (void (92 + -1 * -4821 + -4913) !== ie) {
    var i = x.n;
    if (i === void 0 || i.t !== ie)
      return i = { i: 0, S: x, p: ie.s, n: void (-269 * 28 + 1 * 456 + -244 * -29), t: ie, e: void 0, x: void (2589 + 2589 * -1), r: i }, ie.s !== void 0 && (ie.s.n = i), ie.s = i, x.n = i, -13262 + -782 * -17 & ie.f && x.S(i), i;
    if (-(158 * -11 + -3280 + 5019) === i.i)
      return i.i = -9726 + 11 * -311 + 13147, void (6698 + -4643 * 2 + 2588) !== i.n && (i.n.p = i.p, void (-7281 + 297 * -1 + 6 * 1263) !== i.p && (i.p.n = i.n), i.p = ie.s, i.n = void 0, ie.s.n = i, ie.s = i), i;
  }
}
function we(x) {
  this.v = x, this.i = -5231 * 1 + -71 * -115 + -326 * 9, this.n = void (-27 * -238 + 31 * -99 + -3357), this.t = void (1 * 1333 + 8833 + -391 * 26);
}
we.prototype.brand = w1, we.prototype.h = function() {
  return !(-9767 * 1 + -5461 + 15228);
}, we.prototype.S = function(x) {
  this.t !== x && void (1 * -7793 + -2 * -4058 + 17 * -19) === x.e && (x.x = this.t, void (10210 + 2042 * -5) !== this.t && (this.t.e = x), this.t = x);
}, we.prototype.U = function(x) {
  if (void (3595 * 1 + 2948 + -6543) !== this.t) {
    var i = x.e, t = x.x;
    void (2691 + -13 * 207) !== i && (i.x = t, x.e = void (8867 + 1287 * 6 + -16589)), void (1 * 1219 + 1 * 2442 + -1 * 3661) !== t && (t.e = i, x.x = void 0), x === this.t && (this.t = t);
  }
}, we.prototype.subscribe = function(x) {
  var i = this;
  return ur(function() {
    var t = i.value, e = ie;
    ie = void (1224 + 5743 * 1 + 6967 * -1);
    try {
      x(t);
    } finally {
      ie = e;
    }
  });
}, we.prototype.valueOf = function() {
  return this.value;
}, we.prototype.toString = function() {
  return this.value + "";
}, we.prototype.toJSON = function() {
  return this.value;
}, we.prototype.peek = function() {
  var x = ie;
  ie = void (-1 * -5932 + -5158 + 387 * -2);
  try {
    return this.value;
  } finally {
    ie = x;
  }
}, Object.defineProperty(we.prototype, "value", { get: function() {
  var x = Rc(this);
  return void (11 * -401 + 1385 * -1 + -1 * -5796) !== x && (x.i = this.i), this.v;
}, set: function(x) {
  if (x !== this.v) {
    if (wo > 1143 * -3 + -5793 + -79 * -118) throw new Error("Cycle detected");
    this.v = x, this.i++, Fx++, R0++;
    try {
      for (var i = this.t; i !== void 0; i = i.x) i.t.N();
    } finally {
      gr();
    }
  }
} });
function Kc(x) {
  return new we(x);
}
function Pc(x) {
  for (var i = x.s; void (3 * 2477 + -6748 + -1 * 683) !== i; i = i.n) if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return !(-7596 + -6 * -1266);
  return !(-1100 + -1 * -8803 + -3851 * 2);
}
function Tc(x) {
  for (var i = x.s; void (17 * -1 + -6203 * -1 + -6186) !== i; i = i.n) {
    var t = i.S.n;
    if (void (4694 * 1 + 5692 + 18 * -577) !== t && (i.r = t), i.S.n = i, i.i = -(-3905 + 63 * 62), void (-1 * -1439 + -4547 * -1 + -41 * 146) === i.n) {
      x.s = i;
      break;
    }
  }
}
function Vc(x) {
  for (var i = x.s, t = void (-26 * -68 + 6707 + -8475); void (3 * -1846 + -1641 + 1 * 7179) !== i; ) {
    var e = i.p;
    -(-9244 + 5936 * 1 + 3309) === i.i ? (i.S.U(i), e !== void 0 && (e.n = i.n), void (-11460 + 1146 * 10) !== i.n && (i.n.p = e)) : t = i, i.S.n = i.r, void (1690 + -5427 * 1 + 3737) !== i.r && (i.r = void (6819 * 1 + 5755 + -2 * 6287)), i = e;
  }
  x.s = t;
}
function O0(x) {
  we.call(this, void 0), this.x = x, this.s = void (-6317 * 1 + 9433 * 1 + 779 * -4), this.g = Fx - (1724 + 1723 * -1), this.f = 4;
}
(O0.prototype = new we()).h = function() {
  if (this.f &= -(-19318 + -139 * -139), 5 * 688 + 1761 * 2 + -6961 & this.f) return !(-5433 + 6 * 612 + 881 * 2);
  if ((36 & this.f) == 32) return !(6508 * 1 + 1 * 2113 + 1 * -8621);
  if (this.f &= -(-487 * -10 + 2054 * -3 + 1297), this.g === Fx) return !(-9990 + -1194 * 4 + 14766);
  if (this.g = Fx, this.f |= -552 + 32 * 269 + -45 * 179, this.i > -4339 * -1 + -5447 + 2 * 554 && !Pc(this)) return this.f &= -2, !(6 * -1569 + 3961 + 5453);
  var x = ie;
  try {
    Tc(this), ie = this;
    var i = this.x();
    (2 * -3579 + -3301 * 2 + 13776 & this.f || this.v !== i || 4 * -21 + 7743 + 333 * -23 === this.i) && (this.v = i, this.f &= -(-1 * 674 + -91 * 106 + -10337 * -1), this.i++);
  } catch (t) {
    this.v = t, this.f |= -1 * -5410 + 1 * -3180 + -2214, this.i++;
  }
  return ie = x, Vc(this), this.f &= -(-361 * -5 + -9461 + -3829 * -2), !(-1791 + -161 * 40 + 8231);
}, O0.prototype.S = function(x) {
  if (void (2075 + -536 * 3 + -467) === this.t) {
    this.f |= 3 * -2601 + -6169 + 824 * 17;
    for (var i = this.s; void (-1963 * 1 + -8778 + 1 * 10741) !== i; i = i.n) i.S.S(i);
  }
  we.prototype.S.call(this, x);
}, O0.prototype.U = function(x) {
  if (void (2810 + -1405 * 2) !== this.t && (we.prototype.U.call(this, x), void (-12052 + -4 * -3013) === this.t)) {
    this.f &= -33;
    for (var i = this.s; void (9144 + -24 * 381) !== i; i = i.n) i.S.U(i);
  }
}, O0.prototype.N = function() {
  if (!(4780 + -2389 * 2 & this.f)) {
    this.f |= 4429 + -4423 * 1;
    for (var x = this.t; x !== void 0; x = x.x) x.t.N();
  }
}, Object.defineProperty(O0.prototype, "value", { get: function() {
  if (-17374 + 25 * 695 & this.f) throw new Error("Cycle detected");
  var x = Rc(this);
  if (this.h(), void (-381 * -13 + -151 * -59 + 1 * -13862) !== x && (x.i = this.i), 1 * 2910 + -30 * -29 + -3764 * 1 & this.f) throw this.v;
  return this.v;
} });
function B1(x) {
  return new O0(x);
}
function Ec(x) {
  var i = x.u;
  if (x.u = void (-13788 + 6 * 2298), typeof i == "function") {
    R0++;
    var t = ie;
    ie = void (3982 + 269 * 34 + 6 * -2188);
    try {
      i();
    } catch (e) {
      throw x.f &= -(-1 * -3941 + -3381 * -1 + -7320), x.f |= 698 + -5 * 1597 + -1459 * -5, dr(x), e;
    } finally {
      ie = t, gr();
    }
  }
}
function dr(x) {
  for (var i = x.s; void (-90 * 5 + 78 * 17 + -876) !== i; i = i.n) i.S.U(i);
  x.x = void (-529 + 9 * -499 + 5020 * 1), x.s = void (9997 + -2834 * -1 + -12831), Ec(x);
}
function G1(x) {
  if (ie !== this) throw new Error("Out-of-order effect");
  Vc(this), ie = x, this.f &= -(-2 * 4787 + 26 * 266 + 2660), -149 * -4 + -5522 + 4934 & this.f && dr(this), gr();
}
function cn(x) {
  this.x = x, this.u = void (7111 + 1 * -3754 + -3357), this.s = void 0, this.o = void (-8827 + 529 * 7 + 183 * 28), this.f = -2363 + 1 * 2395;
}
cn.prototype.c = function() {
  var x = this.S();
  try {
    if (-1 * 6869 + -83 * 83 + 6883 * 2 & this.f || void (7707 + 2569 * -3) === this.x) return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    x();
  }
}, cn.prototype.S = function() {
  if (1 * 3205 + -10 * -766 + 5432 * -2 & this.f) throw new Error("Cycle detected");
  this.f |= 24 * -223 + 1 * -5861 + 11214, this.f &= -(-3464 + 1 * 3473), Ec(this), Tc(this), R0++;
  var x = ie;
  return ie = this, G1.bind(this, x);
}, cn.prototype.N = function() {
  !(-10846 + -1356 * -8 & this.f) && (this.f |= -1037 * -7 + 1733 * -3 + -7 * 294, this.o = Cn, Cn = this);
}, cn.prototype.d = function() {
  this.f |= 1069 * 9 + -6319 + -3294, 1 & this.f || dr(this);
};
function ur(x) {
  var i = new cn(x);
  try {
    i.c();
  } catch (t) {
    throw i.d(), t;
  }
  return i.d.bind(i);
}
var Mi;
function H0(x, i) {
  Y[x] = i.bind(null, Y[x] || function() {
  });
}
function cx(x) {
  Mi && Mi(), Mi = x && x.S();
}
function Lc(x) {
  var i = this, t = x.data, e = Dc(t);
  e.value = t;
  var n = Qe(function() {
    for (var o = i.__v; o = o.__; ) if (o.__c) {
      o.__c.__$f |= -17 * 17 + -2455 + 2748;
      break;
    }
    return i.__$u.c = function() {
      var r;
      !Is(n.peek()) && -1461 * 3 + -462 + -101 * -48 === ((r = i.base) == null ? void (11996 + 5998 * -2) : r.nodeType) ? i.base.data = n.peek() : (i.__$f |= 4933 + -89 * 48 + 5 * -132, i.setState({}));
    }, B1(function() {
      var r = e.value.value;
      return -233 * 1 + -13 * 517 + 1 * 6954 === r ? -810 + -5071 * 1 + 5881 : !(3686 * 2 + -851 * -2 + -9074) === r ? "" : r || "";
    });
  }, []);
  return n.value;
}
Lc.displayName = "_st";
var Bo = {};
Bo.configurable = !(4 * -111 + -9 * 441 + 4413), Bo.value = void (961 + -289 * -16 + 1117 * -5);
var Go = {};
Go.configurable = !(-1 * -9777 + 8158 + -17935), Go.value = Lc;
var ko = {};
ko.configurable = !0, ko.get = function() {
  var x = {};
  return x.data = this, x;
};
var Oo = {};
Oo.configurable = !(3011 * -1 + -91 * -73 + 2 * -1816), Oo.value = 1;
var xn = {};
xn.constructor = Bo, xn.type = Go, xn.props = ko, xn.__b = Oo, Object.defineProperties(we.prototype, xn), H0("__b", function(x, i) {
  if (typeof i.type == "string") {
    var t, e = i.props;
    for (var n in e) if (n !== "children") {
      var o = e[n];
      o instanceof we && (t || (i.__np = t = {}), t[n] = o, e[n] = o.peek());
    }
  }
  x(i);
}), H0("__r", function(x, i) {
  cx();
  var t, e = i.__c;
  e && (e.__$f &= -(3399 + 1 * -3397), void (374 * -17 + -102 + 6460) === (t = e.__$u) && (e.__$u = t = function(n) {
    var o;
    return ur(function() {
      o = this;
    }), o.c = function() {
      e.__$f |= 3757 + -5207 * -1 + 1 * -8963, e.setState({});
    }, o;
  }())), cx(t), x(i);
}), H0("__e", function(x, i, t, e) {
  cx(), x(i, t, e);
}), H0("diffed", function(x, i) {
  cx();
  var t;
  if (typeof i.type == "string" && (t = i.__e)) {
    var e = i.__np, n = i.props;
    if (e) {
      var o = t.U;
      if (o) for (var r in o) {
        var a = o[r];
        void (-210 * -26 + 11 * 883 + -15173) !== a && !(r in e) && (a.d(), o[r] = void (606 + 26 * 383 + 38 * -278));
      }
      else t.U = o = {};
      for (var s in e) {
        var c = o[s], d = e[s];
        void (-21 * -218 + -41 * 181 + 2843) === c ? (c = k1(t, s, d, n), o[s] = c) : c.o(d, n);
      }
    }
  }
  x(i);
});
function k1(x, i, t, e) {
  var n = i in x && x.ownerSVGElement === void 0, o = Kc(t);
  return { o: function(r, a) {
    o.value = r, e = a;
  }, d: ur(function() {
    var r = o.value.value;
    e[i] !== r && (e[i] = r, n ? x[i] = r : r ? x.setAttribute(i, r) : x.removeAttribute(i));
  }) };
}
H0("unmount", function(x, i) {
  if (typeof i.type == "string") {
    var t = i.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (-1235 + -1532 * -3 + -3361);
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
      a && (r.__$u = void (3882 + -1 * 1877 + -2005), a.d());
    }
  }
  x(i);
}), H0("__h", function(x, i, t, e) {
  (e < 21 * 404 + -1 * -3779 + -1 * 12260 || -1033 * 2 + -9649 + -1 * -11724 === e) && (i.__$f |= -1 * -2467 + -1041 * 8 + 5863), x(i, t, e);
}), nt.prototype.shouldComponentUpdate = function(x, i) {
  var t = this.__$u;
  if (!(t && void (1262 * -3 + 3071 + -5 * -143) !== t.s || -1 * 8394 + 17 * 272 + -74 * -51 & this.__$f)) return !(-937 + 443 * 6 + 1 * -1721);
  if (3 & this.__$f) return !(2 * 2512 + -5667 * 1 + 643);
  for (var e in i) return !(-21 * 182 + -4166 * 1 + 7988);
  for (var n in x) if (n !== "__source" && x[n] !== this.props[n]) return !(-1237 * 8 + -153 * 37 + -1 * -15557);
  for (var o in this.props) if (!(o in x)) return !(-3611 + 3611 * 1);
  return !1;
};
function Dc(x) {
  return Qe(function() {
    return Kc(x);
  }, []);
}
const O1 = async () => WebAssembly.validate(new Uint8Array([5851 + -1 * -8873 + -7362 * 2, -6456 + 9901 * -1 + 866 * 19, -8800 + -8761 * -1 + -77 * -2, -28 * 134 + -5459 + 4660 * 2, 2 * -567 + -5752 + 71 * 97, -1061 + 568 * -10 + -749 * -9, 2492 * -1 + 94 * 35 + -19 * 42, -1 * 7644 + 3219 * -1 + -10863 * -1, -4619 * -1 + -9029 + -11 * -401, -5 * -1778 + 3562 + -4149 * 3, 1, -6 * 955 + -2 * 3335 + -1562 * -8, 0, -6435 + -4 * -1609, 1 * 7839 + 2 * -2749 + 1 * -2218, -6183 * -1 + 839 * -5 + -1985 * 1, 13 * -601 + -1 * -2885 + 4930, 7150 + -5731 * -1 + -12880, -4 * -148 + -1 * 9967 + 9375, 8094 + -62 * -136 + -16516, 781 * 1 + -1 * -6651 + 7422 * -1, -609 + -610 * -1, 6850 + -1454 * -1 + -8296, -6469 * -1 + 6431 + -12900, 404 * 19 + -7702 + -91 * -1, -1 * -7206 + -1865 * 2 + -3476, 1626 * 2 + -7846 + -4847 * -1, -7106 + 3 * 1661 + -1069 * -2, 7151 + -4 * -1033 + -11030, 98, 11]));
function Z1() {
  const [x] = window.crypto.getRandomValues(new Uint32Array(1));
  return x.toString(-230 + 82 * 3);
}
function H1() {
  const x = sessionStorage.getItem("dot-user-id");
  if (x) return x;
  const i = Z1();
  return sessionStorage.setItem("dot-user-id", i), i;
}
function R1(x, i) {
  return i ? i === "user" ? "Front Camera" : "Back Camera" : x;
}
const Zo = {};
Zo.label = ">1m", Zo.time = 60;
const Ho = {};
Ho.label = ">45", Ho.time = 45;
const Ro = {};
Ro.label = ">30", Ro.time = 30;
function K1(x, i = [Zo, Ho, Ro]) {
  const t = i.sort((e, n) => n.time - e.time);
  for (const e of t)
    if (x > e.time) return e.label;
  return "" + x;
}
const P1 = (x) => Math.round(x / 500) * 500 / (-3981 + -1 * -7838 + 1 * -2857), Na = (x) => x ? x <= -4463 * 1 + 1 * 6263 + 1799 * -1 ? Math.round(x * (-25 * -53 + 5820 + -15 * 475)) / (1 * -7024 + -1199 * 6 + -226 * -63) : Math.round(x / (-2084 + 1067 * 2)) * (-2994 * -2 + 2803 * 3 + -14347 * 1) : 0, T1 = (x) => Math.round(x * (-5864 + -8386 * -1 + -2520 * 1)) / (-686 * -12 + -4957 + -3273);
function V1(x) {
  return x !== Je.RUNNING ? Ex.VISIBLE : Ex.VISIBLE_WITH_MASK;
}
async function E1() {
  return await O1() ? Ka.SIMD : Ka.NO_SIMD;
}
var yn, oi;
class Nc {
  constructor(i) {
    ne(this, yn, !0);
    ne(this, oi, Date.now());
    E(this, "analytics");
    E(this, "samVersion");
    E(this, "sessionToken");
    E(this, "onDetectionCallback");
    E(this, "onCaptureCallback");
    E(this, "createProtoMessage");
    E(this, "fpsOfAllImages", new cr(508 * -1 + 2 * 1439 + 30 * -78));
    E(this, "cameraService");
    E(this, "imageProcessor");
    this.cameraService = i.cameraService, this.imageProcessor = i.imageProcessor, this.analytics = i.analytics, this.samVersion = i.samVersion, this.sessionToken = i.sessionToken, this.createProtoMessage = i.createProtoMessage, this.onDetectionCallback = i.onDetectionCallback, this.onCaptureCallback = i.onCaptureCallback;
  }
  async run() {
    for (; L(this, yn); )
      await this.iterate();
    return this;
  }
  stop() {
    $(this, yn, !1);
  }
  async trackCaptureProcess(i, t) {
    var r;
    const e = Date.now(), n = Ac(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height, (r = this.analytics) == null || r.trackCaptureProcess({ detection: i, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: n, captureProcessDurationInMs: e - L(this, oi), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await E1() });
  }
  onDetection(i, t) {
    this.onDetectionCallback({ ...i, samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: i, canvasImage: t, detection: e }) {
    const n = {};
    n.width = t.width, n.height = t.height;
    const o = n, r = await Ul(t), a = await this.cameraService.getCameraProperties(), s = { ...a, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp() }, c = {};
    c.sessionToken = this.sessionToken, c.web = s;
    const d = c, g = await this.createProtoMessage(r, d), C = {};
    C.detection = e, C.imageResolution = o;
    const u = {};
    u.image = r, u.data = C;
    const p = u;
    this.stop();
    const b = {};
    b.imageData = p, b.protoMessage = g, b.webMetadata = s, b.candidateSelectionImages = i, this.onCaptureCallback(b);
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
    await So(Math.max(Va.max - i, Va.min));
  }
}
yn = new WeakMap(), oi = new WeakMap();
class L1 extends Nc {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, instructionCodeMap: n, ...o }) {
    super(o);
    E(this, "candidateSelectionTime", 6 * -205 + 6666 + -5436);
    E(this, "candidatesSelectionFramesCount", 5 * -1403 + 1 * -3326 + -383 * -27);
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
      throw e instanceof Error ? oe.fromCameraError(e) : oe.fromError(e);
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
    this.candidateSelectionTime === 1 * 3457 + 6599 * -1 + -1571 * -2 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= Yi.minFrames ? t > Yi.minDuration : t > Yi.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages }), this.imageProcessor.reset();
    else throw new oe("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const n = this.getDetectionEndTime(e.timestamp), o = J0((2921 + 1 * -1921) / n);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = e.image.width, r.height = e.image.height;
    const a = r, s = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), c = {};
    c.isNewDetectionValid = t.isValid, c.newInvalidInstruction = s[1 * -2203 + 5 * 1579 + -5692];
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
var Nt, n0;
class D1 extends Nc {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, ...n }) {
    super(n);
    ne(this, Nt);
    ne(this, n0);
    E(this, "fallbackInstruction");
    E(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, n;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Ni).includes((n = t.detail) == null ? void 0 : n["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    $(this, n0, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && $(this, Nt, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(Oa.REQUEST_CAPTURE, L(this, n0));
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
    return L(this, Nt) ? L(this, Nt) === Ni.FIRST_FRAME ? !0 : L(this, Nt) === Ni.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? oe.fromCameraError(e) : oe.fromError(e);
    }
  }
  async onCaptureDone(t, e) {
    this.trackCaptureProcess(e, t);
    const n = {};
    n.canvasImage = t, n.detection = e, n.candidateSelectionImages = [], await this.onCapture(n), $(this, Nt, void (342 * 1 + 2049 + -2391)), this.imageProcessor.reset();
  }
  getDetectionDetails(t, e) {
    const n = this.getDetectionEndTime(t.timestamp), o = J0(1e3 / n);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = t.image.width, r.height = t.image.height;
    const a = r, s = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), c = this.getInstructionCode(s[0]), d = {};
    d.detection = e.detection, d.instructionCode = c, d.invalidValidators = s, d.isInCandidateSelection = !1;
    const g = {};
    return g.processedImage = d, g.detectionTime = n, g.fps = o, g.resolution = a, g;
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), L(this, n0) && document.removeEventListener(Oa.REQUEST_CAPTURE, L(this, n0));
  }
}
Nt = new WeakMap(), n0 = new WeakMap();
function N1({ captureMode: x, ...i }) {
  return x === Ic.AUTO_CAPTURE ? new L1(i) : new D1(i);
}
function Y1({ cameraResolution: x, cameraService: i, customEvent: t }) {
  const { shouldCameraMirror: e } = h1(t.CONTROL, i), n = {};
  n.cameraResolution = x, n.shouldCameraMirror = e, C1(t.CAMERA_PROPS_CHANGED, n), Ie(() => () => {
    mn.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = e, o;
}
function F1({ cameraFacing: x, captureMode: i, checkToInstructionCodeMap: t, controller: e, createProtoMessage: n, customEvent: o, fallbackInstruction: r, instructionCodeMap: a, onCapture: s, onDetection: c, sessionToken: d }) {
  const { appState: g, handleAppStateChange: C } = Nn(), { sunfish: u } = Yn(), { analytics: p } = Qu(), { cameraResolution: b, cameraService: A, onCameraResolutionChange: l, videoRef: W } = y1(x), K = {};
  K.cameraResolution = b, K.cameraService = A, K.customEvent = o;
  const { shouldCameraMirror: X } = Y1(K), M = Dc(void (8528 + 125 * 56 + -6 * 2588)), J = Kt((U) => {
    C(Je.WAITING), s(U);
  }, [s, C]), H = Kt((U, te) => {
    l(U.resolution), M.value = U, c(U, te);
  }, [c, M, l]);
  Ie(() => {
    A != null && A["isStreaming"] && (e != null && e["isDetectorInitialized"]) && u && C(Je.RUNNING);
  }, [A == null ? void 0 : A["isStreaming"], e == null ? void 0 : e["isDetectorInitialized"], C, u]), Ie(() => {
    if (g !== Je.RUNNING) return;
    if (!A || !e) throw new oe("Cannot start detection");
    const U = {};
    U.captureMode = i, U.analytics = p, U.cameraService = A, U.imageProcessor = e.imageProcessor, U.fallbackInstruction = r, U.instructionCodeMap = a, U.checkToInstructionCodeMap = t, U.sessionToken = d, U.samVersion = e.samVersion, U.createProtoMessage = n, U.onCaptureCallback = J, U.onDetectionCallback = H;
    const te = N1(U);
    return e.runDetectionLoop(te), () => {
      e.stopDetectionLoop();
    };
  }, [g, e, A, J, H, d, M, p, n, a, t, r, i]);
  const re = {};
  return re.videoRef = W, re.cameraResolution = b, re.detectionDetails = M, re.shouldCameraMirror = X, re;
}
var Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Yc = {}, Ya = {}, j1 = X1;
function X1(x, i) {
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
var Fc = {};
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
})(Fc);
var M1 = hi;
function hi() {
  this._listeners = {};
}
hi.prototype.on = function(x, i, t) {
  return (this._listeners[x] || (this._listeners[x] = [])).push({
    fn: i,
    ctx: t || this
  }), this;
};
hi.prototype.off = function(x, i) {
  if (x === void 0)
    this._listeners = {};
  else if (i === void 0)
    this._listeners[x] = [];
  else
    for (var t = this._listeners[x], e = 0; e < t.length; )
      t[e].fn === i ? t.splice(e, 1) : ++e;
  return this;
};
hi.prototype.emit = function(x) {
  var i = this._listeners[x];
  if (i) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < i.length; )
      i[e].fn.apply(i[e++].ctx, t);
  }
  return this;
};
var _1 = Fa(Fa);
function Fa(x) {
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
    x.writeFloatLE = i.bind(null, ja), x.writeFloatBE = i.bind(null, Xa);
    function t(e, n, o) {
      var r = e(n, o), a = (r >> 31) * 2 + 1, s = r >>> 23 & 255, c = r & 8388607;
      return s === 255 ? c ? NaN : a * (1 / 0) : s === 0 ? a * 1401298464324817e-60 * c : a * Math.pow(2, s - 150) * (c + 8388608);
    }
    x.readFloatLE = t.bind(null, Ma), x.readFloatBE = t.bind(null, _a);
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
    x.writeDoubleLE = i.bind(null, ja, 0, 4), x.writeDoubleBE = i.bind(null, Xa, 4, 0);
    function t(e, n, o, r, a) {
      var s = e(r, a + n), c = e(r, a + o), d = (c >> 31) * 2 + 1, g = c >>> 20 & 2047, C = 4294967296 * (c & 1048575) + s;
      return g === 2047 ? C ? NaN : d * (1 / 0) : g === 0 ? d * 5e-324 * C : d * Math.pow(2, g - 1075) * (C + 4503599627370496);
    }
    x.readDoubleLE = t.bind(null, Ma, 0, 4), x.readDoubleBE = t.bind(null, _a, 4, 0);
  }(), x;
}
function ja(x, i, t) {
  i[t] = x & 255, i[t + 1] = x >>> 8 & 255, i[t + 2] = x >>> 16 & 255, i[t + 3] = x >>> 24;
}
function Xa(x, i, t) {
  i[t] = x >>> 24, i[t + 1] = x >>> 16 & 255, i[t + 2] = x >>> 8 & 255, i[t + 3] = x & 255;
}
function Ma(x, i) {
  return (x[i] | x[i + 1] << 8 | x[i + 2] << 16 | x[i + 3] << 24) >>> 0;
}
function _a(x, i) {
  return (x[i] << 24 | x[i + 1] << 16 | x[i + 2] << 8 | x[i + 3]) >>> 0;
}
function Ja(x) {
  throw new Error('Could not dynamically require "' + x + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var J1 = U1;
function U1(x) {
  try {
    if (typeof Ja != "function")
      return null;
    var i = Ja(x);
    return i && (i.length || Object.keys(i).length) ? i : null;
  } catch {
    return null;
  }
}
var jc = {};
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
})(jc);
var Q1 = z1;
function z1(x, i, t) {
  var e = t || 8192, n = e >>> 1, o = null, r = e;
  return function(a) {
    if (a < 1 || a > n)
      return x(a);
    r + a > e && (o = x(e), r = 0);
    var s = i.call(o, r, r += a);
    return r & 7 && (r = (r | 7) + 1), s;
  };
}
var _i, Ua;
function q1() {
  if (Ua)
    return _i;
  Ua = 1, _i = i;
  var x = I0();
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
  }, _i;
}
var Qa;
function I0() {
  return Qa || (Qa = 1, function(x) {
    var i = x;
    i.asPromise = j1, i.base64 = Fc, i.EventEmitter = M1, i.float = _1, i.inquire = J1, i.utf8 = jc, i.pool = Q1, i.LongBits = q1(), i.isNode = !!(typeof Qt < "u" && Qt && Qt.process && Qt.process.versions && Qt.process.versions.node), i.global = i.isNode && Qt || typeof window < "u" && window || typeof self < "u" && self || Qt, i.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(Ya)), Ya;
}
var Xc = Q, xt = I0(), Ko, mi = xt.LongBits, za = xt.base64, qa = xt.utf8;
function Fn(x, i, t) {
  this.fn = x, this.len = i, this.next = void 0, this.val = t;
}
function lr() {
}
function $1(x) {
  this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
}
function Q() {
  this.len = 0, this.head = new Fn(lr, 0, 0), this.tail = this.head, this.states = null;
}
var Mc = function() {
  return xt.Buffer ? function() {
    return (Q.create = function() {
      return new Ko();
    })();
  } : function() {
    return new Q();
  };
};
Q.create = Mc();
Q.alloc = function(x) {
  return new xt.Array(x);
};
xt.Array !== Array && (Q.alloc = xt.pool(Q.alloc, xt.Array.prototype.subarray));
Q.prototype._push = function(x, i, t) {
  return this.tail = this.tail.next = new Fn(x, i, t), this.len += i, this;
};
function Ir(x, i, t) {
  i[t] = x & 255;
}
function eI(x, i, t) {
  for (; x > 127; )
    i[t++] = x & 127 | 128, x >>>= 7;
  i[t] = x;
}
function fr(x, i) {
  this.len = x, this.next = void 0, this.val = i;
}
fr.prototype = Object.create(Fn.prototype);
fr.prototype.fn = eI;
Q.prototype.uint32 = function(x) {
  return this.len += (this.tail = this.tail.next = new fr(
    (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
    x
  )).len, this;
};
Q.prototype.int32 = function(x) {
  return x < 0 ? this._push(Cr, 10, mi.fromNumber(x)) : this.uint32(x);
};
Q.prototype.sint32 = function(x) {
  return this.uint32((x << 1 ^ x >> 31) >>> 0);
};
function Cr(x, i, t) {
  for (; x.hi; )
    i[t++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
  for (; x.lo > 127; )
    i[t++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
  i[t++] = x.lo;
}
Q.prototype.uint64 = function(x) {
  var i = mi.from(x);
  return this._push(Cr, i.length(), i);
};
Q.prototype.int64 = Q.prototype.uint64;
Q.prototype.sint64 = function(x) {
  var i = mi.from(x).zzEncode();
  return this._push(Cr, i.length(), i);
};
Q.prototype.bool = function(x) {
  return this._push(Ir, 1, x ? 1 : 0);
};
function Po(x, i, t) {
  i[t] = x & 255, i[t + 1] = x >>> 8 & 255, i[t + 2] = x >>> 16 & 255, i[t + 3] = x >>> 24;
}
Q.prototype.fixed32 = function(x) {
  return this._push(Po, 4, x >>> 0);
};
Q.prototype.sfixed32 = Q.prototype.fixed32;
Q.prototype.fixed64 = function(x) {
  var i = mi.from(x);
  return this._push(Po, 4, i.lo)._push(Po, 4, i.hi);
};
Q.prototype.sfixed64 = Q.prototype.fixed64;
Q.prototype.float = function(x) {
  return this._push(xt.float.writeFloatLE, 4, x);
};
Q.prototype.double = function(x) {
  return this._push(xt.float.writeDoubleLE, 8, x);
};
var tI = xt.Array.prototype.set ? function(x, i, t) {
  i.set(x, t);
} : function(x, i, t) {
  for (var e = 0; e < x.length; ++e)
    i[t + e] = x[e];
};
Q.prototype.bytes = function(x) {
  var i = x.length >>> 0;
  if (!i)
    return this._push(Ir, 1, 0);
  if (xt.isString(x)) {
    var t = Q.alloc(i = za.length(x));
    za.decode(x, t, 0), x = t;
  }
  return this.uint32(i)._push(tI, i, x);
};
Q.prototype.string = function(x) {
  var i = qa.length(x);
  return i ? this.uint32(i)._push(qa.write, i, x) : this._push(Ir, 1, 0);
};
Q.prototype.fork = function() {
  return this.states = new $1(this), this.head = this.tail = new Fn(lr, 0, 0), this.len = 0, this;
};
Q.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Fn(lr, 0, 0), this.len = 0), this;
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
  Ko = x, Q.create = Mc(), Ko._configure();
};
var nI = At, _c = Xc;
(At.prototype = Object.create(_c.prototype)).constructor = At;
var Yt = I0();
function At() {
  _c.call(this);
}
At._configure = function() {
  At.alloc = Yt._Buffer_allocUnsafe, At.writeBytesBuffer = Yt.Buffer && Yt.Buffer.prototype instanceof Uint8Array && Yt.Buffer.prototype.set.name === "set" ? function(x, i, t) {
    i.set(x, t);
  } : function(x, i, t) {
    if (x.copy)
      x.copy(i, t, 0, x.length);
    else
      for (var e = 0; e < x.length; )
        i[t++] = x[e++];
  };
};
At.prototype.bytes = function(x) {
  Yt.isString(x) && (x = Yt._Buffer_from(x, "base64"));
  var i = x.length >>> 0;
  return this.uint32(i), i && this._push(At.writeBytesBuffer, i, x), this;
};
function xI(x, i, t) {
  x.length < 40 ? Yt.utf8.write(x, i, t) : i.utf8Write ? i.utf8Write(x, t) : i.write(x, t);
}
At.prototype.string = function(x) {
  var i = Yt.Buffer.byteLength(x);
  return this.uint32(i), i && this._push(xI, i, x), this;
};
At._configure();
var Jc = fe, vt = I0(), To, Uc = vt.LongBits, iI = vt.utf8;
function It(x, i) {
  return RangeError("index out of range: " + x.pos + " + " + (i || 1) + " > " + x.len);
}
function fe(x) {
  this.buf = x, this.pos = 0, this.len = x.length;
}
var $a = typeof Uint8Array < "u" ? function(x) {
  if (x instanceof Uint8Array || Array.isArray(x))
    return new fe(x);
  throw Error("illegal buffer");
} : function(x) {
  if (Array.isArray(x))
    return new fe(x);
  throw Error("illegal buffer");
}, Qc = function() {
  return vt.Buffer ? function(x) {
    return (fe.create = function(i) {
      return vt.Buffer.isBuffer(i) ? new To(i) : $a(i);
    })(x);
  } : $a;
};
fe.create = Qc();
fe.prototype._slice = vt.Array.prototype.subarray || /* istanbul ignore next */
vt.Array.prototype.slice;
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
function Ji() {
  var x = new Uc(0, 0), i = 0;
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
function jx(x, i) {
  return (x[i - 4] | x[i - 3] << 8 | x[i - 2] << 16 | x[i - 1] << 24) >>> 0;
}
fe.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw It(this, 4);
  return jx(this.buf, this.pos += 4);
};
fe.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw It(this, 4);
  return jx(this.buf, this.pos += 4) | 0;
};
function es() {
  if (this.pos + 8 > this.len)
    throw It(this, 8);
  return new Uc(jx(this.buf, this.pos += 4), jx(this.buf, this.pos += 4));
}
fe.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw It(this, 4);
  var x = vt.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, x;
};
fe.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw It(this, 4);
  var x = vt.float.readDoubleLE(this.buf, this.pos);
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
  return iI.read(x, 0, x.length);
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
  To = x, fe.create = Qc(), To._configure();
  var i = vt.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  vt.merge(fe.prototype, {
    int64: function() {
      return Ji.call(this)[i](!1);
    },
    uint64: function() {
      return Ji.call(this)[i](!0);
    },
    sint64: function() {
      return Ji.call(this).zzDecode()[i](!1);
    },
    fixed64: function() {
      return es.call(this)[i](!0);
    },
    sfixed64: function() {
      return es.call(this)[i](!1);
    }
  });
};
var oI = u0, zc = Jc;
(u0.prototype = Object.create(zc.prototype)).constructor = u0;
var ts = I0();
function u0(x) {
  zc.call(this, x);
}
u0._configure = function() {
  ts.Buffer && (u0.prototype._slice = ts.Buffer.prototype.slice);
};
u0.prototype.string = function() {
  var x = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + x, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + x, this.len));
};
u0._configure();
var qc = {}, rI = bn, pr = I0();
(bn.prototype = Object.create(pr.EventEmitter.prototype)).constructor = bn;
function bn(x, i, t) {
  if (typeof x != "function")
    throw TypeError("rpcImpl must be a function");
  pr.EventEmitter.call(this), this.rpcImpl = x, this.requestDelimited = !!i, this.responseDelimited = !!t;
}
bn.prototype.rpcCall = function x(i, t, e, n, o) {
  if (!n)
    throw TypeError("request must be specified");
  var r = this;
  if (!o)
    return pr.asPromise(x, r, i, t, e, n);
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
bn.prototype.end = function(x) {
  return this.rpcImpl && (x || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(x) {
  var i = x;
  i.Service = rI;
})(qc);
var aI = {};
(function(x) {
  var i = x;
  i.build = "minimal", i.Writer = Xc, i.BufferWriter = nI, i.Reader = Jc, i.BufferReader = oI, i.util = I0(), i.rpc = qc, i.roots = aI, i.configure = t;
  function t() {
    i.util._configure(), i.Writer._configure(i.BufferWriter), i.Reader._configure(i.BufferReader);
  }
  t();
})(Yc);
var xe = Yc;
const B = xe.Reader, ge = xe.Writer, v = xe.util, h = xe.roots.default || (xe.roots.default = {}), F0 = h.dot = (() => {
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
      return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        if (n || (n = ge.create()), e.images != null && e.images.length)
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        return o || (o = ge.create()), n.platform != null && Object.hasOwnProperty.call(n, "platform") && o.uint32(
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        if (o || (o = ge.create()), n.supportedAbis != null && n.supportedAbis.length)
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        if (n || (n = ge.create()), e.cameraModelId != null && Object.hasOwnProperty.call(e, "cameraModelId") && n.uint32(
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        if (n || (n = ge.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && h.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        return o || (o = ge.create()), n.aspectRatio != null && Object.hasOwnProperty.call(n, "aspectRatio") && o.uint32(
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        return o || (o = ge.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && h.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, o.uint32(
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        return n || (n = ge.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        return n || (n = ge.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        return o || (o = ge.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && h.dot.v4.DocumentContent.encode(n.documentContent, o.uint32(
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        if (n || (n = ge.create()), e.segments != null && e.segments.length)
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        return n || (n = ge.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && n.uint32(
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        return n || (n = ge.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && h.dot.Image.encode(e.neutralExpressionFaceImage, n.uint32(
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
        return n || (n = ge.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
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
        return this.constructor.toObject(this, xe.util.toJSONOptions);
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
      return e || (e = ge.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
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
      return this.constructor.toObject(this, xe.util.toJSONOptions);
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
      return this.constructor.toObject(this, xe.util.toJSONOptions);
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
      return e || (e = ge.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
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
      return this.constructor.toObject(this, xe.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, i;
  }(), x;
})();
(function(x, i) {
  function t(s, c, d, g, C) {
    return de(d - -435, C);
  }
  function e(s, c, d, g, C) {
    return de(d - 887, g);
  }
  const n = x();
  function o(s, c, d, g, C) {
    return de(C - 145, g);
  }
  function r(s, c, d, g, C) {
    return de(s - 488, C);
  }
  function a(s, c, d, g, C) {
    return de(d - -857, s);
  }
  for (; ; )
    try {
      if (parseInt(t(-170, -182, -193, -187, "pZAq")) / 1 + -parseInt(a("I7nm", -601, -610, -629, -624)) / 2 * (-parseInt(t(-189, -195, -204, -208, "wA$C")) / 3) + parseInt(e(1158, 1151, 1140, "C@]P", 1151)) / 4 * (parseInt(r(755, 764, 741, 735, "3rOl")) / 5) + parseInt(t(-173, -192, -176, -191, "A1mh")) / 6 + parseInt(o(416, 396, 412, "fe8!", 409)) / 7 + parseInt(o(378, 414, 400, "BShT", 399)) / 8 * (parseInt(o(394, 389, 373, "*%m&", 389)) / 9) + -parseInt(a("uNY$", -610, -600, -594, -599)) / 10 === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Xx, -485 * -2155 + -86501 + -249190);
function Xx() {
  const x = ["k8kebweX", "ECkjjcb0", "tgldKgOMyM3dLCon", "B0uDiYv1WPVcQqdcRNu9W4q", "DN3dQh1IrSkQWQNcGtFcJb5G", "WRRcUSkbW4NdJa", "sW7cKb7cP1HnWQldLmoRcCoU", "WOJcRCkafW", "W643ECkwyG", "WP5IW58ZW6SmE8omWQJdMW", "FSkvAmkkW78", "sqxcNHhcOfGkWPtdISoIk8otsq", "FLjpbmkl", "W5RcSCkxidlcIGu", "rdJcOeFcPwaruCkE", "W5VcRSkXxCkDW6RcKG", "ECkXWQKHw3lcTuJdNW", "nsbT", "W4TalwC", "pfbUbSowcZNdJmkgbGtdJsNcIW", "W4aNhwxdNa", "WRKnWQXPduSDWQlcQIRdV8kUuq", "isFcSIK", "WODDWO7dU8k3", "EmoFWPaYW7W", "xKJdISoJm33dTSocxSopWOhcPCoQ", "Fmojvr5Sm8ooqqmyWR7cJ8oU", "WRNcU8kDW5FdUW", "W7b8pZdcQG", "wmo7W7bOW7xcLSkDW4GgBmkRtMy", "BKdcPq", "mrBdQ03cOCkvi8kTw8kjmSkaW6yn", "W688ECkwyG", "g8kIWR8", "ux9eCG", "W5zuiNBdIa", "eaiwp8k8jmk2W63dPSoj", "BLvuamkt", "W6dcRmokW68UW5zDW5Db", "W6BcOCokWRD0WO1LW4LtW6ZcOxW", "WRBdQ8klW7aW", "WOVcP8kFfsi", "lCkvdK8M", "FCo3gXLnWQPkhSosFX7cLCkF", "WO4FW6JcMCoD"];
  return Xx = function() {
    return x;
  }, Xx();
}
function de(x, i) {
  const t = Xx();
  return de = function(e, n) {
    e = e - (-2 * 1509 + -416 + 3657);
    let o = t[e];
    if (de.VfvVqN === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      de.HHEqPC = d, x = arguments, de.VfvVqN = !0;
    }
    const a = t[-49 * 133 + 1 * 6421 + 96], s = e + a, c = x[s];
    return c ? o = c : (de.pyJNry === void 0 && (de.pyJNry = !0), o = de.HHEqPC(o, n), x[s] = o), o;
  }, de(x, i);
}
async function sI() {
  function x(d, g, C, u, p) {
    return de(p - 92, g);
  }
  const i = {};
  i[c(-40, -54, -72, "6u@^", -56)] = pc, i[c(-58, -44, -55, "*q64", -64) + "h"] = 256;
  const t = await window[x(346, "a%2q", 349, 337, 354) + "o"][c(-41, -68, -62, "gA[u", -51) + "e"][c(-56, -83, -88, "fe8!", -77) + r("fe8!", 841, 818, 835, 819) + "y"](i, !0, [s(958, 943, 951, "3yzd") + "pt", r("2kWr", 844, 841, 845, 827) + "pt"]), e = Uint8Array[a(-563, -572, "fx)D", -574)](Array(-1378 + 73 * 29 + -723)[x(346, "pZAq", 358, 357, 352)](1 * -2608 + 1 * 9898 + -7290)), n = window[a(-551, -556, "JBAG", -553) + "o"][s(941, 924, 910, "@2cM") + s(906, 928, 918, "HO4e") + c(-62, -70, -76, "@P9G", -75)](e), o = {};
  function r(d, g, C, u, p) {
    return de(p - 581, d);
  }
  o[r("Q6DB", 824, 784, 783, 804)] = t, o.iv = n;
  function a(d, g, C, u, p) {
    return de(u - -819, C);
  }
  function s(d, g, C, u, p) {
    return de(g - 685, u);
  }
  function c(d, g, C, u, p) {
    return de(p - -312, u);
  }
  return o;
}
async function cI(x) {
  function i(g, C, u, p, b) {
    return de(g - 69, C);
  }
  function t(g, C, u, p, b) {
    return de(p - -983, C);
  }
  const { iv: e, key: n } = await sI();
  function o(g, C, u, p, b) {
    return de(u - 41, g);
  }
  const r = {};
  r[a("6u@^", 1046, 1068, 1069)] = pc, r.iv = e;
  function a(g, C, u, p, b) {
    return de(p - 813, g);
  }
  const s = await window[i(302, "wA$C") + "o"][a("6u@^", 1031, 1052, 1041) + "e"][i(294, "2kWr") + "pt"](r, n, x), c = await window[a("zVfg", 1034, 1048, 1043) + "o"][t(-735, "zVfg", -752, -733) + "e"][o("fx)D", 272, 275) + i(296, "ULA3")](i(295, "3rOl"), n), d = {};
  return d[t(-726, "HO4e", -695, -718) + "ge"] = s, d[i(324, "ZOz^")] = c, d.iv = e, d;
}
function Ge(x, i) {
  const t = Mx();
  return Ge = function(e, n) {
    e = e - (-26 * 199 + 6087 + -1 * 468);
    let o = t[e];
    if (Ge.ODtels === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Ge.woWTpw = d, x = arguments, Ge.ODtels = !0;
    }
    const a = t[91 * -1 + 371 + 70 * -4], s = e + a, c = x[s];
    return c ? o = c : (Ge.cELrrc === void 0 && (Ge.cELrrc = !0), o = Ge.woWTpw(o, n), x[s] = o), o;
  }, Ge(x, i);
}
function Mx() {
  const x = ["nZnCcYrhFdDbtW", "zqvepmkDyCkInSkvaCoiW4S", "W5T6WOeSWR8OgHnAWO1LBSkl", "W7tcSCkbsmoW", "W57dSSk/fmkHd1TGW47cTCkpW6dcRCol", "DrRcR8kth03dHSkfW4fyWOa", "WRvgC1fL", "W515WOqQWRSRhu5TWRTWDmklWPy", "rCkgW6hdI8k7BqNcQSoEW43dOSo8W44", "wNVcVSk/cXldMbW", "W7DRWQTqy8oZWP/dRCk8ese", "y8kosxNcRq", "W53dJmkkcx7dNSkcW4NdVCkBwmoPWO06", "eg/dGCkoWRvsW4a", "EfJdImortgJdNG", "i0RdUmozBG", "yuD2kWxdM3NcPG", "ACovqmo6vCoxWPxdGSorgSk4bW", "WQJdOSofp8kOW7qrqCkjWRVcJG", "ySoqt8oYuCowW4/dGSorjmkcjtm", "jLddTSogBG", "iSk9WPjqWP0", "W4S9hr8", "A8oxqCo0u8ouW4VcN8oefCkueH/cJW", "qmkpWPTyWPymxG", "W7JdUv95bSorW4i7W4VdOa", "WOVdILLIW7rrWOu", "W6xdMmovgfm", "g8ksWPGyW74FbSocW7j3WPpdLrm"];
  return Mx = function() {
    return x;
  }, Mx();
}
(function(x, i) {
  const t = x();
  function e(s, c, d, g, C) {
    return Ge(c - -220, s);
  }
  function n(s, c, d, g, C) {
    return Ge(c - 312, s);
  }
  function o(s, c, d, g, C) {
    return Ge(s - -883, g);
  }
  function r(s, c, d, g, C) {
    return Ge(g - 481, s);
  }
  function a(s, c, d, g, C) {
    return Ge(g - -329, d);
  }
  for (; ; )
    try {
      if (parseInt(e("@tgn", 245, 245, 238, 232)) / 1 * (-parseInt(n("PvzG", 759, 766, 750, 759)) / 2) + parseInt(n("rCT#", 773, 778, 763, 776)) / 3 + parseInt(n("5C9E", 771, 767, 760, 763)) / 4 + parseInt(r("2MyT", 936, 934, 949, 948)) / 5 + -parseInt(e("$oCV", 244, 233, 234, 237)) / 6 * (parseInt(a(133, 119, "8bHg", 128, 122)) / 7) + parseInt(e("@tgn", 225, 231, 227, 230)) / 8 * (-parseInt(r("evX$", 923, 931, 935, 937)) / 9) + -parseInt(e("Sy[q", 240, 251, 230, 237)) / 10 * (-parseInt(o(-434, -438, -422, "p4dg", -443)) / 11) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Mx, -112442 * -3 + -1210434 + -413 * -4327);
function gI(x) {
  function i(a, s, c, d, g) {
    return Ge(s - -520, d);
  }
  const t = new ArrayBuffer(x[i(-58, -49, -42, "bKC)") + "h"]), e = new Uint8Array(t);
  function n(a, s, c, d, g) {
    return Ge(c - 107, a);
  }
  function o(a, s, c, d, g) {
    return Ge(c - -576, a);
  }
  function r(a, s, c, d, g) {
    return Ge(d - -693, s);
  }
  for (let a = -47 * 117 + 7343 * -1 + 12842, s = x[o("*S%0", -124, -124) + "h"]; a < s; a++)
    e[a] = x[r(-252, "@tgn", -261, -247) + n("H4c^", 572, 573)](a);
  return t;
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return le(d - -877, g);
  }
  function e(s, c, d, g, C) {
    return le(c - -198, d);
  }
  function n(s, c, d, g, C) {
    return le(d - -160, c);
  }
  function o(s, c, d, g, C) {
    return le(s - 410, C);
  }
  const r = x();
  function a(s, c, d, g, C) {
    return le(c - -469, C);
  }
  for (; ; )
    try {
      if (parseInt(a(-30, 53, 130, -1, "%l2(")) / 1 * (-parseInt(e(391, 462, "u#sI", 361, 485)) / 2) + -parseInt(e(410, 318, "U#]T", 432, 431)) / 3 + parseInt(n(345, "yfgI", 403, 485, 471)) / 4 + parseInt(n(350, "^CYy", 334, 235, 374)) / 5 + parseInt(a(194, 95, 155, 41, "omY^")) / 6 + parseInt(t(-412, -440, -422, "56Oh", -367)) / 7 * (parseInt(o(855, 782, 879, 771, "RS]G")) / 8) + -parseInt(o(1025, 1080, 1105, 1088, "u#sI")) / 9 === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(_x, 325 * 221 + -1 * -224881 + 424631);
function le(x, i) {
  const t = _x();
  return le = function(e, n) {
    e = e - (-13 * -17 + -1223 * 7 + 8783);
    let o = t[e];
    if (le.RWrDvv === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      le.htFGtz = d, x = arguments, le.RWrDvv = !0;
    }
    const a = t[-1117 * -6 + -1 * 4065 + -293 * 9], s = e + a, c = x[s];
    return c ? o = c : (le.jsIPea === void 0 && (le.jsIPea = !0), o = le.htFGtz(o, n), x[s] = o), o;
  }, le(x, i);
}
function _x() {
  const x = ["W5pcOCo4bCoJ", "W5qOwgH6", "DSkxW4FdS8k4", "W7PnWR10W6i", "qSkenSoYW5K", "W7rTW5zSxW", "DKdcJMZcHq", "bmkPWQasW5W", "hSonW5r+ga", "WORdTavxW58", "aCkhnmovW7y", "j8orbsuh", "eSoFnb8y", "W73dGtFdHua", "p8olW6dcGGO", "W5vFW5fWBa", "bSoAnsCF", "oN44vbiwn8kKW4pcKxPhW6K", "kLpdImotqa", "mNVcGGvi", "a8oscmkHiG", "W6FdUvldK2a", "WONdGdumWQa", "WR/cHv83W74", "W7XWW5ygsa", "dKtcVSkRrW", "WOtdPSkUzCof", "WRLCWPlcI1O", "v8k4WR/dKSk7", "j8okW49laa", "hx1sWO/cHq", "BSoKWRKVia", "WQr7WQTTW5G", "W5GWqfzk", "CcjLW6NcOW", "W5JcMZtcNW", "W4hdKgeEnG", "WRHpEmkRW60", "W5jNsaHF", "W43cKGhcL8oODIldN8kTW682vvq", "W5y2wffb", "lCosW7vi", "zhRcUMJcGG", "WRjQbLrfWOSfWRaV", "qe3dGJtcSq", "xt02WOBcQCkUFSobnse", "W6pdNMxcS2O", "gSosyXmd", "W559WR4imW", "gSkwxgtcJW", "gZddHCkLwa", "u8k4hmoAW6q", "W6lcV23dJNu", "CSkXm8k4BW", "W7/dG2lcH0m", "bCoRW6hcRG", "oGyvbSod", "fCozW4RdPJG", "WPnHpSkXWPC", "W6GXqffI", "aCo1w2FcLa", "W6FdIaJcGhi", "W5RdNmo7ucC", "s8oxfsldGJhcMCk8WPlcN35iWRu", "zSoMW6/cHmo9", "e0lcHMhcTq", "yCkEaSocW4O", "WRldMGhcKgm", "nSoqW4hcMG8", "oqL3muG", "gSoDzbmo", "WPztWO7cGLu", "hmosgSkJlG", "fSoHW658na", "ESoIF8oFWQm", "bSk5iCkhoa", "W4r6W5TTxa", "j1pdSNjv", "q8oepJfU", "W7L/WPj6W7u", "W6lcVqVcSKy", "ggVdPtrm", "W7tdPuK7ba", "WPu+b8opWOu", "xHbFpNm", "W5lcPSkKvcVcQSo7EXGhW7/cGr8", "ASk8nqJdTWGRaCockmoVWPjH", "W5xdNSoZy8kccSomWQ8MwL0nWPy", "WRRdImkZu8kJ", "lgRdLCkVW7C", "WP49WOBcG2W", "W4vxzM5h", "W518WRyJdW", "u8kcW7ddKSkP", "nqj1x8o4", "W5/dQcLIWQS6cLPOWOtdI8knW6K", "W7bLWQ1xW64", "WPzdWPT4uW", "cSkutN0", "bKTsW5tcQW", "W6tdUwNdH24", "pSkbimkhdq", "fdylq8oB", "gmoQpsW", "WOtdLZJcLSou", "nshdM8kQBW", "AmoQjx/cTq", "W6HxWORcJwC", "xmkVvSkBoW", "WO3dOvCSW40", "FSkHW4tdNCkk", "W4nbWOLBFW", "lLq8WORcUG", "AK7cMK7cIq", "fSk3d8kxbq", "WOJcVCkmbCoz", "xSkfWR4GW4i", "W7JdGxtdIMm", "stSHggS", "W7feWRXUvW", "h8kihSo+dG", "egldTmo/yq", "u2zDW5dcQq", "jqy1WRpcNG", "jmk5W6FcSmky", "v8oWW5BcPCoS", "WQVcOhidW7m", "WOFdGxlcLd8", "WQ3dTSoFbI8", "W6nFW5jHnW", "jmomW4dcHM4", "yeDDW7FcIq", "ACkXpapdVWORk8otfmo6WPLO", "aLmMtx/cNb3cQSk0W7O", "r8o/xSoQWO8", "fM3cKSoLuq", "lfvuW4VcRW", "j8oPWRxcNgW", "tWRcHNmIWQxdISoZW4fiW5KBW5K", "W4hcRq/cNMK", "omo2W77cMHC", "gCocvSoDWP8", "W43dHu/dH8kY", "WPjMkCkMWOu", "AxRcUrhcJa", "l8k5w8o6DG", "g2ZdR8kxbq", "dCkCqvdcUq", "qsjfW7/cNW", "CwNcMg/cHq", "W6tdRKJcSfC", "qSk8uCkSmW", "u07dRLldPq", "W4jRyq46", "W6/cLLufDG", "lwBdMSkGW7y", "W6ZdTdNcGSo3", "bmkLl8k0oq", "W5mOyW1w", "WQtdJ2tdK8kx", "pCoDW4ZcPmoS", "WRrvWORcGfu", "B2xdNSkYAW", "etVdHdxdLSoXWQiRbJLQiZa", "W40BW7ddLSk1", "zCkzW7xcU8or", "hYiUq8oh", "z8o3lwVcQW", "jSocW5hcGq8", "W5DmWRCexW", "dgtdOIv6", "WRddH8kXxmov", "WRvqF8kvWQC", "aJCLifC", "W49/W5qmqa", "WOlcOb3cV1y", "vKPXW6NcNq", "ruDFWOtcLa", "W7n1W4HwnW", "k2BdHYHn", "cmkkp8k3ca", "WPNdIqf6WO4", "aSorlwRcPG", "tGJcGsToW6/cICoeW6K", "jvaiW7ZcRq", "W6KVW6mhxq", "DwH6W77cIW", "a8o5W6/cNM8", "WQJdHmkdnSof", "tSk7eYq9", "W7ddIvyRjW", "xSkBWOhcISos", "WQJdPvRdTmkq", "WPNcK1PNW50", "W5KxaL1Q", "WRerWRpcPW", "W47dGatdRmki", "ESkmW7NdRq", "FCkqW45iftWJWPO", "W6dcJHRcLK8", "bmo2WRxcPY4", "leVdRmkRWR8", "w8omrmoNWRm", "o8omW4VcGcq", "cxNdPHzZ", "W5nmtsLs", "qSo9W6/cRCoP", "xvTVW5FcQW", "a1iJqGldNKdcTCkNW6FdVZpcGW", "mItcH8oCuW", "WRWmWOBcJuu", "uLZcP1ldKG", "fCoIW5FcUGy", "eSkUBNddIq", "W5BdMxxdGe4", "WQ3cQSkQzCoS", "gxBdQmkGWPa", "WOpdPvRcKSo8", "sSoMjYvo", "ECozW6VcTSkV", "WOpdVHNcPSoV", "mX3cGmozvq", "wCo8W5tcI8ow", "qmonxmozWPq", "W7CDWQX8zq", "W6ryAcLM", "tmkRC0BcOq", "cLVdP8oAtW", "ESkMf8oeWRq", "WONdGmkZq8kL"];
  return _x = function() {
    return x;
  }, _x();
}
function dI() {
  function x(d, g, C, u, p) {
    return le(C - -687, u);
  }
  const i = a("m4JH", 1417, 1378, 1427) + r(175, "$$5!", 181) + r(202, "vxLx", 229) + x(-189, -41, -108, "!9Z3") + a("Bhlh", 1539, 1458, 1526) + a("Bhlh", 1544, 1492, 1473) + r(159, "9I0z", 166) + x(-189, -138, -105, "*Uqk") + c(1192, 1222, 1021, "t9(s", 1113) + x(-114, -129, -80, "Cc9g") + r(179, "einx", 106) + a("NRQe", 1364, 1453, 1423) + n(1248, 1176, 1163, 1275, "y6vX") + r(335, "4spd", 232) + a("Cc9g", 1307, 1491, 1417) + a("t9(s", 1597, 1546, 1587) + r(149, "*Uqk", 75) + n(1213, 1308, 1216, 1251, "YyoL") + c(1064, 921, 968, "LA7g", 968) + x(-182, -157, -109, "blj^") + r(12, "Cc9g", 98) + c(1125, 1130, 1041, "Cc9g", 1101) + x(-48, -45, -79, "4spd") + a("vxLx", 1524, 1485, 1488) + x(-288, -160, -186, "YyoL") + a("964j", 1527, 1409, 1463) + c(1081, 1069, 1028, "4spd", 998) + r(258, "Y@PX", 256) + r(157, "[MS%", 272) + c(982, 981, 949, "a9oZ", 995) + x(-109, -9, -84, "36nn") + n(1226, 1148, 1197, 1115, "ZFdP") + n(1302, 1261, 1190, 1210, "!9Z3") + r(77, "Y@PX", 142) + x(-125, -125, -82, "Lh2s") + x(-26, 35, -75, "ZFdP") + c(1190, 1227, 1057, "blj^", 1121) + r(191, "hSLt", 251) + r(18, "YyoL", 99) + a("U#]T", 1327, 1429, 1401) + n(1304, 1276, 1205, 1281, "%^Y4") + r(150, "xFn^", 225) + a("!9Z3", 1424, 1560, 1491) + x(-35, -80, -16, "y6vX") + x(-95, 11, -30, "blj^") + x(-94, -16, -97, "ETQ$") + x(-56, -87, -103, "5E0!") + a(")d$!", 1572, 1521, 1574) + r(160, "RS]G", 157) + c(1172, 1212, 1149, "U#]T", 1106) + a("%l2(", 1433, 1574, 1534) + r(158, "Cc9g", 224) + n(1398, 1392, 1365, 1486, "9I0z") + a("xA3P", 1370, 1411, 1419) + c(961, 998, 1029, "%l2(", 994) + x(-72, -88, -35, ")d$!") + n(1328, 1306, 1353, 1387, "blj^") + x(-165, -224, -204, "t9(s") + a("u#sI", 1318, 1503, 1409) + c(985, 1101, 1179, "xA3P", 1081) + n(1292, 1321, 1360, 1405, "^CYy") + r(121, "^Erq", 71) + x(-70, -144, -139, "5E0!") + a("Bhlh", 1395, 1483, 1410) + n(1400, 1387, 1349, 1326, "U#]T") + a("m4JH", 1658, 1493, 1595) + c(1072, 1257, 1223, "36nn", 1157) + n(1333, 1223, 1394, 1430, "m4JH") + a(")d$!", 1478, 1446, 1515) + a("^Erq", 1556, 1447, 1539) + x(-133, -134, -120, "5E0!") + c(1192, 1222, 1205, "YyoL", 1133) + n(1216, 1131, 1172, 1125, "RS]G") + a("4spd", 1508, 1478, 1557) + x(-194, -188, -225, "omY^") + n(1204, 1214, 1182, 1189, "j*(R") + a("XVQ^", 1395, 1488, 1447) + c(1192, 1214, 1180, "56Oh", 1137) + x(-82, -226, -194, "XVQ^") + n(1189, 1081, 1258, 1186, "ETQ$") + n(1241, 1345, 1259, 1169, "y6vX") + x(-346, -179, -239, "p9V2") + x(-142, -135, -153, "Cc9g") + r(205, "T53B", 196) + n(1284, 1348, 1289, 1280, "$$5!") + x(-180, -54, -142, "Cc9g") + c(1079, 1213, 1197, "XVQ^", 1153) + x(-5, -22, -95, "omY^") + c(1061, 1046, 972, "t9(s", 1006) + r(22, "[MS%", 110) + n(1318, 1380, 1209, 1381, "964j") + x(-232, -221, -143, "xA3P") + n(1206, 1231, 1133, 1257, "xFn^") + c(874, 985, 902, "y6vX", 965) + n(1197, 1298, 1184, 1310, "964j") + x(-116, 61, -46, "tvzd") + n(1202, 1221, 1296, 1232, "$$5!") + x(-35, -235, -122, "[MS%") + a("y6vX", 1643, 1614, 1593) + x(-141, -21, -39, "[MS%") + a("U#]T", 1595, 1536, 1594) + r(224, "ETQ$", 149) + r(44, "yfgI", 144) + r(305, "hSLt", 190) + a("36nn", 1617, 1590, 1544) + n(1390, 1365, 1485, 1359, "hSLt") + c(1188, 1211, 1217, "py$e", 1114) + x(-44, -22, -36, "YyoL") + c(1128, 1087, 1180, "u#sI", 1143) + a("%^Y4", 1365, 1519, 1438) + r(245, ")d$!", 145) + a("XVQ^", 1559, 1521, 1446) + r(300, "5E0!", 245) + r(192, "vxLx", 235) + c(1152, 1144, 958, "Y@PX", 1047) + n(1344, 1454, 1443, 1297, "%l2(") + c(949, 836, 942, "*Uqk", 943) + c(981, 897, 1050, "RS]G", 993) + r(300, "vxLx", 192) + x(-9, -155, -64, "@M[#") + n(1194, 1106, 1206, 1106, "p9V2") + a("964j", 1556, 1637, 1528) + n(1384, 1465, 1292, 1269, "4spd") + c(1057, 934, 894, "xFn^", 957) + n(1394, 1452, 1398, 1404, "4spd") + n(1370, 1459, 1302, 1442, "@M[#") + n(1351, 1440, 1387, 1386, "Y@PX") + n(1378, 1431, 1424, 1317, "u#sI") + r(377, "m4JH", 275) + a("XVQ^", 1452, 1611, 1505) + c(972, 951, 968, "einx", 973) + r(271, "Cc9g", 271) + x(-98, -63, -166, "ETQ$") + a("YyoL", 1606, 1663, 1613) + c(951, 971, 997, "yw]1", 1056) + c(1228, 1114, 1190, "Cc9g", 1132) + n(1227, 1260, 1207, 1303, "u#sI") + x(-30, -93, -76, "xFn^") + x(-244, -95, -190, "blj^") + n(1207, 1119, 1141, 1293, "[MS%") + c(935, 953, 1059, "py$e", 1018) + n(1235, 1169, 1342, 1274, "5E0!") + x(-110, -91, -29, "einx") + n(1178, 1272, 1067, 1113, "Cc9g") + n(1210, 1150, 1112, 1204, "964j") + n(1245, 1223, 1326, 1242, "Y@PX") + x(-198, -90, -138, "blj^") + a("LA7g", 1611, 1433, 1501) + n(1285, 1362, 1181, 1294, "u#sI") + c(936, 1014, 991, "^Erq", 954) + c(903, 1068, 984, "py$e", 1010) + x(-58, -131, -94, "GuQu") + r(-5, "py$e", 97) + a("Bhlh", 1496, 1541, 1588) + x(-264, -328, -238, "xFn^") + x(-103, -207, -200, "LA7g") + a("L3e4", 1448, 1538, 1562) + a("p9V2", 1484, 1498, 1590) + r(35, "Cc9g", 57) + x(-2, -207, -96, "blj^") + r(144, "py$e", 184) + c(961, 994, 1012, "%^Y4", 1043) + r(218, "xFn^", 158) + c(826, 1035, 1016, "m4JH", 940) + n(1385, 1343, 1337, 1320, "4spd") + n(1392, 1357, 1441, 1416, "4spd") + a("5E0!", 1328, 1469, 1415) + r(133, "GuQu", 91) + a("LA7g", 1479, 1379, 1486) + n(1297, 1398, 1260, 1330, "p9V2") + c(1042, 1140, 1149, "j*(R", 1111) + r(157, "XVQ^", 131) + r(259, "u#sI", 165) + c(1066, 972, 1121, "NRQe", 1042) + x(-69, -197, -89, "ZFdP") + n(1256, 1298, 1283, 1256, "yw]1") + c(1150, 1031, 981, "T53B", 1087) + n(1191, 1269, 1285, 1133, "j*(R") + x(-113, 41, -45, "m4JH") + a("blj^", 1560, 1600, 1510) + a("YyoL", 1605, 1702, 1620) + r(35, "@M[#", 134) + x(17, -39, -54, "^Erq") + c(1035, 1040, 1024, "m4JH", 1028) + x(-183, -266, -187, "36nn") + n(1240, 1290, 1165, 1316, "%^Y4") + a("9I0z", 1477, 1540, 1589) + r(152, "56Oh", 202) + a("t9(s", 1473, 1624, 1579) + a("ZFdP", 1442, 1473, 1432) + x(-337, -154, -241, ")d$!") + a("%l2(", 1350, 1330, 1412) + c(1027, 1078, 975, "$$5!", 1083) + a("^CYy", 1506, 1521, 1504) + x(-292, -148, -185, "*Uqk") + a("964j", 1644, 1613, 1559) + n(1260, 1349, 1340, 1271, ")d$!") + r(46, "omY^", 84) + x(-10, -195, -81, "YyoL") + r(66, "Lh2s", 146), t = window[n(1403, 1458, 1497, 1389, "5E0!")](i), e = window[c(899, 936, 962, "RS]G", 1005)](t);
  function n(d, g, C, u, p) {
    return le(d - 731, p);
  }
  const o = gI(e);
  function r(d, g, C, u, p) {
    return le(C - -393, g);
  }
  function a(d, g, C, u, p) {
    return le(u - 958, d);
  }
  const s = {};
  s[x(-123, -72, -107, "XVQ^")] = hc, s[n(1175, 1264, 1199, 1286, "964j")] = hl;
  function c(d, g, C, u, p) {
    return le(p - 487, u);
  }
  return window[r(177, "j*(R", 133) + "o"][a("Bhlh", 1405, 1400, 1430) + "e"][a("y6vX", 1602, 1420, 1494) + x(-261, -245, -155, "Cc9g")](n(1306, 1263, 1271, 1273, "j*(R"), o, s, !0, [x(-47, -200, -99, "$$5!") + "pt"]);
}
async function uI(x) {
  function i(r, a, s, c, d) {
    return le(a - -851, d);
  }
  const t = await dI(), e = {};
  function n(r, a, s, c, d) {
    return le(d - -44, a);
  }
  function o(r, a, s, c, d) {
    return le(a - 10, d);
  }
  return e[i(-351, -339, -295, -379, ")d$!")] = hc, window[i(-418, -338, -231, -373, "9I0z") + "o"][n(523, "!9Z3", 656, 495, 599) + "e"][o(543, 508, 407, 437, "xA3P") + "pt"](e, t, x);
}
(function(x, i) {
  const t = x();
  function e(s, c, d, g, C) {
    return Fe(g - 36, s);
  }
  function n(s, c, d, g, C) {
    return Fe(d - -974, C);
  }
  function o(s, c, d, g, C) {
    return Fe(c - 614, C);
  }
  function r(s, c, d, g, C) {
    return Fe(s - -481, C);
  }
  function a(s, c, d, g, C) {
    return Fe(s - -781, d);
  }
  for (; ; )
    try {
      if (-parseInt(a(-663, -658, "Ra#b", -662, -674)) / 1 * (parseInt(o(735, 727, 729, 720, "WkzR")) / 2) + parseInt(a(-664, -653, "W!yN", -654, -665)) / 3 + parseInt(a(-659, -656, "Ra#b", -651, -661)) / 4 * (-parseInt(r(-352, -360, -343, -353, "2YSc")) / 5) + parseInt(r(-362, -360, -368, -355, "WkzR")) / 6 * (parseInt(n(-836, -841, -844, -839, "6i)v")) / 7) + -parseInt(o(742, 747, 756, 737, "vrRL")) / 8 + -parseInt(n(-848, -854, -851, -858, "ua)H")) / 9 + parseInt(e("n&yq", 153, 156, 156, 162)) / 10 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Jx, 11 * 70838 + -62333 * -17 + -1107 * 907);
function Fe(x, i) {
  const t = Jx();
  return Fe = function(e, n) {
    e = e - (-1135 + 1 * -3841 + 7 * 727);
    let o = t[e];
    if (Fe.HrclKx === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Fe.dVxTrT = d, x = arguments, Fe.HrclKx = !0;
    }
    const a = t[-659 * -10 + -8849 + 251 * 9], s = e + a, c = x[s];
    return c ? o = c : (Fe.NrdtYY === void 0 && (Fe.NrdtYY = !0), o = Fe.dVxTrT(o, n), x[s] = o), o;
  }, Fe(x, i);
}
function Jx() {
  const x = ["qtpdSWdcUGm3ACkRcSonWOq", "t8kDWRpcS8osWRTC", "W7hcH8o3jaJcT8kyW4H0tG", "cHxcStanW4uoWRJdUmoQkCoEDq", "l0hdIeXVW7RdTSomD30", "sCogW4FdJmooWPvvFCoaW4q", "t8kIoreBW7KGWOiIWRJcHmo2W4y", "pCksWRnPW6O", "W7hcJmo0lf3cSSkDW6bZE1y", "uSkvoW", "WQpdOLy4rSkKmfNdMSo/WP3cJmkH", "mfSFysu3F8ogBmobWPvIiG", "sH04mmkFWORdGmoZobS", "vdFdPCk7rCo1CmkDW6fujq", "WQtdPvu7qmo+CKddMCoMWPi", "iMKSWPRdUXxdR8oSvxW", "dSoaESo+WQxdGmklWQFdICkIW6pdK8kc", "wmo7E3DxW4FcUColW4Gh", "W7FcGmoYk1pcImkbW4zeCx4", "W6NdISorjmoeBSo+W74qlCkOWOC", "WQxdOLa0qCkMn2hdMCo1WPpcLmka", "W6NdNcJcIJtdOSo6"];
  return Jx = function() {
    return x;
  }, Jx();
}
async function lI(x) {
  const { iv: i, key: t, message: e } = await cI(x), n = await uI(t), o = {};
  o[r(864, 860, 871, "vrRL")] = n, o.iv = i, o[r(875, 868, 869, "EVk3") + "ge"] = e;
  function r(a, s, c, d, g) {
    return Fe(c - 745, d);
  }
  return o;
}
(function(x, i) {
  const t = x();
  function e(s, c, d, g, C) {
    return ke(c - 284, g);
  }
  function n(s, c, d, g, C) {
    return ke(c - 543, s);
  }
  function o(s, c, d, g, C) {
    return ke(C - 605, s);
  }
  function r(s, c, d, g, C) {
    return ke(s - -890, C);
  }
  function a(s, c, d, g, C) {
    return ke(c - 868, s);
  }
  for (; ; )
    try {
      if (-parseInt(o("ec$K", 956, 980, 982, 969)) / 1 * (-parseInt(o("&dM$", 987, 993, 992, 979)) / 2) + -parseInt(o("A0[@", 976, 961, 985, 975)) / 3 + parseInt(e(638, 641, 640, "77jD", 648)) / 4 * (-parseInt(a("YU38", 1245, 1248, 1233, 1257)) / 5) + parseInt(r(-527, -537, -511, -516, "TbfQ")) / 6 + -parseInt(r(-515, -518, -528, -520, "oh0r")) / 7 * (-parseInt(e(667, 671, 668, "Y3D!", 685)) / 8) + -parseInt(n("0l80", 929, 915, 915, 923)) / 9 + parseInt(r(-518, -532, -524, -527, "TbfQ")) / 10 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Ux, 485113 + 213 * -2442 + 814101);
async function II(x) {
  function i(r, a, s, c, d) {
    return ke(r - -148, s);
  }
  const t = await window[o(119, "&0I$", 139, 123, 132) + "o"][o(134, "uFtx", 124, 129, 139) + "e"][i(217, 201, "!f%m") + "t"](n(1135, 1136, 1159, 1145, "vKKZ"), x);
  function e(r, a, s, c, d) {
    return ke(a - -751, d);
  }
  function n(r, a, s, c, d) {
    return ke(c - 760, d);
  }
  function o(r, a, s, c, d) {
    return ke(d - -229, a);
  }
  return Array[n(1136, 1153, 1150, 1143, "MciA")](new Uint8Array(t))[n(1129, 1131, 1150, 1139, "LO3#")]((r) => r[e(-379, -369, -361, -357, "A0[@") + i(219, 223, "yX(N")](-23 * -293 + 817 + 290 * -26)[i(214, 228, "&0I$") + n(1154, 1153, 1152, 1140, "Y3D!")](1 * -1953 + -5 * -81 + 155 * 10, "0"))[o(148, "YEgJ", 163, 159, 152)]("");
}
function ke(x, i) {
  const t = Ux();
  return ke = function(e, n) {
    e = e - (8346 + -3 * 2663);
    let o = t[e];
    if (ke.WbCtDP === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      ke.EBEqvG = d, x = arguments, ke.WbCtDP = !0;
    }
    const a = t[3114 + 2 * -1669 + 224], s = e + a, c = x[s];
    return c ? o = c : (ke.qsOkPH === void 0 && (ke.qsOkPH = !0), o = ke.EBEqvG(o, n), x[s] = o), o;
  }, ke(x, i);
}
function Ux() {
  const x = ["w8oGW5CZWOC", "n1BcOIu", "W7tcPdZcQgyQCSobjmo3W4WhWRuE", "g8ojdN7dVa", "WRS7W5bHWORcOWBcPgDWqcyF", "kdWSiIfGqvZcOZXQW5q", "WRb4W7BcGZqMW6NdHGpdK8k7", "iH3dUW3dHxpcPSo5aCkYECkhcW", "vf1CWQpcQwZcQmk6wG3cRIa", "uLTDWQ3cQg7cJ8kMyGpcScu", "W4pcMSk9WPu0", "W5dcICkGWRy0", "CSk3wmkzWQpcQ8kyWPicy0NdJqq", "W7q9tSo0WRBdSZK", "nMFdVSkIW4e", "WRjVWPaAW6VdULy", "WOhdJCkC", "WRxcI0RcVCkq", "mvldHmkEmtldJLDg", "g8k9WRr+W4FdHmoHvx7dS8kbWRZdRq", "WRtdImkyaftcUMBdIce4BmoKW4e", "CCk/xmkBWQxcRCkCW7qwv1RdUWrc", "WPKJjuqDW5uwW5/cJJDHr8kf", "W5PTW5xcJfhcOSkxEhxcG8kiWOq", "lSoaW4Xujxi9W5uq", "tSovW6qoWRm0W6ddL8k0W4Sn", "CSkoW5ddOJH9l8k+cG", "kdGTy1qYx0BcVW", "BSkUfW", "EhTG", "WQmqWORcLq"];
  return Ux = function() {
    return x;
  }, Ux();
}
(function(x, i) {
  var t = x();
  function e(a, s, c, d, g) {
    return dt(s - 116, a);
  }
  function n(a, s, c, d, g) {
    return dt(a - -566, g);
  }
  function o(a, s, c, d, g) {
    return dt(c - -296, d);
  }
  for (; ; )
    try {
      var r = parseInt(n(-212, -216, -202, -205, "!bWt")) / 1 * (parseInt(e("aqpc", 472, 476, 462, 472)) / 2) + parseInt(e("h^4N", 475, 467, 486, 484)) / 3 * (parseInt(n(-209, -203, -200, -219, "4&Wb")) / 4) + -parseInt(o(56, 57, 64, "qEQa", 73)) / 5 + -parseInt(e(")8dm", 467, 460, 474, 466)) / 6 + -parseInt(n(-221, -230, -230, -214, "p758")) / 7 * (-parseInt(n(-219, -212, -211, -219, "!^ad")) / 8) + parseInt(e("qEQa", 459, 469, 466, 451)) / 9 + parseInt(e("2*#1", 466, 475, 461, 472)) / 10 * (-parseInt(o(53, 54, 48, "^G[u", 42)) / 11);
      if (r === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Qx, 823203 + 5 * -194330 + -591 * -1250);
function Qx() {
  var x = ["d2Lfz8kygN7dQq", "W4xcJJ46W7q7p1BdSW/dHsxcTW", "EZ/dGXC+fga9k8k2", "mSofWOK2stZcMr/cQa", "WOBcOCkfzCo+W5m4", "euXsvMLEagRdM8ktW4O", "dmoPm3jPk8kJtsNcR8oOeSkn", "mxFcNmk6WOJcTCksWPZdIhq", "WPBcPsZdRtn9pmoMW6hdLa", "WOFdISoNp8kQWPnlW7/dNxpcO8oZW58", "W6yMvSolWRvyoSkVquu", "BSkyB8kgvXaUhw/dKJWA", "WR3cJSkDWO9SWRiAWPOnkc0", "fuzCugSqANhdMSkCW4TWqq", "W7BdTSoCkYzYW7FdIq", "WOimWPVcRY/dIaW", "rv4eW6uyWP/cJbbHWOneW6JcUa", "c8kzWOidWQdcPSopCelcL2GEW5K", "W4BcIZu9W7q+Eu3dMH3dNI0", "W71CjePAW7RcPvnjmrm", "W7HFkq0dW6JcN1nL"];
  return Qx = function() {
    return x;
  }, Qx();
}
function dt(x, i) {
  var t = Qx();
  return dt = function(e, n) {
    e = e - (109 * 38 + -9939 + 614 * 10);
    var o = t[e];
    if (dt.IYMwFw === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", b = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (var K = 0, X = u.length; K < X; K++)
          p += "%" + ("00" + u.charCodeAt(K).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, C) {
        var u = [], p = 0, b, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (var W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      dt.bCKkXT = a, x = arguments, dt.IYMwFw = !0;
    }
    var s = t[2 * -1429 + 17 * -141 + 5255], c = e + s, d = x[c];
    return d ? o = d : (dt.CLnEEm === void 0 && (dt.CLnEEm = !0), o = dt.bCKkXT(o, n), x[c] = o), o;
  }, dt(x, i);
}
async function fI(x) {
  const { Image: i } = F0, t = await x.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const o = i.verify(n);
  if (o) throw Error(o);
  const r = {};
  return r.bytes = e, i.create(r);
}
async function CI(x) {
  const { v4: { Metadata: i } } = F0, t = { ...x };
  t.platform = F0.Platform.WEB;
  const e = t, n = i.verify(e);
  if (n) throw Error(n);
  return i.create(e);
}
async function pI(x) {
  const { Content: i } = F0, { iv: t, key: e, message: n } = await lI(x), o = { token: new Uint8Array(e), iv: t, schemaVersion: pl, bytes: new Uint8Array(n) }, r = i.verify(o);
  if (r) throw Error(r);
  const a = i.create(o);
  return i.encode(a).finish();
}
function hI(x) {
  const { Blob: i } = F0.v4, t = i.verify(x);
  if (t) throw Error(t);
  const e = i.create(x);
  return i.encode(e).finish();
}
async function mI(x, i) {
  const { FaceContent: t } = F0.v4, e = await fI(x), n = await CI(i), o = {};
  o.image = e, o.metadata = n;
  const r = o, a = t.verify(r);
  if (a) throw Error(a);
  const s = t.create(r), c = {};
  return c.faceContent = s, hI(c);
}
async function bI(x, i) {
  const t = await mI(x, i);
  return pI(t);
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
    var a = "./this.program", s = !(-9220 + -1 * -9221), c = !(6838 + 671 * -6 + -2811);
    s = typeof window == "object", c = typeof importScripts == "function";
    var d = "", g;
    (s || c) && (c ? d = self.location.href : document.currentScript && (d = document.currentScript.src), x && (d = x), 3070 + 3 * -1723 + 2099 !== d.indexOf("blob:") ? d = d.substr(0, d.lastIndexOf("/") + (569 * -1 + -5 * 1516 + 8150)) : d = "", c && (g = function(I) {
      var f = new XMLHttpRequest();
      return f.open("GET", I, !1), f.responseType = "arraybuffer", f.send(null), new Uint8Array(f.response);
    }));
    var C = t.printErr || console.warn.bind(console);
    for (r in o) o.hasOwnProperty(r) && (t[r] = o[r]);
    o = null, t.thisProgram && (a = t.thisProgram);
    var u;
    t.wasmBinary && (u = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && $e("no native wasm support detected");
    var p, b = !(42 * -68 + -2589 + 5446);
    function A(I) {
      I || $e("Assertion failed: undefined");
    }
    var l = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (-44 * 130 + 2 * 264 + 5192);
    function W(I, f, m) {
      var y = Ke;
      if (-1482 + -78 * -19 < m) {
        m = f + m - (1697 * 4 + -1131 * -3 + -10180);
        for (var S = 3512 * -1 + -3783 + -1459 * -5; S < I.length; ++S) {
          var w = I.charCodeAt(S);
          if (145120 + -7 * 12832 <= w && 57343 >= w) {
            var k = I.charCodeAt(++S);
            w = 1 * 80939 + 56959 + -72362 + ((w & 61 * -153 + -376 * 25 + -4939 * -4) << 1 * 7143 + 9577 + -1671 * 10) | k & -4556 + 71 * -25 + -2 * -3677;
          }
          if (-7043 + 2390 * 3 >= w) {
            if (f >= m) break;
            y[f++] = w;
          } else {
            if (-2512 + 2213 * 1 + 2346 >= w) {
              if (f + (619 + 2 * 1124 + 1433 * -2) >= m) break;
              y[f++] = -6662 * -1 + 1543 * -5 + 1245 | w >> -4003 + 43 * -76 + -19 * -383;
            } else {
              if (113235 + -9 * 5300 >= w) {
                if (f + (-407 * 24 + 3229 * 1 + -31 * -211) >= m) break;
                y[f++] = 224 | w >> 12;
              } else {
                if (f + (-4091 * -1 + 8785 + 12873 * -1) >= m) break;
                y[f++] = 240 | w >> 424 + 13 * 523 + -131 * 55, y[f++] = -7972 + 1 * 4945 + -3155 * -1 | w >> -73 * -49 + -4765 + 600 * 2 & 63;
              }
              y[f++] = -5657 + 709 * -10 + 12875 | w >> 1513 + 592 * 9 + -1367 * 5 & 11 * 227 + -1 * 9629 + 7195 * 1;
            }
            y[f++] = 4105 * -1 + -23 * 14 + -1 * -4555 | w & -9857 + -1240 * -8;
          }
        }
        y[f] = 1901 + -23 * 254 + 3941;
      }
    }
    var K = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-1 * -5498 + -965 * -1 + -6463);
    function X(I, f) {
      for (var m = I >> 1, y = m + f / (2 * -762 + 8 * 1142 + -10 * 761); !(m >= y) && Xt[m]; ) ++m;
      if (m <<= 1528 * 1 + -1 * -5165 + -239 * 28, -6 * 1511 + -9 * 398 + 317 * 40 < m - I && K) return K.decode(Ke.subarray(I, m));
      for (m = -150 + -109 * 65 + 7235, y = ""; ; ) {
        var S = Pt[I + 2 * m >> 1];
        if (2 * -4201 + 7423 + -11 * -89 == S || m == f / (15011 + 5003 * -3)) return y;
        ++m, y += String.fromCharCode(S);
      }
    }
    function M(I, f, m) {
      if (void (-5117 * -1 + -1071 + -578 * 7) === m && (m = 2261837 * -1523 + -5761 * -589829 + 243806281 * 9), 2 > m) return -1 * 8671 + 481 + 8190;
      m -= 2;
      var y = f;
      m = m < 2 * I.length ? m / (-544 + -1245 * 2 + 3036) : I.length;
      for (var S = 6913 + -5930 * -1 + 12843 * -1; S < m; ++S) Pt[f >> 1 * 4231 + -313 * 15 + 155 * 3] = I.charCodeAt(S), f += -12314 + -6158 * -2;
      return Pt[f >> -6135 * -1 + -29 * 326 + 3320] = -4275 + -9565 * -1 + -115 * 46, f - y;
    }
    function J(I) {
      return (859 * 2 + -1 * 4933 + 3217) * I.length;
    }
    function H(I, f) {
      for (var m = 3 * -2461 + 7631 + -1 * 248, y = ""; !(m >= f / (-9818 + 5430 * -1 + 15252)); ) {
        var S = Ze[I + 4 * m >> 2];
        if (1 * 5347 + -3667 + -420 * 4 == S) break;
        ++m, -24536 + -9 * -10008 <= S ? (S -= -7463 * 4 + 18859 * -5 + 189683, y += String.fromCharCode(-105887 + 14653 * 11 | S >> 50 + -1 * 7299 + 7259 * 1, 66934 + 1 * 106133 + -116747 | S & 4762 + -3739 * 1)) : y += String.fromCharCode(S);
      }
      return y;
    }
    function re(I, f, m) {
      if (void (1460 + 1 * 5042 + -6502) === m && (m = -7034 * -31361 + 42024756 * 27 + 792221961), 741 * 11 + 7127 * -1 + -1020 > m) return 6779 + 6779 * -1;
      var y = f;
      m = y + m - (-31 * 152 + 1643 * 2 + 1430);
      for (var S = 0; S < I.length; ++S) {
        var w = I.charCodeAt(S);
        if (-59617 * -1 + -48851 + 8906 * 5 <= w && 2499 * -31 + 27947 * -3 + 218653 >= w) {
          var k = I.charCodeAt(++S);
          w = -113 * -437 + 767 * 9 + 9252 + ((w & 8262 + -4134 * -1 + -1 * 11373) << -1 * -4428 + -1 * -8770 + -13188) | k & -3258 + 604 * 10 + -1759;
        }
        if (Ze[f >> 1 * -5690 + -7439 + 13131] = w, f += 7e3 + -787 * -10 + -14866, f + (-7152 * 1 + 3 * -2517 + -14707 * -1) > m) break;
      }
      return Ze[f >> 1 * -9966 + -124 * 37 + -3639 * -4] = -2 * 4720 + 235 * 21 + 4505, f - y;
    }
    function U(I) {
      for (var f = -171 * 26 + 2938 + 1508, m = -1 * -8747 + -9262 * -1 + -18009; m < I.length; ++m) {
        var y = I.charCodeAt(m);
        -76117 + -1 * -131413 <= y && -30922 * 2 + 78467 + 40720 >= y && ++m, f += 571 * 10 + 2609 + -8315;
      }
      return f;
    }
    var te, Le, Ke, Pt, Xt, Ze, rt, jn, f0;
    function Q0(I) {
      te = I, t.HEAP8 = Le = new Int8Array(I), t.HEAP16 = Pt = new Int16Array(I), t.HEAP32 = Ze = new Int32Array(I), t.HEAPU8 = Ke = new Uint8Array(I), t.HEAPU16 = Xt = new Uint16Array(I), t.HEAPU32 = rt = new Uint32Array(I), t.HEAPF32 = jn = new Float32Array(I), t.HEAPF64 = f0 = new Float64Array(I);
    }
    var qe = t.INITIAL_MEMORY || 23396755 + -8436097 * -2 + -3023 * 7771, Wt = {};
    Wt.initial = qe / (-91190 + 1 * -42199 + -365 * -545), Wt.maximum = 32768, t.wasmMemory ? p = t.wasmMemory : p = new WebAssembly.Memory(Wt), p && (te = p.buffer), qe = te.byteLength, Q0(te);
    var Tt = [], Pe = [], z0 = [], C0 = [];
    function p0() {
      var I = t.preRun.shift();
      Tt.unshift(I);
    }
    var Xe = -607 * 3 + -4299 * 2 + -10419 * -1, ft = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function $e(I) {
      throw t.onAbort && t.onAbort(I), C(I), b = !(1 * 3149 + 1176 + -4325), I = new WebAssembly.RuntimeError("abort(" + I + "). Build with -s ASSERTIONS=1 for more info."), n(I), I;
    }
    function Mt(I) {
      var f = at;
      return String.prototype.startsWith ? f.startsWith(I) : 16360 + -8 * 2045 === f.indexOf(I);
    }
    function Ct() {
      return Mt("data:application/octet-stream;base64,");
    }
    var at = "sam.wasm";
    if (!Ct()) {
      var _t = at;
      at = t.locateFile ? t.locateFile(_t, d) : d + _t;
    }
    function st() {
      try {
        if (u) return new Uint8Array(u);
        if (g) return g(at);
        throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        $e(I);
      }
    }
    function Ig() {
      var I = {};
      return I.credentials = "same-origin", u || !s && !c || typeof fetch != "function" || Mt("file://") ? Promise.resolve().then(st) : fetch(at, I).then(function(f) {
        if (!f.ok) throw "failed to load wasm binary file at '" + at + "'";
        return f.arrayBuffer();
      }).catch(function() {
        return st();
      });
    }
    function Xn(I) {
      for (; 2498 + 7 * -1131 + -1 * -5419 < I.length; ) {
        var f = I.shift();
        if (typeof f == "function") f(t);
        else {
          var m = f.Ba;
          typeof m == "number" ? void (-3388 + 2 * -4259 + 11906) === f.ta ? bi("v", m)() : bi("vi", m)(f.ta) : m(void (1003 * -1 + 9451 + -66 * 128) === f.ta ? null : f.ta);
        }
      }
    }
    function bi(I, f) {
      var m = [];
      return function() {
        m.length = arguments.length;
        for (var y = 2239 + 1 * -2239; y < arguments.length; y++) m[y] = arguments[y];
        return m && m.length ? t["dynCall_" + I].apply(null, [f].concat(m)) : t["dynCall_" + I].call(null, f);
      };
    }
    function fg(I) {
      this.da = I - (-1 * 9273 + 4888 + 1 * 4401), this.Oa = function(f) {
        Ze[this.da + (248 + -1966 * 4 + 1906 * 4) >> -647 * 11 + -1313 + -4216 * -2] = f;
      }, this.La = function(f) {
        Ze[this.da + (2182 + 2447 * -2 + 2712) >> 30 * -199 + 6349 + -377] = f;
      }, this.Ma = function() {
        Ze[this.da + (-61 * -57 + -1 * 4229 + -18 * -42) >> 811 * -2 + -802 + 1213 * 2] = 131 * 44 + 302 * 1 + 674 * -9;
      }, this.Ka = function() {
        Le[this.da + (7796 + 541 * 9 + -1 * 12653) >> -6789 + 959 * 4 + -2953 * -1] = 1 * -3784 + 6833 + -3049 * 1;
      }, this.Na = function() {
        Le[this.da + (-2908 + 23 * 127) >> 0] = 6997 + -8902 * 1 + 1905;
      }, this.Fa = function(f, m) {
        this.Oa(f), this.La(m), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Mn() {
      return 4637 * 1 + 9099 * 1 + 34 * -404 < Mn.xa;
    }
    function Ai(I) {
      switch (I) {
        case 3 * -2648 + -4045 + 11990:
          return -5124 + -42 * -122;
        case 897 + -2 * 1690 + -1 * -2485:
          return 5022 + -1 * -6153 + -11174;
        case -10766 + -1795 * -6:
          return 62 * 17 + -8540 + 7488;
        case -26 * -314 + 9332 + -8 * 2186:
          return -14 * -455 + 9 * 1065 + -15952;
        default:
          throw new TypeError("Unknown type size: " + I);
      }
    }
    var br = void (121 * 68 + 9187 + -17415 * 1);
    function De(I) {
      for (var f = ""; Ke[I]; ) f += br[Ke[I++]];
      return f;
    }
    var h0 = {}, Jt = {}, _n = {};
    function yi(I) {
      if (void (-8896 + 383 * -7 + -1 * -11577) === I) return "_unknown";
      I = I.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = I.charCodeAt(22 * 398 + -3 * -517 + -10307);
      return 6044 + -523 * -5 + -109 * 79 <= f && -91 * 43 + -4427 * -1 + -457 >= f ? "_" + I : I;
    }
    function vi(I, f) {
      return I = yi(I), new Function("body", "return function " + I + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(f);
    }
    function Wi(I) {
      var f = Error, m = vi(I, function(y) {
        this.name = I, this.message = y, y = Error(y).stack, void (-4564 + -1 * 486 + 5050) !== y && (this.stack = this.toString() + `
` + y.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return m.prototype = Object.create(f.prototype), m.prototype.constructor = m, m.prototype.toString = function() {
        return void (-6021 + 2007 * 3) === this.message ? this.name : this.name + ": " + this.message;
      }, m;
    }
    var m0 = void 0;
    function _(I) {
      throw new m0(I);
    }
    var Ar = void (6697 + 991 * -3 + -3724);
    function Jn(I) {
      throw new Ar(I);
    }
    function b0(I, f, m) {
      function y(G) {
        G = m(G), G.length !== I.length && Jn("Mismatched type converter count");
        for (var Z = 3776 + -1 * 5689 + 1913; Z < I.length; ++Z) St(I[Z], G[Z]);
      }
      I.forEach(function(G) {
        _n[G] = f;
      });
      var S = Array(f.length), w = [], k = -1497 + -1 * -1391 + 106;
      f.forEach(function(G, Z) {
        Jt.hasOwnProperty(G) ? S[Z] = Jt[G] : (w.push(G), h0.hasOwnProperty(G) || (h0[G] = []), h0[G].push(function() {
          S[Z] = Jt[G], ++k, k === w.length && y(S);
        }));
      }), 8451 + 1 * 269 + -8720 === w.length && y(S);
    }
    function St(I, f, m) {
      if (m = m || {}, !("argPackAdvance" in f)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var y = f.name;
      if (I || _('type "' + y + '" must have a positive integer typeid pointer'), Jt.hasOwnProperty(I)) {
        if (m.Ea) return;
        _("Cannot register type '" + y + "' twice");
      }
      Jt[I] = f, delete _n[I], h0.hasOwnProperty(I) && (f = h0[I], delete h0[I], f.forEach(function(S) {
        S();
      }));
    }
    function Cg(I) {
      var f = {};
      return f.count = I.count, f.oa = I.oa, f.pa = I.pa, f.da = I.da, f.fa = I.fa, f.ga = I.ga, f.ha = I.ha, f;
    }
    function Si(I) {
      _(I.A.fa.ea.name + " instance already deleted");
    }
    var wi = !(9869 + 527 * -17 + -909);
    function yr() {
    }
    function vr(I) {
      --I.count.value, 5927 + -1623 * 5 + 2188 === I.count.value && (I.ga ? I.ha.na(I.ga) : I.fa.ea.na(I.da));
    }
    function q0(I) {
      return typeof FinalizationGroup > "u" ? (q0 = function(f) {
        return f;
      }, I) : (wi = new FinalizationGroup(function(f) {
        for (var m = f.next(); !m.done; m = f.next()) m = m.value, m.da ? vr(m) : console.warn("object already deleted: " + m.da);
      }), q0 = function(f) {
        return wi.register(f, f.A, f.A), f;
      }, yr = function(f) {
        wi.unregister(f.A);
      }, q0(I));
    }
    var $0 = void (-9909 + 1 * 918 + -243 * -37), en = [];
    function Bi() {
      for (; en.length; ) {
        var I = en.pop();
        I.A.oa = !(18 * -202 + 3 * 3016 + -5411), I.delete();
      }
    }
    function Vt() {
    }
    var Wr = {};
    function pg(I, f) {
      var m = t;
      if (void (-6816 + -6 * -1136) === m[I].ja) {
        var y = m[I];
        m[I] = function() {
          return m[I].ja.hasOwnProperty(arguments.length) || _("Function '" + f + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + m[I].ja + ")!"), m[I].ja[arguments.length].apply(this, arguments);
        }, m[I].ja = [], m[I].ja[y.ya] = y;
      }
    }
    function Sr(I, f, m) {
      t.hasOwnProperty(I) ? ((void (7304 + 2941 * 3 + -16127 * 1) === m || void (-6 * 1549 + -346 + 9640) !== t[I].ja && void (-3430 + -505 * 11 + 8985) !== t[I].ja[m]) && _("Cannot register public name '" + I + "' twice"), pg(I, I), t.hasOwnProperty(m) && _("Cannot register multiple overloads of a function with the same number of arguments (" + m + ")!"), t[I].ja[m] = f) : (t[I] = f, void (461 * 19 + -9442 + 683) !== m && (t[I].Ra = m));
    }
    function hg(I, f, m, y, S, w, k, G) {
      this.name = I, this.constructor = f, this.ma = m, this.na = y, this.ia = S, this.Ca = w, this.qa = k, this.Aa = G;
    }
    function Un(I, f, m) {
      for (; f !== m; ) f.qa || _("Expected null or instance of " + m.name + ", got an instance of " + f.name), I = f.qa(I), f = f.ia;
      return I;
    }
    function mg(I, f) {
      return f === null ? (this.ua && _("null is not a valid " + this.name), -6264 + -233 * -2 + 5798) : (f.A || _('Cannot pass "' + y0(f) + '" as a ' + this.name), f.A.da || _("Cannot pass deleted object as a pointer of type " + this.name), Un(f.A.da, f.A.fa.ea, this.ea));
    }
    function bg(I, f) {
      if (f === null) {
        if (this.ua && _("null is not a valid " + this.name), this.sa) {
          var m = this.Ha();
          return I !== null && I.push(this.na, m), m;
        }
        return 11 * -93 + 8800 + -7777;
      }
      if (f.A || _('Cannot pass "' + y0(f) + '" as a ' + this.name), f.A.da || _("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && f.A.fa.ra && _("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name), m = Un(f.A.da, f.A.fa.ea, this.ea), this.sa) switch (void (1 * -2502 + -14 * -305 + -1768) === f.A.ga && _("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case 0:
          f.A.ha === this ? m = f.A.ga : _("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name);
          break;
        case -3794 * 2 + 4397 * 1 + 3192:
          m = f.A.ga;
          break;
        case 11 * -349 + 6921 + -3080:
          if (f.A.ha === this) m = f.A.ga;
          else {
            var y = f.clone();
            m = this.Ia(m, A0(function() {
              y.delete();
            })), I !== null && I.push(this.na, m);
          }
          break;
        default:
          _("Unsupporting sharing policy");
      }
      return m;
    }
    function Ag(I, f) {
      return f === null ? (this.ua && _("null is not a valid " + this.name), 7 * 823 + 43 * 229 + -1951 * 8) : (f.A || _('Cannot pass "' + y0(f) + '" as a ' + this.name), f.A.da || _("Cannot pass deleted object as a pointer of type " + this.name), f.A.fa.ra && _("Cannot convert argument of type " + f.A.fa.name + " to parameter type " + this.name), Un(f.A.da, f.A.fa.ea, this.ea));
    }
    function Qn(I) {
      return this.fromWireType(rt[I >> 1 * -6749 + -7471 + 14222]);
    }
    function wr(I, f, m) {
      return f === m ? I : void (-1857 + -1367 * -2 + -877 * 1) === m.ia ? null : (I = wr(I, f, m.ia), I === null ? null : m.Aa(I));
    }
    var tn = {};
    function yg(I, f) {
      for (void (-1 * 6306 + 4582 + 1724) === f && _("ptr should not be undefined"); I.ia; ) f = I.qa(f), I = I.ia;
      return tn[f];
    }
    function zn(I, f) {
      f.fa && f.da || Jn("makeClassHandle requires ptr and ptrType"), !!f.ha != !!f.ga && Jn("Both smartPtrType and smartPtr must be specified");
      var m = {};
      m.value = 1, f.count = m;
      var y = {};
      y.value = f;
      var S = {};
      return S.A = y, q0(Object.create(I, S));
    }
    function wt(I, f, m, y) {
      this.name = I, this.ea = f, this.ua = m, this.ra = y, this.sa = !(3 * 317 + -959 + -3 * -3), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (3 * -2327 + -8493 + -2 * -7737), void (-251 * -11 + 4 * -951 + 1043) !== f.ia ? this.toWireType = bg : (this.toWireType = y ? mg : Ag, this.ka = null);
    }
    function Br(I, f, m) {
      t.hasOwnProperty(I) || Jn("Replacing nonexistant public symbol"), void (-7648 + 478 * 16) !== t[I].ja && void (5 * -1117 + 246 * -37 + 14687 * 1) !== m ? t[I].ja[m] = f : (t[I] = f, t[I].ya = m);
    }
    function Et(I, f) {
      I = De(I);
      var m = bi(I, f);
      return typeof m != "function" && _("unknown function pointer with signature " + I + ": " + f), m;
    }
    var Gr = void (898 * -1 + -4271 * -2 + -4 * 1911);
    function kr(I) {
      I = Fr(I);
      var f = De(I);
      return Bt(I), f;
    }
    function nn(I, f) {
      function m(w) {
        S[w] || Jt[w] || (_n[w] ? _n[w].forEach(m) : (y.push(w), S[w] = !(1795 * 3 + 1 * 281 + -2 * 2833)));
      }
      var y = [], S = {};
      throw f.forEach(m), new Gr(I + ": " + y.map(kr).join([", "]));
    }
    function Or(I, f) {
      for (var m = [], y = -14087 + 1 * 14087; y < I; y++) m.push(Ze[(f >> 2) + y]);
      return m;
    }
    function qn(I) {
      for (; I.length; ) {
        var f = I.pop();
        I.pop()(f);
      }
    }
    function Zr(I, f, m) {
      return I instanceof Object || _(m + ' with invalid "this": ' + I), I instanceof f.ea.constructor || _(m + ' incompatible with "this" of type ' + I.constructor.name), I.A.da || _("cannot call emscripten binding method " + m + " on deleted object"), Un(I.A.da, I.A.fa.ea, f.ea);
    }
    var Hr = {};
    Hr.value = void (1 * -5671 + -1 * 7675 + 13346);
    var Rr = {};
    Rr.value = null;
    var Kr = {};
    Kr.value = !(-4 * 1580 + 3193 * 3 + 3259 * -1);
    var Pr = {};
    Pr.value = !(-3994 + -235 * -17);
    var Gi = [], et = [{}, Hr, Rr, Kr, Pr];
    function ki(I) {
      -616 * -13 + 3278 + -11282 < I && 292 * 16 + 2 * -4204 + -467 * -8 === --et[I].Ja && (et[I] = void (8648 + 203 * 26 + -6963 * 2), Gi.push(I));
    }
    function A0(I) {
      switch (I) {
        case void (1 * 9527 + 2532 + -12059):
          return 8441 * -1 + 7214 + -2 * -614;
        case null:
          return -18 * 394 + 8815 + 1 * -1721;
        case !(4561 * -1 + 15 * 347 + -644):
          return 9278 * -1 + 1003 + 8278;
        case !(-5 * -1138 + -4702 + -987):
          return -1983 * 3 + -1 * 3173 + -3 * -3042;
        default:
          var f = Gi.length ? Gi.pop() : et.length, m = {};
          return m.Ja = 1, m.value = I, et[f] = m, f;
      }
    }
    function y0(I) {
      if (I === null) return "null";
      var f = typeof I;
      return f === "object" || f === "array" || f === "function" ? I.toString() : "" + I;
    }
    function vg(I, f) {
      switch (f) {
        case -12439 + -957 * -13:
          return function(m) {
            return this.fromWireType(jn[m >> 13280 + -2 * 6639]);
          };
        case -4179 + 82 * -63 + 9348:
          return function(m) {
            return this.fromWireType(f0[m >> 103 * 86 + 3278 + -12133]);
          };
        default:
          throw new TypeError("Unknown float type: " + I);
      }
    }
    function Wg(I) {
      var f = Function;
      if (!(f instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof f + " which is not a function");
      var m = vi(f.name || "unknownFunctionName", function() {
      });
      return m.prototype = f.prototype, m = new m(), I = f.apply(m, I), I instanceof Object ? I : m;
    }
    function Sg(I, f, m) {
      switch (f) {
        case -1103 * -5 + 8155 + 2 * -6835:
          return m ? function(y) {
            return Le[y];
          } : function(y) {
            return Ke[y];
          };
        case -1 * 4919 + -1467 + 6387:
          return m ? function(y) {
            return Pt[y >> -7064 + -1 * -3617 + 3448];
          } : function(y) {
            return Xt[y >> -8612 * -1 + 3031 + 2 * -5821];
          };
        case -1 * 9311 + -58 * -115 + -2643 * -1:
          return m ? function(y) {
            return Ze[y >> 2];
          } : function(y) {
            return rt[y >> -1358 + 415 * 13 + -4035];
          };
        default:
          throw new TypeError("Unknown integer type: " + I);
      }
    }
    function Oi(I) {
      return I || _("Cannot use deleted val. handle = " + I), et[I].value;
    }
    function Tr(I, f) {
      var m = Jt[I];
      return void (9611 + -68 * 17 + -8455) === m && _(f + " has unknown type " + kr(I)), m;
    }
    var wg = {}, Vr = {};
    function Er() {
      if (!Zi) {
        var I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: a || "./this.program" }, f;
        for (f in Vr) I[f] = Vr[f];
        var m = [];
        for (f in I) m.push(f + "=" + I[f]);
        Zi = m;
      }
      return Zi;
    }
    var Zi, Lr = [];
    function Dr(I) {
      var f = {}, m;
      for (m in I) (function(y) {
        var S = I[y];
        f[y] = typeof S == "function" ? function() {
          Lr.push(y);
          try {
            return S.apply(null, arguments);
          } finally {
            if (b) return;
            var w = Lr.pop();
            A(w === y);
          }
        } : S;
      })(m);
      return f;
    }
    for (var Nr = Array(-49 * 89 + -5120 + -7 * -1391), $n = -145 * 11 + 4435 + -2840; 5 * -515 + 2918 + -87 * 1 > $n; ++$n) Nr[$n] = String.fromCharCode($n);
    br = Nr, m0 = t.BindingError = Wi("BindingError"), Ar = t.InternalError = Wi("InternalError"), Vt.prototype.isAliasOf = function(I) {
      if (!(this instanceof Vt && I instanceof Vt)) return !1;
      var f = this.A.fa.ea, m = this.A.da, y = I.A.fa.ea;
      for (I = I.A.da; f.ia; ) m = f.qa(m), f = f.ia;
      for (; y.ia; ) I = y.qa(I), y = y.ia;
      return f === y && m === I;
    }, Vt.prototype.clone = function() {
      if (this.A.da || Si(this), this.A.pa) return this.A.count.value += -3 * -1741 + -719 * 3 + -5 * 613, this;
      var I = q0(Object.create(Object.getPrototypeOf(this), { A: { value: Cg(this.A) } }));
      return I.A.count.value += -1929 * 4 + -26 * -313 + -421, I.A.oa = !1, I;
    }, Vt.prototype.delete = function() {
      this.A.da || Si(this), this.A.oa && !this.A.pa && _("Object already scheduled for deletion"), yr(this), vr(this.A), this.A.pa || (this.A.ga = void (41 * 46 + 3921 + 5807 * -1), this.A.da = void (9707 + -1752 * -3 + -13 * 1151));
    }, Vt.prototype.isDeleted = function() {
      return !this.A.da;
    }, Vt.prototype.deleteLater = function() {
      return this.A.da || Si(this), this.A.oa && !this.A.pa && _("Object already scheduled for deletion"), en.push(this), 499 + -1648 * -6 + -10386 === en.length && $0 && $0(Bi), this.A.oa = !(-4996 * 1 + 8803 + 3807 * -1), this;
    }, wt.prototype.Da = function(I) {
      return this.wa && (I = this.wa(I)), I;
    }, wt.prototype.va = function(I) {
      this.na && this.na(I);
    }, wt.prototype.argPackAdvance = -1 * -9941 + 3972 + -1 * 13905, wt.prototype.readValueFromPointer = Qn, wt.prototype.deleteObject = function(I) {
      I !== null && I.delete();
    }, wt.prototype.fromWireType = function(I) {
      function f() {
        return this.sa ? zn(this.ea.ma, { fa: this.Ga, da: m, ha: this, ga: I }) : zn(this.ea.ma, { fa: this, da: I });
      }
      var m = this.Da(I);
      if (!m) return this.va(I), null;
      var y = yg(this.ea, m);
      if (void (-6205 + -3 * -2951 + -2648) !== y)
        return -5499 + 8906 * 1 + -3407 === y.A.count.value ? (y.A.da = m, y.A.ga = I, y.clone()) : (y = y.clone(), this.va(I), y);
      if (y = this.ea.Ca(m), y = Wr[y], !y) return f.call(this);
      y = this.ra ? y.za : y.pointerType;
      var S = wr(m, this.ea, y.ea);
      return S === null ? f.call(this) : this.sa ? zn(y.ea.ma, { fa: y, da: S, ha: this, ga: I }) : zn(y.ea.ma, { fa: y, da: S });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(tn).length;
    }, t.getLiveInheritedInstances = function() {
      var I = [], f;
      for (f in tn) tn.hasOwnProperty(f) && I.push(tn[f]);
      return I;
    }, t.flushPendingDeletes = Bi, t.setDelayFunction = function(I) {
      $0 = I, en.length && $0 && $0(Bi);
    }, Gr = t.UnboundTypeError = Wi("UnboundTypeError"), t.count_emval_handles = function() {
      for (var I = -56 * -65 + -6252 + 4 * 653, f = 172 * 1 + -1 * 779 + 612; f < et.length; ++f) void (1181 * -1 + -3278 * 3 + 2203 * 5) !== et[f] && ++I;
      return I;
    }, t.get_first_emval = function() {
      for (var I = -4748 * 2 + 1 * -3998 + 13499; I < et.length; ++I) if (void (1 * 6703 + 3037 * 3 + 15814 * -1) !== et[I]) return et[I];
      return null;
    }, Pe.push({ Ba: function() {
      Yr();
    } });
    var Bg = { z: function(I) {
      return ex(I + (-721 * -1 + -4847 + 1 * 4142)) + (692 * -1 + 11 * -481 + 5999);
    }, u: function(I, f, m) {
      throw new fg(I).Fa(f, m), "uncaught_exception" in Mn ? Mn.xa++ : Mn.xa = 21 * 374 + -4189 * -1 + -223 * 54, I;
    }, w: function(I, f, m, y, S) {
      var w = Ai(m);
      f = De(f), St(I, { name: f, fromWireType: function(k) {
        return !!k;
      }, toWireType: function(k, G) {
        return G ? y : S;
      }, argPackAdvance: 8, readValueFromPointer: function(k) {
        if (-19 * 46 + -72 + 947 === m) var G = Le;
        else if (-8407 + 1153 * -4 + 1 * 13021 === m) G = Pt;
        else if (8316 + -5843 * -1 + -14155 === m) G = Ze;
        else throw new TypeError("Unknown boolean type size: " + f);
        return this.fromWireType(G[k >> w]);
      }, ka: null });
    }, h: function(I, f, m, y, S, w, k, G, Z, R, P, T, q) {
      P = De(P), w = Et(S, w), G && (G = Et(k, G)), R && (R = Et(Z, R)), q = Et(T, q);
      var pe = yi(P);
      Sr(pe, function() {
        nn("Cannot construct " + P + " due to unbound types", [y]);
      }), b0([I, f, m], y ? [y] : [], function(V) {
        if (V = V[0], y) var pt = V.ea, Te = pt.ma;
        else Te = Vt.prototype;
        V = vi(pe, function() {
          if (Object.getPrototypeOf(this) !== v0) throw new m0("Use 'new' to construct " + P);
          if (void (-313 * 23 + 713 * -10 + 14329) === W0.la) throw new m0(P + " has no accessible constructor");
          var Xr = W0.la[arguments.length];
          if (void (7 * 531 + -5911 * -1 + -9628) === Xr) throw new m0("Tried to invoke ctor of " + P + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(W0.la).toString() + ") parameters instead!");
          return Xr.apply(this, arguments);
        });
        var Me = {};
        Me.value = V;
        var Ut = {};
        Ut.constructor = Me;
        var v0 = Object.create(Te, Ut);
        V.prototype = v0;
        var W0 = new hg(P, V, v0, q, pt, w, G, R);
        pt = new wt(P, W0, !(-1 * 3991 + 6311 * -1 + 10302), !(-7373 + -2 * 2789 + 12952)), Te = new wt(P + "*", W0, !(5 * 1121 + -5 * -969 + -10449), !(-2078 + -39 * -22 + 3 * 407));
        var jr = new wt(P + " const*", W0, !(-5254 + -47 * 121 + 10942), !(-1 * -4615 + -7 * 1285 + 4380)), Ri = {};
        return Ri.pointerType = Te, Ri.za = jr, Wr[I] = Ri, Br(pe, V), [pt, Te, jr];
      });
    }, g: function(I, f, m, y, S, w) {
      A(-47 * -190 + -180 * -16 + -2 * 5905 < f);
      var k = Or(f, m);
      S = Et(y, S);
      var G = [w], Z = [];
      b0([], [I], function(R) {
        R = R[-1 * -9356 + 7800 + 17156 * -1];
        var P = "constructor " + R.name;
        if (void (4002 + -3 * 1334) === R.ea.la && (R.ea.la = []), void (9624 + 778 * -9 + -2622) !== R.ea.la[f - (-6236 + 2 * 2756 + -1 * -725)]) throw new m0("Cannot register multiple constructors with identical number of parameters (" + (f - (-5047 + -9 * 196 + 6812)) + ") for class '" + R.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return R.ea.la[f - (-1146 + -481 * -13 + -6 * 851)] = function() {
          nn("Cannot construct " + R.name + " due to unbound types", k);
        }, b0([], k, function(T) {
          return R.ea.la[f - (-41 * 118 + -1971 + 6810)] = function() {
            arguments.length !== f - (-3849 + 3 * -872 + 1 * 6466) && _(P + " called with " + arguments.length + " arguments, expected " + (f - (-4664 + 4665 * 1))), Z.length = 12631 + -743 * 17, G.length = f;
            for (var q = 7 * -771 + 8101 + -2703; q < f; ++q) G[q] = T[q].toWireType(Z, arguments[q - (-5 * 109 + 845 * 2 + -1144)]);
            return q = S.apply(null, G), qn(Z), T[-5496 + -1 * 4867 + 10363].fromWireType(q);
          }, [];
        }), [];
      });
    }, b: function(I, f, m, y, S, w, k, G, Z, R) {
      f = De(f), S = Et(y, S), b0([], [I], function(P) {
        P = P[-8877 + -1 * -8877];
        var T = P.name + "." + f, q = { get: function() {
          nn("Cannot access " + T + " due to unbound types", [m, k]);
        }, enumerable: !(6366 + 1 * 2735 + -9101), configurable: !(6095 + -5 * 1219) };
        return Z ? q.set = function() {
          nn("Cannot access " + T + " due to unbound types", [m, k]);
        } : q.set = function() {
          _(T + " is a read-only property");
        }, Object.defineProperty(P.ea.ma, f, q), b0([], Z ? [m, k] : [m], function(pe) {
          var V = pe[0], pt = { get: function() {
            var Me = Zr(this, P, T + " getter");
            return V.fromWireType(S(w, Me));
          }, enumerable: !(2963 + -7 * -686 + -7765) };
          if (Z) {
            Z = Et(G, Z);
            var Te = pe[-1646 * -3 + -7771 + 2834];
            pt.set = function(Me) {
              var Ut = Zr(this, P, T + " setter"), v0 = [];
              Z(R, Ut, Te.toWireType(v0, Me)), qn(v0);
            };
          }
          return Object.defineProperty(P.ea.ma, f, pt), [];
        }), [];
      });
    }, v: function(I, f) {
      f = De(f), St(I, { name: f, fromWireType: function(m) {
        var y = et[m].value;
        return ki(m), y;
      }, toWireType: function(m, y) {
        return A0(y);
      }, argPackAdvance: 8, readValueFromPointer: Qn, ka: null });
    }, m: function(I, f, m) {
      m = Ai(m), f = De(f), St(I, { name: f, fromWireType: function(y) {
        return y;
      }, toWireType: function(y, S) {
        if (typeof S != "number" && typeof S != "boolean") throw new TypeError('Cannot convert "' + y0(S) + '" to ' + this.name);
        return S;
      }, argPackAdvance: 8, readValueFromPointer: vg(f, m), ka: null });
    }, c: function(I, f, m, y, S, w) {
      var k = Or(f, m);
      I = De(I), S = Et(y, S), Sr(I, function() {
        nn("Cannot call " + I + " due to unbound types", k);
      }, f - (-15321 + 326 * 47)), b0([], k, function(G) {
        var Z = I, R = I;
        G = [G[-6398 + -914 * -7], null].concat(G.slice(-2600 + 289 * 9));
        var P = S, T = G.length;
        1509 * 2 + -3633 + 1 * 617 > T && _("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var q = G[5534 + 3 * -757 + -3262] !== null && !(687 + 160 * 26 + -4846), pe = !(37 * 135 + -5066 + -8 * -9), V = 5992 * 1 + 4 * -1028 + -1879; V < G.length; ++V) if (G[V] !== null && void (2597 + 8 * 1149 + -11789) === G[V].ka) {
          pe = !(1 * -5077 + 8846 + -3769);
          break;
        }
        var pt = G[0].name !== "void", Te = "", Me = "";
        for (V = -1597 * -5 + -1 * 5341 + 4 * -661; V < T - (-79 * 8 + 2923 * 3 + -5 * 1627); ++V) Te += (-3084 + 691 * 11 + -4517 * 1 !== V ? ", " : "") + "arg" + V, Me += (1403 * -5 + 1731 * -5 + 15670 !== V ? ", " : "") + "arg" + V + "Wired";
        R = "return function " + yi(R) + "(" + Te + `) {
if (arguments.length !== ` + (T - (-2417 * 3 + -3178 * -1 + -25 * -163)) + `) {
throwBindingError('function ` + R + " called with ' + arguments.length + ' arguments, expected " + (T - (1 * -1062 + -9428 + -2 * -5246)) + ` args!');
}
`, pe && (R += `var destructors = [];
`);
        var Ut = pe ? "destructors" : "null";
        for (Te = "throwBindingError invoker fn runDestructors retType classParam".split(" "), P = [_, P, w, qn, G[-15720 + 12 * 1310], G[986 + 5675 * 1 + -30 * 222]], q && (R += "var thisWired = classParam.toWireType(" + Ut + `, this);
`), V = 0; V < T - (5496 + 5 * -1624 + 2626); ++V) R += "var arg" + V + "Wired = argType" + V + ".toWireType(" + Ut + ", arg" + V + "); // " + G[V + (-14095 + -14097 * -1)].name + `
`, Te.push("argType" + V), P.push(G[V + (8040 + -606 * -2 + -9250)]);
        if (q && (Me = "thisWired" + (-10120 + 1265 * 8 < Me.length ? ", " : "") + Me), R += (pt ? "var rv = " : "") + "invoker(fn" + (0 < Me.length ? ", " : "") + Me + `);
`, pe) R += `runDestructors(destructors);
`;
        else
          for (V = q ? -5434 + 9 * -303 + 8162 : -569 * 2 + 85 * 101 + -7445; V < G.length; ++V) T = 3539 * -2 + 91 * -95 + 15724 === V ? "thisWired" : "arg" + (V - (798 * -11 + -616 * -14 + 156)) + "Wired", G[V].ka !== null && (R += T + "_dtor(" + T + "); // " + G[V].name + `
`, Te.push(T + "_dtor"), P.push(G[V].ka));
        return pt && (R += `var ret = retType.fromWireType(rv);
return ret;
`), Te.push(R + `}
`), G = Wg(Te).apply(null, P), Br(Z, G, f - (1 * -5138 + 4 * 66 + -1625 * -3)), [];
      });
    }, e: function(I, f, m, y, S) {
      function w(R) {
        return R;
      }
      f = De(f), -(1 * -1903 + -6926 + 8830) === S && (S = 6077440083 + -1 * 6972086663 + 1037922775 * 5);
      var k = Ai(m);
      if (1 * -6601 + 1817 + 4784 === y) {
        var G = 32 - 8 * m;
        w = function(R) {
          return R << G >>> G;
        };
      }
      var Z = -(6544 + -84 * -109 + -15699) != f.indexOf("unsigned");
      St(I, { name: f, fromWireType: w, toWireType: function(R, P) {
        if (typeof P != "number" && typeof P != "boolean") throw new TypeError('Cannot convert "' + y0(P) + '" to ' + this.name);
        if (P < y || P > S) throw new TypeError('Passing a number "' + y0(P) + '" from JS side to C/C++ side to an argument of type "' + f + '", which is outside the valid range [' + y + ", " + S + "]!");
        return Z ? P >>> -1 * -8392 + 191 + -3 * 2861 : P | 0;
      }, argPackAdvance: 8, readValueFromPointer: Sg(f, k, 713 + 23 * -31 !== y), ka: null });
    }, d: function(I, f, m) {
      function y(G) {
        G >>= 2;
        var Z = rt;
        return new S(te, Z[G + (-12305 + -2051 * -6)], Z[G]);
      }
      var S = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][f];
      m = De(m);
      var w = {};
      w.name = m, w.fromWireType = y, w.argPackAdvance = 8, w.readValueFromPointer = y;
      var k = {};
      k.Ea = !(11 * -67 + 6 * 1461 + -8029), St(I, w, k);
    }, n: function(I, f) {
      f = De(f);
      var m = f === "std::string";
      St(I, { name: f, fromWireType: function(y) {
        var S = rt[y >> 2];
        if (m) for (var w = y + (8040 + -1 * 8261 + 25 * 9), k = 3096 + -18 * 172; k <= S; ++k) {
          var G = y + 4 + k;
          if (k == S || Ke[G] == 0) {
            if (w) {
              var Z = w, R = Ke, P = Z + (G - w);
              for (w = Z; R[w] && !(w >= P); ) ++w;
              if (375 * -4 + -662 * -5 + 6 * -299 < w - Z && R.subarray && l) Z = l.decode(R.subarray(Z, w));
              else {
                for (P = ""; Z < w; ) {
                  var T = R[Z++];
                  if (T & -6871 * -1 + 7832 + 14575 * -1) {
                    var q = R[Z++] & 63;
                    if (271 + -79 * 1 == (T & -12663 + -7 * -1841)) P += String.fromCharCode((T & -32 * 13 + -990 * -5 + -4503) << -4254 * -2 + 6942 + 99 * -156 | q);
                    else {
                      var pe = R[Z++] & 63;
                      T = -1 * 944 + 93 + 1075 * 1 == (T & -4329 + 8689 * -1 + 13258) ? (T & -8311 + -1259 * 7 + 17139) << -614 * 1 + 1 * -1391 + 2017 * 1 | q << 6 | pe : (T & -6159 * 1 + 4155 * 2 + 16 * -134) << -33 * -199 + -9511 * 1 + 2962 | q << 38 * -116 + 1 * 8831 + -4411 | pe << 1 * -7113 + 3546 + 1 * 3573 | R[Z++] & 63, 10997 * -4 + 105465 + 33 * 123 > T ? P += String.fromCharCode(T) : (T -= -32099 * -1 + 1 * -2301 + 167 * 214, P += String.fromCharCode(195898 + 166 * -847 | T >> 1701 + 1 * -1691, -10729 * 7 + 9 * -11443 + 23441 * 10 | T & -16 * -239 + 43 * 109 + -7488));
                    }
                  } else P += String.fromCharCode(T);
                }
                Z = P;
              }
            } else Z = "";
            if (V === void 0) var V = Z;
            else V += String.fromCharCode(373 * 23 + -6359 + 2 * -1110), V += Z;
            w = G + (2101 * 2 + 796 * 1 + 263 * -19);
          }
        }
        else {
          for (V = Array(S), k = -529 * -10 + 1 * -6947 + 1657; k < S; ++k) V[k] = String.fromCharCode(Ke[y + (1 * -2267 + -5 * 302 + 3781) + k]);
          V = V.join("");
        }
        return Bt(y), V;
      }, toWireType: function(y, S) {
        S instanceof ArrayBuffer && (S = new Uint8Array(S));
        var w = typeof S == "string";
        w || S instanceof Uint8Array || S instanceof Uint8ClampedArray || S instanceof Int8Array || _("Cannot pass non-string to std::string");
        var k = (m && w ? function() {
          for (var R = -878 * 7 + -5571 * 1 + 11717 * 1, P = -6181 + 5 * 587 + -1 * -3246; P < S.length; ++P) {
            var T = S.charCodeAt(P);
            -1 * -97418 + 344 * -61 + -21138 <= T && 57343 >= T && (T = -1 * -35011 + -16 * 1237 + 50317 + ((T & -61 * -13 + 1389 + 1 * -1159) << 10) | S.charCodeAt(++P) & 6527 + 1 * 9833 + -15337), 12618 + -12491 * 1 >= T ? ++R : R = -9303 + -5 * 766 + 46 * 330 >= T ? R + (2 * -3137 + 7158 + 1 * -882) : -9586 + 1 * 75121 >= T ? R + (1 * -1113 + 384 * -16 + 7260) : R + (15 * -563 + -1 * -6899 + 1550);
          }
          return R;
        } : function() {
          return S.length;
        })(), G = ex(-2 * 843 + 2 * 2555 + 114 * -30 + k + (-1 * -5167 + 938 * -7 + 1400));
        if (rt[G >> -1 * -1668 + 306 * 1 + -1972] = k, m && w) W(S, G + (-6631 + -2 * 3272 + -69 * -191), k + (15601 + 4 * -3900));
        else if (w) for (w = 3493 * 1 + -1 * 7235 + 3742 * 1; w < k; ++w) {
          var Z = S.charCodeAt(w);
          -1 * -753 + -7814 * 1 + 7316 < Z && (Bt(G), _("String has UTF-16 code units that do not fit in 8 bits")), Ke[G + (3918 + 1 * 3606 + 3760 * -2) + w] = Z;
        }
        else
          for (w = -1 * -9689 + -73 * 21 + 8156 * -1; w < k; ++w) Ke[G + (458 * 6 + 6143 + -8887) + w] = S[w];
        return y !== null && y.push(Bt, G), G;
      }, argPackAdvance: 8, readValueFromPointer: Qn, ka: function(y) {
        Bt(y);
      } });
    }, j: function(I, f, m) {
      if (m = De(m), 3045 + -1 * 3049 + -3 * -2 === f) var y = X, S = M, w = J, k = function() {
        return Xt;
      }, G = -1 * 8115 + -8389 + 16505;
      else -3626 + -1 * -5521 + 1891 * -1 === f && (y = H, S = re, w = U, k = function() {
        return rt;
      }, G = 2);
      St(I, { name: m, fromWireType: function(Z) {
        for (var R = rt[Z >> 3706 + 28 * -267 + 3772 * 1], P = k(), T, q = Z + (8649 * 1 + -3247 + -5398), pe = -5 * 868 + 248 * 1 + -132 * -31; pe <= R; ++pe) {
          var V = Z + 4 + pe * f;
          (pe == R || 149 * 43 + -1195 * -2 + -8797 * 1 == P[V >> G]) && (q = y(q, V - q), void (3135 + 57 * -55) === T ? T = q : (T += String.fromCharCode(-49 * 52 + 8291 * -1 + 10839), T += q), q = V + f);
        }
        return Bt(Z), T;
      }, toWireType: function(Z, R) {
        typeof R != "string" && _("Cannot pass non-string to C++ string type " + m);
        var P = w(R), T = ex(4 + P + f);
        return rt[T >> -1 * 3937 + -13 * -205 + -26 * -49] = P >> G, S(R, T + (401 * -7 + 1 * -3477 + -131 * -48), P + f), Z !== null && Z.push(Bt, T), T;
      }, argPackAdvance: 8, readValueFromPointer: Qn, ka: function(Z) {
        Bt(Z);
      } });
    }, x: function(I, f) {
      f = De(f);
      var m = {};
      m.Qa = !0, m.name = f, m.argPackAdvance = 0, m.fromWireType = function() {
      }, m.toWireType = function() {
      }, St(I, m);
    }, k: function(I, f, m) {
      I = Oi(I), f = Tr(f, "emval::as");
      var y = [], S = A0(y);
      return Ze[m >> -1175 + -55 * -122 + 11 * -503] = S, f.toWireType(y, I);
    }, i: ki, l: function(I, f) {
      return I = Oi(I), f = Oi(f), A0(I[f]);
    }, p: function(I) {
      var f = wg[I];
      return A0(f === void 0 ? De(I) : f);
    }, o: function(I) {
      qn(et[I].value), ki(I);
    }, y: function(I, f) {
      return I = Tr(I, "_emval_take_value"), I = I.readValueFromPointer(f), A0(I);
    }, f: function() {
      $e();
    }, q: function(I, f, m) {
      Ke.copyWithin(I, f, f + m);
    }, r: function(I) {
      I >>>= -563 * 1 + 2930 + -2367;
      var f = Ke.length;
      if (-3108202414 + -2 * 1306475410 + 167417806 * 47 < I) return !(4938 + -383 * 15 + 808);
      for (var m = -1 * 1542 + 838 + -141 * -5; 3 * -2321 + -2909 + 6 * 1646 >= m; m *= 5923 + -1 * -3599 + -9520) {
        var y = f * (1 + 0.2 / m);
        y = Math.min(y, I + (161531226 + -4057862 * 15)), y = Math.max(22153151 + 41434 * -452 + 13352233, I, y), 1655 + 1 * -1655 < y % 65536 && (y += -96259 * -1 + -34680 + 3957 - y % (-2 * -9059 + 36094 + 11324));
        e: {
          try {
            p.grow(Math.min(-158261662 + -613984209 * 2 + 12 * 294476144, y) - te.byteLength + (39183 + -89053 * -1 + -62701 * 1) >>> -9 * -461 + 6736 + -10869), Q0(p.buffer);
            var S = -2800 + 2 * -1459 + 19 * 301;
            break e;
          } catch {
          }
          S = void (-10194 + 5097 * 2);
        }
        if (S) return !(5974 + 7 * 455 + 3053 * -3);
      }
      return !(134 + 26 * 188 + -5021 * 1);
    }, s: function(I, f) {
      var m = 0;
      return Er().forEach(function(y, S) {
        var w = f + m;
        for (S = Ze[I + (-701 + 9821 * 1 + 9116 * -1) * S >> -4856 + 2 * -3795 + 1556 * 8] = w, w = -23 * -171 + 243 + -4176; w < y.length; ++w) Le[S++ >> -2 * 4012 + -8521 * 1 + -5515 * -3] = y.charCodeAt(w);
        Le[S >> -3359 + -8 * -401 + 151] = 0, m += y.length + (-6796 + -6797 * -1);
      }), -1 * 8123 + -3739 * 2 + 15601 * 1;
    }, t: function(I, f) {
      var m = Er();
      Ze[I >> -7627 * 1 + 9172 + -1543] = m.length;
      var y = -1950 + 1 * 8686 + -6736;
      return m.forEach(function(S) {
        y += S.length + (1313 * -1 + 473 + 841);
      }), Ze[f >> -11919 + -13 * -917] = y, -2326 * -2 + 2987 + -7639;
    }, a: p };
    (function() {
      function I(k) {
        k = k.exports, k = Dr(k), t.asm = k, Xe--, t.monitorRunDependencies && t.monitorRunDependencies(Xe), Xe == 0 && ft && (k = ft, ft = null, k());
      }
      function f(k) {
        I(k.instance);
      }
      function m(k) {
        return Ig().then(function(G) {
          return WebAssembly.instantiate(G, S);
        }).then(k, function(G) {
          C("failed to asynchronously prepare wasm: " + G), $e(G);
        });
      }
      var y = {};
      y.a = Bg;
      var S = y;
      if (Xe++, t.monitorRunDependencies && t.monitorRunDependencies(Xe), t.instantiateWasm) try {
        var w = t.instantiateWasm(S, I);
        return w = Dr(w);
      } catch (k) {
        return C("Module.instantiateWasm callback failed with error: " + k), !(51 * 149 + 7653 + -151 * 101);
      }
      return function() {
        if (u || typeof WebAssembly.instantiateStreaming != "function" || Ct() || Mt("file://") || typeof fetch != "function") return m(f);
        var k = {};
        k.credentials = "same-origin", fetch(at, k).then(function(G) {
          return WebAssembly.instantiateStreaming(G, S).then(f, function(Z) {
            return C("wasm streaming compile failed: " + Z), C("falling back to ArrayBuffer instantiation"), m(f);
          });
        });
      }(), {};
    })();
    var Yr = t.___wasm_call_ctors = function() {
      return (Yr = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, ex = t._malloc = function() {
      return (ex = t._malloc = t.asm.C).apply(null, arguments);
    }, Bt = t._free = function() {
      return (Bt = t._free = t.asm.D).apply(null, arguments);
    }, Fr = t.___getTypeName = function() {
      return (Fr = t.___getTypeName = t.asm.E).apply(null, arguments);
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
    ft = function I() {
      tx || Hi(), tx || (ft = I);
    };
    function Hi() {
      function I() {
        if (!tx && (tx = !(319 * 11 + -4331 * 1 + 822), t.calledRun = !(-744 * -4 + 8057 + -11033), !b)) {
          if (Xn(Pe), Xn(z0), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var f = t.postRun.shift();
            C0.unshift(f);
          }
          Xn(C0);
        }
      }
      if (!(0 < Xe)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) p0();
        Xn(Tt), 1276 + -4 * 319 < Xe || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, 9600 + 9599 * -1), I();
        }, 9552 + -470 * -7 + -1 * 12841)) : I());
      }
    }
    if (t.run = Hi, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); 3822 + 78 * -49 < t.preInit.length; ) t.preInit.pop()();
    return Hi(), i.ready;
  };
})();
class AI {
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
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new oe("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
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
    return i === yl;
  }
  setThresholds(i) {
    this.imageProcessor.validationService.thresholds = i;
  }
}
class yI {
  constructor() {
    E(this, "detectionRecord", []);
    E(this, "imagesWithTimestampForDuplicateDetection", new cr(Cl));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: i, timestamp: t }) {
    const e = i.length / bl, n = e / (-783 + 157 * 5), o = i.length / (1410 + 8 * 1237 + -5652 * 2), r = await II(i.slice(o - n, o + n)), a = {};
    a.imageHash = r, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(i) {
    return { data: zl(i), resolution: { width: i.width, height: i.height } };
  }
  async processDetectedObject({ detectedObject: i, image: t, imageData: e, timestamp: n }) {
    const o = Wc(i), r = this.validationService.validateDetectedObject(o, t);
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
class vI {
  constructor() {
    E(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new oe("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const $c = Symbol("Comlink.proxy"), WI = Symbol("Comlink.endpoint"), SI = Symbol("Comlink.releaseProxy"), Ui = Symbol("Comlink.finalizer"), Bx = Symbol("Comlink.thrown"), eg = (x) => typeof x == "object" && x !== null || typeof x == "function", wI = {
  canHandle: (x) => eg(x) && x[$c],
  serialize(x) {
    const { port1: i, port2: t } = new MessageChannel();
    return ng(x, i), [t, [t]];
  },
  deserialize(x) {
    return x.start(), ig(x);
  }
}, BI = {
  canHandle: (x) => eg(x) && Bx in x,
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
}, tg = /* @__PURE__ */ new Map([
  ["proxy", wI],
  ["throw", BI]
]);
function GI(x, i) {
  for (const t of x)
    if (i === t || t === "*" || t instanceof RegExp && t.test(i))
      return !0;
  return !1;
}
function ng(x, i = globalThis, t = ["*"]) {
  i.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!GI(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: a } = Object.assign({ path: [] }, n.data), s = (n.data.argumentList || []).map(e0);
    let c;
    try {
      const d = a.slice(0, -1).reduce((C, u) => C[u], x), g = a.reduce((C, u) => C[u], x);
      switch (r) {
        case "GET":
          c = g;
          break;
        case "SET":
          d[a.slice(-1)[0]] = e0(n.data.value), c = !0;
          break;
        case "APPLY":
          c = g.apply(d, s);
          break;
        case "CONSTRUCT":
          {
            const C = new g(...s);
            c = KI(C);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: C, port2: u } = new MessageChannel();
            ng(x, u), c = RI(C, [C]);
          }
          break;
        case "RELEASE":
          c = void 0;
          break;
        default:
          return;
      }
    } catch (d) {
      c = { value: d, [Bx]: 0 };
    }
    Promise.resolve(c).catch((d) => ({ value: d, [Bx]: 0 })).then((d) => {
      const [g, C] = $x(d);
      i.postMessage(Object.assign(Object.assign({}, g), { id: o }), C), r === "RELEASE" && (i.removeEventListener("message", e), xg(i), Ui in x && typeof x[Ui] == "function" && x[Ui]());
    }).catch((d) => {
      const [g, C] = $x({
        value: new TypeError("Unserializable return value"),
        [Bx]: 0
      });
      i.postMessage(Object.assign(Object.assign({}, g), { id: o }), C);
    });
  }), i.start && i.start();
}
function kI(x) {
  return x.constructor.name === "MessagePort";
}
function xg(x) {
  kI(x) && x.close();
}
function ig(x, i) {
  return Vo(x, [], i);
}
function gx(x) {
  if (x)
    throw new Error("Proxy has been released and is not useable");
}
function og(x) {
  return Z0(x, {
    type: "RELEASE"
  }).then(() => {
    xg(x);
  });
}
const zx = /* @__PURE__ */ new WeakMap(), qx = "FinalizationRegistry" in globalThis && new FinalizationRegistry((x) => {
  const i = (zx.get(x) || 0) - 1;
  zx.set(x, i), i === 0 && og(x);
});
function OI(x, i) {
  const t = (zx.get(i) || 0) + 1;
  zx.set(i, t), qx && qx.register(x, i, x);
}
function ZI(x) {
  qx && qx.unregister(x);
}
function Vo(x, i = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(o, r) {
      if (gx(e), r === SI)
        return () => {
          ZI(n), og(x), e = !0;
        };
      if (r === "then") {
        if (i.length === 0)
          return { then: () => n };
        const a = Z0(x, {
          type: "GET",
          path: i.map((s) => s.toString())
        }).then(e0);
        return a.then.bind(a);
      }
      return Vo(x, [...i, r]);
    },
    set(o, r, a) {
      gx(e);
      const [s, c] = $x(a);
      return Z0(x, {
        type: "SET",
        path: [...i, r].map((d) => d.toString()),
        value: s
      }, c).then(e0);
    },
    apply(o, r, a) {
      gx(e);
      const s = i[i.length - 1];
      if (s === WI)
        return Z0(x, {
          type: "ENDPOINT"
        }).then(e0);
      if (s === "bind")
        return Vo(x, i.slice(0, -1));
      const [c, d] = ns(a);
      return Z0(x, {
        type: "APPLY",
        path: i.map((g) => g.toString()),
        argumentList: c
      }, d).then(e0);
    },
    construct(o, r) {
      gx(e);
      const [a, s] = ns(r);
      return Z0(x, {
        type: "CONSTRUCT",
        path: i.map((c) => c.toString()),
        argumentList: a
      }, s).then(e0);
    }
  });
  return OI(n, x), n;
}
function HI(x) {
  return Array.prototype.concat.apply([], x);
}
function ns(x) {
  const i = x.map($x);
  return [i.map((t) => t[0]), HI(i.map((t) => t[1]))];
}
const rg = /* @__PURE__ */ new WeakMap();
function RI(x, i) {
  return rg.set(x, i), x;
}
function KI(x) {
  return Object.assign(x, { [$c]: !0 });
}
function $x(x) {
  for (const [i, t] of tg)
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
    rg.get(x) || []
  ];
}
function e0(x) {
  switch (x.type) {
    case "HANDLER":
      return tg.get(x.name).deserialize(x.value);
    case "RAW":
      return x.value;
  }
}
function Z0(x, i, t) {
  return new Promise((e) => {
    const n = PI();
    x.addEventListener("message", function o(r) {
      !r.data || !r.data.id || r.data.id !== n || (x.removeEventListener("message", o), e(r.data));
    }), x.start && x.start(), x.postMessage(Object.assign({ id: n }, i), t);
  });
}
function PI() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const ag = "dmFyIHZlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgTHQgPSAoYSkgPT4gewogIHRocm93IFR5cGVFcnJvcihhKTsKfTsKdmFyIGdlID0gKGEsIG8sIGUpID0+IG8gaW4gYSA/IHZlKGEsIG8sIHsgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCwgdmFsdWU6IGUgfSkgOiBhW29dID0gZTsKdmFyIFFuID0gKGEsIG8sIGUpID0+IGdlKGEsIHR5cGVvZiBvICE9ICJzeW1ib2wiID8gbyArICIiIDogbywgZSksIE50ID0gKGEsIG8sIGUpID0+IG8uaGFzKGEpIHx8IEx0KCJDYW5ub3QgIiArIGUpOwp2YXIgSCA9IChhLCBvLCBlKSA9PiAoTnQoYSwgbywgInJlYWQgZnJvbSBwcml2YXRlIGZpZWxkIiksIGUgPyBlLmNhbGwoYSkgOiBvLmdldChhKSksIFduID0gKGEsIG8sIGUpID0+IG8uaGFzKGEpID8gTHQoIkNhbm5vdCBhZGQgdGhlIHNhbWUgcHJpdmF0ZSBtZW1iZXIgbW9yZSB0aGFuIG9uY2UiKSA6IG8gaW5zdGFuY2VvZiBXZWFrU2V0ID8gby5hZGQoYSkgOiBvLnNldChhLCBlKSwga24gPSAoYSwgbywgZSwgaCkgPT4gKE50KGEsIG8sICJ3cml0ZSB0byBwcml2YXRlIGZpZWxkIiksIGggPyBoLmNhbGwoYSwgZSkgOiBvLnNldChhLCBlKSwgZSk7CmNvbnN0IEh0ID0gewogIHNpbWQ6ICJzYW1fc2ltZC53YXNtIiwKICBzYW06ICJzYW0ud2FzbSIKfSwgd2UgPSBhc3luYyAoKSA9PiBXZWJBc3NlbWJseS52YWxpZGF0ZShuZXcgVWludDhBcnJheShbMCwgOTcsIDExNSwgMTA5LCAxLCAwLCAwLCAwLCAxLCA1LCAxLCA5NiwgMCwgMSwgMTIzLCAzLCAyLCAxLCAwLCAxMCwgMTAsIDEsIDgsIDAsIDY1LCAwLCAyNTMsIDE1LCAyNTMsIDk4LCAxMV0pKTsKdmFyIEFlID0gZnVuY3Rpb24oKSB7CiAgdmFyIGEgPSB0eXBlb2YgZG9jdW1lbnQgPCAidSIgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdCA/IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjIDogdm9pZCAwOwogIHJldHVybiBmdW5jdGlvbihvKSB7CiAgICBvID0gbyB8fCB7fTsKICAgIHZhciBlOwogICAgZSB8fCAoZSA9IHR5cGVvZiBvIDwgInUiID8gbyA6IHt9KTsKICAgIHZhciBoLCBnOwogICAgZS5yZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgaCA9IG4sIGcgPSB0OwogICAgfSk7CiAgICB2YXIgQyA9IHt9LCBBOwogICAgZm9yIChBIGluIGUpIGUuaGFzT3duUHJvcGVydHkoQSkgJiYgKENbQV0gPSBlW0FdKTsKICAgIHZhciBPID0gIi4vdGhpcy5wcm9ncmFtIiwgYiA9ICExLCBUID0gITE7CiAgICBiID0gdHlwZW9mIHdpbmRvdyA9PSAib2JqZWN0IiwgVCA9IHR5cGVvZiBpbXBvcnRTY3JpcHRzID09ICJmdW5jdGlvbiI7CiAgICB2YXIgXyA9ICIiLCBTOwogICAgKGIgfHwgVCkgJiYgKFQgPyBfID0gc2VsZi5sb2NhdGlvbi5ocmVmIDogZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiAoXyA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjKSwgYSAmJiAoXyA9IGEpLCBfLmluZGV4T2YoImJsb2I6IikgIT09IDAgPyBfID0gXy5zdWJzdHIoMCwgXy5sYXN0SW5kZXhPZigiLyIpICsgMSkgOiBfID0gIiIsIFQgJiYgKFMgPSBmdW5jdGlvbihuKSB7CiAgICAgIHZhciB0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7CiAgICAgIHJldHVybiB0Lm9wZW4oIkdFVCIsIG4sICExKSwgdC5yZXNwb25zZVR5cGUgPSAiYXJyYXlidWZmZXIiLCB0LnNlbmQobnVsbCksIG5ldyBVaW50OEFycmF5KHQucmVzcG9uc2UpOwogICAgfSkpOwogICAgdmFyIEUgPSBlLnByaW50RXJyIHx8IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpOwogICAgZm9yIChBIGluIEMpIEMuaGFzT3duUHJvcGVydHkoQSkgJiYgKGVbQV0gPSBDW0FdKTsKICAgIEMgPSBudWxsLCBlLnRoaXNQcm9ncmFtICYmIChPID0gZS50aGlzUHJvZ3JhbSk7CiAgICB2YXIgTTsKICAgIGUud2FzbUJpbmFyeSAmJiAoTSA9IGUud2FzbUJpbmFyeSksIGUubm9FeGl0UnVudGltZSAmJiBlLm5vRXhpdFJ1bnRpbWUsIHR5cGVvZiBXZWJBc3NlbWJseSAhPSAib2JqZWN0IiAmJiBmbigibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZCIpOwogICAgdmFyIFUsIExuID0gITE7CiAgICBmdW5jdGlvbiBydChuKSB7CiAgICAgIG4gfHwgZm4oIkFzc2VydGlvbiBmYWlsZWQ6IHVuZGVmaW5lZCIpOwogICAgfQogICAgdmFyIGl0ID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGY4IikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiAkdChuLCB0LCByKSB7CiAgICAgIHZhciBpID0geDsKICAgICAgaWYgKDAgPCByKSB7CiAgICAgICAgciA9IHQgKyByIC0gMTsKICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IG4ubGVuZ3RoOyArK3MpIHsKICAgICAgICAgIHZhciB1ID0gbi5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgaWYgKDU1Mjk2IDw9IHUgJiYgNTczNDMgPj0gdSkgewogICAgICAgICAgICB2YXIgbCA9IG4uY2hhckNvZGVBdCgrK3MpOwogICAgICAgICAgICB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCBsICYgMTAyMzsKICAgICAgICAgIH0KICAgICAgICAgIGlmICgxMjcgPj0gdSkgewogICAgICAgICAgICBpZiAodCA+PSByKSBicmVhazsKICAgICAgICAgICAgaVt0KytdID0gdTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGlmICgyMDQ3ID49IHUpIHsKICAgICAgICAgICAgICBpZiAodCArIDEgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgaVt0KytdID0gMTkyIHwgdSA+PiA2OwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgIGlmICg2NTUzNSA+PSB1KSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDIgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyMjQgfCB1ID4+IDEyOwogICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDMgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyNDAgfCB1ID4+IDE4LCBpW3QrK10gPSAxMjggfCB1ID4+IDEyICYgNjM7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IHUgPj4gNiAmIDYzOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IHUgJiA2MzsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgaVt0XSA9IDA7CiAgICAgIH0KICAgIH0KICAgIHZhciBhdCA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmLTE2bGUiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFh0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IG4gPj4gMSwgaSA9IHIgKyB0IC8gMjsgIShyID49IGkpICYmIGduW3JdOyApICsrcjsKICAgICAgaWYgKHIgPDw9IDEsIDMyIDwgciAtIG4gJiYgYXQpIHJldHVybiBhdC5kZWNvZGUoeC5zdWJhcnJheShuLCByKSk7CiAgICAgIGZvciAociA9IDAsIGkgPSAiIjsgOyApIHsKICAgICAgICB2YXIgcyA9IHRuW24gKyAyICogciA+PiAxXTsKICAgICAgICBpZiAocyA9PSAwIHx8IHIgPT0gdCAvIDIpIHJldHVybiBpOwogICAgICAgICsrciwgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHMpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBKdChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgMiA+IHIpIHJldHVybiAwOwogICAgICByIC09IDI7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IHIgPCAyICogbi5sZW5ndGggPyByIC8gMiA6IG4ubGVuZ3RoOwogICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHI7ICsrcykgdG5bdCA+PiAxXSA9IG4uY2hhckNvZGVBdChzKSwgdCArPSAyOwogICAgICByZXR1cm4gdG5bdCA+PiAxXSA9IDAsIHQgLSBpOwogICAgfQogICAgZnVuY3Rpb24gS3QobikgewogICAgICByZXR1cm4gMiAqIG4ubGVuZ3RoOwogICAgfQogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gMCwgaSA9ICIiOyAhKHIgPj0gdCAvIDQpOyApIHsKICAgICAgICB2YXIgcyA9IGtbbiArIDQgKiByID4+IDJdOwogICAgICAgIGlmIChzID09IDApIGJyZWFrOwogICAgICAgICsrciwgNjU1MzYgPD0gcyA/IChzIC09IDY1NTM2LCBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBzID4+IDEwLCA1NjMyMCB8IHMgJiAxMDIzKSkgOiBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocyk7CiAgICAgIH0KICAgICAgcmV0dXJuIGk7CiAgICB9CiAgICBmdW5jdGlvbiBxdChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgNCA+IHIpIHJldHVybiAwOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSBpICsgciAtIDQ7CiAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgbi5sZW5ndGg7ICsrcykgewogICAgICAgIHZhciB1ID0gbi5jaGFyQ29kZUF0KHMpOwogICAgICAgIGlmICg1NTI5NiA8PSB1ICYmIDU3MzQzID49IHUpIHsKICAgICAgICAgIHZhciBsID0gbi5jaGFyQ29kZUF0KCsrcyk7CiAgICAgICAgICB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCBsICYgMTAyMzsKICAgICAgICB9CiAgICAgICAgaWYgKGtbdCA+PiAyXSA9IHUsIHQgKz0gNCwgdCArIDQgPiByKSBicmVhazsKICAgICAgfQogICAgICByZXR1cm4ga1t0ID4+IDJdID0gMCwgdCAtIGk7CiAgICB9CiAgICBmdW5jdGlvbiBuZShuKSB7CiAgICAgIGZvciAodmFyIHQgPSAwLCByID0gMDsgciA8IG4ubGVuZ3RoOyArK3IpIHsKICAgICAgICB2YXIgaSA9IG4uY2hhckNvZGVBdChyKTsKICAgICAgICA1NTI5NiA8PSBpICYmIDU3MzQzID49IGkgJiYgKytyLCB0ICs9IDQ7CiAgICAgIH0KICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICB2YXIgbm4sICQsIHgsIHRuLCBnbiwgaywgRCwgb3QsIHN0OwogICAgZnVuY3Rpb24gdXQobikgewogICAgICBubiA9IG4sIGUuSEVBUDggPSAkID0gbmV3IEludDhBcnJheShuKSwgZS5IRUFQMTYgPSB0biA9IG5ldyBJbnQxNkFycmF5KG4pLCBlLkhFQVAzMiA9IGsgPSBuZXcgSW50MzJBcnJheShuKSwgZS5IRUFQVTggPSB4ID0gbmV3IFVpbnQ4QXJyYXkobiksIGUuSEVBUFUxNiA9IGduID0gbmV3IFVpbnQxNkFycmF5KG4pLCBlLkhFQVBVMzIgPSBEID0gbmV3IFVpbnQzMkFycmF5KG4pLCBlLkhFQVBGMzIgPSBvdCA9IG5ldyBGbG9hdDMyQXJyYXkobiksIGUuSEVBUEY2NCA9IHN0ID0gbmV3IEZsb2F0NjRBcnJheShuKTsKICAgIH0KICAgIHZhciBjdCA9IGUuSU5JVElBTF9NRU1PUlkgfHwgMTY3NzcyMTY7CiAgICBlLndhc21NZW1vcnkgPyBVID0gZS53YXNtTWVtb3J5IDogVSA9IG5ldyBXZWJBc3NlbWJseS5NZW1vcnkoeyBpbml0aWFsOiBjdCAvIDY1NTM2LCBtYXhpbXVtOiAzMjc2OCB9KSwgVSAmJiAobm4gPSBVLmJ1ZmZlciksIGN0ID0gbm4uYnl0ZUxlbmd0aCwgdXQobm4pOwogICAgdmFyIGx0ID0gW10sIGZ0ID0gW10sIHRlID0gW10sIGR0ID0gW107CiAgICBmdW5jdGlvbiBlZSgpIHsKICAgICAgdmFyIG4gPSBlLnByZVJ1bi5zaGlmdCgpOwogICAgICBsdC51bnNoaWZ0KG4pOwogICAgfQogICAgdmFyIFggPSAwLCBsbiA9IG51bGw7CiAgICBlLnByZWxvYWRlZEltYWdlcyA9IHt9LCBlLnByZWxvYWRlZEF1ZGlvcyA9IHt9OwogICAgZnVuY3Rpb24gZm4obikgewogICAgICB0aHJvdyBlLm9uQWJvcnQgJiYgZS5vbkFib3J0KG4pLCBFKG4pLCBMbiA9ICEwLCBuID0gbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcigiYWJvcnQoIiArIG4gKyAiKS4gQnVpbGQgd2l0aCAtcyBBU1NFUlRJT05TPTEgZm9yIG1vcmUgaW5mby4iKSwgZyhuKSwgbjsKICAgIH0KICAgIGZ1bmN0aW9uIE5uKG4pIHsKICAgICAgdmFyIHQgPSBKOwogICAgICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID8gdC5zdGFydHNXaXRoKG4pIDogdC5pbmRleE9mKG4pID09PSAwOwogICAgfQogICAgZnVuY3Rpb24gaHQoKSB7CiAgICAgIHJldHVybiBObigiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LCIpOwogICAgfQogICAgdmFyIEogPSAic2FtLndhc20iOwogICAgaWYgKCFodCgpKSB7CiAgICAgIHZhciBtdCA9IEo7CiAgICAgIEogPSBlLmxvY2F0ZUZpbGUgPyBlLmxvY2F0ZUZpbGUobXQsIF8pIDogXyArIG10OwogICAgfQogICAgZnVuY3Rpb24geXQoKSB7CiAgICAgIHRyeSB7CiAgICAgICAgaWYgKE0pIHJldHVybiBuZXcgVWludDhBcnJheShNKTsKICAgICAgICBpZiAoUykgcmV0dXJuIFMoSik7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIGZuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiByZSgpIHsKICAgICAgcmV0dXJuIE0gfHwgIWIgJiYgIVQgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgTm4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oeXQpIDogZmV0Y2goSiwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spIHRocm93ICJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICciICsgSiArICInIjsKICAgICAgICByZXR1cm4gbi5hcnJheUJ1ZmZlcigpOwogICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4geXQoKTsKICAgICAgfSk7CiAgICB9CiAgICBmdW5jdGlvbiB3bihuKSB7CiAgICAgIGZvciAoOyAwIDwgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5zaGlmdCgpOwogICAgICAgIGlmICh0eXBlb2YgdCA9PSAiZnVuY3Rpb24iKSB0KGUpOwogICAgICAgIGVsc2UgewogICAgICAgICAgdmFyIHIgPSB0LkJhOwogICAgICAgICAgdHlwZW9mIHIgPT0gIm51bWJlciIgPyB0LnRhID09PSB2b2lkIDAgPyBIbigidiIsIHIpKCkgOiBIbigidmkiLCByKSh0LnRhKSA6IHIodC50YSA9PT0gdm9pZCAwID8gbnVsbCA6IHQudGEpOwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gSG4obiwgdCkgewogICAgICB2YXIgciA9IFtdOwogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgci5sZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOwogICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gaWUobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIGtbdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIGtbdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAga1t0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKCkgewogICAgICByZXR1cm4gMCA8IEFuLnhhOwogICAgfQogICAgZnVuY3Rpb24gVW4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIHB0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gUihuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgeFtuXTsgKSB0ICs9IHB0W3hbbisrXV07CiAgICAgIHJldHVybiB0OwogICAgfQogICAgdmFyIGVuID0ge30sIEsgPSB7fSwgX24gPSB7fTsKICAgIGZ1bmN0aW9uIERuKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIEJuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBEbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gem4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gQm4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIHJuID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBybihuKTsKICAgIH0KICAgIHZhciB2dCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgdGhyb3cgbmV3IHZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gYW4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGMpIHsKICAgICAgICBjID0gcihjKSwgYy5sZW5ndGggIT09IG4ubGVuZ3RoICYmIENuKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBuLmxlbmd0aDsgKyt5KSBCKG5beV0sIGNbeV0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihjKSB7CiAgICAgICAgX25bY10gPSB0OwogICAgICB9KTsKICAgICAgdmFyIHMgPSBBcnJheSh0Lmxlbmd0aCksIHUgPSBbXSwgbCA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihjLCB5KSB7CiAgICAgICAgSy5oYXNPd25Qcm9wZXJ0eShjKSA/IHNbeV0gPSBLW2NdIDogKHUucHVzaChjKSwgZW4uaGFzT3duUHJvcGVydHkoYykgfHwgKGVuW2NdID0gW10pLCBlbltjXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgc1t5XSA9IEtbY10sICsrbCwgbCA9PT0gdS5sZW5ndGggJiYgaShzKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCB1Lmxlbmd0aCA9PT0gMCAmJiBpKHMpOwogICAgfQogICAgZnVuY3Rpb24gQihuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgSy5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKSByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBLW25dID0gdCwgZGVsZXRlIF9uW25dLCBlbi5oYXNPd25Qcm9wZXJ0eShuKSAmJiAodCA9IGVuW25dLCBkZWxldGUgZW5bbl0sIHQuZm9yRWFjaChmdW5jdGlvbihzKSB7CiAgICAgICAgcygpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBhZShuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBWbihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIEduID0gITE7CiAgICBmdW5jdGlvbiBndCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIHd0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gZG4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKGRuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChHbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpIHIgPSByLnZhbHVlLCByLmRhID8gd3QocikgOiBjb25zb2xlLndhcm4oIm9iamVjdCBhbHJlYWR5IGRlbGV0ZWQ6ICIgKyByLmRhKTsKICAgICAgfSksIGRuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiBHbi5yZWdpc3Rlcih0LCB0LkEsIHQuQSksIHQ7CiAgICAgIH0sIGd0ID0gZnVuY3Rpb24odCkgewogICAgICAgIEduLnVucmVnaXN0ZXIodC5BKTsKICAgICAgfSwgZG4obikpOwogICAgfQogICAgdmFyIGhuID0gdm9pZCAwLCBtbiA9IFtdOwogICAgZnVuY3Rpb24gWW4oKSB7CiAgICAgIGZvciAoOyBtbi5sZW5ndGg7ICkgewogICAgICAgIHZhciBuID0gbW4ucG9wKCk7CiAgICAgICAgbi5BLm9hID0gITEsIG4uZGVsZXRlKCk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIEcoKSB7CiAgICB9CiAgICB2YXIgQXQgPSB7fTsKICAgIGZ1bmN0aW9uIG9lKG4sIHQpIHsKICAgICAgdmFyIHIgPSBlOwogICAgICBpZiAocltuXS5qYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdmFyIGkgPSByW25dOwogICAgICAgIHJbbl0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiByW25dLmphLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpIHx8IHYoIkZ1bmN0aW9uICciICsgdCArICInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdHMgb25lIG9mICgiICsgcltuXS5qYSArICIpISIpLCByW25dLmphW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfSwgcltuXS5qYSA9IFtdLCByW25dLmphW2kueWFdID0gaTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pID8gKChyID09PSB2b2lkIDAgfHwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIGVbbl0uamFbcl0gIT09IHZvaWQgMCkgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICciICsgbiArICInIHR3aWNlIiksIG9lKG4sIG4pLCBlLmhhc093blByb3BlcnR5KHIpICYmIHYoIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyByICsgIikhIiksIGVbbl0uamFbcl0gPSB0KSA6IChlW25dID0gdCwgciAhPT0gdm9pZCAwICYmIChlW25dLlJhID0gcikpOwogICAgfQogICAgZnVuY3Rpb24gc2UobiwgdCwgciwgaSwgcywgdSwgbCwgYykgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmNvbnN0cnVjdG9yID0gdCwgdGhpcy5tYSA9IHIsIHRoaXMubmEgPSBpLCB0aGlzLmlhID0gcywgdGhpcy5DYSA9IHUsIHRoaXMucWEgPSBsLCB0aGlzLkFhID0gYzsKICAgIH0KICAgIGZ1bmN0aW9uIFRuKG4sIHQsIHIpIHsKICAgICAgZm9yICg7IHQgIT09IHI7ICkgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiB1ZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgc24odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIFRuKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBjZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBzbih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSBUbih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpIHIgPSB0LkEuZ2E7CiAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIG9uKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGkuZGVsZXRlKCk7CiAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgIH0KICAgICAgcmV0dXJuIHI7CiAgICB9CiAgICBmdW5jdGlvbiBsZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgc24odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyB0LkEuZmEubmFtZSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIFRuKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBFbihuKSB7CiAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShEW24gPj4gMl0pOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCwgcikgewogICAgICByZXR1cm4gdCA9PT0gciA/IG4gOiByLmlhID09PSB2b2lkIDAgPyBudWxsIDogKG4gPSBDdChuLCB0LCByLmlhKSwgbiA9PT0gbnVsbCA/IG51bGwgOiByLkFhKG4pKTsKICAgIH0KICAgIHZhciB5biA9IHt9OwogICAgZnVuY3Rpb24gZmUobiwgdCkgewogICAgICBmb3IgKHQgPT09IHZvaWQgMCAmJiB2KCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsgbi5pYTsgKSB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiB5blt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIFBuKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBDbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIENuKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgZG4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiB6KG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IGNlIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyB1ZSA6IGxlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiBUdChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgQ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gWShuLCB0KSB7CiAgICAgIG4gPSBSKG4pOwogICAgICB2YXIgciA9IEhuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgRXQgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiBQdChuKSB7CiAgICAgIG4gPSBGdChuKTsKICAgICAgdmFyIHQgPSBSKG4pOwogICAgICByZXR1cm4gVihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIHBuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcih1KSB7CiAgICAgICAgc1t1XSB8fCBLW3VdIHx8IChfblt1XSA/IF9uW3VdLmZvckVhY2gocikgOiAoaS5wdXNoKHUpLCBzW3VdID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBzID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IEV0KG4gKyAiOiAiICsgaS5tYXAoUHQpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBPdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspIHIucHVzaChrWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIE9uKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gYnQobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIFRuKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBabiA9IFtdLCBGID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uICRuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1GW25dLkphID09PSAwICYmIChGW25dID0gdm9pZCAwLCBabi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIG9uKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IFpuLmxlbmd0aCA/IFpuLnBvcCgpIDogRi5sZW5ndGg7CiAgICAgICAgICByZXR1cm4gRlt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpIHJldHVybiAibnVsbCI7CiAgICAgIHZhciB0ID0gdHlwZW9mIG47CiAgICAgIHJldHVybiB0ID09PSAib2JqZWN0IiB8fCB0ID09PSAiYXJyYXkiIHx8IHQgPT09ICJmdW5jdGlvbiIgPyBuLnRvU3RyaW5nKCkgOiAiIiArIG47CiAgICB9CiAgICBmdW5jdGlvbiBkZShuLCB0KSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShvdFtyID4+IDJdKTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHN0W3IgPj4gM10pOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBmbG9hdCB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGhlKG4pIHsKICAgICAgdmFyIHQgPSBGdW5jdGlvbjsKICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBCbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIG1lKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiAkW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHhbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gdG5baSA+PiAxXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBnbltpID4+IDFdOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIGtbaSA+PiAyXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBEW2kgPj4gMl07CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGludGVnZXIgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBYbihuKSB7CiAgICAgIHJldHVybiBuIHx8IHYoIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9ICIgKyBuKSwgRltuXS52YWx1ZTsKICAgIH0KICAgIGZ1bmN0aW9uIFN0KG4sIHQpIHsKICAgICAgdmFyIHIgPSBLW25dOwogICAgICByZXR1cm4gciA9PT0gdm9pZCAwICYmIHYodCArICIgaGFzIHVua25vd24gdHlwZSAiICsgUHQobikpLCByOwogICAgfQogICAgdmFyIHllID0ge30sIE10ID0ge307CiAgICBmdW5jdGlvbiBXdCgpIHsKICAgICAgaWYgKCFKbikgewogICAgICAgIHZhciBuID0geyBVU0VSOiAid2ViX3VzZXIiLCBMT0dOQU1FOiAid2ViX3VzZXIiLCBQQVRIOiAiLyIsIFBXRDogIi8iLCBIT01FOiAiL2hvbWUvd2ViX3VzZXIiLCBMQU5HOiAodHlwZW9mIG5hdmlnYXRvciA9PSAib2JqZWN0IiAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gfHwgIkMiKS5yZXBsYWNlKCItIiwgIl8iKSArICIuVVRGLTgiLCBfOiBPIHx8ICIuL3RoaXMucHJvZ3JhbSIgfSwgdDsKICAgICAgICBmb3IgKHQgaW4gTXQpIG5bdF0gPSBNdFt0XTsKICAgICAgICB2YXIgciA9IFtdOwogICAgICAgIGZvciAodCBpbiBuKSByLnB1c2godCArICI9IiArIG5bdF0pOwogICAgICAgIEpuID0gcjsKICAgICAgfQogICAgICByZXR1cm4gSm47CiAgICB9CiAgICB2YXIgSm4sIGt0ID0gW107CiAgICBmdW5jdGlvbiBSdChuKSB7CiAgICAgIHZhciB0ID0ge30sIHI7CiAgICAgIGZvciAociBpbiBuKSAoZnVuY3Rpb24oaSkgewogICAgICAgIHZhciBzID0gbltpXTsKICAgICAgICB0W2ldID0gdHlwZW9mIHMgPT0gImZ1bmN0aW9uIiA/IGZ1bmN0aW9uKCkgewogICAgICAgICAga3QucHVzaChpKTsKICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgIHJldHVybiBzLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9IGZpbmFsbHkgewogICAgICAgICAgICBpZiAoTG4pIHJldHVybjsKICAgICAgICAgICAgdmFyIHUgPSBrdC5wb3AoKTsKICAgICAgICAgICAgcnQodSA9PT0gaSk7CiAgICAgICAgICB9CiAgICAgICAgfSA6IHM7CiAgICAgIH0pKHIpOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIGZvciAodmFyIEl0ID0gQXJyYXkoMjU2KSwgYm4gPSAwOyAyNTYgPiBibjsgKytibikgSXRbYm5dID0gU3RyaW5nLmZyb21DaGFyQ29kZShibik7CiAgICBwdCA9IEl0LCBybiA9IGUuQmluZGluZ0Vycm9yID0gem4oIkJpbmRpbmdFcnJvciIpLCB2dCA9IGUuSW50ZXJuYWxFcnJvciA9IHpuKCJJbnRlcm5hbEVycm9yIiksIEcucHJvdG90eXBlLmlzQWxpYXNPZiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEcgJiYgbiBpbnN0YW5jZW9mIEcpKSByZXR1cm4gITE7CiAgICAgIHZhciB0ID0gdGhpcy5BLmZhLmVhLCByID0gdGhpcy5BLmRhLCBpID0gbi5BLmZhLmVhOwogICAgICBmb3IgKG4gPSBuLkEuZGE7IHQuaWE7ICkgciA9IHQucWEociksIHQgPSB0LmlhOwogICAgICBmb3IgKDsgaS5pYTsgKSBuID0gaS5xYShuKSwgaSA9IGkuaWE7CiAgICAgIHJldHVybiB0ID09PSBpICYmIHIgPT09IG47CiAgICB9LCBHLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkgewogICAgICBpZiAodGhpcy5BLmRhIHx8IFZuKHRoaXMpLCB0aGlzLkEucGEpIHJldHVybiB0aGlzLkEuY291bnQudmFsdWUgKz0gMSwgdGhpczsKICAgICAgdmFyIG4gPSBkbihPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSwgeyBBOiB7IHZhbHVlOiBhZSh0aGlzLkEpIH0gfSkpOwogICAgICByZXR1cm4gbi5BLmNvdW50LnZhbHVlICs9IDEsIG4uQS5vYSA9ICExLCBuOwogICAgfSwgRy5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24oKSB7CiAgICAgIHRoaXMuQS5kYSB8fCBWbih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBndCh0aGlzKSwgd3QodGhpcy5BKSwgdGhpcy5BLnBhIHx8ICh0aGlzLkEuZ2EgPSB2b2lkIDAsIHRoaXMuQS5kYSA9IHZvaWQgMCk7CiAgICB9LCBHLnByb3RvdHlwZS5pc0RlbGV0ZWQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICF0aGlzLkEuZGE7CiAgICB9LCBHLnByb3RvdHlwZS5kZWxldGVMYXRlciA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gdGhpcy5BLmRhIHx8IFZuKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIG1uLnB1c2godGhpcyksIG1uLmxlbmd0aCA9PT0gMSAmJiBobiAmJiBobihZbiksIHRoaXMuQS5vYSA9ICEwLCB0aGlzOwogICAgfSwgei5wcm90b3R5cGUuRGEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHJldHVybiB0aGlzLndhICYmIChuID0gdGhpcy53YShuKSksIG47CiAgICB9LCB6LnByb3RvdHlwZS52YSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdGhpcy5uYSAmJiB0aGlzLm5hKG4pOwogICAgfSwgei5wcm90b3R5cGUuYXJnUGFja0FkdmFuY2UgPSA4LCB6LnByb3RvdHlwZS5yZWFkVmFsdWVGcm9tUG9pbnRlciA9IEVuLCB6LnByb3RvdHlwZS5kZWxldGVPYmplY3QgPSBmdW5jdGlvbihuKSB7CiAgICAgIG4gIT09IG51bGwgJiYgbi5kZWxldGUoKTsKICAgIH0sIHoucHJvdG90eXBlLmZyb21XaXJlVHlwZSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgZnVuY3Rpb24gdCgpIHsKICAgICAgICByZXR1cm4gdGhpcy5zYSA/IFBuKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMuR2EsIGRhOiByLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBQbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLCBkYTogbiB9KTsKICAgICAgfQogICAgICB2YXIgciA9IHRoaXMuRGEobik7CiAgICAgIGlmICghcikgcmV0dXJuIHRoaXMudmEobiksIG51bGw7CiAgICAgIHZhciBpID0gZmUodGhpcy5lYSwgcik7CiAgICAgIGlmIChpICE9PSB2b2lkIDApCiAgICAgICAgcmV0dXJuIGkuQS5jb3VudC52YWx1ZSA9PT0gMCA/IChpLkEuZGEgPSByLCBpLkEuZ2EgPSBuLCBpLmNsb25lKCkpIDogKGkgPSBpLmNsb25lKCksIHRoaXMudmEobiksIGkpOwogICAgICBpZiAoaSA9IHRoaXMuZWEuQ2EociksIGkgPSBBdFtpXSwgIWkpIHJldHVybiB0LmNhbGwodGhpcyk7CiAgICAgIGkgPSB0aGlzLnJhID8gaS56YSA6IGkucG9pbnRlclR5cGU7CiAgICAgIHZhciBzID0gQ3QociwgdGhpcy5lYSwgaS5lYSk7CiAgICAgIHJldHVybiBzID09PSBudWxsID8gdC5jYWxsKHRoaXMpIDogdGhpcy5zYSA/IFBuKGkuZWEubWEsIHsgZmE6IGksIGRhOiBzLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBQbigKICAgICAgICBpLmVhLm1hLAogICAgICAgIHsgZmE6IGksIGRhOiBzIH0KICAgICAgKTsKICAgIH0sIGUuZ2V0SW5oZXJpdGVkSW5zdGFuY2VDb3VudCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gT2JqZWN0LmtleXMoeW4pLmxlbmd0aDsKICAgIH0sIGUuZ2V0TGl2ZUluaGVyaXRlZEluc3RhbmNlcyA9IGZ1bmN0aW9uKCkgewogICAgICB2YXIgbiA9IFtdLCB0OwogICAgICBmb3IgKHQgaW4geW4pIHluLmhhc093blByb3BlcnR5KHQpICYmIG4ucHVzaCh5blt0XSk7CiAgICAgIHJldHVybiBuOwogICAgfSwgZS5mbHVzaFBlbmRpbmdEZWxldGVzID0gWW4sIGUuc2V0RGVsYXlGdW5jdGlvbiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgaG4gPSBuLCBtbi5sZW5ndGggJiYgaG4gJiYgaG4oWW4pOwogICAgfSwgRXQgPSBlLlVuYm91bmRUeXBlRXJyb3IgPSB6bigiVW5ib3VuZFR5cGVFcnJvciIpLCBlLmNvdW50X2VtdmFsX2hhbmRsZXMgPSBmdW5jdGlvbigpIHsKICAgICAgZm9yICh2YXIgbiA9IDAsIHQgPSA1OyB0IDwgRi5sZW5ndGg7ICsrdCkgRlt0XSAhPT0gdm9pZCAwICYmICsrbjsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmdldF9maXJzdF9lbXZhbCA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gNTsgbiA8IEYubGVuZ3RoOyArK24pIGlmIChGW25dICE9PSB2b2lkIDApIHJldHVybiBGW25dOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0sIGZ0LnB1c2goeyBCYTogZnVuY3Rpb24oKSB7CiAgICAgIHh0KCk7CiAgICB9IH0pOwogICAgdmFyIHBlID0gewogICAgICB6OiBmdW5jdGlvbihuKSB7CiAgICAgICAgcmV0dXJuIFNuKG4gKyAxNikgKyAxNjsKICAgICAgfSwKICAgICAgdTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHRocm93IG5ldyBpZShuKS5GYSh0LCByKSwgInVuY2F1Z2h0X2V4Y2VwdGlvbiIgaW4gQW4gPyBBbi54YSsrIDogQW4ueGEgPSAxLCBuOwogICAgICB9LAogICAgICB3OiBmdW5jdGlvbihuLCB0LCByLCBpLCBzKSB7CiAgICAgICAgdmFyIHUgPSBVbihyKTsKICAgICAgICB0ID0gUih0KSwgQihuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24obCkgewogICAgICAgICAgcmV0dXJuICEhbDsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihsLCBjKSB7CiAgICAgICAgICByZXR1cm4gYyA/IGkgOiBzOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24obCkgewogICAgICAgICAgaWYgKHIgPT09IDEpIHZhciBjID0gJDsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDIpIGMgPSB0bjsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDQpIGMgPSBrOwogICAgICAgICAgZWxzZSB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGJvb2xlYW4gdHlwZSBzaXplOiAiICsgdCk7CiAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUoY1tsID4+IHVdKTsKICAgICAgICB9LCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgaDogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSwgbCwgYywgeSwgZiwgZCwgbSwgdykgewogICAgICAgIGQgPSBSKGQpLCB1ID0gWShzLCB1KSwgYyAmJiAoYyA9IFkobCwgYykpLCBmICYmIChmID0gWSh5LCBmKSksIHcgPSBZKG0sIHcpOwogICAgICAgIHZhciBQID0gRG4oZCk7CiAgICAgICAgX3QoUCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBwbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbaV0pOwogICAgICAgIH0pLCBhbihbbiwgdCwgcl0sIGkgPyBbaV0gOiBbXSwgZnVuY3Rpb24ocCkgewogICAgICAgICAgaWYgKHAgPSBwWzBdLCBpKQogICAgICAgICAgICB2YXIgTiA9IHAuZWEsIFcgPSBOLm1hOwogICAgICAgICAgZWxzZSBXID0gRy5wcm90b3R5cGU7CiAgICAgICAgICBwID0gQm4oUCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykgIT09IEkpIHRocm93IG5ldyBybigiVXNlICduZXcnIHRvIGNvbnN0cnVjdCAiICsgZCk7CiAgICAgICAgICAgIGlmIChMLmxhID09PSB2b2lkIDApIHRocm93IG5ldyBybihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIganQgPSBMLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoanQgPT09IHZvaWQgMCkgdGhyb3cgbmV3IHJuKCJUcmllZCB0byBpbnZva2UgY3RvciBvZiAiICsgZCArICIgd2l0aCBpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0ZWQgKCIgKyBPYmplY3Qua2V5cyhMLmxhKS50b1N0cmluZygpICsgIikgcGFyYW1ldGVycyBpbnN0ZWFkISIpOwogICAgICAgICAgICByZXR1cm4ganQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICAgIH0pOwogICAgICAgICAgdmFyIEkgPSBPYmplY3QuY3JlYXRlKFcsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHAgfSB9KTsKICAgICAgICAgIHAucHJvdG90eXBlID0gSTsKICAgICAgICAgIHZhciBMID0gbmV3IHNlKGQsIHAsIEksIHcsIE4sIHUsIGMsIGYpOwogICAgICAgICAgTiA9IG5ldyB6KGQsIEwsICEwLCAhMSksIFcgPSBuZXcgeihkICsgIioiLCBMLCAhMSwgITEpOwogICAgICAgICAgdmFyIHZuID0gbmV3IHooZCArICIgY29uc3QqIiwgTCwgITEsICEwKTsKICAgICAgICAgIHJldHVybiBBdFtuXSA9IHsgcG9pbnRlclR5cGU6IFcsIHphOiB2biB9LCBUdChQLCBwKSwgW04sIFcsIHZuXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgZzogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSkgewogICAgICAgIHJ0KDAgPCB0KTsKICAgICAgICB2YXIgbCA9IE90KHQsIHIpOwogICAgICAgIHMgPSBZKGksIHMpOwogICAgICAgIHZhciBjID0gW3VdLCB5ID0gW107CiAgICAgICAgYW4oW10sIFtuXSwgZnVuY3Rpb24oZikgewogICAgICAgICAgZiA9IGZbMF07CiAgICAgICAgICB2YXIgZCA9ICJjb25zdHJ1Y3RvciAiICsgZi5uYW1lOwogICAgICAgICAgaWYgKGYuZWEubGEgPT09IHZvaWQgMCAmJiAoZi5lYS5sYSA9IFtdKSwgZi5lYS5sYVt0IC0gMV0gIT09IHZvaWQgMCkgdGhyb3cgbmV3IHJuKCJDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgY29uc3RydWN0b3JzIHdpdGggaWRlbnRpY2FsIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgKHQgLSAxKSArICIpIGZvciBjbGFzcyAnIiArIGYubmFtZSArICInISBPdmVybG9hZCByZXNvbHV0aW9uIGlzIGN1cnJlbnRseSBvbmx5IHBlcmZvcm1lZCB1c2luZyB0aGUgcGFyYW1ldGVyIGNvdW50LCBub3QgYWN0dWFsIHR5cGUgaW5mbyEiKTsKICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBwbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZi5uYW1lICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGwpOwogICAgICAgICAgfSwgYW4oW10sIGwsIGZ1bmN0aW9uKG0pIHsKICAgICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCAhPT0gdCAtIDEgJiYgdihkICsgIiBjYWxsZWQgd2l0aCAiICsgYXJndW1lbnRzLmxlbmd0aCArICIgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKHQgLSAxKSksIHkubGVuZ3RoID0gMCwgYy5sZW5ndGggPSB0OwogICAgICAgICAgICAgIGZvciAodmFyIHcgPSAxOyB3IDwgdDsgKyt3KSBjW3ddID0gbVt3XS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgeSwKICAgICAgICAgICAgICAgIGFyZ3VtZW50c1t3IC0gMV0KICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiB3ID0gcy5hcHBseShudWxsLCBjKSwgT24oeSksIG1bMF0uZnJvbVdpcmVUeXBlKHcpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSwgbCwgYywgeSwgZikgewogICAgICAgIHQgPSBSKHQpLCBzID0gWShpLCBzKSwgYW4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgbSA9IGQubmFtZSArICIuIiArIHQsIHcgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHBuKCJDYW5ub3QgYWNjZXNzICIgKyBtICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBsXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHkgPyB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBwbigiQ2Fubm90IGFjY2VzcyAiICsgbSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgbF0pOwogICAgICAgICAgfSA6IHcuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYobSArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCB3KSwgYW4oW10sIHkgPyBbciwgbF0gOiBbcl0sIGZ1bmN0aW9uKFApIHsKICAgICAgICAgICAgdmFyIHAgPSBQWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciBJID0gYnQodGhpcywgZCwgbSArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIHAuZnJvbVdpcmVUeXBlKHModSwgSSkpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAoeSkgewogICAgICAgICAgICAgIHkgPSBZKGMsIHkpOwogICAgICAgICAgICAgIHZhciBXID0gUFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKEkpIHsKICAgICAgICAgICAgICAgIHZhciBMID0gYnQodGhpcywgZCwgbSArICIgc2V0dGVyIiksIHZuID0gW107CiAgICAgICAgICAgICAgICB5KGYsIEwsIFcudG9XaXJlVHlwZSh2biwgSSkpLCBPbih2bik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBSKHQpLCBCKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IEZbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gJG4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIG9uKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogRW4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IFVuKHIpLCB0ID0gUih0KSwgQihuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIHMpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBzICE9ICJudW1iZXIiICYmIHR5cGVvZiBzICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBzbihzKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgICByZXR1cm4gczsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBkZSh0LCByKSwKICAgICAgICAgIGthOiBudWxsCiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGM6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIHMsIHUpIHsKICAgICAgICB2YXIgbCA9IE90KHQsIHIpOwogICAgICAgIG4gPSBSKG4pLCBzID0gWShpLCBzKSwgX3QobiwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBwbigiQ2Fubm90IGNhbGwgIiArIG4gKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgbCk7CiAgICAgICAgfSwgdCAtIDEpLCBhbihbXSwgbCwgZnVuY3Rpb24oYykgewogICAgICAgICAgdmFyIHkgPSBuLCBmID0gbjsKICAgICAgICAgIGMgPSBbY1swXSwgbnVsbF0uY29uY2F0KGMuc2xpY2UoMSkpOwogICAgICAgICAgdmFyIGQgPSBzLCBtID0gYy5sZW5ndGg7CiAgICAgICAgICAyID4gbSAmJiB2KCJhcmdUeXBlcyBhcnJheSBzaXplIG1pc21hdGNoISBNdXN0IGF0IGxlYXN0IGdldCByZXR1cm4gdmFsdWUgYW5kICd0aGlzJyB0eXBlcyEiKTsKICAgICAgICAgIGZvciAodmFyIHcgPSBjWzFdICE9PSBudWxsICYmICExLCBQID0gITEsIHAgPSAxOyBwIDwgYy5sZW5ndGg7ICsrcCkgaWYgKGNbcF0gIT09IG51bGwgJiYgY1twXS5rYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgICAgIFAgPSAhMDsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICB9CiAgICAgICAgICB2YXIgTiA9IGNbMF0ubmFtZSAhPT0gInZvaWQiLCBXID0gIiIsIEkgPSAiIjsKICAgICAgICAgIGZvciAocCA9IDA7IHAgPCBtIC0gMjsgKytwKSBXICs9IChwICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgcCwgSSArPSAocCAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHAgKyAiV2lyZWQiOwogICAgICAgICAgZiA9ICJyZXR1cm4gZnVuY3Rpb24gIiArIERuKGYpICsgIigiICsgVyArIGApIHsKaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IGAgKyAobSAtIDIpICsgYCkgewp0aHJvd0JpbmRpbmdFcnJvcignZnVuY3Rpb24gYCArIGYgKyAiIGNhbGxlZCB3aXRoICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAobSAtIDIpICsgYCBhcmdzIScpOwp9CmAsIFAgJiYgKGYgKz0gYHZhciBkZXN0cnVjdG9ycyA9IFtdOwpgKTsKICAgICAgICAgIHZhciBMID0gUCA/ICJkZXN0cnVjdG9ycyIgOiAibnVsbCI7CiAgICAgICAgICBmb3IgKFcgPSAidGhyb3dCaW5kaW5nRXJyb3IgaW52b2tlciBmbiBydW5EZXN0cnVjdG9ycyByZXRUeXBlIGNsYXNzUGFyYW0iLnNwbGl0KCIgIiksIGQgPSBbdiwgZCwgdSwgT24sIGNbMF0sIGNbMV1dLCB3ICYmIChmICs9ICJ2YXIgdGhpc1dpcmVkID0gY2xhc3NQYXJhbS50b1dpcmVUeXBlKCIgKyBMICsgYCwgdGhpcyk7CmApLCBwID0gMDsgcCA8IG0gLSAyOyArK3ApIGYgKz0gInZhciBhcmciICsgcCArICJXaXJlZCA9IGFyZ1R5cGUiICsgcCArICIudG9XaXJlVHlwZSgiICsgTCArICIsIGFyZyIgKyBwICsgIik7IC8vICIgKyBjW3AgKyAyXS5uYW1lICsgYApgLCBXLnB1c2goImFyZ1R5cGUiICsgcCksIGQucHVzaChjW3AgKyAyXSk7CiAgICAgICAgICBpZiAodyAmJiAoSSA9ICJ0aGlzV2lyZWQiICsgKDAgPCBJLmxlbmd0aCA/ICIsICIgOiAiIikgKyBJKSwgZiArPSAoTiA/ICJ2YXIgcnYgPSAiIDogIiIpICsgImludm9rZXIoZm4iICsgKDAgPCBJLmxlbmd0aCA/ICIsICIgOiAiIikgKyBJICsgYCk7CmAsIFApIGYgKz0gYHJ1bkRlc3RydWN0b3JzKGRlc3RydWN0b3JzKTsKYDsKICAgICAgICAgIGVsc2UgZm9yIChwID0gdyA/IDEgOiAyOyBwIDwgYy5sZW5ndGg7ICsrcCkgbSA9IHAgPT09IDEgPyAidGhpc1dpcmVkIiA6ICJhcmciICsgKHAgLSAyKSArICJXaXJlZCIsIGNbcF0ua2EgIT09IG51bGwgJiYgKGYgKz0gbSArICJfZHRvcigiICsgbSArICIpOyAvLyAiICsgY1twXS5uYW1lICsgYApgLCBXLnB1c2gobSArICJfZHRvciIpLCBkLnB1c2goY1twXS5rYSkpOwogICAgICAgICAgcmV0dXJuIE4gJiYgKGYgKz0gYHZhciByZXQgPSByZXRUeXBlLmZyb21XaXJlVHlwZShydik7CnJldHVybiByZXQ7CmApLCBXLnB1c2goZiArIGB9CmApLCBjID0gaGUoVykuYXBwbHkobnVsbCwgZCksIFR0KHksIGMsIHQgLSAxKSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGU6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIHMpIHsKICAgICAgICBmdW5jdGlvbiB1KGYpIHsKICAgICAgICAgIHJldHVybiBmOwogICAgICAgIH0KICAgICAgICB0ID0gUih0KSwgcyA9PT0gLTEgJiYgKHMgPSA0Mjk0OTY3Mjk1KTsKICAgICAgICB2YXIgbCA9IFVuKHIpOwogICAgICAgIGlmIChpID09PSAwKSB7CiAgICAgICAgICB2YXIgYyA9IDMyIC0gOCAqIHI7CiAgICAgICAgICB1ID0gZnVuY3Rpb24oZikgewogICAgICAgICAgICByZXR1cm4gZiA8PCBjID4+PiBjOwogICAgICAgICAgfTsKICAgICAgICB9CiAgICAgICAgdmFyIHkgPSB0LmluZGV4T2YoInVuc2lnbmVkIikgIT0gLTE7CiAgICAgICAgQihuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogdSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oZiwgZCkgewogICAgICAgICAgaWYgKHR5cGVvZiBkICE9ICJudW1iZXIiICYmIHR5cGVvZiBkICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBzbihkKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgaWYgKGQgPCBpIHx8IGQgPiBzKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXNzaW5nIGEgbnVtYmVyICInICsgc24oZCkgKyAnIiBmcm9tIEpTIHNpZGUgdG8gQy9DKysgc2lkZSB0byBhbiBhcmd1bWVudCBvZiB0eXBlICInICsgdCArICciLCB3aGljaCBpcyBvdXRzaWRlIHRoZSB2YWxpZCByYW5nZSBbJyArIGkgKyAiLCAiICsgcyArICJdISIpOwogICAgICAgICAgcmV0dXJuIHkgPyBkID4+PiAwIDogZCB8IDA7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBtZSh0LCBsLCBpICE9PSAwKSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGQ6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBmdW5jdGlvbiBpKHUpIHsKICAgICAgICAgIHUgPj49IDI7CiAgICAgICAgICB2YXIgbCA9IEQ7CiAgICAgICAgICByZXR1cm4gbmV3IHMobm4sIGxbdSArIDFdLCBsW3VdKTsKICAgICAgICB9CiAgICAgICAgdmFyIHMgPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gUihyKSwgQihuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFIodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEIobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgcyA9IERbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpIGZvciAodmFyIHUgPSBpICsgNCwgbCA9IDA7IGwgPD0gczsgKytsKSB7CiAgICAgICAgICAgICAgdmFyIGMgPSBpICsgNCArIGw7CiAgICAgICAgICAgICAgaWYgKGwgPT0gcyB8fCB4W2NdID09IDApIHsKICAgICAgICAgICAgICAgIGlmICh1KSB7CiAgICAgICAgICAgICAgICAgIHZhciB5ID0gdSwgZiA9IHgsIGQgPSB5ICsgKGMgLSB1KTsKICAgICAgICAgICAgICAgICAgZm9yICh1ID0geTsgZlt1XSAmJiAhKHUgPj0gZCk7ICkgKyt1OwogICAgICAgICAgICAgICAgICBpZiAoMTYgPCB1IC0geSAmJiBmLnN1YmFycmF5ICYmIGl0KSB5ID0gaXQuZGVjb2RlKGYuc3ViYXJyYXkoeSwgdSkpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAiIjsgeSA8IHU7ICkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBmW3krK107CiAgICAgICAgICAgICAgICAgICAgICBpZiAobSAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZbeSsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG0gJiAyMjQpID09IDE5MikgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChtICYgMzEpIDw8IDYgfCB3KTsKICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3krK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBtID0gKG0gJiAyNDApID09IDIyNCA/IChtICYgMTUpIDw8IDEyIHwgdyA8PCA2IHwgUCA6IChtICYgNykgPDwgMTggfCB3IDw8IDEyIHwgUCA8PCA2IHwgZlt5KytdICYgNjMsIDY1NTM2ID4gbSA/IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShtKSA6IChtIC09IDY1NTM2LCBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBtID4+IDEwLCA1NjMyMCB8IG0gJiAxMDIzKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobSk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHkgPSBkOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgeSA9ICIiOwogICAgICAgICAgICAgICAgaWYgKHAgPT09IHZvaWQgMCkgdmFyIHAgPSB5OwogICAgICAgICAgICAgICAgZWxzZSBwICs9ICJcMCIsIHAgKz0geTsKICAgICAgICAgICAgICAgIHUgPSBjICsgMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgZm9yIChwID0gQXJyYXkocyksIGwgPSAwOyBsIDwgczsgKytsKSBwW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZSh4W2kgKyA0ICsgbF0pOwogICAgICAgICAgICAgIHAgPSBwLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBWKGkpLCBwOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIHMpIHsKICAgICAgICAgICAgcyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChzID0gbmV3IFVpbnQ4QXJyYXkocykpOwogICAgICAgICAgICB2YXIgdSA9IHR5cGVvZiBzID09ICJzdHJpbmciOwogICAgICAgICAgICB1IHx8IHMgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IHMgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBzIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGwgPSAociAmJiB1ID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgcy5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIG0gPSBzLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBtICYmIDU3MzQzID49IG0gJiYgKG0gPSA2NTUzNiArICgobSAmIDEwMjMpIDw8IDEwKSB8IHMuY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBtID8gKytmIDogZiA9IDIwNDcgPj0gbSA/IGYgKyAyIDogNjU1MzUgPj0gbSA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIHMubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBjID0gU24oNCArIGwgKyAxKTsKICAgICAgICAgICAgaWYgKERbYyA+PiAyXSA9IGwsIHIgJiYgdSkgJHQocywgYyArIDQsIGwgKyAxKTsKICAgICAgICAgICAgZWxzZSBpZiAodSkgZm9yICh1ID0gMDsgdSA8IGw7ICsrdSkgewogICAgICAgICAgICAgIHZhciB5ID0gcy5jaGFyQ29kZUF0KHUpOwogICAgICAgICAgICAgIDI1NSA8IHkgJiYgKFYoYyksIHYoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpKSwgeFtjICsgNCArIHVdID0geTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGZvciAodSA9IDA7IHUgPCBsOyArK3UpIHhbYyArIDQgKyB1XSA9IHNbdV07CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaChWLCBjKSwgYzsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBFbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIFYoaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFIociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IFh0LCBzID0gSnQsIHUgPSBLdCwgbCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gZ247CiAgICAgICAgICB9LCBjID0gMTsKICAgICAgICBlbHNlIHQgPT09IDQgJiYgKGkgPSBRdCwgcyA9IHF0LCB1ID0gbmUsIGwgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiBEOwogICAgICAgIH0sIGMgPSAyKTsKICAgICAgICBCKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gRFt5ID4+IDJdLCBkID0gbCgpLCBtLCB3ID0geSArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgcCA9IHkgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFtwID4+IGNdID09IDApICYmICh3ID0gaSh3LCBwIC0gdyksIG0gPT09IHZvaWQgMCA/IG0gPSB3IDogKG0gKz0gIlwwIiwgbSArPSB3KSwgdyA9IHAgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiBWKHkpLCBtOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHksIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gdShmKSwgbSA9IFNuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gRFttID4+IDJdID0gZCA+PiBjLCBzKGYsIG0gKyA0LCBkICsgdCksIHkgIT09IG51bGwgJiYgeS5wdXNoKFYsIG0pLCBtOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogRW4sIGthOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBWKHkpOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgQihuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSBYbihuKSwgdCA9IFN0KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBzID0gb24oaSk7CiAgICAgICAgcmV0dXJuIGtbciA+PiAyXSA9IHMsIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogJG4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IFhuKG4pLCB0ID0gWG4odCksIG9uKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSB5ZVtuXTsKICAgICAgICByZXR1cm4gb24odCA9PT0gdm9pZCAwID8gUihuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgT24oRltuXS52YWx1ZSksICRuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBTdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIG9uKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBmbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgeC5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0geC5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKSByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBVLmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBubi5ieXRlTGVuZ3RoICsgNjU1MzUgPj4+IDE2KSwgdXQoVS5idWZmZXIpOwogICAgICAgICAgICAgIHZhciBzID0gMTsKICAgICAgICAgICAgICBicmVhayBuOwogICAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgfQogICAgICAgICAgICBzID0gdm9pZCAwOwogICAgICAgICAgfQogICAgICAgICAgaWYgKHMpIHJldHVybiAhMDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuICExOwogICAgICB9LAogICAgICBzOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSAwOwogICAgICAgIHJldHVybiBXdCgpLmZvckVhY2goZnVuY3Rpb24oaSwgcykgewogICAgICAgICAgdmFyIHUgPSB0ICsgcjsKICAgICAgICAgIGZvciAocyA9IGtbbiArIDQgKiBzID4+IDJdID0gdSwgdSA9IDA7IHUgPCBpLmxlbmd0aDsgKyt1KSAkW3MrKyA+PiAwXSA9IGkuY2hhckNvZGVBdCh1KTsKICAgICAgICAgICRbcyA+PiAwXSA9IDAsIHIgKz0gaS5sZW5ndGggKyAxOwogICAgICAgIH0pLCAwOwogICAgICB9LAogICAgICB0OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSBXdCgpOwogICAgICAgIGtbbiA+PiAyXSA9IHIubGVuZ3RoOwogICAgICAgIHZhciBpID0gMDsKICAgICAgICByZXR1cm4gci5mb3JFYWNoKGZ1bmN0aW9uKHMpIHsKICAgICAgICAgIGkgKz0gcy5sZW5ndGggKyAxOwogICAgICAgIH0pLCBrW3QgPj4gMl0gPSBpLCAwOwogICAgICB9LAogICAgICBhOiBVCiAgICB9OwogICAgKGZ1bmN0aW9uKCkgewogICAgICBmdW5jdGlvbiBuKHUpIHsKICAgICAgICB1ID0gdS5leHBvcnRzLCB1ID0gUnQodSksIGUuYXNtID0gdSwgWC0tLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFgpLCBYID09IDAgJiYgbG4gJiYgKHUgPSBsbiwgbG4gPSBudWxsLCB1KCkpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHQodSkgewogICAgICAgIG4odS5pbnN0YW5jZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcih1KSB7CiAgICAgICAgcmV0dXJuIHJlKCkudGhlbihmdW5jdGlvbihsKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUobCwgaSk7CiAgICAgICAgfSkudGhlbih1LCBmdW5jdGlvbihsKSB7CiAgICAgICAgICBFKCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAiICsgbCksIGZuKGwpOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIHZhciBpID0geyBhOiBwZSB9OwogICAgICBpZiAoWCsrLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFgpLCBlLmluc3RhbnRpYXRlV2FzbSkgdHJ5IHsKICAgICAgICB2YXIgcyA9IGUuaW5zdGFudGlhdGVXYXNtKGksIG4pOwogICAgICAgIHJldHVybiBzID0gUnQocyk7CiAgICAgIH0gY2F0Y2ggKHUpIHsKICAgICAgICByZXR1cm4gRSgiTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogIiArIHUpLCAhMTsKICAgICAgfQogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKE0gfHwgdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nICE9ICJmdW5jdGlvbiIgfHwgaHQoKSB8fCBObigiZmlsZTovLyIpIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iKSByZXR1cm4gcih0KTsKICAgICAgICBmZXRjaChKLCB7IGNyZWRlbnRpYWxzOiAic2FtZS1vcmlnaW4iIH0pLnRoZW4oZnVuY3Rpb24odSkgewogICAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHUsIGkpLnRoZW4odCwgZnVuY3Rpb24obCkgewogICAgICAgICAgICByZXR1cm4gRSgid2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6ICIgKyBsKSwgRSgiZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb24iKSwgcih0KTsKICAgICAgICAgIH0pOwogICAgICAgIH0pOwogICAgICB9KCksIHt9OwogICAgfSkoKTsKICAgIHZhciB4dCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoeHQgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGUuYXNtLkIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBTbiA9IGUuX21hbGxvYyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFNuID0gZS5fbWFsbG9jID0gZS5hc20uQykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIFYgPSBlLl9mcmVlID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoViA9IGUuX2ZyZWUgPSBlLmFzbS5EKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgRnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZS5hc20uRSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICBlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBlLmFzbS5GKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpID0gZS5hc20uRykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aSA9IGUuYXNtLkgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9pID0gZS5hc20uSSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpID0gZS5hc20uSikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWkgPSBlLmFzbS5LKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2ZpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9maWkgPSBlLmFzbS5MKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWYgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpZiA9IGUuYXNtLk0pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWkgPSBlLmFzbS5OKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaSA9IGUuYXNtLk8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaSA9IGUuYXNtLlApLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaSA9IGUuYXNtLlEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaWkgPSBlLmFzbS5SKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpID0gZS5hc20uUykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZS5hc20uVCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGUuYXNtLlUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBlLmFzbS5WKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGUuYXNtLlcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGUuYXNtLlgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpID0gZS5hc20uWSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaSA9IGUuYXNtLlopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpID0gZS5hc20uXykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGUuYXNtLiQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZS5hc20uYWEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBlLmFzbS5iYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBlLmFzbS5jYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICB2YXIgTW47CiAgICBsbiA9IGZ1bmN0aW9uIG4oKSB7CiAgICAgIE1uIHx8IEtuKCksIE1uIHx8IChsbiA9IG4pOwogICAgfTsKICAgIGZ1bmN0aW9uIEtuKCkgewogICAgICBmdW5jdGlvbiBuKCkgewogICAgICAgIGlmICghTW4gJiYgKE1uID0gITAsIGUuY2FsbGVkUnVuID0gITAsICFMbikpIHsKICAgICAgICAgIGlmICh3bihmdCksIHduKHRlKSwgaChlKSwgZS5vblJ1bnRpbWVJbml0aWFsaXplZCAmJiBlLm9uUnVudGltZUluaXRpYWxpemVkKCksIGUucG9zdFJ1bikgZm9yICh0eXBlb2YgZS5wb3N0UnVuID09ICJmdW5jdGlvbiIgJiYgKGUucG9zdFJ1biA9IFtlLnBvc3RSdW5dKTsgZS5wb3N0UnVuLmxlbmd0aDsgKSB7CiAgICAgICAgICAgIHZhciB0ID0gZS5wb3N0UnVuLnNoaWZ0KCk7CiAgICAgICAgICAgIGR0LnVuc2hpZnQodCk7CiAgICAgICAgICB9CiAgICAgICAgICB3bihkdCk7CiAgICAgICAgfQogICAgICB9CiAgICAgIGlmICghKDAgPCBYKSkgewogICAgICAgIGlmIChlLnByZVJ1bikgZm9yICh0eXBlb2YgZS5wcmVSdW4gPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVSdW4gPSBbZS5wcmVSdW5dKTsgZS5wcmVSdW4ubGVuZ3RoOyApIGVlKCk7CiAgICAgICAgd24obHQpLCAwIDwgWCB8fCAoZS5zZXRTdGF0dXMgPyAoZS5zZXRTdGF0dXMoIlJ1bm5pbmcuLi4iKSwgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGUuc2V0U3RhdHVzKCIiKTsKICAgICAgICAgIH0sIDEpLCBuKCk7CiAgICAgICAgfSwgMSkpIDogbigpKTsKICAgICAgfQogICAgfQogICAgaWYgKGUucnVuID0gS24sIGUucHJlSW5pdCkgZm9yICh0eXBlb2YgZS5wcmVJbml0ID09ICJmdW5jdGlvbiIgJiYgKGUucHJlSW5pdCA9IFtlLnByZUluaXRdKTsgMCA8IGUucHJlSW5pdC5sZW5ndGg7ICkgZS5wcmVJbml0LnBvcCgpKCk7CiAgICByZXR1cm4gS24oKSwgby5yZWFkeTsKICB9Owp9KCk7CmNsYXNzIGogZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgaCkgewogICAgc3VwZXIoZSk7CiAgICBRbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IGg7CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiBqKQogICAgICByZXR1cm4gZTsKICAgIGxldCBoOwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIGggPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICBoID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgaCA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgaCA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgaCA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyBqKGgsIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgaikKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCBoID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgaihoKTsKICB9Cn0KY29uc3QgX2UgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfTsKdmFyIFosIHEsIGNuOwpjbGFzcyBDZSB7CiAgY29uc3RydWN0b3IobywgZSkgewogICAgV24odGhpcywgWik7CiAgICBXbih0aGlzLCBxKTsKICAgIFduKHRoaXMsIGNuKTsKICAgIGtuKHRoaXMsIFosIG8pLCBrbih0aGlzLCBxLCB0aGlzLmFsbG9jYXRlKGUubGVuZ3RoICogZS5CWVRFU19QRVJfRUxFTUVOVCkpLCBrbih0aGlzLCBjbiwgdGhpcy5hbGxvY2F0ZShlLmxlbmd0aCAqIGUuQllURVNfUEVSX0VMRU1FTlQpKTsKICB9CiAgZ2V0IHJnYmFJbWFnZVBvaW50ZXIoKSB7CiAgICByZXR1cm4gSCh0aGlzLCBxKTsKICB9CiAgZ2V0IGJncjBJbWFnZVBvaW50ZXIoKSB7CiAgICByZXR1cm4gSCh0aGlzLCBjbik7CiAgfQogIGFsbG9jYXRlKG8pIHsKICAgIHJldHVybiBIKHRoaXMsIFopLl9tYWxsb2Mobyk7CiAgfQogIGZyZWUoKSB7CiAgICBIKHRoaXMsIFopLl9mcmVlKEgodGhpcywgcSkpLCBIKHRoaXMsIFopLl9mcmVlKEgodGhpcywgY24pKTsKICB9CiAgd3JpdGVEYXRhVG9NZW1vcnkobykgewogICAgSCh0aGlzLCBaKS5IRUFQVTguc2V0KG8sIEgodGhpcywgcSkpOwogIH0KfQpaID0gbmV3IFdlYWtNYXAoKSwgcSA9IG5ldyBXZWFrTWFwKCksIGNuID0gbmV3IFdlYWtNYXAoKTsKY2xhc3MgVGUgewogIGNvbnN0cnVjdG9yKCkgewogICAgUW4odGhpcywgInNhbVdhc21Nb2R1bGUiKTsKICB9CiAgZ2V0T3ZlcnJpZGRlbk1vZHVsZXMobywgZSkgewogICAgcmV0dXJuIHsKICAgICAgbG9jYXRlRmlsZTogKGgpID0+IG5ldyBVUkwoZSB8fCBoLCBvKS5ocmVmCiAgICB9OwogIH0KICBhc3luYyBoYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKG8sIGUpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IGggPSBhd2FpdCBmZXRjaChvKTsKICAgICAgaWYgKCFoLm9rKQogICAgICAgIHRocm93IG5ldyBqKAogICAgICAgICAgYFRoZSBwYXRoIHRvICR7ZX0gaXMgaW5jb3JyZWN0IG9yIHRoZSBtb2R1bGUgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7b31gCiAgICAgICAgKTsKICAgICAgY29uc3QgZyA9IGF3YWl0IGguYXJyYXlCdWZmZXIoKTsKICAgICAgaWYgKCFXZWJBc3NlbWJseS52YWxpZGF0ZShnKSkKICAgICAgICB0aHJvdyBuZXcgaigKICAgICAgICAgIGBUaGUgcHJvdmlkZWQgJHtlfSBpcyBub3QgYSB2YWxpZCBXQVNNIG1vZHVsZS4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7b31gCiAgICAgICAgKTsKICAgIH0gY2F0Y2ggKGgpIHsKICAgICAgaWYgKGggaW5zdGFuY2VvZiBqKQogICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICAgICAiWW91IGNhbiBmaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIGhvc3Qgd2FzbSBmaWxlcyBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuaW5ub3ZhdHJpY3MuY29tL2RpZ2l0YWwtb25ib2FyZGluZy90ZWNobmljYWwvcmVtb3RlL2RvdC13ZWItZG9jdW1lbnQvbGF0ZXN0L2RvY3VtZW50YXRpb24vI19ob3N0aW5nX3NhbV93YXNtIgogICAgICAgICksIGg7CiAgICB9CiAgfQogIGFzeW5jIGdldFdhc21GaWxlTmFtZSgpIHsKICAgIHJldHVybiBhd2FpdCB3ZSgpID8gSHQuc2ltZCA6IEh0LnNhbTsKICB9CiAgYXN5bmMgaW5pdFNhbU1vZHVsZShvLCBlID0gIi93YXNtIikgewogICAgaWYgKHRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgcmV0dXJuOwogICAgY29uc3QgaCA9IGF3YWl0IHRoaXMuZ2V0V2FzbUZpbGVOYW1lKCksIGcgPSBgJHtlfS8ke2h9YDsKICAgIHRyeSB7CiAgICAgIHRoaXMuc2FtV2FzbU1vZHVsZSA9IGF3YWl0IEFlKHRoaXMuZ2V0T3ZlcnJpZGRlbk1vZHVsZXMobywgZykpOwogICAgfSBjYXRjaCB7CiAgICAgIHRocm93IGF3YWl0IHRoaXMuaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZShnLCBoKSwgbmV3IGooIkNvdWxkIG5vdCBpbml0IGRldGVjdG9yLiIpOwogICAgfQogIH0KICBhc3luYyBnZXRTYW1WZXJzaW9uKCkgewogICAgdmFyIGU7CiAgICBjb25zdCBvID0gYXdhaXQgKChlID0gdGhpcy5zYW1XYXNtTW9kdWxlKSA9PSBudWxsID8gdm9pZCAwIDogZS5nZXRJbmZvU3RyaW5nKCkpOwogICAgcmV0dXJuIG8gPT0gbnVsbCA/IHZvaWQgMCA6IG8udHJpbSgpOwogIH0KICAvKgogICAqIEluIFRTIDUuMi4wIHdhcyBhZGRlZCBzcGVjaWFsIGtleXdvcmQgInVzaW5nIiB3aGljaCBjb3VsZCBiZSBwZXJmZWN0IGZvciB0aGlzIGNhc2UuCiAgICogVW5mb3J0dW5hdGVseSwgdml0ZSBwcmVhY3QgcGx1Z2luIGRvZXMgbm90IHN1cHBvcnQgdGhpcyB2ZXJzaW9uIG9mIFRTIHlldC4KICAgKiBDaGVjayBwb3NzaWJpbGl0eSBvZiB1c2luZyAidXNpbmciIGtleXdvcmQgd2hlbiB2aXRlIHByZWFjdCBwbHVnaW4gdXBkYXRlcwogICAqLwogIHdyaXRlSW1hZ2VUb01lbW9yeShvKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IGooIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIGNvbnN0IGUgPSBuZXcgQ2UodGhpcy5zYW1XYXNtTW9kdWxlLCBvKTsKICAgIHJldHVybiBlLndyaXRlRGF0YVRvTWVtb3J5KG8pLCBlOwogIH0KICBjb252ZXJ0VG9TYW1Db2xvckltYWdlKG8sIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgaigiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgY29uc3QgaCA9IHRoaXMud3JpdGVJbWFnZVRvTWVtb3J5KG8pOwogICAgcmV0dXJuIHRoaXMuc2FtV2FzbU1vZHVsZS5jb252ZXJ0VG9TYW1Db2xvckltYWdlKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgaC5yZ2JhSW1hZ2VQb2ludGVyLAogICAgICBfZS5SR0JBLAogICAgICBoLmJncjBJbWFnZVBvaW50ZXIKICAgICksIGg7CiAgfQp9CmNvbnN0IEVlID0gKGEpID0+IE51bWJlci5wYXJzZUZsb2F0KGEudG9GaXhlZCgzKSksIFBlID0gKGEsIG8pID0+IE1hdGgubWluKGEsIG8pOwovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQwogKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMAogKi8KY29uc3QgRHQgPSBTeW1ib2woIkNvbWxpbmsucHJveHkiKSwgT2UgPSBTeW1ib2woIkNvbWxpbmsuZW5kcG9pbnQiKSwgYmUgPSBTeW1ib2woIkNvbWxpbmsucmVsZWFzZVByb3h5IiksIHFuID0gU3ltYm9sKCJDb21saW5rLmZpbmFsaXplciIpLCBJbiA9IFN5bWJvbCgiQ29tbGluay50aHJvd24iKSwgQnQgPSAoYSkgPT4gdHlwZW9mIGEgPT0gIm9iamVjdCIgJiYgYSAhPT0gbnVsbCB8fCB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iLCBTZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBCdChhKSAmJiBhW0R0XSwKICBzZXJpYWxpemUoYSkgewogICAgY29uc3QgeyBwb3J0MTogbywgcG9ydDI6IGUgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgcmV0dXJuIGV0KGEsIG8pLCBbZSwgW2VdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHJldHVybiBhLnN0YXJ0KCksIFJlKGEpOwogIH0KfSwgTWUgPSB7CiAgY2FuSGFuZGxlOiAoYSkgPT4gQnQoYSkgJiYgSW4gaW4gYSwKICBzZXJpYWxpemUoeyB2YWx1ZTogYSB9KSB7CiAgICBsZXQgbzsKICAgIHJldHVybiBhIGluc3RhbmNlb2YgRXJyb3IgPyBvID0gewogICAgICBpc0Vycm9yOiAhMCwKICAgICAgdmFsdWU6IHsKICAgICAgICBtZXNzYWdlOiBhLm1lc3NhZ2UsCiAgICAgICAgbmFtZTogYS5uYW1lLAogICAgICAgIHN0YWNrOiBhLnN0YWNrCiAgICAgIH0KICAgIH0gOiBvID0geyBpc0Vycm9yOiAhMSwgdmFsdWU6IGEgfSwgW28sIFtdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHRocm93IGEuaXNFcnJvciA/IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGEudmFsdWUubWVzc2FnZSksIGEudmFsdWUpIDogYS52YWx1ZTsKICB9Cn0sIHp0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoWwogIFsicHJveHkiLCBTZV0sCiAgWyJ0aHJvdyIsIE1lXQpdKTsKZnVuY3Rpb24gV2UoYSwgbykgewogIGZvciAoY29uc3QgZSBvZiBhKQogICAgaWYgKG8gPT09IGUgfHwgZSA9PT0gIioiIHx8IGUgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZS50ZXN0KG8pKQogICAgICByZXR1cm4gITA7CiAgcmV0dXJuICExOwp9CmZ1bmN0aW9uIGV0KGEsIG8gPSBnbG9iYWxUaGlzLCBlID0gWyIqIl0pIHsKICBvLmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBoKGcpIHsKICAgIGlmICghZyB8fCAhZy5kYXRhKQogICAgICByZXR1cm47CiAgICBpZiAoIVdlKGUsIGcub3JpZ2luKSkgewogICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgb3JpZ2luICcke2cub3JpZ2lufScgZm9yIGNvbWxpbmsgcHJveHlgKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgY29uc3QgeyBpZDogQywgdHlwZTogQSwgcGF0aDogTyB9ID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFtdIH0sIGcuZGF0YSksIGIgPSAoZy5kYXRhLmFyZ3VtZW50TGlzdCB8fCBbXSkubWFwKFEpOwogICAgbGV0IFQ7CiAgICB0cnkgewogICAgICBjb25zdCBfID0gTy5zbGljZSgwLCAtMSkucmVkdWNlKChFLCBNKSA9PiBFW01dLCBhKSwgUyA9IE8ucmVkdWNlKChFLCBNKSA9PiBFW01dLCBhKTsKICAgICAgc3dpdGNoIChBKSB7CiAgICAgICAgY2FzZSAiR0VUIjoKICAgICAgICAgIFQgPSBTOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiU0VUIjoKICAgICAgICAgIF9bTy5zbGljZSgtMSlbMF1dID0gUShnLmRhdGEudmFsdWUpLCBUID0gITA7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJBUFBMWSI6CiAgICAgICAgICBUID0gUy5hcHBseShfLCBiKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkNPTlNUUlVDVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IEUgPSBuZXcgUyguLi5iKTsKICAgICAgICAgICAgVCA9IExlKEUpOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiRU5EUE9JTlQiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCB7IHBvcnQxOiBFLCBwb3J0MjogTSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICAgICAgICAgIGV0KGEsIE0pLCBUID0gamUoRSwgW0VdKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlJFTEVBU0UiOgogICAgICAgICAgVCA9IHZvaWQgMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICByZXR1cm47CiAgICAgIH0KICAgIH0gY2F0Y2ggKF8pIHsKICAgICAgVCA9IHsgdmFsdWU6IF8sIFtJbl06IDAgfTsKICAgIH0KICAgIFByb21pc2UucmVzb2x2ZShUKS5jYXRjaCgoXykgPT4gKHsgdmFsdWU6IF8sIFtJbl06IDAgfSkpLnRoZW4oKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gam4oXyk7CiAgICAgIG8ucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBTKSwgeyBpZDogQyB9KSwgRSksIEEgPT09ICJSRUxFQVNFIiAmJiAoby5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgaCksIFZ0KG8pLCBxbiBpbiBhICYmIHR5cGVvZiBhW3FuXSA9PSAiZnVuY3Rpb24iICYmIGFbcW5dKCkpOwogICAgfSkuY2F0Y2goKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gam4oewogICAgICAgIHZhbHVlOiBuZXcgVHlwZUVycm9yKCJVbnNlcmlhbGl6YWJsZSByZXR1cm4gdmFsdWUiKSwKICAgICAgICBbSW5dOiAwCiAgICAgIH0pOwogICAgICBvLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUyksIHsgaWQ6IEMgfSksIEUpOwogICAgfSk7CiAgfSksIG8uc3RhcnQgJiYgby5zdGFydCgpOwp9CmZ1bmN0aW9uIGtlKGEpIHsKICByZXR1cm4gYS5jb25zdHJ1Y3Rvci5uYW1lID09PSAiTWVzc2FnZVBvcnQiOwp9CmZ1bmN0aW9uIFZ0KGEpIHsKICBrZShhKSAmJiBhLmNsb3NlKCk7Cn0KZnVuY3Rpb24gUmUoYSwgbykgewogIHJldHVybiB0dChhLCBbXSwgbyk7Cn0KZnVuY3Rpb24gUm4oYSkgewogIGlmIChhKQogICAgdGhyb3cgbmV3IEVycm9yKCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGUiKTsKfQpmdW5jdGlvbiBHdChhKSB7CiAgcmV0dXJuIHVuKGEsIHsKICAgIHR5cGU6ICJSRUxFQVNFIgogIH0pLnRoZW4oKCkgPT4gewogICAgVnQoYSk7CiAgfSk7Cn0KY29uc3QgeG4gPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgRm4gPSAiRmluYWxpemF0aW9uUmVnaXN0cnkiIGluIGdsb2JhbFRoaXMgJiYgbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChhKSA9PiB7CiAgY29uc3QgbyA9ICh4bi5nZXQoYSkgfHwgMCkgLSAxOwogIHhuLnNldChhLCBvKSwgbyA9PT0gMCAmJiBHdChhKTsKfSk7CmZ1bmN0aW9uIEllKGEsIG8pIHsKICBjb25zdCBlID0gKHhuLmdldChvKSB8fCAwKSArIDE7CiAgeG4uc2V0KG8sIGUpLCBGbiAmJiBGbi5yZWdpc3RlcihhLCBvLCBhKTsKfQpmdW5jdGlvbiB4ZShhKSB7CiAgRm4gJiYgRm4udW5yZWdpc3RlcihhKTsKfQpmdW5jdGlvbiB0dChhLCBvID0gW10sIGUgPSBmdW5jdGlvbigpIHsKfSkgewogIGxldCBoID0gITE7CiAgY29uc3QgZyA9IG5ldyBQcm94eShlLCB7CiAgICBnZXQoQywgQSkgewogICAgICBpZiAoUm4oaCksIEEgPT09IGJlKQogICAgICAgIHJldHVybiAoKSA9PiB7CiAgICAgICAgICB4ZShnKSwgR3QoYSksIGggPSAhMDsKICAgICAgICB9OwogICAgICBpZiAoQSA9PT0gInRoZW4iKSB7CiAgICAgICAgaWYgKG8ubGVuZ3RoID09PSAwKQogICAgICAgICAgcmV0dXJuIHsgdGhlbjogKCkgPT4gZyB9OwogICAgICAgIGNvbnN0IE8gPSB1bihhLCB7CiAgICAgICAgICB0eXBlOiAiR0VUIiwKICAgICAgICAgIHBhdGg6IG8ubWFwKChiKSA9PiBiLnRvU3RyaW5nKCkpCiAgICAgICAgfSkudGhlbihRKTsKICAgICAgICByZXR1cm4gTy50aGVuLmJpbmQoTyk7CiAgICAgIH0KICAgICAgcmV0dXJuIHR0KGEsIFsuLi5vLCBBXSk7CiAgICB9LAogICAgc2V0KEMsIEEsIE8pIHsKICAgICAgUm4oaCk7CiAgICAgIGNvbnN0IFtiLCBUXSA9IGpuKE8pOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJTRVQiLAogICAgICAgIHBhdGg6IFsuLi5vLCBBXS5tYXAoKF8pID0+IF8udG9TdHJpbmcoKSksCiAgICAgICAgdmFsdWU6IGIKICAgICAgfSwgVCkudGhlbihRKTsKICAgIH0sCiAgICBhcHBseShDLCBBLCBPKSB7CiAgICAgIFJuKGgpOwogICAgICBjb25zdCBiID0gb1tvLmxlbmd0aCAtIDFdOwogICAgICBpZiAoYiA9PT0gT2UpCiAgICAgICAgcmV0dXJuIHVuKGEsIHsKICAgICAgICAgIHR5cGU6ICJFTkRQT0lOVCIKICAgICAgICB9KS50aGVuKFEpOwogICAgICBpZiAoYiA9PT0gImJpbmQiKQogICAgICAgIHJldHVybiB0dChhLCBvLnNsaWNlKDAsIC0xKSk7CiAgICAgIGNvbnN0IFtULCBfXSA9IFV0KE8pOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJBUFBMWSIsCiAgICAgICAgcGF0aDogby5tYXAoKFMpID0+IFMudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIF8pLnRoZW4oUSk7CiAgICB9LAogICAgY29uc3RydWN0KEMsIEEpIHsKICAgICAgUm4oaCk7CiAgICAgIGNvbnN0IFtPLCBiXSA9IFV0KEEpOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJDT05TVFJVQ1QiLAogICAgICAgIHBhdGg6IG8ubWFwKChUKSA9PiBULnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogTwogICAgICB9LCBiKS50aGVuKFEpOwogICAgfQogIH0pOwogIHJldHVybiBJZShnLCBhKSwgZzsKfQpmdW5jdGlvbiBGZShhKSB7CiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGEpOwp9CmZ1bmN0aW9uIFV0KGEpIHsKICBjb25zdCBvID0gYS5tYXAoam4pOwogIHJldHVybiBbby5tYXAoKGUpID0+IGVbMF0pLCBGZShvLm1hcCgoZSkgPT4gZVsxXSkpXTsKfQpjb25zdCBZdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpOwpmdW5jdGlvbiBqZShhLCBvKSB7CiAgcmV0dXJuIFl0LnNldChhLCBvKSwgYTsKfQpmdW5jdGlvbiBMZShhKSB7CiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYSwgeyBbRHRdOiAhMCB9KTsKfQpmdW5jdGlvbiBqbihhKSB7CiAgZm9yIChjb25zdCBbbywgZV0gb2YgenQpCiAgICBpZiAoZS5jYW5IYW5kbGUoYSkpIHsKICAgICAgY29uc3QgW2gsIGddID0gZS5zZXJpYWxpemUoYSk7CiAgICAgIHJldHVybiBbCiAgICAgICAgewogICAgICAgICAgdHlwZTogIkhBTkRMRVIiLAogICAgICAgICAgbmFtZTogbywKICAgICAgICAgIHZhbHVlOiBoCiAgICAgICAgfSwKICAgICAgICBnCiAgICAgIF07CiAgICB9CiAgcmV0dXJuIFsKICAgIHsKICAgICAgdHlwZTogIlJBVyIsCiAgICAgIHZhbHVlOiBhCiAgICB9LAogICAgWXQuZ2V0KGEpIHx8IFtdCiAgXTsKfQpmdW5jdGlvbiBRKGEpIHsKICBzd2l0Y2ggKGEudHlwZSkgewogICAgY2FzZSAiSEFORExFUiI6CiAgICAgIHJldHVybiB6dC5nZXQoYS5uYW1lKS5kZXNlcmlhbGl6ZShhLnZhbHVlKTsKICAgIGNhc2UgIlJBVyI6CiAgICAgIHJldHVybiBhLnZhbHVlOwogIH0KfQpmdW5jdGlvbiB1bihhLCBvLCBlKSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChoKSA9PiB7CiAgICBjb25zdCBnID0gTmUoKTsKICAgIGEuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIEMoQSkgewogICAgICAhQS5kYXRhIHx8ICFBLmRhdGEuaWQgfHwgQS5kYXRhLmlkICE9PSBnIHx8IChhLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBDKSwgaChBLmRhdGEpKTsKICAgIH0pLCBhLnN0YXJ0ICYmIGEuc3RhcnQoKSwgYS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHsgaWQ6IGcgfSwgbyksIGUpOwogIH0pOwp9CmZ1bmN0aW9uIE5lKCkgewogIHJldHVybiBuZXcgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpLnRvU3RyaW5nKDE2KSkuam9pbigiLSIpOwp9CmZ1bmN0aW9uIFp0KGEsIG8pIHsKICByZXR1cm4gTWF0aC5zcXJ0KChhLnggLSBvLngpICoqIDIgKyAoYS55IC0gby55KSAqKiAyKTsKfQpmdW5jdGlvbiBIZShhLCBvKSB7CiAgcmV0dXJuIHsKICAgIHg6IChhLnggKyBvLngpIC8gMiwKICAgIHk6IChhLnkgKyBvLnkpIC8gMgogIH07Cn0KZnVuY3Rpb24gVWUoYSwgbykgewogIGlmIChhLmNvbmZpZGVuY2UgPD0gMCB8fCBvLmNvbmZpZGVuY2UgPD0gMCkKICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTsKICBjb25zdCBlID0gWnQoYS5jZW50ZXIsIG8uY2VudGVyKSwgaCA9IEhlKGEuY2VudGVyLCBvLmNlbnRlcik7CiAgcmV0dXJuIHsKICAgIHg6IGgueCwKICAgIHk6IGgueSArIGUgLyA0CiAgICAvLyBjYWxjdWxhdGlvbiBpcyB0YWtlbiBmcm9tIG1vYmlsZSB0ZWFtCiAgfTsKfQpmdW5jdGlvbiBEZShhLCBvLCBlKSB7CiAgaWYgKGEuY29uZmlkZW5jZSA8PSAwIHx8IG8uY29uZmlkZW5jZSA8PSAwKQogICAgcmV0dXJuIDA7CiAgY29uc3QgaCA9IFp0KGEuY2VudGVyLCBvLmNlbnRlciksIGcgPSBQZShlLndpZHRoLCBlLmhlaWdodCk7CiAgcmV0dXJuIEVlKGggLyBnKTsKfQpmdW5jdGlvbiBudChhKSB7CiAgY29uc3QgeyBjZW50ZXJYOiBvLCBjZW50ZXJZOiBlLCBjb25maWRlbmNlOiBoLCBzaXplOiBnLCBzdGF0dXM6IEMgfSA9IGE7CiAgcmV0dXJuIHsKICAgIGNlbnRlcjogewogICAgICB4OiBvLAogICAgICB5OiBlCiAgICB9LAogICAgY29uZmlkZW5jZTogaCAvIDFlMywKICAgIHN0YXR1czogQyAvIDFlMywKICAgIHNpemU6IGcKICB9Owp9CmNsYXNzIEJlIGV4dGVuZHMgVGUgewogIHBhcnNlUmF3RGF0YShvLCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IGgsIHNoYXJwbmVzczogZyB9ID0gby5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBDLCBib3R0b21SaWdodFk6IEEsIGxlZnRFeWU6IE8sIG1vdXRoOiBiLCByaWdodEV5ZTogVCwgdG9wTGVmdFg6IF8sIHRvcExlZnRZOiBTIH0gPSBvLCBFID0gbnQoTyksIE0gPSBudChUKSwgVSA9IG50KGIpOwogICAgcmV0dXJuIHsKICAgICAgY29uZmlkZW5jZTogby5jb25maWRlbmNlIC8gMWUzLAogICAgICB0b3BMZWZ0OiB7CiAgICAgICAgeDogXywKICAgICAgICB5OiBTCiAgICAgIH0sCiAgICAgIGJvdHRvbVJpZ2h0OiB7CiAgICAgICAgeDogQywKICAgICAgICB5OiBBCiAgICAgIH0sCiAgICAgIGZhY2VDZW50ZXI6IFVlKEUsIE0pLAogICAgICBmYWNlU2l6ZTogRGUoRSwgTSwgZSksCiAgICAgIGxlZnRFeWU6IEUsCiAgICAgIHJpZ2h0RXllOiBNLAogICAgICBtb3V0aDogVSwKICAgICAgYnJpZ2h0bmVzczogaCAvIDFlMywKICAgICAgc2hhcnBuZXNzOiBnIC8gMWUzCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QobywgZSwgaCkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBqKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBnID0gdGhpcy5jb252ZXJ0VG9TYW1Db2xvckltYWdlKG8sIGUpLCBDID0gdGhpcy5zYW1XYXNtTW9kdWxlLmRldGVjdEZhY2VQYXJ0c1dpdGhJbWFnZVBhcmFtZXRlcnMoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLmJncjBJbWFnZVBvaW50ZXIsCiAgICAgIDAsCiAgICAgIDAsCiAgICAgIC8vIHBhcmFtV2lkdGggc2hvdWxkIGJlIDAgKGRlZmF1bHQgdmFsdWUpCiAgICAgIDAKICAgICAgLy8gcGFyYW1IZWlnaHQgc2hvdWxkIGJlIDAgKGRlZmF1bHQgdmFsdWUpCiAgICApOwogICAgcmV0dXJuIGcuZnJlZSgpLCB0aGlzLnBhcnNlUmF3RGF0YShDLCBoKTsKICB9Cn0KZXQoQmUpOwo=", TI = (x) => Uint8Array.from(atob(x), (i) => i.charCodeAt(0)), xs = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", TI(ag)], { type: "text/javascript;charset=utf-8" });
function VI(x) {
  let i;
  try {
    if (i = xs && (window.URL || window.webkitURL).createObjectURL(xs), !i) throw "";
    const t = new Worker(i, {
      type: "module",
      name: x == null ? void 0 : x.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(i);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + ag,
      {
        type: "module",
        name: x == null ? void 0 : x.name
      }
    );
  }
}
class EI extends yI {
  constructor(t, e) {
    super();
    E(this, "className", "FaceImageProcessor");
    E(this, "detector");
    E(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = Yx(t), n = Ql(t, e);
    return super.optimizeImageBeforeDetection(n);
  }
  async process({ image: t, timestamp: e }) {
    const n = this.optimizeImageBeforeDetection(t), o = {};
    o.height = t.height, o.width = t.width;
    let r = await this.detector.detect(n.data, n.resolution, o);
    r = e1(r, Yx(t));
    const a = {};
    return a.detectedObject = r, a.image = t, a.imageData = n.data, a.timestamp = e, this.processDetectedObject(a);
  }
}
var K0, x0, i0;
class LI {
  constructor(i) {
    ne(this, K0);
    ne(this, x0);
    ne(this, i0);
    $(this, K0, i), $(this, x0, /* @__PURE__ */ new Map());
  }
  validate() {
    L(this, K0).forEach((i) => {
      L(this, x0).set(i.name, i.evaluate());
    }), $(this, i0, void (-5558 + -2779 * -2));
  }
  isValid() {
    return L(this, i0) === void (7809 + 1 * 1217 + -9026) && $(this, i0, Array.from(L(this, x0).values()).every((i) => i)), L(this, i0);
  }
  get result() {
    return L(this, x0);
  }
  get validators() {
    return L(this, K0);
  }
}
K0 = new WeakMap(), x0 = new WeakMap(), i0 = new WeakMap();
var vn, o0;
class ze {
  constructor(i, t) {
    ne(this, vn);
    ne(this, o0);
    $(this, vn, i), $(this, o0, t);
  }
  get threshold() {
    return L(this, o0);
  }
  get name() {
    return L(this, vn);
  }
  isValueBelowThreshold(i) {
    return i < L(this, o0);
  }
  isValueAboveThreshold(i) {
    return i > L(this, o0);
  }
}
vn = new WeakMap(), o0 = new WeakMap();
const DI = "isNotDim";
var Wn;
class NI extends ze {
  constructor(t, e) {
    super(DI, t);
    ne(this, Wn);
    $(this, Wn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Wn));
  }
}
Wn = new WeakMap();
const YI = "isNotSmall";
var Sn;
class FI extends ze {
  constructor(t, e) {
    super(YI, t);
    ne(this, Sn);
    $(this, Sn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Sn));
  }
}
Sn = new WeakMap();
const jI = "isNotBright";
var wn;
class XI extends ze {
  constructor(t, e) {
    super(jI, t);
    ne(this, wn);
    $(this, wn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, wn));
  }
}
wn = new WeakMap();
const MI = "isPresent";
var Bn;
class _I extends ze {
  constructor(t, e) {
    super(MI, t);
    ne(this, Bn);
    $(this, Bn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Bn));
  }
}
Bn = new WeakMap();
const JI = "isSharp";
var Gn;
class UI extends ze {
  constructor(t, e) {
    super(JI, t);
    ne(this, Gn);
    $(this, Gn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Gn));
  }
}
Gn = new WeakMap();
const QI = "isLeftEyePresent";
var kn;
class zI extends ze {
  constructor(t, e) {
    super(QI, t);
    ne(this, kn);
    $(this, kn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, kn));
  }
}
kn = new WeakMap();
const qI = "isMouthPresent";
var On;
class $I extends ze {
  constructor(t, e) {
    super(qI, t);
    ne(this, On);
    $(this, On, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, On));
  }
}
On = new WeakMap();
const ef = "isMouthScoreNotTooLow";
var Zn;
class tf extends ze {
  constructor(t, e) {
    super(ef, t);
    ne(this, Zn);
    $(this, Zn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Zn));
  }
}
Zn = new WeakMap();
const nf = "isMouthScoreNotTooHigh";
var Hn;
class xf extends ze {
  constructor(t, e) {
    super(nf, t);
    ne(this, Hn);
    $(this, Hn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, Hn));
  }
}
Hn = new WeakMap();
const of = "isNotLarge";
var Rn;
class rf extends ze {
  constructor(t, e) {
    super(of, t);
    ne(this, Rn);
    $(this, Rn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, Rn));
  }
}
Rn = new WeakMap();
const af = "isNotPitched";
var Kn;
const mr = class mr extends ze {
  constructor(t, e) {
    super(af, mr.calculatePitchAngleAccelerationThreshold(t));
    ne(this, Kn);
    $(this, Kn, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return Il * Math.sin(t * (Math.PI / (9961 * 1 + -1 * 4162 + -5619)));
  }
  evaluate() {
    const { z: t } = L(this, Kn) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
Kn = new WeakMap();
let Eo = mr;
const sf = "isRightEyePresent";
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
const gf = "isNotOutOfBounds";
var Tn, r0;
class df extends ze {
  constructor(t, e, n) {
    super(gf, t);
    ne(this, Tn);
    ne(this, r0);
    $(this, Tn, e), $(this, r0, n);
  }
  evaluate() {
    const t = Gc(L(this, r0), this.threshold, Yx(L(this, r0))), e = kc(L(this, Tn), L(this, r0));
    return $l(e, t);
  }
}
Tn = new WeakMap(), r0 = new WeakMap();
class uf {
  static getFaceValidationInstance(i, t, e, n) {
    return new LI([new _I(i.faceConfidence, t.confidence), new zI(i.leftEye.confidence, t.leftEye.confidence), new cf(i.rightEye.confidence, t.rightEye.confidence), new FI(i.minFaceSizeRatio, t.faceSize), new rf(i.maxFaceSizeRatio, t.faceSize), new UI(i.sharpnessThreshold, t.sharpness), new NI(i.brightnessLowThreshold, t.brightness), new XI(i.brightnessHighThreshold, t.brightness), new df(i.outOfBoundsThreshold, t, e), new Eo(i.devicePitchAngleThreshold, n), new $I(i.mouth.confidence, t.mouth.confidence), new xf(i.mouth.status.max, t.mouth.status), new tf(i.mouth.status.min, t.mouth.status)]);
  }
}
class lf extends vI {
  constructor() {
    super(...arguments);
    E(this, "className", "FaceValidationService");
    E(this, "acceleration", null);
  }
  validateDetectedObject(t, e) {
    const n = uf.getFaceValidationInstance(this.getThresholds(), t, e, this.acceleration);
    return n.validate(), n;
  }
}
const ri = class ri extends AI {
  constructor(t, e, n, o) {
    super(n, o);
    E(this, "detector");
    E(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  static async createInstance(t) {
    const e = new VI(), n = ig(e), o = await new n(), r = new lf(), a = new EI(o, r), s = new ri(o, r, a, t);
    this._instance = s;
  }
  static async getInstance(t) {
    return !this._instance && await this.createInstance(t), this._instance;
  }
  stopDetectionLoop() {
    var t;
    super.stopDetectionLoop(), Oc(Ht.INSTRUCTION_CHANGED, (t = this.detection) == null ? void 0 : t["fallbackInstruction"], Gl);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
};
E(ri, "_instance");
let Lo = ri;
const If = () => {
  const { handleError: x } = Nn(), { acceleration: i } = S1(), { thresholds: t, wasmDirectoryPath: e } = sr(), [n, o] = Ue();
  Ie(() => {
    (async () => {
      const s = await Lo.getInstance(e);
      try {
        await s.init(), o(s);
      } catch (c) {
        if (c instanceof Error) {
          x(oe.fromError(c));
          return;
        }
      }
    })();
  }, [x, e]), Ie(() => {
    n && n.setThresholds(t);
  }, [n, t]), Ie(() => {
    n && n.setAcceleration(i);
  }, [i, n]);
  const r = {};
  return r.controller = n, r;
};
function ff({ onPhotoTakenInternal: x }) {
  const { cameraFacing: i, captureMode: t, onPhotoTaken: e, sessionToken: n } = sr(), { controller: o } = If(), r = Kt(({ candidateSelectionImages: c, imageData: d, protoMessage: g, webMetadata: C }) => {
    f1(Cc.FACE, c), e(d, g);
    const u = {};
    u.cameraProperties = C, x == null || x(u);
  }, [x, e]), a = Kt(({ fps: c, processedImage: d }, g) => {
    Oc(Ht.INSTRUCTION_CHANGED, d.instructionCode), o && l1(Ht.DETECTED_FACE_CHANGED, d.detection, o.imageProcessor.validationService.getThresholds().faceConfidence);
    const C = {};
    C.detection = d.detection, C.fps = c, C.image = g, C.isInCandidateSelection = d.isInCandidateSelection, C.invalidValidators = d.invalidValidators, I1(Ht.FACE_DETECTION, C);
  }, [o]), s = {};
  return s.captureMode = t, s.cameraFacing = i, s.controller = o, s.createProtoMessage = bI, s.onCapture = r, s.onDetection = a, s.sessionToken = n, s.customEvent = Ht, s.fallbackInstruction = be.FACE_NOT_PRESENT, s.instructionCodeMap = be, s.checkToInstructionCodeMap = Fu, F1(s);
}
const Cf = ({ onPhotoTakenInternal: x }) => {
  const { sunfish: i } = Yn(), { cameraResolution: t, detectionDetails: e, shouldCameraMirror: n, videoRef: o } = ff({
    onPhotoTakenInternal: x
  });
  return /* @__PURE__ */ O(it, { children: /* @__PURE__ */ O(
    c1,
    {
      cameraResolution: t,
      detectionDetails: e,
      shouldMirror: n,
      children: /* @__PURE__ */ O(
        Eu,
        {
          ref: o,
          $isImageMirror: n,
          $isVisible: i,
          autoPlay: !0,
          id: kl,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}, pf = ({ onPhotoTakenInternal: x, ...i }) => /* @__PURE__ */ O(Sl, { cameraOptions: i, children: /* @__PURE__ */ O(Cf, { onPhotoTakenInternal: x }) });
function hf({ initAppState: x, onError: i }) {
  const [t, e] = Ue(x), [n, o] = Ue(), [r, a] = Ue(!1), s = yt(i);
  Ie(() => {
    s.current = i;
  }, [i]);
  const c = {};
  return c.appState = t, c.setAppState = e, c.error = n, c.setError = o, c.isCameraReady = r, c.setIsCameraReady = a, c.onErrorRef = s, c;
}
function mf({ onError: x }) {
  const { appState: i, error: t, isCameraReady: e, onErrorRef: n, setAppState: o, setError: r, setIsCameraReady: a } = hf({
    initAppState: Je.LOADING,
    onError: x
  }), s = V1(i), c = Kt(
    (g) => {
      La(Ht.STATE_CHANGED, { appState: Je.ERROR, error: g }), a(!1), n.current(g), r(g), o(Je.ERROR);
    },
    [a, n, r, o]
  ), d = Kt(
    (g) => {
      La(Ht.STATE_CHANGED, { appState: g }), o(g);
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
var sg = ((x) => (x.AUTO_CAPTURE = "auto-capture", x.LONG_CAPTURE_SMILE = "long-capture-smile", x))(sg || {});
class bf {
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
    const a = sx(r);
    await fetch("" + o + a + "&" + i, n);
  }
  async init(i, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = i;
    const e = { _app_version: Sc() }, n = { organization: wc(window.location.href) }, o = sx({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(o);
  }
  async endSession() {
    const i = {};
    i.end_session = "1";
    const t = sx(i);
    await this.countlyFetch(t);
  }
  async sendEvent(i, t, e) {
    const n = {};
    n.key = i, n.count = 1, n.dur = e, n.segmentation = t;
    const o = [n], r = sx({ events: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
  async sendAutoCaptureEvent(i, t) {
    await this.sendEvent(sg.AUTO_CAPTURE, i, t);
  }
}
const dx = new bf();
class Af {
  constructor() {
    E(this, "countly", dx);
  }
  createSegmentation(i) {
    return { appVersion: Sc(), ...i };
  }
  init(i) {
    if (jl()) return;
    const t = H1();
    dx.init(t, i);
  }
  endSession() {
    dx.endSession();
  }
  walleye(i, t) {
    const e = {};
    e.nocturne = i, e.customer = t;
    const n = this.createSegmentation(e);
    dx.sendAutoCaptureEvent(n);
  }
}
class yf extends Af {
  trackCaptureProcess({ averageFps: i, captureProcessDurationInMs: t, detection: e, deviceName: n, facingMode: o, imageResolution: r, instructionSet: a }) {
    if (!e) return;
    const s = P1(t), c = this.createSegmentation({ faceSize: Na(e.faceSize), confidence: Na(e.confidence), camera: R1(n, o), imageResolution: r.width + "x" + r.height, averageFps: T1(i), captureTime: K1(s), instructionSet: a });
    this.countly.sendAutoCaptureEvent(c, s);
  }
}
const vf = new yf();
let j;
const Ot = new Array(-90 + 2 * 109).fill(void 0);
Ot.push(void 0, null, !0, !1);
function Do(x) {
  return Ot[x];
}
let bt = -53 * 40 + -1 * 6583 + 8703 * 1, gn = null;
function Gx() {
  return (gn === null || gn.byteLength === 461 * -1 + 4812 * -2 + 10085) && (gn = new Uint8Array(j.memory.buffer)), gn;
}
const kx = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Wf = typeof kx.encodeInto == "function" ? function(x, i) {
  return kx.encodeInto(x, i);
} : function(x, i) {
  const t = kx.encode(x);
  i.set(t);
  const e = {};
  return e.read = x.length, e.written = t.length, e;
};
function An(x, i, t) {
  if (t === void 0) {
    const a = kx.encode(x), s = i(a.length, 4598 + 1 * -363 + -29 * 146) >>> -23 * -173 + -1434 * -2 + -6847;
    return Gx().subarray(s, s + a.length).set(a), bt = a.length, s;
  }
  let e = x.length, n = i(e, -1 * -8479 + 3166 + 82 * -142) >>> -32 * 257 + -12 * -764 + -944 * 1;
  const o = Gx();
  let r = 6365 + -19 * 335;
  for (; r < e; r++) {
    const a = x.charCodeAt(r);
    if (a > -9437 + -167 * -16 + 4 * 1723) break;
    o[n + r] = a;
  }
  if (r !== e) {
    r !== -287 * -13 + -1 * 4391 + 660 && (x = x.slice(r)), n = t(n, e, e = r + x.length * (-4125 + -409 * 10 + 1 * 8218), 1) >>> -31 * -21 + 86 * 83 + 7789 * -1;
    const a = Gx().subarray(n + r, n + e), s = Wf(x, a);
    r += s.written, n = t(n, e, r, -11604 + 1 * 11605) >>> 4046 + 4 * -922 + -1 * 358;
  }
  return bt = r, n;
}
function cg(x) {
  return x == null;
}
let dn = null;
function ht() {
  return (dn === null || dn.byteLength === 2 * -1408 + -284 * 11 + 6 * 990) && (dn = new Int32Array(j.memory.buffer)), dn;
}
let pn = Ot.length;
function Sf(x) {
  x < 2 * 351 + -4394 + 1 * 3824 || (Ot[x] = pn, pn = x);
}
function gg(x) {
  const i = Do(x);
  return Sf(x), i;
}
const No = {};
No.ignoreBOM = !0, No.fatal = !0;
const dg = typeof TextDecoder < "u" ? new TextDecoder("utf-8", No) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && dg.decode();
function ei(x, i) {
  return x = x >>> -1381 + -8941 * -1 + -63 * 120, dg.decode(Gx().subarray(x, x + i));
}
function Yo(x) {
  pn === Ot.length && Ot.push(Ot.length + (-73 * -107 + 4 * -1187 + -3062));
  const i = pn;
  return pn = Ot[i], Ot[i] = x, i;
}
let un = null;
function ug() {
  return (un === null || un.byteLength === -8382 + 79 * -89 + 15413) && (un = new Uint32Array(j.memory.buffer)), un;
}
function is(x, i) {
  const t = i(x.length * 4, 4) >>> 0, e = ug();
  for (let n = 3165 + -3989 * -1 + -14 * 511; n < x.length; n++)
    e[t / (-110 * -20 + -6633 + 9 * 493) + n] = Yo(x[n]);
  return bt = x.length, t;
}
function os(x, i) {
  x = x >>> -4 * -1418 + -6143 * -1 + -2363 * 5;
  const t = ug(), e = t.subarray(x / (-9904 + -7547 * 1 + 17455), x / (-6897 + -3 * 1883 + 12550) + i), n = [];
  for (let o = -2618 + 119 * 22; o < e.length; o++)
    n.push(gg(e[o]));
  return n;
}
function wf(x, i) {
  const t = An(x, j.__wbindgen_malloc, j.__wbindgen_realloc), e = bt, n = An(i, j.__wbindgen_malloc, j.__wbindgen_realloc), o = bt, r = j.is_mobile_supported(t, e, n, o);
  return hr.__wrap(r);
}
const Fo = {};
Fo.register = () => {
}, Fo.unregister = () => {
};
const rs = typeof FinalizationRegistry > "u" ? Fo : new FinalizationRegistry((x) => j.__wbg_licensevalidationresult_free(x >>> 0));
class hr {
  static __wrap(i) {
    i = i >>> -4385 + 1544 * -1 + 5929;
    const t = Object.create(hr.prototype);
    return t.__wbg_ptr = i, rs.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const i = this.__wbg_ptr;
    return this.__wbg_ptr = -8401 + 1 * 8401, rs.unregister(this), i;
  }
  free() {
    const i = this.__destroy_into_raw();
    j.__wbg_licensevalidationresult_free(i);
  }
  constructor(i, t, e, n, o) {
    var r = cg(t) ? 0 : An(t, j.__wbindgen_malloc, j.__wbindgen_realloc), a = bt;
    const s = is(e, j.__wbindgen_malloc), c = bt, d = is(n, j.__wbindgen_malloc), g = bt, C = An(o, j.__wbindgen_malloc, j.__wbindgen_realloc), u = bt, p = j.licensevalidationresult_new(i, r, a, s, c, d, g, C, u);
    return this.__wbg_ptr = p >>> 1 * 158 + -7583 + 7425, this;
  }
  get is_valid() {
    return j.licensevalidationresult_is_valid(this.__wbg_ptr) !== -23 * 399 + -6895 + 16072;
  }
  get features_json() {
    try {
      const e = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var i = ht()[e / (659 + 1819 * 1 + -2474) + (8130 + 1626 * -5)], t = ht()[e / (1028 + -2451 * -1 + 5 * -695) + (20 + -1433 * -6 + 1231 * -7)];
      let n;
      return i !== -77 * -43 + 6184 + 1899 * -5 && (n = ei(i, t).slice(), j.__wbindgen_free(i, t * (174 * -51 + -2639 + 11514), 1 * -2447 + 1110 * 7 + -1 * 5322)), n;
    } finally {
      j.__wbindgen_add_to_stack_pointer(3 * -1676 + -1690 + -481 * -14);
    }
  }
  get errors() {
    try {
      const n = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_errors(n, this.__wbg_ptr);
      var i = ht()[n / (-5 * -127 + -4862 + 4231) + (-6581 + 3 * -1211 + 10214)], t = ht()[n / (-3 * 2633 + -499 * 11 + 13392) + (-1081 * 1 + -878 * 2 + 43 * 66)], e = os(i, t).slice();
      return j.__wbindgen_free(i, t * 4, 7089 * 1 + -1011 * -3 + -10118), e;
    } finally {
      j.__wbindgen_add_to_stack_pointer(-8 * -817 + 1955 + -8475);
    }
  }
  get warnings() {
    try {
      const n = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var i = ht()[n / (1728 + -1 * 1724) + (-7132 + 5279 * -1 + 1 * 12411)], t = ht()[n / (-964 * -2 + -453 * -16 + 9172 * -1) + (-354 * 24 + -1 * 337 + 8834)], e = os(i, t).slice();
      return j.__wbindgen_free(i, t * (-6 * -185 + -411 + -695 * 1), 9141 + -4152 * -2 + -17441), e;
    } finally {
      j.__wbindgen_add_to_stack_pointer(8016 + 387 * -23 + 901);
    }
  }
  get customer() {
    let i, t;
    try {
      const o = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = ht()[o / (-12382 + -563 * -22) + (62 * -66 + 4986 + -894)], n = ht()[o / (-90 * -5 + -10 * -795 + -8396) + (-6264 + -1 * 2237 + 8502)];
      return i = e, t = n, ei(e, n);
    } finally {
      j.__wbindgen_add_to_stack_pointer(-1655 + 2514 * 3 + -3 * 1957), j.__wbindgen_free(i, t, -5099 * -1 + 4702 + 280 * -35);
    }
  }
}
async function Bf(x, i) {
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
function Gf() {
  const x = {};
  return x.wbg = {}, x.wbg.__wbindgen_string_get = function(i, t) {
    const e = Do(t), n = typeof e == "string" ? e : void 0;
    var o = cg(n) ? 2791 * 2 + -1 * 2273 + 1 * -3309 : An(n, j.__wbindgen_malloc, j.__wbindgen_realloc), r = bt;
    ht()[i / (-6671 + 7299 * 1 + 52 * -12) + (5342 + -9787 * -1 + -15128)] = r, ht()[i / (-4401 + -3 * -1611 + 107 * -4) + (11081 + 7 * -1583)] = o;
  }, x.wbg.__wbindgen_object_drop_ref = function(i) {
    gg(i);
  }, x.wbg.__wbindgen_string_new = function(i, t) {
    const e = ei(i, t);
    return Yo(e);
  }, x.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Yo(/* @__PURE__ */ new Date());
  }, x.wbg.__wbg_getTime_2bc4375165f02d15 = function(i) {
    return Do(i).getTime();
  }, x.wbg.__wbindgen_throw = function(i, t) {
    throw new Error(ei(i, t));
  }, x;
}
function kf(x, i) {
  return j = x.exports, lg.__wbindgen_wasm_module = i, dn = null, un = null, gn = null, j;
}
async function lg(x) {
  if (j !== void 0) return j;
  typeof x > "u" && (x = new URL("dot_embedded_bg.wasm", import.meta.url));
  const i = Gf();
  (typeof x == "string" || typeof Request == "function" && x instanceof Request || typeof URL == "function" && x instanceof URL) && (x = fetch(x));
  const { instance: t, module: e } = await Bf(await x, i);
  return kf(t, e);
}
(function(x, i) {
  function t(a, s, c, d, g) {
    return Oe(c - 148, d);
  }
  function e(a, s, c, d, g) {
    return Oe(s - 130, d);
  }
  function n(a, s, c, d, g) {
    return Oe(c - -942, g);
  }
  function o(a, s, c, d, g) {
    return Oe(a - -564, c);
  }
  const r = x();
  for (; ; )
    try {
      if (parseInt(e(323, 327, 338, "YPO$", 314)) / 1 * (-parseInt(t(282, 330, 303, "9Tc&", 307)) / 2) + parseInt(e(279, 290, 272, "[Xc]", 319)) / 3 * (-parseInt(e(286, 273, 254, "[Xc]", 298)) / 4) + parseInt(n(-784, -812, -796, -820, "9Tc&")) / 5 * (parseInt(n(-784, -789, -783, -755, "kS5i")) / 6) + parseInt(n(-794, -752, -780, -765, "^D@#")) / 7 * (-parseInt(o(-373, -394, "qT2t", -391, -386)) / 8) + -parseInt(e(272, 286, 307, "^D@#", 306)) / 9 * (parseInt(t(313, 306, 316, "YPO$", 313)) / 10) + parseInt(t(326, 307, 333, "R*!W", 333)) / 11 + parseInt(e(336, 309, 284, "TJEx", 284)) / 12 === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ti, 1 * -879989 + 862232 + 693635 * 1);
function Oe(x, i) {
  const t = ti();
  return Oe = function(e, n) {
    e = e - (2 * -473 + 6802 + -5716);
    let o = t[e];
    if (Oe.HtCjJP === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Oe.JKewMc = d, x = arguments, Oe.HtCjJP = !0;
    }
    const a = t[-637 + -49 * -13], s = e + a, c = x[s];
    return c ? o = c : (Oe.XbOQmY === void 0 && (Oe.XbOQmY = !0), o = Oe.JKewMc(o, n), x[s] = o), o;
  }, Oe(x, i);
}
function Qi(x, i, t, e, n) {
  return Oe(x - 223, n);
}
function Of(x, i, t, e, n) {
  return Oe(n - 778, e);
}
function on(x, i, t, e, n) {
  return Oe(x - -871, i);
}
function ux(x, i, t, e, n) {
  return Oe(x - -897, t);
}
function ti() {
  const x = ["mIhcPcnGymkIWQS5BmoYlSo7", "f8o0p8kuiY3dPHe", "WPH1WQ0BWQG", "yIZcQSodW5BcTmkSW5pcUCkgphJcSa", "W4/dGSkSWRpdKSkXvCkC", "WPNcH8oMDGS", "fCoNomoTW5G", "W5j4smo/W4O", "ECoUWP3cT8k0", "egj4WPy/", "WOVcGSk0oXi", "WO/cKSo8DcW", "WPdcLCkvWPpdNa", "cSkEWObFW5K", "W6NdRSkQCf8CWOj8W6ZdTmo4WOdcRKS", "WRBcS8oUlqS", "W7imFMC0", "WOlcJ8oVFIy", "W50LiCkzWRS", "W5ucW4TfAW", "W4hdH8k8WR3dK8kft8ohW4rdiCoXWPy", "WOf7xaBcQa", "W4CMW47dJ1dcKSkfW755v0dcJty", "vvRdOMns", "i8k8W4dcPa0", "W4ZdGmorW47cHSo6lCoShhLVgmksFG", "WPVdRNZcJSkbhmoY", "WQ/cU8oPksm", "W4hdKq4IWPu", "hYGWWOrDW6qOW7ipWOddOCo2WOK", "c8kjbXdcSa", "W47cGmo6Awi", "zIJcRmokW5ddHmo3W7RcLCkVmG", "a8oZDCkcW44", "smkVa8kPga", "F2/dUSkiWOW", "WPP6WOhcKWi", "WP3cPttcQgi", "ah3cPtCNW7RcIg3cLSkHymoPaa", "W4u0yvm", "AwVdKSklWPVdG8oj", "WPaqtCkFmmodnvqnoSkrWQfa", "WPTQpXBcLYGko0azaW", "C8oLtConpG", "r8o8e14B", "nxFdR8kKWOq", "g1VdH20", "vSouqKhdPSkafqdcQaPYA0y", "rdCqW4rRW442uxddOXirWRO", "W5lcGmkTBCojW6ZcPqS", "WPatmCoGzCkkrhq", "W5/dNSoXyZxcHGhcIG", "WQpcVmoQWP9C", "rcxdTwbL", "WP9iW7VcQSk/aaPU", "aI/dILzbWOFdVq", "WRGpW7VcJN0", "W5/dL8kIk3hdV1VcT8oJW73dQxrF", "WPpdQtfWha", "WQldJsVdJHhcQmk/"];
  return ti = function() {
    return x;
  }, ti();
}
function as(x, i, t, e, n) {
  return Oe(x - 356, n);
}
var cs;
class Zf {
  constructor() {
    E(this, cs, !1);
  }
  async [(cs = ux(-726, -752, "tn(!") + on(-691, "TJEx") + ux(-736, -752, "vVnT"), on(-727, "2v&b"))](i = on(-708, "0@H!")) {
    function t(a, s, c, d, g) {
      return on(s - 1212, a);
    }
    function e(a, s, c, d, g) {
      return Qi(s - 157, s - 96, c - 55, d - 8, c);
    }
    function n(a, s, c, d, g) {
      return as(a - -283, s - 363, c - 152, d - 299, d);
    }
    function o(a, s, c, d, g) {
      return on(c - -105, s);
    }
    function r(a, s, c, d, g) {
      return Of(a - 148, s - 366, c - 310, g, a - -942);
    }
    try {
      const a = i + "/" + vl;
      await lg(a), this[r(6, -4, 24, -22, "^D@#") + r(-16, 1, -18, 1, "!akX") + e(597, 578, "s7h2", 572, 601)] = !0;
    } catch {
      this[o(-761, "TJEx", -784) + r(31, 14, 30, 34, "RofJ") + r(-23, -31, -22, 3, ")MWm")] = !1, console[t("Z0RL", 492)](e(546, 530, "YPO$", 521) + o(-821, "SoDw", -792) + o(-831, "Hb0l", -802) + n(213, 243, 231, "YPO$") + o(-798, "h2#D", -787) + n(251, 257, 264, "BTo8") + n(256, 231, 286, "t@E[") + t("8fPt", 508) + t("^D@#", 516) + n(215, 224, 209, "Kj$r") + e(532, 537, "wPuj", 548) + n(246, 268, 240, "Lze^") + t("[Xc]", 499) + o(-790, "^D@#", -800) + n(269, 267, 257, "^D@#") + t("1cdv", 527) + o(-809, "j*GV", -788) + n(250, 274, 262, "Eyya") + "n.");
    }
  }
  [ux(-716, -705, "kHZE") + ux(-725, -722, "2BNj") + Qi(372, 399, 387, 381, "OtT(") + "ed"]() {
    function i(e, n, o, r, a) {
      return Qi(a - -12, n - 127, o - 85, r - 425, o);
    }
    function t(e, n, o, r, a) {
      return as(o - -287, n - 63, o - 221, r - 457, r);
    }
    return this[t(247, 283, 262, "fRSx") + i(408, 389, "Y9qK", 437, 410) + i(388, 373, "^D@#", 416, 393)];
  }
}
class zi extends Error {
  constructor() {
    super(...arguments);
    E(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function B0(x, i, t, e, n) {
  return ue(e - -155, n);
}
function G0(x, i, t, e, n) {
  return ue(i - -833, e);
}
function qi(x, i, t, e, n) {
  return ue(i - 871, t);
}
function lx(x, i, t, e, n) {
  return ue(t - -809, e);
}
function ue(x, i) {
  var t = ni();
  return ue = function(e, n) {
    e = e - (-8083 + -8327 * -1);
    var o = t[e];
    if (ue.AKrKKx === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", b = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (var K = 0, X = u.length; K < X; K++)
          p += "%" + ("00" + u.charCodeAt(K).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, C) {
        var u = [], p = 0, b, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (var W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      ue.sfCUsB = a, x = arguments, ue.AKrKKx = !0;
    }
    var s = t[14 * 641 + 1 * -1838 + -223 * 32], c = e + s, d = x[c];
    return d ? o = d : (ue.XRqYWV === void 0 && (ue.XRqYWV = !0), o = ue.sfCUsB(o, n), x[c] = o), o;
  }, ue(x, i);
}
function ni() {
  var x = ["W7hdTmoZrCoE", "Fmo5WONdP8oEhCohWQtdLmoMsvZdRq", "yYdcGflcTG", "DCotDwe5W61yW6e4nSkgsq", "W7NdTSoH", "iWvFW6NdLq", "W5qkWOWtWRG", "BSo8W5y3vW", "W7ThWQS", "WQFdJSoasmow", "WQDFduRdPLJdUmoovw8", "W5pcQmkTW4ddTW", "WQqqW6SkxGddICkNW5XuiNpdHt0", "zSoEt8kpWO0", "W4rLzqdcOq", "WQOwWPBcIWS", "qCodWQe", "W6DECmo+W5nUWOddISo+j8kv", "W5VcP8oDWQTV", "kSkivaRdPW", "DSouCwy5W6HdW6GLpmk2ua", "WOToW79eWPBdN8kaWOq+W7q", "W43cRCoA", "WR3dQv7cNgO", "FSovbXtdUmo8amkfba", "txtdQg8", "k8khnJbP", "wNjfWRi", "W7vqWRzoha", "WRjxccldVG4lEsa", "W77dSmoNWRdcNa", "W6hdUmoH", "WPVcN8kub1RdVSo1WOnIa8oena", "imkJW6H5WPC", "W6nMxmoZWQ1uW5NcQHG", "kLtdG8kUW7NdUeZcN8oFA3yy", "W7ODW6v7gq", "W55HCa/cNq", "W6jyDCo9W5i6WPtdH8oWpCk+W5i", "W5D8WPhdVCkKxYe", "gmkCW6FcRmoDWOldU8k6W5e", "WRWgj8kEWPe", "FSonW4WWwq", "WRDbbG", "e27cHxyZW7lcVSoZWP3dUvXyW7mE", "WRrnWP7cU8ky", "uCkQgvez", "jCk0W6z+WPe", "WQhdOmoyDSo9wGu", "o8kZiSoAWPS", "W4JcPSk3", "sc/dQdDJ", "pCkPW4ZcPmkl", "k8kWW7nPWOW", "dsWtW6pdGxNdKaFdKCo0ysC", "WPjIWRu", "W43cRCoAWQnG", "WOLmhCkmvaFdVsWHd8oJW7NcTG", "W6fdWQTtbG", "imkKW7r+WOS", "WONdVmoRWPFcR3Snlmo2W4ah", "sfldR8o9fa", "jmkMW5NcK8kh"];
  return ni = function() {
    return x;
  }, ni();
}
(function(x, i) {
  function t(s, c, d, g, C) {
    return ue(s - -515, c);
  }
  var e = x();
  function n(s, c, d, g, C) {
    return ue(g - -156, s);
  }
  function o(s, c, d, g, C) {
    return ue(C - 257, d);
  }
  function r(s, c, d, g, C) {
    return ue(C - -780, d);
  }
  for (; ; )
    try {
      var a = -parseInt(r(-536, -530, "hTDH", -497, -528)) / 1 + -parseInt(t(-225, "]Yor", -206, -232, -228)) / 2 * (parseInt(t(-244, "AXha", -251, -227, -265)) / 3) + -parseInt(r(-494, -529, "Zlf!", -542, -522)) / 4 * (parseInt(t(-220, "KRPP", -248, -193, -231)) / 5) + parseInt(n("rX^w", 70, 88, 90, 71)) / 6 * (parseInt(o(544, 567, "![nx", 579, 553)) / 7) + -parseInt(n("Rng6", 136, 118, 137, 146)) / 8 + parseInt(n("RXLc", 129, 75, 99, 95)) / 9 + parseInt(n("VJ^f", 100, 115, 117, 114)) / 10;
      if (a === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ni, -919921 * 1 + -35919 * 6 + 41105 * 41);
function Ix(x, i, t, e, n) {
  return ue(e - -718, x);
}
var P0, Vn;
class ss {
  constructor(i) {
    ne(this, P0);
    ne(this, Vn);
    this[r(-671, -664, -631, -662, "V6kV") + n(212, 262, 232, "V6kV")] = i;
    function t(a, s, c, d, g) {
      return ue(s - 88, a);
    }
    function e(a, s, c, d, g) {
      return ue(a - -905, s);
    }
    function n(a, s, c, d, g) {
      return ue(c - -19, d);
    }
    function o(a, s, c, d, g) {
      return ue(s - -467, g);
    }
    function r(a, s, c, d, g) {
      return ue(d - -956, g);
    }
    try {
      $(this, P0, i[o(-239, -222, -191, -233, "V6kV") + t("KM4j", 342, 360, 353, 341) + t("f8IP", 341, 340, 335, 370)] && JSON[n(230, 234, 231, "^$)^", 247)](i[r(-652, -704, -705, -676, "yK6u") + e(-639, "vt#v", -648, -640, -633) + e(-657, "Zlf!", -645, -642, -655)])), $(this, Vn, i[t("(Ws9", 356, 356, 360, 369) + n(241, 230, 250, "VJ^f", 272)]);
    } catch (a) {
      console[n(255, 269, 267, "I)GI")](a);
    }
  }
  get [B0(141, 147, 111, 121, "!4ca") + "id"]() {
    function i(n, o, r, a, s) {
      return B0(n - 98, o - 257, r - 196, r - 1151, s);
    }
    function t(n, o, r, a, s) {
      return B0(n - 108, o - 123, r - 137, a - 264, o);
    }
    function e(n, o, r, a, s) {
      return B0(n - 345, o - 269, r - 285, n - 309, r);
    }
    return this[e(428, 404, "C!oq") + t(421, "PThO", 384, 396)][e(403, 401, "WSnN") + i(1308, 1298, 1288, 1280, "wXr7")];
  }
  get [G0(-547, -527, -541, "9UcU") + "s"]() {
    function i(e, n, o, r, a) {
      return B0(e - 457, n - 252, o - 446, e - 1102, r);
    }
    function t(e, n, o, r, a) {
      return B0(e - 12, n - 465, o - 180, r - 26, e);
    }
    return this[i(1236, 1211, 1222, "VJ^f") + t("Zlf!", 150, 137, 143)][t("^8py", 153, 151, 134) + "s"];
  }
  get [G0(-580, -549, -573, "qC]m") + qi(1117, 1148, "z#6R")]() {
    function i(e, n, o, r, a) {
      return Ix(e, n - 170, o - 1, n - 353);
    }
    function t(e, n, o, r, a) {
      return G0(e - 393, o - 1554, o - 204, r);
    }
    return this[t(981, 971, 991, "9h3w") + t(1006, 1034, 1019, "^blS")][t(976, 996, 977, "VJ^f") + i("rX^w", -100, -124)];
  }
  get [Ix("KM4j", -457, -427, -439) + "b"]() {
    return L(this, P0);
  }
  get [qi(1108, 1128, "V6kV") + G0(-528, -529, -530, "b1dq")]() {
    return L(this, Vn);
  }
  get [lx(-530, -518, -542, "gbvB") + G0(-550, -536, -515, "0uw%") + qi(1151, 1174, "(Ws9") + Ix("hTDH", -438, -422, -430)]() {
    var r, a;
    function i(s, c, d, g, C) {
      return lx(s - 291, c - 243, s - 1447, c);
    }
    function t(s, c, d, g, C) {
      return Ix(C, c - 199, d - 77, g - 1590);
    }
    function e(s, c, d, g, C) {
      return lx(s - 246, c - 403, g - 1679, C);
    }
    function n(s, c, d, g, C) {
      return G0(s - 458, c - 1746, d - 413, C);
    }
    function o(s, c, d, g, C) {
      return lx(s - 198, c - 418, d - 1080, g);
    }
    return !!((a = (r = L(this, P0)) == null ? void 0 : r[e(1125, 1140, 1106, 1131, "rX^w") + e(1171, 1134, 1173, 1153, "KM4j")]) != null && a[e(1153, 1167, 1147, 1145, "^blS") + o(570, 548, 573, "I3ri") + n(1161, 1157, 1174, 1126, "Wekl") + o(528, 508, 530, "]SJr") + i(885, "q]%*") + n(1141, 1173, 1184, 1153, "^$)^") + t(1133, 1135, 1143, 1163, "wXr7") + "d"]);
  }
}
P0 = new WeakMap(), Vn = new WeakMap();
function xi() {
  const x = ["iMpcP03dKa", "zfOZxgS", "dmk2ehrt", "pGreWO3cHq", "dwlcVxai", "uSk6WPzwna", "jSoIWQldHGG", "mmkWW6TJBa", "WRNcV8ksebm", "BCkMjHZcHH4ZrwrOd0JdOG", "iCo3W7dcGeS", "WR3dSCoc", "W5ybx3lcKW", "WQqPW5PVW4e", "W6eWbSkBW6q", "WPpdM1SgW4S", "i8kAv8kcoq", "wLaN", "WP/dN0KeW5y", "W49tW4vvWOa", "qCo/WR7cH0m", "WRdcPmkdgG8", "E8oYqmoLW7W", "tCkBvSkJW6K", "wCkPWO1glW", "FfldJZG", "W5qhvCoOAG", "WPrpfJ7cNG", "W67dIw3dIXW", "mCkjv8kdiG", "WRRcLSoYwCkKWOxcTw3dLxXLW77cJq", "WQyRW5tdLfi", "oCkXW79dtG", "FvpcVXqu", "WQXZxSk7iq", "W6HoW6uzW5q", "CCoKECo3W6O", "qfxdHmo5lW", "vu0VwNq", "WQfPqq", "l2JcPe7cOG", "yar4W7FcJW", "C8oTE8oxW6O", "eCkjv8kdiG", "DuZdJxS", "bSkuvW", "W4CNgSkhW7m", "nSoGW7hcSfm", "W6xdISkLdSo9", "v3ddIrGQ", "A0pdLMe", "bmkAv8kFnq", "WRCxWRjnWOj7FHmSAmkqhmkgkW", "DSoUy8obW6i", "W7BdUgD/WRe", "FCk5WR5jkW", "W5BdN3DyW4i", "WQVdRmoEW5z4", "WPRcVSoaW5bP", "cLFdQSkVW5e", "WOqPW5D1W4u", "hI56WPJcMq", "BMGFyCot", "FCkbWOLvlq", "WQLmjZ4", "mvNdUCkLW7q", "dNJcOeJdUG", "q2NdPCobbW", "W6RcJXtcSG4", "W6/dMxC", "vuNdMmoQzG", "WP5tjCowWR4", "W6FdKxfBWOy", "kSkXew9o", "Amonhmkko3VcSSo/kSka", "dCkiW6vtW67dHNddImk6W6L2Aq", "o8k5W6S", "oCkXW78", "hmkAuCkpoa", "W7hcMIRcTqq", "BeRdJa", "rZxcSMWr", "oCkQW5rVxW", "ySoZFSoQW7S", "q8oTWQdcJCop", "jSoKWQBdPHq", "Fmo+jSosWPbDiCoYWRRcItyUWRW", "iqz+WQa", "W6tdIwS", "iCkSq0rZ", "W59+W7fUWPG", "hSkHW77dMHiWa3DHcmkl", "W6LcW7q", "W6RdKCkPgmoG", "xSogWPFcUCor", "WRfJnXpcVa", "WPy2WP47W44", "f8oDW5FdV20", "W7tcMaVcMdW", "m8kvxCoBoW", "D8oZzCoRW70", "wCorWP7cQ8ox", "pM7cPvm", "WQL7vG", "WQaPW59/W5e", "W4KJhCkA", "lXv4WR3cPW", "WRxcIc1mwq", "WQaUW4ZdSvC", "WQ5PeZJcHG", "ph/cO1pcSW", "nSoIwuhdLG", "W6xdHwpdRq0", "Aa4SqW", "gCkEvW", "E1CKW7RdPZ0pxSoVWRJcSSo5uW", "m8o3EuhdJW", "W6ldR8kWj8oI", "gmksrSkjpG", "WQ1apSon", "W4bFW5vvWPC", "WQqJW7bUW5i", "DxBcIJKl", "jqrYWQdcPW", "WODcbZpdKffFW4CDqmo2Fmke", "WQToW6msW50", "W5yTbG", "l2JcOLBcVW", "zh4ClSok", "W4WwFmkDW7tcV8oDW497W7X0bq", "omkIew5v", "lGjZWQRcSq", "W5abqM7cKG", "WPDfcmk3jNP/W7OioupdGttdNW", "uSocWOxcU8om", "ymoUzq", "omoZCuZdKa", "BhiE", "wCkvsSk5W7i", "BSoAsmkKW6m", "WRywWRfoWOP9Ce8Vq8kafSkM", "WQFdSCoc", "W6DsW7uiW5u", "kSkLyCkfWOC", "B8kTFCkvW4K", "pSkAwSoDCW", "w8kxtmkpnq", "xehdKJ7dVa", "W4OTamouW78", "zNqXoSoz", "mmoGW6ZcRfi", "WQDHqwWL", "WQPGqx0B", "W7/dGSkQaSo3", "aXJdPCkKW6K", "WQbGqmk9kq", "x8kVWOO", "umk8WPfw", "W6lcNJZdTq", "sSorWPJcTSoq", "y2Kvpmom", "i8oLWQFdJa", "ASoahCkaye3cI8oGkSksW4m", "WQFdSmofW40", "WR0mW4RcOW", "WQBdV8oyW5PI", "AajVW5FcJa", "geD7WQFcTW", "qSk8WPziiG", "xe7dKCoQiG", "WQWhW6LYW54", "pCo7W7FcTKa", "WQWRW4G", "sLZdIrxdQq", "Amo0WP/cV8o9", "v1W0", "jazJWQ3cVa", "yH8Sqgq", "W6vtW6mWW5m", "WR4qW5ZcO8o2", "WQ5nnxhcHq", "sNtcQgan", "WRtcNZLcxG", "zSkPWOPizW", "pgJcOLpcPq", "WQfwksi", "oh/cUwZcVW", "Aqe+t8oZ", "dCkMb2rz", "i8kICCkfW4K", "ASoTWQ7dLGG", "zuJdI1hdIq", "W47dI2ZdRJ4", "z34oc8oq", "WQ3dRmodW4P5", "D3BcNtue", "rMldQZxdQG", "W4D0W5GPW4dcImk8W71x", "WRlcNZThtG", "l8oLWRldHKy", "tW9QAmou", "W5iwre3cIq", "W4GCx8oJCa", "zN4olmox", "WQTRvhK+", "pSkgw8oxiq", "EWXPW7W", "xCk8WRvmja", "ymopDSoPW6O", "Aa4VaSo3", "W4JcLhJcNYi", "WRZcPCkUaXW", "vSktr8kOW64", "i2hcTKddIW", "obNcTNZdVW", "WQ8nW47dUeS", "at1fWRBcNG", "WPddJXmQnq", "W4PFW4nAWOC", "cKZdH8kIW74", "WP7dIWy9ka", "WRdcI0LzWPBdTv85", "WQhcOSkDebK", "wfGZ", "vCkrWQHYnG", "BX90W6hcKG", "WOVdGqK", "WRLri8o2WQ4", "e3pcRKxcUa", "DmoUzCobW64", "f8kEs8kFnq", "u1eZtfC", "nNhcTfhcPa", "WRJcLmoYx8kJW7JdMgJdN2j2", "A07dMNVdLq", "AwGLoCoE", "W4GTeW", "wCkFsSk+W6u", "zKJdMZS", "W6FdG23cQaa", "lCo3z0BdNa", "tNZcV2yl", "i8k/W7rVwa", "W67dHSkYl8o8", "smoAWQSF", "j2/cPwBdKq", "mCkXW6Xduq", "c8kwWRZcTmoqWRq0WRy", "xColWRSy", "jSoIWRVdHGi", "WQydW5pdKW", "lGtcM0ldOW", "WPhdNtaOlG", "W7f1WO4PW5W+W6pcKCk+W7K", "WPKSWOWRW60", "WQldJ1WqW4G", "lGZcOv7dVW", "WRNdQM4gW5m", "ywNdQsJdGG", "WQvmmJtcVa", "oSkzta", "W7NdNNddPH0", "WOrhbdNdKYmxW7mWymod", "wSoqWQeUWRy", "WO4LW5H+W5O", "frZcLfZdUG", "DCoKy8oiW6y", "W7b7WO59W5ugW4hcNSk/", "W4ZdLhVdOZa"];
  return xi = function() {
    return x;
  }, xi();
}
function ct(x, i, t, e, n) {
  return ve(t - -508, i);
}
function We(x, i, t, e, n) {
  return ve(e - 489, x);
}
function gt(x, i, t, e, n) {
  return ve(x - 800, i);
}
function ve(x, i) {
  const t = xi();
  return ve = function(e, n) {
    e = e - (1 * -6991 + -3881 + -2227 * -5);
    let o = t[e];
    if (ve.UJsUhR === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, W = 0; l = g.charAt(W++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let W = 0; W < g.length; W++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      ve.FbQRTq = d, x = arguments, ve.UJsUhR = !0;
    }
    const a = t[4644 + -9281 * -1 + -13925], s = e + a, c = x[s];
    return c ? o = c : (ve.HihJPM === void 0 && (ve.HihJPM = !0), o = ve.FbQRTq(o, n), x[s] = o), o;
  }, ve(x, i);
}
(function(x, i) {
  function t(a, s, c, d, g) {
    return ve(s - 244, d);
  }
  function e(a, s, c, d, g) {
    return ve(d - 87, s);
  }
  const n = x();
  function o(a, s, c, d, g) {
    return ve(d - 598, c);
  }
  function r(a, s, c, d, g) {
    return ve(g - -357, c);
  }
  for (; ; )
    try {
      if (-parseInt(e(279, "YK1a", 472, 353, 329)) / 1 * (parseInt(e(397, "Yr9L", 571, 530, 557)) / 2) + -parseInt(t(675, 698, 718, "y@80", 771)) / 3 + parseInt(t(595, 522, 641, "7anH", 466)) / 4 * (parseInt(t(431, 556, 480, "DfpA", 567)) / 5) + -parseInt(o(983, 1003, "lVuw", 921, 830)) / 6 + parseInt(r(-169, -109, "wXMX", -39, -50)) / 7 * (parseInt(t(642, 632, 710, "WF1I", 684)) / 8) + -parseInt(o(1088, 1018, "a@rm", 998, 1017)) / 9 + parseInt(e(582, "y@80", 346, 453, 390)) / 10 === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(xi, -641383 * 1 + -137271 + 77137 * 19);
function he(x, i, t, e, n) {
  return ve(i - -461, e);
}
function He(x, i, t, e, n) {
  return ve(n - 687, t);
}
var gs, ds, us;
class Hf {
  constructor(i) {
    E(this, us);
    E(this, ds, [He(1146, 1252, "y@80", 1178, 1126) + he(152, 62, -33, "(YSr") + "ic", ct(-82, "s^UN", -48) + he(-26, -85, -131, "@3iq") + "ic"]);
    E(this, gs);
    function t(e, n, o, r, a) {
      return ve(n - -608, e);
    }
    this[t("oyr0", -241) + t("lVuw", -158) + "d"] = i;
  }
  async [(us = We("GP%x", 1080, 1077, 1005) + "se", ds = he(65, 35, -60, "8J[S") + gt(1064, "xSCm") + he(-74, -185, -137, "BnCR") + We("%&wl", 1016, 1021, 988), gs = gt(1264, "#Uqg") + he(-37, 34, 18, "lKjN"), He(1196, 1262, "mMkB", 1258, 1164))](i = he(-239, -143, -49, "lKjN"), t) {
    const e = await this[n(295, 303, 386, 387, "oyr0") + n(622, 409, 547, 500, "B@YL") + o("Yr9L", 626, 632)](t);
    function n(c, d, g, C, u) {
      return he(c - 141, C - 537, g - 310, u);
    }
    function o(c, d, g, C, u) {
      return We(c, d - 32, g - 300, g - -290);
    }
    await Promise[n(343, 528, 471, 432, "oyr0") + a(93, "KvsN", 159, 26)]([this[r(670, 578, "UIZ(", 670) + o("8J[S", 685, 711) + "d"][r(474, 685, "zDzW", 554)](i), this[s(-160, -43, 71, "xSCm") + s(-261, -137, -120, "zDzW") + "e"](e)]);
    function r(c, d, g, C, u) {
      return ct(c - 487, g, C - 698);
    }
    function a(c, d, g, C, u) {
      return He(c - 161, d - 175, d, C - 150, C - -928);
    }
    function s(c, d, g, C, u) {
      return ct(c - 267, C, d - 92);
    }
    this[r(380, 493, "9KpO", 477) + s(65, 112, 193, "k4p3") + r(364, 583, "aSu*", 472)]();
  }
  async [We("@3iq", 1113, 992, 1006) + ct(-112, "DfpA", -199) + "se"](i) {
    function t(a, s, c, d, g) {
      return He(a - 196, s - 239, d, d - 61, c - -538);
    }
    function e(a, s, c, d, g) {
      return He(a - 211, s - 153, a, d - 477, c - 12);
    }
    function n(a, s, c, d, g) {
      return he(a - 111, a - 917, c - 344, g);
    }
    function o(a, s, c, d, g) {
      return He(a - 316, s - 23, d, d - 44, g - 109);
    }
    function r(a, s, c, d, g) {
      return We(a, s - 177, c - 185, s - 4);
    }
    try {
      if (r("jPE[", 905, 824, 898, 913) === o(1085, 1065, 1021, "LTO#", 1113)) {
        const a = await fetch(i);
        if (!a.ok) {
          if (r("yzl6", 862, 774, 843, 907) === r("k4p3", 803, 874, 847, 719)) throw new Error(t(622, 586, 659, "zDzW", 670) + t(557, 473, 586, "LTO#", 656) + o(1313, 1192, 1286, "xSCm", 1264) + n(960, 960, 950, 919, "#v@Q") + "d.");
          {
            _0x25a05e instanceof _0x14167d ? _0xd9c227[r("S[oH", 774, 871, 765, 749)]() : _0x54b363 instanceof _0x40a43d && _0x3c54ea[t(407, 385, 484, "KvsN", 593)](_0x3962ea);
            const s = {};
            s[r("KvsN", 1018, 941, 928, 1139) + e("22VY", 982, 1116, 1194, 1188)] = !1, s[n(870, 783, 976, 833, "oyr0") + "s"] = [], s[t(620, 356, 486, "aSu*", 447) + e("DfpA", 1110, 1185, 1284, 1152)] = [], s[n(783, 860, 748, 847, "DfpA") + n(780, 696, 801, 860, "#Uqg") + t(541, 369, 474, "mMkB", 436)] = void (-9 * 1027 + 557 + 8686), s[n(934, 1028, 965, 871, "zXZ0")] = function() {
            }, s[o(1269, 1211, 1296, "y@80", 1252) + t(508, 468, 551, "qehw", 660)] = "", this[e("UIZ(", 1078, 969, 1089, 988) + o(1161, 1310, 1157, "s^UN", 1188)] = new _0x4b7836(s);
          }
        }
        this[r("aSu*", 1019, 994, 1054, 1077) + "se"] = await a[t(452, 524, 438, "tGET", 569)]();
      } else throw new _0x49a29c(o(1103, 1095, 1073, "#Uqg", 1207) + n(789, 736, 843, 680, "AhEv") + e("lKjN", 1121, 1094, 1055, 1192) + r("a@rm", 951, 851, 852, 961) + "d.");
    } catch (a) {
      if (r("qehw", 999, 954) !== r("%&wl", 902, 928)) this[o(1249, 1099, 1077, "y@80", 1145) + "se"] = void (9627 + 479 * -7 + -6274), console[r("WF1I", 1012, 1015)](a);
      else return this[t(614, 705, 667, "7JED") + e("yzl6", 1166, 1220, 1110) + t(569, 650, 642, "zXZ0") + r("yzl6", 964, 882)][4810 + 429 * 19 + 13 * -997];
    }
  }
  async [he(-118, -162, -147, "zym$") + We("7YH^", 794, 804, 803) + "e"](i) {
    this[r(301, 277, "mMkB") + o(642, 716, 516, "gAFM")] = void (-2962 * -2 + -64 * 51 + -19 * 140);
    function t(a, s, c, d, g) {
      return gt(c - -178, g);
    }
    function e(a, s, c, d, g) {
      return he(a - 346, s - 739, c - 448, a);
    }
    if (!i)
      if (o(685, 699, 684, "LTO#") !== n("gAFM", 193, 122, 165)) {
        console[o(785, 905, 862, "#v@Q")](t(905, 1086, 985, 1045, "g0J^") + n("mMkB", 263, 285, 374) + o(694, 676, 571, "Gx%]") + e("B@YL", 719, 768) + n("zDzW", 174, 93, 251)), this[n("y@80", 240, 238, 177) + "se"] = void (-2125 + -22 * 11 + 3 * 789);
        return;
      } else return _0x272c80;
    function n(a, s, c, d, g) {
      return He(a - 358, s - 299, a, d - 228, s - -796);
    }
    function o(a, s, c, d, g) {
      return We(d, s - 260, c - 217, a - -179);
    }
    function r(a, s, c, d, g) {
      return gt(s - -1031, c);
    }
    await this[o(827, 850, 702, "@3iq") + o(583, 642, 606, "B@YL") + "se"](i);
  }
  async [ct(28, "B@YL", -8) + We("s^UN", 674, 857, 764) + He(906, 1055, "dYB]", 1016, 1026)](i) {
    if (i) {
      if (t(869, "qehw", 839) === o("7YH^", 1211, 1115, 1187)) return i;
      this[a(1165, 1137, 1121, "9KpO", 1057) + a(1107, 1231, 1063, "DfpA", 1184) + "d"] = _0xb8cce2;
    }
    function t(s, c, d, g, C) {
      return gt(d - -274, c);
    }
    function e(s, c, d, g, C) {
      return We(s, c - 432, d - 458, g - -1222);
    }
    function n(s, c, d, g, C) {
      return he(s - 90, g - 247, d - 490, c);
    }
    function o(s, c, d, g, C) {
      return We(s, c - 387, d - 136, g - 318);
    }
    const r = await fetch(this[t(948, "@3iq", 968) + a(1234, 1240, 1122, "jPE[", 1148) + t(782, "%&wl", 830) + t(805, "tGET", 819)][-1985 + -1 * -1985]);
    function a(s, c, d, g, C) {
      return gt(C - -34, g);
    }
    if (r.ok) {
      if (n(277, "AhEv", 61, 190) === t(957, "gxmC", 924)) return this[t(887, "gAFM", 855) + n(281, "lVuw", 343, 211) + e("7JED", -198, -319, -267) + e("B@YL", -438, -330, -317)][8557 + 1273 * 2 + -11103];
      _0x453cd6[a(1134, 1104, 1161, "#Uqg", 1127)](_0x2772bc);
    }
    return this[a(1132, 1289, 1055, "gxmC", 1174) + a(1043, 1257, 1206, "9KpO", 1162) + a(962, 1113, 1130, "9KpO", 1087) + t(903, "B@YL", 942)][2970 + 1 * -7853 + 4884];
  }
  [He(1247, 1205, "dYB]", 1253, 1148) + He(933, 1122, "S[oH", 1093, 1015) + "s"](i) {
    function t(n, o, r, a, s) {
      return ct(n - 301, r, s - -333);
    }
    function e(n, o, r, a, s) {
      return ct(n - 451, a, s - 470);
    }
    i[t(-584, -470, "tGET", -536, -533) + "ch"]((n) => console[e(432, 369, 599, "UIZ(", 482)](n));
  }
  [ct(-132, "qehw", -202) + He(910, 1144, "s^UN", 1092, 1017) + We("BnCR", 642, 643, 757)](i) {
    function t(e, n, o, r, a) {
      return He(e - 341, n - 363, n, r - 104, o - -331);
    }
    i[t(547, "oyr0", 630, 744) + "ch"]((e) => console[t(765, "%&wl", 734, 821)](e));
  }
  [gt(1088, "7anH") + We("@iOS", 805, 729, 784)]() {
    function i(n, o, r, a, s) {
      return We(o, o - 2, r - 176, n - -575);
    }
    function t(n, o, r, a, s) {
      return We(r, o - 229, r - 164, n - 381);
    }
    function e(n, o, r, a, s) {
      return He(n - 92, o - 112, n, a - 122, a - -1017);
    }
    return window[i(177, "AhEv", 309) + i(369, "mMkB", 401)][e("7JED", 248, 41, 135) + t(1175, 1057, "WF1I")];
  }
  [We("7anH", 955, 933, 956) + He(1098, 1057, "y@80", 1155, 1179) + He(1168, 1128, "oyr0", 1043, 1037)]() {
    function i(r, a, s, c, d) {
      return ct(r - 43, c, a - 75);
    }
    function t(r, a, s, c, d) {
      return he(r - 98, r - 1409, s - 321, a);
    }
    function e(r, a, s, c, d) {
      return he(r - 429, c - -423, s - 142, r);
    }
    function n(r, a, s, c, d) {
      return ct(r - 338, a, d - -392);
    }
    function o(r, a, s, c, d) {
      return he(r - 446, r - -527, s - 2, a);
    }
    try {
      if (i(-162, -161, -251, "Yr9L", -221) === e("gxmC", -295, -493, -396, -360)) return this[t(1355, "7anH", 1436, 1260, 1446) + o(-656, "gAFM", -661, -730, -571)];
      if (!this[i(-103, -111, -167, "KvsN", 19) + "se"])
        if (e("g0J^", -630, -497, -537, -575) === e("Gx%]", -380, -558, -503, -507)) {
          _0x532205[o(-561, "(YSr", -556, -446, -432)](t(1351, "Sfc]", 1457, 1411, 1358) + i(74, 48, 154, "LTO#", -30) + o(-531, "a@rm", -490, -458, -470) + i(-92, -82, -164, "Gx%]", -61) + o(-516, "jPE[", -512, -568, -538)), this[n(-717, "lKjN", -561, -652, -614) + "se"] = void (29 * 147 + 4414 + 8677 * -1);
          return;
        } else throw new zi(n(-469, "jPE[", -412, -331, -376) + i(80, 20, -4, "aSu*", -104) + i(-65, 26, -94, "WF1I", -62) + i(47, -47, 42, "YK1a", -71) + ".");
      if (!this[e("@iOS", -378, -273, -355, -458) + n(-319, "Sfc]", -449, -390, -398) + "d"][e("oyr0", -586, -681, -548, -678) + n(-470, "@iOS", -504, -596, -555) + i(-108, -85, -52, "22VY", -199) + "ed"]())
        if (o(-458, "LTO#", -543, -406, -447) !== t(1251, "dYB]", 1230, 1294, 1256)) _0x5afd4a[o(-657, "BnCR", -610, -774, -612)]();
        else throw new zi(o(-618, "YK1a", -558, -669, -581) + t(1442, "%&wl", 1323, 1570, 1519) + n(-313, "g0J^", -353, -366, -391) + i(-69, -7, 34, "qehw", -33) + ".");
      this[i(-50, 65, 47, "B@YL", 43) + o(-487, "(YSr", -388, -562, -412)] = new ss(wf(this[n(-645, "7anH", -606, -593, -538) + "se"], this[t(1453, "zDzW", 1557, 1339, 1336) + o(-569, "S[oH", -484, -610, -669)]())), this[o(-591, "oyr0", -518, -609, -480) + e("Sfc]", -532, -413, -497, -456) + "s"](this[i(-56, -107, -190, "wXMX", -129) + o(-457, "&$#K", -507, -499, -339)][n(-324, "wXMX", -373, -426, -454) + "s"]), this[i(-39, -93, -219, "GP%x", -123) + o(-609, "xSCm", -634, -736, -662) + o(-605, "YK1a", -548, -555, -481)](this[t(1267, "yzl6", 1150, 1382, 1394) + n(-524, "mMkB", -408, -449, -421)][o(-595, "jPE[", -470, -698, -667) + i(57, -43, 25, "9KpO", -176)]);
    } catch (r) {
      if (t(1244, "k4p3", 1119) === i(-131, -65, -62, "YK1a")) _0x113a0c[t(1435, "dYB]", 1470) + "ch"]((a) => _0x41684d[o(-630, "zDzW", -636)](a));
      else {
        r instanceof zi ? t(1325, "yzl6", 1353) !== n(-756, "yzl6", -554, -657, -631) ? r[o(-597, "9KpO", -591)]() : (this[t(1451, "a@rm", 1388) + "se"] = void (-1682 * -2 + -7543 + 4179), _0x243a7e[e("8J[S", -358, -564, -463)](_0x34d97e)) : r instanceof Error && (i(88, -2, 4, "7anH") !== e("@iOS", -373, -370, -462) ? _0x850c7d[e("#v@Q", -442, -404, -485) + i(-92, 7, -76, "S[oH")](_0x2a909b) : console[i(47, -62, 24, "mMkB")](r));
        const a = {};
        a[t(1228, "@3iq", 1325) + t(1399, "@3iq", 1502)] = !1, a[i(-95, -76, -113, "s^UN") + "s"] = [], a[t(1233, "lVuw", 1281) + t(1301, "7JED", 1287)] = [], a[t(1213, "&$#K", 1107) + o(-664, "#Uqg", -536) + t(1219, "&$#K", 1271)] = void (152 * 32 + 3 * 2948 + -3427 * 4), a[i(-22, 45, -65, "zXZ0")] = function() {
        }, a[i(-32, -23, 89, "zym$") + i(10, -5, 128, "s^UN")] = "", this[e("BnCR", -622, -571, -532) + o(-461, "7YH^", -361)] = new ss(a);
      }
    }
  }
  [he(108, 54, 186, "wXMX") + gt(1160, "S[oH") + We("BnCR", 808, 774, 804) + "t"]() {
    function i(e, n, o, r, a) {
      return he(e - 176, a - 561, o - 48, o);
    }
    function t(e, n, o, r, a) {
      return gt(r - -1162, e);
    }
    return this[t("LTO#", 45, -28, 58) + i(661, 595, "LTO#", 717, 590)];
  }
  [he(-183, -119, -244, "qehw") + We("yzl6", 951, 850, 971) + he(-54, 61, -9, "oyr0")]() {
    var r;
    function i(a, s, c, d, g) {
      return gt(c - -476, a);
    }
    function t(a, s, c, d, g) {
      return gt(g - -108, d);
    }
    function e(a, s, c, d, g) {
      return He(a - 125, s - 205, g, d - 310, d - 114);
    }
    function n(a, s, c, d, g) {
      return he(a - 294, g - 342, c - 355, s);
    }
    if (!this[t(1194, 1229, 1131, "g0J^", 1128) + "se"])
      return o(-575, "%&wl") !== t(977, 1057, 978, "DfpA", 1066), void 0;
    function o(a, s, c, d, g) {
      return ct(a - 405, s, a - -408);
    }
    try {
      if (e(1188, 1142, 1248, 1224, "%&wl") !== i("DfpA", 933, 808, 897, 889)) {
        if (!this[e(1166, 1223, 1133, 1121, "#v@Q") + "se"]) throw new _0x36b5f5(n(338, "(YSr", 319, 308, 395) + t(1131, 1277, 1200, "BnCR", 1183) + i("#v@Q", 739, 837, 927, 841) + n(273, "AhEv", 350, 374, 315) + ".");
        if (!this[t(1194, 1261, 1148, "@iOS", 1221) + e(1253, 1354, 1372, 1246, "LTO#") + "d"][i("&$#K", 550, 621, 522, 579) + t(1101, 1088, 1160, "@iOS", 1037) + t(1116, 1122, 1183, "lVuw", 1122) + "ed"]()) throw new _0x40706f(n(458, "yzl6", 250, 286, 378) + o(-632, "qehw", -690, -762, -555) + e(1359, 1255, 1239, 1286, "#Uqg") + o(-433, "Gx%]", -448, -554, -360) + ".");
        this[e(1386, 1363, 1193, 1275, "@3iq") + t(1007, 1199, 1027, "WF1I", 1105)] = new _0x373b0d(_0x1b58b6(this[e(1171, 1243, 1078, 1156, "UIZ(") + "se"], this[n(446, "@3iq", 276, 259, 388) + n(297, "LTO#", 284, 170, 282)]())), this[o(-443, "gxmC", -351, -454, -435) + e(1172, 1200, 1226, 1144, "s^UN") + "s"](this[n(265, "Yr9L", 344, 267, 266) + e(1054, 1155, 1061, 1139, "yzl6")][n(312, "22VY", 261, 472, 350) + "s"]), this[i("B@YL", 707, 678, 613, 570) + o(-472, "Sfc]", -418, -514, -518) + n(283, "zDzW", 296, 309, 275)](this[e(1126, 1135, 1262, 1216, "gxmC") + e(1170, 1347, 1308, 1249, "gxmC")][t(878, 1041, 908, "k4p3", 993) + t(1272, 1154, 1063, "yzl6", 1162)]);
      } else {
        const a = JSON[o(-551, "s^UN", -643, -538, -523)](this[n(328, "s^UN", 323, 443, 313) + "se"]);
        return (r = a == null ? void 0 : a[i("aSu*", 899, 776, 810, 822) + i("BnCR", 871, 813, 838, 890)]) == null ? void 0 : r[n(69, "Sfc]", 105, 158, 197) + o(-510, "y@80", -576, -530, -386)];
      }
    } catch (a) {
      if (e(1231, 1136, 1236, 1264, "@3iq") !== e(1292, 1128, 1128, 1236, "DfpA")) throw new _0x214d07(n(127, "YK1a", 265, 123, 251) + e(1397, 1396, 1180, 1263, "S[oH") + i("XxDF", 618, 658) + e(1170, 1221, 1212, 1095, "#v@Q") + ".");
      if (a instanceof Error)
        if (i("gAFM", 738, 624) !== i("B@YL", 652, 601)) oe[i("9KpO", 792, 670) + t(930, 1182, 1100, "s^UN", 1051)](a);
        else {
          _0x3e6a6b instanceof _0x57456d && _0x150d68[t(868, 888, 915, "7YH^", 982) + t(1147, 1036, 1248, "oyr0", 1141)](_0x2a8c97);
          return;
        }
      return;
    }
  }
}
const ai = class ai extends Hf {
  static getInstance() {
    if (!this._instance) {
      const i = new Zf();
      this._instance = new ai(i);
    }
    return this._instance;
  }
};
E(ai, "_instance");
let jo = ai;
const Rf = ({ children: x }) => {
  const i = yt(null);
  return v1(i, Ht.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ O(Vu, { ref: i, children: x });
}, Kf = ({ cameraOptions: x }) => x ? /* @__PURE__ */ O(Ou, { target: x.styleTarget, children: /* @__PURE__ */ O(
  tl,
  {
    licensePath: x.licensePath,
    bramble: jo.getInstance(),
    wasmDirectoryPath: x.wasmDirectoryPath,
    children: /* @__PURE__ */ O(il, { analytics: vf, appKey: "5f83e83ee4cee1ab6e5bbf86e215644473299675", children: /* @__PURE__ */ O(
      Xu,
      {
        value: mf({
          onError: x.onError
        }),
        children: /* @__PURE__ */ O(fc, { children: /* @__PURE__ */ O(Rf, { children: /* @__PURE__ */ O(pf, { ...x }) }) })
      }
    ) })
  }
) }) : null;
Ng(Kf, "x-dot-face-auto-capture", ["cameraOptions"]);
