var ro, R, Gg, Ng, Xe, ea, Rg, vg, Fg, yr, fi, pi, Mg, oo = {}, Wg = [], O0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ao = Array.isArray;
function Ee(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function mr(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function GA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? ro.call(arguments, 7367 + -3 * 2455) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] === void 0 && (r[o] = i.defaultProps[o]);
  return Zt(i, r, e, A, null);
}
function Zt(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++Gg, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && R.vnode != null && R.vnode(r), r;
}
function J0() {
  var i = {};
  return i.current = null, i;
}
function WA(i) {
  return i.children;
}
function ZA(i, n) {
  this.props = i, this.context = n;
}
function mt(i, n) {
  if (n == null) return i.__ ? mt(i.__, i.__i + (-3 * 3293 + -7789 + 17669)) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? mt(i) : null;
}
function Lg(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = -1 * -454 + -1 * -4479 + -4933 * 1; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return Lg(i);
  }
}
function yi(i) {
  (!i.__d && (i.__d = !0) && Xe.push(i) && !_o.__r++ || ea != R.debounceRendering) && ((ea = R.debounceRendering) || Rg)(_o);
}
function _o() {
  for (var i, n, t, e, A, o, r, g = -6 * -827 + 7838 + -12799; Xe.length; ) Xe.length > g && Xe.sort(vg), i = Xe.shift(), g = Xe.length, i.__d && (t = void 0, e = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = Ee({}, e)).__v = e.__v + (-2 * -3016 + -2746 * 1 + -3285), R.vnode && R.vnode(t), wr(n.__P, t, e, n.__n, n.__P.namespaceURI, 32 & e.__u ? [A] : null, o, A ?? mt(e), !!(7553 + -311 * 17 + 1 * -2234 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, Ug(o, t, r), e.__e = e.__ = null, t.__e != A && Lg(t)));
  _o.__r = 19 * 287 + 7662 + -5 * 2623;
}
function Og(i, n, t, e, A, o, r, g, a, I, C) {
  var s, B, E, x, Q, l, h, f = e && e.__k || Wg, p = n.length;
  for (a = U0(t, n, f, a, p), s = 9660 + 5558 * 1 + -15218; s < p; s++) (E = t.__k[s]) != null && (B = E.__i == -1 ? oo : f[E.__i] || oo, E.__i = s, l = wr(i, E, B, A, o, r, g, a, I, C), x = E.__e, E.ref && B.ref != E.ref && (B.ref && Dr(B.ref, null, E), C.push(E.ref, E.__c || x, E)), Q == null && x != null && (Q = x), (h = !!(4 & E.__u)) || B.__k === E.__k ? a = Jg(E, a, i, h) : typeof E.type == "function" && l !== void 0 ? a = l : x && (a = x.nextSibling), E.__u &= -7);
  return t.__e = Q, a;
}
function U0(i, n, t, e, A) {
  var o, r, g, a, I, C = t.length, s = C, B = -1 * 9673 + 1 * -4594 + -14267 * -1;
  for (i.__k = new Array(A), o = 3934 + 1967 * -2; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? r = i.__k[o] = Zt(null, r, null, null, null) : ao(r) ? r = i.__k[o] = Zt(WA, { children: r }, null, null, null) : r.constructor == null && r.__b > -3 * -2362 + 9574 + -16660 ? r = i.__k[o] = Zt(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : i.__k[o] = r, a = o + B, r.__ = i, r.__b = i.__b + (-4665 * -1 + -6977 + 2313), g = null, (I = r.__i = Y0(r, t, a, s)) != -1 && (s--, (g = t[I]) && (g.__u |= 6941 * -1 + -5079 + -2 * -6011)), g == null || g.__v == null ? (I == -1 && (A > C ? B-- : A < C && B++), typeof r.type != "function" && (r.__u |= 4)) : I != a && (I == a - (-5 * 1067 + -329 * -13 + -1 * -1059) ? B-- : I == a + (3437 + 11 * -488 + 1932) ? B++ : (I > a ? B-- : B++, r.__u |= 4))) : i.__k[o] = null;
  if (s)
    for (o = 7581 + -6488 * -1 + -14069; o < C; o++) (g = t[o]) != null && 1327 + 8 * -350 + 491 * 3 == (2 & g.__u) && (g.__e == e && (e = mt(g)), Tg(g, g));
  return e;
}
function Jg(i, n, t, e) {
  var A, o;
  if (typeof i.type == "function") {
    for (A = i.__k, o = 0; A && o < A.length; o++) A[o] && (A[o].__ = i, n = Jg(A[o], n, t, e));
    return n;
  }
  i.__e != n && (e && (n && i.type && !n.parentNode && (n = mt(i)), t.insertBefore(i.__e, n || null)), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && -12030 + 13 * 926 == n.nodeType);
  return n;
}
function ke(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || (ao(i) ? i.some(function(t) {
    ke(t, n);
  }) : n.push(i)), n;
}
function Y0(i, n, t, e) {
  var A, o, r, g = i.key, a = i.type, I = n[t], C = I != null && -5 * 583 + 8178 + 277 * -19 == (-9018 + 2 * 2661 + -3698 * -1 & I.__u);
  if (I === null && g == null || C && g == I.key && a == I.type) return t;
  if (e > (C ? -1 * -8173 + 1103 * -4 + -3760 : 1 * 4369 + -6233 + -1864 * -1)) {
    for (A = t - (2700 + 5 * -1916 + -6881 * -1), o = t + (-9100 + 1 * -7703 + 2 * 8402); A >= 0 || o < n.length; ) if ((I = n[r = A >= 0 ? A-- : o++]) != null && -18821 + -59 * -319 == (1817 * -5 + -8820 + 17907 & I.__u) && g == I.key && a == I.type) return r;
  }
  return -1;
}
function ta(i, n, t) {
  n[-1 * 7096 + -2053 + -9149 * -1] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || O0.test(n) ? t : t + "px";
}
function Bo(i, n, t, e, A) {
  var o, r;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || ta(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || ta(i.style, n, t[n]);
    }
  else if (n[3 * -719 + 1 * 5606 + -3449 * 1] == "o" && n[1] == "n") o = n != (n = n.replace(Fg, "$1")), r = n.toLowerCase(), n = r in i || n == "onFocusOut" || n == "onFocusIn" ? r.slice(2) : n.slice(-7237 + -261 * 9 + 9588), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = yr, i.addEventListener(n, o ? pi : fi, o)) : i.removeEventListener(n, o ? pi : fi, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[4698 + 1 * -9437 + 4743] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && -5699 * -1 + 677 * 2 + -7052 == t ? "" : t));
  }
}
function oa(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = yr++;
      else if (n.t < t.u) return;
      return t(R.event ? R.event(n) : n);
    }
  };
}
function wr(i, n, t, e, A, o, r, g, a, I) {
  var C, s, B, E, x, Q, l, h, f, p, m, D, k, y, U, O, z, X = n.type;
  if (n.constructor != null) return null;
  735 + -607 * 1 & t.__u && (a = !!(32 & t.__u), o = [g = n.__e = t.__e]), (C = R.__b) && C(n);
  A: if (typeof X == "function") try {
    if (h = n.props, f = "prototype" in X && X.prototype.render, p = (C = X.contextType) && e[C.__c], m = C ? p ? p.props.value : C.__ : e, t.__c ? l = (s = n.__c = t.__c).__ = s.__E : (f ? n.__c = s = new X(h, m) : (n.__c = s = new ZA(h, m), s.constructor = X, s.render = P0), p && p.sub(s), s.state || (s.state = {}), s.__n = e, B = s.__d = !(-1367 * 1 + -1 * 3969 + 5336), s.__h = [], s._sb = []), f && s.__s == null && (s.__s = s.state), f && X.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ee({}, s.__s)), Ee(s.__s, X.getDerivedStateFromProps(h, s.__s))), E = s.props, x = s.state, s.__v = n, B) f && X.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), f && s.componentDidMount != null && s.__h.push(s.componentDidMount);
    else {
      if (f && X.getDerivedStateFromProps == null && h !== E && s.componentWillReceiveProps != null && s.componentWillReceiveProps(h, m), n.__v == t.__v || !s.__e && s.shouldComponentUpdate != null && !(18841 + 1 * -18840) === s.shouldComponentUpdate(h, s.__s, m)) {
        for (n.__v != t.__v && (s.props = h, s.state = s.__s, s.__d = !(9 * -921 + 37 * 263 + -1441)), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(pA) {
          pA && (pA.__ = n);
        }), D = 10947 + -3 * 3649; D < s._sb.length; D++) s.__h.push(s._sb[D]);
        s._sb = [], s.__h.length && r.push(s);
        break A;
      }
      s.componentWillUpdate != null && s.componentWillUpdate(h, s.__s, m), f && s.componentDidUpdate != null && s.__h.push(function() {
        s.componentDidUpdate(E, x, Q);
      });
    }
    if (s.context = m, s.props = h, s.__P = i, s.__e = !(6341 + 1585 * -4), k = R.__r, y = 6701 * -1 + -9004 + -9 * -1745, f) {
      for (s.state = s.__s, s.__d = !(25 * -322 + -4338 + -13 * -953), k && k(n), C = s.render(s.props, s.state, s.context), U = -830 * -1 + -3200 + 2370; U < s._sb.length; U++) s.__h.push(s._sb[U]);
      s._sb = [];
    } else do
      s.__d = !1, k && k(n), C = s.render(s.props, s.state, s.context), s.state = s.__s;
    while (s.__d && ++y < -3901 + 7 * -1329 + -13229 * -1);
    s.state = s.__s, s.getChildContext != null && (e = Ee(Ee({}, e), s.getChildContext())), f && !B && s.getSnapshotBeforeUpdate != null && (Q = s.getSnapshotBeforeUpdate(E, x)), O = C, C != null && C.type === WA && C.key == null && (O = Yg(C.props.children)), g = Og(i, ao(O) ? O : [O], n, t, e, A, o, r, g, a, I), s.base = n.__e, n.__u &= -(2719 * 2 + 9458 + -14735), s.__h.length && r.push(s), l && (s.__E = s.__ = null);
  } catch (pA) {
    if (n.__v = null, a || o != null)
      if (pA.then) {
        for (n.__u |= a ? 160 : 128; g && 6761 * 1 + -7044 + 291 == g.nodeType && g.nextSibling; ) g = g.nextSibling;
        o[o.indexOf(g)] = null, n.__e = g;
      } else {
        for (z = o.length; z--; ) mr(o[z]);
        mi(n);
      }
    else n.__e = t.__e, n.__k = t.__k, pA.then || mi(n);
    R.__e(pA, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : g = n.__e = T0(t.__e, n, t, e, A, o, r, a, I);
  return (C = R.diffed) && C(n), -5351 + 1 * 5479 & n.__u ? void 0 : g;
}
function mi(i) {
  i && i.__c && (i.__c.__e = !0), i && i.__k && i.__k.forEach(mi);
}
function Ug(i, n, t) {
  for (var e = 1429 * -2 + 6 * 676 + -1198; e < t.length; e++) Dr(t[e], t[++e], t[++e]);
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
function Yg(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > 3960 + 1 * 1405 + 5 * -1073 ? i : ao(i) ? i.map(Yg) : Ee({}, i);
}
function T0(i, n, t, e, A, o, r, g, a) {
  var I, C, s, B, E, x, Q, l = t.props || oo, h = n.props, f = n.type;
  if (f == "svg" ? A = "http://www.w3.org/2000/svg" : f == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (I = 4980 + 643 * -11 + -2093 * -1; I < o.length; I++) if ((E = o[I]) && "setAttribute" in E == !!f && (f ? E.localName == f : E.nodeType == 3)) {
      i = E, o[I] = null;
      break;
    }
  }
  if (i == null) {
    if (f == null) return document.createTextNode(h);
    i = document.createElementNS(A, f, h.is && h), g && (R.__m && R.__m(n, o), g = !1), o = null;
  }
  if (f == null) l === h || g && i.data == h || (i.data = h);
  else {
    if (o = o && ro.call(i.childNodes), !g && o != null)
      for (l = {}, I = -948 + -1 * -8799 + -7851; I < i.attributes.length; I++) l[(E = i.attributes[I]).name] = E.value;
    for (I in l) if (E = l[I], I != "children") {
      if (I == "dangerouslySetInnerHTML") s = E;
      else if (!(I in h)) {
        if (I == "value" && "defaultValue" in h || I == "checked" && "defaultChecked" in h) continue;
        Bo(i, I, null, E, A);
      }
    }
    for (I in h) E = h[I], I == "children" ? B = E : I == "dangerouslySetInnerHTML" ? C = E : I == "value" ? x = E : I == "checked" ? Q = E : g && typeof E != "function" || l[I] === E || Bo(i, I, E, l[I], A);
    if (C) g || s && (C.__html == s.__html || C.__html == i.innerHTML) || (i.innerHTML = C.__html), n.__k = [];
    else if (s && (i.innerHTML = ""), Og(n.type == "template" ? i.content : i, ao(B) ? B : [B], n, t, e, f == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[4630 + 1 * 6675 + 595 * -19] : t.__k && mt(t, 1 * -4674 + 5498 + -824), g, a), o != null)
      for (I = o.length; I--; ) mr(o[I]);
    g || (I = "value", f == "progress" && x == null ? i.removeAttribute("value") : x != null && (x !== i[I] || f == "progress" && !x || f == "option" && x != l[I]) && Bo(i, I, x, l[I], A), I = "checked", Q != null && Q != i[I] && Bo(i, I, Q, l[I], A));
  }
  return i;
}
function Dr(i, n, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && n == null || (i.__u = i(n));
    } else i.current = n;
  } catch (A) {
    R.__e(A, t);
  }
}
function Tg(i, n, t) {
  var e, A;
  if (R.unmount && R.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || Dr(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      R.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = 0; A < e.length; A++) e[A] && Tg(e[A], n, t || typeof i.type != "function");
  t || mr(i.__e), i.__c = i.__ = i.__e = void 0;
}
function P0(i, n, t) {
  return this.constructor(i, t);
}
function Oe(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), R.__ && R.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], wr(n, i = (!e && t || n).__k = GA(WA, null, [i]), A || oo, oo, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? ro.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), Ug(o, i, r);
}
function br(i, n) {
  Oe(i, n, br);
}
function kr(i, n, t) {
  var e, A, o, r, g = Ee({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : g[o] = n[o] === void 0 && r != null ? r[o] : n[o];
  return arguments.length > 2 && (g.children = arguments.length > 7130 + -7127 * 1 ? ro.call(arguments, -5611 * 1 + 3635 + 1978) : t), Zt(i.type, g, e || i.key, A || i.ref, null);
}
function Ye(i) {
  function n(t) {
    var e, A;
    return this.getChildContext || (e = /* @__PURE__ */ new Set(), (A = {})[n.__c] = this, this.getChildContext = function() {
      return A;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value != o.value && e.forEach(function(r) {
        r.__e = !0, yi(r);
      });
    }, this.sub = function(o) {
      e.add(o);
      var r = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        e && e.delete(o), r && r.call(o);
      };
    }), t.children;
  }
  return n.__c = "__cC" + Mg++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
ro = Wg.slice, R = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (g) {
    i = g;
  }
  throw i;
} }, Gg = 0, Ng = function(i) {
  return i != null && i.constructor == null;
}, ZA.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = Ee({}, this.state), typeof i == "function" && (i = i(Ee({}, t), this.props)), i && Ee(t, i), i != null && this.__v && (n && this._sb.push(n), yi(this));
}, ZA.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), yi(this));
}, ZA.prototype.render = WA, Xe = [], Rg = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, vg = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, _o.__r = 885 + 674 * -14 + 503 * 17, Fg = /(PointerCapture)$|Capture$/i, yr = -13 * -271 + -1208 * 3 + 101, fi = oa(!1), pi = oa(!0), Mg = -3547 + 3 * -1399 + 7744;
function Ko() {
  return Ko = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = 23 * 414 + 1079 * 5 + -14916; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }, Ko.apply(this, arguments);
}
function Pg(i, n) {
  if (i == null) return {};
  var t, e, A = {}, o = Object.keys(i);
  for (e = -464 + 1 * -7405 + 7869; e < o.length; e++) n.indexOf(t = o[e]) >= -1 * 2207 + -9620 + 11827 || (A[t] = i[t]);
  return A;
}
var H0 = ["context", "children"], _0 = ["useFragment"];
function K0(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = function() {
    q0.call(this, e);
  }, A.prototype.attributeChangedCallback = V0, A.prototype.disconnectedCallback = Z0, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, i.formAssociated && (A.formAssociated = !0), t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom ? this._vdom.props[o] : this._props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r);
      var g = typeof r;
      r != null && g !== "string" && g !== "boolean" && g !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A), A;
}
function j0(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = Pg(i, H0);
  return kr(n, t);
}
function q0(i) {
  var n = {};
  n.detail = {}, n.bubbles = !0, n.cancelable = !0;
  var t = new CustomEvent("_preact", n);
  this.dispatchEvent(t), this._vdom = GA(j0, Ko({}, this._props, { context: t.detail.context }), _g(this, this._vdomComponent, i)), (this.hasAttribute("hydrate") ? br : Oe)(this._vdom, this._root);
}
function Hg(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function V0(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[Hg(i)] = t, this._vdom = kr(this._vdom, e), Oe(this._vdom, this._root);
  }
}
function Z0() {
  Oe(this._vdom = null, this._root);
}
function na(i, n) {
  var t = this, e = i.useFragment, A = Pg(i, _0);
  return GA(e ? WA : "slot", Ko({}, A, { ref: function(o) {
    o ? (t.ref = o, t._listener || (t._listener = function(r) {
      r.stopPropagation(), r.detail.context = n;
    }, o.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function _g(i, n, t) {
  if (3953 * 2 + -6105 + -1798 === i.nodeType) return i.data;
  if (1 * 4439 + 3337 + -7775 !== i.nodeType) return null;
  var e = [], A = {}, o = 4556 * -2 + -1 * -8492 + 620, r = i.attributes, g = i.childNodes;
  for (o = r.length; o--; ) r[o].name !== "slot" && (A[r[o].name] = r[o].value, A[Hg(r[o].name)] = r[o].value);
  for (o = g.length; o--; ) {
    var a = _g(g[o], null, t), I = g[o].slot;
    I ? A[I] = GA(na, { name: I }, a) : e[o] = a;
  }
  var C = !(!t || !t.shadow), s = n ? GA(na, { useFragment: !C }, e) : e;
  return !C && n && (i.innerHTML = ""), GA(n || i.nodeName.toLowerCase(), A, s);
}
var z0 = 0;
function b(i, n, t, e, A, o) {
  n || (n = {});
  var r, g, a = n;
  if ("ref" in a)
    for (g in a = {}, n) g == "ref" ? r = n[g] : a[g] = n[g];
  var I = {};
  I.type = i, I.props = a, I.key = t, I.ref = r, I.__k = null, I.__ = null, I.__b = 0, I.__e = null, I.__c = null, I.constructor = void 0, I.__v = --z0, I.__i = -1, I.__u = 0, I.__source = A, I.__self = o;
  var C = I;
  if (typeof i == "function" && (r = i.defaultProps))
    for (g in r) a[g] === void 0 && (a[g] = r[g]);
  return R.vnode && R.vnode(C), C;
}
var MA = function() {
  return MA = Object.assign || function(n) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, MA.apply(this, arguments);
};
function wt(i, n, t) {
  if (t || arguments.length === 2) for (var e = 0, A = n.length, o; e < A; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return i.concat(o || Array.prototype.slice.call(n));
}
function X0(i) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = i(t)), n[t];
  };
}
var $0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ac = X0(function(i) {
  return $0.test(i) || i.charCodeAt(-2019 * 1 + -1 * 9977 + -2 * -5998) === 111 && i.charCodeAt(1) === -669 * 11 + -1 * -7689 + -220 && i.charCodeAt(3314 + -491 * -7 + -17 * 397) < 91;
}), Je, T, Kn, ia, Dt = 1 * 461 + -3651 * 1 + 3190, Kg = [], H = R, ra = H.__b, aa = H.__r, ga = H.diffed, sa = H.__c, Ia = H.unmount, ca = H.__;
function vt(i, n) {
  H.__h && H.__h(T, i, Dt || n), Dt = 0;
  var t = {};
  t.__ = [], t.__h = [];
  var e = T.__H || (T.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function Z(i) {
  return Dt = 1477 * 4 + -1493 + -4414 * 1, Sr(Vg, i);
}
function Sr(i, n, t) {
  var e = vt(Je++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : Vg(void 0, n), function(g) {
    var a = e.__N ? e.__N[0] : e.__[0], I = e.t(a, g);
    a !== I && (e.__N = [I, e.__[-9924 * -1 + 1398 + -11321]], e.__c.setState({}));
  }], e.__c = T, !T.__f)) {
    var A = function(g, a, I) {
      if (!e.__c.__H) return !0;
      var C = e.__c.__H.__.filter(function(B) {
        return !!B.__c;
      });
      if (C.every(function(B) {
        return !B.__N;
      })) return !o || o.call(this, g, a, I);
      var s = e.__c.props !== g;
      return C.forEach(function(B) {
        if (B.__N) {
          var E = B.__[0];
          B.__ = B.__N, B.__N = void 0, E !== B.__[0] && (s = !0);
        }
      }), o && o.call(this, g, a, I) || s;
    };
    T.__f = !0;
    var o = T.shouldComponentUpdate, r = T.componentWillUpdate;
    T.componentWillUpdate = function(g, a, I) {
      if (this.__e) {
        var C = o;
        o = void 0, A(g, a, I), o = C;
      }
      r && r.call(this, g, a, I);
    }, T.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function J(i, n) {
  var t = vt(Je++, 3);
  !H.__s && Gr(t.__H, n) && (t.__ = i, t.u = n, T.__H.__h.push(t));
}
function Ft(i, n) {
  var t = vt(Je++, 4);
  !H.__s && Gr(t.__H, n) && (t.__ = i, t.u = n, T.__h.push(t));
}
function DA(i) {
  return Dt = 5, hA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function jg(i, n, t) {
  Dt = 6, Ft(function() {
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
function hA(i, n) {
  var t = vt(Je++, 7);
  return Gr(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function de(i, n) {
  return Dt = -7113 + -7121 * -1, hA(function() {
    return i;
  }, n);
}
function le(i) {
  var n = T.context[i.__c], t = vt(Je++, 5795 + 5786 * -1);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(T)), n.props.value) : i.__;
}
function jo(i, n) {
  H.useDebugValue && H.useDebugValue(n ? n(i) : i);
}
function qg() {
  var i = vt(Je++, 11);
  if (!i.__) {
    for (var n = T.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [7907 + 4 * 977 + -11815, 3794 + -1 * 3794]);
    i.__ = "P" + t[958 + -2 * 479] + "-" + t[1]++;
  }
  return i.__;
}
function ec() {
  for (var i; i = Kg.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(Do), i.__H.__h.forEach(wi), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], H.__e(n, i.__v);
  }
}
H.__b = function(i) {
  T = null, ra && ra(i);
}, H.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), ca && ca(i, n);
}, H.__r = function(i) {
  aa && aa(i), Je = -245 + 4492 * 2 + 8739 * -1;
  var n = (T = i.__c).__H;
  n && (Kn === T ? (n.__h = [], T.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(Do), n.__h.forEach(wi), n.__h = [], Je = -1 * 6977 + 2535 + 4442 * 1)), Kn = T;
}, H.diffed = function(i) {
  ga && ga(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (Kg.push(n) !== 1 && ia === H.requestAnimationFrame || ((ia = H.requestAnimationFrame) || tc)(ec)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), Kn = T = null;
}, H.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(Do), t.__h = t.__h.filter(function(e) {
        return !e.__ || wi(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], H.__e(e, t.__v);
    }
  }), sa && sa(i, n);
}, H.unmount = function(i) {
  Ia && Ia(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      Do(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && H.__e(n, t.__v));
};
var Ca = typeof requestAnimationFrame == "function";
function tc(i) {
  var n, t = function() {
    clearTimeout(e), Ca && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 35);
  Ca && (n = requestAnimationFrame(t));
}
function Do(i) {
  var n = T, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), T = n;
}
function wi(i) {
  var n = T;
  i.__c = i.__(), T = n;
}
function Gr(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function Vg(i, n) {
  return typeof n == "function" ? n(i) : n;
}
function Zg(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function Di(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function zg(i, n) {
  var t = n(), e = Z({ t: { __: t, u: n } }), A = e[566 * 11 + -3 * 2503 + 1283 * 1].t, o = e[1];
  return Ft(function() {
    A.__ = t, A.u = n, jn(A) && o({ t: A });
  }, [i, t, n]), J(function() {
    return jn(A) && o({ t: A }), i(function() {
      jn(A) && o({ t: A });
    });
  }, [i]), t;
}
function jn(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (-1 * 5113 + 2239 + 6 * 479 !== n || 1 / n == (-8209 + 1838 * -1 + 10048) / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function Xg(i) {
  i();
}
function $g(i) {
  return i;
}
function As() {
  return [!1, Xg];
}
var es = Ft;
function bi(i, n) {
  this.props = i, this.context = n;
}
function oc(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : Di(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, GA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e.type = i, e;
}
(bi.prototype = new ZA()).isPureReactComponent = !0, bi.prototype.shouldComponentUpdate = function(i, n) {
  return Di(this.props, i) || Di(this.state, n);
};
var Ba = R.__b;
R.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), Ba && Ba(i);
};
var nc = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
function ts(i) {
  function n(t) {
    var e = Zg({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = nc, n.render = i, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var Qa = function(i, n) {
  return i == null ? null : ke(ke(i).map(n));
}, ic = { map: Qa, forEach: Qa, count: function(i) {
  return i ? ke(i).length : -2971 + -15 * -274 + -1139;
}, only: function(i) {
  var n = ke(i);
  if (-17413 + 1 * 17414 !== n.length) throw "Children.only";
  return n[-7 * -817 + -8554 + -1 * -2835];
}, toArray: ke }, rc = R.__e;
R.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  rc(i, n, t, e);
};
var Ea = R.unmount;
function os(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = Zg({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return os(e, n, t);
  })), i;
}
function ns(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return ns(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function bo() {
  this.__u = 10864 + 2 * -5432, this.o = null, this.__b = null;
}
function is(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function ac(i) {
  var n, t, e, A = null;
  function o(r) {
    if (n || (n = i()).then(function(g) {
      g && (A = g.default || g), e = !0;
    }, function(g) {
      t = g, e = !0;
    }), t) throw t;
    if (!e) throw n;
    return A ? GA(A, r) : null;
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Ht() {
  this.i = null, this.l = null;
}
R.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && 32 & i.__u && (i.type = null), Ea && Ea(i);
}, (bo.prototype = new ZA()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = is(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(g) : g());
  };
  t.__R = r;
  var g = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[-9166 * -1 + -6 * 1340 + -1126] = ns(a, a.__c.__P, a.__c.__O);
      }
      var I;
      for (e.setState({ __a: e.__b = null }); I = e.o.pop(); ) I.forceUpdate();
    }
  };
  e.__u++ || -11117 + -1 * -11149 & n.__u || e.setState({ __a: e.__b = e.__v.__k[-2264 * 2 + 1702 * 5 + -3982] }), i.then(r, r);
}, bo.prototype.componentWillUnmount = function() {
  this.o = [];
}, bo.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[0].__c;
      this.__v.__k[-6113 + -287 * -29 + -2210] = os(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && GA(WA, null, i.fallback);
  return A && (A.__u &= -33), [GA(WA, null, n.__a ? null : i.children), A];
};
var xa = function(i, n, t) {
  if (++t[-1 * 1786 + 4311 * 1 + -631 * 4] === t[1969 * -5 + -100 + 9945] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[260 + -8 * -659 + -5532] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[-8543 + -1 * 3394 + 11938] < t[3 * 2892 + -1157 + 7519 * -1]) break;
    i.i = t = t[3524 * 1 + -8604 + 5082];
  }
};
function gc(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function sc(i) {
  var n = this, t = i.h;
  if (n.componentWillUnmount = function() {
    Oe(null, n.v), n.v = null, n.h = null;
  }, n.h && n.h !== t && n.componentWillUnmount(), !n.v) {
    for (var e = n.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var A = {};
    A.__m = e.__m, n.h = t, n.v = { nodeType: 1, parentNode: t, childNodes: [], __k: A, contains: function() {
      return !0;
    }, insertBefore: function(r, g) {
      this.childNodes.push(r), n.h.insertBefore(r, g);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 6836 + -6835 * 1), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, Oe(GA(gc, o, i.__v), n.v);
}
function Ic(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = GA(sc, t);
  return e.containerInfo = n, e;
}
(Ht.prototype = new ZA()).__a = function(i) {
  var n = this, t = is(n.__v), e = n.l.get(i);
  return e[-1098 + 1 * 745 + 353]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), xa(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, Ht.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = ke(i.children);
  i.revealOrder && i.revealOrder[-6252 * 1 + -5361 + -1659 * -7] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [1, -1517 + 1517 * 1, this.i]);
  return i.children;
}, Ht.prototype.componentDidUpdate = Ht.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    xa(i, t, n);
  });
};
var rs = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, cc = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Cc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Bc = /[A-Z0-9]/g, Qc = typeof document < "u", Ec = function(i) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function xc(i, n, t) {
  return n.__k == null && (n.textContent = ""), Oe(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function dc(i, n, t) {
  return br(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
ZA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(ZA.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var da = R.event;
function lc() {
}
function uc() {
  return this.cancelBubble;
}
function hc() {
  return this.defaultPrevented;
}
R.event = function(i) {
  return da && (i = da(i)), i.persist = lc, i.isPropagationStopped = uc, i.isDefaultPrevented = hc, i.nativeEvent = i;
};
var ko = {};
ko.enumerable = !1, ko.configurable = !0, ko.get = function() {
  return this.class;
};
var Nr, fc = ko, la = R.vnode;
R.vnode = function(i) {
  typeof i.type == "string" && (function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var g = t[r];
      if (!(r === "value" && "defaultValue" in t && g == null || Qc && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var a = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && g === !0 ? g = "" : a === "translate" && g === "no" ? g = !1 : a[2 * 2014 + -2 * 2734 + 1440] === "o" && a[8752 + -8751 * 1] === "n" ? a === "ondoubleclick" ? r = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || Ec(t.type) ? a === "onfocus" ? r = "onfocusin" : a === "onblur" ? r = "onfocusout" : Cc.test(r) && (r = a) : a = r = "oninput" : o && cc.test(r) ? r = r.replace(Bc, "-$&").toLowerCase() : g === null && (g = void 0), a === "oninput" && A[r = a] && (r = "oninputCapture"), A[r] = g;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = ke(t.children).forEach(function(I) {
      I.props.selected = A.value.indexOf(I.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = ke(t.children).forEach(function(I) {
      I.props.selected = A.multiple ? A.defaultValue.indexOf(I.props.value) != -1 : A.defaultValue == I.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", fc)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  })(i), i.$$typeof = rs, la && la(i);
};
var ua = R.__r;
R.__r = function(i) {
  ua && ua(i), Nr = i.__c;
};
var ha = R.diffed;
R.diffed = function(i) {
  ha && ha(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), Nr = null;
};
var QA = {};
QA.readContext = function(i) {
  return Nr.__n[i.__c].props.value;
}, QA.useCallback = de, QA.useContext = le, QA.useDebugValue = jo, QA.useDeferredValue = $g, QA.useEffect = J, QA.useId = qg, QA.useImperativeHandle = jg, QA.useInsertionEffect = es, QA.useLayoutEffect = Ft, QA.useMemo = hA, QA.useReducer = Sr, QA.useRef = DA, QA.useState = Z, QA.useSyncExternalStore = zg, QA.useTransition = As;
var as = {};
as.current = QA;
var gs = {};
gs.ReactCurrentDispatcher = as;
var pc = gs;
function yc(i) {
  return GA.bind(null, i);
}
function Gn(i) {
  return !!i && i.$$typeof === rs;
}
function mc(i) {
  return Gn(i) && i.type === WA;
}
function wc(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function Dc(i) {
  return Gn(i) ? kr.apply(null, arguments) : i;
}
function bc(i) {
  return !!i.__k && (Oe(null, i), !0);
}
function kc(i) {
  return i && (i.base || -5234 + -1 * -596 + -4639 * -1 === i.nodeType && i) || null;
}
var Sc = function(i, n) {
  return i(n);
}, Gc = function(i, n) {
  return i(n);
}, Nc = WA, Rc = Gn, rt = { useState: Z, useId: qg, useReducer: Sr, useEffect: J, useLayoutEffect: Ft, useInsertionEffect: es, useTransition: As, useDeferredValue: $g, useSyncExternalStore: zg, startTransition: Xg, useRef: DA, useImperativeHandle: jg, useMemo: hA, useCallback: de, useContext: le, useDebugValue: jo, version: "18.3.1", Children: ic, render: xc, hydrate: dc, unmountComponentAtNode: bc, createPortal: Ic, createElement: GA, createContext: Ye, createFactory: yc, cloneElement: Dc, createRef: J0, Fragment: WA, isValidElement: Gn, isElement: Rc, isFragment: mc, isMemo: wc, findDOMNode: kc, Component: ZA, PureComponent: bi, memo: oc, forwardRef: ts, flushSync: Gc, unstable_batchedUpdates: Sc, StrictMode: Nc, Suspense: bo, SuspenseList: Ht, lazy: ac, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: pc };
function vc(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var qn, fa;
function Fc() {
  return fa || (fa = 1, qn = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), g = Object.keys(t);
    if (r.length !== g.length) return !1;
    for (var a = Object.prototype.hasOwnProperty.bind(t), I = 11 * 261 + -4452 + -527 * -3; I < r.length; I++) {
      var C = r[I];
      if (!a(C)) return !1;
      var s = n[C], B = t[C];
      if (o = e ? e.call(A, s, B, C) : void 0, o === !1 || o === void 0 && s !== B) return !1;
    }
    return !0;
  }), qn;
}
var Mc = Fc();
const Wc = /* @__PURE__ */ vc(Mc);
var Y = "-ms-", zt = "-moz-", W = "-webkit-", ss = "comm", Nn = "rule", Rr = "decl", Lc = "@import", Is = "@keyframes", Oc = "@layer", cs = Math.abs, vr = String.fromCharCode, ki = Object.assign;
function Jc(i, n) {
  return BA(i, 11944 + -11944 * 1) ^ -1369 * 2 + 9993 * -1 + 12776 ? (((n << 3441 + 1 * -3439 ^ BA(i, 2647 + 1 * -2647)) << -1223 + 7907 * -1 + 1522 * 6 ^ BA(i, 15893 + -29 * 548)) << 1 * 2792 + 1035 * -5 + -477 * -5 ^ BA(i, 3802 * 2 + -6594 + -1008)) << -9992 + -1 * -691 + 3101 * 3 ^ BA(i, -2451 * 1 + -9045 + 11499) : 2257 + 2 * 2107 + -719 * 9;
}
function Cs(i) {
  return i.trim();
}
function De(i, n) {
  return (i = n.exec(i)) ? i[0] : i;
}
function v(i, n, t) {
  return i.replace(n, t);
}
function So(i, n, t) {
  return i.indexOf(n, t);
}
function BA(i, n) {
  return i.charCodeAt(n) | 0;
}
function bt(i, n, t) {
  return i.slice(n, t);
}
function Qe(i) {
  return i.length;
}
function Bs(i) {
  return i.length;
}
function _t(i, n) {
  return n.push(i), i;
}
function Uc(i, n) {
  return i.map(n).join("");
}
function pa(i, n) {
  return i.filter(function(t) {
    return !De(t, n);
  });
}
var Rn = 6421 + 1284 * -5, kt = -9053 * 1 + 1188 + 7866, Qs = -295 + 2 * -3593 + 7481, zA = 0, V = 0, Mt = "";
function vn(i, n, t, e, A, o, r, g) {
  var a = {};
  return a.value = i, a.root = n, a.parent = t, a.type = e, a.props = A, a.children = o, a.line = Rn, a.column = kt, a.length = r, a.return = "", a.siblings = g, a;
}
function ve(i, n) {
  return ki(vn("", null, null, "", null, null, -1704 + 2753 * 2 + -3802, i.siblings), i, { length: -i.length }, n);
}
function ct(i) {
  for (; i.root; ) i = ve(i.root, { children: [i] });
  _t(i, i.siblings);
}
function Yc() {
  return V;
}
function Tc() {
  return V = zA > 17919 + -17919 * 1 ? BA(Mt, --zA) : -953 * 9 + 5232 + 1115 * 3, kt--, V === 734 * 5 + -2011 + -1649 && (kt = -6150 + -1 * -6151, Rn--), V;
}
function ee() {
  return V = zA < Qs ? BA(Mt, zA++) : 2059 * -2 + -245 + 1 * 4363, kt++, V === 6297 + 1 * 6826 + -4371 * 3 && (kt = 1 * 1046 + -8197 + 4 * 1788, Rn++), V;
}
function tt() {
  return BA(Mt, zA);
}
function Go() {
  return zA;
}
function Fn(i, n) {
  return bt(Mt, i, n);
}
function Si(i) {
  switch (i) {
    case 1790 * 4 + 4342 + -11502:
    case -6336 + 7235 * -1 + -1 * -13580:
    case -1294 + 1 * -9613 + -3 * -3639:
    case 13:
    case 32:
      return 5;
    case 457 * 13 + 3027 * 2 + -11962:
    case -9033 * -1 + 4861 * 2 + -4678 * 4:
    case 1 * -6317 + 1 * -3662 + 10023:
    case -2 * -2333 + -6976 + 2357:
    case -13821 + 13883 * 1:
    case 5971 + -537 * 11:
    case 6416 + -1 * 2261 + -4029 * 1:
    case 59:
    case 123:
    case -1 * -901 + -464 + -312:
      return -1 * 9353 + 2747 + -661 * -10;
    case 3 * -3222 + 6467 + 1 * 3257:
      return -4502 + -1 * -4505;
    case 60 + 2 * -2131 + 4236:
    case 39:
    case -9004 + 8506 * -1 + 17550:
    case -5 * -295 + -1761 + 377:
      return 4 * -1892 + -5833 + -1 * -13403;
    case 31 * 277 + 4600 + -6573 * 2:
    case 3 * 1299 + 620 + -553 * 8:
      return -6688 + 6689 * 1;
  }
  return -5581 * 1 + 1 * 9313 + -1866 * 2;
}
function Pc(i) {
  return Rn = kt = -4251 + 3313 * 1 + 939 * 1, Qs = Qe(Mt = i), zA = 0, [];
}
function Hc(i) {
  return Mt = "", i;
}
function Vn(i) {
  return Cs(Fn(zA - (647 * -3 + -1292 + 7 * 462), Gi(i === 14328 + -23 * 619 ? i + (-1 * -8981 + -7603 + -1376) : i === -10977 + -23 * -479 ? i + 1 : i)));
}
function _c(i) {
  for (; (V = tt()) && V < 292 + -739 * 5 + -2 * -1718; ) ee();
  return Si(i) > 2 || Si(V) > 1415 + -4 * 353 ? "" : " ";
}
function Kc(i, n) {
  for (; --n && ee() && !(V < 2477 + -5 * -1964 + -12249 || V > 3384 + 1 * -6830 + 3548 || V > -733 * -9 + -1934 * 3 + -738 && V < -1 * -6607 + -9532 + 2990 || V > -1800 + -8374 * 1 + 788 * 13 && V < 97); ) ;
  return Fn(i, Go() + (n < 2180 + 2174 * -1 && tt() == 32 && ee() == 32));
}
function Gi(i) {
  for (; ee(); ) switch (V) {
    case i:
      return zA;
    case 6219 + -1 * 6185:
    case -5994 + 5809 * 1 + 224:
      i !== -1 * -2512 + -8740 + -2 * -3131 && i !== -8997 * 1 + 1002 + -2 * -4017 && Gi(V);
      break;
    case 4 * -2468 + -173 + 10085:
      i === -555 * -3 + -3431 + 1807 && Gi(i);
      break;
    case 4 * -463 + 4323 + -2379:
      ee();
      break;
  }
  return zA;
}
function jc(i, n) {
  for (; ee() && i + V !== 47 + (-2352 + 1 * 2362); ) if (i + V === 84 && tt() === 6 * 1172 + -1881 + -5104) break;
  return "/*" + Fn(n, zA - 1) + "*" + vr(i === -3219 + -478 * 1 + 3744 ? i : ee());
}
function qc(i) {
  for (; !Si(tt()); ) ee();
  return Fn(i, zA);
}
function Vc(i) {
  return Hc(No("", null, null, null, [""], i = Pc(i), -291 * -24 + -5693 + -1291 * 1, [-2922 + -3 * 2389 + 10089], i));
}
function No(i, n, t, e, A, o, r, g, a) {
  for (var I = 0, C = 1454 * 6 + -1 * 5624 + -3100, s = r, B = -9 * -779 + -1512 * 6 + -687 * -3, E = 3055 + 3055 * -1, x = 0, Q = -317 * 31 + -8429 * 1 + 18257, l = -4579 + 1145 * 4, h = -8133 * 1 + 5801 + 1 * 2333, f = 8820 + -1 * -7283 + -16103, p = "", m = A, D = o, k = e, y = p; l; ) switch (x = f, f = ee()) {
    case -1 * 5639 + -6724 + 12403:
      if (x != 108 && BA(y, s - (-1820 + -915 * 5 + 6396)) == 1 * 1823 + 13 * 757 + 1658 * -7) {
        So(y += v(Vn(f), "&", "&\f"), "&\f", cs(I ? g[I - (5 * 1589 + -483 * -9 + -12291)] : 17871 + -777 * 23)) != -1 && (h = -1);
        break;
      }
    case -4911 * -1 + -1495 * -5 + 1 * -12352:
    case -262 * -2 + 3540 + -4025:
    case 2713 * 2 + 693 + -2 * 3014:
      y += Vn(f);
      break;
    case 4647 + -3 * 1546:
    case -9013 * -1 + 665 + -9668:
    case 13:
    case 2753 * 1 + -3686 + -965 * -1:
      y += _c(x);
      break;
    case 92:
      y += Kc(Go() - (-1 * -390 + 1 * -7151 + 6762), 4113 * -1 + -3081 + 7201);
      continue;
    case 2722 + -12 * -516 + -8867:
      switch (tt()) {
        case 1960 + -3 * 2966 + 6980:
        case 47:
          _t(Zc(jc(ee(), Go()), n, t, a), a);
          break;
        default:
          y += "/";
      }
      break;
    case (541 * 1 + 130 + -548) * Q:
      g[I++] = Qe(y) * h;
    case (-15664 + 277 * 57) * Q:
    case 59:
    case 413 * -9 + 1453 * 1 + -283 * -8:
      switch (f) {
        case -2086 + 2 * 1686 + -1286:
        case 4626 + -643 * 7:
          l = 0;
        case 1628 + 14 * -417 + -4269 * -1 + C:
          h == -1 && (y = v(y, /\f/g, "")), E > 4834 + -3 * 2473 + 2585 && Qe(y) - s && _t(E > 1 * -4937 + 4526 + 443 ? ma(y + ";", e, t, s - (-486 + -1 * -4714 + 4227 * -1), a) : ma(v(y, " ", "") + ";", e, t, s - 2, a), a);
          break;
        case -510 * -14 + -1939 + -1 * 5142:
          y += ";";
        default:
          if (_t(k = ya(y, n, t, I, C, A, g, p, m = [], D = [], s, o), o), f === 123)
            if (C === 1 * -8698 + 847 + 7851) No(y, n, k, k, m, o, s, g, D);
            else switch (B === 17 * 379 + -498 * 3 + -4850 * 1 && BA(y, 3) === 110 ? 11 * -259 + -2 * -1578 + -207 : B) {
              case 9260 * -1 + -3167 + 12527:
              case -3428 + -2 * -1768:
              case -5825 + -537 * 3 + 1509 * 5:
              case -3 * 1282 + 2 * 2961 + -1961:
                No(i, k, k, e && _t(ya(i, k, k, 8324 + 739 * 7 + -13497, -4629 * -1 + 9637 + -14266, A, g, p, A, m = [], s, D), D), A, D, s, g, e ? m : D);
                break;
              default:
                No(y, k, k, k, [""], D, -2161 + 3 * 1989 + 11 * -346, g, D);
            }
      }
      I = C = E = 22 * -303 + 9090 + 808 * -3, Q = h = -272 + 1113 * -3 + 1 * 3612, p = y = "", s = r;
      break;
    case 58:
      s = 1 + Qe(y), E = x;
    default:
      if (Q < -1067 * 4 + -1208 + 5477 * 1) {
        if (f == 123) --Q;
        else if (f == 9164 + -5 * 1489 + -797 * 2 && Q++ == 4136 + -19 * -377 + 1 * -11299 && Tc() == -4 * 1642 + -15 * -383 + 948) continue;
      }
      switch (y += vr(f), f * Q) {
        case 1699 + -1 * 1661:
          h = C > 0 ? -1 * 607 + 1404 + -796 : (y += "\f", -1);
          break;
        case -2490 + 557 * -5 + 5319:
          g[I++] = (Qe(y) - (3478 + 2768 * 3 + -11781)) * h, h = 1353 + -1694 * -2 + -474 * 10;
          break;
        case -376 * 24 + -2561 + -353 * -33:
          tt() === -2009 * -2 + 846 + -4819 && (y += Vn(ee())), B = tt(), C = s = Qe(p = y += qc(Go())), f++;
          break;
        case 3996 + 1 * 8378 + -12329:
          x === 16 * 273 + 2617 + -6940 && Qe(y) == 2 && (Q = -1136 + -803 * -3 + -1273);
      }
  }
  return o;
}
function ya(i, n, t, e, A, o, r, g, a, I, C, s) {
  for (var B = A - 1, E = A === 0 ? o : [""], x = Bs(E), Q = 7117 + 647 * -11, l = 8075 * 1 + 9963 + -18038, h = 0; Q < e; ++Q) for (var f = -2171 * -3 + 9903 * 1 + -16416, p = bt(i, B + (-1597 * -4 + 4033 + -10420), B = cs(l = r[Q])), m = i; f < x; ++f) (m = Cs(l > 0 ? E[f] + " " + p : v(p, /&\f/g, E[f]))) && (a[h++] = m);
  return vn(i, n, t, A === 0 ? Nn : g, a, I, C, s);
}
function Zc(i, n, t, e) {
  return vn(i, n, t, ss, vr(Yc()), bt(i, 8825 + 3 * -1191 + -5250, -2), -14440 + 40 * 361, e);
}
function ma(i, n, t, e, A) {
  return vn(i, n, t, Rr, bt(i, 10895 + -1 * 10895, e), bt(i, e + (968 + 2811 * 1 + -3778), -1), e, A);
}
function Es(i, n, t) {
  switch (Jc(i, n)) {
    case -1531 * -4 + 6065 + -7086:
      return W + "print-" + i + i;
    case -1 * -8293 + -9866 * -1 + -12422:
    case 1 * 5378 + -1896 + -719 * -1:
    case 1 * -5217 + 6828 + 1566:
    case -7096 + 1 * 3293 + 7236:
    case 3 * -2521 + 1 * -1316 + 10520:
    case -2482 * 1 + -3389 * 1 + 10328:
    case 2921:
    case 677 * 8 + 7 * -937 + -17 * -395:
    case 5894 + 362 * 3 + -624:
    case -7309 * 1 + -2805 + -2 * -7979:
    case 5188 + -1 * 1997:
    case 6645:
    case 4423 + -2 * 709:
    case -10084 + -659 * -25:
    case -1281 + 4836 * -2 + -1 * -16832:
    case -12 * -404 + 3272 + -2497:
    case 1087 + -1262 * -4:
    case 1 * -1427 + -3361 * 2 + 12748:
    case -807 * 7 + 7564 + 2940:
    case 478 * 2 + -7450 + -10709 * -1:
    case -1 * 7789 + 711 + 13467:
    case -7097 + 1732 * 2 + 8742:
    case 5365:
    case 5621:
    case -8 * -295 + -2525 + 3994:
      return W + i + i;
    case 4789:
      return zt + i + i;
    case 7121 * -1 + 3096 + 1 * 9374:
    case 4246:
    case 4810:
    case 10641 + -3673 * 1:
    case 6665 + -1 * -1457 + 5366 * -1:
      return W + i + zt + i + Y + i + i;
    case -6130 + 7 * -1167 + 20235:
      switch (BA(i, n + (1 * 8501 + 2232 + -10722))) {
        case 5221 + -1 * 1595 + -3512:
          return W + i + Y + v(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 863 * -10 + 787 + 1 * 7951:
          return W + i + Y + v(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 9436 + -1 * 5625 + 3766 * -1:
          return W + i + Y + v(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 6828:
    case 545 + 3723 * 1:
    case 1829 * 3 + -3696 + 1 * 1112:
      return W + i + Y + i + i;
    case -21206 + 271 * 101:
      return W + i + Y + "flex-" + i + i;
    case 969 + -332 * -11 + -2 * -283:
      return W + i + v(i, /(\w+).+(:[^]+)/, W + "box-$1$2" + Y + "flex-$1$2") + i;
    case 3931 * 2 + 8437 + -10856:
      return W + i + Y + "flex-item-" + v(i, /flex-|-self/g, "") + (De(i, /flex-|baseline/) ? "" : Y + "grid-row-" + v(i, /flex-|-self/g, "")) + i;
    case -5795 + -1003 * 1 + 11473:
      return W + i + Y + "flex-line-pack" + v(i, /align-content|flex-|-self/g, "") + i;
    case 2 * 853 + 2 * -3884 + 11610:
      return W + i + Y + v(i, "shrink", "negative") + i;
    case -15823 + -1 * -21115:
      return W + i + Y + v(i, "basis", "preferred-size") + i;
    case 2719 * -1 + -11637 + 20416:
      return W + "box-" + v(i, "-grow", "") + W + i + Y + v(i, "grow", "positive") + i;
    case -18917 + -3353 * -7:
      return W + v(i, /([^-])(transform)/g, "$1" + W + "$2") + i;
    case -614 * -11 + -595 * 11 + 854 * 7:
      return v(v(v(i, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), i, "") + i;
    case 5495:
    case 3959:
      return v(i, /(image-set\([^]*)/, W + "$1$`$1");
    case 1 * 5798 + 1783 * 1 + -871 * 3:
      return v(v(i, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + Y + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + W + i + i;
    case -3209 * 2 + 2 * -1631 + 13880:
      if (!De(i, /flex-|baseline/)) return Y + "grid-column-align" + bt(i, n) + i;
      break;
    case 2592:
    case 3360:
      return Y + v(i, "template-", "") + i;
    case 4085 + -2 * -619 + -939:
    case 8148 + 2266 * -2:
      return t && t.some(function(e, A) {
        return n = A, De(e.props, /grid-\w+-end/);
      }) ? ~So(i + (t = t[n].value), "span", -6736 + 8 * 842) ? i : Y + v(i, "-start", "") + i + Y + "grid-row-span:" + (~So(t, "span", 10711 + 1 * -10711) ? De(t, /\d+/) : +De(t, /\d+/) - +De(i, /\d+/)) + ";" : Y + v(i, "-start", "") + i;
    case 9 * 525 + 7887 + -7716:
    case 702 + -19 * 349 + 10057:
      return t && t.some(function(e) {
        return De(e.props, /grid-\w+-start/);
      }) ? i : Y + v(v(i, "-end", "-span"), "span ", "") + i;
    case 4095:
    case -3 * 1355 + 231 + 7417:
    case -923 * -6 + 6028 + -3749 * 2:
    case 2532:
      return v(i, /(.+)-inline(.+)/, W + "$1$2") + i;
    case 4 * 354 + -2659 + 9359:
    case -791 * 9 + 13103 + 1075:
    case 6113 + -472 * 10 + -1090 * -4:
    case 10563 + 1 * -5028:
    case -5 * -1585 + 8816 + -11296:
    case -5448 + 919 * -5 + 15744:
    case 1395 * -7 + 8792 + 5906 * 1:
    case 4677:
    case -2802 + 596 * 1 + -1 * -7739:
    case 486 + 1 * 5303:
    case 5021:
    case -485 + -525 * -10:
      if (Qe(i) - (-8103 + -13 * -474 + 971 * 2) - n > 6) switch (BA(i, n + (-9517 * 1 + 1416 + 8102))) {
        case 109:
          if (BA(i, n + (9935 * -1 + -4039 * 1 + 13978)) !== 1 * 6033 + 4296 + 1714 * -6) break;
        case 1 * 325 + 4147 + 874 * -5:
          return v(i, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + zt + (BA(i, n + (623 * -11 + 2419 * -1 + -1855 * -5)) == 108 ? "$3" : "$2-$3")) + i;
        case -7097 + -9 * 1083 + 16959:
          return ~So(i, "stretch", -7604 + 1161 * -4 + -1 * -12248) ? Es(v(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case -8 * -423 + -1 * -1797 + -29:
    case -434 + -9 * -554 + 4 * 342:
      return v(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, g, a, I) {
        return Y + A + ":" + o + I + (r ? Y + A + "-span:" + (g ? a : +a - +o) + I : "") + i;
      });
    case 4949:
      if (BA(i, n + (2589 * -3 + -3296 * -2 + 1181)) === -1 * -7411 + -4147 + -3143) return v(i, ":", ":" + W) + i;
      break;
    case -10656 + -1049 * -1 + 16051:
      switch (BA(i, BA(i, 8999 * 1 + 7 * -1401 + 822) === -2498 * 4 + -5463 + 15500 ? -10926 + -38 * -288 : 1703 + -1 * 281 + 1 * -1411)) {
        case 120:
          return v(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + W + (BA(i, -4386 + 9332 * -1 + -4 * -3433) === 45 ? "inline-" : "") + "box$3$1" + W + "$2$3$1" + Y + "$2box$3") + i;
        case 12545 + 5 * -2489:
          return v(i, ":", ":" + Y) + i;
      }
      break;
    case 7964 + -1 * 2245:
    case 2647:
    case -3804 + 6 * -1473 + 14777:
    case 3 * 3093 + 3 * -2659 + 2625:
    case 2391:
      return v(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function qo(i, n) {
  for (var t = "", e = -1025 + 1 * -8837 + 9862; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function zc(i, n, t, e) {
  switch (i.type) {
    case Oc:
      if (i.children.length) break;
    case Lc:
    case Rr:
      return i.return = i.return || i.value;
    case ss:
      return "";
    case Is:
      return i.return = i.value + "{" + qo(i.children, e) + "}";
    case Nn:
      if (!Qe(i.value = i.props.join(","))) return "";
  }
  return Qe(t = qo(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function Xc(i) {
  var n = Bs(i);
  return function(t, e, A, o) {
    for (var r = "", g = -4161 * 1 + 1715 + -1 * -2446; g < n; g++) r += i[g](t, e, A, o) || "";
    return r;
  };
}
function $c(i) {
  return function(n) {
    n.root || (n = n.return) && i(n);
  };
}
function AC(i, n, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case Rr:
        i.return = Es(i.value, i.length, t);
        return;
      case Is:
        return qo([ve(i, { value: v(i.value, "@", "@" + W) })], e);
      case Nn:
        if (i.length) return Uc(t = i.props, function(A) {
          switch (De(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              ct(ve(i, { props: [v(A, /:(read-\w+)/, ":" + zt + "$1")] }));
              var o = {};
              o.props = [A], ct(ve(i, o)), ki(i, { props: pa(t, e) });
              break;
            case "::placeholder":
              ct(ve(i, { props: [v(A, /:(plac\w+)/, ":" + W + "input-$1")] })), ct(ve(i, { props: [v(A, /:(plac\w+)/, ":" + zt + "$1")] })), ct(ve(i, { props: [v(A, /:(plac\w+)/, Y + "input-$1")] }));
              var r = {};
              r.props = [A], ct(ve(i, r)), ki(i, { props: pa(t, e) });
              break;
          }
          return "";
        });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var eC = N, M = {}, at = typeof process < "u" && M !== void 0 && (M.REACT_APP_SC_ATTR || M.SC_ATTR) || "data-styled", xs = "active", ds = "data-styled-version", Mn = "6.1.19", Fr = `/*!sc*/
`, Vo = typeof window < "u" && typeof document < "u", tC = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && M !== void 0 && M.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && M.REACT_APP_SC_DISABLE_SPEEDY !== "" ? M.REACT_APP_SC_DISABLE_SPEEDY !== "false" && M.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && M !== void 0 && M.SC_DISABLE_SPEEDY !== void 0 && M.SC_DISABLE_SPEEDY !== "" ? M.SC_DISABLE_SPEEDY !== "false" && M.SC_DISABLE_SPEEDY : M.NODE_ENV !== "production"), wa = /invalid hook call/i, Qo = /* @__PURE__ */ new Set(), oC = function(i, n) {
  if (M.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var g = [], a = 1; a < arguments.length; a++) g[a - (-2234 + 3 * 745)] = arguments[a];
        wa.test(r) ? (o = !1, Qo.delete(e)) : A.apply(void (1 * -6911 + -4982 + 1 * 11893), wt([r], g, !1));
      }, DA(), o && !Qo.has(e) && (console.warn(e), Qo.add(e));
    } catch (r) {
      wa.test(r.message) && Qo.delete(e);
    } finally {
      console.error = A;
    }
  }
}, Wn = Object.freeze([]), St = Object.freeze({});
function nC(i, n, t) {
  return t === void 0 && (t = St), i.theme !== t.theme && i.theme || n || t.theme;
}
var Ni = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), iC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, rC = /(^-|-$)/g;
function Da(i) {
  return i.replace(iC, "-").replace(rC, "");
}
var aC = /(a)(d)/gi, Eo = -6077 + -9 * -681, ba = function(i) {
  return String.fromCharCode(i + (i > 10225 + 5 * -2040 ? 1992 + -1 * 1953 : 1 * -4289 + -7688 + 12074));
};
function Ri(i) {
  var n, t = "";
  for (n = Math.abs(i); n > Eo; n = n / Eo | -4549 * -2 + -5514 + -3584) t = ba(n % Eo) + t;
  return (ba(n % Eo) + t).replace(aC, "$1-$2");
}
var Zn, ls = -577 * 16 + -8413 * -1 + 6200, $e = function(i, n) {
  for (var t = n.length; t; ) i = (-283 * -10 + -925 + -1872) * i ^ n.charCodeAt(--t);
  return i;
}, us = function(i) {
  return $e(ls, i);
};
function gC(i) {
  return Ri(us(i) >>> 1812 + -6 * 302);
}
function hs(i) {
  return M.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function zn(i) {
  return typeof i == "string" && (M.NODE_ENV === "production" || i.charAt(0) === i.charAt(8766 + -2922 * 3).toLowerCase());
}
var _A = {};
_A.childContextTypes = !0, _A.contextType = !0, _A.contextTypes = !0, _A.defaultProps = !0, _A.displayName = !0, _A.getDefaultProps = !0, _A.getDerivedStateFromError = !0, _A.getDerivedStateFromProps = !0, _A.mixins = !0, _A.propTypes = !0, _A.type = !0;
var Fe = {};
Fe.name = !0, Fe.length = !0, Fe.prototype = !0, Fe.caller = !0, Fe.callee = !0, Fe.arguments = !0, Fe.arity = !0;
var Ke = {};
Ke.$$typeof = !0, Ke.compare = !0, Ke.defaultProps = !0, Ke.displayName = !0, Ke.propTypes = !0, Ke.type = !0;
var Et = {};
Et.$$typeof = !0, Et.render = !0, Et.defaultProps = !0, Et.displayName = !0, Et.propTypes = !0;
var fs = typeof Symbol == "function" && Symbol.for, ps = fs ? /* @__PURE__ */ Symbol.for("react.memo") : 91566 + -1 * -100687 + -132138, sC = fs ? /* @__PURE__ */ Symbol.for("react.forward_ref") : -109136 * 1 + 17 * 1907 + 136829 * 1, IC = _A, cC = Fe, ys = Ke, CC = ((Zn = {})[sC] = Et, Zn[ps] = ys, Zn);
function ka(i) {
  return ("type" in (n = i) && n.type.$$typeof) === ps ? ys : "$$typeof" in i ? CC[i.$$typeof] : IC;
  var n;
}
var BC = Object.defineProperty, QC = Object.getOwnPropertyNames, Sa = Object.getOwnPropertySymbols, EC = Object.getOwnPropertyDescriptor, xC = Object.getPrototypeOf, Ga = Object.prototype;
function ms(i, n, t) {
  if (typeof n != "string") {
    if (Ga) {
      var e = xC(n);
      e && e !== Ga && ms(i, e, t);
    }
    var A = QC(n);
    Sa && (A = A.concat(Sa(n)));
    for (var o = ka(i), r = ka(n), g = 8 * 1177 + 6632 + 8024 * -2; g < A.length; ++g) {
      var a = A[g];
      if (!(a in cC || t && t[a] || r && a in r || o && a in o)) {
        var I = EC(n, a);
        try {
          BC(i, a, I);
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
function Mr(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function et(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function Na(i, n) {
  if (-263 * -1 + 599 * -7 + 3930 === i.length) return "";
  for (var t = i[0], e = -3 * -933 + -1900 + -898; e < i.length; e++) t += i[e];
  return t;
}
function Nt(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function vi(i, n, t) {
  if (t === void 0 && (t = !1), !t && !Nt(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = 9580 + 1 * 3754 + -13334; e < n.length; e++) i[e] = vi(i[e], n[e]);
  else if (Nt(n))
    for (var e in n) i[e] = vi(i[e], n[e]);
  return i;
}
function Wr(i, n) {
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
var dC = M.NODE_ENV !== "production" ? eA : {};
function lC() {
  for (var i = [], n = -656 + -1227 * -8 + 2290 * -4; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[3034 + 2 * -1517], e = [], A = -363 + -6717 * 1 + 7081, o = i.length; A < o; A += 1 * 7487 + 7247 + -9 * 1637) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function Wt(i) {
  for (var n = [], t = -364 + 6 * -371 + 2591 * 1; t < arguments.length; t++) n[t - (-9 * 359 + 8 * -304 + 16 * 354)] = arguments[t];
  return M.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(lC.apply(void 0, wt([dC[i]], n, !1)).trim());
}
var uC = (function() {
  function i(n) {
    this.groupSizes = new Uint32Array(-1 * 1916 + 9143 + -6715), this.length = 310 * -14 + 1 * -599 + 1817 * 3, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = 2387 + 2 * -1367 + -1 * -347, e = 9949 + -1 * -1852 + 1 * -11801; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= -11500 + -11501 * -1) < 0) throw Wt(2377 * 1 + -2482 + 121, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = 0;
    }
    for (var g = this.indexOfGroup(n + (7701 + 2 * 4819 + -17338 * 1)), a = (r = 7149 + 7149 * -1, t.length); r < a; r++) this.tag.insertRule(g, t[r]) && (this.groupSizes[n]++, g++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = 5563 * 1 + 1 * -2953 + -2610;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || 5101 * 1 + -1491 * 1 + -3610 === this.groupSizes[n]) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(Fr);
    return t;
  }, i;
})(), hC = 2587 + -1 * 2586 << 5985 + -1 * 4165 + -1790, Ro = /* @__PURE__ */ new Map(), Zo = /* @__PURE__ */ new Map(), vo = 4422 + -3799 * 1 + 622 * -1, xo = function(i) {
  if (Ro.has(i)) return Ro.get(i);
  for (; Zo.has(vo); ) vo++;
  var n = vo++;
  if (M.NODE_ENV !== "production" && ((0 | n) < 1946 * -1 + -2269 * 2 + -1621 * -4 || n > hC)) throw Wt(1127 + 26 * 321 + -9457, "".concat(n));
  return Ro.set(i, n), Zo.set(n, i), n;
}, fC = function(i, n) {
  vo = n + (-3901 * 2 + 1 * -6573 + -12 * -1198), Ro.set(i, n), Zo.set(n, i);
}, pC = "style[".concat(at, "][").concat(ds, '="').concat(Mn, '"]'), yC = new RegExp("^".concat(at, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), mC = function(i, n, t) {
  for (var e, A = t.split(","), o = 9189 + -1811 * -5 + 4561 * -4, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, wC = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(Fr), A = [], o = -1 * 5204 + 5399 + -195, r = e.length; o < r; o++) {
    var g = e[o].trim();
    if (g) {
      var a = g.match(yC);
      if (a) {
        var I = 0 | parseInt(a[1], 10), C = a[-8595 + 4 * -2274 + 13 * 1361];
        1 * 8293 + 7305 + 7799 * -2 !== I && (fC(C, I), mC(i, C, a[-1 * 9055 + 1 * -1455 + -10513 * -1]), i.getTag().insertRules(I, A)), A.length = -4115 * 1 + 8999 * -1 + 6557 * 2;
      } else A.push(g);
    }
  }
}, Ra = function(i) {
  for (var n = document.querySelectorAll(pC), t = 1548 + 1571 * -1 + 23, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(at) !== xs && (wC(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function DC() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ws = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = (function(g) {
    var a = Array.from(g.querySelectorAll("style[".concat(at, "]")));
    return a[a.length - 1];
  })(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(at, xs), e.setAttribute(ds, Mn);
  var r = DC();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, bC = (function() {
  function i(n) {
    this.element = ws(n), this.element.appendChild(document.createTextNode("")), this.sheet = (function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 6 * -955 + 5586 + 144, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw Wt(17);
    })(this.element), this.length = 459 * -5 + 3 * 398 + 1101;
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
})(), kC = (function() {
  function i(n) {
    this.element = ws(n), this.nodes = this.element.childNodes, this.length = 3248 + -6397 * -1 + 15 * -643;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= -2629 + -1 * -2629) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, i;
})(), SC = (function() {
  function i(n) {
    this.rules = [], this.length = 0;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, -461 * 3 + 6064 + -4681, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, -346 * 25 + 2717 * -1 + -11368 * -1), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
})(), va = Vo, GC = { isServer: !Vo, useCSSOMInjection: !tC }, Ds = (function() {
  function i(n, t, e) {
    n === void 0 && (n = St), t === void 0 && (t = {});
    var A = this;
    this.options = MA(MA({}, GC), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && Vo && va && (va = !1, Ra(this)), Wr(this, function() {
      return (function(o) {
        for (var r = o.getTag(), g = r.length, a = "", I = function(s) {
          var B = (function(h) {
            return Zo.get(h);
          })(s);
          if (B === void 0) return "continue";
          var E = o.names.get(B), x = r.getGroup(s);
          if (E === void 0 || !E.size || -9370 + -349 * -28 + -402 === x.length) return "continue";
          var Q = "".concat(at, ".g").concat(s, '[id="').concat(B, '"]'), l = "";
          E !== void 0 && E.forEach(function(h) {
            h.length > -4 * 1371 + -511 * 7 + 9061 && (l += "".concat(h, ","));
          }), a += "".concat(x).concat(Q, '{content:"').concat(l, '"}').concat(Fr);
        }, C = 1 * -2023 + -497 + 2520; C < g; C++) I(C);
        return a;
      })(A);
    });
  }
  return i.registerId = function(n) {
    return xo(n);
  }, i.prototype.rehydrate = function() {
    !this.server && Vo && Ra(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i(MA(MA({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || -1 * 8537 + -123 + 1 * 8660) + (2526 * -3 + 9938 + 337 * -7);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = (function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new SC(A) : e ? new bC(A) : new kC(A);
    })(this.options), new uC(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (xo(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(xo(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(xo(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
})(), NC = /&/g, RC = /^\s*\/\/.*$/gm;
function bs(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = bs(t.children, n)), t;
  });
}
function ks(i) {
  var n, t, e, A = i === void 0 ? St : i, o = A.options, r = o === void 0 ? St : o, g = A.plugins, a = g === void 0 ? Wn : g, I = function(B, E, x) {
    return x.startsWith(t) && x.endsWith(t) && x.replaceAll(t, "").length > 3343 + 1 * -3343 ? ".".concat(n) : B;
  }, C = a.slice();
  C.push(function(B) {
    B.type === Nn && B.value.includes("&") && (B.props[2164 * -2 + -6555 + 10883] = B.props[2 * 3121 + 3724 * -1 + -2518].replace(NC, t).replace(e, I));
  }), r.prefix && C.push(AC), C.push(zc);
  var s = function(B, E, x, Q) {
    E === void 0 && (E = ""), x === void 0 && (x = ""), Q === void 0 && (Q = "&"), n = Q, t = E, e = new RegExp("\\".concat(t, "\\b"), "g");
    var l = B.replace(RC, ""), h = Vc(x || E ? "".concat(x, " ").concat(E, " { ").concat(l, " }") : l);
    r.namespace && (h = bs(h, r.namespace));
    var f = [];
    return qo(h, Xc(C.concat($c(function(p) {
      return f.push(p);
    })))), f;
  };
  return s.hash = a.length ? a.reduce(function(B, E) {
    return E.name || Wt(76 + -1 * -2157 + -2218), $e(B, E.name);
  }, ls).toString() : "", s;
}
var vC = new Ds(), Fi = ks(), Lr = rt.createContext({ shouldForwardProp: void 0, styleSheet: vC, stylis: Fi });
Lr.Consumer;
var FC = rt.createContext(void 0);
function Mi() {
  return le(Lr);
}
function MC(i) {
  var n = Z(i.stylisPlugins), t = n[929 + -1 * 929], e = n[-9969 + 2 * 4985], A = Mi().styleSheet, o = hA(function() {
    var C = A, s = {};
    return s.useCSSOMInjection = !1, i.sheet ? C = i.sheet : i.target && (C = C.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (C = C.reconstructWithOptions(s)), C;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = hA(function() {
    var C = {};
    C.namespace = i.namespace, C.prefix = i.enableVendorPrefixes;
    var s = {};
    return s.options = C, s.plugins = t, ks(s);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  J(function() {
    Wc(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var g = hA(function() {
    var C = {};
    return C.shouldForwardProp = i.shouldForwardProp, C.styleSheet = o, C.stylis = r, C;
  }, [i.shouldForwardProp, o, r]), a = {};
  a.value = g;
  var I = {};
  return I.value = r, rt.createElement(Lr.Provider, a, rt.createElement(FC.Provider, I, i.children));
}
var Fa = (function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = Fi);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, Wr(this, function() {
      throw Wt(12, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = Fi), this.name + n.hash;
  }, i;
})(), WC = function(i) {
  return i >= "A" && i <= "Z";
};
function Ma(i) {
  for (var n = "", t = 3432 + 316 * -1 + -3116; t < i.length; t++) {
    var e = i[t];
    if (t === 1 && e === "-" && i[0] === "-") return i;
    WC(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var Ss = function(i) {
  return i == null || i === !1 || i === "";
}, Gs = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !Ss(o) && (Array.isArray(o) && o.isCss || Gt(o) ? e.push("".concat(Ma(A), ":"), o, ";") : Nt(o) ? e.push.apply(e, wt(wt(["".concat(A, " {")], Gs(o), !1), ["}"], !1)) : e.push("".concat(Ma(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || n in eC || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function ot(i, n, t, e) {
  if (Ss(i)) return [];
  if (Mr(i)) return [".".concat(i.styledComponentId)];
  if (Gt(i)) {
    if (!Gt(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return M.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof Fa || Nt(A) || A === null || console.error("".concat(hs(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ot(A, n, t, e);
  }
  var o;
  return i instanceof Fa ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : Nt(i) ? Gs(i) : Array.isArray(i) ? Array.prototype.concat.apply(Wn, i.map(function(r) {
    return ot(r, n, t, e);
  })) : [i.toString()];
}
function LC(i) {
  for (var n = 0; n < i.length; n += -1228 + 2 * -4047 + 9323) {
    var t = i[n];
    if (Gt(t) && !Mr(t)) return !1;
  }
  return !0;
}
var OC = us(Mn), JC = (function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = M.NODE_ENV === "production" && (e === void 0 || e.isStatic) && LC(n), this.componentId = t, this.baseHash = $e(OC, t), this.baseStyle = e, Ds.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = et(A, this.staticRulesId);
      else {
        var o = Na(ot(this.rules, n, t, e)), r = Ri($e(this.baseHash, o) >>> 1426 + 1 * -6927 + 5501);
        if (!t.hasNameForId(this.componentId, r)) {
          var g = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, g);
        }
        A = et(A, r), this.staticRulesId = r;
      }
    else {
      for (var a = $e(this.baseHash, e.hash), I = "", C = -1026 * 1 + -9757 * 1 + -41 * -263; C < this.rules.length; C++) {
        var s = this.rules[C];
        if (typeof s == "string") I += s, M.NODE_ENV !== "production" && (a = $e(a, s));
        else if (s) {
          var B = Na(ot(s, n, t, e));
          a = $e(a, B + C), I += B;
        }
      }
      if (I) {
        var E = Ri(a >>> 0);
        t.hasNameForId(this.componentId, E) || t.insertRules(this.componentId, E, e(I, ".".concat(E), void 0, this.componentId)), A = et(A, E);
      }
    }
    return A;
  }, i;
})(), Ns = rt.createContext(void 0);
Ns.Consumer;
var Xn = {}, Wa = /* @__PURE__ */ new Set();
function UC(i, n, t) {
  var e = Mr(i), A = i, o = !zn(i), r = n.attrs, g = r === void 0 ? Wn : r, a = n.componentId, I = a === void 0 ? (function(D, k) {
    var y = typeof D != "string" ? "sc" : Da(D);
    Xn[y] = (Xn[y] || 3155 * 1 + 1583 + -4738) + (9926 + 7 * 788 + 5147 * -3);
    var U = "".concat(y, "-").concat(gC(Mn + y + Xn[y]));
    return k ? "".concat(k, "-").concat(U) : U;
  })(n.displayName, n.parentComponentId) : a, C = n.displayName, s = C === void 0 ? (function(D) {
    return zn(D) ? "styled.".concat(D) : "Styled(".concat(hs(D), ")");
  })(i) : C, B = n.displayName && n.componentId ? "".concat(Da(n.displayName), "-").concat(n.componentId) : n.componentId || I, E = e && A.attrs ? A.attrs.concat(g).filter(Boolean) : g, x = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var Q = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var l = n.shouldForwardProp;
      x = function(D, k) {
        return Q(D, k) && l(D, k);
      };
    } else x = Q;
  }
  var h = new JC(t, B, e ? A.componentStyle : void 0);
  function f(D, k) {
    return (function(y, U, O) {
      var z = y.attrs, X = y.componentStyle, pA = y.defaultProps, $ = y.foldedComponentIds, so = y.styledComponentId, M0 = y.target, W0 = rt.useContext(Ns), L0 = Mi(), Yn = y.shouldForwardProp || L0.shouldForwardProp;
      M.NODE_ENV !== "production" && jo(so);
      var Aa = nC(U, W0, pA) || St, he = (function(Io, Yt, co) {
        var It = {};
        It.className = void 0, It.theme = co;
        for (var Hn, Te = MA(MA({}, Yt), It), _n = 2 * 4103 + -4180 + -3 * 1342; _n < Io.length; _n += -13 * -611 + -2892 + -5050) {
          var Co = Gt(Hn = Io[_n]) ? Hn(Te) : Hn;
          for (var Ne in Co) Te[Ne] = Ne === "className" ? et(Te[Ne], Co[Ne]) : Ne === "style" ? MA(MA({}, Te[Ne]), Co[Ne]) : Co[Ne];
        }
        return Yt.className && (Te.className = et(Te.className, Yt.className)), Te;
      })(z, U, Aa), Jt = he.as || M0, Ut = {};
      for (var PA in he) he[PA] === void 0 || PA[-818 * 4 + -3437 + 1 * 6709] === "$" || PA === "as" || PA === "theme" && he.theme === Aa || (PA === "forwardedAs" ? Ut.as = he.forwardedAs : Yn && !Yn(PA, Jt) || (Ut[PA] = he[PA], Yn || M.NODE_ENV !== "development" || Ac(PA) || Wa.has(PA) || !Ni.has(Jt) || (Wa.add(PA), console.warn('styled-components: it looks like an unknown prop "'.concat(PA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Tn = (function(Io, Yt) {
        var co = Mi(), It = Io.generateAndInjectStyles(Yt, co.styleSheet, co.stylis);
        return M.NODE_ENV !== "production" && jo(It), It;
      })(X, he);
      M.NODE_ENV !== "production" && y.warnTooManyClasses && y.warnTooManyClasses(Tn);
      var Pn = et($, so);
      return Tn && (Pn += " " + Tn), he.className && (Pn += " " + he.className), Ut[zn(Jt) && !Ni.has(Jt) ? "class" : "className"] = Pn, O && (Ut.ref = O), GA(Jt, Ut);
    })(p, D, k);
  }
  f.displayName = s;
  var p = rt.forwardRef(f), m = {};
  return m.attrs = !0, m.componentStyle = !0, m.displayName = !0, m.foldedComponentIds = !0, m.shouldForwardProp = !0, m.styledComponentId = !0, m.target = !0, p.attrs = E, p.componentStyle = h, p.displayName = s, p.shouldForwardProp = x, p.foldedComponentIds = e ? et(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = B, p.target = e ? A.target : i, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(D) {
    this._foldedDefaultProps = e ? (function(k) {
      for (var y = [], U = -8477 * -1 + -2461 + -6015; U < arguments.length; U++) y[U - 1] = arguments[U];
      for (var O = -3239 + 2197 * 1 + 1042, z = y; O < z.length; O++) vi(k, z[O], !0);
      return k;
    })({}, A.defaultProps, D) : D;
  } }), M.NODE_ENV !== "production" && (oC(s, B), p.warnTooManyClasses = /* @__PURE__ */ (function(D, k) {
    var y = {}, U = !1;
    return function(O) {
      if (!U && (y[O] = !0, Object.keys(y).length >= 8590 + -25 * -368 + -8795 * 2)) {
        var z = k ? ' with the id of "'.concat(k, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(D).concat(z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), U = !0, y = {};
      }
    };
  })(s, B)), Wr(p, function() {
    return ".".concat(p.styledComponentId);
  }), o && ms(p, i, m), p;
}
function La(i, n) {
  for (var t = [i[4319 + -1 * -7219 + -11538]], e = 6863 + 9 * -937 + 1570, A = n.length; e < A; e += 2876 * -1 + 7 * -270 + 1 * 4767) t.push(n[e], i[e + 1]);
  return t;
}
var Oa = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function Rs(i) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  if (Gt(i) || Nt(i)) return Oa(ot(La(Wn, wt([i], n, !0))));
  var e = i;
  return n.length === 0 && e.length === 1 && typeof e[-5597 * 1 + 9011 + -3414] == "string" ? ot(e) : Oa(ot(La(e, n)));
}
function Wi(i, n, t) {
  if (t === void 0 && (t = St), !n) throw Wt(-3 * -1741 + 1 * 2638 + 12 * -655, n);
  var e = function(A) {
    for (var o = [], r = 1; r < arguments.length; r++) o[r - 1] = arguments[r];
    return i(n, t, Rs.apply(void 0, wt([A], o, !1)));
  };
  return e.attrs = function(A) {
    return Wi(i, n, MA(MA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Wi(i, n, MA(MA({}, t), A));
  }, e;
}
var vs = function(i) {
  return Wi(UC, i);
}, Lt = vs;
Ni.forEach(function(i) {
  Lt[i] = vs(i);
});
M.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var lo = "__sc-".concat(at, "__");
M.NODE_ENV !== "production" && M.NODE_ENV !== "test" && typeof window < "u" && (window[lo] || (window[lo] = 0), -14254 + 1 * 14255 === window[lo] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[lo] += 1);
const YC = Lt.div`
  position: relative;
`, TC = Lt.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
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
const Fo = {};
Fo.CONTINUE_DETECTION = "continue-detection", Fo.SWITCH_CAMERA = "switch-camera", Fo.TOGGLE_MIRROR = "toggle-mirror";
const ft = Fo, Li = {};
Li.FIRST_FRAME = "first-frame", Li.FIRST_VALID_FRAME = "first-valid-frame";
const $n = Li, Fs = {};
Fs.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Ja = Fs;
var Ms = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTION_CHANGED = "document-auto-capture:detection-changed", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(Ms || {}), qA = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTION_CHANGED = "face-auto-capture:detection-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(qA || {}), pt = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(pt || {}), PC = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTION_CHANGED = "palm-capture:detection-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(PC || {}), HC = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(HC || {});
const we = {};
we.CANDIDATE_SELECTION = "candidate_selection", we.DOCUMENT_CENTERING = "document_centering", we.DOCUMENT_NOT_PRESENT = "document_not_present", we.DOCUMENT_TOO_FAR = "document_too_far", we.SHARPNESS_TOO_LOW = "sharpness_too_low", we.BRIGHTNESS_TOO_LOW = "brightness_too_low", we.BRIGHTNESS_TOO_HIGH = "brightness_too_high", we.HOTSPOTS_PRESENT = "hotspots_present";
const Pe = we, He = {};
He.isPresent = Pe.DOCUMENT_NOT_PRESENT, He.isNotSmall = Pe.DOCUMENT_TOO_FAR, He.isNotOutOfBounds = Pe.DOCUMENT_CENTERING, He.isSharp = Pe.SHARPNESS_TOO_LOW, He.isNotDim = Pe.BRIGHTNESS_TOO_LOW, He.isNotBright = Pe.BRIGHTNESS_TOO_HIGH, He.noHotspots = Pe.HOTSPOTS_PRESENT;
const xt = {};
xt.LOADING = "loading", xt.ERROR = "error", xt.WAITING = "waiting", xt.RUNNING = "running", xt.COMPLETE = "complete";
const VA = xt, Ws = { ...VA };
Ws.DONE = "done";
const Oi = Ws, Ls = {};
Ls.EYE_NOT_PRESENT = "eye_not_present";
const Rt = Ls, bA = {};
bA.CANDIDATE_SELECTION = "candidate_selection", bA.FACE_TOO_CLOSE = "face_too_close", bA.FACE_TOO_FAR = "face_too_far", bA.FACE_CENTERING = "face_centering", bA.FACE_NOT_PRESENT = "face_not_present", bA.SHARPNESS_TOO_LOW = "sharpness_too_low", bA.BRIGHTNESS_TOO_LOW = "brightness_too_low", bA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", bA.DEVICE_PITCHED = "device_pitched", bA.LEFT_EYE_NOT_PRESENT = "left_" + Rt.EYE_NOT_PRESENT, bA.RIGHT_EYE_NOT_PRESENT = "right_" + Rt.EYE_NOT_PRESENT, bA.MOUTH_NOT_PRESENT = "mouth_not_present", bA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", bA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const aA = bA, RA = {};
RA.isPresent = aA.FACE_NOT_PRESENT, RA.isNotPitched = aA.DEVICE_PITCHED, RA.isNotSmall = aA.FACE_TOO_FAR, RA.isNotLarge = aA.FACE_TOO_CLOSE, RA.isNotOutOfBounds = aA.FACE_CENTERING, RA.isNotDim = aA.BRIGHTNESS_TOO_LOW, RA.isNotBright = aA.BRIGHTNESS_TOO_HIGH, RA.isSharp = aA.SHARPNESS_TOO_LOW, RA.isLeftEyePresent = aA.LEFT_EYE_NOT_PRESENT, RA.isRightEyePresent = aA.RIGHT_EYE_NOT_PRESENT, RA.isMouthPresent = aA.MOUTH_NOT_PRESENT, RA.isMouthScoreNotTooHigh = aA.MOUTH_SCORE_TOO_HIGH, RA.isMouthScoreNotTooLow = aA.MOUTH_SCORE_TOO_LOW;
const _C = RA;
({ ...aA });
var SA = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(SA || {});
const Ae = Oi, rA = {};
rA.CANDIDATE_SELECTION = "candidate_selection", rA.FACE_TOO_CLOSE = "face_too_close", rA.FACE_TOO_FAR = "face_too_far", rA.FACE_CENTERING = "face_centering", rA.FACE_NOT_PRESENT = "face_not_present", rA.SHARPNESS_TOO_LOW = "sharpness_too_low", rA.BRIGHTNESS_TOO_LOW = "brightness_too_low", rA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", rA.DEVICE_PITCHED = "device_pitched", rA.LEFT_EYE_NOT_PRESENT = "left_" + Rt.EYE_NOT_PRESENT, rA.RIGHT_EYE_NOT_PRESENT = "right_" + Rt.EYE_NOT_PRESENT, rA.MOUTH_NOT_PRESENT = "mouth_not_present", rA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", rA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low", rA.SMILE = "smile", rA.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", rA.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const LA = rA, OA = {};
OA.isPresent = LA.FACE_NOT_PRESENT, OA.isNotPitched = LA.DEVICE_PITCHED, OA.isNotSmall = LA.FACE_TOO_FAR, OA.isNotLarge = LA.FACE_TOO_CLOSE, OA.isNotOutOfBounds = LA.FACE_CENTERING, OA.isNotDim = LA.BRIGHTNESS_TOO_LOW, OA.isNotBright = LA.BRIGHTNESS_TOO_HIGH, OA.isSharp = LA.SHARPNESS_TOO_LOW, OA.isLeftEyePresent = LA.LEFT_EYE_NOT_PRESENT, OA.isRightEyePresent = LA.RIGHT_EYE_NOT_PRESENT, OA.isMouthPresent = LA.MOUTH_NOT_PRESENT, OA.isMouthStatusNotTooHigh = LA.MOUTH_SCORE_TOO_HIGH, OA.isMouthStatusNotTooLow = LA.MOUTH_SCORE_TOO_LOW;
const Ai = {};
Ai.NEUTRAL = "NEUTRAL", Ai.SMILE = "SMILE", Ai.SMILE_MANUAL = "SMILE_MANUAL";
const $A = {};
$A.CANDIDATE_SELECTION = "candidate_selection", $A.PALM_CENTERING = "palm_centering", $A.PALM_NOT_PRESENT = "palm_not_present", $A.PALM_TOO_FAR = "palm_too_far", $A.PALM_TOO_CLOSE = "palm_too_close", $A.SHARPNESS_TOO_LOW = "sharpness_too_low", $A.BRIGHTNESS_TOO_LOW = "brightness_too_low", $A.BRIGHTNESS_TOO_HIGH = "brightness_too_high", $A.DEVICE_PITCHED = "device_pitched", $A.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const fe = $A, pe = {};
pe.isPresent = fe.PALM_NOT_PRESENT, pe.isNotPitched = fe.DEVICE_PITCHED, pe.isNotSmall = fe.PALM_TOO_FAR, pe.isNotOutOfBounds = fe.PALM_CENTERING, pe.isNotDim = fe.BRIGHTNESS_TOO_LOW, pe.isNotBright = fe.BRIGHTNESS_TOO_HIGH, pe.isSharp = fe.SHARPNESS_TOO_LOW, pe.isNotLarge = fe.PALM_TOO_CLOSE, pe.isTemplateExtractionQualityHighEnough = fe.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
({ ...aA });
const uo = {};
uo.TOP_LEFT = "TOP_LEFT", uo.TOP_RIGHT = "TOP_RIGHT", uo.BOTTOM_RIGHT = "BOTTOM_RIGHT", uo.BOTTOM_LEFT = "BOTTOM_LEFT";
const KA = {};
KA.CANDIDATE_SELECTION = "candidate_selection", KA.FACE_TOO_CLOSE = "face_too_close", KA.FACE_TOO_FAR = "face_too_far", KA.FACE_CENTERING = "face_centering", KA.FACE_NOT_PRESENT = "face_not_present", KA.SHARPNESS_TOO_LOW = "sharpness_too_low", KA.BRIGHTNESS_TOO_LOW = "brightness_too_low", KA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", KA.DEVICE_PITCHED = "device_pitched", KA.LEFT_EYE_NOT_PRESENT = "left_" + Rt.EYE_NOT_PRESENT, KA.RIGHT_EYE_NOT_PRESENT = "right_" + Rt.EYE_NOT_PRESENT;
const te = KA, oe = {};
oe.isPresent = te.FACE_NOT_PRESENT, oe.isNotPitched = te.DEVICE_PITCHED, oe.isNotSmall = te.FACE_TOO_FAR, oe.isNotLarge = te.FACE_TOO_CLOSE, oe.isNotOutOfBounds = te.FACE_CENTERING, oe.isNotDim = te.BRIGHTNESS_TOO_LOW, oe.isNotBright = te.BRIGHTNESS_TOO_HIGH, oe.isSharp = te.SHARPNESS_TOO_LOW, oe.isLeftEyePresent = te.LEFT_EYE_NOT_PRESENT, oe.isRightEyePresent = te.RIGHT_EYE_NOT_PRESENT;
const Ln = Ye(void 0);
Ln.displayName = "AppStateContext";
function ue() {
  const i = le(Ln);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
const Os = ue;
var Js = ((i) => (i.DOCUMENT = "document-auto-capture:dev", i.FACE = "face-auto-capture:dev", i.PALM = "palm-capture:dev", i))(Js || {});
const Ji = {};
Ji.FRONT = "user", Ji.BACK = "environment";
const Or = Ji, Ui = {};
Ui.AUTO_CAPTURE = "AUTO_CAPTURE", Ui.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const Yi = Ui, Ti = {};
Ti.SIMD = "simd", Ti.NO_SIMD = "no-simd";
const Ua = Ti, Pi = {};
Pi.Lower = "Lower", Pi.Higher = "Higher";
const zo = Pi, Mo = {};
Mo.VISIBLE = "VISIBLE", Mo.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", Mo.HIDDEN = "HIDDEN";
const Xt = Mo, Hi = {};
Hi.MOBILE = "MOBILE", Hi.DESKTOP = "DESKTOP";
const Ya = Hi;
(function(i, n) {
  const t = i();
  function e(a, I, C, s, B) {
    return gA(s - -744, C);
  }
  function A(a, I, C, s, B) {
    return gA(C - 846, B);
  }
  function o(a, I, C, s, B) {
    return gA(s - -665, a);
  }
  function r(a, I, C, s, B) {
    return gA(s - 857, a);
  }
  function g(a, I, C, s, B) {
    return gA(s - 890, B);
  }
  for (; ; )
    try {
      if (-parseInt(r("AE83", 1121, 1137, 1120, 1107)) / 1 + parseInt(g(1147, 1144, 1136, 1152, "EPwh")) / 2 * (-parseInt(r("#xel", 1118, 1128, 1123, 1131)) / 3) + -parseInt(e(-477, -458, "3ID4", -474, -489)) / 4 * (-parseInt(A(1119, 1132, 1125, 1109, "lqI3")) / 5) + parseInt(r("dw8n", 1162, 1150, 1150, 1137)) / 6 + parseInt(o("HrG0", -386, -371, -377, -364)) / 7 * (-parseInt(r("GH]z", 1115, 1124, 1134, 1120)) / 8) + -parseInt(r("@zCE", 1157, 1147, 1141, 1152)) / 9 + parseInt(e(-469, -456, "yIdh", -463, -472)) / 10 * (parseInt(r("#xel", 1102, 1126, 1118, 1118)) / 11) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Xo, -26218 * -27 + 283273 + -597910);
function gA(i, n) {
  i = i - (1 * 1894 + -3315 + 1680);
  const t = Xo();
  let e = t[i];
  if (gA.PLLwzX === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    gA.Yexcrl = a, gA.VAjGxN = {}, gA.PLLwzX = !0;
  }
  const o = t[-10 * -799 + 2412 + 1486 * -7], r = i + o, g = gA.VAjGxN[r];
  return g ? e = g : (gA.hywHQW === void 0 && (gA.hywHQW = !0), e = gA.Yexcrl(e, n), gA.VAjGxN[r] = e), e;
}
function Xo() {
  const i = ["W6/cVx0faW", "WPhdUmoOmCktWQnfWPddLCkTFce", "wSktWO3dRSoSWQRdHW", "lvRdL0aGWRxcK03cL3pcG0rbaW", "WQuZASkRWRS", "W4S+qmkzW6fVc05iifTH", "W4bKW5eqW41FWOlcRCoxmfNdGmkB", "W6vOW7xcUmoG", "WPSNW6BdS0K", "W5tdQvCyrG", "WOjcW67cM8oMxSox", "tuW3Axq", "WPtcTuFcG8otd8odWRv5W7FcTmk1vq", "cmkCWPhdICo2", "qsW8W6BdNeO4kSoSW7ZdQ8kLWRCl", "WPL1wmkdqCkjAmkNCSkgW54uhq", "WOO/z8k9WRa", "WQ8rf8kKaW", "WQ3dNI0", "aSo3WQL7BW", "b0aozrDGmYu", "dXHQFJSziNugk3xdVIy", "m0Tmd8ocgSkef0rqW6NdRa", "zrqlt8kE", "wZaxBSok", "bqCrtXbveq", "pmk/WRhdSmoXWPuimSoGW6u8W5a", "lSkobSkWiNawbmoJmmofWPlcUq", "o8k9W47cQmk2W4yQnq", "W41hlmoiWOq2bq", "b8k3mCkWtSk/qq", "W5lcISkmdConW53dImoICCo0WPm6mG", "wSoGsr/cVJnR", "W4BcVK3cRelcRbNcSmoZW6RdOwuB", "A8oDr8o3", "csRdIt3dQq", "W7DGpCoRW6WRD8kvDmksWRKuAq"];
  return Xo = function() {
    return i;
  }, Xo();
}
function KC(i, n, t, e, A) {
  return gA(t - 42, A);
}
function Us(i, n, t, e, A) {
  return gA(e - -817, i);
}
function Wo(i, n, t, e, A) {
  return gA(A - -82, e);
}
const $o = Ye(void 0);
function jC(i, n, t, e, A) {
  return gA(n - -535, A);
}
$o[Wo(188, 173, 187, "o1rs", 183) + Wo(194, 200, 200, "j!8]", 209) + "e"] = Us("GH]z", -535, -535, -523) + jC(-251, -249, -245, -232, "0JU&") + Wo(198, 208, 211, "hGgL", 193);
function go() {
  const i = le($o);
  if (i === void 0) throw new Error($o[e(-204, "AE83", -206, -196) + n(228, 230, "jnsG") + "e"] + (n(212, 217, "#A%o") + n(247, 252, "Attr") + n(241, 231, "EPwh") + e(-192, "[dMw", -187, -182) + e(-169, "B)Sb", -166, -173) + n(234, 251, "GH]z") + n(237, 248, "HrG0") + t(979, "*zi$", 983, 990, 995)));
  function n(A, o, r, g, a) {
    return Us(r, o - 316, r - 148, A - 769);
  }
  function t(A, o, r, g, a) {
    return KC(A - 277, o - 14, a - 694, g - 30, o);
  }
  function e(A, o, r, g, a) {
    return Wo(A - 25, o - 168, r - 290, o, g - -378);
  }
  return i;
}
const no = (i) => i.length < -7839 + 4499 * -1 + 457 * 27 ? -10375 + -10375 * -1 : i.reduce((t, e) => t + e, 0) / i.length, Se = (i) => Number.parseFloat(i.toFixed(3));
function qC(i) {
  const n = i.getContext("2d");
  n && n.clearRect(577 * 14 + 61 + -8139 * 1, -9375 + -1719 * 3 + -4844 * -3, n.canvas.width, n.canvas.height);
}
const Ys = 1987 + 3 * 401 + -3190 + 0.75, VC = -3872 + 439 * -14 + 2505 * 4, ZC = 5827 * -1 + -9425 + -6 * -2642, zC = -4892 * -1 + -6218 + 1326, XC = "dot-auto-capture-video", On = (i, n) => Math.min(i, n), Ts = ({ height: i, width: n }, t) => {
  const e = On(n, i) * t, A = (n - e) / (1 * -8533 + 2979 + -1852 * -3), o = (i - e) / (1 * -6624 + 898 * 7 + 340), r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, $C = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = Ts(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, AB = ({ height: i, width: n }) => {
  const t = On(n, i), e = t / (-2234 + -568 * 7 + 6213) * 4;
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
};
function eB(i, n) {
  const t = On(n.width, n.height);
  return Se(i * t);
}
function tB({ height: i, width: n }) {
  const t = {};
  return t.height = i, t.width = n, Ts(t, Ys);
}
function oB(i) {
  return $C(i, Ys);
}
function nB(i, n) {
  return eB(i, n) * VC;
}
const iB = "8.0.4", rB = {
  version: iB
}, aB = 4984 + -421 * 1 + -4554 + 0.8100000000000005, _i = {};
_i.max = 100, _i.min = 10;
const Ta = _i, gB = -1 * 2833 + 1794 * -2 + 7141, sB = -2272 * 3 + -9715 + 16731, IB = 1 * 5659 + -6906 + -417 * -3, Ps = "AES-CBC", Hs = "RSA-OAEP", cB = "SHA-256", CB = "image/jpeg", BB = 8884 + 1268 * -7, QB = 3862 * 2 + -3408 + 2 * -2138, _s = "/dot-assets", Pa = "dot_embedded_bg.wasm", EB = "c56a4180-65aa-42ec-a945-5fd21dec0538", xB = ["a1b2c3d4-e5f6-7890-abcd-ef1234567890", "b2c3d4e5-f6a7-8901-bcde-f12345678901", "c3d4e5f6-a7b8-9012-cdef-123456789012", "d4e5f6a7-b8c9-0123-defa-234567890123", "e5f6a7b8-c9d0-1234-efab-345678901234", "f6a7b8c9-d0e1-2345-fabc-456789012345", "17a8b9c0-e1f2-3456-abcd-567890123456", "28b9c0d1-f2a3-4567-bcde-678901234567", "39c0d1e2-a3b4-5678-cdef-789012345678", "40d1e2f3-b4c5-6789-defa-890123456789", "51e2f3a4-c5d6-7890-efab-901234567890", "62f3a4b5-d6e7-8901-fabc-012345678901", "73a4b5c6-e7f8-9012-abcd-123456789012", "84b5c6d7-f8a9-0123-bcde-234567890123", "95c6d7e8-a9b0-1234-cdef-345678901234", "a6d7e8f9-b0c1-2345-defa-456789012345", "b7e8f9a0-c1d2-3456-efab-567890123456"], Ki = (i) => new Promise((n) => {
  setTimeout(n, i);
}), Ks = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? Se(t) : t)), dB = () => rB.version, js = (i) => new URL(i).hostname.replace("www.", ""), Jr = () => js(window.location.href) === "localhost", lB = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i, Ha = (i, n) => Math.abs(i - n);
function uB(i, n) {
  let t;
  return (...e) => {
    t === void 0 && (t = setTimeout(() => {
      clearTimeout(t), t = void 0, i(...e);
    }, n));
  };
}
function hB(i) {
  return i.at(-1) === "/" ? i.slice(-9720 + -9403 * 1 + 19123, -1) : i;
}
function qs(i) {
  return "" + hB(i ?? "") + _s;
}
function Tt(i) {
  return (...n) => {
    Jr() && console[i](...n);
  };
}
const Jn = { log: Tt("log"), warn: Tt("warn"), error: Tt("error"), info: Tt("info"), debug: Tt("debug") }, fB = () => "prod".toLowerCase() === "dev";
class Ur extends Array {
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
    this.length === this.#A && this.splice(0, n.length), this.push(...n);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-667 * 3 + 9091 + -7090);
  }
}
const Vs = (i, n, t = CB) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), Zs = async (i) => Vs(i, 5545 + -4870 * -2 + -1013 * 15), pB = async (i) => Vs(i, 887 * 4 + -1 * 1722 + 1726 * -1, "image/png"), zs = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, 1809 + -1 * 1809, 1916 + -829 * 6 + 3058, t.width, t.height), t;
}, Xs = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(-5846 + 1 * 5846, 0, i.width, i.height);
  return t;
};
async function yB(i, n) {
  const t = zs(i, n);
  return pB(t);
}
const $s = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(n.topLeft.x, n.topLeft.y, n.width, n.height)) : (A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height)), A.stroke());
}, ei = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, g = {};
  g.x = A, g.y = o;
  const a = {};
  a.topLeft = g, a.width = r, a.height = e, a.color = t, $s(i, a, t);
}, $t = (i, n, t, e = 155 + -1 * -6301 + -6456) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(n.x + e, n.y + e, -752 * -9 + -8952 + 2191, 1353 * -7 + 97 + 9381), A.beginPath());
}, mB = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, wB = (i, n) => Object.values(i).every((t) => mB(t, n));
function An(i) {
  const { height: n, width: t } = AB(i), e = (i.width - t) / (1977 + -1 * 1975), A = (i.height - n) / (-5304 + 283 * -35 + 15211), o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function AI(i, n, t) {
  const { height: e, width: A } = t, o = On(i.width, i.height), r = A - o * n * (-7597 * -1 + -9099 + 1504), g = e - o * n * (-13561 + -1 * -13563), a = (i.width - r) / (-1 * 4166 + -7287 + 395 * 29), I = (i.height - g) / (2 * -3136 + -6819 + -1 * -13093), C = {};
  return C.shiftX = a, C.shiftY = I, C.width = r, C.height = g, C;
}
function Ct(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
function Yr() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function _a() {
  return /Android/i.test(navigator.userAgent);
}
function nt() {
  return /Firefox/i.test(navigator.userAgent);
}
function eI() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const DB = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
};
function tI() {
  return navigator.userAgent;
}
function bB() {
  return navigator.userAgentData?.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
function Ao() {
  return !1;
}
function kB() {
  return !0;
}
(function(i, n) {
  function t(a, I, C, s, B) {
    return sA(a - 824, I);
  }
  function e(a, I, C, s, B) {
    return sA(a - 988, s);
  }
  function A(a, I, C, s, B) {
    return sA(B - -494, s);
  }
  const o = i();
  function r(a, I, C, s, B) {
    return sA(B - 122, I);
  }
  function g(a, I, C, s, B) {
    return sA(a - -101, s);
  }
  for (; ; )
    try {
      if (parseInt(A(-382, -392, -376, "OuOb", -388)) / 1 * (-parseInt(A(-385, -379, -381, "a*$^", -381)) / 2) + -parseInt(A(-390, -394, -382, "b3tI", -383)) / 3 + parseInt(g(20, 12, 30, "Bi!7", 19)) / 4 + parseInt(e(1095, 1089, 1107, "0ovP", 1107)) / 5 + parseInt(t(949, "xayG", 954, 946, 955)) / 6 + parseInt(t(950, "WSog", 957, 952, 953)) / 7 * (-parseInt(A(-398, -385, -379, "gNV2", -391)) / 8) + parseInt(r(249, "hfg3", 236, 237, 236)) / 9 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(en, 258698 * 2 + -365703 + 231500);
function en() {
  const i = ["pf3dK8ozW7O", "W7GMW78UrSoBWQ0AW45JxCoYW5u", "aCojWOnBFfRcQCkXWPRcKmkUEHW", "kHXSwmoorMlcN3ruW4D/ea", "f2FdKSknECo4wG", "z8oSACkMpSo3iN/cLuhdOvX+", "hGlcNCommSkndaVdIe1gW65l", "stpdRCkIc8oYcW", "Bb3cHmkAWR/dHMT4WPNcTmodcNG", "lL/cO8oZW60", "W5mUW6/cI8knWOFdNdlcLcpcRui", "WQPMWPSCCv4E", "Dq7dLfpdT8k7W7FdG8k0W5yzW48", "WQ/cIvjOW54", "wCkvWPBdSCk7WQWxWPWdW7hdSw0", "ruJdL8kAzG8dsKiTWPGJiq", "wbddQXZcQwVdVmk+qI/cLfhdQW", "zSkEW4qyka", "rLZdJmka", "W7tdHWTuWPK", "W7tdNrC4WO5Ol3SruSkmbW", "bSopWOnEDvVcQ8kjWRJcLSkHFJ0", "i0j7W5eEw8kXW65Us8otW6rq", "aNKexsefWOu", "W5VdKqGDW7C"];
  return en = function() {
    return i;
  }, en();
}
function sA(i, n) {
  i = i - (-8945 + 3641 * 2 + 1766);
  const t = en();
  let e = t[i];
  if (sA.hDeufx === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    sA.ZXhNyn = a, sA.SAnKII = {}, sA.hDeufx = !0;
  }
  const o = t[-9560 * -1 + -5333 + 3 * -1409], r = i + o, g = sA.SAnKII[r];
  return g ? e = g : (sA.FTbxAD === void 0 && (sA.FTbxAD = !0), e = sA.ZXhNyn(e, n), sA.SAnKII[r] = e), e;
}
function SB({ assetsDirectoryPath: i, bramble: n }) {
  const [t, e] = Z(), A = t !== void 0;
  J(() => {
    async function g() {
      function a(s, B, E, x, Q) {
        return sA(B - -992, Q);
      }
      await n[I(283, 284, 276, 283, "gNV2")](qs(i));
      function I(s, B, E, x, Q) {
        return sA(s - 166, Q);
      }
      function C(s, B, E, x, Q) {
        return sA(E - 16, Q);
      }
      e(n[I(274, 276, 281, 276, "b)@a") + C(147, 134, 139, 138, "Vq$5") + a(-868, -876, -874, -881, "WSog") + "t"]());
    }
    g();
  }, [n, i, e]);
  const o = {};
  o[r("0ovP", 308) + r("lH!o", 296)] = t;
  function r(g, a, I, C, s) {
    return sA(a - 184, g);
  }
  return o[r("L(6D", 302) + "sh"] = A, o;
}
function IA(i, n) {
  i = i - (8928 + 998 * 1 + -9465);
  const t = tn();
  let e = t[i];
  if (IA.DlvXEW === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    IA.AtnwgP = a, IA.hfEIzD = {}, IA.DlvXEW = !0;
  }
  const o = t[668 * -4 + 8139 * 1 + -5467], r = i + o, g = IA.hfEIzD[r];
  return g ? e = g : (IA.pdCrrO === void 0 && (IA.pdCrrO = !0), e = IA.AtnwgP(e, n), IA.hfEIzD[r] = e), e;
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return IA(I - 124, s);
  }
  function e(g, a, I, C, s) {
    return IA(g - 678, I);
  }
  const A = i();
  function o(g, a, I, C, s) {
    return IA(s - 68, g);
  }
  function r(g, a, I, C, s) {
    return IA(g - 859, a);
  }
  for (; ; )
    try {
      if (-parseInt(e(1160, 1146, "JbwK", 1159, 1150)) / 1 * (-parseInt(o("YoZL", 519, 531, 529, 529)) / 2) + parseInt(o("CW68", 540, 556, 553, 548)) / 3 * (parseInt(o("eJ)H", 570, 543, 545, 555)) / 4) + parseInt(o("^5Zj", 532, 540, 537, 544)) / 5 * (parseInt(t(602, 603, 614, 619, "uRu$")) / 6) + parseInt(e(1157, 1172, "OV2[", 1156, 1165)) / 7 * (-parseInt(r(1323, "fqi!", 1339, 1324, 1313)) / 8) + parseInt(t(593, 598, 590, 606, "YoZL")) / 9 + -parseInt(o("^l$4", 527, 528, 525, 535)) / 10 + -parseInt(o("JhjY", 534, 545, 541, 533)) / 11 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(tn, 3 * -144349 + 2 * -15247 + 316 * 4452);
function tn() {
  const i = ["BCoTWROTdq", "WQ7dOgVcNMZdJupcIve", "AmoiWR8Qdq", "zIFcI0aE", "iSk8W6vRamkGW6m3W4uh", "h8oSW4D3aW", "zCo9WR/cTSo8W4OO", "F8oPWQq", "WOipW7K", "W4ebWRG2WROXd8o6", "FmoRWOJdR33dHI/dN1/cNa", "WRxcKmkXlmoY", "W6ddMNtdKWxdI8oqW6JcPCotW6q", "W6hcM8k5WOBdJSkIs8kxqSoPWO7dICoQ", "zCo8hIXFWPFcISkYW5tcNIGrWOxdPG", "ySo1yb3cUSoIyG", "Cv3cIIZcKMNcQLfnACkWp3pcSq", "pwddNgOmW6nvlGG", "W71Tm2ShvuZcQd7cHmko", "rYxcU8oeBIjJqW", "W4fAWQFcIeRdU1XEFbj0gSoymq", "WRaCeHNcNmkhW7Oz", "WPXoWPdcStyGWRrmW4BdLCkqWPu", "zZzLW4tdVmo1W5xdMq", "W6LFl8kbrSkWhf3dLMtdPmk8WQW", "WQxcVmkUimo/", "WP98WPxdHMNcRmkmWOCeWRaEW64+", "WRarsfNdICoDWR5FW6ldUSkRWR/cJfW", "zZ81WRVcOmkoW7xdLILAcaO", "rxJdPhfknYtcUCoPjYBdO8o4", "WQ8WESoaWQy", "WQalW6pdLG"];
  return tn = function() {
    return i;
  }, tn();
}
function GB({ assetsDirectoryPath: i, children: n, bramble: t }) {
  const e = {};
  function A(E, x, Q, l, h) {
    return IA(x - -702, h);
  }
  function o(E, x, Q, l, h) {
    return IA(h - 832, x);
  }
  e[o(1297, "eJ)H", 1318, 1311, 1305) + "le"] = t, e[o(1327, "z7b3", 1326, 1311, 1313) + o(1318, "UpiE", 1307, 1294, 1304) + g(-293, -285, -295, "UORC", -288) + A(-224, -233, -220, -243, "uRu$")] = i;
  function r(E, x, Q, l, h) {
    return IA(Q - 482, h);
  }
  function g(E, x, Q, l, h) {
    return IA(h - -763, l);
  }
  const { sunfish: a, crosshatch: I } = SB(e);
  function C(E, x, Q, l, h) {
    return IA(E - 585, h);
  }
  const s = hA(() => ({ sunfish: a, crosshatch: I, bramble: t }), [a, I, t]), B = {};
  return B[A(-245, -232, -235, -228, "UpiE")] = s, B[C(1053, 1059, 1060, 1057, "s#t^") + C(1063, 1066, 1051, 1077, "uRu$")] = n, b($o[r(932, 929, 945, 945, "7(uG") + g(-289, -282, -288, "UpiE", -286)], B);
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return jA(a - -587, s);
  }
  var e = i();
  function A(g, a, I, C, s) {
    return jA(I - -364, C);
  }
  function o(g, a, I, C, s) {
    return jA(C - -212, I);
  }
  for (; ; )
    try {
      var r = parseInt(A(-227, -229, -223, "lUv!", -213)) / 1 + parseInt(A(-230, -221, -226, "*)uI", -226)) / 2 * (parseInt(A(-238, -220, -230, "Wl&m", -230)) / 3) + -parseInt(t(-446, -445, -454, -443, "7lM(")) / 4 + parseInt(o(-82, -66, "rFbG", -75, -66)) / 5 + -parseInt(o(-72, -85, "rFbG", -80, -80)) / 6 * (-parseInt(A(-234, -225, -225, "&8y%", -230)) / 7) + -parseInt(A(-228, -237, -233, "w#s2", -231)) / 8 * (parseInt(A(-215, -212, -220, "yGx!", -219)) / 9) + -parseInt(o(-76, -63, "Nho7", -69, -63)) / 10;
      if (r === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(on, 586055 + 7 * -109775 + 13422 * 72);
function on() {
  var i = ["WQ8pW7/cNXhdQeZdQ2i", "fSo/W5xdJb58W7O", "WOdcNSk2WQBcHCkQDLe7W7/dLSks", "Fxniia8IW6NdTmkTl8kAuKai", "WQFdQxm+WO1OW79yWPldQCkWdGu", "WQ8mW7pdT1lcUa/dHfRdHsJcJsS", "WP9PW6a1WOq+uG", "ntNdJIZdGgu3nqDpna", "jeCkW7m7W5jmW4ZcQ8k1u8o8", "W67dSXisW6NdSCopWQaxqSojlW", "BJ1UW6tdO8onW6JdILJcLsznsG", "rrf2tKmldeTbqHJdUmomEq", "W7j2DwDfAdpcLW", "t8okoGNcJsRdTmkhWQ3dVCkoWPXg", "WP4LWRCNWPakDmo2xW", "W5pdImkwWPnkWQNdMCoxpmo3W5C", "p8kvpmk0W4JcOWlcLq", "y8oOW7qRzZtcPYtcSmovrSkuEG", "hmk4W4Xbe07cJ8kpDh5XiSko"];
  return on = function() {
    return i;
  }, on();
}
function jA(i, n) {
  i = i - (7272 + -7146 * 1);
  var t = on(), e = t[i];
  if (jA.kvMVPa === void 0) {
    var A = function(I) {
      for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", B = "", E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (var h = 0, f = s.length; h < f; h++)
        B += "%" + ("00" + s.charCodeAt(h).toString(16)).slice(-2);
      return decodeURIComponent(B);
    }, o = function(I, C) {
      var s = [], B = 0, E, x = "";
      I = A(I);
      var Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (var l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    jA.eBKYjN = o, jA.TKkaXa = {}, jA.kvMVPa = !0;
  }
  var r = t[0], g = i + r, a = jA.TKkaXa[g];
  return a ? e = a : (jA.QvuQPr === void 0 && (jA.QvuQPr = !0), e = jA.eBKYjN(e, n), jA.TKkaXa[g] = e), e;
}
const nn = Ye(void 0);
nn.displayName = "TransactionCountingContext";
function Tr() {
  const i = le(nn);
  if (i === void 0)
    throw new Error(`${nn.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
const NB = 2e3;
class RB {
  transactionCountingToken;
  constructor(n) {
    this.transactionCountingToken = n;
  }
  async validateToken() {
    const n = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), NB), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const o = {};
    o.method = "POST", o.headers = A, o.signal = t.signal;
    const r = o, g = await fetch(n, r).catch(() => null);
    return clearTimeout(e), g ? g.status !== 2 * 1654 + -7127 + 4219 * 1 && g.status !== 2610 + 1 * -2209 : !0;
  }
}
class oI {
  #A;
  #e;
  #t;
  #o;
  #n;
  #i;
  #r;
  #a;
  constructor({ hwids: n, tokenHandler: t, transactionType: e }) {
    this.#A = t, this.#n = n, this.#a = e, this.#i = window.location.origin, this.#r = "8.0.4";
  }
  async init(n) {
    if (this.#t = this.shouldCountTransactions(n), Jn.info("Transaction counting is " + (this.#t ? "enabled" : "disabled")), Jr()) {
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
class vB extends oI {
  trackLivenessTransaction() {
    this.prepareAndSendTransaction();
  }
  trackTransaction() {
  }
}
const je = {};
je.FACE = "web-capture-face", je.DOCUMENT = "web-capture-document", je.MAGNIFEYE = "web-capture-magnifeye", je.SMILE = "web-capture-smile", je.PALM = "web-capture-palm", je.EYEGAZE = "web-capture-eyegaze";
const qe = je, ji = {};
ji.LIVENESS = "liveness", ji.CAPTURE = "capture";
const We = ji, FB = { [qe.FACE]: We.CAPTURE, [qe.DOCUMENT]: We.CAPTURE, [qe.MAGNIFEYE]: We.LIVENESS, [qe.SMILE]: We.LIVENESS, [qe.PALM]: We.CAPTURE, [qe.EYEGAZE]: We.LIVENESS }, MB = FB;
class WB {
  create({ hwids: n, tokenHandler: t, transactionType: e }) {
    const A = MB[e];
    switch (A) {
      case We.CAPTURE:
        const o = {};
        return o.hwids = n, o.tokenHandler = t, o.transactionType = e, new oI(o);
      case We.LIVENESS:
        const r = {};
        return r.hwids = n, r.tokenHandler = t, r.transactionType = e, new vB(r);
      default:
        throw new Error("Unknown capture type: " + A);
    }
  }
}
function LB(i, n) {
  const { crosshatch: t, bramble: e } = go(), [A, o] = Z(null);
  J(() => {
    if (!t) return;
    (async () => {
      const a = new WB(), I = new RB(n), C = a.create({ hwids: e.getHwids(), tokenHandler: I, transactionType: i });
      await C.init(t), o(C);
    })();
  }, [n, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function OB({
  children: i,
  transactionCountingToken: n,
  transactionType: t
}) {
  const { transactionCounting: e } = LB(t, n), A = hA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ b(nn.Provider, { value: A, children: i });
}
function JB({ children: i, value: n }) {
  const { crosshatch: t } = go(), { transactionCounting: e } = Tr(), A = t?.isValid && e?.isTransactionTokenValid ? zo.Higher : zo.Lower, o = hA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ b(Ln.Provider, { value: o, children: i });
}
class UB extends ZA {
  static contextType = Ln;
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
    return this.context?.appState === VA.ERROR ? null : this.props.children;
  }
}
const YB = Lt.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, TB = Lt.div`
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
function PB() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const HB = ts(
  ({ detectionDetails: i, isImageMirror: n }, t) => PB() ? (console.log(i), /* @__PURE__ */ b(WA, { children: [
    /* @__PURE__ */ b(YB, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ b(TB, { children: /* @__PURE__ */ b("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
), rn = Ye(void 0);
rn.displayName = "AnalyticsContext";
function nI() {
  const i = le(rn);
  if (i === void 0)
    throw new Error(`${rn.displayName} must be used within a AnalyticsProvider`);
  return i;
}
var _B = /* @__PURE__ */ Symbol.for("preact-signals");
function Un() {
  if (Le > -1 * 5703 + -1459 + 7163)
    Le--;
  else {
    for (var i, n = !1; eo !== void 0; ) {
      var t = eo;
      for (eo = void 0, qi++; t !== void 0; ) {
        var e = t.o;
        if (t.o = void 0, t.f &= -3, !(-6771 + -1 * -1715 + 5064 & t.f) && gI(t)) try {
          t.c();
        } catch (A) {
          !n && (i = A, n = !0);
        }
        t = e;
      }
    }
    if (qi = 14433 + 849 * -17, Le--, n) throw i;
  }
}
function iI(i) {
  if (Le > -5246 + 265 * 12 + -1 * -2066) return i();
  Le++;
  try {
    return i();
  } finally {
    Un();
  }
}
var L = void 0;
function Ka(i) {
  var n = L;
  L = void 0;
  try {
    return i();
  } finally {
    L = n;
  }
}
var eo = void 0, Le = 0, qi = -1174 + 2 * 587, an = 0;
function rI(i) {
  if (L !== void 0) {
    var n = i.n;
    if (n === void 0 || n.t !== L)
      return n = { i: 0, S: i, p: L.s, n: void 0, t: L, e: void 0, x: void 0, r: n }, L.s !== void 0 && (L.s.n = n), L.s = n, i.n = n, 7 * -1124 + 9722 + -1822 & L.f && i.S(n), n;
    if (n.i === -1)
      return n.i = 26 * 313 + 3081 + -11219, n.n !== void 0 && (n.n.p = n.p, n.p !== void 0 && (n.p.n = n.n), n.p = L.s, n.n = void 0, L.s.n = n, L.s = n), n;
  }
}
function EA(i, n) {
  this.v = i, this.i = -10 * -439 + -7759 + -1 * -3369, this.n = void 0, this.t = void 0, this.W = n?.watched, this.Z = n?.unwatched, this.name = n?.name;
}
EA.prototype.brand = _B, EA.prototype.h = function() {
  return !0;
}, EA.prototype.S = function(i) {
  var n = this, t = this.t;
  t !== i && i.e === void 0 && (i.x = t, this.t = i, t !== void 0 ? t.e = i : Ka(function() {
    var e;
    (e = n.W) == null || e.call(n);
  }));
}, EA.prototype.U = function(i) {
  var n = this;
  if (this.t !== void 0) {
    var t = i.e, e = i.x;
    t !== void 0 && (t.x = e, i.e = void 0), e !== void 0 && (e.e = t, i.x = void 0), i === this.t && (this.t = e, e === void 0 && Ka(function() {
      var A;
      (A = n.Z) == null || A.call(n);
    }));
  }
}, EA.prototype.subscribe = function(i) {
  var n = this, t = {};
  return t.name = "sub", Ot(function() {
    var e = n.value, A = L;
    L = void 0;
    try {
      i(e);
    } finally {
      L = A;
    }
  }, t);
}, EA.prototype.valueOf = function() {
  return this.value;
}, EA.prototype.toString = function() {
  return this.value + "";
}, EA.prototype.toJSON = function() {
  return this.value;
}, EA.prototype.peek = function() {
  var i = L;
  L = void 0;
  try {
    return this.value;
  } finally {
    L = i;
  }
}, Object.defineProperty(EA.prototype, "value", { get: function() {
  var i = rI(this);
  return i !== void 0 && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (qi > 9384 + -1 * -9743 + -19027) throw new Error("Cycle detected");
    this.v = i, this.i++, an++, Le++;
    try {
      for (var n = this.t; void (2 * -4219 + -3144 + 5791 * 2) !== n; n = n.x) n.t.N();
    } finally {
      Un();
    }
  }
} });
function aI(i, n) {
  return new EA(i, n);
}
function gI(i) {
  for (var n = i.s; n !== void 0; n = n.n) if (n.S.i !== n.i || !n.S.h() || n.S.i !== n.i) return !0;
  return !1;
}
function sI(i) {
  for (var n = i.s; n !== void 0; n = n.n) {
    var t = n.S.n;
    if (t !== void 0 && (n.r = t), n.S.n = n, n.i = -1, n.n === void 0) {
      i.s = n;
      break;
    }
  }
}
function II(i) {
  for (var n = i.s, t = void 0; n !== void 0; ) {
    var e = n.p;
    n.i === -1 ? (n.S.U(n), e !== void 0 && (e.n = n.n), n.n !== void 0 && (n.n.p = e)) : t = n, n.S.n = n.r, n.r !== void 0 && (n.r = void 0), n = e;
  }
  i.s = t;
}
function Ve(i, n) {
  EA.call(this, void 0), this.x = i, this.s = void 0, this.g = an - 1, this.f = -2047 + 1 * 6087 + 1 * -4036, this.W = n?.watched, this.Z = n?.unwatched, this.name = n?.name;
}
Ve.prototype = new EA(), Ve.prototype.h = function() {
  if (this.f &= -3, -1 * -3739 + -6394 + -664 * -4 & this.f) return !1;
  if (9379 + 2 * -3493 + -2361 == (36 & this.f) || (this.f &= -5, this.g === an)) return !0;
  if (this.g = an, this.f |= 5674 + 7477 * 1 + -13150, this.i > 3742 + -4013 * -1 + -7755 && !gI(this)) return this.f &= -2, !0;
  var i = L;
  try {
    sI(this), L = this;
    var n = this.x();
    (16 & this.f || this.v !== n || 10254 + -1709 * 6 === this.i) && (this.v = n, this.f &= -(1 * 3639 + 5764 + -13 * 722), this.i++);
  } catch (t) {
    this.v = t, this.f |= -5005 + 2 * -1363 + 7747, this.i++;
  }
  return L = i, II(this), this.f &= -2, !0;
}, Ve.prototype.S = function(i) {
  if (this.t === void 0) {
    this.f |= -838 + -3343 * -2 + -1453 * 4;
    for (var n = this.s; n !== void 0; n = n.n) n.S.S(n);
  }
  EA.prototype.S.call(this, i);
}, Ve.prototype.U = function(i) {
  if (this.t !== void 0 && (EA.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -33;
    for (var n = this.s; n !== void 0; n = n.n) n.S.U(n);
  }
}, Ve.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= -1141 + -425 * -19 + -1732 * 4;
    for (var i = this.t; i !== void 0; i = i.x) i.t.N();
  }
}, Object.defineProperty(Ve.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var i = rI(this);
  if (this.h(), i !== void 0 && (i.i = this.i), -1 * -1301 + 8020 + -9305 & this.f) throw this.v;
  return this.v;
} });
function ja(i, n) {
  return new Ve(i, n);
}
function cI(i) {
  var n = i.u;
  if (i.u = void 0, typeof n == "function") {
    Le++;
    var t = L;
    L = void 0;
    try {
      n();
    } catch (e) {
      throw i.f &= -2, i.f |= 1382 * -2 + 6025 + 1 * -3253, Pr(i), e;
    } finally {
      L = t, Un();
    }
  }
}
function Pr(i) {
  for (var n = i.s; n !== void 0; n = n.n) n.S.U(n);
  i.x = void 0, i.s = void 0, cI(i);
}
function KB(i) {
  if (L !== this) throw new Error("Out-of-order effect");
  II(this), L = i, this.f &= -2, -7740 + 1237 * -1 + 8985 & this.f && Pr(this), Un();
}
function dt(i, n) {
  this.x = i, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32, this.name = n?.name;
}
dt.prototype.c = function() {
  var i = this.S();
  try {
    if (3757 + -6710 * -1 + 1 * -10459 & this.f || this.x === void 0) return;
    var n = this.x();
    typeof n == "function" && (this.u = n);
  } finally {
    i();
  }
}, dt.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, cI(this), sI(this), Le++;
  var i = L;
  return L = this, KB.bind(this, i);
}, dt.prototype.N = function() {
  !(5235 + -5233 * 1 & this.f) && (this.f |= 3918 + 4749 * 1 + 1 * -8665, this.o = eo, eo = this);
}, dt.prototype.d = function() {
  this.f |= 6464 + -7283 * 1 + 827, 3 * -809 + -921 + 3349 & this.f || Pr(this);
}, dt.prototype.dispose = function() {
  this.d();
};
function Ot(i, n) {
  var t = new dt(i, n);
  try {
    t.c();
  } catch (A) {
    throw t.d(), A;
  }
  var e = t.d.bind(t);
  return e[Symbol.dispose] = e, e;
}
var Hr, ti, ho = typeof window < "u" && !!window.__PREACT_SIGNALS_DEVTOOLS__, CI = [], BI = [];
Ot(function() {
  Hr = this.N;
})();
function ht(i, n) {
  R[i] = n.bind(null, R[i] || function() {
  });
}
function fo(i) {
  ti && ti(), ti = i && i.S();
}
function QI(i) {
  var n = this, t = i.data, e = gt(t);
  e.value = t;
  var A = hA(function() {
    for (var g = n, a = n.__v; a = a.__; ) if (a.__c) {
      a.__c.__$f |= 4;
      break;
    }
    var I = ja(function() {
      var E = e.value.value;
      return E === 0 ? 18 * 533 + 4543 * -1 + 1 * -5051 : E === !0 ? "" : E || "";
    }), C = ja(function() {
      return !Array.isArray(I.value) && !Ng(I.value);
    }), s = Ot(function() {
      if (this.N = EI, C.value) {
        var E = I.value;
        g.__v && g.__v.__e && g.__v.__e.nodeType === 3 && (g.__v.__e.data = E);
      }
    }), B = n.__$u.d;
    return n.__$u.d = function() {
      s(), B.call(this);
    }, [C, I];
  }, []), o = A[-703 + 2147 * 1 + -1444], r = A[-8229 + -3449 * -1 + 4781];
  return o.value ? r.peek() : r.value;
}
QI.displayName = "ReactiveTextNode";
var Vi = {};
Vi.configurable = !0, Vi.value = void 0;
var Zi = {};
Zi.configurable = !0, Zi.value = QI;
var zi = {};
zi.configurable = !0, zi.get = function() {
  var i = {};
  return i.data = this, i;
};
var Xi = {};
Xi.configurable = !0, Xi.value = 1;
var Pt = {};
Pt.constructor = Vi, Pt.type = Zi, Pt.props = zi, Pt.__b = Xi, Object.defineProperties(EA.prototype, Pt), ht("__b", function(i, n) {
  if (ho && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), typeof n.type == "string") {
    var t, e = n.props;
    for (var A in e) if (A !== "children") {
      var o = e[A];
      o instanceof EA && (t || (n.__np = t = {}), t[A] = o, e[A] = o.peek());
    }
  }
  i(n);
}), ht("__r", function(i, n) {
  if (ho && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.enterComponent(n), n.type !== WA) {
    fo();
    var t, e = n.__c;
    e && (e.__$f &= -2, (t = e.__$u) === void 0 && (e.__$u = t = (function(A) {
      var o;
      return Ot(function() {
        o = this;
      }), o.c = function() {
        e.__$f |= 2946 * -1 + 1 * 619 + 2328, e.setState({});
      }, o;
    })())), fo(t);
  }
  i(n);
}), ht("__e", function(i, n, t, e) {
  ho && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), fo(), i(n, t, e);
}), ht("diffed", function(i, n) {
  ho && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), fo();
  var t;
  if (typeof n.type == "string" && (t = n.__e)) {
    var e = n.__np, A = n.props;
    if (e) {
      var o = t.U;
      if (o) for (var r in o) {
        var g = o[r];
        g !== void 0 && !(r in e) && (g.d(), o[r] = void 0);
      }
      else o = {}, t.U = o;
      for (var a in e) {
        var I = o[a], C = e[a];
        I === void 0 ? (I = jB(t, a, C, A), o[a] = I) : I.o(C, A);
      }
    }
  }
  i(n);
});
function jB(i, n, t, e) {
  var A = n in i && i.ownerSVGElement === void 0, o = aI(t);
  return { o: function(r, g) {
    o.value = r, e = g;
  }, d: Ot(function() {
    this.N = EI;
    var r = o.value.value;
    e[n] !== r && (e[n] = r, A ? i[n] = r : r != null && (r !== !1 || n[-3956 + -1 * 7422 + 1897 * 6] === "-") ? i.setAttribute(n, r) : i.removeAttribute(n));
  }) };
}
ht("unmount", function(i, n) {
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
      var g = r.__$u;
      g && (r.__$u = void 0, g.d());
    }
  }
  i(n);
}), ht("__h", function(i, n, t, e) {
  (e < 432 * -2 + 1 * 6833 + -5966 || e === 9) && (n.__$f |= 2), i(n, t, e);
}), ZA.prototype.shouldComponentUpdate = function(i, n) {
  var t = this.__$u, e = t && t.s !== void 0;
  for (var A in n) return !0;
  if (this.__f || typeof this.u == "boolean" && this.u === !0) {
    var o = 2 & this.__$f;
    if (!(e || o || 4 & this.__$f) || 1 & this.__$f) return !0;
  } else if (!(e || -2445 * -1 + 6396 + -1 * 8837 & this.__$f) || -6256 + -12 * 522 + 1 * 12523 & this.__$f) return !0;
  for (var r in i) if (r !== "__source" && i[r] !== this.props[r]) return !0;
  for (var g in this.props) if (!(g in i)) return !0;
  return !1;
};
function gt(i, n) {
  return Z(function() {
    return aI(i, n);
  })[-871 * -7 + 1 * 3462 + -9559];
}
var qB = typeof requestAnimationFrame > "u" ? setTimeout : function(i) {
  var n = function() {
    clearTimeout(t), cancelAnimationFrame(e), i();
  }, t = setTimeout(n, 35), e = requestAnimationFrame(n);
}, VB = function(i) {
  queueMicrotask(function() {
    queueMicrotask(i);
  });
};
function ZB() {
  iI(function() {
    for (var i; i = CI.shift(); ) Hr.call(i);
  });
}
function zB() {
  -1 * -6662 + -8890 + 743 * 3 === CI.push(this) && (R.requestAnimationFrame || qB)(ZB);
}
function XB() {
  iI(function() {
    for (var i; i = BI.shift(); ) Hr.call(i);
  });
}
function EI() {
  14574 + -14573 * 1 === BI.push(this) && (R.requestAnimationFrame || VB)(XB);
}
function $B(i, n) {
  var t = DA(i);
  t.current = i, J(function() {
    return Ot(function() {
      return this.N = zB, t.current();
    }, n);
  }, []);
}
function AQ({ analytics: i, crosshatch: n }) {
  if (!Jr())
    return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function eQ({ analytics: i, apiKey: n, redfin: t, crosshatch: e, bramble: A }) {
  const o = {};
  o.analytics = i, o.crosshatch = e;
  const r = AQ(o), g = gt(t);
  return g.value = t, J(() => {
    r && (Jn.info("Analytics is " + (r?.shouldReportAnalytics(e) ? "enabled" : "disabled")), r.init(n, A.getCustomerName(), g));
  }, [r, A, n, e, g]), r;
}
function tQ({
  analytics: i,
  apiKey: n,
  children: t
}) {
  const { crosshatch: e, bramble: A } = go(), { redfin: o } = ue(), r = eQ({
    analytics: i,
    redfin: o,
    crosshatch: e,
    bramble: A,
    apiKey: n
  }), g = hA(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ b(rn.Provider, { value: g, children: t });
}
const gn = Ye(void 0);
gn.displayName = "CameraServiceContext";
function xI() {
  const i = le(gn);
  if (i === void 0)
    throw new Error(`${gn.displayName} must be used within a CameraServiceProvider`);
  return i;
}
async function dI() {
  return navigator.mediaDevices.enumerateDevices();
}
async function oi() {
  return (await dI()).filter((n) => n.kind === "videoinput");
}
function yt(i) {
  i.getTracks().forEach((t) => t.stop());
}
function $i(i) {
  return i.getVideoTracks()[12765 + 345 * -37];
}
function sn() {
  const i = ["W6eYtwFcKW", "W4xdKSkzWPzxWQdcPmkFeSkHWP/cLmo2", "WR8msxZcMW", "WR/dP1LJWPm", "WQhdP1nXWOq", "vmkFWOa", "oCoTW5FdNaddQcJcTvVdOttcLG", "rmkYWRNdVSoismkRW4lcOCoudCoPWQ0", "mhVcI8oPW4C", "FG3cHXmRW4xdTSkByMycASo1", "WPVdQKFcTGNdG8oiW5/dUJ/dKSo9da", "W6/dLN7dR8kg", "BKRdK8keWQG", "W5H3cIldPmoHg2L8W7/dRbj+", "WOyNwfFcQa", "dCoVW5FcRCo2", "W5KLWOdcI8kS", "B8oTW6jABwdcImoqA8kqw8k9WPW", "vmk6WOhdVSkZWPRdOgpcUSoxWONdLa", "W4SmftxdT8oNW5NdLXiXzSkBW5O", "ymk4WOhcJ0u", "f8ktWRSeja", "WR3cJY7cR8o9W6zTaHxdPNdcIZK", "mSk8WRSjiq", "sei3yJK", "AxhcMINcRv/cV8o1BIqDuLa", "q8koWPO1tW", "nmk4WO3dQmo7W6tdKdKsectcM8kz", "W5TYcYldPmoSgKz1W7tdLXjT", "qZNdUbJcRw/cMHbkWPnxiCkG", "d0nYnSk7", "W6O7xLBcVW", "o8o+W7dcL8kq", "hLHvWQRdPa", "e1DaWP3dOW", "d05PmG", "WQFcLWpdVq"];
  return sn = function() {
    return i;
  }, sn();
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return xA(g - 795, C);
  }
  const e = i();
  function A(g, a, I, C, s) {
    return xA(I - 145, s);
  }
  function o(g, a, I, C, s) {
    return xA(s - -650, g);
  }
  function r(g, a, I, C, s) {
    return xA(g - -297, s);
  }
  for (; ; )
    try {
      if (-parseInt(o("u!Xy", -461, -442, -444, -454)) / 1 + parseInt(r(-100, -112, -105, -84, "Nm$j")) / 2 + parseInt(t(1004, 1015, 1004, "(sFJ", 1001)) / 3 + -parseInt(t(1013, 999, 1032, "bWdm", 1015)) / 4 + parseInt(t(998, 1015, 982, "bWdm", 995)) / 5 + parseInt(A(377, 356, 362, 380, "RiyB")) / 6 + -parseInt(r(-97, -112, -113, -104, "x[5L")) / 7 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(sn, -686990 + 1 * 1125381);
function xA(i, n) {
  i = i - 193;
  const t = sn();
  let e = t[i];
  if (xA.zfJYmm === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    xA.fFZxpd = a, xA.BLRPYq = {}, xA.zfJYmm = !0;
  }
  const o = t[9864 + -2 * 1907 + -3025 * 2], r = i + o, g = xA.BLRPYq[r];
  return g ? e = g : (xA.vbcGFR === void 0 && (xA.vbcGFR = !0), e = xA.fFZxpd(e, n), xA.BLRPYq[r] = e), e;
}
function oQ(i) {
  const n = new ArrayBuffer(i[e(-376, "LE7g", -394, -384, -392) + "h"]), t = new Uint8Array(n);
  function e(g, a, I, C, s) {
    return xA(s - -597, a);
  }
  function A(g, a, I, C, s) {
    return xA(I - -749, s);
  }
  function o(g, a, I, C, s) {
    return xA(s - -275, a);
  }
  for (let g = -2070 * 1 + -1 * -3103 + 1033 * -1, a = i[o(-58, "43&4", -56, -78, -62) + "h"]; g < a; g++)
    if (o(-48, "bWdm", -43, -35, -46) !== e(-366, "7AKo", -369, -373, -381)) t[g] = i[r(-768, -774, "xN6$") + o(-86, "bWdm", -83, -89, -71)](g);
    else {
      const I = new _0xf7410e(_0x4d91bc);
      return _0x4be3f5[o(-46, "$BS^", -62, -48, -49)](I[r(-783, -802, "d5D6") + "e"](function(C, s) {
        function B(E, x, Q, l, h) {
          return A(E - 137, x - 340, x - -75, l - 465, h);
        }
        return C + _0x1b1046[B(-637, -626, -612, -642, "R$@a") + B(-583, -600, -615, -615, "l*H1") + "de"](s);
      }, ""));
    }
  function r(g, a, I, C, s) {
    return xA(a - -995, I);
  }
  return n;
}
function In() {
  const i = ["W7rDWRy6", "nWOAW6ZcJG", "eCkQlv/cOa", "W5NcQSkOWRhdJaHlWO3cKcq", "W6ZdLYpdNwKSvmkuW6FdJdufjq", "omoDWOO+fG", "WQNcG2y", "F8k2WOddSCkV", "wXNdTrZdJHGuWPiQvSkKpmkz", "W5hdUCo3WP8", "W4ldV8odW5tdTq", "W78gehm", "kCkuWQ0", "eKpdQvJcTq", "W6pcR3lcMY5/eW", "W70abMhcQG", "dxhcRCk6W4WSW5ZcThZcRCkOW5q", "WRpdQxZcNZG", "W5S6W71MveK5", "W5ddQ8kSWOxcSq", "lmkTWOBdQa", "rCkBWP8mpG", "fSkSj3K", "WOBdUmoM", "odFcRJz0k8oGlmobpCo7WOldSW", "W7PbA8owfq", "WPldPqWYgW", "WRlcKLxcT8oG", "pKVcQSo8", "WRFdS3dcJW", "W696wSkxpG", "yCoMlCk+ca", "W7Dzqmkg", "wqPRlCof", "WQ1gtgNcIColWOOmxq", "yXJdTCkOBSo4WORdMCk3AmkxWOCS", "AL9gWRldGLq2AGikamk0wdG", "WO3cQSkTW45kW6H9WQVdNg3dQmkR", "A8o5jmkHdG", "oJBcQJ50tSkvimoyiCoI", "zwtdSwi", "WQ9bssJdP8oRWQusDav3", "DgFdR2iKW50RWQVdUW", "W6HddsddUc/dUW", "W5RdOmoQWPua", "W4u4W44zzW", "o8kYgc3dLa", "W5vBWR81tmkoW4lcJbm", "DSofW6tdPwyXWPRdTfbHW47dTCot", "W6GAuuZdMGBdQ8ohWRXi", "W7H1tG", "W7O7WR/cIq", "pSobWPa8gW", "WR7cJSkzWP/dKhRcTdCeW4TBfCkR", "nCoGkmkUAW", "W65rFCoWga", "W4m0j8oJqG", "W7NdJ8olW5RcIa", "W4nyW4X1WQ9Yud1f", "W5ZcRCkTWRdcGfmMW7ZcOHHMlSkxpa", "W6KvWRtcLsy", "WO3dImkSWP3cPWFdIq"];
  return In = function() {
    return i;
  }, In();
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return K(g - -99, I);
  }
  function e(g, a, I, C, s) {
    return K(C - -934, s);
  }
  function A(g, a, I, C, s) {
    return K(a - -922, s);
  }
  function o(g, a, I, C, s) {
    return K(C - 664, I);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(A(-456, -454, -480, -443, "9K]f")) / 1 * (parseInt(A(-457, -439, -467, -444, "fhkX")) / 2) + parseInt(e(-503, -512, -478, -484, "&[ij")) / 3 * (parseInt(t(378, 362, "fhkX", 388, 379)) / 4) + parseInt(e(-456, -502, -477, -476, "EwIp")) / 5 + parseInt(t(377, 379, "TX6v", 393, 370)) / 6 * (-parseInt(o(1116, 1141, "9K]f", 1139, 1108)) / 7) + -parseInt(A(-470, -474, -469, -476, "WjQC")) / 8 * (parseInt(A(-421, -440, -435, -466, "t*%^")) / 9) + parseInt(e(-493, -487, -507, -492, "GrZR")) / 10 + -parseInt(o(1149, 1155, "8^KQ", 1134, 1125)) / 11 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(In, -548 * -1726 + -198776 * 3 + 3 * 65353);
async function nQ() {
  const i = {};
  i[o(626, 582, 630, 611, "qM*]")] = Ps, i[r(1152, 1162, 1181, "TXCm", 1175) + "h"] = 256;
  const n = await window[r(1197, 1180, 1142, "9XPc", 1167) + "o"][o(610, 597, 595, 609, ")Nox") + "e"][e("CnGc", 1243, 1242, 1213) + e("bKCV", 1239, 1239, 1217) + "y"](i, !0, [e("cac#", 1212, 1232, 1220) + "pt", e("N#sb", 1217, 1233, 1248) + "pt"]), t = Uint8Array[r(1182, 1176, 1130, "bKCV", 1151)](Array(5345 * -1 + 1 * -8539 + 13900)[a(-300, -292, "Sj9q", -279, -309)](6534 + 595 * 7 + 823 * -13));
  function e(I, C, s, B, E) {
    return K(B - 781, I);
  }
  const A = window[a(-272, -281, "AD1l", -304, -302) + "o"][e("k61y", 1253, 1222, 1240) + a(-300, -259, "9Y91", -293, -273) + r(1153, 1129, 1152, "5Rbj", 1136)](t);
  function o(I, C, s, B, E) {
    return K(B - 149, E);
  }
  function r(I, C, s, B, E) {
    return K(E - 695, B);
  }
  const g = {};
  g[o(636, 619, 581, 606, "UDdO")] = n, g.iv = A;
  function a(I, C, s, B, E) {
    return K(E - -763, s);
  }
  return g;
}
async function iQ(i) {
  function n(E, x, Q, l, h) {
    return K(E - -805, l);
  }
  const { iv: t, key: e } = await nQ(), A = new Uint8Array(i), o = {};
  o[n(-362, -356, -377, "FY@@")] = Ps, o.iv = t;
  const r = await window[I(193, 222, "XHd2") + "o"][I(250, 256, "k61y") + "e"][I(252, 231, "P0fO") + "pt"](o, e, A);
  function g(E, x, Q, l, h) {
    return K(h - -962, l);
  }
  function a(E, x, Q, l, h) {
    return K(l - 931, h);
  }
  function I(E, x, Q, l, h) {
    return K(x - -233, Q);
  }
  const C = await window[B(1360, "5O6i", 1393, 1335, 1363) + "o"][I(210, 211, "XC[F") + "e"][I(240, 245, "FY@@") + a(1421, 1418, 1408, 1416, "CnGc")](g(-503, -501, -485, "P0fO", -478), e), s = {};
  s[B(1347, "e(cj", 1402, 1374, 1372) + "ge"] = r;
  function B(E, x, Q, l, h) {
    return K(h - 884, x);
  }
  return s[g(-544, -496, -525, "t*%^", -516)] = C, s.iv = t, s;
}
function K(i, n) {
  i = i - (14313 + -3 * 4628);
  const t = In();
  let e = t[i];
  if (K.XIlRcR === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    K.xAbkBi = a, K.JUZDto = {}, K.XIlRcR = !0;
  }
  const o = t[4261 * 2 + -5004 + -3518], r = i + o, g = K.JUZDto[r];
  return g ? e = g : (K.EGijHT === void 0 && (K.EGijHT = !0), e = K.xAbkBi(e, n), K.JUZDto[r] = e), e;
}
async function rQ(i) {
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return cA(s - -910, a);
  }
  function e(g, a, I, C, s) {
    return cA(s - -794, I);
  }
  function A(g, a, I, C, s) {
    return cA(g - 520, C);
  }
  function o(g, a, I, C, s) {
    return cA(s - -136, I);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(A(771, 771, 763, "Gk5g", 766)) / 1 + parseInt(A(749, 744, 726, "iX2M", 755)) / 2 * (-parseInt(A(721, 689, 752, "Z0vR", 719)) / 3) + -parseInt(A(774, 802, 734, "&#j)", 821)) / 4 * (-parseInt(t(-645, "$IwZ", -662, -600, -626)) / 5) + parseInt(e(-494, -546, "[*1Y", -496, -498)) / 6 + parseInt(e(-472, -553, "ifB0", -560, -517)) / 7 * (parseInt(A(779, 780, 733, "rzCb", 809)) / 8) + -parseInt(o(54, 112, "[*1Y", 56, 71)) / 9 + -parseInt(A(800, 824, 823, "Vkn]", 847)) / 10 * (-parseInt(o(81, 118, "t17L", 45, 81)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Bn, 17383 * 49 + -844382 + 347 * 2433);
function wA(i, n, t, e, A) {
  return cA(A - -387, e);
}
const qa = 9263 + -1 * 5737 + -1026, lI = -1 * -7667 + 8288 + -2491 * 5, uI = -1 * 6587 + 7417 * -1 + 7003 * 2, hI = 4342 + 2171 * -2 + 0.5, fI = {};
function uA(i, n, t, e, A) {
  return cA(n - -587, i);
}
fI[lA(-201, -124, "wC$0", -164)] = 1920;
const pI = {};
pI[lA(-102, -111, "Sg#L", -144)] = 1080;
const yI = {};
yI[wA(-94, -86, -159, "uLlb", -129)] = 30;
const cn = {};
cn[fA(1126, 1081, 1161, "rzCb")] = fI, cn[uA("Gk5g", -369) + "t"] = pI;
function lA(i, n, t, e, A) {
  return cA(e - -435, t);
}
function FA(i, n, t, e, A) {
  return cA(t - -131, e);
}
cn[wA(-181, -119, -109, "*[Dh", -155) + uA("d(WD", -383)] = yI;
const mI = {};
mI[lA(-135, -114, "(f&h", -140)] = 1920;
const wI = {};
wI[wA(-177, -160, -184, "Vkn]", -175)] = 1080;
const Lo = {};
Lo[uA("lyrL", -342)] = mI, Lo[lA(-238, -186, "m08W", -196) + "t"] = wI, Lo[fA(1192, 1150, 1186, "d(WD") + lA(-177, -228, "t@^8", -189)] = 30;
const DI = {};
DI[fA(1202, 1201, 1196, "9r&z")] = 1;
const bI = {};
bI[fA(1202, 1199, 1247, "9r&z")] = 1;
const kI = {};
kI[wA(-120, -51, -75, "TJm2", -94)] = 1;
const Oo = {};
Oo[fA(1196, 1228, 1181, "Z0vR")] = DI, Oo[FA(50, 35, 75, "lyrL") + "t"] = bI, Oo[fA(1113, 1105, 1157, "Q)r@") + fA(1156, 1125, 1205, "t@^8")] = kI;
function cA(i, n) {
  i = i - (-5335 + 2 * -3869 + 13273);
  const t = Bn();
  let e = t[i];
  if (cA.lWoObr === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    cA.PIrqeC = a, cA.BLYoLs = {}, cA.lWoObr = !0;
  }
  const o = t[1259 + -7702 * 1 + 6443], r = i + o, g = cA.BLYoLs[r];
  return g ? e = g : (cA.JNeoNu === void 0 && (cA.JNeoNu = !0), e = cA.PIrqeC(e, n), cA.BLYoLs[r] = e), e;
}
const SI = {};
SI[fA(1162, 1191, 1190, "d(WD")] = 1;
const GI = {};
GI[wA(-176, -161, -200, "Hds)", -172)] = 1;
const NI = {};
NI[FA(139, 198, 166, "JmAN")] = 1;
const Jo = {};
Jo[lA(-222, -190, "lyrL", -190)] = SI, Jo[FA(154, 167, 139, "*[Dh") + "t"] = GI, Jo[lA(-185, -159, ")03e", -136) + fA(1170, 1128, 1212, "LUgv")] = NI;
const Kt = {};
Kt[fA(1124, 1080, 1140, "m08W")] = cn, Kt[wA(-144, -85, -157, "Hds)", -123) + lA(-131, -128, "t17L", -147)] = Lo, Kt[lA(-247, -181, "[*1Y", -204)] = Oo, Kt[fA(1153, 1135, 1180, "7]IZ") + uA("LUgv", -325)] = Jo;
const Cn = Kt, Ze = {};
Ze[lA(-268, -203, "lyrL", -222) + lA(-165, -160, "t17L", -150) + fA(1148, 1158, 1143, "7]IZ")] = qa, Ze[fA(1188, 1173, 1190, "*[Dh") + wA(-193, -179, -179, "jsp1", -150) + uA("Nr^i", -368) + lA(-156, -142, "wC$0", -172)] = Cn[wA(-119, -175, -165, "lyrL", -146)], Ze[wA(-107, -176, -137, "*[Dh", -126) + FA(152, 126, 137, ")03e") + uA("t17L", -364) + wA(-142, -101, -90, "v89$", -134)] = Cn[FA(120, 99, 136, "7]IZ") + fA(1152, 1118, 1127, "!ywX")], Ze[uA("!OAe", -321) + lA(-194, -139, "ifB0", -160)] = uI, Ze[wA(-210, -205, -139, "IfSi", -163) + wA(-130, -157, -174, "xnMc", -147) + FA(117, 131, 105, "]Fuz") + lA(-189, -209, "xnMc", -214) + lA(-120, -188, "Sg#L", -148)] = hI, Ze[lA(-147, -159, "!OAe", -145) + uA("vrtk", -360) + "Ms"] = qa;
const it = {};
it[FA(182, 151, 167, "cZxc") + FA(164, 189, 158, "&#j)") + uA("Gk5g", -385)] = lI, it[uA("!ywX", -306) + FA(110, 142, 138, "jEIC") + lA(-157, -174, "$zD%", -170) + uA("TJm2", -332)] = Cn[fA(1183, 1227, 1135, "!OAe")], it[uA("$IwZ", -357) + FA(81, 125, 102, "7]IZ") + uA("$zD%", -311) + FA(147, 123, 119, "ifB0")] = Cn[wA(-164, -137, -116, ")03e", -161) + wA(-212, -183, -210, "iX2M", -178)];
function fA(i, n, t, e, A) {
  return cA(i - 910, e);
}
function Bn() {
  const i = ["kmkcymkSgq", "WQlcM8kKW7ud", "CmkSW5xcVhJdMCkYWQq", "W6LwWR3dHYq", "rmk7WOJcSga", "W4BcPhJdTcu", "gCo/WOXSEG", "WPpdJ8onpfC", "W6PgWPDLBW", "WQJdIwVcQ2i", "W6LrWOJdKG", "zsOCW57dRrRdGG", "WPGaidnT", "fLO2gW", "W4qtoSktWPa", "W7S/emoKxW", "WQGwgSoUqSoGW6u", "qcddJa", "W4VdISoEfSoT", "r1RdGhWp", "W7SOeSoixG", "Ftumymoy", "W71rWO/dJYG", "WPxcGLBcIG", "W7RdLCkU", "W6K9hCocyW", "W7FcNaNcOq", "WOtcIKhcISk5", "WODDeba", "WQJcKmoUW7bromk4W7ZdNepdR2u", "xSo8W67cRYW", "WPBdVwnQEa", "n1dcQw8", "C8orpCoZrqBdO8oMjrjyiG", "wCoBW77cUI8", "WPRcSSkgAW", "WRFdHfFdPmoxEvfAW4lcKW", "wJVdJq", "WOldGuNdNwy", "WQmZmYW", "WPxdMfZdL30", "kSouccVdHYtcG8oWFMtdOeBcKxm", "W4/dJ8oabq", "W4qan8ksWPC", "W7hdGCod", "sqBdJW", "CtJcQ8kKpa", "ASo7EmoDjW", "DSkIWQyxwW", "W6K9hCocDG", "W7HeWPPduW", "itxcVLpdQa", "W4OemSkzWP0", "qGRdNCkotW", "WPpcV8kDv8oMtCkhW6lcP8kB", "D8k7WQCH", "vGjOxMe0pr3dT1y", "muVcS2G", "D8o8FSoolW", "AxtcL3RcKdFcOa", "W5itmSktWPq", "b8o9W5hdJctcSJ4CWOVdJSokWPtdSq", "WR/cMexcOei9W43cQc5HbSkrBa", "W6VdLmkZWQue", "vSonW7RcTIy", "mmoMrSkJW6ivea", "W4HxEMPRs8kqBmo/W6e", "W5VcO0JdSZy", "Bmo4W68wmW", "WQnBWRS", "W4NcPhG", "W7FcHclcO8oT", "zCk1WQCKqG", "WRjmWQJdHCkD", "W79zDHf5", "utFdNXOO", "BqVdRItdPx/dSSk7jc3dGSkUzW", "WQuIodNcUG", "vGjUxHTsrWFdLMpcNCk3WPm", "WPtcGrXrwG", "w8kVWP7cOha", "W79vWPbTwq", "WPVdOZVcThBcHCkYWR1rW4JdJdOb", "kmkKWRHAyITVt0lcNbH1tq", "iCktymkKhW", "WPpdM8oQmfe", "ySoEW6/cVG", "vs3dKqSO", "WPVcHKZcMCk5", "vavQxbPurvZdRwxcTmk5WPBdIa", "h1JcQxNcRG", "oW8k", "jgnwn8kdemkXWRGuWONcJCo8aIG", "W712BMRdRSoAW41wyCkMauvCW5i", "W6FdJXFdUr8", "WP7cGL3cQSk0", "CZewCW", "AZ3cQmkGfG", "Bmknx23cLW", "WPNdPN7dKIBdHmoPWOC"];
  return Bn = function() {
    return i;
  }, Bn();
}
it[uA("uq92", -338) + uA("(f&h", -330)] = uI, it[FA(119, 70, 91, "cZxc") + fA(1166, 1151, 1178, "uLlb") + wA(-92, -122, -172, "d(WD", -139) + uA("Q)r@", -362) + FA(116, 151, 104, "TJm2")] = hI, it[fA(1115, 1154, 1103, "TJm2") + uA("ifB0", -379) + "Ms"] = lI;
const Ar = {};
Ar[FA(75, 121, 97, "xnMc")] = Ze, Ar[wA(-131, -154, -130, "&#j)", -143)] = it;
const aQ = Ar;
function AA(i, n, t, e, A) {
  return CA(e - 31, n);
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return CA(s - 181, g);
  }
  function e(g, a, I, C, s) {
    return CA(C - -715, g);
  }
  const A = i();
  function o(g, a, I, C, s) {
    return CA(a - -33, I);
  }
  function r(g, a, I, C, s) {
    return CA(s - 269, g);
  }
  for (; ; )
    try {
      if (-parseInt(t("vJ5d", 450, 512, 463, 482)) / 1 + -parseInt(t("6pDx", 516, 459, 523, 516)) / 2 * (parseInt(o(336, 340, "4em]", 349, 322)) / 3) + -parseInt(t("dl&O", 442, 488, 498, 537)) / 4 * (parseInt(t("8NxS", 329, 324, 304, 386)) / 5) + -parseInt(e("dl&O", -446, -364, -419, -485)) / 6 * (-parseInt(o(292, 306, "0lUz", 325, 248)) / 7) + parseInt(r("%XWb", 606, 588, 648, 651)) / 8 + parseInt(r("Do3D", 586, 576, 517, 490)) / 9 * (-parseInt(r("t2Gc", 516, 657, 512, 601)) / 10) + parseInt(e("n4)e", -387, -395, -447, -472)) / 11 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Qn, -904897 + 1 * 1693093);
function ne(i, n, t, e, A) {
  return CA(e - 891, A);
}
function ie(i, n, t, e, A) {
  return CA(e - -679, t);
}
function Qn() {
  const i = ["WQNcOSkXd8kR", "vSksW6lcUbS", "g8kjlmkpmW", "WRDkW4GHW5a", "WObCw8kbdG", "cCk6WPjacq", "WPxdVuieWRO", "W6BdU8o1qSka", "W5PlWRJdRmkZ", "cmk5nmkO", "WR3cJcnnnG", "W5aydmofC8oUWPnvxbXIW5K", "W57dHZ9aWPm", "WRfjW7mtW5a", "W716gW", "t8kvzvtdKq", "WOHhwG", "WO3dKCk2vgO", "WOVdHqtdUwq", "WOFcKSofkSkQ", "WQVcHMO/cG", "WQJcHmkXW4vX", "lmkuWP9Jpa", "W54rj8ovWQS", "bMaUWPZcHG", "WRVdR8o6W5lcRa", "WOhcLSoGWP7dMW", "WRmkWRHCW7O", "ofiYFmkR", "x8oHDSoTWOFcTbGFCaW", "WR7cQ8kve8k6", "W6DWaCkXWP8", "WPj8DJZdPG", "WOD8h2hcGq", "W7TVW48aDq", "W6pdNmkwW53dNW", "WQNcISk8W4ja", "WRPCW7e+W5y", "W6ldG8kv", "WO/dICk7DxG", "WPhcJCodkmk+", "WPDjwmkgjW", "WRSzWQTxW6O", "FSkByKNdKq", "W4xdHdlcR8ou", "axSZWQVcRW", "W6eSW4BdOf8", "W6ldI8koW7ZdSW", "E8kUuW", "WPLtW4mVW4m", "W5Wfbmo1xq", "WOVdHCkXA3a", "WO1nwSkumG", "WQqFWRzEW7W", "WRVcUY1BnG", "WPFdG8kRsNG", "yvKPyq", "WPtdRe8jWR0", "thddMmkLyNrGW4tdSYbSWOKobq", "W4hcJmkMW4io", "WPbwW7tcU8oU", "WPjnW5lcPmoh", "b8kbWRtdRdK", "AmkIx8ojW5i", "WPFcLSoHkCkd", "bxK9WRxcKG", "Aum4uCk4", "WRNcQSk2dSk6", "zZbEWQJdUa", "W6NdGSkwW6VdKW", "W55xWQ7dR8kK", "WP7cKmodcf4", "DsDDWRpdOG", "W57dNHvjWPy", "WOxcSYGUfW", "W4xcMmkOW5Wp", "CtD3WRpdMa", "WP3dLCkPuxO", "WPxdISo/WPHoWRpcR8kSgCkkrxK", "WRTWW6m", "CsfaWQ7dMa", "WQ5yqa", "WO5yqmk3iW", "WOJcLmo4WRJdSW", "W4NdGt5DWRu", "kmkWbsBdVa", "WQWMrmomWRy6W4S/fLK", "gY7dTa9l", "cItcS8kPW6C", "W5arma", "p8ksdq", "WRhcSCkVlSofkmkJW51zier8W5e", "WQRdOCo9W4/cRa", "BcVdIh7dTq", "nCkkh8k7jW", "WOpdOKGwWRO", "Ew0nW4Oi", "WPJdKSkWsM0", "etldLqPA", "WOrEvCkFmW", "WO9EW6mGW74", "zcddJLRdSq", "WRNcHSk+W5HM", "wmkIWORdL8kDWQ/dGCk1tq", "W63dMmknW6VdSG", "ne0xyCkb", "F2OcW7Cd", "W7NdNmkgW7JdJG", "Bue8FSkS", "W53dGSk0WQhdKmoaWPxcVLW", "W7fAbCki", "WOZcNSoIWOJdPG", "oLmhsCkb", "FSk2rmogW5i", "WRtcN8otWQNdVd/cPL3dKSkw", "WOTJbvBcKa", "WPjpW5JcPmoU", "W4RdHse", "W5zaWQ7dP8kZ", "WOfLeh7cGa", "W5D9W6jNWOe", "WRRcOCk0dCkT", "WQKYWPzdDdTPW6VdMCki", "cCkfWQ/dMHq", "ASkMrmobW4K", "dmompGJdQmkeW7vrWQC7", "W4FdIYjjWQq", "n8kfWOjlkG", "iSktc8k5nG", "kmoWdSo9W6tdV8oeWOLJ", "cYtcImoYlG", "WRVcN8k1W5LZ", "F8kmrSotW48", "DSkMwmoaW5i", "WOtdQ8o3W5xcUq", "W7LMW5uwCW", "WOhcSsyWkG", "WQ7cRcffja", "W5PrWRpdSSkE", "W7DWW5u3za", "W4mdgCo6ya", "nJhdGIT6", "WQJcImk5W4vM", "Ct3cICo3WQNcPIpdOSoyeW", "W5aAdCogD8oRWRTUwb9OW7K", "kSk0kmkwWQy", "WQuNtmojW4fzW4WslwuoWPq", "WRVcNCk/W5LA", "WPRcJmovc0K", "cmo1W5VdJmkW", "W5NdIYrTWQ4", "W4VdGdrcWQq", "iSkZba7dRq", "WPtdGr/dTG", "g8kAWPH8oW", "rCkDW6/cUGO", "eM41WRFcKW", "E0m8ymkT", "WPlcM8ova14", "zZ9DWRy", "ctdcKSo0", "c8kriW", "jmkgiq/dNG", "W6VdKmoHWPPMW5FcH8kfBMW", "W7hdQYFcKSou", "WQZcNSoIWOJdPG", "WPb2a3pcGq", "gSk5lSkWWOa", "WQCKqCooW4DFWRurluW0WQqo", "lmkhWPDMiq", "BSkaFL/dHa", "F8kXrmoiW5q", "zHjhp8otwLFdTgdcNmkwWQ0s", "WORcR3eqdG", "kSkaWPHCjG", "Amk2wmoZW4m", "ld3cVmk2W6y", "WR8tWRC", "WR/cM8kIW4rG", "W609W5VdS1i", "W7JdICkqW7JdJG", "WPjOCqBdTW", "e8ktemkKjG", "W50soCo+tq", "W4hdPsBcT8oy", "WQyzWQTwW6a", "FmoWrNZcUsFcGsBdSSklW7mWW4m", "W4Cjbq", "W6RdKJPQqCkErmk8q8kwWR4IkWG", "WPVcKmoLWPFdOq", "utzPWQ7cR8k5DSojW6i", "W7GOW53dRwK", "ExKkW7az", "aclcPSkbW7C", "WOODW67cSSkBW5S0W5PMda"];
  return Qn = function() {
    return i;
  }, Qn();
}
function ye(i, n, t, e, A) {
  return CA(e - -708, i);
}
function CA(i, n) {
  i = i - (-3476 + 1 * 3676);
  const t = Qn();
  let e = t[i];
  if (CA.cMmAAL === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    CA.JDjNpO = a, CA.zkgicm = {}, CA.cMmAAL = !0;
  }
  const o = t[-807 + 1177 * -8 + -1 * -10223], r = i + o, g = CA.zkgicm[r];
  return g ? e = g : (CA.lEqFWe === void 0 && (CA.lEqFWe = !0), e = CA.JDjNpO(e, n), CA.zkgicm[r] = e), e;
}
function XA(i, n, t, e, A) {
  return CA(e - -591, A);
}
class gQ {
  #A;
  [AA(346, "Do3D", 260, 323) + AA(241, "4XB7", 323, 237)] = [];
  [AA(260, "8NxS", 249, 306) + AA(270, "Do3D", 263, 245) + AA(315, "hB3C", 379, 390) + "r"];
  [ie(-366, -341, "t2Gc", -435) + ye("6pDx", -406, -548, -483) + "s"] = {};
  constructor(n, t = {}) {
    function e(r, g, a, I, C) {
      return ye(I, g - 284, a - 242, C - 1524);
    }
    this[e(1057, 1144, 1204, "CW)w", 1134) + e(1183, 1238, 1096, "Mzro", 1164) + o(652, 644, 680, "Mzro") + "r"] = n, this.#A = aQ;
    function A(r, g, a, I, C) {
      return ne(r - 245, g - 114, a - 392, g - -1409, r);
    }
    function o(r, g, a, I, C) {
      return ne(r - 247, g - 55, a - 204, a - -429, I);
    }
    this[o(712, 778, 779, "0Nwi") + o(841, 733, 804, "0lUz") + A("Jl^G", -219, -169)](t);
  }
  async [XA(-342, -310, -314, -293, "j2Rn") + XA(-358, -374, -369, -315, "CW)w") + AA(376, "R87H", 445, 394)]() {
    if (!Ao())
      return o("V1)X", 149, 170, 134) === A(-201, -201, -104, "E^po"), void 0;
    function n(C, s, B, E, x) {
      return AA(C - 300, B, B - 167, E - -675);
    }
    function t(C, s, B, E, x) {
      return AA(C - 421, x, B - 307, B - -709);
    }
    const e = await this[I(-306, -129, -221, -212, "[N#o") + "st"](this.#A[A(-155, -109, -105, "CB26")]);
    function A(C, s, B, E, x) {
      return AA(C - 289, E, B - 173, B - -355);
    }
    function o(C, s, B, E, x) {
      return XA(C - 474, s - 299, B - 117, E - 510, C);
    }
    const r = await this[I(-222, -153, -227, -133, "0lUz") + "st"](this.#A[n(-188, -230, "G6!!", -275)]), g = {};
    g[t(-298, -366, -333, -400, "t2Gc") + A(-11, -95, -33, "Do3D")] = e[A(-77, -37, 17, "4em]") + "ge"], g[A(-136, -11, -47, "Iz&l") + n(-372, -282, "dl&O", -324)] = r[o("&SV5", 102, 281, 190) + "ge"];
    const a = g;
    function I(C, s, B, E, x) {
      return ne(C - 453, s - 140, B - 156, B - -1503, x);
    }
    this[A(-59, -30, -116, "j2Rn") + n(-451, -430, "obfn", -414)][A(92, 54, 46, "n4)e")](a);
  }
  async [AA(322, "Vq)b", 340, 337) + "st"](n) {
    const { abortAfterMs: t, fallbackConstraints: e, maxTestDuration: A, primaryConstraints: o, runAmount: r, runDurationCutoffFactor: g } = n;
    let a = 0;
    function I(p, m, D, k, y) {
      return ne(p - 139, m - 245, D - 86, y - -911, k);
    }
    function C(p, m, D, k, y) {
      return XA(p - 139, m - 317, D - 245, p - 193, m);
    }
    function s(p, m, D, k, y) {
      return ne(p - 3, m - 274, D - 396, m - -754, k);
    }
    let B = r, E, x = this[I(342, 296, 323, "CR[R", 284) + I(339, 270, 173, "G6!!", 262) + s(399, 452, 420, "%XWb") + "r"][l(603, 564, 671, 600, "(O03") + I(457, 356, 375, "j2Rn", 366) + s(383, 348, 318, "UonI") + "s"](this[I(340, 373, 274, "Elqp", 301) + s(522, 489, 419, "4em]") + "s"], o);
    function Q(p, m, D, k, y) {
      return ne(p - 166, m - 303, D - 8, y - -193, m);
    }
    for (let p = 0; p < r; p++)
      if (s(412, 407, 491, "&SV5") === l(625, 581, 560, 687, "2#kZ")) {
        if (a > A * g) {
          if (s(544, 509, 500, "Nejg") === l(706, 619, 704, 797, "CB26")) return;
          B = p;
          break;
        }
        const m = await this[Q(1157, "V1)X", 1128, 1143, 1082) + Q(1052, "0Nwi", 919, 952, 955) + s(559, 527, 589, "0Nwi") + C(-11, "(O03", -24)](x, t);
        if (m[C(-40, "uD!s", -29)]) {
          if (l(725, 718, 776, 729, "FmR^") === Q(1117, "IItd", 959, 965, 1049)) ({ deviceId: _0x27cdb2 } = _0x5c9250);
          else if (this[s(492, 406, 425, "W2%h") + Q(930, "0Nwi", 1055, 947, 1012) + Q(1090, "Iz&l", 1012, 1126, 1029) + "r"][Q(963, "IItd", 958, 999, 995) + Q(982, "(O03", 876, 883, 961) + C(-82, "Vq)b", 0) + s(389, 423, 374, "G6!!") + "or"](m[Q(1064, "4em]", 1073, 1119, 1086)]))
            if (I(251, 278, 162, "O1DH", 239) === I(287, 316, 238, "#6Q6", 263)) {
              const D = {};
              return D[Q(1127, "nDI3", 1098, 1008, 1031) + s(576, 484, 524, "E^po")] = this[C(-175, "O1DH", -262) + Q(1153, "CB26", 1149, 1153, 1075)], D[I(232, 152, 213, "(O03", 180) + C(-167, "4em]", -264) + "e"] = !1, D;
            } else x = this[Q(980, "Pa#R", 1063, 1017, 1028) + C(-9, "4XB7", 78) + Q(1047, "UonI", 983, 1141, 1063) + "r"][C(-70, "Mzro", -64) + l(726, 788, 795, 798, "Elqp") + C(-170, "R87H", -113) + "s"](this[C(-96, "G154", -141) + s(434, 410, 455, "0lUz") + "s"], e), p--;
        }
        m[Q(1064, "Xn)0", 889, 981, 985) + l(640, 543, 662, 727, "O1DH")] && (l(661, 566, 695, 639, "O1DH") === s(370, 354, 354, "vJ5d") ? _0x56a1e0[I(242, 176, 357, "W2%h", 265)]() : { deviceId: E } = m), a += m[l(674, 676, 756, 664, "0lUz") + C(-172, "Do3D", -131)] || -1 * -4937 + 7900 + -12837 * 1;
      } else _0x247f76 = this[C(-148, "2#kZ", -139) + s(475, 463, 405, "&SV5") + s(295, 370, 454, "Jl^G") + "r"][Q(1047, "nfW$", 939, 1097, 1009) + I(409, 438, 421, "CR[R", 372) + s(352, 372, 329, "G154") + "s"](this[s(468, 449, 517, "4em]") + C(-170, "R87H", -88) + "s"], _0x1a0fe9), _0x2a4994--;
    function l(p, m, D, k, y) {
      return XA(p - 494, m - 30, D - 178, p - 942, y);
    }
    const h = Math[s(478, 475, 468, "CR[R")](a / (B || 6458 * 1 + 9294 + -1 * 15751));
    this[s(470, 380, 289, "YKI]") + l(691, 714, 766, 770, "n4)e") + "s"] = this[I(291, 124, 213, "(O03", 217) + s(448, 494, 440, "4em]") + I(420, 261, 308, "#6Q6", 341) + "r"][I(362, 339, 373, "#6Q6", 316) + l(715, 695, 618, 660, "V1)X") + I(111, 139, 284, "Vq)b", 187) + "s"](this[l(672, 594, 646, 706, "Elqp") + I(126, 274, 288, "[N#o", 222) + "s"], {}, E);
    const f = {};
    return f[l(615, 610, 639, 634, "E^po") + "ge"] = h, f;
  }
  async [XA(-327, -233, -402, -330, "Xn)0") + ne(1161, 1160, 1157, 1127, "Elqp") + ie(-320, -217, "YKI]", -303) + XA(-473, -424, -342, -389, "gI&z")](n, t) {
    const e = Date[C("0Nwi", -577, -591)]();
    function A(s, B, E, x, Q) {
      return ye(E, B - 325, E - 102, B - 722);
    }
    function o(s, B, E, x, Q) {
      return ye(Q, B - 231, E - 372, x - -163);
    }
    const r = new AbortController();
    function g(s, B, E, x, Q) {
      return ye(x, B - 1, E - 186, s - 515);
    }
    function a(s, B, E, x, Q) {
      return AA(s - 62, B, E - 191, x - 424);
    }
    const I = setTimeout(() => {
      function s(Q, l, h, f, p) {
        return C(h, l - 320, Q - 239);
      }
      function B(Q, l, h, f, p) {
        return C(p, l - 485, h - 833);
      }
      function E(Q, l, h, f, p) {
        return C(Q, l - 432, h - 1032);
      }
      function x(Q, l, h, f, p) {
        return C(f, l - 480, p - -107);
      }
      s(-322, -416, "G6!!") === s(-354, -271, "4em]") ? r[E("Xn)0", 543, 500)]() : this[B(352, 385, 299, 309, "KWbE") + x(-622, -520, -664, "8NxS", -580) + "s"] = _0x1cda74;
    }, t);
    function C(s, B, E, x, Q) {
      return AA(s - 278, s, E - 392, E - -870);
    }
    try {
      if (C("%XWb", -541, -601, -675, -557) !== a(653, "Xn)0", 771, 704, 624)) {
        const { deviceId: s, mediaStream: B } = await this[a(799, "YKI]", 849, 784, 792) + A(332, 360, "k2Mz", 358, 423) + g(88, 182, 133, "uD!s", 27) + "r"][C("CW)w", -520, -472, -515, -438) + A(388, 358, "G154", 392, 339) + C("6pDx", -436, -459, -546, -524) + "m"](n, r[a(753, "2#kZ", 713, 684, 722) + "l"]), E = Date[o(-619, -453, -505, -544, "FmR^")]() - e;
        yt(B), clearTimeout(I);
        const x = {};
        return x[C("0lUz", -476, -516, -514, -612) + g(31, -40, 2, "dl&O", -57)] = E, x[A(174, 261, "O1DH", 352, 275) + a(785, "CB26", 906, 826, 923)] = s, x;
      } else this[A(340, 298, "k2Mz", 229, 332) + o(-693, -684, -524, -616, "8NxS") + a(753, "FmR^", 800, 709, 639) + "r"][g(20, 80, -6, "O1DH", -6) + A(190, 274, "gI&z", 187, 325) + A(429, 393, "V1)X", 481, 325) + a(708, "Iz&l", 621, 695, 697) + "or"](_0x14a5e5[C("Mzro", -475, -559, -463, -516)]) && (_0x5d16c1 = this[A(282, 323, "Do3D", 234, 354) + A(249, 286, "nDI3", 204, 228) + C("uD!s", -580, -558, -539, -490) + "r"][A(306, 382, "uD!s", 303, 372) + C("6pDx", -601, -586, -577, -548) + a(768, "8NxS", 751, 821, 814) + "s"](this[A(402, 322, "IItd", 326, 246) + o(-679, -594, -537, -629, "[N#o") + "s"], _0x23c65b), _0x3b1616--);
    } catch (s) {
      if (o(-588, -636, -597, -659, "CR[R") === o(-419, -455, -565, -488, "obfn")) {
        _0x43cab9(_0x2b7e3c);
        const B = {};
        return B[A(248, 304, "G6!!")] = _0x195bab, B;
      } else {
        clearTimeout(I);
        const B = {};
        return B[o(-551, -402, -405, -490, "0lUz")] = s, B;
      }
    }
  }
  [XA(-381, -408, -472, -375, "KWbE") + ne(1352, 1369, 1238, 1285, "FmR^") + ie(-294, -449, "CR[R", -379)](n) {
    function t(e, A, o, r, g) {
      return AA(e - 365, e, o - 432, g - 684);
    }
    Object[t("0Nwi", 1047, 995, 995, 994) + "es"](n)[t("8NxS", 995, 866, 944, 949) + "ch"](([e, A]) => {
      const o = e;
      this.#A[o] && (this.#A[o] = { ...this.#A[o], ...A });
    });
  }
  [AA(368, "#6Q6", 488, 391) + ie(-463, -395, "Xn)0", -414) + ne(1090, 1232, 1096, 1157, "CW)w")](n) {
    function t(e, A, o, r, g) {
      return ye(A, A - 400, o - 28, e - -237);
    }
    this[t(-651, "#6Q6", -636) + t(-593, "4em]", -615) + "s"] = n;
  }
  async [ie(-441, -359, "dl&O", -438) + AA(361, "gI&z", 384, 424) + ie(-332, -373, "nfW$", -376) + ye("gI&z", -297, -390, -358) + AA(342, "0lUz", 376, 289)](n) {
    function t(I, C, s, B, E) {
      return XA(I - 38, C - 16, s - 40, C - -264, I);
    }
    if (this[e(-357, -407, -357, "YKI]") + A(195, 281, 353, "Xn)0")][e(-339, -352, -367, "0lUz") + "h"] === -4438 + 16 * -257 + 8550) return;
    function e(I, C, s, B, E) {
      return ye(B, C - 14, s - 5, I - 26);
    }
    function A(I, C, s, B, E) {
      return ie(I - 393, C - 342, B, C - 733);
    }
    const o = this[t("Nejg", -493, -467) + r(962, "V1)X", 999)][a(983, 962, "Do3D") + "h"] - (-1634 + -9647 * -1 + -4006 * 2);
    function r(I, C, s, B, E) {
      return ye(C, C - 225, s - 177, I - 1438);
    }
    const g = await rQ();
    function a(I, C, s, B, E) {
      return AA(I - 89, s, s - 424, I - 690);
    }
    this[r(1052, "%XWb", 1007) + r(957, "Xn)0", 880)][o] = { ...this[t("t2Gc", -506, -546) + A(233, 258, 290, "Elqp")][o], optSetting: g };
  }
  [ie(-338, -355, "Elqp", -386) + ne(1096, 1225, 1220, 1147, "4XB7") + XA(-430, -386, -284, -340, "Do3D") + AA(323, "#6Q6", 262, 253) + XA(-385, -357, -310, -296, "Nejg")]() {
    const n = {};
    function t(o, r, g, a, I) {
      return AA(o - 438, r, g - 475, g - 240);
    }
    n[e(483, 454, "V1)X") + e(477, 464, "E^po")] = this[e(295, 362, "0Nwi") + e(300, 384, "KWbE")], n[A(683, 596, 635, 559, "0lUz") + t(546, "Iz&l", 481) + "e"] = !1;
    function e(o, r, g, a, I) {
      return ie(o - 185, r - 133, g, r - 796);
    }
    function A(o, r, g, a, I) {
      return ie(o - 387, r - 88, I, g - 980);
    }
    return n;
  }
}
(function(i, n) {
  function t(a, I, C, s, B) {
    return P(I - -579, s);
  }
  function e(a, I, C, s, B) {
    return P(s - 578, C);
  }
  function A(a, I, C, s, B) {
    return P(a - 863, B);
  }
  const o = i();
  function r(a, I, C, s, B) {
    return P(s - -88, I);
  }
  function g(a, I, C, s, B) {
    return P(C - -338, B);
  }
  for (; ; )
    try {
      if (parseInt(g(370, 383, 307, 347, "lvv1")) / 1 * (-parseInt(r(620, "VY[T", 482, 584, 536)) / 2) + parseInt(g(179, 201, 256, 282, "Mv8w")) / 3 + parseInt(A(1321, 1259, 1347, 1210, "sGUw")) / 4 + parseInt(t(-193, -90, -192, "AiP]", -47)) / 5 * (parseInt(e(1081, 1050, "7L(z", 1154, 1126)) / 6) + parseInt(t(52, 23, 108, "251D", 84)) / 7 * (parseInt(t(50, -29, 15, "5DXg", 41)) / 8) + parseInt(r(669, "aq1^", 539, 585, 508)) / 9 + parseInt(g(348, 194, 247, 196, "VY[T")) / 10 * (-parseInt(A(1516, 1557, 1594, 1522, "t*%l")) / 11) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(En, -173130 + -1 * -683455 + 62408);
function P(i, n) {
  i = i - (3335 + 2887 * -1);
  const t = En();
  let e = t[i];
  if (P.vDvMGy === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    P.bFYzvJ = a, P.BVHnsp = {}, P.vDvMGy = !0;
  }
  const o = t[-1366 * -7 + -4716 + -1 * 4846], r = i + o, g = P.BVHnsp[r];
  return g ? e = g : (P.COOYmG === void 0 && (P.COOYmG = !0), e = P.bFYzvJ(e, n), P.BVHnsp[r] = e), e;
}
function En() {
  const i = ["W7FdQIpcRL4", "Cg5m", "ndqzkYKGgCkSWPCLDmkBWO0", "ywzpywK", "WODOW5yeEG", "W6FdVvZcHIW", "lrxdRZvs", "aNJcQq0r", "ygjnWPdcLW", "W4ZdMSoUWRZdTa", "wSoAW74ft8oXWPldS1hdTmkfbw4", "W4ddQKNcRre", "dCkKWQLxcG", "W61WwLhdUG", "v8kjuCkomq", "W4ZdSCoSWPxdSW", "W5jOqW", "hH/dJYy0", "W4OKkmooWQG", "oSoJW5nJtCkCCMPzaexcGG", "W4ldVLdcPXm", "W6VdUZ0", "W6m4W4FdPtC", "W5ldQ0tcRGq", "D8oBw8kOmW", "tSkYWRK", "nCouWO8wW4G", "zufwDNm", "W7FcPSkDlmoVWPpcUNKarIxdRXi", "W7GKW5FdPtW", "BCoaEmomna", "W6VdSSkuW77cGW", "WRFdGdu", "W6ldTCkoW7BcHW", "BSkQW53dGCkP", "r8kuWROBWOC", "aSkDfmoCDmodWOJcKd5pi3qB", "xCkKW53dNSkO", "W6lcVSktu8km", "W4VdMmo/WQBdTa", "E8k4WOiUfa", "W4vJwNhdUG", "W6hcK8kgW4pcImoRo8orjJ8wFmkR", "wcK4WPKX", "fq5Wtta", "W7aQW4K", "WR9GW58e", "bmoyWPuuW58", "W4NcV1zVWR8", "gKS7WOxdVq", "sWuWWPKZ", "W57dNCo+WOtdTq", "B2Ptz28", "WOHUWO9B", "W4pdSe/cTGa", "aqTXwdy", "WPNcGGJdVG", "WQddKmok", "W7BdUZFcRu0", "WRBdRcFcLLa", "W5vFW77cS1K", "bLBcTZai", "WPpcGH8", "W7JdUeqAW6W", "CZ4MntG", "W4tdKCo+WPNdVa", "frzrssG", "hujBACks", "WQxcLCowlCoG", "F8oUWO7cGZu", "hurmq8ki", "ycpdHq", "Bmotw8oOjW", "W6ddTSkqW7ZcMq", "x8kKW4hdG8k5", "WPDOwgRcRa", "WRddTSooECk5", "hWldMdmH", "W67dSKy2W7O", "pSk+W4ZdHGtcN2z1W5/cUa", "fg8A", "W4vPrq", "cColWRXudq", "uSomtq", "ymkWWP8", "WRBdVZvzW4C", "Amk0WPaZhW", "BfFcGb9JW7tcGfFdKG", "h8ojW6qDWQddLmktkSkz", "W6RcG0idWOW", "W5pcUqxcIdK", "W5BcVgLWWPO", "W7KWW5O", "h8ksWQHYdq", "zGVdJmkFsG", "W5VcHeeuWQe", "EmkLWO80gW", "W7RdGmoOWPxdVa", "uv9RWPlcOG", "u8oGrG", "WRRcUXbJW5OiW6hdQIRdGa", "tZWMkt4", "WQddKmotiCo3", "iNqrqmo/", "x8ksWRm5WOy", "rhfTWPpcOG", "p8oKW5aVfSo2AubA", "lteBoSoTgCkyBmo4WO3cO8o4ha", "WOxcMbldT1q", "W5/cOHtcSZW", "B8kJWOm7ca", "W5NdLSozWRva", "WR9UW5We", "WPiUW4pdSSkZ", "WQZdUSojAa", "W5RcHeefWQy", "WQFdMCoakCo6", "W7y+iq", "B8kEWQS3WPy", "W6ddOsVcSW", "aMRcU8o+W4Xgbmoze0DlBSkM", "WOjKWPDxWO0", "aCkfWQzfwq", "WRe2W5ddRSkt", "BwHmzCkQ", "WPHQW7pdL8ov", "WRxdRcxcQKa", "nqddNtvx", "WRe2W5ddRSkH", "W4K9WRlcVCkbeSoEWQpcOYhdKCkx", "tqmNWPuO", "qSoatmkmnG", "W6BdNSkz", "W4ddVvlcSbu", "th1RWPxdTG", "WQxdGmorj8oK", "ymkGW4ZdHmkS", "WRRdL8oFWPddLa", "dCktWRTdga", "W7ddO8keW7xcJG", "bf4jvSoL", "FeHg", "WOBcGaRdOG", "F8kLWP82gq", "yIyMdtq", "xSo4sa", "WRBdS8olzCkx", "zaJdJSkita", "tatdJCktvG", "CCojrSoJnW", "tWmM", "W6riW6i1CdpdGa", "ECoeu8oLjW", "cx/cTqer", "BSoMWPxcLtq", "b1q3FCoV", "wxldGYOk", "W6pcSgBdJWOvWO7cQxSLWPW1WOi", "BCo2WPBcTYu", "qY7dLCkNWP0", "W6yLW5RdRd0", "W5FcVSk0t8kA", "buhdNcywkSoc", "W6Ggmmo/WRW", "cdZdLceH", "mqRdLW", "WRZdHmoBWRRdMq", "aM87vSo9", "WOqKWQ7dOHThA8k3FL4nCeq", "WRFdGCoCjmoX", "W6SVlCoaWQ4", "W40+WRBcSmkgf8kAWP3cVJBdUSkCxa", "s8oDtComkG", "pWddJq9t", "W5RcI2yeWOa", "gsldMsqM", "W5BcRCkBA8kw", "c8khWQPqfW", "tSkjWPGOWPa", "ANvdCmkT", "ugSh", "CZ46nZG", "WO1QW6RdQ8og", "gvr6wSkb", "WQqHW5S", "WPNdSNX8W7O", "e8oFWR8iW54", "WQfUW5Spyq", "WPRcGCkSWOxdT8kJdcWk", "W6ZdP8kCW7RcGG", "u8ohr8kz", "WRr5W5mcyq", "qxuqr8kR", "W4NcRHNcRtG", "ygfWWO7cPa", "WPxcSCkrFSoc", "sbWcWPu4", "W73dMSoqWR9z", "eSoEWOWtW48", "BsZdQqHtW6VcIW", "aHb0rta", "WOH1WPi", "W45/W78", "xJVdQSkPWPe", "ELz6s8ki", "bx4jwSoO", "AsqQl30", "w8kSW4ZdImkI", "WQBdK8ohWP/dMa", "W7OZW4NdPtS", "wCkjW4hdNSk5", "WRddHdq", "W6WzfNtdNSoBW4S", "gr7dMca", "h8oiWRumW4K", "WQRdT0zMW7S", "WOLMW6pdOCoF", "F8oGWOJcMsq", "WQpdPdrDW5W", "W6ZdHCovWOhdNa", "eGDJrt0", "W7aJW67dPtW", "gtxdKtC4", "W4z5W7ZcSeu", "sxXLWQtcPa", "lNxcTGqw", "BwfsDhG", "W6JdUeiWW6a"];
  return En = function() {
    return i;
  }, En();
}
function JA(i, n, t, e, A) {
  return P(e - -801, t);
}
function _e(i, n, t, e, A) {
  return P(i - -15, t);
}
function re(i, n, t, e, A) {
  return P(i - 275, A);
}
function me(i, n, t, e, A) {
  return P(i - -623, e);
}
function ae(i, n, t, e, A) {
  return P(A - 715, i);
}
class sQ {
  [re(950, 998, 1049, 902, "Es3)") + re(780, 736, 710, 851, "kepw") + re(779, 732, 776, 845, "w(JT")](n) {
    function t(I, C, s, B, E) {
      return JA(I - 287, C - 10, C, B - 1327);
    }
    function e(I, C, s, B, E) {
      return ae(C, C - 259, s - 205, B - 446, E - 20);
    }
    const A = $i(n);
    function o(I, C, s, B, E) {
      return JA(I - 130, C - 97, s, I - 324);
    }
    const r = A?.[o(34, -57, "t*%l") + o(185, 213, "VY[T") + "s"]();
    if (!r?.[o(31, -73, "*KNm") + "t"] || !r?.[e(1452, "*$t0", 1287, 1382, 1356)] || !r?.[g("*$t0", 14, -80, 68, -42) + a(580, "fOG[", 553, 539)]) {
      if (t(1016, "8t6!", 1074, 1079) !== t(1091, "&31e", 1029, 1020)) throw new w(e(1324, "EPdw", 1369, 1289, 1327) + t(969, "kepw", 1141, 1056) + o(-17, -15, "7L(z") + e(1279, "lJgd", 1329, 1406, 1321) + a(731, "(IEk", 801, 803) + t(1071, "aq1^", 1032, 988));
      {
        const I = { ..._0x27ab12 }, C = I, s = { ...typeof C[g("95qb", 11, -126, 37, -39)] == a(670, "ec4$", 644, 714) + "t" ? C[a(685, "Nb]w", 710, 638)] : {}, ..._0x1a92e8 }, B = s;
        if (_0x4e2de3) {
          const E = {};
          E[o(13, -42, "w#aL")] = _0x2058e0, B[o(66, 178, "kepw") + g("t#rg", 64, 73, 17, -2)] = E;
        }
        return C[t(1139, "4RCm", 1193, 1187)] = B, C;
      }
    }
    function g(I, C, s, B, E) {
      return JA(I - 225, C - 311, I, E - 201);
    }
    function a(I, C, s, B, E) {
      return ae(C, C - 475, s - 37, B - 36, I - -618);
    }
    if (A) {
      if (o(35, 136, "4RCm") !== a(590, "kepw", 520, 528)) return r[a(633, "EPdw", 697, 701) + t(1124, "e17I", 1240, 1163)];
      _0x280754[o(85, 110, "(RTh") + o(170, 154, "4xmk")](_0x9b5102);
    }
  }
  [_e(433, 530, "VY[T") + JA(-143, -225, "95qb", -175) + JA(-148, -155, "FHUU", -186) + ae("AiP]", 1240, 1328, 1378, 1285)]() {
    const n = document[A("apcN", 1476, 1466, 1511) + o(265, "J^ZN", 277) + o(155, "4xmk", 250)](o(175, "TQz1", 224));
    function t(g, a, I, C, s) {
      return ae(s, a - 302, I - 466, C - 496, g - -134);
    }
    n[e(1086, 1074, "lJgd") + t(1231, 1298, 1233, 1164, "VY[T")] = !0;
    function e(g, a, I, C, s) {
      return _e(a - 512, a - 306, I);
    }
    n[A("Nb]w", 1351, 1568, 1463)] = !0, n[A("X(Op", 1411, 1303, 1334) + t(1165, 1111, 1158, 1142, "*KNm") + "e"] = !0;
    function A(g, a, I, C, s) {
      return _e(C - 883, a - 447, g);
    }
    n[e(1112, 1016, "G]nz")][o(295, "lvv1", 223) + r(84, 94, 68, "t*%l")] = t(1217, 1260, 1142, 1207, "3%@$") + A("*KNm", 1266, 1312, 1323);
    function o(g, a, I, C, s) {
      return me(I - 291, a - 188, I - 281, a);
    }
    n[A("(IEk", 1357, 1419, 1375)][e(955, 972, "w(JT") + "ty"] = "0", n[r(112, 205, 35, "Es3)")][t(1106, 1215, 1018, 1033, "AiP]") + o(98, "3%@$", 189) + A("jlvm", 1476, 1411, 1455)] = o(161, "AiP]", 118);
    function r(g, a, I, C, s) {
      return ae(C, a - 307, I - 65, C - 260, g - -1134);
    }
    return n[r(127, 217, 232, "w(JT")][A("VY[T", 1478, 1472, 1474)] = e(1040, 1108, "X(Op"), n[r(58, 121, 114, "XSXG")][A("XSXG", 1408, 1418, 1465) + "t"] = e(955, 1015, "kepw"), n;
  }
  async [JA(-371, -246, "Mv8w", -317) + ae("apcN", 1248, 1218, 1342, 1298) + me(-18, 84, 27, "M8ib") + JA(-170, -175, "251D", -152)](n, t, e) {
    return new Promise((A, o) => {
      function r(s, B, E, x, Q) {
        return P(x - 623, B);
      }
      function g(s, B, E, x, Q) {
        return P(x - 985, Q);
      }
      function a(s, B, E, x, Q) {
        return P(B - -996, Q);
      }
      function I(s, B, E, x, Q) {
        return P(x - 253, B);
      }
      function C(s, B, E, x, Q) {
        return P(x - -975, B);
      }
      if (r(1164, "[B19", 1054, 1122) === r(1160, "[B19", 1204, 1227)) throw new _0x2c0400(I(785, "b]a8", 832, 853) + r(1321, "4xmk", 1213, 1264) + C(-436, "G]nz", -410, -431) + a(-398, -357, -350, -405, "XSXG") + g(1728, 1722, 1706, 1633, "7L(z") + r(1313, "SQW7", 1287, 1293));
      {
        const s = () => {
          function x(p, m, D, k, y) {
            return a(p - 326, m - 1975, D - 347, k - 240, p);
          }
          function Q(p, m, D, k, y) {
            return g(p - 245, m - 388, D - 405, D - -241, m);
          }
          function l(p, m, D, k, y) {
            return C(p - 158, p, D - 112, m - 120);
          }
          function h(p, m, D, k, y) {
            return g(p - 105, m - 48, D - 127, D - -382, y);
          }
          function f(p, m, D, k, y) {
            return g(p - 349, m - 371, D - 79, y - -1717, D);
          }
          if (f(-165, -109, "251D", -237, -142) !== f(-140, 33, "4RCm", -172, -77)) this[h(1218, 1277, 1213, 1273, "*$t0") + l("J^ZN", -321, -246) + "eo"](n, t);
          else {
            const p = _0x2cc7b3(_0xfc00ec), m = p?.[f(-186, -198, "sCN^", -283, -269) + h(1074, 1159, 1126, 1123, "8t6!") + "s"]();
            if (!m?.[Q(1289, "sGUw", 1285) + "t"] || !m?.[f(-243, -259, "4RCm", -245, -279)] || !m?.[l("kepw", -312, -203) + x("251D", 1644, 1694, 1688)]) throw new _0x5f7d73(f(-138, -102, "ec4$", -215, -169) + l("[B19", -322, -365) + x("(RTh", 1451, 1519, 1369) + h(1317, 1199, 1263, 1192, "e17I") + h(1273, 1172, 1183, 1131, "251D") + l("251D", -386, -395));
            return p ? m[h(1031, 1154, 1062, 1083, "RkMf") + l("t#rg", -257, -284)] : void 0;
          }
        }, B = {};
        B[g(1614, 1500, 1510, 1607, "ZyTC")] = !0, e?.[C(-455, "3%@$", -356, -342) + g(1541, 1571, 1656, 1560, "M8ib") + C(-239, "G]nz", -392, -345) + "r"](C(-346, "Nk55", -461, -406), s, B), (async () => {
          function x(p, m, D, k, y) {
            return g(p - 155, m - 297, D - 35, p - -1465, y);
          }
          function Q(p, m, D, k, y) {
            return r(p - 133, k, D - 239, p - -241);
          }
          function l(p, m, D, k, y) {
            return g(p - 392, m - 170, D - 450, y - -65, m);
          }
          function h(p, m, D, k, y) {
            return g(p - 395, m - 408, D - 262, m - -1e3, p);
          }
          function f(p, m, D, k, y) {
            return g(p - 267, m - 192, D - 371, D - -681, k);
          }
          if (h("(RTh", 559, 479) !== h("M8ib", 542, 561)) _0x115392?.[h("!b&Q", 520, 526) + h("M8ib", 566, 569) + x(22, -62, 87, 49, "apcN") + l(1487, "251D", 1477, 1558, 1448)](f(876, 732, 789, "e17I"), _0x3db28a), _0x536fe0(_0x43f13c), _0x323dfb(_0x419453);
          else try {
            if (l(1351, "aq1^", 1427, 1400, 1462) === l(1407, "lJgd", 1498, 1595, 1491)) {
              const p = {};
              p[x(49, 41, 127, 157, "AiP]")] = _0x2a740f, _0x48e197[Q(1007, 1004, 1006, "t#rg", 1054) + l(1507, "aq1^", 1348, 1502, 1399)] = p;
            } else await n[h("ZyTC", 465, 385, 468, 505)](), e?.[l(1478, "jlvm", 1567, 1494, 1486) + f(979, 786, 897, "Nk55", 789) + Q(930, 964, 1038, "b]a8", 833) + x(-23, 79, 54, -101, "jlvm")](x(-9, -118, -82, 54, "lJgd"), s), A();
          } catch (p) {
            l(1526, "fOG[", 1553, 1457, 1516) === f(907, 902, 883, "4xmk") ? this[x(35, -55, 84, 4, "7L(z") + x(92, 110, 189, 90, "t*%l") + "eo"](_0x5bbac1, _0x515fa4) : (e?.[x(40, 126, 116, 128, "sCN^") + x(-2, 33, 34, -5, "kepw") + Q(1046, 998, 1052, "(RTh") + x(71, 142, 24, 100, "apcN")](x(191, 158, 153, 276, "(RTh"), s), yt(t), o(p));
          }
        })();
      }
    });
  }
  async [me(-106, -89, -71, "aq1^") + JA(-250, -281, "b]a8", -327) + _e(648, 583, "M8ib") + "m"](n, t) {
    function e(B, E, x, Q, l) {
      return _e(Q - 854, E - 454, B);
    }
    function A(B, E, x, Q, l) {
      return re(Q - -460, E - 459, x - 162, Q - 51, E);
    }
    function o(B, E, x, Q, l) {
      return re(x - -906, E - 123, x - 421, Q - 73, l);
    }
    const r = this[e("[B19", 1339, 1281, 1353) + A(439, "7L(z", 423, 393) + e("ft7c", 1420, 1467, 1404) + e("!b&Q", 1206, 1194, 1288)](), g = await navigator[a(358, 452, 357, "M8ib") + A(284, "SQW7", 341, 271) + "es"][A(387, "t#rg", 340, 279) + e("Nb]w", 1434, 1432, 1398) + "ia"](n);
    function a(B, E, x, Q, l) {
      return re(E - -454, E - 44, x - 376, Q - 284, Q);
    }
    const I = this[o(-68, -128, -155, -159, "7L(z") + A(372, "*$t0", 514, 447) + o(138, -87, 25, -69, "Es3)")](g);
    function C(B, E, x, Q, l) {
      return me(x - 808, E - 362, x - 53, B);
    }
    r[o(100, 16, -2, 21, "ft7c") + a(360, 273, 194, "Mv8w")] = g;
    try {
      if (e("lvv1", 1238, 1411, 1335, 1354) === a(353, 435, 382, "t8w2", 324)) return _0x104878[A(391, "VY[T", 550, 467, 404) + a(416, 370, 276, "TQz1", 415)];
      await this[a(235, 282, 202, "X(Op", 199) + e("lJgd", 1487, 1569, 1459, 1352) + C("G]nz", 556, 667, 595, 564) + a(428, 444, 554, "(IEk", 555)](r, g, t);
    } catch (B) {
      a(346, 322, 222, "*KNm") === A(531, "ec4$", 471, 442) ? w[a(369, 422, 360, "SQW7") + o(-207, -64, -143, -178, "J^ZN")](B) : (_0x1a9813[C("lvv1", 871, 820)](), _0x55c25e(_0x46368e), _0x506010[e("4xmk", 1380, 1504, 1446) + "e"]());
    }
    const s = {};
    return s[C("t*%l", 695, 650) + o(-80, -218, -180, -197, "X(Op") + "m"] = g, s[e("(IEk", 1521, 1536, 1507) + o(-154, 44, -40, 45, "SQW7")] = I, s;
  }
  [JA(-287, -368, "(IEk", -347) + re(772, 677, 738, 724, "sGUw") + "eo"](n, t) {
    n[e(1050, 1058, "b]a8", 1052)](), yt(t);
    function e(o, r, g, a, I) {
      return re(o - 172, r - 216, g - 34, a - 431, g);
    }
    function A(o, r, g, a, I) {
      return ae(I, r - 210, g - 102, a - 197, g - -475);
    }
    n[A(906, 846, 897, 944, "t8w2") + "e"]();
  }
  [re(827, 818, 876, 742, "EPdw") + me(-10, -23, 60, "EPdw") + JA(-291, -180, "*$t0", -263) + ae("EPdw", 1168, 1301, 1295, 1239) + "or"](n) {
    function t(r, g, a, I, C) {
      return ae(a, g - 493, a - 426, I - 79, C - -900);
    }
    function e(r, g, a, I, C) {
      return me(C - 1236, g - 363, a - 371, a);
    }
    function A(r, g, a, I, C) {
      return JA(r - 376, g - 17, a, C - 785);
    }
    function o(r, g, a, I, C) {
      return re(I - -1267, g - 59, a - 38, I - 104, g);
    }
    return n instanceof DOMException && n[e(1277, 1159, "AiP]", 1183, 1225)] === A(611, 761, "G]nz", 624, 651) + e(1244, 1292, "Nk55", 1156, 1231) + t(243, 243, "lvv1", 335, 307) + o(-542, "(RTh", -547, -460);
  }
  [me(-59, -125, -124, "Nk55") + _e(654, 696, "kepw") + ae("b]a8", 1407, 1465, 1394, 1355) + "s"](n = {}, t = {}, e) {
    const A = { ...n };
    function o(E, x, Q, l, h) {
      return JA(E - 406, x - 188, l, E - 106);
    }
    function r(E, x, Q, l, h) {
      return JA(E - 428, x - 225, E, x - 233);
    }
    const g = A;
    function a(E, x, Q, l, h) {
      return _e(E - 928, x - 61, h);
    }
    const I = { ...typeof g[B(192, 109, 153, "b]a8")] == B(78, 111, 71, "Nb]w") + "t" ? g[B(211, 180, 218, "J^ZN")] : {}, ...t }, C = I;
    function s(E, x, Q, l, h) {
      return me(Q - 1e3, x - 493, Q - 432, x);
    }
    if (e)
      if (r("apcN", -55) === r("7L(z", 91)) {
        const E = _0x3eca9a[a(1564, 1586, 1605, 1631, "TQz1") + r("apcN", -8) + s(1031, "ZyTC", 1005)](o(-53, -92, 35, "Mv8w"));
        return E[r("(IEk", -95) + o(-37, -89, 12, "Nb]w")] = !0, E[o(-208, -154, -165, "w#aL")] = !0, E[r("fOG[", -58) + a(1399, 1494, 1449, 1344, "e17I") + "e"] = !0, E[a(1587, 1621, 1576, 1571, "ZyTC")][s(860, "J^ZN", 845) + a(1480, 1542, 1520, 1452, "aq1^")] = o(-96, -142, -7, "XSXG") + a(1559, 1539, 1511, 1460, "kepw"), E[a(1537, 1556, 1614, 1601, "jlvm")][a(1440, 1455, 1520, 1463, "XSXG") + "ty"] = "0", E[B(59, 45, 61, "VY[T")][a(1551, 1635, 1527, 1495, "w#aL") + r("SQW7", -52) + s(956, "RkMf", 916)] = o(-76, 32, -156, "RkMf"), E[o(-197, -190, -258, "Nb]w")][r("M8ib", 49)] = s(802, "Nb]w", 899), E[s(1044, "lJgd", 966)][o(-154, -96, -190, "sGUw") + "t"] = o(-155, -205, -129, "sCN^"), E;
      } else {
        const E = {};
        E[r("ft7c", 76)] = e, C[a(1404, 1360, 1308, 1368, "ec4$") + a(1383, 1453, 1364, 1465, "XSXG")] = E;
      }
    g[a(1467, 1382, 1513, 1383, "sCN^")] = C;
    function B(E, x, Q, l, h) {
      return me(x - 187, x - 321, Q - 5, l);
    }
    return g;
  }
}
const RI = {};
RI.ideal = 1920;
const vI = {};
vI.ideal = 1080;
const Uo = {};
Uo.width = RI, Uo.height = vI, Uo.facingMode = Or.FRONT;
const IQ = Uo;
class FI {
  #A;
  #e = [];
  #t = null;
  constructor({ defaultVideoConstrains: n = IQ, minCameraShorterSide: t = gB } = {}) {
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
    if (this.#t) return $i(this.#t);
  }
  get isCameraActive() {
    return !!this.#t?.active;
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    yt(t);
  }
  async open(n = {}) {
    _a() && nt() && await Ki(-3637 + 1 * 4087), this.#t = await navigator.mediaDevices.getUserMedia(n), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new w("Video track must be initialized to get next device");
    const n = await oi(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + (-331 * -1 + 9572 + 4951 * -2)] ?? n[-1961 + 2 * 4289 + 509 * -13]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new w("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    this.#t && (yt(this.#t), this.#t = null);
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
    return (await dI()).find((A) => A.deviceId === n.deviceId)?.label;
  }
  async getBestCameraInfo(n) {
    if (n !== Or.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (Yr())
      return (await oi()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const n = await oi();
    for (const t of n) {
      _a() && nt() && await Ki(5742 * -1 + -892 * 8 + -16 * -833);
      try {
        const e = {};
        e.exact = t.deviceId;
        const A = {};
        A.ideal = 480;
        const o = {};
        o.deviceId = e, o.width = A;
        const r = {};
        r.video = o;
        const g = await navigator.mediaDevices.getUserMedia(r), a = $i(g);
        if (!a) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const I = a.getSettings(), C = { ...I };
        C.deviceName = a.label;
        const s = {};
        s.cameraProperties = C;
        const B = s;
        this.#e.push(B), yt(g);
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
class cQ {
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
    this.#A || (this.#A = !0, await FI.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), kB() && await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t?.deviceId);
    !nt() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
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
    return e.drawImage(this.videoHandler.videoElement, -1 * 6823 + 7642 + -1 * 819, 815 * -7 + -9555 + -763 * -20), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop(), this.videoRecorder?.stopRecording(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(n) {
    await this.cameraHandler.open(n), DB() && (this.cameraHandler.close(), await this.cameraHandler.open(n));
    const [, t] = await Promise.all([this.mountVideoStream(), this.cameraHandler.getDeviceName()]);
    !nt() && await this.cameraEvaluator.setMostRecentCameraName(t), this.videoRecorder?.startRecording();
  }
  async switchCamera() {
    const n = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(n);
    this.pauseStream(), !nt() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
class CQ {
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
function HA(i, n, t, e, A) {
  return tA(n - 79, i);
}
function Re(i, n, t, e, A) {
  return tA(t - 852, A);
}
function ge(i, n, t, e, A) {
  return tA(t - -879, n);
}
function NA(i, n, t, e, A) {
  return tA(i - 16, e);
}
(function(i, n) {
  function t(I, C, s, B, E) {
    return tA(s - -969, B);
  }
  function e(I, C, s, B, E) {
    return tA(C - 742, s);
  }
  function A(I, C, s, B, E) {
    return tA(C - 363, I);
  }
  function o(I, C, s, B, E) {
    return tA(s - 746, E);
  }
  var r = i();
  function g(I, C, s, B, E) {
    return tA(s - -533, C);
  }
  for (; ; )
    try {
      var a = parseInt(g(-127, "Vn1K", -69, -108, -11)) / 1 + -parseInt(t(-541, -528, -575, "nKmb", -619)) / 2 + -parseInt(t(-493, -584, -548, "@Bio", -568)) / 3 * (parseInt(o(1123, 1103, 1159, 1101, "O4g6")) / 4) + -parseInt(e(1283, 1235, "h%gz", 1261, 1274)) / 5 * (-parseInt(A("4JX)", 773, 749, 800, 751)) / 6) + -parseInt(o(1137, 1146, 1160, 1113, "909q")) / 7 * (-parseInt(o(1288, 1183, 1235, 1260, "TGT7")) / 8) + -parseInt(t(-462, -467, -479, "(b8T", -505)) / 9 * (-parseInt(t(-497, -462, -512, "pSav", -558)) / 10) + parseInt(t(-604, -608, -586, "$19G", -563)) / 11;
      if (a === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(xn, -12009 * -118 + 205582 * -1 + -419864);
function tA(i, n) {
  i = i - (-5302 + -13 * -287 + 278 * 7);
  var t = xn(), e = t[i];
  if (tA.EVgxrk === void 0) {
    var A = function(I) {
      for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", B = "", E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (var h = 0, f = s.length; h < f; h++)
        B += "%" + ("00" + s.charCodeAt(h).toString(16)).slice(-2);
      return decodeURIComponent(B);
    }, o = function(I, C) {
      var s = [], B = 0, E, x = "";
      I = A(I);
      var Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (var l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    tA.ynWgsW = o, tA.OGIrZR = {}, tA.EVgxrk = !0;
  }
  var r = t[-14148 + 1572 * 9], g = i + r, a = tA.OGIrZR[g];
  return a ? e = a : (tA.jWjeWT === void 0 && (tA.jWjeWT = !0), e = tA.ynWgsW(e, n), tA.OGIrZR[g] = e), e;
}
function se(i, n, t, e, A) {
  return tA(e - -640, A);
}
function xn() {
  var i = ["WP4sy8k+tfJdPCkR", "uXZdSSkEW4e", "W6fPWOtcPCoF", "dCo2WQNdPSoOW5GmWQZdK1eStW", "W55Bqq", "DSk+W7u", "W7RdHZvSEG", "mmk+erGjpCozdG1cWOddPtG", "ySk8W6HCW5S", "fG8SWOLV", "W4LXxtzk", "DmkNW73cVCkU", "z8oDtv9o", "CGFdOSkjW78", "W7pdUSo7W7qc", "rNddO0VdOa", "W5P0WOlcQmop", "BCo4rG", "xSklu3aO", "WRtdStFdUKC", "cCotcSozW6W", "itiCj8km", "dLJcTSoDWR7cUCoEkCogzCoMW48Y", "vWVdLCkfW4W", "W5pdKSoJW60F", "W5P0WOJcTSo6", "ibqEpCku", "hN5IzCkH", "sCoCWOf4fa", "W6FdVSoOW6Kv", "W4LdxmkNDW", "tGFdRSkeW54", "wsCgWPtcMa", "WO3cS8kcW73cRbrIAYr+WO89W4q", "W6qPWRqCW78", "WQhdVdZdKwu", "W4RdNCkKwCk7", "WQ/dRZy", "W5FdOX0zya", "W7VdNYtcNCkj", "ybRdPSkdW64", "W5FdOCozWQhdSq", "cSkskq", "W7xcRJK", "W7ZdQmosWQBdTG", "WOJdM8kVELZcR8kX", "CbNcVSkOW7a", "zmoMwL9p", "WOZcK8ko", "WP7dO8o7WODGggO6", "WQRcK2SUkmk0WO8XW4pdVSooWOW", "gqLgBIG", "j8osccfTBqz2j305tCko", "W4NdKSkcWRBcVfHTvLuWu8owFCor", "rZiaWQxcGG", "W6tdGmkSxSkl", "WPJdOvFdQ8oCdbC", "aYNcVrBcGMZcH8orWOiKW7ZcPmkItq", "W51NWQ4xfG", "fvu+hH0", "ChrUwCkKWQxdGq", "W6xdLcK", "W7BdGmkXq8kR", "l0RdSmoVWRztnmknW71IW5lcLCoD", "W6FcQsBdGCkaW6RdImo9", "hqzbEsq", "i3RcTq", "x3JdOKBdKq", "odiiomki", "FG7cOCk3W7a", "WPhcOIhcG8k8Eu0/WPVdJ8kVvZe", "gxaYeWK", "WO/cMCkTWRDp", "wCkfW7VcP8kF", "W6G0WQ4RW7K", "W5nhzW5Q", "WQBdTbNdJCkG", "rrWrWOJcRW", "iNxcH0GW", "WRumqdaI", "E3ZdV3ZdOa", "W5ZdISkNW5FcOq", "W5FdQ8kvC2S", "qCoAWOq", "WQpdQJ3dTwC", "e8oYWPdcQHy", "WPJdOSk7W5OcFa0NWPWnFImn", "wSoBWOC", "W4X3WReljW", "tCoDrNLo", "rSoBWPP/cq", "W6qxWO/cRSkG", "xX3dSSkPW6u", "rvXSbCkn", "fw0Ojdy", "g3SIfYS", "WPiUdxyrW7xcMIFcLCkrWPeeW5O", "pGxcKutcKG", "W7GQWRu6W6m", "WPRcI8oDW6e", "dCo5WP0", "h8o+eCoGW6S", "yCk5W69c", "WOuge0lcSSoSbCoAhwpdHmoa", "WRajvq", "W4XsWRCwbW", "fwCRftW", "bCopdCoHW44", "f8oGWOC", "tCoDrMzc", "W7NdLZG", "WPGlrIe", "W7HdmtFcKG", "tmorqf5t", "FSkdxNCX", "gxaYeZa", "qhJdHCkvWQK", "WRpdGaVdMfO", "W6ndoIhcJW", "W4irWPS", "W4pcVmoR", "Fr9trSk0WOxdSSk2", "W4XfWPhcO8oe", "aN7cS2Gi", "W7VdJmk6qmkT", "vKdcPGqI", "W6Xcs8k3Aa", "hCoLWO/cOqS", "gcq6WQVcU8k3BW"];
  return xn = function() {
    return i;
  }, xn();
}
class BQ {
  [HA("Vw8U", 486) + HA("G3ms", 578) + NA(477, 499, 430, "n6xL")] = 5783 + 1 * -5783;
  [HA("^t0X", 514) + NA(514, 545, 574, "nFOy") + NA(396, 400, 352, "8Ww)") + ge(-437, "Vn1K", -385)];
  [NA(459, 508, 444, "xx)z") + NA(456, 407, 514, "ZGq7") + "p"] = void 0;
  constructor() {
    function n(o, r, g, a, I) {
      return NA(o - -587, r - 76, g - 278, r);
    }
    function t(o, r, g, a, I) {
      return ge(o - 413, a, r - 5);
    }
    function e(o, r, g, a, I) {
      return ge(o - 109, a, o - 558);
    }
    function A(o, r, g, a, I) {
      return se(o - 278, r - 448, g - 166, o - 857, g);
    }
    this[t(-360, -423, -375, "dSQH") + t(-481, -432, -425, "4qnd") + A(593, 545, "UVso") + n(-144, "rs#j", -170)] = Date[e(88, 91, 59, "BRB!")]();
  }
  [NA(491, 427, 436, "O4g6") + NA(454, 496, 446, "TGT7") + se(-165, -135, -147, -171, "n6xL")]() {
    this[n(756, 754, 766, 721, "ncfn") + n(737, 777, 744, 729, "*rwF") + n(740, 780, 701, 685, "n6xL")]++;
    function n(o, r, g, a, I) {
      return HA(I, o - 200);
    }
    function t(o, r, g, a, I) {
      return se(o - 334, r - 123, g - 364, I - 579, a);
    }
    function e(o, r, g, a, I) {
      return ge(o - 155, g, o - -50);
    }
    function A(o, r, g, a, I) {
      return se(o - 147, r - 239, g - 192, a - 209, g);
    }
    if (this[A(32, 52, "bnPr", 48) + e(-476, -516, "$19G") + n(682, 655, 668, 713, "dvCe")] === 1)
      if (n(680, 721, 708, 709, "$19G") === n(676, 716, 740, 708, "@5jz")) this[t(337, 384, 329, "dSQH", 328) + e(-550, -517, "O4g6") + "p"] = Date[n(723, 700, 683, 672, "dSQH")]() - this[t(339, 385, 385, "(&%#", 351) + A(24, 37, "nFOy", 67) + A(26, 3, "$19G", -39) + t(442, 413, 397, "E1wx", 410)];
      else return;
  }
  [HA("GMYv", 465) + NA(504, 553, 502, "n6xL") + NA(444, 438, 441, "UVso") + ge(-514, "nKmb", -474) + "up"]() {
    function n(r, g, a, I, C) {
      return HA(C, I - -364);
    }
    if (!Ao())
      if (A(701, 658, 626, "pSav", 665) !== A(672, 738, 713, "8Ww)", 707)) this[t(131, 116, 160, "V2zx", 123) + n(256, 144, 161, 199, "rs#j") + "p"] = _0x18bdf8[n(124, 165, 145, 119, "XA9U")]() - this[t(234, 212, 183, "pSav", 248) + e(467, "nPk%", 432, 435) + e(363, "@5jz", 295, 355) + t(267, 226, 271, "i#^&", 213)];
      else return;
    function t(r, g, a, I, C) {
      return ge(r - 465, I, C - 627);
    }
    function e(r, g, a, I, C) {
      return se(r - 14, g - 393, a - 249, I - 579, g);
    }
    function A(r, g, a, I, C) {
      return se(r - 27, g - 196, a - 256, C - 869, I);
    }
    this[t(144, 148, 206, "r2!]", 177) + t(197, 208, 105, "^t0X", 143) + n(116, 176, 176, 137, "E1wx")] = 3815 + 8626 * -1 + 4811;
    function o(r, g, a, I, C) {
      return Re(r - 184, g - 435, C - -1514, I - 175, r);
    }
    this[o("!sTl", -236, -230, -311, -254) + n(282, 200, 267, 218, "$19G") + "p"] = void 0, window[n(141, 74, 148, 97, "r2!]") + t(178, 295, 237, "GMYv", 231) + e(375, "2sB]", 462, 405) + n(163, 232, 193, 187, "ZGq7")](A(581, 682, 601, "E1wx", 629) + "wn", this[o("nKmb", -205, -222, -200, -260) + A(679, 670, 646, "h%gz", 663) + A(588, 582, 689, "8Ww)", 627)][e(351, "909q", 398, 399)](this));
  }
  [HA("hCJP", 511) + HA("Vw8U", 509) + se(-189, -263, -248, -214, "(&%#") + HA("(b8T", 566) + "up"]() {
    if (!Ao())
      if (o(-192, -155, -256, -187, "@Bio") === n(-433, "rs#j", -469, -444)) this[t(177, 124, 120, 67, "@5jz") + n(-430, "WZJM", -422, -405) + o(-132, -92, -129, -168, "dSQH")]++, this[A("hCJP", 104, 65) + t(83, 110, 93, 108, "*rwF") + e(968, 957, "nFOy", 944, 966)] === -1 * 4308 + -1409 + 1 * 5718 && (this[o(-189, -145, -224, -125, "(b8T") + e(1026, 1034, "h%gz", 989, 972) + "p"] = _0x306c1a[e(894, 917, "*qS7", 1008, 951)]() - this[A("hCJP", 124, 140) + n(-449, "nFOy", -410, -403) + o(-131, -193, -155, -107, "2sB]") + t(55, 146, 116, 163, "4JX)")]);
      else return;
    function n(r, g, a, I, C) {
      return Re(r - 416, g - 271, a - -1760, I - 143, g);
    }
    function t(r, g, a, I, C) {
      return ge(r - 314, C, a - 514);
    }
    function e(r, g, a, I, C) {
      return Re(r - 50, g - 456, C - -381, I - 343, a);
    }
    function A(r, g, a, I, C) {
      return se(r - 77, g - 299, a - 447, g - 288, r);
    }
    function o(r, g, a, I, C) {
      return Re(r - 454, g - 190, r - -1432, I - 177, C);
    }
    window[o(-184, -238, -126, -238, "8Ww)") + t(35, -17, 16, 73, "O9bN") + o(-203, -150, -166, -259, "GMYv") + "r"](n(-451, "n6xL", -462, -510) + "wn", this[A("1k)b", 102, 79) + o(-160, -207, -178, -208, "hCJP") + t(66, -20, 13, 63, "!sTl")][o(-117, -169, -133, -87, "nFOy")](this));
  }
  [Re(1252, 1234, 1297, 1328, "8Ww)") + se(-187, -104, -124, -138, "!sTl") + "lt"]() {
    if (!Ao() || !this[e(447, 439, 433, 374, "l8BJ") + o(176, 199, "*qS7") + "p"])
      if (o(150, 188, "UVso") === A(939, 908, 932, 914, "V2zx")) {
        var n = {};
        return n[e(402, 402, 396, 413, "ZhJV") + A(965, 913, 946, 902, "V2zx") + "e"] = !1, n;
      } else {
        var t = {};
        return t[o(262, 220, "bnPr") + o(118, 137, "V2zx") + "e"] = !1, t;
      }
    function e(g, a, I, C, s) {
      return se(g - 316, a - 166, I - 495, I - 599, s);
    }
    function A(g, a, I, C, s) {
      return ge(g - 280, s, a - 1402);
    }
    function o(g, a, I, C, s) {
      return NA(a - -269, a - 215, I - 429, I);
    }
    function r(g, a, I, C, s) {
      return HA(s, C - -235);
    }
    return { performance: !0, hiccupAmount: this[o(166, 146, "Y2T8") + e(405, 371, 352, 296, "TGT7") + A(958, 910, 878, 898, "r2!]") + "t"](), firstHiccup: this[r(292, 358, 294, 294, "l8BJ") + r(221, 283, 286, 277, "BRB!") + A(994, 1014, 1e3, 963, "$19G") + e(425, 401, 426, 420, "hCJP") + "ss"]() };
  }
  [HA("l8BJ", 549) + NA(475, 416, 464, "^t0X") + HA("O9bN", 541) + "t"]() {
    function n(e, A, o, r, g) {
      return Re(e - 275, A - 98, r - -853, r - 66, e);
    }
    function t(e, A, o, r, g) {
      return Re(e - 447, A - 431, A - -696, r - 11, o);
    }
    return this[n("r2!]", 369, 468, 428) + n("hCJP", 491, 459, 454) + t(601, 617, "n6xL", 558)];
  }
  [Re(1219, 1282, 1267, 1266, "TGT7") + NA(400, 399, 453, "$19G") + ge(-467, "O9bN", -411) + ge(-486, "2sB]", -460) + "ss"]() {
    function n(t, e, A, o, r) {
      return NA(o - 144, e - 371, A - 478, r);
    }
    return this[n(565, 559, 561, 583, "@5jz") + n(708, 634, 664, 652, "GMYv") + "p"];
  }
}
const QQ = -3645 + 8427 * -1 + 12552, EQ = 240, _r = -1 * 1478 + -469 + 1977 * 1, MI = -6246 + 7643 * -1 + 13904, WI = 1581 + -1 * 1573, er = {};
er.codec = "avc1.42E01E", er.bitrate = 1e6;
const po = er, xQ = -6161 + 449 * -1 + 6612, dQ = -15 * 2185 + 48453 + 14322;
class lQ {
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
    let n = 1 * 1213 + -81 + -4 * 283;
    for (const t of this.testFramesSizesList)
      n += t;
    return this.shouldBeTested = !1, n > this.maximumTestFramesSize;
  }
}
class LI {
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
function uQ(i) {
  if (!i) return !1;
  const n = LI.isSupported();
  return !n && w.logError("Video encoding is not supported in this browser."), n;
}
const tr = {};
tr.LOW = "low", tr.STANDARD = "standard";
const dn = tr, or = {};
or.SPS = "SPS", or.PPS = "PPS";
const ni = or;
class hQ {
  parseAVCCParameterSets(n) {
    try {
      let t = 0;
      if (t += 7580 + 1 * -7576, t >= n.length) return;
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
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, ni.SPS);
  }
  extractPPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, ni.PPS);
  }
  extractParameterSetFromAVCCAndSkipToNext(n, t, e) {
    if (t >= n.length) {
      const r = {};
      return r.nextOffset = t, r;
    }
    const A = e === ni.SPS ? n[t] & 1332 + -809 * -1 + -2110 : n[t], o = t + 1;
    return this.skipToNextSectionAndReturnFirstParameterSet(n, o, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(n, t, e) {
    let A = t;
    for (let r = -1361 * -2 + -397 * -22 + -11456; r < e; r++) {
      const g = this.extractSingleParameterSetFromAVCC(n, A);
      if (A = g.nextOffset, g.parameterSet && r === -1 * -5299 + -1 * -5387 + 822 * -13) {
        const a = {};
        return a.parameterSet = g.parameterSet, a.nextOffset = A, a;
      }
    }
    const o = {};
    return o.nextOffset = A, o;
  }
  extractSingleParameterSetFromAVCC(n, t) {
    if (t + (3 * 2623 + 2 * -2227 + -3413) > n.length) {
      const I = {};
      return I.nextOffset = t, I;
    }
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint16(t, !1), o = t + (-4219 * 1 + -8636 + 12857), r = o + A;
    if (r > n.length) {
      const I = {};
      return I.nextOffset = t, I;
    }
    const g = n.slice(o, r), a = {};
    return a.parameterSet = g, a.nextOffset = r, a;
  }
}
class fQ {
  parameterSetsHandler;
  START_CODE = new Uint8Array([0, 718 * -7 + -1127 + 6153, 0, 3 * 323 + 1 * 5165 + -6133]);
  parameterSets;
  constructor() {
    this.parameterSetsHandler = new hQ();
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
    if (t + (561 + 3048 * -2 + 5539) > n.length) return;
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint32(t, !1), o = t + (-1 * 5794 + 6666 + -434 * 2), r = o + A;
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
class pQ {
  chunks = [];
  maxChunksCount;
  constructor(n = WI, t = _r) {
    this.cleanSetup(n, t);
  }
  cleanSetup(n, t) {
    this.clear(), this.maxChunksCount = (n + (29 * 259 + -5176 + -2334)) * t;
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
class Va {
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
class yQ {
  getScaledResolution(n, t) {
    const { height: e, width: A } = n, o = A / e;
    if (eI() && e > A) {
      const g = e, a = A, I = g / a, C = t * I;
      return { width: Math.floor(C / (5486 + -1371 * 4)) * (-2069 * 2 + -1 * 4859 + -8999 * -1), height: t };
    }
    if (A < e) {
      const g = t / o;
      return { width: t, height: Math.floor(g / 2) * 2 };
    }
    const r = t * o;
    return { width: Math.floor(r / (2678 + 2676 * -1)) * (1 * -1142 + 8953 + -2603 * 3), height: t };
  }
  create(n, t) {
    switch (n) {
      case dn.STANDARD:
        return new Va().setBitrate(po.bitrate).setCodec(po.codec).setFramerate(_r).setResolution(this.getScaledResolution(t, QQ)).build();
      case dn.LOW:
        return new Va().setBitrate(po.bitrate).setCodec(po.codec).setFramerate(MI).setResolution(this.getScaledResolution(t, EQ)).build();
      default:
        throw w.logError("Unsupported preset for video encoder config");
    }
  }
}
class mQ {
  videoProcessor;
  videoEncoder;
  chunkStorage;
  qualityTester;
  cameraHandler;
  videoEncoderConfigFactory;
  cameraFramerate;
  captureIntervalId;
  videoElement;
  currentConfigPreset = dn.STANDARD;
  customEvent;
  currentResolution;
  boundCameraPropsChangedHandler;
  constructor(n, t, e, A, o) {
    this.videoProcessor = n, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new yQ(), this.chunkStorage = new pQ(), this.cameraFramerate = _r, this.customEvent = o, this.videoEncoder.create(this.onChunkEncoded.bind(this)), this.boundCameraPropsChangedHandler = this.handleCameraPropsChange.bind(this), this.setupCameraPropsChangedListener();
  }
  onChunkEncoded(n, t) {
    this.chunkStorage.add(n), t?.["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(n.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(WI, MI), this.currentConfigPreset = dn.LOW, this.startRecording();
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
    if (eI()) return;
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
    let n = 343 * 27 + -517 + -8 * 1093;
    const t = this.cameraFramerate, e = (-2743 * -1 + -9501 + 7758) / t;
    this.captureIntervalId = setInterval(() => {
      if (this.videoElement && this.videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const A = new VideoFrame(this.videoElement, { timestamp: performance.now() * 1e3 }), o = n % t === 0;
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
class wQ {
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
    if (!this.customEvent) throw w.logError("CustomEvent is not set");
  }
  build() {
    try {
      this.validate();
    } catch {
      return;
    }
    return new mQ(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler, this.customEvent);
  }
}
class DQ {
  create({ cameraHandler: n, customEvent: t, isVideoCaptureEnabled: e }) {
    if (!uQ(e)) return;
    const A = new lQ(xQ, dQ), o = new LI(), r = new fQ();
    return new wQ().setQualityTester(A).setVideoEncoder(o).setVideoProcessor(r).setCameraHandler(n).setCustomEvent(t).build();
  }
}
function bQ(i, n) {
  const { facingMode: t = Or.FRONT, isVideoCaptureEnabled: e } = n ?? {}, A = DA(null), [o, r] = Z(), [g, a] = Z(), { handleError: I, setIsCameraReady: C } = ue(), s = de((E) => {
    a((x) => lB(E, x));
  }, []);
  J(() => {
    if (!A.current) {
      I(new w("Something went wrong during video initialization"));
      return;
    }
    const E = new CQ(A.current), x = new sQ(), Q = new gQ(x), l = new FI(), h = new BQ(), f = {};
    f.cameraHandler = l, f.customEvent = i, f.isVideoCaptureEnabled = e;
    const p = new DQ().create(f), m = {};
    m.videoHandler = E, m.cameraHandler = l, m.performanceCheckup = h, m.cameraEvaluator = Q, m.videoRecorder = p;
    const D = new cQ(m);
    return (async () => {
      try {
        const y = {};
        y.facingMode = t, await D.startFirstVideoStream(y);
      } catch (y) {
        if (y instanceof Error) {
          I(w.fromCameraError(y));
          return;
        }
      }
      r(D), C(!0), s(D.getCameraResolution());
    })(), () => {
      D?.stopStreaming(), C(!1), r(void 0);
    };
  }, [t, I, C, A, s, e, i]);
  const B = {};
  return B.cameraService = o, B.cameraResolution = g, B.onCameraResolutionChange = s, B.videoRef = A, B;
}
function kQ({
  cameraConfiguration: i,
  children: n,
  customEvent: t
}) {
  const { cameraResolution: e, cameraService: A, onCameraResolutionChange: o, videoRef: r } = bQ(
    t,
    i
  ), g = hA(
    () => ({
      cameraService: A,
      cameraResolution: e,
      onCameraResolutionChange: o,
      videoRef: r
    }),
    [A, e, o, r]
  );
  return /* @__PURE__ */ b(gn.Provider, { value: g, children: n });
}
function SQ({
  cameraConfiguration: i,
  children: n
}) {
  return /* @__PURE__ */ b(kQ, { cameraConfiguration: i, customEvent: qA, children: n });
}
let F;
const be = new Array(128).fill(void 0);
be.push(void 0, null, !0, !1);
function nr(i) {
  return be[i];
}
let xe = 3469 * 1 + -8053 * 1 + 4584, jt = null;
function Yo() {
  return (jt === null || jt.byteLength === -5 * 1790 + 365 * 5 + 7125) && (jt = new Uint8Array(F.memory.buffer)), jt;
}
const To = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, GQ = typeof To.encodeInto == "function" ? function(i, n) {
  return To.encodeInto(i, n);
} : function(i, n) {
  const t = To.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function io(i, n, t) {
  if (t === void 0) {
    const g = To.encode(i), a = n(g.length, 3311 + -702 * 1 + -2608) >>> -2 * -1636 + 3306 + -6578;
    return Yo().subarray(a, a + g.length).set(g), xe = g.length, a;
  }
  let e = i.length, A = n(e, -7145 + 1 * 7151 + -5) >>> -11108 + 2777 * 4;
  const o = Yo();
  let r = -7337 + 7829 * 1 + -492;
  for (; r < e; r++) {
    const g = i.charCodeAt(r);
    if (g > 758 * -2 + 3 * -1207 + 5264) break;
    o[A + r] = g;
  }
  if (r !== e) {
    r !== -8263 + 2463 * -4 + 18115 && (i = i.slice(r)), A = t(A, e, e = r + i.length * (-1989 + 1 * 1992), 1) >>> 2 * -1839 + 3646 * -1 + 7324;
    const g = Yo().subarray(A + r, A + e), a = GQ(i, g);
    r += a.written, A = t(A, e, r, -1 * 6329 + -8933 + -1 * -15263) >>> 0;
  }
  return xe = r, A;
}
function OI(i) {
  return i == null;
}
let qt = null;
function Be() {
  return (qt === null || qt.byteLength === 0) && (qt = new Int32Array(F.memory.buffer)), qt;
}
let to = be.length;
function NQ(i) {
  i < 132 || (be[i] = to, to = i);
}
function JI(i) {
  const n = nr(i);
  return NQ(i), n;
}
const ir = {};
ir.ignoreBOM = !0, ir.fatal = !0;
const UI = typeof TextDecoder < "u" ? new TextDecoder("utf-8", ir) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && UI.decode();
function ln(i, n) {
  return i = i >>> -991 * -3 + -3856 * 1 + 1 * 883, UI.decode(Yo().subarray(i, i + n));
}
function rr(i) {
  to === be.length && be.push(be.length + 1);
  const n = to;
  return to = be[n], be[n] = i, n;
}
let Vt = null;
function YI() {
  return (Vt === null || Vt.byteLength === 6 * 494 + -489 + -825 * 3) && (Vt = new Uint32Array(F.memory.buffer)), Vt;
}
function Za(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = YI();
  for (let A = 0; A < i.length; A++)
    e[t / (6521 * -1 + -7501 * -1 + -976) + A] = rr(i[A]);
  return xe = i.length, t;
}
function za(i, n) {
  i = i >>> 5222 + 1 * 5233 + -17 * 615;
  const t = YI(), e = t.subarray(i / (6136 + 1022 * -6), i / (2938 + -1 * 7831 + 4897 * 1) + n), A = [];
  for (let o = 0; o < e.length; o++)
    A.push(JI(e[o]));
  return A;
}
function RQ(i, n) {
  const t = io(i, F.__wbindgen_malloc, F.__wbindgen_realloc), e = xe, A = io(n, F.__wbindgen_malloc, F.__wbindgen_realloc), o = xe, r = F.is_mobile_supported(t, e, A, o);
  return Kr.__wrap(r);
}
const ar = {};
ar.register = () => {
}, ar.unregister = () => {
};
const Xa = typeof FinalizationRegistry > "u" ? ar : new FinalizationRegistry((i) => F.__wbg_licensevalidationresult_free(i >>> -2492 + 1246 * 2));
class Kr {
  static __wrap(n) {
    n = n >>> -1159 + 1 * 4701 + -3542;
    const t = Object.create(Kr.prototype);
    return t.__wbg_ptr = n, Xa.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = -1646 * 2 + 2311 + -981 * -1, Xa.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    F.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = OI(t) ? 0 : io(t, F.__wbindgen_malloc, F.__wbindgen_realloc), g = xe;
    const a = Za(e, F.__wbindgen_malloc), I = xe, C = Za(A, F.__wbindgen_malloc), s = xe, B = io(o, F.__wbindgen_malloc, F.__wbindgen_realloc), E = xe, x = F.licensevalidationresult_new(n, r, g, a, I, C, s, B, E);
    return this.__wbg_ptr = x >>> -13 * 632 + 1 * 5657 + 1 * 2559, this;
  }
  get is_valid() {
    return F.licensevalidationresult_is_valid(this.__wbg_ptr) !== 8882 + -2 * 4441;
  }
  get features_json() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = Be()[e / (6 * 787 + 1 * 4689 + -9407) + (1969 + -2029 * -4 + 5 * -2017)], t = Be()[e / (3 * 2455 + -6311 + -1050) + (-2015 * -1 + -4031 + 2017)];
      let A;
      return n !== -5395 + 1 * -5345 + 10740 && (A = ln(n, t).slice(), F.__wbindgen_free(n, t * (10106 + 2021 * -5), -1 * -948 + -9655 + 8708)), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get errors() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = Be()[A / 4 + (-1085 + -7123 * 1 + 8208)], t = Be()[A / 4 + (4691 * -1 + -4546 + 9238)], e = za(n, t).slice();
      return F.__wbindgen_free(n, t * (-3201 + -641 * -5), -1706 + -2 * 577 + 2864), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-747 * -10 + -5104 + -2350);
    }
  }
  get warnings() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = Be()[A / (2439 + 487 * -5) + (3235 * -2 + -2171 + 8641 * 1)], t = Be()[A / (-2 * 995 + -5043 + 1 * 7037) + 1], e = za(n, t).slice();
      return F.__wbindgen_free(n, t * (2044 + -3 * 859 + 1 * 537), -1 * -4221 + 1878 + -6095), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(5368 + 2203 * -3 + -3 * -419);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = Be()[o / (344 + -2738 * 1 + 2398) + (3760 + -636 * 13 + 4508)], A = Be()[o / (-531 * 7 + 3360 + 361) + (-1898 + 1899 * 1)];
      return n = e, t = A, ln(e, A);
    } finally {
      F.__wbindgen_add_to_stack_pointer(-11 * -680 + -1 * 9011 + 1547), F.__wbindgen_free(n, t, 1 * 5717 + -5281 * 1 + -435 * 1);
    }
  }
}
async function vQ(i, n) {
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
function FQ() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = nr(t), A = typeof e == "string" ? e : void 0;
    var o = OI(A) ? 1757 + -8587 * 1 + 6830 : io(A, F.__wbindgen_malloc, F.__wbindgen_realloc), r = xe;
    Be()[n / (-1 * 3833 + 1118 + 2719) + (8267 + -2 * 4133)] = r, Be()[n / (-1 * 8549 + -3097 + 11650) + (-9496 * 1 + 8322 + -2 * -587)] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    JI(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = ln(n, t);
    return rr(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return rr(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return nr(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(ln(n, t));
  }, i;
}
function MQ(i, n) {
  return F = i.exports, TI.__wbindgen_wasm_module = n, qt = null, Vt = null, jt = null, F;
}
async function TI(i) {
  if (F !== void 0) return F;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEoAhQgACACQRhqEC8MBAsgAkEkakIANwIAIAJBATYCHCACQaiOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAwsgAkEkakIANwIAIAJBATYCHCACQcCOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAgsgAkEkakIANwIAIAJBATYCHCACQeCOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAQsgAkEkakIANwIAIAJBATYCHCACQfyOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8LIAJBMGokAAu2CQEQfyMAQeAAayIDJAACQAJAAkACQAJAIAJFBEBBuLHCAC0AABpBmAMQCiICRQ0DIAJBADsBkgMgAkEANgKIAiACQYwCaiEKIANB0ABqIQggA0HIAGpBBHIhBQNAIAEvAZIDIAZLBEAgA0E8aiABIAdqIgRBjAJqKAIAIARBlAJqKAIAENYBAkACQAJAAkACQAJAAkAgASAJaiIELQAAQQFrDgUBAgMEBQALIANBADoASAwFCyADQQE6AEggAyAEQQFqLQAAOgBJDAQLIAhBCGogBEEQaikDADcDACAIIARBCGopAwA3AwAgA0ECOgBIDAMLIAUgBEEEaigCACAEQQxqKAIAENYBIANBAzoASAwCCyAFIARBBGoQOCADQQQ6AEgMAQsgA0EgaiAEQQRqEOcBIAVBCGogA0EoaigCADYCACAFIAMpAyA3AgAgA0EFOgBICyACLwGSAyIEQQtPDQMgAiAEQQFqOwGSAyAKIARBDGxqIgsgAykCPDcCACALQQhqIANBxABqKAIANgIAIAIgBEEYbGoiBCADKQNINwMAIARBCGogCCkDADcDACAEQRBqIANB2ABqKQMANwMAIAZBAWohBiAHQQxqIQcgCUEYaiEJDAELCyAAIAY2AgggAEEANgIEIAAgAjYCAAwFCyADQQhqIAEoApgDIAJBAWsiDxAXIAMoAggiAkUNA0G4scIALQAAGiADKAIMIQdByAMQCiIERQ0CIAQgAjYCmAMgBEEAOwGSAyAEQQA2AogCIAJBADsBkAMgAiAENgKIAiADIAQ2AgggAyAHQQFqIhA2AgwgA0HIAGpBAnIhCCADQSZqIQ4gA0EiaiEFQZwDIQcgAygCECEKA0AgDCABLwGSA08NAiADQRRqIAEgC2oiAkGMAmooAgAgAkGUAmooAgAQ1gFBACEGAkACQAJAAkACQAJAIAEgCWoiAi0AAEEBaw4FAAECAwQFC0EBIQYgAkEBai0AACERDAQLIA5BCGogAkEQaikBADcBACAOIAJBCGopAQA3AQBBAiEGDAMLIANByABqIAJBBGooAgAgAkEMaigCABDWASAFQQhqIANB0ABqKAIANgEAIAUgAykCSDcBAEEDIQYMAgtBBCEGIANByABqIAJBBGoQOCAFQQhqIANB0ABqKAIANgEAIAUgAykCSDcBAAwBCyADQcgAaiACQQRqEOcBIAVBCGogA0HQAGooAgA2AQAgBSADKQNINwEAQQUhBgsgA0E8aiABIAdqKAIAIA8QFyADKAJEIRIgAygCQCENIAMoAjwhAiAIIAMpASA3AQAgCEEIaiADQShqKQEANwEAIAhBDmogA0EuaikBADcBACADIBE6AEkgAyAGOgBIIAJFBEBBuLHCAC0AABpBmAMQCiICRQ0EIAJBADsBkgMgAkEANgKIAkEAIQ0LIAQgECADQRRqIANByABqIAIgDRCLASAMQQFqIQwgCUEYaiEJIAtBDGohCyAHQQRqIQcgCiASakEBaiEKDAALAAtB0OfBAEEgQczowQAQ3gEACyAAIAMpAgg3AgAgAEEIaiAKNgIADAILAAtBgJfCAEErQfiDwAAQ3gEACyADQeAAaiQAC4wIAgl/A34jAEHwAWsiBiQAIAZBAjYCaCAGQgQ3AmAgBkEANgKQASAGQQA2ArgBIAZBkAFqIgQgBkHgAGoQMyAGQcABaiIFIARBMBC+AhogBUEEciEIIAZByAFqIQkgBkHoAWohCiAGKALIASEDA0AgCSEEIAYoAugBIgchBSAHQQVJIgtFBEAgBigCxAEhBSADIQQLAkAgBUUNACAFQQN0IARqQQhrKQMAQgBSDQAgCiEFIAtFBEAgBigCxAEhByAIIQULIAdFDQEgBSAHQQFrNgIADAELCyAGQZABaiAGQcABakEwEL4CGiABIAYgAUEwEL4CIgNBkAFqQTAQvgIhBiADQTBqIANBMBC+AhogAkEGdiEFAkAgAkE/TQRAIANB4ABqIAMQrAEMAQsgA0EwaiEBIAMoAjBBAkYEQCADKAI0IQELIAEoAigiBEEFTwRAIAEoAgQhBAsgA0EANgLAASADQQA2AugBIANBwAFqIgEgBCAFakEBahCtASADQZABaiIEIAFBMBC+AhogBCAFEEkgA0EwaiEBIANBkAFqIgkCfyADKAIwQQJGBEAgAygCNCEBCyABKAIoIgRBBE0EQCABQQhqDAELIAEoAgQhBCABKAIICyIBIAEgBEEDdGoQQyADQeAAaiAJQTAQvgIaCwJAIAJBP3EiCUUNACADKAKIASIBQQRNBH8gA0HoAGoFIAMoAmQhASADKAJoCyEEIAEgBU8EQCABIAVGDQEgA0GIAWohCCABQQN0IAVBA3QiBWshASAEIAVqIQdBACACa0E/ca0hDSAJrSEOA0AgByAMIAcpAwAiDCAOhoQ3AwAgB0EIaiEHIAwgDYghDCABQQhrIgENAAsgDFANAUEEIQECfyADKAKIASIFQQRNBEAgBSEHIANB6ABqDAELIANB4ABqQQRyIQggAygCZCEHIAUhASADKAJoCyEEIAEgB0YEQCADQeAAaiIBEKABIAFBBHIhCCADKAJkIQcgAygCaCEECyAEIAdBA3RqIAw3AwAgCCAIKAIAQQFqNgIADAELIAUgAUGQ/cAAELkBAAsgA0HAAWoiASADQeAAakEwEL4CGiABQQRyIQUgA0HIAWohCCADQegBaiEJIAMoAsgBIQoDQCAIIQQgAygC6AEiByEBIAdBBUkiC0UEQCAKIQQgAygCxAEhAQsCQCABRQ0AIAFBA3QgBGpBCGspAwBCAFINACAJIQEgC0UEQCADKALEASEHIAUhAQsgB0UNASABIAdBAWs2AgAMAQsLIANBkAFqIANBwAFqQTAQvgIaAkAgAkHAAEkNACADKAIwQQJGDQAgA0EwahCPAgsgBhCPAiAAIAYgA0GQAWpBMBC+AkE4EL4CGiADQfABaiQAC5UIAgp/AX4jAEHAAWsiBCQAIARBAjYCOCAEQgQ3AjAgBEEANgJgIARBADYCiAEgBEHgAGoiAiAEQTBqEDMgBEGQAWoiAyACQTAQvgIaIANBBHIhBiAEQZgBaiEHIARBuAFqIQggBCgCmAEhCQNAIAchAyAEKAK4ASIFIQIgBUEFSSIBRQRAIAQoApQBIQIgCSEDCwJAIAJFDQAgAkEDdCADakEIaykDAEIAUg0AIAghAiABRQRAIAQoApQBIQUgBiECCyAFRQ0BIAIgBUEBazYCAAwBCwsgBEHgAGogBEGQAWpBMBC+AhogACAEIABBMBC+AiIBQeAAakEwEL4CIQogASECAkACQAJAAn8gASgCACIEQQJGBEAgASgCBCECCwJAIAIoAigiAEEFTwR/IAIoAgQFIAALBEAgBEECRw0DIAEoAgQiAygCKCIAQQRLDQEgA0EIagwCCyABQQI2AjggAUIENwIwIAFBADYCYCABQQA2AogBIAFB4ABqIgMgAUEwahAzIAFBkAFqIgAgA0EwEL4CGiAAQQRyIQYgAUGYAWohByABQbgBaiEIIAEoApgBIQkDQCAHIQMgASgCuAEiAiEAIAJBBUkiBUUEQCAJIQMgASgClAEhAAsCQCAARQ0AIABBA3QgA2pBCGspAwBCAFINACAIIQAgBUUEQCABKAKUASECIAYhAAsgAkUNASAAIAJBAWs2AgAMAQsLIAFB4ABqIAFBkAFqQTAQvgIaIARBAkYNBCABEI8CDAQLIAMoAgQhACADKAIICyECIAFBADYCkAEgAUEANgK4ASABQZABaiIDIAIgAiAAQQN0ahBDIAFBMGogA0EwEL4CGgwBCyABQeAAaiABQTAQvgIaIAEoAogBIgBBBE0EfyABQegAagUgASgCZCEAIAEoAmgLIQIgAUEANgKQASABQQA2ArgBIAFBkAFqIgMgAiACIABBA3RqEEMgAUEwaiADQTAQvgIaIAFB4ABqEI8CCyABKAJYIgJBBE0EfyABQThqBSABKAI0IQIgASgCOAshACACBEAgAEEIayEDIAJBA3QhAgNAIAIgA2oiACALIAApAwAiC0IBiIQ3AwAgC0I/hiELIAJBCGsiAg0ACwsgAUGQAWoiACABQTBqQTAQvgIaIABBBHIhBiABQZgBaiEHIAFBuAFqIQggASgCmAEhCQNAIAchAyABKAK4ASICIQAgAkEFSSIFRQRAIAkhAyABKAKUASEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAghACAFRQRAIAEoApQBIQIgBiEACyACRQ0BIAAgAkEBazYCAAwBCwsgAUHgAGogAUGQAWpBMBC+AhoLIAoQjwIgCiABQeAAakEwEL4CGiABQcABaiQAC+0HAgh/BX4jAEHQAGsiBCQAIAIoAigiBSEJIAVBBU8EQCACKAIEIQkLAkACQAJAAn8CQAJAAn8gASgCKCIIQQVPBEAgCSABKAIESQ0DIAEoAgQhCCABKAIIDAELIAggCUsNASABQQhqCyEDIAVBBE0EfyACQQhqBSACKAIEIQUgAigCCAshAQJAIAggBSAFIAhLGyIJBEAgASEGIAkhBwNAIAYgCyADKQMAIgsgBikDACINfSIOfCIPNwMAIA4gD1atIAwgCyANVK19fCILQj+HIQwgA0EIaiEDIAZBCGohBiAHQQFrIgcNAAsgBSAISQ0BIAtCAFINBgwFCyAFIAhPDQQLQfT/wABBIUGYgMEAEN4BAAsgAUEIagwBCyABKAIEIQggASgCCAshAwJAAkAgCCAJTwRAIAJBKGohCCAJAn8gBUEETQRAIAJBCGohBiAFDAELIAIoAgghBiACKAIECyIHIAcgCUsbIgcEQANAIAYgCyADKQMAIgsgBikDACINfSIOfCIPNwMAIA4gD1atIAwgCyANVK19fCILQj+HIQwgA0EIaiEDIAZBCGohBiAHQQFrIgcNAAsgCCgCACEFCyAEQRhqIAEgCUGo7sAAENMBIAQoAhwhASAFQQVPBEAgAigCBCEFCyAEKAIYIQYgBEEQaiACIAEQkwEgBCgCECIHQYGAgIB4RwRAIAdFDQIACwJ/IAgoAgAiA0EFTwRAIAIoAgQiAyAFSQ0EIAIoAggMAQsgAyAFSQ0DIAJBCGoLIAVBA3RqIgcgAUEDdCIKaiAHIAMgBWtBA3QQvQIgByAGIAoQvgIaIAJBBGogCCAIKAIAQQVPGyABIANqNgIAIAtQDQUgBEEIaiACIAlBuO7AABDTASAEKAIIIAQoAgxB4O3AAEEBEEwMBQsgCSAIQZjuwAAQuAEAC0Hs8MAAQRFBgPHAABDeAQALQavtwABBHkHM7cAAEN4BAAsgASAJQQN0IgdqIQMgBUEDdCAHayEGA0AgBkUNAiAGQQhrIQYgAykDACADQQhqIQNQDQALCyAEQSxqQgA3AgAgBEEBNgIkIARB3P/AADYCICAEQYyswgA2AiggBEEgakGogMEAEOsBAAsgBEEgaiIBIAJBMBC+AhogAUEEciEBIARBKGohAiAEQcgAaiEFIAQoAighCQNAIAIhByAEKAJIIgYhAyAGQQVJIghFBEAgBCgCJCEDIAkhBwsCQCADRQ0AIANBA3QgB2pBCGspAwBCAFINACAFIQMgCEUEQCAEKAIkIQYgASEDCyAGRQ0BIAMgBkEBazYCAAwBCwsgACAEQSBqQTAQvgIaIARB0ABqJAALtwcBBX8jAEHwAGsiBSQAIAJBA3QhByACIQgCQAJAAkADQCAIIQYgB0UEQEEAIQYMAgsgBkEBayEIIAdBCGsiByABaikDAFANAAsgAiAGSQ0BCyAEQQN0IQcgBCECAkADQCACIQggB0UEQEEAIQgMAgsgCEEBayECIAdBCGsiByADaikDAFANAAsgBCAISQ0CCwJAIAEgBiADIAgQqAFB/wFxIgJBAUcEQCACQf8BRwRAIAVBAjYCDCAFQgQ3AgQgBUEANgIQIAVBADYCOCAFQRBqIgEgBUEEahAzIAVBQGsiAiABQTAQvgIaIAJBBHIhASAFQcgAaiECIAVB6ABqIQMgBSgCSCEEA0AgAiEIIAUoAmgiByEGIAdBBUkiCUUEQCAFKAJEIQYgBCEICwJAIAZFDQAgBkEDdCAIakEIaykDAEIAUg0AIAMhBiAJRQRAIAUoAkQhByABIQYLIAdFDQEgBiAHQQFrNgIADAELCyAAQQhqIAVBQGtBMBC+AhogAEEBOgAADAILIAVBADYCQCAFQQA2AmggBUFAayICIAMgAyAIQQN0ahBDIAVBEGogAkEwEL4CGiAFKAI4IgdBBE0EfyAFQRhqBSAFKAIUIQcgBSgCGAsgByABIAYQTCAFQUBrIgEgBUEQakEwEL4CGiABQQRyIQEgBUHIAGohAiAFQegAaiEDIAUoAkghBANAIAIhCCAFKAJoIgchBiAHQQVJIglFBEAgBSgCRCEGIAQhCAsCQCAGRQ0AIAZBA3QgCGpBCGspAwBCAFINACADIQYgCUUEQCAFKAJEIQcgASEGCyAHRQ0BIAYgB0EBazYCAAwBCwsgAEEIaiAFQUBrQTAQvgIaIABBADoAAAwBCyAFQQA2AkAgBUEANgJoIAVBQGsiAiABIAEgBkEDdGoQQyAFQRBqIAJBMBC+AhogBSgCOCIHQQRNBH8gBUEYagUgBSgCFCEHIAUoAhgLIAcgAyAIEEwgBUFAayIBIAVBEGpBMBC+AhogAUEEciEBIAVByABqIQIgBUHoAGohAyAFKAJIIQQDQCACIQggBSgCaCIHIQYgB0EFSSIJRQRAIAUoAkQhBiAEIQgLAkAgBkUNACAGQQN0IAhqQQhrKQMAQgBSDQAgAyEGIAlFBEAgBSgCRCEHIAEhBgsgB0UNASAGIAdBAWs2AgAMAQsLIABBCGogBUFAa0EwEL4CGiAAQQI6AAALIAVB8ABqJAAPCyAGIAJBuIDBABC4AQALIAggBEHIgMEAELgBAAvTCAMDfwF+AXwjAEFAaiICJAACfwJAAkACQCAALQAAIgNBA2sOBQEAAAACAAsCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIANBAWsOEQIDAAQFBgAHCAkKCwwNDg8QAQsACyACIAAtAAE6ACAgAkE0akIBNwIAIAJBAjYCLCACQZzlwQA2AiggAkE0NgIEIAFBGGooAgAhACACIAI2AjAgAiACQSBqNgIAIAEoAhQgACACQShqEC8MEQsgAiAAKQMINwMgIAJBNGpCATcCACACQQI2AiwgAkG45cEANgIoIAJBNTYCBCABQRhqKAIAIQAgAiACNgIwIAIgAkEgajYCACABKAIUIAAgAkEoahAvDBALIAIgACkDCDcDICACQTRqQgE3AgAgAkECNgIsIAJBuOXBADYCKCACQTY2AgQgAUEYaigCACEAIAIgAjYCMCACIAJBIGo2AgAgASgCFCAAIAJBKGoQLwwPCyACIAAoAgQ2AiAgAkE0akIBNwIAIAJBAjYCLCACQdTlwQA2AiggAkE3NgIEIAFBGGooAgAhACACIAI2AjAgAiACQSBqNgIAIAEoAhQgACACQShqEC8MDgsgAiAAKQIENwIgIAJBNGpCATcCACACQQE2AiwgAkHs5cEANgIoIAJBODYCBCABQRhqKAIAIQAgAiACNgIwIAIgAkEgajYCACABKAIUIAAgAkEoahAvDA0LIAEoAhRB9OXBAEEKIAFBGGooAgAoAgwRAAAMDAsgASgCFEH+5cEAQQwgAUEYaigCACgCDBEAAAwLCyABKAIUQYrmwQBBDiABQRhqKAIAKAIMEQAADAoLIAEoAhRBmObBAEEIIAFBGGooAgAoAgwRAAAMCQsgASgCFEGg5sEAQQMgAUEYaigCACgCDBEAAAwICyABKAIUQaPmwQBBBCABQRhqKAIAKAIMEQAADAcLIAEoAhRBp+bBAEEMIAFBGGooAgAoAgwRAAAMBgsgASgCFEGz5sEAQQ8gAUEYaigCACgCDBEAAAwFCyABKAIUQcLmwQBBDSABQRhqKAIAKAIMEQAADAQLIAEoAhRBz+bBAEEOIAFBGGooAgAoAgwRAAAMAwsgASgCFCAAKAIEIABBCGooAgAgAUEYaigCACgCDBEAAAwCCwJ/IAArAwgiBr0iBUKAgICAgICA+P8Ag0KAgICAgICA+P8AUgRAIAJBKGohACAGIAAQDwwBC0G5kcEAQbyRwQAgBUIAWSIDG0HAkcEAIAVC/////////weDUCIEGyEAQQNBBCADG0EDIAQbCyEDIAJBDGpCATcCACACIAM2AiQgAiAANgIgIAJBAzYCHCACQQI2AgQgAkHo8sEANgIAIAFBGGooAgAhACACIAJBIGo2AhggAiACQRhqNgIIIAEoAhQgACACEC8MAQsgASgCFEH48sEAQQQgAUEYaigCACgCDBEAAAsgAkFAayQAC7EHAgd/A34jAEHgAmsiAiQAIAJCADcDCCACQShqQQBBwQAQuwIhBSACQfDDy558NgIgIAJC/rnrxemOlZkQNwMYIAJCgcaUupbx6uZvNwMQIAEoAgAhBCACIAEoAggiAxDgASACKAIEIAIoAgAgBCADEL4CIQcEQCAHECILAkAgA0E/TQRAIAUgBCADEL4CGgwBCyACIANBBnYiBq03AwggAkEQaiAEIAYQCyAFIAQgA0FAcWogA0E/cSIDEL4CGgsgAiADOgBoIAEoAgQEQCAEECILIAJB8ABqIAJBCGpB6AAQvgIaIAJB6AFqQQA2AgAgAkHgAWpCADcDACACQgA3A9gBIAJB0AFqLQAAIQEgAikDcCEJIAJBgAJqIAJBiAFqKAIANgIAIAJB+AFqIAJBgAFqKQMANwMAIAEgAkGQAWoiA2oiBEGAAToAACACIAIpA3g3A/ABIAlCAYZCgICA+A+DIAlCD4hCgID8B4OEIAlCH4hCgP4DgyAJQgmGIglCOIiEhCEKIAGtIgtCO4YgCSALQgOGhCIJQoD+A4NCKIaEIAlCgID8B4NCGIYgCUKAgID4D4NCCIaEhCABQT9zIgUEQCAEQQFqQQAgBRC7AhoLIAqEIQkCQCABQThxQThHBEAgAkHIAWogCTcDACACQfABaiADQQEQCwwBCyACQfABaiIBIANBARALIAJBoAJqIgNBAEE4ELsCGiACIAk3ANgCIAEgA0EBEAsLIAJBADoA0AEgAkGUAmpClICAgMAANwIAIAJBADYCjAIgAiACQewBajYCiAIgAiACQdgBajYCkAIgAkGgAmogAkGIAmogAkHwAWogAkGEAmoQqQECQAJAAkAgAigCwAIiAyACKAK8AiIBTQ0AIAMgAWshBiACKAK0AiABQQJ0aiEDIAIoAqgCIgcgASACKAKwAiIEbGohASAEQQRGIQgDQCAHRQ0BIAhFDQIgASADKAIAIgVBGHQgBUGA/gNxQQh0ciAFQQh2QYD+A3EgBUEYdnJyNgAAIANBBGohAyABIARqIQEgBkEBayIGDQALCyACQZACaiIDIAJB4AFqKQMANwMAIAJBmAJqIgQgAkHoAWooAgA2AgAgAiACKQPYATcDiAJBuLHCAC0AABpBFBAKIgFFDQEgASACKQOIAjcAACAAQpSAgIDAAjcCBCAAIAE2AgAgAUEQaiAEKAIANgAAIAFBCGogAykDADcAACACQeACaiQADwsgBEEEQbDVwAAQuwEACwALoQgBAn8jAEEwayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgACgCACIALQAAQQFrDhYBAgMEBQYHCAkKCwwNDg8QERITFBUWAAsgASgCFEHYxsAAQQcgAUEYaigCACgCDBEAAAwWCyABKAIUQd/GwABBByABQRhqKAIAKAIMEQAADBULIAEoAhRB5sbAAEEKIAFBGGooAgAoAgwRAAAMFAsgASgCFEHwxsAAQQwgAUEYaigCACgCDBEAAAwTCyABKAIUQfzGwABBBCABQRhqKAIAKAIMEQAADBILIAEoAhRBgMfAAEERIAFBGGooAgAoAgwRAAAMEQsgASgCFEGRx8AAQQQgAUEYaigCACgCDBEAAAwQCyABKAIUQZXHwABBCiABQRhqKAIAKAIMEQAADA8LIAEoAhRBn8fAAEEKIAFBGGooAgAoAgwRAAAMDgsgASgCFEGpx8AAQQggAUEYaigCACgCDBEAAAwNCyABKAIUQbHHwABBAyABQRhqKAIAKAIMEQAADAwLIAEoAhRBtMfAAEENIAFBGGooAgAoAgwRAAAMCwsgASgCFEHBx8AAQQ8gAUEYaigCACgCDBEAAAwKCyABKAIUQdDHwABBDSABQRhqKAIAKAIMEQAADAkLIAEoAhRB3cfAAEEOIAFBGGooAgAoAgwRAAAMCAsgASgCFEHrx8AAQQkgAUEYaigCACgCDBEAAAwHCyABKAIUQfTHwABBByABQRhqKAIAKAIMEQAADAYLIAEoAhRB+8fAAEEPIAFBGGooAgAoAgwRAAAMBQsgASgCFEGKyMAAQQ0gAUEYaigCACgCDBEAAAwECyABKAIUQZfIwABBCSABQRhqKAIAKAIMEQAADAMLIAAtAAIhAyACIAAtAAE6AAcgAkEUakICNwIAIAJBLGpBAzYCACACQbDIwAA2AgggAkESNgIkIAJBAzYCDCACIANBA3RB3MjAAGo2AiggAUEYaigCACEAIAIgAkEgajYCECACIAJBB2o2AiAgASgCFCAAIAJBCGoQLwwCCyAALQACIQMgAiAALQABOgAHIAJBFGpCAjcCACACQSxqQQM2AgAgAkGAycAANgIIIAJBEjYCJCACQQM2AgwgAiADQQN0QdzIwABqNgIoIAFBGGooAgAhACACIAJBIGo2AhAgAiACQQdqNgIgIAEoAhQgACACQQhqEC8MAQsgAC0AAiEDIAIgAC0AAToAByACQRRqQgI3AgAgAkEsakEDNgIAIAJBpMnAADYCCCACQRI2AiQgAkEDNgIMIAIgA0EDdEHcyMAAajYCKCABQRhqKAIAIQAgAiACQSBqNgIQIAIgAkEHajYCICABKAIUIAAgAkEIahAvCyACQTBqJAAL2wYBCH8jAEHwAGsiAyQAAkAgAi0AMCIEQQFGBEAgAS0AMCEFIAEoAigiAkEETQR/IAFBCGoFIAEoAgQhAiABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIEIAEgASACQQN0ahBDIAAgBEEwEL4CIAU6ADAMAQsCQAJAAkACQAJAAkACQAJAIAEtADAiCUEBaw4CBwEACyAERQ0BDAILIARFDQELAn8gASgCKCIFQQRNBEAgAUEIaiEHIAUMAQsgASgCCCEHIAEoAgQLIQoCfyACKAIoIgZBBE0EQCACQQhqIQggBgwBCyACKAIIIQggAigCBAshBCAHIAogCCAEEKgBQf8BcQ4CAgMBCyADQUBrIgUgASACEHIgACAJIAUQQgwEC0ECIAlrIQUgBkEETQR/IAJBCGoFIAIoAgQhBiACKAIICyECIANBADYCQCADQQA2AmggA0FAayIEIAIgAiAGQQN0ahBDIANBEGoiAiAEQTAQvgIaIAIgARB1IAQgAkEwEL4CGiAAIAUgBBBCDAMLIANBAjYCDCADQgQ3AgQgA0EANgIQIANBADYCOCADQRBqIgEgA0EEahAzIANBQGsiAiABQTAQvgIaIAJBBHIhCCADQcgAaiEGIANB6ABqIQogAygCSCEEA0AgBiEFIAMoAmgiASECIAFBBUkiB0UEQCAEIQUgAygCRCECCwJAIAJFDQAgAkEDdCAFakEIaykDAEIAUg0AIAohAiAHRQRAIAghAiADKAJEIQELIAFFDQEgAiABQQFrNgIADAELCyADQRBqIgEgA0FAa0EwEL4CGiAAQQEgARBCDAILIAVBBE0EfyABQQhqBSABKAIEIQUgASgCCAshASADQQA2AkAgA0EANgJoIANBQGsiBCABIAEgBUEDdGoQQyADQRBqIgEgBEEwEL4CGiABIAIQdSAEIAFBMBC+AhogACAJIAQQQgwBCyACKAIoIgVBBE0EfyACQQhqBSACKAIEIQUgAigCCAshASADQQA2AkAgA0EANgJoIANBQGsiAiABIAEgBUEDdGoQQyADQRBqIgEgAkEwEL4CGiAAIAFBMBC+AiIAQQIgBGs6ADAgACADKABANgAxIABBNGogA0HDAGooAAA2AAALIANB8ABqJAAL2AYCDX8BfiMAQSBrIgUkAEEBIQ4CQAJAIAJBIiADKAIQIg8RAQANAAJAIAFFBEBBACEBDAELIAAgAWohECAAIQYCQAJAA0ACQCAGIgssAAAiDEEATgRAIAZBAWohBiAMQf8BcSEKDAELIAstAAFBP3EhBiAMQR9xIQggDEFfTQRAIAhBBnQgBnIhCiALQQJqIQYMAQsgCy0AAkE/cSAGQQZ0ciEJIAtBA2ohBiAMQXBJBEAgCSAIQQx0ciEKDAELIAhBEnRBgIDwAHEgBi0AAEE/cSAJQQZ0cnIiCkGAgMQARg0DIAtBBGohBgsgBUEEaiAKQYGABBATAkACQCAFLQAEQYABRg0AIAUtAA8gBS0ADmtB/wFxQQFGDQAgBCAHSw0DAkAgBEUNACABIARNBEAgASAERg0BDAULIAAgBGosAABBQEgNBAsCQCAHRQ0AIAEgB00EQCABIAdGDQEMBQsgACAHaiwAAEG/f0wNBAsCQAJAIAIgACAEaiAHIARrIAMoAgwRAAANACAFQRhqIgkgBUEMaigCADYCACAFIAUpAgQiETcDECARp0H/AXFBgAFGBEBBgAEhCANAAkAgCEGAAUcEQCAFLQAaIg0gBS0AG08NBSAFIA1BAWo6ABogDUEKTw0HIAVBEGogDWotAAAhBAwBC0EAIQggCUEANgIAIAUoAhQhBCAFQgA3AxALIAIgBCAPEQEARQ0ACwwBC0EKIAUtABoiBCAEQQpNGyENIAUtABsiCSAEIAQgCUkbIQwDQCAEIAxGDQIgBSAEQQFqIgk6ABogBCANRg0EIAVBEGogBGohCCAJIQQgAiAILQAAIA8RAQBFDQALCwwHCwJ/QQEgCkGAAUkNABpBAiAKQYAQSQ0AGkEDQQQgCkGAgARJGwsgB2ohBAsgByALayAGaiEHIAYgEEcNAQwDCwsgDUEKQdS+wAAQtwEACyAAIAEgBCAHQYypwAAQmQIACyAERQRAQQAhBAwBCyABIARNBEAgASAERw0DIAEgBGsgASEEIQEMAQsgACAEaiwAAEG/f0wNAiABIARrIQELIAIgACAEaiABIAMoAgwRAAANACACQSIgDxEBACEOCyAFQSBqJAAgDg8LIAAgASAEIAFB/KjAABCZAgALpQYBCX8jAEHwAGsiAyQAAkAgAi0AMCIFQQFGBEAgAS0AMCEEIAEoAigiAkEETQR/IAFBCGoFIAEoAgQhAiABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASACQQN0ahBDIAAgBUEwEL4CIAQ6ADAMAQsCQAJAAkACQAJAIAEtADAiB0EBaw4CBAEACyAFRQ0BDAILIAVFDQELIANBQGsiBCABIAIQciAAIAcgBBBCDAILAn8gASgCKCIEQQRNBEAgAUEIaiEKIAQMAQsgASgCCCEKIAEoAgQLIQgCfyACKAIoIgZBBE0EQCACQQhqIQsgBgwBCyACKAIIIQsgAigCBAshCQJAAkACQCAKIAggCyAJEKgBQf8BcQ4CAQIACyAGQQRNBH8gAkEIagUgAigCBCEGIAIoAggLIQIgA0EANgJAIANBADYCaCADQUBrIgQgAiACIAZBA3RqEEMgA0EQaiICIARBMBC+AhogAiABEHUgBCACQTAQvgIaIAAgBSAEEEIMAwsgA0ECNgIMIANCBDcCBCADQQA2AhAgA0EANgI4IANBEGoiASADQQRqEDMgA0FAayICIAFBMBC+AhogAkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = FQ();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await vQ(await i, n);
  return MQ(t, e);
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return dA(a - -599, g);
  }
  function e(g, a, I, C, s) {
    return dA(s - -661, I);
  }
  function A(g, a, I, C, s) {
    return dA(g - -212, s);
  }
  const o = i();
  function r(g, a, I, C, s) {
    return dA(C - -728, g);
  }
  for (; ; )
    try {
      if (parseInt(t("baM]", -275, -285, -279, -274)) / 1 + parseInt(t("gv8[", -284, -303, -267, -259)) / 2 * (-parseInt(r("yU21", -426, -416, -437, -437)) / 3) + -parseInt(e(-337, -374, "izA8", -374, -354)) / 4 + -parseInt(r("xAyY", -454, -470, -451, -448)) / 5 * (parseInt(A(72, 51, 62, 58, "LcJo")) / 6) + parseInt(r("yXgT", -436, -473, -449, -468)) / 7 + parseInt(A(88, 66, 88, 107, "3vL(")) / 8 * (parseInt(t("ho*4", -319, -303, -311, -315)) / 9) + -parseInt(A(102, 126, 100, 103, "wy#[")) / 10 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(un, 965028);
function yo(i, n, t, e, A) {
  return dA(i - -939, A);
}
function $a(i, n, t, e, A) {
  return dA(A - 69, t);
}
function dA(i, n) {
  i = i - (-2 * -955 + 1069 * 4 + -5912);
  const t = un();
  let e = t[i];
  if (dA.MvtMRM === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    dA.YNzCqW = a, dA.ULzFpe = {}, dA.MvtMRM = !0;
  }
  const o = t[4431 + -7 * 633], r = i + o, g = dA.ULzFpe[r];
  return g ? e = g : (dA.xWQPiN === void 0 && (dA.xWQPiN = !0), e = dA.YNzCqW(e, n), dA.ULzFpe[r] = e), e;
}
function Ag(i, n, t, e, A) {
  return dA(A - -943, e);
}
function Bt(i, n, t, e, A) {
  return dA(n - 637, i);
}
function un() {
  const i = ["j8oCWOiWxa", "WOn7DSo5fLBdKCkqgCkbWOPE", "W4fsWOnQ", "W4Tkvw4LwSkV", "rmorcmkdW5e", "DcT0s8ouW7zA", "WO4kW5RdPW4", "FhtcJJnn", "q8k7w8odq1tdQfStDSkArIBdGq", "WQJdLMpdRZi", "y8kbW5fTgmoGW4ycbeCYW53cQG", "WQpcR8k0W4G", "W68pWQxdLCkJ", "aSohbCkzW4y", "W7RcPqpcVSkwWPNcJW", "W5VdLmoLy8k2", "W7FdTvZcOtupxW", "W4G0nI5yaCojfsBdTNDjW4y", "WOuCw8kbja", "aqLqzmoT", "WQXeWQpcOwi", "i8ozWQFdMcGwWQvgwZbGhq", "FCowm30O", "W6boWRhcOwu", "WONcTxeWW7a", "W5FdQCoIzCkS", "lCkQgmkxtCk8W7PCW4ddKSkJfq", "ECkjW6RcHxe", "W7hdJJBcS2CwW70UWP5BW4r2wW", "svePk1zwW4JcVbrExSki", "W6GiWRFdK8kW", "WRhcQSoNWOys", "WRfxWOhdMb4", "qSkjhCkvWRW", "q8o7w8oCdq", "AMhcLdfQ", "p8oEWPu7ca", "FmosjMCI", "fCkGh8khwSkBW6xcHWtdPcCh", "W6zFWPZdNcm", "W4NcNmo9WQaK", "wCkbfmkDWPe", "WPjKWO7dPLi", "W5e6BCkWWQ1DW7tdL8oiC8ovxMu", "WQ/cN33dPtu", "WPKmW5WThuRdTWRdLCoRt13dMW", "W7XLW5ZcRtBdNmktW6JcOstdLN0DiG", "FSoTcGL/", "gclcK8kiW4VcMfuPW7zcuCkRW7u", "WP3dQID2W6GcqICgW4NcNwa", "W4PkWQ7dVNBcQfS", "W7qIW6HwWRtcPL0"];
  return un = function() {
    return i;
  }, un();
}
class WQ {
  [Bt("rM8a", 911) + Bt("baM]", 957) + $a(358, 348, "hdOL", 390, 373)] = !1;
  async [$a(366, 343, "yXgT", 366, 357)](n) {
    function t(g, a, I, C, s) {
      return Bt(a, I - -214);
    }
    function e(g, a, I, C, s) {
      return Ag(g - 37, a - 482, I - 211, C, a - 1227);
    }
    function A(g, a, I, C, s) {
      return Bt(g, s - -104);
    }
    function o(g, a, I, C, s) {
      return yo(C - 763, a - 51, I - 30, C - 72, I);
    }
    function r(g, a, I, C, s) {
      return Ag(g - 249, a - 455, I - 9, C, s - 1485);
    }
    try {
      const g = n + (t(708, "*(48", 722, 724, 733) + "/") + Pa;
      await TI(g), this[e(631, 609, 601, "!SRz", 629) + t(739, "izA8", 736, 754, 741) + e(559, 562, 564, "wy#[", 578)] = !0;
    } catch {
      this[e(627, 603, 610, ")Y4T") + r(839, 810, 806, "LcJo", 818) + e(612, 590, 594, "5)xH")] = !1, console[A("B34Q", 832, 846, 807, 830)](Pa + (o(163, 122, "!SRz", 142) + t(695, "*(48", 713) + t(741, "B679", 724) + o(90, 136, "*VR@", 116) + o(116, 119, "B34Q", 141) + t(752, "U2LK", 746) + t(756, "5)xH", 732) + r(842, 846, 840, "wy#[", 837) + t(715, "z386", 709) + e(626, 605, 620, "S2NJ") + A("elV)", 854, 869, 865, 843) + e(627, 606, 591, "z386") + t(699, "W![*", 721) + t(733, "U2LK", 731) + "n."));
    }
  }
  [Bt("1OaP", 918) + yo(-628, -631, -615, -637, "B679") + yo(-634, -643, -618, -646, "OesS") + "ed"]() {
    function n(e, A, o, r, g) {
      return yo(A - 480, A - 247, o - 378, r - 140, r);
    }
    function t(e, A, o, r, g) {
      return Bt(r, g - -229);
    }
    return this[n(-190, -166, -157, "S2NJ") + t(716, 713, 700, "W![*", 724) + n(-193, -184, -186, ")Y4T")];
  }
}
class ii extends Error {
  name = "SkipLicenseValidationError";
  log() {
  }
}
function _(i, n) {
  i = i - (-1 * 6036 + 7811 + -1569);
  var t = hn(), e = t[i];
  if (_.raURsg === void 0) {
    var A = function(I) {
      for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", B = "", E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (var h = 0, f = s.length; h < f; h++)
        B += "%" + ("00" + s.charCodeAt(h).toString(16)).slice(-2);
      return decodeURIComponent(B);
    }, o = function(I, C) {
      var s = [], B = 0, E, x = "";
      I = A(I);
      var Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (var l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    _.hxqozg = o, _.xQRZBS = {}, _.raURsg = !0;
  }
  var r = t[3479 + -7 * 497], g = i + r, a = _.xQRZBS[g];
  return a ? e = a : (_.hDmnNJ === void 0 && (_.hDmnNJ = !0), e = _.hxqozg(e, n), _.xQRZBS[g] = e), e;
}
function mo(i, n, t, e, A) {
  return _(n - -449, A);
}
(function(i, n) {
  function t(a, I, C, s, B) {
    return _(B - -287, C);
  }
  function e(a, I, C, s, B) {
    return _(B - 895, C);
  }
  var A = i();
  function o(a, I, C, s, B) {
    return _(I - -935, B);
  }
  function r(a, I, C, s, B) {
    return _(B - 877, a);
  }
  for (; ; )
    try {
      var g = -parseInt(t(-28, -25, "D@pa", 5, -11)) / 1 * (parseInt(t(-65, -41, "D4N2", -7, -42)) / 2) + parseInt(e(1098, 1133, "D4N2", 1125, 1107)) / 3 + parseInt(t(-9, -46, "[D33", -47, -12)) / 4 * (-parseInt(t(7, -55, "ghHW", 8, -28)) / 5) + parseInt(o(-639, -657, -686, -689, "y8Rh")) / 6 * (-parseInt(r("hTvn", 1106, 1146, 1120, 1138)) / 7) + -parseInt(r("hTvn", 1119, 1112, 1058, 1094)) / 8 + -parseInt(t(-41, -44, "y8Rh", -75, -56)) / 9 * (-parseInt(e(1108, 1163, "hTvn", 1135, 1132)) / 10) + parseInt(r("0Fxb", 1157, 1146, 1141, 1131)) / 11;
      if (g === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(hn, -335 * -13 + -2455 * -8 + -1914 * -46);
function UA(i, n, t, e, A) {
  return _(A - -393, e);
}
function ri(i, n, t, e, A) {
  return _(i - 642, e);
}
function Ie(i, n, t, e, A) {
  return _(n - 105, A);
}
function hn() {
  var i = ["DfJcKt8cqMGCWOJcPmo/Da", "pSoTW7OYecFcVcO", "imk4WORcLIC", "jmokW4brbW", "osDbWQ/dSq", "pSoSWQ4jWPu", "WQlcO3pdK8oyWPTWWQBdLI5l", "W5pcPM91W44", "rrrNWR51sCkdDbRcU8oaWRC", "DrVcHeBcVa", "mtz7WQVdUq", "ic7dJw9w", "ncbj", "W65CDJBdNGBcP8ks", "rxeTdv3dUXpcKmkvm2bz", "fsj7qrO", "W5BcLSke", "k8kfuf8", "oSk8WO3cQIu", "WQlcPxpdNSosW7fxWQ/dUarOW5K", "FrflWQ7cHG", "W47dICkj", "WQFdI0WoCG", "ju52ah4", "a3aGmmoo", "W6pdMu8bW44", "nxZdKmk9xwldTa", "B8oJWQ4Eqa", "jmoOWQK1WPC", "jSouW5zwhq", "h1qkW7KI", "W5hdICkAWOGE", "e8occCkyaa", "Dv3cKtGhthaKWQ3cOCoOxW", "fSoLWOG", "WOldPs43WPlcGKqIWQBcSZ/cKa", "WPtdNSkZWPenBf4", "W6RdJLK", "tNLPW6ZcQG", "WQdcOq3cKmkOWQfxWPq", "eei0W7S2", "bhu3", "W4RdGCkEWQuK", "W7BdJqLyW70", "yCkzWRq", "wSoBWPq", "zmk9W6y1mq", "rNuPavFcMcZcPCkwne0", "EmohWRimrW", "W43cNCkqa8oJ", "nCo/WRuzWO4", "FaZcKvVcPW", "W7VcKbf0l8ogWPtdS8ocWPtcL8kV", "pCk3WORcNce", "lYrFWQtdVa", "eSkKhx8M", "zmk/W6LtW4ZcHuldS8ocWPSmW7FdMq", "pCkwW7vkf8kQls/dTCkLg8oq", "axddO1n1", "yr0GvbJcTu7dNKrDWQTg", "cmkmpW", "jfGkW7ldKeuny2RcICoLW4u", "DSk0rWhdVG", "WQxcOcJcG8kPWQHtWRC", "CWtcLxVcOa", "qxuPdf7dVxVcG8kRf0j4va", "gx48", "W4y6WQ/cGx4", "W6LIa8kYWQy", "gSk5l3aK", "W4dcNmkdeCoO", "gmkrpSkYW4W", "Fa1n", "W7xdHfm", "l8ozW5Tbha", "f8k4W6dcHx0", "W6pdM1iCW4G", "caRdS8oHWOyQwG", "ruFdHuDqW5uW", "jbJdSwTe"];
  return hn = function() {
    return i;
  }, hn();
}
function LQ(i, n, t, e, A) {
  return _(i - -137, n);
}
class eg {
  constructor(n) {
    function t(g, a, I, C, s) {
      return _(C - -393, s);
    }
    function e(g, a, I, C, s) {
      return _(s - 184, g);
    }
    function A(g, a, I, C, s) {
      return _(I - -468, C);
    }
    function o(g, a, I, C, s) {
      return _(a - 760, I);
    }
    this[r(-316, "AT75", -319, -345) + A(-145, -215, -185, "0Fxb")] = n;
    function r(g, a, I, C, s) {
      return _(C - -618, a);
    }
    try {
      this.#A = n[t(-206, -209, -191, -180, "D4N2") + e("aoh9", 389, 410, 431, 400) + o(1019, 1018, "gH@o", 1029, 982)] && JSON[t(-141, -144, -116, -147, "j0M2")](n[o(1005, 998, "okGW", 990, 993) + e("0Fxb", 371, 450, 433, 410) + r(-361, "2KnY", -328, -347, -364)]), this.#e = n[r(-364, "b&9F", -376, -382, -389) + r(-342, "ghHW", -340, -348, -333)];
    } catch (g) {
      console[t(-148, -159, -141, -178, "Je5j")](g);
    }
  }
  #A;
  #e;
  get [Ie(303, 313, 333, 332, "X)%E") + "id"]() {
    function n(A, o, r, g, a) {
      return Ie(A - 107, r - -439, r - 160, g - 479, A);
    }
    function t(A, o, r, g, a) {
      return Ie(A - 337, g - -829, r - 40, g - 189, a);
    }
    function e(A, o, r, g, a) {
      return Ie(A - 13, g - -608, r - 94, g - 424, r);
    }
    return this[t(-444, -484, -472, -455, "gH@o") + n("aoh9", -14, -54, -73)][t(-491, -467, -534, -496, "okGW") + e(-291, -267, "F%9p", -261)];
  }
  get [UA(-152, -199, -152, "2KnY", -170) + "s"]() {
    function n(e, A, o, r, g) {
      return UA(e - 137, A - 117, o - 491, r, e - 205);
    }
    function t(e, A, o, r, g) {
      return Ie(e - 228, A - 673, o - 283, r - 16, o);
    }
    return this[t(1087, 1059, "ap@Z", 1042) + n(56, 88, 67, "8OQa")][t(1040, 1019, "e!KN", 1040) + "s"];
  }
  get [UA(-158, -121, -159, "X)%E", -141) + Ie(330, 348, 362, 367, "R2p&")]() {
    function n(e, A, o, r, g) {
      return UA(e - 200, A - 157, o - 8, A, e - 928);
    }
    function t(e, A, o, r, g) {
      return LQ(A - 829, e);
    }
    return this[t("0Fxb", 940) + t("ap@Z", 964)][n(765, "!Pui", 727) + n(799, "BDOM", 768)];
  }
  get [UA(-163, -135, -116, "adO!", -125) + "b"]() {
    return this.#A;
  }
  get [Ie(403, 390, 388, 379, "fqZy") + ri(861, 861, 877, "fbup")]() {
    return this.#e;
  }
  get [ri(909, 896, 891, "&4)l") + mo(-213, -231, -256, -214, "ghHW") + Ie(321, 361, 384, 340, "D@pa") + UA(-156, -148, -122, "1bzj", -161)]() {
    function n(o, r, g, a, I) {
      return UA(o - 303, r - 123, g - 181, g, o - 614);
    }
    function t(o, r, g, a, I) {
      return UA(o - 356, r - 151, g - 10, o, a - 263);
    }
    function e(o, r, g, a, I) {
      return UA(o - 386, r - 436, g - 175, g, o - 104);
    }
    function A(o, r, g, a, I) {
      return UA(o - 174, r - 370, g - 239, o, a - -312);
    }
    return !!this.#A?.[n(470, 473, "T@U9") + n(460, 422, "5!Kw")]?.[t("LyKI", 99, 98, 91) + n(461, 425, "fbup") + e(-62, -96, "ap@Z") + n(498, 463, "y8Rh") + A("T@U9", -508, -518, -498) + A("y8Rh", -493, -518, -496) + n(456, 457, "2KnY")];
  }
  get [UA(-122, -150, -112, "zUl8", -133) + ri(907, 892, 916, "X6ke") + Ie(285, 325, 304, 302, "^Xvy") + UA(-127, -127, -174, "aoh9", -142) + mo(-221, -224, -184, -257, "j0M2") + mo(-269, -239, -250, -252, "X)%E")]() {
    function n(A, o, r, g, a) {
      return UA(A - 364, o - 49, r - 181, r, o - 321);
    }
    function t(A, o, r, g, a) {
      return Ie(A - 279, A - 235, r - 60, g - 231, a);
    }
    function e(A, o, r, g, a) {
      return mo(A - 345, A - -505, r - 245, g - 188, r);
    }
    return !!this.#A?.[e(-688, -704, "x7%y", -718) + e(-740, -730, "adO!", -749)]?.[e(-725, -693, "fbup", -742) + e(-692, -688, "T@U9", -675) + n(207, 181, "&4)l") + t(562, 531, 586, 531, "BDOM") + t(614, 604, 653, 606, "2KnY") + e(-707, -746, "adO!", -673) + e(-672, -700, "X)%E", -685)];
  }
}
function iA(i, n, t, e, A) {
  return oA(e - 555, t);
}
function YA(i, n, t, e, A) {
  return oA(e - -514, t);
}
function yA(i, n, t, e, A) {
  return oA(e - 343, A);
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return oA(I - -590, g);
  }
  function e(g, a, I, C, s) {
    return oA(s - -285, I);
  }
  function A(g, a, I, C, s) {
    return oA(C - 959, g);
  }
  function o(g, a, I, C, s) {
    return oA(C - -755, g);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(o("@!ob", -50, -87, -95, -173)) / 1 * (parseInt(e(125, 140, "Hp9i", 115, 253)) / 2) + -parseInt(o("Ersy", -143, 11, -109, -68)) / 3 + parseInt(e(88, 42, "fG4l", 192, 156)) / 4 * (-parseInt(e(403, 255, "HXy7", 266, 386)) / 5) + parseInt(o("S0Yt", -46, -54, -74, -173)) / 6 * (-parseInt(t("]ztB", 58, -68, -178, -78)) / 7) + parseInt(t("q5gv", -120, -148, -170, -247)) / 8 + parseInt(A("7AOu", 1751, 1764, 1638, 1771)) / 9 + parseInt(e(285, 399, "99W#", 272, 331)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(fn, 817961);
function mA(i, n, t, e, A) {
  return oA(t - 401, e);
}
function oA(i, n) {
  i = i - (3165 + -2854 * -2 + 8444 * -1);
  const t = fn();
  let e = t[i];
  if (oA.emPMwP === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    oA.SEqirh = a, oA.RwOOAN = {}, oA.emPMwP = !0;
  }
  const o = t[2845 + 2845 * -1], r = i + o, g = oA.RwOOAN[r];
  return g ? e = g : (oA.VHmUDP === void 0 && (oA.VHmUDP = !0), e = oA.SEqirh(e, n), oA.RwOOAN[r] = e), e;
}
function q(i, n, t, e, A) {
  return oA(i - -128, e);
}
function fn() {
  const i = ["h8ojwSo8aq", "W47dMNTp", "WRiDW5SAuG", "kmoGwLCo", "hqDkW5RcRa", "W6P/cM0w", "xH89CCod", "vg0PW77cHW", "sSoPF8krWPK", "e8oetmo3uG", "gmkbo2jw", "eIrh", "qHLmW4/cOa", "W5hdMmkEWOFcKq", "W71PACo0za", "WQ/dUCkEn8kswHfeW7v9f07dJW", "dXbbW4JcOa", "WOfeyLRcMG", "W4XgWOpdOMu", "uCo/w8kVWOa", "WQpdHSkKeH0", "W6r0BG", "WPiKW4NcICkp", "W4eQje7dLG", "w2KPW5hcHG", "W7RcQSoAsCoo", "mb3cMSohWQ0", "W6P+DmoEFW", "pSobgGKy", "z8kKirywW5LYW6q", "W6KyiCkyW6W", "x1RcPI5dW4JdSSo0eSkFFba7", "W7ddNhW", "W5BdMCkmW4G", "WPTtla", "aGdcUSo3WPm", "sCkwWRtdICkkWQVcUG", "nmoZbG", "WPRdJSkIfru", "dwtcQ8oncG", "WOjvlCkDW7a", "bhbxFdS", "w3CAW4no", "smoTFSk9WPy", "ewXnDX8", "yXaazSo7", "WQhdPLPk", "iG/dSh3dQa", "DmkwxwKk", "omozhdGU", "z0NdSwFdSG", "WPldI19qW4m", "W4DvWPJdSN4", "bGpcN8o6WOm", "W63cRSoCDSoc", "W7SUW77dMq", "WQHbW7S", "W4FdMWVdHLi", "WPZdVrbiDq", "W6aFmCkyWQi", "W7ldLgG", "ch1bDXG", "W4NdR8ocBmoe", "a8kjkMLr", "xH89DSoz", "iuddRfFdVq", "ExfzW6jV", "W7FdIfbrqa", "kmkpWO3dHG", "WQGTCsXE", "WQ1sW4RdRSoB", "W7hcU8oIBmoe", "WPuwW4BcTtZcKmo3WOBdNmkjibjb", "WPGuWOy", "hmkjlgrq", "W7yZW6ZdJ8oc", "W4FcJmonCmoF", "bSoyvSo8bG", "WRLDpmkwW7C", "W6GzjSk4WQe", "pefVW6Xe", "sCoCW4JcLSogW7JdHsP9W68PWPhdOmkb", "aSkjng5C", "DSk1lg5M", "W6W7W7RdG8oc", "WRvwW6ddP8ok", "mf4SW71p", "W5hdKmkz", "WQLXw8o3", "WPbglCkCW6S", "dbJcOCowWOe", "aNfkBrK", "W41HgL1Y", "WOCsWOVdMem", "yHSag8oh", "hSoIxq", "cNpcOSoFda", "WRrIxCoVya", "nfOKW4TV", "Eh1i", "cq7dO1if", "fCkCpuTr", "WPCmW43dO2i", "lNlcRv5F", "hsjnm3G", "vSkwheKj", "W5iQiLpdKq", "pGiJW4tcPG", "W7xcRSoAzSop", "dSoeW7XwvL7cHJ3dOfNcOwzn", "wMmVW5JcJG", "aN/cP8oBfW", "W7yZW7xdJ8oi", "Dmkqx2GO", "W4JcTLOspSkoW7HvzCk3W5TB", "gYnqiLO", "W5Seeq/dISk8j8kzW67dICkbW77dNG", "gCoUxfrk", "WPLBpmksW60", "hCklpwLl", "W6ifn8otWQa", "xCo+FSkHWOe", "W7uphCktWQ0", "W6O6aSkKWRu", "ASk9pxHT", "WPq2EYDe", "D0/cMZec", "omkbo2jw", "FhLwW657", "WQXxW57dQmon", "hrBcOCo9", "hrBcOCo9WOK", "xSk1u39B", "C8kRamk0WRC", "hmoZrKLD", "cXNdPxua", "AmkytN4J", "W41dWOq", "W68tpmkoWQK", "tmoyW4VcNColW7/dH0XqW5ScWQxdOa", "iCkkW5OY", "uCkOwW", "xSoPBCk6WOy", "W4aFmCkyWQi", "cu/cLG1G", "xKNcOxG6", "irXgW4NcQW", "hSklWPJdMSkk", "WQb1vSk3", "WQddQuHgW5m", "prBcOmo+W4a", "vmkuWQGecG", "eSofs8oxhW", "x27cICozdmkcfa", "W5rgWOxdSMG", "ymkXkN5R", "W7K/W7JdMCod", "xCkltMi0", "lbeJW4xcVq", "WRWAWPRdK0q", "WRCaW4ehrq", "WPj3ECoCzq", "tSkZu2fn", "WPOOW47dGG", "j8oGsSoUW7W/Ca8NW6RcKSoS", "ugPiW6HZ", "W5JcQmodASoI", "WONdPI9ZCG", "W7C/W6q", "m0RdPMy", "ohhcJ8o7fq", "W7dcV8o0DCo/", "jcOoWRaXW7jCWPNdHmkAe1SkW5a", "fCoFtmoMhq", "W4X5W7NcQ8kTwr7cSa", "nX1Xdfa", "W6/cOmoC", "vCkxWQOipa", "ovvjW4xcPG", "FSkwtKGN", "aXXrW4xcPa", "WPjrk8k3W7y", "WR/dQu5l", "WPtdRGTj", "W4SDWOFdIem", "gSkLWRVdOmkA", "cvlcLWPH", "WP1vk8kqW7e", "hSklWO3dJCkx", "WPZdOrfcvW", "WOjcjSkMW6S", "W5ZdMmkeW5pcIG", "uMZcO0iR", "omo1aa", "W7pcQmoD", "W6r1zCk0Fa", "WOvBrq", "WRSQAZzf", "W7xcOmoDCCoj", "WPHvnSkD", "W7qwWR3cVSkovrhcN8o2s3FdOLFdVq", "s8oJyG", "g0aMW5W", "WQD1xmoQBa", "W43cUvaum8kmWPXMDSkuW6TwmW", "rmk8aCkUWQK", "Db3dQKxdTmoTW5ir", "l07dQNhdTa", "d8oOzg5B", "WOHrvq", "WQLOW6ldVCooq8kJWQy", "wW/dIeyQFuXkW59ijCkAbfa", "wG86rSoz", "W7NcQSoizmos", "qCkij8klWRe", "dZ5NW6lcOa", "bGRdO3KA", "x2/cQfq8", "dcHqgga", "umkEDN40", "W7NdNNTRsa", "W5RdHCkyW4JcIG", "WQ4UWOldVfu", "sXu7", "W744m8kqWQK", "W6GtnmkCWRK", "f8oGxvLg", "WP0OW4tcN8ke", "WP/dQu5lW5i", "gSoVwL8o", "WQuuW4JdUwi", "W6LwpmksWRG", "W4FdIZhdNKa", "W4L7dhq7", "dWJdOW", "oKVdU3mr", "cWpcU8oG", "w0WsWPVdT25Wy8oGW7TMW4Kx", "W7hcOmoj", "DmoLB8kRWP0", "W7m0W7ddHq", "gd9giG", "EmksvK1q", "WPRdImkIxb0", "WQVdULnwW4G", "W65+BSoPDq", "nX82W67cPG", "W7NcOmoAqmok", "W55io0SI", "t8kOtG", "W68epCkoWR8", "W64XkfJdIW", "WOTxrvNcMG", "oei5W6PX", "WRrXqmoQBa", "bLlcNJTH", "W4O5p17dJq", "oL8OW4O", "oNfFW6LM", "W7m7W7RdG8oC", "iSkku8o7eq", "W4fHaeW", "W4zOgG", "CGiVDCot", "WPGxW4hdTx8", "vmoJBCkQWR8", "dbHa", "k1VdKNVdVW", "amkCngjC", "W7G/W7ldJSod", "nrCI", "gZ9rkhG", "WRyxW4OquW", "wCo4zmk9", "vmoLB8kRWP0", "w8kiWRGvcW"];
  return fn = function() {
    return i;
  }, fn();
}
class OQ {
  constructor(n) {
    function t(e, A, o, r, g) {
      return oA(o - -952, g);
    }
    this[t(-344, -289, -293, -421, "^uS0") + t(-375, -544, -449, -368, "gJi8") + "d"] = n;
  }
  [mA(965, 794, 906, "]ZeC") + "se"];
  [yA(687, 815, 891, 799, "T)7D") + iA(1042, 1202, "q!E3", 1115) + q(494, 629, 630, "Yg*3") + yA(815, 741, 887, 810, "q!E3")] = [iA(1036, 1056, "7AOu", 1044) + YA(93, 79, "b^ag", 188) + "ic", iA(1045, 1071, "9Ieh", 1074) + YA(86, 248, "T)7D", 113) + "ic"];
  [mA(1071, 991, 1052, "q5gv") + yA(838, 813, 907, 924, "30qn")];
  async [mA(958, 809, 893, "MNjQ")](n) {
    const t = await this[r("AfkP", 535, 671, 665, 576) + e(-461, -405, "o8((") + g(95, -38, "AfkP")](n);
    function e(a, I, C, s, B) {
      return iA(a - 326, I - 467, C, a - -1450);
    }
    function A(a, I, C, s, B) {
      return YA(a - 362, I - 33, B, I - 1245);
    }
    function o(a, I, C, s, B) {
      return mA(a - 244, I - 20, s - 262, a);
    }
    function r(a, I, C, s, B) {
      return yA(a - 207, I - 3, C - 452, B - -218, a);
    }
    function g(a, I, C, s, B) {
      return mA(a - 60, I - 313, a - -814, C);
    }
    await Promise[r("2Z3J", 767, 864, 888, 824) + A(1311, 1230, 1269, 1096, "30qn")]([this[A(1183, 1317, 1344, 1216, "T)7D") + r("fG4l", 548, 608, 717, 625) + "d"][e(-462, -389, "%^TQ")](n), this[r("pF0z", 714, 654, 798, 680) + g(155, 128, "Aer@") + "e"](t)]), this[o("30qn", 1325, 1187, 1252) + e(-431, -551, "MNjQ") + o("S0Yt", 1249, 1099, 1121)]();
  }
  async [q(567, 486, 529, "Ersy") + YA(84, 59, "T)7D", 136) + "se"](n) {
    function t(g, a, I, C, s) {
      return q(I - -669, a - 292, I - 426, C);
    }
    function e(g, a, I, C, s) {
      return YA(g - 254, a - 384, I, g - 750);
    }
    function A(g, a, I, C, s) {
      return yA(g - 32, a - 269, I - 178, a - -1184, g);
    }
    function o(g, a, I, C, s) {
      return q(s - 331, a - 422, I - 174, I);
    }
    function r(g, a, I, C, s) {
      return iA(g - 144, a - 238, a, C - -1341);
    }
    try {
      if (t(-170, 4, -124, "]ztB", -35) !== t(-254, -70, -168, "T)7D", -59)) {
        const g = await fetch(n);
        if (!g.ok)
          throw t(-79, -303, -214, "]ztB", -90) !== o(821, 715, "#*!)", 662, 761) ? new _0xe6ad97(r(-274, "q5gv", -248, -176, -137) + A("^uS0", -334, -280, -260, -316) + o(716, 684, "]n6i", 833, 757) + A("]n6i", -284, -401, -219, -204) + "d.") : new Error(o(735, 837, "2Z3J", 972, 836) + t(-425, -460, -334, "qnXP", -290) + r(-341, "T)7D", -399, -324, -224) + o(944, 955, "L)YX", 964, 894) + "d.");
        this[o(722, 653, "30qn", 626, 720) + "se"] = await g[A("]n6i", -165, -288, -165, -197)]();
      } else return _0x3a9ec4[r(-76, "wAsV", -18, -125, -119)](this[A("L)YX", -241, -279, -154, -335) + "se"]);
    } catch (g) {
      A("L)YX", -388, -376) === A("7cif", -368, -252) ? (this[A("fG4l", -222, -124) + "se"] = void 0, console[A("X!$v", -276, -292)](g)) : _0x34b0f4[e(922, 1010, "pF0z") + "ch"]((a) => _0x5133c7[e(789, 923, "#*!)")](a));
    }
  }
  async [yA(890, 973, 833, 839, "]ZeC") + q(498, 417, 591, "30qn") + "e"](n) {
    this[e(-507, -434, -497, "#*!)") + o(-76, "]ztB", -246, -42, -160)] = void 0;
    function t(g, a, I, C, s) {
      return mA(g - 279, a - 332, g - 430, I);
    }
    function e(g, a, I, C, s) {
      return q(I - -844, a - 346, I - 468, C);
    }
    function A(g, a, I, C, s) {
      return q(a - -407, a - 45, I - 444, s);
    }
    function o(g, a, I, C, s) {
      return iA(g - 39, a - 6, a, s - -1330);
    }
    function r(g, a, I, C, s) {
      return YA(g - 380, a - 434, C, I - 690);
    }
    if (!n) {
      if (r(738, 590, 622, "9Ieh") !== t(1523, 1524, "Ersy")) return null;
      console[r(683, 657, 716, "NvQK")](o(-157, "%^TQ", -275, -187, -188) + t(1322, 1378, "^uS0") + e(-480, -320, -435, "T)7D") + e(-487, -588, -461, "9Ieh") + A(220, 120, 114, 76, "o8((")), this[t(1462, 1546, "dv$6") + "se"] = void 0;
      return;
    }
    await this[r(885, 787, 838, "dv$6") + r(617, 729, 658, "oM2d") + "se"](n);
  }
  async [q(403, 292, 498, "xeTK") + q(348, 439, 364, "b^ag") + mA(916, 884, 976, "Ersy")](n) {
    function t(a, I, C, s, B) {
      return q(B - 739, I - 250, C - 188, s);
    }
    const e = await fetch("" + n + this[o("@!ob", 1056, 1078) + g(1509, 1530, "]ztB") + g(1627, 1719, "X!$v") + g(1493, 1574, "fG4l")][-3349 * -2 + -1462 + 11 * -476]), A = e.ok ? 0 : -4927 + 1 * -6356 + 11284;
    function o(a, I, C, s, B) {
      return iA(a - 245, I - 348, a, C - -80);
    }
    function r(a, I, C, s, B) {
      return mA(a - 191, I - 456, C - -230, B);
    }
    function g(a, I, C, s, B) {
      return yA(a - 74, I - 153, C - 375, a - 588, C);
    }
    return "" + n + this[t(1097, 1011, 1065, "]ztB", 1055) + r(690, 644, 669, 561, "]n6i") + o("Aer@", 1009, 1023) + t(1085, 1168, 1021, "]ZeC", 1115)][A];
  }
  [iA(1004, 1154, "Aer@", 1106) + q(536, 439, 620, "pF0z") + "s"](n) {
    function t(A, o, r, g, a) {
      return iA(A - 410, o - 57, a, A - -617);
    }
    function e(A, o, r, g, a) {
      return iA(A - 191, o - 23, o, a - -370);
    }
    n[t(535, 430, 638, 516, "q!E3") + "ch"]((A) => console[e(740, "#*!)", 895, 872, 874)](A));
  }
  [YA(35, 85, "oM2d", 99) + yA(915, 842, 836, 802, "#*!)") + YA(194, 207, "NvQK", 80)](n) {
    function t(A, o, r, g, a) {
      return YA(A - 459, o - 20, A, a - 147);
    }
    function e(A, o, r, g, a) {
      return yA(A - 232, o - 280, r - 238, o - -42, A);
    }
    n[t("]n6i", 160, 155, 284, 205) + "ch"]((A) => console[e("fG4l", 772, 796)](A));
  }
  [iA(989, 1083, "gWZY", 1126) + yA(1057, 1071, 990, 938, "o8((")]() {
    function n(A, o, r, g, a) {
      return mA(A - 249, o - 261, o - -774, a);
    }
    function t(A, o, r, g, a) {
      return q(g - -322, o - 289, r - 73, r);
    }
    function e(A, o, r, g, a) {
      return mA(A - 229, o - 489, g - 25, o);
    }
    return window[t(111, 175, "0R#s", 175) + t(-46, 133, "b^ag", 78)][n(92, 56, 194, 177, "]ztB") + e(1030, "9Ieh", 872, 923)];
  }
  [q(463, 373, 464, "fG4l") + yA(818, 1058, 863, 951, "30qn") + yA(1096, 1052, 885, 988, "T)7D")]() {
    function n(r, g, a, I, C) {
      return mA(r - 296, g - 407, r - -882, I);
    }
    function t(r, g, a, I, C) {
      return yA(r - 155, g - 96, a - 338, a - 228, r);
    }
    function e(r, g, a, I, C) {
      return iA(r - 415, g - 475, I, g - -403);
    }
    function A(r, g, a, I, C) {
      return iA(r - 187, g - 136, I, r - -1258);
    }
    function o(r, g, a, I, C) {
      return YA(r - 109, g - 338, C, r - 164);
    }
    try {
      if (A(-170, -155, -127, "q!E3", -38) !== o(202, 252, 174, 253, "gWZY")) _0x2552c7[e(799, 769, 887, "xeTK", 804) + "ch"]((r) => _0x2a4433[e(895, 789, 862, "q!E3", 914)](r));
      else {
        if (!this[t("99W#", 1248, 1229, 1229, 1319) + "se"]) {
          if (n(203, 120, 150, "99W#", 163) !== o(185, 145, 206, 319, "JVUB")) throw new ii(o(199, 78, 291, 109, "7AOu") + t("Hp9i", 1075, 1037, 1127, 1029) + e(574, 668, 679, "^uS0", 765) + o(274, 357, 398, 247, "cUg9") + ".");
          return _0x25edc7 instanceof _0xf74375 && _0x13ce15[n(-33, -150, -106, "2Z3J", -119) + e(690, 606, 468, "gWZY", 627)](_0x4a987f), null;
        }
        if (!this[t("]ztB", 1178, 1049, 991, 912) + n(42, -42, 83, "9Ieh", 143) + "d"][e(831, 788, 858, "B&YV", 747) + n(171, 214, 44, "2Z3J", 163) + n(9, 145, 123, "fG4l", -93) + "ed"]()) {
          if (n(-2, 48, -96, "MNjQ", 61) !== A(-25, -52, 17, "]ztB", -135)) throw new ii(t("q!E3", 1294, 1228, 1143, 1327) + e(745, 672, 735, "NvQK", 584) + t("9Ieh", 1320, 1258, 1347, 1157) + n(120, 29, 151, "(Zm%", 101) + ".");
          return this[o(311, 253, 287, 426, "wAsV") + e(739, 737, 845, "0R#s", 701) + "se"]()?.[e(772, 750, 787, "Aer@", 754) + A(-263, -142, -313, "akKn", -219)]?.[e(881, 757, 654, "z[b(", 660)] || [];
        }
        this[o(317, 444, 348, 370, "gJi8") + A(-216, -279, -192, "oM2d", -350)] = new eg(RQ(this[o(268, 248, 250, 276, "@!ob") + "se"], this[A(-169, -275, -182, "b^ag", -250) + o(80, 69, -42, 105, "0R#s")]())), this[t("eNns", 1118, 1147, 1052, 1196) + e(789, 824, 890, "7AOu", 719) + "s"](this[t("beq%", 1290, 1180, 1254, 1252) + n(213, 210, 243, "0R#s", 179)][t("Yg*3", 1062, 1073, 1153, 1112) + "s"]), this[t("b^ag", 1125, 1092, 1184, 1038) + n(185, 155, 261, "L)YX", 149) + e(703, 645, 691, "MNjQ", 669)](this[A(-173, -35, -184, "oM2d", -273) + e(552, 666, 655, "xeTK", 757)][o(197, 168, 261, 71, "0R#s") + t("0R#s", 1103, 1112, 1142, 1171)]);
      }
    } catch (r) {
      if (t("MNjQ", 1022, 1083) === o(243, 149, 361, 167, "%^TQ")) {
        if (r instanceof ii) t("cUg9", 985, 1010) === n(193, 107, 207, "X!$v") ? r[n(-12, -67, 126, "]ztB")]() : _0x9aadc2[e(752, 719, 674, "AfkP")]();
        else if (r instanceof Error)
          if (t("B&YV", 1029, 1148) !== o(174, 262, 53, 298, "akKn")) {
            _0x154cef instanceof _0x397216 ? _0x673222[e(694, 800, 819, "7cif")]() : _0x30bf instanceof _0x19421c && _0x1644f6[t("]ZeC", 1308, 1199)](_0xef846);
            const a = {};
            a[A(-129, -257, -34, "AfkP") + t("Yg*3", 1101, 1089)] = !1, a[e(853, 792, 911, "HXy7") + "s"] = [], a[o(288, 256, 155, 283, "q!E3") + t("NvQK", 1246, 1165)] = [], a[o(299, 194, 327, 397, "]ZeC") + e(693, 601, 692, "Yg*3") + o(82, -5, 140, -28, "]ZeC")] = void 0, a[o(138, 270, 60, 271, "z[b(")] = function() {
            }, a[e(530, 595, 587, "gWZY") + t("JVUB", 1220, 1271)] = "", this[t("@!ob", 1211, 1117) + A(-246, -304, -235, "cUg9")] = new _0x47a53a(a);
          } else console[A(-89, -121, -17, "a2Xj")](r);
        const g = {};
        g[n(83, 155, 120, "qnXP") + e(989, 855, 863, "akKn")] = !1, g[n(161, 45, 66, "Hp9i") + "s"] = [], g[o(220, 194, 298, 342, "30qn") + e(579, 691, 816, "AfkP")] = [], g[n(173, 201, 216, "Ersy") + o(165, 209, 114, 47, "]ZeC") + t("L)YX", 1215, 1151)] = void 0, g[A(-231, -365, -164, "Yg*3")] = function() {
        }, g[A(-197, -110, -93, "99W#") + n(125, 154, 249, "7AOu")] = "", this[o(125, 174, 102, 131, "#*!)") + A(-265, -282, -207, "]n6i")] = new eg(g);
      } else _0xcb018[o(246, 374, 324, 248, "0R#s")](_0x237fb1);
    }
  }
  [YA(-110, 57, "]ztB", 18) + iA(1143, 1129, "fG4l", 1218) + yA(683, 745, 754, 779, "HXy7") + "t"]() {
    function n(t, e, A, o, r) {
      return q(t - 529, e - 77, A - 231, e);
    }
    return this[n(1040, "7cif", 1005) + n(839, "]n6i", 922)];
  }
  [q(433, 483, 492, "]ztB") + iA(1141, 894, "]ZeC", 1025) + "se"]() {
    if (!this[A("S0Yt", 530, 294, 400) + "se"]) {
      if (A("gWZY", 446, 352, 365) !== A("Yg*3", 504, 427, 553)) return null;
      if (!this[n("T)7D", 264, 366) + "se"]) throw new _0x1d9b27(o(1100, 1175, 1201, 1045, "pF0z") + t(-53, -113, -245, "]ztB", -144) + e("cUg9", -99, -120) + e("gJi8", -137, -71) + ".");
      if (!this[e("z[b(", -8, -96) + e("akKn", 22, -97) + "d"][A("]ZeC", 279, 348, 397) + n("JVUB", 463, 356) + n("7AOu", 350, 435) + "ed"]()) throw new _0x563225(n("cUg9", 321, 310) + A("Ov77", 409, 412, 345) + t(-85, -179, -190, "Ov77", -168) + t(-98, -102, -36, "fG4l", -131) + ".");
      this[A("cUg9", 619, 430, 512) + n("Hp9i", 353, 247)] = new _0x5ac2a7(_0x282c35(this[o(1253, 1183, 1187, 1229, "pF0z") + "se"], this[e("0R#s", 70, 108) + e("X!$v", -12, 110)]())), this[A("^uS0", 571, 446, 455) + n("pF0z", 505, 464) + "s"](this[A("wAsV", 296, 552, 430) + A("wAsV", 526, 516, 396)][n("NvQK", 307, 252) + "s"]), this[t(-30, -133, -66, "B&YV", -121) + A("Ov77", 377, 360, 398) + t(-107, 82, -144, "]ztB", -12)](this[n("T)7D", 184, 281) + t(-15, -185, -186, "#*!)", -57)][o(1284, 1228, 1124, 1164, "a2Xj") + o(1188, 1064, 1137, 1120, "a2Xj")]);
    }
    function n(r, g, a, I, C) {
      return q(a - -72, g - 189, a - 119, r);
    }
    function t(r, g, a, I, C) {
      return iA(r - 314, g - 225, I, C - -1268);
    }
    function e(r, g, a, I, C) {
      return mA(r - 364, g - 344, a - -981, r);
    }
    function A(r, g, a, I, C) {
      return mA(r - 62, g - 387, I - -530, r);
    }
    function o(r, g, a, I, C) {
      return YA(r - 113, g - 4, C, g - 1077);
    }
    try {
      if (A("o8((", 418, 633, 539, 549) === A("@!ob", 507, 503, 548, 580)) return JSON[e("dv$6", -126, 10, 148, -112)](this[A("7AOu", 379, 457, 444, 559) + "se"]);
      _0x258050[t(-370, -289, -322, "a2Xj", -236) + n("]ztB", 363, 483, 488, 380)](_0x3e56bf);
    } catch (r) {
      if (e("0R#s", -9, 117) !== t(-317, -281, -397, "HXy7", -268)) {
        if (r instanceof Error)
          if (t(38, -147, -129, "T)7D", -83) !== n("pF0z", 368, 250)) w[o(923, 1049, 1097, 974, "q5gv") + o(913, 1043, 1109, 1127, "7cif")](r);
          else
            return this[t(60, -193, -122, "pF0z", -70) + e("eNns", 165, 52) + "se"]()?.[n("Yg*3", 338, 411) + t(-370, -374, -305, "Hp9i", -248)]?.[e("eNns", 204, 124) + n("B&YV", 405, 363)];
        return null;
      } else {
        _0x5b4697[A("nee%", 589, 648, 518)](e("L)YX", -111, -119) + A("9Ieh", 593, 598, 556) + A("MNjQ", 461, 424, 470) + n("o8((", 426, 404) + t(-129, -13, -22, "S0Yt", -43)), this[t(-350, -299, -355, "beq%", -218) + "se"] = void 0;
        return;
      }
    }
  }
  [yA(886, 908, 947, 950, "Hp9i") + iA(1188, 1151, "wAsV", 1199)]() {
    function n(o, r, g, a, I) {
      return mA(o - 396, r - 283, o - -253, a);
    }
    const t = this[A(330, 319, "]ZeC", 207) + A(195, 196, "30qn", 291) + "se"]();
    function e(o, r, g, a, I) {
      return q(r - 751, r - 288, g - 215, a);
    }
    function A(o, r, g, a, I) {
      return q(a - -215, r - 145, g - 391, g);
    }
    return t?.[e(1352, 1316, 1422, "q5gv") + e(1136, 1225, 1188, "cUg9")]?.[n(690, 578, 799, "q!E3")] || [];
  }
  [q(385, 418, 425, "gWZY") + iA(1224, 1295, "7cif", 1224) + mA(776, 793, 856, "T)7D")]() {
    const n = this[o(-482, -455, "o8((") + o(-314, -371, "9Ieh") + "se"]();
    function t(r, g, a, I, C) {
      return q(a - 407, g - 15, a - 313, I);
    }
    function e(r, g, a, I, C) {
      return yA(r - 460, g - 128, a - 47, I - -428, C);
    }
    function A(r, g, a, I, C) {
      return mA(r - 22, g - 487, r - -1333, I);
    }
    function o(r, g, a, I, C) {
      return YA(r - 8, g - 103, a, r - -453);
    }
    return n?.[o(-269, -318, "NvQK") + e(592, 573, 557, 459, "JVUB")]?.[A(-252, -302, -354, "^uS0") + t(853, 1042, 954, "fG4l")];
  }
}
class jr extends OQ {
  static _instance;
  static getInstance() {
    if (!this._instance) {
      const n = new WQ();
      this._instance = new jr(n);
    }
    return this._instance;
  }
}
const qr = Ye(void 0);
qr.displayName = "ConfigurationContext";
function PI() {
  const i = le(qr);
  if (!i)
    throw new Error("Missing provider for ConfigurationContext");
  return i;
}
function JQ({
  assetsDirectoryPath: i,
  autoCapture: n,
  camera: t,
  captureMode: e,
  onComplete: A,
  sessionToken: o,
  transactionCountingToken: r
}) {
  return {
    onComplete: A,
    captureMode: e ?? Yi.AUTO_CAPTURE,
    assetsDirectoryPath: qs(i),
    sessionToken: o,
    camera: t ?? {},
    transactionCountingToken: r,
    autoCapture: n ?? {}
  };
}
function UQ({
  children: i,
  configuration: n
}) {
  const t = hA(() => JQ(n), [n]);
  return /* @__PURE__ */ b(qr.Provider, { value: t, children: i });
}
const pn = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
};
class Ge {
  static _instance;
  lastDetails;
  delayedTime;
  constructor() {
    this.lastDetails = {}, this.delayedTime = 1055 * 9 + -4135 * 1 + -5360;
  }
  static getInstance() {
    return !this._instance && (this._instance = new Ge()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -8234 + 3 * 1945 + -2399 * -1;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && pn(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
  dispatchCustomEvent(n, t) {
    pn(n, t);
  }
}
function HI(i, n, t = ZC) {
  const e = {};
  e.instructionCode = n.code, e.isEscalated = n.isEscalated ?? !1;
  const A = e;
  Ge.getInstance().dispatchDelayedCustomEventOnChange(i, A, t);
}
function YQ(i, n) {
  Ge.getInstance().dispatchCustomEventOnChange(i, n);
}
function TQ(i, n) {
  const t = {};
  t.size = n;
  const e = t;
  Ge.getInstance().dispatchCustomEventOnChange(i, e);
}
function PQ(i, n, t) {
  const e = n.confidence < t ? void 0 : n, A = {};
  A.detectedObject = e;
  const o = A;
  Ge.getInstance().dispatchCustomEventOnChange(i, o);
}
function HQ(i, { detection: n, fps: t, image: e, invalidValidators: A, isInCandidateSelection: o }) {
  const r = {};
  r.image = e, r.data = {}, r.data.detection = n, r.data.fps = t, r.data.isInCandidateSelection = o, r.data.invalidValidators = A, r.data.imageResolution = {}, r.data.imageResolution.width = e.width, r.data.imageResolution.height = e.height;
  const g = r;
  Ge.getInstance().dispatchCustomEventOnChange(i, g);
}
const _Q = (i, n) => {
  const t = {};
  t.instruction = n, pn(i, t);
}, gr = (i, n) => {
  pn(i, n);
}, KQ = (i, n) => {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  J(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, YQ(i, A);
  }, [t, e, i]);
};
function sr(i, n) {
  J(() => {
    const t = (e) => {
      n(e);
    };
    return document.addEventListener(i, t), () => {
      document.removeEventListener(i, t);
    };
  }, [n, i]);
}
const jQ = (i) => i === Ms.CONTROL ? !Yr() : !0;
function qQ(i, n) {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: o } = ue(), [r, g] = Z(), a = hA(() => {
    const x = o && n && n.isStreaming && n.getCameraSettings().facingMode;
    return x ? r ?? x === "user" : r ?? jQ(i);
  }, [n, r, i, o]);
  function I() {
    t !== VA.LOADING && e(VA.RUNNING);
  }
  function C() {
    g(r === void 0 ? !a : !r);
  }
  async function s() {
    if (n) {
      e(VA.LOADING);
      try {
        await n.switchCamera(), e(VA.RUNNING);
      } catch (x) {
        if (x instanceof Error) {
          A(w.fromCameraError(x));
          return;
        }
      }
      g(void 0);
    }
  }
  function B(x) {
    switch (x.detail?.["instruction"]) {
      case ft.CONTINUE_DETECTION:
        I();
        break;
      case ft.TOGGLE_MIRROR:
        C();
        break;
      case ft.SWITCH_CAMERA:
        s();
        break;
      default:
        return;
    }
  }
  sr(i, B);
  const E = {};
  return E.shouldCameraMirror = a, E;
}
function VQ(i, n) {
  sr(i, (t) => {
    t.detail?.["instruction"] === ft.CONTINUE_DETECTION && _Q(qA.CONTROL, ft.CONTINUE_DETECTION);
  }), sr(qA.CONTROL, (t) => {
    t.detail?.["instruction"] === ft.CONTINUE_DETECTION && n();
  });
}
function ZQ(i, n) {
  J(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      TQ(n, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, n]);
}
function zQ(i) {
  return Se(Math.abs(i));
}
const XQ = () => {
  const [i, n] = Z(null), t = DA(new Ur(548 * -5 + 4 * 2473 + -7147));
  function e(o) {
    const { z: r } = o.accelerationIncludingGravity || {};
    if (!r) return;
    t.current.pushFixed(zQ(r));
    const g = Se(no(t.current)), a = {};
    a.z = g, n(a);
  }
  J(() => (window.addEventListener("devicemotion", uB(e, QB), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const A = {};
  return A.acceleration = i, A;
};
function Vr(i, n) {
  const t = DA(n);
  J(() => {
    t.current = n;
  }, [n]), J(() => {
    if (!i) return;
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
const $Q = (i) => {
  const n = gt(!1);
  return Vr(i, (e) => {
    e.detail && (n.value = e.detail.animationEnd);
  }), n;
};
function AE({ cameraResolution: i, cameraService: n, customEvent: t }) {
  const { shouldCameraMirror: e } = qQ(t.CONTROL, n), A = {};
  A.cameraResolution = i, A.shouldCameraMirror = e, KQ(t.CAMERA_PROPS_CHANGED, A), J(() => () => {
    Ge.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = e, o;
}
function eE(i) {
  J(() => (window.addEventListener("beforeunload", i), () => {
    window.removeEventListener("beforeunload", i);
  }), [i]);
}
function tE({ captureMode: i, checkToInstructionCodeMap: n, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: o, instructionCodeMap: r, onCapture: g, onDetection: a, sessionToken: I }) {
  eE(() => {
    t && t.destroy();
  });
  const { appState: C, firstRunningDone: s, handleAppStateChange: B, isCameraReady: E, setFirstRunningDone: x } = ue(), { sunfish: Q } = go(), { analytics: l } = nI(), { transactionCounting: h } = Tr(), { cameraResolution: f, cameraService: p, onCameraResolutionChange: m, videoRef: D } = xI(), k = {};
  k.cameraResolution = f, k.cameraService = p, k.customEvent = A;
  const { shouldCameraMirror: y } = AE(k), U = gt(void 0), O = p?.["isStreaming"] && t?.["isDetectorInitialized"] && Q && E, z = de(async ($) => {
    B(VA.WAITING), g($);
  }, [g, B]), X = de(($, so) => {
    m($.resolution), U.value = $, a($, so);
  }, [a, U, m]);
  J(() => {
    !s && O && (x(!0), B(VA.RUNNING));
  }, [O, B, s, x]), J(() => {
    if (C !== VA.RUNNING || !O) return;
    if (!p || !t) throw new w("Cannot start detection");
    t.imageProcessor.reset();
    const $ = {};
    return $.analytics = l, $.transactionCounting = h, $.cameraService = p, $.fallbackInstruction = o, $.instructionCodeMap = r, $.checkToInstructionCodeMap = n, $.sessionToken = I, $.createProtoMessage = e, $.onCaptureCallback = z, $.onDetectionCallback = X, t.createDetection(i, $), t.runDetectionLoop(), () => {
      t.stopDetectionLoop();
    };
  }, [C, O, t, p, z, X, I, U, l, e, r, n, o, i, h]);
  const pA = {};
  return pA.videoRef = D, pA.cameraResolution = f, pA.detectionDetails = U, pA.shouldCameraMirror = y, pA;
}
function oE(i) {
  const n = DA([]);
  return J(() => {
    n.current.forEach((t) => t()), n.current = [];
  }, [i]), (t) => {
    n.current.push(t);
  };
}
const tg = () => typeof document < "u" && document.hasFocus();
function nE(i = {}) {
  const n = DA(i), t = DA(tg()), [e, A] = Z(tg);
  J(() => {
    n.current = i;
  }), J(() => {
    function r(C) {
      t.current = C, A(C);
    }
    function g() {
      Promise.resolve().then(() => {
        !t.current && (n.current.onFocus?.(), n.current.onChange?.(!0)), r(!0);
      });
    }
    function a() {
      Promise.resolve().then(() => {
        t.current && (n.current.onBlur?.(), n.current.onChange?.(!1)), r(!1);
      });
    }
    function I() {
      document.visibilityState === "hidden" && a();
    }
    return window.addEventListener("focus", g), window.addEventListener("blur", a), window.document.addEventListener("visibilitychange", I), () => {
      window.removeEventListener("focus", g), window.removeEventListener("blur", a), window.document.removeEventListener("visibilitychange", I);
    };
  }, []);
  const o = {};
  return o.isWindowFocused = e, o;
}
function iE(i = {}) {
  const { appState: n, firstRunningDone: t } = ue();
  nE({ onBlur: () => {
    n === VA.WAITING || n === Oi.DONE || !t || i.onBlur?.();
  }, onFocus: () => {
    n === VA.WAITING || n === Oi.DONE || !t || i.onFocus?.();
  } });
}
function rE(i) {
  const { redfin: n, freemiumOverlayState: t } = ue(), e = n === zo.Higher, A = t !== Xt.HIDDEN, o = A && !e && i, r = t === Xt.VISIBLE, g = {};
  return g.showFreemiumOverlay = o, g.showFullFreemiumOverlay = r, g;
}
function aE(i, n) {
  if (!i) return n;
  const { detectionRecord: t, hashedDetectedImages: e } = i;
  n.hashedDetectedImages && e?.push(...n.hashedDetectedImages), n.detectionRecord && t?.push(...n.detectionRecord);
  const A = { ...i };
  return A.hashedDetectedImages = e, A.detectionRecord = t, A;
}
function gE() {
  const i = gt(null);
  function n({ cameraProperties: e }) {
    i.value = aE(i.value, e);
  }
  const t = {};
  return t.cameraProperties = i, t.mergeCameraProperties = n, t;
}
const Zr = Ye(void 0);
Zr.displayName = "CommonThresholdsContext";
function sE() {
  const i = le(Zr);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function IE() {
  return Yr() ? Ya.MOBILE : Ya.DESKTOP;
}
function cE({
  children: i,
  configurationThresholds: n,
  thresholdsPresetMapper: t,
  thresholdsPresets: e
}) {
  const [A, o] = Z(IE()), r = hA(() => ({ thresholds: t(n, e[A]), thresholdsPreset: A, setThresholdsPreset: o }), [n, A, o, e, t]);
  return /* @__PURE__ */ b(Zr.Provider, { value: r, children: i });
}
const _I = {};
_I.min = 0.4;
const Ir = {};
Ir.min = 0.16, Ir.max = 0.2;
const KI = {};
KI.min = 0.25;
const cr = {};
cr.min = 0.2, cr.max = 0.85;
const jI = {};
jI.min = 0.05;
const qI = {};
qI.max = 30;
const VI = {};
VI.min = 0;
const Cr = {};
Cr.min = -1, Cr.max = 1;
const Br = {};
Br.confidence = VI, Br.status = Cr;
const ZI = {};
ZI.min = 0;
const zI = {};
zI.confidence = ZI;
const XI = {};
XI.min = 0;
const $I = {};
$I.confidence = XI;
const ce = {};
ce.confidence = _I, ce.size = Ir, ce.sharpness = KI, ce.brightness = cr, ce.edgeDistanceToImageShorterSideRatio = jI, ce.devicePitchAngle = qI, ce.mouth = Br, ce.leftEye = zI, ce.rightEye = $I;
const A0 = {};
A0.min = 0.4;
const Qr = {};
Qr.min = 0.16, Qr.max = 0.2;
const e0 = {};
e0.min = 0.25;
const Er = {};
Er.min = 0.2, Er.max = 0.85;
const t0 = {};
t0.min = 0.05;
const o0 = {};
o0.max = 30;
const n0 = {};
n0.min = 0;
const xr = {};
xr.min = -1, xr.max = 1;
const dr = {};
dr.confidence = n0, dr.status = xr;
const i0 = {};
i0.min = 0;
const r0 = {};
r0.confidence = i0;
const a0 = {};
a0.min = 0;
const g0 = {};
g0.confidence = a0;
const Ce = {};
Ce.confidence = A0, Ce.size = Qr, Ce.sharpness = e0, Ce.brightness = Er, Ce.edgeDistanceToImageShorterSideRatio = t0, Ce.devicePitchAngle = o0, Ce.mouth = dr, Ce.leftEye = r0, Ce.rightEye = g0;
const lr = {};
lr.MOBILE = ce, lr.DESKTOP = Ce;
const CE = lr;
function BE(i, n) {
  return {
    confidence: { min: i?.confidence?.min ?? n.confidence.min },
    size: {
      min: i?.size?.min ?? n.size.min,
      max: i?.size?.max ?? n.size.max
    },
    sharpness: { min: i?.sharpness?.min ?? n.sharpness.min },
    brightness: {
      min: i?.brightness?.min ?? n.brightness.min,
      max: i?.brightness?.max ?? n.brightness.max
    },
    edgeDistanceToImageShorterSideRatio: {
      min: i?.edgeDistanceToImageShorterSideRatio?.min ?? n.edgeDistanceToImageShorterSideRatio.min
    },
    devicePitchAngle: { max: i?.devicePitchAngle?.max ?? n.devicePitchAngle.max },
    mouth: {
      confidence: { min: i?.mouth?.confidence?.min ?? n.mouth.confidence.min },
      status: {
        min: i?.mouth?.status.min ?? n.mouth.status.min,
        max: i?.mouth?.status.max ?? n.mouth.status.max
      }
    },
    leftEye: {
      confidence: { min: i?.leftEye?.confidence?.min ?? n.leftEye.confidence.min }
    },
    rightEye: {
      confidence: {
        min: i?.rightEye?.confidence?.min ?? n.rightEye.confidence.min
      }
    }
  };
}
function QE({
  children: i,
  configurationThresholds: n
}) {
  return /* @__PURE__ */ b(
    cE,
    {
      configurationThresholds: n,
      thresholdsPresetMapper: BE,
      thresholdsPresets: CE,
      children: i
    }
  );
}
function EE({ onFaceTrackingLost: i, skipOutsideOfCandidateSelection: n }) {
  const t = DA(i);
  J(() => {
    t.current = i;
  }, [i]);
  const e = de((o) => {
    if (!o.detail) return;
    const { data: r } = o.detail;
    n && !r.isInCandidateSelection || r.invalidValidators.includes(aA.FACE_NOT_PRESENT) && t.current();
  }, [n]), A = {};
  return A.handleFaceDetection = e, A;
}
function xE(i) {
  const { handleFaceDetection: n } = EE(i);
  Vr(qA.FACE_DETECTION, n);
}
const dE = ({ children: i }) => {
  const n = DA(null);
  return ZQ(n, qA.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ b(YC, { ref: n, children: i });
}, ur = {};
ur.min = 0.135, ur.max = 0.21;
const s0 = {};
s0.size = ur;
const I0 = {};
I0.min = 1;
const c0 = {};
c0.confidence = I0;
const hr = {};
hr.min = 0.3, hr.max = 1;
const fr = {};
fr.max = 1, fr.min = -1;
const C0 = {};
C0.min = 0.15;
const B0 = {};
B0.min = -1;
const Q0 = {};
Q0.min = -1;
const lt = {};
lt.size = hr, lt.brightness = fr, lt.confidence = C0, lt.sharpness = B0, lt.edgeDistanceToImageShorterSideRatio = Q0;
const lE = { [SA.DISTANT]: s0, [SA.MIDDLE]: c0, [SA.CLOSEUP]: lt }, uE = lE, og = 0 + 0.255;
function E0() {
  return sE();
}
function hE(i, n) {
  return { ...i, leftEye: { ...i.leftEye, center: Ct(i.leftEye.center, n) }, rightEye: { ...i.rightEye, center: Ct(i.rightEye.center, n) }, mouth: { ...i.mouth, center: Ct(i.mouth.center, n) }, topLeft: Ct(i.topLeft, n), bottomRight: Ct(i.bottomRight, n), faceCenter: Ct(i.faceCenter, n) };
}
function x0(i, n) {
  const { faceCenter: t, faceSize: e } = i, A = nB(e, n), o = {};
  o.x = t.x, o.y = t.y - A;
  const r = {};
  r.x = t.x + A, r.y = t.y;
  const g = {};
  g.x = t.x, g.y = t.y + A;
  const a = {};
  a.x = t.x - A, a.y = t.y;
  const I = {};
  return I.top = o, I.right = r, I.bottom = g, I.left = a, Ks(I);
}
const fE = (i, n) => {
  const { bottomRight: t, faceCenter: e, topLeft: A } = n, o = {
    topLeft: A,
    width: t.x - A.x,
    height: t.y - A.y
  };
  $s(i, o, "rgba(255, 0, 0, 0.3)", !0), $t(i, e, "lime");
}, pE = (i, n, t) => {
  const e = x0(n, t);
  Object.values(e).map((A) => $t(i, A, "orange"));
};
function yE({ cameraResolution: i, detectionDetails: n, isImageMirror: t }) {
  const { thresholds: e, thresholdsPreset: A } = E0(), { redfin: o } = ue(), r = DA(null);
  if (J(() => {
    if (!r.current)
      return;
    r.current.width = i.width, r.current.height = i.height, qC(r.current);
    const h = An(i), f = AI(
      i,
      e.edgeDistanceToImageShorterSideRatio.min,
      h
    ), p = tB(i);
    n.value && (fE(r.current, n.value.processedImage.detection), pE(
      r.current,
      n.value.processedImage.detection,
      i
    ), ei(r.current, h, "lime"), ei(r.current, f, "yellow"), ei(r.current, p, "blue"), $t(r.current, n.value.processedImage.detection.leftEye.center, "cyan"), $t(r.current, n.value.processedImage.detection.rightEye.center, "cyan"), $t(r.current, n.value.processedImage.detection.mouth.center, "cyan"));
  }, [i, e, n.value]), !n.value)
    return null;
  const {
    avgFps: g,
    detectionTime: a,
    fps: I,
    processedImage: { detection: C, instructionCode: s, invalidValidators: B, isEscalated: E },
    resolution: x,
    samVersion: Q
  } = n.value, l = {
    Confidence: C.confidence,
    Brightness: C.brightness,
    Sharpness: C.sharpness,
    "Face size": C.faceSize,
    "Left eye confidence": C.leftEye.confidence,
    "Left eye status": C.leftEye.status,
    "Right eye confidence": C.rightEye.confidence,
    "Right eye status": C.rightEye.status,
    "Mouth confidence": C.mouth.confidence,
    "Mouth status": C.mouth.status,
    "Detection time": a,
    FPS: I,
    "Avg FPS": g,
    Tier: o,
    Instruction: s,
    Resolution: x,
    "Escalated instruction": E,
    "Component version": "8.0.4",
    "Thresholds preset": A
  };
  return Q && (l["SAM version"] = Q), B.length > 0 && (l["Invalid validators"] = B), /* @__PURE__ */ b(
    HB,
    {
      ref: r,
      cameraResolution: i,
      detectionDetails: l,
      isImageMirror: t
    }
  );
}
function mE({ isRounded: i, isSquare: n, ...t }) {
  return i ? /* @__PURE__ */ b("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ b("rect", { fill: "#000", ...t, rx: n ? "0" : "50%" });
}
function wE(i, n) {
  const [t, e] = Z(!1), A = () => e((g) => !g), o = "" + t;
  Ft(() => {
    function g() {
      if (!i.current) return;
      const s = new MutationObserver(() => {
        A();
      }), B = {};
      return B.childList = !0, B.subtree = !0, B.attributes = !0, s.observe(i.current, B), s;
    }
    function a() {
      if (!i.current?.["parentElement"]) return;
      const s = new MutationObserver((E) => {
        E.find((Q) => {
          for (const l of Q.removedNodes)
            if (l !== n?.current && l === i.current)
              return !0;
        }) && A(), E.forEach((Q) => {
          Q.addedNodes.forEach((l) => {
            l !== n?.current && l.parentElement?.removeChild(l);
          });
        });
      }), B = {};
      return B.childList = !0, s.observe(i.current.parentElement, B), s;
    }
    const I = g(), C = a();
    return () => {
      C?.disconnect(), I?.disconnect();
    };
  });
  const r = {};
  return r.key = o, r;
}
const DE = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function bE({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = DA(null), { key: o } = wE(A, t);
  return /* @__PURE__ */ b("div", { ref: A, style: DE, children: /* @__PURE__ */ b("svg", { viewBox: `0 0 ${e} ${n}`, children: [
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
function kE({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = oB(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, g = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ b(
    bE,
    {
      cutOut: i || /* @__PURE__ */ b(mE, { height: A, width: o, x: r, y: g }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function SE({ cameraResolution: i, children: n, detectionDetails: t, shouldMirror: e }) {
  const { appState: A } = ue(), { showFreemiumOverlay: o, showFullFreemiumOverlay: r } = rE(i), g = DA(null), a = i && A === VA.RUNNING;
  return /* @__PURE__ */ b(WA, { children: [
    o && i && /* @__PURE__ */ b(
      kE,
      {
        fullOverlay: r,
        ignoreElement: g,
        resolution: i
      }
    ),
    n,
    a && /* @__PURE__ */ b("div", { ref: g, children: /* @__PURE__ */ b(
      yE,
      {
        cameraResolution: i,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const GE = (i, n) => {
  if (fB()) {
    const t = {};
    t.candidateSelectionImages = n;
    const e = t;
    Ge.getInstance().dispatchCustomEventOnChange(i, e);
  }
};
var Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ng = {}, ai = {}, gi, ig;
function NE() {
  if (ig) return gi;
  ig = 1, gi = i;
  function i(n, t) {
    for (var e = new Array(arguments.length - 1), A = 0, o = 2, r = !0; o < arguments.length; )
      e[A++] = arguments[o++];
    return new Promise(function(g, a) {
      e[A] = function(I) {
        if (r)
          if (r = !1, I)
            a(I);
          else {
            for (var C = new Array(arguments.length - 1), s = 0; s < C.length; )
              C[s++] = arguments[s];
            g.apply(null, C);
          }
      };
      try {
        n.apply(t || null, e);
      } catch (I) {
        r && (r = !1, a(I));
      }
    });
  }
  return gi;
}
var rg = {}, ag;
function RE() {
  return ag || (ag = 1, (function(i) {
    var n = i;
    n.length = function(r) {
      var g = r.length;
      if (!g)
        return 0;
      for (var a = 0; --g % 4 > 1 && r.charAt(g) === "="; )
        ++a;
      return Math.ceil(r.length * 3) / 4 - a;
    };
    for (var t = new Array(64), e = new Array(123), A = 0; A < 64; )
      e[t[A] = A < 26 ? A + 65 : A < 52 ? A + 71 : A < 62 ? A - 4 : A - 59 | 43] = A++;
    n.encode = function(r, g, a) {
      for (var I = null, C = [], s = 0, B = 0, E; g < a; ) {
        var x = r[g++];
        switch (B) {
          case 0:
            C[s++] = t[x >> 2], E = (x & 3) << 4, B = 1;
            break;
          case 1:
            C[s++] = t[E | x >> 4], E = (x & 15) << 2, B = 2;
            break;
          case 2:
            C[s++] = t[E | x >> 6], C[s++] = t[x & 63], B = 0;
            break;
        }
        s > 8191 && ((I || (I = [])).push(String.fromCharCode.apply(String, C)), s = 0);
      }
      return B && (C[s++] = t[E], C[s++] = 61, B === 1 && (C[s++] = 61)), I ? (s && I.push(String.fromCharCode.apply(String, C.slice(0, s))), I.join("")) : String.fromCharCode.apply(String, C.slice(0, s));
    };
    var o = "invalid encoding";
    n.decode = function(r, g, a) {
      for (var I = a, C = 0, s, B = 0; B < r.length; ) {
        var E = r.charCodeAt(B++);
        if (E === 61 && C > 1)
          break;
        if ((E = e[E]) === void 0)
          throw Error(o);
        switch (C) {
          case 0:
            s = E, C = 1;
            break;
          case 1:
            g[a++] = s << 2 | (E & 48) >> 4, s = E, C = 2;
            break;
          case 2:
            g[a++] = (s & 15) << 4 | (E & 60) >> 2, s = E, C = 3;
            break;
          case 3:
            g[a++] = (s & 3) << 6 | E, C = 0;
            break;
        }
      }
      if (C === 1)
        throw Error(o);
      return a - I;
    }, n.test = function(r) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
    };
  })(rg)), rg;
}
var si, gg;
function vE() {
  if (gg) return si;
  gg = 1, si = i;
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
  }, si;
}
var Ii, sg;
function FE() {
  if (sg) return Ii;
  sg = 1, Ii = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? (function() {
      var r = new Float32Array([-0]), g = new Uint8Array(r.buffer), a = g[3] === 128;
      function I(E, x, Q) {
        r[0] = E, x[Q] = g[0], x[Q + 1] = g[1], x[Q + 2] = g[2], x[Q + 3] = g[3];
      }
      function C(E, x, Q) {
        r[0] = E, x[Q] = g[3], x[Q + 1] = g[2], x[Q + 2] = g[1], x[Q + 3] = g[0];
      }
      o.writeFloatLE = a ? I : C, o.writeFloatBE = a ? C : I;
      function s(E, x) {
        return g[0] = E[x], g[1] = E[x + 1], g[2] = E[x + 2], g[3] = E[x + 3], r[0];
      }
      function B(E, x) {
        return g[3] = E[x], g[2] = E[x + 1], g[1] = E[x + 2], g[0] = E[x + 3], r[0];
      }
      o.readFloatLE = a ? s : B, o.readFloatBE = a ? B : s;
    })() : (function() {
      function r(a, I, C, s) {
        var B = I < 0 ? 1 : 0;
        if (B && (I = -I), I === 0)
          a(1 / I > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), C, s);
        else if (isNaN(I))
          a(2143289344, C, s);
        else if (I > 34028234663852886e22)
          a((B << 31 | 2139095040) >>> 0, C, s);
        else if (I < 11754943508222875e-54)
          a((B << 31 | Math.round(I / 1401298464324817e-60)) >>> 0, C, s);
        else {
          var E = Math.floor(Math.log(I) / Math.LN2), x = Math.round(I * Math.pow(2, -E) * 8388608) & 8388607;
          a((B << 31 | E + 127 << 23 | x) >>> 0, C, s);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function g(a, I, C) {
        var s = a(I, C), B = (s >> 31) * 2 + 1, E = s >>> 23 & 255, x = s & 8388607;
        return E === 255 ? x ? NaN : B * (1 / 0) : E === 0 ? B * 1401298464324817e-60 * x : B * Math.pow(2, E - 150) * (x + 8388608);
      }
      o.readFloatLE = g.bind(null, e), o.readFloatBE = g.bind(null, A);
    })(), typeof Float64Array < "u" ? (function() {
      var r = new Float64Array([-0]), g = new Uint8Array(r.buffer), a = g[7] === 128;
      function I(E, x, Q) {
        r[0] = E, x[Q] = g[0], x[Q + 1] = g[1], x[Q + 2] = g[2], x[Q + 3] = g[3], x[Q + 4] = g[4], x[Q + 5] = g[5], x[Q + 6] = g[6], x[Q + 7] = g[7];
      }
      function C(E, x, Q) {
        r[0] = E, x[Q] = g[7], x[Q + 1] = g[6], x[Q + 2] = g[5], x[Q + 3] = g[4], x[Q + 4] = g[3], x[Q + 5] = g[2], x[Q + 6] = g[1], x[Q + 7] = g[0];
      }
      o.writeDoubleLE = a ? I : C, o.writeDoubleBE = a ? C : I;
      function s(E, x) {
        return g[0] = E[x], g[1] = E[x + 1], g[2] = E[x + 2], g[3] = E[x + 3], g[4] = E[x + 4], g[5] = E[x + 5], g[6] = E[x + 6], g[7] = E[x + 7], r[0];
      }
      function B(E, x) {
        return g[7] = E[x], g[6] = E[x + 1], g[5] = E[x + 2], g[4] = E[x + 3], g[3] = E[x + 4], g[2] = E[x + 5], g[1] = E[x + 6], g[0] = E[x + 7], r[0];
      }
      o.readDoubleLE = a ? s : B, o.readDoubleBE = a ? B : s;
    })() : (function() {
      function r(a, I, C, s, B, E) {
        var x = s < 0 ? 1 : 0;
        if (x && (s = -s), s === 0)
          a(0, B, E + I), a(1 / s > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), B, E + C);
        else if (isNaN(s))
          a(0, B, E + I), a(2146959360, B, E + C);
        else if (s > 17976931348623157e292)
          a(0, B, E + I), a((x << 31 | 2146435072) >>> 0, B, E + C);
        else {
          var Q;
          if (s < 22250738585072014e-324)
            Q = s / 5e-324, a(Q >>> 0, B, E + I), a((x << 31 | Q / 4294967296) >>> 0, B, E + C);
          else {
            var l = Math.floor(Math.log(s) / Math.LN2);
            l === 1024 && (l = 1023), Q = s * Math.pow(2, -l), a(Q * 4503599627370496 >>> 0, B, E + I), a((x << 31 | l + 1023 << 20 | Q * 1048576 & 1048575) >>> 0, B, E + C);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function g(a, I, C, s, B) {
        var E = a(s, B + I), x = a(s, B + C), Q = (x >> 31) * 2 + 1, l = x >>> 20 & 2047, h = 4294967296 * (x & 1048575) + E;
        return l === 2047 ? h ? NaN : Q * (1 / 0) : l === 0 ? Q * 5e-324 * h : Q * Math.pow(2, l - 1075) * (h + 4503599627370496);
      }
      o.readDoubleLE = g.bind(null, e, 0, 4), o.readDoubleBE = g.bind(null, A, 4, 0);
    })(), o;
  }
  function n(o, r, g) {
    r[g] = o & 255, r[g + 1] = o >>> 8 & 255, r[g + 2] = o >>> 16 & 255, r[g + 3] = o >>> 24;
  }
  function t(o, r, g) {
    r[g] = o >>> 24, r[g + 1] = o >>> 16 & 255, r[g + 2] = o >>> 8 & 255, r[g + 3] = o & 255;
  }
  function e(o, r) {
    return (o[r] | o[r + 1] << 8 | o[r + 2] << 16 | o[r + 3] << 24) >>> 0;
  }
  function A(o, r) {
    return (o[r] << 24 | o[r + 1] << 16 | o[r + 2] << 8 | o[r + 3]) >>> 0;
  }
  return Ii;
}
function Ig(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ci, cg;
function ME() {
  if (cg) return ci;
  cg = 1, ci = i;
  function i(n) {
    try {
      if (typeof Ig != "function")
        return null;
      var t = Ig(n);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return ci;
}
var Cg = {}, Bg;
function WE() {
  return Bg || (Bg = 1, (function(i) {
    var n = i;
    n.length = function(t) {
      for (var e = 0, A = 0, o = 0; o < t.length; ++o)
        A = t.charCodeAt(o), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 ? (++o, e += 4) : e += 3;
      return e;
    }, n.read = function(t, e, A) {
      var o = A - e;
      if (o < 1)
        return "";
      for (var r = null, g = [], a = 0, I; e < A; )
        I = t[e++], I < 128 ? g[a++] = I : I > 191 && I < 224 ? g[a++] = (I & 31) << 6 | t[e++] & 63 : I > 239 && I < 365 ? (I = ((I & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, g[a++] = 55296 + (I >> 10), g[a++] = 56320 + (I & 1023)) : g[a++] = (I & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, a > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, g)), a = 0);
      return r ? (a && r.push(String.fromCharCode.apply(String, g.slice(0, a))), r.join("")) : String.fromCharCode.apply(String, g.slice(0, a));
    }, n.write = function(t, e, A) {
      for (var o = A, r, g, a = 0; a < t.length; ++a)
        r = t.charCodeAt(a), r < 128 ? e[A++] = r : r < 2048 ? (e[A++] = r >> 6 | 192, e[A++] = r & 63 | 128) : (r & 64512) === 55296 && ((g = t.charCodeAt(a + 1)) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (g & 1023), ++a, e[A++] = r >> 18 | 240, e[A++] = r >> 12 & 63 | 128, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128) : (e[A++] = r >> 12 | 224, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128);
      return A - o;
    };
  })(Cg)), Cg;
}
var Ci, Qg;
function LE() {
  if (Qg) return Ci;
  Qg = 1, Ci = i;
  function i(n, t, e) {
    var A = e || 8192, o = A >>> 1, r = null, g = A;
    return function(a) {
      if (a < 1 || a > o)
        return n(a);
      g + a > A && (r = n(A), g = 0);
      var I = t.call(r, g, g += a);
      return g & 7 && (g = (g | 7) + 1), I;
    };
  }
  return Ci;
}
var Bi, Eg;
function OE() {
  if (Eg) return Bi;
  Eg = 1, Bi = n;
  var i = st();
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
    var g = o >>> 0, a = (o - g) / 4294967296 >>> 0;
    return r && (a = ~a >>> 0, g = ~g >>> 0, ++g > 4294967295 && (g = 0, ++a > 4294967295 && (a = 0))), new n(g, a);
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
      var r = ~this.lo + 1 >>> 0, g = ~this.hi >>> 0;
      return r || (g = g + 1 >>> 0), -(r + g * 4294967296);
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
    var o = this.lo, r = (this.lo >>> 28 | this.hi << 4) >>> 0, g = this.hi >>> 24;
    return g === 0 ? r === 0 ? o < 16384 ? o < 128 ? 1 : 2 : o < 2097152 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 2097152 ? 7 : 8 : g < 128 ? 9 : 10;
  }, Bi;
}
var xg;
function st() {
  return xg || (xg = 1, (function(i) {
    var n = i;
    n.asPromise = NE(), n.base64 = RE(), n.EventEmitter = vE(), n.float = FE(), n.inquire = ME(), n.utf8 = WE(), n.pool = LE(), n.LongBits = OE(), n.isNode = !!(typeof Qt < "u" && Qt && Qt.process && Qt.process.versions && Qt.process.versions.node), n.global = n.isNode && Qt || typeof window < "u" && window || typeof self < "u" && self || ai, n.emptyArray = Object.freeze ? Object.freeze([]) : (
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
      for (var g = Object.keys(o), a = 0; a < g.length; ++a)
        (A[g[a]] === void 0 || !r) && (A[g[a]] = o[g[a]]);
      return A;
    }
    n.merge = t, n.lcFirst = function(A) {
      return A.charAt(0).toLowerCase() + A.substring(1);
    };
    function e(A) {
      function o(r, g) {
        if (!(this instanceof o))
          return new o(r, g);
        Object.defineProperty(this, "message", { get: function() {
          return r;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, o) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), g && t(this, g);
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
        for (var g = Object.keys(this), a = g.length - 1; a > -1; --a)
          if (o[g[a]] === 1 && this[g[a]] !== void 0 && this[g[a]] !== null)
            return g[a];
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
  })(ai)), ai;
}
var Qi, dg;
function d0() {
  if (dg) return Qi;
  dg = 1, Qi = a;
  var i = st(), n, t = i.LongBits, e = i.base64, A = i.utf8;
  function o(l, h, f) {
    this.fn = l, this.len = h, this.next = void 0, this.val = f;
  }
  function r() {
  }
  function g(l) {
    this.head = l.head, this.tail = l.tail, this.len = l.len, this.next = l.states;
  }
  function a() {
    this.len = 0, this.head = new o(r, 0, 0), this.tail = this.head, this.states = null;
  }
  var I = function() {
    return i.Buffer ? function() {
      return (a.create = function() {
        return new n();
      })();
    } : function() {
      return new a();
    };
  };
  a.create = I(), a.alloc = function(l) {
    return new i.Array(l);
  }, i.Array !== Array && (a.alloc = i.pool(a.alloc, i.Array.prototype.subarray)), a.prototype._push = function(l, h, f) {
    return this.tail = this.tail.next = new o(l, h, f), this.len += h, this;
  };
  function C(l, h, f) {
    h[f] = l & 255;
  }
  function s(l, h, f) {
    for (; l > 127; )
      h[f++] = l & 127 | 128, l >>>= 7;
    h[f] = l;
  }
  function B(l, h) {
    this.len = l, this.next = void 0, this.val = h;
  }
  B.prototype = Object.create(o.prototype), B.prototype.fn = s, a.prototype.uint32 = function(l) {
    return this.len += (this.tail = this.tail.next = new B(
      (l = l >>> 0) < 128 ? 1 : l < 16384 ? 2 : l < 2097152 ? 3 : l < 268435456 ? 4 : 5,
      l
    )).len, this;
  }, a.prototype.int32 = function(l) {
    return l < 0 ? this._push(E, 10, t.fromNumber(l)) : this.uint32(l);
  }, a.prototype.sint32 = function(l) {
    return this.uint32((l << 1 ^ l >> 31) >>> 0);
  };
  function E(l, h, f) {
    for (; l.hi; )
      h[f++] = l.lo & 127 | 128, l.lo = (l.lo >>> 7 | l.hi << 25) >>> 0, l.hi >>>= 7;
    for (; l.lo > 127; )
      h[f++] = l.lo & 127 | 128, l.lo = l.lo >>> 7;
    h[f++] = l.lo;
  }
  a.prototype.uint64 = function(l) {
    var h = t.from(l);
    return this._push(E, h.length(), h);
  }, a.prototype.int64 = a.prototype.uint64, a.prototype.sint64 = function(l) {
    var h = t.from(l).zzEncode();
    return this._push(E, h.length(), h);
  }, a.prototype.bool = function(l) {
    return this._push(C, 1, l ? 1 : 0);
  };
  function x(l, h, f) {
    h[f] = l & 255, h[f + 1] = l >>> 8 & 255, h[f + 2] = l >>> 16 & 255, h[f + 3] = l >>> 24;
  }
  a.prototype.fixed32 = function(l) {
    return this._push(x, 4, l >>> 0);
  }, a.prototype.sfixed32 = a.prototype.fixed32, a.prototype.fixed64 = function(l) {
    var h = t.from(l);
    return this._push(x, 4, h.lo)._push(x, 4, h.hi);
  }, a.prototype.sfixed64 = a.prototype.fixed64, a.prototype.float = function(l) {
    return this._push(i.float.writeFloatLE, 4, l);
  }, a.prototype.double = function(l) {
    return this._push(i.float.writeDoubleLE, 8, l);
  };
  var Q = i.Array.prototype.set ? function(l, h, f) {
    h.set(l, f);
  } : function(l, h, f) {
    for (var p = 0; p < l.length; ++p)
      h[f + p] = l[p];
  };
  return a.prototype.bytes = function(l) {
    var h = l.length >>> 0;
    if (!h)
      return this._push(C, 1, 0);
    if (i.isString(l)) {
      var f = a.alloc(h = e.length(l));
      e.decode(l, f, 0), l = f;
    }
    return this.uint32(h)._push(Q, h, l);
  }, a.prototype.string = function(l) {
    var h = A.length(l);
    return h ? this.uint32(h)._push(A.write, h, l) : this._push(C, 1, 0);
  }, a.prototype.fork = function() {
    return this.states = new g(this), this.head = this.tail = new o(r, 0, 0), this.len = 0, this;
  }, a.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(r, 0, 0), this.len = 0), this;
  }, a.prototype.ldelim = function() {
    var l = this.head, h = this.tail, f = this.len;
    return this.reset().uint32(f), f && (this.tail.next = l.next, this.tail = h, this.len += f), this;
  }, a.prototype.finish = function() {
    for (var l = this.head.next, h = this.constructor.alloc(this.len), f = 0; l; )
      l.fn(l.val, h, f), f += l.len, l = l.next;
    return h;
  }, a._configure = function(l) {
    n = l, a.create = I(), n._configure();
  }, Qi;
}
var Ei, lg;
function JE() {
  if (lg) return Ei;
  lg = 1, Ei = t;
  var i = d0();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = st();
  function t() {
    i.call(this);
  }
  t._configure = function() {
    t.alloc = n._Buffer_allocUnsafe, t.writeBytesBuffer = n.Buffer && n.Buffer.prototype instanceof Uint8Array && n.Buffer.prototype.set.name === "set" ? function(A, o, r) {
      o.set(A, r);
    } : function(A, o, r) {
      if (A.copy)
        A.copy(o, r, 0, A.length);
      else for (var g = 0; g < A.length; )
        o[r++] = A[g++];
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
  }, t._configure(), Ei;
}
var xi, ug;
function l0() {
  if (ug) return xi;
  ug = 1, xi = o;
  var i = st(), n, t = i.LongBits, e = i.utf8;
  function A(s, B) {
    return RangeError("index out of range: " + s.pos + " + " + (B || 1) + " > " + s.len);
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
  }, g = function() {
    return i.Buffer ? function(s) {
      return (o.create = function(B) {
        return i.Buffer.isBuffer(B) ? new n(B) : r(B);
      })(s);
    } : r;
  };
  o.create = g(), o.prototype._slice = i.Array.prototype.subarray || /* istanbul ignore next */
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
  function a() {
    var s = new t(0, 0), B = 0;
    if (this.len - this.pos > 4) {
      for (; B < 4; ++B)
        if (s.lo = (s.lo | (this.buf[this.pos] & 127) << B * 7) >>> 0, this.buf[this.pos++] < 128)
          return s;
      if (s.lo = (s.lo | (this.buf[this.pos] & 127) << 28) >>> 0, s.hi = (s.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
        return s;
      B = 0;
    } else {
      for (; B < 3; ++B) {
        if (this.pos >= this.len)
          throw A(this);
        if (s.lo = (s.lo | (this.buf[this.pos] & 127) << B * 7) >>> 0, this.buf[this.pos++] < 128)
          return s;
      }
      return s.lo = (s.lo | (this.buf[this.pos++] & 127) << B * 7) >>> 0, s;
    }
    if (this.len - this.pos > 4) {
      for (; B < 5; ++B)
        if (s.hi = (s.hi | (this.buf[this.pos] & 127) << B * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return s;
    } else
      for (; B < 5; ++B) {
        if (this.pos >= this.len)
          throw A(this);
        if (s.hi = (s.hi | (this.buf[this.pos] & 127) << B * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return s;
      }
    throw Error("invalid varint encoding");
  }
  o.prototype.bool = function() {
    return this.uint32() !== 0;
  };
  function I(s, B) {
    return (s[B - 4] | s[B - 3] << 8 | s[B - 2] << 16 | s[B - 1] << 24) >>> 0;
  }
  o.prototype.fixed32 = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    return I(this.buf, this.pos += 4);
  }, o.prototype.sfixed32 = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    return I(this.buf, this.pos += 4) | 0;
  };
  function C() {
    if (this.pos + 8 > this.len)
      throw A(this, 8);
    return new t(I(this.buf, this.pos += 4), I(this.buf, this.pos += 4));
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
    var s = this.uint32(), B = this.pos, E = this.pos + s;
    if (E > this.len)
      throw A(this, s);
    if (this.pos += s, Array.isArray(this.buf))
      return this.buf.slice(B, E);
    if (B === E) {
      var x = i.Buffer;
      return x ? x.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, B, E);
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
    n = s, o.create = g(), n._configure();
    var B = i.Long ? "toLong" : (
      /* istanbul ignore next */
      "toNumber"
    );
    i.merge(o.prototype, {
      int64: function() {
        return a.call(this)[B](!1);
      },
      uint64: function() {
        return a.call(this)[B](!0);
      },
      sint64: function() {
        return a.call(this).zzDecode()[B](!1);
      },
      fixed64: function() {
        return C.call(this)[B](!0);
      },
      sfixed64: function() {
        return C.call(this)[B](!1);
      }
    });
  }, xi;
}
var di, hg;
function UE() {
  if (hg) return di;
  hg = 1, di = t;
  var i = l0();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = st();
  function t(e) {
    i.call(this, e);
  }
  return t._configure = function() {
    n.Buffer && (t.prototype._slice = n.Buffer.prototype.slice);
  }, t.prototype.string = function() {
    var e = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
  }, t._configure(), di;
}
var fg = {}, li, pg;
function YE() {
  if (pg) return li;
  pg = 1, li = n;
  var i = st();
  (n.prototype = Object.create(i.EventEmitter.prototype)).constructor = n;
  function n(t, e, A) {
    if (typeof t != "function")
      throw TypeError("rpcImpl must be a function");
    i.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!e, this.responseDelimited = !!A;
  }
  return n.prototype.rpcCall = function t(e, A, o, r, g) {
    if (!r)
      throw TypeError("request must be specified");
    var a = this;
    if (!g)
      return i.asPromise(t, a, e, A, o, r);
    if (!a.rpcImpl) {
      setTimeout(function() {
        g(Error("already ended"));
      }, 0);
      return;
    }
    try {
      return a.rpcImpl(
        e,
        A[a.requestDelimited ? "encodeDelimited" : "encode"](r).finish(),
        function(I, C) {
          if (I)
            return a.emit("error", I, e), g(I);
          if (C === null) {
            a.end(
              /* endedByRPC */
              !0
            );
            return;
          }
          if (!(C instanceof o))
            try {
              C = o[a.responseDelimited ? "decodeDelimited" : "decode"](C);
            } catch (s) {
              return a.emit("error", s, e), g(s);
            }
          return a.emit("data", C, e), g(null, C);
        }
      );
    } catch (I) {
      a.emit("error", I, e), setTimeout(function() {
        g(I);
      }, 0);
      return;
    }
  }, n.prototype.end = function(t) {
    return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
  }, li;
}
var yg;
function TE() {
  return yg || (yg = 1, (function(i) {
    var n = i;
    n.Service = YE();
  })(fg)), fg;
}
var mg, wg;
function PE() {
  return wg || (wg = 1, mg = {}), mg;
}
var Dg;
function HE() {
  return Dg || (Dg = 1, (function(i) {
    var n = i;
    n.build = "minimal", n.Writer = d0(), n.BufferWriter = JE(), n.Reader = l0(), n.BufferReader = UE(), n.util = st(), n.rpc = TE(), n.roots = PE(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  })(ng)), ng;
}
var bg, kg;
function _E() {
  return kg || (kg = 1, bg = HE()), bg;
}
var S = _E();
const u = S.Reader, G = S.Writer, d = S.util, c = S.roots.default || (S.roots.default = {}), Ue = c.dot = (() => {
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
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.Content();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
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
            t.skipType(g & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || d.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || d.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !d.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.Content)
        return t;
      let e = new c.dot.Content();
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
            c.dot.Image.encode(A.images[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && c.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.images && a.images.length || (a.images = []), a.images.push(c.dot.Image.decode(A, A.uint32()));
              break;
            }
            case 3: {
              a.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.images != null && A.hasOwnProperty("images")) {
          if (!Array.isArray(A.images))
            return "images: array expected";
          for (let o = 0; o < A.images.length; ++o) {
            let r = c.dot.Image.verify(A.images[o]);
            if (r)
              return "images." + r;
          }
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = c.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = c.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.MagnifEyeLivenessContent)
          return A;
        let o = new c.dot.v4.MagnifEyeLivenessContent();
        if (A.images) {
          if (!Array.isArray(A.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          o.images = [];
          for (let r = 0; r < A.images.length; ++r) {
            if (typeof A.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            o.images[r] = c.dot.Image.fromObject(A.images[r]);
          }
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.video: object expected");
          o.video = c.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          o.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.images = []), o.defaults && (r.metadata = null), A.images && A.images.length) {
          r.images = [];
          for (let g = 0; g < A.images.length; ++g)
            r.images[g] = c.dot.Image.toObject(A.images[g], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = c.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = c.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && c.dot.v4.WebMetadata.encode(A.web, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && c.dot.v4.AndroidMetadata.encode(A.android, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && c.dot.v4.IosMetadata.encode(A.ios, o.uint32(
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
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.Metadata();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.platform = A.int32();
              break;
            }
            case 5: {
              a.sessionToken = A.string();
              break;
            }
            case 6: {
              a.componentVersion = A.string();
              break;
            }
            case 2: {
              a.web = c.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.android = c.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.ios = c.dot.v4.IosMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
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
            let r = c.dot.v4.WebMetadata.verify(A.web);
            if (r)
              return "web." + r;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = c.dot.v4.AndroidMetadata.verify(A.android);
            if (r)
              return "android." + r;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = c.dot.v4.IosMetadata.verify(A.ios);
            if (r)
              return "ios." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.Metadata)
          return A;
        let o = new c.dot.v4.Metadata();
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
          o.web = c.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          o.android = c.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          o.ios = c.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.platform = o.enums === String ? "WEB" : 0, r.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (r.platform = o.enums === String ? c.dot.Platform[A.platform] === void 0 ? A.platform : c.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (r.web = c.dot.v4.WebMetadata.toObject(A.web, o), o.oneofs && (r.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (r.android = c.dot.v4.AndroidMetadata.toObject(A.android, o), o.oneofs && (r.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (r.ios = c.dot.v4.IosMetadata.toObject(A.ios, o), o.oneofs && (r.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (r.sessionToken = A.sessionToken, o.oneofs && (r._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (r.componentVersion = A.componentVersion), r;
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
          for (let r = Object.keys(A.dynamicCameraFrameProperties), g = 0; g < r.length; ++g)
            o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[g]), c.dot.Int32List.encode(A.dynamicCameraFrameProperties[r[g]], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r)
            c.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && c.dot.v4.AndroidCamera.encode(A.camera, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && c.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.tamperingIndicators != null && Object.hasOwnProperty.call(A, "tamperingIndicators") && o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).bytes(A.tamperingIndicators), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && c.dot.v4.Yuv420Image.encode(A.croppedYuv420Image, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && c.dot.v4.Yuv420ImageCrop.encode(A.yuv420ImageCrop, o.uint32(
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
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.AndroidMetadata(), I, C;
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.supportedAbis && a.supportedAbis.length || (a.supportedAbis = []), a.supportedAbis.push(A.string());
              break;
            }
            case 2: {
              a.device = A.string();
              break;
            }
            case 6: {
              a.camera = c.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = c.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(c.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.dynamicCameraFrameProperties === d.emptyObject && (a.dynamicCameraFrameProperties = {});
              let B = A.uint32() + A.pos;
              for (I = "", C = null; A.pos < B; ) {
                let E = A.uint32();
                switch (E >>> 3) {
                  case 1:
                    I = A.string();
                    break;
                  case 2:
                    C = c.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(E & 7);
                    break;
                }
              }
              a.dynamicCameraFrameProperties[I] = C;
              break;
            }
            case 8: {
              a.tamperingIndicators = A.bytes();
              break;
            }
            case 9: {
              a.croppedYuv420Image = c.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            case 10: {
              a.yuv420ImageCrop = c.dot.v4.Yuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            case 11: {
              a.androidId = A.string();
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
          let o = c.dot.v4.AndroidCamera.verify(A.camera);
          if (o)
            return "camera." + o;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let o = c.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
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
            let r = c.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[o]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!d.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(A.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let g = c.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (g)
              return "dynamicCameraFrameProperties." + g;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || d.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let o = c.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (o)
            return "croppedYuv420Image." + o;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let o = c.dot.v4.Yuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (o)
            return "yuv420ImageCrop." + o;
        }
        return A.androidId != null && A.hasOwnProperty("androidId") && !d.isString(A.androidId) ? "androidId: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.AndroidMetadata)
          return A;
        let o = new c.dot.v4.AndroidMetadata();
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
          o.camera = c.dot.v4.AndroidCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.AndroidMetadata.detectionNormalizedRectangle: object expected");
          o.detectionNormalizedRectangle = c.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
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
            o.digestsWithTimestamp[r] = c.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          o.dynamicCameraFrameProperties = {};
          for (let r = Object.keys(A.dynamicCameraFrameProperties), g = 0; g < r.length; ++g) {
            if (typeof A.dynamicCameraFrameProperties[r[g]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[r[g]] = c.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[r[g]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? d.base64.decode(A.tamperingIndicators, o.tamperingIndicators = d.newBuffer(d.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (o.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          o.croppedYuv420Image = c.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.AndroidMetadata.yuv420ImageCrop: object expected");
          o.yuv420ImageCrop = c.dot.v4.Yuv420ImageCrop.fromObject(A.yuv420ImageCrop);
        }
        return A.androidId != null && (o.androidId = String(A.androidId)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.supportedAbis = [], r.digests = [], r.digestsWithTimestamp = []), (o.objects || o.defaults) && (r.dynamicCameraFrameProperties = {}), A.supportedAbis && A.supportedAbis.length) {
          r.supportedAbis = [];
          for (let a = 0; a < A.supportedAbis.length; ++a)
            r.supportedAbis[a] = A.supportedAbis[a];
        }
        if (A.device != null && A.hasOwnProperty("device") && (r.device = A.device, o.oneofs && (r._device = "device")), A.digests && A.digests.length) {
          r.digests = [];
          for (let a = 0; a < A.digests.length; ++a)
            r.digests[a] = o.bytes === String ? d.base64.encode(A.digests[a], 0, A.digests[a].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
        }
        let g;
        if (A.dynamicCameraFrameProperties && (g = Object.keys(A.dynamicCameraFrameProperties)).length) {
          r.dynamicCameraFrameProperties = {};
          for (let a = 0; a < g.length; ++a)
            r.dynamicCameraFrameProperties[g[a]] = c.dot.Int32List.toObject(A.dynamicCameraFrameProperties[g[a]], o);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            r.digestsWithTimestamp[a] = c.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = c.dot.v4.AndroidCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = c.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (r.tamperingIndicators = o.bytes === String ? d.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : o.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, o.oneofs && (r._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = c.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = c.dot.v4.Yuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), A.androidId != null && A.hasOwnProperty("androidId") && (r.androidId = A.androidId, o.oneofs && (r._androidId = "androidId")), r;
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
        return A || (A = G.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && c.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.AndroidCamera();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.resolution = c.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.rotationDegrees = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = c.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !d.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.AndroidCamera)
          return e;
        let A = new c.dot.v4.AndroidCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.AndroidCamera.resolution: object expected");
          A.resolution = c.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.resolution = null, o.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (o.resolution = c.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (o.rotationDegrees = e.rotationDegrees), o;
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
        return A || (A = G.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && c.dot.ImageSize.encode(e.size, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.Yuv420Image();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.size = c.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.yPlane = e.bytes();
              break;
            }
            case 3: {
              g.uPlane = e.bytes();
              break;
            }
            case 4: {
              g.vPlane = e.bytes();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = c.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || d.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || d.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || d.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.Yuv420Image)
          return e;
        let A = new c.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = c.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? d.base64.decode(e.yPlane, A.yPlane = d.newBuffer(d.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? d.base64.decode(e.uPlane, A.uPlane = d.newBuffer(d.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? d.base64.decode(e.vPlane, A.vPlane = d.newBuffer(d.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = d.newBuffer(o.yPlane))), A.bytes === String ? o.uPlane = "" : (o.uPlane = [], A.bytes !== Array && (o.uPlane = d.newBuffer(o.uPlane))), A.bytes === String ? o.vPlane = "" : (o.vPlane = [], A.bytes !== Array && (o.vPlane = d.newBuffer(o.vPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = c.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? d.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (o.uPlane = A.bytes === String ? d.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (o.vPlane = A.bytes === String ? d.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), o;
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
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.v4.Yuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && c.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.Yuv420ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = c.dot.v4.Yuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = c.dot.PointInt.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = c.dot.v4.Yuv420Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = c.dot.PointInt.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.Yuv420ImageCrop)
          return e;
        let A = new c.dot.v4.Yuv420ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.Yuv420ImageCrop.image: object expected");
          A.image = c.dot.v4.Yuv420Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.Yuv420ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = c.dot.PointInt.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = c.dot.v4.Yuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = c.dot.PointInt.toObject(e.topLeftCorner, A)), o;
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
          for (let r = Object.keys(A.architectureInfo), g = 0; g < r.length; ++g)
            o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[g]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(A.architectureInfo[r[g]]).ldelim();
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
            c.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && c.dot.v4.IosCamera.encode(A.camera, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && c.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && c.dot.v4.IosYuv420Image.encode(A.croppedYuv420Image, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && c.dot.v4.IosYuv420ImageCrop.encode(A.yuv420ImageCrop, o.uint32(
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
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.IosMetadata(), I, C;
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.cameraModelId = A.string();
              break;
            }
            case 2: {
              a.architectureInfo === d.emptyObject && (a.architectureInfo = {});
              let B = A.uint32() + A.pos;
              for (I = "", C = !1; A.pos < B; ) {
                let E = A.uint32();
                switch (E >>> 3) {
                  case 1:
                    I = A.string();
                    break;
                  case 2:
                    C = A.bool();
                    break;
                  default:
                    A.skipType(E & 7);
                    break;
                }
              }
              a.architectureInfo[I] = C;
              break;
            }
            case 6: {
              a.camera = c.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = c.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(c.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (s & 7) === 2) {
                let B = A.uint32() + A.pos;
                for (; A.pos < B; )
                  a.isoValues.push(A.int32());
              } else
                a.isoValues.push(A.int32());
              break;
            }
            case 8: {
              a.croppedYuv420Image = c.dot.v4.IosYuv420Image.decode(A, A.uint32());
              break;
            }
            case 9: {
              a.yuv420ImageCrop = c.dot.v4.IosYuv420ImageCrop.decode(A, A.uint32());
              break;
            }
            case 10: {
              a.identifierForVendor = A.string();
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
          let o = c.dot.v4.IosCamera.verify(A.camera);
          if (o)
            return "camera." + o;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let o = c.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
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
            let r = c.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[o]);
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
          let o = c.dot.v4.IosYuv420Image.verify(A.croppedYuv420Image);
          if (o)
            return "croppedYuv420Image." + o;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let o = c.dot.v4.IosYuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (o)
            return "yuv420ImageCrop." + o;
        }
        return A.identifierForVendor != null && A.hasOwnProperty("identifierForVendor") && !d.isString(A.identifierForVendor) ? "identifierForVendor: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.IosMetadata)
          return A;
        let o = new c.dot.v4.IosMetadata();
        if (A.cameraModelId != null && (o.cameraModelId = String(A.cameraModelId)), A.architectureInfo) {
          if (typeof A.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          o.architectureInfo = {};
          for (let r = Object.keys(A.architectureInfo), g = 0; g < r.length; ++g)
            o.architectureInfo[r[g]] = !!A.architectureInfo[r[g]];
        }
        if (A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.IosMetadata.camera: object expected");
          o.camera = c.dot.v4.IosCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.IosMetadata.detectionNormalizedRectangle: object expected");
          o.detectionNormalizedRectangle = c.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
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
            o.digestsWithTimestamp[r] = c.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
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
          o.croppedYuv420Image = c.dot.v4.IosYuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.IosMetadata.yuv420ImageCrop: object expected");
          o.yuv420ImageCrop = c.dot.v4.IosYuv420ImageCrop.fromObject(A.yuv420ImageCrop);
        }
        return A.identifierForVendor != null && (o.identifierForVendor = String(A.identifierForVendor)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        (o.arrays || o.defaults) && (r.digests = [], r.isoValues = [], r.digestsWithTimestamp = []), (o.objects || o.defaults) && (r.architectureInfo = {}), o.defaults && (r.cameraModelId = ""), A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && (r.cameraModelId = A.cameraModelId);
        let g;
        if (A.architectureInfo && (g = Object.keys(A.architectureInfo)).length) {
          r.architectureInfo = {};
          for (let a = 0; a < g.length; ++a)
            r.architectureInfo[g[a]] = A.architectureInfo[g[a]];
        }
        if (A.digests && A.digests.length) {
          r.digests = [];
          for (let a = 0; a < A.digests.length; ++a)
            r.digests[a] = o.bytes === String ? d.base64.encode(A.digests[a], 0, A.digests[a].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
        }
        if (A.isoValues && A.isoValues.length) {
          r.isoValues = [];
          for (let a = 0; a < A.isoValues.length; ++a)
            r.isoValues[a] = A.isoValues[a];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            r.digestsWithTimestamp[a] = c.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = c.dot.v4.IosCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = c.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = c.dot.v4.IosYuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = c.dot.v4.IosYuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), A.identifierForVendor != null && A.hasOwnProperty("identifierForVendor") && (r.identifierForVendor = A.identifierForVendor, o.oneofs && (r._identifierForVendor = "identifierForVendor")), r;
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
        return A || (A = G.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && c.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.IosCamera();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.resolution = c.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.rotationDegrees = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = c.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !d.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.IosCamera)
          return e;
        let A = new c.dot.v4.IosCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.IosCamera.resolution: object expected");
          A.resolution = c.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.resolution = null, o.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (o.resolution = c.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (o.rotationDegrees = e.rotationDegrees), o;
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
        return A || (A = G.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && c.dot.ImageSize.encode(e.size, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.IosYuv420Image();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.size = c.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.yPlane = e.bytes();
              break;
            }
            case 3: {
              g.uvPlane = e.bytes();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = c.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || d.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uvPlane != null && e.hasOwnProperty("uvPlane") && !(e.uvPlane && typeof e.uvPlane.length == "number" || d.isString(e.uvPlane)) ? "uvPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.IosYuv420Image)
          return e;
        let A = new c.dot.v4.IosYuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.IosYuv420Image.size: object expected");
          A.size = c.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? d.base64.decode(e.yPlane, A.yPlane = d.newBuffer(d.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uvPlane != null && (typeof e.uvPlane == "string" ? d.base64.decode(e.uvPlane, A.uvPlane = d.newBuffer(d.base64.length(e.uvPlane)), 0) : e.uvPlane.length >= 0 && (A.uvPlane = e.uvPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = d.newBuffer(o.yPlane))), A.bytes === String ? o.uvPlane = "" : (o.uvPlane = [], A.bytes !== Array && (o.uvPlane = d.newBuffer(o.uvPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = c.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? d.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uvPlane != null && e.hasOwnProperty("uvPlane") && (o.uvPlane = A.bytes === String ? d.base64.encode(e.uvPlane, 0, e.uvPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uvPlane) : e.uvPlane), o;
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
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.v4.IosYuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && c.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.IosYuv420ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = c.dot.v4.IosYuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = c.dot.PointInt.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = c.dot.v4.IosYuv420Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = c.dot.PointInt.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.IosYuv420ImageCrop)
          return e;
        let A = new c.dot.v4.IosYuv420ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.IosYuv420ImageCrop.image: object expected");
          A.image = c.dot.v4.IosYuv420Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.IosYuv420ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = c.dot.PointInt.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = c.dot.v4.IosYuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = c.dot.PointInt.toObject(e.topLeftCorner, A)), o;
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
        if (o || (o = G.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && c.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let r = 0; r < A.availableCameraProperties.length; ++r)
            c.dot.v4.CameraProperties.encode(A.availableCameraProperties[r], o.uint32(
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
            c.dot.v4.DetectedObject.encode(A.detectionRecord[r], o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < A.hashedDetectedImagesWithTimestamp.length; ++r)
            c.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.croppedImage != null && Object.hasOwnProperty.call(A, "croppedImage") && c.dot.Image.encode(A.croppedImage, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.croppedImageWithPosition != null && Object.hasOwnProperty.call(A, "croppedImageWithPosition") && c.dot.v4.ImageCrop.encode(A.croppedImageWithPosition, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.platformDetails != null && Object.hasOwnProperty.call(A, "platformDetails") && c.dot.v4.PlatformDetails.encode(A.platformDetails, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.WebMetadata();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.currentCameraProperties = c.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.availableCameraProperties && a.availableCameraProperties.length || (a.availableCameraProperties = []), a.availableCameraProperties.push(c.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              a.hashedDetectedImages && a.hashedDetectedImages.length || (a.hashedDetectedImages = []), a.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              a.hashedDetectedImagesWithTimestamp && a.hashedDetectedImagesWithTimestamp.length || (a.hashedDetectedImagesWithTimestamp = []), a.hashedDetectedImagesWithTimestamp.push(c.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.detectionRecord && a.detectionRecord.length || (a.detectionRecord = []), a.detectionRecord.push(c.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              a.croppedImage = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.croppedImageWithPosition = c.dot.v4.ImageCrop.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.platformDetails = c.dot.v4.PlatformDetails.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties")) {
          let o = c.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (o)
            return "currentCameraProperties." + o;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let o = 0; o < A.availableCameraProperties.length; ++o) {
            let r = c.dot.v4.CameraProperties.verify(A.availableCameraProperties[o]);
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
            let r = c.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[o]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let o = 0; o < A.detectionRecord.length; ++o) {
            let r = c.dot.v4.DetectedObject.verify(A.detectionRecord[o]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        if (A.croppedImage != null && A.hasOwnProperty("croppedImage")) {
          let o = c.dot.Image.verify(A.croppedImage);
          if (o)
            return "croppedImage." + o;
        }
        if (A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition")) {
          let o = c.dot.v4.ImageCrop.verify(A.croppedImageWithPosition);
          if (o)
            return "croppedImageWithPosition." + o;
        }
        if (A.platformDetails != null && A.hasOwnProperty("platformDetails")) {
          let o = c.dot.v4.PlatformDetails.verify(A.platformDetails);
          if (o)
            return "platformDetails." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.WebMetadata)
          return A;
        let o = new c.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          o.currentCameraProperties = c.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          o.availableCameraProperties = [];
          for (let r = 0; r < A.availableCameraProperties.length; ++r) {
            if (typeof A.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            o.availableCameraProperties[r] = c.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[r]);
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
            o.hashedDetectedImagesWithTimestamp[r] = c.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          o.detectionRecord = [];
          for (let r = 0; r < A.detectionRecord.length; ++r) {
            if (typeof A.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            o.detectionRecord[r] = c.dot.v4.DetectedObject.fromObject(A.detectionRecord[r]);
          }
        }
        if (A.croppedImage != null) {
          if (typeof A.croppedImage != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImage: object expected");
          o.croppedImage = c.dot.Image.fromObject(A.croppedImage);
        }
        if (A.croppedImageWithPosition != null) {
          if (typeof A.croppedImageWithPosition != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImageWithPosition: object expected");
          o.croppedImageWithPosition = c.dot.v4.ImageCrop.fromObject(A.croppedImageWithPosition);
        }
        if (A.platformDetails != null) {
          if (typeof A.platformDetails != "object")
            throw TypeError(".dot.v4.WebMetadata.platformDetails: object expected");
          o.platformDetails = c.dot.v4.PlatformDetails.fromObject(A.platformDetails);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), o.defaults && (r.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = c.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, o)), A.availableCameraProperties && A.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let g = 0; g < A.availableCameraProperties.length; ++g)
            r.availableCameraProperties[g] = c.dot.v4.CameraProperties.toObject(A.availableCameraProperties[g], o);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let g = 0; g < A.hashedDetectedImages.length; ++g)
            r.hashedDetectedImages[g] = A.hashedDetectedImages[g];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          r.detectionRecord = [];
          for (let g = 0; g < A.detectionRecord.length; ++g)
            r.detectionRecord[g] = c.dot.v4.DetectedObject.toObject(A.detectionRecord[g], o);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let g = 0; g < A.hashedDetectedImagesWithTimestamp.length; ++g)
            r.hashedDetectedImagesWithTimestamp[g] = c.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[g], o);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (r.croppedImage = c.dot.Image.toObject(A.croppedImage, o), o.oneofs && (r._croppedImage = "croppedImage")), A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition") && (r.croppedImageWithPosition = c.dot.v4.ImageCrop.toObject(A.croppedImageWithPosition, o), o.oneofs && (r._croppedImageWithPosition = "croppedImageWithPosition")), A.platformDetails != null && A.hasOwnProperty("platformDetails") && (r.platformDetails = c.dot.v4.PlatformDetails.toObject(A.platformDetails, o), o.oneofs && (r._platformDetails = "platformDetails")), r;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.imageHash = e.string();
              break;
            }
            case 2: {
              g.timestampMillis = e.uint64();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !d.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !d.isInteger(e.timestampMillis) && !(e.timestampMillis && d.isInteger(e.timestampMillis.low) && d.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new c.dot.v4.HashedDetectedImageWithTimestamp();
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
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.MediaTrackSettings();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.aspectRatio = A.double();
              break;
            }
            case 2: {
              a.autoGainControl = A.bool();
              break;
            }
            case 3: {
              a.channelCount = A.int32();
              break;
            }
            case 4: {
              a.deviceId = A.string();
              break;
            }
            case 5: {
              a.displaySurface = A.string();
              break;
            }
            case 6: {
              a.echoCancellation = A.bool();
              break;
            }
            case 7: {
              a.facingMode = A.string();
              break;
            }
            case 8: {
              a.frameRate = A.double();
              break;
            }
            case 9: {
              a.groupId = A.string();
              break;
            }
            case 10: {
              a.height = A.int32();
              break;
            }
            case 11: {
              a.noiseSuppression = A.bool();
              break;
            }
            case 12: {
              a.sampleRate = A.int32();
              break;
            }
            case 13: {
              a.sampleSize = A.int32();
              break;
            }
            case 14: {
              a.width = A.int32();
              break;
            }
            case 15: {
              a.deviceName = A.string();
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !d.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !d.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !d.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !d.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !d.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !d.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !d.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !d.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !d.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !d.isString(A.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.MediaTrackSettings)
          return A;
        let o = new c.dot.v4.MediaTrackSettings();
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
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.ImageBitmap();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.width = e.int32();
              break;
            }
            case 2: {
              g.height = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !d.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !d.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.ImageBitmap)
          return e;
        let A = new c.dot.v4.ImageBitmap();
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
        return o || (o = G.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && c.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && c.dot.v4.MediaTrackSettings.encode(A.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.CameraProperties();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = c.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = c.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution")) {
          let o = c.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (o)
            return "cameraInitFrameResolution." + o;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let o = c.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (o)
            return "cameraProperties." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.CameraProperties)
          return A;
        let o = new c.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          o.cameraInitFrameResolution = c.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          o.cameraProperties = c.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (r.cameraInitFrameResolution = c.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, o), o.oneofs && (r._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (r.cameraProperties = c.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, o)), r;
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && c.dot.v4.Point.encode(e.faceCenter, A.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && A.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && c.dot.v4.Point.encode(e.bottomLeft, A.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && c.dot.v4.Point.encode(e.bottomRight, A.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && c.dot.v4.Point.encode(e.topLeft, A.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && c.dot.v4.Point.encode(e.topRight, A.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.DetectedObject();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.brightness = e.float();
              break;
            }
            case 2: {
              g.sharpness = e.float();
              break;
            }
            case 3: {
              g.hotspots = e.float();
              break;
            }
            case 4: {
              g.confidence = e.float();
              break;
            }
            case 5: {
              g.faceSize = e.float();
              break;
            }
            case 6: {
              g.faceCenter = c.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              g.smallestEdge = e.float();
              break;
            }
            case 8: {
              g.bottomLeft = c.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              g.bottomRight = c.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              g.topLeft = c.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              g.topRight = c.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
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
          let A = c.dot.v4.Point.verify(e.faceCenter);
          if (A)
            return "faceCenter." + A;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let A = c.dot.v4.Point.verify(e.bottomLeft);
          if (A)
            return "bottomLeft." + A;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let A = c.dot.v4.Point.verify(e.bottomRight);
          if (A)
            return "bottomRight." + A;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let A = c.dot.v4.Point.verify(e.topLeft);
          if (A)
            return "topLeft." + A;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let A = c.dot.v4.Point.verify(e.topRight);
          if (A)
            return "topRight." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.DetectedObject)
          return e;
        let A = new c.dot.v4.DetectedObject();
        if (e.brightness != null && (A.brightness = Number(e.brightness)), e.sharpness != null && (A.sharpness = Number(e.sharpness)), e.hotspots != null && (A.hotspots = Number(e.hotspots)), e.confidence != null && (A.confidence = Number(e.confidence)), e.faceSize != null && (A.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          A.faceCenter = c.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (A.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          A.bottomLeft = c.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          A.bottomRight = c.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          A.topLeft = c.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          A.topRight = c.dot.v4.Point.fromObject(e.topRight);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.brightness = 0, o.sharpness = 0, o.hotspots = 0, o.confidence = 0, o.faceSize = 0, o.faceCenter = null, o.smallestEdge = 0, o.bottomLeft = null, o.bottomRight = null, o.topLeft = null, o.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (o.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (o.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (o.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (o.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (o.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (o.faceCenter = c.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (o.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (o.bottomLeft = c.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (o.bottomRight = c.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (o.topLeft = c.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (o.topRight = c.dot.v4.Point.toObject(e.topRight, A)), o;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.Point();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.x = e.float();
              break;
            }
            case 2: {
              g.y = e.float();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.x != null && e.hasOwnProperty("x") && typeof e.x != "number" ? "x: number expected" : e.y != null && e.hasOwnProperty("y") && typeof e.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.Point)
          return e;
        let A = new c.dot.v4.Point();
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
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && c.dot.v4.Point.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = c.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = c.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = c.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = c.dot.v4.Point.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.ImageCrop)
          return e;
        let A = new c.dot.v4.ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.ImageCrop.image: object expected");
          A.image = c.dot.Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = c.dot.v4.Point.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = c.dot.Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = c.dot.v4.Point.toObject(e.topLeftCorner, A)), o;
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
            c.dot.v4.BrowserVersion.encode(A.browserVersions[r], o.uint32(
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
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.PlatformDetails();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.userAgent = A.string();
              break;
            }
            case 2: {
              a.platform = A.string();
              break;
            }
            case 3: {
              a.platformVersion = A.string();
              break;
            }
            case 4: {
              a.architecture = A.string();
              break;
            }
            case 5: {
              a.model = A.string();
              break;
            }
            case 6: {
              a.browserVersions && a.browserVersions.length || (a.browserVersions = []), a.browserVersions.push(c.dot.v4.BrowserVersion.decode(A, A.uint32()));
              break;
            }
            case 7: {
              a.installationId = A.string();
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
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
            let r = c.dot.v4.BrowserVersion.verify(A.browserVersions[o]);
            if (r)
              return "browserVersions." + r;
          }
        }
        return A.installationId != null && A.hasOwnProperty("installationId") && !d.isString(A.installationId) ? "installationId: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.PlatformDetails)
          return A;
        let o = new c.dot.v4.PlatformDetails();
        if (A.userAgent != null && (o.userAgent = String(A.userAgent)), A.platform != null && (o.platform = String(A.platform)), A.platformVersion != null && (o.platformVersion = String(A.platformVersion)), A.architecture != null && (o.architecture = String(A.architecture)), A.model != null && (o.model = String(A.model)), A.browserVersions) {
          if (!Array.isArray(A.browserVersions))
            throw TypeError(".dot.v4.PlatformDetails.browserVersions: array expected");
          o.browserVersions = [];
          for (let r = 0; r < A.browserVersions.length; ++r) {
            if (typeof A.browserVersions[r] != "object")
              throw TypeError(".dot.v4.PlatformDetails.browserVersions: object expected");
            o.browserVersions[r] = c.dot.v4.BrowserVersion.fromObject(A.browserVersions[r]);
          }
        }
        return A.installationId != null && (o.installationId = String(A.installationId)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.browserVersions = []), o.defaults && (r.userAgent = ""), A.userAgent != null && A.hasOwnProperty("userAgent") && (r.userAgent = A.userAgent), A.platform != null && A.hasOwnProperty("platform") && (r.platform = A.platform, o.oneofs && (r._platform = "platform")), A.platformVersion != null && A.hasOwnProperty("platformVersion") && (r.platformVersion = A.platformVersion, o.oneofs && (r._platformVersion = "platformVersion")), A.architecture != null && A.hasOwnProperty("architecture") && (r.architecture = A.architecture, o.oneofs && (r._architecture = "architecture")), A.model != null && A.hasOwnProperty("model") && (r.model = A.model, o.oneofs && (r._model = "model")), A.browserVersions && A.browserVersions.length) {
          r.browserVersions = [];
          for (let g = 0; g < A.browserVersions.length; ++g)
            r.browserVersions[g] = c.dot.v4.BrowserVersion.toObject(A.browserVersions[g], o);
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
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.BrowserVersion();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.name = e.string();
              break;
            }
            case 2: {
              g.version = e.string();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.name != null && e.hasOwnProperty("name") && !d.isString(e.name) ? "name: string expected" : e.version != null && e.hasOwnProperty("version") && !d.isString(e.version) ? "version: string expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.BrowserVersion)
          return e;
        let A = new c.dot.v4.BrowserVersion();
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
        return o || (o = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && c.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.FaceContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = c.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = c.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = c.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.FaceContent)
          return A;
        let o = new c.dot.v4.FaceContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          o.image = c.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.FaceContent.video: object expected");
          o.video = c.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          o.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = c.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = c.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = c.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        return o || (o = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && c.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.DocumentContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = c.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = c.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = c.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.DocumentContent)
          return A;
        let o = new c.dot.v4.DocumentContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          o.image = c.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.DocumentContent.video: object expected");
          o.video = c.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          o.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = c.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = c.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = c.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        return o || (o = G.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && c.dot.v4.DocumentContent.encode(A.documentContent, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && c.dot.v4.FaceContent.encode(A.faceContent, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && c.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && c.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && c.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && c.dot.v4.PalmContent.encode(A.palmContent, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.travelDocumentContent != null && Object.hasOwnProperty.call(A, "travelDocumentContent") && c.dot.v4.TravelDocumentContent.encode(A.travelDocumentContent, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.multiRangeLivenessContent != null && Object.hasOwnProperty.call(A, "multiRangeLivenessContent") && c.dot.v4.MultiRangeLivenessContent.encode(A.multiRangeLivenessContent, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.Blob();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.documentContent = c.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.eyeGazeLivenessContent = c.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.faceContent = c.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.magnifeyeLivenessContent = c.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.smileLivenessContent = c.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.palmContent = c.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.travelDocumentContent = c.dot.v4.TravelDocumentContent.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.multiRangeLivenessContent = c.dot.v4.MultiRangeLivenessContent.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let o = {};
        if (A.documentContent != null && A.hasOwnProperty("documentContent")) {
          o.blob = 1;
          {
            let r = c.dot.v4.DocumentContent.verify(A.documentContent);
            if (r)
              return "documentContent." + r;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = c.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (r)
              return "eyeGazeLivenessContent." + r;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = c.dot.v4.FaceContent.verify(A.faceContent);
            if (r)
              return "faceContent." + r;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = c.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (r)
              return "magnifeyeLivenessContent." + r;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = c.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (r)
              return "smileLivenessContent." + r;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = c.dot.v4.PalmContent.verify(A.palmContent);
            if (r)
              return "palmContent." + r;
          }
        }
        if (A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = c.dot.v4.TravelDocumentContent.verify(A.travelDocumentContent);
            if (r)
              return "travelDocumentContent." + r;
          }
        }
        if (A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = c.dot.v4.MultiRangeLivenessContent.verify(A.multiRangeLivenessContent);
            if (r)
              return "multiRangeLivenessContent." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.Blob)
          return A;
        let o = new c.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          o.documentContent = c.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          o.eyeGazeLivenessContent = c.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          o.faceContent = c.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          o.magnifeyeLivenessContent = c.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          o.smileLivenessContent = c.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          o.palmContent = c.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        if (A.travelDocumentContent != null) {
          if (typeof A.travelDocumentContent != "object")
            throw TypeError(".dot.v4.Blob.travelDocumentContent: object expected");
          o.travelDocumentContent = c.dot.v4.TravelDocumentContent.fromObject(A.travelDocumentContent);
        }
        if (A.multiRangeLivenessContent != null) {
          if (typeof A.multiRangeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.multiRangeLivenessContent: object expected");
          o.multiRangeLivenessContent = c.dot.v4.MultiRangeLivenessContent.fromObject(A.multiRangeLivenessContent);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (r.documentContent = c.dot.v4.DocumentContent.toObject(A.documentContent, o), o.oneofs && (r.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (r.faceContent = c.dot.v4.FaceContent.toObject(A.faceContent, o), o.oneofs && (r.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (r.magnifeyeLivenessContent = c.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, o), o.oneofs && (r.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (r.smileLivenessContent = c.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, o), o.oneofs && (r.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (r.eyeGazeLivenessContent = c.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, o), o.oneofs && (r.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (r.palmContent = c.dot.v4.PalmContent.toObject(A.palmContent, o), o.oneofs && (r.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (r.travelDocumentContent = c.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, o), o.oneofs && (r.blob = "travelDocumentContent")), A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent") && (r.multiRangeLivenessContent = c.dot.v4.MultiRangeLivenessContent.toObject(A.multiRangeLivenessContent, o), o.oneofs && (r.blob = "multiRangeLivenessContent")), r;
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
        return A || (A = G.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && c.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.accessControlProtocolUsed != null && Object.hasOwnProperty.call(e, "accessControlProtocolUsed") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.accessControlProtocolUsed), e.authenticationStatus != null && Object.hasOwnProperty.call(e, "authenticationStatus") && c.dot.v4.AuthenticationStatus.encode(e.authenticationStatus, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && c.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.TravelDocumentContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.ldsMasterFile = c.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              g.authenticationStatus = c.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              g.metadata = c.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile")) {
          let A = c.dot.v4.LdsMasterFile.verify(e.ldsMasterFile);
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
          let A = c.dot.v4.AuthenticationStatus.verify(e.authenticationStatus);
          if (A)
            return "authenticationStatus." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = c.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.TravelDocumentContent)
          return e;
        let A = new c.dot.v4.TravelDocumentContent();
        if (e.ldsMasterFile != null) {
          if (typeof e.ldsMasterFile != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.ldsMasterFile: object expected");
          A.ldsMasterFile = c.dot.v4.LdsMasterFile.fromObject(e.ldsMasterFile);
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
          A.authenticationStatus = c.dot.v4.AuthenticationStatus.fromObject(e.authenticationStatus);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.metadata: object expected");
          A.metadata = c.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.ldsMasterFile = null, o.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, o.authenticationStatus = null, o.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (o.ldsMasterFile = c.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (o.accessControlProtocolUsed = A.enums === String ? c.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : c.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (o.authenticationStatus = c.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(e.metadata, A)), o;
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
        return A || (A = G.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && c.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.LdsMasterFile();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          a >>> 3 === 1 ? g.lds1eMrtdApplication = c.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32()) : e.skipType(a & 7);
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication")) {
          let A = c.dot.v4.Lds1eMrtdApplication.verify(e.lds1eMrtdApplication);
          if (A)
            return "lds1eMrtdApplication." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.LdsMasterFile)
          return e;
        let A = new c.dot.v4.LdsMasterFile();
        if (e.lds1eMrtdApplication != null) {
          if (typeof e.lds1eMrtdApplication != "object")
            throw TypeError(".dot.v4.LdsMasterFile.lds1eMrtdApplication: object expected");
          A.lds1eMrtdApplication = c.dot.v4.Lds1eMrtdApplication.fromObject(e.lds1eMrtdApplication);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (o.lds1eMrtdApplication = c.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), o;
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
        return o || (o = G.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && c.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.sodDocumentSecurityObject != null && Object.hasOwnProperty.call(A, "sodDocumentSecurityObject") && c.dot.v4.Lds1ElementaryFile.encode(A.sodDocumentSecurityObject, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.dg1MachineReadableZoneInformation != null && Object.hasOwnProperty.call(A, "dg1MachineReadableZoneInformation") && c.dot.v4.Lds1ElementaryFile.encode(A.dg1MachineReadableZoneInformation, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.dg2EncodedIdentificationFeaturesFace != null && Object.hasOwnProperty.call(A, "dg2EncodedIdentificationFeaturesFace") && c.dot.v4.Lds1ElementaryFile.encode(A.dg2EncodedIdentificationFeaturesFace, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.dg3AdditionalIdentificationFeatureFingers != null && Object.hasOwnProperty.call(A, "dg3AdditionalIdentificationFeatureFingers") && c.dot.v4.Lds1ElementaryFile.encode(A.dg3AdditionalIdentificationFeatureFingers, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.dg4AdditionalIdentificationFeatureIrises != null && Object.hasOwnProperty.call(A, "dg4AdditionalIdentificationFeatureIrises") && c.dot.v4.Lds1ElementaryFile.encode(A.dg4AdditionalIdentificationFeatureIrises, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.dg5DisplayedPortrait != null && Object.hasOwnProperty.call(A, "dg5DisplayedPortrait") && c.dot.v4.Lds1ElementaryFile.encode(A.dg5DisplayedPortrait, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.dg7DisplayedSignatureOrUsualMark != null && Object.hasOwnProperty.call(A, "dg7DisplayedSignatureOrUsualMark") && c.dot.v4.Lds1ElementaryFile.encode(A.dg7DisplayedSignatureOrUsualMark, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.dg8DataFeatures != null && Object.hasOwnProperty.call(A, "dg8DataFeatures") && c.dot.v4.Lds1ElementaryFile.encode(A.dg8DataFeatures, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.dg9StructureFeatures != null && Object.hasOwnProperty.call(A, "dg9StructureFeatures") && c.dot.v4.Lds1ElementaryFile.encode(A.dg9StructureFeatures, o.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.dg10SubstanceFeatures != null && Object.hasOwnProperty.call(A, "dg10SubstanceFeatures") && c.dot.v4.Lds1ElementaryFile.encode(A.dg10SubstanceFeatures, o.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A.dg11AdditionalPersonalDetails != null && Object.hasOwnProperty.call(A, "dg11AdditionalPersonalDetails") && c.dot.v4.Lds1ElementaryFile.encode(A.dg11AdditionalPersonalDetails, o.uint32(
          /* id 12, wireType 2 =*/
          98
        ).fork()).ldelim(), A.dg12AdditionalDocumentDetails != null && Object.hasOwnProperty.call(A, "dg12AdditionalDocumentDetails") && c.dot.v4.Lds1ElementaryFile.encode(A.dg12AdditionalDocumentDetails, o.uint32(
          /* id 13, wireType 2 =*/
          106
        ).fork()).ldelim(), A.dg13OptionalDetails != null && Object.hasOwnProperty.call(A, "dg13OptionalDetails") && c.dot.v4.Lds1ElementaryFile.encode(A.dg13OptionalDetails, o.uint32(
          /* id 14, wireType 2 =*/
          114
        ).fork()).ldelim(), A.dg14SecurityOptions != null && Object.hasOwnProperty.call(A, "dg14SecurityOptions") && c.dot.v4.Lds1ElementaryFile.encode(A.dg14SecurityOptions, o.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim(), A.dg15ActiveAuthenticationPublicKeyInfo != null && Object.hasOwnProperty.call(A, "dg15ActiveAuthenticationPublicKeyInfo") && c.dot.v4.Lds1ElementaryFile.encode(A.dg15ActiveAuthenticationPublicKeyInfo, o.uint32(
          /* id 16, wireType 2 =*/
          130
        ).fork()).ldelim(), A.dg16PersonsToNotify != null && Object.hasOwnProperty.call(A, "dg16PersonsToNotify") && c.dot.v4.Lds1ElementaryFile.encode(A.dg16PersonsToNotify, o.uint32(
          /* id 17, wireType 2 =*/
          138
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.comHeaderAndDataGroupPresenceInformation = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.sodDocumentSecurityObject = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.dg1MachineReadableZoneInformation = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.dg2EncodedIdentificationFeaturesFace = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.dg3AdditionalIdentificationFeatureFingers = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.dg4AdditionalIdentificationFeatureIrises = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.dg5DisplayedPortrait = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.dg7DisplayedSignatureOrUsualMark = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              a.dg8DataFeatures = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              a.dg9StructureFeatures = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              a.dg10SubstanceFeatures = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              a.dg11AdditionalPersonalDetails = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              a.dg12AdditionalDocumentDetails = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              a.dg13OptionalDetails = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              a.dg14SecurityOptions = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              a.dg15ActiveAuthenticationPublicKeyInfo = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              a.dg16PersonsToNotify = c.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.comHeaderAndDataGroupPresenceInformation);
          if (o)
            return "comHeaderAndDataGroupPresenceInformation." + o;
        }
        if (A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.sodDocumentSecurityObject);
          if (o)
            return "sodDocumentSecurityObject." + o;
        }
        if (A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg1MachineReadableZoneInformation);
          if (o)
            return "dg1MachineReadableZoneInformation." + o;
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg2EncodedIdentificationFeaturesFace);
          if (o)
            return "dg2EncodedIdentificationFeaturesFace." + o;
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg3AdditionalIdentificationFeatureFingers);
          if (o)
            return "dg3AdditionalIdentificationFeatureFingers." + o;
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg4AdditionalIdentificationFeatureIrises);
          if (o)
            return "dg4AdditionalIdentificationFeatureIrises." + o;
        }
        if (A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg5DisplayedPortrait);
          if (o)
            return "dg5DisplayedPortrait." + o;
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg7DisplayedSignatureOrUsualMark);
          if (o)
            return "dg7DisplayedSignatureOrUsualMark." + o;
        }
        if (A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg8DataFeatures);
          if (o)
            return "dg8DataFeatures." + o;
        }
        if (A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg9StructureFeatures);
          if (o)
            return "dg9StructureFeatures." + o;
        }
        if (A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg10SubstanceFeatures);
          if (o)
            return "dg10SubstanceFeatures." + o;
        }
        if (A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg11AdditionalPersonalDetails);
          if (o)
            return "dg11AdditionalPersonalDetails." + o;
        }
        if (A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg12AdditionalDocumentDetails);
          if (o)
            return "dg12AdditionalDocumentDetails." + o;
        }
        if (A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg13OptionalDetails);
          if (o)
            return "dg13OptionalDetails." + o;
        }
        if (A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg14SecurityOptions);
          if (o)
            return "dg14SecurityOptions." + o;
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg15ActiveAuthenticationPublicKeyInfo);
          if (o)
            return "dg15ActiveAuthenticationPublicKeyInfo." + o;
        }
        if (A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify")) {
          let o = c.dot.v4.Lds1ElementaryFile.verify(A.dg16PersonsToNotify);
          if (o)
            return "dg16PersonsToNotify." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.Lds1eMrtdApplication)
          return A;
        let o = new c.dot.v4.Lds1eMrtdApplication();
        if (A.comHeaderAndDataGroupPresenceInformation != null) {
          if (typeof A.comHeaderAndDataGroupPresenceInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.comHeaderAndDataGroupPresenceInformation: object expected");
          o.comHeaderAndDataGroupPresenceInformation = c.dot.v4.Lds1ElementaryFile.fromObject(A.comHeaderAndDataGroupPresenceInformation);
        }
        if (A.sodDocumentSecurityObject != null) {
          if (typeof A.sodDocumentSecurityObject != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.sodDocumentSecurityObject: object expected");
          o.sodDocumentSecurityObject = c.dot.v4.Lds1ElementaryFile.fromObject(A.sodDocumentSecurityObject);
        }
        if (A.dg1MachineReadableZoneInformation != null) {
          if (typeof A.dg1MachineReadableZoneInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg1MachineReadableZoneInformation: object expected");
          o.dg1MachineReadableZoneInformation = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg1MachineReadableZoneInformation);
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null) {
          if (typeof A.dg2EncodedIdentificationFeaturesFace != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg2EncodedIdentificationFeaturesFace: object expected");
          o.dg2EncodedIdentificationFeaturesFace = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg2EncodedIdentificationFeaturesFace);
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null) {
          if (typeof A.dg3AdditionalIdentificationFeatureFingers != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg3AdditionalIdentificationFeatureFingers: object expected");
          o.dg3AdditionalIdentificationFeatureFingers = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg3AdditionalIdentificationFeatureFingers);
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null) {
          if (typeof A.dg4AdditionalIdentificationFeatureIrises != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg4AdditionalIdentificationFeatureIrises: object expected");
          o.dg4AdditionalIdentificationFeatureIrises = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg4AdditionalIdentificationFeatureIrises);
        }
        if (A.dg5DisplayedPortrait != null) {
          if (typeof A.dg5DisplayedPortrait != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg5DisplayedPortrait: object expected");
          o.dg5DisplayedPortrait = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg5DisplayedPortrait);
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null) {
          if (typeof A.dg7DisplayedSignatureOrUsualMark != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg7DisplayedSignatureOrUsualMark: object expected");
          o.dg7DisplayedSignatureOrUsualMark = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg7DisplayedSignatureOrUsualMark);
        }
        if (A.dg8DataFeatures != null) {
          if (typeof A.dg8DataFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg8DataFeatures: object expected");
          o.dg8DataFeatures = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg8DataFeatures);
        }
        if (A.dg9StructureFeatures != null) {
          if (typeof A.dg9StructureFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg9StructureFeatures: object expected");
          o.dg9StructureFeatures = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg9StructureFeatures);
        }
        if (A.dg10SubstanceFeatures != null) {
          if (typeof A.dg10SubstanceFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg10SubstanceFeatures: object expected");
          o.dg10SubstanceFeatures = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg10SubstanceFeatures);
        }
        if (A.dg11AdditionalPersonalDetails != null) {
          if (typeof A.dg11AdditionalPersonalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg11AdditionalPersonalDetails: object expected");
          o.dg11AdditionalPersonalDetails = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg11AdditionalPersonalDetails);
        }
        if (A.dg12AdditionalDocumentDetails != null) {
          if (typeof A.dg12AdditionalDocumentDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg12AdditionalDocumentDetails: object expected");
          o.dg12AdditionalDocumentDetails = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg12AdditionalDocumentDetails);
        }
        if (A.dg13OptionalDetails != null) {
          if (typeof A.dg13OptionalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg13OptionalDetails: object expected");
          o.dg13OptionalDetails = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg13OptionalDetails);
        }
        if (A.dg14SecurityOptions != null) {
          if (typeof A.dg14SecurityOptions != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg14SecurityOptions: object expected");
          o.dg14SecurityOptions = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg14SecurityOptions);
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null) {
          if (typeof A.dg15ActiveAuthenticationPublicKeyInfo != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg15ActiveAuthenticationPublicKeyInfo: object expected");
          o.dg15ActiveAuthenticationPublicKeyInfo = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg15ActiveAuthenticationPublicKeyInfo);
        }
        if (A.dg16PersonsToNotify != null) {
          if (typeof A.dg16PersonsToNotify != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg16PersonsToNotify: object expected");
          o.dg16PersonsToNotify = c.dot.v4.Lds1ElementaryFile.fromObject(A.dg16PersonsToNotify);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.comHeaderAndDataGroupPresenceInformation = null, r.sodDocumentSecurityObject = null, r.dg1MachineReadableZoneInformation = null, r.dg2EncodedIdentificationFeaturesFace = null), A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation") && (r.comHeaderAndDataGroupPresenceInformation = c.dot.v4.Lds1ElementaryFile.toObject(A.comHeaderAndDataGroupPresenceInformation, o)), A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject") && (r.sodDocumentSecurityObject = c.dot.v4.Lds1ElementaryFile.toObject(A.sodDocumentSecurityObject, o)), A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation") && (r.dg1MachineReadableZoneInformation = c.dot.v4.Lds1ElementaryFile.toObject(A.dg1MachineReadableZoneInformation, o)), A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace") && (r.dg2EncodedIdentificationFeaturesFace = c.dot.v4.Lds1ElementaryFile.toObject(A.dg2EncodedIdentificationFeaturesFace, o)), A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers") && (r.dg3AdditionalIdentificationFeatureFingers = c.dot.v4.Lds1ElementaryFile.toObject(A.dg3AdditionalIdentificationFeatureFingers, o), o.oneofs && (r._dg3AdditionalIdentificationFeatureFingers = "dg3AdditionalIdentificationFeatureFingers")), A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises") && (r.dg4AdditionalIdentificationFeatureIrises = c.dot.v4.Lds1ElementaryFile.toObject(A.dg4AdditionalIdentificationFeatureIrises, o), o.oneofs && (r._dg4AdditionalIdentificationFeatureIrises = "dg4AdditionalIdentificationFeatureIrises")), A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait") && (r.dg5DisplayedPortrait = c.dot.v4.Lds1ElementaryFile.toObject(A.dg5DisplayedPortrait, o), o.oneofs && (r._dg5DisplayedPortrait = "dg5DisplayedPortrait")), A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark") && (r.dg7DisplayedSignatureOrUsualMark = c.dot.v4.Lds1ElementaryFile.toObject(A.dg7DisplayedSignatureOrUsualMark, o), o.oneofs && (r._dg7DisplayedSignatureOrUsualMark = "dg7DisplayedSignatureOrUsualMark")), A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures") && (r.dg8DataFeatures = c.dot.v4.Lds1ElementaryFile.toObject(A.dg8DataFeatures, o), o.oneofs && (r._dg8DataFeatures = "dg8DataFeatures")), A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures") && (r.dg9StructureFeatures = c.dot.v4.Lds1ElementaryFile.toObject(A.dg9StructureFeatures, o), o.oneofs && (r._dg9StructureFeatures = "dg9StructureFeatures")), A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures") && (r.dg10SubstanceFeatures = c.dot.v4.Lds1ElementaryFile.toObject(A.dg10SubstanceFeatures, o), o.oneofs && (r._dg10SubstanceFeatures = "dg10SubstanceFeatures")), A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails") && (r.dg11AdditionalPersonalDetails = c.dot.v4.Lds1ElementaryFile.toObject(A.dg11AdditionalPersonalDetails, o), o.oneofs && (r._dg11AdditionalPersonalDetails = "dg11AdditionalPersonalDetails")), A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails") && (r.dg12AdditionalDocumentDetails = c.dot.v4.Lds1ElementaryFile.toObject(A.dg12AdditionalDocumentDetails, o), o.oneofs && (r._dg12AdditionalDocumentDetails = "dg12AdditionalDocumentDetails")), A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails") && (r.dg13OptionalDetails = c.dot.v4.Lds1ElementaryFile.toObject(A.dg13OptionalDetails, o), o.oneofs && (r._dg13OptionalDetails = "dg13OptionalDetails")), A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions") && (r.dg14SecurityOptions = c.dot.v4.Lds1ElementaryFile.toObject(A.dg14SecurityOptions, o), o.oneofs && (r._dg14SecurityOptions = "dg14SecurityOptions")), A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo") && (r.dg15ActiveAuthenticationPublicKeyInfo = c.dot.v4.Lds1ElementaryFile.toObject(A.dg15ActiveAuthenticationPublicKeyInfo, o), o.oneofs && (r._dg15ActiveAuthenticationPublicKeyInfo = "dg15ActiveAuthenticationPublicKeyInfo")), A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify") && (r.dg16PersonsToNotify = c.dot.v4.Lds1ElementaryFile.toObject(A.dg16PersonsToNotify, o), o.oneofs && (r._dg16PersonsToNotify = "dg16PersonsToNotify")), r;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.Lds1ElementaryFile();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.id = A.int32();
              break;
            }
            case 2: {
              a.bytes = A.bytes();
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
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
        if (A instanceof c.dot.v4.Lds1ElementaryFile)
          return A;
        let o = new c.dot.v4.Lds1ElementaryFile();
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
        return o.defaults && (r.id = o.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (r.id = o.enums === String ? c.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : c.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (r.bytes = o.bytes === String ? d.base64.encode(A.bytes, 0, A.bytes.length) : o.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, o.oneofs && (r._bytes = "bytes")), r;
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
        return A || (A = G.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && c.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && c.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.AuthenticationStatus();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.data = c.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.chip = c.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.data != null && e.hasOwnProperty("data")) {
          let A = c.dot.v4.DataAuthenticationStatus.verify(e.data);
          if (A)
            return "data." + A;
        }
        if (e.chip != null && e.hasOwnProperty("chip")) {
          let A = c.dot.v4.ChipAuthenticationStatus.verify(e.chip);
          if (A)
            return "chip." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.AuthenticationStatus)
          return e;
        let A = new c.dot.v4.AuthenticationStatus();
        if (e.data != null) {
          if (typeof e.data != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.data: object expected");
          A.data = c.dot.v4.DataAuthenticationStatus.fromObject(e.data);
        }
        if (e.chip != null) {
          if (typeof e.chip != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.chip: object expected");
          A.chip = c.dot.v4.ChipAuthenticationStatus.fromObject(e.chip);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.data = null, o.chip = null), e.data != null && e.hasOwnProperty("data") && (o.data = c.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (o.chip = c.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), o;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.DataAuthenticationStatus();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.status = e.int32();
              break;
            }
            case 2: {
              g.protocol = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
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
        if (e instanceof c.dot.v4.DataAuthenticationStatus)
          return e;
        let A = new c.dot.v4.DataAuthenticationStatus();
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
        return A.defaults && (o.status = A.enums === String ? "STATUS_UNSPECIFIED" : 0, o.protocol = A.enums === String ? "PROTOCOL_UNSPECIFIED" : 0), e.status != null && e.hasOwnProperty("status") && (o.status = A.enums === String ? c.dot.v4.DataAuthenticationStatus.Status[e.status] === void 0 ? e.status : c.dot.v4.DataAuthenticationStatus.Status[e.status] : e.status), e.protocol != null && e.hasOwnProperty("protocol") && (o.protocol = A.enums === String ? c.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] === void 0 ? e.protocol : c.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] : e.protocol), o;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.ChipAuthenticationStatus();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.status = A.int32();
              break;
            }
            case 2: {
              a.protocol = A.int32();
              break;
            }
            case 3: {
              a.activeAuthenticationResponse = A.bytes();
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
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
        if (A instanceof c.dot.v4.ChipAuthenticationStatus)
          return A;
        let o = new c.dot.v4.ChipAuthenticationStatus();
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
        return o.defaults && (r.status = o.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (r.status = o.enums === String ? c.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : c.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (r.protocol = o.enums === String ? c.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : c.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, o.oneofs && (r._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (r.activeAuthenticationResponse = o.bytes === String ? d.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : o.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, o.oneofs && (r._activeAuthenticationResponse = "activeAuthenticationResponse")), r;
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
            c.dot.v4.EyeGazeLivenessSegment.encode(A.segments[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && c.dot.Video.encode(A.video, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 3: {
              a.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              a.segments && a.segments.length || (a.segments = []), a.segments.push(c.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = c.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let o = 0; o < A.segments.length; ++o) {
            let r = c.dot.v4.EyeGazeLivenessSegment.verify(A.segments[o]);
            if (r)
              return "segments." + r;
          }
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = c.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = c.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.EyeGazeLivenessContent)
          return A;
        let o = new c.dot.v4.EyeGazeLivenessContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.image: object expected");
          o.image = c.dot.Image.fromObject(A.image);
        }
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          o.segments = [];
          for (let r = 0; r < A.segments.length; ++r) {
            if (typeof A.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            o.segments[r] = c.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[r]);
          }
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.video: object expected");
          o.video = c.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          o.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.segments = []), o.defaults && (r.metadata = null), A.segments && A.segments.length) {
          r.segments = [];
          for (let g = 0; g < A.segments.length; ++g)
            r.segments[g] = c.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[g], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = c.dot.v4.Metadata.toObject(A.metadata, o)), A.image != null && A.hasOwnProperty("image") && (r.image = c.dot.Image.toObject(A.image, o), o.oneofs && (r._image = "image")), A.video != null && A.hasOwnProperty("video") && (r.video = c.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.corner = e.int32();
              break;
            }
            case 2: {
              g.image = c.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
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
          let A = c.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.EyeGazeLivenessSegment)
          return e;
        let A = new c.dot.v4.EyeGazeLivenessSegment();
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
          A.image = c.dot.Image.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.corner = A.enums === String ? "TOP_LEFT" : 0, o.image = null), e.corner != null && e.hasOwnProperty("corner") && (o.corner = A.enums === String ? c.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : c.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (o.image = c.dot.Image.toObject(e.image, A)), o;
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
            c.dot.v4.MultiRangeLivenessStepResult.encode(A.stepResults[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && c.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.multiRangeLivenessMetadata != null && Object.hasOwnProperty.call(A, "multiRangeLivenessMetadata") && c.dot.v4.MultiRangeLivenessMetadata.encode(A.multiRangeLivenessMetadata, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.MultiRangeLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.stepResults && a.stepResults.length || (a.stepResults = []), a.stepResults.push(c.dot.v4.MultiRangeLivenessStepResult.decode(A, A.uint32()));
              break;
            }
            case 2: {
              a.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.multiRangeLivenessMetadata = c.dot.v4.MultiRangeLivenessMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.stepResults != null && A.hasOwnProperty("stepResults")) {
          if (!Array.isArray(A.stepResults))
            return "stepResults: array expected";
          for (let o = 0; o < A.stepResults.length; ++o) {
            let r = c.dot.v4.MultiRangeLivenessStepResult.verify(A.stepResults[o]);
            if (r)
              return "stepResults." + r;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = c.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = c.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata")) {
          let o = c.dot.v4.MultiRangeLivenessMetadata.verify(A.multiRangeLivenessMetadata);
          if (o)
            return "multiRangeLivenessMetadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.MultiRangeLivenessContent)
          return A;
        let o = new c.dot.v4.MultiRangeLivenessContent();
        if (A.stepResults) {
          if (!Array.isArray(A.stepResults))
            throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: array expected");
          o.stepResults = [];
          for (let r = 0; r < A.stepResults.length; ++r) {
            if (typeof A.stepResults[r] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: object expected");
            o.stepResults[r] = c.dot.v4.MultiRangeLivenessStepResult.fromObject(A.stepResults[r]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.metadata: object expected");
          o.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.video: object expected");
          o.video = c.dot.Video.fromObject(A.video);
        }
        if (A.multiRangeLivenessMetadata != null) {
          if (typeof A.multiRangeLivenessMetadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.multiRangeLivenessMetadata: object expected");
          o.multiRangeLivenessMetadata = c.dot.v4.MultiRangeLivenessMetadata.fromObject(A.multiRangeLivenessMetadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.stepResults = []), o.defaults && (r.metadata = null, r.multiRangeLivenessMetadata = null), A.stepResults && A.stepResults.length) {
          r.stepResults = [];
          for (let g = 0; g < A.stepResults.length; ++g)
            r.stepResults[g] = c.dot.v4.MultiRangeLivenessStepResult.toObject(A.stepResults[g], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = c.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = c.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata") && (r.multiRangeLivenessMetadata = c.dot.v4.MultiRangeLivenessMetadata.toObject(A.multiRangeLivenessMetadata, o)), r;
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
        ).int32(e.challengeItem), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.ImageWithTimestamp.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.MultiRangeLivenessStepResult();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.challengeItem = e.int32();
              break;
            }
            case 2: {
              g.image = c.dot.ImageWithTimestamp.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
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
          let A = c.dot.ImageWithTimestamp.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.MultiRangeLivenessStepResult)
          return e;
        let A = new c.dot.v4.MultiRangeLivenessStepResult();
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
          A.image = c.dot.ImageWithTimestamp.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.challengeItem = A.enums === String ? "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_UNSPECIFIED" : 0, o.image = null), e.challengeItem != null && e.hasOwnProperty("challengeItem") && (o.challengeItem = A.enums === String ? c.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] === void 0 ? e.challengeItem : c.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] : e.challengeItem), e.image != null && e.hasOwnProperty("image") && (o.image = c.dot.ImageWithTimestamp.toObject(e.image, A)), o;
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
            c.dot.v4.FaceDetection.encode(e.detections[o], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.MultiRangeLivenessMetadata();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          a >>> 3 === 1 ? (g.detections && g.detections.length || (g.detections = []), g.detections.push(c.dot.v4.FaceDetection.decode(e, e.uint32()))) : e.skipType(a & 7);
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.detections != null && e.hasOwnProperty("detections")) {
          if (!Array.isArray(e.detections))
            return "detections: array expected";
          for (let A = 0; A < e.detections.length; ++A) {
            let o = c.dot.v4.FaceDetection.verify(e.detections[A]);
            if (o)
              return "detections." + o;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.MultiRangeLivenessMetadata)
          return e;
        let A = new c.dot.v4.MultiRangeLivenessMetadata();
        if (e.detections) {
          if (!Array.isArray(e.detections))
            throw TypeError(".dot.v4.MultiRangeLivenessMetadata.detections: array expected");
          A.detections = [];
          for (let o = 0; o < e.detections.length; ++o) {
            if (typeof e.detections[o] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessMetadata.detections: object expected");
            A.detections[o] = c.dot.v4.FaceDetection.fromObject(e.detections[o]);
          }
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if ((A.arrays || A.defaults) && (o.detections = []), e.detections && e.detections.length) {
          o.detections = [];
          for (let r = 0; r < e.detections.length; ++r)
            o.detections[r] = c.dot.v4.FaceDetection.toObject(e.detections[r], A);
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
        ).uint64(e.timestampMillis), e.position != null && Object.hasOwnProperty.call(e, "position") && c.dot.v4.FaceDetectionPosition.encode(e.position, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.FaceDetection();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.timestampMillis = e.uint64();
              break;
            }
            case 2: {
              g.position = c.dot.v4.FaceDetectionPosition.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !d.isInteger(e.timestampMillis) && !(e.timestampMillis && d.isInteger(e.timestampMillis.low) && d.isInteger(e.timestampMillis.high)))
          return "timestampMillis: integer|Long expected";
        if (e.position != null && e.hasOwnProperty("position")) {
          let A = c.dot.v4.FaceDetectionPosition.verify(e.position);
          if (A)
            return "position." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.FaceDetection)
          return e;
        let A = new c.dot.v4.FaceDetection();
        if (e.timestampMillis != null && (d.Long ? (A.timestampMillis = d.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), e.position != null) {
          if (typeof e.position != "object")
            throw TypeError(".dot.v4.FaceDetection.position: object expected");
          A.position = c.dot.v4.FaceDetectionPosition.fromObject(e.position);
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
        return e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? d.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), e.position != null && e.hasOwnProperty("position") && (o.position = c.dot.v4.FaceDetectionPosition.toObject(e.position, A)), o;
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
        return A || (A = G.create()), e.center != null && Object.hasOwnProperty.call(e, "center") && c.dot.PointDouble.encode(e.center, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.FaceDetectionPosition();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.center = c.dot.PointDouble.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.faceSizeToImageShorterSideRatio = e.double();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.center != null && e.hasOwnProperty("center")) {
          let A = c.dot.PointDouble.verify(e.center);
          if (A)
            return "center." + A;
        }
        return e.faceSizeToImageShorterSideRatio != null && e.hasOwnProperty("faceSizeToImageShorterSideRatio") && typeof e.faceSizeToImageShorterSideRatio != "number" ? "faceSizeToImageShorterSideRatio: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.FaceDetectionPosition)
          return e;
        let A = new c.dot.v4.FaceDetectionPosition();
        if (e.center != null) {
          if (typeof e.center != "object")
            throw TypeError(".dot.v4.FaceDetectionPosition.center: object expected");
          A.center = c.dot.PointDouble.fromObject(e.center);
        }
        return e.faceSizeToImageShorterSideRatio != null && (A.faceSizeToImageShorterSideRatio = Number(e.faceSizeToImageShorterSideRatio)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.center = null, o.faceSizeToImageShorterSideRatio = 0), e.center != null && e.hasOwnProperty("center") && (o.center = c.dot.PointDouble.toObject(e.center, A)), e.faceSizeToImageShorterSideRatio != null && e.hasOwnProperty("faceSizeToImageShorterSideRatio") && (o.faceSizeToImageShorterSideRatio = A.json && !isFinite(e.faceSizeToImageShorterSideRatio) ? String(e.faceSizeToImageShorterSideRatio) : e.faceSizeToImageShorterSideRatio), o;
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
        return o || (o = G.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && c.dot.Image.encode(A.neutralExpressionFaceImage, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.smileExpressionFaceImage != null && Object.hasOwnProperty.call(A, "smileExpressionFaceImage") && c.dot.Image.encode(A.smileExpressionFaceImage, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && c.dot.Video.encode(A.video, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.SmileLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.neutralExpressionFaceImage = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.smileExpressionFaceImage = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage")) {
          let o = c.dot.Image.verify(A.neutralExpressionFaceImage);
          if (o)
            return "neutralExpressionFaceImage." + o;
        }
        if (A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage")) {
          let o = c.dot.Image.verify(A.smileExpressionFaceImage);
          if (o)
            return "smileExpressionFaceImage." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = c.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = c.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.SmileLivenessContent)
          return A;
        let o = new c.dot.v4.SmileLivenessContent();
        if (A.neutralExpressionFaceImage != null) {
          if (typeof A.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          o.neutralExpressionFaceImage = c.dot.Image.fromObject(A.neutralExpressionFaceImage);
        }
        if (A.smileExpressionFaceImage != null) {
          if (typeof A.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          o.smileExpressionFaceImage = c.dot.Image.fromObject(A.smileExpressionFaceImage);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.video: object expected");
          o.video = c.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          o.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = c.dot.Image.toObject(A.neutralExpressionFaceImage, o)), A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = c.dot.Image.toObject(A.smileExpressionFaceImage, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = c.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = c.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        return o || (o = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && c.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.PalmContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = c.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof u || (A = new u(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = c.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = c.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = c.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.PalmContent)
          return A;
        let o = new c.dot.v4.PalmContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          o.image = c.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.PalmContent.video: object expected");
          o.video = c.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          o.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = c.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = c.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = c.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.Image();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        g >>> 3 === 1 ? r.bytes = t.bytes() : t.skipType(g & 7);
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.Image)
        return t;
      let e = new c.dot.Image();
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
      return e || (e = G.create()), t.image != null && Object.hasOwnProperty.call(t, "image") && c.dot.Image.encode(t.image, e.uint32(
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
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.ImageWithTimestamp();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.image = c.dot.Image.decode(t, t.uint32());
            break;
          }
          case 2: {
            r.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(g & 7);
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
        let e = c.dot.Image.verify(t.image);
        if (e)
          return "image." + e;
      }
      return t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !d.isInteger(t.timestampMillis) && !(t.timestampMillis && d.isInteger(t.timestampMillis.low) && d.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.ImageWithTimestamp)
        return t;
      let e = new c.dot.ImageWithTimestamp();
      if (t.image != null) {
        if (typeof t.image != "object")
          throw TypeError(".dot.ImageWithTimestamp.image: object expected");
        e.image = c.dot.Image.fromObject(t.image);
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
      return t.image != null && t.hasOwnProperty("image") && (A.image = c.dot.Image.toObject(t.image, e)), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? d.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
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
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.ImageSize();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.width = t.int32();
            break;
          }
          case 2: {
            r.height = t.int32();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !d.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !d.isInteger(t.height) ? "height: integer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.ImageSize)
        return t;
      let e = new c.dot.ImageSize();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.Int32List();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            if (r.items && r.items.length || (r.items = []), (g & 7) === 2) {
              let a = t.uint32() + t.pos;
              for (; t.pos < a; )
                r.items.push(t.int32());
            } else
              r.items.push(t.int32());
            break;
          }
          default:
            t.skipType(g & 7);
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
      if (t instanceof c.dot.Int32List)
        return t;
      let e = new c.dot.Int32List();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.RectangleDouble();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
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
            t.skipType(g & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.left != null && t.hasOwnProperty("left") && typeof t.left != "number" ? "left: number expected" : t.top != null && t.hasOwnProperty("top") && typeof t.top != "number" ? "top: number expected" : t.right != null && t.hasOwnProperty("right") && typeof t.right != "number" ? "right: number expected" : t.bottom != null && t.hasOwnProperty("bottom") && typeof t.bottom != "number" ? "bottom: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.RectangleDouble)
        return t;
      let e = new c.dot.RectangleDouble();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.DigestWithTimestamp();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.digest = t.bytes();
            break;
          }
          case 2: {
            r.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || d.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !d.isInteger(t.timestampMillis) && !(t.timestampMillis && d.isInteger(t.timestampMillis.low) && d.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.DigestWithTimestamp)
        return t;
      let e = new c.dot.DigestWithTimestamp();
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
      ).bytes(e.bytes), e.containerMp4 != null && Object.hasOwnProperty.call(e, "containerMp4") && c.dot.VideoContainer.encode(e.containerMp4, A.uint32(
        /* id 2, wireType 2 =*/
        18
      ).fork()).ldelim(), e.streamH264 != null && Object.hasOwnProperty.call(e, "streamH264") && c.dot.VideoStream.encode(e.streamH264, A.uint32(
        /* id 3, wireType 2 =*/
        26
      ).fork()).ldelim(), A;
    }, n.encodeDelimited = function(e, A) {
      return this.encode(e, A).ldelim();
    }, n.decode = function(e, A, o) {
      e instanceof u || (e = u.create(e));
      let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.Video();
      for (; e.pos < r; ) {
        let a = e.uint32();
        if (a === o)
          break;
        switch (a >>> 3) {
          case 1: {
            g.bytes = e.bytes();
            break;
          }
          case 2: {
            g.containerMp4 = c.dot.VideoContainer.decode(e, e.uint32());
            break;
          }
          case 3: {
            g.streamH264 = c.dot.VideoStream.decode(e, e.uint32());
            break;
          }
          default:
            e.skipType(a & 7);
            break;
        }
      }
      return g;
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
          let o = c.dot.VideoContainer.verify(e.containerMp4);
          if (o)
            return "containerMp4." + o;
        }
      }
      if (e.streamH264 != null && e.hasOwnProperty("streamH264")) {
        if (A.content === 1)
          return "content: multiple values";
        A.content = 1;
        {
          let o = c.dot.VideoStream.verify(e.streamH264);
          if (o)
            return "streamH264." + o;
        }
      }
      return null;
    }, n.fromObject = function(e) {
      if (e instanceof c.dot.Video)
        return e;
      let A = new c.dot.Video();
      if (e.bytes != null && (typeof e.bytes == "string" ? d.base64.decode(e.bytes, A.bytes = d.newBuffer(d.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (A.bytes = e.bytes)), e.containerMp4 != null) {
        if (typeof e.containerMp4 != "object")
          throw TypeError(".dot.Video.containerMp4: object expected");
        A.containerMp4 = c.dot.VideoContainer.fromObject(e.containerMp4);
      }
      if (e.streamH264 != null) {
        if (typeof e.streamH264 != "object")
          throw TypeError(".dot.Video.streamH264: object expected");
        A.streamH264 = c.dot.VideoStream.fromObject(e.streamH264);
      }
      return A;
    }, n.toObject = function(e, A) {
      A || (A = {});
      let o = {};
      return e.bytes != null && e.hasOwnProperty("bytes") && (o.bytes = A.bytes === String ? d.base64.encode(e.bytes, 0, e.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes, A.oneofs && (o._bytes = "bytes")), e.containerMp4 != null && e.hasOwnProperty("containerMp4") && (o.containerMp4 = c.dot.VideoContainer.toObject(e.containerMp4, A), A.oneofs && (o.content = "containerMp4")), e.streamH264 != null && e.hasOwnProperty("streamH264") && (o.streamH264 = c.dot.VideoStream.toObject(e.streamH264, A), A.oneofs && (o.content = "streamH264")), o;
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
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.VideoContainer();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        g >>> 3 === 1 ? r.bytes = t.bytes() : t.skipType(g & 7);
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.VideoContainer)
        return t;
      let e = new c.dot.VideoContainer();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.VideoStream();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.bytes = t.bytes();
            break;
          }
          case 2: {
            r.frameRate = t.double();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : t.frameRate != null && t.hasOwnProperty("frameRate") && typeof t.frameRate != "number" ? "frameRate: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.VideoStream)
        return t;
      let e = new c.dot.VideoStream();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.PointInt();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.x = t.int32();
            break;
          }
          case 2: {
            r.y = t.int32();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && !d.isInteger(t.x) ? "x: integer expected" : t.y != null && t.hasOwnProperty("y") && !d.isInteger(t.y) ? "y: integer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.PointInt)
        return t;
      let e = new c.dot.PointInt();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.PointDouble();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.x = t.double();
            break;
          }
          case 2: {
            r.y = t.double();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return r;
    }, n.decodeDelimited = function(t) {
      return t instanceof u || (t = new u(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && typeof t.x != "number" ? "x: number expected" : t.y != null && t.hasOwnProperty("y") && typeof t.y != "number" ? "y: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.PointDouble)
        return t;
      let e = new c.dot.PointDouble();
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
(function(i, n) {
  function t(a, I, C, s, B) {
    return j(s - 677, C);
  }
  function e(a, I, C, s, B) {
    return j(B - -878, I);
  }
  function A(a, I, C, s, B) {
    return j(C - 760, s);
  }
  function o(a, I, C, s, B) {
    return j(I - 157, a);
  }
  function r(a, I, C, s, B) {
    return j(B - -223, s);
  }
  const g = i();
  for (; ; )
    try {
      if (-parseInt(t(894, 1073, "woms", 968, 920)) / 1 + -parseInt(r(-65, -97, -41, "(@!a", -23)) / 2 * (-parseInt(t(795, 909, "naz@", 824, 749)) / 3) + parseInt(t(972, 861, "Q4Uv", 972, 975)) / 4 * (parseInt(o("73Ro", 293, 318, 322, 246)) / 5) + -parseInt(o(")(vr", 409, 500, 334, 426)) / 6 * (parseInt(o("KD(5", 412, 379, 416, 483)) / 7) + -parseInt(A(884, 880, 947, "wRDO", 830)) / 8 * (parseInt(e(-619, "@&1l", -807, -749, -721)) / 9) + -parseInt(e(-580, "uuME", -476, -633, -546)) / 10 + parseInt(t(999, 973, "wRDO", 975, 1026)) / 11 === n) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(yn, -1 * 313981 + -206 * 5011 + 2146108);
function KE() {
  function i(C, s, B, E, x) {
    return j(B - -678, C);
  }
  function n(C, s, B, E, x) {
    return j(E - -434, x);
  }
  const t = e(-78, -95, -146, "9CiG") + e(38, -30, -6, "uA^d") + i("KD(5", -520, -493) + A(1154, 1190, 1058, 1120, "9CiG") + e(-294, -245, -350, "JJsj") + i("e#ZY", -571, -555) + a(1034, 949, 902, "@&1l", 962) + i("Q4Uv", -440, -485) + a(846, 848, 877, "qnCr", 864) + A(1220, 1256, 1120, 1164, "(x*h") + a(864, 795, 886, "JJsj", 802) + a(839, 961, 938, "KD(5", 887) + i("bLch", -550, -543) + i("(x*h", -322, -398) + e(-103, -160, -134, "F@W2") + e(-312, -208, -252, "M7EP") + e(-333, -237, -179, "uuME") + A(1289, 1333, 1117, 1224, "yjWN") + e(-183, -84, -81, "(x*h") + A(1100, 1191, 1145, 1155, "BnCL") + A(1158, 1194, 1122, 1226, "@&1l") + e(-195, -212, -152, "JJsj") + e(-42, -107, -30, "7HrD") + a(820, 768, 684, "e#ZY", 764) + e(-97, -169, -120, "F@W2") + A(1215, 1303, 1248, 1276, "KD(5") + A(1141, 1154, 1056, 1105, "Q4Uv") + a(835, 871, 752, "IKb1", 827) + a(881, 838, 716, "JJsj", 783) + A(1243, 1194, 1312, 1270, "Q4Uv") + e(-35, -113, -196, "bLch") + A(1118, 1266, 1269, 1165, "R)qi") + A(1124, 1096, 1272, 1174, "D9lL") + a(963, 916, 844, "D9lL", 848) + a(834, 935, 977, "dSmq", 923) + e(70, -47, -50, "e#ZY") + a(891, 788, 896, "woms", 852) + a(1036, 1051, 877, "#Xka", 965) + i("F@W2", -477, -416) + i("Q4Uv", -392, -361) + a(901, 934, 936, "re3X", 976) + i("Cbue", -372, -397) + e(-212, -186, -156, "F@W2") + n(-243, -272, -403, -330, "Dz)f") + i("vr3X", -453, -355) + n(-262, -298, -196, -223, ")(vr") + A(1185, 1198, 1310, 1239, "#Xka") + a(863, 998, 902, "wRDO", 897) + n(-276, -278, -159, -211, "M7EP") + i("e#ZY", -514, -513) + i("PzgC", -509, -415) + a(826, 1019, 946, "#GFH", 901) + i("9CiG", -364, -390) + i("yjWN", -405, -430) + n(-239, -373, -320, -301, "uuME") + n(-271, -270, -209, -246, "@&1l") + i("ENtk", -627, -561) + i("73Ro", -567, -568) + n(-41, -122, -23, -101, "#GFH") + a(910, 897, 908, ")Shg", 820) + n(-235, -211, -275, -274, "B8Nm") + a(863, 850, 886, "Q4Uv", 967) + a(996, 986, 1042, "uuME", 980) + A(1161, 1144, 1220, 1168, "wRDO") + n(-142, -238, -308, -221, ")Shg") + n(-250, -408, -400, -320, "BnCL") + a(788, 816, 896, "woms", 781) + e(-123, -162, -236, "R)qi") + e(-247, -259, -354, "woms") + A(1314, 1162, 1286, 1247, "D9lL") + a(914, 826, 833, "F@W2", 939) + i("7HrD", -497, -466) + e(-26, -117, -48, "ENtk") + n(-228, -100, -101, -155, "uFbg") + n(-390, -272, -314, -310, "uA^d") + a(1028, 1e3, 888, "R)qi", 930) + i("Ht^(", -499, -541) + e(31, -61, -99, "woms") + n(-185, -383, -185, -271, "yjWN") + a(735, 656, 814, "e#ZY", 765) + a(780, 892, 951, ")Shg", 866) + i("pVRn", -466, -379) + a(744, 890, 825, "wbvQ", 794) + i("vr3X", -368, -348) + A(1201, 1207, 1214, 1167, "#GFH") + A(1045, 1060, 1001, 1087, "tl$D") + n(-104, 1, -20, -107, "F@W2") + A(1095, 1173, 1197, 1122, "#Xka") + A(1167, 1028, 1055, 1137, "woms") + a(795, 865, 881, "(@!a", 771) + n(-214, 4, -11, -105, "qnCr") + a(933, 946, 952, "vr3X", 913) + A(1111, 1245, 1257, 1205, "B8Nm") + e(-69, -115, -107, "R)qi") + e(-179, -127, -32, "9CiG") + i("uA^d", -404, -476) + n(-244, -298, -260, -239, "naz@") + a(807, 939, 850, ")(vr", 855) + a(756, 932, 813, "sFdy", 863) + e(14, -59, -96, "PzgC") + e(-139, -227, -205, "IuuG") + A(1115, 1081, 1130, 1111, "IKb1") + a(901, 818, 976, "uFbg", 921) + e(-145, -198, -270, "woms") + a(766, 867, 856, "pV91", 817) + n(-194, -288, -215, -250, ")Shg") + n(-250, -343, -235, -314, "Pw[3") + n(-316, -261, -281, -321, "wRDO") + i("Dz)f", -347, -409) + a(842, 814, 1010, "e#ZY", 899) + A(1162, 1148, 1222, 1133, "tl$D") + e(-263, -254, -228, "Ht^(") + i("ENtk", -397, -392) + i("Q4Uv", -264, -353) + n(-379, -189, -371, -292, "Ht^(") + a(728, 757, 836, "BnCL", 801) + A(1222, 1221, 1063, 1113, "uFbg") + a(807, 970, 971, "pV91", 917) + A(1209, 1133, 1157, 1229, "IKb1") + e(-70, -56, -53, "yjWN") + a(849, 899, 973, "7HrD", 892) + e(-211, -264, -211, "@&1l") + e(-298, -223, -316, "7HrD") + a(992, 830, 906, "wRDO", 874) + a(849, 873, 915, "ENtk", 932) + a(906, 814, 980, "hVaX", 926) + i("woms", -276, -360) + i("wRDO", -370, -469) + A(1068, 1183, 966, 1071, "woms") + a(1065, 1018, 996, "BnCL", 953) + i("fB#C", -511, -422) + n(-206, -313, -389, -294, "BnCL") + a(1017, 857, 876, "yjWN", 934) + A(1271, 1264, 1134, 1252, "gQsu") + n(-340, -329, -331, -293, "PzgC") + n(-174, -74, -204, -170, "vr3X") + e(-184, -98, -125, "7HrD") + A(1094, 1150, 1037, 1089, "Dz)f") + a(909, 931, 1104, "Cbue", 990) + a(971, 1023, 1047, "#GFH", 971) + e(25, -89, -174, "(x*h") + e(-43, -149, -71, "uFbg") + n(-289, -112, -110, -213, "uFbg") + i("woms", -368, -458) + i("wRDO", -595, -544) + a(912, 884, 748, "(x*h", 812) + e(-134, -65, 30, "sFdy") + e(-134, -247, -166, "@&1l") + n(-104, -227, -77, -113, "7HrD") + n(-157, -253, -92, -197, "IKb1") + a(914, 814, 738, "Dz)f", 832) + i("bLch", -410, -389) + e(-289, -235, -175, "Ou*p") + a(906, 902, 841, "Dz)f", 940) + A(1115, 1168, 1047, 1144, "tl$D") + e(-18, -136, -66, "e#ZY") + n(-177, -99, -159, -192, "BnCL") + n(-145, -284, -344, -257, "Cbue") + a(850, 893, 939, "(x*h", 929) + a(864, 940, 1041, "IKb1", 959) + n(-231, -171, -205, -264, "pVRn") + n(-330, -383, -263, -265, "KD(5") + A(1073, 1084, 1145, 1069, "9CiG") + e(-250, -240, -345, "woms") + e(-341, -250, -265, "wbvQ") + a(826, 926, 838, "D9lL", 842) + a(931, 906, 870, "uFbg", 878) + n(-443, -350, -258, -328, "JJsj") + e(-106, -94, -106, "uA^d") + A(1145, 1195, 1109, 1106, "gQsu") + i("Dz)f", -428, -376) + i("pVRn", -460, -431) + a(892, 915, 844, "9Z]u", 916) + e(-131, -40, -143, "yjWN") + i("IKb1", -315, -382) + a(921, 949, 968, "pVRn", 902) + i("D9lL", -496, -459) + e(-338, -255, -260, "Ou*p") + n(-244, -334, -292, -245, "IKb1") + e(-188, -139, -188, "Q4Uv") + a(826, 817, 820, "hVaX", 829) + e(-172, -222, -268, "uuME") + n(-77, -80, -43, -99, "pVRn") + e(-285, -187, -303, "@&1l") + A(1195, 1291, 1076, 1189, "e#ZY") + e(-160, -191, -195, "Q4Uv") + e(-359, -263, -367, "IKb1") + n(-213, -168, -162, -106, "Ht^(") + A(1061, 1256, 1063, 1172, "(@!a") + e(-75, -54, -31, "fB#C") + e(-324, -261, -226, "IKb1") + i("R)qi", -441, -385) + A(1208, 1204, 1016, 1101, "M7EP") + i("F@W2", -473, -364) + A(1349, 1355, 1202, 1261, "JJsj") + e(-163, -214, -144, "IKb1") + a(785, 870, 896, "vr3X", 859) + A(1262, 1166, 1226, 1171, "Pw[3") + i("hVaX", -404, -434) + A(1224, 1156, 1115, 1130, "pVRn");
  function e(C, s, B, E, x) {
    return j(s - -366, E);
  }
  function A(C, s, B, E, x) {
    return j(E - 939, x);
  }
  const o = window[e(-187, -142, -119, "dSmq")](t), r = window[a(854, 897, 965, "D9lL", 972)](o), g = oQ(r);
  function a(C, s, B, E, x) {
    return j(x - 656, E);
  }
  const I = {};
  return I[n(-153, -123, -170, -196, "(x*h")] = Hs, I[A(1074, 1141, 1021, 1094, "hVaX")] = cB, window[i("Dz)f", -485, -444) + "o"][A(1021, 1068, 1031, 1098, "7HrD") + "e"][a(849, 803, 669, "bLch", 774) + i("Ou*p", -495, -403)](a(833, 1062, 1039, "hVaX", 950), g, I, !0, [e(-197, -152, -199, "D9lL") + "pt"]);
}
function j(i, n) {
  i = i - (-580 + 1 * 682);
  const t = yn();
  let e = t[i];
  if (j.jXvzDZ === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    j.vUlawM = a, j.HlUUfa = {}, j.jXvzDZ = !0;
  }
  const o = t[-3700 + -527 * -3 + 2119], r = i + o, g = j.HlUUfa[r];
  return g ? e = g : (j.JwDRef === void 0 && (j.JwDRef = !0), e = j.vUlawM(e, n), j.HlUUfa[r] = e), e;
}
function yn() {
  const i = ["FahcTSkxCG", "ruFcTmktW7q", "kCknWR5RWPe", "WQyKW6hdTG", "gCoJjCozra", "ewddRmkuEfGJyG", "WR4Dfa5T", "WOdcKKK2W7y", "bmo/WRRcLum", "xbCfmmkz", "ugNdHCkZla", "BctcSmkAba", "mJpdQCkfna", "th85WROL", "hCkhlY7cJG", "pmoTWOZcOe8", "omosyCkzEW", "WRPfC1RcN8kWWOGO", "mJOMAGO", "W7LXWR3cOsFdIrdcHmkjW4ZcJgaJWOK", "W54zWRpcNszXECoRg8k8WQDRWRC", "W5hdKSowtei", "x8oNWRuraG", "W54bWQnkWPBdItfonNhdHJib", "AeFcN8kpW68", "lYy8vu4", "yCoWW5/dUK4", "hmoFWRhdK08", "fb3cHdBcLG", "omoiW5b2kW", "dCk1W5m5W4O", "sqjRW4av", "wH/cR8oKva", "u1FdI8knW7i", "DmkpWPSUcG", "ktK5kCoX", "jSkckmkGvW", "WP/dJdfpW7y", "WOiPW4pdHgS", "wmoPx8kDsW", "rt3dUmkY", "lSkwjZxcOa", "WP4sW6JdOv0", "ENrmW68H", "emkXW6qoW7y", "WP11W7xdNuS", "agKkyfq", "WRGsW5BdUxC", "iSofWR3dKeC", "D8krWOauBa", "sueSWOiQ", "k8oCnZ/cTG", "WRKIW5CqW6K", "imk8cSkVyW", "qqunAsO", "oCkbWP5zW74", "WQOUuCoEW4BcOZLbW6tdUSo4WR9H", "aa5obX04yhldOglcLJ4", "xSoYzCkNvW", "Asu7dq", "cmoFWQRdN1O/jG", "d8k/WP9GWQ8", "WO7dTZTzW5m", "W7TYDLita8oZwmovW5XIleqx", "mGlcLmkoba", "W5BdT8oBw8kR", "W7RcNJHHWR4", "vSkVWO8dhG", "omkaWO1qWQ4", "W5hdPSkTF3hdK8obfmoLWQW", "WQHlvmk6WPK", "WQeoW6iqW7K", "mqZcGWFcLa", "DctdMCkUta", "WRVcI8o/rSkw", "x1qLWRne", "zSouW4BdHx0", "W5ZdUmoYAd0", "W5NdOSkNgCoi", "xSotWP3dGuG", "Bw3dQ8k7uW", "rcddOmkD", "amo3W4ddNMW", "W7DXb8k2WQ8", "hmoDW7lcSxy", "WOeAWPXBWQK", "rN/cU8o6W68", "WOldP8opd1G", "nSodW7fAha", "EMqgoZa", "AmoqWQldTaK", "F0eXWOKL", "vmkTWQtdU1a", "mKi3bx0", "D8o/WPetqW", "n8olW7XucW", "aSoyWRVdTfi", "dwzLtL7cSSkUW7H4W4pdUCojrYi", "BxJdRSkPdW", "ya45wMa", "zZNcJCkAma", "W47dIZbCW7O", "WQP5WRddU0C", "WRyMW4KsW7S", "mSoGWOrHW7m", "ESkCW5KKjG", "kCkGWOPMWQW", "WOlcSComleW", "W49AmmkMWPC", "aSoYW7dcSum", "gSoTWPBcKX4", "W597W6VcIai", "wJZdLSkVW6O", "g0jqbwm", "WQmOevnN", "W5ldLxTMW78", "WRJcPSozWQil", "WR5NW7npW7y", "aCkhneNcJG", "gsy1ubq", "WQqeW50FW4G", "EmkuW4WTWPO", "WRVcQCo2E1m", "p8kQfWdcSxRcI3RcJvC", "l8oZWOdcLhS", "WRddQIa/W7u", "W6TFkCoFWRC", "W5rjnCkcWPS", "WRZcHCo+EeO", "WOVdHCopcX/cVSoGW5u9kCkvoKtdHq", "AJ8/st4", "i8kHhCk+qa", "zspcRmo7WPu", "W4GVw8kLWQa", "tYaftai", "WQ0WdXX1", "jYeTudC", "WQuHWO7dVwvwtNFcRCo2eSksqa", "lKXHp3W", "WOTlW55lW4e", "tK3cGHSl", "WPddUgrkWQC", "trBcTZpcLG", "isXowhC", "xKRcS8krW7S", "E2SMjGe", "WQddU1H3W5y", "WO3cN8olEfG", "WOVdJmopaH/cV8k2WRyjk8kllW", "B8k2WQJdRSoN", "F2dcH8k5W5u", "tSk8WPmMnG", "maVcT8k6", "sCkaWQq/WRi", "WOPcW6BdNMG", "WR/cMSkRaY4", "CJqJda", "WO4aWRJdHIe", "W498WOrYW5apWPGfW7JdQG", "AgJcIeSb", "B2FcNmk9W40", "twCiW5Ct", "BSkSW4ZdOwy", "uMhdRN9J", "AgayWRuK", "C8oky13cVq", "wCoDWRVcPea", "vmkMWQVdIfW", "W6pdG8kFl8ok", "W4fogmkVWR4", "WOjyW5ldTMS", "eWFcTCoThq", "nmkoW7PHWR8", "tSkEWRXRWPa", "vMC0vSoZ", "amkrW6LFW4O", "amoMWPZdNw8", "AmkDWOGboW", "x3OcBb0", "x8kqpmo3jsnvW6RcVY53W75B", "WPWgW6qaW4u", "oSomWR7cP0W", "cSk2a8kEDG", "qx5ZdLeTimkisWldHfldHG", "WOxcN8okqCkS", "oCo0vglcNW", "W5PVW5/cNMu", "fbBcU8kYsW", "W798C1XwBCkXoSouW50", "W4mtW7CaW40", "f8oKWOrWWPe", "W4v9W5iiW7SWWQiS", "zYNcVCoIqW", "sd/dVCkWAq", "ymohW4ldLLy", "ECo0WRZdMCoI", "W6JdJ8k9zK8", "W45BbSkxWQa", "nCoWWRBcPwS", "W4flbSkNWQe", "W48RrKldQq", "W7xdPSoZWQOgWOxcKCoV", "ihKcW4aMW73dKG", "WQ3dQbzHW6C", "o8oVWReukq", "n8o/z8kREG", "wmkEWO/dJ8oI", "cmoFWRtdU34", "W6xdMZO8WRO", "vmo2WPKfDW", "WRGqfW5b", "umoWvL7cNq", "W4a3E1NcSa", "BKpdJSo4W7K", "x8oysMdcIW", "qdRdRmknwa", "WPRcPSo4phi", "WO3dG2rjW7u", "pSo8W4SHW40", "WQitodHr", "DMFdV8kYDG", "W65lu8kEWOC", "i8kaW6aPW7a", "o8kSW58NW5i", "x03dJg58", "DqlcG8oT", "WP0PW4JdGIe", "j8o8y8kjwa", "z8omWPJdMMW", "E2RcJSk6pq", "WO0Rbr54", "wCoTWPRcJgu", "WOf+W5ddQMy", "bCkOWRe6WPu", "WPBcHmo3W7ef", "qCkLWPi3ka"];
  return yn = function() {
    return i;
  }, yn();
}
async function jE(i) {
  function n(o, r, g, a, I) {
    return j(I - 772, a);
  }
  function t(o, r, g, a, I) {
    return j(o - -934, r);
  }
  const e = await KE(), A = {};
  return A[n(1029, 969, 958, "pVRn", 923)] = Hs, window[t(-785, "7HrD") + "o"][n(931, 919, 1079, "JJsj", 987) + "e"][n(852, 926, 921, "KD(5", 925) + "pt"](A, e, i);
}
(function(i, n) {
  const t = i();
  function e(a, I, C, s, B) {
    return kA(a - -419, B);
  }
  function A(a, I, C, s, B) {
    return kA(s - 765, a);
  }
  function o(a, I, C, s, B) {
    return kA(a - -741, C);
  }
  function r(a, I, C, s, B) {
    return kA(B - -510, a);
  }
  function g(a, I, C, s, B) {
    return kA(I - -918, s);
  }
  for (; ; )
    try {
      if (-parseInt(o(-488, -497, "x*^]", -489, -486)) / 1 + -parseInt(o(-485, -495, "pzP3", -480, -486)) / 2 + parseInt(e(-161, -169, -167, -170, "L9MP")) / 3 + -parseInt(A("Cqh&", 1022, 1014, 1016, 1018)) / 4 + parseInt(o(-482, -489, "Qc0R", -486, -491)) / 5 * (parseInt(o(-477, -483, "eJxs", -479, -486)) / 6) + -parseInt(g(-659, -652, -655, "%)&5", -644)) / 7 + parseInt(r("x*^]", -252, -233, -242, -242)) / 8 * (parseInt(r("%U4H", -247, -254, -252, -245)) / 9) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(mn, 1214727 + -2 * -223756 + -859165);
function kA(i, n) {
  i = i - 249;
  const t = mn();
  let e = t[i];
  if (kA.rlOLBG === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    kA.jusriZ = a, kA.nSHgmz = {}, kA.rlOLBG = !0;
  }
  const o = t[4477 + -14 * -381 + -9811], r = i + o, g = kA.nSHgmz[r];
  return g ? e = g : (kA.iYwivo === void 0 && (kA.iYwivo = !0), e = kA.jusriZ(e, n), kA.nSHgmz[r] = e), e;
}
function mn() {
  const i = ["b0ddJqvPWRVdLLOkycddLG", "xfVdSSk8mb/dVmomW6hcLmo+xSk5", "W51tkMRdSSorW6KQ", "x1ZdUmk/nxtcO8ovW7dcM8ob", "WR8cF3OZWPFcJ8k7", "WPOZW4ldL8oHWOhdRSoKxCoOW73cJ8kQ", "nmo4y8kpnG", "WPmdWR0SWQCMCmkPtuv6WQFcTa", "dr3dJSokW7meW5tcSqtdISk9", "W4uDiSoRxSo0oZxcQ8oIWQWDWOe", "WQzakr/dHCkJorRdLIxdII/dNG", "WOFdKwu", "WPihWRuRWQCMnCkWrf5JWQ8", "FI84WPbrW4BcNLnYW4SeW77cOW", "WPifWRyRWQaNCSk8DNvZWQFcHW", "WQldLCoMAvPJpWyoW6/cTrDz", "W6NdR0ZcJJxcQCoghW", "W7KKWQFcOxBcTw/cTrlcISkpW6BdTa", "WPFcJIGPhtFdKM4", "W4rzzmoid8oEbcDkqq4ElG"];
  return mn = function() {
    return i;
  }, mn();
}
async function qE(i) {
  const { iv: n, key: t, message: e } = await iQ(i);
  function A(g, a, I, C, s) {
    return kA(I - 545, s);
  }
  const o = await jE(t), r = {};
  return r[A(788, 794, 797, 792, "vfzu")] = o, r.iv = n, r[A(820, 818, 812, 808, "AujF") + "ge"] = e, r;
}
(function(i, n) {
  const t = i();
  function e(a, I, C, s, B) {
    return nA(C - 882, a);
  }
  function A(a, I, C, s, B) {
    return nA(I - 69, B);
  }
  function o(a, I, C, s, B) {
    return nA(B - 712, s);
  }
  function r(a, I, C, s, B) {
    return nA(C - 668, a);
  }
  function g(a, I, C, s, B) {
    return nA(I - 783, C);
  }
  for (; ; )
    try {
      if (-parseInt(r("qeqA", 826, 832, 830, 826)) / 1 + parseInt(e("9m88", 1077, 1072, 1067, 1079)) / 2 + -parseInt(r("fK(6", 828, 840, 854, 856)) / 3 * (parseInt(o(876, 887, 873, "X&zh", 878)) / 4) + -parseInt(o(884, 894, 900, "!$!g", 898)) / 5 + parseInt(A(245, 248, 232, 253, "An0^")) / 6 * (parseInt(o(882, 887, 910, "fK(6", 896)) / 7) + -parseInt(o(881, 889, 885, "ixw&", 874)) / 8 * (-parseInt(g(961, 964, "EvPC", 973, 976)) / 9) + parseInt(o(891, 888, 894, "7$eS", 888)) / 10 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(wn, 267522 + -2 * 28508);
function nA(i, n) {
  i = i - (7529 * 1 + 1797 + -9165);
  const t = wn();
  let e = t[i];
  if (nA.rAhRgk === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    nA.GSFjfm = a, nA.WXEEKn = {}, nA.rAhRgk = !0;
  }
  const o = t[6355 + -5 * 1271], r = i + o, g = nA.WXEEKn[r];
  return g ? e = g : (nA.sJZcbp === void 0 && (nA.sJZcbp = !0), e = nA.GSFjfm(e, n), nA.WXEEKn[r] = e), e;
}
function wn() {
  const i = ["qsWrjSoNFmkNsCkPW77dH8kt", "oCoCWP4", "WQLyj8oqpa", "m1NdQ8khWQyKW6/dNa", "q0RdOJGTBSkJsmoy", "fSoGW4X2WORdJmkkmr4HW4LF", "W7zHWOldP8oGWOFcHwldNmk/WRlcNq", "WR8tmrX9W7yew0W", "eaJcUrm", "WRRcKCoTh8kEFCk/W5/dVSoyWPHvbG", "jNtcGq", "bbjLdSoxWOS8bmkvkCo7i8oE", "fCkvy8kSW4a", "WObuW6n5W6abW53dKComW4G", "mmkHC8olW6NcK1VcVmkLzSoGhai", "WQxdRMdcJ3tcOq8", "W6pcOgCn", "W4H/jahdMh8NcNWRW5NdTZm", "xhRdGuzY", "WPLYW5y", "m8oDmCkwWRddJcG", "W6dcUanNfmkFrCk/WOGAW5e", "W7HMWOtdRSoGW7lcKxJdOSkRWRa", "WQpcMmk9W5BdUSkElmo9EKi", "zSoGmSkdWQ4", "WOLAW6D9WQbNWQVdGmoXW5P3vmkh", "cMJcHfZdHa", "WONdPmogugZcOSoZutpcP8kfW6i7", "hHriWRWm", "WR/dJ2pdP8kfW6FdQCk1oSoKW6xdIq", "DYmQcIHBDmoP"];
  return wn = function() {
    return i;
  }, wn();
}
async function u0(i) {
  const n = new Uint8Array(i);
  function t(a, I, C, s, B) {
    return nA(C - -700, s);
  }
  function e(a, I, C, s, B) {
    return nA(B - -167, I);
  }
  function A(a, I, C, s, B) {
    return nA(s - 603, a);
  }
  const o = await window[g(-566, -562, -563, "An0^") + "o"][g(-544, -558, -555, "hjc9") + "e"][A("lG^W", 782, 760, 774) + "t"](g(-571, -560, -548, "IsSf"), n);
  function r(a, I, C, s, B) {
    return nA(s - -215, B);
  }
  function g(a, I, C, s, B) {
    return nA(I - -745, s);
  }
  return Array[g(-591, -578, -572, "M*!t")](new Uint8Array(o))[r(-38, -29, -22, -24, "*TDM")]((a) => a[A("ouLD", 755, 763, 764) + e(6, "HdY6", 17, -14, 2)](678 * 7 + 1 * -5003 + 273)[g(-583, -568, -574, "ra(x") + t(-521, -536, -522, "NLo&")](2, "0"))[A("Q@f3", 769, 764, 778)]("");
}
function vA(i, n) {
  i = i - (-4 * -728 + -1254 + -1221);
  var t = Dn(), e = t[i];
  if (vA.QSnThG === void 0) {
    var A = function(I) {
      for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", B = "", E = 0, x, Q, l = 0; Q = I.charAt(l++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (var h = 0, f = s.length; h < f; h++)
        B += "%" + ("00" + s.charCodeAt(h).toString(16)).slice(-2);
      return decodeURIComponent(B);
    }, o = function(I, C) {
      var s = [], B = 0, E, x = "";
      I = A(I);
      var Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (var l = 0; l < I.length; l++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[Q] + s[B]) % 256]);
      return x;
    };
    vA.dsVxOE = o, vA.iSiQmV = {}, vA.QSnThG = !0;
  }
  var r = t[4 * 452 + 4847 + -6655], g = i + r, a = vA.iSiQmV[g];
  return a ? e = a : (vA.SfEquc === void 0 && (vA.SfEquc = !0), e = vA.dsVxOE(e, n), vA.iSiQmV[g] = e), e;
}
(function(i, n) {
  function t(I, C, s, B, E) {
    return vA(s - -932, I);
  }
  function e(I, C, s, B, E) {
    return vA(I - 863, B);
  }
  function A(I, C, s, B, E) {
    return vA(E - 29, s);
  }
  var o = i();
  function r(I, C, s, B, E) {
    return vA(E - -328, s);
  }
  function g(I, C, s, B, E) {
    return vA(C - 982, E);
  }
  for (; ; )
    try {
      var a = -parseInt(A(471, 481, "mVBh", 484, 480)) / 1 * (parseInt(A(470, 478, "xaBX", 488, 479)) / 2) + -parseInt(t("fH28", -498, -494, -493, -492)) / 3 * (parseInt(r(105, 117, "ZX*H", 109, 111)) / 4) + parseInt(e(1312, 1321, 1317, "^1vS", 1321)) / 5 + -parseInt(g(1426, 1436, 1433, 1445, "QNML")) / 6 * (parseInt(e(1305, 1301, 1300, "0L1Q", 1313)) / 7) + parseInt(e(1311, 1321, 1310, "@*sM", 1311)) / 8 + -parseInt(r(126, 118, "[H94", 117, 117)) / 9 + parseInt(g(1418, 1423, 1428, 1426, "@&*e")) / 10;
      if (a === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Dn, -653143 * -1 + -634376 + 195 * 2518);
function Dn() {
  var i = ["W7vAmfDJWRNdGmo+W6WuW4G", "W7vKWP4uCa7dNCkpWPG", "W5hcOG9dAd7dIJGLcd98qG", "kMjCm8kAWOyYlKRdUSkRcG8M", "WO7dHSkzWR5dpgftW47dLCoAW4ddPq", "W4v9egbpW5fWW4BdLSkJWQ8", "W7vJW6WRAWddJCkC", "W6nKW6HdfYNdV0u+W5RcRemq", "xbVcOZ3cHJFdTmo9W4OaW79gzSoA", "wrtcPJ7cJJhdSmkdW5eLW6T9BW", "w0ldRrWFFeP/W6xcN8oQdSkx", "hSkDdCkEC3f5AIBdKqFdPty", "WP92o8kQWOBdNNlcMb3dICkg", "hhWYxNRcOSovWRC", "WO7dGCkHW5bBw3vdoYT9W6CY", "WO5aW5O/lW5dWPBdUG", "WQhcNtVdH8kLwIFdUa", "jwewW5vEfCkfbG", "gxfWcJldU8kdWOHNamoHt3e", "tCk1hCoeW7xcLmkYAmkZWOmi"];
  return Dn = function() {
    return i;
  }, Dn();
}
async function zr(i) {
  const { Image: n } = Ue, t = await i.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const o = n.verify(A);
  if (o) throw w.fromError(o);
  const r = {};
  return r.bytes = e, n.create(r);
}
function h0(i) {
  const { VideoStream: n } = Ue, t = n.verify(i);
  if (t) throw w.fromError(t);
  return n.create(i);
}
async function f0(i) {
  const { v4: { Metadata: n } } = Ue, t = { ...i };
  t.platform = Ue.Platform.WEB, t.componentVersion = "8.0.4";
  const e = t, A = n.verify(e);
  if (A) throw w.fromError(A);
  return n.create(e);
}
async function p0(i) {
  const { Content: n } = Ue, { iv: t, key: e, message: A } = await qE(i), o = { token: new Uint8Array(e), iv: t, schemaVersion: IB, bytes: new Uint8Array(A) }, r = n.verify(o);
  if (r) throw w.fromError(r);
  const g = n.create(o);
  return n.encode(g).finish();
}
function y0(i) {
  const { Blob: n } = Ue.v4, t = n.verify(i);
  if (t) throw w.fromError(t);
  const e = n.create(i);
  return n.encode(e).finish();
}
async function VE(i, n, t) {
  const { architecture: e, fullVersionList: A, model: o, platform: r, platformVersion: g } = n ?? {};
  return { userAgent: i, architecture: e, platform: r, model: o, platformVersion: g, browserVersions: A?.map(({ brand: a, version: I }) => ({ name: a, version: I })), installationId: t };
}
async function ZE({ image: i, metadata: n, video: t }) {
  const { FaceContent: e } = Ue.v4, A = await zr(i), o = await f0(n), r = t && h0(t), g = {};
  g.streamH264 = r;
  const a = {};
  a.image = A, a.metadata = o, a.video = g;
  const I = a, C = e.verify(I);
  if (C) throw w.fromError(C);
  const s = e.create(I), B = {};
  return B.faceContent = s, y0(B);
}
async function zE(i) {
  const n = await ZE(i);
  return p0(n);
}
function XE({ controller: i, onCompleteInternal: n }) {
  const { captureMode: t, onComplete: e, sessionToken: A } = PI(), o = de(({ candidateSelectionImages: a, imageData: I, protoMessage: C, webMetadata: s }) => {
    GE(Js.FACE, a), e(I, C);
    const B = {};
    B.cameraProperties = s, n?.(B);
  }, [n, e]), r = de(({ fps: a, processedImage: I }, C) => {
    const s = {};
    s.code = I.instructionCode, s.isEscalated = I.isEscalated, HI(qA.INSTRUCTION_CHANGED, s), i && PQ(qA.DETECTION_CHANGED, I.detection, i.imageProcessor.validationService.getThresholds().confidence.min);
    const B = {};
    B.detection = I.detection, B.fps = a, B.image = C, B.isInCandidateSelection = I.isInCandidateSelection, B.invalidValidators = I.invalidValidators, HQ(qA.FACE_DETECTION, B);
  }, [i]), g = {};
  return g.captureMode = t, g.controller = i, g.createProtoMessage = zE, g.onCapture = o, g.onDetection = r, g.sessionToken = A, g.customEvent = qA, g.fallbackInstruction = aA.FACE_NOT_PRESENT, g.instructionCodeMap = aA, g.checkToInstructionCodeMap = _C, tE(g);
}
const $E = -2623 + 856 * 1 + 3767;
class Ax {
  duration;
  constructor(n) {
    this.duration = n ?? $E;
  }
  candidateSelectionTime = 0;
  candidateSelectionImages = [];
  isInCandidateSelection() {
    return this.candidateSelectionTime > 2416 * 1 + -2944 + 528;
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
    this.candidateSelectionTime = 2 * -1419 + 3084 + -246, this.candidateSelectionImages = [];
  }
}
const ex = async () => WebAssembly.validate(new Uint8Array([-1 * 2357 + 3604 + -1247, 800 * 10 + -2643 + -1052 * 5, 115, 9888 + 3700 * 2 + 41 * -419, 4185 + 1 * 7277 + -11461, 1283 + 689 * 1 + 2 * -986, 0, 577 * -17 + 8255 + 2 * 777, 797 * -8 + -5792 + 12169 * 1, -4 * 1133 + -107 + 4644, -1 * -1801 + -1 * -6537 + -8337, -1664 + -439 * -5 + -435, 4977 + -9 * 553, -8162 * 1 + -3329 + 2 * 5746, 123, 1393 + 10 * -625 + 4860, 4149 * 2 + 7278 + -15574 * 1, 1, -5 * -1149 + 3115 + 8860 * -1, 10, 10, 5863 * 1 + -548 * -11 + -10 * 1189, 8, 0, -1913 * -4 + 7941 + 647 * -24, -13449 + -1 * -13449, 253, 15, 1674 + -1231 * -7 + -10038, -11 * -776 + -4009 * 1 + -4429, 8476 + -5 * 1693]));
function tx() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(-555 * 5 + 6942 + -4151);
}
function ox() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const n = tx();
  return sessionStorage.setItem("dot-user-id", n), n;
}
function nx(i, n) {
  return n ? n === "user" ? "Front Camera" : "Back Camera" : i;
}
function ix(i) {
  return i > 70147 + -10147 * 1 ? ">1m" : "" + i;
}
function rx(i) {
  return i > -9059 + -2081 * -1 + -6988 * -1 ? ">10" : "" + i;
}
const ze = (i) => i ? i <= 450 * -1 + 9712 + -3087 * 3 ? Math.round(i * (-9025 + -2 * 398 + 9841 * 1)) / (-328 * -8 + 1 * -2784 + 180) : Math.round(i / (4402 + -2869 * 1 + 1483 * -1)) * 50 : 0;
function ax(i) {
  return i ? Math.round(i / (-1 * 2251 + 2918 + -1833 * -1)) * (1 * 3798 + 1220 * 4 + 2 * -3089) : 8465 + -4440 * 1 + -7 * 575;
}
const gx = (i) => i ? Math.round(i / (-9002 + -3919 * 1 + 12931 * 1)) * (-9245 + 339 * -23 + 17052) : -1 * -3505 + -4612 + 1107, sx = (i) => Math.round(i * 2) / (6 * -1031 + -2 * -685 + 4818);
async function Ix() {
  return await ex() ? Ua.SIMD : Ua.NO_SIMD;
}
class m0 {
  constructor(n, t, e, A, o, r, g, a, I, C, s, B, E) {
    this.cameraService = n, this.imageProcessor = t, this.createProtoMessage = e, this.onCaptureCallback = A, this.onDetectionCallback = o, this.checkToInstructionCodeMap = r, this.fallbackInstruction = g, this.samVersion = a, this.installationId = I, this.instructionEscalation = C, this.sessionToken = s, this.analytics = B, this.transactionCounting = E;
  }
  isRunning = !0;
  #A = Date.now();
  fpsOfAllImages = new Ur(1757 + 3 * 411 + -2960);
  async run() {
    for (; this.isRunning; )
      await this.iterate();
    return this;
  }
  stop() {
    this.isRunning = !1;
  }
  async trackCaptureProcess(n, t) {
    const e = Date.now(), A = no(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height;
    const r = { detection: n, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - this.#A, facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await Ix() };
    Ao() && Object.assign(r, { performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), isSystemStable: !nt() }), this.analytics?.trackCaptureProcess(r);
  }
  onDetection(n, t) {
    this.onDetectionCallback({ ...n, avgFps: Se(no(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: n, canvasImage: t, detection: e }) {
    const { metadata: A, ...o } = await this.prepareOnCaptureData(t, e);
    if (!this.isRunning) return;
    this.stop();
    const r = { ...o };
    r.webMetadata = A.web, r.candidateSelectionImages = n, this.onCaptureCallback(r);
  }
  async prepareOnCaptureData(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = await Zs(n), r = await this.prepareDetectionMetadata(n, t), g = this.cameraService.videoRecorder?.getRecording(), a = {};
    a.image = o, a.metadata = r, a.video = g;
    const I = await this.createProtoMessage(a), C = {};
    C.detection = t, C.imageResolution = A;
    const s = {};
    s.image = o, s.data = C;
    const B = s, E = {};
    return E.imageData = B, E.metadata = r, E.protoMessage = I, E;
  }
  async prepareDetectionMetadata(n, t) {
    const e = await this.cameraService.getCameraProperties(), A = tI(), o = await bB(), r = await this.installationId.get(), g = { ...e, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImageWithPosition: await this.getCroppedImageWithPosition(n, t), platformDetails: await VE(A, o, r) }, a = {};
    return a.sessionToken = this.sessionToken, a.web = g, a;
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = Xs(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), g = await yB(n, r), a = {};
    a.x = r.shiftX, a.y = r.shiftY;
    const I = a, C = await zr(g), s = {};
    return s.image = C, s.topLeftCorner = I, s;
  }
  collectAndEscalate(n) {
    if (!this.instructionEscalation) return !1;
    const t = n;
    return this.instructionEscalation.collect(t), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(t);
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
    await Ki(Math.max(Ta.max - n, Ta.min));
  }
}
class cx extends m0 {
  constructor(n, t, ...e) {
    super(...e), this.candidateSelection = n, this.instructionCodeMap = t;
  }
  lastImage = null;
  bestImage = null;
  async iterate() {
    if (this.candidateSelection.isCandidateSelectionDone()) {
      await this.onCandidateSelectionDone();
      return;
    }
    const n = this.cameraService.takePhoto(), t = await this.processTakenPhoto(n);
    this.candidateSelection.isInCandidateSelection() ? this.saveBetterImage(n, t) : this.tryInitCandidatePhase(n, t);
    const e = {};
    e.takenPhoto = n, e.imageProcessorResult = t;
    const A = this.getDetectionDetails(e);
    this.onDetection(A, n.image);
    const o = {};
    o.instructionCode = A.processedImage.instructionCode, o.isValid = t.isValid, o.image = n.image, o.detection = t.detection, this.lastImage = o, await this.sleep(A.detectionTime);
  }
  async processTakenPhoto(n) {
    try {
      return await this.imageProcessor.process(n);
    } catch (t) {
      throw t instanceof Error ? w.fromCameraError(t) : w.fromError(t);
    }
  }
  saveBetterImage(n, t) {
    if (!(this.bestImage && t.isValid && this.isNewImageBetter(this.bestImage.detection, t.detection))) return;
    const A = {};
    A.image = n.image, A.detection = t.detection;
    const o = A;
    this.bestImage = o, this.candidateSelection.newCandidate(o);
  }
  tryInitCandidatePhase(n, t) {
    if (!(this.lastImage?.isValid && t.isValid)) return;
    const A = {};
    A.image = n.image, A.detection = t.detection;
    const o = A;
    this.isNewImageBetter(this.lastImage.detection, o.detection) ? this.bestImage = o : this.bestImage = this.lastImage, this.candidateSelection.newCandidate(this.lastImage), this.candidateSelection.newCandidate(o), this.candidateSelection.candidateSelectionBegun();
  }
  async onCandidateSelectionDone() {
    const { detection: n, image: t } = this.bestImage || {};
    if (this.transactionCounting?.trackTransaction(), t && n) this.trackCaptureProcess(n, t), await this.onCapture({ canvasImage: t, detection: n, candidateSelectionImages: this.candidateSelection.getCandidateSelectionImages() });
    else throw new w("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: n, takenPhoto: t }) {
    const e = this.getDetectionEndTime(t.timestamp), A = Se(1e3 / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = t.image.width, o.height = t.image.height;
    const r = o, g = this.getInvalidInstructions(n.validationResult, this.checkToInstructionCodeMap), a = {};
    a.isNewDetectionValid = n.isValid, a.newInvalidInstruction = g[0];
    const I = this.getInstructionCode(a), C = this.collectAndEscalate(I);
    return { processedImage: { detection: n.detection, instructionCode: I, isEscalated: C, invalidValidators: g, isInCandidateSelection: this.candidateSelection.isInCandidateSelection() }, detectionTime: e, fps: A, avgFps: Se(no(this.fpsOfAllImages)), resolution: r };
  }
  getInstructionCode({ isNewDetectionValid: n, newInvalidInstruction: t }) {
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage?.isValid && n ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && n ? this.lastImage.instructionCode : t ?? this.fallbackInstruction;
  }
  isNewImageBetter(n, t) {
    return t.sharpness > n.sharpness;
  }
}
class w0 {
  cameraService;
  imageProcessor;
  instructionEscalation;
  createProtoMessage;
  onCaptureCallback;
  onDetectionCallback;
  checkToInstructionCodeMap;
  fallbackInstruction;
  samVersion;
  installationId;
  sessionToken;
  analytics;
  transactionCounting;
  setCameraService(n) {
    return this.cameraService = n, this;
  }
  setImageProcessor(n) {
    return this.imageProcessor = n, this;
  }
  setInstructionEscalation(n) {
    return this.instructionEscalation = n, this;
  }
  setCreateProtoMessage(n) {
    return this.createProtoMessage = n, this;
  }
  setOnCaptureCallback(n) {
    return this.onCaptureCallback = n, this;
  }
  setOnDetectionCallback(n) {
    return this.onDetectionCallback = n, this;
  }
  setCheckToInstructionCodeMap(n) {
    return this.checkToInstructionCodeMap = n, this;
  }
  setFallbackInstruction(n) {
    return this.fallbackInstruction = n, this;
  }
  setSamVersion(n) {
    return this.samVersion = n, this;
  }
  setInstallationId(n) {
    return this.installationId = n, this;
  }
  setSessionToken(n) {
    return this.sessionToken = n, this;
  }
  setAnalytics(n) {
    return this.analytics = n, this;
  }
  setTransactionCounting(n) {
    return this.transactionCounting = n, this;
  }
  reset() {
    return this.cameraService = void 0, this.imageProcessor = void 0, this.instructionEscalation = void 0, this.createProtoMessage = void 0, this.onCaptureCallback = void 0, this.onDetectionCallback = void 0, this.checkToInstructionCodeMap = void 0, this.fallbackInstruction = void 0, this.samVersion = void 0, this.installationId = void 0, this.sessionToken = void 0, this.analytics = void 0, this.transactionCounting = void 0, this;
  }
  validateDependencies() {
    if (!this.cameraService) throw new w("CameraService is required");
    if (!this.imageProcessor) throw new w("ImageProcessor is required");
    if (!this.createProtoMessage) throw new w("CreateProtoMessage is required");
    if (!this.onCaptureCallback) throw new w("OnCaptureCallback is required");
    if (!this.onDetectionCallback) throw new w("OnDetectionCallback is required");
    if (!this.checkToInstructionCodeMap) throw new w("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new w("FallbackInstruction is required");
    if (!this.samVersion) throw new w("SamVersion is required");
    if (!this.installationId) throw new w("InstallationId is required");
  }
}
class Cx extends w0 {
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
    return this.validateDependencies(), new cx(this.candidateSelection, this.instructionCodeMap, this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.installationId, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
class Bx extends m0 {
  #A = void 0;
  #e;
  constructor(...n) {
    super(...n), this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(n) {
    return n.detail?.["instruction"] ? Object.values($n).includes(n.detail?.["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    this.#e = (n) => {
      this.isRequestCaptureEventValid(n) && (this.#A = n.detail?.["instruction"]);
    }, document.addEventListener(Ja.REQUEST_CAPTURE, this.#e);
  }
  async iterate() {
    const n = this.cameraService.takePhoto(), t = await this.processTakenPhoto(n), e = this.getDetectionDetails(n, t);
    if (this.onDetection(e, n.image), this.isCaptureDone(t)) {
      await this.onCaptureDone(n.image, t.detection);
      return;
    }
    await this.sleep(e.detectionTime);
  }
  isCaptureDone(n) {
    return this.#A ? this.#A === $n.FIRST_FRAME ? !0 : this.#A === $n.FIRST_VALID_FRAME ? n.isValid : !1 : !1;
  }
  async processTakenPhoto(n) {
    try {
      return await this.imageProcessor.process(n);
    } catch (t) {
      throw t instanceof Error ? w.fromCameraError(t) : w.fromError(t);
    }
  }
  async onCaptureDone(n, t) {
    this.transactionCounting?.trackTransaction(), this.trackCaptureProcess(t, n);
    const e = {};
    e.canvasImage = n, e.detection = t, e.candidateSelectionImages = [], await this.onCapture(e), this.#A = void 0;
  }
  getDetectionDetails(n, t) {
    const e = this.getDetectionEndTime(n.timestamp), A = Se((1 * -613 + -9460 + -3 * -3691) / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = n.image.width, o.height = n.image.height;
    const r = o, g = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), a = this.getInstructionCode(g[-477 * 15 + -1 * -6349 + -2 * -403]), I = this.collectAndEscalate(a), C = {};
    return C.detection = t.detection, C.instructionCode = a, C.invalidValidators = g, C.isInCandidateSelection = !1, C.isEscalated = I, { processedImage: C, detectionTime: e, fps: A, avgFps: Se(no(this.fpsOfAllImages)), resolution: r };
  }
  getInstructionCode(n) {
    return n ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), this.#e && document.removeEventListener(Ja.REQUEST_CAPTURE, this.#e);
  }
}
class Qx extends w0 {
  build() {
    return this.validateDependencies(), new Bx(this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.installationId, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
class Ex {
  create(n, t) {
    const { analytics: e, cameraService: A, candidateSelection: o, checkToInstructionCodeMap: r, createProtoMessage: g, fallbackInstruction: a, imageProcessor: I, installationId: C, instructionCodeMap: s, instructionEscalation: B, onCaptureCallback: E, onDetectionCallback: x, samVersion: Q, sessionToken: l, transactionCounting: h } = t;
    switch (n) {
      case Yi.AUTO_CAPTURE:
        return new Cx().setCandidateSelection(o).setCheckToInstructionCodeMap(r).setFallbackInstruction(a).setInstructionCodeMap(s).setCameraService(A).setImageProcessor(I).setCreateProtoMessage(g).setOnCaptureCallback(E).setOnDetectionCallback(x).setSamVersion(Q).setInstallationId(C).setInstructionEscalation(B).setSessionToken(l).setAnalytics(e).setTransactionCounting(h).build();
      case Yi.WAIT_FOR_REQUEST:
        return new Qx().setCheckToInstructionCodeMap(r).setFallbackInstruction(a).setCameraService(A).setImageProcessor(I).setCreateProtoMessage(g).setOnCaptureCallback(E).setOnDetectionCallback(x).setSamVersion(Q).setInstallationId(C).setInstructionEscalation(B).setSessionToken(l).setAnalytics(e).setTransactionCounting(h).build();
      default:
        throw new w("Invalid detection type: " + n);
    }
  }
}
class xx {
  localStorageKey;
  constructor(n = EB) {
    this.localStorageKey = n;
  }
  generateUuid() {
    return crypto.randomUUID();
  }
  generateSha1(n) {
    const t = new TextEncoder(), e = t.encode(n);
    return u0(e);
  }
  async generateAndStoreDecoys() {
    for (const n of xB) {
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
const D0 = /* @__PURE__ */ Symbol("Comlink.proxy"), dx = /* @__PURE__ */ Symbol("Comlink.endpoint"), lx = /* @__PURE__ */ Symbol("Comlink.releaseProxy"), ui = /* @__PURE__ */ Symbol("Comlink.finalizer"), Po = /* @__PURE__ */ Symbol("Comlink.thrown"), b0 = (i) => typeof i == "object" && i !== null || typeof i == "function", ux = {
  canHandle: (i) => b0(i) && i[D0],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return S0(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), N0(i);
  }
}, hx = {
  canHandle: (i) => b0(i) && Po in i,
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
}, k0 = /* @__PURE__ */ new Map([
  ["proxy", ux],
  ["throw", hx]
]);
function fx(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function S0(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!fx(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: g } = Object.assign({ path: [] }, A.data), a = (A.data.argumentList || []).map(At);
    let I;
    try {
      const C = g.slice(0, -1).reduce((B, E) => B[E], i), s = g.reduce((B, E) => B[E], i);
      switch (r) {
        case "GET":
          I = s;
          break;
        case "SET":
          C[g.slice(-1)[0]] = At(A.data.value), I = !0;
          break;
        case "APPLY":
          I = s.apply(C, a);
          break;
        case "CONSTRUCT":
          {
            const B = new s(...a);
            I = bx(B);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: B, port2: E } = new MessageChannel();
            S0(i, E), I = Dx(B, [B]);
          }
          break;
        case "RELEASE":
          I = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      I = { value: C, [Po]: 0 };
    }
    Promise.resolve(I).catch((C) => ({ value: C, [Po]: 0 })).then((C) => {
      const [s, B] = Sn(C);
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), B), r === "RELEASE" && (n.removeEventListener("message", e), G0(n), ui in i && typeof i[ui] == "function" && i[ui]());
    }).catch((C) => {
      const [s, B] = Sn({
        value: new TypeError("Unserializable return value"),
        [Po]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), B);
    });
  }), n.start && n.start();
}
function px(i) {
  return i.constructor.name === "MessagePort";
}
function G0(i) {
  px(i) && i.close();
}
function N0(i, n) {
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
  }), pr(i, t, [], n);
}
function wo(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function R0(i) {
  return ut(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    G0(i);
  });
}
const bn = /* @__PURE__ */ new WeakMap(), kn = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (bn.get(i) || 0) - 1;
  bn.set(i, n), n === 0 && R0(i);
});
function yx(i, n) {
  const t = (bn.get(n) || 0) + 1;
  bn.set(n, t), kn && kn.register(i, n, i);
}
function mx(i) {
  kn && kn.unregister(i);
}
function pr(i, n, t = [], e = function() {
}) {
  let A = !1;
  const o = new Proxy(e, {
    get(r, g) {
      if (wo(A), g === lx)
        return () => {
          mx(o), R0(i), n.clear(), A = !0;
        };
      if (g === "then") {
        if (t.length === 0)
          return { then: () => o };
        const a = ut(i, n, {
          type: "GET",
          path: t.map((I) => I.toString())
        }).then(At);
        return a.then.bind(a);
      }
      return pr(i, n, [...t, g]);
    },
    set(r, g, a) {
      wo(A);
      const [I, C] = Sn(a);
      return ut(i, n, {
        type: "SET",
        path: [...t, g].map((s) => s.toString()),
        value: I
      }, C).then(At);
    },
    apply(r, g, a) {
      wo(A);
      const I = t[t.length - 1];
      if (I === dx)
        return ut(i, n, {
          type: "ENDPOINT"
        }).then(At);
      if (I === "bind")
        return pr(i, n, t.slice(0, -1));
      const [C, s] = Sg(a);
      return ut(i, n, {
        type: "APPLY",
        path: t.map((B) => B.toString()),
        argumentList: C
      }, s).then(At);
    },
    construct(r, g) {
      wo(A);
      const [a, I] = Sg(g);
      return ut(i, n, {
        type: "CONSTRUCT",
        path: t.map((C) => C.toString()),
        argumentList: a
      }, I).then(At);
    }
  });
  return yx(o, i), o;
}
function wx(i) {
  return Array.prototype.concat.apply([], i);
}
function Sg(i) {
  const n = i.map(Sn);
  return [n.map((t) => t[0]), wx(n.map((t) => t[1]))];
}
const v0 = /* @__PURE__ */ new WeakMap();
function Dx(i, n) {
  return v0.set(i, n), i;
}
function bx(i) {
  return Object.assign(i, { [D0]: !0 });
}
function Sn(i) {
  for (const [n, t] of k0)
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
    v0.get(i) || []
  ];
}
function At(i) {
  switch (i.type) {
    case "HANDLER":
      return k0.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function ut(i, n, t, e) {
  return new Promise((A) => {
    const o = kx();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function kx() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
class Sx {
  constructor(n, t, e, A, o, r, g, a) {
    this.imageProcessor = n, this.assetsDirectoryPath = t, this.compatibleSamVersion = e, this.candidateSelection = A, this.validationService = o, this.detectionFactory = r, this.installationId = g, this.instructionEscalation = a;
  }
  isDetectorInitialized = !1;
  samVersion = null;
  detection;
  getInstallationId() {
    return this.installationId;
  }
  async init() {
    this.verifyEnvironment(), await this.initDetector(this.assetsDirectoryPath);
  }
  verifyEnvironment() {
    nt() && this.handleEnvironmentNotSupported();
  }
  async initDetector(n) {
    await this.detector.initSamModule(location.href, n);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(n) {
    if (!n || !this.areVersionsCompatible(n))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new w("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = n;
  }
  handleEnvironmentNotSupported() {
    Jn.warn(`
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
  createDetection(n, t) {
    this.detection && this.detection.stop();
    const { analytics: e, cameraService: A, checkToInstructionCodeMap: o, createProtoMessage: r, fallbackInstruction: g, instructionCodeMap: a, onCaptureCallback: I, onDetectionCallback: C, sessionToken: s, transactionCounting: B } = t;
    this.detection = this.detectionFactory.create(n, { analytics: e, transactionCounting: B, cameraService: A, candidateSelection: this.candidateSelection, imageProcessor: this.imageProcessor, fallbackInstruction: g, instructionCodeMap: a, checkToInstructionCodeMap: o, sessionToken: s, samVersion: this.samVersion, createProtoMessage: r, onCaptureCallback: I, onDetectionCallback: C, installationId: this.installationId, instructionEscalation: this.instructionEscalation });
  }
  runDetectionLoop() {
    if (!this.detection) throw new w("Detection not initialized");
    this.detection.run();
  }
  stopDetectionLoop() {
    this.detection?.stop(), this.instructionEscalation?.reset(), this.imageProcessor.reset(), this.candidateSelection.reset();
  }
  setThresholds(n) {
    this.imageProcessor.validationService.thresholds = n;
  }
  setInstructionEscalation(n) {
    this.instructionEscalation = n;
  }
  areVersionsCompatible(n) {
    return n === this.compatibleSamVersion;
  }
  destroy() {
    this.detector.terminateSamModule();
  }
  static getWorkerPath(n, t) {
    return "" + t.replace(_s, "") + n;
  }
}
class Gx {
  imageProcessor;
  assetsDirectoryPath;
  instructionEscalation;
  compatibleSamVersion;
  validationService;
  detector;
  detectionFactory;
  candidateSelection;
  installationId;
  setImageProcessor(n) {
    return this.imageProcessor = n, this;
  }
  setAssetsDirectoryPath(n) {
    return this.assetsDirectoryPath = n, this;
  }
  setCompatibleSamVersion(n) {
    return this.compatibleSamVersion = n, this;
  }
  setInstructionEscalation(n) {
    return this.instructionEscalation = n, this;
  }
  setValidationService(n) {
    return this.validationService = n, this;
  }
  setDetector(n) {
    return this.detector = n, this;
  }
  setDetectionFactory(n) {
    return this.detectionFactory = n, this;
  }
  setCandidateSelection(n) {
    return this.candidateSelection = n, this;
  }
  setInstallationId(n) {
    return this.installationId = n, this;
  }
  validateDependencies() {
    if (!this.imageProcessor) throw new w("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new w("AssetsDirectoryPath is required");
    if (!this.detector) throw new w("Detector is required");
    if (!this.compatibleSamVersion) throw new w("CompatibleSamVersion is required");
    if (!this.validationService) throw new w("ValidationService is required");
    if (!this.detectionFactory) throw new w("DetectionFactory is required");
    if (!this.candidateSelection) throw new w("CandidateSelection is required");
    if (!this.installationId) throw new w("InstallationId is required");
  }
  reset() {
    return this.imageProcessor = void 0, this.assetsDirectoryPath = void 0, this.instructionEscalation = void 0, this.compatibleSamVersion = void 0, this.detector = void 0, this.validationService = void 0, this.detectionFactory = void 0, this.candidateSelection = void 0, this.installationId = void 0, this;
  }
}
class Nx {
  detectionRecord = [];
  imagesWithTimestampForDuplicateDetection = new Ur(sB);
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / BB, A = e / (2575 + 4 * 1204 + 7389 * -1), o = n.length / (-10303 + 10305 * 1), r = n.slice(o - A, o + A), g = await u0(r), a = {};
    a.imageHash = g, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(n) {
    return { data: Xs(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = Ks(n), r = this.validationService.validateDetectedObject(o, t);
    if (r.result.get("isPresent")) {
      const g = {};
      g.image = e, g.timestamp = A, this.collectImagesForDuplicateDetection(g);
    }
    return this.detectionRecord.push(n), { detection: o, validationResult: r.result, isValid: r.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class Rx {
  thresholds = null;
  getThresholds() {
    if (!this.thresholds) throw new w("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class F0 extends Sx {
  constructor(n, t, e, A, o, r, g, a, I) {
    super(A, o, r, g, e, n, a, I), this.detectionFactory = n, this.detector = t;
  }
  static _instance;
  detector;
  stopDetectionLoop() {
    super.stopDetectionLoop();
    var n = {};
    n.code = this.detection?.["fallbackInstruction"], HI(qA.INSTRUCTION_CHANGED, n, zC);
  }
  setAcceleration(n) {
    this.validationService.acceleration = n;
  }
}
class vx extends Gx {
  build() {
    return this.validateDependencies(), new F0(this.detectionFactory, this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.candidateSelection, this.installationId, this.instructionEscalation);
  }
}
class Fx extends Nx {
  className = "FaceImageProcessor";
  detector;
  validationService;
  constructor(n, t) {
    super(), this.detector = n, this.validationService = t;
  }
  optimizeImageBeforeDetection(n) {
    const t = An(n), e = zs(n, t);
    return super.optimizeImageBeforeDetection(e);
  }
  async process({ image: n, timestamp: t }) {
    const e = this.optimizeImageBeforeDetection(n), A = {};
    A.height = n.height, A.width = n.width;
    let o = await this.detector.detect(e.data, e.resolution, A);
    o = hE(o, An(n));
    const r = {};
    return r.detectedObject = o, r.image = n, r.imageData = e.data, r.timestamp = t, this.processDetectedObject(r);
  }
}
class Mx {
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
class TA {
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
const Wx = "isNotDim";
class Lx extends TA {
  #A;
  constructor(n, t) {
    super(Wx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const Ox = "isNotSmall";
class Jx extends TA {
  #A;
  constructor(n, t) {
    super(Ox, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const Ux = "isNotBright";
class Yx extends TA {
  #A;
  constructor(n, t) {
    super(Ux, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const Tx = "isPresent";
class Px extends TA {
  #A;
  constructor(n, t) {
    super(Tx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const Hx = "isSharp";
class _x extends TA {
  #A;
  constructor(n, t) {
    super(Hx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const Kx = "isLeftEyePresent";
class jx extends TA {
  #A;
  constructor(n, t) {
    super(Kx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const qx = "isMouthPresent";
class Vx extends TA {
  #A;
  constructor(n, t) {
    super(qx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const Zx = "isMouthScoreNotTooLow";
class zx extends TA {
  #A;
  constructor(n, t) {
    super(Zx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const Xx = "isMouthScoreNotTooHigh";
class $x extends TA {
  #A;
  constructor(n, t) {
    super(Xx, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const Ad = "isNotLarge";
class ed extends TA {
  #A;
  constructor(n, t) {
    super(Ad, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const td = "isNotPitched";
class Xr extends TA {
  #A;
  constructor(n, t) {
    super(td, Xr.calculatePitchAngleAccelerationThreshold(n)), this.#A = t;
  }
  static calculatePitchAngleAccelerationThreshold(n) {
    return aB * Math.sin(n * (Math.PI / (-36 * -261 + -2762 + 7 * -922)));
  }
  evaluate() {
    const { z: n } = this.#A || {};
    return n ? this.isValueBelowThreshold(Math.abs(n)) : !0;
  }
}
const od = "isRightEyePresent";
class nd extends TA {
  #A;
  constructor(n, t) {
    super(od, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const id = "isNotOutOfBounds";
class rd extends TA {
  #A;
  #e;
  constructor(n, t, e) {
    super(id, n), this.#A = t, this.#e = e;
  }
  evaluate() {
    const n = AI(this.#e, this.threshold, An(this.#e)), t = x0(this.#A, this.#e);
    return wB(t, n);
  }
}
class ad {
  static getFaceValidationInstance(n, t, e, A) {
    return new Mx([new Px(n.confidence.min, t.confidence), new jx(n.leftEye.confidence.min, t.leftEye.confidence), new nd(n.rightEye.confidence.min, t.rightEye.confidence), new Jx(n.size.min, t.faceSize), new ed(n.size.max, t.faceSize), new _x(n.sharpness.min, t.sharpness), new Lx(n.brightness.min, t.brightness), new Yx(n.brightness.max, t.brightness), new rd(n.edgeDistanceToImageShorterSideRatio.min, t, e), new Xr(n.devicePitchAngle.max, A), new Vx(n.mouth.confidence.min, t.mouth.confidence), new $x(n.mouth.status.max, t.mouth.status), new zx(n.mouth.status.min, t.mouth.status)]);
  }
}
class gd extends Rx {
  className = "FaceValidationService";
  acceleration = null;
  validateDetectedObject(n, t) {
    const e = ad.getFaceValidationInstance(this.getThresholds(), n, t, this.acceleration);
    return e.validate(), e;
  }
}
const sd = "SAM v1.50.5 for idcards", Id = "/dot-assets/magnifeye/dot-DJa1p3LA.js";
function cd() {
  const { handleError: i } = ue(), { acceleration: n } = XQ(), { assetsDirectoryPath: t } = PI(), { thresholds: e } = E0(), [A, o] = Z();
  J(() => {
    let g;
    (async () => {
      const I = F0.getWorkerPath(Id, t), C = {};
      C.type = "module";
      const s = new Worker(new URL(I, import.meta.url), C), B = N0(s);
      g = await new B();
      const E = new gd(), x = new Fx(g, E), Q = new Ex(), l = new Ax(), h = new xx(), f = new vx().setDetector(g).setValidationService(E).setImageProcessor(x).setCompatibleSamVersion(sd).setAssetsDirectoryPath(t).setDetectionFactory(Q).setCandidateSelection(l).setInstallationId(h).build();
      try {
        await f.init(), o(f);
      } catch (p) {
        if (p instanceof Error) {
          i(w.fromError(p));
          return;
        }
      }
    })();
  }, [i, t]), J(() => {
    A && A.setThresholds(e);
  }, [A, e]), J(() => {
    A && A.setAcceleration(n);
  }, [n, A]);
  const r = {};
  return r.controller = A, r;
}
function Cd({ onCompleteInternal: i }) {
  const { isCameraReady: n } = Os(), { sunfish: t } = go(), { controller: e } = cd(), { cameraResolution: A, detectionDetails: o, shouldCameraMirror: r, videoRef: g } = XE({
    controller: e,
    onCompleteInternal: i
  });
  return /* @__PURE__ */ b(WA, { children: /* @__PURE__ */ b(
    SE,
    {
      cameraResolution: A,
      detectionDetails: o,
      shouldMirror: r,
      children: /* @__PURE__ */ b(
        TC,
        {
          ref: g,
          $isImageMirror: r,
          $isVisible: t && n,
          autoPlay: !0,
          id: XC,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
async function Bd({ images: i, metadata: n, video: t }) {
  const { MagnifEyeLivenessContent: e } = Ue.v4, A = await Promise.all(i.map(async (E) => zr(E))), o = await f0(n), r = t && h0(t), g = {};
  g.streamH264 = r;
  const a = {};
  a.images = A, a.metadata = o, a.video = g;
  const I = a, C = e.verify(I);
  if (C) throw w.fromError(C);
  const s = e.create(I), B = {};
  return B.magnifeyeLivenessContent = s, y0(B);
}
async function Qd({ images: i, metadata: n, video: t }) {
  const e = i.map((r) => r.image), A = {};
  A.images = e, A.metadata = n, A.video = t;
  const o = await Bd(A);
  return p0(o);
}
function Ed(i, n) {
  const t = Ha(i.faceSize, og);
  return Ha(n.faceSize, og) < t;
}
function xd() {
  Jn.warn(`
╔════════════════════════════════════════════════════╗
║                                                    ║
║                       WARNING                      ║
║                                                    ║
║        MagnifEye Liveness component is             ║
║     DEPRECATED and will be discontinued in         ║
║               next major release.                  ║
║                                                    ║
║   Please migrate to Multi-Range Liveness instead.  ║
║                                                    ║
╚════════════════════════════════════════════════════╝
`);
}
const dd = (i, n) => {
  const t = gt(void 0), e = (o) => {
    if (!(!o.detail || i !== Ae.RUNNING || n !== SA.CLOSEUP)) {
      if (!t.value) {
        t.value = o.detail;
        return;
      }
      Ed(t.value.data.detection, o.detail.data.detection) && (t.value = o.detail);
    }
  };
  Vr(qA.FACE_DETECTION, e);
  const A = {};
  return A.middleImageBestCandidate = t, A;
}, ld = Lt.div`
  ${(i) => i.$isSecondStep && Rs`
      transition: all 1.5s ease-in-out;
      transform: translate(16%, 5%) scale(2);
      transition-delay: 1.5s;
    `}
`, ud = ({
  assetsDirectoryPath: i,
  onComplete: n,
  sessionToken: t
}) => {
  const { analytics: e } = nI(), { appState: A, handleAppStateChange: o, handleError: r, magnifEyePhase: g, setIsCameraReady: a, setMagnifEyePhase: I } = Os(), { cameraProperties: C, mergeCameraProperties: s } = gE(), { transactionCounting: B } = Tr(), E = oE(A), { cameraService: x } = xI(), Q = gt([]), { middleImageBestCandidate: l } = dd(A, g), h = $Q(pt.ANIMATION_END);
  function f(O) {
    Q.value = [...Q.value, O];
  }
  function p(O) {
    I(O), gr(pt.STATUS_CHANGED, { phase: O });
  }
  function m(O) {
    f(O), p(SA.MIDDLE), o(Ae.RUNNING);
  }
  function D() {
    p(SA.DISTANT), h.value = !1, Q.value = [], e?.reset();
  }
  $B(() => {
    h.value && p(SA.CLOSEUP);
  }), xE({
    onFaceTrackingLost: () => {
      o(Ae.WAITING), D(), E(() => o(Ae.RUNNING));
    },
    skipOutsideOfCandidateSelection: g !== SA.CLOSEUP
  }), iE({
    onBlur: () => {
      a(!1), o(Ae.LOADING), D();
    },
    onFocus: () => {
      a(!0), o(Ae.RUNNING);
    }
  }), VQ(pt.CONTROL, () => {
    D();
  });
  async function k(O) {
    if (l.value) {
      const X = { image: await Zs(l.value.image), data: l.value.data };
      f(X);
    }
    f(O), B?.trackLivenessTransaction();
    try {
      const z = {
        sessionToken: t,
        web: C.value
      }, X = await Qd({
        images: Q.value,
        metadata: z,
        video: x?.videoRecorder?.getRecording()
      }), [pA] = Q.value;
      n(pA, X), e?.trackLivenessProcess(Q.value);
    } catch (z) {
      z instanceof Error && r(w.fromError(z));
      return;
    }
    o(Ae.DONE);
  }
  const y = {
    [SA.DISTANT]: m,
    /**
     * we don't care about onPhotoTaken in MIDDLE phase, because faceConfidence = 1
     */
    [SA.MIDDLE]: () => {
    },
    [SA.CLOSEUP]: k
  }, U = hA(
    () => ({
      assetsDirectoryPath: i,
      magnifEyePhase: g,
      onComplete: y[g]
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i, g]
  );
  return /* @__PURE__ */ b(dE, { children: /* @__PURE__ */ b(ld, { $isSecondStep: g !== SA.DISTANT, children: /* @__PURE__ */ b(UQ, { configuration: U, children: /* @__PURE__ */ b(QE, { configurationThresholds: uE[g], children: /* @__PURE__ */ b(Cd, { onCompleteInternal: s }) }) }) }) });
};
function hd({ initAppState: i, onError: n }) {
  const [t, e] = Z(i), [A, o] = Z(), [r, g] = Z(!1), [a, I] = Z(!1), C = zo.Lower, s = DA(n);
  J(() => {
    s.current = n;
  }, [n]);
  const B = {};
  return B.redfin = C, B.appState = t, B.setAppState = e, B.error = A, B.setError = o, B.isCameraReady = r, B.setIsCameraReady = g, B.onErrorRef = s, B.firstRunningDone = a, B.setFirstRunningDone = I, B;
}
function fd(i, n) {
  return n !== SA.DISTANT ? Xt.HIDDEN : i !== Ae.RUNNING ? Xt.VISIBLE : Xt.VISIBLE_WITH_MASK;
}
function pd({
  onError: i
}) {
  const {
    appState: n,
    redfin: t,
    error: e,
    firstRunningDone: A,
    isCameraReady: o,
    onErrorRef: r,
    setAppState: g,
    setError: a,
    setFirstRunningDone: I,
    setIsCameraReady: C
  } = hd({
    initAppState: Ae.LOADING,
    onError: i
  }), [s, B] = Z(SA.DISTANT), E = fd(n, s), x = de(
    (l) => {
      gr(pt.STATUS_CHANGED, { state: Ae.ERROR, error: l }), C(!1), r.current(l), a(l), g(Ae.ERROR);
    },
    [C, r, a, g]
  ), Q = de(
    (l) => {
      g(l), gr(pt.STATUS_CHANGED, { state: l });
    },
    [g]
  );
  return {
    redfin: t,
    appState: n,
    magnifEyePhase: s,
    setMagnifEyePhase: B,
    freemiumOverlayState: E,
    isCameraReady: o,
    setIsCameraReady: C,
    handleAppStateChange: Q,
    handleError: x,
    error: e,
    firstRunningDone: A,
    setFirstRunningDone: I
  };
}
const Ho = {};
Ho.CAPTURE_FINISHED = "capture_finished", Ho.CAPTURE_STARTED = "capture_started", Ho.ESCALATION_TRIGGER = "escalation_trigger";
const $r = Ho, Me = {};
Me.PALM = "palm_auto_capture", Me.SMILE = "smile_liveness", Me.DOCUMENT = "document_auto_capture", Me.MAGNIFEYE = "magnifeye_liveness", Me.EYE_GAZE = "eye_gaze_liveness", Me.FACE = "face_auto_capture", Me.MULTI_RANGE = "multirange_liveness";
const yd = Me;
class md {
  apiKey;
  sessionId;
  distinctId;
  component;
  platform;
  versionName;
  applicationId;
  constructor() {
    this.platform = "web", this.versionName = dB(), this.applicationId = js(window.location.href);
  }
  async init({ apiKey: n, component: t, customer: e, sessionId: A }) {
    !n || !A || !e || !t || (this.apiKey = n, this.sessionId = A, this.distinctId = e, this.component = t, await this.sendEvent($r.CAPTURE_STARTED));
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
    return { platform: this.platform, dot_sdk_version_name: this.versionName, application_id: this.applicationId, component: this.component, session_id: this.sessionId, $useragent: tI() };
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
const hi = new md();
class wd {
  posthog = hi;
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
    const A = ox(), o = {};
    o.apiKey = n, o.component = this.component, o.customer = t, o.sessionId = A, hi.init(o);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    hi.sendEvent($r.ESCALATION_TRIGGER, e);
  }
  shouldReportAnalytics(n) {
    return n?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : n?.dotWeb?.features?.["realTimeAnalyticsReportingEnabled"] ?? !0;
  }
  normalizePerformanceCheckup(n) {
    return n < 1328 + 4 * -2456 + 8746 ? gx(n) : ze(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: rx(o || 4722 * -1 + -6678 + -475 * -24), firstHiccup: ix(ax(r)), optCheckDetails: e?.reduce((g, a) => "" + g + a.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(a.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(a.beforeOpt) + ";", "") };
  }
}
class Dd extends wd {
  captureProcessAnalytics = [];
  trackCaptureProcess(n) {
    this.captureProcessAnalytics.push(n);
  }
  reset() {
    this.captureProcessAnalytics = [];
  }
}
class bd extends Dd {
  constructor() {
    super(yd.MAGNIFEYE);
  }
  trackLivenessProcess(n) {
    if (!n.length || !this.captureProcessAnalytics.length) return;
    const [t, e, A] = n, [o, r] = this.captureProcessAnalytics, g = sx(o.averageFps + r?.averageFps) / 2, a = o.captureProcessDurationInMs, I = r?.["captureProcessDurationInMs"], C = a + I, s = this.parsePerformanceCheckup(o.optCheck, o.performanceCheckup), B = this.createSegmentation({ faceSizeDistant: ze(t.data.detection?.faceSize), faceSizeCloseup: ze(A?.data.detection?.faceSize), faceSizeMiddle: ze(e.data.detection?.faceSize), confidenceDistant: ze(t.data.detection?.confidence), confidenceCloseup: ze(A?.data.detection?.confidence), confidenceMiddle: ze(e.data.detection?.confidence), imageResolution: t.data?.["imageResolution"]?.width + "x" + t.data?.["imageResolution"]?.height, averageFps: g, closeUpPhaseDurationMs: I, distantPhaseDurationMs: a, camera: nx(o?.deviceName, o?.facingMode), instructionSet: o.instructionSet, isSystemStable: o.isSystemStable, durationMs: C, ...s });
    this.posthog.sendEvent($r.CAPTURE_FINISHED, B), this.reset();
  }
}
const kd = new bd(), Sd = ({ configuration: i }) => i ? (xd(), /* @__PURE__ */ b(MC, { target: i.styleTarget, children: /* @__PURE__ */ b(
  GB,
  {
    assetsDirectoryPath: i.assetsDirectoryPath,
    bramble: jr.getInstance(),
    children: /* @__PURE__ */ b(
      OB,
      {
        transactionCountingToken: i.transactionCountingToken,
        transactionType: qe.MAGNIFEYE,
        children: /* @__PURE__ */ b(
          JB,
          {
            value: pd({
              onError: i.onError
            }),
            children: /* @__PURE__ */ b(tQ, { analytics: kd, apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt", children: /* @__PURE__ */ b(UB, { children: /* @__PURE__ */ b(SQ, { cameraConfiguration: i.camera, children: /* @__PURE__ */ b(ud, { ...i }) }) }) })
          }
        )
      }
    )
  }
) })) : null;
K0(Sd, "x-dot-magnifeye-liveness", ["configuration"]);
