var qt, R, lg, Pe, Yr, ug, hg, fg, Br, di, li, pg, Ht = {}, mg = [], II = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Vt = Array.isArray;
function ge(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function Qr(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function SA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > 11765 + -3921 * 3 && (r.children = arguments.length > 1 * 1303 + 8919 + -10219 ? qt.call(arguments, -13265 + 13267 * 1) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] === void 0 && (r[o] = i.defaultProps[o]);
  return Jt(i, r, e, A, null);
}
function Jt(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++lg, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && R.vnode != null && R.vnode(r), r;
}
function cI() {
  var i = {};
  return i.current = null, i;
}
function jA(i) {
  return i.children;
}
function $A(i, n) {
  this.props = i, this.context = n;
}
function Bt(i, n) {
  if (n == null) return i.__ ? Bt(i.__, i.__i + (-15132 + -409 * -37)) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? Bt(i) : null;
}
function yg(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = 1 * 2706 + 622 + -3328; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return yg(i);
  }
}
function ui(i) {
  (!i.__d && (i.__d = !0) && Pe.push(i) && !Wo.__r++ || Yr != R.debounceRendering) && ((Yr = R.debounceRendering) || ug)(Wo);
}
function Wo() {
  for (var i, n, t, e, A, o, r, g = 7298 + -636 * 13 + 971; Pe.length; ) Pe.length > g && Pe.sort(hg), i = Pe.shift(), g = Pe.length, i.__d && (t = void 0, e = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = ge({}, e)).__v = e.__v + (2 * 3467 + -2671 + -4262), R.vnode && R.vnode(t), Er(n.__P, t, e, n.__n, n.__P.namespaceURI, 828 * -1 + 7143 + -6283 & e.__u ? [A] : null, o, A ?? Bt(e), !!(32 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, bg(o, t, r), e.__e = e.__ = null, t.__e != A && yg(t)));
  Wo.__r = 2118 + -3 * 706;
}
function wg(i, n, t, e, A, o, r, g, a, I, c) {
  var s, Q, E, x, B, l, h, f = e && e.__k || mg, p = n.length;
  for (a = CI(t, n, f, a, p), s = -4632 + -6 * -772; s < p; s++) (E = t.__k[s]) != null && (Q = E.__i == -1 ? Ht : f[E.__i] || Ht, E.__i = s, l = Er(i, E, Q, A, o, r, g, a, I, c), x = E.__e, E.ref && Q.ref != E.ref && (Q.ref && xr(Q.ref, null, E), c.push(E.ref, E.__c || x, E)), B == null && x != null && (B = x), (h = !!(3975 + -11 * 361 & E.__u)) || Q.__k === E.__k ? a = Dg(E, a, i, h) : typeof E.type == "function" && l !== void 0 ? a = l : x && (a = x.nextSibling), E.__u &= -7);
  return t.__e = B, a;
}
function CI(i, n, t, e, A) {
  var o, r, g, a, I, c = t.length, s = c, Q = -1 * 3707 + 4689 * 1 + 982 * -1;
  for (i.__k = new Array(A), o = 0; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? r = i.__k[o] = Jt(null, r, null, null, null) : Vt(r) ? r = i.__k[o] = Jt(jA, { children: r }, null, null, null) : r.constructor == null && r.__b > -14938 + -7469 * -2 ? r = i.__k[o] = Jt(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : i.__k[o] = r, a = o + Q, r.__ = i, r.__b = i.__b + (-393 * -1 + -5457 + 5065), g = null, (I = r.__i = BI(r, t, a, s)) != -1 && (s--, (g = t[I]) && (g.__u |= 2508 + 1 * -2506)), g == null || g.__v == null ? (I == -1 && (A > c ? Q-- : A < c && Q++), typeof r.type != "function" && (r.__u |= 4020 + 3932 * 2 + -11880)) : I != a && (I == a - 1 ? Q-- : I == a + (1 * 733 + 2427 + -3159) ? Q++ : (I > a ? Q-- : Q++, r.__u |= 4))) : i.__k[o] = null;
  if (s)
    for (o = 0; o < c; o++) (g = t[o]) != null && -2333 * 1 + -8691 * 1 + 11024 == (-8004 + -1974 * 1 + 9980 & g.__u) && (g.__e == e && (e = Bt(g)), Sg(g, g));
  return e;
}
function Dg(i, n, t, e) {
  var A, o;
  if (typeof i.type == "function") {
    for (A = i.__k, o = -239 + 1 * -3767 + 2003 * 2; A && o < A.length; o++) A[o] && (A[o].__ = i, n = Dg(A[o], n, t, e));
    return n;
  }
  i.__e != n && (e && (n && i.type && !n.parentNode && (n = Bt(i)), t.insertBefore(i.__e, n || null)), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && n.nodeType == 8);
  return n;
}
function he(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || (Vt(i) ? i.some(function(t) {
    he(t, n);
  }) : n.push(i)), n;
}
function BI(i, n, t, e) {
  var A, o, r, g = i.key, a = i.type, I = n[t], c = I != null && (5216 + 3 * -1738 & I.__u) == 0;
  if (I === null && g == null || c && g == I.key && a == I.type) return t;
  if (e > (c ? 8864 + -8863 * 1 : -1 * 473 + 7781 + -7308)) {
    for (A = t - 1, o = t + (-5458 + -1 * -5459); A >= -1451 * 5 + -7872 + 2161 * 7 || o < n.length; ) if ((I = n[r = A >= 7423 + -1 * 7423 ? A-- : o++]) != null && (2 & I.__u) == 0 && g == I.key && a == I.type) return r;
  }
  return -1;
}
function Tr(i, n, t) {
  n[-7796 + -1949 * -4] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || II.test(n) ? t : t + "px";
}
function Ao(i, n, t, e, A) {
  var o, r;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || Tr(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || Tr(i.style, n, t[n]);
    }
  else if (n[9749 * -1 + -2200 + 11949] == "o" && n[-7917 + 1 * 7918] == "n") o = n != (n = n.replace(fg, "$1")), r = n.toLowerCase(), n = r in i || n == "onFocusOut" || n == "onFocusIn" ? r.slice(-1 * -1109 + -16 + -1091) : n.slice(671 * 3 + 1744 + -3755), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = Br, i.addEventListener(n, o ? li : di, o)) : i.removeEventListener(n, o ? li : di, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[6079 * 1 + 6647 + 12722 * -1] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && 2 * 2316 + 4269 + -8900 == t ? "" : t));
  }
}
function Pr(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = Br++;
      else if (n.t < t.u) return;
      return t(R.event ? R.event(n) : n);
    }
  };
}
function Er(i, n, t, e, A, o, r, g, a, I) {
  var c, s, Q, E, x, B, l, h, f, p, k, w, D, b, J, H, oe, UA = n.type;
  if (n.constructor != null) return null;
  4219 * 1 + 6327 + 2 * -5209 & t.__u && (a = !!(1 * -6077 + -2 * -4783 + -1 * 3457 & t.__u), o = [g = n.__e = t.__e]), (c = R.__b) && c(n);
  A: if (typeof UA == "function") try {
    if (h = n.props, f = "prototype" in UA && UA.prototype.render, p = (c = UA.contextType) && e[c.__c], k = c ? p ? p.props.value : c.__ : e, t.__c ? l = (s = n.__c = t.__c).__ = s.__E : (f ? n.__c = s = new UA(h, k) : (n.__c = s = new $A(h, k), s.constructor = UA, s.render = EI), p && p.sub(s), s.state || (s.state = {}), s.__n = e, Q = s.__d = !(7732 + -1 * 5398 + -2334), s.__h = [], s._sb = []), f && s.__s == null && (s.__s = s.state), f && UA.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = ge({}, s.__s)), ge(s.__s, UA.getDerivedStateFromProps(h, s.__s))), E = s.props, x = s.state, s.__v = n, Q) f && UA.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), f && s.componentDidMount != null && s.__h.push(s.componentDidMount);
    else {
      if (f && UA.getDerivedStateFromProps == null && h !== E && s.componentWillReceiveProps != null && s.componentWillReceiveProps(h, k), n.__v == t.__v || !s.__e && s.shouldComponentUpdate != null && !(-583 + 1689 * 1 + -1105) === s.shouldComponentUpdate(h, s.__s, k)) {
        for (n.__v != t.__v && (s.props = h, s.state = s.__s, s.__d = !(-7715 * -1 + 9593 + -5769 * 3)), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(pe) {
          pe && (pe.__ = n);
        }), w = 0; w < s._sb.length; w++) s.__h.push(s._sb[w]);
        s._sb = [], s.__h.length && r.push(s);
        break A;
      }
      s.componentWillUpdate != null && s.componentWillUpdate(h, s.__s, k), f && s.componentDidUpdate != null && s.__h.push(function() {
        s.componentDidUpdate(E, x, B);
      });
    }
    if (s.context = k, s.props = h, s.__P = i, s.__e = !(-1 * -4249 + -1497 + -2751), D = R.__r, b = 3686 + -2011 * -2 + -7708, f) {
      for (s.state = s.__s, s.__d = !(10371 + -10 * 1037), D && D(n), c = s.render(s.props, s.state, s.context), J = 9530 * -1 + 510 + 9020 * 1; J < s._sb.length; J++) s.__h.push(s._sb[J]);
      s._sb = [];
    } else do
      s.__d = !(1 * 4430 + -5 * 1797 + 268 * 17), D && D(n), c = s.render(s.props, s.state, s.context), s.state = s.__s;
    while (s.__d && ++b < -8477 + -16 * -545 + -218);
    s.state = s.__s, s.getChildContext != null && (e = ge(ge({}, e), s.getChildContext())), f && !Q && s.getSnapshotBeforeUpdate != null && (B = s.getSnapshotBeforeUpdate(E, x)), H = c, c != null && c.type === jA && c.key == null && (H = kg(c.props.children)), g = wg(i, Vt(H) ? H : [H], n, t, e, A, o, r, g, a, I), s.base = n.__e, n.__u &= -(3999 + -1 * 7853 + 4015), s.__h.length && r.push(s), l && (s.__E = s.__ = null);
  } catch (pe) {
    if (n.__v = null, a || o != null)
      if (pe.then) {
        for (n.__u |= a ? -28 * -328 + -5294 + -3730 : 9789 + -1345 * 1 + -8316; g && -2536 + 636 * 4 == g.nodeType && g.nextSibling; ) g = g.nextSibling;
        o[o.indexOf(g)] = null, n.__e = g;
      } else {
        for (oe = o.length; oe--; ) Qr(o[oe]);
        hi(n);
      }
    else n.__e = t.__e, n.__k = t.__k, pe.then || hi(n);
    R.__e(pe, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : g = n.__e = QI(t.__e, n, t, e, A, o, r, a, I);
  return (c = R.diffed) && c(n), 128 & n.__u ? void 0 : g;
}
function hi(i) {
  i && i.__c && (i.__c.__e = !0), i && i.__k && i.__k.forEach(hi);
}
function bg(i, n, t) {
  for (var e = -5745 + -2 * 4944 + 15633; e < t.length; e++) xr(t[e], t[++e], t[++e]);
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
function kg(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > 1 * -2155 + 1 * 4519 + -2 * 1182 ? i : Vt(i) ? i.map(kg) : ge({}, i);
}
function QI(i, n, t, e, A, o, r, g, a) {
  var I, c, s, Q, E, x, B, l = t.props || Ht, h = n.props, f = n.type;
  if (f == "svg" ? A = "http://www.w3.org/2000/svg" : f == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (I = -6007 + 6007 * 1; I < o.length; I++) if ((E = o[I]) && "setAttribute" in E == !!f && (f ? E.localName == f : E.nodeType == 3)) {
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
    if (o = o && qt.call(i.childNodes), !g && o != null)
      for (l = {}, I = 1391 + 1391 * -1; I < i.attributes.length; I++) l[(E = i.attributes[I]).name] = E.value;
    for (I in l) if (E = l[I], I != "children") {
      if (I == "dangerouslySetInnerHTML") s = E;
      else if (!(I in h)) {
        if (I == "value" && "defaultValue" in h || I == "checked" && "defaultChecked" in h) continue;
        Ao(i, I, null, E, A);
      }
    }
    for (I in h) E = h[I], I == "children" ? Q = E : I == "dangerouslySetInnerHTML" ? c = E : I == "value" ? x = E : I == "checked" ? B = E : g && typeof E != "function" || l[I] === E || Ao(i, I, E, l[I], A);
    if (c) g || s && (c.__html == s.__html || c.__html == i.innerHTML) || (i.innerHTML = c.__html), n.__k = [];
    else if (s && (i.innerHTML = ""), wg(n.type == "template" ? i.content : i, Vt(Q) ? Q : [Q], n, t, e, f == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[0] : t.__k && Bt(t, -1 * -5022 + -899 + -4123), g, a), o != null)
      for (I = o.length; I--; ) Qr(o[I]);
    g || (I = "value", f == "progress" && x == null ? i.removeAttribute("value") : x != null && (x !== i[I] || f == "progress" && !x || f == "option" && x != l[I]) && Ao(i, I, x, l[I], A), I = "checked", B != null && B != i[I] && Ao(i, I, B, l[I], A));
  }
  return i;
}
function xr(i, n, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && n == null || (i.__u = i(n));
    } else i.current = n;
  } catch (A) {
    R.__e(A, t);
  }
}
function Sg(i, n, t) {
  var e, A;
  if (R.unmount && R.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || xr(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      R.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = 4169 * -2 + -1 * 8178 + 16516; A < e.length; A++) e[A] && Sg(e[A], n, t || typeof i.type != "function");
  t || Qr(i.__e), i.__c = i.__ = i.__e = void 0;
}
function EI(i, n, t) {
  return this.constructor(i, t);
}
function Re(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), R.__ && R.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], Er(n, i = (!e && t || n).__k = SA(jA, null, [i]), A || Ht, Ht, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? qt.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), bg(o, i, r);
}
function dr(i, n) {
  Re(i, n, dr);
}
function lr(i, n, t) {
  var e, A, o, r, g = ge({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : g[o] = n[o] === void 0 && r != null ? r[o] : n[o];
  return arguments.length > -5708 * 1 + 9400 + -3690 && (g.children = arguments.length > 3 ? qt.call(arguments, -8561 + -1 * -8563) : t), Jt(i.type, g, e || i.key, A || i.ref, null);
}
function fe(i) {
  function n(t) {
    var e, A;
    return this.getChildContext || (e = /* @__PURE__ */ new Set(), (A = {})[n.__c] = this, this.getChildContext = function() {
      return A;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value != o.value && e.forEach(function(r) {
        r.__e = !0, ui(r);
      });
    }, this.sub = function(o) {
      e.add(o);
      var r = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        e && e.delete(o), r && r.call(o);
      };
    }), t.children;
  }
  return n.__c = "__cC" + pg++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
qt = mg.slice, R = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (g) {
    i = g;
  }
  throw i;
} }, lg = -5229 + -1 * -5229, $A.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = ge({}, this.state), typeof i == "function" && (i = i(ge({}, t), this.props)), i && ge(t, i), i != null && this.__v && (n && this._sb.push(n), ui(this));
}, $A.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), ui(this));
}, $A.prototype.render = jA, Pe = [], ug = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, hg = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, Wo.__r = -3592 + 2904 * 2 + 2 * -1108, fg = /(PointerCapture)$|Capture$/i, Br = 4625 + -1 * 4625, di = Pr(!1), li = Pr(!0), pg = 1544 * -5 + -6123 + 13843;
function Lo() {
  return Lo = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }, Lo.apply(this, arguments);
}
function Gg(i, n) {
  if (i == null) return {};
  var t, e, A = {}, o = Object.keys(i);
  for (e = 1 * -6779 + -6964 * 1 + -9 * -1527; e < o.length; e++) n.indexOf(t = o[e]) >= 0 || (A[t] = i[t]);
  return A;
}
var xI = ["context", "children"], dI = ["useFragment"];
function lI(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = function() {
    hI.call(this, e);
  }, A.prototype.attributeChangedCallback = fI, A.prototype.disconnectedCallback = pI, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, i.formAssociated && (A.formAssociated = !0), t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom ? this._vdom.props[o] : this._props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r);
      var g = typeof r;
      r != null && g !== "string" && g !== "boolean" && g !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A), A;
}
function uI(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = Gg(i, xI);
  return lr(n, t);
}
function hI(i) {
  var n = {};
  n.detail = {}, n.bubbles = !0, n.cancelable = !0;
  var t = new CustomEvent("_preact", n);
  this.dispatchEvent(t), this._vdom = SA(uI, Lo({}, this._props, { context: t.detail.context }), Rg(this, this._vdomComponent, i)), (this.hasAttribute("hydrate") ? dr : Re)(this._vdom, this._root);
}
function Ng(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function fI(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[Ng(i)] = t, this._vdom = lr(this._vdom, e), Re(this._vdom, this._root);
  }
}
function pI() {
  Re(this._vdom = null, this._root);
}
function Hr(i, n) {
  var t = this, e = i.useFragment, A = Gg(i, dI);
  return SA(e ? jA : "slot", Lo({}, A, { ref: function(o) {
    o ? (t.ref = o, t._listener || (t._listener = function(r) {
      r.stopPropagation(), r.detail.context = n;
    }, o.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Rg(i, n, t) {
  if (1597 * 5 + -7928 + -54 === i.nodeType) return i.data;
  if (907 * 4 + -2 * -3457 + 10541 * -1 !== i.nodeType) return null;
  var e = [], A = {}, o = 0, r = i.attributes, g = i.childNodes;
  for (o = r.length; o--; ) r[o].name !== "slot" && (A[r[o].name] = r[o].value, A[Ng(r[o].name)] = r[o].value);
  for (o = g.length; o--; ) {
    var a = Rg(g[o], null, t), I = g[o].slot;
    I ? A[I] = SA(Hr, { name: I }, a) : e[o] = a;
  }
  var c = !(!t || !t.shadow), s = n ? SA(Hr, { useFragment: !c }, e) : e;
  return !c && n && (i.innerHTML = ""), SA(n || i.nodeName.toLowerCase(), A, s);
}
var mI = -9853 + 9853 * 1;
function y(i, n, t, e, A, o) {
  n || (n = {});
  var r, g, a = n;
  if ("ref" in a)
    for (g in a = {}, n) g == "ref" ? r = n[g] : a[g] = n[g];
  var I = {};
  I.type = i, I.props = a, I.key = t, I.ref = r, I.__k = null, I.__ = null, I.__b = 0, I.__e = null, I.__c = null, I.constructor = void 0, I.__v = --mI, I.__i = -1, I.__u = 0, I.__source = A, I.__self = o;
  var c = I;
  if (typeof i == "function" && (r = i.defaultProps))
    for (g in r) a[g] === void 0 && (a[g] = r[g]);
  return R.vnode && R.vnode(c), c;
}
class m extends Error {
  cause;
  constructor(n, t) {
    super(n), this.name = "AutoCaptureError", this.cause = t;
  }
  static logError(n) {
  }
  static fromCameraError(n) {
    if (this.logError(n), n instanceof m) return n;
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
    return new m(t, n);
  }
  static fromError(n) {
    if (this.logError(n), n instanceof m) return n;
    const t = "An unexpected error has occurred";
    return new m(t);
  }
}
const Io = {};
Io.CONTINUE_DETECTION = "continue-detection", Io.SWITCH_CAMERA = "switch-camera", Io.TOGGLE_MIRROR = "toggle-mirror";
const Oo = Io, fi = {};
fi.FIRST_FRAME = "first-frame", fi.FIRST_VALID_FRAME = "first-valid-frame";
const co = fi, Fg = {};
Fg.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const pi = Fg;
var vg = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTION_CHANGED = "document-auto-capture:detection-changed", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(vg || {}), yI = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTION_CHANGED = "face-auto-capture:detection-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(yI || {}), wI = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(wI || {});
const xe = {};
xe.DETECTION_CHANGED = "smile-auto-capture:detection-changed", xe.CAMERA_PROPS_CHANGED = "smile-auto-capture:camera-props-changed", xe.CONTROL = "smile-auto-capture:control", xe.INSTRUCTION_CHANGED = "smile-auto-capture:instruction-changed", xe.INSTRUCTION_ESCALATED = "smile-auto-capture:instruction-escalated", xe.VIDEO_ELEMENT_SIZE = "smile-auto-capture:video-element-size", xe.STATE_CHANGED = "smile-auto-capture:state-changed", xe.PHASE_CHANGED = "smile-auto-capture:phase-changed";
const ce = xe;
var DI = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTION_CHANGED = "palm-capture:detection-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(DI || {}), bI = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(bI || {});
const de = {};
de.CANDIDATE_SELECTION = "candidate_selection", de.DOCUMENT_CENTERING = "document_centering", de.DOCUMENT_NOT_PRESENT = "document_not_present", de.DOCUMENT_TOO_FAR = "document_too_far", de.SHARPNESS_TOO_LOW = "sharpness_too_low", de.BRIGHTNESS_TOO_LOW = "brightness_too_low", de.BRIGHTNESS_TOO_HIGH = "brightness_too_high", de.HOTSPOTS_PRESENT = "hotspots_present";
const Me = de, We = {};
We.isPresent = Me.DOCUMENT_NOT_PRESENT, We.isNotSmall = Me.DOCUMENT_TOO_FAR, We.isNotOutOfBounds = Me.DOCUMENT_CENTERING, We.isSharp = Me.SHARPNESS_TOO_LOW, We.isNotDim = Me.BRIGHTNESS_TOO_LOW, We.isNotBright = Me.BRIGHTNESS_TOO_HIGH, We.noHotspots = Me.HOTSPOTS_PRESENT;
const rt = {};
rt.LOADING = "loading", rt.ERROR = "error", rt.WAITING = "waiting", rt.RUNNING = "running", rt.COMPLETE = "complete";
const O = rt, Mg = {};
Mg.EYE_NOT_PRESENT = "eye_not_present";
const Qt = Mg, wA = {};
wA.CANDIDATE_SELECTION = "candidate_selection", wA.FACE_TOO_CLOSE = "face_too_close", wA.FACE_TOO_FAR = "face_too_far", wA.FACE_CENTERING = "face_centering", wA.FACE_NOT_PRESENT = "face_not_present", wA.SHARPNESS_TOO_LOW = "sharpness_too_low", wA.BRIGHTNESS_TOO_LOW = "brightness_too_low", wA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", wA.DEVICE_PITCHED = "device_pitched", wA.LEFT_EYE_NOT_PRESENT = "left_" + Qt.EYE_NOT_PRESENT, wA.RIGHT_EYE_NOT_PRESENT = "right_" + Qt.EYE_NOT_PRESENT, wA.MOUTH_NOT_PRESENT = "mouth_not_present", wA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", wA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const FA = wA, LA = {};
LA.isPresent = FA.FACE_NOT_PRESENT, LA.isNotPitched = FA.DEVICE_PITCHED, LA.isNotSmall = FA.FACE_TOO_FAR, LA.isNotLarge = FA.FACE_TOO_CLOSE, LA.isNotOutOfBounds = FA.FACE_CENTERING, LA.isNotDim = FA.BRIGHTNESS_TOO_LOW, LA.isNotBright = FA.BRIGHTNESS_TOO_HIGH, LA.isSharp = FA.SHARPNESS_TOO_LOW, LA.isLeftEyePresent = FA.LEFT_EYE_NOT_PRESENT, LA.isRightEyePresent = FA.RIGHT_EYE_NOT_PRESENT, LA.isMouthPresent = FA.MOUTH_NOT_PRESENT, LA.isMouthScoreNotTooHigh = FA.MOUTH_SCORE_TOO_HIGH, LA.isMouthScoreNotTooLow = FA.MOUTH_SCORE_TOO_LOW;
var kI = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(kI || {});
const iA = {};
iA.CANDIDATE_SELECTION = "candidate_selection", iA.FACE_TOO_CLOSE = "face_too_close", iA.FACE_TOO_FAR = "face_too_far", iA.FACE_CENTERING = "face_centering", iA.FACE_NOT_PRESENT = "face_not_present", iA.SHARPNESS_TOO_LOW = "sharpness_too_low", iA.BRIGHTNESS_TOO_LOW = "brightness_too_low", iA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", iA.DEVICE_PITCHED = "device_pitched", iA.LEFT_EYE_NOT_PRESENT = "left_" + Qt.EYE_NOT_PRESENT, iA.RIGHT_EYE_NOT_PRESENT = "right_" + Qt.EYE_NOT_PRESENT, iA.MOUTH_NOT_PRESENT = "mouth_not_present", iA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", iA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low", iA.SMILE = "smile", iA.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", iA.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const rA = iA, vA = {};
vA.isPresent = rA.FACE_NOT_PRESENT, vA.isNotPitched = rA.DEVICE_PITCHED, vA.isNotSmall = rA.FACE_TOO_FAR, vA.isNotLarge = rA.FACE_TOO_CLOSE, vA.isNotOutOfBounds = rA.FACE_CENTERING, vA.isNotDim = rA.BRIGHTNESS_TOO_LOW, vA.isNotBright = rA.BRIGHTNESS_TOO_HIGH, vA.isSharp = rA.SHARPNESS_TOO_LOW, vA.isLeftEyePresent = rA.LEFT_EYE_NOT_PRESENT, vA.isRightEyePresent = rA.RIGHT_EYE_NOT_PRESENT, vA.isMouthPresent = rA.MOUTH_NOT_PRESENT, vA.isMouthStatusNotTooHigh = rA.MOUTH_SCORE_TOO_HIGH, vA.isMouthStatusNotTooLow = rA.MOUTH_SCORE_TOO_LOW;
const Yn = vA, Co = {};
Co.NEUTRAL = "NEUTRAL", Co.SMILE = "SMILE", Co.SMILE_MANUAL = "SMILE_MANUAL";
const M = Co, XA = {};
XA.CANDIDATE_SELECTION = "candidate_selection", XA.PALM_CENTERING = "palm_centering", XA.PALM_NOT_PRESENT = "palm_not_present", XA.PALM_TOO_FAR = "palm_too_far", XA.PALM_TOO_CLOSE = "palm_too_close", XA.SHARPNESS_TOO_LOW = "sharpness_too_low", XA.BRIGHTNESS_TOO_LOW = "brightness_too_low", XA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", XA.DEVICE_PITCHED = "device_pitched", XA.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const Qe = XA, Ee = {};
Ee.isPresent = Qe.PALM_NOT_PRESENT, Ee.isNotPitched = Qe.DEVICE_PITCHED, Ee.isNotSmall = Qe.PALM_TOO_FAR, Ee.isNotOutOfBounds = Qe.PALM_CENTERING, Ee.isNotDim = Qe.BRIGHTNESS_TOO_LOW, Ee.isNotBright = Qe.BRIGHTNESS_TOO_HIGH, Ee.isSharp = Qe.SHARPNESS_TOO_LOW, Ee.isNotLarge = Qe.PALM_TOO_CLOSE, Ee.isTemplateExtractionQualityHighEnough = Qe.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
const eo = {};
eo.TOP_LEFT = "TOP_LEFT", eo.TOP_RIGHT = "TOP_RIGHT", eo.BOTTOM_RIGHT = "BOTTOM_RIGHT", eo.BOTTOM_LEFT = "BOTTOM_LEFT";
const HA = {};
HA.CANDIDATE_SELECTION = "candidate_selection", HA.FACE_TOO_CLOSE = "face_too_close", HA.FACE_TOO_FAR = "face_too_far", HA.FACE_CENTERING = "face_centering", HA.FACE_NOT_PRESENT = "face_not_present", HA.SHARPNESS_TOO_LOW = "sharpness_too_low", HA.BRIGHTNESS_TOO_LOW = "brightness_too_low", HA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", HA.DEVICE_PITCHED = "device_pitched", HA.LEFT_EYE_NOT_PRESENT = "left_" + Qt.EYE_NOT_PRESENT, HA.RIGHT_EYE_NOT_PRESENT = "right_" + Qt.EYE_NOT_PRESENT;
const ne = HA, ie = {};
ie.isPresent = ne.FACE_NOT_PRESENT, ie.isNotPitched = ne.DEVICE_PITCHED, ie.isNotSmall = ne.FACE_TOO_FAR, ie.isNotLarge = ne.FACE_TOO_CLOSE, ie.isNotOutOfBounds = ne.FACE_CENTERING, ie.isNotDim = ne.BRIGHTNESS_TOO_LOW, ie.isNotBright = ne.BRIGHTNESS_TOO_HIGH, ie.isSharp = ne.SHARPNESS_TOO_LOW, ie.isLeftEyePresent = ne.LEFT_EYE_NOT_PRESENT, ie.isRightEyePresent = ne.RIGHT_EYE_NOT_PRESENT;
var Fe, Y, Tn, _r, Et = -1270 * 3 + 3 * -1171 + -1 * -7323, Wg = [], T = R, Kr = T.__b, jr = T.__r, qr = T.diffed, Vr = T.__c, Zr = T.unmount, zr = T.__;
function mt(i, n) {
  T.__h && T.__h(Y, i, Et || n), Et = -1562 + 479 * -13 + 7789;
  var t = {};
  t.__ = [], t.__h = [];
  var e = Y.__H || (Y.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function EA(i) {
  return Et = -5 * 929 + 1762 * 4 + -2402, ur(Jg, i);
}
function ur(i, n, t) {
  var e = mt(Fe++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : Jg(void 0, n), function(g) {
    var a = e.__N ? e.__N[0] : e.__[0], I = e.t(a, g);
    a !== I && (e.__N = [I, e.__[-9578 * -1 + -6980 + -2597]], e.__c.setState({}));
  }], e.__c = Y, !Y.__f)) {
    var A = function(g, a, I) {
      if (!e.__c.__H) return !0;
      var c = e.__c.__H.__.filter(function(Q) {
        return !!Q.__c;
      });
      if (c.every(function(Q) {
        return !Q.__N;
      })) return !o || o.call(this, g, a, I);
      var s = e.__c.props !== g;
      return c.forEach(function(Q) {
        if (Q.__N) {
          var E = Q.__[0];
          Q.__ = Q.__N, Q.__N = void 0, E !== Q.__[0] && (s = !0);
        }
      }), o && o.call(this, g, a, I) || s;
    };
    Y.__f = !0;
    var o = Y.shouldComponentUpdate, r = Y.componentWillUpdate;
    Y.componentWillUpdate = function(g, a, I) {
      if (this.__e) {
        var c = o;
        o = void 0, A(g, a, I), o = c;
      }
      r && r.call(this, g, a, I);
    }, Y.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function j(i, n) {
  var t = mt(Fe++, 3);
  !T.__s && hr(t.__H, n) && (t.__ = i, t.u = n, Y.__H.__h.push(t));
}
function yt(i, n) {
  var t = mt(Fe++, 4);
  !T.__s && hr(t.__H, n) && (t.__ = i, t.u = n, Y.__h.push(t));
}
function WA(i) {
  return Et = 401 * 11 + -5695 + 1289, fA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function Lg(i, n, t) {
  Et = -45 + 1293 * 7 + 1 * -9e3, yt(function() {
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
function fA(i, n) {
  var t = mt(Fe++, 7);
  return hr(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function Ie(i, n) {
  return Et = 8, fA(function() {
    return i;
  }, n);
}
function te(i) {
  var n = Y.context[i.__c], t = mt(Fe++, 16 * 569 + 7159 * 1 + -7 * 2322);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(Y)), n.props.value) : i.__;
}
function Jo(i, n) {
  T.useDebugValue && T.useDebugValue(n ? n(i) : i);
}
function Og() {
  var i = mt(Fe++, 11);
  if (!i.__) {
    for (var n = Y.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [14825 + -2965 * 5, -3421 + 1 * 9249 + -5828]);
    i.__ = "P" + t[2 * -4151 + -1 * 2519 + 10821] + "-" + t[-4274 * -2 + 126 + -8673]++;
  }
  return i.__;
}
function SI() {
  for (var i; i = Wg.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(Bo), i.__H.__h.forEach(mi), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], T.__e(n, i.__v);
  }
}
T.__b = function(i) {
  Y = null, Kr && Kr(i);
}, T.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), zr && zr(i, n);
}, T.__r = function(i) {
  jr && jr(i), Fe = 1095 + 1 * 589 + -1684;
  var n = (Y = i.__c).__H;
  n && (Tn === Y ? (n.__h = [], Y.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(Bo), n.__h.forEach(mi), n.__h = [], Fe = 0)), Tn = Y;
}, T.diffed = function(i) {
  qr && qr(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (-6174 + 2 * -914 + 8003 !== Wg.push(n) && _r === T.requestAnimationFrame || ((_r = T.requestAnimationFrame) || GI)(SI)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), Tn = Y = null;
}, T.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(Bo), t.__h = t.__h.filter(function(e) {
        return !e.__ || mi(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], T.__e(e, t.__v);
    }
  }), Vr && Vr(i, n);
}, T.unmount = function(i) {
  Zr && Zr(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      Bo(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && T.__e(n, t.__v));
};
var Xr = typeof requestAnimationFrame == "function";
function GI(i) {
  var n, t = function() {
    clearTimeout(e), Xr && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 35);
  Xr && (n = requestAnimationFrame(t));
}
function Bo(i) {
  var n = Y, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), Y = n;
}
function mi(i) {
  var n = Y;
  i.__c = i.__(), Y = n;
}
function hr(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function Jg(i, n) {
  return typeof n == "function" ? n(i) : n;
}
const wn = fe(void 0);
wn.displayName = "AppStateContext";
function GA() {
  const i = te(wn);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
class NI extends $A {
  static contextType = wn;
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    const n = new m("An unknown error has occurred");
    this.context?.handleError(n);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    return this.context?.appState === O.ERROR ? null : this.props.children;
  }
}
function Ug(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function yi(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function Yg(i, n) {
  var t = n(), e = EA({ t: { __: t, u: n } }), A = e[-465 * 5 + 5015 + -2690].t, o = e[1];
  return yt(function() {
    A.__ = t, A.u = n, Pn(A) && o({ t: A });
  }, [i, t, n]), j(function() {
    return Pn(A) && o({ t: A }), i(function() {
      Pn(A) && o({ t: A });
    });
  }, [i]), t;
}
function Pn(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (n !== 0 || 1 / n == 1 / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function Tg(i) {
  i();
}
function Pg(i) {
  return i;
}
function Hg() {
  return [!1, Tg];
}
var _g = yt;
function wi(i, n) {
  this.props = i, this.context = n;
}
function RI(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : yi(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, SA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e.type = i, e;
}
(wi.prototype = new $A()).isPureReactComponent = !0, wi.prototype.shouldComponentUpdate = function(i, n) {
  return yi(this.props, i) || yi(this.state, n);
};
var $r = R.__b;
R.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), $r && $r(i);
};
var FI = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 378 * -2 + -8770 + 13437;
function fr(i) {
  function n(t) {
    var e = Ug({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = FI, n.render = i, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var Aa = function(i, n) {
  return i == null ? null : he(he(i).map(n));
}, vI = { map: Aa, forEach: Aa, count: function(i) {
  return i ? he(i).length : 4967 * 1 + -3813 + -2 * 577;
}, only: function(i) {
  var n = he(i);
  if (722 * 4 + -8576 + 1 * 5689 !== n.length) throw "Children.only";
  return n[13806 + -767 * 18];
}, toArray: he }, MI = R.__e;
R.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  MI(i, n, t, e);
};
var ea = R.unmount;
function Kg(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = Ug({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return Kg(e, n, t);
  })), i;
}
function jg(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return jg(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function Qo() {
  this.__u = -1532 + 766 * 2, this.o = null, this.__b = null;
}
function qg(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function WI(i) {
  var n, t, e, A = null;
  function o(r) {
    if (n || (n = i()).then(function(g) {
      g && (A = g.default || g), e = !0;
    }, function(g) {
      t = g, e = !0;
    }), t) throw t;
    if (!e) throw n;
    return A ? SA(A, r) : null;
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Ft() {
  this.i = null, this.l = null;
}
R.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && -1953 + -1 * 3676 + 5661 & i.__u && (i.type = null), ea && ea(i);
}, (Qo.prototype = new $A()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = qg(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(g) : g());
  };
  t.__R = r;
  var g = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[185 + -4993 * -1 + -5178] = jg(a, a.__c.__P, a.__c.__O);
      }
      var I;
      for (e.setState({ __a: e.__b = null }); I = e.o.pop(); ) I.forceUpdate();
    }
  };
  e.__u++ || 32 & n.__u || e.setState({ __a: e.__b = e.__v.__k[3 * -2986 + 1 * 4007 + -4951 * -1] }), i.then(r, r);
}, Qo.prototype.componentWillUnmount = function() {
  this.o = [];
}, Qo.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[0].__c;
      this.__v.__k[0] = Kg(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && SA(jA, null, i.fallback);
  return A && (A.__u &= -33), [SA(jA, null, n.__a ? null : i.children), A];
};
var ta = function(i, n, t) {
  if (++t[3 * 794 + -8062 + -437 * -13] === t[-913 * -1 + -1 * 1588 + 675] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[0] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > 10453 + -25 * 418; ) t.pop()();
    if (t[-4925 + -2 * 3442 + 11810] < t[5846 + 1196 * -6 + 1330]) break;
    i.i = t = t[1 * 7081 + -4259 + -2820];
  }
};
function LI(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function OI(i) {
  var n = this, t = i.h;
  if (n.componentWillUnmount = function() {
    Re(null, n.v), n.v = null, n.h = null;
  }, n.h && n.h !== t && n.componentWillUnmount(), !n.v) {
    for (var e = n.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var A = {};
    A.__m = e.__m, n.h = t, n.v = { nodeType: 1, parentNode: t, childNodes: [], __k: A, contains: function() {
      return !0;
    }, insertBefore: function(r, g) {
      this.childNodes.push(r), n.h.insertBefore(r, g);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> -17 * 269 + -4195 + -8769 * -1, 1), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, Re(SA(LI, o, i.__v), n.v);
}
function JI(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = SA(OI, t);
  return e.containerInfo = n, e;
}
(Ft.prototype = new $A()).__a = function(i) {
  var n = this, t = qg(n.__v), e = n.l.get(i);
  return e[-3 * -2300 + 1122 + -6 * 1337]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), ta(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, Ft.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = he(i.children);
  i.revealOrder && i.revealOrder[-526 * -17 + 2 * 866 + -6 * 1779] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [1 * 2819 + 1068 + -3886, 0, this.i]);
  return i.children;
}, Ft.prototype.componentDidUpdate = Ft.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    ta(i, t, n);
  });
};
var Vg = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || -1 * 90983 + -47887 + -23 * -8651, UI = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, YI = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, TI = /[A-Z0-9]/g, PI = typeof document < "u", HI = function(i) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function _I(i, n, t) {
  return n.__k == null && (n.textContent = ""), Re(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function KI(i, n, t) {
  return dr(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
$A.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty($A.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var oa = R.event;
function jI() {
}
function qI() {
  return this.cancelBubble;
}
function VI() {
  return this.defaultPrevented;
}
R.event = function(i) {
  return oa && (i = oa(i)), i.persist = jI, i.isPropagationStopped = qI, i.isDefaultPrevented = VI, i.nativeEvent = i;
};
var Eo = {};
Eo.enumerable = !1, Eo.configurable = !0, Eo.get = function() {
  return this.class;
};
var pr, ZI = Eo, na = R.vnode;
R.vnode = function(i) {
  typeof i.type == "string" && (function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var g = t[r];
      if (!(r === "value" && "defaultValue" in t && g == null || PI && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var a = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && g === !0 ? g = "" : a === "translate" && g === "no" ? g = !1 : a[-1250 + 1915 * -2 + -635 * -8] === "o" && a[-3019 * -3 + 7458 + 46 * -359] === "n" ? a === "ondoubleclick" ? r = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || HI(t.type) ? a === "onfocus" ? r = "onfocusin" : a === "onblur" ? r = "onfocusout" : YI.test(r) && (r = a) : a = r = "oninput" : o && UI.test(r) ? r = r.replace(TI, "-$&").toLowerCase() : g === null && (g = void 0), a === "oninput" && A[r = a] && (r = "oninputCapture"), A[r] = g;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = he(t.children).forEach(function(I) {
      I.props.selected = A.value.indexOf(I.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = he(t.children).forEach(function(I) {
      I.props.selected = A.multiple ? A.defaultValue.indexOf(I.props.value) != -1 : A.defaultValue == I.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", ZI)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  })(i), i.$$typeof = Vg, na && na(i);
};
var ia = R.__r;
R.__r = function(i) {
  ia && ia(i), pr = i.__c;
};
var ra = R.diffed;
R.diffed = function(i) {
  ra && ra(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), pr = null;
};
var xA = {};
xA.readContext = function(i) {
  return pr.__n[i.__c].props.value;
}, xA.useCallback = Ie, xA.useContext = te, xA.useDebugValue = Jo, xA.useDeferredValue = Pg, xA.useEffect = j, xA.useId = Og, xA.useImperativeHandle = Lg, xA.useInsertionEffect = _g, xA.useLayoutEffect = yt, xA.useMemo = fA, xA.useReducer = ur, xA.useRef = WA, xA.useState = EA, xA.useSyncExternalStore = Yg, xA.useTransition = Hg;
var Zg = {};
Zg.current = xA;
var zg = {};
zg.ReactCurrentDispatcher = Zg;
var zI = zg;
function XI(i) {
  return SA.bind(null, i);
}
function Dn(i) {
  return !!i && i.$$typeof === Vg;
}
function $I(i) {
  return Dn(i) && i.type === jA;
}
function Ac(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function ec(i) {
  return Dn(i) ? lr.apply(null, arguments) : i;
}
function tc(i) {
  return !!i.__k && (Re(null, i), !0);
}
function oc(i) {
  return i && (i.base || -4 * -1147 + 707 * -5 + -1052 === i.nodeType && i) || null;
}
var nc = function(i, n) {
  return i(n);
}, ic = function(i, n) {
  return i(n);
}, rc = jA, ac = Dn, Ve = { useState: EA, useId: Og, useReducer: ur, useEffect: j, useLayoutEffect: yt, useInsertionEffect: _g, useTransition: Hg, useDeferredValue: Pg, useSyncExternalStore: Yg, startTransition: Tg, useRef: WA, useImperativeHandle: Lg, useMemo: fA, useCallback: Ie, useContext: te, useDebugValue: Jo, version: "18.3.1", Children: vI, render: _I, hydrate: KI, unmountComponentAtNode: tc, createPortal: JI, createElement: SA, createContext: fe, createFactory: XI, cloneElement: ec, createRef: cI, Fragment: jA, isValidElement: Dn, isElement: ac, isFragment: $I, isMemo: Ac, findDOMNode: oc, Component: $A, PureComponent: wi, memo: RI, forwardRef: fr, flushSync: ic, unstable_batchedUpdates: nc, StrictMode: rc, Suspense: Qo, SuspenseList: Ft, lazy: WI, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: zI };
(function(i, n) {
  function t(a, I, c, s, Q) {
    return dA(s - -340, c);
  }
  function e(a, I, c, s, Q) {
    return dA(Q - 350, s);
  }
  function A(a, I, c, s, Q) {
    return dA(I - -25, s);
  }
  function o(a, I, c, s, Q) {
    return dA(s - -432, I);
  }
  function r(a, I, c, s, Q) {
    return dA(I - 214, Q);
  }
  const g = i();
  for (; ; )
    try {
      if (parseInt(e(787, 791, 775, ")56E", 789)) / 1 * (-parseInt(A(407, 402, 419, "xR6e", 409)) / 2) + parseInt(A(401, 409, 420, "&vhg", 394)) / 3 * (parseInt(e(801, 802, 784, "D7WP", 790)) / 4) + -parseInt(o(24, "9Hs3", 21, 17, 31)) / 5 + -parseInt(t(101, 98, "4gOB", 115, 125)) / 6 + -parseInt(o(7, "Qmy1", -12, -9, -25)) / 7 + -parseInt(A(438, 425, 411, "Y[Zf", 438)) / 8 * (-parseInt(e(813, 793, 801, "Wau&", 796)) / 9) + parseInt(t(120, 122, "Y[Zf", 112, 120)) / 10 * (parseInt(r(639, 646, 652, 637, "0myR")) / 11) === n) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(To, 485439 + -107 * 6499 + 716292);
function Uo(i, n, t, e, A) {
  return dA(n - -912, t);
}
function xo(i, n, t, e, A) {
  return dA(i - -777, t);
}
const Yo = fe(void 0);
function dA(i, n) {
  i = i - 423;
  const t = To();
  let e = t[i];
  if (dA.izZwun === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let E = 0, x, B, l = 0; B = I.charAt(l++); ~B && (x = E % 4 ? x * 64 + B : B, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        B = c.indexOf(B);
      for (let E = 0, x = s.length; E < x; E++)
        Q += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const a = function(I, c) {
      let s = [], Q = 0, E, x = "";
      I = A(I);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        Q = (Q + s[B] + c.charCodeAt(B % c.length)) % 256, E = s[B], s[B] = s[Q], s[Q] = E;
      B = 0, Q = 0;
      for (let l = 0; l < I.length; l++)
        B = (B + 1) % 256, Q = (Q + s[B]) % 256, E = s[B], s[B] = s[Q], s[Q] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[B] + s[Q]) % 256]);
      return x;
    };
    dA.NXKyeJ = a, dA.UBRyaY = {}, dA.izZwun = !0;
  }
  const o = t[-309 + 5707 * 1 + 1 * -5398], r = i + o, g = dA.UBRyaY[r];
  return g ? e = g : (dA.vxBJAE === void 0 && (dA.vxBJAE = !0), e = dA.NXKyeJ(e, n), dA.UBRyaY[r] = e), e;
}
Yo[xo(-353, -367, "@jT$") + xo(-323, -330, "OfjD") + "e"] = Uo(-451, -454, ")56E") + xo(-326, -339, "4ANW") + Uo(-458, -468, "dxkx");
function aa(i, n, t, e, A) {
  return dA(i - 241, A);
}
function To() {
  const i = ["W4/cL8k+zfvjW6pcMJVcISkTDuO", "ymkihmoCWQK/W70Lnq", "W6q7r2xcTq", "cCoMrSkZW5FcJbq", "gWpdU3Lx", "WRL7Ea4HW4bsnae", "WRbvW7pdUeddMXhdKJJcMH1m", "ws97WQhcKmkCimod", "pSoDW7lcNxZdICkf", "W4KRWP7cQu0JWR3dJHRdJ8kAwCkG", "WPOSBLXQWPS4WPCyWRpcHJO", "W5hcRmoIW79TsWBcULBcU8kGW4mC", "W6qiW79mwWldKJaWwCo5W4m", "W6boWRT5", "hcddTNRdKdrXfdpdKLH8DW", "WOSYW6tcKvWJwCko", "h8oRA8oIW5G", "Bmogm8kqWQy", "W7ZdRCk9WRVdMmk2W6tcQ8kkW7r4W7RcTq", "WRetW6RcRKCvWQbIWP94WPNcTa", "WPpdVmkrWQa1", "WRauW6pcPuCDWRfZWQPPWRNcUq", "WPBcNmkqWQSezv0PW4Orr8kMWOe", "WPC6AItdVG", "WQeRWPFcTmonWP0RueOFWRuJaa", "hHpdHMHw", "W6/cTmkLW4hcIq", "q8oIW5FcQLe", "W4emWR7cRKqQya", "vbBcSg3dVwBdSSo4w8ozaSof", "WObTC3VdTG", "W5CSrMdcUq", "WPnUW6xcLea", "e8kIW70NWOmSWQhdTCkcW5/cP2hcHW", "uSkrEG", "WROzdbSqW4vZ", "yCotxmoMga"];
  return To = function() {
    return i;
  }, To();
}
function bn() {
  function i(r, g, a, I, c) {
    return Uo(r - 223, r - 40, a);
  }
  const n = te(Yo);
  if (n === void 0) throw new Error(Yo[e(1421, 1441, 1433, 1423, "p7)N") + A(1401, 1430, 1419, "p7)N") + "e"] + (A(1392, 1409, 1410, "Wau&") + i(-425, -436, "&vhg") + o(143, "3HSx", 139) + A(1424, 1417, 1432, "H%Br") + o(149, "9Hs3", 166) + A(1425, 1416, 1409, "TXFf") + t(781, "TXFf") + t(776, "x#jc")));
  function t(r, g, a, I, c) {
    return xo(r - 1125, g - 380, g);
  }
  function e(r, g, a, I, c) {
    return aa(a - 736, g - 200, a - 7, I - 478, c);
  }
  function A(r, g, a, I, c) {
    return aa(a - 743, g - 463, a - 305, I - 228, I);
  }
  function o(r, g, a, I, c) {
    return Uo(r - 421, a - 621, g);
  }
  return n;
}
const Po = fe(void 0);
Po.displayName = "AnalyticsContext";
function gc() {
  const i = te(Po);
  if (i === void 0)
    throw new Error(`${Po.displayName} must be used within a AnalyticsProvider`);
  return i;
}
const Ut = (i) => i.length < 1 ? 0 : i.reduce((t, e) => t + e, 5489 * -1 + -4348 + 9837) / i.length, ct = (i) => Number.parseFloat(i.toFixed(-19263 + -1 * -19266));
function sc(i) {
  const n = i.getContext("2d");
  n && n.clearRect(-620 + -766 * -4 + -2444, -857 * -11 + -4297 + -5130, n.canvas.width, n.canvas.height);
}
const Xg = 1209 + -1 * -7298 + -8507 + 0.75, Ic = 13961 + 4653 * -3, cc = 600, Cc = "dot-auto-capture-video", kn = (i, n) => Math.min(i, n), $g = ({ height: i, width: n }, t) => {
  const e = kn(n, i) * t, A = (n - e) / (8999 + -4463 * 1 + -4534), o = (i - e) / (1833 + 2834 * 1 + -933 * 5), r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, Bc = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = $g(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, Qc = ({ height: i, width: n }) => {
  const t = kn(n, i), e = t / (-6 * -772 + -2849 + -1 * 1780) * (-1 * -3097 + -1863 * -1 + -4956);
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
};
function Ec(i, n) {
  const t = kn(n.width, n.height);
  return ct(i * t);
}
function xc({ height: i, width: n }) {
  const t = {};
  return t.height = i, t.width = n, $g(t, Xg);
}
function dc(i) {
  return Bc(i, Xg);
}
function lc(i, n) {
  return Ec(i, n) * Ic;
}
const uc = "8.0.2", hc = {
  version: uc
}, Di = {};
Di.max = 100, Di.min = 10;
const ga = Di, fc = 1033 * 2 + -2232 + 1 * 886, pc = 4198 + 13 * -719 + 5349, mc = -6918 + 1 * 6389 + 533, As = "AES-CBC", es = "RSA-OAEP", yc = "SHA-256", wc = "image/jpeg", Dc = -2074 * 1 + -8746 + 5414 * 2, ts = "/dot-assets", sa = "dot_embedded_bg.wasm", bi = (i) => new Promise((n) => {
  setTimeout(n, i);
}), os = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? ct(t) : t)), ns = () => hc.version, is = (i) => new URL(i).hostname.replace("www.", ""), mr = () => is(window.location.href) === "localhost", bc = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i;
function kc(i) {
  return i.at(-1) === "/" ? i.slice(-8363 * -1 + 1 * 3161 + -11524, -1) : i;
}
function Sc(i) {
  return "" + kc(i ?? "") + ts;
}
function Gc(i) {
  return i !== null && typeof i == "object" && "min" in i && typeof i.min == "number";
}
function Gt(i) {
  return (...n) => {
    mr() && console[i](...n);
  };
}
const yr = { log: Gt("log"), warn: Gt("warn"), error: Gt("error"), info: Gt("info"), debug: Gt("debug") };
function Nc({ analytics: i, crosshatch: n }) {
  if (!mr())
    return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function Rc({ analytics: i, apiKey: n, redfin: t, crosshatch: e, bramble: A }) {
  const o = {};
  o.analytics = i, o.crosshatch = e;
  const r = Nc(o);
  return j(() => {
    r && r.init(n, A.getCustomerName());
  }, [r, A, n]), j(() => {
    e && (yr.info("Analytics is " + (r?.shouldReportAnalytics(e) ? "enabled" : "disabled")), r && r.walleye(t, A.getCustomerName()));
  }, [r, A, e, t]), r;
}
function Fc({
  analytics: i,
  apiKey: n,
  children: t
}) {
  const { crosshatch: e, bramble: A } = bn(), { redfin: o } = GA(), r = Rc({
    analytics: i,
    redfin: o,
    crosshatch: e,
    bramble: A,
    apiKey: n
  }), g = fA(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ y(Po.Provider, { value: g, children: t });
}
const ki = {};
ki.SIMD = "simd", ki.NO_SIMD = "no-simd";
const Ia = ki, Si = {};
Si.Lower = "Lower", Si.Higher = "Higher";
const xt = Si, Gi = {};
Gi.MOBILE = "MOBILE", Gi.DESKTOP = "DESKTOP";
const ca = Gi, Ho = fe(void 0);
Ho.displayName = "TransactionCountingContext";
function rs() {
  const i = te(Ho);
  if (i === void 0)
    throw new Error(`${Ho.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
function vc({ children: i, value: n }) {
  const { crosshatch: t } = bn(), { transactionCounting: e } = rs(), A = t?.isValid && e?.isTransactionTokenValid ? xt.Higher : xt.Lower, o = fA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ y(wn.Provider, { value: o, children: i });
}
let v;
const ue = new Array(6037 + -5909 * 1).fill(void 0);
ue.push(void 0, null, !0, !1);
function Ni(i) {
  return ue[i];
}
let se = 4249 + -27 * -337 + 13348 * -1, vt = null;
function lo() {
  return (vt === null || vt.byteLength === 0) && (vt = new Uint8Array(v.memory.buffer)), vt;
}
const uo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Mc = typeof uo.encodeInto == "function" ? function(i, n) {
  return uo.encodeInto(i, n);
} : function(i, n) {
  const t = uo.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function _t(i, n, t) {
  if (t === void 0) {
    const g = uo.encode(i), a = n(g.length, 1 * -9135 + -2901 + 12037 * 1) >>> 2 * 4870 + -725 + 5 * -1803;
    return lo().subarray(a, a + g.length).set(g), se = g.length, a;
  }
  let e = i.length, A = n(e, -4 * 2174 + 6221 + -2 * -1238) >>> -3916 + 356 * 11;
  const o = lo();
  let r = 0;
  for (; r < e; r++) {
    const g = i.charCodeAt(r);
    if (g > 1 * -8203 + -4352 + -2 * -6341) break;
    o[A + r] = g;
  }
  if (r !== e) {
    r !== 8801 + 6431 * 1 + -15232 && (i = i.slice(r)), A = t(A, e, e = r + i.length * 3, 1) >>> 4777 * -2 + -5487 + -13 * -1157;
    const g = lo().subarray(A + r, A + e), a = Mc(i, g);
    r += a.written, A = t(A, e, r, 1 * -5228 + -8211 + 13440) >>> -5501 * -1 + -5508 + 7;
  }
  return se = r, A;
}
function as(i) {
  return i == null;
}
let Mt = null;
function re() {
  return (Mt === null || Mt.byteLength === 960 * 1 + 1 * 8489 + -859 * 11) && (Mt = new Int32Array(v.memory.buffer)), Mt;
}
let Yt = ue.length;
function Wc(i) {
  i < 3 * 754 + 9558 + -1461 * 8 || (ue[i] = Yt, Yt = i);
}
function gs(i) {
  const n = Ni(i);
  return Wc(i), n;
}
const Ri = {};
Ri.ignoreBOM = !0, Ri.fatal = !0;
const ss = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Ri) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && ss.decode();
function _o(i, n) {
  return i = i >>> -5165 + -1 * 9965 + 15130, ss.decode(lo().subarray(i, i + n));
}
function Fi(i) {
  Yt === ue.length && ue.push(ue.length + (-820 + 1 * 821));
  const n = Yt;
  return Yt = ue[n], ue[n] = i, n;
}
let Wt = null;
function Is() {
  return (Wt === null || Wt.byteLength === 5 * 856 + -274 * 13 + -718) && (Wt = new Uint32Array(v.memory.buffer)), Wt;
}
function Ca(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = Is();
  for (let A = 1075 + -1 * 1075; A < i.length; A++)
    e[t / (9840 + -523 * 19 + 101) + A] = Fi(i[A]);
  return se = i.length, t;
}
function Ba(i, n) {
  i = i >>> 0;
  const t = Is(), e = t.subarray(i / (-1258 + 5269 * 1 + 4007 * -1), i / 4 + n), A = [];
  for (let o = -2954 + -422 * -7; o < e.length; o++)
    A.push(gs(e[o]));
  return A;
}
function Lc(i, n) {
  const t = _t(i, v.__wbindgen_malloc, v.__wbindgen_realloc), e = se, A = _t(n, v.__wbindgen_malloc, v.__wbindgen_realloc), o = se, r = v.is_mobile_supported(t, e, A, o);
  return wr.__wrap(r);
}
const vi = {};
vi.register = () => {
}, vi.unregister = () => {
};
const Qa = typeof FinalizationRegistry > "u" ? vi : new FinalizationRegistry((i) => v.__wbg_licensevalidationresult_free(i >>> -3740 + -1432 * 1 + 5172));
class wr {
  static __wrap(n) {
    n = n >>> 0;
    const t = Object.create(wr.prototype);
    return t.__wbg_ptr = n, Qa.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = -2 * -3461 + -1 * -3493 + -10415, Qa.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    v.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = as(t) ? 0 : _t(t, v.__wbindgen_malloc, v.__wbindgen_realloc), g = se;
    const a = Ca(e, v.__wbindgen_malloc), I = se, c = Ca(A, v.__wbindgen_malloc), s = se, Q = _t(o, v.__wbindgen_malloc, v.__wbindgen_realloc), E = se, x = v.licensevalidationresult_new(n, r, g, a, I, c, s, Q, E);
    return this.__wbg_ptr = x >>> -1175 * -1 + -366 * 4 + 289, this;
  }
  get is_valid() {
    return v.licensevalidationresult_is_valid(this.__wbg_ptr) !== -2003 * 1 + 6510 + 1 * -4507;
  }
  get features_json() {
    try {
      const e = v.__wbindgen_add_to_stack_pointer(-16);
      v.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = re()[e / (4282 + 2 * -2652 + 1026) + (5456 + -2 * 2372 + -712)], t = re()[e / (677 * -9 + 5296 + 267 * 3) + (-6061 + -9 * -557 + 1049)];
      let A;
      return n !== -1 * -8448 + -5818 + -2630 && (A = _o(n, t).slice(), v.__wbindgen_free(n, t * (-7750 + -1 * -5413 + -1169 * -2), 9915 + -6738 * -1 + 1 * -16652)), A;
    } finally {
      v.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get errors() {
    try {
      const A = v.__wbindgen_add_to_stack_pointer(-16);
      v.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = re()[A / (-8630 + 2 * 4317) + (-2536 * 3 + -588 + -1 * -8196)], t = re()[A / 4 + (1337 * -6 + -323 * -15 + 3178)], e = Ba(n, t).slice();
      return v.__wbindgen_free(n, t * (-1 * 5021 + 8511 + -3486), 4), e;
    } finally {
      v.__wbindgen_add_to_stack_pointer(-1803 * -3 + -2613 + -2780);
    }
  }
  get warnings() {
    try {
      const A = v.__wbindgen_add_to_stack_pointer(-16);
      v.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = re()[A / (4517 * 1 + -4482 + -31) + (-1 * 3507 + 733 + 2774)], t = re()[A / (2242 + -4133 * 2 + 6028) + (-1 * 8266 + 1 * 2114 + -7 * -879)], e = Ba(n, t).slice();
      return v.__wbindgen_free(n, t * (-15221 + -5 * -3045), 17 * 546 + -3 * 2137 + 1 * -2867), e;
    } finally {
      v.__wbindgen_add_to_stack_pointer(9013 * -1 + 7368 + -1661 * -1);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = v.__wbindgen_add_to_stack_pointer(-16);
      v.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = re()[o / 4 + (6099 + 1069 * 5 + 2 * -5722)], A = re()[o / (-347 * 1 + -2404 + -2755 * -1) + (2782 + 4153 * -2 + 5525)];
      return n = e, t = A, _o(e, A);
    } finally {
      v.__wbindgen_add_to_stack_pointer(-5208 + -4682 * -1 + 542), v.__wbindgen_free(n, t, -358 * 7 + 6719 + -4212);
    }
  }
}
async function Oc(i, n) {
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
function Jc() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = Ni(t), A = typeof e == "string" ? e : void 0;
    var o = as(A) ? 0 : _t(A, v.__wbindgen_malloc, v.__wbindgen_realloc), r = se;
    re()[n / 4 + 1] = r, re()[n / 4 + (6123 * -1 + 6737 + 307 * -2)] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    gs(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = _o(n, t);
    return Fi(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Fi(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return Ni(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(_o(n, t));
  }, i;
}
function Uc(i, n) {
  return v = i.exports, cs.__wbindgen_wasm_module = n, Mt = null, Wt = null, vt = null, v;
}
async function cs(i) {
  if (v !== void 0) return v;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYhACAIRQRAIAQoArQGIQIgDSEACyACRQ0BIAAgAkEBazYCAAwBCwsgBEGgA2ogBEGwBmpBMBC+AhoLAn8gBCgCyAMiB0EETQRAIARBqANqIQIgBwwBCyAEKAKoAyECIAQoAqQDCyEBIARBIGohDQJAAkACQAJAAkACQAJAAkACQAJAIAQoAkAiA0EFTwRAQQIhACACIAEgBCgCICAEKAIcEKgBQf8BcUECSQ0WIAQoAhwiAkUNAiAEKAIgIQEMAQtBAiEAIAIgASANIAMQqAFB/wFxQQJJDRUgDSEBIAMiAkUNAgsgAkEGdCACQQN0IAFqQQhrKQMAeadrQQdqQQN2IApGDQIMFAsgCg0TIARBoAJqIQkMAgsgCkUNAwwSCyAEQaACaiEJIANBBUkNAQsgBCgCHEUiAQ0BIAQoAiAtAABBAXFFIgANDiADQQVJDQMgAQ0IIAANCyABDQkgBCgCICECDAQLIAMNAQsgBEG8BmpCADcCACAEQQE2ArQGIARBiO/AADYCsAYgBEGMrMIANgK4BiAEQbAGakGQ78AAEOsBAAsgBC0AIEEBcUUNCwsgDSECIAQtACBBAXFFDQcLIAQgAikDACIkQgGDNwN4ICSnQQFxRQ0FICRCAX0hJUICICR9ISZBASECA0AgJSAlfiIlQgF8ICZ+ISYgAkEgSSACQQF0IQINAAsgA0EFTwRAIAQoAhwhAwsgB0EETQR/IARBqANqBSAEKAKkAyEHIAQoAqgDCyEBIARBADYCsAYgBEEANgLYBiAEQbAGaiIAIAEgASAHQQN0ahBDIARB0ANqIABBMBC+AhogBCgC+AMiAiEAIAJBBU8EfyAEKALUAwUgAAsgA0sEQCAEQbAGaiIBIARB0ANqIgIgBEEYahAIIARB+ABqIgAgBEHgBmpBMBC+AhogARCPAiACEI8CIAIgAEEwEL4CGiAEKAL4AyECCyACQQVPBH8gBCgC1AMFIAILIANJBEAgBEHQA2ogAxDQAQtBuLHCAC0AABpBBBAKIgJFDRlCACAmfSEkIAJBATYCACAEQoGAgIAgNwKEBiAEIAI2AoAGIARBADYCeCAEQQA2AqABIARB+ABqIgEgBEGABmoQMyAEQbAGaiIAIAFBMBC+AhogAhAiIABBBHIhCiAEQbgGaiEIIARB2AZqIQYgBCgCuAYhBwNAIAghASAEKALYBiICIQAgAkEFSSIMRQRAIAchASAEKAK0BiEACwJAIABFDQAgAEEDdCABakEIaykDAEIAUg0AIAYhACAMRQRAIAQoArQGIQIgCiEACyACRQ0BIAAgAkEBazYCAAwBCwsgBEGABGoiASAEQbAGaiIAQTAQvgIaIARB0AVqIAFBMBC+AhoCQCADQQd0IgtFBEAgACABQTAQvgIaIARBgAZqIAAQrAEMAQsgBEHQBWohAiAEKALQBUECRgRAIAQoAtQFIQILIAIoAigiAUEFTwRAIAIoAgQhAQsgBEEANgKwBiAEQQA2AtgGIARBsAZqIgIgASALQQZ2IgBBAXJqEK0BIARB+ABqIgEgAkEwEL4CGiABIAAQSSAEQdAFaiECIAECfyAEKALQBUECRgRAIAQoAtQFIQILIAJBCGogAigCKCIAQQRNDQAaIAIoAgQhACACKAIICyICIAIgAEEDdGoQQyAEQYAGaiABQTAQvgIaCyAEQbAGaiIAIARBgAZqQTAQvgIaIABBBHIhCiAEQbgGaiEIIARB2AZqIQYgBCgCuAYhBwNAIAghASAEKALYBiICIQAgAkEFSSIMRQRAIAchASAEKAK0BiEACwJAIABFDQAgAEEDdCABakEIaykDAEIAUg0AIAYhACAMRQRAIAQoArQGIQIgCiEACyACRQ0BIAAgAkEBazYCAAwBCwsgBEH4AGogBEGwBmpBMBC+AhoCQCALRQ0AIAQoAtAFQQJGDQAgBEHQBWoQjwILIARBsAZqIgIgBEH4AGoiASAEQRhqEAggBEGABmoiACAEQeAGakEwEL4CGiACEI8CIAEQjwIgBEGABGogAEEwEL4CGiAEKAKoBCIAQQVPBH8gBCgChAQFIAALIANJBEAgBEGABGogAxDQAQtBuLHCAC0AABpBBBAKIgJFDRkgAkEBNgIAIARCgYCAgCA3AoQGIAQgAjYCgAYgBEEANgJ4IARBADYCoAEgBEH4AGoiASAEQYAGahAzIARBsAZqIgAgAUEwEL4CGiACECIgAEEEciEKIARBuAZqIQggBEHYBmohBiAEKAK4BiEHA0AgCCEBIAQoAtgGIgIhACACQQVJIgxFBEAgByEBIAQoArQGIQALAkAgAEUNACAAQQN0IAFqQQhrKQMAQgBSDQAgBiEAIAxFBEAgBCgCtAYhAiAKIQALIAJFDQEgACACQQFrNgIADAELCyAEQbAEaiIAIARBsAZqIgFBMBC+AhogACADENABQbixwgAtAAAaQYAGEAoiD0UNGSAEQhA3AugEIAQgDzYC5AQgBEECNgKIBiAEQgQ3AoAGIARBADYCeCAEQQA2AqABIARB+ABqIgAgBEGABmoQMyABIABBMBC+AhogAUEEciEKIARBuAZqIQggBEHYBmohBiAEKAK4BiEHA0AgCCEBIAQoAtgGIgIhACACQQVJIgxFBEAgByEBIAQoArQGIQALAkAgAEUNACAAQQN0IAFqQQhrKQMAQgBSDQAgBiEAIAxFBEAgBCgCtAYhAiAKIQALIAJFDQEgACACQQFrNgIADAELCyAEQfAEaiIAIARBsAZqIgFBMBC+AhogACAEQbAEaiAEQYAEaiAEQRhqICQgAxASIAEgAEEwEL4CGiAPIAFBMBC+AiAEQQE2AuwEIARBAjYCiAYgBEIENwKABiAEQQA2AnggBEEANgKgASAEQfgAaiIAIARBgAZqEDMgASAAQTAQvgIaIAFBBHIhCiAEQbgGaiEIIARB2AZqIQYgBCgCuAYhBwNAIAghASAEKALYBiICIQAgAkEFSSIMRQRAIAchASAEKAK0BiEACwJAIABFDQAgAEEDdCABakEIaykDAEIAUg0AIAYhACAMRQRAIAQoArQGIQIgCiEACyACRQ0BIAAgAkEBazYCAAwBCwsgBEGgBWoiACAEQbAGaiIBQTAQvgIaIAAgBEHQA2ogBEGABGogBEEYaiAkIAMQEiABIABBMBC+AhpBMGogAUEwEL4CGiAEQQI2AuwEIAFBBHIhDiAEQbgGaiELIARB2AZqIQxBAiEGQQIhCANAIARBAjYCiAYgBEIENwKABiAEQQA2AnggBEEANgKgASAEQfgAaiIAIARBgAZqEDMgBEGwBmogAEEwEL4CGiAIIgpBAWohCCAEKAK4BiEHA0AgCyEBIAQoAtgGIgIhACACQQVJIhBFBEAgByEBIAQoArQGIQALAkAgAEUNACAAQQN0IAFqQQhrKQMAQgBSDQAgDCEAIBBFBEAgBCgCtAYhAiAOIQALIAJFDQEgACACQQFrNgIADAELCyAEQfgAaiICIARBsAZqIgBBMBC+AhogBiAKQQFrIgFNDQggAiAPIAFBMGxqIA9BMGogBEEYaiAkIAMQEiAAIAJBMBC+AhogBCgC6AQgBkcEfyAGBSAEQeQEaiEKIwBBIGsiECQAAkACQCAGQQFqIgFFDQBBBCAKKAIEIgdBAXQiACABIAAgAUsbIgAgAEEETRsiAkEwbCEBIAJBq9WqFUlBA3QhAAJAIAdFBEAgEEEANgIYDAELIBBBCDYCGCAQIAdBMGw2AhwgECAKKAIANgIUCyAQQQhqIAAgASAQQRRqEHcgECgCDCEAIBAoAghFBEAgCiACNgIEIAogADYCAAwCCyAAQYGAgIB4Rg0BIABFDQAACxDqAQALIBBBIGokACAEKALkBCEPIAQoAuwECyIQQTBsIA9qIARBsAZqQTAQvgIaIAQgEEEBaiIGNgLsBCAIQRBHDQALDAgLIBdFDQ0MCwtBuLHCAC0AABpBARAKIgBFDRcgAEEBOgAAIARCBDcCuAYgBEGw5cAANgK0BiAEIAA2ArAGIARBsAZqQZTYwAAQLiECIBJFDRYgFhAiDBYLIACtQv8Bg0IIhiAGIBFqQQFrrUIghoRCAoQhJQwUC0EAQQBB0PjAABC3AQALQQBBAEGM98AAELcBAAsgBEEANgKwBiMAQRBrIgAkACAAQYj2wAA2AgwgACAEQfgAajYCCEEBIABBCGpB+PXAACAAQQxqQfj1wAAgBEGwBmpB/PbAABBPAAtBoPnAAEEkQcT5wAAQ3gEACyABIAZBkPnAABC3AQALAkACQAJAAkAgBgRAIA8oAigiAEEETQR/IA9BCGoFIA8oAgQhACAPKAIICyEBIARBADYCsAYgBEEANgLYBiAEQbAGaiICIAEgASAAQQN0ahBDIARB0AVqIgAgAkEwEL4CGiAAIAMQ0AEgBEECNgKIBiAEQgQ3AoAGIARBADYCeCAEQQA2AqABIARB+ABqIgAgBEGABmoQMyACIABBMBC+AhogAkEEciEMIARBuAZqIQogBEHYBmohCCAEKAK4BiEHA0AgCiEBIAQoAtgGIgIhACACQQVJIgtFBEAgByEBIAQoArQGIQALAkAgAEUNACAAQQN0IAFqQQhrKQMAQgBSDQAgCCEAIAtFBEAgBCgCtAYhAiAMIQALIAJFDQEgACACQQFrNgIADAELCyAEQYAGaiIAIARBsAZqQTAQvgIaIAAgAxDQAQJAAn8gBEHwAGooAgAiAEEFTwRAIARBzABqIgcoAgAiAUUNAiABQQFrIQIgBygCACIIIQcgBEHQAGooAgAMAQsgAEUNASAAQQFrIQIgBEHMAGooAgAhCCAAIgEhByAEQdAAagsgAiAHTw0CIAggACAAQQRLIgcbIQsgBEHQAGoiACgCACAAIAcbIQggAkEDdGohAANAIAIhByAAKQMAISZBfCECA0AgAkF8RiABIAtGcUUEQCAEQYAGaiIMIARB0AVqIgogCiAEQRhqIgAgJCADEBIgCiAMIAwgACAkIAMQEiAMIAogCiAAICQgAxASIAogDCAMIAAgJCADEBILIAYgJkI8iKciAE0NBiAEQYAGaiIMIARB0AVqIgogDyAAQTBsaiAEQRhqICQgAxASIARBsAZqIgAgCkEwEL4CGiAKIAxBMBC+AhogDCAAQTAQvgIaICZCBIYhJiACQQRqIgJBPEkNAAsgB0UNASALIAdBAWsiAk0NBCAIIAJBA3RqIQAgByEBDAALAAsgBEGABmoiACAEQdAFaiAEQbAEaiAEQRhqICQgAxASIABBBHIhCCAEQYgGaiEBIARBqAZqIQcgBCgCiAYhBgNAIAEhAyAEKAKoBiICIQAgAkEFSSIKRQRAIAYhAyAEKAKEBiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAchACAKRQRAIAQoAoQGIQIgCCEACyACRQ0BIAAgAkEBazYCAAwBCwsgAkEFTwR/IAQoAoQGIQIgBgUgAQsgAiAEKAJAIgZBBU8EfyAEKAIcIQYgBCgCIAUgDQsgBhCoAUH/AXFBAk8NBCAEQYAGaiAEQRhqEHUgASECIAQoAqgGIgBBBU8EQCAEKAKIBiECIAQoAoQGIQALIAIgACAEKAJAIgZBBU8EfyAEKAIcIQYgBCgCIAUgDQsgBhCoAUH/AXFBAk8NBCAEQbAGaiICIARBgAZqIgMgBEEYahAIIARB+ABqIgAgBEHgBmpBMBC+AhogAhCPAiADEI8CIAMgAEEwEL4CGgwEC0EAQQBB4PjAABC3AQALIAIgB0Hw+MAAELcBAAsgAiALQfD4wAAQtwEACyAAIAZBgPnAABC3AQALIAQoAogGIQoDQCABIQMgBCgCqAYiAiEAIAJBBUkiBkUEQCAKIQMgBCgChAYhAAsCQCAARQ0AIABBA3QgA2pBCGspAwBCAFINACAHIQAgBkUEQCAEKAKEBiECIAghAAsgAkUNASAAIAJBAWs2AgAMAQsLIAkgBEGABmpBMBC+AhogEEEBaiEAIARB0AVqEI8CIA8hAgNAIAIQjwIgAkEwaiECIABBAWsiAA0ACyAEKALoBARAIA8QIgsgBEGwBGoQjwIgBEGABGoQjwIgBEHQA2oQjwIMAQtBuLHCAC0AABpBBBAKIgJFDQ8gAkEBNgIAIARCgYCAgCA3AoQGIAQgAjYCgAYgBEEANgJ4IARBADYCoAEgBEH4AGoiASAEQYAGahAzIARBsAZqIgAgAUEwEL4CGiACECIgAEEEciEKIARBuAZqIQcgBEHYBmohBiAEKAK4BiEIA0AgByEDIAQoAtgGIgIhACACQQVJIgFFBEAgCCEDIAQoArQGIQALAkAgAEUNACAAQQN0IANqQQhrKQMAQgBSDQAgBiEAIAFFBEAgBCgCtAYhAiAKIQALIAJFDQEgACACQQFrNgIADAELCyAEQbAEaiAEQbAGakEwEL4CGiAEQfAAaigCACIAQQVPBH8gBEHMAGooAgAFIAALBEAgBEGwBmoiACAEQaADaiAEQRhqEAggBEHwBGogBEHgBmoiBkEwEL4CGiAAEI8CIAQoAnAiAEEFSQR/IARB0ABqBSAEQcwAaigCACEAIAQoAlALIQIgBEEANgKwBiAEQQA2AtgGIARBsAZqIgEgAiACIABBA3RqEEMgBEGgBWogAUEwEL4CGiAEQfgEaiEHIARBqAVqIQEDQCABIQAgBCgCyAUiAyECIANBBU8EQCAEKAKkBSECIAQoAqgFIQALAkAgAkUNACAALQAAQQFxRQ0AIANBBU8EfyAEKAKkBSEDIAQoAqgFBSABCyADIAQoAtgEIgBBBE0EfyAEQbgEagUgBCgCtAQhACAEKAK4BAsiBiAAEKgBQf8BcQRAIAchAiAEKAKYBSIAQQVPBEAgBCgC+AQhAiAEKAL0BCEACyAEQQA2ArAGIARBADYC2AYgBEGwBmoiAyACIAIgAEEDdGoQQyAEQdAFaiADQTAQvgIaIARBuAZqIQMgBEG4BGohCCAEQeAGaiEMA0AgASECIAQoAsgFIgBBBU8EQCAEKAKoBSECIAQoAqQFIQALIAIgACAEKALYBCIGQQVPBH8gBCgCtAQhBiAEKAK4BAUgCAsgBhCoAUH/AXFBAUcEQCAJIARB0AVqQTAQvgIaIARBoAVqEI8CIARB8ARqEI8CIARBsARqEI8CDAYLIARBoAVqEBkgByECIAQoApgFIgBBBU8EQCAEKAL4BCECIAQoAvQEIQALIARB+ABqIgYgAiAAIAIgABBwIARBsAZqIgAgBiAEQRhqEAggBEGABmoiAiAMQTAQvgIaIAAQjwIgBhCPAiAEQfAEaiIAEI8CIAAgAkEwEL4CGiABIQAgBCgCyAUiAkEFTwRAIAQoAqQFIQIgBCgCqAUhAAsgAkUNACAALQAAQQFxRQ0AIARBsAZqIARB0AVqQTAQvgIaIAMhAiAEKALYBiIAQQVPBEAgBCgCuAYhAiAEKAK0BiEACyAEQfgAaiIKIAIgACAEKAKYBSIGQQVPBH8gBCgC9AQhBiAEKAL4BAUgBwsgBhBwIARBsAZqIgAQjwIgACAKIARBGGoQCCAEQdAFaiAMQTAQvgIaIAAQjwIgChCPAgwACwALIAkgBEHwBGpBMBC+AhogBEGgBWoQjwIgBEGwBGoQjwIMAwsgByECIAQoApgFIgBBBU8EQCAEKAL4BCECIAQoAvQEIQALIARB+ABqIgMgAiAAIAIgABBwIARBsAZqIgAgAyAEQRhqEAggBEGABmoiAiAGQTAQvgIaIAAQjwIgAxCPAiAEQfAEaiIAEI8CIAAgAkEwEL4CGiAEQaAFahAZDAALAAsgCSAEQbAEakEwEL4CGgsgBEGwBmogBEHMAWogCUEwEL4CQTAQvgIaAn8CQAJAAkAgBCgCQCICQQVPBEAgBCgCHCICDQEMAwsgDSEAIAJFDQIMAQsgBCgCICEACyACQQZ0IAJBA3QgAGpBCGspAwB5p2tBB2pBA3YMAQtBAAshCwJAIAQCfwJ/AkACQCAEKALYBiICQQVPBEAgBCgCtAZFDQEgBCgCtAYiAEEBayEGQQAgAEUNBBogBCgCuAYMAwsgAg0BC0G4scIALQAAGkEBIQJBARAKIgNFDRIgA0EAOgAAQQEhCAwDCyACQQFrIQYgAiEAIARBuAZqCyEBIABBBnQgASAGQQN0aikDAHmna0EHakEDdgsQ4AEgBEEANgKgAiAEIAQoAgQ2ApwCIAQgBCgCACIDNgKYAiACQQRNBH8gBEG4BmoFIAQoArQGIQIgBCgCuAYLIQEgAiAGTwRAIAEgBkEDdGohB0EAIQIDQAJAAkACQAJAIAEgB0YEQCAEKALYBiIAQQRNBH8gBEG4BmoFIAQoArQGIQAgBCgCuAYLIAAgBk0NAyAGQQN0aikDACIlUA0BA0AgBCgCnAIgAkYEQCAEQZgCaiACEIoBIAQoAqACIQILIAQoApgCIgMgAmogJTwAACAEIAJBAWoiAjYCoAIgJUKAAlQgJUIIiCElRQ0ACwwCCyABKQMAISVBCCEAA0AgBCgCnAIgAkYEfyAEQZgCaiACEIoBIAQoApgCIQMgBCgCoAIFIAILIANqICU8AAAgBCAEKAKgAkEBaiICNgKgAiAlQgiIISUgAEEBayIADQALDAMLIAQoApgCIQMLIAQoApwCIQggAkECSQ0EIAJBAXYhDCACQQFrIQBBACEBA0AgASADaiIHLQAAIQYgByAAIANqIgotAAA6AAAgCiAGOgAAIABBAWshACAMIAFBAWoiAUcNAAsMBAsgBiAAQdjuwAAQtwEACyABQQhqIQEMAAsACyAGIAJByO7AABC4AQALAn8CQAJAAkAgAiALSyIKBH9BEgUgBEGYAmogCxDMASAEKAKgAiIHIAsgAmsiAUkNASAHIAFrIgAgAkcNAiABIAQoApgCIgFqIAMgAhC+AhogBCgCnAIhBkEUCyEAIAgEQCADECILIARBsAZqEI8CIAoNBAJAAkAgBCgCQCICQQVPBEAgBCgCHCICDQEMBQsgAkUNBAwBCyAEKAIgIQ0LIAJBBnQgAkEDdCANakEIaykDAHmna0EHakEDdgwDCyABIAdB9IjBABC5AQALIAAgAkGEicEAELsBAAtBAAshC0ECIQAgCyAXQR9qTwRAIAdFDQYgAS0AACIAQQAgAGtywEEAThCXAiECIAdBAUYNCyALQRRrIQwgAS0AASIAQf4Bc0EBaiAAcsBBAE4QlwIgAnEQlwIhDSALQRRJDQcgByALSQ0IIBdBFGohCAJAQRQgASALaiABIAxqIgprIgAgAEEUTxtFBEBBASEADAELQQEhAEEAIQIDQCACIBRqLQAAIAIgCmotAABzIgNBACADa3LAQQBOEJcCIABxIQAgAkEBaiICQRRHDQALCyAAEJcCIA1xEJcCIQ0gCyAIayIIIAxLDQkgByAMSQ0KAkAgCiABIAhqayIAIBcgACAXSRtFBEBBASEPDAELQQAgF2shAiARIQBBASEPA0AgAC0AACACIApqLQAAcyIDQQAgA2tywEEAThCXAiAPcSEPIABBAWohACACQQFqIgINAAsLIA8QlwIgDXEQlwIhAiAIQQFrIgAgB08NDEEAIQ8gACABai0AACIAQQAgAGtywEEAThCXAiACcRCXAiEDAkAgCEEDRg0AIAEgB2ohCCAXIAtrQRdqIQBBAiEHIAEhAgNAAkAgD0EBcQRAIAIgCEcNAQwDCyAIIAJrIAdNDQIgAiAHaiECCyACLQAAIQ1BASEPIAJBAWohAkEAIQcgDUEBaiANQX9zcsBBAE4QlwIgA3EQlwIhAyAAQQFqIgANAAsLQRRBAiADQf8BcUEBRhshAAsgBkUNACABECILIARBoANqEI8CIBdFDQELIBEQIgsgAEEURw0AQQAMAQtBuLHCAC0AABpBPBAKIgJFDQogAiAHNgIMIAIgBjYCCCACIAE2AgQgAiAANgIAIAJBEGogBEH0AmpBLBC+AhogBEIENwK4BiAEQZjlwAA2ArQGIAQgAjYCsAYgBEGwBmpB9NfAABAuQYTYwAAQWgshAiAEKALsAgRAIAQoAugCECILIBIEQCAWECILIARBGGoQjwIgBEHIAGoQjwIMCgtBAEEAQYCKwQAQtwEACyAMIAtBoIrBABC6AQALIAsgB0GgisEAELgBAAsgCCAMQbCKwQAQugEACyAMIAdBsIrBABC4AQALQQFBAUGQisEAELcBAAsgACAHQcCKwQAQtwEACyAEKAK0BgRAIBYQIgtBuLHCAC0AABpBCBAKIgBFDQEgACAlQiCIPgIEIAAgJT4CACAEQgQ3ArgGIARByOXAADYCtAYgBCAANgKwBiAEQbAGakHU18AAEC5B5NfAABBaIQILIARBGGoQjwIgBEHIAGoQjwIMAQsACyAEQZAHaiQAIAINCiATQYDnwABBCBBzIgBFDQUgAEHU4cAAQQMQcyIARQ0GIABB1+HAAEEDEHMiAEUNByAALQAAQQVHDQggAEEMaigCAA0JQbixwgAtAAAaQQEQCiIARQ0RIABBBToAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakGI4sAAEC4hAgwKCyAFIAE2AsgBIAUgAiADIAMgAUEBaiIAIAAgA0sbELYBQbixwgAtAAAaIAUoAgQhAiAFKAIAIQBBFBAKIgENAQwQCyAFKAJkIQEMAQsgASAANgIMIAFBFjYCACABIAI2AhAgBUHgAmoQtAELIAUoAtABRQ0AIAUoAswBECILAkACQAJAAkAgASgCAA4CAAEDCyABQQhqKAIARQ0CIAEoAgQhAwwBCyABLQAEQQNHDQEgAUEIaigCACIDKAIAIgIgAygCBCIAKAIAEQQAIAAoAgRFDQAgAhAiCyADECILIAEQIkG4scIALQAAGkEBEAoiAEUNDCAAQQE6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpB/OfAABAuIQIMCQtBuLHCAC0AABpBARAKIgBFDQsgAEEBOgAAIAVCBDcCyAEgBUGw5cAANgLEASAFIAA2AsABIAVBwAFqQZjiwAAQLiECDAQLQbixwgAtAAAaQQEQCiIARQ0KIABBBToAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakGY4sAAEC4hAgwDC0G4scIALQAAGkEBEAoiAEUNCSAAQQU6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpBmOLAABAuIQIMAgtBuLHCAC0AABpBARAKIgBFDQggAEEFOgAAIAVCBDcCyAEgBUGw5cAANgLEASAFIAA2AsABIAVBwAFqQZjiwAAQLiECDAELIAVByABqIABBBGoQ5wECQAJAAkAgBUEwakHw6cAAQQcQcyIBBEAgAS0AAEEDRiIARQ0BIAFBDGooAgBBA0YEQCABKAIEQQAgABtB9+nAAEEDELwCRQ0DC0G4scIALQAAGkEBEAoiAEUNCyAAQQI6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpBqOrAABAuIQIMAwtBuLHCAC0AABpBARAKIgBFDQogAEEBOgAAIAVCBDcCyAEgBUGw5cAANgLEASAFIAA2AsABIAVBwAFqQbjqwAAQLiECDAILQbixwgAtAAAaQQEQCiIARQ0JIABBAToAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakG46sAAEC4hAgwBCwJAAkACQAJAAkAgBUEwakGA58AAQQgQcyIABEAgAEGT3MAAQQUQcyINRQ0BIA0tAABBBEYiBkUNBCAFQfgAakEAQcEAELsCIQEgBUL+uevF6Y6VmRA3A2ggBUKBxpS6lvHq5m83A2AgBUIANwNwIBVBP0sNAiABIBkgFRC+AhogFSEDDAMLQbixwgAtAAAaQQEQCiIARQ0NIABBAToAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakGo3MAAEC4hAgwFC0G4scIALQAAGkEBEAoiAEUNDCAAQQE6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpBqNzAABAuIQIMBAsgBSAVQQZ2IgCtNwNwIAVB4ABqIBkgABANIAEgGSAVQUBxaiAVQT9xIgMQvgIaCyAFIAM6ALgBIAVBwAFqIAVB4ABqQeAAEL4CGiAFQagCakIANwMAIAVCADcDoAIgBSkD0AEgBUHYAWoiAiAFQZgCai0AACIDaiIBQYABOgAAIAUgBSkDyAE3A7gCIAUgBSkDwAE3A7ACIANBP3MiAARAIAFBAWpBACAAELsCGgtCCYYgA61CA4aEISQCQCADQThxQThHBEAgBUGQAmogJDcDACAFQbACaiACQQEQDQwBCyAFQbACaiIBIAJBARANIAVB4AJqIgBBAEE4ELsCGiAFICQ3AJgDIAEgAEEBEA0LIAVBADoAmAIgBUHUAmpCkICAgMAANwIAIAVBADYCzAIgBSAFQbACaiIANgLIAiAFIAVBoAJqNgLQAiAFQeACaiAFQcgCaiAAIAVBwAJqEKkBAkACQCAFKAKAAyIAIAUoAvwCIgJNDQAgACACayEAIAUoAugCIgcgAiAFKALwAiIIbGohASAFKAL0AiACQQJ0aiEDIAhBBEYhAgNAIAdFDQEgAkUNAiABIAMoAgA2AAAgASAIaiEBIANBBGohAyAAQQFrIgANAAsLIAVB0AJqIgAgBUGoAmopAwA3AwAgBSAFKQOgAjcDyAJBuLHCAC0AABpBEBAKIgJFDQsgAiAFKQPIAjcAACACQQhqIAApAwA3AABBACEBQbixwgAtAAAaQQsQCiIIRQ0LIA1BBGpBACAGGyEGIAggAikAADcAACAIQQdqIAJBB2ooAAA2AAAgAhAiIAVB4ABqQRAQzAEgBSgCaCEMIAUoAmAhCkEAIQMCQAJAAkACQANAIANBBGoiACAMSw0BIAMgCmoiDSABIAhqIgItAAAiB0ECdkHQ2cAAai0AADoAACANQQNqIAJBAmotAAAiA0E/cUHQ2cAAai0AADoAACANQQJqIAJBAWotAAAiAkECdCADQQZ2ckE/cUHQ2cAAai0AADoAACANQQFqIAdBBHQgAkEEdnJBP3FB0NnAAGotAAA6AAAgAUEGSSABQQNqIQEgACEDDQALIAxBDUkNAyAKIAgtAAkiAEECdkHQ2cAAai0AADoADCAMQQ1GDQIgCiAAQQR0IAgtAAoiAEEEdnJBP3FB0NnAAGotAAA6AA0gDEEORwRAIAogAEECdEE8cUHQ2cAAai0AADoADiAMQQ9rIgBFDQIgCkE9OgAPIAxBB2siAEEAIAAgDE0bIQcgCkEDakF8cSAKayECIAUoAmQhGkEAIQEDQAJAAkACQCABIApqLQAAIg3AIgNBAE4EQCACIAFrQQNxDQEgASAHTw0CA0AgASAKaiIAQQRqKAIAIAAoAgByQYCBgoR4cQ0DIAFBCGoiASAHSQ0ACwwCC0KAgICAgCAhJkKAgICAECEkAkACQAJAAn4CQAJAAkACQAJAAkACQAJAIA1BrK3AAGotAABBAmsOAwADAQsLIAFBAWoiAyAMSQ0BQgAhJgwJC0IAISYgAUEBaiIAIAxJDQIMCAsgAyAKaiwAAEG/f0oNCAwGC0IAISYgAUEBaiIAIAxPDQYgACAKaiwAACEAAkACQCANQeABRwRAIA1B7QFGDQEgA0EfakH/AXFBDEkNAiADQX5xQW5HDQQgAEFASA0FDAQLIABBYHFBoH9GDQQMAwsgAEGff0oNAgwDCyAAQUBIDQIMAQsgACAKaiwAACEAAkACQAJAAkAgDUHwAWsOBQEAAAACAAsgA0EPakH/AXFBAksgAEFATnINAwwCCyAAQfAAakH/AXFBME8NAgwBCyAAQY9/Sg0BCyABQQJqIgAgDE8NBSAAIApqLAAAQb9/Sg0CQgAhJCABQQNqIgMgDE8NBiADIApqLAAAQUBIDQRCgICAgIDgAAwDC0KAgICAgCAMAgtCACEkIAFBAmoiAyAMTw0EIAMgCmosAABBv39MDQILQoCAgICAwAALISZCgICAgBAhJAwCCyADQQFqIQEMBAtCACEkCyAFIAw2AsgBIAUgGjYCxAEgBSAKNgLAASAFICYgAa2EICSENwLMAUH/gsAAQQwgBUHAAWpB2IDAAEGMg8AAEK4BAAsgAUEBaiEBDAELIAEgDE8NAANAIAEgCmosAABBAEgNASAMIAFBAWoiAUcNAAsMCQsgASAMSQ0ACwwHC0EOIAxB3JHAABC3AQALIAAgDEHskcAAELgBAAsgACAAQfiLwAAQtwEAC0ENIAxBzJHAABC3AQALQQwgDEG8kcAAELcBAAsgCEEEQZTZwAAQuwEAC0G4scIALQAAGkEBEAoiAEUNCSAAQQE6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpBqNzAABAuIQIMAQsgBSAMNgLoAiAFIBo2AuQCIAUgCjYC4AIgCBAiIAUoAugCIQAgBUKAgICAEDcCyAICQCAAQQFNBEAgAEEBRg0BDAkLIAUoAuACLAABQb9/TA0ICyAFQewAaiAFQcwCajYCACAFQQE2AmggBUEANgJgIAUgBUHIAmo2AmQgBUHAAWoiACAFQeACaiAFQeAAahB+IAVB2AFqIgFBkdzAADYCACAFQZDcwAA2AtQBIAAQVyAAEJEBIAUgBSgC6AIiAEECayICNgLIAiACBEAgAEECSQ0FIAUoAuACIAJqLAAAQb9/TA0FCyAFQQI2AmggBUEANgJgIAUgBUHIAmo2AmQgBUHAAWoiACAFQeACaiAFQeAAahB+IAFBk9zAADYCACAFQZHcwAA2AtQBIAAQVyAAEJEBIAUoAuACIQ0gBSgC5AIhBwJAIAYoAggiAARAIAUoAugCIQMgBigCACIBIABBGGxqIQIDQAJAIAEtAAAiAEEDRw0AIAFBDGooAgAgA0cNACABQQRqKAIAQQAgAEEDRhsgDSADELwCRQ0DCyABQRhqIgEgAkcNAAsLQbixwgAtAAAaQQEQCiIARQ0JIABBAzoAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakGY3MAAEC4hAiAHRQ0BIA0QIgwBCyAHBEAgDRAiCyAFQcABaiESIAVBMGoiByECIwBBgAFrIgkkABADIggQBCIsRAAAAAAAAODDZiEAAkACQAJAAn8CQAJAAkACQAJAAkACQAJ/AkACQAJAAkBC////////////AAJ+ICyZRAAAAAAAAOBDYwRAICywDAELQoCAgICAgICAgH8LQoCAgICAgICAgH8gABsgLET////////fQ2QbQgAgLCAsYRsiJCAkQugHfyIkQugHfn0iJ0I/hyIoICR8IiQgJEKAowV/IiRCgKMFfn0iJUI/hyImICR8IiRCxY3U/wd9QoCAgIBwVA0AICSnIgBBqPUraiIBIABBu/IrakgNACABIAFBsfUIbSIBQbH1CGxrIg1BH3VBsfUIcSANaiIAQe0CbiEDAkACQCAAQbz3CE0EQAJ/IAAgA0HtAmxrIgYgA0Hbk8AAai0AACIATwRAIAYgAGsMAQsgA0EBayIDQZADSw0CIAYgA0Hbk8AAai0AAGtB7QJqCyEGIANBkANPDQIgBkHtAksNAyADIA1BH3UgAWpBkANsaiIAQf//D2tBgoBgSQ0DIAZBBHRBEGogAEENdHIiBiADQZyXwABqLQAAciIPQfg/cSIBQeAtSw0DIChC6AeDICd8p0HAhD1sIgBB/6fWuQdLDQMgD0UgJkKAowWDICV8pyIDQf+iBUsgA0E8cEE7RyAAQf+T69wDS3Fycg0DIAhBhAFPBEAgCBABCwJAAkACQAJAIAMgA0GAowVtIgBBgKMFbGtBH3UgAGpBAWoOAwADAQMLIA9B8D9xIgBBEUkNASAAQRBrIA9Bj0BxciEPDAILIAFB0C1NBEAgAUEQaiAPQYdAcXIhDwwCCwJ/IAZBDXVBAWoiAUGQA28iAEEfdUGQA3EgAGoiAEGQA0kEQCABQf//D2tBgoBgTwR/IABBnJfAAGotAAAgAUENdHJBEHIFQQALDAELIABBkANBmJvAABC3AQALIg8NAQwTCyAGQQ11QQFrQQxBHxCUASIPRQ0SCyASAn8CQAJAAkACQAJAAkACQAJAIAJBgOfAAEEIEHMiAARAIABB4N/AAEEKEHMiAEUNCCAALQAAIgJBAWsOBQIDBAYHAQtBuLHCAC0AABpBARAKIgBFDRQgAEEBOgAAIAlCBDcCICAJQbDlwAA2AhwgCSAANgIYIAlBGGpBvODAABAuDAgLIAlBADoAAAwDCyAJQQE6AAAgCSAALQABOgABDAILIAlBEGogAEEQaikDADcDACAJQQI6AAAgCSAAKQMINwMIDAELIAlBBHIgAEEEaigCACAAQQxqKAIAENYBIAlBAzoAAAtBASELIAkgCUH/AGpBoIDAABD4ASEYQQEhAwwMCyAJQQRyIABBBGoQOCAJQQQ6AAAgCUEIaigCACEAIAkgCSgCBCIIIAlBDGooAgAiDUEYbGo2AmQgCSAINgJgIAkgADYCXCAJIAg2AlgCQCANRQ0AIAkgCEEYajYCYCAILQAAIgBBBkYNACAJQSFqIgYgCEEJaikAADcAACAJQShqIgMgCEEQaikAADcAACAJIAA6ABggCSAIKQABNwAZIAlB8ABqIgIgCUEYaiIBEGsgCSgCcA0SIA1BAUYNCCAJKAJ0IRggCSAIQTBqNgJgIAgtABgiAEEGRg0IIAYgCEEhaikAADcAACADIAhBKGopAAA3AAAgCSAAOgAYIAkgCEEZaikAADcAGSACIAEQbCAJKAJwDRIgDUECRg0JIAkoAnQhHiAJIAhByABqNgJgIAgtADAiAEEGRg0JIAYgCEE5aikAADcAACADIAhBQGspAAA3AAAgCSAAOgAYIAkgCEExaikAADcAGSACIAEQbCAJKAJwDRIgCSgCdCEfQQAhCyANQQNHBEAgDUG03cAAEKsBIRhBASELCyAJQdgAahCJAQwNC0EAQZTewAAQqwEMEgsgCUEEciAAQQRqEOcBIAlBBToAACAJQQxqKAIAIQpBACEDIAlBMGohDCAJQdAAaiAJKAIEIgEEfyAJQcwAaiAJQQhqKAIAIgA2AgAgCUHIAGogATYCACAJQcQAakEANgIAIAlBPGogADYCACAJQThqIAE2AgAgCUE0akEANgIAQQEhAyAKBUEACzYCACAJQUBrIAM2AgAgCSADNgIwIAlBBjoAGCAJQdgAakEBciEUIAlBGGpBAXIhESAJQeAAaiEIIAlB5wBqIQ1BASETA0ACQCAJQfAAaiIBIAwQPCAJKAJwIgNFDQAgCCADIAkoAngiAEEYbGoiBkEJaikAADcDACANIAZBEGopAAA3AAAgCSAGKQABNwNYIAYtAAAiEEEGRg0AIAMgAEEMbGoiBkGUAmooAgAhAyAGQZACaigCACEAIAZBjAJqKAIAIQYgCUEYahCvASARIAkpA1g3AAAgEUEIaiIOIAgpAwA3AAAgEUEPaiILIA0pAAA3AAAgCSAQOgAYAkAgBkUEQCABIAAgAxC+AQwBCyAJQfAAaiAGIAMQvgEgAEUNACAGECILIAktAHANCgJAAkACQAJAIAktAHEOAwECAwALIBQgESkAADcAACAUQQhqIA4pAAA3AAAgFEEPaiALKQAANwAAIAlBBjoAGCAJIBA6AFggCUHYAGoQtAEMBAsgIARAQajiwABBBBDKAQwOCyAUIBEpAAA3AAAgFEEIaiAOKQAANwAAIBRBD2ogCykAADcAACAJQQY6ABggCSAQOgBYIAlB8ABqIAlB2ABqEGsgCSgCcA0MIAkoAnQhGEEBISAMAwsgIQRAQaziwABBBRDKAQwNCyAUIBEpAAA3AAAgFEEIaiAOKQAANwAAIBRBD2ogCykAADcAACAJQQY6ABggCSAQOgBYIAlB8ABqIAlB2ABqEGwgCSgCcA0LIAkoAnQhHkEBISEMAgsgE0UEQEGx4sAAQQMQygEMDAsgFCARKQAANwAAIBRBCGogDikAADcAACAUQQ9qIAspAAA3AAAgCUEGOgAYIAkgEDoAWCAJQfAAaiAJQdgAahBsIAkoAnANCiAJKAJ0IR9BACETDAELCwJAICAEQCAhRQRAQaziwABBBRDJAQwMCyATRQ0BQbHiwABBAxDJAQwLC0Go4sAAQQQQyQEMCgtBACEDQQAhCyAJKAJQBEAgCkHk3cAAEKsBIRhBASELCyAMEIABIAlBGGoQrwEMCgtBuLHCAC0AABpBARAKIgBFDQwgAEEBOgAAIAlCBDcCICAJQbDlwAA2AhwgCSAANgIYIAlBGGpBvODAABAuCzYCBEEBIQMMCgsgA0GRA0HslsAAELcBAAtBf0GRA0H8lsAAELcBAAsgA0GQA0GYm8AAELcBAAsgCUEkakIANwIAIAlBATYCHCAJQeiSwAA2AhggCUGMrMIANgIgIAlBGGpBxJLAABDrAQALQQFBlN7AABCrAQwKC0ECQZTewAAQqwEMCQsgCSgCdAshGCAMEIABIAlBGGoQrwFBACEDQQEhCwsCQAJAAkAgAkEEaw4CAgEACyAJELQBDAILIANFDQEgCUEEchCyAQwBCyAJKAIEIQAgCUEMaigCACICBEAgACEDA0AgAxC0ASADQRhqIQMgAkEBayICDQALCyAJQQhqKAIARQ0AIAAQIgsgCw0GIBggHiAfEJQBIghFBEAgCUEBOgAYQbzvwABBKyAJQRhqQZzewABBrODAABCuAQALAkAgCCAPTgRAIA9BDXUiAUGQA28hDSAIQQ11IgAgAEGQA20iAEGQA2xrIgJBH3VBkANxIAJqIgZBkQNPDQQgDUEfdUGQA3EgDWoiA0GRA08NBSAGQduTwABqLQAAIAZB7QJsIAhBBHZB/wNxampBAWutIAJBH3UgAGogAUHwfG1qIA1BH3ZqrEKx9Qh+fCADQduTwABqLQAAIANB7QJsIA9BBHZB/wNxampBAWutfSIkQh5VDQEgCSAkPAAAIAlBJGpCATcCACAJQQI2AhwgCUG04cAANgIYIAlBCTYCXCAJIAlB2ABqNgIgIAkgCTYCWCASQQRqIAlBGGoQRkEAIQMMAgtBuLHCAC0AABpBASEDQQEQCiIARQ0CIABBBDoAACAJQgQ3AiAgCUGw5cAANgIcIAkgADYCGCASIAlBGGpBxOHAABAuNgIEDAELQQAhAyASQQA2AgQLIBIgAzYCACAJQYABaiQADAcLAAsgBkGRA0GMl8AAELcBAAsgA0GRA0GMl8AAELcBAAsgCSgCdAshGCAJQdgAahCJAQsgCSAYNgIYQbzvwABBKyAJQRhqQazewABBnODAABCuAQALQbzewABBK0HQ38AAENEBAAsgBSgCwAFFBEAgBUHIAWopAgAhJCAFKALEASEIQQAhACAFQQA2AmggBUIENwJgIwBBIGsiBiQAAkACQAJAAkACQAJAIAdBgOfAAEEIEHMiAQRAIAFBiOfAAEEIEHMiAUUNASABLQAAQQNGIgNFDQIgAUEMaigCACIHRQ0DIAEoAgQhASAGQQhqIAcQ4AEgBigCDCECIAYoAgggAUEAIAMbIAcQvgIhASASIAc2AgggEiACNgIEIBIgATYCAAwEC0G4scIALQAAGkEBEAoiAUUNBCABQQE6AAAgBkIENwIYIAZBsOXAADYCFCAGIAE2AhAgBkEQakHQ58AAEC4hASASQQA2AgAgEiABNgIEDAMLQbixwgAtAAAaQQEQCiIBRQ0DIAFBAToAACAGQgQ3AhggBkGw5cAANgIUIAYgATYCECAGQRBqQdDnwAAQLiEBIBJBADYCACASIAE2AgQMAgtBuLHCAC0AABpBARAKIgFFDQIgAUEBOgAAIAZCBDcCGCAGQbDlwAA2AhQgBiABNgIQIAZBEGpB0OfAABAuIQEgEkEANgIAIBIgATYCBAwBC0G4scIALQAAGkEBEAoiAUUNASABQQY6AAAgBkIENwIYIAZBsOXAADYCFCAGIAE2AhAgBkEQakHA58AAEC4hASASQQA2AgAgEiABNgIECyAGQSBqJAAMAQsACyAFKALAASINBEAgBSgCyAEhCyAFKALEASEGIAgNBEEEIRNBAAwFCyAFKALEASECQQRBABDtASAIRSAkQv////8Pg1ByDQEgCBAiDAELIAUoAsQBIQILIAVByABqELIBCyAFQTBqELQBDAMLIAUgJDcCWCAFIAg2AlQgBUHgAGoiASgCCCIAIAEoAgRGBEAgASAAEIIBIAEoAgghAAsgASAAQQFqNgIIIAEoAgAgAEEMbGoiASAFQdQAaiIAKQIANwIAIAFBCGogAEEIaigCADYCACAFKAJoIQAgBSgCYCETIAUoAmQLIQIgBUGoAmogBUHQAGooAgA2AgAgBSAFKQJINwOgAiAFQTBqELQBIBNFDQFBuLHCAC0AABogBSgCqAIhASAFKAKkAiEHIAUoAqACIQhBgAEQCiIDRQ0EIAVCgAE3AmQgBSADNgJgIAUgBUHgAGoiAzYCMCADQefswABBARDkASAFIAEEf0EBBSADQdzswABBARDkAUEACzoA5AIgBSAFQTBqNgLgAgJ/IAhFBEBBACEBQQAMAQsgBSAHNgLcASAFIAg2AtgBIAVBADYC1AEgBSAHNgLMASAFIAg2AsgBIAVBADYCxAFBAQshAyAFIAE2AuABIAUgAzYC0AEgBSADNgLAAQNAAkAgBUEIaiAFQcABahBEIAUoAggiAQRAIAVB4AJqIAEgBSgCDBDcAQwCBSAFLQDkAgRAIAUoAuACKAIAQdzswABBARDkAQsgBSgCZCEiIAUoAmAiB0UNASAFKAJoIRogBUGgAmoQsgFBBCEKQQAhA0EBDAULAAsLIAUgIjYCwAFBvO/AAEErIAVBwAFqQfDqwABBjOvAABCuAQALQeiAwABBKkGUgcAAEN4BAAtBuLHCAC0AABpBDBAKIgpFDQIgBUEANgK4AiAFQgE3ArACIAVB+ABqQcjqwAA2AgAgBUEDOgCAASAFQSA2AnAgBUEANgJ8IAVBADYCaCAFQQA2AmBBuLHCAC0AABogBSAFQbACajYCdCACKAIAIQEgAigCCCEAQQgQCiITRQ0CIBMgATYCACATIAEgAEEEdGo2AgQgBUEANgLsAiAFQoGAgIAQNwLkAiAFIBM2AuACQQEhAwNAAkAgA0UNACATIANBA3RqQQhrIQECQANAIAEoAgAiDCABQQRqKAIARw0BIAFBCGshASADQQFrIgMNAAsgBUEANgLoAgwBCyABIAxBEGo2AgAgDCgCCCIGIAxBDGooAgBBBHRqIQcgBSADNgLoAiAFKALkAiADRgRAIAVB4AJqIQgjAEEgayILJAACQAJAIANBAWoiAUUNAEEEIAgoAgQiDUEBdCIAIAEgACABSxsiACAAQQRNGyIDQQN0IQEgA0GAgICAAUlBAnQhAAJAIA1FBEAgC0EANgIYDAELIAtBBDYCGCALIA1BA3Q2AhwgCyAIKAIANgIUCyALQQhqIAAgASALQRRqEHcgCygCDCEAIAsoAghFBEAgCCADNgIEIAggADYCAAwCCyAAQYGAgIB4Rg0BIABFDQAACxDqAQALIAtBIGokACAFKALoAiEDCyAFKALgAiITIANBA3RqIgAgBzYCBCAAIAY2AgAgBSADQQFqIgM2AugCIAVByAJqIAwoAgAgDCgCBCgCDBECACAFKALIAkECRw0BIAUoAswCIQEgBSgC0AIhACAFQQA2AjggBUIBNwIwIAVBAzoA4AEgBUEgNgLQASAFQQA2AtwBIAVByOnAADYC2AEgBUEANgLIASAFQQA2AsABIAUgBUEwajYC1AECQCABIAVBwAFqIAAoAgwRAQBFBEAgBSgCMCIBRQ0DIAUpAjQhJCAFIAUoAuwCIgBBAWo2AuwCIAUgJDcCNCAFIAE2AjACQCAARQRAIAVB4ABqIAEgJEIgiKcQEQ0BIAUoAjRFDQQgBSgCMBAiDAQLIAVBATYCxAEgBUGM6MAANgLAASAFQgE3AswBIAVBHTYCzAIgBSAFQcgCajYCyAEgBSAFQTBqNgLIAiAFQbACakHI6sAAIAVBwAFqEC9FDQILIAUoAjQEQCAFKAIwECILIAUoAuQCBEAgExAiC0Gc6sEAQTcgBUHUAGpB4OrAAEGw68EAEK4BAAtBnOrBAEE3IAVB1ABqQeDpwABBsOvBABCuAQALIAUoAjRFDQEgBSgCMBAiDAELCyAFKALkAgRAIBMQIgsgBUHIAWogBUG4AmooAgAiADYCACAFIAUpArACIiQ3A8ABIApBCGogADYCACAKICQ3AgAgAigCACACKAIIEMYBIAIoAgQEQCACKAIAECILIAIQIkEBIQ1BBCETQQAhB0EAIQtBACEGQQAhAEEAIQJBASEDQQALIQEgIwRAIBkQIgsgBUEuaiAFQcIBai0AADoAACAFIAUvAMABOwEsIBUEQCAdECILIBwEQCAbECILQbixwgAtAAAaQTgQCiIIRQ0BIAggAToANCAIIBo2AjAgCCAiNgIsIAggBzYCKCAIIAs2AiQgCCAGNgIgIAggDTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0hPWFzc2VydGlvbiBgbGVmdCAgcmlnaHRgIGZhaWxlZAogIGxlZnQ6IAogcmlnaHQ6IHwTEAAQAAAAjBMQABcAAACjExAACQAAACByaWdodGAgZmFpbGVkOiAKICBsZWZ0OiAAAAB8ExAAEAAAAMQTEAAQAAAA1BMQAAkAAACjExAACQAAAAyWEAAAAAAAj48QAAIAAABFAAAADAAAAAQAAABPAAAAUAAAAFEAAAAgICAgIHsgIHsKLAogfSgoCgoAAEUAAAAEAAAABAAAAFIAAABsaWJyYXJ5L2NvcmUvc3JjL2ZtdC9udW0ucnMATBQQABsAAABpAAAAFwAAADB4AADUEhAAGwAAAC8JAAAaAAAA1BIQABsAAAAoCQAAIgAAAGxpYnJhcnkvY29yZS9zcmMvc2xpY2UvbWVtY2hyLnJznBQQACAAAACtAAAACQAAAJwUEAAgAAAAkQAAAB4AAAByYW5nZSBzdGFydCBpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGgg3BQQABIAAADuFBAAIgAAAHJhbmdlIGVuZCBpbmRleCAgFRAAEAAAAO4UEAAiAAAAc2xpY2UgaW5kZXggc3RhcnRzIGF0ICBidXQgZW5kcyBhdCAAQBUQABYAAABWFRAADQAAAGF0dGVtcHRlZCB0byBpbmRleCBzbGljZSBmcm9tIGFmdGVyIG1heGltdW0gdXNpemUAAAB0FRAAMQAAAGF0dGVtcHRlZCB0byBpbmRleCBzbGljZSB1cCB0byBtYXhpbXVtIHVzaXplsBUQACwAAABzb3VyY2Ugc2xpY2UgbGVuZ3RoICgpIGRvZXMgbm90IG1hdGNoIGRlc3RpbmF0aW9uIHNsaWNlIGxlbmd0aCAo5BUQABUAAAD5FRAAKwAAADSPEAABAAAAaW52YWxpZCB1dGYtOCBzZXF1ZW5jZSBvZiAgYnl0ZXMgZnJvbSBpbmRleCA8FhAAGgAAAFYWEAASAAAAaW5jb21wbGV0ZSB1dGYtOCBieXRlIHNlcXVlbmNlIGZyb20gaW5kZXggAAB4FhAAKgAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAEHursAACzMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDBAQEBAQAQayvwAAL2UZsaWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAKwXEAAfAAAAQgUAABIAAACsFxAAHwAAAEIFAAAoAAAArBcQAB8AAAA1BgAAFQAAAKwXEAAfAAAAYwYAABUAAACsFxAAHwAAAGQGAAAVAAAAWy4uLl1iZWdpbiA8PSBlbmQgKCA8PSApIHdoZW4gc2xpY2luZyBgACEYEAAOAAAALxgQAAQAAAAzGBAAEAAAAGR5EAABAAAAYnl0ZSBpbmRleCAgaXMgbm90IGEgY2hhciBib3VuZGFyeTsgaXQgaXMgaW5zaWRlICAoYnl0ZXMgKSBvZiBgAGQYEAALAAAAbxgQACYAAACVGBAACAAAAJ0YEAAGAAAAZHkQAAEAAAAgaXMgb3V0IG9mIGJvdW5kcyBvZiBgAABkGBAACwAAAMwYEAAWAAAAZHkQAAEAAABsaWJyYXJ5L2NvcmUvc3JjL3N0ci9tb2QucnMA/BgQABsAAAADAQAALAAAAGxpYnJhcnkvY29yZS9zcmMvdW5pY29kZS9wcmludGFibGUucnMAAAAoGRAAJQAAABoAAAA2AAAAKBkQACUAAAAKAAAAKwAAAAAGAQEDAQQCBQcHAggICQIKBQsCDgQQARECEgUTERQBFQIXAhkNHAUdCB8BJAFqBGsCrwOxArwCzwLRAtQM1QnWAtcC2gHgBeEC5wToAu4g8AT4AvoD+wEMJzs+Tk+Pnp6fe4uTlqKyuoaxBgcJNj0+VvPQ0QQUGDY3Vld/qq6vvTXgEoeJjp4EDQ4REikxNDpFRklKTk9kZVy2txscBwgKCxQXNjk6qKnY2Qk3kJGoBwo7PmZpj5IRb1+/7u9aYvT8/1NUmpsuLycoVZ2goaOkp6iturzEBgsMFR06P0VRpqfMzaAHGRoiJT4/5+zv/8XGBCAjJSYoMzg6SEpMUFNVVlhaXF5gY2Vma3N4fX+KpKqvsMDQrq9ub76TXiJ7BQMELQNmAwEvLoCCHQMxDxwEJAkeBSsFRAQOKoCqBiQEJAQoCDQLTkOBNwkWCggYO0U5A2MICTAWBSEDGwUBQDgESwUvBAoHCQdAICcEDAk2AzoFGgcEDAdQSTczDTMHLggKgSZSSysIKhYaJhwUFwlOBCQJRA0ZBwoGSAgnCXULQj4qBjsFCgZRBgEFEAMFgItiHkgICoCmXiJFCwoGDRM6Bgo2LAQXgLk8ZFMMSAkKRkUbSAhTDUkHCoD2RgodA0dJNwMOCAoGOQcKgTYZBzsDHFYBDzINg5tmdQuAxIpMYw2EMBAWj6qCR6G5gjkHKgRcBiYKRgooBROCsFtlSwQ5BxFABQsCDpf4CITWKgmi54EzDwEdBg4ECIGMiQRrBQ0DCQcQkmBHCXQ8gPYKcwhwFUZ6FAwUDFcJGYCHgUcDhUIPFYRQHwYGgNUrBT4hAXAtAxoEAoFAHxE6BQGB0CqC5oD3KUwECgQCgxFETD2AwjwGAQRVBRs0AoEOLARkDFYKgK44HQ0sBAkHAg4GgJqD2AQRAw0DdwRfBgwEAQ8MBDgICgYoCCJOgVQMHQMJBzYIDgQJBwkHgMslCoQGAAEDBQUGBgIHBggHCREKHAsZDBoNEA4MDwQQAxISEwkWARcEGAEZAxoHGwEcAh8WIAMrAy0LLgEwAzECMgGnAqkCqgSrCPoC+wX9Av4D/wmteHmLjaIwV1iLjJAc3Q4PS0z7/C4vP1xdX+KEjY6RkqmxurvFxsnK3uTl/wAEERIpMTQ3Ojs9SUpdhI6SqbG0urvGys7P5OUABA0OERIpMTQ6O0VGSUpeZGWEkZudyc7PDREpOjtFSVdbXF5fZGWNkam0urvFyd/k5fANEUVJZGWAhLK8vr/V1/Dxg4WLpKa+v8XHz9rbSJi9zcbOz0lOT1dZXl+Jjo+xtre/wcbH1xEWF1tc9vf+/4Btcd7fDh9ubxwdX31+rq9/u7wWFx4fRkdOT1haXF5+f7XF1NXc8PH1cnOPdHWWJi4vp6+3v8fP19+aQJeYMI8f0tTO/05PWlsHCA8QJy/u725vNz0/QkWQkVNndcjJ0NHY2ef+/wAgXyKC3wSCRAgbBAYRgawOgKsFHwmBGwMZCAEELwQ0BAcDAQcGBxEKUA8SB1UHAwQcCgkDCAMHAwIDAwMMBAUDCwYBDhUFTgcbB1cHAgYXDFAEQwMtAwEEEQYPDDoEHSVfIG0EaiWAyAWCsAMaBoL9A1kHFgkYCRQMFAxqBgoGGgZZBysFRgosBAwEAQMxCywEGgYLA4CsBgoGLzFNA4CkCDwDDwM8BzgIKwWC/xEYCC8RLQMhDyEPgIwEgpcZCxWIlAUvBTsHAg4YCYC+InQMgNYaDAWA/wWA3wzynQM3CYFcFIC4CIDLBQoYOwMKBjgIRggMBnQLHgNaBFkJgIMYHAoWCUwEgIoGq6QMFwQxoQSB2iYHDAUFgKYQgfUHASAqBkwEgI0EgL4DGwMPDWxpYnJhcnkvY29yZS9zcmMvdW5pY29kZS91bmljb2RlX2RhdGEucnPsHhAAKAAAAFAAAAAoAAAA7B4QACgAAABcAAAAFgAAAGxpYnJhcnkvY29yZS9zcmMvZXNjYXBlLnJzXHV7AAAANB8QABoAAABiAAAAIwAAAEUAAAAEAAAABAAAAA4AAABVdGY4RXJyb3J2YWxpZF91cF90b2Vycm9yX2xlbgAAAEUAAAAEAAAABAAAAFMAAAAAAwAAgwQgAJEFYABdE6AAEhcgHwwgYB/vLKArKjAgLG+m4CwCqGAtHvtgLgD+IDae/2A2/QHhNgEKITckDeE3qw5hOS8YoTkwHGFI8x6hTEA0YVDwaqFRT28hUp28oVIAz2FTZdGhUwDaIVQA4OFVruJhV+zkIVnQ6KFZIADuWfABf1oAcAAHAC0BAQECAQIBAUgLMBUQAWUHAgYCAgEEIwEeG1sLOgkJARgEAQkBAwEFKwM8CCoYASA3AQEBBAgEAQMHCgIdAToBAQECBAgBCQEKAhoBAgI5AQQCBAICAwMBHgIDAQsCOQEEBQECBAEUAhYGAQE6AQECAQQIAQcDCgIeATsBAQEMAQkBKAEDATcBAQMFAwEEBwILAh0BOgECAQIBAwEFAgcCCwIcAjkCAQECBAgBCQEKAh0BSAEEAQIDAQEIAVEBAgcMCGIBAgkLB0kCGwEBAQEBNw4BBQECBQsBJAkBZgQBBgECAgIZAgQDEAQNAQICBgEPAQADAAMdAh4CHgJAAgEHCAECCwkBLQMBAXUCIgF2AwQCCQEGA9sCAgE6AQEHAQEBAQIIBgoCATAfMQQwBwEBBQEoCQwCIAQCAgEDOAEBAgMBAQM6CAICmAMBDQEHBAEGAQMCxkAAAcMhAAONAWAgAAZpAgAEAQogAlACAAEDAQQBGQIFAZcCGhINASYIGQsuAzABAgQCAicBQwYCAgICDAEIAS8BMwEBAwICBQIBASoCCAHuAQIBBAEAAQAQEBAAAgAB4gGVBQADAQIFBCgDBAGlAgAEAAJQA0YLMQR7ATYPKQECAgoDMQQCAgcBPQMkBQEIPgEMAjQJCgQCAV8DAgEBAgYBAgGdAQMIFQI5AgEBAQEWAQ4HAwXDCAIDAQEXAVEBAgYBAQIBAQIBAusBAgQGAgECGwJVCAIBAQJqAQEBAgYBAWUDAgQBBQAJAQL1AQoCAQEEAZAEAgIEASAKKAYCBAgBCQYCAy4NAQIABwEGAQFSFgIHAQIBAnoGAwEBAgEHAQFIAgMBAQEAAgsCNAUFAQEBAAEGDwAFOwcAAT8EUQEAAgAuAhcAAQEDBAUICAIHHgSUAwA3BDIIAQ4BFgUBDwAHARECBwECAQVkAaAHAAE9BAAEAAdtBwBggPAATGF5b3V0c2l6ZWFsaWduAABFAAAABAAAAAQAAABUAAAASQAAAAQAAAAEAAAATQAAAE5vbmVTb21lSQAAAAQAAAAEAAAAVQAAAEkAAAAEAAAABAAAAFYAAABCT09MRUFOSU5URUdFUkJJVCBTVFJJTkdPQ1RFVCBTVFJJTkdOVUxMT0JKRUNUIElERU5USUZJRVJSRUFMRU5VTUVSQVRFRFVURjhTdHJpbmdTRVFVRU5DRVNFVE51bWVyaWNTdHJpbmdQcmludGFibGVTdHJpbmdUZWxldGV4U3RyaW5nVmlkZW90ZXhTdHJpbmdJQTVTdHJpbmdVVENUaW1lR2VuZXJhbGl6ZWRUaW1lVmlzaWJsZVN0cmluZ0JNUFN0cmluZ0FQUExJQ0FUSU9OIFtdICggJBAADQAAAC0kEAADAAAANI8QAAEAAABwcmltaXRpdmVjb25zdHJ1Y3RlZEgkEAAJAAAAUSQQAAsAAABDT05URVhULVNQRUNJRklDIFsAAGwkEAASAAAALSQQAAMAAAA0jxAAAQAAAFBSSVZBVEUgWwAAAJgkEAAJAAAALSQQAAMAAAA0jxAAAQAAAFRhZygweAAAvCQQAAYAAACPjxAAAgAAADSPEAABAAAAIGF0IERFUiBieXRlIAAAANwkEAANAAAAZGF0ZS90aW1lIGVycm9yAPQkEAAPAAAAb3BlcmF0aW9uIGZhaWxlZAwlEAAQAAAAZmlsZSBub3QgZm91bmQAACQlEAAOAAAAQVNOLjEgREVSIG1lc3NhZ2UgaXMgaW5jb21wbGV0ZTogZXhwZWN0ZWQgLCBhY3R1YWwgADwlEAAqAAAAZiUQAAkAAABJL08gZXJyb3I6IACAJRAACwAAAGluZGVmaW5pdGUgbGVuZ3RoIGRpc2FsbG93ZWSUJRAAHAAAAGluY29ycmVjdCBsZW5ndGggZm9yIAAAALglEAAVAAAAQVNOLjEgIG5vdCBjYW5vbmljYWxseSBlbmNvZGVkIGFzIERFUgAAANglEAAGAAAA3iUQAB8AAABtYWxmb3JtZWQgT0lEAAAAECYQAA0AAAB1bmtub3duL3Vuc3VwcG9ydGVkIE9JRDogAAAAKCYQABkAAABTRVQgT0YgY29udGFpbnMgZHVwbGljYXRlAAAATCYQABkAAABTRVQgT0Ygb3JkZXJpbmcgZXJyb3IAAABwJhAAFQAAAGludGVnZXIgb3ZlcmZsb3eQJhAAEAAAAEFTTi4xIERFUiBtZXNzYWdlIGlzIHRvbyBsb25nAAAAqCYQAB0AAABQRU0gZXJyb3I6IADQJhAACwAAAEyMEAARAAAAcmVhZGVyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHJlcXVlc3RlZCBvcGVyYXRpb24A7CYQAC8AAAB1bmtub3duIHRhZyBtb2RlJCcQABAAAABpbnZhbGlkIHRhZyBudW1iZXIAADwnEAASAAAAdW5leHBlY3RlZCBBU04uMSBERVIgdGFnOiAAAFgnEAAaAAAAZXhwZWN0ZWQgLCAAfCcQAAkAAACFJxAAAgAAAGdvdCCYJxAABAAAAHVua25vd24vdW5zdXBwb3J0ZWQgQVNOLjEgREVSIHRhZzogMHgAAACkJxAAJQAAAHRyYWlsaW5nIGRhdGEgYXQgZW5kIG9mIERFUiBtZXNzYWdlOiBkZWNvZGVkICBieXRlcywgIGJ5dGVzIHJlbWFpbmluZwAAANQnEAAtAAAAASgQAAgAAAAJKBAAEAAAAG1hbGZvcm1lZCBBU04uMSBERVIgdmFsdWUgZm9yIAAANCgQAB4AAABFcnJvcmtpbmQAAABJAAAALAAAAAQAAABXAAAAcG9zaXRpb25JAAAABAAAAAQAAABYAAAARGF0ZVRpbWVGYWlsZWRGaWxlTm90Rm91bmRJbmNvbXBsZXRlZXhwZWN0ZWRfbGVuSQAAAAQAAAAEAAAAWQAAAGFjdHVhbF9sZW4AAEkAAAAEAAAABAAAAFYAAABJbwAASQAAAAQAAAAEAAAAFAAAAEluZGVmaW5pdGVMZW5ndGh0YWcASQAAAAQAAAAEAAAAVQAAAE5vbmNhbm9uaWNhbE9pZE1hbGZvcm1lZEkAAAAEAAAABAAAAFoAAABTZXREdXBsaWNhdGVTZXRPcmRlcmluZ092ZXJmbG93T3Zlcmxlbmd0aFBlbUkAAAAEAAAABAAAAFsAAABSZWFkZXJUYWdNb2RlVW5rbm93blRhZ051bWJlckludmFsaWRUYWdVbmV4cGVjdGVkAAAAXAAAAAMAAAABAAAAXQAAAGFjdHVhbFRhZ1Vua25vd25ieXRlSQAAAAQAAAAEAAAASgAAAFRyYWlsaW5nRGF0YWRlY29kZWRyZW1haW5pbmdVdGY4SQAAAAQAAAAEAAAAXgAAAFZhbHVlAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAOQAAAAAAAAABAAAARAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NoYTEtMC4xMC42L3NyYy9saWIucnMAAFAqEABeAAAAcQAAABMAAABVbmtub3duIEpTT04gaXRlbQoAAMAqEAASAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL3NpZ25hdHVyZV92ZXJpZmllci5ycwAA3CoQAC4AAAA1AAAAMgAAAJ4QAgaoYc6J1fzqjbc9WtBLdEw+sUAA+h5nwPG/Mzo0/x5OvoFoy3GeoJm9up4/0o5sfajSWD31YbsLi2/nzZlMHINTsXGRoY2HHKpNaubySQUN0TPhdT3vjfnPeIhbTdBdZwRY+KXiNCguU5u2HXtanM1bL+iFANopq/wsoEKNAAEAAdwqEAAuAAAAUAAAAAoAAADcKhAALgAAAFEAAAAKAAAAY29udHJhY3Rfc2lnbmF0dXJlAADcKhAALgAAAFsAAAAKAAAA3CoQAC4AAABcAAAACgAAANwqEAAuAAAAZAAAAAoAAADcKhAALgAAAGUAAAAKAAAA3CoQAC4AAABeAAAAFAAAANwqEAAuAAAAUwAAABUAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = Jc();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await Oc(await i, n);
  return Uc(t, e);
}
function Ko() {
  const i = ["A8kuW4NdRMu", "W40WWPGnWQS", "d2TStmoVW6FcGSkyyYCIWQOUcW", "WOpdQr9JWR8xgG", "WRPWe0rX", "yIJcM8k+r8oqo8o/ivRcGCoOWOK", "kCkHtSoPzW", "DWhdP0tcVG", "efaoy8oF", "AYVcSYn6WOddMZ0jW77dP8o0WQ1G", "qCk0zelcMfxdOa", "W6FdNXeZWPe", "W7RdQ8kAi8k/r8kXrLzYW61qWRG", "W4qtoIek", "jLZcV8kica", "amkxW5RdQte", "jSkxW4xcHmkX", "WOJdLrrdWOSVWQLWWQxcJ8oKhq", "omkhfebnyNZdTCoGhSk5WRO", "fstcLSo+FW", "W4H5WOGlWQK", "BSkoW6tdQNi", "dgTSrSoVW6tcJ8kArtWUWQOAmq", "ExddRNK6", "jCkRW5zEW6W", "fCoOAmkWWOy", "mIa0W6rSW7dcGt59", "mCkfgH0uheFdLCoY", "q8k2WO3cKGtdPCo7jCoRWOuLda", "BNj2W6Li", "WQhcUmkJhse", "WPHoFITbW5pdPfHO", "lSocbXVcRq", "W4pcH8oVWOvx", "mCokWOBdJ095W6pdVay", "lNJdS30h", "W7WGr1xdR8kvWONcSCk9", "W4n0W51cWPG", "mSobWPVdG8kJWOHkcmk4dCo1W5a", "W6DeW58lC8kOdtRdOc4", "WR7cTHpdN8kM", "nSkagtyXfMBdKCoR", "W5S8W6v1", "jCkKW5XyW6q", "WOzIWR00emkoACokW7q3lmk9", "uuCpACos", "gmoGW5hdIKO", "bSkKWQldGG0riSoPtIRdP2BcOK8", "gM/cN3xdJq", "WR7dL8k3W7NdIq", "WR4wWRldIZHBWPxcSL9A", "awFcLN3dOa", "W54DoIO", "W73dPSoNrxraWOLqWQhdUYr5"];
  return Ko = function() {
    return i;
  }, Ko();
}
(function(i, n) {
  const t = i();
  function e(g, a, I, c, s) {
    return aA(s - -262, g);
  }
  function A(g, a, I, c, s) {
    return aA(c - 312, g);
  }
  function o(g, a, I, c, s) {
    return aA(g - 620, a);
  }
  function r(g, a, I, c, s) {
    return aA(c - -974, a);
  }
  for (; ; )
    try {
      if (-parseInt(A("o@^W", 692, 702, 682, 679)) / 1 + parseInt(A("DI%A", 655, 655, 677, 658)) / 2 + -parseInt(A("T41z", 674, 673, 652, 651)) / 3 * (parseInt(o(969, "L(6B", 978, 966, 984)) / 4) + parseInt(r(-640, "tpS(", -623, -647, -625)) / 5 * (parseInt(o(946, "T41z", 935, 932, 931)) / 6) + parseInt(o(957, "!]Sw", 968, 966, 937)) / 7 * (-parseInt(A("le]p", 671, 656, 647, 625)) / 8) + parseInt(o(976, "Tt3Y", 986, 971, 949)) / 9 * (-parseInt(A("lv63", 642, 649, 658, 632)) / 10) + parseInt(e("Rsa3", 78, 77, 34, 59)) / 11 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Ko, 2 * -432977 + 26270 + -1574177 * -1);
function Hn(i, n, t, e, A) {
  return aA(n - -766, t);
}
function Ea(i, n, t, e, A) {
  return aA(i - 26, A);
}
function to(i, n, t, e, A) {
  return aA(t - -313, A);
}
function aA(i, n) {
  i = i - 321;
  const t = Ko();
  let e = t[i];
  if (aA.WMNPGY === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let E = 0, x, B, l = 0; B = I.charAt(l++); ~B && (x = E % 4 ? x * 64 + B : B, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        B = c.indexOf(B);
      for (let E = 0, x = s.length; E < x; E++)
        Q += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const a = function(I, c) {
      let s = [], Q = 0, E, x = "";
      I = A(I);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        Q = (Q + s[B] + c.charCodeAt(B % c.length)) % 256, E = s[B], s[B] = s[Q], s[Q] = E;
      B = 0, Q = 0;
      for (let l = 0; l < I.length; l++)
        B = (B + 1) % 256, Q = (Q + s[B]) % 256, E = s[B], s[B] = s[Q], s[Q] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[B] + s[Q]) % 256]);
      return x;
    };
    aA.uOXSqr = a, aA.ipqOkd = {}, aA.WMNPGY = !0;
  }
  const o = t[5 * -1179 + 179 + -5716 * -1], r = i + o, g = aA.ipqOkd[r];
  return g ? e = g : (aA.aMQpwL === void 0 && (aA.aMQpwL = !0), e = aA.uOXSqr(e, n), aA.ipqOkd[r] = e), e;
}
function xa(i, n, t, e, A) {
  return aA(t - -590, i);
}
function _n(i, n, t, e, A) {
  return aA(e - 476, i);
}
class Yc {
  [_n("Iov4", 854, 839, 843) + Ea(357, 336, 365, 381, "9Lkq") + _n("qjcI", 834, 815, 826)] = !1;
  async [to(46, 18, 28, 50, "$jmw")](n) {
    function t(g, a, I, c, s) {
      return xa(g, a - 146, c - 1115);
    }
    function e(g, a, I, c, s) {
      return to(g - 420, a - 1, I - 1250, c - 118, c);
    }
    function A(g, a, I, c, s) {
      return to(g - 87, a - 39, s - 1301, c - 219, a);
    }
    function o(g, a, I, c, s) {
      return xa(s, a - 3, I - 276);
    }
    function r(g, a, I, c, s) {
      return to(g - 399, a - 206, s - 322, c - 13, I);
    }
    try {
      const g = n + (A(1324, "#B(]", 1341, 1319, 1336) + "/") + sa;
      await cs(g), this[e(1283, 1278, 1271, "h@kY", 1271) + A(1332, "KT]v", 1330, 1342, 1317) + t("oVyg", 907, 900, 882, 904)] = !0;
    } catch {
      this[o(27, 41, 46, 58, "So%%") + o(76, 44, 59, 57, "qX^[") + r(368, 339, "a6qL", 371, 362)] = !1, console[r(336, 360, "m]RZ", 359, 360)](sa + (e(1260, 1257, 1259, "h@kY") + e(1258, 1289, 1282, "tpS(") + t("FJ0I", 903, 896, 889) + t("S4zU", 864, 823, 849) + o(4, 0, 22, 32, "qX^[") + e(1307, 1295, 1296, "glC2") + e(1299, 1263, 1281, "FZ1e") + t("qX^[", 879, 861, 879) + o(53, 52, 58, 84, "B9Xd") + r(381, 364, "FZ1e", 374, 370) + o(64, 35, 55, 38, "!]Sw") + A(1360, "m]RZ", 1354, 1381, 1354) + A(1337, "IWi!", 1325, 1309, 1330) + r(326, 313, "eW9u", 339, 337) + "n."));
    }
  }
  [Hn(-411, -392, "a6qL") + Hn(-411, -427, "2B2t") + Hn(-428, -443, "IWi!") + "ed"]() {
    function n(e, A, o, r, g) {
      return Ea(e - -818, A - 478, o - 147, r - 266, r);
    }
    function t(e, A, o, r, g) {
      return _n(g, A - 476, o - 430, e - 263);
    }
    return this[t(1086, 1096, 1100, 1081, "qjcI") + t(1107, 1100, 1083, 1110, "hp0H") + n(-460, -458, -460, "[dXN")];
  }
}
class Kn extends Error {
  name = "SkipLicenseValidationError";
  log() {
  }
}
function Nt(i, n, t, e, A) {
  return K(i - 519, t);
}
function ye(i, n, t, e, A) {
  return K(A - -477, n);
}
function Tc(i, n, t, e, A) {
  return K(t - -771, i);
}
function Le(i, n, t, e, A) {
  return K(i - 761, A);
}
function jo() {
  var i = ["dCoPlSoZuW", "yCkMW7Tgha", "i8otWR3cVCka", "FComWOS7W5HLW4aKbt7dSCo4", "W6SOw8omW7m", "EG3dMSo/sa", "gmoJBmo6kCorxCkqW4u", "W6faW4Tdna", "WPZdJCkm", "nCo6fSozDG", "j8oIW4ZcHXWTfILEphWjAG", "WOhdICk4BXmgW4ivtmo5u8kA", "W4ldR07dI0C", "W4fZW7W", "W4z6y14", "hCoKyCkhu8k1tSkqW4KukHS", "WRZcNmk4jqa", "W68FwSoEW6i", "W63dQmoz", "ublcQgWaemkmkW", "WPtdMSkmg8oi", "W4ClW71qW7u", "W5mkquVcNG", "W41EvCohW5NdGubqz0JcGmkh", "WRJdILHSAa", "W7lcISkcdKdcV8o0WO4", "ww7cPrea", "WRRcJh4LnG", "WRpcLutcL8oW", "W4NdT8oRs8oR", "rmkDBgNcKG", "AGVdGCogFW", "WQtcRgi", "WPRdJM0cyW", "e8o1kCofwG", "W45VWRu", "W7ZcMXWdoItdGCoaW6dcICoSWRu", "omoOiW", "q8kNlmozcG", "WQJcUIhcM8oY", "xmkKW5fKwW", "p8o7l8olAq", "WQZdIKPhDW", "qmk8pa", "W7hcICozkxNcI8o/WPuA", "oSobWPdcUmke", "mSk/WPWeDq", "mmoTgmoECa", "WRTTaSkgWRdcNCkIW7PxjKldQtm", "i8oMoCofWQ4", "W5mkvfFcNG", "WRZcRIdcGCo0", "WRxcTCkfWRXuW680uSkEfG", "oSoFWQRcMSkx", "W4OzW70", "W5ueW5m6tq", "WP4LpaybW7tdLhOjuXbl", "W65fW5q", "D8k6W6bCaq", "W4/cMczsurtdRWulWRS", "WRpcUSkkWRK0WQzHESkVhCoWWQVdQW", "WPKUd8kqWOW", "W4ldPmoWw8oW", "WQVcICk2oYa", "W69wWQODeaGlCh3cMfhcGCkB", "WRZcNmkQ", "WPlcPmkUeCk1bCkCA37dTCoY", "fIL1lmkXW6/cTYRdOrtdQW", "W4JdUmo4BCoT", "WRBcG3FcHSo1", "WQ89w8oIAG", "W4dcNmo9mui", "WPFdHxO", "WOldVmow", "qMBcOtW6"];
  return jo = function() {
    return i;
  }, jo();
}
(function(i, n) {
  function t(a, I, c, s, Q) {
    return K(c - 651, Q);
  }
  function e(a, I, c, s, Q) {
    return K(Q - -31, c);
  }
  function A(a, I, c, s, Q) {
    return K(c - 456, a);
  }
  var o = i();
  function r(a, I, c, s, Q) {
    return K(s - -404, a);
  }
  for (; ; )
    try {
      var g = -parseInt(r("T!7N", -119, -162, -143, -121)) / 1 + -parseInt(t(955, 926, 920, 891, "Eyt[")) / 2 + -parseInt(r("YhSi", -158, -147, -169, -191)) / 3 * (-parseInt(e(207, 189, "CQyl", 176, 196)) / 4) + -parseInt(t(894, 915, 928, 936, "j^D1")) / 5 * (parseInt(A("w9Iu", 670, 705, 678, 716)) / 6) + -parseInt(e(244, 237, "!LN&", 265, 242)) / 7 + parseInt(t(913, 886, 894, 906, "YhSi")) / 8 + parseInt(A("LA6z", 694, 724, 758, 743)) / 9;
      if (g === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(jo, 16909 * 4 + 122552 + -11723 * 1);
function K(i, n) {
  i = i - (7027 * 1 + -7716 + -894 * -1);
  var t = jo(), e = t[i];
  if (K.XmilLV === void 0) {
    var A = function(I) {
      for (var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", Q = "", E = 0, x, B, l = 0; B = I.charAt(l++); ~B && (x = E % 4 ? x * 64 + B : B, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        B = c.indexOf(B);
      for (var h = 0, f = s.length; h < f; h++)
        Q += "%" + ("00" + s.charCodeAt(h).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    }, o = function(I, c) {
      var s = [], Q = 0, E, x = "";
      I = A(I);
      var B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        Q = (Q + s[B] + c.charCodeAt(B % c.length)) % 256, E = s[B], s[B] = s[Q], s[Q] = E;
      B = 0, Q = 0;
      for (var l = 0; l < I.length; l++)
        B = (B + 1) % 256, Q = (Q + s[B]) % 256, E = s[B], s[B] = s[Q], s[Q] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[B] + s[Q]) % 256]);
      return x;
    };
    K.QkSGwG = o, K.VSUltV = {}, K.XmilLV = !0;
  }
  var r = t[1 * -4612 + -250 + 4862], g = i + r, a = K.VSUltV[g];
  return a ? e = a : (K.FMRAdP === void 0 && (K.FMRAdP = !0), e = K.QkSGwG(e, n), K.VSUltV[g] = e), e;
}
function VA(i, n, t, e, A) {
  return K(t - -25, A);
}
class da {
  constructor(n) {
    function t(r, g, a, I, c) {
      return K(I - -26, a);
    }
    function e(r, g, a, I, c) {
      return K(c - 585, I);
    }
    function A(r, g, a, I, c) {
      return K(r - 847, g);
    }
    this[t(220, 243, "w9Iu", 219) + A(1060, "9YP)")] = n;
    function o(r, g, a, I, c) {
      return K(I - 95, a);
    }
    try {
      this.#A = n[t(214, 199, "AYX*", 199, 194) + t(177, 201, "AYX*", 181, 191) + o(286, 351, "RvW@", 315, 328)] && JSON[e(865, 872, 834, "LB6l", 845)](n[o(321, 297, "KnQ$", 306, 272) + o(363, 375, "701c", 353, 344) + A(1103, "MBAa", 1108, 1073, 1091)]), this.#e = n[t(234, 171, "E417", 208, 242) + A(1062, "%P5f", 1087, 1076, 1046)];
    } catch (r) {
      console[o(378, 361, "*f[U", 367)](r);
    }
  }
  #A;
  #e;
  get [VA(207, 204, 199, 228, "CzsE") + "id"]() {
    function n(e, A, o, r, g) {
      return VA(e - 198, A - 40, g - -717, r - 377, r);
    }
    function t(e, A, o, r, g) {
      return VA(e - 31, A - 182, o - -553, r - 125, r);
    }
    return this[t(-283, -347, -311, "CzsE") + t(-351, -354, -366, "w9Iu")][n(-541, -478, -484, "LB6l", -514) + t(-353, -314, -352, "!LN&")];
  }
  get [ye(-198, "!lI)", -204, -177, -207) + "s"]() {
    function n(e, A, o, r, g) {
      return VA(e - 300, A - 115, o - 358, r - 476, e);
    }
    function t(e, A, o, r, g) {
      return ye(e - 114, r, o - 441, r - 377, A - -461);
    }
    return this[n("fAI7", 583, 592, 610) + t(-683, -706, -709, "RvW@")][t(-632, -660, -644, "sNJe") + "s"];
  }
  get [VA(184, 186, 197, 181, "E417") + VA(233, 251, 215, 224, "*bnR")]() {
    function n(A, o, r, g, a) {
      return ye(A - 190, A, r - 329, g - 388, a - 1443);
    }
    function t(A, o, r, g, a) {
      return VA(A - 102, o - 459, g - -891, g - 495, A);
    }
    function e(A, o, r, g, a) {
      return ye(A - 93, r, r - 150, g - 73, o - 1277);
    }
    return this[t("1lV@", -685, -644, -654) + e(1014, 1012, "w9Iu", 1019)][t("Eyt[", -633, -682, -662) + n("mqFQ", 1235, 1191, 1221, 1203)];
  }
  get [Nt(733, 728, "RjkO") + "b"]() {
    return this.#A;
  }
  get [Nt(798, 798, "mqFQ") + Le(1027, 1025, 1028, 1037, "sNJe")]() {
    return this.#e;
  }
  get [Le(966, 930, 990, 952, "JquD") + VA(170, 229, 192, 195, "701c") + Le(971, 1003, 963, 974, "%P5f") + Le(1032, 1037, 1012, 1051, "utVm")]() {
    function n(o, r, g, a, I) {
      return Nt(I - -1076, r - 129, r);
    }
    function t(o, r, g, a, I) {
      return Le(a - -1265, r - 470, g - 104, a - 451, I);
    }
    function e(o, r, g, a, I) {
      return VA(o - 304, r - 488, g - -122, a - 187, a);
    }
    function A(o, r, g, a, I) {
      return ye(o - 341, a, g - 213, a - 421, r - 571);
    }
    return !!this.#A?.[A(318, 324, 326, "CzsE") + A(313, 342, 324, "pZtu")]?.[t(-255, -228, -214, -230, "pZtu") + n(-321, "0*Q4", -317, -313, -348) + A(322, 332, 299, "LQRy") + t(-247, -239, -218, -252, "KnQ$") + n(-347, "!LN&", -305, -329, -336) + n(-289, "wJVk", -278, -320, -313) + e(116, 141, 108, "t]z7")];
  }
  get [Le(994, 988, 987, 997, "JquD") + ye(-283, "yEvR", -278, -241, -248) + Nt(742, 720, "dyRx") + Nt(760, 723, "fAI7") + Tc("1lV@", -511, -496) + Le(1037, 1029, 1047, 1035, "YhSi")]() {
    function n(o, r, g, a, I) {
      return ye(o - 287, I, g - 242, a - 156, g - 281);
    }
    function t(o, r, g, a, I) {
      return VA(o - 388, r - 446, a - 866, a - 235, I);
    }
    function e(o, r, g, a, I) {
      return VA(o - 79, r - 494, o - -488, a - 40, r);
    }
    function A(o, r, g, a, I) {
      return ye(o - 7, a, g - 278, a - 302, r - 200);
    }
    return !!this.#A?.[e(-260, "&JYm", -287, -266) + n(-5, 6, 22, 1, "mh&x")]?.[n(46, 59, 61, 79, "0*Q4") + n(41, 35, 40, 32, "LB6l") + e(-297, "t]z7", -265, -280) + e(-250, "RjkO", -217, -264) + e(-267, "pZtu", -238, -246) + t(1120, 1094, 1063, 1092, "w9Iu") + A(-33, -12, -37, "*bnR")];
  }
}
function Z(i, n) {
  i = i - (3 * -2190 + 4653 + 2346 * 1);
  const t = qo();
  let e = t[i];
  if (Z.MOvrAm === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let E = 0, x, B, l = 0; B = I.charAt(l++); ~B && (x = E % 4 ? x * 64 + B : B, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        B = c.indexOf(B);
      for (let E = 0, x = s.length; E < x; E++)
        Q += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const a = function(I, c) {
      let s = [], Q = 0, E, x = "";
      I = A(I);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        Q = (Q + s[B] + c.charCodeAt(B % c.length)) % 256, E = s[B], s[B] = s[Q], s[Q] = E;
      B = 0, Q = 0;
      for (let l = 0; l < I.length; l++)
        B = (B + 1) % 256, Q = (Q + s[B]) % 256, E = s[B], s[B] = s[Q], s[Q] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[B] + s[Q]) % 256]);
      return x;
    };
    Z.AYGNZQ = a, Z.QeavZZ = {}, Z.MOvrAm = !0;
  }
  const o = t[-17363 + -1 * -17363], r = i + o, g = Z.QeavZZ[r];
  return g ? e = g : (Z.DEgOZu === void 0 && (Z.DEgOZu = !0), e = Z.AYGNZQ(e, n), Z.QeavZZ[r] = e), e;
}
function oA(i, n, t, e, A) {
  return Z(t - -837, n);
}
(function(i, n) {
  function t(a, I, c, s, Q) {
    return Z(c - -891, s);
  }
  function e(a, I, c, s, Q) {
    return Z(I - -691, Q);
  }
  function A(a, I, c, s, Q) {
    return Z(a - -638, c);
  }
  const o = i();
  function r(a, I, c, s, Q) {
    return Z(a - -837, c);
  }
  function g(a, I, c, s, Q) {
    return Z(s - 163, Q);
  }
  for (; ; )
    try {
      if (parseInt(g(542, 508, 733, 612, "zl3L")) / 1 + parseInt(g(880, 730, 824, 811, "DJ4[")) / 2 * (parseInt(e(-3, -77, -100, 0, "v8Z[")) / 3) + parseInt(r(-395, -411, "oAIS", -271, -397)) / 4 + parseInt(r(-235, -124, ")Y@^", -312, -209)) / 5 + parseInt(r(-154, -210, "Qta^", -64, -17)) / 6 * (-parseInt(A(-176, -118, "Gxqz", -248, -279)) / 7) + -parseInt(e(-280, -233, -162, -232, "X6DY")) / 8 * (-parseInt(t(-272, -367, -303, "JHrq", -390)) / 9) + -parseInt(t(-366, -307, -323, "De7O", -212)) / 10 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(qo, -1079877 * 1 + 13 * -14612 + 1917352);
function OA(i, n, t, e, A) {
  return Z(e - 730, t);
}
function q(i, n, t, e, A) {
  return Z(n - 428, t);
}
function qo() {
  const i = ["pMz8dCks", "W5OsWRHdEq", "lmovW5KgwmkmhK9g", "bc9KdCkq", "dGhdNXfK", "o2/dNGmi", "k8kSk8o1dG", "vCoAhvuE", "Bhi9wXyhiWT6W51jvCo2W50", "WOT9WPeh", "A3ddKtlcRa", "tqNcGmkDoG", "BYXoW5S", "WOJdRv4YW5a", "b259WQjc", "WRupD1RcNSoqAgbYW7RcGSkHdq", "W7SiW7dcUCoZ", "W4CzzXfV", "xH3dGtrX", "kNWpWPCFlJHlFSozWQdcN0a", "lIvL", "famIWPRcKW", "W6FdU8oe", "W7VdLSowWOy", "W4/dOsNcGgi", "W6nPWOZdHwG", "lCkviudcIq", "W4NdPCkH", "WOZdPmkGBSouj8oUbKddV8o0WO8", "iCkyn0VdMG", "WPfdWR8whG", "W5ZcP8o7ka", "EgZdLaez", "W63dG8onWRKi", "W55VW7OHoG", "W5ldJGpcQdu", "vSord0rl", "kWxdOmoSW5O", "WQRdHCoFymoz", "DYbvW4Pc", "ka7dP8oQW6i", "W65sWQHDcG", "WPHDWRRdRCoGdCoqWR7cN0hdKmoH", "W55SvSk7wq", "W7zTWPRdJW", "W6LqWRG", "emkFeSoihW", "W7/dKmomWPOt", "rbRdIbbX", "W74mW7dcOCk/", "W4rLWR7dGHC", "W4eImSo0iG", "W6VdPCoMWOj1", "eNldJW0o", "kmotW5zsi8onyujudmkgBCoe", "rH3dHYr8", "W4aPW7frWP8", "m8kem8oaha", "W7pdJCoq", "WQ1HWPyCmW", "uCo+hmotW7S", "ANddMYxcRa", "nGvHWRVcSG", "sbVcMW", "DM7dKcu", "C2NdLs/cQG", "W5KOW4frWPC", "jmkphKZdIG", "brtdNG", "r3tdHX7cNG", "BgFdHZNcUW", "jCkFymkIWPy", "EW8PcCk6", "W6hdGmk9qKa", "AZTFW4fy", "lCkzEG", "mSkwemocbW", "W47dT8oUW5iE", "nGnL", "pWjXWRVcJa", "W4rLWRJdOYK", "W5X5vSk3wq", "octcHgldVSkJb3BdJCoyW49mW6i", "FgxdMdNcOq", "W614WQtdIg4", "A1r0WONcQHZdJNS", "ogb7emkD", "W6XsWQL2aW", "wsddOqLgbgK", "W6D4WRFdQd0", "ESkdWOezDq", "g2NdNGCs", "qbVdGa", "W5xdUmkVWQHo", "crBdIrPZ", "W5uSWOtdIg4", "W5xdQ8k0WRvF", "pgbViCkb", "W6aaW6dcSCk9", "n8kmjmoggG", "W4fVW7WSoW", "W4WCWRH1Fq", "W4FdQGFcT3K", "W7zTWPRdJ2q", "WQxdJSonBa", "rGZcHSkkoG", "WOBdO1GuW5K", "m2xdMWmj", "w8k7ghOa", "qHxdKcj6", "W44yWRLzCG", "WOnNWPaa", "qCkzW6ZcH3W", "vmkQghe", "W5JdS0imjW", "qSk5d2Cw", "W57dVujpjG", "ub7dHZRdGG", "W7ddMSk8", "owFdJG", "WO7dPCoCCCoD", "jmkskeddJq", "W5qCWR5LCa", "zJJdIZukcbLH", "W4FdR8kIWQjF", "W7pdRKrdpa", "WQRdQhjJWQy", "ESoKjv91", "bXpdPW", "WRJdL8oyWPmu", "AMFdMIxcUG", "nwf7aCkJ", "mSklimopeW", "lWFdV8oAW68", "W6LJWPVdLwm", "b2LHWQvE", "qCkoW63cH2O", "bdVdMmoMW4e", "sqJdNq", "W60LvH9p", "sqRcPCkqkG", "xmoDdvvq", "W4uzkCoIfq", "W5W0W71gWOi", "WQddICoizSoF", "W4ruWR5waa", "BGpcJHddUq", "eNPIWR9j", "W6jTxCkeza", "W5RcIZaixq", "nGv4WRVcUa", "zqBdPIX/", "rSkzW6tcLwW", "uSkTWOilCq", "W5VcGZOd", "pqL2WPRcSW", "Fmk3xva8", "jSktFCk5WRC", "W5tcVCo1na", "W7ncWONdJgG", "WQ/dONrOWRS", "W6fVW7WSoW", "kxWaWP0AlJTVzSorWRtcUfu", "CIDqW4a", "W47cP8o8nSkj", "pHNdUSoNW74", "WRldK8opW58t", "W7BdI8oDWPap", "W5mufCoFmG", "ECokyXhcNSoBtNVcS8oOWQLyW7m", "c8kem8ol", "f0VdN8olF3BdJCoGWO5SWRJdGCoM", "W599W5e0mW", "BxddKxG", "W5hcUSo3", "prVdR0dcMq", "WRtcL0BdVcqhbr7dR1VcJYtcUmkZ", "jXRdJHT4", "WRFcHSo4wMD3smomWRW", "W419tSksva", "WQBdPwrOW7u", "uCkQeMCa", "WOtdLgPCcSoaW7hdQ1BdLg48DG", "mSkllSox", "W63dJGtcPN0", "W7FdG8oxWPS", "iMznaSkF", "vqZcGmkxpq", "W4JdQ8kVWQG", "W6Tqlq7dIq", "W6RcSSoHnCkf", "cXNdOCoMW7G", "W6yKqv5r", "saeViSk+", "b257cCot", "W59TW6SSiq", "lWJdPW", "omkxkmoqbW", "xSothq", "jg/dKW", "W65kgqRdLa", "W5hdUujKoq", "aN5VWQjy", "d8ofk8okfW", "tvRdOxBcHq", "dLRdRuBcIq", "u8ogaunn", "WQldV3jP", "D8kbWPW", "W4bRWQ3dPa0", "xSk3gLeb", "W5FcLJyHwG", "or5TWQ3cRW", "manLc1m", "vmoBgNvt", "W7vwpa", "W4hcPdyirq", "euRdKmoaENlcVSoHWOH+WOpdLG", "W6rAqmklAW", "uSodWRFdUhq", "DszcWO9f", "W5y0W6XIWPC", "WQxdJSoolCoD", "W4GgW7FcKCk+", "nhldKHep", "kCkpn2NdGa", "v8orgNrr", "W54gW7e", "W7qYi8oDeG", "W6TiWQ5haq", "wCovaLLe", "qHpdKIny", "W4T4WRBdTby", "W6DJWPRdPgW", "W4tdUuvZja", "W6rlirJdLa", "xSoDgLLF", "WOv2WOWWhG", "W4zXwCk7uW", "WQ3dOMnKWRq", "dGJdSuBcJW", "k8kupfhdMW", "W5ddRLnj", "vmo2k8oBW74", "W67dUCodW6mh", "W4GmW6xcTCkM", "eJ/dOIpdPSkAgG", "WOxdOLK0WPG", "cbBdGW1Z", "pSkxnCombG", "sYHcW4C", "vSk9gtO", "W5PNW7qNnG", "W4KBW7hcU8kH", "W5G6W6PeWP4", "taxdJthdMa", "h8oaWQO", "WOv2WOW/aG", "W5v8W6eXiq", "W5DDW6yRpq", "hvLOuSoRWQVdKqGDWRPBW60", "rCkzW7BcUha", "DSoykSorW5S", "W4WpWQnOBa", "eCokWRBdUwG", "W6ZdGb4", "EGPTWQVcSG", "i2uyWRNcKq", "cr/dP03cMa", "mIddKW0i", "m2PMf8kw", "WPjHWPCfaG", "W5GsWR5dDq", "xCo9afLk", "W4yxpmolhq", "yHxdKcj6", "pcL/", "W7pdG8osWPWB", "W4SCWRHO", "W4T1xW"];
  return qo = function() {
    return i;
  }, qo();
}
function NA(i, n, t, e, A) {
  return Z(n - 488, A);
}
function V(i, n, t, e, A) {
  return Z(e - 768, t);
}
class Pc {
  constructor(n) {
    function t(A, o, r, g, a) {
      return Z(r - 84, A);
    }
    function e(A, o, r, g, a) {
      return Z(A - 524, g);
    }
    this[e(1027, 979, 998, ")Y@^") + t("A[RS", 644, 632) + "d"] = n;
  }
  [V(1446, 1499, "ejqq", 1393) + "se"];
  [q(837, 953, ")Y@^") + V(1328, 1463, "zl3L", 1395) + V(1478, 1470, "n7Vs", 1459) + NA(1005, 1079, 1180, 1036, "JHrq")] = [NA(1160, 1096, 1172, 1141, "DJ4[") + OA(1358, 1126, "v^A7", 1232) + "ic", oA(-303, "Qta^", -245) + V(1547, 1424, "2q**", 1467) + "ic"];
  [OA(1295, 1336, "hD&A", 1245) + NA(1049, 1164, 1235, 1085, "OEB!")];
  async [oA(-202, "yIIr", -268)](n) {
    function t(a, I, c, s, Q) {
      return q(a - 189, s - 387, c);
    }
    const e = await this[t(1245, 1455, "&Czt", 1356) + t(1471, 1469, "FtLy", 1436) + A(-447, "PlY5", -333)](n);
    function A(a, I, c, s, Q) {
      return OA(a - 202, I - 326, I, c - -1513);
    }
    function o(a, I, c, s, Q) {
      return V(a - 1, I - 240, c, Q - -584);
    }
    function r(a, I, c, s, Q) {
      return oA(a - 279, Q, a - -21);
    }
    function g(a, I, c, s, Q) {
      return oA(a - 292, s, Q - 815);
    }
    await Promise[A(-208, "GlSv", -90) + o(683, 776, "jMtA", 806, 787)]([this[r(-364, -403, -442, -370, "wTsV") + g(462, 626, 649, "@X4T", 563) + "d"][r(-395, -426, -451, -409, "PlY5")](n), this[t(1301, 1394, "Os(1", 1326) + r(-269, -258, -301, -146, "zl3L") + "e"](e)]), this[o(842, 937, "jMtA", 812, 825) + g(369, 602, 391, "zl3L", 483) + r(-215, -145, -81, -304, "ejqq")]();
  }
  async [V(1473, 1368, "v^A7", 1366) + NA(1065, 1146, 1083, 1139, ")Y@^") + "se"](n) {
    function t(g, a, I, c, s) {
      return OA(g - 102, a - 329, g, s - 27);
    }
    function e(g, a, I, c, s) {
      return OA(g - 358, a - 279, I, g - -294);
    }
    function A(g, a, I, c, s) {
      return oA(g - 277, s, I - 1135);
    }
    function o(g, a, I, c, s) {
      return q(g - 93, a - -1143, g);
    }
    function r(g, a, I, c, s) {
      return oA(g - 483, s, I - 914);
    }
    try {
      if (r(824, 765, 757, 882, "v^A7") === e(1098, 1088, "iPnO", 1118, 1127)) {
        const g = await fetch(n);
        if (!g.ok) {
          if (e(869, 791, "v8Z[", 778, 893) === r(665, 602, 714, 626, "MsV]")) return this[t("SW&X", 1389, 1281, 1284, 1295) + t("#Xgo", 1338, 1347, 1236, 1304)];
          throw new Error(r(459, 689, 561, 684, "FtLy") + e(1104, 1102, "8nEA", 1174, 1175) + o("Qta^", -166, -189, -240, -167) + A(840, 957, 844, 806, "6y@m") + "d.");
        }
        this[r(713, 640, 778, 727, "wTsV") + "se"] = await g[A(944, 867, 870, 854, "oAIS")]();
      } else return _0x351970[e(1139, 1036, "!6n%", 1177, 1008) + o("iPnO", -170, -249, -138, -59)][A(978, 1056, 992, 1125, "@X4T") + t("(O2S", 1324, 1482, 1361, 1362)];
    } catch (g) {
      A(800, 755, 864, 913, "PlY5") === t("jMtA", 1320, 1254, 1122, 1255) ? (this[e(1140, 1017, "v^A7") + "se"] = void 0, _0x23647d[o("A[RS", -195)](_0x4dac79)) : (this[A(798, 878, 897, 1021, "oAIS") + "se"] = void 0, console[t("DJ4[", 1292, 1307, 1352, 1321)](g));
    }
  }
  async [q(1045, 1068, "gC&k") + NA(895, 963, 1040, 993, "SW&X") + "e"](n) {
    this[e(275, 147, 304, 269, "&VMM") + e(183, 103, 323, 201, "WZ!L")] = void 0;
    function t(r, g, a, I, c) {
      return V(r - 61, g - 78, c, I - -1209);
    }
    function e(r, g, a, I, c) {
      return V(r - 75, g - 256, c, r - -1158);
    }
    function A(r, g, a, I, c) {
      return OA(r - 354, g - 185, r, I - -647);
    }
    function o(r, g, a, I, c) {
      return q(r - 431, I - -901, r);
    }
    if (!n)
      if (e(318, 202, 342, 180, "jMtA") === e(149, 173, 94, 250, "SW&X")) _0x191ad7[t(255, -16, 12, 120, "51PN") + "ch"]((r) => _0x7ba876[e(214, 121, 264, 149, "@X4T")](r));
      else {
        console[A("oAIS", 629, 592, 526)](A("6y@m", 562, 775, 664) + A("@X4T", 609, 760, 738) + t(87, 49, 205, 145, "zl3L") + o("yIIr", 17, 68, 78) + t(-37, 123, 19, 12, "FtLy")), this[e(79, 183, 183, 114, "hD&A") + "se"] = void 0;
        return;
      }
    await this[e(210, 226, 226, 166, "GlSv") + t(328, 394, 363, 264, "(O2S") + "se"](n);
  }
  async [q(943, 965, "yIIr") + oA(-262, "v8Z[", -187) + NA(1075, 1018, 1072, 1011, "oAIS")](n) {
    const t = await fetch("" + n + this[g(1323, 1502, 1276, "Qta^", 1405) + g(1399, 1399, 1518, "&VMM", 1438) + g(1470, 1517, 1508, "6y@m", 1377) + A("ANMH", -103)][0]);
    function e(a, I, c, s, Q) {
      return V(a - 488, I - 434, c, I - -540);
    }
    function A(a, I, c, s, Q) {
      return oA(a - 383, a, I - 151);
    }
    const o = t.ok ? -9304 + 2 * 4652 : 4076 + 4075 * -1;
    function r(a, I, c, s, Q) {
      return V(a - 35, I - 443, a, s - -582);
    }
    function g(a, I, c, s, Q) {
      return q(a - 385, Q - 310, s);
    }
    return "" + n + this[r("&Czt", 686, 754, 618) + e(865, 872, "@X4T") + A("GlSv", -89) + r("yIIr", 954, 977, 857)][o];
  }
  [NA(1230, 1165, 1232, 1255, "X0m2") + OA(1249, 1275, "GlSv", 1201) + "s"](n) {
    function t(e, A, o, r, g) {
      return OA(e - 250, A - 397, r, o - -418);
    }
    n[t(696, 792, 825, "@X4T") + "ch"]((e) => console[t(972, 852, 870, "51PN")](e));
  }
  [NA(900, 933, 958, 876, "GlSv") + V(1282, 1254, "SW&X", 1209) + q(1122, 1107, "Qta^")](n) {
    function t(e, A, o, r, g) {
      return OA(e - 30, A - 159, A, r - -577);
    }
    n[t(915, "WZ!L", 751, 819) + "ch"]((e) => console[t(921, "v^A7", 723, 817)](e));
  }
  [NA(1043, 923, 1043, 823, "6y@m") + q(934, 893, "ANMH")]() {
    function n(A, o, r, g, a) {
      return V(A - 500, o - 168, g, a - -1101);
    }
    function t(A, o, r, g, a) {
      return V(A - 83, o - 415, r, g - -834);
    }
    function e(A, o, r, g, a) {
      return NA(A - 21, o - -704, r - 484, g - 306, A);
    }
    return window[e("Qta^", 349, 384, 286) + t(416, 663, "ANMH", 552)][e("n7Vs", 430, 351, 458) + n(304, 120, 355, "jMtA", 226)];
  }
  [NA(1291, 1195, 1205, 1144, "hbBs") + q(921, 919, "Gxqz") + q(1116, 1100, "&Czt")]() {
    function n(r, g, a, I, c) {
      return NA(r - 0, I - -703, a - 199, I - 218, a);
    }
    function t(r, g, a, I, c) {
      return V(r - 77, g - 499, r, I - -1206);
    }
    function e(r, g, a, I, c) {
      return q(r - 171, r - -1222, a);
    }
    function A(r, g, a, I, c) {
      return oA(r - 4, r, I - 1316);
    }
    function o(r, g, a, I, c) {
      return OA(r - 350, g - 165, g, r - -937);
    }
    try {
      if (t("CAYN", 327, 90, 193, 201) !== o(289, "Gxqz", 211, 257, 416)) {
        if (!this[t("ANMH", -106, 31, 9, 25) + "se"])
          if (o(399, "PlY5", 519, 455, 471) !== o(224, "Os(1", 169, 97, 213)) {
            _0x3530de instanceof _0x239508 ? _0x20c77e[o(380, "^eqI", 240, 449, 278)]() : _0x59a7b6 instanceof _0x5cf618 && _0x17d444[t("2q**", -91, -3, 34, 108)](_0x2bd70d);
            const r = {};
            r[e(-168, -206, "!6n%", -73, -173) + t("JHrq", 128, -120, 16, 82)] = !1, r[e(-164, -234, "FtLy", -275, -245) + "s"] = [], r[A("(1Yx", 868, 926, 987, 1035) + A("MsV]", 1076, 1045, 1061, 1130)] = [], r[n(290, 420, "wTsV", 381, 309) + e(-280, -349, "OEB!", -151, -366) + o(272, "Qta^", 242, 390, 136)] = void (-1311 + 9142 * 1 + -7831), r[o(466, "8nEA", 582, 418, 521)] = function() {
            }, r[A("X6DY", 1126, 1016, 1112, 1216) + t("5Lf]", 170, 89, 98, 129)] = "", this[t("Qta^", 20, 44, 66, 146) + n(498, 320, "Os(1", 400, 382)] = new _0x4cdbaa(r);
          } else throw new Kn(o(229, "8nEA", 304, 242, 150) + t("n7Vs", 172, 104, 125, 254) + A("WZ!L", 969, 1119, 1006, 888) + A("CAYN", 818, 958, 916, 830) + ".");
        if (!this[t("(O2S", 244, 250, 209, 278) + o(447, "DJ4[", 575, 564, 545) + "d"][e(-158, -163, "PlY5", -58, -103) + e(-241, -302, "wTsV", -349, -256) + e(-284, -243, "wTsV", -411, -420) + "ed"]()) {
          if (A("wTsV", 1251, 1199, 1166, 1273) === n(412, 443, "GlSv", 482, 482)) throw new Kn(n(259, 388, ")Y@^", 361, 367) + n(381, 591, "OEB!", 459, 539) + o(309, "wTsV", 278, 253, 400) + o(223, "6y@m", 227, 304, 188) + ".");
          return _0x218c1a instanceof _0x31d936 && _0x1c0d61[e(-137, -44, "n7Vs", -83, -53) + n(176, 332, ")Y@^", 292, 384)](_0x12bb34), null;
        }
        this[t("gC&k", 23, 192, 74, 10) + t("gC&k", 95, -21, 51, 25)] = new da(Lc(this[e(-125, -8, "Os(1", -34, -214) + "se"], this[t("MsV]", 41, 118, 86, 31) + o(261, "^eqI", 347, 238, 266)]())), this[e(-327, -194, "&VMM", -432, -200) + e(-109, -148, "OEB!", -1, -178) + "s"](this[t("PlY5", 160, 167, 39, -48) + t("!6n%", 98, -17, 96, 58)][e(-164, -228, "FtLy", -296, -219) + "s"]), this[A("^eqI", 1089, 1023, 1132, 1064) + A("NWyW", 1119, 1105, 1111, 1153) + o(281, "v8Z[", 261, 334, 319)](this[e(-302, -395, "6y@m", -302, -310) + A("PlY5", 1220, 1220, 1096, 1177)][o(413, "oS&I", 341, 552, 522) + A("v8Z[", 896, 983, 967, 960)]);
      } else _0x103707[n(298, 221, "!6n%", 286, 342) + "ch"]((r) => _0x52b096[o(231, "JHrq", 240, 360, 342)](r));
    } catch (r) {
      if (A("yIIr", 1147, 1017, 1069) === t("EfmC", -74, -55, 8)) return _0x3fce9e[A("51PN", 1123, 1171, 1140)](this[A("PlY5", 1073, 1261, 1138) + "se"]);
      {
        if (r instanceof Kn) e(-346, -231, "(1Yx") === n(465, 406, "oS&I", 327) ? r[t("6y@m", 122, 227, 200)]() : _0x369201[o(403, "gC&k") + t("X6DY", 373, 103, 240)](_0x493ae7);
        else if (r instanceof Error)
          if (A("(1Yx", 1284, 1170, 1181) === n(502, 271, "(1Yx", 396)) {
            if (!this[t("X0m2", 18, 183, 97) + "se"]) throw new _0x1971ca(t("X0m2", 288, 343, 268) + e(-231, -127, "n7Vs") + t("L$7]", 151, -89, 22) + n(410, 498, "(O2S", 386) + ".");
            if (!this[e(-321, -239, "NWyW") + n(503, 430, "^eqI", 469) + "d"][A("hD&A", 836, 845, 959) + t("De7O", -25, -62, 55) + A("ANMH", 1137, 945, 1036) + "ed"]()) throw new _0x596124(o(267, "n7Vs") + A("oAIS", 1039, 1002, 979) + n(354, 425, "n7Vs", 345) + e(-113, -229, "zl3L") + ".");
            this[n(181, 270, "8nEA", 246) + e(-260, -369, "!6n%")] = new _0x27d3c1(_0xccae8f(this[t("jMtA", 122, -59, 80) + "se"], this[e(-288, -408, "wTsV") + o(227, "Gxqz")]())), this[t("oAIS", 322, 289, 196) + o(406, "Qta^") + "s"](this[e(-308, -326, "wTsV") + t("iPnO", 30, 107, 26)][A("ANMH", 1149, 1193, 1086) + "s"]), this[o(336, "51PN") + e(-324, -348, "JHrq") + t("Os(1", 119, 290, 214)](this[e(-98, -147, "&Czt") + e(-200, -93, "SW&X")][A("@X4T", 1036, 1114, 1142) + o(271, "wTsV")]);
          } else console[A(")Y@^", 958, 1046, 1012)](r);
        const g = {};
        g[t("SW&X", 9, 111, 14) + n(468, 505, "A[RS", 473)] = !1, g[o(322, "PlY5") + "s"] = [], g[A("SW&X", 1033, 1189, 1139) + o(421, "DJ4[")] = [], g[A("hbBs", 984, 1051, 961) + A("51PN", 1150, 1108, 1149) + o(373, "De7O")] = void 0, g[e(-272, -204, "OEB!")] = function() {
        }, g[n(292, 317, "hbBs", 359) + n(474, 273, "&VMM", 408)] = "", this[A("hbBs", 1035, 1206, 1174) + A("51PN", 1218, 1054, 1161)] = new da(g);
      }
    }
  }
  [OA(1242, 1458, "ANMH", 1323) + V(1404, 1271, "DJ4[", 1296) + V(1155, 1148, "A[RS", 1223) + V(1194, 1199, "L$7]", 1255)]() {
    function n(e, A, o, r, g) {
      return NA(e - 419, g - 378, o - 18, r - 43, r);
    }
    function t(e, A, o, r, g) {
      return q(e - 204, o - 109, r);
    }
    return !!this[n(1345, 1441, 1360, "wTsV", 1352) + t(1214, 1022, 1110, "WZ!L")];
  }
  [q(971, 887, "jMtA") + oA(-425, "n7Vs", -287) + oA(-130, ")Y@^", -228) + "t"]() {
    function n(t, e, A, o, r) {
      return q(t - 234, t - -608, A);
    }
    return this[n(510, 378, "FtLy") + n(437, 450, "PlY5")];
  }
  [oA(-188, "8nEA", -162) + oA(-467, "DJ4[", -380) + "se"]() {
    function n(r, g, a, I, c) {
      return q(r - 312, r - -682, I);
    }
    if (!this[o(606, 495, "6y@m") + "se"]) {
      if (o(633, 527, "gC&k") === o(603, 599, "yIIr")) return null;
      _0x46f312[A(23, -121, -71, -47, "ejqq")](n(358, 267, 446, "^eqI") + A(-114, -146, -212, -325, "PlY5") + o(551, 471, "wTsV") + t(-309, "!6n%", -197, -179, -277) + e(-186, -135, "8nEA")), this[n(186, 71, 202, "L$7]") + "se"] = void 0;
      return;
    }
    function t(r, g, a, I, c) {
      return OA(r - 52, g - 150, g, c - -1623);
    }
    function e(r, g, a, I, c) {
      return q(r - 179, g - -1094, a);
    }
    function A(r, g, a, I, c) {
      return V(r - 287, g - 76, c, a - -1463);
    }
    function o(r, g, a, I, c) {
      return oA(r - 342, a, r - 821);
    }
    try {
      if (e(50, -37, "ejqq", -163, 34) === t(-308, "PlY5", -189, -209, -201)) throw new _0x5f2366(o(561, 564, "2q**", 528, 476) + n(432, 421, 410, "L$7]", 567) + n(231, 287, 119, "A[RS", 135) + t(-403, "5Lf]", -441, -459, -394) + "d.");
      return JSON[n(402, 332, 487, "^eqI", 389)](this[o(413, 279, "Gxqz", 456, 522) + "se"]);
    } catch (r) {
      if (t(-301, "n7Vs", -306, -539, -427) === o(507, 582, "oS&I")) {
        if (r instanceof Error) {
          if (t(-205, "(1Yx", -325, -206, -339) === n(330, 339, 404, "iPnO")) throw new _0xcd900(t(-373, "iPnO", -222, -290, -298) + A(-116, 127, -6, -23, "EfmC") + e(-202, -147, "L$7]") + e(-242, -134, "SW&X") + ".");
          m[n(236, 322, 338, "8nEA") + t(-534, "hD&A", -491, -398, -398)](r);
        }
        return null;
      } else this[t(-401, "51PN", -346, -433, -341) + e(-191, -96, "FtLy") + "d"] = _0x5e3c86;
    }
  }
  [V(1186, 1220, "OEB!", 1249) + q(1191, 1126, "X0m2")]() {
    function n(r, g, a, I, c) {
      return q(r - 432, r - -1242, I);
    }
    const t = this[A(26, 111, "Os(1", 74) + A(-47, 58, "Os(1", 51) + "se"]();
    function e(r, g, a, I, c) {
      return oA(r - 253, I, r - 612);
    }
    function A(r, g, a, I, c) {
      return NA(r - 193, I - -992, a - 407, I - 355, a);
    }
    function o(r, g, a, I, c) {
      return oA(r - 91, I, c - 1003);
    }
    return t?.[o(812, 623, 709, "zl3L", 687) + n(-338, -403, -474, "GlSv")]?.[e(346, 477, 312, "&VMM")] || [];
  }
  [V(1384, 1196, "yIIr", 1285) + oA(-524, "JHrq", -393) + q(787, 867, "@X4T")]() {
    const n = this[e(-388, -299, -364, "51PN", -252) + e(-274, -214, -266, "Qta^", -262) + "se"]();
    function t(r, g, a, I, c) {
      return V(r - 431, g - 147, g, c - -931);
    }
    function e(r, g, a, I, c) {
      return OA(r - 140, g - 475, I, c - -1643);
    }
    function A(r, g, a, I, c) {
      return q(r - 223, r - -390, a);
    }
    function o(r, g, a, I, c) {
      return oA(r - 45, I, a - 567);
    }
    return n?.[A(582, 660, "5Lf]") + e(-335, -475, -363, "De7O", -357)]?.[o(192, 245, 239, "(O2S") + t(529, "CAYN", 356, 477, 472)];
  }
}
const Dr = fe(void 0);
Dr.displayName = "CommonConfigurationContext";
function Cs() {
  const i = te(Dr);
  if (!i)
    throw new Error("Missing provider for CommonConfigurationContext");
  return i;
}
(function(i, n) {
  const t = i();
  function e(g, a, I, c, s) {
    return DA(g - 987, a);
  }
  function A(g, a, I, c, s) {
    return DA(g - 712, c);
  }
  function o(g, a, I, c, s) {
    return DA(I - 341, s);
  }
  function r(g, a, I, c, s) {
    return DA(I - 420, c);
  }
  for (; ; )
    try {
      if (-parseInt(o(733, 747, 742, 742, "s9[&")) / 1 * (parseInt(o(761, 772, 760, 760, "#(HN")) / 2) + -parseInt(A(1124, 1116, 1116, "4s)F", 1122)) / 3 + parseInt(o(754, 750, 748, 741, "3bJ6")) / 4 * (parseInt(o(761, 762, 763, 754, "3bJ6")) / 5) + -parseInt(A(1117, 1119, 1117, "aLV7", 1128)) / 6 + parseInt(r(831, 829, 840, "WljJ", 831)) / 7 * (-parseInt(e(1398, "h4PO", 1394, 1404, 1407)) / 8) + parseInt(r(835, 842, 830, "%ZM8", 827)) / 9 * (parseInt(e(1393, "e9%9", 1385, 1385, 1395)) / 10) + parseInt(r(832, 825, 833, "#(HN", 839)) / 11 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Vo, -78 * -11543 + -576979 + 462487);
function Vo() {
  const i = ["mIDPWQdcUSo5bCoCW6tcOs4+", "g8knWRDxW4bAWRRcQCk/vW", "o8odme8mWRxdPau3WOdcHeS", "ECkHW4ldIIWcsa", "zNbHemoUWP3cH8oOymoxqSo3WOdcKa", "WR3cP8oOumkWpCkBW77dSwG", "cSkoW5iIW5dcLYm", "r8oxW68s", "rJWhWOJdTq", "W6RdHCkGWOPhW4yPWOuRkuRdJZ4", "BIVcQmouFCo2W5qBWQZdOGRdOSkE", "bSkqASoRA8oZkSkHja", "F8oKWOdcT1rxcHBcH8o1h8oXW4q", "W7DlW5FdV2xdMrK", "c8oxWQPrWO/dMfVcPsKZcSkSW6y", "rSoqeNXsW7jnW4XvWO0PaW", "cGe8WPCwWOq7mCkDESov", "cmkNWOFdPeFdII8SWPhdV8ocf8oV", "mIbHWQdcUSo9qSkeW7RcTY8Drvu", "cSkIWOlcPsxcNguZWOK", "W4FdSXyJWPBcGM1dW4CZWQi", "pCodpuWaWRtcKtWKWQxcVNLp", "bZOKW7j7yb0", "BsVcPSozEmo6WPiyWQ7dGI7dHa"];
  return Vo = function() {
    return i;
  }, Vo();
}
function DA(i, n) {
  i = i - (-1 * 7202 + 8507 * -1 + 16110);
  const t = Vo();
  let e = t[i];
  if (DA.BnAxAN === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let E = 0, x, B, l = 0; B = I.charAt(l++); ~B && (x = E % 4 ? x * 64 + B : B, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        B = c.indexOf(B);
      for (let E = 0, x = s.length; E < x; E++)
        Q += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const a = function(I, c) {
      let s = [], Q = 0, E, x = "";
      I = A(I);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        Q = (Q + s[B] + c.charCodeAt(B % c.length)) % 256, E = s[B], s[B] = s[Q], s[Q] = E;
      B = 0, Q = 0;
      for (let l = 0; l < I.length; l++)
        B = (B + 1) % 256, Q = (Q + s[B]) % 256, E = s[B], s[B] = s[Q], s[Q] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[B] + s[Q]) % 256]);
      return x;
    };
    DA.VyHcaw = a, DA.iLiZtD = {}, DA.BnAxAN = !0;
  }
  const o = t[-5 * 619 + -7 * 777 + 8534], r = i + o, g = DA.iLiZtD[r];
  return g ? e = g : (DA.HeVnIX === void 0 && (DA.HeVnIX = !0), e = DA.VyHcaw(e, n), DA.iLiZtD[r] = e), e;
}
function Hc() {
  const { assetsDirectoryPath: i } = Cs(), [n, t] = EA();
  j(() => {
    async function o() {
      const r = new Yc();
      function g(I, c, s, Q, E) {
        return DA(E - 327, c);
      }
      const a = new Pc(r);
      await a[g(720, "WljJ", 734, 722, 729)](i), t(a);
    }
    o();
  }, [i]);
  const e = {};
  e[A(459, 474, "Efk2", 467) + "le"] = n;
  function A(o, r, g, a, I) {
    return DA(a - 64, g);
  }
  return e;
}
function Zo() {
  var i = ["W57dR1qgiCkUWQOQbSoaWQxdIxiK", "yGldMSkXWRJcPrO7W7K9W7JcICk3", "W6ZdO2JdRmkvW781WQZdGJ7dHSowWO0", "CNb5emkeWPT4W4G", "mYCnWQ9i", "gmkHxG3dPmo/WQJcLdj+", "WQddS8o8W5zXdSknASoQ", "W7BdHqKOkSotWO9SWOCzkCoHW6y", "W697dKTQWPNdSM/cV8koyrFcGXi", "WQBdSmo1WO8vwCker8obmSodDG", "EWu5W6KpWRShdCo+WO0", "h8kKuadcNmkJW57cUZPbn33dLG", "W4BcQtBcTvm", "txXcW70jWOzVc1meWP9P", "bmoBlcGnzCk/tYGIgmo9cW", "imkSWPnYWONcTCocWRG", "bczMBGHelSoifW", "W5RdRfqpiSkQW7LkiComWO7dKa", "W5FdOsTtFmoSW6T8", "uCkIW6NdRCoFpKxcJmkubmk1WOBdKq", "W5bMxtpcUIL4W5C", "W6XEW7tcVmou", "W6T4dKjPWP3cOq/cMmkcsG4"];
  return Zo = function() {
    return i;
  }, Zo();
}
(function(i, n) {
  function t(a, I, c, s, Q) {
    return bA(Q - 793, I);
  }
  var e = i();
  function A(a, I, c, s, Q) {
    return bA(s - 266, I);
  }
  function o(a, I, c, s, Q) {
    return bA(s - -499, I);
  }
  function r(a, I, c, s, Q) {
    return bA(I - 296, s);
  }
  for (; ; )
    try {
      var g = -parseInt(r(744, 743, 754, "yVBm", 749)) / 1 + -parseInt(r(743, 737, 727, "yVBm", 730)) / 2 * (parseInt(A(726, "[f$U", 725, 718, 726)) / 3) + parseInt(t(1240, "[cRn", 1253, 1248, 1246)) / 4 + -parseInt(r(746, 747, 752, "FH3u", 747)) / 5 * (-parseInt(o(-50, "^pj#", -59, -56, -65)) / 6) + -parseInt(o(-54, "]1#*", -68, -61, -52)) / 7 + parseInt(r(740, 735, 745, "CoSA", 725)) / 8 * (parseInt(r(748, 741, 740, "cnC7", 751)) / 9) + parseInt(t(1242, "aBo[", 1249, 1232, 1237)) / 10;
      if (g === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Zo, 1038730 + -1889 * 223);
function bA(i, n) {
  i = i - (1105 + -667 * 1);
  var t = Zo(), e = t[i];
  if (bA.XhoHVF === void 0) {
    var A = function(I) {
      for (var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", Q = "", E = 0, x, B, l = 0; B = I.charAt(l++); ~B && (x = E % 4 ? x * 64 + B : B, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        B = c.indexOf(B);
      for (var h = 0, f = s.length; h < f; h++)
        Q += "%" + ("00" + s.charCodeAt(h).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    }, o = function(I, c) {
      var s = [], Q = 0, E, x = "";
      I = A(I);
      var B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        Q = (Q + s[B] + c.charCodeAt(B % c.length)) % 256, E = s[B], s[B] = s[Q], s[Q] = E;
      B = 0, Q = 0;
      for (var l = 0; l < I.length; l++)
        B = (B + 1) % 256, Q = (Q + s[B]) % 256, E = s[B], s[B] = s[Q], s[Q] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[B] + s[Q]) % 256]);
      return x;
    };
    bA.XRAutB = o, bA.VZwVXy = {}, bA.XhoHVF = !0;
  }
  var r = t[-5544 + 760 * -2 + 7064], g = i + r, a = bA.VZwVXy[g];
  return a ? e = a : (bA.xZQNUS === void 0 && (bA.xZQNUS = !0), e = bA.XRAutB(e, n), bA.VZwVXy[g] = e), e;
}
function _c({ crosshatch: i }) {
  function n(e, A, o, r, g) {
    return bA(o - -473, r);
  }
  function t(e, A, o, r, g) {
    return bA(r - -380, A);
  }
  return i?.[n(-24, -15, -16, "PIYE") + "id"] ? xt[t(80, "5xTh", 60, 68) + "r"] : xt[n(-41, -43, -33, "E3TW")];
}
(function(i, n) {
  function t(g, a, I, c, s) {
    return gA(c - -70, g);
  }
  function e(g, a, I, c, s) {
    return gA(a - 176, g);
  }
  function A(g, a, I, c, s) {
    return gA(g - -507, a);
  }
  const o = i();
  function r(g, a, I, c, s) {
    return gA(c - 310, I);
  }
  for (; ; )
    try {
      if (parseInt(t("gSGC", 60, 77, 57, 70)) / 1 + parseInt(r(438, 433, "BLn3", 439, 428)) / 2 * (-parseInt(r(450, 442, "dni@", 449, 465)) / 3) + parseInt(t("Km!G", 70, 64, 58, 39)) / 4 * (parseInt(r(455, 465, "hKd3", 446, 429)) / 5) + -parseInt(t("qv3r", 58, 45, 60, 75)) / 6 * (parseInt(A(-346, "c@xg", -356, -360, -335)) / 7) + -parseInt(A(-365, "LU&H", -380, -349, -346)) / 8 * (parseInt(e("l[9]", 314, 325, 312, 313)) / 9) + parseInt(A(-352, "oXl4", -346, -335, -361)) / 10 * (-parseInt(e("3z9Z", 311, 293, 327, 295)) / 11) + parseInt(t("c@xg", 85, 104, 86, 93)) / 12 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(zo, 543574);
function gA(i, n) {
  i = i - (-1786 + 1 * -739 + 2651);
  const t = zo();
  let e = t[i];
  if (gA.Waqydy === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let E = 0, x, B, l = 0; B = I.charAt(l++); ~B && (x = E % 4 ? x * 64 + B : B, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        B = c.indexOf(B);
      for (let E = 0, x = s.length; E < x; E++)
        Q += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const a = function(I, c) {
      let s = [], Q = 0, E, x = "";
      I = A(I);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        Q = (Q + s[B] + c.charCodeAt(B % c.length)) % 256, E = s[B], s[B] = s[Q], s[Q] = E;
      B = 0, Q = 0;
      for (let l = 0; l < I.length; l++)
        B = (B + 1) % 256, Q = (Q + s[B]) % 256, E = s[B], s[B] = s[Q], s[Q] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[B] + s[Q]) % 256]);
      return x;
    };
    gA.QWxcGJ = a, gA.GNvrvJ = {}, gA.Waqydy = !0;
  }
  const o = t[-1 * -1293 + -1 * -6171 + -7464], r = i + o, g = gA.GNvrvJ[r];
  return g ? e = g : (gA.BFPRxz === void 0 && (gA.BFPRxz = !0), e = gA.QWxcGJ(e, n), gA.GNvrvJ[r] = e), e;
}
function zo() {
  const i = ["WPfgbmotW4JdT8kmW6WoW6G", "DNvohhBcUw3dMCofWPXX", "wmkgWQZcTSkxW7jeWO5snCoB", "dComa8o5WPa", "WRj9f8o1Eq", "mM/cHCoZuW", "W7qPv8kpjmkHsY3cNCkvpI0", "mujPWRjq", "lmoZhmoUjCkchKi", "nmovW5Tk", "CColWPm", "W4BcRSooW7bK", "fCo4W6jHWQ1ekrZdJmkWzq", "W5mohY/dJa", "FIddKshcPMGpDmkTWOrt", "m3/dTmkdtmoRWQOTcSkxFZPwuW", "W71MeSkNW4xcTXhdNCkc", "FSo+wdRcJCkyW6KKkq", "W7C8ASopoG", "WO/dMvu8WQS", "m3NdU8khtCk7W4vukmk2Ca", "gLVdON/dSCokW4FcJL3cVCkT", "dCobbmoMWPe", "uNddOcbk", "WOn7WPldGu4", "k8o1ASkEAmozj2S4iSoakq", "ECo5wMJcNmkZW4urf8k5", "yZRdGmkpB8o0WQldOCo1WRO", "W7mRvSo9ACoatWlcOq", "WPBdMCkK", "WP3cOrVcTgZcVmkAW6ZcSCoc", "jSo5W6OiweavWPrOgCktymk1wW", "W5BcImo/gcTUW7GGfSov", "WO7dMeGic08aW7ZdPgq", "W7LKemowW5hcLWJdNmk5ca", "DN/dNmouna", "WPngD8kIW7FdOSk2W5K", "WRvPWQCpo8kxW4TjW40", "W6NdVLddVZG/DCk7W5RcHG"];
  return zo = function() {
    return i;
  }, zo();
}
function Kc({ children: i }) {
  const { bramble: n } = Hc(), t = fA(() => ({ redfin: _c({ crosshatch: n?.[a(314, 319, 315, 311, "BLn3") + g(844, "bWck") + A(-371, -370, -384, -387, "qwA!") + "t"]() }), crosshatch: n?.[g(848, "Oun$") + r(-10, "wNdP") + g(837, "nG&4") + "t"](), bramble: n, wasLicenseValidated: n?.[e(884, 884, 861, 876, "qv3r") + e(903, 885, 909, 891, "yRCP") + A(-369, -344, -358, -359, "3dq2") + a(328, 323, 319, 304, "O**]")]() }), [n]);
  function e(I, c, s, Q, E) {
    return gA(Q - 731, E);
  }
  function A(I, c, s, Q, E) {
    return gA(s - -510, E);
  }
  const o = {};
  function r(I, c, s, Q, E) {
    return gA(I - -174, c);
  }
  function g(I, c, s, Q, E) {
    return gA(I - 700, c);
  }
  o[a(331, 329, 323, 326, "R^0[")] = t;
  function a(I, c, s, Q, E) {
    return gA(s - 169, E);
  }
  return o[A(-359, -345, -347, -355, "bWck") + r(-43, "^lT&")] = i, y(Yo[e(880, 907, 909, 890, "ow#y") + r(-23, "$kRm")], o);
}
const jc = -7670 + 10 * 967;
class qc {
  transactionCountingToken;
  constructor(n) {
    this.transactionCountingToken = n;
  }
  async validateToken() {
    const n = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), jc), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const o = {};
    o.method = "POST", o.headers = A, o.signal = t.signal;
    const r = o, g = await fetch(n, r).catch(() => null);
    return clearTimeout(e), g ? g.status !== -4519 + -5689 * 1 + 10608 && g.status !== 9039 + -2559 * -2 + -13756 : !0;
  }
}
class Vc {
  #A;
  #e;
  #t;
  #o;
  #n;
  #i;
  #r;
  #a;
  constructor({ hwids: n, tokenHandler: t, transactionType: e }) {
    this.#A = t, this.#n = n, this.#a = e, this.#i = window.location.origin, this.#r = "8.0.2";
  }
  async init(n) {
    if (this.#t = this.shouldCountTransactions(n), yr.info("Transaction counting is " + (this.#t ? "enabled" : "disabled")), mr()) {
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
function Zc(i, n) {
  const { crosshatch: t, bramble: e } = bn(), [A, o] = EA(null);
  j(() => {
    if (!t) return;
    (async () => {
      const a = new qc(n), I = new Vc({ hwids: e.getHwids(), tokenHandler: a, transactionType: i });
      await I.init(t), o(I);
    })();
  }, [n, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function zc({
  children: i,
  transactionCountingToken: n,
  transactionType: t
}) {
  const { transactionCounting: e } = Zc(t, n), A = fA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ y(Ho.Provider, { value: A, children: i });
}
const De = {};
De.FACE = "web-capture-face", De.DOCUMENT = "web-capture-document", De.MAGNIFEYE = "web-capture-magnifeye", De.SMILE = "web-capture-smile", De.PALM = "web-capture-palm", De.EYEGAZE = "web-capture-eyegaze", De.MULTIRANGE = "web-capture-multirange";
const Xc = De;
var MA = function() {
  return MA = Object.assign || function(n) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, MA.apply(this, arguments);
};
function dt(i, n, t) {
  if (t || arguments.length === 2) for (var e = 0, A = n.length, o; e < A; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return i.concat(o || Array.prototype.slice.call(n));
}
function $c(i) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = i(t)), n[t];
  };
}
var AC = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, eC = $c(function(i) {
  return AC.test(i) || i.charCodeAt(5795 * -1 + 9292 + -3497 * 1) === 9520 + -907 * 9 + -1246 && i.charCodeAt(8653 + -6046 * 1 + 1303 * -2) === 241 + 3 * 2277 + -6962 && i.charCodeAt(9309 + -4 * 1812 + -2059) < 91;
});
function tC(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var jn, la;
function oC() {
  return la || (la = 1454 + 1753 * -1 + 300, jn = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), g = Object.keys(t);
    if (r.length !== g.length) return !1;
    for (var a = Object.prototype.hasOwnProperty.bind(t), I = -14202 + -7101 * -2; I < r.length; I++) {
      var c = r[I];
      if (!a(c)) return !1;
      var s = n[c], Q = t[c];
      if (o = e ? e.call(A, s, Q, c) : void 0, o === !1 || o === void 0 && s !== Q) return !1;
    }
    return !0;
  }), jn;
}
var nC = oC();
const iC = /* @__PURE__ */ tC(nC);
var U = "-ms-", Tt = "-moz-", L = "-webkit-", Bs = "comm", Sn = "rule", br = "decl", rC = "@import", Qs = "@keyframes", aC = "@layer", Es = Math.abs, kr = String.fromCharCode, Mi = Object.assign;
function gC(i, n) {
  return QA(i, 1 * 6065 + 4524 + 10589 * -1) ^ -6702 + -11 * 647 + 8 * 1733 ? (((n << 9348 + 4803 * 1 + -14149 * 1 ^ QA(i, 0)) << -31 * -279 + -7987 + -660 ^ QA(i, 8677 * 1 + 2087 * 2 + -10 * 1285)) << 4948 * 2 + -2172 + -7722 ^ QA(i, -2 * 3257 + -9991 + 1 * 16507)) << 466 + -1 * 4702 + -1 * -4238 ^ QA(i, -8839 * -1 + -1462 + -7374) : 0;
}
function xs(i) {
  return i.trim();
}
function le(i, n) {
  return (i = n.exec(i)) ? i[-9285 * -1 + -1 * -587 + -4936 * 2] : i;
}
function F(i, n, t) {
  return i.replace(n, t);
}
function ho(i, n, t) {
  return i.indexOf(n, t);
}
function QA(i, n) {
  return i.charCodeAt(n) | 0;
}
function lt(i, n, t) {
  return i.slice(n, t);
}
function ae(i) {
  return i.length;
}
function ds(i) {
  return i.length;
}
function Lt(i, n) {
  return n.push(i), i;
}
function sC(i, n) {
  return i.map(n).join("");
}
function ua(i, n) {
  return i.filter(function(t) {
    return !le(t, n);
  });
}
var Gn = 1, ut = 1, ls = -9262 + 9262 * 1, qA = 1 * 3665 + -478 * 19 + 5417 * 1, $ = 0, wt = "";
function Nn(i, n, t, e, A, o, r, g) {
  var a = {};
  return a.value = i, a.root = n, a.parent = t, a.type = e, a.props = A, a.children = o, a.line = Gn, a.column = ut, a.length = r, a.return = "", a.siblings = g, a;
}
function be(i, n) {
  return Mi(Nn("", null, null, "", null, null, -12128 + -758 * -16, i.siblings), i, { length: -i.length }, n);
}
function et(i) {
  for (; i.root; ) i = be(i.root, { children: [i] });
  Lt(i, i.siblings);
}
function IC() {
  return $;
}
function cC() {
  return $ = qA > 9229 + 1 * 6482 + 3 * -5237 ? QA(wt, --qA) : -12 * -709 + -6908 + -1600, ut--, $ === 961 + 2 * 4846 + 29 * -367 && (ut = -2835 + -1503 * 6 + 11854, Gn--), $;
}
function Ae() {
  return $ = qA < ls ? QA(wt, qA++) : -1 * -2221 + -6273 * -1 + -8494, ut++, $ === 2417 + -2407 * 1 && (ut = -4435 + 3389 * -1 + -1 * -7825, Gn++), $;
}
function je() {
  return QA(wt, qA);
}
function fo() {
  return qA;
}
function Rn(i, n) {
  return lt(wt, i, n);
}
function Wi(i) {
  switch (i) {
    case 46 + -2 * 1379 + 2712:
    case 1671 + 6 * -277:
    case 2401 + 734 * 2 + -3859:
    case 5533 + 1336 * 6 + -36 * 376:
    case 3953 * 2 + 1 * 3055 + -10929:
      return 5;
    case -2768 + 2801 * 1:
    case 11 * -822 + 4816 + 4269:
    case 44:
    case 47:
    case -3489 + -2341 * 3 + 10574:
    case 64:
    case -8477 + 1 * -1453 + 10056:
    case -5914 * 1 + -1646 * 1 + 7619 * 1:
    case -2084 + -1 * -2207:
    case -1 * -2063 + -3810 + 1 * 1872:
      return -7020 + 439 * 16;
    case 10 * 807 + 6458 * -1 + -1554:
      return 4453 + 3 * -1571 + 263 * 1;
    case -8852 + -1481 * -6:
    case 39:
    case 533 * 11 + 2282 + 1621 * -5:
    case 91:
      return 2;
    case -1772 + -5475 * 1 + -911 * -8:
    case -1105 + -521 * -14 + -6096:
      return -794 * -1 + -4217 * 1 + -2 * -1712;
  }
  return -6049 * 1 + 8256 + -2207;
}
function CC(i) {
  return Gn = ut = -2063 + -2476 * 2 + 7016, ls = ae(wt = i), qA = 305 * 10 + -1 * 4259 + 1209, [];
}
function BC(i) {
  return wt = "", i;
}
function qn(i) {
  return xs(Rn(qA - (-2 * -2869 + -9055 + 3 * 1106), Li(i === -8047 + 26 * 313 ? i + (10856 + 27 * -402) : i === 1 * -7811 + -3701 * -2 + -449 * -1 ? i + (2766 * -1 + 1313 + 1454) : i)));
}
function QC(i) {
  for (; ($ = je()) && $ < -6538 + -1 * -6571; ) Ae();
  return Wi(i) > 5221 + -9242 * 1 + 4023 || Wi($) > 3 ? "" : " ";
}
function EC(i, n) {
  for (; --n && Ae() && !($ < 9476 + 9965 * 1 + -41 * 473 || $ > -6166 * -1 + 7436 + -13500 || $ > 4856 + 16 * 534 + 1213 * -11 && $ < 3 * 2890 + -4786 + -1 * 3819 || $ > 5 * -1754 + -1 * -4143 + 671 * 7 && $ < -5851 + 2193 * -3 + 12527); ) ;
  return Rn(i, fo() + (n < -2 * 608 + -7035 + 8257 && je() == -1 * 8402 + -1 * 7575 + 16009 && Ae() == 32));
}
function Li(i) {
  for (; Ae(); ) switch ($) {
    case i:
      return qA;
    case 1774 + 383 * 10 + -5570:
    case 9 * -797 + -6239 + 13451:
      i !== -1 * 344 + -6420 + 6798 && i !== 9717 + -9678 * 1 && Li($);
      break;
    case 40:
      i === 6233 + -9764 * 1 + -893 * -4 && Li(i);
      break;
    case -18 * -530 + 3538 + -6493 * 2:
      Ae();
      break;
  }
  return qA;
}
function xC(i, n) {
  for (; Ae() && i + $ !== 3683 * -1 + -3591 + 7321 * 1 + 10; ) if (i + $ === -1360 + -3146 * -2 + -4890 + 42 && je() === -5 * 1780 + -6362 + 27 * 567) break;
  return "/*" + Rn(n, qA - (-614 * 3 + 1 * 7291 + -5448)) + "*" + kr(i === -573 * 1 + 1 * 3758 + 523 * -6 ? i : Ae());
}
function dC(i) {
  for (; !Wi(je()); ) Ae();
  return Rn(i, qA);
}
function lC(i) {
  return BC(po("", null, null, null, [""], i = CC(i), 7173 * 1 + 8161 + -1394 * 11, [2 * 1328 + 9865 + -12521 * 1], i));
}
function po(i, n, t, e, A, o, r, g, a) {
  for (var I = 0, c = 1 * -5213 + -4215 + -4 * -2357, s = r, Q = 0, E = 1255 * -5 + 7785 + -1510 * 1, x = -359 * 19 + 8165 + -1344, B = 5099 * -1 + -1 * 7671 + 12771, l = 8650 + 4931 * -2 + -1213 * -1, h = 7536 + -1 * 1129 + 6406 * -1, f = 0, p = "", k = A, w = o, D = e, b = p; l; ) switch (x = f, f = Ae()) {
    case -727 + -8968 * -1 + -8201:
      if (x != 108 && QA(b, s - (-5308 + 1 * -9049 + 2393 * 6)) == -3445 + -2927 * -1 + 576) {
        ho(b += F(qn(f), "&", "&\f"), "&\f", Es(I ? g[I - (297 + 4121 * -2 + -29 * -274)] : 0)) != -1 && (h = -1);
        break;
      }
    case -4259 + 1 * 534 + 3759:
    case 39:
    case 5 * 1567 + -6151 + -531 * 3:
      b += qn(f);
      break;
    case 8827 * 1 + 933 + -9751:
    case 6611 + 5 * -1294 + -131:
    case 9950 + -1 * -8705 + -1434 * 13:
    case 9587 + -3066 * 2 + -3423 * 1:
      b += QC(x);
      break;
    case 10790 + -3566 * 3:
      b += EC(fo() - 1, -6375 + -6382 * -1);
      continue;
    case 1 * 7515 + 1 * 4597 + 635 * -19:
      switch (je()) {
        case 42:
        case 4031 + -498 * 8:
          Lt(uC(xC(Ae(), fo()), n, t, a), a);
          break;
        default:
          b += "/";
      }
      break;
    case 123 * B:
      g[I++] = ae(b) * h;
    case (-1 * -3219 + -4360 + -422 * -3) * B:
    case 899 + -1 * -2949 + -3789:
    case 7606 + -3803 * 2:
      switch (f) {
        case 0:
        case -3355 + 9629 * -1 + 13109:
          l = -1 * -1571 + -844 * -6 + -6635;
        case 1 * -4514 + -9409 + 13982 + c:
          h == -1 && (b = F(b, /\f/g, "")), E > 0 && ae(b) - s && Lt(E > 1937 * -3 + -1 * -6101 + -258 ? fa(b + ";", e, t, s - (-1810 * -5 + 5141 + -14190), a) : fa(F(b, " ", "") + ";", e, t, s - (-7552 + 4 * 1123 + 1531 * 2), a), a);
          break;
        case 8221 * 1 + -8135 + -27:
          b += ";";
        default:
          if (Lt(D = ha(b, n, t, I, c, A, g, p, k = [], w = [], s, o), o), f === -3 * -1013 + -6269 + 479 * 7)
            if (c === 0) po(b, n, D, D, k, o, s, g, w);
            else switch (Q === -1642 + 1741 * 1 && QA(b, -1 * 1061 + -1 * -917 + 147) === -2064 + -2 * -1087 ? -8326 + -3 * -1294 + 4544 : Q) {
              case -8196 * 1 + -2 * 1830 + 11956:
              case 6399 + 1 * -6291:
              case 13776 + 13667 * -1:
              case 2417 + -1226 * 6 + 5054:
                po(i, D, D, e && Lt(ha(i, D, D, -1 * 3147 + -6493 * -1 + -3346, 0, A, g, p, A, k = [], s, w), w), A, w, s, g, e ? k : w);
                break;
              default:
                po(b, D, D, D, [""], w, -5194 + -1 * -9271 + -4077, g, w);
            }
      }
      I = c = E = 5121 + -569 * 9, B = h = 2 * 967 + 7732 + -1 * 9665, p = b = "", s = r;
      break;
    case -2917 * -1 + -380 * -19 + 1 * -10079:
      s = 5020 + 717 * -7 + ae(b), E = x;
    default:
      if (B < -3 * -1903 + -7501 + 1793) {
        if (f == 583 * -13 + 6311 * -1 + 4671 * 3) --B;
        else if (f == -13989 + -1 * -14114 && B++ == -2883 + 19 * -265 + 7918 && cC() == -807 + 9973 * 1 + -9041) continue;
      }
      switch (b += kr(f), f * B) {
        case -6984 + 3511 * 2:
          h = c > 9626 * 1 + 5581 * -1 + -4045 ? 1 : (b += "\f", -1);
          break;
        case 44:
          g[I++] = (ae(b) - (5558 + 5557 * -1)) * h, h = -6160 + -1 * 2704 + 8865;
          break;
        case -897 * 1 + -2442 + 3403:
          je() === 45 && (b += qn(Ae())), Q = je(), c = s = ae(p = b += dC(fo())), f++;
          break;
        case 1112 * -7 + -4763 + 787 * 16:
          x === 8090 * 1 + 4820 + -12865 && ae(b) == -1 * 3e3 + 4324 + -1322 && (B = 1111 + 1 * -1111);
      }
  }
  return o;
}
function ha(i, n, t, e, A, o, r, g, a, I, c, s) {
  for (var Q = A - 1, E = A === 0 ? o : [""], x = ds(E), B = 1207 * 1 + 6983 * -1 + 5776, l = 355 * 13 + -6076 + 1461, h = 0; B < e; ++B) for (var f = -2427 * 1 + 8087 + -5660, p = lt(i, Q + (302 * 28 + -2071 + -6384), Q = Es(l = r[B])), k = i; f < x; ++f) (k = xs(l > 9209 + -15 * 407 + -3104 ? E[f] + " " + p : F(p, /&\f/g, E[f]))) && (a[h++] = k);
  return Nn(i, n, t, A === -3734 * 1 + -4316 + 8050 ? Sn : g, a, I, c, s);
}
function uC(i, n, t, e) {
  return Nn(i, n, t, Bs, kr(IC()), lt(i, -6011 * -1 + -3779 * -2 + 1 * -13567, -2), -2 * 2868 + 9423 + 3 * -1229, e);
}
function fa(i, n, t, e, A) {
  return Nn(i, n, t, br, lt(i, -7492 * 1 + 7276 + 216, e), lt(i, e + (750 * 6 + -3956 * -1 + -8455), -1), e, A);
}
function us(i, n, t) {
  switch (gC(i, n)) {
    case -1 * 4038 + 1 * 1628 + 7513:
      return L + "print-" + i + i;
    case 10602 + 2315 * 2 + -9495:
    case 4562 + -1 * -553 + -914:
    case 3 * -2299 + -9863 + 19937 * 1:
    case 5475 + -2682 * -2 + 1058 * -7:
    case -171 + 2 * -4597 + 11006:
    case -338 * 15 + -1711 + 11238 * 1:
    case 9753 + 16 * -427:
    case 9402 + 2 * -539 + -2752:
    case 6356:
    case -3607 + 727 * 13:
    case 2 * 3778 + 4806 + -9171:
    case 6645:
    case 3005:
    case 7443 + -1 * -12407 + -13459:
    case -701 + 2 * -5836 + 18252:
    case 2 * 686 + 2736 + 1515:
    case 3620 + -2515 * -1:
    case 7602 + 429 * -7:
    case -4307 * -2 + -7321 + 3562:
    case 3582 * 1 + 2446 + -1813:
    case -21885 + -422 * -67:
    case 5109:
    case 5365:
    case -85 + -827 * 7 + 11495:
    case 2 * -3710 + -3542 + -2113 * -7:
      return L + i + i;
    case -598 * 16 + 1 * 9299 + 5058:
      return Tt + i + i;
    case 5349:
    case -2904 + -374 * 3 + 8272:
    case 4810:
    case 2182 * -2 + -3 * 1679 + 16369:
    case 2756:
      return L + i + Tt + i + U + i + i;
    case 27 * 439 + -2153 * 2 + -1611:
      switch (QA(i, n + (1 * -9214 + -1 * 1773 + 10998))) {
        case -723 + -1 * -1504 + -667:
          return L + i + U + F(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 108:
          return L + i + U + F(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 210 + -2318 * 1 + -1 * -2153:
          return L + i + U + F(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 6828:
    case 16 * 361 + -5 * -727 + -5143:
    case 2903:
      return L + i + U + i + i;
    case 5471 + -694 * -1:
      return L + i + U + "flex-" + i + i;
    case 5187:
      return L + i + F(i, /(\w+).+(:[^]+)/, L + "box-$1$2" + U + "flex-$1$2") + i;
    case 5443:
      return L + i + U + "flex-item-" + F(i, /flex-|-self/g, "") + (le(i, /flex-|baseline/) ? "" : U + "grid-row-" + F(i, /flex-|-self/g, "")) + i;
    case -1 * -3266 + 4976 * 1 + -3567:
      return L + i + U + "flex-line-pack" + F(i, /align-content|flex-|-self/g, "") + i;
    case 2 * -4127 + 2827 * 1 + -10975 * -1:
      return L + i + U + F(i, "shrink", "negative") + i;
    case 5292:
      return L + i + U + F(i, "basis", "preferred-size") + i;
    case -7102 + -6 * -548 + -2 * -4937:
      return L + "box-" + F(i, "-grow", "") + L + i + U + F(i, "grow", "positive") + i;
    case -1 * -4550 + -3864 + 3868:
      return L + F(i, /([^-])(transform)/g, "$1" + L + "$2") + i;
    case 6187:
      return F(F(F(i, /(zoom-|grab)/, L + "$1"), /(image-set)/, L + "$1"), i, "") + i;
    case -717 + -7 * -543 + 2411:
    case 2620 + 1339 * 1:
      return F(i, /(image-set\([^]*)/, L + "$1$`$1");
    case 389 * 13 + 1 * 1784 + 1 * -1873:
      return F(F(i, /(.+:)(flex-)?(.*)/, L + "box-pack:$3" + U + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + L + i + i;
    case -698 * -11 + -7131 * -1 + -10609:
      if (!le(i, /flex-|baseline/)) return U + "grid-column-align" + lt(i, n) + i;
      break;
    case 1039 * 9 + 1 * 1973 + -8732:
    case 7751 * 1 + -1 * -1918 + -6309:
      return U + F(i, "template-", "") + i;
    case -1734 + -23 * -266:
    case 16 * 566 + 4251 * 2 + -13942:
      return t && t.some(function(e, A) {
        return n = A, le(e.props, /grid-\w+-end/);
      }) ? ~ho(i + (t = t[n].value), "span", -2309 + 6595 * -1 + 8904) ? i : U + F(i, "-start", "") + i + U + "grid-row-span:" + (~ho(t, "span", -1 * 2081 + 11 * 493 + 557 * -6) ? le(t, /\d+/) : +le(t, /\d+/) - +le(i, /\d+/)) + ";" : U + F(i, "-start", "") + i;
    case 4896:
    case 4128:
      return t && t.some(function(e) {
        return le(e.props, /grid-\w+-start/);
      }) ? i : U + F(F(i, "-end", "-span"), "span ", "") + i;
    case 2109 + 6 * 331:
    case -1094 + 1559 * 3:
    case -4732 + 4 * 667 + 6132:
    case 5854 * 1 + 457 * -2 + -8 * 301:
      return F(i, /(.+)-inline(.+)/, L + "$1$2") + i;
    case -12372 + -20488 * -1:
    case -15117 + -616 * -36:
    case 12003 + -1250 * 5:
    case -2962 + 1 * -2939 + 11436:
    case 348 * 17 + -505 * 13 + -1 * -6094:
    case 5701:
    case 9621 + -1 * 977 + -3711:
    case 9125 + -2 * 2224:
    case 1 * 5665 + 1 * -7459 + 7327:
    case 1370 + 3 * 1473:
    case 2923 * 1 + -1 * 6031 + -11 * -739:
    case 392 * -3 + -1 * 2086 + -23 * -349:
      if (ae(i) - (1629 + -4 * -1094 + -6004) - n > 6) switch (QA(i, n + (578 + -491 * 1 + -86))) {
        case -2240 + -4907 * -1 + -2558:
          if (QA(i, n + (1 * -5087 + -487 * 19 + 14344)) !== 45) break;
        case 102:
          return F(i, /(.+:)(.+)-([^]+)/, "$1" + L + "$2-$3$1" + Tt + (QA(i, n + (1791 * -3 + 1 * 5308 + 68)) == -1 * 1500 + -465 + 2073 * 1 ? "$3" : "$2-$3")) + i;
        case 115:
          return ~ho(i, "stretch", 0) ? us(F(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case 6 * 1370 + -7 * 613 + 1223:
    case 5920:
      return F(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, g, a, I) {
        return U + A + ":" + o + I + (r ? U + A + "-span:" + (g ? a : +a - +o) + I : "") + i;
      });
    case 636 * 11 + -8532 + 6485:
      if (QA(i, n + (1 * -3881 + -7785 + 11672)) === 15261 + -10 * 1514) return F(i, ":", ":" + L) + i;
      break;
    case 12461 * 1 + -9472 + 3455:
      switch (QA(i, QA(i, 14) === 1 * -8602 + -1 * -6854 + 1793 ? -3686 + 3 * -2209 + 10331 * 1 : 11)) {
        case -6340 + -1 * -3274 + 354 * 9:
          return F(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + L + (QA(i, 9794 * -1 + 7219 + 2589) === -7470 + 6427 * -1 + 2 * 6971 ? "inline-" : "") + "box$3$1" + L + "$2$3$1" + U + "$2box$3") + i;
        case 100:
          return F(i, ":", ":" + U) + i;
      }
      break;
    case 5719:
    case -7357 + 13 * 359 + 5337:
    case -2624 + -1 * -4759:
    case 3927:
    case 2391:
      return F(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function Xo(i, n) {
  for (var t = "", e = 0; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function hC(i, n, t, e) {
  switch (i.type) {
    case aC:
      if (i.children.length) break;
    case rC:
    case br:
      return i.return = i.return || i.value;
    case Bs:
      return "";
    case Qs:
      return i.return = i.value + "{" + Xo(i.children, e) + "}";
    case Sn:
      if (!ae(i.value = i.props.join(","))) return "";
  }
  return ae(t = Xo(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function fC(i) {
  var n = ds(i);
  return function(t, e, A, o) {
    for (var r = "", g = -349 * -19 + -7869 + 1238; g < n; g++) r += i[g](t, e, A, o) || "";
    return r;
  };
}
function pC(i) {
  return function(n) {
    n.root || (n = n.return) && i(n);
  };
}
function mC(i, n, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case br:
        i.return = us(i.value, i.length, t);
        return;
      case Qs:
        return Xo([be(i, { value: F(i.value, "@", "@" + L) })], e);
      case Sn:
        if (i.length) return sC(t = i.props, function(A) {
          switch (le(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              et(be(i, { props: [F(A, /:(read-\w+)/, ":" + Tt + "$1")] }));
              var o = {};
              o.props = [A], et(be(i, o)), Mi(i, { props: ua(t, e) });
              break;
            case "::placeholder":
              et(be(i, { props: [F(A, /:(plac\w+)/, ":" + L + "input-$1")] })), et(be(i, { props: [F(A, /:(plac\w+)/, ":" + Tt + "$1")] })), et(be(i, { props: [F(A, /:(plac\w+)/, U + "input-$1")] }));
              var r = {};
              r.props = [A], et(be(i, r)), Mi(i, { props: ua(t, e) });
              break;
          }
          return "";
        });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var yC = N, W = {}, Ze = typeof process < "u" && W !== void 0 && (W.REACT_APP_SC_ATTR || W.SC_ATTR) || "data-styled", hs = "active", fs = "data-styled-version", Fn = "6.1.19", Sr = `/*!sc*/
`, $o = typeof window < "u" && typeof document < "u", wC = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && W !== void 0 && W.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && W.REACT_APP_SC_DISABLE_SPEEDY !== "" ? W.REACT_APP_SC_DISABLE_SPEEDY !== "false" && W.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && W !== void 0 && W.SC_DISABLE_SPEEDY !== void 0 && W.SC_DISABLE_SPEEDY !== "" ? W.SC_DISABLE_SPEEDY !== "false" && W.SC_DISABLE_SPEEDY : W.NODE_ENV !== "production"), pa = /invalid hook call/i, oo = /* @__PURE__ */ new Set(), DC = function(i, n) {
  if (W.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var g = [], a = 1; a < arguments.length; a++) g[a - (-4604 + -394 * 8 + 7757)] = arguments[a];
        pa.test(r) ? (o = !1, oo.delete(e)) : A.apply(void 0, dt([r], g, !1));
      }, WA(), o && !oo.has(e) && (console.warn(e), oo.add(e));
    } catch (r) {
      pa.test(r.message) && oo.delete(e);
    } finally {
      console.error = A;
    }
  }
}, vn = Object.freeze([]), ht = Object.freeze({});
function bC(i, n, t) {
  return t === void 0 && (t = ht), i.theme !== t.theme && i.theme || n || t.theme;
}
var Oi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), kC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, SC = /(^-|-$)/g;
function ma(i) {
  return i.replace(kC, "-").replace(SC, "");
}
var GC = /(a)(d)/gi, no = -1821 + -1 * -1873, ya = function(i) {
  return String.fromCharCode(i + (i > 8957 * -1 + 1 * -4637 + 13619 ? 39 : 97));
};
function Ji(i) {
  var n, t = "";
  for (n = Math.abs(i); n > no; n = n / no | -1 * 5099 + -1 * -9976 + -1 * 4877) t = ya(n % no) + t;
  return (ya(n % no) + t).replace(GC, "$1-$2");
}
var Vn, ps = -1 * 7360 + -4387 + 17128, He = function(i, n) {
  for (var t = n.length; t; ) i = (-5887 + -4 * 1019 + 9996) * i ^ n.charCodeAt(--t);
  return i;
}, ms = function(i) {
  return He(ps, i);
};
function NC(i) {
  return Ji(ms(i) >>> 0);
}
function ys(i) {
  return W.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Zn(i) {
  return typeof i == "string" && (W.NODE_ENV === "production" || i.charAt(-9743 + 2269 * 2 + -1 * -5205) === i.charAt(2920 * 1 + 2401 + -5321 * 1).toLowerCase());
}
var _A = {};
_A.childContextTypes = !0, _A.contextType = !0, _A.contextTypes = !0, _A.defaultProps = !0, _A.displayName = !0, _A.getDefaultProps = !0, _A.getDerivedStateFromError = !0, _A.getDerivedStateFromProps = !0, _A.mixins = !0, _A.propTypes = !0, _A.type = !0;
var ke = {};
ke.name = !0, ke.length = !0, ke.prototype = !0, ke.caller = !0, ke.callee = !0, ke.arguments = !0, ke.arity = !0;
var Ye = {};
Ye.$$typeof = !0, Ye.compare = !0, Ye.defaultProps = !0, Ye.displayName = !0, Ye.propTypes = !0, Ye.type = !0;
var at = {};
at.$$typeof = !0, at.render = !0, at.defaultProps = !0, at.displayName = !0, at.propTypes = !0;
var ws = typeof Symbol == "function" && Symbol.for, Ds = ws ? /* @__PURE__ */ Symbol.for("react.memo") : -1 * -80969 + -4 * 13134 + 31682, RC = ws ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 22093 + -13052 * -3 + -1137, FC = _A, vC = ke, bs = Ye, MC = ((Vn = {})[RC] = at, Vn[Ds] = bs, Vn);
function wa(i) {
  return ("type" in (n = i) && n.type.$$typeof) === Ds ? bs : "$$typeof" in i ? MC[i.$$typeof] : FC;
  var n;
}
var WC = Object.defineProperty, LC = Object.getOwnPropertyNames, Da = Object.getOwnPropertySymbols, OC = Object.getOwnPropertyDescriptor, JC = Object.getPrototypeOf, ba = Object.prototype;
function ks(i, n, t) {
  if (typeof n != "string") {
    if (ba) {
      var e = JC(n);
      e && e !== ba && ks(i, e, t);
    }
    var A = LC(n);
    Da && (A = A.concat(Da(n)));
    for (var o = wa(i), r = wa(n), g = -7083 + -4 * 1468 + 5 * 2591; g < A.length; ++g) {
      var a = A[g];
      if (!(a in vC || t && t[a] || r && a in r || o && a in o)) {
        var I = OC(n, a);
        try {
          WC(i, a, I);
        } catch {
        }
      }
    }
  }
  return i;
}
function ft(i) {
  return typeof i == "function";
}
function Gr(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function Ke(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function ka(i, n) {
  if (i.length === 0) return "";
  for (var t = i[-535 * -15 + 6040 + -14065], e = 5357 * -1 + -3685 + -1 * -9043; e < i.length; e++) t += i[e];
  return t;
}
function pt(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function Ui(i, n, t) {
  if (t === void 0 && (t = !1), !t && !pt(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = 9519 + 7 * 529 + 601 * -22; e < n.length; e++) i[e] = Ui(i[e], n[e]);
  else if (pt(n))
    for (var e in n) i[e] = Ui(i[e], n[e]);
  return i;
}
function Nr(i, n) {
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
var UC = W.NODE_ENV !== "production" ? eA : {};
function YC() {
  for (var i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[-1892 + -1 * -4886 + 499 * -6], e = [], A = 30 * 262 + 2105 * -1 + -822 * 7, o = i.length; A < o; A += 727 * 7 + 6708 + -11796) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function Dt(i) {
  for (var n = [], t = -5 * -522 + 13 * 269 + -6106; t < arguments.length; t++) n[t - (5507 + 763 * 2 + -3 * 2344)] = arguments[t];
  return W.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > 2726 * 1 + 2271 + -4997 ? " Args: ".concat(n.join(", ")) : "")) : new Error(YC.apply(void 0, dt([UC[i]], n, !1)).trim());
}
var TC = (function() {
  function i(n) {
    this.groupSizes = new Uint32Array(-4259 * -2 + 1 * 7499 + -7 * 2215), this.length = 9256 + 4 * -2186, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = 0, e = -1 * -1009 + 3372 + 1 * -4381; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= 3 * -2839 + 2 * 1716 + 2543 * 2) < -2551 * 2 + 1 * 8275 + -1 * 3173) throw Dt(-2818 * -3 + 3559 + -11997, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = -2 * 4496 + -1 * 8539 + 373 * 47;
    }
    for (var g = this.indexOfGroup(n + (-739 * 1 + 4945 + 1 * -4205)), a = (r = -1 * 5529 + -8e3 + 13529, t.length); r < a; r++) this.tag.insertRule(g, t[r]) && (this.groupSizes[n]++, g++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = 1 * -8802 + 8589 + 213;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || this.groupSizes[n] === 0) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(Sr);
    return t;
  }, i;
})(), PC = -1249 * 5 + -540 * 5 + 8946 << -15 * -289 + -9557 + 404 * 13, mo = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Map(), yo = 1, io = function(i) {
  if (mo.has(i)) return mo.get(i);
  for (; An.has(yo); ) yo++;
  var n = yo++;
  if (W.NODE_ENV !== "production" && ((1290 + -11 * 733 + -13 * -521 | n) < -7095 + 4663 * 1 + 608 * 4 || n > PC)) throw Dt(-2844 + 1 * -4701 + 7561, "".concat(n));
  return mo.set(i, n), An.set(n, i), n;
}, HC = function(i, n) {
  yo = n + (-2538 + -1 * -2539), mo.set(i, n), An.set(n, i);
}, _C = "style[".concat(Ze, "][").concat(fs, '="').concat(Fn, '"]'), KC = new RegExp("^".concat(Ze, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), jC = function(i, n, t) {
  for (var e, A = t.split(","), o = -1 * 7823 + -1889 * 3 + 6745 * 2, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, qC = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(Sr), A = [], o = 0, r = e.length; o < r; o++) {
    var g = e[o].trim();
    if (g) {
      var a = g.match(KC);
      if (a) {
        var I = 0 | parseInt(a[1], 10), c = a[-615 * 3 + -3661 * 2 + 9169];
        -2 * 2423 + -7360 + -17 * -718 !== I && (HC(c, I), jC(i, c, a[-7096 + -7 * -1272 + -1805]), i.getTag().insertRules(I, A)), A.length = 3501 + -389 * 9;
      } else A.push(g);
    }
  }
}, Sa = function(i) {
  for (var n = document.querySelectorAll(_C), t = 1 * -8429 + 2766 + 5663, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(Ze) !== hs && (qC(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function VC() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ss = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = (function(g) {
    var a = Array.from(g.querySelectorAll("style[".concat(Ze, "]")));
    return a[a.length - (-723 * 5 + -2212 + 5828)];
  })(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(Ze, hs), e.setAttribute(fs, Fn);
  var r = VC();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, ZC = (function() {
  function i(n) {
    this.element = Ss(n), this.element.appendChild(document.createTextNode("")), this.sheet = (function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = -3937 + 7985 * -1 + 11922, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw Dt(631 * -1 + 7659 + -7011);
    })(this.element), this.length = 13308 + 1 * -13308;
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
})(), zC = (function() {
  function i(n) {
    this.element = Ss(n), this.nodes = this.element.childNodes, this.length = 0;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= -8516 + -265 * 15 + 12491) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, i;
})(), XC = (function() {
  function i(n) {
    this.rules = [], this.length = 0;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, 1 * 1629 + 3616 + -5245 * 1, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, -1322 * 1 + -1 * -3726 + -2403), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
})(), Ga = $o, $C = { isServer: !$o, useCSSOMInjection: !wC }, Gs = (function() {
  function i(n, t, e) {
    n === void 0 && (n = ht), t === void 0 && (t = {});
    var A = this;
    this.options = MA(MA({}, $C), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && $o && Ga && (Ga = !1, Sa(this)), Nr(this, function() {
      return (function(o) {
        for (var r = o.getTag(), g = r.length, a = "", I = function(s) {
          var Q = (function(h) {
            return An.get(h);
          })(s);
          if (Q === void 0) return "continue";
          var E = o.names.get(Q), x = r.getGroup(s);
          if (E === void 0 || !E.size || 4619 * -1 + 120 + 11 * 409 === x.length) return "continue";
          var B = "".concat(Ze, ".g").concat(s, '[id="').concat(Q, '"]'), l = "";
          E !== void 0 && E.forEach(function(h) {
            h.length > 0 && (l += "".concat(h, ","));
          }), a += "".concat(x).concat(B, '{content:"').concat(l, '"}').concat(Sr);
        }, c = -1 * 8444 + -1558 + 10002 * 1; c < g; c++) I(c);
        return a;
      })(A);
    });
  }
  return i.registerId = function(n) {
    return io(n);
  }, i.prototype.rehydrate = function() {
    !this.server && $o && Sa(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i(MA(MA({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 1650 * -5 + 448 + 7802) + (-1812 * 4 + 9 * 266 + 5 * 971);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = (function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new XC(A) : e ? new ZC(A) : new zC(A);
    })(this.options), new TC(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (io(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(io(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(io(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
})(), AB = /&/g, eB = /^\s*\/\/.*$/gm;
function Ns(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Ns(t.children, n)), t;
  });
}
function Rs(i) {
  var n, t, e, A = i === void 0 ? ht : i, o = A.options, r = o === void 0 ? ht : o, g = A.plugins, a = g === void 0 ? vn : g, I = function(Q, E, x) {
    return x.startsWith(t) && x.endsWith(t) && x.replaceAll(t, "").length > -9 * 505 + 7121 * -1 + -307 * -38 ? ".".concat(n) : Q;
  }, c = a.slice();
  c.push(function(Q) {
    Q.type === Sn && Q.value.includes("&") && (Q.props[7505 + 7 * -503 + -3984] = Q.props[12617 + -1147 * 11].replace(AB, t).replace(e, I));
  }), r.prefix && c.push(mC), c.push(hC);
  var s = function(Q, E, x, B) {
    E === void 0 && (E = ""), x === void 0 && (x = ""), B === void 0 && (B = "&"), n = B, t = E, e = new RegExp("\\".concat(t, "\\b"), "g");
    var l = Q.replace(eB, ""), h = lC(x || E ? "".concat(x, " ").concat(E, " { ").concat(l, " }") : l);
    r.namespace && (h = Ns(h, r.namespace));
    var f = [];
    return Xo(h, fC(c.concat(pC(function(p) {
      return f.push(p);
    })))), f;
  };
  return s.hash = a.length ? a.reduce(function(Q, E) {
    return E.name || Dt(-6869 + 1 * 9941 + 3 * -1019), He(Q, E.name);
  }, ps).toString() : "", s;
}
var tB = new Gs(), Yi = Rs(), Rr = Ve.createContext({ shouldForwardProp: void 0, styleSheet: tB, stylis: Yi });
Rr.Consumer;
var oB = Ve.createContext(void 0);
function Ti() {
  return te(Rr);
}
function nB(i) {
  var n = EA(i.stylisPlugins), t = n[-2617 + -2617 * -1], e = n[1], A = Ti().styleSheet, o = fA(function() {
    var c = A, s = {};
    return s.useCSSOMInjection = !1, i.sheet ? c = i.sheet : i.target && (c = c.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (c = c.reconstructWithOptions(s)), c;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = fA(function() {
    var c = {};
    c.namespace = i.namespace, c.prefix = i.enableVendorPrefixes;
    var s = {};
    return s.options = c, s.plugins = t, Rs(s);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  j(function() {
    iC(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var g = fA(function() {
    var c = {};
    return c.shouldForwardProp = i.shouldForwardProp, c.styleSheet = o, c.stylis = r, c;
  }, [i.shouldForwardProp, o, r]), a = {};
  a.value = g;
  var I = {};
  return I.value = r, Ve.createElement(Rr.Provider, a, Ve.createElement(oB.Provider, I, i.children));
}
var Na = (function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = Yi);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, Nr(this, function() {
      throw Dt(513 * -1 + 9343 + 4409 * -2, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = Yi), this.name + n.hash;
  }, i;
})(), iB = function(i) {
  return i >= "A" && i <= "Z";
};
function Ra(i) {
  for (var n = "", t = 0; t < i.length; t++) {
    var e = i[t];
    if (8425 + 1 * 7036 + -15460 === t && e === "-" && i[0] === "-") return i;
    iB(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var Fs = function(i) {
  return i == null || i === !1 || i === "";
}, vs = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !Fs(o) && (Array.isArray(o) && o.isCss || ft(o) ? e.push("".concat(Ra(A), ":"), o, ";") : pt(o) ? e.push.apply(e, dt(dt(["".concat(A, " {")], vs(o), !1), ["}"], !1)) : e.push("".concat(Ra(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 2147 + -1 * 2147 === t || n in yC || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function qe(i, n, t, e) {
  if (Fs(i)) return [];
  if (Gr(i)) return [".".concat(i.styledComponentId)];
  if (ft(i)) {
    if (!ft(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return W.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof Na || pt(A) || A === null || console.error("".concat(ys(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), qe(A, n, t, e);
  }
  var o;
  return i instanceof Na ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : pt(i) ? vs(i) : Array.isArray(i) ? Array.prototype.concat.apply(vn, i.map(function(r) {
    return qe(r, n, t, e);
  })) : [i.toString()];
}
function rB(i) {
  for (var n = 0; n < i.length; n += -3319 * 1 + 7661 + -4341) {
    var t = i[n];
    if (ft(t) && !Gr(t)) return !1;
  }
  return !0;
}
var aB = ms(Fn), gB = (function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = W.NODE_ENV === "production" && (e === void 0 || e.isStatic) && rB(n), this.componentId = t, this.baseHash = He(aB, t), this.baseStyle = e, Gs.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = Ke(A, this.staticRulesId);
      else {
        var o = ka(qe(this.rules, n, t, e)), r = Ji(He(this.baseHash, o) >>> 0);
        if (!t.hasNameForId(this.componentId, r)) {
          var g = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, g);
        }
        A = Ke(A, r), this.staticRulesId = r;
      }
    else {
      for (var a = He(this.baseHash, e.hash), I = "", c = -1 * -7829 + 8591 + 1642 * -10; c < this.rules.length; c++) {
        var s = this.rules[c];
        if (typeof s == "string") I += s, W.NODE_ENV !== "production" && (a = He(a, s));
        else if (s) {
          var Q = ka(qe(s, n, t, e));
          a = He(a, Q + c), I += Q;
        }
      }
      if (I) {
        var E = Ji(a >>> 0);
        t.hasNameForId(this.componentId, E) || t.insertRules(this.componentId, E, e(I, ".".concat(E), void 0, this.componentId)), A = Ke(A, E);
      }
    }
    return A;
  }, i;
})(), Ms = Ve.createContext(void 0);
Ms.Consumer;
var zn = {}, Fa = /* @__PURE__ */ new Set();
function sB(i, n, t) {
  var e = Gr(i), A = i, o = !Zn(i), r = n.attrs, g = r === void 0 ? vn : r, a = n.componentId, I = a === void 0 ? (function(w, D) {
    var b = typeof w != "string" ? "sc" : ma(w);
    zn[b] = (zn[b] || -4 * -1293 + 484 + -5656) + (-8406 + 1 * 8407);
    var J = "".concat(b, "-").concat(NC(Fn + b + zn[b]));
    return D ? "".concat(D, "-").concat(J) : J;
  })(n.displayName, n.parentComponentId) : a, c = n.displayName, s = c === void 0 ? (function(w) {
    return Zn(w) ? "styled.".concat(w) : "Styled(".concat(ys(w), ")");
  })(i) : c, Q = n.displayName && n.componentId ? "".concat(ma(n.displayName), "-").concat(n.componentId) : n.componentId || I, E = e && A.attrs ? A.attrs.concat(g).filter(Boolean) : g, x = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var B = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var l = n.shouldForwardProp;
      x = function(w, D) {
        return B(w, D) && l(w, D);
      };
    } else x = B;
  }
  var h = new gB(t, Q, e ? A.componentStyle : void 0);
  function f(w, D) {
    return (function(b, J, H) {
      var oe = b.attrs, UA = b.componentStyle, pe = b.defaultProps, rI = b.foldedComponentIds, Jr = b.styledComponentId, aI = b.target, gI = Ve.useContext(Ms), sI = Ti(), Wn = b.shouldForwardProp || sI.shouldForwardProp;
      W.NODE_ENV !== "production" && Jo(Jr);
      var Ur = bC(J, gI, pe) || ht, Be = (function(zt, St, Xt) {
        var At = {};
        At.className = void 0, At.theme = Xt;
        for (var Jn, ve = MA(MA({}, St), At), Un = 0; Un < zt.length; Un += -720 + 1613 * 1 + -892) {
          var $t = ft(Jn = zt[Un]) ? Jn(ve) : Jn;
          for (var me in $t) ve[me] = me === "className" ? Ke(ve[me], $t[me]) : me === "style" ? MA(MA({}, ve[me]), $t[me]) : $t[me];
        }
        return St.className && (ve.className = Ke(ve.className, St.className)), ve;
      })(oe, J, Ur), bt = Be.as || aI, kt = {};
      for (var YA in Be) Be[YA] === void 0 || YA[8616 + 3254 * -2 + -527 * 4] === "$" || YA === "as" || YA === "theme" && Be.theme === Ur || (YA === "forwardedAs" ? kt.as = Be.forwardedAs : Wn && !Wn(YA, bt) || (kt[YA] = Be[YA], Wn || W.NODE_ENV !== "development" || eC(YA) || Fa.has(YA) || !Oi.has(bt) || (Fa.add(YA), console.warn('styled-components: it looks like an unknown prop "'.concat(YA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ln = (function(zt, St) {
        var Xt = Ti(), At = zt.generateAndInjectStyles(St, Xt.styleSheet, Xt.stylis);
        return W.NODE_ENV !== "production" && Jo(At), At;
      })(UA, Be);
      W.NODE_ENV !== "production" && b.warnTooManyClasses && b.warnTooManyClasses(Ln);
      var On = Ke(rI, Jr);
      return Ln && (On += " " + Ln), Be.className && (On += " " + Be.className), kt[Zn(bt) && !Oi.has(bt) ? "class" : "className"] = On, H && (kt.ref = H), SA(bt, kt);
    })(p, w, D);
  }
  f.displayName = s;
  var p = Ve.forwardRef(f), k = {};
  return k.attrs = !0, k.componentStyle = !0, k.displayName = !0, k.foldedComponentIds = !0, k.shouldForwardProp = !0, k.styledComponentId = !0, k.target = !0, p.attrs = E, p.componentStyle = h, p.displayName = s, p.shouldForwardProp = x, p.foldedComponentIds = e ? Ke(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = Q, p.target = e ? A.target : i, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(w) {
    this._foldedDefaultProps = e ? (function(D) {
      for (var b = [], J = 4688 * -1 + -23 * 373 + 13268; J < arguments.length; J++) b[J - (4 * 2078 + -7054 + -1257)] = arguments[J];
      for (var H = 0, oe = b; H < oe.length; H++) Ui(D, oe[H], !0);
      return D;
    })({}, A.defaultProps, w) : w;
  } }), W.NODE_ENV !== "production" && (DC(s, Q), p.warnTooManyClasses = /* @__PURE__ */ (function(w, D) {
    var b = {}, J = !1;
    return function(H) {
      if (!J && (b[H] = !0, Object.keys(b).length >= -2 * -1688 + 4695 + 1 * -7871)) {
        var oe = D ? ' with the id of "'.concat(D, '"') : "";
        console.warn("Over ".concat(3722 + 2 * 2681 + -8884, " classes were generated for component ").concat(w).concat(oe, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), J = !0, b = {};
      }
    };
  })(s, Q)), Nr(p, function() {
    return ".".concat(p.styledComponentId);
  }), o && ks(p, i, k), p;
}
function va(i, n) {
  for (var t = [i[1592 + -4 * 398]], e = -12388 + -6194 * -2, A = n.length; e < A; e += 1) t.push(n[e], i[e + (6373 * -1 + 7337 + -321 * 3)]);
  return t;
}
var Ma = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function IB(i) {
  for (var n = [], t = 16315 + 2719 * -6; t < arguments.length; t++) n[t - 1] = arguments[t];
  if (ft(i) || pt(i)) return Ma(qe(va(vn, dt([i], n, !0))));
  var e = i;
  return n.length === 0 && -8215 + 16 * 339 + 2792 === e.length && typeof e[0] == "string" ? qe(e) : Ma(qe(va(e, n)));
}
function Pi(i, n, t) {
  if (t === void 0 && (t = ht), !n) throw Dt(-3 * -1211 + 8786 + -12418, n);
  var e = function(A) {
    for (var o = [], r = -1800 + -578 * -2 + -1 * -645; r < arguments.length; r++) o[r - (2174 * -2 + 4088 + 261)] = arguments[r];
    return i(n, t, IB.apply(void 0, dt([A], o, !1)));
  };
  return e.attrs = function(A) {
    return Pi(i, n, MA(MA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Pi(i, n, MA(MA({}, t), A));
  }, e;
}
var Ws = function(i) {
  return Pi(sB, i);
}, Zt = Ws;
Oi.forEach(function(i) {
  Zt[i] = Ws(i);
});
W.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ro = "__sc-".concat(Ze, "__");
W.NODE_ENV !== "production" && W.NODE_ENV !== "test" && typeof window < "u" && (window[ro] || (window[ro] = -9938 * -1 + 9060 + 826 * -23), window[ro] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ro] += 1);
const en = fe(void 0);
en.displayName = "CameraServiceContext";
function ze() {
  const i = te(en);
  if (i === void 0)
    throw new Error(`${en.displayName} must be used within a CameraServiceProvider`);
  return i;
}
function wo() {
  return !1;
}
function cB() {
  return !0;
}
async function Ls() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Xn() {
  return (await Ls()).filter((n) => n.kind === "videoinput");
}
function Do(i) {
  i.getTracks().forEach((t) => t.stop());
}
function Hi(i) {
  return i.getVideoTracks()[4232 + -796 * -5 + 4 * -2053];
}
function tn() {
  const i = ["WRrOW6SpgwCja8kfDgFdImkn", "eSo9WPJcGY4", "tSohAWy", "W4msW5hdPNpdTf/cPa", "WOCwBgZdJq", "WRlcHSkaWRJdVmkavmkIaCoZt3m", "W4ldH1vQW7i", "vbetW6tcSG", "WOalubtdNSkPWPa", "bCohWQ/cLaG", "a1ddNmoXW6XxoNDAWRpcGhpcLSop", "aKr7", "W6b1xxhcLJhdQCkA", "W45Kv13cIa", "xCkLWP3cNmo4", "aCovlCo5WQy", "WRiUW5RcN8kYaCk5iCoTzCkXWQ0h", "WPDFW6NdOfa", "pSovetZcRG", "WRFdI0LDeW", "B8khsCkqrG", "WOqKzaldVSksWOi", "WQfHxmkqjW", "vmkjW4GwWPqqCbHGWOSqrdm", "hCoWWPFcLHK", "WRmVW5RcN8k1dmk3dmovwmkmWQWL", "WRi4WPJcICkWmmoDWPPeWQjQ", "WPGoW4FcHI9iAmoGWRpdPIm", "WRtdOCoYg3RdUHS", "A8oRmYdcQhPx", "eSozW4/cGrbcWRBcPmoWWQxcOdqN", "WRm9WPVcImkXs8kDW6niWOndWPtdGCka", "FaW4W7NcKW", "WRHJamkDWOK", "WRRcSCk8rcZcHghdPKRcKSocx24", "rh0jWPe7", "ifiAW5xdPqBdHN5iWOeaemku", "imkhWPpcLfi", "hSo1W4hdNSkSW68hW77cTmoIjmkG", "fs9mW6PNW4PKvs52WOnsiq"];
  return tn = function() {
    return i;
  }, tn();
}
(function(i, n) {
  function t(g, a, I, c, s) {
    return lA(I - 472, g);
  }
  function e(g, a, I, c, s) {
    return lA(I - -484, g);
  }
  function A(g, a, I, c, s) {
    return lA(c - -916, s);
  }
  const o = i();
  function r(g, a, I, c, s) {
    return lA(c - 465, a);
  }
  for (; ; )
    try {
      if (parseInt(A(-468, -491, -477, -485, "LM)[")) / 1 * (-parseInt(A(-488, -452, -451, -468, "yNgY")) / 2) + -parseInt(e("mxXh", -38, -18, -29, -24)) / 3 * (parseInt(A(-467, -471, -500, -486, "GobI")) / 4) + -parseInt(A(-454, -453, -465, -473, "uZiw")) / 5 + -parseInt(t("aA2P", 916, 900, 893, 912)) / 6 * (-parseInt(t("XQfJ", 907, 905, 897, 923)) / 7) + parseInt(t("6#(Q", 927, 917, 912, 900)) / 8 + -parseInt(r(890, "8clK", 917, 909, 925)) / 9 + parseInt(A(-478, -485, -474, -480, "LM)[")) / 10 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(tn, -550453 + 12487 * -4 + 1142481);
function lA(i, n) {
  i = i - 427;
  const t = tn();
  let e = t[i];
  if (lA.LhjBFl === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let E = 0, x, B, l = 0; B = I.charAt(l++); ~B && (x = E % 4 ? x * 64 + B : B, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        B = c.indexOf(B);
      for (let E = 0, x = s.length; E < x; E++)
        Q += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const a = function(I, c) {
      let s = [], Q = 0, E, x = "";
      I = A(I);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        Q = (Q + s[B] + c.charCodeAt(B % c.length)) % 256, E = s[B], s[B] = s[Q], s[Q] = E;
      B = 0, Q = 0;
      for (let l = 0; l < I.length; l++)
        B = (B + 1) % 256, Q = (Q + s[B]) % 256, E = s[B], s[B] = s[Q], s[Q] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[B] + s[Q]) % 256]);
      return x;
    };
    lA.dDSUif = a, lA.chYWQD = {}, lA.LhjBFl = !0;
  }
  const o = t[0], r = i + o, g = lA.chYWQD[r];
  return g ? e = g : (lA.qyQMxm === void 0 && (lA.qyQMxm = !0), e = lA.dDSUif(e, n), lA.chYWQD[r] = e), e;
}
function CB(i) {
  function n(g, a, I, c, s) {
    return lA(a - 523, I);
  }
  const t = new ArrayBuffer(i[A(140, 151, 145, 138, "l^^^") + "h"]), e = new Uint8Array(t);
  function A(g, a, I, c, s) {
    return lA(c - -291, s);
  }
  for (let g = -888 * 9 + -29 + -1 * -8021, a = i[A(161, 157, 139, 147, "#380") + "h"]; g < a; g++)
    if (n(993, 977, "l^^^") === r(1367, 1359, "u8U]", 1386, 1372)) {
      const I = new _0x31ae37(_0x1beaa0);
      return _0x59fd12[n(987, 970, "WI@f")](I[A(150, 179, 164, 168, "uZiw") + "e"](function(c, s) {
        function Q(E, x, B, l, h) {
          return r(E - 261, x - 163, l, l - 327, E - -1054);
        }
        return c + _0x5ac5cf[Q(311, 300, 315, "A5a#") + Q(302, 286, 308, "Ryq4") + "de"](s);
      }, ""));
    } else e[g] = i[o(1432, 1421, "l^^^", 1430, 1429) + o(1400, 1409, "dKv1", 1409, 1410)](g);
  function o(g, a, I, c, s) {
    return lA(s - 983, I);
  }
  function r(g, a, I, c, s) {
    return lA(s - 907, I);
  }
  return t;
}
(function(i, n) {
  function t(g, a, I, c, s) {
    return P(c - -407, I);
  }
  const e = i();
  function A(g, a, I, c, s) {
    return P(s - 328, a);
  }
  function o(g, a, I, c, s) {
    return P(g - -948, I);
  }
  function r(g, a, I, c, s) {
    return P(a - 739, g);
  }
  for (; ; )
    try {
      if (-parseInt(r("MPU%", 1037, 1023, 1018, 1038)) / 1 + parseInt(o(-683, -658, "$uI9", -690, -665)) / 2 * (-parseInt(o(-652, -666, "wyxm", -672, -658)) / 3) + -parseInt(r("o1yO", 1016, 1040, 1023, 1005)) / 4 * (parseInt(A(580, "272J", 628, 631, 602)) / 5) + -parseInt(A(612, "p2]8", 604, 638, 607)) / 6 * (-parseInt(o(-642, -650, "pEYf", -652, -622)) / 7) + -parseInt(o(-655, -667, "o1yO", -677, -660)) / 8 + parseInt(t(-88, -122, "$uI9", -100, -120)) / 9 * (parseInt(o(-651, -654, "D(6B", -636, -682)) / 10) + parseInt(t(-141, -151, "ar(j", -153, -163)) / 11 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(on, -1268327 * -1 + -1690129 + 3 * 462793);
function on() {
  const i = ["hmoxxCoRWOG", "W7hcRmkEWQC", "btRdUCovW4S", "na3cP0NcHSkZEW", "A1uNWQC", "zLtcUCogW5u", "as3dTmo3W54", "WRZdUCoUwg0", "lc/cTSogA8kLCG", "ngVdNIJdJmoikvtdPSoEC051", "DMBcOCohW4y", "nCkwW65SWPxcGxuXimoWW4ZdRq", "pHb9WQNcNr3dIsBcKW", "vKC2W57cVa", "W7VdUmkJCr0", "W6/cOCk8atNcNgtdP8k7WQyB", "W7qwW4O", "W5nCWPL0bmkXWQe8cCoqWRKCvG", "W6LvWQa", "q8kbc8kYW6RcOH8rW6hcPmo3amkTtW", "jSkeFqnE", "f8kxl8oBWOmNW67dSXGFWRi", "fbPHr8ks", "WPBdS8obWOxdRmoBW6njW78jxmkncSka", "zYJcJ1BcMG", "yJfbga", "D3lcTa", "A3lcRSow", "sSoezW", "q0K0aCozaqtcTgnKWRzU", "cCkuo27dOq", "W6JcPCk0aZ3dJcFcUSkJWOWkWRnOWQK", "FLiQWR7cOa", "hSo3p0un", "n8oyhSoUnwOrWPNcJSoEWORdIq", "WPxdT8kyW5hcTCkyWRqZ", "ESkeW75Xd8kJWP10iqTgW58", "e8ohxCoK", "W6ZcNfJdOXK", "W6/cRSkSAGJdJ8k6kmolFvVcL8kwrW", "W70yWQpdM8o3", "CmoLWRiG", "ydxcHNe", "y8klrSk/Dq", "tmo1kvSLoSol", "n2/dMc/dHSomiZldRCouuuj0wq", "nbBcQSosW4RdRSovdq", "W6BcQdBdOq", "W6mzW542xG", "WO8kW4aK", "WQe/ESoBkG", "W6n4WOecdq", "W7ucW58WsW", "WQW1W5nocSo8qSkbdCofo1tcLCoD", "imoAgmoyWRGXW5a", "kgldPCouymk4rSoeW68", "W50Kk3W", "ft3dOSorW5m", "vCoiuh7dJa", "DJdcO8oeua", "cmklxSo8WPG"];
  return on = function() {
    return i;
  }, on();
}
function P(i, n) {
  i = i - (-4019 * 1 + 1191 + 3081);
  const t = on();
  let e = t[i];
  if (P.xTUnmm === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let E = 0, x, B, l = 0; B = I.charAt(l++); ~B && (x = E % 4 ? x * 64 + B : B, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        B = c.indexOf(B);
      for (let E = 0, x = s.length; E < x; E++)
        Q += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const a = function(I, c) {
      let s = [], Q = 0, E, x = "";
      I = A(I);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        Q = (Q + s[B] + c.charCodeAt(B % c.length)) % 256, E = s[B], s[B] = s[Q], s[Q] = E;
      B = 0, Q = 0;
      for (let l = 0; l < I.length; l++)
        B = (B + 1) % 256, Q = (Q + s[B]) % 256, E = s[B], s[B] = s[Q], s[Q] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[B] + s[Q]) % 256]);
      return x;
    };
    P.cMBOej = a, P.TNtUtq = {}, P.xTUnmm = !0;
  }
  const o = t[3077 * 1 + -3357 + -1 * -280], r = i + o, g = P.TNtUtq[r];
  return g ? e = g : (P.CJCjSt === void 0 && (P.CJCjSt = !0), e = P.cMBOej(e, n), P.TNtUtq[r] = e), e;
}
async function BB() {
  const i = {};
  i[a(-24, -33, -24, -43, "p2]8")] = As, i[a(-33, -30, -20, -49, "ufP8") + "h"] = 256;
  const n = await window[g("5Y5(", -445, -448) + "o"][I(151, 184, 168, "272J", 156) + "e"][g("wyxm", -445, -456) + g("$uI9", -490, -475) + "y"](i, !0, [r(219, 196, 223, ")spZ", 208) + "pt", A(-113, "QsAD", -102) + "pt"]), t = Uint8Array[r(195, 216, 171, "272J", 199)](Array(16)[r(238, 241, 240, "$uI9", 237)](-1415 * 1 + -4004 * -1 + -2589 * 1)), e = window[r(229, 257, 243, "9!im", 245) + "o"][I(154, 157, 118, "3iO@", 130) + I(142, 129, 127, "FRy[", 124) + r(230, 210, 232, "k0V3", 215)](t);
  function A(c, s, Q, E, x) {
    return P(Q - -386, s);
  }
  const o = {};
  o[A(-105, "Vddw", -106)] = n;
  function r(c, s, Q, E, x) {
    return P(x - -67, E);
  }
  function g(c, s, Q, E, x) {
    return P(Q - -761, c);
  }
  function a(c, s, Q, E, x) {
    return P(c - -335, x);
  }
  o.iv = e;
  function I(c, s, Q, E, x) {
    return P(x - -138, E);
  }
  return o;
}
async function QB(i) {
  const { iv: n, key: t } = await BB();
  function e(E, x, B, l, h) {
    return P(E - 853, B);
  }
  const A = new Uint8Array(i), o = {};
  function r(E, x, B, l, h) {
    return P(x - 579, l);
  }
  o[g(698, 684, 690, 691, "0xNn")] = As;
  function g(E, x, B, l, h) {
    return P(E - 411, h);
  }
  function a(E, x, B, l, h) {
    return P(x - 962, l);
  }
  o.iv = n;
  const I = await window[Q("0$Kk", -450, -469) + "o"][r(875, 879, 872, "nUYp") + "e"][r(823, 854, 885, ")spZ") + "pt"](o, t, A), c = await window[g(678, 679, 701, 700, "omAA") + "o"][r(830, 832, 828, "ptf]") + "e"][a(1273, 1257, 1235, "pEYf") + e(1156, 1131, "I9Ja")](g(699, 705, 711, 724, "xcAr"), t), s = {};
  s[Q("NLko", -482, -485) + "ge"] = I;
  function Q(E, x, B, l, h) {
    return P(B - -745, E);
  }
  return s[g(701, 699, 709, 673, "Qpyu")] = c, s.iv = n, s;
}
async function EB(i) {
}
(function(i, n) {
  function t(g, a, I, c, s) {
    return sA(g - 865, s);
  }
  const e = i();
  function A(g, a, I, c, s) {
    return sA(I - -369, g);
  }
  function o(g, a, I, c, s) {
    return sA(c - 147, a);
  }
  function r(g, a, I, c, s) {
    return sA(I - 75, a);
  }
  for (; ; )
    try {
      if (parseInt(A("G$B2", 209, 212, 179, 252)) / 1 * (-parseInt(o(648, "8y8q", 643, 690, 658)) / 2) + -parseInt(A("041b", 194, 189, 204, 147)) / 3 + parseInt(r(646, "N18w", 654, 664, 653)) / 4 + -parseInt(r(671, "041b", 662, 704, 700)) / 5 + parseInt(o(686, "G$B2", 690, 659, 690)) / 6 * (parseInt(t(1440, 1465, 1403, 1446, "$ym8")) / 7) + -parseInt(A("WhGW", 202, 176, 140, 161)) / 8 + parseInt(A("5EvC", 199, 179, 189, 145)) / 9 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(rn, -835437 + -1939 * 457 + 2352221);
const xB = 8454 * 1 + 9825 + -15279, dB = 1 * 10382 + -154 + 4 * -807, Os = 3563 + -3661 * 1 + 101, Js = 18 * 317 + -1 * 6185 + 479 * 1 + 0.5, Us = {};
Us[KA(-298, "LGds", -366, -327)] = 1280;
const Ys = {};
Ys[KA(-343, "GBZv", -330, -311)] = 720;
const Ts = {};
Ts[hA(1153, 1184, "8y8q")] = 60;
const bo = {};
function hA(i, n, t, e, A) {
  return sA(i - 638, t);
}
bo[X("WhGW", 1151, 1193, 1182)] = Us, bo[X("jwZo", 1184, 1168, 1176) + "t"] = Ys, bo[ee(524, "WhGW", 549) + X("Toi8", 1223, 1219, 1247)] = Ts;
const Ps = {};
Ps[KA(-436, "5e$k", -358, -396)] = 1920;
const Hs = {};
Hs[hA(1200, 1212, "qMn#")] = 1080;
function ee(i, n, t, e, A) {
  return sA(t - 15, n);
}
const nn = {};
nn[X("*(Ah", 1171, 1203, 1183)] = Ps;
function X(i, n, t, e, A) {
  return sA(e - 673, i);
}
function sA(i, n) {
  i = i - (-427 * -11 + 2650 + -2283 * 3);
  const t = rn();
  let e = t[i];
  if (sA.tPaoQk === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let E = 0, x, B, l = 0; B = I.charAt(l++); ~B && (x = E % 4 ? x * 64 + B : B, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        B = c.indexOf(B);
      for (let E = 0, x = s.length; E < x; E++)
        Q += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const a = function(I, c) {
      let s = [], Q = 0, E, x = "";
      I = A(I);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        Q = (Q + s[B] + c.charCodeAt(B % c.length)) % 256, E = s[B], s[B] = s[Q], s[Q] = E;
      B = 0, Q = 0;
      for (let l = 0; l < I.length; l++)
        B = (B + 1) % 256, Q = (Q + s[B]) % 256, E = s[B], s[B] = s[Q], s[Q] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[B] + s[Q]) % 256]);
      return x;
    };
    sA.MdpECf = a, sA.oLExwd = {}, sA.tPaoQk = !0;
  }
  const o = t[-613 + 1 * 613], r = i + o, g = sA.oLExwd[r];
  return g ? e = g : (sA.VIjCAA === void 0 && (sA.VIjCAA = !0), e = sA.MdpECf(e, n), sA.oLExwd[r] = e), e;
}
nn[ee(544, "E6Et", 534) + "t"] = Hs, nn[uA("bguN", -45, -59, -10, -35) + X("Ar(O", 1226, 1203, 1179)] = 30;
const _s = {};
function KA(i, n, t, e, A) {
  return sA(e - -896, n);
}
_s[uA("Zz^q", 7, 7, 28, 31)] = 1;
const Ks = {};
Ks[uA("ke2D", 64, 89, 55, 49)] = 1;
const js = {};
js[hA(1167, 1141, "Ar(O")] = 1;
const ko = {};
ko[X("$ym8", 1193, 1168, 1197)] = _s, ko[uA("tn5^", 42, 48, 42, 51) + "t"] = Ks, ko[hA(1197, 1180, "Toi8") + hA(1187, 1205, "HVr0")] = js;
const qs = {};
qs[X("Trui", 1181, 1158, 1193)] = 1;
const Vs = {};
Vs[KA(-381, "kJdL", -349, -378)] = 1;
function rn() {
  const i = ["wCkqdq", "kCoJigvn", "W45PWQDqlG", "W44wwMGj", "kSoLo2Lf", "gCojtCkQWQhcJwDezmoE", "eMDQWOTW", "kLHisCkY", "qaxcJCoKxHbyjCkwdwTVkW", "lIe4uZK", "gmoizmoaWOq", "fvZdKK4F", "WPNdPd8VFG", "nqhcN8kFWOG", "fmopWOi3", "r0/cOW", "FSo+W484", "WPfIWRtdQCot", "W6bvovLN", "ASkMW5pcN8oW", "WPlcV8kuBCoi", "FSk1pXKh", "W6xcHSkulCkzfhtcO8kRaW3cIG", "ee7dJa", "gJiTwW", "W7hdLbfWgSknW7aEcSkFhSoBWQm", "WPFcSNXP", "W4pdQmopmCkBoCoWbgWjWQFdTG", "fGddUtxdMW", "W5b/WPX6W6bVw3hcOeRdKKi", "lmoqj8k1", "W6zKWRrxWQdcRSoUW7Hs", "W63dNSoRW4G", "WRBcTSkTW5b+", "W4BcTSoeW5VdJwtdP8klW4VcO8oSs8oCpW", "WRlcOmo2WRpdGW", "W7VdISoLW5WN", "rGVcJ8oKwbeJfmk0g051", "muLLw8kO", "d8oRyG", "WPDldJRdJW", "B3Tdv8kbW4y0", "wgfsAqm", "oJiTvZm", "W6z3jg5A", "r8kWW5mNW7m", "tvlcTr4w", "Da7dKmkaW6K", "WOxcQNPXvW", "Cmk2eb8m", "WRBcV2D7", "AI8YW7GU", "W6hcHmkvl8kBeJBcJSkVodRcR8oS", "ymo5W58/ia", "dSovACoBWOi", "WP3cUSkDymog", "W6ehW4LyWOlcK8oz", "sWpdU8o9sG", "WOJcSwq", "W4/cSSk6WQZdIa", "h07dJmkMca", "WOFcV8kEzmo5", "xCk1W5aJW5K", "WQ3cSSkIW5jq", "gSkmW7jqWOK", "E3zlWOSFWRHndSoeymkjmfG", "WOFcR8kL", "WQtcTmo4WQC", "WRxcJuCZqW", "WOZdUCke", "WOrNx2G", "jSkKWOKVk8kBW7VdVCkW", "WROHDdObWO98gSo2bmkKDmk0", "WOhcPNj9tq", "W5JcV8k1WOVdIq", "bqRdJG", "WOPFfcC", "W7ddSCoXW4S8", "CCoIW5OMlq", "ktaYFtm", "e2zaWR9V", "CCoXW4G/", "W4ZcQ8k3WQpdNG", "mNnWWQ8", "WPRcRCkmC8ol", "twzYBtm", "c8ojy8oUWOC", "WP7dVmoPW7FdJmojrJ3cJZG", "c8oftSoaWOq", "iSkIWO5+F8oaWQZdT8krawuvWQm", "lSo4lxXe", "DqxdJCku", "W6xcOLdcJqlcTSklW6BcOY4zWPZdQZq", "euCJbq"];
  return rn = function() {
    return i;
  }, rn();
}
const Zs = {};
Zs[X("AUxW", 1164, 1141, 1184)] = 1;
const So = {};
So[X("rvBg", 1241, 1225, 1219)] = qs, So[hA(1209, 1182, "*1WV") + "t"] = Vs, So[hA(1197, 1194, "Toi8") + hA(1177, 1166, "2*H]")] = Zs;
const Ot = {};
Ot[hA(1175, 1179, "WhGW")] = bo, Ot[KA(-270, "E6Et", -354, -313) + ee(584, "%K@J", 546)] = nn, Ot[uA("Ar(O", 69, 55, -6, 39)] = ko, Ot[ee(493, "AUxW", 532) + uA("bguN", 75, -7, -16, 28)] = So;
const an = Ot, gt = {};
gt[X("#PZc", 1187, 1223, 1226) + KA(-399, "2*H]", -338, -360) + uA("*(Ah", 45, 38, 25, 23)] = xB, gt[X("K)22", 1242, 1215, 1234) + ee(602, "%K@J", 593) + X("*GeL", 1246, 1264, 1225) + ee(533, "t]r7", 537)] = an[hA(1164, 1187, "V*Bk")], gt[uA("8y8q", 31, -1, 26, 1) + X("*1MH", 1231, 1235, 1236) + hA(1178, 1172, "AUxW") + KA(-318, "jwZo", -326, -349)] = an[X("kJdL", 1147, 1203, 1174) + KA(-334, "041b", -343, -323)], gt[X("*(Ah", 1204, 1188, 1215) + uA("JGAA", -34, -39, 6, -5)] = Os, gt[uA("8y8q", -8, 36, -53, -7) + hA(1228, 1246, "JGAA") + ee(494, "f#so", 528) + hA(1179, 1217, "%M[Y") + X("Y02*", 1214, 1182, 1223)] = Js;
const Ct = {};
Ct[hA(1145, 1129, "lO0j") + ee(563, "tn5^", 572) + X("Ar(O", 1216, 1174, 1177)] = dB, Ct[KA(-350, "rvBg", -319, -345) + ee(579, "*(Ah", 559) + uA("rvBg", 5, -18, -21, 17) + KA(-264, "qWLl", -288, -307)] = an[X("GBZv", 1161, 1203, 1196)];
function uA(i, n, t, e, A) {
  return sA(A - -537, i);
}
Ct[ee(628, "AUxW", 585) + hA(1173, 1213, "Toi8") + hA(1154, 1148, "041b") + uA("WhGW", 41, 43, 12, 29)] = an[KA(-385, "%M[Y", -435, -398) + uA("Ar(O", -41, 24, -33, -23)], Ct[uA("2*H]", 35, -22, -6, 19) + uA("OfAC", 5, 33, 83, 43)] = Os, Ct[uA("c(u6", -6, -12, -10, 30) + uA("Toi8", -73, -20, -1, -38) + hA(1171, 1193, "ke2D") + KA(-431, "*1WV", -344, -391) + X("PfGv", 1176, 1190, 1198)] = Js;
const _i = {};
_i[X("db#Z", 1216, 1264, 1237)] = gt, _i[ee(615, "ke2D", 597)] = Ct;
const lB = _i;
(function(i, n) {
  function t(g, a, I, c, s) {
    return IA(I - 957, g);
  }
  function e(g, a, I, c, s) {
    return IA(a - -357, c);
  }
  function A(g, a, I, c, s) {
    return IA(I - 437, a);
  }
  function o(g, a, I, c, s) {
    return IA(I - -694, c);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(A(1057, "HIZm", 947, 1078, 978)) / 1 * (-parseInt(A(940, "jOCu", 891, 881, 989)) / 2) + parseInt(A(923, "lqt3", 846, 844, 718)) / 3 * (-parseInt(t("gJlT", 1454, 1412, 1518, 1347)) / 4) + -parseInt(t("7u(K", 1471, 1567, 1688, 1525)) / 5 + -parseInt(A(1021, "vrr[", 998, 997, 1124)) / 6 * (-parseInt(e(350, 327, 341, "6f]c", 254)) / 7) + -parseInt(e(110, 211, 316, "djzO", 68)) / 8 * (-parseInt(o(-85, -83, -107, "EIbA", -28)) / 9) + parseInt(t("vrr[", 1353, 1391, 1332, 1417)) / 10 + -parseInt(e(198, 81, 62, "!ZVd", 107)) / 11 * (-parseInt(A(826, "1&9B", 904, 844, 1046)) / 12) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(gn, 270336 + 1 * 111337);
function gn() {
  const i = ["hmo6q8oXoa", "uSoEWO5K", "WO4zxCo4W5W", "W4/dQmobWRjk", "amo+tSozoa", "WQvXWQHlxa", "ed98W7xcQa", "jmotW6pdJq0", "W5RcGCkqfSk9", "zevLWPFcKG", "WR/cS8oQW7ZcPq", "WQ7dHSkHAhu", "WOdcPSo3W6Cl", "W4tcISkDcG", "W5xcK8kvpqi", "W4FcLcGCfG", "y8k8zdxcPW", "W40mfM3cKW", "zCk2zdxcHG", "xqRdOCoZo34BW6K", "WRxcH8ooeCk5", "a8oMvSomlG", "qdrh", "W4L1ovG", "mCoaW4Osrq", "W5VcLSkin8kr", "vWHnW4JcHG", "FSkVFX/cSq", "WRjUWQLCuG", "y8k+yJxcOa", "W77cNmoOoKVdNIHQbCoBWQqtWRu", "WQO6tq", "lSkPWQHNWQW", "WPNdGCo0W4ddQa", "WPFcOCoDW7Sk", "W6D6W5C", "WR/cRmoa", "wGVcOSkttGK3W6KDWQRdIhe", "WONdQ8onWR8b", "WQxdTCoVWQtdVq", "W4yTbNlcKG", "WP7dTNH8WQm", "WQBdJwxcIwC", "wSotWQBcLKn0f8oR", "kCkpWO/dRXVdVSoMtSowWPCdW6O", "W4FcG8kimmkB", "W4P0m1ZcIG", "WRRdMhjNWPK", "WQewWQKUWRi", "WQxdS8oUWQq", "W73cKmkSWOBcHW", "k8oWt1PA", "W7NcNmoJkstcNmkQW6qEzhNdPmkZ", "ibmHW4RdHhasmCotdXHaWPK", "WO4WxSoRW5C", "tSoEWOPVWPK", "sSoWqmo9o8kFW6y", "WR8CWQGtWRq", "W6DbW77dSmoa", "urHrW73cLW", "WQTLWQDCxG", "jmohW6tdSba", "umoEWOfKWOe", "CLbvWPVcIW", "gSkGWRpcGxq", "lSo/oSkPya", "WRZdUbDwra", "sColW4RcVuK", "lCkeWOtcTum", "wdRdSSoXcG", "FKPI", "k8opW4a", "WPhdR8ohWQu", "W7u/W7WnbmkiqCoEp8okWPSvW5e", "kSoJAupcKq", "DmkZFINcSW", "dK7dT8oKhq", "WQtcISkv", "WQBdHCkXELi", "W5ZcR27dIZ7cJSk3sCoIWQaPaG", "iSohW6tdSHC", "WRWuWQulWQ8", "n8o7iCkIDG", "WPRdVZ/cL38", "iCorhSkQxq", "f8oVqCoCpG", "WQBcPSkfcI8", "rHjnW6/cLW", "WO/dHCoRW4FdVW", "D8oAW5ZcSuK", "W77cQ8oGW7RdPa", "WQtcP8k0kZG", "WQxdOCo3WRpdLq", "uSoTWOzYWPG", "W4KwdwtcGW", "W7JdSW5lbW", "sG1xW5JcHG", "kCobCmo/ha", "W4dcLduBdq", "zSk2BY/cVa", "W5pcPmkCorS", "WOJdGmoVWPW+", "WRZdQbnEuW", "AsddSSowgW", "WPxdLZbRBq", "WP7dG8okWRCA", "o8oeW50pva", "t8o3WQSGkW", "jSoIkCkTCq", "x0OxW6BdNa", "m8oiW7K", "W4xcK8kteXq", "xmk6BZlcTq", "WRfUeCkdW7u", "WPNcISokb8kU", "ssddSSowgW", "WQRdMCkQyqa", "kSoWyuFcLW", "m8o1iCkGCq", "W5lcKduXaW", "W53cNSkVWPdcGq", "WQSAWQiuWQG", "WRVdJwjLWOG", "weapW7ZdIW", "WR3dImk3yae", "WQRdGCk7F3G", "W5/cICkNWOFcKG", "B8o9W5G2W6a", "f8oyW5St", "WOy5wCo+W5u", "WRaHqSkPAW", "W4NdU8ojWRvq", "WQ/cLCoafCkU", "WQtcHSkhocy", "WRRdLM5NWOK", "WROuWQujWQG", "W5S1keZcRa", "WQFdL2H9WP8", "W6SqfM3cGW", "W4eqdq", "WOCWBSooW4y", "cCk0WQH1", "WRFcQSkvpcu", "WR7dKh9SWOi", "o8oJBuJcLW", "WQf/WRLlxa", "WRZdG8kQAaS", "WOVdLM5LWOK", "lSkoWOddQH3dUSoOxmoAWPiEW40", "WO/dQ8onWR0g", "WOxdNh9GWOW", "x8oQWQW6lq", "xL0KW7NdMG", "W7RcNmkfA07dGCoPW4q", "tsb9W5tcRvzV", "WQree8krW7m", "W4hcKdmtfG", "WOiYqSoTWPa", "W5tcLLVcI0hdVSkgWOO", "WQJcOmkuecq", "nCojW6pdRra", "W5JdGmom", "WPldSmoszf3dKmko", "c8kIWOtcOfG", "l8kzuLLb", "zCkwWRRcQvCgfCo6Cmk5v1e", "W7RdOSkoWRG+", "WPhcQSo2W7Om", "WQyJqSk3AG", "gwOFWRBdHa", "W51LpfNcJa", "W64ZFKnK", "W5dcHZmDea", "ESo6W40WW74", "WRtdVanAsW", "xSoTWQSanG", "WQXIWQrEvq", "WRhdRI5jqG", "WQ/dJCkJC38", "F8k+zJ4", "Dmkwzt3cUW", "asTbW53cHW", "WOGZrCoQW4q", "WQ/cOSkCpa", "WOTXWQHlxG", "W4BcGsaafG", "WR3dIx9OWPK", "W4hcGsGCbq", "t8oJWQWDnG", "W73cSSkfpY8", "W73cN8oUpuRdMsbPpmocWPKsWPq", "WR/dKh99WOu", "WRtcHmojeq", "WPpdG2FcJ3i", "W7RcQSkYW7xcJu0nkSk/WOBcHwxcTq", "W5VcJCkWWPRcGq", "W5VcMJy", "WOtcRmo8W6Wx", "tbbsW6/cOG", "WPBdR8owWRyq", "W7tdP8oeWRvq", "b8kyWQxcSfi", "W4BcI8kDhCkx", "WR/dUbvSqG", "W5VcLcWx", "F8ohW4ZcQKK", "emozW4ef", "sSowWODKWOi", "wtVdPCojcG", "W4aAcMBcJW", "W7ldTmocBhJcM0FcNwXuWOlcHG", "WOZdJ8kXWQhcTmo/W5rs", "sG1cW7/cIG", "sSoRWOKcfa", "W5VcH8kJWPBcHW", "D8k+Ec8", "WRTpeG", "WRVdQsvAuq", "eSk9WQ5LWRi", "WOBdQIu", "mhKu", "BSo2WRCwiW", "WQ0hWR4iWQ4", "l8k3W7upW7PIuCkv", "pCoRAKhcKa", "qrHvW7xcGa", "WRVdSG9muW", "W5JdRCoTWQ5m", "vf8vW4VdMG", "WOxdUYtcNM4", "nN7dN8ovla", "WR/dU8oTWQBdHW", "W4SnbMdcKW", "WQFdS8oHWQtdMa", "uCoAWPfGWQG", "WRpcI8onamo6", "W4RcNSkRWPNcGa", "WQ7dKmk0EwG", "b8oJwCoslG", "jmoNDKhcHG", "WQegWOmrWRK", "W6VcI8kKWRqb", "WONdP8ofWR8w", "WR3dNSk2wHC", "W5xdSSonqg8", "W7NdN8kUWR0q", "oCoiW77dQHy", "WQhdLNu", "WRpdRwJcJ10", "wSoNWReMmq", "W4WAfwJcHa", "hCo8W5ulBG", "W4fCW4BdUCoa", "WR7dNmkW", "h8krWQLKWRu", "yCk6Et3cUW", "h8krWQm", "WRtcISot", "wSk2WQH2W7O", "WQxdNgLUWOG", "ACkVja", "b8oRxSozlG", "CezIWPhcKq", "c0/dOmogca", "imoytfK", "WQVdStJcIN8", "WRNdNCkHWPSGrci", "vrjqW7xcLW", "WOVdJSkUzXe", "c8k6WOFcIxi", "WQ3dTMT9WOq", "W4BcH8kvhCka", "f8oRj8kRCW", "W5hcKdCBaq", "s8oRWQewlq", "WRndW4S", "ECo1W4lcS2a", "hSo/q8oqoq", "W6TCW50", "WQZcPSkdoa", "c8kzWPJcQuu", "WR3dNaHWBG", "W5lcL8ouW5ZdJW", "WQ7dOCkX", "WP3dPCowWPqu", "E8kieqGhW7rBlSohW51tWOS", "WRpcOSkynZ4"];
  return gn = function() {
    return i;
  }, gn();
}
function AA(i, n, t, e, A) {
  return IA(i - 29, A);
}
function pA(i, n, t, e, A) {
  return IA(t - -394, e);
}
function TA(i, n, t, e, A) {
  return IA(n - -831, A);
}
function _(i, n, t, e, A) {
  return IA(t - -983, e);
}
function JA(i, n, t, e, A) {
  return IA(n - 479, A);
}
function IA(i, n) {
  i = i - (-3700 + -331 * 19 + 10390);
  const t = gn();
  let e = t[i];
  if (IA.wsnWAV === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let E = 0, x, B, l = 0; B = I.charAt(l++); ~B && (x = E % 4 ? x * 64 + B : B, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        B = c.indexOf(B);
      for (let E = 0, x = s.length; E < x; E++)
        Q += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const a = function(I, c) {
      let s = [], Q = 0, E, x = "";
      I = A(I);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        Q = (Q + s[B] + c.charCodeAt(B % c.length)) % 256, E = s[B], s[B] = s[Q], s[Q] = E;
      B = 0, Q = 0;
      for (let l = 0; l < I.length; l++)
        B = (B + 1) % 256, Q = (Q + s[B]) % 256, E = s[B], s[B] = s[Q], s[Q] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[B] + s[Q]) % 256]);
      return x;
    };
    IA.udUhEj = a, IA.qbUbXn = {}, IA.wsnWAV = !0;
  }
  const o = t[-1 * -5044 + -9186 + 4142], r = i + o, g = IA.qbUbXn[r];
  return g ? e = g : (IA.oBxiDP === void 0 && (IA.oBxiDP = !0), e = IA.udUhEj(e, n), IA.qbUbXn[r] = e), e;
}
class uB {
  #A;
  [_(-539, -554, -511, "RFvc") + _(-451, -270, -370, "l3nK")] = [];
  [TA(-150, -213, -69, -326, "bdwL") + AA(648, 604, 739, 584, "if8F") + "s"] = {};
  constructor(n = {}) {
    function t(A, o, r, g, a) {
      return AA(o - -742, o - 163, r - 372, g - 121, A);
    }
    this.#A = lB;
    function e(A, o, r, g, a) {
      return AA(o - 936, o - 498, r - 312, g - 294, r);
    }
    this[t("fY(X", -283, -188, -355) + t("fY(X", -199, -147, -266) + e(1627, 1566, "@@Z&", 1481)](n);
  }
  [pA(153, -40, 55, "al9(") + _(-431, -576, -522, "P98c") + pA(6, -103, 9, "jOCu") + "fo"](n) {
    function t(I, c, s, Q, E) {
      return _(I - 307, c - 331, s - 1249, c);
    }
    const e = Hi(n);
    function A(I, c, s, Q, E) {
      return TA(I - 40, c - 115, s - 196, Q - 38, s);
    }
    const o = e?.[A(-359, -269, "P98c", -268) + A(-285, -285, "eKA7", -429) + "s"]();
    if (!o?.[g(-472, -574, -574, -392, "zHPk") + "t"] || !o?.[A(-44, -86, "jiPC", -184)] || !o?.[r(780, 719, "6f]c", 758) + a(-78, -216, -80, "7^xz")]) {
      if (t(779, "l3nK", 782) === g(-371, -393, -255, -379, "zHPk")) throw new m(a(-124, -114, -158, "hAMR") + r(719, 807, "zHPk", 838) + A(-193, -315, "igCi", -279) + t(767, "Oz&&", 871) + a(-272, -368, -472, "JDPw") + g(-466, -355, -492, -517, "Oz&&"));
      this[g(-464, -590, -556, -491, "P98c") + A(-166, -41, "Oz&&", 46) + "s"] = _0x2c3c26;
    }
    function r(I, c, s, Q, E) {
      return _(I - 382, c - 420, Q - 1319, s);
    }
    function g(I, c, s, Q, E) {
      return AA(I - -963, c - 373, s - 34, Q - 438, E);
    }
    if (e)
      if (a(-251, -168, -30, "l3nK") === a(-132, -258, -275, "P98c")) {
        const I = { ..._0x21f786 }, c = I, s = { ...typeof c[r(1011, 896, "jOCu", 1009)] == t(858, "7^xz", 817) + "t" ? c[g(-260, -194, -263, -154, "fY(X")] : {}, ..._0x564a66 }, Q = s;
        if (_0x36a24c) {
          const E = {};
          E[r(892, 933, "6f]c", 817)] = _0x9616e8, Q[g(-397, -513, -317, -428, "5RfQ") + t(959, "jOCu", 874)] = E;
        }
        return c[t(801, "@H@4", 784)] = Q, c;
      } else {
        const I = {};
        return I[a(-337, -335, -471, "eKA7")] = e[t(794, "P98c", 684)], I.id = o[a(-142, -186, -276, "P98c") + g(-381, -321, -240, -388, "bdwL")], I;
      }
    function a(I, c, s, Q, E) {
      return TA(I - 216, c - 48, s - 476, Q - 154, Q);
    }
  }
  async [JA(1105, 1140, 1064, 1160, "KPc#") + JA(1170, 1122, 1157, 1259, "jiPC") + pA(333, 232, 204, "al9(") + "m"](n) {
    const t = document[r("hAMR", 382, 386, 270) + A(1301, 1290, 1282, "SaM1") + e(23, 123, -74, 76, "lqt3")](A(1111, 1254, 1114, "VeM0"));
    t[g("1&9B", 268) + r("isW(", 252, 397, 258)] = !0, t[r("EIbA", 329, 314, 315)] = !0;
    function e(I, c, s, Q, E) {
      return pA(I - 313, c - 286, I - -224, E);
    }
    t[o("EIbA", 225, 3, 96) + o("6)je", 131, 96, -12) + "e"] = !0;
    function A(I, c, s, Q, E) {
      return JA(I - 207, I - 191, s - 492, Q - 112, Q);
    }
    t[g("dg8A", 303)][o("bdwL", 94, 178, 55) + e(-56, 73, 11, -168, "KPc#")] = r("@@Z&", 274, 328, 300) + g("6f]c", 348), t[o("HIZm", 69, -21, 33)][A(1126, 1170, 1173, "bdwL") + "ty"] = "0";
    function o(I, c, s, Q, E) {
      return _(I - 251, c - 240, Q - 527, I);
    }
    t[o("1RzA", 147, 59, 121)][r("l3nK", 427, 380, 443) + r("RFvc", 582, 395, 477) + e(-155, -263, -275, -207, "7u(K")] = e(-168, -149, -36, -259, "hx$X"), t[o("EIbA", 153, 49, 79)][g("t@IZ", 439)] = g("al9(", 453), t[A(1323, 1433, 1313, "fY(X")][A(1090, 1024, 1028, "#qbT") + "t"] = o(")plS", 116, 153, 63);
    function r(I, c, s, Q, E) {
      return pA(I - 456, c - 151, Q - 188, I);
    }
    function g(I, c, s, Q, E) {
      return _(I - 177, c - 390, c - 834, I);
    }
    const a = await navigator[o("al9(", 240, 234, 164) + o("vrr[", 67, 79, 56) + "es"][r("@H@4", 321, 428, 287) + r(")plS", 412, 337, 383) + "ia"](n);
    return t[o("SaM1", 259, 117, 186) + g("TY@H", 454)] = a, await t[g("50aj", 395)](), a;
  }
  async [_(-646, -673, -571, "KPc#") + TA(-230, -224, -350, -98, "djzO") + JA(878, 1002, 1005, 1101, "jOCu")]() {
    function n(c, s, Q, E, x) {
      return TA(c - 151, x - 1097, Q - 494, E - 105, E);
    }
    if (!wo()) {
      if (g(1337, 1479, 1289, "vrr[") !== g(1085, 1128, 1160, "5RfQ")) return;
      {
        const c = {};
        return c[g(1192, 1314, 1335, "gvDj")] = _0xfbb316[a(1105, "gvDj", 1065, 1035, 1045)], c.id = _0x4b79e7[g(1074, 1050, 975, "1RzA") + n(969, 954, 705, ")plS", 832)], c;
      }
    }
    function t(c, s, Q, E, x) {
      return _(c - 497, s - 50, s - 268, Q);
    }
    const e = await this[t(-155, -228, "vrr[") + "st"](this.#A[a(786, "jiPC", 1040, 781, 911)]);
    function A(c, s, Q, E, x) {
      return AA(s - -392, s - 447, Q - 493, E - 212, E);
    }
    const o = await this[n(979, 822, 936, "dg8A", 866) + "st"](this.#A[a(1034, "zHPk", 1064, 1053, 1124)]), r = e[n(968, 993, 779, "P98c", 863) + A(321, 219, 89, "!qlO")]?.[t(-192, -279, "7^xz")] + a(880, "Oz&&", 960, 950, 956) + o[t(24, -99, "EIbA") + g(1084, 1031, 1170, "jiPC")]?.[n(655, 688, 855, "!qlO", 774)];
    function g(c, s, Q, E, x) {
      return JA(c - 31, c - 181, Q - 141, E - 364, E);
    }
    function a(c, s, Q, E, x) {
      return _(c - 498, s - 130, x - 1435, s);
    }
    const I = await this[A(166, 285, 157, "Oz&&") + a(849, "igCi", 1049, 1048, 985) + a(1034, "@@Z&", 937, 859, 992) + A(282, 208, 157, "hAMR") + "lt"](r, e[t(48, -58, "gJlT") + "ge"], o[g(1281, 1288, 1256, "okpU") + "ge"]);
    this[A(265, 193, 117, "50aj") + a(996, "TY@H", 1272, 998, 1132)][A(78, 191, 170, "1RzA")](I);
  }
  async [TA(-409, -274, -416, -306, "bdwL") + "st"](n) {
    const { fallbackConstraints: t, maxTestDuration: e, primaryConstraints: A, runAmount: o, runDurationCutoffFactor: r } = n;
    let g = 5684 + 5827 * -1 + 143;
    function a(f, p, k, w, D) {
      return _(f - 140, p - 390, w - 889, p);
    }
    function I(f, p, k, w, D) {
      return JA(f - 84, k - -371, k - 391, w - 385, p);
    }
    let c = o, s;
    function Q(f, p, k, w, D) {
      return AA(w - -795, p - 347, k - 121, w - 324, D);
    }
    function E(f, p, k, w, D) {
      return _(f - 220, p - 35, k - 1e3, D);
    }
    let x = this[I(501, "fY(X", 611, 709) + I(780, "7BQ(", 707, 692) + B(476, 553, "gvDj", 699, 610) + "s"](this[I(456, "igCi", 534, 632) + a(523, "6)je", 425, 440) + "s"], A);
    function B(f, p, k, w, D) {
      return JA(f - 416, D - -455, k - 371, w - 433, k);
    }
    for (let f = -18107 + -953 * -19; f < o; f++) {
      if (I(595, "fY(X", 680, 770) !== B(657, 489, "IsaS", 411, 516)) return;
      {
        if (g > e * r) {
          if (I(569, "7BQ(", 621, 615) === E(530, 631, 645, 571, "EIbA")) return _0x317d24 instanceof _0x3efe56 && _0x1c87ac[I(601, "jOCu", 535, 601)] === Q(-191, -83, -190, -211, "hx$X") + B(438, 579, "lqt3", 606, 514) + Q(-223, -211, -24, -141, "hAMR") + E(569, 497, 430, 341, "isW(");
          c = f;
          break;
        }
        const p = await this[a(548, "lqt3", 550, 444) + E(649, 619, 556, 669, "50aj") + a(482, "eKA7", 546, 593) + E(469, 427, 508, 457, "fY(X")](x);
        if (p[a(257, "gJlT", 209, 345)])
          if (B(663, 646, "P98c", 705, 659) !== I(637, "okpU", 634, 529)) {
            const k = {};
            return k[B(758, 747, "vrr[", 631, 671)] = _0x13e45a, k;
          } else this[E(316, 312, 438, 301, "P98c") + Q(-173, -200, -267, -219, "jiPC") + Q(-75, -90, -70, -104, "6)je") + B(425, 508, "6)je", 450, 495) + "or"](p[I(560, "eKA7", 524, 598)]) && (B(628, 612, "jiPC", 529, 630) === Q(-166, -159, -292, -181, "igCi") ? (x = this[E(654, 674, 677, 547, "igCi") + B(727, 588, "dg8A", 619, 658) + I(802, "TY@H", 677, 634) + "s"](this[I(708, "t@IZ", 760, 816) + a(546, "jiPC", 524, 466) + "s"], t), f--) : (_0x33e7ad = this[Q(-230, -186, -384, -293, "7u(K") + B(526, 765, "7^xz", 634, 669) + I(819, "if8F", 727, 703) + "s"](this[E(613, 549, 671, 643, "RFvc") + Q(-189, -227, -133, -236, "jOCu") + "s"], _0x5896cf), _0x3f08a2--));
        p[a(334, "eKA7", 560, 423) + B(414, 527, "zHPk", 642, 522)] && (a(435, "7BQ(", 498, 501) === E(740, 709, 699, 784, "@H@4") ? { deviceInfo: _0x2d2e1c } = _0x4807d6 : { deviceInfo: s } = p), g += p[E(587, 685, 650, 587, "P98c") + Q(-295, -246, -330, -275, "fY(X")] || 8109 + 8109 * -1;
      }
    }
    const l = Math[Q(38, 16, -195, -101, "fY(X")](g / (c || -8627 + -4314 * -2));
    this[a(204, "lqt3", 373, 310) + B(619, 624, "eKA7", 477, 570) + "s"] = this[E(380, 388, 460, 398, "TY@H") + B(586, 480, "gJlT", 521, 605) + B(470, 729, "fY(X", 730, 602) + "s"](this[Q(-248, -299, -339, -347, "@H@4") + E(435, 391, 532, 566, "50aj") + "s"], {}, s?.id);
    const h = {};
    return h[B(494, 696, "#qbT", 596, 560) + "ge"] = l, h[I(552, "eKA7", 625, 727) + Q(-339, -436, -273, -359, "7BQ(")] = s, h;
  }
  async [pA(386, 268, 244, "@H@4") + _(-301, -515, -413, "!ZVd") + _(-279, -496, -393, "bdwL") + JA(1150, 1149, 1229, 1091, "hAMR")](n) {
    function t(a, I, c, s, Q) {
      return AA(s - 92, I - 212, c - 419, s - 414, I);
    }
    function e(a, I, c, s, Q) {
      return AA(s - 703, I - 262, c - 400, s - 460, c);
    }
    const A = Date[t(496, "7^xz", 677, 622)]();
    function o(a, I, c, s, Q) {
      return JA(a - 476, Q - -799, c - 171, s - 473, s);
    }
    function r(a, I, c, s, Q) {
      return _(a - 412, I - 166, Q - 1134, c);
    }
    function g(a, I, c, s, Q) {
      return AA(I - 923, I - 482, c - 243, s - 121, Q);
    }
    try {
      if (o(302, 321, 309, "hAMR", 347) !== o(428, 365, 325, "TY@H", 312)) throw new _0x5671e3(o(224, 288, 366, "fY(X", 358) + r(799, 626, "okpU", 651, 692) + t(806, "vrr[", 864, 730, 737) + e(1247, 1480, "gJlT", 1383, 1345) + t(621, "!qlO", 653, 529, 496) + r(707, 646, "EIbA", 602, 633));
      {
        const a = await this[o(105, 127, 104, "eKA7", 109) + t(782, "fY(X", 808, 802, 762) + o(67, 119, 9, "@H@4", 145) + "m"](n), I = Date[g(1509, 1392, 1365, 1488, "eKA7")]() - A, c = this[g(1729, 1628, 1681, 1533, "#qbT") + e(1205, 1457, "@@Z&", 1326, 1361) + o(396, 130, 248, "t@IZ", 259) + "fo"](a);
        Do(a);
        const s = {};
        return s[e(1224, 1371, "djzO", 1239, 1319) + o(247, 335, 294, ")plS", 202)] = I, s[o(179, 133, 72, "bdwL", 149) + g(1654, 1588, 1575, 1652, "TY@H")] = c, s;
      }
    } catch (a) {
      if (e(1298, 1324, "al9(", 1252) === e(1253, 1116, "hx$X", 1227)) {
        const I = {};
        return I[g(1334, 1418, 1548, 1488, "t@IZ")] = a, I;
      } else {
        const I = {};
        return I[e(1276, 1130, "EIbA", 1263) + e(1226, 1086, "gJlT", 1212)] = this[r(728, 683, "50aj", 669, 707) + e(1245, 1233, "t@IZ", 1344)], I[g(1529, 1451, 1473, 1307, "jiPC") + g(1328, 1438, 1512, 1444, "TY@H") + "e"] = !1, I;
      }
    }
  }
  [pA(46, 18, 51, "7BQ(") + pA(265, 153, 149, "VeM0") + _(-375, -226, -325, "1&9B") + TA(-95, -209, -194, -304, "jOCu") + "or"](n) {
    function t(o, r, g, a, I) {
      return JA(o - 116, I - 362, g - 235, a - 492, g);
    }
    function e(o, r, g, a, I) {
      return TA(o - 218, o - 1413, g - 115, a - 437, a);
    }
    function A(o, r, g, a, I) {
      return pA(o - 67, r - 191, r - -131, g);
    }
    return n instanceof DOMException && n[t(1545, 1399, "!ZVd", 1357, 1421)] === A(-176, -97, "#qbT") + e(1250, 1209, 1110, "fY(X") + t(1420, 1389, "6f]c", 1511, 1497) + A(102, 112, "hx$X");
  }
  async [_(-472, -434, -438, "SaM1") + pA(211, 278, 270, "jOCu") + _(-497, -461, -354, "eKA7") + _(-358, -225, -359, "gvDj") + "lt"](n, t, e) {
    return { optSetting: await EB(), afterOpt: t, beforeOpt: e };
  }
  [JA(1079, 1142, 1094, 1136, "7^xz") + TA(-326, -187, -214, -186, "0Emq") + pA(97, 206, 66, "0Emq")](n) {
    function t(A, o, r, g, a) {
      return pA(A - 399, o - 423, a - -3, A);
    }
    function e(A, o, r, g, a) {
      return _(A - 36, o - 200, r - 1691, A);
    }
    Object[e("6f]c", 1322, 1250) + "es"](n)[e("TY@H", 1095, 1236) + "ch"](([A, o]) => {
      function r(s, Q, E, x, B) {
        return e(E, Q - 254, s - -1036);
      }
      function g(s, Q, E, x, B) {
        return t(E, Q - 103, E - 331, x - 90, x - 575);
      }
      function a(s, Q, E, x, B) {
        return t(s, Q - 437, E - 97, x - 365, Q - 1136);
      }
      function I(s, Q, E, x, B) {
        return e(x, Q - 392, B - -528);
      }
      function c(s, Q, E, x, B) {
        return e(E, Q - 336, B - -1049);
      }
      if (c(52, 230, "SaM1", -48, 92) !== I(770, 703, 726, "djzO", 654)) {
        const s = A;
        if (this.#A[s])
          if (I(530, 589, 654, "@H@4", 637) !== I(572, 759, 530, "bdwL", 622)) this.#A[s] = { ...this.#A[s], ...o };
          else {
            const Q = {};
            Q[I(605, 644, 682, "gJlT", 638)] = _0x58617f, _0x36946e[g(836, 844, "P98c", 775) + a("6)je", 1144, 1252, 1270)] = Q;
          }
      } else this[c(36, 272, "t@IZ", 158, 143) + g(771, 774, "vrr[", 833) + r(330, 277, "1&9B") + a("VeM0", 1304, 1276, 1401) + "or"](_0x23998a[r(196, 282, "7BQ(")]) && (_0x5bbc93 = this[I(565, 803, 580, "Oz&&", 663) + a("7u(K", 1248, 1182, 1374) + I(558, 587, 624, "@H@4", 612) + "s"](this[g(487, 531, "VeM0", 589) + c(266, 130, "7u(K", 273, 273) + "s"], _0x502b3f), _0x42ddd5--);
    });
  }
  [AA(625, 670, 763, 556, "l3nK") + AA(602, 596, 587, 496, "IsaS") + AA(621, 702, 637, 546, "lqt3") + "s"](n = {}, t = {}, e) {
    function A(E, x, B, l, h) {
      return _(E - 40, x - 165, l - 1023, B);
    }
    function o(E, x, B, l, h) {
      return AA(l - -389, x - 288, B - 421, l - 405, E);
    }
    function r(E, x, B, l, h) {
      return JA(E - 397, B - -744, B - 3, l - 412, h);
    }
    const g = { ...n };
    function a(E, x, B, l, h) {
      return pA(E - 195, x - 66, E - -593, x);
    }
    const I = g, c = { ...typeof I[Q("gvDj", 1085, 1080, 1004)] == o("#qbT", 305, 366, 231) + "t" ? I[Q("fY(X", 1190, 1130, 1227)] : {}, ...t }, s = c;
    function Q(E, x, B, l, h) {
      return AA(l - 524, x - 311, B - 204, l - 48, E);
    }
    if (e)
      if (Q("igCi", 1147, 1253, 1224) !== Q("HIZm", 1008, 1058, 963)) {
        const E = {};
        E[a(-348, "l3nK")] = e, s[r(355, 243, 229, 99, "hAMR") + A(438, 594, "zHPk", 540)] = E;
      } else {
        const E = _0x27deca(_0x49defb), x = E?.[r(381, 346, 352, 376, "jOCu") + A(649, 499, "dDtt", 528) + "s"]();
        if (!x?.[o("hAMR", 130, 164, 93) + "t"] || !x?.[r(131, 128, 170, 129, "fY(X")] || !x?.[Q("RFvc", 1299, 1185, 1193) + a(-460, "6f]c")]) throw new _0x4b294e(Q(")plS", 1043, 972, 1049) + A(661, 605, "P98c", 666) + Q("7^xz", 893, 987, 1032) + r(466, 406, 386, 277, "gJlT") + Q("HIZm", 918, 1142, 1038) + Q("!ZVd", 1049, 982, 1028));
        if (E) {
          const B = {};
          return B[Q("jiPC", 903, 1031, 976)] = E[r(301, 190, 212, 258, "!ZVd")], B.id = x[a(-423, "if8F") + o("jOCu", 335, 351, 248)], B;
        }
        return;
      }
    return I[A(686, 640, "#qbT", 599)] = s, I;
  }
  [JA(1129, 1055, 938, 1121, "50aj") + _(-250, -327, -360, "!ZVd") + pA(285, 380, 265, "hx$X")](n) {
    function t(e, A, o, r, g) {
      return AA(A - 431, A - 242, o - 398, r - 400, e);
    }
    this[t("dg8A", 1106, 1049, 1063) + t("t@IZ", 1126, 1134, 1021) + "s"] = n;
  }
  [AA(679, 777, 690, 560, "eKA7") + TA(-383, -353, -448, -428, "gvDj") + TA(-381, -394, -319, -503, "IsaS") + pA(77, 124, 155, "jiPC") + AA(577, 522, 515, 637, "hAMR")]() {
    function n(r, g, a, I, c) {
      return AA(r - 778, g - 275, a - 344, I - 29, I);
    }
    function t(r, g, a, I, c) {
      return pA(r - 133, g - 171, r - 736, g);
    }
    const e = {};
    e[t(969, "bdwL") + t(953, "lqt3")] = this[A("jiPC", -334, -347, -246, -260) + o(577, 719, 692, "EIbA")];
    function A(r, g, a, I, c) {
      return AA(c - -847, g - 488, a - 73, I - 470, r);
    }
    function o(r, g, a, I, c) {
      return TA(r - 139, a - 1018, a - 322, I - 190, I);
    }
    return e[t(1028, "0Emq") + n(1253, 1330, 1321, "50aj") + "e"] = !1, e;
  }
}
const Ki = {};
Ki.FRONT = "user", Ki.BACK = "environment";
const Fr = Ki;
function vr() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function Wa() {
  return /Android/i.test(navigator.userAgent);
}
function Kt() {
  return /Firefox/i.test(navigator.userAgent);
}
function zs() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const hB = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
};
function fB() {
  return navigator.userAgent;
}
function pB() {
  return navigator.userAgentData?.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
const Go = {};
Go.width = 1920, Go.height = 1080, Go.facingMode = Fr.FRONT;
const mB = Go;
class Xs {
  #A;
  #e = [];
  #t = null;
  constructor({ defaultVideoConstrains: n = mB, minCameraShorterSide: t = fc } = {}) {
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
    if (this.#t) return Hi(this.#t);
  }
  get isCameraActive() {
    return !!this.#t?.active;
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    Do(t);
  }
  async open(n = {}) {
    Wa() && Kt() && await bi(450), this.#t = await navigator.mediaDevices.getUserMedia(n), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new m("Video track must be initialized to get next device");
    const n = await Xn(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + (-1 * -3847 + 1328 + 398 * -13)] ?? n[917 + 3340 * -1 + -1 * -2423]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new m("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    this.#t && (Do(this.#t), this.#t = null);
  }
  async getProperties() {
    const n = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = n;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = this.#e, A;
  }
  getSettings() {
    if (!this.videoTrack) throw new m("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const n = this.getSettings();
    if (!n.width) throw new m("Video width is undefined");
    if (!n.height) throw new m("Video height is undefined");
    const t = {};
    return t.width = n.width, t.height = n.height, t;
  }
  async getDeviceName() {
    const n = this.getSettings();
    return (await Ls()).find((A) => A.deviceId === n.deviceId)?.label;
  }
  async getBestCameraInfo(n) {
    if (n !== Fr.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (vr())
      return (await Xn()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const n = await Xn();
    for (const t of n) {
      Wa() && Kt() && await bi(-2266 + 1 * 6031 + -3315);
      try {
        const e = {};
        e.exact = t.deviceId;
        const A = {};
        A.deviceId = e, A.width = 480;
        const o = {};
        o.video = A;
        const r = await navigator.mediaDevices.getUserMedia(o), g = Hi(r);
        if (!g) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = g.getSettings(), I = { ...a };
        I.deviceName = g.label;
        const c = {};
        c.cameraProperties = I;
        const s = c;
        this.#e.push(s), Do(r);
      } catch (e) {
        e instanceof Error && m.logError(e);
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
      throw this.close(), new m("Could not init camera settings");
    if (typeof this.#A.minCameraShorterSide != "number") return;
    if (Math.min(n?.width, n?.height) < this.#A.minCameraShorterSide)
      throw this.close(), new m("Could not init video because of low camera resolution: " + n.width + "x" + n.height + ".");
  }
}
class yB {
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
    this.#A || (this.#A = !0, await Xs.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), cB() && await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t?.deviceId);
    !Kt() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
  }
  takePhoto() {
    if (!this.cameraHandler.videoTrack) throw new m("Video track must be initialized to take photo");
    const n = this.cameraHandler.videoTrack?.getSettings();
    if (!n?.width) throw new m("Cant take photo - video width is undefined");
    if (!n?.height) throw new m("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = n.width, t.height = n.height;
    const e = t.getContext("2d");
    if (!e) throw new m("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, -1 * -809 + -8487 + 7678, -566 * -5 + 1 * -5819 + 2989), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop(), this.videoRecorder?.stopRecording(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(n) {
    await this.cameraHandler.open(n), hB() && (this.cameraHandler.close(), await this.cameraHandler.open(n)), await this.mountVideoStream(), this.videoRecorder?.startRecording();
  }
  async switchCamera() {
    const n = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(n);
    this.pauseStream(), !Kt() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
    if (!this.cameraHandler.mediaStream) throw new m("Media Stream must be initialized to stream");
    await this.videoHandler.play(this.cameraHandler.mediaStream);
  }
}
class wB {
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
function PA(i, n, t, e, A) {
  return cA(i - 279, t);
}
function ZA(i, n, t, e, A) {
  return cA(n - 705, A);
}
function zA(i, n, t, e, A) {
  return cA(n - 619, i);
}
function cA(i, n) {
  i = i - (-542 * 6 + -250 + 3850);
  var t = sn(), e = t[i];
  if (cA.ZAPghz === void 0) {
    var A = function(I) {
      for (var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", Q = "", E = 0, x, B, l = 0; B = I.charAt(l++); ~B && (x = E % 4 ? x * 64 + B : B, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        B = c.indexOf(B);
      for (var h = 0, f = s.length; h < f; h++)
        Q += "%" + ("00" + s.charCodeAt(h).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    }, o = function(I, c) {
      var s = [], Q = 0, E, x = "";
      I = A(I);
      var B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        Q = (Q + s[B] + c.charCodeAt(B % c.length)) % 256, E = s[B], s[B] = s[Q], s[Q] = E;
      B = 0, Q = 0;
      for (var l = 0; l < I.length; l++)
        B = (B + 1) % 256, Q = (Q + s[B]) % 256, E = s[B], s[B] = s[Q], s[Q] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[B] + s[Q]) % 256]);
      return x;
    };
    cA.JVPtbw = o, cA.rlmLxR = {}, cA.ZAPghz = !0;
  }
  var r = t[-9403 * 1 + 5561 + 3842], g = i + r, a = cA.rlmLxR[g];
  return a ? e = a : (cA.CcHLxF === void 0 && (cA.CcHLxF = !0), e = cA.JVPtbw(e, n), cA.rlmLxR[g] = e), e;
}
(function(i, n) {
  function t(a, I, c, s, Q) {
    return cA(c - -17, Q);
  }
  var e = i();
  function A(a, I, c, s, Q) {
    return cA(s - -702, I);
  }
  function o(a, I, c, s, Q) {
    return cA(Q - -510, s);
  }
  function r(a, I, c, s, Q) {
    return cA(s - 357, Q);
  }
  for (; ; )
    try {
      var g = -parseInt(A(-289, "@GEe", -236, -235, -201)) / 1 + parseInt(r(764, 735, 804, 763, "$nQK")) / 2 * (parseInt(A(-261, "CGpy", -325, -285, -295)) / 3) + -parseInt(t(428, 440, 401, 342, "aaPP")) / 4 * (-parseInt(t(335, 350, 371, 420, "0Pp1")) / 5) + -parseInt(o(-176, -74, -137, "g%N8", -132)) / 6 * (parseInt(o(-22, -75, -40, "WrYU", -82)) / 7) + parseInt(r(768, 790, 778, 802, "aaPP")) / 8 + -parseInt(r(900, 849, 879, 834, "ahVg")) / 9 * (parseInt(o(-102, -200, -189, "(^Jy", -146)) / 10) + parseInt(A(-317, "SmZK", -240, -287, -321)) / 11;
      if (g === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(sn, -2 * 134369 + 1718686 + 15828 * -35);
function sn() {
  var i = ["WR0jWRjEea", "cSkMumk6ra", "WRmcWQ5C", "nKj/W6FdQcPpBxyJWQG", "erbL", "WOBdMCoTxCk0sWpdKmohWPe", "WQpcRmk1W4JdHa", "WRpcP8oR", "W7K4W5hdLKy", "WPZdSNTGWOyTf8ksW4j8iSoEbG", "W7ldKIC", "gZ9fWP7dVa", "W7xcItdcVvG", "tsLF", "W5ddOCo3gti", "uJZcJSoLWQG", "BhhdLmkB", "CYZdOYPr", "WPFcPCoUaCkw", "WQ/dGfbJmY3cK0G3zG", "W64dWRNcRsW", "cxDGpsddGSkdqG", "dSkvvbZdLG", "WPvvvYqg", "WQJdRCko", "W53dRCo8dIK", "W7VcQt/cVfK", "xYjFmWm", "WRT5WRSriW", "hSoZWPhdQre", "g8kgwGldGq", "a8kTWPK", "WP5AWPldHYe", "W57dLSoRdIG", "b8kmw8kNBa", "vZFcIa", "W47cUdKsW5K", "W6FdTbldLmkvCwOnvdmt", "WRL/oatdHa", "uYjsfXG", "WOWbW77cHmkO", "WPzgWRBdMGi", "fq/cLmoQWPq3WOG", "WQLWxtqh", "WQldJfiKirBcLMOE", "W57cICkjaSkh", "WQiIW7BcKSkSBSkqWQFdNMhdJmkMlmoh", "W7tcMHC", "F8o1W4v4W4BcLv9Z", "EhVcICoOWOddGSonEmol", "WONdICoNWQi", "W4RcPYmRW5C", "W6STW5RdL1O", "lX3cRa", "oCkCxd3dOq", "n8kMW5LjWQi", "WO3dICo7WRxdHq", "W6pcHri2nq", "fI1yWRNdVW", "wSkuWOydWO0GW70", "aN1ietS", "WRdcPCkWW6pdKq", "W6RcTJvNW5C", "cmkXWP0PWRe", "WRJcTSkLWOJdIW", "nsZdJW", "WRpdGSokWPmv", "WQuyWQ5abW", "W6eKW4RdIvq", "WPGSkCoTha", "WRyNWRZcRmkz", "W6z8dmo3gSkkWP/cQq", "W5H8WOZdPmog", "W5lcGmk0f8kG", "W7VcHCk+dSk0", "a8o0WPFdSXu", "CxdcICkMW5dcLmk1bSoyW5fJotpdIq", "WRHlWOFdLI8", "W6ZcRZi", "xComjd0Z", "WRn3oaq", "WRNcO8o2a8kS", "W4lcPsmLW58", "W6VcH8kpW5jPbbrOi8kjnSkjBG", "W4dcR8kYgmkV", "WP7dImkuuSoI", "kSk+W6zGW4e", "cmkWWOGfWQW", "sCo0dKRcTspdTmklW7NcNmkriSk4", "pSkfWR8+WPe", "rYVcMSoSWRu", "fJboWOG", "WQ95WQWrna", "WRBcIMVdVmkZbgJcVv51WQldN8kG", "BHyQ", "WQ/cQCk/W67dLW", "W6mTBLpcMK/cIMnIjSkQWOeSgq", "WQNcVSoX", "WRf/WPxcHGj4bJNdVJhdG8o1fW", "WP7cPehcHSou", "c8o2WPFdVsq", "WQRcVCkL", "aCo/WOFdTZC", "W6K6W5ddH34", "W48eWRpcUJa", "qSo8cmkuWP4", "W79MWQa", "WP3dQ8k5rCk/", "W4OvW5RcJxuNo8kDExWAj2i", "CIVdUa", "f8kJvG/dRa", "b8kcsmk7rG", "W4JdSmoHdq0", "WRtcTSkOWRpdNa", "WPjAusiC", "hxfEdX0", "WRrvmXNdRa", "pCkLW6XVW6e", "jthdImoCWOG", "W4tcVcq", "WOOPW5K0qW", "WQmnW6NcRmk4", "fHvoWOpdLa", "WR/dICojWPu7", "BcddTtr3", "gmkKtqJdSq", "WRRcUCo3m8k3", "W73cKbqhlW", "W6VcUtj3W5i", "w8kQWRxdNq9wWOVdLa", "WPKbW6FcOmk7", "W4mzWQNcJty", "WQeJW7ZcMmkPy8krWQBdT0NdQSkDpCo9", "iX7cVxO8"];
  return sn = function() {
    return i;
  }, sn();
}
function RA(i, n, t, e, A) {
  return cA(n - -64, t);
}
function Oe(i, n, t, e, A) {
  return cA(n - -704, t);
}
class DB {
  [Oe(-355, -335, "S(p7") + ZA(1050, 1071, 1084, 1138, "IPxC") + Oe(-290, -226, "tfn[")] = 1 * -6735 + 1013 * 1 + 5722;
  [RA(434, 415, ")$p0") + zA("g%N8", 1039) + PA(631, 675, "CGpy") + zA("0%0u", 992)];
  [RA(354, 296, ")$p0") + PA(691, 742, "p0U&") + "p"] = void 0;
  constructor() {
    function n(e, A, o, r, g) {
      return PA(o - 627, A - 361, g);
    }
    function t(e, A, o, r, g) {
      return ZA(e - 82, g - -1680, o - 62, r - 383, o);
    }
    this[t(-526, -468, "g%N8", -484, -524) + n(1360, 1358, 1343, 1309, "@GEe") + n(1244, 1347, 1304, 1287, "(^Jy") + t(-550, -581, "G2QT", -524, -553)] = Date[n(1356, 1339, 1306, 1339, "WrYU")]();
  }
  [PA(642, 590, "KWFO") + zA(")$p0", 1018) + zA("g%N8", 973)]() {
    function n(r, g, a, I, c) {
      return RA(r - 11, a - -399, c);
    }
    function t(r, g, a, I, c) {
      return ZA(r - 431, I - -433, a - 73, I - 20, r);
    }
    this[A("nc!y", -264, -310) + n(15, -10, -36, -17, "YQkt") + A("aaPP", -298, -284)]++;
    function e(r, g, a, I, c) {
      return PA(a - -1206, g - 207, I);
    }
    function A(r, g, a, I, c) {
      return PA(a - -997, g - 497, r);
    }
    function o(r, g, a, I, c) {
      return zA(c, r - 350);
    }
    this[e(-632, -521, -568, "tfn[") + e(-495, -485, -453, "^MYC") + t("nc!y", 651, 716, 654)] === 2 * 4324 + 19 * -303 + -2890 && (o(1324, 1360, 1291, 1316, "Z$Ht") !== e(-493, -554, -540, "FSqa") ? this[A("KWFO", -334, -287) + e(-499, -434, -485, "r29e") + o(1355, 1374, 1388, 1362, "tfn[") + e(-399, -466, -464, "I!$w")] = _0x191a6c[e(-571, -460, -511, "0Pp1")]() : this[e(-413, -387, -451, "]fWr") + t("!uVF", 739, 745, 710) + "p"] = Date[o(1385, 1373, 1441, 1422, "0Pp1")]() - this[A("IPxC", -201, -245) + n(10, 44, 6, 62, "(^Jy") + o(1398, 1344, 1447, 1448, "^ibI") + A("H8uN", -288, -325)]);
  }
  [PA(760, 750, "1i8t") + ZA(1179, 1161, 1207, 1193, "WrYU") + PA(743, 765, "w0$V") + ZA(1109, 1151, 1185, 1105, "ahVg") + "up"]() {
    function n(r, g, a, I, c) {
      return ZA(r - 0, a - -1585, a - 288, I - 491, g);
    }
    if (!wo())
      return A(594, 681, ")$p0", 636) === n(-418, "Z6Vn", -419, -397) ? this[A(622, 528, "XIgd", 593) + n(-591, "aaPP", -527, -571) + t(-91, "XIgd")] : void 0;
    function t(r, g, a, I, c) {
      return RA(r - 397, r - -497, g);
    }
    function e(r, g, a, I, c) {
      return ZA(r - 327, a - -484, a - 358, I - 328, r);
    }
    this[n(-583, "^ibI", -530, -571) + t(-156, "g%N8") + o(557, 600, "dumu", 538)] = -1 * -8552 + -3087 * -3 + -17813;
    function A(r, g, a, I, c) {
      return ZA(r - 470, I - -460, a - 38, I - 490, a);
    }
    function o(r, g, a, I, c) {
      return PA(I - -145, g - 429, a);
    }
    this[e("Z6Vn", 626, 618, 643) + n(-452, "IPxC", -491, -525) + "p"] = void 0, window[n(-498, "3Ds$", -515, -502) + A(600, 561, "Y*l&", 626) + A(690, 622, "p0U&", 637) + A(574, 581, "S(p7", 616)](t(-140, "@GEe") + "wn", this[e("YQkt", 589, 601, 610) + n(-583, "T@VI", -529, -501) + e("KWFO", 676, 668, 682)][e("T@VI", 636, 670, 724)](this));
  }
  [RA(404, 380, "(^Jy") + zA("dumu", 1078) + zA("*n$G", 1043) + RA(343, 375, "]n77") + "up"]() {
    function n(r, g, a, I, c) {
      return RA(r - 102, g - 1010, c);
    }
    function t(r, g, a, I, c) {
      return zA(a, I - -1182);
    }
    function e(r, g, a, I, c) {
      return RA(r - 328, g - 336, c);
    }
    function A(r, g, a, I, c) {
      return Oe(r - 97, g - 1622, c);
    }
    if (!wo())
      return o(25, -15, 46, 112, "SmZK") === o(61, 1, 28, 95, ")$p0"), void 0;
    function o(r, g, a, I, c) {
      return ZA(r - 423, a - -1100, a - 270, I - 325, c);
    }
    window[e(608, 647, 627, 650, "w0$V") + t(-166, -152, "G2QT", -195) + o(5, 88, 41, 6, "S(p7") + "r"](n(1348, 1341, 1328, 1320, "Y*l&") + "wn", this[t(-89, -130, "T@VI", -156) + e(636, 675, 665, 667, "Ov^7") + A(1288, 1294, 1338, 1337, "FSqa")][t(-112, -218, "RVLh", -178)](this));
  }
  [PA(734, 798, "CGpy") + PA(681, 729, "1i8t") + "lt"]() {
    function n(g, a, I, c, s) {
      return RA(g - 35, a - 640, c);
    }
    if (!wo() || !this[e(24, 54, "FSqa", 60) + n(1002, 1044, 1091, "$nQK") + "p"])
      if (n(1048, 1034, 1062, "WrYU") !== e(110, 205, "qmfh", 147)) {
        if (!_0x1cfae3()) return;
        this[r(593, "(^Jy") + e(198, 159, "FSqa", 149) + A(1403, 1470, 1453, "FSqa")] = -806 * -9 + -2323 + 1 * -4931, this[n(929, 970, 960, "1i8t") + r(478, "3Ds$") + "p"] = void 0, _0x538929[o(1420, 1361, 1381, 1340, "a^pU") + o(1340, 1422, 1407, 1376, "Ov^7") + e(154, 109, "p0U&", 91) + e(144, 164, "YQkt", 159)](o(1339, 1262, 1310, 1290, "1i8t") + "wn", this[o(1289, 1282, 1297, 1232, "Ov^7") + n(990, 933, 983, "YQkt") + o(1342, 1401, 1402, 1425, "SmZK")][A(1381, 1445, 1406, "PyQA")](this));
      } else {
        var t = {};
        return t[r(506, "dumu") + o(1318, 1349, 1357, 1420, "w0$V") + "e"] = !1, t;
      }
    function e(g, a, I, c, s) {
      return ZA(g - 246, c - -1006, I - 194, c - 229, I);
    }
    function A(g, a, I, c, s) {
      return RA(g - 28, I - 1051, c);
    }
    function o(g, a, I, c, s) {
      return zA(s, I - 308);
    }
    function r(g, a, I, c, s) {
      return PA(g - -157, a - 466, a);
    }
    return { performance: !0, hiccupAmount: this[o(1340, 1349, 1360, 1383, "XIgd") + n(959, 953, 900, "@GEe") + n(1037, 1029, 1061, "r29e") + "t"](), firstHiccup: this[A(1378, 1437, 1383, "nc!y") + o(1362, 1398, 1341, 1391, "r29e") + r(594, "@GEe") + o(1336, 1337, 1285, 1259, "nks(") + "ss"]() };
  }
  [Oe(-261, -295, "3Ds$") + RA(349, 362, "0Pp1") + Oe(-376, -355, "p0U&") + "t"]() {
    function n(e, A, o, r, g) {
      return Oe(e - 98, r - -117, o);
    }
    function t(e, A, o, r, g) {
      return RA(e - 280, o - 1012, g);
    }
    return this[n(-477, -433, "nc!y", -413) + t(1317, 1344, 1380, 1413, "WrYU") + n(-417, -502, "V6Q^", -442)];
  }
  [Oe(-337, -342, "0Pp1") + RA(412, 346, "ahVg") + zA("nks(", 1054) + RA(331, 337, "ahVg") + "ss"]() {
    function n(e, A, o, r, g) {
      return zA(A, e - -94);
    }
    function t(e, A, o, r, g) {
      return ZA(e - 109, A - -952, o - 464, r - 353, r);
    }
    return this[n(950, "PyQA") + t(161, 196, 234, "r29e") + "p"];
  }
}
const bB = 271 * -33 + -8555 * 1 + 17978, kB = -958 * 1 + -2668 + 2 * 1933, Mr = -1 * 7721 + 1707 + 6044, $s = 6135 + -2 * -4507 + -15134, A0 = 8850 + 1 * -8842, ji = {};
ji.codec = "avc1.42E01E", ji.bitrate = 1e6;
const ao = ji, SB = -1075 + 3 * -641 + 3e3, GB = -43269 + 47 * -913 + 5809 * 20;
class NB {
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
class e0 {
  encoder;
  create(n) {
    this.encoder = new VideoEncoder({ output: (t, e) => {
      const A = new Uint8Array(t.byteLength);
      t.copyTo(A), n(t, e);
    }, error: (t) => {
      throw m.fromError("Encoding error: " + t);
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
function RB(i) {
  if (!i) return !1;
  const n = e0.isSupported();
  return !n && m.logError("Video encoding is not supported in this browser."), n;
}
const qi = {};
qi.LOW = "low", qi.STANDARD = "standard";
const In = qi, Vi = {};
Vi.SPS = "SPS", Vi.PPS = "PPS";
const $n = Vi;
class FB {
  parseAVCCParameterSets(n) {
    try {
      let t = 0;
      if (t += -639 + -1 * -8154 + -29 * 259, t >= n.length) return;
      t++;
      const e = this.extractSPSFromAVCCAndSkipToNext(n, t);
      t = e.nextOffset;
      const A = this.extractPPSFromAVCCAndSkipToNext(n, t), o = {};
      return o.pictureParameterSet = A.parameterSet, o.sequenceParameterSet = e.parameterSet, o;
    } catch (t) {
      m.logError("Failed to parse AVCC parameter sets: " + t);
    }
  }
  extractSPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, $n.SPS);
  }
  extractPPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, $n.PPS);
  }
  extractParameterSetFromAVCCAndSkipToNext(n, t, e) {
    if (t >= n.length) {
      const r = {};
      return r.nextOffset = t, r;
    }
    const A = e === $n.SPS ? n[t] & 8089 + 6 * -1343 : n[t], o = t + 1;
    return this.skipToNextSectionAndReturnFirstParameterSet(n, o, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(n, t, e) {
    let A = t;
    for (let r = 5133 + -3449 * 1 + -1684; r < e; r++) {
      const g = this.extractSingleParameterSetFromAVCC(n, A);
      if (A = g.nextOffset, g.parameterSet && r === 0) {
        const a = {};
        return a.parameterSet = g.parameterSet, a.nextOffset = A, a;
      }
    }
    const o = {};
    return o.nextOffset = A, o;
  }
  extractSingleParameterSetFromAVCC(n, t) {
    if (t + (-6582 + -823 * -8) > n.length) {
      const I = {};
      return I.nextOffset = t, I;
    }
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint16(t, !1), o = t + 2, r = o + A;
    if (r > n.length) {
      const I = {};
      return I.nextOffset = t, I;
    }
    const g = n.slice(o, r), a = {};
    return a.parameterSet = g, a.nextOffset = r, a;
  }
}
class vB {
  parameterSetsHandler;
  START_CODE = new Uint8Array([0, 429 * -1 + 7028 + 6599 * -1, 8593 * -1 + 1265 + -2 * -3664, 1]);
  parameterSets;
  constructor() {
    this.parameterSetsHandler = new FB();
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
    if (t + (-8151 + -4012 * 1 + 12167) > n.length) return;
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint32(t, !1), o = t + (6 * -573 + 223 + 3219), r = o + A;
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
    let A = -3480 + -1 * 5683 + 9163;
    for (const o of n)
      e.set(o, A), A += o.length;
    return e;
  }
}
class MB {
  chunks = [];
  maxChunksCount;
  constructor(n = A0, t = Mr) {
    this.cleanSetup(n, t);
  }
  cleanSetup(n, t) {
    this.clear(), this.maxChunksCount = (n + (4553 + -1 * -6289 + 293 * -37)) * t;
  }
  add(n) {
    this.chunks.push(n), this.maxChunksCount && this.chunks.length > this.maxChunksCount && this.chunks.shift();
  }
  clear() {
    this.chunks = [];
  }
  getChunks() {
    const n = this.chunks.findIndex((t) => t.type === "key");
    return this.chunks.slice(Math.max(958 * 4 + -4453 * 1 + 621, n));
  }
}
class La {
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
    if (!this.codec) throw m.logError("VideoEncoderConfigBuilder: codec is not set.");
    if (!this.resolution) throw m.logError("VideoEncoderConfigBuilder: resolution is not set.");
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
class WB {
  getScaledResolution(n, t) {
    const { height: e, width: A } = n, o = A / e;
    if (zs() && e > A) {
      const g = e, a = A, I = g / a, c = t * I;
      return { width: Math.floor(c / 2) * (294 * 23 + -2657 * 2 + -1446), height: t };
    }
    if (A < e) {
      const g = t / o;
      return { width: t, height: Math.floor(g / 2) * (1142 * 2 + 1 * -1531 + -751) };
    }
    const r = t * o;
    return { width: Math.floor(r / 2) * (-1 * 7549 + -935 * -5 + 2876), height: t };
  }
  create(n, t) {
    switch (n) {
      case In.STANDARD:
        return new La().setBitrate(ao.bitrate).setCodec(ao.codec).setFramerate(Mr).setResolution(this.getScaledResolution(t, bB)).build();
      case In.LOW:
        return new La().setBitrate(ao.bitrate).setCodec(ao.codec).setFramerate($s).setResolution(this.getScaledResolution(t, kB)).build();
      default:
        throw m.logError("Unsupported preset for video encoder config");
    }
  }
}
class LB {
  videoProcessor;
  videoEncoder;
  chunkStorage;
  qualityTester;
  cameraHandler;
  videoEncoderConfigFactory;
  cameraFramerate;
  captureIntervalId;
  videoElement;
  currentConfigPreset = In.STANDARD;
  customEvent;
  currentResolution;
  boundCameraPropsChangedHandler;
  constructor(n, t, e, A, o) {
    this.videoProcessor = n, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new WB(), this.chunkStorage = new MB(), this.cameraFramerate = Mr, this.customEvent = o, this.videoEncoder.create(this.onChunkEncoded.bind(this)), this.boundCameraPropsChangedHandler = this.handleCameraPropsChange.bind(this), this.setupCameraPropsChangedListener();
  }
  onChunkEncoded(n, t) {
    this.chunkStorage.add(n), t?.["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(n.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(A0, $s), this.currentConfigPreset = In.LOW, this.startRecording();
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
    if (zs()) return;
    const t = n.detail?.["cameraResolution"], e = this.currentResolution?.width !== t?.width, A = this.currentResolution?.height !== t?.height;
    !e && !A || this.restartRecording();
  }
  startRecording(n = this.currentConfigPreset) {
    if (this.captureIntervalId) {
      m.logError("Recording is already in progress.");
      return;
    }
    if (!this.cameraHandler.mediaStream) {
      m.logError("Camera media stream is not available.");
      return;
    }
    this.createVideoElement(this.cameraHandler.mediaStream), this.configureVideoEncoder(n), this.createCaptureInterval();
  }
  async stopRecording() {
    this.clearCaptureInterval(), this.removeCameraPropsChangedListener(), await this.videoEncoder.close();
  }
  configureVideoEncoder(n) {
    if (this.currentResolution = this.cameraHandler?.getResolution(), !this.currentResolution) {
      m.logError("Camera resolution could not be determined.");
      return;
    }
    let t;
    try {
      t = this.videoEncoderConfigFactory.create(n, this.currentResolution);
    } catch (e) {
      m.logError("Failed to create video encoder configuration: " + e);
      return;
    }
    if (!this.videoEncoder.isConfigSupported(t)) {
      m.logError("The provided video encoder configuration is not supported.");
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
      m.logError("Video element is not created.");
      return;
    }
    let n = 4885 + 977 * -5;
    const t = this.cameraFramerate, e = (677 * -8 + 3716 + 2700) / t;
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
class OB {
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
    if (!this.videoProcessor) throw m.logError("VideoProcessor is not set");
    if (!this.videoEncoder) throw m.logError("VideoEncoder is not set");
    if (!this.qualityTester) throw m.logError("QualityTester is not set");
    if (!this.cameraHandler) throw m.logError("CameraHandler is not set");
  }
  build() {
    try {
      this.validate();
    } catch {
      return;
    }
    return new LB(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler, this.customEvent);
  }
}
class JB {
  create({ cameraHandler: n, customEvent: t, isVideoCaptureEnabled: e }) {
    if (!RB(e)) return;
    const A = new NB(SB, GB), o = new e0(), r = new vB();
    return new OB().setQualityTester(A).setVideoEncoder(o).setVideoProcessor(r).setCameraHandler(n).setCustomEvent(t).build();
  }
}
function UB(i, n) {
  const { facingMode: t = Fr.FRONT, isVideoCaptureEnabled: e } = n ?? {}, A = WA(null), [o, r] = EA(), [g, a] = EA(), { handleError: I, setIsCameraReady: c } = GA(), s = Ie((E) => {
    a((x) => bc(E, x));
  }, []);
  j(() => {
    if (!A.current) {
      I(new m("Something went wrong during video initialization"));
      return;
    }
    const E = new wB(A.current), x = new uB(), B = new Xs(), l = new DB(), h = {};
    h.cameraHandler = B, h.customEvent = i, h.isVideoCaptureEnabled = e;
    const f = new JB().create(h), p = {};
    p.videoHandler = E, p.cameraHandler = B, p.performanceCheckup = l, p.cameraEvaluator = x, p.videoRecorder = f;
    const k = new yB(p);
    return (async () => {
      try {
        const D = {};
        D.facingMode = t, await k.startFirstVideoStream(D);
      } catch (D) {
        if (D instanceof Error) {
          I(m.fromCameraError(D));
          return;
        }
      }
      r(k), c(!0), s(k.getCameraResolution());
    })(), () => {
      k?.stopStreaming(), c(!1), r(void 0);
    };
  }, [t, I, c, A, s, e, i]);
  const Q = {};
  return Q.cameraService = o, Q.cameraResolution = g, Q.onCameraResolutionChange = s, Q.videoRef = A, Q;
}
function YB({
  cameraConfiguration: i,
  children: n,
  customEvent: t
}) {
  const { cameraResolution: e, cameraService: A, onCameraResolutionChange: o, videoRef: r } = UB(
    t,
    i
  ), g = fA(
    () => ({
      cameraService: A,
      cameraResolution: e,
      onCameraResolutionChange: o,
      videoRef: r
    }),
    [A, e, o, r]
  );
  return /* @__PURE__ */ y(en.Provider, { value: g, children: n });
}
function TB({
  cameraConfiguration: i,
  children: n
}) {
  return /* @__PURE__ */ y(YB, { cameraConfiguration: i, customEvent: ce, children: n });
}
let Ai;
// @__NO_SIDE_EFFECTS__
function t0(i) {
  return {
    lang: i?.lang ?? Ai?.lang,
    message: i?.message,
    abortEarly: i?.abortEarly ?? Ai?.abortEarly,
    abortPipeEarly: i?.abortPipeEarly ?? Ai?.abortPipeEarly
  };
}
let PB;
// @__NO_SIDE_EFFECTS__
function HB(i) {
  return PB?.get(i);
}
let _B;
// @__NO_SIDE_EFFECTS__
function KB(i) {
  return _B?.get(i);
}
let jB;
// @__NO_SIDE_EFFECTS__
function qB(i, n) {
  return jB?.get(i)?.get(n);
}
// @__NO_SIDE_EFFECTS__
function VB(i) {
  const n = typeof i;
  return n === "string" ? `"${i}"` : n === "number" || n === "bigint" || n === "boolean" ? `${i}` : n === "object" || n === "function" ? (i && Object.getPrototypeOf(i)?.constructor?.name) ?? "null" : n;
}
function Zi(i, n, t, e, A) {
  const o = A && "input" in A ? A.input : t.value, r = A?.expected ?? i.expects ?? null, g = A?.received ?? /* @__PURE__ */ VB(o), a = {
    kind: i.kind,
    type: i.type,
    input: o,
    expected: r,
    received: g,
    message: `Invalid ${n}: ${r ? `Expected ${r} but r` : "R"}eceived ${g}`,
    requirement: i.requirement,
    path: A?.path,
    issues: A?.issues,
    lang: e.lang,
    abortEarly: e.abortEarly,
    abortPipeEarly: e.abortPipeEarly
  }, I = i.kind === "schema", c = A?.message ?? i.message ?? /* @__PURE__ */ qB(i.reference, a.lang) ?? (I ? /* @__PURE__ */ KB(a.lang) : null) ?? e.message ?? /* @__PURE__ */ HB(a.lang);
  c !== void 0 && (a.message = typeof c == "function" ? c(a) : c), I && (t.typed = !1), t.issues ? t.issues.push(a) : t.issues = [a];
}
// @__NO_SIDE_EFFECTS__
function o0(i) {
  return {
    version: 1,
    vendor: "valibot",
    validate(n) {
      return i["~run"]({ value: n }, /* @__PURE__ */ t0());
    }
  };
}
var ZB = class extends Error {
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
function zB(i, n, t) {
  return typeof i.fallback == "function" ? i.fallback(n, t) : i.fallback;
}
// @__NO_SIDE_EFFECTS__
function XB(i, n, t) {
  return typeof i.default == "function" ? i.default(n, t) : i.default;
}
// @__NO_SIDE_EFFECTS__
function zi(i) {
  return {
    kind: "schema",
    type: "function",
    reference: zi,
    expects: "Function",
    async: !1,
    message: i,
    get "~standard"() {
      return /* @__PURE__ */ o0(this);
    },
    "~run"(n, t) {
      return typeof n.value == "function" ? n.typed = !0 : Zi(this, "type", n, t), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function n0(i, n) {
  return {
    kind: "schema",
    type: "object",
    reference: n0,
    expects: "Object",
    async: !1,
    entries: i,
    message: n,
    get "~standard"() {
      return /* @__PURE__ */ o0(this);
    },
    "~run"(t, e) {
      const A = t.value;
      if (A && typeof A == "object") {
        t.typed = !0, t.value = {};
        for (const o in this.entries) {
          const r = this.entries[o];
          if (o in A || (r.type === "exact_optional" || r.type === "optional" || r.type === "nullish") && r.default !== void 0) {
            const g = o in A ? A[o] : /* @__PURE__ */ XB(r), a = r["~run"]({ value: g }, e);
            if (a.issues) {
              const I = {
                type: "object",
                origin: "value",
                input: A,
                key: o,
                value: g
              };
              for (const c of a.issues)
                c.path ? c.path.unshift(I) : c.path = [I], t.issues?.push(c);
              if (t.issues || (t.issues = a.issues), e.abortEarly) {
                t.typed = !1;
                break;
              }
            }
            a.typed || (t.typed = !1), t.value[o] = a.value;
          } else if (r.fallback !== void 0) t.value[o] = /* @__PURE__ */ zB(r);
          else if (r.type !== "exact_optional" && r.type !== "optional" && r.type !== "nullish" && (Zi(this, "key", t, e, {
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
      } else Zi(this, "type", t, e);
      return t;
    }
  };
}
function $B(i, n, t) {
  const e = i["~run"]({ value: n }, /* @__PURE__ */ t0(t));
  if (e.issues) throw new ZB(e.issues);
  return e.value;
}
function AQ(i, n) {
  try {
    $B(n, i);
  } catch (e) {
    throw i.onError && e instanceof Error && i.onError(e), new Error("Invalid configuration", { cause: e });
  }
  return {
    ...i,
    assetsDirectoryPath: Sc(i.assetsDirectoryPath)
  };
}
function eQ({
  children: i,
  configuration: n,
  validationSchema: t
}) {
  const e = fA(() => AQ(n, t), [n, t]);
  return /* @__PURE__ */ y(Dr.Provider, { value: e, children: i });
}
function tQ({
  children: i,
  configuration: n
}) {
  return /* @__PURE__ */ y(eQ, { configuration: n, validationSchema: /* @__PURE__ */ n0({
    onComplete: /* @__PURE__ */ zi("On complete must be a function"),
    onError: /* @__PURE__ */ zi("On error must be a function")
  }), children: i });
}
const cn = fe(void 0);
cn.displayName = "ControllerContext";
function i0() {
  const i = te(
    cn
  );
  if (i === void 0)
    throw new Error(`${cn.displayName} must be used within a ControllerProvider`);
  return i;
}
function oQ({ children: i, controller: n }) {
  const t = fA(
    () => ({
      controller: n
    }),
    [n]
  );
  return /* @__PURE__ */ y(cn.Provider, { value: t, children: i });
}
const No = {};
No.ON_COMPLETE = "smile-auto-capture:on-complete", No.TIMED_CAPTURE_EXECUTED = "smile-auto-capture:timed-capture-executed", No.DEV = "smile-auto-capture:dev";
const Cn = No, nQ = { ...Cn, ...ce }, r0 = nQ;
const a0 = /* @__PURE__ */ Symbol("Comlink.proxy"), iQ = /* @__PURE__ */ Symbol("Comlink.endpoint"), g0 = /* @__PURE__ */ Symbol("Comlink.releaseProxy"), ei = /* @__PURE__ */ Symbol("Comlink.finalizer"), Ro = /* @__PURE__ */ Symbol("Comlink.thrown"), s0 = (i) => typeof i == "object" && i !== null || typeof i == "function", rQ = {
  canHandle: (i) => s0(i) && i[a0],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return c0(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), B0(i);
  }
}, aQ = {
  canHandle: (i) => s0(i) && Ro in i,
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
}, I0 = /* @__PURE__ */ new Map([
  ["proxy", rQ],
  ["throw", aQ]
]);
function gQ(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function c0(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!gQ(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: g } = Object.assign({ path: [] }, A.data), a = (A.data.argumentList || []).map(_e);
    let I;
    try {
      const c = g.slice(0, -1).reduce((Q, E) => Q[E], i), s = g.reduce((Q, E) => Q[E], i);
      switch (r) {
        case "GET":
          I = s;
          break;
        case "SET":
          c[g.slice(-1)[0]] = _e(A.data.value), I = !0;
          break;
        case "APPLY":
          I = s.apply(c, a);
          break;
        case "CONSTRUCT":
          {
            const Q = new s(...a);
            I = QQ(Q);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: Q, port2: E } = new MessageChannel();
            c0(i, E), I = BQ(Q, [Q]);
          }
          break;
        case "RELEASE":
          I = void 0;
          break;
        default:
          return;
      }
    } catch (c) {
      I = { value: c, [Ro]: 0 };
    }
    Promise.resolve(I).catch((c) => ({ value: c, [Ro]: 0 })).then((c) => {
      const [s, Q] = En(c);
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), Q), r === "RELEASE" && (n.removeEventListener("message", e), C0(n), ei in i && typeof i[ei] == "function" && i[ei]());
    }).catch((c) => {
      const [s, Q] = En({
        value: new TypeError("Unserializable return value"),
        [Ro]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), Q);
    });
  }), n.start && n.start();
}
function sQ(i) {
  return i.constructor.name === "MessagePort";
}
function C0(i) {
  sQ(i) && i.close();
}
function B0(i, n) {
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
  }), Xi(i, t, [], n);
}
function go(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function Q0(i) {
  return st(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    C0(i);
  });
}
const Bn = /* @__PURE__ */ new WeakMap(), Qn = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (Bn.get(i) || 0) - 1;
  Bn.set(i, n), n === 0 && Q0(i);
});
function IQ(i, n) {
  const t = (Bn.get(n) || 0) + 1;
  Bn.set(n, t), Qn && Qn.register(i, n, i);
}
function cQ(i) {
  Qn && Qn.unregister(i);
}
function Xi(i, n, t = [], e = function() {
}) {
  let A = !1;
  const o = new Proxy(e, {
    get(r, g) {
      if (go(A), g === g0)
        return () => {
          cQ(o), Q0(i), n.clear(), A = !0;
        };
      if (g === "then") {
        if (t.length === 0)
          return { then: () => o };
        const a = st(i, n, {
          type: "GET",
          path: t.map((I) => I.toString())
        }).then(_e);
        return a.then.bind(a);
      }
      return Xi(i, n, [...t, g]);
    },
    set(r, g, a) {
      go(A);
      const [I, c] = En(a);
      return st(i, n, {
        type: "SET",
        path: [...t, g].map((s) => s.toString()),
        value: I
      }, c).then(_e);
    },
    apply(r, g, a) {
      go(A);
      const I = t[t.length - 1];
      if (I === iQ)
        return st(i, n, {
          type: "ENDPOINT"
        }).then(_e);
      if (I === "bind")
        return Xi(i, n, t.slice(0, -1));
      const [c, s] = Oa(a);
      return st(i, n, {
        type: "APPLY",
        path: t.map((Q) => Q.toString()),
        argumentList: c
      }, s).then(_e);
    },
    construct(r, g) {
      go(A);
      const [a, I] = Oa(g);
      return st(i, n, {
        type: "CONSTRUCT",
        path: t.map((c) => c.toString()),
        argumentList: a
      }, I).then(_e);
    }
  });
  return IQ(o, i), o;
}
function CQ(i) {
  return Array.prototype.concat.apply([], i);
}
function Oa(i) {
  const n = i.map(En);
  return [n.map((t) => t[0]), CQ(n.map((t) => t[1]))];
}
const E0 = /* @__PURE__ */ new WeakMap();
function BQ(i, n) {
  return E0.set(i, n), i;
}
function QQ(i) {
  return Object.assign(i, { [a0]: !0 });
}
function En(i) {
  for (const [n, t] of I0)
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
    E0.get(i) || []
  ];
}
function _e(i) {
  switch (i.type) {
    case "HANDLER":
      return I0.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function st(i, n, t, e) {
  return new Promise((A) => {
    const o = EQ();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function EQ() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function x0() {
  return Cs();
}
const Wr = fe(void 0);
Wr.displayName = "CommonThresholdsContext";
function xQ() {
  const i = te(Wr);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function d0() {
  return xQ();
}
const $i = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
};
function dQ(i) {
  const n = {};
  n.instruction = i;
  const t = n;
  $i(pi.REQUEST_CAPTURE, t);
}
class lQ {
  isDetectorInitialized;
  assetsDirectoryPath;
  compatibleSamVersion;
  cameraService;
  dispatcher;
  onCaptureData;
  protobuf;
  samVersion;
  currentDetection;
  detections;
  sessionToken;
  analytics;
  transactionCounting;
  constructor(n, t, e, A, o, r, g, a) {
    this.assetsDirectoryPath = n, this.compatibleSamVersion = t, this.cameraService = e, this.protobuf = o, this.analytics = r, this.dispatcher = A, this.sessionToken = g, this.transactionCounting = a, this.isDetectorInitialized = !1, this.onCaptureData = /* @__PURE__ */ new Map();
  }
  async init() {
    this.verifyEnvironment(), await this.initDetector(this.assetsDirectoryPath);
  }
  destroy() {
    this.detector.terminateSamModule();
  }
  verifyEnvironment() {
    Kt() && this.handleEnvironmentNotSupported();
  }
  async initDetector(n) {
    await this.detector.initSamModule(location.href, n);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  collectOnCaptureData(n) {
    if (!this.currentDetection) throw new m("Detection not initialized");
    this.onCaptureData.set(this.currentDetection.name, n);
  }
  transitionToDetection(n) {
    const t = this.currentDetection?.name, e = this.detections?.[n];
    if (!e) throw new m("Detection " + n + " not found");
    if (!this.allowedDetectionTransitions[t]?.includes(n)) throw new m("Illegal detection transition: " + t + " -> " + n);
    this.setCurrentDetection(e);
  }
  runDetectionLoop() {
    if (!this.currentDetection) throw new m("Detection not initialized");
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
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new m("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = n;
  }
  handleEnvironmentNotSupported() {
    yr.warn(`
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
    return "" + t.replace(ts, "") + n;
  }
}
const Mn = 74 + -2 * 1338 + 2602 + 0.5, l0 = {};
l0.min = 0.4;
const u0 = {};
u0.min = 0.25;
const Ar = {};
Ar.min = 0.2, Ar.max = 0.85;
const h0 = {};
h0.max = 30;
const f0 = {};
f0.min = 0.05;
const er = {};
er.min = 0.16, er.max = 0.2;
const p0 = {};
p0.min = 0.3;
const m0 = {};
m0.max = Mn;
const tr = {};
tr.confidence = p0, tr.status = m0;
const Se = {};
Se.confidence = l0, Se.sharpness = u0, Se.brightness = Ar, Se.devicePitchAngle = h0, Se.edgeDistanceToImageShorterSideRatio = f0, Se.size = er, Se.mouth = tr;
const y0 = {};
y0.min = 0.4;
const w0 = {};
w0.min = 0.25;
const or = {};
or.min = 0.2, or.max = 0.85;
const D0 = {};
D0.max = 30;
const b0 = {};
b0.min = 0.05;
const nr = {};
nr.min = 0.16, nr.max = 0.2;
const k0 = {};
k0.min = 0.3;
const S0 = {};
S0.max = Mn;
const ir = {};
ir.confidence = k0, ir.status = S0;
const Ge = {};
Ge.confidence = y0, Ge.sharpness = w0, Ge.brightness = or, Ge.devicePitchAngle = D0, Ge.edgeDistanceToImageShorterSideRatio = b0, Ge.size = nr, Ge.mouth = ir;
const rr = {};
rr.MOBILE = Se, rr.DESKTOP = Ge;
const uQ = rr, G0 = -6200 + 8347 * -1 + 14547 + 0.4, N0 = {};
N0.min = 0.4;
const ar = {};
ar.min = 0.16, ar.max = 0.2;
const R0 = {};
R0.min = 0.3;
const F0 = {};
F0.min = G0;
const gr = {};
gr.confidence = R0, gr.status = F0;
const Fo = {};
Fo.confidence = N0, Fo.size = ar, Fo.mouth = gr;
const v0 = {};
v0.min = 0.4;
const sr = {};
sr.min = 0.16, sr.max = 0.2;
const M0 = {};
M0.min = 0.3;
const W0 = {};
W0.min = G0;
const Ir = {};
Ir.confidence = M0, Ir.status = W0;
const vo = {};
vo.confidence = v0, vo.size = sr, vo.mouth = Ir;
const cr = {};
cr.MOBILE = Fo, cr.DESKTOP = vo;
const Ja = cr, xn = 3 * -843 + 5097 + -568, hQ = -2 * 4069 + -51 * 376 + 37314, Ua = 54943 + -39943 * 1, Mo = {};
Mo.timeout = 4e3, Mo.threshold = 0.7, Mo.instructions = ["mouth_score_too_high", "mouth_score_too_low"];
const ti = Mo, L0 = "SAM v1.50.5 for idcards";
class O0 extends lQ {
  detector;
  allowedDetectionTransitions;
  medianScore;
  timedCapture;
  longCapture;
  detectionFactory;
  phaseThresholds;
  timedCaptureExecutedEventListener;
  dispatcher;
  analytics;
  constructor(n, t, e, A, o, r, g, a, I, c, s, Q, E) {
    super(n, L0, t, r, g, s, Q, E), this.detector = e, this.detectionFactory = A, this.phaseThresholds = o, this.dispatcher = r, this.analytics = s;
    const x = { [M.NEUTRAL]: [M.SMILE], [M.SMILE]: [M.SMILE_MANUAL], [M.SMILE_MANUAL]: [] };
    this.allowedDetectionTransitions = x, this.medianScore = a, this.timedCapture = I, this.longCapture = c;
  }
  getDispatcher() {
    return this.dispatcher;
  }
  getAnalytics() {
    return this.analytics;
  }
  async init() {
    await super.init(), this.initTimedCaptureExecutedEventListener();
    const n = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: xn, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds }, type: M.NEUTRAL }), t = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: xn, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds }, type: M.SMILE }), e = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds }, type: M.SMILE_MANUAL }), A = { [M.NEUTRAL]: n, [M.SMILE]: t, [M.SMILE_MANUAL]: e };
    this.setDetections(A), this.setCurrentDetection(this.detections[M.NEUTRAL]), this.runDetectionLoop(), this.longCapture.start(this.getAnalytics());
  }
  reset() {
    super.reset(), this.timedCapture.clear(), this.longCapture.clear(), this.medianScore?.reset(), this.removeTimedCaptureExecutedEventListener();
  }
  initTimedCaptureExecutedEventListener() {
    this.timedCaptureExecutedEventListener = () => {
      this.onTimedCaptureExecuted();
    }, document.addEventListener(Cn.TIMED_CAPTURE_EXECUTED, this.timedCaptureExecutedEventListener);
  }
  removeTimedCaptureExecutedEventListener() {
    this.timedCaptureExecutedEventListener && document.removeEventListener(Cn.TIMED_CAPTURE_EXECUTED, this.timedCaptureExecutedEventListener);
  }
  onTimedCaptureExecuted() {
    this.currentDetection?.stop(), this.transitionToDetection(M.SMILE_MANUAL), this.runDetectionLoop(), dQ(co.FIRST_FRAME);
  }
}
class fQ {
  assetsDirectoryPath;
  cameraService;
  protobuf;
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
    if (!this.assetsDirectoryPath) throw new m("AssetsDirectoryPath is required");
    if (!this.cameraService) throw new m("CameraService is required");
    if (!this.protobuf) throw new m("Protobuf is required");
    if (!this.dispatcher) throw new m("Dispatcher is required");
    if (!this.detector) throw new m("Detector is required");
  }
  reset() {
    return this.assetsDirectoryPath = void 0, this.cameraService = void 0, this.protobuf = void 0, this.analytics = void 0, this.dispatcher = void 0, this.sessionToken = void 0, this.transactionCounting = void 0, this.detector = void 0, this;
  }
}
class pQ extends fQ {
  detectionFactory;
  phaseThresholds;
  medianScore;
  timedCapture;
  longCapture;
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
  setLongCapture(n) {
    return this.longCapture = n, this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.detectionFactory) throw new m("DetectionFactory is required");
    if (!this.medianScore) throw new m("MedianScore is required");
    if (!this.timedCapture) throw new m("TimedCapture is required");
    if (!this.longCapture) throw new m("LongCapture is required");
  }
  reset() {
    return super.reset(), this.detectionFactory = void 0, this;
  }
  build() {
    return this.validateDependencies(), new O0(this.assetsDirectoryPath, this.cameraService, this.detector, this.detectionFactory, this.phaseThresholds, this.dispatcher, this.protobuf, this.medianScore, this.timedCapture, this.longCapture, this.analytics, this.sessionToken, this.transactionCounting);
  }
}
const mQ = "/dot-assets/smile/dot-C53sD7ri.js";
class Xe {
  static _instance;
  lastDetails;
  delayedTime;
  constructor() {
    this.lastDetails = {}, this.delayedTime = 6 * 1014 + 1 * 529 + -6613;
  }
  static getInstance() {
    return !this._instance && (this._instance = new Xe()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 912 + -310 * -19 + -6802;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && $i(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
  dispatchCustomEvent(n, t) {
    $i(n, t);
  }
}
const yQ = () => "prod".toLowerCase() === "dev";
class wQ extends Xe {
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
  dispatchInstructionChangedEvent(n, t = cc) {
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
    if (!yQ() || !n) return;
    const t = {};
    t.candidateSelectionImages = n, this.dispatchCustomEventOnChange(this.events.DEV, t);
  }
}
class DQ extends wQ {
  dispatchTimedCaptureExecuted() {
    this.dispatchCustomEvent(r0.TIMED_CAPTURE_EXECUTED, {});
  }
}
class dn extends Array {
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
    this.length === this.#A && this.splice(-9198 * 1 + -1636 * -5 + 1018, n.length), this.push(...n);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-1 * 2746 + 7547 + 4801 * -1);
  }
}
class bQ {
  wasTriggered = !1;
  timeoutId;
  localStore;
  createLocalStore() {
    return { images: { fps: new dn(-1 * -1052 + 8283 * 1 + 5 * -1861), mouthStatus: new dn(5) }, imageResolution: void 0 };
  }
  constructor() {
    this.localStore = this.createLocalStore();
  }
  addDetectionToStorage(n) {
    this.localStore.images.fps.push(n.detectionDetails.fps), this.localStore.images.mouthStatus.push(n.detectionDetails.processedImage.detection.mouth.status);
    const t = {};
    t.width = n.image.width, t.height = n.image.height, this.localStore.imageResolution = t;
  }
  start(n, t = Ua) {
    this.clear(), this.timeoutId = window.setTimeout(() => {
      this.wasTriggered = !0, this.handleLongCapture(n);
    }, t);
  }
  clear() {
    this.timeoutId !== void 0 && (clearTimeout(this.timeoutId), this.timeoutId = void 0);
  }
  handleLongCapture(n) {
    if (this.wasTriggered) return;
    const t = Ut(this.localStore.images.fps), e = Ut(this.localStore.images.mouthStatus);
    if (this.localStore) {
      const A = {};
      A.durationMs = Ua, A.averageFps = t, A.imageResolution = this.localStore.imageResolution, A.averageExpressionScore = e, n?.trackLongCapture(A);
    }
  }
}
class kQ {
  isCollecting = !0;
  mouthStatuses = [];
  medianScore;
  collectScore(n) {
    if (!this.isCollecting || !n.detectionDetails.processedImage.isInCandidateSelection) return;
    const t = n.detectionDetails.processedImage.detection.mouth.status;
    t < Mn && this.mouthStatuses.push(t);
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
    const t = n.sort((o, r) => o - r), e = Math.floor(t.length / (-5431 + -5433 * -1));
    return t.length % (424 + 1226 * 3 + -4100) === 1 * -8573 + 3971 + -6 * -767 ? (t[e - 1] + t[e]) / 2 : t[e];
  }
}
const SQ = 2e3;
class Ya {
  duration;
  constructor(n) {
    this.duration = n ?? SQ;
  }
  candidateSelectionTime = -3469 + 19 * 414 + 1 * -4397;
  candidateSelectionImages = [];
  isInCandidateSelection() {
    return this.candidateSelectionTime > -48 + 1 * -5024 + 16 * 317;
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
    this.candidateSelectionTime = 0, this.candidateSelectionImages = [];
  }
}
function ln(i) {
  const { height: n, width: t } = Qc(i), e = (i.width - t) / (3042 + 380 * -8), A = (i.height - n) / (-11462 + 1 * 11464), o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function J0(i, n, t) {
  const { height: e, width: A } = t, o = kn(i.width, i.height), r = A - o * n * 2, g = e - o * n * (-8771 + 283 * 31), a = (i.width - r) / (13603 + -1 * 13601), I = (i.height - g) / (-1 * 2522 + -3303 + 1 * 5827), c = {};
  return c.shiftX = a, c.shiftY = I, c.width = r, c.height = g, c;
}
function tt(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
const U0 = (i, n) => {
  const { faceCenter: t, faceSize: e } = i, A = lc(e, n), o = {};
  o.x = t.x, o.y = t.y - A;
  const r = {};
  r.x = t.x + A, r.y = t.y;
  const g = {};
  g.x = t.x, g.y = t.y + A;
  const a = {};
  a.x = t.x - A, a.y = t.y;
  const I = {};
  return I.top = o, I.right = r, I.bottom = g, I.left = a, os(I);
}, Y0 = (i, n, t = wc) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), un = async (i) => Y0(i, -8873 + 501 * -12 + 2995 * 5), GQ = async (i) => Y0(i, 30 * -329 + 3460 + 6510, "image/png"), T0 = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, -3637 + -1299 * -4 + -1559, 8691 + -1 * 8691, t.width, t.height), t;
}, P0 = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(-6953 * -1 + 5019 + -11972, 5181 + -3 * 1727, i.width, i.height);
  return t;
};
async function NQ(i, n) {
  const t = T0(i, n);
  return GQ(t);
}
const H0 = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(n.topLeft.x, n.topLeft.y, n.width, n.height)) : (A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height)), A.stroke());
}, oi = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, g = {};
  g.x = A, g.y = o;
  const a = {};
  a.topLeft = g, a.width = r, a.height = e, a.color = t, H0(i, a, t);
}, Pt = (i, n, t, e = 1338 + 1 * -1633 + 295) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(n.x + e, n.y + e, 2 * -1261 + -7526 + 10055, 794 * 2 + 295 + -1876), A.beginPath());
};
function RQ(i, n) {
  const { bottomRight: t, faceCenter: e, topLeft: A } = n, o = {};
  o.topLeft = A, o.width = t.x - A.x, o.height = t.y - A.y, H0(i, o, "rgba(255, 0, 0, 0.3)", !0), Pt(i, e, "lime");
}
function FQ(i, n, t) {
  const e = U0(n, t);
  Object.values(e).map((A) => Pt(i, A, "orange"));
}
class _0 extends m {
  cause;
  constructor(n) {
    super(n.message), this.name = "ProxyError", this.cause = n, this.logError(n);
  }
  logError(n) {
  }
}
function CA(i, n) {
  i = i - 225;
  const t = hn();
  let e = t[i];
  if (CA.AVIWYI === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let E = 0, x, B, l = 0; B = I.charAt(l++); ~B && (x = E % 4 ? x * 64 + B : B, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        B = c.indexOf(B);
      for (let E = 0, x = s.length; E < x; E++)
        Q += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const a = function(I, c) {
      let s = [], Q = 0, E, x = "";
      I = A(I);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        Q = (Q + s[B] + c.charCodeAt(B % c.length)) % 256, E = s[B], s[B] = s[Q], s[Q] = E;
      B = 0, Q = 0;
      for (let l = 0; l < I.length; l++)
        B = (B + 1) % 256, Q = (Q + s[B]) % 256, E = s[B], s[B] = s[Q], s[Q] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[B] + s[Q]) % 256]);
      return x;
    };
    CA.vJOuAw = a, CA.ELcxZM = {}, CA.AVIWYI = !0;
  }
  const o = t[5095 + 1 * -5095], r = i + o, g = CA.ELcxZM[r];
  return g ? e = g : (CA.bqvnla === void 0 && (CA.bqvnla = !0), e = CA.vJOuAw(e, n), CA.ELcxZM[r] = e), e;
}
(function(i, n) {
  function t(a, I, c, s, Q) {
    return CA(a - -685, s);
  }
  function e(a, I, c, s, Q) {
    return CA(s - 830, c);
  }
  function A(a, I, c, s, Q) {
    return CA(Q - 344, I);
  }
  function o(a, I, c, s, Q) {
    return CA(c - 91, Q);
  }
  const r = i();
  function g(a, I, c, s, Q) {
    return CA(c - -254, s);
  }
  for (; ; )
    try {
      if (-parseInt(o(327, 316, 329, 334, "VZEm")) / 1 + parseInt(g(-10, 2, -12, "VP6#", -18)) / 2 * (parseInt(t(-433, -428, -426, "u(L$", -447)) / 3) + -parseInt(o(335, 323, 320, 317, "g5AQ")) / 4 * (-parseInt(o(348, 346, 342, 348, "Dy*y")) / 5) + parseInt(o(318, 342, 331, 324, "c#IP")) / 6 * (parseInt(o(312, 321, 319, 321, "IpE9")) / 7) + -parseInt(A(568, "IpE9", 579, 578, 577)) / 8 * (parseInt(e(1079, 1080, "hN7g", 1075, 1087)) / 9) + parseInt(g(-36, -14, -23, "c#IP", -10)) / 10 + -parseInt(o(313, 324, 325, 310, "4h3t")) / 11 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(hn, 162085 + -1 * -475857);
function hn() {
  const i = ["fdaData", "iqZdVmomq8kmpCkqWOBdImoj", "s8oAiJXFW7pdJfeo", "W7ddTgZdTwVdO8kxWRj4WPjd", "qmovkKb0W7FdMhOIaa", "WP3cOmkWvmkzW4hdNWBcQqq", "W4pdT8oW", "W4BcMCoi", "xL7cIY7dMSoyWRZcOGBcTmkbruC", "W6uxWQ8nWQRdQ8kSW5ldJYndWRC", "WQNcHSoPW7qLWRRdN8oxW4VcVSoCt19v", "hWNdMeZcLW", "dSk6W6DscNBcGSk3WPBdR3rYca", "bSoBWRlcQCkIj8o7", "iXe7sxi", "WPhcVSkOW6O1zSkkW5ebvapcM3NdSW", "W79LWOVdM8oohqlcTq", "b8o1WPiBErtdKq", "gI/cQ8oip3FcPCksvSkGWR8Kzby", "tmo6WQpcQJz8oW", "dCovo1e", "E3VcJHNdQmkMWOP5dCothmohWQPZ", "iCkXWOufW7C7qvDIA8oWW58", "pstdR1ZcRq", "WPpcV8oLWPX3pCooWQi", "oJ7dNLZcSW", "WQb3W5hcUgiuW5LlW5e", "WQONWP3dSq", "FHNcQHFdHIrw", "W5aEa2zkWP3dRJX9W7Hgnq", "WQ8NWOVdRmol", "W4FdKSkC"];
  return hn = function() {
    return i;
  }, hn();
}
async function vQ(i) {
  function n(g, a, I, c, s) {
    return CA(c - 88, s);
  }
  const t = new Uint8Array(i);
  function e(g, a, I, c, s) {
    return CA(g - -557, c);
  }
  function A(g, a, I, c, s) {
    return CA(c - 260, g);
  }
  function o(g, a, I, c, s) {
    return CA(g - -190, c);
  }
  const r = await window[o(56, 45, 43, "FKUn") + "o"][e(-316, -309, -305, "9B[Z") + "e"][e(-309, -313, -318, "*0Wb") + "t"](A("*0Wb", 494, 490, 490), t);
  return Array[o(53, 53, 50, "FKUn")](new Uint8Array(r))[n(358, 329, 353, 342, "umA7")]((g) => g[n(321, 331, 331, 327, "9B[Z") + o(57, 60, 66, "@!dW")](-9750 + -1 * 3557 + -4441 * -3)[n(299, 331, 319, 315, "7q)h") + o(65, 67, 71, "a2um")](1624 * 1 + 2863 + 1495 * -3, "0"))[A("j7Af", 505, 500, 496)]("");
}
class MQ {
  detectionRecord;
  imagesWithTimestampForDuplicateDetection;
  validationService;
  constructor(n) {
    this.validationService = n, this.imagesWithTimestampForDuplicateDetection = new dn(pc), this.detectionRecord = [];
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / Dc, A = e / (3569 + -7306 * -1 + -1 * 10873), o = n.length / (8066 + -4 * 1127 + -4 * 889), r = n.slice(o - A, o + A), g = await vQ(r), a = {};
    a.imageHash = g, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(n) {
    return { data: P0(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  detect(n, t, e) {
    try {
      return this.detector.detect(n, t, e);
    } catch (A) {
      throw A instanceof Error && A.message.includes("Proxy has been released and is not useable") ? new _0(A) : m.fromError(A);
    }
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = os(n), r = {};
    r.detectedObject = o, r.timestamp = A;
    const g = r, a = this.validationService.validateDetectedObject(o, t);
    if (a.result.get("isPresent")) {
      const I = {};
      I.image = e, I.timestamp = A, this.collectImagesForDuplicateDetection(I);
    }
    return this.detectionRecord.push(g), { detection: o, validationResult: a.result, isValid: a.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class ni extends MQ {
  className = "FaceImageProcessor";
  detector;
  constructor(n, t) {
    super(t), this.detector = n;
  }
  optimizeImageBeforeDetection(n) {
    const t = ln(n), e = T0(n, t);
    return super.optimizeImageBeforeDetection(e);
  }
  async process({ image: n, timestamp: t }) {
    const e = this.optimizeImageBeforeDetection(n), A = {};
    A.height = n.height, A.width = n.width;
    let o = await this.detect(e.data, e.resolution, A);
    o = this.transformDetectionCoordinatesRelativeToFullFrameImage(o, ln(n));
    const r = {};
    return r.detectedObject = o, r.image = n, r.imageData = e.data, r.timestamp = t, this.processDetectedObject(r);
  }
  transformDetectionCoordinatesRelativeToFullFrameImage(n, t) {
    return { ...n, leftEye: { ...n.leftEye, center: tt(n.leftEye.center, t) }, rightEye: { ...n.rightEye, center: tt(n.rightEye.center, t) }, mouth: { ...n.mouth, center: tt(n.mouth.center, t) }, topLeft: tt(n.topLeft, t), bottomRight: tt(n.bottomRight, t), faceCenter: tt(n.faceCenter, t) };
  }
}
class WQ {
  instructionCodes;
  instructionCodeCollector;
  config;
  analytics;
  dispatcher;
  constructor(n, t, e, A) {
    this.instructionCodeCollector = n, this.dispatcher = t, this.config = e, this.analytics = A, this.instructionCodes = new Map(e.instructions.map((o) => [o, !1]));
  }
  get getInstructionCodes() {
    return this.instructionCodes;
  }
  canEscalate(n) {
    const t = this.instructionCodeCollector.get();
    return !this.instructionCodeCollector.hasMaxCapacity || !t.includes(n) ? !1 : t.filter((A) => A === n).length / t.length >= this.config.threshold;
  }
  collect(n) {
    this.instructionCodeCollector.pushWithTimestamp(n);
  }
  isEscalated(n) {
    return this.instructionCodes.get(n) ?? !1;
  }
  escalate() {
    for (const [n, t] of this.instructionCodes.entries())
      !t && this.canEscalate(n) && (this.instructionCodes.set(n, !0), this.dispatcher.dispatchInstructionEscalatedEvent(n), this.analytics?.trackEscalated(n));
  }
  reset() {
    this.instructionCodes.forEach((n, t) => {
      this.instructionCodes.set(t, !1);
    }), this.instructionCodeCollector.clear();
  }
}
class LQ extends Array {
  #A = -1 * -7211 + 11 * 443 + -12084;
  #e = [];
  #t = !1;
  constructor(n) {
    super(), this.#A = n;
  }
  clearAfterTimeout() {
    if (this.#e.length === 0) return;
    const n = Date.now(), t = this.#e.findLastIndex((e) => n - e > this.#A);
    t !== -1 && (this.#t = !0, this.splice(-456 * 5 + 1 * -582 + 2862, t + (-1346 * -1 + 7192 * 1 + -8537)), this.#e.splice(573 * -11 + 6780 + -477, t + 1));
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
    this.splice(0), this.#e.splice(-653 * 1 + -3239 + 3892), this.#t = !1;
  }
}
class K0 {
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
class OQ extends K0 {
  controller;
  constructor(n) {
    super(n), this.controller = n;
  }
  onCapture(n) {
    super.onCapture(n), this.controller.medianScore.stopCollectingAndCalculateMedian(), this.controller.transitionToDetection(M.SMILE), this.controller.timedCapture.start(), this.controller.longCapture.clear(), this.controller.runDetectionLoop();
  }
  onDetection(n) {
    super.onDetection(n), this.controller.medianScore.collectScore(n), this.controller.longCapture.addDetectionToStorage(n);
  }
}
class j0 {
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
  constructor(n, t, e, A, o, r, g) {
    this.name = n, this.cameraService = t, this.imageProcessor = e, this.callbacks = A, this.checkToInstructionCodeMap = o, this.fallbackInstruction = r, this.instructionEscalation = g, this.fpsOfAllImages = new dn(30), this.isRunning = !0;
  }
  async safeIterate() {
    try {
      await this.iterate();
    } catch (n) {
      if (!(n instanceof _0)) throw n;
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
    const e = { ...n, avgFps: ct(Ut(this.fpsOfAllImages)) }, A = {};
    A.detectionDetails = e, A.image = t, this.callbacks.onDetection(A);
  }
  async onCapture(n, t, e) {
    if (!this.captureProcessStartTime) throw new m("Capture process start time is not set");
    if (!this.isRunning) return;
    this.stop();
    const A = { candidateSelectionImages: e, croppedImageWithPosition: await this.getCroppedImageWithPosition(n.image, t), hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), captureProcessTime: this.getDetectionEndTime(this.captureProcessStartTime), averageFps: ct(Ut(this.fpsOfAllImages)), deviceName: await this.cameraService.getDeviceName(), facingMode: this.cameraService.getCameraSettings().facingMode, cameraProperties: await this.cameraService.getCameraProperties(), detectionRecord: this.imageProcessor.detectionRecord, performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), timestamp: n.timestamp }, o = {};
    o.resultImage = n.image, o.detectedObject = t, o.metadata = A, o.timestamp = n.timestamp, this.callbacks.onCapture(o);
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = P0(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), g = await NQ(n, r), a = {};
    a.x = r.shiftX, a.y = r.shiftY;
    const I = a, c = {};
    return c.croppedImage = g, c.topLeftCorner = I, c;
  }
  collectAndEscalate(n) {
    return this.instructionEscalation ? (this.instructionEscalation.collect(n), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(n)) : !1;
  }
  getDetectionDetails(n, t) {
    const e = this.getDetectionEndTime(n.timestamp), A = ct((-547 * 5 + -3622 * 1 + 7357) / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = n.image.width, o.height = n.image.height;
    const r = o, g = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), a = this.getInstructionCode(g[-27 * -309 + 477 * -9 + -4050], t), I = this.collectAndEscalate(a), c = {};
    return c.detection = t.detection, c.instructionCode = a, c.invalidValidators = g, c.isInCandidateSelection = !1, c.isEscalated = I, { processedImage: c, detectionTime: e, fps: A, avgFps: ct(Ut(this.fpsOfAllImages)), resolution: r };
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
    await bi(Math.max(ga.max - n, ga.min));
  }
  setThresholds(n) {
    this.imageProcessor.validationService.setThresholds(n);
  }
  isDetectionRunning() {
    return this.isRunning;
  }
}
class JQ extends j0 {
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
      throw t instanceof m ? t : m.fromError(t);
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
    else throw new m("Something went wrong during capturing an image");
  }
  getInstructionCode(n, t) {
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage?.isValid && t?.isValid ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t?.isValid ? this.lastImage.instructionCode : n ?? this.fallbackInstruction;
  }
  isNewImageBetter(n, t) {
    return t.sharpness > n.sharpness;
  }
}
class q0 {
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
    if (!this.name) throw new m("Name is required");
    if (!this.cameraService) throw new m("CameraService is required");
    if (!this.imageProcessor) throw new m("ImageProcessor is required");
    if (!this.callbacks) throw new m("Callbacks is required");
    if (!this.checkToInstructionCodeMap) throw new m("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new m("FallbackInstruction is required");
  }
}
class V0 extends q0 {
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
    if (super.validateDependencies(), !this.instructionCodeMap) throw new m("instructionCodeMap is required");
    if (!this.candidateSelection) throw new m("candidateSelection is required");
  }
  build() {
    return this.validateDependencies(), new JQ(this.candidateSelection, this.instructionCodeMap, this.name, this.cameraService, this.imageProcessor, this.callbacks, this.checkToInstructionCodeMap, this.fallbackInstruction, this.instructionEscalation);
  }
}
class UQ extends V0 {
}
class Z0 {
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
class z0 {
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
class Ce {
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
const YQ = "isNotDim";
class TQ extends Ce {
  #A;
  constructor(n, t) {
    super(YQ, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const PQ = "isNotSmall";
class X0 extends Ce {
  #A;
  constructor(n, t) {
    super(PQ, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const HQ = "isNotBright";
class _Q extends Ce {
  #A;
  constructor(n, t) {
    super(HQ, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const KQ = "isPresent";
class $0 extends Ce {
  #A;
  constructor(n, t) {
    super(KQ, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const jQ = "isSharp";
class qQ extends Ce {
  #A;
  constructor(n, t) {
    super(jQ, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const VQ = "isMouthPresent";
class AI extends Ce {
  #A;
  constructor(n, t) {
    super(VQ, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const ZQ = "isMouthStatusNotTooHigh";
class zQ extends Ce {
  #A;
  constructor(n, t) {
    super(ZQ, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const XQ = "isNotLarge";
class eI extends Ce {
  #A;
  constructor(n, t) {
    super(XQ, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const $Q = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, AE = (i, n) => Object.values(i).every((t) => $Q(t, n)), eE = "isNotOutOfBounds";
class tE extends Ce {
  #A;
  #e;
  constructor(n, t, e) {
    super(eE, n), this.#A = t, this.#e = e;
  }
  evaluate() {
    const n = J0(this.#e, this.threshold, ln(this.#e)), t = U0(this.#A, this.#e);
    return AE(t, n);
  }
}
class oE extends z0 {
  constructor(n) {
    super("NeutralValidationService", n);
  }
  validateDetectedObject(n, t) {
    const e = this.getThresholds(), A = new Z0([new $0(e.confidence.min, n.confidence), new X0(e.size.min, n.faceSize), new eI(e.size.max, n.faceSize), new qQ(e.sharpness.min, n.sharpness), new TQ(e.brightness.min, n.brightness), new _Q(e.brightness.max, n.brightness), new tE(e.edgeDistanceToImageShorterSideRatio.min, n, t), new AI(e.mouth.confidence.min, n.mouth.confidence), new zQ(e.mouth.status.max, n.mouth.status)]);
    return A.validate(), A;
  }
}
class tI extends K0 {
  controller;
  constructor(n) {
    super(n), this.controller = n;
  }
  async onCapture(n) {
    super.onCapture(n), this.controller.getTransactionCounting()?.trackTransaction(), this.controller.timedCapture.clear();
    const t = await this.controller.getProtobuf().createMessage({ onCaptureData: this.controller.getOnCaptureData(), sessionToken: this.controller.getSessionToken(), video: this.controller.cameraService.videoRecorder?.getRecording() });
    this.dispatchOnCompleteEvent(t), this.controller.getAnalytics()?.trackCaptureProcess(this.controller.getOnCaptureData());
  }
  async dispatchOnCompleteEvent(n) {
    const t = this.controller.getOnCaptureData(), e = t.get(M.NEUTRAL), A = t.get(M.SMILE) ?? t.get(M.SMILE_MANUAL);
    if (!e || !A) throw new m("Incomplete onCapture data for smile liveness");
    const { detectedObject: o, resultImage: r } = e, { detectedObject: g, resultImage: a } = A, I = {};
    I.width = r.width, I.height = r.height;
    const c = I, s = await un(r), Q = await un(a), E = {};
    E.detection = o, E.imageResolution = c;
    const x = {};
    x.data = E, x.image = s;
    const B = x, l = {};
    l.detection = g, l.imageResolution = c;
    const h = {};
    h.data = l, h.image = Q;
    const f = h, p = {};
    p.neutralPhaseImageWithMetadata = B, p.smilePhaseImageWithMetadata = f;
    const k = p;
    this.controller.getDispatcher().dispatchOnCompleteEvent(k, n);
  }
  onDetection(n) {
    super.onDetection(n);
  }
}
class nE extends tI {
}
class iE extends V0 {
}
const rE = "isMouthStatusNotTooLow";
class aE extends Ce {
  #A;
  constructor(n, t) {
    super(rE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
class Ta extends z0 {
  controller;
  constructor(n, t) {
    super("SmileValidationService", n), this.controller = t;
  }
  getMouthStatusThreshold(n) {
    const t = this.controller.medianScore.median;
    return n.mouth.status.min + (t ?? Mn);
  }
  validateDetectedObject(n) {
    const t = this.getThresholds(), e = new Z0([new $0(t.confidence.min, n.confidence), new AI(t.mouth.confidence.min, n.mouth.confidence), new X0(t.size.min, n.faceSize), new eI(t.size.max, n.faceSize), new aE(this.getMouthStatusThreshold(t), n.mouth.status)]);
    return e.validate(), e;
  }
}
class gE extends tI {
}
class sE extends j0 {
  #A;
  #e;
  constructor(...n) {
    super(...n), this.#A = void 0, this.#e = void 0, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(n) {
    return n.detail?.["instruction"] ? Object.values(co).includes(n.detail?.["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    this.#e = (n) => {
      this.isRequestCaptureEventValid(n) && (this.#A = n.detail?.["instruction"]);
    }, document.addEventListener(pi.REQUEST_CAPTURE, this.#e);
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
    return this.#A ? this.#A === co.FIRST_FRAME ? !0 : this.#A === co.FIRST_VALID_FRAME ? n.isValid : !1 : !1;
  }
  async processTakenPhoto(n) {
    try {
      return await this.imageProcessor.process(n);
    } catch (t) {
      throw t instanceof m ? t : m.fromError(t);
    }
  }
  async onCaptureDone(n, t) {
    await this.onCapture(n, t), this.#A = void 0;
  }
  stop() {
    super.stop(), this.#e && document.removeEventListener(pi.REQUEST_CAPTURE, this.#e);
  }
}
class IE extends q0 {
  build() {
    return this.validateDependencies(), new sE(this.name, this.cameraService, this.imageProcessor, this.callbacks, this.checkToInstructionCodeMap, this.fallbackInstruction, this.instructionEscalation);
  }
}
class cE extends IE {
}
class CE {
  createDetection({ params: n, type: t }) {
    const { cameraService: e, candidateSelectionDuration: A, controller: o, detector: r, phaseThresholds: g } = n;
    switch (t) {
      case M.SMILE:
        return this.createSmileDetection(o, r, e, g, A);
      case M.NEUTRAL:
        return this.createNeutralDetection(o, r, e, g, A);
      case M.SMILE_MANUAL:
        return this.createSmileManualDetection(o, r, e, g);
      default:
        throw new Error("Unknown phase: " + t);
    }
  }
  createNeutralDetection(n, t, e, A, o = xn) {
    const r = new UQ(), g = new oE(A[M.NEUTRAL]), a = new OQ(n), I = new ni(t, g), c = new Ya(o), s = this.createInstructionEscalation(n);
    return r.setName(M.NEUTRAL), r.setCandidateSelection(c), r.setCameraService(e), r.setCallbacks(a), r.setCheckToInstructionCodeMap(Yn), r.setFallbackInstruction(rA.FACE_NOT_PRESENT), r.setInstructionCodeMap(rA), r.setInstructionEscalation(s), r.setImageProcessor(I), r.build();
  }
  createSmileDetection(n, t, e, A, o = xn) {
    const r = new iE(), g = new Ta(A[M.SMILE], n), a = new nE(n), I = new ni(t, g), c = new Ya(o), s = this.createInstructionEscalation(n);
    return r.setName(M.SMILE), r.setCandidateSelection(c), r.setCameraService(e), r.setCallbacks(a), r.setCheckToInstructionCodeMap(Yn), r.setFallbackInstruction(rA.FACE_NOT_PRESENT), r.setInstructionEscalation(s), r.setInstructionCodeMap(rA), r.setImageProcessor(I), r.build();
  }
  createSmileManualDetection(n, t, e, A) {
    const o = new cE(), r = new Ta(A[M.SMILE], n), g = new gE(n), a = new ni(t, r), I = this.createInstructionEscalation(n);
    return o.setName(M.SMILE_MANUAL), o.setCameraService(e), o.setCallbacks(g), o.setCheckToInstructionCodeMap(Yn), o.setFallbackInstruction(rA.FACE_NOT_PRESENT), o.setInstructionEscalation(I), o.setImageProcessor(a), o.build();
  }
  createInstructionEscalation(n) {
    return new WQ(new LQ(ti.timeout), n.getDispatcher(), { threshold: ti.threshold, instructions: ti.instructions }, n.getAnalytics());
  }
}
var ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pa = {}, ii = {}, ri, Ha;
function BE() {
  if (Ha) return ri;
  Ha = 1, ri = i;
  function i(n, t) {
    for (var e = new Array(arguments.length - 1), A = 0, o = 2, r = !0; o < arguments.length; )
      e[A++] = arguments[o++];
    return new Promise(function(g, a) {
      e[A] = function(I) {
        if (r)
          if (r = !1, I)
            a(I);
          else {
            for (var c = new Array(arguments.length - 1), s = 0; s < c.length; )
              c[s++] = arguments[s];
            g.apply(null, c);
          }
      };
      try {
        n.apply(t || null, e);
      } catch (I) {
        r && (r = !1, a(I));
      }
    });
  }
  return ri;
}
var _a = {}, Ka;
function QE() {
  return Ka || (Ka = 1, (function(i) {
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
      for (var I = null, c = [], s = 0, Q = 0, E; g < a; ) {
        var x = r[g++];
        switch (Q) {
          case 0:
            c[s++] = t[x >> 2], E = (x & 3) << 4, Q = 1;
            break;
          case 1:
            c[s++] = t[E | x >> 4], E = (x & 15) << 2, Q = 2;
            break;
          case 2:
            c[s++] = t[E | x >> 6], c[s++] = t[x & 63], Q = 0;
            break;
        }
        s > 8191 && ((I || (I = [])).push(String.fromCharCode.apply(String, c)), s = 0);
      }
      return Q && (c[s++] = t[E], c[s++] = 61, Q === 1 && (c[s++] = 61)), I ? (s && I.push(String.fromCharCode.apply(String, c.slice(0, s))), I.join("")) : String.fromCharCode.apply(String, c.slice(0, s));
    };
    var o = "invalid encoding";
    n.decode = function(r, g, a) {
      for (var I = a, c = 0, s, Q = 0; Q < r.length; ) {
        var E = r.charCodeAt(Q++);
        if (E === 61 && c > 1)
          break;
        if ((E = e[E]) === void 0)
          throw Error(o);
        switch (c) {
          case 0:
            s = E, c = 1;
            break;
          case 1:
            g[a++] = s << 2 | (E & 48) >> 4, s = E, c = 2;
            break;
          case 2:
            g[a++] = (s & 15) << 4 | (E & 60) >> 2, s = E, c = 3;
            break;
          case 3:
            g[a++] = (s & 3) << 6 | E, c = 0;
            break;
        }
      }
      if (c === 1)
        throw Error(o);
      return a - I;
    }, n.test = function(r) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
    };
  })(_a)), _a;
}
var ai, ja;
function EE() {
  if (ja) return ai;
  ja = 1, ai = i;
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
  }, ai;
}
var gi, qa;
function xE() {
  if (qa) return gi;
  qa = 1, gi = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? (function() {
      var r = new Float32Array([-0]), g = new Uint8Array(r.buffer), a = g[3] === 128;
      function I(E, x, B) {
        r[0] = E, x[B] = g[0], x[B + 1] = g[1], x[B + 2] = g[2], x[B + 3] = g[3];
      }
      function c(E, x, B) {
        r[0] = E, x[B] = g[3], x[B + 1] = g[2], x[B + 2] = g[1], x[B + 3] = g[0];
      }
      o.writeFloatLE = a ? I : c, o.writeFloatBE = a ? c : I;
      function s(E, x) {
        return g[0] = E[x], g[1] = E[x + 1], g[2] = E[x + 2], g[3] = E[x + 3], r[0];
      }
      function Q(E, x) {
        return g[3] = E[x], g[2] = E[x + 1], g[1] = E[x + 2], g[0] = E[x + 3], r[0];
      }
      o.readFloatLE = a ? s : Q, o.readFloatBE = a ? Q : s;
    })() : (function() {
      function r(a, I, c, s) {
        var Q = I < 0 ? 1 : 0;
        if (Q && (I = -I), I === 0)
          a(1 / I > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), c, s);
        else if (isNaN(I))
          a(2143289344, c, s);
        else if (I > 34028234663852886e22)
          a((Q << 31 | 2139095040) >>> 0, c, s);
        else if (I < 11754943508222875e-54)
          a((Q << 31 | Math.round(I / 1401298464324817e-60)) >>> 0, c, s);
        else {
          var E = Math.floor(Math.log(I) / Math.LN2), x = Math.round(I * Math.pow(2, -E) * 8388608) & 8388607;
          a((Q << 31 | E + 127 << 23 | x) >>> 0, c, s);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function g(a, I, c) {
        var s = a(I, c), Q = (s >> 31) * 2 + 1, E = s >>> 23 & 255, x = s & 8388607;
        return E === 255 ? x ? NaN : Q * (1 / 0) : E === 0 ? Q * 1401298464324817e-60 * x : Q * Math.pow(2, E - 150) * (x + 8388608);
      }
      o.readFloatLE = g.bind(null, e), o.readFloatBE = g.bind(null, A);
    })(), typeof Float64Array < "u" ? (function() {
      var r = new Float64Array([-0]), g = new Uint8Array(r.buffer), a = g[7] === 128;
      function I(E, x, B) {
        r[0] = E, x[B] = g[0], x[B + 1] = g[1], x[B + 2] = g[2], x[B + 3] = g[3], x[B + 4] = g[4], x[B + 5] = g[5], x[B + 6] = g[6], x[B + 7] = g[7];
      }
      function c(E, x, B) {
        r[0] = E, x[B] = g[7], x[B + 1] = g[6], x[B + 2] = g[5], x[B + 3] = g[4], x[B + 4] = g[3], x[B + 5] = g[2], x[B + 6] = g[1], x[B + 7] = g[0];
      }
      o.writeDoubleLE = a ? I : c, o.writeDoubleBE = a ? c : I;
      function s(E, x) {
        return g[0] = E[x], g[1] = E[x + 1], g[2] = E[x + 2], g[3] = E[x + 3], g[4] = E[x + 4], g[5] = E[x + 5], g[6] = E[x + 6], g[7] = E[x + 7], r[0];
      }
      function Q(E, x) {
        return g[7] = E[x], g[6] = E[x + 1], g[5] = E[x + 2], g[4] = E[x + 3], g[3] = E[x + 4], g[2] = E[x + 5], g[1] = E[x + 6], g[0] = E[x + 7], r[0];
      }
      o.readDoubleLE = a ? s : Q, o.readDoubleBE = a ? Q : s;
    })() : (function() {
      function r(a, I, c, s, Q, E) {
        var x = s < 0 ? 1 : 0;
        if (x && (s = -s), s === 0)
          a(0, Q, E + I), a(1 / s > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), Q, E + c);
        else if (isNaN(s))
          a(0, Q, E + I), a(2146959360, Q, E + c);
        else if (s > 17976931348623157e292)
          a(0, Q, E + I), a((x << 31 | 2146435072) >>> 0, Q, E + c);
        else {
          var B;
          if (s < 22250738585072014e-324)
            B = s / 5e-324, a(B >>> 0, Q, E + I), a((x << 31 | B / 4294967296) >>> 0, Q, E + c);
          else {
            var l = Math.floor(Math.log(s) / Math.LN2);
            l === 1024 && (l = 1023), B = s * Math.pow(2, -l), a(B * 4503599627370496 >>> 0, Q, E + I), a((x << 31 | l + 1023 << 20 | B * 1048576 & 1048575) >>> 0, Q, E + c);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function g(a, I, c, s, Q) {
        var E = a(s, Q + I), x = a(s, Q + c), B = (x >> 31) * 2 + 1, l = x >>> 20 & 2047, h = 4294967296 * (x & 1048575) + E;
        return l === 2047 ? h ? NaN : B * (1 / 0) : l === 0 ? B * 5e-324 * h : B * Math.pow(2, l - 1075) * (h + 4503599627370496);
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
  return gi;
}
function Va(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var si, Za;
function dE() {
  if (Za) return si;
  Za = 1, si = i;
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
  return si;
}
var za = {}, Xa;
function lE() {
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
var Ii, $a;
function uE() {
  if ($a) return Ii;
  $a = 1, Ii = i;
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
  return Ii;
}
var ci, Ag;
function hE() {
  if (Ag) return ci;
  Ag = 1, ci = n;
  var i = $e();
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
  }, ci;
}
var eg;
function $e() {
  return eg || (eg = 1, (function(i) {
    var n = i;
    n.asPromise = BE(), n.base64 = QE(), n.EventEmitter = EE(), n.float = xE(), n.inquire = dE(), n.utf8 = lE(), n.pool = uE(), n.LongBits = hE(), n.isNode = !!(typeof ot < "u" && ot && ot.process && ot.process.versions && ot.process.versions.node), n.global = n.isNode && ot || typeof window < "u" && window || typeof self < "u" && self || ii, n.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  })(ii)), ii;
}
var Ci, tg;
function oI() {
  if (tg) return Ci;
  tg = 1, Ci = a;
  var i = $e(), n, t = i.LongBits, e = i.base64, A = i.utf8;
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
  function c(l, h, f) {
    h[f] = l & 255;
  }
  function s(l, h, f) {
    for (; l > 127; )
      h[f++] = l & 127 | 128, l >>>= 7;
    h[f] = l;
  }
  function Q(l, h) {
    this.len = l, this.next = void 0, this.val = h;
  }
  Q.prototype = Object.create(o.prototype), Q.prototype.fn = s, a.prototype.uint32 = function(l) {
    return this.len += (this.tail = this.tail.next = new Q(
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
    return this._push(c, 1, l ? 1 : 0);
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
  var B = i.Array.prototype.set ? function(l, h, f) {
    h.set(l, f);
  } : function(l, h, f) {
    for (var p = 0; p < l.length; ++p)
      h[f + p] = l[p];
  };
  return a.prototype.bytes = function(l) {
    var h = l.length >>> 0;
    if (!h)
      return this._push(c, 1, 0);
    if (i.isString(l)) {
      var f = a.alloc(h = e.length(l));
      e.decode(l, f, 0), l = f;
    }
    return this.uint32(h)._push(B, h, l);
  }, a.prototype.string = function(l) {
    var h = A.length(l);
    return h ? this.uint32(h)._push(A.write, h, l) : this._push(c, 1, 0);
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
  }, Ci;
}
var Bi, og;
function fE() {
  if (og) return Bi;
  og = 1, Bi = t;
  var i = oI();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = $e();
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
  }, t._configure(), Bi;
}
var Qi, ng;
function nI() {
  if (ng) return Qi;
  ng = 1, Qi = o;
  var i = $e(), n, t = i.LongBits, e = i.utf8;
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
  }, g = function() {
    return i.Buffer ? function(s) {
      return (o.create = function(Q) {
        return i.Buffer.isBuffer(Q) ? new n(Q) : r(Q);
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
  function I(s, Q) {
    return (s[Q - 4] | s[Q - 3] << 8 | s[Q - 2] << 16 | s[Q - 1] << 24) >>> 0;
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
  function c() {
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
    var s = this.uint32(), Q = this.pos, E = this.pos + s;
    if (E > this.len)
      throw A(this, s);
    if (this.pos += s, Array.isArray(this.buf))
      return this.buf.slice(Q, E);
    if (Q === E) {
      var x = i.Buffer;
      return x ? x.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, Q, E);
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
    var Q = i.Long ? "toLong" : (
      /* istanbul ignore next */
      "toNumber"
    );
    i.merge(o.prototype, {
      int64: function() {
        return a.call(this)[Q](!1);
      },
      uint64: function() {
        return a.call(this)[Q](!0);
      },
      sint64: function() {
        return a.call(this).zzDecode()[Q](!1);
      },
      fixed64: function() {
        return c.call(this)[Q](!0);
      },
      sfixed64: function() {
        return c.call(this)[Q](!1);
      }
    });
  }, Qi;
}
var Ei, ig;
function pE() {
  if (ig) return Ei;
  ig = 1, Ei = t;
  var i = nI();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = $e();
  function t(e) {
    i.call(this, e);
  }
  return t._configure = function() {
    n.Buffer && (t.prototype._slice = n.Buffer.prototype.slice);
  }, t.prototype.string = function() {
    var e = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
  }, t._configure(), Ei;
}
var rg = {}, xi, ag;
function mE() {
  if (ag) return xi;
  ag = 1, xi = n;
  var i = $e();
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
        function(I, c) {
          if (I)
            return a.emit("error", I, e), g(I);
          if (c === null) {
            a.end(
              /* endedByRPC */
              !0
            );
            return;
          }
          if (!(c instanceof o))
            try {
              c = o[a.responseDelimited ? "decodeDelimited" : "decode"](c);
            } catch (s) {
              return a.emit("error", s, e), g(s);
            }
          return a.emit("data", c, e), g(null, c);
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
  }, xi;
}
var gg;
function yE() {
  return gg || (gg = 1, (function(i) {
    var n = i;
    n.Service = mE();
  })(rg)), rg;
}
var sg, Ig;
function wE() {
  return Ig || (Ig = 1, sg = {}), sg;
}
var cg;
function DE() {
  return cg || (cg = 1, (function(i) {
    var n = i;
    n.build = "minimal", n.Writer = oI(), n.BufferWriter = fE(), n.Reader = nI(), n.BufferReader = pE(), n.util = $e(), n.rpc = yE(), n.roots = wE(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  })(Pa)), Pa;
}
var Cg, Bg;
function bE() {
  return Bg || (Bg = 1, Cg = DE()), Cg;
}
var S = bE();
const u = S.Reader, G = S.Writer, d = S.util, C = S.roots.default || (S.roots.default = {}), Te = C.dot = (() => {
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
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.Content();
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
      if (t instanceof C.dot.Content)
        return t;
      let e = new C.dot.Content();
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
            C.dot.Image.encode(A.images[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && C.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && C.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.images && a.images.length || (a.images = []), a.images.push(C.dot.Image.decode(A, A.uint32()));
              break;
            }
            case 3: {
              a.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
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
            let r = C.dot.Image.verify(A.images[o]);
            if (r)
              return "images." + r;
          }
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = C.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = C.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.MagnifEyeLivenessContent)
          return A;
        let o = new C.dot.v4.MagnifEyeLivenessContent();
        if (A.images) {
          if (!Array.isArray(A.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          o.images = [];
          for (let r = 0; r < A.images.length; ++r) {
            if (typeof A.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            o.images[r] = C.dot.Image.fromObject(A.images[r]);
          }
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.video: object expected");
          o.video = C.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          o.metadata = C.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.images = []), o.defaults && (r.metadata = null), A.images && A.images.length) {
          r.images = [];
          for (let g = 0; g < A.images.length; ++g)
            r.images[g] = C.dot.Image.toObject(A.images[g], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = C.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && C.dot.v4.WebMetadata.encode(A.web, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && C.dot.v4.AndroidMetadata.encode(A.android, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && C.dot.v4.IosMetadata.encode(A.ios, o.uint32(
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.Metadata();
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
              a.web = C.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.android = C.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.ios = C.dot.v4.IosMetadata.decode(A, A.uint32());
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
            let r = C.dot.v4.WebMetadata.verify(A.web);
            if (r)
              return "web." + r;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = C.dot.v4.AndroidMetadata.verify(A.android);
            if (r)
              return "android." + r;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = C.dot.v4.IosMetadata.verify(A.ios);
            if (r)
              return "ios." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.Metadata)
          return A;
        let o = new C.dot.v4.Metadata();
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
          o.web = C.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          o.android = C.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          o.ios = C.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.platform = o.enums === String ? "WEB" : 0, r.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (r.platform = o.enums === String ? C.dot.Platform[A.platform] === void 0 ? A.platform : C.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (r.web = C.dot.v4.WebMetadata.toObject(A.web, o), o.oneofs && (r.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (r.android = C.dot.v4.AndroidMetadata.toObject(A.android, o), o.oneofs && (r.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (r.ios = C.dot.v4.IosMetadata.toObject(A.ios, o), o.oneofs && (r.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (r.sessionToken = A.sessionToken, o.oneofs && (r._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (r.componentVersion = A.componentVersion), r;
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
      t.prototype.supportedAbis = d.emptyArray, t.prototype.device = null, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = d.emptyArray, t.prototype.digestsWithTimestamp = d.emptyArray, t.prototype.dynamicCameraFrameProperties = d.emptyObject, t.prototype.tamperingIndicators = null, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null;
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
            ).string(r[g]), C.dot.Int32List.encode(A.dynamicCameraFrameProperties[r[g]], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r)
            C.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && C.dot.v4.AndroidCamera.encode(A.camera, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && C.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.tamperingIndicators != null && Object.hasOwnProperty.call(A, "tamperingIndicators") && o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).bytes(A.tamperingIndicators), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && C.dot.v4.Yuv420Image.encode(A.croppedYuv420Image, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && C.dot.v4.Yuv420ImageCrop.encode(A.yuv420ImageCrop, o.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.AndroidMetadata(), I, c;
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
              a.camera = C.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = C.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(C.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.dynamicCameraFrameProperties === d.emptyObject && (a.dynamicCameraFrameProperties = {});
              let Q = A.uint32() + A.pos;
              for (I = "", c = null; A.pos < Q; ) {
                let E = A.uint32();
                switch (E >>> 3) {
                  case 1:
                    I = A.string();
                    break;
                  case 2:
                    c = C.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(E & 7);
                    break;
                }
              }
              a.dynamicCameraFrameProperties[I] = c;
              break;
            }
            case 8: {
              a.tamperingIndicators = A.bytes();
              break;
            }
            case 9: {
              a.croppedYuv420Image = C.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            case 10: {
              a.yuv420ImageCrop = C.dot.v4.Yuv420ImageCrop.decode(A, A.uint32());
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
          let o = C.dot.v4.AndroidCamera.verify(A.camera);
          if (o)
            return "camera." + o;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let o = C.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
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
            let r = C.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[o]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!d.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(A.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let g = C.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (g)
              return "dynamicCameraFrameProperties." + g;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || d.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let o = C.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (o)
            return "croppedYuv420Image." + o;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let o = C.dot.v4.Yuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (o)
            return "yuv420ImageCrop." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.AndroidMetadata)
          return A;
        let o = new C.dot.v4.AndroidMetadata();
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
          o.camera = C.dot.v4.AndroidCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.AndroidMetadata.detectionNormalizedRectangle: object expected");
          o.detectionNormalizedRectangle = C.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
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
            o.digestsWithTimestamp[r] = C.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          o.dynamicCameraFrameProperties = {};
          for (let r = Object.keys(A.dynamicCameraFrameProperties), g = 0; g < r.length; ++g) {
            if (typeof A.dynamicCameraFrameProperties[r[g]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[r[g]] = C.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[r[g]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? d.base64.decode(A.tamperingIndicators, o.tamperingIndicators = d.newBuffer(d.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (o.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          o.croppedYuv420Image = C.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.AndroidMetadata.yuv420ImageCrop: object expected");
          o.yuv420ImageCrop = C.dot.v4.Yuv420ImageCrop.fromObject(A.yuv420ImageCrop);
        }
        return o;
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
            r.dynamicCameraFrameProperties[g[a]] = C.dot.Int32List.toObject(A.dynamicCameraFrameProperties[g[a]], o);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            r.digestsWithTimestamp[a] = C.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = C.dot.v4.AndroidCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = C.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (r.tamperingIndicators = o.bytes === String ? d.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : o.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, o.oneofs && (r._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = C.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = C.dot.v4.Yuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
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
        return A || (A = G.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && C.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.AndroidCamera();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.resolution = C.dot.ImageSize.decode(e, e.uint32());
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
          let A = C.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !d.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.AndroidCamera)
          return e;
        let A = new C.dot.v4.AndroidCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.AndroidCamera.resolution: object expected");
          A.resolution = C.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.resolution = null, o.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (o.resolution = C.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (o.rotationDegrees = e.rotationDegrees), o;
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
        return A || (A = G.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && C.dot.ImageSize.encode(e.size, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.Yuv420Image();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.size = C.dot.ImageSize.decode(e, e.uint32());
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
          let A = C.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || d.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || d.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || d.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.Yuv420Image)
          return e;
        let A = new C.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = C.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? d.base64.decode(e.yPlane, A.yPlane = d.newBuffer(d.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? d.base64.decode(e.uPlane, A.uPlane = d.newBuffer(d.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? d.base64.decode(e.vPlane, A.vPlane = d.newBuffer(d.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = d.newBuffer(o.yPlane))), A.bytes === String ? o.uPlane = "" : (o.uPlane = [], A.bytes !== Array && (o.uPlane = d.newBuffer(o.uPlane))), A.bytes === String ? o.vPlane = "" : (o.vPlane = [], A.bytes !== Array && (o.vPlane = d.newBuffer(o.vPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = C.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? d.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (o.uPlane = A.bytes === String ? d.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (o.vPlane = A.bytes === String ? d.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), o;
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
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.v4.Yuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && C.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.Yuv420ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = C.dot.v4.Yuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = C.dot.PointInt.decode(e, e.uint32());
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
          let A = C.dot.v4.Yuv420Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = C.dot.PointInt.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.Yuv420ImageCrop)
          return e;
        let A = new C.dot.v4.Yuv420ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.Yuv420ImageCrop.image: object expected");
          A.image = C.dot.v4.Yuv420Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.Yuv420ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = C.dot.PointInt.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = C.dot.v4.Yuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = C.dot.PointInt.toObject(e.topLeftCorner, A)), o;
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
      t.prototype.cameraModelId = "", t.prototype.architectureInfo = d.emptyObject, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = d.emptyArray, t.prototype.digestsWithTimestamp = d.emptyArray, t.prototype.isoValues = d.emptyArray, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null;
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
            C.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && C.dot.v4.IosCamera.encode(A.camera, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && C.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && C.dot.v4.IosYuv420Image.encode(A.croppedYuv420Image, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && C.dot.v4.IosYuv420ImageCrop.encode(A.yuv420ImageCrop, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.IosMetadata(), I, c;
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
              let Q = A.uint32() + A.pos;
              for (I = "", c = !1; A.pos < Q; ) {
                let E = A.uint32();
                switch (E >>> 3) {
                  case 1:
                    I = A.string();
                    break;
                  case 2:
                    c = A.bool();
                    break;
                  default:
                    A.skipType(E & 7);
                    break;
                }
              }
              a.architectureInfo[I] = c;
              break;
            }
            case 6: {
              a.camera = C.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = C.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(C.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (s & 7) === 2) {
                let Q = A.uint32() + A.pos;
                for (; A.pos < Q; )
                  a.isoValues.push(A.int32());
              } else
                a.isoValues.push(A.int32());
              break;
            }
            case 8: {
              a.croppedYuv420Image = C.dot.v4.IosYuv420Image.decode(A, A.uint32());
              break;
            }
            case 9: {
              a.yuv420ImageCrop = C.dot.v4.IosYuv420ImageCrop.decode(A, A.uint32());
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
          let o = C.dot.v4.IosCamera.verify(A.camera);
          if (o)
            return "camera." + o;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let o = C.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
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
            let r = C.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[o]);
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
          let o = C.dot.v4.IosYuv420Image.verify(A.croppedYuv420Image);
          if (o)
            return "croppedYuv420Image." + o;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let o = C.dot.v4.IosYuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (o)
            return "yuv420ImageCrop." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.IosMetadata)
          return A;
        let o = new C.dot.v4.IosMetadata();
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
          o.camera = C.dot.v4.IosCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.IosMetadata.detectionNormalizedRectangle: object expected");
          o.detectionNormalizedRectangle = C.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
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
            o.digestsWithTimestamp[r] = C.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
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
          o.croppedYuv420Image = C.dot.v4.IosYuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.IosMetadata.yuv420ImageCrop: object expected");
          o.yuv420ImageCrop = C.dot.v4.IosYuv420ImageCrop.fromObject(A.yuv420ImageCrop);
        }
        return o;
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
            r.digestsWithTimestamp[a] = C.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = C.dot.v4.IosCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = C.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = C.dot.v4.IosYuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = C.dot.v4.IosYuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
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
        return A || (A = G.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && C.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.IosCamera();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.resolution = C.dot.ImageSize.decode(e, e.uint32());
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
          let A = C.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !d.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.IosCamera)
          return e;
        let A = new C.dot.v4.IosCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.IosCamera.resolution: object expected");
          A.resolution = C.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.resolution = null, o.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (o.resolution = C.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (o.rotationDegrees = e.rotationDegrees), o;
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
        return A || (A = G.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && C.dot.ImageSize.encode(e.size, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.IosYuv420Image();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.size = C.dot.ImageSize.decode(e, e.uint32());
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
          let A = C.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || d.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uvPlane != null && e.hasOwnProperty("uvPlane") && !(e.uvPlane && typeof e.uvPlane.length == "number" || d.isString(e.uvPlane)) ? "uvPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.IosYuv420Image)
          return e;
        let A = new C.dot.v4.IosYuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.IosYuv420Image.size: object expected");
          A.size = C.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? d.base64.decode(e.yPlane, A.yPlane = d.newBuffer(d.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uvPlane != null && (typeof e.uvPlane == "string" ? d.base64.decode(e.uvPlane, A.uvPlane = d.newBuffer(d.base64.length(e.uvPlane)), 0) : e.uvPlane.length >= 0 && (A.uvPlane = e.uvPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = d.newBuffer(o.yPlane))), A.bytes === String ? o.uvPlane = "" : (o.uvPlane = [], A.bytes !== Array && (o.uvPlane = d.newBuffer(o.uvPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = C.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? d.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uvPlane != null && e.hasOwnProperty("uvPlane") && (o.uvPlane = A.bytes === String ? d.base64.encode(e.uvPlane, 0, e.uvPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uvPlane) : e.uvPlane), o;
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
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.v4.IosYuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && C.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.IosYuv420ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = C.dot.v4.IosYuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = C.dot.PointInt.decode(e, e.uint32());
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
          let A = C.dot.v4.IosYuv420Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = C.dot.PointInt.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.IosYuv420ImageCrop)
          return e;
        let A = new C.dot.v4.IosYuv420ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.IosYuv420ImageCrop.image: object expected");
          A.image = C.dot.v4.IosYuv420Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.IosYuv420ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = C.dot.PointInt.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = C.dot.v4.IosYuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = C.dot.PointInt.toObject(e.topLeftCorner, A)), o;
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
        if (o || (o = G.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && C.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let r = 0; r < A.availableCameraProperties.length; ++r)
            C.dot.v4.CameraProperties.encode(A.availableCameraProperties[r], o.uint32(
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
            C.dot.v4.DetectedObject.encode(A.detectionRecord[r], o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < A.hashedDetectedImagesWithTimestamp.length; ++r)
            C.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.croppedImage != null && Object.hasOwnProperty.call(A, "croppedImage") && C.dot.Image.encode(A.croppedImage, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.croppedImageWithPosition != null && Object.hasOwnProperty.call(A, "croppedImageWithPosition") && C.dot.v4.ImageCrop.encode(A.croppedImageWithPosition, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.platformDetails != null && Object.hasOwnProperty.call(A, "platformDetails") && C.dot.v4.PlatformDetails.encode(A.platformDetails, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.WebMetadata();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.currentCameraProperties = C.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.availableCameraProperties && a.availableCameraProperties.length || (a.availableCameraProperties = []), a.availableCameraProperties.push(C.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              a.hashedDetectedImages && a.hashedDetectedImages.length || (a.hashedDetectedImages = []), a.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              a.hashedDetectedImagesWithTimestamp && a.hashedDetectedImagesWithTimestamp.length || (a.hashedDetectedImagesWithTimestamp = []), a.hashedDetectedImagesWithTimestamp.push(C.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.detectionRecord && a.detectionRecord.length || (a.detectionRecord = []), a.detectionRecord.push(C.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              a.croppedImage = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.croppedImageWithPosition = C.dot.v4.ImageCrop.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.platformDetails = C.dot.v4.PlatformDetails.decode(A, A.uint32());
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
          let o = C.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (o)
            return "currentCameraProperties." + o;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let o = 0; o < A.availableCameraProperties.length; ++o) {
            let r = C.dot.v4.CameraProperties.verify(A.availableCameraProperties[o]);
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
            let r = C.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[o]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let o = 0; o < A.detectionRecord.length; ++o) {
            let r = C.dot.v4.DetectedObject.verify(A.detectionRecord[o]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        if (A.croppedImage != null && A.hasOwnProperty("croppedImage")) {
          let o = C.dot.Image.verify(A.croppedImage);
          if (o)
            return "croppedImage." + o;
        }
        if (A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition")) {
          let o = C.dot.v4.ImageCrop.verify(A.croppedImageWithPosition);
          if (o)
            return "croppedImageWithPosition." + o;
        }
        if (A.platformDetails != null && A.hasOwnProperty("platformDetails")) {
          let o = C.dot.v4.PlatformDetails.verify(A.platformDetails);
          if (o)
            return "platformDetails." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.WebMetadata)
          return A;
        let o = new C.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          o.currentCameraProperties = C.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          o.availableCameraProperties = [];
          for (let r = 0; r < A.availableCameraProperties.length; ++r) {
            if (typeof A.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            o.availableCameraProperties[r] = C.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[r]);
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
            o.hashedDetectedImagesWithTimestamp[r] = C.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          o.detectionRecord = [];
          for (let r = 0; r < A.detectionRecord.length; ++r) {
            if (typeof A.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            o.detectionRecord[r] = C.dot.v4.DetectedObject.fromObject(A.detectionRecord[r]);
          }
        }
        if (A.croppedImage != null) {
          if (typeof A.croppedImage != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImage: object expected");
          o.croppedImage = C.dot.Image.fromObject(A.croppedImage);
        }
        if (A.croppedImageWithPosition != null) {
          if (typeof A.croppedImageWithPosition != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImageWithPosition: object expected");
          o.croppedImageWithPosition = C.dot.v4.ImageCrop.fromObject(A.croppedImageWithPosition);
        }
        if (A.platformDetails != null) {
          if (typeof A.platformDetails != "object")
            throw TypeError(".dot.v4.WebMetadata.platformDetails: object expected");
          o.platformDetails = C.dot.v4.PlatformDetails.fromObject(A.platformDetails);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), o.defaults && (r.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = C.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, o)), A.availableCameraProperties && A.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let g = 0; g < A.availableCameraProperties.length; ++g)
            r.availableCameraProperties[g] = C.dot.v4.CameraProperties.toObject(A.availableCameraProperties[g], o);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let g = 0; g < A.hashedDetectedImages.length; ++g)
            r.hashedDetectedImages[g] = A.hashedDetectedImages[g];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          r.detectionRecord = [];
          for (let g = 0; g < A.detectionRecord.length; ++g)
            r.detectionRecord[g] = C.dot.v4.DetectedObject.toObject(A.detectionRecord[g], o);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let g = 0; g < A.hashedDetectedImagesWithTimestamp.length; ++g)
            r.hashedDetectedImagesWithTimestamp[g] = C.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[g], o);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (r.croppedImage = C.dot.Image.toObject(A.croppedImage, o), o.oneofs && (r._croppedImage = "croppedImage")), A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition") && (r.croppedImageWithPosition = C.dot.v4.ImageCrop.toObject(A.croppedImageWithPosition, o), o.oneofs && (r._croppedImageWithPosition = "croppedImageWithPosition")), A.platformDetails != null && A.hasOwnProperty("platformDetails") && (r.platformDetails = C.dot.v4.PlatformDetails.toObject(A.platformDetails, o), o.oneofs && (r._platformDetails = "platformDetails")), r;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.HashedDetectedImageWithTimestamp();
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
        if (e instanceof C.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new C.dot.v4.HashedDetectedImageWithTimestamp();
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.MediaTrackSettings();
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
        if (A instanceof C.dot.v4.MediaTrackSettings)
          return A;
        let o = new C.dot.v4.MediaTrackSettings();
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.ImageBitmap();
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
        if (e instanceof C.dot.v4.ImageBitmap)
          return e;
        let A = new C.dot.v4.ImageBitmap();
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
        return o || (o = G.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && C.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && C.dot.v4.MediaTrackSettings.encode(A.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.CameraProperties();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = C.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = C.dot.v4.MediaTrackSettings.decode(A, A.uint32());
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
          let o = C.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (o)
            return "cameraInitFrameResolution." + o;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let o = C.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (o)
            return "cameraProperties." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.CameraProperties)
          return A;
        let o = new C.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          o.cameraInitFrameResolution = C.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          o.cameraProperties = C.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (r.cameraInitFrameResolution = C.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, o), o.oneofs && (r._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (r.cameraProperties = C.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, o)), r;
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && C.dot.v4.Point.encode(e.faceCenter, A.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && A.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && C.dot.v4.Point.encode(e.bottomLeft, A.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && C.dot.v4.Point.encode(e.bottomRight, A.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && C.dot.v4.Point.encode(e.topLeft, A.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && C.dot.v4.Point.encode(e.topRight, A.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.DetectedObject();
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
              g.faceCenter = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              g.smallestEdge = e.float();
              break;
            }
            case 8: {
              g.bottomLeft = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              g.bottomRight = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              g.topLeft = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              g.topRight = C.dot.v4.Point.decode(e, e.uint32());
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
          let A = C.dot.v4.Point.verify(e.faceCenter);
          if (A)
            return "faceCenter." + A;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let A = C.dot.v4.Point.verify(e.bottomLeft);
          if (A)
            return "bottomLeft." + A;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let A = C.dot.v4.Point.verify(e.bottomRight);
          if (A)
            return "bottomRight." + A;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let A = C.dot.v4.Point.verify(e.topLeft);
          if (A)
            return "topLeft." + A;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let A = C.dot.v4.Point.verify(e.topRight);
          if (A)
            return "topRight." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.DetectedObject)
          return e;
        let A = new C.dot.v4.DetectedObject();
        if (e.brightness != null && (A.brightness = Number(e.brightness)), e.sharpness != null && (A.sharpness = Number(e.sharpness)), e.hotspots != null && (A.hotspots = Number(e.hotspots)), e.confidence != null && (A.confidence = Number(e.confidence)), e.faceSize != null && (A.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          A.faceCenter = C.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (A.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          A.bottomLeft = C.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          A.bottomRight = C.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          A.topLeft = C.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          A.topRight = C.dot.v4.Point.fromObject(e.topRight);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.brightness = 0, o.sharpness = 0, o.hotspots = 0, o.confidence = 0, o.faceSize = 0, o.faceCenter = null, o.smallestEdge = 0, o.bottomLeft = null, o.bottomRight = null, o.topLeft = null, o.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (o.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (o.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (o.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (o.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (o.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (o.faceCenter = C.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (o.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (o.bottomLeft = C.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (o.bottomRight = C.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (o.topLeft = C.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (o.topRight = C.dot.v4.Point.toObject(e.topRight, A)), o;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.Point();
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
        if (e instanceof C.dot.v4.Point)
          return e;
        let A = new C.dot.v4.Point();
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
        return A || (A = G.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && C.dot.v4.Point.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = C.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = C.dot.v4.Point.decode(e, e.uint32());
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
          let A = C.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = C.dot.v4.Point.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.ImageCrop)
          return e;
        let A = new C.dot.v4.ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.ImageCrop.image: object expected");
          A.image = C.dot.Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = C.dot.v4.Point.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (o.image = C.dot.Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (o.topLeftCorner = C.dot.v4.Point.toObject(e.topLeftCorner, A)), o;
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
      t.prototype.userAgent = "", t.prototype.platform = null, t.prototype.platformVersion = null, t.prototype.architecture = null, t.prototype.model = null, t.prototype.browserVersions = d.emptyArray;
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
            C.dot.v4.BrowserVersion.encode(A.browserVersions[r], o.uint32(
              /* id 6, wireType 2 =*/
              50
            ).fork()).ldelim();
        return o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.PlatformDetails();
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
              a.browserVersions && a.browserVersions.length || (a.browserVersions = []), a.browserVersions.push(C.dot.v4.BrowserVersion.decode(A, A.uint32()));
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
            let r = C.dot.v4.BrowserVersion.verify(A.browserVersions[o]);
            if (r)
              return "browserVersions." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.PlatformDetails)
          return A;
        let o = new C.dot.v4.PlatformDetails();
        if (A.userAgent != null && (o.userAgent = String(A.userAgent)), A.platform != null && (o.platform = String(A.platform)), A.platformVersion != null && (o.platformVersion = String(A.platformVersion)), A.architecture != null && (o.architecture = String(A.architecture)), A.model != null && (o.model = String(A.model)), A.browserVersions) {
          if (!Array.isArray(A.browserVersions))
            throw TypeError(".dot.v4.PlatformDetails.browserVersions: array expected");
          o.browserVersions = [];
          for (let r = 0; r < A.browserVersions.length; ++r) {
            if (typeof A.browserVersions[r] != "object")
              throw TypeError(".dot.v4.PlatformDetails.browserVersions: object expected");
            o.browserVersions[r] = C.dot.v4.BrowserVersion.fromObject(A.browserVersions[r]);
          }
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.browserVersions = []), o.defaults && (r.userAgent = ""), A.userAgent != null && A.hasOwnProperty("userAgent") && (r.userAgent = A.userAgent), A.platform != null && A.hasOwnProperty("platform") && (r.platform = A.platform, o.oneofs && (r._platform = "platform")), A.platformVersion != null && A.hasOwnProperty("platformVersion") && (r.platformVersion = A.platformVersion, o.oneofs && (r._platformVersion = "platformVersion")), A.architecture != null && A.hasOwnProperty("architecture") && (r.architecture = A.architecture, o.oneofs && (r._architecture = "architecture")), A.model != null && A.hasOwnProperty("model") && (r.model = A.model, o.oneofs && (r._model = "model")), A.browserVersions && A.browserVersions.length) {
          r.browserVersions = [];
          for (let g = 0; g < A.browserVersions.length; ++g)
            r.browserVersions[g] = C.dot.v4.BrowserVersion.toObject(A.browserVersions[g], o);
        }
        return r;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.BrowserVersion();
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
        if (e instanceof C.dot.v4.BrowserVersion)
          return e;
        let A = new C.dot.v4.BrowserVersion();
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
        return o || (o = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && C.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && C.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && C.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.FaceContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.image = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
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
          let o = C.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = C.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = C.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.FaceContent)
          return A;
        let o = new C.dot.v4.FaceContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          o.image = C.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.FaceContent.video: object expected");
          o.video = C.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          o.metadata = C.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = C.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = C.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        return o || (o = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && C.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && C.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && C.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.DocumentContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.image = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
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
          let o = C.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = C.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = C.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.DocumentContent)
          return A;
        let o = new C.dot.v4.DocumentContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          o.image = C.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.DocumentContent.video: object expected");
          o.video = C.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          o.metadata = C.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = C.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = C.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        return o || (o = G.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && C.dot.v4.DocumentContent.encode(A.documentContent, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && C.dot.v4.FaceContent.encode(A.faceContent, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && C.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && C.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && C.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && C.dot.v4.PalmContent.encode(A.palmContent, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.travelDocumentContent != null && Object.hasOwnProperty.call(A, "travelDocumentContent") && C.dot.v4.TravelDocumentContent.encode(A.travelDocumentContent, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.multiRangeLivenessContent != null && Object.hasOwnProperty.call(A, "multiRangeLivenessContent") && C.dot.v4.MultiRangeLivenessContent.encode(A.multiRangeLivenessContent, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.Blob();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.documentContent = C.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.eyeGazeLivenessContent = C.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.faceContent = C.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.magnifeyeLivenessContent = C.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.smileLivenessContent = C.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.palmContent = C.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.travelDocumentContent = C.dot.v4.TravelDocumentContent.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.multiRangeLivenessContent = C.dot.v4.MultiRangeLivenessContent.decode(A, A.uint32());
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
            let r = C.dot.v4.DocumentContent.verify(A.documentContent);
            if (r)
              return "documentContent." + r;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = C.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (r)
              return "eyeGazeLivenessContent." + r;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = C.dot.v4.FaceContent.verify(A.faceContent);
            if (r)
              return "faceContent." + r;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = C.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (r)
              return "magnifeyeLivenessContent." + r;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = C.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (r)
              return "smileLivenessContent." + r;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = C.dot.v4.PalmContent.verify(A.palmContent);
            if (r)
              return "palmContent." + r;
          }
        }
        if (A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = C.dot.v4.TravelDocumentContent.verify(A.travelDocumentContent);
            if (r)
              return "travelDocumentContent." + r;
          }
        }
        if (A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = C.dot.v4.MultiRangeLivenessContent.verify(A.multiRangeLivenessContent);
            if (r)
              return "multiRangeLivenessContent." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.Blob)
          return A;
        let o = new C.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          o.documentContent = C.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          o.eyeGazeLivenessContent = C.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          o.faceContent = C.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          o.magnifeyeLivenessContent = C.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          o.smileLivenessContent = C.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          o.palmContent = C.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        if (A.travelDocumentContent != null) {
          if (typeof A.travelDocumentContent != "object")
            throw TypeError(".dot.v4.Blob.travelDocumentContent: object expected");
          o.travelDocumentContent = C.dot.v4.TravelDocumentContent.fromObject(A.travelDocumentContent);
        }
        if (A.multiRangeLivenessContent != null) {
          if (typeof A.multiRangeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.multiRangeLivenessContent: object expected");
          o.multiRangeLivenessContent = C.dot.v4.MultiRangeLivenessContent.fromObject(A.multiRangeLivenessContent);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (r.documentContent = C.dot.v4.DocumentContent.toObject(A.documentContent, o), o.oneofs && (r.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (r.faceContent = C.dot.v4.FaceContent.toObject(A.faceContent, o), o.oneofs && (r.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (r.magnifeyeLivenessContent = C.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, o), o.oneofs && (r.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (r.smileLivenessContent = C.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, o), o.oneofs && (r.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (r.eyeGazeLivenessContent = C.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, o), o.oneofs && (r.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (r.palmContent = C.dot.v4.PalmContent.toObject(A.palmContent, o), o.oneofs && (r.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (r.travelDocumentContent = C.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, o), o.oneofs && (r.blob = "travelDocumentContent")), A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent") && (r.multiRangeLivenessContent = C.dot.v4.MultiRangeLivenessContent.toObject(A.multiRangeLivenessContent, o), o.oneofs && (r.blob = "multiRangeLivenessContent")), r;
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
        return A || (A = G.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && C.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.accessControlProtocolUsed != null && Object.hasOwnProperty.call(e, "accessControlProtocolUsed") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.accessControlProtocolUsed), e.authenticationStatus != null && Object.hasOwnProperty.call(e, "authenticationStatus") && C.dot.v4.AuthenticationStatus.encode(e.authenticationStatus, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && C.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.TravelDocumentContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.ldsMasterFile = C.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              g.authenticationStatus = C.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              g.metadata = C.dot.v4.Metadata.decode(e, e.uint32());
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
          let A = C.dot.v4.LdsMasterFile.verify(e.ldsMasterFile);
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
          let A = C.dot.v4.AuthenticationStatus.verify(e.authenticationStatus);
          if (A)
            return "authenticationStatus." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = C.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.TravelDocumentContent)
          return e;
        let A = new C.dot.v4.TravelDocumentContent();
        if (e.ldsMasterFile != null) {
          if (typeof e.ldsMasterFile != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.ldsMasterFile: object expected");
          A.ldsMasterFile = C.dot.v4.LdsMasterFile.fromObject(e.ldsMasterFile);
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
          A.authenticationStatus = C.dot.v4.AuthenticationStatus.fromObject(e.authenticationStatus);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.metadata: object expected");
          A.metadata = C.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.ldsMasterFile = null, o.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, o.authenticationStatus = null, o.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (o.ldsMasterFile = C.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (o.accessControlProtocolUsed = A.enums === String ? C.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : C.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (o.authenticationStatus = C.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = C.dot.v4.Metadata.toObject(e.metadata, A)), o;
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
        return A || (A = G.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && C.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.LdsMasterFile();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          a >>> 3 === 1 ? g.lds1eMrtdApplication = C.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32()) : e.skipType(a & 7);
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof u || (e = new u(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication")) {
          let A = C.dot.v4.Lds1eMrtdApplication.verify(e.lds1eMrtdApplication);
          if (A)
            return "lds1eMrtdApplication." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.LdsMasterFile)
          return e;
        let A = new C.dot.v4.LdsMasterFile();
        if (e.lds1eMrtdApplication != null) {
          if (typeof e.lds1eMrtdApplication != "object")
            throw TypeError(".dot.v4.LdsMasterFile.lds1eMrtdApplication: object expected");
          A.lds1eMrtdApplication = C.dot.v4.Lds1eMrtdApplication.fromObject(e.lds1eMrtdApplication);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (o.lds1eMrtdApplication = C.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), o;
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
        return o || (o = G.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && C.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.sodDocumentSecurityObject != null && Object.hasOwnProperty.call(A, "sodDocumentSecurityObject") && C.dot.v4.Lds1ElementaryFile.encode(A.sodDocumentSecurityObject, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.dg1MachineReadableZoneInformation != null && Object.hasOwnProperty.call(A, "dg1MachineReadableZoneInformation") && C.dot.v4.Lds1ElementaryFile.encode(A.dg1MachineReadableZoneInformation, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.dg2EncodedIdentificationFeaturesFace != null && Object.hasOwnProperty.call(A, "dg2EncodedIdentificationFeaturesFace") && C.dot.v4.Lds1ElementaryFile.encode(A.dg2EncodedIdentificationFeaturesFace, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.dg3AdditionalIdentificationFeatureFingers != null && Object.hasOwnProperty.call(A, "dg3AdditionalIdentificationFeatureFingers") && C.dot.v4.Lds1ElementaryFile.encode(A.dg3AdditionalIdentificationFeatureFingers, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.dg4AdditionalIdentificationFeatureIrises != null && Object.hasOwnProperty.call(A, "dg4AdditionalIdentificationFeatureIrises") && C.dot.v4.Lds1ElementaryFile.encode(A.dg4AdditionalIdentificationFeatureIrises, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.dg5DisplayedPortrait != null && Object.hasOwnProperty.call(A, "dg5DisplayedPortrait") && C.dot.v4.Lds1ElementaryFile.encode(A.dg5DisplayedPortrait, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.dg7DisplayedSignatureOrUsualMark != null && Object.hasOwnProperty.call(A, "dg7DisplayedSignatureOrUsualMark") && C.dot.v4.Lds1ElementaryFile.encode(A.dg7DisplayedSignatureOrUsualMark, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.dg8DataFeatures != null && Object.hasOwnProperty.call(A, "dg8DataFeatures") && C.dot.v4.Lds1ElementaryFile.encode(A.dg8DataFeatures, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.dg9StructureFeatures != null && Object.hasOwnProperty.call(A, "dg9StructureFeatures") && C.dot.v4.Lds1ElementaryFile.encode(A.dg9StructureFeatures, o.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.dg10SubstanceFeatures != null && Object.hasOwnProperty.call(A, "dg10SubstanceFeatures") && C.dot.v4.Lds1ElementaryFile.encode(A.dg10SubstanceFeatures, o.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A.dg11AdditionalPersonalDetails != null && Object.hasOwnProperty.call(A, "dg11AdditionalPersonalDetails") && C.dot.v4.Lds1ElementaryFile.encode(A.dg11AdditionalPersonalDetails, o.uint32(
          /* id 12, wireType 2 =*/
          98
        ).fork()).ldelim(), A.dg12AdditionalDocumentDetails != null && Object.hasOwnProperty.call(A, "dg12AdditionalDocumentDetails") && C.dot.v4.Lds1ElementaryFile.encode(A.dg12AdditionalDocumentDetails, o.uint32(
          /* id 13, wireType 2 =*/
          106
        ).fork()).ldelim(), A.dg13OptionalDetails != null && Object.hasOwnProperty.call(A, "dg13OptionalDetails") && C.dot.v4.Lds1ElementaryFile.encode(A.dg13OptionalDetails, o.uint32(
          /* id 14, wireType 2 =*/
          114
        ).fork()).ldelim(), A.dg14SecurityOptions != null && Object.hasOwnProperty.call(A, "dg14SecurityOptions") && C.dot.v4.Lds1ElementaryFile.encode(A.dg14SecurityOptions, o.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim(), A.dg15ActiveAuthenticationPublicKeyInfo != null && Object.hasOwnProperty.call(A, "dg15ActiveAuthenticationPublicKeyInfo") && C.dot.v4.Lds1ElementaryFile.encode(A.dg15ActiveAuthenticationPublicKeyInfo, o.uint32(
          /* id 16, wireType 2 =*/
          130
        ).fork()).ldelim(), A.dg16PersonsToNotify != null && Object.hasOwnProperty.call(A, "dg16PersonsToNotify") && C.dot.v4.Lds1ElementaryFile.encode(A.dg16PersonsToNotify, o.uint32(
          /* id 17, wireType 2 =*/
          138
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.comHeaderAndDataGroupPresenceInformation = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.sodDocumentSecurityObject = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.dg1MachineReadableZoneInformation = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.dg2EncodedIdentificationFeaturesFace = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.dg3AdditionalIdentificationFeatureFingers = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.dg4AdditionalIdentificationFeatureIrises = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.dg5DisplayedPortrait = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.dg7DisplayedSignatureOrUsualMark = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              a.dg8DataFeatures = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              a.dg9StructureFeatures = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              a.dg10SubstanceFeatures = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              a.dg11AdditionalPersonalDetails = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              a.dg12AdditionalDocumentDetails = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              a.dg13OptionalDetails = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              a.dg14SecurityOptions = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              a.dg15ActiveAuthenticationPublicKeyInfo = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              a.dg16PersonsToNotify = C.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
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
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.comHeaderAndDataGroupPresenceInformation);
          if (o)
            return "comHeaderAndDataGroupPresenceInformation." + o;
        }
        if (A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.sodDocumentSecurityObject);
          if (o)
            return "sodDocumentSecurityObject." + o;
        }
        if (A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg1MachineReadableZoneInformation);
          if (o)
            return "dg1MachineReadableZoneInformation." + o;
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg2EncodedIdentificationFeaturesFace);
          if (o)
            return "dg2EncodedIdentificationFeaturesFace." + o;
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg3AdditionalIdentificationFeatureFingers);
          if (o)
            return "dg3AdditionalIdentificationFeatureFingers." + o;
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg4AdditionalIdentificationFeatureIrises);
          if (o)
            return "dg4AdditionalIdentificationFeatureIrises." + o;
        }
        if (A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg5DisplayedPortrait);
          if (o)
            return "dg5DisplayedPortrait." + o;
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg7DisplayedSignatureOrUsualMark);
          if (o)
            return "dg7DisplayedSignatureOrUsualMark." + o;
        }
        if (A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg8DataFeatures);
          if (o)
            return "dg8DataFeatures." + o;
        }
        if (A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg9StructureFeatures);
          if (o)
            return "dg9StructureFeatures." + o;
        }
        if (A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg10SubstanceFeatures);
          if (o)
            return "dg10SubstanceFeatures." + o;
        }
        if (A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg11AdditionalPersonalDetails);
          if (o)
            return "dg11AdditionalPersonalDetails." + o;
        }
        if (A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg12AdditionalDocumentDetails);
          if (o)
            return "dg12AdditionalDocumentDetails." + o;
        }
        if (A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg13OptionalDetails);
          if (o)
            return "dg13OptionalDetails." + o;
        }
        if (A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg14SecurityOptions);
          if (o)
            return "dg14SecurityOptions." + o;
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg15ActiveAuthenticationPublicKeyInfo);
          if (o)
            return "dg15ActiveAuthenticationPublicKeyInfo." + o;
        }
        if (A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify")) {
          let o = C.dot.v4.Lds1ElementaryFile.verify(A.dg16PersonsToNotify);
          if (o)
            return "dg16PersonsToNotify." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.Lds1eMrtdApplication)
          return A;
        let o = new C.dot.v4.Lds1eMrtdApplication();
        if (A.comHeaderAndDataGroupPresenceInformation != null) {
          if (typeof A.comHeaderAndDataGroupPresenceInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.comHeaderAndDataGroupPresenceInformation: object expected");
          o.comHeaderAndDataGroupPresenceInformation = C.dot.v4.Lds1ElementaryFile.fromObject(A.comHeaderAndDataGroupPresenceInformation);
        }
        if (A.sodDocumentSecurityObject != null) {
          if (typeof A.sodDocumentSecurityObject != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.sodDocumentSecurityObject: object expected");
          o.sodDocumentSecurityObject = C.dot.v4.Lds1ElementaryFile.fromObject(A.sodDocumentSecurityObject);
        }
        if (A.dg1MachineReadableZoneInformation != null) {
          if (typeof A.dg1MachineReadableZoneInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg1MachineReadableZoneInformation: object expected");
          o.dg1MachineReadableZoneInformation = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg1MachineReadableZoneInformation);
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null) {
          if (typeof A.dg2EncodedIdentificationFeaturesFace != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg2EncodedIdentificationFeaturesFace: object expected");
          o.dg2EncodedIdentificationFeaturesFace = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg2EncodedIdentificationFeaturesFace);
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null) {
          if (typeof A.dg3AdditionalIdentificationFeatureFingers != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg3AdditionalIdentificationFeatureFingers: object expected");
          o.dg3AdditionalIdentificationFeatureFingers = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg3AdditionalIdentificationFeatureFingers);
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null) {
          if (typeof A.dg4AdditionalIdentificationFeatureIrises != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg4AdditionalIdentificationFeatureIrises: object expected");
          o.dg4AdditionalIdentificationFeatureIrises = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg4AdditionalIdentificationFeatureIrises);
        }
        if (A.dg5DisplayedPortrait != null) {
          if (typeof A.dg5DisplayedPortrait != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg5DisplayedPortrait: object expected");
          o.dg5DisplayedPortrait = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg5DisplayedPortrait);
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null) {
          if (typeof A.dg7DisplayedSignatureOrUsualMark != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg7DisplayedSignatureOrUsualMark: object expected");
          o.dg7DisplayedSignatureOrUsualMark = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg7DisplayedSignatureOrUsualMark);
        }
        if (A.dg8DataFeatures != null) {
          if (typeof A.dg8DataFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg8DataFeatures: object expected");
          o.dg8DataFeatures = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg8DataFeatures);
        }
        if (A.dg9StructureFeatures != null) {
          if (typeof A.dg9StructureFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg9StructureFeatures: object expected");
          o.dg9StructureFeatures = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg9StructureFeatures);
        }
        if (A.dg10SubstanceFeatures != null) {
          if (typeof A.dg10SubstanceFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg10SubstanceFeatures: object expected");
          o.dg10SubstanceFeatures = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg10SubstanceFeatures);
        }
        if (A.dg11AdditionalPersonalDetails != null) {
          if (typeof A.dg11AdditionalPersonalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg11AdditionalPersonalDetails: object expected");
          o.dg11AdditionalPersonalDetails = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg11AdditionalPersonalDetails);
        }
        if (A.dg12AdditionalDocumentDetails != null) {
          if (typeof A.dg12AdditionalDocumentDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg12AdditionalDocumentDetails: object expected");
          o.dg12AdditionalDocumentDetails = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg12AdditionalDocumentDetails);
        }
        if (A.dg13OptionalDetails != null) {
          if (typeof A.dg13OptionalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg13OptionalDetails: object expected");
          o.dg13OptionalDetails = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg13OptionalDetails);
        }
        if (A.dg14SecurityOptions != null) {
          if (typeof A.dg14SecurityOptions != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg14SecurityOptions: object expected");
          o.dg14SecurityOptions = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg14SecurityOptions);
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null) {
          if (typeof A.dg15ActiveAuthenticationPublicKeyInfo != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg15ActiveAuthenticationPublicKeyInfo: object expected");
          o.dg15ActiveAuthenticationPublicKeyInfo = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg15ActiveAuthenticationPublicKeyInfo);
        }
        if (A.dg16PersonsToNotify != null) {
          if (typeof A.dg16PersonsToNotify != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg16PersonsToNotify: object expected");
          o.dg16PersonsToNotify = C.dot.v4.Lds1ElementaryFile.fromObject(A.dg16PersonsToNotify);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.comHeaderAndDataGroupPresenceInformation = null, r.sodDocumentSecurityObject = null, r.dg1MachineReadableZoneInformation = null, r.dg2EncodedIdentificationFeaturesFace = null), A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation") && (r.comHeaderAndDataGroupPresenceInformation = C.dot.v4.Lds1ElementaryFile.toObject(A.comHeaderAndDataGroupPresenceInformation, o)), A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject") && (r.sodDocumentSecurityObject = C.dot.v4.Lds1ElementaryFile.toObject(A.sodDocumentSecurityObject, o)), A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation") && (r.dg1MachineReadableZoneInformation = C.dot.v4.Lds1ElementaryFile.toObject(A.dg1MachineReadableZoneInformation, o)), A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace") && (r.dg2EncodedIdentificationFeaturesFace = C.dot.v4.Lds1ElementaryFile.toObject(A.dg2EncodedIdentificationFeaturesFace, o)), A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers") && (r.dg3AdditionalIdentificationFeatureFingers = C.dot.v4.Lds1ElementaryFile.toObject(A.dg3AdditionalIdentificationFeatureFingers, o), o.oneofs && (r._dg3AdditionalIdentificationFeatureFingers = "dg3AdditionalIdentificationFeatureFingers")), A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises") && (r.dg4AdditionalIdentificationFeatureIrises = C.dot.v4.Lds1ElementaryFile.toObject(A.dg4AdditionalIdentificationFeatureIrises, o), o.oneofs && (r._dg4AdditionalIdentificationFeatureIrises = "dg4AdditionalIdentificationFeatureIrises")), A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait") && (r.dg5DisplayedPortrait = C.dot.v4.Lds1ElementaryFile.toObject(A.dg5DisplayedPortrait, o), o.oneofs && (r._dg5DisplayedPortrait = "dg5DisplayedPortrait")), A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark") && (r.dg7DisplayedSignatureOrUsualMark = C.dot.v4.Lds1ElementaryFile.toObject(A.dg7DisplayedSignatureOrUsualMark, o), o.oneofs && (r._dg7DisplayedSignatureOrUsualMark = "dg7DisplayedSignatureOrUsualMark")), A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures") && (r.dg8DataFeatures = C.dot.v4.Lds1ElementaryFile.toObject(A.dg8DataFeatures, o), o.oneofs && (r._dg8DataFeatures = "dg8DataFeatures")), A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures") && (r.dg9StructureFeatures = C.dot.v4.Lds1ElementaryFile.toObject(A.dg9StructureFeatures, o), o.oneofs && (r._dg9StructureFeatures = "dg9StructureFeatures")), A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures") && (r.dg10SubstanceFeatures = C.dot.v4.Lds1ElementaryFile.toObject(A.dg10SubstanceFeatures, o), o.oneofs && (r._dg10SubstanceFeatures = "dg10SubstanceFeatures")), A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails") && (r.dg11AdditionalPersonalDetails = C.dot.v4.Lds1ElementaryFile.toObject(A.dg11AdditionalPersonalDetails, o), o.oneofs && (r._dg11AdditionalPersonalDetails = "dg11AdditionalPersonalDetails")), A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails") && (r.dg12AdditionalDocumentDetails = C.dot.v4.Lds1ElementaryFile.toObject(A.dg12AdditionalDocumentDetails, o), o.oneofs && (r._dg12AdditionalDocumentDetails = "dg12AdditionalDocumentDetails")), A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails") && (r.dg13OptionalDetails = C.dot.v4.Lds1ElementaryFile.toObject(A.dg13OptionalDetails, o), o.oneofs && (r._dg13OptionalDetails = "dg13OptionalDetails")), A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions") && (r.dg14SecurityOptions = C.dot.v4.Lds1ElementaryFile.toObject(A.dg14SecurityOptions, o), o.oneofs && (r._dg14SecurityOptions = "dg14SecurityOptions")), A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo") && (r.dg15ActiveAuthenticationPublicKeyInfo = C.dot.v4.Lds1ElementaryFile.toObject(A.dg15ActiveAuthenticationPublicKeyInfo, o), o.oneofs && (r._dg15ActiveAuthenticationPublicKeyInfo = "dg15ActiveAuthenticationPublicKeyInfo")), A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify") && (r.dg16PersonsToNotify = C.dot.v4.Lds1ElementaryFile.toObject(A.dg16PersonsToNotify, o), o.oneofs && (r._dg16PersonsToNotify = "dg16PersonsToNotify")), r;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.Lds1ElementaryFile();
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
        if (A instanceof C.dot.v4.Lds1ElementaryFile)
          return A;
        let o = new C.dot.v4.Lds1ElementaryFile();
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
        return o.defaults && (r.id = o.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (r.id = o.enums === String ? C.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : C.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (r.bytes = o.bytes === String ? d.base64.encode(A.bytes, 0, A.bytes.length) : o.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, o.oneofs && (r._bytes = "bytes")), r;
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
        return A || (A = G.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && C.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && C.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.AuthenticationStatus();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.data = C.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.chip = C.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
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
          let A = C.dot.v4.DataAuthenticationStatus.verify(e.data);
          if (A)
            return "data." + A;
        }
        if (e.chip != null && e.hasOwnProperty("chip")) {
          let A = C.dot.v4.ChipAuthenticationStatus.verify(e.chip);
          if (A)
            return "chip." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.AuthenticationStatus)
          return e;
        let A = new C.dot.v4.AuthenticationStatus();
        if (e.data != null) {
          if (typeof e.data != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.data: object expected");
          A.data = C.dot.v4.DataAuthenticationStatus.fromObject(e.data);
        }
        if (e.chip != null) {
          if (typeof e.chip != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.chip: object expected");
          A.chip = C.dot.v4.ChipAuthenticationStatus.fromObject(e.chip);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.data = null, o.chip = null), e.data != null && e.hasOwnProperty("data") && (o.data = C.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (o.chip = C.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), o;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.DataAuthenticationStatus();
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
        if (e instanceof C.dot.v4.DataAuthenticationStatus)
          return e;
        let A = new C.dot.v4.DataAuthenticationStatus();
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
        return A.defaults && (o.status = A.enums === String ? "STATUS_UNSPECIFIED" : 0, o.protocol = A.enums === String ? "PROTOCOL_UNSPECIFIED" : 0), e.status != null && e.hasOwnProperty("status") && (o.status = A.enums === String ? C.dot.v4.DataAuthenticationStatus.Status[e.status] === void 0 ? e.status : C.dot.v4.DataAuthenticationStatus.Status[e.status] : e.status), e.protocol != null && e.hasOwnProperty("protocol") && (o.protocol = A.enums === String ? C.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] === void 0 ? e.protocol : C.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] : e.protocol), o;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.ChipAuthenticationStatus();
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
        if (A instanceof C.dot.v4.ChipAuthenticationStatus)
          return A;
        let o = new C.dot.v4.ChipAuthenticationStatus();
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
        return o.defaults && (r.status = o.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (r.status = o.enums === String ? C.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : C.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (r.protocol = o.enums === String ? C.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : C.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, o.oneofs && (r._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (r.activeAuthenticationResponse = o.bytes === String ? d.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : o.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, o.oneofs && (r._activeAuthenticationResponse = "activeAuthenticationResponse")), r;
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
            C.dot.v4.EyeGazeLivenessSegment.encode(A.segments[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && C.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.image != null && Object.hasOwnProperty.call(A, "image") && C.dot.Image.encode(A.image, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && C.dot.Video.encode(A.video, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 3: {
              a.image = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              a.segments && a.segments.length || (a.segments = []), a.segments.push(C.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
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
          let o = C.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let o = 0; o < A.segments.length; ++o) {
            let r = C.dot.v4.EyeGazeLivenessSegment.verify(A.segments[o]);
            if (r)
              return "segments." + r;
          }
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = C.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = C.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.EyeGazeLivenessContent)
          return A;
        let o = new C.dot.v4.EyeGazeLivenessContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.image: object expected");
          o.image = C.dot.Image.fromObject(A.image);
        }
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          o.segments = [];
          for (let r = 0; r < A.segments.length; ++r) {
            if (typeof A.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            o.segments[r] = C.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[r]);
          }
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.video: object expected");
          o.video = C.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          o.metadata = C.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.segments = []), o.defaults && (r.metadata = null), A.segments && A.segments.length) {
          r.segments = [];
          for (let g = 0; g < A.segments.length; ++g)
            r.segments[g] = C.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[g], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(A.metadata, o)), A.image != null && A.hasOwnProperty("image") && (r.image = C.dot.Image.toObject(A.image, o), o.oneofs && (r._image = "image")), A.video != null && A.hasOwnProperty("video") && (r.video = C.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.EyeGazeLivenessSegment();
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
              g.image = C.dot.Image.decode(e, e.uint32());
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
          let A = C.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.EyeGazeLivenessSegment)
          return e;
        let A = new C.dot.v4.EyeGazeLivenessSegment();
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
          A.image = C.dot.Image.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.corner = A.enums === String ? "TOP_LEFT" : 0, o.image = null), e.corner != null && e.hasOwnProperty("corner") && (o.corner = A.enums === String ? C.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : C.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (o.image = C.dot.Image.toObject(e.image, A)), o;
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
            C.dot.v4.MultiRangeLivenessStepResult.encode(A.stepResults[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && C.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && C.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.multiRangeLivenessMetadata != null && Object.hasOwnProperty.call(A, "multiRangeLivenessMetadata") && C.dot.v4.MultiRangeLivenessMetadata.encode(A.multiRangeLivenessMetadata, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.MultiRangeLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.stepResults && a.stepResults.length || (a.stepResults = []), a.stepResults.push(C.dot.v4.MultiRangeLivenessStepResult.decode(A, A.uint32()));
              break;
            }
            case 2: {
              a.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.multiRangeLivenessMetadata = C.dot.v4.MultiRangeLivenessMetadata.decode(A, A.uint32());
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
            let r = C.dot.v4.MultiRangeLivenessStepResult.verify(A.stepResults[o]);
            if (r)
              return "stepResults." + r;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = C.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = C.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata")) {
          let o = C.dot.v4.MultiRangeLivenessMetadata.verify(A.multiRangeLivenessMetadata);
          if (o)
            return "multiRangeLivenessMetadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.MultiRangeLivenessContent)
          return A;
        let o = new C.dot.v4.MultiRangeLivenessContent();
        if (A.stepResults) {
          if (!Array.isArray(A.stepResults))
            throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: array expected");
          o.stepResults = [];
          for (let r = 0; r < A.stepResults.length; ++r) {
            if (typeof A.stepResults[r] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: object expected");
            o.stepResults[r] = C.dot.v4.MultiRangeLivenessStepResult.fromObject(A.stepResults[r]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.metadata: object expected");
          o.metadata = C.dot.v4.Metadata.fromObject(A.metadata);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.video: object expected");
          o.video = C.dot.Video.fromObject(A.video);
        }
        if (A.multiRangeLivenessMetadata != null) {
          if (typeof A.multiRangeLivenessMetadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.multiRangeLivenessMetadata: object expected");
          o.multiRangeLivenessMetadata = C.dot.v4.MultiRangeLivenessMetadata.fromObject(A.multiRangeLivenessMetadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.stepResults = []), o.defaults && (r.metadata = null, r.multiRangeLivenessMetadata = null), A.stepResults && A.stepResults.length) {
          r.stepResults = [];
          for (let g = 0; g < A.stepResults.length; ++g)
            r.stepResults[g] = C.dot.v4.MultiRangeLivenessStepResult.toObject(A.stepResults[g], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = C.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata") && (r.multiRangeLivenessMetadata = C.dot.v4.MultiRangeLivenessMetadata.toObject(A.multiRangeLivenessMetadata, o)), r;
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
        ).int32(e.challengeItem), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.ImageWithTimestamp.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.MultiRangeLivenessStepResult();
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
              g.image = C.dot.ImageWithTimestamp.decode(e, e.uint32());
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
          let A = C.dot.ImageWithTimestamp.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.MultiRangeLivenessStepResult)
          return e;
        let A = new C.dot.v4.MultiRangeLivenessStepResult();
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
          A.image = C.dot.ImageWithTimestamp.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.challengeItem = A.enums === String ? "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_UNSPECIFIED" : 0, o.image = null), e.challengeItem != null && e.hasOwnProperty("challengeItem") && (o.challengeItem = A.enums === String ? C.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] === void 0 ? e.challengeItem : C.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] : e.challengeItem), e.image != null && e.hasOwnProperty("image") && (o.image = C.dot.ImageWithTimestamp.toObject(e.image, A)), o;
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
            C.dot.v4.FaceDetection.encode(e.detections[o], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.MultiRangeLivenessMetadata();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          a >>> 3 === 1 ? (g.detections && g.detections.length || (g.detections = []), g.detections.push(C.dot.v4.FaceDetection.decode(e, e.uint32()))) : e.skipType(a & 7);
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
            let o = C.dot.v4.FaceDetection.verify(e.detections[A]);
            if (o)
              return "detections." + o;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.MultiRangeLivenessMetadata)
          return e;
        let A = new C.dot.v4.MultiRangeLivenessMetadata();
        if (e.detections) {
          if (!Array.isArray(e.detections))
            throw TypeError(".dot.v4.MultiRangeLivenessMetadata.detections: array expected");
          A.detections = [];
          for (let o = 0; o < e.detections.length; ++o) {
            if (typeof e.detections[o] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessMetadata.detections: object expected");
            A.detections[o] = C.dot.v4.FaceDetection.fromObject(e.detections[o]);
          }
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if ((A.arrays || A.defaults) && (o.detections = []), e.detections && e.detections.length) {
          o.detections = [];
          for (let r = 0; r < e.detections.length; ++r)
            o.detections[r] = C.dot.v4.FaceDetection.toObject(e.detections[r], A);
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
        ).uint64(e.timestampMillis), e.position != null && Object.hasOwnProperty.call(e, "position") && C.dot.v4.FaceDetectionPosition.encode(e.position, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof u || (e = u.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.FaceDetection();
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
              g.position = C.dot.v4.FaceDetectionPosition.decode(e, e.uint32());
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
          let A = C.dot.v4.FaceDetectionPosition.verify(e.position);
          if (A)
            return "position." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.FaceDetection)
          return e;
        let A = new C.dot.v4.FaceDetection();
        if (e.timestampMillis != null && (d.Long ? (A.timestampMillis = d.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), e.position != null) {
          if (typeof e.position != "object")
            throw TypeError(".dot.v4.FaceDetection.position: object expected");
          A.position = C.dot.v4.FaceDetectionPosition.fromObject(e.position);
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
        return e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? d.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), e.position != null && e.hasOwnProperty("position") && (o.position = C.dot.v4.FaceDetectionPosition.toObject(e.position, A)), o;
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
        return A || (A = G.create()), e.center != null && Object.hasOwnProperty.call(e, "center") && C.dot.PointDouble.encode(e.center, A.uint32(
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
        let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.v4.FaceDetectionPosition();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.center = C.dot.PointDouble.decode(e, e.uint32());
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
          let A = C.dot.PointDouble.verify(e.center);
          if (A)
            return "center." + A;
        }
        return e.faceSizeToImageShorterSideRatio != null && e.hasOwnProperty("faceSizeToImageShorterSideRatio") && typeof e.faceSizeToImageShorterSideRatio != "number" ? "faceSizeToImageShorterSideRatio: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.FaceDetectionPosition)
          return e;
        let A = new C.dot.v4.FaceDetectionPosition();
        if (e.center != null) {
          if (typeof e.center != "object")
            throw TypeError(".dot.v4.FaceDetectionPosition.center: object expected");
          A.center = C.dot.PointDouble.fromObject(e.center);
        }
        return e.faceSizeToImageShorterSideRatio != null && (A.faceSizeToImageShorterSideRatio = Number(e.faceSizeToImageShorterSideRatio)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.center = null, o.faceSizeToImageShorterSideRatio = 0), e.center != null && e.hasOwnProperty("center") && (o.center = C.dot.PointDouble.toObject(e.center, A)), e.faceSizeToImageShorterSideRatio != null && e.hasOwnProperty("faceSizeToImageShorterSideRatio") && (o.faceSizeToImageShorterSideRatio = A.json && !isFinite(e.faceSizeToImageShorterSideRatio) ? String(e.faceSizeToImageShorterSideRatio) : e.faceSizeToImageShorterSideRatio), o;
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
        return o || (o = G.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && C.dot.Image.encode(A.neutralExpressionFaceImage, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.smileExpressionFaceImage != null && Object.hasOwnProperty.call(A, "smileExpressionFaceImage") && C.dot.Image.encode(A.smileExpressionFaceImage, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && C.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && C.dot.Video.encode(A.video, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.SmileLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.neutralExpressionFaceImage = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.smileExpressionFaceImage = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
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
          let o = C.dot.Image.verify(A.neutralExpressionFaceImage);
          if (o)
            return "neutralExpressionFaceImage." + o;
        }
        if (A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage")) {
          let o = C.dot.Image.verify(A.smileExpressionFaceImage);
          if (o)
            return "smileExpressionFaceImage." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = C.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = C.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.SmileLivenessContent)
          return A;
        let o = new C.dot.v4.SmileLivenessContent();
        if (A.neutralExpressionFaceImage != null) {
          if (typeof A.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          o.neutralExpressionFaceImage = C.dot.Image.fromObject(A.neutralExpressionFaceImage);
        }
        if (A.smileExpressionFaceImage != null) {
          if (typeof A.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          o.smileExpressionFaceImage = C.dot.Image.fromObject(A.smileExpressionFaceImage);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.video: object expected");
          o.video = C.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          o.metadata = C.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = C.dot.Image.toObject(A.neutralExpressionFaceImage, o)), A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = C.dot.Image.toObject(A.smileExpressionFaceImage, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = C.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
        return o || (o = G.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && C.dot.Image.encode(A.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && C.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && C.dot.Video.encode(A.video, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new C.dot.v4.PalmContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.image = C.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = C.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = C.dot.v4.Metadata.decode(A, A.uint32());
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
          let o = C.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let o = C.dot.Video.verify(A.video);
          if (o)
            return "video." + o;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = C.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof C.dot.v4.PalmContent)
          return A;
        let o = new C.dot.v4.PalmContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          o.image = C.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.PalmContent.video: object expected");
          o.video = C.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          o.metadata = C.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = C.dot.Image.toObject(A.image, o)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(A.metadata, o)), A.video != null && A.hasOwnProperty("video") && (r.video = C.dot.Video.toObject(A.video, o), o.oneofs && (r._video = "video")), r;
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
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.Image();
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
      if (t instanceof C.dot.Image)
        return t;
      let e = new C.dot.Image();
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
      return e || (e = G.create()), t.image != null && Object.hasOwnProperty.call(t, "image") && C.dot.Image.encode(t.image, e.uint32(
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
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.ImageWithTimestamp();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.image = C.dot.Image.decode(t, t.uint32());
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
        let e = C.dot.Image.verify(t.image);
        if (e)
          return "image." + e;
      }
      return t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !d.isInteger(t.timestampMillis) && !(t.timestampMillis && d.isInteger(t.timestampMillis.low) && d.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof C.dot.ImageWithTimestamp)
        return t;
      let e = new C.dot.ImageWithTimestamp();
      if (t.image != null) {
        if (typeof t.image != "object")
          throw TypeError(".dot.ImageWithTimestamp.image: object expected");
        e.image = C.dot.Image.fromObject(t.image);
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
      return t.image != null && t.hasOwnProperty("image") && (A.image = C.dot.Image.toObject(t.image, e)), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? d.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
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
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.ImageSize();
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
      if (t instanceof C.dot.ImageSize)
        return t;
      let e = new C.dot.ImageSize();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.Int32List();
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
      if (t instanceof C.dot.Int32List)
        return t;
      let e = new C.dot.Int32List();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.RectangleDouble();
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
      if (t instanceof C.dot.RectangleDouble)
        return t;
      let e = new C.dot.RectangleDouble();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.DigestWithTimestamp();
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
      if (t instanceof C.dot.DigestWithTimestamp)
        return t;
      let e = new C.dot.DigestWithTimestamp();
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
      ).bytes(e.bytes), e.containerMp4 != null && Object.hasOwnProperty.call(e, "containerMp4") && C.dot.VideoContainer.encode(e.containerMp4, A.uint32(
        /* id 2, wireType 2 =*/
        18
      ).fork()).ldelim(), e.streamH264 != null && Object.hasOwnProperty.call(e, "streamH264") && C.dot.VideoStream.encode(e.streamH264, A.uint32(
        /* id 3, wireType 2 =*/
        26
      ).fork()).ldelim(), A;
    }, n.encodeDelimited = function(e, A) {
      return this.encode(e, A).ldelim();
    }, n.decode = function(e, A, o) {
      e instanceof u || (e = u.create(e));
      let r = A === void 0 ? e.len : e.pos + A, g = new C.dot.Video();
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
            g.containerMp4 = C.dot.VideoContainer.decode(e, e.uint32());
            break;
          }
          case 3: {
            g.streamH264 = C.dot.VideoStream.decode(e, e.uint32());
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
          let o = C.dot.VideoContainer.verify(e.containerMp4);
          if (o)
            return "containerMp4." + o;
        }
      }
      if (e.streamH264 != null && e.hasOwnProperty("streamH264")) {
        if (A.content === 1)
          return "content: multiple values";
        A.content = 1;
        {
          let o = C.dot.VideoStream.verify(e.streamH264);
          if (o)
            return "streamH264." + o;
        }
      }
      return null;
    }, n.fromObject = function(e) {
      if (e instanceof C.dot.Video)
        return e;
      let A = new C.dot.Video();
      if (e.bytes != null && (typeof e.bytes == "string" ? d.base64.decode(e.bytes, A.bytes = d.newBuffer(d.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (A.bytes = e.bytes)), e.containerMp4 != null) {
        if (typeof e.containerMp4 != "object")
          throw TypeError(".dot.Video.containerMp4: object expected");
        A.containerMp4 = C.dot.VideoContainer.fromObject(e.containerMp4);
      }
      if (e.streamH264 != null) {
        if (typeof e.streamH264 != "object")
          throw TypeError(".dot.Video.streamH264: object expected");
        A.streamH264 = C.dot.VideoStream.fromObject(e.streamH264);
      }
      return A;
    }, n.toObject = function(e, A) {
      A || (A = {});
      let o = {};
      return e.bytes != null && e.hasOwnProperty("bytes") && (o.bytes = A.bytes === String ? d.base64.encode(e.bytes, 0, e.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes, A.oneofs && (o._bytes = "bytes")), e.containerMp4 != null && e.hasOwnProperty("containerMp4") && (o.containerMp4 = C.dot.VideoContainer.toObject(e.containerMp4, A), A.oneofs && (o.content = "containerMp4")), e.streamH264 != null && e.hasOwnProperty("streamH264") && (o.streamH264 = C.dot.VideoStream.toObject(e.streamH264, A), A.oneofs && (o.content = "streamH264")), o;
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
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.VideoContainer();
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
      if (t instanceof C.dot.VideoContainer)
        return t;
      let e = new C.dot.VideoContainer();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.VideoStream();
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
      if (t instanceof C.dot.VideoStream)
        return t;
      let e = new C.dot.VideoStream();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.PointInt();
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
      if (t instanceof C.dot.PointInt)
        return t;
      let e = new C.dot.PointInt();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new C.dot.PointDouble();
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
      if (t instanceof C.dot.PointDouble)
        return t;
      let e = new C.dot.PointDouble();
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
  function t(g, a, I, c, s) {
    return z(a - 703, g);
  }
  function e(g, a, I, c, s) {
    return z(a - 303, I);
  }
  const A = i();
  function o(g, a, I, c, s) {
    return z(c - 146, g);
  }
  function r(g, a, I, c, s) {
    return z(s - 141, a);
  }
  for (; ; )
    try {
      if (parseInt(e(1106, 1004, "(ihL", 925, 905)) / 1 * (-parseInt(e(889, 965, "k0(t", 888, 1065)) / 2) + -parseInt(o("iSGu", 842, 744, 786, 705)) / 3 + parseInt(t("HDh&", 1208, 1183, 1209, 1308)) / 4 + -parseInt(e(1057, 981, "[AX5", 1020, 868)) / 5 * (-parseInt(e(1042, 982, "^9^k", 1039, 1068)) / 6) + parseInt(t("uYNb", 1202, 1103, 1092, 1249)) / 7 + -parseInt(t(")IS&", 1347, 1322, 1441, 1249)) / 8 * (parseInt(o("IFIW", 801, 824, 715, 754)) / 9) + parseInt(r(687, "JBS%", 651, 577, 633)) / 10 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(fn, -260432 * -3 + -436666 + -125 * -4811);
function z(i, n) {
  i = i - (-3489 + -8408 * 1 + 12377);
  const t = fn();
  let e = t[i];
  if (z.SPJjsZ === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let E = 0, x, B, l = 0; B = I.charAt(l++); ~B && (x = E % 4 ? x * 64 + B : B, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        B = c.indexOf(B);
      for (let E = 0, x = s.length; E < x; E++)
        Q += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const a = function(I, c) {
      let s = [], Q = 0, E, x = "";
      I = A(I);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        Q = (Q + s[B] + c.charCodeAt(B % c.length)) % 256, E = s[B], s[B] = s[Q], s[Q] = E;
      B = 0, Q = 0;
      for (let l = 0; l < I.length; l++)
        B = (B + 1) % 256, Q = (Q + s[B]) % 256, E = s[B], s[B] = s[Q], s[Q] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[B] + s[Q]) % 256]);
      return x;
    };
    z.lMvSXv = a, z.DVtKuS = {}, z.SPJjsZ = !0;
  }
  const o = t[-12980 + -4 * -3245], r = i + o, g = z.DVtKuS[r];
  return g ? e = g : (z.gWBRZf === void 0 && (z.gWBRZf = !0), e = z.lMvSXv(e, n), z.DVtKuS[r] = e), e;
}
function kE() {
  function i(c, s, Q, E, x) {
    return z(x - 680, s);
  }
  const n = e(226, 210, 102, "A!X2") + A(-64, "SY7F") + A(-48, "qRBa") + r(-446, -450, -507, -466, "eM$x") + A(-56, "Aogj") + i(1168, "HDh&", 1255, 1125, 1188) + I(1497, 1460, 1463, 1436, "*7Gx") + A(-37, "qRBa") + i(1235, "&LCH", 1117, 1248, 1233) + A(-14, "A!X2") + I(1475, 1505, 1492, 1540, "Go26") + e(120, 209, 189, "^9^k") + r(-436, -457, -409, -536, "538g") + I(1611, 1623, 1568, 1600, "v@&1") + i(1420, "iSGu", 1408, 1383, 1364) + e(266, 156, 204, "JUv1") + i(1143, "Z)z0", 1280, 1199, 1219) + r(-475, -447, -398, -564, "sCap") + r(-398, -400, -390, -393, "v@&1") + I(1589, 1659, 1660, 1545, "ENZS") + r(-384, -337, -428, -451, "qRBa") + r(-444, -448, -446, -533, "%ZJS") + r(-379, -307, -352, -225, "sCap") + I(1531, 1442, 1501, 1454, "#]^B") + e(284, 176, 112, "(ihL") + i(1360, "(ihL", 1252, 1362, 1345) + A(86, "VfFI") + I(1644, 1672, 1548, 1712, "JTr^") + A(-91, "sCap") + i(1106, "JBS%", 1272, 1261, 1171) + I(1430, 1400, 1430, 1366, "JBS%") + e(255, 200, 152, "*7Gx") + I(1483, 1507, 1467, 1453, "wxCB") + i(1384, "Go26", 1311, 1422, 1328) + A(-99, "e)0Y") + I(1428, 1335, 1375, 1355, "e)0Y") + r(-321, -244, -320, -233, "nTVd") + A(-90, "%5pw") + i(1426, "Go26", 1353, 1242, 1329) + A(-45, "%5pw") + i(1197, "qRBa", 1234, 1085, 1197) + e(220, 264, 197, "SY7F") + e(272, 231, 334, "EHT4") + e(326, 256, 271, "eM$x") + A(-23, "Aogj") + r(-308, -277, -287, -312, "JTr^") + I(1643, 1639, 1738, 1744, "e)0Y") + A(-114, "fpjZ") + i(1286, "%5pw", 1306, 1295, 1218) + A(-112, "VfFI") + A(113, "JTr^") + I(1520, 1568, 1606, 1606, "3Lll") + A(-16, "]Sjl") + i(1333, "EHT4", 1435, 1292, 1382) + r(-348, -464, -367, -433, "538g") + i(1373, "%ZJS", 1258, 1323, 1316) + r(-302, -287, -329, -194, "dBE*") + I(1553, 1663, 1515, 1663, "uYNb") + e(141, 248, 189, "to4T") + i(1308, ")fL^", 1370, 1199, 1269) + i(1218, "#]^B", 1377, 1382, 1268) + I(1623, 1601, 1525, 1523, "v@&1") + A(66, "smWx") + I(1492, 1391, 1472, 1434, "&LCH") + r(-279, -294, -329, -274, "IFIW") + e(285, 293, 179, "#DpX") + i(1210, "dBE*", 1310, 1348, 1271) + A(101, "Z)z0") + e(304, 259, 177, "Go26") + i(1346, "$5qi", 1223, 1315, 1306) + e(351, 308, 352, "SD!7") + i(1397, "dBE*", 1462, 1417, 1370) + I(1465, 1479, 1431, 1406, "SY7F") + e(204, 170, 183, "(ihL") + r(-279, -381, -491, -494, "JBS%") + r(-244, -280, -181, -313, "SD!7") + I(1605, 1564, 1622, 1576, "JBS%") + r(-326, -371, -398, -459, "Z)z0") + i(1276, "$5qi", 1245, 1244, 1327) + A(-69, "JUv1") + r(-353, -415, -337, -395, "Z)z0") + A(27, "&LCH") + i(1394, "&LCH", 1415, 1379, 1371) + r(-371, -342, -256, -229, "[AX5") + I(1439, 1543, 1408, 1389, "sCap") + A(-107, "%5pw") + r(-253, -333, -228, -266, "#DpX") + r(-281, -257, -240, -232, "uVs7") + r(-512, -413, -352, -461, "Z)z0") + i(1312, "#]^B", 1168, 1294, 1239) + e(420, 367, 257, "538g") + i(1411, "IFIW", 1415, 1449, 1352) + I(1460, 1379, 1572, 1550, "JBS%") + A(85, "3Lll") + i(1101, "F2AT", 1273, 1252, 1168) + r(-356, -328, -338, -221, "VYWL") + I(1574, 1640, 1643, 1472, "e)0Y") + I(1578, 1586, 1488, 1547, "JBS%") + I(1507, 1448, 1398, 1401, ")IS&") + I(1491, 1489, 1536, 1376, "fpjZ") + i(1095, "Z)z0", 1251, 1188, 1199) + r(-351, -431, -546, -543, "538g") + A(28, "Aogj") + I(1603, 1646, 1555, 1535, "uVs7") + I(1512, 1604, 1449, 1406, "Go26") + r(-259, -288, -339, -266, "&LCH") + A(-65, "#]^B") + A(-83, "dBE*") + e(225, 289, 273, "ENZS") + e(170, 220, 221, "EHT4") + I(1435, 1319, 1453, 1415, "VYWL") + e(179, 198, 172, "%5pw") + i(1365, "nTVd", 1241, 1209, 1311) + r(-228, -270, -257, -196, "k0(t") + e(274, 250, 150, "%ZJS") + i(1363, "#DpX", 1192, 1327, 1255) + r(-372, -331, -376, -433, "uVs7") + e(160, 267, 236, "Farl") + i(1244, "wxCB", 1162, 1136, 1216) + r(-265, -237, -335, -160, "SD!7") + i(1254, "ENZS", 1221, 1305, 1244) + A(114, "^9^k") + A(-46, "[AX5") + r(-524, -434, -441, -450, "^9^k") + A(1, "QFW&") + i(1158, "to4T", 1187, 1145, 1238) + A(-17, "uYNb") + A(62, "#]^B") + A(3, ")IS&") + I(1557, 1514, 1559, 1584, "538g") + i(1303, "Farl", 1206, 1123, 1207) + e(432, 347, 296, "uVs7") + A(97, "HDh&") + i(1301, "QFW&", 1329, 1224, 1214) + I(1438, 1519, 1540, 1384, "538g") + I(1453, 1381, 1513, 1566, "HDh&") + r(-367, -421, -529, -424, "fpjZ") + e(204, 223, 193, "^9^k") + i(1404, "&LCH", 1331, 1352, 1349) + e(288, 216, 166, "IFIW") + I(1563, 1483, 1664, 1643, "EHT4") + I(1447, 1379, 1397, 1444, "VYWL") + I(1446, 1433, 1521, 1465, "nTVd") + i(1371, "JTr^", 1285, 1258, 1335) + r(-165, -271, -302, -338, "EHT4") + i(1285, ")IS&", 1487, 1287, 1383) + i(1266, "iSGu", 1462, 1275, 1366) + i(1162, "Go26", 1315, 1158, 1247) + A(30, "wxCB") + r(-388, -298, -307, -293, "A!X2") + I(1472, 1587, 1433, 1492, "#]^B") + e(207, 315, 323, "HHla") + e(328, 247, 284, "*7Gx") + I(1482, 1522, 1403, 1546, "VfFI") + A(45, "HHla") + A(102, "3Lll") + i(1328, "VfFI", 1227, 1181, 1267) + A(-19, "uYNb") + I(1555, 1649, 1462, 1651, "JBS%") + i(1190, "(ihL", 1237, 1345, 1279) + i(1344, "fpjZ", 1305, 1303, 1259) + I(1417, 1507, 1430, 1403, "%5pw") + r(-568, -455, -504, -392, "to4T") + i(1200, "HDh&", 1259, 1196, 1277) + A(61, "&LCH") + I(1615, 1591, 1660, 1578, "&LCH") + i(1384, "[AX5", 1370, 1364, 1310) + I(1601, 1675, 1635, 1628, ")IS&") + e(24, 139, 151, "$5qi") + i(1282, "uVs7", 1096, 1195, 1206) + r(-351, -422, -426, -443, "EHT4") + r(-271, -350, -283, -298, "#DpX") + i(1410, ")IS&", 1453, 1315, 1384) + e(260, 258, 231, ")IS&") + r(-277, -339, -433, -226, "to4T") + r(-282, -267, -377, -161, "wxCB") + i(1363, "wxCB", 1241, 1294, 1250) + i(1141, "Aogj", 1187, 1184, 1246) + A(84, "eM$x") + e(443, 360, 324, "F2AT") + A(24, "v@&1") + e(161, 136, 78, "Go26") + i(1138, "^9^k", 1270, 1141, 1222) + i(1125, "3Lll", 1195, 1236, 1196) + i(1282, "wxCB", 1355, 1208, 1312) + I(1641, 1711, 1544, 1643, "to4T") + i(1322, "*7Gx", 1287, 1372, 1375) + I(1550, 1525, 1538, 1440, "uVs7") + e(422, 326, 280, "%ZJS") + I(1459, 1377, 1488, 1497, "eM$x") + i(1317, "SY7F", 1110, 1091, 1200) + I(1485, 1532, 1405, 1386, "uYNb") + r(-420, -336, -262, -280, "sCap") + I(1570, 1675, 1482, 1503, "v@&1") + e(235, 344, 328, "wxCB") + A(32, ")fL^") + r(-408, -311, -195, -207, ")fL^") + A(-13, "Aogj") + I(1552, 1501, 1585, 1574, "v@&1") + I(1481, 1432, 1561, 1419, "A!X2"), t = window[r(-385, -325, -305, -282, "^9^k")](n);
  function e(c, s, Q, E, x) {
    return z(s - -345, E);
  }
  function A(c, s, Q, E, x) {
    return z(c - -597, s);
  }
  const o = window[i(1379, "JBS%", 1275, 1361, 1341)](t);
  function r(c, s, Q, E, x) {
    return z(s - -944, x);
  }
  const g = CB(o), a = {};
  function I(c, s, Q, E, x) {
    return z(c - 935, x);
  }
  return a[A(-11, ")IS&")] = es, a[r(-398, -293, -357, -383, "e)0Y")] = yc, window[A(-111, "538g") + "o"][I(1576, 1658, 1508, 1600, "EHT4") + "e"][e(272, 269, 220, "VfFI") + r(-161, -247, -228, -226, "F2AT")](e(179, 226, 312, "Aogj"), g, a, !0, [I(1470, 1356, 1465, 1406, "Aogj") + "pt"]);
}
function fn() {
  const i = ["WRBdRWDNW4m", "pSkmW7RdLCkI", "mGLfWPhdNG", "aSkoW4/dIdu", "muBcQXql", "nqBdTSkcWRy", "gmkWhSkada", "imkvW4RcH8kd", "W5KBW5pdISoa", "Eeivb8kr", "W4eZuhr/", "WRvRW6vMyW", "WP0AWP3cIui", "kuJdQSo9Da", "eZu+W7Sf", "nGtdLmkBWQC", "hmkVe8k4bq", "nt7dGmk6WQK", "WP7cMc7dL8kp", "FSkOlmk9mG", "yCkrsmkLWPK", "b8koispdKG", "lSo2mv1h", "WPNcQapdLmkY", "BXGcpdq", "oqxdJ8ogWQK", "zqddTLxdGG", "mmkAlMldPG", "W6ruWO/cR8kw", "zauJbJq", "W6VdVZVcJIy", "WR7cK1pcKXu", "W6BdRmoDWQLM", "W5nMW48HWPC", "mCo2x2yT", "u8kJW73cJsa", "kXysn30", "CmkqWOueWRW", "bt5ejc4", "fmoPW73cOmkg", "WRnvWO3cRmkV", "WOVdUSowW54k", "ELj2gCkg", "h8onW7ZcMSkn", "WPiAWP7cO1S", "WQRcLINdSCkb", "nSkXWPFdUtO", "WPnAWQlcGXO", "WQlcJMJcGbO", "WQOuWRuBAa", "W6mGW4lcTCo6", "W4mLW4/dMSoV", "cCkQctxcMq", "uGhdIt/dSW", "WRfSWQdcI8kY", "W55fWQ/cO0fYW6G", "o8kqfKmP", "eCkqktG", "WRRdG8o0suq", "xd7cKSkNWPe", "o8kjnIVdJW", "jJOkW7xcTG", "W7SYW67cV8oQ", "zxZdOr/dLG", "DqCgbqG", "EMPpCCkH", "Dc4Bb2e", "WPBcGvXYWRe", "bmokn8oWWP41omo+aSkoW4pcHIy", "WORdG8o+W4vP", "uSkMCqpdVG", "ebbOWPNdRW", "WOBdLSokhW", "W6qtW6jhW4u", "WOBcTtldISkc", "WOZcQJ43jG", "WRHPWRVcMmkH", "WQZdJX9VW4y", "WQdcNaJdPre", "W5uXWQBcUwS", "cdLUW5VcVG", "W5qmD8odEW", "WRVcQvldOSk4", "kxdcQs42", "vSkdqCkjW6u", "pSkSW5/dRSkL", "WRVcHCkEmvC", "W7mQj1Hd", "ASkPWReOWPu", "WO/dH8oRkfu", "vqVdTs3dPG", "W5eDWQhcHgS", "W6VdKLJcQSoKW4KZCSo8CZZdNCkN", "kmklW4pdQGi", "W7iRW5RdVZW", "FmkslCk6hq", "W4BdUG3dP2NdNHvtnL3dMXy", "xfaEW6ZcGa", "jvZdNSo3nW", "WQyhWOBdRci", "W69nW5qDW5u", "WOKjW5JcSca", "WRtcPHCBuq", "W53dQJtcShi", "uc4UeMG", "WRXZWRFcIa", "WQ41WPT+sG", "W5FcMGxdLHG", "WRFcHZ5oW68", "W4KaW6RcM8od", "n8oeW7xcV8kV", "omkqfaFdUq", "xKGpFSki", "mSooiZ0W", "W7S0W5pdVmom", "W4dcQbzPkq", "xSkHWPiuWQW", "F3ldKCk/dW", "pSo3kg8F", "WQlcUu9Odq", "W6WTW7JcHSo5", "WQNdPHVcSY4", "WOTIEmk3uW", "W5evW63dVIm", "vbqPW6tcNW", "AfddOCkpW7K", "WQS1DX7cJSo2WO/dNNtdJKhdNg0", "W54wW5xdUSoU", "uSkRpHTP", "WQmdWOb8aa", "W5dcH8kFqJpcHmoZW6rotCoTvmoZ", "bg8qlIZdMmkJqG", "WONdTSonW7un", "F2K8qCkZ", "BcFdLsRdJa", "Cq7dSsddRW", "WRfmWPRcKgi", "uqpdLmkY", "W4LNW53dQ0pdT8kqymkhsSkmWP3cQq", "CSoTECokvq", "W5uxW6pcPCoo", "BrJdN8o1nq", "A8oeW4NcUSkn", "WPldPGfTW6y", "cSo5W5JdM8kg", "WQlcUdxdTSk0", "e8k9fcfZ", "WOuTWRTl", "W77cV8oJcWBcLv0", "f8k/W4NdRSkB", "cCo6DCoEBa", "pmkTWQ7dO8kA", "WOpdLCoXhLa", "uaJcH8olla", "WQSaWPdcNtS", "cCkDW7JcGSkB", "WOanWRb/yW", "W6HUw8ocEW", "W5DfW4BdT1q", "W4KzW7RdUmox", "WP7cVmoFdfu", "E8o0A8oAv8oSfCk6WOjBrtmt", "W47cMbJcQHO", "wSoTdeSe", "a8o4WQ4yWRaUxCop", "W6W+W67dMmoUhmoJyg3dMmk7oM0", "ASoUWO/cO8k/", "W4nrwefV", "ddj6WOldJG", "W6iqW70QW4m", "W7XefexdOW", "iaCspfLbW5e", "W5u3fKBdUW", "WPOjWQ3cJH8", "W43dQLxcSqC", "a8kxm0K4", "WQ7dNgrVW5W", "p8ovW7xdN8kX", "WOmkWOhcLum", "luldSSoMoq", "bghdJ3yl", "WRNdVxtcVMG", "a8oXW75UW5bHaSoXW5PfWOKrfq", "ngNdQCou", "nthdISkxWPy", "AHjkWPNdRW", "tGtdO8kdaa", "s8olWQ/cHSo5W7qRsrxdNdP5", "W7KTW7pdR8ov", "WQ7dSSktlZa", "WO3dOSo1d1u", "f3JdPSoNWR4", "WPegWPNcO1q", "E8oqE8oKaa", "avddSCksW7i", "uXtdNCoUpW", "CaRcV8oUaq", "WPXOWQlcVCkC", "WRFcNurmW48", "WQJcO1SKW4a", "rNxdLt/dRW", "wcSHmaa", "qfb2j8kp", "BLmPBCk8", "WRveW50xW4K", "WRJcO3nKW5W", "WOZcU2j7W7K", "kXBdRCkEWQG", "W7aaWQ7cUKu", "CI8ZjYK", "W5yxWP1nwa", "W5XVW6aDbxpdT3qNl8olgCoe", "tWBcL8kQW4i", "W5mauK9j", "WQyOWRD8xG", "W6LXdCk5eq", "W7qWW53dOtu", "DWVdPmkXWQ8", "ihzjAaGZWPjRcSkLWQH3rG", "WRBdMXentW", "dGnAW5Og", "WRldRdK7", "W6RcNMH6W64", "W4CvWR3dVdC", "uXtdIhrOW5mxW5tcRWDaW4KW", "W7awW6JcIdK", "ybeepY8", "i27cVbCn", "dSk0xSkJW4zBya", "WRzEWQlcUmkP", "BWFdOSk8pq", "WO7dKa45ta", "W6RcM391W78"];
  return fn = function() {
    return i;
  }, fn();
}
async function SE(i) {
  const n = await kE();
  function t(o, r, g, a, I) {
    return z(a - 236, o);
  }
  function e(o, r, g, a, I) {
    return z(o - -677, a);
  }
  const A = {};
  return A[e(-175, -118, -143, "dBE*")] = es, window[e(16, -35, -59, "Farl") + "o"][t("ENZS", 862, 747, 859) + "e"][e(-87, 1, -122, "^9^k") + "pt"](A, n, i);
}
(function(i, n) {
  function t(g, a, I, c, s) {
    return kA(s - 106, a);
  }
  function e(g, a, I, c, s) {
    return kA(I - -521, g);
  }
  function A(g, a, I, c, s) {
    return kA(I - -649, s);
  }
  const o = i();
  function r(g, a, I, c, s) {
    return kA(s - -909, g);
  }
  for (; ; )
    try {
      if (-parseInt(r("Re$*", -514, -504, -506, -506)) / 1 * (parseInt(e("&q&x", -122, -117, -124, -116)) / 2) + parseInt(A(-246, -253, -255, -251, "e)j]")) / 3 + -parseInt(r("8nx9", -498, -496, -506, -503)) / 4 + -parseInt(t(516, "HbLT", 516, 520, 513)) / 5 + parseInt(e("OKL[", -126, -125, -122, -125)) / 6 + parseInt(r("()iD", -497, -501, -492, -501)) / 7 + parseInt(r("LyJ)", -499, -501, -516, -507)) / 8 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(pn, 2006503 + -32649 * 36);
function pn() {
  const i = ["W6ZdG8oYyCoOB8kXbHbwpX7cPG", "A8oNWRycWP5JcSocp2FdISo+FW", "WPhcKmo0W6pdUmofWPyBW7ZdSSkMzmka", "rX0tCsJdVdqDEMaABW", "WRSJleOGC3ecFSkdWRjq", "j2tcGSo1WRzbmComjNGqW7Cc", "WOJdPSoIdSkiWRvqvaCvW5PcW64", "w8ogWQW", "W7S3WR8yW7O", "W6hdHCoZyCoOzmkXbGzontNcQW", "W44jxCo3nezNC04FWRy", "lmk/W6tcPSk8tdfEFKldJe7dJa", "W5xcOSkJyXSUp3aNW5BcGwXg", "bIRcOSkgWQdcOmkGWRj3", "WRTmWOZdKY84W5OjW7xcGCoX", "yCoKWRjHW44pxSoOda", "jhhdJXhcQrxdKSkgi3BdMhddJa", "WO5lW6tdUbJdUCkluSoxWPXXW5fc"];
  return pn = function() {
    return i;
  }, pn();
}
function kA(i, n) {
  i = i - (-3 * 2950 + 4849 + -4393 * -1);
  const t = pn();
  let e = t[i];
  if (kA.SGuASP === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let E = 0, x, B, l = 0; B = I.charAt(l++); ~B && (x = E % 4 ? x * 64 + B : B, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        B = c.indexOf(B);
      for (let E = 0, x = s.length; E < x; E++)
        Q += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const a = function(I, c) {
      let s = [], Q = 0, E, x = "";
      I = A(I);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        Q = (Q + s[B] + c.charCodeAt(B % c.length)) % 256, E = s[B], s[B] = s[Q], s[Q] = E;
      B = 0, Q = 0;
      for (let l = 0; l < I.length; l++)
        B = (B + 1) % 256, Q = (Q + s[B]) % 256, E = s[B], s[B] = s[Q], s[Q] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[B] + s[Q]) % 256]);
      return x;
    };
    kA.AkDcQS = a, kA.ocbudl = {}, kA.SGuASP = !0;
  }
  const o = t[-9602 + -2669 * 1 + 12271], r = i + o, g = kA.ocbudl[r];
  return g ? e = g : (kA.FKggXB === void 0 && (kA.FKggXB = !0), e = kA.AkDcQS(e, n), kA.ocbudl[r] = e), e;
}
async function GE(i) {
  const { iv: n, key: t, message: e } = await QB(i), A = await SE(t), o = {};
  o[r("Uay2", 887, 877, 883, 886)] = A;
  function r(a, I, c, s, Q) {
    return kA(Q - 489, a);
  }
  function g(a, I, c, s, Q) {
    return kA(s - -351, I);
  }
  return o.iv = n, o[g(56, "MnnQ", 41, 47) + "ge"] = e, o;
}
(function(i, n) {
  function t(a, I, c, s, Q) {
    return tA(a - -296, c);
  }
  function e(a, I, c, s, Q) {
    return tA(I - -787, s);
  }
  function A(a, I, c, s, Q) {
    return tA(c - 985, a);
  }
  const o = i();
  function r(a, I, c, s, Q) {
    return tA(Q - 662, I);
  }
  function g(a, I, c, s, Q) {
    return tA(a - 147, Q);
  }
  for (; ; )
    try {
      if (-parseInt(r(1153, "CZZa", 1197, 1207, 1189)) / 1 * (-parseInt(r(1204, "is$M", 1245, 1149, 1205)) / 2) + parseInt(r(1231, "CZZa", 1299, 1224, 1261)) / 3 * (parseInt(A("*G^4", 1431, 1484, 1486, 1496)) / 4) + -parseInt(A("#CbT", 1574, 1553, 1512, 1616)) / 5 * (-parseInt(A("oGo%", 1413, 1463, 1478, 1521)) / 6) + parseInt(e(-256, -236, -242, "WIpb", -240)) / 7 * (parseInt(t(200, 213, "wZ6L", 260, 157)) / 8) + parseInt(r(1136, "$5RD", 1213, 1228, 1170)) / 9 + parseInt(g(645, 659, 625, 586, "Oys^")) / 10 * (-parseInt(r(1144, "Z06Z", 1129, 1142, 1174)) / 11) + parseInt(r(1183, "WIpb", 1255, 1247, 1221)) / 12 * (-parseInt(e(-348, -304, -242, "U8Cw", -344)) / 13) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(mn, 354461 * 1 + 88058 * 7 + 27793 * -18);
function nt(i, n, t, e, A) {
  return tA(t - -980, e);
}
function mA(i, n, t, e, A) {
  return tA(t - 579, i);
}
function we(i, n, t, e, A) {
  return tA(n - 560, A);
}
function mn() {
  const i = ["CCkVeetcSW", "n8oVWRjAWQHsuL8", "vSoirXXwjHdcNWTaWRi", "WQhcQx0wW4xcISotW4e", "WQjNWRhdSSon", "W4tdQflcOei", "WReVxmokWQS", "p8o8WP7dS1q", "W6BdVeCqW7q", "WOLWtGZdQG", "W73dN0/cJW", "WRZcRhmTWQGekmkbW6BcG8oFWP5z", "W5pdVSobsSkM", "W5ybW61w", "WQrZWRhdSG", "W54YeLpcLHhdGSoSgSkWkSkDlCok", "WQLNWPPKW5LCAuZdQdizma", "WQFdQe7dLCoSWQZdJCoqWPq", "W7BcOxNcSq", "W6hcVxxcRmk+", "qmoDW65ZqG", "W6ZdPqC5FG", "aCkonKCC", "WO17vqtdNa", "eGr5W65C", "bmotW6ldNuq", "pMlcMa", "aGZcISo1W6W", "W7ZdHSo/W7aL", "WRahsW", "W4BcKcfjktFcUmo+W5RcQCk7W6e", "cZpcJCo4W7O", "WOJcPmkjW6mM", "pmo8WOldT34", "W4vlW5HBW4G", "WPZdOmoBW5KnW6tdIq", "hYJcJmoJ", "WQBdJwNdGZC", "WOXPWOZcOSob", "W5LUzGldHKhcOq", "W5xdNmowrmkM", "WQWHB1tdQW", "W7lcTMtcQSk8", "z8kFjMRdVa", "ddFcRSo0W7O", "W4tdNmoCvW", "W6DcWRDIlb1y", "W4FdJmoH", "W5ldJ8ohrmkF", "WRfHhIhdLW", "WOXPW5S", "vSodW6bQyq", "zSkoW5m", "i3xcPCo9BW", "WRJdONdcVmoAWRRcVW", "WRzaWRTGaa", "WOlcMCkeeSoQW7uHtmoWW6BdTSkxja", "W4tdGx7cVLa", "W6uVeZ80", "WRvKorKup1lcNW", "lGtdKeu", "W6O4W4uXWOS", "WRRcNrddImkvW4tdTxlcLmooWQpdLSor", "pSoIvtldUa", "y8kXWPLAWPS", "W6/dLqq7wq", "WQy+A1ldUG", "W6mnbde0", "oXFdMe3cLa", "W6z0FmkZWR8", "W6awW7zfWO4", "W7/cRNBcUceZWORcSSksaveIaa", "WQddJhxdKIa", "WOzXcG", "pHFdKKhcPq", "WPL+WPVcQSot", "WRjqaYpdOG", "WQxdPKNcTmk7W7NcS8o1WO/dJWpdRSkJ", "WPmhsSonWQS", "W6NdPq01tW", "W6tcT8knW78", "W7RdP8orC8k8", "W6ZdJLxcICoT", "g8oOrdpdQW", "rmowW7v7Da", "W7tdM8ovq8k3", "WRhdJhxdKa", "eCkFb0ei", "W6NdMwpcKSoq", "irP9W7To", "omooWOXqvmkobKX2W47cNG", "WR0qxmoFWR4", "W5hdQx/cHe4", "WPlcPfWIW5K", "W5pcLLq", "W5NdP8oErmk1", "BSoAW4Dlxq", "W6FdRsLRW7y", "W54RW5RdSCkmWQ08bh7dKLhdICkaW58", "FmkXef/cTSkzwYqKncZdUcq", "W6xdVZa", "pvWJWRra", "W4hcNs0SCgxcG8o7W48", "dIJcHSoWW70", "omoPWPq", "k0COWQ1s", "W7ldMmoBW7qb", "gW3cSCovW7G", "W67dN1lcNmoB", "WRvJg0rf", "WQVdHmoaW6q5", "W6bTWPNdO8ojWQeZ", "nmkwz8kYWRm", "W6mqeY0Z", "aCotW6JdKxu", "W67dIKu", "WQpcOhO+W4BcHmonW60", "W5P4DSkEWOm", "q8o/W7nXCW", "amo5WQhdSMu", "ACkmWO5hWPO", "W5XNW4DtW4K", "W7W8W44JWO4", "WPpdVhlcRNVdGHC", "WOPlWPVcRmob", "W6tdTKu1W7C", "W5v6FCkNWRa", "W6xcTSkdW6PK", "u8oirHPzrNJcJsPsWONcSCo1", "eSkyWRyPpZahWQfpW4nWWOr4"];
  return mn = function() {
    return i;
  }, mn();
}
function yA(i, n, t, e, A) {
  return tA(n - -468, A);
}
function nA(i, n, t, e, A) {
  return tA(e - -244, A);
}
function tA(i, n) {
  i = i - (-419 * -23 + -3668 + -5498);
  const t = mn();
  let e = t[i];
  if (tA.jkfERX === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let E = 0, x, B, l = 0; B = I.charAt(l++); ~B && (x = E % 4 ? x * 64 + B : B, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        B = c.indexOf(B);
      for (let E = 0, x = s.length; E < x; E++)
        Q += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const a = function(I, c) {
      let s = [], Q = 0, E, x = "";
      I = A(I);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        Q = (Q + s[B] + c.charCodeAt(B % c.length)) % 256, E = s[B], s[B] = s[Q], s[Q] = E;
      B = 0, Q = 0;
      for (let l = 0; l < I.length; l++)
        B = (B + 1) % 256, Q = (Q + s[B]) % 256, E = s[B], s[B] = s[Q], s[Q] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[B] + s[Q]) % 256]);
      return x;
    };
    tA.prqgXu = a, tA.GYPRpI = {}, tA.jkfERX = !0;
  }
  const o = t[-12163 + -1 * -12163], r = i + o, g = tA.GYPRpI[r];
  return g ? e = g : (tA.OXHYdD === void 0 && (tA.OXHYdD = !0), e = tA.prqgXu(e, n), tA.GYPRpI[r] = e), e;
}
class NE {
  async [we(1066, 1082, 1026, 1058, "!O^E") + nt(-459, -458, -489, "pX48") + mA("N@C6", 1058, 1110) + mA("&H]7", 1133, 1133) + yA(107, 102, 134, 70, "VT^P")](n) {
    const { Image: t } = Te, e = await n[a(668, "WIpb", 680, 650) + o(704, 689, "NXHq", 810, 747) + "r"](), A = new Uint8Array(e);
    function o(E, x, B, l, h) {
      return we(E - 366, h - -395, B - 325, l - 173, B);
    }
    const r = {};
    function g(E, x, B, l, h) {
      return nA(E - 468, x - 52, B - 184, B - -79, E);
    }
    r[g("Z06Z", 178, 197)] = A;
    function a(E, x, B, l, h) {
      return we(E - 48, E - -367, B - 229, l - 388, x);
    }
    function I(E, x, B, l, h) {
      return nA(E - 430, x - 302, B - 360, B - -278, l);
    }
    const c = t[I(12, 58, 50, "pX48") + "y"](r);
    function s(E, x, B, l, h) {
      return nt(E - 443, x - 7, E - 956, l);
    }
    if (c)
      if (s(542, 559, 529, "kSIh") !== o(709, 712, "KD#i", 773, 745)) {
        const { architecture: E, fullVersionList: x, model: B, platform: l, platformVersion: h } = _0x1070c5 ?? {};
        return { userAgent: _0x14bda0, architecture: E, platform: l, model: B, platformVersion: h, browserVersions: x?.[g("cKY)", 251, 221)](({ brand: f, version: p }) => ({ name: f, version: p })) };
      } else throw m[o(734, 715, "7Ap[", 792, 738) + o(713, 628, "WIpb", 640, 672)](c);
    const Q = {};
    return Q[g("wZ6L", 318, 258)] = A, t[g("NXHq", 154, 214) + "e"](Q);
  }
  [mA("hstR", 1125, 1179) + nt(-436, -489, -495, "wZ6L") + nA(257, 231, 254, 280, "hstR") + nA(216, 293, 204, 243, "Oys^") + mA("hstR", 1083, 1120) + yA(99, 89, 44, 129, "aM))")](n) {
    function t(a, I, c, s, Q) {
      return mA(c, I - 93, I - -1194);
    }
    function e(a, I, c, s, Q) {
      return mA(Q, I - 193, I - 352);
    }
    function A(a, I, c, s, Q) {
      return yA(a - 105, c - -485, c - 85, s - 467, a);
    }
    function o(a, I, c, s, Q) {
      return yA(a - 63, a - 466, c - 159, s - 344, I);
    }
    const { VideoStream: r } = Te, g = r[t(0, -31, "*G^4") + "y"](n);
    if (g)
      if (A("XU)R", -479, -480, -468) !== o(484, "XeXm", 423, 454)) {
        const { Blob: a } = _0x1e20be.v4, I = a[A("N@C6", -448, -465, -411) + "y"](_0x42e2b5);
        if (I) throw _0x28427e[o(477, "Pfs#", 499, 519) + e(1560, 1514, 1503, 1566, "^1#v")](I);
        const c = a[o(569, "aM))", 539, 563) + "e"](_0x2782da);
        return a[o(559, "Oys^", 622, 623) + "e"](c)[o(527, "%x2^", 487, 533) + "h"]();
      } else throw m[A("&K%U", -455, -435, -459) + A("%cCw", -364, -376, -319)](g);
    return r[o(553, "mE7[", 543, 547) + "e"](n);
  }
  async [we(1183, 1148, 1139, 1151, "CGpi") + yA(34, 41, 14, 57, "NXHq") + nt(-446, -520, -477, "CGpi") + nA(347, 241, 301, 301, "NXHq") + mA("^1#v", 1150, 1113) + "e"](n) {
    function t(s, Q, E, x, B) {
      return yA(s - 312, E - 678, E - 83, x - 45, Q);
    }
    function e(s, Q, E, x, B) {
      return nA(s - 290, Q - 464, E - 121, B - 238, Q);
    }
    function A(s, Q, E, x, B) {
      return we(s - 82, s - 47, E - 18, x - 453, E);
    }
    const { v4: { Metadata: o } } = Te, r = { ...n };
    r[e(576, "wZ6L", 574, 593, 542) + e(595, "tVNS", 521, 515, 543)] = Te[e(562, "#f#y", 558, 496, 515) + a(84, 93, 63, 30, "71w1")][g(1616, "[UQG", 1551)];
    function g(s, Q, E, x, B) {
      return nA(s - 179, Q - 482, E - 426, E - 1204, Q);
    }
    function a(s, Q, E, x, B) {
      return nA(s - 353, Q - 53, E - 398, s - -195, B);
    }
    r[t(655, "&OTW", 699, 699) + A(1091, 1114, "kSIh", 1132) + A(1137, 1120, "XeXm", 1131) + "n"] = A(1104, 1158, "KD#i", 1131);
    const I = r, c = o[a(100, 37, 104, 158, "[UQG") + "y"](I);
    if (c)
      throw t(726, "NXHq", 788, 796) !== g(1496, "WIpb", 1539) ? m[g(1454, "XeXm", 1464) + g(1514, "[UQG", 1475)](c) : _0x347146[g(1462, "!O^E", 1441) + a(72, 35, 50, 16, "oGo%")](_0x9664a0);
    return o[g(1439, "pX48", 1495) + "e"](I);
  }
  async [nt(-362, -429, -394, "#f#y") + yA(-32, 9, 56, -42, "[Z!#") + nA(174, 273, 225, 232, "jADw") + mA("XeXm", 1044, 1050)](n) {
    const { Content: t } = Te, { iv: e, key: A, message: o } = await GE(n);
    function r(x, B, l, h, f) {
      return yA(x - 209, f - -235, l - 450, h - 186, h);
    }
    const g = { token: new Uint8Array(A), iv: e, schemaVersion: mc, bytes: new Uint8Array(o) };
    function a(x, B, l, h, f) {
      return mA(B, B - 82, h - -434);
    }
    const I = t[Q(242, 222, "U8Cw") + "y"](g);
    function c(x, B, l, h, f) {
      return nA(x - 499, B - 155, l - 88, B - -186, x);
    }
    if (I)
      throw c("wZ6L", 163, 187) === Q(295, 275, "&OTW") ? _0x1cbdfe[r(-215, -237, -143, "wZ6L", -186) + r(-191, -193, -206, "hstR", -170)](_0xfb3b91) : m[r(-201, -119, -195, "aM))", -138) + s("m(b6", 1051, 1164, 1103)](I);
    function s(x, B, l, h, f) {
      return yA(x - 414, h - 1061, l - 219, h - 218, x);
    }
    function Q(x, B, l, h, f) {
      return nA(x - 60, B - 45, l - 110, x - -19, l);
    }
    const E = t[Q(323, 354, "#f#y") + "e"](g);
    return t[a(661, "[UQG", 724, 661) + "e"](E)[Q(209, 189, "lgqz") + "h"]();
  }
  [nA(314, 255, 312, 296, "hBUq") + nA(360, 380, 295, 318, "&K%U") + yA(159, 107, 76, 109, "CGpi") + "ge"](n) {
    const { Blob: t } = Te.v4, e = t[r("*G^4", 1301, 1249) + "y"](n);
    function A(I, c, s, Q, E) {
      return yA(I - 300, c - 784, s - 357, Q - 44, Q);
    }
    if (e)
      throw r("hstR", 1132, 1139) === o("KD#i", 1457, 1404) ? _0x41b5be[o("7Ap[", 1425, 1417) + g(205, 178, 203, 266, "[UQG")](_0x3140b8) : m[o("Z06Z", 1368, 1350) + g(232, 223, 253, 239, "NXHq")](e);
    function o(I, c, s, Q, E) {
      return nA(I - 367, c - 449, s - 193, s - 1088, I);
    }
    function r(I, c, s, Q, E) {
      return nA(I - 279, c - 150, s - 269, s - 909, I);
    }
    function g(I, c, s, Q, E) {
      return yA(I - 321, I - 158, s - 472, Q - 304, E);
    }
    const a = t[r("ROS9", 1282, 1228) + "e"](n);
    return t[A(828, 832, 818, "[UQG") + "e"](a)[o("hstR", 1363, 1372) + "h"]();
  }
  async [we(1202, 1158, 1185, 1219, "lgqz") + mA("71w1", 1191, 1129) + we(1123, 1061, 1014, 1075, "oGo%") + yA(75, 99, 111, 136, "m(b6") + "ls"](n, t) {
    const { architecture: e, fullVersionList: A, model: o, platform: r, platformVersion: g } = t ?? {};
    function a(I, c, s, Q, E) {
      return nA(I - 270, c - 246, s - 360, c - -637, Q);
    }
    return { userAgent: n, architecture: e, platform: r, model: o, platformVersion: g, browserVersions: A?.[a(-283, -284, -249, "$5RD")](({ brand: I, version: c }) => ({ name: I, version: c })) };
  }
  async [we(1103, 1112, 1095, 1123, "is$M") + mA("7Ap[", 1094, 1125) + nA(297, 305, 336, 345, "&H]7") + mA("kSIh", 1080, 1072) + mA("%cCw", 1121, 1073) + yA(85, 57, 7, 91, "XU)R") + mA("$5RD", 1174, 1173) + "on"](n) {
    const t = await this[A("&K%U", 1380, 1322, 1412, 1383) + A("mE7[", 1354, 1428, 1436, 1371) + A("NXHq", 1458, 1346, 1399, 1399) + r(1417, 1432, 1363, "mE7[", 1389) + A("WIpb", 1253, 1317, 1330, 1289)](n[o(1510, 1503, 1562, "^1#v") + r(1443, 1363, 1382, "&H]7", 1411) + "ge"]), e = {};
    e[o(1470, 1513, 1531, "ROS9")] = t;
    function A(a, I, c, s, Q) {
      return nA(a - 11, I - 130, c - 422, Q - 1051, a);
    }
    function o(a, I, c, s, Q) {
      return yA(a - 472, c - 1461, c - 143, s - 474, s);
    }
    function r(a, I, c, s, Q) {
      return mA(s, I - 195, Q - 330);
    }
    function g(a, I, c, s, Q) {
      return nt(a - 51, I - 228, s - 1973, I);
    }
    return e[g(1578, "h#2M", 1583, 1583) + g(1480, "*G^4", 1533, 1512) + r(1460, 1414, 1482, "CGpi", 1435)] = n[A("U8Cw", 1327, 1363, 1296, 1299) + o(1602, 1624, 1578, "WIpb") + g(1517, "HZJ(", 1502, 1540)], e;
  }
}
function BA(i, n) {
  i = i - (-178 + 1 * -7856 + 8279);
  const t = yn();
  let e = t[i];
  if (BA.YlNfPB === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", Q = "";
      for (let E = 0, x, B, l = 0; B = I.charAt(l++); ~B && (x = E % 4 ? x * 64 + B : B, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        B = c.indexOf(B);
      for (let E = 0, x = s.length; E < x; E++)
        Q += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(Q);
    };
    const a = function(I, c) {
      let s = [], Q = 0, E, x = "";
      I = A(I);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        Q = (Q + s[B] + c.charCodeAt(B % c.length)) % 256, E = s[B], s[B] = s[Q], s[Q] = E;
      B = 0, Q = 0;
      for (let l = 0; l < I.length; l++)
        B = (B + 1) % 256, Q = (Q + s[B]) % 256, E = s[B], s[B] = s[Q], s[Q] = E, x += String.fromCharCode(I.charCodeAt(l) ^ s[(s[B] + s[Q]) % 256]);
      return x;
    };
    BA.LEdfGS = a, BA.cXVcAY = {}, BA.YlNfPB = !0;
  }
  const o = t[-1 * 4255 + -6003 + 10258], r = i + o, g = BA.cXVcAY[r];
  return g ? e = g : (BA.OvCIwq === void 0 && (BA.OvCIwq = !0), e = BA.LEdfGS(e, n), BA.cXVcAY[r] = e), e;
}
function Je(i, n, t, e, A) {
  return BA(n - -238, t);
}
function RE(i, n, t, e, A) {
  return BA(A - -253, e);
}
function yn() {
  const i = ["nLjQWPFdJG", "wLmAhHS", "xCoukb3cQa", "t8oXWP5AW5e", "W4FdU8kl", "W7LTW7iP", "ASkuW6m7fW", "WP3dR18OW5m", "ASooW5JcHmkN", "W79QW68+WOG", "W6ymW54", "c8keAuRcLSktiX3cOCkf", "W6RdPSkCrdK", "BSoUxvLF", "WPnvWRlcVva", "WO3cRfFdOh4", "W6KvW7tdSJC", "drldMCkjW7G", "W6P4W4FcSx7cUmokWOFcQq", "jCkqB8kBWPK", "W7/dGfpcLmk9", "WRKQWQ9RW7LQWOn3zG3dT13cPq", "xSoqka", "WO5llmoijq", "a8oGWOv8W6nqna", "uCoMwLLU", "WP4Ka1K4", "W4XDWPSpWRW", "WOjPj8kBnq", "ddxdK8kpW7K", "W5OykW5s", "W5FcHKZcO8kG", "e8osd14r", "W7xcGancW6y", "x8opW6iaWRqtWRldGSoRouhcLH4", "bItdKCk5W7G", "WQRcQfhdOKK", "W548iq", "bdFdM8kyW64", "dgldIKiU", "gu9/W5up", "WPiad1WP", "W4POWOeiWQC", "W7Sxj8oJrq", "vSozWPrEW4u", "W6O4WR8wWR4", "WP9Nimoxjq", "WOjRlmoiiG", "eSoechGD", "wuNdJwFcGrKEemoQlCoaWRe6", "aCoTkJVcSmkYkq", "ymklW6mPfW", "ySk9uCkhWPVdL8oJ", "W68QW7tdOda", "W43cHYnfW5K", "xCoqkbNcHG", "ugZcGmoBWRm", "hmkwdSoPwq", "WRylW54", "WP/cVXJdTfm", "dNPDW5yA", "hSoWWOlcVSo7", "W4f+WOCvWRO", "dKmwmZ02W5u", "W6FdJN8gWQ0", "WQdcKb7dG8oVgrhcNWygWRFdVvi", "gh55W5S2", "W78ZgSohua", "e3pcJM0S", "W5NdVLCdW6rWka", "W40PhCoozW", "aNhcJ2KK", "cSkkWPbUW5Xlp0i", "bJJdQmksW7y", "d35QW58", "zSo3W5JcLmkp", "cmkaW4qnWO4uuh5VW5xdV8kLjW", "uIldMuy4WRpcK8kugW", "WPRdULe9W5S", "W4RcIarcW5C", "bXtcJJddNq", "zCo7s1vZ", "fhpcIa", "mqxdUha/W7aYWOVdLNHwW41V", "WRFcRfVdV28", "WQujW4HiWQC", "W7BdKSkEpKW", "tSowcmoDrZVdRse", "WOPYka", "x1mqeIO", "WPFdTCk3", "W7GXW77dRXy", "i8kzFmkgWPK", "WO5UCfqtWQ/dQmoKW64BuG", "uK5smw8", "W4ldRSkEqbO", "hr/dKCkCW7O", "W6iyW4HtW6K", "W4TaWPeiWRq", "W6moW49xW60", "dZpcLJ7dMW", "WRqlFKbM", "WR3cTc/dTeC", "cWrIyHKtWP7dOsJcPmouugu", "t21vW5KW", "W6RdTGFcVsRdOmkFW6ZdOmoXlWa", "qvhcVcfI", "W5askqfb", "WPuuWQlcTeu", "WPpcTXW", "eSknWRjxBq", "bKBcMeS1", "WOXJpq", "WO/dReO6W4q", "W7mcW5rCW5W", "mmkhEmktWOS", "W6WjWRuzWR4", "W7FdMSkej0u", "W5G+eWLs", "jmkCWQDgW7m", "gCogWOJcUSoU", "o8oed24F", "vxFcKmorWP4", "n8kuACktWRi", "W6ZdMw4aWQ0", "tSk+sNhdPW", "WRvXWPtcGwC", "c35+WPOv", "gmoHWOlcVmoV", "bmknWQbrBW", "WQxdMSkpiLS", "drtcJG", "o1rQWPJdJG", "sCk1W5tdV8k6efdcSsVdJHZcQG", "WORdPSkIW59a", "gSkGcSo8ta", "W6G+WRS", "W6qVWQ4wWQ4", "WR4lzfvO", "W67dQ2O", "W5NcPLK", "j8kCCSkC", "WOlcHXHEWPi", "dqbRzbSsWP7dUI/cUCoRthO", "c8knWRm", "v0mgntC", "WRzEWO8gWRVdO18gWQjjoW", "DLhcUZnI", "dmk4xmk8WQO", "A8oUsvrj", "W6JcGSk9", "W6BcRmk1BCkG", "WO4MlCoAiG", "ESoxW5tcJmkl", "WOVdSKOcW5m", "W4pcNry", "W542na", "W6ZcTCkQy8kZ", "W48Pirnv", "h8kxWRy", "WP1SxSkDnComdmkhjXtdTmkEfW", "W7D6DCkdma", "W542cqvv", "bNxcHvyL", "WPFcVIxdUfy", "aMO+ixn0kG", "WP/dMCkIW5Xs", "WPddNeuAWOCgsCk5W71RpCoDW58", "W79pC8knia", "aNRcPuOc", "mCksWRKKlW", "WPWIbW", "d8kxWQz/W6q", "tCoalHNdHq", "xgWAcW4", "WOWLWOdcU1m", "gCkkWRnvW6q", "rmkqssSnfhPvhCk+", "k0n8WORdKW", "WO5fo8oujG", "W58vW5JdJqe", "WPFcIH7dUKm", "WPHgWQtcTee", "WPFcLWNdOvy"];
  return yn = function() {
    return i;
  }, yn();
}
(function(i, n) {
  function t(g, a, I, c, s) {
    return BA(I - 549, a);
  }
  function e(g, a, I, c, s) {
    return BA(I - -800, a);
  }
  function A(g, a, I, c, s) {
    return BA(a - -497, g);
  }
  const o = i();
  function r(g, a, I, c, s) {
    return BA(s - 670, a);
  }
  for (; ; )
    try {
      if (-parseInt(t(870, "[9v#", 845, 810, 770)) / 1 * (parseInt(t(1005, "B6B^", 967, 937, 1039)) / 2) + -parseInt(r(1151, "CiBx", 1142, 1020, 1068)) / 3 + parseInt(e(-534, "D89K", -474, -549, -426)) / 4 * (parseInt(t(809, "FB!g", 826, 769, 890)) / 5) + -parseInt(r(992, "Q*Zr", 1022, 1087, 1034)) / 6 * (-parseInt(e(-467, "LadJ", -422, -331, -466)) / 7) + parseInt(A("D89K", -132, -176, -66, -154)) / 8 * (parseInt(A("EG7J", -161, -219, -74, -146)) / 9) + parseInt(t(933, "tJZs", 969, 937, 953)) / 10 * (parseInt(A("KaP%", -105, -176, -119, -97)) / 11) + parseInt(e(-406, "Ee8L", -413, -354, -367)) / 12 * (parseInt(A("Ki0N", -206, -288, -291, -138)) / 13) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(yn, 1111435 + -233 * 3758 + 743995);
function Rt(i, n, t, e, A) {
  return BA(i - -345, A);
}
function Ue(i, n, t, e, A) {
  return BA(n - 290, e);
}
function it(i, n, t, e, A) {
  return BA(e - -594, i);
}
class FE extends NE {
  async [Ue(541, 603, 576, "A$K$") + Ue(659, 587, 514, "v2UX") + Ue(653, 663, 748, "D7H#")]({ onCaptureData: n, sessionToken: t, video: e }) {
    function A(x, B, l, h, f) {
      return Ue(x - 499, B - -602, l - 445, x);
    }
    function o(x, B, l, h, f) {
      return Rt(B - -92, B - 148, l - 500, h - 221, x);
    }
    const r = n[s(1183, "Y!5h", 1115, 1159)](M[s(958, "A$K$", 988, 989) + "AL"]), g = n[o("Q*Zr", -175, -107, -100)](M[s(1147, "Ki0N", 1041, 1090)]) ?? n[I("D89K", 1046, 962)](M[I("fiD]", 1020, 943) + I("zj5m", 988, 992) + "AL"]);
    if (!r) throw new m(a(136, 118, 170, 86, "i8iq") + a(315, 234, 305, 245, "[9v#") + a(198, 104, 59, 125, "aefU") + A("Y!5h", 31, -54) + o("*&tb", -9, -16, 71) + o("Y!5h", -154, -129, -167) + s(1028, "Lr3W", 976, 988) + o("7JLZ", -164, -197, -95) + s(1023, "vW8[", 994, 985));
    function a(x, B, l, h, f) {
      return Je(x - 124, h - 74, f);
    }
    if (!g) throw new m(s(1050, "tJZs", 1048, 1062) + a(173, 70, 188, 97, "zoQV") + s(1079, "KOMw", 1183, 1109) + s(1208, "A$K$", 1245, 1155) + I("D89K", 1013, 936) + I("[9v#", 985, 945) + A("r)bk", -54, -139) + s(1002, "KaP%", 1155, 1086) + a(102, 43, 60, 126, "i8iq"));
    function I(x, B, l, h, f) {
      return Ue(x - 346, B - 419, l - 244, x);
    }
    const c = {};
    c[s(1100, "KOMw", 1136, 1089) + a(176, 108, 137, 136, "KaP%") + A("*&tb", 116, 122) + a(12, 54, 194, 102, "N4K[")] = r, c[a(275, 309, 212, 237, "zoQV") + A("aoWb", 105, 13) + A("EG7J", 12, -40) + o("Pa5e", -135, -139, -174)] = g;
    function s(x, B, l, h, f) {
      return Rt(h - 1077, B - 354, l - 200, h - 154, B);
    }
    c[s(1130, "QqYX", 1107, 1041) + o("7JLZ", -68, -75, -143) + "en"] = t;
    const Q = await this[o("fiD]", -69, -60, 9) + A("LadJ", -7, -62) + s(1204, "r)bk", 1070, 1113) + A("FB!g", 100, 128) + "e"](c), E = await this[A("nESg", 107, 108) + I("aefU", 1054, 1043) + I("*&tb", 994, 1004) + a(84, 84, 103, 158, "*&tb")]({ metadata: Q, neutralExpressionFaceImage: await un(r[s(1019, "zoQV", 1050, 980) + o("&yar", -26, -40, 36) + "e"]), smileExpressionFaceImage: await un(g[o("D7H#", -37, -82, -96) + o("Ee8L", -119, -126, -137) + "e"]), video: e });
    return this[A("L(qn", -11, -13) + a(256, 164, 177, 191, "r)bk") + I("Roxo", 1055, 978) + a(178, 203, 105, 161, "FB!g")](E);
  }
  async [it("A$K$", -356, -190, -281) + RE(43, 81, -87, "]v@U", -6) + Je(133, 65, "i8iq") + Rt(-38, -75, 9, -116, "i8iq")]({ metadata: n, neutralExpressionFaceImage: t, smileExpressionFaceImage: e, video: A }) {
    const { SmileLivenessContent: o } = Te.v4;
    function r(f, p, k, w, D) {
      return it(p, p - 249, k - 276, w - -197);
    }
    const g = await this[x(722, 753, 640, 674, "Pa5e") + x(675, 575, 669, 645, "aoWb") + h(116, 107, 37, "]8a5") + a(378, 466, 379, 547, "fiD]") + a(529, 487, 399, 422, "aefU")](t);
    function a(f, p, k, w, D) {
      return Je(f - 340, p - 373, D);
    }
    const I = await this[a(505, 507, 445, 541, "N4K[") + h(256, 251, 213, "KaP%") + r(-312, "aefU", -445, -369) + s("Y!5h", 212, 218, 307, 291) + s("]8a5", 315, 218, 200, 234)](e), c = await this[s("]v@U", 338, 231, 288, 313) + h(185, 180, 150, "r)bk") + r(-434, "KOMw", -444, -378) + h(46, 79, 44, "zj5m") + h(84, 85, 122, "FhrF") + "e"](n);
    function s(f, p, k, w, D) {
      return Je(f - 76, D - 191, f);
    }
    const Q = { neutralExpressionFaceImage: g, smileExpressionFaceImage: I, metadata: c, video: { streamH264: A ? this[s("zj5m", 238, 268, 117, 199) + s("]8a5", 174, 299, 276, 241) + x(613, 699, 663, 689, "Pa5e") + a(454, 390, 440, 329, "g3mn") + s("aefU", 293, 154, 272, 246) + s("r)bk", 407, 373, 263, 342)](A) : void 0 } }, E = o[h(193, 159, 79, "zj5m") + "y"](Q);
    function x(f, p, k, w, D) {
      return it(D, p - 436, k - 163, w - 927);
    }
    if (E) throw m[r(-296, "LadJ", -336, -387) + a(540, 455, 380, 515, "EG7J")](E);
    const B = o[s("LadJ", 336, 301, 268, 269) + "e"](Q), l = {};
    l[r(-492, "fH5Q", -514, -507) + h(132, 152, 124, "wrfI") + s("*#lU", 322, 251, 262, 300) + h(108, 140, 194, "QqYX")] = B;
    function h(f, p, k, w, D) {
      return Ue(f - 74, p - -465, k - 63, w);
    }
    return this[x(737, 575, 724, 646, "A$K$") + r(-432, "Q*Zr", -300, -376) + a(303, 387, 326, 335, "*#lU") + "ge"](l);
  }
  async [it("1c)h", -143, -163, -228) + Ue(602, 604, 573, "aoWb") + Rt(65, 88, -16, 9, "wrfI") + Je(99, 147, "Ki0N") + "e"]({ neutralOnCaptureData: n, sessionToken: t, smileOnCaptureData: e }) {
    function A(w, D, b, J, H) {
      return it(b, D - 203, b - 187, H - 542);
    }
    const o = [...n[p(355, 409, "zRG^") + B(772, 717, 779, 727, "Y!5h")][A(306, 189, "A$K$", 303, 277) + p(268, 325, "Ch6U") + B(765, 725, 712, 674, "3(1$") + p(407, 354, "3(1$") + A(185, 173, "mi6E", 236, 254) + f(1057, "tJZs", 1093, 977) + B(640, 565, 712, 674, "Roxo")], ...e[B(743, 703, 729, 723, "aoWb") + a(-359, -372, -369, "]v@U", -295)][p(319, 402, "3(1$") + f(1037, "g3mn", 1084, 1040) + B(692, 610, 690, 723, "fH5Q") + a(-256, -209, -281, "&yar", -209) + B(709, 643, 676, 629, "3(1$") + p(525, 436, "Y!5h") + A(274, 193, "aefU", 188, 235)]], r = [...n[f(950, "!2aZ", 928, 986) + B(655, 601, 593, 658, "7JLZ")][B(783, 832, 773, 694, "FB!g") + f(1064, "fiD]", 1121, 981) + A(254, 355, "&yar", 203, 292)][B(774, 830, 770, 786, "v2UX")](({ detectedObject: w }) => w), ...e[a(-219, -249, -153, "Q*Zr", -167) + f(977, "wrfI", 1058, 974)][B(739, 732, 662, 812, "D89K") + f(1009, "tJZs", 946, 1009) + a(-328, -222, -277, "Ch6U", -303)][a(-374, -263, -291, "g3mn", -292)](({ detectedObject: w }) => w)], g = fB();
    function a(w, D, b, J, H) {
      return it(J, D - 115, b - 461, H - 32);
    }
    const I = await pB(), c = await this[a(-273, -358, -367, "v2UX", -297) + A(329, 329, "r)bk", 317, 323) + B(762, 810, 738, 733, "*&tb") + a(-175, -121, -67, "CiBx", -141) + "ls"](g, I), { cameraProperties: s, croppedImageWithPosition: Q } = n[a(-327, -225, -247, "]v@U", -294) + B(644, 723, 614, 646, "i8iq")], E = await this[a(-308, -277, -376, "QqYX", -299) + A(333, 305, "Y!5h", 248, 258) + A(252, 353, "KaP%", 303, 331) + A(278, 339, "KaP%", 293, 334) + a(-69, -173, -152, "FhrF", -137) + A(385, 395, "Ki0N", 343, 330) + a(-230, -370, -365, "$TGT", -293) + "on"](Q), x = { ...s };
    x[p(362, 450, "Ch6U") + A(183, 323, "aoWb", 255, 243) + p(268, 323, "aefU") + p(451, 416, "KOMw") + a(-346, -339, -239, "zj5m", -290)] = E;
    function B(w, D, b, J, H) {
      return Je(w - 170, w - 607, H);
    }
    x[B(776, 688, 747, 707, "zj5m") + a(-121, -288, -147, "&yar", -212) + f(1019, "Y!5h", 987, 969)] = c, x[B(763, 794, 840, 811, "7JLZ") + f(990, "&yar", 1021, 1014) + a(-206, -210, -144, "vW8[", -191) + B(728, 668, 746, 660, "Ee8L") + B(717, 655, 722, 808, "7JLZ") + p(414, 395, "1c)h") + A(305, 441, "aoWb", 360, 372)] = o, x[A(223, 301, "*#lU", 400, 311) + p(323, 319, "FB!g") + a(-312, -264, -191, "KaP%", -268)] = r;
    const l = x, h = {};
    h[p(376, 352, "CiBx") + A(420, 254, "&yar", 343, 336) + "en"] = t, h[B(766, 676, 768, 754, "KaP%")] = l;
    function f(w, D, b, J, H) {
      return Rt(w - 1003, D - 324, b - 219, J - 159, D);
    }
    function p(w, D, b, J, H) {
      return Je(w - 237, D - 312, b);
    }
    const k = h;
    return this[p(403, 446, "N4K[") + B(668, 632, 624, 679, "!2aZ") + f(1048, "fH5Q", 1031, 1100) + A(342, 218, "D89K", 281, 265) + p(507, 490, "$TGT") + "e"](k);
  }
}
class vE {
  timeoutId;
  dispatcher;
  constructor(n) {
    this.dispatcher = n;
  }
  start(n = hQ) {
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
function iI(i, n) {
  const t = WA(n);
  j(() => {
    t.current = n;
  }, [n]), j(() => {
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function ME(i, n) {
  const { handleAppStateChange: t } = GA(), e = Ie((A) => {
    if (!A.detail) return;
    const { content: o, resultData: r } = A.detail;
    t(O.COMPLETE), n(r, o);
  }, [n, t]);
  iI(i, e);
}
function WE(i) {
  return i !== null && typeof i == "object" && "neutralPhaseImageWithMetadata" in i && "smilePhaseImageWithMetadata" in i;
}
function LE() {
  const { onComplete: i } = x0(), { handleError: n } = GA();
  function t(e, A) {
    try {
      if (!WE(e)) throw new m("Invalid result data received in onComplete callback");
      i(e, A);
    } catch (o) {
      o instanceof m && n(o);
    }
  }
  ME(Cn.ON_COMPLETE, t);
}
function OE() {
  const { cameraService: i } = ze(), { assetsDirectoryPath: n, sessionToken: t } = x0(), { transactionCounting: e } = rs(), { analytics: A } = gc(), { phaseThresholds: o } = d0(), { handleAppStateChangeWithTransitionCheck: r, handleError: g } = GA(), [a, I] = EA();
  LE(), j(() => {
    let s;
    async function Q() {
      if (!i) return;
      const E = O0.getWorkerPath(mQ, n), x = {};
      x.type = "module";
      const B = new Worker(new URL(E, import.meta.url), x), l = B0(B);
      s = await new l();
      const h = new CE(), f = new DQ(r0), p = new FE(), k = new kQ(), w = new vE(f), D = new bQ(), b = new pQ().setAssetsDirectoryPath(n).setCameraService(i).setDetector(s).setDetectionFactory(h).setDispatcher(f).setProtobuf(p).setAnalytics(A).setTransactionCounting(e).setSessionToken(t).setPhaseThresholds(o).setMedianScore(k).setTimedCapture(w).setLongCapture(D).build();
      try {
        I(b), r(O.RUNNING);
      } catch (J) {
        if (J instanceof Error) {
          g(m.fromError(J));
          return;
        }
      }
    }
    return Q(), () => {
      r(O.WAITING), s && s[g0]();
    };
  }, [A, n, i, r, g, t, e, o]);
  const c = {};
  return c.controller = a, c;
}
function JE({ children: i }) {
  const { controller: n } = OE();
  return /* @__PURE__ */ y(oQ, { controller: n, children: i });
}
function UE({ initAppState: i, onError: n }) {
  const [t, e] = EA(i), [A, o] = EA(), [r, g] = EA(!1), a = xt.Lower, I = WA(n);
  j(() => {
    I.current = n;
  }, [n]);
  const c = {};
  return c.redfin = a, c.appState = t, c.setAppState = e, c.error = A, c.setError = o, c.isCameraReady = r, c.setIsCameraReady = g, c.onErrorRef = I, c;
}
function Qg(i, n) {
  Xe.getInstance().dispatchCustomEventOnChange(i, n);
}
function YE(i, n) {
  Xe.getInstance().dispatchCustomEventOnChange(i, n);
}
function TE(i, n) {
  const t = {};
  t.size = n;
  const e = t;
  Xe.getInstance().dispatchCustomEventOnChange(i, e);
}
function PE({
  onError: i
}) {
  const { appState: n, redfin: t, error: e, isCameraReady: A, onErrorRef: o, setAppState: r, setError: g, setIsCameraReady: a } = UE({
    initAppState: O.LOADING,
    onError: i
  }), I = Ie(
    (Q) => {
      Qg(ce.STATE_CHANGED, { appState: O.ERROR, error: Q }), a(!1), o.current(Q), g(Q), r(O.ERROR);
    },
    [a, o, g, r]
  ), c = Ie(
    (Q) => {
      r((E) => {
        const x = typeof Q == "function" ? Q(E) : Q;
        return Qg(ce.STATE_CHANGED, { appState: x }), x;
      });
    },
    [r]
  ), s = Ie(
    (Q) => {
      c((E) => E === O.COMPLETE || E === O.LOADING && Q !== O.RUNNING ? E : Q);
    },
    [c]
  );
  return {
    redfin: t,
    appState: n,
    isCameraReady: A,
    setIsCameraReady: a,
    handleAppStateChange: c,
    handleAppStateChangeWithTransitionCheck: s,
    handleError: I,
    error: e
  };
}
function HE() {
  return vr() ? ca.MOBILE : ca.DESKTOP;
}
function _E({
  children: i,
  thresholdConfigs: n
}) {
  const [t, e] = EA(HE()), A = fA(() => {
    const o = {};
    for (const g of Object.keys(n)) {
      const a = n[g];
      if (a) {
        const { mapper: I, presets: c, userThresholds: s } = a;
        o[g] = I(c[t], s);
      }
    }
    return {
      getPhaseThresholds: (g) => o[g],
      phaseThresholds: o,
      setThresholdsPreset: e,
      thresholdsPreset: t
    };
  }, [n, t, e]);
  return /* @__PURE__ */ y(Wr.Provider, { value: A, children: i });
}
function KE(i) {
  const n = WA(i);
  return JSON.stringify(n.current) !== JSON.stringify(i) && (n.current = i), n.current;
}
function jE(i, n) {
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
function Eg(i, n) {
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
function qE({ children: i, userThresholds: n }) {
  const t = KE(n), e = fA(() => ({
    [M.NEUTRAL]: {
      mapper: jE,
      presets: uQ,
      userThresholds: t
    },
    [M.SMILE]: {
      mapper: Eg,
      presets: Ja,
      userThresholds: t
    },
    [M.SMILE_MANUAL]: {
      mapper: Eg,
      presets: Ja,
      userThresholds: t
    }
  }), [t]);
  return /* @__PURE__ */ y(_E, { thresholdConfigs: e, children: i });
}
const It = {};
It.AUTO_CAPTURE = "auto_capture", It.CAPTURE_FINISHED = "capture_finished", It.CAPTURE_STARTED = "capture_started", It.ESCALATION_TRIGGER = "escalation_trigger", It.LONG_CAPTURE_SMILE = "long_capture_smile";
const jt = It, Ne = {};
Ne.PALM = "palm_auto_capture", Ne.SMILE = "smile_liveness", Ne.DOCUMENT = "document_auto_capture", Ne.MAGNIFEYE = "magnifeye_liveness", Ne.EYE_GAZE = "eye_gaze_liveness", Ne.FACE = "face_auto_capture", Ne.MULTI_RANGE = "multi_range_liveness";
const VE = Ne, ZE = async () => WebAssembly.validate(new Uint8Array([0, -1 * -6713 + -491 + 6125 * -1, 1 * -9255 + 809 * 9 + -1 * -2089, 109, -5 * -433 + 3555 + -5719, -3030 + 1010 * 3, 7460 + -4 * 1865, -512 * 2 + -3804 + 4828, 1, -9 * 529 + -11 * 678 + 8 * 1528, 1 * 6768 + -7029 + 262, -948 + -347 * -9 + -2079, -3 * 1664 + 2067 + -325 * -9, -5847 + 1697 * 4 + -940, 2390 + 2 * -3610 + -4953 * -1, -492 + 539 * 14 + -7051, 942 * 1 + 6836 + -288 * 27, -2777 + 5731 * 1 + -2953 * 1, -4751 + 1 * -3463 + 8214, 1 * -7769 + 7379 + 400, -14107 + -1 * -14117, 2 * -3758 + 7170 + -1 * -347, 431 * -6 + 8939 * -1 + -19 * -607, 4047 * -1 + 4798 * -1 + 8845, -1816 + -627 * -3, -15987 + 1 * 15987, -1501 * -4 + 6396 + -12147, -18060 + 1 * 18075, -2969 * -3 + -1 * -3613 + -47 * 261, 98, 318 * 16 + -1732 + -3345]));
function zE() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(-1 * 2497 + -1 * 6134 + 8647);
}
function XE() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const n = zE();
  return sessionStorage.setItem("dot-user-id", n), n;
}
function $E(i, n) {
  return n ? n === "user" ? "Front Camera" : "Back Camera" : i;
}
function Ax(i) {
  return i > 109521 + 59 * 1141 + -116840 ? ">1m" : "" + i;
}
function ex(i) {
  return i > 1647 + 1317 * -1 + -320 ? ">10" : "" + i;
}
const Cr = (i) => i ? i <= -1324 + 1 * 8951 + -7626 ? Math.round(i * (1 * 9833 + -6063 + -3750)) / (-8046 + 25 * -361 + 17091) : Math.round(i / (8 * 683 + 4950 + -10364)) * (-9641 + 1 * 9691) : -8470 + -14 * -605;
function tx(i) {
  return i ? Math.round(i / 2500) * 2500 : 0;
}
const ox = (i) => i ? Math.round(i / (-8310 + 1 * -2258 + 6 * 1763)) * (559 + 4115 * 1 + 8 * -583) : -8632 + 9 * 313 + 5815, nx = (i) => Math.round(i * (8402 + -525 * 16)) / (6437 + -3021 * -1 + 24 * -394);
async function xg() {
  return await ZE() ? Ia.SIMD : Ia.NO_SIMD;
}
class ix {
  apiKey;
  sessionId;
  distinctId;
  component;
  platform;
  versionName;
  applicationId;
  constructor() {
    this.platform = "web", this.versionName = ns(), this.applicationId = is(window.location.href);
  }
  async init({ apiKey: n, component: t, customer: e, sessionId: A }) {
    !n || !A || !e || !t || (this.apiKey = n, this.sessionId = A, this.distinctId = e, this.component = t, await this.sendEvent(jt.CAPTURE_STARTED));
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
    const n = {};
    return n.platform = this.platform, n.version_name = this.versionName, n.application_id = this.applicationId, n.component = this.component, n.session_id = this.sessionId, n;
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
const so = new ix();
class rx {
  posthog = so;
  component;
  constructor(n) {
    this.component = n;
  }
  createSegmentation(n) {
    return { appVersion: ns(), ...n };
  }
  init(n, t) {
    const e = XE(), A = {};
    A.apiKey = n, A.component = this.component, A.customer = t, A.sessionId = e, so.init(A);
  }
  walleye(n, t) {
    const e = {};
    e.nocturne = n, e.customer = t;
    const A = this.createSegmentation(e);
    so.sendEvent(jt.AUTO_CAPTURE, A);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    so.sendEvent(jt.ESCALATION_TRIGGER, e);
  }
  shouldReportAnalytics(n) {
    return n?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : n?.dotWeb?.features?.["realTimeAnalyticsReportingEnabled"] ?? !0;
  }
  normalizePerformanceCheckup(n) {
    return n < 250 ? ox(n) : Cr(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: ex(o || 0), firstHiccup: Ax(tx(r)), optCheckDetails: e?.reduce((g, a) => "" + g + a.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(a.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(a.beforeOpt) + ";", "") };
  }
}
class ax extends rx {
  constructor() {
    super(VE.SMILE);
  }
  async trackCaptureProcess(n) {
    const t = n.get(M.NEUTRAL), e = n.get(M.SMILE) ?? n.get(M.SMILE_MANUAL);
    if (!t || !e) return;
    const A = nx(t.metadata.averageFps + e.metadata.averageFps) / 2, o = t.metadata.captureProcessTime, r = e.metadata.captureProcessTime, g = this.parsePerformanceCheckup(t.metadata.optCheck, t.metadata.performanceCheckup), a = this.createSegmentation({ faceSize: Cr(e.detectedObject.faceSize), confidence: Cr(t.detectedObject.confidence), imageResolution: t.resultImage.width + "x" + t.resultImage.height, averageFps: A, captureTimeNeutral: o, captureTimeSmile: r, camera: $E(t.metadata.deviceName, t.metadata.facingMode), instructionSet: await xg(), ...g });
    this.posthog.sendEvent(jt.CAPTURE_FINISHED, a);
  }
  async trackLongCapture(n) {
    const { averageExpressionScore: t, averageFps: e, customer: A, durationMs: o, imageResolution: r } = n, g = this.createSegmentation({ imageResolution: r, averageFps: e, instructionSet: await xg(), expressionScore: t, durationMs: o, ...A && { customer: A } });
    this.posthog.sendEvent(jt.LONG_CAPTURE_SMILE, g);
  }
}
const gx = new ax();
function Lr(i, n) {
  const t = WA(n);
  j(() => {
    t.current = n;
  }, [n]), j(() => {
    if (!i) return;
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function sx({ skipOutsideOfCandidateSelection: i }) {
  const { appState: n, handleAppStateChange: t } = GA(), e = Ie((o) => {
    if (!o.detail) return;
    const { detectionDetails: { processedImage: { invalidValidators: r, isInCandidateSelection: g } } } = o.detail;
    if (!(i && !g) && r.includes(FA.FACE_NOT_PRESENT)) {
      if (n !== O.RUNNING) return;
      setTimeout(() => {
        t(O.LOADING);
      }, 10716 + 12 * -893), setTimeout(() => {
        t(O.RUNNING);
      }, 0);
    }
  }, [i, n, t]), A = {};
  return A.handleFaceDetection = e, A;
}
function Ix(i, n) {
  const { handleFaceDetection: t } = sx(n);
  Lr(i, t);
}
function Or(i, n) {
  function t(e) {
    n(e);
  }
  Lr(i, t);
}
function cx(i) {
  const { appState: n, handleAppStateChange: t } = GA();
  function e() {
    n !== O.LOADING && t(O.RUNNING);
  }
  function A(o) {
    o.detail?.["instruction"] === Oo.CONTINUE_DETECTION && e();
  }
  Or(i, A);
}
const dg = () => typeof document < "u" && document.hasFocus();
function Cx(i = {}) {
  const n = WA(i), t = WA(dg()), [e, A] = EA(dg);
  j(() => {
    n.current = i;
  }), j(() => {
    function r(c) {
      t.current = c, A(c);
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
function Bx(i = {}) {
  const { appState: n } = GA();
  Cx({ onBlur: () => {
    n === O.WAITING || n === O.COMPLETE || i.onBlur?.();
  }, onFocus: () => {
    n === O.WAITING || n === O.COMPLETE || i.onFocus?.();
  } });
}
function Qx(i) {
  const { controller: n } = i0(), { appState: t, handleAppStateChange: e, setIsCameraReady: A } = GA();
  Bx({ onBlur: () => {
    e(O.LOADING), A(!1);
  }, onFocus: () => {
    e(O.RUNNING), A(!0);
  } }), cx(i.CONTROL), j(() => {
    t === O.COMPLETE && n?.reset(), t === O.LOADING && n?.reset(), t === O.WAITING && n?.reset(), t === O.RUNNING && n?.init();
  }, [n, t]);
}
function Ex(i) {
  const [n, t] = EA(), e = Ie((o) => {
    o.detail && t(o.detail.phaseName);
  }, []);
  Lr(i, e);
  const A = {};
  return A.currentPhaseName = n, A;
}
function xx() {
  return Ex(ce.PHASE_CHANGED);
}
function dx() {
  Qx(ce);
  const { currentPhaseName: i } = xx(), n = {};
  n.skipOutsideOfCandidateSelection = i === M.NEUTRAL, Ix(ce.DETECTION_CHANGED, n);
}
const lx = Zt.div`
  position: relative;
`, ux = Zt.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
function hx(i) {
  const { cameraService: n } = ze(), { handleAppStateChange: t, handleError: e } = GA();
  async function A() {
    if (n) {
      t(O.LOADING);
      try {
        await n.switchCamera(), t(O.RUNNING);
      } catch (r) {
        if (r instanceof Error) {
          e(m.fromCameraError(r));
          return;
        }
      }
    }
  }
  function o(r) {
    r.detail?.["instruction"] === Oo.SWITCH_CAMERA && (r.stopImmediatePropagation(), A());
  }
  Or(i, o);
}
const fx = (i) => i === vg.CONTROL ? !vr() : !0;
function px(i) {
  const { cameraService: n } = ze(), { isCameraReady: t } = GA(), [e, A] = EA(), o = fA(() => {
    const c = t && n && n.isStreaming && n.getCameraSettings().facingMode;
    return c ? e ?? c === "user" : e ?? fx(i);
  }, [n, e, i, t]);
  function r() {
    A(e === void 0 ? !o : !e);
  }
  function g() {
    A(void 0);
  }
  function a(c) {
    switch (c.detail?.["instruction"]) {
      case Oo.TOGGLE_MIRROR:
        r();
        break;
      case Oo.SWITCH_CAMERA:
        g();
        break;
      default:
        return;
    }
  }
  Or(i, a);
  const I = {};
  return I.shouldCameraMirror = o, I;
}
function mx(i, n) {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  j(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, YE(i, A);
  }, [t, e, i]);
}
function yx(i) {
  const { cameraResolution: n } = ze(), { shouldCameraMirror: t } = px(i.CONTROL);
  hx(i.CONTROL);
  const e = {};
  e.cameraResolution = n, e.shouldCameraMirror = t, mx(i.CAMERA_PROPS_CHANGED, e), j(() => () => {
    Xe.getInstance().restart();
  }, []);
  const A = {};
  return A.shouldCameraMirror = t, A;
}
const wx = Zt.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Dx = Zt.div`
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
function bx() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const kx = fr(
  ({ detectionDetails: i, isImageMirror: n }, t) => bx() ? (console.log(i), /* @__PURE__ */ y(jA, { children: [
    /* @__PURE__ */ y(wx, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ y(Dx, { children: /* @__PURE__ */ y("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
);
function Sx({
  detectionDetails: i,
  samVersion: n,
  shouldCameraMirror: t,
  thresholds: e,
  thresholdsPreset: A
}) {
  const { cameraResolution: o } = ze(), { redfin: r } = bn(), g = WA(null);
  if (j(() => {
    if (!g.current || !o || !i)
      return;
    g.current.width = o.width, g.current.height = o.height, sc(g.current);
    const B = ln(o), l = xc(o);
    oi(g.current, B, "lime"), oi(g.current, l, "blue"), RQ(g.current, i.processedImage.detection), Pt(g.current, i.processedImage.detection.leftEye.center, "cyan"), Pt(g.current, i.processedImage.detection.rightEye.center, "cyan"), Pt(g.current, i.processedImage.detection.mouth.center, "cyan"), FQ(g.current, i.processedImage.detection, o);
    const h = e.edgeDistanceToImageShorterSideRatio;
    if (Gc(h)) {
      const f = J0(
        o,
        h.min,
        B
      );
      oi(g.current, f, "yellow");
    }
  }, [o, i, e]), !o || !i)
    return null;
  const {
    avgFps: a,
    detectionTime: I,
    processedImage: { detection: c, instructionCode: s, invalidValidators: Q, isEscalated: E }
  } = i, x = {
    Confidence: c.confidence,
    Brightness: c.brightness,
    Sharpness: c.sharpness,
    "Face size": c.faceSize,
    "L eye conf / status": `${c.leftEye.confidence} / ${c.leftEye.status}`,
    "R eye conf / status": `${c.rightEye.confidence} / ${c.rightEye.status}`,
    "Mouth conf / status": `${c.mouth.confidence} / ${c.mouth.status}`,
    "Detection time": I,
    "Avg FPS": a,
    Instruction: s,
    "Resolution w / h": `${o.width} / ${o.height}`,
    "Invalid validators": Q,
    "Component version": "8.0.2",
    "SAM version": n,
    "Escalated instruction": E,
    Tier: r,
    "Thresholds preset": A
  };
  return /* @__PURE__ */ y(
    kx,
    {
      ref: g,
      cameraResolution: o,
      detectionDetails: x,
      isImageMirror: t
    }
  );
}
function Gx() {
  return i0();
}
function Nx() {
  const [i, n] = EA(void 0), t = Ie((A) => {
    n(A.detail);
  }, []);
  iI(ce.DETECTION_CHANGED, t);
  const e = {};
  return e.detectionData = i, e;
}
const Rx = fr(function({ shouldCameraMirror: n }, t) {
  const { detectionData: e } = Nx(), { controller: A } = Gx(), { phaseThresholds: o, thresholdsPreset: r } = d0(), { appState: g } = GA(), a = A?.getCurrentDetectionName();
  if (a === void 0 || g !== O.RUNNING)
    return null;
  const I = o[a];
  return /* @__PURE__ */ y("div", { ref: t, children: /* @__PURE__ */ y(
    Sx,
    {
      detectionDetails: e?.detectionDetails,
      samVersion: L0,
      shouldCameraMirror: n,
      thresholds: I,
      thresholdsPreset: r
    }
  ) });
});
function Fx({ isRounded: i, isSquare: n, ...t }) {
  return i ? /* @__PURE__ */ y("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ y("rect", { fill: "#000", ...t, rx: n ? "0" : "50%" });
}
function vx(i, n) {
  const [t, e] = EA(!1), A = () => e((g) => !g), o = "" + t;
  yt(() => {
    function g() {
      if (!i.current) return;
      const s = new MutationObserver(() => {
        A();
      }), Q = {};
      return Q.childList = !0, Q.subtree = !0, Q.attributes = !0, s.observe(i.current, Q), s;
    }
    function a() {
      if (!i.current?.["parentElement"]) return;
      const s = new MutationObserver((E) => {
        E.find((B) => {
          for (const l of B.removedNodes)
            if (l !== n?.current && l === i.current)
              return !0;
        }) && A(), E.forEach((B) => {
          B.addedNodes.forEach((l) => {
            l !== n?.current && l.parentElement?.removeChild(l);
          });
        });
      }), Q = {};
      return Q.childList = !0, s.observe(i.current.parentElement, Q), s;
    }
    const I = g(), c = a();
    return () => {
      c?.disconnect(), I?.disconnect();
    };
  });
  const r = {};
  return r.key = o, r;
}
const Mx = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Wx({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = WA(null), { key: o } = vx(A, t);
  return /* @__PURE__ */ y("div", { ref: A, style: Mx, children: /* @__PURE__ */ y("svg", { viewBox: `0 0 ${e} ${n}`, children: [
    /* @__PURE__ */ y("defs", { children: [
      /* @__PURE__ */ y("mask", { id: "placeholder", children: [
        /* @__PURE__ */ y("rect", { fill: "#fff", height: "100%", width: "100%" }),
        i
      ] }),
      /* @__PURE__ */ y(
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
            /* @__PURE__ */ y("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ y("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
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
    /* @__PURE__ */ y("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, o);
}
function Lx({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = dc(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, g = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ y(
    Wx,
    {
      cutOut: i || /* @__PURE__ */ y(Fx, { height: A, width: o, x: r, y: g }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function Ox({ debugLayerRef: i }) {
  const { appState: n } = GA(), { cameraResolution: t } = ze(), { redfin: e } = GA(), A = t && e === xt.Lower, o = n !== O.RUNNING;
  return A ? /* @__PURE__ */ y(
    Lx,
    {
      fullOverlay: o,
      ignoreElement: i,
      resolution: t
    }
  ) : null;
}
function Jx({ children: i, shouldCameraMirror: n }) {
  const t = WA(null);
  return /* @__PURE__ */ y(jA, { children: [
    /* @__PURE__ */ y(Ox, { debugLayerRef: t }),
    i,
    /* @__PURE__ */ y(Rx, { ref: t, shouldCameraMirror: n })
  ] });
}
function Ux() {
  const { videoRef: i } = ze(), { isCameraReady: n } = GA(), { shouldCameraMirror: t } = yx(ce);
  return /* @__PURE__ */ y(Jx, { shouldCameraMirror: t, children: /* @__PURE__ */ y(
    ux,
    {
      ref: i,
      $isImageMirror: t,
      $isVisible: n,
      autoPlay: !0,
      id: Cc,
      muted: !0,
      playsInline: !0
    }
  ) });
}
function Yx(i, n) {
  j(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      TE(n, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, n]);
}
function Tx({ children: i }) {
  const n = WA(null);
  return Yx(n, ce.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ y(lx, { ref: n, children: i });
}
function Px() {
  return dx(), /* @__PURE__ */ y(Tx, { children: /* @__PURE__ */ y(Ux, {}) });
}
function Hx({ configuration: i }) {
  if (i)
    return /* @__PURE__ */ y(nB, { target: i.styleTarget, children: /* @__PURE__ */ y(tQ, { configuration: i, children: /* @__PURE__ */ y(qE, { userThresholds: i.qualityAttributeThresholds, children: /* @__PURE__ */ y(Kc, { children: /* @__PURE__ */ y(
      zc,
      {
        transactionCountingToken: i.transactionCountingToken,
        transactionType: Xc.SMILE,
        children: /* @__PURE__ */ y(
          vc,
          {
            value: PE({
              onError: i.onError
            }),
            children: /* @__PURE__ */ y(Fc, { analytics: gx, apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt", children: /* @__PURE__ */ y(TB, { cameraConfiguration: i.camera, children: /* @__PURE__ */ y(JE, { children: /* @__PURE__ */ y(NI, { children: /* @__PURE__ */ y(Px, {}) }) }) }) })
          }
        )
      }
    ) }) }) }) });
}
lI(Hx, "x-dot-smile-liveness", ["configuration"]);
