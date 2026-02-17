var io, R, jg, qg, ze, xa, Vg, Zg, zg, Ur, Li, Oi, Xg, to = {}, $g = [], AI = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ro = Array.isArray;
function Ce(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function Yr(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function NA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > -1153 + 1 * -3221 + 4376 && (r.children = arguments.length > -37 * -269 + 3401 + 1027 * -13 ? io.call(arguments, 7136 + 422 * 3 + -8400) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] === void 0 && (r[o] = i.defaultProps[o]);
  return zt(i, r, e, A, null);
}
function zt(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++jg, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && R.vnode != null && R.vnode(r), r;
}
function eI() {
  var i = {};
  return i.current = null, i;
}
function KA(i) {
  return i.children;
}
function XA(i, n) {
  this.props = i, this.context = n;
}
function pt(i, n) {
  if (n == null) return i.__ ? pt(i.__, i.__i + (-2129 * -1 + -1219 + -909)) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? pt(i) : null;
}
function A0(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = 5 * 631 + -6388 + 3233; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return A0(i);
  }
}
function Ji(i) {
  (!i.__d && (i.__d = !0) && ze.push(i) && !Xo.__r++ || xa != R.debounceRendering) && ((xa = R.debounceRendering) || Vg)(Xo);
}
function Xo() {
  for (var i, n, t, e, A, o, r, a = 1; ze.length; ) ze.length > a && ze.sort(Zg), i = ze.shift(), a = ze.length, i.__d && (t = void 0, e = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = Ce({}, e)).__v = e.__v + (6754 * 1 + -4871 + -1 * 1882), R.vnode && R.vnode(t), Tr(n.__P, t, e, n.__n, n.__P.namespaceURI, 8032 + 2 * -4e3 & e.__u ? [A] : null, o, A ?? pt(e), !!(2674 + -3 * 3327 + 7339 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, o0(o, t, r), e.__e = e.__ = null, t.__e != A && A0(t)));
  Xo.__r = -6131 + 4473 * -2 + 1 * 15077;
}
function e0(i, n, t, e, A, o, r, a, g, c, I) {
  var s, Q, x, E, C, l, f, h = e && e.__k || $g, p = n.length;
  for (g = tI(t, n, h, g, p), s = 4313 * 1 + 7093 + -11406; s < p; s++) (x = t.__k[s]) != null && (Q = x.__i == -1 ? to : h[x.__i] || to, x.__i = s, l = Tr(i, x, Q, A, o, r, a, g, c, I), E = x.__e, x.ref && Q.ref != x.ref && (Q.ref && Pr(Q.ref, null, x), I.push(x.ref, x.__c || E, x)), C == null && E != null && (C = E), (f = !!(4 & x.__u)) || Q.__k === x.__k ? g = t0(x, g, i, f) : typeof x.type == "function" && l !== void 0 ? g = l : E && (g = E.nextSibling), x.__u &= -7);
  return t.__e = C, g;
}
function tI(i, n, t, e, A) {
  var o, r, a, g, c, I = t.length, s = I, Q = 5730 + 776 * -2 + -4178;
  for (i.__k = new Array(A), o = -639 * -9 + -797 * -7 + 5665 * -2; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? r = i.__k[o] = zt(null, r, null, null, null) : ro(r) ? r = i.__k[o] = zt(KA, { children: r }, null, null, null) : r.constructor == null && r.__b > 0 ? r = i.__k[o] = zt(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : i.__k[o] = r, g = o + Q, r.__ = i, r.__b = i.__b + (1 * -434 + -2 * -581 + 727 * -1), a = null, (c = r.__i = oI(r, t, g, s)) != -1 && (s--, (a = t[c]) && (a.__u |= 2203 + -2201 * 1)), a == null || a.__v == null ? (c == -1 && (A > I ? Q-- : A < I && Q++), typeof r.type != "function" && (r.__u |= 4)) : c != g && (c == g - (-8669 + -2 * 2998 + -7333 * -2) ? Q-- : c == g + (-295 * -1 + -6011 + -1 * -5717) ? Q++ : (c > g ? Q-- : Q++, r.__u |= -3772 + -1 * -3776))) : i.__k[o] = null;
  if (s)
    for (o = 1 * -1019 + -2713 * 1 + 1244 * 3; o < I; o++) (a = t[o]) != null && -204 + -3 * -2467 + -7197 == (3889 * -1 + 2636 + 1255 & a.__u) && (a.__e == e && (e = pt(a)), i0(a, a));
  return e;
}
function t0(i, n, t, e) {
  var A, o;
  if (typeof i.type == "function") {
    for (A = i.__k, o = -9152 + -2616 * 3 + -8 * -2125; A && o < A.length; o++) A[o] && (A[o].__ = i, n = t0(A[o], n, t, e));
    return n;
  }
  i.__e != n && (e && (n && i.type && !n.parentNode && (n = pt(i)), t.insertBefore(i.__e, n || null)), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && n.nodeType == 8);
  return n;
}
function we(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || (ro(i) ? i.some(function(t) {
    we(t, n);
  }) : n.push(i)), n;
}
function oI(i, n, t, e) {
  var A, o, r, a = i.key, g = i.type, c = n[t], I = c != null && 4762 + -1 * -2179 + -6941 == (-3294 * -3 + -1585 + -8295 & c.__u);
  if (c === null && a == null || I && a == c.key && g == c.type) return t;
  if (e > (I ? 2 * 4989 + 433 * -3 + -8678 : -13544 + 6772 * 2)) {
    for (A = t - (2 * 2792 + 76 + -5659), o = t + (-5731 * 1 + -2600 + 4166 * 2); A >= 1561 + 878 * 2 + -3317 || o < n.length; ) if ((c = n[r = A >= 9451 * -1 + -439 * 2 + -3443 * -3 ? A-- : o++]) != null && -4 * 1322 + -2975 * 2 + 11238 == (1137 + -1259 * -4 + 3 * -2057 & c.__u) && a == c.key && g == c.type) return r;
  }
  return -1;
}
function Ea(i, n, t) {
  n[-1845 + -9 * -284 + -711] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || AI.test(n) ? t : t + "px";
}
function Co(i, n, t, e, A) {
  var o, r;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || Ea(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || Ea(i.style, n, t[n]);
    }
  else if (n[7935 + -3 * 2645] == "o" && n[7548 + -1 * -9047 + 8297 * -2] == "n") o = n != (n = n.replace(zg, "$1")), r = n.toLowerCase(), n = r in i || n == "onFocusOut" || n == "onFocusIn" ? r.slice(2) : n.slice(-6719 * 1 + 3405 * -1 + 10126), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = Ur, i.addEventListener(n, o ? Oi : Li, o)) : i.removeEventListener(n, o ? Oi : Li, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[2267 * 1 + 1 * -3734 + 1471] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && 9149 + 5 * -1823 + -33 == t ? "" : t));
  }
}
function da(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = Ur++;
      else if (n.t < t.u) return;
      return t(R.event ? R.event(n) : n);
    }
  };
}
function Tr(i, n, t, e, A, o, r, a, g, c) {
  var I, s, Q, x, E, C, l, f, h, p, m, k, D, y, W, Y, fA, jA = n.type;
  if (n.constructor != null) return null;
  5054 + -1 * 4926 & t.__u && (g = !!(-1302 + 1 * 1334 & t.__u), o = [a = n.__e = t.__e]), (I = R.__b) && I(n);
  A: if (typeof jA == "function") try {
    if (f = n.props, h = "prototype" in jA && jA.prototype.render, p = (I = jA.contextType) && e[I.__c], m = I ? p ? p.props.value : I.__ : e, t.__c ? l = (s = n.__c = t.__c).__ = s.__E : (h ? n.__c = s = new jA(f, m) : (n.__c = s = new XA(f, m), s.constructor = jA, s.render = iI), p && p.sub(s), s.state || (s.state = {}), s.__n = e, Q = s.__d = !(-1029 + -1 * -1029), s.__h = [], s._sb = []), h && s.__s == null && (s.__s = s.state), h && jA.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ce({}, s.__s)), Ce(s.__s, jA.getDerivedStateFromProps(f, s.__s))), x = s.props, E = s.state, s.__v = n, Q) h && jA.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), h && s.componentDidMount != null && s.__h.push(s.componentDidMount);
    else {
      if (h && jA.getDerivedStateFromProps == null && f !== x && s.componentWillReceiveProps != null && s.componentWillReceiveProps(f, m), n.__v == t.__v || !s.__e && s.shouldComponentUpdate != null && !(-2858 + 1 * 2859) === s.shouldComponentUpdate(f, s.__s, m)) {
        for (n.__v != t.__v && (s.props = f, s.state = s.__s, s.__d = !(-1 * 4227 + -1 * 6091 + 10319)), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(be) {
          be && (be.__ = n);
        }), k = -103 + -1 * 8111 + -2738 * -3; k < s._sb.length; k++) s.__h.push(s._sb[k]);
        s._sb = [], s.__h.length && r.push(s);
        break A;
      }
      s.componentWillUpdate != null && s.componentWillUpdate(f, s.__s, m), h && s.componentDidUpdate != null && s.__h.push(function() {
        s.componentDidUpdate(x, E, C);
      });
    }
    if (s.context = m, s.props = f, s.__P = i, s.__e = !1, D = R.__r, y = 7092 + 1773 * -4, h) {
      for (s.state = s.__s, s.__d = !(-6 * 703 + -2 * -2417 + 615 * -1), D && D(n), I = s.render(s.props, s.state, s.context), W = 0; W < s._sb.length; W++) s.__h.push(s._sb[W]);
      s._sb = [];
    } else do
      s.__d = !(-589 * -11 + 346 * 18 + 12706 * -1), D && D(n), I = s.render(s.props, s.state, s.context), s.state = s.__s;
    while (s.__d && ++y < -1 * -7985 + 3536 + -11496);
    s.state = s.__s, s.getChildContext != null && (e = Ce(Ce({}, e), s.getChildContext())), h && !Q && s.getSnapshotBeforeUpdate != null && (C = s.getSnapshotBeforeUpdate(x, E)), Y = I, I != null && I.type === KA && I.key == null && (Y = n0(I.props.children)), a = e0(i, ro(Y) ? Y : [Y], n, t, e, A, o, r, a, g, c), s.base = n.__e, n.__u &= -(-1646 * -1 + 1 * -2767 + -1282 * -1), s.__h.length && r.push(s), l && (s.__E = s.__ = null);
  } catch (be) {
    if (n.__v = null, g || o != null)
      if (be.then) {
        for (n.__u |= g ? 3475 * -2 + 5118 + -1992 * -1 : -8 * 767 + 4848 + 1416; a && -6719 + 1 * 2815 + -489 * -8 == a.nodeType && a.nextSibling; ) a = a.nextSibling;
        o[o.indexOf(a)] = null, n.__e = a;
      } else {
        for (fA = o.length; fA--; ) Yr(o[fA]);
        Ui(n);
      }
    else n.__e = t.__e, n.__k = t.__k, be.then || Ui(n);
    R.__e(be, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : a = n.__e = nI(t.__e, n, t, e, A, o, r, g, c);
  return (I = R.diffed) && I(n), -8 * 385 + 1 * 6137 + 2929 * -1 & n.__u ? void 0 : a;
}
function Ui(i) {
  i && i.__c && (i.__c.__e = !0), i && i.__k && i.__k.forEach(Ui);
}
function o0(i, n, t) {
  for (var e = 0; e < t.length; e++) Pr(t[e], t[++e], t[++e]);
  R.__c && R.__c(n, i), i.some(function(A) {
    try {
      i = A.__h, A.__h = [], i.some(function(o) {
        o.call(A);
      });
    } catch (o) {
      R.__e(o, A.__v);
    }
  });
}
function n0(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > 5587 + 1 * -5587 ? i : ro(i) ? i.map(n0) : Ce({}, i);
}
function nI(i, n, t, e, A, o, r, a, g) {
  var c, I, s, Q, x, E, C, l = t.props || to, f = n.props, h = n.type;
  if (h == "svg" ? A = "http://www.w3.org/2000/svg" : h == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (c = 0; c < o.length; c++) if ((x = o[c]) && "setAttribute" in x == !!h && (h ? x.localName == h : x.nodeType == 3)) {
      i = x, o[c] = null;
      break;
    }
  }
  if (i == null) {
    if (h == null) return document.createTextNode(f);
    i = document.createElementNS(A, h, f.is && f), a && (R.__m && R.__m(n, o), a = !1), o = null;
  }
  if (h == null) l === f || a && i.data == f || (i.data = f);
  else {
    if (o = o && io.call(i.childNodes), !a && o != null)
      for (l = {}, c = -1 * -4051 + 1316 * -1 + -2735; c < i.attributes.length; c++) l[(x = i.attributes[c]).name] = x.value;
    for (c in l) if (x = l[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") s = x;
      else if (!(c in f)) {
        if (c == "value" && "defaultValue" in f || c == "checked" && "defaultChecked" in f) continue;
        Co(i, c, null, x, A);
      }
    }
    for (c in f) x = f[c], c == "children" ? Q = x : c == "dangerouslySetInnerHTML" ? I = x : c == "value" ? E = x : c == "checked" ? C = x : a && typeof x != "function" || l[c] === x || Co(i, c, x, l[c], A);
    if (I) a || s && (I.__html == s.__html || I.__html == i.innerHTML) || (i.innerHTML = I.__html), n.__k = [];
    else if (s && (i.innerHTML = ""), e0(n.type == "template" ? i.content : i, ro(Q) ? Q : [Q], n, t, e, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[-2980 + 1 * 892 + 348 * 6] : t.__k && pt(t, 0), a, g), o != null)
      for (c = o.length; c--; ) Yr(o[c]);
    a || (c = "value", h == "progress" && E == null ? i.removeAttribute("value") : E != null && (E !== i[c] || h == "progress" && !E || h == "option" && E != l[c]) && Co(i, c, E, l[c], A), c = "checked", C != null && C != i[c] && Co(i, c, C, l[c], A));
  }
  return i;
}
function Pr(i, n, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && n == null || (i.__u = i(n));
    } else i.current = n;
  } catch (A) {
    R.__e(A, t);
  }
}
function i0(i, n, t) {
  var e, A;
  if (R.unmount && R.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || Pr(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      R.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = 7714 + -325 * 18 + -1864; A < e.length; A++) e[A] && i0(e[A], n, t || typeof i.type != "function");
  t || Yr(i.__e), i.__c = i.__ = i.__e = void 0;
}
function iI(i, n, t) {
  return this.constructor(i, t);
}
function Je(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), R.__ && R.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], Tr(n, i = (!e && t || n).__k = NA(KA, null, [i]), A || to, to, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? io.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), o0(o, i, r);
}
function _r(i, n) {
  Je(i, n, _r);
}
function Hr(i, n, t) {
  var e, A, o, r, a = Ce({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : a[o] = n[o] === void 0 && r != null ? r[o] : n[o];
  return arguments.length > 17028 + -2 * 8513 && (a.children = arguments.length > 3 ? io.call(arguments, -2491 + 23 * -373 + 1 * 11072) : t), zt(i.type, a, e || i.key, A || i.ref, null);
}
function De(i) {
  function n(t) {
    var e, A;
    return this.getChildContext || (e = /* @__PURE__ */ new Set(), (A = {})[n.__c] = this, this.getChildContext = function() {
      return A;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value != o.value && e.forEach(function(r) {
        r.__e = !0, Ji(r);
      });
    }, this.sub = function(o) {
      e.add(o);
      var r = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        e && e.delete(o), r && r.call(o);
      };
    }), t.children;
  }
  return n.__c = "__cC" + Xg++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
io = $g.slice, R = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (a) {
    i = a;
  }
  throw i;
} }, jg = -7174 + -4692 * 1 + 11866, qg = function(i) {
  return i != null && i.constructor == null;
}, XA.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = Ce({}, this.state), typeof i == "function" && (i = i(Ce({}, t), this.props)), i && Ce(t, i), i != null && this.__v && (n && this._sb.push(n), Ji(this));
}, XA.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), Ji(this));
}, XA.prototype.render = KA, ze = [], Vg = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Zg = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, Xo.__r = 3913 * -1 + -5 * 1441 + 11118 * 1, zg = /(PointerCapture)$|Capture$/i, Ur = 8546 + -2 * -1483 + -11512, Li = da(!1), Oi = da(!0), Xg = 7913 + 1 * 6703 + -14616;
function $o() {
  return $o = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = -7728 + 1 * -9367 + 17096; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }, $o.apply(this, arguments);
}
function r0(i, n) {
  if (i == null) return {};
  var t, e, A = {}, o = Object.keys(i);
  for (e = -6541 + -556 * -17 + -2911; e < o.length; e++) n.indexOf(t = o[e]) >= -4 * 2138 + 5 * 1501 + -349 * -3 || (A[t] = i[t]);
  return A;
}
var rI = ["context", "children"], aI = ["useFragment"];
function gI(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = function() {
    cI.call(this, e);
  }, A.prototype.attributeChangedCallback = II, A.prototype.disconnectedCallback = CI, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, i.formAssociated && (A.formAssociated = !0), t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom ? this._vdom.props[o] : this._props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r);
      var a = typeof r;
      r != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A), A;
}
function sI(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = r0(i, rI);
  return Hr(n, t);
}
function cI(i) {
  var n = {};
  n.detail = {}, n.bubbles = !0, n.cancelable = !0;
  var t = new CustomEvent("_preact", n);
  this.dispatchEvent(t), this._vdom = NA(sI, $o({}, this._props, { context: t.detail.context }), g0(this, this._vdomComponent, i)), (this.hasAttribute("hydrate") ? _r : Je)(this._vdom, this._root);
}
function a0(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function II(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[a0(i)] = t, this._vdom = Hr(this._vdom, e), Je(this._vdom, this._root);
  }
}
function CI() {
  Je(this._vdom = null, this._root);
}
function la(i, n) {
  var t = this, e = i.useFragment, A = r0(i, aI);
  return NA(e ? KA : "slot", $o({}, A, { ref: function(o) {
    o ? (t.ref = o, t._listener || (t._listener = function(r) {
      r.stopPropagation(), r.detail.context = n;
    }, o.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function g0(i, n, t) {
  if (i.nodeType === 3) return i.data;
  if (-1 * 5059 + 3021 + 2039 * 1 !== i.nodeType) return null;
  var e = [], A = {}, o = 0, r = i.attributes, a = i.childNodes;
  for (o = r.length; o--; ) r[o].name !== "slot" && (A[r[o].name] = r[o].value, A[a0(r[o].name)] = r[o].value);
  for (o = a.length; o--; ) {
    var g = g0(a[o], null, t), c = a[o].slot;
    c ? A[c] = NA(la, { name: c }, g) : e[o] = g;
  }
  var I = !(!t || !t.shadow), s = n ? NA(la, { useFragment: !I }, e) : e;
  return !I && n && (i.innerHTML = ""), NA(n || i.nodeName.toLowerCase(), A, s);
}
var BI = -554 * -1 + -3655 + 3101;
function b(i, n, t, e, A, o) {
  n || (n = {});
  var r, a, g = n;
  if ("ref" in g)
    for (a in g = {}, n) a == "ref" ? r = n[a] : g[a] = n[a];
  var c = {};
  c.type = i, c.props = g, c.key = t, c.ref = r, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__c = null, c.constructor = void 0, c.__v = --BI, c.__i = -1, c.__u = 0, c.__source = A, c.__self = o;
  var I = c;
  if (typeof i == "function" && (r = i.defaultProps))
    for (a in r) g[a] === void 0 && (g[a] = r[a]);
  return R.vnode && R.vnode(I), I;
}
class w extends Error {
  cause;
  constructor(n, t) {
    super(n), this.name = "AutoCaptureError", this.cause = t;
  }
  static logError(n) {
  }
  static fromCameraError(n) {
    if (this.logError(n), n instanceof w) return n;
    let t;
    switch (n.name) {
      case "OverconstrainedError":
        t = "Minimum quality requirements are not met by your camera";
        break;
      case "NotReadableError":
      case "AbortError":
        t = "The webcam is already in use by another application";
        break;
      case "NotAllowedError":
        t = "To use your camera, you must allow permissions";
        break;
      case "NotFoundError":
        t = "There is no camera available to you";
        break;
      default:
        t = "An unknown camera error has occurred";
        break;
    }
    return new w(t, n);
  }
  static fromError(n) {
    if (this.logError(n), n instanceof w) return n;
    const t = "An unexpected error has occurred";
    return new w(t);
  }
}
const bo = {};
bo.CONTINUE_DETECTION = "continue-detection", bo.SWITCH_CAMERA = "switch-camera", bo.TOGGLE_MIRROR = "toggle-mirror";
const An = bo, Yi = {};
Yi.FIRST_FRAME = "first-frame", Yi.FIRST_VALID_FRAME = "first-valid-frame";
const ko = Yi, s0 = {};
s0.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Ti = s0;
var c0 = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTION_CHANGED = "document-auto-capture:detection-changed", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(c0 || {}), QI = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTION_CHANGED = "face-auto-capture:detection-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(QI || {}), xI = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(xI || {});
const he = {};
he.DETECTION_CHANGED = "smile-auto-capture:detection-changed", he.CAMERA_PROPS_CHANGED = "smile-auto-capture:camera-props-changed", he.CONTROL = "smile-auto-capture:control", he.INSTRUCTION_CHANGED = "smile-auto-capture:instruction-changed", he.INSTRUCTION_ESCALATED = "smile-auto-capture:instruction-escalated", he.VIDEO_ELEMENT_SIZE = "smile-auto-capture:video-element-size", he.STATE_CHANGED = "smile-auto-capture:state-changed", he.PHASE_CHANGED = "smile-auto-capture:phase-changed";
const xe = he;
var EI = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTION_CHANGED = "palm-capture:detection-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(EI || {}), dI = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(dI || {});
const pe = {};
pe.CANDIDATE_SELECTION = "candidate_selection", pe.DOCUMENT_CENTERING = "document_centering", pe.DOCUMENT_NOT_PRESENT = "document_not_present", pe.DOCUMENT_TOO_FAR = "document_too_far", pe.SHARPNESS_TOO_LOW = "sharpness_too_low", pe.BRIGHTNESS_TOO_LOW = "brightness_too_low", pe.BRIGHTNESS_TOO_HIGH = "brightness_too_high", pe.HOTSPOTS_PRESENT = "hotspots_present";
const Te = pe, Pe = {};
Pe.isPresent = Te.DOCUMENT_NOT_PRESENT, Pe.isNotSmall = Te.DOCUMENT_TOO_FAR, Pe.isNotOutOfBounds = Te.DOCUMENT_CENTERING, Pe.isSharp = Te.SHARPNESS_TOO_LOW, Pe.isNotDim = Te.BRIGHTNESS_TOO_LOW, Pe.isNotBright = Te.BRIGHTNESS_TOO_HIGH, Pe.noHotspots = Te.HOTSPOTS_PRESENT;
const xt = {};
xt.LOADING = "loading", xt.ERROR = "error", xt.WAITING = "waiting", xt.RUNNING = "running", xt.COMPLETE = "complete";
const U = xt, I0 = {};
I0.EYE_NOT_PRESENT = "eye_not_present";
const mt = I0, bA = {};
bA.CANDIDATE_SELECTION = "candidate_selection", bA.FACE_TOO_CLOSE = "face_too_close", bA.FACE_TOO_FAR = "face_too_far", bA.FACE_CENTERING = "face_centering", bA.FACE_NOT_PRESENT = "face_not_present", bA.SHARPNESS_TOO_LOW = "sharpness_too_low", bA.BRIGHTNESS_TOO_LOW = "brightness_too_low", bA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", bA.DEVICE_PITCHED = "device_pitched", bA.LEFT_EYE_NOT_PRESENT = "left_" + mt.EYE_NOT_PRESENT, bA.RIGHT_EYE_NOT_PRESENT = "right_" + mt.EYE_NOT_PRESENT, bA.MOUTH_NOT_PRESENT = "mouth_not_present", bA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", bA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const WA = bA, YA = {};
YA.isPresent = WA.FACE_NOT_PRESENT, YA.isNotPitched = WA.DEVICE_PITCHED, YA.isNotSmall = WA.FACE_TOO_FAR, YA.isNotLarge = WA.FACE_TOO_CLOSE, YA.isNotOutOfBounds = WA.FACE_CENTERING, YA.isNotDim = WA.BRIGHTNESS_TOO_LOW, YA.isNotBright = WA.BRIGHTNESS_TOO_HIGH, YA.isSharp = WA.SHARPNESS_TOO_LOW, YA.isLeftEyePresent = WA.LEFT_EYE_NOT_PRESENT, YA.isRightEyePresent = WA.RIGHT_EYE_NOT_PRESENT, YA.isMouthPresent = WA.MOUTH_NOT_PRESENT, YA.isMouthScoreNotTooHigh = WA.MOUTH_SCORE_TOO_HIGH, YA.isMouthScoreNotTooLow = WA.MOUTH_SCORE_TOO_LOW;
var lI = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(lI || {});
const iA = {};
iA.CANDIDATE_SELECTION = "candidate_selection", iA.FACE_TOO_CLOSE = "face_too_close", iA.FACE_TOO_FAR = "face_too_far", iA.FACE_CENTERING = "face_centering", iA.FACE_NOT_PRESENT = "face_not_present", iA.SHARPNESS_TOO_LOW = "sharpness_too_low", iA.BRIGHTNESS_TOO_LOW = "brightness_too_low", iA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", iA.DEVICE_PITCHED = "device_pitched", iA.LEFT_EYE_NOT_PRESENT = "left_" + mt.EYE_NOT_PRESENT, iA.RIGHT_EYE_NOT_PRESENT = "right_" + mt.EYE_NOT_PRESENT, iA.MOUTH_NOT_PRESENT = "mouth_not_present", iA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", iA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low", iA.SMILE = "smile", iA.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", iA.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const rA = iA, LA = {};
LA.isPresent = rA.FACE_NOT_PRESENT, LA.isNotPitched = rA.DEVICE_PITCHED, LA.isNotSmall = rA.FACE_TOO_FAR, LA.isNotLarge = rA.FACE_TOO_CLOSE, LA.isNotOutOfBounds = rA.FACE_CENTERING, LA.isNotDim = rA.BRIGHTNESS_TOO_LOW, LA.isNotBright = rA.BRIGHTNESS_TOO_HIGH, LA.isSharp = rA.SHARPNESS_TOO_LOW, LA.isLeftEyePresent = rA.LEFT_EYE_NOT_PRESENT, LA.isRightEyePresent = rA.RIGHT_EYE_NOT_PRESENT, LA.isMouthPresent = rA.MOUTH_NOT_PRESENT, LA.isMouthStatusNotTooHigh = rA.MOUTH_SCORE_TOO_HIGH, LA.isMouthStatusNotTooLow = rA.MOUTH_SCORE_TOO_LOW;
const oi = LA, So = {};
So.NEUTRAL = "NEUTRAL", So.SMILE = "SMILE", So.SMILE_MANUAL = "SMILE_MANUAL";
const M = So, ne = {};
ne.CANDIDATE_SELECTION = "candidate_selection", ne.PALM_CENTERING = "palm_centering", ne.PALM_NOT_PRESENT = "palm_not_present", ne.PALM_TOO_FAR = "palm_too_far", ne.PALM_TOO_CLOSE = "palm_too_close", ne.SHARPNESS_TOO_LOW = "sharpness_too_low", ne.BRIGHTNESS_TOO_LOW = "brightness_too_low", ne.BRIGHTNESS_TOO_HIGH = "brightness_too_high", ne.DEVICE_PITCHED = "device_pitched", ne.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const le = ne, ue = {};
ue.isPresent = le.PALM_NOT_PRESENT, ue.isNotPitched = le.DEVICE_PITCHED, ue.isNotSmall = le.PALM_TOO_FAR, ue.isNotOutOfBounds = le.PALM_CENTERING, ue.isNotDim = le.BRIGHTNESS_TOO_LOW, ue.isNotBright = le.BRIGHTNESS_TOO_HIGH, ue.isSharp = le.SHARPNESS_TOO_LOW, ue.isNotLarge = le.PALM_TOO_CLOSE, ue.isTemplateExtractionQualityHighEnough = le.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
const Bo = {};
Bo.TOP_LEFT = "TOP_LEFT", Bo.TOP_RIGHT = "TOP_RIGHT", Bo.BOTTOM_RIGHT = "BOTTOM_RIGHT", Bo.BOTTOM_LEFT = "BOTTOM_LEFT";
const ZA = {};
ZA.CANDIDATE_SELECTION = "candidate_selection", ZA.FACE_TOO_CLOSE = "face_too_close", ZA.FACE_TOO_FAR = "face_too_far", ZA.FACE_CENTERING = "face_centering", ZA.FACE_NOT_PRESENT = "face_not_present", ZA.SHARPNESS_TOO_LOW = "sharpness_too_low", ZA.BRIGHTNESS_TOO_LOW = "brightness_too_low", ZA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", ZA.DEVICE_PITCHED = "device_pitched", ZA.LEFT_EYE_NOT_PRESENT = "left_" + mt.EYE_NOT_PRESENT, ZA.RIGHT_EYE_NOT_PRESENT = "right_" + mt.EYE_NOT_PRESENT;
const ae = ZA, ge = {};
ge.isPresent = ae.FACE_NOT_PRESENT, ge.isNotPitched = ae.DEVICE_PITCHED, ge.isNotSmall = ae.FACE_TOO_FAR, ge.isNotLarge = ae.FACE_TOO_CLOSE, ge.isNotOutOfBounds = ae.FACE_CENTERING, ge.isNotDim = ae.BRIGHTNESS_TOO_LOW, ge.isNotBright = ae.BRIGHTNESS_TOO_HIGH, ge.isSharp = ae.SHARPNESS_TOO_LOW, ge.isLeftEyePresent = ae.LEFT_EYE_NOT_PRESENT, ge.isRightEyePresent = ae.RIGHT_EYE_NOT_PRESENT;
var Ue, P, ni, ua, yt = -559 * 2 + 1 * 4420 + -3302, C0 = [], _ = R, fa = _.__b, ha = _.__r, pa = _.diffed, ma = _.__c, ya = _.unmount, wa = _.__;
function Rt(i, n) {
  _.__h && _.__h(P, i, yt || n), yt = -12600 + 600 * 21;
  var t = {};
  t.__ = [], t.__h = [];
  var e = P.__H || (P.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function oA(i) {
  return yt = -8951 * -1 + 4316 + -13266, Kr(x0, i);
}
function Kr(i, n, t) {
  var e = Rt(Ue++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : x0(void 0, n), function(a) {
    var g = e.__N ? e.__N[0] : e.__[0], c = e.t(g, a);
    g !== c && (e.__N = [c, e.__[-3553 + -2 * -2836 + 2118 * -1]], e.__c.setState({}));
  }], e.__c = P, !P.__f)) {
    var A = function(a, g, c) {
      if (!e.__c.__H) return !0;
      var I = e.__c.__H.__.filter(function(Q) {
        return !!Q.__c;
      });
      if (I.every(function(Q) {
        return !Q.__N;
      })) return !o || o.call(this, a, g, c);
      var s = e.__c.props !== a;
      return I.forEach(function(Q) {
        if (Q.__N) {
          var x = Q.__[0];
          Q.__ = Q.__N, Q.__N = void 0, x !== Q.__[0] && (s = !0);
        }
      }), o && o.call(this, a, g, c) || s;
    };
    P.__f = !0;
    var o = P.shouldComponentUpdate, r = P.componentWillUpdate;
    P.componentWillUpdate = function(a, g, c) {
      if (this.__e) {
        var I = o;
        o = void 0, A(a, g, c), o = I;
      }
      r && r.call(this, a, g, c);
    }, P.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function Z(i, n) {
  var t = Rt(Ue++, 3);
  !_.__s && jr(t.__H, n) && (t.__ = i, t.u = n, P.__H.__h.push(t));
}
function vt(i, n) {
  var t = Rt(Ue++, 4);
  !_.__s && jr(t.__H, n) && (t.__ = i, t.u = n, P.__h.push(t));
}
function UA(i) {
  return yt = 18273 + -2 * 9134, EA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function B0(i, n, t) {
  yt = -6716 * 1 + -3479 + 10201, vt(function() {
    if (typeof i == "function") {
      var e = i(n());
      return function() {
        i(null), e && typeof e == "function" && e();
      };
    }
    if (i) return i.current = n(), function() {
      return i.current = null;
    };
  }, t == null ? t : t.concat(i));
}
function EA(i, n) {
  var t = Rt(Ue++, 7);
  return jr(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function Qe(i, n) {
  return yt = 8, EA(function() {
    return i;
  }, n);
}
function re(i) {
  var n = P.context[i.__c], t = Rt(Ue++, 3919 * -2 + -4481 + 12328);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(P)), n.props.value) : i.__;
}
function en(i, n) {
  _.useDebugValue && _.useDebugValue(n ? n(i) : i);
}
function Q0() {
  var i = Rt(Ue++, 11);
  if (!i.__) {
    for (var n = P.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [0, 4963 + -7 * 709]);
    i.__ = "P" + t[0] + "-" + t[-6926 * 1 + -3410 + 10337]++;
  }
  return i.__;
}
function uI() {
  for (var i; i = C0.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(Go), i.__H.__h.forEach(Pi), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], _.__e(n, i.__v);
  }
}
_.__b = function(i) {
  P = null, fa && fa(i);
}, _.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), wa && wa(i, n);
}, _.__r = function(i) {
  ha && ha(i), Ue = 0;
  var n = (P = i.__c).__H;
  n && (ni === P ? (n.__h = [], P.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(Go), n.__h.forEach(Pi), n.__h = [], Ue = 0)), ni = P;
}, _.diffed = function(i) {
  pa && pa(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (-749 + 2 * -753 + 2256 !== C0.push(n) && ua === _.requestAnimationFrame || ((ua = _.requestAnimationFrame) || fI)(uI)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), ni = P = null;
}, _.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(Go), t.__h = t.__h.filter(function(e) {
        return !e.__ || Pi(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], _.__e(e, t.__v);
    }
  }), ma && ma(i, n);
}, _.unmount = function(i) {
  ya && ya(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      Go(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && _.__e(n, t.__v));
};
var Da = typeof requestAnimationFrame == "function";
function fI(i) {
  var n, t = function() {
    clearTimeout(e), Da && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 35);
  Da && (n = requestAnimationFrame(t));
}
function Go(i) {
  var n = P, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), P = n;
}
function Pi(i) {
  var n = P;
  i.__c = i.__(), P = n;
}
function jr(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function x0(i, n) {
  return typeof n == "function" ? n(i) : n;
}
const Un = De(void 0);
Un.displayName = "AppStateContext";
function RA() {
  const i = re(Un);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
class hI extends XA {
  static contextType = Un;
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    const n = new w("An unknown error has occurred");
    this.context?.handleError(n);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    return this.context?.appState === U.ERROR ? null : this.props.children;
  }
}
function E0(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function _i(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function d0(i, n) {
  var t = n(), e = oA({ t: { __: t, u: n } }), A = e[0].t, o = e[1];
  return vt(function() {
    A.__ = t, A.u = n, ii(A) && o({ t: A });
  }, [i, t, n]), Z(function() {
    return ii(A) && o({ t: A }), i(function() {
      ii(A) && o({ t: A });
    });
  }, [i]), t;
}
function ii(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (n !== 0 || 1 / n == (-5605 + 5606 * 1) / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function l0(i) {
  i();
}
function u0(i) {
  return i;
}
function f0() {
  return [!1, l0];
}
var h0 = vt;
function Hi(i, n) {
  this.props = i, this.context = n;
}
function pI(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : _i(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, NA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e.type = i, e;
}
(Hi.prototype = new XA()).isPureReactComponent = !0, Hi.prototype.shouldComponentUpdate = function(i, n) {
  return _i(this.props, i) || _i(this.state, n);
};
var ba = R.__b;
R.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), ba && ba(i);
};
var mI = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 1 * 9441 + -1 * 4541 + -989;
function qr(i) {
  function n(t) {
    var e = E0({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = mI, n.render = i, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var ka = function(i, n) {
  return i == null ? null : we(we(i).map(n));
}, yI = { map: ka, forEach: ka, count: function(i) {
  return i ? we(i).length : 1 * 8982 + -8131 + -851 * 1;
}, only: function(i) {
  var n = we(i);
  if (476 * 19 + 6703 + -15746 * 1 !== n.length) throw "Children.only";
  return n[-14801 + 41 * 361];
}, toArray: we }, wI = R.__e;
R.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  wI(i, n, t, e);
};
var Sa = R.unmount;
function p0(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = E0({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return p0(e, n, t);
  })), i;
}
function m0(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return m0(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function No() {
  this.__u = -3879 + 3882 * -2 + 11643, this.o = null, this.__b = null;
}
function y0(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function DI(i) {
  var n, t, e, A = null;
  function o(r) {
    if (n || (n = i()).then(function(a) {
      a && (A = a.default || a), e = !0;
    }, function(a) {
      t = a, e = !0;
    }), t) throw t;
    if (!e) throw n;
    return A ? NA(A, r) : null;
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Ht() {
  this.i = null, this.l = null;
}
R.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && -9928 + -1282 * 1 + -7 * -1606 & i.__u && (i.type = null), Sa && Sa(i);
}, (No.prototype = new XA()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = y0(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var g = e.state.__a;
        e.__v.__k[0] = m0(g, g.__c.__P, g.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.o.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || -79 + -1 * -523 + -412 & n.__u || e.setState({ __a: e.__b = e.__v.__k[-4815 + -6 * -486 + 1899] }), i.then(r, r);
}, No.prototype.componentWillUnmount = function() {
  this.o = [];
}, No.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[9073 + -9073 * 1].__c;
      this.__v.__k[-347 + -1402 * 4 + 5955] = p0(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && NA(KA, null, i.fallback);
  return A && (A.__u &= -33), [NA(KA, null, n.__a ? null : i.children), A];
};
var Ga = function(i, n, t) {
  if (++t[975 + -487 * 2] === t[-1 * 6109 + 3306 + 2803] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[4695 + -1 * 4695] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > 3 * -2637 + -5850 + 13764; ) t.pop()();
    if (t[9563 * -1 + 3599 + -1193 * -5] < t[1 * 8810 + 538 + -2 * 4674]) break;
    i.i = t = t[-9138 + 303 * 27 + 959];
  }
};
function bI(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function kI(i) {
  var n = this, t = i.h;
  if (n.componentWillUnmount = function() {
    Je(null, n.v), n.v = null, n.h = null;
  }, n.h && n.h !== t && n.componentWillUnmount(), !n.v) {
    for (var e = n.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var A = {};
    A.__m = e.__m, n.h = t, n.v = { nodeType: 1, parentNode: t, childNodes: [], __k: A, contains: function() {
      return !0;
    }, insertBefore: function(r, a) {
      this.childNodes.push(r), n.h.insertBefore(r, a);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 4663 * -1 + -3 * 1436 + 8972), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, Je(NA(bI, o, i.__v), n.v);
}
function SI(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = NA(kI, t);
  return e.containerInfo = n, e;
}
(Ht.prototype = new XA()).__a = function(i) {
  var n = this, t = y0(n.__v), e = n.l.get(i);
  return e[3504 + -3 * 1168]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), Ga(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, Ht.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = we(i.children);
  i.revealOrder && i.revealOrder[1735 + -3007 * -2 + -7749] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [9552 + -287 * -31 + -18448, -631 * -7 + 513 + -4930, this.i]);
  return i.children;
}, Ht.prototype.componentDidUpdate = Ht.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    Ga(i, t, n);
  });
};
var w0 = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 35034 + 11 * 2279, GI = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, NI = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, RI = /[A-Z0-9]/g, vI = typeof document < "u", FI = function(i) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function MI(i, n, t) {
  return n.__k == null && (n.textContent = ""), Je(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function WI(i, n, t) {
  return _r(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
XA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(XA.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var Na = R.event;
function LI() {
}
function OI() {
  return this.cancelBubble;
}
function JI() {
  return this.defaultPrevented;
}
R.event = function(i) {
  return Na && (i = Na(i)), i.persist = LI, i.isPropagationStopped = OI, i.isDefaultPrevented = JI, i.nativeEvent = i;
};
var Ro = {};
Ro.enumerable = !1, Ro.configurable = !0, Ro.get = function() {
  return this.class;
};
var Vr, UI = Ro, Ra = R.vnode;
R.vnode = function(i) {
  typeof i.type == "string" && (function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var a = t[r];
      if (!(r === "value" && "defaultValue" in t && a == null || vI && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var g = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && a === !0 ? a = "" : g === "translate" && a === "no" ? a = !1 : g[-7794 * -1 + -6113 + 1681 * -1] === "o" && g[2002 + -1 * -942 + -3 * 981] === "n" ? g === "ondoubleclick" ? r = "ondblclick" : g !== "onchange" || e !== "input" && e !== "textarea" || FI(t.type) ? g === "onfocus" ? r = "onfocusin" : g === "onblur" ? r = "onfocusout" : NI.test(r) && (r = g) : g = r = "oninput" : o && GI.test(r) ? r = r.replace(RI, "-$&").toLowerCase() : a === null && (a = void 0), g === "oninput" && A[r = g] && (r = "oninputCapture"), A[r] = a;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = we(t.children).forEach(function(c) {
      c.props.selected = A.value.indexOf(c.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = we(t.children).forEach(function(c) {
      c.props.selected = A.multiple ? A.defaultValue.indexOf(c.props.value) != -1 : A.defaultValue == c.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", UI)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  })(i), i.$$typeof = w0, Ra && Ra(i);
};
var va = R.__r;
R.__r = function(i) {
  va && va(i), Vr = i.__c;
};
var Fa = R.diffed;
R.diffed = function(i) {
  Fa && Fa(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), Vr = null;
};
var dA = {};
dA.readContext = function(i) {
  return Vr.__n[i.__c].props.value;
}, dA.useCallback = Qe, dA.useContext = re, dA.useDebugValue = en, dA.useDeferredValue = u0, dA.useEffect = Z, dA.useId = Q0, dA.useImperativeHandle = B0, dA.useInsertionEffect = h0, dA.useLayoutEffect = vt, dA.useMemo = EA, dA.useReducer = Kr, dA.useRef = UA, dA.useState = oA, dA.useSyncExternalStore = d0, dA.useTransition = f0;
var D0 = {};
D0.current = dA;
var b0 = {};
b0.ReactCurrentDispatcher = D0;
var YI = b0;
function TI(i) {
  return NA.bind(null, i);
}
function Yn(i) {
  return !!i && i.$$typeof === w0;
}
function PI(i) {
  return Yn(i) && i.type === KA;
}
function _I(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function HI(i) {
  return Yn(i) ? Hr.apply(null, arguments) : i;
}
function KI(i) {
  return !!i.__k && (Je(null, i), !0);
}
function jI(i) {
  return i && (i.base || -5 * -1279 + -2211 * -2 + 1 * -10816 === i.nodeType && i) || null;
}
var qI = function(i, n) {
  return i(n);
}, VI = function(i, n) {
  return i(n);
}, ZI = KA, zI = Yn, ot = { useState: oA, useId: Q0, useReducer: Kr, useEffect: Z, useLayoutEffect: vt, useInsertionEffect: h0, useTransition: f0, useDeferredValue: u0, useSyncExternalStore: d0, startTransition: l0, useRef: UA, useImperativeHandle: B0, useMemo: EA, useCallback: Qe, useContext: re, useDebugValue: en, version: "18.3.1", Children: yI, render: MI, hydrate: WI, unmountComponentAtNode: KI, createPortal: SI, createElement: NA, createContext: De, createFactory: TI, cloneElement: HI, createRef: eI, Fragment: KA, isValidElement: Yn, isElement: zI, isFragment: PI, isMemo: _I, findDOMNode: jI, Component: XA, PureComponent: Hi, memo: pI, forwardRef: qr, flushSync: VI, unstable_batchedUpdates: qI, StrictMode: ZI, Suspense: No, SuspenseList: Ht, lazy: DI, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: YI };
(function(i, n) {
  function t(g, c, I, s, Q) {
    return aA(Q - -804, g);
  }
  function e(g, c, I, s, Q) {
    return aA(I - -42, c);
  }
  function A(g, c, I, s, Q) {
    return aA(c - 239, Q);
  }
  function o(g, c, I, s, Q) {
    return aA(c - 303, g);
  }
  function r(g, c, I, s, Q) {
    return aA(Q - 847, s);
  }
  const a = i();
  for (; ; )
    try {
      if (parseInt(o("8Viq", 545, 557, 555, 539)) / 1 + parseInt(e(202, "i7h1", 194, 195, 175)) / 2 * (-parseInt(o("pxdC", 566, 570, 568, 579)) / 3) + parseInt(A(506, 501, 493, 511, "Vc89")) / 4 * (-parseInt(A(488, 469, 476, 456, "QqFi")) / 5) + parseInt(A(483, 491, 511, 483, "Dt^q")) / 6 * (parseInt(r(1102, 1084, 1096, "Lhx1", 1095)) / 7) + parseInt(t("KOM7", -559, -527, -529, -543)) / 8 + parseInt(o("KOM7", 553, 557, 550, 555)) / 9 * (-parseInt(o("K8Mo", 550, 563, 541, 536)) / 10) + parseInt(A(453, 464, 461, 457, "Lhx1")) / 11 * (parseInt(A(453, 467, 480, 487, "MOl3")) / 12) === n) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(tn, -661021 + 270 * 3324 + 23 * 16811);
function tn() {
  const i = ["WRtcLaxcRmouWPVcMJ4iWRymWPi", "W5dcGueYuMVcOW1KW7ddRmkk", "W6nKW7ZcSahcJ0uxWP3dS2RdS3G", "d8koW5xcIrddQW4SdW", "W4ZdOcXsWPXTnuPTou7cRq", "WO3dJ0C0W4e", "WOpcPCkcW6RdG0BcJCohn3TuWRC", "WRq/WR7dSLK", "BmkPq8kRW49KW53dRmk/", "fSkYWQNdVSowzSodbYjMWODJ", "yWavBflcSMRdKmkPWQFcOce", "hCkWpmk/WOe", "W6iMg8kkxCkGD3VdGW", "W6ZcH3VcHdmDimk6FCowAqa", "l8otW5FcICoQumoA", "W4/cUYClW68", "oeXipau", "hvfdmau", "DSknW7KtjGjXiKjjWOWtCG", "CXldHa7dUa", "WRxcNZpcR0dcMwxdPg9/W6ZdGG", "W4BdOIPwWPLPlh1faKpcUa", "yCosW5lcMaHoWQ05ka", "xmoHW5pcP8kl", "W5XvCmkeW7G", "b3xcVCo0WR3dH8k5W4xcOSkgdSoN", "cmkkW5dcLaxdVcaekG", "W4pdTqtdTxq", "WRZcKqtdJ8kkW5RcJb4o", "F8oBrv8TeWS", "DwBcN8khWP1/wKbUA8k5", "iwfDWO1j", "nSk7WRKvW4NdMCkprmoS", "hmogtI0", "WRJcLqdcQCouW4NcPaabWRas", "za8uor/dLNhdV8k8", "WRZdJapdLMC", "vKVdU0/dQG", "gSkdW7O"];
  return tn = function() {
    return i;
  }, tn();
}
function ri(i, n, t, e, A) {
  return aA(n - -504, t);
}
function Ma(i, n, t, e, A) {
  return aA(A - 963, i);
}
function k0(i, n, t, e, A) {
  return aA(i - 18, t);
}
function aA(i, n) {
  i = i - (3328 + 1182 * 1 + 1 * -4285);
  const t = tn();
  let e = t[i];
  if (aA.uxjZEV === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (let x = 0, E = s.length; x < E; x++)
        Q += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const g = function(c, I) {
      let s = [], Q = 0, x, E = "";
      c = A(c);
      let C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (let l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    aA.eeCVpX = g, aA.MbvMud = {}, aA.uxjZEV = !0;
  }
  const o = t[975 + 1694 * -1 + 719], r = i + o, a = aA.MbvMud[r];
  return a ? e = a : (aA.NGyczt === void 0 && (aA.NGyczt = !0), e = aA.eeCVpX(e, n), aA.MbvMud[r] = e), e;
}
function Ki(i, n, t, e, A) {
  return aA(e - 53, n);
}
const on = De(void 0);
on[ri(-271, -271, "i0NO") + ri(-256, -258, "@%Cv") + "e"] = Ki(273, "9@Lu", 304, 292) + ri(-269, -259, "^64o") + k0(273, 291, "wVPt");
function Tn() {
  function i(r, a, g, c, I) {
    return Ma(r, a - 60, g - 454, c - 131, c - -277);
  }
  function n(r, a, g, c, I) {
    return Ki(r - 229, c, g - 290, a - 230);
  }
  const t = re(on);
  if (t === void 0) throw new Error(on[i("pxdC", 901, 911, 915) + i("Jh3n", 942, 941, 944) + "e"] + (A(1193, 1185, 1191, "D7[&") + n(549, 532, 551, "r3yc") + i("Bf0S", 917, 914, 927) + n(520, 521, 520, "9@Lu") + e(11, 3, 19, "V)g8") + A(1227, 1210, 1213, "E#wc") + o("[t$Z", 1045, 1053, 1052) + o("rol3", 1066, 1066, 1085)));
  function e(r, a, g, c, I) {
    return Ki(r - 302, c, g - 423, g - -287);
  }
  function A(r, a, g, c, I) {
    return Ma(c, a - 160, g - 470, c - 196, g - -9);
  }
  function o(r, a, g, c, I) {
    return k0(c - 807, a - 200, r);
  }
  return t;
}
const nn = De(void 0);
nn.displayName = "AnalyticsContext";
function XI() {
  const i = re(nn);
  if (i === void 0)
    throw new Error(`${nn.displayName} must be used within a AnalyticsProvider`);
  return i;
}
var $I = /* @__PURE__ */ Symbol.for("preact-signals");
function Pn() {
  if (Oe > 1)
    Oe--;
  else {
    for (var i, n = !1; Xt !== void 0; ) {
      var t = Xt;
      for (Xt = void 0, ji++; t !== void 0; ) {
        var e = t.o;
        if (t.o = void 0, t.f &= -3, !(-3769 + 1 * 3777 & t.f) && N0(t)) try {
          t.c();
        } catch (A) {
          !n && (i = A, n = !0);
        }
        t = e;
      }
    }
    if (ji = 0, Oe--, n) throw i;
  }
}
function AC(i) {
  if (Oe > 3 * -282 + -1 * -4309 + -3463) return i();
  Oe++;
  try {
    return i();
  } finally {
    Pn();
  }
}
var J = void 0;
function Wa(i) {
  var n = J;
  J = void 0;
  try {
    return i();
  } finally {
    J = n;
  }
}
var Xt = void 0, Oe = 3073 + -3073 * 1, ji = -80 + -1651 * -2 + 2 * -1611, rn = -2 * -1257 + 6508 + -9022;
function S0(i) {
  if (J !== void 0) {
    var n = i.n;
    if (n === void 0 || n.t !== J)
      return n = { i: 0, S: i, p: J.s, n: void 0, t: J, e: void 0, x: void 0, r: n }, J.s !== void 0 && (J.s.n = n), J.s = n, i.n = n, -484 * 18 + 3107 + 5637 & J.f && i.S(n), n;
    if (n.i === -1)
      return n.i = 12489 + 1 * -12489, n.n !== void 0 && (n.n.p = n.p, n.p !== void 0 && (n.p.n = n.n), n.p = J.s, n.n = void 0, J.s.n = n, J.s = n), n;
  }
}
function lA(i, n) {
  this.v = i, this.i = 0, this.n = void 0, this.t = void 0, this.W = n?.watched, this.Z = n?.unwatched, this.name = n?.name;
}
lA.prototype.brand = $I, lA.prototype.h = function() {
  return !0;
}, lA.prototype.S = function(i) {
  var n = this, t = this.t;
  t !== i && i.e === void 0 && (i.x = t, this.t = i, t !== void 0 ? t.e = i : Wa(function() {
    var e;
    (e = n.W) == null || e.call(n);
  }));
}, lA.prototype.U = function(i) {
  var n = this;
  if (this.t !== void 0) {
    var t = i.e, e = i.x;
    t !== void 0 && (t.x = e, i.e = void 0), e !== void 0 && (e.e = t, i.x = void 0), i === this.t && (this.t = e, e === void 0 && Wa(function() {
      var A;
      (A = n.Z) == null || A.call(n);
    }));
  }
}, lA.prototype.subscribe = function(i) {
  var n = this, t = {};
  return t.name = "sub", ao(function() {
    var e = n.value, A = J;
    J = void 0;
    try {
      i(e);
    } finally {
      J = A;
    }
  }, t);
}, lA.prototype.valueOf = function() {
  return this.value;
}, lA.prototype.toString = function() {
  return this.value + "";
}, lA.prototype.toJSON = function() {
  return this.value;
}, lA.prototype.peek = function() {
  var i = J;
  J = void 0;
  try {
    return this.value;
  } finally {
    J = i;
  }
}, Object.defineProperty(lA.prototype, "value", { get: function() {
  var i = S0(this);
  return i !== void 0 && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (ji > -1 * -9863 + 564 + -23 * 449) throw new Error("Cycle detected");
    this.v = i, this.i++, rn++, Oe++;
    try {
      for (var n = this.t; void (-3249 + -1 * -4153 + -452 * 2) !== n; n = n.x) n.t.N();
    } finally {
      Pn();
    }
  }
} });
function G0(i, n) {
  return new lA(i, n);
}
function N0(i) {
  for (var n = i.s; n !== void 0; n = n.n) if (n.S.i !== n.i || !n.S.h() || n.S.i !== n.i) return !0;
  return !1;
}
function R0(i) {
  for (var n = i.s; n !== void 0; n = n.n) {
    var t = n.S.n;
    if (t !== void 0 && (n.r = t), n.S.n = n, n.i = -1, n.n === void 0) {
      i.s = n;
      break;
    }
  }
}
function v0(i) {
  for (var n = i.s, t = void 0; n !== void 0; ) {
    var e = n.p;
    n.i === -1 ? (n.S.U(n), e !== void 0 && (e.n = n.n), n.n !== void 0 && (n.n.p = e)) : t = n, n.S.n = n.r, n.r !== void 0 && (n.r = void 0), n = e;
  }
  i.s = t;
}
function Ke(i, n) {
  lA.call(this, void 0), this.x = i, this.s = void 0, this.g = rn - (-3320 + -3359 * 2 + 10039), this.f = 1724 + 3835 * -1 + 2115, this.W = n?.watched, this.Z = n?.unwatched, this.name = n?.name;
}
Ke.prototype = new lA(), Ke.prototype.h = function() {
  if (this.f &= -3, 12880 + 3 * -4293 & this.f) return !1;
  if (-1 * -3482 + -8045 + 4595 == (36 & this.f) || (this.f &= -5, this.g === rn)) return !0;
  if (this.g = rn, this.f |= -1 * -2531 + 3124 + -5654, this.i > -14 * 512 + -5476 + 12644 && !N0(this)) return this.f &= -2, !0;
  var i = J;
  try {
    R0(this), J = this;
    var n = this.x();
    (16933 + -1 * 16917 & this.f || this.v !== n || -2 * -4708 + -1 * -3274 + -12690 === this.i) && (this.v = n, this.f &= -(6045 + -19 * 353 + -679 * -1), this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return J = i, v0(this), this.f &= -2, !0;
}, Ke.prototype.S = function(i) {
  if (this.t === void 0) {
    this.f |= 1069 * -1 + 6859 + -5754;
    for (var n = this.s; n !== void 0; n = n.n) n.S.S(n);
  }
  lA.prototype.S.call(this, i);
}, Ke.prototype.U = function(i) {
  if (this.t !== void 0 && (lA.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -33;
    for (var n = this.s; n !== void 0; n = n.n) n.S.U(n);
  }
}, Ke.prototype.N = function() {
  if (!(4616 * -2 + 6539 + -7 * -385 & this.f)) {
    this.f |= 9007 * -1 + 5096 + 3917;
    for (var i = this.t; i !== void 0; i = i.x) i.t.N();
  }
}, Object.defineProperty(Ke.prototype, "value", { get: function() {
  if (477 + 1013 * -2 + 1550 & this.f) throw new Error("Cycle detected");
  var i = S0(this);
  if (this.h(), i !== void 0 && (i.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function La(i, n) {
  return new Ke(i, n);
}
function F0(i) {
  var n = i.u;
  if (i.u = void 0, typeof n == "function") {
    Oe++;
    var t = J;
    J = void 0;
    try {
      n();
    } catch (e) {
      throw i.f &= -2, i.f |= 1 * -7489 + 8276 + 1 * -779, Zr(i), e;
    } finally {
      J = t, Pn();
    }
  }
}
function Zr(i) {
  for (var n = i.s; n !== void 0; n = n.n) n.S.U(n);
  i.x = void 0, i.s = void 0, F0(i);
}
function eC(i) {
  if (J !== this) throw new Error("Out-of-order effect");
  v0(this), J = i, this.f &= -2, 8 & this.f && Zr(this), Pn();
}
function Et(i, n) {
  this.x = i, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32, this.name = n?.name;
}
Et.prototype.c = function() {
  var i = this.S();
  try {
    if (-333 * 8 + 1 * 807 + 1865 & this.f || void (-3378 + -563 * -6) === this.x) return;
    var n = this.x();
    typeof n == "function" && (this.u = n);
  } finally {
    i();
  }
}, Et.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= -1613 * 4 + -3164 + 9617, this.f &= -9, F0(this), R0(this), Oe++;
  var i = J;
  return J = this, eC.bind(this, i);
}, Et.prototype.N = function() {
  !(2 & this.f) && (this.f |= 8912 + 3555 * -1 + -5355, this.o = Xt, Xt = this);
}, Et.prototype.d = function() {
  this.f |= -13 * 307 + -1 * 5723 + 4861 * 2, 1 & this.f || Zr(this);
}, Et.prototype.dispose = function() {
  this.d();
};
function ao(i, n) {
  var t = new Et(i, n);
  try {
    t.c();
  } catch (A) {
    throw t.d(), A;
  }
  var e = t.d.bind(t);
  return e[Symbol.dispose] = e, e;
}
var M0, ai, Qo = typeof window < "u" && !!window.__PREACT_SIGNALS_DEVTOOLS__, W0 = [];
ao(function() {
  M0 = this.N;
})();
function ut(i, n) {
  R[i] = n.bind(null, R[i] || function() {
  });
}
function xo(i) {
  ai && ai(), ai = i && i.S();
}
function L0(i) {
  var n = this, t = i.data, e = O0(t);
  e.value = t;
  var A = EA(function() {
    for (var a = n, g = n.__v; g = g.__; ) if (g.__c) {
      g.__c.__$f |= -3517 + -503 * -7;
      break;
    }
    var c = La(function() {
      var x = e.value.value;
      return x === 0 ? -146 + 1 * 5743 + -5597 : x === !0 ? "" : x || "";
    }), I = La(function() {
      return !Array.isArray(c.value) && !qg(c.value);
    }), s = ao(function() {
      if (this.N = J0, I.value) {
        var x = c.value;
        a.__v && a.__v.__e && 1049 * 1 + 1 * -2609 + -3 * -521 === a.__v.__e.nodeType && (a.__v.__e.data = x);
      }
    }), Q = n.__$u.d;
    return n.__$u.d = function() {
      s(), Q.call(this);
    }, [I, c];
  }, []), o = A[0], r = A[-1906 * 1 + 5549 + -3642];
  return o.value ? r.peek() : r.value;
}
L0.displayName = "ReactiveTextNode";
var qi = {};
qi.configurable = !0, qi.value = void 0;
var Vi = {};
Vi.configurable = !0, Vi.value = L0;
var Zi = {};
Zi.configurable = !0, Zi.get = function() {
  var i = {};
  return i.data = this, i;
};
var zi = {};
zi.configurable = !0, zi.value = 1;
var Jt = {};
Jt.constructor = qi, Jt.type = Vi, Jt.props = Zi, Jt.__b = zi, Object.defineProperties(lA.prototype, Jt), ut("__b", function(i, n) {
  if (Qo && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), typeof n.type == "string") {
    var t, e = n.props;
    for (var A in e) if (A !== "children") {
      var o = e[A];
      o instanceof lA && (t || (n.__np = t = {}), t[A] = o, e[A] = o.peek());
    }
  }
  i(n);
}), ut("__r", function(i, n) {
  if (Qo && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.enterComponent(n), n.type !== KA) {
    xo();
    var t, e = n.__c;
    e && (e.__$f &= -2, (t = e.__$u) === void 0 && (e.__$u = t = (function(A) {
      var o;
      return ao(function() {
        o = this;
      }), o.c = function() {
        e.__$f |= 1, e.setState({});
      }, o;
    })())), xo(t);
  }
  i(n);
}), ut("__e", function(i, n, t, e) {
  Qo && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), xo(), i(n, t, e);
}), ut("diffed", function(i, n) {
  Qo && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), xo();
  var t;
  if (typeof n.type == "string" && (t = n.__e)) {
    var e = n.__np, A = n.props;
    if (e) {
      var o = t.U;
      if (o) for (var r in o) {
        var a = o[r];
        a !== void 0 && !(r in e) && (a.d(), o[r] = void 0);
      }
      else o = {}, t.U = o;
      for (var g in e) {
        var c = o[g], I = e[g];
        c === void 0 ? (c = tC(t, g, I, A), o[g] = c) : c.o(I, A);
      }
    }
  }
  i(n);
});
function tC(i, n, t, e) {
  var A = n in i && i.ownerSVGElement === void 0, o = G0(t);
  return { o: function(r, a) {
    o.value = r, e = a;
  }, d: ao(function() {
    this.N = J0;
    var r = o.value.value;
    e[n] !== r && (e[n] = r, A ? i[n] = r : r != null && (r !== !1 || n[4] === "-") ? i.setAttribute(n, r) : i.removeAttribute(n));
  }) };
}
ut("unmount", function(i, n) {
  if (typeof n.type == "string") {
    var t = n.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void 0;
        for (var A in e) {
          var o = e[A];
          o && o.d();
        }
      }
    }
  } else {
    var r = n.__c;
    if (r) {
      var a = r.__$u;
      a && (r.__$u = void 0, a.d());
    }
  }
  i(n);
}), ut("__h", function(i, n, t, e) {
  (e < 1 * -5289 + 202 + 5090 || e === 9) && (n.__$f |= 3772 + 27 * -353 + 823 * 7), i(n, t, e);
}), XA.prototype.shouldComponentUpdate = function(i, n) {
  var t = this.__$u, e = t && t.s !== void 0;
  for (var A in n) return !0;
  if (this.__f || typeof this.u == "boolean" && this.u === !0) {
    var o = 2 & this.__$f;
    if (!(e || o || -2667 + 2671 * 1 & this.__$f) || 1 * -8111 + 1 * 6554 + 1558 & this.__$f) return !0;
  } else if (!(e || -9321 * -1 + 3917 * 1 + -13234 & this.__$f) || 1 * -9341 + -23 * -359 + -1087 * -1 & this.__$f) return !0;
  for (var r in i) if (r !== "__source" && i[r] !== this.props[r]) return !0;
  for (var a in this.props) if (!(a in i)) return !0;
  return !1;
};
function O0(i, n) {
  return oA(function() {
    return G0(i, n);
  })[-1211 * -5 + 1504 + -7559 * 1];
}
var oC = function(i) {
  queueMicrotask(function() {
    queueMicrotask(i);
  });
};
function nC() {
  AC(function() {
    for (var i; i = W0.shift(); ) M0.call(i);
  });
}
function J0() {
  -9913 * -1 + 16 * -541 + 314 * -4 === W0.push(this) && (R.requestAnimationFrame || oC)(nC);
}
const gi = (i) => i.length < -6346 + 6822 * 1 + -475 ? 0 : i.reduce((t, e) => t + e, -2925 + 1 * 7354 + -4429) / i.length, ft = (i) => Number.parseFloat(i.toFixed(-485 * -3 + 681 + 711 * -3));
function iC(i) {
  const n = i.getContext("2d");
  n && n.clearRect(1 * 4535 + -8151 + 2 * 1808, 2543 + 2171 * 1 + -4714, n.canvas.width, n.canvas.height);
}
const U0 = 0 + 0.75, rC = 3347 * -1 + 6545 + -1 * 3196, aC = 1 * 1506 + -7289 * 1 + -1 * -6383, gC = "dot-auto-capture-video", _n = (i, n) => Math.min(i, n), Y0 = ({ height: i, width: n }, t) => {
  const e = _n(n, i) * t, A = (n - e) / 2, o = (i - e) / (1 * -9514 + 6361 + 631 * 5), r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, sC = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = Y0(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, cC = ({ height: i, width: n }) => {
  const t = _n(n, i), e = t / (-3650 + 4871 * 2 + -1 * 6089) * 4;
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
};
function IC(i, n) {
  const t = _n(n.width, n.height);
  return ft(i * t);
}
function CC({ height: i, width: n }) {
  const t = {};
  return t.height = i, t.width = n, Y0(t, U0);
}
function BC(i) {
  return sC(i, U0);
}
function QC(i, n) {
  return IC(i, n) * rC;
}
const xC = "8.0.3", EC = {
  version: xC
}, Xi = {};
Xi.max = 100, Xi.min = 10;
const Oa = Xi, dC = 3356 + -4 * 659, lC = 200, uC = -10466 + 2094 * 5, T0 = "AES-CBC", P0 = "RSA-OAEP", fC = "SHA-256", hC = "image/jpeg", pC = 347 * -15 + -1 * -263 + 4950, _0 = "/dot-assets", Ja = "dot_embedded_bg.wasm", mC = "c56a4180-65aa-42ec-a945-5fd21dec0538", yC = ["a1b2c3d4-e5f6-7890-abcd-ef1234567890", "b2c3d4e5-f6a7-8901-bcde-f12345678901", "c3d4e5f6-a7b8-9012-cdef-123456789012", "d4e5f6a7-b8c9-0123-defa-234567890123", "e5f6a7b8-c9d0-1234-efab-345678901234", "f6a7b8c9-d0e1-2345-fabc-456789012345", "17a8b9c0-e1f2-3456-abcd-567890123456", "28b9c0d1-f2a3-4567-bcde-678901234567", "39c0d1e2-a3b4-5678-cdef-789012345678", "40d1e2f3-b4c5-6789-defa-890123456789", "51e2f3a4-c5d6-7890-efab-901234567890", "62f3a4b5-d6e7-8901-fabc-012345678901", "73a4b5c6-e7f8-9012-abcd-123456789012", "84b5c6d7-f8a9-0123-bcde-234567890123", "95c6d7e8-a9b0-1234-cdef-345678901234", "a6d7e8f9-b0c1-2345-defa-456789012345", "b7e8f9a0-c1d2-3456-efab-567890123456"], $i = (i) => new Promise((n) => {
  setTimeout(n, i);
}), H0 = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? ft(t) : t)), wC = () => EC.version, K0 = (i) => new URL(i).hostname.replace("www.", ""), zr = () => K0(window.location.href) === "localhost", DC = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i;
function bC(i) {
  return i.at(-1) === "/" ? i.slice(0, -1) : i;
}
function kC(i) {
  return "" + bC(i ?? "") + _0;
}
function SC(i) {
  return i !== null && typeof i == "object" && "min" in i && typeof i.min == "number";
}
function Ut(i) {
  return (...n) => {
    zr() && console[i](...n);
  };
}
const Xr = { log: Ut("log"), warn: Ut("warn"), error: Ut("error"), info: Ut("info"), debug: Ut("debug") };
function GC({ analytics: i, crosshatch: n }) {
  if (!zr())
    return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function NC({ analytics: i, apiKey: n, redfin: t, crosshatch: e, bramble: A }) {
  const o = {};
  o.analytics = i, o.crosshatch = e;
  const r = GC(o), a = O0(t);
  return a.value = t, Z(() => {
    r && (Xr.info("Analytics is " + (r?.shouldReportAnalytics(e) ? "enabled" : "disabled")), r.init(n, A.getCustomerName(), a));
  }, [r, A, n, e, a]), r;
}
function RC({
  analytics: i,
  apiKey: n,
  children: t
}) {
  const { crosshatch: e, bramble: A } = Tn(), { redfin: o } = RA(), r = NC({
    analytics: i,
    redfin: o,
    crosshatch: e,
    bramble: A,
    apiKey: n
  }), a = EA(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ b(nn.Provider, { value: a, children: t });
}
const Ar = {};
Ar.SIMD = "simd", Ar.NO_SIMD = "no-simd";
const Ua = Ar, er = {};
er.Lower = "Lower", er.Higher = "Higher";
const wt = er, tr = {};
tr.MOBILE = "MOBILE", tr.DESKTOP = "DESKTOP";
const Ya = tr, an = De(void 0);
an.displayName = "TransactionCountingContext";
function j0() {
  const i = re(an);
  if (i === void 0)
    throw new Error(`${an.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
function vC({ children: i, value: n }) {
  const { crosshatch: t } = Tn(), { transactionCounting: e } = j0(), A = t?.isValid && e?.isTransactionTokenValid ? wt.Higher : wt.Lower, o = EA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ b(Un.Provider, { value: o, children: i });
}
let F;
const ye = new Array(8 * 1231 + -9961 * 1 + 241).fill(void 0);
ye.push(void 0, null, !0, !1);
function or(i) {
  return ye[i];
}
let Be = 5162 + 1 * -3067 + -2095, Kt = null;
function vo() {
  return (Kt === null || Kt.byteLength === 12782 + 7 * -1826) && (Kt = new Uint8Array(F.memory.buffer)), Kt;
}
const Fo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, FC = typeof Fo.encodeInto == "function" ? function(i, n) {
  return Fo.encodeInto(i, n);
} : function(i, n) {
  const t = Fo.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function oo(i, n, t) {
  if (t === void 0) {
    const a = Fo.encode(i), g = n(a.length, -3 * -3085 + 9387 + -18641) >>> 2219 + 1 * -2219;
    return vo().subarray(g, g + a.length).set(a), Be = a.length, g;
  }
  let e = i.length, A = n(e, 8119 + -8118 * 1) >>> -4054 + -347 * 17 + 9953;
  const o = vo();
  let r = -7342 * 1 + -900 + 634 * 13;
  for (; r < e; r++) {
    const a = i.charCodeAt(r);
    if (a > -4903 + 1 * 5030) break;
    o[A + r] = a;
  }
  if (r !== e) {
    r !== -8515 * -1 + 7583 + -16098 && (i = i.slice(r)), A = t(A, e, e = r + i.length * (2209 * -1 + 8927 + -6715), 1) >>> 0;
    const a = vo().subarray(A + r, A + e), g = FC(i, a);
    r += g.written, A = t(A, e, r, 1) >>> 1977 + 1 * -1977;
  }
  return Be = r, A;
}
function q0(i) {
  return i == null;
}
let jt = null;
function ce() {
  return (jt === null || jt.byteLength === 1727 * -1 + 1112 + 615) && (jt = new Int32Array(F.memory.buffer)), jt;
}
let $t = ye.length;
function MC(i) {
  i < 441 * 7 + -4244 + 1289 || (ye[i] = $t, $t = i);
}
function V0(i) {
  const n = or(i);
  return MC(i), n;
}
const nr = {};
nr.ignoreBOM = !0, nr.fatal = !0;
const Z0 = typeof TextDecoder < "u" ? new TextDecoder("utf-8", nr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Z0.decode();
function gn(i, n) {
  return i = i >>> 0, Z0.decode(vo().subarray(i, i + n));
}
function ir(i) {
  $t === ye.length && ye.push(ye.length + (-6391 + -5344 * 1 + 11736));
  const n = $t;
  return $t = ye[n], ye[n] = i, n;
}
let qt = null;
function z0() {
  return (qt === null || qt.byteLength === 1561 + -2 * 1816 + 2071) && (qt = new Uint32Array(F.memory.buffer)), qt;
}
function Ta(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = z0();
  for (let A = -8311 * 1 + 8117 * -1 + 16428; A < i.length; A++)
    e[t / (-10 * 711 + -2 * 283 + 7680) + A] = ir(i[A]);
  return Be = i.length, t;
}
function Pa(i, n) {
  i = i >>> 0;
  const t = z0(), e = t.subarray(i / (-19 * 431 + -393 * 25 + 18018), i / (1 * 9987 + 2713 * -1 + -5 * 1454) + n), A = [];
  for (let o = -964 + -482 * -2; o < e.length; o++)
    A.push(V0(e[o]));
  return A;
}
function WC(i, n) {
  const t = oo(i, F.__wbindgen_malloc, F.__wbindgen_realloc), e = Be, A = oo(n, F.__wbindgen_malloc, F.__wbindgen_realloc), o = Be, r = F.is_mobile_supported(t, e, A, o);
  return $r.__wrap(r);
}
const rr = {};
rr.register = () => {
}, rr.unregister = () => {
};
const _a = typeof FinalizationRegistry > "u" ? rr : new FinalizationRegistry((i) => F.__wbg_licensevalidationresult_free(i >>> -3281 * 3 + -2177 + 12020));
class $r {
  static __wrap(n) {
    n = n >>> 0;
    const t = Object.create($r.prototype);
    return t.__wbg_ptr = n, _a.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = 0, _a.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    F.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = q0(t) ? 0 : oo(t, F.__wbindgen_malloc, F.__wbindgen_realloc), a = Be;
    const g = Ta(e, F.__wbindgen_malloc), c = Be, I = Ta(A, F.__wbindgen_malloc), s = Be, Q = oo(o, F.__wbindgen_malloc, F.__wbindgen_realloc), x = Be, E = F.licensevalidationresult_new(n, r, a, g, c, I, s, Q, x);
    return this.__wbg_ptr = E >>> -5491 + 9523 * 1 + -4032 * 1, this;
  }
  get is_valid() {
    return F.licensevalidationresult_is_valid(this.__wbg_ptr) !== -289 + -289 * -1;
  }
  get features_json() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = ce()[e / (-4598 + -3 * -1534) + (1135 + -1 * 8059 + 6924)], t = ce()[e / (5264 + -293 * -23 + -11999) + (-7257 + 9219 * 1 + -1961)];
      let A;
      return n !== 8620 * -1 + -758 + -3126 * -3 && (A = gn(n, t).slice(), F.__wbindgen_free(n, t * (2934 + 7 * 1309 + -1 * 12096), 1)), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get errors() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = ce()[A / (-3 * 335 + -1875 * 1 + 2884) + (-1 * 4833 + 2416 + 1 * 2417)], t = ce()[A / (-2 * 3087 + -693 + 6871) + (-5145 * 1 + 2 * -269 + 5684)], e = Pa(n, t).slice();
      return F.__wbindgen_free(n, t * (-1087 + 6582 * -1 + -1 * -7673), -3 * -2038 + -6639 + 529), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(155 + -9 * -886 + 427 * -19);
    }
  }
  get warnings() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = ce()[A / (-4 * -1442 + 6743 + -12507) + (5680 + -5043 * -1 + -10723 * 1)], t = ce()[A / (14520 + -7258 * 2) + (-7132 * 1 + 3646 + -317 * -11)], e = Pa(n, t).slice();
      return F.__wbindgen_free(n, t * 4, -4666 * -2 + 2422 + 2 * -5875), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(11678 + -686 * 17);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = ce()[o / 4 + 0], A = ce()[o / (6056 + -2361 * -4 + -15496) + (-18695 + -1558 * -12)];
      return n = e, t = A, gn(e, A);
    } finally {
      F.__wbindgen_add_to_stack_pointer(-7207 + 827 * 1 + 6396), F.__wbindgen_free(n, t, 2506 * -2 + -9868 * -1 + -4855);
    }
  }
}
async function LC(i, n) {
  if (typeof Response == "function" && i instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(i, n);
    } catch (e) {
      if (i.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
      else throw e;
    }
    const t = await i.arrayBuffer();
    return await WebAssembly.instantiate(t, n);
  } else {
    const t = await WebAssembly.instantiate(i, n);
    if (t instanceof WebAssembly.Instance) {
      const e = {};
      return e.instance = t, e.module = i, e;
    } else return t;
  }
}
function OC() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = or(t), A = typeof e == "string" ? e : void 0;
    var o = q0(A) ? -12026 + -7 * -1718 : oo(A, F.__wbindgen_malloc, F.__wbindgen_realloc), r = Be;
    ce()[n / (2891 + 2887 * -1) + 1] = r, ce()[n / 4 + (9676 + -2 * -1248 + 12172 * -1)] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    V0(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = gn(n, t);
    return ir(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return ir(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return or(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(gn(n, t));
  }, i;
}
function JC(i, n) {
  return F = i.exports, X0.__wbindgen_wasm_module = n, jt = null, qt = null, Kt = null, F;
}
async function X0(i) {
  if (F !== void 0) return F;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KBgICAIDcClAMgAyABNgKQAyADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQZADahAzIANB+AFqIAJBMBC+AhogARAiIAMoAoACIQYDQCASIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAYhAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACATIQIgBUUEQCADKAL8ASEEIBEhAgsgBEUNASACIARBAWs2AgAMAQsLIANBwANqIgIgA0H4AWoiAUEwEL4CGiABIANBsAJqIgRBMBC+AhogASACEHUgA0GQA2oiBSABQTAQvgIaIAIQjwIgBCAFQTAQvgIaIAEgA0HgAmoiAkEwEL4CGiABIANBOGoQdSACIAFBMBC+AhoMAAsACyAFIARBvPvAABC5AQALIAogBEHM+8AAELkBAAsgCiAEQdz7wAAQuQEACyAKIARB7PvAABC5AQALIAoNAAsMBAtBgJfCAEErQaz7wAAQ3gEAC0GAl8IAQStBnPvAABDeAQALAAtB/PvAAEEOQYz8wAAQ3gEACyADQfgBaiIBIANB6ABqQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0GwAmogA0H4AWpBMBC+AhogA0HgAmoiBCADQQhqQTAQvgIaIAMoAuACIgtBAkYEQCADKALkAiEECwJAAkACQAJAAkAgBCgCKCIBQQVPBH8gBCgCBAUgAQsgDUEGdiICSwRAIAtBAkcNASADIAMoAuQCIAJBlP7AABDTASADKAIAIQIgAygCBCEBIANBADYC+AEgA0EANgKgAiADQfgBaiIEIAIgAiABQQN0ahBDIANBkANqIARBMBC+AhoMAgsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiIBIANBkANqEDMgA0H4AWoiAiABQTAQvgIaIAJBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogC0ECRg0EIANB4AJqEI8CDAQLIANBwANqIANBCGpBMBC+AhogAygC6AMiBEEETQR/IANByANqBSADKALEAyEEIAMoAsgDCyEBIAIgBEsNASADQQA2AvgBIANBADYCoAIgA0H4AWoiByABIAJBA3RqIAEgBEEDdGoQQyADQZADaiAHQTAQvgIaIANBwANqEI8CCyANQT9xRQ0BIAMoArgDIgRBBE0EfyADQZgDagUgAygClAMhBCADKAKYAwsgBEUNAUEIayECIARBA3QhBCAXQj+DIRhCACEWQgAgF31CP4MhFwNAIAIgBGoiASAWIAEpAwAiFiAYiIQ3AwAgFiAXhiEWIARBCGsiBA0ACwwBCyACIARBpP7AABC5AQALIANB+AFqIgEgA0GQA2pBMBC+AhogAUEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQcADaiADQfgBakEwEL4CGgsgACADQbACakEwEL4CQTBqIANBwANqQTAQvgIaIANBmAFqEI8CIANBOGoQjwIMAgsgAkEIaiEHIAQLRQ0BIAcpAwBCAVEEQCAFQQRNBH8gAUEIagUgASgCBCEFIAEoAggLIQQgA0EANgL4ASADQQA2AqACIANB+AFqIgEgBCAEIAVBA3RqEEMgA0GQA2ogAUEwEL4CGiADQQI2AugCIANCBDcC4AIgA0EANgLAAyADQQA2AugDIANBwANqIgIgA0HgAmoQMyABIAJBMBC+AhogAUEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyAAQTBqIANB+AFqQTAQvgIaIAAgA0GQA2pBMBC+AhoMAQsgBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEBIANBADYC+AEgA0EANgKgAiADQfgBaiIHIAEgASAFQQN0ahBDIANBwANqIAdBMBC+AhogBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyECIARFDQIgA0H4AWoiASADQcADaiACKQMAEE0gACABQTAQvgIiAEHYAGogAykDqAIiFkIAUjYCACAAQThqIBY3AwAgAEEANgIwCyADQfADaiQADwtBAEEAQfz6wAAQtwEAC0EAQQBBjPvAABC3AQALyC8CDX8BfiMAQbACayIEJAAgASgCACEGAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAEoAggiAiABKAIEIgNJBEADQCACIAZqLQAAIgVBCWsiB0EXS0EBIAd0QZOAgARxRXINAiABIAJBAWoiAjYCCCACIANHDQALIAMhAgsgBEGAAWogBiADIAMgAkEBaiIBIAEgA0sbELYBQbixwgAtAAAaIAQoAoQBIQIgBCgCgAEhA0EUEAoiAQ0BDBoLIAVB5QBLDQUgBUEiRg0CIAVBLUYNAyAFQdsARw0GIAEgAS0AGEEBayIFOgAYIAJBAWohAiAFQf8BcUUNASABIAI2AghBACEHIARBADYC+AEgBEIINwLwASAEQagBaiEIIARBoAFqQQFyIQlBCCEKAn8CQAJAA0AgASgCACEGIAIgA08NAQNAAkACQAJAAkACQAJAAkAgAiAGai0AACIFQQxNBEAgBUEJa0ECSQ0HDAELIAVBH0wEQCAFQQ1HDQEMBwsgBUEgRg0GIAVBLEYNASAFQd0ARg0DCyALDQEMAwsgC0UNAyABIAJBAWoiAjYCCCAEQdgAaiAGIAMgAyACIANJBH8DQCACIAZqLQAAIgVBCWsiC0EXS0EBIAt0QZOAgARxRXINBCABIAJBAWoiAjYCCCACIANHDQALIAMFIAILQQFqIgIgAiADSxsQtgFBuLHCAC0AABogBCgCXCECIAQoAlghA0EUEAoiBkUNIyAGIAM2AgwgBkEFNgIAIAYgAjYCEAwICyAEQUBrIAYgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAJEIQIgBCgCQCEDQRQQCiIGRQ0iIAYgAzYCDCAGQQc2AgAgBiACNgIQDAcLIAQoAvABIQYgBCkC9AEhD0EAIQhBBAwHCyAFQd0ARw0AIARByABqIAYgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAJMIQIgBCgCSCEDQRQQCiIGRQ0gIAYgAzYCDCAGQRU2AgAgBiACNgIQDAULIARBoAFqIAEQCSAELQCgASILQQZGBEAgBCgCpAEhBgwFCyAEQYoCaiIMIAlBAmotAAA6AAAgBEGgAmoiDSAIQQhqKQMANwMAIAQgCS8AADsBiAIgBCAIKQMANwOYAiAEKAKkASEOIAQoAvQBIAdGBH8gBEHwAWohAyMAQSBrIgIkAAJAAkAgB0EBaiIFRQ0AQQQgAygCBCIGQQF0IgcgBSAFIAdJGyIFIAVBBE0bIgdBGGwhBSAHQdaq1SpJQQN0IQoCQCAGRQRAIAJBADYCGAwBCyACQQg2AhggAiAGQRhsNgIcIAIgAygCADYCFAsgAkEIaiAKIAUgAkEUahB3IAIoAgwhBSACKAIIRQRAIAMgBzYCBCADIAU2AgAMAgsgBUGBgICAeEYNASAFRQ0AAAsQ6gEACyACQSBqJAAgBCgC8AEhCiAEKAL4AQUgBwtBGGwgCmoiAiALOgAAIAIgDjYABCACQQNqIAwtAAA6AAAgAiAELwGIAjsAASACIAQpA5gCNwAIIAJBEGogDSkDADcAAEEBIQsgBCAEKAL4AUEBaiIHNgL4ASABKAIIIQIgASgCBCEDDAILIAEgAkEBaiICNgIIIAIgA0cNAAsLIAMhAgsgBEHQAGogBiADIAMgAkEBaiICIAIgA0sbELYBQbixwgAtAAAaIAQoAlQhAiAEKAJQIQNBFBAKIgZFDRsgBiADNgIMIAZBAjYCACAGIAI2AhALIAQoAvABIQMgBwRAIAMhAgNAIAIQtAEgAkEYaiECIAdBAWsiBw0ACwsgBCgC9AEEQCADECILQQEhCEEGCyEJIAEgAS0AGEEBajoAGCABKAIAIQUCQCABKAIIIgIgASgCBCIDSQRAA0ACQAJAAkACQAJAAkAgAiAFai0AACIHQQxNBEAgB0EJa0ECSQ0GDAELIAdBH00EQCAHQQ1HDQEMBgsgB0EgRg0FIAdBLEYNASAHQd0ARg0CCyAEQSBqIAUgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAIkIQUgBCgCICEDQRQQCiICRQ0hIAJBFjYCAAwHCyABIAJBAWoiAjYCCCACIANPDQIDQCACIAVqLQAAIgdBCWsiCkEXS0EBIAp0QZOAgARxRXINAiABIAJBAWoiAjYCCCACIANHDQALIAMhAgwCCyABIAJBAWo2AgggBCAPNwOoASAEIAY2AqQBIAQgCToAoAEgCEUNCiAEQQY6AIgBIAQgBjYCjAEMGwsgB0HdAEcNACAEQThqIAUgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAI8IQUgBCgCOCEDQRQQCiICRQ0eIAJBFTYCAAwECyAEQTBqIAUgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAI0IQUgBCgCMCEDQRQQCiICRQ0dIAJBFjYCAAwDCyABIAJBAWoiAjYCCCACIANHDQALIAMhAgsgBEEoaiAFIAMgAyACQQFqIgIgAiADSxsQtgFBuLHCAC0AABogBCgCLCEFIAQoAighA0EUEAoiAkUNGiACQQI2AgALIAIgAzYCDCACIAU2AhAgBCACNgK4ASAEIA83A6gBIAQgBjYCpAEgBCAJOgCgASAIRQRAIARBBjoAiAEgBCACNgKMASAEQaABahC0AQwWCyAEQQY6AIgBIAQgBjYCjAEgAhDNAQwVCyABIAM2AgwgAUEFNgIAIAAgATYCBCAAQQY6AAAgASACNgIQDBcLIARBGGogBiADIAMgAiACIANLGxC2AUG4scIALQAAGiAEKAIcIQIgBCgCGCEDQRQQCiIBRQ0XIAEgAzYCDCABQRg2AgAgACABNgIEIABBBjoAACABIAI2AhAMFgsgAUEUakEANgIAIAEgAkEBajYCCCAEQaABaiABIAFBDGoQECAEKAKgAUECRwRAIAQoAqQBIQMgBEEQaiAEKAKoASICEOABIAQoAhQhBSAEKAIQIAMgAhC+AiEDIAQgAjYClAEgBCAFNgKQASAEIAM2AowBIARBAzoAiAEMEwsgACAEKAKkATYCBCAAQQY6AAAMFQsgASACQQFqNgIIIARBoAFqIgIgAUEAEDQgBCkDoAFCA1IEQCAEQYgBaiACEKMBDBILIAAgBCgCqAE2AgQgAEEGOgAADBQLIARBmAFqIARBsAFqKQMANwMAIARBkAFqIARBqAFqKQMANwMAIAQgBCkDoAE3A4gBDBALIAVB8wBNBEAgBUHmAEYNBCAFQe4ARw0BIAEgAkEBajYCCCABQfCJwgBBAxBxIgENAiAEQQA6AIgBDBELIAVB9ABGDQIgBUH7AEYNBAsgBUEwa0H/AXFBCkkNBCAEQQhqIAYgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAIMIQMgBCgCCCEFQRQQCiICRQ0SIAIgBTYCDCACQQo2AgAgAiADNgIQDBALIABBBjoAACAAIAE2AgQMEAsgASACQQFqNgIIIAFB84nCAEEDEHEiAUUNAyAAQQY6AAAgACABNgIEDA8LIAEgAkEBajYCCCABQfaJwgBBBBBxIgFFDQogAEEGOgAAIAAgATYCBAwOCyABIAEtABhBAWsiBToAGCACQQFqIQIgBUH/AXFFDQggASACNgIIIARBAToAxAEgBCABNgLAASAEQcgBaiEHIwBBQGoiBSQAIARBwAFqIgooAgAiCCgCACEJAkACQAJAIAgoAggiAyAIQQRqKAIAIgJJBEADQAJAAkACQAJAAkACQAJAIAMgCWotAAAiBkEMTQRAIAZBCWtBAkkNBwwBCyAGQR9NBEAgBkENRw0BDAcLIAZBIEYNBiAGQSxGDQIgBkH9AEYNAQsgCi0ABEUNAgwDC0EAIQYgB0EANgIEDAkLQSwhBiAKLQAEDQEgCCADQQFqIgM2AgggBUEoaiAJIAIgAiACIANLBH8DQCADIAlqLQAAIgZBCWsiCkEXS0EBIAp0QZOAgARxRXINBCAIIANBAWoiAzYCCCACIANHDQALIAIFIAMLQQFqIgMgAiADSRsQtgFBuLHCAC0AABogBSgCLCEDIAUoAighBkEUEAoiAkUNBiACIAY2AgwgAkEFNgIAIAcgAjYCBCACIAM2AhBBASEGDAgLQQEhBiAFIAkgAiACIANBAWoiAyACIANJGxC2AUG4scIALQAAGiAFKAIEIQMgBSgCACEIQRQQCiICRQ0FIAIgCDYCDCACQQg2AgAgByACNgIEIAIgAzYCEAwHCyAKQQA6AAQLAkAgBkEiRwRAIAZB/QBGDQFBASEGIAVBCGogCSACIAIgA0EBaiIDIAIgA0kbELYBQbixwgAtAAAaIAUoAgwhAyAFKAIIIQhBFBAKIgJFDQUgAiAINgIMIAJBETYCACAHIAI2AgQgAiADNgIQDAcLQQAhBiAIQRRqQQA2AgAgCCADQQFqNgIIIAVBNGogCCAIQQxqEBAgBSgCNEECRwRAIAUoAjghAyAFQRBqIAUoAjwiAhDgASAFKAIUIQggBSgCECADIAIQvgIhAyAHQQxqIAI2AgAgB0EIaiAINgIAIAcgAzYCBAwHCyAHIAUoAjg2AgRBASEGDAYLQQEhBiAFQRhqIAkgAiACIANBAWoiAyACIANJGxC2AUG4scIALQAAGiAFKAIcIQMgBSgCGCEIQRQQCiICRQ0DIAIgCDYCDCACQRU2AgAgByACNgIEIAIgAzYCEAwFCyAIIANBAWoiAzYCCCACIANHDQALIAIhAwtBASEGIAVBIGogCSACIAIgA0EBaiIDIAIgA0kbELYBQbixwgAtAAAaIAUoAiQhAyAFKAIgIQhBFBAKIgINAQsACyACIAg2AgwgAkEDNgIAIAcgAjYCBCACIAM2AhALIAcgBjYCACAFQUBrJAAgBCgCyAENAiAEKALMASICRQRAIARBADYCrAEgBEEANgKkASAEQQU6AKABDAcLIARB0AFqKQIAIQ8gBEEANgLgASAEQQA2AtgBIAQgDzcCjAIgBCACNgKIAiAEQZgCaiIDIARBwAFqEF4gBC0AmAJBBkYNAyAEQfABaiICIARB2AFqIARBiAJqIAMQDCAELQDwAUEGRwRAIAIQtAELIARB8AFqQQFyIQogBEGYAmpBAXIhCwNAAkAgBEGIAmohByMAQUBqIgUkACAEQcABaiIMKAIAIggoAgAhCQJAAkACQCAIKAIIIgMgCEEEaigCACICSQRAA0ACQAJAAkACQAJAAkACQCADIAlqLQAAIgZBDE0EQCAGQQlrQQJJDQcMAQsgBkEfTQRAIAZBDUcNAQwHCyAGQSBGDQYgBkEsRg0CIAZB/QBGDQELIAwtAARFDQIMAwtBACEGIAdBADYCBAwJC0EsIQYgDC0ABA0BIAggA0EBaiIDNgIIIAVBKGogCSACIAIgAiADSwR/A0AgAyAJai0AACIGQQlrIgxBF0tBASAMdEGTgIAEcUVyDQQgCCADQQFqIgM2AgggAiADRw0ACyACBSADC0EBaiIDIAIgA0kbELYBQbixwgAtAAAaIAUoAiwhAyAFKAIoIQZBFBAKIgJFDQYgAiAGNgIMIAJBBTYCACAHIAI2AgQgAiADNgIQQQEhBgwIC0EBIQYgBSAJIAIgAiADQQFqIgMgAiADSRsQtgFBuLHCAC0AABogBSgCBCEDIAUoAgAhCEEUEAoiAkUNBSACIAg2AgwgAkEINgIAIAcgAjYCBCACIAM2AhAMBwsgDEEAOgAECwJAIAZBIkcEQCAGQf0ARg0BQQEhBiAFQQhqIAkgAiACIANBAWoiAyACIANJGxC2AUG4scIALQAAGiAFKAIMIQMgBSgCCCEIQRQQCiICRQ0FIAIgCDYCDCACQRE2AgAgByACNgIEIAIgAzYCEAwHCyAIQRRqQQA2AgBBASEGIAggA0EBajYCCCAFQTRqIAggCEEMahAQIAUoAjRBAkYEQCAHIAUoAjg2AgQMBwsgBSgCOCEDIAVBEGogBSgCPCICEOABIAUoAhQhBiAFKAIQIAMgAhC+AiEDIAdBDGogAjYCACAHQQhqIAY2AgAgByADNgIEQQAhBgwGC0EBIQYgBUEYaiAJIAIgAiADQQFqIgMgAiADSRsQtgFBuLHCAC0AABogBSgCHCEDIAUoAhghCEEUEAoiAkUNAyACIAg2AgwgAkEVNgIAIAcgAjYCBCACIAM2AhAMBQsgCCADQQFqIgM2AgggAiADRw0ACyACIQMLQQEhBiAFQSBqIAkgAiACIANBAWoiAyACIANJGxC2AUG4scIALQAAGiAFKAIkIQMgBSgCICEIQRQQCiICDQELAAsgAiAINgIMIAJBAzYCACAHIAI2AgQgAiADNgIQCyAHIAY2AgAgBUFAayQAIAQoAowCIQICQAJAIAQoAogCBEAgAiEFDAELIAJFDQIgBCkCkAIhDyAEQZgCaiAEQcABahBeIAQtAJgCIgNBBkcNASAEKAKcAiEFIA+nRQ0AIAIQIgsgBCAFNgKkASAEQQY6AKABDAcLIAogCykAADcAACAKQQ9qIAtBD2opAAA3AAAgCkEIaiALQQhqKQAANwAAIAQgDzcC6AEgBCACNgLkASAEIAM6APABIARBmAJqIgIgBEHYAWogBEHkAWogBEHwAWoQDCAELQCYAkEGRg0BIAIQtAEMAQsLIARBowJqIARB4AFqKAIANgAAIAQgBCkC2AE3AJsCIARBqAFqIARBnwJqKQAANwAAIARBBToAoAEgBCAEKQCYAjcAoQEMBgsgBEGgAWoiAiABQQEQNCAEKQOgAUIDUgRAIARBiAFqIAIQowEMCgsgACAEKAKoATYCBCAAQQY6AAAMDAsgBEGBAjsBiAEMCQsgBCAEKALMATYCpAEgBEEGOgCgAQwCCyAEIAQoApwCNgKkASAEQQY6AKABIA+nRQ0AIAIQIgsgBEHYAWoQsgELQQEMAQtBAAshByABIAEtABhBAWo6ABggASgCACEGAkAgASgCCCICIAEoAgQiA0kEQANAAkACQAJAAkAgAiAGai0AACIFQQxNBEAgBUEJa0ECSQ0EDAELIAVBH00EQCAFQQ1HDQEMBAsgBUEgRg0DIAVBLEYNASAFQf0ARg0CCyAEQegAaiAGIAMgAyACQQFqIgIgAiADSxsQtgFBuLHCAC0AABogBCgCbCEFIAQoAmghA0EUEAoiAkUNDCACQRY2AgAMBQsgBEH4AGogBiADIAMgAkEBaiICIAIgA0sbELYBQbixwgAtAAAaIAQoAnwhBSAEKAJ4IQNBFBAKIgJFDQsgAkEVNgIADAQLIAEgAkEBajYCCCAHBEAgBCAEKAKkATYCjAEgBEEGOgCIAQwHCyAEQZgBaiAEQbABaikDADcDACAEQZABaiAEQagBaikDADcDACAEIAQpA6ABNwOIAQwGCyABIAJBAWoiAjYCCCACIANHDQALIAMhAgsgBEHwAGogBiADIAMgAkEBaiICIAIgA0sbELYBQbixwgAtAAAaIAQoAnQhBSAEKAJwIQNBFBAKIgJFDQcgAkEDNgIACyACIAM2AgwgAiAFNgIQIAQgAjYCuAEgB0UEQCAEQQY6AIgBIAQgAjYCjAEgBEGgAWoQtAEMAwsgBCAEKAKkATYCjAEgBEEGOgCIASACEM0BDAILIARB4ABqIAYgAyADIAIgAiADSxsQtgFBuLHCAC0AABogBCgCZCECIAQoAmAhA0EUEAoiAUUNBSABIAM2AgwgAUEYNgIAIAAgATYCBCAAQQY6AAAgASACNgIQDAQLIARBATsBiAEMAQsgBC0AiAFBBkcNACAEKAKMASECDAELIAAgBCkDiAE3AwAgAEEQaiAEQZgBaikDADcDACAAQQhqIARBkAFqKQMANwMADAELIwBBEGsiAyQAAkAgAigCDARAIAIhAQwBCyADQQhqIAJBCGooAgA2AgAgAyACKQIANwMAIAEgAxC/ASEBIAIQIgsgA0EQaiQAIABBBjoAACAAIAE2AgQLIARBsAJqJAAPCwALpB8CCH8BfgJAAkACQAJAAkAgAEH1AU8EQCAAQc3/e08NBSAAQQtqIgBBeHEhBEHwsMIAKAIAIghFDQRBACAEayEBAn9BACAEQYACSQ0AGkEfIARB////B0sNABogBEEGIABBCHZnIgBrdkEBcSAAQQF0a0E+agsiB0ECdEHUrcIAaigCACICRQRAQQAhAAwCC0EAIQAgBEEZIAdBAXZrQR9xQQAgB0EfRxt0IQYDQAJAIAIoAgRBeHEiBSAESQ0AIAUgBGsiBSABTw0AIAIhAyAFIgENAEEAIQEgAiEADAQLIAJBFGooAgAiBSAAIAUgAiAGQR12QQRxakEQaigCACICRxsgACAFGyEAIAZBAXQhBiACDQALDAELQeywwgAoAgAiAUEQIABBC2pBeHEgAEELSRsiBEEDdiICdiIAQQNxBEACQCAAQX9zQQFxIAJqIgBBA3QiBEHsrsIAaigCACICQQhqIgUoAgAiAyAEQeSuwgBqIgRHBEAgAyAENgIMIAQgAzYCCAwBC0HssMIAIAFBfiAAd3E2AgALIAIgAEEDdCIAQQNyNgIEIAAgAmoiACAAKAIEQQFyNgIEIAUPCyAEQfSwwgAoAgBNDQMCQAJAAkACQAJAAkAgAEUEQEHwsMIAKAIAIgBFDQogAGhBAnRB1K3CAGooAgAiBigCBEF4cSAEayECAkAgBigCECIARQRAIAZBFGooAgAiAEUNAQsDQCAAKAIEQXhxIARrIgUgAkkhAyAFIAIgAxshAiAAIAYgAxshBiAAKAIQIgEEfyABBSAAQRRqKAIACyIADQALCyAGEF8gAkEQSQ0CIAYgBEEDcjYCBCAEIAZqIgQgAkEBcjYCBCACIARqIAI2AgBB9LDCACgCACIDDQEMBQsCQEECIAJBH3EiAnQiA0EAIANrciAAIAJ0cWgiAkEDdCIFQeyuwgBqKAIAIgBBCGoiBigCACIDIAVB5K7CAGoiBUcEQCADIAU2AgwgBSADNgIIDAELQeywwgAgAUF+IAJ3cTYCAAsgACAEQQNyNgIEIAAgBGoiBSACQQN0IgEgBGsiAkEBcjYCBCAAIAFqIAI2AgBB9LDCACgCACIDDQIMAwsgA0F4cUHkrsIAaiEAQfywwgAoAgAhAQJ/QeywwgAoAgAiBUEBIANBA3Z0IgNxRQRAQeywwgAgAyAFcjYCACAADAELIAAoAggLIQMgACABNgIIIAMgATYCDCABIAA2AgwgASADNgIIDAMLIAYgAiAEaiIAQQNyNgIEIAAgBmoiACAAKAIEQQFyNgIEDAMLIANBeHFB5K7CAGohAEH8sMIAKAIAIQECf0HssMIAKAIAIgRBASADQQN2dCIDcUUEQEHssMIAIAMgBHI2AgAgAAwBCyAAKAIICyEEIAAgATYCCCAEIAE2AgwgASAANgIMIAEgBDYCCAtB/LDCACAFNgIAQfSwwgAgAjYCACAGDwtB/LDCACAENgIAQfSwwgAgAjYCAAsgBkEIag8LIAAgA3JFBEBBACEDIAhBAiAHdCIAQQAgAGtycSIARQ0DIABoQQJ0QdStwgBqKAIAIQALIABFDQELA0AgACADIAAoAgRBeHEiBSAEayIGIAFJIgcbIQggACgCECICRQRAIABBFGooAgAhAgsgAyAIIAQgBUsiABshAyABIAYgASAHGyAAGyEBIAIiAA0ACwsgA0UNACAEQfSwwgAoAgAiAE0gASAAIARrT3ENACADEF8CQCABQRBPBEAgAyAEQQNyNgIEIAMgBGoiAiABQQFyNgIEIAEgAmogATYCACABQYACTwRAIAIgARBgDAILIAFBeHFB5K7CAGohAAJ/QeywwgAoAgAiBEEBIAFBA3Z0IgFxRQRAQeywwgAgASAEcjYCACAADAELIAAoAggLIQEgACACNgIIIAEgAjYCDCACIAA2AgwgAiABNgIIDAELIAMgASAEaiIAQQNyNgIEIAAgA2oiACAAKAIEQQFyNgIECyADQQhqDwsCQAJAAkACQAJAAkACQCAEQfSwwgAoAgAiAUsEQCAEQfiwwgAoAgAiAE8EQEEAIQEgBEGvgARqIgBBEHZAACICQX9GIgUNCSACQRB0IgNFDQlBhLHCAEEAIABBgIB8cSAFGyIGQYSxwgAoAgBqIgA2AgBBiLHCAEGIscIAKAIAIgEgACAAIAFJGzYCAAJAAkBBgLHCACgCACIFBEBB1K7CACEAA0AgACgCACIBIAAoAgQiAmogA0YNAiAAKAIIIgANAAsMAgtBkLHCACgCACIAQQAgACADTRtFBEBBkLHCACADNgIAC0GUscIAQf8fNgIAQdiuwgAgBjYCAEHUrsIAIAM2AgBB8K7CAEHkrsIANgIAQfiuwgBB7K7CADYCAEHsrsIAQeSuwgA2AgBBgK/CAEH0rsIANgIAQfSuwgBB7K7CADYCAEGIr8IAQfyuwgA2AgBB/K7CAEH0rsIANgIAQZCvwgBBhK/CADYCAEGEr8IAQfyuwgA2AgBBmK/CAEGMr8IANgIAQYyvwgBBhK/CADYCAEGgr8IAQZSvwgA2AgBBlK/CAEGMr8IANgIAQaivwgBBnK/CADYCAEGcr8IAQZSvwgA2AgBB4K7CAEEANgIAQbCvwgBBpK/CADYCAEGkr8IAQZyvwgA2AgBBrK/CAEGkr8IANgIAQbivwgBBrK/CADYCAEG0r8IAQayvwgA2AgBBwK/CAEG0r8IANgIAQbyvwgBBtK/CADYCAEHIr8IAQbyvwgA2AgBBxK/CAEG8r8IANgIAQdCvwgBBxK/CADYCAEHMr8IAQcSvwgA2AgBB2K/CAEHMr8IANgIAQdSvwgBBzK/CADYCAEHgr8IAQdSvwgA2AgBB3K/CAEHUr8IANgIAQeivwgBB3K/CADYCAEHkr8IAQdyvwgA2AgBB8K/CAEHkr8IANgIAQfivwgBB7K/CADYCAEHsr8IAQeSvwgA2AgBBgLDCAEH0r8IANgIAQfSvwgBB7K/CADYCAEGIsMIAQfyvwgA2AgBB/K/CAEH0r8IANgIAQZCwwgBBhLDCADYCAEGEsMIAQfyvwgA2AgBBmLDCAEGMsMIANgIAQYywwgBBhLDCADYCAEGgsMIAQZSwwgA2AgBBlLDCAEGMsMIANgIAQaiwwgBBnLDCADYCAEGcsMIAQZSwwgA2AgBBsLDCAEGksMIANgIAQaSwwgBBnLDCADYCAEG4sMIAQaywwgA2AgBBrLDCAEGksMIANgIAQcCwwgBBtLDCADYCAEG0sMIAQaywwgA2AgBByLDCAEG8sMIANgIAQbywwgBBtLDCADYCAEHQsMIAQcSwwgA2AgBBxLDCAEG8sMIANgIAQdiwwgBBzLDCADYCAEHMsMIAQcSwwgA2AgBB4LDCAEHUsMIANgIAQdSwwgBBzLDCADYCAEHosMIAQdywwgA2AgBB3LDCAEHUsMIANgIAQYCxwgAgAzYCAEHksMIAQdywwgA2AgBB+LDCACAGQShrIgA2AgAgAyAAQQFyNgIEIAAgA2pBKDYCBEGMscIAQYCAgAE2AgAMCgsgACgCDCABIAVLcg0AIAMgBUsNAwtBkLHCAEGQscIAKAIAIgAgAyAAIANJGzYCACADIAZqIQJB1K7CACEAAkACQANAIAIgACgCAEcEQCAAKAIIIgANAQwCCwsgACgCDEUNAQtB1K7CACEAA0ACQCAFIAAoAgAiAU8EQCABIAAoAgRqIgIgBUsNAQsgACgCCCEADAELC0GAscIAIAM2AgBB+LDCACAGQShrIgA2AgAgAyAAQQFyNgIEIAAgA2pBKDYCBEGMscIAQYCAgAE2AgAgBSACQSBrQXhxQQhrIgAgACAFQRBqSRsiAUEbNgIEQdSuwgApAgAhCSABQRBqQdyuwgApAgA3AgAgASAJNwIIQdiuwgAgBjYCAEHUrsIAIAM2AgBB3K7CACABQQhqNgIAQeCuwgBBADYCACABQRxqIQADQCAAQQc2AgAgAEEEaiIAIAJJDQALIAEgBUYNCSABIAEoAgRBfnE2AgQgBSABIAVrIgBBAXI2AgQgASAANgIAIABBgAJPBEAgBSAAEGAMCgsgAEF4cUHkrsIAaiEBAn9B7LDCACgCACICQQEgAEEDdnQiAHFFBEBB7LDCACAAIAJyNgIAIAEMAQsgASgCCAshACABIAU2AgggACAFNgIMIAUgATYCDCAFIAA2AggMCQsgACADNgIAIAAgACgCBCAGajYCBCADIARBA3I2AgQgAiADIARqIgVrIQEgAkGAscIAKAIARg0DIAJB/LDCACgCAEYNBCACKAIEIgRBA3FBAUYEQAJAIARBeHEiAEGAAk8EQCACEF8MAQsgAkEMaigCACIGIAJBCGooAgAiB0cEQCAHIAY2AgwgBiAHNgIIDAELQeywwgBB7LDCACgCAEF+IARBA3Z3cTYCAAsgACACaiICKAIEIQQgACABaiEBCyACIARBfnE2AgQgBSABQQFyNgIEIAEgBWogATYCACABQYACTwRAIAUgARBgDAgLIAFBeHFB5K7CAGohAAJ/QeywwgAoAgAiAkEBIAFBA3Z0IgFxRQRAQeywwgAgASACcjYCACAADAELIAAoAggLIQEgACAFNgIIIAEgBTYCDCAFIAA2AgwgBSABNgIIDAcLQfiwwgAgACAEayIBNgIAQYCxwgBBgLHCACgCACIAIARqIgI2AgAgAiABQQFyNgIEIAAgBEEDcjYCBCAAQQhqIQEMCAtB/LDCACgCACEAIAEgBGsiAkEQSQ0DQfSwwgAgAjYCAEH8sMIAIAAgBGoiAzYCACADIAJBAXI2AgQgACABaiACNgIAIAAgBEEDcjYCBAwECyAAIAIgBmo2AgRBgLHCAEGAscIAKAIAIgBBD2pBeHEiAUEIayICNgIAQfiwwgBB+LDCACgCACAGaiIDIAAgAWtqQQhqIgE2AgAgAiABQQFyNgIEIAAgA2pBKDYCBEGMscIAQYCAgAE2AgAMBQtBgLHCACAFNgIAQfiwwgBB+LDCACgCACABaiIANgIAIAUgAEEBcjYCBAwDC0H8sMIAIAU2AgBB9LDCAEH0sMIAKAIAIAFqIgA2AgAgBSAAQQFyNgIEIAAgBWogADYCAAwCC0H8sMIAQQA2AgBB9LDCAEEANgIAIAAgAUEDcjYCBCAAIAFqIgEgASgCBEEBcjYCBAsgAEEIag8LIANBCGoPC0EAIQFB+LDCACgCACIAIARNDQBB+LDCACAAIARrIgE2AgBBgLHCAEGAscIAKAIAIgAgBGoiAjYCACACIAFBAXI2AgQgACAEQQNyNgIEIABBCGoPCyABC9AWAhx/AX4jAEHwAGsiAyQAIANBAEHAABC7AiEDIAEgAkEGdGohHiAAKAIAIRkgACgCBCEaIAAoAgghGyAAKAIMIRwgACgCECEdA0BBACECA0AgAiADaiABIAJqKAAAIgRBGHQgBEGA/gNxQQh0ciAEQQh2QYD+A3EgBEEYdnJyNgIAIAJBBGoiAkHAAEcNAAsgAygCMCEJIAMoAjQhAiADKAI4IQQgAygCPCEQIAMoAiAhBSADKAIkIQogAygCKCELIAMoAiwhFSADKAIQIQwgAygCFCEWIAMoAhghDSADKAIcIREgAygCACEIIAMoAgQhFyADKAIIIQ4gAygCDCEPIAMgGjYCVCADIBs2AlggAyAcNgJcIAMgGTYCUCADIA82AmwgAyAONgJoIAMgFzYCZCADIAggHWo2AmAgA0FAayISIANB0ABqIhMgA0HgAGoiFEEAECQgAygCQCEGIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBjYCUCADIBE2AmwgAyANNgJoIAMgFjYCZCADIAwgGUEed2o2AmAgEiATIBRBABAkIAMoAkAhByADKQJEIR8gAyADKAJMNgJcIAMgHzcCVCADIAc2AlAgAyAVNgJsIAMgCzYCaCADIAo2AmQgAyAFIAZBHndqNgJgIBIgEyAUQQAQJCADKAJAIQYgAykCRCEfIAMgAygCTDYCXCADIB83AlQgAyAGNgJQIAMgEDYCbCADIAQ2AmggAyACNgJkIAMgCSAHQR53ajYCYCASIBMgFEEAECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAIgBSAIIA5zc3NBAXciCCAGQR53ajYCYCADIBUgDyAWc3MgCHNBAXciBjYCbCADIBAgCyAMIA5zc3NBAXciDjYCaCADIAQgCiAPIBdzc3NBAXciDzYCZCASIBMgFEEAECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAkgDCANc3MgD3NBAXciDCAHQR53ajYCYCADIAQgBSANc3MgBnNBAXciDTYCaCADIBAgCiARc3MgDHNBAXciFzYCbCADIAIgESAWc3MgDnNBAXciFjYCZCASIBMgFEEBECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAUgC3MgCHMgFnNBAXciBSAYQR53ajYCYCADIAkgC3MgDnMgF3NBAXciCzYCaCADIAIgFXMgBnMgBXNBAXciETYCbCADIAogFXMgD3MgDXNBAXciCjYCZCASIBMgFEEBECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAQgCXMgDHMgCnNBAXciCSAHQR53ajYCYCADIAQgCHMgDXMgEXNBAXciBDYCaCADIA8gEHMgF3MgCXNBAXciFTYCbCADIAIgEHMgFnMgC3NBAXciAjYCZCASIBMgFEEBECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAggDnMgBXMgAnNBAXciECAYQR53ajYCYCADIAYgFnMgEXMgEHNBAXciCDYCbCADIAwgDnMgC3MgFXNBAXciDjYCaCADIAYgD3MgCnMgBHNBAXciBjYCZCASIBMgFEEBECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAwgDXMgCXMgBnNBAXciDyAHQR53ajYCYCADIAUgDXMgBHMgCHNBAXciDDYCaCADIAogF3MgFXMgD3NBAXciDTYCbCADIBYgF3MgAnMgDnNBAXciFzYCZCASIBMgFEEBECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAUgC3MgEHMgF3NBAXciBSAYQR53ajYCYCADIAkgC3MgDnMgDXNBAXciCzYCaCADIAIgEXMgCHMgBXNBAXciFjYCbCADIAogEXMgBnMgDHNBAXciCjYCZCASIBMgFEECECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAQgCXMgD3MgCnNBAXciCSAHQR53ajYCYCADIAQgEHMgDHMgFnNBAXciBDYCaCADIAYgFXMgDXMgCXNBAXciETYCbCADIAIgFXMgF3MgC3NBAXciAjYCZCASIBMgFEECECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIA4gEHMgBXMgAnNBAXciECAYQR53ajYCYCADIAggF3MgFnMgEHNBAXciFTYCbCADIA4gD3MgC3MgEXNBAXciDjYCaCADIAYgCHMgCnMgBHNBAXciCDYCZCASIBMgFEECECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAwgD3MgCXMgCHNBAXciBiAHQR53ajYCYCADIAUgDHMgBHMgFXNBAXciDzYCaCADIAogDXMgEXMgBnNBAXciDDYCbCADIA0gF3MgAnMgDnNBAXciDTYCZCASIBMgFEECECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAUgC3MgEHMgDXNBAXciBSAYQR53ajYCYCADIAkgC3MgDnMgDHNBAXciCzYCaCADIAIgFnMgFXMgBXNBAXciFzYCbCADIAogFnMgCHMgD3NBAXciCjYCZCASIBMgFEECECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAQgCXMgBnMgCnNBAXciCSAHQR53ajYCYCADIAQgEHMgD3MgF3NBAXciBDYCaCADIAggEXMgDHMgCXNBAXciFjYCbCADIAIgEXMgDXMgC3NBAXciAjYCZCASIBMgFEEDECQgAygCQCERIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgETYCUCADIA4gEHMgBXMgAnNBAXciECAYQR53ajYCYCADIA0gFXMgF3MgEHNBAXciBzYCbCADIAYgDnMgC3MgFnNBAXciDjYCaCADIAggFXMgCnMgBHNBAXciFTYCZCASIBMgFEEDECQgAygCQCEIIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgCDYCUCADIAYgD3MgCXMgFXNBAXciBiARQR53ajYCYCADIAUgD3MgBHMgB3NBAXciDzYCaCADIAogDHMgFnMgBnNBAXciETYCbCADIAwgDXMgAnMgDnNBAXciDDYCZCASIBMgFEEDECQgAygCQCENIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgDTYCUCADIAUgC3MgEHMgDHNBAXciBSAIQR53ajYCYCADIAkgC3MgDnMgEXNBAXciCzYCaCADIAIgF3MgB3MgBXNBAXciCDYCbCADIAogF3MgFXMgD3NBAXciCjYCZCASIBMgFEEDECQgAygCQCEFIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBTYCUCADIAQgCXMgBnMgCnNBAXciCSAVIBZzIBFzc0EBdzYCbCADIAQgEHMgD3MgCHNBAXc2AmggAyACIBZzIAxzIAtzQQF3NgJkIAMgDUEedyAJajYCYCASIBMgFEEDECQgBUEedyAdaiEdIAMoAkwgHGohHCADKAJIIBtqIRsgAygCRCAaaiEaIAMoAkAgGWohGSABQUBrIgEgHkcNAAsgACAdNgIQIAAgHDYCDCAAIBs2AgggACAaNgIEIAAgGTYCACADQfAAaiQAC9cTAhR/AX4jAEHAAWsiBCQAAkACQAJAAkACQAJAAkACQAJAAkAgASgCACIHBEAgAigCCCEJIAIoAgAhDCABKAIEIQgCQANAIAdBjAJqIQUgBy8BkgMiCkEMbCELQX8hBgJAAkADQCALRQRAIAohBgwCCyAFKAIIIQ0gBSgCACEOIAZBAWohBiALQQxrIQsgBUEMaiEFQX8gDCAOIAkgDSAJIA1JGxC8AiIOIAkgDWsgDhsiDUEARyANQQBIGyINQQFGDQALIA1B/wFxRQ0BCyAIRQ0CIAhBAWshCCAHIAZBAnRqQZgDaigCACEHDAELCyACKAIERQ0JIAwQIgwJCyACKQIEIhinIQIgDA0BIAEhBiACIQcMCAsgAikCBCIYpyEHIAIoAgAiBkUEQCABIQYMCAtBuLHCAC0AABpBmAMQCiICRQ0CIAJBATsBkgMgAkEANgKIAiACIAY2AowCIAJBkAJqIAetIBhCgICAgHCDhDcCACACIAMpAwA3AwAgAkEIaiADQQhqKQMANwMAIAJBEGogA0EQaikDADcDACABQoCAgIAQNwIEIAEgAjYCAAwBCyACrSAYQoCAgIBwg4QhGAJAAkACQCAHLwGSAyIFQQtPBEBBASEIQQQhBQJAIAZBBUkNAAJAAkAgBiIFQQVrDgICAQALIAZBB2shBkEAIQhBBiEFDAELQQAhCEEFIQVBACEGC0G4scIALQAAGkGYAxAKIgpFDQUgCkEAOwGSAyAKQQA2AogCIARBkAFqIg8gB0GMAmoiDSAFQQxsaiILQQhqKAIANgIAIARBMGoiECAHIAVBGGxqIglBCWopAAA3AwAgBEE3aiIRIAlBEGopAAA3AAAgCiAHLwGSAyIOIAVBf3NqIgI7AZIDIAQgCykCADcDiAEgBCAJKQABNwMoIAJBDE8NBiAOIAVBAWoiC2sgAkcNDCAJLQAAIQkgCkGMAmogDSALQQxsaiACQQxsEL4CGiAKIAcgC0EYbGogAkEYbBC+AiECIAcgBTsBkgMgBEEIaiAPKAIANgIAIARB6ABqIBApAwA3AwAgBEHvAGogESkAADcAACAEIAQpA4gBNwMAIAQgBCkDKDcDYCAHIAIgCBsiBUGMAmoiDiAGQQxsaiEIIAZBAWoiCyAFLwGSAyINTQ0BIAggGDcCBCAIIAw2AgAMAgsgB0GMAmoiCCAGQQxsaiECAkAgBSAGQQFqIgpJBEAgAiAYNwIEIAIgDDYCAAwBCyAIIApBDGxqIAIgBSAGayIIQQxsEL0CIAIgGDcCBCACIAw2AgAgByAKQRhsaiAHIAZBGGxqIAhBGGwQvQILIAcgBkEYbGoiAkEQaiADQRBqKQMANwMAIAIgAykDADcDACACQQhqIANBCGopAwA3AwAgByAFQQFqOwGSAwwCCyAOIAtBDGxqIAggDSAGayIOQQxsEL0CIAggGDcCBCAIIAw2AgAgBSALQRhsaiAFIAZBGGxqIA5BGGwQvQILIAUgBkEYbGoiBkEQaiADQRBqKQMANwMAIAYgAykDADcDACAEQbgBaiIMIARBCGopAwA3AwAgBEGgAWoiCCAEQegAaiILKQMANwMAIARBpwFqIg4gBEHvAGopAAA3AAAgBkEIaiADQQhqKQMANwMAIAUgDUEBajsBkgMgBCAEKQMANwOwASAEIAQpA2A3A5gBIAlBBkYNACALIAwpAwA3AwAgBEH5AGogCCkDADcAACAEQYABaiAOKQAANwAAIAQgBCkDsAE3A2AgBCAJOgBwIAQgBCkDmAE3AHECQAJAIAcoAogCIgVFBEBBACEMDAELIARB8QBqIQsgBEHwAGohEyAEQTdqIQhBACEMA0AgBy8BkAMhAyAFIgcvAZIDIhRBC0kNAkEBIQ1BBCEFAkAgA0EFSQ0AAkACQCADIgVBBWsOAgIBAAsgA0EHayEDQQAhDUEGIQUMAQtBACENQQUhBUEAIQMLQbixwgAtAAAaQcgDEAoiCkUNBSAKQQA7AZIDIApBADYCiAIgBEGQAWoiDiAHQYwCaiIQIAVBDGxqIg9BCGooAgA2AgAgBEEwaiISIAcgBUEYbGoiCUEJaikAADcDACAIIAlBEGopAAA3AAAgCiAHLwGSAyIRIAVBf3NqIgY7AZIDIAQgDykCADcDiAEgBCAJKQABNwMoIAZBDE8NByARIAVBAWoiD2sgBkcNDCAJLQAAIREgCkGMAmogECAPQQxsaiAGQQxsEL4CGiAKIAcgD0EYbGogBkEYbBC+AiEGIAcgBTsBkgMgBEG4AWoiFSAOKAIANgIAIARBoAFqIhYgEikDADcDACAEQacBaiIXIAgpAAA3AAAgBCAEKQOIATcDsAEgBCAEKQMoNwOYASAGLwGSAyIJQQFqIRAgCUEMTw0IIBQgBWsiBSAQRw0MIAxBAWohDCAGQZgDaiAHIA9BAnRqQZgDaiAFQQJ0EL4CIQ9BACEFA0ACQCAPIAVBAnRqKAIAIhAgBTsBkAMgECAGNgKIAiAFIAlPDQAgBSAFIAlJaiIFIAlNDQELCyAOIBUpAwA3AwAgEiAWKQMANwMAIAggFykAADcAACAEIAQpA7ABNwOIASAEIAQpA5gBNwMoIAcgBiANGyADIARB4ABqIBMgAhBKIARBIGoiAiAOKQMANwMAIARBCGoiAyASKQMANwMAIARBD2oiBSAIKQAANwAAIAQgBCkDiAE3AxggBCAEKQMoNwMAIBFBBkYNAyALIAQpAwA3AAAgBEHoAGogAikDADcDACALQQhqIAMpAwA3AAAgC0EPaiAFKQAANwAAIAQgBCkDGDcDYCAEIBE6AHAgBiECIAcoAogCIgUNAAsLIARBKGoiBiAEQeAAakEoEL4CGiAEIAw2AlwgBCAKNgJYIAQgDDYCVCAEIAc2AlAgASgCACIDRQ0HQbixwgAtAAAaIAEoAgQhB0HIAxAKIgJFDQMgAiADNgKYAyACQQA7AZIDIAJBADYCiAIgASACNgIAIANBADsBkAMgAyACNgKIAiABIAdBAWoiAzYCBCACIAMgBiAEQThqIAogDBCLAQwBCyAHIAMgBEHgAGogEyACEEoLIAEgASgCCEEBajYCCAsgAEEGOgAADAYLAAsgAkELQeTpwQAQuAEACyAGQQtB5OnBABC4AQALIBBBDEH06cEAELgBAAtBgJfCAEErQcDnwQAQ3gEACyAAIAcgBkEYbGoiASkDADcDACABIAMpAwA3AwAgAEEQaiABQRBqIgIpAwA3AwAgAEEIaiABQQhqIgApAwA3AwAgACADQQhqKQMANwMAIAIgA0EQaikDADcDAAsgBEHAAWokAA8LQazpwQBBKEHU6cEAEN4BAAujEQEZfyMAQUBqIhkkACACBEAgASACQQZ0aiEaIAAoAgwhByAAKAIIIQYgACgCBCEEIAAoAgAhCANAQQAhAiAZQQBBwAAQuwIhAyABQUBrA0AgAiADaiABIAJqKAAANgIAIAJBBGoiAkHAAEcNAAsgBCADKAIIIgkgAygCGCIKIAMoAigiCyADKAI4IgwgAygCPCINIAMoAgwiDiADKAIcIg8gAygCLCIQIA8gDiANIBAgDCALIAogBiAJaiAHIAMoAgQiEWogAygCACISIAggBCAGcWogByAEQX9zcWpqQYi31cQCa0EHdyAEaiIBIARxaiAGIAFBf3NxakGqkeG5AWtBDHcgAWoiAiABcWogBCACQX9zcWpB2+GBoQJqQRF3IAJqIgVqIAMoAhQiEyACaiABIAMoAhAiFGogBCAOaiACIAVxaiABIAVBf3NxakGS4ojyA2tBFncgBWoiASAFcWogAiABQX9zcWpB0eCP1ABrQQd3IAFqIgIgAXFqIAUgAkF/c3FqQaqMn7wEakEMdyACaiIEIAJxaiABIARBf3NxakHt876+BWtBEXcgBGoiBWogAygCJCIVIARqIAMoAiAiFiACaiABIA9qIAQgBXFqIAIgBUF/c3FqQf/V5RVrQRZ3IAVqIgEgBXFqIAQgAUF/c3FqQdixgswGakEHdyABaiICIAFxaiAFIAJBf3NxakHRkOylB2tBDHcgAmoiBCACcWogASAEQX9zcWpBz8gCa0ERdyAEaiIFaiADKAI0IhcgBGogAygCMCIYIAJqIAEgEGogBCAFcWogAiAFQX9zcWpBwtCMtQdrQRZ3IAVqIgEgBXFqIAQgAUF/c3FqQaKiwNwGakEHdyABaiICIAFxaiAFIAJBf3NxakHtnJ4Ta0EMdyACaiIDIAJxaiABIANBf3MiBXFqQfL4mswFa0ERdyADaiIEaiACIBFqIAQgBXFqIAEgDWogAyAEcWogAiAEQX9zIgVxakGhkNDNBGpBFncgBGoiASADcWpBnrWHzwBrQQV3IAFqIgIgAUF/c3FqIAMgCmogASAFcWogAiAEcWpBwJn9/QNrQQl3IAJqIgMgAXFqQdG0+bICakEOdyADaiIEaiACIBNqIAQgA0F/c3FqIAEgEmogAyACQX9zcWogAiAEcWpB1vCksgFrQRR3IARqIgEgA3FqQaPfw84Ca0EFdyABaiICIAFBf3NxaiADIAtqIAEgBEF/c3FqIAIgBHFqQdOokBJqQQl3IAJqIgMgAXFqQf+y+LoCa0EOdyADaiIEaiACIBVqIAQgA0F/c3FqIAEgFGogAyACQX9zcWogAiAEcWpBuIiwwQFrQRR3IARqIgEgA3FqQeabh48CakEFdyABaiICIAFBf3NxaiADIAxqIAEgBEF/c3FqIAIgBHFqQarwo+YDa0EJdyACaiIDIAFxakH55KvZAGtBDncgA2oiBGogAiAXaiAEIANBf3NxaiABIBZqIAMgAkF/c3FqIAIgBHFqQe2p6KoEakEUdyAEaiIBIANxakH7rfCwBWtBBXcgAWoiAiABQX9zcWogAyAJaiABIARBf3NxaiACIARxakGIuMEYa0EJdyACaiIDIAFxakHZhby7BmpBDncgA2oiBGogAyAWaiACIBNqIAEgGGogAyACQX9zcWogAiAEcWpB9ubWlgdrQRR3IARqIgIgBHMiASADc2pBvo0Xa0EEdyACaiIDIAFzakH/krjEB2tBC3cgA2oiBCADcyIFIAJzakGiwvXsBmpBEHcgBGoiAWogAyARaiACIAxqIAEgBXNqQfSP6xBrQRd3IAFqIgIgASAEc3NqQbyrhNoFa0EEdyACaiIDIAJzIAQgFGogASACcyADc2pBqZ/73gRqQQt3IANqIgFzakGg6ZLKAGtBEHcgAWoiBGogAyAXaiACIAtqIAEgA3MgBHNqQZCHgYoEa0EXdyAEaiICIAEgBHNzakHG/e3EAmpBBHcgAmoiAyACcyABIBJqIAIgBHMgA3NqQYaw+6oBa0ELdyADaiIBc2pB+57D2AJrQRB3IAFqIgRqIAMgFWogAiAKaiABIANzIARzakGFuqAkakEXdyAEaiICIAEgBHNzakHH36yxAmtBBHcgAmoiAyACcyABIBhqIAIgBHMgA3NqQZvMkckBa0ELdyADaiIBc2pB+PmJ/QFqQRB3IAFqIgRqIAEgD2ogAyASaiACIAlqIAEgA3MgBHNqQZvTztoDa0EXdyAEaiICIAFBf3NyIARzakG8u9veAGtBBncgAmoiASAEQX9zciACc2pBl/+rmQRqQQp3IAFqIgMgAkF/c3IgAXNqQdm4r6MFa0EPdyADaiIEaiADIA5qIAEgGGogAiATaiAEIAFBf3NyIANzakHHv7Eba0EVdyAEaiIBIANBf3NyIARzakHDs+2qBmpBBncgAWoiAiAEQX9zciABc2pB7ubMhwdrQQp3IAJqIgMgAUF/c3IgAnNqQYOXwABrQQ93IANqIgRqIAMgDWogAiAWaiABIBFqIAQgAkF/c3IgA3NqQa/E7tMHa0EVdyAEaiIBIANBf3NyIARzakHP/KH9BmpBBncgAWoiAiAEQX9zciABc2pBoLLMDmtBCncgAmoiAyABQX9zciACc2pB7Pn65wVrQQ93IANqIgRqIAMgEGogAiAUaiABIBdqIAQgAkF/c3IgA3NqQaGjoPAEakEVdyAEaiIBIANBf3NyIARzakH+grLFAGtBBncgAWoiAiAEQX9zciABc2pBy5uUlgRrQQp3IAJqIgMgAUF/c3IgAnNqQbul39YCakEPdyADaiIFaiABIBVqIAUgAkF/c3IgA3NqQe/Y5KMBa0EVd2ohBCAFIAZqIQYgAyAHaiEHIAIgCGohCCIBIBpHDQALIAAgBzYCDCAAIAY2AgggACAENgIEIAAgCDYCAAsgGUFAayQAC5cRAQV/IwBB0ABrIgIkAAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAAtAABBAWsOFwECAwQFBgcICQoLDA0ODxAREhcTFBUWAAsgAkE4akIANwIAIAJBATYCMCACQYTKwAA2AiwgAkGMrMIANgI0IAEoAhQgAUEYaigCACACQSxqEC8hAwwXCyACQThqQgA3AgAgAkEBNgIwIAJBnMrAADYCLCACQYyswgA2AjQgASgCFCABQRhqKAIAIAJBLGoQLyEDDBYLIAJBOGpCADcCACACQQE2AjAgAkG0ysAANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMFQsgAiAAQQRqNgJMIAIgAEEIajYCJCACQThqQgI3AgAgAkEYakETNgIAIAJBAjYCMCACQfDKwAA2AiwgAkETNgIQIAFBGGooAgAhACACIAJBDGo2AjQgAiACQSRqNgIUIAIgAkHMAGo2AgwgASgCFCAAIAJBLGoQLyEDDBQLIAIgAEEBajYCJCACQThqQgE3AgAgAkEBNgIwIAJBjMvAADYCLCACQRQ2AhAgAUEYaigCACEAIAIgAkEMajYCNCACIAJBJGo2AgwgASgCFCAAIAJBLGoQLyEDDBMLIAJBOGpCADcCACACQQE2AjAgAkGwy8AANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMEgsgAiAAQQFqNgIkIAJBOGpCATcCACACQQE2AjAgAkHQy8AANgIsIAJBEDYCECABQRhqKAIAIQAgAiACQQxqNgI0IAIgAkEkajYCDCABKAIUIAAgAkEsahAvIQMMEQsgAiAAQQFqNgIkIAJBOGpCATcCACACQQI2AjAgAkGAzMAANgIsIAJBEDYCECABQRhqKAIAIQAgAiACQQxqNgI0IAIgAkEkajYCDCABKAIUIAAgAkEsahAvIQMMEAsgAkE4akIANwIAIAJBATYCMCACQaDMwAA2AiwgAkGMrMIANgI0IAEoAhQgAUEYaigCACACQSxqEC8hAwwPCyACIABBAWo2AiQgAkE4akIBNwIAIAJBATYCMCACQcTMwAA2AiwgAkEVNgIQIAFBGGooAgAhACACIAJBDGo2AjQgAiACQSRqNgIMIAEoAhQgACACQSxqEC8hAwwOCyACQThqQgA3AgAgAkEBNgIwIAJB6MzAADYCLCACQYyswgA2AjQgASgCFCABQRhqKAIAIAJBLGoQLyEDDA0LIAJBOGpCADcCACACQQE2AjAgAkGIzcAANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMDAsgAkE4akIANwIAIAJBATYCMCACQaDNwAA2AiwgAkGMrMIANgI0IAEoAhQgAUEYaigCACACQSxqEC8hAwwLCyACQThqQgA3AgAgAkEBNgIwIAJByM3AADYCLCACQYyswgA2AjQgASgCFCABQRhqKAIAIAJBLGoQLyEDDAoLIAIgAEEEajYCJCACQThqQgE3AgAgAkEBNgIwIAJB3M3AADYCLCACQRY2AhAgAUEYaigCACEAIAIgAkEMajYCNCACIAJBJGo2AgwgASgCFCAAIAJBLGoQLyEDDAkLIAJBOGpCADcCACACQQE2AjAgAkHkzcAANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMCAsgAkE4akIANwIAIAJBATYCMCACQZzOwAA2AiwgAkGMrMIANgI0IAEoAhQgAUEYaigCACACQSxqEC8hAwwHCyACQThqQgA3AgAgAkEBNgIwIAJBtM7AADYCLCACQYyswgA2AjQgASgCFCABQRhqKAIAIAJBLGoQLyEDDAYLIAJBOGpCADcCACACQQE2AjAgAkHQzsAANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMBQsgAiAAQQFqNgJMIAJBIGpBATYCACACQRhqQQE2AgAgAkEXNgIoIAJBATYCECACQczPwAA2AgwgAiACQcwAajYCJCACQQM6AEggAkEINgJEIAJCIDcCPCACQoCAgIAgNwI0IAJBAjYCLCABQRhqKAIAIQAgAiACQSxqNgIcIAIgAkEkajYCFCABKAIUIAAgAkEMahAvIQMMBAsgAiAAQQRqNgJMIAIgAEEIajYCJCACQThqQgI3AgAgAkEYakETNgIAIAJBAzYCMCACQZzQwAA2AiwgAkETNgIQIAFBGGooAgAhACACIAJBDGo2AjQgAiACQSRqNgIUIAIgAkHMAGo2AgwgASgCFCAAIAJBLGoQLyEDDAMLIAIgAEEEajYCJCACQThqQgE3AgAgAkEBNgIwIAJB1JfCADYCLCACQRg2AhAgAUEYaigCACEAIAIgAkEMajYCNCACIAJBJGo2AgwgASgCFCAAIAJBLGoQLyEDDAILIAIgAEEBajYCJCACQThqQgE3AgAgAkEBNgIwIAJB1NDAADYCLCACQRA2AhAgAUEYaigCACEAIAIgAkEMajYCNCACIAJBJGo2AgwgASgCFCAAIAJBLGoQLyEDDAELIAIgAEEEajYCTCACQThqIgVCADcCAEEBIQMgAkEBNgIwIAJB9M7AADYCLCACQYyswgA2AjQgASgCFCIEIAFBGGooAgAiASACQSxqIgYQLw0AIAAtAAFBF0cEQCACIABBAWo2AiQgBUIBNwIAIAJBAjYCMCACQYjPwAA2AiwgAkEQNgIQIAIgAkEMajYCNCACIAJBJGo2AgwgBCABIAYQLw0BCyACQThqQgE3AgAgAkEBNgIwIAJBnM/AADYCLCACQRA2AhAgAiACQQxqNgI0IAIgAkHMAGo2AgwgBCABIAJBLGoQLyEDCyACQdAAaiQAIAMLjg0CB38HfiMAQRBrIgckACAAvSIJQv////////8HgyELIAlCAFMEQCABQS06AABBASEGCwJAAn8CfwJAAkAgC0IAUiIDIAlCNIinQf8PcSICcgRAIAMgAkECSXIhAyALQoCAgICAgIAIhCALIAIbIglCAoYhCiAJQgGDIQ4gAkG1CGtBzHcgAhsiAkEASARAIAlBqLzBACACIAJBhaJTbEEUdiACQX9HayICaiIEQQR0IgVrKQMAQbC8wQAgBWspAwAgAiAEQbHZtX9sQRN2a0H8AGogByAHQQhqIAMQVSEMIAcpAwghCSAHKQMAIQsgAkECTwRAIApCfyACrYZCf4WDUEUgAkE+S3INAwwECyALIA59IQsgAyAOUHEhCEEBDAQLIAkgAkHB6ARsQRJ2IAJBA0trIgRBBHQiBUHIkcEAaikDACAFQdCRwQBqKQMAIAQgAmsgBEHPpsoAbEETdmpB/QBqIAcgB0EIaiADEFUhDCAHKQMIIQkgBykDACELIARBFk8NAUEAIAqnayAKQgWAp0F7bEYEQEF/IQIDQCACQQFqIQIgCkLNmbPmzJmz5kx+IgpCs+bMmbPmzJkzWA0ACyACIARPDQMMAgsgDlBFBEAgCkIChCEKQX8hAgNAIAJBAWohAiAKQs2Zs+bMmbPmTH4iCkK05syZs+bMmTNUDQALIAsgAiAET619IQsMAgsgA61Cf4UgCnwhCkF/IQIDQCACQQFqIQIgCkLNmbPmzJmz5kx+IgpCtObMmbPmzJkzVA0ACyACIARJDQFBASEIQQAMAwsgASAGaiIBQYjlwQAvAAA7AAAgAUECakGK5cEALQAAOgAAIAlCP4inQQNqIQIMBAtBACEDAn8gC0LkAIAiCiAJQuQAgCINWARAIAkhDSALIQogDCEJQQAMAQsgDKcgDELkAIAiCadBnH9sakExSyEDQQILIQIgCkIKgCIKIA1CCoAiC1YEfwNAIAJBAWohAiAJIgxCCoAhCSAKQgqAIgogCyINQgqAIgtWDQALIAynIAmnQXZsakEESwUgAwsgCSANUXIMAgtBAQshBUEAIQMCQCALQgqAIg0gCUIKgCIPWARAQQAhAiAJIQogDCELDAELQQAhAgNAIAhBACAJp2sgDyIKp0F2bEZxIQggAkEBaiECIAUgA0H/AXFFcSEFIAynIAxCCoAiC6dBdmxqIQMgCyEMIA1CCoAiDSAKIglCCoAiD1YNAAsLAkACQCAIRQ0AQQAgCqdrIApCCoAiDKdBdmxHDQADQCACQQFqIQIgBSADQf8BcUVxIQUgC6cgC0IKgCIJp0F2bGohAyAJIQtBACAMp2sgDCIKQgqAIgynQXZsRg0ACwwBCyALIQkLIA6nIAhBf3NyIAkgClFxQQRBBSAJQgGDUBsgAyAFGyADIANB/wFxQQVGG0H/AXFBBEtyCyEDAkACQAJAIAIgBGoiBEEATiAEAn9BESAJIAOtfCIJQv//g/6m3uERVg0AGkEQIAlC//+Zpuqv4wFWDQAaQQ8gCUL//+iDsd4WVg0AGkEOIAlC/7/K84SjAlYNABpBDSAJQv+flKWNHVYNABpBDCAJQv/P28P0AlYNABpBCyAJQv/Hr6AlVg0AGkEKIAlC/5Pr3ANWDQAaQQkgCUL/wdcvVg0AGkEIIAlC/6ziBFYNABpBByAJQr+EPVYNABpBBiAJQp+NBlYNABpBBSAJQo/OAFYNABpBBCAJQucHVg0AGkEDIAlC4wBWDQAaQQJBASAJQglWGwsiAmoiA0ERSHFFBEAgA0EBayIEQRBJDQEgA0EEakEFSQ0CIAEgBmoiBUEBaiEDIAJBAUcNAyADQeUAOgAAIAUgCadBMGo6AAAgBCABIAZBAnIiAmoQlwEgAmohAgwECyAJIAEgAiAGamoiBRA+IAIgA0gEQCAFQTAgBBC7AhoLIAEgAyAGaiICakGu4AA7AAAgAkECaiECDAMLIAkgASAGQQFqIgQgAmoiAmoQPiABIAZqIAEgBGogAxC9AiABIAMgBmpqQS46AAAMAgsgASAGaiIFQbDcADsAAEECIANrIQQgA0EASARAIAVBAmpBMEEDIAQgBEEDTBtBAmsQuwIaCyAJIAEgAiAGaiAEaiICahA+DAELIAkgAiAGaiICIAFqQQFqIgYQPiAFIAMtAAA6AAAgA0EuOgAAIAZB5QA6AAAgBCABIAJBAmoiAmoQlwEgAmohAgsgB0EQaiQAIAILwA4BBn8jAEFAaiIEJAACQAJAIAACfwJAAkAgASgCCCIFIAEoAgQiB08NAANAIAEoAgAhCCAFIQMCQANAIAMgCGotAAAiBkGIjcIAai0AAA0BIAEgA0EBaiIDNgIIIAMgB0kNAAsgAyEFDAILAkACfwJAAkACQAJAAkACQAJAAkAgBkHcAEcEQCAGQSJGDQEgASADQQFqIgE2AgggBEEQaiAIIAcgARC2AUG4scIALQAAGiAEKAIUIQIgBCgCECEBQRQQCiIFRQ0QIAUgATYCDCAFQRA2AgAgACAFNgIEIAUgAjYCEAwNCyADIAVPBEAgAiAFIAhqIAMgBWsQ5QEgASADQQFqIgY2AgggBiAHTwRAIARBIGogCCAHIAYQtgFBuLHCAC0AABogBCgCJCECIAQoAiAhAUEUEAoiA0UNESADIAE2AgwgA0EENgIAIAMgAjYCEAwICyABIANBAmoiBTYCCAJAAkACQAJAAkACQAJAAkACQCAGIAhqLQAAIgNB7QBNBEAgA0HhAE0EQCADQSJGDQMgA0EvRg0EIANB3ABHDQIgAigCCCIDIAIoAgRGBEAgAiADEOEBIAIoAgghAwsgAiADQQFqNgIIIAIoAgAgA2pB3AA6AAAMFQsgA0HiAGsOBQQBAQEFAQsgA0HuAGsOCAUAAAAGAAcIAAsgBEEYaiAIIAcgBRC2AUG4scIALQAAGiAEKAIcIQIgBCgCGCEBQRQQCiIDRQ0YIAMgATYCDCADQQw2AgAgAyACNgIQDA8LIAIoAggiAyACKAIERgRAIAIgAxDhASACKAIIIQMLIAIgA0EBajYCCCACKAIAIANqQSI6AAAMEQsgAigCCCIDIAIoAgRGBEAgAiADEOEBIAIoAgghAwsgAiADQQFqNgIIIAIoAgAgA2pBLzoAAAwQCyACKAIIIgMgAigCBEYEQCACIAMQ4QEgAigCCCEDCyACIANBAWo2AgggAigCACADakEIOgAADA8LIAIoAggiAyACKAIERgRAIAIgAxDhASACKAIIIQMLIAIgA0EBajYCCCACKAIAIANqQQw6AAAMDgsgAigCCCIDIAIoAgRGBEAgAiADEOEBIAIoAgghAwsgAiADQQFqNgIIIAIoAgAgA2pBCjoAAAwNCyACKAIIIgMgAigCBEYEQCACIAMQ4QEgAigCCCEDCyACIANBAWo2AgggAigCACADakENOgAADAwLIAIoAggiAyACKAIERgRAIAIgAxDhASACKAIIIQMLIAIgA0EBajYCCCACKAIAIANqQQk6AAAMCwsgBEEsaiABEFIgBC8BLA0CIAQvAS4iBkGA+ANxIgVBgLADRwRAIAVBgLgDRgRAIARBFDYCNCABIARBNGoQvwEhAwwJCyAGQYCwv39zQf+PvH9NDQYgBEEANgI0IAZBgAFJDQQgBkGAEEkEQCAEIAZBP3FBgAFyOgA1IAQgBkEGdkHAAXI6ADRBAgwLCyAEIAZBP3FBgAFyOgA2IAQgBkEMdkHgAXI6ADQgBCAGQQZ2QT9xQYABcjoANUEDDAoLIARBNGoiByABEKEBIAQtADQNBiAELQA1IAEgASgCCCIDQQFqNgIIQdwARwRAIARBFzYCNCABIAcQvwEhAwwICyAEQTRqIgcgARChASAELQA0DQYgBC0ANSABIANBAmo2AghB9QBHBEAgBEEXNgI0IAEgBxC/ASEDDAgLIARBNGoiByABEFIgBC8BNA0GIAQvATYiA0GAQGtB//8DcUGA+ANJDQQgA0GAyABqQf//A3EgBkGA0ABqQf//A3FBCnRyIgVBgIAEaiIGQYCAxABHIAZBgLADc0GAgMQAa0H/j7x/S3ENCCAEQQ82AjQgASAHEL8BIQMMBwsgBSADQeiMwgAQugEACyACKAIIBEAgAyAFTwRAIAIgBSAIaiADIAVrEOUBIAEgA0EBajYCCCAAIAIoAgg2AgggACACKAIANgIEQQEMDgsgBSADQciMwgAQugEACyADIAVPBEAgACADIAVrNgIIIAAgBSAIajYCBCABIANBAWo2AghBAAwNCyAFIANB2IzCABC6AQALIAQoAjAhAwwECyAEIAY6ADRBAQwFCyAEQRQ2AjQgASAEQTRqEL8BIQMMAgtBgJfCAEErQYiPwgAQ3gEACyAEKAI4IQMLIAAgAzYCBAwFCyAEIANBP3FBgAFyOgA3IAQgBUEGdkE/cUGAAXI6ADYgBCAGQQx2QT9xQYABcjoANSAEIAZBEnZBB3FB8AFyOgA0QQQLIQMgAiAEQTRqIAMQ5QEgASgCBCEHIAEoAgghBQsgBSAHSQ0ACwsgBSAHRw0CIARBCGogASgCACAHIAcQtgFBuLHCAC0AABogBCgCDCECIAQoAgghAUEUEAoiBUUNAyAFIAE2AgwgBUEENgIAIAAgBTYCBCAFIAI2AhALQQILNgIAIARBQGskAA8LIAUgB0G4jMIAELcBAAsAC98LAQt/AkACQAJAIAAoAgAiCiAAKAIIIgNyBEACQCADRQ0AIAEgAmohCCAAQQxqKAIAQQFqIQkgASEEA0ACQCAEIQMgCUEBayIJRQ0AIAMgCEYNAgJ/IAMsAAAiBkEATgRAIAZB/wFxIQYgA0EBagwBCyADLQABQT9xIQcgBkEfcSEEIAZBX00EQCAEQQZ0IAdyIQYgA0ECagwBCyADLQACQT9xIAdBBnRyIQcgBkFwSQRAIAcgBEEMdHIhBiADQQNqDAELIARBEnRBgIDwAHEgAy0AA0E/cSAHQQZ0cnIiBkGAgMQARg0DIANBBGoLIgQgBSADa2ohBSAGQYCAxABHDQEMAgsLIAMgCEYNACADLAAAIgRBAE4gBEFgSXIgBEFwSXJFBEAgBEH/AXFBEnRBgIDwAHEgAy0AA0E/cSADLQACQT9xQQZ0IAMtAAFBP3FBDHRycnJBgIDEAEYNAQsCQAJAIAVFDQAgAiAFTQRAQQAhAyACIAVGDQEMAgtBACEDIAEgBWosAABBQEgNAQsgASEDCyAFIAIgAxshAiADIAEgAxshAQsgCkUNAyAAKAIEIQsgAkEQTwRAIAIgASABQQNqQXxxIgZrIglqIgpBA3EhB0EAIQhBACEDIAEgBkcEQCAGIAFBf3NqQQNPBEBBACEFA0AgAyABIAVqIgQsAABBv39KaiAEQQFqLAAAQb9/SmogBEECaiwAAEG/f0pqIARBA2osAABBv39KaiEDIAVBBGoiBQ0ACwsgASEEA0AgAyAELAAAQb9/SmohAyAEQQFqIQQgCUEBaiIJDQALCwJAIAdFDQAgBiAKQXxxaiIELAAAQb9/SiEIIAdBAUYNACAIIAQsAAFBv39KaiEIIAdBAkYNACAIIAQsAAJBv39KaiEICyAKQQJ2IQcgAyAIaiEFA0AgBiEJIAdFDQRBwAEgByAHQcABTxsiCEEDcSEKIAhBAnQhDEEAIQQgCEEETwRAIAYgDEHwB3FqIQ0gBiEDA0AgBCADKAIAIgRBf3NBB3YgBEEGdnJBgYKECHFqIANBBGooAgAiBEF/c0EHdiAEQQZ2ckGBgoQIcWogA0EIaigCACIEQX9zQQd2IARBBnZyQYGChAhxaiADQQxqKAIAIgRBf3NBB3YgBEEGdnJBgYKECHFqIQQgA0EQaiIDIA1HDQALCyAHIAhrIQcgCSAMaiEGIARBCHZB/4H8B3EgBEH/gfwHcWpBgYAEbEEQdiAFaiEFIApFDQALIAkgCEH8AXFBAnRqIgQoAgAiA0F/c0EHdiADQQZ2ckGBgoQIcSEDIApBAUYNAiADIAQoAgQiA0F/c0EHdiADQQZ2ckGBgoQIcWohAyAKQQJGDQIgAyAEKAIIIgNBf3NBB3YgA0EGdnJBgYKECHFqIQMMAgsgAkUEQEEAIQUMAwsgAkEDcSEEAkAgAkEESQRAQQAhBUEAIQkMAQtBACEFIAEhAyACQXxxIgkhBgNAIAUgAywAAEG/f0pqIANBAWosAABBv39KaiADQQJqLAAAQb9/SmogA0EDaiwAAEG/f0pqIQUgA0EEaiEDIAZBBGsiBg0ACwsgBEUNAiABIAlqIQMDQCAFIAMsAABBv39KaiEFIANBAWohAyAEQQFrIgQNAAsMAgsMAgsgA0EIdkH/gRxxIANB/4H8B3FqQYGABGxBEHYgBWohBQsCQCAFIAtJBEAgCyAFayEFQQAhAwJAAkACQCAALQAgQQFrDgIAAQILIAUhA0EAIQUMAQsgBUEBdiEDIAVBAWpBAXYhBQsgA0EBaiEDIABBGGooAgAhBCAAKAIQIQYgACgCFCEAA0AgA0EBayIDRQ0CIAAgBiAEKAIQEQEARQ0AC0EBDwsMAQtBASEDIAAgASACIAQoAgwRAAAEfyADBUEAIQMCfwNAIAUgAyAFRg0BGiADQQFqIQMgACAGIAQoAhARAQBFDQALIANBAWsLIAVJCw8LIAAoAhQgASACIABBGGooAgAoAgwRAAALoAsCEH8HfiMAQYABayIGJAAgBiACNgI8IAYgATYCOCAGIAM2AkAgBiAFNgJEIAEoAigiCCEHAkACQAJAAkACQAJAAkAgCEEFTwR/IAEoAgQFIAcLIAVHDQAgAigCKCIJIQcgCUEFTwR/IAIoAgQFIAcLIAVHDQAgAygCKCIMIQcgDEEFTwR/IAMoAgQFIAcLIAVHDQAgAEEoaiIKIQsgACgCKCIHQQVPBH8gAEEEaiELIAAoAgQFIAcLBEAgC0EANgIACyAAIAVBAXQQ0AECQAJAIAUEQCACKAIIIAJBCGogCUEESyIHGyERIAMoAggiEiADQQhqIhMgDEEESyINGyELIAEoAgggAUEIaiAIQQRLIg4bIRQgAigCBCAJIAcbIQ8gAygCBCIVIAwgDRshDSABKAIEIAggDhshDiAAQQhqIQdBACEIA0AgBkEwaiAAIAggBSAIaiIJQYD4wAAQwAEgCCAPTw0FIAhBA3QhEAJAIAYoAjQiASAOIAEgDkkbIgNFBEBCACEXDAELIAYoAjAhASAQIBFqKQMAIRZCACEXIBQhAgNAIAZBIGogAikDAEIAIBYQsAEgASAXIAYpAyAiGCABKQMAfCIafCIbNwMAIBcgG1atIAZBKGopAwAgGCAaVq18fCEXIAFBCGohASACQQhqIQIgA0EBayIDDQALCyAHIQIgCigCACIBQQVPBEAgACgCCCECIAAoAgQhAQsgASAITQ0GIAIgEGopAwAhFiAGQRhqIAAgCCAJQbD4wAAQwAECQCAGKAIcIgEgDSABIA1JGyIDRQRAQgAhFgwBCyAGKAIYIQEgBCAWfiEYQgAhFiALIQIDQCAGQQhqIAIpAwBCACAYELABIAEgFiAGKQMIIhogASkDAHwiG3wiHDcDACAWIBxWrSAGQRBqKQMAIBogG1atfHwhFiABQQhqIQEgAkEIaiECIANBAWsiAw0ACwsgByECIAooAgAiAUEFTwRAIAAoAgghAiAAKAIEIQELIAEgCU0NByACIAlBA3RqIBYgFyAZfCIZfCIYNwMAIBcgGVYgFiAYVnIiAa0hGSAIQQFqIgggBUcNAAsgAQ0BCyAKKAIAIgJBBE0EfyAAQQhqBSAAKAIEIQIgACgCCAshASACIAVJDQYgAiAFQQF0Rw0HIAVFDQEgBUEDdCEDIAUhAgNAIAEpAwAhBCABIAEgA2oiBykDADcDACAHIAQ3AwAgAUEIaiEBIAJBAWsiAg0ACwwBCyAKKAIAIgFBBU8EQCAAKAIIIQcgACgCBCEBCyABIAVJDQcgByABQQN0aiAHIAVBA3QiC2prQQN2IgEgFSAMIAxBBEsiAhsiAyABIANJGyEBIBIgEyACGyECQgAhFiAFIQMDQCABRQ0BIAcgByALaikDACIXIBYgAikDACIEfXwiFjcDACAWIAQgF0J/hSIWhIMgBCAWg4RCP4chFiABQQFrIQEgB0EIaiEHIAJBCGohAiADQQFrIgMNAAsLIAooAgAiAUEFTwR/IABBBGohCiAAKAIEBSABCyAFSwRAIAogBTYCAAsgBkGAAWokAA8LIAZB/ABqQQQ2AgAgBkH0AGpBGzYCACAGQewAakEbNgIAIAZB1ABqQgQ3AgAgBkEENgJMIAZBoPfAADYCSCAGQRs2AmQgBiAGQeAAajYCUCAGIAZBxABqNgJ4IAYgBkFAazYCcCAGIAZBPGo2AmggBiAGQThqNgJgIAZByABqQcD3wAAQ6wEACyAIIA9BkPjAABC3AQALIAggAUGg+MAAELcBAAsgCSABQcD4wAAQtwEAC0GJmMIAQSNB0PfAABDeAQALIAZB7ABqQgA3AgAgBkEBNgJkIAZB7PTAADYCYCAGQYyswgA2AmggBkHgAGpB4PfAABDrAQALQYmYwgBBI0Hw98AAEN4BAAv3CgEFfyMAQRBrIgMkAAJAAkACQAJAAkACQAJAAkACQAJAIAEOKAUICAgICAgICAEDCAgCCAgICAgICAgICAgICAgICAgICAgGCAgICAcACyABQdwARg0DDAcLIABBgAQ7AQogAEIANwECIABB3OgBOwEADAcLIABBgAQ7AQogAEIANwECIABB3OQBOwEADAYLIABBgAQ7AQogAEIANwECIABB3NwBOwEADAULIABBgAQ7AQogAEIANwECIABB3LgBOwEADAQLIABBgAQ7AQogAEIANwECIABB3OAAOwEADAMLIAJBgIAEcUUNASAAQYAEOwEKIABCADcBAiAAQdzEADsBAAwCCyACQYACcUUNACAAQYAEOwEKIABCADcBAiAAQdzOADsBAAwBCwJAAkACQAJAAkACQCACQQFxBEAgAUELdCEGQQAhAkEhIQVBISEEAkADQAJAAkBBfyAFQQF2IAJqIgVBAnRBpL/AAGooAgBBC3QiByAGRyAGIAdLGyIHQQFGBEAgBSEEDAELIAdB/wFxQf8BRw0BIAVBAWohAgsgBCACayEFIAIgBEkNAQwCCwsgBUEBaiECCwJ/An8CQCACQSBNBEAgAkECdCIFQaS/wABqKAIAQRV2IQQgAkEgRw0BQdcFIQVBHwwCC0EhQSFBlL7AABC3AQALIAVBqL/AAGooAgBBFXYhBUEAIAJFDQEaIAJBAWsLQQJ0QaS/wABqKAIAQf///wBxCyECAkAgBSAEQX9zakUNACABIAJrIQdB1wUgBCAEQdcFTRshBiAFQQFrIQVBACECA0AgBCAGRg0HIAIgBEGowMAAai0AAGoiAiAHSw0BIAUgBEEBaiIERw0ACyAFIQQLIARBAXENAQsgAUEgSQ0FIAFB/wBJDQMgAUGAgARJDQIgAUGAgAhJDQEgAUGwxwxrQdC6K0kgAUHLpgxrQQVJciABQZ70C2tB4gtJIAFB4dcLa0GfGElyciABQX5xQZ7wCkYgAUGinQtrQQ5JciABQWBxQeDNCkYgAUG67gprQQZJcnJyDQUgAUHwgzhrQZD8C0kNBQwDCyADQQhqQQA6AAAgA0EAOwEGIAMgAUEIdkEPcUG09MEAai0AADoADCADIAFBDHZBD3FBtPTBAGotAAA6AAsgAyABQRB2QQ9xQbT0wQBqLQAAOgAKIAMgAUEUdkEPcUG09MEAai0AADoACSABQQFyZ0ECdkECayICIANBBmpqIgRBzr7AAC8AADsAACADIAFBBHZBD3FBtPTBAGotAAA6AA0gBEECakHQvsAALQAAOgAAIANBDmoiBCABQQ9xQbT0wQBqLQAAOgAAIAAgAykBBjcAACADQf0AOgAPIABBCGogBC8BADsAACAAQQo6AAsgACACOgAKDAULIAFB8LLAAEEsQcizwABBxAFBjLXAAEHCAxBODQEMAwsgAUHOuMAAQShBnrnAAEGfAkG9u8AAQa8CEE5FDQILIAAgATYCBCAAQYABOgAADAILIAZB1wVBpL7AABC3AQALIANBCGpBADoAACADQQA7AQYgAyABQQh2QQ9xQbT0wQBqLQAAOgAMIAMgAUEMdkEPcUG09MEAai0AADoACyADIAFBEHZBD3FBtPTBAGotAAA6AAogAyABQRR2QQ9xQbT0wQBqLQAAOgAJIAFBAXJnQQJ2QQJrIgIgA0EGamoiBEHOvsAALwAAOwAAIAMgAUEEdkEPcUG09MEAai0AADoADSAEQQJqQdC+wAAtAAA6AAAgA0EOaiIEIAFBD3FBtPTBAGotAAA6AAAgACADKQEGNwAAIANB/QA6AA8gAEEIaiAELwEAOwAAIABBCjoACyAAIAI6AAoLIANBEGokAAvECAIJfwR+IwBBIGsiCSQAIAEoAigiCiEHIAIoAigiBiEDIAFBKGohCwJAAkACQAJAAkACfgJAAkAgCkEFTwRAIAEoAgQhBwsCQCAGQQVPBH8gAigCBAUgAwsgB00EQCAKQQRNBH8gAUEIagUgASgCBCEKIAEoAggLIQMgBkEETQR/IAJBCGoFIAIoAgQhBiACKAIICyEFIAYgCksNCSAGRQ0GIAMgBkEDdGohCCAGIQQDQCADIAwgAykDAHwiDSAFKQMAfCIONwMAIAwgDVatIA0gDlatfCEMIANBCGohAyAFQQhqIQUgBEEBayIEDQALIAxQDQYgCkEDdCAGQQN0ayEDA0AgA0UNAiAIIAwgCCkDAHwiDTcDACADQQhrIQMgCEEIaiEIIAwgDVatIgxQRQ0ACwwGCyAKQQRNBH8gAUEIagUgASgCBCEKIAEoAggLIQMgBkEETQR/IAJBCGoFIAIoAgQhBiACKAIICyEFIAYgB0kNASAHIApLDQggBwRAIAMgB0EDdGohCCAHIQQDQCADIAwgAykDAHwiDSAFKQMAfCIPNwMAIAwgDVatIA0gD1atfCEMIANBCGohAyAFQQhqIQUgBEEBayIEDQALQgAgDFANBBogCkEDdCAHQQN0ayEDA0AgA0UNBCAIIAwgCCkDAHwiDTcDACADQQhrIQMgCEEIaiEIIA4gDCANVq18IQwgDEIAUg0ACwtCAAwDCyAMUA0EDAMLIAcgBkHo7cAAELgBAAsgDAshDSAJQRhqIAIgB0H47cAAENMBIAkoAhwhAiALKAIAIgNBBU8EQCABKAIEIQMLIAkoAhghBiAJQRBqIAEgAhCTASAJKAIQIgRBgYCAgHhHBEAgBEUNAwALAn8gCygCACIEQQVPBEAgASgCBCIEIANJDQUgASgCCAwBCyADIARLDQQgAUEIagsgA0EDdGoiBSACQQN0IghqIAUgBCADa0EDdBC9AiAFIAYgCBC+AhogCyIDKAIAQQVPBH8gAUEEagUgAwsgAiAEajYCACAJQQhqIAEgB0GI7sAAENMBIAkoAgwiBEUNBCAJKAIIIgIgAikDACIMIA18Ig03AwAgDCANWA0BIAwgDVatIQwgAkEIaiEDIARBA3RBCGshBQNAIAVFDQEgAyAMIAMpAwB8Ig03AwAgA0EIaiEDIAVBCGshBSAMIA1YIAwgDVatIQxFDQALDAELQQQhBQJ/IAsoAgAiAkEETQRAIAFBCGohBCACDAELIAFBBGohCyABKAIIIQQgAiEFIAEoAgQLIgMgBUYEfyABEKABIAFBBGohCyABKAIIIQQgASgCBAUgAwtBA3QgBGpCATcDACALIAsoAgBBAWo2AgALIAAgAUEwEL4CGiAJQSBqJAAPC0Hs8MAAQRFBgPHAABDeAQALQavtwABBHkHM7cAAEN4BAAtBiZjCAEEjQej1wAAQ3gEAC+kJAwV/A34BfCMAQUBqIgIkAAJAAkACQAJ/AkACQAJAAkACQAJAAkAgAC0AAEEBaw4FAAECAwQFCyABKAIAQeLswABB3ezAACAALQABIgAbQQRBBSAAGxDkAQwJCwJAAkACQCAAKAIIQQFrDgIBAgALQRQhBCAAQRBqKQMAIgdCkM4AVARAIAchCAwKCwNAIAJBGGogBGoiAEEEayAHIAdCkM4AgCIIQpDOAH59pyIDQf//A3FB5ABuIgVBAXRB+onCAGovAAA7AAAgAEECayADIAVB5ABsa0H//wNxQQF0QfqJwgBqLwAAOwAAIARBBGshBCAHQv/B1y9WIAghBw0ACwwJC0EUIQQgAEEQaikDACIJIAlCP4ciB4UgB30iB0KQzgBUBEAgByEIDAgLA0AgAkEYaiAEaiIAQQRrIAcgB0KQzgCAIghCkM4Afn2nIgNB//8DcUHkAG4iBUEBdEH6icIAai8AADsAACAAQQJrIAMgBUHkAGxrQf//A3FBAXRB+onCAGovAAA7AAAgBEEEayEEIAdC/8HXL1YgCCEHDQALDAcLIABBEGorAwAiCiAKYiAKvUL///////////8Ag0KAgICAgICA+P8AUXJFBEAgCiACQRhqIgMQDyEAIAEoAgAgAyAAEOQBDAkLIAEoAgBB+PLBAEEEEOQBDAgLIAEoAgAgACgCBCAAQQxqKAIAEDkMBwsgAEEMaigCACEGIAAoAgQhBCABKAIAIgBB5uzAAEEBEOQBQQEhAyAGRQRAQQEhBSAAQfjswABBARDkAUEAIQMLIAZBGGwhAANAIAAEQCADQQFxRQRAIAEoAgBB6OzAAEEBEOQBCyAEIAEQFSAAQRhrIQBBACEDIARBGGohBEEAIQUMAQsLIAUNBiABKAIAQfjswABBARDkAQwGCyAAQQxqKAIAIQRBASEDIAEoAgAiBUHn7MAAQQEQ5AEgAiAEBH8gAwUgBUHc7MAAQQEQ5AFBAAs6ABQgAiABNgIQIAAoAgQiAQ0BQQAhBEEADAILIAEoAgBB+PLBAEEEEOQBDAQLIAIgATYCMCACQQA2AiwgAiABNgIgIAJBADYCHCACIABBCGooAgAiADYCNCACIAA2AiRBAQshACACIAQ2AjggAiAANgIoIAIgADYCGANAIAJBCGogAkEYahBEIAIoAggiAARAIAJBEGogACACKAIMENwBDAEFIAItABRFDQQgAigCECgCAEHc7MAAQQEQ5AEMBAsACwALIAinIgNB4wBKBEAgBEECayIEIAJBGGpqIAMgA0HkAG4iA0HkAGxrQQF0QfqJwgBqLwAAOwAACwJAIANBCk4EQCAEQQJrIgAgAkEYamogA0EBdEH6icIAai8AADsAAAwBCyAEQQFrIgAgAkEYamogA0EwajoAAAsgCUIAUwRAIABBAWsiACACQRhqakEtOgAACyABKAIAIAJBGGogAGpBFCAAaxDkAQwBCyAIpyIDQeMASgRAIARBAmsiBCACQRhqaiADIANB5ABuIgNB5ABsa0EBdEH6icIAai8AADsAAAsCQCADQQpOBEAgBEECayIAIAJBGGpqIANBAXRB+onCAGovAAA7AAAMAQsgBEEBayIAIAJBGGpqIANBMGo6AAALIAEoAgAgAkEYaiAAakEUIABrEOQBCyACQUBrJAALyQoBAX8jAEEwayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgACgCAEEBaw4TAQIDBAUGBwgJCgsMDQ4PEBESEwALIAJBJGpCADcCACACQQE2AhwgAkGAi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBMLIAJBJGpCADcCACACQQE2AhwgAkGYi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEoAhQgACACQRhqEC8MBAsgAkEkakIANwIAIAJBATYCHCACQaiOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAwsgAkEkakIANwIAIAJBATYCHCACQcCOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAgsgAkEkakIANwIAIAJBATYCHCACQeCOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAQsgAkEkakIANwIAIAJBATYCHCACQfyOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8LIAJBMGokAAu2CQEQfyMAQeAAayIDJAACQAJAAkACQAJAIAJFBEBBuLHCAC0AABpBmAMQCiICRQ0DIAJBADsBkgMgAkEANgKIAiACQYwCaiEKIANB0ABqIQggA0HIAGpBBHIhBQNAIAEvAZIDIAZLBEAgA0E8aiABIAdqIgRBjAJqKAIAIARBlAJqKAIAENYBAkACQAJAAkACQAJAAkAgASAJaiIELQAAQQFrDgUBAgMEBQALIANBADoASAwFCyADQQE6AEggAyAEQQFqLQAAOgBJDAQLIAhBCGogBEEQaikDADcDACAIIARBCGopAwA3AwAgA0ECOgBIDAMLIAUgBEEEaigCACAEQQxqKAIAENYBIANBAzoASAwCCyAFIARBBGoQOCADQQQ6AEgMAQsgA0EgaiAEQQRqEOcBIAVBCGogA0EoaigCADYCACAFIAMpAyA3AgAgA0EFOgBICyACLwGSAyIEQQtPDQMgAiAEQQFqOwGSAyAKIARBDGxqIgsgAykCPDcCACALQQhqIANBxABqKAIANgIAIAIgBEEYbGoiBCADKQNINwMAIARBCGogCCkDADcDACAEQRBqIANB2ABqKQMANwMAIAZBAWohBiAHQQxqIQcgCUEYaiEJDAELCyAAIAY2AgggAEEANgIEIAAgAjYCAAwFCyADQQhqIAEoApgDIAJBAWsiDxAXIAMoAggiAkUNA0G4scIALQAAGiADKAIMIQdByAMQCiIERQ0CIAQgAjYCmAMgBEEAOwGSAyAEQQA2AogCIAJBADsBkAMgAiAENgKIAiADIAQ2AgggAyAHQQFqIhA2AgwgA0HIAGpBAnIhCCADQSZqIQ4gA0EiaiEFQZwDIQcgAygCECEKA0AgDCABLwGSA08NAiADQRRqIAEgC2oiAkGMAmooAgAgAkGUAmooAgAQ1gFBACEGAkACQAJAAkACQAJAIAEgCWoiAi0AAEEBaw4FAAECAwQFC0EBIQYgAkEBai0AACERDAQLIA5BCGogAkEQaikBADcBACAOIAJBCGopAQA3AQBBAiEGDAMLIANByABqIAJBBGooAgAgAkEMaigCABDWASAFQQhqIANB0ABqKAIANgEAIAUgAykCSDcBAEEDIQYMAgtBBCEGIANByABqIAJBBGoQOCAFQQhqIANB0ABqKAIANgEAIAUgAykCSDcBAAwBCyADQcgAaiACQQRqEOcBIAVBCGogA0HQAGooAgA2AQAgBSADKQNINwEAQQUhBgsgA0E8aiABIAdqKAIAIA8QFyADKAJEIRIgAygCQCENIAMoAjwhAiAIIAMpASA3AQAgCEEIaiADQShqKQEANwEAIAhBDmogA0EuaikBADcBACADIBE6AEkgAyAGOgBIIAJFBEBBuLHCAC0AABpBmAMQCiICRQ0EIAJBADsBkgMgAkEANgKIAkEAIQ0LIAQgECADQRRqIANByABqIAIgDRCLASAMQQFqIQwgCUEYaiEJIAtBDGohCyAHQQRqIQcgCiASakEBaiEKDAALAAtB0OfBAEEgQczowQAQ3gEACyAAIAMpAgg3AgAgAEEIaiAKNgIADAILAAtBgJfCAEErQfiDwAAQ3gEACyADQeAAaiQAC4wIAgl/A34jAEHwAWsiBiQAIAZBAjYCaCAGQgQ3AmAgBkEANgKQASAGQQA2ArgBIAZBkAFqIgQgBkHgAGoQMyAGQcABaiIFIARBMBC+AhogBUEEciEIIAZByAFqIQkgBkHoAWohCiAGKALIASEDA0AgCSEEIAYoAugBIgchBSAHQQVJIgtFBEAgBigCxAEhBSADIQQLAkAgBUUNACAFQQN0IARqQQhrKQMAQgBSDQAgCiEFIAtFBEAgBigCxAEhByAIIQULIAdFDQEgBSAHQQFrNgIADAELCyAGQZABaiAGQcABakEwEL4CGiABIAYgAUEwEL4CIgNBkAFqQTAQvgIhBiADQTBqIANBMBC+AhogAkEGdiEFAkAgAkE/TQRAIANB4ABqIAMQrAEMAQsgA0EwaiEBIAMoAjBBAkYEQCADKAI0IQELIAEoAigiBEEFTwRAIAEoAgQhBAsgA0EANgLAASADQQA2AugBIANBwAFqIgEgBCAFakEBahCtASADQZABaiIEIAFBMBC+AhogBCAFEEkgA0EwaiEBIANBkAFqIgkCfyADKAIwQQJGBEAgAygCNCEBCyABKAIoIgRBBE0EQCABQQhqDAELIAEoAgQhBCABKAIICyIBIAEgBEEDdGoQQyADQeAAaiAJQTAQvgIaCwJAIAJBP3EiCUUNACADKAKIASIBQQRNBH8gA0HoAGoFIAMoAmQhASADKAJoCyEEIAEgBU8EQCABIAVGDQEgA0GIAWohCCABQQN0IAVBA3QiBWshASAEIAVqIQdBACACa0E/ca0hDSAJrSEOA0AgByAMIAcpAwAiDCAOhoQ3AwAgB0EIaiEHIAwgDYghDCABQQhrIgENAAsgDFANAUEEIQECfyADKAKIASIFQQRNBEAgBSEHIANB6ABqDAELIANB4ABqQQRyIQggAygCZCEHIAUhASADKAJoCyEEIAEgB0YEQCADQeAAaiIBEKABIAFBBHIhCCADKAJkIQcgAygCaCEECyAEIAdBA3RqIAw3AwAgCCAIKAIAQQFqNgIADAELIAUgAUGQ/cAAELkBAAsgA0HAAWoiASADQeAAakEwEL4CGiABQQRyIQUgA0HIAWohCCADQegBaiEJIAMoAsgBIQoDQCAIIQQgAygC6AEiByEBIAdBBUkiC0UEQCAKIQQgAygCxAEhAQsCQCABRQ0AIAFBA3QgBGpBCGspAwBCAFINACAJIQEgC0UEQCADKALEASEHIAUhAQsgB0UNASABIAdBAWs2AgAMAQsLIANBkAFqIANBwAFqQTAQvgIaAkAgAkHAAEkNACADKAIwQQJGDQAgA0EwahCPAgsgBhCPAiAAIAYgA0GQAWpBMBC+AkE4EL4CGiADQfABaiQAC5UIAgp/AX4jAEHAAWsiBCQAIARBAjYCOCAEQgQ3AjAgBEEANgJgIARBADYCiAEgBEHgAGoiAiAEQTBqEDMgBEGQAWoiAyACQTAQvgIaIANBBHIhBiAEQZgBaiEHIARBuAFqIQggBCgCmAEhCQNAIAchAyAEKAK4ASIFIQIgBUEFSSIBRQRAIAQoApQBIQIgCSEDCwJAIAJFDQAgAkEDdCADakEIaykDAEIAUg0AIAghAiABRQRAIAQoApQBIQUgBiECCyAFRQ0BIAIgBUEBazYCAAwBCwsgBEHgAGogBEGQAWpBMBC+AhogACAEIABBMBC+AiIBQeAAakEwEL4CIQogASECAkACQAJAAn8gASgCACIEQQJGBEAgASgCBCECCwJAIAIoAigiAEEFTwR/IAIoAgQFIAALBEAgBEECRw0DIAEoAgQiAygCKCIAQQRLDQEgA0EIagwCCyABQQI2AjggAUIENwIwIAFBADYCYCABQQA2AogBIAFB4ABqIgMgAUEwahAzIAFBkAFqIgAgA0EwEL4CGiAAQQRyIQYgAUGYAWohByABQbgBaiEIIAEoApgBIQkDQCAHIQMgASgCuAEiAiEAIAJBBUkiBUUEQCAJIQMgASgClAEhAAsCQCAARQ0AIABBA3QgA2pBCGspAwBCAFINACAIIQAgBUUEQCABKAKUASECIAYhAAsgAkUNASAAIAJBAWs2AgAMAQsLIAFB4ABqIAFBkAFqQTAQvgIaIARBAkYNBCABEI8CDAQLIAMoAgQhACADKAIICyECIAFBADYCkAEgAUEANgK4ASABQZABaiIDIAIgAiAAQQN0ahBDIAFBMGogA0EwEL4CGgwBCyABQeAAaiABQTAQvgIaIAEoAogBIgBBBE0EfyABQegAagUgASgCZCEAIAEoAmgLIQIgAUEANgKQASABQQA2ArgBIAFBkAFqIgMgAiACIABBA3RqEEMgAUEwaiADQTAQvgIaIAFB4ABqEI8CCyABKAJYIgJBBE0EfyABQThqBSABKAI0IQIgASgCOAshACACBEAgAEEIayEDIAJBA3QhAgNAIAIgA2oiACALIAApAwAiC0IBiIQ3AwAgC0I/hiELIAJBCGsiAg0ACwsgAUGQAWoiACABQTBqQTAQvgIaIABBBHIhBiABQZgBaiEHIAFBuAFqIQggASgCmAEhCQNAIAchAyABKAK4ASICIQAgAkEFSSIFRQRAIAkhAyABKAKUASEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAghACAFRQRAIAEoApQBIQIgBiEACyACRQ0BIAAgAkEBazYCAAwBCwsgAUHgAGogAUGQAWpBMBC+AhoLIAoQjwIgCiABQeAAakEwEL4CGiABQcABaiQAC+0HAgh/BX4jAEHQAGsiBCQAIAIoAigiBSEJIAVBBU8EQCACKAIEIQkLAkACQAJAAn8CQAJAAn8gASgCKCIIQQVPBEAgCSABKAIESQ0DIAEoAgQhCCABKAIIDAELIAggCUsNASABQQhqCyEDIAVBBE0EfyACQQhqBSACKAIEIQUgAigCCAshAQJAIAggBSAFIAhLGyIJBEAgASEGIAkhBwNAIAYgCyADKQMAIgsgBikDACINfSIOfCIPNwMAIA4gD1atIAwgCyANVK19fCILQj+HIQwgA0EIaiEDIAZBCGohBiAHQQFrIgcNAAsgBSAISQ0BIAtCAFINBgwFCyAFIAhPDQQLQfT/wABBIUGYgMEAEN4BAAsgAUEIagwBCyABKAIEIQggASgCCAshAwJAAkAgCCAJTwRAIAJBKGohCCAJAn8gBUEETQRAIAJBCGohBiAFDAELIAIoAgghBiACKAIECyIHIAcgCUsbIgcEQANAIAYgCyADKQMAIgsgBikDACINfSIOfCIPNwMAIA4gD1atIAwgCyANVK19fCILQj+HIQwgA0EIaiEDIAZBCGohBiAHQQFrIgcNAAsgCCgCACEFCyAEQRhqIAEgCUGo7sAAENMBIAQoAhwhASAFQQVPBEAgAigCBCEFCyAEKAIYIQYgBEEQaiACIAEQkwEgBCgCECIHQYGAgIB4RwRAIAdFDQIACwJ/IAgoAgAiA0EFTwRAIAIoAgQiAyAFSQ0EIAIoAggMAQsgAyAFSQ0DIAJBCGoLIAVBA3RqIgcgAUEDdCIKaiAHIAMgBWtBA3QQvQIgByAGIAoQvgIaIAJBBGogCCAIKAIAQQVPGyABIANqNgIAIAtQDQUgBEEIaiACIAlBuO7AABDTASAEKAIIIAQoAgxB4O3AAEEBEEwMBQsgCSAIQZjuwAAQuAEAC0Hs8MAAQRFBgPHAABDeAQALQavtwABBHkHM7cAAEN4BAAsgASAJQQN0IgdqIQMgBUEDdCAHayEGA0AgBkUNAiAGQQhrIQYgAykDACADQQhqIQNQDQALCyAEQSxqQgA3AgAgBEEBNgIkIARB3P/AADYCICAEQYyswgA2AiggBEEgakGogMEAEOsBAAsgBEEgaiIBIAJBMBC+AhogAUEEciEBIARBKGohAiAEQcgAaiEFIAQoAighCQNAIAIhByAEKAJIIgYhAyAGQQVJIghFBEAgBCgCJCEDIAkhBwsCQCADRQ0AIANBA3QgB2pBCGspAwBCAFINACAFIQMgCEUEQCAEKAIkIQYgASEDCyAGRQ0BIAMgBkEBazYCAAwBCwsgACAEQSBqQTAQvgIaIARB0ABqJAALtwcBBX8jAEHwAGsiBSQAIAJBA3QhByACIQgCQAJAAkADQCAIIQYgB0UEQEEAIQYMAgsgBkEBayEIIAdBCGsiByABaikDAFANAAsgAiAGSQ0BCyAEQQN0IQcgBCECAkADQCACIQggB0UEQEEAIQgMAgsgCEEBayECIAdBCGsiByADaikDAFANAAsgBCAISQ0CCwJAIAEgBiADIAgQqAFB/wFxIgJBAUcEQCACQf8BRwRAIAVBAjYCDCAFQgQ3AgQgBUEANgIQIAVBADYCOCAFQRBqIgEgBUEEahAzIAVBQGsiAiABQTAQvgIaIAJBBHIhASAFQcgAaiECIAVB6ABqIQMgBSgCSCEEA0AgAiEIIAUoAmgiByEGIAdBBUkiCUUEQCAFKAJEIQYgBCEICwJAIAZFDQAgBkEDdCAIakEIaykDAEIAUg0AIAMhBiAJRQRAIAUoAkQhByABIQYLIAdFDQEgBiAHQQFrNgIADAELCyAAQQhqIAVBQGtBMBC+AhogAEEBOgAADAILIAVBADYCQCAFQQA2AmggBUFAayICIAMgAyAIQQN0ahBDIAVBEGogAkEwEL4CGiAFKAI4IgdBBE0EfyAFQRhqBSAFKAIUIQcgBSgCGAsgByABIAYQTCAFQUBrIgEgBUEQakEwEL4CGiABQQRyIQEgBUHIAGohAiAFQegAaiEDIAUoAkghBANAIAIhCCAFKAJoIgchBiAHQQVJIglFBEAgBSgCRCEGIAQhCAsCQCAGRQ0AIAZBA3QgCGpBCGspAwBCAFINACADIQYgCUUEQCAFKAJEIQcgASEGCyAHRQ0BIAYgB0EBazYCAAwBCwsgAEEIaiAFQUBrQTAQvgIaIABBADoAAAwBCyAFQQA2AkAgBUEANgJoIAVBQGsiAiABIAEgBkEDdGoQQyAFQRBqIAJBMBC+AhogBSgCOCIHQQRNBH8gBUEYagUgBSgCFCEHIAUoAhgLIAcgAyAIEEwgBUFAayIBIAVBEGpBMBC+AhogAUEEciEBIAVByABqIQIgBUHoAGohAyAFKAJIIQQDQCACIQggBSgCaCIHIQYgB0EFSSIJRQRAIAUoAkQhBiAEIQgLAkAgBkUNACAGQQN0IAhqQQhrKQMAQgBSDQAgAyEGIAlFBEAgBSgCRCEHIAEhBgsgB0UNASAGIAdBAWs2AgAMAQsLIABBCGogBUFAa0EwEL4CGiAAQQI6AAALIAVB8ABqJAAPCyAGIAJBuIDBABC4AQALIAggBEHIgMEAELgBAAvTCAMDfwF+AXwjAEFAaiICJAACfwJAAkACQCAALQAAIgNBA2sOBQEAAAACAAsCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIANBAWsOEQIDAAQFBgAHCAkKCwwNDg8QAQsACyACIAAtAAE6ACAgAkE0akIBNwIAIAJBAjYCLCACQZzlwQA2AiggAkE0NgIEIAFBGGooAgAhACACIAI2AjAgAiACQSBqNgIAIAEoAhQgACACQShqEC8MEQsgAiAAKQMINwMgIAJBNGpCATcCACACQQI2AiwgAkG45cEANgIoIAJBNTYCBCABQRhqKAIAIQAgAiACNgIwIAIgAkEgajYCACABKAIUIAAgAkEoahAvDBALIAIgACkDCDcDICACQTRqQgE3AgAgAkECNgIsIAJBuOXBADYCKCACQTY2AgQgAUEYaigCACEAIAIgAjYCMCACIAJBIGo2AgAgASgCFCAAIAJBKGoQLwwPCyACIAAoAgQ2AiAgAkE0akIBNwIAIAJBAjYCLCACQdTlwQA2AiggAkE3NgIEIAFBGGooAgAhACACIAI2AjAgAiACQSBqNgIAIAEoAhQgACACQShqEC8MDgsgAiAAKQIENwIgIAJBNGpCATcCACACQQE2AiwgAkHs5cEANgIoIAJBODYCBCABQRhqKAIAIQAgAiACNgIwIAIgAkEgajYCACABKAIUIAAgAkEoahAvDA0LIAEoAhRB9OXBAEEKIAFBGGooAgAoAgwRAAAMDAsgASgCFEH+5cEAQQwgAUEYaigCACgCDBEAAAwLCyABKAIUQYrmwQBBDiABQRhqKAIAKAIMEQAADAoLIAEoAhRBmObBAEEIIAFBGGooAgAoAgwRAAAMCQsgASgCFEGg5sEAQQMgAUEYaigCACgCDBEAAAwICyABKAIUQaPmwQBBBCABQRhqKAIAKAIMEQAADAcLIAEoAhRBp+bBAEEMIAFBGGooAgAoAgwRAAAMBgsgASgCFEGz5sEAQQ8gAUEYaigCACgCDBEAAAwFCyABKAIUQcLmwQBBDSABQRhqKAIAKAIMEQAADAQLIAEoAhRBz+bBAEEOIAFBGGooAgAoAgwRAAAMAwsgASgCFCAAKAIEIABBCGooAgAgAUEYaigCACgCDBEAAAwCCwJ/IAArAwgiBr0iBUKAgICAgICA+P8Ag0KAgICAgICA+P8AUgRAIAJBKGohACAGIAAQDwwBC0G5kcEAQbyRwQAgBUIAWSIDG0HAkcEAIAVC/////////weDUCIEGyEAQQNBBCADG0EDIAQbCyEDIAJBDGpCATcCACACIAM2AiQgAiAANgIgIAJBAzYCHCACQQI2AgQgAkHo8sEANgIAIAFBGGooAgAhACACIAJBIGo2AhggAiACQRhqNgIIIAEoAhQgACACEC8MAQsgASgCFEH48sEAQQQgAUEYaigCACgCDBEAAAsgAkFAayQAC7EHAgd/A34jAEHgAmsiAiQAIAJCADcDCCACQShqQQBBwQAQuwIhBSACQfDDy558NgIgIAJC/rnrxemOlZkQNwMYIAJCgcaUupbx6uZvNwMQIAEoAgAhBCACIAEoAggiAxDgASACKAIEIAIoAgAgBCADEL4CIQcEQCAHECILAkAgA0E/TQRAIAUgBCADEL4CGgwBCyACIANBBnYiBq03AwggAkEQaiAEIAYQCyAFIAQgA0FAcWogA0E/cSIDEL4CGgsgAiADOgBoIAEoAgQEQCAEECILIAJB8ABqIAJBCGpB6AAQvgIaIAJB6AFqQQA2AgAgAkHgAWpCADcDACACQgA3A9gBIAJB0AFqLQAAIQEgAikDcCEJIAJBgAJqIAJBiAFqKAIANgIAIAJB+AFqIAJBgAFqKQMANwMAIAEgAkGQAWoiA2oiBEGAAToAACACIAIpA3g3A/ABIAlCAYZCgICA+A+DIAlCD4hCgID8B4OEIAlCH4hCgP4DgyAJQgmGIglCOIiEhCEKIAGtIgtCO4YgCSALQgOGhCIJQoD+A4NCKIaEIAlCgID8B4NCGIYgCUKAgID4D4NCCIaEhCABQT9zIgUEQCAEQQFqQQAgBRC7AhoLIAqEIQkCQCABQThxQThHBEAgAkHIAWogCTcDACACQfABaiADQQEQCwwBCyACQfABaiIBIANBARALIAJBoAJqIgNBAEE4ELsCGiACIAk3ANgCIAEgA0EBEAsLIAJBADoA0AEgAkGUAmpClICAgMAANwIAIAJBADYCjAIgAiACQewBajYCiAIgAiACQdgBajYCkAIgAkGgAmogAkGIAmogAkHwAWogAkGEAmoQqQECQAJAAkAgAigCwAIiAyACKAK8AiIBTQ0AIAMgAWshBiACKAK0AiABQQJ0aiEDIAIoAqgCIgcgASACKAKwAiIEbGohASAEQQRGIQgDQCAHRQ0BIAhFDQIgASADKAIAIgVBGHQgBUGA/gNxQQh0ciAFQQh2QYD+A3EgBUEYdnJyNgAAIANBBGohAyABIARqIQEgBkEBayIGDQALCyACQZACaiIDIAJB4AFqKQMANwMAIAJBmAJqIgQgAkHoAWooAgA2AgAgAiACKQPYATcDiAJBuLHCAC0AABpBFBAKIgFFDQEgASACKQOIAjcAACAAQpSAgIDAAjcCBCAAIAE2AgAgAUEQaiAEKAIANgAAIAFBCGogAykDADcAACACQeACaiQADwsgBEEEQbDVwAAQuwEACwALoQgBAn8jAEEwayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgACgCACIALQAAQQFrDhYBAgMEBQYHCAkKCwwNDg8QERITFBUWAAsgASgCFEHYxsAAQQcgAUEYaigCACgCDBEAAAwWCyABKAIUQd/GwABBByABQRhqKAIAKAIMEQAADBULIAEoAhRB5sbAAEEKIAFBGGooAgAoAgwRAAAMFAsgASgCFEHwxsAAQQwgAUEYaigCACgCDBEAAAwTCyABKAIUQfzGwABBBCABQRhqKAIAKAIMEQAADBILIAEoAhRBgMfAAEERIAFBGGooAgAoAgwRAAAMEQsgASgCFEGRx8AAQQQgAUEYaigCACgCDBEAAAwQCyABKAIUQZXHwABBCiABQRhqKAIAKAIMEQAADA8LIAEoAhRBn8fAAEEKIAFBGGooAgAoAgwRAAAMDgsgASgCFEGpx8AAQQggAUEYaigCACgCDBEAAAwNCyABKAIUQbHHwABBAyABQRhqKAIAKAIMEQAADAwLIAEoAhRBtMfAAEENIAFBGGooAgAoAgwRAAAMCwsgASgCFEHBx8AAQQ8gAUEYaigCACgCDBEAAAwKCyABKAIUQdDHwABBDSABQRhqKAIAKAIMEQAADAkLIAEoAhRB3cfAAEEOIAFBGGooAgAoAgwRAAAMCAsgASgCFEHrx8AAQQkgAUEYaigCACgCDBEAAAwHCyABKAIUQfTHwABBByABQRhqKAIAKAIMEQAADAYLIAEoAhRB+8fAAEEPIAFBGGooAgAoAgwRAAAMBQsgASgCFEGKyMAAQQ0gAUEYaigCACgCDBEAAAwECyABKAIUQZfIwABBCSABQRhqKAIAKAIMEQAADAMLIAAtAAIhAyACIAAtAAE6AAcgAkEUakICNwIAIAJBLGpBAzYCACACQbDIwAA2AgggAkESNgIkIAJBAzYCDCACIANBA3RB3MjAAGo2AiggAUEYaigCACEAIAIgAkEgajYCECACIAJBB2o2AiAgASgCFCAAIAJBCGoQLwwCCyAALQACIQMgAiAALQABOgAHIAJBFGpCAjcCACACQSxqQQM2AgAgAkGAycAANgIIIAJBEjYCJCACQQM2AgwgAiADQQN0QdzIwABqNgIoIAFBGGooAgAhACACIAJBIGo2AhAgAiACQQdqNgIgIAEoAhQgACACQQhqEC8MAQsgAC0AAiEDIAIgAC0AAToAByACQRRqQgI3AgAgAkEsakEDNgIAIAJBpMnAADYCCCACQRI2AiQgAkEDNgIMIAIgA0EDdEHcyMAAajYCKCABQRhqKAIAIQAgAiACQSBqNgIQIAIgAkEHajYCICABKAIUIAAgAkEIahAvCyACQTBqJAAL2wYBCH8jAEHwAGsiAyQAAkAgAi0AMCIEQQFGBEAgAS0AMCEFIAEoAigiAkEETQR/IAFBCGoFIAEoAgQhAiABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIEIAEgASACQQN0ahBDIAAgBEEwEL4CIAU6ADAMAQsCQAJAAkACQAJAAkACQAJAIAEtADAiCUEBaw4CBwEACyAERQ0BDAILIARFDQELAn8gASgCKCIFQQRNBEAgAUEIaiEHIAUMAQsgASgCCCEHIAEoAgQLIQoCfyACKAIoIgZBBE0EQCACQQhqIQggBgwBCyACKAIIIQggAigCBAshBCAHIAogCCAEEKgBQf8BcQ4CAgMBCyADQUBrIgUgASACEHIgACAJIAUQQgwEC0ECIAlrIQUgBkEETQR/IAJBCGoFIAIoAgQhBiACKAIICyECIANBADYCQCADQQA2AmggA0FAayIEIAIgAiAGQQN0ahBDIANBEGoiAiAEQTAQvgIaIAIgARB1IAQgAkEwEL4CGiAAIAUgBBBCDAMLIANBAjYCDCADQgQ3AgQgA0EANgIQIANBADYCOCADQRBqIgEgA0EEahAzIANBQGsiAiABQTAQvgIaIAJBBHIhCCADQcgAaiEGIANB6ABqIQogAygCSCEEA0AgBiEFIAMoAmgiASECIAFBBUkiB0UEQCAEIQUgAygCRCECCwJAIAJFDQAgAkEDdCAFakEIaykDAEIAUg0AIAohAiAHRQRAIAghAiADKAJEIQELIAFFDQEgAiABQQFrNgIADAELCyADQRBqIgEgA0FAa0EwEL4CGiAAQQEgARBCDAILIAVBBE0EfyABQQhqBSABKAIEIQUgASgCCAshASADQQA2AkAgA0EANgJoIANBQGsiBCABIAEgBUEDdGoQQyADQRBqIgEgBEEwEL4CGiABIAIQdSAEIAFBMBC+AhogACAJIAQQQgwBCyACKAIoIgVBBE0EfyACQQhqBSACKAIEIQUgAigCCAshASADQQA2AkAgA0EANgJoIANBQGsiAiABIAEgBUEDdGoQQyADQRBqIgEgAkEwEL4CGiAAIAFBMBC+AiIAQQIgBGs6ADAgACADKABANgAxIABBNGogA0HDAGooAAA2AAALIANB8ABqJAAL2AYCDX8BfiMAQSBrIgUkAEEBIQ4CQAJAIAJBIiADKAIQIg8RAQANAAJAIAFFBEBBACEBDAELIAAgAWohECAAIQYCQAJAA0ACQCAGIgssAAAiDEEATgRAIAZBAWohBiAMQf8BcSEKDAELIAstAAFBP3EhBiAMQR9xIQggDEFfTQRAIAhBBnQgBnIhCiALQQJqIQYMAQsgCy0AAkE/cSAGQQZ0ciEJIAtBA2ohBiAMQXBJBEAgCSAIQQx0ciEKDAELIAhBEnRBgIDwAHEgBi0AAEE/cSAJQQZ0cnIiCkGAgMQARg0DIAtBBGohBgsgBUEEaiAKQYGABBATAkACQCAFLQAEQYABRg0AIAUtAA8gBS0ADmtB/wFxQQFGDQAgBCAHSw0DAkAgBEUNACABIARNBEAgASAERg0BDAULIAAgBGosAABBQEgNBAsCQCAHRQ0AIAEgB00EQCABIAdGDQEMBQsgACAHaiwAAEG/f0wNBAsCQAJAIAIgACAEaiAHIARrIAMoAgwRAAANACAFQRhqIgkgBUEMaigCADYCACAFIAUpAgQiETcDECARp0H/AXFBgAFGBEBBgAEhCANAAkAgCEGAAUcEQCAFLQAaIg0gBS0AG08NBSAFIA1BAWo6ABogDUEKTw0HIAVBEGogDWotAAAhBAwBC0EAIQggCUEANgIAIAUoAhQhBCAFQgA3AxALIAIgBCAPEQEARQ0ACwwBC0EKIAUtABoiBCAEQQpNGyENIAUtABsiCSAEIAQgCUkbIQwDQCAEIAxGDQIgBSAEQQFqIgk6ABogBCANRg0EIAVBEGogBGohCCAJIQQgAiAILQAAIA8RAQBFDQALCwwHCwJ/QQEgCkGAAUkNABpBAiAKQYAQSQ0AGkEDQQQgCkGAgARJGwsgB2ohBAsgByALayAGaiEHIAYgEEcNAQwDCwsgDUEKQdS+wAAQtwEACyAAIAEgBCAHQYypwAAQmQIACyAERQRAQQAhBAwBCyABIARNBEAgASAERw0DIAEgBGsgASEEIQEMAQsgACAEaiwAAEG/f0wNAiABIARrIQELIAIgACAEaiABIAMoAgwRAAANACACQSIgDxEBACEOCyAFQSBqJAAgDg8LIAAgASAEIAFB/KjAABCZAgALpQYBCX8jAEHwAGsiAyQAAkAgAi0AMCIFQQFGBEAgAS0AMCEEIAEoAigiAkEETQR/IAFBCGoFIAEoAgQhAiABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASACQQN0ahBDIAAgBUEwEL4CIAQ6ADAMAQsCQAJAAkACQAJAIAEtADAiB0EBaw4CBAEACyAFRQ0BDAILIAVFDQELIANBQGsiBCABIAIQciAAIAcgBBBCDAILAn8gASgCKCIEQQRNBEAgAUEIaiEKIAQMAQsgASgCCCEKIAEoAgQLIQgCfyACKAIoIgZBBE0EQCACQQhqIQsgBgwBCyACKAIIIQsgAigCBAshCQJAAkACQCAKIAggCyAJEKgBQf8BcQ4CAQIACyAGQQRNBH8gAkEIagUgAigCBCEGIAIoAggLIQIgA0EANgJAIANBADYCaCADQUBrIgQgAiACIAZBA3RqEEMgA0EQaiICIARBMBC+AhogAiABEHUgBCACQTAQvgIaIAAgBSAEEEIMAwsgA0ECNgIMIANCBDcCBCADQQA2AhAgA0EANgI4IANBEGoiASADQQRqEDMgA0FAayICIAFBMBC+AhogAkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB+LDCACgCACAAaiIANgIAIAEgAEEBcjYCBEH8sMIAKAIAIAFGBEBB9LDCAEEANgIAQfywwgBBADYCAAsgAEGMscIAKAIAIgNNDQBBgLHCACgCACICRQ0AQQAhAQJAQfiwwgAoAgAiBEEpSQ0AQdSuwgAhAANAIAIgACgCACIFTwRAIAUgACgCBGogAksNAgsgACgCCCIADQALC0HcrsIAKAIAIgAEQANAIAFBAWohASAAKAIIIgANAAsLQZSxwgBB/x8gASABQf8fTRs2AgAgAyAETw0AQYyxwgBBfzYCAAsPCyAAQXhxQeSuwgBqIQICf0HssMIAKAIAIgNBASAAQQN2dCIAcUUEQEHssMIAIAAgA3I2AgAgAgwBCyACKAIICyEAIAIgATYCCCAAIAE2AgwgASACNgIMIAEgADYCCA8LQfywwgAgATYCAEH0sMIAQfSwwgAoAgAgAGoiADYCACABIABBAXI2AgQgACABaiAANgIAC5EGAQZ/AkACQAJAAkAgAkEJTwRAIAIgAxBAIgINAUEADwtBACECIANBzP97Sw0BQRAgA0ELakF4cSADQQtJGyEBIABBBGsiBigCACIHQXhxIQQCQAJAAkACQAJAAkACQCAHQQNxBEAgAEEIayIIIARqIQUgASAETQ0BIAVBgLHCACgCAEYNBiAFQfywwgAoAgBGDQQgBSgCBCIHQQJxDQcgB0F4cSIJIARqIgQgAUkNByAEIAFrIQIgCUGAAkkNAiAFEF8MAwsgAUGAAkkgBCABQQRySXIgBCABa0GBgAhPcg0GDAoLIAQgAWsiAkEQTw0DDAkLIAVBDGooAgAiAyAFQQhqKAIAIgVHBEAgBSADNgIMIAMgBTYCCAwBC0HssMIAQeywwgAoAgBBfiAHQQN2d3E2AgALIAJBEE8EQCAGIAYoAgBBAXEgAXJBAnI2AgAgASAIaiIBIAJBA3I2AgQgBCAIaiIDIAMoAgRBAXI2AgQgASACEDIMCAsgBiAGKAIAQQFxIARyQQJyNgIAIAQgCGoiASABKAIEQQFyNgIEDAcLQfSwwgAoAgAgBGoiBCABSQ0CAkAgBCABayIDQQ9NBEAgBiAHQQFxIARyQQJyNgIAIAQgCGoiASABKAIEQQFyNgIEQQAhAwwBCyAGIAdBAXEgAXJBAnI2AgAgASAIaiICIANBAXI2AgQgBCAIaiIBIAM2AgAgASABKAIEQX5xNgIEC0H8sMIAIAI2AgBB9LDCACADNgIADAYLIAYgB0EBcSABckECcjYCACABIAhqIgEgAkEDcjYCBCAFIAUoAgRBAXI2AgQgASACEDIMBQtB+LDCACgCACAEaiIEIAFLDQMLIAMQCiIBRQ0BIAEgAEF8QXggBigCACIBQQNxGyABQXhxaiIBIAMgASADSRsQvgIgABAiDwsgAiAAIAEgAyABIANJGxC+AhogABAiCyACDwsgBiAHQQFxIAFyQQJyNgIAIAEgCGoiAiAEIAFrIgFBAXI2AgRB+LDCACABNgIAQYCxwgAgAjYCACAADwsgAAvbBgEKfyMAQSBrIgQkAAJAAkACQAJAAkACQCADQf8BcQ4EAQIDBAALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQeiTwgA2AhggACAAQRhqNgIIIABB2JTCABDrAQALQQAhAwNAIARBEGogA2pBmfOJ1AU2AgAgA0EEaiIDQRBHDQALIAIoAgwhBiACKAIIIQggAigCBCEFIAQoAhwhCSAEKAIYIQogBCgCFCELIAAgBCgCECACKAIAaiABKAIAIgNBBXdqIAEoAgQiDCABKAIMIgIgASgCCCIBc3EgAnNqIgdBHnciDTYCDCAAIAIgBSALamogASADIAEgDEEedyICc3FzaiAHQQV3aiIFQR53NgIIIAAgASAIIApqaiAHIAIgA0EedyIBc3EgAnNqIAVBBXdqIgM2AgQgACAGIAlqIAJqIAUgASANc3EgAXNqIANBBXdqNgIADAMLQQAhAwNAIARBEGogA2pBodfn9gY2AgAgA0EEaiIDQRBHDQALIAQgBCgCHCACKAIMajYCDCAEIAQoAhggAigCCGo2AgggBCAEKAIUIAIoAgRqNgIEIAQgBCgCECACKAIAajYCACAAIAEgBBCSAQwCC0EAIQMDQCAEQRBqIANqQdz57vh4NgIAIANBBGoiA0EQRw0ACyACKAIMIQggAigCCCEJIAIoAgQhBiAEKAIcIQogBCgCGCELIAQoAhQhDCAAIAQoAhAgAigCAGogASgCACIDQQV3aiABKAIEIg0gASgCDCICIAEoAggiAXNxIAEgAnFzaiIHQR53IgU2AgwgACACIAYgDGpqIAMgASANQR53IgJzcSABIAJxc2ogB0EFd2oiBkEedzYCCCAAIAEgCSALamogByACIANBHnciAXNxIAEgAnFzaiAGQQV3aiIDNgIEIAAgCCAKaiACaiAGIAEgBXNxIAEgBXFzaiADQQV3ajYCAAwBC0EAIQMDQCAEQRBqIANqQdaDi9N8NgIAIANBBGoiA0EQRw0ACyAEIAQoAhwgAigCDGo2AgwgBCAEKAIYIAIoAghqNgIIIAQgBCgCFCACKAIEajYCBCAEIAQoAhAgAigCAGo2AgAgACABIAQQkgELIARBIGokAAvtBQEJfyMAQcABayIDJAACQAJAAkACQCACLQAwIgRBAUcEQAJAAkACQCABLQAwIgdBAWsOAgQAAQsgBEUNAQwECyAERQ0DCyADQTBqIAFBMBC+AhogA0HgAGoiBSACQTAQvgIaAn9BBCADKAJYIgQgBEEETRtBBCADKAKIASIEIARBBE0bTwRAIANBkAFqIgIgAUEwEL4CGiADIAIgBRAUIAUMAQsgA0GQAWoiASACQTAQvgIaIAMgASADQTBqIgEQFCABCxCPAiAAIAcgAxBCDAQLIAAgAUE4EL4CGiACEI8CDAMLIAAgAkEwEL4CIgBBAiAEazoAMCAAIAIoADE2ADEgAEE0aiACQTRqKAAANgAADAELAkACQAJAIAEoAigiBkEETQR/IAFBCGoFIAEoAgQhBiABKAIICyAGIAIoAigiBUEETQR/IAJBCGoFIAIoAgQhBSACKAIICyAFEKgBQf8BcQ4CAQIACyADQeAAaiIEIAJBMBC+AhogA0GQAWoiAiABQTAQvgIaIAQgAhB1IANBMGoiASAEQTAQvgIaIAIQjwIgAEECIAdrIAEQQgwDCyADQQI2AjggA0IENwIwIANBADYCYCADQQA2AogBIANB4ABqIgQgA0EwahAzIANBkAFqIgUgBEEwEL4CGiAFQQRyIQcgA0GYAWohCCADQbgBaiEJIAMoApgBIQoDQCAIIQUgAygCuAEiBiEEIAZBBUkiC0UEQCAKIQUgAygClAEhBAsCQCAERQ0AIARBA3QgBWpBCGspAwBCAFINACAJIQQgC0UEQCADKAKUASEGIAchBAsgBkUNASAEIAZBAWs2AgAMAQsLIANB4ABqIgQgA0GQAWpBMBC+AhogAEEBIAQQQiACEI8CDAELIANB4ABqIgQgAUEwEL4CGiADQZABaiIBIAJBMBC+AhogBCABEHUgA0EwaiICIARBMBC+AhogARCPAiAAIAcgAhBCDAELIAEQjwILIANBwAFqJAALyQcBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAALQAAQQFrDhcBAgMEBQYHCAkKCwwNDg8QERITFBUWFwALIAEoAhRBkNHAAEEIIAFBGGooAgAoAgwRAAAMFwsgASgCFEGY0cAAQQYgAUEYaigCACgCDBEAAAwWCyABKAIUQZ7RwABBDCABQRhqKAIAKAIMEQAADBULIAIgAEEIajYCDCABQarRwABBCkG00cAAQQwgAEEEakHA0cAAQdDRwABBCiACQQxqQdzRwAAQhwEMFAsgAiAAQQFqNgIMIAFB7NHAAEECIAJBDGpB8NHAABB9DBMLIAEoAhRBgNLAAEEQIAFBGGooAgAoAgwRAAAMEgsgAiAAQQFqNgIMIAFB+oPBAEEGQZDSwABBAyACQQxqQZTSwAAQjQEMEQsgAiAAQQFqNgIMIAFBpNLAAEEMQZDSwABBAyACQQxqQZTSwAAQjQEMEAsgASgCFEGw0sAAQQwgAUEYaigCACgCDBEAAAwPCyACIABBAWo2AgwgAUHglsIAQQpB6pbCAEEDIAJBDGpBvNLAABCNAQwOCyABKAIUQczSwABBDCABQRhqKAIAKAIMEQAADA0LIAEoAhRB2NLAAEELIAFBGGooAgAoAgwRAAAMDAsgASgCFEHj0sAAQQggAUEYaigCACgCDBEAAAwLCyABKAIUQevSwABBCiABQRhqKAIAKAIMEQAADAoLIAIgAEEEajYCDCABQfXSwABBAyACQQxqQfjSwAAQfQwJCyABKAIUQZuiwgBBECABQRhqKAIAKAIMEQAADAgLIAEoAhRBiNPAAEEGIAFBGGooAgAoAgwRAAAMBwsgASgCFEGO08AAQQ4gAUEYaigCACgCDBEAAAwGCyABKAIUQZzTwABBECABQRhqKAIAKAIMEQAADAULIAIgAEEEajYCDCABQazTwABBDUHMhMEAQQggAEEBakG808AAQczTwABBBiACQQxqQZTSwAAQhwEMBAsgAiAAQQFqNgIMIAFB0tPAAEEKQdzTwABBBCACQQxqQeDTwAAQjQEMAwsgAiAAQQhqNgIMIAFB8NPAAEEMQfzTwABBByAAQQRqQcDRwABBg9TAAEEJIAJBDGpB3NHAABCHAQwCCyACIABBBGo2AgwgAUGM1MAAQQQgAkEMakGQ1MAAEH0MAQsgAiAAQQFqNgIMIAFBoNTAAEEFQZDSwABBAyACQQxqQZTSwAAQjQELIAJBEGokAAvmBQIIfwN+IwBBwAFrIgMkACADQQI2AgAgAyABNgIEIAJBBnYhBgJAIAJBP00EQCADQZABaiIBIANBMBC+AhogA0EwaiABEKwBDAELIAEoAigiBEEFTwRAIAEoAgQhBAsgA0EANgKQASADQQA2ArgBIANBkAFqIgEgBCAGakEBahCtASADQeAAaiIEIAFBMBC+AhogBCAGEEkgAyEBIANB4ABqIgUCfyADKAIAQQJGBEAgAygCBCEBCyABKAIoIgRBBE0EQCABQQhqDAELIAEoAgQhBCABKAIICyIBIAEgBEEDdGoQQyADQTBqIAVBMBC+AhoLAkAgAkE/cSIIRQ0AIAMoAlgiAUEETQR/IANBOGoFIAMoAjQhASADKAI4CyEEIAEgBk8EQCABIAZGDQEgA0HYAGohByABQQN0IAZBA3QiBmshASAEIAZqIQVBACACa0E/ca0hDCAIrSENA0AgBSALIAUpAwAiCyANhoQ3AwAgBUEIaiEFIAsgDIghCyABQQhrIgENAAsgC1ANAUEEIQECfyADKAJYIgZBBE0EQCAGIQUgA0E4agwBCyADQTBqQQRyIQcgAygCNCEFIAYhASADKAI4CyEEIAEgBUYEQCADQTBqIgEQoAEgAUEEciEHIAMoAjQhBSADKAI4IQQLIAQgBUEDdGogCzcDACAHIAcoAgBBAWo2AgAMAQsgBiABQZD9wAAQuQEACyADQZABaiIBIANBMGpBMBC+AhogAUEEciEGIANBmAFqIQcgA0G4AWohCCADKAKYASEJA0AgByEEIAMoArgBIgUhASAFQQVJIgpFBEAgCSEEIAMoApQBIQELAkAgAUUNACABQQN0IARqQQhrKQMAQgBSDQAgCCEBIApFBEAgAygClAEhBSAGIQELIAVFDQEgASAFQQFrNgIADAELCyAAIANBkAFqQTAQvgIaAkAgAkHAAEkNACADKAIAQQJGDQAgAxCPAgsgA0HAAWokAAvYDQIFfwF+IwBB4ABrIgIkACACQRhqQRQQzAECQAJAAkACQAJAAkACQAJAAkACQCABLQAADgYAAQQCBgUDC0G4scIALQAAGiACKAIgIQMgAigCGEEEEAoiAUUNByABQe7qseMGNgAAIAJChICAgMAANwIoIAIgATYCJCACQdQAaiIBIAJBJGoQHSADIAEQywEMBgsgAigCICEDIAIoAhggAkEEQQUgAS0AASIFGyIBEOABIAIoAgQhBiACKAIAQeLswABB3ezAACAFGyABEL4CIQUgAiABNgIsIAIgBjYCKCACIAU2AiQgAkHUAGoiASACQSRqEB0gAyABEMsBDAULIAIoAiAhAyACKAIYIAEoAgQhBSACQQhqIAFBDGooAgAiARDgASACKAIMIQYgAigCCCAFIAEQvgIhBSACIAE2AiwgAiAGNgIoIAIgBTYCJCACQdQAaiIBIAJBJGoQHSADIAEQywEMBAsgAkEwakIANwIAIAJBATYCKCACQdTVwAA2AiQgAkGMrMIANgIsIwBBQGoiASQAIAFBBjYCDCABQbSfwgA2AghBxK3CAC0AAEEDRwRAIAFBpK3CADYCKCABIAFBGGo2AiwgAUEoaiEGIwBBIGsiBCQAAkACQAJAAkACQEHErcIALQAAIgNBAk8EQCADQQNrDQQMAQtBxK3CAEECOgAAIAYoAgAhAyAGQQA2AgAgA0UNAUG4scIALQAAGkGACBAKIgZFDQIgA0EAOgAcIANBADoAGCADQoAINwIQIAMgBjYCDCADQQA2AgggA0IANwIAQcStwgBBAzoAAAsgBEEgaiQADAMLQYCXwgBBK0H0oMIAEN4BAAsACyAEQRRqQgA3AgAgBEEBNgIMIARB9KbCADYCCCAEQYyswgA2AhAgBEEIakHkoMIAEOsBAAsLIAJBJGohBgJAAkBBpK3CACgCAEGdscIARwRAQcCtwgAtAAAhBEEBIQNBwK3CAEEBOgAAIAEgBDoAGCAERQ0BIAFCADcCNCABQYyswgA2AjAgAUEBNgIsIAFB+J/CADYCKCABQRhqIAFBKGoQ7gEAC0GorcIAKAIAQQFqIgMNAUGEocIAQSZBzKHCABDRAQALQaStwgBBnbHCADYCAAtBqK3CACADNgIAIAFBpK3CADYCGEEEIQMgAUEEOgAoIAEgAUEYajYCMCABQShqQbyXwgAgBhAvIQYgAS0AKCEEAkAgBgRAIARBBEYEQEECIQNBzJ/CACEFDAILIAEoAiwhBSABKAIoIQMMAQtBFyAEdkEBcQ0AIAEoAiwiBCgCACIFIARBBGooAgAiBigCABEEACAGKAIEBEAgBRAiCyAEECILIAEoAhgiBCAEKAIEQQFrIgY2AgQgBkUEQCAEQQA6ABwgBEEANgIACwJAIANB/wFxQQRGBEAgAUFAayQADAELIAEgBTYCFCABIAM2AhAgAUE0akICNwIAIAFBJGpBHDYCACABQQI2AiwgAUGUn8IANgIoIAFBBzYCHCABIAFBGGo2AjAgASABQRBqNgIgIAEgAUEIajYCGCABQShqQaSfwgAQ6wEACwwDCyABKQMIUEUNBCACKAIgIQQgAigCGCACQSRqIQMgAUEQaikDACEHIwBBQGoiASQAIAFBADYCFCABQgE3AgwgAUEwakGo1MAANgIAIAFBAzoAOCABQSA2AiggAUEANgI0IAFBADYCICABQQA2AhggASABQQxqNgIsAkAgB0EBIAFBGGoQVkUEQCADIAEpAgw3AgAgA0EIaiABQRRqKAIANgIAIAFBQGskAAwBC0Gc6sEAQTcgAUE/akHA1MAAQbDrwQAQrgEACyACQdQAaiIBIAMQHSAEIAEQywEMAgsCfyABKAIEIgNFBEBBACEDQQAMAQsgAiADNgI8IAJBADYCOCACIAM2AiwgAkEANgIoIAIgAUEIaigCACIDNgJAIAIgAzYCMCABQQxqKAIAIQNBAQshASACIAM2AkQgAiABNgI0IAIgATYCJCACKAIgIQMgAigCGCEEA0AgAkEQaiACQSRqEEQgAigCECIFRQ0CIAIoAhQhBiACQdQAaiIBIAUoAgAgBUEIaigCABDWASACQcgAaiIFIAEQHSAEIAMgBRDLASABIAYQKCAEIAMgARDLAQwACwALIAFBDGooAgAiA0UNACABKAIEIQEgA0EYbCEDIAIoAiAhBCACKAIYIQUDQCACQSRqIgYgARAoIAUgBCAGEMsBIAFBGGohASADQRhrIgMNAAsLIAAgAikCGDcCACAAQQhqIAJBIGooAgA2AgAgAkHgAGokAA8LAAtBgJfCAEErQYzWwAAQ3gEAC8UFAQl/IwBBwAFrIgMkAAJAAkACQAJAIAItADAiBEEBRwRAAkACQAJAIAEtADAiBkEBaw4CBAABCyAERQ0BDAULIARFDQQLAkACQAJAIAEoAigiBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyAFIAIoAigiB0EETQR/IAJBCGoFIAIoAgQhByACKAIICyAHEKgBQf8BcQ4CAQIACyADQeAAaiIFIAJBMBC+AhogA0GQAWoiAiABQTAQvgIaIAUgAhB1IANBMGoiASAFQTAQvgIaIAIQjwIgACAEIAEQQgwGCyADQQI2AjggA0IENwIwIANBADYCYCADQQA2AogBIANB4ABqIgUgA0EwahAzIANBkAFqIgQgBUEwEL4CGiAEQQRyIQYgA0GYAWohCSADQbgBaiEHIAMoApgBIQoDQCAJIQUgAygCuAEiCCEEIAhBBUkiC0UEQCAKIQUgAygClAEhBAsCQCAERQ0AIARBA3QgBWpBCGspAwBCAFINACAHIQQgC0UEQCADKAKUASEIIAYhBAsgCEUNASAEIAhBAWs2AgAMAQsLIANB4ABqIgQgA0GQAWpBMBC+AhogAEEBIAQQQiACEI8CDAMLIANB4ABqIgUgAUEwEL4CGiADQZABaiIEIAJBMBC+AhogBSAEEHUgA0EwaiIBIAVBMBC+AhogBBCPAiAAIAYgARBCDAQLIAAgAUE4EL4CGiACEI8CDAMLIAAgAkE4EL4CGgsgARCPAgwBCyADQTBqIAFBMBC+AhogA0HgAGoiBSACQTAQvgIaAn9BBCADKAJYIgQgBEEETRtBBCADKAKIASIEIARBBE0bTwRAIANBkAFqIgIgAUEwEL4CGiADIAIgBRAUIAUMAQsgA0GQAWoiASACQTAQvgIaIAMgASADQTBqIgEQFCABCxCPAiAAIAYgAxBCCyADQcABaiQAC/AGAQF/IwBB8ABrIgIkACAAKAIAIQAgAkEANgJIIAJCATcCQCACQeQAakGE6sEANgIAIAJBAzoAbCACQSA2AlwgAkEANgJoIAJBADYCVCACQQA2AkwgAiACQUBrNgJgAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAAoAgBBAWsOGBgAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcLIAJBQGtBkO3BAEEYEK4CDRkMGAsgAkFAa0Go7cEAQRsQrgINGAwXCyACQUBrQcPtwQBBGhCuAg0XDBYLIAJBQGtB3e3BAEEZEK4CDRYMFQsgAkFAa0H27cEAQQwQrgINFQwUCyACQUBrQYLuwQBBExCuAg0UDBMLIAJBQGtBle7BAEETEK4CDRMMEgsgAkFAa0Go7sEAQQ4QrgINEgwRCyACQUBrQbbuwQBBDhCuAg0RDBALIAJBQGtBxO7BAEEMEK4CDRAMDwsgAkFAa0HQ7sEAQQ4QrgINDwwOCyACQUBrQd7uwQBBDhCuAg0ODA0LIAJBQGtB7O7BAEETEK4CDQ0MDAsgAkFAa0H/7sEAQRoQrgINDAwLCyACQUBrQZnvwQBBPhCuAg0LDAoLIAJBQGtB1+/BAEEUEK4CDQoMCQsgAkFAa0Hr78EAQTQQrgINCQwICyACQUBrQZ/wwQBBLBCuAg0IDAcLIAJBQGtBy/DBAEEkEK4CDQcMBgsgAkFAa0Hv8MEAQQ4QrgINBgwFCyACQUBrQf3wwQBBExCuAg0FDAQLIAJBQGtBkPHBAEEcEK4CDQQMAwsgAkFAa0Gs8cEAQRgQrgINAwwCCyACQUBrIAAoAgQgAEEIaigCABCuAkUNAQwCCyAAQQRqIAJBzABqEEUNAQsgAkE4aiACQcgAaigCADYCACACQSxqQQQ2AgAgAkEkakEENgIAIAJBDGpCAzcCACACIAIpAkA3AzAgAkExNgIcIAJBBDYCBCACQejxwQA2AgAgAiAAQRBqNgIoIAIgAEEMajYCICABQRhqKAIAIQAgAiACQTBqNgIYIAIgAkEYajYCCCABKAIUIAAgAhAvIAIoAjQEQCACKAIwECILIAJB8ABqJAAPC0Gc6sEAQTcgAkEYakHU6sEAQbDrwQAQrgEAC6UGAQd/IwBBEGsiBiQAAkACQAJAAkAgASgCCEUEQCABQX82AgggAyEFIAMhByACQQNqQXxxIAJrIgQgA00EQCADIAMgBGtBB3EiB2shBSADIAdJDQUgBCEHC0EAIAVrIQogAkEBayEJIAMhBAJAAkACQANAIAQgCmpFBEADQCAHIAUiBEkEQCAEQQhrIQUgAiAEaiIJQQRrKAIAIghBipSo0ABzQYGChAhrIAhBf3NxIAlBCGsoAgAiCEGKlKjQAHNBgYKECGsgCEF/c3FyQYCBgoR4cUUNAQsLIAMgBEkNBgNAIAQiBUUNBCAEQQFrIgQgAmotAABBCkcNAAsMAgsgBCAJaiAEQQFrIQQtAABBCkcNAAsgBCAKakEBaiAFaiEFCyADIAVPDQFBiZjCAEEjQayYwgAQ3gEACwJAIAFBFGooAgAiBEUEQEEAIQQMAQsgBCABKAIMakEBay0AAEEKRw0AQQAhBCABQQA2AhQgAUEYakEAOgAACyADIAFBEGooAgAgBGtPBEAgACABQQxqIAIgAxDCAQwFCyABKAIMIARqIAIgAxC+AhogAEEEOgAAIAEgAyAEajYCFAwECyABQRRqKAIAIgRFDQICQAJAIAUgAUEQaigCACAEa0kEQCABKAIMIARqIAIgBRC+AhogASAEIAVqIgQ2AhQMAQsgBkEIaiABQQxqIAIgBRDCASAGLQAIIgRBBEcNASABKAIUIQQLIARFDQMgAUEANgIUIAFBGGpBADoAAAwDCyAAIAYoAAk2AAEgAEEEaiAGQQxqKAAANgAAIAAgBDoAAAwDCyMAQTBrIgAkACAAQRhqQgE3AgAgAEEBNgIQIABBnKbAADYCDCAAQQs2AiggACAAQSRqNgIUIAAgAEEvajYCJCAAQQxqQeyewgAQ6wEACyAEIANBvKnAABC4AQALIAIgBWohAiADIAVrIgMgAUEQaigCAE8EQCAAIAFBDGogAiADEMIBDAELIAEoAgwgAiADEL4CGiAAQQQ6AAAgASADNgIUCyABIAEoAghBAWo2AgggBkEQaiQADwsgBSADQcypwAAQuQEAC7kFAgl/AX4jAEHwAGsiAyQAIANBADYCECADQQA2AjggA0EIaiADQRBqIAJBA3YgAkEHcUEAR2ogBSACGxCTAQJAIAMoAggiBEGBgICAeEcEQCAERQ0BAAsgA0E4aiEKQQQhBwJ/IAMoAjgiBEEETQRAIANBGGohCSAKIQggBAwBCyADQRBqQQRyIQggAygCGCEJIAQhByADKAIUCyEGAkACQCAIIAYgB0kEfwNAIAJFDQIgAUEBayEEIAJBCCACIAJBCE8bIgVrIQIgASAFaiEBQgAhDANAIAQgBWoxAAAgDEIIhoQhDCAFQQFrIgUNAAsgCSAGQQN0aiAMNwMAIAZBAWoiBiAHRw0ACyAHBSAGCzYCACACRQ0BIANBEGpBBHIhBiADQRhqIQgDQAJAQQggAiACQQhPGyILRQRAQgAhDAwBCyABQQFrIQRCACEMIAshBQNAIAQgBWoxAAAgDEIIhoQhDCAFQQFrIgUNAAsLAn8gAygCOCIHQQVJBEAgByEFIAghCUEEIQcgCgwBCyADKAIUIQUgAygCGCEJIAYLIQQgAiALayECIAUgB0YEQCADQRBqEKABIAMoAhQhBSADKAIYIQkgBiEECyABIAtqIQEgCSAFQQN0aiAMNwMAIAQgBCgCAEEBajYCACACDQALDAELIAggBjYCAAsgA0FAayIBIANBEGpBMBC+AhogAUEEciEKIANByABqIQYgA0HoAGohByADKAJIIQEDQCAGIQIgAygCaCIFIQQgBUEFSSIIRQRAIAMoAkQhBCABIQILAkAgBEUNACAEQQN0IAJqQQhrKQMAQgBSDQAgByEEIAhFBEAgAygCRCEFIAohBAsgBUUNASAEIAVBAWs2AgAMAQsLIAAgA0FAa0EwEL4CGiADQfAAaiQADwtB7PDAAEERQYDxwAAQ3gEAC5IFAQh/IwBB8ABrIgMkAAJAIAItADAiBUEBRgRAIAAgAUE4EL4CGgwBCwJAAkACQAJAAkACQCABLQAwIgZBAWsOAgABAgsgAigCKCIEQQRNBH8gAkEIagUgAigCBCEEIAIoAggLIQIgA0EANgJAIANBADYCaCADQUBrIgYgAiACIARBA3RqEEMgA0EQaiICIAZBMBC+AhogACACQTAQvgIiAEECIAVrOgAwIAAgAygAQDYAMSAAQTRqIANBwwBqKAAANgAADAQLIAVFDQEMAgsgBUUNAQsgA0FAayIEIAFBMBC+AhogA0EQaiIBIAQgAhAUIAAgBiABEEIMAgsCQAJAAkACQCABKAIoIgVBBE0EfyABQQhqBSABKAIEIQUgASgCCAsgBSACKAIoIgdBBE0EfyACQQhqBSACKAIEIQcgAigCCAsgBxCoAUH/AXEOAgECAAsgA0FAayIEIAFBMBC+AhogA0EQaiIBIAIgBBAaIABBAiAGayABEEIMBAsgA0ECNgIMIANCBDcCBCADQQA2AhAgA0EANgI4IANBEGoiAiADQQRqEDMgA0FAayIEIAJBMBC+AhogBEEEciEIIANByABqIQYgA0HoAGohCSADKAJIIQcDQCAGIQQgAygCaCICIQUgAkEFSSIKRQRAIAMoAkQhBSAHIQQLIAVFDQIgBUEDdCAEakEIaykDAEIAUg0CIAkhBSAKRQRAIAghBSADKAJEIQILIAJFDQAgBSACQQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = OC();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await LC(await i, n);
  return JC(t, e);
}
(function(i, n) {
  function t(g, c, I, s, Q) {
    return gA(s - 791, c);
  }
  function e(g, c, I, s, Q) {
    return gA(I - 605, c);
  }
  function A(g, c, I, s, Q) {
    return gA(I - -549, g);
  }
  function o(g, c, I, s, Q) {
    return gA(I - 231, c);
  }
  function r(g, c, I, s, Q) {
    return gA(I - 15, s);
  }
  const a = i();
  for (; ; )
    try {
      if (-parseInt(t(1316, "JbSZ", 1293, 1299, 1307)) / 1 * (parseInt(r(473, 449, 469, "Agwb", 464)) / 2) + -parseInt(o(741, "l9U2", 730, 735, 712)) / 3 * (-parseInt(t(1240, "dfob", 1244, 1256, 1258)) / 4) + parseInt(A("AB^!", -96, -76, -93, -70)) / 5 + parseInt(A("2^t]", -58, -67, -85, -94)) / 6 * (parseInt(o(747, "g5%1", 736, 713, 742)) / 7) + parseInt(t(1258, "BjbW", 1305, 1280, 1288)) / 8 * (parseInt(r(533, 495, 511, "ch41", 533)) / 9) + parseInt(r(520, 486, 507, "Fruo", 501)) / 10 * (-parseInt(e(1074, "qRjC", 1076, 1090, 1059)) / 11) + parseInt(e(1056, "9X3M", 1062, 1058, 1069)) / 12 === n) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(sn, 615422 + 4260 * 59 + -61 * 598);
function Eo(i, n, t, e, A) {
  return gA(e - 875, n);
}
function lo(i, n, t, e, A) {
  return gA(A - 606, i);
}
function si(i, n, t, e, A) {
  return gA(A - -111, n);
}
function ci(i, n, t, e, A) {
  return gA(e - 275, t);
}
function sn() {
  const i = ["mJVdJmkuW45sxq", "m8oHWRpcHmoH", "W4KZbJpcSa", "W5v9W4VcP0W", "AWtdOSkspSofW6vcjmo0vdG", "WQC5AmoTWRi", "z0boW5tcQq", "W4ddH1naWRtcVYu2WQC", "zCopjqOn", "W5tcHSo0qGq", "W6OvWPD6W5JdJJmtp8k+", "WQaJs8oLWQa", "wCo6vCkjbCkDW54kW5BcPSoQwW", "W6K9WROUW6O", "WRKRtCoI", "q8o+W7nKrmkcpq7dImok", "ngtcHSooWPitdrX3WRVcImklWOFcOG", "W5ldTs/cJmkP", "W6epgaK6D8kQ", "W7b3WOhdIdm", "W4K8aY4", "tSocj8kdemkqpCkAxmoYfW1C", "ueFdJmoBWO0fW6K", "CSo8WRtcGSo7", "WPJcQ8oeW51c", "sdDsxSkM", "W5uSumkQW64", "W5CSxSkMW6S", "W5XiW6hdTLWxWOBcPSoAW7xcVmkmih4", "W64/pSokWO8", "W67cQNxdKd59WOK8W5tdGmkI", "j8k+W6/dNmkLW5zyfXboW5u", "g2q0W6TQ", "WQZcOSk3W7hdLa", "WRi0W5tcHee", "s8kCWRi8r8k9ma", "WQTJWRBcOcldPSoUW5b+WPbImWu", "F8oHWQFcImoX", "mSowWOaIWRGhW68", "kCoYttZcVa", "W4FcNwxcHCoE", "odxcISkWWOG", "imoZdw/cIq", "WRhcUmooWQNdJSoClmo1W6BcLSkKW7m", "WQ4Wn8ofWQ3cRmoS", "zXFcSmkKW4a", "W4FcK2pcICkr", "W6lcPhxdL2L4WRKsW4FdUq", "WQvbWPfcdq", "WPeLWOZcMupdQwHKW48", "WOtcQmohW5Xe", "WQ5OWPpdQti", "pwlcGCocWPfZBM97WOFcUG", "WRbcW6z2WQ5Ec8kWW4m9W6a", "W7y4W57cVZvYW5JcU8kBW5e", "mgtcJ8obWPuvxKD5WPNcUCkQ"];
  return sn = function() {
    return i;
  }, sn();
}
function gA(i, n) {
  i = i - (3042 + 7 * 684 + -2459 * 3);
  const t = sn();
  let e = t[i];
  if (gA.GWRzgz === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (let x = 0, E = s.length; x < E; x++)
        Q += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const g = function(c, I) {
      let s = [], Q = 0, x, E = "";
      c = A(c);
      let C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (let l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    gA.BliQRw = g, gA.onsKTA = {}, gA.GWRzgz = !0;
  }
  const o = t[7748 + -26 * 298], r = i + o, a = gA.onsKTA[r];
  return a ? e = a : (gA.DvTYlG === void 0 && (gA.DvTYlG = !0), e = gA.BliQRw(e, n), gA.onsKTA[r] = e), e;
}
class UC {
  [Eo(1316, "CqAB", 1320, 1328) + Eo(1335, "*kBY", 1381, 1362) + lo("B5]p", 1083, 1065, 1092, 1084)] = !1;
  async [lo("(u0b", 1068, 1063, 1113, 1087)](n) {
    function t(a, g, c, I, s) {
      return lo(I, g - 470, c - 420, I - 381, a - -1205);
    }
    function e(a, g, c, I, s) {
      return ci(a - 174, g - 231, s, c - -5);
    }
    function A(a, g, c, I, s) {
      return lo(s, g - 111, c - 209, I - 290, g - -1255);
    }
    function o(a, g, c, I, s) {
      return si(a - 435, I, c - 377, I - 488, g - 777);
    }
    function r(a, g, c, I, s) {
      return si(a - 0, c, c - 483, I - 483, s - -89);
    }
    try {
      const a = n + (t(-119, -107, -144, "QET[", -116) + "/") + Ja;
      await X0(a), this[e(743, 746, 763, 772, "LiDZ") + t(-132, -131, -139, "Szzu", -105) + e(774, 781, 768, 740, "Fruo")] = !0;
    } catch {
      this[r(244, 249, "Agwb", 251, 264) + A(-204, -177, -152, -154, "^k(c") + e(785, 786, 758, 756, "*kBY")] = !1, console[A(-177, -174, -168, -162, "^k(c")](Ja + (e(731, 748, 732, 715, "Fruo") + o(1128, 1129, 1117, "(u0b") + e(727, 768, 754, 770, "Fruo") + e(768, 742, 740, 718, "]$I]") + e(787, 747, 770, 777, "@RJ%") + o(1176, 1169, 1146, "@RJ%") + t(-130, -118, -141, "!j7z") + A(-168, -154, -139, -154, "YWmr") + A(-192, -164, -152, -144, "m0FA") + e(776, 783, 772, 750, "KD8O") + t(-93, -100, -75, "l%s[") + A(-156, -142, -157, -142, "DIT0") + o(1120, 1121, 1109, "m0FA") + A(-149, -148, -134, -165, "DIT0") + "n."));
    }
  }
  [ci(755, 745, "^k(c", 741) + si(337, "giT4", 347, 344, 363) + ci(740, 771, "IFIK", 761) + "ed"]() {
    function n(e, A, o, r, a) {
      return Eo(e - 450, e, o - 223, r - -1026);
    }
    function t(e, A, o, r, a) {
      return Eo(e - 120, e, o - 348, r - 67);
    }
    return this[t("g5%1", 1415, 1429, 1432) + n("ZHW$", 370, 350, 343) + n("Yr%[", 319, 303, 305)];
  }
}
class Ii extends Error {
  name = "SkipLicenseValidationError";
  log() {
  }
}
function uo(i, n, t, e, A) {
  return q(n - 178, A);
}
(function(i, n) {
  function t(g, c, I, s, Q) {
    return q(Q - 324, g);
  }
  function e(g, c, I, s, Q) {
    return q(g - -728, I);
  }
  var A = i();
  function o(g, c, I, s, Q) {
    return q(c - 414, I);
  }
  function r(g, c, I, s, Q) {
    return q(c - -219, g);
  }
  for (; ; )
    try {
      var a = parseInt(t("pIF2", 620, 642, 670, 637)) / 1 * (parseInt(t("0^zA", 669, 617, 645, 650)) / 2) + -parseInt(t("Mjf(", 624, 667, 653, 636)) / 3 + parseInt(r("pIF2", 74, 89, 46, 87)) / 4 * (parseInt(e(-412, -403, "$EQt", -398, -427)) / 5) + parseInt(r("$EQt", 117, 136, 139, 127)) / 6 * (parseInt(t("9lpH", 617, 637, 648, 653)) / 7) + parseInt(r("vQ3S", 108, 80, 84, 130)) / 8 + parseInt(o(759, 774, "OEH#", 774, 783)) / 9 + -parseInt(t("NJ4t", 695, 681, 705, 667)) / 10;
      if (a === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(cn, 9013 * 184 + 155732 * -6 + 2 * 75087);
function cn() {
  var i = ["W7lcMIpdVYq", "WOFcTSoFW5tdOW", "WRhcGSo9WPDF", "u8oxWQbOmq", "mtvSW7/cLCoIWQ3dR8oyiCkllHjm", "eComoaGO", "W60zW7qNW7K", "WOVcJr/dKSoJ", "m8kKhmoaqq", "W7RcHCoUW5GpWOiFWQDBFf88W7S", "WRJdNSk3WOnR", "FCkDWQPjW6S", "WOtcOmk/bCkb", "WRbtkCkEuW", "WQTjW5yRcG", "hLxcVq", "yZtdTf4r", "sxC1mmkX", "tqdcKttdRq", "h8oNmsWK", "WOBcMmoq", "dvxdGMNcIaZcKZfHlmkKEdK", "BYNdQhim", "DSo1xCojtmokk8oMma", "c8oJWRlcHmoM", "W5jzWRjiW7i", "h3xcOcFcSW", "WOldKbJdMXm", "W7tdP8oc", "W4Cil8ouWO4", "WQPlBu9D", "iSoCW50sWRWeWPPHW5RcHq7dRCk1", "vHBcPJNdLq", "cthcTLCK", "WOFcMmog", "cwq5", "nJjKW7xcNSoTWQdcK8oXamkooWG", "W5etkmojWO8", "WQndW4y", "WORcKCoBwmkt", "A8keWPFcT8oyWOvXWQRcR8kHjru", "WQzjhCokW4ZcV0lcMG", "p8oeW7ddP8kF", "WQ3dUCorsYVdOmkl", "e3NdGMLK", "qCoCpYVdOq", "xGBdTNxdQmo2WQeEjIldTsldJmkL", "W4OopCodWPu", "ow3cQcusoJlcOvNdPW", "imk3aCoavW", "WRfBWPbSWQRdQhNcLr7dHaFcKSkr", "iCoEW5HDW6jVW5PXW6G", "WP3cRvHHzW", "WOlcV8kUomkD", "W5xcHmogW5ddI8o2WQm", "W5FdKtXScq", "dxNdHW", "umoliWFdUa", "WO3cT8kQgmkA", "WQLqbW", "DtdcSYfXWP7dVSoEj0ZcO8ofW5JcSG", "uCobpG", "W77cICoWsNe", "m3JcOSot", "dsb1zSk0WQqcWRldPYu", "gSojW4xdQcBdULFdR8kgWRNdT8kEW67dOa", "WRbpANnF", "W53cGtVdUqVdKc3cHW", "e2a+pmon", "n3pcTG", "WQjayq", "WOhcNCocW5tdOG", "W6BdGSkGW5qAfSonW5X7WQVcTN3cMq", "WQrfg8kLWPO", "W5FdGmkeWOdcTSk3WRH3g2/dLqm", "yJRdRN4w", "WRFcGmo9WPzy"];
  return cn = function() {
    return i;
  }, cn();
}
function Se(i, n, t, e, A) {
  return q(e - -450, n);
}
function st(i, n, t, e, A) {
  return q(n - 932, i);
}
function q(i, n) {
  i = i - 290;
  var t = cn(), e = t[i];
  if (q.RckDwx === void 0) {
    var A = function(c) {
      for (var I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", Q = "", x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (var f = 0, h = s.length; f < h; f++)
        Q += "%" + ("00" + s.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    }, o = function(c, I) {
      var s = [], Q = 0, x, E = "";
      c = A(c);
      var C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (var l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    q.iNDnQY = o, q.EmjKgp = {}, q.RckDwx = !0;
  }
  var r = t[-1 * 2321 + -3320 + 5641 * 1], a = i + r, g = q.EmjKgp[a];
  return g ? e = g : (q.DETyNW === void 0 && (q.DETyNW = !0), e = q.iNDnQY(e, n), q.EmjKgp[a] = e), e;
}
function fe(i, n, t, e, A) {
  return q(n - -221, t);
}
function Yt(i, n, t, e, A) {
  return q(t - 795, n);
}
class Ha {
  constructor(n) {
    this[e("pM4O", 550, 547, 513) + e("cuFV", 504, 483, 508)] = n;
    function t(r, a, g, c, I) {
      return q(a - 271, I);
    }
    function e(r, a, g, c, I) {
      return q(c - 178, r);
    }
    function A(r, a, g, c, I) {
      return q(I - 492, r);
    }
    function o(r, a, g, c, I) {
      return q(r - -794, c);
    }
    try {
      this.#A = n[e("y00u", 484, 502, 495, 508) + A("1MwV", 792, 779, 779, 811) + t(628, 594, 618, 591, "1MwV")] && JSON[o(-447, -410, -414, "hJWm", -441)](n[o(-455, -461, -428, "9%Z7", -433) + o(-502, -525, -477, "5gu6", -491) + e("1MwV", 481, 539, 501, 489)]), this.#e = n[o(-448, -428, -454, "K$bm", -452) + A("@LK0", 857, 862, 823, 823)];
    } catch (r) {
      console[e("@LK0", 484, 498, 503)](r);
    }
  }
  #A;
  #e;
  get [fe(47, 73, "OEH#") + "id"]() {
    function n(A, o, r, a, g) {
      return fe(A - 381, o - -625, r);
    }
    function t(A, o, r, a, g) {
      return fe(A - 379, a - 815, o);
    }
    function e(A, o, r, a, g) {
      return fe(A - 251, a - 1100, A);
    }
    return this[t(930, "6WCX", 960, 932) + t(933, "9lpH", 998, 960)][n(-528, -551, "Xw24") + e("joI9", 1189, 1193, 1169)];
  }
  get [st("]$EO", 1246) + "s"]() {
    function n(t, e, A, o, r) {
      return st(A, t - -1058);
    }
    return this[n(181, 181, "1MwV") + n(202, 216, "5gu6")][n(235, 242, "ZlIk") + "s"];
  }
  get [uo(520, 534, 551, 516, "0^zA") + Se(-93, "pM4O", -113, -129)]() {
    function n(A, o, r, a, g) {
      return Se(A - 452, A, r - 250, o - -169);
    }
    function t(A, o, r, a, g) {
      return Se(A - 82, A, r - 115, o - 842);
    }
    function e(A, o, r, a, g) {
      return fe(A - 255, g - 1117, r);
    }
    return this[n("hJWm", -308, -292) + n("ZlIk", -282, -269)][e(1200, 1245, "1!Ed", 1202, 1220) + t("ZhLO", 724, 697)];
  }
  get [st("$^e&", 1285) + "b"]() {
    return this.#A;
  }
  get [Se(-196, "wZt5", -197, -159) + fe(159, 138, "L1B9")]() {
    return this.#e;
  }
  get [st("pIF2", 1282) + st("w3s5", 1284) + fe(148, 144, "fLOB") + Yt(1110, "$^e&", 1095)]() {
    function n(o, r, a, g, c) {
      return Yt(o - 270, a, c - -697);
    }
    function t(o, r, a, g, c) {
      return st(a, r - -1623);
    }
    function e(o, r, a, g, c) {
      return uo(o - 186, r - -700, a - 208, g - 108, c);
    }
    function A(o, r, a, g, c) {
      return Yt(o - 174, a, c - -1570);
    }
    return !!this.#A?.[e(-199, -202, -166, -195, "x!DQ") + e(-165, -168, -157, -184, "fLOB")]?.[n(389, 441, "mVoR", 386, 404) + A(-394, -449, "UtbC", -413, -412) + e(-201, -221, -235, -226, "L1B9") + n(388, 407, "speZ", 409, 402) + t(-336, -340, "x!DQ") + n(427, 460, "TaN&", 419, 456) + e(-203, -204, -199, -228, "mVoR")];
  }
  get [Yt(1110, "Mjf(", 1140) + Se(-118, "wZt5", -111, -141) + fe(156, 134, "ZlIk") + fe(50, 78, "wZt5") + Se(-87, "$EQt", -105, -110) + uo(451, 474, 438, 480, "L1B9")]() {
    function n(o, r, a, g, c) {
      return Yt(o - 332, a, c - -275);
    }
    function t(o, r, a, g, c) {
      return Se(o - 263, r, a - 251, g - 403);
    }
    function e(o, r, a, g, c) {
      return Se(o - 149, r, a - 73, a - 408);
    }
    function A(o, r, a, g, c) {
      return uo(o - 385, r - -464, a - 469, g - 284, g);
    }
    return !!this.#A?.[t(354, "u[QO", 300, 317) + t(235, "cuFV", 235, 250)]?.[A(88, 71, 73, "OEH#") + t(255, "x!DQ", 281, 268) + t(319, "$EQt", 271, 286) + e(271, "Owze", 307) + e(319, "6WCX", 299) + n(836, 869, "TaN&", 826, 864) + A(76, 56, 87, "Kv@!")];
  }
}
function TA(i, n, t, e, A) {
  return tA(i - 783, e);
}
(function(i, n) {
  const t = i();
  function e(a, g, c, I, s) {
    return tA(s - -990, c);
  }
  function A(a, g, c, I, s) {
    return tA(s - -580, a);
  }
  function o(a, g, c, I, s) {
    return tA(g - 791, a);
  }
  function r(a, g, c, I, s) {
    return tA(c - 382, g);
  }
  for (; ; )
    try {
      if (parseInt(A("7QwV", -80, -143, -143, -119)) / 1 + -parseInt(A("0TkS", 216, 235, 160, 105)) / 2 + -parseInt(A("t^9X", -20, 30, 205, 65)) / 3 + parseInt(o("nT5q", 1444, 1428, 1337, 1544)) / 4 + parseInt(r(911, "[^Fl", 816, 851, 913)) / 5 * (-parseInt(r(843, "H[j%", 970, 849, 1043)) / 6) + -parseInt(e(-599, -402, "7QwV", -641, -503)) / 7 + parseInt(A("qghJ", -93, -117, -148, -141)) / 8 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(In, -256150 + -478 * -2541 + -92444);
function vA(i, n, t, e, A) {
  return tA(n - -507, i);
}
function z(i, n, t, e, A) {
  return tA(A - -690, t);
}
function $(i, n, t, e, A) {
  return tA(i - 639, e);
}
function In() {
  const i = ["kGb/", "W6RdSmo/WRFcOW", "W5TukCoG", "ASoZW5aRnq", "W4pcHw7cT34", "WOqFW7RdGhSTDCoNurHFW4rd", "W7bzWR7cNZ8", "W64iW5FdLCkF", "W4lcPwpcU2q", "WPVdJr0", "W47dVmkGWRZdNW", "xmoAadtcOq", "h8kEymkWW4O", "f1uUoCoI", "W5/cT8kfbbe", "W67dMSoOWOCF", "WPBdLdrCnW", "omoqASkm", "WOr2ma", "W5dcS8kfkXa", "W7lcTmoAW73cIW", "o8kyCmkHW4O", "WR/dGmocW5y", "iComzCknWOO", "WQxcJb7dUCod", "WOpdNmo9fHS", "WRRcGJ8dDW", "WQRcLXldR8oE", "WPFdUmotrbq", "tSoisa", "WQ7cNWxdQCoy", "WRddHmopW5W+", "geFdSYRdJq", "n8kAygOa", "peaV", "pSkNCSohWOK", "WPldGqXwpa", "vSoniJbECSoGc8k4nmovWOhdSq", "WRpcGxxdP1S", "W6pcHw7cT34", "WO/dLSoOaWa", "y2a6", "W7JdRCkrvSoX", "jCkVy8omWO4", "x8oFvIq7", "WQddTKK/W5jCW4tcIa", "e8kzD1ya", "WR7cGvZdGLe", "fCogWQVdNGq", "pCoFpwZdHW", "WOVdPCozsXq", "jCoXimo0dW", "W5ddTmkMWQBdMW", "nCo2WPddPrG", "W4LthrtcPq", "W4RdImo/W5JdGG", "v8kDhq", "W5XeWQi", "B2HqW65/", "cCkFyq", "W6GwECkhfG", "nmkHWPzWzfZcU8ozfqddVCos", "WOxcLgpdHHi", "ugHwW6n+", "nCoupa", "W7FcO8obW63cKa", "W4bFda", "WONdUCoFbaW", "W41Bdq", "W6y7W5BdPSkt", "W5zjiSo2W5O", "B8owW5eXea", "ivmZo8o1", "WPPWjG", "WOVdL8okW7Kk", "wmkwaGJcSa", "oSo8WPNdKW8", "W4HCaam", "feFdPwhcGq", "q8klcSk1kG", "kmoqphRcGG", "W6pdLCoVWOeN", "eeDGdt8", "tSojqb0", "kaOIr8kyW5BcK08", "nCoMWO3dOHi", "WOpdLSoVmGm", "h07dPq", "W4xdM8k7WQya", "W4tdP8octCou", "WR7cNgRdJLy", "iCoFFSkqWPS", "D2HwW75Y", "WOr2lJO5", "W5NcPwRcV18", "pCoFpwZcTW", "W5RdRCow", "h8opoeqg", "W5VdR8kGWQddIa", "nCo8WPddOG8", "lwddJCoGW6S", "W6iZW4hdOmkv", "kgZdICoQW5q", "WRJcMqDkFq", "C307smkM", "W7BcTmokW7RcHG", "W5ZcT8kvzG", "CwWG", "W47dUSobrmoT", "WOhdLSoPmG8", "WRlcRbe8DG", "cmoPAJZdMa", "s8oorrCg", "W5xdR8kNWQFdKG", "W6xdRmoDWRJcTa", "zhS4xSkX", "WPFdHqO", "gCkCas7cUW", "WPFdMmoPbaS", "E8oebCk9pq", "e2ldM8oJWRG", "fmk/xSoyWQK", "mCoFkgy", "F8oCd8k4oG", "fSkbrCkcWQS", "pSopj2el", "iCoYWOZdUbq", "puddTwhdJW", "WOrWntSr", "W7VcRvjUW5G", "W7DnbG5y", "W7GCEq", "W5HkWQxcNG", "eeRdOG", "uSocWO50qG", "WP7dUmoiW5KE", "W4Pskmo9W4a", "kmoQE8kqW4m", "W5faabNcUq", "WPNdJXzbjG", "W7hcO8oCW7hcKq", "WRNcRmk+W6/dV0bMWOBdOmoxr8k/", "W5ZdN8o3W4ldGW", "mmk7lrRcUG", "eKZdUhFdHa", "Eve5C8kw", "mCkRF8orWOi", "WRFcM2pdJHi", "CSoffCk5Aq", "WOytW73dHNOVECoQrdXGW7zd", "W5LvmSoNW5S", "W51fnCoFW50", "ASkobwG", "W79AbGq", "WOpcSCkfjmkgo0NcHmkzkMpcOq", "W53dUmk8WRZdNW", "FSoia8kYoG", "fMGiDSoC", "C8oeeSkzja", "imo7jSo/eG", "W6KGW5RdSmko", "p8oYWPldVWC", "W5/dImoKW5NdHa", "CmovWOHFxW", "DMaHvCkX", "W7PbfYvg", "W7RcTSoD", "WRFcLqVdMCoJ", "j8kSnIJcVa", "jCobm2Gq", "W7usbr7cRG", "uwCUv8k+", "WRdcKWCjFa", "pSoEpeZcHG", "W5zdpHNcTq", "mSkWkJVdTq", "irv+cY4", "W7FcP0iQW5q", "WO7dUCoTsXm", "WO/dMmoVfay", "W6JdKCo1WPeQ", "mCkHWPr+AvVdL8ofnGZdRComWPy", "huBdSq", "fLT/W6lcVq", "WPFdUmovxaK", "WOtdUmovwrm", "x8kDa29h", "l8o9Cmon", "W4C5W6jYWQq", "iSo0W4S9mW", "q8ocqbmD", "W5m9W7zGWRq", "r8oiWOG", "ChCJx8kp", "WRZcNgtdGLm", "W4ddTSoPWRZcQq", "CfS/", "hfP4W6i", "lCoMlCoP", "qmocuJOF", "uSoZW5aG", "BwrIW71r", "W5rhmG", "jSoHWPFdUaK", "W6FdQ8kZWO7dQW", "WOW1W6f9WRy", "wmogWPnE", "WQpcKaldR8oG", "uSo3W7ajfW", "W5hdImoJW57dNG", "aLvJW7G", "CJdcMSk2WQewimoFW6JcGSoUWPy", "eCkdDSkH", "W4pcSmoCW7dcIG", "oCojzCkhWO0", "W5joWRJcSZG", "W4VcMeehzXTQWPVdIfZcNgnebW", "W7jhaavf", "WQxcLgldHq", "WQNdPCkABI8", "cgRdI8oRW7y", "nmkXnYRcPW", "W64bzCkBaq", "W5/cLmo3WOSS", "hfv9W7/cTq", "W79AbIXc", "C8owWRvkyW", "vSkgeMvB", "eLZdPxddJG", "W7hdSCoaW7hcLW", "mWz+cJu", "fuBdOKhdJa", "nmoylwZcIq", "d8o8mCokjq", "fmoylwZcIq", "dSoPDYddMq", "l8kFgJ3cVa", "oKyOnCo4", "c8oBrZadWOCmb8o7WP4QhIK", "W4aUW6TGWQi", "F8okeSk/iq", "efRcHYlcLa", "iCo3nW", "W4pdJ8omW53dUq", "W6hcP146", "W5NcJwhcU3q", "D8kvtH/cMG", "ySknpmovW4PZW5FcMSo3WONdNJy/", "u8ovWP9v", "WPhdQ8owqWq", "WOBdQCoo", "cwJdLwFdIa", "bCk7kIVcUq", "kCo9CmkhW5u", "W5FdTSozyq", "c8o0AHBdIW", "nCk7ptRcSa", "ACoibJyN", "p8k/lt3cVq", "W5BcGCkIrv1SWRP2C8o8W7lcH8kIba", "W5xdJbfwmq", "WRNdTs19lq", "D189uMVdPJHqemkWW4PifG", "ca5Vati", "dmozqtqcWOWmiSo+WOSdlsm", "b8kEzKGa", "bColzSkNWR0", "W7NcRue", "WOhdR8oBxHu", "p8ozFW", "W7pcTmoAW5RcJa", "p8oGWQhdObW", "WOJdRHLymq", "WRtcLJtdJ8ov", "WQTXia8e", "dmksCweh", "kmonia", "W5XyWPpcHIW", "nH/cMbtcNq", "W5ddRCoeFmoA", "WP9+jJe0"];
  return In = function() {
    return i;
  }, In();
}
function tA(i, n) {
  i = i - 421;
  const t = In();
  let e = t[i];
  if (tA.fEiKSf === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (let x = 0, E = s.length; x < E; x++)
        Q += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const g = function(c, I) {
      let s = [], Q = 0, x, E = "";
      c = A(c);
      let C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (let l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    tA.DSOwUn = g, tA.uLpRNJ = {}, tA.fEiKSf = !0;
  }
  const o = t[-14189 + 1 * 14189], r = i + o, a = tA.uLpRNJ[r];
  return a ? e = a : (tA.MYACeo === void 0 && (tA.MYACeo = !0), e = tA.DSOwUn(e, n), tA.uLpRNJ[r] = e), e;
}
function AA(i, n, t, e, A) {
  return tA(A - 706, n);
}
class YC {
  constructor(n) {
    function t(e, A, o, r, a) {
      return tA(o - 707, a);
    }
    this[t(1337, 1515, 1376, 1365, "3[Pj") + t(1154, 1321, 1183, 1156, "m1zQ") + "d"] = n;
  }
  [z(-167, -87, "b$Ne", -81, -74) + "se"];
  [z(33, -68, "b$Ne", -87, 4) + $(1190, 1087, 1244, "J#pW") + vA("ITdJ", 12) + z(-281, -234, "gBsU", -201, -184)] = [AA(1235, "YcdS", 1150, 1269, 1134) + $(1175, 1223, 1128, "7^Ty") + "ic", AA(1239, "qghJ", 1178, 1287, 1189) + $(1210, 1150, 1296, "Z^Q$") + "ic"];
  [TA(1311, 1186, 1277, "TnN8") + vA("bMkL", 98)];
  async [AA(1406, "Z&MK", 1154, 1379, 1287)](n) {
    const t = await this[e(1199, 1355, "gBsU", 1358, 1240) + e(1164, 1180, "ITdJ", 1340, 1269) + e(1152, 1246, "7QwV", 1206, 1241)](n);
    function e(a, g, c, I, s) {
      return AA(a - 119, c, c - 131, I - 444, s - -121);
    }
    function A(a, g, c, I, s) {
      return AA(a - 66, s, c - 367, I - 390, a - -543);
    }
    await Promise[o(909, "Ga5[", 967, 833) + A(782, 848, 752, 700, "*XHq")]([this[A(753, 670, 759, 872, "2cvG") + A(642, 632, 501, 602, "FqkK") + "d"][e(1253, 1179, "kKUc", 1172, 1286)](n), this[r(569, "[^Fl", 750, 651) + o(994, "J#]S", 1004, 914) + "e"](t)]);
    function o(a, g, c, I, s) {
      return vA(g, I - 761);
    }
    function r(a, g, c, I, s) {
      return $(I - -594, g - 389, c - 452, g);
    }
    this[e(1125, 1153, "p%()", 919, 1053) + r(574, "J#pW", 702, 587) + o(1041, "7^Ty", 1042, 902)]();
  }
  async [$(1163, 1191, 1156, "3%Jm") + $(1182, 1184, 1064, "p%()") + "se"](n) {
    function t(r, a, g, c, I) {
      return z(r - 126, a - 69, a, c - 452, I - 1376);
    }
    function e(r, a, g, c, I) {
      return TA(c - -306, a - 254, g - 135, a);
    }
    function A(r, a, g, c, I) {
      return $(a - -783, a - 473, g - 150, I);
    }
    function o(r, a, g, c, I) {
      return z(r - 11, a - 479, r, c - 469, a - 1203);
    }
    try {
      if (A(383, 287, 186, 304, "0TkS") === A(435, 431, 541, 384, "0TkS")) throw new _0x129f3b(o("ITdJ", 1105, 1055, 1060, 985) + e(1081, "Z&MK", 1068, 1151, 1130) + A(541, 438, 484, 388, "7^Ty") + A(461, 524, 507, 594, "*XHq") + ".");
      {
        const r = await fetch(n);
        if (!r.ok) {
          if (e(1087, "@OP9", 1023, 1102, 1172) === e(894, "ZcPK", 801, 926, 1052)) throw new Error(A(568, 484, 370, 457, "@OP9") + o("cuXL", 1068, 1001, 980, 1134) + e(865, "3%Jm", 949, 929, 1048) + A(480, 477, 368, 453, "Ga5[") + "d.");
          return _0x4f3b61 instanceof _0x48419e && _0x586189[t(1224, "N54P", 1152, 1370, 1266) + t(1322, "ZcPK", 1257, 1366, 1382)](_0x46a912), null;
        }
        this[o("y7*7", 968, 1052, 1024, 1097) + "se"] = await r[t(1055, "wLAg", 1119, 1122, 1153)]();
      }
    } catch (r) {
      A(513, 434, 537, 410, "88Rm") !== A(209, 283, 249, 323, "tgMp") ? (this[t(1212, "Q@Tt", 1147, 1322, 1184) + "se"] = void 0, _0x2472fe[e(1192, "7QwV", 1063, 1167)](_0x26763c)) : (this[A(310, 306, 250, 169, "7QwV") + "se"] = void 0, console[e(1151, "tgMp", 1145, 1079)](r));
    }
  }
  async [vA("u*1(", 125) + AA(1260, "[^Fl", 1407, 1259, 1310) + "e"](n) {
    this[o(1292, 1358, 1363, 1259, "bMkL") + o(1420, 1377, 1467, 1506, "2cvG")] = void 0;
    function t(r, a, g, c, I) {
      return AA(r - 458, c, g - 31, c - 302, g - -1170);
    }
    function e(r, a, g, c, I) {
      return $(a - -1629, a - 323, g - 382, I);
    }
    if (!n)
      if (t(-10, 169, 84, "b$Ne") === e(-348, -378, -494, -504, "Zt%U")) {
        console[t(38, 174, 123, "b$Ne")](e(-606, -548, -632, -490, "Z^Q$") + o(1404, 1280, 1378, 1243, "NzM9") + o(1240, 1345, 1385, 1257, "J#pW") + o(1231, 1366, 1382, 1452, "FqkK") + o(1321, 1304, 1400, 1178, "Xmjh")), this[t(200, -73, 67, "TnN8") + "se"] = void 0;
        return;
      } else _0x38f0bf[o(1309, 1184, 1235, 1086, "wLAg")]();
    function A(r, a, g, c, I) {
      return z(r - 58, a - 142, g, c - 464, a - 1180);
    }
    function o(r, a, g, c, I) {
      return TA(a - -89, a - 173, g - 23, I);
    }
    await this[A(1113, 1166, "drcm", 1272) + A(898, 1015, "8i9#", 996) + "se"](n);
  }
  async [vA("Xmjh", 11) + vA("N54P", 50) + AA(1136, "0TkS", 1140, 1159, 1129)](n) {
    function t(g, c, I, s, Q) {
      return $(I - 359, c - 358, I - 9, Q);
    }
    const e = await fetch("" + n + this[t(1567, 1712, 1690, 1716, "YcdS") + r(329, 301, "qghJ", 270) + t(1533, 1708, 1597, 1615, "y7*7") + A("cuXL", 287)][2264 * -1 + -2 * -4541 + -2 * 3409]);
    function A(g, c, I, s, Q) {
      return vA(g, c - 373);
    }
    const o = e.ok ? 0 : -8216 + -4 * -1772 + 1129;
    function r(g, c, I, s, Q) {
      return AA(g - 325, I, I - 54, s - 34, s - -956);
    }
    function a(g, c, I, s, Q) {
      return z(g - 288, c - 89, c, s - 198, s - -284);
    }
    return "" + n + this[t(1628, 1571, 1527, 1469, "2cvG") + a(-317, "drcm", -535, -444) + A("TnN8", 296) + r(185, 166, "Zt%U", 227)][o];
  }
  [$(1166, 1058, 1027, "xx^S") + AA(1093, "nT5q", 1311, 1264, 1216) + "s"](n) {
    function t(A, o, r, a, g) {
      return z(A - 177, o - 299, o, a - 125, g - 1233);
    }
    function e(A, o, r, a, g) {
      return $(A - -1236, o - 378, r - 436, r);
    }
    n[e(16, 58, "2cvG") + "ch"]((A) => console[t(1102, "J#pW", 1011, 855, 984)](A));
  }
  [TA(1315, 1258, 1416, "Z^Q$") + vA("O@Yi", 60) + AA(1361, "7^Ty", 1281, 1180, 1297)](n) {
    function t(e, A, o, r, a) {
      return $(e - -1373, A - 444, o - 285, o);
    }
    n[t(-256, -187, "ISE1") + "ch"]((e) => console[t(-108, -2, "y7*7")](e));
  }
  [TA(1276, 1411, 1217, "3%Jm") + z(-200, -252, "ZcPK", -159, -261)]() {
    function n(A, o, r, a, g) {
      return AA(A - 245, a, r - 386, a - 133, r - -1049);
    }
    function t(A, o, r, a, g) {
      return vA(o, A - 341);
    }
    function e(A, o, r, a, g) {
      return TA(o - -216, o - 276, r - 367, a);
    }
    return window[t(457, "J#]S") + t(367, "b$Ne")][e(1235, 1111, 1104, "2cvG") + n(328, 348, 227, "Z&MK")];
  }
  [$(1111, 985, 1039, "Z^Q$") + TA(1231, 1153, 1097, "3[Pj") + AA(1358, "@OP9", 1467, 1362, 1356)]() {
    function n(r, a, g, c, I) {
      return AA(r - 142, r, g - 291, c - 43, g - -15);
    }
    function t(r, a, g, c, I) {
      return vA(I, c - 1181);
    }
    function e(r, a, g, c, I) {
      return $(I - 82, a - 56, g - 462, r);
    }
    function A(r, a, g, c, I) {
      return $(r - -263, a - 134, g - 478, c);
    }
    function o(r, a, g, c, I) {
      return TA(c - -1216, a - 268, g - 313, a);
    }
    try {
      if (e("tgMp", 1357, 1238, 1450, 1338) !== t(1207, 1124, 1213, 1106, "tJ(^")) return _0x37937a[e("Z^Q$", 1223, 1150, 1256, 1275) + e("nT5q", 1418, 1259, 1220, 1282)][o(59, "8i9#", 78, 83, 88) + A(889, 769, 812, "qghJ", 848)];
      if (!this[A(950, 1011, 897, "gBsU", 962) + "se"]) {
        if (t(1177, 1125, 1195, 1224, "Q@Tt") !== o(211, "TnN8", 100, 238, 313)) throw new Ii(A(845, 755, 799, "Ga5[", 728) + t(1124, 1222, 1066, 1120, "ITdJ") + n("y7*7", 1378, 1244, 1344, 1168) + A(881, 966, 811, "t^9X", 750) + ".");
        return this[e("O@Yi", 1415, 1416, 1201, 1317) + n("y7*7", 1066, 1148, 1243, 1166) + "se"]()?.[t(1348, 1445, 1411, 1317, "qghJ") + e("Z^Q$", 1140, 1214, 1157, 1194)]?.[t(1396, 1298, 1203, 1328, "gBsU") + e("qghJ", 1457, 1279, 1435, 1341)];
      }
      if (!this[t(1099, 1249, 1227, 1128, "7^Ty") + o(282, "wLAg", 171, 248, 162) + "d"][e("Z^Q$", 1354, 1506, 1463, 1403) + A(888, 996, 978, "p%()", 903) + n("kKUc", 1018, 1138, 1033, 1112) + "ed"]())
        throw o(144, "H[j%", 288, 242, 147) === t(1406, 1363, 1235, 1313, "88Rm") ? new Ii(A(942, 951, 978, "J#pW", 971) + n("wLAg", 1314, 1324, 1283, 1220) + A(1074, 995, 1123, "J#pW", 1202) + t(1283, 1144, 1335, 1268, "J#pW") + ".") : new _0x2f2144(e("aDdQ", 1417, 1252, 1520, 1382) + o(174, "3[Pj", 245, 201, 180) + e("Ga5[", 1222, 1130, 1209, 1236) + n("0TkS", 1379, 1384, 1497, 1399) + "d.");
      this[t(1243, 1329, 1196, 1282, "*XHq") + n("qghJ", 1135, 1231, 1157, 1345)] = new Ha(WC(this[t(1286, 1088, 1184, 1182, "p%()") + "se"], this[A(1023, 898, 902, "FqkK", 929) + t(1214, 1173, 1406, 1310, "nT5q")]())), this[A(1018, 945, 994, "Z&MK", 989) + o(31, "aDdQ", 97, 84, 128) + "s"](this[o(201, "Z^Q$", 326, 256, 184) + o(107, "Xmjh", 89, 90, 166)][n("tJ(^", 1313, 1357, 1405, 1467) + "s"]), this[o(209, "gBsU", 309, 207, 200) + t(1222, 1153, 1228, 1110, "3%Jm") + o(-51, "gBsU", -92, -8, 32)](this[A(834, 921, 827, "ISE1", 922) + n("ITdJ", 1173, 1276, 1190, 1351)][e("NzM9", 1175, 1305, 1160, 1174) + A(880, 840, 925, "NzM9", 1015)]);
    } catch (r) {
      if (A(872, 993, 1004, "TnN8") !== o(-26, "tJ(^", -5, 33)) {
        if (r instanceof Ii)
          if (t(1285, 1122, 1184, 1226, "N54P") !== e("qghJ", 1115, 1281, 1203, 1205)) {
            if (!this[o(42, "bMkL", 67, 140) + "se"]) throw new _0x1bbf42(o(-1, "b$Ne", 37, 47) + t(1334, 1164, 1239, 1257, "J#]S") + o(174, "FqkK", 198, 246) + t(1299, 1176, 1152, 1176, "Zt%U") + ".");
            if (!this[e("J#]S", 1386, 1323, 1280, 1383) + A(911, 940, 973, "88Rm") + "d"][e("t^9X", 1409, 1426, 1460, 1339) + A(1073, 1198, 1035, "H[j%") + A(1041, 1138, 1011, "N54P") + "ed"]()) throw new _0x3ee19e(o(280, "[^Fl", 96, 191) + n("drcm", 1179, 1298, 1191) + t(1359, 1240, 1172, 1230, "tgMp") + o(295, "u*1(", 155, 164) + ".");
            this[e("3%Jm", 1269, 1372, 1321, 1290) + o(-45, "J#]S", -76, 30)] = new _0x25e64b(_0x481a86(this[e("7QwV", 1126, 1049, 1223, 1171) + "se"], this[t(1446, 1398, 1245, 1312, "ZcPK") + e("88Rm", 1244, 1219, 1226, 1247)]())), this[e("tJ(^", 1378, 1193, 1145, 1280) + t(1233, 1255, 1330, 1341, "ZcPK") + "s"](this[t(1290, 1245, 1312, 1282, "*XHq") + o(150, "0TkS", 53, 74)][n("3%Jm", 1250, 1335, 1378) + "s"]), this[o(120, "N54P", -102, -7) + t(1115, 1165, 1118, 1211, "Q@Tt") + t(1273, 1266, 1200, 1234, "Ga5[")](this[A(984, 881, 857, "*XHq") + n("Z&MK", 1238, 1249, 1239)][n("@OP9", 1251, 1238, 1204) + A(1046, 916, 1147, "3%Jm")]);
          } else r[o(192, "Zt%U", 165, 167)]();
        else if (r instanceof Error)
          if (A(832, 895, 871, "cuXL") === t(1180, 1180, 1272, 1171, "u*1(")) console[t(1434, 1330, 1228, 1340, "tJ(^")](r);
          else return null;
        const a = {};
        a[A(876, 816, 939, "nT5q") + o(113, "u*1(", 70, 89)] = !1, a[A(821, 879, 822, "V6bG") + "s"] = [], a[t(1210, 1054, 1048, 1177, "u*1(") + o(2, "aDdQ", 140, 105)] = [], a[o(50, "Z^Q$", 147, 58) + e("Zt%U", 1455, 1340, 1244, 1314) + n("V6bG", 1209, 1326, 1466)] = void 0, a[A(847, 783, 950, "ZcPK")] = function() {
        }, a[e("7^Ty", 1045, 1094, 1256, 1172) + o(29, "cuXL", 128, 32)] = "", this[A(1065, 939, 1028, "Z^Q$") + o(104, "O@Yi", 144, 129)] = new Ha(a);
      } else this[t(1383, 1350, 1416, 1323, "H[j%") + t(1422, 1149, 1187, 1283, "3%Jm") + "d"] = _0x1c6028;
    }
  }
  [z(-33, -21, "^L)Z", -131, -61) + AA(1204, "V6bG", 1132, 1199, 1270) + z(-64, 23, "^L)Z", -139, -89) + z(-74, -36, "3[Pj", -159, -33)]() {
    function n(t, e, A, o, r) {
      return vA(A, o - 1446);
    }
    return !!this[n(1380, 1416, "3%Jm", 1508) + n(1412, 1412, "TnN8", 1473)];
  }
  [TA(1271, 1291, 1193, "Q@Tt") + z(-146, -98, "tgMp", 57, -31) + AA(1127, "FqkK", 1080, 1280, 1181) + "t"]() {
    function n(t, e, A, o, r) {
      return z(t - 446, e - 249, e, o - 8, r - 558);
    }
    return this[n(249, "YcdS", 283, 245, 330) + n(349, "FqkK", 447, 350, 349)];
  }
  [AA(1273, "y7*7", 1273, 1379, 1290) + TA(1414, 1448, 1468, "7^Ty") + "se"]() {
    function n(r, a, g, c, I) {
      return AA(r - 26, I, g - 245, c - 231, g - -236);
    }
    function t(r, a, g, c, I) {
      return $(I - -482, a - 428, g - 306, g);
    }
    function e(r, a, g, c, I) {
      return TA(r - -821, a - 292, g - 397, g);
    }
    if (!this[A(189, 67, 205, "cuXL") + "se"])
      if (A(15, -122, 76, "xx^S") === o(-29, -34, 76, "Z&MK")) {
        _0x4fe599 instanceof _0x392a7c ? _0x5983c3[A(212, 145, 351, "7^Ty")]() : _0x541caa instanceof _0x3d2a90 && _0x1d8afd[t(862, 721, "NzM9", 909, 837)](_0x1ff94e);
        const r = {};
        r[A(20, 45, 20, "N54P") + t(699, 694, "Z&MK", 612, 729)] = !1, r[A(141, 37, 3, "ISE1") + "s"] = [], r[o(-77, -177, -159, "N54P") + e(454, 555, "xx^S")] = [], r[t(686, 810, "tJ(^", 734, 803) + A(27, -23, -80, "h)cf") + t(784, 788, "*XHq", 566, 702)] = void 0, r[e(397, 451, "8i9#")] = function() {
        }, r[e(551, 571, "N54P") + t(613, 812, "y7*7", 799, 725)] = "", this[n(1182, 1180, 1111, 1030, "m1zQ") + o(-247, -185, -239, "aDdQ")] = new _0x46d3f5(r);
      } else return null;
    function A(r, a, g, c, I) {
      return $(r - -1113, a - 467, g - 177, c);
    }
    function o(r, a, g, c, I) {
      return z(r - 176, a - 137, c, c - 300, r - -17);
    }
    try {
      return n(964, 934, 894, 866, "O@Yi") === e(560, 681, "p%()", 661, 540) ? this[n(1179, 1257, 1165, 1044, "YcdS") + A(225, 329, 103, "t^9X", 247) + "se"]()?.[t(686, 661, "N54P", 666, 760) + A(163, 199, 219, "7^Ty", 105)]?.[o(-80, -110, -196, "J#]S", -174)] || [] : JSON[t(616, 561, "tgMp", 659, 671)](this[o(-267, -249, -194, "3[Pj", -172) + "se"]);
    } catch (r) {
      if (t(838, 905, "drcm", 852, 771) !== A(37, 134, -50, "bMkL")) _0x21d37a[t(913, 752, "y7*7", 724, 834) + "ch"]((a) => _0x15aa9c[o(-274, -405, -171, "kKUc")](a));
      else {
        if (r instanceof Error)
          if (e(421, 539, "FqkK") === o(-233, -251, -273, "7^Ty")) w[A(199, 325, 221, "^L)Z") + e(539, 570, "u*1(")](r);
          else {
            _0x19617e[n(899, 861, 991, 1074, "xx^S")](A(72, 4, -3, "Zt%U") + o(-243, -125, -317, "h)cf") + e(614, 530, "J#]S") + o(-19, 74, -29, "Z^Q$") + t(723, 959, "m1zQ", 748, 848)), this[t(715, 665, "@OP9", 740, 696) + "se"] = void 0;
            return;
          }
        return null;
      }
    }
  }
  [$(1061, 1141, 942, "b$Ne") + TA(1346, 1412, 1427, "Q@Tt")]() {
    function n(r, a, g, c, I) {
      return TA(r - -184, a - 120, g - 478, a);
    }
    function t(r, a, g, c, I) {
      return z(r - 233, a - 284, c, c - 251, r - -180);
    }
    const e = this[n(1221, "2cvG", 1330) + n(1042, "[^Fl", 944) + "se"]();
    function A(r, a, g, c, I) {
      return AA(r - 449, g, g - 400, c - 206, r - -1384);
    }
    function o(r, a, g, c, I) {
      return vA(I, a - 1480);
    }
    return e?.[A(-234, -358, "FqkK", -139) + t(-259, -262, -398, "*XHq")]?.[o(1473, 1410, 1364, 1508, "xx^S")] || [];
  }
  [$(1077, 1185, 1013, "nT5q") + z(-30, -229, "aDdQ", -128, -114) + z(-217, -283, "qghJ", -298, -195)]() {
    function n(r, a, g, c, I) {
      return z(r - 172, a - 159, c, c - 318, g - 109);
    }
    function t(r, a, g, c, I) {
      return z(r - 357, a - 424, r, c - 7, g - 581);
    }
    function e(r, a, g, c, I) {
      return vA(g, c - 1261);
    }
    const A = this[e(1415, 1268, "xx^S", 1349) + o(55, -87, "NzM9", -47) + "se"]();
    function o(r, a, g, c, I) {
      return vA(g, c - -26);
    }
    return A?.[o(103, 137, "kKUc", 154) + n(-82, -208, -82, "^L)Z")]?.[t("7^Ty", 428, 342, 404) + n(156, 44, 119, "H[j%")];
  }
}
const Aa = De(void 0);
Aa.displayName = "CommonConfigurationContext";
function $0() {
  const i = re(Aa);
  if (!i)
    throw new Error("Missing provider for CommonConfigurationContext");
  return i;
}
function pA(i, n) {
  i = i - (-1012 + -5242 * 1 + 6420);
  const t = Cn();
  let e = t[i];
  if (pA.SlMwwu === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (let x = 0, E = s.length; x < E; x++)
        Q += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const g = function(c, I) {
      let s = [], Q = 0, x, E = "";
      c = A(c);
      let C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (let l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    pA.kjhdKp = g, pA.HKaawY = {}, pA.SlMwwu = !0;
  }
  const o = t[1 * 5669 + 5174 + -10843], r = i + o, a = pA.HKaawY[r];
  return a ? e = a : (pA.rSgSIj === void 0 && (pA.rSgSIj = !0), e = pA.kjhdKp(e, n), pA.HKaawY[r] = e), e;
}
(function(i, n) {
  function t(g, c, I, s, Q) {
    return pA(c - -124, Q);
  }
  function e(g, c, I, s, Q) {
    return pA(I - 834, c);
  }
  function A(g, c, I, s, Q) {
    return pA(c - -467, Q);
  }
  const o = i();
  function r(g, c, I, s, Q) {
    return pA(Q - -459, s);
  }
  function a(g, c, I, s, Q) {
    return pA(Q - -123, g);
  }
  for (; ; )
    try {
      if (-parseInt(a("MCkv", 44, 46, 50, 55)) / 1 * (-parseInt(a("zjCr", 37, 44, 39, 45)) / 2) + -parseInt(r(-276, -271, -270, "kxxI", -274)) / 3 * (-parseInt(r(-277, -279, -262, "jHa3", -275)) / 4) + -parseInt(a("*1!g", 57, 69, 52, 56)) / 5 * (-parseInt(e(996, "pq^%", 1009, 1017, 1007)) / 6) + -parseInt(A(-298, -290, -299, -300, "jQNH")) / 7 + -parseInt(t(52, 48, 45, 54, "DFT2")) / 8 * (-parseInt(A(-280, -286, -291, -276, "s#6u")) / 9) + -parseInt(t(64, 59, 72, 47, "l4s#")) / 10 * (parseInt(r(-270, -291, -273, "*1!g", -283)) / 11) + -parseInt(a("ZWMJ", 62, 71, 55, 68)) / 12 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Cn, 978584);
function TC() {
  const { assetsDirectoryPath: i } = $0(), [n, t] = oA();
  function e(o, r, a, g, c) {
    return pA(g - -590, o);
  }
  Z(() => {
    async function o() {
      const r = new UC(), a = new YC(r);
      await a[g("7uh[", -426)](i);
      function g(c, I, s, Q, x) {
        return pA(I - -614, c);
      }
      t(a);
    }
    o();
  }, [i]);
  const A = {};
  return A[e("3GfH", -406, -414, -417) + "le"] = n, A;
}
function Cn() {
  const i = ["rNnYpmoKCLqlACoR", "reFdGSoXnJCKd3NcSZO", "qxDXomkKcZT9DCoeW40KeCkC", "W6tcQSkcWRylWOdcICkxf1y", "gKaoxWdcHCoDo8oxWRf4WP5j", "W5HMxmkLamkRjCoWWQ/cVCkngmoKxW", "W7NcGtXPWPJcOIObC2zjgG", "mg/cQ2BcKCo0jse", "aSoZW6OkkmkwiCkW", "W6bgW7JcIqa6W7iXohy", "whhdTSkr", "W5dcTX80WQNdMuxcIda", "CCkgcCo9WQTadmozzCogW5q", "W7WQW6RdGCklomkeWRNcGCoGW6xdMCoy", "WPixn8kDdmkGW7xcRSkLr8kk", "CSkddmo8W6vgmmoIrCo+", "EeVcISksWPidoa81", "n2/dVr7dVSkScby4yCkBla", "WPbeWQRdRfSiWP5d", "ruhdHCo+m09VkNJcHrDaW7O", "b8oNcCoIx2iTcJ/dQxy", "W4moWQNdIM4", "WPVdLK/dV0hdPqaiW5S", "WPCsmmohDCkzW63cO8ki", "rKBcQmk4yq80jG", "W7ZcNSk+abjJnCktW45oW5RcJI8"];
  return Cn = function() {
    return i;
  }, Cn();
}
(function(i, n) {
  function t(g, c, I, s, Q) {
    return kA(Q - -980, I);
  }
  var e = i();
  function A(g, c, I, s, Q) {
    return kA(c - 480, s);
  }
  function o(g, c, I, s, Q) {
    return kA(s - -69, I);
  }
  function r(g, c, I, s, Q) {
    return kA(Q - -237, s);
  }
  for (; ; )
    try {
      var a = -parseInt(t(-616, -615, "UhbO", -612, -610)) / 1 * (-parseInt(t(-616, -606, "iww1", -611, -609)) / 2) + parseInt(r(114, 118, 119, "yA%(", 123)) / 3 * (-parseInt(r(119, 126, 128, "W(jn", 124)) / 4) + parseInt(o(286, 300, "yA%(", 295, 301)) / 5 * (parseInt(A(849, 854, 853, "jGtk", 859)) / 6) + -parseInt(A(851, 839, 843, "V%eP", 834)) / 7 + -parseInt(t(-617, -628, "$N#S", -614, -617)) / 8 + parseInt(A(836, 845, 836, "F6JE", 855)) / 9 + parseInt(A(832, 836, 827, "Qo!9", 843)) / 10;
      if (a === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Bn, -473926 + -7 * -116695 + 163435);
function kA(i, n) {
  i = i - (-5437 * -1 + -1 * 947 + -4136);
  var t = Bn(), e = t[i];
  if (kA.CELUJD === void 0) {
    var A = function(c) {
      for (var I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", Q = "", x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (var f = 0, h = s.length; f < h; f++)
        Q += "%" + ("00" + s.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    }, o = function(c, I) {
      var s = [], Q = 0, x, E = "";
      c = A(c);
      var C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (var l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    kA.asnJsj = o, kA.uQnjur = {}, kA.CELUJD = !0;
  }
  var r = t[7754 + 734 * -3 + -4 * 1388], a = i + r, g = kA.uQnjur[a];
  return g ? e = g : (kA.fyUsPR === void 0 && (kA.fyUsPR = !0), e = kA.asnJsj(e, n), kA.uQnjur[a] = e), e;
}
function Bn() {
  var i = ["WOZdVd4gbCotWOC8mmk3", "WQC4WR0MueWPc0tcHW", "WQObW53dNLOXu8kxWOugtSo3W40", "EwldHgVcGK/cS08", "WPhdUMtdQNRcImkbW5OZWPxdMvCe", "W7tcPe3cU8ohWRFcGmkCW48MWQNcSha", "v8kdW77dTvqinXxdQtSllG", "sK7cHSklpwFdQIPD", "W5dcIwCoWOpcNmkTWRZdLtddHmkekW", "bIzCW5lcOGCNWQ47", "W4ZdR0ldGvpdGmkfeeC", "sCoBW5lcRSkj", "W5ZcQaNcUCk3WQldS8kQc8kwnX/dLq", "WOVdT1r5vSktW7ddKIztW6ddMW", "W4CqW5NdJCk3W6lcPMjtW4i", "iCo9WOddT8k6", "WPa7W5lcS0jiEmo1", "tSo3WQFdJMO", "WPCHW5hdSKBcL1/dJW/dHNNcI8oV", "WP0UW5VcQcldQZxdMsC", "zmodFhmcWR5RW5i2e8o4WRbe", "bsi/z8oPWP5elmkRDSk2aJe", "EwdcGYhcPgJcLN3cSmoU"];
  return Bn = function() {
    return i;
  }, Bn();
}
function PC({ crosshatch: i }) {
  function n(e, A, o, r, a) {
    return kA(a - 680, r);
  }
  function t(e, A, o, r, a) {
    return kA(o - -49, a);
  }
  return i?.[t(333, 328, 327, 318, "vqe1") + "id"] ? wt[t(322, 316, 323, 313, "XGNs") + "r"] : wt[n(1027, 1036, 1033, "8@Ci", 1035)];
}
(function(i, n) {
  function t(a, g, c, I, s) {
    return sA(s - 244, a);
  }
  function e(a, g, c, I, s) {
    return sA(s - 604, c);
  }
  function A(a, g, c, I, s) {
    return sA(g - -22, I);
  }
  function o(a, g, c, I, s) {
    return sA(c - -312, s);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(o(-96, -108, -112, -129, "JKLt")) / 1 + -parseInt(e(795, 792, "F!KO", 807, 806)) / 2 + -parseInt(o(-108, -112, -109, -102, "weqa")) / 3 + -parseInt(o(-93, -82, -99, -111, "I]83")) / 4 * (-parseInt(o(-90, -82, -100, -115, "vTl#")) / 5) + parseInt(t("NBk9", 487, 461, 463, 469)) / 6 * (-parseInt(e(790, 794, "NBk9", 819, 808)) / 7) + -parseInt(A(207, 202, 189, "g5a@", 210)) / 8 * (parseInt(A(202, 197, 190, "WPND", 205)) / 9) + -parseInt(e(793, 815, "LXKx", 799, 810)) / 10 * (-parseInt(o(-96, -82, -89, -72, "]U25")) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Qn, -180602 + 27641 * 3 + 224787);
function sA(i, n) {
  i = i - 194;
  const t = Qn();
  let e = t[i];
  if (sA.PocmhI === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (let x = 0, E = s.length; x < E; x++)
        Q += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const g = function(c, I) {
      let s = [], Q = 0, x, E = "";
      c = A(c);
      let C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (let l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    sA.nmKnmw = g, sA.ZCypbN = {}, sA.PocmhI = !0;
  }
  const o = t[-8232 + -1029 * -8], r = i + o, a = sA.ZCypbN[r];
  return a ? e = a : (sA.rENzVM === void 0 && (sA.rENzVM = !0), e = sA.nmKnmw(e, n), sA.ZCypbN[r] = e), e;
}
function Qn() {
  const i = ["W6JcKSo1DSkK", "AmoPy8k6lG", "WRJcTmoOWO/cGmoYWOpdSxZcUq", "W7BcPSkqWPekWO/dOSkTW4RcH8k4oW", "WRxcS8oxs8oD", "r8k1ba", "qSkaWOK2ya", "WRXlWPSRAmkQvCkOkCkUWOKw", "WPHve8oMn8o4W6JdHmkMl8o3", "qtfCqqewW6KtW5/dMSo2WRe", "nI3cKv3cISokW6KFxCkCWOddSW", "t1tcS3ZcNwD9W45m", "dWhdQ0FcNa", "W7dcPSo0W6jRW43dSSkn", "W4PaESo+pmk6vdFcOq", "W5lcNbi", "W7SKW6hdPG", "WQHHWRtcSmkSWPRcUviLqbrk", "WQxdS8oqW6Lx", "ywq1W6bXesldTmkOmq", "WPRdHX98WQfiW6uHc3K", "W6qKWOdcGvddNmoHW5pdSSoGWOVcKW", "WRe2Cmk+WRC", "WPhdIeRdOmoTc2bPWONdOa", "W60XW7FdJSo9", "fMqgbLa", "WO3cIKlcJKJcV8k7xCoa", "W75jWOBcTSoA", "kCkLWPXJeCkGW4pdVmkNW53dQSkjWQa", "W6BcNmoKCCkT", "imkodt3dImkOW69JW5GMW4ZdKMm", "W6eLWOdcJHtcHCoCW5tdN8o4", "sfBcTaVdI0PWW71gBCkr", "W7RdQ2qlw8oeqmkGdq8", "W5G0W7SJW75ljCk6WPC"];
  return Qn = function() {
    return i;
  }, Qn();
}
function _C({ children: i }) {
  const { bramble: n } = TC(), t = EA(() => ({ redfin: PC({ crosshatch: n?.[e(793, "LXKx", 803, 788) + a(333, "%zw2", 348, 344, 351) + a(310, "@b!j", 311, 318, 322) + "t"]() }), crosshatch: n?.[e(773, "#JK8", 768, 774) + g(-302, "%zw2", -293) + a(321, "]rsM", 325, 354, 338) + "t"](), bramble: n, wasLicenseValidated: n?.[r(865, 859, 853, 865, "pfS8") + r(866, 861, 883, 880, "F!KO") + g(-307, "!bfV", -301) + e(770, "pfS8", 783, 786)]() }), [n]);
  function e(c, I, s, Q, x) {
    return sA(Q - 577, I);
  }
  const A = {};
  function o(c, I, s, Q, x) {
    return sA(x - -746, c);
  }
  function r(c, I, s, Q, x) {
    return sA(c - 648, x);
  }
  A[o("NBk9", -549, -531, -556, -541)] = t, A[r(870, 878, 857, 881, "kWmQ") + o("!vbI", -550, -538, -546, -538)] = i;
  function a(c, I, s, Q, x) {
    return sA(x - 123, I);
  }
  function g(c, I, s, Q, x) {
    return sA(s - -521, I);
  }
  return b(on[o("R2Tf", -559, -563, -547, -552) + o("UKg2", -547, -543, -564, -548)], A);
}
const HC = -17 * 263 + 4 * -499 + 8467;
class KC {
  transactionCountingToken;
  constructor(n) {
    this.transactionCountingToken = n;
  }
  async validateToken() {
    const n = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), HC), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const o = {};
    o.method = "POST", o.headers = A, o.signal = t.signal;
    const r = o, a = await fetch(n, r).catch(() => null);
    return clearTimeout(e), a ? a.status !== -1 * -7690 + 7098 + -14388 && a.status !== -1433 * 1 + -714 + 2548 : !0;
  }
}
class jC {
  #A;
  #e;
  #t;
  #o;
  #n;
  #i;
  #r;
  #a;
  constructor({ hwids: n, tokenHandler: t, transactionType: e }) {
    this.#A = t, this.#n = n, this.#a = e, this.#i = window.location.origin, this.#r = "8.0.3";
  }
  async init(n) {
    if (this.#t = this.shouldCountTransactions(n), Xr.info("Transaction counting is " + (this.#t ? "enabled" : "disabled")), zr()) {
      this.#e = !0, this.#t = !1;
      return;
    }
    if (!this.#t) {
      this.#e = !0;
      return;
    }
    if (this.#o = this.#A.transactionCountingToken, !this.#o) {
      console.warn("Transaction counting token is missing"), this.#e = !1;
      return;
    }
    this.#e = await this.#A.validateToken();
  }
  shouldCountTransactions(n) {
    return n?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] !== void 0 ? !n?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] : n?.dotWeb?.features?.["realTimeTransactionReportingEnabled"] ?? !0;
  }
  trackTransaction() {
    this.prepareAndSendTransaction();
  }
  prepareAndSendTransaction() {
    if (!this.#t || !this.#e) return;
    const n = this.prepareTransactions();
    this.sendTransactions(n);
  }
  prepareTransactions() {
    const n = crypto.randomUUID(), t = new Date(Date.now()).toISOString(), e = {};
    e.hwids = this.#n, e.id = this.#i, e.version = this.#r;
    const A = {};
    A.application = e, A.sessionId = n, A.timestamp = t, A.transactionId = n, A.transactionType = this.#a;
    const o = A, r = {};
    return r.transactions = [o], r;
  }
  sendTransactions(n) {
    const t = "https://tcs.innovatrics.com/transaction-system/v1/transaction", e = {};
    e["Content-Type"] = "application/json", e["X-Innovatrics-Authorization"] = "Bearer " + this.#o;
    const A = { method: "POST", headers: e, body: JSON.stringify(n) };
    fetch(t, A);
  }
  get isTransactionTokenValid() {
    return this.#e || !1;
  }
}
function qC(i, n) {
  const { crosshatch: t, bramble: e } = Tn(), [A, o] = oA(null);
  Z(() => {
    if (!t) return;
    (async () => {
      const g = new KC(n), c = new jC({ hwids: e.getHwids(), tokenHandler: g, transactionType: i });
      await c.init(t), o(c);
    })();
  }, [n, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function VC({
  children: i,
  transactionCountingToken: n,
  transactionType: t
}) {
  const { transactionCounting: e } = qC(t, n), A = EA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ b(an.Provider, { value: A, children: i });
}
const Re = {};
Re.FACE = "web-capture-face", Re.DOCUMENT = "web-capture-document", Re.MAGNIFEYE = "web-capture-magnifeye", Re.SMILE = "web-capture-smile", Re.PALM = "web-capture-palm", Re.EYEGAZE = "web-capture-eyegaze", Re.MULTIRANGE = "web-capture-multirange";
const ZC = Re;
var JA = function() {
  return JA = Object.assign || function(n) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, JA.apply(this, arguments);
};
function Dt(i, n, t) {
  if (t || arguments.length === 2) for (var e = 0, A = n.length, o; e < A; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return i.concat(o || Array.prototype.slice.call(n));
}
function zC(i) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = i(t)), n[t];
  };
}
var XC = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, $C = zC(function(i) {
  return XC.test(i) || i.charCodeAt(-8644 + -2 * -4322) === 1 * -2083 + 7198 + 5004 * -1 && i.charCodeAt(1) === -2 * -2767 + 764 + -6188 && i.charCodeAt(2) < -4080 + 747 * -3 + 6412;
});
function AB(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Ci, Ka;
function eB() {
  return Ka || (Ka = 5989 + 2 * -3245 + 502, Ci = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), a = Object.keys(t);
    if (r.length !== a.length) return !1;
    for (var g = Object.prototype.hasOwnProperty.bind(t), c = 8717 + 8357 * -1 + -360; c < r.length; c++) {
      var I = r[c];
      if (!g(I)) return !1;
      var s = n[I], Q = t[I];
      if (o = e ? e.call(A, s, Q, I) : void 0, o === !1 || o === void 0 && s !== Q) return !1;
    }
    return !0;
  }), Ci;
}
var tB = eB();
const oB = /* @__PURE__ */ AB(tB);
var T = "-ms-", Ao = "-moz-", O = "-webkit-", As = "comm", Hn = "rule", ea = "decl", nB = "@import", es = "@keyframes", iB = "@layer", ts = Math.abs, ta = String.fromCharCode, ar = Object.assign;
function rB(i, n) {
  return xA(i, 0) ^ -2818 + 7 * 409 ? (((n << 9664 + -5 * 1019 + -4567 ^ xA(i, 0)) << 2 ^ xA(i, 1)) << -3748 + 1864 * -1 + 5614 ^ xA(i, 1 * 955 + 3770 + -4723)) << -8764 + 1 * 8664 + 102 ^ xA(i, 6153 + -1025 * 6) : -1 * -4562 + 7171 * 1 + 1 * -11733;
}
function os(i) {
  return i.trim();
}
function me(i, n) {
  return (i = n.exec(i)) ? i[1376 + -344 * 4] : i;
}
function v(i, n, t) {
  return i.replace(n, t);
}
function Mo(i, n, t) {
  return i.indexOf(n, t);
}
function xA(i, n) {
  return i.charCodeAt(n) | -5659 * 1 + -3628 + 9287;
}
function bt(i, n, t) {
  return i.slice(n, t);
}
function Ie(i) {
  return i.length;
}
function ns(i) {
  return i.length;
}
function Vt(i, n) {
  return n.push(i), i;
}
function aB(i, n) {
  return i.map(n).join("");
}
function ja(i, n) {
  return i.filter(function(t) {
    return !me(t, n);
  });
}
var Kn = 5626 + -5452 * -1 + -11077, kt = -8750 + 1 * 605 + 8146, is = -3268 + 2 * -1227 + 5722 * 1, $A = 0, X = 0, Ft = "";
function jn(i, n, t, e, A, o, r, a) {
  var g = {};
  return g.value = i, g.root = n, g.parent = t, g.type = e, g.props = A, g.children = o, g.line = Kn, g.column = kt, g.length = r, g.return = "", g.siblings = a, g;
}
function ve(i, n) {
  return ar(jn("", null, null, "", null, null, 0, i.siblings), i, { length: -i.length }, n);
}
function ct(i) {
  for (; i.root; ) i = ve(i.root, { children: [i] });
  Vt(i, i.siblings);
}
function gB() {
  return X;
}
function sB() {
  return X = $A > 5 * -1229 + -1 * -6074 + 71 ? xA(Ft, --$A) : -1 * 2790 + 5809 + -3019, kt--, X === -4949 * 1 + 5399 + -440 && (kt = -4999 + 6872 * -1 + 11872, Kn--), X;
}
function ie() {
  return X = $A < is ? xA(Ft, $A++) : -1 * 877 + 2 * -4814 + 1 * 10505, kt++, X === 10 && (kt = -7070 + -3 * -2357, Kn++), X;
}
function et() {
  return xA(Ft, $A);
}
function Wo() {
  return $A;
}
function qn(i, n) {
  return bt(Ft, i, n);
}
function gr(i) {
  switch (i) {
    case 9133 * 1 + 9016 + -18149:
    case 2 * -2839 + 8157 + -2470:
    case -552 + -3 * -2767 + -7739:
    case 881 * 5 + -8858 + 4466:
    case -6073 + 1 * 5198 + 907 * 1:
      return -1 * -7237 + 2644 * -2 + -1944;
    case 4056 + -3 * 1341:
    case -283 * -12 + -1024 + -2329:
    case -7480 + 3399 * -1 + 10923:
    case 47:
    case 62:
    case 6417 + -6353 * 1:
    case 126:
    case 511 * 13 + -29 * -289 + 365 * -41:
    case -2606 + 1 * 2729:
    case 15934 + 1 * -15809:
      return 6194 + 7 * -388 + -3474;
    case 3715 + -543 * -13 + -10716:
      return -9903 * -1 + -5235 + 933 * -5;
    case 34:
    case 39:
    case -3 * 1539 + -2328 + 6985:
    case 91:
      return 5814 + 1 * -449 + -5363;
    case 809 * 4 + -8351 + 5156:
    case 8693 + 21 * -413 + 73:
      return 6026 + 1 * -6025;
  }
  return -9655 + 2 * -1822 + 33 * 403;
}
function cB(i) {
  return Kn = kt = -5742 + 2351 * -3 + 1828 * 7, is = Ie(Ft = i), $A = 1175 + -3 * 2300 + 5725, [];
}
function IB(i) {
  return Ft = "", i;
}
function Bi(i) {
  return os(qn($A - (3974 * -1 + 9719 + -5744), sr(i === -4545 * -1 + 3509 + -7963 ? i + (497 * -7 + -8488 * -1 + -5007) : i === -4451 + 4491 * 1 ? i + (-1939 * -5 + 3 * -2951 + 841 * -1) : i)));
}
function CB(i) {
  for (; (X = et()) && X < -5959 * -1 + -7977 + 2051; ) ie();
  return gr(i) > -1 * -9821 + 6256 + -16075 || gr(X) > -7027 + -703 * -10 ? "" : " ";
}
function BB(i, n) {
  for (; --n && ie() && !(X < 9615 + -263 * 11 + -6674 || X > 221 + 4 * -1934 + 1 * 7617 || X > 9639 + -9582 * 1 && X < 65 || X > -2559 + 5 * -1783 + 11544 && X < 4037 + -985 * 4); ) ;
  return qn(i, Wo() + (n < 6 && et() == 3407 + 397 * 25 + -13300 && ie() == -4920 + -1 * 9377 + 14329));
}
function sr(i) {
  for (; ie(); ) switch (X) {
    case i:
      return $A;
    case 34:
    case -1558 + -2 * 331 + 2259:
      i !== -6919 + 3467 * 1 + 3486 && i !== 1 * 8111 + 2 + 22 * -367 && sr(X);
      break;
    case -2697 * -1 + 7347 + -10004:
      i === 5430 + 1 * -5137 + -252 && sr(i);
      break;
    case -10520 + 758 * 14:
      ie();
      break;
  }
  return $A;
}
function QB(i, n) {
  for (; ie() && i + X !== -5 * -358 + -1423 * -4 + -7435 + (3690 + -1051 * -1 + 1577 * -3); ) if (i + X === 42 + (-7773 + -15 * -521) && et() === 47) break;
  return "/*" + qn(n, $A - (-1489 * 3 + 4 * -1336 + 9812)) + "*" + ta(i === 2 * -1621 + 7883 * -1 + 11172 ? i : ie());
}
function xB(i) {
  for (; !gr(et()); ) ie();
  return qn(i, $A);
}
function EB(i) {
  return IB(Lo("", null, null, null, [""], i = cB(i), 0, [0], i));
}
function Lo(i, n, t, e, A, o, r, a, g) {
  for (var c = 0, I = 0, s = r, Q = 9281 + 453 * -7 + -6110, x = -9805 + -9805 * -1, E = -4543 + -11 * 845 + -814 * -17, C = -5603 + 12 * 467, l = -5516 + -1141 * 5 + 31 * 362, f = 4e3 + 570 * 3 + -5709, h = -4769 + 351 * -4 + 6173, p = "", m = A, k = o, D = e, y = p; l; ) switch (E = h, h = ie()) {
    case 1897 * 2 + 2812 + -6566:
      if (E != 108 && xA(y, s - (-1 * -9198 + 1 * 6343 + -15540)) == 58) {
        Mo(y += v(Bi(h), "&", "&\f"), "&\f", ts(c ? a[c - (-1695 + 14 * -322 + 6204)] : 2 * 1101 + 6402 + -8604)) != -1 && (f = -1);
        break;
      }
    case 2581 + 3 * -849:
    case -1 * -791 + 133 + -885:
    case 4937 + 4609 * 2 + -48 * 293:
      y += Bi(h);
      break;
    case -9456 + -3155 * -3:
    case -2 * 2452 + 1 * -1862 + 22 * 308:
    case -4103 + -381 * -13 + 3 * -279:
    case 650 + 699 * 1 + -1317:
      y += CB(E);
      break;
    case -9034 * -1 + -5406 + -3536:
      y += BB(Wo() - (-22 * -449 + 10 * -315 + 1 * -6727), 7);
      continue;
    case -6203 + 628 * -1 + 362 * 19:
      switch (et()) {
        case -1640 + 263 * -11 + -3 * -1525:
        case -5513 * 1 + 168 + 5392:
          Vt(dB(QB(ie(), Wo()), n, t, g), g);
          break;
        default:
          y += "/";
      }
      break;
    case 123 * C:
      a[c++] = Ie(y) * f;
    case (2736 + 278 * 12 + -5947) * C:
    case 3083 * -3 + -8245 + 17553:
    case -2 * 683 + 3925 + -2559:
      switch (h) {
        case -1043 * 2 + 4166 * -2 + 5209 * 2:
        case -4161 + 8207 * -1 + -1 * -12493:
          l = -1 * 7947 + 5 * 1930 + -1703;
        case 1705 * 2 + -847 + 8 * -313 + I:
          f == -1 && (y = v(y, /\f/g, "")), x > 6339 + 328 * -1 + -1 * 6011 && Ie(y) - s && Vt(x > 15568 + -15536 * 1 ? Va(y + ";", e, t, s - (9338 + -1 * 9337), g) : Va(v(y, " ", "") + ";", e, t, s - (6835 + -487 * -11 + -12190), g), g);
          break;
        case 571 * 8 + -1 * -9178 + -13687:
          y += ";";
        default:
          if (Vt(D = qa(y, n, t, c, I, A, a, p, m = [], k = [], s, o), o), h === 5338 * -1 + -19 * 356 + 815 * 15)
            if (I === 1624 + -1 * 9001 + 7377) Lo(y, n, D, D, m, o, s, a, k);
            else switch (Q === 1 * -1657 + -2505 + 4261 * 1 && xA(y, 3) === -4887 * 1 + -6 + 5003 * 1 ? 100 : Q) {
              case -1 * 9005 + -1434 + 10539 * 1:
              case 108:
              case -509 * 17 + -5438 + 14200:
              case 14343 + -3557 * 4:
                Lo(i, D, D, e && Vt(qa(i, D, D, -2901 * -1 + -2295 + -606, -5703 + -1901 * -3, A, a, p, A, m = [], s, k), k), A, k, s, a, e ? m : k);
                break;
              default:
                Lo(y, D, D, D, [""], k, 0, a, k);
            }
      }
      c = I = x = -8 * 1124 + -131 + -1 * -9123, C = f = -427 * 4 + 5469 + -3760, p = y = "", s = r;
      break;
    case 58:
      s = -3093 * 1 + 1667 * 5 + 5241 * -1 + Ie(y), x = E;
    default:
      if (C < 283 * -23 + -16 * 332 + 11822) {
        if (h == -7336 + -7459 * -1) --C;
        else if (h == -5845 + 262 * 7 + 4136 && C++ == -14952 + 1068 * 14 && sB() == -12547 + 16 * 792) continue;
      }
      switch (y += ta(h), h * C) {
        case 15458 + 20 * -771:
          f = I > 6372 + 2 * 4978 + -16328 * 1 ? -1 * -279 + -415 * 23 + 9267 : (y += "\f", -1);
          break;
        case 5 * 1057 + -541 + -4700:
          a[c++] = (Ie(y) - (-2695 + -1 * -2696)) * f, f = -9249 * 1 + 2528 * -3 + 8417 * 2;
          break;
        case -1 * -4271 + 1 * -7457 + -5 * -650:
          et() === -6965 + -28 * -281 + -858 && (y += Bi(ie())), Q = et(), I = s = Ie(p = y += xB(Wo())), h++;
          break;
        case -4359 + 367 * 12:
          E === 45 && Ie(y) == -5 * -974 + -1331 * 1 + -3537 && (C = -1 * 7328 + 8523 + -1195);
      }
  }
  return o;
}
function qa(i, n, t, e, A, o, r, a, g, c, I, s) {
  for (var Q = A - 1, x = A === 0 ? o : [""], E = ns(x), C = 1059 * -5 + -3994 + 9289, l = 9843 * 1 + -252 + -9591, f = 1 * 7503 + -574 + 6929 * -1; C < e; ++C) for (var h = 9558 + 1 * -7784 + -1774 * 1, p = bt(i, Q + 1, Q = ts(l = r[C])), m = i; h < E; ++h) (m = os(l > 8084 + -1 * -2480 + -10564 ? x[h] + " " + p : v(p, /&\f/g, x[h]))) && (g[f++] = m);
  return jn(i, n, t, A === -9196 + -359 * 19 + 16017 ? Hn : a, g, c, I, s);
}
function dB(i, n, t, e) {
  return jn(i, n, t, As, ta(gB()), bt(i, -411 + 4 * 1132 + -4115, -2), 0, e);
}
function Va(i, n, t, e, A) {
  return jn(i, n, t, ea, bt(i, 7071 + -1 * 7071, e), bt(i, e + (310 + -1213 * 2 + 2117), -1), e, A);
}
function rs(i, n, t) {
  switch (rB(i, n)) {
    case 1841 + 4002 * 1 + -740:
      return O + "print-" + i + i;
    case -14758 + -5 * -4099:
    case -1279 * -1 + 8127 + -1041 * 5:
    case 1474 + 7 * 1401 + 4 * -2026:
    case 9913 + -2 * -1592 + -9664:
    case -721 + -1 * 4529 + -6891 * -1:
    case -9355 + 1 * 6079 + 7733:
    case -37 + -1 * -2043 + 915:
    case -2607 * 4 + -5167 + 21167:
    case -8841 + 10778 * -1 + 25975:
    case 2 * 4823 + 2 * 4507 + -12816:
    case -7537 * -1 + 454 + -4800:
    case 6645:
    case 516 + -373 * -21 + -5344:
    case 3516 + 2875 * 1:
    case 7070 + -1191 * 1:
    case 2 * -3901 + 1604 * 4 + -7009 * -1:
    case -1124 * 1 + 2331 + 4928:
    case 4599:
    case -1 * -997 + -6597 * -1 + 913 * -3:
    case -6679 + 2413 * -1 + 1 * 13307:
    case -19413 + -25802 * -1:
    case 1579 + -1765 * -2:
    case -6 * 1667 + -3012 + 18379:
    case 5621:
    case 8273 + 2222 * -2:
      return O + i + i;
    case 4789:
      return Ao + i + i;
    case 2404 + -5 * 813 + 7010:
    case -6835 * 1 + 13 * -310 + 15111:
    case -3562 + 2 * 3782 + 808:
    case -3 * 3967 + -5 * -2380 + 6969:
    case -1 * -6653 + -5819 * -1 + -9716:
      return O + i + Ao + i + T + i + i;
    case 9421 + -9844 * -1 + -13329:
      switch (xA(i, n + 11)) {
        case 13 * 489 + -870 + -5373:
          return O + i + T + v(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 3143 * 3 + 2131 + -11452:
          return O + i + T + v(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case -7 * -691 + -135 + 4657 * -1:
          return O + i + T + v(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case -565 + 13043 * 1 + -5650:
    case 1 * 8173 + -6931 * -1 + -10836:
    case 3898 * 1 + -811 * 10 + -5 * -1423:
      return O + i + T + i + i;
    case 3794 * 1 + -1181 * 8 + 11819:
      return O + i + T + "flex-" + i + i;
    case 5187:
      return O + i + v(i, /(\w+).+(:[^]+)/, O + "box-$1$2" + T + "flex-$1$2") + i;
    case -9472 * -1 + 29 * 367 + 262 * -56:
      return O + i + T + "flex-item-" + v(i, /flex-|-self/g, "") + (me(i, /flex-|baseline/) ? "" : T + "grid-row-" + v(i, /flex-|-self/g, "")) + i;
    case -2021 + 9083 * -1 + 1 * 15779:
      return O + i + T + "flex-line-pack" + v(i, /align-content|flex-|-self/g, "") + i;
    case -7400 + 4 * -2066 + 21212:
      return O + i + T + v(i, "shrink", "negative") + i;
    case 5292:
      return O + i + T + v(i, "basis", "preferred-size") + i;
    case 6060:
      return O + "box-" + v(i, "-grow", "") + O + i + T + v(i, "grow", "positive") + i;
    case 4554:
      return O + v(i, /([^-])(transform)/g, "$1" + O + "$2") + i;
    case 2073 + 2258 * -1 + 1593 * 4:
      return v(v(v(i, /(zoom-|grab)/, O + "$1"), /(image-set)/, O + "$1"), i, "") + i;
    case 1 * 2005 + 77 + 3413:
    case -2 * -1459 + 2 * -4641 + 10323:
      return v(i, /(image-set\([^]*)/, O + "$1$`$1");
    case -1 * -4442 + -9360 * 1 + 1 * 9886:
      return v(v(i, /(.+:)(flex-)?(.*)/, O + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + O + i + i;
    case -5 * -1813 + 2934 + -7799:
      if (!me(i, /flex-|baseline/)) return T + "grid-column-align" + bt(i, n) + i;
      break;
    case 2592:
    case -2809 + 1 * -4279 + -8 * -1306:
      return T + v(i, "template-", "") + i;
    case -5356 + 4831 * -1 + 14571:
    case 3616:
      return t && t.some(function(e, A) {
        return n = A, me(e.props, /grid-\w+-end/);
      }) ? ~Mo(i + (t = t[n].value), "span", -5455 + 5 * 1091) ? i : T + v(i, "-start", "") + i + T + "grid-row-span:" + (~Mo(t, "span", -1 * -7197 + -2383 + -2 * 2407) ? me(t, /\d+/) : +me(t, /\d+/) - +me(i, /\d+/)) + ";" : T + v(i, "-start", "") + i;
    case -14166 + -9531 * -2:
    case 7334 + -458 * 7:
      return t && t.some(function(e) {
        return me(e.props, /grid-\w+-start/);
      }) ? i : T + v(v(i, "-end", "-span"), "span ", "") + i;
    case 439 * -17 + -2844 + 14402:
    case 8348 + 1 * 2509 + -7274:
    case -10539 + 27 * 541:
    case 2532:
      return v(i, /(.+)-inline(.+)/, O + "$1$2") + i;
    case 8116:
    case 7059:
    case 4393 + 1 * 2057 + 697 * -1:
    case -6597 + 5 * 379 + 10237:
    case -8366 + -427 * 23 + 23632:
    case -656 + -10333 * 1 + 16690:
    case 7969 + -1 * -8709 + -11745:
    case -4871 * 1 + 347 * 13 + 5037:
    case 3 * 3415 + 9643 + -14355:
    case 2056 + -1 * 9946 + 13679 * 1:
    case 5021:
    case -1 * 9917 + 3572 + -2 * -5555:
      if (Ie(i) - (1 * -4415 + 2512 * -2 + -4 * -2360) - n > 12808 + 1 * -12802) switch (xA(i, n + (-1 * -5677 + 6072 + -2 * 5874))) {
        case -729 + 419 * 2:
          if (xA(i, n + 4) !== -3870 + 1 * 9476 + -5561) break;
        case -633 * -5 + -3 * 1977 + 2868:
          return v(i, /(.+:)(.+)-([^]+)/, "$1" + O + "$2-$3$1" + Ao + (xA(i, n + (9710 + 571 * -17)) == -1 * 6783 + -3790 + -11 * -971 ? "$3" : "$2-$3")) + i;
        case 8634 * -1 + -1 * -8818 + -69:
          return ~Mo(i, "stretch", -1 * 7849 + -1 * 5801 + 13650) ? rs(v(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case -167 + 1 * 6827 + -1508:
    case 5920:
      return v(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, a, g, c) {
        return T + A + ":" + o + c + (r ? T + A + "-span:" + (a ? g : +g - +o) + c : "") + i;
      });
    case -1 * -4166 + -1549 + 2332:
      if (xA(i, n + (1 * -526 + -6959 + 7491)) === -7854 + 510 * -5 + 25 * 421) return v(i, ":", ":" + O) + i;
      break;
    case 6444:
      switch (xA(i, xA(i, 8500 + -2 * 4243) === 9014 + 8969 * -1 ? 18 : 11)) {
        case 120:
          return v(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + O + (xA(i, -11 * -691 + -482 * 5 + -5177) === -3769 + 2 * 1907 ? "inline-" : "") + "box$3$1" + O + "$2$3$1" + T + "$2box$3") + i;
        case -934 * 8 + 11 * -801 + 16383:
          return v(i, ":", ":" + T) + i;
      }
      break;
    case 5719:
    case -2681 * -1 + 3635 * -1 + 3601:
    case -744 * 6 + 6973 + -374:
    case 3927:
    case 2391:
      return v(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function xn(i, n) {
  for (var t = "", e = -1948 + -557 * 8 + 6404; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function lB(i, n, t, e) {
  switch (i.type) {
    case iB:
      if (i.children.length) break;
    case nB:
    case ea:
      return i.return = i.return || i.value;
    case As:
      return "";
    case es:
      return i.return = i.value + "{" + xn(i.children, e) + "}";
    case Hn:
      if (!Ie(i.value = i.props.join(","))) return "";
  }
  return Ie(t = xn(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function uB(i) {
  var n = ns(i);
  return function(t, e, A, o) {
    for (var r = "", a = -7 * 577 + -1631 + -9 * -630; a < n; a++) r += i[a](t, e, A, o) || "";
    return r;
  };
}
function fB(i) {
  return function(n) {
    n.root || (n = n.return) && i(n);
  };
}
function hB(i, n, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case ea:
        i.return = rs(i.value, i.length, t);
        return;
      case es:
        return xn([ve(i, { value: v(i.value, "@", "@" + O) })], e);
      case Hn:
        if (i.length) return aB(t = i.props, function(A) {
          switch (me(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              ct(ve(i, { props: [v(A, /:(read-\w+)/, ":" + Ao + "$1")] }));
              var o = {};
              o.props = [A], ct(ve(i, o)), ar(i, { props: ja(t, e) });
              break;
            case "::placeholder":
              ct(ve(i, { props: [v(A, /:(plac\w+)/, ":" + O + "input-$1")] })), ct(ve(i, { props: [v(A, /:(plac\w+)/, ":" + Ao + "$1")] })), ct(ve(i, { props: [v(A, /:(plac\w+)/, T + "input-$1")] }));
              var r = {};
              r.props = [A], ct(ve(i, r)), ar(i, { props: ja(t, e) });
              break;
          }
          return "";
        });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var pB = N, L = {}, nt = typeof process < "u" && L !== void 0 && (L.REACT_APP_SC_ATTR || L.SC_ATTR) || "data-styled", as = "active", gs = "data-styled-version", Vn = "6.1.19", oa = `/*!sc*/
`, En = typeof window < "u" && typeof document < "u", mB = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && L !== void 0 && L.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && L.REACT_APP_SC_DISABLE_SPEEDY !== "" ? L.REACT_APP_SC_DISABLE_SPEEDY !== "false" && L.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && L !== void 0 && L.SC_DISABLE_SPEEDY !== void 0 && L.SC_DISABLE_SPEEDY !== "" ? L.SC_DISABLE_SPEEDY !== "false" && L.SC_DISABLE_SPEEDY : L.NODE_ENV !== "production"), Za = /invalid hook call/i, fo = /* @__PURE__ */ new Set(), yB = function(i, n) {
  if (L.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var a = [], g = -14 * 358 + -5 * 1019 + 10108; g < arguments.length; g++) a[g - (-253 + -766 * 12 + -1 * -9446)] = arguments[g];
        Za.test(r) ? (o = !1, fo.delete(e)) : A.apply(void 0, Dt([r], a, !1));
      }, UA(), o && !fo.has(e) && (console.warn(e), fo.add(e));
    } catch (r) {
      Za.test(r.message) && fo.delete(e);
    } finally {
      console.error = A;
    }
  }
}, Zn = Object.freeze([]), St = Object.freeze({});
function wB(i, n, t) {
  return t === void 0 && (t = St), i.theme !== t.theme && i.theme || n || t.theme;
}
var cr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), DB = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, bB = /(^-|-$)/g;
function za(i) {
  return i.replace(DB, "-").replace(bB, "");
}
var kB = /(a)(d)/gi, ho = 321 * 3 + 1753 * -1 + -842 * -1, Xa = function(i) {
  return String.fromCharCode(i + (i > 25 ? 445 * 3 + -3334 + -1 * -2038 : 277 * 19 + 5337 + -10503 * 1));
};
function Ir(i) {
  var n, t = "";
  for (n = Math.abs(i); n > ho; n = n / ho | -3 * 1713 + 4806 + 333) t = Xa(n % ho) + t;
  return (Xa(n % ho) + t).replace(kB, "$1-$2");
}
var Qi, ss = 9096 + 9 * -550 + 1235, Xe = function(i, n) {
  for (var t = n.length; t; ) i = (6 * 1205 + 1 * -6585 + -612) * i ^ n.charCodeAt(--t);
  return i;
}, cs = function(i) {
  return Xe(ss, i);
};
function SB(i) {
  return Ir(cs(i) >>> -7 * -913 + 6959 * -1 + 568);
}
function Is(i) {
  return L.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function xi(i) {
  return typeof i == "string" && (L.NODE_ENV === "production" || i.charAt(1 * 3499 + 4427 + -7926) === i.charAt(0).toLowerCase());
}
var zA = {};
zA.childContextTypes = !0, zA.contextType = !0, zA.contextTypes = !0, zA.defaultProps = !0, zA.displayName = !0, zA.getDefaultProps = !0, zA.getDerivedStateFromError = !0, zA.getDerivedStateFromProps = !0, zA.mixins = !0, zA.propTypes = !0, zA.type = !0;
var Fe = {};
Fe.name = !0, Fe.length = !0, Fe.prototype = !0, Fe.caller = !0, Fe.callee = !0, Fe.arguments = !0, Fe.arity = !0;
var je = {};
je.$$typeof = !0, je.compare = !0, je.defaultProps = !0, je.displayName = !0, je.propTypes = !0, je.type = !0;
var dt = {};
dt.$$typeof = !0, dt.render = !0, dt.defaultProps = !0, dt.displayName = !0, dt.propTypes = !0;
var Cs = typeof Symbol == "function" && Symbol.for, Bs = Cs ? /* @__PURE__ */ Symbol.for("react.memo") : -47238 + -31 * -1409 + 158 * 403, GB = Cs ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 3101 + 56883 * 2 + -56755, NB = zA, RB = Fe, Qs = je, vB = ((Qi = {})[GB] = dt, Qi[Bs] = Qs, Qi);
function $a(i) {
  return ("type" in (n = i) && n.type.$$typeof) === Bs ? Qs : "$$typeof" in i ? vB[i.$$typeof] : NB;
  var n;
}
var FB = Object.defineProperty, MB = Object.getOwnPropertyNames, Ag = Object.getOwnPropertySymbols, WB = Object.getOwnPropertyDescriptor, LB = Object.getPrototypeOf, eg = Object.prototype;
function xs(i, n, t) {
  if (typeof n != "string") {
    if (eg) {
      var e = LB(n);
      e && e !== eg && xs(i, e, t);
    }
    var A = MB(n);
    Ag && (A = A.concat(Ag(n)));
    for (var o = $a(i), r = $a(n), a = 4938 * 1 + -2800 + -2138 * 1; a < A.length; ++a) {
      var g = A[a];
      if (!(g in RB || t && t[g] || r && g in r || o && g in o)) {
        var c = WB(n, g);
        try {
          FB(i, g, c);
        } catch {
        }
      }
    }
  }
  return i;
}
function Gt(i) {
  return typeof i == "function";
}
function na(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function At(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function tg(i, n) {
  if (4995 * -2 + 1 * 9109 + 881 === i.length) return "";
  for (var t = i[405 + -2135 * 1 + 2 * 865], e = 959 * -3 + 1654 * -1 + 1 * 4532; e < i.length; e++) t += i[e];
  return t;
}
function Nt(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function Cr(i, n, t) {
  if (t === void 0 && (t = !1), !t && !Nt(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = -8443 * 1 + -3429 + 11872; e < n.length; e++) i[e] = Cr(i[e], n[e]);
  else if (Nt(n))
    for (var e in n) i[e] = Cr(i[e], n[e]);
  return i;
}
function ia(i, n) {
  var t = {};
  t.value = n, Object.defineProperty(i, "toString", t);
}
var eA = {};
eA[1] = `Cannot create styled-component for component: %s.

`, eA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, eA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, eA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, eA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, eA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, eA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', eA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, eA[9] = "Missing document `<head>`\n\n", eA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, eA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, eA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", eA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, eA[14] = `ThemeProvider: "theme" prop is required.

`, eA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", eA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, eA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, eA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var OB = L.NODE_ENV !== "production" ? eA : {};
function JB() {
  for (var i = [], n = -2360 + -7521 * 1 + -1 * -9881; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[-1816 + 908 * 2], e = [], A = 1807 * 1 + -2940 + 1134, o = i.length; A < o; A += 1) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function Mt(i) {
  for (var n = [], t = 1 * -5011 + 439 * -14 + 5579 * 2; t < arguments.length; t++) n[t - 1] = arguments[t];
  return L.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > 273 * -23 + -3675 + 1422 * 7 ? " Args: ".concat(n.join(", ")) : "")) : new Error(JB.apply(void 0, Dt([OB[i]], n, !1)).trim());
}
var UB = (function() {
  function i(n) {
    this.groupSizes = new Uint32Array(-1017 * 5 + -7007 + 12604), this.length = 1187 * -7 + -2 * 641 + 10103, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = -1410 * -5 + 7 * 1381 + -16717, e = 0; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= -3217 + -2 * -1609) < -4018 + 700 * -7 + 8918) throw Mt(16, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = 111 + 3 * -1382 + 4035;
    }
    for (var a = this.indexOfGroup(n + 1), g = (r = 2 * 2611 + -4553 + -669, t.length); r < g; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[n]++, a++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = -1 * 5273 + -5636 + -1 * -10909;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || 4985 + -5 * 997 === this.groupSizes[n]) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(oa);
    return t;
  }, i;
})(), YB = 1 << -10619 + 23 * 463, Oo = /* @__PURE__ */ new Map(), dn = /* @__PURE__ */ new Map(), Jo = 1, po = function(i) {
  if (Oo.has(i)) return Oo.get(i);
  for (; dn.has(Jo); ) Jo++;
  var n = Jo++;
  if (L.NODE_ENV !== "production" && ((-686 * -7 + 2615 + -7417 | n) < 11234 + 41 * -274 || n > YB)) throw Mt(812 + 1 * 5074 + -5870, "".concat(n));
  return Oo.set(i, n), dn.set(n, i), n;
}, TB = function(i, n) {
  Jo = n + (1 * -7633 + 8355 + -721), Oo.set(i, n), dn.set(n, i);
}, PB = "style[".concat(nt, "][").concat(gs, '="').concat(Vn, '"]'), _B = new RegExp("^".concat(nt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), HB = function(i, n, t) {
  for (var e, A = t.split(","), o = 4952 + -9647 * -1 + -14599, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, KB = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(oa), A = [], o = -1 * -4035 + -1 * 2745 + -1290, r = e.length; o < r; o++) {
    var a = e[o].trim();
    if (a) {
      var g = a.match(_B);
      if (g) {
        var c = 0 | parseInt(g[1], 10), I = g[-7 * -701 + -1405 + -3500];
        -2592 + 432 * 6 !== c && (TB(I, c), HB(i, I, g[-4789 * 1 + 9371 * -1 + 14163]), i.getTag().insertRules(c, A)), A.length = -3206 + -1603 * -2;
      } else A.push(a);
    }
  }
}, og = function(i) {
  for (var n = document.querySelectorAll(PB), t = -2697 + -2463 * 4 + 12549, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(nt) !== as && (KB(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function jB() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Es = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = (function(a) {
    var g = Array.from(a.querySelectorAll("style[".concat(nt, "]")));
    return g[g.length - (-8597 * 1 + -1 * 3803 + -12401 * -1)];
  })(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(nt, as), e.setAttribute(gs, Vn);
  var r = jB();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, qB = (function() {
  function i(n) {
    this.element = Es(n), this.element.appendChild(document.createTextNode("")), this.sheet = (function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 0, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw Mt(1 * 406 + -4952 + 4563);
    })(this.element), this.length = 0;
  }
  return i.prototype.insertRule = function(n, t) {
    try {
      return this.sheet.insertRule(t, n), this.length++, !0;
    } catch {
      return !1;
    }
  }, i.prototype.deleteRule = function(n) {
    this.sheet.deleteRule(n), this.length--;
  }, i.prototype.getRule = function(n) {
    var t = this.sheet.cssRules[n];
    return t && t.cssText ? t.cssText : "";
  }, i;
})(), VB = (function() {
  function i(n) {
    this.element = Es(n), this.nodes = this.element.childNodes, this.length = -7523 * -1 + -1 * -3266 + -10789;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= -7699 * -1 + -9067 * 1 + 1368) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, i;
})(), ZB = (function() {
  function i(n) {
    this.rules = [], this.length = 1 * 9092 + 1 * 8251 + -17343;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, 1 * -1315 + -7093 + -8 * -1051, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, 6419 + 1 * 9679 + 1 * -16097), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
})(), ng = En, zB = { isServer: !En, useCSSOMInjection: !mB }, ds = (function() {
  function i(n, t, e) {
    n === void 0 && (n = St), t === void 0 && (t = {});
    var A = this;
    this.options = JA(JA({}, zB), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && En && ng && (ng = !1, og(this)), ia(this, function() {
      return (function(o) {
        for (var r = o.getTag(), a = r.length, g = "", c = function(s) {
          var Q = (function(f) {
            return dn.get(f);
          })(s);
          if (Q === void 0) return "continue";
          var x = o.names.get(Q), E = r.getGroup(s);
          if (x === void 0 || !x.size || -3333 + 1 * 9049 + -5716 === E.length) return "continue";
          var C = "".concat(nt, ".g").concat(s, '[id="').concat(Q, '"]'), l = "";
          x !== void 0 && x.forEach(function(f) {
            f.length > 773 * -11 + 6599 + 1904 && (l += "".concat(f, ","));
          }), g += "".concat(E).concat(C, '{content:"').concat(l, '"}').concat(oa);
        }, I = 0; I < a; I++) c(I);
        return g;
      })(A);
    });
  }
  return i.registerId = function(n) {
    return po(n);
  }, i.prototype.rehydrate = function() {
    !this.server && En && og(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i(JA(JA({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || -8550 + 1 * -5539 + -1 * -14089) + (3966 * 2 + -1 * 9269 + 1338);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = (function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new ZB(A) : e ? new qB(A) : new VB(A);
    })(this.options), new UB(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (po(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(po(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(po(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
})(), XB = /&/g, $B = /^\s*\/\/.*$/gm;
function ls(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = ls(t.children, n)), t;
  });
}
function us(i) {
  var n, t, e, A = i === void 0 ? St : i, o = A.options, r = o === void 0 ? St : o, a = A.plugins, g = a === void 0 ? Zn : a, c = function(Q, x, E) {
    return E.startsWith(t) && E.endsWith(t) && E.replaceAll(t, "").length > 2 * -3341 + -4263 + 10945 ? ".".concat(n) : Q;
  }, I = g.slice();
  I.push(function(Q) {
    Q.type === Hn && Q.value.includes("&") && (Q.props[8972 + 4669 * -2 + 366] = Q.props[4 * -1613 + 8214 + 1 * -1762].replace(XB, t).replace(e, c));
  }), r.prefix && I.push(hB), I.push(lB);
  var s = function(Q, x, E, C) {
    x === void 0 && (x = ""), E === void 0 && (E = ""), C === void 0 && (C = "&"), n = C, t = x, e = new RegExp("\\".concat(t, "\\b"), "g");
    var l = Q.replace($B, ""), f = EB(E || x ? "".concat(E, " ").concat(x, " { ").concat(l, " }") : l);
    r.namespace && (f = ls(f, r.namespace));
    var h = [];
    return xn(f, uB(I.concat(fB(function(p) {
      return h.push(p);
    })))), h;
  };
  return s.hash = g.length ? g.reduce(function(Q, x) {
    return x.name || Mt(4988 + -1 * 4973), Xe(Q, x.name);
  }, ss).toString() : "", s;
}
var AQ = new ds(), Br = us(), ra = ot.createContext({ shouldForwardProp: void 0, styleSheet: AQ, stylis: Br });
ra.Consumer;
var eQ = ot.createContext(void 0);
function Qr() {
  return re(ra);
}
function tQ(i) {
  var n = oA(i.stylisPlugins), t = n[0], e = n[-3764 * -2 + -7918 + 391], A = Qr().styleSheet, o = EA(function() {
    var I = A, s = {};
    return s.useCSSOMInjection = !1, i.sheet ? I = i.sheet : i.target && (I = I.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (I = I.reconstructWithOptions(s)), I;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = EA(function() {
    var I = {};
    I.namespace = i.namespace, I.prefix = i.enableVendorPrefixes;
    var s = {};
    return s.options = I, s.plugins = t, us(s);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  Z(function() {
    oB(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var a = EA(function() {
    var I = {};
    return I.shouldForwardProp = i.shouldForwardProp, I.styleSheet = o, I.stylis = r, I;
  }, [i.shouldForwardProp, o, r]), g = {};
  g.value = a;
  var c = {};
  return c.value = r, ot.createElement(ra.Provider, g, ot.createElement(eQ.Provider, c, i.children));
}
var ig = (function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = Br);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, ia(this, function() {
      throw Mt(1 * -4559 + 7060 + -2489, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = Br), this.name + n.hash;
  }, i;
})(), oQ = function(i) {
  return i >= "A" && i <= "Z";
};
function rg(i) {
  for (var n = "", t = -4 * -589 + -6359 * 1 + 4003; t < i.length; t++) {
    var e = i[t];
    if (14438 + -14437 * 1 === t && e === "-" && i[3 * 2163 + -6386 + -103] === "-") return i;
    oQ(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var fs = function(i) {
  return i == null || i === !1 || i === "";
}, hs = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !fs(o) && (Array.isArray(o) && o.isCss || Gt(o) ? e.push("".concat(rg(A), ":"), o, ";") : Nt(o) ? e.push.apply(e, Dt(Dt(["".concat(A, " {")], hs(o), !1), ["}"], !1)) : e.push("".concat(rg(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || n in pB || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function tt(i, n, t, e) {
  if (fs(i)) return [];
  if (na(i)) return [".".concat(i.styledComponentId)];
  if (Gt(i)) {
    if (!Gt(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return L.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof ig || Nt(A) || A === null || console.error("".concat(Is(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), tt(A, n, t, e);
  }
  var o;
  return i instanceof ig ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : Nt(i) ? hs(i) : Array.isArray(i) ? Array.prototype.concat.apply(Zn, i.map(function(r) {
    return tt(r, n, t, e);
  })) : [i.toString()];
}
function nQ(i) {
  for (var n = 2 * 4936 + 3667 + -13539; n < i.length; n += 3 * -2826 + 5 * -1459 + 15774) {
    var t = i[n];
    if (Gt(t) && !na(t)) return !1;
  }
  return !0;
}
var iQ = cs(Vn), rQ = (function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = L.NODE_ENV === "production" && (e === void 0 || e.isStatic) && nQ(n), this.componentId = t, this.baseHash = Xe(iQ, t), this.baseStyle = e, ds.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = At(A, this.staticRulesId);
      else {
        var o = tg(tt(this.rules, n, t, e)), r = Ir(Xe(this.baseHash, o) >>> -1098 * -3 + 1 * 5701 + -8995);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        A = At(A, r), this.staticRulesId = r;
      }
    else {
      for (var g = Xe(this.baseHash, e.hash), c = "", I = -3827 + 1 * 3827; I < this.rules.length; I++) {
        var s = this.rules[I];
        if (typeof s == "string") c += s, L.NODE_ENV !== "production" && (g = Xe(g, s));
        else if (s) {
          var Q = tg(tt(s, n, t, e));
          g = Xe(g, Q + I), c += Q;
        }
      }
      if (c) {
        var x = Ir(g >>> 0);
        t.hasNameForId(this.componentId, x) || t.insertRules(this.componentId, x, e(c, ".".concat(x), void 0, this.componentId)), A = At(A, x);
      }
    }
    return A;
  }, i;
})(), ps = ot.createContext(void 0);
ps.Consumer;
var Ei = {}, ag = /* @__PURE__ */ new Set();
function aQ(i, n, t) {
  var e = na(i), A = i, o = !xi(i), r = n.attrs, a = r === void 0 ? Zn : r, g = n.componentId, c = g === void 0 ? (function(k, D) {
    var y = typeof k != "string" ? "sc" : za(k);
    Ei[y] = (Ei[y] || 2848 + 7 * 1189 + -11171 * 1) + 1;
    var W = "".concat(y, "-").concat(SB(Vn + y + Ei[y]));
    return D ? "".concat(D, "-").concat(W) : W;
  })(n.displayName, n.parentComponentId) : g, I = n.displayName, s = I === void 0 ? (function(k) {
    return xi(k) ? "styled.".concat(k) : "Styled(".concat(Is(k), ")");
  })(i) : I, Q = n.displayName && n.componentId ? "".concat(za(n.displayName), "-").concat(n.componentId) : n.componentId || c, x = e && A.attrs ? A.attrs.concat(a).filter(Boolean) : a, E = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var C = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var l = n.shouldForwardProp;
      E = function(k, D) {
        return C(k, D) && l(k, D);
      };
    } else E = C;
  }
  var f = new rQ(t, Q, e ? A.componentStyle : void 0);
  function h(k, D) {
    return (function(y, W, Y) {
      var fA = y.attrs, jA = y.componentStyle, be = y.defaultProps, Zc = y.foldedComponentIds, Ba = y.styledComponentId, zc = y.target, Xc = ot.useContext(ps), $c = Qr(), Xn = y.shouldForwardProp || $c.shouldForwardProp;
      L.NODE_ENV !== "production" && en(Ba);
      var Qa = wB(W, Xc, be) || St, de = (function(so, Ot, co) {
        var gt = {};
        gt.className = void 0, gt.theme = co;
        for (var ei, Ye = JA(JA({}, Ot), gt), ti = 2292 + -2 * -718 + -3728; ti < so.length; ti += 1 * -709 + -21 * 337 + 7787) {
          var Io = Gt(ei = so[ti]) ? ei(Ye) : ei;
          for (var ke in Io) Ye[ke] = ke === "className" ? At(Ye[ke], Io[ke]) : ke === "style" ? JA(JA({}, Ye[ke]), Io[ke]) : Io[ke];
        }
        return Ot.className && (Ye.className = At(Ye.className, Ot.className)), Ye;
      })(fA, W, Qa), Wt = de.as || zc, Lt = {};
      for (var qA in de) de[qA] === void 0 || qA[976 * -1 + -1 * 7475 + 8451] === "$" || qA === "as" || qA === "theme" && de.theme === Qa || (qA === "forwardedAs" ? Lt.as = de.forwardedAs : Xn && !Xn(qA, Wt) || (Lt[qA] = de[qA], Xn || L.NODE_ENV !== "development" || $C(qA) || ag.has(qA) || !cr.has(Wt) || (ag.add(qA), console.warn('styled-components: it looks like an unknown prop "'.concat(qA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var $n = (function(so, Ot) {
        var co = Qr(), gt = so.generateAndInjectStyles(Ot, co.styleSheet, co.stylis);
        return L.NODE_ENV !== "production" && en(gt), gt;
      })(jA, de);
      L.NODE_ENV !== "production" && y.warnTooManyClasses && y.warnTooManyClasses($n);
      var Ai = At(Zc, Ba);
      return $n && (Ai += " " + $n), de.className && (Ai += " " + de.className), Lt[xi(Wt) && !cr.has(Wt) ? "class" : "className"] = Ai, Y && (Lt.ref = Y), NA(Wt, Lt);
    })(p, k, D);
  }
  h.displayName = s;
  var p = ot.forwardRef(h), m = {};
  return m.attrs = !0, m.componentStyle = !0, m.displayName = !0, m.foldedComponentIds = !0, m.shouldForwardProp = !0, m.styledComponentId = !0, m.target = !0, p.attrs = x, p.componentStyle = f, p.displayName = s, p.shouldForwardProp = E, p.foldedComponentIds = e ? At(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = Q, p.target = e ? A.target : i, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(k) {
    this._foldedDefaultProps = e ? (function(D) {
      for (var y = [], W = -6134 * 1 + -4227 + 10362; W < arguments.length; W++) y[W - (-1022 + 1 * 6383 + -20 * 268)] = arguments[W];
      for (var Y = 890 * -8 + -4304 + 11424, fA = y; Y < fA.length; Y++) Cr(D, fA[Y], !0);
      return D;
    })({}, A.defaultProps, k) : k;
  } }), L.NODE_ENV !== "production" && (yB(s, Q), p.warnTooManyClasses = /* @__PURE__ */ (function(k, D) {
    var y = {}, W = !1;
    return function(Y) {
      if (!W && (y[Y] = !0, Object.keys(y).length >= 200)) {
        var fA = D ? ' with the id of "'.concat(D, '"') : "";
        console.warn("Over ".concat(-17731 + -1 * -17931, " classes were generated for component ").concat(k).concat(fA, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), W = !0, y = {};
      }
    };
  })(s, Q)), ia(p, function() {
    return ".".concat(p.styledComponentId);
  }), o && xs(p, i, m), p;
}
function gg(i, n) {
  for (var t = [i[-3 * -1164 + 6 * 607 + -7134]], e = -8059 * 1 + 1922 + 6137, A = n.length; e < A; e += -4766 * -1 + -16 * 557 + 4147) t.push(n[e], i[e + 1]);
  return t;
}
var sg = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function gQ(i) {
  for (var n = [], t = 5597 + -2042 * -2 + 22 * -440; t < arguments.length; t++) n[t - (-8142 * 1 + -5680 + 13823)] = arguments[t];
  if (Gt(i) || Nt(i)) return sg(tt(gg(Zn, Dt([i], n, !0))));
  var e = i;
  return n.length === 0 && -6790 + 371 * -7 + -1 * -9388 === e.length && typeof e[-1 * 2957 + 373 * -21 + 10790] == "string" ? tt(e) : sg(tt(gg(e, n)));
}
function xr(i, n, t) {
  if (t === void 0 && (t = St), !n) throw Mt(1641 * -5 + -2 * -487 + 7232, n);
  var e = function(A) {
    for (var o = [], r = 1; r < arguments.length; r++) o[r - (106 + -1 * 9935 + 4915 * 2)] = arguments[r];
    return i(n, t, gQ.apply(void 0, Dt([A], o, !1)));
  };
  return e.attrs = function(A) {
    return xr(i, n, JA(JA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return xr(i, n, JA(JA({}, t), A));
  }, e;
}
var ms = function(i) {
  return xr(aQ, i);
}, go = ms;
cr.forEach(function(i) {
  go[i] = ms(i);
});
L.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var mo = "__sc-".concat(nt, "__");
L.NODE_ENV !== "production" && L.NODE_ENV !== "test" && typeof window < "u" && (window[mo] || (window[mo] = 0), window[mo] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[mo] += -1665 + 3194 * 1 + -1528);
const ln = De(void 0);
ln.displayName = "CameraServiceContext";
function it() {
  const i = re(ln);
  if (i === void 0)
    throw new Error(`${ln.displayName} must be used within a CameraServiceProvider`);
  return i;
}
function Uo() {
  return !1;
}
function sQ() {
  return !0;
}
async function ys() {
  return navigator.mediaDevices.enumerateDevices();
}
async function di() {
  return (await ys()).filter((n) => n.kind === "videoinput");
}
function ht(i) {
  i.getTracks().forEach((t) => t.stop());
}
function Er(i) {
  return i.getVideoTracks()[1 * 2674 + 8901 + 25 * -463];
}
(function(i, n) {
  function t(r, a, g, c, I) {
    return mA(a - 336, c);
  }
  function e(r, a, g, c, I) {
    return mA(I - 763, c);
  }
  function A(r, a, g, c, I) {
    return mA(I - 579, c);
  }
  const o = i();
  for (; ; )
    try {
      if (parseInt(t(613, 602, 611, "GoCp", 621)) / 1 + -parseInt(t(606, 605, 594, "7sP6", 611)) / 2 + -parseInt(t(600, 594, 580, "(nSc", 584)) / 3 * (-parseInt(A(845, 871, 869, "ST93", 849)) / 4) + -parseInt(t(600, 593, 604, "d*tt", 575)) / 5 * (parseInt(e(1021, 1031, 1014, "S9!4", 1017)) / 6) + parseInt(e(1046, 1022, 1012, "EI9N", 1030)) / 7 + parseInt(A(812, 798, 817, "BR^h", 818)) / 8 * (parseInt(A(828, 818, 839, "a^ir", 838)) / 9) + -parseInt(e(1034, 998, 1032, "%iOz", 1019)) / 10 * (-parseInt(e(992, 987, 1007, "@fD$", 1004)) / 11) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(un, -67 * 5963 + -683 * -217 + 1017392);
function un() {
  const i = ["awvrW7ZdRq", "WR/cRmoQW41iCMfOa3JdPua", "mghdJqDQ", "W5WXi8kYWP4", "W73dISkqW4xcGa", "fxZdJqXg", "WRy6W5mXW43dN8oSW7NcU246yG", "WObHW75AW4a", "W6xdSCkWWPmp", "W7astfhdVG", "WPflf8oxW44", "WRVdPmktANBdVGjzWP9Y", "W69PtSk2ldtcOhxcGCoamtRdRa", "sMFcVgHnoHLxWOFcOxKGwG", "lSk2j8oRrCkwWO/dO38d", "CguwhgGPusJdOLNdMSoI", "WQ5hyf7dGxiXW44", "c8kQy8kvE13cG8onW47cMa", "WOfKaSkYWRRdJqRcGq", "sCkkW65xvIP9", "t8k2W503W53dNmoRW4G", "p8kadKTxySo2", "W4VdP3S9WPy", "W53cOJbOya", "W77dI8kBW6pcGa", "DJv5WR/cRmkCW7zX", "W5fpzmkeu8o4W6WjdMBdT8oy", "WQ7cQ8kmsYFcJmoLWQFdKfb8uqK", "k8k1jSoRfCopW4/dM1uavmochq", "WPlcImo1jSk1x8khWQZdTCo3BZhcVG", "W65Qq8k8jZldM2ZcOSojhX8", "WOKAn8o0fW", "W4upiSoSW5O", "W7ZdTCk6gHG", "WOrKCmocW5RcUJZcHdDYdMK", "W4WqWQtdQse", "pt7dOYmk", "WO1VW7i", "zX7cVrjj", "W4KkWQRdTIe", "W7pdM8krW4m", "DJ0oW6lcGmk6W6HbCLK", "WQ7dRmkwk8oTW5ZcSCkbw1LshqS"];
  return un = function() {
    return i;
  }, un();
}
function mA(i, n) {
  i = i - (-9275 + 9691 * -1 + 19201);
  const t = un();
  let e = t[i];
  if (mA.ZnsaSl === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (let x = 0, E = s.length; x < E; x++)
        Q += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const g = function(c, I) {
      let s = [], Q = 0, x, E = "";
      c = A(c);
      let C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (let l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    mA.rCuWrd = g, mA.kNGFSt = {}, mA.ZnsaSl = !0;
  }
  const o = t[0], r = i + o, a = mA.kNGFSt[r];
  return a ? e = a : (mA.nRxJSh === void 0 && (mA.nRxJSh = !0), e = mA.rCuWrd(e, n), mA.kNGFSt[r] = e), e;
}
function cQ(i) {
  function n(a, g, c, I, s) {
    return mA(c - 155, a);
  }
  function t(a, g, c, I, s) {
    return mA(I - -281, c);
  }
  const e = new ArrayBuffer(i[n("QmgX", 405, 397) + "h"]);
  function A(a, g, c, I, s) {
    return mA(I - 346, g);
  }
  const o = new Uint8Array(e);
  function r(a, g, c, I, s) {
    return mA(I - 712, c);
  }
  for (let a = 0, g = i[n("@s10", 411, 399) + "h"]; a < g; a++)
    A(570, "QmgX", 588, 591) !== r(954, 993, "gfiI", 974) ? o[a] = i[r(982, 976, "Q8n!", 985) + n("@s10", 429, 419)](a) : _0x556e3d[_0x45bf2b] = _0xcf44eb[n("hoK(", 408, 391) + t(-23, -44, "(nSc", -38)](_0x3cfc01);
  return e;
}
(function(i, n) {
  function t(g, c, I, s, Q) {
    return H(g - -168, c);
  }
  function e(g, c, I, s, Q) {
    return H(s - -383, I);
  }
  function A(g, c, I, s, Q) {
    return H(I - -862, Q);
  }
  function o(g, c, I, s, Q) {
    return H(Q - -867, I);
  }
  function r(g, c, I, s, Q) {
    return H(s - 105, I);
  }
  const a = i();
  for (; ; )
    try {
      if (-parseInt(o(-326, -374, "K(HN", -374, -344)) / 1 * (parseInt(o(-358, -364, "bn6z", -395, -385)) / 2) + -parseInt(t(322, "]mUE", 333, 343, 300)) / 3 + parseInt(e(116, 133, "M%&u", 144, 120)) / 4 * (-parseInt(r(594, 603, "M%&u", 585, 559)) / 5) + -parseInt(o(-331, -333, "u^Po", -319, -346)) / 6 * (parseInt(e(88, 119, "nUC%", 100, 104)) / 7) + -parseInt(e(124, 124, "M%&u", 114, 139)) / 8 + -parseInt(A(-388, -351, -364, -353, "Dfzl")) / 9 + parseInt(o(-379, -390, "2L6S", -374, -376)) / 10 === n) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(fn, -381901 + 156 * -352 + 1003309 * 1);
function H(i, n) {
  i = i - (2 * -315 + -5456 + -6563 * -1);
  const t = fn();
  let e = t[i];
  if (H.qOvmkK === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (let x = 0, E = s.length; x < E; x++)
        Q += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const g = function(c, I) {
      let s = [], Q = 0, x, E = "";
      c = A(c);
      let C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (let l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    H.mVaJuC = g, H.AQYiWy = {}, H.qOvmkK = !0;
  }
  const o = t[-896 + -6862 * 1 + 1 * 7758], r = i + o, a = H.AQYiWy[r];
  return a ? e = a : (H.vtYsgb === void 0 && (H.vtYsgb = !0), e = H.mVaJuC(e, n), H.AQYiWy[r] = e), e;
}
function fn() {
  const i = ["yqewW6VdTmk8eCkSzmoZW6y8ka", "lmkpW6tcQ8k6W7fpmJ8YyuS", "CafaWQH7", "WPxdLqVcVv8", "WQXyqmob", "WODPt8kAEmkQWQzuW6z/", "W7PYA8oClcPoW5LAvCkPgW", "DCkmW78q", "W4nfkqVcR1BdOmoMW4jnW5xcVq", "iCk+WQHSW5TVW5S", "xSkecSkvWQa", "W5ZdTI5W", "W6SNhCkmWQiWW5ldISkMlmk+W4ilW7q", "DSkiW6egeq", "WOhdSSoN", "zaxcG1JcPG", "WPddIh3dKmkl", "W5SEWQPZdq", "gs7dS8k0ga", "WOitzW", "csNdQmkWaa", "l11MW544", "WRjJrmkD", "W7i/pG", "WPdcRXLTeSoIWR5mqCoqza", "xmkpb8kcWQS", "BX89WP1TWOhcU2uZiCkjW5W", "W7W0jatdVG", "dSohWPPE", "WQldQCoJaqSiWQFdKNddSGj+qW", "zgzwWPxcNCofwa", "vCklbmkc", "WQBcI8oyWR4N", "F8kiW7ehcq", "WOddJ2BdLmkt", "imohW6e1WOfpW5jDWOZcLwy", "WPjzAcTo", "FCouWR7dQCo0", "W6uvW7jItW", "BZbzW5JcRq", "e1VdTeLa", "W7/cH8orW7G", "WPJdNqW7W5S", "n8oYlv/cLa", "yWmuW6xdS8k/eCklFmoZW4K/oW", "BrW0WP1NWOldK1qmjSkHW44l", "xCkueCkMk8oTW7O", "EqntfLKKWPRdLSoFW4G", "tGj+vCkH", "mufdWPFcOG", "AmolgCoGsWldUG", "eCoXW43dUW", "k0eEvvG", "WPlcRXvPh8k1W6jqz8oqvmk5WQ0", "WQNcMmknWRlcKYr2WOldGZDNxHS", "iWFcJWatt8ouWPPPfGeUuSo5", "DCkwWRrV", "BWRcJu8", "l1ytD00", "FfBdMvnu", "n019"];
  return fn = function() {
    return i;
  }, fn();
}
async function IQ() {
  const i = {};
  function n(I, s, Q, x, E) {
    return H(x - -688, E);
  }
  function t(I, s, Q, x, E) {
    return H(I - 335, E);
  }
  i[c(1323, 1343, 1338, "SeSB")] = T0, i[g(773, 793, "2L6S", 788) + "h"] = 256;
  const e = await window[g(828, 825, "!yDv", 807) + "o"][a(333, 305, 309, "(*R%") + "e"][c(1317, 1337, 1341, "SeSB") + c(1315, 1300, 1325, "M%&u") + "y"](i, !0, [t(847, 871, 845, 870, "9bvS") + "pt", n(-154, -138, -138, -158, "CZbp") + "pt"]), A = Uint8Array[t(812, 782, 835, 802, "exRy")](Array(-1 * -9815 + 1629 * 3 + 7343 * -2)[g(767, 784, "GJ%8", 785)](16800 + -5 * 3360)), o = window[a(261, 257, 272, "nUC%") + "o"][t(829, 841, 810, 809, "nUC%") + a(266, 253, 276, "KkLp") + a(295, 304, 300, "l[2K")](A), r = {};
  function a(I, s, Q, x, E) {
    return H(s - -231, x);
  }
  r[g(780, 787, "K(HN", 789)] = e;
  function g(I, s, Q, x, E) {
    return H(x - 293, Q);
  }
  r.iv = o;
  function c(I, s, Q, x, E) {
    return H(s - 815, x);
  }
  return r;
}
async function CQ(i) {
  const { iv: n, key: t } = await IQ();
  function e(Q, x, E, C, l) {
    return H(l - 884, x);
  }
  const A = new Uint8Array(i);
  function o(Q, x, E, C, l) {
    return H(C - -156, x);
  }
  const r = {};
  function a(Q, x, E, C, l) {
    return H(Q - 514, x);
  }
  r[e(1385, "@c#R", 1432, 1403, 1409)] = T0, r.iv = n;
  const g = await window[s(814, "f^S9", 825, 813) + "o"][s(752, "bo!G", 772, 758) + "e"][e(1427, "$jfK", 1437, 1398, 1408) + "pt"](r, t, A), c = await window[e(1405, "%daW", 1366, 1416, 1397) + "o"][a(1029, "ALBL") + "e"][o(397, "CGe(", 376, 373) + s(807, "y1X4", 800, 781)](o(365, "8q9I", 369, 360), t), I = {};
  I[s(803, "CZbp", 788, 790) + "ge"] = g;
  function s(Q, x, E, C, l) {
    return H(C - 280, x);
  }
  return I[e(1399, "$jfK", 1397, 1374, 1404)] = c, I.iv = n, I;
}
async function BQ(i) {
}
(function(i, n) {
  function t(a, g, c, I, s) {
    return cA(s - 645, I);
  }
  function e(a, g, c, I, s) {
    return cA(c - 526, g);
  }
  function A(a, g, c, I, s) {
    return cA(c - 893, a);
  }
  function o(a, g, c, I, s) {
    return cA(c - -576, I);
  }
  const r = i();
  for (; ; )
    try {
      if (-parseInt(t(1049, 1088, 1101, "wnXK", 1053)) / 1 * (-parseInt(t(1133, 1075, 1099, "8zqg", 1122)) / 2) + parseInt(o(-140, -170, -182, "FLCu", -198)) / 3 + -parseInt(A("0vGC", 1326, 1304, 1331, 1309)) / 4 + -parseInt(A("i9KJ", 1253, 1290, 1246, 1265)) / 5 + parseInt(t(1046, 1080, 1047, "x#!l", 1071)) / 6 + -parseInt(e(949, "x#!l", 969, 967, 920)) / 7 + -parseInt(e(989, "9TyD", 973, 961, 933)) / 8 * (-parseInt(o(-173, -115, -124, "gPSS", -170)) / 9) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(hn, -1 * 872481 + -1 * 429068 + 1791679 * 1);
const cg = -1 * 4854 + 6786 + 568, Ig = 2398 * -2 + -767 * -13 + -1675, ws = 966 + -1 * -8124 + -9088, Ds = -2924 * -1 + 1 * 4959 + 1 * -7883 + 0.5, bs = {};
function yA(i, n, t, e, A) {
  return cA(A - -271, t);
}
bs[j("fcJa", -454, -418)] = 1920;
const ks = {};
ks[j("6F*2", -345, -394)] = 1080;
const Ss = {};
Ss[j("pWHv", -327, -363)] = 30;
const Yo = {};
Yo[HA(570, "IySe", 615, 603, 577)] = bs, Yo[GA(164, 129, 163, "@gb2") + "t"] = ks, Yo[yA(70, 97, "3lNr", 69, 113) + OA(578, 540, 562, 550, "9TyD")] = Ss;
const Gs = {};
Gs[HA(483, "wnXK", 468, 482, 509)] = 1920;
const Ns = {};
Ns[j("(YdT", -399, -432)] = 1080;
const To = {};
To[j("Or*P", -430, -405)] = Gs, To[j("xhFp", -302, -350) + "t"] = Ns, To[j("nz*n", -466, -436) + yA(92, 146, "CsQ2", 88, 116)] = 30;
const Rs = {};
Rs[j("Snmv", -372, -382)] = 1;
const vs = {};
vs[HA(461, "fcJa", 497, 527, 507)] = 1;
function j(i, n, t, e, A) {
  return cA(t - -821, i);
}
const Fs = {};
Fs[GA(118, 101, 129, "^n[i")] = 1;
const Po = {};
Po[HA(501, "pWHv", 553, 561, 548)] = Rs, Po[yA(172, 219, "6F*2", 176, 198) + "t"] = vs, Po[yA(136, 71, "i9KJ", 87, 117) + HA(585, "fcJa", 607, 566, 571)] = Fs;
const Ms = {};
Ms[GA(71, 83, 81, "^n[i")] = 1;
const Ws = {};
function cA(i, n) {
  i = i - 383;
  const t = hn();
  let e = t[i];
  if (cA.TdAxjd === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (let x = 0, E = s.length; x < E; x++)
        Q += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const g = function(c, I) {
      let s = [], Q = 0, x, E = "";
      c = A(c);
      let C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (let l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    cA.AJCvsB = g, cA.ANnVII = {}, cA.TdAxjd = !0;
  }
  const o = t[-331 + 331 * 1], r = i + o, a = cA.ANnVII[r];
  return a ? e = a : (cA.sYsDpT === void 0 && (cA.sYsDpT = !0), e = cA.AJCvsB(e, n), cA.ANnVII[r] = e), e;
}
Ws[GA(165, 121, 124, "@gb2")] = 1;
function hn() {
  const i = ["zrLUr8kL", "W63dH0O", "W5FdPCo+uv8", "f8oFlW1J", "b1r4vZi", "cmo8WOactq", "omo6i8kcW6/dT8oBoSkrrKipW5e", "W67dNvpcOa", "yqrorSk/", "jv7dGqFdR8k4W5O", "CCkcWPe", "WOjlDIFdPXT0WPtcQmoRW7ldS8kQ", "vbmKdMucsCkMWQCMW7xcV8kr", "ANxcG8ofxa", "eqNdNmowWOWwWR8", "iCobW5aMWQOTW6FdJmkmE8otWOGE", "debLW6eu", "wCoSW65V", "W6vswcBcMG", "zhSFluy", "dfHsW6Cv", "WOFdKvpcUSot", "W4hdIg1NWONdNw7cRv3dUv55W58", "W6hdPvZdVGe", "W7ZcKfBcOIddNmkurvm5WQ4R", "yZzgbw8", "fLj4vt0", "W79AuJa", "WPlcNdCGW40", "vbaMcM8brSkaWQWCW7lcSmkL", "rJzoysS", "WQtcUSk2W4pcUa", "wdTpDc8", "mxPgsL1UWPNcH1BdRSoln2W", "aCo6WOiMsG", "EmoitgWa", "W6LoxctcGG", "zw8xdhu", "W6tcQ8k6gxGMiW", "E1NdMG", "WPXYW4mYBW", "bCoiadT+", "WPxcJdK/W5W", "jCoteSoR", "vcDlDJC", "ECo4W7rlfG", "WP3cIIS", "WRXYWR1EEG", "iCkeztHk", "sSkfba", "y8kKB8oh", "aezxwt8", "rmkmC3W/WQdcMJfKW517mva", "WQhcNYW3", "WRNdRWXWka", "z2JcI8obqa", "W6JdJfJcTCkb", "WP3dLu7cTmou", "WRVcUSkzlv4", "mgnlW5nc", "W47dV8oUv1y", "WOdcKJCL", "c8k+oG", "W5XVW4e4y2qt", "W6NdJvtcS8kf", "uSonrSoxW7e", "usSkgq", "yt/dN8kmFq", "WQJdKq7dVxe", "W7hcPH0iWP0", "uCkxWPf6W6W", "jmoDmcS", "WRtdKLreW7i", "y8ozr0Kz", "eePsW7WB", "WQtcR8kIW4FcGG", "zCooW69+fa", "y8kqWOn6W40", "iea8bmo4cSo0WPyvgWviqW", "WQFcVmkTW4/cSa", "smoxqmof", "W6dcLGaCWQFcM1iXECoZW4WHtG", "WRtdLLpcTSoo", "Dbf5rW", "FgZcHmodBG", "WRhdJrvOjq", "umo8WQZdUG", "WPBcHJKXW40", "ycHHb3G", "ueKuzSkw", "FZldImkV", "WRZdLey", "cX5inCoothZdPK0dn0e", "wmo+E8kGW4FdPxPiB8khWPZdHwe", "eSoGWQOksW", "WRVdOgDTmCoaumkDFCk+WQFcQmoK", "vLGFCW", "WQNcTmkh"];
  return hn = function() {
    return i;
  }, hn();
}
const Ls = {};
Ls[yA(187, 211, "pWHv", 148, 175)] = 1;
function OA(i, n, t, e, A) {
  return cA(n - 60, A);
}
function GA(i, n, t, e, A) {
  return cA(n - -349, e);
}
const _o = {};
_o[yA(109, 171, "FLCu", 97, 143)] = Ms, _o[j("HVhf", -364, -402) + "t"] = Ws, _o[GA(72, 107, 144, "fcJa") + yA(202, 193, "Ug5a", 124, 160)] = Ls;
const Zt = {};
Zt[OA(497, 517, 484, 543, "4aC%")] = Yo, Zt[yA(145, 132, "95!Q", 171, 180) + GA(80, 75, 99, "Pw&$")] = To, Zt[j("^n[i", -416, -380)] = Po, Zt[j("Pw&$", -383, -428) + OA(457, 475, 471, 458, "@gb2")] = _o;
const pn = Zt, qe = {};
qe[j("4&J5", -406, -359) + OA(514, 515, 530, 557, "CsQ2") + HA(503, "sHZ8", 563, 572, 541)] = cg, qe[OA(492, 500, 539, 461, "x#!l") + OA(425, 470, 422, 479, "HVhf") + GA(48, 96, 81, "x2qZ") + HA(559, "fcJa", 526, 521, 564)] = pn[yA(81, 114, "FLCu", 150, 128)], qe[OA(485, 528, 488, 512, "n5b7") + yA(117, 103, "CsQ2", 145, 146) + j("ELCk", -446, -431) + OA(492, 456, 432, 459, "0N$]")] = pn[yA(128, 103, "6F*2", 126, 129) + OA(507, 536, 487, 547, "OvS3")], qe[HA(598, "8zqg", 567, 549, 558) + OA(446, 472, 507, 490, "wnXK")] = ws, qe[GA(117, 84, 39, "95!Q") + OA(459, 494, 446, 465, "ELCk") + OA(424, 452, 470, 461, "Ug5a") + yA(85, 166, "Snmv", 163, 133) + j("XdKo", -393, -358)] = Ds, qe[GA(131, 93, 48, "fcJa") + j("xhFp", -457, -423) + "Ms"] = cg;
const Ve = {};
function HA(i, n, t, e, A) {
  return cA(A - 104, n);
}
Ve[GA(4, 34, 7, "!^no") + OA(487, 482, 500, 490, "FLCu") + HA(540, "x#!l", 558, 500, 522)] = Ig, Ve[OA(497, 455, 427, 417, "x2qZ") + j("ELCk", -372, -391) + GA(171, 130, 123, "0N$]") + j("i9KJ", -430, -414)] = pn[HA(590, "fcJa", 550, 617, 579)], Ve[j("gPSS", -315, -349) + GA(71, 99, 69, "HVhf") + GA(153, 125, 123, "Or*P") + yA(220, 220, "5)[x", 186, 193)] = pn[HA(492, "x2qZ", 536, 487, 495) + j("[YXJ", -371, -368)], Ve[HA(584, "Ug5a", 598, 517, 563) + GA(91, 72, 40, "@gb2")] = ws, Ve[j("(YdT", -405, -372) + yA(143, 196, "xhFp", 174, 164) + HA(460, "n5b7", 542, 517, 505) + j("x#!l", -330, -356) + yA(145, 147, "gPSS", 183, 142)] = Ds, Ve[j("YOb]", -344, -360) + j("Pw&$", -426, -435) + "Ms"] = Ig;
const dr = {};
dr[GA(32, 53, 20, "viJ8")] = qe, dr[yA(152, 170, "!^no", 117, 135)] = Ve;
const QQ = dr;
function Ae(i, n, t, e, A) {
  return IA(A - -594, n);
}
function FA(i, n, t, e, A) {
  return IA(A - -808, n);
}
(function(i, n) {
  const t = i();
  function e(a, g, c, I, s) {
    return IA(I - 2, g);
  }
  function A(a, g, c, I, s) {
    return IA(a - 518, g);
  }
  function o(a, g, c, I, s) {
    return IA(s - -844, c);
  }
  function r(a, g, c, I, s) {
    return IA(I - -817, c);
  }
  for (; ; )
    try {
      if (-parseInt(e(248, "6)82", 122, 185, 145)) / 1 + parseInt(e(334, "HM5v", 308, 346, 398)) / 2 + parseInt(r(-649, -629, "(Kx&", -555, -519)) / 3 + -parseInt(o(-734, -612, "YI8v", -616, -674)) / 4 + -parseInt(A(699, "1(*1", 706, 704, 790)) / 5 * (parseInt(o(-630, -554, "X^eJ", -715, -649)) / 6) + -parseInt(r(-634, -583, "QL2d", -598, -594)) / 7 * (parseInt(e(442, "%w(3", 420, 350, 322)) / 8) + parseInt(A(783, "]Hhn", 867, 718, 741)) / 9 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(mn, -201 * -7886 + 759801 + -1528549);
function wA(i, n, t, e, A) {
  return IA(n - -656, i);
}
function mn() {
  const i = ["kSoRBCoevG", "vmkGWP7cR2S", "W7hcIqrgoG", "W7FdS0/dQmo4W5nPiLmBWOC", "rmonwYFcKG", "W7RdQWWGE8kmWPCjWPxdUu9g", "vSkwW7nJo8o+EuVdKa", "Ce/cPmkVW6C", "zSkYrmkHWPu", "jdVdI8kiWPG", "FMFcUmk4", "us55hSoN", "q8knWRpdLeq", "W5ldOSo1W6hcSa", "W7RdV8o+W6S", "k8oHzCoera", "W6hcG8oHW6hcMq", "WQn/W47dKSooW63cRmo+WOu", "nCkkW7WQW4O", "FmoqASoy", "tYWXW4mw", "W7BcKrJcLZa", "ocmbrSoT", "ytiH", "icVdOCkiWQi", "E8kGWPxcVN0", "lmkBW6qBW44", "W6aTWP/dPCon", "WRO1C8kDWP1WW6FcVSk8WQrXWOpcNG", "WPLDaaSE", "WR4zds/cGG", "vMKbDmoR", "WRVcSb/cUCk5", "oSkSEmoiiq", "lw5cW40R", "W5tdVSoUW77cSa", "lNNcTevE", "W78Xu3rW", "W77dTmo4W7/dRG", "W5JdPCkmWPzS", "hJ4DwSoR", "e8oTe8kkWOOWWPGcrq", "FwxcPSk8W6W", "W7JcLCkBBCodkX5VhdOxxW", "W7S7surL", "W4NdJ8koWOnX", "ngrE", "deShqmkj", "qrtdHSo/bmobW7m2BSouWPS", "n8kFW7OjW4O", "WQqfFSobW5C", "uNRdICkmW7W", "W6GCW653qW", "vmkfi8o5zW", "W7eqwxhcUa", "W706u0v4", "rwNdKSknW7O", "W6a5WPJdMmoq", "WONdGeebWQS", "WOL1gJaZ", "WQxcSCkhW5Xo", "qmk5WOepW4K", "E8kAWQZdL10", "rSoRB8o/W5W", "k8oJy8oeqW", "q3tdJSkrW7W", "s8k8WPqrW50", "o2PdW58", "WQBdGeuXWQe", "CMZcRSk1W4a", "CNtcR8kRW4q", "WQpcPCkaW6ry", "CsmmWOST", "W7xcLrjflq", "dZ4oxmo3", "WRlcJCkn", "mNTeW68H", "FJSZuaq", "Fc41Ds8", "W7hcK8oPW5RcJG", "CZDYh8oY", "W7WJWOe", "WQBdLmoAhCkE", "jghcPG", "WQLJfWqObmoRur/dVK3dGYW", "r34jDmoT", "nhBdISk2WO8", "ACokWRHAWPFdHqxdQmkBW59KW6NdImkl", "dSojWRX9ga", "uCk4wmkZWPu", "W7usv2/cHq", "iNZcML9o", "W57dVCoVW5BcOq", "W5XyBmkdW4G", "qCkkcmorBW", "vmkhkCo5tG", "xg8uxmo7", "Amk1oSkzdK15bSkhdSkgkmkV", "WQVcRG/cM8kS", "WQVcTHRcTmk4", "guNcLSkJva", "fciC", "WQpcRCkgW6z5", "lSkuW71xzrBdQmk5W5frWQRcNq", "W6lcKSoOW7ZcOW", "ytGdWOOT", "iIOBqSoF", "Cg3cPmkQW5e", "vmkvWRGYxq", "Fmk/WQWVvq", "W4tdVCo/W7pcSa", "W7hcH8oUW6dcNW", "jZddVmk/WOS", "jSk7WRRdLv4", "vCoEqctcKW", "yYmiWRO4", "WQtdGCoCpSkE", "W6W1tLTI", "qx3dLmkhW7O", "uCooxtNcLq", "u8kzWQJdMum", "W5ddO8o/W77cOq", "uCocvIFcHa", "W4CEWQxdU8o+", "WQr1W4/cV8kkWONcRSoRWQ/dTSo9DG", "WRuMdIFcOG", "W4xdRmoYW77cTW", "jh/cOw1o", "BCooWQSona", "W70wW4nWrW", "ox5cW4OW", "tmoxWRGfnG", "WQxcPCkaW6zF", "bK0sAmkz", "WQyZcdVcNG", "mmoTza", "FSoqD8oKW5e", "eSkqW4eCW4W", "gCkvW6yDW5S", "dhldKCkZWR0", "W4KGxKLKmsXQW6rjWPpdPLit", "evOAASky", "CmotWR4KmG", "WQFcRXu", "W77dTmo4W7NdJG", "xCojqcZcHa", "wJSBW7uA", "dCodWRHCnq", "BdabWPWq", "W7ldV8oUW7tdRG", "qmkaWPax", "c0lcHSkmxG", "ugiXBN7dNmkocx4", "eYrNzga", "eZbGwx0", "omoVBW", "WQyXdJVcMq", "gcmbrSoT", "WRG3dZlcNG", "W7xcGYvylq", "ccaaqG", "Csm/WPW6", "WRmwzCoaW5e", "DJyeWPuQ", "uNtdLCkmW6W", "b14fBCkp", "bmoeCCk8nmkCBZqGiSolW58", "qmojqc3cJG", "nhH/W50H", "A8orWQSjoq", "fmo+W5vxWOq4BKNcQ8oXlCoI", "cfNdMG", "xxax", "WRlcSSkiW6rE", "m8k/D8odia", "W5tcKblcIce", "cKBcM8kHrq", "W6yTWP/dP8ok", "W7eJWPJdUmon", "W64yW5DRtW", "W77cKbi", "a2KRwSkWWO7dJLe9hwydfa", "hSkyWQ3dTfu", "qx4jDSoQ", "WQiyySoDW5e", "uhaoA8oQ", "oh1rW4CX", "WQ3cPLPMaa", "dgtdKCkZWOe"];
  return mn = function() {
    return i;
  }, mn();
}
function _e(i, n, t, e, A) {
  return IA(A - -33, n);
}
function MA(i, n, t, e, A) {
  return IA(e - 88, i);
}
function IA(i, n) {
  i = i - (1459 * -1 + -9 * -557 + -3394);
  const t = mn();
  let e = t[i];
  if (IA.kHGXuZ === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (let x = 0, E = s.length; x < E; x++)
        Q += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const g = function(c, I) {
      let s = [], Q = 0, x, E = "";
      c = A(c);
      let C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (let l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    IA.yTTgCk = g, IA.YmCxQt = {}, IA.kHGXuZ = !0;
  }
  const o = t[-4881 + 3347 * 1 + 1534], r = i + o, a = IA.YmCxQt[r];
  return a ? e = a : (IA.Eshpmr === void 0 && (IA.Eshpmr = !0), e = IA.yTTgCk(e, n), IA.YmCxQt[r] = e), e;
}
class xQ {
  #A;
  [MA("[X4N", 311, 430, 342) + MA("b2l6", 341, 309, 278)] = [];
  [Ae(-352, "1(*1", -245, -376, -317) + MA("qL*T", 350, 402, 356) + FA(-436, "&2iu", -422, -536, -509) + "r"];
  [MA("(Kx&", 369, 264, 310) + Ae(-272, "]7I&", -399, -404, -365) + "s"] = {};
  constructor(n, t = {}) {
    function e(a, g, c, I, s) {
      return MA(c, g - 399, c - 277, s - -642);
    }
    function A(a, g, c, I, s) {
      return _e(a - 233, g, c - 477, I - 96, s - -468);
    }
    function o(a, g, c, I, s) {
      return wA(s, a - 1511);
    }
    function r(a, g, c, I, s) {
      return MA(g, g - 12, c - 347, s - -221);
    }
    this[r(-49, "[X4N", 135, 70, 42) + r(-6, "fdmM", 20, -21, 69) + r(120, "Ayn6", 98, 37, 114) + "r"] = n, this.#A = QQ, this[A(-231, "1(*1", -321, -327, -291) + o(1072, 989, 1160, 1104, "*D^K") + e(-199, -354, "4Eg6", -193, -275)](t);
  }
  async [MA("NNpl", 408, 381, 399) + FA(-446, "nAPt", -452, -511, -515) + Ae(-500, "Ayn6", -494, -343, -406)]() {
    if (!Uo()) {
      if (A(-270, "Ayn6", -197, -310) === o("M47t", -65, 34, 30, -45)) return;
      {
        _0x102f80(_0x2b215f);
        const c = {};
        return c[A(-237, "4Eg6", -250, -160)] = _0x5375ec, c;
      }
    }
    const n = await this[a(-291, -277, "XnpA") + "st"](this.#A[A(-210, "[X4N", -179, -287)]), t = await this[o("$AIR", -108, -101, -70, -14) + "st"](this.#A[g("4Eg6", -553, -544, -578)]), e = {};
    e[a(-309, -289, "]7I&") + A(-254, "L@vg", -342, -207)] = n[a(-357, -423, "Ayn6") + "ge"];
    function A(c, I, s, Q, x) {
      return FA(c - 384, I, s - 475, Q - 441, c - 353);
    }
    function o(c, I, s, Q, x) {
      return _e(c - 175, c, s - 133, Q - 398, x - -219);
    }
    e[o("vWO9", -119, -51, -2, -58) + a(-277, -313, "%w(3")] = t[o("YI8v", -94, -80, -121, -63) + "ge"];
    const r = e;
    function a(c, I, s, Q, x) {
      return wA(s, c - 51);
    }
    function g(c, I, s, Q, x) {
      return wA(c, Q - -260);
    }
    this[o("]Hhn", -86, -7, -6, -56) + a(-301, -266, "&2iu")][g("XnpA", -804, -683, -719)](r);
  }
  async [FA(-611, "vWO9", -645, -576, -551) + "st"](n) {
    function t(p, m, k, D, y) {
      return MA(m, m - 54, k - 135, D - 478);
    }
    const { abortAfterMs: e, fallbackConstraints: A, maxTestDuration: o, primaryConstraints: r, runAmount: a, runDurationCutoffFactor: g } = n;
    function c(p, m, k, D, y) {
      return wA(D, y - 624);
    }
    let I = 9702 + -1 * -3755 + 13457 * -1;
    function s(p, m, k, D, y) {
      return wA(y, p - 1316);
    }
    function Q(p, m, k, D, y) {
      return wA(m, p - 973);
    }
    let x = a, E, C = this[c(216, 294, 259, "%w(3", 207) + c(180, 178, 156, "fdmM", 170) + s(859, 914, 766, 805, "(WRd") + "r"][c(204, 177, 102, "]Hhn", 195) + Q(481, "(WRd") + s(890, 796, 982, 904, "q$LV") + "s"](this[c(282, 223, 337, "4Eg6", 303) + c(256, 399, 400, "0noB", 308) + "s"], r);
    for (let p = -934 + -7 * -1171 + -269 * 27; p < a; p++)
      if (f(313, "O4]8", 233, 284) !== f(245, "q$LV", 281, 196)) {
        if (I > o * g) {
          if (Q(641, "L@vg") !== s(932, 882, 1013, 907, "HM5v")) return;
          x = p;
          break;
        }
        const m = await this[c(383, 301, 372, "rvvB", 299) + t(976, "nAPt", 847, 892) + c(230, 189, 152, "QL2d", 235) + t(891, "1(*1", 848, 887)](C, e);
        if (m[t(718, "0noB", 800, 794)]) {
          if (s(975, 1039, 1049, 953, "]Hhn") !== t(825, "JgPU", 789, 769)) ({ deviceId: _0x3013fe } = _0x2d2964);
          else if (this[t(855, "qL*T", 708, 798) + f(254, "Y[$P", 308, 332) + t(787, "6@lf", 724, 746) + "r"][s(1006, 924, 981, 1081, "[X4N") + t(699, "qPSD", 664, 759) + f(424, "So[A", 369, 353) + t(850, "6@lf", 908, 903) + "or"](m[c(221, 322, 250, "2BZ5", 260)]))
            if (f(361, "4Eg6", 386, 382) === Q(581, "Y[$P")) C = this[Q(531, "CmJ@") + c(217, 62, 162, "6)82", 144) + t(781, "L@vg", 699, 764) + "r"][t(700, "i1vc", 748, 782) + t(967, "]Hhn", 953, 882) + Q(629, "SJCg") + "s"](this[s(903, 870, 977, 974, "]7I&") + c(287, 251, 293, "qPSD", 210) + "s"], A), p--;
            else return;
        }
        m[c(158, 135, 196, "O4]8", 214) + Q(477, "Y[$P")] && (c(118, 298, 303, "XnpA", 209) === Q(488, "VGj6") ? { deviceId: E } = m : this[Q(479, "$AIR") + f(253, "6)82", 287, 287) + s(987, 1014, 1063, 918, "i1vc") + "r"][f(346, "CmJ@", 382, 258) + f(411, "SJCg", 412, 478) + s(912, 897, 873, 950, "4Eg6") + t(778, "fdmM", 796, 753) + "or"](_0x5fa4e8[c(276, 238, 302, "6@lf", 219)]) && (_0x21f4b1 = this[f(286, "H^Qg", 262, 274) + t(874, "SJCg", 908, 869) + t(893, "&2iu", 809, 865) + "r"][c(274, 320, 260, "baCn", 293) + s(846, 791, 889, 882, "QL2d") + t(819, "arPC", 761, 731) + "s"](this[c(169, 233, 199, "H^Qg", 142) + c(168, 244, 272, "vWO9", 257) + "s"], _0x3c6fe0), _0x283a1b--)), I += m[s(958, 940, 885, 921, "b2l6") + c(142, 112, 200, "[X4N", 192)] || 550 * -2 + -3419 + -4519 * -1;
      } else this[Q(600, "nAPt") + f(282, "X^eJ", 272, 199) + "s"] = _0x3f93e9;
    const l = Math[Q(659, "]7I&")](I / (x || 8106 + 1 * -8105));
    function f(p, m, k, D, y) {
      return FA(p - 473, m, k - 129, D - 7, p - 885);
    }
    this[Q(508, "&2iu") + Q(649, "rvvB") + "s"] = this[Q(549, "qL*T") + s(933, 926, 909, 871, "HM5v") + t(883, "i1vc", 873, 893) + "r"][c(175, 176, 288, "SZtd", 262) + f(277, "4Eg6", 196, 351) + f(319, "qPSD", 297, 385) + "s"](this[c(336, 216, 240, "Ayn6", 253) + f(387, "$AIR", 471, 398) + "s"], {}, E);
    const h = {};
    return h[f(308, "HM5v", 332, 256) + "ge"] = l, h;
  }
  async [wA("X^eJ", -421) + FA(-621, "Ayn6", -512, -627, -588) + wA("*D^K", -433) + FA(-475, "qPSD", -419, -465, -495)](n, t) {
    const e = Date[r("X^eJ", -410, -498, -493)]();
    function A(s, Q, x, E, C) {
      return wA(C, E - -69);
    }
    const o = new AbortController();
    function r(s, Q, x, E, C) {
      return FA(s - 474, s, x - 211, E - 155, E - 56);
    }
    function a(s, Q, x, E, C) {
      return Ae(s - 234, Q, x - 154, E - 494, C - -88);
    }
    function g(s, Q, x, E, C) {
      return _e(s - 436, C, x - 213, E - 383, E - -912);
    }
    function c(s, Q, x, E, C) {
      return wA(C, x - -186);
    }
    const I = setTimeout(() => {
      function s(C, l, f, h, p) {
        return r(C, l - 30, f - 218, h - 1273);
      }
      function Q(C, l, f, h, p) {
        return r(C, l - 449, f - 205, p - 22);
      }
      function x(C, l, f, h, p) {
        return r(C, l - 17, f - 164, h - -117);
      }
      function E(C, l, f, h, p) {
        return r(h, l - 400, f - 426, l - 861);
      }
      if (E(399, 349, 263, "b2l6") !== s("baCn", 730, 809, 787)) o[x("2BZ5", -655, -635, -572)]();
      else {
        const C = {};
        return C[x("So[A", -577, -516, -549) + x("Iv[U", -689, -512, -598)] = this[E(228, 305, 321, "]Hhn") + s("2BZ5", 696, 787, 703)], C[Q("[X4N", -523, -553, -535, -518) + x("VGj6", -583, -611, -578) + "e"] = !1, C;
      }
    }, t);
    try {
      if (r("JgPU", -629, -533, -573, -651) !== g(-662, -735, -672, -644, "X^eJ")) {
        const { deviceId: s, mediaStream: Q } = await this[r("Nubz", -653, -505, -589, -498) + c(-505, -588, -539, -526, "SJCg") + a(-393, "2BZ5", -415, -346, -382) + "r"][g(-703, -641, -657, -695, "nAPt") + r("N2aD", -425, -371, -465, -398) + a(-401, "So[A", -458, -305, -373) + "m"](n, o[A(-533, -473, -543, -547, "qPSD") + "l"]), x = Date[a(-495, "H^Qg", -466, -554, -521)]() - e;
        ht(Q), clearTimeout(I);
        const E = {};
        return E[a(-385, "[X4N", -358, -290, -374) + r("(WRd", -619, -663, -583, -544)] = x, E[g(-630, -653, -561, -602, "NNpl") + a(-484, "$AIR", -374, -404, -429)] = s, E;
      } else _0x27d684 = this[r("%w(3", -428, -419, -513, -547) + g(-647, -584, -627, -663, "vWO9") + c(-556, -588, -564, -489, "arPC") + "r"][g(-691, -629, -570, -622, "2BZ5") + g(-762, -776, -687, -687, "YI8v") + r("NNpl", -377, -369, -433, -461) + "s"](this[g(-695, -828, -716, -772, "0noB") + r("SJCg", -380, -520, -440, -357) + "s"], _0x1b36af), _0x4ac718--;
    } catch (s) {
      if (A(-471, -404, -483, -418, "q$LV") !== g(-819, -790, -734, -737, "SJCg")) {
        clearTimeout(I);
        const Q = {};
        return Q[g(-752, -686, -744, -711, "]7I&")] = s, Q;
      } else _0x80ad91[g(-551, -589, -690, -628, "Y[$P")]();
    }
  }
  [Ae(-393, "&2iu", -354, -275, -306) + Ae(-291, "N2aD", -341, -261, -308) + MA("CmJ@", 385, 278, 349)](n) {
    function t(A, o, r, a, g) {
      return _e(A - 475, g, r - 314, a - 349, r - 570);
    }
    function e(A, o, r, a, g) {
      return Ae(A - 154, a, r - 216, a - 453, A - 143);
    }
    Object[e(-218, -266, -225, "(Kx&") + "es"](n)[t(918, 846, 827, 736, "fdmM") + "ch"](([A, o]) => {
      const r = A;
      this.#A[r] && (this.#A[r] = { ...this.#A[r], ...o });
    });
  }
  [wA("arPC", -327) + _e(258, "%w(3", 136, 165, 211) + MA("i1vc", 314, 222, 280)](n) {
    function t(A, o, r, a, g) {
      return wA(o, r - 1008);
    }
    function e(A, o, r, a, g) {
      return Ae(A - 232, r, r - 315, a - 56, g - 513);
    }
    this[e(116, 0, "X^eJ", 45, 86) + t(576, "H^Qg", 524) + "s"] = n;
  }
  async [FA(-551, "M47t", -589, -610, -571) + FA(-562, "nAPt", -420, -521, -469) + MA("1(*1", 457, 350, 364) + FA(-508, "PKIO", -540, -540, -552) + MA("qPSD", 359, 404, 421)](n) {
    if (this[g(-39, "PKIO", -128, -96, -71) + g(57, "nAPt", 95, -34, 15)][A(44, 41, 112, -39, "SJCg") + "h"] === 0) return;
    function t(c, I, s, Q, x) {
      return MA(Q, I - 35, s - 392, I - -364);
    }
    function e(c, I, s, Q, x) {
      return Ae(c - 384, I, s - 269, Q - 453, c - 691);
    }
    function A(c, I, s, Q, x) {
      return Ae(c - 137, x, s - 329, Q - 244, c - 302);
    }
    const o = this[t(-140, -51, -113, "NNpl") + t(-89, -13, 14, "H^Qg")][t(-8, -65, -118, "Nubz") + "h"] - (-955 + -7 * 494 + 4414);
    function r(c, I, s, Q, x) {
      return FA(c - 441, x, s - 266, Q - 37, Q - 1574);
    }
    const a = await BQ();
    function g(c, I, s, Q, x) {
      return FA(c - 249, I, s - 336, Q - 467, x - 482);
    }
    this[r(1002, 1058, 1044, 1036, "&2iu") + e(438, "nAPt", 399, 400)][o] = { ...this[t(116, 29, -21, "CmJ@") + r(1085, 1035, 975, 1015, "$AIR")][o], optSetting: a };
  }
  [Ae(-333, "(Kx&", -439, -440, -379) + wA("i1vc", -334) + wA("]Hhn", -452) + FA(-607, "$AIR", -563, -603, -528) + _e(119, "&2iu", 210, 264, 180)]() {
    const n = {};
    function t(o, r, a, g, c) {
      return wA(a, c - 464);
    }
    function e(o, r, a, g, c) {
      return MA(r, r - 392, a - 256, a - 160);
    }
    n[t(-3, 113, "SZtd", 19, 68) + A(-150, -109, -140, -84, "(Kx&")] = this[A(-115, -139, -161, -101, "H^Qg") + t(-18, -26, "X^eJ", 67, -26)];
    function A(o, r, a, g, c) {
      return _e(o - 260, c, a - 173, g - 138, a - -402);
    }
    return n[t(88, 208, "2BZ5", 230, 153) + e(525, "So[A", 554) + "e"] = !1, n;
  }
}
function VA(i, n, t, e, A) {
  return K(t - -13, n);
}
(function(i, n) {
  function t(a, g, c, I, s) {
    return K(a - 185, c);
  }
  function e(a, g, c, I, s) {
    return K(I - 173, s);
  }
  function A(a, g, c, I, s) {
    return K(s - 225, I);
  }
  function o(a, g, c, I, s) {
    return K(s - -182, g);
  }
  const r = i();
  for (; ; )
    try {
      if (-parseInt(t(688, 640, "2DXY", 728, 665)) / 1 + parseInt(t(654, 649, "@69e", 754, 661)) / 2 * (-parseInt(A(762, 742, 710, "cahR", 801)) / 3) + parseInt(o(266, "PglO", 278, 261, 320)) / 4 * (parseInt(A(722, 697, 663, "[D3(", 740)) / 5) + -parseInt(A(886, 759, 830, "UgoB", 824)) / 6 * (-parseInt(e(650, 706, 776, 714, "@69e")) / 7) + parseInt(t(727, 742, "BkTP", 755, 797)) / 8 + parseInt(e(753, 746, 629, 660, "9dEq")) / 9 + -parseInt(A(705, 714, 694, "#bqd", 789)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(yn, 26777 * 13 + 153027 + -3091 * 77);
function PA(i, n, t, e, A) {
  return K(e - 679, t);
}
function yo(i, n, t, e, A) {
  return K(e - 495, i);
}
function Ge(i, n, t, e, A) {
  return K(e - 563, n);
}
function yn() {
  const i = ["WOBcKehcKW4", "WQmeW7Dgha", "W7ZcUSor", "W7GEW7xcGKq", "i8ogWOmiWPVdJ00qWP7cR8oc", "mGGk", "tufJ", "EHnedCoI", "cmktvSohhW", "h8koW5bYaa", "W47cRSkfW6LN", "AZxdTfWw", "WPJdSW3cNh4", "qttdQers", "WOVdRHVcKgq", "W4RcSmkvWO8N", "wComW5NdLG", "xN9djfe", "W57cKmkRaJm", "trpdPq", "WRbtWOdcSZO", "W7hdVJJcOLq", "uH7dNXuh", "WRdcQwBdUbq0FSo+WOSHWRe", "iCkjtSo8kW", "WPWVeW", "WOyNdSoXmG", "fHPQdJXaWPWg", "W68pW78", "f2FdMSonAa", "WOn7BrK0", "aCkhvSo1pq", "WRHrWR3dNsG", "W6KAW6JdQaZdPs5BW6K", "WPubqfnx", "WOldNLFcHa", "W7/cKmkEW7vH", "W5nzs0DkWRddNdG", "W7KQbKhdIa", "W5iaWQyhoG", "y8oAW4VdUNy", "W79qWQmyrCktWPZdNg0ZW5yIhG", "iCkYeSo2W4K", "e8o3A8kWvW", "W7/cGCk0ccq", "W50SWOCwBW", "FcXVaSoL", "lcZdKqhdQG", "WPldOG3cShq", "e23dKCogDa", "W7VcSmkwW78", "WPhdPaVcJq", "uNHip0q", "heuBWO3cJG", "W6CKcgRdJG", "W5S8bSkQhW", "W5BcGGddG0Gzh8kAh8kgW5u", "ALDMa8o9ospdTmkOsmop", "WOJdTrhcLxu", "tqZdRf8H", "W6ZcRSkcWOe7", "W6/cMSorW6y3", "W5SHW5zSbW", "ahZdLmoaBW", "WQ1ozCoReG", "E2HRWOpdMq", "W6ulW73cIq", "dmkfWOeDoG", "Fe1Q", "rmkoBvTMqSo3uh4", "WPqRhmo9pG", "WQRdLvBcNXS", "yI7cH3Wp", "h8ouoezs", "W70dW7tcIu4", "WRddOSoJvsu", "rIJcGe4z", "DWWBW7jr", "iJzSW5zCWOpcUCoBkSkcla", "W50WW5jTfG", "sY7dHvue", "W6iRWOOhia", "ySkBW4i", "W5KCbmkAaG", "v8oaW5xdGvO", "WO18CaGI", "cSkCF8owgG", "dmohWOexiG", "qvNdNmo7vW", "D8krW4rUW4G", "emkjsq", "Cr0FW7na", "W4BcVSkAWOSQ", "bvldHCoMfa", "W6OdW77cIuu", "WRxcRMpdTbvDB8oOWRqDWPmP", "W5bDgGqvW6xcIJxdVIxcUJfo", "tqJcIe0", "WQ8fW7DQcW", "W4xcMXu", "r8o9W57dO8oxBhddKu/cQ8kdWRBdGG", "wNnygKW", "bSkfW55Yda", "CdbdamkG", "W7JcQmkoW6PW", "WQTpWRNdHs8", "exBdLmokDq", "W5SWfa", "WOb+zIO5", "qqJcLfWl", "eCkuwmoFlq", "W64ccW", "WPtdQCkTlCoz", "kdRdLmk7WQ8", "fdJdKmk7WRG", "DmkrW4zuW44", "d1qlWPRcGa", "W5xdSJhcQe0", "ltC7W6dcHCoiW5tcUmogW4hcOtNdUW", "W6tcJ8k5", "W4eYWRGlkW", "tr/dT1uC", "rSodW4/dGeS", "DmoLvSkQWPHytfqIW77cHW", "WPu2hSoMpa", "WPVdMCk2h8oN", "g8kPWPZcS8kk", "WQC5W7XMhG", "WOfyvmobca", "j8oXESkOwW", "W6KsWR3dJZldMc1v", "WQ0tW7zocq", "qColW57dH0y", "WRhdMmopFtG", "k2uUhSoS", "gJpdQrVdUG", "W6FdVIpcPee", "wXxdVsih", "t3fnl2q", "emkOBSounW", "imkscmo6W4C", "W4mRWOOwjW", "EZtdGsmG", "mmkAW59jWO0", "z2eUWPea", "jSk2cCo6W5G", "WROTW7PCcq", "aCoMBSkNsW", "W4/cH8kJccS", "vWldTYyq", "W4WnW58", "W5ZcRmkMWOCT", "fCkGWOVcTCkb", "muWvW7bazwpdKG", "W5OaaSkecW", "WPtdHeVcMH8", "W6ddTZdcReW", "gCkoWPWvjq", "W7TnWRFdIhW", "WOBdN8kKfCoX", "WRvcWRxdMq", "ArpdOgqx", "WRXgWQZdRZK", "ahy9bCoS", "W4NcM8kY", "WQHxWQhdKdK", "FbDo", "fv7dNCoOba", "sZVdRfua", "W4VcS8kcWPOO", "W5yHnKLLpSkvW5dcMxqMWPWl", "WQOeW6vghG", "W5pcNrv2aq", "W5JcIHLWhq", "DMP9WQhdGG", "hCkzW45YbW", "W5xcPHq", "mdi2BSkJ", "vq7cGK0f", "gmodlG", "u8omW5/dGq", "fmkjW4X+aa", "W4NcUSkGcZy", "lHmdz8kG", "WPtdSqNcMNK", "AtfdgSo0", "W6ldUtRcV1y", "pHqLwmk0", "b8oQs8kHsq", "W64sW7hcJ1u", "EmkrW5LAW4u", "pc7dIG3dQG", "W4q0jCkJgG", "W67cSSksW7q", "uZhcG8kAlmk5yrr9xCkAW7e", "W4JcKmkP", "WOFdS8oSucm", "W5mNn0XHo8krW7hcKLieWPON", "WR4nW7jwpa", "oIZdMSk7WQ8", "lgRdMCokDq", "W5hdJWnYaq", "EY7dS1ut", "WQ/cSSkuWRRcGW", "teTKbsi"];
  return yn = function() {
    return i;
  }, yn();
}
function ee(i, n, t, e, A) {
  return K(A - 489, n);
}
function K(i, n) {
  i = i - (-5062 + 1103 * 5);
  const t = yn();
  let e = t[i];
  if (K.GiwadV === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (let x = 0, E = s.length; x < E; x++)
        Q += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const g = function(c, I) {
      let s = [], Q = 0, x, E = "";
      c = A(c);
      let C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (let l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    K.yirRqc = g, K.UVFfeE = {}, K.GiwadV = !0;
  }
  const o = t[0], r = i + o, a = K.UVFfeE[r];
  return a ? e = a : (K.lMMejR === void 0 && (K.lMMejR = !0), e = K.yirRqc(e, n), K.UVFfeE[r] = e), e;
}
class EQ {
  [VA(453, "6i%B", 486) + VA(470, "s$&A", 513) + ee(1030, "[D3(", 1032, 941, 1008)](n) {
    function t(c, I, s, Q, x) {
      return VA(c - 358, Q, c - 406);
    }
    const e = Er(n), A = e?.[t(1001, 907, 1047, "cahR") + r("UgoB", 1319, 1380, 1383) + "s"]();
    function o(c, I, s, Q, x) {
      return ee(c - 329, x, s - 364, Q - 88, Q - -1216);
    }
    function r(c, I, s, Q, x) {
      return ee(c - 464, c, s - 60, Q - 93, s - 368);
    }
    function a(c, I, s, Q, x) {
      return VA(c - 356, s, x - 682);
    }
    if (!A?.[r("blZa", 1592, 1507, 1596) + "t"] || !A?.[r("Ez1$", 1529, 1435, 1398)] || !A?.[o(-127, -223, -51, -147, "J9JV") + g(1131, 1044, 1102, 1050, "cTTE")])
      if (g(1126, 1120, 1034, 1002, "L6Bb") === t(993, 991, 1007, "cTTE")) _0x5240bb[r("muMb", 1379, 1325, 1259) + r("&auY", 1434, 1385, 1296)](_0x3220a3);
      else throw new w(a(1137, 1136, "s$&A", 1051, 1126) + g(1144, 1133, 1153, 1119, "cahR") + a(1142, 1094, "L6Bb", 1248, 1160) + a(1305, 1319, "K@fI", 1167, 1260) + a(1237, 1375, "m8UO", 1337, 1316) + a(1239, 1231, "BkTP", 1192, 1149));
    if (e)
      if (r("cTTE", 1590, 1495, 1472) !== r("[jx^", 1509, 1506, 1594)) _0x1bec9c[a(1276, 1267, "Ez1$", 1223, 1237)](), _0x2e77b2(_0x3e0df6), _0x36a2fa[r("UgoB", 1315, 1394, 1466) + "e"]();
      else return A[t(859, 804, 770, "Sqzq") + a(1151, 1249, "#bqd", 1092, 1183)];
    function g(c, I, s, Q, x) {
      return Ge(c - 374, x, s - 0, s - -14);
    }
  }
  [Ge(1139, "m8UO", 1276, 1181) + PA(1367, 1311, "I*ex", 1307) + PA(1185, 1116, "FYR!", 1137) + PA(1153, 1169, "L6Bb", 1206)]() {
    function n(a, g, c, I, s) {
      return ee(a - 335, a, c - 139, I - 236, c - -592);
    }
    const t = document[r("cahR", 1315) + r("K@fI", 1423) + r("I*ex", 1447)](r("a6kH", 1385));
    t[o(950, "2DXY", 1076, 1071, 1033) + o(885, "1nOw", 787, 921, 871)] = !0, t[e(622, 680, 615, 596, "a6kH")] = !0, t[n("cahR", 539, 448, 382) + n("vEKE", 524, 543, 630) + "e"] = !0, t[n("ioon", 319, 418, 344)][n("FYR!", 303, 357, 391) + n("blZa", 458, 554, 640)] = n("@*)y", 332, 410, 356) + n("m8UO", 445, 442, 368), t[e(450, 407, 481, 479, "FYR!")][A(99, 84, 98, "FYR!", 179) + "ty"] = "0";
    function e(a, g, c, I, s) {
      return VA(a - 42, s, I - -12);
    }
    t[n("PqQe", 531, 447, 473)][o(992, "TTxj", 1073, 1008, 1031) + o(959, "TTxj", 911, 989, 892) + n("[D3(", 498, 522, 578)] = r("!ZW^", 1380);
    function A(a, g, c, I, s) {
      return VA(a - 122, I, s - -438);
    }
    t[e(497, 685, 672, 586, "cahR")][r("CezF", 1326)] = n("UgoB", 542, 553, 605);
    function o(a, g, c, I, s) {
      return ee(a - 227, g, c - 3, I - 229, s - -89);
    }
    t[o(919, "PglO", 905, 898, 1001)][o(1119, "&auY", 1111, 961, 1036) + "t"] = o(957, "[jx^", 1067, 946, 965);
    function r(a, g, c, I, s) {
      return PA(a - 27, g - 14, a, g - 158);
    }
    return t;
  }
  async [VA(530, "2N66", 571) + Ge(1196, "Qt)1", 1111, 1178) + VA(445, "%Q$r", 541) + Ge(1231, "I*ex", 1158, 1204)](n, t, e) {
    return new Promise((A, o) => {
      function r(s, Q, x, E, C) {
        return K(s - -918, x);
      }
      function a(s, Q, x, E, C) {
        return K(E - 884, C);
      }
      function g(s, Q, x, E, C) {
        return K(Q - -982, C);
      }
      function c(s, Q, x, E, C) {
        return K(C - 454, x);
      }
      function I(s, Q, x, E, C) {
        return K(x - 147, C);
      }
      if (r(-400, -357, "!ZW^") !== a(1401, 1592, 1548, 1491, "s$&A")) this[a(1275, 1390, 1285, 1345, "Qt)1") + c(1009, 946, "L6Bb", 1067, 1020) + "eo"](_0x487faa, _0x3a2179);
      else {
        const s = () => {
          function E(h, p, m, k, D) {
            return r(k - 986, p - 102, D);
          }
          function C(h, p, m, k, D) {
            return I(h - 156, p - 92, h - 828, k - 221, D);
          }
          function l(h, p, m, k, D) {
            return r(k - 593, p - 12, h);
          }
          function f(h, p, m, k, D) {
            return c(h - 393, p - 185, m, k - 125, D - -1264);
          }
          E(540, 584, 537, 522, "jPC0") !== l("XUst", 286, 139, 233) ? (_0x3d2248?.[E(549, 562, 635, 576, "Rq0o") + f(-211, -206, "s$&A", -153, -243) + C(1457, 1465, 1454, 1493, "PqQe") + f(-121, -126, "PqQe", -209, -171)](f(-121, -222, "@69e", -85, -178), _0x54fc0b), _0x29d110(_0x45b2a8), _0x178b34(_0x36f7af)) : this[C(1573, 1669, 1471, 1553, "ZlNP") + E(527, 551, 514, 561, "zSBb") + "eo"](n, t);
        }, Q = {};
        Q[c(936, 956, "Ez1$", 943, 916)] = !0, e?.[c(1067, 933, "9dEq", 1044, 998) + a(1497, 1416, 1497, 1431, "2N66") + g(-312, -328, -393, -272, "CaW3") + "r"](g(-507, -452, -389, -521, "Ez1$"), s, Q), (async () => {
          function E(p, m, k, D, y) {
            return r(y - 542, m - 50, D);
          }
          function C(p, m, k, D, y) {
            return g(p - 480, m - 838, k - 317, D - 298, y);
          }
          function l(p, m, k, D, y) {
            return c(p - 203, m - 137, k, D - 100, p - -215);
          }
          function f(p, m, k, D, y) {
            return g(p - 43, D - 426, k - 196, D - 263, m);
          }
          function h(p, m, k, D, y) {
            return a(p - 481, m - 291, k - 10, y - -476, D);
          }
          if (f(70, "ioon", -66, 23) !== E(212, 298, 294, "jPC0", 209)) {
            const p = {};
            p[l(832, 888, "CezF", 759)] = _0x4a5cee, _0x36d6ce[f(15, "1nOw", -140, -40) + l(851, 784, "TTxj", 901)] = p;
          } else try {
            if (f(-46, "muMb", 106, 32, 96) !== h(985, 1034, 1060, "2DXY", 1031)) await n[E(141, 94, 150, "PqQe", 120)](), e?.[l(703, 671, "I*ex", 674, 662) + f(81, "XUst", 97, 15, 112) + l(831, 848, "9dEq", 820, 845) + C(264, 337, 309, 328, "PglO")](C(603, 501, 461, 505, "*AhE"), s), A();
            else throw new _0x446685(l(814, 736, "CezF", 838, 719) + C(482, 445, 387, 451, "&auY") + E(243, 218, 99, "TTxj", 173) + f(16, "s$&A", 108, 58, 146) + l(772, 809, "@*)y", 721, 711) + E(149, 157, 132, "@*)y", 227));
          } catch (p) {
            if (l(844, 843, "XUst", 883) === E(40, 36, 30, "TTxj", 77)) return _0x20841a[E(233, 174, 156, "a6kH", 251) + f(14, "Rq0o", -49, 40)];
            e?.[f(-168, "@69e", -158, -89) + f(-67, "cTTE", -118, -55) + h(893, 952, 878, "$WHu", 918) + C(536, 482, 423, 580, "Ez1$")](l(702, 694, "2N66", 771), s), ht(t), o(p);
          }
        })();
      }
    });
  }
  async [yo("*AhE", 960, 961, 1054) + PA(1174, 1175, "PglO", 1196) + VA(417, "I*ex", 477) + "m"](n, t) {
    function e(Q, x, E, C, l) {
      return PA(Q - 47, x - 145, C, Q - -1496);
    }
    function A(Q, x, E, C, l) {
      return ee(Q - 410, Q, E - 318, C - 135, l - -1311);
    }
    function o(Q, x, E, C, l) {
      return PA(Q - 122, x - 421, l, Q - -1200);
    }
    const r = this[s(75, "9dEq", 46, 35, 127) + s(28, "!ZW^", 33, 87, 72) + c(-187, -116, -123, "I*ex") + s(165, "@69e", 55, 145, 113)](), a = await navigator[A("9dEq", -173, -143, -82, -170) + c(10, -61, -75, "ioon") + "es"][s(-8, "cTTE", 147, 40, 79) + A("zSBb", -272, -98, -227, -185) + "ia"](n), g = this[e(-247, -275, -250, "1nOw") + c(-39, -93, -83, "CezF") + e(-323, -351, -409, "FYR!")](a);
    r[c(-217, -171, -161, "jPC0") + A("FYR!", -263, -416, -337, -325)] = a;
    try {
      if (s(16, "s$&A", 145, 103, 55) === c(-91, -73, -143, "$WHu", -154)) return _0x49390e instanceof _0x5049fe && _0x4c79aa[c(-136, -91, -111, "cahR", -23)] === A("*AhE", -303, -193, -305, -262) + A("%Q$r", -377, -356, -308, -291) + o(19, 119, 10, -55, "CaW3") + s(123, "Qt)1", 9, 74, 56);
      await this[s(94, "9dEq", 269, 264, 194) + e(-262, -338, -264, "!ZW^", -260) + s(128, "#bqd", -26, 117, 61) + c(-268, -234, -243, "CaW3", -174)](r, a, t);
    } catch (Q) {
      if (A("2DXY", -126, -115, -133, -193) === s(46, "Ez1$", 27, 95, 36)) {
        const x = _0x3c48d5(_0x17a77d), E = x?.[s(155, "&auY", 109, 125, 85) + c(-116, -123, -192, "Rq0o") + "s"]();
        if (!E?.[c(-186, -59, -98, "m8UO") + "t"] || !E?.[o(66, -32, -19, 30, "L6Bb")] || !E?.[A("@69e", -226, -175, -247, -240) + e(-164, -243, -135, "rb!G")]) throw new _0x4de7da(e(-347, -287, -295, "jPC0") + c(-255, -108, -183, "hXmj") + s(-61, "s$&A", 74, 35, 9) + c(-157, -318, -240, "jPC0") + c(-82, -7, -66, "PglO") + e(-204, -245, -215, "hXmj"));
        return x ? E[A("K@fI", -344, -249, -360, -334) + s(133, "FT%x", 35, 36, 107)] : void 0;
      } else w[s(130, "FT%x", 137, 5, 50) + o(15, -7, 96, 111, "jPC0")](Q);
    }
    function c(Q, x, E, C, l) {
      return ee(Q - 166, C, E - 56, C - 470, E - -1206);
    }
    const I = {};
    I[s(70, "2N66", 127, 135, 48) + c(-67, -97, -69, "s$&A") + "m"] = a;
    function s(Q, x, E, C, l) {
      return ee(Q - 94, x, E - 19, C - 381, l - -939);
    }
    return I[c(-68, -62, -100, "9dEq") + e(-205, -181, -112, "TTxj")] = g, I;
  }
  [Ge(1176, "@69e", 1181, 1165) + VA(592, "Qt)1", 584) + "eo"](n, t) {
    n[e(721, 763, "ohkZ")]();
    function e(A, o, r, a, g) {
      return Ge(A - 48, r, r - 426, o - -390);
    }
    ht(t), n[e(586, 681, "Rq0o") + "e"]();
  }
  [yo("muMb", 1110, 1050, 1090) + PA(1115, 1223, "vEKE", 1154) + PA(1166, 1221, "vEKE", 1231) + PA(1360, 1274, "muMb", 1262) + "or"](n) {
    function t(r, a, g, c, I) {
      return yo(c, a - 394, g - 401, r - 385);
    }
    function e(r, a, g, c, I) {
      return ee(r - 373, g, g - 436, c - 331, a - -1034);
    }
    function A(r, a, g, c, I) {
      return PA(r - 175, a - 27, g, a - -1235);
    }
    function o(r, a, g, c, I) {
      return yo(a, a - 79, g - 188, r - -301);
    }
    return n instanceof DOMException && n[t(1392, 1478, 1295, "CaW3")] === t(1489, 1416, 1451, "J9JV") + A(-26, 64, "#bqd") + o(670, "%Q$r", 656) + e(-77, -89, "PqQe", -9);
  }
  [Ge(1214, "ZlNP", 1092, 1135) + ee(980, "zSBb", 1086, 980, 1070) + ee(892, "FT%x", 969, 972, 973) + "s"](n = {}, t = {}, e) {
    const A = { ...n };
    function o(x, E, C, l, f) {
      return VA(x - 186, l, E - 539);
    }
    function r(x, E, C, l, f) {
      return PA(x - 468, E - 372, E, C - -680);
    }
    const a = A;
    function g(x, E, C, l, f) {
      return VA(x - 493, l, E - 747);
    }
    const c = { ...typeof a[r(607, "rb!G", 506)] == r(538, "Qt)1", 537) + "t" ? a[r(450, "1nOw", 471)] : {}, ...t };
    function I(x, E, C, l, f) {
      return PA(x - 18, E - 428, f, x - -1667);
    }
    const s = c;
    function Q(x, E, C, l, f) {
      return Ge(x - 413, x, C - 151, f - -441);
    }
    if (e)
      if (I(-456, -526, -544, -384, "jPC0") !== Q("9dEq", 614, 685, 640, 695)) {
        const x = {};
        x[I(-353, -310, -330, -289, "CaW3")] = e, s[o(1097, 1065, 983, "hXmj") + I(-366, -310, -419, -404, "m8UO")] = x;
      } else {
        const x = { ..._0x4e8daa }, E = x, C = { ...typeof E[r(505, "vEKE", 494)] == I(-533, -523, -471, -571, "a6kH") + "t" ? E[I(-364, -322, -379, -273, "!ZW^")] : {}, ..._0x2e25fb }, l = C;
        if (_0x233015) {
          const f = {};
          f[Q("vEKE", 698, 622, 588, 631)] = _0x2b0f9f, l[g(1314, 1295, 1349, "&auY") + r(544, "s$&A", 464)] = f;
        }
        return E[g(1319, 1296, 1213, "6i%B")] = l, E;
      }
    return a[Q("CaW3", 732, 652, 639, 642)] = s, a;
  }
}
const lr = {};
lr.FRONT = "user", lr.BACK = "environment";
const aa = lr;
function ga() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function Cg() {
  return /Android/i.test(navigator.userAgent);
}
function no() {
  return /Firefox/i.test(navigator.userAgent);
}
function Os() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const dQ = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
};
function Js() {
  return navigator.userAgent;
}
function lQ() {
  return navigator.userAgentData?.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
const Ho = {};
Ho.width = 1920, Ho.height = 1080, Ho.facingMode = aa.FRONT;
const uQ = Ho;
class Us {
  #A;
  #e = [];
  #t = null;
  constructor({ defaultVideoConstrains: n = uQ, minCameraShorterSide: t = dC } = {}) {
    const e = {};
    e.defaultVideoConstrains = n, e.minCameraShorterSide = t, this.#A = e;
  }
  get availableCameraProperties() {
    return this.#e;
  }
  get mediaStream() {
    return this.#t;
  }
  get videoTrack() {
    if (this.#t) return Er(this.#t);
  }
  get isCameraActive() {
    return !!this.#t?.active;
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    ht(t);
  }
  async open(n = {}) {
    Cg() && no() && await $i(-1626 + -1 * -5581 + 701 * -5), this.#t = await navigator.mediaDevices.getUserMedia(n), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new w("Video track must be initialized to get next device");
    const n = await di(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + 1] ?? n[-14851 + 1 * 14851]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new w("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    this.#t && (ht(this.#t), this.#t = null);
  }
  async getProperties() {
    const n = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = n;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = this.#e, A;
  }
  getSettings() {
    if (!this.videoTrack) throw new w("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const n = this.getSettings();
    if (!n.width) throw new w("Video width is undefined");
    if (!n.height) throw new w("Video height is undefined");
    const t = {};
    return t.width = n.width, t.height = n.height, t;
  }
  async getDeviceName() {
    const n = this.getSettings();
    return (await ys()).find((A) => A.deviceId === n.deviceId)?.label;
  }
  async getBestCameraInfo(n) {
    if (n !== aa.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (ga())
      return (await di()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const n = await di();
    for (const t of n) {
      Cg() && no() && await $i(1066 * -3 + 1916 + -866 * -2);
      try {
        const e = {};
        e.exact = t.deviceId;
        const A = {};
        A.deviceId = e, A.width = 480;
        const o = {};
        o.video = A;
        const r = await navigator.mediaDevices.getUserMedia(o), a = Er(r);
        if (!a) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const g = a.getSettings(), c = { ...g };
        c.deviceName = a.label;
        const I = {};
        I.cameraProperties = c;
        const s = I;
        this.#e.push(s), ht(r);
      } catch (e) {
        e instanceof Error && w.logError(e);
      }
    }
  }
  getConstraints(n, t) {
    const e = { ...this.#A.defaultVideoConstrains, ...n };
    e.deviceId = t ? { exact: t } : void 0;
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    const n = this.videoTrack?.getSettings();
    if (!n?.height || !n?.width)
      throw this.close(), new w("Could not init camera settings");
    if (typeof this.#A.minCameraShorterSide != "number") return;
    if (Math.min(n?.width, n?.height) < this.#A.minCameraShorterSide)
      throw this.close(), new w("Could not init video because of low camera resolution: " + n.width + "x" + n.height + ".");
  }
}
class fQ {
  #A = !1;
  videoHandler;
  cameraHandler;
  videoRecorder;
  performanceCheckup;
  cameraEvaluator;
  constructor({ cameraEvaluator: n, cameraHandler: t, performanceCheckup: e, videoHandler: A, videoRecorder: o }) {
    this.videoHandler = A, this.cameraHandler = t, this.performanceCheckup = e, this.cameraEvaluator = n, this.videoRecorder = o;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    this.#A || (this.#A = !0, await Us.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), sQ() && await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t?.deviceId);
    !no() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
  }
  takePhoto() {
    if (!this.cameraHandler.videoTrack) throw new w("Video track must be initialized to take photo");
    const n = this.cameraHandler.videoTrack?.getSettings();
    if (!n?.width) throw new w("Cant take photo - video width is undefined");
    if (!n?.height) throw new w("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = n.width, t.height = n.height;
    const e = t.getContext("2d");
    if (!e) throw new w("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, -566 * 3 + -9396 * -1 + -2 * 3849, 0), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop(), this.videoRecorder?.stopRecording(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(n) {
    await this.cameraHandler.open(n), dQ() && (this.cameraHandler.close(), await this.cameraHandler.open(n)), await this.mountVideoStream(), this.videoRecorder?.startRecording();
  }
  async switchCamera() {
    const n = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(n);
    this.pauseStream(), !no() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
    if (!this.cameraHandler.mediaStream) throw new w("Media Stream must be initialized to stream");
    await this.videoHandler.play(this.cameraHandler.mediaStream);
  }
}
class hQ {
  #A;
  constructor(n) {
    this.#A = n;
  }
  get videoElement() {
    return this.#A;
  }
  async play(n) {
    this.#A.srcObject = n, await this.#A.play();
  }
  stop() {
    this.#A.srcObject = null;
  }
  hasSrcObject() {
    return !!this.#A.srcObject;
  }
}
(function(i, n) {
  function t(g, c, I, s, Q) {
    return CA(I - -310, g);
  }
  var e = i();
  function A(g, c, I, s, Q) {
    return CA(I - -753, c);
  }
  function o(g, c, I, s, Q) {
    return CA(g - -297, s);
  }
  function r(g, c, I, s, Q) {
    return CA(s - 882, g);
  }
  for (; ; )
    try {
      var a = -parseInt(o(41, 9, 84, "qX%H", 41)) / 1 * (parseInt(r("qX%H", 1290, 1265, 1312, 1331)) / 2) + -parseInt(r("ZFAv", 1353, 1258, 1289, 1245)) / 3 * (parseInt(o(32, 60, 32, "fZ^4", 8)) / 4) + parseInt(r("%zjW", 1235, 1331, 1267, 1291)) / 5 * (-parseInt(A(-442, "bafa", -449, -403, -445)) / 6) + -parseInt(r("5A!h", 1167, 1183, 1182, 1116)) / 7 * (-parseInt(r("fu6b", 1276, 1191, 1219, 1277)) / 8) + -parseInt(t("MB7a", 65, 102, 97, 115)) / 9 * (parseInt(o(118, 182, 53, "#LfH", 92)) / 10) + -parseInt(o(90, 87, 25, "AoX5", 108)) / 11 + -parseInt(o(33, 45, 50, "5A!h", 85)) / 12 * (-parseInt(o(95, 61, 142, "wW&T", 49)) / 13);
      if (a === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(wn, -5 * -105839 + -1755681 + 2222701);
function hA(i, n, t, e, A) {
  return CA(t - -466, i);
}
function wn() {
  var i = ["W5ZdTrxdPq", "W60LhmkUW4yTW5Kh", "ugvSWPNdOw0i", "W6yaruFcOG", "WQpdLmkjWO7cIG", "bg9HWQFdMq", "W6ZdVmoL", "pMqY", "dCkenvLe", "WOddO8oIesW", "WPyejSkxlq", "bCkgnvD1", "W4ZdTqq", "WRabW5Drqa", "jh0O", "WORdMmkZ", "WQH6hSkkW4O", "W7ldT8oOhCkD", "W6pdPxHNW78", "W5ZdTN9nW6e", "WPSxlSkCmW", "smolW6GeWPG", "W7tdIXxdUSoT", "WPpdR8o5nb0", "WR1/gmkEW78", "j8kcou5/", "WOW4WQRdNeC", "W5vFcKO2", "W4SljW", "kxPyquW", "c1vCy1K", "W60stW", "W49vCmkEfCoQWRBcLmop", "WPLiledcUW", "W4FcJSo0bWy", "WPddNSkRoSoY", "W7XAafmI", "W5akja", "W4xdMSovW7fIW7FdOmo4nMDXW5i", "WQNdGmkLD8kH", "W7ZdVmk5W60N", "DZNdVK97", "mCoAWQ7cPmoW", "W63cI8oXCqO", "rM5H", "etTujxC", "W7SiW6CjWR0", "WPmHWQRdIKa", "W7xcMSoNztu", "kgNdMvPYW6lcPIG", "W6pcL8o4zWa", "WPrqz8oLW4H5a1vdcxJcTCoEvq", "WPG8WRNdGva", "x8kUruVdGa", "W6SswgdcOq", "E8osW6C", "BSoLBZ0vWR7cJmkiDmodba", "W7tdRSkKW40T", "pNPEC0O", "W5NdTmk0W603", "BSonWPibWRe", "h8kuW7C9WRruWRZdOq", "gg11WQ3dMa", "aCkHovrq", "mNPtq0W", "W7JdS8k+W7OR", "mg1zu2G", "W5NdKqxdMSo3", "m8kyWP4IWOFdG8kJua", "aJjqmga", "bNHZWPZdGG", "W49tF8oaDSk6WONcNmoWruHI", "WOeSyG", "WQddJSkiWR7cKq", "d8kpjv1M", "lwm0r8oL", "W5xcH8o8oCoYlCorW6qO", "W6mjsmoSdq", "tY9s", "WORcR0BcPL3dUCk5e8oQFYpcQq", "xgH5wvq", "phfEA0O", "tCoqW78wWPG", "BmkUCvVdOW", "AmoacG", "uSonWQ8tWRq", "gCoxWRlcT8oP", "W4RdMb/dOGC", "adLFuL8", "WQpdRmkFWRtcOq", "W7H9dfah", "WOG4WRBdIW", "W5RcICoYhtS", "WO5BqmkRwhb2W4pcKCoZl8kbaG", "ucOWW7JcMrfbBCo/bCk+WRBdLG", "nmkCW5XiW7xcKCoAdSo3sc1dW7CW", "lmo7dqmt", "rKeefrnnumkqecpdJmomWQS", "kCkCsmoOkdhcNujjaW8", "W49sF8odC8kWW7JcG8o5t2HOW64", "WOBcSfrQWPPYwXa", "WOFdL8kPugddPCo9fSoBWQ1/WRa", "W5KCaCoCdW", "bMGzFfC", "W7/dU8oJhSkB", "WPG9W6q", "W7JdLqm", "WQi4WRVdJey", "WQdcQmoNWRz2WR8bWRXQWQja", "WRT2bCkVW7S", "bg50WOVdHa", "nmoqWOaGWONdQ8kD", "WQFdG8kEWOJcKW", "uJxdIuni", "E8ohdmkPAW", "lSkAsmoRk1dcU1DRkIzP", "WOmKFSoVW7m", "kCkunNPm", "aCkVkKH6", "W7ztefKX", "kKxdMYu", "W60nm8k/WOS", "WRPrgrRdVmk4Bt3dVmkPW4RcJa", "W5tdUH7dTaW", "W6SlsmoIbq", "nCkGnW", "WQyEo8oIjNfDW7i", "ruaggr8qdmkLmYRdJW", "dhHtWQFdRq", "W6tcGSoFcYu", "WRD2cmkuW6W", "WOiKW6rxAW", "W4OmqSo1gq"];
  return wn = function() {
    return i;
  }, wn();
}
function CA(i, n) {
  i = i - (-5 * -1239 + 2652 + -8547);
  var t = wn(), e = t[i];
  if (CA.CcIIRE === void 0) {
    var A = function(c) {
      for (var I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", Q = "", x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (var f = 0, h = s.length; f < h; f++)
        Q += "%" + ("00" + s.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    }, o = function(c, I) {
      var s = [], Q = 0, x, E = "";
      c = A(c);
      var C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (var l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    CA.mRugwh = o, CA.TXVLLp = {}, CA.CcIIRE = !0;
  }
  var r = t[2 * -428 + 2360 + -1504], a = i + r, g = CA.TXVLLp[a];
  return g ? e = g : (CA.PPksiZ === void 0 && (CA.PPksiZ = !0), e = CA.mRugwh(e, n), CA.TXVLLp[a] = e), e;
}
function _A(i, n, t, e, A) {
  return CA(n - -193, A);
}
function Tt(i, n, t, e, A) {
  return CA(t - -718, e);
}
function Ne(i, n, t, e, A) {
  return CA(i - 370, t);
}
function te(i, n, t, e, A) {
  return CA(t - -796, n);
}
class pQ {
  [te(-338, "&@!Y", -400) + hA("s8MP", -50, -108) + hA("(CRw", -116, -124)] = -1254 + 3 * 418;
  [hA("hk7Y", -105, -65) + hA("fu6b", -52, -106) + Ne(741, 700, "MB7a") + te(-349, "6Fa]", -405)];
  [te(-397, "#OTb", -439) + Tt(-400, -388, -355, "]lMj") + "p"] = void 0;
  constructor() {
    function n(A, o, r, a, g) {
      return hA(r, o - 19, A - 622);
    }
    function t(A, o, r, a, g) {
      return te(A - 368, r, a - 171);
    }
    function e(A, o, r, a, g) {
      return _A(A - 174, A - 767, r - 125, a - 244, o);
    }
    this[n(483, 542, "&aEk") + n(503, 459, "Z])X") + t(-224, -230, "%uNS", -209) + t(-168, -167, "v#B7", -217)] = Date[e(954, "%uNS", 1005, 1003)]();
  }
  [_A(189, 146, 95, 172, "u4kj") + Tt(-336, -289, -293, "7$Nx") + Ne(737, 769, "&aEk")]() {
    function n(r, a, g, c, I) {
      return _A(r - 290, c - 339, g - 66, c - 38, a);
    }
    function t(r, a, g, c, I) {
      return Ne(g - -569, a - 86, c);
    }
    this[t(121, 206, 179, "Aziz") + t(93, 92, 141, "7$Nx") + o(-388, -391, -494, -438, "Dw1d")]++;
    function e(r, a, g, c, I) {
      return te(r - 39, g, a - 1369);
    }
    function A(r, a, g, c, I) {
      return _A(r - 72, c - 22, g - 160, c - 281, a);
    }
    function o(r, a, g, c, I) {
      return Ne(c - -1222, a - 406, I);
    }
    this[t(177, 177, 154, "(CRw") + e(814, 878, "sXWa") + n(506, "!vH*", 631, 566)] === 9431 * 1 + 7189 + -16619 && (e(918, 927, "AxWM") === e(981, 992, "NVl%") ? this[o(-447, -531, -560, -497, "AxWM") + n(523, "hk7Y", 585, 541) + "p"] = _0x221174[A(259, "AoX5", 178, 193)]() - this[e(1011, 1001, "bafa") + e(957, 945, "]lMj") + t(166, 164, 160, "C46m") + A(95, "NrOY", 179, 137)] : this[n(476, "SoHb", 517, 508) + o(-538, -536, -599, -542, "SoHb") + "p"] = Date[e(861, 924, "MB7a")]() - this[t(143, 208, 183, "9$NR") + n(609, "uE1m", 501, 551) + o(-539, -485, -498, -500, "fu6b") + e(925, 981, "v#B7")]);
  }
  [te(-386, "tJkP", -412) + _A(133, 163, 157, 141, "ZFAv") + Tt(-407, -278, -342, "hk7Y") + hA("Z])X", -135, -105) + "up"]() {
    function n(r, a, g, c, I) {
      return hA(r, a - 306, c - -333);
    }
    function t(r, a, g, c, I) {
      return hA(a, a - 235, g - 1095);
    }
    if (!Uo())
      return o(220, 217, "bafa") === o(309, 344, "&@!Y") ? void 0 : this[n("(CRw", -427, -441, -492) + n("&aEk", -435, -490, -464) + "p"];
    function e(r, a, g, c, I) {
      return hA(r, a - 421, I - 1425);
    }
    this[o(298, 309, "Z])X") + A(643, 684, 729, "hk7Y", 667) + t(987, "AoX5", 1002)] = 5846 + 1987 * -5 + 4089, this[t(998, "]eFo", 1040) + o(257, 317, "3kM8") + "p"] = void 0;
    function A(r, a, g, c, I) {
      return te(r - 93, c, I - 1070);
    }
    function o(r, a, g, c, I) {
      return Ne(r - -482, a - 8, g);
    }
    window[e("uE1m", 1366, 1299, 1362, 1340) + t(941, "Z])X", 950) + n("5A!h", -433, -433, -375) + A(568, 579, 593, "#LfH", 610)](t(1001, "tJkP", 1008) + "wn", this[t(1018, "ZFAv", 975) + o(314, 366, "]lMj") + A(576, 676, 631, "]eFo", 624)][A(713, 672, 644, "SoHb", 701)](this));
  }
  [te(-465, "Z])X", -452) + _A(128, 148, 162, 112, "qX%H") + hA("#LfH", -207, -140) + Ne(792, 798, "Aziz") + "up"]() {
    function n(r, a, g, c, I) {
      return _A(r - 490, r - -70, g - 345, c - 484, I);
    }
    function t(r, a, g, c, I) {
      return te(r - 364, I, r - 928);
    }
    if (!Uo())
      if (t(481, 466, 478, 543, "NrOY") !== t(481, 416, 484, 440, "NrOY")) this[n(70, 30, 44, 37, "fu6b") + t(522, 586, 523, 458, "u4kj") + t(546, 575, 482, 599, "Dw1d")]++, this[A("v#B7", -6, -58, -6) + o(25, 12, -23, -30, "qX%H") + e(1114, 1185, 1127, "]eFo", 1119)] === 1 && (this[t(541, 481, 538, 478, "7$Nx") + A("s8MP", 72, 26, 61) + "p"] = _0x5bfb97[o(-25, 60, -41, 21, "AoX5")]() - this[t(514, 503, 475, 506, "9$NR") + o(102, 117, 66, 70, "&aEk") + o(10, -11, 32, 27, "bafa") + t(441, 463, 396, 426, "s8MP")]);
      else return;
    function e(r, a, g, c, I) {
      return Ne(I - 406, a - 137, c);
    }
    function A(r, a, g, c, I) {
      return _A(r - 324, g - -184, g - 155, c - 269, r);
    }
    function o(r, a, g, c, I) {
      return hA(I, a - 385, c - 123);
    }
    window[n(52, -7, 98, 53, "7$Nx") + n(154, 148, 192, 220, "jtk$") + n(71, 111, 96, 25, "NrOY") + "r"](e(1121, 1222, 1161, "jtk$", 1176) + "wn", this[t(478, 533, 539, 498, "ZFAv") + o(92, 80, 4, 56, "Z])X") + t(460, 518, 413, 431, "wW&T")][n(60, 26, 33, 73, "K9#y")](this));
  }
  [hA("#OTb", -100, -48) + _A(269, 239, 245, 224, "4$yH") + "lt"]() {
    function n(r, a, g, c, I) {
      return hA(g, a - 331, a - -264);
    }
    function t(r, a, g, c, I) {
      return _A(r - 330, g - 274, g - 337, c - 407, a);
    }
    function e(r, a, g, c, I) {
      return _A(r - 239, c - 479, g - 111, c - 293, g);
    }
    if (!Uo() || !this[t(443, "!vH*", 398, 383) + t(378, "AoX5", 405, 390) + "p"])
      if (o(219, "jtk$", 263) === n(-326, -355, "26(c")) {
        var A = {};
        return A[t(465, "jtk$", 446, 501) + e(624, 629, "SoHb", 674) + "e"] = !1, A;
      } else return;
    function o(r, a, g, c, I) {
      return Ne(g - -473, a - 212, a);
    }
    return { performance: !0, hiccupAmount: this[t(453, "C46m", 426, 468) + o(331, "SoHb", 280) + o(290, "#LfH", 320) + "t"](), firstHiccup: this[n(-354, -336, "jtk$") + n(-333, -353, "%zjW") + e(538, 543, "W)]M", 592) + o(310, "NVl%", 286) + "ss"]() };
  }
  [_A(57, 119, 56, 158, "fu6b") + Tt(-384, -267, -320, "qX%H") + hA("wW&T", -83, -146) + "t"]() {
    function n(t, e, A, o, r) {
      return Tt(t - 301, e - 414, e - 931, r);
    }
    return this[n(597, 535, 577, 531, "]lMj") + n(599, 553, 560, 535, "7$Nx") + n(587, 561, 495, 540, "#LfH")];
  }
  [te(-430, "qX%H", -390) + hA("qX%H", -178, -135) + hA("jtk$", -34, -64) + _A(179, 193, 242, 217, "tJkP") + "ss"]() {
    function n(t, e, A, o, r) {
      return te(t - 152, o, t - 1175);
    }
    return this[n(696, 729, 678, "!vH*") + n(695, 672, 723, "%zjW") + "p"];
  }
}
const mQ = -4762 + -7628 * 1 + 12870, yQ = 240, sa = 1173 + 1 * -563 + -580, Ys = 5 * 1269 + 3 * -2269 + 477, Ts = -3200 + 1 * -4887 + 8095, ur = {};
ur.codec = "avc1.42E01E", ur.bitrate = 1e6;
const wo = ur, wQ = -1076 * -3 + 3 * -1650 + 2 * 862, DQ = -24 * 1382 + -1 * 54979 + 118147 * 1;
class bQ {
  shouldBeTested = !0;
  testFramesSizesList = [];
  maximumTestFrames;
  maximumTestFramesSize;
  constructor(n, t) {
    this.maximumTestFrames = n, this.maximumTestFramesSize = t;
  }
  addTestFrame(n) {
    this.testFramesSizesList.push(n);
  }
  isSizeExceeded() {
    if (this.testFramesSizesList.length !== this.maximumTestFrames) return !1;
    let n = 277 * 4 + -1138 * -2 + -3384;
    for (const t of this.testFramesSizesList)
      n += t;
    return this.shouldBeTested = !1, n > this.maximumTestFramesSize;
  }
}
class Ps {
  encoder;
  create(n) {
    this.encoder = new VideoEncoder({ output: (t, e) => {
      const A = new Uint8Array(t.byteLength);
      t.copyTo(A), n(t, e);
    }, error: (t) => {
      throw w.fromError("Encoding error: " + t);
    } });
  }
  configure(n) {
    this.encoder && this.encoder.configure(n);
  }
  encode(n, t = !1) {
    if (this.encoder) {
      const e = {};
      e.keyFrame = t, this.encoder.encode(n, e);
    }
  }
  async close() {
    this.encoder && (await this.encoder.flush(), this.encoder.close(), this.encoder = void 0);
  }
  async isConfigSupported(n) {
    const t = await VideoEncoder.isConfigSupported(n);
    return t.supported ? t.supported : !1;
  }
  static isSupported() {
    return "VideoEncoder" in window;
  }
}
function kQ(i) {
  if (!i) return !1;
  const n = Ps.isSupported();
  return !n && w.logError("Video encoding is not supported in this browser."), n;
}
const fr = {};
fr.LOW = "low", fr.STANDARD = "standard";
const Dn = fr, hr = {};
hr.SPS = "SPS", hr.PPS = "PPS";
const li = hr;
class SQ {
  parseAVCCParameterSets(n) {
    try {
      let t = 0;
      if (t += -1 * 1832 + -269 * -12 + -1392, t >= n.length) return;
      t++;
      const e = this.extractSPSFromAVCCAndSkipToNext(n, t);
      t = e.nextOffset;
      const A = this.extractPPSFromAVCCAndSkipToNext(n, t), o = {};
      return o.pictureParameterSet = A.parameterSet, o.sequenceParameterSet = e.parameterSet, o;
    } catch (t) {
      w.logError("Failed to parse AVCC parameter sets: " + t);
    }
  }
  extractSPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, li.SPS);
  }
  extractPPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, li.PPS);
  }
  extractParameterSetFromAVCCAndSkipToNext(n, t, e) {
    if (t >= n.length) {
      const r = {};
      return r.nextOffset = t, r;
    }
    const A = e === li.SPS ? n[t] & 31 : n[t], o = t + (-1013 * 3 + -13 * -664 + 12 * -466);
    return this.skipToNextSectionAndReturnFirstParameterSet(n, o, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(n, t, e) {
    let A = t;
    for (let r = 51 + -1 * 4378 + 4327 * 1; r < e; r++) {
      const a = this.extractSingleParameterSetFromAVCC(n, A);
      if (A = a.nextOffset, a.parameterSet && r === 1 * 4426 + 948 + -5374) {
        const g = {};
        return g.parameterSet = a.parameterSet, g.nextOffset = A, g;
      }
    }
    const o = {};
    return o.nextOffset = A, o;
  }
  extractSingleParameterSetFromAVCC(n, t) {
    if (t + (5564 + 1 * 5641 + -11203) > n.length) {
      const c = {};
      return c.nextOffset = t, c;
    }
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint16(t, !1), o = t + 2, r = o + A;
    if (r > n.length) {
      const c = {};
      return c.nextOffset = t, c;
    }
    const a = n.slice(o, r), g = {};
    return g.parameterSet = a, g.nextOffset = r, g;
  }
}
class GQ {
  parameterSetsHandler;
  START_CODE = new Uint8Array([0, 508 + -508 * 1, -1 * -3248 + 6673 * -1 + 3425, 12745 + -12 * 1062]);
  parameterSets;
  constructor() {
    this.parameterSetsHandler = new SQ();
  }
  extractParameterSets(n) {
    if (this.parameterSets = void 0, !n.description) return;
    const t = this.normalizeBufferSource(n.description);
    t && (this.parameterSets = this.parameterSetsHandler.parseAVCCParameterSets(t) || {});
  }
  process(n) {
    return this.buildH264AnnexBRawVideo(n);
  }
  buildH264AnnexBRawVideo(n) {
    const t = [...this.getParameterSetsAnnexB(), ...this.getAnnexBParts(n)];
    return this.combineRawVideoParts(t);
  }
  getParameterSetsAnnexB() {
    const n = [];
    return this.parameterSets?.["sequenceParameterSet"] && (n.push(this.START_CODE), n.push(this.parameterSets.sequenceParameterSet)), this.parameterSets?.["pictureParameterSet"] && (n.push(this.START_CODE), n.push(this.parameterSets.pictureParameterSet)), n;
  }
  getAnnexBParts(n) {
    const t = [];
    for (const e of n)
      t.push(...this.convertAVCCToAnnexB(e));
    return t;
  }
  convertAVCCToAnnexB(n) {
    const t = [];
    let e = 0;
    for (; e < n.length; ) {
      const A = this.extractNALUnit(n, e);
      if (!A) break;
      t.push(this.START_CODE), t.push(A.data), e = A.nextOffset;
    }
    return t;
  }
  extractNALUnit(n, t) {
    if (t + 4 > n.length) return;
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint32(t, !1), o = t + (3260 + 1 * 7829 + -739 * 15), r = o + A;
    if (!(r > n.length))
      return { data: n.slice(o, r), nextOffset: r };
  }
  normalizeBufferSource(n) {
    if (n instanceof ArrayBuffer) return new Uint8Array(n);
    if (n instanceof SharedArrayBuffer) return this.copyFromSharedArrayBuffer(n);
    if (n instanceof Uint8Array) return n;
  }
  copyFromSharedArrayBuffer(n) {
    const t = new ArrayBuffer(n.byteLength), e = new Uint8Array(n), A = new Uint8Array(t);
    return A.set(e), A;
  }
  combineRawVideoParts(n) {
    const t = n.reduce((o, r) => o + r.length, 0), e = new Uint8Array(t);
    let A = 0;
    for (const o of n)
      e.set(o, A), A += o.length;
    return e;
  }
}
class NQ {
  chunks = [];
  maxChunksCount;
  constructor(n = Ts, t = sa) {
    this.cleanSetup(n, t);
  }
  cleanSetup(n, t) {
    this.clear(), this.maxChunksCount = (n + 1) * t;
  }
  add(n) {
    this.chunks.push(n), this.maxChunksCount && this.chunks.length > this.maxChunksCount && this.chunks.shift();
  }
  clear() {
    this.chunks = [];
  }
  getChunks() {
    const n = this.chunks.findIndex((t) => t.type === "key");
    return this.chunks.slice(Math.max(0, n));
  }
}
class Bg {
  codec;
  bitrate;
  resolution;
  framerate;
  setCodec(n) {
    return this.codec = n, this;
  }
  setBitrate(n) {
    return this.bitrate = n, this;
  }
  setResolution(n) {
    return this.resolution = n, this;
  }
  setFramerate(n) {
    return this.framerate = n, this;
  }
  validate() {
    if (!this.codec) throw w.logError("VideoEncoderConfigBuilder: codec is not set.");
    if (!this.resolution) throw w.logError("VideoEncoderConfigBuilder: resolution is not set.");
  }
  reset() {
    return this.codec = void 0, this.bitrate = void 0, this.resolution = void 0, this.framerate = void 0, this;
  }
  build() {
    this.validate();
    const { height: n, width: t } = this.resolution, e = {};
    return e.codec = this.codec, e.bitrate = this.bitrate, e.width = t, e.height = n, e.framerate = this.framerate, e;
  }
}
class RQ {
  getScaledResolution(n, t) {
    const { height: e, width: A } = n, o = A / e;
    if (Os() && e > A) {
      const a = e, g = A, c = a / g, I = t * c;
      return { width: Math.floor(I / (-5739 + -1 * -5741)) * (2159 + 3 * -719), height: t };
    }
    if (A < e) {
      const a = t / o;
      return { width: t, height: Math.floor(a / (573 * -2 + 5988 + -4840)) * (-9678 + 1762 * -4 + 16728) };
    }
    const r = t * o;
    return { width: Math.floor(r / 2) * (-2 * 757 + 7014 + -5498), height: t };
  }
  create(n, t) {
    switch (n) {
      case Dn.STANDARD:
        return new Bg().setBitrate(wo.bitrate).setCodec(wo.codec).setFramerate(sa).setResolution(this.getScaledResolution(t, mQ)).build();
      case Dn.LOW:
        return new Bg().setBitrate(wo.bitrate).setCodec(wo.codec).setFramerate(Ys).setResolution(this.getScaledResolution(t, yQ)).build();
      default:
        throw w.logError("Unsupported preset for video encoder config");
    }
  }
}
class vQ {
  videoProcessor;
  videoEncoder;
  chunkStorage;
  qualityTester;
  cameraHandler;
  videoEncoderConfigFactory;
  cameraFramerate;
  captureIntervalId;
  videoElement;
  currentConfigPreset = Dn.STANDARD;
  customEvent;
  currentResolution;
  boundCameraPropsChangedHandler;
  constructor(n, t, e, A, o) {
    this.videoProcessor = n, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new RQ(), this.chunkStorage = new NQ(), this.cameraFramerate = sa, this.customEvent = o, this.videoEncoder.create(this.onChunkEncoded.bind(this)), this.boundCameraPropsChangedHandler = this.handleCameraPropsChange.bind(this), this.setupCameraPropsChangedListener();
  }
  onChunkEncoded(n, t) {
    this.chunkStorage.add(n), t?.["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(n.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(Ts, Ys), this.currentConfigPreset = Dn.LOW, this.startRecording();
  }
  restartRecording() {
    this.clearCaptureInterval(), this.chunkStorage.clear(), this.startRecording();
  }
  setupCameraPropsChangedListener() {
    document.addEventListener(this.customEvent.CAMERA_PROPS_CHANGED, this.boundCameraPropsChangedHandler);
  }
  removeCameraPropsChangedListener() {
    document.removeEventListener(this.customEvent.CAMERA_PROPS_CHANGED, this.boundCameraPropsChangedHandler);
  }
  async handleCameraPropsChange(n) {
    if (Os()) return;
    const t = n.detail?.["cameraResolution"], e = this.currentResolution?.width !== t?.width, A = this.currentResolution?.height !== t?.height;
    !e && !A || this.restartRecording();
  }
  startRecording(n = this.currentConfigPreset) {
    if (this.captureIntervalId) {
      w.logError("Recording is already in progress.");
      return;
    }
    if (!this.cameraHandler.mediaStream) {
      w.logError("Camera media stream is not available.");
      return;
    }
    this.createVideoElement(this.cameraHandler.mediaStream), this.configureVideoEncoder(n), this.createCaptureInterval();
  }
  async stopRecording() {
    this.clearCaptureInterval(), this.removeCameraPropsChangedListener(), await this.videoEncoder.close();
  }
  configureVideoEncoder(n) {
    if (this.currentResolution = this.cameraHandler?.getResolution(), !this.currentResolution) {
      w.logError("Camera resolution could not be determined.");
      return;
    }
    let t;
    try {
      t = this.videoEncoderConfigFactory.create(n, this.currentResolution);
    } catch (e) {
      w.logError("Failed to create video encoder configuration: " + e);
      return;
    }
    if (!this.videoEncoder.isConfigSupported(t)) {
      w.logError("The provided video encoder configuration is not supported.");
      return;
    }
    this.videoEncoder.configure(t), t.framerate && (this.cameraFramerate = t.framerate);
  }
  createVideoElement(n) {
    if (this.videoElement) return;
    const t = document.createElement("video");
    t.srcObject = n, t.playsInline = !0, t.muted = !0, t.play(), this.videoElement = t;
  }
  createCaptureInterval() {
    if (!this.videoElement) {
      w.logError("Video element is not created.");
      return;
    }
    let n = 275 + -1 * -6587 + -6862;
    const t = this.cameraFramerate, e = (-4348 + -5309 * 1 + 10657) / t;
    this.captureIntervalId = setInterval(() => {
      if (this.videoElement && this.videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const A = new VideoFrame(this.videoElement, { timestamp: performance.now() * 1e3 }), o = n % t === 4139 * 1 + 6671 + -10810;
        this.videoEncoder.encode(A, o), n++, A.close();
      }
    }, e);
  }
  clearCaptureInterval() {
    this.captureIntervalId && (clearInterval(this.captureIntervalId), this.captureIntervalId = void 0);
  }
  getRecording() {
    const n = this.chunkStorage.getChunks(), t = n.map((o) => {
      const r = new Uint8Array(o.byteLength);
      return o.copyTo(r), r;
    }), e = this.videoProcessor.process(t), A = {};
    return A.frameRate = this.cameraFramerate, A.bytes = e, A;
  }
}
class FQ {
  videoProcessor;
  videoEncoder;
  qualityTester;
  cameraHandler;
  customEvent;
  setVideoProcessor(n) {
    return this.videoProcessor = n, this;
  }
  setVideoEncoder(n) {
    return this.videoEncoder = n, this;
  }
  setQualityTester(n) {
    return this.qualityTester = n, this;
  }
  setCameraHandler(n) {
    return this.cameraHandler = n, this;
  }
  setCustomEvent(n) {
    return this.customEvent = n, this;
  }
  validate() {
    if (!this.videoProcessor) throw w.logError("VideoProcessor is not set");
    if (!this.videoEncoder) throw w.logError("VideoEncoder is not set");
    if (!this.qualityTester) throw w.logError("QualityTester is not set");
    if (!this.cameraHandler) throw w.logError("CameraHandler is not set");
  }
  build() {
    try {
      this.validate();
    } catch {
      return;
    }
    return new vQ(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler, this.customEvent);
  }
}
class MQ {
  create({ cameraHandler: n, customEvent: t, isVideoCaptureEnabled: e }) {
    if (!kQ(e)) return;
    const A = new bQ(wQ, DQ), o = new Ps(), r = new GQ();
    return new FQ().setQualityTester(A).setVideoEncoder(o).setVideoProcessor(r).setCameraHandler(n).setCustomEvent(t).build();
  }
}
function WQ(i, n) {
  const { facingMode: t = aa.FRONT, isVideoCaptureEnabled: e } = n ?? {}, A = UA(null), [o, r] = oA(), [a, g] = oA(), { handleError: c, setIsCameraReady: I } = RA(), s = Qe((x) => {
    g((E) => DC(x, E));
  }, []);
  Z(() => {
    if (!A.current) {
      c(new w("Something went wrong during video initialization"));
      return;
    }
    const x = new hQ(A.current), E = new EQ(), C = new xQ(E), l = new Us(), f = new pQ(), h = {};
    h.cameraHandler = l, h.customEvent = i, h.isVideoCaptureEnabled = e;
    const p = new MQ().create(h), m = {};
    m.videoHandler = x, m.cameraHandler = l, m.performanceCheckup = f, m.cameraEvaluator = C, m.videoRecorder = p;
    const k = new fQ(m);
    return (async () => {
      try {
        const y = {};
        y.facingMode = t, await k.startFirstVideoStream(y);
      } catch (y) {
        if (y instanceof Error) {
          c(w.fromCameraError(y));
          return;
        }
      }
      r(k), I(!0), s(k.getCameraResolution());
    })(), () => {
      k?.stopStreaming(), I(!1), r(void 0);
    };
  }, [t, c, I, A, s, e, i]);
  const Q = {};
  return Q.cameraService = o, Q.cameraResolution = a, Q.onCameraResolutionChange = s, Q.videoRef = A, Q;
}
function LQ({
  cameraConfiguration: i,
  children: n,
  customEvent: t
}) {
  const { cameraResolution: e, cameraService: A, onCameraResolutionChange: o, videoRef: r } = WQ(
    t,
    i
  ), a = EA(
    () => ({
      cameraService: A,
      cameraResolution: e,
      onCameraResolutionChange: o,
      videoRef: r
    }),
    [A, e, o, r]
  );
  return /* @__PURE__ */ b(ln.Provider, { value: a, children: n });
}
function OQ({
  cameraConfiguration: i,
  children: n
}) {
  return /* @__PURE__ */ b(LQ, { cameraConfiguration: i, customEvent: xe, children: n });
}
let ui;
// @__NO_SIDE_EFFECTS__
function _s(i) {
  return {
    lang: i?.lang ?? ui?.lang,
    message: i?.message,
    abortEarly: i?.abortEarly ?? ui?.abortEarly,
    abortPipeEarly: i?.abortPipeEarly ?? ui?.abortPipeEarly
  };
}
let JQ;
// @__NO_SIDE_EFFECTS__
function UQ(i) {
  return JQ?.get(i);
}
let YQ;
// @__NO_SIDE_EFFECTS__
function TQ(i) {
  return YQ?.get(i);
}
let PQ;
// @__NO_SIDE_EFFECTS__
function _Q(i, n) {
  return PQ?.get(i)?.get(n);
}
// @__NO_SIDE_EFFECTS__
function HQ(i) {
  const n = typeof i;
  return n === "string" ? `"${i}"` : n === "number" || n === "bigint" || n === "boolean" ? `${i}` : n === "object" || n === "function" ? (i && Object.getPrototypeOf(i)?.constructor?.name) ?? "null" : n;
}
function pr(i, n, t, e, A) {
  const o = A && "input" in A ? A.input : t.value, r = A?.expected ?? i.expects ?? null, a = A?.received ?? /* @__PURE__ */ HQ(o), g = {
    kind: i.kind,
    type: i.type,
    input: o,
    expected: r,
    received: a,
    message: `Invalid ${n}: ${r ? `Expected ${r} but r` : "R"}eceived ${a}`,
    requirement: i.requirement,
    path: A?.path,
    issues: A?.issues,
    lang: e.lang,
    abortEarly: e.abortEarly,
    abortPipeEarly: e.abortPipeEarly
  }, c = i.kind === "schema", I = A?.message ?? i.message ?? /* @__PURE__ */ _Q(i.reference, g.lang) ?? (c ? /* @__PURE__ */ TQ(g.lang) : null) ?? e.message ?? /* @__PURE__ */ UQ(g.lang);
  I !== void 0 && (g.message = typeof I == "function" ? I(g) : I), c && (t.typed = !1), t.issues ? t.issues.push(g) : t.issues = [g];
}
// @__NO_SIDE_EFFECTS__
function Hs(i) {
  return {
    version: 1,
    vendor: "valibot",
    validate(n) {
      return i["~run"]({ value: n }, /* @__PURE__ */ _s());
    }
  };
}
var KQ = class extends Error {
  /**
  * Creates a Valibot error with useful information.
  *
  * @param issues The error issues.
  */
  constructor(i) {
    super(i[0].message), this.name = "ValiError", this.issues = i;
  }
};
// @__NO_SIDE_EFFECTS__
function jQ(i, n, t) {
  return typeof i.fallback == "function" ? i.fallback(n, t) : i.fallback;
}
// @__NO_SIDE_EFFECTS__
function qQ(i, n, t) {
  return typeof i.default == "function" ? i.default(n, t) : i.default;
}
// @__NO_SIDE_EFFECTS__
function mr(i) {
  return {
    kind: "schema",
    type: "function",
    reference: mr,
    expects: "Function",
    async: !1,
    message: i,
    get "~standard"() {
      return /* @__PURE__ */ Hs(this);
    },
    "~run"(n, t) {
      return typeof n.value == "function" ? n.typed = !0 : pr(this, "type", n, t), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ks(i, n) {
  return {
    kind: "schema",
    type: "object",
    reference: Ks,
    expects: "Object",
    async: !1,
    entries: i,
    message: n,
    get "~standard"() {
      return /* @__PURE__ */ Hs(this);
    },
    "~run"(t, e) {
      const A = t.value;
      if (A && typeof A == "object") {
        t.typed = !0, t.value = {};
        for (const o in this.entries) {
          const r = this.entries[o];
          if (o in A || (r.type === "exact_optional" || r.type === "optional" || r.type === "nullish") && r.default !== void 0) {
            const a = o in A ? A[o] : /* @__PURE__ */ qQ(r), g = r["~run"]({ value: a }, e);
            if (g.issues) {
              const c = {
                type: "object",
                origin: "value",
                input: A,
                key: o,
                value: a
              };
              for (const I of g.issues)
                I.path ? I.path.unshift(c) : I.path = [c], t.issues?.push(I);
              if (t.issues || (t.issues = g.issues), e.abortEarly) {
                t.typed = !1;
                break;
              }
            }
            g.typed || (t.typed = !1), t.value[o] = g.value;
          } else if (r.fallback !== void 0) t.value[o] = /* @__PURE__ */ jQ(r);
          else if (r.type !== "exact_optional" && r.type !== "optional" && r.type !== "nullish" && (pr(this, "key", t, e, {
            input: void 0,
            expected: `"${o}"`,
            path: [{
              type: "object",
              origin: "key",
              input: A,
              key: o,
              value: A[o]
            }]
          }), e.abortEarly))
            break;
        }
      } else pr(this, "type", t, e);
      return t;
    }
  };
}
function VQ(i, n, t) {
  const e = i["~run"]({ value: n }, /* @__PURE__ */ _s(t));
  if (e.issues) throw new KQ(e.issues);
  return e.value;
}
function ZQ(i, n) {
  try {
    VQ(n, i);
  } catch (e) {
    throw i.onError && e instanceof Error && i.onError(e), new Error("Invalid configuration", { cause: e });
  }
  return {
    ...i,
    assetsDirectoryPath: kC(i.assetsDirectoryPath)
  };
}
function zQ({
  children: i,
  configuration: n,
  validationSchema: t
}) {
  const e = EA(() => ZQ(n, t), [n, t]);
  return /* @__PURE__ */ b(Aa.Provider, { value: e, children: i });
}
function XQ({
  children: i,
  configuration: n
}) {
  return /* @__PURE__ */ b(zQ, { configuration: n, validationSchema: /* @__PURE__ */ Ks({
    onComplete: /* @__PURE__ */ mr("On complete must be a function"),
    onError: /* @__PURE__ */ mr("On error must be a function")
  }), children: i });
}
const bn = De(void 0);
bn.displayName = "ControllerContext";
function js() {
  const i = re(
    bn
  );
  if (i === void 0)
    throw new Error(`${bn.displayName} must be used within a ControllerProvider`);
  return i;
}
function $Q({ children: i, controller: n }) {
  const t = EA(
    () => ({
      controller: n
    }),
    [n]
  );
  return /* @__PURE__ */ b(bn.Provider, { value: t, children: i });
}
function uA(i, n) {
  i = i - 437;
  const t = kn();
  let e = t[i];
  if (uA.EeecHH === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (let x = 0, E = s.length; x < E; x++)
        Q += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const g = function(c, I) {
      let s = [], Q = 0, x, E = "";
      c = A(c);
      let C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (let l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    uA.OEnWgh = g, uA.GmChaY = {}, uA.EeecHH = !0;
  }
  const o = t[3318 + 641 * -6 + 528], r = i + o, a = uA.GmChaY[r];
  return a ? e = a : (uA.IkbOAr === void 0 && (uA.IkbOAr = !0), e = uA.OEnWgh(e, n), uA.GmChaY[r] = e), e;
}
(function(i, n) {
  function t(a, g, c, I, s) {
    return uA(I - -799, s);
  }
  function e(a, g, c, I, s) {
    return uA(s - 916, g);
  }
  const A = i();
  function o(a, g, c, I, s) {
    return uA(I - -213, c);
  }
  function r(a, g, c, I, s) {
    return uA(c - -724, a);
  }
  for (; ; )
    try {
      if (-parseInt(t(-368, -369, -342, -358, "2Eqo")) / 1 * (-parseInt(t(-332, -323, -320, -332, "As04")) / 2) + parseInt(t(-368, -374, -361, -359, "NZEC")) / 3 * (-parseInt(e(1349, "R!u%", 1361, 1381, 1368)) / 4) + parseInt(t(-336, -341, -351, -350, "R][9")) / 5 + -parseInt(o(259, 253, "YQ@@", 250, 243)) / 6 * (-parseInt(o(249, 253, "BUFR", 260, 258)) / 7) + -parseInt(t(-324, -327, -347, -331, "L[03")) / 8 * (-parseInt(r("b^X7", -273, -274, -262, -271)) / 9) + parseInt(o(216, 246, "s5@q", 231, 230)) / 10 * (-parseInt(t(-337, -308, -344, -327, "ZAy2")) / 11) + parseInt(e(1354, "dEkn", 1354, 1352, 1358)) / 12 * (-parseInt(t(-343, -360, -364, -352, "]v9Z")) / 13) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(kn, -1251931 * 1 + 1245030 + 689612);
async function qs(i) {
  function n(a, g, c, I, s) {
    return uA(c - -273, g);
  }
  function t(a, g, c, I, s) {
    return uA(g - 985, I);
  }
  function e(a, g, c, I, s) {
    return uA(a - -392, g);
  }
  function A(a, g, c, I, s) {
    return uA(a - 321, I);
  }
  const o = new Uint8Array(i), r = await window[t(1448, 1454, 1462, "pTt[") + "o"][A(766, 754, 749, "xoV&") + "e"][A(775, 792, 766, "b^X7") + "t"](A(764, 776, 751, "2Eqo"), o);
  return Array[t(1437, 1451, 1443, "BUFR")](new Uint8Array(r))[n(183, "ZAy2", 191)]((a) => a[A(769, 777, 762, "I)W!") + e(46, "BBry")](1154 + 569 * -2)[A(777, 787, 770, "HORx") + A(792, 776, 797, "BUFR")](2, "0"))[n(187, "pTt[", 186)]("");
}
function kn() {
  const i = ["D1SUBmkSWP7cUMe", "WOlcOeNdMaS", "erFcICoKWPLBCGTybNdcOgi", "xKXIaSouW6hdOmoaW7W2", "WPNcVSoIW7zw", "WPjPxeFdPCoutmohW5/dTmoNs8kI", "WPVdNmkqpr4fa8kDW6hcPw7cR0lcIa", "WPjHfItcNmkvkCol", "lSk+W5n4WPNcRCon", "WPH2WPpdLMNcUCohCCkjWQe", "W47cHmoayvO", "WPfZWPtdNsRdVmkWjCkpWR4zBCkoW5W", "D100pIO", "nqrGwwRdVCkqW5KVcfimgW", "w37dOmo/q8k1ia", "WPC0cIG", "W4G8yaGeW7tcH3S7W4VdMLOX", "wmo1wfddUrxcHSk3mg8", "W6FdVIGKW47cUcyc", "qNP2WQjfW5b6", "b0Wf", "ySkLi1v/W6/cVXhdM01CW7C", "qWXqkW", "BCoZW7zIymofWPCZWOyN", "ndFcMde8fga", "WP4PgJBcOW", "hrP3btLlW4i", "raXl", "xHHfWPVcQHRdImkdW53dM8k4W4pdRG", "eeWoC3SpWOnkWOadCCksda", "lmopfmo8avdcIq", "f8kXW4K", "W5pdPCkyESoTWO5trdLrWO0L", "fCoKWQ01W6tdR8oGW4FcR8ocDwm", "WPTQWP5cW4DDW7PL", "BKbAW6JcH8kMCmkjWP9NcCoo", "W70xWPu6WPW"];
  return kn = function() {
    return i;
  }, kn();
}
class Ax {
  localStorageKey;
  constructor(n = mC) {
    this.localStorageKey = n;
  }
  generateUuid() {
    return crypto.randomUUID();
  }
  generateSha1(n) {
    const t = new TextEncoder(), e = t.encode(n);
    return qs(e);
  }
  async generateAndStoreDecoys() {
    for (const n of yC) {
      const t = this.generateUuid(), e = await this.generateSha1(t);
      localStorage.setItem(n, e);
    }
  }
  async generateAndStoreMainId() {
    const n = this.generateUuid(), t = await this.generateSha1(n);
    return localStorage.setItem(this.localStorageKey, t), t;
  }
  async generateAndStore() {
    return await this.generateAndStoreDecoys(), this.generateAndStoreMainId();
  }
  getMainStoredValue() {
    return this.getStoredValue(this.localStorageKey);
  }
  getStoredValue(n) {
    return localStorage.getItem(n) ?? void 0;
  }
  async get() {
    const n = this.getMainStoredValue();
    return n || this.generateAndStore();
  }
}
const Ko = {};
Ko.ON_COMPLETE = "smile-auto-capture:on-complete", Ko.TIMED_CAPTURE_EXECUTED = "smile-auto-capture:timed-capture-executed", Ko.DEV = "smile-auto-capture:dev";
const Sn = Ko, ex = { ...Sn, ...xe }, Vs = ex;
const Zs = /* @__PURE__ */ Symbol("Comlink.proxy"), tx = /* @__PURE__ */ Symbol("Comlink.endpoint"), zs = /* @__PURE__ */ Symbol("Comlink.releaseProxy"), fi = /* @__PURE__ */ Symbol("Comlink.finalizer"), jo = /* @__PURE__ */ Symbol("Comlink.thrown"), Xs = (i) => typeof i == "object" && i !== null || typeof i == "function", ox = {
  canHandle: (i) => Xs(i) && i[Zs],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return Ac(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), tc(i);
  }
}, nx = {
  canHandle: (i) => Xs(i) && jo in i,
  serialize({ value: i }) {
    let n;
    return i instanceof Error ? n = {
      isError: !0,
      value: {
        message: i.message,
        name: i.name,
        stack: i.stack
      }
    } : n = { isError: !1, value: i }, [n, []];
  },
  deserialize(i) {
    throw i.isError ? Object.assign(new Error(i.value.message), i.value) : i.value;
  }
}, $s = /* @__PURE__ */ new Map([
  ["proxy", ox],
  ["throw", nx]
]);
function ix(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function Ac(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!ix(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: a } = Object.assign({ path: [] }, A.data), g = (A.data.argumentList || []).map($e);
    let c;
    try {
      const I = a.slice(0, -1).reduce((Q, x) => Q[x], i), s = a.reduce((Q, x) => Q[x], i);
      switch (r) {
        case "GET":
          c = s;
          break;
        case "SET":
          I[a.slice(-1)[0]] = $e(A.data.value), c = !0;
          break;
        case "APPLY":
          c = s.apply(I, g);
          break;
        case "CONSTRUCT":
          {
            const Q = new s(...g);
            c = Ix(Q);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: Q, port2: x } = new MessageChannel();
            Ac(i, x), c = cx(Q, [Q]);
          }
          break;
        case "RELEASE":
          c = void 0;
          break;
        default:
          return;
      }
    } catch (I) {
      c = { value: I, [jo]: 0 };
    }
    Promise.resolve(c).catch((I) => ({ value: I, [jo]: 0 })).then((I) => {
      const [s, Q] = Rn(I);
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), Q), r === "RELEASE" && (n.removeEventListener("message", e), ec(n), fi in i && typeof i[fi] == "function" && i[fi]());
    }).catch((I) => {
      const [s, Q] = Rn({
        value: new TypeError("Unserializable return value"),
        [jo]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), Q);
    });
  }), n.start && n.start();
}
function rx(i) {
  return i.constructor.name === "MessagePort";
}
function ec(i) {
  rx(i) && i.close();
}
function tc(i, n) {
  const t = /* @__PURE__ */ new Map();
  return i.addEventListener("message", function(A) {
    const { data: o } = A;
    if (!o || !o.id)
      return;
    const r = t.get(o.id);
    if (r)
      try {
        r(o);
      } finally {
        t.delete(o.id);
      }
  }), yr(i, t, [], n);
}
function Do(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function oc(i) {
  return lt(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    ec(i);
  });
}
const Gn = /* @__PURE__ */ new WeakMap(), Nn = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (Gn.get(i) || 0) - 1;
  Gn.set(i, n), n === 0 && oc(i);
});
function ax(i, n) {
  const t = (Gn.get(n) || 0) + 1;
  Gn.set(n, t), Nn && Nn.register(i, n, i);
}
function gx(i) {
  Nn && Nn.unregister(i);
}
function yr(i, n, t = [], e = function() {
}) {
  let A = !1;
  const o = new Proxy(e, {
    get(r, a) {
      if (Do(A), a === zs)
        return () => {
          gx(o), oc(i), n.clear(), A = !0;
        };
      if (a === "then") {
        if (t.length === 0)
          return { then: () => o };
        const g = lt(i, n, {
          type: "GET",
          path: t.map((c) => c.toString())
        }).then($e);
        return g.then.bind(g);
      }
      return yr(i, n, [...t, a]);
    },
    set(r, a, g) {
      Do(A);
      const [c, I] = Rn(g);
      return lt(i, n, {
        type: "SET",
        path: [...t, a].map((s) => s.toString()),
        value: c
      }, I).then($e);
    },
    apply(r, a, g) {
      Do(A);
      const c = t[t.length - 1];
      if (c === tx)
        return lt(i, n, {
          type: "ENDPOINT"
        }).then($e);
      if (c === "bind")
        return yr(i, n, t.slice(0, -1));
      const [I, s] = Qg(g);
      return lt(i, n, {
        type: "APPLY",
        path: t.map((Q) => Q.toString()),
        argumentList: I
      }, s).then($e);
    },
    construct(r, a) {
      Do(A);
      const [g, c] = Qg(a);
      return lt(i, n, {
        type: "CONSTRUCT",
        path: t.map((I) => I.toString()),
        argumentList: g
      }, c).then($e);
    }
  });
  return ax(o, i), o;
}
function sx(i) {
  return Array.prototype.concat.apply([], i);
}
function Qg(i) {
  const n = i.map(Rn);
  return [n.map((t) => t[0]), sx(n.map((t) => t[1]))];
}
const nc = /* @__PURE__ */ new WeakMap();
function cx(i, n) {
  return nc.set(i, n), i;
}
function Ix(i) {
  return Object.assign(i, { [Zs]: !0 });
}
function Rn(i) {
  for (const [n, t] of $s)
    if (t.canHandle(i)) {
      const [e, A] = t.serialize(i);
      return [
        {
          type: "HANDLER",
          name: n,
          value: e
        },
        A
      ];
    }
  return [
    {
      type: "RAW",
      value: i
    },
    nc.get(i) || []
  ];
}
function $e(i) {
  switch (i.type) {
    case "HANDLER":
      return $s.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function lt(i, n, t, e) {
  return new Promise((A) => {
    const o = Cx();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function Cx() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function ic() {
  return $0();
}
const ca = De(void 0);
ca.displayName = "CommonThresholdsContext";
function Bx() {
  const i = re(ca);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function rc() {
  return Bx();
}
const wr = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
};
function Qx(i) {
  const n = {};
  n.instruction = i;
  const t = n;
  wr(Ti.REQUEST_CAPTURE, t);
}
class xx {
  isDetectorInitialized;
  assetsDirectoryPath;
  compatibleSamVersion;
  cameraService;
  dispatcher;
  onCaptureData;
  protobuf;
  installationId;
  samVersion;
  currentDetection;
  detections;
  sessionToken;
  analytics;
  transactionCounting;
  constructor(n, t, e, A, o, r, a, g, c) {
    this.assetsDirectoryPath = n, this.compatibleSamVersion = t, this.cameraService = e, this.protobuf = o, this.installationId = r, this.analytics = a, this.dispatcher = A, this.sessionToken = g, this.transactionCounting = c, this.isDetectorInitialized = !1, this.onCaptureData = /* @__PURE__ */ new Map();
  }
  async init() {
    this.verifyEnvironment(), await this.initDetector(this.assetsDirectoryPath);
  }
  destroy() {
    this.detector.terminateSamModule();
  }
  verifyEnvironment() {
    no() && this.handleEnvironmentNotSupported();
  }
  async initDetector(n) {
    await this.detector.initSamModule(location.href, n);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  collectOnCaptureData(n) {
    if (!this.currentDetection) throw new w("Detection not initialized");
    this.onCaptureData.set(this.currentDetection.name, n);
  }
  transitionToDetection(n) {
    const t = this.currentDetection?.name, e = this.detections?.[n];
    if (!e) throw new w("Detection " + n + " not found");
    if (!this.allowedDetectionTransitions[t]?.includes(n)) throw new w("Illegal detection transition: " + t + " -> " + n);
    this.setCurrentDetection(e);
  }
  runDetectionLoop() {
    if (!this.currentDetection) throw new w("Detection not initialized");
    this.currentDetection.run();
  }
  reset() {
    this.currentDetection?.stop(), this.onCaptureData.clear(), this.setDetections(void 0), this.setCurrentDetection(void 0);
  }
  areVersionsCompatible(n) {
    return n === this.compatibleSamVersion;
  }
  getDispatcher() {
    return this.dispatcher;
  }
  getOnCaptureData() {
    return this.onCaptureData;
  }
  getCurrentDetection() {
    return this.currentDetection;
  }
  getSessionToken() {
    return this.sessionToken;
  }
  getAnalytics() {
    return this.analytics;
  }
  getTransactionCounting() {
    return this.transactionCounting;
  }
  getProtobuf() {
    return this.protobuf;
  }
  getInstallationId() {
    return this.installationId;
  }
  getCurrentDetectionName() {
    return this.currentDetection?.name;
  }
  setCurrentDetection(n) {
    this.currentDetection = n, this.dispatcher.dispatchPhaseChangedEvent(n?.name);
  }
  setDetections(n) {
    this.detections = n;
  }
  setSamVersion(n) {
    if (!n || !this.areVersionsCompatible(n))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new w("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = n;
  }
  handleEnvironmentNotSupported() {
    Xr.warn(`
╔════════════════════════════════════════════════════╗
║                                                    ║
║                       WARNING                      ║
║                                                    ║
║ Firefox support for all Innovatrics web components ║
║     is DEPRECATED and will be discontinued in      ║
║                next major release                  ║
║                                                    ║
╚════════════════════════════════════════════════════╝
`);
  }
  setThresholds(n) {
    this.currentDetection?.setThresholds(n);
  }
  static getWorkerPath(n, t) {
    return "" + t.replace(_0, "") + n;
  }
}
const zn = -9289 + -7 * -1327 + 0.5, ac = {};
ac.min = 0.4;
const gc = {};
gc.min = 0.25;
const Dr = {};
Dr.min = 0.2, Dr.max = 0.85;
const sc = {};
sc.max = 30;
const cc = {};
cc.min = 0.05;
const br = {};
br.min = 0.16, br.max = 0.2;
const Ic = {};
Ic.min = 0.3;
const Cc = {};
Cc.max = zn;
const kr = {};
kr.confidence = Ic, kr.status = Cc;
const Me = {};
Me.confidence = ac, Me.sharpness = gc, Me.brightness = Dr, Me.devicePitchAngle = sc, Me.edgeDistanceToImageShorterSideRatio = cc, Me.size = br, Me.mouth = kr;
const Bc = {};
Bc.min = 0.4;
const Qc = {};
Qc.min = 0.25;
const Sr = {};
Sr.min = 0.2, Sr.max = 0.85;
const xc = {};
xc.max = 30;
const Ec = {};
Ec.min = 0.05;
const Gr = {};
Gr.min = 0.16, Gr.max = 0.2;
const dc = {};
dc.min = 0.3;
const lc = {};
lc.max = zn;
const Nr = {};
Nr.confidence = dc, Nr.status = lc;
const We = {};
We.confidence = Bc, We.sharpness = Qc, We.brightness = Sr, We.devicePitchAngle = xc, We.edgeDistanceToImageShorterSideRatio = Ec, We.size = Gr, We.mouth = Nr;
const Rr = {};
Rr.MOBILE = Me, Rr.DESKTOP = We;
const Ex = Rr, uc = -1 * 7833 + -4772 + 5 * 2521 + 0.4, fc = {};
fc.min = 0.4;
const vr = {};
vr.min = 0.16, vr.max = 0.2;
const hc = {};
hc.min = 0.3;
const pc = {};
pc.min = uc;
const Fr = {};
Fr.confidence = hc, Fr.status = pc;
const qo = {};
qo.confidence = fc, qo.size = vr, qo.mouth = Fr;
const mc = {};
mc.min = 0.4;
const Mr = {};
Mr.min = 0.16, Mr.max = 0.2;
const yc = {};
yc.min = 0.3;
const wc = {};
wc.min = uc;
const Wr = {};
Wr.confidence = yc, Wr.status = wc;
const Vo = {};
Vo.confidence = mc, Vo.size = Mr, Vo.mouth = Wr;
const Lr = {};
Lr.MOBILE = qo, Lr.DESKTOP = Vo;
const xg = Lr, vn = 3316 + 2 * 3512 + -8340, dx = 1e4, Zo = {};
Zo.timeout = 4e3, Zo.threshold = 0.7, Zo.instructions = ["mouth_score_too_high", "mouth_score_too_low"];
const hi = Zo, Dc = "SAM v1.50.5 for idcards";
class bc extends xx {
  detector;
  allowedDetectionTransitions;
  medianScore;
  timedCapture;
  detectionFactory;
  phaseThresholds;
  timedCaptureExecutedEventListener;
  dispatcher;
  analytics;
  constructor(n, t, e, A, o, r, a, g, c, I, s, Q, x) {
    super(n, Dc, t, r, a, g, s, Q, x), this.detector = e, this.detectionFactory = A, this.phaseThresholds = o, this.dispatcher = r, this.analytics = s;
    const E = { [M.NEUTRAL]: [M.SMILE], [M.SMILE]: [M.SMILE_MANUAL], [M.SMILE_MANUAL]: [] };
    this.allowedDetectionTransitions = E, this.medianScore = c, this.timedCapture = I;
  }
  getDispatcher() {
    return this.dispatcher;
  }
  getAnalytics() {
    return this.analytics;
  }
  async init() {
    await super.init(), this.initTimedCaptureExecutedEventListener();
    const n = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: vn, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds }, type: M.NEUTRAL }), t = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: vn, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds }, type: M.SMILE }), e = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds }, type: M.SMILE_MANUAL }), A = { [M.NEUTRAL]: n, [M.SMILE]: t, [M.SMILE_MANUAL]: e };
    this.setDetections(A), this.setCurrentDetection(this.detections[M.NEUTRAL]), this.runDetectionLoop();
  }
  reset() {
    super.reset(), this.timedCapture.clear(), this.medianScore?.reset(), this.removeTimedCaptureExecutedEventListener();
  }
  initTimedCaptureExecutedEventListener() {
    this.timedCaptureExecutedEventListener = () => {
      this.onTimedCaptureExecuted();
    }, document.addEventListener(Sn.TIMED_CAPTURE_EXECUTED, this.timedCaptureExecutedEventListener);
  }
  removeTimedCaptureExecutedEventListener() {
    this.timedCaptureExecutedEventListener && document.removeEventListener(Sn.TIMED_CAPTURE_EXECUTED, this.timedCaptureExecutedEventListener);
  }
  onTimedCaptureExecuted() {
    this.currentDetection?.stop(), this.transitionToDetection(M.SMILE_MANUAL), this.runDetectionLoop(), Qx(ko.FIRST_FRAME);
  }
}
class lx {
  assetsDirectoryPath;
  cameraService;
  protobuf;
  installationId;
  analytics;
  dispatcher;
  sessionToken;
  transactionCounting;
  detector;
  setAssetsDirectoryPath(n) {
    return this.assetsDirectoryPath = n, this;
  }
  setCameraService(n) {
    return this.cameraService = n, this;
  }
  setProtobuf(n) {
    return this.protobuf = n, this;
  }
  setInstallationId(n) {
    return this.installationId = n, this;
  }
  setAnalytics(n) {
    return this.analytics = n, this;
  }
  setDispatcher(n) {
    return this.dispatcher = n, this;
  }
  setSessionToken(n) {
    return this.sessionToken = n, this;
  }
  setTransactionCounting(n) {
    return this.transactionCounting = n, this;
  }
  setDetector(n) {
    return this.detector = n, this;
  }
  validateDependencies() {
    if (!this.assetsDirectoryPath) throw new w("AssetsDirectoryPath is required");
    if (!this.cameraService) throw new w("CameraService is required");
    if (!this.protobuf) throw new w("Protobuf is required");
    if (!this.installationId) throw new w("InstallationId is required");
    if (!this.dispatcher) throw new w("Dispatcher is required");
    if (!this.detector) throw new w("Detector is required");
  }
  reset() {
    return this.assetsDirectoryPath = void 0, this.cameraService = void 0, this.protobuf = void 0, this.installationId = void 0, this.analytics = void 0, this.dispatcher = void 0, this.sessionToken = void 0, this.transactionCounting = void 0, this.detector = void 0, this;
  }
}
class ux extends lx {
  detectionFactory;
  phaseThresholds;
  medianScore;
  timedCapture;
  setDetectionFactory(n) {
    return this.detectionFactory = n, this;
  }
  setPhaseThresholds(n) {
    return this.phaseThresholds = n, this;
  }
  setMedianScore(n) {
    return this.medianScore = n, this;
  }
  setTimedCapture(n) {
    return this.timedCapture = n, this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.detectionFactory) throw new w("DetectionFactory is required");
    if (!this.medianScore) throw new w("MedianScore is required");
    if (!this.timedCapture) throw new w("TimedCapture is required");
  }
  reset() {
    return super.reset(), this.detectionFactory = void 0, this;
  }
  build() {
    return this.validateDependencies(), new bc(this.assetsDirectoryPath, this.cameraService, this.detector, this.detectionFactory, this.phaseThresholds, this.dispatcher, this.protobuf, this.installationId, this.medianScore, this.timedCapture, this.analytics, this.sessionToken, this.transactionCounting);
  }
}
const fx = "/dot-assets/smile/dot-C53sD7ri.js";
class rt {
  static _instance;
  lastDetails;
  delayedTime;
  constructor() {
    this.lastDetails = {}, this.delayedTime = -8799 * 1 + 9625 + -826;
  }
  static getInstance() {
    return !this._instance && (this._instance = new rt()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -4 * -1656 + -1 * -1193 + 7817 * -1;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && wr(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
  dispatchCustomEvent(n, t) {
    wr(n, t);
  }
}
const hx = () => "prod".toLowerCase() === "dev";
class px extends rt {
  events;
  constructor(n) {
    super(), this.events = n;
  }
  dispatchDetectionEvent(n) {
    this.dispatchCustomEventOnChange(this.events.DETECTION_CHANGED, n);
  }
  dispatchOnCompleteEvent(n, t) {
    const e = {};
    e.resultData = n, e.content = t, this.dispatchCustomEvent(this.events.ON_COMPLETE, e);
  }
  dispatchPhaseChangedEvent(n) {
    const t = {};
    t.phaseName = n, this.dispatchCustomEventOnChange(this.events.PHASE_CHANGED, t);
  }
  dispatchInstructionChangedEvent(n, t = aC) {
    const e = {};
    e.instructionCode = n.code, e.isEscalated = n.isEscalated ?? !1;
    const A = e;
    this.dispatchDelayedCustomEventOnChange(this.events.INSTRUCTION_CHANGED, A, t);
  }
  dispatchInstructionEscalatedEvent(n) {
    const t = {};
    t.instructionCode = n, this.dispatchCustomEventOnChange(this.events.INSTRUCTION_ESCALATED, t);
  }
  dispatchDevEvent(n) {
    if (!hx() || !n) return;
    const t = {};
    t.candidateSelectionImages = n, this.dispatchCustomEventOnChange(this.events.DEV, t);
  }
}
class mx extends px {
  dispatchTimedCaptureExecuted() {
    this.dispatchCustomEvent(Vs.TIMED_CAPTURE_EXECUTED, {});
  }
}
class yx {
  isCollecting = !0;
  mouthStatuses = [];
  medianScore;
  collectScore(n) {
    if (!this.isCollecting || !n.detectionDetails.processedImage.isInCandidateSelection) return;
    const t = n.detectionDetails.processedImage.detection.mouth.status;
    t < zn && this.mouthStatuses.push(t);
  }
  stopCollectingAndCalculateMedian() {
    this.isCollecting = !1, this.medianScore = this.calculateMedian(this.mouthStatuses);
  }
  get median() {
    return this.medianScore;
  }
  reset() {
    this.isCollecting = !0, this.mouthStatuses = [], this.medianScore = void 0;
  }
  calculateMedian(n) {
    const t = n.sort((o, r) => o - r), e = Math.floor(t.length / (1819 + 9012 * 1 + -10829));
    return t.length % 2 === 30 * -331 + 6567 + 3 * 1121 ? (t[e - (1337 * 7 + -4546 + -1604 * 3)] + t[e]) / 2 : t[e];
  }
}
const wx = -809 * -3 + -660 + 233;
class Eg {
  duration;
  constructor(n) {
    this.duration = n ?? wx;
  }
  candidateSelectionTime = 0;
  candidateSelectionImages = [];
  isInCandidateSelection() {
    return this.candidateSelectionTime > 0;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime = performance.now();
  }
  newCandidate(n) {
    this.candidateSelectionImages.push(n);
  }
  getCandidateSelectionImages() {
    return this.candidateSelectionImages;
  }
  isCandidateSelectionDone() {
    return this.isInCandidateSelection() && performance.now() - this.candidateSelectionTime > this.duration;
  }
  reset() {
    this.candidateSelectionTime = 6113 * 1 + 360 + -6473, this.candidateSelectionImages = [];
  }
}
function Fn(i) {
  const { height: n, width: t } = cC(i), e = (i.width - t) / (-3713 + 363 * -2 + 4441 * 1), A = (i.height - n) / 2, o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function kc(i, n, t) {
  const { height: e, width: A } = t, o = _n(i.width, i.height), r = A - o * n * (1 * 7715 + -1 * -9197 + 10 * -1691), a = e - o * n * (-1 * 658 + 1637 + 1 * -977), g = (i.width - r) / (-4082 + -4084 * -1), c = (i.height - a) / (20 * -439 + 4 * 729 + -5866 * -1), I = {};
  return I.shiftX = g, I.shiftY = c, I.width = r, I.height = a, I;
}
function It(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
const Sc = (i, n) => {
  const { faceCenter: t, faceSize: e } = i, A = QC(e, n), o = {};
  o.x = t.x, o.y = t.y - A;
  const r = {};
  r.x = t.x + A, r.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + A;
  const g = {};
  g.x = t.x - A, g.y = t.y;
  const c = {};
  return c.top = o, c.right = r, c.bottom = a, c.left = g, H0(c);
}, Gc = (i, n, t = hC) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), Mn = async (i) => Gc(i, -9216 + -11 * -846), Dx = async (i) => Gc(i, 6395 * 1 + -2180 * -1 + -15 * 565, "image/png"), Nc = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, 1724 + 1724 * -1, -1841 + -1 * -1841, t.width, t.height), t;
}, Rc = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(4998 + 2 * -2499, -8552 + 4276 * 2, i.width, i.height);
  return t;
};
async function bx(i, n) {
  const t = Nc(i, n);
  return Dx(t);
}
const vc = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(n.topLeft.x, n.topLeft.y, n.width, n.height)) : (A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height)), A.stroke());
}, pi = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, a = {};
  a.x = A, a.y = o;
  const g = {};
  g.topLeft = a, g.width = r, g.height = e, g.color = t, vc(i, g, t);
}, eo = (i, n, t, e = -9280 + 10 * 928) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(n.x + e, n.y + e, 7, 1999 * 3 + 2039 + -8029), A.beginPath());
};
function kx(i, n) {
  const { bottomRight: t, faceCenter: e, topLeft: A } = n, o = {};
  o.topLeft = A, o.width = t.x - A.x, o.height = t.y - A.y, vc(i, o, "rgba(255, 0, 0, 0.3)", !0), eo(i, e, "lime");
}
function Sx(i, n, t) {
  const e = Sc(n, t);
  Object.values(e).map((A) => eo(i, A, "orange"));
}
class Fc extends w {
  cause;
  constructor(n) {
    super(n.message), this.name = "ProxyError", this.cause = n, this.logError(n);
  }
  logError(n) {
  }
}
class Mc extends Array {
  #A;
  constructor(n) {
    super(), this.#A = n;
  }
  get size() {
    return this.#A;
  }
  pushFixed(...n) {
    if (n.length > this.#A) {
      const t = n.slice(-this.#A);
      this.push(...t);
      return;
    }
    this.length === this.#A && this.splice(7400 + -5 * -1517 + 45 * -333, n.length), this.push(...n);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(6987 + 17 * -411);
  }
}
class Gx {
  detectionRecord;
  imagesWithTimestampForDuplicateDetection;
  validationService;
  constructor(n) {
    this.validationService = n, this.imagesWithTimestampForDuplicateDetection = new Mc(lC), this.detectionRecord = [];
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / pC, A = e / 2, o = n.length / (6554 * 1 + -133 + -6419), r = n.slice(o - A, o + A), a = await qs(r), g = {};
    g.imageHash = a, g.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(g);
  }
  optimizeImageBeforeDetection(n) {
    return { data: Rc(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  detect(n, t, e) {
    try {
      return this.detector.detect(n, t, e);
    } catch (A) {
      throw A instanceof Error && A.message.includes("Proxy has been released and is not useable") ? new Fc(A) : w.fromError(A);
    }
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = H0(n), r = {};
    r.detectedObject = o, r.timestamp = A;
    const a = r, g = this.validationService.validateDetectedObject(o, t);
    if (g.result.get("isPresent")) {
      const c = {};
      c.image = e, c.timestamp = A, this.collectImagesForDuplicateDetection(c);
    }
    return this.detectionRecord.push(a), { detection: o, validationResult: g.result, isValid: g.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class mi extends Gx {
  className = "FaceImageProcessor";
  detector;
  constructor(n, t) {
    super(t), this.detector = n;
  }
  optimizeImageBeforeDetection(n) {
    const t = Fn(n), e = Nc(n, t);
    return super.optimizeImageBeforeDetection(e);
  }
  async process({ image: n, timestamp: t }) {
    const e = this.optimizeImageBeforeDetection(n), A = {};
    A.height = n.height, A.width = n.width;
    let o = await this.detect(e.data, e.resolution, A);
    o = this.transformDetectionCoordinatesRelativeToFullFrameImage(o, Fn(n));
    const r = {};
    return r.detectedObject = o, r.image = n, r.imageData = e.data, r.timestamp = t, this.processDetectedObject(r);
  }
  transformDetectionCoordinatesRelativeToFullFrameImage(n, t) {
    return { ...n, leftEye: { ...n.leftEye, center: It(n.leftEye.center, t) }, rightEye: { ...n.rightEye, center: It(n.rightEye.center, t) }, mouth: { ...n.mouth, center: It(n.mouth.center, t) }, topLeft: It(n.topLeft, t), bottomRight: It(n.bottomRight, t), faceCenter: It(n.faceCenter, t) };
  }
}
class Nx {
  instructionCodes;
  trackingState;
  contextDescriptor;
  instructionCodeCollector;
  config;
  analytics;
  dispatcher;
  constructor({ analytics: n, config: t, contextDescriptor: e, dispatcher: A, instructionCodeCollector: o, trackingState: r }) {
    this.instructionCodeCollector = o, this.dispatcher = A, this.config = t, this.analytics = n, this.trackingState = r, this.contextDescriptor = e, this.instructionCodes = new Map(t.instructions.map((a) => [a, !1]));
  }
  get getInstructionCodes() {
    return this.instructionCodes;
  }
  canEscalate(n) {
    const t = this.instructionCodeCollector.get();
    return !this.instructionCodeCollector.hasMaxCapacity || !t.includes(n) ? !1 : t.filter((A) => A === n).length / t.length >= this.config.threshold;
  }
  trackEscalated(n) {
    this.trackingState.hasTracked(n) || (this.analytics?.["trackEscalated"]?.(n, this.contextDescriptor), this.trackingState.markAsTracked(n));
  }
  collect(n) {
    this.instructionCodeCollector.pushWithTimestamp(n);
  }
  isEscalated(n) {
    return this.instructionCodes.get(n) ?? !1;
  }
  escalate() {
    for (const [n, t] of this.instructionCodes.entries())
      !t && this.canEscalate(n) && (this.instructionCodes.set(n, !0), this.dispatcher.dispatchInstructionEscalatedEvent(n), this.trackEscalated(n));
  }
  reset() {
    this.instructionCodes.forEach((n, t) => {
      this.instructionCodes.set(t, !1);
    }), this.trackingState.reset(), this.instructionCodeCollector.clear();
  }
}
class Rx {
  trackedInstructionCodes = /* @__PURE__ */ new Set();
  hasTracked(n) {
    return this.trackedInstructionCodes.has(n);
  }
  markAsTracked(n) {
    this.trackedInstructionCodes.add(n);
  }
  reset() {
    this.trackedInstructionCodes.clear();
  }
}
class vx extends Array {
  #A = 3261 * 1 + 7010 + -10271;
  #e = [];
  #t = !1;
  constructor(n) {
    super(), this.#A = n;
  }
  clearAfterTimeout() {
    if (this.#e.length === 2 * -4075 + 4902 + 3248) return;
    const n = Date.now(), t = this.#e.findLastIndex((e) => n - e > this.#A);
    t !== -1 && (this.#t = !0, this.splice(-9 * -1109 + -3474 + -3 * 2169, t + (-5673 + -2 * -2837)), this.#e.splice(0, t + 1));
  }
  pushWithTimestamp(...n) {
    this.clearAfterTimeout();
    const t = Array(n.length).fill(Date.now());
    this.push(...n), this.#e.push(...t);
  }
  get() {
    return this.clearAfterTimeout(), Array.from(this);
  }
  get hasMaxCapacity() {
    return this.#t;
  }
  clear() {
    this.splice(8794 + 1 * -7559 + -1235), this.#e.splice(4790 * 2 + -9111 + -469), this.#t = !1;
  }
}
class Wc {
  controller;
  constructor(n) {
    this.controller = n;
  }
  onCapture(n) {
    this.controller.collectOnCaptureData(n), this.controller.getDispatcher().dispatchDevEvent(n.metadata.candidateSelectionImages);
  }
  onDetection(n) {
    const { processedImage: t } = n.detectionDetails;
    this.controller.getDispatcher().dispatchDetectionEvent(n);
    const e = {};
    e.code = t.instructionCode, e.isEscalated = t.isEscalated, this.controller.getDispatcher().dispatchInstructionChangedEvent(e);
  }
}
class Fx extends Wc {
  controller;
  constructor(n) {
    super(n), this.controller = n;
  }
  onCapture(n) {
    super.onCapture(n), this.controller.medianScore.stopCollectingAndCalculateMedian(), this.controller.transitionToDetection(M.SMILE), this.controller.timedCapture.start(), this.controller.runDetectionLoop();
  }
  onDetection(n) {
    super.onDetection(n), this.controller.medianScore.collectScore(n);
  }
}
class Lc {
  name;
  isRunning;
  fpsOfAllImages;
  captureProcessStartTime;
  cameraService;
  imageProcessor;
  callbacks;
  checkToInstructionCodeMap;
  fallbackInstruction;
  instructionEscalation;
  constructor(n, t, e, A, o, r, a) {
    this.name = n, this.cameraService = t, this.imageProcessor = e, this.callbacks = A, this.checkToInstructionCodeMap = o, this.fallbackInstruction = r, this.instructionEscalation = a, this.fpsOfAllImages = new Mc(2554 + -2 * -308 + -3140), this.isRunning = !0;
  }
  async safeIterate() {
    try {
      await this.iterate();
    } catch (n) {
      if (!(n instanceof Fc)) throw n;
      this.stop();
      return;
    }
  }
  async run() {
    for (this.captureProcessStartTime = Date.now(); this.isRunning; )
      await this.safeIterate();
    return this;
  }
  stop() {
    this.isRunning = !1;
  }
  onDetection(n, t) {
    const e = { ...n, avgFps: ft(gi(this.fpsOfAllImages)) }, A = {};
    A.detectionDetails = e, A.image = t, this.callbacks.onDetection(A);
  }
  async onCapture(n, t, e) {
    if (!this.captureProcessStartTime) throw new w("Capture process start time is not set");
    if (!this.isRunning) return;
    this.stop();
    const A = { candidateSelectionImages: e, croppedImageWithPosition: await this.getCroppedImageWithPosition(n.image, t), hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), captureProcessTime: this.getDetectionEndTime(this.captureProcessStartTime), averageFps: ft(gi(this.fpsOfAllImages)), deviceName: await this.cameraService.getDeviceName(), facingMode: this.cameraService.getCameraSettings().facingMode, cameraProperties: await this.cameraService.getCameraProperties(), detectionRecord: this.imageProcessor.detectionRecord, performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), timestamp: n.timestamp }, o = {};
    o.resultImage = n.image, o.detectedObject = t, o.metadata = A, o.timestamp = n.timestamp, this.callbacks.onCapture(o);
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = Rc(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), a = await bx(n, r), g = {};
    g.x = r.shiftX, g.y = r.shiftY;
    const c = g, I = {};
    return I.croppedImage = a, I.topLeftCorner = c, I;
  }
  collectAndEscalate(n) {
    return this.instructionEscalation ? (this.instructionEscalation.collect(n), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(n)) : !1;
  }
  getDetectionDetails(n, t) {
    const e = this.getDetectionEndTime(n.timestamp), A = ft((-1177 * -5 + -6858 + -1 * -1973) / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = n.image.width, o.height = n.image.height;
    const r = o, a = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), g = this.getInstructionCode(a[845 + 1 * -542 + -303 * 1], t), c = this.collectAndEscalate(g), I = {};
    return I.detection = t.detection, I.instructionCode = g, I.invalidValidators = a, I.isInCandidateSelection = !1, I.isEscalated = c, { processedImage: I, detectionTime: e, fps: A, avgFps: ft(gi(this.fpsOfAllImages)), resolution: r };
  }
  getDetectionEndTime(n) {
    return Date.now() - n;
  }
  getInvalidInstructions(n, t) {
    const e = [];
    return Array.from(n).forEach(([A, o]) => {
      !o && e.push(t[A]);
    }), e;
  }
  async sleep(n) {
    await $i(Math.max(Oa.max - n, Oa.min));
  }
  setThresholds(n) {
    this.imageProcessor.validationService.setThresholds(n);
  }
  isDetectionRunning() {
    return this.isRunning;
  }
}
class Mx extends Lc {
  instructionCodeMap;
  lastImage;
  bestImage;
  candidateSelection;
  constructor(n, t, ...e) {
    super(...e), this.candidateSelection = n, this.instructionCodeMap = t, this.lastImage = void 0, this.bestImage = void 0;
  }
  async iterate() {
    if (this.candidateSelection.isCandidateSelectionDone()) {
      await this.onCandidateSelectionDone();
      return;
    }
    const n = this.cameraService.takePhoto(), t = await this.processTakenPhoto(n);
    this.candidateSelection.isInCandidateSelection() ? this.saveBetterImage(n, t) : this.tryInitCandidatePhase(n, t);
    const e = this.getDetectionDetails(n, t);
    this.onDetection(e, n.image);
    const A = {};
    A.instructionCode = e.processedImage.instructionCode, A.isValid = t.isValid, A.takenPhoto = n, A.detection = t.detection, this.lastImage = A, await this.sleep(e.detectionTime);
  }
  getDetectionDetails(n, t) {
    const e = super.getDetectionDetails(n, t);
    return { ...e, processedImage: { ...e.processedImage, isInCandidateSelection: this.candidateSelection.isInCandidateSelection() } };
  }
  async processTakenPhoto(n) {
    try {
      return await this.imageProcessor.process(n);
    } catch (t) {
      throw t instanceof w ? t : w.fromError(t);
    }
  }
  saveBetterImage(n, t) {
    if (!(this.bestImage && t.isValid && this.isNewImageBetter(this.bestImage.detection, t.detection))) return;
    const A = {};
    A.takenPhoto = n, A.detection = t.detection;
    const o = A;
    this.bestImage = o, this.candidateSelection.newCandidate(o);
  }
  tryInitCandidatePhase(n, t) {
    if (!(this.lastImage?.isValid && t.isValid)) return;
    const A = {};
    A.takenPhoto = n, A.detection = t.detection;
    const o = A;
    this.isNewImageBetter(this.lastImage.detection, o.detection) ? this.bestImage = o : this.bestImage = this.lastImage, this.candidateSelection.newCandidate(this.lastImage), this.candidateSelection.newCandidate(o), this.candidateSelection.candidateSelectionBegun();
  }
  async onCandidateSelectionDone() {
    const { detection: n, takenPhoto: t } = this.bestImage || {};
    if (t && n) await this.onCapture(t, n, this.candidateSelection.getCandidateSelectionImages());
    else throw new w("Something went wrong during capturing an image");
  }
  getInstructionCode(n, t) {
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage?.isValid && t?.isValid ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t?.isValid ? this.lastImage.instructionCode : n ?? this.fallbackInstruction;
  }
  isNewImageBetter(n, t) {
    return t.sharpness > n.sharpness;
  }
}
class Oc {
  name;
  cameraService;
  imageProcessor;
  callbacks;
  checkToInstructionCodeMap;
  fallbackInstruction;
  instructionEscalation;
  setName(n) {
    return this.name = n, this;
  }
  setCameraService(n) {
    return this.cameraService = n, this;
  }
  setImageProcessor(n) {
    return this.imageProcessor = n, this;
  }
  setCallbacks(n) {
    return this.callbacks = n, this;
  }
  setCheckToInstructionCodeMap(n) {
    return this.checkToInstructionCodeMap = n, this;
  }
  setFallbackInstruction(n) {
    return this.fallbackInstruction = n, this;
  }
  setInstructionEscalation(n) {
    return this.instructionEscalation = n, this;
  }
  reset() {
    return this.name = void 0, this.cameraService = void 0, this.imageProcessor = void 0, this.callbacks = void 0, this.instructionEscalation = void 0, this.checkToInstructionCodeMap = void 0, this.fallbackInstruction = void 0, this;
  }
  validateDependencies() {
    if (!this.name) throw new w("Name is required");
    if (!this.cameraService) throw new w("CameraService is required");
    if (!this.imageProcessor) throw new w("ImageProcessor is required");
    if (!this.callbacks) throw new w("Callbacks is required");
    if (!this.checkToInstructionCodeMap) throw new w("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new w("FallbackInstruction is required");
  }
}
class Jc extends Oc {
  instructionCodeMap;
  candidateSelection;
  setInstructionCodeMap(n) {
    return this.instructionCodeMap = n, this;
  }
  setCandidateSelection(n) {
    return this.candidateSelection = n, this;
  }
  reset() {
    return super.reset(), this.instructionCodeMap = void 0, this.candidateSelection = void 0, this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.instructionCodeMap) throw new w("instructionCodeMap is required");
    if (!this.candidateSelection) throw new w("candidateSelection is required");
  }
  build() {
    return this.validateDependencies(), new Mx(this.candidateSelection, this.instructionCodeMap, this.name, this.cameraService, this.imageProcessor, this.callbacks, this.checkToInstructionCodeMap, this.fallbackInstruction, this.instructionEscalation);
  }
}
class Wx extends Jc {
}
class Uc {
  #A;
  #e;
  #t;
  constructor(n) {
    this.#A = n, this.#e = /* @__PURE__ */ new Map();
  }
  validate() {
    this.#A.forEach((n) => {
      this.#e.set(n.name, n.evaluate());
    }), this.#t = void 0;
  }
  isValid() {
    return this.#t === void 0 && (this.#t = Array.from(this.#e.values()).every((n) => n)), this.#t;
  }
  get result() {
    return this.#e;
  }
  get validators() {
    return this.#A;
  }
}
class Yc {
  className;
  thresholds;
  constructor(n, t) {
    this.className = n, this.thresholds = t;
  }
  getThresholds() {
    return this.thresholds;
  }
  setThresholds(n) {
    this.thresholds = n;
  }
}
class Ee {
  #A;
  #e;
  constructor(n, t) {
    this.#A = n, this.#e = t;
  }
  get threshold() {
    return this.#e;
  }
  get name() {
    return this.#A;
  }
  isValueBelowThreshold(n) {
    return n < this.#e;
  }
  isValueAboveThreshold(n) {
    return n > this.#e;
  }
}
const Lx = "isNotDim";
class Ox extends Ee {
  #A;
  constructor(n, t) {
    super(Lx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const Jx = "isNotSmall";
class Tc extends Ee {
  #A;
  constructor(n, t) {
    super(Jx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const Ux = "isNotBright";
class Yx extends Ee {
  #A;
  constructor(n, t) {
    super(Ux, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const Tx = "isPresent";
class Pc extends Ee {
  #A;
  constructor(n, t) {
    super(Tx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const Px = "isSharp";
class _x extends Ee {
  #A;
  constructor(n, t) {
    super(Px, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const Hx = "isMouthPresent";
class _c extends Ee {
  #A;
  constructor(n, t) {
    super(Hx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const Kx = "isMouthStatusNotTooHigh";
class jx extends Ee {
  #A;
  constructor(n, t) {
    super(Kx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const qx = "isNotLarge";
class Hc extends Ee {
  #A;
  constructor(n, t) {
    super(qx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const Vx = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, Zx = (i, n) => Object.values(i).every((t) => Vx(t, n)), zx = "isNotOutOfBounds";
class Xx extends Ee {
  #A;
  #e;
  constructor(n, t, e) {
    super(zx, n), this.#A = t, this.#e = e;
  }
  evaluate() {
    const n = kc(this.#e, this.threshold, Fn(this.#e)), t = Sc(this.#A, this.#e);
    return Zx(t, n);
  }
}
class $x extends Yc {
  constructor(n) {
    super("NeutralValidationService", n);
  }
  validateDetectedObject(n, t) {
    const e = this.getThresholds(), A = new Uc([new Pc(e.confidence.min, n.confidence), new Tc(e.size.min, n.faceSize), new Hc(e.size.max, n.faceSize), new _x(e.sharpness.min, n.sharpness), new Ox(e.brightness.min, n.brightness), new Yx(e.brightness.max, n.brightness), new Xx(e.edgeDistanceToImageShorterSideRatio.min, n, t), new _c(e.mouth.confidence.min, n.mouth.confidence), new jx(e.mouth.status.max, n.mouth.status)]);
    return A.validate(), A;
  }
}
class Kc extends Wc {
  controller;
  constructor(n) {
    super(n), this.controller = n;
  }
  async onCapture(n) {
    super.onCapture(n), this.controller.getTransactionCounting()?.trackTransaction(), this.controller.timedCapture.clear();
    const t = await this.controller.getProtobuf().createMessage({ onCaptureData: this.controller.getOnCaptureData(), sessionToken: this.controller.getSessionToken(), installationId: await this.controller.getInstallationId().get(), video: this.controller.cameraService.videoRecorder?.getRecording() });
    this.dispatchOnCompleteEvent(t), this.controller.getAnalytics()?.trackCaptureProcess(this.controller.getOnCaptureData());
  }
  async dispatchOnCompleteEvent(n) {
    const t = this.controller.getOnCaptureData(), e = t.get(M.NEUTRAL), A = t.get(M.SMILE) ?? t.get(M.SMILE_MANUAL);
    if (!e || !A) throw new w("Incomplete onCapture data for smile liveness");
    const { detectedObject: o, resultImage: r } = e, { detectedObject: a, resultImage: g } = A, c = {};
    c.width = r.width, c.height = r.height;
    const I = c, s = await Mn(r), Q = await Mn(g), x = {};
    x.detection = o, x.imageResolution = I;
    const E = {};
    E.data = x, E.image = s;
    const C = E, l = {};
    l.detection = a, l.imageResolution = I;
    const f = {};
    f.data = l, f.image = Q;
    const h = f, p = {};
    p.neutralPhaseImageWithMetadata = C, p.smilePhaseImageWithMetadata = h;
    const m = p;
    this.controller.getDispatcher().dispatchOnCompleteEvent(m, n);
  }
  onDetection(n) {
    super.onDetection(n);
  }
}
class AE extends Kc {
}
class eE extends Jc {
}
const tE = "isMouthStatusNotTooLow";
class oE extends Ee {
  #A;
  constructor(n, t) {
    super(tE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
class dg extends Yc {
  controller;
  constructor(n, t) {
    super("SmileValidationService", n), this.controller = t;
  }
  getMouthStatusThreshold(n) {
    const t = this.controller.medianScore.median;
    return n.mouth.status.min + (t ?? zn);
  }
  validateDetectedObject(n) {
    const t = this.getThresholds(), e = new Uc([new Pc(t.confidence.min, n.confidence), new _c(t.mouth.confidence.min, n.mouth.confidence), new Tc(t.size.min, n.faceSize), new Hc(t.size.max, n.faceSize), new oE(this.getMouthStatusThreshold(t), n.mouth.status)]);
    return e.validate(), e;
  }
}
class nE extends Kc {
}
class iE extends Lc {
  #A;
  #e;
  constructor(...n) {
    super(...n), this.#A = void 0, this.#e = void 0, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(n) {
    return n.detail?.["instruction"] ? Object.values(ko).includes(n.detail?.["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    this.#e = (n) => {
      this.isRequestCaptureEventValid(n) && (this.#A = n.detail?.["instruction"]);
    }, document.addEventListener(Ti.REQUEST_CAPTURE, this.#e);
  }
  async iterate() {
    const n = this.cameraService.takePhoto(), t = await this.processTakenPhoto(n), e = this.getDetectionDetails(n, t);
    if (this.onDetection(e, n.image), this.isCaptureDone(t)) {
      await this.onCaptureDone(n, t.detection);
      return;
    }
    await this.sleep(e.detectionTime);
  }
  getInstructionCode(n) {
    return n ?? this.fallbackInstruction;
  }
  isCaptureDone(n) {
    return this.#A ? this.#A === ko.FIRST_FRAME ? !0 : this.#A === ko.FIRST_VALID_FRAME ? n.isValid : !1 : !1;
  }
  async processTakenPhoto(n) {
    try {
      return await this.imageProcessor.process(n);
    } catch (t) {
      throw t instanceof w ? t : w.fromError(t);
    }
  }
  async onCaptureDone(n, t) {
    await this.onCapture(n, t), this.#A = void 0;
  }
  stop() {
    super.stop(), this.#e && document.removeEventListener(Ti.REQUEST_CAPTURE, this.#e);
  }
}
class rE extends Oc {
  build() {
    return this.validateDependencies(), new iE(this.name, this.cameraService, this.imageProcessor, this.callbacks, this.checkToInstructionCodeMap, this.fallbackInstruction, this.instructionEscalation);
  }
}
class aE extends rE {
}
class gE {
  createDetection({ params: n, type: t }) {
    const { cameraService: e, candidateSelectionDuration: A, controller: o, detector: r, phaseThresholds: a } = n;
    switch (t) {
      case M.SMILE:
        return this.createSmileDetection(o, r, e, a, A);
      case M.NEUTRAL:
        return this.createNeutralDetection(o, r, e, a, A);
      case M.SMILE_MANUAL:
        return this.createSmileManualDetection(o, r, e, a);
      default:
        throw new Error("Unknown phase: " + t);
    }
  }
  createNeutralDetection(n, t, e, A, o = vn) {
    const r = new Wx(), a = new $x(A[M.NEUTRAL]), g = new Fx(n), c = new mi(t, a), I = new Eg(o), s = this.createInstructionEscalation(n, M.NEUTRAL);
    return r.setName(M.NEUTRAL), r.setCandidateSelection(I), r.setCameraService(e), r.setCallbacks(g), r.setCheckToInstructionCodeMap(oi), r.setFallbackInstruction(rA.FACE_NOT_PRESENT), r.setInstructionCodeMap(rA), r.setInstructionEscalation(s), r.setImageProcessor(c), r.build();
  }
  createSmileDetection(n, t, e, A, o = vn) {
    const r = new eE(), a = new dg(A[M.SMILE], n), g = new AE(n), c = new mi(t, a), I = new Eg(o), s = this.createInstructionEscalation(n, M.SMILE);
    return r.setName(M.SMILE), r.setCandidateSelection(I), r.setCameraService(e), r.setCallbacks(g), r.setCheckToInstructionCodeMap(oi), r.setFallbackInstruction(rA.FACE_NOT_PRESENT), r.setInstructionEscalation(s), r.setInstructionCodeMap(rA), r.setImageProcessor(c), r.build();
  }
  createSmileManualDetection(n, t, e, A) {
    const o = new aE(), r = new dg(A[M.SMILE], n), a = new nE(n), g = new mi(t, r), c = this.createInstructionEscalation(n, M.SMILE_MANUAL);
    return o.setName(M.SMILE_MANUAL), o.setCameraService(e), o.setCallbacks(a), o.setCheckToInstructionCodeMap(oi), o.setFallbackInstruction(rA.FACE_NOT_PRESENT), o.setInstructionEscalation(c), o.setImageProcessor(g), o.build();
  }
  createInstructionEscalation(n, t) {
    const e = new Rx();
    return new Nx({ instructionCodeCollector: new vx(hi.timeout), dispatcher: n.getDispatcher(), config: { threshold: hi.threshold, instructions: hi.instructions }, trackingState: e, analytics: n.getAnalytics(), contextDescriptor: t });
  }
}
var Ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, lg = {}, yi = {}, wi, ug;
function sE() {
  if (ug) return wi;
  ug = 1, wi = i;
  function i(n, t) {
    for (var e = new Array(arguments.length - 1), A = 0, o = 2, r = !0; o < arguments.length; )
      e[A++] = arguments[o++];
    return new Promise(function(a, g) {
      e[A] = function(c) {
        if (r)
          if (r = !1, c)
            g(c);
          else {
            for (var I = new Array(arguments.length - 1), s = 0; s < I.length; )
              I[s++] = arguments[s];
            a.apply(null, I);
          }
      };
      try {
        n.apply(t || null, e);
      } catch (c) {
        r && (r = !1, g(c));
      }
    });
  }
  return wi;
}
var fg = {}, hg;
function cE() {
  return hg || (hg = 1, (function(i) {
    var n = i;
    n.length = function(r) {
      var a = r.length;
      if (!a)
        return 0;
      for (var g = 0; --a % 4 > 1 && r.charAt(a) === "="; )
        ++g;
      return Math.ceil(r.length * 3) / 4 - g;
    };
    for (var t = new Array(64), e = new Array(123), A = 0; A < 64; )
      e[t[A] = A < 26 ? A + 65 : A < 52 ? A + 71 : A < 62 ? A - 4 : A - 59 | 43] = A++;
    n.encode = function(r, a, g) {
      for (var c = null, I = [], s = 0, Q = 0, x; a < g; ) {
        var E = r[a++];
        switch (Q) {
          case 0:
            I[s++] = t[E >> 2], x = (E & 3) << 4, Q = 1;
            break;
          case 1:
            I[s++] = t[x | E >> 4], x = (E & 15) << 2, Q = 2;
            break;
          case 2:
            I[s++] = t[x | E >> 6], I[s++] = t[E & 63], Q = 0;
            break;
        }
        s > 8191 && ((c || (c = [])).push(String.fromCharCode.apply(String, I)), s = 0);
      }
      return Q && (I[s++] = t[x], I[s++] = 61, Q === 1 && (I[s++] = 61)), c ? (s && c.push(String.fromCharCode.apply(String, I.slice(0, s))), c.join("")) : String.fromCharCode.apply(String, I.slice(0, s));
    };
    var o = "invalid encoding";
    n.decode = function(r, a, g) {
      for (var c = g, I = 0, s, Q = 0; Q < r.length; ) {
        var x = r.charCodeAt(Q++);
        if (x === 61 && I > 1)
          break;
        if ((x = e[x]) === void 0)
          throw Error(o);
        switch (I) {
          case 0:
            s = x, I = 1;
            break;
          case 1:
            a[g++] = s << 2 | (x & 48) >> 4, s = x, I = 2;
            break;
          case 2:
            a[g++] = (s & 15) << 4 | (x & 60) >> 2, s = x, I = 3;
            break;
          case 3:
            a[g++] = (s & 3) << 6 | x, I = 0;
            break;
        }
      }
      if (I === 1)
        throw Error(o);
      return g - c;
    }, n.test = function(r) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
    };
  })(fg)), fg;
}
var Di, pg;
function IE() {
  if (pg) return Di;
  pg = 1, Di = i;
  function i() {
    this._listeners = {};
  }
  return i.prototype.on = function(n, t, e) {
    return (this._listeners[n] || (this._listeners[n] = [])).push({
      fn: t,
      ctx: e || this
    }), this;
  }, i.prototype.off = function(n, t) {
    if (n === void 0)
      this._listeners = {};
    else if (t === void 0)
      this._listeners[n] = [];
    else
      for (var e = this._listeners[n], A = 0; A < e.length; )
        e[A].fn === t ? e.splice(A, 1) : ++A;
    return this;
  }, i.prototype.emit = function(n) {
    var t = this._listeners[n];
    if (t) {
      for (var e = [], A = 1; A < arguments.length; )
        e.push(arguments[A++]);
      for (A = 0; A < t.length; )
        t[A].fn.apply(t[A++].ctx, e);
    }
    return this;
  }, Di;
}
var bi, mg;
function CE() {
  if (mg) return bi;
  mg = 1, bi = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? (function() {
      var r = new Float32Array([-0]), a = new Uint8Array(r.buffer), g = a[3] === 128;
      function c(x, E, C) {
        r[0] = x, E[C] = a[0], E[C + 1] = a[1], E[C + 2] = a[2], E[C + 3] = a[3];
      }
      function I(x, E, C) {
        r[0] = x, E[C] = a[3], E[C + 1] = a[2], E[C + 2] = a[1], E[C + 3] = a[0];
      }
      o.writeFloatLE = g ? c : I, o.writeFloatBE = g ? I : c;
      function s(x, E) {
        return a[0] = x[E], a[1] = x[E + 1], a[2] = x[E + 2], a[3] = x[E + 3], r[0];
      }
      function Q(x, E) {
        return a[3] = x[E], a[2] = x[E + 1], a[1] = x[E + 2], a[0] = x[E + 3], r[0];
      }
      o.readFloatLE = g ? s : Q, o.readFloatBE = g ? Q : s;
    })() : (function() {
      function r(g, c, I, s) {
        var Q = c < 0 ? 1 : 0;
        if (Q && (c = -c), c === 0)
          g(1 / c > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), I, s);
        else if (isNaN(c))
          g(2143289344, I, s);
        else if (c > 34028234663852886e22)
          g((Q << 31 | 2139095040) >>> 0, I, s);
        else if (c < 11754943508222875e-54)
          g((Q << 31 | Math.round(c / 1401298464324817e-60)) >>> 0, I, s);
        else {
          var x = Math.floor(Math.log(c) / Math.LN2), E = Math.round(c * Math.pow(2, -x) * 8388608) & 8388607;
          g((Q << 31 | x + 127 << 23 | E) >>> 0, I, s);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function a(g, c, I) {
        var s = g(c, I), Q = (s >> 31) * 2 + 1, x = s >>> 23 & 255, E = s & 8388607;
        return x === 255 ? E ? NaN : Q * (1 / 0) : x === 0 ? Q * 1401298464324817e-60 * E : Q * Math.pow(2, x - 150) * (E + 8388608);
      }
      o.readFloatLE = a.bind(null, e), o.readFloatBE = a.bind(null, A);
    })(), typeof Float64Array < "u" ? (function() {
      var r = new Float64Array([-0]), a = new Uint8Array(r.buffer), g = a[7] === 128;
      function c(x, E, C) {
        r[0] = x, E[C] = a[0], E[C + 1] = a[1], E[C + 2] = a[2], E[C + 3] = a[3], E[C + 4] = a[4], E[C + 5] = a[5], E[C + 6] = a[6], E[C + 7] = a[7];
      }
      function I(x, E, C) {
        r[0] = x, E[C] = a[7], E[C + 1] = a[6], E[C + 2] = a[5], E[C + 3] = a[4], E[C + 4] = a[3], E[C + 5] = a[2], E[C + 6] = a[1], E[C + 7] = a[0];
      }
      o.writeDoubleLE = g ? c : I, o.writeDoubleBE = g ? I : c;
      function s(x, E) {
        return a[0] = x[E], a[1] = x[E + 1], a[2] = x[E + 2], a[3] = x[E + 3], a[4] = x[E + 4], a[5] = x[E + 5], a[6] = x[E + 6], a[7] = x[E + 7], r[0];
      }
      function Q(x, E) {
        return a[7] = x[E], a[6] = x[E + 1], a[5] = x[E + 2], a[4] = x[E + 3], a[3] = x[E + 4], a[2] = x[E + 5], a[1] = x[E + 6], a[0] = x[E + 7], r[0];
      }
      o.readDoubleLE = g ? s : Q, o.readDoubleBE = g ? Q : s;
    })() : (function() {
      function r(g, c, I, s, Q, x) {
        var E = s < 0 ? 1 : 0;
        if (E && (s = -s), s === 0)
          g(0, Q, x + c), g(1 / s > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), Q, x + I);
        else if (isNaN(s))
          g(0, Q, x + c), g(2146959360, Q, x + I);
        else if (s > 17976931348623157e292)
          g(0, Q, x + c), g((E << 31 | 2146435072) >>> 0, Q, x + I);
        else {
          var C;
          if (s < 22250738585072014e-324)
            C = s / 5e-324, g(C >>> 0, Q, x + c), g((E << 31 | C / 4294967296) >>> 0, Q, x + I);
          else {
            var l = Math.floor(Math.log(s) / Math.LN2);
            l === 1024 && (l = 1023), C = s * Math.pow(2, -l), g(C * 4503599627370496 >>> 0, Q, x + c), g((E << 31 | l + 1023 << 20 | C * 1048576 & 1048575) >>> 0, Q, x + I);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function a(g, c, I, s, Q) {
        var x = g(s, Q + c), E = g(s, Q + I), C = (E >> 31) * 2 + 1, l = E >>> 20 & 2047, f = 4294967296 * (E & 1048575) + x;
        return l === 2047 ? f ? NaN : C * (1 / 0) : l === 0 ? C * 5e-324 * f : C * Math.pow(2, l - 1075) * (f + 4503599627370496);
      }
      o.readDoubleLE = a.bind(null, e, 0, 4), o.readDoubleBE = a.bind(null, A, 4, 0);
    })(), o;
  }
  function n(o, r, a) {
    r[a] = o & 255, r[a + 1] = o >>> 8 & 255, r[a + 2] = o >>> 16 & 255, r[a + 3] = o >>> 24;
  }
  function t(o, r, a) {
    r[a] = o >>> 24, r[a + 1] = o >>> 16 & 255, r[a + 2] = o >>> 8 & 255, r[a + 3] = o & 255;
  }
  function e(o, r) {
    return (o[r] | o[r + 1] << 8 | o[r + 2] << 16 | o[r + 3] << 24) >>> 0;
  }
  function A(o, r) {
    return (o[r] << 24 | o[r + 1] << 16 | o[r + 2] << 8 | o[r + 3]) >>> 0;
  }
  return bi;
}
function yg(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ki, wg;
function BE() {
  if (wg) return ki;
  wg = 1, ki = i;
  function i(n) {
    try {
      if (typeof yg != "function")
        return null;
      var t = yg(n);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return ki;
}
var Dg = {}, bg;
function QE() {
  return bg || (bg = 1, (function(i) {
    var n = i;
    n.length = function(t) {
      for (var e = 0, A = 0, o = 0; o < t.length; ++o)
        A = t.charCodeAt(o), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 ? (++o, e += 4) : e += 3;
      return e;
    }, n.read = function(t, e, A) {
      var o = A - e;
      if (o < 1)
        return "";
      for (var r = null, a = [], g = 0, c; e < A; )
        c = t[e++], c < 128 ? a[g++] = c : c > 191 && c < 224 ? a[g++] = (c & 31) << 6 | t[e++] & 63 : c > 239 && c < 365 ? (c = ((c & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[g++] = 55296 + (c >> 10), a[g++] = 56320 + (c & 1023)) : a[g++] = (c & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, g > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, a)), g = 0);
      return r ? (g && r.push(String.fromCharCode.apply(String, a.slice(0, g))), r.join("")) : String.fromCharCode.apply(String, a.slice(0, g));
    }, n.write = function(t, e, A) {
      for (var o = A, r, a, g = 0; g < t.length; ++g)
        r = t.charCodeAt(g), r < 128 ? e[A++] = r : r < 2048 ? (e[A++] = r >> 6 | 192, e[A++] = r & 63 | 128) : (r & 64512) === 55296 && ((a = t.charCodeAt(g + 1)) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (a & 1023), ++g, e[A++] = r >> 18 | 240, e[A++] = r >> 12 & 63 | 128, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128) : (e[A++] = r >> 12 | 224, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128);
      return A - o;
    };
  })(Dg)), Dg;
}
var Si, kg;
function xE() {
  if (kg) return Si;
  kg = 1, Si = i;
  function i(n, t, e) {
    var A = e || 8192, o = A >>> 1, r = null, a = A;
    return function(g) {
      if (g < 1 || g > o)
        return n(g);
      a + g > A && (r = n(A), a = 0);
      var c = t.call(r, a, a += g);
      return a & 7 && (a = (a | 7) + 1), c;
    };
  }
  return Si;
}
var Gi, Sg;
function EE() {
  if (Sg) return Gi;
  Sg = 1, Gi = n;
  var i = at();
  function n(o, r) {
    this.lo = o >>> 0, this.hi = r >>> 0;
  }
  var t = n.zero = new n(0, 0);
  t.toNumber = function() {
    return 0;
  }, t.zzEncode = t.zzDecode = function() {
    return this;
  }, t.length = function() {
    return 1;
  };
  var e = n.zeroHash = "\0\0\0\0\0\0\0\0";
  n.fromNumber = function(o) {
    if (o === 0)
      return t;
    var r = o < 0;
    r && (o = -o);
    var a = o >>> 0, g = (o - a) / 4294967296 >>> 0;
    return r && (g = ~g >>> 0, a = ~a >>> 0, ++a > 4294967295 && (a = 0, ++g > 4294967295 && (g = 0))), new n(a, g);
  }, n.from = function(o) {
    if (typeof o == "number")
      return n.fromNumber(o);
    if (i.isString(o))
      if (i.Long)
        o = i.Long.fromString(o);
      else
        return n.fromNumber(parseInt(o, 10));
    return o.low || o.high ? new n(o.low >>> 0, o.high >>> 0) : t;
  }, n.prototype.toNumber = function(o) {
    if (!o && this.hi >>> 31) {
      var r = ~this.lo + 1 >>> 0, a = ~this.hi >>> 0;
      return r || (a = a + 1 >>> 0), -(r + a * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, n.prototype.toLong = function(o) {
    return i.Long ? new i.Long(this.lo | 0, this.hi | 0, !!o) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!o };
  };
  var A = String.prototype.charCodeAt;
  return n.fromHash = function(o) {
    return o === e ? t : new n(
      (A.call(o, 0) | A.call(o, 1) << 8 | A.call(o, 2) << 16 | A.call(o, 3) << 24) >>> 0,
      (A.call(o, 4) | A.call(o, 5) << 8 | A.call(o, 6) << 16 | A.call(o, 7) << 24) >>> 0
    );
  }, n.prototype.toHash = function() {
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
  }, n.prototype.zzEncode = function() {
    var o = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ o) >>> 0, this.lo = (this.lo << 1 ^ o) >>> 0, this;
  }, n.prototype.zzDecode = function() {
    var o = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ o) >>> 0, this.hi = (this.hi >>> 1 ^ o) >>> 0, this;
  }, n.prototype.length = function() {
    var o = this.lo, r = (this.lo >>> 28 | this.hi << 4) >>> 0, a = this.hi >>> 24;
    return a === 0 ? r === 0 ? o < 16384 ? o < 128 ? 1 : 2 : o < 2097152 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 2097152 ? 7 : 8 : a < 128 ? 9 : 10;
  }, Gi;
}
var Gg;
function at() {
  return Gg || (Gg = 1, (function(i) {
    var n = i;
    n.asPromise = sE(), n.base64 = cE(), n.EventEmitter = IE(), n.float = CE(), n.inquire = BE(), n.utf8 = QE(), n.pool = xE(), n.LongBits = EE(), n.isNode = !!(typeof Ct < "u" && Ct && Ct.process && Ct.process.versions && Ct.process.versions.node), n.global = n.isNode && Ct || typeof window < "u" && window || typeof self < "u" && self || yi, n.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), n.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), n.isInteger = Number.isInteger || /* istanbul ignore next */
    function(A) {
      return typeof A == "number" && isFinite(A) && Math.floor(A) === A;
    }, n.isString = function(A) {
      return typeof A == "string" || A instanceof String;
    }, n.isObject = function(A) {
      return A && typeof A == "object";
    }, n.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    n.isSet = function(A, o) {
      var r = A[o];
      return r != null && A.hasOwnProperty(o) ? typeof r != "object" || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0 : !1;
    }, n.Buffer = (function() {
      try {
        var A = n.inquire("buffer").Buffer;
        return A.prototype.utf8Write ? A : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    })(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(A) {
      return typeof A == "number" ? n.Buffer ? n._Buffer_allocUnsafe(A) : new n.Array(A) : n.Buffer ? n._Buffer_from(A) : typeof Uint8Array > "u" ? A : new Uint8Array(A);
    }, n.Array = typeof Uint8Array < "u" ? Uint8Array : Array, n.Long = /* istanbul ignore next */
    n.global.dcodeIO && /* istanbul ignore next */
    n.global.dcodeIO.Long || /* istanbul ignore next */
    n.global.Long || n.inquire("long"), n.key2Re = /^true|false|0|1$/, n.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, n.longToHash = function(A) {
      return A ? n.LongBits.from(A).toHash() : n.LongBits.zeroHash;
    }, n.longFromHash = function(A, o) {
      var r = n.LongBits.fromHash(A);
      return n.Long ? n.Long.fromBits(r.lo, r.hi, o) : r.toNumber(!!o);
    };
    function t(A, o, r) {
      for (var a = Object.keys(o), g = 0; g < a.length; ++g)
        (A[a[g]] === void 0 || !r) && (A[a[g]] = o[a[g]]);
      return A;
    }
    n.merge = t, n.lcFirst = function(A) {
      return A.charAt(0).toLowerCase() + A.substring(1);
    };
    function e(A) {
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
            return A;
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
    n.newError = e, n.ProtocolError = e("ProtocolError"), n.oneOfGetter = function(A) {
      for (var o = {}, r = 0; r < A.length; ++r)
        o[A[r]] = 1;
      return function() {
        for (var a = Object.keys(this), g = a.length - 1; g > -1; --g)
          if (o[a[g]] === 1 && this[a[g]] !== void 0 && this[a[g]] !== null)
            return a[g];
      };
    }, n.oneOfSetter = function(A) {
      return function(o) {
        for (var r = 0; r < A.length; ++r)
          A[r] !== o && delete this[A[r]];
      };
    }, n.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, n._configure = function() {
      var A = n.Buffer;
      if (!A) {
        n._Buffer_from = n._Buffer_allocUnsafe = null;
        return;
      }
      n._Buffer_from = A.from !== Uint8Array.from && A.from || /* istanbul ignore next */
      function(o, r) {
        return new A(o, r);
      }, n._Buffer_allocUnsafe = A.allocUnsafe || /* istanbul ignore next */
      function(o) {
        return new A(o);
      };
    };
  })(yi)), yi;
}
var Ni, Ng;
function jc() {
  if (Ng) return Ni;
  Ng = 1, Ni = g;
  var i = at(), n, t = i.LongBits, e = i.base64, A = i.utf8;
  function o(l, f, h) {
    this.fn = l, this.len = f, this.next = void 0, this.val = h;
  }
  function r() {
  }
  function a(l) {
    this.head = l.head, this.tail = l.tail, this.len = l.len, this.next = l.states;
  }
  function g() {
    this.len = 0, this.head = new o(r, 0, 0), this.tail = this.head, this.states = null;
  }
  var c = function() {
    return i.Buffer ? function() {
      return (g.create = function() {
        return new n();
      })();
    } : function() {
      return new g();
    };
  };
  g.create = c(), g.alloc = function(l) {
    return new i.Array(l);
  }, i.Array !== Array && (g.alloc = i.pool(g.alloc, i.Array.prototype.subarray)), g.prototype._push = function(l, f, h) {
    return this.tail = this.tail.next = new o(l, f, h), this.len += f, this;
  };
  function I(l, f, h) {
    f[h] = l & 255;
  }
  function s(l, f, h) {
    for (; l > 127; )
      f[h++] = l & 127 | 128, l >>>= 7;
    f[h] = l;
  }
  function Q(l, f) {
    this.len = l, this.next = void 0, this.val = f;
  }
  Q.prototype = Object.create(o.prototype), Q.prototype.fn = s, g.prototype.uint32 = function(l) {
    return this.len += (this.tail = this.tail.next = new Q(
      (l = l >>> 0) < 128 ? 1 : l < 16384 ? 2 : l < 2097152 ? 3 : l < 268435456 ? 4 : 5,
      l
    )).len, this;
  }, g.prototype.int32 = function(l) {
    return l < 0 ? this._push(x, 10, t.fromNumber(l)) : this.uint32(l);
  }, g.prototype.sint32 = function(l) {
    return this.uint32((l << 1 ^ l >> 31) >>> 0);
  };
  function x(l, f, h) {
    for (; l.hi; )
      f[h++] = l.lo & 127 | 128, l.lo = (l.lo >>> 7 | l.hi << 25) >>> 0, l.hi >>>= 7;
    for (; l.lo > 127; )
      f[h++] = l.lo & 127 | 128, l.lo = l.lo >>> 7;
    f[h++] = l.lo;
  }
  g.prototype.uint64 = function(l) {
    var f = t.from(l);
    return this._push(x, f.length(), f);
  }, g.prototype.int64 = g.prototype.uint64, g.prototype.sint64 = function(l) {
    var f = t.from(l).zzEncode();
    return this._push(x, f.length(), f);
  }, g.prototype.bool = function(l) {
    return this._push(I, 1, l ? 1 : 0);
  };
  function E(l, f, h) {
    f[h] = l & 255, f[h + 1] = l >>> 8 & 255, f[h + 2] = l >>> 16 & 255, f[h + 3] = l >>> 24;
  }
  g.prototype.fixed32 = function(l) {
    return this._push(E, 4, l >>> 0);
  }, g.prototype.sfixed32 = g.prototype.fixed32, g.prototype.fixed64 = function(l) {
    var f = t.from(l);
    return this._push(E, 4, f.lo)._push(E, 4, f.hi);
  }, g.prototype.sfixed64 = g.prototype.fixed64, g.prototype.float = function(l) {
    return this._push(i.float.writeFloatLE, 4, l);
  }, g.prototype.double = function(l) {
    return this._push(i.float.writeDoubleLE, 8, l);
  };
  var C = i.Array.prototype.set ? function(l, f, h) {
    f.set(l, h);
  } : function(l, f, h) {
    for (var p = 0; p < l.length; ++p)
      f[h + p] = l[p];
  };
  return g.prototype.bytes = function(l) {
    var f = l.length >>> 0;
    if (!f)
      return this._push(I, 1, 0);
    if (i.isString(l)) {
      var h = g.alloc(f = e.length(l));
      e.decode(l, h, 0), l = h;
    }
    return this.uint32(f)._push(C, f, l);
  }, g.prototype.string = function(l) {
    var f = A.length(l);
    return f ? this.uint32(f)._push(A.write, f, l) : this._push(I, 1, 0);
  }, g.prototype.fork = function() {
    return this.states = new a(this), this.head = this.tail = new o(r, 0, 0), this.len = 0, this;
  }, g.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(r, 0, 0), this.len = 0), this;
  }, g.prototype.ldelim = function() {
    var l = this.head, f = this.tail, h = this.len;
    return this.reset().uint32(h), h && (this.tail.next = l.next, this.tail = f, this.len += h), this;
  }, g.prototype.finish = function() {
    for (var l = this.head.next, f = this.constructor.alloc(this.len), h = 0; l; )
      l.fn(l.val, f, h), h += l.len, l = l.next;
    return f;
  }, g._configure = function(l) {
    n = l, g.create = c(), n._configure();
  }, Ni;
}
var Ri, Rg;
function dE() {
  if (Rg) return Ri;
  Rg = 1, Ri = t;
  var i = jc();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = at();
  function t() {
    i.call(this);
  }
  t._configure = function() {
    t.alloc = n._Buffer_allocUnsafe, t.writeBytesBuffer = n.Buffer && n.Buffer.prototype instanceof Uint8Array && n.Buffer.prototype.set.name === "set" ? function(A, o, r) {
      o.set(A, r);
    } : function(A, o, r) {
      if (A.copy)
        A.copy(o, r, 0, A.length);
      else for (var a = 0; a < A.length; )
        o[r++] = A[a++];
    };
  }, t.prototype.bytes = function(A) {
    n.isString(A) && (A = n._Buffer_from(A, "base64"));
    var o = A.length >>> 0;
    return this.uint32(o), o && this._push(t.writeBytesBuffer, o, A), this;
  };
  function e(A, o, r) {
    A.length < 40 ? n.utf8.write(A, o, r) : o.utf8Write ? o.utf8Write(A, r) : o.write(A, r);
  }
  return t.prototype.string = function(A) {
    var o = n.Buffer.byteLength(A);
    return this.uint32(o), o && this._push(e, o, A), this;
  }, t._configure(), Ri;
}
var vi, vg;
function qc() {
  if (vg) return vi;
  vg = 1, vi = o;
  var i = at(), n, t = i.LongBits, e = i.utf8;
  function A(s, Q) {
    return RangeError("index out of range: " + s.pos + " + " + (Q || 1) + " > " + s.len);
  }
  function o(s) {
    this.buf = s, this.pos = 0, this.len = s.length;
  }
  var r = typeof Uint8Array < "u" ? function(s) {
    if (s instanceof Uint8Array || Array.isArray(s))
      return new o(s);
    throw Error("illegal buffer");
  } : function(s) {
    if (Array.isArray(s))
      return new o(s);
    throw Error("illegal buffer");
  }, a = function() {
    return i.Buffer ? function(s) {
      return (o.create = function(Q) {
        return i.Buffer.isBuffer(Q) ? new n(Q) : r(Q);
      })(s);
    } : r;
  };
  o.create = a(), o.prototype._slice = i.Array.prototype.subarray || /* istanbul ignore next */
  i.Array.prototype.slice, o.prototype.uint32 = /* @__PURE__ */ (function() {
    var s = 4294967295;
    return function() {
      if (s = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (s = (s | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (s = (s | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (s = (s | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (s = (s | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) return s;
      if ((this.pos += 5) > this.len)
        throw this.pos = this.len, A(this, 10);
      return s;
    };
  })(), o.prototype.int32 = function() {
    return this.uint32() | 0;
  }, o.prototype.sint32 = function() {
    var s = this.uint32();
    return s >>> 1 ^ -(s & 1) | 0;
  };
  function g() {
    var s = new t(0, 0), Q = 0;
    if (this.len - this.pos > 4) {
      for (; Q < 4; ++Q)
        if (s.lo = (s.lo | (this.buf[this.pos] & 127) << Q * 7) >>> 0, this.buf[this.pos++] < 128)
          return s;
      if (s.lo = (s.lo | (this.buf[this.pos] & 127) << 28) >>> 0, s.hi = (s.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
        return s;
      Q = 0;
    } else {
      for (; Q < 3; ++Q) {
        if (this.pos >= this.len)
          throw A(this);
        if (s.lo = (s.lo | (this.buf[this.pos] & 127) << Q * 7) >>> 0, this.buf[this.pos++] < 128)
          return s;
      }
      return s.lo = (s.lo | (this.buf[this.pos++] & 127) << Q * 7) >>> 0, s;
    }
    if (this.len - this.pos > 4) {
      for (; Q < 5; ++Q)
        if (s.hi = (s.hi | (this.buf[this.pos] & 127) << Q * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return s;
    } else
      for (; Q < 5; ++Q) {
        if (this.pos >= this.len)
          throw A(this);
        if (s.hi = (s.hi | (this.buf[this.pos] & 127) << Q * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return s;
      }
    throw Error("invalid varint encoding");
  }
  o.prototype.bool = function() {
    return this.uint32() !== 0;
  };
  function c(s, Q) {
    return (s[Q - 4] | s[Q - 3] << 8 | s[Q - 2] << 16 | s[Q - 1] << 24) >>> 0;
  }
  o.prototype.fixed32 = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    return c(this.buf, this.pos += 4);
  }, o.prototype.sfixed32 = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    return c(this.buf, this.pos += 4) | 0;
  };
  function I() {
    if (this.pos + 8 > this.len)
      throw A(this, 8);
    return new t(c(this.buf, this.pos += 4), c(this.buf, this.pos += 4));
  }
  return o.prototype.float = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    var s = i.float.readFloatLE(this.buf, this.pos);
    return this.pos += 4, s;
  }, o.prototype.double = function() {
    if (this.pos + 8 > this.len)
      throw A(this, 4);
    var s = i.float.readDoubleLE(this.buf, this.pos);
    return this.pos += 8, s;
  }, o.prototype.bytes = function() {
    var s = this.uint32(), Q = this.pos, x = this.pos + s;
    if (x > this.len)
      throw A(this, s);
    if (this.pos += s, Array.isArray(this.buf))
      return this.buf.slice(Q, x);
    if (Q === x) {
      var E = i.Buffer;
      return E ? E.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, Q, x);
  }, o.prototype.string = function() {
    var s = this.bytes();
    return e.read(s, 0, s.length);
  }, o.prototype.skip = function(s) {
    if (typeof s == "number") {
      if (this.pos + s > this.len)
        throw A(this, s);
      this.pos += s;
    } else
      do
        if (this.pos >= this.len)
          throw A(this);
      while (this.buf[this.pos++] & 128);
    return this;
  }, o.prototype.skipType = function(s) {
    switch (s) {
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
        for (; (s = this.uint32() & 7) !== 4; )
          this.skipType(s);
        break;
      case 5:
        this.skip(4);
        break;
      /* istanbul ignore next */
      default:
        throw Error("invalid wire type " + s + " at offset " + this.pos);
    }
    return this;
  }, o._configure = function(s) {
    n = s, o.create = a(), n._configure();
    var Q = i.Long ? "toLong" : (
      /* istanbul ignore next */
      "toNumber"
    );
    i.merge(o.prototype, {
      int64: function() {
        return g.call(this)[Q](!1);
      },
      uint64: function() {
        return g.call(this)[Q](!0);
      },
      sint64: function() {
        return g.call(this).zzDecode()[Q](!1);
      },
      fixed64: function() {
        return I.call(this)[Q](!0);
      },
      sfixed64: function() {
        return I.call(this)[Q](!1);
      }
    });
  }, vi;
}
var Fi, Fg;
function lE() {
  if (Fg) return Fi;
  Fg = 1, Fi = t;
  var i = qc();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = at();
  function t(e) {
    i.call(this, e);
  }
  return t._configure = function() {
    n.Buffer && (t.prototype._slice = n.Buffer.prototype.slice);
  }, t.prototype.string = function() {
    var e = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
  }, t._configure(), Fi;
}
var Mg = {}, Mi, Wg;
function uE() {
  if (Wg) return Mi;
  Wg = 1, Mi = n;
  var i = at();
  (n.prototype = Object.create(i.EventEmitter.prototype)).constructor = n;
  function n(t, e, A) {
    if (typeof t != "function")
      throw TypeError("rpcImpl must be a function");
    i.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!e, this.responseDelimited = !!A;
  }
  return n.prototype.rpcCall = function t(e, A, o, r, a) {
    if (!r)
      throw TypeError("request must be specified");
    var g = this;
    if (!a)
      return i.asPromise(t, g, e, A, o, r);
    if (!g.rpcImpl) {
      setTimeout(function() {
        a(Error("already ended"));
      }, 0);
      return;
    }
    try {
      return g.rpcImpl(
        e,
        A[g.requestDelimited ? "encodeDelimited" : "encode"](r).finish(),
        function(c, I) {
          if (c)
            return g.emit("error", c, e), a(c);
          if (I === null) {
            g.end(
              /* endedByRPC */
              !0
            );
            return;
          }
          if (!(I instanceof o))
            try {
              I = o[g.responseDelimited ? "decodeDelimited" : "decode"](I);
            } catch (s) {
              return g.emit("error", s, e), a(s);
            }
          return g.emit("data", I, e), a(null, I);
        }
      );
    } catch (c) {
      g.emit("error", c, e), setTimeout(function() {
        a(c);
      }, 0);
      return;
    }
  }, n.prototype.end = function(t) {
    return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
  }, Mi;
}
var Lg;
function fE() {
  return Lg || (Lg = 1, (function(i) {
    var n = i;
    n.Service = uE();
  })(Mg)), Mg;
}
var Og, Jg;
function hE() {
  return Jg || (Jg = 1, Og = {}), Og;
}
var Ug;
function pE() {
  return Ug || (Ug = 1, (function(i) {
    var n = i;
    n.build = "minimal", n.Writer = jc(), n.BufferWriter = dE(), n.Reader = qc(), n.BufferReader = lE(), n.util = at(), n.rpc = fE(), n.roots = hE(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  })(lg)), lg;
}
var Yg, Tg;
function mE() {
  return Tg || (Tg = 1, Yg = pE()), Yg;
}
var S = mE();
const u = S.Reader, G = S.Writer, d = S.util, B = S.roots.default || (S.roots.default = {}), Ze = B.dot = (() => {
  const i = {};
  return i.Content = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.token = d.newBuffer([]), n.prototype.iv = d.newBuffer([]), n.prototype.schemaVersion = 0, n.prototype.bytes = d.newBuffer([]), n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.Content();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
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
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || d.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || d.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !d.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.Content)
        return t;
      let e = new B.dot.Content();
      return t.token != null && (typeof t.token == "string" ? d.base64.decode(t.token, e.token = d.newBuffer(d.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? d.base64.decode(t.iv, e.iv = d.newBuffer(d.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = d.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = d.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? d.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? d.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, n;
  })(), i.v4 = (function() {
    const n = {};
    return n.MagnifEyeLivenessContent = (function() {
      function t(A) {
        if (this.images = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.images = d.emptyArray, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.images != null && A.images.length)
          for (let r = 0; r < A.images.length; ++r)
            B.dot.Image.encode(A.images[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && B.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.images && g.images.length || (g.images = []), g.images.push(B.dot.Image.decode(A, A.uint32()));
              break;
            }
            case 3: {
              g.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.images != null && A.hasOwnProperty("images")) {
          if (!Array.isArray(A.images))
            return "images: array expected";
          for (let o = 0; o < A.images.length; ++o) {
            let r = B.dot.Image.verify(A.images[o]);
            if (r)
              return "images." + r;
          }
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = B.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = B.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.MagnifEyeLivenessContent)
          return A;
        let o = new B.dot.v4.MagnifEyeLivenessContent();
        if (A.images) {
          if (!Array.isArray(A.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          o.images = [];
          for (let r = 0; r < A.images.length; ++r) {
            if (typeof A.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            o.images[r] = B.dot.Image.fromObject(A.images[r]);
          }
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.video: object expected");
          o.video = B.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          o.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.images = []), o.defaults && (r.metadata = null), A.images && A.images.length) {
          r.images = [];
          for (let a = 0; a < A.images.length; ++a)
            r.images[a] = B.dot.Image.toObject(A.images[a], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = B.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = B.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    })(), n.Metadata = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.platform = 0, t.prototype.sessionToken = null, t.prototype.componentVersion = "", t.prototype.web = null, t.prototype.android = null, t.prototype.ios = null;
      let e;
      return Object.defineProperty(t.prototype, "_sessionToken", {
        get: d.oneOfGetter(e = ["sessionToken"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: d.oneOfGetter(e = ["web", "android", "ios"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && B.dot.v4.WebMetadata.encode(A.web, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && B.dot.v4.AndroidMetadata.encode(A.android, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && B.dot.v4.IosMetadata.encode(A.ios, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.sessionToken != null && Object.hasOwnProperty.call(A, "sessionToken") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.sessionToken), A.componentVersion != null && Object.hasOwnProperty.call(A, "componentVersion") && o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(A.componentVersion), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.Metadata();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.platform = A.int32();
              break;
            }
            case 5: {
              g.sessionToken = A.string();
              break;
            }
            case 6: {
              g.componentVersion = A.string();
              break;
            }
            case 2: {
              g.web = B.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.android = B.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.ios = B.dot.v4.IosMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let o = {};
        if (A.platform != null && A.hasOwnProperty("platform"))
          switch (A.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (A.sessionToken != null && A.hasOwnProperty("sessionToken") && (o._sessionToken = 1, !d.isString(A.sessionToken)))
          return "sessionToken: string expected";
        if (A.componentVersion != null && A.hasOwnProperty("componentVersion") && !d.isString(A.componentVersion))
          return "componentVersion: string expected";
        if (A.web != null && A.hasOwnProperty("web")) {
          o.metadata = 1;
          {
            let r = B.dot.v4.WebMetadata.verify(A.web);
            if (r)
              return "web." + r;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = B.dot.v4.AndroidMetadata.verify(A.android);
            if (r)
              return "android." + r;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = B.dot.v4.IosMetadata.verify(A.ios);
            if (r)
              return "ios." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Metadata)
          return A;
        let o = new B.dot.v4.Metadata();
        switch (A.platform) {
          default:
            if (typeof A.platform == "number") {
              o.platform = A.platform;
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
        if (A.sessionToken != null && (o.sessionToken = String(A.sessionToken)), A.componentVersion != null && (o.componentVersion = String(A.componentVersion)), A.web != null) {
          if (typeof A.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          o.web = B.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          o.android = B.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          o.ios = B.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.platform = o.enums === String ? "WEB" : 0, r.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (r.platform = o.enums === String ? B.dot.Platform[A.platform] === void 0 ? A.platform : B.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (r.web = B.dot.v4.WebMetadata.toObject(A.web, o), o.oneofs && (r.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (r.android = B.dot.v4.AndroidMetadata.toObject(A.android, o), o.oneofs && (r.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (r.ios = B.dot.v4.IosMetadata.toObject(A.ios, o), o.oneofs && (r.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (r.sessionToken = A.sessionToken, o.oneofs && (r._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (r.componentVersion = A.componentVersion), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Metadata";
      }, t;
    })(), n.AndroidMetadata = (function() {
      function t(A) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.supportedAbis = d.emptyArray, t.prototype.device = null, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = d.emptyArray, t.prototype.digestsWithTimestamp = d.emptyArray, t.prototype.dynamicCameraFrameProperties = d.emptyObject, t.prototype.tamperingIndicators = null, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null, t.prototype.androidId = null;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: d.oneOfGetter(e = ["device"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_camera", {
        get: d.oneOfGetter(e = ["camera"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: d.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_tamperingIndicators", {
        get: d.oneOfGetter(e = ["tamperingIndicators"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedYuv420Image", {
        get: d.oneOfGetter(e = ["croppedYuv420Image"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_yuv420ImageCrop", {
        get: d.oneOfGetter(e = ["yuv420ImageCrop"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_androidId", {
        get: d.oneOfGetter(e = ["androidId"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.supportedAbis != null && A.supportedAbis.length)
          for (let r = 0; r < A.supportedAbis.length; ++r)
            o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(A.supportedAbis[r]);
        if (A.device != null && Object.hasOwnProperty.call(A, "device") && o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(A.device), A.digests != null && A.digests.length)
          for (let r = 0; r < A.digests.length; ++r)
            o.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[r]);
        if (A.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(A, "dynamicCameraFrameProperties"))
          for (let r = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < r.length; ++a)
            o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[a]), B.dot.Int32List.encode(A.dynamicCameraFrameProperties[r[a]], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r)
            B.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && B.dot.v4.AndroidCamera.encode(A.camera, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && B.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.tamperingIndicators != null && Object.hasOwnProperty.call(A, "tamperingIndicators") && o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).bytes(A.tamperingIndicators), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && B.dot.v4.Yuv420Image.encode(A.croppedYuv420Image, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && B.dot.v4.Yuv420ImageCrop.encode(A.yuv420ImageCrop, o.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.androidId != null && Object.hasOwnProperty.call(A, "androidId") && o.uint32(
          /* id 11, wireType 2 =*/
          90
        ).string(A.androidId), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.AndroidMetadata(), c, I;
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.supportedAbis && g.supportedAbis.length || (g.supportedAbis = []), g.supportedAbis.push(A.string());
              break;
            }
            case 2: {
              g.device = A.string();
              break;
            }
            case 6: {
              g.camera = B.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.detectionNormalizedRectangle = B.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.digests && g.digests.length || (g.digests = []), g.digests.push(A.bytes());
              break;
            }
            case 5: {
              g.digestsWithTimestamp && g.digestsWithTimestamp.length || (g.digestsWithTimestamp = []), g.digestsWithTimestamp.push(B.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.dynamicCameraFrameProperties === d.emptyObject && (g.dynamicCameraFrameProperties = {});
              let Q = A.uint32() + A.pos;
              for (c = "", I = null; A.pos < Q; ) {
                let x = A.uint32();
                switch (x >>> 3) {
                  case 1:
                    c = A.string();
                    break;
                  case 2:
                    I = B.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(x & 7);
                    break;
                }
              }
              g.dynamicCameraFrameProperties[c] = I;
              break;
            }
            case 8: {
              g.tamperingIndicators = A.bytes();
              break;
            }
            case 9: {
              g.croppedYuv420Image = B.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            case 10: {
              g.yuv420ImageCrop = B.dot.v4.Yuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            case 11: {
              g.androidId = A.string();
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.supportedAbis != null && A.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(A.supportedAbis))
            return "supportedAbis: array expected";
          for (let o = 0; o < A.supportedAbis.length; ++o)
            if (!d.isString(A.supportedAbis[o]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !d.isString(A.device))
          return "device: string expected";
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let o = B.dot.v4.AndroidCamera.verify(A.camera);
          if (o)
            return "camera." + o;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let o = B.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (o)
            return "detectionNormalizedRectangle." + o;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let o = 0; o < A.digests.length; ++o)
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || d.isString(A.digests[o])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let o = 0; o < A.digestsWithTimestamp.length; ++o) {
            let r = B.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[o]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!d.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(A.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let a = B.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || d.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let o = B.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (o)
            return "croppedYuv420Image." + o;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let o = B.dot.v4.Yuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (o)
            return "yuv420ImageCrop." + o;
        }
        return A.androidId != null && A.hasOwnProperty("androidId") && !d.isString(A.androidId) ? "androidId: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.AndroidMetadata)
          return A;
        let o = new B.dot.v4.AndroidMetadata();
        if (A.supportedAbis) {
          if (!Array.isArray(A.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          o.supportedAbis = [];
          for (let r = 0; r < A.supportedAbis.length; ++r)
            o.supportedAbis[r] = String(A.supportedAbis[r]);
        }
        if (A.device != null && (o.device = String(A.device)), A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.AndroidMetadata.camera: object expected");
          o.camera = B.dot.v4.AndroidCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.AndroidMetadata.detectionNormalizedRectangle: object expected");
          o.detectionNormalizedRectangle = B.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          o.digests = [];
          for (let r = 0; r < A.digests.length; ++r)
            typeof A.digests[r] == "string" ? d.base64.decode(A.digests[r], o.digests[r] = d.newBuffer(d.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          o.digestsWithTimestamp = [];
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r) {
            if (typeof A.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            o.digestsWithTimestamp[r] = B.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          o.dynamicCameraFrameProperties = {};
          for (let r = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < r.length; ++a) {
            if (typeof A.dynamicCameraFrameProperties[r[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[r[a]] = B.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[r[a]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? d.base64.decode(A.tamperingIndicators, o.tamperingIndicators = d.newBuffer(d.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (o.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          o.croppedYuv420Image = B.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.AndroidMetadata.yuv420ImageCrop: object expected");
          o.yuv420ImageCrop = B.dot.v4.Yuv420ImageCrop.fromObject(A.yuv420ImageCrop);
        }
        return A.androidId != null && (o.androidId = String(A.androidId)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.supportedAbis = [], r.digests = [], r.digestsWithTimestamp = []), (o.objects || o.defaults) && (r.dynamicCameraFrameProperties = {}), A.supportedAbis && A.supportedAbis.length) {
          r.supportedAbis = [];
          for (let g = 0; g < A.supportedAbis.length; ++g)
            r.supportedAbis[g] = A.supportedAbis[g];
        }
        if (A.device != null && A.hasOwnProperty("device") && (r.device = A.device, o.oneofs && (r._device = "device")), A.digests && A.digests.length) {
          r.digests = [];
          for (let g = 0; g < A.digests.length; ++g)
            r.digests[g] = o.bytes === String ? d.base64.encode(A.digests[g], 0, A.digests[g].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[g]) : A.digests[g];
        }
        let a;
        if (A.dynamicCameraFrameProperties && (a = Object.keys(A.dynamicCameraFrameProperties)).length) {
          r.dynamicCameraFrameProperties = {};
          for (let g = 0; g < a.length; ++g)
            r.dynamicCameraFrameProperties[a[g]] = B.dot.Int32List.toObject(A.dynamicCameraFrameProperties[a[g]], o);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            r.digestsWithTimestamp[g] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[g], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = B.dot.v4.AndroidCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (r.tamperingIndicators = o.bytes === String ? d.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : o.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, o.oneofs && (r._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = B.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = B.dot.v4.Yuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), A.androidId != null && A.hasOwnProperty("androidId") && (r.androidId = A.androidId, o.oneofs && (r._androidId = "androidId")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.AndroidMetadata";
      }, t;
    })(), n.AndroidCamera = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.AndroidCamera();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.resolution = B.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.rotationDegrees = e.int32();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = B.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !d.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.AndroidCamera)
          return e;
        let A = new B.dot.v4.AndroidCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.AndroidCamera.resolution: object expected");
          A.resolution = B.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.resolution = null, o.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (o.resolution = B.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (o.rotationDegrees = e.rotationDegrees), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AndroidCamera";
      }, t;
    })(), n.Yuv420Image = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = d.newBuffer([]), t.prototype.uPlane = d.newBuffer([]), t.prototype.vPlane = d.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && B.dot.ImageSize.encode(e.size, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.yPlane != null && Object.hasOwnProperty.call(e, "yPlane") && A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).bytes(e.yPlane), e.uPlane != null && Object.hasOwnProperty.call(e, "uPlane") && A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).bytes(e.uPlane), e.vPlane != null && Object.hasOwnProperty.call(e, "vPlane") && A.uint32(
          /* id 4, wireType 2 =*/
          34
        ).bytes(e.vPlane), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.Yuv420Image();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.size = B.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.yPlane = e.bytes();
              break;
            }
            case 3: {
              a.uPlane = e.bytes();
              break;
            }
            case 4: {
              a.vPlane = e.bytes();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = B.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || d.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || d.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || d.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.Yuv420Image)
          return e;
        let A = new B.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = B.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? d.base64.decode(e.yPlane, A.yPlane = d.newBuffer(d.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? d.base64.decode(e.uPlane, A.uPlane = d.newBuffer(d.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? d.base64.decode(e.vPlane, A.vPlane = d.newBuffer(d.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = d.newBuffer(o.yPlane))), A.bytes === String ? o.uPlane = "" : (o.uPlane = [], A.bytes !== Array && (o.uPlane = d.newBuffer(o.uPlane))), A.bytes === String ? o.vPlane = "" : (o.vPlane = [], A.bytes !== Array && (o.vPlane = d.newBuffer(o.vPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = B.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? d.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (o.uPlane = A.bytes === String ? d.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (o.vPlane = A.bytes === String ? d.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420Image";
      }, t;
    })(), n.Yuv420ImageCrop = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.v4.Yuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && B.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.Yuv420ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = B.dot.v4.Yuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = B.dot.PointInt.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = B.dot.v4.Yuv420Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = B.dot.PointInt.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.Yuv420ImageCrop)
          return e;
        let A = new B.dot.v4.Yuv420ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.Yuv420ImageCrop.image: object expected");
          A.image = B.dot.v4.Yuv420Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.Yuv420ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = B.dot.PointInt.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = B.dot.v4.Yuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = B.dot.PointInt.toObject(e.topLeftCorner, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420ImageCrop";
      }, t;
    })(), n.IosMetadata = (function() {
      function t(A) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.cameraModelId = "", t.prototype.architectureInfo = d.emptyObject, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = d.emptyArray, t.prototype.digestsWithTimestamp = d.emptyArray, t.prototype.isoValues = d.emptyArray, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null, t.prototype.identifierForVendor = null;
      let e;
      return Object.defineProperty(t.prototype, "_camera", {
        get: d.oneOfGetter(e = ["camera"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: d.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedYuv420Image", {
        get: d.oneOfGetter(e = ["croppedYuv420Image"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_yuv420ImageCrop", {
        get: d.oneOfGetter(e = ["yuv420ImageCrop"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_identifierForVendor", {
        get: d.oneOfGetter(e = ["identifierForVendor"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.cameraModelId), A.architectureInfo != null && Object.hasOwnProperty.call(A, "architectureInfo"))
          for (let r = Object.keys(A.architectureInfo), a = 0; a < r.length; ++a)
            o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[a]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(A.architectureInfo[r[a]]).ldelim();
        if (A.digests != null && A.digests.length)
          for (let r = 0; r < A.digests.length; ++r)
            o.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[r]);
        if (A.isoValues != null && A.isoValues.length) {
          o.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let r = 0; r < A.isoValues.length; ++r)
            o.int32(A.isoValues[r]);
          o.ldelim();
        }
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r)
            B.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && B.dot.v4.IosCamera.encode(A.camera, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && B.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && B.dot.v4.IosYuv420Image.encode(A.croppedYuv420Image, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && B.dot.v4.IosYuv420ImageCrop.encode(A.yuv420ImageCrop, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.identifierForVendor != null && Object.hasOwnProperty.call(A, "identifierForVendor") && o.uint32(
          /* id 10, wireType 2 =*/
          82
        ).string(A.identifierForVendor), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.IosMetadata(), c, I;
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.cameraModelId = A.string();
              break;
            }
            case 2: {
              g.architectureInfo === d.emptyObject && (g.architectureInfo = {});
              let Q = A.uint32() + A.pos;
              for (c = "", I = !1; A.pos < Q; ) {
                let x = A.uint32();
                switch (x >>> 3) {
                  case 1:
                    c = A.string();
                    break;
                  case 2:
                    I = A.bool();
                    break;
                  default:
                    A.skipType(x & 7);
                    break;
                }
              }
              g.architectureInfo[c] = I;
              break;
            }
            case 6: {
              g.camera = B.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.detectionNormalizedRectangle = B.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.digests && g.digests.length || (g.digests = []), g.digests.push(A.bytes());
              break;
            }
            case 5: {
              g.digestsWithTimestamp && g.digestsWithTimestamp.length || (g.digestsWithTimestamp = []), g.digestsWithTimestamp.push(B.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (g.isoValues && g.isoValues.length || (g.isoValues = []), (s & 7) === 2) {
                let Q = A.uint32() + A.pos;
                for (; A.pos < Q; )
                  g.isoValues.push(A.int32());
              } else
                g.isoValues.push(A.int32());
              break;
            }
            case 8: {
              g.croppedYuv420Image = B.dot.v4.IosYuv420Image.decode(A, A.uint32());
              break;
            }
            case 9: {
              g.yuv420ImageCrop = B.dot.v4.IosYuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            case 10: {
              g.identifierForVendor = A.string();
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && !d.isString(A.cameraModelId))
          return "cameraModelId: string expected";
        if (A.architectureInfo != null && A.hasOwnProperty("architectureInfo")) {
          if (!d.isObject(A.architectureInfo))
            return "architectureInfo: object expected";
          let o = Object.keys(A.architectureInfo);
          for (let r = 0; r < o.length; ++r)
            if (typeof A.architectureInfo[o[r]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let o = B.dot.v4.IosCamera.verify(A.camera);
          if (o)
            return "camera." + o;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let o = B.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (o)
            return "detectionNormalizedRectangle." + o;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let o = 0; o < A.digests.length; ++o)
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || d.isString(A.digests[o])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let o = 0; o < A.digestsWithTimestamp.length; ++o) {
            let r = B.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[o]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (A.isoValues != null && A.hasOwnProperty("isoValues")) {
          if (!Array.isArray(A.isoValues))
            return "isoValues: array expected";
          for (let o = 0; o < A.isoValues.length; ++o)
            if (!d.isInteger(A.isoValues[o]))
              return "isoValues: integer[] expected";
        }
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let o = B.dot.v4.IosYuv420Image.verify(A.croppedYuv420Image);
          if (o)
            return "croppedYuv420Image." + o;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let o = B.dot.v4.IosYuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (o)
            return "yuv420ImageCrop." + o;
        }
        return A.identifierForVendor != null && A.hasOwnProperty("identifierForVendor") && !d.isString(A.identifierForVendor) ? "identifierForVendor: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.IosMetadata)
          return A;
        let o = new B.dot.v4.IosMetadata();
        if (A.cameraModelId != null && (o.cameraModelId = String(A.cameraModelId)), A.architectureInfo) {
          if (typeof A.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          o.architectureInfo = {};
          for (let r = Object.keys(A.architectureInfo), a = 0; a < r.length; ++a)
            o.architectureInfo[r[a]] = !!A.architectureInfo[r[a]];
        }
        if (A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.IosMetadata.camera: object expected");
          o.camera = B.dot.v4.IosCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.IosMetadata.detectionNormalizedRectangle: object expected");
          o.detectionNormalizedRectangle = B.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          o.digests = [];
          for (let r = 0; r < A.digests.length; ++r)
            typeof A.digests[r] == "string" ? d.base64.decode(A.digests[r], o.digests[r] = d.newBuffer(d.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          o.digestsWithTimestamp = [];
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r) {
            if (typeof A.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            o.digestsWithTimestamp[r] = B.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
          }
        }
        if (A.isoValues) {
          if (!Array.isArray(A.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          o.isoValues = [];
          for (let r = 0; r < A.isoValues.length; ++r)
            o.isoValues[r] = A.isoValues[r] | 0;
        }
        if (A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.IosMetadata.croppedYuv420Image: object expected");
          o.croppedYuv420Image = B.dot.v4.IosYuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.IosMetadata.yuv420ImageCrop: object expected");
          o.yuv420ImageCrop = B.dot.v4.IosYuv420ImageCrop.fromObject(A.yuv420ImageCrop);
        }
        return A.identifierForVendor != null && (o.identifierForVendor = String(A.identifierForVendor)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        (o.arrays || o.defaults) && (r.digests = [], r.isoValues = [], r.digestsWithTimestamp = []), (o.objects || o.defaults) && (r.architectureInfo = {}), o.defaults && (r.cameraModelId = ""), A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && (r.cameraModelId = A.cameraModelId);
        let a;
        if (A.architectureInfo && (a = Object.keys(A.architectureInfo)).length) {
          r.architectureInfo = {};
          for (let g = 0; g < a.length; ++g)
            r.architectureInfo[a[g]] = A.architectureInfo[a[g]];
        }
        if (A.digests && A.digests.length) {
          r.digests = [];
          for (let g = 0; g < A.digests.length; ++g)
            r.digests[g] = o.bytes === String ? d.base64.encode(A.digests[g], 0, A.digests[g].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[g]) : A.digests[g];
        }
        if (A.isoValues && A.isoValues.length) {
          r.isoValues = [];
          for (let g = 0; g < A.isoValues.length; ++g)
            r.isoValues[g] = A.isoValues[g];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            r.digestsWithTimestamp[g] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[g], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = B.dot.v4.IosCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = B.dot.v4.IosYuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = B.dot.v4.IosYuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), A.identifierForVendor != null && A.hasOwnProperty("identifierForVendor") && (r.identifierForVendor = A.identifierForVendor, o.oneofs && (r._identifierForVendor = "identifierForVendor")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.IosMetadata";
      }, t;
    })(), n.IosCamera = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.IosCamera();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.resolution = B.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.rotationDegrees = e.int32();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = B.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !d.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.IosCamera)
          return e;
        let A = new B.dot.v4.IosCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.IosCamera.resolution: object expected");
          A.resolution = B.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.resolution = null, o.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (o.resolution = B.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (o.rotationDegrees = e.rotationDegrees), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosCamera";
      }, t;
    })(), n.IosYuv420Image = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = d.newBuffer([]), t.prototype.uvPlane = d.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && B.dot.ImageSize.encode(e.size, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.yPlane != null && Object.hasOwnProperty.call(e, "yPlane") && A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).bytes(e.yPlane), e.uvPlane != null && Object.hasOwnProperty.call(e, "uvPlane") && A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).bytes(e.uvPlane), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.IosYuv420Image();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.size = B.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.yPlane = e.bytes();
              break;
            }
            case 3: {
              a.uvPlane = e.bytes();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = B.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || d.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uvPlane != null && e.hasOwnProperty("uvPlane") && !(e.uvPlane && typeof e.uvPlane.length == "number" || d.isString(e.uvPlane)) ? "uvPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.IosYuv420Image)
          return e;
        let A = new B.dot.v4.IosYuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.IosYuv420Image.size: object expected");
          A.size = B.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? d.base64.decode(e.yPlane, A.yPlane = d.newBuffer(d.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uvPlane != null && (typeof e.uvPlane == "string" ? d.base64.decode(e.uvPlane, A.uvPlane = d.newBuffer(d.base64.length(e.uvPlane)), 0) : e.uvPlane.length >= 0 && (A.uvPlane = e.uvPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = d.newBuffer(o.yPlane))), A.bytes === String ? o.uvPlane = "" : (o.uvPlane = [], A.bytes !== Array && (o.uvPlane = d.newBuffer(o.uvPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = B.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? d.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uvPlane != null && e.hasOwnProperty("uvPlane") && (o.uvPlane = A.bytes === String ? d.base64.encode(e.uvPlane, 0, e.uvPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uvPlane) : e.uvPlane), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosYuv420Image";
      }, t;
    })(), n.IosYuv420ImageCrop = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.v4.IosYuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && B.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.IosYuv420ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = B.dot.v4.IosYuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = B.dot.PointInt.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = B.dot.v4.IosYuv420Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = B.dot.PointInt.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.IosYuv420ImageCrop)
          return e;
        let A = new B.dot.v4.IosYuv420ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.IosYuv420ImageCrop.image: object expected");
          A.image = B.dot.v4.IosYuv420Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.IosYuv420ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = B.dot.PointInt.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = B.dot.v4.IosYuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = B.dot.PointInt.toObject(e.topLeftCorner, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosYuv420ImageCrop";
      }, t;
    })(), n.WebMetadata = (function() {
      function t(A) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = d.emptyArray, t.prototype.hashedDetectedImages = d.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = d.emptyArray, t.prototype.detectionRecord = d.emptyArray, t.prototype.croppedImage = null, t.prototype.croppedImageWithPosition = null, t.prototype.platformDetails = null;
      let e;
      return Object.defineProperty(t.prototype, "_croppedImage", {
        get: d.oneOfGetter(e = ["croppedImage"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedImageWithPosition", {
        get: d.oneOfGetter(e = ["croppedImageWithPosition"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_platformDetails", {
        get: d.oneOfGetter(e = ["platformDetails"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let r = 0; r < A.availableCameraProperties.length; ++r)
            B.dot.v4.CameraProperties.encode(A.availableCameraProperties[r], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (A.hashedDetectedImages != null && A.hashedDetectedImages.length)
          for (let r = 0; r < A.hashedDetectedImages.length; ++r)
            o.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(A.hashedDetectedImages[r]);
        if (A.detectionRecord != null && A.detectionRecord.length)
          for (let r = 0; r < A.detectionRecord.length; ++r)
            B.dot.v4.DetectedObject.encode(A.detectionRecord[r], o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < A.hashedDetectedImagesWithTimestamp.length; ++r)
            B.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.croppedImage != null && Object.hasOwnProperty.call(A, "croppedImage") && B.dot.Image.encode(A.croppedImage, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.croppedImageWithPosition != null && Object.hasOwnProperty.call(A, "croppedImageWithPosition") && B.dot.v4.ImageCrop.encode(A.croppedImageWithPosition, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.platformDetails != null && Object.hasOwnProperty.call(A, "platformDetails") && B.dot.v4.PlatformDetails.encode(A.platformDetails, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.WebMetadata();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.currentCameraProperties = B.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.availableCameraProperties && g.availableCameraProperties.length || (g.availableCameraProperties = []), g.availableCameraProperties.push(B.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              g.hashedDetectedImages && g.hashedDetectedImages.length || (g.hashedDetectedImages = []), g.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              g.hashedDetectedImagesWithTimestamp && g.hashedDetectedImagesWithTimestamp.length || (g.hashedDetectedImagesWithTimestamp = []), g.hashedDetectedImagesWithTimestamp.push(B.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.detectionRecord && g.detectionRecord.length || (g.detectionRecord = []), g.detectionRecord.push(B.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              g.croppedImage = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.croppedImageWithPosition = B.dot.v4.ImageCrop.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.platformDetails = B.dot.v4.PlatformDetails.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties")) {
          let o = B.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (o)
            return "currentCameraProperties." + o;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let o = 0; o < A.availableCameraProperties.length; ++o) {
            let r = B.dot.v4.CameraProperties.verify(A.availableCameraProperties[o]);
            if (r)
              return "availableCameraProperties." + r;
          }
        }
        if (A.hashedDetectedImages != null && A.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(A.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let o = 0; o < A.hashedDetectedImages.length; ++o)
            if (!d.isString(A.hashedDetectedImages[o]))
              return "hashedDetectedImages: string[] expected";
        }
        if (A.hashedDetectedImagesWithTimestamp != null && A.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let o = 0; o < A.hashedDetectedImagesWithTimestamp.length; ++o) {
            let r = B.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[o]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let o = 0; o < A.detectionRecord.length; ++o) {
            let r = B.dot.v4.DetectedObject.verify(A.detectionRecord[o]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        if (A.croppedImage != null && A.hasOwnProperty("croppedImage")) {
          let o = B.dot.Image.verify(A.croppedImage);
          if (o)
            return "croppedImage." + o;
        }
        if (A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition")) {
          let o = B.dot.v4.ImageCrop.verify(A.croppedImageWithPosition);
          if (o)
            return "croppedImageWithPosition." + o;
        }
        if (A.platformDetails != null && A.hasOwnProperty("platformDetails")) {
          let o = B.dot.v4.PlatformDetails.verify(A.platformDetails);
          if (o)
            return "platformDetails." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.WebMetadata)
          return A;
        let o = new B.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          o.currentCameraProperties = B.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          o.availableCameraProperties = [];
          for (let r = 0; r < A.availableCameraProperties.length; ++r) {
            if (typeof A.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            o.availableCameraProperties[r] = B.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[r]);
          }
        }
        if (A.hashedDetectedImages) {
          if (!Array.isArray(A.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          o.hashedDetectedImages = [];
          for (let r = 0; r < A.hashedDetectedImages.length; ++r)
            o.hashedDetectedImages[r] = String(A.hashedDetectedImages[r]);
        }
        if (A.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          o.hashedDetectedImagesWithTimestamp = [];
          for (let r = 0; r < A.hashedDetectedImagesWithTimestamp.length; ++r) {
            if (typeof A.hashedDetectedImagesWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            o.hashedDetectedImagesWithTimestamp[r] = B.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          o.detectionRecord = [];
          for (let r = 0; r < A.detectionRecord.length; ++r) {
            if (typeof A.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            o.detectionRecord[r] = B.dot.v4.DetectedObject.fromObject(A.detectionRecord[r]);
          }
        }
        if (A.croppedImage != null) {
          if (typeof A.croppedImage != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImage: object expected");
          o.croppedImage = B.dot.Image.fromObject(A.croppedImage);
        }
        if (A.croppedImageWithPosition != null) {
          if (typeof A.croppedImageWithPosition != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImageWithPosition: object expected");
          o.croppedImageWithPosition = B.dot.v4.ImageCrop.fromObject(A.croppedImageWithPosition);
        }
        if (A.platformDetails != null) {
          if (typeof A.platformDetails != "object")
            throw TypeError(".dot.v4.WebMetadata.platformDetails: object expected");
          o.platformDetails = B.dot.v4.PlatformDetails.fromObject(A.platformDetails);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), o.defaults && (r.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = B.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, o)), A.availableCameraProperties && A.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let a = 0; a < A.availableCameraProperties.length; ++a)
            r.availableCameraProperties[a] = B.dot.v4.CameraProperties.toObject(A.availableCameraProperties[a], o);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let a = 0; a < A.hashedDetectedImages.length; ++a)
            r.hashedDetectedImages[a] = A.hashedDetectedImages[a];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          r.detectionRecord = [];
          for (let a = 0; a < A.detectionRecord.length; ++a)
            r.detectionRecord[a] = B.dot.v4.DetectedObject.toObject(A.detectionRecord[a], o);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let a = 0; a < A.hashedDetectedImagesWithTimestamp.length; ++a)
            r.hashedDetectedImagesWithTimestamp[a] = B.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[a], o);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (r.croppedImage = B.dot.Image.toObject(A.croppedImage, o), o.oneofs && (r._croppedImage = "croppedImage")), A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition") && (r.croppedImageWithPosition = B.dot.v4.ImageCrop.toObject(A.croppedImageWithPosition, o), o.oneofs && (r._croppedImageWithPosition = "croppedImageWithPosition")), A.platformDetails != null && A.hasOwnProperty("platformDetails") && (r.platformDetails = B.dot.v4.PlatformDetails.toObject(A.platformDetails, o), o.oneofs && (r._platformDetails = "platformDetails")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.WebMetadata";
      }, t;
    })(), n.HashedDetectedImageWithTimestamp = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = d.Long ? d.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.imageHash), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).uint64(e.timestampMillis), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.imageHash = e.string();
              break;
            }
            case 2: {
              a.timestampMillis = e.uint64();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !d.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !d.isInteger(e.timestampMillis) && !(e.timestampMillis && d.isInteger(e.timestampMillis.low) && d.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new B.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (A.imageHash = String(e.imageHash)), e.timestampMillis != null && (d.Long ? (A.timestampMillis = d.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if (A.defaults)
          if (o.imageHash = "", d.Long) {
            let r = new d.Long(0, 0, !0);
            o.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            o.timestampMillis = A.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (o.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? d.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    })(), n.MediaTrackSettings = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.aspectRatio = null, t.prototype.autoGainControl = null, t.prototype.channelCount = null, t.prototype.deviceId = null, t.prototype.displaySurface = null, t.prototype.echoCancellation = null, t.prototype.facingMode = null, t.prototype.frameRate = null, t.prototype.groupId = null, t.prototype.height = null, t.prototype.noiseSuppression = null, t.prototype.sampleRate = null, t.prototype.sampleSize = null, t.prototype.width = null, t.prototype.deviceName = null;
      let e;
      return Object.defineProperty(t.prototype, "_aspectRatio", {
        get: d.oneOfGetter(e = ["aspectRatio"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: d.oneOfGetter(e = ["autoGainControl"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: d.oneOfGetter(e = ["channelCount"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: d.oneOfGetter(e = ["deviceId"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: d.oneOfGetter(e = ["displaySurface"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: d.oneOfGetter(e = ["echoCancellation"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: d.oneOfGetter(e = ["facingMode"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: d.oneOfGetter(e = ["frameRate"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: d.oneOfGetter(e = ["groupId"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_height", {
        get: d.oneOfGetter(e = ["height"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: d.oneOfGetter(e = ["noiseSuppression"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: d.oneOfGetter(e = ["sampleRate"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: d.oneOfGetter(e = ["sampleSize"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_width", {
        get: d.oneOfGetter(e = ["width"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: d.oneOfGetter(e = ["deviceName"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.aspectRatio != null && Object.hasOwnProperty.call(A, "aspectRatio") && o.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(A.aspectRatio), A.autoGainControl != null && Object.hasOwnProperty.call(A, "autoGainControl") && o.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(A.autoGainControl), A.channelCount != null && Object.hasOwnProperty.call(A, "channelCount") && o.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(A.channelCount), A.deviceId != null && Object.hasOwnProperty.call(A, "deviceId") && o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(A.deviceId), A.displaySurface != null && Object.hasOwnProperty.call(A, "displaySurface") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.displaySurface), A.echoCancellation != null && Object.hasOwnProperty.call(A, "echoCancellation") && o.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(A.echoCancellation), A.facingMode != null && Object.hasOwnProperty.call(A, "facingMode") && o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(A.facingMode), A.frameRate != null && Object.hasOwnProperty.call(A, "frameRate") && o.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(A.frameRate), A.groupId != null && Object.hasOwnProperty.call(A, "groupId") && o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(A.groupId), A.height != null && Object.hasOwnProperty.call(A, "height") && o.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(A.height), A.noiseSuppression != null && Object.hasOwnProperty.call(A, "noiseSuppression") && o.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(A.noiseSuppression), A.sampleRate != null && Object.hasOwnProperty.call(A, "sampleRate") && o.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(A.sampleRate), A.sampleSize != null && Object.hasOwnProperty.call(A, "sampleSize") && o.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(A.sampleSize), A.width != null && Object.hasOwnProperty.call(A, "width") && o.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(A.width), A.deviceName != null && Object.hasOwnProperty.call(A, "deviceName") && o.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(A.deviceName), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.MediaTrackSettings();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.aspectRatio = A.double();
              break;
            }
            case 2: {
              g.autoGainControl = A.bool();
              break;
            }
            case 3: {
              g.channelCount = A.int32();
              break;
            }
            case 4: {
              g.deviceId = A.string();
              break;
            }
            case 5: {
              g.displaySurface = A.string();
              break;
            }
            case 6: {
              g.echoCancellation = A.bool();
              break;
            }
            case 7: {
              g.facingMode = A.string();
              break;
            }
            case 8: {
              g.frameRate = A.double();
              break;
            }
            case 9: {
              g.groupId = A.string();
              break;
            }
            case 10: {
              g.height = A.int32();
              break;
            }
            case 11: {
              g.noiseSuppression = A.bool();
              break;
            }
            case 12: {
              g.sampleRate = A.int32();
              break;
            }
            case 13: {
              g.sampleSize = A.int32();
              break;
            }
            case 14: {
              g.width = A.int32();
              break;
            }
            case 15: {
              g.deviceName = A.string();
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !d.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !d.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !d.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !d.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !d.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !d.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !d.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !d.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !d.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !d.isString(A.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.MediaTrackSettings)
          return A;
        let o = new B.dot.v4.MediaTrackSettings();
        return A.aspectRatio != null && (o.aspectRatio = Number(A.aspectRatio)), A.autoGainControl != null && (o.autoGainControl = !!A.autoGainControl), A.channelCount != null && (o.channelCount = A.channelCount | 0), A.deviceId != null && (o.deviceId = String(A.deviceId)), A.displaySurface != null && (o.displaySurface = String(A.displaySurface)), A.echoCancellation != null && (o.echoCancellation = !!A.echoCancellation), A.facingMode != null && (o.facingMode = String(A.facingMode)), A.frameRate != null && (o.frameRate = Number(A.frameRate)), A.groupId != null && (o.groupId = String(A.groupId)), A.height != null && (o.height = A.height | 0), A.noiseSuppression != null && (o.noiseSuppression = !!A.noiseSuppression), A.sampleRate != null && (o.sampleRate = A.sampleRate | 0), A.sampleSize != null && (o.sampleSize = A.sampleSize | 0), A.width != null && (o.width = A.width | 0), A.deviceName != null && (o.deviceName = String(A.deviceName)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && (r.aspectRatio = o.json && !isFinite(A.aspectRatio) ? String(A.aspectRatio) : A.aspectRatio, o.oneofs && (r._aspectRatio = "aspectRatio")), A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && (r.autoGainControl = A.autoGainControl, o.oneofs && (r._autoGainControl = "autoGainControl")), A.channelCount != null && A.hasOwnProperty("channelCount") && (r.channelCount = A.channelCount, o.oneofs && (r._channelCount = "channelCount")), A.deviceId != null && A.hasOwnProperty("deviceId") && (r.deviceId = A.deviceId, o.oneofs && (r._deviceId = "deviceId")), A.displaySurface != null && A.hasOwnProperty("displaySurface") && (r.displaySurface = A.displaySurface, o.oneofs && (r._displaySurface = "displaySurface")), A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && (r.echoCancellation = A.echoCancellation, o.oneofs && (r._echoCancellation = "echoCancellation")), A.facingMode != null && A.hasOwnProperty("facingMode") && (r.facingMode = A.facingMode, o.oneofs && (r._facingMode = "facingMode")), A.frameRate != null && A.hasOwnProperty("frameRate") && (r.frameRate = o.json && !isFinite(A.frameRate) ? String(A.frameRate) : A.frameRate, o.oneofs && (r._frameRate = "frameRate")), A.groupId != null && A.hasOwnProperty("groupId") && (r.groupId = A.groupId, o.oneofs && (r._groupId = "groupId")), A.height != null && A.hasOwnProperty("height") && (r.height = A.height, o.oneofs && (r._height = "height")), A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && (r.noiseSuppression = A.noiseSuppression, o.oneofs && (r._noiseSuppression = "noiseSuppression")), A.sampleRate != null && A.hasOwnProperty("sampleRate") && (r.sampleRate = A.sampleRate, o.oneofs && (r._sampleRate = "sampleRate")), A.sampleSize != null && A.hasOwnProperty("sampleSize") && (r.sampleSize = A.sampleSize, o.oneofs && (r._sampleSize = "sampleSize")), A.width != null && A.hasOwnProperty("width") && (r.width = A.width, o.oneofs && (r._width = "width")), A.deviceName != null && A.hasOwnProperty("deviceName") && (r.deviceName = A.deviceName, o.oneofs && (r._deviceName = "deviceName")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MediaTrackSettings";
      }, t;
    })(), n.ImageBitmap = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.width = 0, t.prototype.height = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.width), e.height != null && Object.hasOwnProperty.call(e, "height") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.height), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.ImageBitmap();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.width = e.int32();
              break;
            }
            case 2: {
              a.height = e.int32();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !d.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !d.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.ImageBitmap)
          return e;
        let A = new B.dot.v4.ImageBitmap();
        return e.width != null && (A.width = e.width | 0), e.height != null && (A.height = e.height | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.width = 0, o.height = 0), e.width != null && e.hasOwnProperty("width") && (o.width = e.width), e.height != null && e.hasOwnProperty("height") && (o.height = e.height), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    })(), n.CameraProperties = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: d.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && B.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.CameraProperties();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.cameraInitFrameResolution = B.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.cameraProperties = B.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution")) {
          let o = B.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (o)
            return "cameraInitFrameResolution." + o;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let o = B.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (o)
            return "cameraProperties." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.CameraProperties)
          return A;
        let o = new B.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          o.cameraInitFrameResolution = B.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          o.cameraProperties = B.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (r.cameraInitFrameResolution = B.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, o), o.oneofs && (r._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (r.cameraProperties = B.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, o)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.CameraProperties";
      }, t;
    })(), n.DetectedObject = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.brightness = 0, t.prototype.sharpness = 0, t.prototype.hotspots = 0, t.prototype.confidence = 0, t.prototype.faceSize = 0, t.prototype.faceCenter = null, t.prototype.smallestEdge = 0, t.prototype.bottomLeft = null, t.prototype.bottomRight = null, t.prototype.topLeft = null, t.prototype.topRight = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && A.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(e.brightness), e.sharpness != null && Object.hasOwnProperty.call(e, "sharpness") && A.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(e.sharpness), e.hotspots != null && Object.hasOwnProperty.call(e, "hotspots") && A.uint32(
          /* id 3, wireType 5 =*/
          29
        ).float(e.hotspots), e.confidence != null && Object.hasOwnProperty.call(e, "confidence") && A.uint32(
          /* id 4, wireType 5 =*/
          37
        ).float(e.confidence), e.faceSize != null && Object.hasOwnProperty.call(e, "faceSize") && A.uint32(
          /* id 5, wireType 5 =*/
          45
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && B.dot.v4.Point.encode(e.faceCenter, A.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && A.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && B.dot.v4.Point.encode(e.bottomLeft, A.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && B.dot.v4.Point.encode(e.bottomRight, A.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && B.dot.v4.Point.encode(e.topLeft, A.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && B.dot.v4.Point.encode(e.topRight, A.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.DetectedObject();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.brightness = e.float();
              break;
            }
            case 2: {
              a.sharpness = e.float();
              break;
            }
            case 3: {
              a.hotspots = e.float();
              break;
            }
            case 4: {
              a.confidence = e.float();
              break;
            }
            case 5: {
              a.faceSize = e.float();
              break;
            }
            case 6: {
              a.faceCenter = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              a.smallestEdge = e.float();
              break;
            }
            case 8: {
              a.bottomLeft = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              a.bottomRight = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              a.topLeft = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              a.topRight = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
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
          let A = B.dot.v4.Point.verify(e.faceCenter);
          if (A)
            return "faceCenter." + A;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let A = B.dot.v4.Point.verify(e.bottomLeft);
          if (A)
            return "bottomLeft." + A;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let A = B.dot.v4.Point.verify(e.bottomRight);
          if (A)
            return "bottomRight." + A;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let A = B.dot.v4.Point.verify(e.topLeft);
          if (A)
            return "topLeft." + A;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let A = B.dot.v4.Point.verify(e.topRight);
          if (A)
            return "topRight." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.DetectedObject)
          return e;
        let A = new B.dot.v4.DetectedObject();
        if (e.brightness != null && (A.brightness = Number(e.brightness)), e.sharpness != null && (A.sharpness = Number(e.sharpness)), e.hotspots != null && (A.hotspots = Number(e.hotspots)), e.confidence != null && (A.confidence = Number(e.confidence)), e.faceSize != null && (A.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          A.faceCenter = B.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (A.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          A.bottomLeft = B.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          A.bottomRight = B.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          A.topLeft = B.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          A.topRight = B.dot.v4.Point.fromObject(e.topRight);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.brightness = 0, o.sharpness = 0, o.hotspots = 0, o.confidence = 0, o.faceSize = 0, o.faceCenter = null, o.smallestEdge = 0, o.bottomLeft = null, o.bottomRight = null, o.topLeft = null, o.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (o.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (o.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (o.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (o.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (o.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (o.faceCenter = B.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (o.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (o.bottomLeft = B.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (o.bottomRight = B.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (o.topLeft = B.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (o.topRight = B.dot.v4.Point.toObject(e.topRight, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    })(), n.Point = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.x = 0, t.prototype.y = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && A.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(e.x), e.y != null && Object.hasOwnProperty.call(e, "y") && A.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(e.y), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.Point();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.x = e.float();
              break;
            }
            case 2: {
              a.y = e.float();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.x != null && e.hasOwnProperty("x") && typeof e.x != "number" ? "x: number expected" : e.y != null && e.hasOwnProperty("y") && typeof e.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.Point)
          return e;
        let A = new B.dot.v4.Point();
        return e.x != null && (A.x = Number(e.x)), e.y != null && (A.y = Number(e.y)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.x = 0, o.y = 0), e.x != null && e.hasOwnProperty("x") && (o.x = A.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (o.y = A.json && !isFinite(e.y) ? String(e.y) : e.y), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    })(), n.ImageCrop = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && B.dot.v4.Point.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = B.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = B.dot.v4.Point.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.ImageCrop)
          return e;
        let A = new B.dot.v4.ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.ImageCrop.image: object expected");
          A.image = B.dot.Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = B.dot.v4.Point.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = B.dot.Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = B.dot.v4.Point.toObject(e.topLeftCorner, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageCrop";
      }, t;
    })(), n.PlatformDetails = (function() {
      function t(A) {
        if (this.browserVersions = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.userAgent = "", t.prototype.platform = null, t.prototype.platformVersion = null, t.prototype.architecture = null, t.prototype.model = null, t.prototype.browserVersions = d.emptyArray, t.prototype.installationId = null;
      let e;
      return Object.defineProperty(t.prototype, "_platform", {
        get: d.oneOfGetter(e = ["platform"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_platformVersion", {
        get: d.oneOfGetter(e = ["platformVersion"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_architecture", {
        get: d.oneOfGetter(e = ["architecture"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_model", {
        get: d.oneOfGetter(e = ["model"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_installationId", {
        get: d.oneOfGetter(e = ["installationId"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.userAgent != null && Object.hasOwnProperty.call(A, "userAgent") && o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.userAgent), A.platform != null && Object.hasOwnProperty.call(A, "platform") && o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(A.platform), A.platformVersion != null && Object.hasOwnProperty.call(A, "platformVersion") && o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).string(A.platformVersion), A.architecture != null && Object.hasOwnProperty.call(A, "architecture") && o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(A.architecture), A.model != null && Object.hasOwnProperty.call(A, "model") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.model), A.browserVersions != null && A.browserVersions.length)
          for (let r = 0; r < A.browserVersions.length; ++r)
            B.dot.v4.BrowserVersion.encode(A.browserVersions[r], o.uint32(
              /* id 6, wireType 2 =*/
              50
            ).fork()).ldelim();
        return A.installationId != null && Object.hasOwnProperty.call(A, "installationId") && o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(A.installationId), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.PlatformDetails();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.userAgent = A.string();
              break;
            }
            case 2: {
              g.platform = A.string();
              break;
            }
            case 3: {
              g.platformVersion = A.string();
              break;
            }
            case 4: {
              g.architecture = A.string();
              break;
            }
            case 5: {
              g.model = A.string();
              break;
            }
            case 6: {
              g.browserVersions && g.browserVersions.length || (g.browserVersions = []), g.browserVersions.push(B.dot.v4.BrowserVersion.decode(A, A.uint32()));
              break;
            }
            case 7: {
              g.installationId = A.string();
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.userAgent != null && A.hasOwnProperty("userAgent") && !d.isString(A.userAgent))
          return "userAgent: string expected";
        if (A.platform != null && A.hasOwnProperty("platform") && !d.isString(A.platform))
          return "platform: string expected";
        if (A.platformVersion != null && A.hasOwnProperty("platformVersion") && !d.isString(A.platformVersion))
          return "platformVersion: string expected";
        if (A.architecture != null && A.hasOwnProperty("architecture") && !d.isString(A.architecture))
          return "architecture: string expected";
        if (A.model != null && A.hasOwnProperty("model") && !d.isString(A.model))
          return "model: string expected";
        if (A.browserVersions != null && A.hasOwnProperty("browserVersions")) {
          if (!Array.isArray(A.browserVersions))
            return "browserVersions: array expected";
          for (let o = 0; o < A.browserVersions.length; ++o) {
            let r = B.dot.v4.BrowserVersion.verify(A.browserVersions[o]);
            if (r)
              return "browserVersions." + r;
          }
        }
        return A.installationId != null && A.hasOwnProperty("installationId") && !d.isString(A.installationId) ? "installationId: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.PlatformDetails)
          return A;
        let o = new B.dot.v4.PlatformDetails();
        if (A.userAgent != null && (o.userAgent = String(A.userAgent)), A.platform != null && (o.platform = String(A.platform)), A.platformVersion != null && (o.platformVersion = String(A.platformVersion)), A.architecture != null && (o.architecture = String(A.architecture)), A.model != null && (o.model = String(A.model)), A.browserVersions) {
          if (!Array.isArray(A.browserVersions))
            throw TypeError(".dot.v4.PlatformDetails.browserVersions: array expected");
          o.browserVersions = [];
          for (let r = 0; r < A.browserVersions.length; ++r) {
            if (typeof A.browserVersions[r] != "object")
              throw TypeError(".dot.v4.PlatformDetails.browserVersions: object expected");
            o.browserVersions[r] = B.dot.v4.BrowserVersion.fromObject(A.browserVersions[r]);
          }
        }
        return A.installationId != null && (o.installationId = String(A.installationId)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.browserVersions = []), o.defaults && (r.userAgent = ""), A.userAgent != null && A.hasOwnProperty("userAgent") && (r.userAgent = A.userAgent), A.platform != null && A.hasOwnProperty("platform") && (r.platform = A.platform, o.oneofs && (r._platform = "platform")), A.platformVersion != null && A.hasOwnProperty("platformVersion") && (r.platformVersion = A.platformVersion, o.oneofs && (r._platformVersion = "platformVersion")), A.architecture != null && A.hasOwnProperty("architecture") && (r.architecture = A.architecture, o.oneofs && (r._architecture = "architecture")), A.model != null && A.hasOwnProperty("model") && (r.model = A.model, o.oneofs && (r._model = "model")), A.browserVersions && A.browserVersions.length) {
          r.browserVersions = [];
          for (let a = 0; a < A.browserVersions.length; ++a)
            r.browserVersions[a] = B.dot.v4.BrowserVersion.toObject(A.browserVersions[a], o);
        }
        return A.installationId != null && A.hasOwnProperty("installationId") && (r.installationId = A.installationId, o.oneofs && (r._installationId = "installationId")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.PlatformDetails";
      }, t;
    })(), n.BrowserVersion = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.name = "", t.prototype.version = "", t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.name != null && Object.hasOwnProperty.call(e, "name") && A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.name), e.version != null && Object.hasOwnProperty.call(e, "version") && A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(e.version), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.BrowserVersion();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.name = e.string();
              break;
            }
            case 2: {
              a.version = e.string();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.name != null && e.hasOwnProperty("name") && !d.isString(e.name) ? "name: string expected" : e.version != null && e.hasOwnProperty("version") && !d.isString(e.version) ? "version: string expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.BrowserVersion)
          return e;
        let A = new B.dot.v4.BrowserVersion();
        return e.name != null && (A.name = String(e.name)), e.version != null && (A.version = String(e.version)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.name = "", o.version = ""), e.name != null && e.hasOwnProperty("name") && (o.name = e.name), e.version != null && e.hasOwnProperty("version") && (o.version = e.version), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.BrowserVersion";
      }, t;
    })(), n.FaceContent = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && B.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.FaceContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = B.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = B.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = B.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.FaceContent)
          return A;
        let o = new B.dot.v4.FaceContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          o.image = B.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.FaceContent.video: object expected");
          o.video = B.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          o.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = B.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = B.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = B.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.FaceContent";
      }, t;
    })(), n.DocumentContent = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && B.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.DocumentContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = B.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = B.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = B.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.DocumentContent)
          return A;
        let o = new B.dot.v4.DocumentContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          o.image = B.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.DocumentContent.video: object expected");
          o.video = B.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          o.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = B.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = B.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = B.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.DocumentContent";
      }, t;
    })(), n.Blob = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null, t.prototype.travelDocumentContent = null, t.prototype.multiRangeLivenessContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: d.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent", "multiRangeLivenessContent"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && B.dot.v4.DocumentContent.encode(A.documentContent, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && B.dot.v4.FaceContent.encode(A.faceContent, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && B.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && B.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && B.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && B.dot.v4.PalmContent.encode(A.palmContent, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.travelDocumentContent != null && Object.hasOwnProperty.call(A, "travelDocumentContent") && B.dot.v4.TravelDocumentContent.encode(A.travelDocumentContent, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.multiRangeLivenessContent != null && Object.hasOwnProperty.call(A, "multiRangeLivenessContent") && B.dot.v4.MultiRangeLivenessContent.encode(A.multiRangeLivenessContent, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.Blob();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.documentContent = B.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              g.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.faceContent = B.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.smileLivenessContent = B.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              g.palmContent = B.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.travelDocumentContent = B.dot.v4.TravelDocumentContent.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.multiRangeLivenessContent = B.dot.v4.MultiRangeLivenessContent.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let o = {};
        if (A.documentContent != null && A.hasOwnProperty("documentContent")) {
          o.blob = 1;
          {
            let r = B.dot.v4.DocumentContent.verify(A.documentContent);
            if (r)
              return "documentContent." + r;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = B.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (r)
              return "eyeGazeLivenessContent." + r;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = B.dot.v4.FaceContent.verify(A.faceContent);
            if (r)
              return "faceContent." + r;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = B.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (r)
              return "magnifeyeLivenessContent." + r;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = B.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (r)
              return "smileLivenessContent." + r;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = B.dot.v4.PalmContent.verify(A.palmContent);
            if (r)
              return "palmContent." + r;
          }
        }
        if (A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = B.dot.v4.TravelDocumentContent.verify(A.travelDocumentContent);
            if (r)
              return "travelDocumentContent." + r;
          }
        }
        if (A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = B.dot.v4.MultiRangeLivenessContent.verify(A.multiRangeLivenessContent);
            if (r)
              return "multiRangeLivenessContent." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Blob)
          return A;
        let o = new B.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          o.documentContent = B.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          o.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          o.faceContent = B.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          o.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          o.smileLivenessContent = B.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          o.palmContent = B.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        if (A.travelDocumentContent != null) {
          if (typeof A.travelDocumentContent != "object")
            throw TypeError(".dot.v4.Blob.travelDocumentContent: object expected");
          o.travelDocumentContent = B.dot.v4.TravelDocumentContent.fromObject(A.travelDocumentContent);
        }
        if (A.multiRangeLivenessContent != null) {
          if (typeof A.multiRangeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.multiRangeLivenessContent: object expected");
          o.multiRangeLivenessContent = B.dot.v4.MultiRangeLivenessContent.fromObject(A.multiRangeLivenessContent);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (r.documentContent = B.dot.v4.DocumentContent.toObject(A.documentContent, o), o.oneofs && (r.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (r.faceContent = B.dot.v4.FaceContent.toObject(A.faceContent, o), o.oneofs && (r.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (r.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, o), o.oneofs && (r.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (r.smileLivenessContent = B.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, o), o.oneofs && (r.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (r.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, o), o.oneofs && (r.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (r.palmContent = B.dot.v4.PalmContent.toObject(A.palmContent, o), o.oneofs && (r.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (r.travelDocumentContent = B.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, o), o.oneofs && (r.blob = "travelDocumentContent")), A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent") && (r.multiRangeLivenessContent = B.dot.v4.MultiRangeLivenessContent.toObject(A.multiRangeLivenessContent, o), o.oneofs && (r.blob = "multiRangeLivenessContent")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Blob";
      }, t;
    })(), n.TravelDocumentContent = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.ldsMasterFile = null, t.prototype.accessControlProtocolUsed = 0, t.prototype.authenticationStatus = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && B.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.accessControlProtocolUsed != null && Object.hasOwnProperty.call(e, "accessControlProtocolUsed") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.accessControlProtocolUsed), e.authenticationStatus != null && Object.hasOwnProperty.call(e, "authenticationStatus") && B.dot.v4.AuthenticationStatus.encode(e.authenticationStatus, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && B.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.TravelDocumentContent();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.ldsMasterFile = B.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              a.authenticationStatus = B.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              a.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile")) {
          let A = B.dot.v4.LdsMasterFile.verify(e.ldsMasterFile);
          if (A)
            return "ldsMasterFile." + A;
        }
        if (e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed"))
          switch (e.accessControlProtocolUsed) {
            default:
              return "accessControlProtocolUsed: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus")) {
          let A = B.dot.v4.AuthenticationStatus.verify(e.authenticationStatus);
          if (A)
            return "authenticationStatus." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = B.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.TravelDocumentContent)
          return e;
        let A = new B.dot.v4.TravelDocumentContent();
        if (e.ldsMasterFile != null) {
          if (typeof e.ldsMasterFile != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.ldsMasterFile: object expected");
          A.ldsMasterFile = B.dot.v4.LdsMasterFile.fromObject(e.ldsMasterFile);
        }
        switch (e.accessControlProtocolUsed) {
          default:
            if (typeof e.accessControlProtocolUsed == "number") {
              A.accessControlProtocolUsed = e.accessControlProtocolUsed;
              break;
            }
            break;
          case "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED":
          case 0:
            A.accessControlProtocolUsed = 0;
            break;
          case "ACCESS_CONTROL_PROTOCOL_BAC":
          case 1:
            A.accessControlProtocolUsed = 1;
            break;
          case "ACCESS_CONTROL_PROTOCOL_PACE":
          case 2:
            A.accessControlProtocolUsed = 2;
            break;
        }
        if (e.authenticationStatus != null) {
          if (typeof e.authenticationStatus != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.authenticationStatus: object expected");
          A.authenticationStatus = B.dot.v4.AuthenticationStatus.fromObject(e.authenticationStatus);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.metadata: object expected");
          A.metadata = B.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.ldsMasterFile = null, o.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, o.authenticationStatus = null, o.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (o.ldsMasterFile = B.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (o.accessControlProtocolUsed = A.enums === String ? B.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : B.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (o.authenticationStatus = B.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.TravelDocumentContent";
      }, t;
    })(), n.LdsMasterFile = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.lds1eMrtdApplication = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && B.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.LdsMasterFile();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          g >>> 3 === 1 ? a.lds1eMrtdApplication = B.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32()) : e.skipType(g & 7);
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication")) {
          let A = B.dot.v4.Lds1eMrtdApplication.verify(e.lds1eMrtdApplication);
          if (A)
            return "lds1eMrtdApplication." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.LdsMasterFile)
          return e;
        let A = new B.dot.v4.LdsMasterFile();
        if (e.lds1eMrtdApplication != null) {
          if (typeof e.lds1eMrtdApplication != "object")
            throw TypeError(".dot.v4.LdsMasterFile.lds1eMrtdApplication: object expected");
          A.lds1eMrtdApplication = B.dot.v4.Lds1eMrtdApplication.fromObject(e.lds1eMrtdApplication);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (o.lds1eMrtdApplication = B.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.LdsMasterFile";
      }, t;
    })(), n.Lds1eMrtdApplication = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.comHeaderAndDataGroupPresenceInformation = null, t.prototype.sodDocumentSecurityObject = null, t.prototype.dg1MachineReadableZoneInformation = null, t.prototype.dg2EncodedIdentificationFeaturesFace = null, t.prototype.dg3AdditionalIdentificationFeatureFingers = null, t.prototype.dg4AdditionalIdentificationFeatureIrises = null, t.prototype.dg5DisplayedPortrait = null, t.prototype.dg7DisplayedSignatureOrUsualMark = null, t.prototype.dg8DataFeatures = null, t.prototype.dg9StructureFeatures = null, t.prototype.dg10SubstanceFeatures = null, t.prototype.dg11AdditionalPersonalDetails = null, t.prototype.dg12AdditionalDocumentDetails = null, t.prototype.dg13OptionalDetails = null, t.prototype.dg14SecurityOptions = null, t.prototype.dg15ActiveAuthenticationPublicKeyInfo = null, t.prototype.dg16PersonsToNotify = null;
      let e;
      return Object.defineProperty(t.prototype, "_dg3AdditionalIdentificationFeatureFingers", {
        get: d.oneOfGetter(e = ["dg3AdditionalIdentificationFeatureFingers"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg4AdditionalIdentificationFeatureIrises", {
        get: d.oneOfGetter(e = ["dg4AdditionalIdentificationFeatureIrises"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg5DisplayedPortrait", {
        get: d.oneOfGetter(e = ["dg5DisplayedPortrait"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg7DisplayedSignatureOrUsualMark", {
        get: d.oneOfGetter(e = ["dg7DisplayedSignatureOrUsualMark"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg8DataFeatures", {
        get: d.oneOfGetter(e = ["dg8DataFeatures"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg9StructureFeatures", {
        get: d.oneOfGetter(e = ["dg9StructureFeatures"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg10SubstanceFeatures", {
        get: d.oneOfGetter(e = ["dg10SubstanceFeatures"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg11AdditionalPersonalDetails", {
        get: d.oneOfGetter(e = ["dg11AdditionalPersonalDetails"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg12AdditionalDocumentDetails", {
        get: d.oneOfGetter(e = ["dg12AdditionalDocumentDetails"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg13OptionalDetails", {
        get: d.oneOfGetter(e = ["dg13OptionalDetails"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg14SecurityOptions", {
        get: d.oneOfGetter(e = ["dg14SecurityOptions"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg15ActiveAuthenticationPublicKeyInfo", {
        get: d.oneOfGetter(e = ["dg15ActiveAuthenticationPublicKeyInfo"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg16PersonsToNotify", {
        get: d.oneOfGetter(e = ["dg16PersonsToNotify"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && B.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.sodDocumentSecurityObject != null && Object.hasOwnProperty.call(A, "sodDocumentSecurityObject") && B.dot.v4.Lds1ElementaryFile.encode(A.sodDocumentSecurityObject, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.dg1MachineReadableZoneInformation != null && Object.hasOwnProperty.call(A, "dg1MachineReadableZoneInformation") && B.dot.v4.Lds1ElementaryFile.encode(A.dg1MachineReadableZoneInformation, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.dg2EncodedIdentificationFeaturesFace != null && Object.hasOwnProperty.call(A, "dg2EncodedIdentificationFeaturesFace") && B.dot.v4.Lds1ElementaryFile.encode(A.dg2EncodedIdentificationFeaturesFace, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.dg3AdditionalIdentificationFeatureFingers != null && Object.hasOwnProperty.call(A, "dg3AdditionalIdentificationFeatureFingers") && B.dot.v4.Lds1ElementaryFile.encode(A.dg3AdditionalIdentificationFeatureFingers, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.dg4AdditionalIdentificationFeatureIrises != null && Object.hasOwnProperty.call(A, "dg4AdditionalIdentificationFeatureIrises") && B.dot.v4.Lds1ElementaryFile.encode(A.dg4AdditionalIdentificationFeatureIrises, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.dg5DisplayedPortrait != null && Object.hasOwnProperty.call(A, "dg5DisplayedPortrait") && B.dot.v4.Lds1ElementaryFile.encode(A.dg5DisplayedPortrait, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.dg7DisplayedSignatureOrUsualMark != null && Object.hasOwnProperty.call(A, "dg7DisplayedSignatureOrUsualMark") && B.dot.v4.Lds1ElementaryFile.encode(A.dg7DisplayedSignatureOrUsualMark, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.dg8DataFeatures != null && Object.hasOwnProperty.call(A, "dg8DataFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg8DataFeatures, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.dg9StructureFeatures != null && Object.hasOwnProperty.call(A, "dg9StructureFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg9StructureFeatures, o.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.dg10SubstanceFeatures != null && Object.hasOwnProperty.call(A, "dg10SubstanceFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg10SubstanceFeatures, o.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A.dg11AdditionalPersonalDetails != null && Object.hasOwnProperty.call(A, "dg11AdditionalPersonalDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg11AdditionalPersonalDetails, o.uint32(
          /* id 12, wireType 2 =*/
          98
        ).fork()).ldelim(), A.dg12AdditionalDocumentDetails != null && Object.hasOwnProperty.call(A, "dg12AdditionalDocumentDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg12AdditionalDocumentDetails, o.uint32(
          /* id 13, wireType 2 =*/
          106
        ).fork()).ldelim(), A.dg13OptionalDetails != null && Object.hasOwnProperty.call(A, "dg13OptionalDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg13OptionalDetails, o.uint32(
          /* id 14, wireType 2 =*/
          114
        ).fork()).ldelim(), A.dg14SecurityOptions != null && Object.hasOwnProperty.call(A, "dg14SecurityOptions") && B.dot.v4.Lds1ElementaryFile.encode(A.dg14SecurityOptions, o.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim(), A.dg15ActiveAuthenticationPublicKeyInfo != null && Object.hasOwnProperty.call(A, "dg15ActiveAuthenticationPublicKeyInfo") && B.dot.v4.Lds1ElementaryFile.encode(A.dg15ActiveAuthenticationPublicKeyInfo, o.uint32(
          /* id 16, wireType 2 =*/
          130
        ).fork()).ldelim(), A.dg16PersonsToNotify != null && Object.hasOwnProperty.call(A, "dg16PersonsToNotify") && B.dot.v4.Lds1ElementaryFile.encode(A.dg16PersonsToNotify, o.uint32(
          /* id 17, wireType 2 =*/
          138
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              g.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              g.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              g.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              g.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              g.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              g.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              g.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              g.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              g.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              g.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              g.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.comHeaderAndDataGroupPresenceInformation);
          if (o)
            return "comHeaderAndDataGroupPresenceInformation." + o;
        }
        if (A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.sodDocumentSecurityObject);
          if (o)
            return "sodDocumentSecurityObject." + o;
        }
        if (A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg1MachineReadableZoneInformation);
          if (o)
            return "dg1MachineReadableZoneInformation." + o;
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg2EncodedIdentificationFeaturesFace);
          if (o)
            return "dg2EncodedIdentificationFeaturesFace." + o;
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg3AdditionalIdentificationFeatureFingers);
          if (o)
            return "dg3AdditionalIdentificationFeatureFingers." + o;
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg4AdditionalIdentificationFeatureIrises);
          if (o)
            return "dg4AdditionalIdentificationFeatureIrises." + o;
        }
        if (A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg5DisplayedPortrait);
          if (o)
            return "dg5DisplayedPortrait." + o;
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg7DisplayedSignatureOrUsualMark);
          if (o)
            return "dg7DisplayedSignatureOrUsualMark." + o;
        }
        if (A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg8DataFeatures);
          if (o)
            return "dg8DataFeatures." + o;
        }
        if (A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg9StructureFeatures);
          if (o)
            return "dg9StructureFeatures." + o;
        }
        if (A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg10SubstanceFeatures);
          if (o)
            return "dg10SubstanceFeatures." + o;
        }
        if (A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg11AdditionalPersonalDetails);
          if (o)
            return "dg11AdditionalPersonalDetails." + o;
        }
        if (A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg12AdditionalDocumentDetails);
          if (o)
            return "dg12AdditionalDocumentDetails." + o;
        }
        if (A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg13OptionalDetails);
          if (o)
            return "dg13OptionalDetails." + o;
        }
        if (A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg14SecurityOptions);
          if (o)
            return "dg14SecurityOptions." + o;
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg15ActiveAuthenticationPublicKeyInfo);
          if (o)
            return "dg15ActiveAuthenticationPublicKeyInfo." + o;
        }
        if (A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg16PersonsToNotify);
          if (o)
            return "dg16PersonsToNotify." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Lds1eMrtdApplication)
          return A;
        let o = new B.dot.v4.Lds1eMrtdApplication();
        if (A.comHeaderAndDataGroupPresenceInformation != null) {
          if (typeof A.comHeaderAndDataGroupPresenceInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.comHeaderAndDataGroupPresenceInformation: object expected");
          o.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.fromObject(A.comHeaderAndDataGroupPresenceInformation);
        }
        if (A.sodDocumentSecurityObject != null) {
          if (typeof A.sodDocumentSecurityObject != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.sodDocumentSecurityObject: object expected");
          o.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.fromObject(A.sodDocumentSecurityObject);
        }
        if (A.dg1MachineReadableZoneInformation != null) {
          if (typeof A.dg1MachineReadableZoneInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg1MachineReadableZoneInformation: object expected");
          o.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg1MachineReadableZoneInformation);
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null) {
          if (typeof A.dg2EncodedIdentificationFeaturesFace != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg2EncodedIdentificationFeaturesFace: object expected");
          o.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg2EncodedIdentificationFeaturesFace);
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null) {
          if (typeof A.dg3AdditionalIdentificationFeatureFingers != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg3AdditionalIdentificationFeatureFingers: object expected");
          o.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg3AdditionalIdentificationFeatureFingers);
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null) {
          if (typeof A.dg4AdditionalIdentificationFeatureIrises != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg4AdditionalIdentificationFeatureIrises: object expected");
          o.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg4AdditionalIdentificationFeatureIrises);
        }
        if (A.dg5DisplayedPortrait != null) {
          if (typeof A.dg5DisplayedPortrait != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg5DisplayedPortrait: object expected");
          o.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg5DisplayedPortrait);
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null) {
          if (typeof A.dg7DisplayedSignatureOrUsualMark != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg7DisplayedSignatureOrUsualMark: object expected");
          o.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg7DisplayedSignatureOrUsualMark);
        }
        if (A.dg8DataFeatures != null) {
          if (typeof A.dg8DataFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg8DataFeatures: object expected");
          o.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg8DataFeatures);
        }
        if (A.dg9StructureFeatures != null) {
          if (typeof A.dg9StructureFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg9StructureFeatures: object expected");
          o.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg9StructureFeatures);
        }
        if (A.dg10SubstanceFeatures != null) {
          if (typeof A.dg10SubstanceFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg10SubstanceFeatures: object expected");
          o.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg10SubstanceFeatures);
        }
        if (A.dg11AdditionalPersonalDetails != null) {
          if (typeof A.dg11AdditionalPersonalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg11AdditionalPersonalDetails: object expected");
          o.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg11AdditionalPersonalDetails);
        }
        if (A.dg12AdditionalDocumentDetails != null) {
          if (typeof A.dg12AdditionalDocumentDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg12AdditionalDocumentDetails: object expected");
          o.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg12AdditionalDocumentDetails);
        }
        if (A.dg13OptionalDetails != null) {
          if (typeof A.dg13OptionalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg13OptionalDetails: object expected");
          o.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg13OptionalDetails);
        }
        if (A.dg14SecurityOptions != null) {
          if (typeof A.dg14SecurityOptions != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg14SecurityOptions: object expected");
          o.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg14SecurityOptions);
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null) {
          if (typeof A.dg15ActiveAuthenticationPublicKeyInfo != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg15ActiveAuthenticationPublicKeyInfo: object expected");
          o.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg15ActiveAuthenticationPublicKeyInfo);
        }
        if (A.dg16PersonsToNotify != null) {
          if (typeof A.dg16PersonsToNotify != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg16PersonsToNotify: object expected");
          o.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg16PersonsToNotify);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.comHeaderAndDataGroupPresenceInformation = null, r.sodDocumentSecurityObject = null, r.dg1MachineReadableZoneInformation = null, r.dg2EncodedIdentificationFeaturesFace = null), A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation") && (r.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.toObject(A.comHeaderAndDataGroupPresenceInformation, o)), A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject") && (r.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.toObject(A.sodDocumentSecurityObject, o)), A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation") && (r.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.toObject(A.dg1MachineReadableZoneInformation, o)), A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace") && (r.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.toObject(A.dg2EncodedIdentificationFeaturesFace, o)), A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers") && (r.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.toObject(A.dg3AdditionalIdentificationFeatureFingers, o), o.oneofs && (r._dg3AdditionalIdentificationFeatureFingers = "dg3AdditionalIdentificationFeatureFingers")), A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises") && (r.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.toObject(A.dg4AdditionalIdentificationFeatureIrises, o), o.oneofs && (r._dg4AdditionalIdentificationFeatureIrises = "dg4AdditionalIdentificationFeatureIrises")), A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait") && (r.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.toObject(A.dg5DisplayedPortrait, o), o.oneofs && (r._dg5DisplayedPortrait = "dg5DisplayedPortrait")), A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark") && (r.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.toObject(A.dg7DisplayedSignatureOrUsualMark, o), o.oneofs && (r._dg7DisplayedSignatureOrUsualMark = "dg7DisplayedSignatureOrUsualMark")), A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures") && (r.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg8DataFeatures, o), o.oneofs && (r._dg8DataFeatures = "dg8DataFeatures")), A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures") && (r.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg9StructureFeatures, o), o.oneofs && (r._dg9StructureFeatures = "dg9StructureFeatures")), A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures") && (r.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg10SubstanceFeatures, o), o.oneofs && (r._dg10SubstanceFeatures = "dg10SubstanceFeatures")), A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails") && (r.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg11AdditionalPersonalDetails, o), o.oneofs && (r._dg11AdditionalPersonalDetails = "dg11AdditionalPersonalDetails")), A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails") && (r.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg12AdditionalDocumentDetails, o), o.oneofs && (r._dg12AdditionalDocumentDetails = "dg12AdditionalDocumentDetails")), A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails") && (r.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg13OptionalDetails, o), o.oneofs && (r._dg13OptionalDetails = "dg13OptionalDetails")), A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions") && (r.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.toObject(A.dg14SecurityOptions, o), o.oneofs && (r._dg14SecurityOptions = "dg14SecurityOptions")), A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo") && (r.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.toObject(A.dg15ActiveAuthenticationPublicKeyInfo, o), o.oneofs && (r._dg15ActiveAuthenticationPublicKeyInfo = "dg15ActiveAuthenticationPublicKeyInfo")), A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify") && (r.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.toObject(A.dg16PersonsToNotify, o), o.oneofs && (r._dg16PersonsToNotify = "dg16PersonsToNotify")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1eMrtdApplication";
      }, t;
    })(), n.Lds1ElementaryFile = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.id = 0, t.prototype.bytes = null;
      let e;
      return Object.defineProperty(t.prototype, "_bytes", {
        get: d.oneOfGetter(e = ["bytes"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.id != null && Object.hasOwnProperty.call(A, "id") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.id), A.bytes != null && Object.hasOwnProperty.call(A, "bytes") && o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).bytes(A.bytes), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.Lds1ElementaryFile();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.id = A.int32();
              break;
            }
            case 2: {
              g.bytes = A.bytes();
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.id != null && A.hasOwnProperty("id"))
          switch (A.id) {
            default:
              return "id: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
              break;
          }
        return A.bytes != null && A.hasOwnProperty("bytes") && !(A.bytes && typeof A.bytes.length == "number" || d.isString(A.bytes)) ? "bytes: buffer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Lds1ElementaryFile)
          return A;
        let o = new B.dot.v4.Lds1ElementaryFile();
        switch (A.id) {
          default:
            if (typeof A.id == "number") {
              o.id = A.id;
              break;
            }
            break;
          case "ID_UNSPECIFIED":
          case 0:
            o.id = 0;
            break;
          case "ID_COM":
          case 1:
            o.id = 1;
            break;
          case "ID_SOD":
          case 2:
            o.id = 2;
            break;
          case "ID_DG1":
          case 3:
            o.id = 3;
            break;
          case "ID_DG2":
          case 4:
            o.id = 4;
            break;
          case "ID_DG3":
          case 5:
            o.id = 5;
            break;
          case "ID_DG4":
          case 6:
            o.id = 6;
            break;
          case "ID_DG5":
          case 7:
            o.id = 7;
            break;
          case "ID_DG7":
          case 8:
            o.id = 8;
            break;
          case "ID_DG8":
          case 9:
            o.id = 9;
            break;
          case "ID_DG9":
          case 10:
            o.id = 10;
            break;
          case "ID_DG10":
          case 11:
            o.id = 11;
            break;
          case "ID_DG11":
          case 12:
            o.id = 12;
            break;
          case "ID_DG12":
          case 13:
            o.id = 13;
            break;
          case "ID_DG13":
          case 14:
            o.id = 14;
            break;
          case "ID_DG14":
          case 15:
            o.id = 15;
            break;
          case "ID_DG15":
          case 16:
            o.id = 16;
            break;
          case "ID_DG16":
          case 17:
            o.id = 17;
            break;
        }
        return A.bytes != null && (typeof A.bytes == "string" ? d.base64.decode(A.bytes, o.bytes = d.newBuffer(d.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (o.bytes = A.bytes)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.id = o.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (r.id = o.enums === String ? B.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : B.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (r.bytes = o.bytes === String ? d.base64.encode(A.bytes, 0, A.bytes.length) : o.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, o.oneofs && (r._bytes = "bytes")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1ElementaryFile";
      }, t.Id = (function() {
        const A = {}, o = Object.create(A);
        return o[A[0] = "ID_UNSPECIFIED"] = 0, o[A[1] = "ID_COM"] = 1, o[A[2] = "ID_SOD"] = 2, o[A[3] = "ID_DG1"] = 3, o[A[4] = "ID_DG2"] = 4, o[A[5] = "ID_DG3"] = 5, o[A[6] = "ID_DG4"] = 6, o[A[7] = "ID_DG5"] = 7, o[A[8] = "ID_DG7"] = 8, o[A[9] = "ID_DG8"] = 9, o[A[10] = "ID_DG9"] = 10, o[A[11] = "ID_DG10"] = 11, o[A[12] = "ID_DG11"] = 12, o[A[13] = "ID_DG12"] = 13, o[A[14] = "ID_DG13"] = 14, o[A[15] = "ID_DG14"] = 15, o[A[16] = "ID_DG15"] = 16, o[A[17] = "ID_DG16"] = 17, o;
      })(), t;
    })(), n.AccessControlProtocol = (function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED"] = 0, e[t[1] = "ACCESS_CONTROL_PROTOCOL_BAC"] = 1, e[t[2] = "ACCESS_CONTROL_PROTOCOL_PACE"] = 2, e;
    })(), n.AuthenticationStatus = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.data = null, t.prototype.chip = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && B.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && B.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.AuthenticationStatus();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.data = B.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.chip = B.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.data != null && e.hasOwnProperty("data")) {
          let A = B.dot.v4.DataAuthenticationStatus.verify(e.data);
          if (A)
            return "data." + A;
        }
        if (e.chip != null && e.hasOwnProperty("chip")) {
          let A = B.dot.v4.ChipAuthenticationStatus.verify(e.chip);
          if (A)
            return "chip." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.AuthenticationStatus)
          return e;
        let A = new B.dot.v4.AuthenticationStatus();
        if (e.data != null) {
          if (typeof e.data != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.data: object expected");
          A.data = B.dot.v4.DataAuthenticationStatus.fromObject(e.data);
        }
        if (e.chip != null) {
          if (typeof e.chip != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.chip: object expected");
          A.chip = B.dot.v4.ChipAuthenticationStatus.fromObject(e.chip);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.data = null, o.chip = null), e.data != null && e.hasOwnProperty("data") && (o.data = B.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (o.chip = B.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AuthenticationStatus";
      }, t;
    })(), n.DataAuthenticationStatus = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.status = 0, t.prototype.protocol = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.status != null && Object.hasOwnProperty.call(e, "status") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.status), e.protocol != null && Object.hasOwnProperty.call(e, "protocol") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.protocol), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.DataAuthenticationStatus();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.status = e.int32();
              break;
            }
            case 2: {
              a.protocol = e.int32();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.status != null && e.hasOwnProperty("status"))
          switch (e.status) {
            default:
              return "status: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
              break;
          }
        if (e.protocol != null && e.hasOwnProperty("protocol"))
          switch (e.protocol) {
            default:
              return "protocol: enum value expected";
            case 0:
            case 1:
              break;
          }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.DataAuthenticationStatus)
          return e;
        let A = new B.dot.v4.DataAuthenticationStatus();
        switch (e.status) {
          default:
            if (typeof e.status == "number") {
              A.status = e.status;
              break;
            }
            break;
          case "STATUS_UNSPECIFIED":
          case 0:
            A.status = 0;
            break;
          case "STATUS_AUTHENTICATED":
          case 1:
            A.status = 1;
            break;
          case "STATUS_DENIED":
          case 2:
            A.status = 2;
            break;
          case "STATUS_AUTHORITY_CERTIFICATES_NOT_PROVIDED":
          case 3:
            A.status = 3;
            break;
        }
        switch (e.protocol) {
          default:
            if (typeof e.protocol == "number") {
              A.protocol = e.protocol;
              break;
            }
            break;
          case "PROTOCOL_UNSPECIFIED":
          case 0:
            A.protocol = 0;
            break;
          case "PROTOCOL_PASSIVE_AUTHENTICATION":
          case 1:
            A.protocol = 1;
            break;
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.status = A.enums === String ? "STATUS_UNSPECIFIED" : 0, o.protocol = A.enums === String ? "PROTOCOL_UNSPECIFIED" : 0), e.status != null && e.hasOwnProperty("status") && (o.status = A.enums === String ? B.dot.v4.DataAuthenticationStatus.Status[e.status] === void 0 ? e.status : B.dot.v4.DataAuthenticationStatus.Status[e.status] : e.status), e.protocol != null && e.hasOwnProperty("protocol") && (o.protocol = A.enums === String ? B.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] === void 0 ? e.protocol : B.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] : e.protocol), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DataAuthenticationStatus";
      }, t.Status = (function() {
        const e = {}, A = Object.create(e);
        return A[e[0] = "STATUS_UNSPECIFIED"] = 0, A[e[1] = "STATUS_AUTHENTICATED"] = 1, A[e[2] = "STATUS_DENIED"] = 2, A[e[3] = "STATUS_AUTHORITY_CERTIFICATES_NOT_PROVIDED"] = 3, A;
      })(), t.Protocol = (function() {
        const e = {}, A = Object.create(e);
        return A[e[0] = "PROTOCOL_UNSPECIFIED"] = 0, A[e[1] = "PROTOCOL_PASSIVE_AUTHENTICATION"] = 1, A;
      })(), t;
    })(), n.ChipAuthenticationStatus = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.status = 0, t.prototype.protocol = null, t.prototype.activeAuthenticationResponse = null;
      let e;
      return Object.defineProperty(t.prototype, "_protocol", {
        get: d.oneOfGetter(e = ["protocol"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_activeAuthenticationResponse", {
        get: d.oneOfGetter(e = ["activeAuthenticationResponse"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.status != null && Object.hasOwnProperty.call(A, "status") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.status), A.protocol != null && Object.hasOwnProperty.call(A, "protocol") && o.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(A.protocol), A.activeAuthenticationResponse != null && Object.hasOwnProperty.call(A, "activeAuthenticationResponse") && o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).bytes(A.activeAuthenticationResponse), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.ChipAuthenticationStatus();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.status = A.int32();
              break;
            }
            case 2: {
              g.protocol = A.int32();
              break;
            }
            case 3: {
              g.activeAuthenticationResponse = A.bytes();
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.status != null && A.hasOwnProperty("status"))
          switch (A.status) {
            default:
              return "status: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
              break;
          }
        if (A.protocol != null && A.hasOwnProperty("protocol"))
          switch (A.protocol) {
            default:
              return "protocol: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
              break;
          }
        return A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && !(A.activeAuthenticationResponse && typeof A.activeAuthenticationResponse.length == "number" || d.isString(A.activeAuthenticationResponse)) ? "activeAuthenticationResponse: buffer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.ChipAuthenticationStatus)
          return A;
        let o = new B.dot.v4.ChipAuthenticationStatus();
        switch (A.status) {
          default:
            if (typeof A.status == "number") {
              o.status = A.status;
              break;
            }
            break;
          case "STATUS_UNSPECIFIED":
          case 0:
            o.status = 0;
            break;
          case "STATUS_AUTHENTICATED":
          case 1:
            o.status = 1;
            break;
          case "STATUS_DENIED":
          case 2:
            o.status = 2;
            break;
          case "STATUS_NOT_SUPPORTED":
          case 3:
            o.status = 3;
            break;
        }
        switch (A.protocol) {
          default:
            if (typeof A.protocol == "number") {
              o.protocol = A.protocol;
              break;
            }
            break;
          case "PROTOCOL_UNSPECIFIED":
          case 0:
            o.protocol = 0;
            break;
          case "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING":
          case 1:
            o.protocol = 1;
            break;
          case "PROTOCOL_CHIP_AUTHENTICATION":
          case 2:
            o.protocol = 2;
            break;
          case "PROTOCOL_ACTIVE_AUTHENTICATION":
          case 3:
            o.protocol = 3;
            break;
        }
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? d.base64.decode(A.activeAuthenticationResponse, o.activeAuthenticationResponse = d.newBuffer(d.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (o.activeAuthenticationResponse = A.activeAuthenticationResponse)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.status = o.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (r.status = o.enums === String ? B.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : B.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (r.protocol = o.enums === String ? B.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : B.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, o.oneofs && (r._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (r.activeAuthenticationResponse = o.bytes === String ? d.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : o.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, o.oneofs && (r._activeAuthenticationResponse = "activeAuthenticationResponse")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.ChipAuthenticationStatus";
      }, t.Status = (function() {
        const A = {}, o = Object.create(A);
        return o[A[0] = "STATUS_UNSPECIFIED"] = 0, o[A[1] = "STATUS_AUTHENTICATED"] = 1, o[A[2] = "STATUS_DENIED"] = 2, o[A[3] = "STATUS_NOT_SUPPORTED"] = 3, o;
      })(), t.Protocol = (function() {
        const A = {}, o = Object.create(A);
        return o[A[0] = "PROTOCOL_UNSPECIFIED"] = 0, o[A[1] = "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING"] = 1, o[A[2] = "PROTOCOL_CHIP_AUTHENTICATION"] = 2, o[A[3] = "PROTOCOL_ACTIVE_AUTHENTICATION"] = 3, o;
      })(), t;
    })(), n.EyeGazeLivenessContent = (function() {
      function t(A) {
        if (this.segments = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.image = null, t.prototype.segments = d.emptyArray, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_image", {
        get: d.oneOfGetter(e = ["image"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_video", {
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.segments != null && A.segments.length)
          for (let r = 0; r < A.segments.length; ++r)
            B.dot.v4.EyeGazeLivenessSegment.encode(A.segments[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && B.dot.Video.encode(A.video, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 3: {
              g.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              g.segments && g.segments.length || (g.segments = []), g.segments.push(B.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = B.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let o = 0; o < A.segments.length; ++o) {
            let r = B.dot.v4.EyeGazeLivenessSegment.verify(A.segments[o]);
            if (r)
              return "segments." + r;
          }
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = B.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = B.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.EyeGazeLivenessContent)
          return A;
        let o = new B.dot.v4.EyeGazeLivenessContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.image: object expected");
          o.image = B.dot.Image.fromObject(A.image);
        }
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          o.segments = [];
          for (let r = 0; r < A.segments.length; ++r) {
            if (typeof A.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            o.segments[r] = B.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[r]);
          }
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.video: object expected");
          o.video = B.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          o.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.segments = []), o.defaults && (r.metadata = null), A.segments && A.segments.length) {
          r.segments = [];
          for (let a = 0; a < A.segments.length; ++a)
            r.segments[a] = B.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[a], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = B.dot.v4.Metadata.toObject(A.metadata, o)), A.image != null && A.hasOwnProperty("image") && (r.image = B.dot.Image.toObject(A.image, o), o.oneofs && (r._image = "image")), A.video != null && A.hasOwnProperty("video") && (r.video = B.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    })(), n.EyeGazeLivenessSegment = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.corner = e.int32();
              break;
            }
            case 2: {
              a.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
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
          let A = B.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.EyeGazeLivenessSegment)
          return e;
        let A = new B.dot.v4.EyeGazeLivenessSegment();
        switch (e.corner) {
          default:
            if (typeof e.corner == "number") {
              A.corner = e.corner;
              break;
            }
            break;
          case "TOP_LEFT":
          case 0:
            A.corner = 0;
            break;
          case "TOP_RIGHT":
          case 1:
            A.corner = 1;
            break;
          case "BOTTOM_RIGHT":
          case 2:
            A.corner = 2;
            break;
          case "BOTTOM_LEFT":
          case 3:
            A.corner = 3;
            break;
        }
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessSegment.image: object expected");
          A.image = B.dot.Image.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.corner = A.enums === String ? "TOP_LEFT" : 0, o.image = null), e.corner != null && e.hasOwnProperty("corner") && (o.corner = A.enums === String ? B.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : B.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (o.image = B.dot.Image.toObject(e.image, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    })(), n.EyeGazeLivenessCorner = (function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    })(), n.MultiRangeLivenessContent = (function() {
      function t(A) {
        if (this.stepResults = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.stepResults = d.emptyArray, t.prototype.metadata = null, t.prototype.video = null, t.prototype.multiRangeLivenessMetadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = G.create()), A.stepResults != null && A.stepResults.length)
          for (let r = 0; r < A.stepResults.length; ++r)
            B.dot.v4.MultiRangeLivenessStepResult.encode(A.stepResults[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && B.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.multiRangeLivenessMetadata != null && Object.hasOwnProperty.call(A, "multiRangeLivenessMetadata") && B.dot.v4.MultiRangeLivenessMetadata.encode(A.multiRangeLivenessMetadata, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.MultiRangeLivenessContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.stepResults && g.stepResults.length || (g.stepResults = []), g.stepResults.push(B.dot.v4.MultiRangeLivenessStepResult.decode(A, A.uint32()));
              break;
            }
            case 2: {
              g.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.multiRangeLivenessMetadata = B.dot.v4.MultiRangeLivenessMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.stepResults != null && A.hasOwnProperty("stepResults")) {
          if (!Array.isArray(A.stepResults))
            return "stepResults: array expected";
          for (let o = 0; o < A.stepResults.length; ++o) {
            let r = B.dot.v4.MultiRangeLivenessStepResult.verify(A.stepResults[o]);
            if (r)
              return "stepResults." + r;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = B.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = B.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata")) {
          let o = B.dot.v4.MultiRangeLivenessMetadata.verify(A.multiRangeLivenessMetadata);
          if (o)
            return "multiRangeLivenessMetadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.MultiRangeLivenessContent)
          return A;
        let o = new B.dot.v4.MultiRangeLivenessContent();
        if (A.stepResults) {
          if (!Array.isArray(A.stepResults))
            throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: array expected");
          o.stepResults = [];
          for (let r = 0; r < A.stepResults.length; ++r) {
            if (typeof A.stepResults[r] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: object expected");
            o.stepResults[r] = B.dot.v4.MultiRangeLivenessStepResult.fromObject(A.stepResults[r]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.metadata: object expected");
          o.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.video: object expected");
          o.video = B.dot.Video.fromObject(A.video);
        }
        if (A.multiRangeLivenessMetadata != null) {
          if (typeof A.multiRangeLivenessMetadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.multiRangeLivenessMetadata: object expected");
          o.multiRangeLivenessMetadata = B.dot.v4.MultiRangeLivenessMetadata.fromObject(A.multiRangeLivenessMetadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.stepResults = []), o.defaults && (r.metadata = null, r.multiRangeLivenessMetadata = null), A.stepResults && A.stepResults.length) {
          r.stepResults = [];
          for (let a = 0; a < A.stepResults.length; ++a)
            r.stepResults[a] = B.dot.v4.MultiRangeLivenessStepResult.toObject(A.stepResults[a], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = B.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = B.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata") && (r.multiRangeLivenessMetadata = B.dot.v4.MultiRangeLivenessMetadata.toObject(A.multiRangeLivenessMetadata, o)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MultiRangeLivenessContent";
      }, t;
    })(), n.MultiRangeLivenessStepResult = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.challengeItem = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.challengeItem != null && Object.hasOwnProperty.call(e, "challengeItem") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.challengeItem), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.ImageWithTimestamp.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.MultiRangeLivenessStepResult();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.challengeItem = e.int32();
              break;
            }
            case 2: {
              a.image = B.dot.ImageWithTimestamp.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.challengeItem != null && e.hasOwnProperty("challengeItem"))
          switch (e.challengeItem) {
            default:
              return "challengeItem: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
              break;
          }
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = B.dot.ImageWithTimestamp.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.MultiRangeLivenessStepResult)
          return e;
        let A = new B.dot.v4.MultiRangeLivenessStepResult();
        switch (e.challengeItem) {
          default:
            if (typeof e.challengeItem == "number") {
              A.challengeItem = e.challengeItem;
              break;
            }
            break;
          case "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_UNSPECIFIED":
          case 0:
            A.challengeItem = 0;
            break;
          case "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ZERO":
          case 1:
            A.challengeItem = 1;
            break;
          case "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ONE":
          case 2:
            A.challengeItem = 2;
            break;
          case "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_TWO":
          case 3:
            A.challengeItem = 3;
            break;
          case "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_THREE":
          case 4:
            A.challengeItem = 4;
            break;
          case "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FOUR":
          case 5:
            A.challengeItem = 5;
            break;
          case "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FIVE":
          case 6:
            A.challengeItem = 6;
            break;
        }
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessStepResult.image: object expected");
          A.image = B.dot.ImageWithTimestamp.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.challengeItem = A.enums === String ? "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_UNSPECIFIED" : 0, o.image = null), e.challengeItem != null && e.hasOwnProperty("challengeItem") && (o.challengeItem = A.enums === String ? B.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] === void 0 ? e.challengeItem : B.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] : e.challengeItem), e.image != null && e.hasOwnProperty("image") && (o.image = B.dot.ImageWithTimestamp.toObject(e.image, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MultiRangeLivenessStepResult";
      }, t;
    })(), n.MultiRangeLivenessChallengeItem = (function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_UNSPECIFIED"] = 0, e[t[1] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ZERO"] = 1, e[t[2] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ONE"] = 2, e[t[3] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_TWO"] = 3, e[t[4] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_THREE"] = 4, e[t[5] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FOUR"] = 5, e[t[6] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FIVE"] = 6, e;
    })(), n.MultiRangeLivenessMetadata = (function() {
      function t(e) {
        if (this.detections = [], e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.detections = d.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = G.create()), e.detections != null && e.detections.length)
          for (let o = 0; o < e.detections.length; ++o)
            B.dot.v4.FaceDetection.encode(e.detections[o], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.MultiRangeLivenessMetadata();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          g >>> 3 === 1 ? (a.detections && a.detections.length || (a.detections = []), a.detections.push(B.dot.v4.FaceDetection.decode(e, e.uint32()))) : e.skipType(g & 7);
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.detections != null && e.hasOwnProperty("detections")) {
          if (!Array.isArray(e.detections))
            return "detections: array expected";
          for (let A = 0; A < e.detections.length; ++A) {
            let o = B.dot.v4.FaceDetection.verify(e.detections[A]);
            if (o)
              return "detections." + o;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.MultiRangeLivenessMetadata)
          return e;
        let A = new B.dot.v4.MultiRangeLivenessMetadata();
        if (e.detections) {
          if (!Array.isArray(e.detections))
            throw TypeError(".dot.v4.MultiRangeLivenessMetadata.detections: array expected");
          A.detections = [];
          for (let o = 0; o < e.detections.length; ++o) {
            if (typeof e.detections[o] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessMetadata.detections: object expected");
            A.detections[o] = B.dot.v4.FaceDetection.fromObject(e.detections[o]);
          }
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if ((A.arrays || A.defaults) && (o.detections = []), e.detections && e.detections.length) {
          o.detections = [];
          for (let r = 0; r < e.detections.length; ++r)
            o.detections[r] = B.dot.v4.FaceDetection.toObject(e.detections[r], A);
        }
        return o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MultiRangeLivenessMetadata";
      }, t;
    })(), n.FaceDetection = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.timestampMillis = d.Long ? d.Long.fromBits(0, 0, !0) : 0, t.prototype.position = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).uint64(e.timestampMillis), e.position != null && Object.hasOwnProperty.call(e, "position") && B.dot.v4.FaceDetectionPosition.encode(e.position, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.FaceDetection();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.timestampMillis = e.uint64();
              break;
            }
            case 2: {
              a.position = B.dot.v4.FaceDetectionPosition.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !d.isInteger(e.timestampMillis) && !(e.timestampMillis && d.isInteger(e.timestampMillis.low) && d.isInteger(e.timestampMillis.high)))
          return "timestampMillis: integer|Long expected";
        if (e.position != null && e.hasOwnProperty("position")) {
          let A = B.dot.v4.FaceDetectionPosition.verify(e.position);
          if (A)
            return "position." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.FaceDetection)
          return e;
        let A = new B.dot.v4.FaceDetection();
        if (e.timestampMillis != null && (d.Long ? (A.timestampMillis = d.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), e.position != null) {
          if (typeof e.position != "object")
            throw TypeError(".dot.v4.FaceDetection.position: object expected");
          A.position = B.dot.v4.FaceDetectionPosition.fromObject(e.position);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if (A.defaults) {
          if (d.Long) {
            let r = new d.Long(0, 0, !0);
            o.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            o.timestampMillis = A.longs === String ? "0" : 0;
          o.position = null;
        }
        return e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? d.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), e.position != null && e.hasOwnProperty("position") && (o.position = B.dot.v4.FaceDetectionPosition.toObject(e.position, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceDetection";
      }, t;
    })(), n.FaceDetectionPosition = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.center = null, t.prototype.faceSizeToImageShorterSideRatio = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = G.create()), e.center != null && Object.hasOwnProperty.call(e, "center") && B.dot.PointDouble.encode(e.center, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.faceSizeToImageShorterSideRatio != null && Object.hasOwnProperty.call(e, "faceSizeToImageShorterSideRatio") && A.uint32(
          /* id 2, wireType 1 =*/
          17
        ).double(e.faceSizeToImageShorterSideRatio), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.FaceDetectionPosition();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.center = B.dot.PointDouble.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.faceSizeToImageShorterSideRatio = e.double();
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.center != null && e.hasOwnProperty("center")) {
          let A = B.dot.PointDouble.verify(e.center);
          if (A)
            return "center." + A;
        }
        return e.faceSizeToImageShorterSideRatio != null && e.hasOwnProperty("faceSizeToImageShorterSideRatio") && typeof e.faceSizeToImageShorterSideRatio != "number" ? "faceSizeToImageShorterSideRatio: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.FaceDetectionPosition)
          return e;
        let A = new B.dot.v4.FaceDetectionPosition();
        if (e.center != null) {
          if (typeof e.center != "object")
            throw TypeError(".dot.v4.FaceDetectionPosition.center: object expected");
          A.center = B.dot.PointDouble.fromObject(e.center);
        }
        return e.faceSizeToImageShorterSideRatio != null && (A.faceSizeToImageShorterSideRatio = Number(e.faceSizeToImageShorterSideRatio)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.center = null, o.faceSizeToImageShorterSideRatio = 0), e.center != null && e.hasOwnProperty("center") && (o.center = B.dot.PointDouble.toObject(e.center, A)), e.faceSizeToImageShorterSideRatio != null && e.hasOwnProperty("faceSizeToImageShorterSideRatio") && (o.faceSizeToImageShorterSideRatio = A.json && !isFinite(e.faceSizeToImageShorterSideRatio) ? String(e.faceSizeToImageShorterSideRatio) : e.faceSizeToImageShorterSideRatio), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceDetectionPosition";
      }, t;
    })(), n.SmileLivenessContent = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && B.dot.Image.encode(A.neutralExpressionFaceImage, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.smileExpressionFaceImage != null && Object.hasOwnProperty.call(A, "smileExpressionFaceImage") && B.dot.Image.encode(A.smileExpressionFaceImage, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && B.dot.Video.encode(A.video, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.SmileLivenessContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.neutralExpressionFaceImage = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.smileExpressionFaceImage = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage")) {
          let o = B.dot.Image.verify(A.neutralExpressionFaceImage);
          if (o)
            return "neutralExpressionFaceImage." + o;
        }
        if (A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage")) {
          let o = B.dot.Image.verify(A.smileExpressionFaceImage);
          if (o)
            return "smileExpressionFaceImage." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = B.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = B.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.SmileLivenessContent)
          return A;
        let o = new B.dot.v4.SmileLivenessContent();
        if (A.neutralExpressionFaceImage != null) {
          if (typeof A.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          o.neutralExpressionFaceImage = B.dot.Image.fromObject(A.neutralExpressionFaceImage);
        }
        if (A.smileExpressionFaceImage != null) {
          if (typeof A.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          o.smileExpressionFaceImage = B.dot.Image.fromObject(A.smileExpressionFaceImage);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.video: object expected");
          o.video = B.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          o.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = B.dot.Image.toObject(A.neutralExpressionFaceImage, o)), A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = B.dot.Image.toObject(A.smileExpressionFaceImage, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = B.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = B.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.SmileLivenessContent";
      }, t;
    })(), n.PalmContent = (function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: d.oneOfGetter(e = ["video"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && B.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.PalmContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = B.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = B.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = B.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.PalmContent)
          return A;
        let o = new B.dot.v4.PalmContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          o.image = B.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.PalmContent.video: object expected");
          o.video = B.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          o.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = B.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = B.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = B.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.PalmContent";
      }, t;
    })(), n;
  })(), i.Image = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.bytes = d.newBuffer([]), n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.Image();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        a >>> 3 === 1 ? r.bytes = t.bytes() : t.skipType(a & 7);
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.Image)
        return t;
      let e = new B.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, n;
  })(), i.ImageWithTimestamp = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.image = null, n.prototype.timestampMillis = d.Long ? d.Long.fromBits(0, 0, !0) : 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.image != null && Object.hasOwnProperty.call(t, "image") && B.dot.Image.encode(t.image, e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).fork()).ldelim(), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.ImageWithTimestamp();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.image = B.dot.Image.decode(t, t.uint32());
            break;
          }
          case 2: {
            r.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.image != null && t.hasOwnProperty("image")) {
        let e = B.dot.Image.verify(t.image);
        if (e)
          return "image." + e;
      }
      return t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !d.isInteger(t.timestampMillis) && !(t.timestampMillis && d.isInteger(t.timestampMillis.low) && d.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.ImageWithTimestamp)
        return t;
      let e = new B.dot.ImageWithTimestamp();
      if (t.image != null) {
        if (typeof t.image != "object")
          throw TypeError(".dot.ImageWithTimestamp.image: object expected");
        e.image = B.dot.Image.fromObject(t.image);
      }
      return t.timestampMillis != null && (d.Long ? (e.timestampMillis = d.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (A.image = null, d.Long) {
          let o = new d.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.image != null && t.hasOwnProperty("image") && (A.image = B.dot.Image.toObject(t.image, e)), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? d.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageWithTimestamp";
    }, n;
  })(), i.ImageSize = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.width = 0, n.prototype.height = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.width != null && Object.hasOwnProperty.call(t, "width") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.width), t.height != null && Object.hasOwnProperty.call(t, "height") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.height), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.ImageSize();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.width = t.int32();
            break;
          }
          case 2: {
            r.height = t.int32();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !d.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !d.isInteger(t.height) ? "height: integer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.ImageSize)
        return t;
      let e = new B.dot.ImageSize();
      return t.width != null && (e.width = t.width | 0), t.height != null && (e.height = t.height | 0), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.width = 0, A.height = 0), t.width != null && t.hasOwnProperty("width") && (A.width = t.width), t.height != null && t.hasOwnProperty("height") && (A.height = t.height), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageSize";
    }, n;
  })(), i.Int32List = (function() {
    function n(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.items = d.emptyArray, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      if (e || (e = G.create()), t.items != null && t.items.length) {
        e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let A = 0; A < t.items.length; ++A)
          e.int32(t.items[A]);
        e.ldelim();
      }
      return e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.Int32List();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            if (r.items && r.items.length || (r.items = []), (a & 7) === 2) {
              let g = t.uint32() + t.pos;
              for (; t.pos < g; )
                r.items.push(t.int32());
            } else
              r.items.push(t.int32());
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.items != null && t.hasOwnProperty("items")) {
        if (!Array.isArray(t.items))
          return "items: array expected";
        for (let e = 0; e < t.items.length; ++e)
          if (!d.isInteger(t.items[e]))
            return "items: integer[] expected";
      }
      return null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.Int32List)
        return t;
      let e = new B.dot.Int32List();
      if (t.items) {
        if (!Array.isArray(t.items))
          throw TypeError(".dot.Int32List.items: array expected");
        e.items = [];
        for (let A = 0; A < t.items.length; ++A)
          e.items[A] = t.items[A] | 0;
      }
      return e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if ((e.arrays || e.defaults) && (A.items = []), t.items && t.items.length) {
        A.items = [];
        for (let o = 0; o < t.items.length; ++o)
          A.items[o] = t.items[o];
      }
      return A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, n;
  })(), i.Platform = (function() {
    const n = {}, t = Object.create(n);
    return t[n[0] = "WEB"] = 0, t[n[1] = "ANDROID"] = 1, t[n[2] = "IOS"] = 2, t;
  })(), i.RectangleDouble = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.left = 0, n.prototype.top = 0, n.prototype.right = 0, n.prototype.bottom = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.left != null && Object.hasOwnProperty.call(t, "left") && e.uint32(
        /* id 1, wireType 1 =*/
        9
      ).double(t.left), t.top != null && Object.hasOwnProperty.call(t, "top") && e.uint32(
        /* id 2, wireType 1 =*/
        17
      ).double(t.top), t.right != null && Object.hasOwnProperty.call(t, "right") && e.uint32(
        /* id 3, wireType 1 =*/
        25
      ).double(t.right), t.bottom != null && Object.hasOwnProperty.call(t, "bottom") && e.uint32(
        /* id 4, wireType 1 =*/
        33
      ).double(t.bottom), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.RectangleDouble();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.left = t.double();
            break;
          }
          case 2: {
            r.top = t.double();
            break;
          }
          case 3: {
            r.right = t.double();
            break;
          }
          case 4: {
            r.bottom = t.double();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.left != null && t.hasOwnProperty("left") && typeof t.left != "number" ? "left: number expected" : t.top != null && t.hasOwnProperty("top") && typeof t.top != "number" ? "top: number expected" : t.right != null && t.hasOwnProperty("right") && typeof t.right != "number" ? "right: number expected" : t.bottom != null && t.hasOwnProperty("bottom") && typeof t.bottom != "number" ? "bottom: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.RectangleDouble)
        return t;
      let e = new B.dot.RectangleDouble();
      return t.left != null && (e.left = Number(t.left)), t.top != null && (e.top = Number(t.top)), t.right != null && (e.right = Number(t.right)), t.bottom != null && (e.bottom = Number(t.bottom)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.left = 0, A.top = 0, A.right = 0, A.bottom = 0), t.left != null && t.hasOwnProperty("left") && (A.left = e.json && !isFinite(t.left) ? String(t.left) : t.left), t.top != null && t.hasOwnProperty("top") && (A.top = e.json && !isFinite(t.top) ? String(t.top) : t.top), t.right != null && t.hasOwnProperty("right") && (A.right = e.json && !isFinite(t.right) ? String(t.right) : t.right), t.bottom != null && t.hasOwnProperty("bottom") && (A.bottom = e.json && !isFinite(t.bottom) ? String(t.bottom) : t.bottom), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.RectangleDouble";
    }, n;
  })(), i.DigestWithTimestamp = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.digest = d.newBuffer([]), n.prototype.timestampMillis = d.Long ? d.Long.fromBits(0, 0, !0) : 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.DigestWithTimestamp();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.digest = t.bytes();
            break;
          }
          case 2: {
            r.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || d.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !d.isInteger(t.timestampMillis) && !(t.timestampMillis && d.isInteger(t.timestampMillis.low) && d.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.DigestWithTimestamp)
        return t;
      let e = new B.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? d.base64.decode(t.digest, e.digest = d.newBuffer(d.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (d.Long ? (e.timestampMillis = d.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (e.bytes === String ? A.digest = "" : (A.digest = [], e.bytes !== Array && (A.digest = d.newBuffer(A.digest))), d.Long) {
          let o = new d.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? d.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? d.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, n;
  })(), i.Video = (function() {
    function n(e) {
      if (e)
        for (let A = Object.keys(e), o = 0; o < A.length; ++o)
          e[A[o]] != null && (this[A[o]] = e[A[o]]);
    }
    n.prototype.bytes = null, n.prototype.containerMp4 = null, n.prototype.streamH264 = null;
    let t;
    return Object.defineProperty(n.prototype, "_bytes", {
      get: d.oneOfGetter(t = ["bytes"]),
      set: d.oneOfSetter(t)
    }), Object.defineProperty(n.prototype, "content", {
      get: d.oneOfGetter(t = ["containerMp4", "streamH264"]),
      set: d.oneOfSetter(t)
    }), n.create = function(e) {
      return new n(e);
    }, n.encode = function(e, A) {
      return A || (A = G.create()), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && A.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(e.bytes), e.containerMp4 != null && Object.hasOwnProperty.call(e, "containerMp4") && B.dot.VideoContainer.encode(e.containerMp4, A.uint32(
        /* id 2, wireType 2 =*/
        18
      ).fork()).ldelim(), e.streamH264 != null && Object.hasOwnProperty.call(e, "streamH264") && B.dot.VideoStream.encode(e.streamH264, A.uint32(
        /* id 3, wireType 2 =*/
        26
      ).fork()).ldelim(), A;
    }, n.encodeDelimited = function(e, A) {
      return this.encode(e, A).ldelim();
    }, n.decode = function(e, A, o) {
      e instanceof u || (e = u.create(e));
      let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.Video();
      for (; e.pos < r; ) {
        let g = e.uint32();
        if (g === o)
          break;
        switch (g >>> 3) {
          case 1: {
            a.bytes = e.bytes();
            break;
          }
          case 2: {
            a.containerMp4 = B.dot.VideoContainer.decode(e, e.uint32());
            break;
          }
          case 3: {
            a.streamH264 = B.dot.VideoStream.decode(e, e.uint32());
            break;
          }
          default:
            e.skipType(g & 7);
            break;
        }
      }
      return a;
    }, n.decodeDelimited = function(e) {
      return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
    }, n.verify = function(e) {
      if (typeof e != "object" || e === null)
        return "object expected";
      let A = {};
      if (e.bytes != null && e.hasOwnProperty("bytes") && (A._bytes = 1, !(e.bytes && typeof e.bytes.length == "number" || d.isString(e.bytes))))
        return "bytes: buffer expected";
      if (e.containerMp4 != null && e.hasOwnProperty("containerMp4")) {
        A.content = 1;
        {
          let o = B.dot.VideoContainer.verify(e.containerMp4);
          if (o)
            return "containerMp4." + o;
        }
      }
      if (e.streamH264 != null && e.hasOwnProperty("streamH264")) {
        if (A.content === 1)
          return "content: multiple values";
        A.content = 1;
        {
          let o = B.dot.VideoStream.verify(e.streamH264);
          if (o)
            return "streamH264." + o;
        }
      }
      return null;
    }, n.fromObject = function(e) {
      if (e instanceof B.dot.Video)
        return e;
      let A = new B.dot.Video();
      if (e.bytes != null && (typeof e.bytes == "string" ? d.base64.decode(e.bytes, A.bytes = d.newBuffer(d.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (A.bytes = e.bytes)), e.containerMp4 != null) {
        if (typeof e.containerMp4 != "object")
          throw TypeError(".dot.Video.containerMp4: object expected");
        A.containerMp4 = B.dot.VideoContainer.fromObject(e.containerMp4);
      }
      if (e.streamH264 != null) {
        if (typeof e.streamH264 != "object")
          throw TypeError(".dot.Video.streamH264: object expected");
        A.streamH264 = B.dot.VideoStream.fromObject(e.streamH264);
      }
      return A;
    }, n.toObject = function(e, A) {
      A || (A = {});
      let o = {};
      return e.bytes != null && e.hasOwnProperty("bytes") && (o.bytes = A.bytes === String ? d.base64.encode(e.bytes, 0, e.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes, A.oneofs && (o._bytes = "bytes")), e.containerMp4 != null && e.hasOwnProperty("containerMp4") && (o.containerMp4 = B.dot.VideoContainer.toObject(e.containerMp4, A), A.oneofs && (o.content = "containerMp4")), e.streamH264 != null && e.hasOwnProperty("streamH264") && (o.streamH264 = B.dot.VideoStream.toObject(e.streamH264, A), A.oneofs && (o.content = "streamH264")), o;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Video";
    }, n;
  })(), i.VideoContainer = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.bytes = d.newBuffer([]), n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.VideoContainer();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        a >>> 3 === 1 ? r.bytes = t.bytes() : t.skipType(a & 7);
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.VideoContainer)
        return t;
      let e = new B.dot.VideoContainer();
      return t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.VideoContainer";
    }, n;
  })(), i.VideoStream = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.bytes = d.newBuffer([]), n.prototype.frameRate = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), t.frameRate != null && Object.hasOwnProperty.call(t, "frameRate") && e.uint32(
        /* id 2, wireType 1 =*/
        17
      ).double(t.frameRate), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.VideoStream();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.bytes = t.bytes();
            break;
          }
          case 2: {
            r.frameRate = t.double();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : t.frameRate != null && t.hasOwnProperty("frameRate") && typeof t.frameRate != "number" ? "frameRate: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.VideoStream)
        return t;
      let e = new B.dot.VideoStream();
      return t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), t.frameRate != null && (e.frameRate = Number(t.frameRate)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes))), A.frameRate = 0), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), t.frameRate != null && t.hasOwnProperty("frameRate") && (A.frameRate = e.json && !isFinite(t.frameRate) ? String(t.frameRate) : t.frameRate), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.VideoStream";
    }, n;
  })(), i.PointInt = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.x = 0, n.prototype.y = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.x != null && Object.hasOwnProperty.call(t, "x") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.x), t.y != null && Object.hasOwnProperty.call(t, "y") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.y), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.PointInt();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.x = t.int32();
            break;
          }
          case 2: {
            r.y = t.int32();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && !d.isInteger(t.x) ? "x: integer expected" : t.y != null && t.hasOwnProperty("y") && !d.isInteger(t.y) ? "y: integer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.PointInt)
        return t;
      let e = new B.dot.PointInt();
      return t.x != null && (e.x = t.x | 0), t.y != null && (e.y = t.y | 0), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.x = 0, A.y = 0), t.x != null && t.hasOwnProperty("x") && (A.x = t.x), t.y != null && t.hasOwnProperty("y") && (A.y = t.y), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.PointInt";
    }, n;
  })(), i.PointDouble = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.x = 0, n.prototype.y = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = G.create()), t.x != null && Object.hasOwnProperty.call(t, "x") && e.uint32(
        /* id 1, wireType 1 =*/
        9
      ).double(t.x), t.y != null && Object.hasOwnProperty.call(t, "y") && e.uint32(
        /* id 2, wireType 1 =*/
        17
      ).double(t.y), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof u || (t = u.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.PointDouble();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.x = t.double();
            break;
          }
          case 2: {
            r.y = t.double();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && typeof t.x != "number" ? "x: number expected" : t.y != null && t.hasOwnProperty("y") && typeof t.y != "number" ? "y: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.PointDouble)
        return t;
      let e = new B.dot.PointDouble();
      return t.x != null && (e.x = Number(t.x)), t.y != null && (e.y = Number(t.y)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.x = 0, A.y = 0), t.x != null && t.hasOwnProperty("x") && (A.x = e.json && !isFinite(t.x) ? String(t.x) : t.x), t.y != null && t.hasOwnProperty("y") && (A.y = e.json && !isFinite(t.y) ? String(t.y) : t.y), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.PointDouble";
    }, n;
  })(), i;
})();
function Wn() {
  const i = ["jd/dKg56", "l8oQownO", "WQygWRa/bW", "rMzIwWW", "ycBcMvSI", "W4r1Aw5N", "WRb6WRjHW6O", "aJtcVHxcGG", "WO0YW6Gn", "iCo+WPRcGba", "W55QAJzK", "eZRcGZnE", "cCkpW7H5bW", "W7zgW6OFW7vjn8ouWRPlpq", "WOldIh8AW6a", "W5qFW6hcItunWRldLH3dMCkl", "W4FdGMGvWP8", "W5hcJa4EW5i", "WRWtkv7dSW", "oxSwF8kI", "fM4rWRWz", "W6GLW5vihW", "W67dSetdPWC", "FIn1kwW", "aKLIW57dHW", "lbxcNComgW", "axZdUqdcVq", "W6pdRSoMj8o7", "dMldUKHk", "lSoux8oicG", "amkgih4e", "EH0BwSox", "WQRdVIdcH8oM", "g8onBConhW", "WOFdSI0rW5O", "WRVdVGlcISoJ", "W5uLqX3cVq", "nmoNW5zvWPC", "WPiepJX/uZlcLq", "a2xdPW4O", "W6BdG37dHga", "bfldMXNcOa", "W4JdLxZdPu0", "W4HqWP1uW5y0Dq", "hsFcVrnc", "nf7dHalcQG", "WPy0WQLJW7y", "CtJdKSodWP4", "p3WLW7/dVq", "W7FcP0iLWPW", "lZ3dJ0iu", "WRGuwXNcQmkxWPO", "fCkVWRj6WRq", "W4/cVMa3WQO", "W5GOFJJdVa", "xc1bjCo2", "WRxcHsuCW7G", "WOCHW6z/hW", "W5CdgH7cPq", "urVdLCk5W6a", "WO0bW5aUjG", "CsdcQMD8", "tX5epam", "ugSmWQpcOq", "ESkDn8olWQm", "m1XoqW4", "WRaBWOhdG1C", "wISFWRVdSq", "W6raW4arWOq", "WRu+W65Dbq", "zHhdHqi5", "smk+WOJcTdW", "s8oQz8oaWQW", "WPpcHLOkWQy", "s1HKamoD", "WPCuW5q/oq", "jmkgWP5+WPC", "nsG0h8ouW7JcKbRcKq", "WP3dH1P0WO/dRCkeCGCJCq", "hSoiWRpcJsu", "cx7cQqZcQW", "WOhcM8oFuuS", "ErFdPgq4", "WQiGWPLJW7SjWR7dH8kSANZdKa", "W6uLfxtdMW", "cLCzrgxdKs0zhSkeW5xdUcu", "zKjdFca", "mxPqwcm", "WOPlWOBdNvm", "oHWtp2RcSK5lW6SOW4upWOe", "WOlcQqqlW6C", "xIBcGSkZpa", "DCkoECotW5O", "WQBdVJm9cq", "WOCBox3dUW", "BsNdQ8odWRe", "WQiMW7SyWObDWQpdLG", "W4ZcKq82W44", "A0y6W67dGa", "W7BdGvFdTNC", "WPy0WP0xW7i", "W5VcK2KBWR0", "WQ4YW4vVW6u", "t8oFW6PWWOi", "W7ndW6bueW", "zvPGWR7dUG", "fLj+ymoN", "ca1rlaK", "W4VdJcPXW5u", "i0BdQuWM", "W6zXWPeNWPi", "ArJdLmk2WPO", "mZhcOHrH", "jHdcUuW", "zNaNqCo7", "tWFcNSopbW", "W6hdO8kNFSoG", "vwurrwK", "F2ClxSo8", "D8o3hSkZEq", "xSoFW4PvWOS", "yvpdOHxdOmkkfYGSWPqZsWK", "h8kOD8k2fa", "sfH5WOjH", "k8oLouqt", "mSo8W6XVWOS", "WOPMWOFdVhS", "zSohW5vF", "WPVdGhGNWQu", "vtWswCkN", "ddxdQ03cGW", "BWujxSks", "qmk2DCkFWQ0", "sdbfeWO", "WQviWPFdJvK", "W67cP3G1WOK", "W6VdIvnKW7y", "yN0rWQ/cMG", "WPJdGqm6BW", "xrX/DCoc", "FSocsSk9pG", "m8orpeeA", "jL98uCky", "WRBdHfDm", "W7tcPeLFWPC", "W4PsW5ubWOq", "Fevsfmo0", "W7fQmHbG", "WQyzdN3dOW", "W6ddSmoYn8o4", "WPfRWOBdVgO", "WO/dUdldM8oL", "WQGIWPi4WOT8WPBdL8kw", "W6pdSSo6gmoH", "W40hW5nopq", "FSoUBmk7WQK", "WROTcuNdRW", "WRvgWPvQW5S", "W5RdSK1/WOFdLdybqIpdMMbv", "WOeJouFdPG", "WO3dS14zW7O", "qCokwmkPWPq", "gXtdMgqc", "WRSvW5umya", "WRddHeLb", "uWyOgg4", "vuNcRXJcUa", "fmkuWPSrWOi", "nSo/imoJBa", "W5OTpcZcOW", "W4Lthd7cQG", "W5pcHeCBW6S", "W4K+kJ7cQa", "W7zjWO0SW6m", "WQOjW7K6WOO", "WRBcHb8AWO4", "W5dcH0WBWQe", "gCoOnfO1", "W54lBqxcHG", "WR4kxMhdMa", "E14jCCkG", "m25MqCop", "WRxcPmkhyeq", "w8kmnh8BWRNcPKa", "imojxmk2WPK", "g33dI0P0", "e1qynCoY", "mIldTIj7", "pMbsCGSvWOFcKYfgr37cMW", "v0LJoCob", "W7X3WQKQ", "dCkxyCoWW5C", "s3ldS8kkWOu", "WQmgWO8SWR8", "WOr8WOldJfy", "aYPSWR7cMSkmc0tdP8kJgqa", "W4ZdKhddMqa", "uLX2xZq", "oNSxtCke", "zL4Tvmka", "W6DFiG1W", "DSksymoyW7y", "l8oeW7LNWPq", "lCofWRHLWPi", "W5JdMgDzjq", "WP/dUbRcM8o5", "rCoTxSkCWRi", "D0Lcg8oV", "WOmlW7mWWR8", "zYC1gee", "adFcGh3cHW", "abtcUNpcUG", "k2L5amkIW7WdFHb0xCkaCW", "xtG0bwO", "jSoMWOtcUNG", "mgBdRWpcUq", "W4aNd1BcMW", "ud/cUXazWPuPW7LckCouW5xdSa", "ihJdOxXm", "WQRcSmoXAhK", "WOhdUcChlq", "yKymW7pcPa", "bSoDbxOW", "vCohW6KoWPC", "kbtdS8kZbq", "W5NdR8kLfmoN", "WQTzWOTfW6y", "WO/dRtydzG", "sSooW74yW70Vf3ldHchdHq", "dh/dKc8M", "sc7dQ8krWQK", "l0pdIriY", "W6rEW4qU", "jSk9W7PlWR8", "WPFdHKGjWOyDW4NcLq", "W69XvsFcJmo8W7TIvSkjWRvvWPK"];
  return Wn = function() {
    return i;
  }, Wn();
}
function V(i, n) {
  i = i - (-3530 + -4276 * -1 + -585);
  const t = Wn();
  let e = t[i];
  if (V.NBpzHc === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (let x = 0, E = s.length; x < E; x++)
        Q += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const g = function(c, I) {
      let s = [], Q = 0, x, E = "";
      c = A(c);
      let C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (let l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    V.cVRSqu = g, V.wnStgW = {}, V.NBpzHc = !0;
  }
  const o = t[6206 + 1 * -4927 + -1279], r = i + o, a = V.wnStgW[r];
  return a ? e = a : (V.BXeVsj === void 0 && (V.BXeVsj = !0), e = V.cVRSqu(e, n), V.wnStgW[r] = e), e;
}
(function(i, n) {
  function t(a, g, c, I, s) {
    return V(c - -733, g);
  }
  function e(a, g, c, I, s) {
    return V(a - -795, I);
  }
  const A = i();
  function o(a, g, c, I, s) {
    return V(s - 929, I);
  }
  function r(a, g, c, I, s) {
    return V(a - -246, g);
  }
  for (; ; )
    try {
      if (-parseInt(r(61, "a!zF", 33, 91, 74)) / 1 * (-parseInt(t(-512, "U7Qw", -530, -635, -554)) / 2) + parseInt(t(-390, "a!zF", -439, -489, -398)) / 3 * (-parseInt(t(-519, "F[HW", -524, -459, -488)) / 4) + parseInt(e(-541, -638, -508, "I$)[", -566)) / 5 * (parseInt(o(1379, 1206, 1337, "1TB2", 1261)) / 6) + -parseInt(r(-54, "Q@NM", -12, -120, 47)) / 7 + -parseInt(o(1057, 1140, 1108, "gWJr", 1153)) / 8 * (-parseInt(o(1397, 1223, 1281, "a!zF", 1292)) / 9) + -parseInt(r(-36, "$CY%", -7, -62, -5)) / 10 + parseInt(r(54, "So[8", 1, -42, -23)) / 11 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Wn, 534057);
function yE() {
  const i = e(904, "F[HW", 871, 960) + c(-455, -405, "[1lb", -472) + o(653, 716, 653, 671, "tbU@") + o(729, 799, 788, 820, "F[HW") + c(-453, -549, "LQi$", -532) + c(-616, -672, "So[8", -576) + a("FbgT", -38) + e(1172, "pV!8", 1158, 1093) + g(819, 843, 727, "pV!8") + a("wuxX", -40) + c(-462, -456, "Tu]k", -550) + o(688, 638, 743, 632, "Xr&&") + o(598, 525, 535, 484, "Yq!M") + c(-517, -427, "Tu]k", -457) + a("8wpq", 43) + g(928, 983, 1004, "neoM") + o(697, 668, 753, 782, "Xr&&") + g(754, 869, 764, "*1CQ") + g(1095, 1037, 979, "B[@!") + g(955, 846, 823, "B[@!") + c(-499, -443, "KP8W", -486) + e(954, "So[8", 966, 1028) + g(889, 928, 851, "a!zF") + o(807, 755, 765, 862, "$CY%") + g(954, 932, 980, "Yq!M") + a("Xr&&", -92) + g(779, 894, 838, "FbgT") + o(632, 524, 688, 517, "Ee&(") + g(988, 1020, 1056, "c&2!") + e(878, "8cB9", 928, 930) + c(-683, -514, "Q@NM", -597) + g(906, 971, 947, "LQi$") + g(915, 990, 1075, "1TB2") + g(863, 823, 845, "8cB9") + g(824, 820, 848, "%7IR") + o(738, 660, 674, 761, "a!zF") + a("AyC9", 55) + o(607, 542, 495, 620, "aq94") + e(1069, "4ODC", 1023, 1061) + a("aq94", 72) + o(709, 767, 687, 801, "pV!8") + c(-576, -405, "So[8", -492) + e(1085, "tbU@", 956, 1026) + g(794, 857, 916, "U7Qw") + c(-462, -586, "qn[a", -521) + e(1131, "I$)[", 1032, 1068) + a("F[HW", 34) + o(734, 736, 809, 783, "iP13") + e(1048, "a!zF", 1073, 1056) + e(1038, "$CY%", 1074, 995) + c(-520, -515, "%o^d", -548) + c(-536, -460, "%h&3", -487) + c(-310, -443, "iP13", -398) + o(639, 597, 708, 694, "VS^L") + a("Jzn7", 57) + e(1011, "Tu]k", 1138, 1051) + o(723, 786, 769, 767, "LQi$") + o(731, 723, 619, 709, "sxcf") + o(703, 612, 631, 638, "Xr&&") + o(599, 655, 633, 536, "svLN") + c(-622, -529, "1TB2", -605) + o(702, 808, 595, 793, "0i0S") + o(628, 551, 544, 668, "Q@NM") + c(-330, -408, "4ODC", -445) + c(-459, -382, "AyC9", -426) + c(-500, -598, "F[HW", -506) + a("nA@g", 25) + o(726, 698, 670, 742, "cydu") + g(1015, 1029, 1137, "qn[a") + g(715, 821, 767, "So[8") + e(952, "5!n@", 1032, 1020) + o(578, 627, 679, 474, "iP13") + o(710, 786, 784, 678, "Ee&(") + a("Jzn7", -59) + o(608, 494, 703, 663, "qn[a") + o(753, 859, 765, 847, "sxcf") + a("aq94", -68) + o(652, 616, 610, 741, "cydu") + e(1037, "[1lb", 1103, 1044) + g(971, 998, 890, "KP8W") + e(1095, "sxcf", 1114, 1031) + o(621, 646, 734, 552, "KSpm") + a("8wpq", -109) + c(-546, -628, "wuxX", -543) + e(927, "vsxq", 840, 868) + a("tbU@", -3) + c(-564, -581, "*1CQ", -508) + g(964, 1034, 1029, "vsxq") + e(895, "svLN", 930, 864) + c(-396, -313, "Q@NM", -394) + g(891, 913, 812, "F[HW") + e(892, "KP8W", 864, 879) + e(816, "U7Qw", 925, 877) + c(-587, -529, "1TB2", -604) + g(1016, 960, 1077, "I$)[") + g(1116, 1038, 1041, "wuxX") + g(1019, 915, 1021, "svLN") + g(1057, 1002, 1068, "iP13") + c(-633, -674, "sxcf", -592) + e(949, "F[HW", 1033, 1046) + e(1161, "B[@!", 1100, 1052) + e(1034, "nA@g", 1152, 1079) + a("U7Qw", -18) + c(-417, -488, "VS^L", -535) + o(644, 637, 722, 575, "F[HW") + o(790, 903, 735, 853, "Ee&(") + c(-685, -545, "I$)[", -573) + e(1108, "U7Qw", 987, 1078) + e(921, "AyC9", 919, 938) + c(-422, -486, "*1CQ", -500) + c(-492, -552, "4ODC", -513) + c(-445, -517, "$CY%", -485) + g(933, 991, 1088, "8cB9") + c(-341, -468, "Xr&&", -416) + g(897, 927, 828, "cydu") + e(975, "B[@!", 926, 1035) + a("1TB2", -87) + c(-691, -543, "LQi$", -585) + o(629, 631, 551, 631, "B[@!") + e(1046, "%o^d", 1087, 1040) + e(1058, "$fZY", 1087, 1076) + o(592, 645, 516, 558, "ZuDB") + a("vsxq", -122) + o(680, 757, 739, 779, "U7Qw") + g(798, 901, 871, "aq94") + a("c&2!", 42) + o(784, 843, 885, 760, "$CY%") + c(-471, -366, "svLN", -433) + e(990, "I$)[", 965, 1013) + g(885, 940, 1019, "aq94") + e(978, "KP8W", 977, 902) + e(964, "LQi$", 996, 970) + e(860, "ZuDB", 1027, 916) + g(751, 838, 800, "*1CQ") + e(944, "%h&3", 849, 866) + g(1044, 1019, 979, "$CY%") + c(-411, -504, "%o^d", -440) + a("Q@NM", -66) + o(760, 669, 654, 795, "Yq!M") + e(958, "8cB9", 961, 1029) + g(790, 881, 842, "ejeF") + e(951, "B[@!", 941, 941) + c(-364, -527, "VS^L", -467) + o(579, 577, 581, 651, "VS^L") + c(-617, -622, "%7IR", -539) + a("%h&3", -30) + e(969, "ejeF", 937, 1015) + a("Yq!M", 67) + c(-643, -594, "c&2!", -565) + c(-695, -641, "I$)[", -589) + g(797, 825, 865, "%h&3") + o(590, 671, 550, 691, "8cB9") + o(744, 768, 669, 824, "AyC9") + o(803, 857, 743, 911, "FbgT") + e(946, "$CY%", 1045, 1059) + o(648, 653, 552, 553, "neoM") + e(966, "7lFO", 1110, 1019) + g(1069, 974, 961, "8cB9") + g(821, 902, 801, "%7IR") + c(-294, -441, "qn[a", -407) + a("Ee&(", -24) + o(601, 680, 616, 618, "$fZY") + a("aq94", -49) + a("KSpm", -99) + a("Tu]k", -61) + e(953, "tbU@", 1006, 899) + g(1034, 1015, 933, "Yq!M") + c(-462, -577, "4ODC", -491) + a("FbgT", -4) + o(650, 732, 676, 756, "%7IR") + o(727, 760, 670, 725, "%7IR") + a("AyC9", -105) + c(-738, -539, "4ODC", -621) + e(849, "@lG^", 928, 923) + a("8cB9", 86) + a("Yq!M", 90) + c(-674, -530, "U7Qw", -612) + g(1104, 1033, 1136, "fJES") + o(584, 511, 663, 509, "LQi$") + e(1005, "ZuDB", 1008, 1058) + c(-576, -593, "So[8", -517) + e(1119, "qn[a", 1168, 1081) + o(685, 743, 702, 633, "ejeF") + o(754, 806, 703, 693, "4ODC") + c(-521, -401, "8wpq", -516) + o(693, 600, 635, 666, "So[8") + g(979, 910, 879, "Q@NM") + e(1028, "ZuDB", 986, 921) + a("F[HW", 50) + a("$CY%", -76) + e(922, "Jzn7", 894, 943) + g(859, 897, 803, "sxcf") + a("$fZY", -117) + a("FbgT", -77) + g(964, 906, 970, "I$)[") + c(-435, -488, "VS^L", -518) + c(-530, -576, "cydu", -474) + g(920, 1031, 1135, "FbgT") + o(651, 552, 702, 757, "[1lb") + o(676, 673, 603, 726, "8wpq"), n = window[a("fJES", -140)](i), t = window[a("sxcf", 33)](n);
  function e(I, s, Q, x, E) {
    return V(x - 700, s);
  }
  const A = cQ(t);
  function o(I, s, Q, x, E) {
    return V(I - 417, E);
  }
  const r = {};
  function a(I, s, Q, x, E) {
    return V(s - -305, I);
  }
  r[o(636, 527, 710, 691, "Xr&&")] = P0;
  function g(I, s, Q, x, E) {
    return V(s - 649, x);
  }
  function c(I, s, Q, x, E) {
    return V(x - -790, Q);
  }
  return r[e(962, "c&2!", 1033, 1075)] = fC, window[e(1012, "KSpm", 1045, 950) + "o"][o(782, 750, 764, 841, "ejeF") + "e"][e(830, "KP8W", 842, 895) + c(-485, -683, "a!zF", -583)](c(-399, -409, "1TB2", -466), A, r, !0, [g(847, 957, 893, "7lFO") + "pt"]);
}
async function wE(i) {
  const n = await yE(), t = {};
  function e(r, a, g, c, I) {
    return V(a - -311, I);
  }
  function A(r, a, g, c, I) {
    return V(g - 734, a);
  }
  t[o(933, 868, 794, 893, "c&2!")] = P0;
  function o(r, a, g, c, I) {
    return V(c - 539, I);
  }
  return window[e(-207, -131, -243, -164, "Jzn7") + "o"][A(1181, "F[HW", 1121) + "e"][e(84, -14, -80, -60, "So[8") + "pt"](t, n, i);
}
(function(i, n) {
  function t(g, c, I, s, Q) {
    return SA(Q - -682, c);
  }
  function e(g, c, I, s, Q) {
    return SA(c - -153, g);
  }
  function A(g, c, I, s, Q) {
    return SA(g - 542, s);
  }
  function o(g, c, I, s, Q) {
    return SA(c - 265, g);
  }
  function r(g, c, I, s, Q) {
    return SA(I - 517, Q);
  }
  const a = i();
  for (; ; )
    try {
      if (parseInt(t(-291, "hON2", -287, -296, -289)) / 1 * (parseInt(e("oOL#", 253, 259, 260, 254)) / 2) + parseInt(r(921, 940, 928, 927, "]L2i")) / 3 * (parseInt(t(-281, "tsgW", -276, -284, -273)) / 4) + parseInt(o("(Al9", 666, 660, 663, 671)) / 5 + parseInt(t(-289, "]L2i", -302, -282, -291)) / 6 * (parseInt(A(942, 951, 943, "MTV2", 948)) / 7) + -parseInt(A(934, 933, 944, "UnAM", 932)) / 8 * (-parseInt(o("YG3c", 655, 657, 654, 659)) / 9) + parseInt(e("[vda", 242, 246, 247, 238)) / 10 + -parseInt(t(-269, "Cd)j", -288, -289, -280)) / 11 === n) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Ln, -49705 * -5 + 6427 * 75 + -48113);
function Ln() {
  const i = ["iSkTcGxdKmorW6tcV0ba", "qLOOECogW6WRWQZcLaaLbG", "WQFcUqFcIN/dS8klleBdLSow", "md1shmobamkFnL7cNt4r", "l01Wq33cMYS+W6BdPrO+sq", "y24y", "WOH0WQT5W5/cI8oKWObpxgK", "W4ddLvLQW5vbefGgWOlcSZq", "sf4ICSk/WQ03WO/cKqq", "ESkpW5LikcdcRmk8tHi9", "BCk5WOhdMI4bauFdLSoiwh3dTq", "oaj4W4xcTSohDmojq2BdHcxdNum", "FCoqDWVcGCkGFI8", "tMf0rSkq", "CCoTWOpdTgSAW4f4", "WPdcMW0kWQtdQeNcPa", "WR3dMbpcULKxwsjbWQSgWOHR", "W6ddQWBcS8k+ksfjWO/cUcFcOSkT", "DSkZWRddKfK9W58", "W7lcV8k/o8osWPP5qGBcHSoZ", "jmkNaaxcQ8ktW4ZcNe1oAvy", "WQ7dNSkaACotAYy", "aSoXaCkpnGddIei"];
  return Ln = function() {
    return i;
  }, Ln();
}
function SA(i, n) {
  i = i - (-370 * 2 + -7 * -1263 + -7712);
  const t = Ln();
  let e = t[i];
  if (SA.XcoNHI === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (let x = 0, E = s.length; x < E; x++)
        Q += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const g = function(c, I) {
      let s = [], Q = 0, x, E = "";
      c = A(c);
      let C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (let l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    SA.fjRuHj = g, SA.vmHkCW = {}, SA.XcoNHI = !0;
  }
  const o = t[-1821 * -1 + 883 * 4 + -5353], r = i + o, a = SA.vmHkCW[r];
  return a ? e = a : (SA.mqeBvn === void 0 && (SA.mqeBvn = !0), e = SA.fjRuHj(e, n), SA.vmHkCW[r] = e), e;
}
async function DE(i) {
  const { iv: n, key: t, message: e } = await CQ(i), A = await wE(t);
  function o(a, g, c, I, s) {
    return SA(g - 156, a);
  }
  const r = {};
  return r[o("c2EF", 552)] = A, r.iv = n, r[o("^74G", 560) + "ge"] = e, r;
}
function Bt(i, n, t, e, A) {
  return BA(n - -117, t);
}
function oe(i, n, t, e, A) {
  return BA(A - -311, e);
}
(function(i, n) {
  function t(a, g, c, I, s) {
    return BA(I - 680, g);
  }
  function e(a, g, c, I, s) {
    return BA(c - -276, a);
  }
  const A = i();
  function o(a, g, c, I, s) {
    return BA(a - 955, g);
  }
  function r(a, g, c, I, s) {
    return BA(I - -906, g);
  }
  for (; ; )
    try {
      if (parseInt(e("G8!o", -3, -62, -87, -107)) / 1 + -parseInt(e("^j$B", -14, -75, -89, -15)) / 2 * (parseInt(e("x0*1", -65, -38, -32, -88)) / 3) + parseInt(o(1129, "BZ#[", 1109, 1191, 1163)) / 4 + parseInt(t(914, "&smq", 915, 868, 920)) / 5 + parseInt(t(863, "bSqG", 943, 908, 849)) / 6 * (parseInt(o(1237, "X(9J", 1180, 1175, 1177)) / 7) + -parseInt(r(-688, "QE6^", -678, -630, -601)) / 8 + parseInt(r(-664, "Rpx)", -594, -636, -683)) / 9 * (-parseInt(t(895, "hTAA", 845, 871, 928)) / 10) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(On, -178952 + 11 * -1329 + 300628);
function On() {
  const i = ["W5BcKmooWOr4", "W7DzWP3cQSkZ", "WR/cV8oOW5a", "h8keWRPNWQW", "W5ZcUSkw", "A0LozSk7", "WRtcL8o9W6ddTW", "pHdcOSkRy8oDESkOW5hdSSkjga", "lrm0W68c", "WORdNmkTW4u", "rwTMWOe9", "DmkQeSkL", "cCkWgSkHWRS", "urrhv3qMWRi", "ASoFfSkVW6W", "lCogW4fHWRi", "Cmk9d8k+WRy", "W4FcKmoeWPC", "WRO8jmomWQS", "itC4W6Ot", "W7fqWO7cT8kZ", "W5VcVeXhjW", "d8kOgSkLWOu", "kYm9W6eu", "W4VcRx1bmW", "W5XYnCkyvq", "xmosW68DW7fAW6GYwwWqFq", "z2NcSq1u", "W41sxGb+", "AxxdP8o2jW", "b8oTWRX/W55MWPRcTmoe", "dbrxhYy", "WQiXpmk5CG", "W6KPWORcHwW", "svbKWPaQ", "cfRcKmkaWQi", "ErpcU3xcO2hdHhSmv8o8WQe", "umkgua", "cxBdJHFdNG", "WOyHgCkyqW", "l0ZcLSoyxq", "W7TdbtNdGW", "xXhcO8ktWR8wBCoM", "WRacmSoEWR8", "WROHnmocWQG", "W6BcMgNcGSkt", "WR4OmG", "W4ZcTmoTEeq", "W6JcJCkXW4RcHa", "b8obCCoM", "W4/dJSkjAL8", "W4JcIuXbnq", "grXCjXK", "WQyXhSk8Dq", "z0RcTXfd", "uSk9W65hW7O", "t29UWPmP", "WPBdI8kSW4pcOG", "gXC4W5nUW6PKkqNcJdXh", "gcrkeJ4", "uW5qeSk+", "tw4BqhpdUtiBuwuT", "xMVdVCo6oq", "WQRcSLqluG", "FmoVbCkNW7K", "W5DqWOOuW78", "W75ddZxdSG", "WOlcH1uxrW", "WR/dImoJW57cSCkUW5/cSSoE", "W6mXWQOhWPa", "WRPmrSkXWRe", "drfYxhO", "WRCeW5RdS8oNy2ldRqZdL10r", "gSoaD8oGW5O", "c8o0WRSKWQW", "mZtdOvmaEHtcHbJcNCo3", "E8ova8kTW7O", "W4hcImo9W71UW7JdHSoxW4GAW7na", "WQWUmmoi", "WQKQjCoeWQO", "WQLmrSkGWQq", "ytDwfCkA", "WQvrrSo0WQa", "WQNdJ8okW6BcOhWEWPVdQmo+jW", "k8keWQPpWQG", "W7KneSoYW6ddISkEcmk9WR3dRmoJ", "WOJcPuO", "W4TWsq5+", "W4hdNCkC", "WRu5a8k1zW", "ALFdUSo0fG", "yKddPW", "W785ECoMdSktWRpdUa", "WPBdI8kW", "ceFcMmkrWRK", "WQqrD8k1", "WOBcSei", "zCkWWPldHW", "lmk2WPhcI8k/FZS8W6LvW6y", "FuuG", "dCk7aCkPWO0", "W53cV8ouwua", "WR5ytmkZWR0", "W7DeiJVdSW", "bSkOhG", "jmo5W4T4WPy", "r8kYW61ZW68", "gCk7aCk2", "t1b4WOK1", "WOypECkZsG", "bghcMmkaWRe", "jmoIW4P8WQa", "lrn3zmkoya5zW5VdOJ/dNW", "W5pcKmoeWOHj", "Evrrr8kB", "WOutW51nWRPmlSoXncLxW6u", "W5pcI8ofWOX/", "E8oMbmkCW5O", "W7W+WP3cJx4", "WPJdPCkxjHeMWOpcILtdLbpdGa", "W4xcLSoJFuS", "bdbPq1O", "W4VdUmkdW47cN8kEcG", "W5TYkmkuAq"];
  return On = function() {
    return i;
  }, On();
}
function DA(i, n, t, e, A) {
  return BA(i - -313, n);
}
function se(i, n, t, e, A) {
  return BA(n - 573, t);
}
function BA(i, n) {
  i = i - 161;
  const t = On();
  let e = t[i];
  if (BA.FAUmUl === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (let x = 0, E = s.length; x < E; x++)
        Q += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const g = function(c, I) {
      let s = [], Q = 0, x, E = "";
      c = A(c);
      let C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (let l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    BA.dQqOtH = g, BA.GgKOrH = {}, BA.FAUmUl = !0;
  }
  const o = t[5107 * 1 + 7303 + -17 * 730], r = i + o, a = BA.GgKOrH[r];
  return a ? e = a : (BA.hkEfSB === void 0 && (BA.hkEfSB = !0), e = BA.dQqOtH(e, n), BA.GgKOrH[r] = e), e;
}
function nA(i, n, t, e, A) {
  return BA(i - 51, n);
}
class bE {
  async [oe(-155, -147, -123, ")OU8", -147) + oe(-122, -155, -101, "$z&p", -128) + nA(301, "BZ#[") + DA(-143, "hTAA") + DA(-98, "bSqG")](n) {
    const { Image: t } = Ze, e = await n[c(1163, 1135, 1197, 1221, "6$J7") + r(-121, "5!Md", -118) + "r"](), A = new Uint8Array(e), o = {};
    function r(x, E, C, l, f) {
      return nA(C - -354, E);
    }
    o[c(1192, 1182, 1150, 1173, "#Mbs")] = A;
    const a = t[Q(86, 115, "N][B") + "y"](o);
    function g(x, E, C, l, f) {
      return oe(x - 19, E - 199, C - 9, E, f - 43);
    }
    function c(x, E, C, l, f) {
      return se(x - 301, C - 385, f);
    }
    if (a) {
      if (r(-93, "#Mbs", -70) === g(-38, "%0%E", -91, -161, -100)) throw w[I(595, 652, "Rbab") + I(696, 672, "x0*1")](a);
      {
        const { architecture: x, fullVersionList: E, model: C, platform: l, platformVersion: f } = _0x247c11 ?? {};
        return { userAgent: _0x361417, architecture: x, platform: l, model: C, platformVersion: f, browserVersions: E?.[r(-68, "l83Z", -83)](({ brand: h, version: p }) => ({ name: h, version: p })), installationId: _0x3e4931 };
      }
    }
    function I(x, E, C, l, f) {
      return nA(E - 372, C);
    }
    const s = {};
    function Q(x, E, C, l, f) {
      return DA(E - 167, C);
    }
    return s[g(-13, "l83Z", 2, 28, -16)] = A, t[r(-59, "vZl8", -55) + "e"](s);
  }
  [DA(-73, "Rbab") + nA(320, "z36Q") + DA(-54, "vZl8") + se(812, 760, "9f)5") + nA(256, "41U1") + nA(245, "AG]1")](n) {
    function t(a, g, c, I, s) {
      return oe(a - 423, g - 370, c - 409, g, s - -133);
    }
    const { VideoStream: e } = Ze, A = e[t(-311, "AG]1", -258, -201, -249) + "y"](n);
    function o(a, g, c, I, s) {
      return oe(a - 284, g - 417, c - 49, a, s - -273);
    }
    if (A)
      throw t(-146, "QE6^", -219, -135, -166) === r(659, 762, 737, "z36Q", 715) ? _0xbed699[o("whLS", -289, -321, -337, -304) + o("L2MX", -347, -328, -360, -342)](_0x50cd26) : w[t(-234, "z36Q", -231, -279, -238) + o("9)PH", -328, -313, -384, -373)](A);
    function r(a, g, c, I, s) {
      return se(a - 340, s - -36, I);
    }
    return e[t(-298, "%ylQ", -236, -244, -263) + "e"](n);
  }
  async [nA(226, "%0%E") + nA(227, "#rHh") + Bt(144, 138, "#Rj1") + Bt(171, 145, "l83Z") + DA(-55, "AG]1") + "e"](n) {
    const { v4: { Metadata: t } } = Ze;
    function e(I, s, Q, x, E) {
      return oe(I - 101, s - 54, Q - 9, x, I - -144);
    }
    const A = { ...n };
    A[r(614, 671, 642, 643, "&smq") + c(-341, -320, -287, "$z&p")] = Ze[c(-287, -307, -264, "9)PH") + a("g[*f", 750, 786)][e(-211, -218, -212, ")OU8")], A[e(-245, -271, -210, "X(9J") + c(-307, -370, -316, "x0*1") + e(-231, -267, -202, "BZ#[") + "n"] = a("Rpx)", 708, 699);
    const o = A;
    function r(I, s, Q, x, E) {
      return DA(s - 724, E);
    }
    function a(I, s, Q, x, E) {
      return oe(I - 99, s - 383, Q - 52, I, Q - 820);
    }
    const g = t[c(-180, -212, -217, "41U1") + "y"](o);
    if (g)
      if (a("Rpx)", 751, 731) === c(-256, -205, -210, "41U1")) {
        const { VideoStream: I } = _0x196698, s = I[e(-214, -208, -164, "&smq") + "y"](_0x35a73c);
        if (s) throw _0x14d1fd[c(-342, -260, -307, "rlGO") + a("l83Z", 719, 732)](s);
        return I[a("mKpE", 671, 675) + "e"](_0x35143c);
      } else throw w[r(614, 641, 580, 581, "Hl*s") + r(626, 624, 663, 651, "%Wby")](g);
    function c(I, s, Q, x, E) {
      return se(I - 210, Q - -1062, x);
    }
    return t[e(-252, -268, -194, "7ZfU") + "e"](o);
  }
  async [Bt(157, 164, "rlGO") + DA(-146, "N][B") + nA(334, "AG]1") + se(799, 785, "$z&p")](n) {
    const { Content: t } = Ze, { iv: e, key: A, message: o } = await DE(n);
    function r(x, E, C, l, f) {
      return DA(l - 67, f);
    }
    const a = { token: new Uint8Array(A), iv: e, schemaVersion: uC, bytes: new Uint8Array(o) };
    function g(x, E, C, l, f) {
      return DA(E - -147, x);
    }
    const c = t[I(43, 97, "I&1V") + "y"](a);
    if (c)
      throw I(45, -3, "7JxY") === g("rlGO", -241) ? _0x493ee5[g("#Rj1", -239) + I(60, 34, "MrSA")](_0xbb8efd) : w[r(-59, -50, -28, -30, "l83Z") + r(-6, 5, 50, 11, "Rbab")](c);
    function I(x, E, C, l, f) {
      return nA(x - -242, C);
    }
    const s = t[Q(103, 77, 144, 88, "I&1V") + "e"](a);
    function Q(x, E, C, l, f) {
      return DA(l - 128, f);
    }
    return t[I(93, 45, "AG]1") + "e"](s)[Q(24, 69, 70, 42, "#Rj1") + "h"]();
  }
  [nA(326, "X(9J") + DA(-50, "vZl8") + oe(-124, -158, -89, "$z&p", -132) + "ge"](n) {
    const { Blob: t } = Ze.v4, e = t[o(-379, -383, "MrSA", -387, -375) + "y"](n);
    function A(c, I, s, Q, x) {
      return nA(c - -174, x);
    }
    function o(c, I, s, Q, x) {
      return DA(x - -318, s);
    }
    if (e)
      throw r(-527, -512, -495, "%0%E") === o(-396, -327, "L2MX", -410, -385) ? _0x15b896[r(-551, -546, -487, "9f)5") + o(-480, -425, "sdvZ", -465, -466)](_0x3d4447) : w[o(-349, -365, "6$J7", -318, -366) + A(128, 146, 118, 109, "MrSA")](e);
    function r(c, I, s, Q, x) {
      return nA(I - -834, Q);
    }
    const a = t[g(-175, -220, -233, "^j$B") + "e"](n);
    function g(c, I, s, Q, x) {
      return DA(s - -116, Q);
    }
    return t[g(-212, -159, -162, "hTAA") + "e"](a)[g(-245, -198, -197, "Rbab") + "h"]();
  }
  async [nA(237, "^j$B") + DA(-144, "41U1") + Bt(97, 101, "^j$B") + nA(251, "m93]") + "ls"](n, t, e) {
    function A(I, s, Q, x, E) {
      return Bt(I - 202, x - 660, s);
    }
    const { architecture: o, fullVersionList: r, model: a, platform: g, platformVersion: c } = t ?? {};
    return { userAgent: n, architecture: o, platform: g, model: a, platformVersion: c, browserVersions: r?.[A(775, "mKpE", 789, 747)](({ brand: I, version: s }) => ({ name: I, version: s })), installationId: e };
  }
  async [oe(-169, -107, -146, "%0%E", -136) + nA(231, "#Mbs") + se(803, 816, "m93]") + Bt(65, 54, "Rpx)") + se(853, 827, "#Mbs") + oe(-106, -136, -119, "#rHh", -114) + nA(240, "sdvZ") + "on"](n) {
    function t(c, I, s, Q, x) {
      return nA(I - -1010, Q);
    }
    const e = await this[r(590, 649, 590, "Wi@8") + r(697, 704, 751, "7ZfU") + o(-293, "X(9J", -290, -265, -261) + o(-264, "BZ#[", -327, -377, -315) + A("AG]1", 1133, 1117, 1063, 1092)](n[g(429, 419, 360, 399, "BZ#[") + g(349, 308, 362, 348, "7JxY") + "ge"]);
    function A(c, I, s, Q, x) {
      return se(c - 380, x - 357, c);
    }
    function o(c, I, s, Q, x) {
      return se(c - 373, x - -1060, I);
    }
    function r(c, I, s, Q, x) {
      return se(c - 267, c - -144, Q);
    }
    const a = {};
    a[g(336, 343, 291, 355, "DVo1")] = e;
    function g(c, I, s, Q, x) {
      return oe(c - 490, I - 260, s - 365, x, I - 456);
    }
    return a[o(-230, "Hl*s", -227, -198, -242) + o(-188, "N][B", -177, -180, -223) + r(636, 595, 598, "z36Q")] = n[t(-682, -742, -690, "7JxY") + g(383, 409, 400, 413, "N][B") + r(638, 589, 682, "x0*1")], a;
  }
}
(function(i, n) {
  function t(a, g, c, I, s) {
    return QA(I - 296, g);
  }
  const e = i();
  function A(a, g, c, I, s) {
    return QA(c - -648, g);
  }
  function o(a, g, c, I, s) {
    return QA(c - 636, g);
  }
  function r(a, g, c, I, s) {
    return QA(s - 133, g);
  }
  for (; ; )
    try {
      if (parseInt(A(-76, "krM^", -23, -24, -71)) / 1 + -parseInt(A(-12, "^tcF", -75, 8, -109)) / 2 + parseInt(r(655, "u74d", 688, 695, 660)) / 3 * (parseInt(t(819, "@v3J", 728, 760, 723)) / 4) + parseInt(o(1132, "XL!f", 1091, 1113, 1166)) / 5 * (parseInt(A(48, "6F6!", -42, 22, -130)) / 6) + -parseInt(A(-71, "sU#Z", -161, -140, -127)) / 7 * (-parseInt(A(-112, "Dwtm", -32, -48, -82)) / 8) + -parseInt(r(680, "BLQJ", 762, 785, 751)) / 9 + parseInt(A(-121, "8NaL", -196, -110, -267)) / 10 * (-parseInt(t(906, "^tcF", 780, 864, 802)) / 11) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Jn, 41 * -766 + -1049 * 1055 + -847 * -2054);
function He(i, n, t, e, A) {
  return QA(t - 259, A);
}
function Pt(i, n, t, e, A) {
  return QA(e - 830, A);
}
function Wi(i, n, t, e, A) {
  return QA(n - 380, e);
}
function _t(i, n, t, e, A) {
  return QA(e - -168, A);
}
function QA(i, n) {
  i = i - (3468 + -3 * 1609 + 1804);
  const t = Jn();
  let e = t[i];
  if (QA.slvCYl === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let x = 0, E, C, l = 0; C = c.charAt(l++); ~C && (E = x % 4 ? E * 64 + C : C, x++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * x & 6)) : 0)
        C = I.indexOf(C);
      for (let x = 0, E = s.length; x < E; x++)
        Q += "%" + ("00" + s.charCodeAt(x).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const g = function(c, I) {
      let s = [], Q = 0, x, E = "";
      c = A(c);
      let C;
      for (C = 0; C < 256; C++)
        s[C] = C;
      for (C = 0; C < 256; C++)
        Q = (Q + s[C] + I.charCodeAt(C % I.length)) % 256, x = s[C], s[C] = s[Q], s[Q] = x;
      C = 0, Q = 0;
      for (let l = 0; l < c.length; l++)
        C = (C + 1) % 256, Q = (Q + s[C]) % 256, x = s[C], s[C] = s[Q], s[Q] = x, E += String.fromCharCode(c.charCodeAt(l) ^ s[(s[C] + s[Q]) % 256]);
      return E;
    };
    QA.LUtQQc = g, QA.QouFlB = {}, QA.slvCYl = !0;
  }
  const o = t[-17589 + 533 * 33], r = i + o, a = QA.QouFlB[r];
  return a ? e = a : (QA.EPSuwF === void 0 && (QA.EPSuwF = !0), e = QA.LUtQQc(e, n), QA.QouFlB[r] = e), e;
}
function Qt(i, n, t, e, A) {
  return QA(e - 974, n);
}
function Jn() {
  const i = ["WRm/Bq", "W6pcGSkVxNu", "W7tdHJq2W4S", "sfz1r8op", "WPHDWORcLSob", "p2nWa8oz", "WP7cPKW", "WPr0mCkL", "W4xdT1r3W6C", "txldLfyvj2DaFCkEqa", "WONcR1NdKSk2", "W5hdOevIW6u", "rmoyWQVdKa", "WPe4CSoRWQ0", "WRdcSb/dKGu", "oWfyW7lcJG", "W64qcW", "W4BcR3FcRNC", "pmo5WRJdSHS", "WRmSAq", "W6hcKSkBWQZcRa", "W4HoWP0", "WRzWWO4nW6W", "q8ouWRFdJq0", "WQFcTWJdLLe", "W6JcU8kVrga", "W6hcNmo5vCos", "vmo1WQhdIGe", "uSoNWRBcQSkI", "DI1/iSk5WPjdo8kRWRiT", "W7/cGmkDWQ7cUG", "WOLmW4FdUa", "WQldS0FdHmkf", "WRe5ACoEzW", "CmoxCCk3vq", "t8oPWOv9jW", "W5qyd2BcOa", "mqZdTCoXWRrPwSkvy1nsWPC", "WQuJWQu+W6O", "WQG9WOK4W4C", "qCo2WPG", "W6xcI8olxCos", "W7dcHNFcJ1m", "ze3dUHlcNG", "WO8Uz8oTWQW", "W6KCW7GoW6m", "j8oIWPRdG2m", "W4ldIcu", "WOtdKgO", "W47dGConD8oG", "vmo6WOfvmq", "nWHJW73cQq", "W4dcMLLSWQK", "W6pcQCoCu8os", "WRZcTLRdLr4", "dmkNWOVdLMu", "zgRdNHC", "W4v4WPbtW7i", "bSoMWQlcKmkb", "W7rGW5hdQGu", "dtNcHaHd", "umoSWPBcPmkT", "qCk7WP9ymq", "WP3cPKZdG8kZ", "WP4VW45fWQBdICo9W6nhW5/cSWW", "WPPQWQGiW5u", "W4PPWOuDW50", "gZNcLG5b", "u8odWQhdNXa", "cJ/cLWPI", "eCkPW5SkCCkVb8ogW47dGSkbFSouEW", "mXDFW7lcJq", "W416WO4", "o8k0WR7dOb8", "WRZcLbpdLXq", "fCkIW58pC8kUwmk1W6BdNSkpDq", "WRCLEmoYDG", "igy9wmoL", "FCo0BCkTuW", "mNrGfSoF", "WQfTWOqhW7C", "W6W8hNRcLq", "WOj2oCkYWP4", "W4PiWOyaW5S", "WP0vfWpdHmo7j8o9nG", "FqFcTSkAxG", "W7PuW4a", "bmoMWP8", "WO8WB8oMWQW", "W4FdJJq/W5i", "W6T8WR3cVmoQ", "EwhdHX/cMa", "b8oHWQJcISkq", "W5FdPI0/W7G", "W5xdTe9GW6K", "W7qCd8obW6u", "zvRcPSkiW6a", "ESoPz8kQwW", "WPvFWPBcJmoa", "WPlcMhyrW73cLSoHW4WE", "W6VcRSkTt2C", "zvdcSW", "jvhdPmk8yCoyW55yuq", "WPdcRuVdKSkX", "W7hcK8kvWRVcUq", "DtBcO8kqwq", "WRC9WO4SW48", "WQGsWQq5W7S", "W5qSzSkUWR8zDXBdVG", "zSoiaq", "l0hdPCoWna", "WOzrhq", "W5hdT0rBW6K", "pCoVWOBcQSkX", "jMCRESo+", "W6adhM/cGa", "n8kAWRtdVr8", "igpdHSkpW6m", "WR1OWRWUW7hdG3GAeW", "cxf/yre", "DrlcOCkPymkHWQdcLSo5WPRdHeO", "W6HYWOOsW7G", "xmk+W5JcGsddKSkGrSkGW6GezG", "WPKnDmoLWR0", "W6u4bCoCW4q", "W4H2WOOsWRe", "kL3dOmkpW7W", "W4feEwxdNeVdJsdcUmo4WQ3dRa", "W65PWQG", "W6XPWQZcUCoU", "ux83cmkh", "mgfG", "a8osWRpcKCkw", "htJcGa5s", "W6TbW4ddQXm", "W4tdVfrFW6e", "W5dcRK3cSh8", "WRFdV8kDCNhcGCo7W4e", "WPddK0pdRCkZ", "AmoXbCkuWP4", "W5isssb4cSkKWPDC", "W6RcO8kRxN0", "W6XVWQZcVmot", "yxdcPSkXW6q", "W5hdM3BdUmkY", "uSoaWO/cPmkU", "jSkWWRtdVtK", "cha9AmoR", "W4FcQKRcOLS", "j8kwmSkDBL4yW4/dLa", "WQTmcGzA", "t21/Ehq", "WRSNWQq/W6K", "W7S+W7LbW70", "W4tdN0vHW7C", "ihFdLCkuW7y", "WQ5tWOZcImoa", "WOzvcbzg", "W4WoWRlcVmoaW4xcOCkD", "W6FcU8kR", "WP/cRe3dImk0", "zWpcSW", "CCobDSk7wq", "W6/cOSkVwwa", "WQavWPGQW5a", "gc0JjGiaDSoPuwvFW4WMCa", "WOjMjCkHWP0", "ivBdTmoWja", "WO44DCo/WQu", "WQmCoZNcUq", "zmoibCkdWQq", "WP3cLSkjlSkDbvG5W70vfd4", "W6C8W5TFWPldGCkUWPfVdc3cUq", "W7jEW4ddQXq", "C8omWRFcKCkB", "W6FcLCkowCoE", "DmorcCklWOG", "xg3dOXVcQq", "rLf9", "W7iJd8otW6i", "W44hW5xcISoGW7xcNCknoq", "W6C1hNRcKq", "W4VdJJm2W7O"];
  return Jn = function() {
    return i;
  }, Jn();
}
class kE extends bE {
  async [He(878, 749, 836, 854, "RRAY") + He(742, 783, 738, 688, "5&pc") + Qt(1511, "RRAY", 1481, 1420)]({ installationId: n, onCaptureData: t, sessionToken: e, video: A }) {
    const o = t[s(14, -39, 91, 33, "Ms90")](M[s(73, 65, 70, 3, "G%GU") + "AL"]), r = t[I(1426, 1404, "Ms90", 1376, 1368)](M[Q(435, 316, "llAs", 463, 376)]) ?? t[a(1302, 1349, 1338, "Aa8N")](M[g(-373, -290, "2CZi", -365, -380) + Q(406, 516, "k(!o", 503, 447) + "AL"]);
    if (!o) throw new w(a(1375, 1389, 1465, "jv%d") + Q(355, 256, "aInR", 267, 326) + s(-118, -36, -103, -37, "F)S*") + Q(440, 366, "Hkcq", 326, 391) + a(1300, 1292, 1377, "k(!o") + s(80, 103, -8, 67, "jv%d") + g(-425, -418, "^tcF", -392, -350) + I(1545, 1523, "xJB*", 1550, 1466) + Q(230, 382, "Aa8N", 304, 311));
    function a(C, l, f, h, p) {
      return He(C - 163, l - 130, l - 586, h - 117, h);
    }
    if (!r) throw new w(s(4, 60, 23, -15, "OTZF") + s(-29, 9, -115, -27, "2CZi") + a(1402, 1377, 1301, "@v3J") + s(122, 116, 115, 30, "Geu]") + I(1361, 1443, "x!)]", 1446, 1371) + g(-283, -271, "Hkcq", -292, -287) + g(-403, -427, "Dwtm", -409, -442) + Q(413, 386, "x!)]", 328, 388) + g(-434, -360, "2CZi", -375, -364));
    function g(C, l, f, h, p) {
      return Qt(C - 426, f, f - 279, p - -1884);
    }
    const c = {};
    function I(C, l, f, h, p) {
      return Pt(C - 108, l - 19, f - 406, p - 19, f);
    }
    function s(C, l, f, h, p) {
      return Qt(C - 63, p, f - 186, h - -1460);
    }
    c[Q(493, 442, "Aa8N", 470, 437) + g(-521, -446, "8NaL", -539, -454) + g(-317, -425, "Dx6F", -319, -356)] = n, c[s(30, -65, 90, 17, "RRAY") + g(-365, -277, "N*s!", -345, -361) + I(1346, 1385, "XL!f", 1335, 1321) + I(1332, 1342, "V@t2", 1245, 1319)] = o, c[I(1267, 1295, "6Vf(", 1398, 1340) + Q(423, 450, "sU#Z", 340, 399) + Q(340, 426, "tXHX", 389, 403) + g(-384, -475, "8NaL", -396, -436)] = r;
    function Q(C, l, f, h, p) {
      return He(C - 416, l - 346, p - -423, h - 335, f);
    }
    c[Q(351, 323, "b1F7", 370, 357) + a(1376, 1371, 1443, "G%GU") + "en"] = e;
    const x = await this[Q(261, 421, "x!)]", 426, 348) + s(-114, -44, 28, -28, "@Gxd") + Q(470, 436, "Y[&T", 356, 383) + g(-456, -405, "6F6!", -428, -429) + "e"](c), E = await this[g(-352, -426, "aInR", -408, -371) + Q(338, 423, "k(!o", 516, 426) + g(-455, -416, "cR&c", -447, -460) + a(1359, 1363, 1333, "lhBj")]({ metadata: x, neutralExpressionFaceImage: await Mn(o[Q(266, 386, "$Y8z", 306, 319) + g(-316, -310, "I#B!", -228, -319) + "e"]), smileExpressionFaceImage: await Mn(r[s(97, 176, 51, 118, "5&pc") + a(1509, 1436, 1478, "I#B!") + "e"]), video: A });
    return this[a(1476, 1457, 1536, "u74d") + a(1360, 1448, 1377, "NsUS") + s(33, -3, 57, -32, "6Vf(") + I(1275, 1350, "JxeJ", 1345, 1366)](E);
  }
  async [Qt(1374, "tXHX", 1417, 1422) + _t(407, 415, 432, 446, "Geu]") + Wi(876, 954, 1018, "JxeJ") + _t(361, 442, 338, 390, "tXHX")]({ metadata: n, neutralExpressionFaceImage: t, smileExpressionFaceImage: e, video: A }) {
    const { SmileLivenessContent: o } = Ze.v4, r = await this[s(1412, 1382, 1403, 1332, "BLQJ") + s(1459, 1523, 1536, 1484, "V@t2") + a("G%GU", -366, -293) + C(251, 250, 332, "$Bhg") + C(203, 157, 176, "I#B!")](t);
    function a(h, p, m, k, D) {
      return Pt(h - 75, p - 230, m - 372, p - -1656, h);
    }
    function g(h, p, m, k, D) {
      return He(h - 500, p - 304, h - -238, k - 348, m);
    }
    const c = await this[a("JxeJ", -295, -324) + Q("$Y8z", 1416, 1392) + Q("Dx6F", 1336, 1407) + a("cR&c", -357, -406) + a("F)S*", -242, -274)](e), I = await this[Q("$Bhg", 1289, 1336) + s(1469, 1494, 1536, 1497, "V@t2") + Q("@v3J", 1390, 1343) + g(609, 604, "mLxp", 633) + Q("tXHX", 1360, 1451) + "e"](n);
    function s(h, p, m, k, D) {
      return Pt(h - 361, p - 3, m - 367, m - 91, D);
    }
    function Q(h, p, m, k, D) {
      return Pt(h - 157, p - 200, m - 223, p - -35, h);
    }
    const x = { neutralExpressionFaceImage: r, smileExpressionFaceImage: c, metadata: I, video: { streamH264: A ? this[a("h&T@", -213, -256) + Q("aInR", 1346, 1426) + s(1425, 1415, 1493, 1458, "x!)]") + g(578, 627, "F)S*", 665) + s(1425, 1290, 1374, 1311, "2CZi") + a("6F6!", -321, -258)](A) : void 0 } }, E = o[s(1324, 1385, 1388, 1446, "b2FI") + "y"](x);
    if (E) throw w[s(1382, 1389, 1387, 1371, "xJB*") + g(550, 543, "8HVq", 524)](E);
    function C(h, p, m, k, D) {
      return _t(h - 413, p - 452, m - 248, h - -174, k);
    }
    const l = o[g(533, 583, "x!)]", 468) + "e"](x), f = {};
    return f[a("$Y8z", -240, -284) + C(123, 111, 50, "XL!f") + g(596, 547, "u74d", 630) + s(1508, 1523, 1444, 1428, "8NaL")] = l, this[Q("mLxp", 1252, 1273) + g(585, 643, "Ms90", 570) + C(120, 41, 77, "u74d") + "ge"](f);
  }
  async [Wi(843, 825, 796, "#MEV") + Wi(809, 879, 851, "8NaL") + Qt(1346, "llAs", 1406, 1437) + _t(342, 332, 306, 382, "d(Ec") + "e"]({ installationId: n, neutralOnCaptureData: t, sessionToken: e, smileOnCaptureData: A }) {
    const o = [...t[a(-192, -174, -129, "G%GU") + a(-217, -284, -195, "%j0i")][a(-12, -95, -92, "OTZF") + l("h&T@", -288, -302, -326) + a(-104, -218, -168, "sU#Z") + l("NsUS", -248, -274, -239) + a(-273, -272, -204, "krM^") + f(1153, 1117, 1194, "Geu]", 1168) + C(1495, "Hkcq", 1495)], ...A[m(487, 551, 577, "N*s!") + m(623, 645, 691, "6Vf(")][m(666, 574, 559, "b2FI") + m(513, 563, 598, "b1F7") + m(731, 665, 754, "mLxp") + C(1605, "8NaL", 1523) + m(494, 538, 448, "I#B!") + l("F)S*", -316, -281, -334) + a(-61, -175, -150, "^tcF")]], r = [...t[f(1282, 1147, 1171, "BLQJ", 1205) + m(733, 647, 688, "XL!f")][l("Aa8N", -320, -318, -261) + C(1628, "$Bhg", 1547) + C(1508, "OTZF", 1427)][C(1367, "h&T@", 1439)](({ detectedObject: D }) => D), ...A[a(-144, -202, -177, "$Y8z") + C(1434, "JxeJ", 1423)][l("cR&c", -305, -254, -316) + l("sU#Z", -185, -180, -244) + a(-96, -187, -107, "Ms90")][C(1592, "jv%d", 1510)](({ detectedObject: D }) => D)];
    function a(D, y, W, Y, fA) {
      return He(D - 322, y - 391, W - -947, Y - 309, Y);
    }
    const g = Js(), c = await lQ(), I = await this[C(1375, "cR&c", 1434) + m(654, 627, 586, "Dx6F") + C(1508, "cR&c", 1517) + m(663, 657, 688, "Hkcq") + "ls"](g, c, n), { cameraProperties: s, croppedImageWithPosition: Q } = t[l("5&pc", -224, -203, -285) + a(-97, -35, -62, "mLxp")], x = await this[C(1484, "b1F7", 1491) + C(1553, "Dwtm", 1468) + C(1465, "cR&c", 1535) + m(692, 632, 561, "@Gxd") + l("$Y8z", -203, -295, -280) + m(448, 530, 586, "Dx6F") + a(-160, -257, -187, "%j0i") + "on"](Q), E = { ...s };
    E[f(1194, 1193, 1163, "lhBj", 1199) + l("llAs", -300, -362, -307) + C(1530, "aInR", 1449) + a(-50, -132, -112, "@v3J") + f(1127, 1075, 1043, "b1F7", 1107)] = x;
    function C(D, y, W, Y, fA) {
      return _t(D - 220, y - 139, W - 406, W - 1093, y);
    }
    E[l("Aa8N", -323, -405, -314) + m(518, 571, 536, "^tcF") + l("^tcF", -203, -266, -274)] = I, E[a(-99, -151, -191, "I#B!") + C(1415, "k(!o", 1481) + C(1471, "6Vf(", 1410) + m(647, 566, 567, "lhBj") + a(-208, -144, -154, "h&T@") + a(-246, -280, -210, "8NaL") + a(-49, -103, -89, "@Gxd")] = o;
    function l(D, y, W, Y, fA) {
      return He(D - 241, y - 402, Y - -1081, Y - 270, D);
    }
    E[C(1464, "@v3J", 1402) + l("Geu]", -395, -433, -361) + f(1131, 1246, 1136, "6F6!", 1177)] = r;
    function f(D, y, W, Y, fA) {
      return Qt(D - 114, Y, W - 300, fA - -377);
    }
    const h = E, p = {};
    p[m(520, 489, 508, "llAs") + a(-152, -87, -64, "V@t2") + "en"] = e;
    function m(D, y, W, Y, fA) {
      return Pt(D - 227, y - 217, W - 292, y - -792, Y);
    }
    p[C(1360, "NsUS", 1401)] = h;
    const k = p;
    return this[C(1444, "aInR", 1464) + a(-106, -123, -83, "b2FI") + C(1489, "h&T@", 1504) + f(1098, 1175, 1137, "I#B!", 1184) + a(-144, -68, -119, "N*s!") + "e"](k);
  }
}
class SE {
  timeoutId;
  dispatcher;
  constructor(n) {
    this.dispatcher = n;
  }
  start(n = dx) {
    this.clear(), this.timeoutId = window.setTimeout(() => {
      this.dispatcher.dispatchTimedCaptureExecuted(), this.timeoutId = void 0;
    }, n);
  }
  clear() {
    this.timeoutId !== void 0 && (clearTimeout(this.timeoutId), this.timeoutId = void 0);
  }
  isActive() {
    return this.timeoutId !== void 0;
  }
}
function Vc(i, n) {
  const t = UA(n);
  Z(() => {
    t.current = n;
  }, [n]), Z(() => {
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function GE(i, n) {
  const { handleAppStateChange: t } = RA(), e = Qe((A) => {
    if (!A.detail) return;
    const { content: o, resultData: r } = A.detail;
    t(U.COMPLETE), n(r, o);
  }, [n, t]);
  Vc(i, e);
}
function NE(i) {
  return i !== null && typeof i == "object" && "neutralPhaseImageWithMetadata" in i && "smilePhaseImageWithMetadata" in i;
}
function RE() {
  const { onComplete: i } = ic(), { handleError: n } = RA();
  function t(e, A) {
    try {
      if (!NE(e)) throw new w("Invalid result data received in onComplete callback");
      i(e, A);
    } catch (o) {
      o instanceof w && n(o);
    }
  }
  GE(Sn.ON_COMPLETE, t);
}
function vE() {
  const { cameraService: i } = it(), { assetsDirectoryPath: n, sessionToken: t } = ic(), { transactionCounting: e } = j0(), { analytics: A } = XI(), { phaseThresholds: o } = rc(), { handleAppStateChangeWithTransitionCheck: r, handleError: a } = RA(), [g, c] = oA();
  RE(), Z(() => {
    let s;
    async function Q() {
      if (!i) return;
      const x = bc.getWorkerPath(fx, n), E = {};
      E.type = "module";
      const C = new Worker(new URL(x, import.meta.url), E), l = tc(C);
      s = await new l();
      const f = new gE(), h = new mx(Vs), p = new kE(), m = new Ax(), k = new yx(), D = new SE(h), y = new ux().setAssetsDirectoryPath(n).setCameraService(i).setDetector(s).setDetectionFactory(f).setDispatcher(h).setProtobuf(p).setInstallationId(m).setAnalytics(A).setTransactionCounting(e).setSessionToken(t).setPhaseThresholds(o).setMedianScore(k).setTimedCapture(D).build();
      try {
        c(y), r(U.RUNNING);
      } catch (W) {
        if (W instanceof Error) {
          a(w.fromError(W));
          return;
        }
      }
    }
    return Q(), () => {
      r(U.WAITING), s && s[zs]();
    };
  }, [A, n, i, r, a, t, e, o]);
  const I = {};
  return I.controller = g, I;
}
function FE({ children: i }) {
  const { controller: n } = vE();
  return /* @__PURE__ */ b($Q, { controller: n, children: i });
}
function ME({ initAppState: i, onError: n }) {
  const [t, e] = oA(i), [A, o] = oA(), [r, a] = oA(!1), g = wt.Lower, c = UA(n);
  Z(() => {
    c.current = n;
  }, [n]);
  const I = {};
  return I.redfin = g, I.appState = t, I.setAppState = e, I.error = A, I.setError = o, I.isCameraReady = r, I.setIsCameraReady = a, I.onErrorRef = c, I;
}
function Pg(i, n) {
  rt.getInstance().dispatchCustomEventOnChange(i, n);
}
function WE(i, n) {
  rt.getInstance().dispatchCustomEventOnChange(i, n);
}
function LE(i, n) {
  const t = {};
  t.size = n;
  const e = t;
  rt.getInstance().dispatchCustomEventOnChange(i, e);
}
function OE({
  onError: i
}) {
  const { appState: n, redfin: t, error: e, isCameraReady: A, onErrorRef: o, setAppState: r, setError: a, setIsCameraReady: g } = ME({
    initAppState: U.LOADING,
    onError: i
  }), c = Qe(
    (Q) => {
      Pg(xe.STATE_CHANGED, { appState: U.ERROR, error: Q }), g(!1), o.current(Q), a(Q), r(U.ERROR);
    },
    [g, o, a, r]
  ), I = Qe(
    (Q) => {
      r((x) => {
        const E = typeof Q == "function" ? Q(x) : Q;
        return Pg(xe.STATE_CHANGED, { appState: E }), E;
      });
    },
    [r]
  ), s = Qe(
    (Q) => {
      I((x) => x === U.COMPLETE || x === U.LOADING && Q !== U.RUNNING ? x : Q);
    },
    [I]
  );
  return {
    redfin: t,
    appState: n,
    isCameraReady: A,
    setIsCameraReady: g,
    handleAppStateChange: I,
    handleAppStateChangeWithTransitionCheck: s,
    handleError: c,
    error: e
  };
}
function JE() {
  return ga() ? Ya.MOBILE : Ya.DESKTOP;
}
function UE({
  children: i,
  thresholdConfigs: n
}) {
  const [t, e] = oA(JE()), A = EA(() => {
    const o = {};
    for (const a of Object.keys(n)) {
      const g = n[a];
      if (g) {
        const { mapper: c, presets: I, userThresholds: s } = g;
        o[a] = c(I[t], s);
      }
    }
    return {
      getPhaseThresholds: (a) => o[a],
      phaseThresholds: o,
      setThresholdsPreset: e,
      thresholdsPreset: t
    };
  }, [n, t, e]);
  return /* @__PURE__ */ b(ca.Provider, { value: A, children: i });
}
function YE(i) {
  const n = UA(i);
  return JSON.stringify(n.current) !== JSON.stringify(i) && (n.current = i), n.current;
}
function TE(i, n) {
  return {
    size: {
      min: n?.size?.min ?? i.size.min,
      max: n?.size?.max ?? i.size.max
    },
    mouth: {
      confidence: { min: i.mouth.confidence.min },
      status: {
        max: i.mouth.status.max
      }
    },
    brightness: {
      min: i.brightness.min,
      max: i.brightness.max
    },
    confidence: { min: i.confidence.min },
    devicePitchAngle: { max: i.devicePitchAngle.max },
    edgeDistanceToImageShorterSideRatio: {
      min: i.edgeDistanceToImageShorterSideRatio.min
    },
    sharpness: { min: i.sharpness.min }
  };
}
function _g(i, n) {
  return {
    size: {
      min: n?.size?.min ?? i.size.min,
      max: n?.size?.max ?? i.size.max
    },
    mouth: {
      confidence: { min: i.mouth.confidence.min },
      status: {
        min: i.mouth.status.min
      }
    },
    confidence: { min: i.confidence.min }
  };
}
function PE({ children: i, userThresholds: n }) {
  const t = YE(n), e = EA(() => ({
    [M.NEUTRAL]: {
      mapper: TE,
      presets: Ex,
      userThresholds: t
    },
    [M.SMILE]: {
      mapper: _g,
      presets: xg,
      userThresholds: t
    },
    [M.SMILE_MANUAL]: {
      mapper: _g,
      presets: xg,
      userThresholds: t
    }
  }), [t]);
  return /* @__PURE__ */ b(UE, { thresholdConfigs: e, children: i });
}
const _E = async () => WebAssembly.validate(new Uint8Array([0, 1 * -4261 + 2712 + -823 * -2, -3685 + -1 * 9934 + 2 * 6867, 109, 31 * 262 + -2049 + -6072, 6189 + 1 * -6189, -1 * 3598 + -4109 + -1101 * -7, 3645 + -6993 * 1 + 3348, -8926 + 2713 * 2 + -1167 * -3, 21 * 386 + 2600 + -10701, 8389 * 1 + 452 + -8840, 5081 + -4985 * 1, 18618 + -3103 * 6, 3364 * -2 + 4189 + 2540, -17048 + 7 * 2453, 3, -17839 + 939 * 19, 1 * 7517 + -226 + -18 * 405, 1 * -4763 + -1321 * 7 + 14010, -8699 * 1 + -7843 + -16552 * -1, 4039 * 1 + 318 + -4347, -7353 + 815 * -5 + 11429, 8, 0, 65, 0, 13 * -734 + 1 * -1797 + 24 * 483, -8144 + -12 * 262 + 11303, 253, -447 * 12 + -790 + 6252, -5455 + 6 * 911]));
function HE() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(16);
}
function KE() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const n = HE();
  return sessionStorage.setItem("dot-user-id", n), n;
}
function jE(i, n) {
  return n ? n === "user" ? "Front Camera" : "Back Camera" : i;
}
function qE(i) {
  return i > 6e4 ? ">1m" : "" + i;
}
function VE(i) {
  return i > 8137 * 1 + 3040 + 11167 * -1 ? ">10" : "" + i;
}
const Or = (i) => i ? i <= 1 * 3288 + 404 + -1 * 3691 ? Math.round(i * 20) / 20 : Math.round(i / (1 * -541 + -5 * -503 + -1924)) * (-2087 * -4 + 553 * 18 + -18252) : -5502 + 2187 * -1 + 7689;
function ZE(i) {
  return i ? Math.round(i / (4858 + -6 * 393)) * (7658 + 1 * -2979 + -2179) : 0;
}
const zE = (i) => i ? Math.round(i / (1109 * -9 + 5715 + 4276)) * (9047 + -3016 * 3 + 11) : 1 * -4051 + -3077 * -1 + -1 * -974, XE = (i) => Math.round(i * (-9537 + 1261 * 1 + -2 * -4139)) / (1 * -7325 + -7201 + 14528);
async function $E() {
  return await _E() ? Ua.SIMD : Ua.NO_SIMD;
}
const zo = {};
zo.CAPTURE_FINISHED = "capture_finished", zo.CAPTURE_STARTED = "capture_started", zo.ESCALATION_TRIGGER = "escalation_trigger";
const Jr = zo, Le = {};
Le.PALM = "palm_auto_capture", Le.SMILE = "smile_liveness", Le.DOCUMENT = "document_auto_capture", Le.MAGNIFEYE = "magnifeye_liveness", Le.EYE_GAZE = "eye_gaze_liveness", Le.FACE = "face_auto_capture", Le.MULTI_RANGE = "multirange_liveness";
const Ad = Le;
class ed {
  apiKey;
  sessionId;
  distinctId;
  component;
  platform;
  versionName;
  applicationId;
  constructor() {
    this.platform = "web", this.versionName = wC(), this.applicationId = K0(window.location.href);
  }
  async init({ apiKey: n, component: t, customer: e, sessionId: A }) {
    !n || !A || !e || !t || (this.apiKey = n, this.sessionId = A, this.distinctId = e, this.component = t, await this.sendEvent(Jr.CAPTURE_STARTED));
  }
  async sendEvent(n, t) {
    if (!this.apiKey) return;
    const e = "https://metrics.innovatrics.com/v1/i/v0/e/", A = this.buildEventProperties(t), o = this.createCommonBody(n, A);
    try {
      const r = {};
      r["Content-Type"] = "application/json", await fetch(e, { method: "POST", headers: r, body: JSON.stringify(o) });
    } catch (r) {
      console.error("Error sending auto capture event:", r);
    }
  }
  buildEventProperties(n) {
    const t = this.convertCamelToSnakeCase(n), e = this.createCommonProperties();
    return { ...t, ...e };
  }
  createCommonProperties() {
    return { platform: this.platform, dot_sdk_version_name: this.versionName, application_id: this.applicationId, component: this.component, session_id: this.sessionId, $useragent: Js() };
  }
  createCommonBody(n, t = {}) {
    const e = {};
    return e.api_key = this.apiKey, e.event = n, e.distinct_id = this.distinctId, e.properties = t, e;
  }
  convertCamelToSnakeCase(n) {
    const t = {};
    if (!n || typeof n != "object") return t;
    for (const [e, A] of Object.entries(n)) {
      const o = e.replace(/[A-Z]/g, (r) => "_" + r.toLowerCase());
      A && typeof A == "object" && !Array.isArray(A) ? t[o] = this.convertCamelToSnakeCase(A) : t[o] = A;
    }
    return t;
  }
}
const Hg = new ed();
class td {
  posthog = Hg;
  component;
  redfinSignal;
  constructor(n) {
    this.component = n;
  }
  createSegmentation(n) {
    return { redfin: this.redfinSignal?.value, ...n };
  }
  init(n, t, e) {
    this.redfinSignal = e;
    const A = KE(), o = {};
    o.apiKey = n, o.component = this.component, o.customer = t, o.sessionId = A, Hg.init(o);
  }
  shouldReportAnalytics(n) {
    return n?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : n?.dotWeb?.features?.["realTimeAnalyticsReportingEnabled"] ?? !0;
  }
  normalizePerformanceCheckup(n) {
    return n < -4799 * 1 + -431 * 1 + 5480 ? zE(n) : Or(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: VE(o || 8 * 898 + -7578 + 394 * 1), firstHiccup: qE(ZE(r)), optCheckDetails: e?.reduce((a, g) => "" + a + g.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(g.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(g.beforeOpt) + ";", "") };
  }
}
class od extends td {
  constructor() {
    super(Ad.SMILE);
  }
  async trackCaptureProcess(n) {
    const t = n.get(M.NEUTRAL), e = n.get(M.SMILE) ?? n.get(M.SMILE_MANUAL);
    if (!t || !e) return;
    const A = XE(t.metadata.averageFps + e.metadata.averageFps) / (-2831 + 1499 * -4 + 8829), o = t.metadata.captureProcessTime, r = e.metadata.captureProcessTime, a = this.parsePerformanceCheckup(t.metadata.optCheck, t.metadata.performanceCheckup), g = this.createSegmentation({ durationMs: o + r, faceSize: Or(e.detectedObject.faceSize), confidence: Or(t.detectedObject.confidence), imageResolution: t.resultImage.width + "x" + t.resultImage.height, averageFps: A, neutralPhaseDurationMs: o, smilePhaseDurationMs: r, camera: jE(t.metadata.deviceName, t.metadata.facingMode), instructionSet: await $E(), ...a });
    this.posthog.sendEvent(Jr.CAPTURE_FINISHED, g);
  }
  trackEscalated(n, t) {
    const e = {};
    e.instructionCode = n, e.phase = t;
    const A = this.createSegmentation(e);
    this.posthog.sendEvent(Jr.ESCALATION_TRIGGER, A);
  }
}
const nd = new od();
function Ia(i, n) {
  const t = UA(n);
  Z(() => {
    t.current = n;
  }, [n]), Z(() => {
    if (!i) return;
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function id({ skipOutsideOfCandidateSelection: i }) {
  const { appState: n, handleAppStateChange: t } = RA(), e = Qe((o) => {
    if (!o.detail) return;
    const { detectionDetails: { processedImage: { invalidValidators: r, isInCandidateSelection: a } } } = o.detail;
    if (!(i && !a) && r.includes(WA.FACE_NOT_PRESENT)) {
      if (n !== U.RUNNING) return;
      setTimeout(() => {
        t(U.LOADING);
      }, 2 * -1304 + 347 * -5 + 4343), setTimeout(() => {
        t(U.RUNNING);
      }, -7144 + -17 * -301 + 1 * 2027);
    }
  }, [i, n, t]), A = {};
  return A.handleFaceDetection = e, A;
}
function rd(i, n) {
  const { handleFaceDetection: t } = id(n);
  Ia(i, t);
}
function Ca(i, n) {
  function t(e) {
    n(e);
  }
  Ia(i, t);
}
function ad(i) {
  const { appState: n, handleAppStateChange: t } = RA();
  function e() {
    n !== U.LOADING && t(U.RUNNING);
  }
  function A(o) {
    o.detail?.["instruction"] === An.CONTINUE_DETECTION && e();
  }
  Ca(i, A);
}
const Kg = () => typeof document < "u" && document.hasFocus();
function gd(i = {}) {
  const n = UA(i), t = UA(Kg()), [e, A] = oA(Kg);
  Z(() => {
    n.current = i;
  }), Z(() => {
    function r(I) {
      t.current = I, A(I);
    }
    function a() {
      Promise.resolve().then(() => {
        !t.current && (n.current.onFocus?.(), n.current.onChange?.(!0)), r(!0);
      });
    }
    function g() {
      Promise.resolve().then(() => {
        t.current && (n.current.onBlur?.(), n.current.onChange?.(!1)), r(!1);
      });
    }
    function c() {
      document.visibilityState === "hidden" && g();
    }
    return window.addEventListener("focus", a), window.addEventListener("blur", g), window.document.addEventListener("visibilitychange", c), () => {
      window.removeEventListener("focus", a), window.removeEventListener("blur", g), window.document.removeEventListener("visibilitychange", c);
    };
  }, []);
  const o = {};
  return o.isWindowFocused = e, o;
}
function sd(i = {}) {
  const { appState: n } = RA();
  gd({ onBlur: () => {
    n === U.WAITING || n === U.COMPLETE || i.onBlur?.();
  }, onFocus: () => {
    n === U.WAITING || n === U.COMPLETE || i.onFocus?.();
  } });
}
function cd(i) {
  const { controller: n } = js(), { appState: t, handleAppStateChange: e, setIsCameraReady: A } = RA();
  sd({ onBlur: () => {
    e(U.LOADING), A(!1);
  }, onFocus: () => {
    e(U.RUNNING), A(!0);
  } }), ad(i.CONTROL), Z(() => {
    t === U.COMPLETE && n?.reset(), t === U.LOADING && n?.reset(), t === U.WAITING && n?.reset(), t === U.RUNNING && n?.init();
  }, [n, t]);
}
function Id(i) {
  const [n, t] = oA(), e = Qe((o) => {
    o.detail && t(o.detail.phaseName);
  }, []);
  Ia(i, e);
  const A = {};
  return A.currentPhaseName = n, A;
}
function Cd() {
  return Id(xe.PHASE_CHANGED);
}
function Bd() {
  cd(xe);
  const { currentPhaseName: i } = Cd(), n = {};
  n.skipOutsideOfCandidateSelection = i === M.NEUTRAL, rd(xe.DETECTION_CHANGED, n);
}
const Qd = go.div`
  position: relative;
`, xd = go.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
function Ed(i) {
  const { cameraService: n } = it(), { handleAppStateChange: t, handleError: e } = RA();
  async function A() {
    if (n) {
      t(U.LOADING);
      try {
        await n.switchCamera(), t(U.RUNNING);
      } catch (r) {
        if (r instanceof Error) {
          e(w.fromCameraError(r));
          return;
        }
      }
    }
  }
  function o(r) {
    r.detail?.["instruction"] === An.SWITCH_CAMERA && (r.stopImmediatePropagation(), A());
  }
  Ca(i, o);
}
const dd = (i) => i === c0.CONTROL ? !ga() : !0;
function ld(i) {
  const { cameraService: n } = it(), { isCameraReady: t } = RA(), [e, A] = oA(), o = EA(() => {
    const I = t && n && n.isStreaming && n.getCameraSettings().facingMode;
    return I ? e ?? I === "user" : e ?? dd(i);
  }, [n, e, i, t]);
  function r() {
    A(e === void 0 ? !o : !e);
  }
  function a() {
    A(void 0);
  }
  function g(I) {
    switch (I.detail?.["instruction"]) {
      case An.TOGGLE_MIRROR:
        r();
        break;
      case An.SWITCH_CAMERA:
        a();
        break;
      default:
        return;
    }
  }
  Ca(i, g);
  const c = {};
  return c.shouldCameraMirror = o, c;
}
function ud(i, n) {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  Z(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, WE(i, A);
  }, [t, e, i]);
}
function fd(i) {
  const { cameraResolution: n } = it(), { shouldCameraMirror: t } = ld(i.CONTROL);
  Ed(i.CONTROL);
  const e = {};
  e.cameraResolution = n, e.shouldCameraMirror = t, ud(i.CAMERA_PROPS_CHANGED, e), Z(() => () => {
    rt.getInstance().restart();
  }, []);
  const A = {};
  return A.shouldCameraMirror = t, A;
}
const hd = go.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, pd = go.div`
  background-color: #00000060;
  color: #fff;
  font-size: 13px;
  width: auto;
  max-height: 100%;
  max-width: 100%;
  padding: 10px;
  z-index: 2;
  word-break: break-word;
  position: absolute;
  top: 0;
  overflow: auto;
  box-sizing: border-box;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
function md() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const yd = qr(
  ({ detectionDetails: i, isImageMirror: n }, t) => md() ? (console.log(i), /* @__PURE__ */ b(KA, { children: [
    /* @__PURE__ */ b(hd, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ b(pd, { children: /* @__PURE__ */ b("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
);
function wd({
  detectionDetails: i,
  samVersion: n,
  shouldCameraMirror: t,
  thresholds: e,
  thresholdsPreset: A
}) {
  const { cameraResolution: o } = it(), { redfin: r } = Tn(), a = UA(null);
  if (Z(() => {
    if (!a.current || !o || !i)
      return;
    a.current.width = o.width, a.current.height = o.height, iC(a.current);
    const C = Fn(o), l = CC(o);
    pi(a.current, C, "lime"), pi(a.current, l, "blue"), kx(a.current, i.processedImage.detection), eo(a.current, i.processedImage.detection.leftEye.center, "cyan"), eo(a.current, i.processedImage.detection.rightEye.center, "cyan"), eo(a.current, i.processedImage.detection.mouth.center, "cyan"), Sx(a.current, i.processedImage.detection, o);
    const f = e.edgeDistanceToImageShorterSideRatio;
    if (SC(f)) {
      const h = kc(
        o,
        f.min,
        C
      );
      pi(a.current, h, "yellow");
    }
  }, [o, i, e]), !o || !i)
    return null;
  const {
    avgFps: g,
    detectionTime: c,
    processedImage: { detection: I, instructionCode: s, invalidValidators: Q, isEscalated: x }
  } = i, E = {
    Confidence: I.confidence,
    Brightness: I.brightness,
    Sharpness: I.sharpness,
    "Face size": I.faceSize,
    "L eye conf / status": `${I.leftEye.confidence} / ${I.leftEye.status}`,
    "R eye conf / status": `${I.rightEye.confidence} / ${I.rightEye.status}`,
    "Mouth conf / status": `${I.mouth.confidence} / ${I.mouth.status}`,
    "Detection time": c,
    "Avg FPS": g,
    Instruction: s,
    "Resolution w / h": `${o.width} / ${o.height}`,
    "Invalid validators": Q,
    "Component version": "8.0.3",
    "SAM version": n,
    "Escalated instruction": x,
    Tier: r,
    "Thresholds preset": A
  };
  return /* @__PURE__ */ b(
    yd,
    {
      ref: a,
      cameraResolution: o,
      detectionDetails: E,
      isImageMirror: t
    }
  );
}
function Dd() {
  return js();
}
function bd() {
  const [i, n] = oA(void 0), t = Qe((A) => {
    n(A.detail);
  }, []);
  Vc(xe.DETECTION_CHANGED, t);
  const e = {};
  return e.detectionData = i, e;
}
const kd = qr(function({ shouldCameraMirror: n }, t) {
  const { detectionData: e } = bd(), { controller: A } = Dd(), { phaseThresholds: o, thresholdsPreset: r } = rc(), { appState: a } = RA(), g = A?.getCurrentDetectionName();
  if (g === void 0 || a !== U.RUNNING)
    return null;
  const c = o[g];
  return /* @__PURE__ */ b("div", { ref: t, children: /* @__PURE__ */ b(
    wd,
    {
      detectionDetails: e?.detectionDetails,
      samVersion: Dc,
      shouldCameraMirror: n,
      thresholds: c,
      thresholdsPreset: r
    }
  ) });
});
function Sd({ isRounded: i, isSquare: n, ...t }) {
  return i ? /* @__PURE__ */ b("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ b("rect", { fill: "#000", ...t, rx: n ? "0" : "50%" });
}
function Gd(i, n) {
  const [t, e] = oA(!1), A = () => e((a) => !a), o = "" + t;
  vt(() => {
    function a() {
      if (!i.current) return;
      const s = new MutationObserver(() => {
        A();
      }), Q = {};
      return Q.childList = !0, Q.subtree = !0, Q.attributes = !0, s.observe(i.current, Q), s;
    }
    function g() {
      if (!i.current?.["parentElement"]) return;
      const s = new MutationObserver((x) => {
        x.find((C) => {
          for (const l of C.removedNodes)
            if (l !== n?.current && l === i.current)
              return !0;
        }) && A(), x.forEach((C) => {
          C.addedNodes.forEach((l) => {
            l !== n?.current && l.parentElement?.removeChild(l);
          });
        });
      }), Q = {};
      return Q.childList = !0, s.observe(i.current.parentElement, Q), s;
    }
    const c = a(), I = g();
    return () => {
      I?.disconnect(), c?.disconnect();
    };
  });
  const r = {};
  return r.key = o, r;
}
const Nd = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Rd({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = UA(null), { key: o } = Gd(A, t);
  return /* @__PURE__ */ b("div", { ref: A, style: Nd, children: /* @__PURE__ */ b("svg", { viewBox: `0 0 ${e} ${n}`, children: [
    /* @__PURE__ */ b("defs", { children: [
      /* @__PURE__ */ b("mask", { id: "placeholder", children: [
        /* @__PURE__ */ b("rect", { fill: "#fff", height: "100%", width: "100%" }),
        i
      ] }),
      /* @__PURE__ */ b(
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
            /* @__PURE__ */ b("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ b("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ b(
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
    /* @__PURE__ */ b("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, o);
}
function vd({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = BC(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, a = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ b(
    Rd,
    {
      cutOut: i || /* @__PURE__ */ b(Sd, { height: A, width: o, x: r, y: a }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function Fd({ debugLayerRef: i }) {
  const { appState: n } = RA(), { cameraResolution: t } = it(), { redfin: e } = RA(), A = t && e === wt.Lower, o = n !== U.RUNNING;
  return A ? /* @__PURE__ */ b(
    vd,
    {
      fullOverlay: o,
      ignoreElement: i,
      resolution: t
    }
  ) : null;
}
function Md({ children: i, shouldCameraMirror: n }) {
  const t = UA(null);
  return /* @__PURE__ */ b(KA, { children: [
    /* @__PURE__ */ b(Fd, { debugLayerRef: t }),
    i,
    /* @__PURE__ */ b(kd, { ref: t, shouldCameraMirror: n })
  ] });
}
function Wd() {
  const { videoRef: i } = it(), { isCameraReady: n } = RA(), { shouldCameraMirror: t } = fd(xe);
  return /* @__PURE__ */ b(Md, { shouldCameraMirror: t, children: /* @__PURE__ */ b(
    xd,
    {
      ref: i,
      $isImageMirror: t,
      $isVisible: n,
      autoPlay: !0,
      id: gC,
      muted: !0,
      playsInline: !0
    }
  ) });
}
function Ld(i, n) {
  Z(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      LE(n, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, n]);
}
function Od({ children: i }) {
  const n = UA(null);
  return Ld(n, xe.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ b(Qd, { ref: n, children: i });
}
function Jd() {
  return Bd(), /* @__PURE__ */ b(Od, { children: /* @__PURE__ */ b(Wd, {}) });
}
function Ud({ configuration: i }) {
  if (i)
    return /* @__PURE__ */ b(tQ, { target: i.styleTarget, children: /* @__PURE__ */ b(XQ, { configuration: i, children: /* @__PURE__ */ b(PE, { userThresholds: i.qualityAttributeThresholds, children: /* @__PURE__ */ b(_C, { children: /* @__PURE__ */ b(
      VC,
      {
        transactionCountingToken: i.transactionCountingToken,
        transactionType: ZC.SMILE,
        children: /* @__PURE__ */ b(
          vC,
          {
            value: OE({
              onError: i.onError
            }),
            children: /* @__PURE__ */ b(RC, { analytics: nd, apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt", children: /* @__PURE__ */ b(OQ, { cameraConfiguration: i.camera, children: /* @__PURE__ */ b(FE, { children: /* @__PURE__ */ b(hI, { children: /* @__PURE__ */ b(Jd, {}) }) }) }) })
          }
        )
      }
    ) }) }) }) });
}
gI(Ud, "x-dot-smile-liveness", ["configuration"]);
