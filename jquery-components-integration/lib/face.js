var Zt, R, hg, pg, qe, Tr, yg, mg, wg, Cr, Ei, di, Dg, jt = {}, bg = [], Ec = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, zt = Array.isArray;
function Ie(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function Br(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function kA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > 25 * -291 + -2234 + 1 * 9511 && (r.children = arguments.length > 3 ? Zt.call(arguments, 1 * -2447 + 4461 + 1006 * -2) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] === void 0 && (r[o] = i.defaultProps[o]);
  return Yt(i, r, e, A, null);
}
function Yt(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++hg, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && R.vnode != null && R.vnode(r), r;
}
function dc() {
  var i = {};
  return i.current = null, i;
}
function vA(i) {
  return i.children;
}
function _A(i, n) {
  this.props = i, this.context = n;
}
function dt(i, n) {
  if (n == null) return i.__ ? dt(i.__, i.__i + (-5009 + 835 * 6)) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? dt(i) : null;
}
function kg(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = -135 + 7 * 444 + 2973 * -1; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return kg(i);
  }
}
function li(i) {
  (!i.__d && (i.__d = !0) && qe.push(i) && !Wo.__r++ || Tr != R.debounceRendering) && ((Tr = R.debounceRendering) || yg)(Wo);
}
function Wo() {
  for (var i, n, t, e, A, o, r, g = 2793 + -353 * -7 + -277 * 19; qe.length; ) qe.length > g && qe.sort(mg), i = qe.shift(), g = qe.length, i.__d && (t = void 0, e = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = Ie({}, e)).__v = e.__v + (756 + 1 * -755), R.vnode && R.vnode(t), Qr(n.__P, t, e, n.__n, n.__P.namespaceURI, 1 * 2031 + -1232 * -8 + -11855 * 1 & e.__u ? [A] : null, o, A ?? dt(e), !!(-673 * 2 + 4424 + -3046 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, Ng(o, t, r), e.__e = e.__ = null, t.__e != A && kg(t)));
  Wo.__r = 0;
}
function Sg(i, n, t, e, A, o, r, g, a, I, C) {
  var s, B, E, d, Q, x, f, h = e && e.__k || bg, p = n.length;
  for (a = lc(t, n, h, a, p), s = 1 * -6425 + 3908 * 1 + 2517; s < p; s++) (E = t.__k[s]) != null && (B = E.__i == -1 ? jt : h[E.__i] || jt, E.__i = s, x = Qr(i, E, B, A, o, r, g, a, I, C), d = E.__e, E.ref && B.ref != E.ref && (B.ref && Er(B.ref, null, E), C.push(E.ref, E.__c || d, E)), Q == null && d != null && (Q = d), (f = !!(4 & E.__u)) || B.__k === E.__k ? a = Gg(E, a, i, f) : typeof E.type == "function" && x !== void 0 ? a = x : d && (a = d.nextSibling), E.__u &= -7);
  return t.__e = Q, a;
}
function lc(i, n, t, e, A) {
  var o, r, g, a, I, C = t.length, s = C, B = 2676 + 1082 * 5 + 1 * -8086;
  for (i.__k = new Array(A), o = 3849 + -1283 * 3; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? r = i.__k[o] = Yt(null, r, null, null, null) : zt(r) ? r = i.__k[o] = Yt(vA, { children: r }, null, null, null) : r.constructor == null && r.__b > -7410 + -2396 * 2 + -2 * -6101 ? r = i.__k[o] = Yt(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : i.__k[o] = r, a = o + B, r.__ = i, r.__b = i.__b + 1, g = null, (I = r.__i = xc(r, t, a, s)) != -1 && (s--, (g = t[I]) && (g.__u |= 2)), g == null || g.__v == null ? (I == -1 && (A > C ? B-- : A < C && B++), typeof r.type != "function" && (r.__u |= 2 * 1217 + -616 + -2 * 907)) : I != a && (I == a - (-295 + -3 * -1804 + -5116) ? B-- : I == a + (-1284 * 2 + 7 * -424 + 5537 * 1) ? B++ : (I > a ? B-- : B++, r.__u |= -2256 + 4373 * -2 + 5503 * 2))) : i.__k[o] = null;
  if (s)
    for (o = 2676 * 3 + -3101 * 2 + -1826; o < C; o++) (g = t[o]) != null && (489 * 15 + 1 * 5359 + 2 * -6346 & g.__u) == 0 && (g.__e == e && (e = dt(g)), Fg(g, g));
  return e;
}
function Gg(i, n, t, e) {
  var A, o;
  if (typeof i.type == "function") {
    for (A = i.__k, o = 6 * -925 + -4730 * -1 + 820; A && o < A.length; o++) A[o] && (A[o].__ = i, n = Gg(A[o], n, t, e));
    return n;
  }
  i.__e != n && (e && (n && i.type && !n.parentNode && (n = dt(i)), t.insertBefore(i.__e, n || null)), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && 9064 + 7699 * -1 + -1357 == n.nodeType);
  return n;
}
function pe(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || (zt(i) ? i.some(function(t) {
    pe(t, n);
  }) : n.push(i)), n;
}
function xc(i, n, t, e) {
  var A, o, r, g = i.key, a = i.type, I = n[t], C = I != null && (2 & I.__u) == 0;
  if (I === null && g == null || C && g == I.key && a == I.type) return t;
  if (e > (C ? -6424 + 3721 * 2 + -1017 : 14234 + 11 * -1294)) {
    for (A = t - 1, o = t + 1; A >= 0 || o < n.length; ) if ((I = n[r = A >= 759 * 5 + 5028 + -8823 ? A-- : o++]) != null && -337 + -1 * -2591 + -2254 == (214 + 312 * 23 + -7388 * 1 & I.__u) && g == I.key && a == I.type) return r;
  }
  return -1;
}
function Pr(i, n, t) {
  n[-7355 + 17 * -296 + -4129 * -3] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || Ec.test(n) ? t : t + "px";
}
function io(i, n, t, e, A) {
  var o, r;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || Pr(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || Pr(i.style, n, t[n]);
    }
  else if (n[12447 + 27 * -461] == "o" && n[491 * -1 + -6733 + 7225] == "n") o = n != (n = n.replace(wg, "$1")), r = n.toLowerCase(), n = r in i || n == "onFocusOut" || n == "onFocusIn" ? r.slice(1999 * -2 + 848 + 3152) : n.slice(-1023 * -5 + 1018 * -9 + 4049), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = Cr, i.addEventListener(n, o ? di : Ei, o)) : i.removeEventListener(n, o ? di : Ei, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[-6418 + 19 * 338] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && 1438 * 4 + 4953 + -10704 == t ? "" : t));
  }
}
function Hr(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = Cr++;
      else if (n.t < t.u) return;
      return t(R.event ? R.event(n) : n);
    }
  };
}
function Qr(i, n, t, e, A, o, r, g, a, I) {
  var C, s, B, E, d, Q, x, f, h, p, D, b, S, m, Y, z, WA, yA = n.type;
  if (n.constructor != null) return null;
  822 + -2 * 347 & t.__u && (a = !!(5219 + -1 * -9069 + -14256 & t.__u), o = [g = n.__e = t.__e]), (C = R.__b) && C(n);
  A: if (typeof yA == "function") try {
    if (f = n.props, h = "prototype" in yA && yA.prototype.render, p = (C = yA.contextType) && e[C.__c], D = C ? p ? p.props.value : C.__ : e, t.__c ? x = (s = n.__c = t.__c).__ = s.__E : (h ? n.__c = s = new yA(f, D) : (n.__c = s = new _A(f, D), s.constructor = yA, s.render = fc), p && p.sub(s), s.state || (s.state = {}), s.__n = e, B = s.__d = !(-2122 * -1 + 1359 + 1 * -3481), s.__h = [], s._sb = []), h && s.__s == null && (s.__s = s.state), h && yA.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ie({}, s.__s)), Ie(s.__s, yA.getDerivedStateFromProps(f, s.__s))), E = s.props, d = s.state, s.__v = n, B) h && yA.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), h && s.componentDidMount != null && s.__h.push(s.componentDidMount);
    else {
      if (h && yA.getDerivedStateFromProps == null && f !== E && s.componentWillReceiveProps != null && s.componentWillReceiveProps(f, D), n.__v == t.__v || !s.__e && s.shouldComponentUpdate != null && !(7404 + 1241 * -1 + -6162) === s.shouldComponentUpdate(f, s.__s, D)) {
        for (n.__v != t.__v && (s.props = f, s.state = s.__s, s.__d = !(2691 + -10 * 269)), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(SA) {
          SA && (SA.__ = n);
        }), b = 4614 + -1 * -8069 + -12683; b < s._sb.length; b++) s.__h.push(s._sb[b]);
        s._sb = [], s.__h.length && r.push(s);
        break A;
      }
      s.componentWillUpdate != null && s.componentWillUpdate(f, s.__s, D), h && s.componentDidUpdate != null && s.__h.push(function() {
        s.componentDidUpdate(E, d, Q);
      });
    }
    if (s.context = D, s.props = f, s.__P = i, s.__e = !(-7175 + 7814 * -1 + 14990 * 1), S = R.__r, m = -3 * 1894 + -7877 + 13559, h) {
      for (s.state = s.__s, s.__d = !(-1 * -4685 + 9322 + -14006), S && S(n), C = s.render(s.props, s.state, s.context), Y = -1722 + 4729 * 2 + -7736; Y < s._sb.length; Y++) s.__h.push(s._sb[Y]);
      s._sb = [];
    } else do
      s.__d = !1, S && S(n), C = s.render(s.props, s.state, s.context), s.state = s.__s;
    while (s.__d && ++m < 25);
    s.state = s.__s, s.getChildContext != null && (e = Ie(Ie({}, e), s.getChildContext())), h && !B && s.getSnapshotBeforeUpdate != null && (Q = s.getSnapshotBeforeUpdate(E, d)), z = C, C != null && C.type === vA && C.key == null && (z = Rg(C.props.children)), g = Sg(i, zt(z) ? z : [z], n, t, e, A, o, r, g, a, I), s.base = n.__e, n.__u &= -161, s.__h.length && r.push(s), x && (s.__E = s.__ = null);
  } catch (SA) {
    if (n.__v = null, a || o != null)
      if (SA.then) {
        for (n.__u |= a ? -3539 + 3699 * 1 : 1 * 3287 + 1115 * 3 + -6504; g && 1 * 4049 + 3 * -1046 + -903 == g.nodeType && g.nextSibling; ) g = g.nextSibling;
        o[o.indexOf(g)] = null, n.__e = g;
      } else {
        for (WA = o.length; WA--; ) Br(o[WA]);
        xi(n);
      }
    else n.__e = t.__e, n.__k = t.__k, SA.then || xi(n);
    R.__e(SA, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : g = n.__e = uc(t.__e, n, t, e, A, o, r, a, I);
  return (C = R.diffed) && C(n), 9784 + -11 * 429 + -4937 & n.__u ? void 0 : g;
}
function xi(i) {
  i && i.__c && (i.__c.__e = !0), i && i.__k && i.__k.forEach(xi);
}
function Ng(i, n, t) {
  for (var e = 0; e < t.length; e++) Er(t[e], t[++e], t[++e]);
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
function Rg(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > -518 * -19 + -9634 * 1 + -208 ? i : zt(i) ? i.map(Rg) : Ie({}, i);
}
function uc(i, n, t, e, A, o, r, g, a) {
  var I, C, s, B, E, d, Q, x = t.props || jt, f = n.props, h = n.type;
  if (h == "svg" ? A = "http://www.w3.org/2000/svg" : h == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (I = 4731 * 1 + 7069 + -11800; I < o.length; I++) if ((E = o[I]) && "setAttribute" in E == !!h && (h ? E.localName == h : -1 * -5789 + -1640 + -4146 == E.nodeType)) {
      i = E, o[I] = null;
      break;
    }
  }
  if (i == null) {
    if (h == null) return document.createTextNode(f);
    i = document.createElementNS(A, h, f.is && f), g && (R.__m && R.__m(n, o), g = !1), o = null;
  }
  if (h == null) x === f || g && i.data == f || (i.data = f);
  else {
    if (o = o && Zt.call(i.childNodes), !g && o != null)
      for (x = {}, I = 0; I < i.attributes.length; I++) x[(E = i.attributes[I]).name] = E.value;
    for (I in x) if (E = x[I], I != "children") {
      if (I == "dangerouslySetInnerHTML") s = E;
      else if (!(I in f)) {
        if (I == "value" && "defaultValue" in f || I == "checked" && "defaultChecked" in f) continue;
        io(i, I, null, E, A);
      }
    }
    for (I in f) E = f[I], I == "children" ? B = E : I == "dangerouslySetInnerHTML" ? C = E : I == "value" ? d = E : I == "checked" ? Q = E : g && typeof E != "function" || x[I] === E || io(i, I, E, x[I], A);
    if (C) g || s && (C.__html == s.__html || C.__html == i.innerHTML) || (i.innerHTML = C.__html), n.__k = [];
    else if (s && (i.innerHTML = ""), Sg(n.type == "template" ? i.content : i, zt(B) ? B : [B], n, t, e, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[0] : t.__k && dt(t, -10 * 877 + -9572 + 18342), g, a), o != null)
      for (I = o.length; I--; ) Br(o[I]);
    g || (I = "value", h == "progress" && d == null ? i.removeAttribute("value") : d != null && (d !== i[I] || h == "progress" && !d || h == "option" && d != x[I]) && io(i, I, d, x[I], A), I = "checked", Q != null && Q != i[I] && io(i, I, Q, x[I], A));
  }
  return i;
}
function Er(i, n, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && n == null || (i.__u = i(n));
    } else i.current = n;
  } catch (A) {
    R.__e(A, t);
  }
}
function Fg(i, n, t) {
  var e, A;
  if (R.unmount && R.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || Er(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      R.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = 3886 + 1 * 9350 + -13236; A < e.length; A++) e[A] && Fg(e[A], n, t || typeof i.type != "function");
  t || Br(i.__e), i.__c = i.__ = i.__e = void 0;
}
function fc(i, n, t) {
  return this.constructor(i, t);
}
function We(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), R.__ && R.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], Qr(n, i = (!e && t || n).__k = kA(vA, null, [i]), A || jt, jt, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? Zt.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), Ng(o, i, r);
}
function dr(i, n) {
  We(i, n, dr);
}
function lr(i, n, t) {
  var e, A, o, r, g = Ie({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : g[o] = n[o] === void 0 && r != null ? r[o] : n[o];
  return arguments.length > 2 && (g.children = arguments.length > -14404 + 14407 * 1 ? Zt.call(arguments, 4659 * -2 + -2268 + 11588 * 1) : t), Yt(i.type, g, e || i.key, A || i.ref, null);
}
function Oe(i) {
  function n(t) {
    var e, A;
    return this.getChildContext || (e = /* @__PURE__ */ new Set(), (A = {})[n.__c] = this, this.getChildContext = function() {
      return A;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value != o.value && e.forEach(function(r) {
        r.__e = !0, li(r);
      });
    }, this.sub = function(o) {
      e.add(o);
      var r = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        e && e.delete(o), r && r.call(o);
      };
    }), t.children;
  }
  return n.__c = "__cC" + Dg++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
Zt = bg.slice, R = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (g) {
    i = g;
  }
  throw i;
} }, hg = -2027 * 3 + 8576 + 499 * -5, pg = function(i) {
  return i != null && i.constructor == null;
}, _A.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = Ie({}, this.state), typeof i == "function" && (i = i(Ie({}, t), this.props)), i && Ie(t, i), i != null && this.__v && (n && this._sb.push(n), li(this));
}, _A.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), li(this));
}, _A.prototype.render = vA, qe = [], yg = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, mg = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, Wo.__r = -13 * -370 + -3749 + 1 * -1061, wg = /(PointerCapture)$|Capture$/i, Cr = -9209 + -9209 * -1, Ei = Hr(!1), di = Hr(!0), Dg = 0;
function Lo() {
  return Lo = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }, Lo.apply(this, arguments);
}
function vg(i, n) {
  if (i == null) return {};
  var t, e, A = {}, o = Object.keys(i);
  for (e = 1537 + 1607 * 3 + 374 * -17; e < o.length; e++) n.indexOf(t = o[e]) >= 0 || (A[t] = i[t]);
  return A;
}
var hc = ["context", "children"], pc = ["useFragment"];
function yc(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = function() {
    wc.call(this, e);
  }, A.prototype.attributeChangedCallback = Dc, A.prototype.disconnectedCallback = bc, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, i.formAssociated && (A.formAssociated = !0), t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom ? this._vdom.props[o] : this._props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r);
      var g = typeof r;
      r != null && g !== "string" && g !== "boolean" && g !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A), A;
}
function mc(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = vg(i, hc);
  return lr(n, t);
}
function wc(i) {
  var n = {};
  n.detail = {}, n.bubbles = !0, n.cancelable = !0;
  var t = new CustomEvent("_preact", n);
  this.dispatchEvent(t), this._vdom = kA(mc, Lo({}, this._props, { context: t.detail.context }), Wg(this, this._vdomComponent, i)), (this.hasAttribute("hydrate") ? dr : We)(this._vdom, this._root);
}
function Mg(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Dc(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[Mg(i)] = t, this._vdom = lr(this._vdom, e), We(this._vdom, this._root);
  }
}
function bc() {
  We(this._vdom = null, this._root);
}
function Kr(i, n) {
  var t = this, e = i.useFragment, A = vg(i, pc);
  return kA(e ? vA : "slot", Lo({}, A, { ref: function(o) {
    o ? (t.ref = o, t._listener || (t._listener = function(r) {
      r.stopPropagation(), r.detail.context = n;
    }, o.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Wg(i, n, t) {
  if (6669 + 1111 * -6 === i.nodeType) return i.data;
  if (i.nodeType !== 1) return null;
  var e = [], A = {}, o = -4006 + 2003 * 2, r = i.attributes, g = i.childNodes;
  for (o = r.length; o--; ) r[o].name !== "slot" && (A[r[o].name] = r[o].value, A[Mg(r[o].name)] = r[o].value);
  for (o = g.length; o--; ) {
    var a = Wg(g[o], null, t), I = g[o].slot;
    I ? A[I] = kA(Kr, { name: I }, a) : e[o] = a;
  }
  var C = !(!t || !t.shadow), s = n ? kA(Kr, { useFragment: !C }, e) : e;
  return !C && n && (i.innerHTML = ""), kA(n || i.nodeName.toLowerCase(), A, s);
}
var kc = 0;
function w(i, n, t, e, A, o) {
  n || (n = {});
  var r, g, a = n;
  if ("ref" in a)
    for (g in a = {}, n) g == "ref" ? r = n[g] : a[g] = n[g];
  var I = {};
  I.type = i, I.props = a, I.key = t, I.ref = r, I.__k = null, I.__ = null, I.__b = 0, I.__e = null, I.__c = null, I.constructor = void 0, I.__v = --kc, I.__i = -1, I.__u = 0, I.__source = A, I.__self = o;
  var C = I;
  if (typeof i == "function" && (r = i.defaultProps))
    for (g in r) a[g] === void 0 && (a[g] = r[g]);
  return R.vnode && R.vnode(C), C;
}
var FA = function() {
  return FA = Object.assign || function(n) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, FA.apply(this, arguments);
};
function lt(i, n, t) {
  if (t || arguments.length === 2) for (var e = 0, A = n.length, o; e < A; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return i.concat(o || Array.prototype.slice.call(n));
}
function Sc(i) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = i(t)), n[t];
  };
}
var Gc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Nc = Sc(function(i) {
  return Gc.test(i) || i.charCodeAt(0) === 111 && i.charCodeAt(-467 * -5 + 480 + 2814 * -1) === 2 * -1186 + 9451 + -6969 && i.charCodeAt(-1013 * -5 + 1205 * -3 + -1448) < 91;
}), Le, J, Mn, _r, xt = 7496 + -311 * -19 + 1915 * -7, Lg = [], T = R, jr = T.__b, qr = T.__r, Vr = T.diffed, Zr = T.__c, zr = T.unmount, Xr = T.__;
function wt(i, n) {
  T.__h && T.__h(J, i, xt || n), xt = 0;
  var t = {};
  t.__ = [], t.__h = [];
  var e = J.__H || (J.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function tA(i) {
  return xt = 8873 + 293 * 1 + -9165, xr(Ug, i);
}
function xr(i, n, t) {
  var e = wt(Le++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : Ug(void 0, n), function(g) {
    var a = e.__N ? e.__N[0] : e.__[0], I = e.t(a, g);
    a !== I && (e.__N = [I, e.__[-7987 + 1 * -2126 + 13 * 778]], e.__c.setState({}));
  }], e.__c = J, !J.__f)) {
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
    J.__f = !0;
    var o = J.shouldComponentUpdate, r = J.componentWillUpdate;
    J.componentWillUpdate = function(g, a, I) {
      if (this.__e) {
        var C = o;
        o = void 0, A(g, a, I), o = C;
      }
      r && r.call(this, g, a, I);
    }, J.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function _(i, n) {
  var t = wt(Le++, 3);
  !T.__s && ur(t.__H, n) && (t.__ = i, t.u = n, J.__H.__h.push(t));
}
function Dt(i, n) {
  var t = wt(Le++, 4);
  !T.__s && ur(t.__H, n) && (t.__ = i, t.u = n, J.__h.push(t));
}
function jA(i) {
  return xt = 5, pA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function Og(i, n, t) {
  xt = -7169 * 1 + -8456 + 1421 * 11, Dt(function() {
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
function pA(i, n) {
  var t = wt(Le++, 7);
  return ur(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function ye(i, n) {
  return xt = 8, pA(function() {
    return i;
  }, n);
}
function Be(i) {
  var n = J.context[i.__c], t = wt(Le++, -6217 + -22 * -283);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(J)), n.props.value) : i.__;
}
function Oo(i, n) {
  T.useDebugValue && T.useDebugValue(n ? n(i) : i);
}
function Jg() {
  var i = wt(Le++, 11);
  if (!i.__) {
    for (var n = J.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [-5900 + -1 * -6317 + 1 * -417, 9484 * 1 + -1462 + -8022]);
    i.__ = "P" + t[15328 + 32 * -479] + "-" + t[-8494 + 5387 * 1 + 3108]++;
  }
  return i.__;
}
function Rc() {
  for (var i; i = Lg.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(lo), i.__H.__h.forEach(ui), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], T.__e(n, i.__v);
  }
}
T.__b = function(i) {
  J = null, jr && jr(i);
}, T.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), Xr && Xr(i, n);
}, T.__r = function(i) {
  qr && qr(i), Le = 9873 + 4 * 1001 + -13877;
  var n = (J = i.__c).__H;
  n && (Mn === J ? (n.__h = [], J.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(lo), n.__h.forEach(ui), n.__h = [], Le = 0)), Mn = J;
}, T.diffed = function(i) {
  Vr && Vr(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (Lg.push(n) !== 1 && _r === T.requestAnimationFrame || ((_r = T.requestAnimationFrame) || Fc)(Rc)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), Mn = J = null;
}, T.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(lo), t.__h = t.__h.filter(function(e) {
        return !e.__ || ui(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], T.__e(e, t.__v);
    }
  }), Zr && Zr(i, n);
}, T.unmount = function(i) {
  zr && zr(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      lo(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && T.__e(n, t.__v));
};
var $r = typeof requestAnimationFrame == "function";
function Fc(i) {
  var n, t = function() {
    clearTimeout(e), $r && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 35);
  $r && (n = requestAnimationFrame(t));
}
function lo(i) {
  var n = J, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), J = n;
}
function ui(i) {
  var n = J;
  i.__c = i.__(), J = n;
}
function ur(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function Ug(i, n) {
  return typeof n == "function" ? n(i) : n;
}
function Yg(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function fi(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function Tg(i, n) {
  var t = n(), e = tA({ t: { __: t, u: n } }), A = e[-949 * 7 + -4 * 1202 + -3817 * -3].t, o = e[-7575 + -2 * -3788];
  return Dt(function() {
    A.__ = t, A.u = n, Wn(A) && o({ t: A });
  }, [i, t, n]), _(function() {
    return Wn(A) && o({ t: A }), i(function() {
      Wn(A) && o({ t: A });
    });
  }, [i]), t;
}
function Wn(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (n !== 0 || (7561 + -2 * 3780) / n == (-1805 * 2 + 1815 + 4 * 449) / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function Pg(i) {
  i();
}
function Hg(i) {
  return i;
}
function Kg() {
  return [!1, Pg];
}
var _g = Dt;
function hi(i, n) {
  this.props = i, this.context = n;
}
function vc(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : fi(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, kA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e.type = i, e;
}
(hi.prototype = new _A()).isPureReactComponent = !0, hi.prototype.shouldComponentUpdate = function(i, n) {
  return fi(this.props, i) || fi(this.state, n);
};
var Aa = R.__b;
R.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), Aa && Aa(i);
};
var Mc = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 1 * -3405 + 5609 + 1707;
function jg(i) {
  function n(t) {
    var e = Yg({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = Mc, n.render = i, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var ea = function(i, n) {
  return i == null ? null : pe(pe(i).map(n));
}, Wc = { map: ea, forEach: ea, count: function(i) {
  return i ? pe(i).length : -9903 + -1 * -3617 + 6286;
}, only: function(i) {
  var n = pe(i);
  if (n.length !== 1) throw "Children.only";
  return n[-1 * -4208 + 9404 + -13612];
}, toArray: pe }, Lc = R.__e;
R.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  Lc(i, n, t, e);
};
var ta = R.unmount;
function qg(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = Yg({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return qg(e, n, t);
  })), i;
}
function Vg(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return Vg(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function xo() {
  this.__u = -9934 + 418 * 12 + 4918, this.o = null, this.__b = null;
}
function Zg(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function Oc(i) {
  var n, t, e, A = null;
  function o(r) {
    if (n || (n = i()).then(function(g) {
      g && (A = g.default || g), e = !0;
    }, function(g) {
      t = g, e = !0;
    }), t) throw t;
    if (!e) throw n;
    return A ? kA(A, r) : null;
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Mt() {
  this.i = null, this.l = null;
}
R.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && 32 & i.__u && (i.type = null), ta && ta(i);
}, (xo.prototype = new _A()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = Zg(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(g) : g());
  };
  t.__R = r;
  var g = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[-9138 + 5331 * 1 + 3807] = Vg(a, a.__c.__P, a.__c.__O);
      }
      var I;
      for (e.setState({ __a: e.__b = null }); I = e.o.pop(); ) I.forceUpdate();
    }
  };
  e.__u++ || 32 & n.__u || e.setState({ __a: e.__b = e.__v.__k[6272 + 7 * -896] }), i.then(r, r);
}, xo.prototype.componentWillUnmount = function() {
  this.o = [];
}, xo.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-5440 + -32 * -266 + -3072].__c;
      this.__v.__k[0] = qg(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && kA(vA, null, i.fallback);
  return A && (A.__u &= -33), [kA(vA, null, n.__a ? null : i.children), A];
};
var oa = function(i, n, t) {
  if (++t[5 * 1192 + -7590 + 1631] === t[2098 + 413 * -9 + -1 * -1619] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[3530 * 1 + -7121 + 3591] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > 2077 + 1037 * -2; ) t.pop()();
    if (t[89 + -1859 * -4 + -7524] < t[0]) break;
    i.i = t = t[6468 + 718 * -1 + 4 * -1437];
  }
};
function Jc(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function Uc(i) {
  var n = this, t = i.h;
  if (n.componentWillUnmount = function() {
    We(null, n.v), n.v = null, n.h = null;
  }, n.h && n.h !== t && n.componentWillUnmount(), !n.v) {
    for (var e = n.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var A = {};
    A.__m = e.__m, n.h = t, n.v = { nodeType: 1, parentNode: t, childNodes: [], __k: A, contains: function() {
      return !0;
    }, insertBefore: function(r, g) {
      this.childNodes.push(r), n.h.insertBefore(r, g);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> 1 * -9718 + -9390 + 19109, -2913 * 1 + -9336 + 12250), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, We(kA(Jc, o, i.__v), n.v);
}
function Yc(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = kA(Uc, t);
  return e.containerInfo = n, e;
}
(Mt.prototype = new _A()).__a = function(i) {
  var n = this, t = Zg(n.__v), e = n.l.get(i);
  return e[-5087 * 1 + -7250 + 12337]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), oa(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, Mt.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = pe(i.children);
  i.revealOrder && i.revealOrder[1108 * 6 + -323 * -1 + -6971] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [-12571 + -28 * -449, 5105 * -1 + 2911 + 1 * 2194, this.i]);
  return i.children;
}, Mt.prototype.componentDidUpdate = Mt.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    oa(i, t, n);
  });
};
var zg = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, Tc = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Pc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Hc = /[A-Z0-9]/g, Kc = typeof document < "u", _c = function(i) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function jc(i, n, t) {
  return n.__k == null && (n.textContent = ""), We(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function qc(i, n, t) {
  return dr(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
_A.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(_A.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var na = R.event;
function Vc() {
}
function Zc() {
  return this.cancelBubble;
}
function zc() {
  return this.defaultPrevented;
}
R.event = function(i) {
  return na && (i = na(i)), i.persist = Vc, i.isPropagationStopped = Zc, i.isDefaultPrevented = zc, i.nativeEvent = i;
};
var uo = {};
uo.enumerable = !1, uo.configurable = !0, uo.get = function() {
  return this.class;
};
var fr, Xc = uo, ia = R.vnode;
R.vnode = function(i) {
  typeof i.type == "string" && (function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var g = t[r];
      if (!(r === "value" && "defaultValue" in t && g == null || Kc && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var a = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && g === !0 ? g = "" : a === "translate" && g === "no" ? g = !1 : a[-2 * -3173 + -2458 * 1 + -2 * 1944] === "o" && a[397 + 17 * 575 + -10171] === "n" ? a === "ondoubleclick" ? r = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || _c(t.type) ? a === "onfocus" ? r = "onfocusin" : a === "onblur" ? r = "onfocusout" : Pc.test(r) && (r = a) : a = r = "oninput" : o && Tc.test(r) ? r = r.replace(Hc, "-$&").toLowerCase() : g === null && (g = void 0), a === "oninput" && A[r = a] && (r = "oninputCapture"), A[r] = g;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = pe(t.children).forEach(function(I) {
      I.props.selected = A.value.indexOf(I.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = pe(t.children).forEach(function(I) {
      I.props.selected = A.multiple ? A.defaultValue.indexOf(I.props.value) != -1 : A.defaultValue == I.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", Xc)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  })(i), i.$$typeof = zg, ia && ia(i);
};
var ra = R.__r;
R.__r = function(i) {
  ra && ra(i), fr = i.__c;
};
var aa = R.diffed;
R.diffed = function(i) {
  aa && aa(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), fr = null;
};
var cA = {};
cA.readContext = function(i) {
  return fr.__n[i.__c].props.value;
}, cA.useCallback = ye, cA.useContext = Be, cA.useDebugValue = Oo, cA.useDeferredValue = Hg, cA.useEffect = _, cA.useId = Jg, cA.useImperativeHandle = Og, cA.useInsertionEffect = _g, cA.useLayoutEffect = Dt, cA.useMemo = pA, cA.useReducer = xr, cA.useRef = jA, cA.useState = tA, cA.useSyncExternalStore = Tg, cA.useTransition = Kg;
var Xg = {};
Xg.current = cA;
var $g = {};
$g.ReactCurrentDispatcher = Xg;
var $c = $g;
function A0(i) {
  return kA.bind(null, i);
}
function fn(i) {
  return !!i && i.$$typeof === zg;
}
function e0(i) {
  return fn(i) && i.type === vA;
}
function t0(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function o0(i) {
  return fn(i) ? lr.apply(null, arguments) : i;
}
function n0(i) {
  return !!i.__k && (We(null, i), !0);
}
function i0(i) {
  return i && (i.base || -5152 + -5153 * -1 === i.nodeType && i) || null;
}
var r0 = function(i, n) {
  return i(n);
}, a0 = function(i, n) {
  return i(n);
}, g0 = vA, s0 = fn, tt = { useState: tA, useId: Jg, useReducer: xr, useEffect: _, useLayoutEffect: Dt, useInsertionEffect: _g, useTransition: Kg, useDeferredValue: Hg, useSyncExternalStore: Tg, startTransition: Pg, useRef: jA, useImperativeHandle: Og, useMemo: pA, useCallback: ye, useContext: Be, useDebugValue: Oo, version: "18.3.1", Children: Wc, render: jc, hydrate: qc, unmountComponentAtNode: n0, createPortal: Yc, createElement: kA, createContext: Oe, createFactory: A0, cloneElement: o0, createRef: dc, Fragment: vA, isValidElement: fn, isElement: s0, isFragment: e0, isMemo: t0, findDOMNode: i0, Component: _A, PureComponent: hi, memo: vc, forwardRef: jg, flushSync: a0, unstable_batchedUpdates: r0, StrictMode: g0, Suspense: xo, SuspenseList: Mt, lazy: Oc, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: $c };
function I0(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Ln, ga;
function c0() {
  return ga || (ga = 1, Ln = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), g = Object.keys(t);
    if (r.length !== g.length) return !1;
    for (var a = Object.prototype.hasOwnProperty.bind(t), I = -1 * 2182 + 1 * 7602 + -5420; I < r.length; I++) {
      var C = r[I];
      if (!a(C)) return !1;
      var s = n[C], B = t[C];
      if (o = e ? e.call(A, s, B, C) : void 0, o === !1 || o === void 0 && s !== B) return !1;
    }
    return !0;
  }), Ln;
}
var C0 = c0();
const B0 = /* @__PURE__ */ I0(C0);
var O = "-ms-", Tt = "-moz-", W = "-webkit-", As = "comm", hn = "rule", hr = "decl", Q0 = "@import", es = "@keyframes", E0 = "@layer", ts = Math.abs, pr = String.fromCharCode, pi = Object.assign;
function d0(i, n) {
  return gA(i, 9326 + -9326 * 1) ^ 859 * 8 + 6628 + -1035 * 13 ? (((n << -6176 + -3089 * -2 ^ gA(i, -1 * 1225 + -1 * 1021 + 2246)) << -14 * -359 + 3009 + 8033 * -1 ^ gA(i, 1)) << -8146 + 2037 * 4 ^ gA(i, -3798 + 293 * 19 + -1767 * 1)) << -9807 + 1 * 2729 + 7080 ^ gA(i, -6270 + 473 * 13 + 124) : 3160 + 5 * -632;
}
function os(i) {
  return i.trim();
}
function fe(i, n) {
  return (i = n.exec(i)) ? i[-4703 + 19 * -350 + 11353] : i;
}
function F(i, n, t) {
  return i.replace(n, t);
}
function fo(i, n, t) {
  return i.indexOf(n, t);
}
function gA(i, n) {
  return i.charCodeAt(n) | -3674 + -491 * -19 + -5655;
}
function ut(i, n, t) {
  return i.slice(n, t);
}
function se(i) {
  return i.length;
}
function ns(i) {
  return i.length;
}
function Wt(i, n) {
  return n.push(i), i;
}
function l0(i, n) {
  return i.map(n).join("");
}
function sa(i, n) {
  return i.filter(function(t) {
    return !fe(t, n);
  });
}
var pn = 8069 + 2 * -4034, ft = -2257 * 3 + 14 * 271 + -1 * -2978, is = 0, qA = 7 * -1207 + -9964 + -1 * -18413, Z = -1176 + -382 * 7 + 3850, bt = "";
function yn(i, n, t, e, A, o, r, g) {
  var a = {};
  return a.value = i, a.root = n, a.parent = t, a.type = e, a.props = A, a.children = o, a.line = pn, a.column = ft, a.length = r, a.return = "", a.siblings = g, a;
}
function Ne(i, n) {
  return pi(yn("", null, null, "", null, null, 6829 * -1 + 195 + 1 * 6634, i.siblings), i, { length: -i.length }, n);
}
function at(i) {
  for (; i.root; ) i = Ne(i.root, { children: [i] });
  Wt(i, i.siblings);
}
function x0() {
  return Z;
}
function u0() {
  return Z = qA > 6806 + -2909 * 3 + -1921 * -1 ? gA(bt, --qA) : -11619 + -3 * -3873, ft--, Z === 8341 + 1 * -8331 && (ft = -1 * -5373 + -5959 + 587, pn--), Z;
}
function $A() {
  return Z = qA < is ? gA(bt, qA++) : 2 * -1270 + 1 * 8817 + -6277 * 1, ft++, Z === 1377 + 4509 * 1 + -5876 && (ft = -315 * -23 + -5410 + -1834, pn++), Z;
}
function $e() {
  return gA(bt, qA);
}
function ho() {
  return qA;
}
function mn(i, n) {
  return ut(bt, i, n);
}
function yi(i) {
  switch (i) {
    case -3 * 3197 + -561 * 12 + 16323:
    case 9:
    case 9004 + -2 * 4497:
    case -4185 + 5 * 1299 + 2297 * -1:
    case 32:
      return 1125 + 3734 * 1 + -809 * 6;
    case -2139 + -3 * -724:
    case 4229 + -6 * -1601 + -13792 * 1:
    case 2833 + 2789 * -1:
    case -9917 + -1317 * -1 + 8647:
    case -8190 + -2 * -2855 + 1 * 2542:
    case -11233 + -869 * -13:
    case 4263 + 499 * 16 + -12121:
    case -1857 + -479 * -4:
    case 123:
    case 3236 * -3 + -510 * -11 + 4223:
      return -2571 + 5 * 515;
    case 4645 + -3 * 1529:
      return 8754 + -2009 * -4 + -1 * 16787;
    case 34:
    case 7508 * 1 + 1349 * -7 + 1974:
    case 2453 + -2 * -4513 + -41 * 279:
    case 2 * 4409 + 215 + -8942:
      return -7819 + -2 * -3326 + 1169;
    case 41:
    case 1 * 3721 + -1935 + -1693 * 1:
      return 1 * 4111 + -4583 + 1 * 473;
  }
  return -7613 + -1 * 1483 + -2274 * -4;
}
function f0(i) {
  return pn = ft = -9973 * 1 + 1440 + 8534, is = se(bt = i), qA = -9448 + -8247 * 1 + 17695, [];
}
function h0(i) {
  return bt = "", i;
}
function On(i) {
  return os(mn(qA - (-848 + -1 * 8434 + 9283), mi(i === -1518 * -2 + -6811 + -1 * -3866 ? i + (-2459 + -615 * -5 + -614) : i === 40 ? i + (-1 * 8143 + 2184 + 8 * 745) : i)));
}
function p0(i) {
  for (; (Z = $e()) && Z < -15273 + -3 * -5102; ) $A();
  return yi(i) > -15259 + -1 * -15261 || yi(Z) > 2766 * 1 + -895 + -1868 ? "" : " ";
}
function y0(i, n) {
  for (; --n && $A() && !(Z < 1 * -7197 + 954 + 3 * 2097 || Z > 282 * -9 + 1 * -1413 + -1 * -4053 || Z > 1 * -4817 + 3 * -3235 + 14579 && Z < -8791 * -1 + 6982 * 1 + -15708 || Z > 3872 * 1 + 8333 + -12135 && Z < 6187 + -870 * 7); ) ;
  return mn(i, ho() + (n < -8231 * 1 + -3323 + 11560 && $e() == 1010 + 859 * -7 + 5035 && $A() == -20 * -263 + 1 * -9894 + 1 * 4666));
}
function mi(i) {
  for (; $A(); ) switch (Z) {
    case i:
      return qA;
    case 1 * 8891 + 8466 + 1019 * -17:
    case 9563 + -6 * -313 + 2 * -5701:
      i !== -7829 * 1 + -837 + 8700 && i !== -3321 + 5 * 672 && mi(Z);
      break;
    case 708 + -2 * 334:
      i === 41 && mi(i);
      break;
    case 6521 + -3 * 2143:
      $A();
      break;
  }
  return qA;
}
function m0(i, n) {
  for (; $A() && i + Z !== -1390 * -5 + -5815 + -544 * 2 + 10; ) if (i + Z === 1607 + -1565 * 1 + (-3353 * 1 + -9768 + 13163) && $e() === -7 * -763 + -4113 + -1181) break;
  return "/*" + mn(n, qA - (6 * -1613 + -3 * -2333 + 4 * 670)) + "*" + pr(i === 613 * -14 + 3 * 2421 + 1366 * 1 ? i : $A());
}
function w0(i) {
  for (; !yi($e()); ) $A();
  return mn(i, qA);
}
function D0(i) {
  return h0(po("", null, null, null, [""], i = f0(i), -7 * -496 + -6130 + 2 * 1329, [5281 + -5281 * 1], i));
}
function po(i, n, t, e, A, o, r, g, a) {
  for (var I = 0, C = -1157 * 5 + 3044 + -2741 * -1, s = r, B = 7879 + 3 * -316 + -6931, E = -1 * -461 + -3140 + 2679, d = 8986 * -1 + -203 + 9189, Q = -1 * -694 + 477 + -1170, x = -1015 + -1016 * -1, f = -4817 * -2 + -5384 + -1 * 4249, h = 0, p = "", D = A, b = o, S = e, m = p; x; ) switch (d = h, h = $A()) {
    case -1633 + -417 * 13 + 7094:
      if (d != 2070 + 1 * -7572 + 5610 && gA(m, s - 1) == 9897 + -1173 * 6 + 2801 * -1) {
        fo(m += F(On(h), "&", "&\f"), "&\f", ts(I ? g[I - 1] : -4185 + -1 * -4185)) != -1 && (f = -1);
        break;
      }
    case -7589 * -1 + -681 * 7 + -2788:
    case -6100 + 1 * 9507 + 842 * -4:
    case 91:
      m += On(h);
      break;
    case 1918 * -5 + -3787 + 1 * 13386:
    case 10:
    case 13:
    case -329 * -9 + 325 + -3254 * 1:
      m += p0(d);
      break;
    case -4 * -1952 + 8921 + 1 * -16637:
      m += y0(ho() - (10312 + 3437 * -3), 7);
      continue;
    case 5833 + 314 * -4 + -4530:
      switch ($e()) {
        case 42:
        case -9915 + -9962 * -1:
          Wt(b0(m0($A(), ho()), n, t, a), a);
          break;
        default:
          m += "/";
      }
      break;
    case (-4174 + -4297 * -1) * Q:
      g[I++] = se(m) * f;
    case (1 * 547 + -3739 + 3317) * Q:
    case -1 * 1154 + 449 * 7 + -1930:
    case -17536 + -548 * -32:
      switch (h) {
        case -3133 + -1241 * -3 + -295 * 2:
        case -9909 + 2807 * -1 + -1 * -12841:
          x = 13 * -598 + 7327 + 447;
        case 2043 + -2638 * 2 + 4 * 823 + C:
          f == -1 && (m = F(m, /\f/g, "")), E > 3973 * -2 + 514 + 7432 && se(m) - s && Wt(E > -1 * 2885 + -15 * -465 + 1 * -4058 ? ca(m + ";", e, t, s - (-5841 + 1 * -1571 + 7413), a) : ca(F(m, " ", "") + ";", e, t, s - (365 * 21 + -3401 * -1 + -6 * 1844), a), a);
          break;
        case -4450 + -1677 * 5 + 4298 * 3:
          m += ";";
        default:
          if (Wt(S = Ia(m, n, t, I, C, A, g, p, D = [], b = [], s, o), o), h === 123)
            if (C === 3571 * -1 + -9378 + -23 * -563) po(m, n, S, S, D, o, s, g, b);
            else switch (B === -2620 + 293 * -23 + 9458 * 1 && gA(m, 3) === 5926 + 1 * -1867 + -3949 ? 2266 + 5 * -1982 + 1936 * 4 : B) {
              case 8008 + 1 * 589 + -8497:
              case -2480 + 1 * 2588:
              case 1 * -9421 + 4281 + 5249:
              case 7 * 667 + -8458 * 1 + 3904:
                po(i, S, S, e && Wt(Ia(i, S, S, 1483 * -1 + -3951 + -5434 * -1, -8 * -1007 + 8405 + -16461, A, g, p, A, D = [], s, b), b), A, b, s, g, e ? D : b);
                break;
              default:
                po(m, S, S, S, [""], b, 2446 + -8285 * -1 + -3577 * 3, g, b);
            }
      }
      I = C = E = 4679 * -1 + -2441 + 7120, Q = f = 5580 + -1 * 7043 + -366 * -4, p = m = "", s = r;
      break;
    case 1629 * 1 + -8405 + 6834:
      s = 467 * 2 + -1301 * -3 + -4836 + se(m), E = d;
    default:
      if (Q < -1 * -7859 + 8357 + -3 * 5405) {
        if (h == -4863 + 8417 * -1 + 1 * 13403) --Q;
        else if (h == -9224 + -664 * -3 + 7357 && Q++ == 9225 + -9225 * 1 && u0() == -9918 + -1 * -10043) continue;
      }
      switch (m += pr(h), h * Q) {
        case -5135 + -4 * -590 + 1 * 2813:
          f = C > 0 ? -5122 + -3523 * 1 + 8646 : (m += "\f", -1);
          break;
        case -1 * -2559 + 2603 * 1 + -5118:
          g[I++] = (se(m) - (5776 + -1 * 7376 + 1601)) * f, f = -1652 + 1 * 1653;
          break;
        case 64:
          $e() === 4967 * 1 + -2 * -1071 + -7064 && (m += On($A())), B = $e(), C = s = se(p = m += w0(ho())), h++;
          break;
        case 7655 + 2381 * -3 + -467 * 1:
          d === 3 * -2433 + 954 + 6390 && se(m) == -5406 + 1291 * -7 + 14445 && (Q = 0);
      }
  }
  return o;
}
function Ia(i, n, t, e, A, o, r, g, a, I, C, s) {
  for (var B = A - 1, E = A === 0 ? o : [""], d = ns(E), Q = 0, x = 1380 + 7 * 266 + -3242, f = 3882 + -647 * 6; Q < e; ++Q) for (var h = -2394 + 8649 * -1 + 3681 * 3, p = ut(i, B + (8276 + 1655 * -5), B = ts(x = r[Q])), D = i; h < d; ++h) (D = os(x > 8471 + -5 * 1013 + -3406 ? E[h] + " " + p : F(p, /&\f/g, E[h]))) && (a[f++] = D);
  return yn(i, n, t, A === 0 ? hn : g, a, I, C, s);
}
function b0(i, n, t, e) {
  return yn(i, n, t, As, pr(x0()), ut(i, -5809 + -5 * -1249 + 434 * -1, -2), -6 * 710 + -2520 + 6780, e);
}
function ca(i, n, t, e, A) {
  return yn(i, n, t, hr, ut(i, -2602 + -2602 * -1, e), ut(i, e + (3 * 673 + 3579 + -5597), -1), e, A);
}
function rs(i, n, t) {
  switch (d0(i, n)) {
    case -5243 * -1 + -8473 + 8333:
      return W + "print-" + i + i;
    case -2935 + 2168 * 4:
    case -10027 + -2 * -7114:
    case -1127 + -969 * 9 + -25 * -521:
    case -418 * -1 + 7568 + -4553:
    case 257 * 1 + 8537 + -7153:
    case 4457:
    case -1249 + 3217 * 3 + -5481:
    case -6272 * -1 + 1035 + -1735:
    case -2674 + 1 * 9138 + -108:
    case 5844:
    case -8599 + -17 * -365 + 1 * 5585:
    case 8769 + 12577 * -1 + -10453 * -1:
    case 4471 + -18 * -359 + -7928:
    case 6262 * 1 + -11848 * 1 + -1711 * -7:
    case -5386 + -502 * 1 + 11767:
    case 1044 * 2 + -1 * -4193 + -2 * 329:
    case 1 * 10589 + -518 * -7 + -8080:
    case 4599:
    case 4855:
    case -2196 + 2137 * 3:
    case 4855 + -1 * -1534:
    case 5109:
    case 12734 + 1 * -7369:
    case 4029 + 398 * 4:
    case -3529 + -13 * -566:
      return W + i + i;
    case -153 + -7 * -706:
      return Tt + i + i;
    case 5349:
    case -1773 + 1 * 6019:
    case -2 * 778 + 4643 + 1723:
    case 7 * -1205 + 1080 + -14323 * -1:
    case -1223 * -1 + -5220 + -3 * -2251:
      return W + i + Tt + i + O + i + i;
    case 5936:
      switch (gA(i, n + (-1 * -4701 + -8148 + -1729 * -2))) {
        case 1 * -7675 + -1033 * 4 + 11921:
          return W + i + O + F(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 5741 * 1 + -8884 * -1 + -14517:
          return W + i + O + F(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case -7985 + 9023 * -1 + 17053:
          return W + i + O + F(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 6828:
    case -1845 + 6113 * 1:
    case 16939 + -22 * 638:
      return W + i + O + i + i;
    case 8785 + -3181 * -3 + -12163:
      return W + i + O + "flex-" + i + i;
    case 7677 * 1 + 5762 + -8252:
      return W + i + F(i, /(\w+).+(:[^]+)/, W + "box-$1$2" + O + "flex-$1$2") + i;
    case -4961 + -1156 * -9:
      return W + i + O + "flex-item-" + F(i, /flex-|-self/g, "") + (fe(i, /flex-|baseline/) ? "" : O + "grid-row-" + F(i, /flex-|-self/g, "")) + i;
    case 4675:
      return W + i + O + "flex-line-pack" + F(i, /align-content|flex-|-self/g, "") + i;
    case -1607 * 3 + -364 * 29 + 20925:
      return W + i + O + F(i, "shrink", "negative") + i;
    case 5328 + -1 * -8780 + -8816:
      return W + i + O + F(i, "basis", "preferred-size") + i;
    case 13 * -922 + -7473 + 25519:
      return W + "box-" + F(i, "-grow", "") + W + i + O + F(i, "grow", "positive") + i;
    case 4554:
      return W + F(i, /([^-])(transform)/g, "$1" + W + "$2") + i;
    case 6187:
      return F(F(F(i, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), i, "") + i;
    case 5495:
    case -904 * 7 + 8076 + 2211:
      return F(i, /(image-set\([^]*)/, W + "$1$`$1");
    case 2466 + 2 * 1627 + 2 * -376:
      return F(F(i, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + O + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + W + i + i;
    case 4200:
      if (!fe(i, /flex-|baseline/)) return O + "grid-column-align" + ut(i, n) + i;
      break;
    case -5914 * -1 + 5946 + -662 * 14:
    case 4e3 * 1 + -4601 * -1 + -1 * 5241:
      return O + F(i, "template-", "") + i;
    case 8077 + 7097 * 1 + -10790:
    case -1372 + 364 * 9 + 1712:
      return t && t.some(function(e, A) {
        return n = A, fe(e.props, /grid-\w+-end/);
      }) ? ~fo(i + (t = t[n].value), "span", 6855 + 3 * -2285) ? i : O + F(i, "-start", "") + i + O + "grid-row-span:" + (~fo(t, "span", 0) ? fe(t, /\d+/) : +fe(t, /\d+/) - +fe(i, /\d+/)) + ";" : O + F(i, "-start", "") + i;
    case 4896:
    case -879 + 9599 * -1 + 14606:
      return t && t.some(function(e) {
        return fe(e.props, /grid-\w+-start/);
      }) ? i : O + F(F(i, "-end", "-span"), "span ", "") + i;
    case 1161 + 278 * 2 + 2378:
    case 3583:
    case -4605 * 2 + -6134 + 19412:
    case 2532:
      return F(i, /(.+)-inline(.+)/, W + "$1$2") + i;
    case 8894 + -3 * 1077 + 2453:
    case -11612 + -4259 * -3 + 5894:
    case 1102 * -3 + -1 * -6549 + 2510:
    case 5535:
    case -1 * -8597 + -5222 + -1 * -2070:
    case 743 * 1 + -3332 + -829 * -10:
    case 4933:
    case 4677:
    case 1 * 3201 + -4262 * 2 + -5428 * -2:
    case 5653 * -1 + 11 * 597 + 4875:
    case -7524 + 1887 * 1 + 2 * 5329:
    case 1 * -7817 + 8097 + 4485:
      if (se(i) - (2 * 647 + 9 * -979 + 7518) - n > -5145 + 4 * 2442 + -4617) switch (gA(i, n + (-448 + 449 * 1))) {
        case -2 * 4581 + 2831 * -2 + 14933:
          if (gA(i, n + 4) !== 45) break;
        case 237 + -2663 * -3 + -677 * 12:
          return F(i, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + Tt + (gA(i, n + 3) == 8129 * 1 + -1698 + -6323 ? "$3" : "$2-$3")) + i;
        case 115:
          return ~fo(i, "stretch", -3494 + -21 * 411 + 12125) ? rs(F(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case 2844 + -2308 * -1:
    case 6221 * 1 + 7301 + -7602:
      return F(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, g, a, I) {
        return O + A + ":" + o + I + (r ? O + A + "-span:" + (g ? a : +a - +o) + I : "") + i;
      });
    case 4949:
      if (gA(i, n + 6) === 6 * -1334 + -10 * 431 + -2487 * -5) return F(i, ":", ":" + W) + i;
      break;
    case 27 * -311 + 15 * -776 + 26481:
      switch (gA(i, gA(i, -1 * -5333 + 9863 + -2 * 7591) === -1397 * 5 + 7398 + -368 ? -7427 * -1 + 344 + -7753 : 19 * 389 + 1 * 9433 + -731 * 23)) {
        case 1 * -1851 + 8173 + -6202:
          return F(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + W + (gA(i, -1 * 2781 + -9724 + 12519) === 1 * -4473 + 1082 + -4 * -859 ? "inline-" : "") + "box$3$1" + W + "$2$3$1" + O + "$2box$3") + i;
        case 4 * 1362 + -1 * -878 + -22 * 283:
          return F(i, ":", ":" + O) + i;
      }
      break;
    case 11201 * -1 + -9123 + 26043:
    case -7167 + -1 * 2872 + 12686:
    case 8214 + 1 * -6079:
    case 3651 + -2189 * -1 + -1913:
    case -1376 + -3767 * -1:
      return F(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function Jo(i, n) {
  for (var t = "", e = -1 * 7870 + -2266 + 1267 * 8; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function k0(i, n, t, e) {
  switch (i.type) {
    case E0:
      if (i.children.length) break;
    case Q0:
    case hr:
      return i.return = i.return || i.value;
    case As:
      return "";
    case es:
      return i.return = i.value + "{" + Jo(i.children, e) + "}";
    case hn:
      if (!se(i.value = i.props.join(","))) return "";
  }
  return se(t = Jo(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function S0(i) {
  var n = ns(i);
  return function(t, e, A, o) {
    for (var r = "", g = 2 * 4967 + 1 * -7547 + -2387; g < n; g++) r += i[g](t, e, A, o) || "";
    return r;
  };
}
function G0(i) {
  return function(n) {
    n.root || (n = n.return) && i(n);
  };
}
function N0(i, n, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case hr:
        i.return = rs(i.value, i.length, t);
        return;
      case es:
        return Jo([Ne(i, { value: F(i.value, "@", "@" + W) })], e);
      case hn:
        if (i.length) return l0(t = i.props, function(A) {
          switch (fe(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              at(Ne(i, { props: [F(A, /:(read-\w+)/, ":" + Tt + "$1")] }));
              var o = {};
              o.props = [A], at(Ne(i, o)), pi(i, { props: sa(t, e) });
              break;
            case "::placeholder":
              at(Ne(i, { props: [F(A, /:(plac\w+)/, ":" + W + "input-$1")] })), at(Ne(i, { props: [F(A, /:(plac\w+)/, ":" + Tt + "$1")] })), at(Ne(i, { props: [F(A, /:(plac\w+)/, O + "input-$1")] }));
              var r = {};
              r.props = [A], at(Ne(i, r)), pi(i, { props: sa(t, e) });
              break;
          }
          return "";
        });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var R0 = N, M = {}, ot = typeof process < "u" && M !== void 0 && (M.REACT_APP_SC_ATTR || M.SC_ATTR) || "data-styled", as = "active", gs = "data-styled-version", wn = "6.1.19", yr = `/*!sc*/
`, Uo = typeof window < "u" && typeof document < "u", F0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && M !== void 0 && M.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && M.REACT_APP_SC_DISABLE_SPEEDY !== "" ? M.REACT_APP_SC_DISABLE_SPEEDY !== "false" && M.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && M !== void 0 && M.SC_DISABLE_SPEEDY !== void 0 && M.SC_DISABLE_SPEEDY !== "" ? M.SC_DISABLE_SPEEDY !== "false" && M.SC_DISABLE_SPEEDY : M.NODE_ENV !== "production"), Ca = /invalid hook call/i, ro = /* @__PURE__ */ new Set(), v0 = function(i, n) {
  if (M.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var g = [], a = 1; a < arguments.length; a++) g[a - (-3416 + -263 * -23 + -2632)] = arguments[a];
        Ca.test(r) ? (o = !1, ro.delete(e)) : A.apply(void (-9382 * 1 + -7228 + 16610), lt([r], g, !1));
      }, jA(), o && !ro.has(e) && (console.warn(e), ro.add(e));
    } catch (r) {
      Ca.test(r.message) && ro.delete(e);
    } finally {
      console.error = A;
    }
  }
}, Dn = Object.freeze([]), ht = Object.freeze({});
function M0(i, n, t) {
  return t === void 0 && (t = ht), i.theme !== t.theme && i.theme || n || t.theme;
}
var wi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), W0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, L0 = /(^-|-$)/g;
function Ba(i) {
  return i.replace(W0, "-").replace(L0, "");
}
var O0 = /(a)(d)/gi, ao = -1105 + -9887 * -1 + -8730 * 1, Qa = function(i) {
  return String.fromCharCode(i + (i > 25 ? -45 + 8055 * -1 + -2713 * -3 : 1213 * 1 + 2981 + -4097));
};
function Di(i) {
  var n, t = "";
  for (n = Math.abs(i); n > ao; n = n / ao | 0) t = Qa(n % ao) + t;
  return (Qa(n % ao) + t).replace(O0, "$1-$2");
}
var Jn, ss = 8429 * -1 + -1624 + 15434, Ve = function(i, n) {
  for (var t = n.length; t; ) i = (5982 + 445 * -1 + -5504) * i ^ n.charCodeAt(--t);
  return i;
}, Is = function(i) {
  return Ve(ss, i);
};
function J0(i) {
  return Di(Is(i) >>> -16 * -299 + 1721 * 1 + 1 * -6505);
}
function cs(i) {
  return M.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Un(i) {
  return typeof i == "string" && (M.NODE_ENV === "production" || i.charAt(-4176 + 1942 * -3 + -2 * -5001) === i.charAt(2673 * -2 + 232 + 5114).toLowerCase());
}
var HA = {};
HA.childContextTypes = !0, HA.contextType = !0, HA.contextTypes = !0, HA.defaultProps = !0, HA.displayName = !0, HA.getDefaultProps = !0, HA.getDerivedStateFromError = !0, HA.getDerivedStateFromProps = !0, HA.mixins = !0, HA.propTypes = !0, HA.type = !0;
var Re = {};
Re.name = !0, Re.length = !0, Re.prototype = !0, Re.caller = !0, Re.callee = !0, Re.arguments = !0, Re.arity = !0;
var Pe = {};
Pe.$$typeof = !0, Pe.compare = !0, Pe.defaultProps = !0, Pe.displayName = !0, Pe.propTypes = !0, Pe.type = !0;
var It = {};
It.$$typeof = !0, It.render = !0, It.defaultProps = !0, It.displayName = !0, It.propTypes = !0;
var Cs = typeof Symbol == "function" && Symbol.for, Bs = Cs ? /* @__PURE__ */ Symbol.for("react.memo") : 29722 + 139 * -673 + 123940, U0 = Cs ? /* @__PURE__ */ Symbol.for("react.forward_ref") : -14 * 6731 + -103217 * -1 + -741 * -69, Y0 = HA, T0 = Re, Qs = Pe, P0 = ((Jn = {})[U0] = It, Jn[Bs] = Qs, Jn);
function Ea(i) {
  return ("type" in (n = i) && n.type.$$typeof) === Bs ? Qs : "$$typeof" in i ? P0[i.$$typeof] : Y0;
  var n;
}
var H0 = Object.defineProperty, K0 = Object.getOwnPropertyNames, da = Object.getOwnPropertySymbols, _0 = Object.getOwnPropertyDescriptor, j0 = Object.getPrototypeOf, la = Object.prototype;
function Es(i, n, t) {
  if (typeof n != "string") {
    if (la) {
      var e = j0(n);
      e && e !== la && Es(i, e, t);
    }
    var A = K0(n);
    da && (A = A.concat(da(n)));
    for (var o = Ea(i), r = Ea(n), g = 2031 * -2 + 3667 + 395; g < A.length; ++g) {
      var a = A[g];
      if (!(a in T0 || t && t[a] || r && a in r || o && a in o)) {
        var I = _0(n, a);
        try {
          H0(i, a, I);
        } catch {
        }
      }
    }
  }
  return i;
}
function pt(i) {
  return typeof i == "function";
}
function mr(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function Xe(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function xa(i, n) {
  if (22 * -344 + -5763 + -13331 * -1 === i.length) return "";
  for (var t = i[-3661 + 2 * -2829 + 9319], e = -2323 + 1 * 4471 + 1 * -2147; e < i.length; e++) t += i[e];
  return t;
}
function yt(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function bi(i, n, t) {
  if (t === void 0 && (t = !1), !t && !yt(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = 690 * -14 + 4905 + 4755 * 1; e < n.length; e++) i[e] = bi(i[e], n[e]);
  else if (yt(n))
    for (var e in n) i[e] = bi(i[e], n[e]);
  return i;
}
function wr(i, n) {
  var t = {};
  t.value = n, Object.defineProperty(i, "toString", t);
}
var $ = {};
$[1] = `Cannot create styled-component for component: %s.

`, $[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, $[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, $[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, $[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, $[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, $[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', $[8] = `ThemeProvider: Please make your "theme" prop an object.

`, $[9] = "Missing document `<head>`\n\n", $[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, $[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, $[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", $[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, $[14] = `ThemeProvider: "theme" prop is required.

`, $[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", $[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, $[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, $[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var q0 = M.NODE_ENV !== "production" ? $ : {};
function V0() {
  for (var i = [], n = -5618 + -1 * -5618; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[7649 + -7649 * 1], e = [], A = -6 * -956 + 2349 + -8084, o = i.length; A < o; A += 7393 * -1 + 4587 + 2807) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function kt(i) {
  for (var n = [], t = 11 + -1981 * -1 + -1991; t < arguments.length; t++) n[t - 1] = arguments[t];
  return M.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > 12523 + 7 * -1789 ? " Args: ".concat(n.join(", ")) : "")) : new Error(V0.apply(void 0, lt([q0[i]], n, !1)).trim());
}
var Z0 = (function() {
  function i(n) {
    this.groupSizes = new Uint32Array(-2439 + 1 * 7951 + -5e3), this.length = 512, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = -15 * -278 + 2758 + 2 * -3464, e = 0; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= 1) < 0) throw kt(16, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = 0;
    }
    for (var g = this.indexOfGroup(n + (-3765 * -2 + -1 * -1486 + 15 * -601)), a = (r = 1342 * 1 + 6942 + -8284, t.length); r < a; r++) this.tag.insertRule(g, t[r]) && (this.groupSizes[n]++, g++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = 18958 + 1 * -18958;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || 1 * -4803 + -3757 + 8560 === this.groupSizes[n]) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(yr);
    return t;
  }, i;
})(), z0 = -5329 + 508 * -3 + 1 * 6854 << 30, yo = /* @__PURE__ */ new Map(), Yo = /* @__PURE__ */ new Map(), mo = 9133 * -1 + 6849 + 2285, go = function(i) {
  if (yo.has(i)) return yo.get(i);
  for (; Yo.has(mo); ) mo++;
  var n = mo++;
  if (M.NODE_ENV !== "production" && ((-13167 + 21 * 627 | n) < -11074 + -7 * -1582 || n > z0)) throw kt(3631 * -1 + 4435 + 1 * -788, "".concat(n));
  return yo.set(i, n), Yo.set(n, i), n;
}, X0 = function(i, n) {
  mo = n + (-2627 * -3 + -1403 + -6477), yo.set(i, n), Yo.set(n, i);
}, $0 = "style[".concat(ot, "][").concat(gs, '="').concat(wn, '"]'), AC = new RegExp("^".concat(ot, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), eC = function(i, n, t) {
  for (var e, A = t.split(","), o = -3657 + 1121 * 8 + -5311, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, tC = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(yr), A = [], o = -4 * -523 + 507 * 1 + -2599, r = e.length; o < r; o++) {
    var g = e[o].trim();
    if (g) {
      var a = g.match(AC);
      if (a) {
        var I = 0 | parseInt(a[1], 10), C = a[8576 + -1 * -8593 + -17167];
        -12559 + 12559 * 1 !== I && (X0(C, I), eC(i, C, a[-6968 + 3243 * 1 + -2 * -1864]), i.getTag().insertRules(I, A)), A.length = 7761 + 1542 * -1 + 2073 * -3;
      } else A.push(g);
    }
  }
}, ua = function(i) {
  for (var n = document.querySelectorAll($0), t = 0, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(ot) !== as && (tC(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function oC() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ds = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = (function(g) {
    var a = Array.from(g.querySelectorAll("style[".concat(ot, "]")));
    return a[a.length - (9093 + 1 * -9092)];
  })(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(ot, as), e.setAttribute(gs, wn);
  var r = oC();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, nC = (function() {
  function i(n) {
    this.element = ds(n), this.element.appendChild(document.createTextNode("")), this.sheet = (function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 0, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw kt(-5 * 324 + 4674 + -3037);
    })(this.element), this.length = 5339 + 281 * -19;
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
})(), iC = (function() {
  function i(n) {
    this.element = ds(n), this.nodes = this.element.childNodes, this.length = 228 + 343 * -20 + 6632;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= 5702 + 1 * 7628 + -13330) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, i;
})(), rC = (function() {
  function i(n) {
    this.rules = [], this.length = 4425 * 1 + -9147 * 1 + 4722;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, 0, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, 1), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
})(), fa = Uo, aC = { isServer: !Uo, useCSSOMInjection: !F0 }, ls = (function() {
  function i(n, t, e) {
    n === void 0 && (n = ht), t === void 0 && (t = {});
    var A = this;
    this.options = FA(FA({}, aC), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && Uo && fa && (fa = !1, ua(this)), wr(this, function() {
      return (function(o) {
        for (var r = o.getTag(), g = r.length, a = "", I = function(s) {
          var B = (function(f) {
            return Yo.get(f);
          })(s);
          if (B === void 0) return "continue";
          var E = o.names.get(B), d = r.getGroup(s);
          if (E === void 0 || !E.size || -1901 * -1 + -8326 + -257 * -25 === d.length) return "continue";
          var Q = "".concat(ot, ".g").concat(s, '[id="').concat(B, '"]'), x = "";
          E !== void 0 && E.forEach(function(f) {
            f.length > 0 && (x += "".concat(f, ","));
          }), a += "".concat(d).concat(Q, '{content:"').concat(x, '"}').concat(yr);
        }, C = 4109 + -4109 * 1; C < g; C++) I(C);
        return a;
      })(A);
    });
  }
  return i.registerId = function(n) {
    return go(n);
  }, i.prototype.rehydrate = function() {
    !this.server && Uo && ua(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i(FA(FA({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 7402 * -1 + 4863 + 2539) + (-8462 * 1 + -3520 + 11983);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = (function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new rC(A) : e ? new nC(A) : new iC(A);
    })(this.options), new Z0(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (go(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(go(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(go(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
})(), gC = /&/g, sC = /^\s*\/\/.*$/gm;
function xs(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = xs(t.children, n)), t;
  });
}
function us(i) {
  var n, t, e, A = i === void 0 ? ht : i, o = A.options, r = o === void 0 ? ht : o, g = A.plugins, a = g === void 0 ? Dn : g, I = function(B, E, d) {
    return d.startsWith(t) && d.endsWith(t) && d.replaceAll(t, "").length > 0 ? ".".concat(n) : B;
  }, C = a.slice();
  C.push(function(B) {
    B.type === hn && B.value.includes("&") && (B.props[0] = B.props[2379 * -1 + -1 * 9549 + 11928].replace(gC, t).replace(e, I));
  }), r.prefix && C.push(N0), C.push(k0);
  var s = function(B, E, d, Q) {
    E === void 0 && (E = ""), d === void 0 && (d = ""), Q === void 0 && (Q = "&"), n = Q, t = E, e = new RegExp("\\".concat(t, "\\b"), "g");
    var x = B.replace(sC, ""), f = D0(d || E ? "".concat(d, " ").concat(E, " { ").concat(x, " }") : x);
    r.namespace && (f = xs(f, r.namespace));
    var h = [];
    return Jo(f, S0(C.concat(G0(function(p) {
      return h.push(p);
    })))), h;
  };
  return s.hash = a.length ? a.reduce(function(B, E) {
    return E.name || kt(15), Ve(B, E.name);
  }, ss).toString() : "", s;
}
var IC = new ls(), ki = us(), Dr = tt.createContext({ shouldForwardProp: void 0, styleSheet: IC, stylis: ki });
Dr.Consumer;
var cC = tt.createContext(void 0);
function Si() {
  return Be(Dr);
}
function CC(i) {
  var n = tA(i.stylisPlugins), t = n[-7718 + -11 * -613 + 975], e = n[897 + 2 * -448], A = Si().styleSheet, o = pA(function() {
    var C = A, s = {};
    return s.useCSSOMInjection = !1, i.sheet ? C = i.sheet : i.target && (C = C.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (C = C.reconstructWithOptions(s)), C;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = pA(function() {
    var C = {};
    C.namespace = i.namespace, C.prefix = i.enableVendorPrefixes;
    var s = {};
    return s.options = C, s.plugins = t, us(s);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  _(function() {
    B0(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var g = pA(function() {
    var C = {};
    return C.shouldForwardProp = i.shouldForwardProp, C.styleSheet = o, C.stylis = r, C;
  }, [i.shouldForwardProp, o, r]), a = {};
  a.value = g;
  var I = {};
  return I.value = r, tt.createElement(Dr.Provider, a, tt.createElement(cC.Provider, I, i.children));
}
var ha = (function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = ki);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, wr(this, function() {
      throw kt(12, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = ki), this.name + n.hash;
  }, i;
})(), BC = function(i) {
  return i >= "A" && i <= "Z";
};
function pa(i) {
  for (var n = "", t = 731 * 9 + -5 * 405 + -4554; t < i.length; t++) {
    var e = i[t];
    if (-1854 + 1843 * 1 + 12 === t && e === "-" && i[0] === "-") return i;
    BC(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var fs = function(i) {
  return i == null || i === !1 || i === "";
}, hs = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !fs(o) && (Array.isArray(o) && o.isCss || pt(o) ? e.push("".concat(pa(A), ":"), o, ";") : yt(o) ? e.push.apply(e, lt(lt(["".concat(A, " {")], hs(o), !1), ["}"], !1)) : e.push("".concat(pa(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -1 * 745 + -5 * 1933 + 5 * 2082 === t || n in R0 || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function At(i, n, t, e) {
  if (fs(i)) return [];
  if (mr(i)) return [".".concat(i.styledComponentId)];
  if (pt(i)) {
    if (!pt(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return M.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof ha || yt(A) || A === null || console.error("".concat(cs(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), At(A, n, t, e);
  }
  var o;
  return i instanceof ha ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : yt(i) ? hs(i) : Array.isArray(i) ? Array.prototype.concat.apply(Dn, i.map(function(r) {
    return At(r, n, t, e);
  })) : [i.toString()];
}
function QC(i) {
  for (var n = 4243 + 1 * -4243; n < i.length; n += 1) {
    var t = i[n];
    if (pt(t) && !mr(t)) return !1;
  }
  return !0;
}
var EC = Is(wn), dC = (function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = M.NODE_ENV === "production" && (e === void 0 || e.isStatic) && QC(n), this.componentId = t, this.baseHash = Ve(EC, t), this.baseStyle = e, ls.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = Xe(A, this.staticRulesId);
      else {
        var o = xa(At(this.rules, n, t, e)), r = Di(Ve(this.baseHash, o) >>> 1844 + 2269 * -1 + 425);
        if (!t.hasNameForId(this.componentId, r)) {
          var g = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, g);
        }
        A = Xe(A, r), this.staticRulesId = r;
      }
    else {
      for (var a = Ve(this.baseHash, e.hash), I = "", C = 1513 * 2 + 61 + -9 * 343; C < this.rules.length; C++) {
        var s = this.rules[C];
        if (typeof s == "string") I += s, M.NODE_ENV !== "production" && (a = Ve(a, s));
        else if (s) {
          var B = xa(At(s, n, t, e));
          a = Ve(a, B + C), I += B;
        }
      }
      if (I) {
        var E = Di(a >>> 0);
        t.hasNameForId(this.componentId, E) || t.insertRules(this.componentId, E, e(I, ".".concat(E), void 0, this.componentId)), A = Xe(A, E);
      }
    }
    return A;
  }, i;
})(), ps = tt.createContext(void 0);
ps.Consumer;
var Yn = {}, ya = /* @__PURE__ */ new Set();
function lC(i, n, t) {
  var e = mr(i), A = i, o = !Un(i), r = n.attrs, g = r === void 0 ? Dn : r, a = n.componentId, I = a === void 0 ? (function(b, S) {
    var m = typeof b != "string" ? "sc" : Ba(b);
    Yn[m] = (Yn[m] || -5382 + -11 * 593 + -2381 * -5) + (-4 * 626 + -2700 + -1735 * -3);
    var Y = "".concat(m, "-").concat(J0(wn + m + Yn[m]));
    return S ? "".concat(S, "-").concat(Y) : Y;
  })(n.displayName, n.parentComponentId) : a, C = n.displayName, s = C === void 0 ? (function(b) {
    return Un(b) ? "styled.".concat(b) : "Styled(".concat(cs(b), ")");
  })(i) : C, B = n.displayName && n.componentId ? "".concat(Ba(n.displayName), "-").concat(n.componentId) : n.componentId || I, E = e && A.attrs ? A.attrs.concat(g).filter(Boolean) : g, d = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var Q = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var x = n.shouldForwardProp;
      d = function(b, S) {
        return Q(b, S) && x(b, S);
      };
    } else d = Q;
  }
  var f = new dC(t, B, e ? A.componentStyle : void 0);
  function h(b, S) {
    return (function(m, Y, z) {
      var WA = m.attrs, yA = m.componentStyle, SA = m.defaultProps, X = m.foldedComponentIds, eo = m.styledComponentId, Cc = m.target, Bc = tt.useContext(ps), Qc = Si(), Gn = m.shouldForwardProp || Qc.shouldForwardProp;
      M.NODE_ENV !== "production" && Oo(eo);
      var Yr = M0(Y, Bc, SA) || ht, Ee = (function(to, Nt, oo) {
        var rt = {};
        rt.className = void 0, rt.theme = oo;
        for (var Fn, Je = FA(FA({}, Nt), rt), vn = -7454 + -7454 * -1; vn < to.length; vn += 1 * -686 + 1321 + -634) {
          var no = pt(Fn = to[vn]) ? Fn(Je) : Fn;
          for (var we in no) Je[we] = we === "className" ? Xe(Je[we], no[we]) : we === "style" ? FA(FA({}, Je[we]), no[we]) : no[we];
        }
        return Nt.className && (Je.className = Xe(Je.className, Nt.className)), Je;
      })(WA, Y, Yr), St = Ee.as || Cc, Gt = {};
      for (var TA in Ee) Ee[TA] === void 0 || TA[0] === "$" || TA === "as" || TA === "theme" && Ee.theme === Yr || (TA === "forwardedAs" ? Gt.as = Ee.forwardedAs : Gn && !Gn(TA, St) || (Gt[TA] = Ee[TA], Gn || M.NODE_ENV !== "development" || Nc(TA) || ya.has(TA) || !wi.has(St) || (ya.add(TA), console.warn('styled-components: it looks like an unknown prop "'.concat(TA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Nn = (function(to, Nt) {
        var oo = Si(), rt = to.generateAndInjectStyles(Nt, oo.styleSheet, oo.stylis);
        return M.NODE_ENV !== "production" && Oo(rt), rt;
      })(yA, Ee);
      M.NODE_ENV !== "production" && m.warnTooManyClasses && m.warnTooManyClasses(Nn);
      var Rn = Xe(X, eo);
      return Nn && (Rn += " " + Nn), Ee.className && (Rn += " " + Ee.className), Gt[Un(St) && !wi.has(St) ? "class" : "className"] = Rn, z && (Gt.ref = z), kA(St, Gt);
    })(p, b, S);
  }
  h.displayName = s;
  var p = tt.forwardRef(h), D = {};
  return D.attrs = !0, D.componentStyle = !0, D.displayName = !0, D.foldedComponentIds = !0, D.shouldForwardProp = !0, D.styledComponentId = !0, D.target = !0, p.attrs = E, p.componentStyle = f, p.displayName = s, p.shouldForwardProp = d, p.foldedComponentIds = e ? Xe(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = B, p.target = e ? A.target : i, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = e ? (function(S) {
      for (var m = [], Y = 2049 * 1 + 3373 * -2 + 4698; Y < arguments.length; Y++) m[Y - (-5 * -259 + 1 * 5361 + -6655)] = arguments[Y];
      for (var z = -4902 + -258 * -19, WA = m; z < WA.length; z++) bi(S, WA[z], !0);
      return S;
    })({}, A.defaultProps, b) : b;
  } }), M.NODE_ENV !== "production" && (v0(s, B), p.warnTooManyClasses = /* @__PURE__ */ (function(b, S) {
    var m = {}, Y = !1;
    return function(z) {
      if (!Y && (m[z] = !0, Object.keys(m).length >= -467 + 2543 * -1 + 3210)) {
        var WA = S ? ' with the id of "'.concat(S, '"') : "";
        console.warn("Over ".concat(599 * -9 + -1423 + 7014, " classes were generated for component ").concat(b).concat(WA, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), Y = !0, m = {};
      }
    };
  })(s, B)), wr(p, function() {
    return ".".concat(p.styledComponentId);
  }), o && Es(p, i, D), p;
}
function ma(i, n) {
  for (var t = [i[2514 * -2 + 9751 + -4723]], e = 860 * 3 + 4691 * 2 + -11962, A = n.length; e < A; e += 5 * -1664 + -690 + -9011 * -1) t.push(n[e], i[e + (-1149 * -5 + 2658 + -8402 * 1)]);
  return t;
}
var wa = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function xC(i) {
  for (var n = [], t = 3485 + -2 * 4702 + -16 * -370; t < arguments.length; t++) n[t - (-1402 * 1 + 7747 + 3172 * -2)] = arguments[t];
  if (pt(i) || yt(i)) return wa(At(ma(Dn, lt([i], n, !0))));
  var e = i;
  return -2619 * -2 + 4 * -2431 + -2 * -2243 === n.length && 1699 * 2 + 3814 + -1 * 7211 === e.length && typeof e[2554 + -1 * 2554] == "string" ? At(e) : wa(At(ma(e, n)));
}
function Gi(i, n, t) {
  if (t === void 0 && (t = ht), !n) throw kt(-679 * -5 + -4005 + 611, n);
  var e = function(A) {
    for (var o = [], r = -2062 * -4 + -5784 + 821 * -3; r < arguments.length; r++) o[r - (-7034 * -1 + -5105 + -1928)] = arguments[r];
    return i(n, t, xC.apply(void 0, lt([A], o, !1)));
  };
  return e.attrs = function(A) {
    return Gi(i, n, FA(FA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Gi(i, n, FA(FA({}, t), A));
  }, e;
}
var ys = function(i) {
  return Gi(lC, i);
}, Xt = ys;
wi.forEach(function(i) {
  Xt[i] = ys(i);
});
M.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var so = "__sc-".concat(ot, "__");
M.NODE_ENV !== "production" && M.NODE_ENV !== "test" && typeof window < "u" && (window[so] || (window[so] = 0), -5384 * -1 + 3506 + -3 * 2963 === window[so] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[so] += 1);
const uC = Xt.div`
  position: relative;
`, fC = Xt.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class y extends Error {
  cause;
  constructor(n, t) {
    super(n), this.name = "AutoCaptureError", this.cause = t;
  }
  static logError(n) {
  }
  static fromCameraError(n) {
    if (this.logError(n), n instanceof y) return n;
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
    return new y(t, n);
  }
  static fromError(n) {
    if (this.logError(n), n instanceof y) return n;
    const t = "An unexpected error has occurred";
    return new y(t);
  }
}
const wo = {};
wo.CONTINUE_DETECTION = "continue-detection", wo.SWITCH_CAMERA = "switch-camera", wo.TOGGLE_MIRROR = "toggle-mirror";
const Tn = wo, Ni = {};
Ni.FIRST_FRAME = "first-frame", Ni.FIRST_VALID_FRAME = "first-valid-frame";
const Pn = Ni, ms = {};
ms.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Da = ms;
var ws = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTION_CHANGED = "document-auto-capture:detection-changed", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(ws || {}), ce = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTION_CHANGED = "face-auto-capture:detection-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(ce || {}), hC = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(hC || {}), pC = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTION_CHANGED = "palm-capture:detection-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(pC || {}), yC = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(yC || {});
const ue = {};
ue.CANDIDATE_SELECTION = "candidate_selection", ue.DOCUMENT_CENTERING = "document_centering", ue.DOCUMENT_NOT_PRESENT = "document_not_present", ue.DOCUMENT_TOO_FAR = "document_too_far", ue.SHARPNESS_TOO_LOW = "sharpness_too_low", ue.BRIGHTNESS_TOO_LOW = "brightness_too_low", ue.BRIGHTNESS_TOO_HIGH = "brightness_too_high", ue.HOTSPOTS_PRESENT = "hotspots_present";
const Ue = ue, Ye = {};
Ye.isPresent = Ue.DOCUMENT_NOT_PRESENT, Ye.isNotSmall = Ue.DOCUMENT_TOO_FAR, Ye.isNotOutOfBounds = Ue.DOCUMENT_CENTERING, Ye.isSharp = Ue.SHARPNESS_TOO_LOW, Ye.isNotDim = Ue.BRIGHTNESS_TOO_LOW, Ye.isNotBright = Ue.BRIGHTNESS_TOO_HIGH, Ye.noHotspots = Ue.HOTSPOTS_PRESENT;
const ct = {};
ct.LOADING = "loading", ct.ERROR = "error", ct.WAITING = "waiting", ct.RUNNING = "running", ct.COMPLETE = "complete";
const sA = ct, Ds = { ...sA };
Ds.DONE = "done";
const ba = Ds, bs = {};
bs.EYE_NOT_PRESENT = "eye_not_present";
const mt = bs, wA = {};
wA.CANDIDATE_SELECTION = "candidate_selection", wA.FACE_TOO_CLOSE = "face_too_close", wA.FACE_TOO_FAR = "face_too_far", wA.FACE_CENTERING = "face_centering", wA.FACE_NOT_PRESENT = "face_not_present", wA.SHARPNESS_TOO_LOW = "sharpness_too_low", wA.BRIGHTNESS_TOO_LOW = "brightness_too_low", wA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", wA.DEVICE_PITCHED = "device_pitched", wA.LEFT_EYE_NOT_PRESENT = "left_" + mt.EYE_NOT_PRESENT, wA.RIGHT_EYE_NOT_PRESENT = "right_" + mt.EYE_NOT_PRESENT, wA.MOUTH_NOT_PRESENT = "mouth_not_present", wA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", wA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const CA = wA, RA = {};
RA.isPresent = CA.FACE_NOT_PRESENT, RA.isNotPitched = CA.DEVICE_PITCHED, RA.isNotSmall = CA.FACE_TOO_FAR, RA.isNotLarge = CA.FACE_TOO_CLOSE, RA.isNotOutOfBounds = CA.FACE_CENTERING, RA.isNotDim = CA.BRIGHTNESS_TOO_LOW, RA.isNotBright = CA.BRIGHTNESS_TOO_HIGH, RA.isSharp = CA.SHARPNESS_TOO_LOW, RA.isLeftEyePresent = CA.LEFT_EYE_NOT_PRESENT, RA.isRightEyePresent = CA.RIGHT_EYE_NOT_PRESENT, RA.isMouthPresent = CA.MOUTH_NOT_PRESENT, RA.isMouthScoreNotTooHigh = CA.MOUTH_SCORE_TOO_HIGH, RA.isMouthScoreNotTooLow = CA.MOUTH_SCORE_TOO_LOW;
const mC = RA;
({ ...CA });
var wC = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(wC || {});
const oA = {};
oA.CANDIDATE_SELECTION = "candidate_selection", oA.FACE_TOO_CLOSE = "face_too_close", oA.FACE_TOO_FAR = "face_too_far", oA.FACE_CENTERING = "face_centering", oA.FACE_NOT_PRESENT = "face_not_present", oA.SHARPNESS_TOO_LOW = "sharpness_too_low", oA.BRIGHTNESS_TOO_LOW = "brightness_too_low", oA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", oA.DEVICE_PITCHED = "device_pitched", oA.LEFT_EYE_NOT_PRESENT = "left_" + mt.EYE_NOT_PRESENT, oA.RIGHT_EYE_NOT_PRESENT = "right_" + mt.EYE_NOT_PRESENT, oA.MOUTH_NOT_PRESENT = "mouth_not_present", oA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", oA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low", oA.SMILE = "smile", oA.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", oA.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const LA = oA, OA = {};
OA.isPresent = LA.FACE_NOT_PRESENT, OA.isNotPitched = LA.DEVICE_PITCHED, OA.isNotSmall = LA.FACE_TOO_FAR, OA.isNotLarge = LA.FACE_TOO_CLOSE, OA.isNotOutOfBounds = LA.FACE_CENTERING, OA.isNotDim = LA.BRIGHTNESS_TOO_LOW, OA.isNotBright = LA.BRIGHTNESS_TOO_HIGH, OA.isSharp = LA.SHARPNESS_TOO_LOW, OA.isLeftEyePresent = LA.LEFT_EYE_NOT_PRESENT, OA.isRightEyePresent = LA.RIGHT_EYE_NOT_PRESENT, OA.isMouthPresent = LA.MOUTH_NOT_PRESENT, OA.isMouthStatusNotTooHigh = LA.MOUTH_SCORE_TOO_HIGH, OA.isMouthStatusNotTooLow = LA.MOUTH_SCORE_TOO_LOW;
const Hn = {};
Hn.NEUTRAL = "NEUTRAL", Hn.SMILE = "SMILE", Hn.SMILE_MANUAL = "SMILE_MANUAL";
const zA = {};
zA.CANDIDATE_SELECTION = "candidate_selection", zA.PALM_CENTERING = "palm_centering", zA.PALM_NOT_PRESENT = "palm_not_present", zA.PALM_TOO_FAR = "palm_too_far", zA.PALM_TOO_CLOSE = "palm_too_close", zA.SHARPNESS_TOO_LOW = "sharpness_too_low", zA.BRIGHTNESS_TOO_LOW = "brightness_too_low", zA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", zA.DEVICE_PITCHED = "device_pitched", zA.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const de = zA, le = {};
le.isPresent = de.PALM_NOT_PRESENT, le.isNotPitched = de.DEVICE_PITCHED, le.isNotSmall = de.PALM_TOO_FAR, le.isNotOutOfBounds = de.PALM_CENTERING, le.isNotDim = de.BRIGHTNESS_TOO_LOW, le.isNotBright = de.BRIGHTNESS_TOO_HIGH, le.isSharp = de.SHARPNESS_TOO_LOW, le.isNotLarge = de.PALM_TOO_CLOSE, le.isTemplateExtractionQualityHighEnough = de.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
({ ...CA });
const Io = {};
Io.TOP_LEFT = "TOP_LEFT", Io.TOP_RIGHT = "TOP_RIGHT", Io.BOTTOM_RIGHT = "BOTTOM_RIGHT", Io.BOTTOM_LEFT = "BOTTOM_LEFT";
const KA = {};
KA.CANDIDATE_SELECTION = "candidate_selection", KA.FACE_TOO_CLOSE = "face_too_close", KA.FACE_TOO_FAR = "face_too_far", KA.FACE_CENTERING = "face_centering", KA.FACE_NOT_PRESENT = "face_not_present", KA.SHARPNESS_TOO_LOW = "sharpness_too_low", KA.BRIGHTNESS_TOO_LOW = "brightness_too_low", KA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", KA.DEVICE_PITCHED = "device_pitched", KA.LEFT_EYE_NOT_PRESENT = "left_" + mt.EYE_NOT_PRESENT, KA.RIGHT_EYE_NOT_PRESENT = "right_" + mt.EYE_NOT_PRESENT;
const ee = KA, te = {};
te.isPresent = ee.FACE_NOT_PRESENT, te.isNotPitched = ee.DEVICE_PITCHED, te.isNotSmall = ee.FACE_TOO_FAR, te.isNotLarge = ee.FACE_TOO_CLOSE, te.isNotOutOfBounds = ee.FACE_CENTERING, te.isNotDim = ee.BRIGHTNESS_TOO_LOW, te.isNotBright = ee.BRIGHTNESS_TOO_HIGH, te.isSharp = ee.SHARPNESS_TOO_LOW, te.isLeftEyePresent = ee.LEFT_EYE_NOT_PRESENT, te.isRightEyePresent = ee.RIGHT_EYE_NOT_PRESENT;
const bn = Oe(void 0);
bn.displayName = "AppStateContext";
function Ae() {
  const i = Be(bn);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
var ks = ((i) => (i.DOCUMENT = "document-auto-capture:dev", i.FACE = "face-auto-capture:dev", i.PALM = "palm-capture:dev", i))(ks || {});
const Ri = {};
Ri.FRONT = "user", Ri.BACK = "environment";
const br = Ri, Fi = {};
Fi.AUTO_CAPTURE = "AUTO_CAPTURE", Fi.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const vi = Fi, Mi = {};
Mi.SIMD = "simd", Mi.NO_SIMD = "no-simd";
const ka = Mi, Wi = {};
Wi.Lower = "Lower", Wi.Higher = "Higher";
const To = Wi, Do = {};
Do.VISIBLE = "VISIBLE", Do.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", Do.HIDDEN = "HIDDEN";
const Po = Do, Li = {};
Li.MOBILE = "MOBILE", Li.DESKTOP = "DESKTOP";
const Sa = Li;
function Ho() {
  const i = ["C8kiW4JdTW", "WOBdT3hcJtbDWRq", "W4ldNaXtWPFdTCk4jSkDtCk7", "WPFcV0uebG", "WPxdLHxdL8kP", "W6K5EmkJW5q", "DhbOWRCqWPvXWQO7lSoCCmoz", "nmkiWRFcGCkHWPxdTmonWR7dLGKnAa", "WPaSqCodyW", "nCkMW4tcNSodW7pcMW", "e3bGzaBdILBcUWuTWOhdTtGu", "AgxcSYlcMa", "p8k1W592sa", "W5pcTXy4aW", "WPlcM8kBgSk3", "bCkxpG", "beZdMNSA", "W7NcV8ouW645AsBcS8kBW6y2mSkd", "WQmVdWJdIMRcPSkYnCkL", "WQJcVSkBtf8jWRnnW4ugDX5a", "W5JdOMdcTYtcPmkAwYKpWQ7cGxC", "W6FdQmo0kCoxxComWO4Ese4omG", "W4fiCmkvAZ9fFmoWWPS", "umoxW49qW4FcGepdMftdSmoF", "W6ajWR3dSmoMWRPCWRJcPSoNW57dGCoQ", "W73cVSoFW64+BstcMSkSW5W3n8ko", "Cs7dHmoiWQ3cQNuSW4j3", "nCo/WR/dKCkIW6hcIc9fuf8", "qmoZW5ZdR8k0umkYgSkTWRddTq", "W4FdGCoru8oQWQn3W5pcPIlcLtxdI8om", "nb7dSCo9eW", "e3TQB0lcNdBdPH8p", "WODJWPjWWQK", "W6RdOSoOfWK", "W6tcOSoCfhG"];
  return Ho = function() {
    return i;
  }, Ho();
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return nA(a - 453, g);
  }
  const e = i();
  function A(g, a, I, C, s) {
    return nA(a - -674, I);
  }
  function o(g, a, I, C, s) {
    return nA(a - 852, I);
  }
  function r(g, a, I, C, s) {
    return nA(a - -768, I);
  }
  for (; ; )
    try {
      if (parseInt(A(-384, -383, "OCVq", -373, -399)) / 1 * (-parseInt(o(1110, 1118, "G]&2", 1126, 1110)) / 2) + parseInt(A(-404, -402, "kg]B", -404, -409)) / 3 + -parseInt(o(1131, 1130, "etPW", 1127, 1126)) / 4 * (parseInt(t("knXU", 737, 720, 748, 736)) / 5) + parseInt(t("jK0V", 721, 708, 726, 728)) / 6 + -parseInt(A(-406, -410, "kg]B", -410, -409)) / 7 + parseInt(A(-423, -405, "Eaj(", -399, -394)) / 8 * (parseInt(o(1136, 1122, "dfHY", 1130, 1129)) / 9) + parseInt(r(-475, -492, "Oy$[", -477, -491)) / 10 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ho, -15889 + 611707 * 1);
function nA(i, n) {
  i = i - (6497 + -367 * 17);
  const t = Ho();
  let e = t[i];
  if (nA.uoaFBP === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, d, Q, x = 0; Q = I.charAt(x++); ~Q && (d = E % 4 ? d * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & d >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, d = s.length; E < d; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, d = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let x = 0; x < I.length; x++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, d += String.fromCharCode(I.charCodeAt(x) ^ s[(s[Q] + s[B]) % 256]);
      return d;
    };
    nA.LLybgu = a, nA.QpjsuQ = {}, nA.uoaFBP = !0;
  }
  const o = t[-5768 + 1 * 5768], r = i + o, g = nA.QpjsuQ[r];
  return g ? e = g : (nA.rQddsF === void 0 && (nA.rQddsF = !0), e = nA.LLybgu(e, n), nA.QpjsuQ[r] = e), e;
}
function Ga(i, n, t, e, A) {
  return nA(n - 350, A);
}
const Ko = Oe(void 0);
function Kn(i, n, t, e, A) {
  return nA(i - -481, A);
}
function DC(i, n, t, e, A) {
  return nA(t - -608, e);
}
function Na(i, n, t, e, A) {
  return nA(e - 371, i);
}
Ko[Ra(-299, -270, "APbq", -286, -288) + Ra(-293, -295, "bVeH", -279, -294) + "e"] = Ga(625, 613, 598, 626, "&WDu") + DC(-311, -345, -328, "G]&2") + Ga(620, 632, 633, 639, "TTY1");
function Ra(i, n, t, e, A) {
  return nA(A - -573, t);
}
function $t() {
  const i = Be(Ko);
  function n(r, g, a, I, C) {
    return Na(C, g - 67, a - 63, r - -560);
  }
  function t(r, g, a, I, C) {
    return Kn(r - 1365, g - 369, a - 332, I - 467, I);
  }
  function e(r, g, a, I, C) {
    return Kn(C - 1129, g - 304, a - 238, I - 372, I);
  }
  function A(r, g, a, I, C) {
    return Kn(a - -96, g - 188, a - 20, I - 258, g);
  }
  if (i === void 0) throw new Error(Ko[n(72, 81, 61, 62, "Oy$[") + o(240, 229, "HFFj") + "e"] + (e(943, 931, 933, "r(It", 929) + e(901, 913, 903, "f$8*", 907) + A(-274, "^d^2", -290, -295) + t(1142, 1127, 1133, "jU^0") + e(910, 898, 903, "APbq", 908) + t(1161, 1166, 1154, "S3Jk") + e(926, 918, 943, "3F]I", 934) + A(-331, "6C1t", -315, -330)));
  function o(r, g, a, I, C) {
    return Na(a, g - 353, a - 443, r - -421);
  }
  return i;
}
const qt = (i) => i.length < 9937 * -1 + -907 * 4 + 13566 ? 480 * 3 + 69 + -1509 : i.reduce((t, e) => t + e, -8315 + -1663 * -5) / i.length, me = (i) => Number.parseFloat(i.toFixed(-1755 + 879 * 2));
function bC(i) {
  const n = i.getContext("2d");
  n && n.clearRect(2743 + 16 * -601 + 6873, 0, n.canvas.width, n.canvas.height);
}
const Ss = -2501 + -2 * 2923 + -8347 * -1 + 0.75, kC = 19 * -321 + -2365 + 8466, SC = 600, GC = 9772 + 2837 * 3 + 47 * -389, NC = "dot-auto-capture-video", kn = (i, n) => Math.min(i, n), Gs = ({ height: i, width: n }, t) => {
  const e = kn(n, i) * t, A = (n - e) / 2, o = (i - e) / (-14466 + 1 * 14468), r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, RC = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = Gs(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, FC = ({ height: i, width: n }) => {
  const t = kn(n, i), e = t / (3 * 589 + -7230 + 5466) * (5620 + 8 * -1061 + 2872);
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
};
function vC(i, n) {
  const t = kn(n.width, n.height);
  return me(i * t);
}
function MC({ height: i, width: n }) {
  const t = {};
  return t.height = i, t.width = n, Gs(t, Ss);
}
function WC(i) {
  return RC(i, Ss);
}
function LC(i, n) {
  return vC(i, n) * kC;
}
const OC = "8.0.3", JC = {
  version: OC
}, UC = -15 * 448 + 1 * -5737 + 12466 + 0.8100000000000005, Oi = {};
Oi.max = 100, Oi.min = 10;
const Fa = Oi, YC = -991 * -5 + -3 * 2599 + 3562, TC = -17 * -467 + -10 * 551 + 3 * -743, PC = 4, Ns = "AES-CBC", Rs = "RSA-OAEP", HC = "SHA-256", KC = "image/jpeg", _C = -5240 + -3409 * 1 + -1 * -8657, jC = -1048 * -6 + -6751 + -1 * -503, Fs = "/dot-assets", va = "dot_embedded_bg.wasm", qC = "c56a4180-65aa-42ec-a945-5fd21dec0538", VC = ["a1b2c3d4-e5f6-7890-abcd-ef1234567890", "b2c3d4e5-f6a7-8901-bcde-f12345678901", "c3d4e5f6-a7b8-9012-cdef-123456789012", "d4e5f6a7-b8c9-0123-defa-234567890123", "e5f6a7b8-c9d0-1234-efab-345678901234", "f6a7b8c9-d0e1-2345-fabc-456789012345", "17a8b9c0-e1f2-3456-abcd-567890123456", "28b9c0d1-f2a3-4567-bcde-678901234567", "39c0d1e2-a3b4-5678-cdef-789012345678", "40d1e2f3-b4c5-6789-defa-890123456789", "51e2f3a4-c5d6-7890-efab-901234567890", "62f3a4b5-d6e7-8901-fabc-012345678901", "73a4b5c6-e7f8-9012-abcd-123456789012", "84b5c6d7-f8a9-0123-bcde-234567890123", "95c6d7e8-a9b0-1234-cdef-345678901234", "a6d7e8f9-b0c1-2345-defa-456789012345", "b7e8f9a0-c1d2-3456-efab-567890123456"], Ji = (i) => new Promise((n) => {
  setTimeout(n, i);
}), vs = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? me(t) : t)), ZC = () => JC.version, Ms = (i) => new URL(i).hostname.replace("www.", ""), kr = () => Ms(window.location.href) === "localhost", zC = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i;
function XC(i, n) {
  let t;
  return (...e) => {
    t === void 0 && (t = setTimeout(() => {
      clearTimeout(t), t = void 0, i(...e);
    }, n));
  };
}
function $C(i) {
  return i.at(-1) === "/" ? i.slice(-1786 + 1 * -6841 + 8627 * 1, -1) : i;
}
function Ws(i) {
  return "" + $C(i ?? "") + Fs;
}
function Rt(i) {
  return (...n) => {
    kr() && console[i](...n);
  };
}
const Sr = { log: Rt("log"), warn: Rt("warn"), error: Rt("error"), info: Rt("info"), debug: Rt("debug") }, AB = () => "prod".toLowerCase() === "dev";
class Gr extends Array {
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
    this.length === this.#A && this.splice(-8732 + -393 * -14 + 3230, n.length), this.push(...n);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(10406 + -10406 * 1);
  }
}
const Ls = (i, n, t = KC) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), eB = async (i) => Ls(i, 6599 + -283 * 23), tB = async (i) => Ls(i, -4621 * -2 + -1 * 5261 + 3881 * -1, "image/png"), Os = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, 0, 0, t.width, t.height), t;
}, Js = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(-188 + -1 * 9638 + 9826, 0, i.width, i.height);
  return t;
};
async function oB(i, n) {
  const t = Os(i, n);
  return tB(t);
}
const Us = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(n.topLeft.x, n.topLeft.y, n.width, n.height)) : (A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height)), A.stroke());
}, _n = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, g = {};
  g.x = A, g.y = o;
  const a = {};
  a.topLeft = g, a.width = r, a.height = e, a.color = t, Us(i, a, t);
}, Pt = (i, n, t, e = -2 * -2792 + 7261 * -1 + 1677) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(n.x + e, n.y + e, 7, -5936 + 7 * 849), A.beginPath());
}, nB = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, iB = (i, n) => Object.values(i).every((t) => nB(t, n));
function _o(i) {
  const { height: n, width: t } = FC(i), e = (i.width - t) / (-9204 * -1 + -4609 + 1531 * -3), A = (i.height - n) / 2, o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function Ys(i, n, t) {
  const { height: e, width: A } = t, o = kn(i.width, i.height), r = A - o * n * (2559 + 3035 * -3 + 6548), g = e - o * n * 2, a = (i.width - r) / (-3743 + 535 * 7), I = (i.height - g) / (8801 * 1 + 450 * -13 + -983 * 3), C = {};
  return C.shiftX = a, C.shiftY = I, C.width = r, C.height = g, C;
}
function gt(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
function Nr() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function Ma() {
  return /Android/i.test(navigator.userAgent);
}
function et() {
  return /Firefox/i.test(navigator.userAgent);
}
function Ts() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const rB = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
};
function Ps() {
  return navigator.userAgent;
}
function aB() {
  return navigator.userAgentData?.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
function Ht() {
  return !1;
}
function gB() {
  return !0;
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return QA(s - 399, a);
  }
  function e(g, a, I, C, s) {
    return QA(I - -995, a);
  }
  const A = i();
  function o(g, a, I, C, s) {
    return QA(I - -407, g);
  }
  function r(g, a, I, C, s) {
    return QA(a - 148, g);
  }
  for (; ; )
    try {
      if (-parseInt(t(591, "@mF]", 601, 601, 590)) / 1 + -parseInt(t(598, "@R^e", 600, 613, 600)) / 2 + parseInt(e(-790, "Uk3h", -800, -813, -805)) / 3 * (-parseInt(o("QR73", -195, -207, -196, -218)) / 4) + parseInt(e(-791, "sukB", -799, -801, -792)) / 5 * (parseInt(r("%9qN", 345, 345, 331, 345)) / 6) + -parseInt(t(574, "@mF]", 572, 584, 584)) / 7 + parseInt(t(609, "N#lv", 603, 590, 597)) / 8 * (parseInt(e(-792, "fkRW", -796, -785, -809)) / 9) + parseInt(o("wE(f", -196, -205, -196, -204)) / 10 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(jo, 1247325 + 1137 * 122 + 591493 * -1);
function jo() {
  const i = ["W4ZdP8k6fSoLWRWYBbD9W6Hr", "W6NcMJJcNCoH", "lmkPr8osWOxcISkE", "AvzaEX54W5LuiCkXC8kKWRer", "F8kWztvozWy", "m1mIa8kFW53cTMNcImosq04", "WPlcQ8kHWPNcGCklsJq", "k0fKfd5mWRtcGSk7zSkTWQeDta", "amkThL4Zymo4", "yCkRaCklCCkBW5hcImoqy8khDq", "AvnhFbP5W5mLdSkyvmkfWRW", "WQZcRSoJcSo3WRXIa8kqqCoHWRXYW6S", "WRmYW47cHxXKW6hcVW", "iYKdsKGPW44", "ibTgsa/dUmoghCofw8k6vq", "nSkKqmoYWOnNWPxcOCokfXNcQ8oouq", "W4ddOCkmWR/cNW", "WQBcSmoWvSk4", "Cmo/auWFnbVcNfPGW4RdJG", "WO5nWO8NyJxcP8kdWQZdPCoeW50", "egddRSo7za", "W4xdPCkYfSoTWR9JlYLkW6TiFmkc", "h8k7WPWWEa", "aYzxaJPTdZhdKCkhW5NcS8kAW4O", "gMVdQCo8", "W5FcKSktwd4", "xCo7W4jGiIxdGdldOX3cImkzWQO"];
  return jo = function() {
    return i;
  }, jo();
}
function QA(i, n) {
  i = i - (1 * -1703 + 1 * -6247 + 8133);
  const t = jo();
  let e = t[i];
  if (QA.hUfkBJ === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, d, Q, x = 0; Q = I.charAt(x++); ~Q && (d = E % 4 ? d * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & d >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, d = s.length; E < d; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, d = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let x = 0; x < I.length; x++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, d += String.fromCharCode(I.charCodeAt(x) ^ s[(s[Q] + s[B]) % 256]);
      return d;
    };
    QA.zznOcr = a, QA.TsEFAw = {}, QA.hUfkBJ = !0;
  }
  const o = t[8723 + 8723 * -1], r = i + o, g = QA.TsEFAw[r];
  return g ? e = g : (QA.UBVoYr === void 0 && (QA.UBVoYr = !0), e = QA.zznOcr(e, n), QA.TsEFAw[r] = e), e;
}
function sB({ assetsDirectoryPath: i, bramble: n }) {
  function t(I, C, s, B, E) {
    return QA(E - -843, I);
  }
  const [e, A] = tA();
  function o(I, C, s, B, E) {
    return QA(E - 133, s);
  }
  const r = e !== void 0;
  _(() => {
    async function I() {
      await n[C(937, 937, "^NC&")](Ws(i));
      function C(s, B, E, d, Q) {
        return QA(s - 749, E);
      }
      A(n[C(938, 926, "^*U7") + C(933, 922, "^NC&") + C(957, 956, "@mF]") + "t"]());
    }
    I();
  }, [n, i, A]);
  const g = {};
  g[o(351, 337, "%9qN", 353, 340) + a("4P!Q", -726, -731, -730, -735)] = e, g[t("*ve0", -655, -670, -644, -657) + "sh"] = r;
  function a(I, C, s, B, E) {
    return QA(E - -927, I);
  }
  return g;
}
(function(i, n) {
  function t(a, I, C, s, B) {
    return EA(a - 672, I);
  }
  function e(a, I, C, s, B) {
    return EA(a - 265, s);
  }
  function A(a, I, C, s, B) {
    return EA(s - 124, I);
  }
  function o(a, I, C, s, B) {
    return EA(B - 267, C);
  }
  const r = i();
  function g(a, I, C, s, B) {
    return EA(B - 28, I);
  }
  for (; ; )
    try {
      if (-parseInt(t(1061, "b(BS", 1077, 1051, 1058)) / 1 * (-parseInt(t(1051, "MdSg", 1036, 1064, 1060)) / 2) + parseInt(g(395, "krKC", 413, 417, 412)) / 3 * (-parseInt(t(1070, "wO72", 1058, 1066, 1069)) / 4) + -parseInt(o(653, 683, "W(fs", 676, 668)) / 5 + parseInt(t(1057, "fD!m", 1050, 1071, 1067)) / 6 * (-parseInt(A(503, "5rsm", 517, 514, 506)) / 7) + parseInt(A(505, "W)BG", 508, 521, 533)) / 8 * (-parseInt(o(642, 660, "k]q1", 635, 644)) / 9) + parseInt(e(657, 670, 651, "W8@J", 653)) / 10 * (-parseInt(A(506, "qtKS", 521, 512, 500)) / 11) + parseInt(g(385, "3mHk", 401, 390, 398)) / 12 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(qo, 212881 + -2235 * -34);
function qo() {
  const i = ["W6HxW5lcLCkVgg0xW5tdTJLfWPe", "xcLPACkXWRyOzW", "tSkSj8k0W53cMCkYW5KsCGe", "xtddOddcG8ort8ky", "omoHfcGH", "W7FcNa7cMmkWu2VcKmkwBvNcJG", "W7dcG8o4b8krWOPYWQZcOZZdGSkg", "W6u1qSovW7ZdH8ovW7GcW4FdKq", "xtJdOGFcTSoZuSkS", "W57cS8ob", "ysVcTeOoWO50cGbbmgfz", "WR/cJmkbxc0", "cG0LFmoW", "r8oWBmoRBuaMWRm3W4vBWO8lW7S", "smkwW4u", "C8kOWP9IEq", "cmosWRtdUSk7W4ZcK2m", "WPhdS1njWRO", "pghdScG", "qIhcL8kcW5jpWQxdPCkTW73cImoMW7C", "xYFcHSkpocFdIty", "WO88hbdcKeRcVd9RWRKSemkNWRa", "W7PJmSk2W5LGjSoYW73dPCkD", "W4VcSgjGWQOAW4BcNW", "W6rMW5iUedzaWOz1W4y", "W6STW6HDp8kQWPldKqddMG", "j8oJW58Wo8ogw8osxJ3dLa", "qs3dK8oeWR0RW5JdPa", "xtBcTNBcJSoHtmkAW5ZdKq", "W5RcT8odACoJ", "aghdQa9q", "W68IW6TzrmoTW7tdGIxdUxequW", "wf0Qv8oTd8oNxG", "WOrvEmkAchFdNrDjW48"];
  return qo = function() {
    return i;
  }, qo();
}
function EA(i, n) {
  i = i - (-4343 + 5 * -979 + -1 * -9607);
  const t = qo();
  let e = t[i];
  if (EA.aTJdso === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, d, Q, x = 0; Q = I.charAt(x++); ~Q && (d = E % 4 ? d * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & d >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, d = s.length; E < d; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, d = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let x = 0; x < I.length; x++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, d += String.fromCharCode(I.charCodeAt(x) ^ s[(s[Q] + s[B]) % 256]);
      return d;
    };
    EA.ODtMWb = a, EA.qDxvwM = {}, EA.aTJdso = !0;
  }
  const o = t[-8287 * 1 + -6240 + 14527], r = i + o, g = EA.qDxvwM[r];
  return g ? e = g : (EA.MCTnMv === void 0 && (EA.MCTnMv = !0), e = EA.ODtMWb(e, n), EA.qDxvwM[r] = e), e;
}
function IB({ assetsDirectoryPath: i, children: n, bramble: t }) {
  function e(s, B, E, d, Q) {
    return EA(B - -172, Q);
  }
  const A = {};
  A[e(202, 202, 204, 191, "toPu") + "le"] = t, A[e(195, 200, 212, 194, "UDXH") + e(218, 223, 206, 223, "jx2A") + e(235, 230, 232, 226, "%pJ&") + C("fD!m", -214, -230, -228)] = i;
  function o(s, B, E, d, Q) {
    return EA(B - 135, d);
  }
  const { sunfish: r, crosshatch: g } = sB(A), a = pA(() => ({ sunfish: r, crosshatch: g, bramble: t }), [r, g, t]), I = {};
  I[C("$J*x", -202, -203, -217)] = a, I[C("b(BS", -247, -242, -234) + o(532, 535, 546, "$J*x")] = n;
  function C(s, B, E, d, Q) {
    return EA(d - -603, s);
  }
  return w(Ko[o(510, 522, 536, "W(fs") + o(499, 506, 507, "E2kI")], I);
}
(function(i, n) {
  function t(a, I, C, s, B) {
    return JA(a - -791, B);
  }
  function e(a, I, C, s, B) {
    return JA(a - -187, C);
  }
  function A(a, I, C, s, B) {
    return JA(a - -336, s);
  }
  var o = i();
  function r(a, I, C, s, B) {
    return JA(a - -530, s);
  }
  for (; ; )
    try {
      var g = -parseInt(e(-47, -45, "#[FC", -57, -38)) / 1 + parseInt(e(-52, -53, "q&90", -44, -43)) / 2 + parseInt(t(-649, -639, -657, -643, "q&90")) / 3 * (parseInt(A(-202, -202, -207, "5Rm!", -197)) / 4) + parseInt(r(-387, -388, -398, "onEp", -380)) / 5 * (parseInt(A(-211, -215, -221, "jX)8", -204)) / 6) + -parseInt(e(-50, -48, ")AwM", -48, -46)) / 7 * (parseInt(e(-51, -44, "oI!7", -49, -43)) / 8) + -parseInt(e(-57, -55, "Pwon", -59, -63)) / 9 * (-parseInt(e(-61, -64, ")AwM", -59, -72)) / 10) + -parseInt(A(-209, -219, -201, "Zu]i", -210)) / 11;
      if (g === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Vo, 446282 * -3 + 859 * -394 + 2569288);
function Vo() {
  var i = ["ECkspSopW5zyjcm9aCotcaZdNa", "W5jDW7XGh8o/EsTdcCoLW47dQmoY", "DmoPhMmsorSvg0BcJWlcRCk4", "W5bDW7PUgmo5EvvmaCofW6RdHa", "oCoHmCoVh8oIhG", "WPxdSX/dUZenW5u", "W6acs2hdSSoccG", "kqJdUSkhBM4XW5jMr8oREref", "W54crSooW7hcH8kXW5foW6pdV10U", "ycBdG2RdRra4o8oEW7GVWRxdUG", "lCkKa2uOemkKrfVdQWhcUa", "FCkxomk9WO4ID0q7", "W4ZdOCoMW5lcMHiT", "kSkHbwiPhmoSzeRdSHZcLZe", "WPuDWQOCrJ86WOlcG8kCCmkL", "WRBcRxiSW7BcLrmOs15RWRu", "yMtcUdJcKw9L", "W5JcQKVdQW3cUNK", "W7/dQLJdOmoqsmoGkfvZWQhdSXHU", "W50eqmk4WQddVCoJW6b8", "aJbszXaTWRjLbmkWWQju", "WOrUlLJdHCodm8kcW4ddRI0cr1W"];
  return Vo = function() {
    return i;
  }, Vo();
}
function JA(i, n) {
  i = i - (10 * 677 + -3146 + -3502);
  var t = Vo(), e = t[i];
  if (JA.smzJSn === void 0) {
    var A = function(I) {
      for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", B = "", E = 0, d, Q, x = 0; Q = I.charAt(x++); ~Q && (d = E % 4 ? d * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & d >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (var f = 0, h = s.length; f < h; f++)
        B += "%" + ("00" + s.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(B);
    }, o = function(I, C) {
      var s = [], B = 0, E, d = "";
      I = A(I);
      var Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (var x = 0; x < I.length; x++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, d += String.fromCharCode(I.charCodeAt(x) ^ s[(s[Q] + s[B]) % 256]);
      return d;
    };
    JA.DlfMhj = o, JA.EoHPqs = {}, JA.smzJSn = !0;
  }
  var r = t[13021 + -29 * 449], g = i + r, a = JA.EoHPqs[g];
  return a ? e = a : (JA.TKnqAZ === void 0 && (JA.TKnqAZ = !0), e = JA.DlfMhj(e, n), JA.EoHPqs[g] = e), e;
}
const Zo = Oe(void 0);
Zo.displayName = "TransactionCountingContext";
function Hs() {
  const i = Be(Zo);
  if (i === void 0)
    throw new Error(`${Zo.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
const cB = 2e3;
class CB {
  transactionCountingToken;
  constructor(n) {
    this.transactionCountingToken = n;
  }
  async validateToken() {
    const n = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), cB), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const o = {};
    o.method = "POST", o.headers = A, o.signal = t.signal;
    const r = o, g = await fetch(n, r).catch(() => null);
    return clearTimeout(e), g ? g.status !== -326 * 8 + -5530 + 1 * 8538 && g.status !== 401 : !0;
  }
}
class Ks {
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
    if (this.#t = this.shouldCountTransactions(n), Sr.info("Transaction counting is " + (this.#t ? "enabled" : "disabled")), kr()) {
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
class BB extends Ks {
  trackLivenessTransaction() {
    this.prepareAndSendTransaction();
  }
  trackTransaction() {
  }
}
const He = {};
He.FACE = "web-capture-face", He.DOCUMENT = "web-capture-document", He.MAGNIFEYE = "web-capture-magnifeye", He.SMILE = "web-capture-smile", He.PALM = "web-capture-palm", He.EYEGAZE = "web-capture-eyegaze";
const Ke = He, Ui = {};
Ui.LIVENESS = "liveness", Ui.CAPTURE = "capture";
const ve = Ui, QB = { [Ke.FACE]: ve.CAPTURE, [Ke.DOCUMENT]: ve.CAPTURE, [Ke.MAGNIFEYE]: ve.LIVENESS, [Ke.SMILE]: ve.LIVENESS, [Ke.PALM]: ve.CAPTURE, [Ke.EYEGAZE]: ve.LIVENESS }, EB = QB;
class dB {
  create({ hwids: n, tokenHandler: t, transactionType: e }) {
    const A = EB[e];
    switch (A) {
      case ve.CAPTURE:
        const o = {};
        return o.hwids = n, o.tokenHandler = t, o.transactionType = e, new Ks(o);
      case ve.LIVENESS:
        const r = {};
        return r.hwids = n, r.tokenHandler = t, r.transactionType = e, new BB(r);
      default:
        throw new Error("Unknown capture type: " + A);
    }
  }
}
function lB(i, n) {
  const { crosshatch: t, bramble: e } = $t(), [A, o] = tA(null);
  _(() => {
    if (!t) return;
    (async () => {
      const a = new dB(), I = new CB(n), C = a.create({ hwids: e.getHwids(), tokenHandler: I, transactionType: i });
      await C.init(t), o(C);
    })();
  }, [n, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function xB({
  children: i,
  transactionCountingToken: n,
  transactionType: t
}) {
  const { transactionCounting: e } = lB(t, n), A = pA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ w(Zo.Provider, { value: A, children: i });
}
function uB({ children: i, value: n }) {
  const { crosshatch: t } = $t(), { transactionCounting: e } = Hs(), A = t?.isValid && e?.isTransactionTokenValid ? To.Higher : To.Lower, o = pA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ w(bn.Provider, { value: o, children: i });
}
class fB extends _A {
  static contextType = bn;
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    const n = new y("An unknown error has occurred");
    this.context?.handleError(n);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    return this.context?.appState === sA.ERROR ? null : this.props.children;
  }
}
const hB = Xt.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, pB = Xt.div`
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
function yB() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const mB = jg(
  ({ detectionDetails: i, isImageMirror: n }, t) => yB() ? (console.log(i), /* @__PURE__ */ w(vA, { children: [
    /* @__PURE__ */ w(hB, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ w(pB, { children: /* @__PURE__ */ w("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
), zo = Oe(void 0);
zo.displayName = "AnalyticsContext";
function wB() {
  const i = Be(zo);
  if (i === void 0)
    throw new Error(`${zo.displayName} must be used within a AnalyticsProvider`);
  return i;
}
var DB = /* @__PURE__ */ Symbol.for("preact-signals");
function Sn() {
  if (Me > -3 * 1293 + 103 + 3777)
    Me--;
  else {
    for (var i, n = !1; Kt !== void 0; ) {
      var t = Kt;
      for (Kt = void 0, Yi++; t !== void 0; ) {
        var e = t.o;
        if (t.o = void 0, t.f &= -3, !(8 & t.f) && qs(t)) try {
          t.c();
        } catch (A) {
          !n && (i = A, n = !0);
        }
        t = e;
      }
    }
    if (Yi = 0, Me--, n) throw i;
  }
}
function bB(i) {
  if (Me > -1 * 6139 + 8805 + -2666) return i();
  Me++;
  try {
    return i();
  } finally {
    Sn();
  }
}
var L = void 0;
function Wa(i) {
  var n = L;
  L = void 0;
  try {
    return i();
  } finally {
    L = n;
  }
}
var Kt = void 0, Me = 3 * -1531 + -4860 + 9453, Yi = 0, Xo = 5909 + -1 * 5909;
function _s(i) {
  if (L !== void 0) {
    var n = i.n;
    if (n === void 0 || n.t !== L)
      return n = { i: 0, S: i, p: L.s, n: void 0, t: L, e: void 0, x: void 0, r: n }, L.s !== void 0 && (L.s.n = n), L.s = n, i.n = n, 1 * -3749 + -320 + 4101 & L.f && i.S(n), n;
    if (n.i === -1)
      return n.i = 6699 + -6064 * 1 + -635, n.n !== void 0 && (n.n.p = n.p, n.p !== void 0 && (n.p.n = n.n), n.p = L.s, n.n = void 0, L.s.n = n, L.s = n), n;
  }
}
function BA(i, n) {
  this.v = i, this.i = -5069 * 1 + 4804 + 265, this.n = void 0, this.t = void 0, this.W = n?.watched, this.Z = n?.unwatched, this.name = n?.name;
}
BA.prototype.brand = DB, BA.prototype.h = function() {
  return !0;
}, BA.prototype.S = function(i) {
  var n = this, t = this.t;
  t !== i && i.e === void 0 && (i.x = t, this.t = i, t !== void 0 ? t.e = i : Wa(function() {
    var e;
    (e = n.W) == null || e.call(n);
  }));
}, BA.prototype.U = function(i) {
  var n = this;
  if (this.t !== void 0) {
    var t = i.e, e = i.x;
    t !== void 0 && (t.x = e, i.e = void 0), e !== void 0 && (e.e = t, i.x = void 0), i === this.t && (this.t = e, e === void 0 && Wa(function() {
      var A;
      (A = n.Z) == null || A.call(n);
    }));
  }
}, BA.prototype.subscribe = function(i) {
  var n = this, t = {};
  return t.name = "sub", Ao(function() {
    var e = n.value, A = L;
    L = void 0;
    try {
      i(e);
    } finally {
      L = A;
    }
  }, t);
}, BA.prototype.valueOf = function() {
  return this.value;
}, BA.prototype.toString = function() {
  return this.value + "";
}, BA.prototype.toJSON = function() {
  return this.value;
}, BA.prototype.peek = function() {
  var i = L;
  L = void 0;
  try {
    return this.value;
  } finally {
    L = i;
  }
}, Object.defineProperty(BA.prototype, "value", { get: function() {
  var i = _s(this);
  return i !== void 0 && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (Yi > -263 * -7 + 1 * -6340 + 4599) throw new Error("Cycle detected");
    this.v = i, this.i++, Xo++, Me++;
    try {
      for (var n = this.t; void (6260 + -1160 * 5 + -460) !== n; n = n.x) n.t.N();
    } finally {
      Sn();
    }
  }
} });
function js(i, n) {
  return new BA(i, n);
}
function qs(i) {
  for (var n = i.s; n !== void 0; n = n.n) if (n.S.i !== n.i || !n.S.h() || n.S.i !== n.i) return !0;
  return !1;
}
function Vs(i) {
  for (var n = i.s; n !== void 0; n = n.n) {
    var t = n.S.n;
    if (t !== void 0 && (n.r = t), n.S.n = n, n.i = -1, n.n === void 0) {
      i.s = n;
      break;
    }
  }
}
function Zs(i) {
  for (var n = i.s, t = void 0; n !== void 0; ) {
    var e = n.p;
    n.i === -1 ? (n.S.U(n), e !== void 0 && (e.n = n.n), n.n !== void 0 && (n.n.p = e)) : t = n, n.S.n = n.r, n.r !== void 0 && (n.r = void 0), n = e;
  }
  i.s = t;
}
function _e(i, n) {
  BA.call(this, void 0), this.x = i, this.s = void 0, this.g = Xo - 1, this.f = -15459 + -1 * -15463, this.W = n?.watched, this.Z = n?.unwatched, this.name = n?.name;
}
_e.prototype = new BA(), _e.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if (-3715 * -1 + -891 + -2792 == (-1873 * -5 + -1 * 386 + -1 * 8943 & this.f) || (this.f &= -5, this.g === Xo)) return !0;
  if (this.g = Xo, this.f |= 1, this.i > 3 * 1194 + 2890 + -6472 && !qs(this)) return this.f &= -2, !0;
  var i = L;
  try {
    Vs(this), L = this;
    var n = this.x();
    (2 * -4744 + -2267 * 4 + 18572 & this.f || this.v !== n || 10069 + 10069 * -1 === this.i) && (this.v = n, this.f &= -(9165 + -1 * -5349 + -14497), this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return L = i, Zs(this), this.f &= -2, !0;
}, _e.prototype.S = function(i) {
  if (this.t === void 0) {
    this.f |= -2448 + 9 * 276;
    for (var n = this.s; n !== void 0; n = n.n) n.S.S(n);
  }
  BA.prototype.S.call(this, i);
}, _e.prototype.U = function(i) {
  if (this.t !== void 0 && (BA.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -33;
    for (var n = this.s; n !== void 0; n = n.n) n.S.U(n);
  }
}, _e.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= -6862 + -1717 * -4;
    for (var i = this.t; i !== void 0; i = i.x) i.t.N();
  }
}, Object.defineProperty(_e.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var i = _s(this);
  if (this.h(), i !== void 0 && (i.i = this.i), -922 * 1 + 7990 + -7052 & this.f) throw this.v;
  return this.v;
} });
function La(i, n) {
  return new _e(i, n);
}
function zs(i) {
  var n = i.u;
  if (i.u = void 0, typeof n == "function") {
    Me++;
    var t = L;
    L = void 0;
    try {
      n();
    } catch (e) {
      throw i.f &= -2, i.f |= 8414 + 7 * 538 + -12172, Rr(i), e;
    } finally {
      L = t, Sn();
    }
  }
}
function Rr(i) {
  for (var n = i.s; n !== void 0; n = n.n) n.S.U(n);
  i.x = void 0, i.s = void 0, zs(i);
}
function kB(i) {
  if (L !== this) throw new Error("Out-of-order effect");
  Zs(this), L = i, this.f &= -2, 8 & this.f && Rr(this), Sn();
}
function Ct(i, n) {
  this.x = i, this.u = void 0, this.s = void 0, this.o = void 0, this.f = -1271 * -5 + 20 + -6343, this.name = n?.name;
}
Ct.prototype.c = function() {
  var i = this.S();
  try {
    if (8 & this.f || void (1 * 9908 + 2983 + -12891) === this.x) return;
    var n = this.x();
    typeof n == "function" && (this.u = n);
  } finally {
    i();
  }
}, Ct.prototype.S = function() {
  if (1638 + 8 * 481 + -5 * 1097 & this.f) throw new Error("Cycle detected");
  this.f |= -3939 * -1 + -4067 + 129, this.f &= -9, zs(this), Vs(this), Me++;
  var i = L;
  return L = this, kB.bind(this, i);
}, Ct.prototype.N = function() {
  !(2855 + -1718 * -2 + 19 * -331 & this.f) && (this.f |= -7107 + 6 * 1556 + -2227, this.o = Kt, Kt = this);
}, Ct.prototype.d = function() {
  this.f |= -2427 * 1 + 4 * 1777 + -4673, -2332 + -6 * 601 + 5939 & this.f || Rr(this);
}, Ct.prototype.dispose = function() {
  this.d();
};
function Ao(i, n) {
  var t = new Ct(i, n);
  try {
    t.c();
  } catch (A) {
    throw t.d(), A;
  }
  var e = t.d.bind(t);
  return e[Symbol.dispose] = e, e;
}
var Xs, jn, co = typeof window < "u" && !!window.__PREACT_SIGNALS_DEVTOOLS__, $s = [];
Ao(function() {
  Xs = this.N;
})();
function Qt(i, n) {
  R[i] = n.bind(null, R[i] || function() {
  });
}
function Co(i) {
  jn && jn(), jn = i && i.S();
}
function AI(i) {
  var n = this, t = i.data, e = Fr(t);
  e.value = t;
  var A = pA(function() {
    for (var g = n, a = n.__v; a = a.__; ) if (a.__c) {
      a.__c.__$f |= 4;
      break;
    }
    var I = La(function() {
      var E = e.value.value;
      return E === 0 ? 9 * 552 + -3705 + 3 * -421 : E === !0 ? "" : E || "";
    }), C = La(function() {
      return !Array.isArray(I.value) && !pg(I.value);
    }), s = Ao(function() {
      if (this.N = eI, C.value) {
        var E = I.value;
        g.__v && g.__v.__e && 1 * -2721 + -1332 + 1014 * 4 === g.__v.__e.nodeType && (g.__v.__e.data = E);
      }
    }), B = n.__$u.d;
    return n.__$u.d = function() {
      s(), B.call(this);
    }, [C, I];
  }, []), o = A[0], r = A[-1 * 2377 + 413 + -3 * -655];
  return o.value ? r.peek() : r.value;
}
AI.displayName = "ReactiveTextNode";
var Ti = {};
Ti.configurable = !0, Ti.value = void 0;
var Pi = {};
Pi.configurable = !0, Pi.value = AI;
var Hi = {};
Hi.configurable = !0, Hi.get = function() {
  var i = {};
  return i.data = this, i;
};
var Ki = {};
Ki.configurable = !0, Ki.value = 1;
var Ft = {};
Ft.constructor = Ti, Ft.type = Pi, Ft.props = Hi, Ft.__b = Ki, Object.defineProperties(BA.prototype, Ft), Qt("__b", function(i, n) {
  if (co && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), typeof n.type == "string") {
    var t, e = n.props;
    for (var A in e) if (A !== "children") {
      var o = e[A];
      o instanceof BA && (t || (n.__np = t = {}), t[A] = o, e[A] = o.peek());
    }
  }
  i(n);
}), Qt("__r", function(i, n) {
  if (co && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.enterComponent(n), n.type !== vA) {
    Co();
    var t, e = n.__c;
    e && (e.__$f &= -2, (t = e.__$u) === void 0 && (e.__$u = t = (function(A) {
      var o;
      return Ao(function() {
        o = this;
      }), o.c = function() {
        e.__$f |= 697 * -1 + -9827 + 421 * 25, e.setState({});
      }, o;
    })())), Co(t);
  }
  i(n);
}), Qt("__e", function(i, n, t, e) {
  co && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), Co(), i(n, t, e);
}), Qt("diffed", function(i, n) {
  co && typeof n.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), Co();
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
        I === void 0 ? (I = SB(t, a, C, A), o[a] = I) : I.o(C, A);
      }
    }
  }
  i(n);
});
function SB(i, n, t, e) {
  var A = n in i && i.ownerSVGElement === void 0, o = js(t);
  return { o: function(r, g) {
    o.value = r, e = g;
  }, d: Ao(function() {
    this.N = eI;
    var r = o.value.value;
    e[n] !== r && (e[n] = r, A ? i[n] = r : r != null && (r !== !1 || n[2274 + 1 * -3533 + 1 * 1263] === "-") ? i.setAttribute(n, r) : i.removeAttribute(n));
  }) };
}
Qt("unmount", function(i, n) {
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
}), Qt("__h", function(i, n, t, e) {
  (e < 3 || e === 9) && (n.__$f |= 284 + 916 * 2 + 302 * -7), i(n, t, e);
}), _A.prototype.shouldComponentUpdate = function(i, n) {
  var t = this.__$u, e = t && t.s !== void 0;
  for (var A in n) return !0;
  if (this.__f || typeof this.u == "boolean" && this.u === !0) {
    var o = 2 & this.__$f;
    if (!(e || o || -6910 + 3457 * 2 & this.__$f) || -4307 * -1 + 7280 + -11586 * 1 & this.__$f) return !0;
  } else if (!(e || -1 * -859 + 1523 * 3 + -5424 & this.__$f) || -6540 + 8597 * 1 + -2054 & this.__$f) return !0;
  for (var r in i) if (r !== "__source" && i[r] !== this.props[r]) return !0;
  for (var g in this.props) if (!(g in i)) return !0;
  return !1;
};
function Fr(i, n) {
  return tA(function() {
    return js(i, n);
  })[-6473 * -1 + -6846 + 1 * 373];
}
var GB = function(i) {
  queueMicrotask(function() {
    queueMicrotask(i);
  });
};
function NB() {
  bB(function() {
    for (var i; i = $s.shift(); ) Xs.call(i);
  });
}
function eI() {
  3340 + -2 * -641 + 4621 * -1 === $s.push(this) && (R.requestAnimationFrame || GB)(NB);
}
function RB({ analytics: i, crosshatch: n }) {
  if (!kr())
    return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function FB({ analytics: i, apiKey: n, redfin: t, crosshatch: e, bramble: A }) {
  const o = {};
  o.analytics = i, o.crosshatch = e;
  const r = RB(o), g = Fr(t);
  return g.value = t, _(() => {
    r && (Sr.info("Analytics is " + (r?.shouldReportAnalytics(e) ? "enabled" : "disabled")), r.init(n, A.getCustomerName(), g));
  }, [r, A, n, e, g]), r;
}
function vB({
  analytics: i,
  apiKey: n,
  children: t
}) {
  const { crosshatch: e, bramble: A } = $t(), { redfin: o } = Ae(), r = FB({
    analytics: i,
    redfin: o,
    crosshatch: e,
    bramble: A,
    apiKey: n
  }), g = pA(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ w(zo.Provider, { value: g, children: t });
}
const vr = Oe(void 0);
vr.displayName = "ConfigurationContext";
function tI() {
  const i = Be(vr);
  if (!i)
    throw new Error("Missing provider for ConfigurationContext");
  return i;
}
function MB({
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
    captureMode: e ?? vi.AUTO_CAPTURE,
    assetsDirectoryPath: Ws(i),
    sessionToken: o,
    camera: t ?? {},
    transactionCountingToken: r,
    autoCapture: n ?? {}
  };
}
function WB({
  children: i,
  configuration: n
}) {
  const t = pA(() => MB(n), [n]);
  return /* @__PURE__ */ w(vr.Provider, { value: t, children: i });
}
const Oa = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
};
class Qe {
  static _instance;
  lastDetails;
  delayedTime;
  constructor() {
    this.lastDetails = {}, this.delayedTime = 0;
  }
  static getInstance() {
    return !this._instance && (this._instance = new Qe()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -2084 * 4 + 4927 + -1 * -3409;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && Oa(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
  dispatchCustomEvent(n, t) {
    Oa(n, t);
  }
}
function oI(i, n, t = SC) {
  const e = {};
  e.instructionCode = n.code, e.isEscalated = n.isEscalated ?? !1;
  const A = e;
  Qe.getInstance().dispatchDelayedCustomEventOnChange(i, A, t);
}
function Ja(i, n) {
  Qe.getInstance().dispatchCustomEventOnChange(i, n);
}
function LB(i, n) {
  Qe.getInstance().dispatchCustomEventOnChange(i, n);
}
function OB(i, n) {
  const t = {};
  t.size = n;
  const e = t;
  Qe.getInstance().dispatchCustomEventOnChange(i, e);
}
function JB(i, n, t) {
  const e = n.confidence < t ? void 0 : n, A = {};
  A.detectedObject = e;
  const o = A;
  Qe.getInstance().dispatchCustomEventOnChange(i, o);
}
function UB(i, { detection: n, fps: t, image: e, invalidValidators: A, isInCandidateSelection: o }) {
  const r = {};
  r.image = e, r.data = {}, r.data.detection = n, r.data.fps = t, r.data.isInCandidateSelection = o, r.data.invalidValidators = A, r.data.imageResolution = {}, r.data.imageResolution.width = e.width, r.data.imageResolution.height = e.height;
  const g = r;
  Qe.getInstance().dispatchCustomEventOnChange(i, g);
}
const YB = (i, n) => {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  _(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, LB(i, A);
  }, [t, e, i]);
};
function TB(i, n) {
  _(() => {
    const t = (e) => {
      n(e);
    };
    return document.addEventListener(i, t), () => {
      document.removeEventListener(i, t);
    };
  }, [n, i]);
}
const PB = (i) => i === ws.CONTROL ? !Nr() : !0;
function HB(i, n) {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: o } = Ae(), [r, g] = tA(), a = pA(() => {
    const d = o && n && n.isStreaming && n.getCameraSettings().facingMode;
    return d ? r ?? d === "user" : r ?? PB(i);
  }, [n, r, i, o]);
  function I() {
    t !== sA.LOADING && e(sA.RUNNING);
  }
  function C() {
    g(r === void 0 ? !a : !r);
  }
  async function s() {
    if (n) {
      e(sA.LOADING);
      try {
        await n.switchCamera(), e(sA.RUNNING);
      } catch (d) {
        if (d instanceof Error) {
          A(y.fromCameraError(d));
          return;
        }
      }
      g(void 0);
    }
  }
  function B(d) {
    switch (d.detail?.["instruction"]) {
      case Tn.CONTINUE_DETECTION:
        I();
        break;
      case Tn.TOGGLE_MIRROR:
        C();
        break;
      case Tn.SWITCH_CAMERA:
        s();
        break;
      default:
        return;
    }
  }
  TB(i, B);
  const E = {};
  return E.shouldCameraMirror = a, E;
}
function KB(i, n) {
  _(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      OB(n, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, n]);
}
function _B(i) {
  return me(Math.abs(i));
}
const jB = () => {
  const [i, n] = tA(null), t = jA(new Gr(5294 + 7609 * -1 + 2320));
  function e(o) {
    const { z: r } = o.accelerationIncludingGravity || {};
    if (!r) return;
    t.current.pushFixed(_B(r));
    const g = me(qt(t.current)), a = {};
    a.z = g, n(a);
  }
  _(() => (window.addEventListener("devicemotion", XC(e, jC), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const A = {};
  return A.acceleration = i, A;
}, $o = Oe(void 0);
$o.displayName = "CameraServiceContext";
function qB() {
  const i = Be($o);
  if (i === void 0)
    throw new Error(`${$o.displayName} must be used within a CameraServiceProvider`);
  return i;
}
async function nI() {
  return navigator.mediaDevices.enumerateDevices();
}
async function qn() {
  return (await nI()).filter((n) => n.kind === "videoinput");
}
function Et(i) {
  i.getTracks().forEach((t) => t.stop());
}
function _i(i) {
  return i.getVideoTracks()[9902 * 1 + -2 * 4894 + -114];
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return dA(I - 477, s);
  }
  function e(g, a, I, C, s) {
    return dA(g - -519, s);
  }
  function A(g, a, I, C, s) {
    return dA(I - 498, C);
  }
  function o(g, a, I, C, s) {
    return dA(C - 69, s);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(A(928, 953, 948, "rmU!", 939)) / 1 + -parseInt(t(931, 922, 916, 896, "3K1N")) / 2 * (-parseInt(t(929, 919, 917, 910, "rmU!")) / 3) + -parseInt(e(-73, -82, -54, -87, "kN8Z")) / 4 + parseInt(e(-72, -88, -78, -76, "AAYQ")) / 5 + parseInt(A(975, 945, 961, "fATm", 943)) / 6 * (-parseInt(t(918, 927, 913, 903, "RYs#")) / 7) + -parseInt(o(536, 525, 516, 527, "T&U@")) / 8 + -parseInt(t(921, 921, 905, 911, "8uSO")) / 9 * (-parseInt(t(934, 926, 933, 942, "HV(#")) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(An, -842339 * -1 + -101839 * 7 + 420189);
function An() {
  const i = ["p8o+W7/dH8ogd8oc", "WP9/aIBcLW", "W4pcTGNcGqy", "xCoiswBcMqqstMu", "CSkEFCkWWPRdMCoxWRK5na", "mmoXWOi", "BdtcUZPGW57cRSkCW6ma", "sCoXu8o5W60", "WQFdT8obWRRdQgBcKsNcJ0lcLZ8", "WRCGqHr5W6vTDK8", "oCoCjZzfWRVdVCkWp8kem8kiqq", "B0XJeW3cT8kpnwdcTeHOda", "W4u8WPKWW7e", "FCknjNGe", "DCkEFmkZW5dcQColWQqkfSoCWPi", "zmkBhejZWPTgeemocmkh", "nSoftGuO", "mZ4AWOVcGqGAi8k9CY8", "BgFcULdcRxyGWP80", "W5O8WOm", "W57dUZPjW7FdGdLAW6C", "hK7cHmkzba", "dSoCWOtdRCkWW7LzwSoVWOBcL8ocfq", "W4STWPG2", "mCkyAmkzW60", "WQlcQCoqq8k9", "WQBcOSkVW53cIWVcGa", "WO1WW7/dHHBcHmoxECkNWO0lWRy", "smoGrSoUW6i", "BgFcSs7dKZfaWOKaWOGDzbG", "B8kcDhCy", "W6eMpfmdA8otWPlcPt7cVq", "W6n8y8kYzq", "W63dOvfWga", "fdacxK8", "W5ldNx7dTXm", "W7FdQ8klg8olEmoodCo6W7hdPCoyWOC", "ASkNoviK", "nf99lmo+"];
  return An = function() {
    return i;
  }, An();
}
function dA(i, n) {
  i = i - (4195 + 8 * -471);
  const t = An();
  let e = t[i];
  if (dA.BFgDiF === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, d, Q, x = 0; Q = I.charAt(x++); ~Q && (d = E % 4 ? d * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & d >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, d = s.length; E < d; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, d = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let x = 0; x < I.length; x++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, d += String.fromCharCode(I.charCodeAt(x) ^ s[(s[Q] + s[B]) % 256]);
      return d;
    };
    dA.ddcLSu = a, dA.cfcRXK = {}, dA.BFgDiF = !0;
  }
  const o = t[-3332 + -3951 * 2 + 5617 * 2], r = i + o, g = dA.cfcRXK[r];
  return g ? e = g : (dA.YLnqMb === void 0 && (dA.YLnqMb = !0), e = dA.ddcLSu(e, n), dA.cfcRXK[r] = e), e;
}
function VB(i) {
  const n = new ArrayBuffer(i[r(1098, 1117, "jSD@", 1107, 1116) + "h"]), t = new Uint8Array(n);
  function e(g, a, I, C, s) {
    return dA(C - -912, I);
  }
  function A(g, a, I, C, s) {
    return dA(s - -491, C);
  }
  for (let g = 2851 * 1 + -1988 + -863, a = i[r(1098, 1099, "]3o$", 1115, 1106) + "h"]; g < a; g++)
    if (r(1124, 1109, "Oayt", 1100, 1117) !== A(-63, -51, -65, "Y3ir", -54)) t[g] = i[e(-447, -458, "8X*2", -448) + o(-267, -272, -253, -282, ")Tjn")](g);
    else {
      const I = new _0x572f1a(_0x5c5ab0[A(-57, -44, -36, "8X*2", -48) + A(-76, -82, -65, "kN8Z", -64)]);
      return new _0x462e65(I)[r(1124, 1110, "JWWD", 1128, 1109)](_0x2d8028), I;
    }
  function o(g, a, I, C, s) {
    return dA(a - -702, s);
  }
  function r(g, a, I, C, s) {
    return dA(s - 668, I);
  }
  return n;
}
(function(i, n) {
  function t(a, I, C, s, B) {
    return P(s - 8, I);
  }
  function e(a, I, C, s, B) {
    return P(I - -912, s);
  }
  function A(a, I, C, s, B) {
    return P(s - 746, a);
  }
  const o = i();
  function r(a, I, C, s, B) {
    return P(a - 433, C);
  }
  function g(a, I, C, s, B) {
    return P(I - -276, s);
  }
  for (; ; )
    try {
      if (-parseInt(A("SjAr", 1128, 1107, 1134, 1127)) / 1 * (-parseInt(g(121, 140, 126, "bX@f", 148)) / 2) + -parseInt(A("Bthj", 1138, 1124, 1141, 1120)) / 3 * (-parseInt(r(820, 789, ")5Rj", 828, 800)) / 4) + parseInt(g(172, 145, 142, "g&LL", 134)) / 5 * (parseInt(e(-516, -522, -528, "bqek", -520)) / 6) + -parseInt(A("zqAP", 1136, 1172, 1149, 1173)) / 7 * (parseInt(g(74, 100, 86, "sRhI", 109)) / 8) + -parseInt(g(70, 94, 81, "POir", 77)) / 9 + parseInt(e(-550, -519, -503, "WhIE", -543)) / 10 * (-parseInt(t(372, "!A9u", 397, 390, 385)) / 11) + parseInt(g(109, 95, 78, "3rCt", 114)) / 12 * (parseInt(t(432, "MNtT", 413, 410, 435)) / 13) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(en, 1 * -59839 + 11 * -7016 + 701 * 472);
function P(i, n) {
  i = i - (256 * 19 + -5676 + 1 * 1177);
  const t = en();
  let e = t[i];
  if (P.NQfgIS === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, d, Q, x = 0; Q = I.charAt(x++); ~Q && (d = E % 4 ? d * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & d >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, d = s.length; E < d; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, d = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let x = 0; x < I.length; x++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, d += String.fromCharCode(I.charCodeAt(x) ^ s[(s[Q] + s[B]) % 256]);
      return d;
    };
    P.FuHyvv = a, P.GWyRZh = {}, P.NQfgIS = !0;
  }
  const o = t[3921 + 2 * 3099 + -10119], r = i + o, g = P.GWyRZh[r];
  return g ? e = g : (P.cNQqWd === void 0 && (P.cNQqWd = !0), e = P.FuHyvv(e, n), P.GWyRZh[r] = e), e;
}
async function ZB() {
  const i = {};
  i[o(71, 43, ")5Rj")] = Ns;
  function n(I, C, s, B, E) {
    return P(E - 320, I);
  }
  function t(I, C, s, B, E) {
    return P(C - -137, s);
  }
  i[t(276, 291, "!A9u") + "h"] = 256;
  function e(I, C, s, B, E) {
    return P(E - -235, I);
  }
  const A = await window[t(299, 267, "4SwT") + "o"][t(210, 242, "@sGV") + "e"][o(23, 5, "lxPi") + o(22, 14, "N(hT") + "y"](i, !0, [t(309, 285, "y#Og") + "pt", o(29, 33, "*ywM") + "pt"]);
  function o(I, C, s, B, E) {
    return P(I - -346, s);
  }
  const r = Uint8Array[n("!A9u", 751, 698, 703, 731)](Array(5273 + -1 * -4868 + -10125)[t(254, 262, "bqek")](389 * 8 + 11 * -687 + -1 * -4445)), g = window[n("4SwT", 727, 691, 753, 724) + "o"][o(66, 48, "ry]X") + e("SjAr", 195, 159, 180, 175) + n("n%5z", 749, 715, 760, 747)](r), a = {};
  return a[n("%z&@", 702, 759, 709, 734)] = A, a.iv = g, a;
}
async function zB(i) {
  const { iv: n, key: t } = await ZB(), e = new Uint8Array(i), A = {};
  A[B(-406, -431, "kqM@")] = Ns;
  function o(E, d, Q, x, f) {
    return P(f - 388, Q);
  }
  A.iv = n;
  function r(E, d, Q, x, f) {
    return P(Q - -861, E);
  }
  const g = await window[B(-467, -458, "u8#!") + "o"][r("SjAr", -478, -454) + "e"][C(-382, "FdS)", -416, -402) + "pt"](A, t, e), a = await window[r("WhIE", -433, -455) + "o"][r("!A9u", -477, -484) + "e"][C(-359, "lxPi", -400, -388) + r("Bthj", -488, -480)](r(")5Rj", -450, -436), t), I = {};
  I[o(731, 784, "zqAP", 785, 760) + "ge"] = g;
  function C(E, d, Q, x, f) {
    return P(x - -782, d);
  }
  function s(E, d, Q, x, f) {
    return P(Q - -188, E);
  }
  I[s("n%5z", 181, 213)] = a, I.iv = n;
  function B(E, d, Q, x, f) {
    return P(d - -823, Q);
  }
  return I;
}
async function XB(i) {
}
function en() {
  const i = ["W5tdPCkZW7TrtmodEq", "x1iqtmkU", "o8oeaSoisa", "WPxcGSkOW6O9", "W6a4W43dINy", "W40nEmoyWQL+W5fXW7VcOSoQWQfq", "W5Scx2a1W6XRnCkPW5W", "W70PW4ddK0W", "W7VdNSkJkW", "Fxm1W4mp", "W49qoq", "E1O/", "FfOOW4dcOa", "dGpdG8oFWO1TzatdKxaJWO0", "DJZcNvu", "WOWFW587vW", "jce6gCkuW6nXFs8", "vNxdUc/dQG", "W6hdKmkLWOxcQCkGagm", "W6VdTmk0n8op", "sgSmrq", "W5lcPc/dO8kY", "AJZcHW", "q8oSDmopnq", "W5NcH2ZcLCoQ", "W7hdICkIiwG", "rIhdGgbA", "WQNcPSkOW6hcHa", "WOWfov4gxMJcHW", "oc3cRmodgt0BWQv1WPKXW5e", "ueaSsSkk", "jSoSgYBdJW", "WPpdONNcPmoQAMBcM8o6ma7cUXe", "WQNcRmooq8oJW4bCDCoSvwe", "WOJcTmk3W512", "W5NcOmoxW4DF", "aWr4oCoAW5qfjYFcR3xdGW", "WPTBl8kzW6q", "z8kjWPHfW4NdJ8kYnh1/WRK7", "W67dMCkUmNa", "WPG0vXa", "zg1UoSk+", "W7RdTCk/WPddKq", "W6RcICo0W7O", "WQVcNSo7fhTCyYyX", "W5ZcLdzLWRC", "fCoTvc9FW4CeWRlcVGJcQW", "W5KfW4e/WOhcLJ9hdJu", "W4X4dt0es0nfWQG", "kMRdHWlcSSoTW6SOlSkW", "WQiOW5ZdNfVcQH4", "bWz+u8kiWQGBmqC", "W5SfwwPTWOb5amkJW6bcWR8", "w2BdRdO", "WPelW5aQ", "W47dGSoNWQOTWRRdVSouWOj2", "jmoXbsZdJW", "WQ3dU8kNW5qkj8omFwW", "W618WR8lFCkDWPjgrZb+WOK", "C8k5iJddVctdH8oj", "W7hdUSkXWOC", "WO9Cbd4", "k3mYW7mVAmkb", "W5pcJMa", "WPlcKSk1W4uyW54TF8kz"];
  return en = function() {
    return i;
  }, en();
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return iA(a - 736, C);
  }
  const e = i();
  function A(g, a, I, C, s) {
    return iA(s - 473, C);
  }
  function o(g, a, I, C, s) {
    return iA(I - 809, a);
  }
  function r(g, a, I, C, s) {
    return iA(C - -828, a);
  }
  for (; ; )
    try {
      if (parseInt(A(766, 833, 810, "wP59", 801)) / 1 + parseInt(t(1015, 1017, 1055, "]y$]", 1010)) / 2 + -parseInt(o(1129, "tlpG", 1153, 1186, 1163)) / 3 + -parseInt(r(-516, "1fdX", -509, -498, -524)) / 4 + -parseInt(t(1067, 1076, 1089, "HHob", 1119)) / 5 * (-parseInt(r(-514, "acnP", -585, -546, -523)) / 6) + parseInt(r(-503, "PNWw", -502, -467, -437)) / 7 + -parseInt(r(-452, "wP59", -520, -483, -454)) / 8 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(tn, 113984);
const Ua = -9242 * 1 + -5821 + -1 * -17563, iI = -5996 + 28 * 260 + 2216, rI = 2, aI = 0 + 0.5, gI = {};
gI[MA(482, "rFZr", 493)] = 1920;
const sI = {};
sI[MA(579, "vOaB", 542)] = 1080;
function tn() {
  const i = ["CCk3W5VdMhC", "ndVcN8oNW4C", "dCoRW4ZcMCki", "W73dMbL+", "Ag3dLmkhWPpdGSkCvxJcUrhcTG", "WOiOo8oxWRy", "fCkgbComeG", "W7ldNq9Rga", "WOKJlSogWQm", "mCk1WQG0W4e", "WOpcQ8ojx8kw", "WQ3cJfm+rKBdNSoCW4umb8of", "a8k1tZJdTG", "a8oowa", "WRrSWPdcSJm", "WQjqW695AbBdJSkxDNpcICkk", "aSk0qZ7dSG", "tsndrmkN", "WPRdOGiArW", "amk0W4ySWPq", "WOZdHavrWRC", "W5eYWOpdTmkRiCkwfXSPmvO", "DfpdSMbG", "WQjNWPVcTc8", "WPhdMrynxa", "W4/dNSo0vmk3W5dcTxq", "W4hcMSojWPvU", "zCorW55eoW", "WRHradVcVW", "h8oMz8oAmq", "W4BcGCoeWOXN", "cSoZECoxoG", "WOJdIa1DWQ0", "WOyuwSoczq", "DexdTh16", "WPVdIqP2WRy", "W6iDWPuLmW", "eCkJW5u", "W4r+WPlcJX3cOgD9sSo1W55Z", "WOFdGbelBG", "WQzrW69+BXNdM8kAC17cUCki", "v8ojW53cUa", "fCktj8oCmW", "WPqdq8oGyW", "WOjJWOdcOYK", "bCktuYVdSq", "qSowW5Lv", "wx3dM1JdPq", "lKbSW5/dRq", "xGhdRW", "a1RcRMSFWRddHZpcRLFcQau", "W6anW7hcGq", "WQCVW5ddMG", "WO8nzmkwvG", "umkjfwPjzWRcM0nnWQ/cQa", "W4r5WPFcIXtcOL57t8o5W51c", "Fc8rx8or", "gmkXqdRdJq", "WQjbbX3cUG", "W45efmopcaFcKSkAWRfdqG", "WQvKWPJcQJK", "WOtcO8k+W4tcOq", "WPS9W5ddJuq", "n8kKWQmH", "AaLTWQK", "WPVdIqPZWQ4", "dCkIrZldUW", "W73dIWTNeq", "xwBdKxJdVG", "b2GrrW", "peDC", "k3TLdCkbW5z8CComBqpcN8kh", "rGhdQG", "e2ddGv8", "WR7cUmkIaKq", "WPdcKSov", "W5JcJmofWPLJ", "WOeIo8ozWQC", "WRxcV8kCn0i", "WPdcNmolWQ1N", "xbRdQW", "WPeOmg1o", "WOymr8ou", "p8kPWOP/WPRcQ8kzWRHvWRlcTIHN", "WOnyWRpdLdSaW69vp27cHCkR", "WPfKWOdcOW", "eCorqY4", "vYDEsSkG", "uZZcNr5CWPfXmCkiBGm", "W5e6W6FcTCoKtCk1eq", "mKfgW54", "WPhcSmk5W4ZcGG", "f2xdILWe", "A8oJW5KVW50", "ECoYW5W4W4e", "gCoRW4VcHa", "WQeCW5C"];
  return tn = function() {
    return i;
  }, tn();
}
const II = {};
II[MA(484, "@Rgp", 470)] = 30;
const bo = {};
bo[hA("]y$]", 780, 815, 818)] = gI, bo[K(1148, 1115, "0[Nw") + "t"] = sI, bo[XA(848, 839, 832, ")p@d") + K(1178, 1144, "raue")] = II;
const cI = {};
cI[MA(514, ")p@d", 481)] = 1920;
const CI = {};
CI[lA(984, 975, 949, 937, "qdVI")] = 1080;
const ko = {};
ko[XA(794, 802, 841, "wnya")] = cI, ko[hA("4n7)", 781, 856, 823) + "t"] = CI, ko[K(1145, 1169, "0[Nw") + lA(977, 969, 952, 979, "wP59")] = 30;
const BI = {};
BI[MA(501, "grK8", 498)] = 1;
const QI = {};
QI[lA(885, 899, 921, 932, "LI%C")] = 1;
const EI = {};
EI[lA(927, 984, 961, 947, "78Y7")] = 1;
const So = {};
function K(i, n, t, e, A) {
  return iA(n - 813, t);
}
So[hA("vcb!", 869, 817, 837)] = BI, So[K(1090, 1093, "ORx^") + "t"] = QI, So[K(1153, 1180, "LI%C") + MA(490, "u7x@", 525)] = EI;
const dI = {};
dI[XA(828, 848, 860, "wnya")] = 1;
const lI = {};
lI[lA(951, 964, 924, 943, "0[Nw")] = 1;
function MA(i, n, t, e, A) {
  return iA(t - 184, n);
}
const xI = {};
xI[hA("uWG&", 796, 856, 832)] = 1;
const Go = {};
Go[XA(736, 769, 772, "@Rgp")] = dI, Go[MA(549, "J]ZY", 532) + "t"] = lI, Go[XA(817, 833, 840, "KkF*") + hA("vcb!", 798, 836, 811)] = xI;
const Lt = {};
function XA(i, n, t, e, A) {
  return iA(n - 482, e);
}
Lt[lA(895, 929, 931, 925, "mgb4")] = bo, Lt[MA(459, "KkF*", 468) + lA(908, 934, 910, 940, "tlpG")] = ko, Lt[MA(559, "]y$]", 547)] = So, Lt[K(1139, 1160, "0[Nw") + K(1162, 1152, "HHob")] = Go;
function lA(i, n, t, e, A) {
  return iA(e - 637, A);
}
const on = Lt, je = {};
je[K(1203, 1181, "^QHr") + lA(982, 941, 940, 975, "a51#") + lA(967, 947, 944, 959, "78Y7")] = Ua, je[K(1142, 1129, "wnya") + XA(830, 808, 762, "1fdX") + lA(947, 943, 932, 960, "vL$r") + XA(860, 847, 798, "z64k")] = on[K(1140, 1106, ")p@d")], je[K(1119, 1163, "vcb!") + MA(482, "vOaB", 521) + lA(970, 1006, 960, 989, "wP59") + lA(975, 1017, 945, 991, "JOF5")] = on[XA(834, 811, 834, "grK8") + K(1128, 1173, "a51#")], je[XA(853, 837, 875, "78Y7") + K(1071, 1096, "a51#")] = rI, je[MA(440, "i0c3", 458) + K(1099, 1120, "ORx^") + lA(985, 921, 909, 945, "grK8") + hA("PNWw", 845, 915, 879) + XA(836, 844, 862, "HHob")] = aI, je[hA("vcb!", 886, 844, 846) + K(1195, 1147, "vcb!") + "Ms"] = Ua;
const Ze = {};
Ze[MA(490, "h9AG", 475) + lA(924, 988, 957, 969, "w#GD") + MA(498, "nXjH", 496)] = iI;
function hA(i, n, t, e, A) {
  return iA(e - 533, i);
}
Ze[K(1183, 1182, "5yb1") + K(1183, 1156, "6Q)r") + lA(967, 972, 947, 958, "aGD0") + hA("HHob", 809, 818, 806)] = on[hA("tlpG", 823, 798, 812)], Ze[hA("aGD0", 842, 893, 852) + K(1146, 1146, "vL$r") + K(1066, 1111, "LI%C") + hA("THj4", 860, 845, 892)] = on[hA("w#GD", 789, 795, 829) + XA(796, 771, 775, "NYAY")], Ze[hA("J]ZY", 837, 844, 851) + hA("uWG&", 921, 864, 886)] = rI, Ze[hA("78Y7", 824, 880, 858) + K(1118, 1105, "mgb4") + hA("0[Nw", 837, 898, 868) + K(1161, 1177, "^QHr") + lA(1008, 961, 990, 964, "rFZr")] = aI, Ze[K(1143, 1137, "nXjH") + lA(1001, 910, 946, 954, "ySvm") + "Ms"] = iI;
function iA(i, n) {
  i = i - (-45 + 1950 * -4 + 8118);
  const t = tn();
  let e = t[i];
  if (iA.ayBaRo === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, d, Q, x = 0; Q = I.charAt(x++); ~Q && (d = E % 4 ? d * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & d >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, d = s.length; E < d; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, d = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let x = 0; x < I.length; x++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, d += String.fromCharCode(I.charCodeAt(x) ^ s[(s[Q] + s[B]) % 256]);
      return d;
    };
    iA.swqmUp = a, iA.EIGAft = {}, iA.ayBaRo = !0;
  }
  const o = t[-3867 * -1 + 289 * 31 + -12826], r = i + o, g = iA.EIGAft[r];
  return g ? e = g : (iA.QErSqR === void 0 && (iA.QErSqR = !0), e = iA.swqmUp(e, n), iA.EIGAft[r] = e), e;
}
const ji = {};
ji[K(1156, 1149, "ySvm")] = je, ji[MA(467, "vL$r", 459)] = Ze;
const $B = ji;
(function(i, n) {
  function t(g, a, I, C, s) {
    return rA(s - 419, I);
  }
  function e(g, a, I, C, s) {
    return rA(g - -111, a);
  }
  function A(g, a, I, C, s) {
    return rA(C - -509, g);
  }
  const o = i();
  function r(g, a, I, C, s) {
    return rA(a - 815, C);
  }
  for (; ; )
    try {
      if (-parseInt(e(8, "Z)XY", 67, 53, -10)) / 1 + parseInt(t(561, 540, "Xh8)", 541, 534)) / 2 + -parseInt(r(1068, 1104, 1056, "qZ&C", 1073)) / 3 + parseInt(e(119, "!P68", 188, 46, 95)) / 4 + -parseInt(A("pEZY", -289, -327, -282, -229)) / 5 + -parseInt(t(643, 601, "7@I5", 639, 694)) / 6 + parseInt(r(958, 1037, 1078, "Z)XY", 1128)) / 7 * (parseInt(A("SztM", -275, -287, -329, -314)) / 8) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(nn, 1954755 + -11207 * 89);
function De(i, n, t, e, A) {
  return rA(e - 932, n);
}
function be(i, n, t, e, A) {
  return rA(i - 609, e);
}
function nn() {
  const i = ["WOH6WO8jgW", "W68uWQ7dUrC", "wWpcNSoIFa", "W5W5ftCW", "fMVdRSkIba", "DmoOWRDQhW", "WQKUWQnLza", "yZhcUSoVCW", "W6Gqwsac", "W6vdu8oowq", "mSkzFCkqCa", "W4JcTYegW68", "DIRcHmkHf8ojFLiBEqKUW6q", "vCoGWQhcVmk1", "w1FcSv5b", "W6BcQ8kle8ka", "W4LCsCo5sa", "WRilhdSX", "jCofWPmovW", "WRiOyhBdVmkgWP3dGSk9lg8pAq", "WPZcN8kOW5tdKW", "W7uafseZ", "bICNtq", "gmovgSoEW7e", "r8o0ySkAtG", "W4JcLuhcTYO", "WRXvW7xcUM5MlHbyoNBcKdC", "WQJdKSoka8oO", "W6bRjY/cVq", "imoQhCoVW6i", "WQNdLSoximoZ", "y8o3WQrRdG", "W6ZdGCoygq", "WR7cHmkPW5xdRW", "WRBdNSoMWPJcUG", "j8kmE8kosW", "WOBcKSoRWPzc", "W6GkuJ4V", "zCoQWRH3ca", "WQxdKCo4zbO", "pxtdHSo5qa", "WPS6gmkZW5S", "WPa/dCkTW48", "wCoLWO/cPSkL", "WRihfdSM", "WPbFnvtdO8kRW6ngdqZdOmktna", "x8o8WOdcUCkK", "cCo/WR4Fx8ogWQGAW6v7W5arxG", "d8kGlmoNj8oDmY8IwLGs", "W7pcHSkJiL1lW7RdMYj1gCoc", "u1FdS8oxgG", "cKGXW5RdVq", "q8oHWR4zhG", "CrRcOK/dNq", "W450dmo1WO8", "WRBdMSo1WPVcVq", "nYy5WQlcIa", "W47cL0FcTsO", "WQK8WOD7yW", "zmo3W556EG", "W7WbWQJdPsS", "W5ldImotb20", "A8oGWQrLoq", "W77dMCoyheq", "W7NdVCkNW7dcRCksyGDEWOfSWPldQW", "bcWLWRFcKW", "WRlcRCo5WQJdQG", "j8ovda", "ecWHWRJcNW", "WRlcLCk0W4ddGG", "awtdS8k+gq", "W7rtqZGFyfTxWO0", "t8o3WP/cUmkZ", "C8k/W53cVha", "WPj4WPenjG", "WOvYWO0FjG", "wmkvW4VcNuC", "W6SVWRhdVZy", "W68UWO7dRde", "W63dJmoEahG", "W4yMCra", "uSo+zW", "xSkPW65bcW", "WPWPh8kWW5W", "et82WR3cIq", "WQVcKCkVW4VdLa", "W44mCWu", "rHlcG8oiBq", "W48OoW", "WRKNqCkFga", "WPe8dCkBW4S", "W4m1j8kojG", "qLNdTmokgG", "W6VcUcRdMCkl", "ACo1WQjagq", "W4Pldq", "vr3cJSokFa", "mSkNieP/", "WQhdMCo6WQpcRq", "vrhcHCouBq", "W4BcSLxdSCkP", "W6z2oZpcUW", "W70jWQBdPt4", "cMqZWQ19", "kw3dUSoJzG", "DshcVuNdVa", "WRhdKCoeFay", "WQKfgW", "WRZdNmoGWRpcRq", "htOyWQFcMq", "WRpdPSosdmksWOnhlSok", "y8oZWRDOcq", "yaVcV1VdUG", "wLdcUa", "WPtdSa7cS8oqlCkTW7ulW55SW67cIW", "W70fWRxdIda", "W6PPiqtcQG", "ymoYW45KBW", "c3eLWQ19", "WQ3cQCoIWQhdUW", "hhObW4BcQa", "qfJdVSovcW", "WPCwqCkZpG", "W7ldImofd0i", "CSoKWR9OdW", "xSkZW69UdW", "ASoGWRHJca", "WP/dLg3dO8oe", "BSo0W59sAW", "bCkPj1v4", "W6CpWQ8", "C8oXW4vfzW", "bIG+WR/cIa", "qCoOWQqpga", "bwtdTSkLda", "uSo8WPK", "W5aDuWhcSq", "W7uZj8kenq", "b2tdS8k8hG", "gK8SWOPR", "sYpdIhBdRW", "bIO4WR/cJW", "WRddKSo+EH0", "vSoMWQmqhW", "WQGTWRbOzq", "W6SwWQddPYO", "W4JcL0FcTY0", "g28jW5JcRW", "tCo3WR44cq", "uxBcQW", "mCkWW6iWtYhdQmo2vHzUWQC", "W4K3iCkLmq", "W7BcG8kVi1zkW4ddGYvej8o1", "W6r3msZcQG", "W6WsvZ4/", "tSovWOZcJSkw", "p1ZdKCo4tq", "mmk9W6i2tsFcLSoNxJ9rWP8D", "W63dSmokiw5EdglcVSkSWRKqW54", "hSkMpq", "W7DBqgn2cXXJWQRcMSk7twW", "WRddG8o6WOtcVa", "WQ3cPmkxFIS", "gSoqfSoFW6u", "FmkOW6rEgG", "W5VcGKhcQXe", "WOJcJmo7WR5c", "W5qMpmkpia", "W7izaHyZ", "WRRdMCoAiSoI", "DqdcUx7dTa", "WRpcQmoHWRtdVq", "rJldIwpdKW", "bMmmW5RdTG", "W5jfuSotFW", "q8oPWQ4qcq", "W7iKe8kYeW", "W6tcSmkkeSk8", "WQ/dHCoFj8oP", "wrBcMmobFa", "W7NdJmoegG", "W7fRncNcOq", "W7RdM8owaNK", "eMJdVW", "u0pdTmoTcW", "eYq1sCkW", "smoYWOFcPSkJ", "W70ybca", "t1hdTSoCjW", "hsy5", "cgKqW47dPW", "W4ynrbBcOa", "WO7cH8oRWPfg"];
  return nn = function() {
    return i;
  }, nn();
}
function mA(i, n, t, e, A) {
  return rA(n - -880, t);
}
function xA(i, n, t, e, A) {
  return rA(i - 441, n);
}
function GA(i, n, t, e, A) {
  return rA(e - -744, i);
}
function rA(i, n) {
  i = i - (-4480 + 9927 * 1 + -5341);
  const t = nn();
  let e = t[i];
  if (rA.maycjW === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, d, Q, x = 0; Q = I.charAt(x++); ~Q && (d = E % 4 ? d * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & d >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, d = s.length; E < d; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, d = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let x = 0; x < I.length; x++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, d += String.fromCharCode(I.charCodeAt(x) ^ s[(s[Q] + s[B]) % 256]);
      return d;
    };
    rA.XgzcEq = a, rA.HDbISc = {}, rA.maycjW = !0;
  }
  const o = t[0], r = i + o, g = rA.HDbISc[r];
  return g ? e = g : (rA.hmcUAv === void 0 && (rA.hmcUAv = !0), e = rA.XgzcEq(e, n), rA.HDbISc[r] = e), e;
}
class AQ {
  #A;
  [De(1113, "]ih1", 1098, 1038) + De(1222, "^kz#", 1219, 1188)] = [];
  [be(734, 826, 684, "gR9&") + mA(-634, -710, "&rY)") + xA(664, "4V9(") + "r"];
  [mA(-718, -633, "SztM") + De(1271, "YDJX", 1219, 1213) + "s"] = {};
  constructor(n, t = {}) {
    this[e(593, "gR9&", 684) + e(803, "SztM", 837) + e(754, "KJ&s", 711) + "r"] = n;
    function e(r, g, a, I, C) {
      return GA(g, g - 352, a - 224, a - 1303);
    }
    function A(r, g, a, I, C) {
      return De(r - 404, C, a - 455, a - -657);
    }
    function o(r, g, a, I, C) {
      return mA(r - 275, C - 603, r);
    }
    this.#A = $B, this[e(797, "Yqh@", 722) + A(335, 333, 422, 445, "qZ&C") + o("[V3j", -148, -34, -193, -126)](t);
  }
  async [mA(-782, -767, "^kz#") + GA("KJ&s", -570, -571, -549) + mA(-783, -724, "Xh8)")]() {
    if (!Ht())
      if (r(-831, -860, -756, -758, "qZ&C") !== n(683, 638, "1%ic", 603)) {
        _0x599561(_0x25e91d);
        const C = {};
        return C[n(696, 718, "pEZY", 776)] = _0x1a7bf3, C;
      } else return;
    function n(C, s, B, E, d) {
      return xA(E - 41, B);
    }
    function t(C, s, B, E, d) {
      return De(C - 320, d, B - 344, E - -529);
    }
    const e = await this[n(816, 725, "M5%T", 736) + "st"](this.#A[t(716, 652, 743, 653, "k2JM")]), A = await this[t(626, 574, 603, 571, "gR9&") + "st"](this.#A[t(724, 678, 781, 698, "k2JM")]);
    function o(C, s, B, E, d) {
      return xA(E - 367, s);
    }
    function r(C, s, B, E, d) {
      return be(C - -1588, s - 433, B - 489, d);
    }
    const g = {};
    g[o(956, "I0@&", 999, 930) + r(-842, -879, -795, -798, "LinD")] = e[n(543, 520, "]hmU", 606) + "ge"];
    function a(C, s, B, E, d) {
      return be(d - -219, s - 424, B - 250, C);
    }
    g[r(-826, -838, -818, -812, "qld$") + r(-829, -847, -890, -782, "Xh8)")] = A[n(707, 756, "#Ibb", 669) + "ge"];
    const I = g;
    this[a("pEZY", 602, 611, 567, 554) + o(900, "A45Q", 1e3, 935)][r(-694, -637, -737, -783, "sEEA")](I);
  }
  async [GA("LinD", -604, -440, -511) + "st"](n) {
    function t(p, D, b, S, m) {
      return xA(b - -1122, D);
    }
    function e(p, D, b, S, m) {
      return GA(m, D - 174, b - 317, b - 1161);
    }
    function A(p, D, b, S, m) {
      return xA(b - 486, D);
    }
    const { abortAfterMs: o, fallbackConstraints: r, maxTestDuration: g, primaryConstraints: a, runAmount: I, runDurationCutoffFactor: C } = n;
    function s(p, D, b, S, m) {
      return xA(m - -716, p);
    }
    let B = -7 * -574 + 903 + 259 * -19, E = I, d;
    function Q(p, D, b, S, m) {
      return De(p - 399, D, b - 236, b - -1425);
    }
    let x = this[e(525, 527, 598, 641, "pEZY") + e(600, 702, 681, 718, "qZ&C") + Q(-302, "&5v1", -347) + "r"][e(736, 711, 666, 578, "eT^!") + e(675, 684, 700, 731, "i@S6") + s("qZ&C", -173, -158, -209, -145) + "s"](this[Q(-300, "^kz#", -377) + t(-497, "4FP$", -479) + "s"], a);
    for (let p = -330 + -2 * -2746 + 2581 * -2; p < I; p++)
      if (Q(-140, "LinD", -207) === s("7@I5", -126, 47, -38, -49)) ({ deviceId: _0x41c10d } = _0x37ca5c);
      else {
        if (B > g * C)
          if (A(1100, "^iU5", 1168) !== s("^kz#", -99, -166, -117, -133)) _0x2e92be = this[t(-424, "k2JM", -429) + e(607, 477, 550, 495, "k2JM") + s("eT^!", -48, -58, -175, -109) + "r"][s("^iU5", -174, -89, -44, -86) + e(559, 578, 543, 598, "4FP$") + s("A45Q", -68, -54, -12, -59) + "s"](this[t(-466, "4V9(", -510) + A(1177, "!P68", 1207) + "s"], _0x717d0b), _0x1fc809--;
          else {
            E = p;
            break;
          }
        const D = await this[s("359A", -32, 33, -24, -1) + A(1210, "4dRR", 1190) + t(-429, "QkDl", -508) + t(-502, "qZ&C", -481)](x, o);
        if (D[e(798, 797, 714, 776, "gR9&")])
          if (s("45Ww", 25, 28, -35, 2) === A(1116, "QkDl", 1136)) this[A(1143, "4FP$", 1081) + t(-494, "3VoT", -410) + Q(-345, "4V9(", -270) + "r"][s("^kz#", 88, 66, 22, 1) + t(-370, "A45Q", -393) + t(-412, "4V9(", -430) + s("lIrz", -78, -122, -113, -147) + "or"](D[e(583, 664, 578, 493, "P[NJ")]) && (Q(-115, "[V3j", -206) === Q(-304, "eT^!", -223) ? this[e(557, 543, 620, 585, "I0@&") + e(720, 728, 654, 715, "P[NJ") + "s"] = _0x14cb46 : (x = this[e(609, 666, 641, 640, "3VoT") + e(648, 635, 627, 601, "bh6W") + Q(-176, "I0@&", -248) + "r"][e(501, 594, 556, 513, "i@S6") + Q(-177, "KJ&s", -259) + e(536, 575, 557, 478, "$SEg") + "s"](this[t(-433, "gR9&", -450) + t(-525, "eT^!", -524) + "s"], r), p--));
          else return;
        if (D[e(681, 659, 614, 546, "Wxv6") + A(1174, "45Ww", 1110)])
          if (t(-489, "qshZ", -415) === e(803, 674, 709, 794, "LinD")) ({ deviceId: d } = D);
          else return;
        B += D[s("TrsS", -164, -59, -45, -83) + e(594, 738, 676, 684, "4FP$")] || 2 * -4219 + -1 * 2294 + 10732;
      }
    const f = Math[Q(-289, "7@I5", -383)](B / (E || 1 * -7331 + 9994 + -2662));
    this[t(-580, "4dRR", -536) + s("k2JM", -175, -101, -222, -126) + "s"] = this[e(554, 468, 528, 588, "qld$") + e(650, 731, 713, 751, "i@S6") + t(-508, "]ih1", -445) + "r"][s("1%ic", -23, -4, -127, -32) + s("F1%8", -141, -192, -51, -108) + s("H*Mq", 2, 40, 46, -43) + "s"](this[e(559, 447, 525, 511, "pEZY") + A(988, "M5%T", 1047) + "s"], {}, d);
    const h = {};
    return h[t(-345, "qshZ", -397) + "ge"] = f, h;
  }
  async [xA(642, "#Ibb") + GA("M5%T", -504, -564, -486) + be(753, 784, 794, "4dRR") + mA(-718, -722, "P[NJ")](n, t) {
    function e(s, B, E, d, Q) {
      return mA(s - 59, B - 1501, d);
    }
    const A = Date[r(-761, -676, -713, "^kz#")](), o = new AbortController();
    function r(s, B, E, d, Q) {
      return De(s - 36, d, E - 40, s - -1898);
    }
    function g(s, B, E, d, Q) {
      return mA(s - 274, E - 1293, s);
    }
    function a(s, B, E, d, Q) {
      return GA(B, B - 465, E - 19, Q - 445);
    }
    const I = setTimeout(() => {
      function s(d, Q, x, f, h) {
        return r(f - 1333, Q - 253, x - 178, x);
      }
      function B(d, Q, x, f, h) {
        return r(Q - 1049, Q - 297, x - 193, h);
      }
      function E(d, Q, x, f, h) {
        return r(h - 1921, Q - 15, x - 397, Q);
      }
      if (B(195, 226, 260, 133, "&5v1") !== B(161, 242, 231, 218, "TrsS")) {
        const d = {};
        return d[B(246, 261, 260, 199, "gR9&") + s(477, 538, "pEZY", 561)] = this[s(607, 471, "qld$", 527) + s(506, 574, "i@S6", 522)], d[B(246, 265, 179, 325, ")]5l") + B(203, 197, 136, 225, "!P68") + "e"] = !1, d;
      } else o[E(1022, "Z)XY", 1119, 1008, 1064)]();
    }, t);
    function C(s, B, E, d, Q) {
      return mA(s - 487, B - 1642, E);
    }
    try {
      if (g("Z)XY", 506, 589, 644, 510) !== r(-720, -625, -794, "P[NJ", -665)) {
        const { deviceId: s, mediaStream: B } = await this[a(52, "sEEA", 46, -16, -44) + a(88, "4UGk", 70, -4, -1) + C(1061, 1001, "CNbn", 1054, 913) + "r"][g("(V^Q", 526, 603, 581, 506) + e(755, 752, 766, "k2JM", 842) + e(818, 828, 815, "P[NJ", 890) + "m"](n, o[r(-794, -877, -785, "qZ&C", -770) + "l"]), E = Date[e(934, 840, 788, "45Ww", 881)]() - A;
        Et(B), clearTimeout(I);
        const d = {};
        return d[g("lIrz", 692, 627, 605, 712) + e(839, 798, 792, "!P68", 871)] = E, d[C(941, 900, "4FP$", 990, 805) + C(853, 927, "]hmU", 947, 993)] = s, d;
      } else _0x3ad664[g("eT^!", 547, 582, 502, 668)]();
    } catch (s) {
      if (a(-186, "7@I5", -123, -159, -125) !== r(-741, -796, -680, "^kz#")) {
        clearTimeout(I);
        const B = {};
        return B[g("P[NJ", 547, 574)] = s, B;
      } else this[r(-697, -667, -735, "lIrz") + g(")]5l", 487, 536) + e(745, 812, 749, "M5%T") + "r"][a(-65, "4FP$", -89, -43, -120) + r(-755, -685, -680, "4FP$") + g("CNbn", 677, 661) + e(847, 882, 938, "Xh8)") + "or"](_0x16b1af[a(62, "4V9(", -98, 66, -8)]) && (_0x3d0e94 = this[e(811, 836, 914, "qZ&C") + g("A45Q", 554, 648) + a(-244, "3VoT", -103, -214, -192) + "r"][e(725, 810, 734, "^iU5") + C(1059, 1034, "bGS5") + r(-830, -844, -879, "^iU5") + "s"](this[C(989, 924, "M5%T") + r(-764, -764, -774, "4FP$") + "s"], _0x2ad7ed), _0x194513--);
    }
  }
  [GA("QkDl", -582, -627, -556) + xA(616, ")]5l") + mA(-677, -651, "F1%8")](n) {
    function t(A, o, r, g, a) {
      return GA(g, o - 475, r - 97, A - 640);
    }
    function e(A, o, r, g, a) {
      return mA(A - 53, A - 1799, o);
    }
    Object[e(1186, "$SEg") + "es"](n)[t(134, 170, 181, "qshZ") + "ch"](([A, o]) => {
      const r = A;
      this.#A[r] && (this.#A[r] = { ...this.#A[r], ...o });
    });
  }
  [be(794, 774, 790, "qZ&C") + xA(553, "qld$") + mA(-669, -623, "qshZ")](n) {
    function t(e, A, o, r, g) {
      return GA(g, A - 436, o - 26, r - 1159);
    }
    this[t(709, 758, 630, 675, "1%ic") + t(670, 656, 780, 708, "CNbn") + "s"] = n;
  }
  async [be(899, 843, 922, "CNbn") + mA(-710, -674, "Xh8)") + GA(")]5l", -417, -564, -504) + be(802, 707, 770, "k2JM") + GA("$SEg", -475, -405, -491)](n) {
    function t(I, C, s, B, E) {
      return xA(B - -27, E);
    }
    function e(I, C, s, B, E) {
      return xA(s - -1335, E);
    }
    function A(I, C, s, B, E) {
      return xA(I - -1081, E);
    }
    function o(I, C, s, B, E) {
      return GA(I, C - 187, s - 380, E - 469);
    }
    if (this[r("eT^!", -171, -74, -217, -171) + e(-683, -768, -686, -761, "$SEg")][o("pEZY", -43, -138, -25, -79) + "h"] === -1 * 5441 + -435 + 5876) return;
    function r(I, C, s, B, E) {
      return xA(E - -877, I);
    }
    const g = this[t(556, 637, 665, 632, "I0@&") + A(-441, -473, -389, -537, "F1%8")][t(674, 589, 623, 656, "bh6W") + "h"] - 1, a = await XB();
    this[A(-454, -376, -528, -527, "4V9(") + o("4UGk", 1, 25, 45, -2)][g] = { ...this[o("P[NJ", -137, -137, -4, -54) + e(-634, -649, -682, -692, "Z)XY")][g], optSetting: a };
  }
  [De(1168, "]ih1", 1123, 1194) + GA("pEZY", -549, -534, -612) + mA(-621, -676, "$SEg") + mA(-700, -636, "bGS5") + be(738, 654, 772, "#Ibb")]() {
    function n(r, g, a, I, C) {
      return xA(C - -420, g);
    }
    const t = {};
    t[A(885, 883, 800, "#Ibb") + A(739, 798, 815, "I0@&")] = this[o("bGS5", 836) + n(238, "(V^Q", 253, 272, 238)];
    function e(r, g, a, I, C) {
      return GA(a, g - 483, a - 437, C - -239);
    }
    t[e(-766, -925, "4FP$", -790, -848) + n(249, "pEZY", 266, 196, 289) + "e"] = !1;
    function A(r, g, a, I, C) {
      return xA(a - 161, I);
    }
    function o(r, g, a, I, C) {
      return xA(g - 116, r);
    }
    return t;
  }
}
function oe(i, n, t, e, A) {
  return U(n - 292, e);
}
function U(i, n) {
  i = i - (-110 + -1 * -577);
  const t = rn();
  let e = t[i];
  if (U.DwRnGt === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, d, Q, x = 0; Q = I.charAt(x++); ~Q && (d = E % 4 ? d * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & d >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, d = s.length; E < d; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, d = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let x = 0; x < I.length; x++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, d += String.fromCharCode(I.charCodeAt(x) ^ s[(s[Q] + s[B]) % 256]);
      return d;
    };
    U.rbTjoq = a, U.yPtCKo = {}, U.DwRnGt = !0;
  }
  const o = t[-1601 * -2 + 5 * -1561 + 4603], r = i + o, g = U.yPtCKo[r];
  return g ? e = g : (U.wlcCyX === void 0 && (U.wlcCyX = !0), e = U.rbTjoq(e, n), U.yPtCKo[r] = e), e;
}
(function(i, n) {
  function t(a, I, C, s, B) {
    return U(C - 306, B);
  }
  function e(a, I, C, s, B) {
    return U(I - -917, a);
  }
  const A = i();
  function o(a, I, C, s, B) {
    return U(s - -653, a);
  }
  function r(a, I, C, s, B) {
    return U(B - -622, I);
  }
  function g(a, I, C, s, B) {
    return U(I - -673, s);
  }
  for (; ; )
    try {
      if (-parseInt(r(-19, "*Ib!", -3, -58, -84)) / 1 * (parseInt(r(100, "yZmt", -85, -8, -8)) / 2) + parseInt(g(-132, -143, -249, "qw[l", -208)) / 3 * (-parseInt(r(113, "CGQb", 45, -71, 6)) / 4) + parseInt(r(-19, "U8tb", -28, -162, -46)) / 5 * (-parseInt(o("ar!o", 29, 43, -8, -57)) / 6) + -parseInt(e("Qpq*", -415, -511, -522, -527)) / 7 + parseInt(r(-40, "h#sz", 149, 69, 49)) / 8 * (-parseInt(o("p]$N", 52, -31, -26, -69)) / 9) + -parseInt(g(-103, -132, -56, "zuXY", -90)) / 10 + -parseInt(e("0a1P", -256, -370, -207, -366)) / 11 * (-parseInt(t(866, 926, 811, 799, "OiYk")) / 12) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(rn, 1745375 + 38347 * -32);
function ke(i, n, t, e, A) {
  return U(e - -110, t);
}
function vt(i, n, t, e, A) {
  return U(A - 198, t);
}
function Te(i, n, t, e, A) {
  return U(A - 941, n);
}
function rn() {
  const i = ["WOZdRh/cU8kz", "W6qqWQtdM2y", "W7uDf8k/WRu", "W6K8W54", "W7GVsCkUW6G", "W4j/W7L/WOa", "DrZcGhWs", "W4pdPs/cIfW", "W4FcPmk0oSkM", "ErVcOeCe", "nmo7WQ7cQ8kG", "lJVcOq", "W6asW4hdHSoc", "W4ZcUmkjomkI", "W6W8WQq", "rSoHC8kWWQS", "DSkbkNZcVq", "xsRcPSopWQG", "kfrMjG", "sCkihhhcSq", "rJ42W6tdHMi2vSoQW5/cVrFdLa", "mWVdNrK/", "WPFcUmkQpJa", "yML8ECkK", "xCkguSocW4G", "kJZdOW", "CmoTdSkTWQ8", "bhFdUSkyWO/cR8oRBMNdKq", "W7i0W4pdLmoz", "s8kldW", "W57cU8kAnq", "z2/dTmoOW6e", "ExHWCmkP", "W6DwW5hdMrq", "WPv7W68wvq", "DNFdQmosW60", "hJ3cTSojWP0", "W6yoW7tdHmox", "WP5qj8kbWRq", "WQZcO3O", "p8o7D8ovWRlcVCosl8kE", "W4dcHSkxos7cNuy", "zCkMWPFcJCkd", "W4xdSINcIeG", "zSo4e07cTG", "W4WXW7LUWOy", "W5RcM8ksp8k3", "yCotW4q", "W5L8lSkvWO0", "WPZcKuXTW6W", "WPtcJ8oFrYq", "fshcOmoCW6a", "lmoXWQ7cOSk8", "ASkiWOehWOS", "W6OzWQxdK2K", "W63cUmkoimkN", "W4RcSSknjCkG", "wSkEeL/dNa", "rJqYW6tcNG9BCmosW5O", "aMrMWRxcMa", "jY/cVSkWWRaqyIJcSCo0mCo2", "wSkeWPKjWPS", "rtu3W6dcUdnhCSokW78", "lrZdJde4", "WP/cP8kd", "iLfhnmkd", "ECkNimo3WQ8", "CCowW7y", "qMLRCSkG", "yaFcOmoHWQy", "sSkiWOehWOS", "itRdLuDf", "WPbmWO0", "WOPujmkBWRi", "oSklWP9ZafKPkSos", "zvfWzmk1", "Cmk7WRFcJCkA", "W49die/cNG", "W4JdLJpcLwa", "WORcJx9LW6y", "gLpcHwFdVq", "pLlcICoIW4q", "W4TbW5NdJGu", "pWFdGrS+", "W5xcHIpdTCkklSkwu8oaW4xdPqK", "EXyafCkRA8o4u8kM", "W7WfWPBdM2m", "W6OcxSkLW6m", "W5fXlW", "WPbRWOZdNa", "D8kEn8oWWOG", "mfpdONqw", "cYBdGdC8", "W7ldQtxcIKS", "W40BhSkiWQi", "qCozy8kVWRO", "umkkfhZdKa", "EmotW5Lqma", "yCo+aSkMWRu", "W4xdJ8kkfMpcMmk4W6BdMG47kbG", "Eh58xSkL", "W6ayW4VdHCoC", "WPdcMmooDtu", "imkSjLdcPG", "W41yW5xdIam", "pLtcQmoIW5W", "CSk7WR3cJ8kg", "W7WJx8kZ", "EtRcK1ay", "EbRcK1Wv", "W6FcNCkkd8kg", "kvTOjG", "WQtcRmoiWRtcQdNdHa", "BCo1W44", "kdq+W7av", "o8k1kvtcVa", "Cd3cVCohWRi", "lbmNW6Cp", "zN7dOmoRW7i", "WOHqpmkhWQe", "dulcKW", "WO7dPMhcVCkB", "zSkhWP8GWR4", "dLrPkSoB", "W5r1l8kVWRe", "W4ldIstcGKG", "nM7dOxmr", "EtBcGq", "W4HyW64", "sSkydLldJq", "k0/cQCoIW50", "W65yimkTWOe", "yCkBWPiCWOS", "WPHWlSktW5K", "lq/cNq", "W6rzW6BdVXq", "WONdOhBcOmkh", "WQldK8kOW6xdS3ZcMetdIZrxW5/cJW", "W6iVW6BdPmop", "W6eNW6FdT8oq", "W54weSkuWPe", "aG5GWPBdRa", "yYBcQ8onWQ8", "CCo4hSkVWR4", "E3NdP8oHW6C", "FmocW7TDFG", "W4NdJb8+WRbpBxhcG8omWPFcOSoq", "s8kFWRiyWO0", "W4HYimkEWOO", "iY8Pj8oYW7/dMwjJWPpdSsTN", "W6tcKSoXWRVcRa", "W5G+gW", "cqGKW7mx", "W4hcP8kAl8kQ", "WPdcR8k5nIC", "umoCBG", "sSkqbgtcLq", "mu3cO8opW7O", "W7aJu8k1WQq", "BCosW54", "pCozW6bglG", "rJVcTSoeWQu", "zmotW418nG", "rs7cUSoBWQu", "WRpcHhTyW6e", "AaVcJfSr", "jYqViSkxWR7cM2fXWQK", "W55jW5ddJHG", "a0VcUuhdGG", "WPBcK0b4WQi", "WPpdVgBcSCkl", "mmk1v8o3WRlcLSkGW4JdLwu", "faHuWP/dRq", "WP/dOhZcSCkl", "WRDUWPpcLmkaWQvRW5PJusmwkW", "WPSviSknWQm", "WPpdRhBcVCko", "qCosW4zqkG", "WOpdNgq", "W60QW6/dHa", "WO7cG8kjkb4", "W7FcHCoKWOFcSq", "lcNcVSokW5XgrbhcTa", "W6lcHCo9WR3cTa", "W5X7lG", "WOpcTxJdKr5gW65Nlfvju18", "FgHTCSkL", "of7cUCo1W5m", "vSkcvSoaW5i", "WRnxW7eiFW", "W4ZcVIFcNSkRi3G3la", "W7CYW5u", "vGXv", "kK7dKWDeW7RcTSogpCkaWPXHzW", "W5VdQGxcRhu", "W5TYjmkgWPC", "WPVdJh7cSCkc", "W7lcJ8oIWQBcOW", "W47cJve", "WOtcICoBvcq", "vc3cVmohWQW", "C8o4cNlcPq", "W7ObWRNdNMi", "y8kiWPmhWOK", "WQhdLCkJWOtcTYVdUN/dSW", "W6iPW63dK8on", "yxf4BSkY", "drRdNrS7", "WOFcVSk2mYe", "aGrmWPddVa", "zmouaW", "pIhcOCou", "imoXWRhcRmk3", "yNldQCoHW6S", "sCklfgBcHa", "q8o8BSk5WQe", "mrvjWPBdPW", "WP7cR8kSkW", "W5ezyau", "W5T4W65UWP0", "W6/dRILfCu/cSgWvdq", "W5OyEIZcMq", "wSkbuCoaW4m", "wSknsmorW5i", "B8oUn8oMWRm", "Amk9WR3cJq", "EM/dVG", "mfnHn8oD", "ASk9WRtcRCkh", "WRFcPCkHlda", "ECosW7LBBq"];
  return rn = function() {
    return i;
  }, rn();
}
function uA(i, n, t, e, A) {
  return U(e - 364, i);
}
class eQ {
  [uA("1p*9", 1101, 1082, 985) + Te(1619, "VNIo", 1677, 1521, 1570) + oe(907, 979, 1025, "OiYk")](n) {
    function t(I, C, s, B, E) {
      return uA(s, C - 14, s - 198, B - 154);
    }
    function e(I, C, s, B, E) {
      return oe(I - 282, E - 694, s - 365, B);
    }
    const A = _i(n);
    function o(I, C, s, B, E) {
      return uA(B, C - 213, s - 166, I - 68);
    }
    function r(I, C, s, B, E) {
      return uA(C, C - 97, s - 181, B - 175);
    }
    const g = A?.[r(1315, "%9CO", 1222, 1228) + r(983, "#iN8", 1071, 1060) + "s"]();
    function a(I, C, s, B, E) {
      return oe(I - 362, C - 690, s - 83, B);
    }
    if (!g?.[a(1573, 1621, 1728, "6^%G") + "t"] || !g?.[o(924, 1017, 850, "G3dG")] || !g?.[a(1697, 1607, 1672, "1VlK") + a(1554, 1466, 1370, "L7ed")]) {
      if (o(923, 819, 959, "5[1e") !== o(952, 875, 875, "Qpq*")) return _0xb1cbf7 instanceof _0x110a65 && _0x1eb263[a(1478, 1449, 1497, "M[#h")] === e(1607, 1560, 1541, "5[1e", 1606) + e(1541, 1489, 1568, "2kI7", 1565) + e(1491, 1414, 1494, "G3dG", 1515) + a(1408, 1454, 1560, "yZmt");
      throw new y(o(1112, 1051, 1036, "zuXY") + e(1412, 1555, 1444, "M094", 1475) + e(1776, 1754, 1748, "JL%2", 1669) + a(1671, 1651, 1719, "5[1e") + t(997, 1001, "1VlK", 1049) + o(1122, 1149, 1059, "oKY]"));
    }
    if (A)
      if (o(1109, 1035, 1118, "p]$N") !== a(1673, 1647, 1684, "zuXY")) {
        const I = _0x2fe43f(_0x1a0ed1), C = I?.[t(1226, 1265, "pcp$", 1149) + r(1175, "zuXY", 1212, 1169) + "s"]();
        if (!C?.[r(1095, "yZmt", 1198, 1143) + "t"] || !C?.[e(1573, 1651, 1709, "qw[l", 1601)] || !C?.[e(1621, 1706, 1603, "#iN8", 1682) + t(975, 1113, "pcp$", 1084)]) throw new _0x32e6cf(o(1074, 962, 988, "qE16") + e(1535, 1565, 1564, "gt^u", 1502) + r(942, "fG@v", 1151, 1053) + e(1598, 1586, 1507, "2kI7", 1530) + o(1064, 1055, 957, "L7ed") + o(1125, 1143, 1153, "VNIo"));
        return I ? C[a(1455, 1568, 1666, "gt^u") + t(1007, 1103, "#iN8", 1001)] : void 0;
      } else return g[r(1107, "CGQb", 1110, 1049) + t(1050, 1044, "FzeQ", 1119)];
  }
  [vt(905, 837, "&KhF", 750, 842) + uA("qw[l", 1003, 995, 963) + Te(1709, "WThg", 1601, 1608, 1633) + uA("I0jt", 995, 1052, 936)]() {
    const n = document[A(1233, 1210, 1228, "%9CO") + t(265, 201, 146, 165, "G3dG") + t(73, 183, 163, 198, "h#sz")](A(1256, 1252, 1254, "VNIo"));
    n[r(1630, 1568, 1501, 1543, "MGxC") + A(1277, 1315, 1245, "gt^u")] = !0, n[A(1239, 1041, 1133, "OiYk")] = !0, n[t(113, 153, 186, 130, "M094") + e(1075, 1158, 1105, "0a1P") + "e"] = !0;
    function t(g, a, I, C, s) {
      return uA(s, a - 23, I - 12, a - -715);
    }
    n[r(1365, 1340, 1298, 1390, "QRlw")][o("G3dG", -188, -229, -234) + r(1485, 1542, 1481, 1525, "0a1P")] = r(1439, 1512, 1588, 1482, "fG@v") + A(1205, 1259, 1189, "zL*z");
    function e(g, a, I, C, s) {
      return uA(C, a - 15, I - 160, g - 178);
    }
    n[r(1448, 1356, 1447, 1376, "&KhF")][e(1051, 995, 1091, "qE16") + "ty"] = "0";
    function A(g, a, I, C, s) {
      return vt(g - 244, a - 295, C, C - 497, I - 393);
    }
    n[r(1497, 1427, 1493, 1403, "JL%2")][A(1198, 1255, 1188, "6^%G") + A(1210, 1327, 1249, "yhR@") + e(1154, 1227, 1266, "yhR@")] = A(1193, 1192, 1165, "Hyvy"), n[o("yZmt", -188, -189, -102)][o("p]$N", -137, -53, -109)] = A(1126, 1105, 1139, "I0jt");
    function o(g, a, I, C, s) {
      return Te(g - 318, g, I - 51, C - 69, I - -1647);
    }
    function r(g, a, I, C, s) {
      return ke(g - 64, a - 208, s, C - 1001);
    }
    return n[t(343, 316, 381, 348, "1OY#")][r(1394, 1512, 1431, 1502, "2kI7") + "t"] = r(1372, 1488, 1456, 1381, "#iN8"), n;
  }
  async [uA("sFkb", 1147, 1015, 1045) + uA("qE16", 917, 949, 964) + ke(583, 557, "*Ib!", 512) + Te(1350, "1OY#", 1481, 1512, 1417)](n, t, e) {
    return new Promise((A, o) => {
      function r(s, B, E, d, Q) {
        return U(s - -641, B);
      }
      function g(s, B, E, d, Q) {
        return U(d - -897, B);
      }
      function a(s, B, E, d, Q) {
        return U(d - 249, Q);
      }
      function I(s, B, E, d, Q) {
        return U(d - 583, B);
      }
      function C(s, B, E, d, Q) {
        return U(Q - -767, E);
      }
      if (C(-209, -252, "zuXY", -203, -286) === a(876, 974, 1018, 923, "fG@v")) {
        const s = () => {
          function d(f, h, p, D, b) {
            return a(f - 333, h - 320, p - 420, D - 526, b);
          }
          function Q(f, h, p, D, b) {
            return a(f - 95, h - 208, p - 397, b - 153, h);
          }
          function x(f, h, p, D, b) {
            return a(f - 166, h - 100, p - 338, p - -962, f);
          }
          Q(1069, "qE16", 1035, 1072, 1099) !== x("Fs$s", -277, -205) ? this[Q(1036, "FzeQ", 1120, 1054, 1043) + x("Qpq*", -49, -47) + "eo"](n, t) : this[d(1265, 1389, 1300, 1326, "M094") + Q(1082, "Qpq*", 1142, 1019, 1068) + "eo"](_0x39e871, _0x5a1a10);
        }, B = {};
        B[r(-36, "M[#h")] = !0, e?.[a(687, 764, 725, 743, "*3T!") + r(-64, "Hyvy") + a(935, 767, 937, 859, "OiYk") + "r"](g(-285, "*3T!", -259, -336), s, B), (async () => {
          function d(p, D, b, S, m) {
            return r(D - 1250, S);
          }
          function Q(p, D, b, S, m) {
            return g(p - 138, b, b - 149, S - 159);
          }
          function x(p, D, b, S, m) {
            return r(b - 1223, m);
          }
          function f(p, D, b, S, m) {
            return a(p - 51, D - 191, b - 99, m - -842, S);
          }
          function h(p, D, b, S, m) {
            return I(p - 0, b, b - 88, D - 363);
          }
          if (x(1225, 1157, 1118, 1172, "CGQb") === d(1312, 1212, 1154, "JL%2")) {
            const p = { ..._0x2e5867 }, D = p, b = { ...typeof D[d(1183, 1132, 1128, "5[1e")] == d(1006, 1109, 1143, "*Ib!") + "t" ? D[x(1065, 1141, 1153, 1053, "U7LM")] : {}, ..._0x28d113 }, S = b;
            if (_0x652e0b) {
              const m = {};
              m[d(1206, 1174, 1212, "I0jt")] = _0x415523, S[f(21, -28, -138, "6^%G", -25) + d(1174, 1120, 1112, "U7LM")] = m;
            }
            return D[f(-63, -89, 75, "*Ib!", -24)] = S, D;
          } else try {
            Q(-353, -260, "Dsv%", -260, -187) !== x(1107, 1262, 1171, 1070, "sFkb") ? (_0x264012?.[x(1146, 1232, 1121, 1123, "R83H") + d(1272, 1233, 1197, "*3T!", 1281) + d(1405, 1291, 1352, "U7LM", 1239) + x(1187, 1225, 1258, 1329, "x[5w")](x(1126, 1261, 1217, 1284, "M094"), _0x48278f), _0x5ba3dd(_0x17a07e), _0xbfa2dd(_0x42d0f0)) : (await n[x(1095, 1292, 1199, 1282, "qE16")](), e?.[x(1224, 1163, 1139, 1063, "pcp$") + f(190, 80, 176, "#iN8", 102) + d(1260, 1242, 1347, "qE16", 1206) + Q(-227, -213, "zL*z", -171, -173)](d(1004, 1082, 1031, "Fs$s", 1025), s), A());
          } catch (p) {
            d(1167, 1154, 1104, "1p*9") === f(-25, -212, -89, "M094", -106) ? (_0x5aa34e[d(1298, 1269, 1166, "1VlK")](), _0xee3fb4(_0x2f5f8c), _0x4b66a[h(1506, 1533, "G3dG") + "e"]()) : (e?.[f(-140, -146, -141, "*Ib!", -119) + d(1171, 1079, 1191, "Fs$s") + f(-35, 167, 175, "OiYk", 69) + h(1641, 1640, "fG@v")](h(1425, 1419, "Fs$s"), s), Et(t), o(p));
          }
        })();
      } else return _0x3e178d[I(1195, "qE16", 1281, 1226) + g(-479, "sFkb", -300, -390)];
    });
  }
  async [uA("%9CO", 810, 897, 919) + Te(1463, "Dsv%", 1614, 1571, 1500) + oe(983, 947, 974, "OiYk") + "m"](n, t) {
    function e(B, E, d, Q, x) {
      return oe(B - 299, x - -317, d - 414, B);
    }
    const A = this[I(945, 981, "CGQb", 930) + g("7Vf&", -276, -306, -393, -302) + C(1265, "QRlw", 1280, 1140, 1233) + C(1042, "yZmt", 962, 1105, 1046)](), o = await navigator[g("FzeQ", -385, -375, -428, -392) + a(1062, 1038, "Dsv%", 1030, 1087) + "es"][a(898, 944, "R83H", 1018, 984) + I(784, 716, "I0jt", 818) + "ia"](n), r = this[a(908, 966, "WThg", 1078, 990) + g("WThg", -239, -381, -413, -312) + I(959, 1020, "#iN8", 914)](o);
    function g(B, E, d, Q, x) {
      return oe(B - 122, x - -1272, d - 276, B);
    }
    function a(B, E, d, Q, x) {
      return oe(B - 392, x - 155, d - 261, d);
    }
    function I(B, E, d, Q, x) {
      return ke(B - 427, E - 124, d, Q - 431);
    }
    function C(B, E, d, Q, x) {
      return ke(B - 404, E - 333, E, x - 658);
    }
    A[I(1021, 877, "!IU2", 971) + I(838, 996, "CGQb", 894)] = o;
    try {
      if (g("M094", -431, -398, -433, -500) !== e("WThg", 555, 531, 477, 488)) throw new _0xcea216(a(1117, 1069, "zuXY", 1193, 1127) + g("yZmt", -323, -439, -300, -342) + I(737, 766, "Qpq*", 846, 836) + I(742, 916, "sFkb", 817, 795) + C(1091, "p]$N", 1135, 1242, 1128) + e("Dsv%", 524, 571, 513, 623));
      await this[e("JL%2", 485, 495, 653, 581) + e("R83H", 618, 503, 433, 528) + e("*3T!", 380, 546, 356, 470) + a(1072, 900, "M094", 1026, 987)](A, o, t);
    } catch (B) {
      a(1038, 1100, "yZmt", 1003, 1103) !== e("!IU2", 746, 568, 603, 654) ? _0x3b6fdf[C(1121, "0a1P", 1020, 1114, 1066) + I(842, 1007, "JL%2", 937)](_0x5aa817) : y[e("VNIo", 540, 545, 509, 559) + a(1109, 916, "qw[l", 887, 994)](B);
    }
    const s = {};
    return s[e("G3dG", 596, 434, 469, 507) + g("!IU2", -352, -513, -514, -417) + "m"] = o, s[e("Dsv%", 567, 606, 747, 632) + a(1161, 1068, "x[5w", 1100, 1106)] = r, s;
  }
  [uA("Qpq*", 905, 901, 1e3) + ke(493, 528, "FzeQ", 563) + "eo"](n, t) {
    function e(A, o, r, g, a) {
      return oe(A - 211, a - -259, r - 493, A);
    }
    n[e("yZmt", 557, 592, 502, 552)](), Et(t), n[e("1VlK", 567, 482, 488, 508) + "e"]();
  }
  [uA("qE16", 1033, 901, 959) + oe(849, 886, 861, "zuXY") + Te(1512, "R83H", 1526, 1469, 1447) + uA("#iN8", 869, 1013, 960) + "or"](n) {
    function t(A, o, r, g, a) {
      return vt(A - 367, o - 145, r, g - 474, a - 534);
    }
    function e(A, o, r, g, a) {
      return uA(r, o - 196, r - 239, a - -578);
    }
    return n instanceof DOMException && n[t(1272, 1190, "*3T!", 1360, 1267)] === t(1261, 1262, "Dsv%", 1143, 1220) + t(1340, 1385, "L7ed", 1288, 1324) + e(361, 500, "!IU2", 552, 456) + e(421, 300, "zL*z", 422, 409);
  }
  [uA("!IU2", 927, 1080, 972) + ke(486, 583, "CGQb", 475) + vt(805, 779, "QRlw", 904, 811) + "s"](n = {}, t = {}, e) {
    const A = { ...n }, o = A, r = { ...typeof o[I("L7ed", -119, -95, -196)] == B(560, 547, 631, "2kI7") + "t" ? o[B(468, 410, 404, "WThg")] : {}, ...t };
    function g(E, d, Q, x, f) {
      return ke(E - 392, d - 141, d, f - 986);
    }
    const a = r;
    function I(E, d, Q, x, f) {
      return vt(E - 380, d - 448, E, x - 101, d - -892);
    }
    function C(E, d, Q, x, f) {
      return ke(E - 150, d - 222, Q, f - 0);
    }
    function s(E, d, Q, x, f) {
      return oe(E - 359, f - 550, Q - 138, E);
    }
    if (e)
      if (B(506, 459, 468, "1OY#") !== C(520, 337, "zuXY", 537, 440)) {
        const E = _0x499ac5[s("7Vf&", 1337, 1332, 1430, 1324) + I("qw[l", -6, 66, -22) + I("0a1P", -179, -249, -110)](s("ar!o", 1552, 1492, 1506, 1488));
        return E[C(461, 449, "gt^u", 403, 391) + g(1365, "qw[l", 1496, 1471, 1466)] = !0, E[g(1435, "G3dG", 1465, 1394, 1402)] = !0, E[C(460, 370, "OiYk", 409, 452) + B(461, 568, 429, "M[#h") + "e"] = !0, E[g(1454, "CGQb", 1458, 1419, 1440)][I("0a1P", -10, -62, 21) + s("M094", 1498, 1595, 1472, 1517)] = B(538, 565, 510, "yZmt") + s("U8tb", 1491, 1510, 1463, 1468), E[s("I0jt", 1420, 1471, 1284, 1370)][s("oKY]", 1241, 1259, 1286, 1313) + "ty"] = "0", E[B(600, 594, 687, "*Ib!")][I("JL%2", -124, -96, -194) + B(485, 571, 506, "Dsv%") + I("*Ib!", -112, -16, -69)] = s("VNIo", 1427, 1399, 1447, 1423), E[B(584, 693, 597, "U7LM")][g(1567, "M[#h", 1406, 1418, 1459)] = g(1395, "Qpq*", 1337, 1534, 1430), E[s("FzeQ", 1465, 1492, 1456, 1400)][C(473, 494, "OiYk", 552, 509) + "t"] = I("qE16", -43, -49, -49), E;
      } else {
        const E = {};
        E[B(673, 653, 611, "5[1e")] = e, a[B(646, 555, 682, "imYA") + B(451, 414, 471, "0a1P")] = E;
      }
    o[B(551, 585, 546, "*Ib!")] = a;
    function B(E, d, Q, x, f) {
      return Te(E - 441, x, Q - 13, x - 366, E - -959);
    }
    return o;
  }
}
const uI = {};
uI.ideal = 1920;
const fI = {};
fI.ideal = 1080;
const No = {};
No.width = uI, No.height = fI, No.facingMode = br.FRONT;
const tQ = No;
class hI {
  #A;
  #e = [];
  #t = null;
  constructor({ defaultVideoConstrains: n = tQ, minCameraShorterSide: t = YC } = {}) {
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
    if (this.#t) return _i(this.#t);
  }
  get isCameraActive() {
    return !!this.#t?.active;
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    Et(t);
  }
  async open(n = {}) {
    Ma() && et() && await Ji(450), this.#t = await navigator.mediaDevices.getUserMedia(n), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new y("Video track must be initialized to get next device");
    const n = await qn(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + (-7588 + 4829 * -2 + 17247)] ?? n[9598 + 454 * -13 + -3696]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new y("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    this.#t && (Et(this.#t), this.#t = null);
  }
  async getProperties() {
    const n = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = n;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = this.#e, A;
  }
  getSettings() {
    if (!this.videoTrack) throw new y("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const n = this.getSettings();
    if (!n.width) throw new y("Video width is undefined");
    if (!n.height) throw new y("Video height is undefined");
    const t = {};
    return t.width = n.width, t.height = n.height, t;
  }
  async getDeviceName() {
    const n = this.getSettings();
    return (await nI()).find((A) => A.deviceId === n.deviceId)?.label;
  }
  async getBestCameraInfo(n) {
    if (n !== br.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (Nr())
      return (await qn()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const n = await qn();
    for (const t of n) {
      Ma() && et() && await Ji(450);
      try {
        const e = {};
        e.exact = t.deviceId;
        const A = {};
        A.ideal = 480;
        const o = {};
        o.deviceId = e, o.width = A;
        const r = {};
        r.video = o;
        const g = await navigator.mediaDevices.getUserMedia(r), a = _i(g);
        if (!a) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const I = a.getSettings(), C = { ...I };
        C.deviceName = a.label;
        const s = {};
        s.cameraProperties = C;
        const B = s;
        this.#e.push(B), Et(g);
      } catch (e) {
        e instanceof Error && y.logError(e);
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
      throw this.close(), new y("Could not init camera settings");
    if (typeof this.#A.minCameraShorterSide != "number") return;
    if (Math.min(n?.width, n?.height) < this.#A.minCameraShorterSide)
      throw this.close(), new y("Could not init video because of low camera resolution: " + n.width + "x" + n.height + ".");
  }
}
class oQ {
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
    this.#A || (this.#A = !0, await hI.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), gB() && await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t?.deviceId);
    !et() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
  }
  takePhoto() {
    if (!this.cameraHandler.videoTrack) throw new y("Video track must be initialized to take photo");
    const n = this.cameraHandler.videoTrack?.getSettings();
    if (!n?.width) throw new y("Cant take photo - video width is undefined");
    if (!n?.height) throw new y("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = n.width, t.height = n.height;
    const e = t.getContext("2d");
    if (!e) throw new y("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 0, -3 * -2396 + 6 * 433 + -9786 * 1), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop(), this.videoRecorder?.stopRecording(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(n) {
    await this.cameraHandler.open(n), rB() && (this.cameraHandler.close(), await this.cameraHandler.open(n));
    const [, t] = await Promise.all([this.mountVideoStream(), this.cameraHandler.getDeviceName()]);
    !et() && await this.cameraEvaluator.setMostRecentCameraName(t), this.videoRecorder?.startRecording();
  }
  async switchCamera() {
    const n = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(n);
    this.pauseStream(), !et() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
    if (!this.cameraHandler.mediaStream) throw new y("Media Stream must be initialized to stream");
    await this.videoHandler.play(this.cameraHandler.mediaStream);
  }
}
class nQ {
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
function AA(i, n) {
  i = i - (-4954 * 1 + 454 + 4676);
  var t = an(), e = t[i];
  if (AA.wfMzSN === void 0) {
    var A = function(I) {
      for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", B = "", E = 0, d, Q, x = 0; Q = I.charAt(x++); ~Q && (d = E % 4 ? d * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & d >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (var f = 0, h = s.length; f < h; f++)
        B += "%" + ("00" + s.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(B);
    }, o = function(I, C) {
      var s = [], B = 0, E, d = "";
      I = A(I);
      var Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (var x = 0; x < I.length; x++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, d += String.fromCharCode(I.charCodeAt(x) ^ s[(s[Q] + s[B]) % 256]);
      return d;
    };
    AA.VilvFX = o, AA.dLfKXM = {}, AA.wfMzSN = !0;
  }
  var r = t[-9453 + 411 * 23], g = i + r, a = AA.dLfKXM[g];
  return a ? e = a : (AA.pGKvrB === void 0 && (AA.pGKvrB = !0), e = AA.VilvFX(e, n), AA.dLfKXM[g] = e), e;
}
(function(i, n) {
  function t(I, C, s, B, E) {
    return AA(E - -100, I);
  }
  function e(I, C, s, B, E) {
    return AA(I - -803, s);
  }
  function A(I, C, s, B, E) {
    return AA(C - 776, B);
  }
  function o(I, C, s, B, E) {
    return AA(C - -388, E);
  }
  var r = i();
  function g(I, C, s, B, E) {
    return AA(B - 807, E);
  }
  for (; ; )
    try {
      var a = -parseInt(A(979, 998, 1012, "q^KP", 1004)) / 1 + -parseInt(o(-116, -175, -184, -236, "d!nj")) / 2 + -parseInt(A(1021, 1038, 1046, "[mdx", 1097)) / 3 + parseInt(e(-625, -677, "0U$]", -654, -658)) / 4 + -parseInt(o(-242, -209, -241, -220, "KhyO")) / 5 * (-parseInt(A(930, 952, 922, "fmeW", 990)) / 6) + parseInt(g(1031, 1094, 990, 1050, "0U$]")) / 7 * (-parseInt(t("doH1", 121, 147, 123, 141)) / 8) + -parseInt(g(965, 1012, 945, 998, "8qDl")) / 9 * (-parseInt(e(-515, -502, "lnb2", -558, -581)) / 10);
      if (a === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(an, -2037670 + 6046 * 461);
function xe(i, n, t, e, A) {
  return AA(t - 474, n);
}
function an() {
  var i = ["W6G4d8oZxq", "WO3dUCk8zCoZ", "t8o6bW", "WOzVW5S", "WPX2W4e", "oCkhqr1k", "W6DPqLRcHq", "W69flNui", "WQpcGGtdLCkRxL83W7FdJ8kUWPVcIW", "FCkOW6HDWP0", "W4FcMxfriG", "sSkBhmkAWQm", "gWJdH8ogWO8", "W5NdV8kfW6Wf", "WQldQSo2", "ESkIW7KY", "rmo6W6vsoW", "W7eWB3Wq", "uhyge8oV", "gehcICoMmW", "vmo6W6u", "hCofxCoEW6dcT8kicNn0lmkF", "W50Il1Wl", "xmkxhmkpWRG", "l8kYWP3cSCoe", "W7BdN1JcM8o+", "W7dcVdhcVCkY", "gbldHSo2WPq", "W4BcNMO", "WPhcTmo1W6HS", "W7vClG", "pSkQsdlcHW", "W5OZWQVcUmod", "WPxdQNbpWOFdINe", "W7VcNmkN", "W4pdSmkJWRCSjxHVWRfPWOyu", "sCkwqW", "W7y+W6Tsg8o7W5DCW6ishZ3cMG", "jSkcW6pcISkkibOo", "gmoZW5/cNq", "sCkQW6pcRaNdSmo9WQm", "W4tdUmkdW7y4", "wbVcRt0t", "WPL3wmojsq", "xxOnemoP", "W5JdUmkE", "W6ZdMIHUWRy", "s8oYnMuY", "yCo+W5JcRmkm", "WP/dTmobcIG", "W4ZcK8khW7uQW68H", "W7dcISkGgCkx", "WQunWOysWO4", "WR/dPSonW7qdW7HPxtfBitm", "tCoYg3Og", "W71DiMem", "WOFdGsSlqSkTWR/cVSkVjSk1WRvZ", "WOhdGmkQAmo8", "p8kMqW", "W6G3gCo/xG", "W40YW4BdUrC", "BCkPW7eVyq", "WOafWOSsWP4", "jmkcWOhdR8oaFv0wmLZdQsJcTa", "W7WYhW", "fehcHmownq", "W6yRbq", "yGpcUJSl", "W57cVcdcRCkZ", "eCkVDXFcHa", "tHZcSq", "WQCkWPq2WO4", "WPZcOmoBWRnGW4PYW5pcSmkBW4xcKCoD", "t8k7wd0K", "mbhdS8ocWOm", "CCkJW6S", "prpdKCoMWOS", "t8o5c34D", "d8o0W4u", "CSkRW7y", "WP8aWOO2yW", "lCoZWRiqW4VcH8kowsfJu0q", "WQldQCo6oW4", "W5ZdG8kSECkUWR3cKvZcGeFdLmopW6e", "WOGxWPyYWPq", "tWtcQa", "W6W1W4ZdRJi", "WOybWPWvWPq", "WPdcTCkyW6eO", "W7pdJ8ofW7NdHW", "WPaanYNdNq", "WPq+D0zT", "W6aXdG", "W4tdJSoYW53dVa", "WRZcR8oWW6rR", "WPmeicNdNG", "gunRWPy6", "Amoga2KtW5nyWQeosmoIaJq", "W4ePmHxdMSkWW5e", "zCk0W7ncWO8", "W6NdI8ohWRWIuLRdHX0ApSknCa", "WQ7dTmoGdaG", "W7rCWRC1uSknWO8", "W4ddRCozWPT4WQjfW5tcGu3cS8o+nW", "W4NdI2PuWRm", "oCk/vYDH", "WOOmocpdKG", "WOyhsxbQ", "tSkBamkn", "W7ZdLKJcKCoT", "vmkTW6jeWOK", "W5BdL3zWWQm", "cCozW57cJbu", "WPuNEvHE", "berTWOWh", "W6i5eSogwq", "WPCwnW", "WP7cVSkvW50Z", "hCo/W4xcSH4", "sCo6W6H9pG", "WPPVW4BcVmkl", "WQtdG8oGw8okCCkOWQxdPSkkWPCUW7e", "W5i5lLS0", "W7ldGelcOSoW", "W7uFBKaI", "CSoxW4xcI8kr", "W7dcTSkMdSkC", "nmkYWPBcP8oz", "WPBcR8o9W6m", "xLGAgSoz", "WPZdM8k2CSoJ", "WOeJAKvj", "WOOVtfL7", "W73cKSk+d8kE", "W4JdR8kAW7a0", "WOufWOSvWPC", "hKxcNSoHoq", "WORcKmoPa8o6", "W7VcPmkyWQPu"];
  return an = function() {
    return i;
  }, an();
}
function ne(i, n, t, e, A) {
  return AA(t - 343, n);
}
function IA(i, n, t, e, A) {
  return AA(t - -653, i);
}
function PA(i, n, t, e, A) {
  return AA(n - -661, t);
}
function ie(i, n, t, e, A) {
  return AA(A - -157, t);
}
class iQ {
  [ie(88, 67, "3CN0", 68, 38) + ie(48, 100, "lnb2", 70, 107) + xe(725, "PuIz", 693)] = 8095 + -7 * 1068 + -619;
  [PA(-489, -479, "d!nj") + ne(610, "q^KP", 632) + IA("CcG!", -422, -398) + IA("8EEw", -427, -359)];
  [IA("T5@8", -369, -346) + ne(581, "q^KP", 594) + "p"] = void 0;
  constructor() {
    function n(o, r, g, a, I) {
      return IA(g, r - 38, r - 995);
    }
    function t(o, r, g, a, I) {
      return xe(o - 206, o, g - -263);
    }
    function e(o, r, g, a, I) {
      return PA(o - 297, g - 756, o);
    }
    function A(o, r, g, a, I) {
      return ie(o - 23, r - 107, a, a - 120, I - 765);
    }
    this[A(800, 861, 788, "CcG!", 845) + e("w@mV", 381, 407) + e("xD[)", 312, 347) + n(716, 652, "@e22")] = Date[t("wR7l", 474, 427)]();
  }
  [xe(685, "cosd", 705) + ie(60, 138, "aLI@", 126, 89) + PA(-507, -454, "cTGx")]() {
    function n(r, g, a, I, C) {
      return IA(r, g - 457, a - 496);
    }
    function t(r, g, a, I, C) {
      return xe(r - 247, C, a - 292);
    }
    function e(r, g, a, I, C) {
      return ne(r - 247, g, C - -711);
    }
    this[e(-116, "lnb2", -148, -56, -118) + e(-96, "8EEw", -79, -189, -126) + e(-244, "8CpU", -241, -158, -191)]++;
    function A(r, g, a, I, C) {
      return IA(I, g - 120, r - 1004);
    }
    function o(r, g, a, I, C) {
      return xe(r - 412, r, g - -293);
    }
    this[t(1018, 1021, 1034, 1060, "(L0D") + o("lnb2", 445) + o("z2]q", 489)] === -9114 + 667 * -1 + 9782 * 1 && (e(-99, "xD[)", -189, -53, -123) === o("cTGx", 381) ? (this[n("8qDl", 48, 101) + A(636, 638, 645, "aLI@") + o("cTGx", 386)]++, this[n("!8t!", 98, 141) + A(576, 581, 571, "HxV&") + t(1076, 1062, 1049, 981, "SB^9")] === 1 && (this[t(1067, 1070, 1068, 1056, "Pw[b") + e(-208, "1jEi", -232, -128, -167) + "p"] = _0x47c04d[t(1036, 1028, 986, 949, "q^KP")]() - this[o("8EEw", 404) + n("@e22", 21, 39) + A(622, 562, 657, "ig3j") + o("MYq[", 380)])) : this[n("lY$j", 171, 134) + t(1039, 986, 987, 948, "4hf]") + "p"] = Date[t(983, 950, 992, 1019, "pq3U")]() - this[o("SB^9", 442) + o("lnb2", 486) + n("d!nj", 155, 136) + e(-108, "cTGx", -131, -183, -135)]);
  }
  [ne(636, "Y$3W", 575) + PA(-331, -352, "fmeW") + ie(186, 106, "Cmed", 140, 120) + PA(-422, -444, "T5@8") + "up"]() {
    if (!Ht()) {
      if (o(563, 618, "Y$3W", 594, 617) !== n("MYq[", 581, 595, 564, 588)) return;
      this[n("3CN0", 608, 558, 552, 596) + n("@e22", 532, 507, 519, 574) + o(638, 665, "z2]q", 605, 659) + e("3CN0", 1257, 1157, 1201)] = _0x59a30e[n("[mdx", 660, 714, 753, 692)]();
    }
    function n(r, g, a, I, C) {
      return IA(r, g - 173, C - 1031);
    }
    function t(r, g, a, I, C) {
      return PA(r - 440, C - 1194, a);
    }
    this[o(664, 587, "cTGx", 557, 625) + e("uAUT", 1041, 1058, 1106) + o(660, 723, "kE^c", 609, 669)] = -17 * 470 + -443 * -17 + 459;
    function e(r, g, a, I, C) {
      return IA(r, g - 389, I - 1572);
    }
    function A(r, g, a, I, C) {
      return ie(r - 110, g - 289, a, I - 418, I - 357);
    }
    function o(r, g, a, I, C) {
      return PA(r - 145, C - 1030, a);
    }
    this[A(376, 378, "Zyu&", 409) + e("fmeW", 1114, 1128, 1154) + "p"] = void 0, window[t(728, 729, "wR7l", 729, 735) + A(522, 412, "[mdx", 467) + o(558, 508, "KhyO", 555, 558) + A(516, 425, "wR7l", 495)](t(758, 735, "HxV&", 804, 761) + "wn", this[t(866, 794, "MYq[", 811, 844) + e("8UE)", 1154, 1275, 1216) + t(809, 760, "SB^9", 748, 817)][t(820, 788, "fmeW", 786, 802)](this));
  }
  [IA("1jEi", -451, -426) + IA("%z$G", -441, -469) + xe(638, "HxV&", 677) + xe(649, "pq3U", 682) + "up"]() {
    function n(g, a, I, C, s) {
      return IA(s, a - 475, I - 453);
    }
    if (!Ht()) {
      if (n(84, 98, 34, 0, "70ZQ") === n(48, -15, -10, -75, "8EEw")) return;
      var t = {};
      return t[r(-373, "(L0D") + r(-423, "Y$3W") + "e"] = !1, t;
    }
    function e(g, a, I, C, s) {
      return IA(I, a - 483, a - 769);
    }
    function A(g, a, I, C, s) {
      return ie(g - 363, a - 210, a, C - 56, C - 685);
    }
    function o(g, a, I, C, s) {
      return ie(g - 223, a - 418, g, C - 150, s - 1108);
    }
    function r(g, a, I, C, s) {
      return ne(g - 150, a, g - -1020);
    }
    window[r(-397, "cTGx") + e(287, 345, "8qDl") + r(-398, "A3)&") + "r"](A(787, "Cmed", 880, 827) + "wn", this[o("HxV&", 1216, 1183, 1229, 1227) + e(339, 397, "ig3j") + n(74, -27, 11, -12, "pq3U")][e(343, 365, "lY$j")](this));
  }
  [ne(505, "70ZQ", 573) + xe(753, "*be[", 760) + "lt"]() {
    function n(g, a, I, C, s) {
      return IA(s, a - 307, I - 312);
    }
    function t(g, a, I, C, s) {
      return PA(g - 193, g - 270, a);
    }
    function e(g, a, I, C, s) {
      return xe(g - 95, I, s - -953);
    }
    function A(g, a, I, C, s) {
      return IA(I, a - 231, C - -199);
    }
    if (!Ht() || !this[n(-64, -38, -69, -34, "Y$3W") + e(-177, -219, "Zyu&", -200, -173) + "p"])
      if (n(-165, -120, -126, -105, "T5@8") !== t(-179, "HxV&")) {
        var o = {};
        return o[t(-88, "lY$j") + t(-144, "cosd") + "e"] = !1, o;
      } else {
        if (!_0x4d299e()) return;
        _0x4212a2[n(-101, -86, -76, -87, "8UE)") + r("kE^c", -462, -391, -443) + A(-516, -497, "@e22", -565) + "r"](n(-154, -109, -105, -148, "cosd") + "wn", this[r("[mdx", -457, -434, -465) + e(-253, -234, "!8t!", -266, -209) + n(-138, -93, -84, -30, "cosd")][A(-694, -685, "PuIz", -672)](this));
      }
    function r(g, a, I, C, s) {
      return PA(g - 249, C - -78, g);
    }
    return { performance: !0, hiccupAmount: this[t(-113, "n6Z@") + r("pq3U", -602, -593, -556) + A(-547, -638, "PuIz", -599) + "t"](), firstHiccup: this[t(-125, "KhyO") + t(-118, "Y$3W") + e(-202, -216, "Pw[b", -152, -216) + e(-272, -221, "d!nj", -225, -204) + "ss"]() };
  }
  [PA(-387, -402, "PuIz") + ne(628, "q^KP", 583) + IA("8CpU", -444, -439) + "t"]() {
    function n(A, o, r, g, a) {
      return ie(A - 141, o - 162, g, g - 394, a - 429);
    }
    function t(A, o, r, g, a) {
      return ie(A - 465, o - 95, o, g - 332, A - 147);
    }
    function e(A, o, r, g, a) {
      return ne(A - 216, a, r - -442);
    }
    return this[n(538, 560, 561, "suzG", 532) + e(147, 164, 193, 181, "T5@8") + t(176, "d!nj", 187, 158)];
  }
  [IA("Cmed", -492, -447) + ne(492, "3CN0", 531) + ne(557, "ig3j", 541) + IA("[mdx", -523, -461) + "ss"]() {
    function n(e, A, o, r, g) {
      return PA(e - 342, g - 1161, A);
    }
    function t(e, A, o, r, g) {
      return PA(e - 172, A - 27, r);
    }
    return this[t(-447, -449, -474, "!8t!") + n(749, "HxV&", 760, 638, 693) + "p"];
  }
}
const rQ = 480, aQ = -3 * -858 + -9591 + 7257, Mr = -5524 + -518 * 2 + 6590, pI = 15633 + 822 * -19, yI = 8, qi = {};
qi.codec = "avc1.42E01E", qi.bitrate = 1e6;
const Bo = qi, gQ = 2, sQ = -5208 + -16295 * -1 + 18913;
class IQ {
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
    let n = 0;
    for (const t of this.testFramesSizesList)
      n += t;
    return this.shouldBeTested = !1, n > this.maximumTestFramesSize;
  }
}
class mI {
  encoder;
  create(n) {
    this.encoder = new VideoEncoder({ output: (t, e) => {
      const A = new Uint8Array(t.byteLength);
      t.copyTo(A), n(t, e);
    }, error: (t) => {
      throw y.fromError("Encoding error: " + t);
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
function cQ(i) {
  if (!i) return !1;
  const n = mI.isSupported();
  return !n && y.logError("Video encoding is not supported in this browser."), n;
}
const Vi = {};
Vi.LOW = "low", Vi.STANDARD = "standard";
const gn = Vi, Zi = {};
Zi.SPS = "SPS", Zi.PPS = "PPS";
const Vn = Zi;
class CQ {
  parseAVCCParameterSets(n) {
    try {
      let t = 0;
      if (t += 227 + 8607 * 1 + -8830, t >= n.length) return;
      t++;
      const e = this.extractSPSFromAVCCAndSkipToNext(n, t);
      t = e.nextOffset;
      const A = this.extractPPSFromAVCCAndSkipToNext(n, t), o = {};
      return o.pictureParameterSet = A.parameterSet, o.sequenceParameterSet = e.parameterSet, o;
    } catch (t) {
      y.logError("Failed to parse AVCC parameter sets: " + t);
    }
  }
  extractSPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, Vn.SPS);
  }
  extractPPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, Vn.PPS);
  }
  extractParameterSetFromAVCCAndSkipToNext(n, t, e) {
    if (t >= n.length) {
      const r = {};
      return r.nextOffset = t, r;
    }
    const A = e === Vn.SPS ? n[t] & -7196 + -7227 * -1 : n[t], o = t + (1 * 5837 + -1762 + -2 * 2037);
    return this.skipToNextSectionAndReturnFirstParameterSet(n, o, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(n, t, e) {
    let A = t;
    for (let r = 1 * 1052 + -2806 + 1754; r < e; r++) {
      const g = this.extractSingleParameterSetFromAVCC(n, A);
      if (A = g.nextOffset, g.parameterSet && r === -7687 + 1 * 1937 + -10 * -575) {
        const a = {};
        return a.parameterSet = g.parameterSet, a.nextOffset = A, a;
      }
    }
    const o = {};
    return o.nextOffset = A, o;
  }
  extractSingleParameterSetFromAVCC(n, t) {
    if (t + (-7206 + -2 * -3604) > n.length) {
      const I = {};
      return I.nextOffset = t, I;
    }
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint16(t, !1), o = t + (-447 + -449 * -1), r = o + A;
    if (r > n.length) {
      const I = {};
      return I.nextOffset = t, I;
    }
    const g = n.slice(o, r), a = {};
    return a.parameterSet = g, a.nextOffset = r, a;
  }
}
class BQ {
  parameterSetsHandler;
  START_CODE = new Uint8Array([2751 * 1 + -413 * -19 + -10598, -1370 + 351 * -15 + 5 * 1327, 0, 694 + 1 * 5891 + 2 * -3292]);
  parameterSets;
  constructor() {
    this.parameterSetsHandler = new CQ();
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
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint32(t, !1), o = t + (-507 + 1 * -7597 + 8108), r = o + A;
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
    let A = 6734 + 1 * -6734;
    for (const o of n)
      e.set(o, A), A += o.length;
    return e;
  }
}
class QQ {
  chunks = [];
  maxChunksCount;
  constructor(n = yI, t = Mr) {
    this.cleanSetup(n, t);
  }
  cleanSetup(n, t) {
    this.clear(), this.maxChunksCount = (n + (-1 * -5573 + -12 * -257 + -1082 * 8)) * t;
  }
  add(n) {
    this.chunks.push(n), this.maxChunksCount && this.chunks.length > this.maxChunksCount && this.chunks.shift();
  }
  clear() {
    this.chunks = [];
  }
  getChunks() {
    const n = this.chunks.findIndex((t) => t.type === "key");
    return this.chunks.slice(Math.max(5756 + -9404 * 1 + -3 * -1216, n));
  }
}
class Ya {
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
    if (!this.codec) throw y.logError("VideoEncoderConfigBuilder: codec is not set.");
    if (!this.resolution) throw y.logError("VideoEncoderConfigBuilder: resolution is not set.");
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
class EQ {
  getScaledResolution(n, t) {
    const { height: e, width: A } = n, o = A / e;
    if (Ts() && e > A) {
      const g = e, a = A, I = g / a, C = t * I;
      return { width: Math.floor(C / (6 * 907 + 8973 + -14413)) * (4700 + 979 * -4 + -782), height: t };
    }
    if (A < e) {
      const g = t / o;
      return { width: t, height: Math.floor(g / (-2 * -842 + -1 * -3733 + -361 * 15)) * (601 * -1 + 5206 + -4603) };
    }
    const r = t * o;
    return { width: Math.floor(r / (-13 * 317 + 6683 + -2560)) * (12725 + -3 * 4241), height: t };
  }
  create(n, t) {
    switch (n) {
      case gn.STANDARD:
        return new Ya().setBitrate(Bo.bitrate).setCodec(Bo.codec).setFramerate(Mr).setResolution(this.getScaledResolution(t, rQ)).build();
      case gn.LOW:
        return new Ya().setBitrate(Bo.bitrate).setCodec(Bo.codec).setFramerate(pI).setResolution(this.getScaledResolution(t, aQ)).build();
      default:
        throw y.logError("Unsupported preset for video encoder config");
    }
  }
}
class dQ {
  videoProcessor;
  videoEncoder;
  chunkStorage;
  qualityTester;
  cameraHandler;
  videoEncoderConfigFactory;
  cameraFramerate;
  captureIntervalId;
  videoElement;
  currentConfigPreset = gn.STANDARD;
  customEvent;
  currentResolution;
  boundCameraPropsChangedHandler;
  constructor(n, t, e, A, o) {
    this.videoProcessor = n, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new EQ(), this.chunkStorage = new QQ(), this.cameraFramerate = Mr, this.customEvent = o, this.videoEncoder.create(this.onChunkEncoded.bind(this)), this.boundCameraPropsChangedHandler = this.handleCameraPropsChange.bind(this), this.setupCameraPropsChangedListener();
  }
  onChunkEncoded(n, t) {
    this.chunkStorage.add(n), t?.["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(n.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(yI, pI), this.currentConfigPreset = gn.LOW, this.startRecording();
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
    if (Ts()) return;
    const t = n.detail?.["cameraResolution"], e = this.currentResolution?.width !== t?.width, A = this.currentResolution?.height !== t?.height;
    !e && !A || this.restartRecording();
  }
  startRecording(n = this.currentConfigPreset) {
    if (this.captureIntervalId) {
      y.logError("Recording is already in progress.");
      return;
    }
    if (!this.cameraHandler.mediaStream) {
      y.logError("Camera media stream is not available.");
      return;
    }
    this.createVideoElement(this.cameraHandler.mediaStream), this.configureVideoEncoder(n), this.createCaptureInterval();
  }
  async stopRecording() {
    this.clearCaptureInterval(), this.removeCameraPropsChangedListener(), await this.videoEncoder.close();
  }
  configureVideoEncoder(n) {
    if (this.currentResolution = this.cameraHandler?.getResolution(), !this.currentResolution) {
      y.logError("Camera resolution could not be determined.");
      return;
    }
    let t;
    try {
      t = this.videoEncoderConfigFactory.create(n, this.currentResolution);
    } catch (e) {
      y.logError("Failed to create video encoder configuration: " + e);
      return;
    }
    if (!this.videoEncoder.isConfigSupported(t)) {
      y.logError("The provided video encoder configuration is not supported.");
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
      y.logError("Video element is not created.");
      return;
    }
    let n = 811 * 1 + -527 + -284;
    const t = this.cameraFramerate, e = (7140 + -614 * 10) / t;
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
class lQ {
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
    if (!this.videoProcessor) throw y.logError("VideoProcessor is not set");
    if (!this.videoEncoder) throw y.logError("VideoEncoder is not set");
    if (!this.qualityTester) throw y.logError("QualityTester is not set");
    if (!this.cameraHandler) throw y.logError("CameraHandler is not set");
    if (!this.customEvent) throw y.logError("CustomEvent is not set");
  }
  build() {
    try {
      this.validate();
    } catch {
      return;
    }
    return new dQ(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler, this.customEvent);
  }
}
class xQ {
  create({ cameraHandler: n, customEvent: t, isVideoCaptureEnabled: e }) {
    if (!cQ(e)) return;
    const A = new IQ(gQ, sQ), o = new mI(), r = new BQ();
    return new lQ().setQualityTester(A).setVideoEncoder(o).setVideoProcessor(r).setCameraHandler(n).setCustomEvent(t).build();
  }
}
function uQ(i, n) {
  const { facingMode: t = br.FRONT, isVideoCaptureEnabled: e } = n ?? {}, A = jA(null), [o, r] = tA(), [g, a] = tA(), { handleError: I, setIsCameraReady: C } = Ae(), s = ye((E) => {
    a((d) => zC(E, d));
  }, []);
  _(() => {
    if (!A.current) {
      I(new y("Something went wrong during video initialization"));
      return;
    }
    const E = new nQ(A.current), d = new eQ(), Q = new AQ(d), x = new hI(), f = new iQ(), h = {};
    h.cameraHandler = x, h.customEvent = i, h.isVideoCaptureEnabled = e;
    const p = new xQ().create(h), D = {};
    D.videoHandler = E, D.cameraHandler = x, D.performanceCheckup = f, D.cameraEvaluator = Q, D.videoRecorder = p;
    const b = new oQ(D);
    return (async () => {
      try {
        const m = {};
        m.facingMode = t, await b.startFirstVideoStream(m);
      } catch (m) {
        if (m instanceof Error) {
          I(y.fromCameraError(m));
          return;
        }
      }
      r(b), C(!0), s(b.getCameraResolution());
    })(), () => {
      b?.stopStreaming(), C(!1), r(void 0);
    };
  }, [t, I, C, A, s, e, i]);
  const B = {};
  return B.cameraService = o, B.cameraResolution = g, B.onCameraResolutionChange = s, B.videoRef = A, B;
}
function fQ({
  cameraConfiguration: i,
  children: n,
  customEvent: t
}) {
  const { cameraResolution: e, cameraService: A, onCameraResolutionChange: o, videoRef: r } = uQ(
    t,
    i
  ), g = pA(
    () => ({
      cameraService: A,
      cameraResolution: e,
      onCameraResolutionChange: o,
      videoRef: r
    }),
    [A, e, o, r]
  );
  return /* @__PURE__ */ w($o.Provider, { value: g, children: n });
}
function hQ({ cameraResolution: i, cameraService: n, customEvent: t }) {
  const { shouldCameraMirror: e } = HB(t.CONTROL, n), A = {};
  A.cameraResolution = i, A.shouldCameraMirror = e, YB(t.CAMERA_PROPS_CHANGED, A), _(() => () => {
    Qe.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = e, o;
}
function pQ(i) {
  _(() => (window.addEventListener("beforeunload", i), () => {
    window.removeEventListener("beforeunload", i);
  }), [i]);
}
function yQ({ captureMode: i, checkToInstructionCodeMap: n, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: o, instructionCodeMap: r, onCapture: g, onDetection: a, sessionToken: I }) {
  pQ(() => {
    t && t.destroy();
  });
  const { appState: C, firstRunningDone: s, handleAppStateChange: B, isCameraReady: E, setFirstRunningDone: d } = Ae(), { sunfish: Q } = $t(), { analytics: x } = wB(), { transactionCounting: f } = Hs(), { cameraResolution: h, cameraService: p, onCameraResolutionChange: D, videoRef: b } = qB(), S = {};
  S.cameraResolution = h, S.cameraService = p, S.customEvent = A;
  const { shouldCameraMirror: m } = hQ(S), Y = Fr(void 0), z = p?.["isStreaming"] && t?.["isDetectorInitialized"] && Q && E, WA = ye(async (X) => {
    B(sA.WAITING), g(X);
  }, [g, B]), yA = ye((X, eo) => {
    D(X.resolution), Y.value = X, a(X, eo);
  }, [a, Y, D]);
  _(() => {
    !s && z && (d(!0), B(sA.RUNNING));
  }, [z, B, s, d]), _(() => {
    if (C !== sA.RUNNING || !z) return;
    if (!p || !t) throw new y("Cannot start detection");
    t.imageProcessor.reset();
    const X = {};
    return X.analytics = x, X.transactionCounting = f, X.cameraService = p, X.fallbackInstruction = o, X.instructionCodeMap = r, X.checkToInstructionCodeMap = n, X.sessionToken = I, X.createProtoMessage = e, X.onCaptureCallback = WA, X.onDetectionCallback = yA, t.createDetection(i, X), t.runDetectionLoop(), () => {
      t.stopDetectionLoop();
    };
  }, [C, z, t, p, WA, yA, I, Y, x, e, r, n, o, i, f]);
  const SA = {};
  return SA.videoRef = b, SA.cameraResolution = h, SA.detectionDetails = Y, SA.shouldCameraMirror = m, SA;
}
const Ta = () => typeof document < "u" && document.hasFocus();
function mQ(i = {}) {
  const n = jA(i), t = jA(Ta()), [e, A] = tA(Ta);
  _(() => {
    n.current = i;
  }), _(() => {
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
function wQ(i = {}) {
  const { appState: n, firstRunningDone: t } = Ae();
  mQ({ onBlur: () => {
    n === sA.WAITING || n === ba.DONE || !t || i.onBlur?.();
  }, onFocus: () => {
    n === sA.WAITING || n === ba.DONE || !t || i.onFocus?.();
  } });
}
function DQ(i) {
  const { redfin: n, freemiumOverlayState: t } = Ae(), e = n === To.Higher, A = t !== Po.HIDDEN, o = A && !e && i, r = t === Po.VISIBLE, g = {};
  return g.showFreemiumOverlay = o, g.showFullFreemiumOverlay = r, g;
}
const Wr = Oe(void 0);
Wr.displayName = "CommonThresholdsContext";
function bQ() {
  const i = Be(Wr);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function kQ() {
  return Nr() ? Sa.MOBILE : Sa.DESKTOP;
}
function SQ({
  children: i,
  configurationThresholds: n,
  thresholdsPresetMapper: t,
  thresholdsPresets: e
}) {
  const [A, o] = tA(kQ()), r = pA(() => ({ thresholds: t(n, e[A]), thresholdsPreset: A, setThresholdsPreset: o }), [n, A, o, e, t]);
  return /* @__PURE__ */ w(Wr.Provider, { value: r, children: i });
}
const wI = {};
wI.min = 0.4;
const zi = {};
zi.min = 0.16, zi.max = 0.2;
const DI = {};
DI.min = 0.25;
const Xi = {};
Xi.min = 0.2, Xi.max = 0.85;
const bI = {};
bI.min = 0.05;
const kI = {};
kI.max = 30;
const SI = {};
SI.min = 0;
const $i = {};
$i.min = -1, $i.max = 1;
const Ar = {};
Ar.confidence = SI, Ar.status = $i;
const GI = {};
GI.min = 0;
const NI = {};
NI.confidence = GI;
const RI = {};
RI.min = 0;
const FI = {};
FI.confidence = RI;
const re = {};
re.confidence = wI, re.size = zi, re.sharpness = DI, re.brightness = Xi, re.edgeDistanceToImageShorterSideRatio = bI, re.devicePitchAngle = kI, re.mouth = Ar, re.leftEye = NI, re.rightEye = FI;
const vI = {};
vI.min = 0.4;
const er = {};
er.min = 0.16, er.max = 0.2;
const MI = {};
MI.min = 0.25;
const tr = {};
tr.min = 0.2, tr.max = 0.85;
const WI = {};
WI.min = 0.05;
const LI = {};
LI.max = 30;
const OI = {};
OI.min = 0;
const or = {};
or.min = -1, or.max = 1;
const nr = {};
nr.confidence = OI, nr.status = or;
const JI = {};
JI.min = 0;
const UI = {};
UI.confidence = JI;
const YI = {};
YI.min = 0;
const TI = {};
TI.confidence = YI;
const ae = {};
ae.confidence = vI, ae.size = er, ae.sharpness = MI, ae.brightness = tr, ae.edgeDistanceToImageShorterSideRatio = WI, ae.devicePitchAngle = LI, ae.mouth = nr, ae.leftEye = UI, ae.rightEye = TI;
const ir = {};
ir.MOBILE = re, ir.DESKTOP = ae;
const GQ = ir;
function NQ(i, n) {
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
function RQ({
  children: i,
  configurationThresholds: n
}) {
  return /* @__PURE__ */ w(
    SQ,
    {
      configurationThresholds: n,
      thresholdsPresetMapper: NQ,
      thresholdsPresets: GQ,
      children: i
    }
  );
}
function PI() {
  return bQ();
}
function FQ(i, n) {
  return { ...i, leftEye: { ...i.leftEye, center: gt(i.leftEye.center, n) }, rightEye: { ...i.rightEye, center: gt(i.rightEye.center, n) }, mouth: { ...i.mouth, center: gt(i.mouth.center, n) }, topLeft: gt(i.topLeft, n), bottomRight: gt(i.bottomRight, n), faceCenter: gt(i.faceCenter, n) };
}
function HI(i, n) {
  const { faceCenter: t, faceSize: e } = i, A = LC(e, n), o = {};
  o.x = t.x, o.y = t.y - A;
  const r = {};
  r.x = t.x + A, r.y = t.y;
  const g = {};
  g.x = t.x, g.y = t.y + A;
  const a = {};
  a.x = t.x - A, a.y = t.y;
  const I = {};
  return I.top = o, I.right = r, I.bottom = g, I.left = a, vs(I);
}
const vQ = (i, n) => {
  const { bottomRight: t, faceCenter: e, topLeft: A } = n, o = {
    topLeft: A,
    width: t.x - A.x,
    height: t.y - A.y
  };
  Us(i, o, "rgba(255, 0, 0, 0.3)", !0), Pt(i, e, "lime");
}, MQ = (i, n, t) => {
  const e = HI(n, t);
  Object.values(e).map((A) => Pt(i, A, "orange"));
};
function WQ({ cameraResolution: i, detectionDetails: n, isImageMirror: t }) {
  const { thresholds: e, thresholdsPreset: A } = PI(), { redfin: o } = Ae(), r = jA(null);
  if (_(() => {
    if (!r.current)
      return;
    r.current.width = i.width, r.current.height = i.height, bC(r.current);
    const f = _o(i), h = Ys(
      i,
      e.edgeDistanceToImageShorterSideRatio.min,
      f
    ), p = MC(i);
    n.value && (vQ(r.current, n.value.processedImage.detection), MQ(
      r.current,
      n.value.processedImage.detection,
      i
    ), _n(r.current, f, "lime"), _n(r.current, h, "yellow"), _n(r.current, p, "blue"), Pt(r.current, n.value.processedImage.detection.leftEye.center, "cyan"), Pt(r.current, n.value.processedImage.detection.rightEye.center, "cyan"), Pt(r.current, n.value.processedImage.detection.mouth.center, "cyan"));
  }, [i, e, n.value]), !n.value)
    return null;
  const {
    avgFps: g,
    detectionTime: a,
    fps: I,
    processedImage: { detection: C, instructionCode: s, invalidValidators: B, isEscalated: E },
    resolution: d,
    samVersion: Q
  } = n.value, x = {
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
    Resolution: d,
    "Escalated instruction": E,
    "Component version": "8.0.3",
    "Thresholds preset": A
  };
  return Q && (x["SAM version"] = Q), B.length > 0 && (x["Invalid validators"] = B), /* @__PURE__ */ w(
    mB,
    {
      ref: r,
      cameraResolution: i,
      detectionDetails: x,
      isImageMirror: t
    }
  );
}
function LQ({ isRounded: i, isSquare: n, ...t }) {
  return i ? /* @__PURE__ */ w("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ w("rect", { fill: "#000", ...t, rx: n ? "0" : "50%" });
}
function OQ(i, n) {
  const [t, e] = tA(!1), A = () => e((g) => !g), o = "" + t;
  Dt(() => {
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
          for (const x of Q.removedNodes)
            if (x !== n?.current && x === i.current)
              return !0;
        }) && A(), E.forEach((Q) => {
          Q.addedNodes.forEach((x) => {
            x !== n?.current && x.parentElement?.removeChild(x);
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
const JQ = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function UQ({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = jA(null), { key: o } = OQ(A, t);
  return /* @__PURE__ */ w("div", { ref: A, style: JQ, children: /* @__PURE__ */ w("svg", { viewBox: `0 0 ${e} ${n}`, children: [
    /* @__PURE__ */ w("defs", { children: [
      /* @__PURE__ */ w("mask", { id: "placeholder", children: [
        /* @__PURE__ */ w("rect", { fill: "#fff", height: "100%", width: "100%" }),
        i
      ] }),
      /* @__PURE__ */ w(
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
            /* @__PURE__ */ w("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ w("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
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
    /* @__PURE__ */ w("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, o);
}
function YQ({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = WC(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, g = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ w(
    UQ,
    {
      cutOut: i || /* @__PURE__ */ w(LQ, { height: A, width: o, x: r, y: g }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function TQ({ cameraResolution: i, children: n, detectionDetails: t, shouldMirror: e }) {
  const { appState: A } = Ae(), { showFreemiumOverlay: o, showFullFreemiumOverlay: r } = DQ(i), g = jA(null), a = i && A === sA.RUNNING;
  return /* @__PURE__ */ w(vA, { children: [
    o && i && /* @__PURE__ */ w(
      YQ,
      {
        fullOverlay: r,
        ignoreElement: g,
        resolution: i
      }
    ),
    n,
    a && /* @__PURE__ */ w("div", { ref: g, children: /* @__PURE__ */ w(
      WQ,
      {
        cameraResolution: i,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const PQ = (i, n) => {
  if (AB()) {
    const t = {};
    t.candidateSelectionImages = n;
    const e = t;
    Qe.getInstance().dispatchCustomEventOnChange(i, e);
  }
};
var st = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pa = {}, Zn = {}, zn, Ha;
function HQ() {
  if (Ha) return zn;
  Ha = 1, zn = i;
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
  return zn;
}
var Ka = {}, _a;
function KQ() {
  return _a || (_a = 1, (function(i) {
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
        var d = r[g++];
        switch (B) {
          case 0:
            C[s++] = t[d >> 2], E = (d & 3) << 4, B = 1;
            break;
          case 1:
            C[s++] = t[E | d >> 4], E = (d & 15) << 2, B = 2;
            break;
          case 2:
            C[s++] = t[E | d >> 6], C[s++] = t[d & 63], B = 0;
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
  })(Ka)), Ka;
}
var Xn, ja;
function _Q() {
  if (ja) return Xn;
  ja = 1, Xn = i;
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
  }, Xn;
}
var $n, qa;
function jQ() {
  if (qa) return $n;
  qa = 1, $n = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? (function() {
      var r = new Float32Array([-0]), g = new Uint8Array(r.buffer), a = g[3] === 128;
      function I(E, d, Q) {
        r[0] = E, d[Q] = g[0], d[Q + 1] = g[1], d[Q + 2] = g[2], d[Q + 3] = g[3];
      }
      function C(E, d, Q) {
        r[0] = E, d[Q] = g[3], d[Q + 1] = g[2], d[Q + 2] = g[1], d[Q + 3] = g[0];
      }
      o.writeFloatLE = a ? I : C, o.writeFloatBE = a ? C : I;
      function s(E, d) {
        return g[0] = E[d], g[1] = E[d + 1], g[2] = E[d + 2], g[3] = E[d + 3], r[0];
      }
      function B(E, d) {
        return g[3] = E[d], g[2] = E[d + 1], g[1] = E[d + 2], g[0] = E[d + 3], r[0];
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
          var E = Math.floor(Math.log(I) / Math.LN2), d = Math.round(I * Math.pow(2, -E) * 8388608) & 8388607;
          a((B << 31 | E + 127 << 23 | d) >>> 0, C, s);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function g(a, I, C) {
        var s = a(I, C), B = (s >> 31) * 2 + 1, E = s >>> 23 & 255, d = s & 8388607;
        return E === 255 ? d ? NaN : B * (1 / 0) : E === 0 ? B * 1401298464324817e-60 * d : B * Math.pow(2, E - 150) * (d + 8388608);
      }
      o.readFloatLE = g.bind(null, e), o.readFloatBE = g.bind(null, A);
    })(), typeof Float64Array < "u" ? (function() {
      var r = new Float64Array([-0]), g = new Uint8Array(r.buffer), a = g[7] === 128;
      function I(E, d, Q) {
        r[0] = E, d[Q] = g[0], d[Q + 1] = g[1], d[Q + 2] = g[2], d[Q + 3] = g[3], d[Q + 4] = g[4], d[Q + 5] = g[5], d[Q + 6] = g[6], d[Q + 7] = g[7];
      }
      function C(E, d, Q) {
        r[0] = E, d[Q] = g[7], d[Q + 1] = g[6], d[Q + 2] = g[5], d[Q + 3] = g[4], d[Q + 4] = g[3], d[Q + 5] = g[2], d[Q + 6] = g[1], d[Q + 7] = g[0];
      }
      o.writeDoubleLE = a ? I : C, o.writeDoubleBE = a ? C : I;
      function s(E, d) {
        return g[0] = E[d], g[1] = E[d + 1], g[2] = E[d + 2], g[3] = E[d + 3], g[4] = E[d + 4], g[5] = E[d + 5], g[6] = E[d + 6], g[7] = E[d + 7], r[0];
      }
      function B(E, d) {
        return g[7] = E[d], g[6] = E[d + 1], g[5] = E[d + 2], g[4] = E[d + 3], g[3] = E[d + 4], g[2] = E[d + 5], g[1] = E[d + 6], g[0] = E[d + 7], r[0];
      }
      o.readDoubleLE = a ? s : B, o.readDoubleBE = a ? B : s;
    })() : (function() {
      function r(a, I, C, s, B, E) {
        var d = s < 0 ? 1 : 0;
        if (d && (s = -s), s === 0)
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
          a(0, B, E + I), a((d << 31 | 2146435072) >>> 0, B, E + C);
        else {
          var Q;
          if (s < 22250738585072014e-324)
            Q = s / 5e-324, a(Q >>> 0, B, E + I), a((d << 31 | Q / 4294967296) >>> 0, B, E + C);
          else {
            var x = Math.floor(Math.log(s) / Math.LN2);
            x === 1024 && (x = 1023), Q = s * Math.pow(2, -x), a(Q * 4503599627370496 >>> 0, B, E + I), a((d << 31 | x + 1023 << 20 | Q * 1048576 & 1048575) >>> 0, B, E + C);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function g(a, I, C, s, B) {
        var E = a(s, B + I), d = a(s, B + C), Q = (d >> 31) * 2 + 1, x = d >>> 20 & 2047, f = 4294967296 * (d & 1048575) + E;
        return x === 2047 ? f ? NaN : Q * (1 / 0) : x === 0 ? Q * 5e-324 * f : Q * Math.pow(2, x - 1075) * (f + 4503599627370496);
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
  return $n;
}
function Va(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ai, Za;
function qQ() {
  if (Za) return Ai;
  Za = 1, Ai = i;
  function i(n) {
    try {
      if (typeof Va != "function")
        return null;
      var t = Va(n);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return Ai;
}
var za = {}, Xa;
function VQ() {
  return Xa || (Xa = 1, (function(i) {
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
  })(za)), za;
}
var ei, $a;
function ZQ() {
  if ($a) return ei;
  $a = 1, ei = i;
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
  return ei;
}
var ti, Ag;
function zQ() {
  if (Ag) return ti;
  Ag = 1, ti = n;
  var i = it();
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
  }, ti;
}
var eg;
function it() {
  return eg || (eg = 1, (function(i) {
    var n = i;
    n.asPromise = HQ(), n.base64 = KQ(), n.EventEmitter = _Q(), n.float = jQ(), n.inquire = qQ(), n.utf8 = VQ(), n.pool = ZQ(), n.LongBits = zQ(), n.isNode = !!(typeof st < "u" && st && st.process && st.process.versions && st.process.versions.node), n.global = n.isNode && st || typeof window < "u" && window || typeof self < "u" && self || Zn, n.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  })(Zn)), Zn;
}
var oi, tg;
function KI() {
  if (tg) return oi;
  tg = 1, oi = a;
  var i = it(), n, t = i.LongBits, e = i.base64, A = i.utf8;
  function o(x, f, h) {
    this.fn = x, this.len = f, this.next = void 0, this.val = h;
  }
  function r() {
  }
  function g(x) {
    this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
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
  a.create = I(), a.alloc = function(x) {
    return new i.Array(x);
  }, i.Array !== Array && (a.alloc = i.pool(a.alloc, i.Array.prototype.subarray)), a.prototype._push = function(x, f, h) {
    return this.tail = this.tail.next = new o(x, f, h), this.len += f, this;
  };
  function C(x, f, h) {
    f[h] = x & 255;
  }
  function s(x, f, h) {
    for (; x > 127; )
      f[h++] = x & 127 | 128, x >>>= 7;
    f[h] = x;
  }
  function B(x, f) {
    this.len = x, this.next = void 0, this.val = f;
  }
  B.prototype = Object.create(o.prototype), B.prototype.fn = s, a.prototype.uint32 = function(x) {
    return this.len += (this.tail = this.tail.next = new B(
      (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
      x
    )).len, this;
  }, a.prototype.int32 = function(x) {
    return x < 0 ? this._push(E, 10, t.fromNumber(x)) : this.uint32(x);
  }, a.prototype.sint32 = function(x) {
    return this.uint32((x << 1 ^ x >> 31) >>> 0);
  };
  function E(x, f, h) {
    for (; x.hi; )
      f[h++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
    for (; x.lo > 127; )
      f[h++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
    f[h++] = x.lo;
  }
  a.prototype.uint64 = function(x) {
    var f = t.from(x);
    return this._push(E, f.length(), f);
  }, a.prototype.int64 = a.prototype.uint64, a.prototype.sint64 = function(x) {
    var f = t.from(x).zzEncode();
    return this._push(E, f.length(), f);
  }, a.prototype.bool = function(x) {
    return this._push(C, 1, x ? 1 : 0);
  };
  function d(x, f, h) {
    f[h] = x & 255, f[h + 1] = x >>> 8 & 255, f[h + 2] = x >>> 16 & 255, f[h + 3] = x >>> 24;
  }
  a.prototype.fixed32 = function(x) {
    return this._push(d, 4, x >>> 0);
  }, a.prototype.sfixed32 = a.prototype.fixed32, a.prototype.fixed64 = function(x) {
    var f = t.from(x);
    return this._push(d, 4, f.lo)._push(d, 4, f.hi);
  }, a.prototype.sfixed64 = a.prototype.fixed64, a.prototype.float = function(x) {
    return this._push(i.float.writeFloatLE, 4, x);
  }, a.prototype.double = function(x) {
    return this._push(i.float.writeDoubleLE, 8, x);
  };
  var Q = i.Array.prototype.set ? function(x, f, h) {
    f.set(x, h);
  } : function(x, f, h) {
    for (var p = 0; p < x.length; ++p)
      f[h + p] = x[p];
  };
  return a.prototype.bytes = function(x) {
    var f = x.length >>> 0;
    if (!f)
      return this._push(C, 1, 0);
    if (i.isString(x)) {
      var h = a.alloc(f = e.length(x));
      e.decode(x, h, 0), x = h;
    }
    return this.uint32(f)._push(Q, f, x);
  }, a.prototype.string = function(x) {
    var f = A.length(x);
    return f ? this.uint32(f)._push(A.write, f, x) : this._push(C, 1, 0);
  }, a.prototype.fork = function() {
    return this.states = new g(this), this.head = this.tail = new o(r, 0, 0), this.len = 0, this;
  }, a.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(r, 0, 0), this.len = 0), this;
  }, a.prototype.ldelim = function() {
    var x = this.head, f = this.tail, h = this.len;
    return this.reset().uint32(h), h && (this.tail.next = x.next, this.tail = f, this.len += h), this;
  }, a.prototype.finish = function() {
    for (var x = this.head.next, f = this.constructor.alloc(this.len), h = 0; x; )
      x.fn(x.val, f, h), h += x.len, x = x.next;
    return f;
  }, a._configure = function(x) {
    n = x, a.create = I(), n._configure();
  }, oi;
}
var ni, og;
function XQ() {
  if (og) return ni;
  og = 1, ni = t;
  var i = KI();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = it();
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
  }, t._configure(), ni;
}
var ii, ng;
function _I() {
  if (ng) return ii;
  ng = 1, ii = o;
  var i = it(), n, t = i.LongBits, e = i.utf8;
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
      var d = i.Buffer;
      return d ? d.alloc(0) : new this.buf.constructor(0);
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
  }, ii;
}
var ri, ig;
function $Q() {
  if (ig) return ri;
  ig = 1, ri = t;
  var i = _I();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = it();
  function t(e) {
    i.call(this, e);
  }
  return t._configure = function() {
    n.Buffer && (t.prototype._slice = n.Buffer.prototype.slice);
  }, t.prototype.string = function() {
    var e = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
  }, t._configure(), ri;
}
var rg = {}, ai, ag;
function AE() {
  if (ag) return ai;
  ag = 1, ai = n;
  var i = it();
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
  }, ai;
}
var gg;
function eE() {
  return gg || (gg = 1, (function(i) {
    var n = i;
    n.Service = AE();
  })(rg)), rg;
}
var sg, Ig;
function tE() {
  return Ig || (Ig = 1, sg = {}), sg;
}
var cg;
function oE() {
  return cg || (cg = 1, (function(i) {
    var n = i;
    n.build = "minimal", n.Writer = KI(), n.BufferWriter = XQ(), n.Reader = _I(), n.BufferReader = $Q(), n.util = it(), n.rpc = eE(), n.roots = tE(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  })(Pa)), Pa;
}
var Cg, Bg;
function nE() {
  return Bg || (Bg = 1, Cg = oE()), Cg;
}
var k = nE();
const u = k.Reader, G = k.Writer, l = k.util, c = k.roots.default || (k.roots.default = {}), nt = c.dot = (() => {
  const i = {};
  return i.Content = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.token = l.newBuffer([]), n.prototype.iv = l.newBuffer([]), n.prototype.schemaVersion = 0, n.prototype.bytes = l.newBuffer([]), n.create = function(t) {
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
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || l.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || l.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !l.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.Content)
        return t;
      let e = new c.dot.Content();
      return t.token != null && (typeof t.token == "string" ? l.base64.decode(t.token, e.token = l.newBuffer(l.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? l.base64.decode(t.iv, e.iv = l.newBuffer(l.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = l.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = l.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? l.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? l.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, k.util.toJSONOptions);
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
      t.prototype.images = l.emptyArray, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        get: l.oneOfGetter(e = ["sessionToken"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: l.oneOfGetter(e = ["web", "android", "ios"]),
        set: l.oneOfSetter(e)
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
        if (A.sessionToken != null && A.hasOwnProperty("sessionToken") && (o._sessionToken = 1, !l.isString(A.sessionToken)))
          return "sessionToken: string expected";
        if (A.componentVersion != null && A.hasOwnProperty("componentVersion") && !l.isString(A.componentVersion))
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Metadata";
      }, t;
    })(), n.AndroidMetadata = (function() {
      function t(A) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.supportedAbis = l.emptyArray, t.prototype.device = null, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = l.emptyArray, t.prototype.digestsWithTimestamp = l.emptyArray, t.prototype.dynamicCameraFrameProperties = l.emptyObject, t.prototype.tamperingIndicators = null, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null, t.prototype.androidId = null;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: l.oneOfGetter(e = ["device"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_camera", {
        get: l.oneOfGetter(e = ["camera"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: l.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_tamperingIndicators", {
        get: l.oneOfGetter(e = ["tamperingIndicators"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedYuv420Image", {
        get: l.oneOfGetter(e = ["croppedYuv420Image"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_yuv420ImageCrop", {
        get: l.oneOfGetter(e = ["yuv420ImageCrop"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_androidId", {
        get: l.oneOfGetter(e = ["androidId"]),
        set: l.oneOfSetter(e)
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
              a.dynamicCameraFrameProperties === l.emptyObject && (a.dynamicCameraFrameProperties = {});
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
            if (!l.isString(A.supportedAbis[o]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !l.isString(A.device))
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
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || l.isString(A.digests[o])))
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
          if (!l.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(A.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let g = c.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (g)
              return "dynamicCameraFrameProperties." + g;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || l.isString(A.tamperingIndicators)))
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
        return A.androidId != null && A.hasOwnProperty("androidId") && !l.isString(A.androidId) ? "androidId: string expected" : null;
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
            typeof A.digests[r] == "string" ? l.base64.decode(A.digests[r], o.digests[r] = l.newBuffer(l.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
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
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? l.base64.decode(A.tamperingIndicators, o.tamperingIndicators = l.newBuffer(l.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (o.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
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
            r.digests[a] = o.bytes === String ? l.base64.encode(A.digests[a], 0, A.digests[a].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
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
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = c.dot.v4.AndroidCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = c.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (r.tamperingIndicators = o.bytes === String ? l.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : o.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, o.oneofs && (r._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = c.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = c.dot.v4.Yuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), A.androidId != null && A.hasOwnProperty("androidId") && (r.androidId = A.androidId, o.oneofs && (r._androidId = "androidId")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !l.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AndroidCamera";
      }, t;
    })(), n.Yuv420Image = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = l.newBuffer([]), t.prototype.uPlane = l.newBuffer([]), t.prototype.vPlane = l.newBuffer([]), t.create = function(e) {
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
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || l.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || l.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || l.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.Yuv420Image)
          return e;
        let A = new c.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = c.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? l.base64.decode(e.yPlane, A.yPlane = l.newBuffer(l.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? l.base64.decode(e.uPlane, A.uPlane = l.newBuffer(l.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? l.base64.decode(e.vPlane, A.vPlane = l.newBuffer(l.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = l.newBuffer(o.yPlane))), A.bytes === String ? o.uPlane = "" : (o.uPlane = [], A.bytes !== Array && (o.uPlane = l.newBuffer(o.uPlane))), A.bytes === String ? o.vPlane = "" : (o.vPlane = [], A.bytes !== Array && (o.vPlane = l.newBuffer(o.vPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = c.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? l.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (o.uPlane = A.bytes === String ? l.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (o.vPlane = A.bytes === String ? l.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420ImageCrop";
      }, t;
    })(), n.IosMetadata = (function() {
      function t(A) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.cameraModelId = "", t.prototype.architectureInfo = l.emptyObject, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = l.emptyArray, t.prototype.digestsWithTimestamp = l.emptyArray, t.prototype.isoValues = l.emptyArray, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null, t.prototype.identifierForVendor = null;
      let e;
      return Object.defineProperty(t.prototype, "_camera", {
        get: l.oneOfGetter(e = ["camera"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: l.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedYuv420Image", {
        get: l.oneOfGetter(e = ["croppedYuv420Image"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_yuv420ImageCrop", {
        get: l.oneOfGetter(e = ["yuv420ImageCrop"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_identifierForVendor", {
        get: l.oneOfGetter(e = ["identifierForVendor"]),
        set: l.oneOfSetter(e)
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
              a.architectureInfo === l.emptyObject && (a.architectureInfo = {});
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
        if (A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && !l.isString(A.cameraModelId))
          return "cameraModelId: string expected";
        if (A.architectureInfo != null && A.hasOwnProperty("architectureInfo")) {
          if (!l.isObject(A.architectureInfo))
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
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || l.isString(A.digests[o])))
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
            if (!l.isInteger(A.isoValues[o]))
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
        return A.identifierForVendor != null && A.hasOwnProperty("identifierForVendor") && !l.isString(A.identifierForVendor) ? "identifierForVendor: string expected" : null;
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
            typeof A.digests[r] == "string" ? l.base64.decode(A.digests[r], o.digests[r] = l.newBuffer(l.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
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
            r.digests[a] = o.bytes === String ? l.base64.encode(A.digests[a], 0, A.digests[a].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !l.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosCamera";
      }, t;
    })(), n.IosYuv420Image = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = l.newBuffer([]), t.prototype.uvPlane = l.newBuffer([]), t.create = function(e) {
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
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || l.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uvPlane != null && e.hasOwnProperty("uvPlane") && !(e.uvPlane && typeof e.uvPlane.length == "number" || l.isString(e.uvPlane)) ? "uvPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.IosYuv420Image)
          return e;
        let A = new c.dot.v4.IosYuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.IosYuv420Image.size: object expected");
          A.size = c.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? l.base64.decode(e.yPlane, A.yPlane = l.newBuffer(l.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uvPlane != null && (typeof e.uvPlane == "string" ? l.base64.decode(e.uvPlane, A.uvPlane = l.newBuffer(l.base64.length(e.uvPlane)), 0) : e.uvPlane.length >= 0 && (A.uvPlane = e.uvPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = l.newBuffer(o.yPlane))), A.bytes === String ? o.uvPlane = "" : (o.uvPlane = [], A.bytes !== Array && (o.uvPlane = l.newBuffer(o.uvPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = c.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? l.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uvPlane != null && e.hasOwnProperty("uvPlane") && (o.uvPlane = A.bytes === String ? l.base64.encode(e.uvPlane, 0, e.uvPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uvPlane) : e.uvPlane), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosYuv420ImageCrop";
      }, t;
    })(), n.WebMetadata = (function() {
      function t(A) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = l.emptyArray, t.prototype.hashedDetectedImages = l.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = l.emptyArray, t.prototype.detectionRecord = l.emptyArray, t.prototype.croppedImage = null, t.prototype.croppedImageWithPosition = null, t.prototype.platformDetails = null;
      let e;
      return Object.defineProperty(t.prototype, "_croppedImage", {
        get: l.oneOfGetter(e = ["croppedImage"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedImageWithPosition", {
        get: l.oneOfGetter(e = ["croppedImageWithPosition"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_platformDetails", {
        get: l.oneOfGetter(e = ["platformDetails"]),
        set: l.oneOfSetter(e)
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
            if (!l.isString(A.hashedDetectedImages[o]))
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.WebMetadata";
      }, t;
    })(), n.HashedDetectedImageWithTimestamp = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
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
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !l.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !l.isInteger(e.timestampMillis) && !(e.timestampMillis && l.isInteger(e.timestampMillis.low) && l.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new c.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (A.imageHash = String(e.imageHash)), e.timestampMillis != null && (l.Long ? (A.timestampMillis = l.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if (A.defaults)
          if (o.imageHash = "", l.Long) {
            let r = new l.Long(0, 0, !0);
            o.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            o.timestampMillis = A.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (o.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? l.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        get: l.oneOfGetter(e = ["aspectRatio"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: l.oneOfGetter(e = ["autoGainControl"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: l.oneOfGetter(e = ["channelCount"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: l.oneOfGetter(e = ["deviceId"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: l.oneOfGetter(e = ["displaySurface"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: l.oneOfGetter(e = ["echoCancellation"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: l.oneOfGetter(e = ["facingMode"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: l.oneOfGetter(e = ["frameRate"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: l.oneOfGetter(e = ["groupId"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_height", {
        get: l.oneOfGetter(e = ["height"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: l.oneOfGetter(e = ["noiseSuppression"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: l.oneOfGetter(e = ["sampleRate"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: l.oneOfGetter(e = ["sampleSize"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_width", {
        get: l.oneOfGetter(e = ["width"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: l.oneOfGetter(e = ["deviceName"]),
        set: l.oneOfSetter(e)
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
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !l.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !l.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !l.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !l.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !l.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !l.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !l.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !l.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !l.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !l.isString(A.deviceName) ? "deviceName: string expected" : null;
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !l.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !l.isInteger(e.height) ? "height: integer expected" : null;
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        get: l.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: l.oneOfSetter(e)
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageCrop";
      }, t;
    })(), n.PlatformDetails = (function() {
      function t(A) {
        if (this.browserVersions = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.userAgent = "", t.prototype.platform = null, t.prototype.platformVersion = null, t.prototype.architecture = null, t.prototype.model = null, t.prototype.browserVersions = l.emptyArray, t.prototype.installationId = null;
      let e;
      return Object.defineProperty(t.prototype, "_platform", {
        get: l.oneOfGetter(e = ["platform"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_platformVersion", {
        get: l.oneOfGetter(e = ["platformVersion"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_architecture", {
        get: l.oneOfGetter(e = ["architecture"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_model", {
        get: l.oneOfGetter(e = ["model"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_installationId", {
        get: l.oneOfGetter(e = ["installationId"]),
        set: l.oneOfSetter(e)
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
        if (A.userAgent != null && A.hasOwnProperty("userAgent") && !l.isString(A.userAgent))
          return "userAgent: string expected";
        if (A.platform != null && A.hasOwnProperty("platform") && !l.isString(A.platform))
          return "platform: string expected";
        if (A.platformVersion != null && A.hasOwnProperty("platformVersion") && !l.isString(A.platformVersion))
          return "platformVersion: string expected";
        if (A.architecture != null && A.hasOwnProperty("architecture") && !l.isString(A.architecture))
          return "architecture: string expected";
        if (A.model != null && A.hasOwnProperty("model") && !l.isString(A.model))
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
        return A.installationId != null && A.hasOwnProperty("installationId") && !l.isString(A.installationId) ? "installationId: string expected" : null;
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        return typeof e != "object" || e === null ? "object expected" : e.name != null && e.hasOwnProperty("name") && !l.isString(e.name) ? "name: string expected" : e.version != null && e.hasOwnProperty("version") && !l.isString(e.version) ? "version: string expected" : null;
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        get: l.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent", "multiRangeLivenessContent"]),
        set: l.oneOfSetter(e)
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        get: l.oneOfGetter(e = ["dg3AdditionalIdentificationFeatureFingers"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg4AdditionalIdentificationFeatureIrises", {
        get: l.oneOfGetter(e = ["dg4AdditionalIdentificationFeatureIrises"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg5DisplayedPortrait", {
        get: l.oneOfGetter(e = ["dg5DisplayedPortrait"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg7DisplayedSignatureOrUsualMark", {
        get: l.oneOfGetter(e = ["dg7DisplayedSignatureOrUsualMark"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg8DataFeatures", {
        get: l.oneOfGetter(e = ["dg8DataFeatures"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg9StructureFeatures", {
        get: l.oneOfGetter(e = ["dg9StructureFeatures"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg10SubstanceFeatures", {
        get: l.oneOfGetter(e = ["dg10SubstanceFeatures"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg11AdditionalPersonalDetails", {
        get: l.oneOfGetter(e = ["dg11AdditionalPersonalDetails"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg12AdditionalDocumentDetails", {
        get: l.oneOfGetter(e = ["dg12AdditionalDocumentDetails"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg13OptionalDetails", {
        get: l.oneOfGetter(e = ["dg13OptionalDetails"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg14SecurityOptions", {
        get: l.oneOfGetter(e = ["dg14SecurityOptions"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg15ActiveAuthenticationPublicKeyInfo", {
        get: l.oneOfGetter(e = ["dg15ActiveAuthenticationPublicKeyInfo"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg16PersonsToNotify", {
        get: l.oneOfGetter(e = ["dg16PersonsToNotify"]),
        set: l.oneOfSetter(e)
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        get: l.oneOfGetter(e = ["bytes"]),
        set: l.oneOfSetter(e)
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
        return A.bytes != null && A.hasOwnProperty("bytes") && !(A.bytes && typeof A.bytes.length == "number" || l.isString(A.bytes)) ? "bytes: buffer expected" : null;
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
        return A.bytes != null && (typeof A.bytes == "string" ? l.base64.decode(A.bytes, o.bytes = l.newBuffer(l.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (o.bytes = A.bytes)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.id = o.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (r.id = o.enums === String ? c.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : c.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (r.bytes = o.bytes === String ? l.base64.encode(A.bytes, 0, A.bytes.length) : o.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, o.oneofs && (r._bytes = "bytes")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        get: l.oneOfGetter(e = ["protocol"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_activeAuthenticationResponse", {
        get: l.oneOfGetter(e = ["activeAuthenticationResponse"]),
        set: l.oneOfSetter(e)
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
        return A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && !(A.activeAuthenticationResponse && typeof A.activeAuthenticationResponse.length == "number" || l.isString(A.activeAuthenticationResponse)) ? "activeAuthenticationResponse: buffer expected" : null;
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
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? l.base64.decode(A.activeAuthenticationResponse, o.activeAuthenticationResponse = l.newBuffer(l.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (o.activeAuthenticationResponse = A.activeAuthenticationResponse)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.status = o.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (r.status = o.enums === String ? c.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : c.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (r.protocol = o.enums === String ? c.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : c.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, o.oneofs && (r._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (r.activeAuthenticationResponse = o.bytes === String ? l.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : o.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, o.oneofs && (r._activeAuthenticationResponse = "activeAuthenticationResponse")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
      t.prototype.image = null, t.prototype.segments = l.emptyArray, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_image", {
        get: l.oneOfGetter(e = ["image"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_video", {
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
      t.prototype.stepResults = l.emptyArray, t.prototype.metadata = null, t.prototype.video = null, t.prototype.multiRangeLivenessMetadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
      return t.prototype.detections = l.emptyArray, t.create = function(e) {
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MultiRangeLivenessMetadata";
      }, t;
    })(), n.FaceDetection = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, t.prototype.position = null, t.create = function(e) {
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
        if (e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !l.isInteger(e.timestampMillis) && !(e.timestampMillis && l.isInteger(e.timestampMillis.low) && l.isInteger(e.timestampMillis.high)))
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
        if (e.timestampMillis != null && (l.Long ? (A.timestampMillis = l.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), e.position != null) {
          if (typeof e.position != "object")
            throw TypeError(".dot.v4.FaceDetection.position: object expected");
          A.position = c.dot.v4.FaceDetectionPosition.fromObject(e.position);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if (A.defaults) {
          if (l.Long) {
            let r = new l.Long(0, 0, !0);
            o.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            o.timestampMillis = A.longs === String ? "0" : 0;
          o.position = null;
        }
        return e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? l.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), e.position != null && e.hasOwnProperty("position") && (o.position = c.dot.v4.FaceDetectionPosition.toObject(e.position, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
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
        return this.constructor.toObject(this, k.util.toJSONOptions);
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
    return n.prototype.bytes = l.newBuffer([]), n.create = function(t) {
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
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.Image)
        return t;
      let e = new c.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, k.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, n;
  })(), i.ImageWithTimestamp = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.image = null, n.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, n.create = function(t) {
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
      return t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !l.isInteger(t.timestampMillis) && !(t.timestampMillis && l.isInteger(t.timestampMillis.low) && l.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.ImageWithTimestamp)
        return t;
      let e = new c.dot.ImageWithTimestamp();
      if (t.image != null) {
        if (typeof t.image != "object")
          throw TypeError(".dot.ImageWithTimestamp.image: object expected");
        e.image = c.dot.Image.fromObject(t.image);
      }
      return t.timestampMillis != null && (l.Long ? (e.timestampMillis = l.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (A.image = null, l.Long) {
          let o = new l.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.image != null && t.hasOwnProperty("image") && (A.image = c.dot.Image.toObject(t.image, e)), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? l.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, k.util.toJSONOptions);
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
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !l.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !l.isInteger(t.height) ? "height: integer expected" : null;
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
      return this.constructor.toObject(this, k.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageSize";
    }, n;
  })(), i.Int32List = (function() {
    function n(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.items = l.emptyArray, n.create = function(t) {
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
          if (!l.isInteger(t.items[e]))
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
      return this.constructor.toObject(this, k.util.toJSONOptions);
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
      return this.constructor.toObject(this, k.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.RectangleDouble";
    }, n;
  })(), i.DigestWithTimestamp = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.digest = l.newBuffer([]), n.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, n.create = function(t) {
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
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || l.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !l.isInteger(t.timestampMillis) && !(t.timestampMillis && l.isInteger(t.timestampMillis.low) && l.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.DigestWithTimestamp)
        return t;
      let e = new c.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? l.base64.decode(t.digest, e.digest = l.newBuffer(l.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (l.Long ? (e.timestampMillis = l.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (e.bytes === String ? A.digest = "" : (A.digest = [], e.bytes !== Array && (A.digest = l.newBuffer(A.digest))), l.Long) {
          let o = new l.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? l.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? l.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, k.util.toJSONOptions);
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
      get: l.oneOfGetter(t = ["bytes"]),
      set: l.oneOfSetter(t)
    }), Object.defineProperty(n.prototype, "content", {
      get: l.oneOfGetter(t = ["containerMp4", "streamH264"]),
      set: l.oneOfSetter(t)
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
      if (e.bytes != null && e.hasOwnProperty("bytes") && (A._bytes = 1, !(e.bytes && typeof e.bytes.length == "number" || l.isString(e.bytes))))
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
      if (e.bytes != null && (typeof e.bytes == "string" ? l.base64.decode(e.bytes, A.bytes = l.newBuffer(l.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (A.bytes = e.bytes)), e.containerMp4 != null) {
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
      return e.bytes != null && e.hasOwnProperty("bytes") && (o.bytes = A.bytes === String ? l.base64.encode(e.bytes, 0, e.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes, A.oneofs && (o._bytes = "bytes")), e.containerMp4 != null && e.hasOwnProperty("containerMp4") && (o.containerMp4 = c.dot.VideoContainer.toObject(e.containerMp4, A), A.oneofs && (o.content = "containerMp4")), e.streamH264 != null && e.hasOwnProperty("streamH264") && (o.streamH264 = c.dot.VideoStream.toObject(e.streamH264, A), A.oneofs && (o.content = "streamH264")), o;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, k.util.toJSONOptions);
    }, n.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Video";
    }, n;
  })(), i.VideoContainer = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.bytes = l.newBuffer([]), n.create = function(t) {
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
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.VideoContainer)
        return t;
      let e = new c.dot.VideoContainer();
      return t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, k.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.VideoContainer";
    }, n;
  })(), i.VideoStream = (function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.bytes = l.newBuffer([]), n.prototype.frameRate = 0, n.create = function(t) {
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
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : t.frameRate != null && t.hasOwnProperty("frameRate") && typeof t.frameRate != "number" ? "frameRate: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.VideoStream)
        return t;
      let e = new c.dot.VideoStream();
      return t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), t.frameRate != null && (e.frameRate = Number(t.frameRate)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes))), A.frameRate = 0), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), t.frameRate != null && t.hasOwnProperty("frameRate") && (A.frameRate = e.json && !isFinite(t.frameRate) ? String(t.frameRate) : t.frameRate), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, k.util.toJSONOptions);
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
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && !l.isInteger(t.x) ? "x: integer expected" : t.y != null && t.hasOwnProperty("y") && !l.isInteger(t.y) ? "y: integer expected" : null;
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
      return this.constructor.toObject(this, k.util.toJSONOptions);
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
      return this.constructor.toObject(this, k.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.PointDouble";
    }, n;
  })(), i;
})();
(function(i, n) {
  function t(a, I, C, s, B) {
    return j(a - -152, s);
  }
  function e(a, I, C, s, B) {
    return j(s - -633, a);
  }
  function A(a, I, C, s, B) {
    return j(s - 781, C);
  }
  function o(a, I, C, s, B) {
    return j(B - 760, a);
  }
  function r(a, I, C, s, B) {
    return j(C - -110, B);
  }
  const g = i();
  for (; ; )
    try {
      if (-parseInt(A(1228, 1180, "$)VX", 1202, 1104)) / 1 * (parseInt(A(1105, 1194, "*q]A", 1206, 1269)) / 2) + parseInt(o("ajVi", 1334, 1125, 1182, 1224)) / 3 + -parseInt(t(398, 443, 331, "o%Ta", 376)) / 4 * (parseInt(e("vQk!", -374, -212, -280, -163)) / 5) + parseInt(t(367, 416, 400, "trb*", 447)) / 6 * (-parseInt(r(321, 384, 366, 459, "PEv3")) / 7) + -parseInt(t(270, 247, 362, "SIC0", 267)) / 8 * (parseInt(e("tnYb", -173, -212, -131, -30)) / 9) + parseInt(A(1357, 1245, "YWWv", 1332, 1286)) / 10 * (parseInt(e("vQk!", -251, -217, -243, -150)) / 11) + parseInt(t(397, 384, 467, "0PPt", 344)) / 12 === n) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(sn, -208535 + -21001 * -8 + 109519 * 2);
function j(i, n) {
  i = i - (489 * -9 + -4910 + 9632);
  const t = sn();
  let e = t[i];
  if (j.rbVdCi === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, d, Q, x = 0; Q = I.charAt(x++); ~Q && (d = E % 4 ? d * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & d >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, d = s.length; E < d; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, d = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let x = 0; x < I.length; x++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, d += String.fromCharCode(I.charCodeAt(x) ^ s[(s[Q] + s[B]) % 256]);
      return d;
    };
    j.uTWATm = a, j.tXBMqa = {}, j.rbVdCi = !0;
  }
  const o = t[-1396 + 1 * 1396], r = i + o, g = j.tXBMqa[r];
  return g ? e = g : (j.fGoonA === void 0 && (j.fGoonA = !0), e = j.uTWATm(e, n), j.tXBMqa[r] = e), e;
}
function iE() {
  const i = r(-334, -251, -330, -343, "SIC0") + r(-311, -209, -162, -259, "qywN") + a(300, "qywN") + n(59, "b@7p", 19, -37) + I("ajVi", 544, 608, 518) + I("yo3f", 514, 665, 570) + a(479, "F]dI") + o(440, 446, 333, "^eEU") + I("N5cX", 500, 483, 408) + o(581, 555, 658, "ajVi") + n(-99, "t)w*", -164, -49) + r(-159, -272, -180, -168, "m5yd") + o(571, 546, 558, "m2GV") + I("sdiu", 522, 472, 560) + o(628, 518, 621, "tFiS") + o(620, 540, 593, "VSnF") + o(365, 394, 343, "ajVi") + n(2, "t)w*", 29, 118) + o(592, 511, 394, "j]Nz") + n(-19, "$)VX", -114, -31) + n(-21, "*q]A", -68, 26) + n(261, "zByy", 153, 157) + r(-341, -306, -370, -275, "*Y]H") + I("ajVi", 519, 454, 520) + o(418, 396, 390, "lWuK") + r(-145, -164, -54, -72, "EkT@") + I("J^wc", 446, 265, 382) + r(-459, -349, -327, -327, "V5ut") + I("F]dI", 412, 305, 388) + o(386, 467, 406, "*Y]H") + o(481, 447, 405, "1MtM") + n(-6, "moX5", -18, -35) + r(-380, -299, -369, -273, "JU@f") + o(442, 449, 531, "zByy") + I("j]Nz", 392, 332, 381) + a(349, "J^wc") + I("tFiS", 559, 566, 506) + o(556, 563, 591, "m5yd") + I("jqy)", 618, 488, 509) + r(-149, -260, -292, -268, "sdiu") + o(697, 580, 603, "t)w*") + I("r@af", 590, 462, 497) + n(-2, "*q]A", 91, -14) + r(-367, -333, -396, -348, "$)VX") + a(399, "tFiS") + o(361, 454, 494, "Jhtt") + n(33, "m2GV", 203, 144) + a(478, "EkT@") + n(77, "V5ut", -1, 20) + n(124, "PEv3", -24, 62) + a(435, "L6#L") + o(649, 561, 501, "r@af") + I("wrYg", 527, 547, 460) + r(-167, -223, -255, -150, "Jhtt") + o(655, 593, 497, "jqy)") + a(271, "!m5i") + I("b@7p", 372, 458, 380) + I("zByy", 547, 465, 512) + o(379, 438, 365, "jqy)") + r(-173, -180, -237, -222, "qywN") + n(-47, "lWuK", 179, 72) + r(-443, -326, -371, -418, "2jHO") + a(340, "py2f") + a(296, "J^wc") + n(160, "1MtM", 104, 99) + I("2jHO", 405, 302, 367) + n(-113, "L6#L", -98, -20) + r(-269, -313, -206, -342, "t)w*") + a(465, "L6#L") + n(-64, "trb*", 108, -6) + r(-305, -281, -172, -169, "N5cX") + o(594, 489, 533, "ajVi") + n(245, "PEv3", 256, 169) + n(12, "jqy)", 148, 101) + r(-257, -295, -195, -217, "tvYM") + I("Jhtt", 342, 369, 428) + n(-42, "*q]A", -72, 6) + a(320, "^eEU") + a(265, "vQk!") + o(563, 577, 466, "zByy") + a(272, "ajVi") + r(-164, -171, -169, -205, "sdiu") + o(548, 520, 545, "0PPt") + I("YWWv", 469, 411, 501) + o(547, 513, 562, "moX5") + n(76, "moX5", 212, 107) + o(586, 524, 496, "$)VX") + I("b@7p", 464, 487, 528) + I("lWuK", 598, 440, 556) + o(521, 581, 591, "ajVi") + r(-267, -286, -233, -396, "moX5") + a(354, "m5yd") + o(554, 600, 495, "@]*&") + I("1MtM", 519, 396, 451) + I("$)VX", 388, 571, 453) + I("@]*&", 628, 430, 527) + o(538, 571, 582, "!m5i") + r(-172, -252, -169, -328, "sdiu") + I("sdiu", 416, 315, 360) + n(104, "sdiu", -39, 56) + n(-84, "m2GV", -143, -62) + I("F]dI", 506, 436, 454) + n(-79, "Jhtt", 117, 12) + r(-343, -253, -213, -287, "m5yd") + r(-342, -308, -343, -194, "SIC0") + a(273, "moX5") + r(-376, -332, -306, -442, "YWWv") + o(525, 435, 434, "tFiS") + n(81, "$)VX", 174, 175) + I("V5ut", 399, 465, 503) + o(571, 496, 462, "tFiS") + r(-197, -191, -302, -158, "ajVi") + a(351, "6Z*G") + a(466, "vQk!") + r(-435, -357, -444, -387, "lWuK") + I("o%Ta", 381, 318, 398) + a(436, "sdiu") + a(267, "Jhtt") + n(187, "@]*&", 149, 141) + n(18, "lWuK", -25, -16) + a(357, "^eEU") + I("VSnF", 529, 487, 558) + n(50, "b@7p", 175, 163) + n(-122, "F]dI", -65, -58) + I("py2f", 452, 523, 411) + r(-471, -365, -330, -355, "m5yd") + r(-247, -338, -431, -249, "2jHO") + n(105, "eQ7@", -74, 31) + I("vQk!", 423, 399, 383) + o(416, 410, 429, "tnYb") + o(356, 377, 315, "*Y]H") + r(-344, -273, -349, -348, "2jHO") + r(-354, -322, -241, -409, "0PPt") + n(12, "qywN", 132, 33) + a(329, "zByy") + n(26, "RUvz", -31, -41) + r(-392, -337, -369, -403, "1MtM") + r(-410, -393, -362, -394, "m5yd") + a(394, "zByy") + o(372, 395, 451, "jqy)") + n(88, "tvYM", 165, 67) + r(-159, -220, -194, -323, "sdiu") + n(-44, "zByy", -4, 70) + I("sdiu", 368, 406, 419) + I("c5)o", 577, 477, 511) + I("jqy)", 527, 580, 554) + n(34, "JkLt", 138, 27) + I("L6#L", 501, 530, 438) + r(-168, -226, -328, -246, "r@af") + I("jqy)", 421, 399, 474) + n(191, "nAMh", 98, 124) + I("PEv3", 567, 470, 471) + r(-266, -201, -303, -146, "tvYM") + r(-353, -262, -266, -250, "eQ7@") + a(416, "1MtM") + n(112, "*Y]H", 74, -7) + n(125, "wrYg", 27, 137) + a(341, "t)w*") + o(662, 589, 695, "qywN") + n(155, "j]Nz", 69, 104) + o(432, 463, 404, "wrYg") + a(382, "0PPt") + r(-303, -196, -241, -234, "2Y4n") + r(-227, -178, -203, -160, "2jHO") + o(594, 591, 627, "EkT@") + I("F]dI", 405, 256, 353) + o(368, 457, 344, "tnYb") + I("t)w*", 471, 324, 352) + n(32, "2jHO", 176, 79) + r(-403, -372, -473, -472, "EkT@") + a(245, "2jHO") + r(-391, -302, -390, -324, "^eEU") + n(-57, "tnYb", -29, -55) + r(-248, -210, -119, -298, "!m5i") + a(362, "tnYb") + a(345, "c5)o") + n(128, "JU@f", -2, 71) + I("^eEU", 508, 633, 553) + o(642, 536, 487, "r@af") + o(451, 534, 439, "@]*&") + r(-359, -387, -421, -363, "sdiu") + o(477, 379, 496, "RUvz") + o(548, 528, 473, "wrYg") + r(-361, -363, -477, -294, "yo3f") + a(348, "N5cX") + n(198, "VSnF", 115, 149) + o(317, 421, 392, "c5)o") + a(286, "c5)o") + I("tvYM", 381, 397, 459) + o(651, 597, 513, "F]dI") + I("lWuK", 525, 476, 576) + o(483, 499, 525, "N5cX") + I("jqy)", 440, 461, 515) + r(-366, -318, -428, -414, "t)w*") + r(-100, -207, -118, -179, "SIC0") + o(357, 386, 331, "qywN") + n(224, "PEv3", 139, 115) + a(326, "sdiu") + n(-105, "zByy", 70, -45) + o(673, 584, 645, "RUvz");
  function n(C, s, B, E, d) {
    return j(E - -383, s);
  }
  const t = window[r(-358, -384, -450, -419, "0PPt")](i), e = window[a(392, "c5)o")](t), A = VB(e);
  function o(C, s, B, E, d) {
    return j(s - 55, E);
  }
  function r(C, s, B, E, d) {
    return j(s - -719, d);
  }
  const g = {};
  function a(C, s, B, E, d) {
    return j(C - -78, s);
  }
  g[r(-414, -346, -312, -294, "$)VX")] = Rs;
  function I(C, s, B, E, d) {
    return j(E - 23, C);
  }
  return g[I("EkT@", 446, 362, 407)] = HC, window[o(348, 388, 458, "^eEU") + "o"][n(173, "r@af", 193, 134) + "e"][o(431, 391, 376, "*q]A") + o(536, 497, 568, "wrYg")](r(-315, -204, -195, -309, "2Y4n"), A, g, !0, [r(-197, -258, -252, -198, "$)VX") + "pt"]);
}
function sn() {
  const i = ["ovfMW6FdNW", "c13dMg0", "xspcKqfZ", "qIqfA8o2", "pCoIwmonbq", "ACoXW4tcINu", "h23dNZpcOa", "p8oiACo+jW", "xLehWQNcVrivWOzXmCoQEa", "W67dNSkbqra", "oHxdS8oJuW", "WQ0aESoOW6e", "c8oKWPNcJc8", "WQpcVa/cPYK", "grldNSkcWO8", "bWhcKYRcUa", "W6THWOCiWOS", "W4VcQ8oPW7tcLq", "WQnvmfNcSG", "z8kTW4X8W5K", "WOxcHCkPW5ua", "ESodW5/cGr8", "dcfKW7ddKW", "b2afW5tdUSoeW6e2WQz0xYK", "BSkGW5uxW4C", "k2ZdSdtcNa", "W5rUvKldLa", "pZ/dMmkBuW", "W5JdM8kjW4On", "WRDag8kr", "tSksW4VdU3FcLfngveZdHSk6WO4", "lCkqWR/cPGK", "rKxdQLex", "W5dcPmouW5Xv", "jSolWONcLW", "oCoLsSoneSkKmG", "mqPdW6FdRq", "luL+dmkx", "WO7cUSoTW7jw", "CH0fbvi", "WORdGSoPW7b5", "WOVcVKXIW7u", "psvtW6tdNa", "kZJdPCoJAW", "WQddOCk5j8o7", "ha7dKSohBG", "malcJrRcTq", "WRjooCkfwW", "n8onWQZcHXq", "W67cJSkDW73cNa", "W6nwW4S/ka", "oYFdKSofva", "WRJcN8oHWRLH", "WQ3cOKjyW68", "ys5AW5BcHG", "p8oXyGpcVq", "wX8eWPxcPG", "wSodfCkCoG", "W7OntfNcSW", "zJHYWRtdUq", "W6frWPlcO8km", "AfG3kSoCd0WdWQ4", "WONcUCowbwJcTCoQDIJcPCkttmoHiW", "WORcR8oqW5rk", "W6fgWR1/WO8", "WQVcPmoEW4DK", "zbZcKdn4", "jhhdUcdcGG", "zmk4WPJdVmoS", "W63cKaX9lq", "W6booXpdOmoIpG", "af7dOCkwra", "imoUWRxcMry", "W4rGBIFcTa", "WRSECSoZ", "uSo6WPldU8oy", "WPhcH8ogW75d", "W6ZdNmouaXm", "WQRdTMVcSCont1nwCmkAyG9k", "hsxdUYe7", "imovpCkha8ozW4VdIL7cRcjo", "d8o1WQJcMhC", "WPKyqmooW54", "WP/cTCoqW6S7", "W5rpWQVcJCk1", "sIb/WOBcNW", "WOWoW7uyeq", "yG5JWONcHq", "xwxcH8kSEW", "W4ddQW7dMCo2", "kGNcSmoxnW", "W73dS8oNgCkF", "fHpdQmktWOW", "WPFcKdj7aa", "WOZdRmoZa8km", "rCk0BCkdyq", "W4yeE1NcVG", "hZ7dLCkYBq", "WQFcQJHhaG", "kCoOW43cGxC", "vmo8W7JcRYG", "WQaTW4ZdJSkX", "hmoTWRBcUJi", "xWVcKSkVWOe", "WOJdKSk2W7Dt", "W4HeWRD1WRO", "W4FcLslcQMq", "W79CteBcNa", "o8oPWQGqWPxdPSoNW4ibW4PUFCovBq", "mmofW5yDW4FdPrS", "qX80s8ouavJcNqruW78", "xmoTB8o8cq", "gJhdJ8k2WRm", "cXfoW63dVq", "uCk0o8oHza", "y8k2wmosFW", "WPW4W5JdLmkX", "WRBcS8k6W44V", "W65sW7eHmG", "W6hcVSkDWRWs", "B8oqW4VcHWq", "iX/cKSollq", "WQeMW7pdK8kg", "hvtdSHtcVq", "WPRcL3ZcHCo0mSktk8k6WO4VgSkV", "pdXsc8oV", "W5TdWPxcNSkg", "W7S9WR3dJmkD", "W6VcQbazdq", "W58gzIxcVa", "W4JdKZZdJCkW", "W5rTWPldISks", "A8kTW7re", "EJRdQcuf", "W4faustcOa", "oCoJWQNcNNC", "ztLDW5dcNW", "gb7dKmohmq", "fsJdNCoPWPC", "m0tcTCohfq", "DXZcP8kLW6y", "k8oCW5VcPI0", "amotCWpcKa", "W7j9WR1zWPa", "EmkOECoJaa", "W6pcPmkYW7BcHG", "n8ksWPddQ8oj", "AJHgWO3cKq", "WPNcLSkQW6tcLW", "WO/cICkHW60y", "nN7dTCo6WOdcGJ4fW7BcUJRdSCkv", "qLpdOZJcJW", "nt80jmo/", "W6NcKdFcUKS", "W4r3WQ8EWOi", "ot/cIIVdQq", "ACosWQ7dPCoI", "vh/dU8kaW6u", "WOVcU8osawBdMmkNcr3cI8kZ", "j3hdH8oRWOi", "omoOWQ/dGXi", "WQ5UrSkFxG", "WP8PW63cSCkJ", "WPSaoCkyoG", "cYddLmkYW64", "aMafWR3cPmkDW5m2WOy", "rqBdGxSF", "vWfooKC", "WRddSCopW6qBksddLCkFjmkc", "W5pcImo8W7bUueW", "WO7cISkNW4i", "sCkdWRddICoE", "rSoDW7KqW7y", "WRxcKSkKWPPG", "W4RcSatdMmkq", "W6JcVYCEda", "tSkqW4VcNIpdRXXxFq", "aGfKWQtdJG", "D8oeW4RcMXW", "WPlcVXvWW6O", "gaVdLCovBq", "FmkaFCoE", "pJuVtCoJ", "WRJcOmo4W4qd", "ofjjpCk+", "ex/dTwpcKa", "DWpdVbWM", "nNNdSCktW5/dNKKRW6q", "W7VdShxdU8kQ", "WP/cI0nHW5u", "tCoQWPVcLGm", "eSokWO7cHq8", "mCopCdtcUa", "W6zIm2FcLa", "AmkCWQOsW7a", "WPJdT3pdQCkO", "i8o5tYZcGq", "WRxcVaVcMKGXW6C", "WOjVWRNcRCk4", "nqbAnSoY", "rHWjb3e", "WQnYmuxcSW", "xSoWCddcSa", "W6P4WQ3cNSk/", "tSoUWP7cPae", "mNVdKIy6", "xtZdVb8H", "W4Cigsn3", "d1RdSSkRua", "WRtcImk1WRnb", "W7lcK8kDWPfL", "W499WRK/W5O", "g8oNWORcQcC", "WOVcLdjpsa", "W4FdUhBdP8ko", "nJpdOwVcHG", "W51KWRVcOmoN", "WQNdMKBcGI0", "W5hcKCksW504W5Ho", "wfJcG8oJoM/cPJhdKSopWRq", "W6r6hSk2Da", "W7BdHmkeaqq", "jwxcQh5dWP1KemovWQL4WRe", "jYqNySor", "E8kgW4FdJCoE", "WOJcJKHIW5m", "WRa8fs/dIq", "WOVdN8kRWPq7", "W7S1W7ZdOmkG", "qxlcUKtcRq", "W4xcSSkwW6JcQa", "qqugW5tcKW", "W7ldTa/dP8kr", "W6/dN8kcaWq", "lx3dS1e8", "pYGZrCot", "W55Hve3cOG", "kqjwfmoq"];
  return sn = function() {
    return i;
  }, sn();
}
async function rE(i) {
  function n(o, r, g, a, I) {
    return j(o - 240, a);
  }
  const t = await iE();
  function e(o, r, g, a, I) {
    return j(a - 477, g);
  }
  const A = {};
  return A[e(961, 987, "L6#L", 952)] = Rs, window[n(794, 762, 778, "tFiS") + "o"][n(683, 780, 746, "nAMh") + "e"][n(692, 770, 685, "2Y4n") + "pt"](A, t, i);
}
function In() {
  const i = ["WRhdN8ojW5f/W7vqW7/cUKK+W5S", "WPtcOL/dUsWpoLSbW79rW4G", "WPxcRftcIgD3ivab", "oguztGvRWOpcGg3cPG", "e8kZWR5FrCorxKBcSSkOCW", "xSk2g8kTxgWSW7pcJhZdQ8kcW5y", "aZT6lY1JW57dSSk+WRre", "WQuIWOugW7ddNSoCAHaLW61Bba", "WO/cOZ7dI8kUD8oDu8o7W5OSlq", "pg/cJutcHM7dSbXGsZ8", "ordcQSkzW5aGCY5eWP7cHCouWQ8", "WPOqeI3cSIBdKvG8WQxdVvW", "WRFdNSoiW554WP9NW5xcJLi8", "pMCytfWqWOdcLgBcM8opua", "jY93W6hdSKj8amkIguRdGq", "bmk9imobW7hcIef+WOP/W70mtG", "cSo9W6mxWOm", "lwFdH8ojWPOpl8kGt8oT", "W5yzzCkVjuBcISo3WQm", "WR3dKda"];
  return In = function() {
    return i;
  }, In();
}
(function(i, n) {
  const t = i();
  function e(g, a, I, C, s) {
    return DA(I - -705, C);
  }
  function A(g, a, I, C, s) {
    return DA(a - -191, C);
  }
  function o(g, a, I, C, s) {
    return DA(a - -607, C);
  }
  function r(g, a, I, C, s) {
    return DA(g - 712, s);
  }
  for (; ; )
    try {
      if (-parseInt(r(1007, 1007, 1006, 1009, "5rd)")) / 1 + parseInt(o(-326, -321, -318, "^YpD", -313)) / 2 + parseInt(o(-324, -319, -322, "0Tnl", -322)) / 3 + -parseInt(r(1002, 1001, 1008, 996, "nkMz")) / 4 + parseInt(A(103, 110, 110, "&lVZ", 103)) / 5 * (-parseInt(o(-311, -314, -320, "TZ)w", -323)) / 6) + parseInt(o(-313, -307, -316, "4L&R", -297)) / 7 + -parseInt(o(-298, -308, -302, "@w))", -315)) / 8 * (-parseInt(e(-409, -400, -407, "0Tnl", -411)) / 9) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(In, -786212 + 332243 * -2 + 1973945);
function DA(i, n) {
  i = i - (1 * -5813 + 8561 + -2465);
  const t = In();
  let e = t[i];
  if (DA.hqUFTq === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, d, Q, x = 0; Q = I.charAt(x++); ~Q && (d = E % 4 ? d * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & d >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, d = s.length; E < d; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, d = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let x = 0; x < I.length; x++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, d += String.fromCharCode(I.charCodeAt(x) ^ s[(s[Q] + s[B]) % 256]);
      return d;
    };
    DA.GKpmFa = a, DA.GOuPAb = {}, DA.hqUFTq = !0;
  }
  const o = t[-4993 + 6932 * -1 + 11925], r = i + o, g = DA.GOuPAb[r];
  return g ? e = g : (DA.hcxLdu === void 0 && (DA.hcxLdu = !0), e = DA.GKpmFa(e, n), DA.GOuPAb[r] = e), e;
}
async function aE(i) {
  const { iv: n, key: t, message: e } = await zB(i);
  function A(a, I, C, s, B) {
    return DA(a - -893, B);
  }
  const o = await rE(t), r = {};
  r[A(-599, -592, -609, -599, "aEgk")] = o, r.iv = n;
  function g(a, I, C, s, B) {
    return DA(B - 823, C);
  }
  return r[g(1122, 1113, "j^K8", 1105, 1114) + "ge"] = e, r;
}
function bA(i, n) {
  i = i - (-1098 * -5 + 8428 + 6857 * -2);
  const t = cn();
  let e = t[i];
  if (bA.xPQMRI === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, d, Q, x = 0; Q = I.charAt(x++); ~Q && (d = E % 4 ? d * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & d >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, d = s.length; E < d; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, d = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let x = 0; x < I.length; x++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, d += String.fromCharCode(I.charCodeAt(x) ^ s[(s[Q] + s[B]) % 256]);
      return d;
    };
    bA.ETfZgG = a, bA.VRcftS = {}, bA.xPQMRI = !0;
  }
  const o = t[-2601 + -5 * 937 + 2 * 3643], r = i + o, g = bA.VRcftS[r];
  return g ? e = g : (bA.yRYsQW === void 0 && (bA.yRYsQW = !0), e = bA.ETfZgG(e, n), bA.VRcftS[r] = e), e;
}
function cn() {
  const i = ["WQddS3tdPKGdW7ddLq", "xSkUCMjjmXtcPgNcMg9X", "W41/W7O", "W5BcGmkkW6ZdRSowW5m+WOe/mCkE", "WORcRcZcUmoCmYlcO28wWRC", "zmovW4K", "gZ7dKvTF", "wCkUFMDjnHJcKM/cLKnY", "xSk6bJPLq8ohoG", "W7mhmmonCW", "W4K8zftcJW", "WQqKrSkYWRtcIr4", "kmkOW4tdQCky", "W6hcSSojW6XNW6ZdO8o0W6ldKHPM", "WP88WRLnW47cQmkJW6zEbWtcLa", "iSojWOz0kmoOWRbvlmkeWQddQG", "W7ZcQMm", "bCo0iZO", "WPxdKSk6W5NdQSoXWPa", "pmotc3Ll", "W7buFSkMmmksW5/cK8oMWQVdHxG", "sSkQWRdcLvm", "WQvyBSkrmapdRmkfW6flWOtcMW", "uZONBmozWQlcHehdQCktAxC", "W5HNWPpdNa", "BSkqCSkVW7HGWOtcGmk+FGmw", "WRlcKhyEnmkpbSoipJ7dO2a", "aeVcKmkQfmotytrpECoRW7C", "AmoPWPtcPComW5zYWP9zz3q"];
  return cn = function() {
    return i;
  }, cn();
}
(function(i, n) {
  const t = i();
  function e(r, g, a, I, C) {
    return bA(a - -333, I);
  }
  function A(r, g, a, I, C) {
    return bA(C - 367, I);
  }
  function o(r, g, a, I, C) {
    return bA(C - -546, a);
  }
  for (; ; )
    try {
      if (-parseInt(o(-338, -314, "8At0", -330, -325)) / 1 + parseInt(o(-348, -337, "$Y2i", -341, -336)) / 2 + -parseInt(o(-321, -332, "NbOl", -319, -324)) / 3 + parseInt(A(571, 582, 568, "s&a5", 583)) / 4 + parseInt(o(-330, -341, "EEEs", -349, -337)) / 5 + parseInt(o(-337, -320, "uZTo", -325, -332)) / 6 * (parseInt(e(-107, -100, -105, "*gB@", -114)) / 7) + parseInt(A(585, 590, 589, ")o%a", 596)) / 8 * (-parseInt(A(584, 591, 592, "y1*A", 592)) / 9) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(cn, 85310 + 7711 * 1 + 28249);
async function jI(i) {
  const n = new Uint8Array(i);
  function t(r, g, a, I, C) {
    return bA(g - 412, C);
  }
  function e(r, g, a, I, C) {
    return bA(g - 829, I);
  }
  function A(r, g, a, I, C) {
    return bA(g - 410, r);
  }
  const o = await window[t(604, 618, 608, 629, "q4oi") + "o"][A("7@5B", 618) + "e"][A("c!1m", 615) + "t"](e(1058, 1044, 1055, "B^@q"), n);
  return Array[t(635, 632, 619, 637, "pNnS")](new Uint8Array(o))[t(616, 624, 618, 628, "y1*A")]((r) => r[e(1055, 1060, 1051, "o7ud") + t(650, 642, 634, 639, "@6Y6")](7356 + -5 * -355 + -1823 * 5)[t(632, 629, 643, 628, "6X@T") + e(1069, 1056, 1070, "$Y2i")](1 * 6194 + -355 * 6 + -2031 * 2, "0"))[A("B^@q", 623)]("");
}
(function(i, n) {
  function t(a, I, C, s, B) {
    return UA(s - 346, B);
  }
  var e = i();
  function A(a, I, C, s, B) {
    return UA(B - -816, s);
  }
  function o(a, I, C, s, B) {
    return UA(B - 547, s);
  }
  function r(a, I, C, s, B) {
    return UA(C - -713, I);
  }
  for (; ; )
    try {
      var g = -parseInt(A(-331, -324, -325, "B[FS", -335)) / 1 * (parseInt(A(-340, -342, -338, "ivGR", -344)) / 2) + -parseInt(A(-325, -327, -321, "BjQn", -328)) / 3 * (parseInt(r(-219, "ntjv", -229, -219, -239)) / 4) + parseInt(A(-332, -341, -334, "&ICN", -334)) / 5 * (parseInt(o(1017, 1024, 1015, "e&g$", 1022)) / 6) + parseInt(t(820, 804, 815, 815, "RF8X")) / 7 + -parseInt(o(1016, 1025, 1011, "V@^s", 1020)) / 8 * (-parseInt(o(1022, 1019, 1003, "qUBq", 1014)) / 9) + -parseInt(A(-321, -327, -319, "m1yJ", -327)) / 10 * (parseInt(o(1042, 1035, 1038, "djas", 1030)) / 11) + parseInt(r(-251, "e&g$", -243, -242, -253)) / 12;
      if (g === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Cn, -45 * 6239 + -462718 + 350564 * 3);
function Cn() {
  var i = ["w8ospwrWxmkru8o7", "gsHaW6FcJmo8W7nnwCkNoea", "s8okW49EmgNcNCoke8o/", "W7dcUCk2A8ogW5yQW6O", "WOjevCoAlsr+WP7cImkikCk8WPe", "W6b4W5lcGstcHmk+WOpdRZxcMf/dQG", "jX5WzCofW6dcL8kHW5tcM07dNCkz", "WPBcUmkRWP3cMbGlutRdGG", "WOy/W5b/WPBcHWVdLCk5nNRcNa", "W6ulACohW654dqDyW5PFW6m", "fNBdKvJdISoRWReoWRVcQSoLWRO", "lr99zSk9WOFdJ8kmW53cPG", "WP1jW4/dJLhcPCoN", "W6nZWR3dMx3dSSo0WPO", "iJddTbSAmmkbWRS", "WP8sWP3cGI7cTSo0AmoJoNu", "WRePWOiaWPxcVKvkWP9KWP3cI8ob", "W7VcSapcT8khwCoh", "ovFdTSk4WPXhaSoYB1m", "edRcUMldGSkkWODY", "hsBdH8oEeLSfCt1/W6q", "xmkyWOLCpSkwWRycWOa", "g8kEAmksW5hdV2NcP1tdHNtdHq", "sConW4jyrqVcMSorl8oflCkN"];
  return Cn = function() {
    return i;
  }, Cn();
}
function UA(i, n) {
  i = i - 466;
  var t = Cn(), e = t[i];
  if (UA.kwTwXV === void 0) {
    var A = function(I) {
      for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", B = "", E = 0, d, Q, x = 0; Q = I.charAt(x++); ~Q && (d = E % 4 ? d * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & d >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (var f = 0, h = s.length; f < h; f++)
        B += "%" + ("00" + s.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(B);
    }, o = function(I, C) {
      var s = [], B = 0, E, d = "";
      I = A(I);
      var Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (var x = 0; x < I.length; x++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, d += String.fromCharCode(I.charCodeAt(x) ^ s[(s[Q] + s[B]) % 256]);
      return d;
    };
    UA.uCnxff = o, UA.UBdjKM = {}, UA.kwTwXV = !0;
  }
  var r = t[0], g = i + r, a = UA.UBdjKM[g];
  return a ? e = a : (UA.hAQzBk === void 0 && (UA.hAQzBk = !0), e = UA.uCnxff(e, n), UA.UBdjKM[g] = e), e;
}
async function qI(i) {
  const { Image: n } = nt, t = await i.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const o = n.verify(A);
  if (o) throw y.fromError(o);
  const r = {};
  return r.bytes = e, n.create(r);
}
function gE(i) {
  const { VideoStream: n } = nt, t = n.verify(i);
  if (t) throw y.fromError(t);
  return n.create(i);
}
async function sE(i) {
  const { v4: { Metadata: n } } = nt, t = { ...i };
  t.platform = nt.Platform.WEB, t.componentVersion = "8.0.3";
  const e = t, A = n.verify(e);
  if (A) throw y.fromError(A);
  return n.create(e);
}
async function IE(i) {
  const { Content: n } = nt, { iv: t, key: e, message: A } = await aE(i), o = { token: new Uint8Array(e), iv: t, schemaVersion: PC, bytes: new Uint8Array(A) }, r = n.verify(o);
  if (r) throw y.fromError(r);
  const g = n.create(o);
  return n.encode(g).finish();
}
function cE(i) {
  const { Blob: n } = nt.v4, t = n.verify(i);
  if (t) throw y.fromError(t);
  const e = n.create(i);
  return n.encode(e).finish();
}
async function CE(i, n, t) {
  const { architecture: e, fullVersionList: A, model: o, platform: r, platformVersion: g } = n ?? {};
  return { userAgent: i, architecture: e, platform: r, model: o, platformVersion: g, browserVersions: A?.map(({ brand: a, version: I }) => ({ name: a, version: I })), installationId: t };
}
async function BE({ image: i, metadata: n, video: t }) {
  const { FaceContent: e } = nt.v4, A = await qI(i), o = await sE(n), r = t && gE(t), g = {};
  g.streamH264 = r;
  const a = {};
  a.image = A, a.metadata = o, a.video = g;
  const I = a, C = e.verify(I);
  if (C) throw y.fromError(C);
  const s = e.create(I), B = {};
  return B.faceContent = s, cE(B);
}
async function QE(i) {
  const n = await BE(i);
  return IE(n);
}
function EE({ controller: i, onCompleteInternal: n }) {
  const { captureMode: t, onComplete: e, sessionToken: A } = tI(), o = ye(({ candidateSelectionImages: a, imageData: I, protoMessage: C, webMetadata: s }) => {
    PQ(ks.FACE, a), e(I, C);
    const B = {};
    B.cameraProperties = s, n?.(B);
  }, [n, e]), r = ye(({ fps: a, processedImage: I }, C) => {
    const s = {};
    s.code = I.instructionCode, s.isEscalated = I.isEscalated, oI(ce.INSTRUCTION_CHANGED, s), i && JB(ce.DETECTION_CHANGED, I.detection, i.imageProcessor.validationService.getThresholds().confidence.min);
    const B = {};
    B.detection = I.detection, B.fps = a, B.image = C, B.isInCandidateSelection = I.isInCandidateSelection, B.invalidValidators = I.invalidValidators, UB(ce.FACE_DETECTION, B);
  }, [i]), g = {};
  return g.captureMode = t, g.controller = i, g.createProtoMessage = QE, g.onCapture = o, g.onDetection = r, g.sessionToken = A, g.customEvent = ce, g.fallbackInstruction = CA.FACE_NOT_PRESENT, g.instructionCodeMap = CA, g.checkToInstructionCodeMap = mC, yQ(g);
}
const dE = 5342 * -1 + 1220 * 8 + -2 * 1209;
class lE {
  duration;
  constructor(n) {
    this.duration = n ?? dE;
  }
  candidateSelectionTime = -3 * 3029 + 3398 + 1 * 5689;
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
    this.candidateSelectionTime = 13 * 419 + -1100 + -4347, this.candidateSelectionImages = [];
  }
}
const xE = async () => WebAssembly.validate(new Uint8Array([-1 * 2999 + 88 + 2911, 1 * 6221 + -6985 + 861, 2653 + -18 * 274 + 2 * 1197, -1288 + 1 * 9626 + -8229, -1 * 1595 + 1 * -7357 + 8953 * 1, -5339 * 1 + -703 * 12 + 13775, -5165 + 5165 * 1, -5597 + 1067 * -3 + 8798, 3202 * 3 + -1 * 2495 + -7110, -5420 + 5425 * 1, -4 * -1327 + 852 + -6159, -4 * 1710 + -5041 + 1711 * 7, 366 + -6 * -892 + 3 * -1906, -8365 + -818 * -6 + 3458 * 1, 9124 * 1 + 9513 + -18514 * 1, 3752 + -1859 * -5 + -1 * 13044, -10608 + -10610 * -1, -4894 + -445 * -11, 1 * -1852 + -548 + 2400, -10221 + 10231 * 1, -1 * 2089 + 5911 + 1 * -3812, 5478 + -1 * 5477, 8, 1 * 646 + 9129 + -9775, -1 * -3501 + 2225 + 5661 * -1, 0, 253, 14179 + 7082 * -2, 7802 + 9 * 565 + -1 * 12634, 98, -13412 + -1 * -13423]));
function uE() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(1 * -1545 + 9316 + 15 * -517);
}
function fE() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const n = uE();
  return sessionStorage.setItem("dot-user-id", n), n;
}
function hE(i, n) {
  return n ? n === "user" ? "Front Camera" : "Back Camera" : i;
}
function pE(i) {
  return i > 6e4 ? ">1m" : "" + i;
}
function yE(i) {
  return i > 10 ? ">10" : "" + i;
}
const rr = (i) => i ? i <= -5301 + -448 * 4 + -7094 * -1 ? Math.round(i * (9110 + -1266 * -7 + -24 * 748)) / (1 * -7673 + 7 * -1409 + 21 * 836) : Math.round(i / (-9835 + -300 * -26 + 2085)) * (8373 + -9955 * -1 + -1 * 18278) : 0;
function mE(i) {
  return i ? Math.round(i / (-3373 * -2 + 137 + -4383)) * (359 * -3 + 8316 + 1 * -4739) : 709 * -1 + -1519 + -4 * -557;
}
const wE = (i) => i ? Math.round(i / (-1 * -4217 + -7 * 1297 + 4872)) * (12200 + 265 * -46) : 1 * -4769 + -1464 * -1 + 3305, DE = (i) => Math.round(i * (2377 * -1 + -9061 + -4 * -2860)) / (-7 * 1295 + -5 * 1325 + -1 * -15692);
function bE(i) {
  return i !== sA.RUNNING ? Po.VISIBLE : Po.VISIBLE_WITH_MASK;
}
async function kE() {
  return await xE() ? ka.SIMD : ka.NO_SIMD;
}
class VI {
  constructor(n, t, e, A, o, r, g, a, I, C, s, B, E) {
    this.cameraService = n, this.imageProcessor = t, this.createProtoMessage = e, this.onCaptureCallback = A, this.onDetectionCallback = o, this.checkToInstructionCodeMap = r, this.fallbackInstruction = g, this.samVersion = a, this.installationId = I, this.instructionEscalation = C, this.sessionToken = s, this.analytics = B, this.transactionCounting = E;
  }
  isRunning = !0;
  #A = Date.now();
  fpsOfAllImages = new Gr(839 * -5 + 939 * 6 + -1 * 1409);
  async run() {
    for (; this.isRunning; )
      await this.iterate();
    return this;
  }
  stop() {
    this.isRunning = !1;
  }
  async trackCaptureProcess(n, t) {
    const e = Date.now(), A = qt(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height;
    const r = { detection: n, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - this.#A, facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await kE() };
    Ht() && Object.assign(r, { performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), isSystemStable: !et() }), this.analytics?.trackCaptureProcess(r);
  }
  onDetection(n, t) {
    this.onDetectionCallback({ ...n, avgFps: me(qt(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
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
    const A = e, o = await eB(n), r = await this.prepareDetectionMetadata(n, t), g = this.cameraService.videoRecorder?.getRecording(), a = {};
    a.image = o, a.metadata = r, a.video = g;
    const I = await this.createProtoMessage(a), C = {};
    C.detection = t, C.imageResolution = A;
    const s = {};
    s.image = o, s.data = C;
    const B = s, E = {};
    return E.imageData = B, E.metadata = r, E.protoMessage = I, E;
  }
  async prepareDetectionMetadata(n, t) {
    const e = await this.cameraService.getCameraProperties(), A = Ps(), o = await aB(), r = await this.installationId.get(), g = { ...e, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImageWithPosition: await this.getCroppedImageWithPosition(n, t), platformDetails: await CE(A, o, r) }, a = {};
    return a.sessionToken = this.sessionToken, a.web = g, a;
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = Js(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), g = await oB(n, r), a = {};
    a.x = r.shiftX, a.y = r.shiftY;
    const I = a, C = await qI(g), s = {};
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
    await Ji(Math.max(Fa.max - n, Fa.min));
  }
}
class SE extends VI {
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
      throw t instanceof Error ? y.fromCameraError(t) : y.fromError(t);
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
    else throw new y("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: n, takenPhoto: t }) {
    const e = this.getDetectionEndTime(t.timestamp), A = me((1953 + -953 * 1) / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = t.image.width, o.height = t.image.height;
    const r = o, g = this.getInvalidInstructions(n.validationResult, this.checkToInstructionCodeMap), a = {};
    a.isNewDetectionValid = n.isValid, a.newInvalidInstruction = g[0];
    const I = this.getInstructionCode(a), C = this.collectAndEscalate(I);
    return { processedImage: { detection: n.detection, instructionCode: I, isEscalated: C, invalidValidators: g, isInCandidateSelection: this.candidateSelection.isInCandidateSelection() }, detectionTime: e, fps: A, avgFps: me(qt(this.fpsOfAllImages)), resolution: r };
  }
  getInstructionCode({ isNewDetectionValid: n, newInvalidInstruction: t }) {
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage?.isValid && n ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && n ? this.lastImage.instructionCode : t ?? this.fallbackInstruction;
  }
  isNewImageBetter(n, t) {
    return t.sharpness > n.sharpness;
  }
}
class ZI {
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
    if (!this.cameraService) throw new y("CameraService is required");
    if (!this.imageProcessor) throw new y("ImageProcessor is required");
    if (!this.createProtoMessage) throw new y("CreateProtoMessage is required");
    if (!this.onCaptureCallback) throw new y("OnCaptureCallback is required");
    if (!this.onDetectionCallback) throw new y("OnDetectionCallback is required");
    if (!this.checkToInstructionCodeMap) throw new y("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new y("FallbackInstruction is required");
    if (!this.samVersion) throw new y("SamVersion is required");
    if (!this.installationId) throw new y("InstallationId is required");
  }
}
class GE extends ZI {
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
    if (super.validateDependencies(), !this.instructionCodeMap) throw new y("instructionCodeMap is required");
    if (!this.candidateSelection) throw new y("candidateSelection is required");
  }
  build() {
    return this.validateDependencies(), new SE(this.candidateSelection, this.instructionCodeMap, this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.installationId, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
class NE extends VI {
  #A = void 0;
  #e;
  constructor(...n) {
    super(...n), this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(n) {
    return n.detail?.["instruction"] ? Object.values(Pn).includes(n.detail?.["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    this.#e = (n) => {
      this.isRequestCaptureEventValid(n) && (this.#A = n.detail?.["instruction"]);
    }, document.addEventListener(Da.REQUEST_CAPTURE, this.#e);
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
    return this.#A ? this.#A === Pn.FIRST_FRAME ? !0 : this.#A === Pn.FIRST_VALID_FRAME ? n.isValid : !1 : !1;
  }
  async processTakenPhoto(n) {
    try {
      return await this.imageProcessor.process(n);
    } catch (t) {
      throw t instanceof Error ? y.fromCameraError(t) : y.fromError(t);
    }
  }
  async onCaptureDone(n, t) {
    this.transactionCounting?.trackTransaction(), this.trackCaptureProcess(t, n);
    const e = {};
    e.canvasImage = n, e.detection = t, e.candidateSelectionImages = [], await this.onCapture(e), this.#A = void 0;
  }
  getDetectionDetails(n, t) {
    const e = this.getDetectionEndTime(n.timestamp), A = me((-8263 + -7 * 667 + -258 * -54) / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = n.image.width, o.height = n.image.height;
    const r = o, g = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), a = this.getInstructionCode(g[3 * 833 + -6262 + 1 * 3763]), I = this.collectAndEscalate(a), C = {};
    return C.detection = t.detection, C.instructionCode = a, C.invalidValidators = g, C.isInCandidateSelection = !1, C.isEscalated = I, { processedImage: C, detectionTime: e, fps: A, avgFps: me(qt(this.fpsOfAllImages)), resolution: r };
  }
  getInstructionCode(n) {
    return n ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), this.#e && document.removeEventListener(Da.REQUEST_CAPTURE, this.#e);
  }
}
class RE extends ZI {
  build() {
    return this.validateDependencies(), new NE(this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.installationId, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
class FE {
  create(n, t) {
    const { analytics: e, cameraService: A, candidateSelection: o, checkToInstructionCodeMap: r, createProtoMessage: g, fallbackInstruction: a, imageProcessor: I, installationId: C, instructionCodeMap: s, instructionEscalation: B, onCaptureCallback: E, onDetectionCallback: d, samVersion: Q, sessionToken: x, transactionCounting: f } = t;
    switch (n) {
      case vi.AUTO_CAPTURE:
        return new GE().setCandidateSelection(o).setCheckToInstructionCodeMap(r).setFallbackInstruction(a).setInstructionCodeMap(s).setCameraService(A).setImageProcessor(I).setCreateProtoMessage(g).setOnCaptureCallback(E).setOnDetectionCallback(d).setSamVersion(Q).setInstallationId(C).setInstructionEscalation(B).setSessionToken(x).setAnalytics(e).setTransactionCounting(f).build();
      case vi.WAIT_FOR_REQUEST:
        return new RE().setCheckToInstructionCodeMap(r).setFallbackInstruction(a).setCameraService(A).setImageProcessor(I).setCreateProtoMessage(g).setOnCaptureCallback(E).setOnDetectionCallback(d).setSamVersion(Q).setInstallationId(C).setInstructionEscalation(B).setSessionToken(x).setAnalytics(e).setTransactionCounting(f).build();
      default:
        throw new y("Invalid detection type: " + n);
    }
  }
}
class vE {
  localStorageKey;
  constructor(n = qC) {
    this.localStorageKey = n;
  }
  generateUuid() {
    return crypto.randomUUID();
  }
  generateSha1(n) {
    const t = new TextEncoder(), e = t.encode(n);
    return jI(e);
  }
  async generateAndStoreDecoys() {
    for (const n of VC) {
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
const zI = /* @__PURE__ */ Symbol("Comlink.proxy"), ME = /* @__PURE__ */ Symbol("Comlink.endpoint"), XI = /* @__PURE__ */ Symbol("Comlink.releaseProxy"), gi = /* @__PURE__ */ Symbol("Comlink.finalizer"), Ro = /* @__PURE__ */ Symbol("Comlink.thrown"), $I = (i) => typeof i == "object" && i !== null || typeof i == "function", WE = {
  canHandle: (i) => $I(i) && i[zI],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return ec(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), oc(i);
  }
}, LE = {
  canHandle: (i) => $I(i) && Ro in i,
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
}, Ac = /* @__PURE__ */ new Map([
  ["proxy", WE],
  ["throw", LE]
]);
function OE(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function ec(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!OE(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: g } = Object.assign({ path: [] }, A.data), a = (A.data.argumentList || []).map(ze);
    let I;
    try {
      const C = g.slice(0, -1).reduce((B, E) => B[E], i), s = g.reduce((B, E) => B[E], i);
      switch (r) {
        case "GET":
          I = s;
          break;
        case "SET":
          C[g.slice(-1)[0]] = ze(A.data.value), I = !0;
          break;
        case "APPLY":
          I = s.apply(C, a);
          break;
        case "CONSTRUCT":
          {
            const B = new s(...a);
            I = HE(B);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: B, port2: E } = new MessageChannel();
            ec(i, E), I = PE(B, [B]);
          }
          break;
        case "RELEASE":
          I = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      I = { value: C, [Ro]: 0 };
    }
    Promise.resolve(I).catch((C) => ({ value: C, [Ro]: 0 })).then((C) => {
      const [s, B] = En(C);
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), B), r === "RELEASE" && (n.removeEventListener("message", e), tc(n), gi in i && typeof i[gi] == "function" && i[gi]());
    }).catch((C) => {
      const [s, B] = En({
        value: new TypeError("Unserializable return value"),
        [Ro]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), B);
    });
  }), n.start && n.start();
}
function JE(i) {
  return i.constructor.name === "MessagePort";
}
function tc(i) {
  JE(i) && i.close();
}
function oc(i, n) {
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
  }), ar(i, t, [], n);
}
function Qo(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function nc(i) {
  return Bt(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    tc(i);
  });
}
const Bn = /* @__PURE__ */ new WeakMap(), Qn = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (Bn.get(i) || 0) - 1;
  Bn.set(i, n), n === 0 && nc(i);
});
function UE(i, n) {
  const t = (Bn.get(n) || 0) + 1;
  Bn.set(n, t), Qn && Qn.register(i, n, i);
}
function YE(i) {
  Qn && Qn.unregister(i);
}
function ar(i, n, t = [], e = function() {
}) {
  let A = !1;
  const o = new Proxy(e, {
    get(r, g) {
      if (Qo(A), g === XI)
        return () => {
          YE(o), nc(i), n.clear(), A = !0;
        };
      if (g === "then") {
        if (t.length === 0)
          return { then: () => o };
        const a = Bt(i, n, {
          type: "GET",
          path: t.map((I) => I.toString())
        }).then(ze);
        return a.then.bind(a);
      }
      return ar(i, n, [...t, g]);
    },
    set(r, g, a) {
      Qo(A);
      const [I, C] = En(a);
      return Bt(i, n, {
        type: "SET",
        path: [...t, g].map((s) => s.toString()),
        value: I
      }, C).then(ze);
    },
    apply(r, g, a) {
      Qo(A);
      const I = t[t.length - 1];
      if (I === ME)
        return Bt(i, n, {
          type: "ENDPOINT"
        }).then(ze);
      if (I === "bind")
        return ar(i, n, t.slice(0, -1));
      const [C, s] = Qg(a);
      return Bt(i, n, {
        type: "APPLY",
        path: t.map((B) => B.toString()),
        argumentList: C
      }, s).then(ze);
    },
    construct(r, g) {
      Qo(A);
      const [a, I] = Qg(g);
      return Bt(i, n, {
        type: "CONSTRUCT",
        path: t.map((C) => C.toString()),
        argumentList: a
      }, I).then(ze);
    }
  });
  return UE(o, i), o;
}
function TE(i) {
  return Array.prototype.concat.apply([], i);
}
function Qg(i) {
  const n = i.map(En);
  return [n.map((t) => t[0]), TE(n.map((t) => t[1]))];
}
const ic = /* @__PURE__ */ new WeakMap();
function PE(i, n) {
  return ic.set(i, n), i;
}
function HE(i) {
  return Object.assign(i, { [zI]: !0 });
}
function En(i) {
  for (const [n, t] of Ac)
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
    ic.get(i) || []
  ];
}
function ze(i) {
  switch (i.type) {
    case "HANDLER":
      return Ac.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function Bt(i, n, t, e) {
  return new Promise((A) => {
    const o = KE();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function KE() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const _E = "SAM v1.50.5 for idcards";
class jE {
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
    et() && this.handleEnvironmentNotSupported();
  }
  async initDetector(n) {
    await this.detector.initSamModule(location.href, n);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(n) {
    if (!n || !this.areVersionsCompatible(n))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new y("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = n;
  }
  handleEnvironmentNotSupported() {
    Sr.warn(`
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
    if (!this.detection) throw new y("Detection not initialized");
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
    return "" + t.replace(Fs, "") + n;
  }
}
class qE {
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
    if (!this.imageProcessor) throw new y("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new y("AssetsDirectoryPath is required");
    if (!this.detector) throw new y("Detector is required");
    if (!this.compatibleSamVersion) throw new y("CompatibleSamVersion is required");
    if (!this.validationService) throw new y("ValidationService is required");
    if (!this.detectionFactory) throw new y("DetectionFactory is required");
    if (!this.candidateSelection) throw new y("CandidateSelection is required");
    if (!this.installationId) throw new y("InstallationId is required");
  }
  reset() {
    return this.imageProcessor = void 0, this.assetsDirectoryPath = void 0, this.instructionEscalation = void 0, this.compatibleSamVersion = void 0, this.detector = void 0, this.validationService = void 0, this.detectionFactory = void 0, this.candidateSelection = void 0, this.installationId = void 0, this;
  }
}
class VE {
  detectionRecord = [];
  imagesWithTimestampForDuplicateDetection = new Gr(TC);
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / _C, A = e / (9615 + -1793 * -3 + -14992), o = n.length / (7508 * 1 + 5 * 1766 + -8168 * 2), r = n.slice(o - A, o + A), g = await jI(r), a = {};
    a.imageHash = g, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(n) {
    return { data: Js(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = vs(n), r = this.validationService.validateDetectedObject(o, t);
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
class ZE {
  thresholds = null;
  getThresholds() {
    if (!this.thresholds) throw new y("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class rc extends jE {
  constructor(n, t, e, A, o, r, g, a, I) {
    super(A, o, r, g, e, n, a, I), this.detectionFactory = n, this.detector = t;
  }
  static _instance;
  detector;
  stopDetectionLoop() {
    super.stopDetectionLoop();
    var n = {};
    n.code = this.detection?.["fallbackInstruction"], oI(ce.INSTRUCTION_CHANGED, n, GC);
  }
  setAcceleration(n) {
    this.validationService.acceleration = n;
  }
}
class zE extends qE {
  build() {
    return this.validateDependencies(), new rc(this.detectionFactory, this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.candidateSelection, this.installationId, this.instructionEscalation);
  }
}
const XE = "/dot-assets/face/dot-D7UFw6PR.js";
class $E extends VE {
  className = "FaceImageProcessor";
  detector;
  validationService;
  constructor(n, t) {
    super(), this.detector = n, this.validationService = t;
  }
  optimizeImageBeforeDetection(n) {
    const t = _o(n), e = Os(n, t);
    return super.optimizeImageBeforeDetection(e);
  }
  async process({ image: n, timestamp: t }) {
    const e = this.optimizeImageBeforeDetection(n), A = {};
    A.height = n.height, A.width = n.width;
    let o = await this.detector.detect(e.data, e.resolution, A);
    o = FQ(o, _o(n));
    const r = {};
    return r.detectedObject = o, r.image = n, r.imageData = e.data, r.timestamp = t, this.processDetectedObject(r);
  }
}
class Ad {
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
class YA {
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
const ed = "isNotDim";
class td extends YA {
  #A;
  constructor(n, t) {
    super(ed, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const od = "isNotSmall";
class nd extends YA {
  #A;
  constructor(n, t) {
    super(od, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const id = "isNotBright";
class rd extends YA {
  #A;
  constructor(n, t) {
    super(id, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const ad = "isPresent";
class gd extends YA {
  #A;
  constructor(n, t) {
    super(ad, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const sd = "isSharp";
class Id extends YA {
  #A;
  constructor(n, t) {
    super(sd, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const cd = "isLeftEyePresent";
class Cd extends YA {
  #A;
  constructor(n, t) {
    super(cd, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const Bd = "isMouthPresent";
class Qd extends YA {
  #A;
  constructor(n, t) {
    super(Bd, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const Ed = "isMouthScoreNotTooLow";
class dd extends YA {
  #A;
  constructor(n, t) {
    super(Ed, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const ld = "isMouthScoreNotTooHigh";
class xd extends YA {
  #A;
  constructor(n, t) {
    super(ld, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const ud = "isNotLarge";
class fd extends YA {
  #A;
  constructor(n, t) {
    super(ud, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const hd = "isNotPitched";
class Lr extends YA {
  #A;
  constructor(n, t) {
    super(hd, Lr.calculatePitchAngleAccelerationThreshold(n)), this.#A = t;
  }
  static calculatePitchAngleAccelerationThreshold(n) {
    return UC * Math.sin(n * (Math.PI / (808 + -1 * -3061 + -3689)));
  }
  evaluate() {
    const { z: n } = this.#A || {};
    return n ? this.isValueBelowThreshold(Math.abs(n)) : !0;
  }
}
const pd = "isRightEyePresent";
class yd extends YA {
  #A;
  constructor(n, t) {
    super(pd, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const md = "isNotOutOfBounds";
class wd extends YA {
  #A;
  #e;
  constructor(n, t, e) {
    super(md, n), this.#A = t, this.#e = e;
  }
  evaluate() {
    const n = Ys(this.#e, this.threshold, _o(this.#e)), t = HI(this.#A, this.#e);
    return iB(t, n);
  }
}
class Dd {
  static getFaceValidationInstance(n, t, e, A) {
    return new Ad([new gd(n.confidence.min, t.confidence), new Cd(n.leftEye.confidence.min, t.leftEye.confidence), new yd(n.rightEye.confidence.min, t.rightEye.confidence), new nd(n.size.min, t.faceSize), new fd(n.size.max, t.faceSize), new Id(n.sharpness.min, t.sharpness), new td(n.brightness.min, t.brightness), new rd(n.brightness.max, t.brightness), new wd(n.edgeDistanceToImageShorterSideRatio.min, t, e), new Lr(n.devicePitchAngle.max, A), new Qd(n.mouth.confidence.min, t.mouth.confidence), new xd(n.mouth.status.max, t.mouth.status), new dd(n.mouth.status.min, t.mouth.status)]);
  }
}
class bd extends ZE {
  className = "FaceValidationService";
  acceleration = null;
  validateDetectedObject(n, t) {
    const e = Dd.getFaceValidationInstance(this.getThresholds(), n, t, this.acceleration);
    return e.validate(), e;
  }
}
function kd() {
  const { handleError: i } = Ae(), { acceleration: n } = jB(), { assetsDirectoryPath: t, autoCapture: { candidateSelectionDurationMillis: e } } = tI(), { thresholds: A } = PI(), [o, r] = tA();
  _(() => {
    let a;
    return (async () => {
      const C = rc.getWorkerPath(XE, t), s = {};
      s.type = "module";
      const B = new Worker(new URL(C, import.meta.url), s), E = oc(B);
      a = await new E();
      const d = new bd(), Q = new $E(a, d), x = new FE(), f = new lE(e), h = new vE(), p = new zE().setDetector(a).setValidationService(d).setImageProcessor(Q).setCompatibleSamVersion(_E).setAssetsDirectoryPath(t).setDetectionFactory(x).setCandidateSelection(f).setInstallationId(h).build();
      try {
        await p.init(), r(p);
      } catch (D) {
        if (D instanceof Error) {
          i(y.fromError(D));
          return;
        }
      }
    })(), () => {
      a && a[XI]();
    };
  }, [i, t, e]), _(() => {
    o && o.setThresholds(A);
  }, [o, A]), _(() => {
    o && o.setAcceleration(n);
  }, [n, o]);
  const g = {};
  return g.controller = o, g;
}
function Sd() {
  const { isCameraReady: i } = Ae(), { sunfish: n } = $t(), { controller: t } = kd(), { cameraResolution: e, detectionDetails: A, shouldCameraMirror: o, videoRef: r } = EE({
    controller: t
  });
  return /* @__PURE__ */ w(vA, { children: /* @__PURE__ */ w(
    TQ,
    {
      cameraResolution: e,
      detectionDetails: A,
      shouldMirror: o,
      children: /* @__PURE__ */ w(
        fC,
        {
          ref: r,
          $isImageMirror: o,
          $isVisible: n && i,
          autoPlay: !0,
          id: NC,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
function Gd({ ...i }) {
  const { handleAppStateChange: n, setIsCameraReady: t } = Ae();
  return wQ({
    onBlur: () => {
      t(!1), n(sA.LOADING);
    },
    onFocus: () => {
      t(!0), n(sA.RUNNING);
    }
  }), /* @__PURE__ */ w(WB, { configuration: i, children: /* @__PURE__ */ w(RQ, { configurationThresholds: i.qualityAttributeThresholds, children: /* @__PURE__ */ w(Sd, {}) }) });
}
function Nd({
  cameraConfiguration: i,
  children: n
}) {
  return /* @__PURE__ */ w(fQ, { cameraConfiguration: i, customEvent: ce, children: n });
}
function Rd({ initAppState: i, onError: n }) {
  const [t, e] = tA(i), [A, o] = tA(), [r, g] = tA(!1), [a, I] = tA(!1), C = To.Lower, s = jA(n);
  _(() => {
    s.current = n;
  }, [n]);
  const B = {};
  return B.redfin = C, B.appState = t, B.setAppState = e, B.error = A, B.setError = o, B.isCameraReady = r, B.setIsCameraReady = g, B.onErrorRef = s, B.firstRunningDone = a, B.setFirstRunningDone = I, B;
}
function Fd({ onError: i }) {
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
  } = Rd({
    initAppState: sA.LOADING,
    onError: i
  }), s = bE(n), B = ye(
    (d) => {
      Ja(ce.STATE_CHANGED, { appState: sA.ERROR, error: d }), C(!1), r.current(d), a(d), g(sA.ERROR);
    },
    [C, r, a, g]
  ), E = ye(
    (d) => {
      Ja(ce.STATE_CHANGED, { appState: d }), g(d);
    },
    [g]
  );
  return {
    redfin: t,
    appState: n,
    freemiumOverlayState: s,
    isCameraReady: o,
    setIsCameraReady: C,
    handleAppStateChange: E,
    handleError: B,
    error: e,
    firstRunningDone: A,
    setFirstRunningDone: I
  };
}
const Fo = {};
Fo.CAPTURE_FINISHED = "capture_finished", Fo.CAPTURE_STARTED = "capture_started", Fo.ESCALATION_TRIGGER = "escalation_trigger";
const Or = Fo, Fe = {};
Fe.PALM = "palm_auto_capture", Fe.SMILE = "smile_liveness", Fe.DOCUMENT = "document_auto_capture", Fe.MAGNIFEYE = "magnifeye_liveness", Fe.EYE_GAZE = "eye_gaze_liveness", Fe.FACE = "face_auto_capture", Fe.MULTI_RANGE = "multirange_liveness";
const vd = Fe;
class Md {
  apiKey;
  sessionId;
  distinctId;
  component;
  platform;
  versionName;
  applicationId;
  constructor() {
    this.platform = "web", this.versionName = ZC(), this.applicationId = Ms(window.location.href);
  }
  async init({ apiKey: n, component: t, customer: e, sessionId: A }) {
    !n || !A || !e || !t || (this.apiKey = n, this.sessionId = A, this.distinctId = e, this.component = t, await this.sendEvent(Or.CAPTURE_STARTED));
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
    return { platform: this.platform, dot_sdk_version_name: this.versionName, application_id: this.applicationId, component: this.component, session_id: this.sessionId, $useragent: Ps() };
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
const si = new Md();
class Wd {
  posthog = si;
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
    const A = fE(), o = {};
    o.apiKey = n, o.component = this.component, o.customer = t, o.sessionId = A, si.init(o);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    si.sendEvent(Or.ESCALATION_TRIGGER, e);
  }
  shouldReportAnalytics(n) {
    return n?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : n?.dotWeb?.features?.["realTimeAnalyticsReportingEnabled"] ?? !0;
  }
  normalizePerformanceCheckup(n) {
    return n < -419 * 2 + 9356 * -1 + -28 * -373 ? wE(n) : rr(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: yE(o || -3 * 2977 + -8896 + 17827), firstHiccup: pE(mE(r)), optCheckDetails: e?.reduce((g, a) => "" + g + a.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(a.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(a.beforeOpt) + ";", "") };
  }
}
class Ld extends Wd {
  constructor() {
    super(vd.FACE);
  }
  trackCaptureProcess({ averageFps: n, optCheck: t, captureProcessDurationInMs: e, detection: A, deviceName: o, facingMode: r, imageResolution: g, instructionSet: a, isSystemStable: I, performanceCheckup: C }) {
    if (!A) return;
    const s = this.parsePerformanceCheckup(t, C), B = this.createSegmentation({ faceSize: rr(A.faceSize), confidence: rr(A.confidence), camera: hE(o, r), imageResolution: g.width + "x" + g.height, averageFps: DE(n), durationMs: e, instructionSet: a, isSystemStable: I, ...s });
    this.posthog.sendEvent(Or.CAPTURE_FINISHED, B);
  }
}
const Od = new Ld();
let v;
const he = new Array(9966 + 9838 * -1).fill(void 0);
he.push(void 0, null, !0, !1);
function gr(i) {
  return he[i];
}
let Ce = -1 * 2203 + -4 * 1239 + -7159 * -1, Ot = null;
function vo() {
  return (Ot === null || Ot.byteLength === -1697 + 1697 * 1) && (Ot = new Uint8Array(v.memory.buffer)), Ot;
}
const Mo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Jd = typeof Mo.encodeInto == "function" ? function(i, n) {
  return Mo.encodeInto(i, n);
} : function(i, n) {
  const t = Mo.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function Vt(i, n, t) {
  if (t === void 0) {
    const g = Mo.encode(i), a = n(g.length, -3941 * 2 + -1583 * -1 + 6300) >>> 2038 * -2 + 8913 + -1 * 4837;
    return vo().subarray(a, a + g.length).set(g), Ce = g.length, a;
  }
  let e = i.length, A = n(e, -4 * -259 + 1 * -1063 + 28) >>> -2241 + -14 * 330 + 6861;
  const o = vo();
  let r = -8 * 712 + 2 * -270 + 6236;
  for (; r < e; r++) {
    const g = i.charCodeAt(r);
    if (g > 1 * -8362 + 3307 * -2 + 15103) break;
    o[A + r] = g;
  }
  if (r !== e) {
    r !== 0 && (i = i.slice(r)), A = t(A, e, e = r + i.length * (-6380 + -6 * -1457 + -2359 * 1), 3 + -7009 * -1 + -7011) >>> 1 * 9265 + -1177 + -8088;
    const g = vo().subarray(A + r, A + e), a = Jd(i, g);
    r += a.written, A = t(A, e, r, 7851 + -10 * 785) >>> 1 * 4549 + -1 * -1528 + -1 * 6077;
  }
  return Ce = r, A;
}
function ac(i) {
  return i == null;
}
let Jt = null;
function ge() {
  return (Jt === null || Jt.byteLength === 21 * -391 + 649 + -19 * -398) && (Jt = new Int32Array(v.memory.buffer)), Jt;
}
let _t = he.length;
function Ud(i) {
  i < 132 || (he[i] = _t, _t = i);
}
function gc(i) {
  const n = gr(i);
  return Ud(i), n;
}
const sr = {};
sr.ignoreBOM = !0, sr.fatal = !0;
const sc = typeof TextDecoder < "u" ? new TextDecoder("utf-8", sr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && sc.decode();
function dn(i, n) {
  return i = i >>> 299 * 5 + -6892 + -5397 * -1, sc.decode(vo().subarray(i, i + n));
}
function Ir(i) {
  _t === he.length && he.push(he.length + (1378 + 4854 * 1 + -6231));
  const n = _t;
  return _t = he[n], he[n] = i, n;
}
let Ut = null;
function Ic() {
  return (Ut === null || Ut.byteLength === -1 * -8429 + 29 + -8458) && (Ut = new Uint32Array(v.memory.buffer)), Ut;
}
function Eg(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = Ic();
  for (let A = -1 * -9535 + -2946 * -1 + -12481; A < i.length; A++)
    e[t / (-1 * 4481 + -1 * -1549 + -2936 * -1) + A] = Ir(i[A]);
  return Ce = i.length, t;
}
function dg(i, n) {
  i = i >>> 0;
  const t = Ic(), e = t.subarray(i / (-7 * -886 + -8080 + 941 * 2), i / (3686 + -356 * 1 + -3326) + n), A = [];
  for (let o = 2 * 3079 + 5744 + -11902 * 1; o < e.length; o++)
    A.push(gc(e[o]));
  return A;
}
function Yd(i, n) {
  const t = Vt(i, v.__wbindgen_malloc, v.__wbindgen_realloc), e = Ce, A = Vt(n, v.__wbindgen_malloc, v.__wbindgen_realloc), o = Ce, r = v.is_mobile_supported(t, e, A, o);
  return Jr.__wrap(r);
}
const cr = {};
cr.register = () => {
}, cr.unregister = () => {
};
const lg = typeof FinalizationRegistry > "u" ? cr : new FinalizationRegistry((i) => v.__wbg_licensevalidationresult_free(i >>> 6791 + -5 * 445 + -4566));
class Jr {
  static __wrap(n) {
    n = n >>> 698 + 1 * -5956 + -2629 * -2;
    const t = Object.create(Jr.prototype);
    return t.__wbg_ptr = n, lg.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = 751 + 751 * -1, lg.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    v.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = ac(t) ? 0 : Vt(t, v.__wbindgen_malloc, v.__wbindgen_realloc), g = Ce;
    const a = Eg(e, v.__wbindgen_malloc), I = Ce, C = Eg(A, v.__wbindgen_malloc), s = Ce, B = Vt(o, v.__wbindgen_malloc, v.__wbindgen_realloc), E = Ce, d = v.licensevalidationresult_new(n, r, g, a, I, C, s, B, E);
    return this.__wbg_ptr = d >>> -1 * -9633 + 1 * -4432 + -5201, this;
  }
  get is_valid() {
    return v.licensevalidationresult_is_valid(this.__wbg_ptr) !== -14121 + 523 * 27;
  }
  get features_json() {
    try {
      const e = v.__wbindgen_add_to_stack_pointer(-16);
      v.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = ge()[e / 4 + (1 * -2762 + -1186 + 3948)], t = ge()[e / 4 + (3 * -1614 + 6 * 920 + -677)];
      let A;
      return n !== 6165 + -1 * 6165 && (A = dn(n, t).slice(), v.__wbindgen_free(n, t * (-9e3 + -2 * -3347 + 2307), 1)), A;
    } finally {
      v.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get errors() {
    try {
      const A = v.__wbindgen_add_to_stack_pointer(-16);
      v.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = ge()[A / 4 + (3 * 645 + -6675 + 316 * 15)], t = ge()[A / (1 * 4561 + 4 * 2238 + 13509 * -1) + (1934 * 1 + 685 + -2618)], e = dg(n, t).slice();
      return v.__wbindgen_free(n, t * (-9131 + -3 * -2841 + 612), 8970 + -398 * -3 + -10160), e;
    } finally {
      v.__wbindgen_add_to_stack_pointer(-1803 + 1 * 1819);
    }
  }
  get warnings() {
    try {
      const A = v.__wbindgen_add_to_stack_pointer(-16);
      v.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = ge()[A / (-2263 + 2267 * 1) + (-5729 * 1 + -1 * 8329 + 14058)], t = ge()[A / 4 + (-2132 * 4 + -776 + 1 * 9305)], e = dg(n, t).slice();
      return v.__wbindgen_free(n, t * (-4649 + -305 * 31 + 4 * 3527), 4), e;
    } finally {
      v.__wbindgen_add_to_stack_pointer(1 * 5013 + 5 * -865 + -1 * 672);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = v.__wbindgen_add_to_stack_pointer(-16);
      v.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = ge()[o / (-4166 + 1 * -5981 + 1 * 10151) + (-3261 + -1087 * -3)], A = ge()[o / (-9372 + -6521 * -1 + -571 * -5) + 1];
      return n = e, t = A, dn(e, A);
    } finally {
      v.__wbindgen_add_to_stack_pointer(1 * -7807 + 396 * 7 + -1 * -5051), v.__wbindgen_free(n, t, 6283 + 971 * -6 + -456);
    }
  }
}
async function Td(i, n) {
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
function Pd() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = gr(t), A = typeof e == "string" ? e : void 0;
    var o = ac(A) ? -9812 + 446 * 22 : Vt(A, v.__wbindgen_malloc, v.__wbindgen_realloc), r = Ce;
    ge()[n / (1 * -6093 + -6328 + 12425) + (1 * 3143 + -2163 * -1 + -5 * 1061)] = r, ge()[n / 4 + (-10360 + 2590 * 4)] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    gc(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = dn(n, t);
    return Ir(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Ir(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return gr(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(dn(n, t));
  }, i;
}
function Hd(i, n) {
  return v = i.exports, cc.__wbindgen_wasm_module = n, Jt = null, Ut = null, Ot = null, v;
}
async function cc(i) {
  if (v !== void 0) return v;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KBgICAIDcClAMgAyABNgKQAyADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQZADahAzIANB+AFqIAJBMBC+AhogARAiIAMoAoACIQYDQCASIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAYhAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACATIQIgBUUEQCADKAL8ASEEIBEhAgsgBEUNASACIARBAWs2AgAMAQsLIANBwANqIgIgA0H4AWoiAUEwEL4CGiABIANBsAJqIgRBMBC+AhogASACEHUgA0GQA2oiBSABQTAQvgIaIAIQjwIgBCAFQTAQvgIaIAEgA0HgAmoiAkEwEL4CGiABIANBOGoQdSACIAFBMBC+AhoMAAsACyAFIARBvPvAABC5AQALIAogBEHM+8AAELkBAAsgCiAEQdz7wAAQuQEACyAKIARB7PvAABC5AQALIAoNAAsMBAtBgJfCAEErQaz7wAAQ3gEAC0GAl8IAQStBnPvAABDeAQALAAtB/PvAAEEOQYz8wAAQ3gEACyADQfgBaiIBIANB6ABqQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0GwAmogA0H4AWpBMBC+AhogA0HgAmoiBCADQQhqQTAQvgIaIAMoAuACIgtBAkYEQCADKALkAiEECwJAAkACQAJAAkAgBCgCKCIBQQVPBH8gBCgCBAUgAQsgDUEGdiICSwRAIAtBAkcNASADIAMoAuQCIAJBlP7AABDTASADKAIAIQIgAygCBCEBIANBADYC+AEgA0EANgKgAiADQfgBaiIEIAIgAiABQQN0ahBDIANBkANqIARBMBC+AhoMAgsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiIBIANBkANqEDMgA0H4AWoiAiABQTAQvgIaIAJBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogC0ECRg0EIANB4AJqEI8CDAQLIANBwANqIANBCGpBMBC+AhogAygC6AMiBEEETQR/IANByANqBSADKALEAyEEIAMoAsgDCyEBIAIgBEsNASADQQA2AvgBIANBADYCoAIgA0H4AWoiByABIAJBA3RqIAEgBEEDdGoQQyADQZADaiAHQTAQvgIaIANBwANqEI8CCyANQT9xRQ0BIAMoArgDIgRBBE0EfyADQZgDagUgAygClAMhBCADKAKYAwsgBEUNAUEIayECIARBA3QhBCAXQj+DIRhCACEWQgAgF31CP4MhFwNAIAIgBGoiASAWIAEpAwAiFiAYiIQ3AwAgFiAXhiEWIARBCGsiBA0ACwwBCyACIARBpP7AABC5AQALIANB+AFqIgEgA0GQA2pBMBC+AhogAUEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQcADaiADQfgBakEwEL4CGgsgACADQbACakEwEL4CQTBqIANBwANqQTAQvgIaIANBmAFqEI8CIANBOGoQjwIMAgsgAkEIaiEHIAQLRQ0BIAcpAwBCAVEEQCAFQQRNBH8gAUEIagUgASgCBCEFIAEoAggLIQQgA0EANgL4ASADQQA2AqACIANB+AFqIgEgBCAEIAVBA3RqEEMgA0GQA2ogAUEwEL4CGiADQQI2AugCIANCBDcC4AIgA0EANgLAAyADQQA2AugDIANBwANqIgIgA0HgAmoQMyABIAJBMBC+AhogAUEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyAAQTBqIANB+AFqQTAQvgIaIAAgA0GQA2pBMBC+AhoMAQsgBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEBIANBADYC+AEgA0EANgKgAiADQfgBaiIHIAEgASAFQQN0ahBDIANBwANqIAdBMBC+AhogBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyECIARFDQIgA0H4AWoiASADQcADaiACKQMAEE0gACABQTAQvgIiAEHYAGogAykDqAIiFkIAUjYCACAAQThqIBY3AwAgAEEANgIwCyADQfADaiQADwtBAEEAQfz6wAAQtwEAC0EAQQBBjPvAABC3AQALyC8CDX8BfiMAQbACayIEJAAgASgCACEGAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAEoAggiAiABKAIEIgNJBEADQCACIAZqLQAAIgVBCWsiB0EXS0EBIAd0QZOAgARxRXINAiABIAJBAWoiAjYCCCACIANHDQALIAMhAgsgBEGAAWogBiADIAMgAkEBaiIBIAEgA0sbELYBQbixwgAtAAAaIAQoAoQBIQIgBCgCgAEhA0EUEAoiAQ0BDBoLIAVB5QBLDQUgBUEiRg0CIAVBLUYNAyAFQdsARw0GIAEgAS0AGEEBayIFOgAYIAJBAWohAiAFQf8BcUUNASABIAI2AghBACEHIARBADYC+AEgBEIINwLwASAEQagBaiEIIARBoAFqQQFyIQlBCCEKAn8CQAJAA0AgASgCACEGIAIgA08NAQNAAkACQAJAAkACQAJAAkAgAiAGai0AACIFQQxNBEAgBUEJa0ECSQ0HDAELIAVBH0wEQCAFQQ1HDQEMBwsgBUEgRg0GIAVBLEYNASAFQd0ARg0DCyALDQEMAwsgC0UNAyABIAJBAWoiAjYCCCAEQdgAaiAGIAMgAyACIANJBH8DQCACIAZqLQAAIgVBCWsiC0EXS0EBIAt0QZOAgARxRXINBCABIAJBAWoiAjYCCCACIANHDQALIAMFIAILQQFqIgIgAiADSxsQtgFBuLHCAC0AABogBCgCXCECIAQoAlghA0EUEAoiBkUNIyAGIAM2AgwgBkEFNgIAIAYgAjYCEAwICyAEQUBrIAYgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAJEIQIgBCgCQCEDQRQQCiIGRQ0iIAYgAzYCDCAGQQc2AgAgBiACNgIQDAcLIAQoAvABIQYgBCkC9AEhD0EAIQhBBAwHCyAFQd0ARw0AIARByABqIAYgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAJMIQIgBCgCSCEDQRQQCiIGRQ0gIAYgAzYCDCAGQRU2AgAgBiACNgIQDAULIARBoAFqIAEQCSAELQCgASILQQZGBEAgBCgCpAEhBgwFCyAEQYoCaiIMIAlBAmotAAA6AAAgBEGgAmoiDSAIQQhqKQMANwMAIAQgCS8AADsBiAIgBCAIKQMANwOYAiAEKAKkASEOIAQoAvQBIAdGBH8gBEHwAWohAyMAQSBrIgIkAAJAAkAgB0EBaiIFRQ0AQQQgAygCBCIGQQF0IgcgBSAFIAdJGyIFIAVBBE0bIgdBGGwhBSAHQdaq1SpJQQN0IQoCQCAGRQRAIAJBADYCGAwBCyACQQg2AhggAiAGQRhsNgIcIAIgAygCADYCFAsgAkEIaiAKIAUgAkEUahB3IAIoAgwhBSACKAIIRQRAIAMgBzYCBCADIAU2AgAMAgsgBUGBgICAeEYNASAFRQ0AAAsQ6gEACyACQSBqJAAgBCgC8AEhCiAEKAL4AQUgBwtBGGwgCmoiAiALOgAAIAIgDjYABCACQQNqIAwtAAA6AAAgAiAELwGIAjsAASACIAQpA5gCNwAIIAJBEGogDSkDADcAAEEBIQsgBCAEKAL4AUEBaiIHNgL4ASABKAIIIQIgASgCBCEDDAILIAEgAkEBaiICNgIIIAIgA0cNAAsLIAMhAgsgBEHQAGogBiADIAMgAkEBaiICIAIgA0sbELYBQbixwgAtAAAaIAQoAlQhAiAEKAJQIQNBFBAKIgZFDRsgBiADNgIMIAZBAjYCACAGIAI2AhALIAQoAvABIQMgBwRAIAMhAgNAIAIQtAEgAkEYaiECIAdBAWsiBw0ACwsgBCgC9AEEQCADECILQQEhCEEGCyEJIAEgAS0AGEEBajoAGCABKAIAIQUCQCABKAIIIgIgASgCBCIDSQRAA0ACQAJAAkACQAJAAkAgAiAFai0AACIHQQxNBEAgB0EJa0ECSQ0GDAELIAdBH00EQCAHQQ1HDQEMBgsgB0EgRg0FIAdBLEYNASAHQd0ARg0CCyAEQSBqIAUgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAIkIQUgBCgCICEDQRQQCiICRQ0hIAJBFjYCAAwHCyABIAJBAWoiAjYCCCACIANPDQIDQCACIAVqLQAAIgdBCWsiCkEXS0EBIAp0QZOAgARxRXINAiABIAJBAWoiAjYCCCACIANHDQALIAMhAgwCCyABIAJBAWo2AgggBCAPNwOoASAEIAY2AqQBIAQgCToAoAEgCEUNCiAEQQY6AIgBIAQgBjYCjAEMGwsgB0HdAEcNACAEQThqIAUgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAI8IQUgBCgCOCEDQRQQCiICRQ0eIAJBFTYCAAwECyAEQTBqIAUgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAI0IQUgBCgCMCEDQRQQCiICRQ0dIAJBFjYCAAwDCyABIAJBAWoiAjYCCCACIANHDQALIAMhAgsgBEEoaiAFIAMgAyACQQFqIgIgAiADSxsQtgFBuLHCAC0AABogBCgCLCEFIAQoAighA0EUEAoiAkUNGiACQQI2AgALIAIgAzYCDCACIAU2AhAgBCACNgK4ASAEIA83A6gBIAQgBjYCpAEgBCAJOgCgASAIRQRAIARBBjoAiAEgBCACNgKMASAEQaABahC0AQwWCyAEQQY6AIgBIAQgBjYCjAEgAhDNAQwVCyABIAM2AgwgAUEFNgIAIAAgATYCBCAAQQY6AAAgASACNgIQDBcLIARBGGogBiADIAMgAiACIANLGxC2AUG4scIALQAAGiAEKAIcIQIgBCgCGCEDQRQQCiIBRQ0XIAEgAzYCDCABQRg2AgAgACABNgIEIABBBjoAACABIAI2AhAMFgsgAUEUakEANgIAIAEgAkEBajYCCCAEQaABaiABIAFBDGoQECAEKAKgAUECRwRAIAQoAqQBIQMgBEEQaiAEKAKoASICEOABIAQoAhQhBSAEKAIQIAMgAhC+AiEDIAQgAjYClAEgBCAFNgKQASAEIAM2AowBIARBAzoAiAEMEwsgACAEKAKkATYCBCAAQQY6AAAMFQsgASACQQFqNgIIIARBoAFqIgIgAUEAEDQgBCkDoAFCA1IEQCAEQYgBaiACEKMBDBILIAAgBCgCqAE2AgQgAEEGOgAADBQLIARBmAFqIARBsAFqKQMANwMAIARBkAFqIARBqAFqKQMANwMAIAQgBCkDoAE3A4gBDBALIAVB8wBNBEAgBUHmAEYNBCAFQe4ARw0BIAEgAkEBajYCCCABQfCJwgBBAxBxIgENAiAEQQA6AIgBDBELIAVB9ABGDQIgBUH7AEYNBAsgBUEwa0H/AXFBCkkNBCAEQQhqIAYgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAIMIQMgBCgCCCEFQRQQCiICRQ0SIAIgBTYCDCACQQo2AgAgAiADNgIQDBALIABBBjoAACAAIAE2AgQMEAsgASACQQFqNgIIIAFB84nCAEEDEHEiAUUNAyAAQQY6AAAgACABNgIEDA8LIAEgAkEBajYCCCABQfaJwgBBBBBxIgFFDQogAEEGOgAAIAAgATYCBAwOCyABIAEtABhBAWsiBToAGCACQQFqIQIgBUH/AXFFDQggASACNgIIIARBAToAxAEgBCABNgLAASAEQcgBaiEHIwBBQGoiBSQAIARBwAFqIgooAgAiCCgCACEJAkACQAJAIAgoAggiAyAIQQRqKAIAIgJJBEADQAJAAkACQAJAAkACQAJAIAMgCWotAAAiBkEMTQRAIAZBCWtBAkkNBwwBCyAGQR9NBEAgBkENRw0BDAcLIAZBIEYNBiAGQSxGDQIgBkH9AEYNAQsgCi0ABEUNAgwDC0EAIQYgB0EANgIEDAkLQSwhBiAKLQAEDQEgCCADQQFqIgM2AgggBUEoaiAJIAIgAiACIANLBH8DQCADIAlqLQAAIgZBCWsiCkEXS0EBIAp0QZOAgARxRXINBCAIIANBAWoiAzYCCCACIANHDQALIAIFIAMLQQFqIgMgAiADSRsQtgFBuLHCAC0AABogBSgCLCEDIAUoAighBkEUEAoiAkUNBiACIAY2AgwgAkEFNgIAIAcgAjYCBCACIAM2AhBBASEGDAgLQQEhBiAFIAkgAiACIANBAWoiAyACIANJGxC2AUG4scIALQAAGiAFKAIEIQMgBSgCACEIQRQQCiICRQ0FIAIgCDYCDCACQQg2AgAgByACNgIEIAIgAzYCEAwHCyAKQQA6AAQLAkAgBkEiRwRAIAZB/QBGDQFBASEGIAVBCGogCSACIAIgA0EBaiIDIAIgA0kbELYBQbixwgAtAAAaIAUoAgwhAyAFKAIIIQhBFBAKIgJFDQUgAiAINgIMIAJBETYCACAHIAI2AgQgAiADNgIQDAcLQQAhBiAIQRRqQQA2AgAgCCADQQFqNgIIIAVBNGogCCAIQQxqEBAgBSgCNEECRwRAIAUoAjghAyAFQRBqIAUoAjwiAhDgASAFKAIUIQggBSgCECADIAIQvgIhAyAHQQxqIAI2AgAgB0EIaiAINgIAIAcgAzYCBAwHCyAHIAUoAjg2AgRBASEGDAYLQQEhBiAFQRhqIAkgAiACIANBAWoiAyACIANJGxC2AUG4scIALQAAGiAFKAIcIQMgBSgCGCEIQRQQCiICRQ0DIAIgCDYCDCACQRU2AgAgByACNgIEIAIgAzYCEAwFCyAIIANBAWoiAzYCCCACIANHDQALIAIhAwtBASEGIAVBIGogCSACIAIgA0EBaiIDIAIgA0kbELYBQbixwgAtAAAaIAUoAiQhAyAFKAIgIQhBFBAKIgINAQsACyACIAg2AgwgAkEDNgIAIAcgAjYCBCACIAM2AhALIAcgBjYCACAFQUBrJAAgBCgCyAENAiAEKALMASICRQRAIARBADYCrAEgBEEANgKkASAEQQU6AKABDAcLIARB0AFqKQIAIQ8gBEEANgLgASAEQQA2AtgBIAQgDzcCjAIgBCACNgKIAiAEQZgCaiIDIARBwAFqEF4gBC0AmAJBBkYNAyAEQfABaiICIARB2AFqIARBiAJqIAMQDCAELQDwAUEGRwRAIAIQtAELIARB8AFqQQFyIQogBEGYAmpBAXIhCwNAAkAgBEGIAmohByMAQUBqIgUkACAEQcABaiIMKAIAIggoAgAhCQJAAkACQCAIKAIIIgMgCEEEaigCACICSQRAA0ACQAJAAkACQAJAAkACQCADIAlqLQAAIgZBDE0EQCAGQQlrQQJJDQcMAQsgBkEfTQRAIAZBDUcNAQwHCyAGQSBGDQYgBkEsRg0CIAZB/QBGDQELIAwtAARFDQIMAwtBACEGIAdBADYCBAwJC0EsIQYgDC0ABA0BIAggA0EBaiIDNgIIIAVBKGogCSACIAIgAiADSwR/A0AgAyAJai0AACIGQQlrIgxBF0tBASAMdEGTgIAEcUVyDQQgCCADQQFqIgM2AgggAiADRw0ACyACBSADC0EBaiIDIAIgA0kbELYBQbixwgAtAAAaIAUoAiwhAyAFKAIoIQZBFBAKIgJFDQYgAiAGNgIMIAJBBTYCACAHIAI2AgQgAiADNgIQQQEhBgwIC0EBIQYgBSAJIAIgAiADQQFqIgMgAiADSRsQtgFBuLHCAC0AABogBSgCBCEDIAUoAgAhCEEUEAoiAkUNBSACIAg2AgwgAkEINgIAIAcgAjYCBCACIAM2AhAMBwsgDEEAOgAECwJAIAZBIkcEQCAGQf0ARg0BQQEhBiAFQQhqIAkgAiACIANBAWoiAyACIANJGxC2AUG4scIALQAAGiAFKAIMIQMgBSgCCCEIQRQQCiICRQ0FIAIgCDYCDCACQRE2AgAgByACNgIEIAIgAzYCEAwHCyAIQRRqQQA2AgBBASEGIAggA0EBajYCCCAFQTRqIAggCEEMahAQIAUoAjRBAkYEQCAHIAUoAjg2AgQMBwsgBSgCOCEDIAVBEGogBSgCPCICEOABIAUoAhQhBiAFKAIQIAMgAhC+AiEDIAdBDGogAjYCACAHQQhqIAY2AgAgByADNgIEQQAhBgwGC0EBIQYgBUEYaiAJIAIgAiADQQFqIgMgAiADSRsQtgFBuLHCAC0AABogBSgCHCEDIAUoAhghCEEUEAoiAkUNAyACIAg2AgwgAkEVNgIAIAcgAjYCBCACIAM2AhAMBQsgCCADQQFqIgM2AgggAiADRw0ACyACIQMLQQEhBiAFQSBqIAkgAiACIANBAWoiAyACIANJGxC2AUG4scIALQAAGiAFKAIkIQMgBSgCICEIQRQQCiICDQELAAsgAiAINgIMIAJBAzYCACAHIAI2AgQgAiADNgIQCyAHIAY2AgAgBUFAayQAIAQoAowCIQICQAJAIAQoAogCBEAgAiEFDAELIAJFDQIgBCkCkAIhDyAEQZgCaiAEQcABahBeIAQtAJgCIgNBBkcNASAEKAKcAiEFIA+nRQ0AIAIQIgsgBCAFNgKkASAEQQY6AKABDAcLIAogCykAADcAACAKQQ9qIAtBD2opAAA3AAAgCkEIaiALQQhqKQAANwAAIAQgDzcC6AEgBCACNgLkASAEIAM6APABIARBmAJqIgIgBEHYAWogBEHkAWogBEHwAWoQDCAELQCYAkEGRg0BIAIQtAEMAQsLIARBowJqIARB4AFqKAIANgAAIAQgBCkC2AE3AJsCIARBqAFqIARBnwJqKQAANwAAIARBBToAoAEgBCAEKQCYAjcAoQEMBgsgBEGgAWoiAiABQQEQNCAEKQOgAUIDUgRAIARBiAFqIAIQowEMCgsgACAEKAKoATYCBCAAQQY6AAAMDAsgBEGBAjsBiAEMCQsgBCAEKALMATYCpAEgBEEGOgCgAQwCCyAEIAQoApwCNgKkASAEQQY6AKABIA+nRQ0AIAIQIgsgBEHYAWoQsgELQQEMAQtBAAshByABIAEtABhBAWo6ABggASgCACEGAkAgASgCCCICIAEoAgQiA0kEQANAAkACQAJAAkAgAiAGai0AACIFQQxNBEAgBUEJa0ECSQ0EDAELIAVBH00EQCAFQQ1HDQEMBAsgBUEgRg0DIAVBLEYNASAFQf0ARg0CCyAEQegAaiAGIAMgAyACQQFqIgIgAiADSxsQtgFBuLHCAC0AABogBCgCbCEFIAQoAmghA0EUEAoiAkUNDCACQRY2AgAMBQsgBEH4AGogBiADIAMgAkEBaiICIAIgA0sbELYBQbixwgAtAAAaIAQoAnwhBSAEKAJ4IQNBFBAKIgJFDQsgAkEVNgIADAQLIAEgAkEBajYCCCAHBEAgBCAEKAKkATYCjAEgBEEGOgCIAQwHCyAEQZgBaiAEQbABaikDADcDACAEQZABaiAEQagBaikDADcDACAEIAQpA6ABNwOIAQwGCyABIAJBAWoiAjYCCCACIANHDQALIAMhAgsgBEHwAGogBiADIAMgAkEBaiICIAIgA0sbELYBQbixwgAtAAAaIAQoAnQhBSAEKAJwIQNBFBAKIgJFDQcgAkEDNgIACyACIAM2AgwgAiAFNgIQIAQgAjYCuAEgB0UEQCAEQQY6AIgBIAQgAjYCjAEgBEGgAWoQtAEMAwsgBCAEKAKkATYCjAEgBEEGOgCIASACEM0BDAILIARB4ABqIAYgAyADIAIgAiADSxsQtgFBuLHCAC0AABogBCgCZCECIAQoAmAhA0EUEAoiAUUNBSABIAM2AgwgAUEYNgIAIAAgATYCBCAAQQY6AAAgASACNgIQDAQLIARBATsBiAEMAQsgBC0AiAFBBkcNACAEKAKMASECDAELIAAgBCkDiAE3AwAgAEEQaiAEQZgBaikDADcDACAAQQhqIARBkAFqKQMANwMADAELIwBBEGsiAyQAAkAgAigCDARAIAIhAQwBCyADQQhqIAJBCGooAgA2AgAgAyACKQIANwMAIAEgAxC/ASEBIAIQIgsgA0EQaiQAIABBBjoAACAAIAE2AgQLIARBsAJqJAAPCwALpB8CCH8BfgJAAkACQAJAAkAgAEH1AU8EQCAAQc3/e08NBSAAQQtqIgBBeHEhBEHwsMIAKAIAIghFDQRBACAEayEBAn9BACAEQYACSQ0AGkEfIARB////B0sNABogBEEGIABBCHZnIgBrdkEBcSAAQQF0a0E+agsiB0ECdEHUrcIAaigCACICRQRAQQAhAAwCC0EAIQAgBEEZIAdBAXZrQR9xQQAgB0EfRxt0IQYDQAJAIAIoAgRBeHEiBSAESQ0AIAUgBGsiBSABTw0AIAIhAyAFIgENAEEAIQEgAiEADAQLIAJBFGooAgAiBSAAIAUgAiAGQR12QQRxakEQaigCACICRxsgACAFGyEAIAZBAXQhBiACDQALDAELQeywwgAoAgAiAUEQIABBC2pBeHEgAEELSRsiBEEDdiICdiIAQQNxBEACQCAAQX9zQQFxIAJqIgBBA3QiBEHsrsIAaigCACICQQhqIgUoAgAiAyAEQeSuwgBqIgRHBEAgAyAENgIMIAQgAzYCCAwBC0HssMIAIAFBfiAAd3E2AgALIAIgAEEDdCIAQQNyNgIEIAAgAmoiACAAKAIEQQFyNgIEIAUPCyAEQfSwwgAoAgBNDQMCQAJAAkACQAJAAkAgAEUEQEHwsMIAKAIAIgBFDQogAGhBAnRB1K3CAGooAgAiBigCBEF4cSAEayECAkAgBigCECIARQRAIAZBFGooAgAiAEUNAQsDQCAAKAIEQXhxIARrIgUgAkkhAyAFIAIgAxshAiAAIAYgAxshBiAAKAIQIgEEfyABBSAAQRRqKAIACyIADQALCyAGEF8gAkEQSQ0CIAYgBEEDcjYCBCAEIAZqIgQgAkEBcjYCBCACIARqIAI2AgBB9LDCACgCACIDDQEMBQsCQEECIAJBH3EiAnQiA0EAIANrciAAIAJ0cWgiAkEDdCIFQeyuwgBqKAIAIgBBCGoiBigCACIDIAVB5K7CAGoiBUcEQCADIAU2AgwgBSADNgIIDAELQeywwgAgAUF+IAJ3cTYCAAsgACAEQQNyNgIEIAAgBGoiBSACQQN0IgEgBGsiAkEBcjYCBCAAIAFqIAI2AgBB9LDCACgCACIDDQIMAwsgA0F4cUHkrsIAaiEAQfywwgAoAgAhAQJ/QeywwgAoAgAiBUEBIANBA3Z0IgNxRQRAQeywwgAgAyAFcjYCACAADAELIAAoAggLIQMgACABNgIIIAMgATYCDCABIAA2AgwgASADNgIIDAMLIAYgAiAEaiIAQQNyNgIEIAAgBmoiACAAKAIEQQFyNgIEDAMLIANBeHFB5K7CAGohAEH8sMIAKAIAIQECf0HssMIAKAIAIgRBASADQQN2dCIDcUUEQEHssMIAIAMgBHI2AgAgAAwBCyAAKAIICyEEIAAgATYCCCAEIAE2AgwgASAANgIMIAEgBDYCCAtB/LDCACAFNgIAQfSwwgAgAjYCACAGDwtB/LDCACAENgIAQfSwwgAgAjYCAAsgBkEIag8LIAAgA3JFBEBBACEDIAhBAiAHdCIAQQAgAGtycSIARQ0DIABoQQJ0QdStwgBqKAIAIQALIABFDQELA0AgACADIAAoAgRBeHEiBSAEayIGIAFJIgcbIQggACgCECICRQRAIABBFGooAgAhAgsgAyAIIAQgBUsiABshAyABIAYgASAHGyAAGyEBIAIiAA0ACwsgA0UNACAEQfSwwgAoAgAiAE0gASAAIARrT3ENACADEF8CQCABQRBPBEAgAyAEQQNyNgIEIAMgBGoiAiABQQFyNgIEIAEgAmogATYCACABQYACTwRAIAIgARBgDAILIAFBeHFB5K7CAGohAAJ/QeywwgAoAgAiBEEBIAFBA3Z0IgFxRQRAQeywwgAgASAEcjYCACAADAELIAAoAggLIQEgACACNgIIIAEgAjYCDCACIAA2AgwgAiABNgIIDAELIAMgASAEaiIAQQNyNgIEIAAgA2oiACAAKAIEQQFyNgIECyADQQhqDwsCQAJAAkACQAJAAkACQCAEQfSwwgAoAgAiAUsEQCAEQfiwwgAoAgAiAE8EQEEAIQEgBEGvgARqIgBBEHZAACICQX9GIgUNCSACQRB0IgNFDQlBhLHCAEEAIABBgIB8cSAFGyIGQYSxwgAoAgBqIgA2AgBBiLHCAEGIscIAKAIAIgEgACAAIAFJGzYCAAJAAkBBgLHCACgCACIFBEBB1K7CACEAA0AgACgCACIBIAAoAgQiAmogA0YNAiAAKAIIIgANAAsMAgtBkLHCACgCACIAQQAgACADTRtFBEBBkLHCACADNgIAC0GUscIAQf8fNgIAQdiuwgAgBjYCAEHUrsIAIAM2AgBB8K7CAEHkrsIANgIAQfiuwgBB7K7CADYCAEHsrsIAQeSuwgA2AgBBgK/CAEH0rsIANgIAQfSuwgBB7K7CADYCAEGIr8IAQfyuwgA2AgBB/K7CAEH0rsIANgIAQZCvwgBBhK/CADYCAEGEr8IAQfyuwgA2AgBBmK/CAEGMr8IANgIAQYyvwgBBhK/CADYCAEGgr8IAQZSvwgA2AgBBlK/CAEGMr8IANgIAQaivwgBBnK/CADYCAEGcr8IAQZSvwgA2AgBB4K7CAEEANgIAQbCvwgBBpK/CADYCAEGkr8IAQZyvwgA2AgBBrK/CAEGkr8IANgIAQbivwgBBrK/CADYCAEG0r8IAQayvwgA2AgBBwK/CAEG0r8IANgIAQbyvwgBBtK/CADYCAEHIr8IAQbyvwgA2AgBBxK/CAEG8r8IANgIAQdCvwgBBxK/CADYCAEHMr8IAQcSvwgA2AgBB2K/CAEHMr8IANgIAQdSvwgBBzK/CADYCAEHgr8IAQdSvwgA2AgBB3K/CAEHUr8IANgIAQeivwgBB3K/CADYCAEHkr8IAQdyvwgA2AgBB8K/CAEHkr8IANgIAQfivwgBB7K/CADYCAEHsr8IAQeSvwgA2AgBBgLDCAEH0r8IANgIAQfSvwgBB7K/CADYCAEGIsMIAQfyvwgA2AgBB/K/CAEH0r8IANgIAQZCwwgBBhLDCADYCAEGEsMIAQfyvwgA2AgBBmLDCAEGMsMIANgIAQYywwgBBhLDCADYCAEGgsMIAQZSwwgA2AgBBlLDCAEGMsMIANgIAQaiwwgBBnLDCADYCAEGcsMIAQZSwwgA2AgBBsLDCAEGksMIANgIAQaSwwgBBnLDCADYCAEG4sMIAQaywwgA2AgBBrLDCAEGksMIANgIAQcCwwgBBtLDCADYCAEG0sMIAQaywwgA2AgBByLDCAEG8sMIANgIAQbywwgBBtLDCADYCAEHQsMIAQcSwwgA2AgBBxLDCAEG8sMIANgIAQdiwwgBBzLDCADYCAEHMsMIAQcSwwgA2AgBB4LDCAEHUsMIANgIAQdSwwgBBzLDCADYCAEHosMIAQdywwgA2AgBB3LDCAEHUsMIANgIAQYCxwgAgAzYCAEHksMIAQdywwgA2AgBB+LDCACAGQShrIgA2AgAgAyAAQQFyNgIEIAAgA2pBKDYCBEGMscIAQYCAgAE2AgAMCgsgACgCDCABIAVLcg0AIAMgBUsNAwtBkLHCAEGQscIAKAIAIgAgAyAAIANJGzYCACADIAZqIQJB1K7CACEAAkACQANAIAIgACgCAEcEQCAAKAIIIgANAQwCCwsgACgCDEUNAQtB1K7CACEAA0ACQCAFIAAoAgAiAU8EQCABIAAoAgRqIgIgBUsNAQsgACgCCCEADAELC0GAscIAIAM2AgBB+LDCACAGQShrIgA2AgAgAyAAQQFyNgIEIAAgA2pBKDYCBEGMscIAQYCAgAE2AgAgBSACQSBrQXhxQQhrIgAgACAFQRBqSRsiAUEbNgIEQdSuwgApAgAhCSABQRBqQdyuwgApAgA3AgAgASAJNwIIQdiuwgAgBjYCAEHUrsIAIAM2AgBB3K7CACABQQhqNgIAQeCuwgBBADYCACABQRxqIQADQCAAQQc2AgAgAEEEaiIAIAJJDQALIAEgBUYNCSABIAEoAgRBfnE2AgQgBSABIAVrIgBBAXI2AgQgASAANgIAIABBgAJPBEAgBSAAEGAMCgsgAEF4cUHkrsIAaiEBAn9B7LDCACgCACICQQEgAEEDdnQiAHFFBEBB7LDCACAAIAJyNgIAIAEMAQsgASgCCAshACABIAU2AgggACAFNgIMIAUgATYCDCAFIAA2AggMCQsgACADNgIAIAAgACgCBCAGajYCBCADIARBA3I2AgQgAiADIARqIgVrIQEgAkGAscIAKAIARg0DIAJB/LDCACgCAEYNBCACKAIEIgRBA3FBAUYEQAJAIARBeHEiAEGAAk8EQCACEF8MAQsgAkEMaigCACIGIAJBCGooAgAiB0cEQCAHIAY2AgwgBiAHNgIIDAELQeywwgBB7LDCACgCAEF+IARBA3Z3cTYCAAsgACACaiICKAIEIQQgACABaiEBCyACIARBfnE2AgQgBSABQQFyNgIEIAEgBWogATYCACABQYACTwRAIAUgARBgDAgLIAFBeHFB5K7CAGohAAJ/QeywwgAoAgAiAkEBIAFBA3Z0IgFxRQRAQeywwgAgASACcjYCACAADAELIAAoAggLIQEgACAFNgIIIAEgBTYCDCAFIAA2AgwgBSABNgIIDAcLQfiwwgAgACAEayIBNgIAQYCxwgBBgLHCACgCACIAIARqIgI2AgAgAiABQQFyNgIEIAAgBEEDcjYCBCAAQQhqIQEMCAtB/LDCACgCACEAIAEgBGsiAkEQSQ0DQfSwwgAgAjYCAEH8sMIAIAAgBGoiAzYCACADIAJBAXI2AgQgACABaiACNgIAIAAgBEEDcjYCBAwECyAAIAIgBmo2AgRBgLHCAEGAscIAKAIAIgBBD2pBeHEiAUEIayICNgIAQfiwwgBB+LDCACgCACAGaiIDIAAgAWtqQQhqIgE2AgAgAiABQQFyNgIEIAAgA2pBKDYCBEGMscIAQYCAgAE2AgAMBQtBgLHCACAFNgIAQfiwwgBB+LDCACgCACABaiIANgIAIAUgAEEBcjYCBAwDC0H8sMIAIAU2AgBB9LDCAEH0sMIAKAIAIAFqIgA2AgAgBSAAQQFyNgIEIAAgBWogADYCAAwCC0H8sMIAQQA2AgBB9LDCAEEANgIAIAAgAUEDcjYCBCAAIAFqIgEgASgCBEEBcjYCBAsgAEEIag8LIANBCGoPC0EAIQFB+LDCACgCACIAIARNDQBB+LDCACAAIARrIgE2AgBBgLHCAEGAscIAKAIAIgAgBGoiAjYCACACIAFBAXI2AgQgACAEQQNyNgIEIABBCGoPCyABC9AWAhx/AX4jAEHwAGsiAyQAIANBAEHAABC7AiEDIAEgAkEGdGohHiAAKAIAIRkgACgCBCEaIAAoAgghGyAAKAIMIRwgACgCECEdA0BBACECA0AgAiADaiABIAJqKAAAIgRBGHQgBEGA/gNxQQh0ciAEQQh2QYD+A3EgBEEYdnJyNgIAIAJBBGoiAkHAAEcNAAsgAygCMCEJIAMoAjQhAiADKAI4IQQgAygCPCEQIAMoAiAhBSADKAIkIQogAygCKCELIAMoAiwhFSADKAIQIQwgAygCFCEWIAMoAhghDSADKAIcIREgAygCACEIIAMoAgQhFyADKAIIIQ4gAygCDCEPIAMgGjYCVCADIBs2AlggAyAcNgJcIAMgGTYCUCADIA82AmwgAyAONgJoIAMgFzYCZCADIAggHWo2AmAgA0FAayISIANB0ABqIhMgA0HgAGoiFEEAECQgAygCQCEGIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBjYCUCADIBE2AmwgAyANNgJoIAMgFjYCZCADIAwgGUEed2o2AmAgEiATIBRBABAkIAMoAkAhByADKQJEIR8gAyADKAJMNgJcIAMgHzcCVCADIAc2AlAgAyAVNgJsIAMgCzYCaCADIAo2AmQgAyAFIAZBHndqNgJgIBIgEyAUQQAQJCADKAJAIQYgAykCRCEfIAMgAygCTDYCXCADIB83AlQgAyAGNgJQIAMgEDYCbCADIAQ2AmggAyACNgJkIAMgCSAHQR53ajYCYCASIBMgFEEAECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAIgBSAIIA5zc3NBAXciCCAGQR53ajYCYCADIBUgDyAWc3MgCHNBAXciBjYCbCADIBAgCyAMIA5zc3NBAXciDjYCaCADIAQgCiAPIBdzc3NBAXciDzYCZCASIBMgFEEAECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAkgDCANc3MgD3NBAXciDCAHQR53ajYCYCADIAQgBSANc3MgBnNBAXciDTYCaCADIBAgCiARc3MgDHNBAXciFzYCbCADIAIgESAWc3MgDnNBAXciFjYCZCASIBMgFEEBECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAUgC3MgCHMgFnNBAXciBSAYQR53ajYCYCADIAkgC3MgDnMgF3NBAXciCzYCaCADIAIgFXMgBnMgBXNBAXciETYCbCADIAogFXMgD3MgDXNBAXciCjYCZCASIBMgFEEBECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAQgCXMgDHMgCnNBAXciCSAHQR53ajYCYCADIAQgCHMgDXMgEXNBAXciBDYCaCADIA8gEHMgF3MgCXNBAXciFTYCbCADIAIgEHMgFnMgC3NBAXciAjYCZCASIBMgFEEBECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAggDnMgBXMgAnNBAXciECAYQR53ajYCYCADIAYgFnMgEXMgEHNBAXciCDYCbCADIAwgDnMgC3MgFXNBAXciDjYCaCADIAYgD3MgCnMgBHNBAXciBjYCZCASIBMgFEEBECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAwgDXMgCXMgBnNBAXciDyAHQR53ajYCYCADIAUgDXMgBHMgCHNBAXciDDYCaCADIAogF3MgFXMgD3NBAXciDTYCbCADIBYgF3MgAnMgDnNBAXciFzYCZCASIBMgFEEBECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAUgC3MgEHMgF3NBAXciBSAYQR53ajYCYCADIAkgC3MgDnMgDXNBAXciCzYCaCADIAIgEXMgCHMgBXNBAXciFjYCbCADIAogEXMgBnMgDHNBAXciCjYCZCASIBMgFEECECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAQgCXMgD3MgCnNBAXciCSAHQR53ajYCYCADIAQgEHMgDHMgFnNBAXciBDYCaCADIAYgFXMgDXMgCXNBAXciETYCbCADIAIgFXMgF3MgC3NBAXciAjYCZCASIBMgFEECECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIA4gEHMgBXMgAnNBAXciECAYQR53ajYCYCADIAggF3MgFnMgEHNBAXciFTYCbCADIA4gD3MgC3MgEXNBAXciDjYCaCADIAYgCHMgCnMgBHNBAXciCDYCZCASIBMgFEECECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAwgD3MgCXMgCHNBAXciBiAHQR53ajYCYCADIAUgDHMgBHMgFXNBAXciDzYCaCADIAogDXMgEXMgBnNBAXciDDYCbCADIA0gF3MgAnMgDnNBAXciDTYCZCASIBMgFEECECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAUgC3MgEHMgDXNBAXciBSAYQR53ajYCYCADIAkgC3MgDnMgDHNBAXciCzYCaCADIAIgFnMgFXMgBXNBAXciFzYCbCADIAogFnMgCHMgD3NBAXciCjYCZCASIBMgFEECECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAQgCXMgBnMgCnNBAXciCSAHQR53ajYCYCADIAQgEHMgD3MgF3NBAXciBDYCaCADIAggEXMgDHMgCXNBAXciFjYCbCADIAIgEXMgDXMgC3NBAXciAjYCZCASIBMgFEEDECQgAygCQCERIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgETYCUCADIA4gEHMgBXMgAnNBAXciECAYQR53ajYCYCADIA0gFXMgF3MgEHNBAXciBzYCbCADIAYgDnMgC3MgFnNBAXciDjYCaCADIAggFXMgCnMgBHNBAXciFTYCZCASIBMgFEEDECQgAygCQCEIIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgCDYCUCADIAYgD3MgCXMgFXNBAXciBiARQR53ajYCYCADIAUgD3MgBHMgB3NBAXciDzYCaCADIAogDHMgFnMgBnNBAXciETYCbCADIAwgDXMgAnMgDnNBAXciDDYCZCASIBMgFEEDECQgAygCQCENIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgDTYCUCADIAUgC3MgEHMgDHNBAXciBSAIQR53ajYCYCADIAkgC3MgDnMgEXNBAXciCzYCaCADIAIgF3MgB3MgBXNBAXciCDYCbCADIAogF3MgFXMgD3NBAXciCjYCZCASIBMgFEEDECQgAygCQCEFIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBTYCUCADIAQgCXMgBnMgCnNBAXciCSAVIBZzIBFzc0EBdzYCbCADIAQgEHMgD3MgCHNBAXc2AmggAyACIBZzIAxzIAtzQQF3NgJkIAMgDUEedyAJajYCYCASIBMgFEEDECQgBUEedyAdaiEdIAMoAkwgHGohHCADKAJIIBtqIRsgAygCRCAaaiEaIAMoAkAgGWohGSABQUBrIgEgHkcNAAsgACAdNgIQIAAgHDYCDCAAIBs2AgggACAaNgIEIAAgGTYCACADQfAAaiQAC9cTAhR/AX4jAEHAAWsiBCQAAkACQAJAAkACQAJAAkACQAJAAkAgASgCACIHBEAgAigCCCEJIAIoAgAhDCABKAIEIQgCQANAIAdBjAJqIQUgBy8BkgMiCkEMbCELQX8hBgJAAkADQCALRQRAIAohBgwCCyAFKAIIIQ0gBSgCACEOIAZBAWohBiALQQxrIQsgBUEMaiEFQX8gDCAOIAkgDSAJIA1JGxC8AiIOIAkgDWsgDhsiDUEARyANQQBIGyINQQFGDQALIA1B/wFxRQ0BCyAIRQ0CIAhBAWshCCAHIAZBAnRqQZgDaigCACEHDAELCyACKAIERQ0JIAwQIgwJCyACKQIEIhinIQIgDA0BIAEhBiACIQcMCAsgAikCBCIYpyEHIAIoAgAiBkUEQCABIQYMCAtBuLHCAC0AABpBmAMQCiICRQ0CIAJBATsBkgMgAkEANgKIAiACIAY2AowCIAJBkAJqIAetIBhCgICAgHCDhDcCACACIAMpAwA3AwAgAkEIaiADQQhqKQMANwMAIAJBEGogA0EQaikDADcDACABQoCAgIAQNwIEIAEgAjYCAAwBCyACrSAYQoCAgIBwg4QhGAJAAkACQCAHLwGSAyIFQQtPBEBBASEIQQQhBQJAIAZBBUkNAAJAAkAgBiIFQQVrDgICAQALIAZBB2shBkEAIQhBBiEFDAELQQAhCEEFIQVBACEGC0G4scIALQAAGkGYAxAKIgpFDQUgCkEAOwGSAyAKQQA2AogCIARBkAFqIg8gB0GMAmoiDSAFQQxsaiILQQhqKAIANgIAIARBMGoiECAHIAVBGGxqIglBCWopAAA3AwAgBEE3aiIRIAlBEGopAAA3AAAgCiAHLwGSAyIOIAVBf3NqIgI7AZIDIAQgCykCADcDiAEgBCAJKQABNwMoIAJBDE8NBiAOIAVBAWoiC2sgAkcNDCAJLQAAIQkgCkGMAmogDSALQQxsaiACQQxsEL4CGiAKIAcgC0EYbGogAkEYbBC+AiECIAcgBTsBkgMgBEEIaiAPKAIANgIAIARB6ABqIBApAwA3AwAgBEHvAGogESkAADcAACAEIAQpA4gBNwMAIAQgBCkDKDcDYCAHIAIgCBsiBUGMAmoiDiAGQQxsaiEIIAZBAWoiCyAFLwGSAyINTQ0BIAggGDcCBCAIIAw2AgAMAgsgB0GMAmoiCCAGQQxsaiECAkAgBSAGQQFqIgpJBEAgAiAYNwIEIAIgDDYCAAwBCyAIIApBDGxqIAIgBSAGayIIQQxsEL0CIAIgGDcCBCACIAw2AgAgByAKQRhsaiAHIAZBGGxqIAhBGGwQvQILIAcgBkEYbGoiAkEQaiADQRBqKQMANwMAIAIgAykDADcDACACQQhqIANBCGopAwA3AwAgByAFQQFqOwGSAwwCCyAOIAtBDGxqIAggDSAGayIOQQxsEL0CIAggGDcCBCAIIAw2AgAgBSALQRhsaiAFIAZBGGxqIA5BGGwQvQILIAUgBkEYbGoiBkEQaiADQRBqKQMANwMAIAYgAykDADcDACAEQbgBaiIMIARBCGopAwA3AwAgBEGgAWoiCCAEQegAaiILKQMANwMAIARBpwFqIg4gBEHvAGopAAA3AAAgBkEIaiADQQhqKQMANwMAIAUgDUEBajsBkgMgBCAEKQMANwOwASAEIAQpA2A3A5gBIAlBBkYNACALIAwpAwA3AwAgBEH5AGogCCkDADcAACAEQYABaiAOKQAANwAAIAQgBCkDsAE3A2AgBCAJOgBwIAQgBCkDmAE3AHECQAJAIAcoAogCIgVFBEBBACEMDAELIARB8QBqIQsgBEHwAGohEyAEQTdqIQhBACEMA0AgBy8BkAMhAyAFIgcvAZIDIhRBC0kNAkEBIQ1BBCEFAkAgA0EFSQ0AAkACQCADIgVBBWsOAgIBAAsgA0EHayEDQQAhDUEGIQUMAQtBACENQQUhBUEAIQMLQbixwgAtAAAaQcgDEAoiCkUNBSAKQQA7AZIDIApBADYCiAIgBEGQAWoiDiAHQYwCaiIQIAVBDGxqIg9BCGooAgA2AgAgBEEwaiISIAcgBUEYbGoiCUEJaikAADcDACAIIAlBEGopAAA3AAAgCiAHLwGSAyIRIAVBf3NqIgY7AZIDIAQgDykCADcDiAEgBCAJKQABNwMoIAZBDE8NByARIAVBAWoiD2sgBkcNDCAJLQAAIREgCkGMAmogECAPQQxsaiAGQQxsEL4CGiAKIAcgD0EYbGogBkEYbBC+AiEGIAcgBTsBkgMgBEG4AWoiFSAOKAIANgIAIARBoAFqIhYgEikDADcDACAEQacBaiIXIAgpAAA3AAAgBCAEKQOIATcDsAEgBCAEKQMoNwOYASAGLwGSAyIJQQFqIRAgCUEMTw0IIBQgBWsiBSAQRw0MIAxBAWohDCAGQZgDaiAHIA9BAnRqQZgDaiAFQQJ0EL4CIQ9BACEFA0ACQCAPIAVBAnRqKAIAIhAgBTsBkAMgECAGNgKIAiAFIAlPDQAgBSAFIAlJaiIFIAlNDQELCyAOIBUpAwA3AwAgEiAWKQMANwMAIAggFykAADcAACAEIAQpA7ABNwOIASAEIAQpA5gBNwMoIAcgBiANGyADIARB4ABqIBMgAhBKIARBIGoiAiAOKQMANwMAIARBCGoiAyASKQMANwMAIARBD2oiBSAIKQAANwAAIAQgBCkDiAE3AxggBCAEKQMoNwMAIBFBBkYNAyALIAQpAwA3AAAgBEHoAGogAikDADcDACALQQhqIAMpAwA3AAAgC0EPaiAFKQAANwAAIAQgBCkDGDcDYCAEIBE6AHAgBiECIAcoAogCIgUNAAsLIARBKGoiBiAEQeAAakEoEL4CGiAEIAw2AlwgBCAKNgJYIAQgDDYCVCAEIAc2AlAgASgCACIDRQ0HQbixwgAtAAAaIAEoAgQhB0HIAxAKIgJFDQMgAiADNgKYAyACQQA7AZIDIAJBADYCiAIgASACNgIAIANBADsBkAMgAyACNgKIAiABIAdBAWoiAzYCBCACIAMgBiAEQThqIAogDBCLAQwBCyAHIAMgBEHgAGogEyACEEoLIAEgASgCCEEBajYCCAsgAEEGOgAADAYLAAsgAkELQeTpwQAQuAEACyAGQQtB5OnBABC4AQALIBBBDEH06cEAELgBAAtBgJfCAEErQcDnwQAQ3gEACyAAIAcgBkEYbGoiASkDADcDACABIAMpAwA3AwAgAEEQaiABQRBqIgIpAwA3AwAgAEEIaiABQQhqIgApAwA3AwAgACADQQhqKQMANwMAIAIgA0EQaikDADcDAAsgBEHAAWokAA8LQazpwQBBKEHU6cEAEN4BAAujEQEZfyMAQUBqIhkkACACBEAgASACQQZ0aiEaIAAoAgwhByAAKAIIIQYgACgCBCEEIAAoAgAhCANAQQAhAiAZQQBBwAAQuwIhAyABQUBrA0AgAiADaiABIAJqKAAANgIAIAJBBGoiAkHAAEcNAAsgBCADKAIIIgkgAygCGCIKIAMoAigiCyADKAI4IgwgAygCPCINIAMoAgwiDiADKAIcIg8gAygCLCIQIA8gDiANIBAgDCALIAogBiAJaiAHIAMoAgQiEWogAygCACISIAggBCAGcWogByAEQX9zcWpqQYi31cQCa0EHdyAEaiIBIARxaiAGIAFBf3NxakGqkeG5AWtBDHcgAWoiAiABcWogBCACQX9zcWpB2+GBoQJqQRF3IAJqIgVqIAMoAhQiEyACaiABIAMoAhAiFGogBCAOaiACIAVxaiABIAVBf3NxakGS4ojyA2tBFncgBWoiASAFcWogAiABQX9zcWpB0eCP1ABrQQd3IAFqIgIgAXFqIAUgAkF/c3FqQaqMn7wEakEMdyACaiIEIAJxaiABIARBf3NxakHt876+BWtBEXcgBGoiBWogAygCJCIVIARqIAMoAiAiFiACaiABIA9qIAQgBXFqIAIgBUF/c3FqQf/V5RVrQRZ3IAVqIgEgBXFqIAQgAUF/c3FqQdixgswGakEHdyABaiICIAFxaiAFIAJBf3NxakHRkOylB2tBDHcgAmoiBCACcWogASAEQX9zcWpBz8gCa0ERdyAEaiIFaiADKAI0IhcgBGogAygCMCIYIAJqIAEgEGogBCAFcWogAiAFQX9zcWpBwtCMtQdrQRZ3IAVqIgEgBXFqIAQgAUF/c3FqQaKiwNwGakEHdyABaiICIAFxaiAFIAJBf3NxakHtnJ4Ta0EMdyACaiIDIAJxaiABIANBf3MiBXFqQfL4mswFa0ERdyADaiIEaiACIBFqIAQgBXFqIAEgDWogAyAEcWogAiAEQX9zIgVxakGhkNDNBGpBFncgBGoiASADcWpBnrWHzwBrQQV3IAFqIgIgAUF/c3FqIAMgCmogASAFcWogAiAEcWpBwJn9/QNrQQl3IAJqIgMgAXFqQdG0+bICakEOdyADaiIEaiACIBNqIAQgA0F/c3FqIAEgEmogAyACQX9zcWogAiAEcWpB1vCksgFrQRR3IARqIgEgA3FqQaPfw84Ca0EFdyABaiICIAFBf3NxaiADIAtqIAEgBEF/c3FqIAIgBHFqQdOokBJqQQl3IAJqIgMgAXFqQf+y+LoCa0EOdyADaiIEaiACIBVqIAQgA0F/c3FqIAEgFGogAyACQX9zcWogAiAEcWpBuIiwwQFrQRR3IARqIgEgA3FqQeabh48CakEFdyABaiICIAFBf3NxaiADIAxqIAEgBEF/c3FqIAIgBHFqQarwo+YDa0EJdyACaiIDIAFxakH55KvZAGtBDncgA2oiBGogAiAXaiAEIANBf3NxaiABIBZqIAMgAkF/c3FqIAIgBHFqQe2p6KoEakEUdyAEaiIBIANxakH7rfCwBWtBBXcgAWoiAiABQX9zcWogAyAJaiABIARBf3NxaiACIARxakGIuMEYa0EJdyACaiIDIAFxakHZhby7BmpBDncgA2oiBGogAyAWaiACIBNqIAEgGGogAyACQX9zcWogAiAEcWpB9ubWlgdrQRR3IARqIgIgBHMiASADc2pBvo0Xa0EEdyACaiIDIAFzakH/krjEB2tBC3cgA2oiBCADcyIFIAJzakGiwvXsBmpBEHcgBGoiAWogAyARaiACIAxqIAEgBXNqQfSP6xBrQRd3IAFqIgIgASAEc3NqQbyrhNoFa0EEdyACaiIDIAJzIAQgFGogASACcyADc2pBqZ/73gRqQQt3IANqIgFzakGg6ZLKAGtBEHcgAWoiBGogAyAXaiACIAtqIAEgA3MgBHNqQZCHgYoEa0EXdyAEaiICIAEgBHNzakHG/e3EAmpBBHcgAmoiAyACcyABIBJqIAIgBHMgA3NqQYaw+6oBa0ELdyADaiIBc2pB+57D2AJrQRB3IAFqIgRqIAMgFWogAiAKaiABIANzIARzakGFuqAkakEXdyAEaiICIAEgBHNzakHH36yxAmtBBHcgAmoiAyACcyABIBhqIAIgBHMgA3NqQZvMkckBa0ELdyADaiIBc2pB+PmJ/QFqQRB3IAFqIgRqIAEgD2ogAyASaiACIAlqIAEgA3MgBHNqQZvTztoDa0EXdyAEaiICIAFBf3NyIARzakG8u9veAGtBBncgAmoiASAEQX9zciACc2pBl/+rmQRqQQp3IAFqIgMgAkF/c3IgAXNqQdm4r6MFa0EPdyADaiIEaiADIA5qIAEgGGogAiATaiAEIAFBf3NyIANzakHHv7Eba0EVdyAEaiIBIANBf3NyIARzakHDs+2qBmpBBncgAWoiAiAEQX9zciABc2pB7ubMhwdrQQp3IAJqIgMgAUF/c3IgAnNqQYOXwABrQQ93IANqIgRqIAMgDWogAiAWaiABIBFqIAQgAkF/c3IgA3NqQa/E7tMHa0EVdyAEaiIBIANBf3NyIARzakHP/KH9BmpBBncgAWoiAiAEQX9zciABc2pBoLLMDmtBCncgAmoiAyABQX9zciACc2pB7Pn65wVrQQ93IANqIgRqIAMgEGogAiAUaiABIBdqIAQgAkF/c3IgA3NqQaGjoPAEakEVdyAEaiIBIANBf3NyIARzakH+grLFAGtBBncgAWoiAiAEQX9zciABc2pBy5uUlgRrQQp3IAJqIgMgAUF/c3IgAnNqQbul39YCakEPdyADaiIFaiABIBVqIAUgAkF/c3IgA3NqQe/Y5KMBa0EVd2ohBCAFIAZqIQYgAyAHaiEHIAIgCGohCCIBIBpHDQALIAAgBzYCDCAAIAY2AgggACAENgIEIAAgCDYCAAsgGUFAayQAC5cRAQV/IwBB0ABrIgIkAAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAAtAABBAWsOFwECAwQFBgcICQoLDA0ODxAREhcTFBUWAAsgAkE4akIANwIAIAJBATYCMCACQYTKwAA2AiwgAkGMrMIANgI0IAEoAhQgAUEYaigCACACQSxqEC8hAwwXCyACQThqQgA3AgAgAkEBNgIwIAJBnMrAADYCLCACQYyswgA2AjQgASgCFCABQRhqKAIAIAJBLGoQLyEDDBYLIAJBOGpCADcCACACQQE2AjAgAkG0ysAANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMFQsgAiAAQQRqNgJMIAIgAEEIajYCJCACQThqQgI3AgAgAkEYakETNgIAIAJBAjYCMCACQfDKwAA2AiwgAkETNgIQIAFBGGooAgAhACACIAJBDGo2AjQgAiACQSRqNgIUIAIgAkHMAGo2AgwgASgCFCAAIAJBLGoQLyEDDBQLIAIgAEEBajYCJCACQThqQgE3AgAgAkEBNgIwIAJBjMvAADYCLCACQRQ2AhAgAUEYaigCACEAIAIgAkEMajYCNCACIAJBJGo2AgwgASgCFCAAIAJBLGoQLyEDDBMLIAJBOGpCADcCACACQQE2AjAgAkGwy8AANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMEgsgAiAAQQFqNgIkIAJBOGpCATcCACACQQE2AjAgAkHQy8AANgIsIAJBEDYCECABQRhqKAIAIQAgAiACQQxqNgI0IAIgAkEkajYCDCABKAIUIAAgAkEsahAvIQMMEQsgAiAAQQFqNgIkIAJBOGpCATcCACACQQI2AjAgAkGAzMAANgIsIAJBEDYCECABQRhqKAIAIQAgAiACQQxqNgI0IAIgAkEkajYCDCABKAIUIAAgAkEsahAvIQMMEAsgAkE4akIANwIAIAJBATYCMCACQaDMwAA2AiwgAkGMrMIANgI0IAEoAhQgAUEYaigCACACQSxqEC8hAwwPCyACIABBAWo2AiQgAkE4akIBNwIAIAJBATYCMCACQcTMwAA2AiwgAkEVNgIQIAFBGGooAgAhACACIAJBDGo2AjQgAiACQSRqNgIMIAEoAhQgACACQSxqEC8hAwwOCyACQThqQgA3AgAgAkEBNgIwIAJB6MzAADYCLCACQYyswgA2AjQgASgCFCABQRhqKAIAIAJBLGoQLyEDDA0LIAJBOGpCADcCACACQQE2AjAgAkGIzcAANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMDAsgAkE4akIANwIAIAJBATYCMCACQaDNwAA2AiwgAkGMrMIANgI0IAEoAhQgAUEYaigCACACQSxqEC8hAwwLCyACQThqQgA3AgAgAkEBNgIwIAJByM3AADYCLCACQYyswgA2AjQgASgCFCABQRhqKAIAIAJBLGoQLyEDDAoLIAIgAEEEajYCJCACQThqQgE3AgAgAkEBNgIwIAJB3M3AADYCLCACQRY2AhAgAUEYaigCACEAIAIgAkEMajYCNCACIAJBJGo2AgwgASgCFCAAIAJBLGoQLyEDDAkLIAJBOGpCADcCACACQQE2AjAgAkHkzcAANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMCAsgAkE4akIANwIAIAJBATYCMCACQZzOwAA2AiwgAkGMrMIANgI0IAEoAhQgAUEYaigCACACQSxqEC8hAwwHCyACQThqQgA3AgAgAkEBNgIwIAJBtM7AADYCLCACQYyswgA2AjQgASgCFCABQRhqKAIAIAJBLGoQLyEDDAYLIAJBOGpCADcCACACQQE2AjAgAkHQzsAANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMBQsgAiAAQQFqNgJMIAJBIGpBATYCACACQRhqQQE2AgAgAkEXNgIoIAJBATYCECACQczPwAA2AgwgAiACQcwAajYCJCACQQM6AEggAkEINgJEIAJCIDcCPCACQoCAgIAgNwI0IAJBAjYCLCABQRhqKAIAIQAgAiACQSxqNgIcIAIgAkEkajYCFCABKAIUIAAgAkEMahAvIQMMBAsgAiAAQQRqNgJMIAIgAEEIajYCJCACQThqQgI3AgAgAkEYakETNgIAIAJBAzYCMCACQZzQwAA2AiwgAkETNgIQIAFBGGooAgAhACACIAJBDGo2AjQgAiACQSRqNgIUIAIgAkHMAGo2AgwgASgCFCAAIAJBLGoQLyEDDAMLIAIgAEEEajYCJCACQThqQgE3AgAgAkEBNgIwIAJB1JfCADYCLCACQRg2AhAgAUEYaigCACEAIAIgAkEMajYCNCACIAJBJGo2AgwgASgCFCAAIAJBLGoQLyEDDAILIAIgAEEBajYCJCACQThqQgE3AgAgAkEBNgIwIAJB1NDAADYCLCACQRA2AhAgAUEYaigCACEAIAIgAkEMajYCNCACIAJBJGo2AgwgASgCFCAAIAJBLGoQLyEDDAELIAIgAEEEajYCTCACQThqIgVCADcCAEEBIQMgAkEBNgIwIAJB9M7AADYCLCACQYyswgA2AjQgASgCFCIEIAFBGGooAgAiASACQSxqIgYQLw0AIAAtAAFBF0cEQCACIABBAWo2AiQgBUIBNwIAIAJBAjYCMCACQYjPwAA2AiwgAkEQNgIQIAIgAkEMajYCNCACIAJBJGo2AgwgBCABIAYQLw0BCyACQThqQgE3AgAgAkEBNgIwIAJBnM/AADYCLCACQRA2AhAgAiACQQxqNgI0IAIgAkHMAGo2AgwgBCABIAJBLGoQLyEDCyACQdAAaiQAIAMLjg0CB38HfiMAQRBrIgckACAAvSIJQv////////8HgyELIAlCAFMEQCABQS06AABBASEGCwJAAn8CfwJAAkAgC0IAUiIDIAlCNIinQf8PcSICcgRAIAMgAkECSXIhAyALQoCAgICAgIAIhCALIAIbIglCAoYhCiAJQgGDIQ4gAkG1CGtBzHcgAhsiAkEASARAIAlBqLzBACACIAJBhaJTbEEUdiACQX9HayICaiIEQQR0IgVrKQMAQbC8wQAgBWspAwAgAiAEQbHZtX9sQRN2a0H8AGogByAHQQhqIAMQVSEMIAcpAwghCSAHKQMAIQsgAkECTwRAIApCfyACrYZCf4WDUEUgAkE+S3INAwwECyALIA59IQsgAyAOUHEhCEEBDAQLIAkgAkHB6ARsQRJ2IAJBA0trIgRBBHQiBUHIkcEAaikDACAFQdCRwQBqKQMAIAQgAmsgBEHPpsoAbEETdmpB/QBqIAcgB0EIaiADEFUhDCAHKQMIIQkgBykDACELIARBFk8NAUEAIAqnayAKQgWAp0F7bEYEQEF/IQIDQCACQQFqIQIgCkLNmbPmzJmz5kx+IgpCs+bMmbPmzJkzWA0ACyACIARPDQMMAgsgDlBFBEAgCkIChCEKQX8hAgNAIAJBAWohAiAKQs2Zs+bMmbPmTH4iCkK05syZs+bMmTNUDQALIAsgAiAET619IQsMAgsgA61Cf4UgCnwhCkF/IQIDQCACQQFqIQIgCkLNmbPmzJmz5kx+IgpCtObMmbPmzJkzVA0ACyACIARJDQFBASEIQQAMAwsgASAGaiIBQYjlwQAvAAA7AAAgAUECakGK5cEALQAAOgAAIAlCP4inQQNqIQIMBAtBACEDAn8gC0LkAIAiCiAJQuQAgCINWARAIAkhDSALIQogDCEJQQAMAQsgDKcgDELkAIAiCadBnH9sakExSyEDQQILIQIgCkIKgCIKIA1CCoAiC1YEfwNAIAJBAWohAiAJIgxCCoAhCSAKQgqAIgogCyINQgqAIgtWDQALIAynIAmnQXZsakEESwUgAwsgCSANUXIMAgtBAQshBUEAIQMCQCALQgqAIg0gCUIKgCIPWARAQQAhAiAJIQogDCELDAELQQAhAgNAIAhBACAJp2sgDyIKp0F2bEZxIQggAkEBaiECIAUgA0H/AXFFcSEFIAynIAxCCoAiC6dBdmxqIQMgCyEMIA1CCoAiDSAKIglCCoAiD1YNAAsLAkACQCAIRQ0AQQAgCqdrIApCCoAiDKdBdmxHDQADQCACQQFqIQIgBSADQf8BcUVxIQUgC6cgC0IKgCIJp0F2bGohAyAJIQtBACAMp2sgDCIKQgqAIgynQXZsRg0ACwwBCyALIQkLIA6nIAhBf3NyIAkgClFxQQRBBSAJQgGDUBsgAyAFGyADIANB/wFxQQVGG0H/AXFBBEtyCyEDAkACQAJAIAIgBGoiBEEATiAEAn9BESAJIAOtfCIJQv//g/6m3uERVg0AGkEQIAlC//+Zpuqv4wFWDQAaQQ8gCUL//+iDsd4WVg0AGkEOIAlC/7/K84SjAlYNABpBDSAJQv+flKWNHVYNABpBDCAJQv/P28P0AlYNABpBCyAJQv/Hr6AlVg0AGkEKIAlC/5Pr3ANWDQAaQQkgCUL/wdcvVg0AGkEIIAlC/6ziBFYNABpBByAJQr+EPVYNABpBBiAJQp+NBlYNABpBBSAJQo/OAFYNABpBBCAJQucHVg0AGkEDIAlC4wBWDQAaQQJBASAJQglWGwsiAmoiA0ERSHFFBEAgA0EBayIEQRBJDQEgA0EEakEFSQ0CIAEgBmoiBUEBaiEDIAJBAUcNAyADQeUAOgAAIAUgCadBMGo6AAAgBCABIAZBAnIiAmoQlwEgAmohAgwECyAJIAEgAiAGamoiBRA+IAIgA0gEQCAFQTAgBBC7AhoLIAEgAyAGaiICakGu4AA7AAAgAkECaiECDAMLIAkgASAGQQFqIgQgAmoiAmoQPiABIAZqIAEgBGogAxC9AiABIAMgBmpqQS46AAAMAgsgASAGaiIFQbDcADsAAEECIANrIQQgA0EASARAIAVBAmpBMEEDIAQgBEEDTBtBAmsQuwIaCyAJIAEgAiAGaiAEaiICahA+DAELIAkgAiAGaiICIAFqQQFqIgYQPiAFIAMtAAA6AAAgA0EuOgAAIAZB5QA6AAAgBCABIAJBAmoiAmoQlwEgAmohAgsgB0EQaiQAIAILwA4BBn8jAEFAaiIEJAACQAJAIAACfwJAAkAgASgCCCIFIAEoAgQiB08NAANAIAEoAgAhCCAFIQMCQANAIAMgCGotAAAiBkGIjcIAai0AAA0BIAEgA0EBaiIDNgIIIAMgB0kNAAsgAyEFDAILAkACfwJAAkACQAJAAkACQAJAAkAgBkHcAEcEQCAGQSJGDQEgASADQQFqIgE2AgggBEEQaiAIIAcgARC2AUG4scIALQAAGiAEKAIUIQIgBCgCECEBQRQQCiIFRQ0QIAUgATYCDCAFQRA2AgAgACAFNgIEIAUgAjYCEAwNCyADIAVPBEAgAiAFIAhqIAMgBWsQ5QEgASADQQFqIgY2AgggBiAHTwRAIARBIGogCCAHIAYQtgFBuLHCAC0AABogBCgCJCECIAQoAiAhAUEUEAoiA0UNESADIAE2AgwgA0EENgIAIAMgAjYCEAwICyABIANBAmoiBTYCCAJAAkACQAJAAkACQAJAAkACQCAGIAhqLQAAIgNB7QBNBEAgA0HhAE0EQCADQSJGDQMgA0EvRg0EIANB3ABHDQIgAigCCCIDIAIoAgRGBEAgAiADEOEBIAIoAgghAwsgAiADQQFqNgIIIAIoAgAgA2pB3AA6AAAMFQsgA0HiAGsOBQQBAQEFAQsgA0HuAGsOCAUAAAAGAAcIAAsgBEEYaiAIIAcgBRC2AUG4scIALQAAGiAEKAIcIQIgBCgCGCEBQRQQCiIDRQ0YIAMgATYCDCADQQw2AgAgAyACNgIQDA8LIAIoAggiAyACKAIERgRAIAIgAxDhASACKAIIIQMLIAIgA0EBajYCCCACKAIAIANqQSI6AAAMEQsgAigCCCIDIAIoAgRGBEAgAiADEOEBIAIoAgghAwsgAiADQQFqNgIIIAIoAgAgA2pBLzoAAAwQCyACKAIIIgMgAigCBEYEQCACIAMQ4QEgAigCCCEDCyACIANBAWo2AgggAigCACADakEIOgAADA8LIAIoAggiAyACKAIERgRAIAIgAxDhASACKAIIIQMLIAIgA0EBajYCCCACKAIAIANqQQw6AAAMDgsgAigCCCIDIAIoAgRGBEAgAiADEOEBIAIoAgghAwsgAiADQQFqNgIIIAIoAgAgA2pBCjoAAAwNCyACKAIIIgMgAigCBEYEQCACIAMQ4QEgAigCCCEDCyACIANBAWo2AgggAigCACADakENOgAADAwLIAIoAggiAyACKAIERgRAIAIgAxDhASACKAIIIQMLIAIgA0EBajYCCCACKAIAIANqQQk6AAAMCwsgBEEsaiABEFIgBC8BLA0CIAQvAS4iBkGA+ANxIgVBgLADRwRAIAVBgLgDRgRAIARBFDYCNCABIARBNGoQvwEhAwwJCyAGQYCwv39zQf+PvH9NDQYgBEEANgI0IAZBgAFJDQQgBkGAEEkEQCAEIAZBP3FBgAFyOgA1IAQgBkEGdkHAAXI6ADRBAgwLCyAEIAZBP3FBgAFyOgA2IAQgBkEMdkHgAXI6ADQgBCAGQQZ2QT9xQYABcjoANUEDDAoLIARBNGoiByABEKEBIAQtADQNBiAELQA1IAEgASgCCCIDQQFqNgIIQdwARwRAIARBFzYCNCABIAcQvwEhAwwICyAEQTRqIgcgARChASAELQA0DQYgBC0ANSABIANBAmo2AghB9QBHBEAgBEEXNgI0IAEgBxC/ASEDDAgLIARBNGoiByABEFIgBC8BNA0GIAQvATYiA0GAQGtB//8DcUGA+ANJDQQgA0GAyABqQf//A3EgBkGA0ABqQf//A3FBCnRyIgVBgIAEaiIGQYCAxABHIAZBgLADc0GAgMQAa0H/j7x/S3ENCCAEQQ82AjQgASAHEL8BIQMMBwsgBSADQeiMwgAQugEACyACKAIIBEAgAyAFTwRAIAIgBSAIaiADIAVrEOUBIAEgA0EBajYCCCAAIAIoAgg2AgggACACKAIANgIEQQEMDgsgBSADQciMwgAQugEACyADIAVPBEAgACADIAVrNgIIIAAgBSAIajYCBCABIANBAWo2AghBAAwNCyAFIANB2IzCABC6AQALIAQoAjAhAwwECyAEIAY6ADRBAQwFCyAEQRQ2AjQgASAEQTRqEL8BIQMMAgtBgJfCAEErQYiPwgAQ3gEACyAEKAI4IQMLIAAgAzYCBAwFCyAEIANBP3FBgAFyOgA3IAQgBUEGdkE/cUGAAXI6ADYgBCAGQQx2QT9xQYABcjoANSAEIAZBEnZBB3FB8AFyOgA0QQQLIQMgAiAEQTRqIAMQ5QEgASgCBCEHIAEoAgghBQsgBSAHSQ0ACwsgBSAHRw0CIARBCGogASgCACAHIAcQtgFBuLHCAC0AABogBCgCDCECIAQoAgghAUEUEAoiBUUNAyAFIAE2AgwgBUEENgIAIAAgBTYCBCAFIAI2AhALQQILNgIAIARBQGskAA8LIAUgB0G4jMIAELcBAAsAC98LAQt/AkACQAJAIAAoAgAiCiAAKAIIIgNyBEACQCADRQ0AIAEgAmohCCAAQQxqKAIAQQFqIQkgASEEA0ACQCAEIQMgCUEBayIJRQ0AIAMgCEYNAgJ/IAMsAAAiBkEATgRAIAZB/wFxIQYgA0EBagwBCyADLQABQT9xIQcgBkEfcSEEIAZBX00EQCAEQQZ0IAdyIQYgA0ECagwBCyADLQACQT9xIAdBBnRyIQcgBkFwSQRAIAcgBEEMdHIhBiADQQNqDAELIARBEnRBgIDwAHEgAy0AA0E/cSAHQQZ0cnIiBkGAgMQARg0DIANBBGoLIgQgBSADa2ohBSAGQYCAxABHDQEMAgsLIAMgCEYNACADLAAAIgRBAE4gBEFgSXIgBEFwSXJFBEAgBEH/AXFBEnRBgIDwAHEgAy0AA0E/cSADLQACQT9xQQZ0IAMtAAFBP3FBDHRycnJBgIDEAEYNAQsCQAJAIAVFDQAgAiAFTQRAQQAhAyACIAVGDQEMAgtBACEDIAEgBWosAABBQEgNAQsgASEDCyAFIAIgAxshAiADIAEgAxshAQsgCkUNAyAAKAIEIQsgAkEQTwRAIAIgASABQQNqQXxxIgZrIglqIgpBA3EhB0EAIQhBACEDIAEgBkcEQCAGIAFBf3NqQQNPBEBBACEFA0AgAyABIAVqIgQsAABBv39KaiAEQQFqLAAAQb9/SmogBEECaiwAAEG/f0pqIARBA2osAABBv39KaiEDIAVBBGoiBQ0ACwsgASEEA0AgAyAELAAAQb9/SmohAyAEQQFqIQQgCUEBaiIJDQALCwJAIAdFDQAgBiAKQXxxaiIELAAAQb9/SiEIIAdBAUYNACAIIAQsAAFBv39KaiEIIAdBAkYNACAIIAQsAAJBv39KaiEICyAKQQJ2IQcgAyAIaiEFA0AgBiEJIAdFDQRBwAEgByAHQcABTxsiCEEDcSEKIAhBAnQhDEEAIQQgCEEETwRAIAYgDEHwB3FqIQ0gBiEDA0AgBCADKAIAIgRBf3NBB3YgBEEGdnJBgYKECHFqIANBBGooAgAiBEF/c0EHdiAEQQZ2ckGBgoQIcWogA0EIaigCACIEQX9zQQd2IARBBnZyQYGChAhxaiADQQxqKAIAIgRBf3NBB3YgBEEGdnJBgYKECHFqIQQgA0EQaiIDIA1HDQALCyAHIAhrIQcgCSAMaiEGIARBCHZB/4H8B3EgBEH/gfwHcWpBgYAEbEEQdiAFaiEFIApFDQALIAkgCEH8AXFBAnRqIgQoAgAiA0F/c0EHdiADQQZ2ckGBgoQIcSEDIApBAUYNAiADIAQoAgQiA0F/c0EHdiADQQZ2ckGBgoQIcWohAyAKQQJGDQIgAyAEKAIIIgNBf3NBB3YgA0EGdnJBgYKECHFqIQMMAgsgAkUEQEEAIQUMAwsgAkEDcSEEAkAgAkEESQRAQQAhBUEAIQkMAQtBACEFIAEhAyACQXxxIgkhBgNAIAUgAywAAEG/f0pqIANBAWosAABBv39KaiADQQJqLAAAQb9/SmogA0EDaiwAAEG/f0pqIQUgA0EEaiEDIAZBBGsiBg0ACwsgBEUNAiABIAlqIQMDQCAFIAMsAABBv39KaiEFIANBAWohAyAEQQFrIgQNAAsMAgsMAgsgA0EIdkH/gRxxIANB/4H8B3FqQYGABGxBEHYgBWohBQsCQCAFIAtJBEAgCyAFayEFQQAhAwJAAkACQCAALQAgQQFrDgIAAQILIAUhA0EAIQUMAQsgBUEBdiEDIAVBAWpBAXYhBQsgA0EBaiEDIABBGGooAgAhBCAAKAIQIQYgACgCFCEAA0AgA0EBayIDRQ0CIAAgBiAEKAIQEQEARQ0AC0EBDwsMAQtBASEDIAAgASACIAQoAgwRAAAEfyADBUEAIQMCfwNAIAUgAyAFRg0BGiADQQFqIQMgACAGIAQoAhARAQBFDQALIANBAWsLIAVJCw8LIAAoAhQgASACIABBGGooAgAoAgwRAAALoAsCEH8HfiMAQYABayIGJAAgBiACNgI8IAYgATYCOCAGIAM2AkAgBiAFNgJEIAEoAigiCCEHAkACQAJAAkACQAJAAkAgCEEFTwR/IAEoAgQFIAcLIAVHDQAgAigCKCIJIQcgCUEFTwR/IAIoAgQFIAcLIAVHDQAgAygCKCIMIQcgDEEFTwR/IAMoAgQFIAcLIAVHDQAgAEEoaiIKIQsgACgCKCIHQQVPBH8gAEEEaiELIAAoAgQFIAcLBEAgC0EANgIACyAAIAVBAXQQ0AECQAJAIAUEQCACKAIIIAJBCGogCUEESyIHGyERIAMoAggiEiADQQhqIhMgDEEESyINGyELIAEoAgggAUEIaiAIQQRLIg4bIRQgAigCBCAJIAcbIQ8gAygCBCIVIAwgDRshDSABKAIEIAggDhshDiAAQQhqIQdBACEIA0AgBkEwaiAAIAggBSAIaiIJQYD4wAAQwAEgCCAPTw0FIAhBA3QhEAJAIAYoAjQiASAOIAEgDkkbIgNFBEBCACEXDAELIAYoAjAhASAQIBFqKQMAIRZCACEXIBQhAgNAIAZBIGogAikDAEIAIBYQsAEgASAXIAYpAyAiGCABKQMAfCIafCIbNwMAIBcgG1atIAZBKGopAwAgGCAaVq18fCEXIAFBCGohASACQQhqIQIgA0EBayIDDQALCyAHIQIgCigCACIBQQVPBEAgACgCCCECIAAoAgQhAQsgASAITQ0GIAIgEGopAwAhFiAGQRhqIAAgCCAJQbD4wAAQwAECQCAGKAIcIgEgDSABIA1JGyIDRQRAQgAhFgwBCyAGKAIYIQEgBCAWfiEYQgAhFiALIQIDQCAGQQhqIAIpAwBCACAYELABIAEgFiAGKQMIIhogASkDAHwiG3wiHDcDACAWIBxWrSAGQRBqKQMAIBogG1atfHwhFiABQQhqIQEgAkEIaiECIANBAWsiAw0ACwsgByECIAooAgAiAUEFTwRAIAAoAgghAiAAKAIEIQELIAEgCU0NByACIAlBA3RqIBYgFyAZfCIZfCIYNwMAIBcgGVYgFiAYVnIiAa0hGSAIQQFqIgggBUcNAAsgAQ0BCyAKKAIAIgJBBE0EfyAAQQhqBSAAKAIEIQIgACgCCAshASACIAVJDQYgAiAFQQF0Rw0HIAVFDQEgBUEDdCEDIAUhAgNAIAEpAwAhBCABIAEgA2oiBykDADcDACAHIAQ3AwAgAUEIaiEBIAJBAWsiAg0ACwwBCyAKKAIAIgFBBU8EQCAAKAIIIQcgACgCBCEBCyABIAVJDQcgByABQQN0aiAHIAVBA3QiC2prQQN2IgEgFSAMIAxBBEsiAhsiAyABIANJGyEBIBIgEyACGyECQgAhFiAFIQMDQCABRQ0BIAcgByALaikDACIXIBYgAikDACIEfXwiFjcDACAWIAQgF0J/hSIWhIMgBCAWg4RCP4chFiABQQFrIQEgB0EIaiEHIAJBCGohAiADQQFrIgMNAAsLIAooAgAiAUEFTwR/IABBBGohCiAAKAIEBSABCyAFSwRAIAogBTYCAAsgBkGAAWokAA8LIAZB/ABqQQQ2AgAgBkH0AGpBGzYCACAGQewAakEbNgIAIAZB1ABqQgQ3AgAgBkEENgJMIAZBoPfAADYCSCAGQRs2AmQgBiAGQeAAajYCUCAGIAZBxABqNgJ4IAYgBkFAazYCcCAGIAZBPGo2AmggBiAGQThqNgJgIAZByABqQcD3wAAQ6wEACyAIIA9BkPjAABC3AQALIAggAUGg+MAAELcBAAsgCSABQcD4wAAQtwEAC0GJmMIAQSNB0PfAABDeAQALIAZB7ABqQgA3AgAgBkEBNgJkIAZB7PTAADYCYCAGQYyswgA2AmggBkHgAGpB4PfAABDrAQALQYmYwgBBI0Hw98AAEN4BAAv3CgEFfyMAQRBrIgMkAAJAAkACQAJAAkACQAJAAkACQAJAIAEOKAUICAgICAgICAEDCAgCCAgICAgICAgICAgICAgICAgICAgGCAgICAcACyABQdwARg0DDAcLIABBgAQ7AQogAEIANwECIABB3OgBOwEADAcLIABBgAQ7AQogAEIANwECIABB3OQBOwEADAYLIABBgAQ7AQogAEIANwECIABB3NwBOwEADAULIABBgAQ7AQogAEIANwECIABB3LgBOwEADAQLIABBgAQ7AQogAEIANwECIABB3OAAOwEADAMLIAJBgIAEcUUNASAAQYAEOwEKIABCADcBAiAAQdzEADsBAAwCCyACQYACcUUNACAAQYAEOwEKIABCADcBAiAAQdzOADsBAAwBCwJAAkACQAJAAkACQCACQQFxBEAgAUELdCEGQQAhAkEhIQVBISEEAkADQAJAAkBBfyAFQQF2IAJqIgVBAnRBpL/AAGooAgBBC3QiByAGRyAGIAdLGyIHQQFGBEAgBSEEDAELIAdB/wFxQf8BRw0BIAVBAWohAgsgBCACayEFIAIgBEkNAQwCCwsgBUEBaiECCwJ/An8CQCACQSBNBEAgAkECdCIFQaS/wABqKAIAQRV2IQQgAkEgRw0BQdcFIQVBHwwCC0EhQSFBlL7AABC3AQALIAVBqL/AAGooAgBBFXYhBUEAIAJFDQEaIAJBAWsLQQJ0QaS/wABqKAIAQf///wBxCyECAkAgBSAEQX9zakUNACABIAJrIQdB1wUgBCAEQdcFTRshBiAFQQFrIQVBACECA0AgBCAGRg0HIAIgBEGowMAAai0AAGoiAiAHSw0BIAUgBEEBaiIERw0ACyAFIQQLIARBAXENAQsgAUEgSQ0FIAFB/wBJDQMgAUGAgARJDQIgAUGAgAhJDQEgAUGwxwxrQdC6K0kgAUHLpgxrQQVJciABQZ70C2tB4gtJIAFB4dcLa0GfGElyciABQX5xQZ7wCkYgAUGinQtrQQ5JciABQWBxQeDNCkYgAUG67gprQQZJcnJyDQUgAUHwgzhrQZD8C0kNBQwDCyADQQhqQQA6AAAgA0EAOwEGIAMgAUEIdkEPcUG09MEAai0AADoADCADIAFBDHZBD3FBtPTBAGotAAA6AAsgAyABQRB2QQ9xQbT0wQBqLQAAOgAKIAMgAUEUdkEPcUG09MEAai0AADoACSABQQFyZ0ECdkECayICIANBBmpqIgRBzr7AAC8AADsAACADIAFBBHZBD3FBtPTBAGotAAA6AA0gBEECakHQvsAALQAAOgAAIANBDmoiBCABQQ9xQbT0wQBqLQAAOgAAIAAgAykBBjcAACADQf0AOgAPIABBCGogBC8BADsAACAAQQo6AAsgACACOgAKDAULIAFB8LLAAEEsQcizwABBxAFBjLXAAEHCAxBODQEMAwsgAUHOuMAAQShBnrnAAEGfAkG9u8AAQa8CEE5FDQILIAAgATYCBCAAQYABOgAADAILIAZB1wVBpL7AABC3AQALIANBCGpBADoAACADQQA7AQYgAyABQQh2QQ9xQbT0wQBqLQAAOgAMIAMgAUEMdkEPcUG09MEAai0AADoACyADIAFBEHZBD3FBtPTBAGotAAA6AAogAyABQRR2QQ9xQbT0wQBqLQAAOgAJIAFBAXJnQQJ2QQJrIgIgA0EGamoiBEHOvsAALwAAOwAAIAMgAUEEdkEPcUG09MEAai0AADoADSAEQQJqQdC+wAAtAAA6AAAgA0EOaiIEIAFBD3FBtPTBAGotAAA6AAAgACADKQEGNwAAIANB/QA6AA8gAEEIaiAELwEAOwAAIABBCjoACyAAIAI6AAoLIANBEGokAAvECAIJfwR+IwBBIGsiCSQAIAEoAigiCiEHIAIoAigiBiEDIAFBKGohCwJAAkACQAJAAkACfgJAAkAgCkEFTwRAIAEoAgQhBwsCQCAGQQVPBH8gAigCBAUgAwsgB00EQCAKQQRNBH8gAUEIagUgASgCBCEKIAEoAggLIQMgBkEETQR/IAJBCGoFIAIoAgQhBiACKAIICyEFIAYgCksNCSAGRQ0GIAMgBkEDdGohCCAGIQQDQCADIAwgAykDAHwiDSAFKQMAfCIONwMAIAwgDVatIA0gDlatfCEMIANBCGohAyAFQQhqIQUgBEEBayIEDQALIAxQDQYgCkEDdCAGQQN0ayEDA0AgA0UNAiAIIAwgCCkDAHwiDTcDACADQQhrIQMgCEEIaiEIIAwgDVatIgxQRQ0ACwwGCyAKQQRNBH8gAUEIagUgASgCBCEKIAEoAggLIQMgBkEETQR/IAJBCGoFIAIoAgQhBiACKAIICyEFIAYgB0kNASAHIApLDQggBwRAIAMgB0EDdGohCCAHIQQDQCADIAwgAykDAHwiDSAFKQMAfCIPNwMAIAwgDVatIA0gD1atfCEMIANBCGohAyAFQQhqIQUgBEEBayIEDQALQgAgDFANBBogCkEDdCAHQQN0ayEDA0AgA0UNBCAIIAwgCCkDAHwiDTcDACADQQhrIQMgCEEIaiEIIA4gDCANVq18IQwgDEIAUg0ACwtCAAwDCyAMUA0EDAMLIAcgBkHo7cAAELgBAAsgDAshDSAJQRhqIAIgB0H47cAAENMBIAkoAhwhAiALKAIAIgNBBU8EQCABKAIEIQMLIAkoAhghBiAJQRBqIAEgAhCTASAJKAIQIgRBgYCAgHhHBEAgBEUNAwALAn8gCygCACIEQQVPBEAgASgCBCIEIANJDQUgASgCCAwBCyADIARLDQQgAUEIagsgA0EDdGoiBSACQQN0IghqIAUgBCADa0EDdBC9AiAFIAYgCBC+AhogCyIDKAIAQQVPBH8gAUEEagUgAwsgAiAEajYCACAJQQhqIAEgB0GI7sAAENMBIAkoAgwiBEUNBCAJKAIIIgIgAikDACIMIA18Ig03AwAgDCANWA0BIAwgDVatIQwgAkEIaiEDIARBA3RBCGshBQNAIAVFDQEgAyAMIAMpAwB8Ig03AwAgA0EIaiEDIAVBCGshBSAMIA1YIAwgDVatIQxFDQALDAELQQQhBQJ/IAsoAgAiAkEETQRAIAFBCGohBCACDAELIAFBBGohCyABKAIIIQQgAiEFIAEoAgQLIgMgBUYEfyABEKABIAFBBGohCyABKAIIIQQgASgCBAUgAwtBA3QgBGpCATcDACALIAsoAgBBAWo2AgALIAAgAUEwEL4CGiAJQSBqJAAPC0Hs8MAAQRFBgPHAABDeAQALQavtwABBHkHM7cAAEN4BAAtBiZjCAEEjQej1wAAQ3gEAC+kJAwV/A34BfCMAQUBqIgIkAAJAAkACQAJ/AkACQAJAAkACQAJAAkAgAC0AAEEBaw4FAAECAwQFCyABKAIAQeLswABB3ezAACAALQABIgAbQQRBBSAAGxDkAQwJCwJAAkACQCAAKAIIQQFrDgIBAgALQRQhBCAAQRBqKQMAIgdCkM4AVARAIAchCAwKCwNAIAJBGGogBGoiAEEEayAHIAdCkM4AgCIIQpDOAH59pyIDQf//A3FB5ABuIgVBAXRB+onCAGovAAA7AAAgAEECayADIAVB5ABsa0H//wNxQQF0QfqJwgBqLwAAOwAAIARBBGshBCAHQv/B1y9WIAghBw0ACwwJC0EUIQQgAEEQaikDACIJIAlCP4ciB4UgB30iB0KQzgBUBEAgByEIDAgLA0AgAkEYaiAEaiIAQQRrIAcgB0KQzgCAIghCkM4Afn2nIgNB//8DcUHkAG4iBUEBdEH6icIAai8AADsAACAAQQJrIAMgBUHkAGxrQf//A3FBAXRB+onCAGovAAA7AAAgBEEEayEEIAdC/8HXL1YgCCEHDQALDAcLIABBEGorAwAiCiAKYiAKvUL///////////8Ag0KAgICAgICA+P8AUXJFBEAgCiACQRhqIgMQDyEAIAEoAgAgAyAAEOQBDAkLIAEoAgBB+PLBAEEEEOQBDAgLIAEoAgAgACgCBCAAQQxqKAIAEDkMBwsgAEEMaigCACEGIAAoAgQhBCABKAIAIgBB5uzAAEEBEOQBQQEhAyAGRQRAQQEhBSAAQfjswABBARDkAUEAIQMLIAZBGGwhAANAIAAEQCADQQFxRQRAIAEoAgBB6OzAAEEBEOQBCyAEIAEQFSAAQRhrIQBBACEDIARBGGohBEEAIQUMAQsLIAUNBiABKAIAQfjswABBARDkAQwGCyAAQQxqKAIAIQRBASEDIAEoAgAiBUHn7MAAQQEQ5AEgAiAEBH8gAwUgBUHc7MAAQQEQ5AFBAAs6ABQgAiABNgIQIAAoAgQiAQ0BQQAhBEEADAILIAEoAgBB+PLBAEEEEOQBDAQLIAIgATYCMCACQQA2AiwgAiABNgIgIAJBADYCHCACIABBCGooAgAiADYCNCACIAA2AiRBAQshACACIAQ2AjggAiAANgIoIAIgADYCGANAIAJBCGogAkEYahBEIAIoAggiAARAIAJBEGogACACKAIMENwBDAEFIAItABRFDQQgAigCECgCAEHc7MAAQQEQ5AEMBAsACwALIAinIgNB4wBKBEAgBEECayIEIAJBGGpqIAMgA0HkAG4iA0HkAGxrQQF0QfqJwgBqLwAAOwAACwJAIANBCk4EQCAEQQJrIgAgAkEYamogA0EBdEH6icIAai8AADsAAAwBCyAEQQFrIgAgAkEYamogA0EwajoAAAsgCUIAUwRAIABBAWsiACACQRhqakEtOgAACyABKAIAIAJBGGogAGpBFCAAaxDkAQwBCyAIpyIDQeMASgRAIARBAmsiBCACQRhqaiADIANB5ABuIgNB5ABsa0EBdEH6icIAai8AADsAAAsCQCADQQpOBEAgBEECayIAIAJBGGpqIANBAXRB+onCAGovAAA7AAAMAQsgBEEBayIAIAJBGGpqIANBMGo6AAALIAEoAgAgAkEYaiAAakEUIABrEOQBCyACQUBrJAALyQoBAX8jAEEwayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgACgCAEEBaw4TAQIDBAUGBwgJCgsMDQ4PEBESEwALIAJBJGpCADcCACACQQE2AhwgAkGAi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBMLIAJBJGpCADcCACACQQE2AhwgAkGYi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = Pd();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await Td(await i, n);
  return Hd(t, e);
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return aA(a - 837, I);
  }
  function e(g, a, I, C, s) {
    return aA(g - -360, I);
  }
  const A = i();
  function o(g, a, I, C, s) {
    return aA(I - -848, s);
  }
  function r(g, a, I, C, s) {
    return aA(g - -377, s);
  }
  for (; ; )
    try {
      if (-parseInt(t(1128, 1133, "VTlS", 1151, 1107)) / 1 * (-parseInt(e(-95, -79, "uR%V", -85, -78)) / 2) + -parseInt(e(-94, -114, "XhB[", -92, -109)) / 3 + -parseInt(o(-586, -540, -564, -562, "Ri&V")) / 4 * (parseInt(o(-617, -621, -596, -613, "RlN4")) / 5) + parseInt(o(-567, -549, -574, -555, "uR%V")) / 6 * (parseInt(o(-582, -567, -560, -586, "@2Ct")) / 7) + -parseInt(o(-574, -607, -589, -603, "sOJ1")) / 8 + -parseInt(r(-105, -118, -112, -88, "UQyN")) / 9 + parseInt(r(-92, -81, -67, -77, "%PnL")) / 10 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(ln, 1 * 839741 + -386664 + 902);
function Eo(i, n, t, e, A) {
  return aA(e - -619, t);
}
function ln() {
  const i = ["W5xcOSktW7ZdTry3cmkzyINdMCkTWQy", "EvpcT8ogWQJcKSkiW7elcW", "WR/cVCklrSkJ", "WONdGCoYs8kNW5rCW7dcR8ki", "W7mftmotW68", "imoYW4uOW4OPWQWGWPrtgv9t", "lJHDvCoW", "W7JcSmkKWPpdRa", "kgb6dCk1", "nmojaCoGbq", "rgSuW58S", "W5iSocpcS8ojWPKsWRaxW7qh", "kSkaWOhdISkz", "AqtcObRcGa", "lmobWPhdJmkv", "lxrYWQZdSYSdfCk9W5C8EWW", "W5KxdgJcKmkJnmoCawRdRcj2", "y8oohCo/Ba", "nqZcQalcVCkuDq", "WQzvraRcRG", "sSkAW7L/WP0", "WOzmtJNdHa", "a8o3WOPWW7nPWPS", "ymoewmoMvq", "WQZcMJpdNxq", "WRzoW6ldLfxdNZyIW60HW6nPW4S", "W7hcSCoKW4ddMq", "ySk6WRyZsa", "weeapCodc1q", "iGZdRCkc", "sK43mCoV", "WQ0kB8otW5n6WQO", "xwdcRry9B8ohW5blwWXbWRe", "hmoQW7NcU38", "gmkQbmo8jmktWPuOaYSVsMK", "yCoPW6JdSGm", "umkNjWX6W7S4W4bAAs1gW4xdLa", "vHroWQC7", "W50saMVcKmkQnCo1nLldIsPS", "DSkXWPPWWPq", "WQ1DbCkgW6HDWPCkxhS", "q8o6umkJzW", "WPdcJSoAW7q3", "rSoYrSkVEq", "xCo6tSkK", "tmokjbCO", "WQVcRCk+WRWR", "g8oWW5RcS20", "W61EErZdSW", "W7FdHgdcG2eHsSojuh0", "W4ZdLSkwWQTVpmoODN7dK8okkmo+"];
  return ln = function() {
    return i;
  }, ln();
}
function aA(i, n) {
  i = i - (-8234 + 1346 * -1 + 9827);
  const t = ln();
  let e = t[i];
  if (aA.MuTfce === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, d, Q, x = 0; Q = I.charAt(x++); ~Q && (d = E % 4 ? d * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & d >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, d = s.length; E < d; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, d = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let x = 0; x < I.length; x++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, d += String.fromCharCode(I.charCodeAt(x) ^ s[(s[Q] + s[B]) % 256]);
      return d;
    };
    aA.TLFwRb = a, aA.xELFpX = {}, aA.MuTfce = !0;
  }
  const o = t[-1 * -3613 + -3 * -1299 + -7510], r = i + o, g = aA.xELFpX[r];
  return g ? e = g : (aA.tSjAKP === void 0 && (aA.tSjAKP = !0), e = aA.TLFwRb(e, n), aA.xELFpX[r] = e), e;
}
function Ii(i, n, t, e, A) {
  return aA(n - -779, i);
}
function xg(i, n, t, e, A) {
  return aA(i - -829, A);
}
function ug(i, n, t, e, A) {
  return aA(A - -16, e);
}
function ci(i, n, t, e, A) {
  return aA(e - -549, t);
}
class Kd {
  [ci(-295, -275, "dtSf", -298) + ci(-258, -261, "Ri&V", -273) + Ii("MAaw", -502)] = !1;
  async [Eo(-360, -351, "8429", -356)](n) {
    function t(g, a, I, C, s) {
      return Eo(g - 15, a - 450, a, I - -123);
    }
    function e(g, a, I, C, s) {
      return Ii(I, g - 642);
    }
    function A(g, a, I, C, s) {
      return Eo(g - 131, a - 4, C, a - -34);
    }
    function o(g, a, I, C, s) {
      return xg(I - 820, a - 352, I - 147, C - 269, C);
    }
    function r(g, a, I, C, s) {
      return Eo(g - 41, a - 234, I, C - 541);
    }
    try {
      const g = n + (o(255, 266, 252, "bha$", 272) + "/") + va;
      await cc(g), this[t(-499, "^wru", -488, -489, -485) + t(-484, "@gQY", -489, -492, -478) + t(-441, "FQ]N", -463, -450, -451)] = !0;
    } catch {
      this[r(210, 168, "9@gs", 191) + r(205, 190, "gW2a", 209) + t(-470, "uR%V", -453)] = !1, console[A(-366, -375, -382, "MAaw")](va + (r(165, 201, "DTD0", 186) + A(-418, -406, -380, "RlN4") + A(-392, -380, -391, "Q[IK") + o(266, 285, 262, "Q*^z") + t(-429, "pL^@", -450) + r(178, 175, "pL^@", 182) + t(-466, "BC3z", -449) + r(219, 214, "5nr[", 219) + r(195, 212, "JcD4", 202) + A(-365, -362, -383, "c%j%") + t(-425, "dtSf", -448) + o(277, 311, 286, "mhDK") + t(-466, "Tm4P", -484) + e(111, 128, "5nr[") + "n."));
    }
  }
  [xg(-548, -537, -531, -559, "Yjtv") + ug(227, 223, 237, "E(0Y", 241) + Ii("MAaw", -504) + "ed"]() {
    function n(e, A, o, r, g) {
      return ug(e - 284, A - 335, o - 402, A, e - -168);
    }
    function t(e, A, o, r, g) {
      return ci(e - 260, A - 402, A, r - 709);
    }
    return this[n(98, "vi6Y", 93) + t(428, "Yjtv", 449, 427) + n(71, "UQyN", 56)];
  }
}
class Ci extends Error {
  name = "SkipLicenseValidationError";
  log() {
  }
}
function Se(i, n, t, e, A) {
  return H(e - -891, t);
}
function Bi(i, n, t, e, A) {
  return H(t - 817, e);
}
(function(i, n) {
  function t(a, I, C, s, B) {
    return H(C - 255, I);
  }
  function e(a, I, C, s, B) {
    return H(s - -409, B);
  }
  function A(a, I, C, s, B) {
    return H(s - -999, C);
  }
  function o(a, I, C, s, B) {
    return H(s - -229, C);
  }
  for (var r = i(); ; )
    try {
      var g = parseInt(e(-100, -57, -83, -95, "J!*z")) / 1 + -parseInt(o(147, 136, "nk&4", 111, 94)) / 2 + parseInt(o(161, 101, "Ij&a", 126, 158)) / 3 + parseInt(o(118, 136, "J!*z", 125, 154)) / 4 * (parseInt(e(-145, -138, -144, -107, "Sv)s")) / 5) + parseInt(A(-708, -680, "o%Dq", -693, -664)) / 6 + parseInt(e(-55, -69, -29, -57, "@U@e")) / 7 * (parseInt(t(581, "vX]b", 551, 525, 542)) / 8) + -parseInt(o(63, 67, "!3MG", 83, 57)) / 9;
      if (g === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(xn, 283989 * -2 + -1 * -508817 + 2551 * 153);
function VA(i, n, t, e, A) {
  return H(n - 865, e);
}
function Qi(i, n, t, e, A) {
  return H(e - 173, i);
}
function Ge(i, n, t, e, A) {
  return H(e - 589, A);
}
class fg {
  constructor(n) {
    function t(g, a, I, C, s) {
      return H(g - -354, a);
    }
    function e(g, a, I, C, s) {
      return H(I - 647, g);
    }
    function A(g, a, I, C, s) {
      return H(g - 605, C);
    }
    function o(g, a, I, C, s) {
      return H(s - 882, I);
    }
    function r(g, a, I, C, s) {
      return H(I - -346, C);
    }
    this[e("A1Xv", 1032, 994) + e("was(", 964, 950)] = n;
    try {
      this.#A = n[A(943, 961, 915, "q[$1", 920) + o(1210, 1212, "BOCG", 1186, 1219) + r(-85, -18, -53, "i55o", -43)] && JSON[e("CFYg", 999, 962, 980, 967)](n[o(1213, 1207, "MLvz", 1192, 1190) + t(-3, "Ij&a", -19, -22, 2) + r(-34, -63, -29, "OUB)", -51)]), this.#e = n[A(909, 875, 937, "Ij&a", 902) + r(10, -41, -19, "bSxs", -15)];
    } catch (g) {
      console[t(14, "MLvz")](g);
    }
  }
  #A;
  #e;
  get [Ge(964, 936, 921, 946, "*dKs") + "id"]() {
    function n(e, A, o, r, g) {
      return Ge(e - 171, A - 409, o - 457, e - -1497, o);
    }
    function t(e, A, o, r, g) {
      return Ge(e - 112, A - 11, o - 125, o - -818, r);
    }
    return this[t(66, 80, 95, "*dKs") + t(114, 121, 99, "BOCG")][t(98, 139, 114, "r(rq") + n(-547, -560, "vX]b")];
  }
  get [VA(1149, 1184, 1170, "COSO") + "s"]() {
    function n(e, A, o, r, g) {
      return Ge(e - 288, A - 124, o - 367, r - 137, e);
    }
    function t(e, A, o, r, g) {
      return VA(e - 30, A - -1110, o - 109, e);
    }
    return this[t("ujt#", 68, 70) + t("ujt#", 73, 86)][n("1sHg", 1099, 1123, 1088) + "s"];
  }
  get [Ge(947, 938, 966, 931, "OUB)") + VA(1189, 1218, 1229, "was(")]() {
    function n(e, A, o, r, g) {
      return Qi(g, A - 498, o - 163, o - 356);
    }
    function t(e, A, o, r, g) {
      return Ge(e - 207, A - 428, o - 133, o - -463, g);
    }
    return this[n(907, 869, 892, 870, "tkd(") + t(418, 446, 435, 404, "J!*z")][t(464, 479, 448, 450, "o*lF") + t(498, 493, 486, 465, "%]7Z")];
  }
  get [Bi(1136, 1101, 1117, "kzHh") + "b"]() {
    return this.#A;
  }
  get [VA(1170, 1195, 1166, "YwRN") + VA(1255, 1229, 1228, "6&@P")]() {
    return this.#e;
  }
  get [Ge(931, 909, 925, 925, "CFYg") + VA(1197, 1191, 1209, "Ij&a") + VA(1183, 1186, 1211, "FlA$") + Se(-552, -566, "^t1q", -560)]() {
    function n(r, g, a, I, C) {
      return Se(r - 359, g - 483, a, r - 87);
    }
    function t(r, g, a, I, C) {
      return VA(r - 315, a - -644, a - 113, g);
    }
    function e(r, g, a, I, C) {
      return VA(r - 123, I - -153, a - 467, g);
    }
    function A(r, g, a, I, C) {
      return VA(r - 138, I - -1499, a - 191, C);
    }
    function o(r, g, a, I, C) {
      return Se(r - 332, g - 56, r, a - 1404);
    }
    return !!this.#A?.[A(-273, -275, -294, -309, "i55o") + t(540, "ZnH2", 532)]?.[t(567, "ntPX", 570) + A(-303, -301, -259, -267, "i55o") + t(589, "COSO", 577) + o("Ij&a", 883, 863) + e(1011, "@U@e", 1055, 1035) + o("J!*z", 843, 878) + n(-456, -430, "bSxs")];
  }
  get [VA(1265, 1231, 1230, "o%Dq") + Se(-616, -590, "CRK6", -592) + Qi("[DJk", 543, 486, 508) + Se(-556, -550, "YwRN", -558) + Se(-614, -590, "6&@P", -594) + Qi("FlA$", 452, 495, 468)]() {
    function n(r, g, a, I, C) {
      return Ge(r - 2, g - 432, a - 491, I - 378, a);
    }
    function t(r, g, a, I, C) {
      return Se(r - 153, g - 63, r, I - 834);
    }
    function e(r, g, a, I, C) {
      return Bi(r - 470, g - 167, g - -1047, r);
    }
    function A(r, g, a, I, C) {
      return Bi(r - 170, g - 156, C - 107, I);
    }
    function o(r, g, a, I, C) {
      return Se(r - 259, g - 50, C, I - 1257);
    }
    return !!this.#A?.[t("Ij&a", 258, 260, 237) + o(694, 701, 692, 682, "ntPX")]?.[o(639, 664, 703, 667, "HIPc") + A(1251, 1267, 1301, "WhMT", 1268) + n(1315, 1273, "WhMT", 1296) + A(1273, 1269, 1251, "TI1W", 1282) + e("$%LM", 68) + t("[DJk", 255, 261, 288) + A(1214, 1215, 1210, "FlA$", 1244)];
  }
}
function H(i, n) {
  i = i - 293;
  var t = xn(), e = t[i];
  if (H.QeMCdl === void 0) {
    var A = function(I) {
      for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", B = "", E = 0, d, Q, x = 0; Q = I.charAt(x++); ~Q && (d = E % 4 ? d * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & d >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (var f = 0, h = s.length; f < h; f++)
        B += "%" + ("00" + s.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(B);
    }, o = function(I, C) {
      var s = [], B = 0, E, d = "";
      I = A(I);
      var Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (var x = 0; x < I.length; x++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, d += String.fromCharCode(I.charCodeAt(x) ^ s[(s[Q] + s[B]) % 256]);
      return d;
    };
    H.boKHYn = o, H.fgtwfa = {}, H.QeMCdl = !0;
  }
  var r = t[4824 + 1298 * 5 + -11314], g = i + r, a = H.fgtwfa[g];
  return a ? e = a : (H.nWhtxu === void 0 && (H.nWhtxu = !0), e = H.boKHYn(e, n), H.fgtwfa[g] = e), e;
}
function xn() {
  var i = ["W4DaWO/cGIC", "f0yh", "W7VcUKqJsG", "lZVcP3BdUG", "pmkKW4NdIMi", "W7WlWQK", "W5azW6NdR8ocDHBcImkTWQNdQq", "kSk/W47dL2m", "fu1gW78SWOBcRCkzuSkwW6dcUG", "BCk5WPpdPdy", "ySouy8oYca", "W6hcVKmFsa", "vaXdWOCc", "W5zfWPRcTbBdI8kGW63dTgZcUWFdTq", "W5HeWPBcSH3dGSoaW6ZdQ1hcOGe", "AmoxWPFcLSoXsSoCEqKckCkc", "j8kndNFdHW", "n8kCW7JdMmkO", "jZJcSupdQW", "BCk4WPRdOJC", "W5GzW6/dQ8ofcwBcI8ksWOFdOWRdOW", "WOPBWRpcQmkd", "fKyr", "FfZdJqq5", "W4HkWQNcJJq", "W5LCWOJcTc4", "WQ7dJJ8kpJ4Jtmo2WQKbjG", "W5ldPCol", "DmoZW7ddH1/dM8kn", "WPOjW4JdM3hcIby0W6b4zSkhxq", "m8opjMCL", "raWKWQHZ", "v147kHm", "mCoKW4ZcKMZdI8olmgpcMZpcIW", "W74nWOi", "WONdNHu", "z0KEW6xdHW", "yKNdPLn6", "p8k7W6C", "j8o7W6tdQuu", "vXmMASkm", "fSo+xY3dOq", "m8kZWONcSW", "dmo8va", "W41CWPRcNZe", "ocXU", "W5hcHYfVsCk8W6eM", "nCkBW7TYaG", "W6JdU8kacfm", "gcxdQCoasG", "g8kfjvvw", "W71qW7G4WRq", "W7VcJ1/dOSo9W4K9WOldIKxcVKi", "W5tdO8omW6Kc", "W4HmWOJcNYS", "tM4pl8odt8os", "dfvelSoFuCo2jNnoeSoXW7m", "bLLYWPynp8otvq", "pmk4WO7cQmkl", "kmoFW77dQ08", "ymoRWQmLuSoUrL48tHb3W44", "W44aWPK", "qJFdO8k6WQldKtGVW6C5Eb9A", "k8oEW4qSWOa", "ECkoWR/cVbxdNSkiWOPuWQ3dMW", "E8ogumoVda", "FfZdNW", "i8kdeG", "imonW588WPS", "n8orlxW+", "nsTMnHe", "jWXKmHC", "yw7cK8kZEq", "W7FcHhTBAa", "tG0DWRPS", "gCo2wXJdUG"];
  return xn = function() {
    return i;
  }, xn();
}
function fA(i, n, t, e, A) {
  return eA(i - -776, t);
}
(function(i, n) {
  function t(g, a, I, C, s) {
    return eA(I - -800, g);
  }
  function e(g, a, I, C, s) {
    return eA(s - -581, a);
  }
  function A(g, a, I, C, s) {
    return eA(s - -834, C);
  }
  function o(g, a, I, C, s) {
    return eA(g - 814, I);
  }
  const r = i();
  for (; ; )
    try {
      if (-parseInt(o(1551, 1490, "NVn#", 1578, 1504)) / 1 + parseInt(e(92, "RI7a", 111, 52, 62)) / 2 * (parseInt(o(1392, 1413, "iK6Z", 1425, 1299)) / 3) + parseInt(t("7M*K", -277, -185, -260, -104)) / 4 + parseInt(o(1486, 1515, "zdnZ", 1469, 1385)) / 5 + -parseInt(A(-170, -235, -95, "&imw", -213)) / 6 * (-parseInt(A(-93, -215, -274, "sQ6M", -216)) / 7) + -parseInt(t("L[k%", -155, -54, -11, -131)) / 8 * (parseInt(A(-298, -128, -235, ")ZB*", -176)) / 9) + -parseInt(t("NRkT", -275, -271, -152, -374)) / 10 * (parseInt(e(112, "RI7a", 107, -36, 48)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(un, -509953 + 843609 * -1 + 1851057);
function q(i, n, t, e, A) {
  return eA(A - -708, t);
}
function eA(i, n) {
  i = i - 500;
  const t = un();
  let e = t[i];
  if (eA.sKMYHu === void 0) {
    var A = function(I) {
      const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", B = "";
      for (let E = 0, d, Q, x = 0; Q = I.charAt(x++); ~Q && (d = E % 4 ? d * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & d >> (-2 * E & 6)) : 0)
        Q = C.indexOf(Q);
      for (let E = 0, d = s.length; E < d; E++)
        B += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(B);
    };
    const a = function(I, C) {
      let s = [], B = 0, E, d = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        B = (B + s[Q] + C.charCodeAt(Q % C.length)) % 256, E = s[Q], s[Q] = s[B], s[B] = E;
      Q = 0, B = 0;
      for (let x = 0; x < I.length; x++)
        Q = (Q + 1) % 256, B = (B + s[Q]) % 256, E = s[Q], s[Q] = s[B], s[B] = E, d += String.fromCharCode(I.charCodeAt(x) ^ s[(s[Q] + s[B]) % 256]);
      return d;
    };
    eA.msdfTK = a, eA.uSOexs = {}, eA.sKMYHu = !0;
  }
  const o = t[4258 * 1 + -6734 + 1238 * 2], r = i + o, g = eA.uSOexs[r];
  return g ? e = g : (eA.ZHikPu === void 0 && (eA.ZHikPu = !0), e = eA.msdfTK(e, n), eA.uSOexs[r] = e), e;
}
function NA(i, n, t, e, A) {
  return eA(e - -254, A);
}
function un() {
  const i = ["WQjosmkunW", "W4CMWRGJ", "WOLMC8k2xq", "W7BdPXG", "WQVcTSoZW60g", "W78AWPu", "W4NdHLRcSKe", "kvrw", "WQlcSCoJW61i", "WRqjWQPubW", "BCowW7WT", "iW14W6dcRW", "W5GEWRtcR2HnWPC", "rJddPG", "WRtcOmo8bhO", "WPvFW57dVmo0", "W63cGCo+", "WQpcUmo0W7Wn", "W6uqpmoNFa", "agRcPxJcRNfVW55wfaRdM8oA", "WO9+W5ebW5RdLuRdP8k+Fu7dOa", "dGZcVCkc", "WOWeWRdcThm", "ySokW7a8", "W6uApmoGAW", "WO/cRr/dJMO", "wcVdMcFdTa", "oqiVwa", "aaJcUSkFW4W", "WRpdImk5WOBdQa", "uCoDWQRcOCoi", "W7bUW5ZdOa", "W5JdKCoFyYe", "W4SMWQ0PnG", "W5ZdU0JcV1y", "kWT5W6FcQG", "W4hdNmol", "AmomW5KWpa", "WR7cUCoYW7Td", "WPDSz8kSrq", "WPPWW4O", "nI9igdy", "W5tdU1VcV0K", "WRZdJmk0WOW", "tSoaWQBcQCod", "jxZdHq", "W5hdT1NcLeG", "WOdcQr/dOwS", "WQ91W4tcHJO", "W77dSbJdGcu", "W4VdLcVcUmk8", "W63dOWBdHJm", "AmorW7e", "WR8dWQ0", "wsWHxtu", "W6nKumorWOO", "W5pdTvJcNdFdPWFdKqJdUSoxW7qT", "W4nIuSoqWQG", "WRxcGmoXcga", "WOmeWR3cOxu", "n8kvWRZcKfe", "W7ZdRSk5WRSEW7jGWPhdQWtdPCklW5W", "WQJcT8oYW41h", "W7BcISo/", "WOOJWP5Ula", "p3ZdHq", "W5hdVmoevXm", "W5aRW4JdVCk7", "W4v1W7VdPSohySoC", "WOGYpa7cJW", "cL4eiSkL", "k8oTxq", "W7VcHmo3p8kz", "W4JdS8oqsW", "W6X5xSogWRu", "W5/dHZBcPq", "AqdcK11s", "tsG1tYu", "W5qUWObBWPS", "C8oBW6NcGmoP", "W6XKW5FdOmk2", "W7xcGmo3p8kz", "lfbqbCkc", "EdBdTYVdUq", "WQBcUCo0W6To", "W6XUx8ogWQm", "WRmsWRDj", "W58OWOfrWO0", "W4xdUmoscG", "WQNcO0VdQu0", "wdddSW", "W7nQW5BdUSkX", "wSorWR3cImop", "W5hdR8ozuH8", "W7aaWOfhBq", "bSohWQlcLKa", "W5JdISoQwmkt", "W77cGSoGpIe", "W6H4W5NcHJC", "imoXxrtcKG", "W4hdLmomW4nh", "mSotWPRcKeO", "oCoHrW", "W4FdLmolWPDa", "WOxcUCoLW4Xa", "uSkbW6BdGamCWRNdG8oqW7FcGJNcMa", "WPyAWQNcPeG", "WReGWQ9nfq", "W6jwW4pcNmkxmCofwSkMW7VdLSk2W44", "WO7cVZtdM2m", "m33dMgSt", "W5yIWPJcHKrAWPy", "WOLMwmoHEa", "xq7cK3a", "W5WgWR8HCW", "mGKTu8kJ", "laLP", "WPv2W4ddV8oW", "WRiaWOtdQmop", "W7qNW53cSr87W7ddTW", "WOhcQqRdMxC", "j1rkfCkp", "W7RcGmo/cbq", "W6nwW64dwSkTCN08ECo5mW", "kv9qjmkK", "sJ88xsm", "BmozW6e6nW", "W43cI8o/gcG", "W4C7WOKTzq", "W7tdVv/cN1u", "W6iHWR0PEa", "W5hcQqK", "W6P5q8oAWRq", "W74JWOxdKgz8W4hdL8oEW7WqWOS", "WP5TC8kmfW", "W6CboSoN", "WRy1DSoywq", "W71UqSoQWQW", "wG7cLhuF", "WOuzWQhcUNu", "W6nIuSoqWQG", "gNRdIgST", "WRBcUSo6t3G", "W5/dICoxWPvh", "cYbHfca", "ghZcI0Om", "hghdJhSq", "tmoJWQVcK8os", "WQ7dNSk9vh0DW4C4W5ddLCorqW", "WRekWOtdQCon", "zrJcJNXm", "W7pcHSoW", "W7xdPrK", "WOKiWRBcU3q", "W6FcQW8FW64", "WP8jtvT3", "WPqPnGxcLq", "W67cILVcV1K", "WQbXW4tcPIC", "WRDNW7hdUCkDBNS", "rd7dPJ3dSG", "W5fsy8kwaq", "WPX+W6D/lMBdN8oWW78inSo2WQO", "WOSeWQ5MWQVcONy", "kqT4W4ZcOW", "W7yho8o6Bq", "zrNcImoLW5u", "W7FdM3xcLLm", "WRmYzCohwW", "aGFcKmkKW4u", "ab/cU8kFW5O", "W7RdOmoFdmkQ", "WRmsWRP2cG", "W7hcImoGoCkF", "WRlcP8o4", "oGv+W6FcPW", "qcm6wG", "FXfTkLu", "W63cGmoXl8ku", "WPD/W6T5iMxcVmoVW400fmod", "W63dLdBcPmk9", "WRLwW6FdP8oQ", "tdb7c0G", "WR4oWOtdJSok", "W4GNWQWjDW", "baJcOmkKW54", "W6mhimo7AW", "W5hdULNdLfC", "WR8AWOdcUmojW7/cQSoAWPGkbfn9", "W7NcGCo+kcu", "W4BdLmow", "WRqMsq", "W4iHWR0PEa", "ssb8he8", "W7BdKSoIqJC", "W6S6WQWJza", "W6vmxCksbW", "uCoBWQRcPCos", "WO8dwW", "W6DgW4VdQ8ku", "WRBcRSoS", "CH3cJSosW58", "W7NcHmoLpCke", "WQ3cQSoVW7Tv", "W7rkxmkp", "C8ozW6C3", "ic4zCSkK", "W6OAnCorAW", "W5u6WOXrWPS", "WRDbzmkTkbKuWQ9yACk/WOldSa", "W77dRbNdINC", "W5JcQWKsW68", "cmoJrXO", "WPSYoHpcIa", "W65DW4pdOCkc", "cJnGhu4", "W7ahWP1aCq", "WR4pWRXFdq", "W7ibpSoXFq", "WPTPwCoQqq", "WQNcVCo0W4rp", "WO1RxW", "W4VdOb3cV8kP", "kXzPW6W", "W77cK8oSl8kc", "dG5vW7ZcUq", "ifrcb8kF", "uv7dOmoyWPVdLCkGW5NcT0n/zG", "wdBdTYVdUq", "n8klW7GneSkPWRFcQa", "cqHBW6pcVa", "W6tdQHeyW6q", "WPKjtre", "BHRcLgXq", "WOmoWR3cPMi", "WRBdQSoZW70n", "WOBdMSoSvSkjyvS", "WRKZvCocsq", "amohCIBcNa", "WRmDWOldGSoq", "W6/dG3BcS1K", "dWlcTCkiW6u", "cSouWRZcKeG", "WOZdQCoZchC", "WO4HoqNcNW", "W4GVa8o4BW", "WRNcVCo6lx0", "W7ZcO8o4W7WE", "W4PrW7xdUmkU", "W7FdRq0"];
  return un = function() {
    return i;
  }, un();
}
function ZA(i, n, t, e, A) {
  return eA(t - 86, i);
}
function V(i, n, t, e, A) {
  return eA(i - -204, A);
}
class _d {
  constructor(n) {
    function t(e, A, o, r, g) {
      return eA(r - 594, g);
    }
    this[t(1286, 1377, 1381, 1268, "81v0") + t(1295, 1356, 1256, 1259, "gieP") + "d"] = n;
  }
  [fA(-49, -95, "7%gK") + "se"];
  [fA(-64, 22, "zV9M") + q(-288, -85, "NRkT", -111, -172) + NA(382, 487, 454, 366, "HAw(") + V(441, 332, 346, 368, "T50C")] = [q(-259, -261, "UNsB", -229, -201) + fA(-79, -130, "(sZ)") + "ic", q(12, -179, "RI7a", -222, -100) + V(448, 533, 462, 349, "sxTF") + "ic"];
  [NA(383, 355, 395, 472, "a4iC") + ZA("sQ6M", 743, 779)];
  async [V(316, 267, 194, 427, "te73")](n) {
    const t = await this[A(1569, 1552, "o1oD", 1412, 1488) + o(836, 906, ")^AK", 956, 852) + r(1460, 1342, "a&4J", 1497)](n);
    function e(a, I, C, s, B) {
      return q(a - 16, I - 194, a, s - 207, I - 1182);
    }
    function A(a, I, C, s, B) {
      return ZA(C, I - 484, B - 672);
    }
    function o(a, I, C, s, B) {
      return ZA(C, I - 291, B - 171);
    }
    await Promise[g(")ZB*", 1522, 1641, 1410, 1532) + g("T50C", 1769, 1748, 1582, 1653)]([this[r(1324, 1381, "TeFQ", 1218) + A(1398, 1321, "dJR]", 1281, 1355) + "d"][o(1018, 1015, "7ck@", 966, 943)](n), this[e("NVn#", 975, 1063, 934) + r(1401, 1316, "&imw", 1384) + "e"](t)]);
    function r(a, I, C, s, B) {
      return V(a - 942, I - 213, C - 208, s - 304, C);
    }
    function g(a, I, C, s, B) {
      return V(B - 1129, I - 417, C - 214, s - 484, a);
    }
    this[o(940, 873, "Fc&n", 814, 818) + A(1360, 1443, "7%gK", 1486, 1440) + A(1350, 1353, "T50C", 1253, 1286)]();
  }
  async [ZA("zV9M", 613, 668) + q(-184, -13, "zdnZ", -84, -68) + "se"](n) {
    function t(g, a, I, C, s) {
      return NA(g - 86, a - 92, I - 117, s - -148, a);
    }
    function e(g, a, I, C, s) {
      return fA(a - 1317, a - 399, C);
    }
    function A(g, a, I, C, s) {
      return q(g - 279, a - 311, I, C - 408, a - 439);
    }
    function o(g, a, I, C, s) {
      return NA(g - 118, a - 338, I - 344, a - 140, C);
    }
    function r(g, a, I, C, s) {
      return fA(C - 1498, a - 381, g);
    }
    try {
      if (r("[@Jz", 1450, 1467, 1409, 1378) === r("a&4J", 1432, 1380, 1331, 1303)) _0x282079[e(992, 1093, 974, "(sZ)", 1211) + e(1280, 1249, 1207, "gieP", 1339)](_0x56a7a5);
      else {
        const g = await fetch(n);
        if (!g.ok) {
          if (t(223, "oFG^", 399, 207, 330) !== A(575, 466, "81v0", 518, 502)) throw new Error(t(254, "L[k%", 317, 403, 279) + e(1080, 1097, 1214, "(sZ)", 1015) + o(560, 631, 577, "UNsB", 679) + t(419, "[@Jz", 322, 271, 323) + "d.");
          return _0x5c8d30 instanceof _0x286cf1 && _0x4a9f3f[r("T50C", 1460, 1430, 1439, 1492) + r(")ZB*", 1197, 1161, 1248, 1192)](_0x5770b2), null;
        }
        this[A(279, 385, "R4y5", 366, 391) + "se"] = await g[t(204, "y*tq", 49, 155, 139)]();
      }
    } catch (g) {
      t(37, "T50C", 129, 145, 103) === e(973, 1049, 1112, "y*tq") ? (this[A(209, 255, "sxTF", 366) + "se"] = void 0, console[r("7M*K", 1353, 1328, 1327)](g)) : (this[r("(**%", 1317, 1494, 1388) + "se"] = void 0, _0x39a115[r("T50C", 1389, 1410, 1418)](_0xc0a2f5));
    }
  }
  async [NA(427, 271, 187, 311, ")^AK") + fA(-188, -266, "dJR]") + "e"](n) {
    this[r(1201, 1096, 1073, "zV9M") + r(1119, 1083, 1106, ")LM)")] = void 0;
    function t(g, a, I, C, s) {
      return V(s - 629, a - 268, I - 252, C - 147, a);
    }
    if (!n)
      if (r(1168, 1066, 1047, "J*Cn") === r(920, 976, 966, "o1oD")) {
        _0xa84c00 instanceof _0xa9aa3 ? _0x54b7b4[r(891, 877, 766, "a4iC")]() : _0x5d498f instanceof _0x5c8337 && _0x37ee76[e(792, 1006, 1021, 911, "Fc&n")](_0x2b5f49);
        const g = {};
        g[r(1162, 1040, 943, "%E$g") + t(949, "te73", 1015, 1006, 987)] = !1, g[r(957, 1011, 907, "&imw") + "s"] = [], g[o("y*tq", 1074, 971) + o("%E$g", 1192, 1071)] = [], g[o("J&oa", 963, 1e3) + o("MSG[", 933, 882) + e(824, 798, 928, 907, "HAw(")] = void 0, g[A(1325, 1498, 1386, "81v0")] = function() {
        }, g[r(1115, 1065, 1181, "[@Jz") + e(761, 883, 905, 865, "Fc&n")] = "", this[t(1105, "NVn#", 1058, 1034, 1105) + t(1040, "Z@E^", 987, 892, 1017)] = new _0x547cc7(g);
      } else {
        console[A(1090, 1291, 1190, "sHHJ")](t(907, "J&oa", 1118, 962, 1024) + r(858, 865, 852, "sxTF") + r(883, 876, 943, "o1oD") + r(907, 965, 939, "J*Cn") + A(1361, 1376, 1251, "J*Cn")), this[e(1034, 1034, 999, 1035, "zV9M") + "se"] = void 0;
        return;
      }
    function e(g, a, I, C, s) {
      return fA(C - 1128, a - 130, s);
    }
    function A(g, a, I, C, s) {
      return V(I - 857, a - 172, I - 437, C - 20, C);
    }
    function o(g, a, I, C, s) {
      return ZA(g, a - 106, I - 284);
    }
    function r(g, a, I, C, s) {
      return fA(a - 1138, a - 397, C);
    }
    await this[t(1164, "[@Jz", 1110, 1098, 1117) + e(1107, 1106, 909, 991, "(sZ)") + "se"](n);
  }
  async [V(353, 330, 295, 272, "J&oa") + V(334, 411, 297, 322, "NVn#") + q(0, -94, "TeFQ", -3, -85)](n) {
    const t = await fetch("" + n + this[o(156, 277, 175, "7ck@") + o(340, 336, 249, "%E$g") + g(638, 523, 758, ")ZB*") + g(602, 621, 631, "7%gK")][0]);
    function e(I, C, s, B, E) {
      return fA(E - -202, C - 245, C);
    }
    function A(I, C, s, B, E) {
      return NA(I - 63, C - 241, s - 296, B - 820, s);
    }
    function o(I, C, s, B, E) {
      return q(I - 272, C - 225, B, B - 99, C - 398);
    }
    function r(I, C, s, B, E) {
      return q(I - 164, C - 236, s, B - 251, E - 571);
    }
    function g(I, C, s, B, E) {
      return q(I - 243, C - 255, B, B - 441, I - 714);
    }
    const a = t.ok ? 0 : 4078 + 4077 * -1;
    return "" + n + this[r(691, 534, "Z@E^", 585, 599) + A(1080, 1006, "te73", 1113) + e(-417, "if[w", -294, -377, -356) + r(531, 669, "G&0A", 488, 577)][a];
  }
  [ZA("G&0A", 815, 792) + NA(388, 435, 549, 451, "zdnZ") + "s"](n) {
    function t(A, o, r, g, a) {
      return V(a - 476, o - 282, r - 472, g - 404, o);
    }
    function e(A, o, r, g, a) {
      return fA(A - 1325, o - 2, a);
    }
    n[e(1121, 1180, 1071, 1072, "o1oD") + "ch"]((A) => console[t(954, "te73", 1085, 1096, 987)](A));
  }
  [V(323, 293, 217, 399, "UNsB") + NA(475, 320, 424, 410, ")LM)") + ZA("sxTF", 758, 796)](n) {
    function t(e, A, o, r, g) {
      return NA(e - 462, A - 232, o - 274, g - 1176, A);
    }
    n[t(1540, "zdnZ", 1679, 1628, 1616) + "ch"]((e) => console[t(1410, "J*Cn", 1481, 1485, 1505)](e));
  }
  [ZA("sQ6M", 774, 745) + q(-90, -266, "ys6*", -260, -155)]() {
    function n(e, A, o, r, g) {
      return q(e - 344, A - 468, r, r - 379, A - 1314);
    }
    function t(e, A, o, r, g) {
      return V(e - -365, A - 49, o - 189, r - 263, r);
    }
    return window[n(1112, 1138, 1020, "&imw") + n(1056, 1181, 1196, "HAw(")][n(1291, 1219, 1264, "v4N&") + t(57, 104, 100, "81v0")];
  }
  [q(-92, -205, "(**%", -246, -204) + q(-99, -290, "sxTF", -203, -202) + q(-108, -106, "Z@E^", -89, -77)]() {
    function n(r, g, a, I, C) {
      return V(I - -407, g - 449, a - 303, I - 3, g);
    }
    function t(r, g, a, I, C) {
      return V(a - 691, g - 112, a - 486, I - 104, g);
    }
    function e(r, g, a, I, C) {
      return q(r - 268, g - 140, g, I - 227, a - 1388);
    }
    function A(r, g, a, I, C) {
      return fA(a - 1158, g - 439, g);
    }
    function o(r, g, a, I, C) {
      return ZA(g, g - 202, I - -776);
    }
    try {
      if (n(-23, "WRU@", 83, 46, 21) === n(-57, "&imw", 104, 5, -70)) {
        _0x4fef24[A(829, "zdnZ", 893, 964, 1007)](A(927, "Z@E^", 962, 1051, 892) + o(-171, "y*tq", -164, -113, -177) + e(1234, "MSG[", 1324, 1413, 1204) + t(1169, "v4N&", 1140, 1069, 1204) + o(160, "gieP", -47, 52, -17)), this[t(1093, "o1oD", 1005, 1115, 1053) + "se"] = void (7008 + -1 * -268 + -1819 * 4);
        return;
      } else {
        if (!this[o(71, ")^AK", -91, -40, -118) + "se"]) {
          if (e(1148, "hocn", 1190, 1108, 1104) !== t(1034, "J*Cn", 1029, 987, 990)) throw new Ci(A(994, "WRU@", 971, 851, 1048) + t(1151, ")LM)", 1228, 1129, 1115) + t(1148, "zdnZ", 1030, 1133, 1068) + n(-177, "81v0", 23, -66, -84) + ".");
          return _0xd75ecc[t(1209, "WRU@", 1194, 1097, 1306) + A(1029, "v4N&", 1082, 957, 1043)][o(-214, "y*tq", -81, -100, -144) + n(123, "UNsB", 25, 73, 119)];
        }
        if (!this[t(928, "(sZ)", 1031, 1078, 1030) + n(26, "sHHJ", -75, 14, 32) + "d"][n(-97, "zdnZ", -66, 27, -83) + n(63, "sxTF", -145, -43, -18) + e(1304, "7M*K", 1182, 1208, 1104) + "ed"]()) {
          if (n(59, "7M*K", -91, 0, 69) === t(1110, "R4y5", 1038, 1016, 965)) throw new Ci(t(1181, "TeFQ", 1135, 1132, 1072) + e(1210, "v4N&", 1290, 1303, 1343) + o(-251, "81v0", -271, -169, -177) + o(55, "@]m9", -49, 19, 92) + ".");
          return _0x567b0a[o(22, "NRkT", 105, -20, 49)](this[t(1210, "zdnZ", 1189, 1287, 1219) + "se"]);
        }
        this[A(895, "7ck@", 1017, 994, 1041) + A(1163, "sQ6M", 1075, 1109, 996)] = new fg(Yd(this[o(-254, "WRU@", -189, -150, -218) + "se"], this[A(1028, "iugB", 1093, 1199, 1109) + n(-111, "NVn#", 9, -80, -153)]())), this[e(1365, "(**%", 1259, 1278, 1339) + e(1377, "oFG^", 1370, 1273, 1381) + "s"](this[o(159, "%E$g", 180, 57, 60) + t(1034, "te73", 1123, 1085, 1057)][o(107, "@]m9", 100, 34, 33) + "s"]), this[n(-47, "T50C", -53, 64, -51) + e(1406, "p*Tk", 1347, 1426, 1258) + t(1147, "v4N&", 1033, 1008, 1096)](this[o(96, "(**%", -9, 33, 62) + o(-174, "o1oD", -169, -96, -16)][o(62, "if[w", -76, 39, -67) + A(1168, "zV9M", 1043, 1011, 991)]);
      }
    } catch (r) {
      if (t(1030, "7%gK", 1104, 1048) === o(-268, "iK6Z", -189, -165)) {
        if (r instanceof Ci) e(1251, "Z@E^", 1314, 1436) === t(1059, "NVn#", 1166, 1154) ? _0x7ba9d6[A(1138, ")ZB*", 1081) + "ch"]((a) => _0xd77a82[e(1198, "oFG^", 1265, 1315)](a)) : r[t(926, "Fc&n", 996, 998)]();
        else if (r instanceof Error) {
          if (o(-78, "(sZ)", -238, -174) === t(1171, "sHHJ", 1203, 1286)) throw new _0x246221(n(31, "HAw(", 150, 44) + o(-8, "7M*K", -119, -120) + A(1127, "Fc&n", 1102) + o(-220, "7%gK", -147, -171) + ".");
          console[t(1155, ")^AK", 1129, 1210)](r);
        }
        const g = {};
        g[e(1367, "J&oa", 1299, 1282) + t(1014, "iK6Z", 1037, 1110)] = !1, g[t(1186, "sQ6M", 1236, 1265) + "s"] = [], g[t(1296, "81v0", 1172, 1296) + t(1095, "Fc&n", 1149, 1115)] = [], g[A(977, "L[k%", 988) + e(1429, ")^AK", 1327, 1248) + t(1182, "a&4J", 1068, 970)] = void 0, g[t(977, "te73", 1020, 951)] = function() {
        }, g[A(1105, "TeFQ", 1125) + t(933, "7%gK", 1050, 1044)] = "", this[t(1132, "o1oD", 1200, 1306) + t(920, "J&oa", 1022, 935)] = new fg(g);
      } else return null;
    }
  }
  [NA(406, 372, 381, 348, "WRU@") + fA(-32, -18, "&imw") + V(433, 541, 463, 420, ")ZB*") + "t"]() {
    function n(e, A, o, r, g) {
      return ZA(e, A - 432, A - -1063);
    }
    function t(e, A, o, r, g) {
      return V(e - 111, A - 17, o - 51, r - 267, g);
    }
    return this[n("oFG^", -417) + t(465, 361, 352, 458, "RI7a")];
  }
  [ZA("o1oD", 568, 634) + NA(499, 496, 487, 397, "HAw(") + "se"]() {
    if (!this[t(346, 387, 324, "7%gK") + "se"]) return t(254, 234, 207, "7%gK") === t(430, 408, 309, "a&4J") ? null : this[e(486, 541, 484, ")^AK") + n(1110, 1169, 1293, "zV9M")];
    function n(o, r, g, a, I) {
      return q(o - 405, r - 48, a, a - 329, r - 1286);
    }
    function t(o, r, g, a, I) {
      return V(r - -136, r - 47, g - 460, a - 66, a);
    }
    function e(o, r, g, a, I) {
      return fA(g - 676, r - 59, a);
    }
    function A(o, r, g, a, I) {
      return fA(g - 266, r - 55, r);
    }
    try {
      if (e(626, 484, 571, "G&0A", 591) === e(735, 629, 640, "81v0", 592)) return JSON[A(1, "J*Cn", 66, 75, 53)](this[e(659, 710, 638, "NRkT", 628) + "se"]);
      _0x40500e[n(1248, 1178, 1217, "NRkT", 1235)]();
    } catch (o) {
      return n(1024, 1078, 1140, "(sZ)") === e(596, 656, 556, "HAw(") ? this[A(279, "iugB", 166) + t(126, 227, 244, ")^AK") + "se"]()?.[t(166, 229, 112, "&imw") + t(378, 272, 294, "a&4J")]?.[e(572, 522, 560, "TeFQ")] || [] : (o instanceof Error && (A(198, "iK6Z", 181) === e(462, 504, 577, "(sZ)") ? y[t(112, 209, 126, "MSG[") + A(27, "NRkT", 13)](o) : this[n(1105, 1206, 1260, "sQ6M") + e(437, 343, 439, "ys6*") + "d"] = _0x314e9b), null);
    }
  }
  [V(491, 419, 580, 522, "NVn#") + NA(387, 408, 234, 319, ")ZB*")]() {
    function n(o, r, g, a, I) {
      return fA(g - 242, r - 306, r);
    }
    function t(o, r, g, a, I) {
      return NA(o - 102, r - 197, g - 215, g - -39, r);
    }
    const e = this[A("7ck@", 1119, 1099, 1194, 1080) + t(335, "NRkT", 300) + "se"]();
    function A(o, r, g, a, I) {
      return q(o - 425, r - 13, o, a - 197, I - 1224);
    }
    return e?.[n(-14, "iK6Z", 93) + A(")LM)", 1057, 1162, 1176, 1157)]?.[t(545, "dJR]", 425)] || [];
  }
  [fA(-108, 5, "RI7a") + q(-209, -147, "WRU@", -213, -154) + V(420, 326, 302, 301, "zdnZ")]() {
    const n = this[e(44, "zV9M", 87, -21) + e(109, "zdnZ", 39, 46) + "se"]();
    function t(o, r, g, a, I) {
      return NA(o - 467, r - 333, g - 478, a - 421, r);
    }
    function e(o, r, g, a, I) {
      return q(o - 343, r - 383, r, a - 296, g - 107);
    }
    function A(o, r, g, a, I) {
      return V(o - 19, r - 229, g - 57, a - 156, a);
    }
    return n?.[t(812, "T50C", 624, 701) + A(546, 600, 551, "if[w")]?.[A(419, 380, 330, "a4iC") + e(-104, "Z@E^", -84, -122)];
  }
}
class Ur extends _d {
  static _instance;
  static getInstance() {
    if (!this._instance) {
      const n = new Kd();
      this._instance = new Ur(n);
    }
    return this._instance;
  }
}
const jd = ({ children: i }) => {
  const n = jA(null);
  return KB(n, ce.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ w(uC, { ref: n, children: i });
}, qd = ({ configuration: i }) => i ? /* @__PURE__ */ w(CC, { target: i.styleTarget, children: /* @__PURE__ */ w(
  IB,
  {
    assetsDirectoryPath: i.assetsDirectoryPath,
    bramble: Ur.getInstance(),
    children: /* @__PURE__ */ w(
      xB,
      {
        transactionCountingToken: i.transactionCountingToken,
        transactionType: Ke.FACE,
        children: /* @__PURE__ */ w(
          uB,
          {
            value: Fd({
              onError: i.onError
            }),
            children: /* @__PURE__ */ w(vB, { analytics: Od, apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt", children: /* @__PURE__ */ w(fB, { children: /* @__PURE__ */ w(Nd, { cameraConfiguration: i.camera, children: /* @__PURE__ */ w(jd, { children: /* @__PURE__ */ w(Gd, { ...i }) }) }) }) })
          }
        )
      }
    )
  }
) }) : null;
yc(qd, "x-dot-face-auto-capture", ["configuration"]);
